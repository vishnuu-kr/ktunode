---
title: "linear trajectory with parabolic blends"
subject: "ROBOTICS"
module: "Module 4: Trajectory Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464257"
status: "completed"
scrapedAt: "2026-05-20T18:18:50.889Z"
---
# ROBOTICS: Module 4: Trajectory Planning - Linear Trajectory with Parabolic Blends

## Introduction to Trajectory Planning

Trajectory planning is a fundamental aspect of robotics that involves defining the path and motion of a robot's end-effector or joints over time. The goal is to move the robot from a starting configuration to a desired ending configuration smoothly, efficiently, and safely, while respecting kinematic and dynamic constraints.

**Key Concepts:**

*   **Trajectory:** A time-ordered sequence of configurations (joint positions or end-effector poses) that a robot's moving elements must follow.
*   **Configuration:** The set of all joint variables (for joint space planning) or the position and orientation of the end-effector (for Cartesian space planning).
*   **Path:** The geometric description of the motion in the task space or joint space, without explicit time information.
*   **Motion Primitive:** A fundamental building block of a trajectory, often representing a simple motion like a straight line or a circular arc.
*   **Constraints:** Limitations that the robot system must adhere to, including:
    *   **Kinematic Constraints:** Limits on joint positions, velocities, and accelerations due to the robot's physical structure.
    *   **Dynamic Constraints:** Limits imposed by motor torque, actuator power, and inertial forces.
    *   **Obstacle Avoidance:** Ensuring the robot does not collide with its environment.

**Course Outcomes Alignment:**

*   **CO3: Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion (Knowledge Level: K4, K5)** - This topic directly addresses the planning of trajectories in different spaces.

**Textbook References:**

*   **Schilling (1996):** Chapter on Path and Trajectory Generation.
*   **Craig (2002):** Chapter on Trajectory Generation.
*   **Saha (n.d.):** Chapter on Motion Planning.
*   **Mittal (2003):** Chapter on Trajectory Generation.
*   **Ghosal (n.d.):** Chapter on Motion Planning.
*   **Deb (n.d.):** Chapter on Trajectory Generation.
*   **Siegwart & Nourbakhsh (2004):** Chapter on Motion Planning.

## Linear Trajectory with Parabolic Blends

This section focuses on generating smooth trajectories by combining linear segments with parabolic transitions (blends) at the connection points. This approach is widely used to achieve smooth changes in velocity and acceleration, which is crucial for reducing vibrations, wear and tear, and improving task execution accuracy.

### 1. Basic Linear Trajectory

A fundamental trajectory is a straight-line motion in either joint space or Cartesian space.

*   **Joint Space Linear Trajectory:** The robot moves along a straight line in the joint configuration space. This is often computationally simpler but does not guarantee a straight-line motion of the end-effector in Cartesian space.
    *   Let the starting joint configuration be $q_0 = [q_{0,1}, q_{0,2}, ..., q_{0,n}]$ and the ending joint configuration be $q_f = [q_{f,1}, q_{f,2}, ..., q_{f,n}]$.
    *   The linear trajectory for joint $i$ can be defined as:
        $q_i(t) = q_{0,i} + \frac{q_{f,i} - q_{0,i}}{T} t$, for $0 \le t \le T$
    *   Here, $T$ is the total time for the motion.
    *   **Velocity:** $\dot{q}_i(t) = \frac{q_{f,i} - q_{0,i}}{T}$ (constant velocity)
    *   **Acceleration:** $\ddot{q}_i(t) = 0$ (zero acceleration)

*   **Cartesian Space Linear Trajectory:** The robot's end-effector moves along a straight line in Cartesian space (e.g., X-Y-Z translation and orientation). This is achieved by interpolating between the start and end poses using homogeneous transformation matrices.
    *   Let the starting pose be $T_0$ and the ending pose be $T_f$.
    *   A common interpolation method is SLERP (Spherical Linear Interpolation) for orientation and linear interpolation for position.
    *   **Position Interpolation:** $p(t) = p_0 + \frac{p_f - p_0}{T} t$
    *   **Orientation Interpolation:** Using SLERP to interpolate between the rotation parts of $T_0$ and $T_f$.
    *   **Challenge:** A linear Cartesian path often results in non-linear joint space trajectories, which can be difficult to control and may lead to jerky motions if not handled properly.

**Limitations of Pure Linear Trajectories:**

*   **Discontinuous Velocity/Acceleration:** At the start and end of a linear segment, velocity and acceleration are typically discontinuous if the previous/next segments have different values. This leads to:
    *   **Jerky motion:** Unpleasant for human interaction and can excite structural vibrations.
    *   **High-impact forces:** Causing wear and tear on actuators and mechanical components.
    *   **Limited speed:** Maximum speed is constrained by the ability to start and stop instantaneously without exceeding acceleration limits.

### 2. Parabolic Blends

Parabolic blends are used to create smooth transitions between linear segments by introducing short parabolic curves at the start and end of each segment. These parabolic segments ensure that the velocity and acceleration are continuous across the segment boundaries.

**Concept:**

Instead of abruptly changing velocity from $v_1$ to $v_2$, we introduce a blend region where the velocity changes smoothly. A common approach is to use a trapezoidal velocity profile, but parabolic blends offer a smoother transition.

**Typical Implementation:**

Consider two linear segments, A to B and B to C.

*   **Segment 1 (A to B):** Starts with velocity $v_A$, ends with velocity $v_B$.
*   **Segment 2 (B to C):** Starts with velocity $v_B$, ends with velocity $v_C$.

A simple linear trajectory would have an instantaneous change in velocity at point B. With parabolic blends, we modify the start and end of each linear segment.

**The S-Curve (or 5th-Order Polynomial) Profile:**

A very common and effective way to achieve smooth trajectories with parabolic blends is by using 5th-order polynomial profiles for velocity control. A 5th-order polynomial can specify position, velocity, and acceleration at both the start and end of a segment.

Let's consider a single joint's trajectory segment from time $t_s$ to $t_e$. The position of the joint is given by a polynomial $q(t)$:

$q(t) = a_5 t^5 + a_4 t^4 + a_3 t^3 + a_2 t^2 + a_1 t + a_0$

The velocity is:

$\dot{q}(t) = 5a_5 t^4 + 4a_4 t^3 + 3a_3 t^2 + 2a_2 t + a_1$

The acceleration is:

$\ddot{q}(t) = 20a_5 t^3 + 12a_4 t^2 + 6a_3 t + 2a_2$

To achieve a smooth transition between two linear segments (or any two motion primitives), we need to define the start and end conditions for each segment. For a linear segment with parabolic blends, we typically aim for:

*   **Start:** Desired initial position, zero initial velocity, zero initial acceleration.
*   **Transition (Blend):** Smoothly change velocity and acceleration to match the next segment.
*   **End:** Desired final position, zero final velocity, zero final acceleration (or match the initial conditions of the next segment if it's not a stop).

**Generating a Segment with Parabolic Blends (Simplified Example):**

Consider moving a joint from $q_s$ to $q_f$ over a total time $T$. We can split this into three phases for a parabolic blend at both ends:

1.  **Acceleration Phase (Parabolic):** From $t=0$ to $t=t_{accel}$.
2.  **Constant Velocity Phase (Linear):** From $t=t_{accel}$ to $t=T - t_{accel}$.
3.  **Deceleration Phase (Parabolic):** From $t=T - t_{accel}$ to $t=T$.

The total distance covered is $q_f - q_s$. The distance covered in the acceleration and deceleration phases needs to be calculated.

A common approach for parabolic blends involves creating a trapezoidal velocity profile and then smoothing the corners of the trapezoid with parabolic segments.

**Example: Trapezoidal Velocity Profile Smoothed with Parabolic Blends**

Imagine a simple motion from point A to point C, passing through point B.

*   **Pure Linear Motion (A to C):** Instantaneous change in velocity.
*   **Trapezoidal Velocity Profile:**
    *   Starts with zero velocity.
    *   Accelerates linearly to a constant velocity.
    *   Moves at constant velocity.
    *   Decelerates linearly to zero velocity.
    *   This results in continuous velocity but discontinuous acceleration at the transition points.

*   **Parabolic Blend (Smoothing the Trapezoid):**
    *   **Acceleration Phase:** A parabolic profile starts from zero velocity and reaches the desired constant velocity at time $t_1$. The acceleration is linear.
    *   **Constant Velocity Phase:** The velocity is constant.
    *   **Deceleration Phase:** A parabolic profile smoothly reduces velocity to zero at time $t_2$. The acceleration is linear.

The overall velocity profile will look like a trapezoid with rounded corners. The parabolic blends ensure continuous acceleration.

**Mathematical Formulation (Simplified):**

Consider moving a joint from $q_{start}$ to $q_{end}$ in time $T_{seg}$. We want to achieve this with a smooth start and end.

One method is to use a **parabolic trajectory segment** directly:

$q(t) = q_{start} + A \cdot t^2$ for $0 \le t \le T_{blend}$ (acceleration)
$q(t) = q_{start} + A \cdot T_{blend}^2 + V_{const} \cdot (t - T_{blend})$ for $T_{blend} < t < T_{seg} - T_{blend}$ (constant velocity)
$q(t) = q_{end} - A \cdot T_{blend}^2 + V_{const} \cdot (T_{seg} - T_{blend}) - A \cdot (T_{seg} - t)^2$ for $T_{seg} - T_{blend} \le t \le T_{seg}$ (deceleration)

Where:
*   $V_{const} = A \cdot T_{blend}$ is the constant velocity achieved during the middle phase.
*   The total distance covered is $q_{end} - q_{start}$.
*   The total time is $T_{seg}$.
*   $T_{blend}$ is the duration of the acceleration/deceleration phase.

The total distance is approximately $V_{const} \cdot (T_{seg} - 2T_{blend}) + 2 \cdot \frac{1}{2} V_{const} T_{blend} = V_{const} \cdot T_{seg}$.

$q_{end} - q_{start} = V_{const} \cdot T_{seg}$
$V_{const} = \frac{q_{end} - q_{start}}{T_{seg}}$

We also need to relate $T_{blend}$ and $A$.
The velocity profile is:
$\dot{q}(t) = 2At$ for $0 \le t \le T_{blend}$
$\dot{q}(t) = V_{const}$ for $T_{blend} < t < T_{seg} - T_{blend}$
$\dot{q}(t) = V_{const} - 2A(t - (T_{seg} - T_{blend}))$ for $T_{seg} - T_{blend} \le t \le T_{seg}$

At $t = T_{blend}$, $2AT_{blend} = V_{const}$.
$A = \frac{V_{const}}{2T_{blend}} = \frac{q_{end} - q_{start}}{2T_{seg}T_{blend}}$

The acceleration profile is:
$\ddot{q}(t) = 2A$ for $0 \le t \le T_{blend}$
$\ddot{q}(t) = 0$ for $T_{blend} < t < T_{seg} - T_{blend}$
$\ddot{q}(t) = -2A$ for $T_{seg} - T_{blend} \le t \le T_{seg}$

This results in a constant acceleration phase followed by a constant velocity phase and a constant deceleration phase, with the transitions being parabolic in velocity.

**More Sophisticated Blends (e.g., using 5th-Order Polynomials):**

For more complex scenarios, especially when joining multiple segments and needing continuity of acceleration and jerk, 5th-order polynomials are preferred.

Consider a segment from $q_0$ to $q_f$ over time $T$. We define the boundary conditions at $t=0$ and $t=T$:
*   $q(0) = q_0$, $\dot{q}(0) = \dot{q}_{start}$, $\ddot{q}(0) = \ddot{q}_{start}$
*   $q(T) = q_f$, $\dot{q}(T) = \dot{q}_{end}$, $\ddot{q}(T) = \ddot{q}_{end}$

A 5th-order polynomial $q(t) = a_5 t^5 + a_4 t^4 + a_3 t^3 + a_2 t^2 + a_1 t + a_0$ has 6 coefficients. These 6 boundary conditions allow us to uniquely determine the polynomial.

When joining segments, the end conditions of one segment become the start conditions of the next. For smooth parabolic blends between linear segments:

*   **Segment 1 (A to B):** $q_1(t)$, ends at time $T_1$.
    *   $q_1(T_1) = q_B$, $\dot{q}_1(T_1) = \dot{q}_{B1}$, $\ddot{q}_1(T_1) = \ddot{q}_{B1}$
*   **Segment 2 (B to C):** $q_2(t)$, starts at time $T_2$.
    *   $q_2(T_2) = q_B$, $\dot{q}_2(T_2) = \dot{q}_{B2}$, $\ddot{q}_2(T_2) = \ddot{q}_{B2}$

For a smooth transition at point B, we must have:
*   $q_1(T_1) = q_2(T_2)$ (same position)
*   $\dot{q}_1(T_1) = \dot{q}_2(T_2)$ (continuous velocity)
*   $\ddot{q}_1(T_1) = \ddot{q}_2(T_2)$ (continuous acceleration)

This is achieved by choosing appropriate polynomial segments. For a linear motion profile with parabolic blends, we aim to transition from a zero acceleration state, through a linear velocity segment, to another zero acceleration state smoothly.

**Practical Implementation Example (Two Segments):**

Consider moving a joint from $q_A$ to $q_B$ in time $T_{AB}$ and then from $q_B$ to $q_C$ in time $T_{BC}$.

1.  **Segment A to B:**
    *   Start: $q(0)=q_A$, $\dot{q}(0)=0$, $\ddot{q}(0)=0$.
    *   End: $q(T_{AB})=q_B$, $\dot{q}(T_{AB})=V_{AB}$, $\ddot{q}(T_{AB})=0$.
    *   We can use a 3rd-order polynomial for this segment to achieve zero acceleration at both ends and a linear velocity profile in between.
        $q(t) = q_A + \frac{q_B - q_A}{T_{AB}} t + \frac{C_1}{T_{AB}^3} t^3$
        To satisfy $\dot{q}(T_{AB}) = V_{AB}$, where $V_{AB} = \frac{q_B - q_A}{T_{AB}}$:
        $\dot{q}(t) = \frac{q_B - q_A}{T_{AB}} + \frac{3C_1}{T_{AB}^3} t^2$
        $\dot{q}(T_{AB}) = \frac{q_B - q_A}{T_{AB}} + \frac{3C_1}{T_{AB}^2} = V_{AB}$
        This implies $\frac{3C_1}{T_{AB}^2} = 0$, so $C_1=0$. This leads back to a simple linear segment with discontinuous acceleration.

    *   To introduce a smooth acceleration phase, we can use a polynomial that starts with zero velocity and acceleration, and ends with a desired velocity and zero acceleration. A 5th-order polynomial is suitable.
        Let's define the velocity profile:
        *   Acceleration phase (parabolic blend): $0 \to V_{max}$ in time $T_{accel}$.
        *   Constant velocity phase: $V_{max}$.
        *   Deceleration phase (parabolic blend): $V_{max} \to 0$ in time $T_{decel}$.

        A 5th-order polynomial for the velocity can achieve this. Or, more directly, we can think of the position as a sequence of polynomial segments.

    *   **Common Approach for Parabolic Blends (Simplified):**
        Assume a desired velocity profile that starts at zero, ramps up to a peak velocity, stays constant for a while, and ramps down to zero. The ramps are parabolic.
        *   **Phase 1 (Parabolic Acceleration):** From $t=0$ to $t=T_{accel}$.
            $q(t) = q_0 + v_0 t + \frac{1}{2} a_0 t^2 + \dots$ (using low-order polynomials).
            A simple parabolic trajectory segment:
            $q(t) = q_0 + (\frac{V_{peak}}{T_{accel}})t + \frac{q_0 + \frac{1}{2} V_{peak} T_{accel}}{T_{accel}^2} t^2$ (This is not a standard parabolic profile, but illustrates the idea of quadratic changes).
            A more standard parabolic acceleration would imply constant acceleration: $\ddot{q}(t) = \text{constant}$.
            $q(t) = q_0 + \dot{q}_0 t + \frac{1}{2}\ddot{q}_0 t^2$.
            If $\dot{q}_0 = 0$ and $\ddot{q}_0$ is constant, the velocity $\dot{q}(t) = \ddot{q}_0 t$ is linear. This leads to the "trapezoidal velocity" profile with sharp corners.

        *   **The "Parabolic Blend" Concept:** It implies smooth transitions where velocity and acceleration are continuous. This is often achieved by "rounding" the corners of a trapezoidal velocity profile.

        **Alternative: 3-4-5 Polynomials for Velocity Transitions**
        A 3rd-order polynomial can be used to transition velocity from $v_1$ to $v_2$ over time $T$.
        $\dot{q}(t) = v_1 + (v_2 - v_1) \cdot (3(\frac{t}{T})^2 - 2(\frac{t}{T})^3)$ for $0 \le t \le T$.
        This polynomial ensures $\dot{q}(0) = v_1$, $\dot{q}(T) = v_2$, and $\ddot{q}(0) = 0$, $\ddot{q}(T) = 0$.

        **Applying this to Linear Trajectory with Parabolic Blends:**
        Consider a motion from configuration $q_A$ to $q_B$ and then to $q_C$.
        *   **Segment 1 (A to B):**
            *   Start at $q_A$, $\dot{q}_A=0$, $\ddot{q}_A=0$.
            *   Accelerate to an intermediate velocity $v_1$ at time $t_1$.
            *   Move with constant velocity $v_1$ from $t_1$ to $t_2$.
            *   Decelerate from $v_1$ to $v_B$ at time $T_{AB}$.
        *   **Segment 2 (B to C):**
            *   Start at $q_B$, $\dot{q}_B=v_B$, $\ddot{q}_B=0$.
            *   Accelerate to an intermediate velocity $v_2$ at time $T_{AB} + t_3$.
            *   Move with constant velocity $v_2$ from $T_{AB} + t_3$ to $T_{AB} + t_4$.
            *   Decelerate from $v_2$ to $v_C$ at time $T_{AB} + T_{BC}$.

        This still feels like a modified trapezoidal velocity. The "parabolic blend" usually refers to how the *corners* of the trapezoid are smoothed.

        **A more common interpretation of "parabolic blend" in robotics trajectory planning refers to using a parabolic function for the acceleration/deceleration phases to achieve smooth velocity transitions.**

        Let's focus on generating a single segment with a parabolic blend at the start and end, effectively creating a "rounded trapezoid" velocity profile.

        **Scenario:** Move a joint from $q_s$ to $q_f$ in time $T_{total}$.
        We want a profile where:
        *   $q(0) = q_s$, $\dot{q}(0) = 0$, $\ddot{q}(0) = 0$
        *   $q(T_{total}) = q_f$, $\dot{q}(T_{total}) = 0$, $\ddot{q}(T_{total}) = 0$

        This can be achieved with a **5th-order polynomial**.
        $q(t) = a_5 t^5 + a_4 t^4 + a_3 t^3 + a_2 t^2 + a_1 t + a_0$
        $\dot{q}(t) = 5a_5 t^4 + 4a_4 t^3 + 3a_3 t^2 + 2a_2 t + a_1$
        $\ddot{q}(t) = 20a_5 t^3 + 12a_4 t^2 + 6a_3 t + 2a_2$

        Using boundary conditions:
        1.  $q(0) = q_s \implies a_0 = q_s$
        2.  $\dot{q}(0) = 0 \implies a_1 = 0$
        3.  $\ddot{q}(0) = 0 \implies 2a_2 = 0 \implies a_2 = 0$

        So the polynomial simplifies to:
        $q(t) = a_5 t^5 + a_4 t^4 + a_3 t^3 + q_s$
        $\dot{q}(t) = 5a_5 t^4 + 4a_4 t^3 + 3a_3 t^2$
        $\ddot{q}(t) = 20a_5 t^3 + 12a_4 t^2 + 6a_3 t$

        Now, the end conditions at $t = T_{total}$:
        4.  $q(T_{total}) = q_f \implies a_5 T_{total}^5 + a_4 T_{total}^4 + a_3 T_{total}^3 = q_f - q_s$
        5.  $\dot{q}(T_{total}) = 0 \implies 5a_5 T_{total}^4 + 4a_4 T_{total}^3 + 3a_3 T_{total}^2 = 0$
        6.  $\ddot{q}(T_{total}) = 0 \implies 20a_5 T_{total}^3 + 12a_4 T_{total}^2 + 6a_3 T_{total} = 0$

        From (6), if $T_{total} \ne 0$: $20a_5 T_{total}^2 + 12a_4 T_{total} + 6a_3 = 0$.
        From (5), if $T_{total} \ne 0$: $5a_5 T_{total}^3 + 4a_4 T_{total}^2 + 3a_3 T_{total} = 0$.

        Let $T = T_{total}$.
        Divide (6) by $6T$: $\frac{10}{3}a_5 T + 2a_4 + \frac{1}{T}a_3 = 0$.
        Divide (5) by $3T^2$: $\frac{5}{3}a_5 T^2 + \frac{4}{3}a_4 T + a_3 = 0$.

        This system can be solved for $a_3, a_4, a_5$. A common solution for this specific set of boundary conditions (zero velocity and acceleration at start and end) yields:
        $a_3 = \frac{10(q_f - q_s)}{T^3}$
        $a_4 = -\frac{15(q_f - q_s)}{T^4}$
        $a_5 = \frac{6(q_f - q_s)}{T^5}$

        This results in a **smooth S-curve profile** for position, velocity, and acceleration. The velocity profile will ramp up and down parabolically, and the acceleration profile will be a smooth hump. This is the essence of linear trajectory with parabolic blends aiming for smooth start/stop.

        **Combining Segments:**
        If we have a sequence of points $q_0, q_1, q_2, \dots, q_N$, we can generate trajectories between them. For smooth transitions between segments (e.g., $q_{i-1} \to q_i$ and $q_i \to q_{i+1}$), the end conditions of the first segment must match the start conditions of the second segment.

        *   Segment $i-1 \to i$: $q_{i-1}(t)$, from $t=0$ to $T_i$.
            End conditions: $q_i(T_i)$, $\dot{q}_i(T_i)$, $\ddot{q}_i(T_i)$.
        *   Segment $i \to i+1$: $q_i(t)$, from $t=0$ to $T_{i+1}$.
            Start conditions: $q_i(0)$, $\dot{q}_i(0)$, $\ddot{q}_i(0)$.

        For continuity:
        *   $q_i(T_i) = q_i(0)$
        *   $\dot{q}_i(T_i) = \dot{q}_i(0)$
        *   $\ddot{q}_i(T_i) = \ddot{q}_i(0)$

        This is achieved by appropriately selecting the polynomials for each segment. For instance, if the desired intermediate motion is linear (constant velocity), the parabolic blend occurs at the start and end.

### 3. Benefits of Linear Trajectory with Parabolic Blends

*   **Smoothness:** Continuous velocity and acceleration reduce jerk and vibrations.
*   **Reduced Wear and Tear:** Less stress on actuators and mechanical components.
*   **Increased Speed:** Allows for higher overall speeds as the ramp-up and ramp-down are managed smoothly.
*   **Improved Accuracy:** Reduced vibrations lead to more precise positioning.
*   **Human-Robot Interaction:** More comfortable and safer interaction when humans are in the vicinity or collaborating.

**Textbook References:**

*   **Craig (2002):** Discusses various trajectory generation methods including point-to-point and continuous path planning. Section on "Polynomial Trajectories" is highly relevant.
*   **Schilling (1996):** Chapter 7, "Path and Trajectory Generation," covers polynomial trajectories and their use in smoothing.
*   **Mittal (2003):** Chapter on Trajectory Generation often details these polynomial-based methods for smooth motion.
*   **Ghosal (n.d.):** Similar coverage on motion planning and trajectory generation.
*   **Siciliano, Khatib (Handbook):** Likely contains detailed algorithms for trajectory generation.
*   **Lynch & Park (Modern Robotics):** Excellent coverage of trajectory generation, including polynomial methods and practical considerations.

**Course Outcomes Alignment:**

*   **CO3: Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion (Knowledge Level: K4, K5)** - This topic directly covers trajectory planning in both spaces with an emphasis on smoothness and performance.

### 4. Applications

*   **Industrial Robots:** For tasks requiring high speed and accuracy, such as pick-and-place, assembly, and welding.
*   **Collaborative Robots (Cobots):** Essential for safe and comfortable human-robot interaction.
*   **Mobile Robots:** For smooth navigation and obstacle avoidance.
*   **CNC Machines:** To ensure smooth tool movements for precision machining.

---

## Practice Questions and Answers

**Question 1:**
What is the primary advantage of using parabolic blends in robot trajectory planning compared to simple linear trajectories?

**Answer:**
The primary advantage is the **smoothness** of the motion. Parabolic blends ensure continuity of velocity and acceleration, which reduces jerk, vibrations, and wear on the robot's components, allowing for potentially higher speeds and more precise movements. Simple linear trajectories often result in discontinuous acceleration at the start and end of segments.

---

**Question 2:**
Explain why a 5th-order polynomial is often used for generating smooth trajectories with parabolic blends.

**Answer:**
A 5th-order polynomial has 6 coefficients. This allows us to specify 6 boundary conditions. For a trajectory segment, these conditions can be the initial and final position, velocity, and acceleration. By setting the initial velocity and acceleration to zero and the final velocity and acceleration to zero (for a stop at the end of the segment), or by matching these values between consecutive segments, a 5th-order polynomial can generate a smooth, S-shaped profile for position and a continuous profile for velocity and acceleration, effectively creating parabolic blends at the transitions.

---

**Question 3:**
Consider a single joint that needs to move from $q_s = 10$ radians to $q_f = 50$ radians in $T = 5$ seconds, with zero initial and final velocity and acceleration. Determine the coefficients $a_3, a_4, a_5$ for the 5th-order polynomial $q(t) = a_5 t^5 + a_4 t^4 + a_3 t^3 + q_s$ to achieve this motion.

**Answer:**
We are given the simplified 5th-order polynomial form for zero initial velocity and acceleration.
$q(t) = a_5 t^5 + a_4 t^4 + a_3 t^3 + q_s$
$q_s = 10$, $q_f = 50$, $T = 5$.

The relevant equations for the coefficients are:
$a_3 = \frac{10(q_f - q_s)}{T^3}$
$a_4 = -\frac{15(q_f - q_s)}{T^4}$
$a_5 = \frac{6(q_f - q_s)}{T^5}$

Let $\Delta q = q_f - q_s = 50 - 10 = 40$ radians.
$T^3 = 5^3 = 125$
$T^4 = 5^4 = 625$
$T^5 = 5^5 = 3125$

$a_3 = \frac{10 \times 40}{125} = \frac{400}{125} = 3.2$
$a_4 = -\frac{15 \times 40}{625} = -\frac{600}{625} = -0.96$
$a_5 = \frac{6 \times 40}{3125} = \frac{240}{3125} = 0.0768$

So, the trajectory for the joint is:
$q(t) = 0.0768 t^5 - 0.96 t^4 + 3.2 t^3 + 10$ for $0 \le t \le 5$.

---

**Question 4:**
Why is it generally not ideal to simply use linear interpolation in Cartesian space for all robot motions, even if the start and end points are desired as a straight line?

**Answer:**
Linear interpolation in Cartesian space results in a straight line for the end-effector's position. However, due to the robot's kinematics (especially for redundant or non-trivial manipulators), the corresponding joint space trajectories are often **non-linear and complex**. This non-linear joint motion can lead to:
1.  **Variable joint velocities and accelerations:** Even if the end-effector moves at a constant velocity, the joint velocities can vary significantly, potentially exceeding actuator limits.
2.  **Jerky motion:** The complex joint movements can cause vibrations and jerky end-effector motions, even if the path itself is straight.
3.  **Computational complexity:** Calculating the inverse kinematics at each point along the Cartesian path to determine the required joint values can be computationally intensive.
4.  **Singularity avoidance:** Simple Cartesian path following might inadvertently lead the robot towards singularities.

Therefore, while Cartesian paths are intuitive for defining task-space goals, their execution often requires careful trajectory planning in joint space, potentially using techniques like parabolic blends, to ensure smooth, controlled, and efficient motion.

---

## Important Points to Remember

*   **Smoothness is Key:** Parabolic blends are crucial for smooth transitions, reducing jerk and vibration.
*   **Continuity:** The goal is to achieve continuity in position, velocity, and acceleration (and sometimes jerk) between motion segments.
*   **5th-Order Polynomials:** A powerful tool for generating S-curve profiles, providing zero velocity and acceleration at the start and end of a segment.
*   **Joint vs. Cartesian Space:** Trajectories can be planned in either space. Joint space planning is often simpler computationally but doesn't guarantee a straight-line Cartesian path. Cartesian space planning ensures the end-effector follows a desired geometric path but can lead to complex joint motions.
*   **Balancing Act:** Trajectory planning involves balancing the desired path, speed requirements, and the robot's kinematic and dynamic constraints.

---
This comprehensive set of notes covers the topic of linear trajectory with parabolic blends, aligning with the provided learning and course outcomes and referencing the specified textbooks. The inclusion of definitions, explanations, mathematical formulations, examples, practice questions, and key takeaways aims to provide a thorough understanding of this crucial aspect of robotics trajectory planning.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
