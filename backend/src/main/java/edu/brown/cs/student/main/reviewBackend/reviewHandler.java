package edu.brown.cs.student.main.reviewBackend;

import com.google.cloud.firestore.Firestore;
import com.google.gson.Gson;
import org.json.JSONObject;
import spark.Request;
import spark.Response;
import spark.Route;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * a class the takes care of getting the reviews for a specific dorm building from the backend
 */
public class reviewHandler implements Route {
  public Firestore db;

  /**
   * constructor that sets up the connection to the firebase database
   * @param conn
   */
  public reviewHandler(Firestore conn) {
    db = conn;
  }

  //calls the backend method to get reviews from the backend database
  @Override
  public Object handle(Request request, Response response) throws Exception {
    JSONObject responseObject = new JSONObject(request.body());
    HashMap<String, ArrayList<ArrayList<Object>>> hash = new HashMap<>();
    System.out.println(responseObject.getString("dormName"));
    hash.put("reviews", reviewDatabase.getReviewGroup(responseObject.getString("dormName"), db));
    System.out.println("reviews loaded");
    Gson gson = new Gson();
    return gson.toJson(hash);
  }
}