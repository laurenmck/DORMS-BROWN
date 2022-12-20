package edu.brown.cs.student.main.reviewBackend;

import com.google.cloud.firestore.Firestore;
import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import spark.Route;
import org.json.JSONObject;
import java.util.ArrayList;
import java.util.HashMap;


/**
 * a class that handles the method for adding a new comment to the firestore database, adds comment
 * and sends updated comments to the frontend
 */
public class updateHandler implements Route {
  public Firestore db;

  /**
   * constructor for the updateHandler class that ensures the database is connected
   */
  public updateHandler(Firestore conn) {
    db = conn;
  }

  /*method that adds new comment to the firebase database and gets the updated list of reviews
   for the dorm */
  @Override
  public Object handle(Request request, Response response) throws Exception {

    JSONObject responseObject = new JSONObject(request.body());
    HashMap<String, ArrayList<ArrayList<Object>>> hash = new HashMap<>();

    String dormName = responseObject.getString("dormName");

    reviewDatabase.insertItem(dormName,
        responseObject.getString("review"), responseObject.getString("image"),
        responseObject.getInt("rating"), responseObject.getString("email"), db);
    hash.put("updatedReviews", reviewDatabase.getReviewGroup(dormName, db));
    Gson gson = new Gson();
    System.out.println("Table Updated");
    return gson.toJson(hash);
  }
}