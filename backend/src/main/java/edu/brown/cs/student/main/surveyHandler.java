package edu.brown.cs.student.main;

import com.google.cloud.firestore.Firestore;
import com.google.gson.Gson;
import edu.brown.cs.student.main.Recommender.DormRecommender;
import org.json.JSONObject;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class surveyHandler implements Route {

  private List<Map> allDorms;
  private List<Map> recommendableDorms;

  /**
   * constructor for the surveyHandler class
   */
  public surveyHandler(List<Map> allDorms) {
    this.allDorms = allDorms;
    recommendableDorms = new ArrayList<>();
    this.getRecommendableDorms();
  }

  // gets rid of freshman dorms/dorms that should not be recommended
  public void getRecommendableDorms() {
    for (int i = 0; i < allDorms.size(); i++) {
      int id = Integer.parseInt((String) allDorms.get(i).get("id"));
      if (id > 8 && id != 14 && id != 26) {
        recommendableDorms.add(allDorms.get(i));
      }
    }
  }

  @Override
  public Object handle(Request request, Response response) throws Exception {
    JSONObject responseObject = new JSONObject(request.body());
    boolean singlePreference = responseObject.getBoolean("singlePreference");
    boolean doublePreference = responseObject.getBoolean("doublePreference");
    boolean triplePreference = responseObject.getBoolean("triplePreference");
    boolean quadPreference = responseObject.getBoolean("quadPreference");
    boolean suitePreference = responseObject.getBoolean("suitePreference");
    String location = responseObject.getString("location");
    String bathroom = responseObject.getString("bathroom");
    String floor = responseObject.getString("floor");
    String commonRoom = responseObject.getString("commonRoom");
    String elevator = responseObject.getString("elevator");
    int bathroomPreference =
        this.setPreferenceHelper(bathroom, "Not Important", "Neutral", "Important");
    int carpetPreference =
        this.setPreferenceHelper(floor, "Hardwood", "No Preference", "Carpeted");
    int commonRoomPreference =
        this.setPreferenceHelper(commonRoom, "Not Important", "Neutral", "Important");
    int elevatorPreference =
        this.setPreferenceHelper(elevator, "Not Important", "Neutral", "Important");
    Dorm surveyAnswer = new Dorm("survey answer", singlePreference, doublePreference,
        triplePreference, quadPreference, suitePreference, location, bathroomPreference,
        carpetPreference, commonRoomPreference, elevatorPreference);
    DormRecommender.setSurveyAnswer(surveyAnswer);
    DormRecommender.generateRecommendations(recommendableDorms);
    List<String> recommendations = DormRecommender.getRecommendations();
    Gson gson = new Gson();
    return gson.toJson(recommendations);
  }

  public int setPreferenceHelper(String answer, String negative, String zero, String one) {
    if (answer.equals(negative)) {
      return -1;
    } else if (answer.equals(zero)) {
      return 0;
    } else if (answer.equals(one)) {
      return 1;
    }
    return 0;
  }

}