---
title: "Class C power amplifier efficiency and distortion (no analysis required)."
subject: "SOLID STATE DEVICES"
module: "Module 4: Oscillators: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35fa0"
status: "completed"
scrapedAt: "2026-05-23T16:19:02.204Z"
---
# SOLID STATE DEVICES - Module 4: Oscillators: Introduction

## Topic: Class C Power Amplifier Efficiency and Distortion

**Learning Outcomes:**

*   Understand the fundamental principles of Class C power amplifiers.
*   Explain the efficiency characteristics of Class C amplifiers.
*   Identify and describe the sources and types of distortion in Class C amplifiers.
*   Relate the operation of Class C amplifiers to their suitability for specific applications.

---

### 1. Introduction to Class C Power Amplifiers

Class C power amplifiers are designed to amplify signals in such a way that the active device (transistor) conducts for **less than 180 degrees** of the input signal cycle. This characteristic makes them highly efficient, but at the expense of signal fidelity.

**Key Concepts:**

*   **Conduction Angle ($\theta$):** The portion of the input signal cycle for which the active device conducts. In Class C amplifiers, $\theta < 180^\circ$.
*   **Biasing:** Class C amplifiers are biased **below cutoff**. This means that the DC bias voltage applied to the base (or gate) of the transistor is set such that the transistor is normally OFF. It only turns ON when the input signal voltage exceeds the cutoff voltage (Vbe(cutoff) for BJT, Vt for FET).
*   **Tuned Circuit (Resonant Circuit):** Class C amplifiers almost always employ a tuned circuit (typically an LC tank circuit) in the output. This circuit is tuned to the desired output frequency and acts as a band-pass filter, converting the pulsed output current into a sinusoidal output voltage.

**Comparison with other Classes of Amplifiers (Briefly):**

*   **Class A:** Conducts for $360^\circ$, high fidelity, low efficiency.
*   **Class B:** Conducts for $180^\circ$, better efficiency than Class A, can suffer from crossover distortion.
*   **Class AB:** Conducts for slightly more than $180^\circ$, compromise between Class A and Class B.
*   **Class C:** Conducts for $< 180^\circ$, highest efficiency, significant distortion.

**Suitability:**

Due to their high efficiency, Class C amplifiers are primarily used in **RF (Radio Frequency) power amplifiers**, particularly in transmitters where efficiency is crucial for minimizing power consumption and heat dissipation. They are generally **not suitable for audio amplification** due to the severe distortion they introduce.

---

### 2. Efficiency of Class C Power Amplifiers

The defining feature of Class C amplifiers is their high theoretical efficiency. This high efficiency stems directly from the fact that the active device is OFF for a significant portion of the input cycle, thus dissipating very little power when not actively amplifying.

**Key Concepts:**

*   **Power Efficiency ($\eta$):** Defined as the ratio of the AC output power ($P_{out(ac)}$) to the DC input power ($P_{in(dc)}$).
    $\eta = \frac{P_{out(ac)}}{P_{in(dc)}} \times 100\%$

*   **DC Input Power ($P_{in(dc)}$):** The power drawn from the DC power supply ($V_{CC}$).
    $P_{in(dc)} = V_{CC} \times I_{DC}$
    where $I_{DC}$ is the average DC current drawn from the supply.

*   **AC Output Power ($P_{out(ac)}$):** The power delivered to the load at the fundamental frequency. In a Class C amplifier with a tuned output circuit, this is primarily the power dissipated in the load resistor ($R_L$).

**Theoretical Efficiency:**

The theoretical efficiency of a Class C amplifier can be very high, approaching **78.5%** for a sinusoidal input and a properly designed tuned output circuit. However, in practice, efficiencies of **90% or even higher** are achievable in RF applications.

**Factors Contributing to High Efficiency:**

*   **Low Conduction Period:** The transistor is OFF for a large part of the cycle, minimizing power dissipation within the transistor itself.
*   **Pulsed Current:** The output current is a series of pulses. The tuned circuit effectively filters these pulses and reconstructs a sinusoidal output, absorbing energy during the ON periods and releasing it during the OFF periods.
*   **Zero Voltage Across Transistor When Current Flows (Ideal):** In an ideal Class C amplifier with a tuned circuit, the transistor ideally conducts only when the collector-emitter voltage is near zero, further reducing power dissipation.

**Bell, David A. (5/e, 2008) Perspective:**
Bell's text likely emphasizes how the tuned circuit is crucial for both signal reconstruction and efficiency. It explains that the tank circuit stores energy and releases it, effectively smoothing the pulsed current and delivering a continuous sinusoidal output to the load while the transistor dissipates minimal power.

---

### 3. Distortion in Class C Power Amplifiers

While highly efficient, Class C amplifiers are inherently **non-linear** due to the large portion of the input cycle where the transistor is OFF. This non-linearity leads to significant signal distortion.

**Key Concepts:**

*   **Harmonic Distortion:** The generation of frequencies that are integer multiples of the fundamental input frequency. This is the primary form of distortion in Class C amplifiers.
    *   **Second Harmonic Distortion:** Generation of a signal at $2f_0$, where $f_0$ is the fundamental frequency.
    *   **Third Harmonic Distortion:** Generation of a signal at $3f_0$.
    *   And so on...

*   **Intermodulation Distortion:** Occurs when multiple frequencies are present in the input signal, leading to the generation of new frequencies that are sums and differences of the input frequencies. This is less of a concern in single-frequency RF applications where Class C amplifiers are typically used.

**Sources of Distortion:**

*   **Non-linear Transfer Characteristic:** The transistor's inherent non-linear behavior, especially when biased well below cutoff.
*   **Clipping:** The input signal is effectively clipped at the cutoff voltage. This is not necessarily considered distortion in the context of Class C amplifiers if the tuned circuit can filter it out. However, the abrupt switching action itself contributes to harmonic content.
*   **Non-linearity of the Tuned Circuit:** While designed to be resonant at the fundamental frequency, the impedance of the tuned circuit can vary with frequency, leading to variations in the amplification of different harmonics.

**Effect of Distortion:**

*   **Degradation of Signal Quality:** In applications requiring high fidelity, the harmonic content generated by Class C amplifiers is unacceptable.
*   **Spurious Emissions:** In RF transmitters, harmonics and other spurious signals can interfere with adjacent communication channels. This necessitates the use of **filters** in the output stage of transmitters employing Class C amplifiers to remove unwanted harmonics.

**Sedra & Smith, K. C. (6/e, 2013) Perspective:**
Sedra and Smith would likely discuss the spectral content of the output waveform. They might explain that the pulsed output current of a Class C amplifier is rich in harmonics. The role of the tuned circuit is then presented as a highly selective filter that ideally passes only the fundamental frequency component to the load, effectively suppressing the harmonics and reconstructing a sinusoidal output. They might also touch upon the dependence of distortion on the conduction angle.

**Boylestad & Nashelsky (11/e, 2017) Perspective:**
Boylestad and Nashelsky would likely focus on the waveforms. They would illustrate the heavily pulsed collector current and explain how the tuned circuit "rings" at the resonant frequency, producing a sinusoidal output. The distortion would be implicitly understood from the non-sinusoidal nature of the pulsed current and the rapid switching of the transistor.

---

### 4. Examples and Applications

**Example Scenario:**

Consider an RF transmitter designed for a specific frequency, say 100 MHz. A Class C amplifier stage might be used to boost the power of the RF signal before it is sent to the antenna.

*   **Biasing:** The transistor would be biased such that it only turns on when the 100 MHz input signal exceeds a certain threshold.
*   **Conduction:** The transistor might conduct for only, say, 90 degrees of the 100 MHz cycle.
*   **Output Circuit:** An LC tank circuit, tuned to 100 MHz, would be connected to the collector. As the transistor switches on and off, it injects current pulses into the tank circuit.
*   **Output Waveform:** The tank circuit, due to its resonant properties, will oscillate at 100 MHz, producing a nearly sinusoidal output voltage across the load resistor connected to it. This output signal is then passed through further filtering if necessary.

**Applications:**

*   **RF Power Amplifiers:** In radio and television transmitters.
*   **Switching Power Supplies:** The switching action of Class C amplifiers is conceptually similar to that used in some switching regulators, though the design considerations are different.
*   **Frequency Multipliers:** While not their primary function, the harmonic-rich output of a Class C amplifier can be exploited in conjunction with tuned circuits to select specific harmonic frequencies.

---

### 5. Key Points to Remember

*   **Class C amplifiers are biased below cutoff.**
*   **Conduction angle is less than 180 degrees.**
*   **Highest efficiency among basic amplifier classes (theoretically up to 78.5%, practically much higher in RF applications).**
*   **Requires a tuned (LC tank) circuit at the output to reconstruct a sinusoidal waveform.**
*   **Significant harmonic distortion is inherent.**
*   **Primarily used in RF power amplification where efficiency is paramount.**
*   **Not suitable for high-fidelity audio applications.**
*   **Output filtering is often required to suppress unwanted harmonics in transmitters.**

---

### 6. Practice Questions and Exercises

**Question 1:**
Which of the following best describes the biasing condition of a Class C amplifier?
a) Biased at the midpoint of the active region.
b) Biased at cutoff.
c) Biased below cutoff.
d) Biased in the saturation region.

**Question 2:**
What is the primary advantage of using a Class C amplifier compared to Class A or Class B amplifiers?
a) Higher fidelity.
b) Lower distortion.
c) Higher efficiency.
d) Wider bandwidth.

**Question 3:**
What type of output circuit is typically used in a Class C amplifier and why?

**Question 4:**
True or False: Class C amplifiers are ideal for amplifying audio signals.

**Question 5:**
If a Class C amplifier is designed for an input signal of 50 MHz, what is the primary type of distortion expected at the output?

---

### 7. Answers to Practice Questions

**Answer 1:**
c) Biased below cutoff.

**Answer 2:**
c) Higher efficiency.

**Answer 3:**
A **tuned (LC tank) circuit** is typically used. It is necessary to:
1.  **Reconstruct a sinusoidal output:** The pulsed current from the transistor is filtered by the resonant circuit to produce a sinusoidal output waveform.
2.  **Improve efficiency:** The tuned circuit also helps in smoothing the power transfer and minimizing losses.

**Answer 4:**
False. Class C amplifiers introduce significant harmonic distortion, making them unsuitable for high-fidelity audio amplification.

**Answer 5:**
The primary type of distortion expected is **harmonic distortion**, meaning the output will contain significant amounts of frequencies that are multiples of 50 MHz (e.g., 100 MHz, 150 MHz, etc.).

---

### Alignment with Course Outcomes:

*   **CO1: Design and analyze the RC circuits and BJT biasing circuits (Knowledge Level: K4):** While this topic focuses on Class C, understanding biasing (below cutoff) is crucial. The concept of cutoff voltage is a prerequisite.
*   **CO2: Perform small signal and high frequency analysis of BJT amplifier circuits using equivalent models (Knowledge Level: K3):** Though no analysis is required for this specific topic, the understanding of how a transistor behaves (switching) is fundamental to grasping Class C operation.
*   **CO3: Design and analyze MOSFET amplifier circuits (Knowledge Level: K4):** The principles discussed for Class C apply to both BJT and FET amplifiers, with appropriate adjustments for gate/base and drain/collector.
*   **CO4: Design and analyze feedback amplifiers and oscillators (Knowledge Level: K4):** Understanding efficient power amplification is a stepping stone to designing and analyzing complex feedback systems and oscillators where power stages are often involved.
*   **CO5: Design power amplifiers and voltage regulator circuits (Knowledge Level: K4):** This topic directly addresses **power amplifiers** by explaining their efficiency and distortion characteristics, which are key design considerations for power amplifier stages. The principles of switching and efficiency are also relevant to voltage regulator circuit design.
