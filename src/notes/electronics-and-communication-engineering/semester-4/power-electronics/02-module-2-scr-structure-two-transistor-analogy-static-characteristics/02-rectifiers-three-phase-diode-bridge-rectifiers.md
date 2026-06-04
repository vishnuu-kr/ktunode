---
title: "Rectifiers:  Three phase diode bridge rectifiers"
subject: "POWER ELECTRONICS"
module: "Module 2: SCR: Structure, two transistor analogy, static characteristics."
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5fa"
status: "completed"
scrapedAt: "2026-05-23T17:52:10.545Z"
---
# Power Electronics - Module 2: SCR & Rectifiers

## Topic: Three-Phase Diode Bridge Rectifiers

This module focuses on the fundamental characteristics of the Silicon Controlled Rectifier (SCR) and its application in rectifier circuits. Specifically, we will delve into the operation and analysis of three-phase diode bridge rectifiers.

### Learning Outcomes Covered:

*   **CO1: Outline the operation of power semiconductor devices and its characteristics. (Knowledge Level: K2)**
    *   Understanding the role of diodes as power semiconductor devices in rectifiers.
    *   Understanding the inherent characteristics of diodes that make them suitable for rectification.
*   **CO2: Design and analyze various rectifier circuits for power devices (Knowledge Level: K3)**
    *   Analyzing the operation of a three-phase diode bridge rectifier under continuous and discontinuous conduction modes.
    *   Calculating key performance parameters such as average output voltage, RMS output voltage, ripple factor, and form factor.
    *   Understanding the effect of the load on the rectifier's performance.
*   **CO3: Analyze different power converter circuits (Knowledge Level: K3)**
    *   This topic directly contributes to analyzing rectifier circuits, a fundamental type of power converter.

---

### 1. Introduction to Rectifiers

A **rectifier** is an electrical circuit that converts alternating current (AC) into direct current (DC). This is a fundamental function in many power electronic applications, as most loads require DC power while power is often transmitted and distributed as AC.

**Key Concepts:**

*   **AC (Alternating Current):** Current that periodically reverses direction and changes its magnitude.
*   **DC (Direct Current):** Current that flows in only one direction, ideally with constant magnitude.
*   **Rectification:** The process of converting AC to DC.

---

### 2. Power Semiconductor Devices: Diodes (Revisiting CO1)

While this module's primary focus is on rectifiers, understanding the basic semiconductor device involved is crucial. Diodes are the simplest power semiconductor devices and are essential for rectification.

**Key Characteristics of Power Diodes:**

*   **Unidirectional Conduction:** Diodes allow current to flow in only one direction (from anode to cathode) when forward-biased.
*   **Forward Voltage Drop ($V_F$):** When conducting, a diode has a small forward voltage drop (typically 0.7V for silicon diodes, 0.3V for germanium). This is a key parameter in rectifier analysis, especially for calculating output voltage.
*   **Reverse Blocking:** When reverse-biased, diodes block current flow, preventing current from flowing in the opposite direction.
*   **Switching Speed:** Power diodes have finite switching times (turn-on and turn-off). For basic rectifier analysis with 50/60 Hz AC, these switching times are often considered negligible.

**Referenced Textbooks:**

*   **L. Umanand, "Power Electronics Essentials & Applications":** Provides a good overview of diode characteristics and their fundamental applications in rectification.
*   **Muhammad H. Rashid, "Power Electronics Circuits, Devices, and Applications":** Offers detailed insights into the physics and characteristics of power diodes, which are crucial for understanding their behavior in rectifier circuits.

---

### 3. Three-Phase Diode Bridge Rectifier

A three-phase diode bridge rectifier is a widely used circuit for converting three-phase AC power into DC power. It offers advantages over single-phase rectifiers, such as a more constant DC output voltage with lower ripple.

#### 3.1. Circuit Configuration

A three-phase diode bridge rectifier uses six diodes arranged in a bridge configuration. Each phase of the three-phase AC supply is connected to two diodes, forming three legs of the bridge.

**Circuit Diagram:**

*(Imagine a circuit diagram here showing a three-phase AC source connected to six diodes arranged in a bridge. The AC lines (A, B, C) are connected to the anodes of three diodes and the cathodes of the other three diodes. The DC output is taken across the common cathode connection and the common anode connection.)*

**Key Components:**

*   **Three-Phase AC Supply:** Provides the input AC voltage.
*   **Six Diodes:** Arranged in a bridge to perform rectification.
*   **Load:** Typically a resistive or inductive load, or a combination thereof (RL load).

#### 3.2. Operation

The operation of the three-phase diode bridge rectifier relies on the sequential conduction of the diodes, controlled by the instantaneous polarity of the three-phase AC voltages.

**Basic Principle:**

At any given time, the three diodes connected to the positive peaks of the line-to-line voltages conduct, and the three diodes connected to the negative peaks block. The current flows from the positive DC bus to the negative DC bus.

**Analysis under different conditions:**

*   **Ideal Case (No forward voltage drop, instantaneous switching):** In this idealized scenario, the output voltage is directly related to the peak value of the line-to-line voltage.
*   **Practical Case (Considering forward voltage drop):** The forward voltage drop of the diodes slightly reduces the average DC output voltage.

**Mode of Operation:**

The rectifier operates in six distinct modes, with each mode lasting for $60^\circ$ electrical. During each mode, three diodes conduct: one from the upper group (anodes connected to AC lines) and two from the lower group (cathodes connected to AC lines), or vice-versa.

**Example of Operation (for a few modes):**

Let the three-phase AC supply voltages be:
$v_a = V_m \sin(\omega t)$
$v_b = V_m \sin(\omega t - 120^\circ)$
$v_c = V_m \sin(\omega t - 240^\circ)$

Where $V_m$ is the peak phase voltage.

The line-to-line voltages are:
$v_{ab} = v_a - v_b$
$v_{bc} = v_b - v_c$
$v_{ca} = v_c - v_a$

The peak line-to-line voltage is $V_{mL} = \sqrt{3} V_m$.

**Consider the interval $0^\circ$ to $60^\circ$ (assuming $\omega t$ starts from 0):**

*   In this interval, $v_a$ is positive and rising, $v_b$ is negative and rising (less negative), and $v_c$ is negative and falling (more negative).
*   The line-to-line voltages $v_{ab}$, $v_{ac}$ will be positive, and $v_{bc}$ will be negative.
*   The diodes connected to the highest positive line-to-line voltages conduct.
*   Specifically, diode D1 (connected to phase A) and diodes D4 (connected to phase B) and D5 (connected to phase C) will be conducting.
*   The output voltage is approximately equal to the line-to-line voltage $v_{ab}$.

**Important Point to Remember:** The output voltage waveform is a sequence of segments of the line-to-line voltages. The output voltage never drops to zero as long as at least one line-to-line voltage is positive.

#### 3.3. Analysis of Output Voltage and Current

**3.3.1. For Resistive Load (R-Load)**

When connected to a purely resistive load, the output current follows the output voltage. The current becomes zero whenever the output voltage drops to zero.

*   **Average Output Voltage ($V_{dc}$):**
    $V_{dc} = \frac{3 V_{mL}}{\pi}$
    where $V_{mL}$ is the peak line-to-line voltage.
    Since $V_{mL} = \sqrt{3} V_m$, and $V_m = \sqrt{2} V_{ph}$ (where $V_{ph}$ is the RMS phase voltage),
    $V_{dc} = \frac{3 \sqrt{2} \sqrt{3} V_{ph}}{\pi} = \frac{3 \sqrt{6} V_{ph}}{\pi}$
    $V_{dc} \approx 1.65 V_{ph}$

    **Referenced Textbooks:**
    *   **Muhammad H. Rashid, "Power Electronics Circuits, Devices, and Applications":** Provides detailed derivation of the average output voltage for various rectifier configurations, including the three-phase bridge rectifier.
    *   **L. Umanand, "Power Electronics Essentials & Applications":** Also covers the derivation and practical considerations for calculating average output voltage.

*   **RMS Output Voltage ($V_{rms}$):**
    For a purely resistive load, the RMS output voltage is the same as the average output voltage when considering the rectified waveform segments.
    $V_{rms} = \frac{3 V_{mL}}{\pi} = V_{dc}$

*   **RMS Load Current ($I_{L,rms}$):**
    $I_{L,rms} = \frac{V_{rms}}{R}$

*   **DC Load Current ($I_{dc}$):**
    $I_{dc} = \frac{V_{dc}}{R}$

*   **Ripple Factor ($\gamma$):**
    A measure of the AC component in the output DC voltage.
    $\gamma = \sqrt{(\frac{V_{rms}}{V_{dc}})^2 - 1}$
    For a 3-phase bridge rectifier with R-load, $V_{rms} = V_{dc}$, so $\gamma = 0$. This is an idealization, as there are still ripple components. The actual ripple factor is significantly lower than single-phase rectifiers. The fundamental ripple frequency is $6f$, where $f$ is the supply frequency.

*   **Form Factor:**
    Ratio of RMS value to average value of the output voltage.
    Form Factor = $\frac{V_{rms}}{V_{dc}} = 1$ (for ideal R-load)

**3.3.2. For Inductive Load (RL-Load)**

With an inductive load, the inductor stores energy and releases it when the voltage across it drops. This tends to smooth out the output current, leading to continuous conduction.

*   **Continuous Conduction Mode:**
    If the load inductance is sufficiently large, the output current will not drop to zero during the commutation interval.
    In this mode, the output voltage waveform consists of segments of the line-to-line voltages.
    The average output voltage is still given by:
    $V_{dc} = \frac{3 V_{mL}}{\pi}$

    However, the RMS output voltage calculation becomes more complex due to the current waveform.

*   **Discontinuous Conduction Mode:**
    If the inductance is not large enough, the output current may drop to zero, similar to the R-load case. The analysis for discontinuous conduction is more involved and typically requires numerical methods or graphical analysis.

**Referenced Textbooks:**

*   **Ned Mohan, Tore M. Undeland, William P. Robbins, "Power Electronics Converters, Applications, and Design":** Offers in-depth analysis of RL-load behavior, including commutation, and discusses continuous and discontinuous conduction modes.
*   **Joseph Vithayathil, "Power Electronics Principles and Applications":** Provides clear explanations and examples for analyzing rectifier circuits with inductive loads.

#### 3.4. Performance Parameters

**Key Performance Parameters to Calculate:**

*   **Average Output Voltage ($V_{dc}$):** The DC component of the output voltage.
*   **RMS Output Voltage ($V_{rms}$):** Represents the total voltage content (DC + AC ripple).
*   **RMS Load Current ($I_{L,rms}$):** The RMS value of the current delivered to the load.
*   **DC Load Current ($I_{dc}$):** The DC component of the current delivered to the load.
*   **Ripple Factor ($\gamma$):** Quantifies the amount of AC ripple in the output. A lower ripple factor is desirable for a smoother DC output.
*   **Form Factor:** Ratio of RMS to average value, indicating the shape of the output waveform.
*   **Transformer Utilization Factor (TUF):** A measure of how effectively the transformer (if used) is utilized.
*   **Peak Inverse Voltage (PIV) across diodes:** The maximum reverse voltage a diode has to block. For a 3-phase bridge rectifier, each diode experiences a PIV of $V_{mL}$.

**Important Point to Remember:** The ripple factor of a three-phase bridge rectifier is significantly lower than that of a single-phase rectifier, resulting in a smoother DC output. This is because the output voltage never drops to zero for a sufficient duration.

---

### 4. Practice Questions and Exercises

**Question 1 (CO1, CO2):**
Explain the basic operating principle of a diode as a switching element in a rectifier circuit. What are the key characteristics that make it suitable for this application?

**Answer:**
Diodes are semiconductor devices that allow current to flow in only one direction (forward bias) and block current flow in the opposite direction (reverse bias). In a rectifier circuit, this unidirectional conduction property is used to "chop" off the negative half-cycles of an AC input, effectively converting it to a pulsating DC output. Key characteristics include low forward voltage drop when conducting, high reverse blocking capability, and relatively fast switching speeds (sufficient for mains frequencies).

**Question 2 (CO2, CO3):**
A three-phase diode bridge rectifier is connected to a three-phase AC supply with a line voltage of $400 V_{rms}$. Calculate the following, assuming continuous conduction and neglecting diode forward drops:
a) Peak line-to-line voltage ($V_{mL}$)
b) Average DC output voltage ($V_{dc}$)
c) RMS output voltage ($V_{rms}$)

**Answer:**
Given: $V_{L,rms} = 400 V_{rms}$

a) **Peak line-to-line voltage ($V_{mL}$):**
The peak phase voltage $V_{ph,m} = \sqrt{2} V_{ph,rms}$. Since $V_{L,rms} = \sqrt{3} V_{ph,rms}$, we have $V_{ph,rms} = \frac{V_{L,rms}}{\sqrt{3}}$.
Therefore, $V_{ph,m} = \sqrt{2} \frac{V_{L,rms}}{\sqrt{3}}$.
The peak line-to-line voltage is $V_{mL} = \sqrt{3} V_{ph,m} = \sqrt{3} (\sqrt{2} \frac{V_{L,rms}}{\sqrt{3}}) = \sqrt{2} V_{L,rms}$.
$V_{mL} = \sqrt{2} \times 400 V = 565.69 V$.

b) **Average DC output voltage ($V_{dc}$):**
$V_{dc} = \frac{3 V_{mL}}{\pi} = \frac{3 \times 565.69 V}{\pi} = 539.64 V$.

c) **RMS output voltage ($V_{rms}$):**
For a 3-phase bridge rectifier with continuous conduction, the RMS output voltage is equal to the average DC output voltage.
$V_{rms} = V_{dc} = 539.64 V$.

**Question 3 (CO2, CO3):**
For the rectifier in Question 2, if a purely resistive load of $R = 20 \Omega$ is connected, calculate:
a) DC load current ($I_{dc}$)
b) RMS load current ($I_{L,rms}$)
c) Ripple factor ($\gamma$)

**Answer:**
a) **DC load current ($I_{dc}$):**
$I_{dc} = \frac{V_{dc}}{R} = \frac{539.64 V}{20 \Omega} = 26.98 A$.

b) **RMS load current ($I_{L,rms}$):**
Since the RMS output voltage is equal to the average DC output voltage for a purely resistive load, $V_{rms} = V_{dc}$.
$I_{L,rms} = \frac{V_{rms}}{R} = \frac{539.64 V}{20 \Omega} = 26.98 A$.

c) **Ripple factor ($\gamma$):**
$\gamma = \sqrt{(\frac{V_{rms}}{V_{dc}})^2 - 1} = \sqrt{(\frac{539.64 V}{539.64 V})^2 - 1} = \sqrt{1^2 - 1} = 0$.
*(Note: This is an ideal ripple factor. In reality, there will be ripple, but it's significantly less than single-phase rectifiers.)*

**Question 4 (CO1, CO2):**
What is the Peak Inverse Voltage (PIV) across each diode in a three-phase diode bridge rectifier? Explain why.

**Answer:**
The Peak Inverse Voltage (PIV) across each diode in a three-phase diode bridge rectifier is equal to the peak line-to-line voltage ($V_{mL}$). This is because when a diode is reverse-biased and blocking, it is subjected to the difference between the highest positive line voltage and the next highest positive line voltage, which is equivalent to the peak line-to-line voltage. For instance, when diode D1 is off and blocking, it is in series with another diode, and the voltage across it can reach the peak value of a line-to-line voltage.

---

### 5. Important Points to Remember

*   **Three-phase bridge rectifiers are efficient** in converting AC to DC due to the continuous conduction of diodes, resulting in lower ripple.
*   The **output voltage waveform is a sequence of line-to-line voltage segments**, leading to a higher frequency ripple ($6f$).
*   For **resistive loads**, the RMS output voltage is equal to the average DC output voltage, and the ripple factor is ideally zero.
*   For **inductive loads**, the output current tends to be smoother, and the rectifier operates in continuous conduction mode, provided the inductance is sufficient.
*   The **peak inverse voltage (PIV)** across each diode is equal to the peak line-to-line voltage ($V_{mL}$).
*   The average DC output voltage is $V_{dc} = \frac{3 V_{mL}}{\pi} = \frac{3\sqrt{2}}{\pi} V_{L,rms} \approx 1.65 V_{L,rms}$.

---

This concludes the notes on Three-Phase Diode Bridge Rectifiers. Understanding these concepts is fundamental for analyzing more complex controlled rectifier circuits.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
