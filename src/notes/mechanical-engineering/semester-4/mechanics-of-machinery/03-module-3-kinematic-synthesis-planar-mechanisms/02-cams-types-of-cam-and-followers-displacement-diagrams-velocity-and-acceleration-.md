---
title: "Cams - Types of cam and followers - displacement diagrams, velocity and acceleration analysis of SHM, uniform velocity, uniform acceleration, cycloidal motion- Graphical cam profile synthesis- knife edge and roller follower with and without offset"
subject: "MECHANICS OF MACHINERY"
module: "Module 3: Kinematic synthesis (planar mechanisms) "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fe2"
status: "completed"
scrapedAt: "2026-05-20T17:55:12.650Z"
---
## Mechanics of Machinery: Module 3 - Kinematic Synthesis (Planar Mechanisms)

---

### **Topic: Cams - Types of Cam and Followers**

**Learning Outcomes:**

*   Understand the fundamental components and terminology of a cam-follower system.
*   Classify different types of cams and followers.
*   Visualize and interpret displacement, velocity, and acceleration diagrams for various follower motion types.
*   Analyze the motion characteristics of a follower based on different kinematic profiles.
*   Synthesize cam profiles graphically for specific follower motions.
*   Analyze the influence of follower type (knife-edge, roller) and offset on the cam profile.

**Course Outcomes Addressed:**

*   **CO4:** Solve the problem on cams and gear drives, including selection depending on requirement. (Knowledge Level: K3) - This topic directly contributes to solving cam-related problems and understanding selection criteria.
*   **CO3:** Construct a mechanism for a specified output motion (Knowledge Level: K4) - Graphical cam profile synthesis is a direct application of constructing a mechanism for a specified output motion.
*   **CO2:** Perform velocity and acceleration analysis of various planar mechanisms (Knowledge Level: K4) - Understanding the displacement diagrams and their derivatives is crucial for velocity and acceleration analysis in cam systems.

---

### **1. Introduction to Cams and Followers**

*   **Definition:** A cam is a rotating or sliding machine element that imparts a specific motion to another element called a follower, typically through direct contact. It is a fundamental component in many automated machines, providing precise and repeatable motion control.

*   **Components:**
    *   **Cam:** The driving element, usually rotating or oscillating.
    *   **Follower:** The driven element, which moves in a prescribed path.
    *   **Contact Point:** The point where the cam and follower interact.
    *   **Camshaft:** The shaft on which the cam is mounted.

*   **Classification of Cams:**
    *   **By Shape:**
        *   **Disk or Plate Cam:** The most common type, with the follower moving against the periphery of a rotating disk.
        *   **Cylindrical Cam:** The follower moves along a groove on the surface of a rotating cylinder.
        *   **Globoidal Cam:** Similar to cylindrical cams but with a shape that can be concave or convex.
        *   **Convex Cam:** A cam with a convex working surface.
    *   **By Follower Movement:**
        *   **Reciprocating Follower:** Moves linearly.
        *   **Oscillating Follower:** Rotates about a fixed pivot.
        *   **Translating Follower:** Moves linearly without oscillation.
    *   **By Follower Type:** (Discussed in detail later)
        *   Knife-edge Follower
        *   Roller Follower
        *   Flat-faced Follower (Plunger Follower)

*   **Classification of Followers:**
    *   **By Shape:**
        *   **Knife-edge Follower:** Has a sharp edge that contacts the cam. Prone to wear.
        *   **Roller Follower:** Has a cylindrical roller at the contact point. Reduces wear and friction.
        *   **Flat-faced Follower (Plunger Follower):** Has a flat surface at the contact point. Can cause undercutting on certain cam profiles.
    *   **By Motion:**
        *   **Reciprocating Follower:** Moves linearly along a straight line.
        *   **Oscillating Follower:** Pivots about a fixed point.
    *   **By Position of Movement:**
        *   **Radical Follower:** The line of motion passes through the center of the cam.
        *   **Offset Follower:** The line of motion is offset from the center of the cam.

**Important Point:** The choice of follower type significantly impacts the cam profile and wear characteristics. Roller followers are generally preferred for higher speeds and reduced wear.

---

### **2. Displacement Diagrams**

A displacement diagram graphically represents the follower's displacement as a function of the cam's angular position. It is crucial for understanding the motion of the follower.

*   **Axes:**
    *   **Abscissa (X-axis):** Cam angle (usually in degrees or radians).
    *   **Ordinate (Y-axis):** Follower displacement (e.g., lift).

*   **Key Zones:**
    *   **Dwell:** The follower remains stationary for a specific range of cam angles. Represented by a horizontal line on the displacement diagram.
    *   **Outstroke (or Advance):** The follower moves away from the cam center.
    *   **Return Stroke (or Retract):** The follower moves back towards the cam center.
    *   **Period of Motion:** The total cam angle during which the follower moves.

---

### **3. Follower Motion Analysis: Displacement, Velocity, and Acceleration**

The characteristics of the follower's motion are determined by the shape of the displacement curve. Velocity and acceleration are the first and second derivatives of displacement with respect to time (or cam angle, with appropriate conversion).

*   **Relationship between Cam Angle and Time:**
    If the cam rotates at a uniform angular velocity $\omega$ (rad/s), and the time for one full rotation is $T$, then the angular velocity in terms of cam angle $\theta$ (radians) is:
    $\theta = \omega t$
    $t = \frac{\theta}{\omega}$

    For a cam rotating at $N$ RPM (revolutions per minute), the angular velocity is:
    $\omega = \frac{2 \pi N}{60}$ rad/s
    The angular velocity in degrees per second is $\frac{360 N}{60} = 6N$ deg/s.

    The velocity of the follower ($v_f$) is related to the displacement ($y$) and time ($t$) by:
    $v_f = \frac{dy}{dt} = \frac{dy}{d\theta} \frac{d\theta}{dt} = \frac{dy}{d\theta} \omega$
    The acceleration of the follower ($a_f$) is related to the velocity ($v_f$) and time ($t$) by:
    $a_f = \frac{dv_f}{dt} = \frac{d}{dt}\left(\frac{dy}{dt}\right) = \frac{d}{dt}\left(\frac{dy}{d\theta}\omega\right)$
    Assuming $\omega$ is constant:
    $a_f = \omega \frac{d}{dt}\left(\frac{dy}{d\theta}\right) = \omega \frac{d}{d\theta}\left(\frac{dy}{d\theta}\right) \frac{d\theta}{dt} = \omega^2 \frac{d^2y}{d\theta^2}$

    **Key Point:** $\frac{dy}{d\theta}$ represents the slope of the displacement curve (scaled by $\omega$, it's the velocity), and $\frac{d^2y}{d\theta^2}$ represents the curvature of the displacement curve (scaled by $\omega^2$, it's the acceleration).

*   **Common Follower Motion Types:**

    **(a) Simple Harmonic Motion (SHM)**

    *   **Description:** The follower moves with simple harmonic motion. The displacement, velocity, and acceleration curves are sinusoidal.
    *   **Displacement Diagram:** A portion of a sine wave.
    *   **Mathematical Representation:** For an outstroke of angle $\beta$ and total lift $h$:
        $y(\theta) = \frac{h}{2} \left(1 - \cos\left(\frac{\pi \theta}{\beta}\right)\right)$, for $0 \le \theta \le \beta$
        (This assumes the motion starts from zero displacement at $\theta=0$ and reaches maximum lift at $\theta=\beta$)
    *   **Velocity Analysis:**
        $v_f(\theta) = \frac{dy}{dt} = \frac{dy}{d\theta} \omega = \frac{h}{2} \left(\frac{\pi}{\beta}\right) \sin\left(\frac{\pi \theta}{\beta}\right) \omega$
        Maximum velocity occurs at $\theta = \beta/2$: $v_{f_{max}} = \frac{h \pi \omega}{2 \beta}$
    *   **Acceleration Analysis:**
        $a_f(\theta) = \frac{d^2y}{d\theta^2} \omega^2 = \frac{h}{2} \left(\frac{\pi}{\beta}\right)^2 \cos\left(\frac{\pi \theta}{\beta}\right) \omega^2$
        Maximum acceleration occurs at $\theta = 0$ and $\theta = \beta$: $a_{f_{max}} = \pm \frac{h \pi^2 \omega^2}{2 \beta^2}$
    *   **Advantages:** Smooth motion, zero acceleration at the beginning and end of the stroke, thus reducing shock.
    *   **Disadvantages:** Velocity is not uniform, resulting in higher acceleration and deceleration compared to uniform acceleration.
    *   **Textbook Reference:** Ballaney (2005) discusses SHM in detail for follower motion. Rattan (2009) also covers SHM characteristics.

    **(b) Uniform Velocity (UV)**

    *   **Description:** The follower moves at a constant velocity during the stroke.
    *   **Displacement Diagram:** A straight line with a constant slope.
    *   **Mathematical Representation:** For an outstroke of angle $\beta$ and total lift $h$:
        $y(\theta) = \frac{h}{\beta} \theta$, for $0 \le \theta \le \beta$
    *   **Velocity Analysis:**
        $v_f(\theta) = \frac{dy}{dt} = \frac{dy}{d\theta} \omega = \frac{h}{\beta} \omega$ (Constant)
        $v_{f_{max}} = \frac{h \omega}{\beta}$
    *   **Acceleration Analysis:**
        $a_f(\theta) = \frac{d^2y}{d\theta^2} \omega^2 = 0$
    *   **Advantages:** Simple to achieve, zero acceleration/deceleration during the stroke.
    *   **Disadvantages:** **Sudden and infinite acceleration/deceleration at the beginning and end of the stroke** due to the abrupt change in velocity. This causes significant shock and vibration, making it unsuitable for high-speed applications.
    *   **Important Point:** Uniform velocity motion is generally **not recommended** for practical cam design due to the infinite jerk (rate of change of acceleration).

    **(c) Uniform Acceleration and Deceleration**

    *   **Description:** The follower accelerates uniformly for the first half of the stroke and decelerates uniformly for the second half.
    *   **Displacement Diagram:** Two straight line segments with different slopes, joined at the midpoint of the stroke and the midpoint of the cam angle.
    *   **Mathematical Representation:** For an outstroke of angle $\beta$ and total lift $h$:
        *   For $0 \le \theta \le \beta/2$: $y(\theta) = \frac{h}{\beta^2} \theta^2$
        *   For $\beta/2 \le \theta \le \beta$: $y(\theta) = \frac{h}{\beta} \theta - \frac{h}{\beta^2} \frac{\beta^2}{4} = \frac{h}{\beta} \theta - \frac{h}{4}$
        (Corrected equation for the second half: $y(\theta) = h - \frac{h}{\beta^2}(\beta - \theta)^2$)
        Let's re-evaluate for clarity based on standard texts like Rattan:
        For $0 \le \theta \le \beta/2$: $y(\theta) = \frac{h}{(\beta/2)^2} \theta^2 = \frac{4h}{\beta^2} \theta^2$
        For $\beta/2 \le \theta \le \beta$: $y(\theta) = h - \frac{h}{(\beta/2)^2}(\beta - \theta)^2 = h - \frac{4h}{\beta^2}(\beta - \theta)^2$
    *   **Velocity Analysis:**
        *   For $0 \le \theta \le \beta/2$: $v_f(\theta) = \frac{dy}{d\theta} \omega = \frac{8h}{\beta^2} \theta \omega$
        *   For $\beta/2 \le \theta \le \beta$: $v_f(\theta) = \frac{dy}{d\theta} \omega = - \frac{8h}{\beta^2}(\beta - \theta)(-1) \omega = \frac{8h}{\beta^2}(\beta - \theta) \omega$
        Maximum velocity occurs at $\theta = \beta/2$: $v_{f_{max}} = \frac{8h}{\beta^2} (\frac{\beta}{2}) \omega = \frac{4h\omega}{\beta}$
    *   **Acceleration Analysis:**
        *   For $0 \le \theta \le \beta/2$: $a_f(\theta) = \frac{d^2y}{d\theta^2} \omega^2 = \frac{8h}{\beta^2} \omega^2$ (Constant acceleration)
        *   For $\beta/2 \le \theta \le \beta$: $a_f(\theta) = \frac{d^2y}{d\theta^2} \omega^2 = - \frac{8h}{\beta^2} \omega^2$ (Constant deceleration)
        Maximum acceleration magnitude: $a_{f_{max}} = \frac{8h\omega^2}{\beta^2}$
    *   **Advantages:** Reduced shock compared to uniform velocity due to finite acceleration/deceleration at the start/end.
    *   **Disadvantages:** Acceleration is not zero at the beginning and end, leading to higher jerk than SHM.
    *   **Textbook Reference:** Ballaney (2005) and Rattan (2009) provide derivations for uniform acceleration and deceleration.

    **(d) Cycloidal Motion**

    *   **Description:** The follower moves with a cycloidal path during the stroke. This motion provides zero velocity and zero acceleration at the beginning and end of the stroke, resulting in the smoothest motion among the basic types.
    *   **Displacement Diagram:** A curve that starts and ends with zero slope and zero curvature.
    *   **Mathematical Representation:** For an outstroke of angle $\beta$ and total lift $h$:
        $y(\theta) = \frac{h}{\beta^2} \left( \theta - \frac{\beta}{\pi} \sin\left(\frac{\pi \theta}{\beta}\right) \right)$, for $0 \le \theta \le \beta$
    *   **Velocity Analysis:**
        $v_f(\theta) = \frac{dy}{dt} = \frac{dy}{d\theta} \omega = \frac{h}{\beta^2} \left( 1 - \cos\left(\frac{\pi \theta}{\beta}\right) \right) \omega$
        Maximum velocity occurs at $\theta = \beta/2$: $v_{f_{max}} = \frac{2h\omega}{\beta}$
    *   **Acceleration Analysis:**
        $a_f(\theta) = \frac{d^2y}{d\theta^2} \omega^2 = \frac{h}{\beta^2} \left( \frac{\pi}{\beta} \sin\left(\frac{\pi \theta}{\beta}\right) \right) \omega^2 = \frac{\pi h \omega^2}{\beta^3} \sin\left(\frac{\pi \theta}{\beta}\right)$
        Maximum acceleration occurs at $\theta = \beta/2$: $a_{f_{max}} = \frac{\pi h \omega^2}{\beta^3}$
    *   **Advantages:** Smooth motion with zero velocity and acceleration at the stroke reversals, minimizing shock and vibration. This is the preferred motion for high-speed applications.
    *   **Disadvantages:** More complex to manufacture compared to SHM or uniform acceleration.
    *   **Textbook Reference:** Ghosh (2008) often details the generation of cycloidal curves. Rattan (2009) provides derivations and comparisons.

*   **Summary of Motion Characteristics (per unit lift and stroke angle):**

| Motion Type                 | Max Velocity ($v_{max}/\omega$) | Max Acceleration ($a_{max}/\omega^2$) | Jerk (Max Rate of Change of Accel.) | Shock at Reversal |
| :-------------------------- | :------------------------------ | :------------------------------------ | :---------------------------------- | :---------------- |
| Uniform Velocity (UV)       | $1/\beta$                       | $\infty$                              | $\infty$                            | Infinite          |
| Uniform Acceleration (UA)   | $2/\beta$                       | $4/\beta^2$                           | $\infty$ (at stroke ends)           | High              |
| Simple Harmonic Motion (SHM)| $\pi/(2\beta)$                  | $\pi^2/(2\beta^2)$                    | $\infty$ (at stroke ends)           | Moderate          |
| Cycloidal Motion            | $2/\beta$                       | $\pi/\beta^2$                         | Finite                              | Low               |

**Important Point:** For high-speed operation, cycloidal motion is the most desirable due to its smooth acceleration and deceleration characteristics, leading to reduced wear and noise.

---

### **4. Graphical Cam Profile Synthesis**

Graphical synthesis involves constructing the cam profile based on the specified follower motion. This method is particularly useful for understanding the geometry and for designing cams for relatively low-speed applications.

**Steps for Graphical Synthesis:**

1.  **Draw the Follower Profile:** Draw the follower at its initial position.
2.  **Draw the Camshaft Center:** Mark the center of the camshaft.
3.  **Determine the Follower's Path:** Draw the line of action (the path of the follower relative to the cam).
4.  **Construct the Displacement Diagram:** Based on the chosen follower motion (SHM, UV, UA, Cycloidal), plot the follower's displacement against the cam angle. This determines the position of the follower at each cam angle.
5.  **Layout of Cam Angles:** Divide the circumference of a circle representing the cam into sectors corresponding to the different phases of the follower's motion (dwell, outstroke, return). For simplicity, we often consider a full rotation, or a portion of it for the motion, followed by a dwell.
6.  **Trace Follower Positions:** For each key cam angle (e.g., every 10 or 15 degrees), determine the follower's displacement from the displacement diagram.
7.  **Draw Follower Positions:** With the follower's pivot or base as a reference, draw the follower in its correct position for each cam angle.
8.  **Draw the Cam Profile:** The cam profile is the envelope of the follower's working surface.
    *   **For Knife-edge Follower:** For each follower position, draw a line perpendicular to the follower's center line at the contact point. The cam profile is the tangent to all these lines.
    *   **For Roller Follower:** For each follower position, draw a circle (representing the roller) centered at the follower's contact point. The cam profile is the envelope of these circles, or alternatively, it's a curve traced by the center of the roller at a radial distance equal to the roller radius.

**Example: Graphical Synthesis for a Knife-Edge Follower with SHM**

*   **Problem:** Design a cam profile for a knife-edge follower moving radially, with a total lift of 30 mm during $180^{\circ}$ of cam rotation, followed by a dwell of $180^{\circ}$. The cam rotates at a uniform speed. Assume SHM for the outstroke.

*   **Steps:**
    1.  Draw a circle representing the base circle of the cam (e.g., 30 mm radius).
    2.  Draw the line of action for the radial knife-edge follower, passing through the center of the base circle.
    3.  Construct the displacement diagram for SHM:
        *   X-axis: Cam angles from $0^{\circ}$ to $360^{\circ}$.
        *   Y-axis: Follower displacement (lift) from 0 to 30 mm.
        *   Outstroke: $0^{\circ}$ to $180^{\circ}$, lift from 0 to 30 mm (SHM curve).
        *   Dwell: $180^{\circ}$ to $360^{\circ}$, lift remains 30 mm (horizontal line).
    4.  Divide the $360^{\circ}$ cam rotation into segments (e.g., $10^{\circ}$ intervals).
    5.  For each cam angle $\theta$, find the corresponding displacement $y$ from the displacement diagram.
    6.  For a knife-edge follower, the distance from the cam center to the cam profile at angle $\theta$ is the sum of the base circle radius ($r_b$) and the follower's displacement ($y$) at that angle.
        Cam profile radius $= r_b + y(\theta)$
    7.  Mark these radial distances at the corresponding angles on a polar diagram to construct the cam profile.

**Important Point:** The graphical method is intuitive but can be time-consuming and less accurate for complex motions or higher precision requirements.

---

### **5. Knife-Edge and Roller Followers with and without Offset**

The type of follower and whether its motion is offset from the cam center significantly affect the cam profile.

**(a) Knife-Edge Follower**

*   **Radial (No Offset):**
    *   The follower moves along a line passing through the cam center.
    *   The cam profile is obtained by adding the base circle radius to the follower's displacement at each cam angle: $r_{cam}(\theta) = r_b + y(\theta)$.
    *   **Advantages:** Simplest profile.
    *   **Disadvantages:** High wear due to point contact, unsuitable for high speeds.

*   **Offset:**
    *   The follower's line of motion is offset by a distance 'e' from the cam center.
    *   **Effect on Cam Profile:** The offset follower traces a larger curve. The radial distance from the cam center to the profile is no longer a simple addition of base circle radius and displacement.
    *   **Synthesis:**
        1.  Draw the base circle and the offset line of motion.
        2.  Construct the displacement diagram as before.
        3.  For each cam angle $\theta$, determine the follower's displacement $y(\theta)$.
        4.  The actual position of the knife-edge follower's center is at a distance $r_b + y(\theta)$ from the cam center, along the line of motion.
        5.  The cam profile is the envelope of the line of motion, offset by the follower's radial position.
        6.  Alternatively, consider the distance from the cam center to the contact point on the cam. This distance $r_{cam}(\theta)$ can be found geometrically or trigonometrically.
            Let $\phi$ be the angle between the line of action and the radial line from the cam center to the contact point.
            The radial displacement of the follower from its lowest position is $y$.
            The instantaneous radius of the cam profile is $r_{cam}(\theta) = OB$, where $B$ is the contact point.
            In the triangle formed by the cam center O, the follower's pivot point P, and the contact point B, the angle $\angle OPB = 90^\circ$.
            $OP = r_b + y(\theta)$.
            $\sin(\phi) = \frac{e}{OP} = \frac{e}{r_b + y(\theta)}$
            The cam profile radius at angle $\theta$ is $r_{cam}(\theta) = OB = \sqrt{OP^2 - e^2} = \sqrt{(r_b + y(\theta))^2 - e^2}$.
    *   **Important Point:** The offset can be used to ensure the follower stays in contact with the cam even with a smaller base circle, or to reduce the pressure angle.

**(b) Roller Follower**

*   **Radial (No Offset):**
    *   The follower moves along a line passing through the cam center.
    *   The cam profile is the envelope of circles of radius $r_r$ (roller radius) centered on the pitch curve.
    *   The pitch curve is the path traced by the center of the roller. Its radius is $r_{pitch}(\theta) = r_b + y(\theta)$.
    *   The actual cam profile is obtained by adding the roller radius to the pitch curve: $r_{cam}(\theta) = r_{pitch}(\theta) + r_r = r_b + y(\theta) + r_r$.
    *   **Advantages:** Reduced wear and friction compared to knife-edge followers.
    *   **Disadvantages:** Can experience undercutting if the pressure angle becomes too large, especially with flat-faced followers or sharp corners in the follower motion.

*   **Offset:**
    *   The follower's line of motion is offset by a distance 'e' from the cam center.
    *   **Pitch Curve:** The path traced by the center of the roller. Its radius is $r_{pitch}(\theta)$.
    *   **Synthesis:**
        1.  Draw the base circle, the offset line of motion, and the roller.
        2.  Determine the follower's displacement $y(\theta)$ from the displacement diagram.
        3.  The instantaneous position of the roller center is at a distance from the cam center along the line of motion.
        4.  **The pitch curve:** The locus of the roller center. For an offset roller follower, the distance from the cam center to the roller center ($r_{pitch}$) can be calculated using the Pythagorean theorem, similar to the knife-edge offset case. The effective distance from the cam center to the roller center is $r_{pitch}(\theta)$.
            Let $\phi$ be the angle between the line of action and the radial line to the roller center.
            $r_{pitch}(\theta) = \sqrt{(r_b + y(\theta))^2 - e^2}$.
        5.  The actual cam profile is obtained by drawing circles of radius $r_r$ centered on the pitch curve and finding their envelope. Alternatively, the cam profile radius is $r_{cam}(\theta) = r_{pitch}(\theta) + r_r$.
            $r_{cam}(\theta) = \sqrt{(r_b + y(\theta))^2 - e^2} + r_r$.
    *   **Important Point:** The offset for a roller follower can reduce the required minimum radius of curvature of the cam profile, thus preventing undercutting. The pressure angle also needs to be considered.

**Undercutting:**
*   Occurs when the center of the roller follower, moving along its pitch curve, encounters a portion of the cam profile that would require a radius of curvature smaller than the roller's radius.
*   This results in the cam profile cutting into the roller, leading to improper functioning and potential damage.
*   The minimum radius of curvature of the cam profile must be greater than or equal to the roller radius.
*   For a radial roller follower, the minimum radius of curvature occurs where the second derivative of the pitch curve is maximum.
*   For an offset follower, the offset itself can help avoid undercutting.

**Pressure Angle ($\psi$):**
*   The angle between the direction of the follower's motion and the normal to the cam surface at the contact point.
*   It's also the angle between the line of action of the follower and the radial line from the cam center to the contact point.
*   For a radial follower: $\tan(\psi) = \frac{dy/d\theta}{r_b + y(\theta)}$
*   For an offset follower: $\tan(\psi) = \frac{dy/d\theta}{\sqrt{(r_b + y(\theta))^2 - e^2}}$
*   **Significance:** A large pressure angle leads to higher forces on the cam and follower, increased wear, and potential instability. It is generally desirable to keep the pressure angle below a certain limit (e.g., 30-40 degrees).

**Textbook Reference:** Wilson & Sadler (2005) and Shigley & Uicker (2010) provide detailed mathematical treatments for offset followers and the calculation of pressure angles and radii of curvature. Norton (2009) also offers comprehensive examples and analysis.

---

### **Practice Questions and Answers**

**Question 1:** A cam is to be designed for a radial knife-edge follower. The follower is to rise to a distance of 20 mm during $120^\circ$ of cam rotation, dwell for $60^\circ$, and return to its original position during $120^\circ$, followed by a dwell for $60^\circ$. The cam rotates at a uniform speed. If the follower moves with Simple Harmonic Motion during the outstroke and return stroke, determine the maximum velocity and acceleration of the follower. Assume the cam rotates at 600 RPM.

**Answer 1:**

*   **Outstroke:** Lift $h = 20$ mm, Angle $\beta = 120^\circ$.
*   **Return Stroke:** Lift $h = 20$ mm, Angle $\beta = 120^\circ$.
*   **Cam Speed:** $N = 600$ RPM.
*   **Angular Velocity:** $\omega = \frac{2 \pi N}{60} = \frac{2 \pi \times 600}{60} = 20\pi$ rad/s.
    For SHM, the velocity and acceleration are symmetrical for the outstroke and return stroke. We only need to consider one stroke.

*   **Maximum Velocity (SHM):**
    $v_{f_{max}} = \frac{h \pi \omega}{2 \beta}$
    Convert $\beta$ to radians: $\beta = 120^\circ = \frac{120 \pi}{180} = \frac{2\pi}{3}$ radians.
    $v_{f_{max}} = \frac{(20 \times 10^{-3} \text{ m}) \times \pi \times (20\pi \text{ rad/s})}{2 \times (2\pi/3 \text{ rad})}$
    $v_{f_{max}} = \frac{0.02 \times \pi \times 20\pi}{4\pi/3} = \frac{0.4\pi^2}{4\pi/3} = \frac{0.4\pi \times 3}{4} = 0.3\pi$ m/s
    $v_{f_{max}} \approx 0.3 \times 3.14159 \approx 0.942$ m/s

*   **Maximum Acceleration (SHM):**
    $a_{f_{max}} = \frac{h \pi^2 \omega^2}{2 \beta^2}$
    $a_{f_{max}} = \frac{(20 \times 10^{-3} \text{ m}) \times \pi^2 \times (20\pi \text{ rad/s})^2}{2 \times (2\pi/3 \text{ rad})^2}$
    $a_{f_{max}} = \frac{0.02 \times \pi^2 \times 400\pi^2}{2 \times (4\pi^2/9)}$
    $a_{f_{max}} = \frac{0.02 \times 400\pi^4}{8\pi^2/9} = \frac{8\pi^4}{8\pi^2/9} = 9\pi^2$ m/s$^2$
    $a_{f_{max}} \approx 9 \times (3.14159)^2 \approx 9 \times 9.8696 \approx 88.83$ m/s$^2$

**Question 2:** A cam with a base circle radius of 25 mm drives a radial roller follower of radius 10 mm. The follower moves with uniform acceleration and deceleration. The follower rises by 30 mm during $180^\circ$ of cam rotation and dwells for the next $180^\circ$. Calculate the maximum velocity and acceleration of the follower if the cam rotates at 300 RPM.

**Answer 2:**

*   **Base Circle Radius:** $r_b = 25$ mm.
*   **Roller Radius:** $r_r = 10$ mm.
*   **Outstroke:** Lift $h = 30$ mm, Angle $\beta = 180^\circ$.
*   **Cam Speed:** $N = 300$ RPM.
*   **Angular Velocity:** $\omega = \frac{2 \pi N}{60} = \frac{2 \pi \times 300}{60} = 10\pi$ rad/s.
*   **Motion:** Uniform acceleration and deceleration.

*   **Maximum Velocity (Uniform Acceleration/Deceleration):**
    $v_{f_{max}} = \frac{4h\omega}{\beta}$
    Convert $\beta$ to radians: $\beta = 180^\circ = \pi$ radians.
    $v_{f_{max}} = \frac{4 \times (30 \times 10^{-3} \text{ m}) \times (10\pi \text{ rad/s})}{\pi \text{ rad}}$
    $v_{f_{max}} = \frac{4 \times 0.03 \times 10\pi}{\pi} = 4 \times 0.03 \times 10 = 1.2$ m/s

*   **Maximum Acceleration (Uniform Acceleration/Deceleration):**
    $a_{f_{max}} = \frac{8h\omega^2}{\beta^2}$
    $a_{f_{max}} = \frac{8 \times (30 \times 10^{-3} \text{ m}) \times (10\pi \text{ rad/s})^2}{(\pi \text{ rad})^2}$
    $a_{f_{max}} = \frac{8 \times 0.03 \times 100\pi^2}{\pi^2} = 8 \times 0.03 \times 100 = 24$ m/s$^2$

**Question 3:** Explain the phenomenon of undercutting in cam mechanisms and how it can be prevented.

**Answer 3:**

*   **Phenomenon of Undercutting:** Undercutting occurs in cam mechanisms when the radius of curvature of the cam profile is less than the radius of the roller follower. This happens when the follower is moving with a sharp change in direction relative to the cam. The cam profile essentially cuts into the roller, leading to improper contact, wear, and potential failure of the mechanism. It is most common when the follower moves with a high velocity and acceleration, and the cam has a small base circle relative to the lift.

*   **Prevention of Undercutting:**
    1.  **Increase the Radius of Curvature of the Cam Profile:** This can be achieved by:
        *   Using a smoother follower motion like cycloidal motion, which has a more gradual change in acceleration and velocity.
        *   Increasing the base circle radius of the cam.
        *   Reducing the total lift of the follower.
        *   Increasing the angle of action for the stroke.
    2.  **Use an Offset Follower:** An offset follower can alter the geometry of the contact point and effectively increase the radius of curvature, thereby preventing undercutting.
    3.  **Increase the Roller Diameter:** A larger roller diameter effectively "rounds off" sharp corners in the theoretical pitch curve, ensuring that the actual cam profile has a sufficient radius of curvature. However, a larger roller can also lead to higher contact stresses.
    4.  **Choose Follower Motion Wisely:** Cycloidal motion is generally preferred for high-speed applications as it inherently minimizes the maximum pressure angle and rate of change of acceleration, reducing the likelihood of undercutting.

---

### **Highlight Points to Remember:**

*   **Follower Motion Choice:** Crucial for performance. Cycloidal motion offers the smoothest operation for high speeds. Uniform velocity is generally avoided due to infinite jerk.
*   **Displacement Diagrams:** The foundation for analyzing velocity and acceleration. The slope represents velocity, and the curvature represents acceleration.
*   **Velocity and Acceleration:** Directly proportional to the first and second derivatives of displacement with respect to the cam angle ($\frac{dy}{d\theta}$ and $\frac{d^2y}{d\theta^2}$), scaled by $\omega$ and $\omega^2$ respectively.
*   **Graphical Synthesis:** An intuitive method to design cam profiles, especially for knife-edge followers.
*   **Roller vs. Knife-Edge:** Roller followers reduce wear and friction but can lead to undercutting. Knife-edge followers are simpler but have high wear.
*   **Offset Followers:** Affect the cam profile geometry, pressure angle, and can help prevent undercutting. The relationship $r_{cam}(\theta) = \sqrt{(r_b + y(\theta))^2 - e^2} + r_r$ is key for offset roller followers.
*   **Pressure Angle:** An indicator of the force transmitted. Keep it within acceptable limits to avoid excessive stress and wear.
*   **Undercutting:** A critical design consideration to avoid; prevented by increasing cam curvature, using offset followers, or choosing appropriate follower motions.

---

This comprehensive set of notes covers the essential aspects of cams and followers, their motion analysis, and profile synthesis, aligning with the learning outcomes and course objectives for Module 3 of Mechanics of Machinery.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
