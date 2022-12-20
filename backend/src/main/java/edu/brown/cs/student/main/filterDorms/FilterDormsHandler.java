package edu.brown.cs.student.main.filterDorms;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.gson.Gson;
import org.json.JSONException;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.json.JSONObject;

public class FilterDormsHandler implements Route {

  private final Firestore db;

  public FilterDormsHandler(Firestore db) {
    this.db = db;
  }

  @Override
  public String handle(Request request, Response response) {
    try {
      Gson gson = new Gson();

      ApiFuture<QuerySnapshot> query = db.collection("dorm").get();
      QuerySnapshot querySnapshot = query.get();
      List<QueryDocumentSnapshot> documents = querySnapshot.getDocuments();

      ArrayList<QueryDocumentSnapshot> dorms = new ArrayList<>(documents);
      FilterDorms dormFilter = new FilterDorms(dorms);

      JSONObject requestObject = new JSONObject(request.body());
      String filterBy = requestObject.getString("filterBy");
      String filterTypes = requestObject.getString("filterType");

      ArrayList<String> filteredNames = dormFilter.multipleFiltersDorm(filterBy, filterTypes);

      return gson.toJson(filteredNames);
    } catch (ExecutionException | InterruptedException | JSONException e) {
      System.out.println("ERROR: " + e.getMessage());
      return null;
    }
  }
}
