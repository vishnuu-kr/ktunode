---
title: "Bowyer-Watson algorithm"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 2: Polygon Triangulation and Voronoi Diagrams:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b23b"
status: "completed"
scrapedAt: "2026-05-20T16:10:49.901Z"
---
## Computational Geometry: Module 2 - Polygon Triangulation and Voronoi Diagrams: Bowyer-Watson Algorithm

**Learning Outcomes:**

*   Understand the principle behind incremental Delaunay triangulation.
*   Explain the Bowyer-Watson algorithm.
*   Identify the bad triangles (encroached by the new point).
*   Describe the process of cavity creation and retriangulation.
*   Implement the Bowyer-Watson algorithm for Delaunay triangulation.
*   Recognize the importance of a super-triangle.
*   Analyze the time complexity of the Bowyer-Watson algorithm.

---

**1. Introduction to Incremental Delaunay Triangulation and the Bowyer-Watson Algorithm**

*   **Delaunay Triangulation:** A triangulation of a set of points in which no point in the set is inside the circumcircle of any triangle. It maximizes the minimum angle of the triangles, avoiding sliver triangles.

*   **Incremental Delaunay Triangulation:**  A method for constructing a Delaunay triangulation by iteratively adding points to an existing triangulation.  The Bowyer-Watson algorithm is a popular and effective incremental method.

*   **Why Incremental?**  Useful when points are added dynamically or when the entire dataset is too large to process at once.

*   **Bowyer-Watson Algorithm Goal:**  To maintain the Delaunay triangulation property as new points are inserted into the existing triangulation.

**2. Key Concepts and Definitions**

*   **Circumcircle:** The circle that passes through all three vertices of a triangle.

*   **Delaunay Condition:**  For a triangulation to be Delaunay, no vertex should lie inside the circumcircle of any triangle.

*   **Circumcenter:** The center of the circumcircle.  It's the point equidistant from the three vertices of the triangle.

*   **Bad Triangles (Encroached Triangles):** Triangles whose circumcircles contain the newly inserted point. These triangles violate the Delaunay condition and must be removed.

*   **Cavity:** The polygonal region formed by the union of all bad triangles.

*   **Retriangulation:**  The process of filling the cavity with new triangles that include the new point and restore the Delaunay property.  This is done by connecting the new point to the vertices on the boundary of the cavity.

*   **Super-Triangle:**  A large triangle that encompasses all the points in the input set.  It's used to provide an initial triangulation and ensure that the triangulation is valid for the entire convex hull of the point set.  The vertices of the super-triangle are eventually removed.

**3. The Bowyer-Watson Algorithm: Step-by-Step**

1.  **Initialization:**
    *   Create a super-triangle that contains all input points. The super-triangle vertices should be placed far away from the input points to minimize its impact on the final triangulation.

2.  **Iteration:**  For each point `p` in the input point set:
    *   **Find Bad Triangles:** Identify all triangles in the current triangulation whose circumcircles contain `p`.  These are the 'bad triangles'.
    *   **Create Cavity:**  Delete the bad triangles. The union of these triangles forms a polygonal cavity.
    *   **Retriangulation:** Connect the new point `p` to all vertices on the boundary of the cavity to form new triangles. These new triangles are guaranteed to satisfy the Delaunay condition.

3.  **Cleanup:**
    *   Remove any triangles that share a vertex with the super-triangle. This leaves the Delaunay triangulation of the input points.

**4. Detailed Explanation of Each Step**

*   **4.1. Finding Bad Triangles:**
    *   For each triangle `T` in the current triangulation:
        *   Calculate the circumcircle center `c` and radius `r` of `T`.
        *   Calculate the distance `d` between the new point `p` and the circumcenter `c`.
        *   If `d < r`, then `p` lies inside the circumcircle of `T`, and `T` is a bad triangle. Be aware of floating point precision and use a small tolerance value for comparison (e.g., `d <= r + tolerance`).

*   **4.2. Creating the Cavity:**
    *   The cavity is simply the region left after removing all bad triangles.  The boundary of the cavity consists of edges that were part of only one bad triangle.

*   **4.3. Retriangulation:**
    *   Iterate through the edges on the boundary of the cavity.
    *   For each boundary edge, create a new triangle by connecting the edge's endpoints to the new point `p`.

**5. Example**

Let's say we have an existing triangulation and want to insert a new point `P`.

1.  **Initial Triangulation:** Imagine a few triangles forming a region in the plane.

2.  **Insert Point P:** We add point P.

3.  **Find Bad Triangles:**  Two triangles, `T1` and `T2`, have circumcircles that contain point `P`. These are the bad triangles.

4.  **Create Cavity:** Remove `T1` and `T2`.  This creates a cavity (a polygonal hole).

5.  **Retriangulate:**  The boundary of the cavity consists of several vertices. Connect point `P` to each of these boundary vertices, creating new triangles that fill the cavity. The new triangles now include P, and the region is again triangulated.

**6. The Super-Triangle**

*   **Purpose:** To provide an initial valid triangulation and avoid boundary issues when adding the first few points.

*   **Construction:**  The super-triangle's vertices should be far enough away from the input points so that the input points lie well inside the super-triangle.  A common strategy is to calculate the bounding box of the input points and then scale up the bounding box to create the super-triangle.

*   **Removal:** After all points have been inserted, all triangles that share a vertex with the super-triangle are removed.

**7. Time Complexity**

*   **Finding Bad Triangles:** O(n) in the worst case, where 'n' is the number of triangles in the triangulation.  This requires checking the circumcircle test for each triangle.

*   **Creating Cavity:** O(n) in the worst case, as we need to iterate over the bad triangles to identify the cavity boundary.

*   **Retriangulation:** O(k), where 'k' is the number of vertices on the cavity boundary.  In the worst case, 'k' can be O(n).

*   **Overall Complexity:** Since we insert 'm' points, the worst-case time complexity is O(m*n), where 'm' is the number of input points and 'n' is the number of triangles.  However, in practice, if the points are inserted randomly, the algorithm often performs much better, closer to O(m * log n). Spatial data structures can improve performance for finding bad triangles.

**8. Important Points to Remember**

*   **Floating-Point Precision:**  The circumcircle test involves floating-point arithmetic.  It's crucial to handle floating-point precision issues by using a small tolerance value when comparing distances to avoid incorrect results.  Robust geometric predicates can help.

*   **Degenerate Cases:**  Handle degenerate cases such as coincident points or points lying on the same circle carefully. Perturbation techniques can be used to resolve these situations.

*   **Data Structures:**  Efficient data structures for storing and querying the triangulation are essential for good performance.  Common choices include triangle adjacency lists and spatial indexing structures like quadtrees or k-d trees.

*   **Super-Triangle Size:**  Choosing an appropriate size for the super-triangle is important.  Too small, and it can affect the final triangulation near the convex hull.  Too large, and it can lead to numerical instability.

**9. Practice Questions and Exercises**

1.  **Question:** Explain what the Delaunay condition is and why it is important in triangulation.
    *   **Answer:** The Delaunay condition states that no vertex should lie inside the circumcircle of any triangle in the triangulation. It's important because it maximizes the minimum angle in the triangles, avoiding sliver triangles which are undesirable in many applications (e.g., finite element analysis).

2.  **Question:**  Describe the steps of the Bowyer-Watson algorithm.
    *   **Answer:** (See Section 3 above)

3.  **Question:**  What is a "bad triangle" in the context of the Bowyer-Watson algorithm?
    *   **Answer:** A bad triangle is a triangle whose circumcircle contains the newly inserted point. These triangles violate the Delaunay condition and must be removed.

4.  **Question:** Why is the super-triangle needed in the Bowyer-Watson algorithm? How is it created, and how is it removed?
    *   **Answer:**  The super-triangle provides an initial valid triangulation and handles boundary cases when adding the first few points.  It's created by constructing a large triangle that encompasses all input points, placed far away. It is removed by removing all triangles that share a vertex with the super-triangle after all points have been inserted.

5.  **Question:**  What is the time complexity of the Bowyer-Watson algorithm, and why is it important to consider this when implementing the algorithm?
    *   **Answer:**  The worst-case time complexity is O(m*n), where m is the number of points and n is the number of triangles. However, in practice, it often performs closer to O(m * log n). Understanding the complexity helps to choose appropriate data structures and optimization techniques for efficient performance, especially for large datasets.

6.  **Exercise:** Manually run the Bowyer-Watson algorithm for a set of 4-5 points. Start with a super-triangle, and show the triangulation after each point is added.  Draw diagrams to illustrate the process.  (This requires paper and pencil).

7.  **Exercise (Programming):** Implement the Bowyer-Watson algorithm in your preferred programming language. Test it with various sets of points and visualize the resulting triangulations.

**10. Further Study**

*   Read the original papers by Bowyer and Watson.
*   Explore different data structures for storing and querying triangulations (e.g., triangle adjacency lists, quadtrees, k-d trees).
*   Investigate robust geometric predicates to handle floating-point precision issues.
*   Study other Delaunay triangulation algorithms, such as the divide-and-conquer algorithm.
