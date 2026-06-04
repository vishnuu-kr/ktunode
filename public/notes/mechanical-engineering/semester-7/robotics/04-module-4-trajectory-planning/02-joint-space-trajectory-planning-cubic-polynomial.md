---
title: "Joint space trajectory planning- cubic polynomial"
subject: "ROBOTICS"
module: "Module 4: Trajectory Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464256"
status: "completed"
scrapedAt: "2026-05-20T18:18:50.193Z"
---
# ROBOTICS - Module 4: Trajectory Planning

## Topic: Joint Space Trajectory Planning - Cubic Polynomial

---

### **1. Introduction to Trajectory Planning**

**Learning Outcome Covered:**
*   **CO3:** Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (Knowledge Level: K4)

**Key Concepts:**
*   **Trajectory:** A time-ordered sequence of configurations (positions and orientations) for the robot's end-effector or joints. It defines *how* the robot moves from a start configuration to a goal configuration.
*   **Joint Space:** The space defined by the values of the robot's joint variables. A trajectory in joint space specifies the time evolution of each joint angle (for revolute joints) or displacement (for prismatic joints).
*   **Cartesian Space (Task Space):** The space defined by the position and orientation of the robot's end-effector in the world frame.
*   **Path:** The geometric description of the motion, independent of time.
*   **Trajectory:** A path with an associated time history.

**Why Joint Space Trajectory Planning?**
*   **Simpler:** It's generally easier to plan and control trajectories in joint space because the robot's kinematics are inherently defined by its joint variables. The relationship between joint space and Cartesian space can be complex, especially with redundant robots or when dealing with singularities.
*   **Avoids Singularities:** Planning directly in Cartesian space can lead to trajectories that pass through or near singularities, where the robot loses degrees of freedom. Joint space planning can mitigate this.
*   **Easier to Achieve Smooth Motion:** Smooth joint motions often result in smoother end-effector motions, reducing vibrations and stress on the robot.

**Textbook References:**
*   **Schilling, R. J. (1996).** *Fundamentals of Robotics – Analysis and Control.* (Chapter on Trajectory Generation)
*   **Craig, J. J. (2002).** *Introduction to Robotics (Mechanics and Control).* (Chapter on Trajectory Generation)
*   **Saha, S. K.** *Introduction to Robotics.* (Chapter on Motion Planning)

---

### **2. Cubic Polynomial Trajectory Generation**

**Learning Outcome Covered:**
*   **CO3:** Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (Knowledge Level: K4)

**Key Concepts:**
*   **Polynomials:** Functions that can be expressed as a sum of terms, each consisting of a constant multiplied by a non-negative integer power of a variable (e.g., $at^3 + bt^2 + ct + d$).
*   **Degrees of Freedom (DoF):** The number of independent parameters required to specify the configuration of the robot. For a simple joint, it's one variable. For a multi-joint robot, it's the number of joints.
*   **Boundary Conditions:** Constraints on the trajectory at specific points in time, usually the start and end of the motion segment. These can include position, velocity, and acceleration.

**Description:**
A cubic polynomial is a function of the form:
$q(t) = a_3 t^3 + a_2 t^2 + a_1 t + a_0$

where:
*   $q(t)$ is the joint position at time $t$.
*   $a_3, a_2, a_1, a_0$ are coefficients that need to be determined.
*   $t$ is the time variable.

The velocity and acceleration of the joint are given by the first and second derivatives of $q(t)$:
$q'(t) = \frac{dq}{dt} = 3a_3 t^2 + 2a_2 t + a_1$
$q''(t) = \frac{d^2q}{dt^2} = 6a_3 t + 2a_2$

**Why Cubic Polynomials?**
*   **Smoothness:** A cubic polynomial allows for control over position and velocity at the start and end points, ensuring smooth transitions and avoiding abrupt changes in motion.
*   **Sufficient DoF for Constraints:** With four coefficients ($a_3, a_2, a_1, a_0$), a cubic polynomial can satisfy up to four boundary conditions. This is often sufficient for simple trajectory segments, like moving between two waypoints with specified initial and final velocities.

**Typical Boundary Conditions for a Cubic Polynomial:**
Consider a single joint moving from an initial position $q_{start}$ at $t=0$ to a final position $q_{end}$ at $t=T$.
1.  **Position at $t=0$:** $q(0) = q_{start}$
2.  **Velocity at $t=0$:** $q'(0) = \dot{q}_{start}$
3.  **Position at $t=T$:** $q(T) = q_{end}$
4.  **Velocity at $t=T$:** $q'(T) = \dot{q}_{end}$

**Deriving the Coefficients:**
Let's apply these boundary conditions to the cubic polynomial and its derivatives:

1.  $q(0) = a_3(0)^3 + a_2(0)^2 + a_1(0) + a_0 = a_0$
    Therefore, $a_0 = q_{start}$.

2.  $q'(0) = 3a_3(0)^2 + 2a_2(0) + a_1 = a_1$
    Therefore, $a_1 = \dot{q}_{start}$.

Now we have:
$q(t) = a_3 t^3 + a_2 t^2 + \dot{q}_{start} t + q_{start}$
$q'(t) = 3a_3 t^2 + 2a_2 t + \dot{q}_{start}$

Apply the remaining two boundary conditions:

3.  $q(T) = a_3 T^3 + a_2 T^2 + \dot{q}_{start} T + q_{start} = q_{end}$
    Rearranging: $a_3 T^3 + a_2 T^2 = q_{end} - q_{start} - \dot{q}_{start} T$  (Equation 1)

4.  $q'(T) = 3a_3 T^2 + 2a_2 T + \dot{q}_{start} = \dot{q}_{end}$
    Rearranging: $3a_3 T^2 + 2a_2 T = \dot{q}_{end} - \dot{q}_{start}$ (Equation 2)

We now have a system of two linear equations (Equation 1 and Equation 2) with two unknowns ($a_3$ and $a_2$).

Let $\Delta q = q_{end} - q_{start}$ and $\Delta \dot{q} = \dot{q}_{end} - \dot{q}_{start}$.
The equations become:
1.  $a_3 T^3 + a_2 T^2 = \Delta q - \dot{q}_{start} T$
2.  $3a_3 T^2 + 2a_2 T = \Delta \dot{q}$

Multiply Equation 1 by 2: $2a_3 T^3 + 2a_2 T^2 = 2(\Delta q - \dot{q}_{start} T)$
Subtract this from Equation 2 (multiplied by T):
$(3a_3 T^2 + 2a_2 T)T - (2a_3 T^3 + 2a_2 T^2) = (\Delta \dot{q})T - 2(\Delta q - \dot{q}_{start} T)$
$3a_3 T^3 + 2a_2 T^2 - 2a_3 T^3 - 2a_2 T^2 = T\Delta \dot{q} - 2\Delta q + 2T\dot{q}_{start}$
$a_3 T^3 = T\Delta \dot{q} - 2\Delta q + 2T\dot{q}_{start}$
$a_3 = \frac{T\Delta \dot{q} - 2\Delta q + 2T\dot{q}_{start}}{T^3} = \frac{2(T\dot{q}_{start} - \Delta q)}{T^3} + \frac{\Delta \dot{q}}{T^2}$
$a_3 = \frac{2}{T^3}(q_{start} - q_{end}) + \frac{1}{T^2}(\dot{q}_{start} + \dot{q}_{end})$  *(Correction: Re-deriving carefully)*

Let's solve the system more systematically:
From Equation 2: $2a_2 T = \Delta \dot{q} - 3a_3 T^2 \implies a_2 = \frac{\Delta \dot{q} - 3a_3 T^2}{2T}$

Substitute $a_2$ into Equation 1:
$a_3 T^3 + \left(\frac{\Delta \dot{q} - 3a_3 T^2}{2T}\right) T^2 = \Delta q - \dot{q}_{start} T$
$a_3 T^3 + \frac{\Delta \dot{q} T^2}{2T} - \frac{3a_3 T^2 T^2}{2T} = \Delta q - \dot{q}_{start} T$
$a_3 T^3 + \frac{\Delta \dot{q} T}{2} - \frac{3}{2}a_3 T^3 = \Delta q - \dot{q}_{start} T$
$-\frac{1}{2}a_3 T^3 = \Delta q - \dot{q}_{start} T - \frac{\Delta \dot{q} T}{2}$
$a_3 T^3 = -2(\Delta q - \dot{q}_{start} T) - \frac{\Delta \dot{q} T}{2} = -2\Delta q + 2\dot{q}_{start} T - \frac{\Delta \dot{q} T}{2}$
$a_3 = \frac{2\dot{q}_{start} T - 2\Delta q - \frac{1}{2}\Delta \dot{q} T}{T^3} = \frac{2\dot{q}_{start}}{T^2} - \frac{2\Delta q}{T^3} - \frac{\Delta \dot{q}}{2T}$

Let's use the common formulation found in textbooks:
$q(t) = a_3 t^3 + a_2 t^2 + a_1 t + a_0$

Boundary conditions:
1.  $q(0) = q_0$
2.  $q'(0) = \dot{q}_0$
3.  $q(T) = q_f$
4.  $q'(T) = \dot{q}_f$

From (1): $a_0 = q_0$
From (2): $a_1 = \dot{q}_0$

Substitute into (3) and (4):
$q_f = a_3 T^3 + a_2 T^2 + \dot{q}_0 T + q_0$
$\dot{q}_f = 3a_3 T^2 + 2a_2 T + \dot{q}_0$

Rearranging:
$a_3 T^3 + a_2 T^2 = q_f - q_0 - \dot{q}_0 T$  (Eq A)
$3a_3 T^2 + 2a_2 T = \dot{q}_f - \dot{q}_0$  (Eq B)

From (Eq B), $2a_2 T = \dot{q}_f - \dot{q}_0 - 3a_3 T^2$
$a_2 = \frac{\dot{q}_f - \dot{q}_0}{2T} - \frac{3}{2}a_3 T$

Substitute $a_2$ into (Eq A):
$a_3 T^3 + \left(\frac{\dot{q}_f - \dot{q}_0}{2T} - \frac{3}{2}a_3 T\right) T^2 = q_f - q_0 - \dot{q}_0 T$
$a_3 T^3 + \frac{(\dot{q}_f - \dot{q}_0)T}{2} - \frac{3}{2}a_3 T^3 = q_f - q_0 - \dot{q}_0 T$
$-\frac{1}{2}a_3 T^3 = q_f - q_0 - \dot{q}_0 T - \frac{(\dot{q}_f - \dot{q}_0)T}{2}$
$a_3 T^3 = -2(q_f - q_0 - \dot{q}_0 T) - \frac{(\dot{q}_f - \dot{q}_0)T}{2}$
$a_3 T^3 = -2(q_f - q_0) + 2\dot{q}_0 T - \frac{1}{2}(\dot{q}_f - \dot{q}_0)T$
$a_3 = \frac{-2(q_f - q_0)}{T^3} + \frac{2\dot{q}_0}{T^2} - \frac{(\dot{q}_f - \dot{q}_0)}{2T}$
$a_3 = \frac{2(q_0 - q_f)}{T^3} + \frac{2\dot{q}_0}{T^2} - \frac{\dot{q}_f}{2T} + \frac{\dot{q}_0}{2T}$
$a_3 = \frac{2(q_0 - q_f)}{T^3} + \frac{5\dot{q}_0}{2T^2} - \frac{\dot{q}_f}{2T}$

Now, find $a_2$:
$a_2 = \frac{\dot{q}_f - \dot{q}_0}{2T} - \frac{3}{2}a_3 T$
$a_2 = \frac{\dot{q}_f - \dot{q}_0}{2T} - \frac{3T}{2} \left( \frac{2(q_0 - q_f)}{T^3} + \frac{5\dot{q}_0}{2T^2} - \frac{\dot{q}_f}{2T} \right)$
$a_2 = \frac{\dot{q}_f - \dot{q}_0}{2T} - \frac{3(q_0 - q_f)}{T^2} - \frac{15\dot{q}_0}{4T} + \frac{3\dot{q}_f}{4T}$
$a_2 = \frac{2(\dot{q}_f - \dot{q}_0) - 2\dot{q}_0}{4T} + \frac{3(\dot{q}_f - \dot{q}_0)}{4T} - \frac{3(q_0 - q_f)}{T^2} - \frac{15\dot{q}_0}{4T}$
$a_2 = \frac{2\dot{q}_f - 2\dot{q}_0 - 2\dot{q}_0 + 3\dot{q}_f - 3\dot{q}_0 - 15\dot{q}_0}{4T} - \frac{3(q_0 - q_f)}{T^2}$
$a_2 = \frac{5\dot{q}_f - 22\dot{q}_0}{4T} - \frac{3(q_0 - q_f)}{T^2}$

Let's check a simpler case: $\dot{q}_0 = 0, \dot{q}_f = 0$.
Then $a_1 = 0$.
Eq A: $a_3 T^3 + a_2 T^2 = q_f - q_0$
Eq B: $3a_3 T^2 + 2a_2 T = 0 \implies a_2 = -\frac{3}{2} a_3 T$

Substitute $a_2$:
$a_3 T^3 + (-\frac{3}{2} a_3 T) T^2 = q_f - q_0$
$a_3 T^3 - \frac{3}{2} a_3 T^3 = q_f - q_0$
$-\frac{1}{2} a_3 T^3 = q_f - q_0$
$a_3 = \frac{-2(q_f - q_0)}{T^3} = \frac{2(q_0 - q_f)}{T^3}$

$a_2 = -\frac{3}{2} \left(\frac{2(q_0 - q_f)}{T^3}\right) T = -\frac{3(q_0 - q_f)}{T^2}$

So, for zero initial and final velocities:
$q(t) = \frac{2(q_0 - q_f)}{T^3} t^3 - \frac{3(q_0 - q_f)}{T^2} t^2 + q_0$
$q(t) = q_0 + (q_f - q_0) \left[ 3 \left(\frac{t}{T}\right)^2 - 2 \left(\frac{t}{T}\right)^3 \right]$

This is the **Trapezoidal Trapezoidal** profile, which is obtained with cubic polynomials where initial and final velocities are zero.
Let $s = t/T$. Then $q(s) = q_0 + (q_f - q_0) (3s^2 - 2s^3)$.
$q'(s) = (q_f - q_0) (6s - 6s^2) / T$
$q''(s) = (q_f - q_0) (6 - 12s) / T^2$

**Textbook Reference:**
*   **Craig, J. J. (2002).** *Introduction to Robotics (Mechanics and Control).* (Section 5.2: Cubic Polynomials) This book provides a clear derivation of the coefficients.

**Summary of Coefficients (for zero initial and final velocities):**
$a_0 = q_{start}$
$a_1 = 0$
$a_2 = -\frac{3}{T^2}(q_{start} - q_{end})$
$a_3 = \frac{2}{T^3}(q_{start} - q_{end})$

**Trajectory Equation:**
$q(t) = q_{start} + (q_{end} - q_{start}) \left[ 3 \left(\frac{t}{T}\right)^2 - 2 \left(\frac{t}{T}\right)^3 \right]$

**Important Point:** Cubic polynomials are excellent for generating smooth motion between two points with specified start and end velocities (often set to zero for a smoother stop/start).

---

### **3. Cubic Polynomials for Multi-Point Trajectories**

**Learning Outcome Covered:**
*   **CO3:** Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (Knowledge Level: K4)

**Key Concepts:**
*   **Waypoints:** Intermediate points in space that the robot must pass through.
*   **Spline Interpolation:** Connecting multiple polynomial segments to form a continuous trajectory.
*   **Continuity:** Ensuring that the position, velocity, and acceleration are continuous at the connection points between polynomial segments.

**Description:**
A single cubic polynomial can only represent a motion between two points. To move between multiple waypoints, we can connect several cubic polynomial segments. Each segment represents a motion between two consecutive waypoints.

**Consider a trajectory with N waypoints:** $q_0, q_1, q_2, \dots, q_{N-1}$.
The motion is broken down into $N-1$ segments:
Segment 1: $q_0 \to q_1$ in time $T_1$
Segment 2: $q_1 \to q_2$ in time $T_2$
...
Segment N-1: $q_{N-2} \to q_{N-1}$ in time $T_{N-1}$

For each segment $i$ (from $q_{i-1}$ to $q_i$ over duration $T_i$), we can define a cubic polynomial:
$q_i(t) = a_{i3} t^3 + a_{i2} t^2 + a_{i1} t + a_{i0}$ for $0 \le t \le T_i$.

The boundary conditions for segment $i$ are:
*   Start: $q_i(0) = q_{i-1}$, $q_i'(0) = \dot{q}_{i-1}$
*   End: $q_i(T_i) = q_i$, $q_i'(T_i) = \dot{q}_i$

**Continuity Requirements:**
For a smooth trajectory, the velocity and acceleration must be continuous at the waypoints (except possibly the very start and end of the entire trajectory if desired).

*   **Position Continuity:** The end position of segment $i$ must match the start position of segment $i+1$. This is naturally satisfied if we use the waypoint positions as boundary conditions.
    *   $q_i(T_i) = q_{i+1}(0)$ (which is $q_i$ in our notation, so this is inherent).

*   **Velocity Continuity:** The end velocity of segment $i$ must match the start velocity of segment $i+1$.
    *   $q_i'(T_i) = q_{i+1}'(0)$

*   **Acceleration Continuity:** The end acceleration of segment $i$ must match the start acceleration of segment $i+1$.
    *   $q_i''(T_i) = q_{i+1}''(0)$

**The Challenge:**
When using cubic polynomials for each segment, the end velocity and acceleration of segment $i$ are determined by the coefficients $a_{i3}, a_{i2}, a_{i1}$ and the duration $T_i$. The start velocity and acceleration of segment $i+1$ are determined by its coefficients $a_{(i+1)3}, a_{(i+1)2}, a_{(i+1)1}$ and the duration $T_{i+1}$.

To satisfy continuity, we need to specify the velocities and accelerations at the intermediate waypoints. This often leads to a higher-order polynomial (quintic or higher) being required to satisfy all conditions simultaneously, or a more complex piecewise polynomial approach.

**Simplified Approach (Commonly used for basic cubic interpolation):**
If we fix the durations $T_i$ and we can specify the velocities ($\dot{q}_i$) and accelerations ($\ddot{q}_i$) at each waypoint, we can compute the coefficients for each segment.

Let's say we have waypoints $q_0, q_1, q_2$ and we want to move from $q_0$ to $q_1$ in $T_1$ and $q_1$ to $q_2$ in $T_2$.
We can specify:
*   $\dot{q}_0$ (initial velocity)
*   $\dot{q}_1$ (velocity at waypoint $q_1$)
*   $\dot{q}_2$ (final velocity)

**Segment 1 ($q_0 \to q_1$, time $T_1$):**
*   $q_1(0) = q_0$, $q_1'(0) = \dot{q}_0$
*   $q_1(T_1) = q_1$, $q_1'(T_1) = \dot{q}_1$
These four conditions are sufficient to determine the four coefficients for $q_1(t)$.

**Segment 2 ($q_1 \to q_2$, time $T_2$):**
*   $q_2(0) = q_1$, $q_2'(0) = \dot{q}_1$
*   $q_2(T_2) = q_2$, $q_2'(T_2) = \dot{q}_2$
These four conditions are sufficient to determine the four coefficients for $q_2(t)$.

**Issue:** The continuity of acceleration ($q_1''(T_1) = q_2''(0)$) is NOT guaranteed by this approach. It depends on the chosen $\dot{q}_i$ values.

**To ensure acceleration continuity:**
We would need to solve a system of equations. For $N$ waypoints, we have $N-1$ segments. Each segment has 4 coefficients, totaling $4(N-1)$ coefficients.
The continuity conditions provide constraints:
*   Position continuity: $N-1$ (inherent if waypoints are correct)
*   Velocity continuity: $N-2$ (at $q_1, q_2, \dots, q_{N-2}$)
*   Acceleration continuity: $N-2$ (at $q_1, q_2, \dots, q_{N-2}$)
*   Initial velocity: 1 ($\dot{q}_0$)
*   Final velocity: 1 ($\dot{q}_{N-1}$)

This suggests that we need to specify $2(N-2) + 2 = 2N-2$ values to determine the trajectory smoothly.
If we specify waypoint velocities $\dot{q}_0, \dot{q}_1, \dots, \dot{q}_{N-1}$ and waypoint accelerations $\ddot{q}_0, \ddot{q}_1, \dots, \ddot{q}_{N-1}$, and segment durations $T_i$, we can determine the coefficients.

**Textbook Reference:**
*   **Saha, S. K.** *Introduction to Robotics.* (Chapter on Motion Planning) discusses piecewise polynomial trajectories.

**Important Point:** When connecting cubic segments, careful consideration of waypoint velocities and accelerations is needed to ensure continuity and avoid jerky motion. Often, this requires additional constraints or a higher-order polynomial.

---

### **4. Limitations of Cubic Polynomials**

**Learning Outcome Covered:**
*   **CO3:** Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (Knowledge Level: K4)

**Key Concepts:**
*   **Cusp:** A sharp point or corner in a trajectory.
*   **Jerk:** The rate of change of acceleration ($q'''(t)$).
*   **Smoothness:** The degree to which the velocity and acceleration are continuous.

**Limitations:**
1.  **Zero Acceleration at Endpoints (Common Case):** When cubic polynomials are used with zero initial and final velocities ($\dot{q}_0 = \dot{q}_f = 0$), the acceleration at the start and end points is *also* zero (assuming the cubic polynomial form derived earlier). This can lead to a "flat" start and end to the motion. While smooth, it might not be optimal for dynamic performance.
2.  **Limited Control over Acceleration Profile:** A cubic polynomial can only guarantee continuity of position and velocity. The acceleration profile might not be optimal or may contain undesirable variations. For instance, the jerk ($q'''(t)$) is not continuous with a single cubic segment, meaning the rate of change of acceleration is not smooth.
3.  **Not Ideal for Very Complex Paths:** For paths with many sharp turns or highly dynamic requirements, higher-order polynomials (like quintic polynomials) or other trajectory generation methods (e.g., B-splines) might be more appropriate to achieve better smoothness and control.
4.  **No Explicit Obstacle Avoidance:** Cubic polynomial planning defines a path between specified points. It does not inherently incorporate obstacle avoidance. Obstacle avoidance would typically be a separate layer of planning or incorporated by defining intermediate waypoints that steer clear of obstacles.

**Textbook Reference:**
*   **Mittal, R. K.** *Robotics and Control.* (Chapter on Robot Motion Planning) may discuss limitations and alternatives.
*   **Ghosal, A.** *Robotics-Fundamental concepts and analysis.* (Chapter on Trajectory Planning)

**Important Point:** While cubic polynomials provide a good balance of simplicity and smoothness for many applications, understanding their limitations is crucial for selecting the appropriate trajectory generation method.

---

### **5. Application in Robotics and Relation to Course Outcomes**

**Course Outcomes Addressed:**
*   **CO3: Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion. (Knowledge Level: K4)**
    *   This topic directly addresses the "plan trajectories in joint space" aspect. The cubic polynomial is a fundamental tool for this. While not explicitly dealing with obstacle avoidance, it forms the basis upon which obstacle-avoiding paths are often constructed.

*   **CO1: Familiarise with anatomy, specifications and types of Robots (Knowledge Level: K2)**
    *   Understanding trajectory planning is essential to appreciate how robots execute tasks, which indirectly relates to their anatomy and specifications (e.g., joint limits, speed limits).

*   **CO4: Develop a dynamic model and design the controller for robotic manipulators (Knowledge Level: K4, K6)**
    *   The generated trajectory (position, velocity, acceleration) is the input for the robot's dynamic model and controller. The smoothness of the trajectory directly impacts the forces and torques required from the actuators and the effectiveness of the controller. Poor trajectories can lead to high accelerations and jerky motions that controllers struggle to follow.

**Examples:**
*   **Pick and Place Operation:** A robot arm needs to move from a "ready" position to a pick position, then to a place position, and back to "ready". Each leg of this motion can be planned using cubic polynomials between the key poses (configurations).
*   **Welding or Painting:** The robot follows a specific path in Cartesian space. This path is first converted into a sequence of joint space configurations. Then, cubic polynomials are used to generate smooth joint-space trajectories between these configurations.
*   **Automated Assembly:** Moving components requires precise and smooth motions to avoid collisions and ensure accurate placement. Cubic polynomials provide the necessary smoothness.

**Textbook Reference:**
*   **Siegwart, R.** *Introduction to Autonomous Mobile Robots.* (While focused on mobile robots, trajectory generation principles apply).
*   **Siciliano, Khatib.** *Handbook of Robotics.* (Comprehensive coverage of various planning techniques).
*   **Lynch, Park.** *Modern Robotics Mechanics, Planning and Control.* (Excellent modern perspective on planning and control).

**Important Point:** Trajectory planning is a critical link between high-level task planning (what to do) and low-level control (how to do it).

---

### **6. Practice Questions and Answers**

**Question 1:**
A robot joint needs to move from $0.5$ rad to $1.0$ rad in $2$ seconds. Assume zero initial and final velocities. Use a cubic polynomial to generate the trajectory. Find the coefficients $a_0, a_1, a_2, a_3$ and write the trajectory equation $q(t)$.

**Answer 1:**
Given:
*   $q_{start} = 0.5$ rad
*   $q_{end} = 1.0$ rad
*   $T = 2$ s
*   $\dot{q}_{start} = 0$ rad/s
*   $\dot{q}_{end} = 0$ rad/s

Using the formulas for zero initial and final velocities:
$a_0 = q_{start} = 0.5$

$a_1 = \dot{q}_{start} = 0$

$a_2 = -\frac{3}{T^2}(q_{start} - q_{end}) = -\frac{3}{(2 \text{ s})^2}(0.5 \text{ rad} - 1.0 \text{ rad})$
$a_2 = -\frac{3}{4 \text{ s}^2}(-0.5 \text{ rad}) = \frac{1.5}{4} \text{ rad/s}^2 = 0.375 \text{ rad/s}^2$

$a_3 = \frac{2}{T^3}(q_{start} - q_{end}) = \frac{2}{(2 \text{ s})^3}(0.5 \text{ rad} - 1.0 \text{ rad})$
$a_3 = \frac{2}{8 \text{ s}^3}(-0.5 \text{ rad}) = \frac{-1}{8} \text{ rad/s}^3 = -0.125 \text{ rad/s}^3$

The trajectory equation is:
$q(t) = a_3 t^3 + a_2 t^2 + a_1 t + a_0$
$q(t) = -0.125 t^3 + 0.375 t^2 + 0 \cdot t + 0.5$
$q(t) = -0.125 t^3 + 0.375 t^2 + 0.5$ for $0 \le t \le 2$ s.

Alternatively, using the normalized form:
$q(t) = q_{start} + (q_{end} - q_{start}) \left[ 3 \left(\frac{t}{T}\right)^2 - 2 \left(\frac{t}{T}\right)^3 \right]$
$q(t) = 0.5 + (1.0 - 0.5) \left[ 3 \left(\frac{t}{2}\right)^2 - 2 \left(\frac{t}{2}\right)^3 \right]$
$q(t) = 0.5 + 0.5 \left[ 3 \frac{t^2}{4} - 2 \frac{t^3}{8} \right]$
$q(t) = 0.5 + 0.5 \left[ \frac{3}{4} t^2 - \frac{1}{4} t^3 \right]$
$q(t) = 0.5 + \frac{3}{8} t^2 - \frac{1}{8} t^3$
$q(t) = 0.5 + 0.375 t^2 - 0.125 t^3$. This matches the coefficient-based result.

---

**Question 2:**
For the trajectory calculated in Question 1, what are the velocity and acceleration at $t=1$ s?

**Answer 2:**
The trajectory equation is $q(t) = -0.125 t^3 + 0.375 t^2 + 0.5$.
The velocity is $q'(t) = \frac{dq}{dt} = 3(-0.125) t^2 + 2(0.375) t = -0.375 t^2 + 0.75 t$.
The acceleration is $q''(t) = \frac{d^2q}{dt^2} = 2(-0.375) t + 0.75 = -0.75 t + 0.75$.

At $t=1$ s:
Velocity: $q'(1) = -0.375 (1)^2 + 0.75 (1) = -0.375 + 0.75 = 0.375$ rad/s.
Acceleration: $q''(1) = -0.75 (1) + 0.75 = -0.75 + 0.75 = 0$ rad/s$^2$.

---

**Question 3:**
What is the main advantage of using cubic polynomials for joint space trajectory planning compared to linear interpolation?

**Answer 3:**
The main advantage of cubic polynomials over linear interpolation is **smoothness**.
*   **Linear interpolation:** Results in a constant velocity between waypoints, but the velocity changes instantaneously (infinite acceleration) at the waypoints, leading to jerky motion.
*   **Cubic polynomial interpolation (with zero initial/final velocities):** Provides zero velocity and zero acceleration at the start and end points of each segment, ensuring smooth transitions between segments and significantly reducing jerk. This leads to less wear on the robot and more predictable motion.

---

### **7. Key Points to Remember**

*   **Joint Space vs. Cartesian Space:** Joint space planning is often preferred for its simplicity and ability to avoid singularities.
*   **Cubic Polynomial Form:** $q(t) = a_3 t^3 + a_2 t^2 + a_1 t + a_0$.
*   **Boundary Conditions:** Four conditions are needed to determine the four coefficients (typically start/end position and start/end velocity).
*   **Common Case:** Setting initial and final velocities to zero leads to a smooth, trapezoidal-like velocity profile.
*   **Multi-Point Paths:** Can be achieved by concatenating cubic polynomial segments, but requires careful handling of continuity at waypoints.
*   **Limitations:** Cubic polynomials don't explicitly handle obstacle avoidance and have limitations in controlling acceleration profiles and jerk.
*   **Relevance to Control:** The planned trajectory (position, velocity, acceleration) is the input to the robot's control system.

---

This comprehensive set of notes covers the fundamental aspects of cubic polynomial trajectory planning in joint space, aligning with the learning outcomes and course objectives. Remember to consult the provided textbooks for more in-depth derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
