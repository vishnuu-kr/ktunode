---
title: "steady state analysis of 3-phase 4-wire and 3-wire (using 
Millman’s theorem only) unbalanced star connected circuit"
subject: "CIRCUITS & NETWORKS"
module: "Module 2: Resonance"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ac9"
status: "completed"
scrapedAt: "2026-05-23T16:11:31.051Z"
---
# CIRCUITS & NETWORKS: Module 2 - Resonance

## Topic: Steady-State Analysis of 3-Phase 4-Wire and 3-Wire Unbalanced Star Connected Circuits Using Millman's Theorem Only

**Course Outcomes Addressed:**

*   **CO4: Analyse three-phase networks in star and delta configurations under balanced and unbalanced conditions.** (Knowledge Level: K3) - This topic directly addresses the analysis of unbalanced three-phase star-connected networks.
*   **CO1: Apply circuit theorems to solve complex DC and AC electric networks** (Knowledge Level: K3) - Millman's theorem is a fundamental circuit theorem applied here.

**Learning Outcomes Covered:**

*   Steady-state analysis of 3-phase 4-wire unbalanced star-connected circuits.
*   Steady-state analysis of 3-phase 3-wire unbalanced star-connected circuits.
*   Application of Millman's Theorem for the analysis of these circuits.

---

## 1. Introduction to Three-Phase Systems

A three-phase system is a common method for generating and transmitting alternating current (AC) electricity. It consists of three separate AC voltages of the same frequency and amplitude but with phase differences of 120 electrical degrees.

**Key Concepts:**

*   **Phase Voltage ($V_p$):** The voltage between a phase conductor and the neutral point (in a star connection) or the voltage across a phase winding (in a delta connection).
*   **Line Voltage ($V_L$):** The voltage between any two phase conductors.
*   **Phase Current ($I_p$):** The current flowing through a phase winding.
*   **Line Current ($I_L$):** The current flowing through a line conductor.

---

## 2. Star (Wye) Connection

In a star connection, one end of each of the three phase windings is connected to a common point called the **neutral point**. The other ends of the windings are connected to the three line conductors (usually denoted as R, Y, B or A, B, C).

**Relationships in a Star Connection:**

*   **Voltages:** $V_L = \sqrt{3} V_p$ (for balanced systems)
*   **Currents:** $I_L = I_p$

**Three-Phase 4-Wire Star Connected System:**

This system includes a neutral conductor that connects to the neutral point of the source and the neutral point of the load. This allows for the flow of neutral current, which is crucial in unbalanced conditions.

**Three-Phase 3-Wire Star Connected System:**

This system does not have a neutral conductor. The loads are connected between the three line conductors. In unbalanced conditions, there is no path for a direct neutral current to flow back to the source's neutral point, leading to unique analysis challenges.

---

## 3. Unbalanced Three-Phase Systems

An unbalanced three-phase system occurs when the phase voltages, phase currents, or phase impedances are not equal in magnitude or phase.

**Causes of Unbalance:**

*   Unequal phase impedances of the loads.
*   Single-phase loads connected between line conductors or between a line conductor and neutral.
*   Faults in the system.

---

## 4. Millman's Theorem

Millman's Theorem is a powerful circuit analysis technique that simplifies the calculation of voltage at any node in a network. It is particularly useful for analyzing circuits with multiple sources and impedances.

**Statement of Millman's Theorem:**

For any network with multiple voltage sources and their internal series impedances, the voltage ($V$) across the terminals where the circuit is connected can be found by:

$$V = \frac{\sum_{i=1}^{n} \frac{E_i}{Z_i}}{\sum_{i=1}^{n} \frac{1}{Z_i}}$$

where:
*   $E_i$ is the voltage of the $i$-th source.
*   $Z_i$ is the impedance in series with the $i$-th source.
*   $n$ is the number of sources.

This can also be written using admittances ($Y_i = 1/Z_i$) as:

$$V = \frac{\sum_{i=1}^{n} E_i Y_i}{\sum_{i=1}^{n} Y_i}$$

**Generalization of Millman's Theorem:**

The theorem can be generalized to find the voltage at any node in a complex network. If we want to find the voltage at a specific node, we can consider it as the terminal pair across which we are calculating the voltage. For our 3-phase circuits, we will apply this theorem to find the phase voltages at the load terminals.

---

## 5. Steady-State Analysis Using Millman's Theorem

Millman's theorem is ideal for analyzing unbalanced star-connected loads, especially in AC circuits where we deal with impedances and phase shifts. We will apply it to find the phase voltages across the load impedances.

### 5.1 Analysis of 3-Phase 4-Wire Unbalanced Star Connected Circuit

**Scenario:** A 3-phase, 4-wire system with unbalanced star-connected loads. The neutral wire provides a return path for current.

**Assumptions:**

*   The source is a balanced 3-phase voltage source.
*   The loads are unbalanced star-connected impedances ($Z_R, Z_Y, Z_B$).
*   The neutral wire has zero impedance.

**Methodology:**

1.  **Represent the System:** Consider the three phases (R, Y, B) as individual branches connected to a common neutral point (N). The loads are connected between each phase conductor and the neutral.
2.  **Identify Sources and Impedances:**
    *   Phase R: Voltage source $V_{RN}$ (or $E_R$), Impedance $Z_R$.
    *   Phase Y: Voltage source $V_{YN}$ (or $E_Y$), Impedance $Z_Y$.
    *   Phase B: Voltage source $V_{BN}$ (or $E_B$), Impedance $Z_B$.
    *   Since it's a 4-wire system with a zero-impedance neutral, the neutral point of the source is effectively connected to the neutral point of the load.
3.  **Apply Millman's Theorem to find Neutral Voltage ($V_N$):**
    In a 4-wire system, the neutral conductor connects the neutral points of the source and load. However, due to unbalanced loads, the load neutral point may not be at the same potential as the source neutral point. We can find the voltage *of the load neutral point with respect to the source neutral point* using Millman's Theorem.

    Let $V_{AN}$ be the voltage between line A and the load neutral, $V_{BN}$ between line B and the load neutral, and $V_{CN}$ between line C and the load neutral.
    Let the source phase voltages be $E_A, E_B, E_C$ (with respect to the source neutral).
    Let the load impedances be $Z_A, Z_B, Z_C$.

    We can treat the load neutral point as a node. If we consider the voltage of this node with respect to the source neutral (which we can consider as ground), we have three branches connected to this node, each containing a source and an impedance.

    The voltage at the load neutral ($V_N$) with respect to the source neutral can be calculated using Millman's Theorem by considering the three phase branches connected to the neutral.

    $$V_N = \frac{\frac{E_R}{Z_R} + \frac{E_Y}{Z_Y} + \frac{E_B}{Z_B}}{\frac{1}{Z_R} + \frac{1}{Z_Y} + \frac{1}{Z_B}}$$

    Here, $E_R, E_Y, E_B$ are the source phase voltages (e.g., $V_{RN}, V_{YN}, V_{BN}$) and $Z_R, Z_Y, Z_B$ are the load impedances connected to phases R, Y, B respectively.

4.  **Calculate Load Phase Voltages:** Once $V_N$ is found, the actual phase voltages across the load impedances are:
    *   $V_{Rn} = E_R - V_N$
    *   $V_{Yn} = E_Y - V_N$
    *   $V_{Bn} = E_B - V_N$
    *(Note: If the source neutral is considered as the reference (0V), then $E_R, E_Y, E_B$ are directly the voltages of the line conductors with respect to the source neutral. In a 4-wire system, we calculate the displacement of the load neutral, $V_N$. The actual voltage across the load impedance is the line conductor voltage minus the neutral voltage displacement).*

5.  **Calculate Load Phase Currents:**
    *   $I_R = V_{Rn} / Z_R$
    *   $I_Y = V_{Yn} / Z_Y$
    *   $I_B = V_{Bn} / Z_B$

6.  **Calculate Neutral Current:** In a 4-wire system, the neutral current is the phasor sum of the phase currents.
    *   $I_N = I_R + I_Y + I_B$
    *(Due to Kirchhoff's Current Law (KCL) at the load neutral point, the sum of currents entering the neutral point must equal the sum of currents leaving. If we consider phase currents as flowing *out* of the neutral, then $I_R + I_Y + I_B + I_N = 0$, or $I_N = -(I_R + I_Y + I_B)$ if phase currents are defined as flowing from source to load. It's more intuitive to consider $I_N = I_R + I_Y + I_B$ when $I_R, I_Y, I_B$ are currents flowing from the line conductors into the load impedances).*

**Example (4-Wire System):**

Consider a 3-phase, 4-wire system with a balanced source providing phase voltages:
$E_R = 230 \angle 0^\circ$ V
$E_Y = 230 \angle -120^\circ$ V
$E_B = 230 \angle 120^\circ$ V

The unbalanced star-connected load impedances are:
$Z_R = 10 \angle 30^\circ \ \Omega$
$Z_Y = 12 \angle 0^\circ \ \Omega$
$Z_B = 8 \angle -45^\circ \ \Omega$

**Solution:**

1.  **Calculate admittances:**
    $Y_R = 1/Z_R = 1/(10 \angle 30^\circ) = 0.1 \angle -30^\circ$ S
    $Y_Y = 1/Z_Y = 1/(12 \angle 0^\circ) = 0.0833 \angle 0^\circ$ S
    $Y_B = 1/Z_B = 1/(8 \angle -45^\circ) = 0.125 \angle 45^\circ$ S

2.  **Calculate products of $E_i Y_i$:**
    $E_R Y_R = (230 \angle 0^\circ)(0.1 \angle -30^\circ) = 23 \angle -30^\circ$ VA (or Amp-Ohms)
    $E_Y Y_Y = (230 \angle -120^\circ)(0.0833 \angle 0^\circ) = 19.16 \angle -120^\circ$ VA
    $E_B Y_B = (230 \angle 120^\circ)(0.125 \angle 45^\circ) = 28.75 \angle 165^\circ$ VA

3.  **Convert to rectangular form for summation:**
    $E_R Y_R = 23(\cos(-30^\circ) + j \sin(-30^\circ)) = 23(0.866 - j0.5) = 19.918 - j11.5$
    $E_Y Y_Y = 19.16(\cos(-120^\circ) + j \sin(-120^\circ)) = 19.16(-0.5 - j0.866) = -9.58 - j16.59$
    $E_B Y_B = 28.75(\cos(165^\circ) + j \sin(165^\circ)) = 28.75(-0.966 + j0.259) = -27.76 + j7.44$

4.  **Sum of $E_i Y_i$:**
    $\sum E_i Y_i = (19.918 - 9.58 - 27.76) + j(-11.5 - 16.59 + 7.44)$
    $\sum E_i Y_i = -17.422 - j20.65$

5.  **Sum of Admittances:**
    $Y_R = 0.1(\cos(-30^\circ) + j \sin(-30^\circ)) = 0.1(0.866 - j0.5) = 0.0866 - j0.05$
    $Y_Y = 0.0833(\cos(0^\circ) + j \sin(0^\circ)) = 0.0833$
    $Y_B = 0.125(\cos(45^\circ) + j \sin(45^\circ)) = 0.125(0.707 + j0.707) = 0.0884 + j0.0884$

    $\sum Y_i = (0.0866 + 0.0833 + 0.0884) + j(-0.05 + 0.0884)$
    $\sum Y_i = 0.2583 + j0.0384$

6.  **Calculate Neutral Voltage ($V_N$):**
    $V_N = \frac{-17.422 - j20.65}{0.2583 + j0.0384}$

    Convert denominator to polar:
    Magnitude: $\sqrt{0.2583^2 + 0.0384^2} = \sqrt{0.0667 + 0.0015} = \sqrt{0.0682} \approx 0.261$
    Angle: $\arctan(0.0384 / 0.2583) = \arctan(0.1487) \approx 8.45^\circ$
    So, $\sum Y_i = 0.261 \angle 8.45^\circ$

    Convert numerator to polar:
    Magnitude: $\sqrt{(-17.422)^2 + (-20.65)^2} = \sqrt{303.5 + 426.4} = \sqrt{729.9} \approx 27.02$
    Angle: $\arctan(-20.65 / -17.422) = \arctan(1.185) + 180^\circ$ (since both real and imaginary are negative, it's in the 3rd quadrant)
    Angle $\approx 49.83^\circ + 180^\circ = 229.83^\circ$ (or $-130.17^\circ$)
    So, $\sum E_i Y_i = 27.02 \angle -130.17^\circ$

    $V_N = \frac{27.02 \angle -130.17^\circ}{0.261 \angle 8.45^\circ} = \frac{27.02}{0.261} \angle (-130.17^\circ - 8.45^\circ)$
    $V_N = 103.5 \angle -138.62^\circ$ V

7.  **Calculate Load Phase Voltages ($V_{Rn}, V_{Yn}, V_{Bn}$):**
    $V_{Rn} = E_R - V_N = 230 \angle 0^\circ - 103.5 \angle -138.62^\circ$
    $V_{Rn} = 230 - 103.5(\cos(-138.62^\circ) + j \sin(-138.62^\circ))$
    $V_{Rn} = 230 - 103.5(-0.750 + j(-0.661))$
    $V_{Rn} = 230 - (-77.62 - j68.30)$
    $V_{Rn} = 230 + 77.62 + j68.30 = 307.62 + j68.30$ V

    $V_{Yn} = E_Y - V_N = 230 \angle -120^\circ - 103.5 \angle -138.62^\circ$
    $E_Y = 230(\cos(-120^\circ) + j \sin(-120^\circ)) = 230(-0.5 - j0.866) = -115 - j199.18$
    $V_{Yn} = (-115 - j199.18) - (-77.62 - j68.30)$
    $V_{Yn} = -115 + 77.62 - j199.18 + j68.30 = -37.38 - j130.88$ V

    $V_{Bn} = E_B - V_N = 230 \angle 120^\circ - 103.5 \angle -138.62^\circ$
    $E_B = 230(\cos(120^\circ) + j \sin(120^\circ)) = 230(-0.5 + j0.866) = -115 + j199.18$
    $V_{Bn} = (-115 + j199.18) - (-77.62 - j68.30)$
    $V_{Bn} = -115 + 77.62 + j199.18 + j68.30 = -37.38 + j267.48$ V

8.  **Calculate Load Phase Currents:**
    $I_R = V_{Rn} / Z_R = (307.62 + j68.30) / (10 \angle 30^\circ)$
    $V_{Rn}$ in polar: $|V_{Rn}| = \sqrt{307.62^2 + 68.30^2} = \sqrt{94630 + 4665} = \sqrt{99295} \approx 315.1$
    Angle of $V_{Rn}$: $\arctan(68.30 / 307.62) \approx 12.65^\circ$
    $V_{Rn} \approx 315.1 \angle 12.65^\circ$
    $I_R = (315.1 \angle 12.65^\circ) / (10 \angle 30^\circ) = 31.51 \angle -17.35^\circ$ A

    $I_Y = V_{Yn} / Z_Y = (-37.38 - j130.88) / (12 \angle 0^\circ)$
    $V_{Yn}$ in polar: $|V_{Yn}| = \sqrt{(-37.38)^2 + (-130.88)^2} = \sqrt{1397 + 17129} = \sqrt{18526} \approx 136.1$
    Angle of $V_{Yn}$: $\arctan(-130.88 / -37.38) = \arctan(3.49) + 180^\circ \approx 74.05^\circ + 180^\circ = 254.05^\circ$ (or $-105.95^\circ$)
    $V_{Yn} \approx 136.1 \angle -105.95^\circ$
    $I_Y = (136.1 \angle -105.95^\circ) / (12 \angle 0^\circ) = 11.34 \angle -105.95^\circ$ A

    $I_B = V_{Bn} / Z_B = (-37.38 + j267.48) / (8 \angle -45^\circ)$
    $V_{Bn}$ in polar: $|V_{Bn}| = \sqrt{(-37.38)^2 + (267.48)^2} = \sqrt{1397 + 71545} = \sqrt{72942} \approx 270.1$
    Angle of $V_{Bn}$: $\arctan(267.48 / -37.38) = \arctan(-7.156) + 90^\circ \approx -82.0^\circ + 180^\circ = 98.0^\circ$
    $V_{Bn} \approx 270.1 \angle 98.0^\circ$
    $I_B = (270.1 \angle 98.0^\circ) / (8 \angle -45^\circ) = 33.76 \angle 143.0^\circ$ A

9.  **Calculate Neutral Current ($I_N$):**
    $I_N = I_R + I_Y + I_B$
    $I_R = 31.51 \angle -17.35^\circ = 31.51(\cos(-17.35^\circ) + j \sin(-17.35^\circ)) = 31.51(0.954 - j0.298) = 30.05 - j9.39$
    $I_Y = 11.34 \angle -105.95^\circ = 11.34(\cos(-105.95^\circ) + j \sin(-105.95^\circ)) = 11.34(-0.275 - j0.961) = -3.12 - j10.90$
    $I_B = 33.76 \angle 143.0^\circ = 33.76(\cos(143.0^\circ) + j \sin(143.0^\circ)) = 33.76(-0.799 + j0.602) = -27.00 + j20.32$

    $I_N = (30.05 - 3.12 - 27.00) + j(-9.39 - 10.90 + 20.32)$
    $I_N = -0.07 - j0.01$ A (Ideally, if calculations are precise, this should be zero for balanced sources and KCL summation. Small discrepancies are due to rounding).

---

### 5.2 Analysis of 3-Phase 3-Wire Unbalanced Star Connected Circuit

**Scenario:** A 3-phase, 3-wire system with unbalanced star-connected loads. There is no neutral conductor.

**Assumptions:**

*   The source is a balanced 3-phase voltage source.
*   The loads are unbalanced star-connected impedances ($Z_R, Z_Y, Z_B$).

**Methodology:**

In a 3-wire system, the neutral point of the load is generally not at the same potential as the neutral point of the source. There's no direct connection to carry the imbalance. We need to find the voltage at the load neutral point relative to *one of the line conductors* or consider the phase shifts appropriately.

Millman's theorem can be applied by considering each phase as a source connected to the load neutral, but with a modification: the "common reference" is not the source neutral, but a hypothetical point such that the sum of currents flowing into the load neutral is zero.

A more direct application for a 3-wire system is to consider the three line-to-neutral load voltages ($V_{Rn}, V_{Yn}, V_{Bn}$) and relate them to line voltages and phase currents using KVL and KCL. However, using Millman's Theorem directly for the load neutral voltage in a 3-wire system requires careful interpretation.

A common approach for 3-wire systems using Millman's theorem is to calculate the voltage at the load neutral relative to one of the line conductors. Let's choose phase 'R' as a reference.

1.  **Define Sources and Impedances:**
    *   Branch 1: Source $E_R$, Impedance $Z_R$.
    *   Branch 2: Source $E_Y$, Impedance $Z_Y$.
    *   Branch 3: Source $E_B$, Impedance $Z_B$.

    When applying Millman's theorem to find the voltage at the load neutral point (let's call it $V_N$) with respect to a common reference (say, the source neutral), the voltage sources $E_R, E_Y, E_B$ are the line-to-neutral voltages of the source.

    However, in a 3-wire system, the load neutral point will be displaced. The voltage we calculate using Millman's theorem in a 3-wire system is the voltage of the load neutral point *relative to the source neutral*.

    The theorem states $V = \frac{\sum E_i Y_i}{\sum Y_i}$. In our case, $E_i$ are the source phase voltages, and $Z_i$ are the load impedances.

    Let the source phase voltages be $E_A, E_B, E_C$ with respect to the source neutral.
    Let the load impedances be $Z_A, Z_B, Z_C$ connected in star.

    The voltage at the load neutral point (N) with respect to the source neutral (N') is given by:

    $$V_{N} = \frac{\frac{E_A}{Z_A} + \frac{E_B}{Z_B} + \frac{E_C}{Z_C}}{\frac{1}{Z_A} + \frac{1}{Z_B} + \frac{1}{Z_C}}$$

    Where $E_A, E_B, E_C$ are the source phase voltages $V_{RN}, V_{YN}, V_{BN}$.

2.  **Calculate the Load Neutral Voltage ($V_N$):** Use the formula as derived for the 4-wire system. The calculation is identical.
    $$V_N = \frac{\sum E_i Y_i}{\sum Y_i}$$

3.  **Calculate Load Phase Voltages:** The voltages across the load impedances are the differences between the line conductor voltages and the load neutral voltage.
    *   $V_{Rn} = E_R - V_N$
    *   $V_{Yn} = E_Y - V_N$
    *   $V_{Bn} = E_B - V_N$
    *(Note: Here, $E_R, E_Y, E_B$ are the voltages of the line conductors R, Y, B with respect to the source neutral. $V_N$ is the voltage of the load neutral with respect to the source neutral. So, $V_{Rn}$ is the voltage across the load impedance $Z_R$.).*

4.  **Calculate Load Phase Currents:**
    *   $I_R = V_{Rn} / Z_R$
    *   $I_Y = V_{Yn} / Z_Y$
    *   $I_B = V_{Bn} / Z_B$

**Difference between 4-wire and 3-wire Analysis using Millman's:**

The calculation for $V_N$ using Millman's theorem is mathematically the same for both 4-wire and 3-wire systems. The key difference lies in what the presence or absence of the neutral wire implies:

*   **4-wire:** The neutral wire provides a direct path for the neutral current to return to the source neutral. If the source neutral is assumed to be at 0V and the load neutral is displaced, the neutral current flows through this wire.
*   **3-wire:** There is no neutral wire. The phase currents must sum to zero at the load neutral point ($I_R + I_Y + I_B = 0$ by KCL at the load neutral). This condition is inherently satisfied by the Millman's theorem calculation if applied correctly, as it's based on Kirchhoff's laws. The load neutral voltage $V_N$ determined by Millman's theorem is the voltage that makes this condition true.

**Example (3-Wire System):**

Consider the same balanced source and unbalanced load impedances as in the previous 4-wire example.

$E_R = 230 \angle 0^\circ$ V
$E_Y = 230 \angle -120^\circ$ V
$E_B = 230 \angle 120^\circ$ V

$Z_R = 10 \angle 30^\circ \ \Omega$
$Z_Y = 12 \angle 0^\circ \ \Omega$
$Z_B = 8 \angle -45^\circ \ \Omega$

**Solution:**

The calculation for $V_N$ is exactly the same as in the 4-wire system example.

From the previous example, we found:
$V_N = 103.5 \angle -138.62^\circ$ V

The load phase voltages ($V_{Rn}, V_{Yn}, V_{Bn}$) are also calculated in the same way:
$V_{Rn} = 307.62 + j68.30$ V
$V_{Yn} = -37.38 - j130.88$ V
$V_{Bn} = -37.38 + j267.48$ V

The load phase currents ($I_R, I_Y, I_B$) are also calculated in the same way:
$I_R = 31.51 \angle -17.35^\circ$ A
$I_Y = 11.34 \angle -105.95^\circ$ A
$I_B = 33.76 \angle 143.0^\circ$ A

**Verification of KCL at Load Neutral for 3-wire system:**
In a 3-wire system, the sum of the phase currents at the load neutral must be zero.
$I_R + I_Y + I_B = (30.05 - j9.39) + (-3.12 - j10.90) + (-27.00 + j20.32)$
$I_R + I_Y + I_B = (30.05 - 3.12 - 27.00) + j(-9.39 - 10.90 + 20.32)$
$I_R + I_Y + I_B = -0.07 - j0.01$ A

This sum is approximately zero (within acceptable rounding error), confirming that the load neutral voltage calculated using Millman's theorem is correct for a 3-wire system.

---

## 6. Key Points to Remember

*   **Millman's Theorem:** $V = \frac{\sum E_i Y_i}{\sum Y_i}$ is the core of the analysis for finding nodal voltages.
*   **Balanced Source:** Even with unbalanced loads, the source is often assumed to be balanced ($V_{RN}, V_{YN}, V_{BN}$ are equal in magnitude and 120° apart).
*   **Unbalanced Load:** The impedances ($Z_R, Z_Y, Z_B$) are different in magnitude and/or phase.
*   **4-Wire System:** A neutral wire connects the source neutral to the load neutral. The calculated $V_N$ is the voltage displacement of the load neutral from the source neutral. $I_N = I_R + I_Y + I_B$.
*   **3-Wire System:** No neutral wire. The calculated $V_N$ is the voltage that ensures KCL ($I_R + I_Y + I_B = 0$) at the load neutral.
*   **Calculations:** Use complex numbers (phasors) throughout for voltages, currents, and impedances. Convert between polar and rectangular forms as needed for calculations.
*   **Textbook References:**
    *   **Van Valkenburg:** Chapters on Network Theorems, AC circuit analysis. Millman's theorem is often discussed as a generalization of other theorems.
    *   **Ravish R Singh:** Likely has detailed sections on symmetrical components or methods for analyzing unbalanced 3-phase systems, though this topic focuses specifically on Millman's. Chapter on Network Theorems.
    *   **Suresh Kumar:** Similar to others, chapter on Network Theorems.
    *   **Sudhakar & Palli:** Chapters on AC circuit analysis, network theorems, and potentially dedicated sections on three-phase systems.

---

## 7. Practice Questions

1.  A 3-phase, 4-wire system has a balanced source with $V_{RN} = 240 \angle 0^\circ$ V, $V_{YN} = 240 \angle -120^\circ$ V, $V_{BN} = 240 \angle 120^\circ$ V. The load is a star connection with impedances: $Z_R = 10 \Omega$, $Z_Y = j5 \Omega$, $Z_B = -j10 \Omega$. Calculate:
    a) The voltage of the load neutral with respect to the source neutral ($V_N$).
    b) The phase voltages across the load impedances ($V_{Rn}, V_{Yn}, V_{Bn}$).
    c) The phase currents ($I_R, I_Y, I_B$).
    d) The neutral current ($I_N$).

2.  A 3-phase, 3-wire system is supplied by a balanced source with line-to-neutral voltages $E_R = 120 \angle 0^\circ$ V, $E_Y = 120 \angle -120^\circ$ V, $E_B = 120 \angle 120^\circ$ V. The unbalanced star-connected load impedances are $Z_R = 5 + j5 \Omega$, $Z_Y = 10 \Omega$, $Z_B = 5 - j5 \Omega$. Calculate:
    a) The voltage of the load neutral with respect to the source neutral ($V_N$).
    b) The phase voltages across the load impedances ($V_{Rn}, V_{Yn}, V_{Bn}$).
    c) The phase currents ($I_R, I_Y, I_B$).
    d) Verify that $I_R + I_Y + I_B = 0$.

---

## 8. Answers to Practice Questions

**Question 1:**

Given:
$E_R = 240 \angle 0^\circ$ V
$E_Y = 240 \angle -120^\circ$ V
$E_B = 240 \angle 120^\circ$ V

$Z_R = 10 \angle 0^\circ \ \Omega$
$Z_Y = 5 \angle 90^\circ \ \Omega$
$Z_B = 10 \angle -90^\circ \ \Omega$

1.  **Admittances:**
    $Y_R = 1/10 = 0.1 \angle 0^\circ$ S
    $Y_Y = 1/(j5) = -j0.2 = 0.2 \angle -90^\circ$ S
    $Z_B = -j10 \implies Y_B = 1/(-j10) = j0.1 = 0.1 \angle 90^\circ$ S

2.  **$E_i Y_i$:**
    $E_R Y_R = (240 \angle 0^\circ)(0.1 \angle 0^\circ) = 24 \angle 0^\circ = 24 + j0$
    $E_Y Y_Y = (240 \angle -120^\circ)(0.2 \angle -90^\circ) = 48 \angle -210^\circ = 48(\cos(-210^\circ) + j \sin(-210^\circ)) = 48(0.866 - j0.5) = 41.57 - j24$
    $E_B Y_B = (240 \angle 120^\circ)(0.1 \angle 90^\circ) = 24 \angle 210^\circ = 24(\cos(210^\circ) + j \sin(210^\circ)) = 24(-0.866 - j0.5) = -20.78 - j12$

3.  **Sum of $E_i Y_i$:**
    $\sum E_i Y_i = (24 + 41.57 - 20.78) + j(0 - 24 - 12) = 44.79 - j36$

4.  **Sum of Admittances:**
    $\sum Y_i = 0.1 + (-j0.2) + j0.1 = 0.1 - j0.1$ S

5.  **$V_N$ Calculation:**
    $V_N = \frac{44.79 - j36}{0.1 - j0.1}$

    Numerator polar: $|44.79 - j36| = \sqrt{44.79^2 + (-36)^2} = \sqrt{2006 + 1296} = \sqrt{3302} \approx 57.46$
    Angle: $\arctan(-36/44.79) \approx -38.7^\circ$
    $\sum E_i Y_i \approx 57.46 \angle -38.7^\circ$

    Denominator polar: $|0.1 - j0.1| = \sqrt{0.1^2 + (-0.1)^2} = \sqrt{0.01 + 0.01} = \sqrt{0.02} \approx 0.1414$
    Angle: $\arctan(-0.1/0.1) = -45^\circ$
    $\sum Y_i = 0.1414 \angle -45^\circ$

    $V_N = \frac{57.46 \angle -38.7^\circ}{0.1414 \angle -45^\circ} = \frac{57.46}{0.1414} \angle (-38.7^\circ - (-45^\circ))$
    $V_N = 406.4 \angle 6.3^\circ$ V

a) **$V_N = 406.4 \angle 6.3^\circ$ V**

b) **Phase Voltages:**
    $V_{Rn} = E_R - V_N = 240 \angle 0^\circ - 406.4 \angle 6.3^\circ$
    $V_{Rn} = 240 - 406.4(\cos(6.3^\circ) + j \sin(6.3^\circ))$
    $V_{Rn} = 240 - 406.4(0.994 + j0.110)$
    $V_{Rn} = 240 - 404.0 - j44.7 = -164.0 - j44.7$ V

    $V_{Yn} = E_Y - V_N = 240 \angle -120^\circ - 406.4 \angle 6.3^\circ$
    $E_Y = 240(\cos(-120^\circ) + j \sin(-120^\circ)) = 240(-0.5 - j0.866) = -120 - j207.8$
    $V_{Yn} = (-120 - j207.8) - (404.0 + j44.7)$
    $V_{Yn} = -120 - 404.0 - j207.8 - j44.7 = -524.0 - j252.5$ V

    $V_{Bn} = E_B - V_N = 240 \angle 120^\circ - 406.4 \angle 6.3^\circ$
    $E_B = 240(\cos(120^\circ) + j \sin(120^\circ)) = 240(-0.5 + j0.866) = -120 + j207.8$
    $V_{Bn} = (-120 + j207.8) - (404.0 + j44.7)$
    $V_{Bn} = -120 - 404.0 + j207.8 - j44.7 = -524.0 + j163.1$ V

b) **$V_{Rn} = -164.0 - j44.7$ V**
   **$V_{Yn} = -524.0 - j252.5$ V**
   **$V_{Bn} = -524.0 + j163.1$ V**

c) **Phase Currents:**
    $I_R = V_{Rn} / Z_R = (-164.0 - j44.7) / 10 = -16.4 - j4.47$ A
    $I_Y = V_{Yn} / Z_Y = (-524.0 - j252.5) / (j5) = (-524.0 - j252.5) / (5 \angle 90^\circ)$
    $V_{Yn}$ in polar: $|-524.0 - j252.5| = \sqrt{524^2 + 252.5^2} = \sqrt{274576 + 63756} = \sqrt{338332} \approx 581.7$
    Angle: $\arctan(252.5/524) + 180^\circ \approx 25.65^\circ + 180^\circ = 205.65^\circ$
    $I_Y = (581.7 \angle 205.65^\circ) / (5 \angle 90^\circ) = 116.34 \angle 115.65^\circ$ A
    $I_Y = 116.34(\cos(115.65^\circ) + j \sin(115.65^\circ)) = 116.34(-0.433 + j0.899) = -50.37 + j104.6$ A

    $I_B = V_{Bn} / Z_B = (-524.0 + j163.1) / (-j10) = (-524.0 + j163.1) / (10 \angle -90^\circ)$
    $V_{Bn}$ in polar: $|-524.0 + j163.1| = \sqrt{524^2 + 163.1^2} = \sqrt{274576 + 26601} = \sqrt{301177} \approx 548.8$
    Angle: $\arctan(163.1/524) + 90^\circ \approx 17.28^\circ + 90^\circ = 107.28^\circ$
    $I_B = (548.8 \angle 107.28^\circ) / (10 \angle -90^\circ) = 54.88 \angle 197.28^\circ$ A
    $I_B = 54.88(\cos(197.28^\circ) + j \sin(197.28^\circ)) = 54.88(-0.955 - j0.294) = -52.41 - j16.14$ A

c) **$I_R = -16.4 - j4.47$ A**
   **$I_Y = -50.37 + j104.6$ A**
   **$I_B = -52.41 - j16.14$ A**

d) **Neutral Current ($I_N$):**
    $I_N = I_R + I_Y + I_B$
    $I_N = (-16.4 - j4.47) + (-50.37 + j104.6) + (-52.41 - j16.14)$
    $I_N = (-16.4 - 50.37 - 52.41) + j(-4.47 + 104.6 - 16.14)$
    $I_N = -119.18 + j83.99$ A

d) **$I_N = -119.18 + j83.99$ A**

---

**Question 2:**

Given:
$E_R = 120 \angle 0^\circ$ V
$E_Y = 120 \angle -120^\circ$ V
$E_B = 120 \angle 120^\circ$ V

$Z_R = 5 + j5 = 5\sqrt{2} \angle 45^\circ \ \Omega$
$Z_Y = 10 \angle 0^\circ \ \Omega$
$Z_B = 5 - j5 = 5\sqrt{2} \angle -45^\circ \ \Omega$

1.  **Admittances:**
    $Y_R = 1/(5+j5) = (5-j5)/(25+25) = (5-j5)/50 = 0.1 - j0.1$ S
    $Y_Y = 1/10 = 0.1$ S
    $Y_B = 1/(5-j5) = (5+j5)/(25+25) = (5+j5)/50 = 0.1 + j0.1$ S

2.  **$E_i Y_i$:**
    $E_R Y_R = (120 \angle 0^\circ)(0.1 - j0.1)$
    $E_R Y_R = 120(0.1 - j0.1) = 12 - j12$

    $E_Y Y_Y = (120 \angle -120^\circ)(0.1 \angle 0^\circ)$
    $E_Y Y_Y = 12 \angle -120^\circ = 12(\cos(-120^\circ) + j \sin(-120^\circ)) = 12(-0.5 - j0.866) = -6 - j10.39$

    $E_B Y_B = (120 \angle 120^\circ)(0.1 + j0.1)$
    $E_B = 120(\cos(120^\circ) + j \sin(120^\circ)) = 120(-0.5 + j0.866) = -60 + j103.92$
    $Y_B = 0.1(1+j1) = 0.1\sqrt{2} \angle 45^\circ$
    $E_B Y_B = (120 \angle 120^\circ)(0.1\sqrt{2} \angle 45^\circ) = 12\sqrt{2} \angle 165^\circ$
    $E_B Y_B = 12\sqrt{2}(\cos(165^\circ) + j \sin(165^\circ)) = 16.97(-0.966 + j0.259) = -16.39 + j4.40$

3.  **Sum of $E_i Y_i$:**
    $\sum E_i Y_i = (12 - j12) + (-6 - j10.39) + (-16.39 + j4.40)$
    $\sum E_i Y_i = (12 - 6 - 16.39) + j(-12 - 10.39 + 4.40)$
    $\sum E_i Y_i = -10.39 - j17.99$

4.  **Sum of Admittances:**
    $\sum Y_i = (0.1 - j0.1) + 0.1 + (0.1 + j0.1) = 0.1 + 0.1 + 0.1 = 0.3$ S

5.  **$V_N$ Calculation:**
    $V_N = \frac{-10.39 - j17.99}{0.3}$
    $V_N = -34.63 - j59.97$ V

a) **$V_N = -34.63 - j59.97$ V**

b) **Phase Voltages:**
    $V_{Rn} = E_R - V_N = 120 \angle 0^\circ - (-34.63 - j59.97)$
    $V_{Rn} = 120 + 34.63 + j59.97 = 154.63 + j59.97$ V

    $V_{Yn} = E_Y - V_N = 120 \angle -120^\circ - (-34.63 - j59.97)$
    $E_Y = -60 - j103.92$
    $V_{Yn} = (-60 - j103.92) - (-34.63 - j59.97)$
    $V_{Yn} = -60 + 34.63 - j103.92 + j59.97 = -25.37 - j43.95$ V

    $V_{Bn} = E_B - V_N = 120 \angle 120^\circ - (-34.63 - j59.97)$
    $E_B = -60 + j103.92$
    $V_{Bn} = (-60 + j103.92) - (-34.63 - j59.97)$
    $V_{Bn} = -60 + 34.63 + j103.92 + j59.97 = -25.37 + j163.89$ V

b) **$V_{Rn} = 154.63 + j59.97$ V**
   **$V_{Yn} = -25.37 - j43.95$ V**
   **$V_{Bn} = -25.37 + j163.89$ V**

c) **Phase Currents:**
    $I_R = V_{Rn} / Z_R = (154.63 + j59.97) / (5+j5)$
    $I_R = (154.63 + j59.97) * (0.1 - j0.1)$
    $I_R = 15.463 - j15.463 + j5.997 - j^2 5.997$
    $I_R = 15.463 + 5.997 + j(5.997 - 15.463) = 21.46 - j9.466$ A

    $I_Y = V_{Yn} / Z_Y = (-25.37 - j43.95) / 10$
    $I_Y = -2.537 - j4.395$ A

    $I_B = V_{Bn} / Z_B = (-25.37 + j163.89) / (5-j5)$
    $I_B = (-25.37 + j163.89) * (0.1 + j0.1)$
    $I_B = -2.537 - j2.537 + j16.389 + j^2 16.389$
    $I_B = -2.537 - 16.389 + j(-2.537 + 16.389) = -18.926 + j13.852$ A

c) **$I_R = 21.46 - j9.466$ A**
   **$I_Y = -2.537 - j4.395$ A**
   **$I_B = -18.926 + j13.852$ A**

d) **Verify KCL at load neutral:**
    $I_R + I_Y + I_B = (21.46 - j9.466) + (-2.537 - j4.395) + (-18.926 + j13.852)$
    $I_R + I_Y + I_B = (21.46 - 2.537 - 18.926) + j(-9.466 - 4.395 + 13.852)$
    $I_R + I_Y + I_B = (0.003) + j(0.001) \approx 0$ A

d) **Verified.**
