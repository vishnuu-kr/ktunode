---
title: "A* algorithms"
subject: "ROBOTICS"
module: "Module 4: Trajectory Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446425c"
status: "completed"
scrapedAt: "2026-05-20T18:18:54.434Z"
---
# ROBOTICS: Module 4: Trajectory Planning - A* Algorithms

## 1. Introduction to Trajectory Planning

Trajectory planning is a fundamental aspect of robotics that involves determining a sequence of movements for a robot to reach a desired goal state from a starting state. This involves defining the path the robot's end-effector or base should follow over time, considering various constraints and objectives.

**Key Concepts:**

*   **State:** A description of the robot's configuration at a specific point in time (e.g., joint angles, end-effector position and orientation).
*   **Path:** A geometric sequence of states in the configuration space or task space.
*   **Trajectory:** A path that is parameterized by time, specifying the position, velocity, and acceleration of the robot at each instant.
*   **Configuration Space (C-space):** The space of all possible configurations of the robot. For a robot with 'n' degrees of freedom (DOF), the C-space is an n-dimensional space.
*   **Task Space:** The space where the robot's end-effector operates (e.g., 3D Cartesian space).
*   **Obstacles:** Regions in C-space or task space that the robot must avoid.
*   **Goal State:** The desired final configuration of the robot.
*   **Start State:** The initial configuration of the robot.

**Relevance to Course Outcomes:**

*   **CO3:** "Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion (Knowledge Level: K4, K5)" - A* algorithms are a core method for achieving this by finding optimal paths in the presence of obstacles.

**Textbook References:**

*   **Craig (2002):** Chapter 7, "Path and Trajectory Generation," discusses the fundamental concepts of generating paths and trajectories for robot manipulators.
*   **Siegwart et al. (2nd Ed.):** Chapter 8, "Path Planning," and Chapter 9, "Motion Planning," are highly relevant for mobile robots and general path planning strategies, including A*.

## 2. Fundamentals of A* Search Algorithm

The A* (pronounced "A-star") search algorithm is a popular and efficient graph traversal and pathfinding algorithm. It finds the shortest path between a start node and a goal node in a graph. A* is an informed search algorithm, meaning it uses a heuristic function to guide its search towards the goal.

**Core Components of A*:**

*   **Nodes:** Represent states in the search space (e.g., robot configurations).
*   **Edges:** Represent transitions between states (e.g., robot movements).
*   **Cost Function `f(n)`:** The estimated total cost of the path from the start node to the goal node through node `n`. It is calculated as:
    `f(n) = g(n) + h(n)`
    where:
    *   `g(n)`: The actual cost of the path from the start node to node `n`.
    *   `h(n)`: A heuristic function that estimates the cost from node `n` to the goal node.
*   **Open List (or Frontier):** A data structure (typically a priority queue) that stores nodes that have been discovered but not yet fully explored. Nodes are prioritized based on their `f(n)` value.
*   **Closed List:** A data structure that stores nodes that have already been fully explored.

**How A* Works:**

1.  **Initialization:**
    *   Start with the initial node `s`.
    *   Initialize `g(s) = 0` and `h(s)` with the heuristic estimate from `s` to the goal.
    *   Calculate `f(s) = g(s) + h(s)`.
    *   Add `s` to the Open List.
    *   Initialize the Closed List as empty.

2.  **Iteration:**
    *   While the Open List is not empty:
        *   Select the node `n` from the Open List with the lowest `f(n)` value.
        *   If `n` is the goal node, reconstruct the path and terminate.
        *   Remove `n` from the Open List and add it to the Closed List.
        *   For each neighbor `m` of node `n`:
            *   If `m` is in the Closed List, skip it.
            *   Calculate the tentative `g` value for `m`: `tentative_g = g(n) + cost(n, m)`, where `cost(n, m)` is the cost of moving from `n` to `m`.
            *   If `m` is not in the Open List or `tentative_g < g(m)`:
                *   Set `parent(m) = n`.
                *   Set `g(m) = tentative_g`.
                *   Calculate `f(m) = g(m) + h(m)`.
                *   If `m` is not in the Open List, add it. Otherwise, update its position in the Open List.

**Key Properties of A*:**

*   **Optimality:** If the heuristic function `h(n)` is admissible (never overestimates the actual cost to the goal), then A* is guaranteed to find the shortest path.
*   **Completeness:** If there is a path from the start to the goal, and the state space is finite or the branching factor is finite, A* will find it.

**Textbook References:**

*   **Siegwart et al. (2nd Ed.):** Chapter 8, "Path Planning," likely provides a detailed explanation of search algorithms like A* and their application in robotics.
*   **Ghosal (2005):** While not explicitly mentioning A* by name, concepts of state-space search and cost minimization for path planning are discussed.

## 3. A* in Robotic Contexts

In robotics, A* is primarily used for **motion planning**, which involves finding a collision-free path for a robot to move from a start configuration to a goal configuration.

**1. Discretization of the Configuration Space:**

Since the configuration space of a robot is often continuous, A* operates on a discretized representation of this space. This is typically achieved by dividing the C-space into a grid of cells.

*   **Grid-based Path Planning:**
    *   The C-space is discretized into a grid of nodes.
    *   Each node in the grid represents a specific robot configuration (e.g., a set of joint angles or a position/orientation in task space).
    *   Edges connect adjacent nodes in the grid, representing feasible movements of the robot.
    *   **Occupancy Grid:** A common representation where the environment is divided into cells, each marked as occupied (obstacle), free, or unknown.

**2. Defining the Search Space:**

*   **Joint Space A*:** The search is performed directly in the robot's joint space. Each node represents a set of joint angles.
    *   **Advantages:** Directly plans for joint movements, which can be easier to control.
    *   **Disadvantages:** Obstacle avoidance in joint space can be complex, as a collision in task space might not have a direct or obvious representation in joint space.
*   **Task Space A*:** The search is performed in the robot's operational space (e.g., Cartesian space for the end-effector). Each node represents the end-effector's position and orientation.
    *   **Advantages:** Easier to define and detect collisions in task space.
    *   **Disadvantages:** Requires solving the inverse kinematics for each planned task space waypoint to obtain the corresponding joint space commands, which can be computationally expensive and may lead to singularity issues.
*   **Hybrid Approaches:** Combining joint and task space planning.

**3. Heuristic Functions for Robotics:**

The choice of heuristic function is crucial for the efficiency of A*.

*   **Euclidean Distance:** For task space planning, the straight-line distance between the current end-effector position and the goal position.
    *   `h(n) = || P_n - P_goal ||`
    *   **Admissibility:** Yes, as it assumes a direct path without obstacles.
*   **Manhattan Distance:** For grid-based planning, the sum of the absolute differences in coordinates between the current node and the goal node.
    *   `h(n) = |x_n - x_goal| + |y_n - y_goal|` (in 2D)
    *   **Admissibility:** Yes, assuming movement is restricted to grid lines.
*   **Chebyshev Distance:** Similar to Manhattan but considers diagonal movements.
    *   `h(n) = max(|x_n - x_goal|, |y_n - y_goal|)` (in 2D)
    *   **Admissibility:** Yes.
*   **Distance to Nearest Obstacle:** This can sometimes be used to guide the search away from known obstacles.
*   **Zero Heuristic (`h(n) = 0`):** This turns A* into Dijkstra's algorithm, which finds the shortest path but is less efficient than A* with a good heuristic.

**4. Cost Function `g(n)` in Robotics:**

The `g(n)` value typically represents the actual accumulated cost to reach a node.

*   **Distance Traveled:** The length of the path taken to reach the current configuration.
*   **Time Taken:** The time elapsed to reach the current configuration.
*   **Energy Consumed:** An estimate of the energy required for the robot's movement.
*   **Joint Velocity/Acceleration Limits:** Incorporating these constraints into the cost function can lead to smoother and more feasible trajectories.

**5. Obstacle Avoidance:**

A* inherently handles obstacle avoidance by assigning an infinite cost to any node that lies within an obstacle. When exploring neighbors, any neighbor that is in an occupied cell is not considered or is assigned an extremely high cost, effectively preventing the algorithm from choosing such paths.

**Textbook References:**

*   **Siegwart et al. (2nd Ed.):** Chapter 8, "Path Planning," will detail the application of A* on grids and how occupancy grids are used for obstacle representation.
*   **Craig (2002):** While not focusing on A* specifically, Chapter 7 touches upon path planning considerations, including the need to avoid obstacles and the differences between joint space and task space planning.
*   **Deb (2nd Ed.):** Likely discusses path planning strategies for automated manufacturing and flexible automation, where obstacle avoidance is critical.

## 4. Practical Considerations and Enhancements

*   **State Representation:** Choosing an appropriate state representation (e.g., joint angles, end-effector pose, robot's footprint) is crucial.
*   **Grid Resolution:** The resolution of the discretized C-space significantly impacts performance and accuracy. A finer grid leads to more accurate paths but higher computational cost. A coarser grid is faster but may miss narrow passages or result in suboptimal paths.
*   **Computational Complexity:** For high-DOF robots, the C-space can become very large, making grid-based A* computationally expensive.
*   **Dynamic Environments:** A* is primarily for static environments. For dynamic environments with moving obstacles, re-planning or more advanced algorithms like Dynamic Window Approach (DWA) or Velocity Obstacles are often preferred.
*   **Path Smoothing:** The raw path generated by grid-based A* can be jerky. Post-processing steps like spline interpolation or B-splines are used to generate smoother trajectories.
*   **Memory Usage:** The Open and Closed lists can consume significant memory, especially in large state spaces.
*   **Heuristic Function Design:** A good heuristic significantly improves A*'s performance. It should be informative but also admissible.
*   **Alternative A* Variants:**
    *   **Weighted A*:** Introduces a weight `w > 1` to the heuristic `f(n) = g(n) + w * h(n)`. This speeds up the search by prioritizing nodes closer to the goal but sacrifices optimality.
    *   **Iterative Deepening A* (IDA*):** A memory-efficient version that uses depth-limited search.
    *   **Jump Point Search (JPS):** An optimization for grid-based A* that prunes many unnecessary nodes, significantly improving performance.

**Textbook References:**

*   **Siegwart et al. (2nd Ed.):** Chapter 9, "Motion Planning," will likely discuss various motion planning algorithms, their trade-offs, and practical considerations.
*   **Lynch & Park (2017):** Their book "Modern Robotics Mechanics, Planning and Control" provides in-depth coverage of motion planning techniques, including sampling-based methods and optimal control, which complement A* and address some of its limitations.
*   **Siciliano et al. (2008):** "Robotics Modelling, Planning and Control" offers a comprehensive treatment of planning, including trajectory generation and obstacle avoidance strategies.

## 5. Example Scenario: A* for a 2D Mobile Robot

Consider a simple 2D mobile robot operating in an environment with obstacles.

*   **Environment:** A 2D grid map where cells are either free or occupied by an obstacle.
*   **Robot State:** (x, y) coordinates on the grid.
*   **Start State:** (x_start, y_start)
*   **Goal State:** (x_goal, y_goal)
*   **Movements:** The robot can move to adjacent cells (up, down, left, right) or diagonally.

**A* Implementation:**

1.  **Grid Discretization:** The environment is already represented as a grid. Each grid cell is a node.
2.  **Heuristic Function:** Manhattan distance is a good admissible heuristic here.
    `h(n) = |n.x - goal.x| + |n.y - goal.y|`
3.  **Cost Function `g(n)`:** The number of steps taken from the start node to node `n`. Moving to an adjacent cell (horizontally or vertically) costs 1. Moving diagonally costs $\sqrt{2} \approx 1.414$.
4.  **`f(n) = g(n) + h(n)`**

**Algorithm Steps:**

*   **Start:** Place the start node `s` in the Open List with `g(s) = 0` and `f(s) = h(s)`.
*   **Loop:**
    *   Extract the node `n` with the lowest `f` value from the Open List.
    *   If `n` is the goal, reconstruct the path.
    *   Add `n` to the Closed List.
    *   For each valid (free, not in Closed List) neighbor `m` of `n`:
        *   Calculate `tentative_g = g(n) + cost(n, m)`.
        *   If `m` is not in Open List or `tentative_g < g(m)`:
            *   Set `parent(m) = n`, `g(m) = tentative_g`, `f(m) = g(m) + h(m)`.
            *   Add `m` to Open List.

**Example Walkthrough:**

Let's say we have a simple grid:

```
S . .
# X .
. . G
```

Where `S` is start, `G` is goal, `.` is free space, and `#` is an obstacle.

*   Start at `S` (0,0). Goal at `G` (2,2). Obstacle at (1,0).
*   `h(S) = |0-2| + |0-2| = 4`. `f(S) = 0 + 4 = 4`. Open List: `{(S, f=4)}`.
*   Extract `S`. Neighbors: `(0,1)`, `(1,1)` (diagonal), `(1,0)` (obstacle).
*   Consider `(0,1)`: `g((0,1)) = 1`. `h((0,1)) = |0-2| + |1-2| = 3`. `f((0,1)) = 1 + 3 = 4`. Open List: `{(0,1, f=4)}`.
*   Consider `(1,1)`: `g((1,1)) = 1.414`. `h((1,1)) = |1-2| + |1-2| = 2`. `f((1,1)) = 1.414 + 2 = 3.414`. Open List: `{(1,1, f=3.414), (0,1, f=4)}`.
*   Extract `(1,1)`. Neighbors: `(0,1)`, `(0,2)`, `(1,2)`, `(2,2)` (Goal), `(2,1)`, `(2,0)`, `(1,0)` (obstacle), `(0,0)` (visited).
*   Consider `(2,2)` (Goal): `g((2,2)) = g((1,1)) + cost((1,1), (2,2)) = 1.414 + 1.414 = 2.828`. `h((2,2)) = 0`. `f((2,2)) = 2.828`. Path found!

The path would be `S -> (1,1) -> G`.

**Textbook References:**

*   **Siegwart et al. (2nd Ed.):** Chapter 8 provides many examples of A* on grid maps for mobile robots.

## 6. A* for Robot Manipulators (Joint Space)

Planning for robot manipulators often involves navigating the joint space, which is a multi-dimensional space where each dimension corresponds to a joint angle.

*   **C-space Representation:** A grid in the joint space. For a 3-DOF arm, this would be a 3D grid.
*   **State:** A vector of joint angles `q = [q1, q2, ..., qn]`.
*   **Obstacles:** The challenge is mapping task-space obstacles into the joint space. A configuration `q` is considered an obstacle if the robot's end-effector or any part of its links collides with an obstacle in the environment when it's in that configuration. This mapping can be done using the robot's forward kinematics.
*   **Heuristic Function:**
    *   **Joint Space Distance:** Euclidean distance in the joint space between the current configuration and the goal configuration.
        `h(q) = || q - q_goal ||`
        This is admissible as long as joint movements are not restricted by configurations leading to collisions.
*   **Cost Function `g(n)`:**
    *   Can be the sum of joint angle displacements between consecutive nodes.
    *   Can also incorporate joint velocity or acceleration limits to favor smoother trajectories.

**Example:** A 2-DOF planar robot arm.
The C-space is a 2D plane (q1, q2). Obstacles in the task space are mapped into forbidden regions in this (q1, q2) plane. A* searches for a path from `(q1_start, q2_start)` to `(q1_goal, q2_goal)` avoiding these forbidden regions.

**Textbook References:**

*   **Craig (2002):** Chapter 7 discusses planning in joint space and the importance of collision checking, which is essential for mapping obstacles to C-space.
*   **Saha (2017):** Likely covers joint space trajectory generation and collision avoidance.

## 7. Alignment with Course Outcomes

*   **CO1: Familiarise with anatomy, specifications and types of Robots (Knowledge Level: K2)**
    *   While A* itself doesn't directly address anatomy or types, understanding the robot's DOFs is crucial for defining the C-space and its dimensionality, which is fundamental to A* planning.
*   **CO2: Obtain forward and inverse kinematic models of robotic manipulators (Knowledge Level: K3)**
    *   Forward kinematics is essential for mapping task-space obstacles into C-space for manipulator planning. A* relies on this mapping. Inverse kinematics can be used to verify if a planned path in C-space corresponds to feasible end-effector movements.
*   **CO3: Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion (Knowledge Level: K4, K5)**
    *   **This is the primary outcome addressed by A*.** A* directly enables planning in both joint and Cartesian spaces by searching through discretized configurations and avoiding obstacles. The algorithm's core function is to find optimal collision-free paths.
*   **CO4: Develop a dynamic model and design the controller for robotic manipulators (Knowledge Level: K4, K6)**
    *   A* generates a path. To convert this path into a trajectory suitable for control, one would then need to consider the robot's dynamic model to generate velocity and acceleration profiles that respect motor capabilities and avoid instability. The path from A* serves as the input for this trajectory generation and control design.
*   **CO5: Choose the appropriate Robotic configuration and list the technical specifications for robots used in different application (Knowledge Level: K4)**
    *   The complexity of trajectory planning (and thus the suitability of A*) can influence the choice of robot configuration. For example, robots with fewer DOFs might have simpler C-spaces, making A* more feasible. The need for efficient path planning in dynamic environments might steer towards configurations that are easier to plan for.

## 8. Practice Questions and Answers

**Question 1:**

What are the two main components of the cost function `f(n)` in the A* algorithm, and what do they represent?

**Answer:**
The two main components are:
1.  `g(n)`: The actual cost of the path from the start node to node `n`. It represents the cost incurred so far to reach the current state.
2.  `h(n)`: The heuristic function, which estimates the cost from node `n` to the goal node. It represents the estimated future cost to reach the goal.

**Question 2:**

Under what condition is the A* algorithm guaranteed to find the shortest path?

**Answer:**
The A* algorithm is guaranteed to find the shortest path if its heuristic function `h(n)` is **admissible**. An admissible heuristic never overestimates the actual cost to reach the goal.

**Question 3:**

When planning a trajectory for a robot manipulator in joint space using A*, how are obstacles in the task space typically handled?

**Answer:**
Obstacles in the task space are mapped into the configuration space (joint space). A configuration `q` is marked as an obstacle (or assigned an infinite cost) if the robot's links or end-effector collide with a task-space obstacle when the robot is in that joint configuration. This mapping is achieved using the robot's forward kinematics.

**Question 4:**

Discuss a potential drawback of using a very fine grid resolution for A* path planning in robotics.

**Answer:**
A very fine grid resolution leads to a much larger number of nodes in the search space. This significantly increases:
*   **Computational time:** The algorithm needs to explore and manage many more nodes.
*   **Memory usage:** The Open and Closed lists become much larger.
For high-DOF robots, this can make grid-based A* computationally infeasible.

**Question 5 (Exercise):**

Consider a simple 3x3 grid where 'S' is the start at (0,0), 'G' is the goal at (2,2), and 'X' represents an obstacle at (1,1). The robot can move horizontally, vertically, and diagonally. Use the Manhattan distance heuristic. Calculate the `f(n)` values for the first few nodes explored by A* and determine the next node to be expanded.

```
S . .
. X .
. . G
```

**Answer:**

*   **Start Node (S):** (0,0)
    *   `g(S) = 0`
    *   `h(S) = |0-2| + |0-2| = 4`
    *   `f(S) = 0 + 4 = 4`
    *   Open List: `{(0,0, f=4)}`

*   **Expand (0,0):**
    *   Neighbors: (0,1), (1,0), (1,1) (obstacle)

    *   **Node (0,1):**
        *   `g(0,1) = g(0,0) + cost((0,0), (0,1)) = 0 + 1 = 1` (horizontal move)
        *   `h(0,1) = |0-2| + |1-2| = 2 + 1 = 3`
        *   `f(0,1) = 1 + 3 = 4`
        *   Open List: `{(0,1, f=4)}`

    *   **Node (1,0):**
        *   `g(1,0) = g(0,0) + cost((0,0), (1,0)) = 0 + 1 = 1` (vertical move)
        *   `h(1,0) = |1-2| + |0-2| = 1 + 2 = 3`
        *   `f(1,0) = 1 + 3 = 4`
        *   Open List: `{(0,1, f=4), (1,0, f=4)}`

    *   **Node (1,1):** This is an obstacle ('X'), so it's not added to the Open List.

*   **Next Node to Expand:** From the Open List `{(0,1, f=4), (1,0, f=4)}`, both nodes have the same `f` value. A* can pick either. Let's say it picks **(0,1)**.
    *   Closed List: `{(0,0)}`
    *   Open List: `{(1,0, f=4)}`

*   **Expand (0,1):**
    *   Neighbors: (0,0) (closed), (1,0) (in open list), (0,2), (1,2)

    *   **Node (1,0):**
        *   `tentative_g(1,0) = g(0,1) + cost((0,1), (1,0)) = 1 + sqrt(2) approx 2.414`
        *   Current `g(1,0)` is 1. Since `tentative_g > g(1,0)`, we don't update it.

    *   **Node (0,2):**
        *   `g(0,2) = g(0,1) + cost((0,1), (0,2)) = 1 + 1 = 2`
        *   `h(0,2) = |0-2| + |2-2| = 2 + 0 = 2`
        *   `f(0,2) = 2 + 2 = 4`
        *   Open List: `{(1,0, f=4), (0,2, f=4)}`

    *   **Node (1,2):**
        *   `g(1,2) = g(0,1) + cost((0,1), (1,2)) = 1 + sqrt(2) approx 2.414`
        *   `h(1,2) = |1-2| + |2-2| = 1 + 0 = 1`
        *   `f(1,2) = 2.414 + 1 = 3.414`
        *   Open List: `{(1,0, f=4), (0,2, f=4), (1,2, f=3.414)}`

The next node to expand would be **(1,2)** due to its lowest `f` value (3.414).

## 9. Important Points to Remember

*   A* is an **informed search algorithm** that uses a heuristic to guide its search.
*   It guarantees optimality if the heuristic is **admissible**.
*   It requires a **discretized state space** (often a grid) for practical implementation in robotics.
*   The choice of heuristic and cost function significantly impacts performance.
*   For robot manipulators, obstacles in task space must be transformed into the configuration space.
*   A* is primarily for **static environments** and can be computationally intensive for high-DOF robots or large environments.
*   Path smoothing is often a necessary post-processing step.
*   A* finds a path; converting this path to a time-parameterized trajectory requires considering dynamics and control.

This comprehensive set of notes covers the core principles of A* algorithms in the context of robotic trajectory planning, aligning with the learning objectives and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
