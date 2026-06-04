---
title: "Effect of cascading on gain and bandwidth"
subject: "ANALOG CIRCUITS"
module: "Module 2: BJT Amplifiers: Design of RC coupled CE amplifier "
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2ed"
status: "completed"
scrapedAt: "2026-05-23T17:44:15.518Z"
---
# ANALOG CIRCUITS - Module 2: BJT Amplifiers: Design of RC coupled CE amplifier

## Topic: Effect of Cascading on Gain and Bandwidth

---

### 1. Introduction to Cascading

**Cascading** refers to connecting two or more amplifier stages in series. The output of one amplifier stage is fed to the input of the next stage. This technique is commonly employed to achieve higher overall voltage gain and, in some cases, to improve the bandwidth of an amplifier system.

*   **Motivation for Cascading:**
    *   **Higher Voltage Gain:** A single BJT amplifier stage often provides limited voltage gain. Cascading allows us to multiply the gains of individual stages to achieve a much higher overall gain, essential for amplifying weak signals. (Relates to **CO2**: Analyze single stage and multistage BJT amplifier circuits using equivalent models.)
    *   **Improved Bandwidth (in certain configurations):** While cascading generally reduces the overall bandwidth, specific configurations or compensation techniques can be used to maintain or even improve it. Understanding this trade-off is crucial in amplifier design.

*   **Types of Cascading:**
    *   **Direct Coupling:** Stages are directly connected without any coupling elements. This is useful for DC amplifiers but is not the primary focus of this topic concerning AC amplifiers.
    *   **RC Coupling (most common for CE amplifiers):** Coupling capacitors are used between stages to block DC bias currents while allowing AC signals to pass. This is the method we are focusing on for RC-coupled CE amplifiers.
    *   **Transformer Coupling:** Transformers are used for coupling, providing impedance matching and DC isolation.
    *   **Direct Coupling:** Stages are directly connected without any coupling elements. This is useful for DC amplifiers but is not the primary focus of this topic concerning AC amplifiers.

**Key Concept:** The overall gain of cascaded amplifier stages is approximately the product of the individual stage gains.

---

### 2. Cascading of RC Coupled CE Amplifier Stages

When multiple RC-coupled Common-Emitter (CE) amplifier stages are cascaded, the output of the first stage is connected to the input of the second stage via a coupling capacitor ($C_C$).

**(Reference: Boylestad & Nashelsky, Chapter 10: Multi-stage Amplifiers)**

*   **Two-Stage RC Coupled CE Amplifier:**
    *   The output of the first CE stage ($Q_1$) is connected to the input of the second CE stage ($Q_2$) through a coupling capacitor ($C_{C1}$).
    *   The load of the second stage is connected through another coupling capacitor ($C_{C2}$).
    *   The DC bias conditions of each stage are typically kept independent due to the coupling capacitors.

**(Illustration of a two-stage RC-coupled CE amplifier would be beneficial here, showing $Q_1$, $Q_2$, biasing resistors, coupling capacitors, and bypass capacitors.)**

*   **Overall Voltage Gain ($A_v_{total}$):**
    If the voltage gain of the first stage is $A_{v1}$ and the voltage gain of the second stage is $A_{v2}$, then the overall voltage gain of the two-stage amplifier is approximately:
    $$A_{v_{total}} \approx A_{v1} \times A_{v2}$$
    *   **Impact:** This shows that the gain is multiplicative. If each stage provides a gain of 10, two stages will provide a gain of $10 \times 10 = 100$.

*   **Bandwidth of Cascaded Stages:**
    The bandwidth of an amplifier is typically defined by the frequency range over which the gain is within 70.7% (or -3dB) of the maximum mid-band gain.
    *   **Low-Frequency Response:** Each coupling capacitor ($C_C$) and bypass capacitor ($C_E$, if used) introduces a low-frequency pole, reducing the gain at low frequencies. For a cascaded amplifier, the overall low-frequency response is determined by the stage with the highest low-frequency cutoff frequency ($f_{L}$).
        $$f_{L_{total}} = \sqrt[n]{(f_{L1}^n + f_{L2}^n + ...)}$$
        For $n$ stages, and assuming identical stages where $f_{L1} = f_{L2} = ... = f_L$, the formula simplifies. However, a common and often sufficient approximation is that the overall low-frequency cutoff is dominated by the stage with the highest individual cutoff frequency.
        *   **Important Point:** If the low-frequency cutoff frequencies of individual stages are significantly different, the overall $f_{L_{total}}$ will be closer to the highest $f_L$. If they are similar, the overall $f_L$ will be higher than any individual stage's $f_L$.
    *   **High-Frequency Response:** Each CE stage exhibits a high-frequency cutoff due to parasitic capacitances within the BJT (e.g., $C_{\pi}$, $C_{\mu}$) and stray capacitances. These introduce high-frequency poles. For a cascaded amplifier, the overall high-frequency response is determined by the stage with the lowest high-frequency cutoff frequency ($f_{H}$).
        $$f_{H_{total}} = \sqrt[n]{(f_{H1}^{-n} + f_{H2}^{-n} + ...)^{-1}}$$
        For $n$ identical stages where $f_{H1} = f_{H2} = ... = f_H$, the formula becomes:
        $$f_{H_{total}} = f_H \sqrt[n]{2^{1/n} - 1}$$
        **Approximation:** For $n=2$ identical stages, $f_{H_{total}} \approx 0.64 f_H$.
        **Crucial Observation:** Cascading identical CE stages *reduces* the overall bandwidth. The reduction is more significant with more stages.

**(Reference: Sedra & Smith, Chapter 7: Frequency Response of Amplifiers)**

---

### 3. Effect of Cascading on Gain and Bandwidth Summarized

| Feature       | Effect of Cascading (RC-Coupled CE Stages)                                                                    | Explanation                                                                                                                                                               |
| :------------ | :------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Voltage Gain** | **Increases multiplicatively.** Overall gain is the product of individual stage gains.                        | The output of one stage becomes the input of the next, amplifying the signal further at each step.                                                                        |
| **Bandwidth (High-Frequency)** | **Decreases.** The overall high-frequency cutoff is lower than that of any individual stage (if stages are identical, it's significantly lower). | Each stage introduces a high-frequency pole. The overall response is limited by the stage with the lowest high-frequency cutoff. The reduction is more pronounced with more stages. |
| **Bandwidth (Low-Frequency)** | **Increases (slightly or can be approximated as the highest individual cutoff).** The overall low-frequency cutoff is typically determined by the stage with the highest individual cutoff frequency. | Coupling capacitors and bypass capacitors introduce low-frequency poles. The overall response is limited by the stage with the highest low-frequency cutoff.                   |
| **Overall Gain-Bandwidth Product (GBWP)** | **Decreases.** Since the gain increases and the bandwidth decreases, the GBWP generally decreases. | GBWP is a figure of merit for amplifiers. While gain can be boosted by cascading, it comes at the cost of reduced bandwidth.                                              |

---

### 4. Analysis of Cascaded Amplifiers

To analyze the gain and bandwidth of cascaded RC-coupled CE amplifiers, we use the small-signal equivalent circuit model of the BJT.

**(Reference: Bogart & Beasley, Chapter 6: FET and BJT Amplifiers)**

*   **Miller Effect:** The Miller effect significantly impacts the high-frequency response of CE amplifiers. The feedback capacitance $C_{\mu}$ between collector and base appears as a larger effective capacitance at the input due to the voltage gain across it.
    $$C_{in, Miller} = C_{\mu}(1 + |A_v|)$$
    This effective capacitance at the input is a dominant factor in reducing the high-frequency response.

*   **Cascading and Miller Effect:** When stages are cascaded, the Miller effect in the *first* stage significantly degrades its high-frequency response. The *second* stage's high-frequency response is affected by its own Miller effect and its input capacitance.
    *   The overall high-frequency cutoff is determined by the combination of poles introduced by each stage, with the input stage often being the bottleneck due to the amplified Miller effect.

*   **Example: Two-Stage CE Amplifier**
    Let's consider two identical CE stages with:
    *   Mid-band voltage gain per stage: $A_{v1} = A_{v2} = A_m$
    *   Overall mid-band voltage gain: $A_{v_{total}} = A_m^2$
    *   High-frequency cutoff per stage: $f_{H1} = f_{H2} = f_H$
    *   Overall high-frequency cutoff: $f_{H_{total}} \approx 0.64 f_H$ (for identical stages)

    **Analysis of the Bottleneck:** The first stage typically has the most significant impact on the overall high-frequency response because its $C_{\mu}$ is amplified by its own voltage gain ($A_{v1}$). The second stage's $C_{\mu}$ is amplified by its voltage gain ($A_{v2}$), but its input is driven by the output of the first stage, which is already affected by the first stage's limitations.

**(Reference: Razavi, Chapter 6: Frequency Response)**
Razavi's "Fundamentals of Microelectronics" provides a detailed analysis of how parasitic capacitances and the Miller effect contribute to the high-frequency response, which is directly applicable to cascading.

---

### 5. Design Considerations for Cascaded Amplifiers

*   **Maximizing Gain:** Connect multiple stages with high individual gains.
*   **Improving Bandwidth:**
    *   **Stagger Tuning:** In tuned amplifiers, individual stages can be tuned to slightly different frequencies to broaden the overall response. This is not directly applicable to basic RC-coupled CE amplifiers but is a related concept.
    *   **Cascode Amplifiers:** The cascode configuration is a multistage amplifier that overcomes some bandwidth limitations of the simple CE amplifier by using a common-base stage after the common-emitter stage. This effectively reduces the Miller effect in the first stage. (This is a different amplifier configuration, but highlights the need to consider bandwidth-limiting factors.)
    *   **Compensation Techniques:** For critical applications requiring both high gain and wide bandwidth, more advanced compensation techniques might be necessary, such as adding small inductors or using different amplifier topologies.

---

### 6. Practice Questions and Exercises

**Question 1:**
If a single CE amplifier stage has a voltage gain of 20 and a high-frequency cutoff of 50 kHz, what is the approximate overall voltage gain and high-frequency cutoff of a two-stage cascaded amplifier composed of two identical stages?

**Answer 1:**
*   Overall Voltage Gain: $A_{v_{total}} = A_{v1} \times A_{v2} = 20 \times 20 = 400$.
*   Overall High-Frequency Cutoff: $f_{H_{total}} \approx 0.64 \times f_H = 0.64 \times 50 \text{ kHz} = 32 \text{ kHz}$.

**Question 2:**
What is the primary reason why cascading identical CE amplifier stages generally leads to a *reduction* in the overall bandwidth?

**Answer 2:**
The primary reason is the Miller effect. The parasitic capacitance $C_{\mu}$ between the collector and base of each BJT is amplified by the voltage gain of that stage. In a cascaded system, the cumulative effect of these amplified capacitances, particularly in the earlier stages, limits the amplifier's ability to respond to high-frequency signals. The overall bandwidth is dictated by the stage with the lowest high-frequency cutoff, which is typically the first stage due to the amplified Miller effect.

**Question 3:**
Consider a three-stage cascaded amplifier where each stage has a voltage gain of 15 and a high-frequency cutoff of 80 kHz.
a) What is the approximate overall voltage gain?
b) What is the approximate overall high-frequency cutoff frequency?

**Answer 3:**
a) Overall Voltage Gain: $A_{v_{total}} = A_{v1} \times A_{v2} \times A_{v3} = 15 \times 15 \times 15 = 3375$.
b) For $n=3$ identical stages, $f_{H_{total}} = f_H \sqrt[3]{2^{1/3} - 1} \approx f_H \times 0.78$.
   $f_{H_{total}} \approx 0.78 \times 80 \text{ kHz} = 62.4 \text{ kHz}$.

**Question 4 (Conceptual):**
If you need to amplify a very weak signal from a sensor, would you prefer a single high-gain amplifier or a cascaded multi-stage amplifier with the same overall gain but a lower bandwidth? Explain your reasoning.

**Answer 4:**
For amplifying a very weak signal, a cascaded multi-stage amplifier is generally preferred, even if it has a lower bandwidth.
Reasoning:
1.  **Signal Strength:** Weak signals require significant amplification to be usable. A single-stage amplifier might not provide sufficient gain, leaving the signal buried in noise.
2.  **Signal-to-Noise Ratio (SNR):** While the cascaded amplifier might have a reduced bandwidth, the overall gain will be much higher. This higher gain amplifies both the signal and any noise present. However, if the signal is very weak, the *absolute* improvement in signal strength through cascading is more critical than preserving the *relative* bandwidth for the intended application.
3.  **Application Dependency:** The acceptable bandwidth depends on the frequency content of the signal itself. If the sensor's signal is concentrated in a relatively narrow frequency range, a reduced bandwidth might be perfectly acceptable.

**Important Note:** It's crucial to match the bandwidth of the amplifier to the bandwidth of the signal being amplified. If the signal has significant high-frequency components, the reduced bandwidth of cascading could lead to distortion or loss of information.

---

### 7. Important Points to Remember

*   **Gain:** Cascading increases voltage gain multiplicatively.
*   **Bandwidth:** Cascading identical CE stages *reduces* the overall bandwidth. The reduction is more pronounced with more stages.
*   **Dominant Factor:** The first stage of a cascaded CE amplifier often limits the high-frequency response due to the amplified Miller effect.
*   **Gain-Bandwidth Product (GBWP):** While gain is boosted, the GBWP typically decreases with cascading.
*   **Analysis Tool:** The small-signal equivalent circuit model is essential for analyzing the gain and frequency response of cascaded amplifiers.
*   **Design Trade-off:** There is a fundamental trade-off between achieving high gain and maintaining a wide bandwidth when cascading simple amplifier stages.

---

### 8. Alignment with Course Outcomes

*   **CO1: Design wave shaping circuits using first order RC network and diodes.** (K3)
    *   This module's topic on RC-coupled amplifiers indirectly relates to RC networks. Understanding coupling and bypass capacitors introduces the behavior of RC networks at different frequencies, which is fundamental to wave shaping.
*   **CO2: Analyze single stage and multistage BJT amplifier circuits using equivalent models.** (K3)
    *   This topic directly addresses the analysis of multistage BJT amplifier circuits (cascaded CE amplifiers) using their small-signal equivalent models to determine gain and bandwidth.
*   **CO3: Apply the principles of feedback in the design of oscillators.** (K3)
    *   While not directly about oscillators, understanding frequency response limitations (like those exacerbated by cascading) is crucial for oscillator design, where specific frequency characteristics are targeted.
*   **CO4: Design power amplifiers and voltage regulator circuits.** (K3)
    *   The fundamental understanding of amplifier gain and frequency response gained from this module is a prerequisite for designing more complex circuits like power amplifiers and voltage regulators.

---
**End of Notes**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
