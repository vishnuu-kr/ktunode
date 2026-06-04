---
title: "3-phase power measurement using one-wattmeter and two-wattmeter methods, and determination of reactive/apparent power drawn.*"
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 6: 3"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35ced"
status: "completed"
scrapedAt: "2026-05-23T16:11:56.903Z"
---
# Circuits and Measurements Lab: Module 6: 3 - 3-Phase Power Measurement

## Topic: 3-Phase Power Measurement using One-Wattmeter and Two-Wattmeter Methods, and Determination of Reactive/Apparent Power Drawn

### 1. Introduction to Three-Phase Power Systems

Three-phase power systems are widely used for power generation, transmission, and distribution due to their efficiency and ability to deliver constant power. They consist of three AC voltage sources, each shifted by 120 degrees in phase from the others.

### 2. Importance of Three-Phase Power Measurement

Accurate measurement of power in three-phase systems is crucial for:
*   **Billing:** Determining the amount of energy consumed by industrial and commercial customers.
*   **System Monitoring:** Assessing the efficiency and health of the power system.
*   **Load Balancing:** Ensuring equitable distribution of load among the phases.
*   **Power Factor Correction:** Evaluating the need for and effectiveness of power factor improvement.

### 3. Key Concepts and Definitions

*   **Phase Voltage ($V_p$):** The voltage between any one phase and the neutral point in a star-connected system.
*   **Line Voltage ($V_L$):** The voltage between any two phases in a three-phase system.
    *   In a star connection, $V_L = \sqrt{3} V_p$.
    *   In a delta connection, $V_L = V_p$.
*   **Phase Current ($I_p$):** The current flowing through any one phase winding.
*   **Line Current ($I_L$):** The current flowing in any one of the lines connecting the source to the load.
    *   In a star connection, $I_L = I_p$.
    *   In a delta connection, $I_L = \sqrt{3} I_p$.
*   **Balanced Load:** A load where the impedance in each phase is the same.
*   **Unbalanced Load:** A load where the impedance in each phase is different.
*   **Power Factor (PF):** The cosine of the phase angle between the voltage and current in an AC circuit. It indicates the efficiency with which electrical power is converted into useful work.
    *   $PF = \cos(\phi)$, where $\phi$ is the phase angle.
*   **Real Power (P):** The average power delivered to a circuit that is converted into useful work (e.g., heat, mechanical energy). Measured in Watts (W).
*   **Reactive Power (Q):** The power that oscillates between the source and the reactive components (inductors and capacitors) of the circuit. It does not perform useful work but is essential for establishing magnetic and electric fields. Measured in Volt-Amperes Reactive (VAR).
*   **Apparent Power (S):** The vector sum of real and reactive power. It is the product of RMS voltage and RMS current. Measured in Volt-Amperes (VA).
    *   $S = V_{rms} I_{rms}$
    *   In a three-phase system (balanced load): $S = \sqrt{3} V_L I_L$
    *   Relationship: $S^2 = P^2 + Q^2$

### 4. Methods for Three-Phase Power Measurement

We will explore two common methods for measuring three-phase power:

#### 4.1. Two-Wattmeter Method

This is the most common and versatile method for measuring three-phase power, applicable to both balanced and unbalanced loads in any configuration (star or delta).

**Principle:**
In a three-phase system, the total power is the algebraic sum of the power in each phase. With a two-wattmeter setup, the two wattmeters measure the power in two of the three phases, and the sum of their readings gives the total three-phase power.

**Connection:**
Consider a three-phase, four-wire system or a three-phase, three-wire system with a balanced load.
*   **Wattmeter 1 (W1):**
    *   Current coil connected in series with Phase A (line current $I_A$).
    *   Voltage coil connected across Phase A and the neutral (or the common point of the voltage coils of both wattmeters, which is connected to Phase B in a three-wire system).
*   **Wattmeter 2 (W2):**
    *   Current coil connected in series with Phase B (line current $I_B$).
    *   Voltage coil connected across Phase B and the neutral (or the common point of the voltage coils of both wattmeters).

**Circuit Diagram (Three-Phase, Three-Wire System):**

```
       Phase A ---[W1 current coil]--- Load Phase A
                     |
                     |----- W1 voltage coil ---- Neutral (or common point)
                     |
       Phase B ---[W2 current coil]--- Load Phase B
                     |
                     |----- W2 voltage coil ---- Neutral (or common point)
                     |
       Phase C --- Load Phase C
```

*(Note: For a three-wire system, the voltage coils of W1 and W2 are typically connected to phase A and phase B respectively, with their other terminals joined together and connected to phase C. This is the "Blondel's Theorem" principle, where the sum of power in any two phases with common voltage reference gives total power).*

**Derivation of Total Power:**

Let $V_A, V_B, V_C$ be the phase voltages and $I_A, I_B, I_C$ be the line currents.
The power measured by W1 is $P_1 = V_{AB} I_A \cos(\theta_{AB,IA})$ (if voltage coil is across A-B) or $P_1 = V_{A} I_A \cos(\phi_A)$ (if voltage coil is across A-N, where N is neutral).

Using the common voltage reference method (Blondel's Theorem):
*   $P_1 = V_{AC} I_A \cos(\angle V_{AC} - \angle I_A)$
*   $P_2 = V_{BC} I_B \cos(\angle V_{BC} - \angle I_B)$

For a balanced system with sinusoidal waveforms:
Let $V_A = V_p \angle 0^\circ$, $V_B = V_p \angle -120^\circ$, $V_C = V_p \angle +120^\circ$
Let $I_A = I_p \angle -\phi$, $I_B = I_p \angle -120^\circ - \phi$, $I_C = I_p \angle +120^\circ - \phi$

For a star-connected load: $V_L = \sqrt{3} V_p$, $I_L = I_p$. $V_{AC} = V_A - V_C$, $V_{BC} = V_B - V_C$.
The phase angles between line voltage and line current for the wattmeters are $(\pm 30^\circ - \phi)$.

*   $P_1 = V_L I_L \cos(30^\circ - \phi)$
*   $P_2 = V_L I_L \cos(-30^\circ - \phi)$

Total Power $P = P_1 + P_2$:
$P = V_L I_L [\cos(30^\circ - \phi) + \cos(-30^\circ - \phi)]$
$P = V_L I_L [\cos(30^\circ - \phi) + \cos(30^\circ + \phi)]$ (since $\cos(-x) = \cos(x)$)
Using $\cos(A-B) + \cos(A+B) = 2 \cos A \cos B$:
$P = V_L I_L [2 \cos 30^\circ \cos \phi]$
$P = V_L I_L [2 \times \frac{\sqrt{3}}{2} \times \cos \phi]$
$P = \sqrt{3} V_L I_L \cos \phi$

This shows that the sum of the readings of the two wattmeters gives the total three-phase power.

**Interpretation of Readings:**
*   **If $0^\circ \le \phi < 60^\circ$ (Lagging or Leading):** Both wattmeters show positive readings.
*   **If $\phi = 60^\circ$:** One wattmeter reads zero, the other reads total power.
*   **If $60^\circ < \phi < 90^\circ$:** One wattmeter reads positive, the other reads negative. The total power is the difference between their magnitudes (with the negative reading subtracted).
*   **If $\phi = 90^\circ$:** Both wattmeters read zero.

**Determination of Power Factor:**
The power factor can be determined from the ratio of the two wattmeter readings.
$\frac{P_1}{P_2} = \frac{V_L I_L \cos(30^\circ - \phi)}{V_L I_L \cos(30^\circ + \phi)} = \frac{\cos(30^\circ - \phi)}{\cos(30^\circ + \phi)}$
Let $\frac{P_1}{P_2} = R$.
$R = \frac{\cos 30^\circ \cos \phi + \sin 30^\circ \sin \phi}{\cos 30^\circ \cos \phi - \sin 30^\circ \sin \phi}$
$R = \frac{\frac{\sqrt{3}}{2} \cos \phi + \frac{1}{2} \sin \phi}{\frac{\sqrt{3}}{2} \cos \phi - \frac{1}{2} \sin \phi}$
Divide numerator and denominator by $\cos \phi$:
$R = \frac{\frac{\sqrt{3}}{2} + \frac{1}{2} \tan \phi}{\frac{\sqrt{3}}{2} - \frac{1}{2} \tan \phi} = \frac{\sqrt{3} + \tan \phi}{\sqrt{3} - \tan \phi}$
$R(\sqrt{3} - \tan \phi) = \sqrt{3} + \tan \phi$
$\sqrt{3} R - R \tan \phi = \sqrt{3} + \tan \phi$
$\sqrt{3} R - \sqrt{3} = \tan \phi (R+1)$
$\tan \phi = \sqrt{3} \frac{R-1}{R+1}$
So, $PF = \cos \phi = \cos \left( \arctan \left( \sqrt{3} \frac{P_1-P_2}{P_1+P_2} \right) \right)$.

**Advantages of Two-Wattmeter Method:**
*   Applicable to balanced and unbalanced loads.
*   Requires only two wattmeters.
*   Can determine power factor.

**Disadvantages of Two-Wattmeter Method:**
*   Requires careful connection.
*   Interpretation of readings can be tricky for highly inductive/capacitive loads (negative readings).

**Reference:**
*   *A course in Electrical and Electronic Measurements & Instrumentation* by A. K. Sawhney, Chapter on Wattmeters.
*   *A course in Electrical & Electronic Measurement & Instrumentation* by J. B. Gupta, Chapter on Wattmeters.

#### 4.2. One-Wattmeter Method

This method is simpler but **only applicable to balanced three-phase loads**. It is often used in educational labs for its simplicity.

**Principle:**
In a balanced three-phase system, the total power is three times the power measured by a single wattmeter connected to measure the power in one phase. However, this requires access to the neutral point, which is not always available. A more practical one-wattmeter method for a three-wire system uses a modified connection.

**Modified One-Wattmeter Method (for three-wire systems):**

This method uses a single wattmeter with a special phase-shifting connection to measure the total power of a balanced three-phase load.

**Connection:**
*   The current coil of the wattmeter is connected in series with one of the lines (e.g., Phase A).
*   The voltage coil is connected between the same phase (Phase A) and the midpoint of a non-inductive resistor (or impedance) connected between the other two phases (Phase B and Phase C).

**Circuit Diagram (Modified One-Wattmeter Method):**

```
       Phase A ---[W1 current coil]--- Load Phase A
                     |
                     |----- W1 voltage coil ---- Point X (Midpoint of R1 and R2)
                     |
       Phase B --- Non-inductive Resistor (R1) --- Point X --- R2 --- Phase C
```

Where R1 and R2 are equal non-inductive resistors (e.g., 100 ohms each).

**Derivation of Total Power:**

For a balanced load, the voltage across the current coil is $V_A$. The current through the current coil is $I_A$. The power measured by the wattmeter is $P_w = V_A I_A \cos(\angle V_A - \angle I_A)$.

The point X is the electrical midpoint between Phase B and Phase C. In a balanced three-phase system, the voltage at point X relative to Phase A is shifted by $90^\circ$ from the voltage $V_{BC}$. Specifically, the voltage $V_{AX}$ leads $V_A$ by $90^\circ$ if we consider $V_A$ as reference.

The effective voltage across the voltage coil of the wattmeter is $V_{AX}$.
For a balanced system, $V_{BC}$ leads $V_A$ by $90^\circ$.
$V_{BC} = V_A - V_B = V_p \angle 0 - V_p \angle -120 = V_p (1 - (-\frac{1}{2} - j\frac{\sqrt{3}}{2})) = V_p (\frac{3}{2} + j\frac{\sqrt{3}}{2}) = \sqrt{3} V_p (\frac{\sqrt{3}}{2} + j\frac{1}{2}) = \sqrt{3} V_p \angle 30^\circ$.
The voltage at point X is the midpoint of the voltage divider formed by R1 and R2 connected between phases B and C. Since the resistors are equal, X is the midpoint of the line segment BC.
The voltage $V_{AX}$ is the vector difference between $V_A$ and the midpoint of $V_B$ and $V_C$.
If $V_A = V_p \angle 0$, $V_B = V_p \angle -120$, $V_C = V_p \angle 120$.
Midpoint voltage of B and C is $\frac{V_B + V_C}{2} = \frac{V_p(\cos(-120) + j\sin(-120)) + V_p(\cos(120) + j\sin(120))}{2} = \frac{V_p(-\frac{1}{2} - j\frac{\sqrt{3}}{2}) + V_p(-\frac{1}{2} + j\frac{\sqrt{3}}{2})}{2} = \frac{-V_p}{2}$.
So the voltage from A to this midpoint is $V_A - \frac{V_B+V_C}{2} = V_p - (-\frac{V_p}{2}) = \frac{3}{2}V_p$. This is incorrect for the Blondel's theorem application directly.

Let's consider the correct application of Blondel's theorem using the modified connection:
The voltage across the voltage coil of W1 is the voltage between Phase A and the neutral of the balanced system *if* the neutral were present. This voltage can be obtained by connecting the voltage coil between Phase A and the midpoint of a non-inductive resistor connected between Phase B and Phase C.
The voltage at X is the average of $V_B$ and $V_C$.
$V_X = \frac{V_B + V_C}{2}$
$V_{AX} = V_A - V_X = V_A - \frac{V_B + V_C}{2}$
For a balanced system: $V_A + V_B + V_C = 0$. Therefore, $V_B + V_C = -V_A$.
$V_{AX} = V_A - \frac{-V_A}{2} = \frac{3}{2} V_A$.
The magnitude $|V_{AX}| = \frac{3}{2} |V_A| = \frac{3}{2} V_p$.
The phase of $V_{AX}$ is the same as $V_A$.
The current in Phase A is $I_A = I_p \angle -\phi$.
The power measured by the wattmeter is $P_w = |V_{AX}| |I_A| \cos(\angle V_{AX} - \angle I_A)$
$P_w = (\frac{3}{2} V_p) (I_p) \cos(\angle V_A - \angle I_A)$
Since $\angle V_A = 0^\circ$, $\angle I_A = -\phi$.
$P_w = \frac{3}{2} V_p I_p \cos(\phi)$.
The total power in a three-phase balanced system is $P = \sqrt{3} V_L I_L \cos \phi = \sqrt{3} (\sqrt{3} V_p) (I_p) \cos \phi = 3 V_p I_p \cos \phi$.
Therefore, $P = 2 \times P_w$.

**Total Power $P = 2 \times P_w$ (for a balanced load using the modified one-wattmeter method).**

**Advantages of Modified One-Wattmeter Method:**
*   Requires only one wattmeter.
*   Simpler than the two-wattmeter method for balanced loads.

**Disadvantages of Modified One-Wattmeter Method:**
*   **Strictly applicable only to balanced three-phase loads.** Any unbalance will lead to significant errors.
*   Requires the addition of non-inductive resistors.

**Reference:**
*   *Electronic Instrumentation* by Kalsi H. S., Chapter on Measurement of Power.

### 5. Determination of Reactive Power (Q) and Apparent Power (S)

Once the total real power (P) is measured using either the two-wattmeter or one-wattmeter method, and the line voltage ($V_L$) and line current ($I_L$) are known, we can determine the reactive and apparent power.

**From Measured Real Power (P):**

1.  **Measure Line Voltage ($V_L$) and Line Current ($I_L$):** Use a voltmeter and ammeter to measure these values.
2.  **Calculate Apparent Power (S):**
    $S = \sqrt{3} V_L I_L$
    *(This calculation is valid for both balanced and unbalanced systems if $V_L$ and $I_L$ are average values or representative values)*.
3.  **Calculate Reactive Power (Q):**
    Using the relationship $S^2 = P^2 + Q^2$, we get:
    $Q = \sqrt{S^2 - P^2}$

**Important Note:** For the one-wattmeter method, it is essential to first measure $V_L$ and $I_L$ to calculate S and Q. The wattmeter directly gives P.

**Using Wattmeter Readings for Power Factor Calculation (as derived in section 4.1):**
The power factor angle $\phi$ can be determined from the wattmeter readings ($P_1, P_2$) in the two-wattmeter method. Once $\phi$ is known, and $V_L, I_L$ are measured:
*   $P = \sqrt{3} V_L I_L \cos \phi$ (This should match the sum of wattmeter readings).
*   $Q = \sqrt{3} V_L I_L \sin \phi$
*   $S = \sqrt{3} V_L I_L$

**Example of Calculation:**
Suppose in a three-phase circuit, the two wattmeters read $P_1 = 1000$ W and $P_2 = 500$ W.
*   **Total Real Power (P):** $P = P_1 + P_2 = 1000 + 500 = 1500$ W.
*   **Power Factor Angle ($\phi$):**
    $R = \frac{P_1}{P_2} = \frac{1000}{500} = 2$.
    $\tan \phi = \sqrt{3} \frac{R-1}{R+1} = \sqrt{3} \frac{2-1}{2+1} = \sqrt{3} \frac{1}{3} = \frac{1}{\sqrt{3}}$.
    $\phi = \arctan \left(\frac{1}{\sqrt{3}}\right) = 30^\circ$.
    $PF = \cos 30^\circ = 0.866$ (lagging, assuming typical inductive loads).
*   **Assume Line Voltage $V_L = 400$ V and Line Current $I_L = 5$ A.**
*   **Apparent Power (S):** $S = \sqrt{3} V_L I_L = \sqrt{3} \times 400 \times 5 = 3464.1$ VA.
*   **Reactive Power (Q):**
    $Q = \sqrt{S^2 - P^2} = \sqrt{(3464.1)^2 - (1500)^2} = \sqrt{12000000 - 2250000} = \sqrt{9750000} = 3122.5$ VAR.
    Alternatively, using PF:
    $Q = \sqrt{3} V_L I_L \sin \phi = 3464.1 \times \sin 30^\circ = 3464.1 \times 0.5 = 1732.05$ VAR.

    **Discrepancy:** There is a significant discrepancy in Q. This indicates that the assumed $V_L$ and $I_L$ values might not correspond to the wattmeter readings, or there might be some error in measurement or assumption.
    Let's recalculate S and Q based on the measured power and PF:
    $P = 1500$ W. $PF = 0.866$.
    $S = \frac{P}{PF} = \frac{1500}{0.866} = 1732.05$ VA.
    $Q = \sqrt{S^2 - P^2} = \sqrt{(1732.05)^2 - (1500)^2} = \sqrt{3000000 - 2250000} = \sqrt{750000} = 866$ VAR.
    Now, let's check if $S = \sqrt{3} V_L I_L$ holds for these values.
    $1732.05 = \sqrt{3} V_L I_L$.
    If $V_L = 400$ V, then $I_L = \frac{1732.05}{\sqrt{3} \times 400} = \frac{1732.05}{692.82} \approx 2.5$ A.
    So, the assumed $V_L=400$V and $I_L=5$A were inconsistent with the wattmeter readings and calculated PF.

**Correct Approach:**
1.  Measure $P_1$ and $P_2$ using wattmeters.
2.  Calculate total real power $P = P_1 + P_2$.
3.  Measure $V_L$ and $I_L$.
4.  Calculate apparent power $S = \sqrt{3} V_L I_L$.
5.  Calculate reactive power $Q = \sqrt{S^2 - P^2}$.
6.  Calculate power factor $PF = \frac{P}{S}$.

### 6. Alignment with Course Outcomes (COs) and Knowledge Levels (K)

*   **CO3: Measure power in single and three phase circuits by various methods (Knowledge Level: K3)**
    *   This module directly addresses this CO by teaching the two-wattmeter and one-wattmeter methods for three-phase power measurement. The K3 level implies students will be able to apply these methods in a lab setting.
*   **CO1: Analyse voltage current phasor relations of RLC circuits (Knowledge Level: K3)**
    *   Understanding the phase angles between voltages and currents in three-phase systems (like $30^\circ, 60^\circ, 90^\circ$) is crucial for deriving the power measurement equations and interpreting wattmeter readings. This relates to phasor analysis.
*   **CO4: Determine the calibration characteristics of various meters used in electrical systems (Knowledge Level: K3)**
    *   While not directly about calibration, this topic involves using wattmeters, voltmeters, and ammeters. Understanding how these meters work and their applications is fundamental. The lab experiments will involve operating these meters.

### 7. Important Points to Remember

*   **Two-Wattmeter Method:** Versatile, works for balanced and unbalanced loads. Sum of readings is total power.
*   **One-Wattmeter Method (Modified):** Simple, but **only for balanced loads**. Total power is twice the wattmeter reading.
*   **Power Factor Calculation:** Use the ratio of wattmeter readings in the two-wattmeter method.
*   **Reactive and Apparent Power:** Calculate using $S = \sqrt{3} V_L I_L$ and $Q = \sqrt{S^2 - P^2}$ after measuring real power.
*   **Phase Angles:** Be mindful of the phase relationships between voltages and currents in three-phase systems, especially when interpreting wattmeter readings for unbalanced loads.
*   **Load Types:** The choice of method depends on whether the load is balanced or unbalanced.

### 8. Practice Questions/Exercises

1.  In a three-phase balanced load, the two-wattmeter method shows readings of $W_1 = 2000$ W and $W_2 = 800$ W.
    a) Calculate the total real power.
    b) Calculate the power factor of the load.
    c) If the line voltage is 415 V, calculate the line current.
    d) Calculate the apparent power.
    e) Calculate the reactive power.

2.  You are using the modified one-wattmeter method to measure the power of a three-phase balanced load. The wattmeter shows a reading of 1500 W.
    a) What is the total real power drawn by the load?
    b) If the line voltage is 230 V and the load has a power factor of 0.9 lagging, calculate the line current, apparent power, and reactive power.

3.  Explain why the two-wattmeter method is preferred over the one-wattmeter method for measuring power in industrial three-phase systems.

4.  A three-phase star-connected motor draws a line current of 15 A at a line voltage of 400 V. If the motor's power factor is 0.85 lagging, calculate:
    a) Real Power (P)
    b) Reactive Power (Q)
    c) Apparent Power (S)

---

### Answers to Practice Questions

**1. Solution:**
    a) Total real power, $P = W_1 + W_2 = 2000 + 800 = 2800$ W.
    b) Ratio $R = \frac{W_1}{W_2} = \frac{2000}{800} = 2.5$.
       $\tan \phi = \sqrt{3} \frac{R-1}{R+1} = \sqrt{3} \frac{2.5-1}{2.5+1} = \sqrt{3} \frac{1.5}{3.5} = \sqrt{3} \times \frac{3}{7} \approx 1.732 \times 0.4286 \approx 0.7428$.
       $\phi = \arctan(0.7428) \approx 36.6^\circ$.
       Power Factor, $PF = \cos(36.6^\circ) \approx 0.803$ lagging.
    c) Real power $P = \sqrt{3} V_L I_L \cos \phi$.
       $2800 = \sqrt{3} \times 415 \times I_L \times 0.803$.
       $2800 = 579.2 \times I_L$.
       $I_L = \frac{2800}{579.2} \approx 4.83$ A.
    d) Apparent power, $S = \sqrt{3} V_L I_L = \sqrt{3} \times 415 \times 4.83 \approx 3474.5$ VA.
       Alternatively, $S = \frac{P}{PF} = \frac{2800}{0.803} \approx 3486.9$ VA. (Slight difference due to rounding).
    e) Reactive power, $Q = \sqrt{S^2 - P^2} = \sqrt{(3486.9)^2 - (2800)^2} = \sqrt{12158515 - 7840000} = \sqrt{4318515} \approx 2078.1$ VAR.
       Alternatively, $Q = \sqrt{3} V_L I_L \sin \phi = 3486.9 \times \sin(36.6^\circ) \approx 3486.9 \times 0.596 \approx 2078.2$ VAR.

**2. Solution:**
    a) Total real power, $P = 2 \times \text{Wattmeter reading} = 2 \times 1500 = 3000$ W.
    b) Line voltage $V_L = 230$ V. Power factor $PF = 0.9$ lagging.
       Line current, $I_L = \frac{P}{\sqrt{3} V_L \cos \phi} = \frac{3000}{\sqrt{3} \times 230 \times 0.9} = \frac{3000}{359.3} \approx 8.35$ A.
       Apparent power, $S = \sqrt{3} V_L I_L = \sqrt{3} \times 230 \times 8.35 \approx 3324.5$ VA.
       Alternatively, $S = \frac{P}{PF} = \frac{3000}{0.9} \approx 3333.3$ VA.
       Reactive power, $Q = \sqrt{S^2 - P^2} = \sqrt{(3333.3)^2 - (3000)^2} = \sqrt{11110889 - 9000000} = \sqrt{2110889} \approx 1452.9$ VAR.
       Alternatively, $\phi = \arccos(0.9) \approx 25.84^\circ$.
       $Q = \sqrt{3} V_L I_L \sin \phi = 3333.3 \times \sin(25.84^\circ) \approx 3333.3 \times 0.436 \approx 1453.3$ VAR.

**3. Explanation:**
The two-wattmeter method is preferred because it is applicable to **both balanced and unbalanced three-phase loads**. It can accurately measure the total power regardless of the load conditions. The one-wattmeter method, in its common modified form, is strictly valid **only for balanced loads**. If used with an unbalanced load, it will provide incorrect results, making it unsuitable for many industrial applications where load imbalances are common.

**4. Solution:**
Given:
Line current, $I_L = 15$ A
Line voltage, $V_L = 400$ V
Power factor, $PF = 0.85$ lagging

a) Real Power (P):
   $P = \sqrt{3} V_L I_L \cos \phi$
   $P = \sqrt{3} \times 400 \times 15 \times 0.85$
   $P = 692.82 \times 15 \times 0.85$
   $P = 8827.0$ W

b) Reactive Power (Q):
   First, find the power factor angle: $\phi = \arccos(0.85) \approx 31.79^\circ$.
   $Q = \sqrt{3} V_L I_L \sin \phi$
   $Q = \sqrt{3} \times 400 \times 15 \times \sin(31.79^\circ)$
   $Q = 8827.0 \times 0.5268$
   $Q = 4654.0$ VAR

c) Apparent Power (S):
   $S = \sqrt{3} V_L I_L$
   $S = \sqrt{3} \times 400 \times 15$
   $S = 10392.3$ VA
   Alternatively, $S = \frac{P}{PF} = \frac{8827.0}{0.85} \approx 10384.7$ VA. (Slight difference due to rounding).

---
This concludes the study notes for Module 6: 3. Remember to consult your textbooks for more detailed explanations and diagrams.
