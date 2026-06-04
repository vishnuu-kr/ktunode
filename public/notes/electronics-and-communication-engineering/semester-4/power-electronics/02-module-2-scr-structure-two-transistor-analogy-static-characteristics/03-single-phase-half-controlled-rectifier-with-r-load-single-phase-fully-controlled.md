---
title: "Single phase half-controlled rectifier with R load – Single phase fully controlled bridge rectifier (continuous conduction) – output voltage equation."
subject: "POWER ELECTRONICS"
module: "Module 2: SCR: Structure, two transistor analogy, static characteristics."
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5fb"
status: "completed"
scrapedAt: "2026-05-23T17:52:11.270Z"
---
# Power Electronics: Study Notes - Module 2

## Topic: Single-Phase Rectifiers with R Load & Fully Controlled Bridge Rectifier (Continuous Conduction) - Output Voltage Equation

**Module:** Module 2: SCR: Structure, Two Transistor Analogy, Static Characteristics
**Subject:** Power Electronics

---

### 1. Introduction to Rectification

**Definition:** Rectification is the process of converting alternating current (AC) to direct current (DC). Rectifiers are electronic circuits that perform this conversion.

**Types of Rectifiers:**
*   **Half-wave Rectifier:** Conducts current for only half of the AC input cycle.
*   **Full-wave Rectifier:** Conducts current for both halves of the AC input cycle.
    *   Center-tapped full-wave rectifier
    *   Bridge full-wave rectifier

**Key Components:**
*   **Diodes:** Used in half-wave and some full-wave rectifiers. They conduct current in one direction only.
*   **Thyristors (SCRs):** Silicon Controlled Rectifiers. These are unidirectional switches that can be controlled to conduct current. They are turned on by a gate pulse and remain conducting as long as there is a forward current exceeding the holding current, even after the gate pulse is removed. They turn off when the forward current drops below the holding current or when the voltage reverses.

---

### 2. Single-Phase Half-Controlled Rectifier with R Load

This section focuses on rectifiers that utilize a combination of diodes and SCRs, specifically when the load is purely resistive.

#### 2.1 Circuit Configuration and Operation

A single-phase half-controlled rectifier typically uses one diode and one SCR.

*   **Circuit Diagram:** (Imagine a circuit with an AC source, a diode in series with an SCR, and a resistive load connected across them.)

*   **Operation:**
    *   **During the positive half-cycle of the AC input voltage ($v_s = V_m \sin(\omega t)$):**
        *   The diode is forward-biased.
        *   The SCR is also forward-biased, but it will not conduct until a gate pulse is applied.
        *   **If no gate pulse is applied until $\omega t = \alpha$ (firing angle):** The SCR will turn on at $\omega t = \alpha$.
        *   Once the SCR is triggered at $\alpha$, current flows through the SCR and the load, returning through the other half of the AC source.
        *   The current flows from $\omega t = \alpha$ to $\omega t = \pi$.
    *   **During the negative half-cycle of the AC input voltage:**
        *   The diode is reverse-biased.
        *   The SCR is also reverse-biased (even if triggered).
        *   No current flows through the circuit.

#### 2.2 Output Voltage Equation and Waveforms

*   **Output Voltage ($v_o$):**
    *   For $0 \le \omega t < \alpha$: $v_o = 0$ (SCR is off)
    *   For $\alpha \le \omega t \le \pi$: $v_o = V_m \sin(\omega t)$ (SCR is on)
    *   For $\pi \le \omega t < 2\pi$: $v_o = 0$ (SCR is off and reverse biased)

*   **Average Output Voltage ($V_{dc}$):**
    The average output voltage is calculated by integrating the output voltage over one period ($2\pi$ radians) and dividing by $2\pi$.
    $$V_{dc} = \frac{1}{2\pi} \int_{0}^{2\pi} v_o(t) dt$$
    Since the output voltage is zero for $0 \le \omega t < \alpha$ and $\pi \le \omega t < 2\pi$, and $V_m \sin(\omega t)$ for $\alpha \le \omega t \le \pi$:
    $$V_{dc} = \frac{1}{2\pi} \int_{\alpha}^{\pi} V_m \sin(\omega t) d(\omega t)$$
    $$V_{dc} = \frac{V_m}{2\pi} [-\cos(\omega t)]_{\alpha}^{\pi}$$
    $$V_{dc} = \frac{V_m}{2\pi} [-\cos(\pi) - (-\cos(\alpha))]$$
    $$V_{dc} = \frac{V_m}{2\pi} [-(-1) + \cos(\alpha)]$$
    $$V_{dc} = \frac{V_m}{2\pi} (1 + \cos(\alpha))$$

    **Important Note:** The average output voltage depends on the firing angle $\alpha$.
    *   If $\alpha = 0$, $V_{dc} = \frac{V_m}{\pi}$ (Full-wave rectified output, if a full-wave bridge was used with all diodes conducting). This is the maximum possible DC output for this type of rectifier.
    *   As $\alpha$ increases towards $\pi$, the average DC voltage decreases.
    *   If $\alpha = \pi$, $V_{dc} = 0$, meaning no DC output.

*   **RMS Output Voltage ($V_{rms}$):**
    $$V_{rms} = \sqrt{\frac{1}{2\pi} \int_{0}^{2\pi} v_o^2(t) dt}$$
    $$V_{rms} = \sqrt{\frac{1}{2\pi} \int_{\alpha}^{\pi} (V_m \sin(\omega t))^2 d(\omega t)}$$
    $$V_{rms} = \sqrt{\frac{V_m^2}{2\pi} \int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t)}$$
    Using $\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$:
    $$V_{rms} = \sqrt{\frac{V_m^2}{2\pi} \int_{\alpha}^{\pi} \frac{1 - \cos(2\omega t)}{2} d(\omega t)}$$
    $$V_{rms} = V_m \sqrt{\frac{1}{4\pi} [\omega t - \frac{\sin(2\omega t)}{2}]_{\alpha}^{\pi}}$$
    $$V_{rms} = V_m \sqrt{\frac{1}{4\pi} [(\pi - \frac{\sin(2\pi)}{2}) - (\alpha - \frac{\sin(2\alpha)}{2})]}$$
    $$V_{rms} = V_m \sqrt{\frac{1}{4\pi} [\pi - \alpha + \frac{\sin(2\alpha)}{2}]}$$
    $$V_{rms} = \frac{V_m}{2} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}$$

---

### 3. Single-Phase Fully Controlled Bridge Rectifier (Continuous Conduction)

This section describes a rectifier configuration that uses only SCRs to achieve controlled rectification. The analysis assumes continuous current flow through the load.

#### 3.1 Circuit Configuration and Operation

A single-phase fully controlled bridge rectifier consists of four SCRs arranged in a bridge configuration.

*   **Circuit Diagram:** (Imagine a bridge rectifier circuit where all four diodes are replaced by SCRs. Let's label them SCR1, SCR2, SCR3, and SCR4. SCR1 and SCR3 are in one diagonal, and SCR2 and SCR4 are in the other diagonal.)

*   **Operation:**
    *   The bridge configuration ensures that current flows through the load during both positive and negative half-cycles of the AC input.
    *   **Positive Half-Cycle ($0 \le \omega t \le \pi$):**
        *   The AC source voltage is positive.
        *   SCR1 and SCR3 are forward-biased.
        *   SCR2 and SCR4 are reverse-biased.
        *   To allow current flow, SCR1 and SCR3 are triggered at a firing angle $\alpha$.
        *   Once triggered, current flows from the positive terminal of the AC source, through SCR1, through the load (from left to right), through SCR3, and back to the negative terminal of the AC source.
    *   **Negative Half-Cycle ($\pi \le \omega t \le 2\pi$):**
        *   The AC source voltage is negative.
        *   SCR2 and SCR4 are forward-biased.
        *   SCR1 and SCR3 are reverse-biased.
        *   To allow current flow, SCR2 and SCR4 are triggered at a firing angle $\alpha$ (relative to the start of the negative half-cycle, or equivalently at $\pi + \alpha$ from the start of the positive half-cycle).
        *   Once triggered, current flows from the AC source (which is now positive at the bottom terminal of the bridge), through SCR4, through the load (from right to left), through SCR2, and back to the AC source.

*   **Commutation:**
    *   In a fully controlled bridge, commutation (turning off) of an SCR occurs naturally when the current through it drops to zero or when it is reverse-biased.
    *   For SCR1 and SCR3, they turn off at $\omega t = \pi$ because the voltage across them reverses.
    *   For SCR2 and SCR4, they turn off at $\omega t = 2\pi$ because the voltage across them reverses.
    *   The next pair of SCRs (SCR2 and SCR4 in the negative half-cycle) must be triggered at $\pi + \alpha$ to ensure continuous conduction and a symmetrical output voltage waveform.

#### 3.2 Output Voltage Equation (Continuous Conduction)

Assuming a purely resistive load ($R$). For continuous conduction, the load current does not drop to zero during the commutation interval. This is typically achieved with inductive loads, but for a resistive load, we consider the firing angle to be less than $\pi$.

*   **Output Voltage ($v_o$):**
    *   For $0 \le \omega t < \alpha$: $v_o = 0$ (SCR1 and SCR3 are off)
    *   For $\alpha \le \omega t \le \pi$: $v_o = V_m \sin(\omega t)$ (SCR1 and SCR3 are conducting)
    *   For $\pi \le \omega t < \pi + \alpha$: $v_o = 0$ (SCR2 and SCR4 are off)
    *   For $\pi + \alpha \le \omega t \le 2\pi$: $v_o = -V_m \sin(\omega t)$ (SCR2 and SCR4 are conducting. Note that $V_m \sin(\omega t)$ is negative in this interval, so $-V_m \sin(\omega t)$ is positive.)

*   **Average Output Voltage ($V_{dc}$):**
    The average DC voltage is calculated over a full cycle ($2\pi$).
    $$V_{dc} = \frac{1}{2\pi} \int_{0}^{2\pi} v_o(t) dt$$
    $$V_{dc} = \frac{1}{2\pi} \left[ \int_{\alpha}^{\pi} V_m \sin(\omega t) d(\omega t) + \int_{\pi+\alpha}^{2\pi} (-V_m \sin(\omega t)) d(\omega t) \right]$$

    Let's evaluate the first integral:
    $$\int_{\alpha}^{\pi} V_m \sin(\omega t) d(\omega t) = V_m [-\cos(\omega t)]_{\alpha}^{\pi} = V_m (-\cos(\pi) - (-\cos(\alpha))) = V_m (1 + \cos(\alpha))$$

    Now let's evaluate the second integral:
    $$\int_{\pi+\alpha}^{2\pi} (-V_m \sin(\omega t)) d(\omega t) = -V_m [-\cos(\omega t)]_{\pi+\alpha}^{2\pi} = V_m [\cos(\omega t)]_{\pi+\alpha}^{2\pi}$$
    $$= V_m [\cos(2\pi) - \cos(\pi+\alpha)] = V_m [1 - (-\cos(\alpha))]$$
    $$= V_m (1 + \cos(\alpha))$$

    Substitute these back into the $V_{dc}$ equation:
    $$V_{dc} = \frac{1}{2\pi} [V_m (1 + \cos(\alpha)) + V_m (1 + \cos(\alpha))]$$
    $$V_{dc} = \frac{1}{2\pi} [2 V_m (1 + \cos(\alpha))]$$
    $$V_{dc} = \frac{V_m}{\pi} (1 + \cos(\alpha))$$

    **Comparison with Half-Controlled Rectifier:** Notice that the average DC output voltage for a fully controlled bridge rectifier is exactly twice that of a half-controlled rectifier for the same firing angle $\alpha$. This is because the fully controlled bridge utilizes both halves of the AC cycle, effectively acting like two half-controlled rectifiers shifted by 180 degrees.

*   **RMS Output Voltage ($V_{rms}$):**
    For a fully controlled bridge with R load and continuous conduction:
    $$V_{rms} = \sqrt{\frac{1}{2\pi} \left[ \int_{\alpha}^{\pi} (V_m \sin(\omega t))^2 d(\omega t) + \int_{\pi+\alpha}^{2\pi} (-V_m \sin(\omega t))^2 d(\omega t) \right]}$$
    Since $(-\sin(\theta))^2 = \sin^2(\theta)$, both integrals are the same.
    $$V_{rms} = \sqrt{\frac{1}{2\pi} \left[ 2 \int_{\alpha}^{\pi} V_m^2 \sin^2(\omega t) d(\omega t) \right]}$$
    $$V_{rms} = \sqrt{\frac{V_m^2}{\pi} \int_{\alpha}^{\pi} \frac{1 - \cos(2\omega t)}{2} d(\omega t)}$$
    $$V_{rms} = V_m \sqrt{\frac{1}{2\pi} [\omega t - \frac{\sin(2\omega t)}{2}]_{\alpha}^{\pi}}$$
    $$V_{rms} = V_m \sqrt{\frac{1}{2\pi} [(\pi - 0) - (\alpha - \frac{\sin(2\alpha)}{2})]}$$
    $$V_{rms} = V_m \sqrt{\frac{1}{2\pi} [\pi - \alpha + \frac{\sin(2\alpha)}{2}]}$$
    $$V_{rms} = V_m \sqrt{\frac{1}{2} - \frac{\alpha}{2\pi} + \frac{\sin(2\alpha)}{4\pi}}$$

---

### 4. Important Points to Remember

*   **Firing Angle ($\alpha$):** This is the most critical parameter for controlled rectifiers, determining the output voltage.
*   **Continuous Conduction:** Assumed here, meaning the load current never drops to zero during a cycle. This is naturally achieved with inductive loads. For purely resistive loads, continuous conduction is only possible if the firing angle $\alpha$ is less than $\pi$, and the load current at the end of the conducting interval is not zero when the next SCR pair is triggered.
*   **Half-Controlled vs. Fully Controlled Bridge:**
    *   Half-controlled rectifiers use diodes and SCRs. They rectify only one half of the AC cycle effectively.
    *   Fully controlled bridge rectifiers use only SCRs and rectify both halves of the AC cycle.
*   **Output Voltage Dependency:** The average DC output voltage ($V_{dc}$) is directly controlled by the firing angle $\alpha$. As $\alpha$ increases, $V_{dc}$ decreases.
*   **Maximum DC Output:** For a fully controlled bridge, $V_{dc} = \frac{2V_m}{\pi}$ when $\alpha = 0$ (all SCRs act like diodes).
*   **Zero DC Output:** For a fully controlled bridge, $V_{dc} = 0$ when $\alpha = \pi$.
*   **Power Factor:** Controlled rectifiers, especially with inductive loads, tend to have a poor power factor. This topic is usually covered in later modules.

---

### 5. Learning Outcome Alignment

*   **CO1: Outline the operation of power semiconductor devices and its characteristics.**
    *   This topic implicitly relies on the understanding of SCR characteristics (triggering, conduction, turn-off). The operation of the rectifiers demonstrates how these characteristics are utilized.
*   **CO2: Design and analyze various rectifier circuits for power devices.**
    *   This topic directly addresses the analysis of single-phase half-controlled and fully controlled bridge rectifiers with R loads. The output voltage equations derived are key for analysis.
*   **CO3: Analyze different power converter circuits.**
    *   Rectifiers are a fundamental type of DC-DC converter (AC to DC). The analysis of these circuits contributes to understanding power converter principles.
*   **CO4: Illustrate different types of inverter circuits.**
    *   While this topic focuses on rectifiers, understanding rectification is a prerequisite for understanding inverters (DC to AC conversion), which often involve similar switching principles.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 6. Textbook and Reference Integration

*   **L Umanand, "Power Electronics Essentials & Applications":** This textbook provides foundational coverage of SCR operation, rectification principles, and the analysis of various rectifier circuits, including half-controlled and fully controlled bridge rectifiers. Expect detailed explanations and derivations for the output voltage equations.
*   **Muhammad H Rashid, "Power Electronics Circuits, Devices, and Applications":** Rashid's book is comprehensive and offers excellent coverage of rectifier circuits. It will detail the operational modes, waveforms, and mathematical derivations for average and RMS values, especially for R and RL loads.
*   **Ned Mohan, Tore M Undeland, William P Robbins, "Power Electronics Converters, Applications, and Design":** This is a highly regarded text that delves into the theoretical aspects and practical applications of power converters. It will provide a rigorous treatment of rectifier analysis, including the effect of firing angles and load types.
*   **Joseph Vithayathil, "Power Electronics Principles and Applications":** Vithayathil's book offers a good balance of principles and practical considerations. It will explain the control aspects of SCRs in rectifier circuits and provide clear derivations for output voltages.
*   **Daniel W Hart, "Power Electronics":** Hart's book provides a clear and accessible approach to power electronics. It will likely cover the basic operation and analysis of these rectifiers with good illustrative examples.

---

### 7. Practice Questions and Answers

**Question 1:**
For a single-phase half-controlled rectifier with a resistive load, if the AC input voltage is $v_s = 230 \sin(\omega t)$ V (RMS), and the firing angle $\alpha = 60^\circ$. Calculate the average DC output voltage.

**Answer 1:**
The RMS input voltage $V_s = 230$ V.
The peak input voltage $V_m = V_s \sqrt{2} = 230 \sqrt{2} \approx 325.27$ V.
The firing angle $\alpha = 60^\circ = \frac{\pi}{3}$ radians.

Using the formula for average DC voltage of a half-controlled rectifier:
$V_{dc} = \frac{V_m}{2\pi} (1 + \cos(\alpha))$
$V_{dc} = \frac{325.27}{2\pi} (1 + \cos(60^\circ))$
$V_{dc} = \frac{325.27}{2\pi} (1 + 0.5)$
$V_{dc} = \frac{325.27}{2\pi} (1.5)$
$V_{dc} \approx \frac{325.27}{6.283} (1.5)$
$V_{dc} \approx 51.76 \times 1.5$
$V_{dc} \approx 77.64$ V

**Question 2:**
A single-phase fully controlled bridge rectifier is connected to a purely resistive load. The RMS input voltage is 120 V. If the firing angle is set to $90^\circ$, what is the average DC output voltage?

**Answer 2:**
The RMS input voltage $V_s = 120$ V.
The peak input voltage $V_m = V_s \sqrt{2} = 120 \sqrt{2} \approx 169.71$ V.
The firing angle $\alpha = 90^\circ = \frac{\pi}{2}$ radians.

Using the formula for average DC voltage of a fully controlled bridge rectifier:
$V_{dc} = \frac{V_m}{\pi} (1 + \cos(\alpha))$
$V_{dc} = \frac{169.71}{\pi} (1 + \cos(90^\circ))$
$V_{dc} = \frac{169.71}{\pi} (1 + 0)$
$V_{dc} = \frac{169.71}{\pi}$
$V_{dc} \approx 54.02$ V

**Question 3:**
For a single-phase fully controlled bridge rectifier, what is the relationship between the firing angle $\alpha$ and the average DC output voltage $V_{dc}$? What happens to $V_{dc}$ as $\alpha$ increases from $0^\circ$ to $180^\circ$?

**Answer 3:**
The relationship is given by the equation: $V_{dc} = \frac{V_m}{\pi} (1 + \cos(\alpha))$.
As $\alpha$ increases from $0^\circ$ to $180^\circ$:
*   $\cos(\alpha)$ decreases from $1$ to $-1$.
*   $(1 + \cos(\alpha))$ decreases from $2$ to $0$.
*   Therefore, $V_{dc}$ decreases from $\frac{2V_m}{\pi}$ (at $\alpha=0^\circ$) to $0$ (at $\alpha=180^\circ$).
    *   At $\alpha=0^\circ$, $V_{dc} = \frac{V_m}{\pi}(1+1) = \frac{2V_m}{\pi}$. This is the maximum DC output.
    *   At $\alpha=90^\circ$, $V_{dc} = \frac{V_m}{\pi}(1+0) = \frac{V_m}{\pi}$.
    *   At $\alpha=180^\circ$, $V_{dc} = \frac{V_m}{\pi}(1-1) = 0$. This is the minimum DC output.

**Question 4:**
Consider a single-phase half-controlled rectifier with R load. What is the RMS output voltage when $\alpha = 0^\circ$? Compare this with the RMS input voltage.

**Answer 4:**
The RMS output voltage for a half-controlled rectifier is given by:
$V_{rms} = \frac{V_m}{2} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}$

When $\alpha = 0^\circ$:
$V_{rms} = \frac{V_m}{2} \sqrt{1 - \frac{0}{\pi} + \frac{\sin(0)}{2\pi}}$
$V_{rms} = \frac{V_m}{2} \sqrt{1 - 0 + 0}$
$V_{rms} = \frac{V_m}{2}$

The RMS input voltage is $V_s = \frac{V_m}{\sqrt{2}}$.
So, $V_m = V_s \sqrt{2}$.
Substituting this into the $V_{rms}$ equation:
$V_{rms} = \frac{V_s \sqrt{2}}{2} = \frac{V_s}{\sqrt{2}}$

Therefore, when $\alpha=0^\circ$, the RMS output voltage of a half-controlled rectifier is equal to the RMS input voltage. This is because at $\alpha=0$, the SCR acts like a diode and conducts for the entire positive half-cycle, similar to a half-wave rectifier.

---
This concludes the study notes for the specified topic. Remember to refer to the mentioned textbooks for more detailed explanations and variations of these circuits.