---
title: "Need for improved utility interface- Generation of current harmonics- Power factor- Harmonics and IEEE 519 standard- Active shaping of the input line current- Single-phase front end boost converter(circuit diagram, operation, block diagram of the control scheme)"
subject: "POWER ELECTRONICS AND DRIVES"
module: "Module 3: Switch mode DC"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e2b"
status: "completed"
scrapedAt: "2026-05-23T16:17:54.594Z"
---
# POWER ELECTRONICS AND DRIVES - Module 3: Switch Mode DC

This module focuses on the crucial aspects of interfacing DC-DC converters with the utility grid, particularly addressing issues related to current harmonics and power factor. We will explore the need for improved utility interfaces, the generation of current harmonics by switching converters, the concept of power factor, and the important IEEE 519 standard. The module will then delve into active shaping of the input line current and a specific implementation: the single-phase front-end boost converter, including its circuit, operation, and control strategy.

---

## 1. Need for Improved Utility Interface (CO4: K2)

Switch-mode DC-DC converters, while offering advantages like high efficiency and compact size, draw current in a non-sinusoidal manner from the AC utility. This non-sinusoidal current injection leads to several problems that necessitate an improved interface.

**Key Concepts:**

*   **Utility Interface:** The point at which a power electronic system connects to the AC power grid (utility).
*   **Non-Sinusoidal Waveforms:** Waveforms that deviate from a pure sine wave.
*   **Switching Converters:** Converters that operate by rapidly switching semiconductor devices on and off (e.g., buck, boost, buck-boost converters).

**Problems with Poor Utility Interface:**

*   **Harmonic Distortion:** The non-sinusoidal current drawn by switching converters contains harmonics, which are integer multiples of the fundamental frequency (e.g., 50/60 Hz).
*   **Power Quality Degradation:** Harmonics can cause increased losses, overheating of equipment, interference with communication systems, and misoperation of sensitive electronic devices connected to the same grid.
*   **Low Power Factor:** The phase shift between voltage and current, and the presence of harmonics, contribute to a low power factor, meaning the utility is delivering more apparent power than real power. This reduces the efficiency of power transmission and distribution.
*   **Increased Neutral Current:** In three-phase systems, the third harmonic current can add up in the neutral conductor, leading to overheating and potential fire hazards.

**Why Improvement is Needed:**

*   **Efficiency:** Poor power factor means wasted energy.
*   **Reliability:** Harmonics can stress equipment and reduce its lifespan.
*   **Load & Source Waveforms:** Utilities expect clean sinusoidal voltage, and devices connected should draw clean sinusoidal current.
*   **Regulatory Compliance:** Standards like IEEE 519 mandate limits on harmonic injection.

**Reference:**
*   Mohan, Undeland, Robbins (2022) - Discusses the impact of non-linear loads on the power system.
*   Rashid (2014) - Covers power quality issues arising from electronic loads.

---

## 2. Generation of Current Harmonics (CO4: K2)

Switching converters inherently generate current harmonics due to their switching operation.

**Key Concepts:**

*   **Fourier Series:** Any periodic non-sinusoidal waveform can be represented as a sum of a fundamental sinusoid and its integer multiples (harmonics).
*   **Switching Action:** The abrupt turning on and off of semiconductor switches creates discontinuous current waveforms.

**How Harmonics are Generated:**

Consider a simple buck converter operating in continuous conduction mode (CCM). The inductor current, which is the input current drawn from the source (before rectification), is typically a triangular or trapezoidal waveform. When this waveform is analyzed using Fourier series, it contains a fundamental component and various odd harmonics.

*   **Example:** If the switching frequency is $f_s$ and the line frequency is $f_l$, the current drawn by the converter will contain harmonics at frequencies like $f_l$, $3f_l$, $5f_l$, etc., and also harmonics related to the switching frequency, such as $f_s \pm f_l$, $f_s \pm 3f_l$, etc.

**Factors Affecting Harmonic Content:**

*   **Duty Cycle ($D$):** Changes in the duty cycle alter the shape of the input current waveform.
*   **Switching Frequency ($f_s$):** Higher switching frequencies generally push the harmonics to higher frequencies, which can be easier to filter, but also increase switching losses.
*   **Load Conditions:** The load on the converter affects the inductor current waveform.
*   **Input Voltage:** The AC input voltage waveform itself is ideally sinusoidal.

**Important Point to Remember:**
*   The harmonic content is directly related to the non-linearity introduced by the switching action.

**Reference:**
*   Vithayathil (2010) - Explains the Fourier analysis of switched waveforms.
*   Lander (1993) - Provides detailed analysis of current and voltage waveforms in power electronic circuits.

---

## 3. Power Factor (CO4: K2)

Power factor is a measure of how effectively electrical power is being used. For AC systems, it quantifies the ratio of real power (kW) to apparent power (kVA).

**Key Concepts:**

*   **Real Power (P):** The actual power delivered to the load that performs useful work (measured in Watts or Kilowatts).
*   **Reactive Power (Q):** The power that oscillates between the source and the reactive components of the load (inductors and capacitors), necessary for establishing magnetic and electric fields (measured in Volt-Amperes Reactive or VAR).
*   **Apparent Power (S):** The vector sum of real and reactive power, representing the total power delivered by the source (measured in Volt-Amperes or VA).
*   **Power Factor (PF) = P / S**

**Types of Power Factor:**

*   **Displacement Power Factor (DPF):** The ratio of the fundamental component of the current to the RMS value of the current, and the cosine of the phase angle between the fundamental voltage and fundamental current.
*   **Distortion Power Factor (DistPF):** This accounts for the distortion in the current waveform due to harmonics. It is the ratio of the fundamental component of the current to the total RMS value of the current.
*   **True Power Factor (TPF):** The product of DPF and DistPF. This is the most comprehensive measure of power factor.

**PF = DPF * DistPF = cos($\phi_1$) * (Fundamental Current RMS / Total Current RMS)**

**Impact of Harmonics on Power Factor:**

Harmonics degrade the power factor because:

1.  **Distortion:** The RMS value of the distorted current is higher than its fundamental component.
2.  **Phase Shift:** The phase shift between the voltage and current at each harmonic frequency contributes to the overall displacement.

**Ideal Power Factor:** A power factor of 1 (unity) means that the current waveform is a pure sine wave, in phase with the voltage waveform, and there are no harmonics.

**Reference:**
*   Hart (2010) - Provides a good explanation of power factor concepts in AC circuits.
*   Umanand (2009) - Discusses power factor correction techniques.

---

## 4. Harmonics and IEEE 519 Standard (CO4: K2)

The IEEE 519 standard (IEEE Recommended Practice and Requirements for Harmonic Control in Electric Power Systems) is a crucial guideline for managing harmonic distortion in power systems.

**Key Concepts:**

*   **Harmonic Distortion Limits:** The standard specifies limits on the harmonic voltage and current that can be injected into the power system by individual customers or the total load on a common bus.
*   **Point of Common Coupling (PCC):** The point in the system where multiple customers are connected.

**Key Provisions of IEEE 519 (Simplified):**

The standard typically specifies limits based on the **Total Harmonic Distortion (THD)** of current and voltage, as well as individual harmonic current limits.

*   **Current Distortion Limits:** These are usually expressed as a percentage of the fundamental current ($I_L$) at the PCC.
    *   For example, for a given connection voltage, there will be limits on individual harmonics (e.g., 5th, 7th, 11th, 13th, etc.) as a percentage of $I_L$.
    *   There is also a limit for the **Total Harmonic Distortion of Current (THDi)**: $THDi = (\sqrt{\sum_{n=2}^{\infty} I_n^2}) / I_1 \times 100\%$, where $I_n$ is the RMS value of the $n$-th harmonic current and $I_1$ is the RMS value of the fundamental current.

*   **Voltage Distortion Limits:** These are typically specified as a percentage of the fundamental voltage ($V_L$).
    *   **Total Harmonic Distortion of Voltage (THDv):** $THDv = (\sqrt{\sum_{n=2}^{\infty} V_n^2}) / V_1 \times 100\%$, where $V_n$ is the RMS value of the $n$-th harmonic voltage and $V_1$ is the RMS value of the fundamental voltage.

**Example of Limits (illustrative, actual limits depend on system parameters like $I_{sc}/I_L$):**

| Harmonic Order (n) | Maximum Harmonic Voltage (% $V_L$) | Maximum Harmonic Current (% $I_L$) |
| :----------------- | :--------------------------------- | :--------------------------------- |
| 3                  | 5.0                                | 4.0                                |
| 5                  | 4.0                                | 10.0                               |
| 7                  | 3.5                                | 4.0                                |
| 11                 | 2.0                                | 4.0                                |
| 13                 | 1.5                                | 4.0                                |
| 17-23              | 1.0                                | 2.0                                |
| 25-35              | 0.5                                | 1.5                                |
| 37-49              | 0.5                                | 1.0                                |
| **THDv**           | **5.0**                            | **N/A**                            |
| **THDi**           | **N/A**                            | **12.0 to 30.0 (depending on $I_{sc}/I_L$)** |

*   **$I_{sc}$**: Short-circuit current at the PCC.
*   **$I_L$**: Maximum load current at the PCC.
*   The ratio $I_{sc}/I_L$ is important for determining the acceptable harmonic levels. A lower ratio (weak grid) means stricter harmonic limits.

**Purpose of the Standard:**

*   To ensure compatibility between the power system and the connected loads.
*   To prevent excessive harmonic distortion from degrading power quality.
*   To promote the use of power factor correction and harmonic mitigation techniques.

**Reference:**
*   IEEE 519 Standard itself is the primary reference.
*   Dubey (2001) - May discuss harmonic analysis and standards in the context of electric drives.

---

## 5. Active Shaping of the Input Line Current (CO4: K2)

Active shaping of the input line current aims to make the current drawn by the power converter from the AC source sinusoidal and in phase with the voltage. This effectively improves the power factor and reduces harmonic distortion.

**Key Concepts:**

*   **Sinusoidal Current:** The drawn current has a pure sinusoidal waveform at the fundamental frequency.
*   **Unity Power Factor:** The current is in phase with the voltage, minimizing reactive power.
*   **Harmonic Reduction:** By actively controlling the current, harmonic components are significantly suppressed.

**Methods for Active Current Shaping:**

The most common approach is to use a **bidirectional switch** (often a MOSFET or IGBT with an antiparallel diode) in conjunction with a **current control loop**. This switch is placed in series with the input AC source and the power converter. By controlling the switching action of this device, the current drawn from the source can be shaped.

**How it Works (General Principle):**

1.  **Sensing:** The input AC voltage and input current are sensed.
2.  **Reference Generation:** Based on the sensed AC voltage and the desired output voltage, a reference current waveform is generated. This reference current is designed to be sinusoidal and in phase with the AC voltage.
3.  **Current Control:** A control loop (typically a PWM controller) regulates the switching of the active switch to force the input current to follow the generated reference current.
4.  **Power Conversion:** The main power converter (e.g., a DC-DC converter) then processes this conditioned input current to deliver the desired DC output.

**Benefits:**

*   **High Power Factor:** Approaches unity.
*   **Low Current Harmonics:** Meets strict standards like IEEE 519.
*   **Reduced EMI:** Sinusoidal current leads to less electromagnetic interference.
*   **Smaller Input Filtering:** Less need for bulky passive filters.

**Reference:**
*   Mohan, Undeland, Robbins (2022) - Discusses various topologies for active power factor correction (APFC).
*   Krein (2017) - Offers detailed insights into control strategies for current shaping.

---

## 6. Single-Phase Front-End Boost Converter (CO2: K3, CO4: K2)

The single-phase front-end boost converter is a popular topology used for active shaping of the input line current. It acts as a "power factor corrector" stage.

### 6.1 Circuit Diagram

The circuit consists of an AC input voltage source ($v_s$), a diode ($D_1$), an active switch ($S_1$, typically a MOSFET or IGBT with an antiparallel diode), an inductor ($L_1$), a capacitor ($C_1$), and the load (represented by $R_L$ or a subsequent DC-DC converter stage).

```
      +-------- L1 --------+------- S1 (with anti-parallel diode) -------+------- C1 -------+
      |                    |                                             |                |
  vs ~~~~                    |                                             |                |
      |                    |                                             |                |
      +-------- D1 --------+---------------------------------------------+------- Load -----+
                                                                                            |
                                                                                            GND
```

**Note:** $S_1$ is the controlled switching element. $D_1$ is a passive diode that conducts when $S_1$ is off and the input voltage is positive. The antiparallel diode across $S_1$ is crucial for conducting current when $S_1$ is turned off.

### 6.2 Operation

The operation is based on controlling the conduction of the active switch $S_1$ using Pulse Width Modulation (PWM). The goal is to shape the current drawn from the AC source.

**Modes of Operation (Simplified):**

1.  **$S_1$ ON:**
    *   The inductor $L_1$ is connected across the AC source ($v_s$) and the load (through $C_1$).
    *   Current flows through $L_1$ and $S_1$, increasing the energy stored in $L_1$.
    *   The current drawn from the source follows the path $v_s \rightarrow L_1 \rightarrow S_1$.
    *   The diode $D_1$ is reverse-biased.

2.  **$S_1$ OFF:**
    *   The inductor current now needs to find a path. It flows through the antiparallel diode of $S_1$ and then to the output capacitor $C_1$ and the load.
    *   The diode $D_1$ is forward-biased if $v_s$ is positive. The inductor current flows through $D_1$ and then to $C_1$.
    *   The energy stored in $L_1$ is transferred to $C_1$ and the load.
    *   The current drawn from the source is effectively interrupted when $S_1$ turns off (if $D_1$ is not conducting). However, to achieve sinusoidal current, the switching is carefully controlled.

**Achieving Sinusoidal Current:**

The key to achieving sinusoidal current is to control the **duty cycle ($D$) of $S_1$ dynamically**. The duty cycle is modulated in accordance with the instantaneous AC input voltage $v_s$ and the desired input current waveform.

The voltage across the inductor $L_1$ is approximately:
$v_{L1} = v_s - v_{out}$ (when $S_1$ is ON)
$v_{L1} = v_s - v_{Diode}$ (when $S_1$ is OFF and $D_1$ conducts)

For the input current ($i_{in}$) to be sinusoidal and in phase with $v_s$, the voltage across the inductor ($v_{L1}$) must be controlled such that the average inductor voltage over a switching cycle results in a sinusoidal current. This is achieved by making the duty cycle of $S_1$ proportional to the instantaneous AC voltage:

$D(t) \approx 1 - \frac{v_s(t)}{V_{out}}$ (This is a simplification for CCM boost converter for PF correction)

More precisely, the control strategy aims to make the input current ($i_{in}$) proportional to the input voltage ($v_s$):
$i_{in}(t) = k \cdot v_s(t)$
where $k$ is a constant, implying a resistive behavior.

**Boost Converter Characteristic:**
A standard boost converter's output voltage is $V_{out} = \frac{V_{in}}{1-D}$. In this application, $V_{in}$ is the instantaneous AC voltage $v_s$, and $V_{out}$ is the DC bus voltage. The input current is shaped by controlling $D$ dynamically.

### 6.3 Block Diagram of the Control Scheme

A typical control scheme for active current shaping using a single-phase boost converter involves:

1.  **Voltage Sensing:** Measures the instantaneous AC input voltage ($v_s$).
2.  **Current Sensing:** Measures the instantaneous input line current ($i_{in}$).
3.  **Output Voltage Sensing:** Measures the DC output voltage ($V_{out}$).
4.  **Reference Current Generator:**
    *   Takes the sensed $v_s$ and generates a reference sinusoidal current $i_{ref}$. This reference is typically in phase with $v_s$.
    *   The amplitude of $i_{ref}$ is often regulated by a slow outer loop controlling the DC output voltage $V_{out}$.
5.  **Current Controller (e.g., PI Controller):**
    *   Compares the sensed input current ($i_{in}$) with the reference current ($i_{ref}$).
    *   Generates an error signal.
    *   The output of this controller, combined with the sensed $v_s$, determines the duty cycle.
6.  **PWM Generator:**
    *   Takes the control signal (output of the current controller and sometimes a carrier waveform) and generates the PWM pulses for the active switch $S_1$.
    *   The PWM pulses are designed to make the input current follow the reference current.

```
+--------------------+     +--------------------+     +--------------------+
|   AC Input Voltage | --> |  Voltage Sensing   | --> | Reference Current  |
|        (vs)        |     |                    |     |     Generator      |
+--------------------+     +--------------------+     +---------+----------+
                                                                   |
+--------------------+     +--------------------+                 |
|  AC Input Current  | --> |  Current Sensing   | --> +-----------+----------+
|        (iin)       |     |                    |     |  Current Controller  |
+--------------------+     +--------------------+     |      (e.g., PI)      |
                                                         +-----------+----------+
                                                                   | Error Signal
+--------------------+     +--------------------+                 |
|  DC Output Voltage | --> | Voltage Sensing    | --> +-----------+----------+
|       (Vout)       |     | (Outer Loop)       |     | Outer Voltage        |
+--------------------+     +--------------------+     |   Controller         |
                                                         +-----------+----------+
                                                                   | Control Signal
                                                                   | (modulates duty)
                                                                   v
                                                         +--------------------+
                                                         |    PWM Generator   |
                                                         +---------+----------+
                                                                   |
                                                         +---------+----------+
                                                         |    Active Switch   |
                                                         |        (S1)        |
                                                         +--------------------+
                                                                   |
                                                         +--------------------+
                                                         |   Boost Converter  |
                                                         |      Circuit       |
                                                         +--------------------+
                                                                   |
                                                         +--------------------+
                                                         |      DC Output     |
                                                         |      (Vout)        |
                                                         +--------------------+
```

**Control Logic Example:**

A common approach is to use a **multiplicative or average current mode control**. In a simplified form, the control signal might be related to:

`PWM Duty Cycle (D) = K_p * (i_ref - i_in) + K_i * Integral(i_ref - i_in)` (from PI controller)

Where the reference current $i_{ref}$ is derived from the sensed AC voltage and regulated output voltage.

**References:**
*   Mohan, Undeland, Robbins (2022) - Detailed explanation of boost converter operation and APFC control.
*   Rashid (2014) - Discusses PWM techniques and control loops for converters.
*   Krein (2017) - Provides advanced control strategies for power converters.

---

## Practice Questions and Answers

**Question 1:** What are the primary reasons for improving the utility interface of switch-mode DC-DC converters?
**Answer:** The primary reasons are to reduce harmonic distortion injected into the grid, improve the power factor (efficiency of power utilization), ensure compatibility with other grid-connected devices, and comply with harmonic standards like IEEE 519.

**Question 2:** How do switching converters generate current harmonics?
**Answer:** Switching converters generate current harmonics due to the non-sinusoidal, discontinuous current waveforms produced by the rapid switching of semiconductor devices. These non-linear waveforms can be represented by their fundamental frequency and its integer multiples (harmonics) using Fourier series.

**Question 3:** Define the true power factor and how it differs from the displacement power factor.
**Answer:** True Power Factor (TPF) is the ratio of real power to apparent power and accounts for both the phase displacement between voltage and current (Displacement Power Factor, DPF) and the distortion in the current waveform due to harmonics. TPF = DPF × Distortion Power Factor (DistPF). DPF only considers the phase shift of the fundamental components.

**Question 4:** What is the main objective of the IEEE 519 standard?
**Answer:** The main objective of the IEEE 519 standard is to limit the harmonic distortion injected into electric power systems by non-linear loads (like power electronic converters) to ensure power quality and system compatibility. It sets specific limits on individual harmonic currents and voltages, as well as total harmonic distortion.

**Question 5:** Briefly explain the concept of active shaping of input line current.
**Answer:** Active shaping of input line current involves using a control strategy to force the current drawn from the AC source to be sinusoidal and in phase with the AC voltage. This is achieved by actively controlling the switching of semiconductor devices within the power converter circuit. The goal is to achieve unity power factor and low harmonic distortion.

**Question 6:** In a single-phase front-end boost converter used for APFC, what component's duty cycle is modulated to shape the input current?
**Answer:** The duty cycle of the active switch ($S_1$) is modulated.

**Question 7:** What is the role of the outer voltage control loop in the boost converter APFC control scheme?
**Answer:** The outer voltage control loop regulates the DC output voltage ($V_{out}$) by adjusting the amplitude of the reference current ($i_{ref}$). This ensures that the converter delivers the required DC power to the load while maintaining a stable output voltage.

---

## Important Points to Remember

*   **Switching = Harmonics:** The fundamental cause of harmonic generation in power electronics is the switching action.
*   **Power Factor is Crucial:** A low power factor leads to inefficient power transmission and increased utility costs.
*   **IEEE 519 is the Benchmark:** Always consider the limits set by IEEE 519 when designing power electronic systems that interface with the grid.
*   **Active Control is Key:** To achieve good power quality (high PF, low harmonics), active control strategies are necessary.
*   **Boost Converter for APFC:** The boost topology is widely used as a front-end for active power factor correction in single-phase systems.
*   **Control Complexity:** Achieving sinusoidal current requires a closed-loop control system that senses voltage and current and dynamically adjusts switching parameters.

---

This comprehensive study material covers the core concepts of Module 3, Section 3, focusing on the utility interface, harmonics, power factor, standards, and the single-phase front-end boost converter. The notes are structured to facilitate understanding and retention, incorporating key definitions, operational principles, and control strategies.
