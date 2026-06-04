---
title: "Hashing and Randomized Data Structures - Universal and perfect hashing, Skip lists, Bloom filters."
subject: "RANDOMIZED ALGORITHMS"
module: "Module 2: Randomized Graph Algorithms "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd5a"
status: "completed"
scrapedAt: "2026-05-20T16:57:08.094Z"
---
# RANDOMIZED ALGORITHMS - Module 2: Randomized Graph Algorithms - Hashing and Randomized Data Structures

## Topic: Hashing and Randomized Data Structures - Universal and Perfect Hashing, Skip Lists, Bloom Filters

**Description:** This module explores randomized data structures, focusing on universal and perfect hashing, skip lists, and Bloom filters.  These structures utilize randomness to achieve good average-case performance and are valuable tools in various applications, particularly in graph algorithms.

**Learning Outcomes:**

*   Understand the concept of universal hashing and its advantages.
*   Learn the construction and properties of perfect hash functions.
*   Grasp the structure and operations of skip lists and their probabilistic analysis.
*   Understand the principles and applications of Bloom filters, including false positives and their probability.

---

## 1. Universal and Perfect Hashing

### 1.1. Universal Hashing

**Key Concepts and Definitions:**

*   **Hashing:**  A technique for mapping data items (keys) to indices in a hash table. A hash function `h(key)` maps keys to integers in the range `[0, m-1]`, where `m` is the size of the hash table.
*   **Collision:** Occurs when two different keys map to the same index in the hash table.
*   **Adversarial Input:** A malicious input carefully crafted to cause the hash function to perform poorly, resulting in many collisions and poor average-case performance (e.g., O(n) for lookups instead of O(1)).
*   **Universal Hashing:** A family of hash functions `H` such that for any two distinct keys `x` and `y`, the probability of a collision under a hash function chosen uniformly at random from `H` is at most `1/m`, where `m` is the number of slots in the hash table.  Formally:
    `Pr[h(x) = h(y)] <= 1/m  for x != y, where h is chosen uniformly at random from H.`
*   **Why Universal Hashing?**  Universal hashing protects against adversarial inputs. By choosing a hash function randomly from a universal family, the performance becomes independent of the input data.  The expected number of collisions for any key is low.

**Examples of Universal Hash Families:**

*   **Dot-Product Hashing:** Assume keys are integers and `m` is prime.  Let `a` be a random integer between `1` and `m-1`, and `b` a random integer between `0` and `m-1`.  The hash function is `h(x) = ((ax + b) mod p) mod m`, where `p` is a prime larger than the key values.  A simpler version is `h(x) = (ax mod p) mod m` (without b).
*   **Matrix Multiplication Hashing:**  Let keys be bit vectors of length `r`, and `m = 2^t`.  Let `A` be a `t x r` matrix of random bits. The hash function is `h(x) = Ax`.

**Advantages of Universal Hashing:**

*   **Guaranteed Expected Performance:** Prevents adversarial inputs from consistently causing worst-case performance.  The expected number of collisions for any key is low.
*   **Simplicity:**  Universal hash families can often be constructed with relative ease.

**Important Points to Remember:**

*   Universal hashing provides *probabilistic* guarantees, not *deterministic* guarantees. There is still a chance of collisions, but the probability is bounded.
*   The choice of `m` (the table size) is crucial.

### 1.2. Perfect Hashing

**Key Concepts and Definitions:**

*   **Perfect Hash Function:** A hash function that maps distinct keys to distinct indices in the hash table, resulting in *no collisions*.
*   **Static Data Set:** Perfect hashing is typically used when the set of keys is known in advance and does not change (static).
*   **Goal:** Achieve O(1) lookup time in the worst case.

**Construction of Perfect Hash Functions (using Universal Hashing):**

1.  **First Level Hashing:**
    *   Use a universal hash function `h` to hash the `n` keys into a table of size `m = n`.
    *   Let `n_i` be the number of keys that hash to slot `i` (the number of keys that collide in slot `i`).

2.  **Second Level Hashing:**
    *   For each slot `i`, create a *secondary* hash table of size `m_i = n_i^2`.
    *   Choose a universal hash function `h_i` specifically for slot `i`.
    *   Store the `n_i` keys that hashed to slot `i` in this secondary hash table using `h_i`.

**Analysis:**

*   **Why `m_i = n_i^2`?**  The probability that a random hash function avoids collisions in a table of size `n_i^2` for `n_i` elements is at least 1/2. Thus, we expect to find a perfect hash function for the secondary table after only a few tries.
*   **Expected Space Complexity:** The expected total space used by the secondary tables is `O(n)`. This is because `E[Sum(n_i^2)] = O(n)`, where the sum is over all slots `i`.
*   **Lookup Time:** O(1) worst-case.  First, compute `h(key)` to find the correct slot. Then, compute `h_{h(key)}(key)` to find the index within the secondary table.

**Example:**

Suppose we have the keys `{10, 22, 37, 40, 60, 70}` (n=6).  Let's assume our first-level hash function `h(x) = x mod 7` results in the following:

*   h(10) = 3
*   h(22) = 1
*   h(37) = 2
*   h(40) = 5
*   h(60) = 4
*   h(70) = 0

Then, we have:

*   n_0 = 1 (70 hashes to 0)
*   n_1 = 1 (22 hashes to 1)
*   n_2 = 1 (37 hashes to 2)
*   n_3 = 1 (10 hashes to 3)
*   n_4 = 1 (60 hashes to 4)
*   n_5 = 1 (40 hashes to 5)
*   m_0 = n_0^2 = 1
*   m_1 = n_1^2 = 1
*   m_2 = n_2^2 = 1
*   m_3 = n_3^2 = 1
*   m_4 = n_4^2 = 1
*   m_5 = n_5^2 = 1

Each secondary table simply contains one element. Finding a perfect hash function for each second level table is trivial as we only have one element.

**Important Points to Remember:**

*   Perfect hashing is *only* suitable for static data sets.
*   Two-level hashing (or variations) is a common technique for constructing perfect hash functions.
*   While worst-case O(1) lookup is guaranteed, constructing the perfect hash function itself can take some time.

**Practice Questions/Exercises:**

1.  **Universal Hashing:** Explain why using `h(x) = x mod m` might *not* be a good choice for a hash function, especially if the keys have a particular structure.
    *   **Answer:** If the keys are multiples of a factor of `m`, they will all map to the same slot, resulting in a high number of collisions. This is an example of an adversarial input if the keys are chosen maliciously.
2.  **Perfect Hashing:**  What is the main limitation of using perfect hashing in real-world applications?
    *   **Answer:**  Perfect hashing is designed for static datasets. If the data changes, the perfect hash function needs to be recomputed, which can be costly.
3.  **Hashing Selection:** Given an application where the dataset is dynamic, but the lookups need to be fast, which type of hashing would you suggest (Universal, Perfect or standard hashing such as `x mod m`), and why?
    *   **Answer:**  Universal Hashing is generally the best choice here. Since the dataset is dynamic, perfect hashing is not viable. Compared to simple hashing like `x mod m`, universal hashing offers resilience to adversarial inputs and provides a good expected performance.

---

## 2. Skip Lists

**Key Concepts and Definitions:**

*   **Skip List:** A probabilistic data structure that uses multiple levels of linked lists to allow for fast search within an ordered sequence of elements.
*   **Base List:**  A sorted linked list containing all the elements in the skip list.  This is level 0.
*   **Levels:** Additional linked lists built above the base list.  Each level acts as an "express lane," skipping over some of the elements in the lower levels.
*   **Probability p:** A parameter that determines the probability of a node being promoted to the next higher level. Typical values are p=1/2 or p=1/4.
*   **Height:** The number of levels in the skip list.
*   **Search:**  Start at the highest level and move right until you find a node with a key greater than the search key. Then, move down one level and repeat the process.  Continue until you reach the base list.

**Operations:**

*   **Search:**  Traverse the levels to find the element or determine that it is not present.
*   **Insertion:**  Insert the element into the base list, then randomly promote it to higher levels based on the probability `p`.
*   **Deletion:** Remove the element from all levels it exists in.

**Probabilistic Analysis:**

*   **Expected Height:**  The expected height of a skip list with `n` elements is `O(log_{1/p} n)`. For `p=1/2`, the expected height is `O(log_2 n)`.
*   **Expected Search Time:** The expected search time is `O(log n)`.
*   **Expected Space Complexity:** The expected space complexity is `O(n)`. While each node may have multiple pointers, the probability of a node being present in higher levels decreases exponentially.

**Example:**

Consider a skip list with elements {3, 6, 7, 9, 12, 19, 21, 26, 32} and p=1/2. A possible skip list structure could be:

```
Level 3:  -- head -- 12 ------------------------------------> null
Level 2:  -- head -- 6 -------- 12 -------- 26 ---------> null
Level 1:  -- head -- 3 -- 6 -- 7 -- 9 -- 12 -- 19 -- 21 -- 26 -- 32 --> null
Level 0:  -- head -- 3 -- 6 -- 7 -- 9 -- 12 -- 19 -- 21 -- 26 -- 32 --> null
```

To search for 19:

1. Start at Level 3 (topmost level).
2. 12 < 19, move right to null.
3. Go down to Level 2.
4. 12 < 19, move right to 26.
5. 26 > 19, go down to Level 1.
6. 12 < 19, move right to 19.
7. Found 19 at Level 1!

**Advantages of Skip Lists:**

*   **Simplicity:**  Relatively simple to implement compared to balanced trees (e.g., AVL trees, Red-Black trees).
*   **Efficient Search:**  Provides logarithmic average-case search time.
*   **Dynamic:**  Insertion and deletion operations are relatively straightforward.
*   **Good Performance in Practice:** Often performs as well as or better than balanced trees in practice.

**Disadvantages of Skip Lists:**

*   **Probabilistic:** Performance is not guaranteed in the worst case (though the probability of poor performance is low).
*   **Space Overhead:** Requires more space than a simple linked list due to the multiple levels.

**Important Points to Remember:**

*   The choice of the probability `p` affects the height of the skip list and the search time.
*   Skip lists provide a good balance between simplicity and performance.
*   Unlike self-balancing trees, balancing is performed probabilistically.

**Practice Questions/Exercises:**

1.  **Skip List Insertion:** Describe the steps involved in inserting a new element into a skip list.  How is the level of the new element determined?
    *   **Answer:** 1) Search for the correct position in the base list (level 0). 2) Insert the element in level 0. 3) Randomly promote the element to higher levels. For each level, generate a random number. If the number is less than `p`, add the element to the next level. Stop when the random number is greater than or equal to `p`, or a maximum level is reached.
2.  **Skip List Deletion:** Explain how deleting an element from a skip list maintains the integrity of the data structure.
    *   **Answer:** To delete an element, search for it and remove it from every level it exists in. Make sure to update the pointers of the preceding and succeeding nodes in each level to maintain the correct links.
3.  **Skip List Probability:**  How does a lower value of 'p' (e.g., 1/4 vs 1/2) affect the structure and performance of a skip list?
    *   **Answer:** A lower value of `p` will lead to a lower expected height for the skip list. This means that each node is less likely to be promoted to higher levels. The space complexity will be reduced, but the search time could potentially increase.

---

## 3. Bloom Filters

**Key Concepts and Definitions:**

*   **Bloom Filter:** A space-efficient probabilistic data structure used to test whether an element is a member of a set.  It allows for *false positives* but *not false negatives*.  This means that if the filter says an element is *not* in the set, it is definitely not there. But if it says an element is *in* the set, it *might* be there (false positive).
*   **Bit Array:** A Bloom filter consists of a bit array (or bit vector) of `m` bits, initially all set to 0.
*   **Hash Functions:** `k` independent hash functions `h_1, h_2, ..., h_k` are used, each mapping an element to one of the `m` bit positions.
*   **Insertion:** To insert an element, hash it using each of the `k` hash functions.  Set the bits at the `k` corresponding positions in the bit array to 1.
*   **Membership Test:** To check if an element is in the set, hash it using each of the `k` hash functions. If *all* of the `k` corresponding bits in the bit array are 1, then the element is considered to be in the set. If *any* of the bits are 0, then the element is definitely not in the set.

**False Positives:**

*   A false positive occurs when all `k` hash functions for an element that is *not* in the set happen to map to bit positions that are already set to 1 by other elements.
*   **Probability of a False Positive:** The probability of a false positive can be estimated as `(1 - e^(-kn/m))^k`, where:
    *   `m` is the number of bits in the bit array.
    *   `n` is the number of elements inserted into the filter.
    *   `k` is the number of hash functions.

**Choosing `k` and `m`:**

*   The optimal number of hash functions `k` can be approximated as `k = (m/n) * ln(2)`.
*   The required number of bits `m` to achieve a desired false positive probability `p` can be estimated as `m = - (n * ln(p)) / (ln(2)^2)`.

**Example:**

Let's say we have a Bloom filter with `m = 10` bits, `k = 2` hash functions, and we want to insert the elements "apple" and "banana".

1.  **Hash Functions:**  Let's assume our hash functions are (for simplicity):
    *   h1(x) = (sum of ASCII values of characters in x) mod 10
    *   h2(x) = (product of ASCII values of characters in x) mod 10

2.  **Insertion:**
    *   **"apple":**
        *   h1("apple") = (97 + 112 + 112 + 108 + 101) mod 10 = 530 mod 10 = 0
        *   h2("apple") = (97 * 112 * 112 * 108 * 101) mod 10 = 13466925696 mod 10 = 6
        *   Set bits 0 and 6 to 1: `[1, 0, 0, 0, 0, 0, 1, 0, 0, 0]`

    *   **"banana":**
        *   h1("banana") = (98 + 97 + 110 + 97 + 110 + 97) mod 10 = 609 mod 10 = 9
        *   h2("banana") = (98 * 97 * 110 * 97 * 110 * 97) mod 10 = 10207957694 mod 10 = 4
        *   Set bits 9 and 4 to 1: `[1, 0, 0, 0, 1, 0, 1, 0, 0, 1]`

3.  **Membership Test:**
    *   **"apple":**
        *   h1("apple") = 0 (bit 0 is 1)
        *   h2("apple") = 6 (bit 6 is 1)
        *   All bits are 1, so "apple" is *probably* in the set.

    *   **"orange":**
        *   h1("orange") = (111 + 114 + 97 + 110 + 103 + 101) mod 10 = 636 mod 10 = 6
        *   h2("orange") = (111 * 114 * 97 * 110 * 103 * 101) mod 10 = 15509665062 mod 10 = 2
        *   Bit 6 is 1, but bit 2 is 0. So "orange" is *definitely not* in the set.

    *   **False Positive Example:**
        *   Let's say h1("grape") = 9 and h2("grape") = 0.  Both bits 9 and 0 are already 1.  The Bloom filter would incorrectly report that "grape" is likely in the set, even though it wasn't inserted.

**Applications of Bloom Filters:**

*   **Caching:**  Used to quickly check if an item is likely to be in a cache before performing a more expensive lookup.
*   **Database Systems:** Used to reduce disk lookups by quickly checking if a record exists.
*   **Network Routing:**  Used to quickly filter out routing packets that are unlikely to reach a destination.
*   **Spam Filtering:** Used to identify potential spam emails.

**Advantages of Bloom Filters:**

*   **Space Efficiency:**  Requires significantly less space than storing the actual elements.
*   **Fast Membership Test:**  Membership tests are very fast (O(k), where k is the number of hash functions).
*   **Simple Implementation:**  Relatively easy to implement.

**Disadvantages of Bloom Filters:**

*   **False Positives:**  Can produce false positives.
*   **No Deletions:**  Standard Bloom filters do not support deleting elements (although variations exist that do, at the cost of increased complexity).
*   **Optimal Parameter Tuning:** Choosing the right values for `m` and `k` is important to minimize the false positive rate.

**Important Points to Remember:**

*   Bloom filters are probabilistic data structures that trade accuracy for space efficiency.
*   They are suitable for applications where false positives are acceptable and space is a constraint.
*   The false positive rate can be controlled by adjusting the parameters `m` and `k`.
*   Standard Bloom Filters do not allow deletions.

**Practice Questions/Exercises:**

1.  **Bloom Filter Trade-off:** Explain the trade-off between the number of hash functions (`k`) and the false positive rate in a Bloom filter.
    *   **Answer:** Increasing `k` (the number of hash functions) generally reduces the false positive rate initially. However, if `k` becomes too large, the bit array will become saturated with 1s, increasing the probability of false positives again. So there is an optimal value of k.
2.  **Bloom Filter Deletion:** Why is it difficult to implement deletions in a standard Bloom filter?
    *   **Answer:**  If you simply reset a bit to 0 when deleting an element, you might inadvertently cause a false negative for other elements that also hash to that bit.  Because multiple keys could have contributed to setting a particular bit to 1, you can't simply reset it.
3.  **Bloom Filter Parameters:** Given that you want to store 1000 elements with a false positive rate of 1%, approximately how many bits would your Bloom filter need? Use the formula `m = - (n * ln(p)) / (ln(2)^2)`.
    *   **Answer:** `m = - (1000 * ln(0.01)) / (ln(2)^2)  ≈ 9585 bits`.
