---
title: "Graph search"
subject: "MOBILE ROBOTICS"
module: "Module 4: Path Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640c7"
status: "completed"
scrapedAt: "2026-05-20T18:15:28.216Z"
---
# Mobile Robotics: Module 4 - Path Planning: Graph Search

## Table of Contents

1.  [Introduction to Path Planning](#introduction-to-path-planning)
2.  [Representing the Environment as a Graph](#representing-the-environment-as-a-graph)
    *   [What is a Graph?](#what-is-a-graph)
    *   [Nodes and Edges](#nodes-and-edges)
    *   [Types of Graphs](#types-of-graphs)
3.  [Graph Search Algorithms](#graph-search-algorithms)
    *   [Breadth-First Search (BFS)](#breadth-first-search-bfs)
    *   [Depth-First Search (DFS)](#depth-first-search-dfs)
    *   [Dijkstra's Algorithm](#dijkstras-algorithm)
    *   [A\* Search Algorithm](#a-search-algorithm)
4.  [Application in Mobile Robotics](#application-in-mobile-robotics)
5.  [Key Concepts and Definitions](#key-concepts-and-definitions)
6.  [Textbook References and Integration](#textbook-references-and-integration)
7.  [Practice Questions and Exercises](#practice-questions-and-exercises)
8.  [Important Points to Remember](#important-points-to-remember)

---

## 1. Introduction to Path Planning

Path planning is a fundamental task in mobile robotics, enabling a robot to navigate from a starting point to a goal point in an environment while avoiding obstacles. This module focuses on **graph search algorithms**, a powerful paradigm for solving path planning problems.

**Learning Outcome Alignment:** This topic directly supports **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)** by providing the theoretical foundation and algorithmic approaches for finding paths.

**Key Concept:** The core idea is to transform a continuous or semi-continuous environment into a discrete representation (a graph) that can be searched by algorithms to find an optimal or feasible path.

---

## 2. Representing the Environment as a Graph

Before applying graph search algorithms, the robot's environment needs to be represented in a graph structure.

### What is a Graph?

A graph $G$ is a mathematical structure consisting of a set of **vertices (or nodes)** $V$ and a set of **edges** $E$ that connect pairs of vertices.

*   **Formal Definition:** $G = (V, E)$, where $V = \{v_1, v_2, ..., v_n\}$ and $E = \{(v_i, v_j) | v_i, v_j \in V\}$.

### Nodes and Edges

*   **Nodes (Vertices):** Represent specific locations or states within the robot's environment. These could be:
    *   Discrete points in space (e.g., grid cells).
    *   Key locations like waypoints, intersections, or goals.
    *   Configuration states of the robot (e.g., position and orientation).
*   **Edges:** Represent possible movements or transitions between nodes.
    *   An edge $(v_i, v_j)$ signifies that the robot can move from the state represented by $v_i$ to the state represented by $v_j$.
    *   Edges can have associated **weights**, representing the cost of traversing that edge (e.g., distance, time, energy consumption).

### Types of Graphs

*   **Unweighted Graphs:** All edges have the same implicit weight (usually 1). Used when only the existence of a path matters, not its cost.
*   **Weighted Graphs:** Edges have assigned costs. Essential for finding "optimal" paths based on some metric.
*   **Directed Graphs (Digraphs):** Edges have a direction, meaning a path from $v_i$ to $v_j$ does not necessarily imply a path from $v_j$ to $v_i$. Relevant for environments with one-way passages.
*   **Undirected Graphs:** Edges have no direction, meaning movement is possible in both directions between connected nodes.

**Textbook Integration:** Siegwart and Nourbakhsh (2011) discuss various environment representations, including discretized spaces that can be naturally translated into graphs (Chapter 5: "Path Planning and Navigation"). La Valle (2009) dedicates a significant portion to graph-based methods for path planning, explaining how to construct roadmaps and visibility graphs (Chapter 3: "Roadmap Methods").

---

## 3. Graph Search Algorithms

These algorithms systematically explore a graph to find a path between a start node and a goal node.

### Breadth-First Search (BFS)

*   **Concept:** Explores the graph level by level. It finds the shortest path in terms of the number of edges in an unweighted graph.
*   **How it works:**
    1.  Start at the source node and explore all its neighbors.
    2.  Then, for each of those neighbors, explore their unvisited neighbors.
    3.  This process continues until the goal node is found.
*   **Data Structure:** Uses a **queue** to keep track of nodes to visit.
*   **Completeness:** Guarantees finding a path if one exists.
*   **Optimality:** Finds the shortest path in terms of the number of edges (unweighted graphs).
*   **Complexity:** $O(V + E)$, where $V$ is the number of vertices and $E$ is the number of edges.

**Example:** Imagine navigating a maze represented as a grid. BFS would explore all immediate adjacent cells from the start, then all cells two steps away, and so on, until the exit is found.

### Depth-First Search (DFS)

*   **Concept:** Explores as far as possible along each branch before backtracking.
*   **How it works:**
    1.  Start at the source node and explore one of its neighbors.
    2.  Continue exploring from that neighbor's neighbor, and so on, until a dead end is reached or the goal is found.
    3.  If a dead end is reached, backtrack to the previous node and try another unexplored path.
*   **Data Structure:** Uses a **stack** (explicitly or implicitly via recursion).
*   **Completeness:** May not find a path in infinite graphs or graphs with cycles if not implemented carefully to avoid infinite loops.
*   **Optimality:** Does not guarantee finding the shortest path.
*   **Complexity:** $O(V + E)$.

**Example:** In a maze, DFS would follow a single path as deep as possible. If it hits a wall, it backs up to the last junction and tries a different path.

### Dijkstra's Algorithm

*   **Concept:** Finds the shortest path from a single source node to all other nodes in a weighted graph with non-negative edge weights.
*   **How it works:**
    1.  Initialize distances to all nodes as infinity, except for the start node, which has a distance of 0.
    2.  Maintain a set of visited nodes and a priority queue of unvisited nodes ordered by their current shortest distance from the source.
    3.  Repeatedly extract the node with the smallest distance from the priority queue.
    4.  For the extracted node, update the distances of its neighbors if a shorter path is found through the current node.
    5.  Mark the extracted node as visited.
    6.  Continue until the goal node is extracted or the priority queue is empty.
*   **Data Structure:** Uses a **priority queue**.
*   **Completeness:** Guarantees finding a path if one exists.
*   **Optimality:** Finds the shortest path in terms of total edge weights.
*   **Complexity:** $O(E + V \log V)$ with a binary heap, or $O(E + V)$ with a Fibonacci heap.

**Textbook Integration:** Corke (2011) covers graph search algorithms, including Dijkstra's, in his section on pathfinding and mapping, often illustrated with MATLAB examples (Chapter 10: "Pathfinding"). Tzafestas (2008) also discusses pathfinding algorithms in the context of robot navigation.

**Example:** Finding the fastest route on a road network where roads have different travel times. Dijkstra's ensures you find the route with the minimum total travel time.

### A\* Search Algorithm

*   **Concept:** An extension of Dijkstra's algorithm that uses a **heuristic function** to guide the search towards the goal, making it more efficient.
*   **How it works:**
    1.  Similar to Dijkstra's, it maintains distances from the start node ($g(n)$).
    2.  It also uses an estimated cost from the current node to the goal ($h(n)$), known as the heuristic.
    3.  The priority queue prioritizes nodes based on $f(n) = g(n) + h(n)$.
    4.  The heuristic $h(n)$ must be **admissible** (never overestimates the actual cost to the goal) and preferably **consistent** (satisfies $h(u) \le cost(u, v) + h(v)$ for any edge $(u, v)$).
*   **Data Structure:** Uses a **priority queue**.
*   **Completeness:** Guarantees finding a path if one exists (given an admissible heuristic).
*   **Optimality:** Finds the shortest path if the heuristic is admissible and consistent.
*   **Complexity:** Depends on the quality of the heuristic. In the worst case, it can be similar to Dijkstra's, but often much faster in practice.

**Textbook Integration:** La Valle (2009) extensively covers A\* search and its variants, explaining the role of heuristics in making path planning efficient for complex environments (Chapter 4: "Search Methods" and Chapter 5: "Metrics and Heuristics"). Thrun et al. (2005) also touch upon search algorithms like A\* in the context of robot localization and mapping, where efficient pathfinding is crucial (Chapter 10: "Motion Planning").

**Example:** Navigating a robot on a grid map. The heuristic could be the Manhattan distance or Euclidean distance from the current cell to the goal cell. This guides the robot to move generally towards the goal, avoiding exploring distant parts of the map unnecessarily.

---

## 4. Application in Mobile Robotics

Graph search algorithms are applied in mobile robotics for:

*   **Global Path Planning:** Finding a complete path from start to goal in a known or pre-mapped environment.
*   **Waypoint Navigation:** Connecting a series of predefined waypoints to form a complete route.
*   **Grid-based Pathfinding:** Navigating robots on maps represented as grids (e.g., occupancy grids).
*   **Path Smoothing:** The raw path from graph search might be jerky. Post-processing techniques can smooth it.

**Course Outcome Alignment:** This section directly relates to **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)**. The ability to apply these algorithms to robot navigation scenarios is key.

**Example:** A delivery robot in a warehouse uses a pre-generated map (often a grid) of the warehouse. When given a destination, it uses A\* search on this grid to find the shortest path, considering aisles as traversable and shelves/obstacles as non-traversable cells.

---

## 5. Key Concepts and Definitions

*   **Graph:** A set of nodes and edges representing states and transitions.
*   **Node (Vertex):** A state or location in the environment.
*   **Edge:** A possible transition or movement between nodes.
*   **Weighted Graph:** Edges have associated costs.
*   **Unweighted Graph:** Edges have uniform costs.
*   **Path:** A sequence of connected edges from a start node to an end node.
*   **Shortest Path:** A path with the minimum total edge weight (or minimum number of edges in an unweighted graph).
*   **BFS:** Explores level by level, finds shortest path in unweighted graphs. Uses a queue.
*   **DFS:** Explores deeply, may not find shortest path. Uses a stack.
*   **Dijkstra's Algorithm:** Finds shortest path in weighted graphs with non-negative weights. Uses a priority queue.
*   **A\* Search Algorithm:** Dijkstra's with a heuristic, aims for more efficient goal-directed search. Uses a priority queue.
*   **Heuristic Function:** An estimate of the cost from a node to the goal.
*   **Admissible Heuristic:** Never overestimates the true cost.
*   **Consistent Heuristic:** Satisfies the triangle inequality for edge costs.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## 6. Textbook References and Integration

*   **Introduction to Autonomous Mobile Robots by R. Siegwart, I. R. Nourbakhsh (2011):** Chapter 5 ("Path Planning and Navigation") provides a good overview of environment representations (including grid maps) and how they can be translated into search problems.
*   **Robotics, Vision and Control: Fundamental Algorithms in MATLAB by Peter Corke (2011):** Chapter 10 ("Pathfinding") offers practical implementations and explanations of common search algorithms like A\*, often with MATLAB code examples, making it highly relevant for practical application.
*   **Planning Algorithms by S. M. La Valle (2009):** This book is a primary reference for graph search in robotics. Chapters 3, 4, and 5 are particularly relevant, covering roadmap methods, search algorithms (BFS, DFS, Dijkstra, A\*), and the critical concepts of heuristics and graph construction.
*   **Introduction to Mobile Robot Control by Spyros G. Tzafestas (Elsevier.):** Discusses path planning as a key aspect of robot control and navigation, likely covering foundational search algorithms.
*   **Probabilistic Robotics by Thrun, S., Burgard,W., and Fox, D. (2005):** While focusing on probabilistic methods, this book acknowledges the importance of search algorithms, especially when integrated with localization and mapping, or for planning in uncertain environments.

---

## 7. Practice Questions and Exercises

**Question 1:**
Consider the following weighted graph:

```
    A --(2)-- B --(1)-- C
    |         |         |
   (3)       (4)       (5)
    |         |         |
    D --(1)-- E --(3)-- F
```

Using Dijkstra's algorithm, find the shortest path from node A to node F.

**Answer 1:**

1.  **Initialization:**
    *   `dist(A) = 0`, `dist(B, C, D, E, F) = infinity`
    *   `visited = {}`, `priority_queue = { (0, A) }`

2.  **Iteration 1:**
    *   Extract `(0, A)`. `visited = {A}`.
    *   Neighbors of A: B (cost 2), D (cost 3).
    *   Update `dist(B) = 0 + 2 = 2`. `priority_queue = { (2, B), (3, D) }`.
    *   Update `dist(D) = 0 + 3 = 3`.

3.  **Iteration 2:**
    *   Extract `(2, B)`. `visited = {A, B}`.
    *   Neighbors of B: A (visited), C (cost 1), E (cost 4).
    *   Update `dist(C) = 2 + 1 = 3`. `priority_queue = { (3, D), (3, C), (6, E) }`. (Assume C gets priority over D if equal)
    *   Update `dist(E) = 2 + 4 = 6`.

4.  **Iteration 3:**
    *   Extract `(3, C)`. `visited = {A, B, C}`.
    *   Neighbors of C: B (visited), F (cost 5).
    *   Update `dist(F) = 3 + 5 = 8`. `priority_queue = { (3, D), (6, E), (8, F) }`.

5.  **Iteration 4:**
    *   Extract `(3, D)`. `visited = {A, B, C, D}`.
    *   Neighbors of D: A (visited), E (cost 1).
    *   Update `dist(E) = min(6, 3 + 1) = 4`. `priority_queue = { (4, E), (8, F) }`.

6.  **Iteration 5:**
    *   Extract `(4, E)`. `visited = {A, B, C, D, E}`.
    *   Neighbors of E: B (visited), D (visited), F (cost 3).
    *   Update `dist(F) = min(8, 4 + 3) = 7`. `priority_queue = { (7, F) }`.

7.  **Iteration 6:**
    *   Extract `(7, F)`. `visited = {A, B, C, D, E, F}`. Goal reached.

The shortest path distance from A to F is 7.
To reconstruct the path, we trace back from F: F was reached from E (cost 4+3=7), E from D (cost 3+1=4), D from A (cost 0+3=3).
Shortest Path: **A -> D -> E -> F**

**Question 2:**
What is the primary advantage of A\* search over Dijkstra's algorithm in many practical path planning scenarios?

**Answer 2:**
The primary advantage of A\* search over Dijkstra's algorithm is its **efficiency**, achieved through the use of a heuristic function. By estimating the cost to the goal, A\* prioritizes exploring nodes that are likely to be on the shortest path, significantly reducing the number of nodes examined compared to Dijkstra's, which explores uniformly outward from the start. This leads to faster pathfinding, especially in large and complex environments.

**Exercise 3:**
Imagine a robot operating in a 5x5 grid world. The robot is at (0,0) (bottom-left) and wants to reach (4,4) (top-right). Some cells are blocked.
*   Represent this grid as a graph where each traversable cell is a node.
*   Edges connect adjacent traversable cells (up, down, left, right). Assume unit edge cost.
*   Describe how BFS would find a path in this grid. What would be the length of the shortest path found by BFS?

**Exercise 3 Solution Sketch:**
*   **Graph Representation:** Nodes would be tuples like (row, col), e.g., (0,0), (0,1), ..., (4,4). Edges connect `(r, c)` to `(r+1, c)`, `(r-1, c)`, `(r, c+1)`, `(r, c-1)` if these neighbors are within bounds and not blocked.
*   **BFS:** BFS would start at (0,0), visit all cells reachable in 1 step, then all cells reachable in 2 steps, and so on. The first time it encounters (4,4), it has found the shortest path in terms of the number of steps.
*   **Path Length:** In a 5x5 grid with no obstacles, the shortest path from (0,0) to (4,4) using only horizontal and vertical moves would require 4 moves right and 4 moves up, totaling 8 moves. BFS would find this path.

---

## 8. Important Points to Remember

*   **Graph Representation is Key:** The choice of how to discretize the environment (e.g., grid, roadmap, visibility graph) significantly impacts the path planning process.
*   **Algorithm Choice Depends on Needs:**
    *   BFS for shortest path in unweighted graphs.
    *   Dijkstra's for shortest path in weighted graphs (non-negative weights).
    *   A\* for efficient shortest path in weighted graphs using heuristics.
*   **Heuristic Quality Matters for A\*:** A good heuristic significantly speeds up A\*; an inadmissible heuristic can lead to suboptimal or incorrect paths.
*   **Completeness vs. Optimality:** Some algorithms guarantee finding a path (completeness), while others guarantee the shortest path (optimality).
*   **Computational Cost:** Consider the size of the graph ($V$, $E$) when choosing an algorithm for real-time applications.

---