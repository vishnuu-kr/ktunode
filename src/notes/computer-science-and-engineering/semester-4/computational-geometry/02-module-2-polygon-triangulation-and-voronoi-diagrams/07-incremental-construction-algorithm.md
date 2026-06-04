---
title: "Incremental construction algorithm"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 2: Polygon Triangulation and Voronoi Diagrams:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b237"
status: "completed"
scrapedAt: "2026-05-20T16:10:47.048Z"
---
# Computational Geometry: Module 2 - Polygon Triangulation and Voronoi Diagrams - Incremental Construction Algorithm

## 1. Introduction

This module focuses on the incremental construction algorithm, a fundamental technique used in computational geometry for building Voronoi diagrams. This algorithm builds the diagram step-by-step, adding one site (point, line, etc.) at a time and updating the diagram to reflect the new site's influence. This section covers the key concepts, definitions, advantages, and disadvantages of the incremental construction algorithm, focusing primarily on its application to Voronoi diagrams.

## 2. Learning Outcomes

Upon completion of this section, you should be able to:

*   Understand the basic principle of the incremental construction algorithm.
*   Describe how the Voronoi diagram is updated with each new site.
*   Identify the key operations involved in the incremental construction of Voronoi diagrams.
*   Explain the advantages and disadvantages of this algorithm.
*   Apply the algorithm to simple examples.

## 3. Key Concepts and Definitions

*   **Voronoi Diagram:** Given a set *S* of *n* sites in the plane, the Voronoi diagram partitions the plane into *n* regions, one for each site. Each region contains all points closer to its site than to any other site.
*   **Site:** An object (usually a point) that influences the partitioning of the plane in a Voronoi diagram.
*   **Voronoi Cell:** The region associated with a site in the Voronoi diagram.  It contains all points closer to that site than to any other site. Often denoted as V(s) for site s.
*   **Voronoi Edge:** A line segment separating two Voronoi cells. Points on a Voronoi edge are equidistant from the two sites whose cells it separates.
*   **Voronoi Vertex:** A point where three or more Voronoi edges meet.  It is equidistant from the three (or more) sites whose cells meet at that vertex.
*   **Incremental Construction:** A paradigm for building data structures by adding elements one at a time and updating the structure after each addition.
*   **Conflict Region:** The region in the current Voronoi diagram that will be affected by the insertion of a new site. It is the region consisting of cells closer to the new site than to their current sites.
*   **Convex Hull:** The smallest convex set that contains all the points in a given set.

## 4. The Incremental Construction Algorithm for Voronoi Diagrams

### 4.1 Algorithm Overview

The incremental construction algorithm builds the Voronoi diagram by adding sites one by one. For each new site:

1.  **Locate:** Find a Voronoi cell containing the new site.  This step identifies the cell that will be directly affected by the new site.
2.  **Determine the Conflict Region:** Identify the area that is closer to the new site than to any existing sites.
3.  **Update:** Remove the portions of existing Voronoi cells that are within the conflict region and create a new Voronoi cell for the newly added site.

### 4.2 Algorithm Steps in Detail

1.  **Initialization:**  Start with an initial Voronoi diagram, typically formed by three non-collinear sites enclosed in a sufficiently large bounding box.  This box is crucial for preventing infinite Voronoi cells, at least in the initial stages. These initial points can be "dummy" points placed far outside the region of interest.

2.  **Iteration:**  For each new site *s<sub>i</sub>*:

    a.  **Locate the Containing Cell:**  Find the Voronoi cell *V(s<sub>k</sub>)* that contains *s<sub>i</sub>*.  This can be done by point location in a planar subdivision (the current Voronoi diagram).  Various methods for point location exist, such as using a search tree or walking through the diagram.

    b.  **Determine the Conflict Region:**  The conflict region is the set of points closer to *s<sub>i</sub>* than to any existing site.  It's the union of cells affected by the insertion of *s<sub>i</sub>*.  This region is identified and delimited by edges that are part of the boundary of *V(s<sub>i</sub>)*.

    c.  **Update the Diagram:**

        i.  Trace the boundary of *V(s<sub>i</sub>)*. This boundary will intersect the edges of the existing Voronoi diagram.

        ii. Remove the portions of the Voronoi diagram that fall within *V(s<sub>i</sub>)*. This effectively carves out space for the new site's cell.

        iii.  Add the new Voronoi edges and vertices to the diagram. These new elements define the boundary of *V(s<sub>i</sub>)* and connect it to the remaining portions of the existing diagram.

        iv.  Update the data structure representing the Voronoi diagram to reflect these changes. This usually involves updating pointers and adjacency information.

3.  **Termination:** Once all sites have been processed, remove the bounding box and any associated edges and vertices to obtain the final Voronoi diagram.

### 4.3 Data Structures

Efficient data structures are essential for the performance of the incremental construction algorithm. Common choices include:

*   **Doubly Connected Edge List (DCEL):**  A common data structure for representing planar subdivisions, like Voronoi diagrams. It allows efficient traversal and modification of the diagram.
*   **Search Tree:** A hierarchical structure (like a binary search tree or a more advanced structure like a point location DAG) that facilitates efficient point location.

### 4.4 Example

Let's illustrate with a simple example.  Imagine we have three sites: A(1,1), B(4,1), and C(2,4).

1.  **Initialization:** Start with sites A and B. The Voronoi diagram consists of a single vertical line bisecting the segment AB at x=2.5.
2.  **Insert C:**
    *   **Locate:** C lies to the left of the bisector, in V(A).
    *   **Determine Conflict Region:** The conflict region is the set of points closer to C than to A or B.
    *   **Update:**
        *   The bisector between A and C, and the bisector between B and C, define the boundary of V(C).
        *   The intersection of the bisector A-B with the bisectors A-C and B-C define the vertices of the new Voronoi diagram.  Some of the previous Voronoi regions are now overwritten by the new region V(C).

### 4.5 Complexity Analysis

*   **Naive Implementation:** A naive implementation, without efficient point location, can have a time complexity of *O(n<sup>3</sup>)*.  Each insertion potentially requires checking all existing edges and vertices.
*   **Optimized Implementation:** Using efficient data structures for point location (e.g., a dynamic search tree), the expected time complexity can be reduced to *O(n log n)*. This is because point location and updating the diagram can be performed more efficiently. The space complexity is *O(n)*.

## 5. Advantages and Disadvantages

**Advantages:**

*   **Simplicity:**  The algorithm is relatively easy to understand and implement compared to some other Voronoi diagram construction algorithms.
*   **Dynamic:**  Allows for easy addition and deletion of sites, making it suitable for dynamic environments where the site configuration changes over time.
*   **Online Algorithm:** The algorithm can process sites as they become available, without needing to know all sites in advance.

**Disadvantages:**

*   **Degeneracy Issues:** Degenerate cases (e.g., four or more sites equidistant from a point) require special handling and can complicate the implementation.
*   **Point Location Overhead:** The efficiency of the algorithm heavily relies on the efficiency of the point location data structure.  Poor point location performance can significantly degrade the overall performance.
*   **Numeric Stability:** Requires careful attention to numerical precision, especially when dealing with floating-point arithmetic. Round-off errors can lead to incorrect Voronoi diagrams.

## 6. Important Points to Remember

*   The incremental construction algorithm adds sites one at a time, updating the Voronoi diagram after each addition.
*   Efficient point location is crucial for achieving good performance.
*   Degenerate cases require special handling.
*   Numeric stability is a concern due to floating-point arithmetic.
*   The algorithm is dynamic and online.
*   The DCEL is a common data structure used to store the Voronoi diagram.

## 7. Practice Questions and Exercises

**Question 1:**

Describe the conflict region in the incremental construction of a Voronoi diagram.

**Answer:**

The conflict region for a new site *s<sub>i</sub>* is the area in the current Voronoi diagram that is closer to *s<sub>i</sub>* than to any of the existing sites.  It represents the region where the existing cells will be overwritten by the new Voronoi cell *V(s<sub>i</sub>)*.

**Question 2:**

Explain why efficient point location is essential for the performance of the incremental construction algorithm.

**Answer:**

Efficient point location is crucial because it determines the starting point for updating the Voronoi diagram with a new site. Without efficient point location, the algorithm might have to search through the entire diagram to find the cell containing the new site, leading to a much higher time complexity.

**Question 3:**

Suppose you have a Voronoi diagram of three points A(0,0), B(2,0), and C(1,2).  Where would the next site D(1,1) fall?  What would happen to the existing Voronoi region boundaries?

**Answer:**

*   **Point Location:** D(1,1) lies within the Voronoi cell of C.  Therefore, it would fall into V(C).

*   **Effect on Boundaries:** The existing boundaries will be affected as follows:

    *   The bisector of C and D will define a new part of V(D)'s boundary, carving into V(C).
    *   The intersection points between the bisector of C and D, and the bisectors of A-C and B-C will define new Voronoi vertices.
    *   The portions of V(C) closer to D than to C will become part of V(D).

**Question 4:**

What are the advantages and disadvantages of using a DCEL data structure for storing the Voronoi diagram?

**Answer:**

*   **Advantages:** DCEL allows for efficient traversal of the Voronoi diagram, making it easy to find neighboring cells and update the diagram.  It explicitly stores the relationships between vertices, edges, and faces, making operations like finding the boundary of a cell simple.

*   **Disadvantages:** DCEL can be relatively complex to implement.  Updates to the diagram require careful management of pointers to ensure consistency.

**Question 5:**

Explain how the initial bounding box is removed from the Voronoi diagram at the end of the incremental construction process. What problem does the bounding box solve during construction?

**Answer:**

After all sites have been added, the bounding box and any edges and vertices associated with it are removed.  This involves:

1.  Identifying any Voronoi edges that intersect the bounding box.
2.  Removing these edges and any Voronoi vertices located on the bounding box.
3.  Adjusting the data structure (e.g., DCEL) to reflect the removal of these elements.

The bounding box solves the problem of unbounded Voronoi cells, especially at the beginning of the construction.  Without it, initial cells could extend to infinity, making it difficult to perform point location and other operations.  The bounding box effectively "clips" these infinite cells, providing a finite representation for the intermediate stages of the algorithm.
