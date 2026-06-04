---
title: "Dynamic window approach"
subject: "MOBILE ROBOTICS"
module: "Module 4: Path Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640ce"
status: "completed"
scrapedAt: "2026-05-20T18:15:33.138Z"
---
# Mobile Robotics: Module 4 - Path Planning: Dynamic Window Approach (DWA)

---

## 1. Introduction to Dynamic Window Approach (DWA)

The Dynamic Window Approach (DWA) is a local path planning and obstacle avoidance algorithm specifically designed for **differentially driven mobile robots** with **limited maneuverability**. It operates in real-time by considering the robot's current state and its dynamic constraints to select a safe and feasible velocity command. DWA is a reactive approach, meaning it continuously re-plans based on the current sensor readings and the robot's capabilities.

**Key Concept:** DWA bridges the gap between global path planning (which provides a general trajectory) and low-level motor control (which executes commands). It acts as a safety layer, ensuring the robot can avoid obstacles while adhering to its physical limitations.

**Learning Outcome Alignment:** This topic directly addresses **CO5: Perform navigation and path planning mobile robots** and **CO6: Control the mobile robots to follow different paths**.

**Textbook References:**
*   **Siegwart & Nourbakhsh (2011), Chapter 7: Local Navigation:** DWA is a prominent technique for local navigation and obstacle avoidance discussed in this chapter.
*   **Corke (2011), Chapter 9: Obstacle Avoidance:** While not explicitly focusing on DWA, this chapter discusses fundamental principles of obstacle avoidance, which DWA builds upon.
*   **La Valle (2009), Chapter 8: Reactive Motion Planning:** DWA can be seen as a sophisticated reactive motion planner.

---

## 2. Core Principles of DWA

DWA operates by sampling a set of feasible velocities for the robot and evaluating each sample based on several criteria. The best feasible velocity is then executed.

### 2.1. Robot Kinematics and Dynamics

DWA relies heavily on the robot's kinematic and dynamic constraints.

**Key Concepts:**

*   **Kinematic Model:** Describes the relationship between the robot's velocities and its configuration (position and orientation). For a differential drive robot, this typically involves linear velocity ($v$) and angular velocity ($\omega$).
*   **Dynamic Model:** Accounts for forces, torques, mass, inertia, and friction that affect the robot's motion. This is crucial because real robots cannot instantaneously change their velocities.
*   **Velocity Space:** The space of all possible $(v, \omega)$ pairs. DWA searches within this space.

**Derivations (Relevant to CO2 & CO3):**

While DWA itself doesn't require deriving the full dynamic model, it *uses* the outputs of such considerations. For a differential drive robot with wheel radius $r$ and wheel separation $l$:

*   **Forward Kinematics:**
    $\dot{x} = v \cos(\theta)$
    $\dot{y} = v \sin(\theta)$
    $\dot{\theta} = \omega$

*   **Velocity Constraints:** The robot's motors have maximum and minimum speed limits. This translates to bounds on $v$ and $\omega$.

**Important Point:** DWA is particularly effective for robots with limited acceleration and deceleration capabilities, which are directly influenced by their dynamic properties.

---

## 3. The Dynamic Window: Defining Feasible Velocities

The "Dynamic Window" is the crucial concept in DWA. It represents the set of all velocity commands $(v, \omega)$ that the robot can execute *from its current state* within a small time interval, considering its dynamic constraints.

**Key Concepts:**

*   **Maximum Velocities:** The robot has absolute maximum linear ($v_{max}$) and angular ($\omega_{max}$) velocities.
*   **Current Velocity:** The robot's current linear ($v_a$) and angular ($\omega_a$) velocities.
*   **Acceleration/Deceleration Limits:** The robot cannot change its velocity instantaneously. It has maximum linear acceleration ($a_{max}$) and angular acceleration ($\alpha_{max}$), as well as maximum deceleration.
*   **Time Horizon ($dt$):** The small time interval over which velocities are evaluated.

**Defining the Dynamic Window:**

The dynamic window $V_{XY}$ is defined as the set of velocities $(v, \omega)$ such that:

1.  **Velocity Limits:**
    *   $v \in [-v_{max}, v_{max}]$
    *   $\omega \in [-\omega_{max}, \omega_{max}]$

2.  **Acceleration Limits (considering current velocity):**
    *   $v \in [v_a - \dot{v}_{max} \cdot dt, v_a + \dot{v}_{max} \cdot dt]$
    *   $\omega \in [\omega_a - \dot{\omega}_{max} \cdot dt, \omega_a + \dot{\omega}_{max} \cdot dt]$

    Where $\dot{v}_{max}$ and $\dot{\omega}_{max}$ represent the maximum achievable accelerations and decelerations. Typically, these limits are expressed as a maximum forward acceleration, maximum backward acceleration, and maximum angular acceleration.

    Let's break down the acceleration limits more practically:
    *   **Forward Velocity:** $v \in [v_a - \text{decel\_limit} \cdot dt, v_a + \text{accel\_limit} \cdot dt]$
    *   **Backward Velocity:** $v \in [v_a - \text{decel\_limit} \cdot dt, v_a + \text{accel\_limit} \cdot dt]$
    *   **Angular Velocity:** $\omega \in [\omega_a - \text{ang\_decel\_limit} \cdot dt, \omega_a + \text{ang\_accel\_limit} \cdot dt]$

    These bounds are then intersected with the absolute velocity limits to form the final dynamic window.

**Example:**
Suppose a robot has:
*   $v_{max} = 1.0$ m/s, $\omega_{max} = 1.0$ rad/s
*   Current velocity $v_a = 0.5$ m/s, $\omega_a = 0.2$ rad/s
*   Acceleration limits: $a_{max} = 0.5$ m/s², $\alpha_{max} = 1.0$ rad/s²
*   Deceleration limits: $decel_{limit} = 1.0$ m/s², $ang_{decel\_limit} = 2.0$ rad/s²
*   $dt = 0.1$ s

**Calculating the dynamic window bounds:**

*   **Linear Velocity (forward):**
    *   Max $v$: $\min(v_{max}, v_a + a_{max} \cdot dt) = \min(1.0, 0.5 + 0.5 \cdot 0.1) = \min(1.0, 0.55) = 0.55$ m/s
    *   Min $v$: $\max(-v_{max}, v_a - decel_{limit} \cdot dt) = \max(-1.0, 0.5 - 1.0 \cdot 0.1) = \max(-1.0, 0.4) = 0.4$ m/s
    *   So, for forward motion, $v \in [0.4, 0.55]$

*   **Angular Velocity:**
    *   Max $\omega$: $\min(\omega_{max}, \omega_a + \alpha_{max} \cdot dt) = \min(1.0, 0.2 + 1.0 \cdot 0.1) = \min(1.0, 0.3) = 0.3$ rad/s
    *   Min $\omega$: $\max(-\omega_{max}, \omega_a - ang_{decel\_limit} \cdot dt) = \max(-1.0, 0.2 - 2.0 \cdot 0.1) = \max(-1.0, 0.0) = 0.0$ rad/s
    *   So, for angular motion, $\omega \in [0.0, 0.3]$

The dynamic window is thus the region defined by these velocity bounds, sampled for possible $(v, \omega)$ pairs.

**Reference Book Content:**
*   **Thrun, Burgard, & Fox (2005), Chapter 8: Motion Planning:** This book discusses the general principles of motion planning under uncertainty and constraints, which informs the need for algorithms like DWA. They emphasize the importance of considering robot dynamics for robust control.

---

## 4. Evaluating Velocity Samples

Once the dynamic window of feasible velocities is established, DWA samples various $(v, \omega)$ pairs within this window. Each sampled velocity is then evaluated based on a set of cost functions.

**Key Concepts:**

*   **Objective Function (or Cost Function):** A function that quantifies how "good" a particular velocity command is.
*   **Trajectory Simulation:** For each sampled velocity, a short-term trajectory is simulated forward in time (for a prediction horizon, e.g., 2-5 seconds) using the robot's kinematic model.
*   **Obstacle Clearance:** How well the simulated trajectory avoids obstacles.
*   **Goal Reaching:** How effectively the velocity moves the robot towards the global path or goal.
*   **Velocity Preference:** Favoring higher velocities when safe.

**Common Cost Functions:**

1.  **Heading Cost ($c_h$):** Measures how well the velocity directs the robot towards the goal or the next waypoint on the global path.
    *   This is often based on the angle between the robot's current heading and the direction to the goal/waypoint.
    *   A velocity that aligns the robot better with the target direction will have a lower heading cost.

2.  **Forward Velocity Cost ($c_v$):** Encourages moving forward as quickly as possible.
    *   This is typically proportional to the linear velocity $v$.
    *   Higher forward velocity means lower forward velocity cost.

3.  **Obstacle Clearance Cost ($c_d$):** Penalizes velocities that lead to collisions or very close proximity to obstacles.
    *   This is the most critical cost function for obstacle avoidance.
    *   It's calculated by simulating the robot's path for the given $(v, \omega)$ and checking for intersections with obstacles detected by sensors (e.g., laser scanner, sonar).
    *   The cost is inversely proportional to the minimum distance to an obstacle along the simulated trajectory. If a collision is detected, the cost is infinite.

**Calculating the Total Cost:**

The total cost for a sampled velocity $(v, \omega)$ is a weighted sum of the individual cost functions:

$Cost(v, \omega) = w_h \cdot c_h(v, \omega) + w_v \cdot c_v(v, \omega) + w_d \cdot c_d(v, \omega)$

Where $w_h, w_v, w_d$ are user-defined weights that tune the importance of each criterion.

**Key Point:** The weights ($w_h, w_v, w_d$) are crucial for balancing exploration, exploitation, and safety. Higher $w_d$ leads to more cautious behavior.

---

## 5. DWA Algorithm Steps

Here's a breakdown of the DWA algorithm:

1.  **Initialization:**
    *   Get current robot pose ($\mathbf{p} = (x, y, \theta)$).
    *   Get current robot velocities ($v_a, \omega_a$).
    *   Get global path or goal location.
    *   Get sensor readings (e.g., laser scan data).
    *   Define DWA parameters: $v_{max}, \omega_{max}$, acceleration limits, prediction horizon ($T$), time step for simulation ($dt$), cost function weights ($w_h, w_v, w_d$).

2.  **Define the Dynamic Window ($V_{XY}$):**
    *   Calculate the feasible velocity ranges for $v$ and $\omega$ based on current velocities and acceleration/deceleration limits, as described in Section 3.

3.  **Sample Velocities:**
    *   Generate a discrete set of $(v, \omega)$ pairs within the defined dynamic window. The sampling density can be adjusted.

4.  **Simulate Trajectories and Calculate Costs:**
    *   For each sampled velocity $(v_s, \omega_s)$:
        *   **Simulate Trajectory:** Using the robot's kinematic model, predict the robot's pose over the prediction horizon $T$ with step size $dt$, starting from the current pose $(x, y, \theta)$ and applying $(v_s, \omega_s)$.
        *   **Calculate Obstacle Clearance Cost ($c_d$):** For the simulated trajectory, check for collisions with obstacles using sensor data. If a collision is imminent, assign an infinite cost. Otherwise, assign a cost based on the minimum distance to obstacles.
        *   **Calculate Heading Cost ($c_h$):** Determine the orientation of the end of the simulated trajectory relative to the goal or next waypoint. Calculate the cost based on this angle.
        *   **Calculate Forward Velocity Cost ($c_v$):** This is usually just $v_s$.
        *   **Calculate Total Cost:** $Cost(v_s, \omega_s) = w_h \cdot c_h(v_s, \omega_s) + w_v \cdot c_v(v_s, \omega_s) + w_d \cdot c_d(v_s, \omega_s)$.

5.  **Select Best Velocity:**
    *   Choose the sampled velocity $(v^*, \omega^*)$ that has the minimum total cost among all feasible and non-colliding velocities.

6.  **Execute Velocity:**
    *   Apply the selected velocity command $(v^*, \omega^*)$ to the robot's motors.

7.  **Repeat:** Go back to Step 1 for the next control cycle.

**Learning Outcome Alignment:**
*   **CO5:** The entire process of sampling, simulating, and selecting velocities is path planning.
*   **CO6:** The selected velocity directly controls the robot's motion to follow a path.

**Reference Book Content:**
*   **Corke (2011), Chapter 9:** Provides practical examples of implementing obstacle avoidance routines, which are essential for the collision detection and cost calculation steps in DWA.

---

## 6. Advantages and Disadvantages of DWA

**Advantages:**

*   **Real-time Performance:** DWA operates in real-time, making it suitable for dynamic environments.
*   **Considers Dynamic Constraints:** Explicitly incorporates acceleration and deceleration limits, leading to smoother and more realistic motion control compared to purely kinematic planners.
*   **Effective Obstacle Avoidance:** Prioritizes collision avoidance through the obstacle clearance cost.
*   **Adaptable:** The cost function weights can be tuned to prioritize different behaviors (e.g., speed vs. safety).
*   **Handles Differential Drive Robots Well:** Specifically designed for the kinematics of differential drive robots.

**Disadvantages:**

*   **Local Minima:** Can get stuck in complex environments or situations where all feasible velocities lead to a suboptimal or dead-end state.
*   **No Global Guarantee:** DWA is a local planner. It doesn't guarantee that it will find a path to the goal if the global path is obstructed or if the local environment is very complex. It needs to be coupled with a global planner.
*   **Tuning Required:** The performance is sensitive to the choice of parameters and cost function weights.
*   **Computational Cost:** Simulating trajectories for many velocity samples can be computationally intensive, especially with a large prediction horizon or a high sampling rate.
*   **Assumes Known Environment (for obstacle avoidance):** Relies on accurate sensor data to detect obstacles.

**Reference Book Content:**
*   **La Valle (2009), Chapter 8:** Discusses limitations of reactive planners, including susceptibility to local minima and the need for global guidance, which are relevant critiques of DWA.

---

## 7. Practical Considerations and Extensions

*   **Sensor Integration:** DWA typically uses range sensors like LIDAR or sonar to detect obstacles. The obstacle clearance cost is calculated based on these readings.
*   **Global Path Integration:** DWA is often used in conjunction with a global planner (e.g., A*, Dijkstra) that provides a reference path or a series of waypoints. The heading cost in DWA steers the robot towards this global path.
*   **Velocity Space Sampling:** The way velocities are sampled affects performance. A common approach is to sample linearly in $v$ and $\omega$ or to discretize the search space.
*   **Trajectory Prediction Horizon:** A longer horizon allows for better anticipation of future collisions but increases computational cost.
*   **Collision Detection Methods:** Using algorithms like the Separating Axis Theorem (SAT) or simply checking if any point on the robot's footprint intersects with detected obstacles.

**Example Scenario:**

Imagine a robot navigating a corridor.
*   **Global Planner:** Provides a straight-line path down the corridor.
*   **DWA:**
    *   Receives the desired direction from the global path.
    *   Detects a wall to its right and a small object in front.
    *   **Dynamic Window:** Limits forward speed and allows for turning slightly away from the wall.
    *   **Cost Functions:**
        *   Heading cost will favor velocities that reduce the angle to the corridor's center.
        *   Forward velocity cost favors higher speeds.
        *   Obstacle clearance cost will heavily penalize any velocities that would hit the wall or the object.
    *   **Outcome:** DWA will select a safe velocity that moves the robot forward along the corridor while maintaining a safe distance from the wall and the object.

**Learning Outcome Alignment:**
*   **CO4: Choose appropriate Sensors for mobile robot navigation:** This section highlights the reliance on range sensors.
*   **CO5 & CO6:** Emphasizes how DWA integrates with global planning and sensor data for effective navigation and control.

---

## 8. Practice Questions and Answers

**Question 1:** What is the primary purpose of the "Dynamic Window" in the Dynamic Window Approach?
**Answer:** The dynamic window defines the set of all velocity commands $(v, \omega)$ that the robot can feasibly execute from its current state within a small time interval, considering its maximum velocities and acceleration/deceleration limits.

**Question 2:** Name three common cost functions used in DWA and briefly describe their purpose.
**Answer:**
1.  **Heading Cost:** Encourages the robot to move towards the goal or the next waypoint.
2.  **Forward Velocity Cost:** Encourages the robot to move forward as quickly as possible.
3.  **Obstacle Clearance Cost:** Penalizes velocities that lead to collisions or proximity to obstacles.

**Question 3:** Why is DWA considered a "local" path planning algorithm? What are the implications of this?
**Answer:** DWA is a local planner because it makes decisions based only on the immediate sensor readings and the robot's current state, without a global view of the environment. This means it can get stuck in local minima and may not guarantee finding a path to the goal if the global path is blocked in a way that the local planner cannot resolve. It needs to be integrated with a global planner.

**Question 4:** If a robot has very strict acceleration limits, how would this affect its dynamic window?
**Answer:** Strict acceleration limits would significantly shrink the dynamic window, especially for velocities far from the current velocity. The robot would have fewer feasible velocity options to choose from within a short time frame, making it more cautious.

**Question 5:** What are the trade-offs when choosing the trajectory prediction horizon ($T$) in DWA?
**Answer:**
*   **Longer Horizon:** Better anticipation of future collisions, potentially leading to smoother avoidance maneuvers. However, it increases computational load and the risk of the robot's state changing significantly before the planned trajectory can be fully executed.
*   **Shorter Horizon:** Lower computational load, faster response to immediate threats. However, it might not predict potential collisions far enough in advance, leading to more abrupt maneuvers or potential collisions.

---

## 9. Key Points to Remember

*   **DWA is for Differential Drive Robots:** It's optimized for their specific kinematics.
*   **Dynamic Window is Key:** It restricts the search space to only *achievable* velocities.
*   **Cost Functions Balance Behavior:** Heading, velocity, and obstacle clearance are weighted to achieve desired robot behavior.
*   **Real-time & Reactive:** Continuously re-plans based on current sensor data.
*   **Local Planner:** Needs a global planner for full navigation.
*   **Parameter Tuning is Crucial:** Weights and limits significantly affect performance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
