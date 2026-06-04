---
title: "Controlled Rectifiers (3-Phase) - Fully controlled & Half-controlled bridge converter with RLE load (continuous conduction, ripple free current)– Waveforms- Output voltage equation"
subject: "POWER ELECTRONICS AND DRIVES"
module: "Module 2: Controlled Rectifiers (Single Phase) – Fully controlled and half"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e24"
status: "completed"
scrapedAt: "2026-05-23T16:17:49.840Z"
---
# POWER ELECTRONICS AND DRIVES

## Module 2: Controlled Rectifiers (Single Phase) – Fully Controlled and Half-Controlled

### Topic: Controlled Rectifiers (3-Phase) - Fully Controlled & Half-Controlled Bridge Converter with RLE Load (Continuous Conduction, Ripple Free Current) – Waveforms - Output Voltage Equation

This module delves into the operation of 3-phase controlled rectifiers, which are crucial for converting AC power to controllable DC power in industrial applications. We will focus on bridge converters, both fully controlled and half-controlled, specifically when supplying an RLE load under continuous conduction with ripple-free current.

---

### Learning Outcomes Covered:

*   **LO (Implicitly Covered within 3-Phase Rectifiers):** Understand the fundamental principles of controlled rectification in AC-DC conversion.
*   **LO (Implicitly Covered within 3-Phase Rectifiers):** Analyze the operation of controlled rectifiers with different firing angles and load conditions.
*   **LO (Implicitly Covered within 3-Phase Rectifiers):** Derive output voltage equations for controlled rectifiers.
*   **LO (Implicitly Covered within 3-Phase Rectifiers):** Understand the role of gate control signals in shaping the output voltage.
*   **LO (Implicitly Covered within 3-Phase Rectifiers):** Analyze the impact of load parameters (RLE) on rectifier performance.

---

### Course Outcomes Alignment:

*   **CO1: Understand the operation of modern power semiconductor devices, its characteristics and select suitable gate driver circuits & heatsinks (Knowledge Level: K3)**
    *   While this topic focuses on converter operation, understanding the switching nature of SCRs/Thyristors (used in half-controlled) and Thyristors/IGBTs/MOSFETs (used in fully controlled) is fundamental. Their characteristics dictate triggering and switching.
*   **CO2: Understand the features of phase-controlled rectifiers, AC voltage Controllers &Switching Regulators and analyse the operation (Knowledge Level: K3)**
    *   This entire topic directly addresses the features and operational analysis of 3-phase phase-controlled rectifiers.
*   **CO3: Understand the features of different types of switch mode DC-AC Inverters and analyse the operation (Knowledge Level: K3)**
    *   While primarily focused on AC-DC conversion, the understanding of controlled switching in rectifiers forms a basis for understanding controlled switching in inverters.
*   **CO4: Understand the need for improved efficiency, improved load &source waveforms and improved utility interface (Knowledge Level: K2)**
    *   Controlled rectifiers, especially with advanced firing strategies, aim to improve these aspects compared to uncontrolled rectifiers. The ripple-free current condition discussed here also contributes to better source and load waveforms.
*   **CO5: Understand the features of adjustable speed drives and analyse the Basic drive schemes for DC motors and Induction Motors (Knowledge Level: K3)**
    *   3-phase controlled rectifiers are a fundamental building block for many DC motor drives (as they provide a controllable DC voltage) and can be used in the front-end of AC drives.

---

### 1. Introduction to 3-Phase Controlled Rectifiers

Controlled rectifiers provide a means to convert 3-phase AC voltage into a controllable DC voltage. They are widely used in high-power industrial applications like DC motor drives, battery charging, electroplating, and high-voltage DC (HVDC) transmission systems. The control over the output voltage is achieved by controlling the firing instances of the switching devices (Thyristors, SCRs, IGBTs, MOSFETs).

**Key Concept:** **Phase Control**

Phase control refers to the technique of delaying the turn-on of the switching devices with respect to the AC voltage waveform. This delay, represented by the firing angle ($\alpha$), determines the average output DC voltage.

---

### 2. Types of 3-Phase Controlled Rectifiers

We will focus on bridge configurations, which are more common in 3-phase systems.

#### 2.1. 3-Phase Fully Controlled Bridge Converter

*   **Configuration:** Consists of six switching devices (Thyristors or IGBTs/MOSFETs), arranged in a bridge configuration. For each phase, a pair of devices is connected in series, with one device connected to the positive DC bus and the other to the negative DC bus.
*   **Operation:** Devices are typically fired in a sequence to ensure continuous power transfer. For example, in a bridge converter, devices are usually fired in groups of three (e.g., one from the upper half-bridge and two from the lower half-bridge, or vice-versa) to maintain commutation.
*   **Advantages:**
    *   Full control over output voltage (0 to maximum).
    *   Can operate in rectification and inversion (if appropriately controlled).
    *   Generally offers better power factor and lower harmonic distortion compared to half-controlled rectifiers for the same output voltage.
*   **Disadvantages:**
    *   Requires a DC output current to flow for commutation to occur naturally, or forced commutation techniques might be needed for certain load conditions.
    *   More complex gating circuits.

#### 2.2. 3-Phase Half-Controlled Bridge Converter

*   **Configuration:** Consists of six switching devices, where three are controlled (Thyristors/SCRs) and three are uncontrolled (Diodes). Typically, in a bridge converter, diodes are used in one half of the bridge and controlled devices in the other.
*   **Operation:** The diodes conduct naturally when forward biased, while the Thyristors require a firing pulse to conduct. The firing angle ($\alpha$) of the Thyristors controls the output voltage.
*   **Advantages:**
    *   Simpler gating circuits compared to fully controlled rectifiers.
    *   Commutation is often natural due to the presence of diodes.
*   **Disadvantages:**
    *   The output voltage cannot be controlled from zero; there's a minimum positive output voltage.
    *   Lower power factor and higher harmonic distortion compared to fully controlled rectifiers.
    *   Cannot operate in inversion mode.

---

### 3. 3-Phase Controlled Bridge Converters with RLE Load (Continuous Conduction, Ripple Free Current)

This section focuses on a specific and important operating condition.

#### 3.1. Load Description: RLE Load

*   **R (Resistance):** Represents resistive losses, such as winding resistance of motors or heating elements.
*   **L (Inductance):** Represents the inductive properties of the load, such as motor windings. Inductance helps to smooth out current, reducing ripple.
*   **E (EMF/Back EMF):** Represents the generated voltage by a DC motor, which acts as a voltage source in series with the R and L. This EMF is crucial for understanding the behavior of the rectifier with a motor load.

**Continuous Conduction (CC):** This means that the DC output current ($I_d$) never drops to zero during the entire switching cycle. This is generally achieved when the load has a significant inductive component and/or a back EMF (E) is present.

**Ripple-Free Current:** This is an idealized condition where the AC components of the DC output current are zero, meaning the current is a pure DC value. In practice, some ripple is always present, but with a sufficiently large inductance and a stable E, the current can be nearly ripple-free. This condition simplifies analysis.

---

### 4. 3-Phase Fully Controlled Bridge Converter with RLE Load

Let's consider the operation of a 3-phase fully controlled bridge converter supplying an RLE load under continuous conduction and ideally ripple-free current.

**Circuit Configuration:**

*   Three diodes and three Thyristors, or six Thyristors (or IGBTs/MOSFETs) arranged in a bridge.
*   The AC source is a 3-phase, star-connected or delta-connected system. For simplicity, we'll assume a star-connected source with line-to-neutral voltages $v_a, v_b, v_c$.

**Assumptions for Idealized Analysis (Ripple-Free Current):**

1.  The load current $I_d$ is constant and ripple-free.
2.  The inductance L is large enough to ensure continuous and ripple-free current.
3.  Commutation is instantaneous and lossless.
4.  The firing angle $\alpha$ is the delay from the natural commutation point (when a diode would normally conduct).
5.  The back EMF $E$ is constant.

**Operation with Ripple-Free Current:**

Under the ripple-free current assumption, the converter essentially connects the load to the appropriate phase voltages for a duration determined by the firing angle $\alpha$. The load is effectively connected to the instantaneous line-to-line voltage.

Let's assume a 6-pulse converter (standard bridge). The devices are typically fired in a sequence like T1, T3, T5, T2, T4, T6, with a 60° delay between successive firings.

Consider the firing of Thyristor T1. It is fired at an angle $\alpha$ after the natural commutation point. Once T1 is fired, it conducts until the voltage across it reverses or until another Thyristor in the same leg takes over.

**Waveforms (Conceptual for ripple-free current):**

*   **Line-to-line voltages:** $v_{ab}, v_{bc}, v_{ca}$, etc.
*   **Output DC voltage:** The output voltage $v_d$ will be composed of segments of the line-to-line voltages.
*   **Load current:** A constant DC value $I_d$.
*   **Thyristor currents:** Each Thyristor conducts a segment of the load current for a specific duration (typically 120° or 180° depending on the converter and firing strategy).
*   **Thyristor voltages:** Each Thyristor is forward biased and conducts current, then becomes reverse biased and blocks voltage.

**Derivation of Output Voltage Equation:**

The average DC output voltage $V_d$ is the integral of the instantaneous output voltage $v_d(t)$ over a cycle, divided by the cycle period. For a 6-pulse converter, the cycle is related to the period of the 3-phase AC supply.

Let's consider the output voltage waveform. It will be formed by portions of the line-to-line voltages. For a fully controlled bridge, the output voltage is generally the difference between the positive bus voltage and the negative bus voltage.

The analysis often involves considering the conduction intervals of the thyristors. For a 6-pulse fully controlled converter, the devices conduct in a sequence such that the output voltage is the difference between the highest and second highest instantaneous line-to-line voltages.

Consider the positive half-cycle of $v_{ab}$. If we fire T1 and T6, the output voltage is $v_{ab}$. However, commutation needs to be considered.

A common way to derive the output voltage equation for a fully controlled 3-phase bridge with ripple-free current is by considering the average of the positive segments of the line-to-line voltages that are applied to the output.

For a 3-phase fully controlled bridge, the average DC output voltage $V_d$ is given by:

$V_d = \frac{3}{\pi} V_{mL} \cos(\alpha)$

where:
*   $V_{mL}$ is the peak line-to-line voltage (e.g., $\sqrt{2} V_{L_{rms}}$ or $\sqrt{3} V_{p_{rms}}$ where $V_{p_{rms}}$ is phase RMS voltage). If $V_L$ is the RMS line voltage, then $V_{mL} = \sqrt{2} V_L$.
*   $\alpha$ is the firing angle.

**Important Note:** This equation is valid for continuous conduction. The maximum DC voltage is obtained at $\alpha = 0$, $V_{d0} = \frac{3}{\pi} V_{mL}$.

**Effect of Back EMF (E):**

When an RLE load is used, the output voltage equation needs to account for the back EMF. For continuous conduction, the rectifier must supply enough voltage to overcome the back EMF and drive the current through the resistance and inductance.

The average output voltage is given by:
$V_d = E + I_d R$

Equating the two expressions for $V_d$:
$\frac{3}{\pi} V_{mL} \cos(\alpha) = E + I_d R$

This equation can be used to determine the required firing angle $\alpha$ for a given DC current $I_d$, back EMF $E$, resistance $R$, and AC source voltage.

---

### 5. 3-Phase Half-Controlled Bridge Converter with RLE Load

Let's consider the operation of a 3-phase half-controlled bridge converter supplying an RLE load under continuous conduction and ideally ripple-free current.

**Circuit Configuration:**

*   Three diodes and three Thyristors (SCRs).
*   Typically, diodes are in the upper half-bridge and Thyristors in the lower half-bridge, or vice-versa. For example, D1, D3, D5 are diodes, and T2, T4, T6 are Thyristors.

**Assumptions for Idealized Analysis (Ripple-Free Current):**

Same as for the fully controlled converter: constant ripple-free current $I_d$, large inductance, instantaneous commutation, and constant back EMF $E$.

**Operation with Ripple-Free Current:**

In a half-controlled bridge, the output voltage is formed by segments of line-to-line voltages. Diodes conduct naturally when forward biased, while Thyristors require firing pulses.

Consider a bridge where diodes are in the upper half and Thyristors in the lower half. The diodes will conduct when the line-to-line voltage is positive and the associated Thyristors are not conducting. The Thyristors will conduct when they are forward biased and receive a firing pulse.

The firing angle $\alpha$ is the delay from the point where the Thyristor would naturally start conducting (if it were a diode).

**Waveforms (Conceptual for ripple-free current):**

*   **Line-to-line voltages:** $v_{ab}, v_{bc}, v_{ca}$, etc.
*   **Output DC voltage:** The output voltage will be composed of segments of the line-to-line voltages. However, due to the presence of diodes, the output voltage is always positive. When a diode is conducting, the output voltage follows the positive phase voltage relative to the common neutral. When a Thyristor is conducting, it is fired at a delay $\alpha$.
*   **Load current:** A constant DC value $I_d$.
*   **Thyristor currents:** Each Thyristor conducts a segment of the load current.
*   **Diode currents:** Each diode conducts a segment of the load current.

**Derivation of Output Voltage Equation:**

The average DC output voltage $V_d$ for a 3-phase half-controlled bridge converter with continuous conduction is given by:

$V_d = \frac{3}{\pi} V_{mL} (1 + \cos(\alpha))$

where:
*   $V_{mL}$ is the peak line-to-line voltage.
*   $\alpha$ is the firing angle of the Thyristors.

**Important Note:**
*   The range of $V_d$ for a half-controlled rectifier is from $V_{d0} = \frac{3}{\pi} V_{mL} (1 + \cos(0^\circ)) = \frac{6}{\pi} V_{mL}$ (at $\alpha = 0^\circ$) to $V_d = \frac{3}{\pi} V_{mL} (1 + \cos(180^\circ)) = 0$ (at $\alpha = 180^\circ$).
*   However, practically, continuous conduction with ripple-free current is typically achieved for $\alpha$ up to $180^\circ$, but the output voltage is significantly reduced. The equation $V_d = \frac{3}{\pi} V_{mL} (1 + \cos(\alpha))$ is the standard formula for average output voltage in continuous conduction.

**Effect of Back EMF (E):**

Similar to the fully controlled converter, the output voltage must also supply the back EMF and the voltage drop across the resistance. For continuous conduction:

$V_d = E + I_d R$

Equating the two expressions for $V_d$:
$\frac{3}{\pi} V_{mL} (1 + \cos(\alpha)) = E + I_d R$

This equation allows us to determine the firing angle $\alpha$ for a given $I_d$, $E$, $R$, and AC source voltage.

---

### 6. Waveforms and Their Significance

Understanding the waveforms is crucial for analyzing the performance of these converters.

#### 6.1. Fully Controlled Bridge Converter Waveforms (Conceptual for Ripple-Free Current)

*   **Line-to-Line Voltages ($v_{ab}, v_{bc}, v_{ca}$):** Three sinusoidal voltages, phase shifted by 120°.
*   **Output DC Voltage ($v_d$):** Will be a series of positive pulses, derived from the line-to-line voltages. The shape of these pulses depends on the firing angle $\alpha$. As $\alpha$ increases, the pulses are clipped, reducing the average DC voltage.
*   **Load Current ($i_d$):** Assumed to be a constant DC value $I_d$.
*   **Thyristor Voltages:** Each Thyristor will block voltage when it's not conducting and will have a near-zero voltage drop when conducting.
*   **Thyristor Current:** Each Thyristor conducts the DC current $I_d$ for a period of $120^\circ$ (in a 6-pulse converter).

#### 6.2. Half-Controlled Bridge Converter Waveforms (Conceptual for Ripple-Free Current)

*   **Line-to-Line Voltages ($v_{ab}, v_{bc}, v_{ca}$):** Same as above.
*   **Output DC Voltage ($v_d$):** The output voltage will be formed by segments of positive line-to-line voltages, controlled by $\alpha$. Since diodes are present, the output voltage never drops below a certain positive value even at $\alpha = 180^\circ$ (though it approaches zero). The controlled Thyristors introduce delays in the conduction of certain voltage segments.
*   **Load Current ($i_d$):** Assumed to be a constant DC value $I_d$.
*   **Thyristor Voltages:** Similar to the fully controlled case.
*   **Diode Voltages:** Near-zero when conducting, reverse biased and blocking voltage when not conducting.
*   **Thyristor Current:** Each Thyristor conducts the DC current $I_d$ for a period.
*   **Diode Current:** Each diode conducts the DC current $I_d$ for a period.

**Significance of Waveforms:**

*   **Output Voltage:** The shape of the output voltage directly determines the average DC voltage and the ripple content.
*   **Harmonic Content:** The switching action introduces harmonics in both the output voltage and the input current. Controlled rectifiers generally have lower harmonic distortion than uncontrolled ones.
*   **Input Current:** The input current on the AC side will be a pulsed waveform, containing harmonics. The firing angle affects the harmonic spectrum and power factor.
*   **Commutation:** The transition of current from one device to another (commutation) is critical. Under continuous conduction, this is usually natural (line commutation) due to the presence of inductance and/or back EMF.

---

### 7. Important Points to Remember

*   **Firing Angle ($\alpha$):** This is the primary control parameter for both fully controlled and half-controlled rectifiers. It dictates the output DC voltage.
*   **Continuous Conduction (CC):** Essential for the derived output voltage equations to hold. It implies that the load current never drops to zero.
*   **Ripple-Free Current:** An idealized assumption that simplifies analysis. In reality, there will always be some current ripple, which is reduced by increasing inductance and/or back EMF.
*   **RLE Load:** The presence of inductance (L) and back EMF (E) is critical for achieving continuous conduction and ripple-free current.
*   **Output Voltage Equations:**
    *   Fully Controlled: $V_d = \frac{3}{\pi} V_{mL} \cos(\alpha)$
    *   Half-Controlled: $V_d = \frac{3}{\pi} V_{mL} (1 + \cos(\alpha))$
*   **Relationship with Back EMF:** In RLE loads, the average output voltage must satisfy $V_d = E + I_d R$.
*   **Commutation:** In AC-DC converters, commutation (transfer of current from one device to another) is often "line commutation" or "natural commutation" when the AC voltage source is present. The presence of inductance helps in this process.
*   **Power Factor:** Fully controlled rectifiers generally have a better input power factor than half-controlled rectifiers.
*   **Harmonics:** Both output voltage and input current will contain harmonics. The firing angle and load conditions influence the harmonic spectrum.

---

### 8. Practice Questions and Exercises

**Question 1:** A 3-phase fully controlled bridge converter is connected to a 400V (RMS line) AC supply. The load is purely resistive, and the firing angle is $\alpha = 30^\circ$.
(a) Calculate the peak line-to-line voltage $V_{mL}$.
(b) Calculate the average DC output voltage $V_d$.
(c) Is continuous conduction likely with a purely resistive load? Explain.

**Answer 1:**
(a) $V_L = 400V$ (RMS line voltage).
$V_{mL} = \sqrt{2} V_L = \sqrt{2} \times 400 = 565.69 V$.

(b) For a fully controlled bridge, $V_d = \frac{3}{\pi} V_{mL} \cos(\alpha)$.
$V_d = \frac{3}{\pi} \times 565.69 \times \cos(30^\circ) = \frac{3}{\pi} \times 565.69 \times 0.866 = 464.91 V$.

(c) With a purely resistive load, the current is in phase with the voltage. Commutation from one device to the next relies on the voltage across the incoming device becoming positive and the outgoing device being forward biased. If the load current becomes zero between commutations, the devices will turn off. Therefore, continuous conduction is **not** guaranteed with a purely resistive load, especially at higher firing angles where the output voltage segments are reduced. The current will likely be discontinuous.

**Question 2:** A 3-phase half-controlled bridge converter is supplying a DC motor with a constant back EMF $E = 100V$. The motor winding has a resistance $R = 2\Omega$. The converter is connected to a 400V (RMS line) AC supply and operates with a constant DC current $I_d = 50A$. The firing angle is set to $\alpha = 60^\circ$. Assume ripple-free current.
(a) Calculate the peak line-to-line voltage $V_{mL}$.
(b) Calculate the average DC output voltage that the rectifier should provide to the motor.
(c) Calculate the average DC output voltage from the rectifier based on the AC supply and firing angle.
(d) Is the firing angle of $60^\circ$ consistent with the given operating conditions?

**Answer 2:**
(a) $V_L = 400V$ (RMS line voltage).
$V_{mL} = \sqrt{2} V_L = \sqrt{2} \times 400 = 565.69 V$.

(b) The rectifier must supply enough voltage to drive the current through the motor's resistance and overcome the back EMF.
$V_d = E + I_d R = 100V + (50A \times 2\Omega) = 100V + 100V = 200V$.

(c) For a half-controlled bridge, $V_d = \frac{3}{\pi} V_{mL} (1 + \cos(\alpha))$.
$V_d = \frac{3}{\pi} \times 565.69 \times (1 + \cos(60^\circ)) = \frac{3}{\pi} \times 565.69 \times (1 + 0.5) = \frac{3}{\pi} \times 565.69 \times 1.5 = 860.13 V$.

(d) Comparing the required output voltage (200V) with the output voltage provided by the rectifier (860.13V) at $\alpha = 60^\circ$, we see a significant mismatch. The rectifier is providing a much higher voltage than needed to maintain a 50A current. This indicates that the firing angle of $60^\circ$ is **not** consistent with the given operating conditions for maintaining a constant 50A current. To achieve $V_d = 200V$ with a half-controlled bridge:
$200 = \frac{3}{\pi} \times 565.69 \times (1 + \cos(\alpha))$
$200 = 539.57 \times (1 + \cos(\alpha))$
$1 + \cos(\alpha) = \frac{200}{539.57} = 0.3706$
$\cos(\alpha) = 0.3706 - 1 = -0.6294$
$\alpha = \cos^{-1}(-0.6294) \approx 129.03^\circ$.
So, a firing angle of approximately $129^\circ$ would be required.

**Question 3:** Briefly explain the advantage of using a fully controlled bridge rectifier over a half-controlled bridge rectifier when driving a DC motor.

**Answer 3:**
A fully controlled bridge rectifier offers better controllability over the output DC voltage. It can provide a wider range of output voltages, including lower voltages compared to a half-controlled rectifier for the same AC input. This allows for a wider speed range for DC motor drives. Additionally, fully controlled rectifiers generally have a better input power factor and lower harmonic distortion, leading to more efficient operation and a cleaner interface with the AC utility.

---
