---
title: "Wavelet Trees"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 4: Data Structure applications "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b37c"
status: "completed"
scrapedAt: "2026-05-20T16:10:21.350Z"
---
# ADVANCED DATA STRUCTURES - Module 4: Data Structure Applications - Wavelet Trees

## Introduction

This module focuses on applications of advanced data structures. This section delves into Wavelet Trees, a versatile data structure used for solving a variety of problems, particularly related to range queries on sequences and strings.

## Learning Outcomes

By the end of this section, you will be able to:

1.  Understand the fundamental principles behind Wavelet Trees.
2.  Construct a Wavelet Tree from a given sequence.
3.  Explain the space complexity of Wavelet Trees.
4.  Implement and analyze the time complexity of core Wavelet Tree operations like `rank`, `select`, and `access`.
5.  Apply Wavelet Trees to solve problems involving range queries, such as range counting and range minimum/maximum queries.
6.  Explain how Wavelet trees are used in text indexing.

## 1. Fundamental Principles of Wavelet Trees

*   **Definition:** A Wavelet Tree is a tree-based data structure that represents a sequence S[1...n] over an alphabet Σ of size σ.  It is a balanced tree where each node *v* represents a subsequence of *S*.

*   **Hierarchical Decomposition:** The key idea behind a Wavelet Tree is the hierarchical decomposition of the alphabet.
    *   The root node *v* represents the entire sequence *S*.
    *   Each internal node *v* represents a subsequence *S<sub>v</sub>* of *S* and is associated with a sub-alphabet Σ<sub>v</sub>.
    *   Each internal node *v* stores a bit vector *B<sub>v</sub>* of length |*S<sub>v</sub>*|.
    *   The left child represents the subsequence of *S<sub>v</sub>* containing symbols belonging to the lower half of Σ<sub>v</sub>.
    *   The right child represents the subsequence of *S<sub>v</sub>* containing symbols belonging to the upper half of Σ<sub>v</sub>.
    *   The leaves of the tree represent the individual symbols of the alphabet.

*   **Bit Vector and Routing:**
    *   The bit vector *B<sub>v</sub>* at each node indicates whether each symbol in *S<sub>v</sub>* belongs to the lower or upper half of Σ<sub>v</sub>. '0' indicates the lower half, and '1' indicates the upper half.
    *   This bit vector is crucial for routing symbols down the tree during queries.
    *   Efficient `rank` and `select` operations on the bit vector *B<sub>v</sub>* are fundamental for fast query processing in Wavelet Trees.

## 2. Construction of a Wavelet Tree

*   **Algorithm:**
    1.  Start with the root node representing the entire sequence *S[1...n]* and the full alphabet Σ.
    2.  At each internal node *v*:
        *   Create a bit vector *B<sub>v</sub>* where *B<sub>v</sub>*[i] = 0 if *S<sub>v</sub>*[i] belongs to the lower half of Σ<sub>v</sub>, and 1 otherwise.
        *   Create the left child by collecting all elements from *S<sub>v</sub>* where *B<sub>v</sub>*[i] = 0.
        *   Create the right child by collecting all elements from *S<sub>v</sub>* where *B<sub>v</sub>*[i] = 1.
        *   Recursively build the left and right subtrees.
    3.  Stop when a leaf node is reached, representing a single symbol.

*   **Example:**
    Consider the sequence S = [2, 1, 3, 2, 4, 1, 3, 4] and alphabet Σ = {1, 2, 3, 4}.

    1.  **Root Node:**  S = [2, 1, 3, 2, 4, 1, 3, 4], Σ = {1, 2, 3, 4}.
        *   Midpoint = (1+4)/2 = 2.5.  Lower half = {1, 2}, Upper half = {3, 4}.
        *   B = [0, 0, 1, 0, 1, 0, 1, 1]
        *   Left Child:  S<sub>left</sub> = [2, 1, 2, 1], Σ<sub>left</sub> = {1, 2}
        *   Right Child: S<sub>right</sub> = [3, 4, 3, 4], Σ<sub>right</sub> = {3, 4}

    2.  **Left Child:** S<sub>left</sub> = [2, 1, 2, 1], Σ<sub>left</sub> = {1, 2}.
        *   Midpoint = (1+2)/2 = 1.5. Lower half = {1}, Upper half = {2}.
        *   B = [1, 0, 1, 0]
        *   Left Child: S<sub>left.left</sub> = [1, 1], Σ<sub>left.left</sub> = {1}
        *   Right Child: S<sub>left.right</sub> = [2, 2], Σ<sub>left.right</sub> = {2}

    3.  **Right Child:** S<sub>right</sub> = [3, 4, 3, 4], Σ<sub>right</sub> = {3, 4}.
        *   Midpoint = (3+4)/2 = 3.5. Lower half = {3}, Upper half = {4}.
        *   B = [0, 1, 0, 1]
        *   Left Child: S<sub>right.left</sub> = [3, 3], Σ<sub>right.left</sub> = {3}
        *   Right Child: S<sub>right.right</sub> = [4, 4], Σ<sub>right.right</sub> = {4}

    This process continues until the leaves are reached, each representing a unique symbol.

*   **Implementation Notes:**
    *   The alphabet can be represented by its indices (e.g., 1 to σ).
    *   Efficiently implement the bit vector using succinct data structures that support fast `rank` and `select` operations. Libraries like libcds offer implementations.

## 3. Space Complexity of Wavelet Trees

*   **Analysis:**
    *   Each node stores a bit vector of length equal to the length of the subsequence it represents.
    *   The sum of the lengths of all subsequences at each level of the tree is equal to the length of the original sequence *n*.
    *   The height of the tree is log σ, where σ is the alphabet size.

*   **Formula:** Therefore, the total space complexity is O(n log σ) bits.  More precisely, if we use a succinct bit vector representation like RRR or Elias-Fano that only add sublinear overhead, the space is n log σ + o(n log σ).

*   **Note:** If σ is a constant or a small value compared to *n*, the space complexity is effectively O(n).

## 4. Core Wavelet Tree Operations: `rank`, `select`, and `access`

*   **Assumptions:**  We assume efficient implementations of `rank` and `select` operations on the bit vectors *B<sub>v</sub>*. `rank<sub>b</sub>(B, i)` returns the number of occurrences of bit *b* in *B[1...i]*. `select<sub>b</sub>(B, j)` returns the position of the *j*-th occurrence of bit *b* in *B*.

*   **`access(i)`:**  Returns the symbol at position *i* in the original sequence *S*.
    *   **Algorithm:**
        1.  Start at the root node.
        2.  At node *v*, examine *B<sub>v</sub>*[i].
        3.  If *B<sub>v</sub>*[i] = 0, the symbol belongs to the lower half of Σ<sub>v</sub>.  Move to the left child and set *i* = `rank<sub>0</sub>(B<sub>v</sub>, i)`.
        4.  If *B<sub>v</sub>*[i] = 1, the symbol belongs to the upper half of Σ<sub>v</sub>.  Move to the right child and set *i* = `rank<sub>1</sub>(B<sub>v</sub>, i)`.
        5.  Repeat steps 2-4 until a leaf node is reached.  The leaf node represents the symbol at position *i* in the original sequence.

    *   **Example:**
        Let S = [2, 1, 3, 2, 4, 1, 3, 4].  Find S[3] (i.e., access(3)).
        1.  Root: B = [0, 0, 1, 0, 1, 0, 1, 1], i = 3. B[3] = 1. Move to the right child.  i = rank<sub>1</sub>(B, 3) = 1.
        2.  Right Child: B = [0, 1, 0, 1], i = 1. B[1] = 0. Move to the left child.  i = rank<sub>0</sub>(B, 1) = 1.
        3.  Left Child:  Reached a leaf node representing '3'.

    *   **Time Complexity:** O(log σ) because the height of the tree is log σ.

*   **`rank(i, c)`:**  Returns the number of occurrences of symbol *c* in *S[1...i]*.
    *   **Algorithm:**
        1.  Start at the root node.
        2.  At node *v*:
            *   If *c* belongs to the lower half of Σ<sub>v</sub>, move to the left child and set *i* = `rank<sub>0</sub>(B<sub>v</sub>, i)`.
            *   If *c* belongs to the upper half of Σ<sub>v</sub>, move to the right child and set *i* = `rank<sub>1</sub>(B<sub>v</sub>, i)`.
        3.  Repeat step 2 until a leaf node representing *c* is reached.
        4.  Return *i*.

    *   **Example:** Let S = [2, 1, 3, 2, 4, 1, 3, 4]. Find rank(5, 2).
        1.  Root: B = [0, 0, 1, 0, 1, 0, 1, 1], i = 5, c = 2. 2 is in the lower half.  Move to the left child.  i = rank<sub>0</sub>(B, 5) = 3.
        2.  Left Child: B = [1, 0, 1, 0], i = 3, c = 2. 2 is in the upper half (only 2 in the alphabet). Move to the *only* child with bit = 1.  i = rank<sub>1</sub>(B, 3) = 2.
        3.  Right Child(of Left Child): B is empty but we return i = 2

    *   **Time Complexity:** O(log σ).

*   **`select(j, c)`:**  Returns the position of the *j*-th occurrence of symbol *c* in *S*.
    *   **Algorithm:**
        1.  Start at the leaf node representing *c*.
        2.  Move upwards to the root node.
        3.  At each node *v*, let *b* be the bit representing whether *c* belongs to the lower or upper half of Σ<sub>v</sub>.
        4.  If *b* = 0, set *j* = `select<sub>0</sub>(B<sub>v</sub>, j)`.
        5.  If *b* = 1, set *j* = `select<sub>1</sub>(B<sub>v</sub>, j)`.
        6.  Continue moving upwards until the root node is reached.  The value of *j* at the root node is the answer.

    *   **Example:**  Let S = [2, 1, 3, 2, 4, 1, 3, 4]. Find select(2, 1).
        1.  Start at the leaf representing 1.
        2.  Move up to the parent (left child of the root). Need to find the second '0' in the bit vector of the root.
        3.  Bit for 1 is 0. Current position is j=2
        4.  B = [0, 0, 1, 0, 1, 0, 1, 1], j = select<sub>0</sub>(B, 2) = 2.

    *   **Time Complexity:** O(log σ).

## 5. Applications of Wavelet Trees in Range Queries

*   **Range Counting:**  Given a range [l, r] and a symbol *c*, count the number of occurrences of *c* in *S[l...r]*.
    *   **Algorithm:**  `rank(r, c) - rank(l-1, c)`.
    *   **Time Complexity:** O(log σ).

*   **Range Minimum/Maximum Queries (RMQ):**  Find the minimum/maximum symbol in a range [l, r]. (Requires mapping symbols to ordered integers.)
    *   **Algorithm:** A more complex algorithm involving navigating the tree to identify the range of symbols present in the interval [l, r]. This involves recursively exploring the tree and using rank queries to determine the presence and quantity of symbols within the range.  The algorithm traverses the tree based on whether the queried range intersects with the ranges represented by the nodes.
    *   **Time Complexity:**  O(log σ *  [complexity of intersection test]). The intersection test involves rank queries and contributes to the overall complexity.

*   **Range Mode:** Find the most frequent element in a range [l, r].
    *   **Algorithm:** The range mode query is more complex and is not as directly supported as rank queries. A common approach involves recursively traversing the wavelet tree and maintaining candidate mode values. At each node, the algorithm computes the number of occurrences of the lower and upper half ranges within the specified interval [l, r] using rank queries. The mode candidates are refined by proceeding down the child nodes corresponding to the more frequent half ranges.
    *   **Time Complexity:** Time complexity varies widely depending on the implementation and can reach *O(n)*.

## 6. Wavelet Trees in Text Indexing

*   **Text Indexing:** Wavelet Trees are particularly useful in text indexing applications where the text is treated as a sequence of characters.

*   **Compressed Suffix Trees:** Wavelet Trees are a key component in building compressed suffix trees and suffix arrays. They provide efficient access to the suffix array and enable fast pattern searching within the text.

*   **Pattern Matching:** Given a pattern *P* and a text *T*, find all occurrences of *P* in *T*. Wavelet trees help optimize this process by allowing for faster rank and select operations, which are essential for searching the suffix array.

*   **Lempel-Ziv Compression:** Wavelet trees can be used to index the Lempel-Ziv factors, enabling efficient string searching and retrieval in compressed text.

## Important Points to Remember

*   Wavelet Trees are a powerful data structure for representing sequences over an alphabet.
*   Efficient implementation of `rank` and `select` operations on bit vectors is crucial for performance.
*   The height of the tree is O(log σ), influencing the time complexity of operations.
*   Wavelet Trees are suitable for solving range query problems and are widely used in text indexing.
*   Consider the trade-offs between space and time when choosing a bit vector implementation.

## Practice Questions/Exercises

1.  **Construction:**  Construct a wavelet tree for the sequence S = [a, b, a, c, b, c, a] with the alphabet Σ = {a, b, c}.  Draw the tree and the bit vectors at each node.
    *   **Answer:**  (You should construct the tree following the steps outlined above. The key is to correctly build the bit vectors and route elements to the left and right children.)

2.  **Rank Query:**  Using the wavelet tree constructed in question 1, find rank(5, b) and explain each step.
    *   **Answer:**  (Follow the `rank` algorithm.  You should find rank(5, b) = 2.)

3.  **Select Query:** Using the wavelet tree constructed in question 1, find select(3, a) and explain each step.
    *   **Answer:** (Follow the `select` algorithm.  You should find select(3, a) = 7.)

4.  **Range Counting:**  Using the wavelet tree constructed in question 1, find the number of occurrences of 'a' in the range [2, 6].
    *   **Answer:** rank(6, a) - rank(1, a) = 3 - 1 = 2.

5.  **Space Complexity:**  What is the space complexity of a wavelet tree for a sequence of length n over an alphabet of size sqrt(n)?
    *   **Answer:**  O(n log σ) = O(n log sqrt(n)) = O(n * 0.5 * log n) = O(n log n).

6.  **Implementation:** Describe the main challenges of implementing rank/select on bit vectors effectively.
    *   **Answer:** Achieving both good space utilization (compression) and fast query times (constant-time or very fast rank/select) is challenging. Succinct data structures like RRR and Elias-Fano require careful engineering to balance these two aspects.  Cache-friendliness is also an important consideration.

These notes provide a comprehensive overview of Wavelet Trees. Understanding these concepts and practicing the exercises will give you a solid foundation for applying Wavelet Trees to various problems. Remember to pay close attention to the details of the algorithms and the importance of efficient `rank` and `select` implementations.
