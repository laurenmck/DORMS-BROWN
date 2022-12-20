package edu.brown.cs.student.main.Recommender;

import edu.brown.cs.student.main.Dorm;

import java.util.List;
import java.util.Map;

public class DormRecommender {

  private static int numAttributes;
  private static BloomFilter<String> surveyBF;
  private static Dorm surveyAnswer;
  private static List<String> recommendations;
  private static List<Integer> recommendationsID;

  private DormRecommender() {

  }

  public static void setSurveyAnswer(Dorm d) {
    surveyAnswer = d;
    List<String> surveyVector = d.vectorizeDatum();
    numAttributes = surveyVector.size();
    surveyBF = new BloomFilter(0.1, numAttributes);
    surveyBF.insertAll(surveyVector);
  }

  public static void generateRecommendations(List<Map> recommendableDorms) {
    boolean bathroomNull = false;
    if (surveyAnswer.getBathroomPreference() == 0) {
      bathroomNull = true;
    }
    boolean carpetNull = false;
    if (surveyAnswer.getCarpetPreference() == 0) {
      carpetNull = true;
    }
    boolean commonRoomNull = false;
    if (surveyAnswer.getCommonRoomPreference() == 0) {
      commonRoomNull = true;
    }
    boolean elevatorNull = false;
    if (surveyAnswer.getElevatorPreference() == 0) {
      elevatorNull = true;
    }
    DormBloomFilterCreator generator =
        new DormBloomFilterCreator(recommendableDorms, bathroomNull, carpetNull,
            commonRoomNull, elevatorNull);
    Map<String, BloomFilter<String>> dormBloomFilters = generator.getDormBloomFilters();
    BFRecommender dormRecommender = new BFRecommender(dormBloomFilters, "survey", surveyBF);
    recommendations = dormRecommender.getRecommendations(3);
  }

  public static List<String> getRecommendations() {
    return recommendations;
  }

  public static void setRecommendationsID(List<Integer> recommendationsIDList) {
    recommendationsID = recommendationsIDList;
  }

  public static List<Integer> getRecommendationsID() {
    return recommendationsID;
  }

}