---
title: "Lawson's flip algorithm (Text 1,  Chapter 9)"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 2: Polygon Triangulation and Voronoi Diagrams:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b23c"
status: "completed"
scrapedAt: "2026-05-20T16:10:50.683Z"
---
## Computational Geometry - Module 2: Polygon Triangulation and Voronoi Diagrams

### Topic: Lawson's Flip Algorithm (Text 1, Chapter 9)

**Learning Outcomes:**

*   Understand the concept of triangulation and its properties.
*   Describe the Delaunay triangulation.
*   Explain the legality of edges in a triangulation.
*   Describe the Lawson's flip algorithm for Delaunay triangulation construction.
*   Analyze the efficiency of Lawson's flip algorithm.
*   Identify situations where Lawson's flip algorithm may not terminate and strategies to overcome them.

**1. Introduction to Triangulation**

*   **Definition:** A triangulation of a planar straight-line graph G = (V, E) is the addition of as many non-intersecting edges to E as possible. A triangulation of a polygon P is a maximal set of non-intersecting diagonals.
*   **Importance:** Triangulations are fundamental in computational geometry for applications like:
    *   Finite Element Analysis (FEA)
    *   Computer Graphics (surface representation)
    *   Path planning
    *   Spatial data analysis

**2. Delaunay Triangulation**

*   **Definition:**  A Delaunay triangulation of a set of points is a triangulation such that no point in the set is inside the circumcircle of any triangle in the triangulation.
*   **Key Property:** It maximizes the minimum angle of all angles in the triangles of the triangulation. This property is crucial for avoiding skinny triangles, which are problematic in applications like FEA.
*   **Circumcircle:**  For any triangle in a Delaunay triangulation, the circle passing through its three vertices (the circumcircle) contains no other points of the input set within its interior.
*   **Uniqueness:** For a set of points in general position (no four points are co-circular), the Delaunay triangulation is unique.

**3. Legality of Edges and Illegal Edges**

*   **Definition of Legal Edge:** An edge `e` connecting vertices `p` and `q` in a triangulation `T` is considered *legal* if the circumcircle of one of the triangles adjacent to `e` doesn't contain the third vertex of the other triangle adjacent to `e` in its interior.
*   **Definition of Illegal Edge:** An edge `e` is *illegal* if it's not legal.
*   **Visual Representation:** Imagine edge `e` is a shared side of two triangles, ABC and ABD. `e` (edge AB) is illegal if point C lies inside the circumcircle of triangle ABD, or if point D lies inside the circumcircle of triangle ABC.
*   **Significance:** An edge being illegal implies that flipping it (replacing it with the other diagonal of the quadrilateral formed by the two adjacent triangles) will result in a triangulation with a better angle sequence (higher minimum angle).

**4. Lawson's Flip Algorithm**

*   **Purpose:** To construct a Delaunay triangulation from an arbitrary triangulation by iteratively flipping illegal edges.
*   **Algorithm Steps:**
    1.  Start with any triangulation of the point set.
    2.  While there exists an illegal edge `e` in the triangulation:
        *   Identify the two triangles ABC and ABD sharing edge `e` (edge AB).
        *   Remove the edge `e` (edge AB).
        *   Add the other diagonal CD to the triangulation.
        *   Update the adjacency information of affected triangles.
    3.  Return the triangulation.
*   **Pseudocode:**

    ```
    Algorithm LawsonFlip(Triangulation T, Edge e)
        Input: A triangulation T and an edge e that is illegal.
        Output: The triangulation T with edge e replaced by another edge.

        1. Let ABC and ABD be the two triangles adjacent to edge e = AB.
        2. Remove edge e from T.
        3. Add edge CD to T.
        4. Update adjacency information in T.
    ```
*   **Example:**

    Imagine 4 points A, B, C, and D form a convex quadrilateral. Initially, the triangulation contains edge AB. However, point D falls inside the circumcircle of ABC. Therefore, AB is illegal.  The algorithm removes AB and adds CD, resulting in two new triangles ADC and CDB.  This new triangulation is more "Delaunay-like."

**5. Efficiency of Lawson's Flip Algorithm**

*   **Worst-Case Complexity:** While Lawson's algorithm is intuitively simple, its worst-case time complexity can be O(n^2), where n is the number of points. This is because the number of flips can be quadratic in the worst case.  The algorithm can take a long time, especially for poorly constructed initial triangulations.
*   **Average Case Complexity:**  In practice, Lawson's algorithm often performs much better than the worst-case bound. Empirical studies suggest an average-case running time closer to O(n log n).
*   **Factors Affecting Efficiency:**
    *   The initial triangulation's quality greatly affects the number of flips required. Starting with a near-Delaunay triangulation will significantly reduce the runtime.
    *   The order in which illegal edges are processed also impacts performance.

**6. Termination and Potential Issues**

*   **Guaranteed Termination (Generally):** For points in general position (no four points are co-circular), Lawson's flip algorithm is guaranteed to terminate and produce a Delaunay triangulation.
*   **Co-circular Points:** When dealing with co-circular points, the Delaunay triangulation is not unique.  Lawson's algorithm might get stuck in a state where multiple triangulations are possible, and it might oscillate between them indefinitely.  This leads to non-termination.
*   **Solutions for Co-circular Points:**
    *   **Perturbation:** Slightly perturb the points to break co-circularity.  This introduces a small amount of error but guarantees termination.
    *   **Deterministic Choice:**  Implement a deterministic rule to choose which edge to flip when multiple illegal edges exist.  This ensures the algorithm makes consistent choices and eventually terminates. Examples include:
        *   Lexicographic ordering: Always flip the illegal edge connecting vertices with the smallest IDs.
        *   Predefined tie-breaking rules based on geometric criteria.

**7. Important Points to Remember**

*   Lawson's flip algorithm is a simple and intuitive method for constructing Delaunay triangulations.
*   It relies on iteratively flipping illegal edges to improve the triangulation's quality.
*   The algorithm is guaranteed to terminate for points in general position.
*   Co-circular points can lead to non-termination and require special handling.
*   Worst-case time complexity is O(n^2), but the average-case performance is often much better.

**Practice Questions/Exercises:**

1.  **Definition:**  What is a Delaunay triangulation, and what is its key property?
    *   **Answer:** A Delaunay triangulation is a triangulation of a set of points such that no point in the set is inside the circumcircle of any triangle in the triangulation.  Its key property is maximizing the minimum angle of all angles in the triangles.

2.  **Legality Check:** Given four points A, B, C, and D forming a convex quadrilateral, and a triangulation with edge AB. How can you determine if edge AB is illegal?
    *   **Answer:** Check if point C lies inside the circumcircle of triangle ABD or if point D lies inside the circumcircle of triangle ABC. If either is true, edge AB is illegal.

3.  **Algorithm Steps:**  Describe the steps involved in Lawson's flip algorithm.
    *   **Answer:** (Refer to Algorithm Steps in section 4 above.)

4.  **Efficiency:**  What is the worst-case time complexity of Lawson's flip algorithm, and what factors can affect its efficiency in practice?
    *   **Answer:** The worst-case time complexity is O(n^2). Factors affecting efficiency include the quality of the initial triangulation and the order in which illegal edges are processed.

5.  **Co-circularity Problem:** Explain the problem of co-circular points in the context of Lawson's flip algorithm and suggest solutions.
    *   **Answer:** Co-circular points can lead to non-termination as the algorithm may oscillate between different valid triangulations. Solutions include perturbing the points or implementing deterministic tie-breaking rules for selecting which illegal edge to flip.

6. **Edge Flip Example:**  Draw a convex quadrilateral ABCD. Initially, the triangulation contains edge AC.  Assume B lies *inside* the circumcircle of triangle ACD.  Demonstrate the flip operation and label the new triangulation.
    * **Answer:** (Draw a diagram). Remove edge AC. Add edge BD.  The new triangles are ABD and BCD.  This is the result of the Lawson's flip.

7. **Legal Triangulation Example:** Create a small set of points (e.g., 4 or 5 points) where you can easily visualize the Delaunay triangulation. Manually create an initial triangulation and then apply Lawson's flip algorithm step-by-step to arrive at the Delaunay triangulation.
    * **Answer:** (Provide a set of points and show the steps of the flip algorithm with diagrams).
