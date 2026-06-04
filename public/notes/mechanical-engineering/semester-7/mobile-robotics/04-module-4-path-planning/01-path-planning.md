---
title: "Path Planning"
subject: "MOBILE ROBOTICS"
module: "Module 4: Path Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640c5"
status: "completed"
scrapedAt: "2026-05-20T18:15:26.752Z"
---
## Mobile Robotics: Module 4 - Path Planning

**Course Outcomes Addressed:**

*   **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)**
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)**

---

### 1. Introduction to Path Planning

Path planning is a fundamental problem in mobile robotics that involves finding a sequence of motions for a robot to move from a starting configuration to a goal configuration while avoiding obstacles and satisfying constraints. It's a crucial step in enabling robots to navigate autonomously in their environment.

**Key Concepts:**

*   **Configuration Space (C-Space):** The set of all possible configurations (positions and orientations) of the robot. Path planning is often performed in C-space, which can simplify the problem by representing the robot as a point.
*   **Workspace:** The physical environment in which the robot operates.
*   **Obstacles:** Regions in the workspace that the robot must avoid.
*   **Path:** A continuous curve in C-space representing the trajectory of the robot from start to goal.
*   **Trajectory:** A path with associated time information, defining how and when the robot moves along the path.
*   **Constraints:** Limitations on the robot's motion, such as velocity limits, acceleration limits, or kinematic constraints.

**Importance of Path Planning:**

*   Enables autonomous navigation in unknown or dynamic environments.
*   Maximizes efficiency and minimizes travel time/energy consumption.
*   Ensures safety by avoiding collisions with obstacles.
*   Allows for mission execution and task completion.

**Textbook References:**

*   **Siegwart & Nourbakhsh (2011):** Chapters 8 & 9 on "Navigation and Localization" and "Mapping and Localization" will provide context for how path planning fits into the overall navigation system. They discuss the importance of representing the environment and the robot's state for effective path planning.
*   **La Valle (2009):** This book is specifically dedicated to planning algorithms and will be a primary resource for understanding the theoretical underpinnings and various algorithms.

---

### 2. Representing the Environment for Path Planning

Effective path planning relies on an accurate representation of the robot's environment and the robot itself.

**Key Concepts:**

*   **Configuration Space (C-Space) Representation:**
    *   **Robot as a Point:** In C-space, the robot is often abstracted as a point. Obstacles in the workspace are "grown" in C-space to account for the robot's footprint and kinematics, transforming them into C-obstacles.
    *   **Degrees of Freedom (DOF):** The number of independent parameters needed to specify the robot's configuration. For a 2D mobile robot, this is typically 3 (x, y, $\theta$).
    *   **Collision-Free Path:** A path that lies entirely within the free C-space (C-free).

*   **Environment Representations:**
    *   **Occupancy Grids:** The environment is discretized into a grid of cells. Each cell can be marked as occupied, free, or unknown. This is a common and flexible representation.
        *   *Example:* A grid where each cell represents a 0.1m x 0.1m square.
        *   *Reference:* Thrun, Burgard, & Fox (2005) extensively discusses probabilistic occupancy grids for robot mapping and navigation.
    *   **Voxel Grids:** A 3D extension of occupancy grids, where the environment is divided into 3D cubic cells (voxels).
    *   **Geometric Maps:**
        *   **Polygon Maps:** Representing obstacles as polygons. This can be efficient for computations but may not capture all environmental details.
        *   **Feature Maps:** Representing the environment using landmarks or distinct features (e.g., walls, corners).
    *   **Topological Maps:** Representing the environment as a graph where nodes are locations (e.g., rooms, corridors) and edges represent connectivity between them. This is useful for high-level path planning.

**Textbook References:**

*   **Siegwart & Nourbakhsh (2011):** Chapter 8 provides an excellent overview of environment representation techniques used in mobile robotics, including geometric and topological approaches.
*   **Corke (2011):** May offer insights into specific geometric representations and how to implement them in MATLAB for robot control and simulation.
*   **La Valle (2009):** Discusses the impact of environment representation on the choice and performance of planning algorithms.

---

### 3. Taxonomy of Path Planning Algorithms

Path planning algorithms can be broadly categorized based on their approach to exploring the configuration space.

**Key Concepts:**

*   **Complete Algorithms:** Guaranteed to find a path if one exists.
*   **Resolution Completeness:** Guaranteed to find a path if the resolution of the representation is fine enough.
*   **Optimality:** Finds the "best" path according to some criterion (e.g., shortest distance, least time, lowest energy).

**Categories of Algorithms:**

1.  **Combinatorial Planners (Geometric Planners):**
    *   **Visibility Graphs:** Connects start, goal, and vertices of polygonal obstacles. The shortest path is a sequence of line segments connecting these points, ensuring visibility between consecutive points.
        *   *Limitations:* Computationally expensive for complex environments.
    *   **Voronoi Diagrams:** Creates regions around obstacles such that any point in a region is closer to its corresponding obstacle than any other. Paths along Voronoi edges are maximally away from obstacles.
        *   *Advantages:* Provides paths with clearance.
        *   *Limitations:* Can generate longer paths.
    *   **Cell Decomposition:** Divides the free C-space into simpler cells. A path is found by traversing a sequence of adjacent cells from the start to the goal.
        *   *Types:*
            *   **Exact Decomposition:** Divides the space into cells that are free of obstacles.
            *   **Approximate Decomposition:** Uses a grid or other approximation.

2.  **Sampling-Based Planners:** These algorithms build a graph or tree by randomly sampling configurations in C-space and connecting them if they are collision-free.

    *   **Probabilistic Roadmaps (PRM):**
        *   **Construction Phase:** Randomly sample configurations in C-free and connect nearby valid configurations to form a roadmap (a graph).
        *   **Query Phase:** Connect the start and goal configurations to the roadmap and search for a path between them using graph search algorithms (e.g., Dijkstra's, A\*).
        *   *Advantages:* Efficient for multi-query problems, can handle high-dimensional C-spaces.
        *   *Reference:* Siegwart & Nourbakhsh (2011) Chapter 9 might touch upon roadmap-based approaches. La Valle (2009) is a definitive source for PRMs.
    *   **Rapidly-exploring Random Trees (RRT):**
        *   **Construction:** Grows a tree from the start configuration by iteratively sampling random configurations, finding the nearest node in the tree, extending towards the sample, and adding the new node and edge to the tree if collision-free.
        *   *Variants:* RRT\*, RRT-Connect.
        *   *Advantages:* Efficient for single-query problems, inherently explores the space.
        *   *Reference:* La Valle (2009) is the primary resource for RRT.
    *   **Other Sampling-Based Methods:** Extend-RRT, Bidirectional RRT.

3.  **Informed Samplers:** Techniques to bias sampling towards relevant regions of C-space, improving the efficiency of sampling-based planners.

4.  **Optimization-Based Planners:**
    *   **Artificial Potential Fields:** Creates a "force field" in C-space, with the goal exerting an attractive force and obstacles exerting repulsive forces. The robot moves along the gradient of the potential field.
        *   *Advantages:* Simple to implement, reactive to local changes.
        *   *Limitations:* Can get stuck in local minima (e.g., between two obstacles).
        *   *Example:* A robot moving towards a target while being pushed away from walls.
        *   *Reference:* Siegwart & Nourbakhsh (2011) Chapter 9 discusses potential fields.
    *   **Trajectory Optimization:** Formulates path planning as an optimization problem, minimizing a cost function subject to constraints.

5.  **Grid-Based Search Algorithms:** Applied to discretized environments (e.g., occupancy grids).

    *   **Dijkstra's Algorithm:** Finds the shortest path from a single source to all other nodes in a graph with non-negative edge weights.
    *   **A\* Search Algorithm:** An informed search algorithm that uses a heuristic function to guide the search towards the goal, making it more efficient than Dijkstra's.
        *   *Heuristic Function (h(n)):* An estimate of the cost from node 'n' to the goal. Common heuristics for grid-based planning include Manhattan distance and Euclidean distance.
        *   *Total Cost (f(n)) = g(n) + h(n)*, where g(n) is the actual cost from the start to node 'n'.
        *   *Example:* Finding the shortest path on a maze represented as a grid.
        *   *Reference:* Corke (2011) likely provides MATLAB implementations or explanations of A\* for pathfinding. Siegwart & Nourbakhsh (2011) may discuss grid-based search in the context of navigation.

**Textbook References:**

*   **La Valle (2009):** This is the definitive text for understanding the theoretical foundations, properties, and implementation of many of these algorithms, particularly PRM and RRT.
*   **Siegwart & Nourbakhsh (2011):** Chapters 8 and 9 will offer practical perspectives on how these algorithms are applied in real-world mobile robots.
*   **Tzafestas (2009):** May offer additional insights into control-theoretic aspects of path following and planning.

---

### 4. Motion Planning for Different Robot Kinematics

The choice of path planning algorithm is often influenced by the robot's kinematic model and its constraints.

**Key Concepts:**

*   **Holonomic Robots:** Robots that can move instantaneously in any direction (e.g., differential drive robot with omnidirectional wheels). Their configuration can be directly controlled by velocity commands in x, y, and $\theta$. Path planning is generally easier for holonomic robots.
*   **Non-holonomic Robots:** Robots that have constraints on their instantaneous motion (e.g., differential drive robot with standard wheels, car-like robot). They cannot move sideways or rotate in place instantaneously. Path planning for non-holonomic robots requires considering these constraints.

**Considerations for Non-holonomic Robots:**

*   **Choreography:** Paths for non-holonomic robots often involve sequences of straight line motions and precise turns to achieve the desired configuration.
*   **State Space:** The planning algorithms need to operate in the full state space (position and orientation) and ensure that the planned path is *achievable* by the robot's kinematics.
*   **Algorithms for Non-holonomic Planning:**
    *   **State Lattice Planners:** Generate a set of feasible motion primitives (short, kinematically valid trajectories) from various states and connect them to form a search graph.
    *   **Kinodynamic Planners:** Consider both kinematic and dynamic constraints, planning for feasible trajectories that account for velocity and acceleration limits.

**Textbook References:**

*   **Siegwart & Nourbakhsh (2011):** Chapter 7 on "Mobile Robot Kinematics" and Chapter 8 on "Navigation and Localization" will be crucial for understanding the differences between holonomic and non-holonomic robots and how these influence planning.
*   **Corke (2011):** Provides detailed explanations of mobile robot kinematics and how to model them in MATLAB, which is essential for implementing planning algorithms that respect these constraints.
*   **Tzafestas (2009):** May cover advanced control techniques for following non-holonomic paths.

---

### 5. Path Following and Control

Once a path is generated, the robot needs to follow it accurately. This involves a control layer that translates the planned path into motor commands.

**Key Concepts:**

*   **Path Following Error:** The deviation of the robot's current pose from the planned path.
*   **Control Strategies:**
    *   **Pure Pursuit:** Selects a target point on the path ahead of the robot and controls the robot to steer towards it. The lookahead distance is a key parameter.
        *   *Advantages:* Simple to implement, works well for curved paths.
        *   *Limitations:* Can oscillate around the path, sensitive to lookahead distance.
        *   *Reference:* Siegwart & Nourbakhsh (2011) likely discusses pure pursuit.
    *   **Stanley Controller:** A well-known controller for non-holonomic robots that aims to minimize both the cross-track error (perpendicular distance to the path) and the heading error (difference in orientation).
        *   *Advantages:* Robust, handles non-holonomic constraints effectively.
        *   *Reference:* Siegwart & Nourbakhsh (2011) and Tzafestas (2009) are good sources for this.
    *   **PID Controllers:** Can be used to control individual wheel velocities or steering angles to follow the path.
    *   **Model Predictive Control (MPC):** A more advanced control technique that optimizes control inputs over a future horizon, considering the robot's model and constraints.

**Textbook References:**

*   **Siegwart & Nourbakhsh (2011):** Chapter 9, "Navigation and Localization," will cover path following strategies.
*   **Corke (2011):** Provides practical MATLAB implementations of various control strategies for mobile robots, including path following.
*   **Tzafestas (2009):** Offers in-depth coverage of robot control systems and their application to path following.

---

### 6. Practice Questions and Exercises

**Question 1:**
Explain the concept of Configuration Space (C-Space) and why it is a fundamental tool in mobile robot path planning. How does an obstacle in the workspace transform into an obstacle in C-space?

**Answer 1:**
Configuration Space (C-Space) is the space of all possible configurations (positions and orientations) of the robot. Path planning is often performed in C-space because it simplifies the problem by treating the robot as a point. Obstacles in the physical workspace are "grown" in C-space to account for the robot's geometry and kinematics, forming C-obstacles. A collision-free path in C-space corresponds to a collision-free path in the workspace. This transformation allows us to use algorithms designed for point robots.

**Question 2:**
Compare and contrast Probabilistic Roadmaps (PRM) and Rapidly-exploring Random Trees (RRT). What are their primary applications and limitations?

**Answer 2:**
*   **PRM:**
    *   **Application:** Multi-query path planning.
    *   **Process:** Builds a roadmap by sampling and connecting points in C-free during a "construction phase." The "query phase" involves connecting start and goal to the roadmap and searching.
    *   **Limitations:** Can be inefficient for single queries, may struggle with narrow passages.
*   **RRT:**
    *   **Application:** Single-query path planning.
    *   **Process:** Grows a tree from the start configuration by iteratively extending towards random samples.
    *   **Advantages:** Efficient for single queries, naturally explores the state space.
    *   **Limitations:** Paths are often sub-optimal, can be biased in sampling.

**Question 3:**
Describe the core idea behind the Artificial Potential Field method for path planning. What is a significant challenge with this approach?

**Answer 3:**
The Artificial Potential Field method creates an artificial "force field" in the robot's environment. The goal exerts an attractive force, pulling the robot towards it, while obstacles exert repulsive forces, pushing the robot away. The robot moves by following the gradient of the combined potential field. The significant challenge is the risk of getting stuck in **local minima**, where the net force is zero but the robot is not at the goal. This can happen in configurations between obstacles.

**Question 4:**
Consider a differential drive mobile robot. Is it holonomic or non-holonomic? Explain why. What are the implications of this for path planning?

**Answer 4:**
A differential drive mobile robot with standard wheels is **non-holonomic**. This is because its instantaneous motion is constrained: it cannot move sideways or rotate in place instantaneously. Its velocity is dependent on the wheel velocities, and it must move forward or backward. This implies that path planning algorithms must explicitly consider these kinematic constraints. Simple point-based planning in C-space may not be directly executable. Instead, algorithms need to generate kinematically feasible paths (e.g., sequences of curves and straight lines achievable by the robot).

**Question 5 (Practical/Coding Hint):**
Imagine you have an occupancy grid representing your robot's environment. You want to find the shortest path from a start cell to a goal cell. Which algorithm would you likely choose and why? How would you represent the "cost" of moving between adjacent cells?

**Answer 5:**
For an occupancy grid, the **A\* search algorithm** is a suitable choice for finding the shortest path.
*   **Why A\*:** It efficiently explores the grid by prioritizing cells that are both close to the start (low `g(n)`) and seem likely to lead to the goal (low `h(n)` heuristic). It guarantees optimality if the heuristic is admissible.
*   **Representing Cost:** The cost of moving between adjacent cells would typically be represented by the **distance** between the cell centers.
    *   For adjacent cells (horizontally or vertically), the cost is the grid cell size (e.g., 1 unit if the cell size is normalized).
    *   For diagonally adjacent cells, the cost is $\sqrt{2}$ times the cell size (approximately 1.414 units). This accounts for the longer distance covered diagonally.

---

### 7. Important Points to Remember

*   **C-Space Transformation:** Always consider how the robot's geometry and kinematics affect its representation in Configuration Space.
*   **Robot Constraints:** Non-holonomic constraints are critical for path planning and execution.
*   **Algorithm Choice:** The best path planning algorithm depends on the environment, robot capabilities, and whether you need single-query or multi-query solutions, optimality, or completeness.
*   **Environment Representation:** The accuracy and type of environment representation directly impact the effectiveness of path planning.
*   **Path Following:** A robust path following controller is essential for ensuring the robot accurately executes the planned path.
*   **Trade-offs:** There are often trade-offs between planning time, path optimality, and computational resources.
*   **Heuristics in A\*:** For A\* to guarantee optimality, the heuristic function must be **admissible** (never overestimates the cost to the goal) and ideally **consistent**. Euclidean distance and Manhattan distance are common admissible heuristics.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 8. Further Reading and Exploration

*   **ROS (Robot Operating System):** Explore navigation stacks in ROS, which integrate various path planning and control algorithms.
*   **MATLAB Robotics System Toolbox:** Utilize its functionalities for robot modeling, simulation, and planning algorithm implementation.
*   **Simulation Environments:** Tools like Gazebo or Webots allow you to test your path planning and control strategies in simulated environments.
*   **Specific Algorithms:** Dive deeper into the mathematical derivations and implementation details of algorithms like PRM, RRT, and A\* from La Valle's book.

---

This comprehensive set of study notes provides a foundation for understanding path planning in mobile robotics, aligning with the specified learning outcomes and course objectives. Remember to actively engage with the recommended textbooks and practice problems to solidify your understanding.