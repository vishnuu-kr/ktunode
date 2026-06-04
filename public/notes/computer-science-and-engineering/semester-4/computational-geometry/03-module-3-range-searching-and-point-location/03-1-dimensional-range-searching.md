---
title: "1-dimensional range searching"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 3: Range Searching and Point Location :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b240"
status: "completed"
scrapedAt: "2026-05-20T16:10:52.820Z"
---
# Computational Geometry: Module 3 - Range Searching and Point Location
## Topic: 1-Dimensional Range Searching

**Description:** This module covers 1-dimensional range searching, a fundamental problem in computational geometry. We explore different data structures and algorithms to efficiently find points within a specified range on a line.

**Learning Outcomes:**

*   Understand the 1-dimensional range searching problem and its applications.
*   Learn about different data structures for 1-dimensional range searching, including linked lists, binary search trees, and balanced binary search trees (e.g., AVL trees, Red-Black trees).
*   Analyze the time and space complexity of different range searching algorithms.
*   Implement and apply these data structures to solve 1-dimensional range searching problems.
*   Understand the concept of fractional cascading in the context of range searching.

---

## 1. Introduction to 1-Dimensional Range Searching

*   **Definition:** Given a set *P* of *n* points on the real line (ℝ), the 1-dimensional range searching problem asks to report all points in *P* that lie within a given interval (range) *[x, x']*, where *x* and *x'* are real numbers and *x ≤ x'*.

*   **Formal Statement:** Given a query range *[x, x']*, find all *p ∈ P* such that *x ≤ p ≤ x'*.

*   **Applications:**

    *   Database queries: Finding all records with a specific attribute within a certain range.
    *   Financial analysis: Identifying stock prices within a desired range.
    *   Geographic information systems (GIS): Locating points of interest (e.g., restaurants, gas stations) along a road segment (which can be considered a 1D line).
    *   Data analysis: Filtering data based on numeric ranges.

*   **Key Performance Metrics:**

    *   **Query time:** The time it takes to find and report all points within the range.  We want to minimize this.
    *   **Space complexity:** The amount of memory used to store the data structure.  We also want to minimize this.
    *   **Preprocessing time:** The time it takes to build the data structure from the input points. While important, we often prioritize low query time.

## 2. Simple Solutions and Their Limitations

*   **Unsorted Array (Linear Scan):**

    *   Store the points in an unsorted array.
    *   For each query *[x, x']*, iterate through the array and check if each point *p* lies within the range *[x, x']*.
    *   **Query time:** O(n) – linear in the number of points.
    *   **Space complexity:** O(n) – to store the points.
    *   **Preprocessing time:** O(1) (no preprocessing needed).
    *   **Limitation:** Query time is inefficient for large datasets.  Suitable only when the dataset is small or queries are rare.

    **Example:**

    `P = [5, 2, 8, 1, 9, 4]`
    Query range: `[3, 7]`
    Result: `[5, 4]` (scan through the array and identify these two elements.)

*   **Sorted Array (Binary Search):**

    *   Sort the points in ascending order.
    *   Use binary search to find the smallest point *p<sub>lower</sub>* ≥ *x* and the largest point *p<sub>upper</sub>* ≤ *x'*.
    *   Report all points between *p<sub>lower</sub>* and *p<sub>upper</sub>*.
    *   **Query time:** O(log n + k), where *k* is the number of points reported (the "output size").  `O(log n)` for the two binary searches and `O(k)` to report the points between.
    *   **Space complexity:** O(n) – to store the sorted array.
    *   **Preprocessing time:** O(n log n) – for sorting the array.
    *   **Improvement:** Significantly better query time than linear scan for large datasets, especially when *k* is small.

    **Example:**

    `P = [1, 2, 4, 5, 8, 9]` (Sorted)
    Query range: `[3, 7]`
    1.  Binary search for 3 (or the smallest element ≥ 3):  Find 4.
    2.  Binary search for 7 (or the largest element ≤ 7):  Find 5.
    3.  Report all elements between 4 and 5: `[4, 5]`

## 3. Binary Search Trees (BSTs) for Range Searching

*   **Concept:** Store the points in a binary search tree (BST).  Nodes are ordered according to their values.

*   **Range Searching Algorithm:**

    1.  Start at the root.
    2.  If the root's value *r* is within the range *[x, x']*, report it.
    3.  Recursively search the left subtree if *x < r*.
    4.  Recursively search the right subtree if *r < x'*.

*   **Query Time Analysis:**

    *   In the worst case, the algorithm might visit all nodes in the tree. This leads to a query time of O(n). (Consider a skewed tree.)
    *   However, for a *balanced* BST, the query time can be significantly improved.

*   **Space Complexity:** O(n) – to store the BST.

*   **Preprocessing Time:** O(n log n) on average for building the BST (if constructed by inserting elements one by one), and O(n) if built bottom-up from a sorted array.  O(n<sup>2</sup>) in worst case for a skewed tree.

*   **Importance of Balance:** The efficiency of BST-based range searching heavily depends on the tree's balance.  Unbalanced BSTs degrade to linear search performance.

## 4. Balanced Binary Search Trees (BBSTs)

*   **Motivation:** To guarantee logarithmic query time, we need to use self-balancing BSTs.

*   **Common BBSTs:**

    *   **AVL Trees:** Height-balanced BSTs.
        *   Height difference between left and right subtrees is at most 1.
        *   Operations (insertion, deletion) involve rotations to maintain balance.
    *   **Red-Black Trees:** Another type of self-balancing BST.
        *   Nodes are colored "red" or "black".
        *   Specific coloring rules ensure logarithmic height.

*   **Range Searching with BBSTs:** The range searching algorithm remains the same as with regular BSTs, but the balanced structure ensures logarithmic height.

*   **Query Time:** O(log n + k), where *k* is the number of reported points.  `O(log n)` to find the endpoints of the range, and `O(k)` to report the points in the range.

*   **Space Complexity:** O(n).

*   **Preprocessing Time:** O(n log n) to build the BBST.

*   **Advantages of BBSTs:** Guaranteed logarithmic query time, making them highly efficient for large datasets.

**Example (AVL Tree):**

Let's insert the points [5, 2, 8, 1, 9, 4] into an AVL tree:

1.  Insert 5:  Root = 5
2.  Insert 2:  2 becomes the left child of 5.
3.  Insert 8:  8 becomes the right child of 5.
4.  Insert 1:  1 becomes the left child of 2.
5.  Insert 9:  9 becomes the right child of 8.
6.  Insert 4:  4 becomes the right child of 2.  This causes an imbalance.  A rotation is performed to rebalance the tree.

The resulting AVL tree (after rotations):

```
      5
     / \
    2   8
   / \   \
  1   4   9
```

Now, to search for the range [3, 7]:

1.  Start at the root (5). 5 is in the range, report it.
2.  Search the left subtree (rooted at 2) because 3 < 5.
3.  Search the right subtree (rooted at 8) because 5 < 7.
4.  In the left subtree, 2 is not in the range.
5.  Search the left of 2 (1): 1 is not in the range, and we can stop searching there since the tree is ordered.
6.  Search the right of 2 (4): 4 is in the range, report it.
7.  In the right subtree, 8 is not in the range, search left subtree of 8, which is empty.
8.  The result is `[5, 4]`.

## 5. Fractional Cascading (Brief Introduction)

*   **Concept:**  A technique to speed up multiple range queries in related data structures.  It avoids repeated binary searches by linking corresponding elements across different levels or data structures.

*   **Relevance to 1D Range Searching:** Although primarily used in higher-dimensional range searching, fractional cascading ideas can be applied to hierarchical 1D range searching structures, improving efficiency when multiple related queries are performed. Imagine many different but adjacent ranges which can be sped up by noting when the binary search would return the same pointer.

*   **Benefit:**  Reduces the number of binary searches required, resulting in faster query times for multiple related queries.

## 6. Practice Questions/Exercises

1.  **Given the set of points `P = [10, 5, 12, 3, 8, 15, 7]`:**

    *   (a) Find all points within the range `[6, 11]` using a linear scan approach.
    *   (b) Sort the points and then find all points within the range `[6, 11]` using binary search.
    *   (c) Construct a BST (not necessarily balanced) and find all points within the range `[6, 11]` using the BST range searching algorithm.
    *   (d) Explain how the query time would change if you used an AVL tree instead of an unbalanced BST for part (c).

2.  **Implement a 1D range searching algorithm using a balanced BST (e.g., AVL tree or Red-Black tree) in your favorite programming language.**

3.  **Analyze the time and space complexity of each approach (linear scan, sorted array with binary search, BST, BBST) for 1D range searching.**  Specifically write out the O() bounds for time and space used for building the data structure (preprocessing time) and the query time.

4.  **Consider a scenario where you have a large dataset of stock prices (millions of data points) and you need to perform frequent range queries (e.g., find all prices between \$100 and \$120). Which data structure would you choose and why?**

## 7. Answers to Practice Questions

1.  **(a)** `[10, 8, 7]` (linear scan)
    **(b)** Sorted array: `[3, 5, 7, 8, 10, 12, 15]`.  Binary search finds 7 as the smallest >= 6 and 10 as the largest <= 11. Therefore, the answer is `[7, 8, 10]`
    **(c)**  The exact BST depends on the insertion order. For example, inserting in the given order `[10, 5, 12, 3, 8, 15, 7]` might yield a BST where searching for [6,11] requires visiting nodes 10, 5, 8, 12, 7, etc.  and outputting [10, 8, 7].
    **(d)** Using an AVL tree would guarantee a query time of O(log n + k), where *n* is the number of points and *k* is the number of points within the range. With the unbalanced BST, the query time could be O(n) in the worst case (if the tree is skewed).

2.  (Implementation will depend on the language and data structure library used.)

3.  **Time and Space Complexity Summary:**

    | Data Structure           | Preprocessing Time | Query Time       | Space Complexity |
    | -------------------------- | ------------------ | ----------------- | ----------------- |
    | Unsorted Array           | O(1)               | O(n)              | O(n)              |
    | Sorted Array + Binary Search | O(n log n)         | O(log n + k)      | O(n)              |
    | BST                      | O(n log n) avg.    | O(n) worst-case   | O(n)              |
    | BBST (AVL, Red-Black)   | O(n log n)         | O(log n + k)      | O(n)              |

4.  For a large dataset with frequent range queries, a **balanced binary search tree (BBST)** such as an AVL tree or Red-Black tree is the best choice. This provides the best trade-off between preprocessing time (O(n log n)) and query time (O(log n + k)). The logarithmic query time guarantees efficient retrieval of stock prices within the desired range, even with millions of data points.  While sorted arrays are good, updating them becomes an O(n) operation.  Balanced trees are always O(log n) to insert or delete new values.

## 8. Important Points to Remember

*   The choice of data structure depends on the size of the dataset, the frequency of queries, and the importance of minimizing query time.
*   For small datasets, a simple linear scan might be sufficient.
*   For large datasets and frequent queries, balanced BSTs are generally the most efficient.
*   Understanding the time and space complexity trade-offs is crucial for selecting the appropriate data structure.
*   Fractional cascading can further optimize query performance in certain scenarios.
*   Balancing is *critical* for BSTs to ensure efficient range searching.

These notes provide a comprehensive overview of 1-dimensional range searching. Understanding these concepts will help you tackle more complex range searching problems in higher dimensions.
