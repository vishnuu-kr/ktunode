---
title: "Linear Induction Motor – Construction- Thrust Equation, Transverse edge and end effects- Equivalent Circuit, Thrust-Speed characteristics, Applications."
subject: "SPECIAL ELECTRICAL MACHINES"
module: "Module 4: Linear Electric Machines: Linear motors – different types – linear reluctance motor "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368aa"
status: "completed"
scrapedAt: "2026-05-23T16:39:44.788Z"
---
## Special Electrical Machines - Module 4: Linear Electric Machines

### Topic: Linear Induction Motor (LIM)

---

**Learning Outcomes Covered:**

*   Understand the construction of a Linear Induction Motor.
*   Derive and comprehend the thrust equation of a LIM.
*   Analyze the impact of transverse edge and end effects on LIM performance.
*   Understand the equivalent circuit of a LIM.
*   Analyze the thrust-speed characteristics of a LIM.
*   Identify various applications of LIMs.

---

**Course Outcomes Alignment:**

*   **CO4:** Explain the constructional details and working of linear induction motor (Knowledge Level: K2). This entire topic directly addresses CO4.

---

### 1. Introduction to Linear Induction Motors (LIMs)

*   **Definition:** A Linear Induction Motor (LIM) is essentially a rotary induction motor unrolled into a flat or U-shaped configuration. It produces linear motion directly, without the need for any mechanical conversion from rotary motion (like gears or screws).
*   **Princ of Operation:** LIMs operate on the principle of electromagnetic induction, similar to conventional rotary induction motors. A moving magnetic field interacts with induced currents in a conductive track, generating a linear force (thrust).

**Key Concept:** The core principle is the induction of currents in a conducting secondary element by a travelling magnetic field produced by a primary element. The interaction between the magnetic field and these induced currents results in linear force.

---

### 2. Construction of a Linear Induction Motor

LIMs typically consist of two main parts: the primary and the secondary.

#### 2.1. Primary (Stator)

*   **Structure:** The primary of a LIM is similar to the stator of a rotary induction motor. It comprises a core (usually laminated iron) with slots in which windings are placed.
*   **Function:** The primary houses the coils that, when energized by a polyphase AC supply, generate a travelling magnetic field.
*   **Types of Primary:**
    *   **Short Primary:** This is the more common configuration. The primary is relatively short and moves over a long, stationary secondary. This is often preferred for applications where the mover (primary) needs to be lightweight.
    *   **Long Primary:** In this configuration, the primary is long, and the secondary is short. The secondary is essentially a passive conductor plate that the primary moves along. This is less common due to the weight of the long primary.

#### 2.2. Secondary (Rotor/Track)

*   **Structure:** The secondary is a conductive plate or bar assembly.
    *   **Conductive Plate:** Typically made of aluminum or copper, often backed by a ferromagnetic material (like steel) to enhance the magnetic flux path.
    *   **Conductive Bars:** Similar to the squirrel cage rotor of a rotary induction motor, the secondary can be made of conductive bars short-circuited at the ends.
*   **Function:** The secondary is acted upon by the travelling magnetic field of the primary. Eddy currents are induced in the secondary, which interact with the magnetic field to produce the linear thrust.
*   **Types of Secondary:**
    *   **Passive Secondary:** This is the most common type for short primary LIMs. It is made of conductive material (e.g., aluminum) and is not energized. The steel backing provides a return path for magnetic flux.
    *   **Active Secondary:** In some designs, especially for long primary configurations or specific applications, the secondary might contain windings that can be energized or be a permanent magnet array. This is less typical for standard LIMs.

**Key Concept:** The LIM is essentially a rotary induction motor that has been "cut" and straightened. The primary acts as the stator, and the secondary acts as the rotor.

**Textbook Reference:**
*   **Janardhan (2014):** Likely discusses the fundamental construction of short and long primary LIMs, similar to unrolling a squirrel cage motor.
*   **Venkataratnam (2008):** Will provide detailed descriptions of primary and secondary construction materials and their roles.
*   **Vedanarayanan (2021):** May offer insights into the mechanical aspects of mounting and supporting the primary and secondary elements.

---

### 3. Thrust Equation of a Linear Induction Motor

The thrust developed by a LIM is analogous to the torque developed by a rotary induction motor. The thrust equation can be derived using principles of electromagnetic energy conversion.

**Derivation Approach (Simplified):**

1.  **Force from Maxwell's Equations:** The force on a conductor carrying current in a magnetic field is given by $\vec{F} = I (\vec{L} \times \vec{B})$.
2.  **Induced Currents:** The travelling magnetic field from the primary induces currents in the secondary.
3.  **Interaction:** The interaction between the induced currents and the primary's magnetic field produces the thrust.
4.  **Analogy to Rotary Motor:** We can relate the thrust to the power developed. For a rotary motor, Torque ($T$) and speed ($\omega$) relate to power: $P = T\omega$. For a LIM, Thrust ($F$) and linear velocity ($v$) relate to power: $P = Fv$.

**Simplified Thrust Equation:**

The thrust ($F$) developed by a LIM can be expressed in a form similar to the torque equation of a rotary induction motor.

For a balanced three-phase LIM, the thrust can be approximated as:

$F = \frac{3 \cdot s \cdot V_1^2 \cdot R_2' / p_p^2}{\omega_s \cdot [(R_1 + R_2'/s)^2 + (X_1 + X_2')^2]} \times k$

Where:

*   $s$: Slip (defined as $s = (\omega_s - \omega_m) / \omega_s$ for rotary, or $s = (v_s - v) / v_s$ for linear, where $v_s$ is synchronous linear speed and $v$ is actual linear speed).
*   $V_1$: Voltage per phase of the primary.
*   $R_1$: Resistance of the primary winding per phase.
*   $X_1$: Reactance of the primary winding per phase.
*   $R_2'$: Resistance of the secondary conductor per phase, referred to the primary.
*   $X_2'$: Reactance of the secondary conductor per phase, referred to the primary.
*   $\omega_s$: Synchronous linear speed (rad/s per pole pitch distance). $\omega_s = 2\pi v_s$, where $v_s$ is the synchronous linear speed in m/s.
*   $p_p$: Number of pole pitches of the primary. (Length of one pole pitch is $L_p = 2\tau$, where $\tau$ is the pole pitch).
*   $k$: A constant factor related to motor geometry and flux distribution.

**More commonly expressed in terms of air-gap power ($P_{ag}$) and synchronous speed:**

$P_{ag} = F \cdot v$

$F = \frac{P_{ag}}{v}$

And $P_{ag} = \frac{3 s V_1^2 R_2' / (\tau \cdot p_p)^2}{\omega_s [(R_1 + R_2'/s)^2 + (X_1 + X_2')^2]}$

Where:
*   $\tau$: Pole pitch (distance between successive north or south poles in the primary). The linear speed $v_s = 2 \tau f$, where $f$ is the supply frequency.

**Key Concept:** The thrust developed is proportional to the slip, the square of the applied voltage, and inversely proportional to the impedance of the motor.

**Textbook Reference:**
*   **Janardhan (2014):** Will likely present a simplified derivation and the final thrust equation.
*   **Venkataratnam (2008):** Offers a more rigorous derivation, possibly using the concept of electromagnetic torque and power conversion.
*   **Vedanarayanan (2021):** Might focus on the practical implications of the thrust equation for performance analysis.

---

### 4. Transverse Edge and End Effects

Unlike rotary induction motors, LIMs have open magnetic circuits, leading to unique phenomena known as edge and end effects, which significantly impact performance.

#### 4.1. Transverse Edge Effects

*   **Cause:** Occurs at the sides (transverse direction) of the secondary track. The magnetic field fringe out at the edges, meaning the magnetic field is not uniform across the width of the secondary.
*   **Impact:**
    *   **Reduced Thrust:** The magnetic flux lines are not fully utilized, leading to a lower thrust compared to an ideal motor of the same dimensions.
    *   **Increased End-Turn Reactance:** Leakage flux at the edges increases the effective reactance.
    *   **Eddy Currents at Edges:** Eddy currents are induced in the side edges of the secondary, contributing to losses and potentially generating spurious forces.
*   **Mitigation:**
    *   **Wider Secondary:** Using a secondary track wider than the primary can reduce the impact.
    *   **Shielding:** Magnetic shielding can be employed.

#### 4.2. End Effects (Longitudinal Edge Effects)

*   **Cause:** Occurs at the beginning and end of the primary (longitudinal direction). As the primary enters and leaves the region of the secondary, the magnetic field is not fully established or is collapsing.
*   **Impact:**
    *   **Thrust Variation:** Thrust is not constant as the motor moves. It is lower when starting and at the end of the stroke.
    *   **Increased Reactance:** Leakage flux at the ends increases the effective leakage reactance of the primary.
    *   **Eddy Currents in Primary:** Eddy currents can be induced in the primary windings and structure during startup and shutdown, leading to additional losses.
    *   **Reduced Power Factor:** The increased reactance leads to a lower power factor.
    *   **Dead Zones:** In short-stroke applications, the end effects can dominate, reducing the effective stroke length.
*   **Mitigation:**
    *   **Pole Shortening:** Reducing the length of the end poles of the primary.
    *   **Pole Compensating Windings:** Adding special windings to counteract the end effects.
    *   **Gradual Energization/De-energization:** Controlling the supply to the primary more smoothly.
    *   **Longer Secondary:** Providing a longer secondary than the primary to allow for acceleration and deceleration without leaving the influence of the magnetic field.

**Key Concepts:**
*   **Open Magnetic Circuit:** LIMs have an open magnetic circuit, meaning the magnetic flux is not confined within a closed loop as in rotary motors.
*   **Fringing Flux:** Magnetic flux lines spread out at the edges.
*   **Leakage Flux:** Flux that does not link both primary and secondary.

**Textbook Reference:**
*   **Janardhan (2014):** Will likely provide qualitative explanations and illustrations of edge and end effects.
*   **Venkataratnam (2008):** May offer mathematical models to quantify these effects and their impact on performance parameters.
*   **Miller (1989):** "Brushless PM and Reluctance Motor Drives" might discuss similar fringe effects in linear reluctance motors that could be analogous.

---

### 5. Equivalent Circuit of a Linear Induction Motor

The equivalent circuit of a LIM is conceptually similar to that of a rotary induction motor, with the addition of terms to account for the linear nature and potential effects. It is typically represented as a per-phase circuit for the primary.

**Standard Per-Phase Equivalent Circuit:**

The circuit represents one phase of the primary winding and its interaction with the secondary.

```
      R1      X1
----/\/\/\----jX1----|
|                       |
Vs                      Rc  // Core Loss Resistance
|                       |
---/--------/----------+-----
         Rp/s       jX2'
          |          |
         R2'/s   ---/-----
          |          |
         -jXc       jxL
          |          |
         GND         Load (Thrust)
```

Where:

*   $V_1$: Applied voltage per phase.
*   $R_1$: Resistance of the primary winding per phase.
*   $X_1$: Leakage reactance of the primary winding per phase.
*   $R_c$: Core loss resistance (representing hysteresis and eddy current losses in the iron core).
*   $X_m$: Magnetizing reactance (representing the magnetizing inductance of the air gap).
*   $R_2'$: Resistance of the secondary per phase, referred to the primary.
*   $X_2'$: Leakage reactance of the secondary per phase, referred to the primary.
*   $s$: Slip.
*   $R_p$: Rotational loss resistance (analogous to friction and windage in rotary motors; in LIMs, it represents mechanical losses like air resistance and support friction).
*   $P_{ag} = F \cdot v$: Air gap power, often represented as a load resistance $R_{load} = \frac{V_1^2}{P_{ag}} \approx \frac{V_1^2}{F \cdot v}$ or, more commonly, $R_2'(1-s)/s$ in analogy to rotary motors. The thrust $F$ is proportional to $P_{ag}$ and inversely proportional to speed $v$, so $F = P_{ag}/v$.
*   $jX_m$ (Magnetizing Reactance): Often neglected in simplified analysis or merged with other reactances due to the large air gap in LIMs.
*   $jX_L$ (Leakage Reactance): Represents leakage flux in the primary end windings and slots.

**Simplified Equivalent Circuit (Neglecting Core and Magnetizing Losses):**

For many practical analyses, a simplified circuit is used:

```
----/\/\/\----jX1----|
|                       |
Vs                      R2'/s
|                       |
---/--------/----------+-----
         R1          jX2'
          |          |
         -jXc       ---/-----
          |          |
         GND         Thrust (F)
```

Where the term $R_2'(1-s)/s$ is converted to mechanical power ($P_{mech} = s P_{ag}$), and then to thrust $F = P_{mech}/v$.

**Considerations for LIM Equivalent Circuit:**

*   **Large Air Gap:** LIMs typically have larger air gaps than rotary motors, which increases magnetizing reactance and affects the relative importance of different circuit parameters.
*   **Edge Effects:** Edge effects manifest as increased effective reactance and additional losses, which can be incorporated into the equivalent circuit parameters.
*   **End Effects:** End effects lead to a variation in impedance and thrust with position, making a single equivalent circuit an approximation.

**Textbook Reference:**
*   **Janardhan (2014):** Likely presents a basic equivalent circuit similar to a rotary induction motor.
*   **Venkataratnam (2008):** Will provide a detailed explanation of the equivalent circuit and how parameters are derived, including the impact of air gap length and geometry.
*   **Vedanarayanan (2021):** Might focus on the practical application of the equivalent circuit for performance prediction and control.

---

### 6. Thrust-Speed Characteristics

The thrust-speed characteristics of a LIM are a graphical representation of the relationship between the developed thrust and the motor's linear velocity. They are analogous to the torque-speed characteristics of a rotary induction motor.

**Key Features of Thrust-Speed Curve:**

1.  **Starting Thrust:** The thrust developed at zero speed ($v=0$, so $s=1$).
2.  **Maximum Thrust (Pull-out Thrust):** The peak thrust the motor can produce. This occurs at a specific slip value (analogous to breakdown torque).
3.  **Operating Range:** The range of speeds over which the motor can operate stably.
4.  **Synchronous Speed:** The speed at which the magnetic field travels. At this speed, the slip is zero, and ideally, the thrust is zero (unless there are induced currents due to field variations).
5.  **Negative Thrust:** Beyond the synchronous speed, the slip becomes negative, and the motor will decelerate the load or act as a brake.

**Factors Affecting Thrust-Speed Curve:**

*   **Applied Voltage:** Higher voltage leads to higher thrust values across the speed range.
*   **Frequency:** Affects the synchronous speed ($v_s = 2 \tau f$). Changing frequency shifts the entire curve.
*   **Slip:** As seen from the thrust equation, thrust is highly dependent on slip.
*   **Motor Impedance ($R_1, X_1, R_2', X_2'$):** These parameters influence the shape of the curve, particularly the starting thrust and maximum thrust.
*   **Edge and End Effects:** These effects tend to reduce the overall thrust and can make the thrust-speed curve less predictable, especially at low speeds or near the ends of travel.

**General Shape of the Curve:**

*   The curve typically starts at the starting thrust (at $v=0$).
*   As speed increases, thrust increases to a maximum value.
*   Beyond the maximum thrust point, thrust decreases as speed further increases.
*   At synchronous speed, thrust ideally drops to zero.

**Effect of Edge and End Effects:**

*   **Reduced Maximum Thrust:** Edge and end effects reduce the effective magnetic coupling and increase losses, lowering the peak thrust.
*   **Lower Starting Thrust:** End effects are particularly significant at the start, reducing the initial thrust.
*   **Asymmetrical Curve:** The thrust may not be symmetrical around the maximum thrust point due to the nature of end effects.

**Textbook Reference:**
*   **Janardhan (2014):** Will likely show typical thrust-speed curves and discuss their general shape.
*   **Venkataratnam (2008):** Provides detailed analysis and possibly derivations relating the equivalent circuit parameters to the thrust-speed characteristics.
*   **Miller (1989):** Might offer comparative characteristics if it discusses linear drives alongside their rotary counterparts.

---

### 7. Applications of Linear Induction Motors

LIMs are used in a variety of applications where direct linear motion is required, offering advantages like high speed, acceleration, and absence of mechanical wear associated with rotating components.

**Key Application Areas:**

1.  **Transportation Systems:**
    *   **Maglev Trains:** LIMs are used for propulsion and levitation in some Magnetic Levitation (Maglev) train systems.
    *   **Electric Vehicles:** Used in some concepts for linear motor-driven vehicles on guided tracks.
    *   **People Movers:** Automated transit systems in airports and urban areas.
    *   **Roller Coasters:** For acceleration and braking.

2.  **Industrial Automation and Material Handling:**
    *   **Conveyor Systems:** For high-speed sorting, positioning, and conveying of goods.
    *   **Automated Guided Vehicles (AGVs):** For precise linear movement.
    *   **Pick-and-Place Machines:** For rapid and accurate linear positioning.
    *   **Robotics:** For linear axes in robotic arms.
    *   **Automated Storage and Retrieval Systems (AS/RS).**

3.  **Manufacturing and Processing:**
    *   **Linear Welding and Cutting Machines:** For precise linear movement of tools.
    *   **Textile Machinery:** For linear movement of components.
    *   **Printing Presses:** For linear movement of print heads.

4.  **Aerospace and Defence:**
    *   **Aircraft Launch Systems:** Electromagnetic Aircraft Launch System (EMALS) for catapulting aircraft from carriers.
    *   **Projectile Launchers:** For accelerating projectiles.

5.  **Entertainment:**
    *   **Theme Park Rides:** For linear acceleration and deceleration effects.
    *   **Special Effects:** For moving props and set pieces.

**Advantages of LIMs in these applications:**

*   **Direct Linear Motion:** Eliminates the need for rotary-to-linear conversion mechanisms (screws, gears, belts), reducing complexity and wear.
*   **High Speed and Acceleration:** Capable of very high speeds and rapid acceleration/deceleration.
*   **Precise Control:** Can be controlled to achieve precise positioning and speed regulation.
*   **Low Maintenance:** No physical contact between primary and secondary (in most designs), reducing wear and tear.
*   **Quiet Operation:** Generally quieter than some mechanical drive systems.

**Disadvantages:**

*   **Lower Efficiency:** Generally less efficient than comparable rotary induction motors due to end and edge effects and the large air gap.
*   **Higher Cost:** Can be more expensive to manufacture and install.
*   **Heat Dissipation:** Managing heat in the primary can be challenging in high-thrust applications.
*   **Need for Precise Alignment:** Requires careful alignment of the primary and secondary.

**Textbook Reference:**
*   **Janardhan (2014):** Likely lists common industrial and transportation applications.
*   **Venkataratnam (2008):** May provide case studies or detailed explanations of specific applications.
*   **Vedanarayanan (2021):** Could highlight modern or emerging applications and the benefits LIMs offer in specific contexts.

---

### Important Points to Remember

*   LIMs are unrolled rotary induction motors producing linear motion.
*   Construction involves a primary (stator-like) and a secondary (track-like).
*   The thrust equation is analogous to the torque equation of rotary motors, relating thrust to slip, voltage, and impedance.
*   **Transverse edge effects** and **end effects** are critical limitations due to the open magnetic circuit, reducing thrust and increasing losses.
*   The equivalent circuit of a LIM is similar to a rotary motor but needs to account for the specific geometry and effects.
*   Thrust-speed characteristics show the motor's force output as a function of its linear velocity.
*   LIMs excel in high-speed transportation, material handling, and automation where direct linear motion is crucial.

---

### Practice Questions

1.  **Describe the basic construction of a short-primary Linear Induction Motor (LIM).**
    *   **Answer:** A short-primary LIM consists of a primary assembly containing windings arranged like a linear stator, which moves over a long, passive secondary track. The secondary is typically a conductive plate (e.g., aluminum) backed by a ferromagnetic material (e.g., steel). The primary generates a travelling magnetic field that induces currents in the secondary, producing thrust.

2.  **Explain the primary cause of transverse edge effects in a LIM.**
    *   **Answer:** Transverse edge effects are caused by the fringe magnetic field at the sides of the secondary track. This non-uniform field distribution means the magnetic flux is not fully utilized across the width of the secondary, leading to reduced thrust and increased leakage flux.

3.  **How do end effects impact the thrust-speed characteristics of a LIM?**
    *   **Answer:** End effects significantly impact the thrust-speed characteristics by reducing the starting thrust and the maximum thrust. They also contribute to a lower power factor and can create "dead zones" where thrust is minimal at the beginning and end of travel. The thrust-speed curve can be less symmetrical and generally lower overall compared to an ideal LIM.

4.  **Identify two distinct applications where Linear Induction Motors are commonly used and explain why they are suitable for these applications.**
    *   **Answer:**
        *   **Maglev Trains:** LIMs are suitable for Maglev trains due to their ability to provide high-speed, contactless propulsion, eliminating friction and wear associated with conventional wheels and rails.
        *   **Automated Storage and Retrieval Systems (AS/RS):** LIMs are used for precise and rapid linear positioning of loads in AS/RS, allowing for efficient and fast movement of goods within warehouses.

5.  **Relate the concept of slip in a Linear Induction Motor to its linear velocity.**
    *   **Answer:** Slip ($s$) in a LIM is defined as $s = (v_s - v) / v_s$, where $v_s$ is the synchronous linear speed and $v$ is the actual linear velocity of the motor. It represents the difference between the speed of the travelling magnetic field and the motor's actual speed, normalized to the synchronous speed. Thrust is generated when $s \neq 0$.

---

This comprehensive study note provides a detailed overview of Linear Induction Motors, covering their construction, fundamental principles, performance equations, unique challenges like edge and end effects, equivalent circuit representation, performance characteristics, and practical applications, all aligned with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
