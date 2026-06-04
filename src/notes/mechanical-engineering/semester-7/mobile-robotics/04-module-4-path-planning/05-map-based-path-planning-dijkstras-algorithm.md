---
title: "Map based path planning- Dijkstra’s algorithm"
subject: "MOBILE ROBOTICS"
module: "Module 4: Path Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640c9"
status: "completed"
scrapedAt: "2026-05-20T18:15:29.621Z"
---
# Mobile Robotics: Module 4 - Path Planning: Dijkstra's Algorithm

## 1. Introduction to Path Planning

Path planning is a fundamental task in mobile robotics, enabling robots to navigate from a starting point to a desired goal point while avoiding obstacles and adhering to constraints. This module focuses on **map-based path planning**, where the robot has access to a representation of its environment (a map).

**Key Concepts:**

*   **Environment:** The physical space in which the robot operates.
*   **Map:** A representation of the environment, often including obstacles, free space, and possibly other features.
*   **Robot's State:** The robot's current position, orientation, and other relevant parameters.
*   **Goal:** The desired final state or location for the robot.
*   **Path:** A sequence of states or actions that takes the robot from its current state to the goal state.
*   **Optimality:** Paths can be evaluated based on criteria like shortest distance, least time, minimum energy, etc.
*   **Completeness:** A path planner is complete if it can find a path if one exists.
*   **Optimality (Guarantee):** A path planner is optimal if it finds the best possible path according to a given cost metric.

**Relevance to Course Outcomes:**

*   **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3):** This entire module directly addresses this CO by teaching methods for path planning.
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3):** Once a path is planned, it needs to be followed, which is a control problem. Understanding path planning is a prerequisite for path following.

**Textbook References:**

*   **Siegwart & Nourbakhsh (2011):** Chapter 7: Navigation and Mapping. This chapter will likely introduce the concepts of path planning and different representation methods.
*   **La Valle (2009):** Chapters 1 & 2: Introduction to Planning and State-Space Representation. This is a core text for planning algorithms, providing a strong theoretical foundation.

## 2. Map-Based Path Planning: Overview

Map-based path planning relies on having a prior or acquired map of the environment. The map provides the robot with information about traversable areas and obstacles.

**Types of Maps:**

*   **Occupancy Grids:** The environment is divided into a grid of cells, where each cell represents a probability of being occupied or free. (Refer to Siegwart & Nourbakhsh, 2011, Chapter 7 for details on grid maps).
*   **Topological Maps:** Represent the environment as a graph where nodes represent significant locations (e.g., rooms, intersections) and edges represent connectivity.
*   **Feature-Based Maps:** Rely on detecting and localizing against distinct environmental features (e.g., corners, doors).
*   **Geometric Maps:** Represent obstacles as geometric primitives (e.g., polygons, circles).

**Why Dijkstra's Algorithm?**

Dijkstra's algorithm is a well-established graph search algorithm used to find the shortest path between two nodes in a graph. It is particularly suited for **map-based path planning** when the environment can be represented as a graph where:

*   **Nodes:** Represent states or locations in the environment (e.g., grid cells, waypoints).
*   **Edges:** Represent possible movements or transitions between nodes.
*   **Edge Weights:** Represent the cost of traversing that edge (e.g., distance, time, energy).

Dijkstra's algorithm guarantees finding the shortest path in a graph with non-negative edge weights. This aligns with finding the shortest path in a grid or a configuration space.

**Textbook References:**

*   **La Valle (2009):** Chapter 3: Graph Searching. This chapter will delve into fundamental graph search algorithms, including Dijkstra's.
*   **Corke (2011):** Chapter 9: Path Planning. Likely to discuss graph-based methods and potentially Dijkstra's in the context of MATLAB implementation.

## 3. Dijkstra's Algorithm: Fundamentals

Dijkstra's algorithm is a greedy algorithm that systematically explores a graph to find the shortest path from a source node to all other reachable nodes.

**Key Concepts:**

*   **Graph:** A set of vertices (nodes) connected by edges.
*   **Weighted Graph:** A graph where each edge has an associated numerical weight.
*   **Source Node (Start):** The starting point of the path.
*   **Destination Node (Goal):** The target point of the path.
*   **Cost:** The accumulated weight along a path.
*   **Priority Queue:** A data structure that allows efficient retrieval of the element with the smallest value (in this case, the node with the smallest accumulated cost).

**Algorithm Steps:**

1.  **Initialization:**
    *   Assign a distance of infinity ($\infty$) to all nodes except the source node, which has a distance of 0.
    *   Maintain a set of visited nodes (initially empty).
    *   Maintain a set of unvisited nodes (initially all nodes).
    *   Store the predecessor of each node to reconstruct the path later.

2.  **Iteration:**
    *   While the set of unvisited nodes is not empty:
        *   Select the unvisited node with the smallest current distance. Let this be node $u$.
        *   Mark node $u$ as visited.
        *   If $u$ is the destination node, terminate.
        *   For each neighbor $v$ of node $u$:
            *   Calculate the tentative distance to $v$ through $u$: $distance(u) + weight(u, v)$.
            *   If this tentative distance is less than the current distance to $v$:
                *   Update the distance to $v$.
                *   Set the predecessor of $v$ to $u$.

3.  **Path Reconstruction:**
    *   If the destination node was reached, trace back from the destination to the source using the predecessor information to reconstruct the shortest path.

**Data Structures Used:**

*   **Distance Array/Map:** Stores the current shortest distance from the source to each node.
*   **Predecessor Array/Map:** Stores the node that precedes each node on the shortest path.
*   **Priority Queue:** Stores unvisited nodes, ordered by their current shortest distance.

**Important Note:** Dijkstra's algorithm requires all edge weights to be non-negative.

**Textbook References:**

*   **La Valle (2009):** Chapter 3.1: Dijkstra's Algorithm. This will provide the detailed mathematical formulation and proofs.
*   **Corke (2011):** Chapter 9.2: Graph Search Algorithms. Likely to present Dijkstra's algorithm with a practical slant, possibly with MATLAB examples.

## 4. Applying Dijkstra's to Map-Based Path Planning

### 4.1 Grid-Based Path Planning

**Representation:** An occupancy grid is a common and effective representation for applying Dijkstra's.

*   **Nodes:** Each traversable cell in the grid is a node.
*   **Edges:** Edges connect adjacent traversable cells.
    *   **4-connectivity:** Edges connect cells horizontally and vertically.
    *   **8-connectivity:** Edges connect cells horizontally, vertically, and diagonally.
*   **Edge Weights:**
    *   **Distance:**
        *   For horizontal/vertical moves (4-connectivity): 1 (or the grid cell size).
        *   For diagonal moves (8-connectivity): $\sqrt{2}$ (or $\sqrt{2} \times$ grid cell size).
    *   **Cost of Traversing Obstacles:** Typically, moving into an obstacle cell is assigned an infinite cost, preventing it from being part of a valid path.

**Example Scenario:**

Consider a simple grid map where 'S' is the start, 'G' is the goal, '#' is an obstacle, and '.' is free space.

```
S . . # .
. # . . .
. . . # G
```

**Applying Dijkstra's:**

1.  **Initialization:**
    *   `dist(S) = 0`, `dist(all other cells) = infinity`
    *   `pred(all cells) = null`
    *   Priority Queue `PQ = {S}`

2.  **Iteration 1:**
    *   Extract `S` from `PQ`. Mark `S` visited.
    *   Neighbors of `S`: `(0,1)` and `(1,0)`.
    *   Update `dist((0,1)) = 1`, `pred((0,1)) = S`. Add `(0,1)` to `PQ`.
    *   Update `dist((1,0)) = 1`, `pred((1,0)) = S`. Add `(1,0)` to `PQ`.
    *   `PQ = {(0,1), (1,0)}`

3.  **Iteration 2:**
    *   Extract `(0,1)` (assuming it has the lower distance, if equal, either is fine). Mark `(0,1)` visited.
    *   Neighbors of `(0,1)`: `S` (visited), `(0,2)`, `(1,1)` (obstacle).
    *   `dist((0,2))` through `(0,1)`: `dist((0,1)) + 1 = 1 + 1 = 2`. Update `dist((0,2)) = 2`, `pred((0,2)) = (0,1)`. Add `(0,2)` to `PQ`.
    *   `(1,1)` is an obstacle, so it's ignored.
    *   `PQ = {(1,0), (0,2)}`

... and so on. The algorithm continues until 'G' is extracted.

**Path Reconstruction:** Once 'G' is reached, trace back using predecessors. If `pred(G) = (2,3)`, `pred((2,3)) = (1,3)`, `pred((1,3)) = (1,2)`, `pred((1,2)) = (0,2)`, `pred((0,2)) = (0,1)`, `pred((0,1)) = S`, the path would be `S -> (0,1) -> (0,2) -> (1,2) -> (1,3) -> G`.

**Textbook References:**

*   **Siegwart & Nourbakhsh (2011):** Chapter 7.2: Path Planning. Likely to discuss grid-based path planning and algorithms like Dijkstra's in this context.
*   **Corke (2011):** Chapter 9.3: Grid-Based Path Planning. Expect detailed examples and potentially MATLAB code.

### 4.2 Considerations for Real-World Robots

*   **Configuration Space (C-space):** For robots with non-zero dimensions (e.g., a wheeled robot), path planning often occurs in configuration space, which represents all possible configurations (positions and orientations) of the robot. Dijkstra's can be applied to a discretized C-space.
*   **Real-time vs. Pre-computation:** Dijkstra's can be used for pre-computed paths (if the map is static) or incrementally updated for dynamic environments.
*   **Heuristics (A* Algorithm):** While Dijkstra's guarantees optimality, it can be slow. For faster path finding, especially in large environments, informed search algorithms like A* (which uses a heuristic) are often preferred. A* is an extension of Dijkstra's.
*   **Robot Kinematics and Dynamics:** The planned path must be executable by the robot. Dijkstra's itself doesn't consider these; a separate path following controller is needed. However, edge weights can be adjusted to incorporate these factors (e.g., cost of turning).
*   **Local vs. Global Planning:** Dijkstra's is a global path planning algorithm. It finds a path from start to goal based on the entire map. Local planning deals with immediate obstacle avoidance.

**Textbook References:**

*   **La Valle (2009):** Chapter 4: Configuration Space. Essential for understanding how robot geometry affects path planning.
*   **Siegwart & Nourbakhsh (2011):** Chapter 8: Motion Control. This chapter will likely cover path following and how planned paths are executed.
*   **Thrun, Burgard, & Fox (2005):** Chapters 1 & 10: Introduction to Robotics, Motion Planning. This reference provides a broader perspective on robotics, including planning within the context of sensing and control.

## 5. Dijkstra's Algorithm Implementation Details

**Pseudocode:**

```
function Dijkstra(Graph, start_node, goal_node):
    distances = {}  // Stores distance from start_node to each node
    predecessors = {} // Stores predecessor of each node on the shortest path
    priority_queue = PriorityQueue() // Min-heap based on distance

    // Initialization
    for each node v in Graph:
        distances[v] = infinity
        predecessors[v] = null
    distances[start_node] = 0
    priority_queue.push(start_node, 0) // (node, distance)

    while not priority_queue.is_empty():
        current_node, current_distance = priority_queue.pop()

        // If we have already found a shorter path to current_node, skip
        if current_distance > distances[current_node]:
            continue

        // If goal is reached, reconstruct path and return
        if current_node == goal_node:
            path = []
            temp = goal_node
            while temp is not null:
                path.insert(0, temp)
                temp = predecessors[temp]
            return path

        // Explore neighbors
        for each neighbor v of current_node:
            edge_weight = Graph.get_edge_weight(current_node, v)
            tentative_distance = distances[current_node] + edge_weight

            if tentative_distance < distances[v]:
                distances[v] = tentative_distance
                predecessors[v] = current_node
                priority_queue.push(v, tentative_distance)

    return "No path found" // If loop finishes without reaching goal
```

**Complexity:**

*   **Time Complexity:**
    *   Using a binary heap for the priority queue: $O((E + V) \log V)$, where $V$ is the number of vertices and $E$ is the number of edges.
    *   In a grid graph with $N \times M$ cells, $V = NM$. For 4-connectivity, $E \approx 4NM$. For 8-connectivity, $E \approx 8NM$. So, complexity is roughly $O(NM \log(NM))$.
*   **Space Complexity:** $O(V)$ or $O(NM)$ to store distances and predecessors.

**Important Considerations for Implementation:**

*   **Handling Infinity:** Use a very large number or a specific infinity representation.
*   **Priority Queue Efficiency:** A Fibonacci heap can improve theoretical complexity to $O(E + V \log V)$, but binary heaps are often more practical due to lower constant factors.
*   **Grid Indexing:** Efficiently mapping grid coordinates (row, col) to node identifiers is crucial.

**Textbook References:**

*   **Corke (2011):** Chapter 9.2.1: Dijkstra's Algorithm. Provides pseudocode and potentially MATLAB implementations.
*   **La Valle (2009):** Chapter 3.1.2: Implementation. Discusses practical implementation aspects.

## 6. Practice Questions and Exercises

**Question 1 (Conceptual):**

Explain why Dijkstra's algorithm is suitable for map-based path planning in a grid environment. What are the key components of the grid that are mapped to graph elements?

**Answer 1:**

Dijkstra's algorithm is suitable because it finds the shortest path in a graph with non-negative edge weights. In grid-based path planning, the grid cells represent **nodes** in the graph, and the traversable connections between adjacent cells represent **edges**. The **edge weights** can be defined as the cost of moving between cells, typically the distance (e.g., 1 for orthogonal moves, $\sqrt{2}$ for diagonal moves). Obstacle cells are effectively removed from the graph by assigning them infinite edge weights or not creating edges to them.

**Question 2 (Application):**

Consider the following grid. 'S' is the start, 'G' is the goal, '#' is an obstacle, and '.' is free space. Assume 4-connectivity and a cost of 1 for each move. Trace the execution of Dijkstra's algorithm and show the `distances` and `predecessors` at each step until the goal is reached.

```
S . #
. . G
# . .
```

**Answer 2:**

Let's denote cells by `(row, col)` starting from `(0,0)`.

**Initial State:**
*   `distances = {(0,0): 0, (0,1): inf, (0,2): inf, (1,0): inf, (1,1): inf, (1,2): inf, (2,0): inf, (2,1): inf, (2,2): inf}`
*   `predecessors = {all: null}`
*   `PQ = {(0,0): 0}`

**Step 1:**
*   Extract `(0,0)` (dist 0). Mark visited.
*   Neighbors of `(0,0)`: `(0,1)` (cost 1), `(1,0)` (cost 1). `(0,2)` is '#', `(2,0)` is '#'.
*   `distances[(0,1)] = 1`, `predecessors[(0,1)] = (0,0)`. Add `(0,1)` to PQ.
*   `distances[(1,0)] = 1`, `predecessors[(1,0)] = (0,0)`. Add `(1,0)` to PQ.
*   `PQ = {(0,1): 1, (1,0): 1}`

**Step 2:**
*   Extract `(0,1)` (dist 1). Mark visited.
*   Neighbors of `(0,1)`: `(0,0)` (visited), `(1,1)` (cost 1). `(0,2)` is '#'.
*   `tentative_dist((1,1)) = distances[(0,1)] + 1 = 1 + 1 = 2`.
*   `distances[(1,1)] = 2`, `predecessors[(1,1)] = (0,1)`. Add `(1,1)` to PQ.
*   `PQ = {(1,0): 1, (1,1): 2}`

**Step 3:**
*   Extract `(1,0)` (dist 1). Mark visited.
*   Neighbors of `(1,0)`: `(0,0)` (visited), `(1,1)` (cost 1), `(2,0)` ('#').
*   `tentative_dist((1,1)) = distances[(1,0)] + 1 = 1 + 1 = 2`.
*   Current `distances[(1,1)]` is 2. This is not less than 2, so no update.
*   `PQ = {(1,1): 2}`

**Step 4:**
*   Extract `(1,1)` (dist 2). Mark visited.
*   Neighbors of `(1,1)`: `(0,1)` (visited), `(1,0)` (visited), `(1,2)` (cost 1), `(2,1)` (cost 1).
*   `tentative_dist((1,2)) = distances[(1,1)] + 1 = 2 + 1 = 3`.
*   `distances[(1,2)] = 3`, `predecessors[(1,2)] = (1,1)`. Add `(1,2)` to PQ.
*   `tentative_dist((2,1)) = distances[(1,1)] + 1 = 2 + 1 = 3`.
*   `distances[(2,1)] = 3`, `predecessors[(2,1)] = (1,1)`. Add `(2,1)` to PQ.
*   `PQ = {(1,2): 3, (2,1): 3}`

**Step 5:**
*   Extract `(1,2)` (dist 3). Mark visited. This is the Goal 'G'!
*   Reconstruct path: `(1,2)` -> `predecessors[(1,2)]=(1,1)` -> `predecessors[(1,1)]=(0,1)` -> `predecessors[(0,1)]=(0,0)`.
*   Path: `(0,0) -> (0,1) -> (1,1) -> (1,2)`

**Final `distances`:**
*   `distances = {(0,0): 0, (0,1): 1, (0,2): inf, (1,0): 1, (1,1): 2, (1,2): 3, (2,0): inf, (2,1): 3, (2,2): inf}`

**Question 3 (Extension - A*):**

If you were to use A* search for the same grid, what would be a suitable heuristic function? How would it affect the search compared to Dijkstra's?

**Answer 3:**

A suitable heuristic for A* search on a grid would be the **Manhattan distance** or the **Euclidean distance** between the current cell and the goal cell.

*   **Manhattan Distance:** $|x_1 - x_2| + |y_1 - y_2|$ (for 4-connectivity)
*   **Euclidean Distance:** $\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$ (can be used for both 4 and 8-connectivity)

A* prioritizes nodes that are not only closer to the start (like Dijkstra's) but also closer to the goal. This **"informed search"** tends to explore fewer nodes and find the goal faster, especially in larger or more complex environments. If the heuristic is **admissible** (never overestimates the cost to reach the goal) and **consistent**, A* guarantees finding the shortest path. For grid pathfinding with uniform step costs, both Manhattan and Euclidean distances are admissible.

**Important Point to Remember:** Dijkstra's algorithm explores outwards uniformly from the start node, while A* "guides" the search towards the goal using the heuristic.

## 7. Summary and Key Takeaways

*   **Dijkstra's algorithm** is a foundational algorithm for finding the shortest path in a graph with non-negative edge weights.
*   It is widely applicable in **map-based path planning** for mobile robots, especially when using **occupancy grids**.
*   The algorithm iteratively expands from the start node, always selecting the unvisited node with the smallest known distance from the start.
*   Key data structures include a **priority queue** to efficiently select the next node to visit and structures to store **distances** and **predecessors**.
*   The time complexity is generally $O((E+V) \log V)$ using a binary heap.
*   For real-world applications, consider grid resolution, connectivity (4 vs. 8), and the need for more advanced algorithms like A* for efficiency.
*   Dijkstra's provides a **global plan**, which then needs to be executed by a path following controller.

**Alignment with Course Outcomes:**

*   **CO5 (Perform navigation and path planning):** Directly addressed by understanding and applying Dijkstra's for path planning.
*   **CO6 (Control the mobile robots to follow different paths):** Understanding path planning is a prerequisite for path following. Dijkstra's provides a sequence of waypoints or a grid path that needs to be tracked.

This concludes the study notes on Dijkstra's algorithm for map-based path planning in mobile robotics. Remember to refer to the provided textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
