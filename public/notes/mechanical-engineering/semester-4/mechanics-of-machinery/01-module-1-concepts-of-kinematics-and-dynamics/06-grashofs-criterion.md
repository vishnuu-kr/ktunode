---
title: "Grashof’s criterion."
subject: "MECHANICS OF MACHINERY"
module: "Module 1: Concepts of Kinematics and Dynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fd1"
status: "completed"
scrapedAt: "2026-05-20T17:55:01.784Z"
---
# Mechanics of Machinery: Module 1 - Concepts of Kinematics and Dynamics

## Topic: Grashof's Criterion

### 1. Introduction to Linkages and Grashof's Criterion

This section introduces the fundamental concept of four-bar linkages and how their structural arrangement dictates their possible motions. Grashof's criterion is a vital tool for predicting the type of motion a four-bar linkage will exhibit.

**Key Concepts:**

*   **Mechanism:** A mechanical device that transmits or modifies motion and/or force.
*   **Link:** A rigid body that is part of a mechanism.
*   **Joint:** A connection between two or more links that allows relative motion.
*   **Degrees of Freedom (DOF):** The minimum number of independent parameters required to specify the configuration of a mechanism. For planar mechanisms, this is often calculated using **Gruebler's Formula**:
    *   $M = 3(n-1) - 2j_1 - j_2$
    *   Where:
        *   $M$ = Degrees of Freedom
        *   $n$ = Number of links (including the fixed frame)
        *   $j_1$ = Number of 1-DOF joints (e.g., revolute, prismatic)
        *   $j_2$ = Number of 2-DOF joints (e.g., pin with a slider)
*   **Four-Bar Linkage (Quadrilateral Linkage):** A mechanism consisting of four links connected by four turning (revolute) joints. It is the most fundamental and widely used planar mechanism.

**Importance of Grashof's Criterion:**

Grashof's criterion helps us predict whether a four-bar linkage can achieve a "crank-rocker" or "double-rocker" motion, or if it will be restricted to "rocker-rocker" motion. This is crucial for designing mechanisms that perform specific tasks.

**Reference/Textbook Alignment:**

*   **Ballaney P. L., Chapter 3: Mechanisms:** Discusses basic mechanisms, including the four-bar linkage, and introduces the concept of mobility.
*   **Rattan S. S., Chapter 4: Mechanisms and their Analysis:** Covers classification of mechanisms and the degrees of freedom, laying the groundwork for Grashof's criterion.
*   **Ghosh A., Chapter 2: Kinematic Analysis of Mechanisms:** Introduces degrees of freedom and various types of linkages.
*   **Shigley & Uicker, Chapter 2: Kinematic Definitions and Concepts:** Defines links, joints, and mechanisms, and introduces Gruebler's formula.

---

### 2. Grashof's Law and its Formulation

Grashof's Law is an empirical condition that relates the lengths of the links in a four-bar linkage to its possible motions. It states that for a four-bar linkage, if the sum of the lengths of the shortest and longest links is less than or equal to the sum of the lengths of the other two links, then at least one link can rotate a full $360^\circ$ relative to another.

**Formulation of Grashof's Law:**

Consider a four-bar linkage with links of lengths $l_1$, $l_2$, $l_3$, and $l_4$. Let $l_s$ be the length of the shortest link, $l_l$ be the length of the longest link, and $l_a$ and $l_b$ be the lengths of the other two links.

**Grashof's Condition:**

A four-bar linkage can have a fully revolving link (crank motion) if:

$l_s + l_l \le l_a + l_b$

**Important Definitions:**

*   **Frame Link ($l_1$):** The fixed link of the mechanism. In the context of Grashof's criterion, it is often one of the links but doesn't have to be the shortest or longest.
*   **Crank:** A link that can rotate a full $360^\circ$ relative to the frame.
*   **Rocker (or Follower):** A link that oscillates back and forth and does not complete a full rotation.

**Reference/Textbook Alignment:**

*   **Ballaney P. L., Chapter 3: Mechanisms:** Explicitly states and explains Grashof's Law for four-bar linkages.
*   **Rattan S. S., Chapter 4: Mechanisms and their Analysis:** Presents Grashof's criterion as a condition for the type of motion in a four-bar linkage.
*   **Ghosh A., Chapter 2: Kinematic Analysis of Mechanisms:** Introduces Grashof's criterion and its application.
*   **Shigley & Uicker, Chapter 2: Kinematic Definitions and Concepts:** Discusses linkage behavior and the conditions for continuous rotation.

---

### 3. Types of Four-Bar Linkages Based on Grashof's Criterion

Based on whether Grashof's condition is met or not, and which link is the shortest, four types of four-bar linkages can be identified:

**Case 1: Grashof's Condition is Met ($l_s + l_l < l_a + l_b$)**

In this case, at least one link can rotate $360^\circ$. The type of linkage depends on which link is the shortest:

*   **Double-Crank Mechanism:** If the shortest link is fixed as the frame ($l_s$ is the frame link), then both other links can rotate $360^\circ$ relative to each other. The input link acts as a crank and the output link also rotates fully.
*   **Crank-Rocker Mechanism:** If the shortest link is *not* the frame link (i.e., it's one of the moving links), and it is adjacent to the frame, then the shortest link ($l_s$) can rotate $360^\circ$ (acting as a crank), and the link opposite to it ($l_l$) will act as a rocker. The other two links are crank and rocker respectively, depending on which is the input.
    *   **Example:** A common example is the slider-crank mechanism (which can be considered a limiting case of a crank-rocker where one link becomes infinitely long). The crankshaft is the crank, and the connecting rod is the rocker.
*   **Double-Rocker Mechanism:** If the shortest link is *not* the frame link and it is opposite to the frame link. In this scenario, neither of the moving links can rotate $360^\circ$. Both moving links act as rockers.

**Case 2: Grashof's Condition is Not Met ($l_s + l_l > l_a + l_b$)**

*   **Rocker-Rocker Mechanism:** In this case, no link can make a full rotation. All moving links act as rockers, oscillating back and forth.

**Case 3: Grashof's Condition is a Boundary Case ($l_s + l_l = l_a + l_b$)**

This is a special condition where the mechanism can achieve a state of "paradromic motion" or "change point." In this state, two links can rotate $360^\circ$ simultaneously, and then the mechanism can reverse its direction.

*   **Drag Link Mechanism:** If the shortest link is the frame link, it's a double-crank mechanism.
*   **Offset Slider-Crank Mechanism:** If the shortest link is not the frame, it can behave like a crank-rocker. When the condition is met exactly, a specific configuration allows continuous rotation.

**Summary Table:**

| Condition ($l_s + l_l \le l_a + l_b$) | Shortest Link is Frame | Shortest Link is NOT Frame (adjacent) | Shortest Link is NOT Frame (opposite) |
| :----------------------------------- | :--------------------- | :------------------------------------ | :------------------------------------ |
| **Met ($<$)**                        | Double-Crank           | Crank-Rocker                          | Double-Rocker                         |
| **Boundary ($=$)**                   | Double-Crank           | Crank-Rocker                          | Double-Rocker                         |
| **Not Met ($>$)**                    | Rocker-Rocker          | Rocker-Rocker                         | Rocker-Rocker                         |

**Reference/Textbook Alignment:**

*   **Ballaney P. L., Chapter 3: Mechanisms:** Provides detailed explanations and diagrams for each type of four-bar linkage based on Grashof's criterion.
*   **Rattan S. S., Chapter 4: Mechanisms and their Analysis:** Classifies linkages and explains the implications of Grashof's criterion on their motion.
*   **Ghosh A., Chapter 2: Kinematic Analysis of Mechanisms:** Differentiates between crank-rocker, double-crank, and double-rocker mechanisms using Grashof's criterion.
*   **Wilson & Sadler, Chapter 3: Classification of Mechanisms:** Discusses the classification of mechanisms based on their mobility and Grashof's criterion.
*   **Norton, Chapter 5: Linkage Mechanisms:** Covers the analysis of linkage mechanisms and the prediction of their behavior using Grashof's Law.

---

### 4. Applications and Examples of Grashof's Criterion

Grashof's criterion is fundamental to the design and analysis of various machines.

**Examples:**

1.  **Watt's Steam Engine Indicator:** A crank-rocker mechanism is used to convert rotary motion into the reciprocating motion of the indicator piston.
2.  **Quick Return Mechanisms:** Many quick return mechanisms used in shaping machines and planers are based on the crank-rocker principle, where the return stroke is faster than the cutting stroke.
3.  **Automotive Suspension Systems:** Four-bar linkages are often employed in suspension designs to control wheel movement.
4.  **Robotics:** In robotic arms, four-bar linkages can be used for specific joint movements.
5.  **Windshield Wipers:** The oscillating motion of windshield wipers is typically achieved using a crank-rocker mechanism.

**How to Determine the Type of Linkage:**

1.  Identify the lengths of the four links in the four-bar mechanism.
2.  Identify the shortest link ($l_s$), the longest link ($l_l$), and the other two links ($l_a$, $l_b$).
3.  Calculate the sums: $l_s + l_l$ and $l_a + l_b$.
4.  Compare the sums to determine if Grashof's condition is met.
5.  If met, identify the fixed link to determine if it's a double-crank, crank-rocker, or double-rocker.

**Reference/Textbook Alignment:**

*   **Ballaney P. L., Chapter 3: Mechanisms:** Provides practical examples like the Watt's indicator mechanism.
*   **Rattan S. S., Chapter 4: Mechanisms and their Analysis:** Includes examples of mechanisms and how Grashof's criterion applies.
*   **Ghosh A., Chapter 2: Kinematic Analysis of Mechanisms:** Discusses application in various machines.
*   **Myskza, Chapter 4: Four-Bar Linkages:** Explores design and application aspects of four-bar linkages.
*   **Norton, Chapter 5: Linkage Mechanisms:** Illustrates the use of Grashof's Law in designing practical mechanisms.

---

### 5. Learning Outcomes Addressed by Grashof's Criterion

Grashof's criterion directly contributes to understanding and predicting the behavior of mechanisms, which aligns with several course outcomes.

*   **CO1: Calculate degrees of freedom of mechanisms and Interpret their inversions.**
    *   Grashof's criterion is applied specifically to four-bar linkages, which are common mechanisms with a known DOF (usually 1). Understanding Grashof's criterion allows us to *interpret* the *type of motion* these mechanisms can have, which is a key aspect of interpreting their behavior and potential inversions. For example, knowing a linkage is a crank-rocker tells us about the possible inversions (e.g., a beam engine inversion).
*   **CO2: Perform velocity and acceleration analysis of various planar mechanisms.**
    *   While Grashof's criterion itself doesn't directly involve velocity or acceleration calculations, knowing whether a link can rotate fully (as predicted by Grashof's criterion) is crucial for setting up the conditions for velocity and acceleration analysis. If a link is a rocker, its motion is oscillatory, which dictates the analysis approach. If it's a crank, the analysis can proceed assuming continuous rotation.
*   **CO3: Construct a mechanism for a specified output motion.**
    *   Grashof's criterion is fundamental in the *synthesis* of mechanisms. If you need a mechanism where one link rotates continuously while another oscillates (crank-rocker), you would use Grashof's criterion to ensure the link lengths are chosen appropriately. Similarly, if you need a mechanism where all parts only oscillate (rocker-rocker), you'd ensure the condition is not met.
*   **CO5: Create prototype of various mechanisms.**
    *   Before creating a physical prototype, engineers must predict how the mechanism will behave. Grashof's criterion is an essential tool for this preliminary analysis. It helps avoid building a mechanism that cannot perform the desired motion, saving time and resources.

**Reference/Textbook Alignment:**

This section relates how the topic of Grashof's criterion supports the broader course outcomes. All listed textbooks and reference books contribute to this understanding by providing the foundational knowledge and application examples necessary for achieving these COs.

---

### 6. Practice Questions and Answers

**Question 1:**

A four-bar linkage has link lengths of 50 mm, 100 mm, 150 mm, and 200 mm. Determine if this linkage can have a crank. If so, what are the possible types of motion?

**Answer:**

1.  Identify link lengths: $l_1 = 50$ mm, $l_2 = 100$ mm, $l_3 = 150$ mm, $l_4 = 200$ mm.
2.  Shortest link ($l_s$) = 50 mm.
3.  Longest link ($l_l$) = 200 mm.
4.  Other two links ($l_a$, $l_b$) = 100 mm, 150 mm.
5.  Check Grashof's condition:
    $l_s + l_l = 50 + 200 = 250$ mm
    $l_a + l_b = 100 + 150 = 250$ mm

    Since $l_s + l_l = l_a + l_b$, Grashof's condition is met at the boundary.

6.  **Interpretation:**
    *   If the shortest link (50 mm) is the frame, it's a **double-crank mechanism**.
    *   If the 100 mm or 150 mm link is the frame (and the 50 mm link is a moving link), it can be a **crank-rocker mechanism**.
    *   If the 200 mm link is the frame (and the 50 mm link is a moving link), it would be a **double-rocker mechanism**.

    In this boundary case, at least one link can achieve continuous rotation.

**Question 2:**

A four-bar linkage has links with lengths 40 mm, 60 mm, 70 mm, and 100 mm. Identify the shortest and longest links. Will this linkage have a crank? What type of motion is possible?

**Answer:**

1.  Link lengths: 40 mm, 60 mm, 70 mm, 100 mm.
2.  Shortest link ($l_s$) = 40 mm.
3.  Longest link ($l_l$) = 100 mm.
4.  Other two links ($l_a$, $l_b$) = 60 mm, 70 mm.
5.  Check Grashof's condition:
    $l_s + l_l = 40 + 100 = 140$ mm
    $l_a + l_b = 60 + 70 = 130$ mm

    Since $l_s + l_l > l_a + l_b$ (140 mm > 130 mm), Grashof's condition is *not* met.

6.  **Interpretation:** This linkage will be a **rocker-rocker mechanism**. No link can rotate a full $360^\circ$.

**Question 3:**

Consider a four-bar linkage where the shortest link is 2 cm, the longest link is 10 cm, and the other two links are 6 cm and 8 cm.
a) State Grashof's criterion.
b) Determine the type of motion this linkage will exhibit.
c) If the 2 cm link were fixed as the frame, what would be the motion?

**Answer:**

a) **Grashof's Criterion:** For a four-bar linkage, if the sum of the lengths of the shortest and longest links is less than or equal to the sum of the lengths of the other two links ($l_s + l_l \le l_a + l_b$), then at least one link can rotate $360^\circ$.

b)
1.  $l_s = 2$ cm, $l_l = 10$ cm, $l_a = 6$ cm, $l_b = 8$ cm.
2.  $l_s + l_l = 2 + 10 = 12$ cm.
3.  $l_a + l_b = 6 + 8 = 14$ cm.
4.  Since $12$ cm $< 14$ cm, Grashof's condition is met.
5.  The shortest link (2 cm) is not the frame. Therefore, it will be a **crank-rocker mechanism**.

c) If the 2 cm link were fixed as the frame, and Grashof's condition is met ($l_s + l_l < l_a + l_b$), it would be a **double-crank mechanism** (as the shortest link being the frame allows for this if the condition is met).

**Practice Exercise:**

Design a four-bar linkage that can be used as a quick-return mechanism. Specify the lengths of the links and explain why your choice satisfies Grashof's criterion and leads to the desired motion.

---

### 7. Important Points to Remember

*   **Grashof's Criterion is for Four-Bar Linkages:** It is a rule of thumb specifically for mechanisms with four links connected by four revolute joints.
*   **Identify Links Correctly:** Always correctly identify the shortest ($l_s$), longest ($l_l$), and the other two links ($l_a$, $l_b$). The frame link is crucial for determining the *type* of motion once Grashof's condition is met.
*   **Inequality vs. Equality:**
    *   $l_s + l_l < l_a + l_b$: Clear indication of continuous rotation possible for at least one link.
    *   $l_s + l_l = l_a + l_b$: Boundary case, potential for simultaneous $360^\circ$ rotation of two links (paradromic motion).
    *   $l_s + l_l > l_a + l_b$: No link can achieve $360^\circ$ rotation.
*   **Frame Link's Role:** The identity of the frame link is critical when Grashof's condition is met to distinguish between double-crank, crank-rocker, and double-rocker mechanisms.
*   **Practical Significance:** Grashof's criterion is a powerful tool in mechanism synthesis and design, enabling engineers to predict and achieve desired motions before prototyping.

---

This comprehensive study note on Grashof's Criterion provides a foundational understanding of its formulation, implications, and applications in the field of Mechanics of Machinery. It directly addresses the learning outcomes by explaining the behavior of linkages and supporting mechanism design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
