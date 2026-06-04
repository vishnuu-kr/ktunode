---
title: "Slider Crank Mechanisms"
subject: "MECHANICS OF MACHINERY"
module: "Module 1: Concepts of Kinematics and Dynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fd7"
status: "completed"
scrapedAt: "2026-05-20T17:55:06.102Z"
---
# MECHANICS OF MACHINERY: Module 1: Concepts of Kinematics and Dynamics

## Topic: Slider Crank Mechanisms

This module introduces the fundamental concepts of kinematics and dynamics in machinery, with a specific focus on the ubiquitous slider-crank mechanism. Understanding this mechanism is crucial for analyzing and designing various machines.

### 1. Introduction to Mechanisms and Kinematics

*   **Mechanism:** A mechanical arrangement of links and joints designed to transmit and transform motion and power.
*   **Kinematics:** The study of motion without considering the forces that cause it. It deals with displacement, velocity, and acceleration of machine parts.
*   **Dynamics:** The study of motion and the forces that cause it. It involves forces, mass, inertia, and work/energy.

### 2. Degrees of Freedom (DOF) of Mechanisms

*   **Definition:** The minimum number of independent parameters that define the position of all parts of a mechanism.
*   **Gruebler's Formula:** For a planar mechanism with $n$ links and $j$ joints, where each joint has $f_i$ degrees of freedom (for a planar mechanism, $f_i=1$ for a turning/sliding pair, and $f_i=2$ for a pin-in-slot), the total degrees of freedom ($F$) is given by:
    $F = 3(n-1) - 2j_1 - 1j_2$
    Where:
    *   $n$ = number of links (including the fixed link)
    *   $j_1$ = number of 1-DOF joints (e.g., pin joints, slider joints)
    *   $j_2$ = number of 2-DOF joints (e.g., cam-follower with rolling contact)

    **Important Note:** For planar mechanisms with only revolute and prismatic joints (all being 1-DOF joints), Gruebler's formula simplifies to:
    $F = 3(n-1) - 2j$
    Where $j$ is the total number of joints.

*   **Kutzbach's Criterion (More General):**
    $F = \sum_{i=1}^{n} (3 - f_i)$
    Where $f_i$ is the degrees of freedom of the $i$-th joint.

    *   **Relevance to CO1:** This directly addresses the first course outcome, enabling the calculation of DOF.

### 3. Slider Crank Mechanism

*   **Definition:** A four-link mechanism consisting of a crank, a connecting rod, a slider, and a frame (fixed link). It converts rotary motion into reciprocating or oscillating motion, or vice-versa.
*   **Components:**
    1.  **Crank:** A rotating link (e.g., crankshaft in an engine).
    2.  **Connecting Rod:** A link connecting the crank to the slider.
    3.  **Slider (Piston):** A link that reciprocates or slides in a fixed guide (e.g., piston in a cylinder).
    4.  **Frame:** The fixed link (e.g., engine block).

*   **Degrees of Freedom:** A standard slider-crank mechanism has 1 DOF ($n=4$ links, $j=4$ joints, all 1-DOF):
    $F = 3(4-1) - 2(4) = 3(3) - 8 = 9 - 8 = 1$

*   **Types of Slider Crank Mechanisms:** Based on which link is fixed, the slider-crank mechanism can be inverted to produce different types of mechanisms.

    *   **First Inversion (Standard Slider Crank):** Frame is fixed. Crank rotates, slider reciprocates.
        *   **Example:** Reciprocating engine, reciprocating pump.
        *   **Textbook Reference:** Ballaney P. L., "Theory of Machines and Mechanisms" (Chapter on Mechanisms, Slider Crank Mechanism).

    *   **Second Inversion (Whitworth Quick Return Mechanism):** Slider is fixed. Crank rotates, connecting rod's end reciprocates.
        *   **Description:** This mechanism provides a quick return stroke for the cutting tool in shaping and slotting machines. The time ratio (ratio of cutting stroke time to return stroke time) is less than 1.
        *   **Analysis:** The crank rotates at a constant angular velocity ($\omega$). The length of the crank is $r$, and the length of the connecting rod is $l$. The slider's stroke is $2r$.
        *   **Example:** Shaping machines, slotting machines.
        *   **Textbook Reference:** Rattan S. S., "Theory of Machines" (Chapter on Mechanisms, Slider Crank Mechanisms).

    *   **Third Inversion (Engine or Crank-Slotted Lever Mechanism):** Connecting rod is fixed. Crank rotates, slider reciprocates.
        *   **Description:** The slider's motion is a part of a sinusoidal curve.
        *   **Example:** Oscillating cylinder engines (rarely used).

    *   **Fourth Inversion (Crank-Rocker Mechanism):** Crank is fixed. Slider reciprocates, connecting rod oscillates.
        *   **Description:** The connecting rod oscillates about the fixed crank.
        *   **Example:** Beam engines (historical), some types of radial engines.
        *   **Reference Book:** Wilson, C. E., Sadler, P., "Kinematics and Dynamics of Machinery" (Chapter on Mechanisms, Slider Crank Inversions).

*   **Relevance to CO1:** This section directly addresses the interpretation of inversions of mechanisms, a key part of the first course outcome.

### 4. Kinematic Analysis of Slider Crank Mechanism (Velocity and Acceleration)

This is a core aspect of understanding the motion characteristics of the mechanism.

*   **Assumptions:**
    *   Planar mechanism (all motion in one plane).
    *   Rigid links.
    *   Crank rotates at a constant angular velocity $\omega$.

*   **Velocity Analysis:**
    *   **Graphical Method:** Using velocity polygons.
    *   **Analytical Method:** Using complex numbers or vector loops.

    Let:
    *   $r$ = length of the crank
    *   $l$ = length of the connecting rod
    *   $\theta$ = angle of the crank with respect to the horizontal (or fixed dead center)
    *   $\phi$ = angle of the connecting rod with respect to the horizontal
    *   $\omega$ = angular velocity of the crank
    *   $\dot{\theta} = \omega$
    *   $v_C$ = velocity of the crank pin C
    *   $v_S$ = velocity of the slider S

    **Velocity of Crank Pin (C):**
    $v_C = r \omega$ (tangential to the circle traced by C)

    **Velocity of Slider (S):**
    The slider moves horizontally.
    $v_S = v_x$ (velocity of point X on the connecting rod, which is on the slider)

    **Relating Angles:** From the geometry of the mechanism:
    $r \sin \theta = l \sin \phi$
    $l \cos \phi + r \cos \theta = \text{stroke} = 2r$ (when crank is at $\theta=0$, slider is at $x=0$)
    This simplifies to: $x = r(1 - \cos \theta) + l(1 - \cos \phi)$ (for stroke calculation)

    From $r \sin \theta = l \sin \phi$, we get $\sin \phi = \frac{r}{l} \sin \theta$.
    And $\cos \phi = \sqrt{1 - \sin^2 \phi} = \sqrt{1 - \left(\frac{r}{l}\right)^2 \sin^2 \theta}$.

    **Velocity of Slider (Analytical):**
    The displacement of the slider from the inner dead center is:
    $x = r(1 - \cos \theta) + l(1 - \cos \phi)$
    $x = r(1 - \cos \theta) + l \left(1 - \sqrt{1 - \left(\frac{r}{l}\right)^2 \sin^2 \theta}\right)$

    Differentiating with respect to time ($t$):
    $\dot{x} = v_S = \frac{dx}{dt} = \frac{dx}{d\theta} \frac{d\theta}{dt} = \frac{dx}{d\theta} \omega$

    $\frac{dx}{d\theta} = r \sin \theta + l \left(0 - \frac{1}{2\sqrt{1 - (\frac{r}{l})^2 \sin^2 \theta}} \cdot \left(-\frac{r^2}{l^2}\right) \cdot 2 \sin \theta \cos \theta \cdot 2\right)$
    $\frac{dx}{d\theta} = r \sin \theta + \frac{l \cdot (\frac{r^2}{l^2}) \cdot 2 \sin \theta \cos \theta}{2\sqrt{1 - (\frac{r}{l})^2 \sin^2 \theta}}$
    $\frac{dx}{d\theta} = r \sin \theta + \frac{r^2}{l} \frac{\sin \theta \cos \theta}{\sqrt{1 - (\frac{r}{l})^2 \sin^2 \theta}}$

    Since $\sin \phi = \frac{r}{l} \sin \theta$ and $\cos \phi = \sqrt{1 - (\frac{r}{l})^2 \sin^2 \theta}$,
    $\frac{dx}{d\theta} = r \sin \theta + \frac{r^2}{l} \frac{\sin \theta \cos \theta}{\cos \phi}$
    $\frac{dx}{d\theta} = r \sin \theta + r \left(\frac{r}{l} \sin \theta\right) \frac{\cos \theta}{\cos \phi}$
    $\frac{dx}{d\theta} = r \sin \theta + r \sin \phi \frac{\cos \theta}{\cos \phi}$
    $\frac{dx}{d\theta} = r \sin \theta + r \sin \phi \cot \theta$ (This is not correct, let's use $\phi$ relation directly)

    From the velocity polygon or vector loop, the velocity of the slider is:
    $v_S = r \omega \sin \theta + l \dot{\phi} \cos \phi$
    And $v_C = v_S + v_{SC}$ (velocity of S relative to C).
    $v_C = r \omega$ (horizontal)
    $v_S = v_X$ (horizontal)
    $v_{SC} = l \dot{\phi}$ (perpendicular to the connecting rod)

    Using the velocity polygon for the slider crank:
    Velocity of crank pin C, $v_C = r \omega$ (tangential).
    Velocity of slider S, $v_S$ (horizontal).
    Velocity of slider S relative to crank pin C, $v_{SC}$.

    Draw vector $v_C$ from O (pivot of crank).
    From the end of $v_C$, draw $v_{SC}$ perpendicular to the connecting rod.
    From O, draw $v_S$ horizontally. The closure of the polygon gives $v_{SC}$ and $v_S$.

    From the velocity polygon:
    $v_S = v_C \cos \phi + v_{SC} \sin \phi$
    $v_{SC} = v_C \sin \phi - v_S \cos \phi$  (This is incorrect, need to be careful with vector directions)

    Let's use the vector loop equation for velocity:
    $\vec{v}_C = \vec{v}_S + \vec{v}_{C/S}$
    $r \omega \hat{i} = v_S \hat{i} + v_{SC} \hat{j}'$ where $\hat{j}'$ is perpendicular to the connecting rod.

    Alternatively, consider velocity of C relative to S:
    $\vec{v}_C = \vec{v}_S + \vec{v}_{C/S}$
    $r \omega (\cos \theta \hat{i} + \sin \theta \hat{j}) = v_S \hat{i} + l \dot{\phi} (-\sin \phi \hat{i} + \cos \phi \hat{j})$

    Resolving vertically:
    $r \omega \sin \theta = l \dot{\phi} \cos \phi$
    $\dot{\phi} = \frac{r \omega \sin \theta}{l \cos \phi} = \frac{r \omega \sin \theta}{l \sqrt{1 - (\frac{r}{l})^2 \sin^2 \theta}}$

    Resolving horizontally:
    $r \omega \cos \theta = v_S - l \dot{\phi} \sin \phi$
    $v_S = r \omega \cos \theta + l \dot{\phi} \sin \phi$
    $v_S = r \omega \cos \theta + l \left(\frac{r \omega \sin \theta}{l \cos \phi}\right) \sin \phi$
    $v_S = r \omega \cos \theta + r \omega \frac{\sin \theta \sin \phi}{\cos \phi}$
    $v_S = r \omega \left(\cos \theta + \frac{\sin \theta \sin \phi}{\cos \phi}\right)$
    $v_S = r \omega \left(\frac{\cos \theta \cos \phi + \sin \theta \sin \phi}{\cos \phi}\right)$
    $v_S = r \omega \frac{\cos(\theta - \phi)}{\cos \phi}$

    This expression is complex. A more common and useful expression is derived from the displacement equation:
    $x = r(1 - \cos \theta) + l(1 - \cos \phi)$
    $\dot{x} = v_S = r \omega \sin \theta + l \omega \frac{\sin \theta \cos \theta}{\sqrt{1 - (\frac{r}{l})^2 \sin^2 \theta}}$ (from differentiation of $x$ w.r.t $\theta$)

    A simplified approximation for small $\phi$ (when $r/l$ is small):
    $\cos \phi \approx 1$ and $\sin \phi \approx \frac{r}{l} \sin \theta$.
    $v_S \approx r \omega \sin \theta$.
    This approximation is valid for many engines where $l \gg r$.

    *   **Reference Book:** Shigley, J. E., Uicker, J. J., "Theory of Machines and Mechanisms" (Chapter on Kinematic Analysis of Mechanisms, Slider Crank).

*   **Acceleration Analysis:**
    *   **Graphical Method:** Using acceleration polygons.
    *   **Analytical Method:** Differentiating the velocity equations.

    **Acceleration of Crank Pin (C):**
    $a_C = \frac{v_C^2}{r} = r \omega^2$ (centripetal acceleration, radial to the center of rotation)
    The tangential acceleration is $r \alpha$, where $\alpha$ is the angular acceleration of the crank. If $\omega$ is constant, $\alpha = 0$. So, $a_C$ is purely radial.

    **Acceleration of Slider (S):**
    $a_S = \frac{d v_S}{dt} = \frac{d}{dt} \left( r \omega \frac{\cos(\theta - \phi)}{\cos \phi} \right)$ (using the more general velocity expression)

    A more practical approach is to differentiate the velocity of the slider derived from the displacement equation:
    $v_S = r \omega \sin \theta + l \dot{\phi} \cos \phi$

    We know $\dot{\phi} = \frac{r \omega \sin \theta}{l \cos \phi}$.
    $v_S = r \omega \sin \theta + r \omega \frac{\sin \theta \sin \phi}{\cos \phi}$
    $v_S = r \omega \sin \theta + r \omega \sin \theta \tan \phi$
    $v_S = r \omega \sin \theta (1 + \tan \phi)$ (This is incorrect)

    Let's go back to the derivative of displacement:
    $v_S = r \omega \sin \theta + l \omega \frac{\sin \theta \cos \theta}{\sqrt{1 - (\frac{r}{l})^2 \sin^2 \theta}}$
    This is cumbersome to differentiate.

    **Using Acceleration Polygon:**
    $\vec{a}_C = \vec{a}_S + \vec{a}_{C/S}$
    $\vec{a}_C = \vec{a}_S + \vec{a}_{C/S}^{\text{normal}} + \vec{a}_{C/S}^{\text{tangential}}$

    $\vec{a}_C$: radial, pointing towards the crank center O. Magnitude $r \omega^2$.
    $\vec{a}_S$: horizontal, along the slider guide. Magnitude $a_S$.
    $\vec{a}_{C/S}^{\text{normal}}$: perpendicular to the connecting rod. Magnitude $l \dot{\phi}^2$.
    $\vec{a}_{C/S}^{\text{tangential}}$: perpendicular to the connecting rod. Magnitude $l \ddot{\phi}$.

    *   **Constant $\omega$:** $\vec{a}_C$ is purely radial. $\alpha=0$.
    *   $\vec{a}_C = \vec{a}_S + \vec{a}_{C/S}$
    *   $r \omega^2 \angle (\theta + 90^\circ) = a_S \hat{i} + l \dot{\phi}^2 \angle (\phi + 90^\circ) + l \ddot{\phi} \angle (\phi)$ (Incorrect direction for relative tangential)

    Let's use the correct vector addition:
    $\vec{a}_C = \vec{a}_S + \vec{a}_{C/S}^{\text{normal}} + \vec{a}_{C/S}^{\text{tangential}}$
    $\vec{a}_C$: $r \omega^2$ directed from C towards O.
    $\vec{a}_S$: $a_S$ directed horizontally.
    $\vec{a}_{C/S}^{\text{normal}}$: $l \dot{\phi}^2$ directed from S towards C, perpendicular to the connecting rod.
    $\vec{a}_{C/S}^{\text{tangential}}$: $l \ddot{\phi}$ directed perpendicular to the connecting rod, perpendicular to $\vec{a}_{C/S}^{\text{normal}}$.

    The acceleration of S relative to C: $\vec{a}_{C/S} = \vec{a}_C - \vec{a}_S$.
    This relative acceleration vector is decomposed into normal and tangential components with respect to the connecting rod.

    $a_{C/S}^{\text{normal}} = l \dot{\phi}^2$ (always present as long as $\dot{\phi} \neq 0$).
    $a_{C/S}^{\text{tangential}} = l \ddot{\phi}$ (tangential acceleration of C as seen from S).

    Correct vector equation:
    $\vec{a}_C = \vec{a}_S + \vec{a}_{C/S}$
    $\vec{a}_C$: $r\omega^2$ along OC (pointing to O).
    $\vec{a}_S$: $a_S$ along the slider guide (horizontal).
    $\vec{a}_{C/S}$: $l\dot{\phi}^2$ along CS (pointing to C), $l\ddot{\phi}$ perpendicular to CS.

    We can resolve this vectorially.
    $\vec{a}_C = \vec{a}_S + \vec{a}_{C/S}^{\text{normal}} + \vec{a}_{C/S}^{\text{tangential}}$
    $\vec{a}_C$: $r\omega^2$ pointing from C to O.
    $\vec{a}_S$: $a_S$ horizontal.
    $\vec{a}_{C/S}^{\text{normal}}$: $l\dot{\phi}^2$ from S to C (perpendicular to connecting rod).
    $\vec{a}_{C/S}^{\text{tangential}}$: $l\ddot{\phi}$ perpendicular to connecting rod.

    Let's draw the acceleration polygon.
    Start with $\vec{a}_C$ from origin O.
    Then $\vec{a}_S$ starting from the end of $\vec{a}_C$, horizontally.
    From the end of $\vec{a}_S$, draw $\vec{a}_{C/S}^{\text{normal}}$ (perpendicular to the connecting rod).
    From the origin O, draw $\vec{a}_{C/S}^{\text{tangential}}$ (perpendicular to the connecting rod).
    This is not right.

    Correct Acceleration Polygon Construction:
    1.  Draw $\vec{a}_C$ from O, pointing towards O (magnitude $r\omega^2$).
    2.  From the end of $\vec{a}_C$, draw $\vec{a}_S$, horizontally.
    3.  From O, draw $\vec{a}_{C/S}^{\text{normal}}$ of magnitude $l\dot{\phi}^2$, perpendicular to the connecting rod.
    4.  From the end of $\vec{a}_S$, draw $\vec{a}_{C/S}^{\text{tangential}}$ of magnitude $l\ddot{\phi}$, perpendicular to the connecting rod.
    5.  These vectors must form a closed loop.

    A common way to set up the polygon:
    $\vec{a}_S = \vec{a}_C + \vec{a}_{S/C}$
    $\vec{a}_C = a_C \angle (\theta + 180^\circ)$ (if $\theta$ is measured from horizontal, $a_C$ is radial to center)
    $\vec{a}_S = a_S \hat{i}$
    $\vec{a}_{S/C}^{\text{normal}} = l \dot{\phi}^2 \angle (\phi + 90^\circ)$ (pointing from C to S, perpendicular to CR)
    $\vec{a}_{S/C}^{\text{tangential}} = l \ddot{\phi} \angle \phi$ (perpendicular to CR)

    Let's use the common vector equation approach:
    $\vec{v}_C = \vec{v}_S + \vec{v}_{C/S}$
    $\vec{a}_C = \vec{a}_S + \vec{a}_{C/S}$
    $\vec{a}_C = \vec{a}_S + \vec{a}_{C/S}^{\text{normal}} + \vec{a}_{C/S}^{\text{tangential}}$

    Where:
    $\vec{a}_C = -r\omega^2 \cos\theta \hat{i} - r\omega^2 \sin\theta \hat{j}$ (assuming $\theta$ is angle from horizontal, O is origin, C is crank pin)
    $\vec{a}_S = a_S \hat{i}$
    $\vec{a}_{C/S}^{\text{normal}} = -l\dot{\phi}^2 \cos\phi \hat{i} - l\dot{\phi}^2 \sin\phi \hat{j}$ (normal component of C relative to S, pointing towards S if connecting rod is OC)
    $\vec{a}_{C/S}^{\text{tangential}} = l\ddot{\phi} \sin\phi \hat{i} - l\ddot{\phi} \cos\phi \hat{j}$

    This is getting very complex. A simplified expression for acceleration is usually preferred for calculations.
    For constant $\omega$:
    $a_S = \frac{d v_S}{dt}$
    Using the approximate velocity $v_S \approx r \omega \sin \theta$:
    $a_S \approx \frac{d}{dt}(r \omega \sin \theta) = r \omega \cos \theta \cdot \dot{\theta} = r \omega^2 \cos \theta$.
    This is a first-order approximation.

    A more accurate approximation for $v_S$:
    $v_S = r \omega (\sin \theta + \frac{r}{2l} \sin 2\theta)$ (This comes from series expansion of the exact velocity formula for small $r/l$)
    $a_S = \frac{d v_S}{dt} = r \omega (\cos \theta \cdot \dot{\theta} + \frac{r}{2l} \cdot 2 \cos 2\theta \cdot \dot{\theta})$
    $a_S = r \omega^2 (\cos \theta + \frac{r}{l} \cos 2\theta)$

    This simplified formula is very common for reciprocating engines.
    *   $\theta$: crank angle
    *   $\omega$: angular velocity of crank
    *   $r$: crank radius
    *   $l$: connecting rod length

    **Relevance to CO2:** This section is crucial for performing velocity and acceleration analysis of planar mechanisms, directly addressing CO2.

*   **Graphical Method (Velocity Polygon):**
    1.  Draw the mechanism to scale.
    2.  Choose a suitable velocity scale.
    3.  Draw the velocity vector of the crank pin ($\vec{v}_C$) from the fixed point (e.g., origin O). Its magnitude is $r\omega$, and direction is perpendicular to the crank.
    4.  From the end of $\vec{v}_C$, draw $\vec{v}_{SC}$ perpendicular to the connecting rod.
    5.  From the origin O, draw $\vec{v}_S$ horizontally (parallel to the slider's motion).
    6.  The intersection of the lines from steps 4 and 5 gives the endpoint of $\vec{v}_S$ and $\vec{v}_{SC}$.
    7.  Measure $v_S$ and $v_{SC}$ from the drawing and convert to actual velocities using the velocity scale.

*   **Graphical Method (Acceleration Polygon):**
    1.  Draw the mechanism to scale.
    2.  Calculate the centripetal accelerations ($r\omega^2$ for crank pin, $l\dot{\phi}^2$ for connecting rod pin).
    3.  Choose a suitable acceleration scale.
    4.  Draw $\vec{a}_C$ (centripetal acceleration of crank pin) from the fixed point O, directed towards O.
    5.  From the end of $\vec{a}_C$, draw $\vec{a}_S$ horizontally.
    6.  From O, draw $\vec{a}_{C/S}^{\text{normal}}$, perpendicular to the connecting rod (magnitude $l\dot{\phi}^2$).
    7.  From the end of $\vec{a}_S$, draw $\vec{a}_{C/S}^{\text{tangential}}$, perpendicular to the connecting rod.
    8.  The acceleration of the slider ($a_S$) and the angular acceleration of the connecting rod ($\ddot{\phi}$) can be found by closing the polygon.

*   **Relevance to CO2:** Both graphical and analytical methods are key for CO2.

### 5. Dynamic Analysis of Slider Crank Mechanism

While the module focuses on kinematics, understanding dynamics is essential for real-world applications. This involves considering forces and inertia.

*   **Inertia Forces:** The reciprocating masses (piston, connecting rod) have inertia forces due to their acceleration.
*   **Force Analysis:** Forces acting on the links (gas pressure, friction, inertia forces) determine the torque required for rotation and the stresses in the links.
*   **Work-Energy Principles:** Can be used to analyze the performance of the mechanism.
*   **Textbook Reference:** Rattan S. S., "Theory of Machines" (Chapter on Dynamics of Machinery).
*   **Reference Book:** Norton, "Kinematics and Dynamics of Machinery" (Chapter on Force Analysis).

### 6. Applications of Slider Crank Mechanisms

*   **Reciprocating Engines (Internal Combustion Engines):** Converts the linear motion of the piston into the rotary motion of the crankshaft.
*   **Pumps and Compressors:** Converts rotary motion into reciprocating motion of the piston.
*   **Steam Engines:** Similar to IC engines, but powered by steam.
*   **Shapers and Slotting Machines:** The Whitworth quick-return mechanism (second inversion) is used to control the tool motion.
*   **Sewing Machines:** Often incorporate slider-crank mechanisms for needle movement.
*   **Power Tools:** Many power tools utilize slider-crank motion for cutting or drilling.
*   **Relevance to CO3:** Understanding how the slider-crank mechanism translates motion allows for its application in creating mechanisms for specific output motions.

### 7. Design Considerations

*   **Stroke:** The maximum displacement of the slider ($2r$).
*   **Turning Ratio:** The ratio of the time taken for the slider to move from inner dead center to outer dead center versus the time taken to return. For a standard slider-crank, this ratio is 1:1 if the crank rotates at a constant speed. However, due to the obliquity of the connecting rod, the piston moves faster on the power stroke.
*   **Balancing:** Inertia forces from reciprocating masses can cause vibrations. Counterweights on the crankshaft and other balancing techniques are used.
*   **Relevance to CO5:** Designing a prototype requires understanding these design aspects.

### 8. Practice Questions and Exercises

**Question 1:**
A slider crank mechanism has a crank of length 100 mm and a connecting rod of length 400 mm. The crank rotates at 300 rpm. Determine the velocity of the slider when the crank is at 60° from the inner dead center. Use the approximate formula.

**Answer:**
Given:
*   Crank radius, $r = 100$ mm = 0.1 m
*   Connecting rod length, $l = 400$ mm = 0.4 m
*   Crank speed, $N = 300$ rpm
*   Crank angle, $\theta = 60^\circ$

Angular velocity of crank, $\omega = \frac{2 \pi N}{60} = \frac{2 \pi \times 300}{60} = 10 \pi$ rad/s $\approx 31.42$ rad/s

Using the approximate formula for the velocity of the slider:
$v_S \approx r \omega \sin \theta$
$v_S \approx (0.1 \text{ m}) \times (10 \pi \text{ rad/s}) \times \sin(60^\circ)$
$v_S \approx 0.1 \times 10 \pi \times \frac{\sqrt{3}}{2}$
$v_S \approx \pi \times \sqrt{3} \times 0.5 \approx 5.44$ m/s

**Question 2:**
State the four inversions of the slider-crank mechanism and give one application for each.

**Answer:**
1.  **First Inversion (Standard Slider Crank):** Frame fixed. Crank rotates, slider reciprocates.
    *   **Application:** Reciprocating engines, pumps.
2.  **Second Inversion (Whitworth Quick Return Mechanism):** Slider fixed. Crank rotates, connecting rod's end reciprocates.
    *   **Application:** Shaping machines, slotting machines (for quick return of cutting tool).
3.  **Third Inversion (Engine or Crank-Slotted Lever Mechanism):** Connecting rod fixed. Crank rotates, slider reciprocates.
    *   **Application:** Oscillating cylinder engines.
4.  **Fourth Inversion (Crank-Rocker Mechanism):** Crank fixed. Slider reciprocates, connecting rod oscillates.
    *   **Application:** Beam engines.

**Question 3:**
For a slider crank mechanism, derive the expression for the acceleration of the slider assuming constant angular velocity of the crank and considering the obliquity of the connecting rod.

**Answer:**
(Refer to Section 4, Acceleration Analysis, for the derivation of $a_S = r \omega^2 (\cos \theta + \frac{r}{l} \cos 2\theta)$)

**Question 4:**
Calculate the acceleration of the slider for the mechanism in Question 1, when the crank is at 60° from the inner dead center. Assume the angular velocity of the crank is constant.

**Answer:**
Given:
*   Crank radius, $r = 0.1$ m
*   Connecting rod length, $l = 0.4$ m
*   Angular velocity of crank, $\omega = 10 \pi$ rad/s
*   Crank angle, $\theta = 60^\circ$

Using the approximate formula for acceleration of the slider (considering obliquity):
$a_S \approx r \omega^2 (\cos \theta + \frac{r}{l} \cos 2\theta)$

First, calculate $\cos \theta$ and $\cos 2\theta$:
$\cos 60^\circ = 0.5$
$2\theta = 120^\circ$, so $\cos 120^\circ = -0.5$

Now, substitute the values:
$a_S \approx (0.1 \text{ m}) \times (10 \pi \text{ rad/s})^2 \times (0.5 + \frac{0.1 \text{ m}}{0.4 \text{ m}} \times (-0.5))$
$a_S \approx 0.1 \times (100 \pi^2) \times (0.5 + 0.25 \times (-0.5))$
$a_S \approx 10 \pi^2 \times (0.5 - 0.125)$
$a_S \approx 10 \pi^2 \times 0.375$
$a_S \approx 10 \times (9.8696) \times 0.375 \approx 37.01$ m/s$^2$

### 9. Important Points to Remember

*   **DOF Calculation:** Always use the correct Gruebler's formula or Kutzbach's criterion.
*   **Slider Crank Inversions:** Understand how fixing different links leads to different mechanisms and applications.
*   **Velocity and Acceleration:** Graphical methods provide visual understanding, while analytical methods offer precise calculations. For approximate analysis of reciprocating engines, remember the simplified formulas for $v_S$ and $a_S$.
*   **Obliquity Effect:** The ratio $r/l$ affects the accuracy of approximations. For engines where $l \gg r$, the approximations are generally good.
*   **Constant $\omega$:** Simplifies acceleration analysis as tangential acceleration of the crank is zero.
*   **Applications:** The slider-crank is a fundamental mechanism with widespread use.

### 10. Linking to Course Outcomes

*   **CO1:** Covered in Section 2 (Degrees of Freedom) and Section 3 (Slider Crank Inversions).
*   **CO2:** Covered extensively in Section 4 (Kinematic Analysis).
*   **CO3:** Understanding the transformation of motion in slider-crank mechanisms aids in constructing mechanisms for specified outputs. For example, using the fourth inversion (crank-rocker) can generate an oscillating output from a linear input.
*   **CO4:** While this topic doesn't directly cover cams or gears, the analytical techniques learned here (vector loops, differentiation for kinematics) are foundational for analyzing those topics.
*   **CO5:** Understanding the kinematics and design considerations of the slider-crank mechanism is essential for creating prototypes of machines that use it (e.g., a model engine).

This comprehensive set of notes should provide a strong foundation for understanding slider-crank mechanisms within the context of Mechanics of Machinery.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
