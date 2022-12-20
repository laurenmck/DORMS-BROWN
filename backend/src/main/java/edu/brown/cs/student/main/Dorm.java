package edu.brown.cs.student.main;

import edu.brown.cs.student.main.Recommender.BFDatum;

import java.util.ArrayList;
import java.util.List;

public class Dorm implements BFDatum {
  /**
   * field that represents the dorm name.
   */
  private final String dormName;
  /**
   * field that represents whether the dorm has singles.
   */
  private final boolean hasSingles;
  /**
   * field that represents whether the dorm has doubles.
   */
  private final boolean hasDoubles;
  /**
   * field that represents whether the dorm has triples.
   */
  private final boolean hasTriples;
  /**
   * field that represents whether the dorm has quads.
   */
  private final boolean hasQuads;
  /**
   * field that represents whether the dorm has suites.
   */
  private final boolean hasSuites;
  /**
   * field that represents the location of the dorm on campus.
   */
  private final String location;
  /**
   * field that represents the bathroom style within the dorm.
   */
  //private final String bathroom;
  private final int bathroomPreference;
  /**
   * field that represents whether the dorm has carpet.
   */
  //private final boolean hasCarpet;
  private final int carpetPreference;
  /**
   * field that represents whether the dorm has a common room.
   */
  //private final boolean hasCommonRoom;
  private final int commonRoomPreference;
  /**
   * field that represents whether the dorm has an elevator.
   */
  //private final boolean hasElevator;
  private final int elevatorPreference;

  /**
   * Constructor for a dorm that sets all the fields.
   *
   * @param name        string representing the name of the dorm.
   * @param hasSingles  boolean representing whether the dorm has singles.
   * @param hasDoubles  boolean representing whether the dorm has doubles.
   * @param hasTriples  boolean representing whether the dorm has triples.
   * @param hasQuads    boolean representing whether the dorm has quads.
   * @param hasSuites   boolean representing whether the dorm has suites.
   * @param location    string representing the location of the dorm (north, south, or center).
   * @param bathroomPreference    int representing the bathroom style of the dorm.
   *                              (or users preference for a certain bathroom style)
   *                              -1 : Not Important/Dorm does not have private bathrooms
   *                              0 : Neutral, attribute not considered in bloom filter
   *                              1 : Important/Dorm has private/semiprivate bathrooms
   * @param carpetPreference      int representing whether the dorm has carpeted floors.
   *                              (or users preference for a certain floor style)
   *                              -1 : Hardwood/Not Carpeted
   *                              0 : No Preference, attribute not considered in bloom filter
   *                              1 : Carpeted
   * @param commonRoomPreference  int representing whether the dorm has common rooms.
   *                              (or users preference for having a common room)
   *                              -1 : Not Important/No Common Room
   *                              0 : No preference, attribute not considered in bloom filter
   *                              1 : Important/Has Common Room
   * @param elevatorPreference    int representing whether the dorm has an elevator.
   *                              (or users preference for having an elevator)
   *                              -1 : Not Important/No Elevator
   *                              0 : No preference, attribute not considered in bloom filter
   *                              1 : Has Elevator
   * //@param bathroom    string representing the bathroom style of the dorm (communal, private, etc.)
   * //@param hasCarpet   boolean representing whether the dorm has carpeted floors.
   * //@param hasCommonRoom   boolean representing whether the dorm has common rooms.
   * //@param hasElevator     boolean representing whether the dorm has an elevator
   */
  //public Dorm(String name, boolean hasSingles, boolean hasDoubles, boolean hasTriples,
  //            boolean hasQuads, boolean hasSuites, String location, String bathroom,
  //            boolean hasCarpet, boolean hasCommonRoom, boolean hasElevator) {
  public Dorm(String name, boolean hasSingles, boolean hasDoubles, boolean hasTriples,
              boolean hasQuads, boolean hasSuites, String location, int bathroomPreference,
              int carpetPreference, int commonRoomPreference, int elevatorPreference) {
    this.dormName = name;
    this.hasSingles = hasSingles;
    this.hasDoubles = hasDoubles;
    this.hasTriples = hasTriples;
    this.hasQuads = hasQuads;
    this.hasSuites = hasSuites;
    this.location = location;
    this.bathroomPreference = bathroomPreference;
    this.carpetPreference = carpetPreference;
    this.commonRoomPreference = commonRoomPreference;
    this.elevatorPreference = elevatorPreference;
    //this.bathroom = bathroom;
    //this.hasCarpet = hasCarpet;
    //this.hasCommonRoom = hasCommonRoom;
    //this.hasElevator = hasElevator;
  }

  @Override
  public List<String> vectorizeDatum() {
    List<String> vector = new ArrayList<>();
    if (hasSingles) {
      vector.add("singles");
    } else {
      vector.add("no_singles");
    }
    if (hasDoubles) {
      vector.add("doubles");
    } else {
      vector.add("no_doubles");
    }
    if (hasTriples) {
      vector.add("triples");
    } else {
      vector.add("no_triples");
    }
    if (hasQuads) {
      vector.add("quads");
    } else {
      vector.add("no_quads");
    }
    if (hasSuites) {
      vector.add("suites");
    } else {
      vector.add("no_suites");
    }
    // TODO: .toLowerCase() might not be necessary depending on formatting in database
    vector.add(location.toLowerCase());
    // TODO: need to check database to see how string indicating bathroom type is formatted
    // bathroom type is either: "communal", "semiprivate", or "private"
    if (bathroomPreference == -1) {
      vector.add("communal");
    } else if (bathroomPreference == 1) {
      vector.add("private");
    }
    if (carpetPreference == -1) {
      vector.add("hardwood");
    } else if (carpetPreference == 1) {
      vector.add("carpeted");
    }
    if (commonRoomPreference == -1) {
      vector.add("no_common_room");
    } else if (commonRoomPreference == 1) {
      vector.add("common_room");
    }
    if (elevatorPreference == -1) {
      vector.add("stairs");
    } else if (elevatorPreference == 1) {
      vector.add("elevator");
    }
    /*if(bathroom.equalsIgnoreCase("communal")) {
      vector.add("communal");
    } else {
      vector.add("private");
    }
    if (hasCarpet) {
      vector.add("carpeted");
    } else {
      vector.add("hardwood");
    }
    if (hasCommonRoom) {
      vector.add("common_room");
    } else {
      vector.add("no_common_room");
    }
    if (hasElevator) {
      vector.add("elevator");
    } else {
      vector.add("stairs");
    }*/
    return vector;
  }

  @Override
  public String getIDString() {
    return this.dormName;
  }

  /**
   * Method that gets the dorm name.
   *
   * @return  a string representing the name of the dorm.
   */
  public String getDormName() {
    return dormName;
  }

  /**
   * Method that gets whether the dorm has singles.
   *
   * @return  a boolean representing whether the dorm has singles.
   */
  public boolean isHasSingles() {
    return hasSingles;
  }

  /**
   * Method that gets whether the dorm has doubles.
   *
   * @return  a boolean representing whether the dorm has doubles.
   */
  public boolean isHasDoubles() {
    return hasDoubles;
  }

  /**
   * Method that gets whether the dorm has triples.
   *
   * @return  a boolean representing whether the dorm has triples.
   */
  public boolean isHasTriples() {
    return hasTriples;
  }

  /**
   * Method that gets whether the dorm has quads.
   *
   * @return  a boolean representing whether the dorm has quads.
   */
  public boolean isHasQuads() {
    return hasQuads;
  }

  /**
   * Method that gets whether the dorm has suites.
   *
   * @return  a boolean representing whether the dorm has suites.
   */
  public boolean isHasSuites() {
    return hasSuites;
  }

  /**
   * Method that gets the location of the dorm.
   *
   * @return  a boolean representing the location of the dorm (north, south, or center).
   */
  public String getLocation() {
    return location;
  }

  public int getBathroomPreference() {
    return this.bathroomPreference;
  }

  public int getCarpetPreference() {
    return this.carpetPreference;
  }

  public int getCommonRoomPreference() {
    return this.commonRoomPreference;
  }

  public int getElevatorPreference() {
    return this.elevatorPreference;
  }
}