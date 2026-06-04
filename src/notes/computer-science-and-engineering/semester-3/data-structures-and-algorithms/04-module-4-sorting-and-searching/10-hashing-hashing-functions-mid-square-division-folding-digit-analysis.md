---
title: "Hashing - Hashing functions : Mid square, Division, Folding, Digit Analysis"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac52"
status: "completed"
scrapedAt: "2026-05-20T16:23:14.959Z"
---
## DATA STRUCTURES AND ALGORITHMS: Module 4 - Sorting and Searching

### Topic: Hashing - Hashing Functions: Mid-Square, Division, Folding, Digit Analysis

**Module Learning Outcomes:**

*   Understand the concept of hashing and its applications.
*   Explain different hashing functions (Mid-Square, Division, Folding, Digit Analysis).
*   Apply hashing functions to map keys to indices in a hash table.
*   Understand the advantages and disadvantages of different hashing functions.

---

**1. Introduction to Hashing**

*   **Definition:** Hashing is a technique used to efficiently store and retrieve data in a data structure called a hash table. It involves mapping keys to indices in the hash table using a *hash function*.
*   **Purpose:**  To enable fast average-case performance (ideally O(1)) for insertion, deletion, and searching operations.
*   **Hash Table:** An array-based data structure that stores key-value pairs.  The index for each key is calculated using the hash function.
*   **Collision:**  Occurs when two or more keys are mapped to the same index in the hash table.  Collision resolution techniques are crucial for efficient hashing.
*   **Hash Function:** A function that takes a key as input and returns an index in the hash table.  A good hash function should be:
    *   **Easy to compute:** Fast calculation is essential for efficiency.
    *   **Uniformly distribute keys:**  Minimize collisions by distributing keys evenly across the hash table.
*   **Key Concepts:**
    *   **Key:** The unique identifier for a data record.
    *   **Hash Value:** The output of the hash function (the index in the hash table).
    *   **Load Factor:** The ratio of the number of keys stored in the hash table to the size of the hash table.  A high load factor can increase the likelihood of collisions and degrade performance.  (Load Factor = Number of keys / Table Size)

**2. Hashing Functions**

This section focuses on four common hashing functions.

**2.1 Mid-Square Method**

*   **Description:**
    1.  Square the key.
    2.  Extract a specific number of digits from the middle of the squared value.  The number of digits extracted determines the size of the hash table.
    3.  Use the extracted digits as the index in the hash table.

*   **Formula:**  `index = middle_digits(key * key)`

*   **Advantages:**
    *   Relatively simple to implement.
    *   Can often produce a good distribution of keys, especially if the key has some inherent randomness.

*   **Disadvantages:**
    *   Can be computationally expensive due to the squaring operation.
    *   The distribution of keys depends heavily on the nature of the keys.  If the keys have similar patterns, the middle digits might also be similar, leading to collisions.
    *   The number of digits to extract and their positions need careful consideration based on the keys.

*   **Example:**
    *   Key = 1234
    *   Table Size = 100 (so we need a two-digit index)
    *   `key * key = 1234 * 1234 = 1522756`
    *   Extract the middle two digits: `27`
    *   Index = 27

*   **Important Point:** The number of digits extracted and their position significantly impact the uniformity of the distribution. Choose carefully based on your expected key range.

**2.2 Division Method (Modulo Arithmetic)**

*   **Description:**
    1.  Divide the key by the size of the hash table.
    2.  Take the remainder of the division as the index in the hash table.

*   **Formula:** `index = key % table_size`

*   **Advantages:**
    *   Very simple and fast to compute.
    *   Works well when the table size is a prime number.

*   **Disadvantages:**
    *   Can lead to collisions if the keys are not evenly distributed.
    *   If the table size is a power of 2, then the hash function simply extracts the least significant bits of the key, which can lead to clustering if the keys have similar low-order bits.
    *   Choosing a good table size is critical for performance.

*   **Example:**
    *   Key = 12345
    *   Table Size = 101 (prime number)
    *   `12345 % 101 = 26`
    *   Index = 26

*   **Important Points:**
    *   Choosing a prime number for the table size generally leads to better distribution.
    *   Avoid table sizes that are powers of 2 if possible.

**2.3 Folding Method**

*   **Description:**
    1.  Divide the key into equal-sized parts (except possibly the last part).
    2.  Add the parts together.
    3.  Use the result as the index in the hash table (possibly modulo the table size).

*   **Variations:**
    *   **Fold Shift:** Simply add the parts together.
    *   **Fold Boundary:** Reverse every other part before adding.  This can help to distribute keys better if the parts tend to have similar values.

*   **Advantages:**
    *   Simple to implement.
    *   Can be useful when the key is longer than the address space.

*   **Disadvantages:**
    *   Can still lead to collisions if the parts are not evenly distributed or if the sum of the parts is not evenly distributed.
    *   Choice of part size can significantly impact performance.

*   **Example (Fold Shift):**
    *   Key = 1234567890
    *   Table Size = 1000 (3 digit index)
    *   Part Size = 3 digits
    *   Parts: 123, 456, 789, 0
    *   Sum: 123 + 456 + 789 + 0 = 1368
    *   Index = 368 (take the last 3 digits since table size is 1000)

*   **Example (Fold Boundary):**
    *   Key = 1234567890
    *   Table Size = 1000 (3 digit index)
    *   Part Size = 3 digits
    *   Parts: 123, 456, 789, 0
    *   Reverse every other part: 321, 456, 987, 0
    *   Sum: 321 + 456 + 987 + 0 = 1764
    *   Index = 764 (take the last 3 digits since table size is 1000)

*   **Important Point:** Consider using fold boundary if you suspect that adjacent parts have similar characteristics.

**2.4 Digit Analysis**

*   **Description:**
    1.  Analyze the distribution of digits in each position of the keys.
    2.  Select the digits that have the most uniform distribution.
    3.  Use the selected digits to form the index in the hash table.

*   **Advantages:**
    *   Can be very effective if the keys have a specific structure and some digits are more uniformly distributed than others.

*   **Disadvantages:**
    *   Requires prior knowledge of the key distribution.
    *   May not be suitable if the key distribution changes over time.
    *   Can be more complex to implement than other methods.

*   **Example:**

    Assume we have the following keys:

    1.  123456
    2.  133457
    3.  143458
    4.  153459

    Analysis of digit distribution in each position:

    *   1st digit: 1, 1, 1, 1 (Not uniform)
    *   2nd digit: 2, 3, 4, 5 (More uniform)
    *   3rd digit: 3, 3, 3, 3 (Not uniform)
    *   4th digit: 4, 4, 4, 4 (Not uniform)
    *   5th digit: 5, 5, 5, 5 (Not uniform)
    *   6th digit: 6, 7, 8, 9 (Uniform)

    Let's assume we need a two-digit index. We could choose the 2nd and 6th digits.

    *   Key 123456 -> Index 26
    *   Key 133457 -> Index 37
    *   Key 143458 -> Index 48
    *   Key 153459 -> Index 59

*   **Important Points:**
    *   Requires statistical analysis of the key data.
    *   Most useful when you have a large dataset of keys available for analysis beforehand.

**3. Choosing the Right Hashing Function**

The best hashing function depends on the specific characteristics of the keys and the application.  Consider the following factors:

*   **Key Distribution:**  Is the distribution uniform or skewed?
*   **Key Length:**  Are the keys short or long?
*   **Computational Cost:**  How fast does the function need to be?
*   **Table Size:**  What is the size of the hash table?
*   **Collision Resolution Technique:** How will collisions be handled?

**4. Summary of Hashing Functions**

| Hashing Function | Description                                                                        | Advantages                                                                                             | Disadvantages                                                                                                |
|------------------|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| Mid-Square       | Square the key and extract middle digits.                                          | Relatively simple, can produce good distribution.                                                        | Can be computationally expensive, distribution depends on key nature.                                      |
| Division         | Divide the key by the table size and take the remainder.                               | Very simple and fast, works well with prime table sizes.                                                     | Can lead to collisions, choosing a good table size is critical.                                            |
| Folding          | Divide the key into parts and add them together.                                       | Simple to implement, useful for long keys.                                                              | Can still lead to collisions, choice of part size matters.                                                  |
| Digit Analysis    | Analyze the distribution of digits and select the most uniform ones.             | Can be very effective if key distribution is known and some digits are more uniformly distributed than others. | Requires prior knowledge of key distribution, may not be suitable if the key distribution changes over time. |

**5. Practice Questions and Exercises**

1.  **Mid-Square:**  Given the key 4567 and a table size of 1000 (3-digit index), what is the index using the mid-square method?
    *   Answer: `4567 * 4567 = 20857489`.  Middle digits are `574`.  Index = 574

2.  **Division:**  Given the key 7890 and a table size of 101, what is the index using the division method?
    *   Answer: `7890 % 101 = 12`. Index = 12

3.  **Folding (Fold Shift):** Given the key 9876543210 and a table size of 100 (2-digit index), what is the index using the folding method (fold shift) with a part size of 2?
    *   Answer: Parts are 98, 76, 54, 32, 10. Sum = 98 + 76 + 54 + 32 + 10 = 270. Index = 70 (take the last two digits).

4.  **Digit Analysis:**  Consider the following keys: 2145, 2256, 2367, 2478.  Which digit position appears most uniformly distributed?
    *   Answer: The first digit is constant (2).  The second, third and fourth digits are increasing.  The position most uniformly distributed are the 3rd and 4th.

5.  **Conceptual:**  Explain the difference between fold shift and fold boundary methods.
    *   Answer: In fold shift, the parts of the key are simply added together. In fold boundary, every other part is reversed before being added together. This is done to improve distribution when adjacent parts may be similar.

**6. Important Points to Remember**

*   Hashing aims for O(1) average-case performance for search, insert, and delete operations.
*   Collision resolution is critical for good hash table performance.
*   Choosing the right hash function depends on the specific data being stored.
*   A well-chosen hash function minimizes collisions and distributes keys evenly across the hash table.
*   Understanding the advantages and disadvantages of each hashing function is essential for effective use.
*   Load factor significantly impacts performance. A higher load factor increases collision probability.
