---
title: "V-curves and inverted V curves"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 2: Power flow equations in cylindrical"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35df4"
status: "completed"
scrapedAt: "2026-05-23T16:19:13.467Z"
---
# Module 2: Power Flow Equations in Cylindrical - V-Curves and Inverted V-Curves

## Introduction

This module delves into the operational characteristics of synchronous machines, specifically focusing on their behavior under varying excitation conditions. We will explore the graphical representations known as V-curves and inverted V-curves, which are crucial for understanding and predicting the performance of synchronous motors. These curves are derived from the fundamental power flow equations in cylindrical coordinates and are essential for addressing learning outcomes related to synchronous generator and motor performance.

**Key Concepts:**

*   **Synchronous Machine:** An AC electric machine in which the rotor speed is synchronized with the frequency of the supply current.
*   **Excitation:** The DC current supplied to the field winding of the synchronous machine, which determines the magnetic flux in the air gap.
*   **Power Factor:** The cosine of the angle between the voltage and current phasas.
*   **Armature Current ($I_a$):** The current flowing through the stator windings.
*   **Field Current ($I_f$):** The DC current supplied to the rotor field winding.
*   **Torque Angle ($\delta$):** The angle between the rotor's magnetic axis and the synchronously rotating magnetic axis of the stator.

## 1. Understanding the Power Flow Equations in Cylindrical Coordinates

The behavior of a synchronous machine is governed by a set of power flow equations. In cylindrical coordinates, the phasor representation of quantities simplifies the analysis.

**For a Synchronous Motor:**

The input power to the stator is given by:
$P_{in} = 3 V_t I_a \cos(\phi)$

Where:
*   $V_t$ is the stator terminal voltage phasor.
*   $I_a$ is the armature current phasor.
*   $\cos(\phi)$ is the power factor.

The developed electromagnetic torque ($T_e$) is related to the power by:
$T_e = \frac{P_{developed}}{ \omega_s }$

Where:
*   $P_{developed}$ is the developed mechanical power.
*   $\omega_s$ is the synchronous angular speed.

The internal voltage phasor ($E_f$) is related to the terminal voltage ($V_t$) and armature current ($I_a$) by the synchronous impedance ($Z_s = R_a + jX_s$):
$V_t = E_f - I_a Z_s$

This can be rewritten as:
$I_a = \frac{E_f - V_t}{Z_s}$

Or, in polar form:
$I_a = \frac{E_f \angle \delta - V_t \angle 0}{R_a + jX_s}$

Assuming the stator resistance $R_a$ is negligible compared to the synchronous reactance $X_s$ (a common simplification for many analyses), we get:
$I_a = \frac{E_f \angle \delta - V_t \angle 0}{jX_s}$

Expanding this:
$I_a = \frac{E_f \angle \delta}{jX_s} - \frac{V_t \angle 0}{jX_s}$
$I_a = \frac{E_f \angle (\delta - 90^\circ)}{X_s} - \frac{V_t \angle (-90^\circ)}{X_s}$
$I_a = \frac{E_f}{X_s} \angle (\delta - 90^\circ) + \frac{V_t}{X_s} \angle 90^\circ$

Let $I_{a\_magn} = \frac{E_f}{X_s}$ and $I_{a\_volt} = \frac{V_t}{X_s}$.
$I_a = I_{a\_magn} \angle (\delta - 90^\circ) + I_{a\_volt} \angle 90^\circ$

The magnitude of the armature current is $|I_a|$. The power factor is $\cos(\phi)$, where $\phi$ is the angle between $V_t$ and $I_a$.

**Reference Textbooks:**

*   **Bhimbara, P.S.:** Chapter on Synchronous Machines, detailing the equivalent circuit and phasor diagrams.
*   **Say, M.G.:** Chapter on Synchronous Machines, providing foundational equations and their derivation.
*   **Kothari & Nagrath:** Chapter on Synchronous Machines, with emphasis on performance equations.
*   **Gupta, J.B.:** Chapter on Synchronous Motor, covering the power flow and torque equations.

## 2. V-Curves of a Synchronous Motor

V-curves graphically represent the relationship between the armature current ($I_a$) and the field current ($I_f$) for a synchronous motor operating at a constant terminal voltage ($V_t$) and delivering a constant mechanical load (constant torque).

**Derivation and Key Points:**

1.  **Constant Mechanical Load:** The mechanical power developed by the motor is constant. $P_{developed} = P_{out} + P_{losses}$. Since losses are also related to operating conditions, we often consider constant output power for practical purposes.
2.  **Constant Terminal Voltage:** The supply voltage $V_t$ is maintained constant.
3.  **Varying Field Current ($I_f$):** By adjusting the DC excitation to the field winding, the magnitude of the internal generated voltage ($E_f$) is varied.
4.  **Relationship between $E_f$, $I_a$, and $\delta$:**
    *   When $E_f$ increases (higher $I_f$), the armature current $I_a$ shifts from lagging power factor towards leading power factor.
    *   The torque angle $\delta$ also changes with $E_f$. For a constant power output, a higher $E_f$ generally leads to a smaller torque angle $\delta$.
5.  **Power Factor:** The power factor is determined by the angle $\phi$ between $V_t$ and $I_a$.
    *   When $E_f$ is small, $I_a$ lags $V_t$, resulting in a lagging power factor.
    *   As $E_f$ increases, $I_a$ becomes less lagging, then unity, and finally leading.
    *   There exists a specific field current ($I_{f\_min}$) for which the power factor is unity. At this point, $I_a$ is at its minimum value for that particular load.
    *   If $E_f$ is further increased, the power factor becomes leading.

**Graphical Representation:**

*   **X-axis:** Field Current ($I_f$)
*   **Y-axis:** Armature Current ($I_a$)

**Shape of the V-Curves:**

For each constant mechanical load, a curve is plotted showing $I_a$ vs. $I_f$. The characteristic shape is indeed a 'V'.

*   **Minimum point of the V:** Corresponds to unity power factor ($I_a$ is minimum for that load).
*   **Left side of the V:** Represents operation at leading power factor. As $I_f$ decreases from the unity PF point, $I_a$ increases and the power factor becomes more leading.
*   **Right side of the V:** Represents operation at lagging power factor. As $I_f$ increases from the unity PF point, $I_a$ increases and the power factor becomes more lagging.

**Varying Loads:**

A family of V-curves is obtained by plotting these relationships for different constant mechanical loads.

*   **Higher Load:** The entire V-curve shifts upwards (higher $I_a$ for all $I_f$ values). The unity power factor point also shifts to a higher field current.
*   **Lower Load:** The V-curve shifts downwards (lower $I_a$).

**Important Points to Remember about V-Curves:**

*   **Unity Power Factor Operation:** The lowest point of each V-curve signifies operation at unity power factor, where the armature current is minimized for a given load.
*   **Field Current Range:** Synchronous motors can operate over a wide range of field currents.
*   **Over-excitation vs. Under-excitation:**
    *   **Over-excitation ($E_f > V_t$, or $I_f > I_{f\_unity}$):** Results in leading power factor.
    *   **Under-excitation ($E_f < V_t$, or $I_f < I_{f\_unity}$):** Results in lagging power factor.
*   **Starting:** Synchronous motors are typically not started directly using this excitation control. They are usually started as induction motors (using damper windings) or with pony motors, and then synchronized to the line. Excitation is applied once the motor is near synchronous speed.
*   **Stability Limit:** The V-curves do not explicitly show the pull-out torque limit. Operation too far on either side of the unity power factor point can lead to instability. The maximum torque is limited by the maximum possible value of $E_f$ and the pull-out angle.

**References:**

*   **Bhimbra, P.S.:** Chapter on Synchronous Motor, discussing V-curves and their interpretation.
*   **Say, M.G.:** Chapter on Synchronous Motor Operation, providing a theoretical basis for V-curves.
*   **Kothari & Nagrath:** Chapter on Synchronous Machines, with graphical illustrations of V-curves.
*   **Gupta, J.B.:** Chapter on Synchronous Motor, explaining the factors influencing $I_a$ and power factor.

**Example:**

Consider a synchronous motor operating at rated voltage and a certain mechanical load.
*   When the field excitation is weak (under-excited), the motor draws current at a lagging power factor.
*   As the field excitation is increased, the power factor improves towards unity.
*   At unity power factor, the armature current is at its minimum for this load.
*   If the field excitation is further increased (over-excited), the motor draws current at a leading power factor, and the armature current increases again.

This behavior forms the characteristic V-shape when $I_a$ is plotted against $I_f$.

## 3. Inverted V-Curves of a Synchronous Motor

Inverted V-curves are derived by plotting the power factor against the field current ($I_f$) for a synchronous motor operating at constant terminal voltage ($V_t$) and constant mechanical load.

**Derivation and Key Points:**

1.  **Constant Mechanical Load & Terminal Voltage:** Similar conditions as V-curves.
2.  **Varying Field Current ($I_f$):** The excitation is varied.
3.  **Power Factor as the Dependent Variable:** The power factor ($\cos \phi$) is plotted on the y-axis.

**Graphical Representation:**

*   **X-axis:** Field Current ($I_f$)
*   **Y-axis:** Power Factor ($\cos \phi$)

**Shape of the Inverted V-Curves:**

For each constant mechanical load, a curve is plotted showing $\cos \phi$ vs. $I_f$.

*   **Unity Power Factor:** There is a specific field current for which the power factor is unity. This is the peak of the inverted V-curve.
*   **Lagging Power Factor:** For field currents below the unity power factor point, the power factor is lagging. As $I_f$ decreases, the power factor becomes more lagging.
*   **Leading Power Factor:** For field currents above the unity power factor point, the power factor is leading. As $I_f$ increases, the power factor becomes more leading.

**Inverted V-Curve Shape Analysis:**

*   **Peak:** Corresponds to unity power factor.
*   **Left side of the Peak:** Lagging power factor region.
*   **Right side of the Peak:** Leading power factor region.

**Varying Loads:**

A family of inverted V-curves is obtained for different constant mechanical loads.

*   **Higher Load:** The entire inverted V-curve shifts to the right (higher $I_f$ is required for unity power factor and for any given power factor). The peak value of power factor attainable might also be limited by the load.
*   **Lower Load:** The inverted V-curve shifts to the left (lower $I_f$ values).

**Important Points to Remember about Inverted V-Curves:**

*   **Unity Power Factor:** The highest point on each inverted V-curve represents operation at unity power factor.
*   **Excitation Control:** These curves clearly show how varying the excitation ($I_f$) affects the power factor.
*   **Power Factor Correction:** Synchronous motors can be used for power factor correction by operating them in an over-excited (leading power factor) mode. The inverted V-curves help determine the required excitation for a desired leading power factor.
*   **Stability Limits:** Similar to V-curves, inverted V-curves do not explicitly show the pull-out torque limit. Operating too far into the leading or lagging regions can lead to instability.

**References:**

*   **Bhimbra, P.S.:** Chapter on Synchronous Motor, discussing power factor characteristics.
*   **Say, M.G.:** Chapter on Synchronous Motor Operation, with plots of power factor vs. excitation.
*   **Kothari & Nagrath:** Chapter on Synchronous Machines, providing inverted V-curve plots.
*   **Gupta, J.B.:** Chapter on Synchronous Motor, explaining power factor control using excitation.

**Example:**

Consider a synchronous motor operating at rated voltage and delivering a constant mechanical load.
*   When under-excited, the motor operates at a lagging power factor.
*   As excitation is increased, the power factor improves, reaching unity at a certain field current.
*   Further increase in excitation leads to operation at a leading power factor.
*   If the motor is over-excited to the point where it can supply reactive power to the system, it improves the overall system power factor.

This behavior forms the inverted V-shape when power factor is plotted against $I_f$.

## 4. Relationship between V-Curves and Inverted V-Curves

V-curves and inverted V-curves are essentially two different graphical representations of the same fundamental operating characteristics of a synchronous motor.

*   **V-curves ($I_a$ vs. $I_f$):** Focus on the armature current magnitude as a function of excitation.
*   **Inverted V-curves ($\cos \phi$ vs. $I_f$):** Focus on the power factor as a function of excitation.

The minimum point of a V-curve (unity power factor) corresponds to the peak of the inverted V-curve for the same load and voltage.

## 5. Application and Significance

*   **Power Factor Improvement:** Synchronous motors, when operated in an over-excited state (leading power factor), can supply reactive power to the grid, thus improving the overall power factor of an industrial plant. The inverted V-curves are used to determine the necessary excitation for this purpose.
*   **Constant Speed Operation:** Synchronous motors run at a constant speed, irrespective of the load, as long as the load does not exceed the pull-out torque.
*   **Efficiency Optimization:** Operating at unity power factor (the lowest point on the V-curve) minimizes the armature current for a given load, thereby minimizing $I^2R$ losses and improving efficiency.
*   **Motor Selection:** V-curves and inverted V-curves help engineers select appropriate synchronous motors and determine their operating parameters for specific applications.

## 6. Practice Questions and Answers

**Question 1:**

For a synchronous motor operating at constant terminal voltage and constant mechanical load, what does the minimum point of the V-curve represent?

**(a)** Maximum armature current
**(b)** Unity power factor
**(c)** Lagging power factor
**(d)** Leading power factor

**Answer: (b) Unity power factor**
*Explanation: The V-curve plots armature current ($I_a$) versus field current ($I_f$). For a given load, the armature current is minimum when the power factor is unity. This minimum armature current occurs at the bottom of the 'V'.*

**Question 2:**

If a synchronous motor is operated in an over-excited state, what is its power factor and what kind of reactive power does it supply?

**(a)** Lagging power factor, consumes reactive power
**(b)** Leading power factor, consumes reactive power
**(c)** Lagging power factor, supplies reactive power
**(d)** Leading power factor, supplies reactive power

**Answer: (d) Leading power factor, supplies reactive power**
*Explanation: Over-excitation means the internal generated voltage ($E_f$) is greater than the terminal voltage ($V_t$). This causes the armature current to lead the terminal voltage, resulting in a leading power factor. In this state, the motor acts as a source of reactive power, similar to a capacitor.*

**Question 3:**

Draw a typical V-curve for a synchronous motor operating at a constant load and explain the significance of the different regions.

**Answer:**

[Diagram of a V-curve with axes labeled $I_f$ (X-axis) and $I_a$ (Y-axis). The curve is U-shaped. Key points are marked: "Unity PF (Min $I_a$)" at the bottom, "Leading PF" on the left side of the minimum, and "Lagging PF" on the right side of the minimum.]

**Explanation of Regions:**

*   **Minimum Point:** Corresponds to unity power factor. $I_a$ is minimum for the given load. Efficiency is generally highest here.
*   **Left of Minimum (Over-excited):** Represents operation at a leading power factor. As $I_f$ decreases (moving left from minimum), $I_a$ increases, and the power factor becomes more leading. The motor supplies reactive power to the system.
*   **Right of Minimum (Under-excited):** Represents operation at a lagging power factor. As $I_f$ increases (moving right from minimum), $I_a$ increases, and the power factor becomes more lagging. The motor consumes reactive power from the system.

**Question 4:**

What is the main difference in emphasis between a V-curve and an inverted V-curve?

**Answer:**

The V-curve emphasizes the **armature current** ($I_a$) as a function of field current ($I_f$). It shows how the magnitude of armature current varies with excitation for a constant load.

The inverted V-curve emphasizes the **power factor** ($\cos \phi$) as a function of field current ($I_f$). It shows how the power factor varies with excitation for a constant load, highlighting the capability for leading, lagging, and unity power factor operation.

**Question 5:**

If you have a family of V-curves for different loads, how would the curve for a higher load compare to a curve for a lower load?

**Answer:**

The entire V-curve for a higher load will be **shifted upwards** compared to the V-curve for a lower load. This means that for any given field current, the armature current drawn by the motor will be higher when operating at a higher mechanical load. The point of unity power factor will also shift to a higher field current for the higher load.

---

## Summary of Learning Outcomes Covered:

*   **CO1: Describe the constructional details and analyse the performance of synchronous generators under various load conditions.**
    *   While the focus here is on motors, the fundamental equations derived from the cylindrical coordinate power flow are the same for generators. The concept of excitation influencing voltage and current, and therefore power factor, is analogous. The discussion on over/under excitation and reactive power exchange applies conceptually to generators' terminal characteristics as well.
*   **CO2: Analyse the performance of synchronous motors under various load conditions.**
    *   This topic directly addresses CO2. V-curves and inverted V-curves are the primary tools for analyzing the performance of synchronous motors regarding armature current, power factor, and excitation. Understanding these curves allows for analysis of how the motor behaves under different excitation levels for a given load.

---

## Key Points to Remember:

*   V-curves: $I_a$ vs. $I_f$ at constant load and voltage.
*   Inverted V-curves: Power Factor ($\cos \phi$) vs. $I_f$ at constant load and voltage.
*   Minimum of V-curve = Peak of inverted V-curve = Unity Power Factor operation.
*   Over-excitation ($E_f > V_t$): Leads to leading power factor, supplies reactive power.
*   Under-excitation ($E_f < V_t$): Leads to lagging power factor, consumes reactive power.
*   Synchronous motors can be used for power factor correction by operating them in an over-excited state.
*   Unity power factor operation minimizes armature current and $I^2R$ losses, improving efficiency.
*   The operating range of synchronous motors is limited by pull-out torque, which is not directly shown on these curves.

---

This comprehensive set of notes covers the core concepts of V-curves and inverted V-curves for synchronous motors, their derivation from power flow equations, and their practical significance, directly aligning with the learning objectives of Module 2.
