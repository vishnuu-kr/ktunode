---
title: "Feedback topologies: Effect of positive and negative feedback on gain"
subject: "SOLID STATE DEVICES"
module: "Module 3: MOSFETs "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f91"
status: "completed"
scrapedAt: "2026-05-23T16:18:51.570Z"
---
# SOLID STATE DEVICES: Module 3: MOSFETs

## Topic: Feedback Topologies: Effect of Positive and Negative Feedback on Gain

**Course Outcomes Alignment:**

*   **CO4: Design and analyze feedback amplifiers and oscillators (Knowledge Level: K4)** - This topic directly addresses the analysis and understanding of feedback mechanisms in amplifier circuits.

**Learning Outcomes:**

*   Understand the fundamental concepts of feedback in electronic circuits.
*   Differentiate between positive and negative feedback.
*   Analyze the impact of negative feedback on amplifier gain, bandwidth, input impedance, and output impedance.
*   Analyze the impact of positive feedback on amplifier gain and stability.
*   Identify common feedback topologies used with MOSFET amplifiers.
*   Apply feedback principles to design stable and predictable MOSFET amplifier circuits.

---

### 1. Introduction to Feedback in Electronic Circuits

Feedback is a process where a portion of the output signal of an amplifier is returned to the input. This feedback can be either:

*   **Negative Feedback:** The feedback signal is out of phase with the input signal, opposing the original input.
*   **Positive Feedback:** The feedback signal is in phase with the input signal, reinforcing the original input.

Feedback is a crucial concept in amplifier design as it allows for the control and modification of amplifier characteristics such as gain, bandwidth, linearity, and impedance.

**Key Concepts:**

*   **Forward Amplifier (A):** The basic amplifier without feedback.
*   **Feedback Network (β):** The circuit that samples a portion of the output and returns it to the input.
*   **Feedback Factor (β):** The ratio of the feedback signal to the output signal.
*   **Closed-loop Gain (A_f):** The gain of the amplifier with feedback.
*   **Open-loop Gain (A_ol):** The gain of the amplifier without feedback.

**References:**

*   **Boylested & Nashelsky:** Chapter 17 focuses on feedback amplifiers, detailing the fundamental principles and their impact on amplifier performance.
*   **Sedra & Smith:** Chapter 13 discusses feedback topologies and their effects on amplifier characteristics in detail.

---

### 2. Negative Feedback

In negative feedback, a fraction of the output signal is fed back to the input in such a way that it subtracts from the original input signal. This effectively reduces the overall gain but offers significant advantages in terms of stability and performance.

**2.1. Effect on Gain:**

The closed-loop gain ($A_f$) of an amplifier with negative feedback is given by:

$A_f = \frac{A}{1 + A\beta}$

Where:
*   $A$ is the open-loop gain.
*   $\beta$ is the feedback factor.

**Analysis:**

*   **If $A\beta \gg 1$ (Strong Negative Feedback):**
    $A_f \approx \frac{A}{A\beta} = \frac{1}{\beta}$
    In this case, the closed-loop gain becomes **independent of the open-loop gain ($A$)**. This is a major advantage as it makes the gain predictable and less susceptible to variations in the active device characteristics (like MOSFET parameters). The gain is primarily determined by the passive components in the feedback network, which are usually more stable.

*   **General Case:** The gain is reduced by a factor of $(1 + A\beta)$. This factor is often called the **desensitivity factor** or **feedback factor**.

**Example (Conceptual):**

Consider a MOSFET amplifier with an open-loop gain of $A = 100$. If a negative feedback network with a feedback factor $\beta = 0.1$ is implemented, the closed-loop gain is:

$A_f = \frac{100}{1 + 100 \times 0.1} = \frac{100}{1 + 10} = \frac{100}{11} \approx 9.09$

The gain has been reduced from 100 to approximately 9.09.

**2.2. Effect on Bandwidth:**

Negative feedback **increases the bandwidth** of the amplifier by the same factor by which it reduces the gain.

Bandwidth (BW) of the closed-loop amplifier:
$BW_f = BW_{ol} (1 + A\beta)$

Where:
*   $BW_f$ is the closed-loop bandwidth.
*   $BW_{ol}$ is the open-loop bandwidth.

This trade-off between gain and bandwidth is fundamental to negative feedback. The gain-bandwidth product (GBW) remains approximately constant:

$GBW = A \times BW_{ol} \approx A_f \times BW_f$

**Example (Conceptual):**

If the open-loop bandwidth of the previous example was $BW_{ol} = 10$ kHz, and the gain reduction factor $(1 + A\beta)$ is 11, then the new bandwidth is:

$BW_f = 10 \text{ kHz} \times 11 = 110 \text{ kHz}$

The bandwidth has increased tenfold.

**2.3. Effect on Input and Output Impedance:**

The effect of negative feedback on input and output impedance depends on the type of sampling (voltage or current) and the type of mixing (series or shunt) at the input.

**a) Series-Voltage Negative Feedback:**
*   **Input Impedance ($Z_{in\_f}$):** **Increases** by a factor of $(1 + A\beta)$.
    $Z_{in\_f} = Z_{in\_ol} (1 + A\beta)$
    This is because the feedback voltage is in series with the input signal, which tends to oppose changes in input voltage, requiring a larger input current for the same input voltage.

*   **Output Impedance ($Z_{out\_f}$):** **Decreases** by a factor of $(1 + A\beta)$.
    $Z_{out\_f} = \frac{Z_{out\_ol}}{1 + A\beta}$
    This is achieved by injecting a feedback voltage in series with the output, which effectively opposes the output voltage generated by the amplifier, thus reducing the net output voltage for a given output current.

**b) Shunt-Voltage Negative Feedback:**
*   **Input Impedance ($Z_{in\_f}$):** **Increases** by a factor of $(1 + A\beta)$.
    $Z_{in\_f} = Z_{in\_ol} (1 + A\beta)$
    The feedback current is shunted across the input, opposing the input current, thus increasing the input impedance.

*   **Output Impedance ($Z_{out\_f}$):** **Remains relatively unchanged** (or increases slightly depending on the topology). For common shunt-voltage feedback, the effect is minimal.

**c) Series-Current Negative Feedback:**
*   **Input Impedance ($Z_{in\_f}$):** **Increases** by a factor of $(1 + A\beta)$.
    $Z_{in\_f} = Z_{in\_ol} (1 + A\beta)$
    The feedback voltage is in series with the input, opposing the input current, increasing input impedance.

*   **Output Impedance ($Z_{out\_f}$):** **Increases** by a factor of $(1 + A\beta)$.
    $Z_{out\_f} = Z_{out\_ol} (1 + A\beta)$
    The feedback current is in series with the output, opposing the output current, increasing output impedance.

**d) Shunt-Current Negative Feedback:**
*   **Input Impedance ($Z_{in\_f}$):** **Decreases** by a factor of $(1 + A\beta)$.
    $Z_{in\_f} = \frac{Z_{in\_ol}}{1 + A\beta}$
    The feedback current is shunted across the input, adding to the input current, thus decreasing the input impedance.

*   **Output Impedance ($Z_{out\_f}$):** **Decreases** by a factor of $(1 + A\beta)$.
    $Z_{out\_f} = \frac{Z_{out\_ol}}{1 + A\beta}$
    The feedback current is shunted across the output, effectively providing a lower impedance path for the output signal.

**Reference:**

*   **Bell:** Chapter 10 provides a comprehensive analysis of the effects of negative feedback on amplifier gain, bandwidth, input impedance, and output impedance with clear examples.

**2.4. Other Benefits of Negative Feedback:**

*   **Reduced Distortion:** Negative feedback reduces non-linear distortion by cancelling out a portion of the distortion generated by the amplifier.
*   **Increased Linearity:** The amplifier's output becomes more proportional to the input signal.
*   **Reduced Noise:** Intrinsic noise generated within the amplifier is also reduced by the feedback factor.

**Important Point to Remember:** Negative feedback generally trades gain for improved stability, linearity, bandwidth, and impedance characteristics.

---

### 3. Positive Feedback

In positive feedback, a fraction of the output signal is fed back to the input in such a way that it is in phase with the original input signal, reinforcing it.

**3.1. Effect on Gain:**

The closed-loop gain ($A_f$) of an amplifier with positive feedback is given by:

$A_f = \frac{A}{1 - A\beta}$

Where:
*   $A$ is the open-loop gain.
*   $\beta$ is the feedback factor.

**Analysis:**

*   As $A\beta$ approaches 1 (from below), the denominator $(1 - A\beta)$ approaches zero. This causes the closed-loop gain ($A_f$) to become **very large**, approaching infinity.
*   When $A\beta = 1$, the gain is theoretically infinite, leading to **oscillation**. The circuit will generate its own output signal without any input signal.
*   If $A\beta > 1$, the loop gain is greater than unity, and the circuit will generally oscillate with an amplitude determined by circuit non-linearities.

**3.2. Effect on Bandwidth:**

Positive feedback **decreases the bandwidth** of the amplifier. As the gain increases due to positive feedback, the bandwidth decreases proportionally (assuming the gain-bandwidth product concept still loosely applies in the pre-oscillation region).

**3.3. Effect on Input and Output Impedance:**

The effect of positive feedback on impedance is the opposite of negative feedback:

*   **Input Impedance:** **Decreases** (for series mixing) or **increases** (for shunt mixing) depending on the topology.
*   **Output Impedance:** **Increases** (for series mixing) or **decreases** (for shunt mixing) depending on the topology.

**3.4. Stability and Oscillation:**

The primary consequence of positive feedback is its potential to cause oscillation. A circuit with positive feedback will oscillate if the loop gain ($A\beta$) is equal to or greater than unity (at the frequency of interest).

*   **Barkhausen Criterion:** For sustained oscillation, two conditions must be met:
    1.  The **magnitude of the loop gain** must be at least unity: $|A\beta| \geq 1$.
    2.  The **total phase shift** around the feedback loop must be 0 degrees or an integer multiple of 360 degrees.

**Key Point for Oscillators:** Positive feedback is deliberately used in oscillators to generate periodic waveforms. The amplifier gain ($A$) and the feedback network ($\beta$) are designed such that the Barkhausen criterion is met at a specific frequency.

**Reference:**

*   **Millman & Halkias:** Chapter 21 discusses oscillators, which are a prime application of positive feedback, explaining the Barkhausen criteria in detail.

**Important Point to Remember:** Positive feedback, if not carefully controlled, leads to instability and oscillation. It is rarely used in amplifiers for gain stabilization but is essential for oscillator design.

---

### 4. Feedback Topologies for MOSFETs

The principles of feedback apply equally to MOSFET amplifiers. The specific implementation of feedback will influence the effect on gain, impedance, and stability. Common feedback topologies for MOSFET amplifiers include:

**4.1. Voltage-Series Feedback (Series-Voltage):**

*   **Sampling:** Output voltage is sampled.
*   **Mixing:** Feedback voltage is mixed in series with the input voltage.
*   **Effect:**
    *   Gain: Decreases (stabilized).
    *   Bandwidth: Increases.
    *   Input Impedance: Increases significantly.
    *   Output Impedance: Decreases.
*   **Example Circuit:** Source degeneration resistor ($R_S$) in a common-source amplifier provides voltage-series feedback if the resistor is unbypassed. A portion of the output voltage across $R_D$ (related to the drain current) is fed back to the source terminal.

**4.2. Current-Series Feedback (Series-Current):**

*   **Sampling:** Output current is sampled.
*   **Mixing:** Feedback voltage (derived from output current) is mixed in series with the input voltage.
*   **Effect:**
    *   Gain: Decreases (stabilized).
    *   Bandwidth: Increases.
    *   Input Impedance: Increases significantly.
    *   Output Impedance: Increases.
*   **Example Circuit:** Using a resistor in the source terminal ($R_S$) of a common-source amplifier. The voltage across $R_S$ is proportional to the source current (which is approximately equal to the drain current). This voltage is fed back in series with the gate-source voltage.

**4.3. Voltage-Shunt Feedback (Shunt-Voltage):**

*   **Sampling:** Output voltage is sampled.
*   **Mixing:** Feedback current is mixed in shunt with the input current.
*   **Effect:**
    *   Gain: Decreases (stabilized).
    *   Bandwidth: Increases.
    *   Input Impedance: Decreases.
    *   Output Impedance: Decreases.
*   **Example Circuit:** A feedback resistor from the drain to the gate of a common-source amplifier. A portion of the output voltage is fed back as a current to the input node.

**4.4. Current-Shunt Feedback (Shunt-Current):**

*   **Sampling:** Output current is sampled.
*   **Mixing:** Feedback current is mixed in shunt with the input current.
*   **Effect:**
    *   Gain: Decreases (stabilized).
    *   Bandwidth: Increases.
    *   Input Impedance: Decreases.
    *   Output Impedance: Remains relatively unchanged or increases slightly.
*   **Example Circuit:** Using a resistor in the drain terminal or a resistor in the source terminal that is bypassed for AC signals, where the current is somehow sampled and fed back as a current to the input.

**Reference:**

*   **Sedra & Smith:** Chapter 13 provides detailed diagrams and analysis for these four basic feedback topologies, which are applicable to MOSFETs.
*   **Neamen:** Chapter 9 delves into feedback amplifier analysis and design, illustrating various configurations.

---

### 5. Design Considerations for MOSFET Amplifiers with Feedback

*   **Gain Stabilization:** To achieve a predictable gain, strong negative feedback ($A\beta \gg 1$) is often employed. The gain is then determined primarily by the feedback network components.
*   **Bandwidth Extension:** For applications requiring a wider frequency response, negative feedback is essential.
*   **Impedance Matching:** Feedback can be used to tailor input and output impedances for optimal matching with source and load impedances.
*   **Stability Analysis:** For circuits employing positive feedback (oscillators) or potentially unstable negative feedback configurations at high frequencies, stability must be analyzed to ensure proper operation. Techniques like Bode plots and Nyquist stability criterion are used.
*   **Component Selection:** The choice of feedback components (resistors, capacitors) is critical as they determine the feedback factor ($\beta$) and, consequently, the closed-loop gain and stability. MOSFETs themselves have parasitic capacitances that can affect the feedback loop at high frequencies.

---

### Practice Questions and Exercises

**Question 1:**
A MOSFET common-source amplifier has an open-loop voltage gain of $A = -200$ and an open-loop bandwidth of $BW_{ol} = 50$ kHz. If a voltage-series negative feedback network with a feedback factor of $\beta = -0.05$ is implemented, calculate the closed-loop gain and the new bandwidth.

**Answer 1:**
*   **Closed-loop Gain ($A_f$):**
    $A_f = \frac{A}{1 + A\beta} = \frac{-200}{1 + (-200) \times (-0.05)} = \frac{-200}{1 + 10} = \frac{-200}{11} \approx -18.18$
*   **New Bandwidth ($BW_f$):**
    $BW_f = BW_{ol} (1 + A\beta) = 50 \text{ kHz} \times (1 + 10) = 50 \text{ kHz} \times 11 = 550 \text{ kHz}$

**Question 2:**
In a MOSFET amplifier circuit, positive feedback is applied with $A = 500$ and $\beta = 0.002$.
a) Calculate the loop gain ($A\beta$).
b) Determine the closed-loop gain if the loop gain is less than 1.
c) What is likely to happen if the loop gain ($A\beta$) becomes equal to 1?

**Answer 2:**
a) Loop Gain ($A\beta$):
   $A\beta = 500 \times 0.002 = 1$
b) If the loop gain is less than 1 (e.g., $A\beta = 0.9$):
   $A_f = \frac{A}{1 - A\beta} = \frac{500}{1 - 0.9} = \frac{500}{0.1} = 5000$
   The gain is significantly amplified.
c) If $A\beta = 1$, the denominator $(1 - A\beta)$ becomes zero, leading to an infinite gain. This signifies that the circuit will **oscillate**.

**Question 3:**
Consider a common-source MOSFET amplifier with a source resistor $R_S$ that is unbypassed.
a) What type of feedback is provided by $R_S$?
b) How does this feedback affect the input impedance of the amplifier?
c) How does it affect the output impedance?

**Answer 3:**
a) The unbypassed source resistor $R_S$ provides **current-series negative feedback**. The voltage across $R_S$ ($I_D R_S$) is proportional to the drain current and is fed back in series with the gate-source voltage.
b) This feedback **increases the input impedance** significantly, making it more ideal for interfacing with voltage sources.
c) This feedback also **increases the output impedance**, which can be beneficial in some amplifier stages.

---

### Important Points to Remember:

*   **Negative Feedback:**
    *   **Gain:** Reduces gain, makes it stable and predictable ($A_f \approx 1/\beta$).
    *   **Bandwidth:** Increases bandwidth.
    *   **Impedance:** Generally increases input impedance and decreases output impedance (depending on topology).
    *   **Distortion & Noise:** Reduces distortion and noise.
*   **Positive Feedback:**
    *   **Gain:** Increases gain.
    *   **Stability:** Leads to instability and oscillation when $A\beta \geq 1$ (Barkhausen criterion).
    *   **Application:** Used in oscillators.
*   **Topologies:** The effect of feedback depends on how the output is sampled (voltage/current) and how it's mixed with the input (series/shunt).
*   **MOSFETs:** Feedback principles are directly applicable to MOSFET amplifier design, allowing for control over gain, bandwidth, and impedance.

---
This concludes the study notes on feedback topologies and their effect on gain for MOSFETs. Remember to refer to the provided textbooks for more detailed derivations and circuit examples.
