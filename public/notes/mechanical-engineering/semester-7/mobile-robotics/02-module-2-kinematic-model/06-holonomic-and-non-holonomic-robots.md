---
title: "holonomic and non-holonomic robots"
subject: "MOBILE ROBOTICS"
module: "Module 2: Kinematic model"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640aa"
status: "completed"
scrapedAt: "2026-05-20T18:15:09.004Z"
---
# Mobile Robotics: Module 2 - Kinematic Model: Holonomic and Non-Holonomic Robots

## 1. Introduction to Mobile Robot Kinematics

Kinematics deals with the motion of robots without considering the forces that cause the motion. For mobile robots, understanding their kinematic model is crucial for describing their movement capabilities, controlling their trajectories, and planning paths. This module focuses on the kinematic models of mobile robots, specifically distinguishing between holonomic and non-holonomic systems.

**Learning Outcomes Addressed:**

*   **LO1:** Understand the fundamental concepts of holonomic and non-holonomic systems in mobile robotics.
*   **LO2:** Differentiate between holonomic and non-holonomic constraints.
*   **LO3:** Analyze the kinematic properties and motion capabilities of different types of mobile robots based on their constraints.
*   **LO4:** Understand how kinematic models are used to describe the velocity and position of mobile robots.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Familiarize with types of locomotion for mobile Robots. (This topic directly addresses different locomotion types through the holonomic/non-holonomic classification.)
*   **CO2 (K4):** Derive the kinematic model of mobile robots. (While not explicitly deriving complex models here, understanding the classification is foundational for deriving them in subsequent topics.)

**Key Concepts & Definitions:**

*   **Configuration Space:** The set of all possible positions and orientations a robot can occupy. For a 2D robot, this is typically $SE(2)$, representing position $(x, y)$ and orientation $\theta$.
*   **Degrees of Freedom (DOF):** The number of independent parameters needed to specify the configuration of a robot. A robot moving on a 2D plane has at least 3 DOFs (x, y, $\theta$).
*   **Constraints:** Restrictions on the robot's motion that limit its ability to move freely in its configuration space.
*   **Velocity:** The rate of change of position and orientation.

---

## 2. Holonomic Robots

Holonomic robots are those whose constraints can be expressed as algebraic equations relating the configuration variables. Crucially, they can move *instantaneously* in any direction in their configuration space, meaning they are not subject to any non-integrable velocity constraints.

**Key Concepts & Definitions:**

*   **Holonomic Constraint:** A constraint that can be expressed as an equation of the form $f(q_1, q_2, ..., q_n, t) = 0$, where $q_i$ are the configuration variables and $t$ is time. These constraints are *integrable*.
*   **Instantaneous Mobility:** A holonomic robot can change its position and orientation arbitrarily at any given instant, provided it respects the holonomic constraints.
*   **Degrees of Mobility:** The number of directions in configuration space in which a robot can move instantaneously. For a holonomic robot, its degrees of mobility are equal to its degrees of freedom.

**Characteristics of Holonomic Robots:**

*   **Full Control over Configuration Space:** Holonomic robots can reach any configuration in their configuration space through a series of infinitesimal movements.
*   **Simple Path Planning:** Path planning is generally simpler because any intermediate point along a desired path can be reached directly.

**Example:**

*   **Wheeled Mobile Robots with Omni-directional Wheels:** These robots, often called **omnidirectional robots**, are equipped with special wheels (e.g., Mecanum wheels or omni-wheels) that allow them to move and rotate independently in any direction (forward, backward, sideways, and rotate) without changing their orientation.
    *   **Mecanum Wheels:** These wheels have rollers mounted on their circumference, allowing for omnidirectional movement.
    *   **Omni-wheels:** These wheels have smaller passive wheels mounted on their periphery, enabling sideways movement.

    **Illustration (Conceptual):** Imagine a robot with omni-wheels. You can command it to move purely forward, purely sideways, or diagonally, and it will comply instantly. It can also rotate on the spot without any forward or backward motion. This means it has full control over its $x$, $y$, and $\theta$ in the $SE(2)$ configuration space.

**Textbook References:**

*   **Siegwart & Nourbakhsh (2011), Chapter 3: Kinematics:** Discusses the general concepts of robot configuration and kinematics, which lay the groundwork for understanding holonomic systems.
*   **Corke (2011), Chapter 4: Kinematics of Serial Manipulators (and extending to mobile robots):** While primarily for manipulators, the fundamental ideas of degrees of freedom and configuration space are relevant.

---

## 3. Non-Holonomic Robots

Non-holonomic robots are characterized by constraints on their velocities that are *non-integrable*. This means that even though they may have many degrees of freedom in terms of their potential movement capabilities, they are restricted in their instantaneous motion. They cannot move instantaneously in *all* directions in their configuration space.

**Key Concepts & Definitions:**

*   **Non-Holonomic Constraint:** A constraint that relates the velocities of the robot's configuration variables. These constraints are often expressed as differential equations that cannot be integrated into algebraic equations of configuration variables. A common form for 2D robots is $\dot{x}\sin\theta - \dot{y}\cos\theta + r\dot{\theta} = 0$, representing the constraint of a non-slipping wheel.
*   **Non-Integrable Velocity Constraints:** The inability to reach certain configurations from a starting configuration, or the need to execute a specific sequence of movements (e.g., curves) to change position and orientation.
*   **Pfaffian Constraints:** A common mathematical form to represent velocity constraints, often linear in the velocities: $A(q)\dot{q} = 0$.
*   **Controllable Systems:** The ability to steer the robot to any reachable state (position and orientation) within its workspace. Non-holonomic systems are often controllable in a neighborhood of their current state.

**Characteristics of Non-Holonomic Robots:**

*   **Limited Instantaneous Mobility:** They cannot move sideways or rotate on the spot instantaneously without some form of translation.
*   **Path Dependence:** To reach a particular configuration from another, a specific path (often involving arcs or curves) must be followed. They cannot simply move in a straight line from point A to point B if the orientation is not aligned.
*   **Ackermann Steering:** A common steering mechanism for non-holonomic robots, where the wheels are steered to follow arcs.
*   **Parking Problem Analogy:** The inability to move sideways is analogous to parallel parking a car – you need a sequence of forward and backward movements to change position and orientation effectively.

**Examples:**

*   **Differential Drive Robots:**
    *   These robots have two independently controlled wheels, typically positioned on opposite sides of the robot. A castor wheel (or passive wheels) provides stability.
    *   They can move forward/backward and rotate on the spot. However, they *cannot* move sideways directly. To move sideways, they must rotate and then translate.
    *   **Kinematic Constraint:** The non-holonomic constraint for a differential drive robot can be expressed as: $\dot{x} \sin(\theta) - \dot{y} \cos(\theta) = 0$. This signifies that the robot's velocity component perpendicular to its orientation is zero (it does not slip sideways).
    *   **Illustration:** A differential drive robot can drive straight, turn in a circle, or follow a curved path. However, it cannot simply "slide" to the side.

*   **Car-like Robots (Automobiles):**
    *   These robots have a steering mechanism (like Ackermann steering) and at least one pair of steered wheels.
    *   They cannot move sideways. Their motion is constrained by the turning radius of their steered wheels.
    *   **Kinematic Constraint:** The constraint is related to the steering angle of the front wheels. The robot's velocity vector is always tangent to a circle whose center lies on the axis of the steered wheels.

*   **Tricycle Robots:**
    *   These robots have one steered wheel (typically at the front) and two driven wheels at the rear.
    *   Similar to car-like robots, they cannot move sideways.

**Textbook References:**

*   **Siegwart & Nourbakhsh (2011), Chapter 3: Kinematics:** Provides detailed explanations of non-holonomic constraints and their implications for wheeled mobile robots, including differential drive and car-like robots.
*   **Corke (2011), Chapter 12: Mobile Robot Kinematics:** Offers specific derivations and examples of non-holonomic kinematic models for various mobile robot platforms.
*   **Tzafestas (Year not specified, but relevant):** Likely covers detailed derivations of non-holonomic kinematics and control strategies.

---

## 4. Holonomic vs. Non-Holonomic: A Comparison

The distinction between holonomic and non-holonomic robots is fundamental to understanding their motion capabilities, path planning, and control.

| Feature                 | Holonomic Robots                               | Non-Holonomic Robots                                |
| :---------------------- | :--------------------------------------------- | :-------------------------------------------------- |
| **Constraints**         | Algebraic equations of configuration variables. | Differential equations of velocities (non-integrable). |
| **Instantaneous Motion**| Can move in any direction in configuration space. | Limited instantaneous motion (e.g., no direct sideways movement). |
| **Degrees of Mobility** | Equal to degrees of freedom.                   | Less than degrees of freedom.                       |
| **Path Planning**       | Simpler, can reach any intermediate point directly. | More complex, requires specific trajectories.       |
| **Examples**            | Robots with omni-directional wheels.           | Differential drive robots, car-like robots.         |
| **Control Complexity**  | Generally simpler.                             | More complex, often requiring feedback linearization or trajectory tracking. |
| **Reachable States**    | Can reach any state in its configuration space. | Can reach any state in its configuration space through appropriate paths, but not instantaneously. |

**Important Points to Remember:**

*   **Holonomic constraints are *integrable* velocity constraints that can be converted into configuration-space constraints.**
*   **Non-holonomic constraints are *non-integrable* velocity constraints, meaning they cannot be reduced to algebraic relationships between configuration variables.**
*   The number of degrees of freedom is the number of parameters needed to specify the robot's state.
*   The number of degrees of mobility is the number of independent directions the robot can move in its configuration space instantaneously. For holonomic robots, DOF = Degrees of Mobility. For non-holonomic robots, DOF > Degrees of Mobility.

---

## 5. Kinematic Models and Constraints

The kinematic model describes the relationship between the robot's generalized coordinates (position and orientation) and its wheel velocities. For non-holonomic robots, this model includes the non-holonomic constraints.

**General Kinematic Model (Unconstrained):**

For a robot in a 2D plane, its configuration can be represented by $q = [x, y, \theta]^T$. The velocities are $\dot{q} = [\dot{x}, \dot{y}, \dot{\theta}]^T$. The relationship between wheel velocities and the robot's linear and angular velocities is given by the kinematic model.

For a differential drive robot with wheel radius $r$ and wheel separation $b$:
*   Linear velocity in the direction of the robot's heading: $v = r\dot{\phi}$, where $\dot{\phi}$ is the average angular velocity of the wheels.
*   Angular velocity of the robot: $\omega = (r/b)\dot{\phi}_R - (r/b)\dot{\phi}_L$, where $\dot{\phi}_R$ and $\dot{\phi}_L$ are the angular velocities of the right and left wheels, respectively.

The kinematic model relates $[v, \omega]^T$ to the robot's $[ \dot{x}, \dot{y}, \dot{\theta} ]^T$:

$$
\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \cos\theta & 0 \\ \sin\theta & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} v \\ \omega \end{bmatrix}
$$

**Non-Holonomic Constraint for Differential Drive:**

The constraint is that the robot cannot move sideways. The velocity component perpendicular to the robot's orientation must be zero.

$$
\dot{y}\cos\theta - \dot{x}\sin\theta = 0
$$

Substituting the kinematic model:

$$
(v\sin\theta)\cos\theta - (v\cos\theta)\sin\theta = 0
$$

This equation simplifies to $0=0$, which shows that the kinematic model itself, when expressed in terms of robot velocities ($v, \omega$), implicitly satisfies the non-holonomic constraint because the sideways velocity component is inherently zero when the robot is aligned with its $\theta$.

**Key Point:** The non-holonomic constraint limits the controllable velocities, not the achievable configurations. While a differential drive robot cannot move sideways instantaneously, it can reach any $(x, y, \theta)$ configuration by executing a sequence of forward, backward, and rotational movements.

**Textbook References:**

*   **Siegwart & Nourbakhsh (2011), Chapter 3:** Excellent resource for understanding how these equations are derived and what they represent.
*   **Corke (2011), Chapter 12:** Provides detailed mathematical formulations of kinematic models for various mobile robots, including the derivation of constraints.

---

## 6. Practice Questions and Exercises

**Question 1:**
Define holonomic and non-holonomic constraints. Give one example of each.

**Answer 1:**
*   **Holonomic Constraint:** A constraint that can be expressed as an algebraic equation relating the robot's configuration variables (position and orientation). These constraints are integrable.
    *   **Example:** A robot confined to move on a specific surface, e.g., a robot moving on a plane has the constraint that its z-coordinate is always zero ($z=0$), which is an algebraic constraint on its configuration.
*   **Non-Holonomic Constraint:** A constraint that relates the robot's velocities and cannot be integrated into an algebraic constraint on configuration variables. These constraints are non-integrable.
    *   **Example:** The inability of a differential drive robot to move sideways instantaneously ($\dot{y}\cos\theta - \dot{x}\sin\theta = 0$).

**Question 2:**
What is the primary difference in the motion capabilities of a holonomic robot (like one with Mecanum wheels) and a non-holonomic robot (like a differential drive robot)?

**Answer 2:**
The primary difference lies in their instantaneous mobility. A holonomic robot can move and rotate in any direction in its configuration space instantaneously, meaning it can move purely forward, purely sideways, or rotate on the spot without any translation. A non-holonomic robot, however, has restricted instantaneous motion; it cannot move purely sideways. To achieve a sideways displacement, it must first rotate and then translate.

**Question 3:**
Consider a differential drive robot. If its current configuration is $(x=0, y=0, \theta = 0^\circ)$, can it instantaneously move to $(x=0, y=1, \theta = 0^\circ)$? Explain why or why not.

**Answer 3:**
No, it cannot instantaneously move to $(x=0, y=1, \theta = 0^\circ)$ from $(x=0, y=0, \theta = 0^\circ)$. This is because it is a non-holonomic robot. Its non-holonomic constraint prevents it from moving directly sideways. To reach the desired configuration, it would need to first rotate to align its heading with the desired direction of motion (which is along the y-axis in this case) and then move forward, followed by another rotation to return to its original orientation.

**Question 4:**
A robot has 3 degrees of freedom (x, y, $\theta$). If it is subject to one non-integrable velocity constraint, how many degrees of mobility does it have?

**Answer 4:**
A robot with $n$ degrees of freedom subject to $m$ independent non-integrable velocity constraints has $n-m$ degrees of mobility. In this case, $n=3$ and $m=1$. Therefore, it has $3-1 = 2$ degrees of mobility. This means it can move instantaneously in two independent directions in its configuration space. For a differential drive robot, these are the forward/backward velocity and the angular velocity.

**Question 5 (Challenge - requires understanding of kinematic models):**
For a differential drive robot with wheel radius $r$ and wheel separation $b$, write down the equations that relate its linear velocity $v$ and angular velocity $\omega$ to the angular velocities of its left wheel ($\dot{\phi}_L$) and right wheel ($\dot{\phi}_R$). Also, state the non-holonomic constraint in terms of $\dot{x}$, $\dot{y}$, and $\dot{\theta}$.

**Answer 5:**
The relationships between robot velocities and wheel velocities are:
*   Linear velocity ($v$): The average of the linear velocities of the two wheels.
    $v = \frac{r}{2}(\dot{\phi}_L + \dot{\phi}_R)$
*   Angular velocity ($\omega$): The difference in the angular velocities of the wheels, scaled by the robot's geometry.
    $\omega = \frac{r}{2b}(\dot{\phi}_R - \dot{\phi}_L)$

The non-holonomic constraint for a differential drive robot in terms of its configuration velocities ($\dot{x}$, $\dot{y}$, $\dot{\theta}$) is:
$\dot{y}\cos\theta - \dot{x}\sin\theta = 0$

---

## 7. Important Points to Remember

*   **Holonomic vs. Non-Holonomic is a classification based on the *nature of the constraints* on motion.**
*   **Holonomic:** Algebraic, integrable constraints; full instantaneous mobility.
*   **Non-Holonomic:** Differential, non-integrable velocity constraints; limited instantaneous mobility.
*   The number of DOF is the number of parameters to define the state.
*   The number of degrees of mobility is the number of independent directions of instantaneous motion.
*   Non-holonomic robots can reach any configuration in their workspace, but the path taken matters.
*   Understanding these classifications is essential for path planning and control of mobile robots.

---

This concludes Module 2, Topic: Holonomic and Non-Holonomic Robots. The concepts covered here are foundational for understanding the capabilities and limitations of various mobile robot platforms and for developing effective control and navigation strategies in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
