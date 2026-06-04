---
title: "Relationship with Voronoi diagrams"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 2: Polygon Triangulation and Voronoi Diagrams:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b23a"
status: "completed"
scrapedAt: "2026-05-20T16:10:49.184Z"
---
# Computational Geometry: Module 2 - Polygon Triangulation and Voronoi Diagrams: Relationship with Voronoi Diagrams

These notes cover the relationship between polygon triangulation and Voronoi diagrams.

**Learning Outcomes:**

*   Understand the duality between Voronoi diagrams and Delaunay triangulations.
*   Explain how Voronoi diagrams can aid in polygon triangulation and vice versa.
*   Describe applications where understanding this relationship is beneficial.
*   Explain how the circumcircle property connects Voronoi diagrams and Delaunay triangulations.

## 1. Key Concepts and Definitions

*   **Polygon Triangulation:** The decomposition of a polygon into a set of non-overlapping triangles.  It's often required that only vertices of the original polygon are used as vertices for the triangles.
*   **Voronoi Diagram:** A partition of a plane into regions (Voronoi cells) based on distance to a set of points (sites).  For each site, its Voronoi cell contains all points in the plane closer to that site than to any other site.
*   **Delaunay Triangulation:**  For a set of points, a triangulation such that no point lies inside the circumcircle of any triangle in the triangulation.  The Delaunay triangulation is the dual graph of the Voronoi diagram.
*   **Duality:** A relationship between two geometric structures where one can be derived from the other.  The Voronoi diagram and Delaunay triangulation exhibit duality.
*   **Dual Graph:** A graph representation of a planar graph where each region (face) in the original graph corresponds to a vertex in the dual graph, and two vertices in the dual graph are connected by an edge if their corresponding regions in the original graph share an edge.
*   **Site:**  A point in the plane from which distances are calculated in constructing a Voronoi diagram.
*   **Voronoi Cell:** The region of the plane closest to a particular site in a Voronoi diagram.
*   **Voronoi Edge:** The line segment separating two Voronoi cells. Points on a Voronoi edge are equidistant from the two sites whose cells it separates.
*   **Voronoi Vertex:** The intersection of Voronoi edges. It's equidistant from three (or more, in degenerate cases) sites.
*   **Circumcircle:** The circle that passes through all three vertices of a triangle.
*   **Circumcenter:** The center of the circumcircle.  It's the point equidistant from the three vertices of the triangle.

## 2. Duality Between Voronoi Diagrams and Delaunay Triangulations

*   **Fundamental Relationship:** The Delaunay triangulation is the *dual* of the Voronoi diagram. This means there's a direct correspondence between the structures.
*   **Vertex Correspondence:**  Each site (point) in the Delaunay triangulation corresponds to a Voronoi cell in the Voronoi diagram.
*   **Edge Correspondence:**  If two sites *p* and *q* are adjacent in the Delaunay triangulation (i.e., there's an edge between them), then their corresponding Voronoi cells share an edge. This Voronoi edge is a segment of the perpendicular bisector of the segment *pq*.
*   **Triangle Correspondence:** Each Voronoi vertex corresponds to a triangle in the Delaunay triangulation. The three sites defining that triangle are the closest sites to that Voronoi vertex (they are equidistant from the vertex). The circumcenter of the Delaunay triangle *is* the corresponding Voronoi vertex.

**Example:**

Imagine three points A, B, and C in the plane.

*   **Delaunay Triangulation:** Connect A, B, and C with edges to form a triangle ABC.
*   **Voronoi Diagram:**  Construct the perpendicular bisectors of AB, BC, and CA. These bisectors intersect at a single point, the circumcenter of triangle ABC. This point is a Voronoi vertex. The segments of the perpendicular bisectors closest to each site form the Voronoi diagram. The cell of A contains all points closer to A than to B or C, and similarly for B and C.

## 3. How Voronoi Diagrams Aid in Polygon Triangulation and Vice Versa

While not directly *used* to perform triangulation algorithms, understanding the Voronoi diagram can *inform* or *validate* triangulation efforts, and the concepts are tightly intertwined.

*   **Validating Triangulations:**  The Delaunay property (no point inside any circumcircle) can be used to check the validity of a triangulation. If a triangulation isn't Delaunay, you know it's not optimal in certain senses (e.g., it can be improved by edge flips).  The Voronoi diagram provides a visual and computational way to assess this property.

*   **Constrained Delaunay Triangulation:**  If you want to triangulate a polygon with constraints (e.g., specific edges *must* be included), you can use a constrained Delaunay triangulation.  This technique leverages Voronoi diagram concepts.

*   **Mesh Generation:** Voronoi diagrams (and their dual Delaunay triangulations) are fundamental for mesh generation, a crucial step in many scientific and engineering simulations (Finite Element Analysis, etc.).

*   **Point Location:** Voronoi diagrams are used for efficient point location. If you know which Voronoi cell a point lies within, you know the nearest site to that point.  Point location can be a component in polygon triangulation algorithms, particularly those involving inserting points into existing triangulations.

## 4. Applications

Understanding the relationship between Voronoi diagrams and Delaunay triangulations is beneficial in various applications:

*   **Nearest Neighbor Search:** Find the closest point in a set to a given query point. This uses the Voronoi diagram structure.
*   **Path Planning:**  In robotics, the Voronoi diagram can be used to find paths that maximize the distance from obstacles.
*   **Computer Graphics:**  Mesh generation for 3D models, terrain modeling.
*   **GIS (Geographic Information Systems):** Analyzing spatial data, proximity analysis (e.g., which hospital is closest to a given location).
*   **Computational Fluid Dynamics:** Mesh generation for simulations.
*   **Wireless Communication:**  Determining optimal locations for base stations to minimize interference (using Voronoi cells to represent coverage areas).

## 5. The Circumcircle Property

*   **Key Connection:** The circumcircle property is the heart of the connection between Voronoi diagrams and Delaunay triangulations.
*   **Delaunay Condition:** A triangulation is Delaunay if and only if the circumcircle of each triangle in the triangulation does not contain any other points (sites) from the set in its interior.
*   **Voronoi Interpretation:** The circumcenter of each Delaunay triangle is a Voronoi vertex.  Since no other site is inside the circumcircle, this point is equidistant from only the three vertices of the triangle and closer to them than any other site. This is precisely what defines a Voronoi vertex.
*   **Edge Flipping:** If a triangulation is *not* Delaunay, it can often be improved by *edge flipping*. This involves removing an edge between two triangles and replacing it with the other diagonal. This operation moves the triangulation closer to being Delaunay. The circumcircle test is used to determine if an edge flip will improve the triangulation.

**Example:**

Consider four points A, B, C, and D. Suppose we have a triangulation containing triangles ABC and ADC sharing the edge AC.

1.  Calculate the circumcircle of triangle ABC.
2.  Calculate the circumcircle of triangle ADC.
3.  If point D lies inside the circumcircle of ABC, OR point B lies inside the circumcircle of ADC, then the edge AC is *not* Delaunay.
4.  We can improve the triangulation by *flipping* the edge AC to the edge BD, creating triangles ABD and BCD. This new triangulation may now be Delaunay (recheck the circumcircle property).

## 6. Practice Questions and Exercises

**Question 1:**

Given a set of points in the plane, explain how you would construct the Delaunay triangulation if you already have the Voronoi diagram.

**Answer:**

1.  For each Voronoi cell in the Voronoi diagram, identify the corresponding site (point).
2.  For each pair of adjacent Voronoi cells (cells sharing a Voronoi edge), connect their corresponding sites with an edge in the Delaunay triangulation.

**Question 2:**

True or False: A Voronoi vertex is always equidistant from exactly three sites.

**Answer:**

False. While this is the most common case, in degenerate cases (e.g., four points lying on a circle), a Voronoi vertex can be equidistant from more than three sites.

**Question 3:**

Explain how the circumcircle property is used to determine if a triangulation is Delaunay.

**Answer:**

A triangulation is Delaunay if and only if, for every triangle in the triangulation, the circumcircle of that triangle does not contain any other points (sites) in its interior. If any triangle has a point inside its circumcircle, the triangulation is not Delaunay.

**Question 4:**

Consider four points A(0,0), B(1,0), C(0,1), and D(1,1). Sketch the Voronoi diagram and the Delaunay triangulation.

**Answer:**

*   **Delaunay Triangulation:** Draw two triangles, ABC and BCD. This forms the Delaunay triangulation. The edge BD could also be swapped with AC (forming triangles ABD and ADC), which would also result in a valid Delaunay triangulation in this case because all four points form a square, and both diagonals are equally valid.

*   **Voronoi Diagram:** The Voronoi diagram consists of four square cells, one surrounding each point, whose boundaries are the perpendicular bisectors of each edge in the triangulation. The Voronoi vertices meet at the center point (0.5,0.5) which is equidistant from all 4 points.

**Question 5:**

Describe a real-world application where understanding the duality between Voronoi diagrams and Delaunay triangulations is crucial.

**Answer:**

**Wireless Communication Network Design:**  Imagine placing cell towers to provide wireless coverage.  We want to minimize interference and ensure good coverage.

*   We can represent potential cell tower locations as sites.
*   The Voronoi diagram shows the coverage area for each cell tower (the area closest to that tower).  This helps visualize coverage gaps.
*   The Delaunay triangulation connects nearby cell towers. This is useful for determining handover regions (where a device switches from one tower to another) and for optimizing signal strength.
*   By understanding this duality, engineers can strategically position towers to maximize coverage, minimize interference, and optimize network performance.

## 7. Important Points to Remember

*   The Delaunay triangulation is the *dual* of the Voronoi diagram.
*   Circumcircles and circumcenters are key to understanding the relationship.
*   The Delaunay triangulation maximizes the minimum angle in the triangulation, making it useful for certain applications.
*   Edge flipping is a technique used to improve triangulations towards the Delaunay property.
*   While not a direct algorithmic replacement, the conceptual link allows for better validation, analysis, and related algorithm selection.
