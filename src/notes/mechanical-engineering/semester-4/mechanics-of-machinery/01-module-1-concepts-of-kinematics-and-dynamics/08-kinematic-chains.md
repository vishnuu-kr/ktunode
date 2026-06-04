---
title: "Kinematic Chains"
subject: "MECHANICS OF MACHINERY"
module: "Module 1: Concepts of Kinematics and Dynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fd3"
status: "completed"
scrapedAt: "2026-05-20T17:55:03.250Z"
---
# MECHANICS OF MACHINERY

## Module 1: Concepts of Kinematics and Dynamics

### Topic: Kinematic Chains

---

### 1. Introduction to Kinematic Chains

**Definition:** A kinematic chain is a combination of rigid bodies called *links*, connected in such a way that relative motion between them is possible. These links are connected by *joints* which allow specific types of relative motion. A kinematic chain forms the fundamental building block of all mechanisms and machines.

**Key Concepts:**

*   **Link (or Element):** A rigid body that forms part of a kinematic chain. It is capable of relative motion with respect to another link.
    *   **Examples:** Connecting rods, cranks, levers, gears, sliders.
*   **Joint (or Connection):** A connection between two links that permits relative motion.
    *   **Types of Joints (based on degree of freedom):**
        *   **Lower Pair:** Two links are in contact over a surface. They have two degrees of freedom. Examples:
            *   **Revolute Pair (Hinge Joint):** Allows only relative rotation about a common axis. (e.g., pin joint, hinge)
            *   **Prismatic Pair (Slider Joint):** Allows only relative sliding along a common line. (e.g., piston in cylinder)
        *   **Higher Pair:** Two links are in contact along a line or at a point. They have more than one degree of freedom. Examples:
            *   **Cylindrical Pair:** Allows both rotation and sliding.
            *   **Spherical Pair:** Allows rotation about any axis passing through the center of the sphere.
            *   **Gear Tooth Contact:** An example of a higher pair.

**Important Point:** The relative motion between links is constrained by the joints.

**Referencing Textbooks:**
*   Ballaney P. L. (2005) extensively covers the classification of links and joints in Chapter 2.
*   Rattan S. S. (2009) in Chapter 1, discusses the basic elements of mechanisms.

---

### 2. Degrees of Freedom (DOF) of a Mechanism

**Definition:** The degrees of freedom of a mechanism is the minimum number of independent parameters (variables) required to completely define the position and orientation of all the links in the mechanism at any instant.

**Gruebler's Law (for planar mechanisms):**
For a planar mechanism with *n* links, *j* binary joints (lower pairs, DOF=1), and *j_h* higher pairs (DOF=2), the degrees of freedom (F) is given by:

$F = 3(n - 1) - 2j - h$

Where:
*   $n$: Number of links (including the fixed link).
*   $j$: Number of binary joints (each joint connecting two links).
*   $h$: Number of higher pairs.

**Important Note:** Gruebler's Law has limitations and does not account for special kinematic structures or redundant constraints. For more complex mechanisms, Kutzbach's criterion is often used.

**Kutzbach's Criterion (General Formula):**
For a mechanism in 3D space:
$F = \sum_{i=1}^{n} (3 - f_i) = 6(n-1) - \sum_{j=1}^{m} (6 - c_j)$
Where:
*   $f_i$: Degrees of freedom allowed by the i-th joint.
*   $c_j$: Degrees of freedom allowed by the j-th joint.

For planar mechanisms, the formula simplifies to:
$F = 3(n-1) - 2j$
Where:
*   $n$: Number of links.
*   $j$: Number of one-DOF joints (binary joints).

**Understanding DOF:**
*   If $F = 1$, the mechanism is **constrained**. One input motion can determine the motion of all other links. This is typical for most working mechanisms.
*   If $F > 1$, the mechanism is **unconstrained** or has redundant degrees of freedom. It requires multiple inputs to define its configuration.
*   If $F < 1$ (i.e., $F=0$), the mechanism is a **structure**. It is rigid and has no relative motion unless subjected to external forces.

**Example (Four-Bar Mechanism):**
*   $n = 4$ (fixed link, crank, coupler, rocker)
*   $j = 4$ (four revolute joints)
*   $h = 0$
*   $F = 3(4 - 1) - 2(4) - 0 = 3(3) - 8 = 9 - 8 = 1$.
    This is a constrained mechanism.

**Example (Slider-Crank Mechanism):**
*   $n = 4$ (fixed link, crank, connecting rod, slider)
*   $j = 4$ (3 revolute joints, 1 prismatic joint)
*   $h = 0$
*   $F = 3(4 - 1) - 2(4) - 0 = 3(3) - 8 = 9 - 8 = 1$.
    This is a constrained mechanism.

**Learning Outcome Addressed:** CO1 (Calculate degrees of freedom of mechanisms).

**Referencing Textbooks:**
*   Rattan S. S. (2009) Chapter 1 provides a detailed explanation of DOF and Gruebler's Law with many examples.
*   Ghosh A. (2008) in Chapter 3, presents the concept of mobility and Kutzbach's criterion.
*   Ballaney P. L. (2005) dedicates Chapter 3 to the mobility of mechanisms.

---

### 3. Kinematic Inversions

**Definition:** Kinematic inversion of a mechanism is obtained by fixing a different link from the original mechanism. While the relative motion between the links remains the same, the input and output motions change, resulting in a different configuration or function.

**Why Inversions?** Different inversions of the same kinematic chain might be more suitable for different applications. Analyzing inversions helps in understanding the full potential of a particular kinematic chain.

**Conditions for Inversions:**
A mechanism can have inversions if:
1.  It is a constrained mechanism ($F=1$).
2.  It has at least one link that can be fixed without destroying the functionality (i.e., the resulting mechanism is still constrained).

**Common Examples of Inversions:**

**a) Four-Bar Chain:**
*   **Original:** Crank (input), Rocker (output), Coupler (intermediate link), Fixed Link.
*   **Inversion 1 (First Inversion):** Fix the **Crank**. The coupler becomes the input, and the rocker is the output. (Not commonly useful).
*   **Inversion 2 (Second Inversion):** Fix the **Coupler**. The crank becomes the input, and the rocker is the output. This is the standard **Watt's Indicator Mechanism**.
*   **Inversion 3 (Third Inversion):** Fix the **Rocker**. The crank becomes the input, and the coupler (or a point on it) provides the output. This is the standard **Four-Bar Linkage** used in many applications.

**b) Slider-Crank Chain:**
*   **Original:** Crank (input), Connecting Rod, Slider (output), Fixed Link (often the frame). This forms the **Reciprocating Engine Mechanism** (e.g., piston engine).
*   **Inversion 1 (First Inversion):** Fix the **Connecting Rod**. The crank becomes the input. The slider moves along a path dictated by the crank's rotation, and the frame (which is now the connecting rod) rotates. This is the **Whitworth Quick Return Mechanism** if designed appropriately.
*   **Inversion 2 (Second Inversion):** Fix the **Slider**. The crank becomes the input. The connecting rod moves, and the frame (which is the slider) is fixed. This is the **Rotary Engine Mechanism** (e.g., Gnome engine, Barker's radial engine).
*   **Inversion 3 (Third Inversion):** Fix the **Crank** (if possible, e.g., the crank is the frame). The connecting rod becomes the input, and the slider moves relative to the fixed crank. This is the **Oscillatory Engine Mechanism** (e.g., beam engine).

**Learning Outcome Addressed:** CO1 (Interpret their inversions).

**Referencing Textbooks:**
*   Ballaney P. L. (2005) Chapter 4 thoroughly explains the inversions of common mechanisms.
*   Rattan S. S. (2009) Chapter 2 illustrates the inversions of the slider-crank and four-bar mechanisms.
*   Ghosh A. (2008) Chapter 4 is dedicated to the inversions of mechanisms.

---

### 4. Common Mechanisms derived from Kinematic Chains

Kinematic chains, when constrained and with inversions applied, form various useful mechanisms.

**a) Four-Bar Mechanism (General):**
*   **Structure:** 4 links, 4 binary joints.
*   **DOF:** 1.
*   **Applications:** Pantograph, Watt's indicator, RSSR mechanism (in 3D), Watt's linkage.

**b) Slider-Crank Mechanism:**
*   **Structure:** 4 links, 3 revolute joints, 1 prismatic joint.
*   **DOF:** 1.
*   **Applications:** Reciprocating engines (automobiles, steam engines), pumps, compressors, IC engines.

**c) Double Slider-Crank Mechanism:**
*   **Structure:** 4 links, 2 revolute joints, 2 prismatic joints.
*   **DOF:** 1.
*   **Applications:** Scotch Yoke mechanism (converting rotary to reciprocating motion), Oldham's coupling (connecting shafts with parallel axes but perpendicular misalignment).

**d) Three-Bar Mechanism (Gimbal):**
*   **Structure:** 3 links, 3 revolute joints.
*   **DOF:** 3(3-1) - 2(3) = 6 - 6 = 0. (This is a structure, not a mechanism for continuous motion unless joints are spherical).
*   **Note:** A 3-bar chain with revolute joints is rigid. However, if the joints were spherical, it would have 3 DOF. For mechanisms, we usually consider chains with sufficient links to allow motion.

**e) Five-Bar Mechanism:**
*   **Structure:** 5 links, 5 binary joints.
*   **DOF:** $F = 3(5-1) - 2(5) = 3(4) - 10 = 12 - 10 = 2$.
*   **Note:** A 5-bar chain has 2 DOF and requires two independent inputs to define its configuration. It's not a simple mechanism. However, some specific five-bar linkages with specific constraints can become mechanisms with 1 DOF.

**f) Six-Bar Mechanism (e.g., Watt's Six-Bar, Stephenson's Six-Bar):**
*   **Structure:** 6 links, 6 binary joints.
*   **DOF:** $F = 3(6-1) - 2(6) = 3(5) - 12 = 15 - 12 = 3$.
*   **Note:** A simple 6-bar chain has 3 DOF. However, by adding passive joints (joints that don't increase DOF but constrain motion, or by using higher pairs), mechanisms with 1 DOF can be formed.
    *   **Watt's Six-Bar:** 2 ternary links, 2 binary links, 1 quaternary link, 1 fixed link. It can provide more complex motion than a four-bar linkage.
    *   **Stephenson's Six-Bar:** 3 ternary links, 3 binary links, 1 fixed link.

**Learning Outcome Addressed:** CO3 (Construct a mechanism for a specified output motion) - understanding common mechanisms is a prerequisite for this.

**Referencing Textbooks:**
*   Shigley, Uicker (2010) Chapter 1, provides an overview of common mechanism types.
*   Norton (2009) Chapter 3 discusses various mechanisms like the slider-crank and Scotch yoke.

---

### 5. Synthesis of Mechanisms

**Definition:** Mechanism synthesis is the process of designing a mechanism to perform a specific task or to achieve a desired motion, force, or torque. This involves selecting the appropriate kinematic chain and determining the dimensions and arrangement of its links.

**Types of Synthesis:**
*   **Function Generation:** The mechanism produces a desired output motion (position, velocity, acceleration) as a function of the input motion.
*   **Path Generation:** A point on a link of the mechanism traces a specific path in space.
*   **Motion Generation:** A link of the mechanism moves through a series of positions.
*   **Force/Torque Generation:** The mechanism transmits or modifies forces and torques.

**Techniques in Synthesis:**
*   **Analytical Synthesis:** Using mathematical equations to determine link lengths and configurations.
*   **Graphical Synthesis:** Using geometric constructions and diagrams.
*   **Computer-Aided Synthesis:** Employing software tools and algorithms.

**Relation to Kinematic Chains:** The choice of the basic kinematic chain (e.g., four-bar, slider-crank) is the first step in synthesis. Then, the specific parameters of that chain (link lengths, joint positions) are determined to meet the synthesis requirements.

**Example for CO3:** If the task is to design a mechanism that converts rotary motion into reciprocating motion for an engine, the **slider-crank mechanism** is chosen. The synthesis would then involve determining the crank length and connecting rod length to achieve the desired piston stroke and speed.

**Learning Outcome Addressed:** CO3 (Construct a mechanism for a specified output motion).

**Referencing Textbooks:**
*   Ghosh A. (2008) Chapter 10 is dedicated to mechanism synthesis.
*   Shigley, Uicker (2010) Chapter 12 delves into mechanism synthesis techniques.
*   Myskza (2013) provides detailed examples of applying synthesis principles in applied kinematic analysis.

---

### 6. Velocity and Acceleration Analysis (Introduction)

While detailed analysis is covered in later modules, understanding that kinematic chains are the basis for these analyses is crucial. The relative motions between links in a kinematic chain are governed by kinematic constraints.

*   **Velocity Analysis:** Determining the linear and angular velocities of each link in a mechanism at any given instant. This typically involves vector loops or instantaneous center methods.
*   **Acceleration Analysis:** Determining the linear and angular accelerations of each link in a mechanism. This is a more complex analysis, often involving vector methods and considering Coriolis components.

**How Kinematic Chains are Used:**
The DOF calculated from Gruebler's law or Kutzbach's criterion indicates how many inputs are needed. For a 1-DOF mechanism, if the motion of one link (e.g., crank) is known, the velocities and accelerations of all other links can be determined.

**Learning Outcome Addressed:** CO2 (Perform velocity and acceleration analysis of various planar mechanisms) - Kinematic chains are the foundation upon which these analyses are performed.

**Referencing Textbooks:**
*   Wilson & Sadler (2005) Chapter 4 (Velocity Analysis) and Chapter 5 (Acceleration Analysis) are foundational for understanding how link motions are analyzed within mechanisms.
*   Norton (2009) Chapter 4 and 5 cover velocity and acceleration analysis respectively.

---

### 7. Practice Questions and Exercises

**Question 1:**
A mechanism consists of 5 links and 4 binary joints. Calculate its degrees of freedom using Gruebler's Law.
*   **Answer:**
    *   $n = 5$ (links)
    *   $j = 4$ (binary joints)
    *   $h = 0$ (assuming only lower pairs)
    *   $F = 3(n - 1) - 2j - h = 3(5 - 1) - 2(4) - 0 = 3(4) - 8 = 12 - 8 = 4$.
    *   **Note:** This mechanism has 4 degrees of freedom and would require 4 inputs to be controlled.

**Question 2:**
Identify the type of joints present in a typical slider-crank mechanism and state the number of links and joints.
*   **Answer:**
    *   Links ($n$) = 4 (fixed link, crank, connecting rod, slider).
    *   Joints ($j$) = 4.
    *   Joint Types: 3 revolute joints (pin joints connecting crank to frame, crank to connecting rod, connecting rod to slider) and 1 prismatic joint (slider in cylinder).

**Question 3:**
Describe the second inversion of the slider-crank mechanism. What is it commonly known as, and what is its application?
*   **Answer:**
    *   **Description:** In the second inversion of the slider-crank mechanism, the **slider** is fixed.
    *   **Common Name:** Rotary Engine Mechanism (e.g., Gnome engine, Barker's radial engine).
    *   **Application:** In this inversion, the crank rotates about a fixed center, and the connecting rod rotates with it. A point on the connecting rod describes a circle, and the frame is the slider (fixed). This mechanism is used in some rotary engines where the cylinder block rotates around a stationary crankshaft.

**Question 4:**
Consider a planar mechanism with 6 links and 5 revolute joints. What is its degree of freedom?
*   **Answer:**
    *   $n = 6$
    *   $j = 5$
    *   $h = 0$
    *   $F = 3(6 - 1) - 2(5) - 0 = 3(5) - 10 = 15 - 10 = 5$.
    *   This mechanism has 5 degrees of freedom.

**Question 5 (Conceptual):**
Why is it important to study kinematic inversions of mechanisms?
*   **Answer:** Studying kinematic inversions is important because:
    *   It reveals different functional possibilities of a given kinematic chain.
    *   By fixing different links, one can obtain mechanisms that perform different tasks or have different input/output relationships.
    *   It allows for the design of mechanisms suitable for specific applications that might not be apparent from the original configuration. For example, the inversion of the slider-crank mechanism leads to the rotary engine.

---

### 8. Important Points to Remember

*   **Kinematic Chain:** A fundamental unit composed of links connected by joints, allowing relative motion.
*   **Links:** Rigid bodies.
*   **Joints:** Connections between links. Lower pairs (surface contact, 1 DOF relative motion) and Higher pairs (line/point contact, >1 DOF relative motion).
*   **Degrees of Freedom (DOF):** Minimum independent parameters to define mechanism configuration.
*   **Gruebler's Law:** $F = 3(n - 1) - 2j - h$ for planar mechanisms. A mechanism with $F=1$ is constrained.
*   **Inversions:** Obtained by fixing different links of a kinematic chain, changing input/output, but not relative link motions.
*   **Mechanism Design:** Starts with selecting an appropriate kinematic chain and then synthesizing link parameters for desired output.

---

### 9. Alignment with Course Outcomes (K-Levels)

*   **CO1: Calculate degrees of freedom of mechanisms and Interpret their inversions.**
    *   **K-Level:** K3 (Application/Analysis). This topic directly covers calculating DOF using formulas and understanding how fixing different links changes the mechanism's function (inversions).
*   **CO2: Perform velocity and acceleration analysis of various planar mechanisms.**
    *   **K-Level:** K4 (Analysis). While this module introduces the concept, the detailed analysis is in subsequent topics. Understanding kinematic chains is foundational for setting up the vector loops and applying the analysis techniques.
*   **CO3: Construct a mechanism for a specified output motion.**
    *   **K-Level:** K4 (Analysis/Synthesis). This module covers common mechanisms derived from kinematic chains, which are the building blocks for constructing mechanisms to meet specific needs. The choice of chain and understanding its properties are key to synthesis.
*   **CO4: Solve the problem on cams and gear drives, including selection depending on requirement.**
    *   **K-Level:** K3 (Application/Analysis). This module provides the foundational understanding of relative motion and constraints in mechanical systems, which is also relevant for understanding how cams and gears transmit motion.
*   **CO5: Create prototype of various mechanisms.**
    *   **K-Level:** K6 (Creation/Synthesis). This module provides the conceptual knowledge of how mechanisms are formed and function, which is a prerequisite for designing and prototyping.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
