package edu.brown.cs.student.main.reviewBackend;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.io.File;

/**
 * a class that takes care of connecting to, updating and returning updates to the firebase
 * reviews database
 */
public final class reviewDatabase {
  /**
   * a field that represents the connection to the firebase database
   */

  /**
   * empty constructor for the reviewDatabase class
   */
  public reviewDatabase() {
  }

  /**
   * method that adds a review to the review cloud database
   * @param dormName - the name of the dorm the review is for
   * @param review -- the review of the dorm
   * @param image -- image to display
   * @param rating -- star rating of dorm
   * @throws ExecutionException --
   * @throws InterruptedException --
   */
  public static void insertItem(String dormName, String review, String image, int rating, String email, Firestore db) throws ExecutionException, InterruptedException {
    // Create a Map to store the data we want to set
    Map<String, Object> newReview = new HashMap<>();
    newReview.put("dormName", dormName);
    newReview.put("image", image);
    newReview.put("review", review);
    newReview.put("rating", rating);
    newReview.put("email", email);
    db.collection("reviews").add(newReview);
    System.out.println("review added");
  }

  /**
   * a getter method that returns all the reviews for a specific input dorm
   * @param dormName -- name of dorm to retrieve reviews for
   * @return a list of QueryDocumentSnapshot - representing the reviews
   * @throws ExecutionException --
   * @throws InterruptedException --
   */
  public static ArrayList<ArrayList<Object>> getReviewGroup(String dormName, Firestore db) throws ExecutionException, InterruptedException {
    ApiFuture<QuerySnapshot> future =
        db.collection("reviews").whereEqualTo("dormName", dormName).get();
    List<QueryDocumentSnapshot> documents = future.get().getDocuments();

    ArrayList<ArrayList<Object>> reviews = new ArrayList<>();
    System.out.println(documents.size());
    for (DocumentSnapshot document : documents) {
      ArrayList<Object> map = new ArrayList<>();
      map.add(document.getString("dormName"));
      map.add(document.getString("review"));
      map.add(document.getDouble("rating"));
      map.add(document.getString("image"));
      map.add(document.getString("email"));
      reviews.add(map);
    }
    return reviews;
  }

  /**
   * a getter method that returns all the reviews for a specific input dorm
   * @param email -- name of dorm to retrieve reviews for
   * @return a list of QueryDocumentSnapshot - representing the reviews
   * @throws ExecutionException --
   * @throws InterruptedException --
   */
  public static ArrayList<ArrayList<Object>> getEmailGroup(String email, Firestore db) throws ExecutionException, InterruptedException {
    ApiFuture<QuerySnapshot> future =
        db.collection("reviews").whereEqualTo("email", email).get();
    List<QueryDocumentSnapshot> documents = future.get().getDocuments();

    ArrayList<ArrayList<Object>> reviews = new ArrayList<>();
    System.out.println(documents.size());
    for (DocumentSnapshot document : documents) {
      ArrayList<Object> map = new ArrayList<>();
      map.add(document.getString("dormName"));
      map.add(document.getString("review"));
      map.add(document.getDouble("rating"));
      map.add(document.getString("image"));
      reviews.add(map);
    }
    return reviews;
  }
}