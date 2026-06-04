---
title: "K-dimensional range trees"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 3: Range Searching and Point Location :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b241"
status: "completed"
scrapedAt: "2026-05-20T16:10:53.533Z"
---
## Computational Geometry: Module 3 - Range Searching and Point Location

### Topic: K-Dimensional Range Trees

**Learning Outcomes:**

*   Understand the concept of range searching and point location.
*   Explain the structure of k-dimensional range trees.
*   Describe the algorithms for constructing and querying k-dimensional range trees.
*   Analyze the space and time complexity of k-dimensional range trees.
*   Apply k-dimensional range trees to solve range searching problems.

**1. Introduction to Range Searching and Point Location**

*   **Range Searching:** Given a set of points *S* in *d*-dimensional space and a query range *Q*, find all points in *S* that lie within *Q*.  *Q* is often a hyperrectangle defined by intervals along each dimension.

*   **Point Location:** Given a subdivision of the plane (or higher-dimensional space) into regions, and a query point *q*, determine which region contains *q*.

*   **Relationship:** Range searching is a fundamental problem in computational geometry with applications in databases, geographic information systems (GIS), computer graphics, and more. Point location is another crucial problem for various applications such as collision detection and spatial indexing. K-dimensional range trees are specifically designed to improve the efficiency of range searching.

**2. The Basics: 1-Dimensional Range Trees**

*   **Structure:** A balanced binary search tree (BST) on the *x*-coordinates of the points in *S*.
*   **Querying:** Given a query range [*x*, *x'*], find all points in the tree with *x*-coordinates between *x* and *x'*.
    *   Find the leaf *u* with key *x*.
    *   Find the leaf *v* with key *x'*.
    *   The points in the range are precisely the points stored in the leaves between *u* and *v*, and the points stored in the subtrees rooted at the children of nodes on the paths from the root to *u* and *v* that are "between" the two paths.
*   **Example:** Let S = {2, 5, 8, 10, 12, 15, 18, 20}. Query range = [7, 16]. The BST will contain the sorted set. The search for 7 and 16 would then return the points {8, 10, 12, 15}.
*   **Space Complexity:** *O(n)*, where *n* is the number of points.
*   **Query Time Complexity:** *O(log n + k)*, where *n* is the number of points and *k* is the number of reported points. *O(log n)* to find the splitting nodes, and *O(k)* to report the points in the relevant subtrees.

**3. K-Dimensional Range Trees: Structure and Construction**

*   **Recursive Structure:** A *k*-dimensional range tree is a recursively defined data structure.
    *   The primary tree is a 1-dimensional range tree on the *x*-coordinate of the points.
    *   Each node *v* in the primary tree stores:
        *   `v.point`: The point associated with this node.
        *   `v.subtree`: A (*k*-1)-dimensional range tree built on the points in the subtree of *v* using the remaining *k*-1 coordinates.  This is called the *associated structure*.
        *   `P(v)`: The set of points in the subtree rooted at *v*.
*   **Base Case:**  When *k* = 1, we have a standard 1-dimensional range tree.
*   **Construction Algorithm:**
    1.  Build a 1-dimensional range tree *T* on the *x*-coordinates of the points in *S*.
    2.  For each internal node *v* of *T*:
        *   Create a (*k*-1)-dimensional range tree *T<sub>v</sub>* on the points in the set *P(v)*, using the *k*-1 remaining coordinates.
        *   Set *v.subtree* = *T<sub>v</sub>*.
*   **Example:** Let *S* = {(1, 5), (3, 2), (4, 7), (6, 1), (8, 3), (9, 6)}.  We'll construct a 2-dimensional range tree.
    1.  Build a 1D range tree based on the *x*-coordinates: 1, 3, 4, 6, 8, 9.
    2.  For each node *v* in the 1D tree, construct a 1D range tree (associated structure) based on the *y*-coordinates of the points in *P(v)*, which is the set of points in the subtree rooted at *v*. For instance, if v is the root, P(v) contains all 6 points.

**4. Querying a K-Dimensional Range Tree**

*   **Algorithm:**  Given a query range [*x*, *x'*] x [*y*, *y'*] x ... x [*z*, *z'*], where the dimensions are x, y, ..., z:
    1.  Query the primary tree (1D range tree on *x*-coordinates) with the interval [*x*, *x'*]. This identifies a set of *O(log n)* subtrees whose points have *x*-coordinates in the range [*x*, *x'*].
    2.  For each subtree *v.subtree* identified in step 1, query the corresponding (*k*-1)-dimensional range tree *v.subtree* with the range [*y*, *y'*] x ... x [*z*, *z'*].
*   **Recursive Nature:** The querying process is also recursive, working down the dimensions.
*   **Example (Continuation of previous example):** Query range = [2, 7] x [2, 6].
    1. Query the 1D tree for x-coordinates in the range [2, 7].  This might return subtrees containing points with x-coordinates 3, 4, 6.
    2. For the subtree rooted at the node containing x=3, query the associated 1D range tree (built on y-coordinates) for points with y-coordinates in the range [2, 6].  In this subtree, the point (3, 2) satisfies this condition, so it's reported.  Repeat this for the subtrees rooted at nodes containing x=4 and x=6.
*   **Report all qualified points**

**5. Space and Time Complexity Analysis**

*   **Space Complexity:** *O(n log<sup>k-1</sup> n)*
    *   The 1D range tree takes *O(n)* space.
    *   Each point is stored in *O(log n)* associated structures (since it belongs to *O(log n)* subtrees).
    *   Recursively, this leads to *O(n log<sup>k-1</sup> n)*.
*   **Query Time Complexity:** *O(log<sup>k</sup> n + k)*
    *   Querying the 1D range tree takes *O(log n)* time.
    *   For each of the *O(log n)* subtrees identified, we query a (*k*-1)-dimensional range tree.
    *   Recursively, this leads to *O(log<sup>k</sup> n + k)*, where *k* is the number of points reported. Without the O(k) term, reporting an empty set takes log^k n time.

**6. Optimizations and Alternatives (Brief Mention)**

*   **Fractional Cascading:**  Can be used to improve the query time to *O(log<sup>k-1</sup> n + k)*.
*   **Kd-trees:**  Another data structure for range searching, often more practical for higher dimensions, although they don't have guaranteed worst-case performance like range trees.
*   **Quadtrees and Octrees:**  Useful for spatial data with non-uniform distribution.

**7. Applications**

*   **Database Queries:**  Finding records that satisfy certain conditions on multiple attributes.
*   **Geographic Information Systems (GIS):**  Finding all restaurants within a certain distance of a given location.
*   **Computer Graphics:**  Collision detection, visibility determination.
*   **Data Mining:** Anomaly detection, clustering

**8. Important Points to Remember**

*   K-dimensional range trees are a hierarchical data structure based on nested 1-dimensional range trees.
*   The space complexity grows significantly with the number of dimensions.
*   They offer guaranteed worst-case performance, making them suitable for applications where predictability is important.
*   The associated structures at each node allow efficient querying in the remaining dimensions.

**9. Practice Questions/Exercises**

1.  **Construction:** Construct a 2-dimensional range tree for the following set of points: {(2, 3), (5, 1), (7, 4), (9, 2)}. Draw the primary tree and the associated structures for the root and one internal node.
    *   **Answer:**  (Sketch)
        *   Primary Tree (X-coordinates): 2, 5, 7, 9
        *   Root's Associated Structure: A 1D range tree on the Y-coordinates of all points: 1, 2, 3, 4.
        *   An internal node (e.g., representing the range [2, 5])'s Associated Structure:  A 1D range tree on the Y-coordinates of the points (2,3) and (5,1): 1, 3.
2.  **Querying:** Given the 2D range tree from question 1, find all points within the range [4, 8] x [2, 5].
    *   **Answer:**  The points (7,4) satisfy the range.
3.  **Complexity:** What is the space complexity of a 3-dimensional range tree storing 1000 points?
    *   **Answer:** O(n log<sup>k-1</sup>n) = O(1000 * log<sup>2</sup>(1000)), where log is typically base 2.
4.  **Comparison:** What are some advantages and disadvantages of using k-d trees instead of k-dimensional range trees?
    *   **Answer:**
        *   **Advantages of k-d trees:**
            *   Often require less space, especially in higher dimensions.
            *   Easier to implement than k-dimensional range trees.
        *   **Disadvantages of k-d trees:**
            *   Do not provide guaranteed worst-case query performance.  Query time can degrade significantly in some cases.
            *   Performance depends heavily on the splitting strategy used during construction.

5.  **Modifications:** How would you modify a k-dimensional range tree to count the number of points within a given range instead of reporting them all? What would be the complexity of such a query?
    *   **Answer:**
        *   At each node in the range tree, store the size (number of points) of the subtree rooted at that node.
        *   During the range query, instead of reporting the points, accumulate the sizes of the subtrees that fall completely within the range.
        *   Complexity:  The query time remains O(log<sup>k</sup> n) since you're still traversing the same tree structure.  The space complexity is still O(n log<sup>k-1</sup> n) as well.

This detailed set of notes covers the essential aspects of k-dimensional range trees, including their structure, construction, querying, complexity, and applications. The practice questions provide an opportunity to reinforce understanding and apply the concepts.
