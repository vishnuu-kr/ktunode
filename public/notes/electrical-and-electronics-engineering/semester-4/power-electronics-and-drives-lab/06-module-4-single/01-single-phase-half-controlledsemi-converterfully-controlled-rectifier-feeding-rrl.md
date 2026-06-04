---
title: "Single-Phase half-controlled(semi-converter)/fully-controlled rectifier feeding R/RL loads"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 4: Single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f3613b"
status: "completed"
scrapedAt: "2026-05-23T16:18:04.250Z"
---
# POWER ELECTRONICS AND DRIVES LAB - Module 4: Single-Phase Rectifiers

## Topic: Single-Phase Half-Controlled (Semi-Converter) / Fully-Controlled Rectifier Feeding R / RL Loads

---

### Module Overview

This module focuses on the fundamental building blocks of power electronic systems: rectifiers. We will explore the operation and characteristics of single-phase rectifiers, specifically half-controlled (semi-converter) and fully-controlled configurations, when feeding resistive (R) and inductive-resistive (RL) loads. Understanding these circuits is crucial for AC-DC conversion and forms the basis for many power electronic applications, including DC motor drives.

---

### Course Outcomes Addressed:

*   **CO2: Understand the features of phase-controlled rectifiers, AC voltage Controllers & Switching Regulators and Analyse the operation (Knowledge Level: K4)** - This topic directly addresses the analysis and understanding of phase-controlled rectifiers.
*   **CO4: Understand the need for improved efficiency, improved reliability, improved load & source waveforms and improved utility interface (Knowledge Level: K3)** - The choice of rectifier configuration (half vs. full controlled) and the impact of the load type influence these aspects.
*   **CO5: Understand the features of adjustable speed drives and Analyse the basic drive schemes for DC motors and Induction Motors (Knowledge Level: K4)** - Rectified DC voltage is often used to power DC motors, making this topic foundational for understanding DC motor drives.

---

### 1. Introduction to Rectifiers

**Definition:** A rectifier is a power electronic circuit that converts alternating current (AC) into direct current (DC).

**Classification based on Control:**
*   **Uncontrolled Rectifiers:** Utilize diodes only. The output voltage cannot be controlled.
*   **Semi-controlled Rectifiers (Half-Controlled):** Utilize a combination of diodes and controllable switches (e.g., SCRs or Thyristors). The output voltage can be controlled by adjusting the firing angle of the controllable switches.
*   **Fully-controlled Rectifiers (Full-Bridge):** Utilize only controllable switches (e.g., SCRs or Thyristors). The output voltage can be controlled more effectively.

**Classification based on AC Input:**
*   **Single-Phase Rectifiers:** Utilize a single-phase AC input.
*   **Three-Phase Rectifiers:** Utilize a three-phase AC input.

**Load Types:**
*   **Resistive Load (R):** The load resistance is purely resistive.
*   **Inductive-Resistive Load (RL):** The load contains both resistance and inductance. The inductance affects the current waveform and requires special consideration, especially in controlling the output voltage.

---

### 2. Single-Phase Half-Controlled (Semi-Converter) Rectifier

**Circuit Configuration:** A single-phase half-controlled rectifier typically uses two diodes and two SCRs arranged in a bridge configuration.

**Key Components:**
*   **Diodes (D1, D2):** Act as uncontrolled switches.
*   **SCRs (Thyristors) (T1, T2):** Act as controllable switches, triggered by gate pulses.

**Operating Principle (Feeding a Resistive Load - R):**

*   **AC Input Voltage:** $v_s(t) = V_m \sin(\omega t)$
*   **SCRs (T1, T2) are triggered at an angle $\alpha$ (firing angle).** This angle determines the point in the AC cycle when the SCRs start conducting.
*   **Half-Cycle 1 ($0 \leq \omega t \leq \pi$):**
    *   When $v_s > 0$, if T1 is triggered at $\alpha$, it conducts. Diode D2 also conducts to complete the circuit.
    *   The load is connected across the source.
    *   Current flows from the source through T1, the load, and D2 back to the source.
    *   The output voltage across the load is $v_o(t) = v_s(t) = V_m \sin(\omega t)$ for $\alpha \leq \omega t \leq \pi$.
    *   From $0$ to $\alpha$, the SCRs are not triggered, so no current flows.
*   **Half-Cycle 2 ($\pi \leq \omega t \leq 2\pi$):**
    *   When $v_s < 0$, the polarity of the source reverses.
    *   If T2 is triggered at $\pi + \alpha$, it conducts. Diode D1 also conducts.
    *   The load is connected across the source, but the polarity is reversed with respect to the source.
    *   Current flows from the source through T2, the load, and D1 back to the source.
    *   The output voltage across the load is $v_o(t) = v_s(t) = V_m \sin(\omega t)$ for $\pi + \alpha \leq \omega t \leq 2\pi$.
    *   From $\pi$ to $\pi + \alpha$, the SCRs are not triggered, so no current flows.

**Output Voltage Waveform (R Load):**
*   The output voltage waveform consists of positive half-cycles from the source, but only after the firing angle $\alpha$.
*   For $\alpha = 0$, it behaves like a half-wave rectifier.
*   For $\alpha = \pi$, the output voltage is zero.
*   The output is always positive, but it is a pulsating DC.

**Average Output Voltage ($V_{dc}$):**
$$ V_{dc} = \frac{1}{2\pi} \int_{0}^{2\pi} v_o(t) d(\omega t) $$
$$ V_{dc} = \frac{1}{2\pi} \left( \int_{\alpha}^{\pi} V_m \sin(\omega t) d(\omega t) + \int_{\pi+\alpha}^{2\pi} V_m \sin(\omega t) d(\omega t) \right) $$
*Note: The second integral from $\pi+\alpha$ to $2\pi$ represents the positive pulses in the rectified output, even though the source voltage is negative. The way the circuit is configured, the voltage across the load is always positive during conduction.*

Let's re-evaluate the voltage across the load for the second half cycle. When the source voltage is negative ($v_s < 0$), for the half-controlled rectifier with T2 and D1 conducting, the load is connected across the negative half cycle. However, the output voltage should be positive.

Let's consider the bridge configuration:
*   T1 and D2 conduct for the positive half-cycle of the source.
*   T2 and D1 conduct for the negative half-cycle of the source.

**Corrected Operating Principle (Half-Controlled Rectifier with T1, T2, D1, D2):**

*   **Positive Half-Cycle of Source ($0 \leq \omega t \leq \pi$):**
    *   When T1 is triggered at $\alpha$, current flows through T1, the load, and D2.
    *   $v_o(t) = V_m \sin(\omega t)$ for $\alpha \leq \omega t \leq \pi$.
*   **Negative Half-Cycle of Source ($\pi \leq \omega t \leq 2\pi$):**
    *   When T2 is triggered at $\pi + \alpha$, current flows through T2, the load, and D1.
    *   The voltage across the load is $v_o(t) = V_m \sin(\omega t)$. Since the source voltage is negative, the current direction through the load is reversed compared to the positive half-cycle if we consider the source's perspective. However, the rectifier ensures that the voltage across the load is always positive (if current flows).
    *   The output voltage across the load is $v_o(t) = -v_s(t) = -V_m \sin(\omega t) = |V_m \sin(\omega t)|$ for $\pi + \alpha \leq \omega t \leq 2\pi$.
    *   So, for both half-cycles, the output voltage is the positive part of the rectified source voltage, delayed by the firing angle.

**Average Output Voltage ($V_{dc}$) for Half-Controlled Rectifier (R Load):**
$$ V_{dc} = \frac{1}{2\pi} \left( \int_{\alpha}^{\pi} V_m \sin(\omega t) d(\omega t) + \int_{\pi+\alpha}^{2\pi} V_m \sin(\omega t) d(\omega t) \right) $$
The integrals for the two half-cycles are identical in terms of the positive area.
$$ \int_{\alpha}^{\pi} V_m \sin(\omega t) d(\omega t) = V_m [-\cos(\omega t)]_{\alpha}^{\pi} = V_m (-\cos(\pi) - (-\cos(\alpha))) = V_m (1 + \cos(\alpha)) $$
The second integral is equivalent to the first by symmetry.
$$ V_{dc} = \frac{1}{2\pi} \times 2 \times \frac{V_m}{\pi} (1 + \cos(\alpha)) = \frac{V_m}{\pi} (1 + \cos(\alpha)) $$
Where $V_m = \sqrt{2} V_{rms}$ (peak AC voltage).

**RMS Output Voltage ($V_{rms,o}$):**
$$ V_{rms,o}^2 = \frac{1}{2\pi} \int_{0}^{2\pi} v_o(t)^2 d(\omega t) $$
$$ V_{rms,o}^2 = \frac{1}{2\pi} \left( \int_{\alpha}^{\pi} (V_m \sin(\omega t))^2 d(\omega t) + \int_{\pi+\alpha}^{2\pi} (V_m \sin(\omega t))^2 d(\omega t) \right) $$
$$ V_{rms,o}^2 = \frac{V_m^2}{2\pi} \left( \int_{\alpha}^{\pi} \frac{1-\cos(2\omega t)}{2} d(\omega t) + \int_{\pi+\alpha}^{2\pi} \frac{1-\cos(2\omega t)}{2} d(\omega t) \right) $$
$$ V_{rms,o}^2 = \frac{V_m^2}{4\pi} \left( [\omega t - \frac{1}{2}\sin(2\omega t)]_{\alpha}^{\pi} + [\omega t - \frac{1}{2}\sin(2\omega t)]_{\pi+\alpha}^{2\pi} \right) $$
$$ V_{rms,o}^2 = \frac{V_m^2}{4\pi} \left( (\pi - \alpha - \frac{1}{2}\sin(2\pi) + \frac{1}{2}\sin(2\alpha)) + (2\pi - (\pi+\alpha) - \frac{1}{2}\sin(4\pi) + \frac{1}{2}\sin(2(\pi+\alpha))) \right) $$
$$ V_{rms,o}^2 = \frac{V_m^2}{4\pi} \left( \pi - \alpha + \frac{1}{2}\sin(2\alpha) + \pi - \alpha + \frac{1}{2}\sin(2\pi+2\alpha) \right) $$
$$ V_{rms,o}^2 = \frac{V_m^2}{4\pi} \left( 2\pi - 2\alpha + \sin(2\alpha) \right) $$
$$ V_{rms,o} = V_m \sqrt{\frac{1}{2} - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{4\pi}} $$

**Behavior with RL Load:**

*   **Inductance:** The inductor resists changes in current. This causes the current to flow even when the voltage across the load tries to drop to zero or become negative.
*   **Continuous Conduction Mode (CCM):** If the firing angle $\alpha$ is small enough and the load has sufficient inductance, the current through the load will not become zero during the cycle. The SCRs will continue to conduct until the next SCR pair is triggered.
*   **Discontinuous Conduction Mode (DCM):** If the firing angle $\alpha$ is large, or the inductance is small, the current may drop to zero before the next SCR pair is triggered. This leads to gaps in the output current and voltage waveforms.

**Effect of Inductance on Waveforms (RL Load):**

*   **Current Waveform:** The current waveform will be smoother than the voltage waveform due to the inductor. It will lag the voltage.
*   **Commutation:** In a half-controlled rectifier feeding an RL load, the current through an SCR or diode does not instantaneously drop to zero when the voltage across it becomes reverse-biased or when the next device is triggered. The inductor ensures continuity of current.
*   **Extinction Angle ($\beta$):** The angle at which the current in a conducting device becomes zero is called the extinction angle $\beta$. For continuous conduction, $\beta > \pi$ for the SCRs.
*   **Output Voltage:** The output voltage waveform will still be positive, but the shape will be affected by the lagging current. During the period when the source voltage is not sufficient to maintain conduction (due to the inductor's back EMF), the voltage across the load will be dictated by the inductor.
*   **Average Output Voltage:** The average output voltage will be less than that for a purely resistive load for the same firing angle, especially in discontinuous conduction mode.

**Mathematical Analysis for RL Load (Continuous Conduction):**

For $\alpha \leq \omega t \leq \beta$:
The circuit equation is $V_m \sin(\omega t) = i_o R + L \frac{di_o}{dt}$.
The solution for $i_o(t)$ is of the form $i_o(t) = A e^{-Rt/L} + \frac{V_m}{Z} \sin(\omega t - \phi)$, where $Z = \sqrt{R^2 + (\omega L)^2}$ and $\phi = \tan^{-1}(\frac{\omega L}{R})$.
Using boundary conditions:
*   At $\omega t = \alpha$, $i_o(\alpha) = 0$ (assuming current starts from zero at firing).
*   At $\omega t = \beta$, $i_o(\beta) = 0$.

The current waveform is more complex to derive and often involves iterative solutions or approximations.

**Key Takeaway for RL Load:** Inductance "smooths" the current and can lead to continuous conduction, affecting the output voltage and current waveforms and the average DC output voltage. The extinction angle $\beta$ becomes important.

---

### 3. Single-Phase Fully-Controlled Rectifier

**Circuit Configuration:** A single-phase fully-controlled rectifier uses four SCRs (Thyristors) arranged in a bridge configuration.

**Key Components:**
*   **SCRs (Thyristors) (T1, T2, T3, T4):** All are controllable switches.

**Operating Principle (Feeding a Resistive Load - R):**

*   **AC Input Voltage:** $v_s(t) = V_m \sin(\omega t)$
*   **SCRs T1 and T2 are triggered at angle $\alpha$.** These conduct during the positive half-cycle of the source.
*   **SCRs T3 and T4 are triggered at angle $\pi + \alpha$.** These conduct during the negative half-cycle of the source.

*   **Positive Half-Cycle of Source ($0 \leq \omega t \leq \pi$):**
    *   When T1 and T2 are triggered at $\alpha$, current flows from the source through T1, the load, and T2 back to the source.
    *   $v_o(t) = V_m \sin(\omega t)$ for $\alpha \leq \omega t \leq \pi$.
*   **Negative Half-Cycle of Source ($\pi \leq \omega t \leq 2\pi$):**
    *   When T3 and T4 are triggered at $\pi + \alpha$, current flows from the source through T3, the load, and T4 back to the source.
    *   $v_o(t) = V_m \sin(\omega t)$ for $\pi + \alpha \leq \omega t \leq 2\pi$.

**Output Voltage Waveform (R Load):**
*   The output voltage waveform consists of positive half-cycles from the source, but only after the firing angle $\alpha$.
*   The output is always positive and pulsating DC.
*   By controlling $\alpha$ from $0$ to $\pi$, the average DC output voltage can be varied from its maximum value (for $\alpha=0$) down to zero (for $\alpha=\pi$).

**Average Output Voltage ($V_{dc}$):**
$$ V_{dc} = \frac{1}{2\pi} \int_{0}^{2\pi} v_o(t) d(\omega t) $$
$$ V_{dc} = \frac{1}{2\pi} \left( \int_{\alpha}^{\pi} V_m \sin(\omega t) d(\omega t) + \int_{\pi+\alpha}^{2\pi} V_m \sin(\omega t) d(\omega t) \right) $$
The derivation is the same as for the half-controlled rectifier feeding an R load.
$$ V_{dc} = \frac{V_m}{\pi} (1 + \cos(\alpha)) $$
Where $V_m = \sqrt{2} V_{rms}$.

**RMS Output Voltage ($V_{rms,o}$):**
The derivation is also the same as for the half-controlled rectifier feeding an R load.
$$ V_{rms,o} = V_m \sqrt{\frac{1}{2} - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{4\pi}} $$

**Behavior with RL Load:**

*   **Continuous Conduction:** Similar to the half-controlled rectifier, inductance can lead to continuous current flow.
*   **Extinction Angle ($\beta$):** The current will not drop to zero until the extinction angle $\beta$. The SCRs must be kept conducting by triggering pulses until the current naturally falls to zero or until the next pair is triggered.
*   **Controlled Output:** The fully-controlled rectifier offers better control over the output DC voltage compared to the half-controlled rectifier, especially for RL loads. It can achieve a wider range of voltage control.
*   **Reversibility:** With appropriate control (e.g., inverse-parallel connection of thyristors), fully-controlled bridges can also be used as inverters (feeding power back to the AC source) or for regenerative braking.

**Comparison: Half-Controlled vs. Fully-Controlled Rectifier (R Load):**

| Feature            | Single-Phase Half-Controlled Rectifier (2 SCRs, 2 Diodes) | Single-Phase Fully-Controlled Rectifier (4 SCRs) |
| :----------------- | :-------------------------------------------------------- | :----------------------------------------------- |
| **Components**     | 2 Diodes, 2 SCRs                                          | 4 SCRs                                           |
| **Output Voltage** | Pulsating DC, positive only                               | Pulsating DC, positive only                      |
| **Control Range**  | $V_{dc}$ varies from $V_m(2/\pi)$ to $0$                  | $V_{dc}$ varies from $V_m(2/\pi)$ to $0$         |
| **Complexity**     | Simpler control, fewer SCRs                               | More complex control, 4 SCRs                     |
| **Commutation**    | Natural commutation for diodes, forced for SCRs           | Forced commutation for all SCRs                  |
| **Cost**           | Generally lower                                           | Generally higher                                 |
| **Power Factor**   | Lower than fully-controlled for the same output voltage   | Can achieve higher power factor                  |

---

### 4. Performance Parameters and Design Considerations

**Important Parameters:**
*   **Average DC Output Voltage ($V_{dc}$):** Determines the average power delivered to the DC load.
*   **RMS AC Input Current ($I_{rms}$):** Affects heating in the transformer and source.
*   **RMS DC Output Current ($I_{rms,o}$):** Affects heating in the load.
*   **Ripple Factor ($r$):** Measures the AC components in the output DC voltage/current. A lower ripple factor indicates a smoother DC output.
    $$ r = \frac{V_{rms,o}}{V_{dc}} $$
*   **Form Factor ($F_f$):** Ratio of RMS value to average value of the output.
    $$ F_f = \frac{V_{rms,o}}{V_{dc}} = r $$
*   **Power Factor (PF):** The ratio of real power to apparent power. It depends on the firing angle and the load characteristics. For phase-controlled rectifiers, the power factor is affected by the phase shift between voltage and current due to the firing angle and the harmonic content.
*   **Displacement Factor (DF):** The cosine of the phase angle between the fundamental component of the input voltage and the fundamental component of the input current.
*   **Harmonic Distortion (HD) / Total Harmonic Distortion (THD):** Measures the distortion of the input current waveform.

**Design Considerations:**

*   **Selection of Rectifier Type:** Half-controlled vs. fully-controlled depends on the required control range, cost, and complexity.
*   **SCR/Diode Selection:**
    *   **Voltage Rating (PIV):** Must be able to withstand the peak inverse voltage during the off-state.
    *   **Current Rating (RMS, Average, Peak):** Must be able to handle the expected current.
    *   **Surge Current Rating:** Ability to withstand short-duration overcurrents.
    *   **Gate Triggering Requirements:** For SCRs, ensuring proper gate drive circuitry.
*   **Heat Sink Design:** To dissipate the heat generated by the power devices due to conduction and switching losses. **(CO1)**
*   **Gate Driver Circuits:** Essential for providing adequate gate current and voltage to trigger SCRs reliably, especially in high-power applications. **(CO1)**
*   **Snubber Circuits:** To protect SCRs from transient overvoltages and overcurrents during switching. Typically an RC series circuit.
*   **Transformer Design (if used):** For voltage matching and isolation.
*   **Filter Design (optional):** Capacitors or inductors can be added at the output to reduce ripple.

---

### 5. Impact on Load and Source Waveforms (CO4)

*   **Load Waveforms:**
    *   **R Load:** The output voltage is a pulsed DC. The current follows the voltage if it's purely resistive.
    *   **RL Load:** The inductance causes the current to lag the voltage and smooths out the pulses. In continuous conduction, the current is more sinusoidal. In discontinuous conduction, the current has gaps.
*   **Source Waveforms:**
    *   The input current drawn by phase-controlled rectifiers is non-sinusoidal and typically contains significant harmonics. This leads to:
        *   **Reduced Power Factor:** The phase shift and harmonic content degrade the power factor.
        *   **Distortion of Source Voltage:** Harmonics in the input current can cause voltage drops across the source impedance, distorting the source voltage waveform.
        *   **Electromagnetic Interference (EMI):** High-frequency harmonics can cause EMI.
    *   Fully-controlled rectifiers generally draw a current waveform that is closer to sinusoidal and has a better power factor than half-controlled rectifiers for the same firing angle.

---

### 6. Application in DC Motor Drives (CO5)

Rectified DC voltage is commonly used to power DC motors.

*   **DC Motor Operation:** A DC motor's speed is proportional to the applied DC armature voltage.
*   **Speed Control:** By varying the firing angle $\alpha$ of the rectifier, the average DC voltage supplied to the DC motor armature can be controlled. This allows for smooth and efficient speed regulation of the DC motor.
    *   **Lower $\alpha$:** Higher average DC voltage, higher motor speed.
    *   **Higher $\alpha$:** Lower average DC voltage, lower motor speed.
*   **Torque Control:** The torque of a DC motor is proportional to the product of armature current and field flux. By controlling the armature voltage (and hence current), the torque can also be controlled.
*   **Regenerative Braking:** Fully-controlled rectifiers, when configured appropriately, can operate as inverters, allowing the DC motor to feed power back to the AC source during braking (regenerative braking), improving energy efficiency.

---

### 7. Practice Questions

1.  **Question:** A single-phase half-controlled rectifier uses two diodes and two SCRs. If it feeds a purely resistive load and the firing angle $\alpha = 60^\circ$, what is the average DC output voltage if the RMS input voltage is 230V?
    **Answer:**
    $V_m = \sqrt{2} \times 230 \text{ V} \approx 325.27 \text{ V}$
    $\alpha = 60^\circ = \pi/3 \text{ radians}$
    $V_{dc} = \frac{V_m}{\pi} (1 + \cos(\alpha)) = \frac{325.27}{\pi} (1 + \cos(60^\circ))$
    $V_{dc} = \frac{325.27}{\pi} (1 + 0.5) = \frac{325.27}{\pi} (1.5) \approx 155.38 \text{ V}$

2.  **Question:** How does the presence of inductance in the load affect the operation of a single-phase fully-controlled rectifier? Explain the concept of continuous and discontinuous conduction modes.
    **Answer:**
    Inductance in the load causes the current to lag behind the voltage and resist changes in current. This leads to two primary conduction modes:
    *   **Continuous Conduction Mode (CCM):** If the inductance is large enough and the firing angle is not too high, the current through the rectifier devices does not fall to zero during the entire cycle. The current is continuous, and the output voltage waveform is shaped by the inductive load.
    *   **Discontinuous Conduction Mode (DCM):** If the inductance is small or the firing angle is large, the current through the rectifier devices may drop to zero before the next pair of devices is triggered. This results in gaps in the current and voltage waveforms, leading to a lower average DC output voltage compared to CCM for the same firing angle.

3.  **Question:** What is the primary advantage of using a fully-controlled rectifier over a half-controlled rectifier when feeding a DC motor for speed control?
    **Answer:**
    The primary advantage is better control over the DC output voltage. While both can control the average DC voltage, fully-controlled rectifiers offer a wider and smoother range of voltage control, leading to more precise speed control of the DC motor. Furthermore, they can be configured to operate as inverters for regenerative braking, which is not possible with half-controlled rectifiers.

4.  **Question:** For a single-phase fully-controlled rectifier feeding an RL load, what happens to the average DC output voltage as the firing angle $\alpha$ increases from $0^\circ$ to $90^\circ$?
    **Answer:**
    As the firing angle $\alpha$ increases from $0^\circ$ to $90^\circ$, the term $(1 + \cos(\alpha))$ decreases because $\cos(\alpha)$ decreases. Therefore, the average DC output voltage $V_{dc} = \frac{V_m}{\pi} (1 + \cos(\alpha))$ decreases.

5.  **Question:** List two important parameters to consider when selecting SCRs for a single-phase rectifier circuit.
    **Answer:**
    1.  **Peak Inverse Voltage (PIV) Rating:** To withstand the reverse voltage during the off-state.
    2.  **Average Forward Current Rating:** To handle the average DC current flowing through the device.
    (Other valid answers include RMS current rating, surge current rating, gate trigger current/voltage).

---

### 8. Important Points to Remember

*   **Firing Angle ($\alpha$):** The key parameter for controlling the output voltage of SCR-based rectifiers.
*   **Half-Controlled vs. Fully-Controlled:** Choice depends on control requirements, cost, and complexity. Fully-controlled offers better control and potential for inversion.
*   **RL Load:** Inductance causes current to lag voltage, smooths current, and can lead to continuous conduction, affecting output voltage and requiring consideration of the extinction angle $\beta$.
*   **Input Current Harmonics:** Rectifiers draw non-sinusoidal currents, leading to lower power factor and potential EMI issues.
*   **DC Motor Drives:** Rectifiers provide a variable DC voltage for speed control of DC motors.
*   **CO1 Link:** Proper selection of SCRs, gate drivers, and heat sinks are critical for reliable operation as per CO1.
*   **CO2 Link:** This topic directly covers the analysis of phase-controlled rectifiers as per CO2.
*   **CO5 Link:** The application of these rectifiers in controlling DC motor speed is a direct link to CO5.

---
