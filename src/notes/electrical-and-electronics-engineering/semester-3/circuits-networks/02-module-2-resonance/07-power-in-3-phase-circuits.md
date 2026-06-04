---
title: "Power in 3-phase circuits"
subject: "CIRCUITS & NETWORKS"
module: "Module 2: Resonance"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ac5"
status: "completed"
scrapedAt: "2026-05-23T16:11:27.939Z"
---
# CIRCUITS & NETWORKS - Module 2: Resonance

## Topic: Power in 3-phase circuits

**Course Outcomes (COs) Addressed:**
*   **CO4:** Analyse three-phase networks in star and delta configurations under balanced and unbalanced conditions. (Knowledge Level: K3)

**Learning Outcomes:**
*   Understanding the concepts of power in three-phase circuits.
*   Calculating real, reactive, and apparent power in balanced and unbalanced three-phase systems.
*   Applying power measurement techniques in three-phase circuits.

**References:**
*   Network Analysis by Van Valkenburg (Pearson, 3rd 2019)
*   Network Analysis and Synthesis by Ravish R Singh (McGraw Hill Education, 2nd 2019)
*   Electric Circuits & Networks by Suresh Kumar (Pearson, Ist 2008)
*   Circuits and Networks, Analysis and Synthesis by A Sudhakar, Shyammohan S Palli (McGraw Hill Education, 5th 2017)

---

### 1. Introduction to Three-Phase Power

Three-phase power systems are widely used for generation, transmission, and distribution of electrical power due to their efficiency and ability to deliver more constant power compared to single-phase systems. A three-phase system consists of three alternating voltages of the same frequency and magnitude, but with a phase difference of 120 degrees between them.

---

### 2. Power in Balanced Three-Phase Circuits

In a balanced three-phase system, all phase voltages and currents have equal magnitudes and are displaced by 120 degrees. The loads connected to each phase are also identical.

#### 2.1 Real Power (P)

Real power, also known as active power or true power, is the power that performs useful work. It is dissipated as heat in resistors or converted into mechanical work in motors.

*   **Definition:** The average power delivered to the load.
*   **Units:** Watts (W), Kilowatts (kW), Megawatts (MW).

**Formulas:**

*   **In terms of phase voltage and current:**
    $P = 3 \times V_{ph} \times I_{ph} \times \cos(\phi)$
    where:
    *   $V_{ph}$ is the phase voltage.
    *   $I_{ph}$ is the phase current.
    *   $\cos(\phi)$ is the power factor, where $\phi$ is the phase difference between phase voltage and phase current.

*   **In terms of line voltage and current (for Y-connected loads):**
    *   $V_L = \sqrt{3} V_{ph}$
    *   $I_L = I_{ph}$
    $P = 3 \times \frac{V_L}{\sqrt{3}} \times I_L \times \cos(\phi)$
    $P = \sqrt{3} \times V_L \times I_L \times \cos(\phi)$

*   **In terms of line voltage and current (for Delta-connected loads):**
    *   $V_L = V_{ph}$
    *   $I_L = \sqrt{3} I_{ph}$
    $P = 3 \times V_{ph} \times \frac{I_L}{\sqrt{3}} \times \cos(\phi)$
    $P = \sqrt{3} \times V_L \times I_L \times \cos(\phi)$

**Important Note:** The formula $P = \sqrt{3} \times V_L \times I_L \times \cos(\phi)$ is universally applicable for balanced three-phase systems, regardless of whether the load is star or delta connected.

#### 2.2 Reactive Power (Q)

Reactive power is the power that oscillates between the source and the reactive components (inductors and capacitors) of the circuit. It is necessary for establishing and maintaining magnetic and electric fields.

*   **Definition:** The power associated with energy storage in reactive components.
*   **Units:** Volt-Ampere Reactive (VAR), Kilovars (kVAR), Megavars (MVAR).

**Formulas:**

*   **In terms of phase voltage and current:**
    $Q = 3 \times V_{ph} \times I_{ph} \times \sin(\phi)$

*   **In terms of line voltage and current:**
    $Q = \sqrt{3} \times V_L \times I_L \times \sin(\phi)$

#### 2.3 Apparent Power (S)

Apparent power is the product of the RMS values of the line voltage and line current. It represents the total power that the system must be capable of supplying.

*   **Definition:** The vector sum of real and reactive power.
*   **Units:** Volt-Amperes (VA), Kilovolt-Amperes (kVA), Megavolt-Amperes (MVA).

**Formulas:**

*   **In terms of phase voltage and current:**
    $S = 3 \times V_{ph} \times I_{ph}$

*   **In terms of line voltage and current:**
    $S = \sqrt{3} \times V_L \times I_L$

**Relationship between S, P, and Q:**
The apparent power, real power, and reactive power form a power triangle:
$S^2 = P^2 + Q^2$

$\cos(\phi) = \frac{P}{S}$ (Power Factor)

**Example (Balanced Load):**
A balanced three-phase Y-connected load draws a line current of 20 A at a line voltage of 400 V. The power factor is 0.8 lagging. Calculate the real, reactive, and apparent power.

**Solution:**
Given:
$V_L = 400 \text{ V}$
$I_L = 20 \text{ A}$
$\cos(\phi) = 0.8$ (lagging)

1.  **Apparent Power (S):**
    $S = \sqrt{3} \times V_L \times I_L = \sqrt{3} \times 400 \text{ V} \times 20 \text{ A} = 13856.4 \text{ VA} = 13.86 \text{ kVA}$

2.  **Real Power (P):**
    $P = \sqrt{3} \times V_L \times I_L \times \cos(\phi) = S \times \cos(\phi) = 13856.4 \text{ VA} \times 0.8 = 11085.12 \text{ W} = 11.09 \text{ kW}$

3.  **Reactive Power (Q):**
    First, find $\sin(\phi)$: $\sin(\phi) = \sqrt{1 - \cos^2(\phi)} = \sqrt{1 - 0.8^2} = \sqrt{1 - 0.64} = \sqrt{0.36} = 0.6$
    $Q = \sqrt{3} \times V_L \times I_L \times \sin(\phi) = S \times \sin(\phi) = 13856.4 \text{ VA} \times 0.6 = 8313.84 \text{ VAR} = 8.31 \text{ kVAR}$

**Verification:**
$S^2 = (13.86 \text{ kVA})^2 \approx 192.1 \text{ kVA}^2$
$P^2 + Q^2 = (11.09 \text{ kW})^2 + (8.31 \text{ kVAR})^2 \approx 123.0 \text{ kW}^2 + 69.06 \text{ kVAR}^2 \approx 192.06 \text{ kVA}^2$
The values match.

---

### 3. Power in Unbalanced Three-Phase Circuits

In an unbalanced three-phase system, the phase voltages, currents, or both have different magnitudes or phase angles. This can occur due to:
*   Unbalanced loads.
*   Unbalanced supply voltages.
*   Faults in the system.

**Methods for Analysis:**

#### 3.1 Method of Symmetrical Components

This is the most powerful and systematic method for analyzing unbalanced three-phase circuits. It decomposes the unbalanced phase quantities (voltages or currents) into three sets of balanced symmetrical components:
1.  **Positive-sequence components:** A set of three balanced phasors displaced by 120 degrees in the positive direction (e.g., $V_a, V_b, V_c$).
2.  **Negative-sequence components:** A set of three balanced phasors displaced by 120 degrees in the negative direction (e.g., $V_a, V_c, V_b$).
3.  **Zero-sequence components:** A set of three phasors that are equal in magnitude and phase (e.g., $V_a, V_a, V_a$).

**Key Principles:**
*   **Unbalanced Phasors:**
    Let the phase currents be $I_a, I_b, I_c$.
    Let the phase voltages be $V_a, V_b, V_c$.
*   **Sequence Components:**
    $I_a = I_{a1} + I_{a2} + I_{a0}$
    $I_b = I_{b1} + I_{b2} + I_{b0}$
    $I_c = I_{c1} + I_{c2} + I_{c0}$

    Where $I_{a1}, I_{b1}, I_{c1}$ are positive-sequence currents, $I_{a2}, I_{b2}, I_{c2}$ are negative-sequence currents, and $I_{a0}, I_{b0}, I_{c0}$ are zero-sequence currents.

    *   For positive sequence: $I_{b1} = a I_{a1}$, $I_{c1} = a^2 I_{a1}$, where $a = e^{j120^\circ} = -\frac{1}{2} - j\frac{\sqrt{3}}{2}$ and $a^2 = e^{j240^\circ} = -\frac{1}{2} + j\frac{\sqrt{3}}{2}$.
    *   For negative sequence: $I_{b2} = a^2 I_{a2}$, $I_{c2} = a I_{a2}$.
    *   For zero sequence: $I_{a0} = I_{b0} = I_{c0}$.

*   **Total Power Calculation:**
    The total real power in an unbalanced three-phase system is the sum of the real powers in each phase:
    $P_{total} = P_a + P_b + P_c$
    $P_a = V_{a} \times I_{a}^*$ (complex power, where $I_a^*$ is the conjugate of $I_a$)
    $P_{total} = \text{Re}(V_a I_a^*) + \text{Re}(V_b I_b^*) + \text{Re}(V_c I_c^*)$

    Alternatively, using symmetrical components:
    $P_{total} = 3 \times P_{a1} + 3 \times P_{a2} + 3 \times P_{a0}$
    where $P_{a1} = V_{a1} I_{a1}^*$, $P_{a2} = V_{a2} I_{a2}^*$, $P_{a0} = V_{a0} I_{a0}^*$

    This implies that power is transferred only by the positive-sequence components. Negative and zero sequence components do not contribute to the net real power transfer.

**Reference to Textbooks:**
*   **Sudhakar & Palli:** Chapter 11, "Unbalanced Three-Phase Circuits," discusses symmetrical components in detail and their application to power calculations. They emphasize that only positive sequence components contribute to the average power.
*   **Ravish R Singh:** Chapter 9, "Unbalanced Phasor Diagrams and Power Measurement," covers the concept of symmetrical components and power calculations in unbalanced systems.

#### 3.2 Direct Calculation (Phase by Phase)

If the individual phase voltages and currents are known, the power in each phase can be calculated and summed up.

*   **Phase Power:**
    *   Real power in phase 'a': $P_a = V_{a} \times I_{a} \times \cos(\phi_a)$
    *   Reactive power in phase 'a': $Q_a = V_{a} \times I_{a} \times \sin(\phi_a)$
    *   Apparent power in phase 'a': $S_a = V_{a} \times I_{a}$
    where $V_a, I_a$ are RMS values of phase voltage and current, and $\phi_a$ is the phase angle difference between them.

*   **Total Power:**
    $P_{total} = P_a + P_b + P_c$
    $Q_{total} = Q_a + Q_b + Q_c$
    $S_{total} = S_a + S_b + S_c$ (vector sum) or $S_{total} = \sqrt{P_{total}^2 + Q_{total}^2}$

**Important Considerations for Unbalanced Systems:**
*   **Neutral Current:** In an unbalanced Y-connected system without a neutral wire, the currents might not sum to zero, requiring a neutral connection for current return. The neutral current is the sum of phase currents ($I_n = I_a + I_b + I_c$).
*   **Power Factor:** The power factor in an unbalanced system is generally not a single value but can be considered on a per-phase basis. The overall power factor is a complex concept and often derived from the total real and apparent power.

**Example (Unbalanced Load):**
A three-phase Y-connected load has phase impedances:
$Z_a = 10 \angle 30^\circ \, \Omega$
$Z_b = 10 \angle 0^\circ \, \Omega$
$Z_c = 10 \angle -30^\circ \, \Omega$
The line voltages are:
$V_{ab} = 200 \angle 0^\circ \text{ V}$
$V_{bc} = 200 \angle -120^\circ \text{ V}$
$V_{ca} = 200 \angle 120^\circ \text{ V}$
Calculate the total real power consumed by the load.

**Solution (using direct calculation):**

1.  **Phase Voltages (assuming source is balanced):**
    $V_{an} = \frac{V_{ab}}{\sqrt{3}} \angle -30^\circ = \frac{200}{\sqrt{3}} \angle -30^\circ \text{ V}$
    $V_{bn} = \frac{V_{bc}}{\sqrt{3}} \angle -120^\circ - 30^\circ = \frac{200}{\sqrt{3}} \angle -150^\circ \text{ V}$
    $V_{cn} = \frac{V_{ca}}{\sqrt{3}} \angle 120^\circ - 30^\circ = \frac{200}{\sqrt{3}} \angle 90^\circ \text{ V}$

2.  **Phase Currents:**
    $I_a = \frac{V_{an}}{Z_a} = \frac{200/\sqrt{3} \angle -30^\circ}{10 \angle 30^\circ} = \frac{20}{\sqrt{3}} \angle (-30^\circ - 30^\circ) = \frac{20}{\sqrt{3}} \angle -60^\circ \text{ A}$
    $I_b = \frac{V_{bn}}{Z_b} = \frac{200/\sqrt{3} \angle -150^\circ}{10 \angle 0^\circ} = \frac{20}{\sqrt{3}} \angle (-150^\circ - 0^\circ) = \frac{20}{\sqrt{3}} \angle -150^\circ \text{ A}$
    $I_c = \frac{V_{cn}}{Z_c} = \frac{200/\sqrt{3} \angle 90^\circ}{10 \angle -30^\circ} = \frac{20}{\sqrt{3}} \angle (90^\circ - (-30^\circ)) = \frac{20}{\sqrt{3}} \angle 120^\circ \text{ A}$

3.  **Phase Powers (Real):**
    $P_a = |V_{an}| |I_a| \cos(\text{angle}(V_{an}) - \text{angle}(I_a))$
    $|V_{an}| = \frac{200}{\sqrt{3}} \text{ V}$
    $|I_a| = \frac{20}{\sqrt{3}} \text{ A}$
    Angle difference for phase 'a' = $-30^\circ - (-60^\circ) = 30^\circ$
    $P_a = \frac{200}{\sqrt{3}} \times \frac{20}{\sqrt{3}} \times \cos(30^\circ) = \frac{4000}{3} \times \frac{\sqrt{3}}{2} = \frac{2000\sqrt{3}}{3} \text{ W} \approx 1154.7 \text{ W}$

    Angle difference for phase 'b' = $-150^\circ - (-150^\circ) = 0^\circ$
    $P_b = \frac{200}{\sqrt{3}} \times \frac{20}{\sqrt{3}} \times \cos(0^\circ) = \frac{4000}{3} \times 1 = \frac{4000}{3} \text{ W} \approx 1333.3 \text{ W}$

    Angle difference for phase 'c' = $90^\circ - 120^\circ = -30^\circ$
    $P_c = \frac{200}{\sqrt{3}} \times \frac{20}{\sqrt{3}} \times \cos(-30^\circ) = \frac{4000}{3} \times \frac{\sqrt{3}}{2} = \frac{2000\sqrt{3}}{3} \text{ W} \approx 1154.7 \text{ W}$

4.  **Total Real Power:**
    $P_{total} = P_a + P_b + P_c = \frac{2000\sqrt{3}}{3} + \frac{4000}{3} + \frac{2000\sqrt{3}}{3} = \frac{4000 + 4000\sqrt{3}}{3} \text{ W}$
    $P_{total} \approx 1154.7 + 1333.3 + 1154.7 = 3642.7 \text{ W}$

*(Note: Calculating with symmetrical components for this problem would involve finding sequence components of voltages and currents, which is more involved but yields the same result and highlights the power transfer principle.)*

---

### 4. Power Measurement in Three-Phase Circuits

Various methods are used to measure power in three-phase systems, especially for balanced and unbalanced loads.

#### 4.1 Two-Wattmeter Method

This is a common method for measuring total power in a three-phase, three-wire system (Y or Delta connected loads), even under unbalanced conditions. It uses two wattmeters.

**Princ:**
The algebraic sum of the readings of the two wattmeters gives the total three-phase power. Each wattmeter measures the power of two phases.

**Connections:**
*   **Wattmeter 1:**
    *   Voltage coil connected between phase A and phase B ($V_{AB}$).
    *   Current coil connected in series with phase A ($I_A$).
*   **Wattmeter 2:**
    *   Voltage coil connected between phase C and phase B ($V_{CB}$).
    *   Current coil connected in series with phase C ($I_C$).

**Readings:**
*   Wattmeter 1 reading ($W_1$) = $V_{AB} I_A \cos(\theta_{AB,IA})$
*   Wattmeter 2 reading ($W_2$) = $V_{CB} I_C \cos(\theta_{CB,IC})$

**Total Power:**
$P_{total} = W_1 + W_2$

**Power Factor Indication:**
The difference between the two wattmeter readings can indicate the power factor.
*   If $W_1 = W_2$, the power factor is unity (1).
*   If $W_1 > W_2$, the power factor is lagging.
*   If $W_1 < W_2$, the power factor is leading.
*   If $W_2$ is negative, it means it is contributing negatively to the total power, which happens at low lagging power factors (typically less than 0.5).

**Example (Two-Wattmeter Method):**
In a three-phase load, the two-wattmeter method shows readings of $W_1 = 5 \text{ kW}$ and $W_2 = 2 \text{ kW}$. Calculate the total power and the power factor.

**Solution:**
Total Power, $P_{total} = W_1 + W_2 = 5 \text{ kW} + 2 \text{ kW} = 7 \text{ kW}$.

To find the power factor, we can use the formulas:
$\tan(\phi) = \frac{\sqrt{3}(W_1 - W_2)}{W_1 + W_2}$
$\tan(\phi) = \frac{\sqrt{3}(5 - 2)}{5 + 2} = \frac{\sqrt{3}(3)}{7} = \frac{3\sqrt{3}}{7} \approx \frac{3 \times 1.732}{7} \approx \frac{5.196}{7} \approx 0.7423$

$\phi = \arctan(0.7423) \approx 36.58^\circ$
Power Factor, $\cos(\phi) = \cos(36.58^\circ) \approx 0.803$ (lagging, as $W_1 > W_2$).

#### 4.2 Three-Wattmeter Method

This method uses three wattmeters, one for each phase. It is suitable for measuring power in unbalanced systems, especially when the neutral connection is available (Y-connected loads).

**Connections:**
*   Each wattmeter has its current coil in series with a phase (A, B, C) and its voltage coil connected between that phase and the neutral point.

**Readings:**
*   $W_A = V_{an} I_a \cos(\phi_a)$
*   $W_B = V_{bn} I_b \cos(\phi_b)$
*   $W_C = V_{cn} I_c \cos(\phi_c)$

**Total Power:**
$P_{total} = W_A + W_B + W_C$

**Limitation:** Requires access to the neutral point, making it less suitable for delta-connected loads or systems without an accessible neutral.

---

### 5. Power Factor Correction in Three-Phase Systems

Similar to single-phase systems, the power factor of three-phase loads can be improved by connecting capacitors in parallel with the load.

*   **Capacitors:** Typically connected in a star configuration.
*   **Benefits:** Reduces reactive power demand from the supply, leading to lower line currents, reduced losses in transmission lines, and potentially lower electricity bills.

---

### 6. Summary of Key Points

*   **Balanced Systems:** Power calculations are simplified using line and phase voltage/current relationships and the power factor. $P = \sqrt{3} V_L I_L \cos(\phi)$, $Q = \sqrt{3} V_L I_L \sin(\phi)$, $S = \sqrt{3} V_L I_L$.
*   **Unbalanced Systems:**
    *   Symmetrical components provide a systematic analysis.
    *   Only positive-sequence components contribute to the total real power.
    *   Direct phase-by-phase calculation is possible if individual voltages and currents are known.
    *   Total power is the sum of individual phase powers ($P_{total} = P_a + P_b + P_c$).
*   **Power Measurement:**
    *   Two-wattmeter method is widely used for three-wire systems, even unbalanced. Total power is the sum of the two readings.
    *   Three-wattmeter method for four-wire systems measures each phase power individually.

---

### 7. Practice Questions

**Question 1 (Balanced):**
A balanced three-phase delta-connected load has a total power consumption of 5 kW at a power factor of 0.8 lagging. If the line voltage is 400 V, calculate:
a) The line current.
b) The phase current.
c) The apparent power.
d) The reactive power.

**Answer 1:**
Given: $P_{total} = 5 \text{ kW}$, $\cos(\phi) = 0.8$ (lagging), $V_L = 400 \text{ V}$
$\sin(\phi) = \sqrt{1 - 0.8^2} = 0.6$

a)  $P_{total} = \sqrt{3} V_L I_L \cos(\phi)$
    $5000 = \sqrt{3} \times 400 \times I_L \times 0.8$
    $I_L = \frac{5000}{\sqrt{3} \times 400 \times 0.8} = \frac{5000}{443.43} \approx 11.28 \text{ A}$

b)  For Delta connection, $I_L = \sqrt{3} I_{ph}$
    $I_{ph} = \frac{I_L}{\sqrt{3}} = \frac{11.28}{1.732} \approx 6.51 \text{ A}$

c)  $S = \frac{P_{total}}{\cos(\phi)} = \frac{5 \text{ kW}}{0.8} = 6.25 \text{ kVA}$

d)  $Q = \sqrt{3} V_L I_L \sin(\phi) = S \sin(\phi) = 6.25 \text{ kVA} \times 0.6 = 3.75 \text{ kVAR}$

**Question 2 (Unbalanced - Two Wattmeters):**
In a three-phase circuit, the readings on a two-wattmeter setup are $W_1 = 10 \text{ kW}$ and $W_2 = -2 \text{ kW}$. Determine:
a) The total power.
b) The power factor of the load.

**Answer 2:**
a) Total Power, $P_{total} = W_1 + W_2 = 10 \text{ kW} + (-2 \text{ kW}) = 8 \text{ kW}$.

b) $\tan(\phi) = \frac{\sqrt{3}(W_1 - W_2)}{W_1 + W_2} = \frac{\sqrt{3}(10 - (-2))}{10 + (-2)} = \frac{\sqrt{3}(12)}{8} = \frac{12\sqrt{3}}{8} = \frac{3\sqrt{3}}{2} \approx 2.598$
   $\phi = \arctan(2.598) \approx 68.96^\circ$
   Power Factor, $\cos(\phi) = \cos(68.96^\circ) \approx 0.359$ (lagging, because $W_2$ is negative, indicating a low lagging power factor).

---

### 8. Important Points to Remember

*   The formula $P = \sqrt{3} V_L I_L \cos(\phi)$ is crucial for balanced systems.
*   For unbalanced systems, the total power is the algebraic sum of individual phase powers.
*   The two-wattmeter method is a versatile tool for power measurement in three-wire systems.
*   Negative readings in the two-wattmeter method indicate a low lagging power factor (less than 0.5).
*   Symmetrical components are essential for analyzing unbalanced conditions and understanding power flow through sequence networks.
*   Ensure you correctly identify whether the load is star or delta connected when relating line and phase quantities.
