---
title: "Bloom Filters - Count-Min Sketch"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 1: Foundational Data Structures"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b35f"
status: "completed"
scrapedAt: "2026-05-20T16:10:02.411Z"
---
# ADVANCED DATA STRUCTURES: Bloom Filters - Count-Min Sketch

## Module 1: Foundational Data Structures

### Topic: Bloom Filters - Count-Min Sketch

**Learning Outcomes:**

*   Understand the principles and operation of Bloom filters.
*   Understand the limitations of standard Bloom filters and the need for counting functionalities.
*   Learn about the Count-Min Sketch as an extension to Bloom filters.
*   Understand the data structure and algorithms for insertion, query, and deletion in Count-Min Sketches.
*   Analyze the space and time complexity of Count-Min Sketches.
*   Understand the error estimation associated with Count-Min Sketches.
*   Identify practical applications of Count-Min Sketches.

---

## 1. Bloom Filters: Introduction and Principles

*   **Definition:** A Bloom filter is a space-efficient probabilistic data structure that is used to test whether an element is a member of a set. It allows for false positives but not false negatives.  In other words, a query returns either "possibly in set" or "definitely not in set".

*   **Key Concepts:**
    *   **Bit Array:** The core of a Bloom filter is a bit array (also called a bit vector), initialized to all zeros.
    *   **Hash Functions:** *k* independent hash functions are used to map each element to *k* positions in the bit array.  These hash functions should distribute elements evenly across the bit array.
    *   **Insertion:** To insert an element, hash it using the *k* hash functions, and set the bits at the corresponding positions in the bit array to 1.
    *   **Query:** To query whether an element is in the set, hash it using the *k* hash functions, and check if all the corresponding bits in the bit array are set to 1. If any of the bits are 0, the element is definitely not in the set. If all the bits are 1, the element is possibly in the set (false positive).
    *   **False Positive:**  Occurs when all *k* hash functions map an element (that is actually *not* in the set) to positions that are already set to 1 due to previous insertions of other elements.

*   **Example:**
    *   Bit array of size 10: `[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]`
    *   Set to be represented: `{apple, banana, cherry}`
    *   Number of hash functions: *k* = 3
    *   Hash functions (simplified for illustration):
        *   h1(x) = (ASCII sum of x) % 10
        *   h2(x) = (ASCII sum of reversed x) % 10
        *   h3(x) = (length of x) % 10

    *   Insertion:
        *   `apple`: h1(apple) = 5, h2(elppa) = 7, h3(apple) = 5.  Bit array becomes: `[0, 0, 0, 0, 0, 1, 0, 1, 0, 0]`
        *   `banana`: h1(banana) = 6, h2(ananab) = 6, h3(banana) = 6. Bit array becomes: `[0, 0, 0, 0, 0, 1, 1, 1, 0, 0]`
        *   `cherry`: h1(cherry) = 3, h2(yrrehc) = 2, h3(cherry) = 6. Bit array becomes: `[0, 0, 1, 1, 0, 1, 1, 1, 0, 0]`

    *   Query:
        *   `apple`: h1(apple) = 5, h2(elppa) = 7, h3(apple) = 5.  Bits at indices 5, 7, and 5 are all 1. Returns "possibly in set".
        *   `grape`: h1(grape) = 5, h2(eparg) = 7, h3(grape) = 5.  Bits at indices 5, 7, and 5 are all 1. Returns "possibly in set" (false positive).
        *   `date`: h1(date) = 0, h2(etad) = 9, h3(date) = 4.  Bit at index 0 is 0. Returns "definitely not in set".

*   **Space Complexity:** O(m), where *m* is the size of the bit array.

*   **Time Complexity:**
    *   Insertion: O(k)
    *   Query: O(k)

*   **Important Points:**
    *   The size of the bit array (*m*) and the number of hash functions (*k*) affect the false positive rate.
    *   Larger *m* and smaller *k* generally reduce the false positive rate, but increase space and computational overhead, respectively.
    *   Bloom filters do not support deletion directly.  Removing an element by setting the bits back to 0 could lead to false negatives.

## 2. Limitations of Standard Bloom Filters and the Need for Counting

*   **No Deletion:**  As mentioned above, standard Bloom filters cannot delete elements because resetting a bit might remove the presence of another element.

*   **Cannot Count Occurrences:**  Bloom filters only track membership, not the frequency or number of times an element has been inserted.  They can only answer "possibly in the set" or "definitely not in the set".

*   **Need for Counting:** Many applications require counting the frequency of elements, such as:
    *   Network traffic monitoring (counting packet frequencies)
    *   Web analytics (counting page view frequencies)
    *   Database query optimization (estimating cardinality of intermediate results)

## 3. Count-Min Sketch: An Extension to Bloom Filters

*   **Definition:** The Count-Min Sketch (CMS) is a probabilistic data structure that allows estimating the frequency of events in a stream of data. It addresses the limitations of standard Bloom filters by providing a way to count occurrences and approximate frequencies while still maintaining space efficiency.

*   **Key Concepts:**
    *   **2D Array (Count Matrix):**  The CMS uses a 2D array (matrix) of *d* rows and *w* columns.  Each cell stores a counter (typically an integer).  All counters are initialized to zero.
    *   **Hash Functions:** *d* independent hash functions, *h1(x), h2(x), ..., hd(x)*, are used. Each hash function maps an element *x* to a column index within the range [0, w-1].
    *   **Insertion (Incrementing):**  To increment the count of an element *x*, hash it using all *d* hash functions. For each hash function *hi(x)*, increment the counter at row *i* and column *hi(x)* in the count matrix.  That is, `count[i][hi(x)]++` for *i* = 1 to *d*.
    *   **Query (Frequency Estimation):** To estimate the frequency of an element *x*, hash it using all *d* hash functions. For each hash function *hi(x)*, retrieve the counter at row *i* and column *hi(x)* in the count matrix.  The estimated frequency of *x* is the *minimum* of all these retrieved counts.  That is, `estimate(x) = min(count[i][hi(x)])` for *i* = 1 to *d*.
    *   **Error:** The Count-Min Sketch provides an *approximation* of the true frequency.  The estimated frequency is never lower than the true frequency, but it can be higher due to collisions (multiple elements mapping to the same counter).

*   **Example:**

    *   Count matrix: *d* = 2 rows, *w* = 5 columns
        ```
        [ [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0] ]
        ```
    *   Hash functions:
        *   h1(x) = (ASCII sum of x) % 5
        *   h2(x) = (ASCII sum of reversed x) % 5

    *   Insert `apple` 3 times, `banana` 1 time, `cherry` 2 times.
        *   `apple`: h1(apple) = 0, h2(elppa) = 2. Increment `count[0][0]` and `count[1][2]`.  Repeat 3 times.
        *   `banana`: h1(banana) = 1, h2(ananab) = 1. Increment `count[0][1]` and `count[1][1]`.
        *   `cherry`: h1(cherry) = 3, h2(yrrehc) = 3. Increment `count[0][3]` and `count[1][3]`.  Repeat 2 times.

        The count matrix becomes:

        ```
        [ [3, 1, 0, 2, 0],
          [0, 1, 3, 2, 0] ]
        ```

    *   Query:

        *   `apple`: h1(apple) = 0, h2(elppa) = 2.  `count[0][0]` = 3, `count[1][2]` = 3.  Estimate(apple) = min(3, 3) = 3.
        *   `banana`: h1(banana) = 1, h2(ananab) = 1.  `count[0][1]` = 1, `count[1][1]` = 1.  Estimate(banana) = min(1, 1) = 1.
        *   `date`: h1(date) = 4, h2(etad) = 4. `count[0][4]` = 0, `count[1][4]` = 0.  Estimate(date) = min(0, 0) = 0.
        *   `orange`: h1(orange) = 4, h2(egnaro) = 1. `count[0][4]` = 0, `count[1][1]` = 1. Estimate(orange) = min(0, 1) = 0.
        *   `grape`: h1(grape) = 0, h2(eparg) = 2.  `count[0][0]` = 3, `count[1][2]` = 3.  Estimate(grape) = min(3, 3) = 3. (Note: Even though `grape` was never inserted, its estimated count is non-zero due to collisions.)

*   **Deletion (Decrementing):** In general, decrementing counters can be supported (if your use case requires it).  However, this can lead to underestimation of the true frequency if an element's count is decreased more than it was inserted.  This is a weakness of the standard Count-Min Sketch, and more advanced variants (e.g., conservative update) exist to address this.  To decrement, hash the element *x* using all *d* hash functions. For each hash function *hi(x)*, decrement the counter at row *i* and column *hi(x)* in the count matrix. That is, `count[i][hi(x)]--` for *i* = 1 to *d*.

## 4. Analysis of Space and Time Complexity

*   **Space Complexity:** O(d * w), where *d* is the number of rows (hash functions) and *w* is the number of columns.  The space complexity is directly proportional to the number of counters.

*   **Time Complexity:**
    *   Insertion (Incrementing): O(d) - We need to hash the element *d* times and increment *d* counters.
    *   Query (Frequency Estimation): O(d) - We need to hash the element *d* times and find the minimum of *d* counters.
    *   Deletion (Decrementing): O(d) - We need to hash the element *d* times and decrement *d* counters.

## 5. Error Estimation

*   **Error Bound:** The error in the Count-Min Sketch is one-sided, meaning the estimated frequency is always greater than or equal to the true frequency.  The error can be quantified as follows:

    Let *f(x)* be the true frequency of element *x*, and *estimate(x)* be the estimated frequency from the Count-Min Sketch.  Then, with probability at least (1 - δ), the following holds:

    `estimate(x) <= f(x) + εN`

    Where:

    *   *N* is the total number of insertions into the sketch.
    *   *ε* is the error parameter.
    *   *δ* is the confidence parameter (probability of exceeding the error bound).

*   **Choosing *d* and *w***:  The parameters *d* and *w* are chosen based on the desired error *ε* and confidence *δ*:

    *   `w = e / ε`  (where *e* is the base of the natural logarithm)
    *   `d = ln(1 / δ)`

    These formulas imply that to achieve a smaller error *ε*, we need a larger *w* (more columns). To achieve a higher confidence (smaller *δ*), we need a larger *d* (more rows/hash functions).

*   **Intuition:** Each counter potentially aggregates counts from multiple elements due to collisions. By taking the *minimum* count across *d* independent hash functions, we reduce the impact of those collisions and get a better approximation of the true frequency.

*   **Example:** Suppose we want an error of at most 1% (*ε* = 0.01) with 99% confidence (*δ* = 0.01).  Then:
    *   `w = e / 0.01 ≈ 272`
    *   `d = ln(1 / 0.01) ≈ 4.6 ≈ 5` (Round up to the nearest integer, as we need a whole number of hash functions)

    Therefore, the count matrix would have 5 rows and 272 columns.

## 6. Practical Applications of Count-Min Sketches

*   **Network Traffic Monitoring:**  Estimating the frequency of different packets in network traffic to detect denial-of-service attacks or identify popular content.
*   **Web Analytics:**  Counting the number of page views for different URLs or tracking user activity on a website.
*   **Database Query Optimization:**  Estimating the cardinality (number of distinct elements) of intermediate results in database queries to optimize query execution plans.
*   **Data Mining:**  Identifying frequent items in large datasets, such as finding popular products in a retail store or identifying common phrases in a text corpus.
*   **Log Processing:** Tracking the occurrences of different events in log files for debugging and performance monitoring.
*   **Approximate Query Processing:** Answering approximate counting queries on very large datasets where exact answers are not required or feasible.

## 7. Practice Questions/Exercises

**Question 1:** Explain the difference between a Bloom filter and a Count-Min Sketch.

**Answer:** A Bloom filter is a data structure for testing membership in a set, allowing for false positives but not false negatives.  It cannot count occurrences or support deletion.  A Count-Min Sketch, on the other hand, allows for *approximate* counting of element frequencies and can support deletion (though this can negatively impact accuracy). It also introduces error, in the form of over-estimation, which can be controlled by tuning parameters like `d` and `w`.

**Question 2:**  Describe the steps involved in inserting an element into a Count-Min Sketch.

**Answer:**
1.  Choose *d* independent hash functions: *h1(x), h2(x), ..., hd(x)*.
2.  For each hash function *hi(x)* (where *i* ranges from 1 to *d*):
    *   Calculate the column index: `column_index = hi(x)`.
    *   Increment the counter at the corresponding position in the count matrix: `count[i][column_index]++`.

**Question 3:** How does increasing the number of rows (*d*) in a Count-Min Sketch affect the accuracy and space complexity?

**Answer:**  Increasing the number of rows (*d*) in a Count-Min Sketch:

*   **Accuracy:** Generally improves accuracy by reducing the probability of collisions and thus improving the confidence (decreasing *δ*) in the error bound. A higher *d* means we have more independent estimates for each element's frequency, and taking the minimum of those estimates is more likely to be closer to the true value.
*   **Space Complexity:** Increases the space complexity linearly.  Since the space complexity is O(d * w), doubling *d* doubles the space required.

**Question 4:** A Count-Min Sketch has parameters *d* = 3 and *w* = 10. The count matrix is initialized to all zeros. The following operations are performed:

*   Insert "cat" once. h1("cat") = 2, h2("cat") = 5, h3("cat") = 8.
*   Insert "dog" twice. h1("dog") = 5, h2("dog") = 2, h3("dog") = 1.
*   Insert "bird" once. h1("bird") = 1, h2("bird") = 8, h3("bird") = 5.

What is the estimated frequency of "cat" after these operations? Show the updated Count-Min Sketch matrix.

**Answer:**

*Updated Count-Min Sketch Matrix:*

```
[ [0, 1, 1, 0, 0, 2, 0, 0, 1, 0],  // Row 0
  [0, 0, 2, 0, 0, 1, 0, 0, 1, 0],  // Row 1
  [0, 2, 0, 0, 0, 1, 0, 0, 1, 0]   // Row 2
]
```

*Estimated frequency of "cat":*

h1("cat") = 2, h2("cat") = 5, h3("cat") = 8

*   `count[0][2] = 1`
*   `count[1][5] = 1`
*   `count[2][8] = 1`

`Estimate("cat") = min(1, 1, 1) = 1`

**Question 5:**  Explain why the Count-Min Sketch typically overestimates frequencies, but does not underestimate them.

**Answer:** The Count-Min Sketch overestimates frequencies because of collisions.  Multiple elements can hash to the same counter location. When this happens, the counter's value becomes the sum of the frequencies of *all* elements that hash to that location. The query algorithm returns the *minimum* value of the counters computed by each hash function. Even if *x* has not been seen, some of the *hi(x)* may land on a counter that is non-zero due to collisions. Therefore, the only way for the query algorithm to underestimate the frequency is for some of the counters to have their value *decreased*, which only occurs when the *decrementing* operation is called. The *incrementing* only increases the value of some counters, thus, an element can only have its frequency overestimated or be equal to the original frequency, but never underestimate it, if only insertions are called.

## 8. Important Points to Remember

*   Bloom filters are good for set membership testing (with potential for false positives), while Count-Min Sketches are good for approximate frequency counting.
*   The accuracy of a Count-Min Sketch is determined by the parameters *d* (number of hash functions) and *w* (width of the count matrix).
*   Count-Min Sketches offer a trade-off between space usage, time complexity, and accuracy. You must choose appropriate *d* and *w* based on the specific application requirements.
*   Standard Count-Min Sketches struggle with accurate deletion, but more advanced variants exist to address this.
*   Understand the error bound and how to calculate the appropriate values for *d* and *w* based on the desired error and confidence levels.
