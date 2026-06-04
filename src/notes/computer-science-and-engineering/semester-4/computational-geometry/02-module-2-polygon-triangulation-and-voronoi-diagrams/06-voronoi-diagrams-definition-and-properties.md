---
title: "Voronoi Diagrams  - Definition and properties"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 2: Polygon Triangulation and Voronoi Diagrams:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b236"
status: "completed"
scrapedAt: "2026-05-20T16:10:46.335Z"
---
## Computational Geometry: Module 2 - Voronoi Diagrams: Definition and Properties

These notes cover the definition and properties of Voronoi Diagrams, a key topic within Computational Geometry.

**Learning Outcomes:**

*   Understand the definition of a Voronoi Diagram.
*   Identify and explain the key properties of Voronoi Diagrams.
*   Describe the elements (vertices, edges, regions) of a Voronoi Diagram.
*   Relate Voronoi Diagrams to the closest-point problem.
*   Understand the concept of the Delaunay triangulation as the dual graph of the Voronoi Diagram.
*   Analyze examples of Voronoi Diagrams in various applications.

**1. Definition of a Voronoi Diagram**

*   **What is a Voronoi Diagram?** A Voronoi Diagram is a partitioning of a plane (or more generally, a metric space) into regions based on distance to points in a specific subset of the plane (called *sites*).  For each site, there is a corresponding *Voronoi cell* consisting of all points in the plane closer to that site than to any other.

*   **Sites (Generators):** The given set of points around which the Voronoi Diagram is constructed.  Sites are typically denoted as S = {s1, s2, ..., sn}, where 'n' is the number of sites.

*   **Voronoi Cell (Region):** The region associated with a specific site 'si' consists of all points 'p' in the plane such that the distance between 'p' and 'si' is less than or equal to the distance between 'p' and any other site 'sj' (where i ≠ j). Mathematically:

    Vor(si) = {p ∈ ℝ² | d(p, si) ≤ d(p, sj) for all j ≠ i}

    where d(p, si) represents the Euclidean distance (usually) between point p and site si.

*   **Voronoi Edge:**  A boundary segment between two Voronoi cells. A point on a Voronoi edge is equidistant from the two sites defining those cells.  Voronoi edges are portions of the perpendicular bisectors between pairs of sites.

*   **Voronoi Vertex:** A point where three or more Voronoi edges meet. A Voronoi vertex is equidistant from the three or more sites whose Voronoi cells meet at that vertex. A Voronoi vertex is the circumcenter of the sites generating the meeting Voronoi cells.

**2. Key Properties of Voronoi Diagrams**

*   **Completeness:** Every point in the plane belongs to at least one Voronoi cell.

*   **Uniqueness:**  (Assuming no two sites are at the same location) For a given set of distinct sites, the Voronoi diagram is unique.

*   **Convexity:** Each Voronoi cell is a convex polygon. This is because the region is defined by the intersection of half-planes (the half-planes defined by the perpendicular bisectors).

*   **Connectivity:** The Voronoi cells are connected.

*   **Bounded vs. Unbounded Cells:**  Voronoi cells can be bounded (finite area) or unbounded (infinite area).  A cell is unbounded if the corresponding site lies on the convex hull of all sites.

*   **Nearest Neighbor:** A query to find the nearest neighbor of a point 'q' can be answered in O(log n) time after constructing the Voronoi Diagram, where 'n' is the number of sites.

*   **Complexity:** For 'n' sites in the plane, the Voronoi Diagram has at most 2n - 5 vertices and 3n - 6 edges.  Therefore, its space complexity is O(n).

*   **Empty Circle Property:** A Voronoi vertex 'v' is the center of a circle that passes through the sites whose Voronoi cells meet at 'v', and this circle contains no other site in its interior.

**3. Elements of a Voronoi Diagram**

*   **Voronoi Regions (Cells):** Represented by polygons.  Defined by the set of points closer to a specific site than to any other.

*   **Voronoi Edges:** Portions of the perpendicular bisectors between pairs of sites whose Voronoi regions are adjacent. They are line segments or rays.

*   **Voronoi Vertices:** Points where three or more Voronoi edges meet. They are equidistant from the sites of the adjacent regions.

**4. Voronoi Diagrams and the Closest-Point Problem**

*   The Voronoi Diagram directly solves the *closest-point problem*. Given a point 'q' in the plane, finding the Voronoi cell in which 'q' lies immediately identifies the nearest site to 'q'. This is a powerful application in various fields.

*   **Applications:**  Location-based services, pattern recognition, facility location, and many more utilize the closest-point functionality.

**5. Delaunay Triangulation - The Dual Graph**

*   **Definition:** The Delaunay triangulation for a set of points is a triangulation of those points such that no point is inside the circumcircle of any triangle.

*   **Duality:** The Delaunay triangulation is the *dual graph* of the Voronoi Diagram.  This means:

    *   For every Voronoi cell, there is a corresponding vertex in the Delaunay triangulation (the site itself).
    *   For every Voronoi edge shared by two Voronoi cells, there is an edge in the Delaunay triangulation connecting the corresponding sites.
    *   For every Voronoi vertex where three Voronoi cells meet, there is a triangle in the Delaunay triangulation connecting the three corresponding sites.

*   **Significance:** The Delaunay triangulation provides a convenient way to represent adjacency information between the sites and often satisfies the *empty circle property*.

*   **Algorithm connection:**  Algorithms for computing the Voronoi Diagram and Delaunay triangulation are often interconnected.  For example, Fortune's algorithm can compute the Voronoi diagram, and the Delaunay triangulation can then be derived from the diagram's structure.

**6. Examples of Voronoi Diagrams in Applications**

*   **Facility Location:**  Determining the optimal location for a new facility (e.g., hospital, school) to minimize the maximum distance to the population it serves. The Voronoi diagram can identify areas that are furthest from existing facilities.

*   **Image Segmentation:** Partitioning an image into regions based on color or texture similarity. Voronoi diagrams can be used to cluster pixels based on their proximity to certain color or texture centers.

*   **Wireless Communication:**  Assigning base stations to users in a cellular network to maximize signal strength. The Voronoi diagram can define the service area of each base station.

*   **Ecology:** Modeling competition between plants for resources (e.g., sunlight, water). Each plant can be represented as a site, and its Voronoi cell represents the area from which it obtains resources.

*   **Path Planning:** Finding collision-free paths for robots. The Voronoi diagram can be used to create a roadmap of safe passages between obstacles.

**Important Points to Remember:**

*   Voronoi Diagrams partition space based on proximity to sites.
*   Each Voronoi cell is convex.
*   The Delaunay triangulation is the dual graph of the Voronoi Diagram.
*   Voronoi Diagrams are used in a wide range of applications.
*   The complexity of a Voronoi Diagram for n sites is O(n).

**Practice Questions/Exercises:**

1.  **Question:** Given three sites: A(1,1), B(4,1), and C(2,4), sketch the Voronoi Diagram.  Identify the Voronoi edges and vertices.  What are the coordinates of the Voronoi vertex?

    **Answer:**
    *   **Voronoi Edges:** Perpendicular bisectors of AB, AC, and BC.
    *   **Voronoi Vertex:**  The perpendicular bisector of AB is x = 2.5. The perpendicular bisector of AC has the equation y = x + 0.5. The intersection of these is (2.5, 3). This point is equidistant from A, B and C.
    *   **Sketch:** Draw the three points.  Draw the perpendicular bisectors between each pair of points. The Voronoi edges are the segments of these bisectors that form the boundaries of the Voronoi cells. The Voronoi vertex is where the three perpendicular bisectors intersect.

2.  **Question:** Explain the relationship between the Voronoi Diagram and the closest-point problem.

    **Answer:** The Voronoi Diagram directly provides the solution to the closest-point problem. Given any point in the plane, the Voronoi cell in which it lies identifies the nearest site to that point.

3.  **Question:** What is the dual graph of the Voronoi Diagram, and what properties does it have?

    **Answer:** The dual graph of the Voronoi Diagram is the Delaunay triangulation. Key properties include:
        *   It is a triangulation of the sites.
        *   No site lies inside the circumcircle of any triangle.
        *   Edges connect sites whose Voronoi regions are adjacent.

4.  **Question:**  How many vertices and edges does a Voronoi Diagram have for 5 sites in general position (no three sites are collinear and no four are co-circular)?

    **Answer:**  At most 2n - 5 vertices and 3n - 6 edges.  For n = 5, this means at most 2(5) - 5 = 5 vertices, and 3(5) - 6 = 9 edges.

5.  **Question:**  Explain why each Voronoi cell is convex.

    **Answer:**  A Voronoi cell is defined as the intersection of half-planes, where each half-plane is defined by the perpendicular bisector between the cell's site and another site.  The intersection of convex sets (and half-planes are convex sets) is always convex. Therefore, each Voronoi cell is convex.
