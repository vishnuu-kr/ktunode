---
title: "Kinematic Inversion"
subject: "MECHANICS OF MACHINERY"
module: "Module 1: Concepts of Kinematics and Dynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fd5"
status: "completed"
scrapedAt: "2026-05-20T17:55:04.680Z"
---
# MECHANICS OF MACHINERY - Module 1: Concepts of Kinematics and Dynamics

## Topic: Kinematic Inversion

### 1. Introduction to Kinematic Inversion

**Definition:** Kinematic inversion refers to the process of changing the fixed link (frame) of a mechanism while keeping the other links and their connectivity the same. This can result in a different type of motion or a different functional application of the same basic kinematic structure.

**Key Concept:** The fundamental kinematic structure of a mechanism remains the same regardless of which link is fixed. However, fixing different links can lead to entirely different functional behaviors and applications.

**Reference:** This concept is fundamental to understanding the versatility of mechanisms and is discussed in all major textbooks on the subject. For instance, Rattan (2009) emphasizes how inversion allows for the realization of different motions from a single kinematic chain. Ballaney (2005) also elaborates on how fixing different links leads to distinct mechanisms.

### 2. Why Study Kinematic Inversion?

*   **Understanding Mechanism Functionality:** Different inversions of the same kinematic chain can perform different tasks or produce different types of output motions.
*   **Designing for Specific Applications:** By selecting the appropriate inversion, engineers can tailor a mechanism to achieve a desired motion or function.
*   **Identifying Potential Applications:** Studying inversions can reveal new or overlooked applications for existing kinematic structures.
*   **Course Outcome Alignment:** This directly addresses **CO1: Calculate degrees of freedom of mechanisms and Interpret their inversions.**

### 3. Types of Kinematic Inversions

The classification of inversions is typically based on which link is considered the fixed link (frame). For a mechanism with 'n' links, there can be 'n' possible inversions if all links can serve as the frame.

**General Principle:** To obtain the inversions of a mechanism, systematically consider each link as the fixed link, while maintaining the same relative connectivity between the other links.

#### 3.1. Davis Mechanism Inversions

The Davis mechanism is a popular example used to illustrate kinematic inversion. It's a mechanism with 5 links and 1 degree of freedom.

*   **Mechanism Structure:** A basic Davis mechanism often involves a driving crank, a connecting rod, a slider, and a frame.

*   **Inversion 1 (Crank Rocker):**
    *   **Fixed Link:** The crank.
    *   **Motion:** The connecting rod causes the slider to reciprocate, while the crank rotates.
    *   **Application:** Common in internal combustion engines and pumps.
    *   **Textbook Example:** Rattan (2009) describes this as a fundamental mechanism where the crank drives a slider.

*   **Inversion 2 (Double Crank Rocker):**
    *   **Fixed Link:** The connecting rod.
    *   **Motion:** Two cranks rotate in opposite directions, connected by a link.
    *   **Application:** Used in some oscillating engines.
    *   **Important Point:** This inversion requires specific link length proportions to function correctly.

*   **Inversion 3 (Slider Crank Rocker):**
    *   **Fixed Link:** The slider (or the link that would normally guide the slider).
    *   **Motion:** A crank rotates, and this rotation is transmitted through a connecting rod to another crank which oscillates.
    *   **Application:** Found in some types of rotary pumps and engines.
    *   **Reference:** Ballaney (2005) illustrates this inversion with diagrams.

*   **Inversion 4 (Beam Engine or Oscillating Cylinder Engine):**
    *   **Fixed Link:** The rocker (connecting rod).
    *   **Motion:** A crank rotates, connected to a beam that oscillates. The other end of the beam can drive a piston.
    *   **Application:** Historically significant in steam engines.

#### 3.2. Grashof's Law and Inversions

Grashof's Law is crucial for determining the possible types of motion (e.g., full rotation) of linkages. It states that in a planar linkage with at least one rotating link, the sum of the lengths of the longest link and the shortest link must be less than or equal to the sum of the lengths of the other two links for at least one link to make a complete revolution.

$$L + S \le P + Q$$

Where:
*   $L$ = Length of the longest link
*   $S$ = Length of the shortest link
*   $P, Q$ = Lengths of the other two links

**Connection to Inversions:** Grashof's Law applies to a specific inversion. Fixing different links can change which link is considered the longest or shortest in the context of the mechanism's mobility, potentially altering whether full rotation is possible.

#### 3.3. Watt's Straight Line Motion Mechanism

*   **Mechanism Structure:** A linkage designed to produce an approximate straight-line motion. It's a form of the four-bar linkage.

*   **Inversions:**
    *   **Watt's First Parallel Motion:** Fixes one of the shorter links. The output is a rocking motion.
    *   **Watt's Second Parallel Motion:** Fixes the longest link. The output is an approximate straight-line motion at the midpoint of the connecting rod.
    *   **Watt's Third Parallel Motion:** Fixes the output link that generates the straight-line motion. This is less common.

**Reference:** Shigley and Uicker (2010) provide detailed analysis of Watt's mechanisms and their inversions.

#### 3.4. Occupational Inversions

These are inversions where the primary function or application of the mechanism changes significantly based on which link is fixed.

*   **Example: Scotch Yoke Mechanism**
    *   **Basic Structure:** A crank and a slider linked by a slot.
    *   **Inversion 1 (Standard Scotch Yoke):** The frame is fixed. The rotating crank drives the slider to produce simple harmonic motion.
    *   **Inversion 2 (Rotary Motion from Linear Motion):** The slider is fixed. The crank is driven, and the slotted link rotates, allowing a driven crank to rotate.

**Reference:** Norton (2009) provides practical examples of occupational inversions in machine design.

### 4. Degrees of Freedom (DOF) and Inversions

*   **DOF Calculation:** The degree of freedom of a mechanism determines its mobility. For planar mechanisms, the Grubler's criterion is often used:
    $$M = 3(n-1) - 2j_1 - j_2$$
    Where:
    *   $M$ = Degrees of Freedom
    *   $n$ = Number of links
    *   $j_1$ = Number of lower pairs (1 DOF per pair, e.g., revolute, prismatic)
    *   $j_2$ = Number of higher pairs (2 DOF per pair, e.g., gear tooth contact)

*   **Impact of Inversion on DOF:** **Crucially, kinematic inversion *does not* change the degree of freedom of a mechanism.** The number of links, the types of joints, and the connectivity remain the same. What changes is which link is considered stationary, which affects how the motion is transmitted and observed.

*   **Course Outcome Alignment:** This reinforces **CO1: Calculate degrees of freedom of mechanisms and Interpret their inversions.**

### 5. Key Concepts and Definitions Summary

*   **Kinematic Chain:** A series of links connected by joints, forming a closed loop or an open chain.
*   **Mechanism:** A kinematic chain with one link fixed (the frame).
*   **Link:** A rigid body forming part of a mechanism.
*   **Joint/Pair:** The connection between two links, allowing relative motion.
*   **Degree of Freedom (DOF):** The minimum number of independent parameters required to define the position of all links in a mechanism.
*   **Inversion:** A mechanism formed by changing the fixed link of a kinematic chain.

### 6. Examples and Illustrations

*   **Four-Bar Linkage:**
    *   **Structure:** Four links connected by four revolute joints.
    *   **Inversions:**
        1.  **Fix Crank:** Crank-Rocker (one crank rotates, other link rocks).
        2.  **Fix Rocker:** Double Rocker (both cranks rock).
        3.  **Fix Connecting Rod:** Double Crank (both cranks rotate, if Grashof's Law is satisfied).
        4.  **Fix the other Crank:** Rocker-Crank (same as Inversion 1, but the driving and output links are swapped).

*   **Slider-Crank Mechanism:**
    *   **Structure:** Four links – crank, connecting rod, slider, frame.
    *   **Inversions:**
        1.  **Fix Frame:** Standard Slider-Crank (crank rotates, slider reciprocates – e.g., engine cylinder).
        2.  **Fix Crank:** Turning Table Mechanism (slider reciprocates, driving a crank).
        3.  **Fix Connecting Rod:** Oscillating Engine (crank rotates, connecting rod oscillates a cylinder).
        4.  **Fix Slider:** Is the frame. This is not a distinct inversion in terms of function.

**Reference:** Ghosh (2008) provides comprehensive graphical examples of inversions for common mechanisms. Myskza (2013) emphasizes the applied kinematic analysis of these inversions.

### 7. Important Points to Remember

*   **Inversion does NOT change the DOF.**
*   The same kinematic chain can yield different functional mechanisms through inversion.
*   The choice of inversion depends on the desired output motion and application.
*   Grashof's Law is critical for determining the mobility of linkages and can be applied differently to different inversions.
*   Always ensure the mechanism remains constrained after fixing a link.

### 8. Practice Questions and Exercises

**Question 1:**
What is kinematic inversion? Explain its significance in the study of mechanisms.

**Answer:**
Kinematic inversion is the process of changing the fixed link of a kinematic chain to create different mechanisms. Its significance lies in its ability to generate various functional mechanisms from a single kinematic structure, allowing engineers to adapt mechanisms for specific applications and output motions.

**Question 2:**
Consider a four-bar linkage. List its possible inversions and describe the motion produced in each case.

**Answer:**
A four-bar linkage has four links connected by four revolute joints. The four inversions are:
1.  **Fixed Link is the Crank:** Crank-Rocker mechanism (one link rotates, the other rocks).
2.  **Fixed Link is the Rocker:** Double Rocker mechanism (both links that are not cranks rock).
3.  **Fixed Link is the Connecting Rod:** Double Crank mechanism (both cranks rotate, if Grashof's condition is met).
4.  **Fixed Link is the other Crank:** Rocker-Crank mechanism (similar to crank-rocker, but with different driving/output links).

**Question 3:**
State Grubler's criterion for determining the degrees of freedom of a planar mechanism. Does inversion affect the degrees of freedom?

**Answer:**
Grubler's criterion for a planar mechanism is: $M = 3(n-1) - 2j_1 - j_2$.
No, kinematic inversion does not affect the degrees of freedom of a mechanism because the number of links, joints, and their connectivity remain the same; only the fixed link changes.

**Question 4:**
A slider-crank mechanism is commonly used in engines. Describe its most common inversion and one other inversion, along with their applications.

**Answer:**
*   **Most Common Inversion (Fixing the Frame):** Standard Slider-Crank. The rotating crank drives a reciprocating slider. **Application:** Internal combustion engines, pumps.
*   **Another Inversion (Fixing the Crank):** Turning Table Mechanism. A reciprocating slider drives a crank which rotates. **Application:** Some rotary indexing machines.

**Question 5:**
Apply Grashof's Law to a four-bar linkage with link lengths 50mm, 100mm, 150mm, and 200mm. If the 150mm link is the longest and the 50mm link is the shortest, which link should be fixed to achieve a double crank mechanism?

**Answer:**
Grashof's Law: $L + S \le P + Q$
Here, $L = 200$mm, $S = 50$mm. Let the other two links be $P = 100$mm and $Q = 150$mm.
$200 + 50 = 250$mm
$100 + 150 = 250$mm
Since $L + S = P + Q$ (250mm = 250mm), the linkage is a Grashof linkage, meaning it can have all links rotating.
For a double crank mechanism, the connecting rod (often considered the longest link, or one of the cranks) needs to be fixed. If the 150mm link is the connecting rod and it's fixed, and the 200mm link is also a crank, then if Grashof's Law is satisfied for this configuration, it could lead to a double crank. However, the typical condition for a double crank mechanism is that the shortest link is the crank and it rotates. If we fix the **longest link (200mm)**, and the shortest link (50mm) is the crank, then we can get a double crank mechanism (if the sum of the fixed link and the shortest link is less than or equal to the sum of the other two).

**Correct Interpretation:** For a double crank mechanism in a four-bar linkage, the **shortest link must be able to rotate fully**. This is achieved when the longest link is fixed, or when the link adjacent to the shortest link is fixed. Given the lengths (50, 100, 150, 200), to get a double crank where both cranks rotate, you would fix either the 150mm link or the 200mm link. Fixing the **150mm link** (the connecting rod, assuming it's the standard configuration) or the **200mm link** (if it's also a crank) would allow both other cranks to rotate fully, provided the Grashof condition holds. The question implies that the 200mm link is a crank. To have both cranks rotate, the **longest link (200mm)** or the **next longest link (150mm)** (if it acts as the connecting rod) should be fixed.

**(Self-Correction/Clarification):** The most straightforward way to get a double crank is to fix the link that is *not* one of the cranks. If the 50mm and 100mm links are cranks, and the 150mm link is the connecting rod, and 200mm is the frame, then fixing the 150mm link will allow both cranks to rotate. If the 200mm link is also a crank, fixing either the 150mm or 200mm link would allow the other two (50mm and 100mm) to rotate. The question is slightly ambiguous without specifying which links are cranks/rockers/couplers. However, generally, to achieve a double crank, you fix the "frame" which is typically the longest link or the connecting rod to ensure the other two can rotate.

---

This concludes Module 1's topic on Kinematic Inversion. Remember to revisit the textbook examples for visual understanding and to practice applying Grubler's criterion to different mechanism configurations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
