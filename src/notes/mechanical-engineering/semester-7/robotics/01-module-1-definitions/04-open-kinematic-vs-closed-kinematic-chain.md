---
title: "open kinematic vs closed kinematic chain"
subject: "ROBOTICS"
module: "Module 1: Definitions"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446423f"
status: "completed"
scrapedAt: "2026-05-20T18:18:36.087Z"
---
# ROBOTICS - Module 1: Definitions

## Topic: Open Kinematic vs. Closed Kinematic Chains

---

### **Learning Outcomes:**

*   Understand the fundamental difference between open and closed kinematic chains in robotics.
*   Identify and classify robotic manipulators based on their kinematic structure.
*   Relate kinematic chain configurations to robot capabilities and limitations.

---

### **Course Outcomes Alignment:**

This topic directly contributes to **CO1: Familiarise with anatomy, specifications and types of Robots (Knowledge Level: K2)** by introducing fundamental classifications of robot manipulators. It also lays the groundwork for understanding the kinematic models required for **CO2: Obtain forward and inverse kinematic models of robotic manipulators (Knowledge Level: K3)**.

---

### **1. Introduction to Kinematic Chains**

A kinematic chain is a series of rigid bodies (links) connected by joints, allowing relative motion between them. The configuration of these links and joints defines the degrees of freedom (DOF) and the overall kinematic structure of a robot.

**Key Concepts:**

*   **Link:** A rigid body connecting joints.
*   **Joint:** A connection between two links that allows relative motion. Joints can be revolute (rotational) or prismatic (translational).
*   **Degrees of Freedom (DOF):** The number of independent parameters required to specify the configuration of a kinematic chain.

---

### **2. Open Kinematic Chains**

**Definition:** An open kinematic chain is a series of links and joints where one end of the chain is attached to a fixed base, and the other end is free to move in space. There is a single path from the base to the end-effector.

**Characteristics:**

*   **Base-to-End-Effector Path:** A clear, unobstructed path exists from the fixed base to the end-effector.
*   **Serial Manipulators:** Most industrial and research manipulators are designed as open kinematic chains.
*   **Degrees of Freedom:** The number of DOF is typically determined by the number of actuated joints. For an n-DOF open chain manipulator, the end-effector can be positioned and/or oriented in n ways.
*   **Kinematic Modeling:** Forward and inverse kinematics are well-defined and commonly solved for open chains.

**Examples:**

*   **Articulated Robots:** These are the most common type, featuring a series of revolute joints (e.g., SCARA robots, anthropomorphic robots).
    *   *Example:* A human arm is a biological open kinematic chain, with the shoulder attached to the torso (base) and the hand as the end-effector.
*   **Anthropomorphic Robots:** Robots designed to resemble the human body's structure, often with multiple revolute joints at the "shoulder," "elbow," and "wrist."
*   **SCARA Robots:** Selective Compliance Assembly Robot Arm, typically with two parallel revolute joints and one prismatic joint for vertical movement.

**Textbook Reference:**

*   **Schilling, R. J. (1996). *Fundamentals of Robotics – Analysis and Control*. Prentice Hall of India.** Schilling extensively discusses the serial manipulator as the archetypal open kinematic chain, detailing its joint configurations and degrees of freedom.
*   **Craig, J. J. (2002). *Introduction to Robotics (Mechanics and Control)*. Pearson Education Asia.** Craig provides a foundational understanding of open kinematic chains, linking them directly to the concept of serial manipulators and their kinematic analysis.
*   **Saha, S. K. ( ). *Introduction to Robotics*. McGraw Hill Education.** Saha offers clear explanations and diagrams of various open kinematic chain configurations commonly found in industrial robots.

---

### **3. Closed Kinematic Chains**

**Definition:** A closed kinematic chain is a series of links and joints where the end-effector is mechanically connected back to the base, forming a closed loop. This creates multiple paths between any two points in the chain.

**Characteristics:**

*   **Redundant Constraints:** The closed loop introduces redundant constraints, meaning the motion of one joint can affect the motion of others in ways not seen in open chains.
*   **Stiffness and Accuracy:** Closed chains are often more rigid and can offer higher accuracy due to load sharing among multiple links.
*   **Complexity in Kinematic Analysis:** Forward and inverse kinematics are significantly more complex to solve due to the presence of loops. The concept of loop closure equations is crucial.
*   **Limited Dexterity:** The rigid structure and redundant constraints can limit the dexterity and range of motion compared to open chains.

**Examples:**

*   **Stewart Platforms (Hexapods):** These are parallel manipulators where the end-effector is connected to the base by multiple kinematic legs (struts). Each leg is a kinematic chain, and together they form a closed-loop structure.
    *   *Example:* A flight simulator platform, where the user sits on the end-effector, and the legs adjust to simulate aircraft movement.
*   **Delta Robots:** Another type of parallel robot with a parallel kinematic structure, often used for high-speed pick-and-place applications.
*   **Four-Bar Linkages:** A fundamental closed kinematic chain with four revolute joints and four links.
*   **Gears and Gear Trains:** While not always considered "robotic manipulators" in the typical sense, gears and their interconnectedness form closed kinematic chains that transmit motion and torque.

**Textbook Reference:**

*   **Mittal, R. K. (2003). *Robotics and Control*. Tata McGraw Hill.** Mittal likely explores the complexities introduced by closed kinematic chains, particularly in the context of parallel manipulators and their unique control challenges.
*   **Ghosal, A. ( ). *Robotics-Fundamental concepts and analysis*. Oxford University Press.** Ghosal's analysis may delve into the mathematical formulations required to handle the redundant constraints and loop closure conditions in closed kinematic chains.
*   **Deb, S. R. ( ). *Robotics Technology and Flexible Automation*. Second Edition.** Deb's work might provide insights into the practical applications and design considerations of robots employing closed kinematic structures, emphasizing their rigidity and precision.
*   **Siegwart, R., & Nourbakhsh, I. R. (2004). *Introduction to Autonomous Mobile Robots*. Second Edition. MIT Press.** While focused on mobile robots, this book might touch upon different kinematic configurations of manipulators that could be mounted on mobile platforms, including those with closed kinematic chains for specific tasks.

---

### **4. Comparison and Applications**

| Feature             | Open Kinematic Chain (Serial Manipulators)                  | Closed Kinematic Chain (Parallel Manipulators)                |
| :------------------ | :---------------------------------------------------------- | :------------------------------------------------------------ |
| **Structure**       | Linear sequence of links and joints.                        | Links and joints form closed loops.                           |
| **End-Effector**    | Free to move, connected only to the base via the chain.     | Mechanically connected to the base through multiple paths.    |
| **Degrees of Freedom** | Directly related to the number of actuated joints.        | Often has fewer controlled DOF relative to the number of joints; redundancy is common. |
| **Kinematic Analysis** | Relatively straightforward (forward and inverse kinematics). | Complex due to redundant constraints and loop closure equations. |
| **Stiffness/Accuracy** | Can be less stiff, prone to gravity effects.                | Generally higher stiffness and accuracy.                      |
| **Workspace**       | Larger, often more dexterous workspace.                     | Smaller, more compact workspace.                              |
| **Payload Capacity**| Lower payload-to-weight ratio.                              | Higher payload-to-weight ratio.                               |
| **Speed**           | Moderate speed.                                             | Can achieve very high speeds (especially Delta robots).      |
| **Applications**    | General-purpose manipulation, assembly, welding, painting. | High-speed pick-and-place, precision positioning, simulators. |
| **Examples**        | Anthropomorphic arms, SCARA robots.                         | Stewart Platforms, Delta robots.                              |

**Important Point to Remember:** The classification into open and closed kinematic chains is fundamental to understanding a robot's inherent capabilities, limitations, and the complexity of its control and kinematic analysis.

---

### **5. Practice Questions and Exercises**

**Question 1:**
Which type of kinematic chain is characterized by a single path from the base to the end-effector and is commonly found in anthropomorphic robots?
a) Closed Kinematic Chain
b) Open Kinematic Chain
c) Both a and b
d) Neither a nor b

**Answer:** b) Open Kinematic Chain

**Question 2:**
A Stewart Platform, used in flight simulators, is an example of which type of kinematic chain?
a) Open Kinematic Chain
b) Closed Kinematic Chain
c) Serial Kinematic Chain
d) Parallel Kinematic Chain (which is a subset of Closed Kinematic Chains)

**Answer:** b) Closed Kinematic Chain (and also d) Parallel Kinematic Chain, which is the specific term for this type of closed chain).

**Question 3:**
List two advantages of closed kinematic chains compared to open kinematic chains.

**Answer:**
1.  **Higher Stiffness and Accuracy:** Due to the redundant constraints and load sharing.
2.  **Higher Payload-to-Weight Ratio:** The structure is inherently stronger and more rigid.

**Question 4:**
Consider a robot arm with a base fixed to the ground, and a gripper at the end. The arm consists of a shoulder joint, an elbow joint, and a wrist joint, followed by the gripper. The gripper is not mechanically connected back to the base.
a) Is this robot arm an example of an open or closed kinematic chain?
b) Briefly explain your reasoning.

**Answer:**
a) This robot arm is an example of an **open kinematic chain**.
b) The reasoning is that there is a single, serial path from the fixed base (ground) through the series of joints (shoulder, elbow, wrist) to the end-effector (gripper). The end-effector is not mechanically connected back to the base, thus forming an open loop.

**Question 5 (Conceptual Application):**
Imagine you need to design a robot for a high-speed automated packaging line where items are picked from a conveyor and placed into boxes. Which type of kinematic chain would likely be more suitable for the end-effector manipulator, and why?

**Answer:**
A **closed kinematic chain**, specifically a **parallel manipulator** (like a Delta robot), would likely be more suitable.
**Reasoning:** Parallel manipulators are known for their high speed and acceleration capabilities due to their structure, which typically has lighter moving parts compared to serial manipulators of similar reach. The rigidity and precision offered by closed chains are also beneficial for repetitive pick-and-place tasks at high speeds.

---

### **8. Important Points to Remember**

*   **Open Chains are Serial:** Think of a chain where links are arranged end-to-end, forming a line.
*   **Closed Chains have Loops:** Think of a chain where the end is connected back to an earlier point or the base, creating a closed geometric path.
*   **Kinematics Dictates Capabilities:** The type of kinematic chain fundamentally impacts a robot's workspace, speed, accuracy, and the complexity of its control system.
*   **Parallel vs. Serial:** Open chains are typically serial manipulators, while closed chains are often realized as parallel manipulators.
*   **Real-World Examples:** Recognize common robots like industrial arms (open) and Stewart Platforms (closed).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **References for Further Study:**

*   **Schilling, R. J. (1996). *Fundamentals of Robotics – Analysis and Control*. Prentice Hall of India.**
*   **Craig, J. J. (2002). *Introduction to Robotics (Mechanics and Control)*. Pearson Education Asia.**
*   **Saha, S. K. ( ). *Introduction to Robotics*. McGraw Hill Education.**
*   **Mittal, R. K. (2003). *Robotics and Control*. Tata McGraw Hill.**
*   **Ghosal, A. ( ). *Robotics-Fundamental concepts and analysis*. Oxford University Press.**
*   **Deb, S. R. ( ). *Robotics Technology and Flexible Automation*. Second Edition.**
*   **Siegwart, R., & Nourbakhsh, I. R. (2004). *Introduction to Autonomous Mobile Robots*. Second Edition. MIT Press.**
*   **Lynch, K. M., & Park, F. C. ( ). *Modern Robotics Mechanics, Planning and Control*.** (This reference is excellent for a deeper dive into the mechanics and control aspects of both open and closed kinematic chains).
*   **Siciliano, B., Sciavicco, L., Villani, G., & Oriolo, G. ( ). *Robotics Modelling, Planning and Control*. Springer.** (This book provides comprehensive mathematical treatments for robotic systems, including those with closed kinematic chains).
*   **Siciliano, B., & Khatib, O. ( ). *Handbook of Robotics*. Springer.** (A broad overview of robotics, often including sections on different kinematic structures and their applications).