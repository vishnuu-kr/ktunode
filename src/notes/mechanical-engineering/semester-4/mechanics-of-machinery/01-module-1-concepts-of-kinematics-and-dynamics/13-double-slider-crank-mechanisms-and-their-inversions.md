---
title: "Double slider crank Mechanisms and their Inversions."
subject: "MECHANICS OF MACHINERY"
module: "Module 1: Concepts of Kinematics and Dynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fd8"
status: "completed"
scrapedAt: "2026-05-20T17:55:06.818Z"
---
# MECHANICS OF MACHINERY

## Module 1: Concepts of Kinematics and Dynamics

## Topic: Double Slider Crank Mechanisms and Their Inversions

---

### 1. Introduction to Double Slider Crank Mechanisms

**Key Concept:** A double slider crank mechanism is a type of four-bar linkage where two of the revolute (pin) joints are replaced by prismatic (sliding) joints. This results in a mechanism with two sliders and two cranks (or links that effectively act as cranks).

**Definition:**
*   **Mechanism:** A mechanical arrangement of interconnected parts designed to transmit or modify motion and force.
*   **Kinematics:** The study of the motion of mechanisms without considering the forces that cause the motion.
*   **Dynamics:** The study of motion considering the forces that cause the motion.
*   **Slider-Crank Mechanism:** A fundamental mechanism consisting of a crank, connecting rod, piston, and cylinder, where the crank rotates and the piston reciprocates.
*   **Double Slider Crank Mechanism:** A mechanism formed by replacing two revolute joints of a general four-bar linkage with sliding joints.

**Classification based on the nature of the joints:**
*   **First Class:** Two cranks and two sliders.
*   **Second Class:** One crank, one slider, and two grooved guides.

**Key Aspects:**
*   **Degrees of Freedom (DOF):** The number of independent inputs required to define the position of all links of a mechanism. For mechanisms, Gruebler's formula is often used to determine DOF for planar mechanisms:
    $DOF = 3(n-1) - 2j_1 - j_2$
    Where:
    *   $n$ = number of links
    *   $j_1$ = number of 1-DOF joints (revolute or prismatic)
    *   $j_2$ = number of 2-DOF joints (rare in planar mechanisms)

    For a double slider crank mechanism (typically with 4 links: a fixed frame, two sliders, and a connecting link), if it has four 1-DOF joints (two revolutes and two sliders, or two revolutes and two prismatic joints), the DOF is:
    $DOF = 3(4-1) - 2(4) - 0 = 3(3) - 8 = 9 - 8 = 1$
    This means that if one link (e.g., a crank) is driven, the motion of all other links is determined.

**Referencing Textbooks:**
*   **Ballaney P. L. (2005):** Chapter on Slider Crank Mechanisms and its variations, including double slider crank mechanisms.
*   **Rattan S. S. (2009):** Discusses basic mechanisms and their adaptations, including slider-crank type mechanisms.
*   **Ghosh A. (2008):** Provides a foundational understanding of linkages and mechanisms, leading into more complex types like double slider crank.

---

### 2. Types of Double Slider Crank Mechanisms

Double slider crank mechanisms can be classified based on how the sliding pairs are arranged. The most common types are derived from the basic four-bar linkage by replacing two revolute joints with prismatic joints.

#### 2.1. First Class Double Slider Crank Mechanism

This type is characterized by having two revolute joints and two prismatic joints.

**2.1.1. Scotch Yoke Mechanism**

*   **Configuration:** One crank (link 1), one connecting rod (link 2), and one slider (link 3) are constrained to reciprocate in a perpendicular direction. The crank is attached to the slider by a pin joint, and the other end of the crank is attached to a rotating driver.
*   **Links:**
    *   Link 1: Fixed Link (Frame)
    *   Link 2: Crank (Rotating)
    *   Link 3: Yoke (Slider)
    *   Link 4: Pin connecting crank and yoke.
*   **Motion Conversion:** Converts rotary motion into simple harmonic motion (SHM) of the slider if the crank rotates at a constant angular velocity.
*   **DOF:** 1
*   **Example:** Used in pumps, engines, and as a method to produce SHM.

    **Diagrammatic Representation (Conceptual):**
    Imagine a rotating crank. The pin at the end of the crank is inserted into a slot in a yoke. The yoke is constrained to slide in a straight line. As the crank rotates, the yoke reciprocates.

    **Kinematic Analysis (Conceptual):**
    Let the crank have length $r$ and rotate with angular velocity $\omega$. The position of the pin can be described by $x = r \cos(\omega t)$ and $y = r \sin(\omega t)$. The yoke slides along one of these axes, say the y-axis. The position of the yoke slider will be $y$. Therefore, the displacement of the yoke is $y = r \sin(\omega t)$.
    *   Velocity: $v_y = \frac{dy}{dt} = r \omega \cos(\omega t)$
    *   Acceleration: $a_y = \frac{d^2y}{dt^2} = -r \omega^2 \sin(\omega t)$
    This is indeed simple harmonic motion.

**2.1.2. Elliptical Trammel (Or Oval Lathe)**

*   **Configuration:** A planar mechanism that produces elliptical motion. It consists of a slotted link (frame) and a slider that moves within the slot. A second slider is attached to the first by a connecting rod, and this second slider is constrained to move in a straight line perpendicular to the first slider's motion.
*   **Links:**
    *   Link 1: Fixed Link (Frame with two perpendicular slots)
    *   Link 2: Slider 1 (Moves in one slot)
    *   Link 3: Connecting Link (Linkage)
    *   Link 4: Slider 2 (Moves in the other slot)
*   **Motion Conversion:** Converts the combined reciprocating motions of two sliders into elliptical motion of a point on the connecting link. If the connecting link has a fixed ratio of distances from the sliders, and the sliders reciprocate sinusoidally with the same amplitude and phase, the tracing point describes an ellipse.
*   **DOF:** 1 (if one slider's motion is prescribed, or if the connecting link is driven at a specific point).
*   **Example:** Used in older lathes for cutting ellipses and in some drafting instruments.

    **Kinematic Analysis (Conceptual):**
    Consider a point P on the connecting link AB of length $L$. Let A be a slider moving along the x-axis, and B be a slider moving along the y-axis. Let $x_A$ be the position of slider A and $y_B$ be the position of slider B.
    $x_A = r \sin(\omega t)$
    $y_B = r \cos(\omega t)$ (assuming they start with a phase difference of 90 degrees and same amplitude)
    Let P divide AB in the ratio $m:n$, so AP = $mL$ and PB = $nL$. The coordinates of P are:
    $x_P = \frac{n x_A + m x_B}{m+n}$ (Here $x_B$ is the position of B on the y-axis, so $x_B=0$)
    $y_P = \frac{n y_A + m y_B}{m+n}$ (Here $y_A$ is the position of A on the x-axis, so $y_A=0$)
    $x_P = \frac{n r \sin(\omega t)}{m+n}$
    $y_P = \frac{m r \cos(\omega t)}{m+n}$
    Let $X = x_P$ and $Y = y_P$.
    $\frac{X^2}{(n r / (m+n))^2} + \frac{Y^2}{(m r / (m+n))^2} = \sin^2(\omega t) + \cos^2(\omega t) = 1$
    This is the equation of an ellipse.

**2.1.3. Oldham's Coupling**

*   **Configuration:** A mechanism used to connect two shafts that are parallel but have a lateral offset. It consists of two cranks (on the shafts) and an intermediate slotted disk.
*   **Links:**
    *   Link 1: Fixed Link (Frame)
    *   Link 2: Input Shaft Crank
    *   Link 3: Intermediate Slotted Disk
    *   Link 4: Output Shaft Crank
*   **Motion Conversion:** Transmits rotary motion between two shafts with a fixed lateral offset. The intermediate disk oscillates as it slides in the slots of the cranks.
*   **DOF:** 1
*   **Example:** Used to connect parallel shafts with a small offset, for example, in early printing presses or some types of windmills.

    **Kinematic Analysis (Conceptual):**
    Let the input shaft rotate with angular velocity $\omega$. The crank on the input shaft has a pin that engages in a slot of the intermediate disk. The intermediate disk has a slot perpendicular to the first. The crank on the output shaft has a pin that engages in the second slot.
    The motion of the intermediate disk is complex, but it allows the output shaft to rotate at the same speed as the input shaft.

    **Referencing Textbooks:**
    *   **Ballaney P. L. (2005):** Likely has a dedicated section on Oldham's Coupling as a special case of mechanisms.
    *   **Rattan S. S. (2009):** Covers various couplings and mechanisms for transmitting motion, including Oldham's Coupling.
    *   **Wilson & Sadler (2005):** Provides detailed analysis and graphical methods for understanding the motion of such mechanisms.

#### 2.2. Second Class Double Slider Crank Mechanism

This type is characterized by having one revolute joint, three prismatic joints, and a connecting link that slides in grooves.

**2.2.1. Vibrating Ram Mechanism**

*   **Configuration:** A crank rotates and drives a slider. This slider is connected via a link to another slider that is constrained to move in a groove. The groove itself is typically attached to a rocking frame.
*   **Links:**
    *   Link 1: Fixed Link (Frame)
    *   Link 2: Crank (Rotating)
    *   Link 3: Connecting Rod (Slider Crank linkage)
    *   Link 4: Slider 1 (reciprocates)
    *   Link 5: Slotted Link (Attached to Slider 1, contains a groove)
    *   Link 6: Slider 2 (moves in the groove of Link 5)
*   **Motion Conversion:** Converts rotary motion into oscillatory motion of the slider in the groove.
*   **DOF:** 1
*   **Example:** Used in some steam engines and specific types of machinery where controlled vibration is needed.

    **Referencing Textbooks:**
    *   **Ghosh A. (2008):** Might discuss this as a variation of the slider-crank family.
    *   **Shigley & Uicker (2010):** Likely provides in-depth kinematic analysis of such mechanisms.

---

### 3. Inversions of Double Slider Crank Mechanisms

**Key Concept:** An inversion of a mechanism is obtained by fixing a different link than the original ground link. This changes the relative motion between the links and often results in different applications.

**General Procedure for Inversions:**
1.  Identify the links of the mechanism.
2.  Consider each link in turn as the fixed link.
3.  Analyze the resulting motion.

**Inversions of the First Class Double Slider Crank Mechanism:**

Consider a typical first-class double slider crank mechanism with a crank, a connecting rod, and two sliders. Let the links be:
*   Link 1: Crank
*   Link 2: Connecting Rod
*   Link 3: Slider 1
*   Link 4: Slider 2

The mechanism has 4 links and 4 turning/sliding pairs, so DOF = 1.

**Inversion 0 (Original Mechanism):** Crank (Link 1) is the driver, rotating. Slider 1 (Link 3) reciprocates.

**Inversion 1: Fix the Crank (Link 1)**
*   **Configuration:** The crank is fixed. One slider (Link 3) is fixed to the frame. The connecting rod (Link 2) pivots at one end on the fixed crank pin and slides at the other end in a groove of Slider 2 (Link 4). Slider 2 moves perpendicular to the motion of Slider 1.
*   **Motion:** The connecting rod rotates about the fixed crank pin. Slider 2 reciprocates linearly.
*   **Application:** This is essentially a Scotch Yoke mechanism where the connecting rod drives the yoke.

**Inversion 2: Fix the Connecting Rod (Link 2)**
*   **Configuration:** The connecting rod is fixed. One end of the connecting rod is fixed to the frame. The crank (Link 1) pivots at one end on the frame and slides at the other end in a groove of Slider 1 (Link 3). Slider 1 reciprocates. The other end of the connecting rod has a slot in which the crank slides. Slider 2 (Link 4) reciprocates in a direction perpendicular to Slider 1.
*   **Motion:** The crank rotates and slides within the slots of the fixed connecting rod and the moving slider. Slider 1 reciprocates.
*   **Application:** This inversion is less common but can be found in specialized machinery. It's a variation of the Scotch Yoke.

**Inversion 3: Fix Slider 1 (Link 3)**
*   **Configuration:** Slider 1 is fixed to the frame. The crank (Link 1) pivots at one end on the frame and its other end is connected to the connecting rod (Link 2). The connecting rod slides at one end in the groove of Slider 2 (Link 4) and at the other end in a groove of the fixed Slider 1 (Link 3). Slider 2 reciprocates.
*   **Motion:** The crank rotates. The connecting rod pivots at one end and slides in two perpendicular grooves. Slider 2 reciprocates.
*   **Application:** This is the **Elliptical Trammel** if the crank rotates uniformly and the grooves are perpendicular and the point on the connecting rod where the crank is attached is appropriately chosen.

**Inversion 4: Fix Slider 2 (Link 4)**
*   **Configuration:** Slider 2 is fixed to the frame. The crank (Link 1) pivots at one end on the frame and its other end is connected to the connecting rod (Link 2). The connecting rod slides at one end in the groove of Slider 1 (Link 3) and at the other end in the groove of the fixed Slider 2 (Link 4). Slider 1 reciprocates.
*   **Motion:** The crank rotates. The connecting rod pivots at one end and slides in two perpendicular grooves. Slider 1 reciprocates.
*   **Application:** This is **Oldham's Coupling** if the fixed slider has a slot, the other slider has a slot perpendicular to the first, and the connecting rod has two pins engaging these slots. The "crank" here is effectively the shaft connected to the intermediate disk.

**Important Note on Inversions:** The naming and description of inversions can sometimes be subtle depending on which link is considered the "crank" and which is the "slider" in the abstract sense, especially when dealing with parallel axes and slotted discs. The key is to identify which link is fixed and analyze the resulting relative motions.

**Referencing Textbooks:**
*   **Ballaney P. L. (2005):** Chapters on inversions of mechanisms, with specific examples for slider-crank types.
*   **Rattan S. S. (2009):** Discusses the concept of inversions and applies it to slider-crank mechanisms, including practical examples.
*   **Ghosh A. (2008):** Provides a systematic approach to deriving inversions.
*   **Shigley & Uicker (2010):** Offers rigorous mathematical derivations for the motion in different inversions.
*   **Norton (2009):** Likely covers inversions with clear diagrams and applications.

---

### 4. Applications of Double Slider Crank Mechanisms

Double slider crank mechanisms and their inversions are crucial in various engineering applications.

*   **Scotch Yoke:**
    *   **Pumps:** Generating reciprocating motion for pump pistons.
    *   **Internal Combustion Engines:** In some specialized engine designs, though less common than the standard slider-crank.
    *   **Vibration Generation:** Creating controlled simple harmonic motion for testing equipment or specialized machinery.
    *   **Machine Tools:** For shaping operations.
*   **Elliptical Trammel:**
    *   **Lathes:** For producing elliptical shapes on workpieces.
    *   **Drafting Instruments:** For drawing ellipses.
*   **Oldham's Coupling:**
    *   **Shaft Alignment:** Connecting parallel shafts with a fixed lateral offset.
    *   **Printing Presses:** Used in older designs for connecting drive shafts.
*   **Vibrating Ram Mechanism:**
    *   **Foundry Machinery:** For mold vibration.
    *   **Power Hammers:** Some designs utilize such mechanisms.

**Referencing Textbooks:**
*   **All textbooks** will likely provide practical examples and case studies for these mechanisms.

---

### 5. Kinematic and Dynamic Analysis Considerations

**Learning Outcome 1: Calculate degrees of freedom of mechanisms and Interpret their inversions.**

*   **DOF Calculation:** Always use Gruebler's formula for planar mechanisms. Ensure correct identification of links and joints.
    *   Double Slider Crank (typical, 4 links, 4 turning/sliding pairs) = 1 DOF.
*   **Interpretation of Inversions:**
    *   Fixing different links changes the input and output.
    *   The same kinematic chain can produce different motions depending on which link is grounded.
    *   Understanding the relative motion of each link with respect to the ground link is key.

**Learning Outcome 2: Perform velocity and acceleration analysis of various planar mechanisms.**

*   **Velocity Analysis:**
    *   **Graphical Method:** Instantaneous Center of Velocity (IC) method.
    *   **Analytical Method:** Using complex numbers, vector loops, or kinematic equations (e.g., using sine and cosine rules for slider-crank, or the equations derived for Scotch Yoke and Elliptical Trammel).
*   **Acceleration Analysis:**
    *   **Graphical Method:** Using the Kennedy's Theorem (three instantaneous centers for three bodies).
    *   **Analytical Method:** Differentiating velocity equations or using vector loop equations.
    *   **Coriolis Component:** Must be considered when a point or link moves relative to another moving link.

**Example: Velocity analysis of a Scotch Yoke (simplified)**
If the crank (radius $r$) rotates at a constant angular velocity $\omega$, the position of the slider is $y = r \sin(\theta)$, where $\theta = \omega t$.
*   Velocity of slider: $v_y = \frac{dy}{dt} = r \omega \cos(\omega t)$.
*   Maximum velocity occurs when $\cos(\omega t) = \pm 1$ (at the extremes of stroke): $v_{max} = \pm r \omega$.
*   Zero velocity occurs when $\cos(\omega t) = 0$ (at the center of stroke): $v = 0$.

**Example: Acceleration analysis of a Scotch Yoke (simplified)**
Differentiating the velocity: $a_y = \frac{dv_y}{dt} = -r \omega^2 \sin(\omega t)$.
*   Maximum acceleration occurs when $\sin(\omega t) = \pm 1$ (at the extremes of stroke): $a_{max} = \mp r \omega^2$.
*   Zero acceleration occurs when $\sin(\omega t) = 0$ (at the center of stroke): $a = 0$.

**Learning Outcome 3: Construct a mechanism for a specified output motion.**

*   Understanding the characteristic motions of double slider crank mechanisms (SHM, elliptical path, parallel shaft connection) helps in selecting the appropriate mechanism for a desired output.
*   For example, if SHM is required, a Scotch Yoke is a direct solution. If connecting parallel shafts with an offset, Oldham's coupling is the choice.

**Learning Outcome 5: Create prototype of various mechanisms.**

*   This involves understanding the practical implementation.
    *   **Scotch Yoke:** Requires a well-machined slot and a tightly fitting yoke to minimize play.
    *   **Oldham's Coupling:** Requires precise manufacturing of the slots and pins to ensure smooth operation and durability.
    *   **Materials:** Selection of appropriate materials for links, pins, and sliding surfaces is crucial for performance and wear.

---

### 6. Important Points to Remember

*   **DOF is crucial:** Always calculate DOF first to understand the mechanism's mobility.
*   **Inversions are key:** The same kinematic chain can have different functionalities by fixing different links.
*   **Scotch Yoke:** Converts rotary to SHM.
*   **Elliptical Trammel:** Generates elliptical motion.
*   **Oldham's Coupling:** Connects parallel shafts with an offset.
*   **Coriolis Acceleration:** Be mindful of this component in more complex kinematic analyses or when analyzing specific points on links.
*   **Applications:** Understand the practical uses of these mechanisms to appreciate their engineering significance.
*   **Textbook Consistency:** While the core concepts are the same, the notation and detailed derivations might vary slightly between textbooks. Refer to multiple sources for a comprehensive understanding.

---

### 7. Practice Questions and Exercises

**Question 1:**
A Scotch Yoke mechanism is driven by a crank of radius 50 mm rotating at 120 rpm. Determine the maximum velocity and maximum acceleration of the slider.

**Answer 1:**
*   Radius, $r = 50 \text{ mm} = 0.05 \text{ m}$
*   Angular velocity, $\omega = 120 \text{ rpm} = \frac{120 \times 2\pi}{60} \text{ rad/s} = 4\pi \text{ rad/s}$
*   Velocity of slider: $v_y = r \omega \cos(\omega t)$
*   Maximum velocity: $v_{max} = r \omega = 0.05 \text{ m} \times 4\pi \text{ rad/s} = 0.2\pi \text{ m/s} \approx 0.628 \text{ m/s}$
*   Acceleration of slider: $a_y = -r \omega^2 \sin(\omega t)$
*   Maximum acceleration: $a_{max} = r \omega^2 = 0.05 \text{ m} \times (4\pi \text{ rad/s})^2 = 0.05 \times 16\pi^2 \text{ m/s}^2 = 0.8\pi^2 \text{ m/s}^2 \approx 7.896 \text{ m/s}^2$

**Question 2:**
What type of motion is produced by an Elliptical Trammel mechanism when one slider reciprocates sinusoidally along the x-axis and the other reciprocates sinusoidally along the y-axis with the same amplitude and frequency? Explain with a simple derivation.

**Answer 2:**
When one slider (A) moves along the x-axis as $x_A = R \sin(\omega t)$ and another slider (B) moves along the y-axis as $y_B = R \cos(\omega t)$, and a point P on the link connecting A and B divides it in the ratio $m:n$, the coordinates of P are:
$x_P = \frac{n x_A}{m+n} = \frac{n R \sin(\omega t)}{m+n}$
$y_P = \frac{m y_B}{m+n} = \frac{m R \cos(\omega t)}{m+n}$
Let $a = \frac{n R}{m+n}$ and $b = \frac{m R}{m+n}$.
Then $x_P = a \sin(\omega t)$ and $y_P = b \cos(\omega t)$.
Squaring and adding these equations:
$\frac{x_P^2}{a^2} + \frac{y_P^2}{b^2} = \sin^2(\omega t) + \cos^2(\omega t) = 1$
This is the equation of an ellipse with semi-axes $a$ and $b$. Therefore, the mechanism produces **elliptical motion**.

**Question 3:**
Briefly describe the configuration and application of Oldham's Coupling. What is its advantage over other couplings for connecting parallel shafts with an offset?

**Answer 3:**
*   **Configuration:** Oldham's Coupling consists of two shafts, each with a crank. These cranks are connected by an intermediate disk that has two slots at right angles to each other. The pin of one crank engages in one slot, and the pin of the other crank engages in the other slot.
*   **Application:** Used to connect two parallel shafts that have a fixed lateral offset.
*   **Advantage:** It efficiently transmits rotary motion between shafts with a small, fixed offset. Unlike universal joints, it transmits motion at a constant angular velocity without introducing speed fluctuations, provided the offset is small and the shafts are parallel.

**Question 4:**
Consider a double slider crank mechanism where the crank is 100 mm and rotates at 300 rpm. The connecting rod is 400 mm. If this were configured as a Scotch Yoke, what would be the displacement, velocity, and acceleration of the slider when the crank is at 60 degrees from the horizontal?

**Answer 4:**
*   This is a trickier question as a standard Scotch Yoke doesn't have a connecting rod of a specific length in the same way a slider-crank does. The "connecting rod" in a Scotch Yoke is effectively the path of the pin. The length of the crank (r = 100 mm) is the key parameter.
*   Angle, $\theta = 60^\circ = \frac{\pi}{3}$ radians.
*   Angular velocity, $\omega = 300 \text{ rpm} = \frac{300 \times 2\pi}{60} = 10\pi \text{ rad/s}$.
*   Displacement: $y = r \sin(\theta) = 0.1 \text{ m} \times \sin(60^\circ) = 0.1 \times \frac{\sqrt{3}}{2} \approx 0.0866 \text{ m}$ (or 86.6 mm) from the center of oscillation.
*   Velocity: $v_y = r \omega \cos(\theta) = 0.1 \text{ m} \times 10\pi \text{ rad/s} \times \cos(60^\circ) = 1 \times \pi \times 0.5 = 0.5\pi \text{ m/s} \approx 1.57 \text{ m/s}$.
*   Acceleration: $a_y = -r \omega^2 \sin(\theta) = -0.1 \text{ m} \times (10\pi \text{ rad/s})^2 \times \sin(60^\circ) = -0.1 \times 100\pi^2 \times \frac{\sqrt{3}}{2} = -10\pi^2 \times \frac{\sqrt{3}}{2} \approx -84.8 \text{ m/s}^2$. (The negative sign indicates acceleration is in the opposite direction of displacement if displacement is measured upwards).

---

This concludes the detailed study notes on Double Slider Crank Mechanisms and Their Inversions. Remember to consult the provided textbooks for further elaboration and graphical representations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
