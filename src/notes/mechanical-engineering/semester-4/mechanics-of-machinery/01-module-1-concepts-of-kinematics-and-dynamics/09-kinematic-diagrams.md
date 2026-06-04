---
title: "Kinematic Diagrams"
subject: "MECHANICS OF MACHINERY"
module: "Module 1: Concepts of Kinematics and Dynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fd4"
status: "completed"
scrapedAt: "2026-05-20T17:55:03.964Z"
---
# MECHANICS OF MACHINERY: Module 1: Concepts of Kinematics and Dynamics

## Topic: Kinematic Diagrams

---

### 1. Introduction to Kinematics and Mechanisms

**Definition:** Kinematics is the branch of mechanics concerned with the motion of bodies, without reference to the forces that cause the motion. In the context of machinery, it deals with the study of relative motion between machine elements.

**Definition:** A **mechanism** is a mechanical device that transmits or modifies force, motion, or torque. It consists of a series of rigid bodies called **links** or **members**, connected by **kinematic pairs**.

**Importance in Mechanics of Machinery:** Understanding the motion of mechanisms is fundamental to designing and analyzing machines. Kinematic analysis helps determine velocities, accelerations, and the overall geometric configurations of moving parts.

---

### 2. Key Concepts and Definitions

#### 2.1 Links (or Members)

*   **Definition:** A link is a rigid body forming part of a mechanism. It is constrained to move in a particular way relative to other links.
*   **Types of Links:**
    *   **Binary Link:** A link with two connections to other links (e.g., a connecting rod in an engine).
    *   **Ternary Link:** A link with three connections (e.g., a rocker arm with pivots at two points and a connection at a third).
    *   **Quaternary Link:** A link with four connections.
*   **Rigid Body Assumption:** In kinematic analysis, links are typically assumed to be rigid, meaning their deformation due to forces is neglected.

#### 2.2 Kinematic Pairs (or Joints)

*   **Definition:** A kinematic pair is a joint that connects two links and allows relative motion between them.
*   **Classification of Kinematic Pairs:**
    *   **Based on Surface of Contact:**
        *   **Lower Pair:** Surfaces of elements are in surface contact.
            *   *Examples:* Revolute (pin) joint, Prismatic (sliding) joint.
        *   **Higher Pair:** Elements are in line or point contact.
            *   *Examples:* Spur gear teeth, cam and follower.
    *   **Based on Nature of Contact:**
        *   **Rolling Contact:** One link rolls on another (e.g., ball bearings).
        *   **Sliding Contact:** One link slides relative to another (e.g., piston in a cylinder).
        *   **Twisting Contact:** Combination of rolling and sliding (e.g., screw and nut).
    *   **Based on Degree of Freedom of Constraint:**
        *   **Unconstrained Pair:** Allows relative motion in more than one direction (e.g., a ball joint).
        *   **Fully Constrained Pair:** Allows only one type of relative motion (e.g., a revolute joint allowing only rotation).
        *   **Gudermannian Pair:** Allows motion in multiple degrees of freedom but are also constrained in some ways. (Less common in basic kinematic analysis, more advanced).
*   **Degrees of Freedom (DOF) of a Kinematic Pair:** The number of independent parameters required to completely specify the relative position of the links forming the pair.
    *   **Revolute Pair:** 1 DOF (rotation).
    *   **Prismatic Pair:** 1 DOF (translation).

#### 2.3 Degrees of Freedom (DOF) of a Mechanism

*   **Definition:** The number of independent inputs required to specify the position of all links in a mechanism. It indicates the mobility of the mechanism.
*   **Gruebler's Equation (for planar mechanisms):**
    *   $DOF = 3(n - 1) - 2j_1 - 1j_2$
    *   Where:
        *   $n$: Number of links (including the fixed link/frame).
        *   $j_1$: Number of binary joints (1 DOF joints, like revolute and prismatic).
        *   $j_2$: Number of ternary or higher joints (2 DOF joints).
*   **Mobility:** Often used interchangeably with DOF.
*   **Types of Mechanisms based on DOF:**
    *   **Constrained Mechanism (DOF = 1):** Can be operated by a single input. Most common for practical machines.
    *   **Unconstrained Mechanism (DOF > 1):** Requires multiple inputs to control motion.
    *   **Statically Determined Structure (DOF = 0):** A structure, not a mechanism. Rigid and does not move.
    *   **Redundantly Constrained Structure (DOF < 0):** Over-constrained structure, may have internal stresses.

#### 2.4 Kinematic Diagram (or Structure Diagram)

*   **Definition:** A schematic representation of a mechanism that shows the links, joints, and their connectivity, using standardized symbols. It is a simplified drawing that captures the essential kinematic features of a machine.
*   **Purpose:**
    *   To visualize the structure of a mechanism.
    *   To determine the degrees of freedom.
    *   To identify inversions.
    *   To aid in kinematic and dynamic analysis.
*   **Key Components of a Kinematic Diagram:**
    *   **Links:** Represented by lines or symbolic shapes.
    *   **Joints:** Represented by standard symbols (e.g., circles for revolute joints, squares for prismatic joints).
    *   **Fixed Link (Frame):** Often depicted as a solid base or with hatching.

---

### 3. Constructing Kinematic Diagrams

The process of creating a kinematic diagram involves identifying the essential components of a machine and representing them abstractly.

**Steps:**

1.  **Identify the Purpose of the Machine:** Understand what motion the machine is intended to produce or transmit.
2.  **Identify the Moving Parts (Links):** Determine which parts move relative to a fixed frame.
3.  **Identify the Fixed Part (Frame):** The stationary component that provides support.
4.  **Identify the Connections (Kinematic Pairs):** Determine how the links are connected and the type of relative motion allowed at each connection.
5.  **Assign Symbols:** Use standard symbols for different types of links and joints.
    *   **Revolute Joint (Pin Joint):** Typically represented by a circle.
    *   **Prismatic Joint (Sliding Joint):** Typically represented by a square or a slot.
    *   **Links:** Represented by lines. The length and orientation of lines in the diagram represent the relative lengths and positions of the links in the actual mechanism, but the diagram is often idealized.
6.  **Draw the Diagram:** Sketch the links and joints to show the connectivity and the overall structure of the mechanism.

**Example:** Four-Bar Mechanism (General Purpose)

A common example is the four-bar mechanism, consisting of:
*   One fixed link (ground).
*   Three moving links:
    *   A crank (input link).
    *   A connecting rod (coupler).
    *   A rocker (output link).

*   **Kinematic Diagram Representation:**
    *   Four links labeled L1 (fixed), L2, L3, L4.
    *   Four revolute joints connecting the links.
    *   J1: Connects L1 and L2 (at the pivot of the crank).
    *   J2: Connects L2 and L3 (at the crank pin).
    *   J3: Connects L3 and L4 (at the rocker pin).
    *   J4: Connects L4 and L1 (at the pivot of the rocker).

*(Visual representation of a four-bar mechanism kinematic diagram would be a simple sketch with four links and four revolute joints forming a closed loop.)*

---

### 4. Calculating Degrees of Freedom (DOF) and its Significance

**Revisiting Gruebler's Equation:**

*   $DOF = 3(n - 1) - 2j_1 - 1j_2$ (for planar mechanisms)

**Significance of DOF:**

*   **DOF = 1:** The mechanism has one degree of freedom. This means that by controlling the motion of one input link, the motion of all other links is determined. These are typically the mechanisms used in machines for a specific task.
*   **DOF = 0:** The mechanism is a **structure**. It is statically determinate and does not move. It can be assembled in only one way.
*   **DOF < 0:** The mechanism is **statically indeterminate** or **redundantly constrained**. It is over-constrained. Such mechanisms can introduce internal stresses even without external loads, and are generally avoided in design unless specific advantages are sought.
*   **DOF > 1:** The mechanism has multiple degrees of freedom. It requires multiple independent inputs to control its motion. These are sometimes called **non-independent** or **underconstrained** mechanisms.

**Example:** Calculating DOF for a Four-Bar Mechanism

*   Number of links ($n$) = 4 (ground, crank, coupler, rocker)
*   Number of binary joints ($j_1$) = 4 (all are revolute joints)
*   Number of ternary/higher joints ($j_2$) = 0

$DOF = 3(4 - 1) - 2(4) - 1(0)$
$DOF = 3(3) - 8$
$DOF = 9 - 8$
$DOF = 1$

This confirms that a four-bar mechanism is a constrained mechanism.

**Example:** Calculating DOF for a Six-Bar Mechanism (e.g., Watt's Six-Bar)

*   Number of links ($n$) = 6
*   Number of binary joints ($j_1$) = 7
*   Number of ternary/higher joints ($j_2$) = 0

$DOF = 3(6 - 1) - 2(7) - 1(0)$
$DOF = 3(5) - 14$
$DOF = 15 - 14$
$DOF = 1$

*(Refer to Ballaney P.L., Chapter 2: "Mechanisms and their Classification" for detailed explanation of DOF and Gruebler's equation.)*

---

### 5. Kinematic Inversions

**Definition:** Kinematic inversion is a process where different links of a mechanism are considered fixed relative to the ground. By fixing different links, different output motions can be achieved from the same basic kinematic structure.

**Conditions for Inversion:** For a mechanism to have useful inversions, it must have at least one ternary or higher-order joint, or it must be a double-slider crank mechanism.

**Types of Inversions:**

*   **First Inversion:** Achieved by fixing the crank.
*   **Second Inversion:** Achieved by fixing the connecting rod (coupler).
*   **Third Inversion:** Achieved by fixing the follower (rocker).
*   **Fourth Inversion:** Achieved by fixing the ground link (this is the original mechanism).

**Why Inversions are Important (Relates to CO1):**

*   **Versatility:** Different inversions of a mechanism can perform different functions or achieve different output motions.
*   **Practical Applications:** Many common machines are based on inversions of fundamental mechanisms.

**Example: Inversions of the Four-Bar Mechanism**

*   **Original Mechanism (Ground Link Fixed):** Input crank drives the output rocker.
*   **First Inversion (Crank Fixed):** The grounded link (which was originally the crank's pivot) becomes the input. The connecting rod's movement causes the rocker to pivot around its fixed point. This is not a common inversion for a standard four-bar.
*   **Second Inversion (Connecting Rod Fixed):** This is not a valid inversion for a simple four-bar mechanism because the connecting rod is a binary link. If you were to "fix" the coupler, the other links would not be able to move in a constrained way.
*   **Third Inversion (Rocker Fixed):** Fixing the rocker means its pivot is now the fixed link. The crank can still be driven. The connecting rod now moves, and this motion is transmitted to the original ground link (which now acts as the moving output link). This is also not a typical inversion of the standard four-bar for useful output motion.

**The Slider-Crank Mechanism and its Inversions (A more illustrative example):**

A slider-crank mechanism is a common mechanism with useful inversions. It has one binary link (crank), one ternary link (connecting rod), one binary link (slider), and the fixed link (ground).

*   **Structure:**
    *   Link 1: Ground (fixed)
    *   Link 2: Crank (revolute joint with Link 1 and Link 3)
    *   Link 3: Connecting Rod (revolute joints with Link 2 and Link 4)
    *   Link 4: Slider (prismatic joint with Link 3 and Link 1)

*   **DOF Calculation:**
    *   $n = 4$
    *   $j_1 = 3$ (revolute joints)
    *   $j_2 = 1$ (prismatic joint)
    *   $DOF = 3(4-1) - 2(3) - 1(1) = 3(3) - 6 - 1 = 9 - 7 = 2$

    *Wait, this is incorrect for a slider-crank. Let's re-examine the DOF calculation with careful consideration of how the joints constrain motion.*

    **Correct DOF for Slider-Crank:**
    *   In a planar mechanism, a revolute joint allows 1 DOF relative motion (rotation).
    *   A prismatic joint allows 1 DOF relative motion (translation).
    *   The connection between the slider (Link 4) and the ground (Link 1) is a prismatic pair.
    *   The connection between the crank (Link 2) and ground (Link 1) is a revolute pair.
    *   The connection between the crank (Link 2) and connecting rod (Link 3) is a revolute pair.
    *   The connection between the connecting rod (Link 3) and slider (Link 4) is a revolute pair.

    Let's apply the formula carefully.
    *   $n = 4$ (ground, crank, connecting rod, slider)
    *   Joints:
        *   Revolute (1 DOF): Crank-Ground, Crank-Connecting Rod, Connecting Rod-Slider. So, $j_1 = 3$.
        *   Prismatic (1 DOF): Slider-Ground. So, $j_1 = 1$.
        *   *Wait, Gruebler's equation counts the joints, not the DOF of the joints. A revolute joint provides 1 DOF of relative motion between the two links.*
    *   Let's count the number of joints: 4 revolute joints connecting the links. No, this is incorrect.
    *   Let's count the pairs:
        *   Pair 1: Crank (L2) and Ground (L1) - Revolute (1 DOF).
        *   Pair 2: Crank (L2) and Connecting Rod (L3) - Revolute (1 DOF).
        *   Pair 3: Connecting Rod (L3) and Slider (L4) - Revolute (1 DOF).
        *   Pair 4: Slider (L4) and Ground (L1) - Prismatic (1 DOF).
    *   So, we have 3 revolute joints and 1 prismatic joint. All are type $j_1$ joints (1 DOF).
    *   $n = 4$
    *   $j_1 = 4$ (3 revolute + 1 prismatic)
    *   $j_2 = 0$

    $DOF = 3(n-1) - 2j_1 - 1j_2$
    $DOF = 3(4-1) - 2(4) - 1(0)$
    $DOF = 3(3) - 8$
    $DOF = 9 - 8 = 1$. This is correct.

*   **Inversions of Slider-Crank:**

    1.  **First Inversion (Crank Fixed):** The crank is fixed. The connecting rod's pivot on the crank becomes the fixed pivot. The slider is driven by an input force, causing the connecting rod to oscillate around the fixed crank pivot. This is not a common or practical inversion.
    2.  **Second Inversion (Connecting Rod Fixed):** The connecting rod is fixed. The crank is now attached to the fixed connecting rod. The slider is connected to the crank's free end. This results in a **Rotary Engine** or **Whiteside engine** where the cylinder (originally the slider) rotates around the crank's axis. (This is a key practical inversion).
    3.  **Third Inversion (Slider Fixed):** The slider is fixed. The crank is connected to the slider's sliding groove. The connecting rod's other end is attached to the crank. The crank can be driven, causing the connecting rod to rotate around the crank's pivot, and the fixed slider's groove constrains the motion. This results in an **Oscillating Cylinder Engine** where the cylinder pivots. (Another key practical inversion).
    4.  **Fourth Inversion (Ground Fixed):** This is the standard **Reciprocating Engine** where the crank is rotated by an input, and the slider (piston) reciprocates within a fixed cylinder.

*(Refer to Rattan S.S., Chapter 3: "Kinematics of Machines" for detailed explanation of inversions and examples of slider-crank inversions.)*

---

### 6. Practice Questions and Exercises

**Question 1:**
What is a kinematic pair? Name and describe any two types of kinematic pairs.

**Answer:**
A kinematic pair is a joint that connects two links and allows relative motion between them.
1.  **Revolute Pair:** Allows relative rotation between two links about a common axis. The contact is surface contact. Example: A pin joint connecting two links.
2.  **Prismatic Pair:** Allows relative sliding motion between two links along a straight line. The contact is surface contact. Example: A piston moving in a cylinder.

**Question 2:**
Calculate the degrees of freedom for a Watt's six-bar mechanism using Gruebler's equation. Assume all joints are lower pairs (1 DOF joints).

**Answer:**
A Watt's six-bar mechanism typically has 6 links and 7 lower pairs (all revolute).
*   $n = 6$ (number of links)
*   $j_1 = 7$ (number of lower pairs)
*   $j_2 = 0$ (number of higher pairs)

$DOF = 3(n - 1) - 2j_1 - 1j_2$
$DOF = 3(6 - 1) - 2(7) - 1(0)$
$DOF = 3(5) - 14$
$DOF = 15 - 14 = 1$
The Watt's six-bar mechanism has 1 degree of freedom.

**Question 3:**
What is meant by the term "inversion of a mechanism"? Explain the first and third inversions of a slider-crank mechanism.

**Answer:**
Inversion of a mechanism refers to the process of obtaining different mechanisms by changing the link that is held fixed.
*   **First Inversion of Slider-Crank:** When the crank is fixed. The connecting rod is then connected to the fixed crank, and the slider is connected to the other end of the connecting rod. This leads to a mechanism where the connecting rod oscillates about the fixed crank pivot while the slider moves relative to the connecting rod. This is generally not a practically useful inversion in its direct form.
*   **Third Inversion of Slider-Crank:** When the slider is fixed. The connecting rod's sliding connection is now fixed to the ground. The crank is connected to the connecting rod at its other end. Driving the crank causes the connecting rod to pivot around the fixed slider's groove while the crank rotates. This results in an **oscillating cylinder engine** configuration.

**Question 4:**
Identify the type of mechanism in terms of its degrees of freedom if it has 5 links and 5 binary joints and no higher pairs.

**Answer:**
Given:
*   $n = 5$
*   $j_1 = 5$
*   $j_2 = 0$

$DOF = 3(n - 1) - 2j_1 - 1j_2$
$DOF = 3(5 - 1) - 2(5) - 1(0)$
$DOF = 3(4) - 10$
$DOF = 12 - 10 = 2$

The mechanism has **2 degrees of freedom**.

---

### 7. Important Points to Remember

*   **Kinematic diagrams** are abstract representations focusing on links and joints, not on physical dimensions or forces.
*   **Links** are rigid bodies, and **kinematic pairs** define the relative motion between them.
*   **Degrees of freedom (DOF)** determine the mobility of a mechanism and its suitability for a specific task.
*   **Gruebler's equation** is a powerful tool for calculating DOF for planar mechanisms with simple joints.
*   **Inversions** are crucial for understanding the versatility and practical applications of basic kinematic structures.
*   The classification of joints (lower vs. higher) and the DOF of each joint are fundamental.
*   A mechanism with DOF=1 is generally considered a **constrained mechanism**.

---

### 8. Alignment with Course Outcomes

*   **CO1: Calculate degrees of freedom of mechanisms and Interpret their inversions.**
    *   This section directly addresses DOF calculation using Gruebler's equation and explains the concept and practical examples of inversions.
*   **CO2: Perform velocity and acceleration analysis of various planar mechanisms**
    *   While this topic focuses on the conceptual stage (diagrams and DOF), the kinematic diagram is the prerequisite for performing velocity and acceleration analysis. A correct kinematic diagram is essential for setting up the vector loop equations or using graphical methods for analysis.
*   **CO3: Construct a mechanism for a specified output motion**
    *   Understanding kinematic diagrams and DOF helps in selecting or designing a basic kinematic structure that can achieve a desired motion. For example, knowing a four-bar has 1 DOF allows it to be a candidate for simple input-output link motion.
*   **CO4: Solve the problem on cams and gear drives, including selection depending on requirement.**
    *   Cams and gear drives are also mechanisms. While this specific topic focuses on general kinematic diagrams, the principles of links, joints, and DOF apply. Cams often involve higher pairs, and gear drives are fundamentally based on controlled rolling contact (a form of higher pair). Understanding basic kinematic structures is a foundation for these more complex topics.
*   **CO5: Create prototype of various mechanisms.**
    *   The kinematic diagram serves as the blueprint for constructing a prototype. It defines the essential connections and relative motions that must be replicated in a physical model.

---
This concludes the study notes for Kinematic Diagrams. Remember to consult the provided textbooks and reference books for deeper understanding and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
