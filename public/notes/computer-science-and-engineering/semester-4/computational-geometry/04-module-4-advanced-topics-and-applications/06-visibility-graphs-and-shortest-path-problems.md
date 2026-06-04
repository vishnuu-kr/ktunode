---
title: "Visibility graphs and shortest path problems"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 4: Advanced Topics and Applications :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b24f"
status: "completed"
scrapedAt: "2026-05-20T16:11:02.854Z"
---
# Computational Geometry: Module 4 - Visibility Graphs and Shortest Path Problems

**Subject:** Computational Geometry
**Module:** Module 4: Advanced Topics and Applications
**Topic:** Visibility Graphs and Shortest Path Problems
**Description:** Covering the construction and application of visibility graphs for solving shortest path problems amongst obstacles.

**Learning Outcomes:**

*   Understand the concept of a visibility graph.
*   Learn algorithms for constructing visibility graphs.
*   Apply visibility graphs to solve shortest path problems in the plane.
*   Analyze the complexity of visibility graph construction and shortest path finding.
*   Understand the limitations and extensions of visibility graph approaches.

## 1. Introduction to Visibility Graphs

*   **Definition:** A visibility graph is a graph where nodes represent points of interest (e.g., vertices of obstacles) and edges connect nodes that are "visible" to each other (i.e., the line segment connecting them does not intersect any obstacle).

*   **Purpose:** Used to find the shortest path between two points in a planar environment with obstacles.  By searching for the shortest path in the visibility graph, we find the shortest path avoiding obstacles in the original geometric space.

*   **Key Idea:** The shortest path between two points amidst obstacles is a piecewise linear path whose vertices are vertices of the obstacles.

*   **Example:** Imagine a robot navigating a warehouse filled with boxes. The corners of the boxes are the vertices, and the robot can move directly between two corners if it doesn't bump into another box.

## 2. Key Concepts and Definitions

*   **Obstacle:** A closed, bounded region in the plane that the path cannot cross. We typically assume obstacles are polygonal.

*   **Vertex:** A corner point of an obstacle.

*   **Edge (of obstacle):** A line segment connecting two vertices of the same obstacle.

*   **Visible:** Two points *p* and *q* are visible to each other if the line segment *pq* does not intersect the interior of any obstacle.  Note: *pq* can touch the boundary of an obstacle.

*   **Visibility Graph G = (V, E):**
    *   *V*: Set of vertices including the start (s) and end (t) points, and vertices of all obstacles.
    *   *E*:  Set of edges. An edge exists between two vertices *p* and *q* in *V* if *p* and *q* are visible to each other.

*   **Euclidean Distance:** The straight-line distance between two points in the plane, denoted as dist(p, q).

*   **Shortest Path:** The path with the minimum total Euclidean length between the start and end points.

## 3. Algorithms for Constructing Visibility Graphs

*   **Brute-Force Algorithm:**
    1.  For every pair of vertices *p* and *q* in *V*, check if the line segment *pq* intersects any obstacle.
    2.  If *pq* is visible (i.e., does not intersect any obstacle), add the edge (p, q) to *E*.
    3.  Assign the weight dist(p, q) to the edge (p, q).

    *   **Complexity:** O(n<sup>3</sup>), where *n* is the total number of vertices (obstacles + start/end).  We have O(n<sup>2</sup>) pairs of vertices, and for each pair, we check for intersection with O(n) edges of obstacles.

*   **Sweep-Line Algorithm:**
    1. Sort all vertices by x-coordinate.
    2. Maintain a sorted list of obstacles intersected by the sweep line.
    3. As the sweep line advances, process each event (vertex):
        * Check for visibility with neighboring vertices on obstacles.
        * Update the sorted list of intersected obstacles.
    4. The algorithm requires careful handling of edge cases.

    *   **Complexity:**  O(n<sup>2</sup> log n) – although optimizations can reduce this in practice.  The logarithmic term arises from maintaining the sorted list of obstacles.

*   **Rotation Method (Tangential Scan):**
    1. For each vertex *v*, imagine rotating a line segment around *v*.
    2. Determine the first vertex hit by the rotating line, which is visible from *v*.
    3.  Repeat this process until the rotating line has scanned the entire space around *v*.

    *   **Complexity:** O(n<sup>2</sup> log n). Similar to the sweep line approach.


## 4. Applying Visibility Graphs to Shortest Path Problems

1.  **Construct the Visibility Graph:** Use one of the algorithms described above to build the visibility graph *G = (V, E)*.

2.  **Assign Edge Weights:**  Set the weight of each edge (p, q) in *E* to the Euclidean distance dist(p, q) between the vertices *p* and *q*.

3.  **Find the Shortest Path:** Use a single-source shortest path algorithm, such as Dijkstra's algorithm or A* search, to find the shortest path from the start vertex *s* to the end vertex *t* in the visibility graph *G*.

    *   **Dijkstra's Algorithm:** Guarantees finding the shortest path. Time complexity is O(E + V log V), which in our case becomes O(n<sup>2</sup> + n log n) ≈ O(n<sup>2</sup>) because *E* can be O(n<sup>2</sup>) in a dense visibility graph.

    *   **A* Search:**  Can be faster than Dijkstra's if a good heuristic is used. The heuristic should underestimate the distance to the goal. A common heuristic is the Euclidean distance to the end point.

## 5. Analysis of Complexity

*   **Visibility Graph Construction:** O(n<sup>3</sup>) for the brute-force method, O(n<sup>2</sup> log n) for the sweep-line and rotation methods.

*   **Shortest Path Finding (Dijkstra):** O(n<sup>2</sup>) after the graph is constructed.

*   **Overall Complexity:** Dominated by the visibility graph construction step, typically O(n<sup>2</sup> log n) with better algorithms.

## 6. Limitations and Extensions

*   **Limitations:**
    *   The visibility graph approach works best for polygonal obstacles. For curved obstacles, approximation techniques are needed.
    *   The space complexity can be high as the visibility graph can have O(n<sup>2</sup>) edges.
    *   Can be inefficient for very dense obstacle environments.

*   **Extensions:**
    *   **Probabilistic Roadmaps (PRMs):** Used for motion planning in high-dimensional configuration spaces, particularly for robots with many degrees of freedom. PRMs randomly sample points in the configuration space and connect them to form a roadmap.
    *   **Rapidly-exploring Random Trees (RRTs):** Another sampling-based method that builds a tree rooted at the start configuration by randomly expanding the tree towards unexplored regions.
    *   **Approximate Shortest Path Algorithms:**  Algorithms that guarantee finding a path within a certain factor (1+ε) of the optimal shortest path.

## 7. Important Points to Remember

*   The shortest path among obstacles consists of straight line segments connecting vertices of the obstacles.
*   Visibility graphs are a powerful tool for solving shortest path problems, but their construction can be computationally expensive.
*   Dijkstra's algorithm is commonly used to find the shortest path in the visibility graph.
*   The complexity of the overall algorithm is often dominated by the visibility graph construction.
*   For complex environments or high-dimensional spaces, consider using sampling-based methods like PRMs or RRTs.

## 8. Practice Questions and Exercises

**Question 1:**

Draw a simple environment with two rectangular obstacles. Construct the visibility graph (approximately, by visual estimation) for a start point *s* and an end point *t*. Indicate the shortest path from *s* to *t*.

**Answer:**

(This requires a visual solution. The solution should involve drawing rectangles, marking *s* and *t*, constructing lines connecting visible vertices, and highlighting the shortest path.)

**Question 2:**

What is the time complexity of the brute-force algorithm for constructing a visibility graph, and why?

**Answer:**

O(n<sup>3</sup>).  We have O(n<sup>2</sup>) pairs of vertices, and for each pair, we check for intersection with O(n) edges of the obstacles.  Therefore, O(n<sup>2</sup>) * O(n) = O(n<sup>3</sup>).

**Question 3:**

Describe the key difference between Dijkstra's algorithm and A* search for finding the shortest path in a visibility graph.  What is the advantage of using A*?

**Answer:**

Dijkstra's algorithm explores all possible paths from the start node in order of increasing distance.  A* search uses a heuristic function to estimate the distance from each node to the goal node, prioritizing nodes that are likely to lead to a shorter path.  The advantage of using A* is that it can be significantly faster than Dijkstra's algorithm if a good heuristic function is used.  A* can "focus" the search towards the goal rather than blindly exploring.

**Question 4:**

What is a major limitation of the visibility graph approach, and how can this limitation be addressed?

**Answer:**

A major limitation is that it works best for polygonal obstacles. For curved obstacles, approximation techniques are needed to discretize the curved boundary into polygonal approximations.  Another limitation is that it can become computationally expensive and space-consuming in very dense environments with many obstacles.  Sampling-based methods like PRMs and RRTs offer an alternative in such scenarios.

**Question 5:**

Imagine you are tasked with creating a path planning system for a robot in a complex warehouse environment.  Which path planning algorithm (Visibility Graph, PRM, or RRT) would you choose and why? Briefly discuss the trade-offs.

**Answer:**

This is a design choice question.  A plausible answer would consider the following:

*   **Visibility Graph:** Might be suitable if the warehouse has relatively few obstacles and precise, optimal paths are needed. However, scalability to very dense environments is a concern.

*   **PRM (Probabilistic Roadmaps):**  A good choice for complex, high-dimensional environments where exact optimal paths are not critical. PRMs can handle a large number of obstacles.

*   **RRT (Rapidly-exploring Random Trees):** Similar to PRM, suitable for high-dimensional spaces. RRTs are typically faster for initial path discovery than PRMs, but might not find the optimal path initially. They are well-suited for dynamic environments, because they can be re-planned easier than visibility graphs, and also easier than PRMs.

The choice depends on the specific requirements of the warehouse environment, the robot's capabilities, and the desired path quality (optimality vs. speed). For a very dense warehouse, a sampling based method like RRT or PRM would likely be a more practical solution.  For a less dense warehouse, with a need for near-optimal paths, a visibility graph may be appropriate.
