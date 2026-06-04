---
title: "Range Searching and Point Location :-"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 3: Range Searching and Point Location :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b23e"
status: "completed"
scrapedAt: "2026-05-20T16:10:51.397Z"
---
# Computational Geometry: Module 3 - Range Searching and Point Location

**Module Description:** This module explores efficient algorithms for solving Range Searching and Point Location problems, fundamental tasks in computational geometry with numerous applications.

**Topic Description:** This topic focuses on the core concepts, data structures, and algorithms used to efficiently answer range queries (finding all points within a specified region) and point location queries (determining which region a given point falls within).

**Learning Outcomes:**

*   Understand the definitions and applications of range searching and point location problems.
*   Explain and implement algorithms for orthogonal range searching in 1D and 2D.
*   Describe the Kd-tree data structure and its use for range searching.
*   Explain and implement algorithms for point location using persistent search trees.
*   Analyze the space and time complexity of the described algorithms.
*   Compare and contrast different approaches for range searching and point location.
*   Apply these techniques to solve real-world problems.

## 1. Introduction to Range Searching and Point Location

*   **Definition: Range Searching:** Given a set of points *P* in *d*-dimensional space and a query range *Q*, find all points in *P* that lie within *Q*.

    *   Example: Finding all restaurants within a 5-mile radius.

*   **Definition: Point Location:** Given a subdivision of the plane into polygonal regions, determine which region contains a given query point *q*.

    *   Example: Determining which country a specific GPS coordinate falls within.

*   **Applications:**

    *   **Databases:** Finding records that satisfy certain criteria (e.g., age between 20 and 30, salary between $50,000 and $70,000).
    *   **Geographic Information Systems (GIS):** Finding all cities within a specified region.
    *   **Computer Graphics:** Collision detection, visibility determination.
    *   **Robotics:** Path planning, obstacle avoidance.

*   **Key Performance Metrics:**

    *   **Preprocessing Time:** The time required to build the data structure.
    *   **Space Complexity:** The amount of memory required to store the data structure.
    *   **Query Time:** The time required to answer a query.

## 2. 1D Range Searching

*   **Problem:** Given a set of *n* points on a line, find all points within a given interval [a, b].

*   **Solutions:**

    *   **Linear Search:**  Examine each point individually.
        *   Time Complexity: O(n)
        *   Space Complexity: O(1)

    *   **Sorted Array with Binary Search:** Sort the points and use binary search to find the smallest point greater than or equal to *a* and the largest point less than or equal to *b*.
        *   Preprocessing Time: O(n log n) (for sorting)
        *   Space Complexity: O(n)
        *   Query Time: O(log n + k), where *k* is the number of points in the range.  The O(log n) component arises from the two binary searches.

    *   **Balanced Binary Search Tree (e.g., AVL Tree, Red-Black Tree):**  Store the points in a balanced BST.  Perform a range query by traversing the tree.
        *   Preprocessing Time: O(n log n) (for building the tree)
        *   Space Complexity: O(n)
        *   Query Time: O(log n + k), where *k* is the number of points in the range.

*   **Example:**  Let P = {1, 5, 8, 12, 15, 18, 20, 22, 25}.  Query Range: [7, 19]

    *   Points in range: {8, 12, 15, 18}
    *   k = 4

## 3. 2D Orthogonal Range Searching

*   **Problem:** Given a set of *n* points in the plane, find all points within a given rectangle [x1, x2] x [y1, y2].

*   **Solutions:**

    *   **Naive Approach:** Check each point to see if it lies within the rectangle.
        *   Time Complexity: O(n) per query
        *   Space Complexity: O(1)

    *   **Using 1D Range Searching (Inefficient):** Perform a 1D range search on the x-coordinates.  Then, for each point found, check if its y-coordinate is within the y-range.
        *   Time Complexity: O(log n + k') for x-range, then O(k') for y-range check, resulting in O(log n + k') overall. Here, k' is the number of points within the x-range, which can be significantly larger than the true number of points *k* within the 2D rectangle.

    *   **Kd-trees:** A tree-based data structure that recursively partitions the plane.

        *   **Construction:**
            1.  Choose a splitting line perpendicular to either the x-axis or the y-axis.  Common choices are to alternate between x and y at each level or to split along the median.
            2.  Partition the points into two subsets based on their position relative to the splitting line.
            3.  Recursively build Kd-trees for each subset.
            4.  The root node represents the entire point set, and each internal node represents the splitting line and its two child trees.  Leaf nodes contain a single point.

        *   **Range Querying:**
            1.  Start at the root node.
            2.  If the query rectangle completely contains the region represented by the current node, report all points in the subtree rooted at that node.
            3.  If the query rectangle does not intersect the region represented by the current node, prune the subtree.
            4.  Otherwise, recursively search the left and right subtrees.

        *   **Time Complexity:**
            *   Construction: O(n log n)
            *   Space Complexity: O(n)
            *   Query Time: O(√n + k), where *k* is the number of reported points.

        *   **Example:**

            Let P = {(2,3), (5,4), (9,6), (4,7), (8,1), (7,2)}
            Query Range: [4,8] x [2,6]

            A possible Kd-tree could split the space along the x-axis at the median x-value, then along the y-axis at the median y-value for each resulting region, and so on. You would then traverse this tree, pruning branches that don't intersect the range and reporting points that are within the query rectangle.

*   **Range Trees:** Another data structure for orthogonal range searching.  Often provides better theoretical guarantees than Kd-trees in the worst case, but can be more complex to implement and have higher constant factors.
    *   Construction: Uses nested binary search trees, one for the x-coordinates and one (or more) for the y-coordinates.
    *   Query time: O(log<sup>2</sup> n + k)
    *   Space: O(n log n)

## 4. Point Location

*   **Problem:** Given a planar subdivision (a partition of the plane into regions), determine which region contains a given query point *q*.

*   **Solutions:**

    *   **Naive Approach:** Iterate through each region and test if the point is inside.
        *   Time Complexity: O(n), where n is the number of regions.

    *   **Slab Decomposition and Binary Search:** Divide the plane into vertical slabs by drawing vertical lines through each vertex of the planar subdivision. Within each slab, the regions are ordered vertically.  Perform binary search on the slabs to find the slab containing the query point, and then perform binary search within the slab to find the region containing the point.

        *   Preprocessing Time: O(n log n) (for sorting vertices and creating slabs)
        *   Space Complexity: O(n)
        *   Query Time: O(log n)

    *   **Persistent Search Trees (Kirkpatrick's Algorithm is a more complex alternative):** Create a search tree where, at each level, a new version of the tree is built that reflects changes made by the next vertical line swept. Persistence allows you to access previous versions of the tree without recomputation.

        *   Consider a vertical line sweeping across the subdivision from left to right.  As the line moves, the order of regions intersected by the line changes only at vertices.
        *   Create a binary search tree for the order of regions intersected by the sweep line at each vertex.
        *   To query, determine the closest vertex to the left of the query point and use the corresponding version of the search tree to locate the region.

        *   **Time Complexity (with Fractional Cascading Optimization):**
            *   Preprocessing Time: O(n log n)
            *   Space Complexity: O(n log n)
            *   Query Time: O(log n)

*   **Example:**  Consider a map of countries.  Given a GPS coordinate, determine which country contains that coordinate.

## 5. Comparing and Contrasting Approaches

| Feature           | 1D Range Search (Sorted Array) | Kd-tree (2D Range Search) | Slab Decomposition (Point Location) |
| ----------------- | -------------------------------- | ------------------------- | ------------------------------------- |
| Dimensionality    | 1D                               | 2D                        | 2D                                    |
| Problem           | Range Searching                  | Range Searching           | Point Location                        |
| Preprocessing     | O(n log n)                       | O(n log n)                | O(n log n)                            |
| Space             | O(n)                             | O(n)                      | O(n)                                  |
| Query Time        | O(log n + k)                      | O(√n + k)                  | O(log n)                              |
| Implementation    | Relatively Simple                 | Moderate                  | Moderate                                |

## 6. Practice Questions and Exercises

1.  **1D Range Search:** Given the points {3, 7, 11, 15, 20, 25}, find all points in the range [8, 18].  What approach would be most efficient?

    *   **Answer:** {11, 15}.  A sorted array with binary search is the most efficient.

2.  **Kd-tree:** Describe how you would build a Kd-tree for the points {(1, 5), (3, 2), (5, 8), (7, 3), (9, 1)}.  Draw the tree.

    *   **Answer:**
        1.  Splitting on x: {(1, 5), (3, 2), (5, 8), (7, 3), (9, 1)}. Median x-coordinate is 5 (corresponding to point (5,8)). Divide points into two groups: Left = {(1, 5), (3, 2)}, Right = {(7, 3), (9, 1)}. (5,8) is the root.
        2. Split left group {(1, 5), (3, 2)} on y-coordinate. The median y-coordinate is (5+2)/2 = 3.5. Divide the left group: Below = {(3,2)}, Above = {(1,5)}. (3,2) and (1,5) are the left leaf nodes.
        3.  Split right group {(7, 3), (9, 1)} on y-coordinate. The median y-coordinate is (3+1)/2 = 2. Divide the right group: Below = {(9,1)}, Above = {(7,3)}. (9,1) and (7,3) are the right leaf nodes.

        The tree structure is:
        ```
                    (5, 8)
                   /      \
                (3, 2)    (7, 3)
               /      \    /     \
           (1, 5)    Nil  (9, 1)  Nil

        ```

3.  **Point Location:** Explain how slab decomposition can be used to solve the point location problem.  What are its limitations?

    *   **Answer:** Slab decomposition divides the plane into vertical slabs and then uses binary search to find the region containing the query point.  Limitations include its sensitivity to data skew (if many vertices have the same x-coordinate, the slabs become highly unbalanced) and the pre-processing overhead.

4.  Compare and contrast range trees and kd-trees in terms of space complexity, query time and ease of implementation.

    *   **Answer:**
        *   **Space Complexity:** Kd-trees have O(n) space complexity, whereas Range Trees have O(n log n).
        *   **Query Time:** Kd-trees offer O(√n + k) query time, while Range Trees provide O(log<sup>2</sup> n + k).
        *   **Implementation Complexity:** Kd-trees are generally considered easier to implement than range trees due to the relative simplicity of space partitioning. Range trees involve nested tree structures and fractional cascading which increase the complexity.

## 7. Important Points to Remember

*   Range searching and point location are fundamental problems with many applications.
*   The choice of algorithm depends on the dimensionality of the data, the type of range query, and the desired performance characteristics.
*   Kd-trees are a versatile and widely used data structure for orthogonal range searching, especially in lower dimensions.
*   Slab decomposition provides a relatively simple solution for point location, but can be less efficient than more sophisticated approaches.
*   Persistent search trees offer optimal logarithmic query time for point location but require more complex implementation.
*   Always consider the trade-offs between preprocessing time, space complexity, and query time when choosing an algorithm.
