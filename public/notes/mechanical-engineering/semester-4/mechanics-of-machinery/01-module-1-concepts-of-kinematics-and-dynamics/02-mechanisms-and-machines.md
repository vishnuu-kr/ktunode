---
title: "Mechanisms and Machines"
subject: "MECHANICS OF MACHINERY"
module: "Module 1: Concepts of Kinematics and Dynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fcd"
status: "completed"
scrapedAt: "2026-05-20T17:54:58.844Z"
---
# MECHANICS OF MACHINERY

## Module 1: Concepts of Kinematics and Dynamics

### Topic: Mechanisms and Machines

---

### **1. Introduction to Mechanisms and Machines**

This topic introduces the fundamental concepts of mechanisms and machines, laying the groundwork for understanding their analysis and synthesis.

#### **1.1 Definitions**

*   **Machine:** A combination of interconnected parts with designed motion to perform a specific task. Machines transmit and modify force and motion.
    *   *Key characteristic:* Must have at least one *input* (force or motion) and one *output* (force or motion).
    *   *Example:* A bicycle (input: pedaling, output: wheel rotation), an electric motor (input: electrical energy, output: rotational mechanical energy).
    *   *(Ref: Rattan, S. S. (2009). Theory of Machines. p. 1)*

*   **Mechanism:** A part of a machine that modifies force or motion. It is a structure that enables relative motion between its parts.
    *   *Key characteristic:* Typically has a definite number of degrees of freedom.
    *   *Example:* A linkage system within a sewing machine, the crankshaft and connecting rod system in an engine.
    *   *(Ref: Ballaney, P. L. (2005). Theory of Machines and Mechanisms. p. 5)*

*   **Structure:** A combination of interconnected parts designed to support a load. Structures do not have intended relative motion between their parts.
    *   *Key characteristic:* Zero degrees of freedom.
    *   *Example:* A bridge, a building frame.
    *   *(Ref: Ghosh, A. (2008). Theory of Mechanisms and Machines. p. 4)*

#### **1.2 Key Concepts**

*   **Kinematics:** The study of motion without considering the forces causing it. It deals with displacement, velocity, and acceleration.
    *   *Application in Mechanisms:* Analyzing how parts move relative to each other.
    *   *(Ref: Wilson, C. E., & Sadler, P. (2005). Kinematics and Dynamics of Machinery. p. 3)*

*   **Dynamics:** The study of motion and the forces that cause it. It involves concepts like mass, force, momentum, and energy.
    *   *Application in Mechanisms:* Understanding the forces acting on mechanism parts and their effect on motion (e.g., inertia, friction).
    *   *(Ref: Shigley, J. E., & Uicker, J. J. (2010). Theory of Machines and Mechanisms. p. 12)*

*   **Rigid Body:** A body on which the distance between any two points remains constant. In reality, no body is perfectly rigid, but this is a useful assumption in many kinematic analyses.
    *   *(Ref: Rattan, S. S. (2009). Theory of Machines. p. 2)*

*   **Link or Element:** A part of a mechanism that is rigid and has at least two nodes. Links are usually connected by joints.
    *   *Example:* A connecting rod, a crank, a lever.
    *   *(Ref: Ballaney, P. L. (2005). Theory of Machines and Mechanisms. p. 6)*

*   **Joint or Kinematic Pair:** A connection between two links that permits relative motion. The type of joint determines the type of relative motion.
    *   *Types of Joints (based on constraint provided):*
        *   **Lower Pair:** Surfaces in contact (e.g., turning pair, sliding pair).
            *   *Turning Pair (Revolute Joint):* Permits relative rotation about a common axis (1 DOF). Example: Crankshaft in an engine.
            *   *Sliding Pair (Prismatic Joint):* Permits relative sliding along a common line (1 DOF). Example: Piston in a cylinder.
        *   **Higher Pair:** Line or point contact between surfaces (e.g., gear teeth contact, ball bearing).
            *   *Example:* Cam and follower.
    *   *(Ref: Ghosh, A. (2008). Theory of Mechanisms and Machines. p. 7)*
    *   *(Ref: Myskza, D. H. (2013). Machines and Mechanisms: Applied Kinematic Analysis. p. 25)*

#### **1.3 Classification of Mechanisms**

Mechanisms can be classified based on various criteria:

*   **Based on the type of joint:**
    *   Mechanisms with only lower pairs (e.g., four-bar linkage).
    *   Mechanisms with higher pairs (e.g., cam and follower).

*   **Based on the type of motion transmitted:**
    *   **Grubler's Classification:** Mechanisms are classified based on the number of links, the number of joints, and the number of degrees of freedom.
    *   **Function of the Mechanism:**
        *   *Linkage Mechanisms:* Use links connected by joints to transmit motion (e.g., four-bar linkage, slider-crank).
        *   *Cam Mechanisms:* Use a rotating or oscillating cam to guide a follower.
        *   *Gear Mechanisms:* Use meshing gear teeth to transmit rotational motion.
        *   *Rope and Pulley Mechanisms:* Used for lifting and changing direction of force.

#### **1.4 Degrees of Freedom (DOF) - KNOWLEDGE LEVEL: K3**

*   **Definition:** The number of independent parameters that must be specified to completely define the position and orientation of all parts of a mechanism.
*   **Importance:** Crucial for understanding the mobility of a mechanism. A mechanism typically has one or more DOFs.
*   **Grubler's Criterion for Planar Mechanisms:**
    *   For a planar mechanism with $n$ links (including the fixed link or frame) and $j$ binary joints (pairs with 1 DOF), the degrees of freedom ($F$) is given by:
        $$F = 3n - 2j$$
    *   *Note:* This formula assumes all joints are lower pairs (1 DOF).
    *   *(Ref: Rattan, S. S. (2009). Theory of Machines. p. 30)*
    *   *(Ref: Ballaney, P. L. (2005). Theory of Machines and Mechanisms. p. 12)*

*   **Kutzbach's Criterion (more general):**
    *   For a planar mechanism with $n$ links, $j$ joints, where $j_i$ is the number of joints with $i$ degrees of freedom:
        $$F = 3(n-1) - \sum_{i=1}^{k} i \cdot j_i$$
    *   For mechanisms with only lower pairs (where $i=1$ for all joints), this simplifies to $F = 3(n-1) - j_1$. Since $j_1 = j$, $F = 3(n-1) - j$. If we include the frame as a link ($n_{total}$), and number of moving links is $n = n_{total} - 1$, then $F = 3n - 2j$.

*   **Examples:**

    *   **Four-Bar Linkage:**
        *   $n = 4$ (fixed link, crank, coupler, rocker)
        *   $j = 4$ (four binary joints)
        *   $F = 3(4) - 2(4) = 12 - 8 = 4$. This seems wrong. Let's re-evaluate using $F=3(n-1)-2j$ where $n$ is the number of moving links.
        *   Let's use the more common formulation: $F = 3(N-1) - 2J$, where $N$ is the total number of links (including the frame) and $J$ is the number of 1-DOF joints.
        *   Four-Bar Linkage: $N=4$, $J=4$. $F = 3(4-1) - 2(4) = 3(3) - 8 = 9 - 8 = 1$.
        *   *Interpretation:* One input parameter (e.g., crank angle) is sufficient to determine the position of all other links.
        *   *(Ref: Rattan, S. S. (2009). Theory of Machines. p. 31)*

    *   **Slider-Crank Mechanism:**
        *   $N=4$ (fixed link, crank, connecting rod, slider)
        *   $J=4$ (3 revolute joints, 1 prismatic joint) - *Here, the prismatic joint is also a 1-DOF joint.*
        *   $F = 3(4-1) - 2(4) = 3(3) - 8 = 9 - 8 = 1$.
        *   *Interpretation:* The position of the crank (input) determines the position of the slider.
        *   *(Ref: Ballaney, P. L. (2005). Theory of Machines and Mechanisms. p. 13)*

    *   **Simple Gear Train (Two Gears):**
        *   $N=3$ (fixed frame, gear 1, gear 2)
        *   $J=2$ (two turning pairs connecting gears to frame, implicit meshing is not a joint in the formula) - *This formula needs refinement for gear trains.*
        *   *Correct approach for gears:* Consider each gear as a link. For meshing gears, the contact point provides a constraint.
        *   Let's use Kutzbach's: $F = 3(N-1) - \sum_{i=1}^{k} i \cdot j_i$.
        *   For a simple gear train: $N=3$ (frame, gear 1, gear 2). We have 2 turning pairs (revolute joints) and the meshing.
        *   If we consider turning pairs only: $F = 3(3-1) - 2(2) = 3(2) - 4 = 6-4 = 2$. This is still not right.
        *   **Crucial Point:** The formula $F=3(N-1)-2J$ applies to mechanisms with *only lower pairs*. For higher pairs or special constraints, it needs modification.
        *   *For a simple gear train:* Two gears meshing transmit one degree of freedom. If one gear is driven, the other's position is determined. $F=1$.
        *   *(Ref: Rattan, S. S. (2009). Theory of Machines. p. 34)*
        *   *(Ref: Norton, R. L. (2009). Kinematics and Dynamics of Machinery. p. 51)*

    *   **Redundant Constraints / Locked Mechanisms:**
        *   If $F < 1$, the mechanism is a structure or is locked.
        *   If $F = 0$, it's a structure.
        *   If $F < 0$, there are redundant constraints, and it's a structure.

*   **Important Point:** The number of DOFs determines the number of independent inputs required to control the mechanism's motion.

#### **1.5 Inversions of Mechanisms - KNOWLEDGE LEVEL: K3**

*   **Definition:** An inversion of a mechanism is obtained by fixing a different link than the original frame. The relative motion between the other links remains the same, but the output motion changes with respect to the input.
*   **Purpose:** To achieve different types of output motions from the same basic kinematic chain.
*   **Process:** Select a link that was previously the frame and fix it. Then, drive one of the other links and observe the motion of the remaining link.
*   **Examples:**

    *   **Four-Bar Linkage Inversions:**
        *   **First Inversion (Conventional):** Link 1 (ground/frame) is fixed. Crank (Link 2) drives the coupler (Link 3), which drives the rocker (Link 4).
        *   **Second Inversion:** Link 2 (crank) is fixed. This is not practical as it locks the mechanism.
        *   **Third Inversion:** Link 3 (coupler) is fixed. This is also not practical as it locks the mechanism.
        *   **Fourth Inversion:** Link 4 (rocker) is fixed. The crank (Link 2) drives the frame (Link 1), which drives the coupler (Link 3). This is the **Double Crank Mechanism** (e.g., the Watt's indicator mechanism or some types of rotary engines). Both driving and driven links rotate continuously.
        *   *(Ref: Ballaney, P. L. (2005). Theory of Machines and Mechanisms. p. 17)*
        *   *(Ref: Rattan, S. S. (2009). Theory of Machines. p. 38)*

    *   **Slider-Crank Mechanism Inversions:**
        *   **First Inversion (Conventional):** Link 1 (fixed frame) is fixed. Crank (Link 2) rotates, driving the connecting rod (Link 3), which reciprocates the slider (Link 4). This is the basis of the reciprocating engine and compressor.
        *   **Second Inversion:** Link 2 (crank) is fixed. The connecting rod (Link 3) rotates, and the slider (Link 4) reciprocates along it. This is the **Turning by Reciprocating Engine** (e.g., Whitworth quick return mechanism, Gnome engine).
        *   **Third Inversion:** Link 3 (connecting rod) is fixed. The crank (Link 2) rotates, and the slider (Link 4) reciprocates and rotates about the crank pin. This is the **Crank-Slotted Lever Mechanism** (e.g., Oscillating cylinder engine).
        *   **Fourth Inversion:** Link 4 (slider) is fixed. The crank (Link 2) rotates, and the connecting rod (Link 3) reciprocates about the crank pin. This is the **Gnome Engine mechanism** or **Independent Cylinder Engine**. It converts rotary motion to reciprocating motion of the connecting rod, which is attached to a fixed frame, effectively meaning the cylinder moves. *Actually, in the Gnome engine, the cylinders rotate, and the crankshaft is fixed.* Let's clarify this.
            *   *Gnome Engine (correct view):* The connecting rod is pinned to a fixed central crankshaft. The crank is attached to a cylinder, which rotates around the crankshaft. The slider (e.g., piston in cylinder) reciprocates within the rotating cylinder. This is an inversion where the connecting rod acts as the fixed link.
            *   *(Ref: Ballaney, P. L. (2005). Theory of Machines and Mechanisms. p. 20)*
            *   *(Ref: Rattan, S. S. (2009). Theory of Machines. p. 41)*

*   **Important Point:** Understanding inversions allows for the selection of the most suitable configuration of a kinematic chain for a specific application.

#### **1.6 Kinematic Analysis vs. Synthesis - KNOWLEDGE LEVEL: K4 (Analysis), K4 (Synthesis)**

*   **Kinematic Analysis:** The process of determining the motion (position, velocity, acceleration) of all parts of a mechanism for a given input motion.
    *   *Goal:* To understand how a given mechanism behaves.
    *   *Methods:* Vector loop closure method, complex numbers, complex exponentials, graphical methods.
    *   *Application:* CO2 (Perform velocity and acceleration analysis).

*   **Kinematic Synthesis:** The process of designing a mechanism to perform a specific task or achieve a desired motion.
    *   *Goal:* To create a mechanism that meets certain functional requirements.
    *   *Types:*
        *   **Function Synthesis:** Designing a mechanism to produce a specific relationship between input and output motion.
        *   **Path Synthesis:** Designing a mechanism to guide a point through a specific path.
        *   **Motion Synthesis:** Designing a mechanism to guide a link through a sequence of positions with specified velocities and accelerations.
    *   *Application:* CO3 (Construct a mechanism for a specified output motion).
    *   *(Ref: Wilson, C. E., & Sadler, P. (2005). Kinematics and Dynamics of Machinery. p. 350)*
    *   *(Ref: Shigley, J. E., & Uicker, J. J. (2010). Theory of Machines and Mechanisms. p. 380)*

#### **1.7 Classification of Mechanisms Based on Input and Output**

*   **Transformation Mechanisms:** Convert one type of motion into another.
    *   *Examples:* Slider-crank (rotary to reciprocating), crank-rocker.
*   **Transmitting Mechanisms:** Transmit motion or power from one part of a machine to another.
    *   *Examples:* Gear trains, belt drives.
*   **Repeating Mechanisms:** Produce a repeated sequence of motions.
    *   *Examples:* Geneva mechanism (intermittent rotary motion).
*   **Intermittent Motion Mechanisms:** Produce motion only during certain intervals.
    *   *Examples:* Geneva mechanism, indexing mechanisms.

---

### **2. Practice Questions and Exercises**

**Question 1 (DOF Calculation):**
Determine the degrees of freedom for the following planar mechanisms using Grubler's criterion ($F = 3(N-1) - 2J$):
(a) A four-bar linkage.
(b) A slider-crank mechanism.
(c) A simple gear train of two meshing gears.

**Answer 1:**
(a) Four-bar linkage: $N=4, J=4 \Rightarrow F = 3(4-1) - 2(4) = 9 - 8 = 1$.
(b) Slider-crank mechanism: $N=4, J=4 \Rightarrow F = 3(4-1) - 2(4) = 9 - 8 = 1$.
(c) Simple gear train: While Grubler's criterion is for lower pairs, for a simple gear train with two meshing gears, we can consider it as having 3 links (frame, gear 1, gear 2) and 2 revolute joints (connecting gears to frame) plus the meshing constraint. The net DOF is 1. Using the more general Kutzbach's criterion carefully or understanding the mechanical constraints is necessary for higher pairs. For a simple gear train, $F=1$.

**Question 2 (Inversions):**
Describe the second inversion of the slider-crank mechanism and provide an example of its application.

**Answer 2:**
The second inversion of the slider-crank mechanism is obtained by fixing the crank (Link 2). In this configuration, the connecting rod (Link 3) rotates, and the slider (Link 4) reciprocates along the connecting rod. An example of its application is the **Whitworth quick return mechanism** or the Gnome engine, where a reciprocating motion is converted into a rotary motion, or vice-versa with a characteristic quick return stroke.

**Question 3 (Definitions):**
Differentiate between a machine and a mechanism.

**Answer 3:**
A **machine** is a combination of interconnected parts designed to perform a specific task by transmitting and modifying force and motion, requiring at least one input and one output. A **mechanism** is a part of a machine that modifies force or motion; it's a structure that enables relative motion between its parts and typically has a definite number of degrees of freedom. All machines contain mechanisms, but not all mechanisms are machines by themselves (they might need to be part of a larger system).

**Question 4 (Conceptual):**
If a planar mechanism has $F=0$, what can you conclude about its nature?

**Answer 4:**
If $F=0$, the mechanism has no degrees of freedom. This means its position is completely determined, and there is no relative motion between its links. It is classified as a **structure**.

---

### **3. Important Points to Remember**

*   Machines transmit and modify force and motion; mechanisms are the parts that do this.
*   Structures support loads and have zero relative motion.
*   Kinematics studies motion; dynamics studies motion and the forces causing it.
*   The degrees of freedom (DOF) determine how many independent inputs are needed to control a mechanism.
*   Grubler's criterion ($F = 3(N-1) - 2J$) is a key tool for calculating DOF in planar mechanisms with lower pairs.
*   Inversions change the fixed link of a mechanism, leading to different applications and output motions from the same kinematic chain.
*   Kinematic analysis focuses on understanding the motion of a given mechanism, while kinematic synthesis focuses on designing a mechanism for a specific task.

---

### **4. Alignment with Course Outcomes**

*   **CO1: Calculate degrees of freedom of mechanisms and Interpret their inversions.** (Knowledge Level: K3)
    *   This topic directly covers the calculation of DOF using Grubler's criterion and explains the concept and application of inversions with examples of four-bar and slider-crank mechanisms.

*   **CO2: Perform velocity and acceleration analysis of various planar mechanisms (Knowledge Level: K4)**
    *   While this topic introduces kinematics, the detailed velocity and acceleration analysis will be covered in subsequent topics within Module 1. However, understanding the fundamental concepts of links, joints, and DOF is essential prerequisite knowledge.

*   **CO3: Construct a mechanism for a specified output motion (Knowledge Level: K4)**
    *   The distinction between kinematic analysis and synthesis highlights the goal of synthesis, which is to design mechanisms for specific motions. This topic lays the conceptual foundation for that.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **5. Further Reading Suggestions**

*   **Ballaney, P. L. (2005). Theory of Machines and Mechanisms.** Chapters 1 & 2 for basic definitions, types of mechanisms, and DOF.
*   **Rattan, S. S. (2009). Theory of Machines.** Chapters 1 & 2 for similar foundational concepts and DOF calculations.
*   **Ghosh, A. (2008). Theory of Mechanisms and Machines.** Chapters 1 & 2 for a strong theoretical grounding in these concepts.
*   **Wilson, C. E., & Sadler, P. (2005). Kinematics and Dynamics of Machinery.** Chapter 1 for an excellent overview of the field and its basic definitions.

---
---