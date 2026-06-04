---
title: "different wheel configurations"
subject: "MOBILE ROBOTICS"
module: "Module 2: Kinematic model"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640a9"
status: "completed"
scrapedAt: "2026-05-20T18:15:08.107Z"
---
# Mobile Robotics: Module 2 - Kinematic Model

## Topic: Different Wheel Configurations

---

### **Introduction**

This module delves into the fundamental aspect of mobile robot control: understanding how a robot's physical structure, specifically its wheel configuration, dictates its movement capabilities. A kinematic model describes the relationship between the robot's joint velocities and its end-effector (or base) velocities, without considering forces or masses. This is crucial for predicting and controlling a robot's motion. This topic will explore various common wheel configurations and their implications for a robot's degrees of freedom and maneuverability.

---

### **Learning Outcomes Covered:**

*   Familiarize with types of locomotion for mobile Robots (CO1: K2)
*   Derive the kinematic model of mobile robots (CO2: K4)

---

### **Key Concepts and Definitions**

*   **Mobile Robot:** A robot capable of moving within its environment.
*   **Locomotion:** The act or power of moving from place to place.
*   **Kinematics:** The branch of mechanics that deals with the motion of bodies without considering the forces that cause the motion.
*   **Kinematic Model:** A mathematical representation that describes the relationship between a robot's joint velocities and its end-effector (or base) velocities.
*   **Degrees of Freedom (DoF):** The number of independent parameters that define the configuration of a robot. For a planar mobile robot, the DoF usually refers to its ability to translate along two axes and rotate around one axis (x, y, $\theta$).
*   **Holonomic Robot:** A robot whose constraint equation can be integrated into a direct relationship between the robot's configuration variables and its control inputs. Essentially, a holonomic robot can reach any configuration in its workspace, provided it has sufficient DoF.
*   **Non-holonomic Robot:** A robot whose constraint equation cannot be integrated into a direct relationship between configuration variables and control inputs. These robots have restrictions on their instantaneous motion due to their kinematic constraints. Most wheeled mobile robots are non-holonomic.
*   **Configuration Space:** The set of all possible configurations (positions and orientations) of a robot.
*   **Velocity:** The rate of change of position and orientation. For a planar mobile robot, this is typically represented by $(\dot{x}, \dot{y}, \dot{\theta})$.
*   **Forward Kinematics:** Determining the end-effector's pose (position and orientation) given the joint velocities.
*   **Inverse Kinematics:** Determining the joint velocities required to achieve a desired end-effector pose or velocity.
*   **Omnidirectional Robot:** A robot that can move in any direction in the plane instantaneously, regardless of its current orientation. This requires specific wheel configurations.

---

### **Common Wheel Configurations**

The arrangement and type of wheels on a mobile robot significantly influence its kinematic capabilities, maneuverability, and the complexity of its kinematic model.

#### **1. Differential Drive Robot**

*   **Description:** This is one of the simplest and most common configurations. It consists of two independently driven wheels (left and right) mounted on a common axis. A third, passive wheel (or caster) is typically used for stability.
*   **Mechanism:** The robot moves forward or backward by rotating both wheels in the same direction. It turns by rotating the wheels in opposite directions.
*   **Kinematic Properties:**
    *   **DoF:** Typically considered to have 2 DoF (forward/backward translation, rotation). While it can move in any direction in its plane, it cannot instantaneously move sideways without rotation (unless the wheels are specifically designed for this, which is not the standard differential drive).
    *   **Non-holonomic:** Yes, due to the constraint that the wheels must roll without slipping along their intended direction. The robot cannot instantaneously move sideways.
*   **Kinematic Model (Forward Velocity):**
    Let:
    *   $v_l$: Velocity of the left wheel.
    *   $v_r$: Velocity of the right wheel.
    *   $w$: Angular velocity of the robot about its center of rotation.
    *   $v$: Linear velocity of the robot (midpoint between the wheels).
    *   $L$: Distance between the wheels (wheelbase).
    *   $r$: Radius of the wheels.

    The velocity of the left and right wheels can be related to the robot's linear and angular velocities by:
    $v_l = v - \frac{wL}{2}$
    $v_r = v + \frac{wL}{2}$

    From these equations, we can derive the robot's velocity in terms of wheel velocities:
    $v = \frac{v_r + v_l}{2}$ (Linear velocity of the robot's center)
    $w = \frac{v_r - v_l}{L}$ (Angular velocity of the robot)

    In terms of body-fixed frame velocities:
    $\dot{x} = v \cos(\theta) = \frac{v_r + v_l}{2} \cos(\theta)$
    $\dot{y} = v \sin(\theta) = \frac{v_r + v_l}{2} \sin(\theta)$
    $\dot{\theta} = w = \frac{v_r - v_l}{L}$

    This forms the non-holonomic constraint equation:
    $\dot{y} \cos(\theta) - \dot{x} \sin(\theta) = 0$ (This constraint means the robot cannot move sideways).

*   **Textbook References:**
    *   Siegwart & Nourbakhsh: Chapter 3 (Kinematics) thoroughly covers differential drive robots, their kinematic models, and the concept of non-holonomicity.
    *   Corke: Chapter 3 (Robot Kinematics) discusses different robot configurations and their velocity kinematics, including differential drives.

*   **Example:** Many popular indoor mobile robots like the Pioneer series and early versions of Roomba utilize this configuration.

#### **2. Ackerman Steering (Car-like Robot)**

*   **Description:** This configuration mimics the steering mechanism of a car. The front wheels are steerable, and the rear wheels are typically driven (though configurations can vary). The steering linkage ensures that the wheels approximately roll without slipping when turning.
*   **Mechanism:** The steering angle of the front wheels determines the robot's turning radius.
*   **Kinematic Properties:**
    *   **DoF:** 2 DoF (forward/backward translation, rotation).
    *   **Non-holonomic:** Yes. It cannot move instantaneously sideways.
*   **Kinematic Model (Forward Velocity):**
    Let:
    *   $v$: Linear velocity of the robot (typically measured at the rear axle or center of the turning circle).
    *   $w$: Angular velocity of the robot.
    *   $\delta$: Steering angle of the front wheels.
    *   $L$: Wheelbase (distance between front and rear axles).

    The robot turns about a center of rotation located on the perpendicular bisector of the rear axle. The turning radius $R$ is given by:
    $R = \frac{L}{\sin(\delta)}$

    The relationship between linear and angular velocity is:
    $v = R w$
    Substituting $R$:
    $v = \frac{L}{\sin(\delta)} w$
    $w = \frac{v \sin(\delta)}{L}$

    In terms of body-fixed frame velocities:
    $\dot{x} = v \cos(\theta)$
    $\dot{y} = v \sin(\theta)$
    $\dot{\theta} = w = \frac{v \sin(\delta)}{L}$

    The non-holonomic constraint is:
    $\dot{y} \cos(\theta) - \dot{x} \sin(\theta) = 0$ (Same as differential drive, as it cannot move sideways instantaneously).

*   **Textbook References:**
    *   Siegwart & Nourbakhsh: Discusses car-like robots as a prime example of non-holonomic systems.
    *   Corke: Presents car-like kinematics in the context of velocity kinematics.

*   **Example:** Most automobiles, and robotic platforms designed to mimic car-like motion.

#### **3. Synchronous Drive (Omnidirectional Wheels)**

*   **Description:** This configuration uses special wheels that allow for movement in any direction in the plane. These wheels, often called "Mecanum" wheels or "Omni-wheels," have rollers mounted on their circumference that are oriented at 45 degrees to the wheel's rotation axis.
*   **Mechanism:** By controlling the rotation of multiple such wheels, the robot can achieve instantaneous translation in any direction and rotation.
    *   **Mecanum Wheels:** Four wheels, each oriented at a different angle. By controlling the speed and direction of each wheel, the resultant velocity of the robot can be in any direction.
    *   **Omni-wheels:** Usually three or four wheels with free-spinning rollers around their circumference. The wheel itself rotates in its plane, and the rollers allow for lateral motion.
*   **Kinematic Properties:**
    *   **DoF:** 3 DoF (forward/backward translation along X, forward/backward translation along Y, rotation).
    *   **Holonomic:** Yes, typically. They can achieve instantaneous velocity in any direction.
*   **Kinematic Model (Example: Four Mecanum Wheels):**
    Let:
    *   $v_1, v_2, v_3, v_4$: Velocities of the four wheels.
    *   $v_x, v_y$: Linear velocities of the robot in the x and y directions of the world frame.
    *   $w$: Angular velocity of the robot.
    *   $(x_c, y_c)$: Position of the robot's center.
    *   $r$: Radius of the wheels.
    *   $l$: Distance from the robot's center to the wheel axis (for a square configuration).

    The relationship between wheel velocities and robot velocities is derived by considering how the rollers of each wheel contribute to the robot's motion. For a typical setup with wheels at corners of a square and oriented as follows:
    *   Wheel 1 (Front-Left): Rollers at +45 deg
    *   Wheel 2 (Front-Right): Rollers at -45 deg
    *   Wheel 3 (Rear-Left): Rollers at -45 deg
    *   Wheel 4 (Rear-Right): Rollers at +45 deg

    The forward kinematics (robot velocity from wheel velocities) are:
    $v_x = \frac{r}{4} (-v_1 + v_2 + v_3 - v_4)$
    $v_y = \frac{r}{4} (v_1 + v_2 - v_3 - v_4)$
    $w = \frac{r}{4l} (v_1 + v_2 + v_3 + v_4)$

    Alternatively, expressing wheel velocities from robot velocities:
    $v_1 = \frac{1}{r} (v_x - v_y - l \cdot w)$
    $v_2 = \frac{1}{r} (v_x + v_y + l \cdot w)$
    $v_3 = \frac{1}{r} (-v_x + v_y - l \cdot w)$
    $v_4 = \frac{1}{r} (-v_x - v_y + l \cdot w)$

    (Note: The exact formulas depend on the orientation of the rollers and the definition of positive wheel velocity. This is a common convention.)

*   **Textbook References:**
    *   Siegwart & Nourbakhsh: Discusses omnidirectional robots as a category of holonomic robots and their advantages.
    *   Corke: While not explicitly detailing Mecanum wheels, it covers transformations and velocity kinematics that can be adapted.

*   **Example:** Robotic arms with omnidirectional bases, some automated guided vehicles (AGVs), and advanced robotic platforms for precise maneuvering.

#### **4. Swerve Drive (Four Wheel Steering)**

*   **Description:** This configuration uses four wheels, each capable of both driving and steering independently. This allows for omnidirectional movement.
*   **Mechanism:** Each wheel is mounted on a steerable module. By independently controlling the steering angle and rotational velocity of each wheel, the robot can move in any direction and rotate.
*   **Kinematic Properties:**
    *   **DoF:** 3 DoF (forward/backward translation along X, forward/backward translation along Y, rotation).
    *   **Holonomic:** Yes, it is designed to be holonomic.
*   **Kinematic Model (Forward Velocity):**
    Let:
    *   $v_i$: Velocity of wheel $i$ (where $i \in \{1, 2, 3, 4\}$).
    *   $\phi_i$: Steering angle of wheel $i$.
    *   $v_x, v_y$: Linear velocities of the robot.
    *   $w$: Angular velocity of the robot.

    The velocity of each wheel ($v_i$) can be decomposed into lateral ($v_{i, lat}$) and longitudinal ($v_{i, lon}$) components relative to the wheel's steering.
    $v_{i, lon} = v_i \cos(\phi_i)$
    $v_{i, lat} = v_i \sin(\phi_i)$

    The robot's overall velocity is the sum of the contributions from each wheel, considering their positions relative to the robot's center. For a rectangular configuration with wheels at $(\pm x_w, \pm y_w)$:
    $v_x = \frac{1}{4} \sum_{i=1}^4 v_{i, lon} \cos(\phi_i) - v_{i, lat} \sin(\phi_i)$
    $v_y = \frac{1}{4} \sum_{i=1}^4 v_{i, lon} \sin(\phi_i) + v_{i, lat} \cos(\phi_i)$
    And the angular velocity is related to the difference in linear velocities.

    More commonly, the robot's velocity $(\dot{x}, \dot{y}, \dot{\theta})$ is expressed as a function of the individual wheel velocities and steering angles. A common formulation:
    $\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \mathbf{J} \begin{bmatrix} v_1 \\ v_2 \\ v_3 \\ v_4 \end{bmatrix}$
    Where $\mathbf{J}$ is the Jacobian matrix that depends on the wheel positions and steering angles.

    For example, for a robot with wheels at $(\pm L/2, \pm W/2)$ with steering angles $\phi_1, \phi_2, \phi_3, \phi_4$ (corresponding to front-left, front-right, rear-right, rear-left, respectively), the forward kinematics can be derived. The derivation is more involved and typically found in specialized robotics literature.

*   **Textbook References:**
    *   While not a primary focus in the foundational texts, understanding these configurations builds upon the velocity kinematics covered by Corke and the general concepts of locomotion in Siegwart & Nourbakhsh.

*   **Example:** Advanced research robots, some specialized industrial robots, and competitive robotics platforms where high maneuverability is paramount.

#### **5. Tricycle Drive Robot**

*   **Description:** This configuration has two independently driven wheels at the rear and one steerable, unpowered wheel at the front.
*   **Mechanism:** Similar to Ackermann steering but with a different wheel arrangement. The robot moves forward/backward by driving the rear wheels and steers by rotating the front wheel.
*   **Kinematic Properties:**
    *   **DoF:** 2 DoF (forward/backward translation, rotation).
    *   **Non-holonomic:** Yes.
*   **Kinematic Model (Forward Velocity):**
    Let:
    *   $v_r$: Linear velocity of the rear axle.
    *   $v_l$: Linear velocity of the left rear wheel.
    *   $v_r$: Linear velocity of the right rear wheel.
    *   $w$: Angular velocity of the robot.
    *   $\delta$: Steering angle of the front wheel.
    *   $L$: Distance between the rear axle and the front steering wheel.

    Similar to the differential drive, the velocity of the rear axle is the average of the wheel velocities:
    $v_r = \frac{v_l + v_r}{2}$

    The steering angle determines the turning radius $R$ at the front wheel:
    $R = \frac{L}{\tan(\delta)}$

    The robot's angular velocity $w$ is related to its linear velocity $v_r$ and turning radius $R$:
    $v_r = R w$
    $w = \frac{v_r}{R} = \frac{v_r \tan(\delta)}{L}$

    In terms of body-fixed frame velocities:
    $\dot{x} = v_r \cos(\theta)$
    $\dot{y} = v_r \sin(\theta)$
    $\dot{\theta} = w = \frac{v_r \tan(\delta)}{L}$

    The non-holonomic constraint is:
    $\dot{y} \cos(\theta) - \dot{x} \sin(\theta) = 0$.

*   **Textbook References:**
    *   Siegwart & Nourbakhsh: Discusses this as another example of a non-holonomic robot.

*   **Example:** Some early mobile robots, and can be seen in agricultural robots.

---

### **Comparison of Wheel Configurations**

| Configuration       | Driven Wheels | Steerable Wheels | DoF | Holonomic/Non-holonomic | Maneuverability                                     | Complexity | Typical Applications                                       |
| :------------------ | :------------ | :--------------- | :-- | :---------------------- | :-------------------------------------------------- | :--------- | :--------------------------------------------------------- |
| **Differential Drive** | 2             | 0 (Passive)      | 2   | Non-holonomic           | Forward/Backward, Rotation. Cannot move sideways. | Low        | Indoor navigation, service robots, research platforms      |
| **Ackermann Steering** | Rear (typically) | Front            | 2   | Non-holonomic           | Forward/Backward, Rotation. Cannot move sideways. | Medium     | Autonomous vehicles, outdoor robots, robots needing stable motion |
| **Synchronous Drive (Mecanum/Omni)** | 4 (or 3)      | 4 (or 3)         | 3   | Holonomic               | Full omnidirectional movement (translation & rotation). | High       | AGVs, high-precision assembly, confined spaces, research   |
| **Swerve Drive**    | 4             | 4                | 3   | Holonomic               | Full omnidirectional movement (translation & rotation). | Very High  | Advanced research, competitive robotics, specialized AGVs    |
| **Tricycle Drive**  | 2 (Rear)      | 1 (Front)        | 2   | Non-holonomic           | Forward/Backward, Rotation. Cannot move sideways. | Medium     | Some agricultural robots, simple steering platforms        |

---

### **Addressing Learning Outcomes and Course Outcomes**

*   **CO1: Familiarise types of locomotion for mobile Robots (K2)**
    *   This section directly addresses CO1 by introducing and describing various common wheel configurations (differential, Ackermann, synchronous, swerve, tricycle) as fundamental types of locomotion. The descriptions highlight their operational mechanisms.

*   **CO2: Derive the kinematic model of mobile robots (K4)**
    *   This topic lays the groundwork for CO2. For differential drive and Ackermann steering, simplified forward kinematic models (relating wheel velocities to robot body velocities) are provided and explained. The core non-holonomic constraints are also presented. The section explains the concepts needed to derive these models, such as relating wheel speeds to linear and angular velocities. For more complex configurations like synchronous drive, the complexity of the kinematic model derivation is acknowledged, with the general approach outlined.
    *   **Practice:** Students can be asked to derive these models from first principles using vector methods and coordinate transformations as explained in textbooks like Corke and Siegwart & Nourbakhsh.

---

### **Important Points to Remember**

*   **Holonomic vs. Non-holonomic:** The ability of a robot to instantaneously move in any direction in its plane is the key differentiator. Holonomic robots have fewer constraints.
*   **Non-holonomic constraints:** These are crucial for understanding path planning and control for robots like differential drives and Ackermann steering. They restrict the robot's instantaneous velocity vector.
*   **Degrees of Freedom (DoF):** The number of independent parameters defining the robot's state. For planar robots, this is typically (x, y, $\theta$).
*   **Wheel Configuration Dictates Kinematics:** The choice of wheels profoundly impacts how a robot moves and what control strategies are feasible.
*   **Maneuverability:** Synchronous and swerve drives offer superior maneuverability (omni-directionality) at the cost of mechanical and control complexity.
*   **Kinematic Model is the Foundation:** Understanding these basic kinematic models is essential before moving on to dynamic models and control.

---

### **Practice Questions**

**Question 1 (CO1, CO2):**
Describe the primary kinematic differences between a differential drive robot and a robot equipped with Mecanum wheels. Which type of robot is holonomic, and why?

**Answer:**
*   **Differential Drive:** Has two driven wheels and a passive caster. It moves by rotating the wheels differentially. It is non-holonomic, meaning it cannot instantaneously move sideways without rotation. Its velocity is constrained such that its instantaneous motion is always along a straight line or a circular arc.
*   **Mecanum Wheels:** Uses special wheels with rollers allowing for movement in any direction. By controlling the speed and direction of four such wheels, it can achieve instantaneous translation in any direction (x and y) and rotation. It is holonomic, as its velocity vector can be arbitrary in the plane.
*   **Holonomic Property:** Mecanum wheel robots are holonomic because their velocity constraints can be integrated to allow reaching any configuration $(x, y, \theta)$ without restriction on instantaneous motion direction. Differential drive robots are non-holonomic due to the no-slip constraint at their wheels, which prevents instantaneous lateral motion.

---

**Question 2 (CO2):**
Consider a differential drive robot with wheelbase $L = 0.5$ meters. If the left wheel has a velocity $v_l = 0.1$ m/s and the right wheel has a velocity $v_r = 0.3$ m/s, calculate:
a) The linear velocity of the robot's center ($v$).
b) The angular velocity of the robot ($w$).
c) If the robot is currently at $(x, y) = (0, 0)$ and its orientation is $\theta = 0$ radians (facing along the positive x-axis), what will its approximate velocity vector $(\dot{x}, \dot{y})$ be in the next small time interval $\Delta t$?

**Answer:**
Given: $L = 0.5$ m, $v_l = 0.1$ m/s, $v_r = 0.3$ m/s.

a) Linear velocity of the robot's center:
$v = \frac{v_r + v_l}{2} = \frac{0.3 \, \text{m/s} + 0.1 \, \text{m/s}}{2} = \frac{0.4 \, \text{m/s}}{2} = 0.2 \, \text{m/s}$

b) Angular velocity of the robot:
$w = \frac{v_r - v_l}{L} = \frac{0.3 \, \text{m/s} - 0.1 \, \text{m/s}}{0.5 \, \text{m}} = \frac{0.2 \, \text{m/s}}{0.5 \, \text{m}} = 0.4 \, \text{rad/s}$

c) Approximate velocity vector $(\dot{x}, \dot{y})$:
The robot's velocity in the world frame is given by:
$\dot{x} = v \cos(\theta)$
$\dot{y} = v \sin(\theta)$

With $v = 0.2$ m/s and $\theta = 0$ radians:
$\dot{x} = 0.2 \, \text{m/s} \times \cos(0) = 0.2 \, \text{m/s} \times 1 = 0.2 \, \text{m/s}$
$\dot{y} = 0.2 \, \text{m/s} \times \sin(0) = 0.2 \, \text{m/s} \times 0 = 0 \, \text{m/s}$

So, the approximate velocity vector in the next small time interval $\Delta t$ is $(\dot{x}, \dot{y}) = (0.2, 0)$ m/s.

---

**Question 3 (CO1, CO2):**
Explain the concept of instantaneous center of rotation (ICR) for an Ackermann steering robot and how it relates to its steering angle and wheelbase.

**Answer:**
The Instantaneous Center of Rotation (ICR) for an Ackermann steering robot is a point in the plane about which the robot is instantaneously rotating. For a standard Ackermann steering system:
*   The ICR lies on the perpendicular bisector of the rear axle.
*   The front and rear wheels of the same side are tangent to a circle centered at the ICR.
*   The relationship between the wheelbase ($L$), steering angle ($\delta$), and turning radius ($R$) is $R = L / \sin(\delta)$.
*   The robot's linear velocity $v$ and angular velocity $w$ are related by $v = R w$.

This means that as the steering angle $\delta$ changes, the ICR shifts, and consequently, the robot's turning radius and trajectory change. The ICR concept is fundamental to understanding the non-holonomic path constraints. When $\delta = 0$, $R$ becomes infinite, and the ICR moves to infinity, meaning the robot moves in a straight line. As $\delta$ increases, $R$ decreases, and the ICR moves closer to the robot.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **Further Reading:**

*   **Siegwart & Nourbakhsh:** Chapter 3, "Kinematics," provides a detailed treatment of differential drive and car-like robots, along with fundamental concepts of holonomic and non-holonomic systems.
*   **Corke:** Chapter 3, "Robot Kinematics," offers a formal approach to velocity kinematics for various robot types, which can be extended to understand these wheel configurations. He also introduces the concepts of transformation matrices, which are crucial for deriving more complex models.
*   **Tzafestas:** "Introduction to Mobile Robot Control" likely delves into the mathematical derivations of kinematic models for different configurations as a precursor to control strategies.

This concludes Module 2, Topic 2 on Different Wheel Configurations. Understanding these fundamental differences is crucial for selecting appropriate robots and developing effective control strategies.