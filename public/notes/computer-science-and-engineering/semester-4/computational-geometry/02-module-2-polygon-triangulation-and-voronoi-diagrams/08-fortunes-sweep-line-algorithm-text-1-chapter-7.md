---
title: "Fortune's sweep line algorithm (Text 1, Chapter 7)"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 2: Polygon Triangulation and Voronoi Diagrams:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b238"
status: "completed"
scrapedAt: "2026-05-20T16:10:47.763Z"
---
## Computational Geometry: Module 2 - Fortune's Sweep Line Algorithm

**Text 1, Chapter 7**

**Description:** This module delves into Fortune's sweep line algorithm for constructing Voronoi diagrams.

**Learning Outcomes:** Upon completion of this module, you will be able to:

*   Understand the concept of a Voronoi diagram.
*   Explain the principles behind Fortune's sweep line algorithm.
*   Describe the beach line and its role in the algorithm.
*   Identify the different event types in the algorithm and how they are handled.
*   Construct a Voronoi diagram using Fortune's algorithm.
*   Analyze the time and space complexity of Fortune's algorithm.

---

### 1. Introduction to Voronoi Diagrams

*   **Definition:** Given a set *S* of *n* distinct points (sites) in the plane, the Voronoi diagram of *S* is a partitioning of the plane into *n* regions, one for each site, such that a point *p* belongs to the Voronoi region of site *s* if and only if *s* is the closest site to *p*.

*   **Formal Definition:**
    *   Let *S* = {*s<sub>1</sub>, s<sub>2</sub>, ..., s<sub>n</sub>*} be a set of *n* distinct points (sites) in the plane.
    *   The Voronoi region *Vor(s<sub>i</sub>)* of site *s<sub>i</sub>* is defined as:

        *Vor(s<sub>i</sub>)* = {*p* ∈ ℝ<sup>2</sup> | *d(p, s<sub>i</sub>)* ≤ *d(p, s<sub>j</sub>)* for all *j* ≠ *i*},

        where *d(p, s<sub>i</sub>)* denotes the Euclidean distance between points *p* and *s<sub>i</sub>*.

    *   The Voronoi diagram *Vor(S)* of *S* is the union of the boundaries of these regions.

*   **Key Properties:**
    *   The boundary between two Voronoi regions *Vor(s<sub>i</sub>)* and *Vor(s<sub>j</sub>)* is a portion of the perpendicular bisector of the line segment connecting *s<sub>i</sub>* and *s<sub>j</sub>*.
    *   Voronoi edges are either line segments or rays.
    *   Voronoi vertices are points equidistant to three or more sites.  They are the centers of circles that pass through three or more sites, with no site contained within the circle.

*   **Applications:**
    *   Facility location problems
    *   Nearest neighbor search
    *   Pattern recognition
    *   Computer graphics
    *   Spatial analysis

### 2. Fortune's Sweep Line Algorithm

*   **Purpose:**  An efficient algorithm for constructing the Voronoi diagram of a set of points.  It achieves O(n log n) time complexity.

*   **Sweep Line Approach:**
    *   A horizontal line, called the *sweep line*, moves from top to bottom across the plane.
    *   The algorithm maintains the portion of the Voronoi diagram *above* the sweep line that is guaranteed to be correct.
    *   This is possible because points *below* the sweep line cannot influence the diagram *above* the sweep line (or the parts already calculated).

*   **Key Data Structures:**
    *   **Event Queue (Q):**  Stores future events, sorted by their y-coordinate.  These events trigger changes in the beach line. A priority queue (e.g., heap) is used to efficiently find the next event.
    *   **Beach Line (T):**  A dynamic structure that represents the Voronoi diagram for the sites above the sweep line. It consists of a sequence of parabolic arcs.  A balanced binary search tree (e.g., AVL tree or red-black tree) is used to represent the beach line.

### 3. The Beach Line

*   **Definition:**  The beach line is the lower envelope of the parabolas defined by the sites above the sweep line. For each site *s<sub>i</sub>* above the sweep line, there exists a parabola *p<sub>i</sub>* defined as the locus of points equidistant to *s<sub>i</sub>* and the sweep line.

*   **Properties:**
    *   The beach line consists of parabolic arcs.
    *   Each arc is defined by a single site.
    *   The points where two arcs intersect are equidistant to the corresponding two sites and the sweep line.  These intersection points trace out edges of the Voronoi diagram.
    *   The beach line changes as the sweep line moves down.

*   **Importance:** The beach line is the core of the algorithm, representing the "frontier" of the Voronoi diagram construction.  It implicitly stores information about the Voronoi edges being formed.

### 4. Event Types

Fortune's algorithm handles two main event types:

*   **Site Events:** Occur when the sweep line encounters a site.
    *   **Handling:**
        1.  A new parabola arc is inserted into the beach line, representing the new site.
        2.  The new arc splits an existing arc into two.
        3.  New circle events (see below) are potentially created where the new arc intersects its neighbors.
    *   **Example:**  Imagine the sweep line moves down and reaches a new site *s*.  The beach line now needs to represent points closer to *s* than to any other site *above* the sweep line. This creates a new parabolic arc corresponding to *s*.

*   **Circle Events (also called Vertex Events):** Occur when three arcs on the beach line converge to a point, indicating a Voronoi vertex.
    *   **Handling:**
        1.  The arc in the middle of the three arcs disappears from the beach line (it is swallowed by the converging parabolas).
        2.  A Voronoi vertex is created at the point of convergence.
        3.  A Voronoi edge is created connecting the new vertex to the intersection point that was the circle event.
        4.  New circle events may be created or deleted involving neighboring arcs of the disappearing arc.
    *   **Detection:** A circle event is predicted based on three consecutive arcs on the beach line.  The center of the circle passing through the three sites defining these arcs must lie below the sweep line *and* the lowest point of the circle must be below the sweep line.  If this condition is met, a circle event is scheduled.
    *   **False Positives:** Not all predicted circle events actually occur. The beach line might change before the sweep line reaches the predicted event, making it invalid. This is why the event queue needs to be updated when the beach line changes.

### 5. Algorithm Pseudocode

```
Algorithm Fortune's_Algorithm(S)
    // S: Set of n sites

    Initialize Event Queue Q with all sites in S, sorted by y-coordinate (highest to lowest)
    Initialize Beach Line T to be empty

    While Q is not empty do
        event = Q.remove_min()

        if event is a Site Event then
            Handle_Site_Event(event.site, Q, T)
        else if event is a Circle Event then
            if event is still valid (i.e., arc still exists on T) then
                Handle_Circle_Event(event, Q, T)
    End While

    // Convert Beach Line T to Voronoi Diagram representation
    Return Voronoi Diagram
End Algorithm

Algorithm Handle_Site_Event(s, Q, T)
    // s: New site
    // Q: Event Queue
    // T: Beach Line

    if T is empty then
        T.insert(new arc for s)  // Beach line now consists of one parabola arc
        return

    Find the arc α on T vertically above s
    Break arc α into three arcs: α_left, new arc for s, α_right
    Create a Voronoi edge between s and the site associated with α
    Check for circle events:
        - between α_left, s, and the neighbor to the left of α_left
        - between α_right, s, and the neighbor to the right of α_right
    Insert these potential circle events into Q (if valid)
End Algorithm

Algorithm Handle_Circle_Event(event, Q, T)
    // event: Circle event
    // Q: Event Queue
    // T: Beach Line

    Delete the arc α associated with the circle event from T
    Create a Voronoi vertex at the center of the circle
    Create Voronoi edges connecting the vertex to the sites associated with the arcs adjacent to α
    Delete any invalidated circle events from Q associated with α
    Check for new circle events involving the neighbors of α on T
    Insert these potential circle events into Q (if valid)
End Algorithm
```

### 6. Time and Space Complexity

*   **Time Complexity:** O(n log n)
    *   Sorting the site events: O(n log n)
    *   Each event (site or circle) takes O(log n) time to process (due to operations on the event queue and beach line).
    *   There are at most O(n) events.
*   **Space Complexity:** O(n)
    *   The beach line contains at most O(n) arcs.
    *   The event queue contains at most O(n) events.
    *   The Voronoi diagram itself has O(n) edges and vertices.

### 7. Important Points to Remember

*   Fortune's algorithm is an incremental algorithm, building the Voronoi diagram as the sweep line moves.
*   The beach line is a crucial data structure representing the Voronoi diagram above the sweep line.
*   Understanding the two event types (site and circle) and how they are handled is essential.
*   The algorithm involves careful handling of the event queue to ensure correctness and efficiency.
*   Circle events are predicted, but not all predictions are valid, so validation is required.

### 8. Practice Questions and Exercises

**Question 1:** Describe the key difference between a site event and a circle event in Fortune's algorithm.

**Answer:** A site event occurs when the sweep line encounters a new site, leading to the insertion of a new parabolic arc into the beach line. A circle event occurs when three arcs on the beach line converge, indicating a Voronoi vertex and the disappearance of the middle arc.

**Question 2:** What data structure is commonly used to implement the beach line, and why?

**Answer:** A balanced binary search tree (e.g., AVL tree or red-black tree) is commonly used to implement the beach line because it allows for efficient searching, insertion, and deletion of arcs in O(log n) time, which is crucial for the algorithm's overall performance.

**Question 3:**  Why is it necessary to validate circle events before processing them in Fortune's algorithm?

**Answer:** Circle events are predicted based on the current state of the beach line. However, the beach line can change before the sweep line reaches the predicted circle event, making the event invalid. Validation ensures that the arc associated with the event still exists and that the geometric conditions for the event are still met. If the arc has disappeared due to a prior event, the circle event is discarded.

**Question 4:**  Given a set of three sites *A*, *B*, and *C*, and the sweep line is at y = 0, sketch the initial beach line structure when site A is encountered at (0,2), B is encountered at (1,1), and C is encountered at (2,3).  Which event(s) would be added to the event queue?

**Answer:**

*   **Site A Event:**  The beach line initially contains only the parabola for A. The event queue will contain potential circle events for points close to each other.
*   **Site B Event:**  The parabola for B is inserted into the beach line splitting the arc for A. A Voronoi edge segment now exists between A and B. Two *potential* circle events are added to the event queue: one involving the arcs for A, B, and A (the original A arc split into two), and another involving B and the "infinite" sides of the region.
*   **Site C Event:** The parabola for C is inserted.
*   **The Event Queue:** Would need to check for circle events among the arcs adjacent to C when it's added. Depending on the locations the specific circle events would need to be calculated.

**Question 5:** What is the space complexity of Fortune's algorithm? Explain your answer.

**Answer:** The space complexity of Fortune's algorithm is O(n), where n is the number of sites.  This is because:

*   The beach line stores O(n) arcs at most.
*   The event queue stores O(n) events at most.
*   The final Voronoi diagram consists of O(n) edges and vertices.  Therefore the total memory used will be proportional to *n*.

---

These notes provide a comprehensive overview of Fortune's sweep line algorithm for constructing Voronoi diagrams.  Understanding the concepts presented here will allow you to analyze and apply the algorithm to solve various computational geometry problems. Remember to practice constructing Voronoi diagrams using the algorithm to solidify your understanding.
