---
title: "Controlled Rectifiers (Single Phase) – Fully controlled and half-controlled rectifiers (semi-converter)with RL and RLE loads- Rectifier and inverter modes of operation- waveforms (continuous & discontinuous conduction)– Output voltage, Input line current, Real Power, Power factor and THD(Continuous conduction, ripple free current)- Effect of source inductance(Full converter in continuous conduction, ripple free current)"
subject: "POWER ELECTRONICS AND DRIVES"
module: "Module 2: Controlled Rectifiers (Single Phase) – Fully controlled and half"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e23"
status: "completed"
scrapedAt: "2026-05-23T16:17:49.048Z"
---
# Module 2: Controlled Rectifiers (Single Phase) – Fully Controlled and Half-Controlled Rectifiers

## Introduction to Controlled Rectifiers

Controlled rectifiers are AC-to-DC converters that use controllable semiconductor devices like Thyristors (SCRs) to regulate the output DC voltage. Unlike uncontrolled rectifiers (diodes), controlled rectifiers offer flexibility in adjusting the output voltage by controlling the firing angle (delay angle, $\alpha$) of the thyristors. This control is crucial for various applications, including DC motor drives, battery chargers, and DC power supplies.

This module focuses on single-phase controlled rectifiers, specifically fully controlled and half-controlled (semi-converter) configurations, with RL and RLE loads. We will analyze their operation in both rectifier and inverter modes, examine waveforms under continuous and discontinuous conduction, and evaluate their performance parameters like output voltage, input current, real power, power factor, and Total Harmonic Distortion (THD). We will also explore the impact of source inductance.

---

## 1. Single-Phase Half-Controlled Rectifiers (Semi-Converters)

A half-controlled rectifier uses a combination of diodes and thyristors. For a single-phase half-controlled bridge, two diodes and two thyristors are used.

**Configuration:**

*   Typically, two diodes (D1, D2) and two thyristors (T1, T2) are used in a bridge configuration.
*   The input AC voltage is connected across the AC terminals.
*   The output DC voltage is obtained across the load terminals.

**Operation with RL Load:**

Let's consider a half-controlled rectifier with an RL load. The operation depends on the firing angle $\alpha$ of the thyristors.

**Key Concepts:**

*   **Firing Angle ($\alpha$):** The delay angle from the point where the thyristor would have naturally conducted (like a diode) before it is triggered to conduct.
*   **Commutation:** The process of transferring current from one conducting device to another. In a half-controlled rectifier, commutation is naturally achieved by the diodes when they become reverse-biased.
*   **Continuous Conduction:** The output current flows continuously throughout the cycle. This typically occurs with inductive loads.
*   **Discontinuous Conduction:** The output current drops to zero during some part of the cycle. This happens with light inductive loads or resistive loads.

**Circuit Diagram (Half-Controlled Rectifier with RL Load):**

```
       AC Input
      +-------+
      |       |
      Vs      RL
      |       |
      +-------+
      | \ /   |
      |  T1   |
      +--+----+
      |     |
      D1    D2
      |     |
      +--+----+
      |  T2   |
      | / \   |
      +-------+
        |
        | Output DC
```

**Waveforms (Half-Controlled Rectifier with RL Load):**

*   **Input Voltage ($v_s$):** A sinusoidal waveform.
*   **Output Voltage ($v_o$):** The output voltage is a rectified waveform where portions of the negative half-cycles are blocked by diodes, and the positive half-cycles are controlled by the firing angle $\alpha$.
    *   Thyristors T1 and T2 are fired at angle $\alpha$.
    *   When T1 conducts, current flows through T1, RL, and D2.
    *   When T2 conducts, current flows through T2, RL, and D1.
    *   The conduction interval is from $\alpha$ to $\pi$ for T1 and from $\pi+\alpha$ to $2\pi$ for T2 (assuming a firing delay of $\alpha$ after the natural commutation points).

*   **Output Current ($i_o$):**
    *   **Continuous Conduction:** For an inductive load, the current waveform will be smoother. It starts at $\alpha$, continues to $\pi$ (and beyond due to inductance), and then resumes from $\pi+\alpha$. The current will not drop to zero.
    *   **Discontinuous Conduction:** If the inductance is small or the firing angle is large, the current may drop to zero before the next thyristor is fired.

*   **Input Line Current ($i_a$):** The input current drawn from the source will be a pulsed waveform. It is non-sinusoidal and contains harmonics.
    *   When T1 conducts, current flows from the source through T1.
    *   When D2 conducts (with T1), current flows through D2.
    *   When T2 conducts, current flows from the source through T2.
    *   When D1 conducts (with T2), current flows through D1.
    *   The input current is approximately in phase with the input voltage during the conduction of thyristors and diodes.

**Rectifier and Inverter Modes of Operation:**

*   **Rectifier Mode:** The converter delivers average DC power to the load. This happens when the average DC output voltage is positive. This is the primary mode of operation.
*   **Inverter Mode (Forced Commutation Required for Half-Controlled):** In an inverter mode, the converter delivers average DC power back to the AC source. This occurs when the average DC output voltage is negative. For a half-controlled rectifier, operating in inverter mode requires forcing the thyristors to turn off (e.g., using an auxiliary commutation circuit) because the diodes do not naturally block reverse current. In practice, inverter operation of half-controlled rectifiers is less common and complex due to the commutation issue.

**Output Voltage ($V_o$):**

For a single-phase half-controlled rectifier with RL load and continuous conduction:

$V_o = \frac{V_m}{\pi}(1 + \cos \alpha)$

Where:
*   $V_m$ is the peak value of the AC input voltage.
*   $\alpha$ is the firing angle.

**Important Note:** This formula is for the *average* DC output voltage. The instantaneous output voltage varies.

**Input Line Current, Real Power, Power Factor, and THD (Continuous Conduction, Ripple-Free Current Assumption for Simplicity):**

When we assume a ripple-free DC current (highly inductive load), the analysis becomes simpler.

*   **Input Line Current:** The input line current is a discontinuous, chopped waveform.
*   **Real Power ($P$):** The average power delivered to the load.
    $P = V_o \cdot I_o$ (where $I_o$ is the average DC current).
*   **Power Factor (PF):** The ratio of real power to apparent power. For controlled rectifiers, the power factor is affected by displacement factor and distortion factor.
    *   **Displacement Factor (DF):** Cosine of the phase difference between the fundamental component of the input voltage and current.
    *   **Distortion Factor (DistF):** Related to the harmonic content of the input current.
    *   $PF = DF \times DistF$
    For a half-controlled rectifier with RL load and continuous conduction:
    $DF = \cos \alpha$
    $DistF = \frac{1}{\sqrt{1 + (\frac{\omega L_s}{R})^2}}$ (approximately, if considering source impedance effects implicitly)
    More precisely, for a perfect RL load, the fundamental current lags the voltage by $\phi = \arctan(\omega L/R)$.
    $DF = \cos(\alpha + \phi)$
    The distortion factor is complex to calculate precisely without considering all harmonics.
*   **Total Harmonic Distortion (THD):** A measure of the harmonic content in the input current.
    $THD_i = \frac{\sqrt{I_{L_rms}^2 - I_{L1\_rms}^2}}{I_{L1\_rms}} \times 100\%$
    Where $I_{L_rms}$ is the total RMS value of the input current, and $I_{L1\_rms}$ is the RMS value of the fundamental component.

---

## 2. Single-Phase Fully Controlled Rectifiers (Full Converters)

A fully controlled rectifier uses only controllable semiconductor devices, typically four thyristors (T1, T2, T3, T4) in a bridge configuration.

**Configuration:**

*   Four thyristors (T1, T2, T3, T4) arranged in a bridge.
*   T1 and T2 are in one leg, and T3 and T4 are in the other leg.
*   T1 and T3 are fired at $\alpha$, and T2 and T4 are fired at $\pi + \alpha$.

**Operation with RL Load:**

**Key Concepts:**

*   **Natural Commutation:** Commutation is naturally achieved by the source voltage when a thyristor is reverse-biased.
*   **Control Range:** Fully controlled rectifiers offer a wider range of output voltage control, from maximum positive to maximum negative (in inverter mode).

**Circuit Diagram (Fully Controlled Rectifier with RL Load):**

```
       AC Input
      +-------+
      |       |
      Vs      RL
      |       |
      +-------+
      | \ /   |
      |  T1   |
      +--+----+
      |     |
      T4    T3
      |     |
      +--+----+
      |  T2   |
      | / \   |
      +-------+
        |
        | Output DC
```

**Waveforms (Fully Controlled Rectifier with RL Load):**

*   **Input Voltage ($v_s$):** Sinusoidal.
*   **Output Voltage ($v_o$):** The output voltage waveform is obtained by chopping both the positive and negative half-cycles of the input AC voltage.
    *   T1 and T3 are fired at $\alpha$. Current flows through T1, RL, and T4.
    *   T2 and T4 are fired at $\pi + \alpha$. Current flows through T2, RL, and T3.
    *   The conduction interval is from $\alpha$ to $\pi$ for the pair T1-T4, and from $\pi + \alpha$ to $2\pi$ for the pair T2-T3.

*   **Output Current ($i_o$):**
    *   **Continuous Conduction:** For inductive loads, the current will be smooth and continuous. It starts at $\alpha$, continues to $\pi$ (and beyond), and then resumes from $\pi + \alpha$.
    *   **Discontinuous Conduction:** If the load is resistive or the inductance is small, the current can drop to zero between commutation intervals.

*   **Input Line Current ($i_a$):** The input current is a trapezoidal or stepped waveform, depending on the conduction interval. It's a chopped version of the input voltage.
    *   When T1 and T4 conduct, current flows from the source, through T1, RL, and T4 back to the source.
    *   When T2 and T3 conduct, current flows from the source, through T2, RL, and T3 back to the source.
    *   The input current is displaced from the input voltage, leading to a power factor less than unity.

**Rectifier and Inverter Modes of Operation:**

*   **Rectifier Mode:** Average DC output voltage is positive, delivering power to the load. This occurs for $0 \le \alpha < \pi/2$.
*   **Inverter Mode:** Average DC output voltage is negative, delivering DC power back to the AC source. This occurs for $\pi/2 < \alpha < \pi$. In this mode, the AC source is effectively converted to AC power at the DC side, acting as an inverter. This mode is naturally achieved because the thyristors are conducting during the negative half-cycle of the output voltage.

**Output Voltage ($V_o$):**

For a single-phase fully controlled rectifier with RL load and continuous conduction:

$V_o = \frac{2V_m}{\pi} \cos \alpha$

Where:
*   $V_m$ is the peak value of the AC input voltage.
*   $\alpha$ is the firing angle ($0 \le \alpha < \pi$).

**Input Line Current, Real Power, Power Factor, and THD (Continuous Conduction, Ripple-Free Current):**

Assuming a ripple-free DC current ($I_o$):

*   **Input Line Current ($i_a$):**
    The input current is a square-like wave, flowing from $\alpha$ to $\pi$ and $\pi+\alpha$ to $2\pi$.
    $i_a(t) = I_o$ for $\alpha < \omega t < \pi$ and $\pi+\alpha < \omega t < 2\pi$.
    $i_a(t) = -I_o$ for $\pi < \omega t < \pi+\alpha$ and $0 < \omega t < \alpha$.
    The RMS value of the input line current is $I_{L\_rms} = I_o$.

*   **Real Power ($P$):**
    $P = V_o \cdot I_o = \frac{2V_m I_o}{\pi} \cos \alpha$

*   **Power Factor (PF):**
    *   **Displacement Factor (DF):** For a full converter with a highly inductive load (ripple-free current), the fundamental component of the input current is in phase with the voltage at the start of conduction. The current waveform is symmetrical.
        $DF = \cos \alpha$
    *   **Distortion Factor (DistF):** For a ripple-free current, the input current is a chopped version of the source. The distortion is significant.
        $DistF = \frac{1}{\sqrt{1 + (\frac{\omega L_s}{R})^2}}$ (simplified assumption for impedance)
        More generally for a square-like wave of conduction:
        The fundamental component of the input current is $I_{L1\_rms} = \frac{2I_o}{\pi} \sqrt{2} \int_{\alpha}^{\pi} \sin(\omega t) d(\omega t) = \frac{4I_o}{\pi \sqrt{2}} \cos \alpha$.
        $DistF = \frac{I_{L1\_rms}}{I_{L\_rms}} = \frac{4I_o / (\pi \sqrt{2}) \cos \alpha}{I_o} = \frac{2\sqrt{2}}{\pi} \cos \alpha$
        Therefore, $PF = DF \times DistF = \cos \alpha \times \frac{2\sqrt{2}}{\pi} \cos \alpha = \frac{2\sqrt{2}}{\pi} \cos^2 \alpha$.
        **Important:** This PF calculation is for the ideal ripple-free current. For actual loads, the PF will be different. The displacement factor is indeed $\cos \alpha$ if we consider the phase shift of the fundamental current component relative to the fundamental voltage.

*   **Total Harmonic Distortion (THD):**
    The input current has significant harmonic content.
    For a full converter with continuous conduction (ripple-free current), the dominant harmonics are odd harmonics. The calculation of THD is involved but generally higher than for uncontrolled rectifiers.

---

## 3. Operation with RLE Load

An RLE load consists of a resistance (R), inductance (L), and an induced EMF (E). This is a more realistic representation of many DC loads, such as a DC motor with a back EMF.

**Key Concepts for RLE Load:**

*   **Induced EMF (E):** Represents a DC voltage source in series with the load. It can be a battery or the back EMF of a motor.
*   **Load Voltage and Current:** The output voltage and current are affected by the presence of E.
*   **Commutation Angle ($\beta$):** For inductive and RLE loads, the current does not necessarily go to zero at the end of the conduction interval. The point at which the current becomes zero (if it does) is determined by the load parameters (R, L, E) and the firing angle.

**Operation of Half-Controlled Rectifier with RLE Load:**

*   The thyristors are fired at $\alpha$.
*   The load voltage and current equations become more complex due to E.
*   The current will remain continuous as long as the net voltage across the RL part is sufficient to drive the current against the induced EMF.
*   **Discontinuous Conduction:** If $\alpha$ is large, or E is high relative to the source voltage, the output current might become discontinuous. The current will start at $\alpha$, and might reach zero before the next commutation. The point where the current becomes zero is denoted by $\beta$.

**Operation of Fully Controlled Rectifier with RLE Load:**

*   Similar to the half-controlled rectifier, the presence of E affects the current and voltage waveforms.
*   The rectifier can operate in rectifier mode ($0 \le \alpha < \pi/2$) or inverter mode ($\pi/2 < \alpha < \pi$).
*   **Inverter Mode with RLE Load:** In the inverter mode, the RLE load can deliver power back to the AC source. The induced EMF (E) plays a role in maintaining the current flow during the interval when the thyristors are supposed to be off.

**Waveforms (RLE Load):**

*   The output voltage will be similar to the RL load, but shifted by the presence of E.
*   The output current waveform will be influenced by E, potentially leading to discontinuous conduction if E is large or $\alpha$ is large.
*   The input current will also be modified by the current waveform.

**Analytical Treatment (RLE Load):**

The differential equation for the circuit with an RLE load is:
$v_s(t) = L \frac{di_o}{dt} + Ri_o + E$ (for the conduction interval)

Solving this equation with appropriate boundary conditions (current at $\alpha$, and potentially at $\beta$) yields the current waveform. The analysis for voltage, current, power, PF, and THD becomes significantly more complex due to the presence of E and the potential for discontinuous conduction (defined by $\beta$).

---

## 4. Effect of Source Inductance ($L_s$)

In real circuits, the AC source has inherent inductance ($L_s$). This source inductance affects the commutation process.

**Key Concepts for Source Inductance:**

*   **Commutation Overlap ($\mu$):** When a thyristor is fired, current cannot instantaneously switch from one path to another due to the source inductance. This causes a period where both thyristors in a leg conduct simultaneously, resulting in a phenomenon called commutation overlap.
*   **Delayed Commutation:** The switching of current is delayed.
*   **Reduced Output Voltage:** The overlap reduces the effective conduction period and thus the average output voltage.
*   **Input Current Waveform:** The input current becomes smoother due to the filtering effect of $L_s$.

**Full Converter in Continuous Conduction with Source Inductance:**

*   **Circuit Modification:** An inductor $L_s$ is added in series with the AC source for each phase.
*   **Commutation Process:** When thyristor T1 (for example) is fired, the current cannot immediately transfer from the previously conducting thyristor to T1. Instead, a transfer current builds up gradually. During this period, both the previous thyristor and T1 conduct, along with the path through the load. This interval is the overlap period, characterized by the overlap angle $\mu$.
*   **Overlap Angle ($\mu$):** The angle during which commutation occurs. It depends on the load current, source voltage, source inductance, and firing angle.
*   **Waveforms:**
    *   **Output Voltage:** The output voltage waveform is distorted, with the positive-going parts being "clipped" or flattened due to the overlap. The average output voltage is reduced.
    *   **Output Current:** The current waveform is still continuous for an inductive load, but the rise and fall times are affected by $L_s$.
    *   **Input Line Current:** The input current becomes smoother and has less high-frequency harmonic content compared to the case with no source inductance. It lags the input voltage more significantly due to the inductive impedance.

**Output Voltage with Source Inductance (Full Converter):**

The average DC output voltage for a full converter with source inductance $L_s$ and continuous conduction is given by:

$V_o = \frac{2V_m}{\pi} \cos \alpha - \frac{4 \omega L_s I_o}{\pi}$

Where:
*   $V_m$ is the peak AC voltage.
*   $\alpha$ is the firing angle.
*   $\omega$ is the angular frequency of the AC supply.
*   $I_o$ is the average DC load current.

**Analysis of Power Factor and THD with Source Inductance:**

*   **Power Factor:** The source inductance increases the lagging reactive power drawn from the source, thus reducing the power factor. The displacement factor is affected by the effective phase shift caused by $L_s$. The distortion factor is generally improved (lower THD) because $L_s$ acts as a filter for the input current harmonics.
*   **THD:** While the source inductance degrades the power factor, it also tends to reduce the THD of the input current by smoothing it out.

---

## 5. Rectifier and Inverter Modes of Operation (Summary)

*   **Rectifier Mode:** The converter draws power from the AC source and delivers it to the DC load. This occurs when the average DC output voltage is positive. For a single-phase full converter, this is when $0 \le \alpha < \pi/2$. For a half-controlled rectifier, this is the primary mode of operation for $0 \le \alpha < \pi$.
*   **Inverter Mode:** The converter draws power from the DC source and delivers it back to the AC source. This occurs when the average DC output voltage is negative. For a single-phase full converter, this is when $\pi/2 < \alpha < \pi$. The DC side must provide a DC voltage to drive the current. For half-controlled rectifiers, inverter operation is possible but requires forced commutation, which is not intrinsic to the circuit.

---

## 6. Waveforms (Continuous & Discontinuous Conduction)

**Continuous Conduction:**
*   Occurs with sufficiently inductive loads.
*   The output current flows continuously throughout the entire cycle.
*   Waveforms are smoother.

**Discontinuous Conduction:**
*   Occurs with light inductive loads or resistive loads, or with large firing angles.
*   The output current drops to zero during parts of the cycle.
*   The point at which the current becomes zero is called the extinction angle or commutation angle ($\beta$).
*   Waveforms are more "chopped," and harmonics are generally higher.

---

## 7. Output Voltage, Input Line Current, Real Power, Power Factor and THD (Continuous Conduction, Ripple-Free Current)

These parameters were discussed in detail for both half-controlled and fully controlled rectifiers under the assumption of ripple-free current (highly inductive load).

**Key Takeaways:**

*   **Output Voltage:** Controlled by the firing angle $\alpha$. Decreases as $\alpha$ increases.
*   **Input Line Current:** Non-sinusoidal, containing harmonics. RMS value is typically higher than for uncontrolled rectifiers (for the same output voltage).
*   **Real Power:** Power delivered to the load.
*   **Power Factor:** Always less than unity for controlled rectifiers due to the harmonic content and phase shift introduced by the thyristors. It degrades as $\alpha$ increases.
*   **THD:** Higher than for uncontrolled rectifiers due to the chopped nature of the current.

---

## 8. Effect of Source Inductance (Full Converter in Continuous Conduction, Ripple-Free Current)

The presence of source inductance $L_s$ leads to:

*   **Commutation Overlap ($\mu$):** Delays current transfer, reducing the effective conduction time and output voltage.
*   **Reduced Output Voltage:** The average output voltage is lowered.
*   **Improved Power Factor:** The overall power factor improves (less reactive power due to inductive impedance), but the displacement factor might decrease due to the phase shift.
*   **Reduced THD:** $L_s$ acts as a filter, smoothing the input current and reducing harmonic content.

---

## Learning Outcomes Addressed:

*   **LO1 (Device Characteristics):** While this topic doesn't directly delve into device characteristics, understanding controlled rectifiers requires knowing that thyristors are controllable switches that need a gate signal and have turn-off requirements. The concepts of commutation relate to device switching.
*   **LO2 (Phase-Controlled Rectifiers):** This entire module is dedicated to the features and operation of single-phase phase-controlled rectifiers (half-controlled and fully controlled).
*   **LO3 (Switch Mode Inverters):** The concept of inverter operation is discussed, where controlled rectifiers can be used to convert DC to AC. While not switch-mode inverters, the principle of bidirectional power flow is related.
*   **LO4 (Efficiency, Reliability, Waveforms, Utility Interface):** The analysis of power factor and THD directly addresses improved waveforms and the utility interface. The efficiency and reliability are implicitly related to the switching losses of the thyristors and the overall performance.
*   **LO5 (Adjustable Speed Drives):** Controlled rectifiers are fundamental building blocks in DC motor drives, where they provide a variable DC voltage to control the motor speed. This topic lays the groundwork for understanding those drive systems.

---

## Practice Questions:

1.  **Question:** A single-phase fully controlled rectifier is connected to a highly inductive load of 10A. The AC supply voltage is 230V (RMS). If the firing angle is $60^\circ$, calculate:
    a) The average DC output voltage.
    b) The RMS input line current.
    c) The real power delivered to the load.
    d) The power factor.
    **Assume no source inductance.**

    **Answer:**
    Given: $V_{rms} = 230V$, $I_o = 10A$, $\alpha = 60^\circ = \pi/3$ radians.
    $V_m = V_{rms} \sqrt{2} = 230 \sqrt{2} \approx 325.27V$.

    a) $V_o = \frac{2V_m}{\pi} \cos \alpha = \frac{2 \times 325.27}{\pi} \cos(60^\circ) = \frac{650.54}{\pi} \times 0.5 \approx 103.55V$.

    b) For ripple-free current, the RMS input line current is equal to the DC load current.
    $I_{L\_rms} = I_o = 10A$.

    c) Real Power, $P = V_o \cdot I_o = 103.55V \times 10A = 1035.5W$.

    d) Power Factor, $PF = \frac{2\sqrt{2}}{\pi} \cos^2 \alpha = \frac{2\sqrt{2}}{\pi} \cos^2(60^\circ) = \frac{2\sqrt{2}}{\pi} (0.5)^2 = \frac{2\sqrt{2}}{\pi} \times 0.25 \approx 0.45$.
    Alternatively, DF = $\cos \alpha = \cos(60^\circ) = 0.5$.
    DistF = $\frac{2\sqrt{2}}{\pi} \cos \alpha = \frac{2\sqrt{2}}{\pi} \times 0.5 \approx 0.45$.
    $PF = DF \times DistF = 0.5 \times 0.45 \approx 0.225$.
    *(Correction on PF calculation: The previous formula $\frac{2\sqrt{2}}{\pi} \cos^2 \alpha$ is for the entire waveform's PF, not just DF * DistF if we consider the actual fundamental current phase. The fundamental current RMS is $I_{L1\_rms} = \frac{2\sqrt{2} I_o}{\pi} \cos \alpha$. The displacement factor is $\cos \alpha$. The distortion factor is $\frac{I_{L1\_rms}}{I_{L\_rms}} = \frac{2\sqrt{2} \cos \alpha}{\pi}$. So $PF = \cos \alpha \times \frac{2\sqrt{2} \cos \alpha}{\pi} = \frac{2\sqrt{2}}{\pi} \cos^2 \alpha$ is indeed correct for the ideal ripple-free current case.)*
    Let's re-calculate PF:
    $PF = \frac{2\sqrt{2}}{\pi} \cos^2(60^\circ) = \frac{2\sqrt{2}}{\pi} (0.5)^2 = \frac{2\sqrt{2}}{4\pi} \approx \frac{2.828}{12.566} \approx 0.225$.

2.  **Question:** What is the primary difference in operation between a half-controlled rectifier and a fully controlled rectifier in terms of device count and control capability?

    **Answer:** A half-controlled rectifier uses two thyristors and two diodes, offering control over the positive half-cycle. A fully controlled rectifier uses four thyristors, allowing control over both positive and negative half-cycles, enabling operation in both rectifier and inverter modes more effectively.

3.  **Question:** How does the presence of source inductance affect the output voltage of a full converter? Explain the concept of commutation overlap.

    **Answer:** The presence of source inductance ($L_s$) causes commutation overlap. This means that during the switching transition from one thyristor pair to another, both pairs conduct simultaneously for a short period (the overlap angle $\mu$). This overlap effectively reduces the conduction time of each thyristor pair, leading to a reduction in the average DC output voltage compared to the case without source inductance.

4.  **Question:** For a single-phase half-controlled rectifier with an RLE load operating in discontinuous conduction mode, what parameter defines the point at which the current stops flowing?

    **Answer:** The point at which the current stops flowing in discontinuous conduction mode is called the extinction angle or commutation angle ($\beta$).

---

## Important Points to Remember:

*   **Firing Angle ($\alpha$):** The key control parameter for all controlled rectifiers.
*   **Half-Controlled vs. Full-Controlled:** Differences in device count, control range, and complexity.
*   **RLE Load:** More realistic; E introduces complexities and can lead to discontinuous conduction.
*   **Source Inductance ($L_s$):** Causes commutation overlap, reducing output voltage and affecting power factor and THD.
*   **Rectifier vs. Inverter Mode:** Determined by the direction of average power flow, which is related to the firing angle $\alpha$.
*   **Power Factor:** A major concern for controlled rectifiers; it degrades with increasing $\alpha$ and is affected by source inductance.
*   **THD:** Indicates harmonic pollution in the input current, also influenced by $\alpha$ and $L_s$.

---

This comprehensive study note covers the essential aspects of single-phase controlled rectifiers as per the provided topic description and learning outcomes. Remember to refer to the specified textbooks for deeper understanding and detailed derivations.
