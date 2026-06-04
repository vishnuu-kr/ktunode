---
title: "Kirkpatrick’s point location algorithm (Text 1, Chapter 6)"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 3: Range Searching and Point Location :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b245"
status: "completed"
scrapedAt: "2026-05-20T16:10:56.374Z"
---
# Computational Geometry: Kirkpatrick's Point Location Algorithm

## Module 3: Range Searching and Point Location
## Topic: Kirkpatrick's Point Location Algorithm (Text 1, Chapter 6)

**Learning Outcomes:**

*   Understand the problem of point location in a planar subdivision.
*   Describe the hierarchical approach used by Kirkpatrick's algorithm.
*   Explain the concept of independent sets in a planar triangulation.
*   Outline the steps involved in preprocessing the planar subdivision for efficient point location.
*   Implement the point location query algorithm using the preprocessed data structure.
*   Analyze the space and time complexity of Kirkpatrick's algorithm.

---

### 1. Introduction to Point Location

*   **Definition:** Given a planar subdivision *S* (a partition of the plane into polygonal regions) and a query point *q*, the point location problem is to determine which region of *S* contains *q*.

*   **Importance:** This problem arises in numerous applications, including:
    *   Geographic Information Systems (GIS): Finding which country/state a GPS coordinate belongs to.
    *   Computer Graphics: Determining which surface a ray intersects.
    *   Robotics: Planning paths while avoiding obstacles.

*   **Naive Approach:**  Testing each face of *S* for containment can be O(n) where n is the number of faces.  We want to do better.

### 2. Hierarchical Point Location - Kirkpatrick's Algorithm: A Layered Approach

*   **Core Idea:** Kirkpatrick's algorithm preprocesses the planar subdivision into a hierarchical data structure (a directed acyclic graph, or DAG) that allows for efficient point location. It iteratively refines a triangulation until it becomes trivial to search.

*   **Hierarchical Decomposition:** The algorithm creates a sequence of increasingly coarser triangulations:
    *   `T_0` = A triangulation refining the original planar subdivision *S*.
    *   `T_1, T_2, ..., T_h`: A sequence of increasingly coarser triangulations, where `T_i` is a triangulation of a convex polygon enclosing `T_{i-1}`.  `T_h` is a single triangle.
    *   The height *h* of the hierarchy is logarithmic in the number of vertices.

*   **DAG Structure:** The algorithm stores the triangulations in a Directed Acyclic Graph (DAG). Each node in the DAG corresponds to a triangle in some `T_i`.  The root of the DAG corresponds to the single triangle in `T_h`.

### 3. Independent Sets and Vertex Removal

*   **Independent Set:** A subset of vertices in a graph where no two vertices in the subset are connected by an edge.

*   **Finding a Large Independent Set:** Kirkpatrick's algorithm relies on finding a *large* independent set of vertices in each `T_i`.  "Large" means the size of the independent set is a constant fraction of the number of vertices in `T_i`.  For example, if `T_i` has `n_i` vertices, the independent set might have size `n_i/c` for some constant `c`.

*   **Vertex Removal Process:**
    1.  Find a large independent set *I* of low-degree vertices in `T_i`. (A low-degree vertex has a small number of neighbors, bounded by a constant). This is crucial for maintaining the logarithmic height of the hierarchy.
    2.  Remove the vertices in *I* from `T_i` along with their incident edges and triangles.
    3.  Retriangulate the resulting holes (the regions left after removing the vertices and incident elements).
    4.  This results in `T_{i+1}`, the next coarser triangulation.
    5.  Store pointers from each triangle in `T_{i+1}` to the triangles in `T_i` that it overlaps (contains). These pointers are crucial for the search.

*   **Why Low Degree Vertices?** Removing high-degree vertices can drastically increase the complexity of the retriangulation step, potentially increasing the size of the triangles significantly and ruining the search time. Using low-degree vertices keeps the retriangulation more localized.

*   **Crucial Theorem (Implied):** In any planar triangulation, there exists an independent set of size at least n/c (for some constant c) consisting entirely of vertices with degree bounded by a constant. Finding such a set is possible in linear time.

### 4. Preprocessing the Planar Subdivision

*   **Preprocessing Steps:**

    1.  **Triangulation:**  Convert the original planar subdivision *S* into a triangulation `T_0`. If *S* has non-triangular faces, these must be triangulated first.  Add a bounding triangle that encloses all vertices of *S*.
    2.  **Construct Hierarchy:** Iteratively construct `T_1, T_2, ..., T_h` as described above.
        *   Find an independent set *I* of low-degree vertices in `T_i`.
        *   Remove *I* and retriangulate.
        *   Establish pointers between triangles in `T_{i+1}` and overlapping triangles in `T_i`.
    3.  **Build the DAG:** Create a DAG where:
        *   Each node corresponds to a triangle in some `T_i`.
        *   Edges point from a triangle in `T_{i+1}` to the triangles in `T_i` that overlap it.  The root is the single triangle of `T_h`.
*   **Preprocessing Complexity:** O(n log n) time and O(n) space. The O(n log n) term stems from the sorting/triangulation steps. The O(n) space is required to store the DAG.

### 5. Point Location Query Algorithm

*   **Querying Steps:**

    1.  Start at the root of the DAG (the single triangle in `T_h`).
    2.  While not at a leaf (triangle in `T_0`):
        *   Determine which child triangle of the current triangle contains the query point *q*.
        *   Move to that child triangle.
    3.  Once at a leaf triangle (triangle in `T_0`), you've found the triangle in the original triangulation `T_0` that contains *q*. Return the face of the original planar subdivision that contains this triangle.

*   **Example:** Imagine a DAG with three levels (T2, T1, T0). We start at the top (T2), a single big triangle.  We check which child triangle in T1 contains *q*. Let's say it's triangle A.  We now go to node A in the DAG. We check which child triangle of A in T0 contains *q*. Let's say it's triangle B.  We now know *q* is contained in triangle B in the original triangulation, T0.

### 6. Time and Space Complexity Analysis

*   **Space Complexity:** O(n) - The algorithm uses linear space to store the DAG and the triangulations.

*   **Query Time Complexity:** O(log n) - The height of the DAG is logarithmic in the number of vertices.  At each level, we perform a constant amount of work (checking which child triangle contains the point).  Therefore, the query time is proportional to the height of the DAG.

### 7. Important Points to Remember

*   Kirkpatrick's algorithm is an optimal point location algorithm in terms of asymptotic complexity.
*   The choice of independent set is crucial for performance.  A large independent set of low-degree vertices guarantees logarithmic query time.
*   The algorithm's performance relies on careful preprocessing to build the hierarchical structure.
*   Although asymptotically optimal, the algorithm can be complex to implement.
*   The algorithm assumes static subdivision. If the subdivision changes frequently, other approaches might be more suitable.

### 8. Practice Questions/Exercises

**Question 1:**

Explain the concept of a hierarchical decomposition in the context of Kirkpatrick's algorithm and why it is essential for efficient point location.

**Answer:**

A hierarchical decomposition involves creating a series of progressively coarser triangulations (T0, T1, ..., Th), where T0 is a triangulation of the original planar subdivision, and Th is a single triangle enclosing the entire subdivision.  Each triangulation Ti+1 is created by removing a large independent set of low-degree vertices from Ti and retriangulating the resulting holes. This hierarchy is crucial because it allows the point location query to narrow down the search space from a very coarse level (Th) down to the specific triangle containing the query point in a logarithmic number of steps.  The height of the hierarchy is logarithmic, and at each level, the search narrows down.

**Question 2:**

Why is it important to remove an *independent set* of vertices when constructing the coarser triangulations in Kirkpatrick's algorithm? What are the benefits of also selecting only *low-degree* vertices?

**Answer:**

Removing an *independent set* ensures that no two removed vertices are adjacent. This simplifies the retriangulation step.  If adjacent vertices were removed simultaneously, the resulting holes could be more complex to retriangulate, potentially increasing the overall complexity of the algorithm.

Selecting *low-degree* vertices is important to keep the degree of the remaining vertices from becoming excessively large.  Removing a high-degree vertex would require retriangulating a large area, which could lead to triangles with high aspect ratios and potentially degrade the performance of the algorithm. Additionally, by focusing on low-degree vertices, the size of the created triangles doesn't drastically increase after each removal and retriangulation step.

**Question 3:**

Describe the steps involved in performing a point location query using the DAG structure created by Kirkpatrick's algorithm.

**Answer:**

1.  Start at the root of the DAG (representing the outermost triangle `T_h`).
2.  Check which of the child triangles (triangles in `T_{h-1}`) contains the query point *q*. This usually involves testing whether *q* lies inside each child triangle (e.g., using barycentric coordinates or checking signs of determinants).
3.  Move to the node corresponding to the child triangle that contains *q*.
4.  Repeat steps 2 and 3 until you reach a leaf node, which corresponds to a triangle in the original triangulation `T_0`.
5.  The face of the original planar subdivision that contains this final triangle is the region containing the query point *q*.  Return this face.

**Question 4:**

What is the time complexity of a point location query in Kirkpatrick's algorithm and why?

**Answer:**

The time complexity of a point location query in Kirkpatrick's algorithm is O(log n), where n is the number of vertices in the original planar subdivision. This logarithmic time complexity is achieved because the algorithm utilizes a hierarchical decomposition of the plane, and the query process traverses a path from the root of the DAG to a leaf.  The height of this path (and therefore the number of steps in the query) is logarithmic in the number of vertices.

**Question 5:**

True or False: Kirkpatrick's algorithm can handle dynamic planar subdivisions (where edges and vertices can be inserted or deleted) efficiently.

**Answer:**

False. Kirkpatrick's algorithm is designed for *static* planar subdivisions. While updates *are* possible, they require rebuilding the entire hierarchical structure, making it inefficient for dynamic scenarios. If your subdivision is dynamic, consider other point location methods, such as persistent data structures or randomized incremental algorithms.
