---
title: "Trapezoidal map and randomized incremental algorithm"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 3: Range Searching and Point Location :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b244"
status: "completed"
scrapedAt: "2026-05-20T16:10:55.661Z"
---
## Computational Geometry: Trapezoidal Map and Randomized Incremental Algorithm

**Module:** 3: Range Searching and Point Location
**Topic:** Trapezoidal Map and Randomized Incremental Algorithm

**Learning Outcomes:**

*   Understand the definition and construction of a trapezoidal map.
*   Explain the randomized incremental algorithm for constructing a trapezoidal map.
*   Analyze the expected time complexity of the randomized incremental algorithm.
*   Understand the use of a trapezoidal map for point location queries.
*   Apply the trapezoidal map structure to solve point location problems.

---

### 1. Introduction to Trapezoidal Maps

*   **Definition:** A *trapezoidal map* (or trapezoidal decomposition) of a planar subdivision *S* induced by a set of *n* non-intersecting line segments is a subdivision of the plane into trapezoids (some of which may be triangles) formed by drawing vertical extensions (top and bottom) from the endpoints of the segments until they hit another segment or the boundary of the enclosing bounding box.

*   **Motivation:** Trapezoidal maps are useful for point location problems. Given a point *q*, the trapezoid containing *q* can be found efficiently, and thus the segment that is directly above *q* can be identified.

*   **Key Features:**
    *   **Vertical Extensions:** Each endpoint of each line segment has a vertical extension that extends upwards and downwards until it hits another line segment or the bounding box.
    *   **Disjoint Trapezoids:** The plane is divided into disjoint trapezoids (or triangles).
    *   **Planar Subdivision:**  The trapezoidal map refines the original planar subdivision *S*.
    *   **Bounding Box:** A sufficiently large bounding box is typically used to confine the map.

*   **Components of a Trapezoid:**
    *   `top(Δ)`: The line segment on the top boundary of the trapezoid Δ.
    *   `bottom(Δ)`: The line segment on the bottom boundary of the trapezoid Δ.
    *   `leftp(Δ)`: The left endpoint that defines the left boundary of the trapezoid Δ. (It can be the left end point of `top(Δ)` or `bottom(Δ)`)
    *   `rightp(Δ)`: The right endpoint that defines the right boundary of the trapezoid Δ. (It can be the right end point of `top(Δ)` or `bottom(Δ)`)

*   **Example:**

    Imagine three non-intersecting line segments in the plane. To construct the trapezoidal map, draw vertical lines from each endpoint until they hit another segment or the bounding box.  The plane is now divided into several trapezoids and triangles.

### 2. Randomized Incremental Algorithm

*   **Algorithm Overview:** This is an incremental algorithm, which means it processes the line segments one at a time, in a random order. Randomization helps to ensure good *expected* time complexity.

*   **Steps:**

    1.  **Initialization:**
        *   Start with a bounding box *R* enclosing all line segments.  This forms the initial trapezoidal map, consisting of a single trapezoid.
    2.  **Random Permutation:**
        *   Generate a random permutation *S<sub>1</sub>, S<sub>2</sub>, ..., S<sub>n</sub>* of the input line segments.
    3.  **Incremental Insertion:**
        *   For *i* = 1 to *n*:
            *   **Locate:**  Find the trapezoids of the current trapezoidal map *T<sub>i-1</sub>* that intersect the line segment *S<sub>i</sub>*.
            *   **Update:** Update the trapezoidal map *T<sub>i-1</sub>* to *T<sub>i</sub>* by splitting the intersected trapezoids and creating new trapezoids based on the endpoints and vertical extensions of *S<sub>i</sub>*. This will include drawing vertical lines from endpoints of S<sub>i</sub> until they intersect another segment or the bounding box.
    4.  **Result:** The final trapezoidal map *T<sub>n</sub>* is the desired trapezoidal decomposition.

*   **Data Structures:**
    *   **Trapezoidal Map Structure (*T*):** This is the geometric description of the trapezoidal map (the trapezoids themselves and their adjacency relations).
    *   **Search Structure (Directed Acyclic Graph *D*):** Used for point location. Each leaf in the DAG corresponds to a trapezoid in *T*. Each internal node corresponds to either an endpoint of a line segment or a line segment. This data structure guides the point location process.

*   **Point Location using the Search Structure *D*:**
    *   To locate a point *q* in the trapezoidal map:
        *   Start at the root of the DAG *D*.
        *   Traverse the DAG, making decisions at each internal node based on the coordinates of *q*:
            *   **x-node (endpoint):** Compare the x-coordinate of *q* with the x-coordinate of the endpoint stored at the node.  Go left or right accordingly.
            *   **y-node (segment):** Determine if *q* is above or below the line segment stored at the node.  Go left or right accordingly.
        *   The leaf node reached corresponds to the trapezoid containing *q*.

*   **Example:**

    Imagine a trapezoidal map with some segments already inserted. We want to insert a new segment *S*.

    1.  *Locate:* Use the search structure *D* to find the trapezoids that *S* intersects.
    2.  *Update:*
        *   Break the intersected trapezoids by adding portions of *S* as new edges.
        *   Create new trapezoids bounded by *S*, the vertical extensions from its endpoints, and the existing edges of the old trapezoids.
        *   Update the search structure *D* to reflect these changes. This involves replacing leaves corresponding to old trapezoids with new subtrees representing the newly created trapezoids.

### 3. Analysis of Expected Time Complexity

*   **Backward Analysis:** A powerful technique used to analyze randomized algorithms.  Instead of analyzing the cost of inserting segment *S<sub>i</sub>*, we analyze the cost of *deleting* *S<sub>i</sub>* from *T<sub>i</sub>* to obtain *T<sub>i-1</sub>*.

*   **Expected Cost of Insertion:**  The expected cost of inserting a segment *S<sub>i</sub>* is proportional to the number of newly created trapezoids in *T<sub>i</sub>* minus the number of trapezoids deleted in T<sub>i-1</sub>.

*   **Key Result:** The expected number of trapezoids created when inserting segment *S<sub>i</sub>* is *O(1)*.

*   **Expected Time for Construction:** The expected time to construct the trapezoidal map is *O(n log n)*.
    *   **Point Location Query Time:** *O(log n)* (expected)
    *   **Space Complexity:** *O(n)* (expected)

*   **Explanation of Time Complexity:**

    *   *O(n log n)*:  The overall expected time complexity comes from the *n* insertions, each taking an expected *O(log n)* time due to the point location step and the updating of the search structure *D*.

### 4. Point Location with Trapezoidal Maps

*   **How it Works:**  Once the trapezoidal map and search structure *D* have been constructed, point location queries can be answered efficiently.

*   **Query Process:**
    1.  Given a query point *q*, start at the root of the search structure *D*.
    2.  Traverse *D* by comparing the coordinates of *q* with the endpoints and line segments stored at each node, until a leaf node is reached.
    3.  The leaf node identifies the trapezoid that contains *q*.
    4.  From the trapezoid, you can determine other information, such as the face of the original subdivision that contains *q*.

*   **Example:**

    Suppose we have a trapezoidal map of a map and we want to find which country contains a specific coordinate. The query would find the trapezoid that contains the coordinate, and that trapezoid is within a particular country on the map.

### 5. Advantages and Disadvantages

*   **Advantages:**
    *   **Efficient Point Location:** Provides logarithmic query time.
    *   **Simple to Implement:** The algorithm is relatively straightforward to implement compared to other point location structures.
    *   **Randomization:** Guarantees good *expected* performance.
*   **Disadvantages:**
    *   **Randomization:** The worst-case performance can be quadratic, although highly unlikely.
    *   **Space Complexity:**  While expected to be linear, the space usage can be more significant than other simpler point location structures.

### 6. Practice Questions and Exercises

1.  **Question:** Draw the trapezoidal map for the following set of line segments:  S1 = (1,1) - (5,1), S2 = (2,2) - (4,4), S3 = (3,0) - (3,3). Include a bounding box that encompasses all line segments.

    **Answer:** Draw a box around the segments. Then draw vertical lines extending from each endpoint of the segment (1,1), (5,1), (2,2), (4,4), (3,0) and (3,3). The vertical lines should stop either when they encounter another segment, or the sides of the bounding box. The resulting areas contained will be the trapezoids and triangles of the solution.

2.  **Question:** What is the expected time complexity of constructing a trapezoidal map using the randomized incremental algorithm?

    **Answer:** *O(n log n)*

3.  **Question:** Describe the main steps of the randomized incremental algorithm for constructing a trapezoidal map.

    **Answer:** The steps are: (1) Initialize with a bounding box, (2) Randomly permute the input segments, (3) Iteratively insert segments and update the trapezoidal map and search structure, (4) return the resulting trapezoidal map.

4.  **Question:** What data structures are used in the randomized incremental algorithm for constructing a trapezoidal map, and what are their roles?

     **Answer:** *T* - the geometric trapezoidal map. *D* - the directed acyclic graph to efficiently locate points.

5.  **Question:** What is the purpose of using a bounding box in the trapezoidal map?

    **Answer:** It confines the map to a finite region and handles the vertical extensions.  It provides the initial single trapezoid from which the algorithm begins.

### 7. Important Points to Remember

*   **Randomization is Key:** The randomized order of segment insertion is crucial for achieving the *O(n log n)* expected time complexity.
*   **Backward Analysis:** A valuable technique for analyzing randomized geometric algorithms.
*   **Trapezoidal Maps are Powerful:** They provide an efficient solution to the point location problem.
*   **Search Structure (DAG):** This data structure is the key to efficient point location queries within the constructed trapezoidal map.
*   **Expected vs. Worst-Case:**  Be aware of the difference between the expected and worst-case performance of the algorithm.
---
These detailed notes cover the definition and construction of a trapezoidal map, the randomized incremental algorithm for constructing it, its time complexity, and its use for point location queries. The examples and practice questions help solidify understanding of the key concepts. Remember to focus on the role of randomization and the structure of the search DAG for optimal performance. Good luck with your studies!
