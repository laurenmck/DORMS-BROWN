package edu.brown.cs.student.main.Recommender;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class BFRecommender {
  /**
   * False positive rate, default value is 0.1.
   */
  private final double r = 0.1;

  /**
   * Map whose key represents the ID of a datum, and values are the datum's bloom filter.
   */
  private final Map<String, BloomFilter<String>> bfs;

  /**
   * Comparator object used to sort the bloom filters and find recommendations.
   */
  private Comparator<Map.Entry<String, BloomFilter<String>>> bfComparator;

  private String compareID;
  private BloomFilter<String> compareBF;

  /**
   * Constructs a BFRecommender Object.
   *
   * @param bfs        Map which contains all the bloom filters for each dorm
   * @param compareID  string ID for the object we are finding recommendations for (survey answers).
   * @param compareBF  bloom filter for the object we are trying to find recommendations for.
   */
  public BFRecommender(Map<String, BloomFilter<String>> bfs,
                       String compareID, BloomFilter<String> compareBF) {
    this.bfs = bfs;
    this.compareID = compareID;
    this.compareBF = compareBF;
    // TODO: decide similarity measure for comparator
    this.bfComparator = new ANDSimilarity(compareBF);
  }

  /**
   * setter method to change comparator between bloom filters.
   *
   * @param bfComparator  comparator that determines similarity measure between Bloom Filters.
   */
  public void setBFComparator(Comparator<Map.Entry<String, BloomFilter<String>>> bfComparator) {
    this.bfComparator = bfComparator;
  }

  /**
   * Finds the top K recommendations (based on survey answers passed into constructor).
   *
   * @param k     number of recommendations.
   * @return      top K recommendations stored in a list of strings.
   */
  public List<String> getRecommendations(int k) {
    return bfs.entrySet()
        .stream()
        .sorted(this.bfComparator)
        .limit(k)
        .map(Map.Entry::getKey)
        .collect(Collectors.toList());
  }


}