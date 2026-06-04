---
title: "Velocity analysis of mechanisms (Up to six links)– relative motion - relative velocity."
subject: "MECHANICS OF MACHINERY"
module: "Module 2: Velocity analysis of mechanisms (Up to six links)– relative motion "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fdd"
status: "completed"
scrapedAt: "2026-05-20T17:55:09.756Z"
---
# Mechanics of Machinery: Module 2 - Velocity Analysis of Mechanisms (Up to Six Links) - Relative Velocity

## 1. Introduction to Velocity Analysis

Velocity analysis is a fundamental aspect of understanding the motion of mechanisms. It deals with determining the linear and angular velocities of different parts of a mechanism for a given input motion. This module focuses on the analysis of mechanisms with up to six links, utilizing the concept of relative motion.

**Key Concept:** The motion of any link in a mechanism can be described relative to the motion of another link. This principle forms the basis of relative velocity analysis.

**Importance:** Understanding velocities is crucial for:
*   Designing mechanisms with desired operating speeds.
*   Calculating forces and power transmission.
*   Predicting the behavior of a mechanism under dynamic conditions.
*   Identifying potential kinematic constraints or issues.

**Relevance to Course Outcomes:**
*   **CO2:** This entire module directly addresses the ability to perform velocity analysis of planar mechanisms.
*   **CO5:** Understanding velocities is essential for creating functional prototypes of mechanisms.

## 2. Relative Velocity Concept

The velocity of a point or link is always measured with respect to a reference frame. In relative velocity analysis, we choose one link as a *reference link* and express the velocities of other links in relation to it.

### 2.1 Absolute Velocity vs. Relative Velocity

*   **Absolute Velocity:** The velocity of a point or link measured with respect to a fixed reference frame (usually the ground or the frame of the machine).
*   **Relative Velocity:** The velocity of a point or link measured with respect to another moving point or link.

### 2.2 Vector Representation of Velocities

Velocities are vector quantities, possessing both magnitude and direction. They are typically represented graphically using vectors.

*   **Magnitude:** Represents the speed of the point or link.
*   **Direction:** Represents the instantaneous direction of motion.

### 2.3 The Relative Velocity Equation

For two points A and B, the velocity of A relative to B ($V_{A/B}$) is given by:

$V_{A/B} = V_A - V_B$

Rearranging this equation, we get the fundamental equation for relative velocity analysis:

$V_A = V_B + V_{A/B}$

This equation states that the absolute velocity of point A is equal to the absolute velocity of point B plus the velocity of A relative to B.

**Important Point to Remember:** This vector equation is the cornerstone of graphical velocity analysis. It allows us to determine unknown velocities by combining known velocities and relative velocities.

**Reference:** Ballaney P. L. (2005) "Theory of Machines and Mechanisms" extensively covers the vector approach to velocity analysis.

## 3. Velocity Analysis of a General Rigid Body (Link)

Any rigid body (link) in a planar mechanism can be considered as a line segment connecting two points. The velocity of any point on this link can be determined if the velocity of one point and the angular velocity of the link are known.

### 3.1 Velocity of a Point on a Moving Link

Consider a link PQ. If we know the velocity of point P ($V_P$) and the angular velocity of the link ($\omega$), then the velocity of any other point Q on the same link can be determined using the relative velocity equation:

$V_Q = V_P + V_{Q/P}$

The term $V_{Q/P}$ represents the velocity of Q relative to P. For a rigid link, this relative velocity is due to the rotation of the link about P. Therefore, $V_{Q/P}$ is a tangential velocity with magnitude $r\omega$, where $r$ is the distance between P and Q, and its direction is perpendicular to the line segment PQ.

$V_{Q/P} = \omega \times \vec{r}_{PQ}$

where $\vec{r}_{PQ}$ is the vector from P to Q.

**Vector Form:** $V_Q = V_P + \omega \times \vec{r}_{PQ}$

**Magnitude Form (for a link rotating about a fixed point P):** $V_Q = \omega \times PQ$

**Direction:** $V_{Q/P}$ is perpendicular to PQ.

### 3.2 Velocity of a Point on a Link Rotating About a Fixed Center

If a link rotates about a fixed center (e.g., a crank), the velocity of any point on that link is purely tangential and its magnitude is given by the product of the angular velocity and the radial distance from the center.

**Example:** Consider a crank OA of length $r$, rotating with angular velocity $\omega$. The velocity of point A ($V_A$) will be tangential to the circular path of A and its magnitude will be $V_A = \omega r$.

**Reference:** Rattan S. S. (2009) "Theory of Machines" provides clear explanations and diagrams for the velocity of points on rotating links.

## 4. Relative Velocity Method for Velocity Analysis

The relative velocity method involves constructing a vector diagram representing the velocities of different points in the mechanism. This method is particularly useful for mechanisms with few links and for obtaining a visual understanding of the velocities.

### 4.1 Steps for Graphical Velocity Analysis using Relative Velocity

1.  **Identify the Knowns and Unknowns:** Determine the input motion (e.g., velocity of a driving link) and the velocities to be determined.
2.  **Choose a Scale:** Select an appropriate scale for linear velocities (e.g., 1 cm = X m/s).
3.  **Draw the Space Diagram:** Draw the mechanism in a representative position to a suitable scale.
4.  **Start with a Fixed Point:** Represent the fixed point (ground) as the origin of the velocity diagram.
5.  **Draw Known Velocities:** Draw the velocity vector of any point whose velocity is known (e.g., the driving crank).
6.  **Apply Relative Velocity Equations:** For each link, apply the relative velocity equation $V_A = V_B + V_{A/B}$.
    *   If $V_B$ is known, and $V_{A/B}$ has a known direction (e.g., perpendicular to the link), then $V_A$ can be determined by drawing a line from the end of $V_B$ parallel to the direction of $V_{A/B}$ and intersecting the path of A.
    *   If $V_B$ is unknown, but the direction of $V_B$ is known (e.g., for a point on a rotating link about a fixed center), and $V_{A/B}$ has a known direction, then $V_A$ can be determined by drawing lines of known directions.
7.  **Construct the Velocity Polygon:** As you apply the relative velocity equations, construct the velocity polygon by adding velocity vectors head-to-tail.
8.  **Measure Unknown Velocities:** Once the velocity polygon is complete, measure the lengths of the unknown velocity vectors using the chosen scale to determine their magnitudes. Determine their directions from the polygon.

**Important Point to Remember:** The accuracy of graphical analysis depends heavily on the precision of the drawing and the chosen scale.

**Reference:** Ghosh A. (2008) "Theory of Mechanisms and Machines" provides a systematic approach to constructing velocity polygons.

### 4.2 Types of Velocity Diagrams

*   **Velocity Diagram for a Link:** Represents the velocities of points on a single link.
*   **Velocity Polygon:** A composite diagram representing the velocities of all critical points in a mechanism.

## 5. Velocity Analysis of Common Mechanisms

Let's explore the application of the relative velocity method to specific mechanisms.

### 5.1 Four-Bar Mechanism

A four-bar mechanism consists of four links: a fixed link (frame), a crank, a connecting rod, and a follower.

**Example:** Slider-crank mechanism. Let the crank be OA, the connecting rod be AB, and the slider be B, which moves along a straight path.

*   **Input:** Angular velocity of the crank OA ($\omega_{OA}$).
*   **Goal:** Determine the angular velocity of the connecting rod AB ($\omega_{AB}$) and the linear velocity of the slider B ($V_B$).

**Velocity Analysis:**
1.  **Space Diagram:** Draw the four-bar mechanism in a given position.
2.  **Velocity of A ($V_A$):** Since OA is a crank rotating about fixed point O, $V_A$ is tangential to the circle traced by A. Its magnitude is $V_A = \omega_{OA} \times OA$. Draw this vector from O.
3.  **Velocity of B ($V_B$):** B is a point on the slider, so its velocity $V_B$ is along the direction of motion of the slider (horizontal or vertical). Draw a line in this direction from the origin of the velocity diagram.
4.  **Velocity of B relative to A ($V_{B/A}$):** This velocity is along the connecting rod AB and its direction is perpendicular to AB if B is considered to be rotating about A. Alternatively, consider B as a point on the connecting rod.
    *   Using $V_B = V_A + V_{B/A}$:
        *   Draw $V_A$ from O.
        *   From the end of $V_A$, draw a line representing $V_{B/A}$ which is perpendicular to the link AB.
        *   This line must intersect the line representing $V_B$ (drawn from O).
5.  **Determine $\omega_{AB}$:** The magnitude of $V_{B/A}$ is $AB \times \omega_{AB}$. Once $V_{B/A}$ is found from the diagram, $\omega_{AB}$ can be calculated.

**Reference:** Shigley & Uicker (2010) "Theory of Machines and Mechanisms" provides detailed examples of velocity analysis for the slider-crank mechanism.

### 5.2 Velocity of Intermediate Points on a Link

The velocity of any intermediate point P on a link AB can be found using the relative velocity equation:

$V_P = V_A + V_{P/A}$

where $V_{P/A} = \omega_{AB} \times \vec{r}_{AP}$, and $\omega_{AB}$ is the angular velocity of link AB.

**Example:** If link AB is rotating with angular velocity $\omega_{AB}$ and we know the velocity of point A ($V_A$), we can find the velocity of point P, which is on AB.

**Reference:** Norton (2009) "Kinematics and Dynamics of Machinery" covers the velocity analysis of points on links, including intermediate points.

### 5.3 Mechanisms with More Than Four Links

The same principles of relative velocity apply to mechanisms with more than four links (e.g., six-bar mechanisms). The complexity increases with the number of links, but the systematic application of the relative velocity equation $V_A = V_B + V_{A/B}$ for each link pair will lead to the solution.

**Example:** A Geneva mechanism. The analysis would involve determining the velocity of the driving pin relative to the Geneva wheel and vice-versa.

**Reference:** Wilson & Sadler (2005) "Kinematics and Dynamics of Machinery" provides examples of velocity analysis for complex mechanisms.

## 6. Instantaneous Center of Velocity (IC) Method

The instantaneous center of velocity (IC) is a point on a moving link that has zero velocity at a given instant. The velocity of any point on the link is proportional to its distance from the IC, and the direction of velocity is perpendicular to the line connecting the point to the IC.

### 6.1 Definition and Properties

*   **Definition:** The instantaneous center of velocity (IC) of a rigid body moving in a plane is the instantaneous point about which the body is rotating.
*   **Key Property:** At any instant, all points on a rigid link moving in a plane can be considered to be rotating about the instantaneous center of velocity of that link.
*   **Location:** The IC can be fixed (on the frame) or moving (on the link itself).

### 6.2 Locating the Instantaneous Center

The location of the IC can be determined using the following rules:

1.  **Rule 1: Two points with known velocities:** If two points on a link have known velocities (magnitude and direction), the IC is located at the intersection of the perpendiculars to these velocities.
2.  **Rule 2: One point with known velocity and the link's angular velocity:** If the velocity of one point on a link and the angular velocity of the link are known, the IC can be located. The IC will be at a distance $r = V/(\omega \times r)$ from the point, along the line joining the point to the IC, and perpendicular to the velocity vector.
3.  **Rule 3: Parallel velocities:** If two points on a link have parallel velocities, the IC lies at infinity in the direction perpendicular to the velocities. This happens when the link is translating with no rotation.
4.  **Rule 4: Perpendicular velocities:** If two points on a link have velocities that are perpendicular to each other and to the link, the IC lies at the intersection of the line joining the points and the perpendicular to one of the velocities.
5.  **Rule 5: Collinear points:** If three points on a link are collinear, and their velocities are known, the IC can be located by applying the relative velocity concept.

### 6.3 Kennedy's Theorem

Kennedy's theorem states that for three rigid bodies moving in a plane, their instantaneous centers of velocity (IC) are collinear, provided that the three bodies are moving independently.

**Application:** This theorem is useful for locating ICs in complex mechanisms by establishing relationships between the ICs of different links.

### 6.4 Advantages of the IC Method

*   Often simpler and quicker for certain types of mechanisms.
*   Provides a direct way to determine the velocity of any point on a link.
*   Useful for understanding the overall motion of the mechanism.

**Reference:** Rattan S. S. (2009) "Theory of Machines" provides a comprehensive explanation of the IC method and Kennedy's theorem.

### 6.5 Example using IC Method: Four-Bar Mechanism

Consider a four-bar mechanism with links 1 (fixed), 2 (crank), 3 (connecting rod), and 4 (rocker).

*   **Link 2 (Crank OA):** IC of link 2 ($I_{23}$) lies at O, as it rotates about a fixed point.
*   **Link 4 (Rocker BD):** IC of link 4 ($I_{43}$) lies at the intersection of the perpendiculars to $V_B$ and $V_D$. Since B is on the ground, its velocity is zero. $V_D$ is tangential to the arc traced by D.
*   **Link 3 (Connecting Rod AB):** To find the IC of link 3 ($I_{34}$), we need to locate two points with known velocities or directions.
    *   We know that the velocity of A ($V_A$) is perpendicular to OA.
    *   We know that the velocity of B ($V_B$) is perpendicular to the fixed link (assuming it's a slider).
    *   Therefore, $I_{34}$ is the intersection of the perpendicular to $V_A$ (which is along OA) and the perpendicular to $V_B$ (which is along the path of B).
    *   Alternatively, we can use Kennedy's theorem. $I_{12}$ is at O. $I_{23}$ is the IC of the connecting rod relative to the crank. $I_{13}$ is the IC of the connecting rod relative to the ground. $I_{12}$, $I_{23}$, and $I_{13}$ are collinear. Similarly, $I_{14}$ is the IC of the rocker relative to the ground. $I_{34}$ is the IC of the connecting rod relative to the rocker. $I_{13}$, $I_{34}$, and $I_{14}$ are collinear.

**Velocity Calculation using IC:** Once $I_{34}$ is located, the velocity of any point P on the connecting rod AB can be found as $V_P = \omega_{34} \times PI_{34}$, where $\omega_{34}$ is the angular velocity of the connecting rod.

## 7. Practice Questions and Exercises

**Question 1:**
A four-bar mechanism is shown in the figure (assume a diagram is provided with lengths and crank angle). The crank OA of length 50 mm rotates at 100 rpm clockwise. Determine the linear velocity of the slider B and the angular velocity of the connecting rod AB.
(Assume specific lengths for AB, BC and slider path).

**Answer 1:**
*   **Calculations:**
    *   Angular velocity of crank OA, $\omega_{OA} = 2\pi \times 100 / 60$ rad/s (clockwise).
    *   Velocity of point A, $V_A = \omega_{OA} \times OA$.
    *   Draw the velocity diagram using the relative velocity method.
    *   Measure $V_B$ and $V_{B/A}$.
    *   Angular velocity of AB, $\omega_{AB} = V_{B/A} / AB$.
*   **Example Numerical Answer (Illustrative, requires drawing):**
    *   If $OA = 50$ mm, $\omega_{OA} = 10.47$ rad/s clockwise.
    *   $V_A = 10.47 \times 0.05 = 0.5235$ m/s.
    *   Assume, after drawing the diagram, $V_B = 0.4$ m/s (horizontal) and $V_{B/A} = 0.6$ m/s (perpendicular to AB).
    *   $\omega_{AB} = 0.6 / (length of AB in meters)$.

**Question 2:**
In a slider-crank mechanism, the crank is 100 mm long and rotates at 300 rpm counter-clockwise. The connecting rod is 400 mm long. Determine the velocity of the piston when the crank has turned through an angle of 60 degrees from the inner dead centre.

**Answer 2:**
*   **Input:** Crank length $r = 0.1$ m, $\omega_{crank} = 2\pi \times 300 / 60 = 31.42$ rad/s (CCW). Connecting rod length $l = 0.4$ m. Crank angle $\theta = 60^\circ$.
*   **Velocity of Crank Pin A:** $V_A = \omega_{crank} \times r = 31.42 \times 0.1 = 3.142$ m/s. $V_A$ is perpendicular to the crank.
*   **Velocity of Piston B:** $V_B$ is horizontal.
*   **Velocity of B relative to A ($V_{B/A}$):** This is perpendicular to the connecting rod AB.
*   **Using the velocity diagram:**
    *   Draw $V_A$ at $60^\circ$ to the horizontal.
    *   From the end of $V_A$, draw a line perpendicular to the connecting rod.
    *   From the origin, draw a horizontal line for $V_B$.
    *   The intersection gives $V_B$ and $V_{B/A}$.
*   **Expected Output:** $V_B \approx 2.73$ m/s (This requires solving the geometry from the space diagram and then constructing the velocity diagram).

**Question 3:**
Explain the concept of Instantaneous Center of Velocity (IC) and its application in velocity analysis of mechanisms. Use the IC method to find the velocity of the midpoint of the connecting rod in a slider-crank mechanism.

**Answer 3:**
*   **IC Concept:** Explained in Section 6.1.
*   **Application:** Explained in Section 6.2 and 6.4.
*   **Midpoint Velocity:**
    1.  Locate the IC of the connecting rod ($I_{34}$).
    2.  Let M be the midpoint of the connecting rod.
    3.  The velocity of M ($V_M$) is perpendicular to the line segment $MI_{34}$.
    4.  The magnitude is $V_M = \omega_{AB} \times MI_{34}$.
    5.  Here, $\omega_{AB}$ can be found from $V_{B/A} = \omega_{AB} \times AB$.

## 8. Important Points to Remember

*   Velocities are vector quantities; always consider both magnitude and direction.
*   The relative velocity equation $V_A = V_B + V_{A/B}$ is fundamental.
*   The velocity of a point on a link is perpendicular to the line joining the point to the center of rotation.
*   For graphical analysis, a clear space diagram and an accurate velocity diagram are essential.
*   The Instantaneous Center (IC) method offers an alternative and often efficient approach to velocity analysis.
*   Kennedy's theorem is a powerful tool for locating ICs in complex mechanisms.
*   When using graphical methods, ensure the scales are appropriate and measurements are precise.
*   Always check the direction of angular velocities (clockwise/counter-clockwise) and ensure consistency.

## 9. Conclusion

Velocity analysis is a crucial step in understanding the kinematics of mechanisms. The relative velocity method and the instantaneous center method provide powerful tools for determining the linear and angular velocities of various links in mechanisms with up to six links. Mastering these techniques is essential for the successful design and analysis of machinery.

**Alignment with Course Outcomes:**
*   **CO2:** This entire module directly contributes to performing velocity and acceleration analysis of various planar mechanisms. The knowledge gained here will be foundational for acceleration analysis as well.
*   **CO5:** Understanding the velocities of different parts of a mechanism is critical for its physical realization and prototyping. It helps in selecting appropriate actuators and understanding the dynamic behavior during operation.

This concludes the study notes for Module 2, Topic: Relative Velocity. Refer to the listed textbooks for further details and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
