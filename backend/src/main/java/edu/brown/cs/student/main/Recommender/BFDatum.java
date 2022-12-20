package edu.brown.cs.student.main.Recommender;

import java.util.List;

/**
 * Interface for a BFDatum object, which represents the type of
 * elements used in a Bloom filter recommender.
 */
public interface BFDatum {
  /**
   * Convert fields of BFDatum into a list of strings.
   * @return a list of strings where each string is an attribute for BFDatum.
   */
  List<String> vectorizeDatum();

  /**
   * Give a string representation of the ID.
   * Used as a key in the map of bloom filters.
   * @return a string representing the ID.
   */
  String getIDString();
}