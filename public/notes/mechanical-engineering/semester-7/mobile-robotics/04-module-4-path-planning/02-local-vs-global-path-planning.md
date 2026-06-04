---
title: "local vs global path planning"
subject: "MOBILE ROBOTICS"
module: "Module 4: Path Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640c6"
status: "completed"
scrapedAt: "2026-05-20T18:15:27.477Z"
---
# Mobile Robotics: Module 4 - Path Planning: Local vs. Global Path Planning

## Introduction

This module delves into the critical aspect of **path planning** in mobile robotics. Path planning is the process of finding a sequence of movements for a robot to travel from a starting point to a goal point while avoiding obstacles and satisfying constraints. A fundamental distinction in path planning is between **global** and **local** approaches. Understanding this distinction is crucial for designing effective navigation systems, contributing to Course Outcome 5 (Perform navigation and path planning mobile robots) at a Knowledge Level K3.

## 1. Global Path Planning

**Definition:** Global path planning involves determining a complete, collision-free path from a start configuration to a goal configuration *before* the robot begins its movement. This approach assumes that the robot has a perfect or near-perfect understanding of its environment, including the location of all obstacles.

**Key Concepts:**

*   **Complete World Model:** Global planners rely on an accurate and complete representation of the environment. This model typically includes:
    *   **Map:** A geometric representation of the environment, often in the form of a grid (occupancy grid), a configuration space map, or a topological map.
    *   **Obstacle Locations:** Precise knowledge of the position, shape, and size of all static obstacles.
    *   **Robot Kinematics and Dynamics:** Understanding how the robot moves is essential for generating feasible paths. (Relates to CO2 & CO3, K4).
*   **Offline Planning:** The path is computed entirely before the robot starts moving. This allows for optimization of the path (e.g., shortest, smoothest, least energy).
*   **A Priori Knowledge:** Requires significant prior knowledge of the environment.
*   **Computational Cost:** Can be computationally expensive, especially in large or complex environments.

**Advantages:**

*   **Guaranteed Optimality (if applicable algorithms are used):** Can find the shortest or most efficient path.
*   **Collision Avoidance:** Ensures the entire path is collision-free, assuming an accurate map.
*   **Suitable for Static Environments:** Works best when the environment does not change during the planning process.

**Disadvantages:**

*   **Sensitivity to Map Accuracy:** Errors or incompleteness in the map can lead to the robot getting stuck or encountering unexpected obstacles.
*   **Inflexibility to Dynamic Environments:** Cannot react to unexpected obstacles or changes in the environment that occur after the path has been planned.
*   **High Computational Overhead:** Can be slow to compute, especially for large maps.

**Common Global Path Planning Algorithms:**

*   **Dijkstra's Algorithm:** Finds the shortest path in a graph with non-negative edge weights. Often applied to grid maps.
    *   *Reference:* Siegwart, Nourbakhsh, & Nourbakhsh (2011) likely discusses grid-based pathfinding and may mention Dijkstra's.
*   **A* Search Algorithm:** An informed search algorithm that uses a heuristic function to guide its search, making it more efficient than Dijkstra's for many problems.
    *   *Reference:* La Valle (2009) is a primary source for planning algorithms like A*. Corke (2011) might also cover foundational pathfinding.
*   **Rapidly-exploring Random Trees (RRTs):** A probabilistic sampling-based algorithm that explores the configuration space by growing a tree from the start configuration. Good for high-dimensional spaces.
    *   *Reference:* La Valle (2009) is the seminal work on RRTs.
*   **Probabilistic Roadmaps (PRMs):** Another sampling-based method that builds a roadmap of the configuration space offline. Useful for environments where many queries will be made.
    *   *Reference:* La Valle (2009) and Thrun, Burgard, & Fox (2005) (Probabilistic Robotics) would cover these advanced techniques.

**Example:**

Imagine a robot navigating a warehouse. A global path planner would use a detailed map of the warehouse, including the locations of shelves, walls, and permanent aisles, to compute a path from the loading dock to a specific storage location. The robot would then follow this pre-planned path.

---

## 2. Local Path Planning

**Definition:** Local path planning involves generating a path for the robot in real-time, based on its current sensor readings and its immediate surroundings. It is reactive and focuses on short-term obstacle avoidance.

**Key Concepts:**

*   **Local Sensing:** Relies on the robot's sensors (e.g., LiDAR, sonar, cameras) to perceive the environment in its vicinity. (Relates to CO4, K3).
*   **Reactive Behavior:** The robot can adapt its path in response to unexpected obstacles or changes in the environment that were not present in any prior global map.
*   **Online Planning:** The path is computed and updated continuously as the robot moves.
*   **Limited Field of View:** Local planners typically have a limited perception of the environment compared to global planners.
*   **Focus on Collision Avoidance:** The primary objective is to avoid immediate collisions.

**Advantages:**

*   **Adaptability to Dynamic Environments:** Can handle unexpected obstacles and changes in the environment.
*   **Robustness to Map Inaccuracies:** Less dependent on a perfect global map.
*   **Lower Computational Cost (for simple algorithms):** Can be less computationally intensive for immediate responses.

**Disadvantages:**

*   **Suboptimal Paths:** May not find the shortest or most efficient path, often resulting in meandering or detours.
*   **Local Minima:** Can get stuck in situations where the immediate sensor readings suggest no escape, even if a global path exists.
*   **No Guarantee of Reaching the Goal:** May only be able to avoid local obstacles and might not be able to find a path to the ultimate goal if it's occluded or too far away.

**Common Local Path Planning Algorithms:**

*   **Vector Field Histogram (VFH) / VFH+:** Represents the environment as a histogram of obstacle density and uses this to steer the robot away from obstacles.
    *   *Reference:* Siegwart, Nourbakhsh, & Nourbakhsh (2011) might discuss reactive navigation methods like VFH.
*   **Dynamic Window Approach (DWA):** Samples possible robot velocities within a dynamic window (considering acceleration limits) and selects the velocity that leads to the highest score based on obstacle clearance and progress towards the goal.
    *   *Reference:* Siegwart, Nourbakhsh, & Nourbakhsh (2011) is a good source for DWA. Corke (2011) may also cover control-based navigation.
*   **Artificial Potential Fields (APF):** Treats the robot as a particle in a potential field. The goal exerts an attractive force, and obstacles exert repulsive forces. The robot moves along the gradient of the combined force.
    *   *Reference:* Tzafestas (2011) and Siegwart, Nourbakhsh, & Nourbakhsh (2011) likely cover APF methods.
*   **Bug Algorithms:** A family of algorithms that involve "following" an obstacle until a clear path to the goal is found.
    *   *Reference:* La Valle (2009) might discuss simpler reactive strategies.

**Example:**

Consider the same warehouse robot, but now a pallet has been unexpectedly moved in its path. A global planner would not account for this. A local planner, using its sensors, would detect the pallet and react by deviating from the pre-planned path to navigate around it, even if this means taking a longer, less direct route for that segment of its journey.

---

## 3. Hybrid Approaches

In practice, most sophisticated mobile robots employ a **hybrid approach** that combines global and local path planning.

*   **Global planner:** Computes a high-level, generally optimal path from start to goal. This path acts as a "guide" or "breadcrumb trail."
*   **Local planner:** Takes the global path and the current sensor data, and makes real-time adjustments to avoid immediate obstacles and follow the general direction of the global path.

**Benefits of Hybrid Approaches:**

*   Combines the optimality of global planning with the reactivity of local planning.
*   More robust and efficient than either method alone.

**Example:**

The warehouse robot might use a global planner to get from the loading dock to a specific aisle. Once in the aisle, its local planner would take over to navigate through the aisle, avoiding moving forklifts or other temporary obstructions, while still aiming towards the target location indicated by the global path.

---

## 4. Relationship to Course Outcomes

This topic directly supports:

*   **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)**
    *   Understanding the fundamental differences between local and global planning is essential for performing navigation tasks. This includes knowing when to apply each approach or a combination thereof.

The underlying concepts also relate to other course outcomes:

*   **CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)** and **CO3: Derive dynamic model of mobile robots (Knowledge Level: K4)**: Both global and local planners need to consider the robot's kinematic and dynamic constraints to generate feasible and executable paths. For instance, DWA explicitly uses the robot's velocity constraints.
*   **CO4: Choose appropriate Sensors for mobile robot navigation (Knowledge Level: K3)**: Local planners are heavily reliant on sensor data, so understanding sensor capabilities (range, accuracy, field of view) directly impacts the effectiveness of local path planning.
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)**: Once a path is planned (either globally or locally), a control system is needed to ensure the robot accurately follows it. The characteristics of the planned path (smoothness, presence of sharp turns) influence the control strategy.

---

## 5. Key Points to Remember

*   **Global Path Planning:** A priori knowledge, offline, complete map, finds optimal path, sensitive to map errors, inflexible to dynamic changes.
*   **Local Path Planning:** Real-time, reactive, sensor-based, obstacle avoidance focus, can be suboptimal, susceptible to local minima, adaptable to dynamic environments.
*   **Hybrid Approaches:** Combine global guidance with local reactivity for robust and efficient navigation.
*   The choice of planning strategy depends on the environment's predictability and the robot's sensing capabilities.

---

## 6. Practice Questions

**Question 1:** A robot operating in a known, static factory floor with no unexpected moving obstacles would primarily benefit from which type of path planning?
    a) Local Path Planning
    b) Global Path Planning
    c) Hybrid Path Planning
    d) Purely Reactive Path Planning

**Question 2:** Which of the following is a significant disadvantage of global path planning?
    a) Inability to react to unexpected obstacles.
    b) High computational cost for simple environments.
    c) Difficulty in generating a complete world model.
    d) Reliance on real-time sensor data.

**Question 3:** The Dynamic Window Approach (DWA) is an example of which type of path planning?
    a) Global Path Planning
    b) Local Path Planning
    c) Offline Planning
    d) Graph Search Planning

**Question 4:** Explain why a robot navigating a crowded street would likely require a hybrid path planning approach.

**Question 5:** How does the knowledge of the robot's kinematic model (CO2) influence the choice or implementation of a path planning algorithm?

---

## 7. Answers to Practice Questions

**Answer 1:**
    b) Global Path Planning
    *Explanation:* In a static environment with no unexpected obstacles, a global planner can compute an optimal and collision-free path efficiently before the robot begins its journey.

**Answer 2:**
    a) Inability to react to unexpected obstacles.
    *Explanation:* Global planners generate a path based on a known map. If the environment changes after planning (e.g., an obstacle appears), the pre-computed path may become invalid, and the robot cannot adapt without replanning.

**Answer 3:**
    b) Local Path Planning
    *Explanation:* DWA operates in real-time, considering the robot's current state, sensor readings, and dynamic constraints (like velocity limits) to make immediate navigation decisions.

**Answer 4:**
    A crowded street presents a dynamic and unpredictable environment.
    *   **Global Planning:** A global planner could be used to determine the overall route from origin to destination (e.g., using road maps).
    *   **Local Planning:** However, on the street itself, there will be unpredictable elements like pedestrians, cyclists, other vehicles, parked cars, etc. A local planner is essential to react to these immediate obstacles, avoid collisions, and adjust the path in real-time to navigate safely through the crowd, while still generally following the globally determined route.

**Answer 5:**
    The robot's kinematic model dictates how it can move (e.g., its turning radius, maximum speed, acceleration limits). Path planning algorithms must respect these constraints to generate *feasible* paths that the robot can actually execute. For instance:
    *   **Global Planners:** May need to consider kinematic constraints when discretizing the environment or when checking path feasibility.
    *   **Local Planners:** Algorithms like DWA explicitly use kinematic constraints to define the "dynamic window" of achievable velocities. Without this knowledge, the generated path might be impossible for the robot to follow, leading to control errors or collisions. If a robot has differential drive kinematics, its path planning will be different from a robot with omnidirectional capabilities.

---

This concludes Module 4's introduction to local vs. global path planning. Remember that the interplay between sensing, world modeling, and motion capabilities forms the foundation for effective mobile robot navigation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
