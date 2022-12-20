package edu.brown.cs.student.main.Recommender;

import java.util.BitSet;
import java.util.Comparator;
import java.util.Map;

/**
 * AND similarity involves applying the AND operation to two bit arrays
 * (any positions that are both set to 1 are set to 1; all other positions set to 0)
 * and obtaining the total number of bits set to 1 in the resulting bit array.
 */
public class ANDSimilarity implements Comparator<Map.Entry<String, BloomFilter<String>>> {

  private final BloomFilter<String> targetBF;

  /**
   * Construct an ANDSimilarity object.
   *
   * @param targetBF  the bloom filter of the target object (dorm) to calculate similarities for.
   */
  public ANDSimilarity(BloomFilter<String> targetBF) {
    this.targetBF = targetBF;
  }

  /**
   * Compares its two arguments for order.
   *
   * @param o1  the first object to be compared.
   * @param o2  the second object to be compared.
   * @return  a negative integer if the second argument is less than the first
   *          zero if the second argument is equal to the first
   *          a positive integer if the second argument is greater than the first
   */
  @Override
  public int compare(Map.Entry<String, BloomFilter<String>> o1,
                     Map.Entry<String, BloomFilter<String>> o2) {
    int result1 = 0;
    int result2 = 0;
    BitSet b1 = o1.getValue().getBitSet();
    BitSet b2 = o2.getValue().getBitSet();
    for (int bitSetIndex = 0; bitSetIndex < b1.size(); bitSetIndex++) {
      if ((b1.get(bitSetIndex) && targetBF.getBitSet().get(bitSetIndex))) {
        result1++;
      }
      if ((b2.get(bitSetIndex) && targetBF.getBitSet().get(bitSetIndex))) {
        result2++;
      }
    }
    return result2 - result1;
  }
}
