---
title: "Measurement of self inductance, Mutual inductance and Coupling coefficient of a 1-phase transformer."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 13: Measurement of self inductance, Mutual inductance and Coupling coefficient of a 1"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35cfb"
status: "completed"
scrapedAt: "2026-05-23T16:12:02.077Z"
---
# CIRCUITS AND MEASUREMENTS LAB: Module 13 - Measurement of Self Inductance, Mutual Inductance, and Coupling Coefficient of a 1-Phase Transformer

## Introduction

This module focuses on understanding and measuring the fundamental inductive properties of a single-phase transformer. Transformers are crucial components in electrical systems for voltage transformation and isolation. Their behavior is governed by self-inductance, mutual inductance, and the degree of magnetic coupling between their windings. This lab aims to provide hands-on experience in determining these parameters, aligning with the course outcomes related to analyzing RLC circuits (CO1), measuring electrical parameters using bridges (CO7), and determining magnetic characteristics of electrical devices (CO5).

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Understand the concepts of self-inductance, mutual inductance, and coupling coefficient in a single-phase transformer.**
*   **Apply AC bridge techniques for measuring self-inductance.**
*   **Apply AC bridge techniques for measuring mutual inductance.**
*   **Calculate the coupling coefficient based on measured inductance values.**
*   **Analyze the relationship between these parameters and the physical construction of the transformer.**

## Key Concepts and Definitions

### 1. Inductance

Inductance is a property of an electrical conductor or circuit that opposes a change in the electric current flowing through it. It is the ratio of the induced voltage to the rate of change of current. The SI unit of inductance is the Henry (H).

### 2. Self-Inductance (L)

Self-inductance is the property of a coil or circuit that induces a voltage in itself in response to a change in the current flowing through it. For a single-phase transformer's primary or secondary winding, self-inductance refers to the inductance of each winding considered independently, assuming the other winding is open-circuited.

*   **Formula:** $L = \frac{N\Phi}{I}$, where $N$ is the number of turns, $\Phi$ is the magnetic flux, and $I$ is the current.
*   **Induced Voltage:** $v_L = L \frac{di}{dt}$

### 3. Mutual Inductance (M)

Mutual inductance is the property of two coils or circuits that induces a voltage in one coil in response to a change in the current flowing through the other coil. In a transformer, this is the primary mechanism for energy transfer.

*   **Formula:** $M = \frac{N_1\Phi_{12}}{I_2} = \frac{N_2\Phi_{21}}{I_1}$, where $N_1, N_2$ are the number of turns in primary and secondary, $\Phi_{12}$ is the flux in primary due to secondary current, and $\Phi_{21}$ is the flux in secondary due to primary current.
*   **Induced Voltage in Secondary due to Primary Current:** $v_2 = M \frac{di_1}{dt}$
*   **Induced Voltage in Primary due to Secondary Current:** $v_1 = M \frac{di_2}{dt}$

### 4. Coupling Coefficient (k)

The coupling coefficient is a dimensionless factor that quantifies the degree of magnetic flux linkage between two coils. It ranges from 0 to 1.

*   **Formula:** $k = \frac{M}{\sqrt{L_1 L_2}}$
    *   $L_1$: Self-inductance of the primary winding.
    *   $L_2$: Self-inductance of the secondary winding.
    *   $M$: Mutual inductance between the primary and secondary windings.

*   **Interpretation:**
    *   $k = 1$: Perfect coupling (all flux produced by one coil links the other). This is an ideal scenario, rarely achieved in practice.
    *   $0 < k < 1$: Imperfect coupling. The coupling is stronger as $k$ approaches 1.
    *   $k = 0$: No coupling (no flux linkage between the coils).

### 5. Single-Phase Transformer

A single-phase transformer is an electrical device that transfers electrical energy between two or more circuits through electromagnetic induction. It consists of two or more windings (primary and secondary) wound around a common magnetic core.

## Measurement Techniques

AC bridge methods are commonly used to measure inductance and mutual inductance due to their accuracy and ability to work with AC signals.

### 5.1 Measurement of Self-Inductance ($L_1$, $L_2$)

The self-inductance of each winding can be measured independently using standard inductance bridge configurations.

#### 5.1.1 Maxwell's Inductance Bridge (for medium Q-factor coils)

*   **Princ:** This bridge balances an unknown inductance in one arm against known resistances and capacitances in other arms.
*   **Circuit Diagram:**

    ```
      AC Source ----+-------R1-------+-------C1-------+
                    |                |                |
                    |                |                |
                   L_x              R2               R3
                    |                |                |
                    |                |                |
      G (Detector)  +-------R4-------+----------------+
    ```

    *   $L_x$: Unknown inductance.
    *   $C_1$: Known capacitance.
    *   $R_1, R_2, R_3, R_4$: Known adjustable resistances.
    *   G: Vibration galvanometer or sensitive AC voltmeter as detector.

*   **Balance Condition (at angular frequency $\omega = 2\pi f$):**
    $L_x = R_2 R_3 C_1$
    $R_x = R_2 R_3 / R_1$ (This is the series resistance of the unknown inductor)

*   **Procedure:**
    1.  Connect the primary winding of the transformer as $L_x$ (ensure the secondary winding is open-circuited).
    2.  Set $R_2, R_3, R_4$ to suitable initial values.
    3.  Adjust $R_1$ and $R_2$ (or $R_1$ and $R_3$, depending on the bridge variation) until a null is obtained at the detector.
    4.  Calculate $L_x$ using the balance equation.
    5.  Repeat the process for the secondary winding by connecting it as $L_x$ (with the primary winding open-circuited).

*   **Reference:** Sawhney, Chapter 12 (Maxwell's Bridge), Gupta, Chapter 11 (AC Bridges).

#### 5.1.2 Hay's Bridge (for high Q-factor coils)

*   **Princ:** Similar to Maxwell's bridge but better suited for high inductance values with high Q-factors.
*   **Circuit Diagram:**

    ```
      AC Source ----+-------R1-------+-------L1-------+
                    |                |                |
                    |                |                |
                   R_x              C2               R2
                    |                |                |
                    |                |                |
      G (Detector)  +-------R3-------+----------------+
    ```

    *   $R_x, L_x$: Unknown resistance and inductance.
    *   $C_2$: Known capacitance.
    *   $R_1, R_2, R_3$: Known adjustable resistances.
    *   G: Detector.

*   **Balance Condition:**
    $L_x = \frac{R_1 R_2 C_2 R_3}{R_1 + R_3}$
    $R_x = \frac{R_1 R_2 R_3}{R_1 + R_3}$

*   **Procedure:** Similar to Maxwell's bridge, adjust resistances until null is achieved.

*   **Reference:** Sawhney, Chapter 12 (Hay's Bridge), Gupta, Chapter 11 (AC Bridges).

#### 5.1.3 Anderson's Bridge (for measuring self-inductance in terms of capacitance)

*   **Princ:** This bridge is also used for measuring self-inductance and is particularly accurate.
*   **Circuit Diagram:**

    ```
      AC Source ----+-------R1-------+-------L_x-------+
                    |                |                |
                    |                |                |
                   R_x              R2               C_x
                    |                |                |
                    |                |                |
      G (Detector)  +-------R3-------+-------R4-------+
    ```
    *   $L_x, R_x$: Unknown inductance and resistance.
    *   $C_x$: Known variable capacitor.
    *   $R_1, R_2, R_3, R_4$: Known adjustable resistances.
    *   G: Detector.

*   **Balance Condition:**
    $L_x = C_x R_3 R_4 - R_1 R_2 C_x$
    $R_x = R_2 + \frac{R_2 R_3}{R_4} - R_1$

*   **Procedure:** Adjust $C_x$ and resistances until balance is achieved.

*   **Reference:** Sawhney, Chapter 12 (Anderson's Bridge), Gupta, Chapter 11 (AC Bridges).

**Important Note for Self-Inductance Measurement:**
*   When measuring $L_1$, the secondary winding must be open-circuited.
*   When measuring $L_2$, the primary winding must be open-circuited.
*   The frequency of the AC source must be known and constant.

### 5.2 Measurement of Mutual Inductance (M)

Mutual inductance is measured when both windings are present, and the flux linkage is significant.

#### 5.2.1 Heaviside Mutual Inductance Bridge (Simple form)

*   **Princ:** This bridge compares the mutual inductance with a known inductance.
*   **Circuit Diagram:**

    ```
      AC Source ----+-------R1-------+-------L1-------+
                    |                |                |
                    |                |                |
                  M_x, R_x        R2               R3
                    |                |                |
                    |                |                |
      G (Detector)  +-------R4-------+----------------+
    ```
    *   M_x, R_x: Unknown mutual inductance and resistance.
    *   L1: Known variable inductance.
    *   R1, R2, R3, R4: Known adjustable resistances.
    *   G: Detector.

*   **Balance Condition:**
    $M_x = L_1 \frac{R_2}{R_1} - R_3 R_4 \frac{R_2}{R_1}$
    $R_x = R_3 - R_4 \frac{R_2}{R_1}$ (Resistance associated with mutual inductance)

*   **Procedure:** Adjust the resistances and $L_1$ to achieve balance.

*   **Reference:** Sawhney, Chapter 12 (Heaviside Bridge), Gupta, Chapter 11 (AC Bridges).

#### 5.2.2 Campbell's Mutual Inductance Bridge

*   **Princ:** This bridge is specifically designed for measuring mutual inductance by comparing it with a known mutual inductance or inductance. It's more versatile.
*   **Circuit Diagram (a common configuration):**

    ```
      AC Source ----+-------R1-------+-------C--------+
                    |                |                |
                    |                |                |
                   R2               R3               M_x, R_x
                    |                |                |
                    |                |                |
      G (Detector)  +-------R4-------+-------L--------+
    ```
    *   $M_x, R_x$: Unknown mutual inductance and resistance.
    *   $C$: Known variable capacitance.
    *   $L$: Known fixed or variable inductance.
    *   $R_1, R_2, R_3, R_4$: Known adjustable resistances.
    *   G: Detector.

*   **Balance Condition (for a specific configuration):**
    $M_x = C R_1 R_3 - L$
    $R_x = R_2 + R_3 + \frac{R_2 R_3}{R_1}$

*   **Procedure:** Adjust $C$, $R_1, R_2, R_3$ to obtain a null.

*   **Reference:** Sawhney, Chapter 12 (Campbell's Bridge), Gupta, Chapter 11 (AC Bridges).

**Important Note for Mutual Inductance Measurement:**
*   The relative polarity of the windings must be considered when connecting the transformer in a mutual inductance bridge. Often, a polarity switch is used, or the connections are made such that the fluxes aid or oppose depending on the bridge design.
*   The frequency of the AC source must be known.

### 5.3 Calculation of Coupling Coefficient (k)

Once $L_1$, $L_2$, and $M$ are measured, the coupling coefficient can be directly calculated using the formula:

$k = \frac{M}{\sqrt{L_1 L_2}}$

**Important Point:**
*   Ensure that $L_1$ and $L_2$ are measured with the other winding open-circuited.
*   The measurement of $M$ should be consistent with the setup used for $L_1$ and $L_2$.

## Experimental Setup and Procedure (General)

1.  **Identify Transformer Terminals:** Clearly identify the primary and secondary terminals of the single-phase transformer.
2.  **Select Appropriate Bridge:** Choose a suitable AC bridge for measuring inductance (e.g., Maxwell's for medium Q, Hay's for high Q) and mutual inductance (e.g., Campbell's).
3.  **Set Up the Bridge:** Connect the transformer winding and known standards (resistors, capacitors, inductors) as per the chosen bridge circuit diagram.
4.  **Connect AC Source and Detector:** Connect the AC signal generator to the bridge input and a vibration galvanometer or sensitive AC voltmeter to the detector terminals.
5.  **Measure Self-Inductance ($L_1$):**
    *   Connect the primary winding as the unknown ($L_x$). Ensure the secondary winding is open.
    *   Set the AC source frequency (e.g., 50 Hz or 1 kHz, depending on the bridge and transformer).
    *   Adjust the bridge components (resistances, capacitances) until the detector shows a null deflection.
    *   Record the values of the standard components used for balance.
    *   Calculate $L_1$ using the balance equation.
6.  **Measure Self-Inductance ($L_2$):**
    *   Repeat step 5, but connect the secondary winding as the unknown ($L_x$). Ensure the primary winding is open.
    *   Record the values and calculate $L_2$.
7.  **Measure Mutual Inductance (M):**
    *   Connect the transformer in the mutual inductance bridge circuit. Pay attention to the connection polarity if required by the bridge.
    *   Set the AC source frequency.
    *   Adjust the bridge components until a null is obtained.
    *   Record the values of the standard components.
    *   Calculate $M$ using the balance equation.
8.  **Calculate Coupling Coefficient (k):**
    *   Use the measured values of $L_1$, $L_2$, and $M$ to calculate $k = \frac{M}{\sqrt{L_1 L_2}}$.
9.  **Repeat for Different Frequencies (Optional but Recommended):** To understand the frequency dependence of these parameters, repeat measurements at different AC source frequencies.
10. **Record Observations:** Maintain a detailed log of all measured values, settings, frequency, and calculated results.

## Theoretical Basis and Relation to Course Outcomes

*   **CO1 (Analyse voltage current phasor relations of RLC circuits):** The AC bridge methods rely on the phasor analysis of RLC circuits. The balance conditions are derived from Kirchhoff's voltage law and impedance equations, which involve phase relationships between voltage and current in inductive and capacitive elements.
*   **CO7 (Determine electrical parameters using various bridges):** This module is a direct application of using AC bridges (Maxwell's, Hay's, Campbell's, etc.) to determine inductance values, which are fundamental electrical parameters.
*   **CO5 (Determine magnetic characteristics of different electrical devices):** Self-inductance, mutual inductance, and coupling coefficient are direct measures of the magnetic coupling and energy storage within the transformer, thus characterizing its magnetic behavior.

## Examples

**Scenario:** Measuring $L_1$ using Maxwell's Bridge.
*   Transformer Primary: 100 turns, Secondary: 50 turns.
*   AC Source Frequency: 50 Hz.
*   **Bridge Setup:** Primary winding connected as $L_x$.
*   **Balance Achieved with:** $R_1 = 100 \, \Omega$, $R_2 = 50 \, \Omega$, $C_1 = 10 \, \mu F$, $R_3 = 200 \, \Omega$.
*   **Calculation of $L_1$:**
    $L_1 = R_2 R_3 C_1 = (50 \, \Omega) \times (200 \, \Omega) \times (10 \times 10^{-6} \, F)$
    $L_1 = 10000 \times 10 \times 10^{-6} \, H = 0.1 \, H = 100 \, mH$.

**Scenario:** Measuring $M$ using a simplified bridge approach.
*   Suppose $L_1 = 100 \, mH$, $L_2 = 25 \, mH$.
*   Assume a measurement yields $M = 40 \, mH$.
*   **Calculation of Coupling Coefficient:**
    $k = \frac{M}{\sqrt{L_1 L_2}} = \frac{40 \times 10^{-3} \, H}{\sqrt{(100 \times 10^{-3} \, H) \times (25 \times 10^{-3} \, H)}}$
    $k = \frac{40 \times 10^{-3}}{\sqrt{2500 \times 10^{-6}}} = \frac{40 \times 10^{-3}}{50 \times 10^{-3}} = 0.8$

This indicates a strong coupling ($k=0.8$) between the windings.

## Important Points to Remember

*   **Open Circuit:** Always ensure the *other* winding is open-circuited when measuring self-inductance.
*   **Frequency:** The measured inductance values are dependent on the frequency of the AC source. Record the frequency used.
*   **Polarity:** For mutual inductance measurements, the polarity of connections is crucial. If unsure, try connecting in both polarities to see which one yields a balance.
*   **Q-Factor:** The choice of bridge depends on the Q-factor of the coil ($Q = \frac{\omega L}{R}$). Maxwell's bridge is suitable for medium Q, Hay's for high Q, and Owen's bridge for low Q.
*   **Accuracy:** The accuracy of the measurements depends on the accuracy of the bridge components (standard resistors, capacitors, inductors) and the detector sensitivity.
*   **Core Material:** The inductance values are significantly influenced by the core material (e.g., air core, iron core) and its magnetic properties.
*   **Leakage Flux:** The coupling coefficient $k$ is less than 1 due to leakage flux, which is the magnetic flux that does not link both windings.

## Practice Questions

1.  **Define self-inductance and mutual inductance in the context of a transformer.**
    *   **Answer:** Self-inductance is the property of a single winding to oppose changes in its own current. Mutual inductance is the property of two coupled windings where a change in current in one induces a voltage in the other.

2.  **What is the coupling coefficient, and what does a value of $k=0.95$ signify for a transformer?**
    *   **Answer:** The coupling coefficient ($k$) quantifies the magnetic flux linkage between two coils. A value of $k=0.95$ signifies a very strong magnetic coupling, meaning a significant portion of the flux produced by one winding links the other.

3.  **When measuring the self-inductance of the primary winding ($L_1$) of a transformer using an AC bridge, what should be done with the secondary winding?**
    *   **Answer:** The secondary winding should be open-circuited.

4.  **If $L_1 = 120 \, mH$, $L_2 = 30 \, mH$, and $M = 50 \, mH$, calculate the coupling coefficient ($k$).**
    *   **Answer:**
        $k = \frac{M}{\sqrt{L_1 L_2}} = \frac{50 \times 10^{-3}}{\sqrt{(120 \times 10^{-3}) \times (30 \times 10^{-3})}}$
        $k = \frac{50 \times 10^{-3}}{\sqrt{3600 \times 10^{-6}}} = \frac{50 \times 10^{-3}}{60 \times 10^{-3}} = \frac{5}{6} \approx 0.833$

5.  **Name one AC bridge suitable for measuring the self-inductance of a coil with a high Q-factor.**
    *   **Answer:** Hay's Bridge.

6.  **Explain the role of the detector in an AC bridge measurement.**
    *   **Answer:** The detector (e.g., vibration galvanometer or sensitive AC voltmeter) indicates the balance condition of the bridge. When the bridge is balanced, there is no voltage across the detector, signifying that the reactances and resistances in the bridge arms have been adjusted correctly.

7.  **How does the core material of a transformer affect its inductance values?**
    *   **Answer:** Ferromagnetic core materials (like iron) significantly increase inductance compared to air cores because they have high permeability, allowing more magnetic flux to be confined and linked by the windings.
