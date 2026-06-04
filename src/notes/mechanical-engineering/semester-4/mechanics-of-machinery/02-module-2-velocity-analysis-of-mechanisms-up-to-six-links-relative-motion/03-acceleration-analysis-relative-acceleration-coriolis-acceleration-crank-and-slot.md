---
title: "Acceleration analysis- Relative acceleration - Coriolis acceleration (Crank and slotted lever and Whitworth quick return mechanism)"
subject: "MECHANICS OF MACHINERY"
module: "Module 2: Velocity analysis of mechanisms (Up to six links)– relative motion "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fdf"
status: "completed"
scrapedAt: "2026-05-20T17:55:11.228Z"
---
# Mechanics of Machinery - Module 2: Velocity Analysis of Mechanisms (Up to Six Links) - Relative Motion

## Topic: Acceleration Analysis - Relative Acceleration - Coriolis Acceleration

---

### Introduction to Acceleration Analysis

This section delves into the acceleration analysis of mechanisms, building upon the velocity analysis covered previously. We will explore the concept of relative acceleration between links and introduce the significant component of Coriolis acceleration. This knowledge is crucial for understanding the dynamic behavior of machines and is directly linked to Course Outcomes CO1 and CO2, requiring the ability to perform acceleration analysis (K4).

---

### 1. Relative Acceleration

**Key Concept:** When analyzing the acceleration of a point or link relative to another, we employ vector addition of accelerations. Just as velocity analysis uses the vector equation $\vec{v}_B = \vec{v}_A + \vec{v}_{B/A}$, acceleration analysis uses:

$\vec{a}_B = \vec{a}_A + \vec{a}_{B/A}$

Where:
*   $\vec{a}_B$: Absolute acceleration of point B.
*   $\vec{a}_A$: Absolute acceleration of point A.
*   $\vec{a}_{B/A}$: Acceleration of point B relative to point A.

**Breakdown of Relative Acceleration ($\vec{a}_{B/A}$):**

The relative acceleration of point B with respect to point A can be further decomposed into two components:

$\vec{a}_{B/A} = \vec{a}_{tangential} + \vec{a}_{radial}$

*   **Tangential Acceleration ($\vec{a}_{tangential}$ or $\vec{a}_{t}$):** This component is due to the change in magnitude of the velocity of point B as it moves along the path relative to A. It is always perpendicular to the relative velocity vector $\vec{v}_{B/A}$.
    *   **Formula:** $\vec{a}_{tangential} = \alpha_{B/A} \times \vec{r}_{B/A}$
        *   $\alpha_{B/A}$: Angular acceleration of link containing B with respect to link containing A.
        *   $\vec{r}_{B/A}$: Position vector from A to B.
    *   **Magnitude:** $a_{tangential} = \alpha_{B/A} \times r_{B/A}$ (where $r_{B/A}$ is the length of the link/distance)

*   **Radial (Centripetal) Acceleration ($\vec{a}_{radial}$ or $\vec{a}_{r}$):** This component is due to the change in direction of the velocity of point B as it moves along the path relative to A. It is always directed from B towards A (along the line connecting A and B).
    *   **Formula:** $\vec{a}_{radial} = \vec{\omega}_{B/A} \times (\vec{\omega}_{B/A} \times \vec{r}_{B/A})$
        *   $\vec{\omega}_{B/A}$: Angular velocity of link containing B with respect to link containing A.
    *   **Magnitude:** $a_{radial} = \omega_{B/A}^2 \times r_{B/A}$ (where $\omega_{B/A}$ is the angular velocity and $r_{B/A}$ is the length/distance)

**Important Point:** For acceleration analysis, it is often more convenient to express the absolute acceleration of a point on a moving link using the following general form:

$\vec{a}_B = \vec{a}_A + \vec{a}_{tangential} + \vec{a}_{radial}$

$\vec{a}_B = \vec{a}_A + (\alpha_{AB} \times \vec{r}_{AB}) + (\vec{\omega}_{AB} \times (\vec{\omega}_{AB} \times \vec{r}_{AB}))$

Where:
*   $\vec{a}_{AB}$: Acceleration of point B relative to point A.
*   $\vec{r}_{AB}$: Position vector from A to B.
*   $\vec{\omega}_{AB}$: Angular velocity of link AB.
*   $\vec{\alpha}_{AB}$: Angular acceleration of link AB.

**Example (Simple Link):**
Consider a link AB rotating with angular velocity $\omega$ and angular acceleration $\alpha$. The acceleration of point B with respect to point A is:
$\vec{a}_{B/A} = \vec{a}_{radial} + \vec{a}_{tangential}$
$\vec{a}_{B/A} = (\omega^2 \times r_{AB} \text{ directed from B to A}) + (\alpha \times r_{AB} \text{ directed tangentially})$

---

### 2. Coriolis Acceleration

**Key Concept:** Coriolis acceleration arises when a point or body is moving along a path that is itself rotating or translating with angular velocity. It represents the acceleration component that appears only in the non-inertial (rotating) frame of reference.

**When does Coriolis Acceleration occur?**
Coriolis acceleration exists when:
*   A point moves on a rotating link.
*   A link rotates relative to another rotating link.

**Formula:**
The Coriolis acceleration ($\vec{a}_C$) is given by:

$\vec{a}_C = 2 \vec{\omega} \times \vec{v}_{rel}$

Where:
*   $\vec{\omega}$: Angular velocity of the frame of reference (the rotating link).
*   $\vec{v}_{rel}$: Velocity of the point relative to the rotating frame (i.e., its velocity along the rotating link).

**Direction of Coriolis Acceleration:**
The direction of $\vec{a}_C$ is perpendicular to both $\vec{\omega}$ and $\vec{v}_{rel}$. Its direction can be determined using the right-hand rule:
*   Point the fingers of your right hand in the direction of $\vec{\omega}$.
*   Curl your fingers towards the direction of $\vec{v}_{rel}$.
*   Your thumb will point in the direction of $\vec{a}_C$.

**Magnitude of Coriolis Acceleration:**
$a_C = 2 \omega v_{rel}$

**Total Acceleration Equation for a Point on a Rotating Link:**
The total acceleration of a point B moving on a rotating link OA, where link OA has angular velocity $\vec{\omega}$ and the point B has velocity $\vec{v}_{B/OA}$ relative to link OA, is given by:

$\vec{a}_B = \vec{a}_O + \vec{a}_{radial} + \vec{a}_{tangential} + \vec{a}_C$

$\vec{a}_B = \vec{a}_O + (\vec{\omega} \times (\vec{\omega} \times \vec{r}_{OB})) + (\vec{\alpha} \times \vec{r}_{OB}) + 2\vec{\omega} \times \vec{v}_{B/OA}$

Where:
*   $\vec{a}_O$: Absolute acceleration of the origin O.
*   $\vec{\omega}$: Angular velocity of the rotating link OA.
*   $\vec{\alpha}$: Angular acceleration of the rotating link OA.
*   $\vec{r}_{OB}$: Position vector from O to B.
*   $\vec{v}_{B/OA}$: Velocity of point B relative to link OA.

**Important Note:** Coriolis acceleration is often a crucial component in mechanisms where sliding and rotation occur simultaneously, such as cam-follower systems and specific quick-return mechanisms. This aligns with CO2.

---

### 3. Acceleration Analysis of Specific Mechanisms

We will now apply these concepts to analyze the acceleration in two important mechanisms: the Crank and Slotted Lever Mechanism and the Whitworth Quick Return Mechanism.

---

#### 3.1 Crank and Slotted Lever Mechanism

**Mechanism Description:**
This mechanism is used to convert rotary motion into quick reciprocating motion with a dwell. It consists of:
*   A crank (OA).
*   A slotted lever (OB) pivoted at O.
*   A block (P) that slides in the slot of the lever and is attached to the crank pin.

**Key Features:**
*   The block P moves along the slot in the lever OB.
*   The lever OB rotates about fixed pivot O.
*   The crank OA rotates at a constant angular velocity (or with known angular acceleration).

**Acceleration Analysis Approach:**

1.  **Identify the links and points of interest:** Typically, we are interested in the acceleration of the block (P) and the angular acceleration of the slotted lever (OB).
2.  **Establish a reference frame:** Usually, the fixed frame is chosen.
3.  **Apply the relative acceleration equation:** Consider point P on the crank and point P on the slotted lever.
    *   Let $\omega_{OA}$ and $\alpha_{OA}$ be the angular velocity and acceleration of the crank OA.
    *   Let $\omega_{OB}$ and $\alpha_{OB}$ be the angular velocity and acceleration of the slotted lever OB.
    *   Let $v_{P/OB}$ and $a_{P/OB}$ be the velocity and acceleration of P relative to the slotted lever OB (i.e., along the slot).

**Acceleration of point P (on the crank):**
$\vec{a}_P = \vec{a}_O + \vec{a}_{radial, PA} + \vec{a}_{tangential, PA}$
$\vec{a}_P = 0 + (\omega_{OA}^2 \times OA \text{ from P to O}) + (\alpha_{OA} \times OA \text{ tangential})$

**Acceleration of point P (on the slotted lever):**
Since P is sliding along the slot of lever OB, which is rotating with $\omega_{OB}$ and $\alpha_{OB}$:
$\vec{a}_P = \vec{a}_O + \vec{a}_{radial, PO} + \vec{a}_{tangential, PO} + \vec{a}_C$
$\vec{a}_P = 0 + (\omega_{OB}^2 \times OP \text{ from P to O}) + (\alpha_{OB} \times OP \text{ tangential}) + 2\vec{\omega}_{OB} \times \vec{v}_{P/OB}$

**Equating the accelerations of P:**
The absolute acceleration of point P must be the same, regardless of whether we consider it as part of the crank or the slotted lever. By equating the two expressions for $\vec{a}_P$, we can solve for unknown angular accelerations ($\alpha_{OB}$) and relative accelerations ($a_{P/OB}$).

**Graphical Method (More Common):**
The acceleration analysis is typically performed using a graphical method (acceleration polygon).
*   Draw the velocity polygon first to determine velocities and relative velocities.
*   Construct the acceleration vector diagram. Each link's acceleration is represented by a vector.
    *   The acceleration of a point on a link rotating with angular acceleration $\alpha$ and angular velocity $\omega$ has a radial component ($\omega^2 r$) and a tangential component ($\alpha r$).
    *   For points moving on rotating links (like P on OB), the Coriolis component ($2\omega v_{rel}$) must be included.

**Important Considerations for Crank and Slotted Lever:**
*   The velocity of the block along the slot ($v_{P/OB}$) is required to calculate the Coriolis acceleration. This is obtained from the velocity analysis.
*   The direction of the Coriolis acceleration is perpendicular to the slot and the angular velocity of the lever.

**Textbook Reference:** Ballaney (2005) and Rattan (2009) provide detailed graphical solutions for the Crank and Slotted Lever mechanism, including acceleration analysis.

---

#### 3.2 Whitworth Quick Return Mechanism

**Mechanism Description:**
This mechanism is also designed for quick return motion, commonly found in shaping machines. It provides a slower cutting stroke and a faster return stroke. It consists of:
*   A crank (OA).
*   A sliding block (P) on the crank.
*   A rocking lever (OB) with a slot.
*   A connecting rod (PQ) connecting the sliding block P to a point Q on the rocking lever.

**Key Features:**
*   The point Q on the rocking lever OB moves in a circular path.
*   The block P slides along the crank OA.
*   The connecting rod PQ is of fixed length.

**Acceleration Analysis Approach:**

1.  **Identify links and points:** Crank OA, rocking lever OB, slider P, connecting rod PQ, point Q.
2.  **Reference frame:** Fixed frame.
3.  **Relative acceleration equations:**
    *   **Acceleration of P:** Consider P as part of the crank OA.
        $\vec{a}_P = \vec{a}_O + \vec{a}_{radial, PA} + \vec{a}_{tangential, PA}$
        $\vec{a}_P = 0 + (\omega_{OA}^2 \times OP \text{ from P to O}) + (\alpha_{OA} \times OP \text{ tangential})$
    *   **Acceleration of Q:** Consider Q on the rocking lever OB.
        $\vec{a}_Q = \vec{a}_O + \vec{a}_{radial, QO} + \vec{a}_{tangential, QO}$
        $\vec{a}_Q = 0 + (\omega_{OB}^2 \times OQ \text{ from Q to O}) + (\alpha_{OB} \times OQ \text{ tangential})$
    *   **Acceleration of P and Q (via connecting rod PQ):**
        $\vec{a}_P = \vec{a}_Q + \vec{a}_{PQ/Q}$
        $\vec{a}_{PQ/Q} = \vec{a}_{radial, PQ} + \vec{a}_{tangential, PQ}$ (since PQ is a rigid link with no relative sliding)
        $\vec{a}_P = \vec{a}_Q + (\omega_{PQ}^2 \times PQ \text{ from P to Q}) + (\alpha_{PQ} \times PQ \text{ tangential})$

**Solving for Unknowns:**
By equating the expressions for $\vec{a}_P$ and $\vec{a}_Q$, we can form a system of equations that can be solved for unknown angular accelerations ($\alpha_{OA}$, $\alpha_{OB}$, $\alpha_{PQ}$) and linear accelerations.

**Coriolis Acceleration in Whitworth:**
While the crank OA rotates with $\omega_{OA}$, the point P is sliding along OA. However, the primary application of Coriolis acceleration is when a point moves *along* a rotating link. In the Whitworth mechanism, the point P is on the rotating crank, and the motion of P relative to O is purely along the crank. So, there's no additional Coriolis acceleration component associated with P's motion along OA.

**Crucial Point:** The complexity arises from the connecting rod PQ. The acceleration of P and Q are related through the rigid body motion of PQ.

**Graphical Method for Whitworth:**
1.  **Velocity Analysis:** Construct velocity polygons to find all velocities and relative velocities. This is essential to calculate the Coriolis acceleration if any exists (though not directly in the standard Whitworth linkages as described here, it might appear in variations).
2.  **Acceleration Polygon:**
    *   Draw the acceleration of P based on the crank OA.
    *   Draw the acceleration of Q based on the rocking lever OB.
    *   Draw the acceleration of P relative to Q (which is the acceleration of PQ). This component has a radial and tangential part, depending on $\omega_{PQ}$ and $\alpha_{PQ}$.
    *   By assembling these vectors, you can solve for the unknown accelerations.

**Textbook Reference:** Rattan (2009) and Ghosh (2008) often illustrate the graphical solution for acceleration analysis of the Whitworth mechanism. Shigley & Uicker (2010) provides a more analytical approach to complex mechanisms.

---

### Practice Questions and Exercises

**Question 1:**
In a crank and slotted lever mechanism, the crank OA is 50 mm long and rotates at 300 rpm clockwise. The slotted lever OB is 200 mm long. At a certain instant, the crank makes an angle of 60° with the horizontal. The block P slides in the slot and is attached to the crank pin. The velocity of the block along the slot is 3 m/s. Determine the Coriolis acceleration of the block P at this instant.

**Given:**
*   Length of crank OA = 50 mm = 0.05 m
*   Speed of crank = 300 rpm = $300/60 \times 2\pi$ rad/s = $10\pi$ rad/s
*   Velocity of block along the slot ($v_{P/OB}$) = 3 m/s
*   Angle of crank with horizontal = 60°

**Solution:**
The Coriolis acceleration is given by $a_C = 2 \omega v_{rel}$.
Here, $\omega$ is the angular velocity of the slotted lever ($\omega_{OB}$), and $v_{rel}$ is the velocity of the block along the slot ($v_{P/OB}$).
To find $\omega_{OB}$, we need to perform velocity analysis of the mechanism. Let's assume for this question that we've already found $\omega_{OB}$ from velocity analysis. If $\omega_{OB}$ was, say, $5\pi$ rad/s clockwise.

Then, $a_C = 2 \times (5\pi \text{ rad/s}) \times (3 \text{ m/s})$
$a_C = 30\pi$ m/s²

**Direction:** The direction of Coriolis acceleration is perpendicular to both $\omega_{OB}$ and $v_{P/OB}$. If $\omega_{OB}$ is clockwise and $v_{P/OB}$ is away from O along the slot, the Coriolis acceleration will be directed according to the right-hand rule.

---

**Question 2:**
Consider a point B moving on a link OA. Link OA is rotating with an angular velocity $\omega_{OA}$ and angular acceleration $\alpha_{OA}$. Point B is at a distance $r$ from O and has a velocity $v_{rel}$ along OA away from O. Derive an expression for the absolute acceleration of point B.

**Solution:**
Absolute acceleration of B is given by:
$\vec{a}_B = \vec{a}_O + \vec{a}_{radial} + \vec{a}_{tangential} + \vec{a}_C$

Assuming O is a fixed point, $\vec{a}_O = 0$.
*   **Radial Acceleration:** Due to rotation of OA. Directed from B to O.
    $a_{radial} = \omega_{OA}^2 \times r$
*   **Tangential Acceleration:** Due to angular acceleration of OA. Perpendicular to OA.
    $a_{tangential} = \alpha_{OA} \times r$
*   **Coriolis Acceleration:** Due to the motion of B along the rotating link OA.
    $a_C = 2 \omega_{OA} v_{rel}$
    The direction is perpendicular to both $\omega_{OA}$ and $v_{rel}$ (using the right-hand rule).

So, the absolute acceleration of point B has three components: radial, tangential, and Coriolis. The vector sum of these will give the absolute acceleration.

---

### Key Points to Remember

*   **Vector Nature:** Acceleration analysis is fundamentally a vector problem. Always consider the magnitude and direction.
*   **Relative Motion:** Decompose motion into absolute and relative components.
*   **Coriolis Acceleration:** Always consider it when a point moves on a rotating body or when a body rotates relative to another rotating body. Its magnitude is $2\omega v_{rel}$.
*   **Graphical vs. Analytical:** Both methods can be used. Graphical methods are intuitive for mechanisms, while analytical methods are more suited for complex or computer-aided analysis.
*   **Velocity Analysis is Pre-requisite:** You must correctly determine velocities (linear and angular) before starting acceleration analysis, as these are inputs for acceleration calculations (especially for Coriolis and radial components).
*   **Components of Acceleration:** For a point on a rotating link, acceleration has radial ($\omega^2 r$), tangential ($\alpha r$), and potentially Coriolis ($2\omega v_{rel}$) components.

---

### Alignment with Course Outcomes

*   **CO1: Calculate degrees of freedom of mechanisms and Interpret their inversions. (Knowledge Level: K3)**
    While this module focuses on acceleration analysis, understanding the DoF is a precursor to analyzing any mechanism. The mechanisms discussed (Crank and Slotted Lever, Whitworth) are examples of mechanisms with specific DoF.

*   **CO2: Perform velocity and acceleration analysis of various planar mechanisms (Knowledge Level: K4)**
    This entire module directly addresses this outcome. We have covered the principles of relative acceleration and introduced Coriolis acceleration, essential for analyzing mechanisms like the Crank and Slotted Lever and Whitworth QR mechanism. The practice questions require performing these calculations.

*   **CO3: Construct a mechanism for a specified output motion (Knowledge Level: K4)**
    Understanding the acceleration characteristics of mechanisms helps in designing them for specific dynamic performance requirements, such as controlling the acceleration of moving parts to reduce vibrations or inertial forces.

*   **CO5: Create prototype of various mechanisms. (Knowledge Level: K6)**
    Accurate acceleration analysis is vital for designing and building functional prototypes. Knowing the forces generated due to acceleration (which depend on acceleration) is crucial for selecting appropriate materials, bearings, and actuation systems for a prototype.

---

### Recommended Reading (as per provided textbooks)

*   **Ballaney P. L. (2005) - Theory of Machines and Mechanisms:** Chapters on velocity and acceleration analysis, with specific examples of mechanisms including the Crank and Slotted Lever.
*   **Rattan S. S. (2009) - Theory of Machines:** Likely covers graphical methods for acceleration analysis and provides detailed case studies of mechanisms like the Crank-Rocking Mechanism (similar to Crank and Slotted Lever) and Quick Return Mechanisms.
*   **Ghosh A. (2008) - Theory of Mechanisms and Machines:** Offers a good balance of analytical and graphical approaches to acceleration analysis.

---

This set of notes provides a foundational understanding of acceleration analysis, with a specific focus on Coriolis acceleration and its application to important mechanisms. Mastering these concepts is key to progressing in the study of machine dynamics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
