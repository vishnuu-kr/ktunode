---
title: "Wheeled locomotion: The design space"
subject: "MOBILE ROBOTICS"
module: "Module 1: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446409d"
status: "completed"
scrapedAt: "2026-05-20T18:14:59.988Z"
---
# Mobile Robotics: Module 1 - Introduction

## Topic: Wheeled Locomotion: The Design Space

---

### **Module Overview:**

This module introduces the fundamental concepts of mobile robotics, focusing on the diverse methods of locomotion. We will begin by exploring wheeled locomotion, a ubiquitous form of movement for mobile robots. Understanding the "design space" of wheeled locomotion is crucial for selecting and designing robots capable of navigating various environments.

---

### **Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   **LO1:** Understand the fundamental principles of wheeled locomotion.
*   **LO2:** Differentiate between various types of wheeled robot configurations.
*   **LO3:** Analyze the advantages and disadvantages of different wheeled locomotion designs.
*   **LO4:** Relate wheeled locomotion types to specific application requirements.

---

### **Course Outcomes Alignment:**

This topic directly contributes to:

*   **CO1: Familiarise types of locomotion for mobile Robots (Knowledge Level: K2)**
    *   This topic provides the foundational knowledge of the most common locomotion method for mobile robots.

---

### **Key Concepts and Definitions:**

*   **Locomotion:** The ability of a robot to move from one place to another.
*   **Mobile Robot:** A robot capable of moving within its environment.
*   **Wheeled Locomotion:** Movement achieved by rolling wheels.
*   **Degrees of Freedom (DOF):** The number of independent parameters that can define the configuration of a robot's end-effector in space. For a mobile robot, this often refers to its controllable velocities.
*   **Kinematic Model:** A mathematical description of how a robot's joints and links relate to the position and orientation of its end-effector, without considering forces or masses.
*   **Holonomic Robot:** A robot whose controllable degrees of freedom are equal to its degrees of freedom in configuration space. These robots can move instantaneously in any direction.
*   **Non-holonomic Robot:** A robot whose controllable degrees of freedom are less than its degrees of freedom in configuration space. These robots have constraints on their motion (e.g., cannot move sideways instantaneously).
*   **Configuration Space (C-space):** The space of all possible positions and orientations of a robot.

---

## 1. Introduction to Wheeled Locomotion

Wheeled locomotion is a primary means of movement for many mobile robots due to its efficiency, simplicity, and ability to traverse relatively flat surfaces. The design of the wheel system significantly impacts a robot's maneuverability, speed, and ability to overcome obstacles.

### **1.1 Advantages of Wheeled Locomotion:**

*   **Efficiency:** Wheels generally require less energy for movement on smooth surfaces compared to legged or tracked locomotion. (Siegwart & Nourbakhsh, 2011)
*   **Simplicity:** The mechanical design and control of wheeled robots are often simpler than other locomotion methods.
*   **Speed:** Wheeled robots can achieve relatively high speeds on appropriate terrains.
*   **Maneuverability:** Certain wheeled configurations offer excellent maneuverability, including the ability to turn in place.

### **1.2 Disadvantages of Wheeled Locomotion:**

*   **Terrain Limitations:** Wheeled robots struggle on rough, uneven terrain, stairs, or very soft surfaces where wheels can sink or lose traction.
*   **Obstacle Negotiation:** Small wheels have difficulty overcoming obstacles larger than their diameter.
*   **Ground Pressure:** Wheels can exert high ground pressure on soft surfaces, leading to sinking.

---

## 2. The Design Space of Wheeled Robot Configurations

The "design space" of wheeled locomotion refers to the spectrum of possible wheel arrangements and their associated kinematic properties. This design space is largely defined by the number of wheels, their placement, and their ability to rotate and translate independently.

### **2.1 Classification of Wheeled Robots:**

Wheeled robots can be broadly classified based on their kinematic characteristics, often relating to whether they are holonomic or non-holonomic.

#### **2.1.1 Unicycle (Differential Drive)**

*   **Description:** Two independently driven wheels at the rear (or front), typically with a caster or free-spinning wheel at the opposite end for stability.
*   **Kinematics:**
    *   Can move forward/backward (linear velocity).
    *   Can rotate around a point between the drive wheels (angular velocity).
    *   **Crucially, it cannot move sideways.** This makes it **non-holonomic**. (Corke, 2011)
*   **DOF:** 2 controllable DOF (linear velocity $v$, angular velocity $\omega$). However, its configuration space has 3 DOF (x, y, $\theta$).
*   **Maneuverability:** Can turn in place (zero radius turn). Good for navigating tight spaces.
*   **Examples:** Many early mobile robots, robotic vacuum cleaners (e.g., Roomba), AGVs (Automated Guided Vehicles).

#### **2.1.2 Bicycle (Car-like)**

*   **Description:** Two steered wheels at the front and two fixed wheels at the rear (or vice versa). Similar to a car.
*   **Kinematics:**
    *   Can move forward/backward.
    *   Can steer the front wheels, allowing for curvilinear motion.
    *   **Cannot move sideways and cannot rotate in place.** This is also **non-holonomic**. (La Valle, 2009)
*   **DOF:** 2 controllable DOF (linear velocity $v$, steering angle $\delta$ which dictates angular velocity $\omega$). Configuration space has 3 DOF (x, y, $\theta$).
*   **Maneuverability:** Requires space to turn (non-zero turning radius).
*   **Examples:** Most actual cars, some larger industrial robots.

#### **2.1.3 Tricycle**

*   **Description:** One steerable wheel at the front and two fixed drive wheels at the rear.
*   **Kinematics:**
    *   Similar to the bicycle, it can move forward/backward and steer.
    *   **Non-holonomic.** (Siegwart & Nourbakhsh, 2011)
*   **DOF:** 2 controllable DOF (linear velocity $v$, steering angle $\delta$). Configuration space has 3 DOF (x, y, $\theta$).
*   **Maneuverability:** Can turn in place if the steered wheel is at the center of rotation. If the steered wheel is off-center, it has a turning radius.
*   **Examples:** Some older research robots, toy robots.

#### **2.1.4 Ackermann Steering**

*   **Description:** A more advanced form of bicycle steering where the inner wheel turns at a sharper angle than the outer wheel during a turn to avoid slipping.
*   **Kinematics:**
    *   **Non-holonomic.** (Corke, 2011)
*   **Maneuverability:** Similar to bicycle, requires space to turn.
*   **Examples:** Standard car steering systems.

#### **2.1.5 Synchro Drive (Omnidirectional)**

*   **Description:** Each wheel is independently driven and can steer. This is often achieved using specialized "Mecanum wheels" or "omni-wheels."
*   **Kinematics:**
    *   Can move forward/backward, sideways, and rotate.
    *   **Holonomic** (in the plane). This is a key advantage for maneuverability. (Siegwart & Nourbakhsh, 2011)
*   **DOF:** 3 controllable DOF (linear x-velocity, linear y-velocity, angular velocity $\omega$). Configuration space has 3 DOF (x, y, $\theta$).
*   **Maneuverability:** Excellent. Can move in any direction instantaneously and rotate in place. Can perform complex maneuvers like strafing and precise positioning.
*   **Examples:** Mecanum wheeled robots, omni-wheeled robots used in manufacturing and logistics for precise placement.

    *   **Mecanum Wheels:** These wheels have rollers mounted around their circumference at a 45-degree angle. By controlling the speed and direction of each wheel appropriately, the robot can achieve omnidirectional movement.
    *   **Omni-Wheels:** These wheels have smaller free-spinning rollers mounted on their perimeter. Similar to Mecanum wheels, they allow for omnidirectional motion when combined.

#### **2.1.6 Swedish Wheel (Ball Wheel)**

*   **Description:** A wheel with a spherical ball mounted on its circumference, allowing movement along the axis of the ball.
*   **Kinematics:**
    *   Can achieve omnidirectional movement.
    *   **Holonomic** (in the plane).
*   **DOF:** 3 controllable DOF.
*   **Maneuverability:** High, similar to synchro drive.
*   **Examples:** Used in specialized robotic applications where precise omnidirectional movement is needed.

#### **2.1.7 Tracked Robots (Treads)**

*   **Description:** Although not strictly "wheeled," tracked robots use a continuous band that rolls over a series of wheels. They are often discussed alongside wheeled robots due to their common application on rough terrain.
*   **Kinematics:**
    *   Can move forward/backward.
    *   Can turn by rotating tracks independently.
    *   **Non-holonomic.** (Siegwart & Nourbakhsh, 2011)
*   **DOF:** 2 controllable DOF (linear velocity, angular velocity). Configuration space has 3 DOF (x, y, $\theta$).
*   **Maneuverability:** Excellent on rough terrain, can turn in place. Lower efficiency and speed on smooth surfaces compared to wheels.
*   **Examples:** Tanks, construction vehicles, some military robots, robots for disaster response (e.g., bomb disposal robots).

---

## 3. Key Design Considerations for Wheeled Locomotion

When choosing or designing a wheeled robot, several factors influence the selection of the locomotion system:

### **3.1 Number of Wheels and Stability:**

*   **Three-wheeled robots:** Generally have a triangular base for stability. Can be designed to be holonomic or non-holonomic.
*   **Four-wheeled robots:** Typically require a suspension system or careful balancing to maintain stability on uneven surfaces. Can be designed for omnidirectional movement or more conventional steering.
*   **More than four wheels:** Less common for standard mobile robots, often seen in specialized vehicles.

### **3.2 Wheel Type:**

*   **Standard Wheels:** Simple, efficient on smooth surfaces. Diameter impacts obstacle negotiation.
*   **Mecanum Wheels/Omni-Wheels:** Enable omnidirectional movement but can be less efficient and more prone to slippage on certain surfaces. Rollers can be susceptible to jamming by debris. (Thrun, Burgard, & Fox, 2005)
*   **Large Diameter Wheels:** Better for overcoming obstacles and uneven terrain.
*   **Rubber Tires:** Provide good grip and shock absorption.
*   **Hard Wheels:** More efficient on smooth surfaces but offer less grip and can be noisy.

### **3.3 Steering Mechanism:**

*   **Differential Drive:** Steering is achieved by varying the speed of the two main drive wheels.
*   **Ackermann Steering:** Steers by angling the front wheels, like a car.
*   **Omnidirectional Steering:** Achieved by independently controlling the velocity and orientation of all wheels (e.g., Mecanum).

### **3.4 Drive Configuration:**

*   **All-Wheel Drive:** All wheels are powered, offering better traction.
*   **Two-Wheel Drive:** Simplest configuration, but can lead to slippage if traction is lost.

### **3.5 Maneuverability Requirements:**

*   **Tight Spaces:** Differential drive or omnidirectional systems are preferred.
*   **Open Spaces:** Bicycle or tricycle configurations might suffice.
*   **Precise Positioning:** Omnidirectional systems are ideal.

### **3.6 Terrain Type:**

*   **Smooth, Indoor Environments:** Standard differential drive or omnidirectional wheels are suitable.
*   **Outdoor, Uneven Terrain:** Larger wheels, tracked systems, or robots with advanced suspension are necessary.

---

## 4. Connecting Locomotion to Applications

The choice of wheeled locomotion directly impacts a robot's capabilities and suitability for different tasks:

*   **Warehouse Logistics & Manufacturing:** Omnidirectional robots (Mecanum wheels) are excellent for precise movement and navigation in confined, organized spaces.
*   **Surveillance & Security:** Differential drive robots offer a good balance of maneuverability and cost-effectiveness for patrolling indoor or relatively flat outdoor areas.
*   **Exploration & Disaster Response:** Tracked robots are often preferred for their ability to traverse rubble, inclines, and challenging terrains.
*   **Service Robots (e.g., Vacuuming, Delivery):** Differential drive or simple tricycle configurations are common for their ease of control and cost.
*   **Autonomous Driving:** Ackermann steering (car-like) is the standard for vehicles.

---

## 5. Important Points to Remember

*   **Holonomic vs. Non-holonomic:** This is a fundamental distinction. Holonomic robots can move instantaneously in any direction, while non-holonomic robots have velocity constraints (most commonly, they cannot move sideways).
*   **Differential Drive:** The most common non-holonomic wheeled robot configuration.
*   **Omnidirectional Drive:** Achieved with specialized wheels (Mecanum, omni-wheels) and offers high maneuverability but can be more complex.
*   **Design Trade-offs:** There's no single "best" wheeled system. The choice involves trade-offs between maneuverability, speed, terrain capability, complexity, and cost.
*   **Kinematics is Key:** Understanding the kinematic constraints of each configuration is crucial for path planning and control.

---

## 6. Practice Questions and Answers

**Question 1:** Which type of wheeled robot configuration is considered **holonomic** and why?
    a) Differential Drive
    b) Bicycle
    c) Mecanum Drive
    d) Tricycle

**Answer 1:** c) Mecanum Drive. Mecanum wheels (or omni-wheels) allow the robot to move instantaneously in any direction (forward, backward, sideways) and rotate, meaning its controllable velocities match its degrees of freedom in the plane. Differential drive, bicycle, and tricycle configurations have velocity constraints (cannot move sideways directly) and are thus non-holonomic.

---

**Question 2:** A robot needs to operate in a factory environment with tight aisles and the ability to precisely position itself next to machines for loading/unloading. Which wheeled locomotion type would be most suitable and why?
    a) Differential Drive
    b) Bicycle
    c) Synchro Drive (Mecanum/Omni-wheels)
    d) Tracked

**Answer 2:** c) Synchro Drive (Mecanum/Omni-wheels). The requirement for precise positioning and tight aisle navigation strongly suggests the need for omnidirectional movement. Mecanum or omni-wheels allow the robot to strafe and rotate in place, making it highly maneuverable in confined spaces. Differential drive is maneuverable but cannot strafe. Bicycle/Ackermann steering requires significant space to turn. Tracked robots are not designed for precise indoor positioning.

---

**Question 3:** What is the main kinematic constraint of a differential drive robot?
    a) It cannot move forward or backward.
    b) It cannot rotate in place.
    c) It cannot move sideways.
    d) It requires a large turning radius.

**Answer 3:** c) It cannot move sideways. A differential drive robot's wheels are oriented to allow forward/backward motion and rotation around a point between the wheels, but not lateral (sideways) movement.

---

**Question 4:** True or False: All wheeled robots are non-holonomic.

**Answer 4:** False. While many common wheeled robots like differential drives and bicycles are non-holonomic, robots equipped with Mecanum wheels or omni-wheels are considered holonomic in the plane.

---

**Question 5:** Consider a tracked robot. While it can turn in place by rotating its tracks in opposite directions, is it considered holonomic in its 2D plane of movement? Explain why or why not.

**Answer 5:** No, a tracked robot is **non-holonomic**. While it can achieve a zero-radius turn, its fundamental velocity capabilities are limited. It can only move forward/backward and turn by differential track speeds. It cannot instantaneously translate sideways without also rotating. Its controllable velocities are linear and angular, but these are not independent in all directions of the plane, unlike a holonomic robot which can achieve independent $v_x$, $v_y$, and $\omega$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **References:**

*   **Siegwart, R., & Nourbakhsh, I. R. (2011).** *Introduction to Autonomous Mobile Robots*. The MIT Press. (Provides fundamental concepts of mobile robot kinematics and configurations.)
*   **Corke, P. (2011).** *Robotics, Vision and Control: Fundamental Algorithms in MATLAB*. Springer Tracts in Advanced Robotics. (Discusses robot kinematics and control for various configurations.)
*   **La Valle, S. M. (2009).** *Planning Algorithms*. Cambridge University Press. (Offers insights into configuration spaces and motion constraints relevant to robot design.)
*   **Thrun, S., Burgard, W., & Fox, D. (2005).** *Probabilistic Robotics*. MIT Press. (Touches upon the practical aspects and challenges of different locomotion systems, particularly in relation to sensing and uncertainty.)

---