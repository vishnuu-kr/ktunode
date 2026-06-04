---
title: "Delaunay Triangulations  - Definition and properties"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 2: Polygon Triangulation and Voronoi Diagrams:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b239"
status: "completed"
scrapedAt: "2026-05-20T16:10:48.472Z"
---
# Computational Geometry: Delaunay Triangulations - Definition and Properties (Module 2)

## Learning Outcomes

By the end of this study module, you should be able to:

*   Understand the definition of a Delaunay Triangulation.
*   Describe and explain the key properties of a Delaunay Triangulation.
*   Relate Delaunay Triangulations to Voronoi Diagrams.
*   Identify and apply the empty circle property (Delaunay condition).
*   Understand the connection between Delaunay Triangulation and Maximizing the Minimum Angle.
*   Describe the flipping algorithm for generating Delaunay Triangulations.

## 1. Definition of Delaunay Triangulation

*   **What is a Triangulation?**
    *   Given a set of points *S* in the plane, a triangulation is a maximal planar subdivision whose vertices are the points in *S*.
    *   "Maximal" means that you cannot add any more edges without crossing existing edges.  In other words, every face is a triangle.
    *   The outer face is unbounded.

*   **Delaunay Triangulation Definition:**
    *   A Delaunay Triangulation (DT) of a set of points *S* in the plane is a triangulation where no point in *S* lies inside the circumcircle of any triangle in the triangulation.  This is also known as the **empty circle property** or **Delaunay condition**.
    *   Formally: For every triangle *ABC* in the Delaunay Triangulation, the circumcircle defined by *A*, *B*, and *C* does not contain any other point of *S* in its interior.

*   **Uniqueness:**
    *   If the points in *S* are in general position (no four points are co-circular), then the Delaunay Triangulation is unique.
    *   If four or more points are co-circular, the Delaunay Triangulation is not unique, but it *is* unique up to "flips" of the edges.

## 2. Key Properties of Delaunay Triangulations

*   **Empty Circle Property (Delaunay Condition):**  As defined above, this is the defining property.  No point lies inside the circumcircle of any triangle.

*   **Maximizing the Minimum Angle:** Among all possible triangulations of a point set, the Delaunay Triangulation maximizes the smallest angle. This means the angles in the triangles tend to be "rounder" and avoid skinny triangles.  This is beneficial in many applications because skinny triangles can lead to numerical instability.
    *   The *angle vector* of a triangulation is a vector of all the angles sorted in increasing order.  A Delaunay triangulation has a lexicographically largest angle vector.

*   **Closest Point Property:**  For any point *p* in *S*, its nearest neighbor is one of the vertices connected to *p* in the Delaunay Triangulation. (This isn't necessarily true for *all* triangulations).

*   **Connection to Voronoi Diagrams:** The Delaunay Triangulation is the *dual* of the Voronoi Diagram. An edge connects two points *p* and *q* in the Delaunay Triangulation if and only if their Voronoi cells share an edge. This duality provides a strong link between these two important structures in computational geometry.

*   **Convex Hull Property:** The outer boundary of the Delaunay Triangulation forms the convex hull of the point set *S*.

## 3. Relationship to Voronoi Diagrams

*   **Duality:** As mentioned above, the Delaunay Triangulation and the Voronoi Diagram are dual graphs.

*   **Construction:**  Given a Voronoi Diagram, its Delaunay Triangulation can be constructed by connecting the sites whose Voronoi cells share an edge. Conversely, given a Delaunay Triangulation, the Voronoi Diagram can be constructed by placing the Voronoi vertices at the circumcenters of the Delaunay triangles.

*   **Significance:** This duality provides a powerful way to convert between the two structures. Algorithms for computing one can often be adapted to compute the other.

## 4. Identifying and Applying the Empty Circle Property

*   **Testing for the Delaunay Condition:**  Given a triangle *ABC* and a point *p*, you can test if *p* violates the Delaunay condition for *ABC* by checking if *p* lies inside the circumcircle of *ABC*.

*   **In-Circle Test:**  This test can be performed algebraically using the determinant of a matrix formed from the coordinates of the points *A*, *B*, *C*, and *p*.  The sign of the determinant indicates whether *p* lies inside, outside, or on the circumcircle.

    *   Let *A* = (x<sub>A</sub>, y<sub>A</sub>), *B* = (x<sub>B</sub>, y<sub>B</sub>), *C* = (x<sub>C</sub>, y<sub>C</sub>), and *p* = (x<sub>p</sub>, y<sub>p</sub>). The in-circle test can be computed as:

    ```
    | x_A   y_A   x_A^2 + y_A^2  1 |
    | x_B   y_B   x_B^2 + y_B^2  1 |
    | x_C   y_C   x_C^2 + y_C^2  1 |
    | x_p   y_p   x_p^2 + y_p^2  1 |
    ```

    *   If the determinant is positive, *p* is inside the circumcircle.
    *   If the determinant is negative, *p* is outside the circumcircle.
    *   If the determinant is zero, *p* lies on the circumcircle.

*   **Example:** Suppose you have points A(0,0), B(1,0), C(0,1), and p(0.5, 0.5). Let's determine if p is inside the circumcircle defined by A, B, and C. The circumcircle for A, B, C has a center at (0.5, 0.5) and a radius of approximately 0.707. Since p(0.5, 0.5) *is* the circumcenter, the in-circle test determinant would be zero, implying the point lies *on* the circle and therefore doesn't violate the Delaunay Condition.

## 5. Flipping Algorithm for Generating Delaunay Triangulations

*   **Basic Idea:** Start with any triangulation and iteratively "flip" edges that violate the Delaunay condition.  This process continues until no more edges can be flipped.

*   **Edge Flipping:**  Consider two adjacent triangles *ABC* and *ADC* sharing edge *AC*. If point *D* lies inside the circumcircle of triangle *ABC*, then the edge *AC* is not a Delaunay edge. We can "flip" the edge *AC* to *BD*.

*   **Algorithm:**
    1.  Create an arbitrary triangulation of the point set.
    2.  While there exists an edge that violates the Delaunay condition:
        *   Find an edge *AC* such that *D* lies inside the circumcircle of *ABC* (or *B* lies inside the circumcircle of *ADC*).
        *   Remove edge *AC* and add edge *BD*.
    3.  Return the triangulation.

*   **Termination:** The flipping algorithm is guaranteed to terminate because each flip increases the minimum angle in the triangulation. The number of possible triangulations is finite, and each flip makes progress, so the algorithm must terminate.

*   **Important Notes:**
    *   The order in which edges are checked and flipped can affect the efficiency of the algorithm.
    *   While conceptually simple, handling boundary cases and ensuring robustness can be tricky in a practical implementation.

## 6. Maximizing the Minimum Angle

*   **Connection:** The Delaunay Triangulation maximizes the minimum angle among all possible triangulations.

*   **Implications:**  This property is important in applications where minimizing skinny triangles is crucial, such as:
    *   Finite element analysis: Skinny triangles can lead to inaccurate results.
    *   Surface reconstruction:  Well-shaped triangles improve the quality of the reconstructed surface.

*   **Angle Vector:**
    *   The angle vector of a triangulation is a vector containing all the angles in the triangulation, sorted in ascending order.
    *   A Delaunay Triangulation has the lexicographically largest angle vector.  This means that if you compare the angle vectors of a Delaunay Triangulation and any other triangulation of the same point set, the Delaunay Triangulation's angle vector will be greater in the lexicographical ordering.

## Important Points to Remember

*   The empty circle property is the defining characteristic of a Delaunay Triangulation.
*   The Delaunay Triangulation is the dual of the Voronoi Diagram.
*   The Delaunay Triangulation maximizes the minimum angle.
*   The flipping algorithm provides a simple (though not necessarily the most efficient) way to construct a Delaunay Triangulation.
*   The Delaunay Triangulation is unique if no four or more points are co-circular.

## Practice Questions and Exercises

**1. True or False:**  A Delaunay Triangulation always minimizes the maximum angle in a triangulation.

*   **Answer:** False.  It maximizes the *minimum* angle.

**2. Explain the relationship between a Delaunay Triangulation and a Voronoi Diagram. How can you construct one from the other?**

*   **Answer:**  The Delaunay Triangulation and the Voronoi Diagram are dual graphs. Given a Voronoi Diagram, its Delaunay Triangulation can be constructed by connecting the sites whose Voronoi cells share an edge.  Conversely, given a Delaunay Triangulation, the Voronoi Diagram can be constructed by placing Voronoi vertices at the circumcenters of the Delaunay triangles and drawing perpendicular bisectors of the Delaunay edges.

**3. Describe the empty circle property. How is it used to determine if a triangulation is a Delaunay Triangulation?**

*   **Answer:**  The empty circle property states that for every triangle in the Delaunay Triangulation, no other point in the input set lies inside its circumcircle. This property is used to verify if a triangulation is Delaunay by checking each triangle and ensuring that no other point lies within its circumcircle. If a point is found inside a circumcircle, the triangulation is not a Delaunay Triangulation.

**4. Given the points A(1,1), B(4,1), C(3,3), and D(2,2), determine if the edge AC violates the Delaunay Condition. (Hint: check if D lies inside the circumcircle of triangle ABC).**

*   **Answer:**
    *   First, find the circumcircle of triangle ABC. The circumcenter is (2.5, 2) and the radius squared is 2.25 + 1 = 3.25. The squared distance from the circumcenter to D(2,2) is (2.5-2)^2 + (2-2)^2 = 0.25.
    *   Since 0.25 < 3.25, D lies inside the circumcircle of triangle ABC.
    *   Therefore, the edge AC violates the Delaunay condition.

**5. Explain the basic idea behind the flipping algorithm for constructing a Delaunay Triangulation.**

*   **Answer:** The flipping algorithm starts with an arbitrary triangulation of the point set. It iteratively checks edges for violations of the Delaunay condition (using the empty circle property).  If an edge violates the condition, it is "flipped" (replaced with the opposite diagonal of the quadrilateral formed by the two adjacent triangles sharing the edge). This process continues until no more edges can be flipped, resulting in a Delaunay Triangulation.

**6. What are the advantages of using a Delaunay triangulation compared to other triangulations in applications like finite element analysis?**

*   **Answer:** Delaunay triangulations maximize the minimum angle, which means they tend to avoid skinny triangles. Skinny triangles can lead to numerical instability and inaccurate results in finite element analysis. Using a Delaunay triangulation helps ensure that the elements are well-shaped and that the simulation produces more reliable results.

This comprehensive set of notes, with definitions, explanations, examples, and practice questions, should provide a solid foundation for understanding Delaunay Triangulations and their properties within the context of computational geometry.  Remember to practice applying these concepts to different scenarios to solidify your understanding.
