---
title: "Robot Control: The control problem"
subject: "ROBOTICS"
module: "Module 4: Trajectory Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446425d"
status: "completed"
scrapedAt: "2026-05-20T18:18:55.166Z"
---
# ROBOTICS - Module 4: Trajectory Planning

## Topic: Robot Control: The Control Problem

### Introduction to Robot Control

Robot control is the process of commanding a robot to execute a desired motion or task. It involves translating a planned trajectory into actual physical movements of the robot's actuators. The "control problem" in robotics refers to the challenge of ensuring that the robot accurately follows the planned trajectory despite various uncertainties and disturbances.

### Learning Outcomes

This topic aims to equip students with the understanding of:

*   **The fundamental control problem in robotics:** Identifying the challenges in achieving accurate robot motion.
*   **Types of robot control:** Differentiating between various control strategies.
*   **Modeling for control:** Understanding the importance of dynamic models in control design.
*   **Basic control strategies:** Introducing fundamental control algorithms.
*   **Challenges in real-world robot control:** Recognizing factors that affect performance.

### Course Outcomes Alignment

This topic directly contributes to:

*   **CO4: Develop a dynamic model and design the controller for robotic manipulators (Knowledge Level: K4, K6)** - Understanding the control problem is a prerequisite for designing controllers and utilizing dynamic models.
*   **CO3: Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion (Knowledge Level: K4, K5)** - Effective trajectory execution relies on robust control.

---

## 1. The Fundamental Control Problem in Robotics

The core of robot control lies in making the robot's actual end-effector or joint positions match the desired positions specified by the trajectory. However, this is complicated by several factors:

*   **System Dynamics:** The robot's motion is governed by complex physical laws (Newton-Euler, Lagrange). These dynamics are non-linear, coupled, and can vary with the robot's configuration.
    *   **Key Concepts:** Inertia, Coriolis forces, centrifugal forces, gravity, friction.
    *   **Textbook Reference:** Schilling (Chapter 6: Dynamics), Craig (Chapter 7: Dynamics), Ghosal (Chapter 5: Dynamic Modeling).
*   **Uncertainties:** Real-world robots have uncertainties that can cause deviations from the planned trajectory.
    *   **Parameter Uncertainties:** Inaccuracies in mass, inertia, friction coefficients, etc.
    *   **Unmodeled Dynamics:** Effects not captured in the dynamic model, such as joint flexibility, backlash in gears, or motor nonlinearities.
    *   **External Disturbances:** Forces acting on the robot from the environment (e.g., collisions, payloads).
*   **Actuator Limitations:** Motors and their drivers have limitations in speed, torque, and bandwidth, which can affect the ability to track fast trajectories.
*   **Sensor Noise and Delays:** Errors in sensor measurements (e.g., encoders for joint position) and delays in communication can lead to inaccurate feedback.

**The Control Problem Statement:** Design a controller that, given a desired trajectory (position, velocity, acceleration), generates appropriate actuator commands (e.g., motor torques/currents) to minimize the error between the desired and actual robot states, despite system dynamics and uncertainties.

---

## 2. Types of Robot Control

Robot control strategies can be broadly categorized based on how they use feedback and the complexity of the model employed.

### 2.1. Open-Loop Control

*   **Description:** The controller generates actuator commands based solely on the desired trajectory without using feedback from the robot's sensors.
*   **How it works:** The control signal is pre-determined and applied directly.
*   **Advantages:** Simple, computationally inexpensive.
*   **Disadvantages:** Highly susceptible to disturbances and model uncertainties. Inaccurate for complex or dynamic tasks.
*   **Example:** Imagine telling a person to "move their arm 90 degrees" without checking if they actually did it.
*   **Textbook Reference:** Often discussed as a baseline before introducing closed-loop control.

### 2.2. Closed-Loop (Feedback) Control

*   **Description:** The controller uses feedback from sensors (e.g., joint encoders) to measure the robot's actual state and compare it to the desired state. The difference (error) is used to adjust the actuator commands.
*   **How it works:**
    1.  **Trajectory Generation:** Desired trajectory (position, velocity, acceleration) is generated.
    2.  **Sensing:** Robot's current state (position, velocity) is measured.
    3.  **Error Calculation:** `Error = Desired State - Actual State`.
    4.  **Control Law:** A control law uses the error to compute actuator commands.
    5.  **Actuation:** Commands are sent to motors.
*   **Advantages:** Can compensate for disturbances and model uncertainties, leading to higher accuracy.
*   **Disadvantages:** More complex, requires sensors, can be sensitive to sensor noise and delays.
*   **Example:** Using a thermostat to maintain a room temperature. The thermostat senses the current temperature, compares it to the set point, and adjusts the heater/cooler accordingly.

---

## 3. Modeling for Control

Accurate modeling is crucial for effective robot control. The two main types of models used are:

### 3.1. Kinematic Models

*   **Description:** Relate the joint variables (angles, displacements) to the end-effector position and orientation.
*   **Types:** Forward Kinematics (joint angles to end-effector pose), Inverse Kinematics (end-effector pose to joint angles).
*   **Role in Control:** Used for *trajectory planning* in Cartesian space, which then needs to be converted to joint space trajectories via Inverse Kinematics.
*   **Textbook Reference:** Craig (Chapters 2-4), Ghosal (Chapters 2-3), Saha (Chapters 2-3).
*   **CO Alignment:** CO2 (Obtain forward and inverse kinematic models).

### 3.2. Dynamic Models

*   **Description:** Relate the forces/torques applied at the joints to the resulting motion (joint positions, velocities, accelerations). These models capture the inertial, gravitational, Coriolis/centrifugal, and friction effects.
*   **Mathematical Forms:**
    *   **Newton-Euler Formulation:** Derives equations of motion link by link, starting from the base. Computationally efficient for real-time control.
    *   **Lagrangian Formulation:** Derives equations of motion using energy principles. More elegant for theoretical analysis and some types of control design.
*   **Equation of Motion (General Form):**
    $$ \tau = M(q)\ddot{q} + C(q, \dot{q})\dot{q} + G(q) + F(\dot{q}) $$
    Where:
    *   $\tau$: Vector of joint torques/forces.
    *   $q, \dot{q}, \ddot{q}$: Vectors of joint positions, velocities, and accelerations.
    *   $M(q)$: Symmetric, positive-definite joint-space inertia matrix (depends on configuration $q$).
    *   $C(q, \dot{q})\dot{q}$: Vector of Coriolis and centrifugal forces.
    *   $G(q)$: Vector of gravitational forces.
    *   $F(\dot{q})$: Vector of friction forces (e.g., viscous, Coulomb).
*   **Role in Control:**
    *   **Model-Based Control:** Used directly to calculate the required torques to achieve a desired motion.
    *   **Controller Design:** Understanding the dynamics helps in choosing appropriate controller gains and structures.
*   **Textbook Reference:** Schilling (Chapter 6), Craig (Chapter 7), Ghosal (Chapter 5), Mittal (Chapter 4), Deb (Chapter 4), Siciliano et al. (Chapter 3).
*   **CO Alignment:** CO4 (Develop a dynamic model and design the controller).

---

## 4. Basic Control Strategies

Feedback control is essential. Here are some fundamental strategies:

### 4.1. Proportional (P) Control

*   **Description:** The actuator command is directly proportional to the position error.
*   **Control Law:** $\tau = K_p e$, where $e = q_d - q$ (or $e = \dot{q}_d - \dot{q}$ for velocity control). $K_p$ is a proportional gain.
*   **Behavior:** Tries to reduce the error. Larger $K_p$ means a stronger response.
*   **Limitations:** Often results in steady-state error (the robot doesn't quite reach the target) due to constant disturbances or friction.
*   **Example:** If you are trying to push a box to a target and the harder you push, the faster it moves, but you might overshoot or stop just short.

### 4.2. Proportional-Derivative (PD) Control

*   **Description:** Adds a term proportional to the velocity error (or the derivative of the position error) to the proportional term.
*   **Control Law:** $\tau = K_p e + K_d \dot{e}$, where $e = q_d - q$ and $\dot{e} = \dot{q}_d - \dot{q}$. $K_p$ is the proportional gain, and $K_d$ is the derivative gain.
*   **Behavior:** The derivative term acts as damping, reducing oscillations and overshoot, making the system more stable and responsive.
*   **Advantages:** Generally improves transient response and reduces oscillations compared to P-only control.
*   **Disadvantages:** Can still have steady-state error if the system is subject to constant forces. Can be sensitive to noise in the velocity measurement.
*   **Example:** Pushing the box again, but this time you ease up as you get closer and also anticipate how fast you are moving to adjust your push smoothly.

### 4.3. Proportional-Integral-Derivative (PID) Control

*   **Description:** Adds an integral term, which is proportional to the accumulated past position error.
*   **Control Law:** $\tau = K_p e + K_i \int e \, dt + K_d \dot{e}$. $K_i$ is the integral gain.
*   **Behavior:** The integral term helps eliminate steady-state error by increasing the control effort over time as long as an error persists.
*   **Advantages:** Can eliminate steady-state error, providing very accurate tracking. Widely used in industrial applications.
*   **Disadvantages:** Can make the system more oscillatory and potentially unstable if not tuned properly. The integral term can lead to "integral windup" if the actuator saturates.
*   **Example:** Continuing the box example, if the box keeps getting pushed back slightly by an external force, you'd continue to push harder and harder until that force is overcome and the box reaches the target.

### 4.4. Model-Based Control (e.g., Computed Torque Control)

*   **Description:** This advanced strategy uses the robot's dynamic model to calculate the exact torques required to achieve the desired acceleration at each joint.
*   **How it works:** The dynamic equation is rearranged to solve for the required torques:
    $$ \tau = M(q)(\ddot{q}_d + K_d \dot{e} + K_p e) + C(q, \dot{q})\dot{q} + G(q) + F(\dot{q}) $$
    Where:
    *   $\ddot{q}_d$ is the desired acceleration from the trajectory.
    *   $e = q_d - q$ and $\dot{e} = \dot{q}_d - \dot{q}$ are position and velocity errors.
    *   The $K_d \dot{e}$ and $K_p e$ terms are added as a feedback component to handle any model inaccuracies or disturbances.
*   **Advantages:** Can achieve very precise trajectory tracking if the dynamic model is accurate. Effectively cancels out non-linearities and couplings.
*   **Disadvantages:** Requires an accurate dynamic model and significant computational power for real-time calculation. Performance degrades if the model is inaccurate.
*   **Textbook Reference:** Schilling (Chapter 6.6), Craig (Chapter 7.3), Ghosal (Chapter 5.5), Siciliano et al. (Chapter 10).
*   **CO Alignment:** CO4 (Design the controller using dynamic models).

---

## 5. Challenges in Real-World Robot Control

Even with sophisticated control strategies, real-world implementation faces challenges:

*   **Parameter Identification:** Accurately determining the physical parameters (mass, inertia, friction) of robot links and actuators.
*   **Real-time Computation:** Complex control algorithms (especially model-based) require fast and efficient computation.
*   **Sensor Limitations:** Noise, bias, resolution, and sampling rate of encoders, potentiometers, and other sensors.
*   **Actuator Nonlinearities:** Backlash, stiction (static friction), saturation limits, and motor dynamics.
*   **Payload Variations:** The robot's dynamics change significantly when carrying different payloads.
*   **Communication Delays:** Latency in sending commands to actuators and receiving sensor feedback.
*   **Vibrations:** Flexible joints or long robot arms can introduce vibrations that are difficult to suppress.
*   **Adaptation and Learning:** Controllers that can adapt to changing conditions (e.g., payload changes, wear and tear) are desirable.

---

## 6. Important Points to Remember

*   **Control Problem:** Achieving accurate trajectory following despite dynamics, uncertainties, and disturbances.
*   **Feedback is Key:** Closed-loop control uses sensor feedback to correct errors.
*   **Dynamic Model:** Essential for understanding robot behavior and for advanced control strategies (e.g., Computed Torque).
*   **PID Control:** A widely used, versatile feedback control strategy that balances speed, accuracy, and stability.
*   **Model-Based Control:** Leverages the robot's dynamic model to achieve high performance but requires accuracy.
*   **Trade-offs:** There are always trade-offs between simplicity, computational cost, accuracy, and robustness in control design.

---

## 7. Practice Questions & Exercises

**Question 1:**
What is the fundamental difference between open-loop and closed-loop robot control?
*   **(a)** Open-loop uses feedback, closed-loop does not.
*   **(b)** Closed-loop uses feedback, open-loop does not.
*   **(c)** Both use feedback, but closed-loop uses more sensors.
*   **(d)** Open-loop is always more accurate.

**Answer:** (b)

**Question 2:**
The equation of motion for a robot manipulator is often represented as: $\tau = M(q)\ddot{q} + C(q, \dot{q})\dot{q} + G(q) + F(\dot{q})$.
Identify the term that represents the forces due to angular velocity and centripetal acceleration.
*   **(a)** $M(q)\ddot{q}$
*   **(b)** $C(q, \dot{q})\dot{q}$
*   **(c)** $G(q)$
*   **(d)** $F(\dot{q})$

**Answer:** (b)

**Question 3:**
A robot arm needs to move from point A to point B. If the controller only sends a pre-calculated set of motor commands without measuring the actual arm position, what type of control is being used? What is a major drawback of this approach?

**Answer:**
This is **open-loop control**. A major drawback is that it is highly susceptible to inaccuracies in the robot's model, external disturbances (like friction or unexpected forces), and actuator errors. The robot is unlikely to reach the exact target position accurately.

**Question 4:**
Consider a simple P controller for a single joint: $\tau = K_p e$. If the robot is trying to hold a position against gravity, and there is a constant gravitational force $G$, will a P controller alone be able to eliminate the steady-state error? Explain why or why not.

**Answer:**
No, a P controller alone will generally *not* be able to eliminate the steady-state error when counteracting a constant force like gravity. The controller output $\tau$ is proportional to the error $e$. For the robot to hold position against gravity, a constant torque equal to the gravitational force must be applied. If $e=0$, then $\tau=0$, which is not enough to counteract gravity. The system will settle at a position where the proportional control output *just balances* the gravitational force, resulting in a persistent, non-zero error. An integral term (as in PID control) is needed to eliminate this steady-state error.

**Question 5 (Conceptual - CO4):**
Why is understanding the robot's **dynamic model** crucial for designing effective robot controllers, especially for tasks requiring high precision or fast movements?

**Answer:**
Understanding the dynamic model ($\tau = M(q)\ddot{q} + C(q, \dot{q})\dot{q} + G(q) + F(\dot{q})$) is crucial because:
1.  **Accurate Torque Calculation:** It allows for the calculation of the precise torques needed at each joint to achieve a desired motion. Without it, controllers rely on empirical tuning (like PID), which might not be optimal.
2.  **Compensation for Nonlinearities:** Robot dynamics are inherently non-linear (e.g., Coriolis forces are proportional to velocity, inertia depends on configuration). Model-based control (like computed torque) explicitly compensates for these non-linearities, ensuring that the torques are applied correctly regardless of the robot's speed or configuration.
3.  **Disturbance Rejection:** A good dynamic model helps in designing controllers that can effectively reject external disturbances and internal uncertainties by providing a baseline for what torques are expected.
4.  **Trajectory Tracking:** For precise trajectory tracking, especially at high speeds, the controller needs to anticipate the inertial and centrifugal forces that will arise. The dynamic model provides this predictive capability.

---

This topic lays the groundwork for understanding how planned trajectories are actually realized by the robot. The subsequent modules will delve deeper into specific controller designs and their implementation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
