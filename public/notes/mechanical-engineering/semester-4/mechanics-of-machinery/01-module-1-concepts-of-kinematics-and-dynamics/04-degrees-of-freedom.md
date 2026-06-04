---
title: "Degrees of Freedom"
subject: "MECHANICS OF MACHINERY"
module: "Module 1: Concepts of Kinematics and Dynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fcf"
status: "completed"
scrapedAt: "2026-05-20T17:55:00.303Z"
---
# MECHANICS OF MACHINERY

## Module 1: Concepts of Kinematics and Dynamics

### Topic: Degrees of Freedom (DOF)

---

**Learning Outcomes:**

*   Understand the concept of degrees of freedom of a mechanism.
*   Define and differentiate between constrained, unconstrained, and redundant mechanisms.
*   Apply Kutzbach's criterion (Grübler's criterion for planar mechanisms) to determine the degrees of freedom.
*   Relate the degrees of freedom to the number of independent inputs required to specify the mechanism's configuration.
*   Recognize how the number of degrees of freedom influences the mobility of a mechanism.

---

**Course Outcomes Alignment:**

*   **CO1:** Calculate degrees of freedom of mechanisms and interpret their inversions. (Knowledge Level: K3) - *This topic directly addresses the calculation and interpretation of DOF.*

---

### 1. Introduction to Degrees of Freedom (DOF)

#### 1.1 What is Degrees of Freedom?

The **Degrees of Freedom (DOF)** of a mechanism is defined as the **minimum number of independent parameters (or coordinates) required to completely specify the position and configuration of all the links in the mechanism**. In simpler terms, it's the number of independent motions a mechanism can have.

**Key Concepts:**

*   **Independent Motion:** A motion that can be made without affecting or being affected by any other motion in the system, based on the kinematic constraints.
*   **Kinematic Constraints:** The geometrical restrictions imposed by the joints connecting the links, which limit their relative motion.

#### 1.2 Why is DOF Important?

*   **Mobility:** The DOF directly indicates the mobility of a mechanism. A mechanism with DOF = 1 is generally considered mobile and can be driven by a single input.
*   **Design:** It helps in determining the number of actuators (motors, drivers) needed for a mechanism.
*   **Analysis:** Crucial for analyzing the kinematic behavior (velocity, acceleration) and dynamic behavior (forces, torques) of a mechanism.
*   **Classification:** Helps classify mechanisms as constrained, unconstrained, or redundant.

---

### 2. Types of Mechanisms Based on DOF

#### 2.1 Unconstrained Mechanisms

*   **Definition:** Mechanisms with a DOF greater than the number of inputs required to define their position. They can move in multiple independent ways, even with a single input.
*   **Characteristics:** Highly flexible, but often not useful for controlled motion transmission.
*   **Example:** A simple rigid body in space has 6 DOF (3 translational, 3 rotational).

#### 2.2 Constrained Mechanisms

*   **Definition:** Mechanisms that have a DOF equal to the number of inputs required to completely define their position. These are the most common and useful mechanisms.
*   **Characteristics:** Have a specific, predictable motion when an input is provided.
*   **Example:** A four-bar linkage typically has 1 DOF.

#### 2.3 Redundant Mechanisms

*   **Definition:** Mechanisms with a DOF less than the number of inputs that *could* be applied. This implies there are more constraints than necessary, leading to potential internal stresses or locking.
*   **Characteristics:** Can be over-determined, leading to stress concentrations or potential jamming.
*   **Example:** A mechanism with multiple loops where the loops are not kinematically independent.

---

### 3. Determining Degrees of Freedom

#### 3.1 Grübler's Criterion (for Planar Mechanisms)

For a planar mechanism, the DOF (M) can be calculated using Grübler's criterion:

**M = 3(n - 1) - 2j₁ - j₂**

Where:

*   **M:** Degrees of Freedom of the mechanism.
*   **n:** Total number of links in the mechanism (including the fixed link/frame).
*   **j₁:** Number of joints with 1 degree of relative freedom (e.g., pin joints, sliding joints).
*   **j₂:** Number of joints with 2 degrees of relative freedom (e.g., a disk cam with a roller follower moving tangentially, or a special type of universal joint).

**Important Note:** Grübler's criterion is generally applicable to mechanisms with **single degree of freedom (M=1)** that are **non-redundant**. It may not accurately predict DOF for mechanisms with multiple degrees of freedom or redundant constraints.

**Reference:**
*   **Ballaney P. L. (2005)**, *Theory of Machines and Mechanisms*: Provides a foundational explanation of Grübler's criterion and its application to planar mechanisms.
*   **Rattan S. S. (2009)**, *Theory of Machines*: Offers detailed examples and derivations of Grübler's criterion.

#### 3.2 Kutzbach's Criterion (for General Mechanisms in 2D or 3D)

Kutzbach's criterion is a more general formula applicable to both planar and spatial mechanisms.

**M = Σ(fᵢ) - Σ(cⱼ)**

Where:

*   **M:** Degrees of Freedom.
*   **fᵢ:** Degrees of freedom allowed by the *i*-th joint (e.g., a pin joint allows 1 DOF, a spherical joint allows 3 DOF).
*   **cⱼ:** Number of constraints imposed by the *j*-th constraint (which is equivalent to the number of DOF removed by that constraint).

A more common form of Kutzbach's criterion for mechanisms with *n* links and *j* joints, where the *i*-th joint has *fᵢ* degrees of freedom is:

**M = Σfᵢ - Σ(fᵢ - 1) = 3(n - 1) - Σ(fᵢ - 1)**

This form is derived by considering that each joint with *fᵢ* freedom initially allows *fᵢ* motions, but imposes *(fᵢ - 1)* constraints on the relative motion between the links it connects.

For planar mechanisms, where most joints are pin joints (fᵢ = 1) or slider joints (fᵢ = 1), the term Σ(fᵢ - 1) simplifies to *j₁* (number of 1-DOF joints). If there are *j₂* joints with 2 DOF, the formula becomes:

**M = 3(n - 1) - 2j₂ - 1j₁** (This is Grübler's criterion).

**Reference:**
*   **Ghosh A. (2008)**, *Theory of Mechanisms and Machines*: Discusses Kutzbach's criterion as a generalized approach.
*   **Wilson C. E., Sadler P. (2005)**, *Kinematics and Dynamics of Machinery*: Provides in-depth coverage of Kutzbach's criterion for both planar and spatial mechanisms.

#### 3.3 Kutzbach's Criterion - Alternative Formulation (for Planar Mechanisms)

A common formulation for planar mechanisms that is more intuitive for counting:

**M = 3(n - 1) - 2j**

Where:

*   **n:** Total number of links (including the fixed link).
*   **j:** Total number of one-DOF joints (pin/revolute and slider/prismatic).

**Why '3(n-1)'?**
Each of the (n-1) moving links, if free in a plane, would have 3 DOF (2 translation + 1 rotation). So, initially, we have 3(n-1) potential DOF.

**Why '-2j'?**
Each joint (like a pin or slider) connects two links and restricts their relative motion. A pin joint restricts 2 DOF (one translation between the links), leaving 1 DOF (rotation). A slider joint also restricts 2 DOF (two translations between the links), leaving 1 DOF (translation). Thus, each joint removes 2 DOF from the overall potential motion.

**Important Considerations for Kutzbach/Grübler:**

*   **Higher Pair Joints:** The standard Grübler's criterion assumes *lower pair* joints (where surfaces are in contact, e.g., pin joints, slider joints). If *higher pair* joints are involved (where points or lines are in contact, e.g., a roller on a cam), they introduce additional DOF. For a planar mechanism with higher pair joints, the formula is often modified:
    **M = 3(n - 1) - 2j₁ - j₂** where *j₂* is the number of joints with 2 DOF.
*   **Redundant Constraints:** If the mechanism has redundant constraints (e.g., two parallel bars connected by two pin joints at each end, forming a parallelogram), the formula may give a DOF of 0 or less, indicating it's locked or over-constrained.
*   **Special Cases:** Some mechanisms might have special geometries or linkages that allow for mobility even if the formula suggests otherwise (e.g., the parallel motion linkage, which is a special configuration of a four-bar).

---

### 4. Examples and Applications

#### 4.1 Example 1: Four-Bar Linkage

*   **Description:** A mechanism with four links connected by four pin joints.
*   **Analysis:**
    *   n = 4 (input link, connecting link, output link, fixed link)
    *   j = 4 (all pin joints, so j₁ = 4)
    *   M = 3(n - 1) - 2j
    *   M = 3(4 - 1) - 2(4)
    *   M = 3(3) - 8
    *   M = 9 - 8 = 1
*   **Interpretation:** The four-bar linkage has 1 DOF. It can be driven by a single input (e.g., rotating the input link). This is a common and useful mechanism.

#### 4.2 Example 2: Slider-Crank Mechanism

*   **Description:** A mechanism with a crank (rotating link), connecting rod, slider, and frame.
*   **Analysis:**
    *   n = 4 (crank, connecting rod, slider, frame)
    *   j = 4 (3 pin joints, 1 slider joint; all are 1-DOF joints, so j₁ = 4)
    *   M = 3(n - 1) - 2j
    *   M = 3(4 - 1) - 2(4)
    *   M = 3(3) - 8
    *   M = 9 - 8 = 1
*   **Interpretation:** The slider-crank mechanism has 1 DOF. It's the basis for engines and pumps.

#### 4.3 Example 3: Geneva Wheel Mechanism

*   **Description:** A mechanism used to convert continuous rotation into intermittent rotation.
*   **Analysis:**
    *   n = 3 (rotating disk with pins, slotted wheel, fixed frame)
    *   j = 3 (1 pin/revolute joint between disk and frame, 1 pin/revolute joint connecting pins to the slotted wheel, 1 slider/prismatic or pin joint defining the interaction between pin and slot)
    *   Assuming all joints are 1-DOF:
    *   M = 3(n - 1) - 2j
    *   M = 3(3 - 1) - 2(3)
    *   M = 3(2) - 6
    *   M = 6 - 6 = 0
*   **Interpretation:** The formula gives M=0, which seems to suggest it's locked. However, the Geneva wheel has an intermittent motion. The issue is that Grübler's criterion (and the simple Kutzbach for planar) is best suited for mechanisms where the input is continuous. For mechanisms with intermittent motion or complex path constraints, a more detailed analysis of the constraints is needed. A properly designed Geneva wheel allows one degree of freedom during the "engaging" phase of the pin within the slot, and zero degrees of freedom when disengaged. The formula sometimes needs to be interpreted carefully for such cases. Often, such mechanisms are considered to have 1 DOF, but the motion is not continuous.

**Reference:**
*   **Shigley J. E., Uicker J. J. (2010)**, *Theory of Machines and Mechanisms*: Discusses the Geneva mechanism and the limitations of simple DOF calculations in complex scenarios.
*   **Norton R. L. (2009)**, *Kinematics and Dynamics of Machinery*: Provides case studies and examples of various mechanisms, including those with intermittent motion.

#### 4.4 Example 4: A Redundant Constraint (Parallelogram Linkage)

*   **Description:** Four bars forming a parallelogram, with pivots at each vertex.
*   **Analysis:**
    *   n = 4
    *   j = 4 (all pin joints, j₁ = 4)
    *   M = 3(n - 1) - 2j
    *   M = 3(4 - 1) - 2(4)
    *   M = 3(3) - 8 = 9 - 8 = 1
*   **Wait!** This seems correct, but a parallelogram linkage has rigid opposite sides. If you try to input motion by rotating one link, *all* links move in a specific way, but is it truly 1 DOF?
*   **Consider the constraints:** The closure of the parallelogram creates a redundant constraint. If you fix one link and try to move another, the relative positions are determined.
*   **Alternative view (Kutzbach with constraint force perspective):** A true parallelogram linkage has its opposite sides parallel. If you try to move it, the angles must be maintained (unless it's a degenerate case).
*   **Revised interpretation for redundant mechanisms:** The formula can sometimes mask redundancy. A better way to think is that if you specify the angle of one link, the entire configuration is fixed. This implies 1 DOF. However, such mechanisms can be prone to issues if manufacturing tolerances are not perfect, as the redundancy can lead to binding.

#### 4.5 Example 5: Spatial Mechanism (e.g., a Robotic Arm Joint)

*   For spatial mechanisms, we use the more general Kutzbach criterion. A revolute joint in space has 1 DOF. A spherical joint has 3 DOF.
*   **Example: A simple robotic arm joint with one revolute joint.**
    *   Let's consider the arm itself and the base as two links.
    *   n = 2
    *   Let's say there's one revolute joint connecting them. The DOF of the revolute joint in space is f = 1.
    *   Using the general Kutzbach: M = 3(n-1) - Σ(fᵢ - 1)
    *   M = 3(2-1) - (1-1)  <-- This form is not directly applicable here as we need to sum over all joints.
    *   A better way is to think about the absolute freedoms and subtract constraints.
    *   Each link in space has 6 DOF. So, 2 links have 12 DOF.
    *   The revolute joint imposes 5 constraints (restricting 5 DOF).
    *   M = 12 - 5 = 7? This is not right. The total DOF is for the system of links.
    *   **Correct approach for spatial:** Consider the freedoms allowed by the joints.
    *   **M = Σfᵢ - Σ(fᵢ - 1) is often stated for specific configurations.**
    *   **A simpler spatial Kutzbach is:** M = 6(n - 1) - Σ(6 - fᵢ), where fᵢ is the DOF of joint i.
    *   For our 2-link arm with 1 revolute joint:
        *   n = 2
        *   j = 1 (revolute joint)
        *   f₁ = 1 (DOF of revolute joint)
        *   M = 6(2 - 1) - (6 - 1)
        *   M = 6(1) - 5
        *   M = 6 - 5 = 1
    *   **Interpretation:** A simple robotic arm with one revolute joint has 1 DOF. This allows it to rotate about an axis.

**Reference:**
*   **Myskza D. H. (2013)**, *Machines and Mechanisms Applied Kinematic Analysis*: Explores spatial mechanisms and provides a more nuanced view of Kutzbach's criterion.

---

### 5. Practice Questions and Exercises

**Question 1:**
Determine the degrees of freedom for the following planar mechanisms:
a) A four-bar linkage.
b) A slider-crank mechanism.
c) A five-bar linkage with five pin joints.
d) A single slider-crank mechanism with an additional pivoted link attached to the slider.

**Answer 1:**
a) **Four-bar linkage:** n=4, j=4. M = 3(4-1) - 2(4) = 9 - 8 = **1 DOF**.
b) **Slider-crank mechanism:** n=4, j=4. M = 3(4-1) - 2(4) = 9 - 8 = **1 DOF**.
c) **Five-bar linkage:** n=5, j=5. M = 3(5-1) - 2(5) = 3(4) - 10 = 12 - 10 = **2 DOF**. This mechanism requires two independent inputs to define its configuration.
d) **Slider-crank with pivoted link:** n=5 (crank, connecting rod, slider, pivoted link, frame), j=5 (3 pin joints for crank-rod, rod-slider, link-frame; 1 slider joint for slider-crank; 1 pin joint for pivoted link). M = 3(5-1) - 2(5) = 12 - 10 = **2 DOF**.

**Question 2:**
Consider a quick-return mechanism which is a modification of a slider-crank mechanism. It has a slotted lever oscillated by a crank. If the mechanism has 5 links and 6 pin joints and 1 slider joint, calculate its degrees of freedom.

**Answer 2:**
*   n = 5 (crank, connecting rod, slotted lever, slider, frame)
*   j₁ = 7 (all are 1-DOF joints: 5 pin joints + 1 slider joint, plus the joint within the slotted lever mechanism) - *Let's re-evaluate the links and joints carefully.*
    *   Typically, a quick-return mechanism is based on a slider-crank. Let's consider a common variant.
    *   **Common Quick Return (like Whitworth):**
        *   Links: Crank, connecting rod, slotted link, slider, frame. So, n=4.
        *   Joints: Crank-frame (pin), Crank-rod (pin), Rod-slotted (pin), Slotted-slider (slider), Slotted-frame (pin). Total j=5.
        *   Let's re-examine the question's phrasing: "5 links and 6 pin joints and 1 slider joint". This implies:
            *   n = 5
            *   j₁ = 6 (pin joints) + 1 (slider joint) = 7
            *   M = 3(n - 1) - 2j₁
            *   M = 3(5 - 1) - 2(7)
            *   M = 3(4) - 14
            *   M = 12 - 14 = -2. This indicates an over-constrained or locked mechanism.
        *   **It's crucial to correctly identify 'n' and 'j' from a diagram.** The number of links typically includes the fixed frame. The number of joints is the number of places where links are connected, and the type of joint determines its DOF.
        *   **Let's assume a standard quick return mechanism for calculation:** The most common quick return (e.g., based on a rotating crank and a sliding block in a straight slot) is often a modification of the slider-crank.
            *   n = 4 (Crank, Connecting Rod, Slotted Link, Frame)
            *   j = 4 (3 revolute joints, 1 prismatic/slider joint)
            *   M = 3(4-1) - 2(4) = 1 DOF.
        *   **If the question intended a mechanism with 5 links and 7 1-DOF joints, the result would be -2, meaning it's locked.** It's possible the question implies a specific construction where the formula needs careful application or interpretation of the "joints".
        *   **Let's use the alternative interpretation from Kutzbach:** M = 3(n-1) - sum of (f_i - 1). For all 1-DOF joints, it's M = 3(n-1) - j.
        *   With n=5, j=7: M = 3(5-1) - 7 = 3(4) - 7 = 12 - 7 = 5 DOF. *This also doesn't make sense for a typical quick-return.*

    *   **Most likely interpretation for a "quick return mechanism" (like a rotary-to-reciprocating with quick return feature) where the formula M=1 is expected:** The provided numbers in the question (5 links, 6 pin, 1 slider) might describe a more complex arrangement or have a typo. For standard mechanisms, correctly identifying n and j is key.

**Question 3:**
What does it mean for a mechanism to have 0 degrees of freedom?

**Answer 3:**
A mechanism with 0 degrees of freedom means that its configuration is completely fixed. It cannot move at all, or it is locked. This typically happens when the number of constraints equals or exceeds the number of potential motions.

**Question 4:**
Identify a mechanism that has more than 1 degree of freedom and explain why it needs more than one input to define its configuration.

**Answer 4:**
A **five-bar linkage** typically has 2 DOF. For example, if you rotate the first input link, the position of the second input link is not uniquely determined, and vice-versa. You would need to specify the rotation of two links independently to define the position of the entire mechanism.

---

### 6. Important Points to Remember

*   **DOF is the minimum number of independent parameters to define the configuration.**
*   **Grübler's Criterion (M = 3(n-1) - 2j) is for planar mechanisms with 1-DOF joints.**
*   **Kutzbach's Criterion is a more general formula.** For planar: M = 3(n-1) - Σ(fᵢ-1), where fᵢ is the DOF of joint i. For spatial: M = 6(n-1) - Σ(6-fᵢ).
*   **n includes the fixed link (frame).**
*   **j counts the number of joints connecting links.**
*   **Higher pair joints reduce the DOF by a different amount than lower pair joints.**
*   **M=1:** Most useful mechanisms, can be driven by a single input.
*   **M>1:** Multi-DOF mechanisms, require multiple inputs or have more complex behavior.
*   **M=0:** Locked or statically determinate structures.
*   **M<0:** Over-constrained mechanisms, can lead to stress or jamming.
*   **Special cases and geometrical configurations can sometimes deviate from simple formula results.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. Further Reading and References

*   **Ballaney P. L. (2005)**, *Theory of Machines and Mechanisms*: Focuses on clear explanations of fundamental concepts, including DOF.
*   **Rattan S. S. (2009)**, *Theory of Machines*: Provides numerous examples and exercises for practicing DOF calculations.
*   **Ghosh A. (2008)**, *Theory of Mechanisms and Machines*: Offers a robust treatment of Kutzbach's criterion and its extensions.
*   **Wilson C. E., Sadler P. (2005)**, *Kinematics and Dynamics of Machinery*: Excellent for understanding the theoretical underpinnings and application of DOF in complex systems.
*   **Shigley J. E., Uicker J. J. (2010)**, *Theory of Machines and Mechanisms*: A classic text with comprehensive coverage of kinematic analysis.
*   **Norton R. L. (2009)**, *Kinematics and Dynamics of Machinery*: Practical approach with many real-world examples.
*   **Myskza D. H. (2013)**, *Machines and Mechanisms Applied Kinematic Analysis*: Particularly useful for spatial mechanisms and advanced topics.

---
This comprehensive set of notes covers the definition, importance, types, calculation methods (Grübler's and Kutzbach's criteria), and practical examples of Degrees of Freedom in mechanisms, aligning with the learning and course outcomes for Module 1.