package edu.brown.cs.student.main;

import com.google.gson.Gson;
import edu.brown.cs.student.main.Recommender.DormRecommender;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.List;

public class recommendationHandler implements Route {

  public recommendationHandler() {

  }

  @Override
  public Object handle(Request request, Response response) throws Exception {
    List<String> recommendations = DormRecommender.getRecommendations();
    Gson gson = new Gson();
    return gson.toJson(recommendations);
  }
}