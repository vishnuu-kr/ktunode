---
title: "Effect of negative feedback on gain, bandwidth, noise reduction and distortion"
subject: "ANALOG CIRCUITS"
module: "Module 3: Feedback amplifiers: The general feedback structure"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2f1"
status: "completed"
scrapedAt: "2026-05-23T17:44:18.030Z"
---
# ANALOG CIRCUITS - Module 3: Feedback Amplifiers: The General Feedback Structure

## Topic: Effect of Negative Feedback on Gain, Bandwidth, Noise Reduction, and Distortion

This module explores the profound impact of negative feedback on the performance characteristics of amplifier circuits. Negative feedback, where a portion of the output signal is fed back to the input in an inverted phase, is a cornerstone technique in analog circuit design. Understanding its effects is crucial for achieving stable, predictable, and high-performance amplifiers.

---

### Learning Outcomes Covered:

*   **LO1: Understand the fundamental concept of negative feedback and its general structure.**
*   **LO2: Analyze the impact of negative feedback on amplifier gain.**
*   **LO3: Explain how negative feedback affects amplifier bandwidth.**
*   **LO4: Discuss the role of negative feedback in reducing noise.**
*   **LO5: Describe the reduction of distortion in amplifiers due to negative feedback.**
*   **LO6: Apply the principles of feedback to analyze and predict amplifier behavior.**

---

### Course Outcomes Alignment:

This topic directly contributes to:

*   **CO2: Analyze single-stage and multistage BJT amplifier circuits using equivalent models.** (Understanding the fundamental operation of amplifiers is enhanced by knowing how feedback modifies their performance characteristics, allowing for more accurate analysis.)
*   **CO3: Apply the principles of feedback in the design of oscillators.** (While this topic focuses on amplifiers, the fundamental principles of feedback are directly transferable to oscillator design, which relies on positive feedback to sustain oscillations.)
*   **CO4: Design power amplifiers and voltage regulator circuits.** (Both power amplifiers and voltage regulators often employ negative feedback for stability, output regulation, and improved linearity, making this topic essential for their design.)

---

### Key Concepts and Definitions:

*   **Feedback:** The process of taking a portion of the output signal of a circuit and feeding it back to the input.
*   **Negative Feedback:** A type of feedback where the fed-back signal is out of phase with the input signal, effectively opposing the input. This leads to a reduction in overall gain but improves stability and other performance metrics.
*   **Positive Feedback:** A type of feedback where the fed-back signal is in phase with the input signal, reinforcing the input. This is used in oscillators.
*   **Open-Loop Gain ($A_{OL}$):** The gain of an amplifier without any feedback. This is the inherent gain of the amplifier itself.
*   **Closed-Loop Gain ($A_{CL}$):** The gain of an amplifier with feedback applied.
*   **Feedback Factor ($\beta$):** The fraction of the output signal that is fed back to the input. It is often expressed as a voltage ratio or current ratio, depending on the feedback topology.
*   **Loop Gain ($A_{OL}\beta$):** The product of the open-loop gain and the feedback factor. This is a crucial parameter for stability analysis.
*   **Gain Stablity:** The ability of an amplifier to maintain its gain despite variations in component values or operating conditions.
*   **Bandwidth:** The range of frequencies over which an amplifier can operate effectively, typically defined by the points where the gain drops by 3 dB from its mid-band value.
*   **Noise:** Unwanted random signals that corrupt the desired signal.
*   **Distortion:** Non-linear alteration of the waveform of a signal. This can include harmonic distortion and intermodulation distortion.

---

### 1. The General Feedback Structure

A feedback amplifier can be broadly classified based on the type of signal sampled at the output and the type of signal injected into the input.

**General Block Diagram:**

```
      +-----[ Amplifier ]-----+
      |     (Open-Loop)       |
Input ----> A_OL ---------> Output
      ^                      |
      |                      |
      +------[ Feedback Network ]----->
              (Beta)
```

*   **Amplifier (A_OL):** This is the basic amplifying element (e.g., BJT or FET amplifier).
*   **Feedback Network ($\beta$):** This circuit samples a portion of the output signal and feeds it back to the input. It is usually designed to be linear and frequency-independent for basic analysis.
*   **Summing/Mixing Point:** This is where the input signal and the fed-back signal are combined. In a negative feedback system, they are subtracted (or added with opposite polarity).

**Types of Feedback based on Signal Sampling and Injection:**

1.  **Voltage-Series Feedback (Voltage Amplifier):**
    *   **Sampled Signal:** Output voltage ($V_o$).
    *   **Fed-back Signal:** Voltage ($V_f$).
    *   **Combination:** Input voltage ($V_s$) and $V_f$ are added in series at the input.
    *   **Effect:** Increases input impedance, decreases output impedance, increases bandwidth, reduces distortion, stabilizes gain.
    *   *Reference: Sedra & Smith, Chapter 12, Section 12.1.1*

2.  **Current-Series Feedback (Transconductance Amplifier):**
    *   **Sampled Signal:** Output current ($I_o$).
    *   **Fed-back Signal:** Voltage ($V_f$).
    *   **Combination:** Input voltage ($V_s$) and $V_f$ are added in series at the input.
    *   **Effect:** Increases input impedance, increases output impedance, increases bandwidth, reduces distortion, stabilizes gain.
    *   *Reference: Sedra & Smith, Chapter 12, Section 12.1.2*

3.  **Voltage-Shunt Feedback (Transresistance Amplifier):**
    *   **Sampled Signal:** Output voltage ($V_o$).
    *   **Fed-back Signal:** Current ($I_f$).
    *   **Combination:** Input current ($I_s$) and $I_f$ are added in shunt (parallel) at the input.
    *   **Effect:** Decreases input impedance, decreases output impedance, increases bandwidth, reduces distortion, stabilizes gain.
    *   *Reference: Sedra & Smith, Chapter 12, Section 12.1.3*

4.  **Current-Current Feedback (Current Amplifier):**
    *   **Sampled Signal:** Output current ($I_o$).
    *   **Fed-back Signal:** Current ($I_f$).
    *   **Combination:** Input current ($I_s$) and $I_f$ are added in shunt (parallel) at the input.
    *   **Effect:** Decreases input impedance, increases output impedance, increases bandwidth, reduces distortion, stabilizes gain.
    *   *Reference: Sedra & Smith, Chapter 12, Section 12.1.4*

**Basic Gain Equation for Negative Feedback:**

Let $V_{in}$ be the effective input voltage to the amplifier block, and $V_s$ be the source voltage.
The output of the amplifier is $V_o = A_{OL} V_{in}$.

The feedback voltage is $V_f = \beta V_o$.
The effective input voltage to the amplifier is the source voltage minus the feedback voltage:
$V_{in} = V_s - V_f$

Substituting $V_f$:
$V_{in} = V_s - \beta V_o$

Now, substitute $V_o = A_{OL} V_{in}$:
$V_{in} = V_s - \beta (A_{OL} V_{in})$
$V_{in} (1 + A_{OL}\beta) = V_s$
$V_{in} = \frac{V_s}{1 + A_{OL}\beta}$

The closed-loop gain ($A_{CL}$) is defined as the ratio of the output voltage to the source voltage:
$A_{CL} = \frac{V_o}{V_s} = \frac{A_{OL} V_{in}}{V_s} = A_{OL} \left( \frac{V_{in}}{V_s} \right)$
$A_{CL} = A_{OL} \left( \frac{1}{1 + A_{OL}\beta} \right)$
$A_{CL} = \frac{A_{OL}}{1 + A_{OL}\beta}$

**This is the fundamental equation for the closed-loop gain of a negative feedback amplifier.**

---

### 2. Effect of Negative Feedback on Gain

**Key Principle:** Negative feedback reduces the overall gain of the amplifier.

**Analysis:**
From the closed-loop gain equation: $A_{CL} = \frac{A_{OL}}{1 + A_{OL}\beta}$

*   The term $(1 + A_{OL}\beta)$ is called the **desensitivity factor** or **gain-improvement factor**. Let's denote it by $G = 1 + A_{OL}\beta$.
*   Since $A_{OL}$ and $\beta$ are positive for negative feedback, $G > 1$.
*   Therefore, $A_{CL} = \frac{A_{OL}}{G}$. This clearly shows that the closed-loop gain ($A_{CL}$) is less than the open-loop gain ($A_{OL}$).

**Conditions for Significant Gain Reduction:**

When $A_{OL}\beta \gg 1$ (i.e., the loop gain is much larger than 1), the gain equation can be approximated:
$A_{CL} \approx \frac{A_{OL}}{A_{OL}\beta} = \frac{1}{\beta}$

This is a significant result:
*   **Gain becomes dependent on the feedback network ($\beta$), which is typically designed to be stable and predictable.**
*   **The closed-loop gain becomes largely independent of the open-loop gain ($A_{OL}$) and its variations.**

**Benefits of Gain Stabilization:**

*   **Reduced Sensitivity to Parameter Variations:** Variations in transistor parameters (h_fe, gm), resistors, and capacitors within the amplifier that affect $A_{OL}$ have a much smaller effect on $A_{CL}$. This makes the amplifier more predictable and reliable.
    *   *Example:* If $A_{OL}$ changes by 10%, the change in $A_{CL}$ will be much less than 10% if $A_{OL}\beta \gg 1$.
    *   *Reference: Boylestad & Nashelsky, Chapter 14, Section 14.3*
*   **Improved Predictability:** The gain can be set accurately by selecting the components in the feedback network, making design easier.

**Example:**
Consider an amplifier with an open-loop gain ($A_{OL}$) of $10^5$ and a feedback factor ($\beta$) of $0.01$.
$A_{CL} = \frac{10^5}{1 + (10^5 \times 0.01)} = \frac{10^5}{1 + 1000} = \frac{10^5}{1001} \approx 99.9$

If the feedback factor were changed to $\beta = 0.001$:
$A_{CL} = \frac{10^5}{1 + (10^5 \times 0.001)} = \frac{10^5}{1 + 100} = \frac{10^5}{101} \approx 990.1$

Now, suppose $A_{OL}$ drops to $5 \times 10^4$ (a 50% reduction) with $\beta = 0.01$:
$A_{CL} = \frac{5 \times 10^4}{1 + (5 \times 10^4 \times 0.01)} = \frac{5 \times 10^4}{1 + 500} = \frac{5 \times 10^4}{501} \approx 99.8$

The closed-loop gain only changed by about 0.1% (from 99.9 to 99.8), while the open-loop gain changed by 50%. This demonstrates the gain stabilization effect.

**Important Point:** The cost of gain stabilization is a reduction in gain. The gain reduction is by a factor of $(1 + A_{OL}\beta)$.

---

### 3. Effect of Negative Feedback on Bandwidth

**Key Principle:** Negative feedback increases the bandwidth of an amplifier.

**Analysis:**
Let the open-loop gain ($A_{OL}$) be approximated by a single-pole response:
$A_{OL}(s) = \frac{A_{OL0}}{1 + s/\omega_H}$
where $A_{OL0}$ is the mid-band open-loop gain and $\omega_H$ is the open-loop upper half-power frequency (bandwidth).

The closed-loop gain is:
$A_{CL}(s) = \frac{A_{OL}(s)}{1 + A_{OL}(s)\beta}$
$A_{CL}(s) = \frac{\frac{A_{OL0}}{1 + s/\omega_H}}{1 + \frac{A_{OL0}}{1 + s/\omega_H}\beta}$
$A_{CL}(s) = \frac{A_{OL0}}{1 + s/\omega_H + A_{OL0}\beta}$
$A_{CL}(s) = \frac{A_{OL0}}{(1 + A_{OL0}\beta) + s/\omega_H}$

To find the closed-loop upper half-power frequency ($\omega_{H_{CL}}$), we rearrange the denominator:
$A_{CL}(s) = \frac{A_{CL0}}{1 + s/\omega_{H_{CL}}}$
where $A_{CL0} = \frac{A_{OL0}}{1 + A_{OL0}\beta}$ is the closed-loop mid-band gain.

Matching the denominator of the expression for $A_{CL}(s)$:
$\frac{A_{OL0}}{(1 + A_{OL0}\beta) + s/\omega_H} = \frac{A_{CL0}}{1 + s/\omega_{H_{CL}}} = \frac{\frac{A_{OL0}}{1 + A_{OL0}\beta}}{1 + s/\omega_{H_{CL}}}$

Equating the terms involving 's':
$\frac{1}{\omega_H} = \frac{1}{\omega_{H_{CL}}} \times (1 + A_{OL0}\beta)$
$\omega_{H_{CL}} = \omega_H (1 + A_{OL0}\beta)$

**Conclusion:** The closed-loop bandwidth ($\omega_{H_{CL}}$) is increased by a factor of $(1 + A_{OL0}\beta)$ compared to the open-loop bandwidth ($\omega_H$).

**Gain-Bandwidth Product (GBWP):**

For an amplifier with a single-pole response, the gain-bandwidth product is constant.
GBWP = $A_{OL0} \times \omega_H$

For the closed-loop amplifier:
GBWP$_{CL}$ = $A_{CL0} \times \omega_{H_{CL}}$
GBWP$_{CL}$ = $\left( \frac{A_{OL0}}{1 + A_{OL0}\beta} \right) \times \left( \omega_H (1 + A_{OL0}\beta) \right)$
GBWP$_{CL}$ = $A_{OL0} \times \omega_H$ = GBWP$_{OL}$

**This means that the Gain-Bandwidth Product (GBWP) of an amplifier remains constant, even with the addition of negative feedback.** If the gain is reduced by a factor of $G = (1 + A_{OL}\beta)$, the bandwidth is increased by the same factor $G$.

**Example:**
An amplifier has $A_{OL0} = 10^5$ and $\omega_H = 2\pi \times 10$ rad/s (bandwidth = 10 Hz).
GBWP = $10^5 \times 2\pi \times 10 \text{ rad/s} = 2\pi \times 10^6 \text{ rad/s}$.

With negative feedback, $\beta = 0.01$.
$A_{CL0} = \frac{10^5}{1 + 10^5 \times 0.01} = \frac{10^5}{1001} \approx 99.9$
$\omega_{H_{CL}} = \omega_H (1 + A_{OL0}\beta) = (2\pi \times 10) \times (1 + 1000) = 2\pi \times 10 \times 1001 = 2\pi \times 10010$ rad/s
Bandwidth$_{CL}$ = 10010 Hz $\approx$ 10 kHz.

The gain dropped from $10^5$ to $\approx 100$ (a factor of $\approx 1000$), and the bandwidth increased from 10 Hz to $\approx 10$ kHz (a factor of $\approx 1000$). The GBWP remains constant.

**Important Point:** Negative feedback trades gain for bandwidth. This is a fundamental trade-off.

*   *Reference: Bogart & Beasley, Chapter 11, Section 11.5*
*   *Reference: Razavi, Chapter 7, Section 7.3*

---

### 4. Effect of Negative Feedback on Noise Reduction

**Key Principle:** Negative feedback reduces the effect of noise generated within the amplifier.

**Analysis:**
Consider an amplifier with a desired signal gain $A_{OL}$. Let $N_i$ be the noise generated at the input stage of the amplifier, and $N_m$ be noise generated at any internal stage of the amplifier, which appears at the output with an effective gain of $A_{OL}$.

**Without Feedback (Open-Loop):**
The output signal is $S_o = A_{OL} S_{in}$.
The output noise is $N_o = A_{OL} N_i + N_{m_{eff}}$ (where $N_{m_{eff}}$ is the total effective noise from all internal stages).
The Signal-to-Noise Ratio (SNR) is $\frac{S_o}{N_o} = \frac{A_{OL} S_{in}}{A_{OL} N_i + N_{m_{eff}}}$.

**With Negative Feedback:**
The closed-loop gain is $A_{CL} = \frac{A_{OL}}{1 + A_{OL}\beta}$.
The feedback network does not amplify noise.

Let's consider the effect of noise sources separately:

*   **Input Noise ($N_i$):** This noise is amplified by the closed-loop gain. The noise contribution at the output due to input noise is $A_{CL} N_i = \frac{A_{OL}}{1 + A_{OL}\beta} N_i$.
    **Observation:** Input noise is amplified by the closed-loop gain, which is lower than the open-loop gain. Thus, the output contribution of input noise is reduced by the factor $(1 + A_{OL}\beta)$.

*   **Internal Noise ($N_m$):** Consider a noise source $N_{m}$ generated at an intermediate stage of the amplifier. Let the gain from this stage to the output be $A_{m}$. So, the noise at the output without feedback is $A_m N_m$.
    With negative feedback, the signal fed back to the input is $\beta V_o$. The amplifier effectively sees an input $V_s - \beta V_o$.
    If we consider the noise $N_m$ generated at some point, it will pass through subsequent stages of the amplifier, but it also gets fed back. The signal-to-noise ratio at the output of the feedback amplifier can be analyzed more formally.

A more insightful way to look at it is the effective input noise seen by the feedback amplifier. The input voltage to the amplifier block is $V_{in} = \frac{V_s}{1 + A_{OL}\beta}$ (ignoring internal noise for a moment).
If there is an internal noise source $N_{m}$ that would contribute $N_{m\_output}$ to the output without feedback, with feedback, this noise source also affects the feedback signal.

A common analysis shows that the effective input noise referred to the input terminals of the feedback amplifier is reduced by the factor $(1 + A_{OL}\beta)$.
Effective input noise with feedback $\approx \frac{\text{Effective input noise without feedback}}{1 + A_{OL}\beta}$.

Since the closed-loop gain is $A_{CL} = \frac{A_{OL}}{1 + A_{OL}\beta}$, and $A_{OL} \gg 1$, we can approximate $A_{CL} \approx \frac{1}{\beta}$.
The output signal is $S_{CL} = A_{CL} S_{in}$.
The output noise from internal sources, referred to the input and then amplified by $A_{CL}$, is $\frac{N_{internal\_input}}{1 + A_{OL}\beta} \times A_{CL} = \frac{N_{internal\_input}}{1 + A_{OL}\beta} \times \frac{A_{OL}}{1 + A_{OL}\beta}$. This is not quite right.

Let's use the concept of SNR improvement.
Consider an internal noise source $N_i$. If it appears at the output without feedback, the output is $A_{OL}N_i$. With feedback, the output due to this same noise source is $\frac{A_{OL}}{1+A_{OL}\beta} N_i = A_{CL}N_i$. This output is smaller than the open-loop output.

More formally, the output due to an internal noise source $N$ at a point where the gain to the output is $A_m$ is $A_m N$. With feedback, the effective input to the amplifier block is $V_{in} = V_s - \beta V_o$. If $N$ is present, $V_o = A_{OL}V_{in} + A_m N$.
Substituting $V_{in}$: $V_o = A_{OL}(V_s - \beta V_o) + A_m N$.
$V_o (1 + A_{OL}\beta) = A_{OL}V_s + A_m N$.
$V_o = \frac{A_{OL}}{1 + A_{OL}\beta} V_s + \frac{A_m}{1 + A_{OL}\beta} N$.
$V_o = A_{CL} V_s + \frac{A_m}{1 + A_{OL}\beta} N$.

The output noise contributed by the internal source $N$ is $\frac{A_m}{1 + A_{OL}\beta} N$.
The output noise due to this same source *without* feedback would be $A_m N$.
**Therefore, the noise from internal sources is reduced by the factor $(1 + A_{OL}\beta)$.**

**Overall Effect on SNR:**
The signal is amplified by $A_{CL}$, while internal noise is amplified by $A_{CL} / (1 + A_{OL}\beta)$, which is effectively a smaller gain for noise.
The net effect is an improvement in the Signal-to-Noise Ratio (SNR) by a factor of $(1 + A_{OL}\beta)$ for noise generated within the amplifier.

**Example:**
If $A_{OL} = 10^5$ and $\beta = 0.01$, then $(1 + A_{OL}\beta) = 1001$.
This means that noise generated within the amplifier is reduced in its effect at the output by a factor of 1001.

**Important Point:** Negative feedback is particularly effective at reducing noise generated by the amplifier itself. It does not reduce external noise that is already present at the input signal.

*   *Reference: Bell, Chapter 12, Section 12.4*
*   *Reference: Gopakumar, Chapter 10, Section 10.1.3*

---

### 5. Effect of Negative Feedback on Distortion

**Key Principle:** Negative feedback reduces harmonic and intermodulation distortion generated by the amplifier.

**Analysis:**
Distortion arises from the non-linearity of the amplifier's active devices. This non-linearity causes the output waveform to deviate from a scaled version of the input waveform. These deviations manifest as harmonics of the input frequency (harmonic distortion) and sum/difference frequencies (intermodulation distortion).

Consider a non-linear amplifier where the output $V_o$ can be expressed as a power series of the input $V_{in}$:
$V_o = A_{OL} V_{in} + a_2 V_{in}^2 + a_3 V_{in}^3 + ...$
where $a_2, a_3$, etc., are distortion coefficients.

Let the input signal be $V_s$ (for simplicity, assume no external noise or internal noise sources for this analysis).
The effective input to the amplifier is $V_{in} = V_s - \beta V_o$.

Substituting $V_o$ in the expression for $V_{in}$:
$V_{in} = V_s - \beta (A_{OL} V_{in} + a_2 V_{in}^2 + a_3 V_{in}^3 + ...)$
$V_{in} (1 + A_{OL}\beta) = V_s - \beta (a_2 V_{in}^2 + a_3 V_{in}^3 + ...)$
$V_{in} = \frac{V_s - \beta (a_2 V_{in}^2 + a_3 V_{in}^3 + ...)}{1 + A_{OL}\beta}$

If we assume that the feedback significantly reduces the overall signal level ($V_{in}$ is much smaller than if there were no feedback), the non-linear terms ($a_2 V_{in}^2$, etc.) become much smaller.
If we approximate $V_{in} \approx \frac{V_s}{1 + A_{OL}\beta}$ (assuming the non-linear terms are negligible for this approximation), then:

$V_{in} \approx \frac{V_s}{1 + A_{OL}\beta}$

Now, let's look at the output:
$V_o = A_{OL} V_{in} + a_2 V_{in}^2 + a_3 V_{in}^3 + ...$

Substitute the approximated $V_{in}$:
$V_o \approx A_{OL} \left(\frac{V_s}{1 + A_{OL}\beta}\right) + a_2 \left(\frac{V_s}{1 + A_{OL}\beta}\right)^2 + a_3 \left(\frac{V_s}{1 + A_{OL}\beta}\right)^3 + ...$
$V_o \approx A_{CL} V_s + a_2 \frac{1}{(1 + A_{OL}\beta)^2} V_s^2 + a_3 \frac{1}{(1 + A_{OL}\beta)^3} V_s^3 + ...$

The first term is the amplified signal. The subsequent terms represent distortion.
Notice that the distortion coefficients ($a_2, a_3$, etc.) are now divided by $(1 + A_{OL}\beta)^2$, $(1 + A_{OL}\beta)^3$, and so on.

**Conclusion:** The distortion components are reduced by the square of the desensitivity factor for the second-order distortion, the cube for the third-order distortion, and generally by powers of $(1 + A_{OL}\beta)$ for higher-order distortion. This is a significant reduction, especially when $(1 + A_{OL}\beta)$ is large.

**Example:**
If $(1 + A_{OL}\beta) = 1000$:
*   Second-order distortion is reduced by $(1000)^2 = 1,000,000$ (60 dB).
*   Third-order distortion is reduced by $(1000)^3 = 1,000,000,000$ (90 dB).

This makes negative feedback essential for applications requiring high fidelity and linearity, such as audio amplifiers and measurement instruments.

**Important Point:** Negative feedback reduces distortion by a factor that is the square, cube, or higher power of the desensitivity factor, depending on the order of the distortion.

*   *Reference: Sedra & Smith, Chapter 12, Section 12.2.1*
*   *Reference: Bogart & Beasley, Chapter 11, Section 11.5*

---

### 6. Summary of Effects of Negative Feedback

| Performance Characteristic | Effect of Negative Feedback                       | Reason/Equation                                        | Trade-off                                       |
| :------------------------- | :------------------------------------------------ | :----------------------------------------------------- | :---------------------------------------------- |
| **Gain**                   | Decreases                                         | $A_{CL} = \frac{A_{OL}}{1 + A_{OL}\beta}$              | Gain is traded for other improvements.          |
| **Gain Stability**         | Significantly improves (reduces sensitivity)      | $A_{CL} \approx \frac{1}{\beta}$ when $A_{OL}\beta \gg 1$ | Requires high open-loop gain.                   |
| **Bandwidth**              | Increases                                         | $\omega_{H_{CL}} = \omega_H (1 + A_{OL}\beta)$         | Bandwidth is traded for gain reduction.         |
| **Gain-Bandwidth Product** | Remains constant                                  | GBWP$_{CL}$ = GBWP$_{OL}$                              | Illustrates the gain-bandwidth trade-off.       |
| **Noise**                  | Reduces internal noise contribution to output     | Internal noise reduced by $(1 + A_{OL}\beta)$          | Does not reduce external input noise.           |
| **Distortion**             | Significantly reduces harmonic and intermodulation | Distortion terms reduced by powers of $(1 + A_{OL}\beta)$ | Essential for high-fidelity applications.       |
| **Input Impedance**        | Depends on topology (increase/decrease)           | Varies with feedback type (e.g., Voltage-Series increases) | Affects source loading.                         |
| **Output Impedance**       | Depends on topology (increase/decrease)           | Varies with feedback type (e.g., Voltage-Series decreases) | Affects load driving capability.                |
| **Stability**              | Improves (if properly designed)                   | Reduces sensitivity to parameter variations.           | Can lead to instability if phase shift is high. |

---

### Practice Questions and Exercises:

**Question 1 (Gain Stability):**
An amplifier has an open-loop gain of $A_{OL} = 2 \times 10^5$. It is used in a negative feedback configuration with $\beta = 0.005$.
a) Calculate the closed-loop gain ($A_{CL}$).
b) If the open-loop gain drops by 20% due to temperature variations, calculate the new closed-loop gain.
c) By what factor does the closed-loop gain remain more stable than the open-loop gain?

**Answer 1:**
a) $A_{CL} = \frac{2 \times 10^5}{1 + (2 \times 10^5 \times 0.005)} = \frac{2 \times 10^5}{1 + 1000} = \frac{2 \times 10^5}{1001} \approx 199.8$
b) New $A_{OL} = 2 \times 10^5 \times (1 - 0.20) = 1.6 \times 10^5$.
   New $A_{CL} = \frac{1.6 \times 10^5}{1 + (1.6 \times 10^5 \times 0.005)} = \frac{1.6 \times 10^5}{1 + 800} = \frac{1.6 \times 10^5}{801} \approx 199.75$
c) The factor is $(1 + A_{OL}\beta) = 1 + (2 \times 10^5 \times 0.005) = 1 + 1000 = 1001$.
   The closed-loop gain is approximately 1001 times less sensitive to variations in open-loop gain compared to the open-loop gain itself.

**Question 2 (Bandwidth):**
An amplifier has a mid-band open-loop gain of $A_{OL0} = 1000$ and an upper 3dB frequency of $f_H = 50$ kHz.
a) Calculate the open-loop gain-bandwidth product (GBWP).
b) The amplifier is configured with negative feedback such that the closed-loop gain $A_{CL0} = 10$.
c) Calculate the new upper 3dB frequency ($f_{H_{CL}}$) for the feedback amplifier.
d) What is the feedback factor ($\beta$)?

**Answer 2:**
a) GBWP$_{OL} = A_{OL0} \times f_H = 1000 \times 50 \text{ kHz} = 50 \text{ MHz}$ (using frequency in Hz for GBWP in Hz).
b) Given $A_{CL0} = 10$.
c) Since GBWP is constant, GBWP$_{CL} = A_{CL0} \times f_{H_{CL}}$.
   $50 \text{ MHz} = 10 \times f_{H_{CL}}$
   $f_{H_{CL}} = \frac{50 \text{ MHz}}{10} = 5 \text{ MHz}$.
d) $A_{CL0} = \frac{A_{OL0}}{1 + A_{OL0}\beta}$
   $10 = \frac{1000}{1 + 1000\beta}$
   $10(1 + 1000\beta) = 1000$
   $10 + 10000\beta = 1000$
   $10000\beta = 990$
   $\beta = \frac{990}{10000} = 0.099$.

**Question 3 (Distortion):**
An amplifier without feedback introduces a second-harmonic distortion of 5% when driven by a sinusoidal input. If this amplifier is used with negative feedback such that the loop gain $A_{OL}\beta = 500$, by what factor is the second-harmonic distortion reduced?

**Answer 3:**
The reduction factor for second-harmonic distortion is $(1 + A_{OL}\beta)^2$.
Reduction factor = $(1 + 500)^2 = (501)^2 = 251001$.
The new second-harmonic distortion would be $\frac{5\%}{251001} \approx 0.00002\%$.

---

### Important Points to Remember:

*   **Negative feedback is a powerful tool for improving amplifier performance.**
*   **The gain is reduced by a factor of $(1 + A_{OL}\beta)$, leading to increased gain stability.**
*   **Bandwidth is increased by the same factor $(1 + A_{OL}\beta)$, maintaining a constant Gain-Bandwidth Product.**
*   **Internal noise and distortion are significantly reduced by factors related to powers of $(1 + A_{OL}\beta)$.**
*   **The feedback factor ($\beta$) is crucial in determining the closed-loop performance.**
*   **High open-loop gain ($A_{OL}$) is desirable for maximizing the benefits of negative feedback.**
*   **The choice of feedback topology (voltage-series, current-series, etc.) affects input and output impedances.**
*   **Care must be taken to avoid instability due to excessive phase shift in the feedback loop at high frequencies.**

---

This comprehensive study note provides a thorough understanding of the effects of negative feedback on key amplifier parameters. The principles discussed are fundamental to the design and analysis of a wide range of analog circuits.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
