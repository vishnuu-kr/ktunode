---
title: "Kinematic Pairs"
subject: "MECHANICS OF MACHINERY"
module: "Module 1: Concepts of Kinematics and Dynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fd2"
status: "completed"
scrapedAt: "2026-05-20T17:55:02.518Z"
---
# MECHANICS OF MACHINERY - Module 1: Concepts of Kinematics and Dynamics

## Topic: Kinematic Pairs

### 1. Introduction to Kinematics and Dynamics

This module introduces the fundamental concepts of kinematics and dynamics, which are essential for understanding the motion and forces within machines.

*   **Kinematics:** The study of motion without considering the forces that cause it. It deals with displacement, velocity, and acceleration.
*   **Dynamics:** The study of motion considering the forces that cause it. It involves concepts like mass, force, work, energy, and momentum.

**Reference:**
*   Ballaney P. L., *Theory of Machines and Mechanisms*, Chapter 1.
*   Rattan S. S., *Theory of Machines*, Chapter 1.
*   Ghosh A., *Theory of Mechanisms and Machines*, Chapter 1.

### 2. Basic Definitions

To understand kinematic pairs, we first need to define some basic terms:

*   **Mechanism:** A mechanical arrangement of a finite number of rigid bodies so connected that the motion of one causes a definite motion of others.
*   **Machine:** A mechanism or combination of mechanisms that transmit, modify, or control motion and/or forces to perform a specific task.
*   **Rigid Body:** A body in which the distance between any two points remains unchanged under the action of external forces. In reality, no body is perfectly rigid, but this is an idealization for analysis.
*   **Link or Element:** A rigid body forming a part of a mechanism.
*   **Joint:** The connection between two links in a mechanism.

### 3. Kinematic Pairs

A **kinematic pair** is formed when two links are connected in such a way that they permit or constrain relative motion between them.

#### 3.1 Classification of Kinematic Pairs

Kinematic pairs can be classified based on several criteria:

**a) Based on the Nature of Relative Motion:**

*   **Lower Pair:** A pair of turning or sliding elements that maintains surface contact throughout the motion. The contact is generally along an area or volume.
    *   **Turning Pair:** Two links are connected by a pin or shaft, allowing relative rotation.
        *   *Example:* A shaft rotating in a bearing (like the crank in a slider-crank mechanism).
        *   *Degree of freedom:* 1 (rotation).
    *   **Sliding Pair:** Two links are connected so that one slides relative to the other.
        *   *Example:* A piston sliding in a cylinder (like the slider in a slider-crank mechanism).
        *   *Degree of freedom:* 1 (translation).

*   **Higher Pair:** A pair of elements that have line or point contact. The contact is generally along a line or at a point.
    *   *Example:* A pair of gears in mesh, a cam and follower, a belt and pulley.
    *   *Degree of freedom:* Can be 2 or more, depending on the nature of contact. For a cam and follower, the follower can rotate and slide relative to the cam.

**b) Based on the Nature of Contact:**

*   **Rolling Pair:** One link rolls without slipping relative to the other.
    *   *Example:* A wheel rolling on a flat surface.
    *   *Degree of freedom:* 2 (rotation and translation).

*   **Sliding Pair:** As defined above, permitting sliding motion.

*   **Turning Pair:** As defined above, permitting turning motion.

*   **Screw Pair:** One link is connected to another by a screw thread, allowing relative rotation and axial translation (screwing action).
    *   *Example:* A bolt and nut.
    *   *Degree of freedom:* 1 (screw motion).

**c) Based on the Type of Constraint:**

*   **Completely Constrained Pair:** The relative motion between the links is always definite, regardless of the direction of the force applied.
    *   *Example:* A square peg in a square hole.
    *   *Degree of freedom:* 1.

*   **Incompletely Constrained Pair:** The relative motion between the links is definite only when a force is applied in a particular direction. Without this force, the links can move in other ways.
    *   *Example:* A turning pair, where the shaft can be lifted out of the bearing if no axial force is applied.
    *   *Degree of freedom:* 1 (in the intended direction of motion).

*   **Successfully Constrained Pair:** The relative motion between the links is such that it is always guided in a definite manner, but not necessarily by the shape of the contacting surfaces alone.
    *   *Example:* A cam and follower where the follower is kept in contact with the cam by a spring force.

*   **Unconstrained Pair:** No relative motion is possible between the links. They are entirely independent.
    *   *Example:* Two links not connected. (Not a kinematic pair).

**d) Based on the Elements Constituting the Pair:**

*   **Cylindrical Pair:** Two links with cylindrical surfaces in contact, allowing relative rotation and axial sliding.
    *   *Example:* A piston in a cylinder.
    *   *Degree of freedom:* 2 (rotation and axial translation).

*   **Spherical Pair:** Two links with spherical surfaces in contact, allowing relative rotation about a common center.
    *   *Example:* A ball and socket joint.
    *   *Degree of freedom:* 3 (rotation about x, y, and z axes).

*   **Planar Pair:** Two links with plane surfaces in contact, allowing relative sliding.
    *   *Example:* A rectangular bar sliding in a slot.
    *   *Degree of freedom:* 2 (sliding and rotation about an axis perpendicular to the plane).

**Important Points to Remember:**
*   Lower pairs have surface contact, while higher pairs have line or point contact.
*   The degree of freedom of a pair determines how many independent movements it allows.
*   Successfully constrained pairs are crucial for practical mechanisms as they ensure positive motion.

**Reference:**
*   Ballaney P. L., *Theory of Machines and Mechanisms*, Chapter 2.
*   Rattan S. S., *Theory of Machines*, Chapter 2.
*   Ghosh A., *Theory of Mechanisms and Machines*, Chapter 2.
*   Shigley, Uicker, *Theory of Machines and Mechanisms*, Chapter 2.
*   Norton, *Kinematics and Dynamics of Machinery*, Chapter 2.

### 4. Degree of Freedom (DOF) of Kinematic Pairs

The degree of freedom (DOF) of a kinematic pair is the number of independent parameters that define the relative position of the two links.

*   **Lower Pairs:** Generally have DOF = 1 (turning, sliding, screw).
*   **Higher Pairs:** Can have DOF > 1. For example:
    *   **Rolling Pair:** DOF = 2 (rotation + translation).
    *   **Cylindrical Pair:** DOF = 2 (rotation + axial translation).
    *   **Spherical Pair:** DOF = 3 (rotation about x, y, z axes).

**Relevance to Course Outcomes:**

*   **CO1: Calculate degrees of freedom of mechanisms and interpret their inversions.** Understanding the DOF of individual kinematic pairs is the first step in calculating the DOF of an entire mechanism using Gruebler's or Kutzbach's criterion.

### 5. Kinematic Chains and Mechanisms

*   **Kinematic Chain:** A series of links connected by kinematic pairs, forming a closed loop.
*   **Mechanism:** A kinematic chain that is capable of performing useful work. To be a mechanism, a kinematic chain must have a specific number of links and joints such that it has a controllable degree of freedom.

### 6. Types of Lower Pairs and Their Applications

| Kinematic Pair Type | Nature of Contact | Relative Motion | Degree of Freedom | Example | Application |
| :------------------ | :---------------- | :-------------- | :---------------- | :------ | :---------- |
| **Turning Pair**    | Surface contact   | Rotation        | 1                 | Crankpin in connecting rod end | Crankshaft, linkages |
| **Sliding Pair**    | Surface contact   | Translation     | 1                 | Piston in cylinder | Reciprocating engines, slider-crank |
| **Screw Pair**      | Surface contact   | Rotation & Axial Translation | 1                 | Bolt and nut | Lead screw, vice |

### 7. Types of Higher Pairs and Their Applications

| Kinematic Pair Type | Nature of Contact | Relative Motion | Degree of Freedom | Example | Application |
| :------------------ | :---------------- | :-------------- | :---------------- | :------ | :---------- |
| **Rolling Pair**    | Line/Point contact | Rolling (without slipping) | 2                 | Wheel on rail | Vehicles, conveyor belts |
| **Cylindrical Pair**| Surface contact   | Rotation & Axial Translation | 2                 | Piston in cylinder (idealized as cylindrical) | Piston-cylinder assembly (though often treated as sliding pair in simple analysis) |
| **Spherical Pair**  | Point contact     | Rotation about a point | 3                 | Ball and socket joint | Universal joint, robotic joints |
| **Gear Pair**       | Line contact      | Rolling/Sliding | 2                 | Meshing gears | Gearboxes, automotive transmissions |
| **Cam and Follower**| Line/Point contact| Rolling/Sliding | 2                 | Cam rotating, follower moving | Engine valve train, automation equipment |

**Important Note:** While a cylindrical pair technically allows two degrees of freedom, in many practical mechanisms like a piston-cylinder, the axial movement is constrained by the mechanism's overall structure, effectively reducing its contribution to the mechanism's DOF.

### 8. Unsuccessful Constrained Motion

This refers to situations where a kinematic pair, intended to provide a specific motion, can move in other ways due to insufficient constraint.

*   **Example:** A **turning pair** (like a pin in a hole) is a successfully constrained pair for rotation. However, if there is no axial constraint, it can also slide axially. Without a force to keep it in contact, it might be considered incompletely constrained for axial motion.
*   **Example:** A **cam and follower** without a spring or gravity to keep them in contact is an incompletely constrained pair. The follower might lose contact with the cam.

### 9. Constraints and Degrees of Freedom

*   **Constraint:** A restriction placed on the motion of a body or a system.
*   **Degrees of Freedom (DOF):** The minimum number of independent parameters required to specify the position and orientation of a system.
    *   For a **free rigid body in space**, DOF = 6 (3 translation, 3 rotation).
    *   For a **free rigid body in a plane**, DOF = 3 (2 translation, 1 rotation).

When links are connected by kinematic pairs, constraints are imposed, reducing the overall DOF of the system.

**Example: Slider-Crank Mechanism (Planar)**

*   **Links:** Crank (1), Connecting Rod (2), Slider (3), Frame (4) - 4 links.
*   **Joints:**
    *   Revolute joint (turning pair) between Crank and Frame (1-4).
    *   Revolute joint (turning pair) between Crank and Connecting Rod (1-2).
    *   Prismatic joint (sliding pair) between Connecting Rod and Slider (2-3).
    *   Revolute joint (turning pair) between Connecting Rod and Frame (implicit, as the crank is fixed) (2-4).
    *   Prismatic joint (sliding pair) between Slider and Frame (3-4).

Let's analyze the DOF using **Kutzbach's Criterion for planar mechanisms**:
$DOF = 3(n-1) - 2j_1 - j_2$
Where:
*   $n$ = number of links (including the frame).
*   $j_1$ = number of turning (revolute) and prismatic (sliding) joints (which have 1 DOF).
*   $j_2$ = number of higher pairs (which have 2 DOF).

For the slider-crank mechanism:
*   $n = 4$
*   $j_1 = 4$ (3 turning pairs + 1 sliding pair)
*   $j_2 = 0$

$DOF = 3(4-1) - 2(4) - 0 = 3(3) - 8 = 9 - 8 = 1$

The slider-crank mechanism has 1 DOF, meaning if we control the motion of one link (e.g., the crank), the motion of all other links is determined.

**Reference:**
*   Wilson, Sadler, *Kinematics and Dynamics of Machinery*, Chapter 3.
*   Norton, *Kinematics and Dynamics of Machinery*, Chapter 3.

### 10. Inversions of Mechanisms

An **inversion** of a mechanism is obtained by keeping a different link stationary (fixed frame) than the original mechanism. This changes the type of motion transmitted.

*   **Example: Slider-Crank Mechanism Inversions:**
    1.  **Fixed Link:** Crank (original mechanism). Motion: Rotary to Reciprocatory.
    2.  **Fixed Link:** Connecting Rod. Motion: Rotary to Rotary (and reciprocatory). (Less common practical form).
    3.  **Fixed Link:** Slider (or frame). Motion: Reciprocatory to Rotary. (e.g., Oscillating cylinder engine).
    4.  **Fixed Link:** Frame (original). Motion: Reciprocatory to Reciprocatory. (e.g., Whitworth quick return mechanism).

**Relevance to Course Outcomes:**
*   **CO1: Calculate degrees of freedom of mechanisms and interpret their inversions.** Understanding inversions helps in analyzing how different configurations of the same kinematic chain can produce different types of output motions.

### 11. Practice Questions and Exercises

**Question 1:**
Define a kinematic pair and classify it based on the nature of relative motion. Give examples for each type.

**Answer:**
A kinematic pair is formed when two links are connected such that they permit or constrain relative motion between them.
*   **Lower Pair:** Surface contact, definite relative motion.
    *   *Turning Pair:* Allows rotation (e.g., pin in a bearing).
    *   *Sliding Pair:* Allows translation (e.g., piston in a cylinder).
*   **Higher Pair:** Line or point contact, often more freedom.
    *   *Rolling Pair:* Allows rolling (e.g., wheel on a surface).
    *   *Screw Pair:* Allows screwing motion (e.g., bolt and nut).

**Question 2:**
What is the degree of freedom of a spherical pair? Explain with an example.

**Answer:**
A spherical pair allows relative rotation about a single point. Its degree of freedom is 3.
*   *Example:* A ball and socket joint. This allows the connecting rod to rotate about the x, y, and z axes passing through the center of the ball.

**Question 3:**
Distinguish between a lower pair and a higher pair.

**Answer:**
| Feature           | Lower Pair           | Higher Pair           |
| :---------------- | :------------------- | :-------------------- |
| **Nature of Contact** | Surface contact      | Line or Point contact |
| **DOF**           | Typically 1          | Can be > 1            |
| **Examples**      | Turning, Sliding     | Rolling, Gears, Cam   |
| **Constraint**    | Generally well-constrained for intended motion | May require additional constraints |

**Question 4:**
Consider a simple linkage with 4 links and 4 turning pairs. Calculate its degree of freedom using Kutzbach's criterion.

**Answer:**
*   $n = 4$ (4 links)
*   $j_1 = 4$ (4 turning pairs)
*   $j_2 = 0$

$DOF = 3(n-1) - 2j_1 - j_2$
$DOF = 3(4-1) - 2(4) - 0$
$DOF = 3(3) - 8 = 9 - 8 = 1$

**Question 5:**
Explain what is meant by an inversion of a mechanism and provide an example.

**Answer:**
An inversion of a mechanism is obtained by fixing a different link than the original mechanism. This alters the motion of the links relative to each other.
*   **Example:** The Watt mechanism (a four-bar linkage) has a fixed frame. Its inversion can be obtained by fixing one of the other links (e.g., the crank), resulting in a different type of output motion.

### 12. Summary and Key Takeaways

*   Kinematic pairs are the fundamental building blocks of mechanisms.
*   They are classified based on motion, contact, constraint, and elements.
*   Lower pairs have surface contact and generally 1 DOF, while higher pairs have line/point contact and can have more DOF.
*   Understanding the DOF of pairs is crucial for analyzing the DOF of entire mechanisms.
*   Inversions of mechanisms are important for generating different types of motion from the same kinematic chain.
*   Properly constrained pairs are essential for the reliable operation of machines.

This module lays the groundwork for understanding how complex machines are formed by the strategic arrangement of these basic kinematic pairs. The concepts here directly contribute to understanding mechanism synthesis (CO3) and analysis (CO2).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
