---
title: "D* algorithms"
subject: "MOBILE ROBOTICS"
module: "Module 4: Path Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640cb"
status: "completed"
scrapedAt: "2026-05-20T18:15:31.072Z"
---
# Mobile Robotics: Module 4 - Path Planning: D* Algorithms

## Introduction to Path Planning

Path planning is a fundamental problem in mobile robotics, concerned with finding a collision-free trajectory for a robot to move from a starting point to a goal point in its environment. This module explores various path planning algorithms, with a focus on heuristic search algorithms.

**Key Concept:** Path planning involves generating a sequence of robot configurations (states) and corresponding control commands that guide the robot from its initial pose to a desired final pose, while respecting constraints such as obstacles and robot dynamics.

## Revisiting Search Algorithms for Path Planning

Before diving into D* algorithms, it's crucial to understand the foundational search algorithms that inspire them.

### 1. Breadth-First Search (BFS)

*   **Concept:** Explores the state space level by level. It finds the shortest path in terms of the number of edges (or grid cells) in an unweighted graph.
*   **How it works:** Uses a queue to store states to be visited. It expands the "closest" states first.
*   **Application in Path Planning:** Can be used on discretized environments (grids) to find the shortest path.
*   **Limitation:** Can be computationally expensive in large state spaces.

### 2. Dijkstra's Algorithm

*   **Concept:** Finds the shortest path from a single source node to all other nodes in a graph with non-negative edge weights.
*   **How it works:** Uses a priority queue to explore states in order of their accumulated cost from the start. It maintains tentative distance values for all nodes and updates them as better paths are found.
*   **Application in Path Planning:** Ideal for finding the shortest path in environments with varying costs associated with traversing different regions (e.g., different terrain types, perceived obstacle densities).
*   **Limitation:** Recalculates paths from scratch when the environment changes, which can be inefficient in dynamic environments.

### 3. A\* Search Algorithm

*   **Concept:** An informed search algorithm that combines Dijkstra's algorithm with a heuristic function. It aims to find the shortest path more efficiently by prioritizing states that are likely to lead to the goal.
*   **How it works:** Uses a priority queue where the priority of a state `n` is determined by `f(n) = g(n) + h(n)`:
    *   `g(n)`: The cost from the start node to node `n`.
    *   `h(n)`: The estimated cost (heuristic) from node `n` to the goal node.
*   **Application in Path Planning:** Widely used for path planning in grid-based environments due to its efficiency and optimality (if the heuristic is admissible and consistent).
*   **Textbook Reference:** **Siegwart & Nourbakhsh (2011), Chapter 7: Path Planning** discusses grid-based path planning and the principles behind A*. **La Valle (2009), Chapter 3: Graph Search** provides a comprehensive theoretical foundation for A*.

**Important Point:** The quality of the heuristic function `h(n)` significantly impacts the performance of A*. An admissible heuristic never overestimates the actual cost to the goal.

## D* Algorithms: Efficient Path Planning in Dynamic Environments

D* (Dynamic A*) algorithms are a family of path planning algorithms designed to efficiently re-plan paths when changes occur in the environment, such as new obstacles appearing or known obstacles disappearing. They achieve this by leveraging information from previous planning computations.

### 1. The Need for Dynamic Replanning

In real-world mobile robotics, environments are rarely static. Obstacles can appear unexpectedly, or the robot's understanding of the environment might evolve. Re-running a standard algorithm like A* from scratch for every small change is computationally prohibitive and leads to slow reaction times. D* algorithms address this by providing an incremental approach to path replanning.

### 2. D* (Original D* Algorithm)

The original D* algorithm, developed by Anthony Stentz, is a significant advancement over A* for dynamic environments. It works by mentally reversing the graph and planning from the goal back to the start.

**Key Idea:** D* works by planning a path from the goal back to the start. When an obstacle is detected, instead of re-planning from the start, it focuses on updating the costs in the vicinity of the new obstacle and propagating those changes through the graph, starting from the location of the change.

**How it Works (Conceptual Overview):**

1.  **Initial Planning (Goal to Start):** D* first plans a path from the goal back to the start, effectively treating the goal as the source and the start as the target. This is done using a modified A* search.
2.  **Cost Propagation:** Costs are propagated from the goal. The cost to reach the goal from any node is the known shortest path cost.
3.  **Robot Movement:** The robot moves along the planned path.
4.  **Environment Updates:** When the robot encounters an obstacle or a change in the environment is detected (e.g., a previously known obstacle is no longer there), the costs associated with the affected nodes are updated.
5.  **Incremental Replanning:** Instead of re-running the entire search, D* efficiently propagates these cost updates through the graph, starting from the location of the change. This is done using a "repair" process, similar to how Dijkstra's algorithm updates costs.
6.  **Direction of Propagation:** Crucially, the cost updates are propagated in the "correct" direction (from the goal towards the start) to efficiently re-establish the shortest path.

**Key Components of Original D\*:**

*   **State Representation:** Typically uses a grid-based representation of the environment.
*   **Cost Function:** Usually the Euclidean distance or Manhattan distance between adjacent cells.
*   **`g` and `rhs` values:**
    *   `g(u)`: The shortest path cost from the goal to node `u`.
    *   `rhs(u)`: The "right-hand side" value, which is the minimum cost to reach node `u` from the goal through its neighbors. `rhs(u) = min_{v \in neighbors(u)} (cost(u, v) + g(v))`.
*   **Priority Queue:** Stores nodes that need to be processed, ordered by their "key" values. The key is calculated based on `g` and `rhs` values.
*   **Repair Function:** The core mechanism for updating costs when changes occur.

**Textbook Reference:** **La Valle (2009), Chapter 7: Dynamic Path Planning** provides an in-depth explanation of the original D* algorithm and its variations. **Siegwart & Nourbakhsh (2011)**, while not detailing D* extensively, lay the groundwork for understanding how robots react to changing environments.

**Example:** Imagine a robot navigating a maze. If a new wall appears blocking the planned path, D* can efficiently update the path by focusing on the area around the new wall, rather than re-planning the entire maze from the start.

### 3. D* Lite

D* Lite is a more recent and often more efficient version of D* that simplifies the algorithm and improves its performance. It's designed for situations where the cost function can change.

**Key Idea:** D* Lite uses a simpler cost-update mechanism and directly plans from the start to the goal, but with a clever way to handle dynamic changes. It uses an estimate of the cost from the current state to the goal (similar to A*'s heuristic) and propagates changes efficiently.

**How it Works (Conceptual Overview):**

1.  **Bidirectional Planning (Implicit):** D* Lite maintains an estimate of the shortest path cost from each state to the goal.
2.  **Key Calculation:** For each state `u`, it calculates a key `k(u) = min(g(u), rhs(u)) + h(u, current_start) + b`, where:
    *   `g(u)`: The current best estimate of the cost from the start to `u`.
    *   `rhs(u)`: The cost of the shortest path from the start to `u` via one of its predecessors.
    *   `h(u, current_start)`: The heuristic estimate of the cost from `u` to the robot's current position (start).
    *   `b`: A quantity that increases as the robot moves away from the initial start, helping to prioritize updates.
3.  **Priority Queue:** States are stored in a priority queue ordered by their keys.
4.  **Local Cost Updates:** When an edge cost changes (e.g., due to an obstacle), the `rhs` values of affected nodes are updated.
5.  **Propagation:** These `rhs` updates are propagated through the priority queue, efficiently recomputing the shortest path.
6.  **Goal Bias:** D* Lite maintains a "goal bias" by prioritizing nodes that are closer to the actual goal.

**Textbook Reference:** **La Valle (2009), Chapter 7: Dynamic Path Planning** is the primary source for understanding D* Lite.

**Advantages of D* Lite over Original D\*:**

*   **Simpler Implementation:** Easier to understand and implement.
*   **More Efficient:** Often achieves better performance, especially in scenarios with frequent updates.
*   **Direct Start-to-Goal Planning:** While it uses a backward propagation idea for updates, the planning phase itself is conceptually closer to A* (start to goal).

**Example:** A robot exploring an unknown environment. As it senses new obstacles, D* Lite can quickly adapt its path without having to re-scan the entire environment.

### 4. Incremental Search Algorithms (General Concept)

D* algorithms fall under the umbrella of incremental search algorithms.

**Key Concept:** Incremental search algorithms efficiently update a previously computed shortest path when changes occur in the graph (e.g., edge cost changes, new edges, deleted edges). They do this by only re-evaluating the parts of the search tree that are affected by the change, rather than recomputing the entire path.

**Relation to D\*:** D* algorithms are specific implementations of incremental search for path planning in dynamic environments.

## Practical Considerations and Implementation Aspects

### Grid Representation

*   **Concept:** The environment is typically discretized into a grid of cells. Each cell can be traversable, an obstacle, or unknown.
*   **Path Representation:** A path is a sequence of adjacent cells from the start to the goal.
*   **Costs:** The cost of moving between adjacent cells can be uniform (e.g., 1 for cardinal moves, sqrt(2) for diagonal moves) or vary based on terrain, sensor confidence, etc.

### Heuristic Functions for D\* Algorithms

Similar to A*, D* algorithms benefit from good heuristic functions.

*   **Admissible Heuristics:**
    *   **Euclidean Distance:** The straight-line distance between two points.
    *   **Manhattan Distance:** The sum of the absolute differences of their Cartesian coordinates (for grid movement).
*   **Consistency:** A heuristic is consistent if `h(u) <= cost(u, v) + h(v)` for any edge `(u, v)`. Consistency implies admissibility.

### Handling Dynamic Updates

*   **Obstacle Detection:** This is usually done by sensors (e.g., LiDAR, sonar, cameras).
*   **Cost Updates:** When an obstacle is detected in a cell, the cost of traversing that cell (and potentially its neighbors) is set to infinity or a very high value. When an obstacle is removed, the cost is reset to its original traversable value.
*   **Propagation:** The core of D* algorithms is how they propagate these cost changes efficiently through the state space using the priority queue.

### Relation to Course Outcomes

*   **CO5: Perform navigation and path planning mobile robots:** D* algorithms are direct methods for path planning, enabling navigation in potentially changing environments.
*   **CO6: Control the mobile robots to follow different paths:** Once a path is generated by D*, control algorithms are needed to execute it. D* provides the "what to do" for the "how to do it" of control.
*   **CO4: Choose appropriate Sensors for mobile robot navigation:** Understanding how sensor data (obstacle detection) feeds into D* algorithms is crucial for selecting sensors.

## Practice Questions

**Question 1:**
Explain the main limitation of A* search that D* algorithms address.

**Answer:**
The main limitation of A* search in dynamic environments is its inefficiency in replanning. When the environment changes (e.g., a new obstacle appears), A* typically needs to re-run the entire search from the start to find a new optimal path. This can be computationally expensive and slow, especially in large or rapidly changing environments. D* algorithms, on the other hand, are designed to efficiently update existing paths by propagating cost changes incrementally, making them much more suitable for dynamic scenarios.

**Question 2:**
Describe the core principle behind how D* algorithms achieve efficient replanning.

**Answer:**
The core principle behind D* algorithms is **incremental replanning**. Instead of re-computing the entire path from scratch when an environmental change is detected, D* algorithms leverage the information from the previously computed path. They efficiently propagate the cost updates caused by the change through the relevant parts of the state space (often using a priority queue mechanism), thereby re-establishing the optimal path with minimal computational effort. This is achieved by focusing on updating the costs of nodes affected by the change and propagating these updates outwards.

**Question 3:**
What is the role of the heuristic function `h(n)` in A* and how might this concept be adapted in D* algorithms?

**Answer:**
In A* search, the heuristic function `h(n)` estimates the cost from a given state `n` to the goal. It guides the search by prioritizing states that are estimated to be "closer" to the goal. A good heuristic (admissible and consistent) ensures that A* finds the optimal path efficiently.

In D* algorithms, while the initial planning phase might be similar to A*, the replanning process focuses on updating costs. However, the concept of an estimate to the goal is still implicitly or explicitly used. In D* Lite, for example, the heuristic `h(u, current_start)` estimates the cost from the current state `u` to the robot's current position (start). This allows the algorithm to efficiently focus its updates on the relevant parts of the graph as the robot moves and the environment changes. The "goal bias" concept also plays a role in prioritizing updates that are closer to the goal.

**Question 4:**
Consider a 5x5 grid where the robot needs to go from (0,0) to (4,4). If a path is found using A* and then a new obstacle appears at (2,2) which blocks the optimal path, how would D* Lite likely handle this update compared to re-running A*?

**Answer:**
If a new obstacle appears at (2,2) blocking the optimal path in a 5x5 grid, here's how D* Lite would handle it compared to re-running A*:

*   **Re-running A\*:** The algorithm would discard all previous planning information and restart the A* search from (0,0) to (4,4) with the updated grid (including the obstacle at (2,2)). This would involve re-evaluating many nodes, even those not directly affected by the obstacle, to find a new shortest path.

*   **D\* Lite:** D* Lite would recognize that the cost of traversing the cell (2,2) has now become infinite (or very high). It would then update the cost associated with (2,2) and potentially its neighbors. Using its priority queue and the concept of `rhs` values, D* Lite would efficiently propagate this cost change. It would focus on re-evaluating nodes that are "downstream" of the obstacle in terms of the path from the start. The states that were part of the original optimal path before the obstacle, and are still reachable, would likely retain their low costs. D* Lite would only need to re-plan the portion of the path that is affected by the new obstacle, making it much faster than re-running the entire A* search. The robot would continue on its current path until it reaches a point where it can re-plan effectively, or it might immediately adjust based on the detected obstacle.

---

## Summary and Key Takeaways

*   **Path planning** is essential for mobile robot navigation, aiming to find collision-free trajectories.
*   **D* algorithms (Original D*, D* Lite)** are specifically designed for **dynamic environments** where obstacles can change or appear unexpectedly.
*   They achieve efficiency by **incrementally updating** previously computed paths, rather than re-planning from scratch.
*   D* algorithms leverage concepts similar to A* but focus on propagating **cost changes** effectively through the state space.
*   **D* Lite** is a modern and often preferred variant due to its simpler implementation and better performance.
*   The choice of **grid representation** and **heuristic functions** are important for the performance of D* algorithms.
*   D* algorithms directly support **CO5 (Perform navigation and path planning)** and indirectly contribute to **CO4 (Choose appropriate Sensors)** and **CO6 (Control the mobile robots to follow different paths)** by providing robust path information.

---

This comprehensive study note covers the D* algorithms in the context of mobile robot path planning, aligning with the provided learning outcomes and referencing the specified textbooks where applicable.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
