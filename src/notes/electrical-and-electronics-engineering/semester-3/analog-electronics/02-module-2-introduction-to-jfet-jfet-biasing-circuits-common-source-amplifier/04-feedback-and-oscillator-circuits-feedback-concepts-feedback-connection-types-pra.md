---
title: "Feedback and Oscillator circuits  – Feedback concepts – Feedback connection types – Practical Feedback circuits"
subject: "ANALOG ELECTRONICS"
module: "Module 2: Introduction to JFET  – JFET biasing circuits – Common Source Amplifier"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b60"
status: "completed"
scrapedAt: "2026-05-23T16:10:53.883Z"
---
# ANALOG ELECTRONICS: Module 2 - JFETs and Amplifiers (Feedback & Oscillators)

This module delves into the behavior of JFETs and their application in amplifier circuits, with a specific focus on how feedback principles are applied to improve amplifier performance and how oscillators generate repetitive waveforms.

**Module Title:** Introduction to JFET – JFET biasing circuits – Common Source Amplifier
**Topic:** Feedback and Oscillator circuits – Feedback concepts – Feedback connection types – Practical Feedback circuits

---

## Learning Outcomes:

By the end of this module, you will be able to:

*   Understand the fundamental concepts of feedback in electronic circuits.
*   Identify and differentiate between various feedback connection types.
*   Analyze the impact of feedback on amplifier characteristics.
*   Design and analyze practical feedback circuits for JFET amplifiers.
*   Understand the principles of oscillation and the conditions required for oscillation.
*   Analyze common oscillator circuits used with JFETs.

---

## Course Outcomes Addressed:

This module primarily contributes to:

*   **CO1: Design BJT and FET amplifier circuits (Knowledge Level: K3)** - Understanding feedback is crucial for designing high-performance FET amplifiers.
*   **CO2: Design Oscillator circuits (Knowledge Level: K3)** - This module directly covers the fundamental concepts and circuits for oscillation.

---

## Key Concepts and Definitions:

### 1. Feedback Concepts

**Definition of Feedback:**
Feedback is a process where a portion of the output signal of a system is fed back to the input. This fed-back signal can either be in phase with the input signal (positive feedback) or out of phase with the input signal (negative feedback).

**Purpose of Feedback:**
Feedback is employed to modify the characteristics of an amplifier, such as:
*   **Gain Stabilization:** Making the amplifier gain less dependent on device parameters and external component variations.
*   **Bandwidth Extension:** Increasing the frequency range over which the amplifier operates effectively.
*   **Reduction of Nonlinear Distortion:** Minimizing unwanted harmonic and intermodulation products.
*   **Reduction of Noise:** Suppressing internally generated noise.
*   **Control of Input and Output Impedances:** Adjusting the impedance levels to match source and load requirements.

**Types of Feedback:**

**a) Negative Feedback:**
*   **Definition:** The fed-back signal is out of phase with the input signal, effectively reducing the overall gain.
*   **Impact on Amplifier Characteristics:**
    *   **Decreases Gain:** $A_{f} = \frac{A}{1 + A\beta}$ (where $A$ is the open-loop gain, $A_f$ is the closed-loop gain, and $\beta$ is the feedback factor).
    *   **Increases Bandwidth:** $BW_f = BW(1 + A\beta)$.
    *   **Reduces Distortion and Noise:** The reduction in gain also reduces the effect of non-linearities and noise.
    *   **Stabilizes Gain:** The gain becomes primarily dependent on the feedback network components, which are often more stable than active device parameters.
    *   **Modifies Input and Output Impedances:**
        *   **Voltage-Series Feedback:** Increases input impedance, decreases output impedance.
        *   **Voltage-Shunt Feedback:** Decreases input impedance, decreases output impedance.
        *   **Current-Series Feedback:** Increases input impedance, increases output impedance.
        *   **Current-Shunt Feedback:** Decreases input impedance, increases output impedance.

**b) Positive Feedback:**
*   **Definition:** The fed-back signal is in phase with the input signal, effectively increasing the overall gain.
*   **Impact on Amplifier Characteristics:**
    *   **Increases Gain:** $A_{f} = \frac{A}{1 - A\beta}$. If $A\beta = 1$, the gain becomes infinite, leading to sustained oscillations.
    *   **Reduces Bandwidth:** $BW_f = BW(1 - A\beta)$.
    *   **Increases Distortion and Noise:** Amplifies existing non-linearities and noise.
    *   **Can Lead to Oscillation:** If the loop gain ($A\beta$) reaches unity with the correct phase, the circuit will oscillate.

**Important Point to Remember (Paynter, Chapter 9):** Negative feedback is primarily used for improving amplifier performance by stabilizing gain, increasing bandwidth, and reducing distortion. Positive feedback, when controlled, is the basis for oscillator circuits.

---

### 2. Feedback Connection Types

Feedback can be connected in four fundamental ways, based on whether the feedback signal is a voltage or current, and whether it is applied in series or parallel (shunt) with the input signal.

**a) Voltage-Series Feedback (Series-Shunt Feedback):**
*   **Signal Sampled:** Output voltage ($V_o$).
*   **Input Applied:** Input voltage ($V_i$) in series with the fed-back voltage.
*   **Circuit Configuration:** The output voltage is sampled. The feedback network consists of a voltage divider. The feedback voltage is connected in series with the input source.
*   **Effect on Impedances:** Increases input impedance ($Z_{in}$), decreases output impedance ($Z_{out}$).
*   **Application Example:** Common-emitter/source amplifier with voltage feedback.

**b) Voltage-Shunt Feedback (Shunt-Series Feedback):**
*   **Signal Sampled:** Output voltage ($V_o$).
*   **Input Applied:** Input current ($I_i$) in parallel (shunt) with the fed-back current.
*   **Circuit Configuration:** The output voltage is sampled. The feedback network consists of a voltage divider. The feedback current is injected in parallel with the input signal source.
*   **Effect on Impedances:** Decreases input impedance ($Z_{in}$), decreases output impedance ($Z_{out}$).
*   **Application Example:** Common-base/gate amplifier or transconductance amplifier.

**c) Current-Series Feedback (Series-Series Feedback):**
*   **Signal Sampled:** Output current ($I_o$).
*   **Input Applied:** Input voltage ($V_i$) in series with the fed-back voltage.
*   **Circuit Configuration:** The output current is sampled, often using a series resistor. The feedback voltage is generated across this resistor and applied in series with the input.
*   **Effect on Impedances:** Increases input impedance ($Z_{in}$), increases output impedance ($Z_{out}$).
*   **Application Example:** Common-base/gate amplifier or transresistance amplifier.

**d) Current-Shunt Feedback (Shunt-Shunt Feedback):**
*   **Signal Sampled:** Output current ($I_o$).
*   **Input Applied:** Input current ($I_i$) in parallel (shunt) with the fed-back current.
*   **Circuit Configuration:** The output current is sampled, often using a series resistor. The feedback current is generated and injected in parallel with the input signal source.
*   **Effect on Impedances:** Decreases input impedance ($Z_{in}$), increases output impedance ($Z_{out}$).
*   **Application Example:** Common-emitter/source amplifier with current feedback.

**Important Point to Remember (Boylestad & Nashelsky, Chapter 12):** The choice of feedback connection type significantly impacts the input and output impedance of the amplifier, which is critical for proper impedance matching in cascaded amplifier stages or when connecting to sources and loads.

---

### 3. Practical Feedback Circuits (Focus on JFET Common Source Amplifier)

**General Structure:**
A feedback amplifier consists of an amplifier stage (e.g., JFET Common Source) and a feedback network. The feedback network samples the output and injects a portion of it back to the input.

**Example: Voltage-Series Feedback in a JFET Common Source Amplifier:**

*   **Amplifier Stage:** JFET in a common-source configuration.
*   **Feedback Network:** Typically a voltage divider network connected to the output. A portion of the output voltage is fed back to the input gate terminal.

**Circuit Diagram Illustration:**

*(Imagine a standard JFET common source amplifier with a resistor from drain to VDD, a resistor from source to ground (or bypass capacitor), and a gate resistor connected to a DC bias voltage. For feedback, a capacitor or a voltage divider from the drain node to the gate (often through a series resistor) would represent the feedback path.)*

**Analysis of Effects of Voltage-Series Feedback on Common Source Amplifier:**

*   **Gain:** The voltage gain of a common-source amplifier without feedback is approximately $A_v = -g_m R_D$ (where $R_D$ is the effective drain resistance). With voltage-series feedback, the closed-loop gain is $A_{vf} = \frac{A_v}{1 - A_v \beta}$. The feedback factor $\beta$ depends on the components in the feedback network.
*   **Input Impedance:** In a common-source amplifier, the input impedance is primarily determined by the gate resistor ($R_G$). Voltage-series feedback does not significantly alter the input impedance.
*   **Output Impedance:** Without feedback, the output impedance of a common-source amplifier is approximately $R_D$ (the parallel combination of $R_D$ and the JFET's $r_d$). Voltage-series feedback reduces the output impedance by a factor of $(1 + A_v \beta)$.
*   **Bandwidth:** The bandwidth is increased by the factor $(1 + A_v \beta)$.
*   **Distortion and Noise:** Reduced by the feedback factor.

**Practical Considerations for Implementing Feedback:**

*   **Stability:** Ensuring that the feedback loop does not become unstable and oscillate, especially at higher frequencies. This requires careful design of the feedback network and consideration of parasitic capacitances.
*   **Frequency Response:** The feedback network should be designed to achieve the desired frequency response. For instance, specific capacitor values can be used to tailor the bandwidth.
*   **Component Tolerance:** The components in the feedback network should have low tolerances to ensure predictable performance, as the closed-loop gain is often determined by these components.

**Reference (Neaman, Chapter 8):** Neaman's "Electronic Circuits: Analysis and Design" provides detailed mathematical treatments of how feedback affects amplifier characteristics. For instance, he derives the exact expressions for gain, input impedance, and output impedance for various feedback topologies, which can be applied to JFET circuits.

---

## Oscillators

**Definition of an Oscillator:**
An oscillator is an electronic circuit that generates a repetitive, time-varying electrical signal, typically a sine wave, square wave, or triangular wave. Oscillators do not require an external AC input signal; they produce their own AC output.

**Conditions for Oscillation (Barkhausen Criterion):**
For a circuit to oscillate, two conditions must be met:

1.  **Loop Gain Magnitude:** The magnitude of the loop gain must be equal to or greater than unity: $|A\beta| \ge 1$.
2.  **Phase Shift:** The total phase shift around the feedback loop must be $0^\circ$ or an integer multiple of $360^\circ$ (i.e., $0^\circ, 360^\circ, 720^\circ, \dots$). This means the fed-back signal must be in phase with the input signal.

**How Oscillators Work:**
An oscillator circuit typically consists of:
1.  **An Amplifier:** Provides the necessary gain ($A$) to compensate for losses in the feedback network and maintain oscillation.
2.  **A Feedback Network:** Selects a specific frequency and provides the necessary phase shift to satisfy the Barkhausen criterion.

**Types of Oscillators (based on feedback network):**

*   **LC Oscillators:** Utilize inductor (L) and capacitor (C) components in the feedback network to determine the oscillation frequency. Examples include:
    *   **Hartley Oscillator:** Uses a tapped inductor or two inductors in series.
    *   **Colpitts Oscillator:** Uses a tapped capacitor (two capacitors in series).
    *   **Clapp Oscillator:** A variation of the Colpitts oscillator with an additional series capacitor for improved frequency stability.

*   **RC Oscillators:** Utilize resistor (R) and capacitor (C) components in the feedback network. Examples include:
    *   **Phase-Shift Oscillator:** Employs multiple RC sections to produce a $180^\circ$ phase shift at the desired frequency.
    *   **Wien-Bridge Oscillator:** Uses a lead-lag network of resistors and capacitors.

**JFETs in Oscillators:**
JFETs can be used as the active amplifying element in any of these oscillator configurations. Their characteristics, such as high input impedance and transconductance, make them suitable for many oscillator designs.

**Example: Colpitts Oscillator using a JFET:**

*   **Amplifier:** JFET in a common-source configuration.
*   **Feedback Network:** Two capacitors ($C_1$, $C_2$) and an inductor ($L$). The capacitors form a voltage divider at the output, and the inductor resonates with the equivalent capacitance to set the frequency.
*   **Frequency of Oscillation:** $f_0 \approx \frac{1}{2\pi\sqrt{L(C_1 || C_2)}}$ (where $C_1 || C_2 = \frac{C_1 C_2}{C_1 + C_2}$).
*   **Phase Shift:** The resonant circuit provides the necessary phase shift for oscillation.

**Important Point to Remember (Gayakward, Chapter 15):** Oscillator design heavily relies on the Barkhausen criterion. Any circuit that provides voltage gain and a positive feedback loop with a loop gain of unity or greater at a specific frequency will oscillate.

---

## Practical Feedback Circuits (Continued)

While the module mentions "Practical Feedback circuits" broadly, in the context of JFET biasing and common source amplifiers, this implies applying feedback techniques to improve the performance of these amplifier configurations.

**1. Stabilizing Gain with Negative Feedback:**

*   **Problem:** The transconductance ($g_m$) of a JFET can vary significantly with temperature and between devices. This variation directly affects the amplifier's voltage gain ($A_v \approx -g_m R_D$).
*   **Solution:** Employ negative feedback. A common method is **source degeneration**, where a resistor ($R_S$) is placed in series with the source of the JFET.

    *   **Circuit:**
        *(Imagine a common-source JFET amplifier with $R_S$ in series with the source terminal, connecting to ground. A bypass capacitor ($C_S$) might be placed in parallel with $R_S$ for AC signals to provide high gain at higher frequencies, but when removed or omitted, $R_S$ provides AC negative feedback.)*

    *   **Analysis of Source Degeneration (AC voltage-series feedback):**
        *   The signal voltage across $R_S$ is proportional to the output current, acting as a feedback voltage in series with the input gate-source voltage.
        *   The effective transconductance with source degeneration is $g_{m(eff)} = \frac{g_m}{1 + g_m R_S}$.
        *   The closed-loop voltage gain becomes $A_{vf} \approx \frac{-g_{m(eff)} R_D}{1} = \frac{-g_m R_D}{1 + g_m R_S}$.
        *   **Effect:** The gain is reduced, but it becomes less dependent on the initial $g_m$. If $g_m R_S \gg 1$, then $g_{m(eff)} \approx \frac{1}{R_S}$, and the gain $A_{vf} \approx -\frac{R_D}{R_S}$, making it very stable and predictable.
        *   **Input Impedance:** Remains high, determined by $R_G$.
        *   **Output Impedance:** Increases due to the feedback.

**2. Bandwidth Extension:**

*   As seen in the gain formula $A_f = \frac{A}{1 + A\beta}$, a higher feedback factor ($A\beta$) not only stabilizes gain but also increases bandwidth. By incorporating appropriate feedback networks, the upper cutoff frequency of a JFET amplifier can be extended.

**3. Impedance Matching:**

*   **Increasing Input Impedance:** For voltage-series feedback, the input impedance is further increased, which is beneficial for driving subsequent stages without loading the previous stage.
*   **Decreasing Output Impedance:** For voltage-series feedback, the output impedance is reduced. This is advantageous for driving low-impedance loads, as the amplifier can deliver more current without its output voltage dropping significantly.

**Reference (Floyd, Chapter 13):** Floyd's "Fundamentals of Analog Circuits" provides practical examples and circuit diagrams of amplifiers with negative feedback, illustrating how components like source resistors and feedback networks are implemented.

---

## Practice Questions/Exercises:

**Question 1 (Conceptual):**
What are the two primary conditions required for an electronic circuit to oscillate?
*   **Answer:**
    1.  The magnitude of the loop gain ($|A\beta|$) must be equal to or greater than unity.
    2.  The total phase shift around the feedback loop must be $0^\circ$ or $360^\circ$ (or any integer multiple of $360^\circ$).

**Question 2 (Analysis):**
A JFET common-source amplifier has an open-loop voltage gain of $A_v = -100$. It is modified to include negative voltage-series feedback with a feedback factor $\beta = -0.05$. Calculate the closed-loop voltage gain ($A_{vf}$). What happens to the bandwidth?
*   **Answer:**
    *   The closed-loop voltage gain is calculated using the formula $A_{vf} = \frac{A_v}{1 + A_v \beta}$.
    *   $A_{vf} = \frac{-100}{1 + (-100)(-0.05)} = \frac{-100}{1 + 5} = \frac{-100}{6} \approx -16.67$.
    *   Since it's negative feedback ($A_v\beta > 0$), the bandwidth will increase by a factor of $(1 + A_v \beta) = 6$.

**Question 3 (Design - Conceptual):**
How can source degeneration be used to stabilize the gain of a JFET common-source amplifier?
*   **Answer:**
    By placing a resistor ($R_S$) in series with the JFET's source terminal, a portion of the output current flows through $R_S$, creating a voltage drop that is out of phase with the input gate-source voltage. This acts as AC voltage-series negative feedback. As the JFET's transconductance ($g_m$) increases, the output current increases, the feedback voltage across $R_S$ increases, which in turn reduces the effective gate-source voltage, thus counteracting the initial increase in $g_m$ and stabilizing the overall gain.

**Question 4 (Oscillator - Conceptual):**
Identify two common types of LC oscillators.
*   **Answer:**
    1.  Hartley Oscillator
    2.  Colpitts Oscillator

**Question 5 (Practical Application):**
For a JFET common-source amplifier, if you want to significantly reduce the amplifier's gain to make it less sensitive to variations in the JFET's $g_m$, which type of feedback would you primarily employ, and what common technique is used for this purpose in common-source amplifiers?
*   **Answer:**
    You would primarily employ **negative feedback**. The common technique used for this purpose in common-source JFET amplifiers is **source degeneration**, which involves placing a resistor in series with the source terminal.

---

## Important Points to Remember:

*   **Feedback is a loop:** A portion of the output is returned to the input.
*   **Negative Feedback:** Stabilizes gain, increases bandwidth, reduces distortion and noise, modifies impedances.
*   **Positive Feedback:** Increases gain, can lead to oscillation when loop gain is unity and phase is $0^\circ$/$360^\circ$.
*   **Barkhausen Criterion:** Essential for oscillation ($|A\beta| \ge 1$ and $0^\circ/360^\circ$ phase shift).
*   **Feedback Connection Types:** Voltage-Series, Voltage-Shunt, Current-Series, Current-Shunt – each affects impedances differently.
*   **Source Degeneration:** A practical implementation of voltage-series negative feedback in common-source JFET amplifiers to stabilize gain.
*   **Oscillators require:** An amplifier and a frequency-selective feedback network.
*   **JFETs:** Can be used as active elements in both feedback amplifiers and oscillator circuits.

---

This study material covers the fundamental concepts of feedback and oscillators, their application in JFET circuits, and connects these concepts to the stated learning and course outcomes. Remember to refer to the provided textbooks for detailed mathematical derivations and additional examples.
