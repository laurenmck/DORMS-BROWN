package edu.brown.cs.student.main.Recommender;

import com.google.cloud.firestore.QueryDocumentSnapshot;
import edu.brown.cs.student.main.Dorm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * This class creates a Bloom Filter for each dorm.
 * It is given a list of all the dorms from the database, then queries the data
 * for the attributes that will be inserted into the Bloom Filter.
 */
public class DormBloomFilterCreator {

  /**
   * this field is a map where each key is a dorm name and value is the corresponding Bloom Filter.
   */
  private Map<String, BloomFilter<String>> dormFilters;

  /**
   * this field represents all the dorms, where the data is taken from the database.
   */
  private final List<Map> allDorms;

  private boolean bathroomNull;
  private boolean carpetNull;
  private boolean commonRoomNull;
  private boolean elevatorNull;

  /**
   * Constructor for the DormBloomFilterCreator.
   * It calls the helper method createBFEachDorm to create a bloom filter
   *
   * @param allDorms a list of all the dorms from the database.
   */
  public DormBloomFilterCreator(List<Map> allDorms, boolean bathroomNull, boolean carpetNull,
                                boolean commonRoomNull, boolean elevatorNull) {
    this.allDorms = allDorms;
    this.dormFilters = new HashMap<>();
    this.createBFEachDorm();
    this.bathroomNull = bathroomNull;
    this.carpetNull = carpetNull;
    this.commonRoomNull = commonRoomNull;
    this.elevatorNull = elevatorNull;
  }

  /**
   * This helper method creates a bloom filter from each dorm using the allDorms list.
   * Each bloom filter is then added to the dormFilters array list.
   */
  public void createBFEachDorm() {
    for (Map dorm : allDorms) {
      String name = (String) dorm.get("name");
      boolean hasSingles = false;
      boolean hasDoubles = false;
      boolean hasTriples = false;
      boolean hasQuads = false;
      boolean hasSuites = false;
      List<String> roomTypes = (List<String>) dorm.get("room");
      for (int i = 0 ; i < roomTypes.size(); i++) {
        String roomType = roomTypes.get(i);
        if (roomType.equals("singles")) {
          hasSingles = true;
        } else if (roomType.equals("doubles")) {
          hasDoubles = true;
        } else if (roomType.equals("triples")) {
          hasTriples = true;
        } else if (roomType.equals("quads")) {
          hasQuads = true;
        } else if (roomType.equals("suites")) {
          hasSuites = true;
        }
      }
      String location = (String) dorm.get("location");
      String bathroom = (String) dorm.get("bathroom");
      int bathroomPreference;
      if (bathroomNull) {
        bathroomPreference = 0;
      } else {
        if (bathroom.equals("semiprivate") || bathroom.equals("private")) {
          bathroomPreference = 1;
        } else { //bathroom.equals("communal")
          bathroomPreference = -1;
        }
      }
      boolean hasCarpet = (Boolean) dorm.get("carpet");
      int carpetPreference;
      if (carpetNull) {
        carpetPreference = 0;
      } else {
        if (hasCarpet) {
          carpetPreference = 1;
        } else {
          carpetPreference = -1;
        }
      }
      boolean hasCommonRoom = (Boolean) dorm.get("common_room");
      int commonRoomPreference;
      if (commonRoomNull) {
        commonRoomPreference = 0;
      } else {
        if (hasCommonRoom) {
          commonRoomPreference = 1;
        } else {
          commonRoomPreference = -1;
        }
      }
      boolean hasElevator = (Boolean) dorm.get("elevator");
      int elevatorPreference;
      if (elevatorNull) {
        elevatorPreference = 0;
      } else {
        if (hasElevator) {
          elevatorPreference = 1;
        } else {
          elevatorPreference = -1;
        }
      }
      Dorm d = new Dorm(name, hasSingles, hasDoubles, hasTriples,
          hasQuads, hasSuites, location, bathroomPreference,
          carpetPreference, commonRoomPreference, elevatorPreference);
      List<String> dormVector = d.vectorizeDatum();
      BloomFilter<String> dormBF = new BloomFilter(0.1, dormVector.size());
      dormBF.insertAll(dormVector);
      dormFilters.put(d.getIDString(), dormBF);
    }
  }

  /**
   * This is a getter method to retrieve the map of Bloom Filters representing each dorm.
   *
   * @return dormFilters  list where each element is a Bloom Filter corresponding to a dorm.
   */
  public Map<String, BloomFilter<String>> getDormBloomFilters() {
    return this.dormFilters;
  }
}