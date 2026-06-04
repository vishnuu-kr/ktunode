---
title: "steadystate analysis of 3-wire unbalanced delta 
connected circuit"
subject: "CIRCUITS & NETWORKS"
module: "Module 2: Resonance"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ac8"
status: "completed"
scrapedAt: "2026-05-23T16:11:30.093Z"
---
# CIRCUITS & NETWORKS: Module 2: Resonance

## Topic: Steady-State Analysis of 3-Wire Unbalanced Delta-Connected Circuit

This topic delves into the steady-state behavior of a three-wire delta-connected circuit where the impedances in each branch are unequal. This is a practical scenario often encountered in AC power systems.

---

### 1. Introduction to Three-Phase Systems

*   **What is a Three-Phase System?** A three-phase system is an AC power system that uses three conductors, each carrying an alternating current that is offset in phase from the others by 120 electrical degrees. This provides a more efficient and constant power delivery compared to single-phase systems.
*   **Phase Voltages and Currents:**
    *   **Phase Voltage ($V_p$):** The voltage across any one phase winding or impedance in a three-phase system.
    *   **Phase Current ($I_p$):** The current flowing through any one phase winding or impedance.
*   **Line Voltages and Currents:**
    *   **Line Voltage ($V_L$):** The voltage between any two line conductors.
    *   **Line Current ($I_L$):** The current flowing through any one line conductor.

---

### 2. Delta (Δ) Connection

*   **Configuration:** In a delta connection, the ends of the three phase windings (or impedances) are connected to form a closed loop, resembling the Greek letter delta (Δ). The line conductors are connected to the junctions between the phase windings.
*   **Three-Wire System:** A three-wire system means there are only three line conductors connecting the source to the load. There is no neutral conductor.
*   **Advantages of Delta Connection:** Generally used for lower voltage and higher current applications.

---

### 3. Balanced vs. Unbalanced Delta-Connected Circuits

*   **Balanced Circuit:** In a balanced three-phase system, all phase voltages, phase currents, line voltages, line currents, and phase impedances are equal in magnitude and are displaced from each other by 120 degrees.
*   **Unbalanced Circuit:** In an unbalanced three-phase system, the magnitudes and/or phase angles of voltages, currents, or impedances are unequal. This topic specifically focuses on **unbalanced impedance loads**.

---

### 4. Steady-State Analysis of Unbalanced Delta-Connected Circuit

**Key Principle:** Kirchhoff's laws (KCL and KVL) and Ohm's law are fundamental for analyzing any circuit, including unbalanced three-phase circuits. We will use phasor analysis to handle the AC quantities.

**Assumptions:**

*   The source is a balanced three-phase voltage source (though the load is unbalanced).
*   We are interested in the steady-state conditions, meaning the transient behavior has died out.

**Analysis Steps:**

1.  **Represent Phase Voltages:** Assume a balanced three-phase voltage source. For example:
    *   $V_{AB} = V_p \angle 0^\circ$
    *   $V_{BC} = V_p \angle -120^\circ$
    *   $V_{CA} = V_p \angle +120^\circ$
    *   *Note: In a delta connection, the line voltages are equal to the phase voltages, i.e., $V_{AB} = V_{ph1}$, $V_{BC} = V_{ph2}$, $V_{CA} = V_{ph3}$*.

2.  **Define Phase Impedances:** In an unbalanced delta-connected load, the impedances are unequal. Let these be $Z_{AB}$, $Z_{BC}$, and $Z_{CA}$.
    *   $Z_{AB}$ is connected between lines A and B.
    *   $Z_{BC}$ is connected between lines B and C.
    *   $Z_{CA}$ is connected between lines C and A.

3.  **Calculate Phase Currents using Ohm's Law:** The current in each branch of the delta is determined by the voltage across that branch and the impedance of that branch.
    *   Phase Current $I_{AB} = \frac{V_{AB}}{Z_{AB}}$
    *   Phase Current $I_{BC} = \frac{V_{BC}}{Z_{BC}}$
    *   Phase Current $I_{CA} = \frac{V_{CA}}{Z_{CA}}$
    *   *Important: These are phasor currents.*

4.  **Calculate Line Currents using Kirchhoff's Current Law (KCL):** The line current is the current flowing out of a junction. At each junction (e.g., junction A), the sum of currents entering must equal the sum of currents leaving.
    *   At junction A: $I_{LA} + I_{CA} = I_{AB}$  =>  $I_{LA} = I_{AB} - I_{CA}$
    *   At junction B: $I_{LB} + I_{AB} = I_{BC}$  =>  $I_{LB} = I_{BC} - I_{AB}$
    *   At junction C: $I_{LC} + I_{BC} = I_{CA}$  =>  $I_{LC} = I_{CA} - I_{BC}$
    *   *Note: The current $I_{LA}$ flows from line A into the delta, $I_{LB}$ from line B into the delta, and $I_{LC}$ from line C into the delta. The convention for line current direction can vary, but consistency is key.*

---

### 5. Key Concepts and Definitions for Unbalanced Delta

*   **Phasor Representation:** Complex numbers are used to represent sinusoidal AC quantities (voltage, current, impedance), including both magnitude and phase.
*   **Complex Power:** For each branch: $S_{AB} = V_{AB} I_{AB}^*$ (where $I_{AB}^*$ is the complex conjugate of $I_{AB}$).
*   **Total Complex Power:** $S_{Total} = S_{AB} + S_{BC} + S_{CA}$. This is also equal to $S_{Total} = V_{LA} I_{LA}^* + V_{LB} I_{LB}^* + V_{LC} I_{LC}^*$.
*   **Line Current Magnitude:** Since the line currents will generally be unequal in magnitude and phase, each must be calculated individually.
*   **No Simple Relationship between Line and Phase Currents:** Unlike balanced systems, there is no simple $I_L = \sqrt{3} I_p$ relationship in an unbalanced delta circuit.

---

### 6. Examples and Illustrations

**Example:**

A 3-wire, 400V (line-to-line) unbalanced delta-connected load has the following impedances:
*   $Z_{AB} = (10 + j5) \, \Omega$
*   $Z_{BC} = (8 - j4) \, \Omega$
*   $Z_{CA} = (12 + j0) \, \Omega$

Assume the source voltages are:
*   $V_{AB} = 400 \angle 0^\circ \, V$
*   $V_{BC} = 400 \angle -120^\circ \, V$
*   $V_{CA} = 400 \angle 120^\circ \, V$

**Solution:**

1.  **Calculate Phase Currents:**
    *   $I_{AB} = \frac{V_{AB}}{Z_{AB}} = \frac{400 \angle 0^\circ}{10 + j5} = \frac{400 \angle 0^\circ}{11.18 \angle 26.57^\circ} \approx 35.78 \angle -26.57^\circ \, A$
    *   $I_{BC} = \frac{V_{BC}}{Z_{BC}} = \frac{400 \angle -120^\circ}{8 - j4} = \frac{400 \angle -120^\circ}{8.94 \angle -26.57^\circ} \approx 44.75 \angle -93.43^\circ \, A$
    *   $I_{CA} = \frac{V_{CA}}{Z_{CA}} = \frac{400 \angle 120^\circ}{12 + j0} = \frac{400 \angle 120^\circ}{12 \angle 0^\circ} \approx 33.33 \angle 120^\circ \, A$

2.  **Calculate Line Currents (using KCL):**
    *   $I_{LA} = I_{AB} - I_{CA}$
        *   Convert phasors to rectangular:
            *   $I_{AB} \approx 35.78 (\cos(-26.57^\circ) + j\sin(-26.57^\circ)) \approx 32.01 - j16.01 \, A$
            *   $I_{CA} \approx 33.33 (\cos(120^\circ) + j\sin(120^\circ)) \approx -16.67 + j28.87 \, A$
        *   $I_{LA} \approx (32.01 - j16.01) - (-16.67 + j28.87) = (32.01 + 16.67) + j(-16.01 - 28.87)$
        *   $I_{LA} \approx 48.68 - j44.88 \, A$
        *   Convert back to polar: $I_{LA} \approx \sqrt{48.68^2 + (-44.88)^2} \angle \arctan\left(\frac{-44.88}{48.68}\right) \approx 66.35 \angle -42.54^\circ \, A$

    *   $I_{LB} = I_{BC} - I_{AB}$
        *   Convert phasors to rectangular:
            *   $I_{BC} \approx 44.75 (\cos(-93.43^\circ) + j\sin(-93.43^\circ)) \approx -3.09 - j44.65 \, A$
            *   $I_{AB} \approx 32.01 - j16.01 \, A$
        *   $I_{LB} \approx (-3.09 - j44.65) - (32.01 - j16.01) = (-3.09 - 32.01) + j(-44.65 + 16.01)$
        *   $I_{LB} \approx -35.10 - j28.64 \, A$
        *   Convert back to polar: $I_{LB} \approx \sqrt{(-35.10)^2 + (-28.64)^2} \angle \arctan\left(\frac{-28.64}{-35.10}\right) \approx 45.34 \angle -140.72^\circ \, A$

    *   $I_{LC} = I_{CA} - I_{BC}$
        *   Convert phasors to rectangular:
            *   $I_{CA} \approx -16.67 + j28.87 \, A$
            *   $I_{BC} \approx -3.09 - j44.65 \, A$
        *   $I_{LC} \approx (-16.67 + j28.87) - (-3.09 - j44.65) = (-16.67 + 3.09) + j(28.87 + 44.65)$
        *   $I_{LC} \approx -13.58 + j73.52 \, A$
        *   Convert back to polar: $I_{LC} \approx \sqrt{(-13.58)^2 + (73.52)^2} \angle \arctan\left(\frac{73.52}{-13.58}\right) \approx 74.77 \angle 100.46^\circ \, A$

**Verification:** Sum of line currents should be zero for a source connected to a load: $I_{LA} + I_{LB} + I_{LC} \approx (48.68 - j44.88) + (-35.10 - j28.64) + (-13.58 + j73.52) \approx (48.68 - 35.10 - 13.58) + j(-44.88 - 28.64 + 73.52) \approx 0 + j0$. This confirms our calculations.

---

### 7. Relationship to Course Outcomes

*   **CO1 (Apply circuit theorems):** This topic directly applies Ohm's Law and Kirchhoff's Laws (circuit theorems) to analyze the unbalanced circuit.
*   **CO4 (Analyse three-phase networks):** This is the core outcome addressed. We analyze a three-phase network in a delta configuration under unbalanced conditions.
*   **CO6 (Steady-state behaviour with sinusoidal excitation):** The analysis is performed in the steady state with sinusoidal excitation, using phasor analysis.

---

### 8. Important Points to Remember

*   In a delta connection, line voltages are equal to phase voltages ($V_L = V_p$).
*   For an unbalanced delta load, phase currents are calculated using Ohm's Law with the respective phase voltage and impedance.
*   Line currents are calculated using KCL at the junctions, which means summing the phase currents entering or leaving each junction.
*   There is no simple $\sqrt{3}$ relationship between line and phase currents in unbalanced delta circuits.
*   Phasor analysis is crucial for accurate calculations.
*   The sum of the line currents should ideally be zero in a closed system.

---
