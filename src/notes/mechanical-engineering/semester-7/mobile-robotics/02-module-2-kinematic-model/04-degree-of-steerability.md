---
title: "Degree of steerability"
subject: "MOBILE ROBOTICS"
module: "Module 2: Kinematic model"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640a8"
status: "completed"
scrapedAt: "2026-05-20T18:15:07.403Z"
---
## Mobile Robotics: Module 2: Kinematic Model

### Topic: Degree of Steerability

This topic delves into the fundamental aspect of how mobile robots can change their pose (position and orientation) in the environment. Understanding the "degree of steerability" helps us categorize robots and anticipate their movement capabilities.

---

### Learning Outcomes Addressed:

*   **LO1:** Understand the concept of degree of steerability in mobile robots.
*   **LO2:** Classify mobile robots based on their degree of steerability.
*   **LO3:** Relate degree of steerability to the robot's kinematic structure.

---

### Course Outcomes Alignment:

*   **CO1: Familiarise types of locomotion for mobile Robots (Knowledge Level: K2)**
    *   This topic directly supports CO1 by introducing different locomotion types through the lens of steerability.
*   **CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)**
    *   While this topic focuses on steerability, it lays the groundwork for understanding the kinematic constraints that are crucial for deriving kinematic models. The ability to move and turn directly impacts the velocity and configuration space of the robot.

---

### 1. What is Degree of Steerability?

**Definition:** The degree of steerability of a mobile robot refers to the number of independent directions or degrees of freedom (DOF) the robot can instantaneously control its velocity in. It fundamentally describes *how* a robot can move and change its pose.

**Key Concept:** Steerability is about instantaneous motion capabilities, not necessarily the total number of DOFs the robot possesses in its configuration space (which includes position and orientation).

---

### 2. Relating Steerability to Kinematic Structure

The degree of steerability is intrinsically linked to the robot's kinematic structure, specifically the arrangement and control of its wheels or other locomotion mechanisms.

**Consideration:**

*   **Wheels:** The number of wheels, their placement, their type (e.g., fixed, omnidirectional, castor), and how they are actuated (independently or coupled) all determine the robot's steerability.
*   **Other Locomotion:** While wheels are common, other mechanisms like tracks or legs also have inherent steerability characteristics.

---

### 3. Classification of Mobile Robots by Degree of Steerability

We can categorize mobile robots based on how many independent velocities they can control at any given moment. This classification is crucial for understanding their maneuverability and the complexity of their motion planning and control.

#### 3.1. Zero Degree of Steerability (Non-holonomic with No Steering)

*   **Description:** These robots have a fixed kinematic configuration and cannot change their orientation independently of their translation. They can only move in a fixed direction.
*   **Examples:**
    *   **Simple Wheeled Robots with Fixed Wheels:** A robot with two fixed wheels that only move forward and backward.
    *   **Tanks (Tracked Vehicles):** While they can turn by differential driving of tracks, their fundamental "steering" is achieved by differential velocity, not an independent steering mechanism. From a pure DOF perspective of *independent steering*, they are often considered here.
*   **Kinematic Implications:** Their velocity is typically constrained to a single direction at any given instant.
*   **Textbook Reference:** **Siegwart & Nourbakhsh (2011)** discusses simple wheeled robots and their limited maneuverability, often characterized by a lack of independent steering.

#### 3.2. One Degree of Steerability (Holonomic or Non-holonomic with Limited Steering)

*   **Description:** These robots can control their velocity along one independent direction at any given instant. This usually translates to controlling either forward/backward motion or steering.
*   **Sub-categories:**
    *   **Holonomic (with 1 DOF steerability):** If the robot can move sideways, it has a holonomic constraint that allows it to change its position without necessarily changing its orientation in a coupled manner. However, for steerability classification, we often focus on *independent control*. A robot that can only move forward/backward *or* steer is considered 1-DOF steerable in that specific sense.
    *   **Non-holonomic (with 1 DOF steerability):** This is the most common case. The robot can control its forward/backward velocity and its steering (or turning) velocity.
*   **Examples:**
    *   **Differential Drive Robot:** The classic example. Can move forward/backward and turn in place by varying the speeds of its two independently driven wheels. It controls its linear velocity along its forward axis and its angular velocity.
        *   **Kinematic Model Insight:** The forward velocity and angular velocity are the independent controls.
        *   **Textbook Reference:** **Corke (2011)** provides detailed kinematic models for differential drive robots, highlighting how forward and angular velocities are the primary control inputs. **Siegwart & Nourbakhsh (2011)** also covers this extensively.
    *   **Car-like Robot (Ackermann Steering):** Similar to a car, it has front wheels that can be steered. It can move forward/backward and steer. However, it cannot move sideways or rotate in place like a differential drive robot.
        *   **Kinematic Model Insight:** Forward velocity and steering angle are the independent controls.
        *   **Textbook Reference:** **Siegwart & Nourbakhsh (2011)** and **Tzafestas (2011)** often discuss the kinematic constraints of car-like robots, emphasizing the steering angle as a key parameter.
*   **Key Point:** For non-holonomic robots with 1-DOF steerability, while they have 3 DOFs in their configuration space (x, y, theta), they only have 1 DOF of *instantaneous velocity control*. The constraint is that they cannot instantaneously move sideways.

#### 3.3. Two Degrees of Steerability (Holonomic)

*   **Description:** These robots can control their velocity in two independent directions simultaneously. This allows for more complex and agile movements, including sideways translation and rotation.
*   **Examples:**
    *   **Omnidirectional Robots:** Robots designed to move in any direction instantaneously.
        *   **Mecanum Wheel Robots:** Utilize four wheels with rollers oriented at 45 degrees to the wheel's rotation axis. By varying the speeds of these wheels, the robot can achieve forward/backward, sideways, and rotational motion.
        *   **Swedish Wheel Robots:** Similar concept to Mecanum wheels, offering omnidirectional movement.
    *   **Articulated Robots with Steering Joints:** Robots with multiple steering joints that can independently control direction.
*   **Kinematic Implications:** The robot's velocity vector can be decomposed into two independent components, allowing for translation and rotation independently or in combination.
*   **Textbook Reference:** **Siegwart & Nourbakhsh (2011)** often introduces omnidirectional robots as a class with higher maneuverability due to their multiple degrees of steering.
*   **Key Point:** These robots are typically holonomic, meaning their velocity constraints can be integrated into position constraints, allowing them to reach any pose.

#### 3.4. Three Degrees of Steerability (Fully Holonomic)

*   **Description:** These robots can control their velocity in three independent directions: two translational (e.g., x and y) and one rotational (e.g., theta).
*   **Examples:**
    *   **Robots with Skew Wheels:** Wheels that can be steered and translated.
    *   **Robots with Multiple Independently Controlled Wheels that Can Articulate:** Think of a robot with a more complex wheel arrangement that allows for full 2D translation and rotation.
*   **Kinematic Implications:** They are fully holonomic and can move and orient themselves in any direction instantaneously, without any kinematic constraints on their velocity.
*   **Textbook Reference:** While less common in introductory mobile robotics, the concept of fully holonomic systems is discussed in advanced kinematics. **La Valle (2009)** touches upon configuration spaces and potential fields where such movements are considered.

---

### 4. Importance of Degree of Steerability

*   **Maneuverability:** Higher degrees of steerability generally imply greater maneuverability, allowing robots to navigate complex environments more easily.
*   **Path Planning:** The degree of steerability directly influences the types of paths a robot can follow and the complexity of the path planning algorithms required. Non-holonomic robots have more challenging path planning problems due to their inherent motion constraints.
*   **Control Complexity:** Robots with higher steerability often require more sophisticated control systems to manage their multiple independent velocity inputs.
*   **Application Suitability:** The choice of locomotion and steerability is dictated by the intended application. For tight spaces, omnidirectional robots are advantageous. For open spaces, differential drive or car-like robots might suffice.
*   **Textbook Reference:** **Siegwart & Nourbakhsh (2011)** emphasize that understanding a robot's kinematic constraints (which are directly related to its steerability) is foundational for designing effective navigation and control strategies.

---

### 5. Practice Questions and Answers

**Question 1:** What is the primary characteristic that defines a robot's "degree of steerability"?
**Answer:** The number of independent velocity directions the robot can instantaneously control.

**Question 2:** Name one type of mobile robot that typically has one degree of steerability and briefly explain its movement capabilities.
**Answer:** A differential drive robot. It can move forward/backward and turn in place by varying the speed of its two independently driven wheels. It controls its linear and angular velocity.

**Question 3:** How does the degree of steerability influence path planning for a mobile robot?
**Answer:** Robots with lower steerability (e.g., non-holonomic) have more restrictive motion capabilities, meaning they cannot instantaneously move in any direction. This requires more complex path planning algorithms that account for these kinematic constraints to ensure feasible trajectories.

**Question 4:** What is a key advantage of robots with a higher degree of steerability (e.g., omnidirectional robots)?
**Answer:** Increased maneuverability, allowing them to navigate confined spaces, avoid obstacles efficiently, and potentially move sideways or rotate without changing their primary forward direction.

**Question 5:** Is a robot with Mecanum wheels typically considered holonomic or non-holonomic? What degree of steerability does it usually exhibit?
**Answer:** Robots with Mecanum wheels are typically considered **holonomic** and exhibit **two degrees of steerability** (two independent translational velocities) and one degree of rotational velocity control.

---

### 6. Important Points to Remember

*   **Steerability vs. Configuration DOFs:** Do not confuse the degree of steerability (instantaneous velocity control) with the total number of degrees of freedom in the robot's configuration space (position and orientation). A car has 3 DOFs (x, y, theta) but 1 DOF of steerability.
*   **Kinematic Constraints:** The degree of steerability is a direct consequence of the robot's kinematic constraints.
*   **Applications Drive Choice:** The required degree of steerability is determined by the robot's intended task and operating environment.
*   **Foundation for Kinematics:** Understanding steerability is a prerequisite for deriving accurate kinematic models, as it defines the fundamental velocity inputs and constraints.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. Textbook and Reference Book Content Incorporation Summary

*   **Siegwart & Nourbakhsh (2011):** Provides foundational definitions and examples of different wheeled robot locomotion systems, clearly distinguishing between differential drive, car-like, and omnidirectional robots, thereby illustrating varying degrees of steerability.
*   **Corke (2011):** Offers detailed mathematical descriptions (kinematic models) of common robot types like the differential drive, which inherently showcases their 1-DOF steerability through control inputs like linear and angular velocity.
*   **Tzafestas (2011):** Discusses robot kinematics and control, where steerability is a key factor in determining control strategies and the achievable motion.
*   **La Valle (2009):** While more focused on planning, it implicitly addresses steerability when discussing state spaces and feasible motions for robots, especially when contrasting holonomic and non-holonomic systems.
*   **Thrun, Burgard, & Fox (2005):** Touches upon how different robot platforms (with varying steerability) affect the complexity of probabilistic state estimation and mapping, highlighting the practical implications of locomotion capabilities.

This comprehensive overview of the degree of steerability provides a solid foundation for understanding the motion capabilities of various mobile robots, directly supporting the learning outcomes and course objectives related to locomotion and kinematic modeling.