package edu.brown.cs.student.main.filterDorms;

import com.google.cloud.firestore.QueryDocumentSnapshot;

import java.util.ArrayList;
import java.util.Objects;

/**
 * Class that filters dorms.
 */
public class FilterDorms {

  /**
   * field that represents all the dorms.
   */
  private final ArrayList<QueryDocumentSnapshot> allDorms;

  /**
   * field that represents the current dorms.
   */
  private ArrayList<QueryDocumentSnapshot> currDorms;

  /**
   * field that represents the current dorm names.
   */
  private ArrayList<String> currDormNames;

  /**
   * Constructor for the FilterDorm class.
   *
   * @param allDorms  a list of all dorms from the database.
   */
  public FilterDorms(ArrayList<QueryDocumentSnapshot> allDorms) {
    this.allDorms = allDorms;
  }

  /**
   * Method that filters by room type.
   *
   * @param type  the type of room to filter by.
   * @param dorms the list of dorms to filter from.
   */
  private void filterByRoom(String type, ArrayList<QueryDocumentSnapshot> dorms) {
    ArrayList<QueryDocumentSnapshot> filteredDorms = new ArrayList<>();
    ArrayList<String> filteredDormNames = new ArrayList<>();

    for (QueryDocumentSnapshot dorm : dorms) {
      String stringOfRooms = Objects.requireNonNull(dorm.get("room")).toString();
      stringOfRooms = stringOfRooms.substring(1, stringOfRooms.length() - 1);

      String[] roomTypes = stringOfRooms.split(", ");

      for (String roomType : roomTypes) {
        if (roomType.equals(type)) {
          filteredDorms.add(dorm);
          filteredDormNames.add(dorm.getString("name"));
          break;
        }
      }
    }

    this.currDorms = filteredDorms;
    this.currDormNames = filteredDormNames;
  }

  /**
   * Method that filters by location.
   *
   * @param type  the location to filter by.
   * @param dorms the list of dorms to filter from.
   */
  private void filterByLocation(String type, ArrayList<QueryDocumentSnapshot> dorms) {
    ArrayList<QueryDocumentSnapshot> filteredDorms = new ArrayList<>();
    ArrayList<String> filteredDormNames = new ArrayList<>();

    for (QueryDocumentSnapshot dorm : dorms) {
      String dormLocation = dorm.getString("location");

      assert dormLocation != null;
      if (dormLocation.equals(type)) {
        filteredDorms.add(dorm);
        filteredDormNames.add(dorm.getString("name"));
      }
    }

    this.currDorms = filteredDorms;
    this.currDormNames = filteredDormNames;
  }

  /**
   * Method that filters by bathroom type.
   *
   * @param type  the type of bathroom to filter by.
   * @param dorms the list of dorms to filter from.
   */
  private void filterByBathroom(String type, ArrayList<QueryDocumentSnapshot> dorms) {
    ArrayList<QueryDocumentSnapshot> filteredDorms = new ArrayList<>();
    ArrayList<String> filteredDormNames = new ArrayList<>();

    for (QueryDocumentSnapshot dorm : dorms) {
      String dormBathroom = dorm.getString("bathroom");

      assert dormBathroom != null;
      if (dormBathroom.equals(type)) {
        filteredDorms.add(dorm);
        filteredDormNames.add(dorm.getString("name"));
      }
    }

    this.currDorms = filteredDorms;
    this.currDormNames = filteredDormNames;
  }

  /**
   * Method that filters by kitchen type.
   *
   * @param type  the type of kitchen to filter by.
   * @param dorms the list of dorms to filter from.
   */
  private void filterByKitchen(String type, ArrayList<QueryDocumentSnapshot> dorms) {
    ArrayList<QueryDocumentSnapshot> filteredDorms = new ArrayList<>();
    ArrayList<String> filteredDormNames = new ArrayList<>();

    for (QueryDocumentSnapshot dorm : dorms) {
      String dormKitchen = dorm.getString("kitchen");

      assert dormKitchen != null;
      if (dormKitchen.equals(type)) {
        filteredDorms.add(dorm);
        filteredDormNames.add(dorm.getString("name"));
      }
    }

    this.currDorms = filteredDorms;
    this.currDormNames = filteredDormNames;
  }

  /**
   * Method that filters by year type.
   *
   * @param type  the type of year to filter by.
   * @param dorms the list of dorms to filter from.
   */
  private void filterByYear(String type, ArrayList<QueryDocumentSnapshot> dorms) {
    ArrayList<QueryDocumentSnapshot> filteredDorms = new ArrayList<>();
    ArrayList<String> filteredDormNames = new ArrayList<>();

    for (QueryDocumentSnapshot dorm : dorms) {
      String dormYear = dorm.getString("housing_type");

      assert dormYear != null;
      if (dormYear.equals(type)) {
        filteredDorms.add(dorm);
        filteredDormNames.add(dorm.getString("name"));
      }
    }

    this.currDorms = filteredDorms;
    this.currDormNames = filteredDormNames;
  }

  /**
   * Method that filters by elevator.
   *
   * @param type  representing whether the dorm has an elevator.
   * @param dorms the list of dorms to filter from.
   */
  private void filterByElevator(String type, ArrayList<QueryDocumentSnapshot> dorms) {
    ArrayList<QueryDocumentSnapshot> filteredDorms = new ArrayList<>();
    ArrayList<String> filteredDormNames = new ArrayList<>();

    boolean boolType;
    boolType = type.equals("true");

    for (QueryDocumentSnapshot dorm : dorms) {
      filteredDorms.add(dorm);
      Boolean dormElevator = dorm.getBoolean("elevator");

      assert dormElevator != null;
      if (dormElevator == boolType) {
        filteredDormNames.add(dorm.getString("name"));
      }
    }

    this.currDorms = filteredDorms;
    this.currDormNames = filteredDormNames;
  }

  /**
   * Method that filters by carpet.
   *
   * @param type  representing whether the dorm has carpeted rooms.
   * @param dorms the list of dorms to filter from.
   */
  private void filterByCarpet(String type, ArrayList<QueryDocumentSnapshot> dorms) {
    ArrayList<QueryDocumentSnapshot> filteredDorms = new ArrayList<>();
    ArrayList<String> filteredDormNames = new ArrayList<>();

    boolean boolType;
    boolType = type.equals("true");

    for (QueryDocumentSnapshot dorm : dorms) {
      filteredDorms.add(dorm);
      Boolean dormCarpet = dorm.getBoolean("carpet");

      assert dormCarpet != null;
      if (dormCarpet == boolType) {
        filteredDormNames.add(dorm.getString("name"));
      }
    }

    this.currDorms = filteredDorms;
    this.currDormNames = filteredDormNames;
  }

  /**
   * Method that filters by common space.
   *
   * @param type  representing whether the dorm has a common space.
   * @param dorms the list of dorms to filter from.
   */
  private void filterByCommonRoom(String type, ArrayList<QueryDocumentSnapshot> dorms) {
    ArrayList<QueryDocumentSnapshot> filteredDorms = new ArrayList<>();
    ArrayList<String> filteredDormNames = new ArrayList<>();

    boolean boolType;
    boolType = type.equals("true");

    for (QueryDocumentSnapshot dorm : dorms) {
      filteredDorms.add(dorm);
      Boolean dormCommonRoom = dorm.getBoolean("common_room");

      assert dormCommonRoom != null;
      if (dormCommonRoom == boolType) {
        filteredDormNames.add(dorm.getString("name"));
      }
    }

    this.currDorms = filteredDorms;
    this.currDormNames = filteredDormNames;
  }

  /**
   * Method that filter the dorms.
   *
   * @param filterBy  the attribute we are filtering by.
   * @param type      the type of the particular attribute we are filtering by.
   * @param dorms     the list of dorms to filter from.
   * @return          an array list of filtered dorms.
   */
  private ArrayList<String> filterDormGen(String filterBy, String type,
                                          ArrayList<QueryDocumentSnapshot> dorms) {
    switch(filterBy) {
      case "room":
        filterByRoom(type, dorms);
        return this.currDormNames;
      case "location":
        filterByLocation(type, dorms);
        return this.currDormNames;
      case "bathroom":
        filterByBathroom(type, dorms);
        return this.currDormNames;
      case "kitchen":
        filterByKitchen(type, dorms);
        return this.currDormNames;
      case "year":
        filterByYear(type, dorms);
        return this.currDormNames;
      case "elevator":
        filterByElevator(type, dorms);
        return this.currDormNames;
      case "carpet":
        filterByCarpet(type, dorms);
        return this.currDormNames;
      case "common_room":
        filterByCommonRoom(type, dorms);
        return this.currDormNames;
    }
    return null;
  }

  /**
   * Method that filters dorms based on certain attributes.
   *
   * @param filterBy    the filters.
   * @param filterTypes the filter types.
   * @return            an array list of dorms that have the filtered attributes.
   */
  public ArrayList<String> multipleFiltersDorm(String filterBy, String filterTypes) {

    String[] listFilterBy = filterBy.split(", ");
    String[] listFilterTypes = filterTypes.split(", ");

    for (int i = 0; i < listFilterBy.length; i++) {
      String currFilterBy = listFilterBy[i];
      String currFilterType = listFilterTypes[i];
      if (i == 0) {
        filterDormGen(currFilterBy, currFilterType, this.allDorms);
      } else {
        filterDormGen(currFilterBy, currFilterType, this.currDorms);
      }
    }
    return this.currDormNames;
  }

}
