package edu.brown.cs.student.main;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import com.google.protobuf.Api;
import edu.brown.cs.student.main.reviewBackend.profileHandler;
import joptsimple.OptionParser;
import joptsimple.OptionSet;
import spark.Spark;
import com.google.gson.Gson;

// firebase imports
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

//review handler
import edu.brown.cs.student.main.reviewBackend.reviewHandler;
import edu.brown.cs.student.main.reviewBackend.updateHandler;
import edu.brown.cs.student.main.reviewBackend.reviewDatabase;

// filter handler
import edu.brown.cs.student.main.filterDorms.FilterDormsHandler;

/**
 * The Main class of our project. This is where execution begins.
 */

public final class Main {

  private static final int DEFAULT_PORT = 4567;
  private Firestore db;

  /**
   * The initial method called when execution begins.
   *
   * @param args An array of command line arguments
   */
  public static void main(String[] args)
      throws IOException, ExecutionException, InterruptedException {
    new Main(args).run();
  }

  private String[] args;

  private Main(String[] args) {
    this.args = args;
  }

  private void run() throws IOException, ExecutionException, InterruptedException {


    OptionParser parser = new OptionParser();
    parser.accepts("gui");
    parser.accepts("port").withRequiredArg().ofType(Integer.class).defaultsTo(DEFAULT_PORT);

    OptionSet options = parser.parse(args);

    initializeFirestore();

//    reviewDatabase.initializeFirestore();
    System.out.println("other connectin initialized");
//    reviewDatabase.insertItem();
    System.out.println("added");
//    reviewDatabase.getDormNames();


    if (options.has("gui")) {
      runSparkServer((int) options.valueOf("port"));
    }

  }
  
  private void runSparkServer(int port) throws ExecutionException, InterruptedException {
      Spark.port(port);
      Spark.externalStaticFileLocation("src/main/resources/static");
      
      Spark.options("/*", (request, response) -> {
          String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
          if (accessControlRequestHeaders != null) {
            response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
          }

          String accessControlRequestMethod = request.headers("Access-Control-Request-Method");

          if (accessControlRequestMethod != null) {
            response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
          }

          return "OK";
        });

        Spark.before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
        
        // Put Routes Here
        // Get dorm by id
        Spark.get("/dorms/:id", (request, response) -> {
          response.type("application/json");
          return getDormsById(request.params("id"), db);
        });
        // Get dorms
        Spark.get("/dorms", (request, response) -> {
          response.type("application/json");
          return getDorms(db);
        });

        Spark.post("/getReview", new reviewHandler(db));

        Spark.post("/getProfile", new profileHandler(db));

        Spark.post("/addReview", new updateHandler(db));

        Spark.post("/filter", new FilterDormsHandler(db));

        Spark.post("/submitSurvey", new surveyHandler(getDorms(db)));

        Spark.post("/displayRecommendations", new recommendationHandler());

        Spark.init();
    }


  /**
   * This method is an endpoint that retrieves all of the dorms. The dorms are in a list, and
   * each index in the list is a hashmap that maps the attribute name to the attribute value.
   * @param db database
   * @return list of hashmaps
   * @throws ExecutionException
   * @throws InterruptedException
   */
    private static List<Map> getDorms(Firestore db)
        throws ExecutionException, InterruptedException {
      ApiFuture<QuerySnapshot> query = db.collection("dorm").get();
      QuerySnapshot querySnapshot = query.get();
      List<QueryDocumentSnapshot> documents = querySnapshot.getDocuments();
      List<Map> list = new ArrayList<>();
      for (DocumentSnapshot document : documents) {
        Map map = new HashMap<>();
        map.put("id", document.getId());
        map.put("bathroom", document.getString("bathroom"));
        map.put("carpet", document.getBoolean("carpet"));
        map.put("common_room", document.getBoolean("common_room"));
        map.put("description", document.getString("description"));
        map.put("elevator", document.getBoolean("elevator"));
        map.put("kitchen", document.getString("kitchen"));
        map.put("location", document.getString("location"));
        map.put("name", document.getString("name"));
        map.put("room", document.get("room"));
        map.put("map", document.get("map"));
        map.put("images", document.get("images"));
        map.put("floors", document.get("floors"));
        map.put("floorA", document.get("floorA"));
        map.put("floorB", document.get("floorB"));
        map.put("floorC", document.get("floorC"));
        map.put("floorD", document.get("floorD"));
        map.put("housing_type", document.get("housing_type"));
        list.add(map);
      }
      return list;
    }

  /**
   * This method is an endpoint that retrieves the attributes of a dorm based on the ID.
   * @param id of the dorm
   * @param db database
   * @return Json of dorm attributes
   * @throws ExecutionException
   * @throws InterruptedException
   */
    private static String getDormsById(String id, Firestore db) throws ExecutionException, InterruptedException {
      Gson gson = new Gson();
      ApiFuture<DocumentSnapshot> future = db.collection("dorm").document(id).get();
      DocumentSnapshot document = future.get();
      Map map = new HashMap<>();
      map.put("id", document.getId());
      map.put("bathroom", document.getString("bathroom"));
      map.put("carpet", document.getBoolean("carpet"));
      map.put("common_room", document.getBoolean("common_room"));
      map.put("description", document.getString("description"));
      map.put("elevator", document.getBoolean("elevator"));
      map.put("kitchen", document.getString("kitchen"));
      map.put("location", document.getString("location"));
      map.put("name", document.getString("name"));
      map.put("room", document.get("room"));
      map.put("map", document.get("map"));
      map.put("images", document.get("images"));
      map.put("floors", document.get("floors"));
      map.put("floorA", document.get("floorA"));
      map.put("floorB", document.get("floorB"));
      map.put("floorC", document.get("floorC"));
      map.put("floorD", document.get("floorD"));
      map.put("housing_type", document.get("housing_type"));
      return gson.toJson(map);
    }

  /**
   * This method initializes Firestore use the Firebase database.
   * @throws IOException
   */
  private void initializeFirestore() throws IOException {
    // Use a service account
    InputStream serviceAccount = new FileInputStream("config.json");
    GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccount);
    FirebaseOptions options = new FirebaseOptions.Builder()
        .setCredentials(credentials)
        .build();
    FirebaseApp.initializeApp(options);
    db = FirestoreClient.getFirestore();
  }
}
