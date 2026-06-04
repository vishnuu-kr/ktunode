---
title: "Digit Analysis"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea28"
status: "completed"
scrapedAt: "2026-05-23T17:55:23.918Z"
---
# Data Structures: Module 4 - Sorting and Hashing - Digit Analysis

This module delves into sorting and hashing techniques, with a specific focus on **Digit Analysis**. Digit analysis is a powerful technique that can be applied to various sorting algorithms, particularly those that operate on the digits of numbers.

## 1. Introduction to Digit Analysis in Sorting

Digit analysis is a method of sorting data by examining the individual digits of the numbers within the dataset. Instead of comparing entire numbers, we compare them digit by digit, typically starting from the least significant digit (LSD) or the most significant digit (MSD). This approach is particularly effective for sorting integers.

**Key Concepts:**

*   **Least Significant Digit (LSD) Sorting:** Sorts numbers based on their digits from right to left (units place, tens place, hundreds place, etc.).
*   **Most Significant Digit (MSD) Sorting:** Sorts numbers based on their digits from left to right (hundreds place, tens place, units place, etc.).
*   **Radix Sort:** A non-comparative sorting algorithm that uses digit analysis to sort numbers. It typically employs a stable sorting algorithm (like counting sort) as a subroutine for each digit position.

**Relevance to Course Outcomes:**

*   **CO4: Apply and compare various techniques for searching and sorting.** Digit analysis is a fundamental technique for radix sort, allowing us to understand and apply a different approach to sorting beyond comparison-based methods.
*   **CO1: Compare performance of algorithms using asymptotic notations (Knowledge Level: K2).** We will analyze the time complexity of digit-based sorting algorithms.

**Textbook References:**

*   **Horowitz, Sahni, and Anderson-Freed:** Chapter 7 discusses various sorting algorithms, including Radix Sort, which inherently uses digit analysis.
*   **Samanta:** Chapter 5 on Sorting often includes discussions on Radix Sort as a non-comparison-based method.
*   **Gilberg and Forouzan:** Chapter 10 on Sorting Algorithms might cover Radix Sort and its reliance on digit manipulation.

---

## 2. Radix Sort using LSD (Least Significant Digit)

LSD Radix Sort is a stable sorting algorithm that sorts elements by processing digits from right to left. It's particularly efficient for sorting integers with a fixed number of digits or a bounded range of values.

**Algorithm Steps:**

1.  **Find the Maximum Number:** Determine the largest number in the input array to identify the maximum number of digits.
2.  **Iterate through Digits:** For each digit position, starting from the least significant digit (units place) up to the most significant digit of the largest number:
    *   **Distribute Elements:** Use a stable sorting algorithm (typically Counting Sort) to sort the array based on the current digit.
    *   **Collect Elements:** Gather the elements in their sorted order for the current digit.
3.  **Repeat:** Continue this process for all digit positions. After processing the most significant digit, the array will be fully sorted.

**Example (LSD Radix Sort):**

Let's sort the array: `[170, 45, 75, 90, 802, 24, 2, 66]`

*   **Maximum number:** 802 (has 3 digits)

**Pass 1: Sort by Units Digit (d = 10^0)**

*   Digits: 0, 5, 5, 0, 2, 4, 2, 6
*   Using Counting Sort (stable):
    *   Bucket 0: `[170, 90]`
    *   Bucket 2: `[802, 2]`
    *   Bucket 4: `[24]`
    *   Bucket 5: `[45, 75]`
    *   Bucket 6: `[66]`
*   Array after Pass 1: `[170, 90, 802, 2, 24, 45, 75, 66]`

**Pass 2: Sort by Tens Digit (d = 10^1)**

*   Digits: 7, 9, 0, 0, 2, 4, 7, 6
*   Using Counting Sort (stable):
    *   Bucket 0: `[802, 2]` (maintaining relative order of 802 and 2 from previous step)
    *   Bucket 2: `[24]`
    *   Bucket 4: `[45]`
    *   Bucket 6: `[66]`
    *   Bucket 7: `[170, 75]` (maintaining relative order of 170 and 75)
    *   Bucket 9: `[90]`
*   Array after Pass 2: `[802, 2, 24, 45, 66, 170, 75, 90]`

**Pass 3: Sort by Hundreds Digit (d = 10^2)**

*   Digits: 1, 0, 0, 0, 0, 0, 0, 0 (for single-digit numbers, we consider leading zeros)
*   Using Counting Sort (stable):
    *   Bucket 0: `[2, 24, 45, 66, 75, 90, 802]` (maintaining relative order)
    *   Bucket 1: `[170]`
*   Array after Pass 3: `[2, 24, 45, 66, 75, 90, 170, 802]`

**Time Complexity (LSD Radix Sort):**

Let `n` be the number of elements in the array.
Let `d` be the maximum number of digits in any number.
Let `b` be the base of the number system (e.g., 10 for decimal).

The dominant operation is the stable sort (Counting Sort) performed `d` times.
Counting Sort takes `O(n + b)` time.
Therefore, the total time complexity is `O(d * (n + b))`.

If `d` is relatively small and `b` is considered constant (like base 10), then the complexity can be approximated as `O(d * n)`.

**Space Complexity (LSD Radix Sort):**

The space complexity is typically `O(n + b)` due to the auxiliary space required by Counting Sort.

**Important Points:**

*   LSD Radix Sort requires a **stable sorting algorithm** as a subroutine.
*   It's efficient when the number of digits (`d`) is small or proportional to `log_b(max_value)`.
*   It performs well on integers and fixed-length keys.

**Textbook References:**

*   **Horowitz, Sahni, and Anderson-Freed:** Chapter 7.2.3 details Radix Sort and its implementation using Counting Sort.
*   **Samanta:** Section 5.7 covers Radix Sort.
*   **Gilberg and Forouzan:** Section 10.5 describes Radix Sort.

---

## 3. Radix Sort using MSD (Most Significant Digit)

MSD Radix Sort sorts elements by processing digits from left to right. This approach can be more efficient for numbers with varying numbers of digits, as it can stop processing a group of numbers once their most significant digits are the same.

**Algorithm Steps:**

1.  **Recursive Sorting:** The process is typically recursive.
2.  **Sort by MSD:** Divide the input array into groups based on the most significant digit.
3.  **Recursively Sort Groups:** For each group, if it contains more than one element, recursively call the MSD Radix Sort on the next significant digit.
4.  **Base Case:** If a group has only one element, or if all elements in a group have the same digits up to the current position, the group is considered sorted.

**Example (MSD Radix Sort):**

Let's sort the array: `[170, 45, 75, 90, 802, 24, 2, 66]`

*   **Maximum number:** 802 (has 3 digits)

**Pass 1: Sort by Hundreds Digit (MSD)**

*   Digits: 1, 0, 0, 0, 8, 0, 0, 0
*   Partitioning based on hundreds digit:
    *   Group 0 (hundreds digit 0): `[45, 75, 90, 24, 2, 66]`
    *   Group 1 (hundreds digit 1): `[170]`
    *   Group 8 (hundreds digit 8): `[802]`

**Recursive Call on Group 0 (for Tens Digit):**

*   Input: `[45, 75, 90, 24, 2, 66]`
*   Digits (Tens): 4, 7, 9, 2, 0, 6
*   Partitioning based on tens digit:
    *   Group 0 (tens digit 0): `[2]`
    *   Group 2 (tens digit 2): `[24]`
    *   Group 4 (tens digit 4): `[45]`
    *   Group 6 (tens digit 6): `[66]`
    *   Group 7 (tens digit 7): `[75]`
    *   Group 9 (tens digit 9): `[90]`

**Recursive Call on Group 0 (for Units Digit):**

*   Input: `[2]` - Already sorted.

**Combining results for Group 0 (Tens Digit):** `[2, 24, 45, 66, 75, 90]`

**Combining results for all Groups:** `[2, 24, 45, 66, 75, 90, 170, 802]`

**Time Complexity (MSD Radix Sort):**

The time complexity of MSD Radix Sort is more nuanced. In the worst case, it can be `O(d * n)` if each digit requires a separate partitioning step. However, if many numbers share common prefixes, the number of comparisons and partitioning steps can be significantly reduced.

A more precise analysis considers the total number of comparisons made. If `N` is the total number of digits across all numbers, the complexity is roughly `O(N)`. For numbers with `d` digits and base `b`, `N` can be up to `n * d`. So, in the worst case, it's `O(d * n)`.

**Space Complexity (MSD Radix Sort):**

The space complexity is typically `O(d)` for the recursion stack or `O(n)` if auxiliary arrays are used for partitioning.

**Important Points:**

*   MSD Radix Sort is naturally recursive.
*   It can be more efficient than LSD Radix Sort when the number of digits varies significantly, as it can prune branches of recursion early.
*   Implementing the partitioning step efficiently is crucial.

**Textbook References:**

*   **Horowitz, Sahni, and Anderson-Freed:** Chapter 7.2.4 discusses MSD Radix Sort, highlighting its recursive nature.
*   **Samanta:** May or may not explicitly cover MSD Radix Sort; check for recursive sorting strategies.
*   **Gilberg and Forouzan:** Might touch upon MSD Radix Sort as an alternative to LSD.

---

## 4. Digit Analysis for Other Sorting Scenarios

While Radix Sort is the primary application of digit analysis in sorting, the underlying principle of breaking down keys into smaller components can be extended.

**Key Concepts:**

*   **Character-based Sorting:** Similar to digit analysis, strings can be sorted by analyzing their characters, often from left to right (similar to MSD).
*   **Trie-based Sorting:** Tries (prefix trees) implicitly perform digit/character analysis by structuring data based on prefixes. Traversing a Trie in order can yield sorted data.

**Relevance to Course Outcomes:**

*   **CO3: Make use of nonlinear data structures like trees and graphs to design algorithms for various applications.** Tries are nonlinear data structures where digit/character analysis is fundamental to their design and operation, enabling efficient sorting and searching of strings.
*   **CO4: Apply and compare various techniques for searching and sorting.** Understanding how digit analysis is used in Tries provides another perspective on sorting.

**Textbook References:**

*   **Horowitz, Sahni, and Anderson-Freed:** Chapter 9 (Trees) might discuss Tries and their applications in sorting and searching.
*   **Gilberg and Forouzan:** Chapter 12 (Trees) might cover Tries.
*   **Aho, Hopcroft, and Ullman:** Their foundational work often touches upon string processing and data structures like Tries.

---

## 5. Hashing and Digit Analysis

While not directly a sorting technique, digit analysis plays a role in understanding hash function design, particularly for numeric data.

**Key Concepts:**

*   **Hash Function:** A function that maps keys to indices in a hash table.
*   **Digit Extraction:** Some hash functions extract specific digits from a numeric key.
*   **Mid-Square Method:** A hashing technique where a key is squared, and then digits from the middle of the squared value are used as the hash index. This implicitly involves digit analysis.
*   **Folding Method:** Another hashing technique that involves dividing the key into parts and summing them. This summation can be seen as a form of digit manipulation.

**Relevance to Course Outcomes:**

*   **CO5: Apply appropriate hash function to store and access a given dataset (Knowledge Level: K3).** Understanding how digit analysis influences hash function design is crucial for choosing or creating effective hash functions.
*   **CO1: Compare performance of algorithms using asymptotic notations (Knowledge Level: K2).** The choice of hash function, potentially influenced by digit analysis, affects the average and worst-case performance of hash table operations.

**Example (Mid-Square Method):**

Let's hash a key `K = 45` into a hash table of size `M = 10`.

1.  **Square the key:** `K^2 = 45^2 = 2025`
2.  **Extract middle digits:** To get a hash index within the table size `M=10`, we might take digits from the middle. For example, if we need a 1-digit index, we can take the tens digit.
    *   `2025` -> Tens digit is `2`.
    *   Hash index = `2 % 10 = 2`.
    *   Hash index = `2`.

If we needed a 2-digit index (e.g., `M=100`):
    *   `2025` -> Middle two digits are `02`.
    *   Hash index = `02 % 100 = 2`.
    *   Hash index = `2`.

**Important Points:**

*   Hash functions aim to distribute keys uniformly across the hash table.
*   Digit analysis methods in hashing aim to exploit the numeric nature of keys to achieve better distribution.
*   The effectiveness of these methods depends on the distribution of the input keys and the size of the hash table.

**Textbook References:**

*   **Horowitz, Sahni, and Anderson-Freed:** Chapter 8 (Hashing) would cover various hashing techniques, including potentially digit-based ones.
*   **Samanta:** Chapter 6 on Hashing often details techniques like mid-square and folding.
*   **Gilberg and Forouzan:** Chapter 11 on Hashing might discuss these methods.

---

## 6. Practice Questions and Exercises

**Question 1 (LSD Radix Sort):**
Sort the following array using LSD Radix Sort: `[329, 457, 657, 839, 436, 720, 355]`

**Answer:**
*   Max digits = 3. Base = 10.
*   **Pass 1 (Units Digit):**
    *   `[720, 355, 436, 457, 657, 329, 839]`
*   **Pass 2 (Tens Digit):**
    *   `[720, 436, 355, 457, 657, 329, 839]`
*   **Pass 3 (Hundreds Digit):**
    *   `[329, 355, 436, 457, 657, 720, 839]`

---

**Question 2 (MSD Radix Sort):**
Explain the conceptual difference between LSD Radix Sort and MSD Radix Sort. When might MSD Radix Sort be preferred over LSD Radix Sort?

**Answer:**
*   **LSD Radix Sort:** Sorts from the least significant digit to the most significant digit. It's deterministic and always requires `d` passes, where `d` is the max number of digits. It relies on stable sorting.
*   **MSD Radix Sort:** Sorts from the most significant digit to the least significant digit. It's typically recursive and can be more efficient if numbers share common prefixes, allowing for early termination of branches.
*   **Preference for MSD:** MSD Radix Sort is preferred when the number of digits varies significantly among the elements, or when dealing with lexicographical sorting of strings, as it can avoid unnecessary comparisons on less significant digits if the more significant digits are already distinct.

---

**Question 3 (Hashing):**
Describe how the Mid-Square method for hashing can be considered an example of digit analysis. What are potential drawbacks of this method?

**Answer:**
*   The Mid-Square method involves squaring the key and then selecting digits from the middle of the result. This selection process is a form of digit analysis because it isolates specific digits of the transformed key.
*   **Potential Drawbacks:**
    *   **Collisions:** If the middle digits of squared keys are not unique, collisions can occur.
    *   **Table Size:** The method's effectiveness is highly dependent on the hash table size (`M`) and how the selection of middle digits aligns with `M`.
    *   **Spread:** Squaring can sometimes lead to clustering of keys, especially if the original keys have patterns.
    *   **Performance:** Squaring large numbers can be computationally expensive.

---

## 7. Important Points to Remember

*   **Digit Analysis:** Breaking down numerical keys into their individual digits for sorting or hashing.
*   **LSD Radix Sort:** Processes digits from right to left, requires a stable sort, `O(d * (n + b))` time complexity.
*   **MSD Radix Sort:** Processes digits from left to right, recursive, potentially more efficient for variable-length keys.
*   **Stability:** Crucial for LSD Radix Sort; a stable sort maintains the relative order of equal elements.
*   **Tries:** Data structures that use digit/character analysis for efficient string operations and can be used for sorting.
*   **Hashing:** Digit analysis can be used in hash function design (e.g., Mid-Square, Folding) to improve key distribution.
*   **Trade-offs:** Digit analysis-based sorting (Radix Sort) is often faster than comparison-based sorts for specific data types (integers, fixed-length keys) but has limitations for arbitrary data.

---

This comprehensive set of notes covers the essential aspects of Digit Analysis within the context of sorting and hashing, aligning with the provided learning and course outcomes. Remember to refer to your textbooks for detailed pseudocode and implementation specifics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
