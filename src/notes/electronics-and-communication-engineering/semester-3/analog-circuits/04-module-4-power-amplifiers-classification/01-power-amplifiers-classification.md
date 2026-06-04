---
title: "Power amplifiers: Classification"
subject: "ANALOG CIRCUITS"
module: "Module 4: Power amplifiers: Classification"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2f7"
status: "completed"
scrapedAt: "2026-05-23T17:44:22.059Z"
---
# ANALOG CIRCUITS - Module 4: Power Amplifiers: Classification

## Introduction to Power Amplifiers

Power amplifiers are designed to deliver a significant amount of power to a load. Unlike small-signal amplifiers, their primary goal is to increase the power level of an input signal, not just its voltage or current amplitude. This often involves handling larger signals that can drive loudspeakers, antennas, or other power-consuming devices.

**Key Concept:** The efficiency and distortion characteristics of a power amplifier are crucial design parameters, as they directly impact the output power delivered and the quality of the amplified signal.

## Classification of Power Amplifiers

Power amplifiers are broadly classified based on their operating principles, specifically concerning the conduction angle of the active devices (transistors). The conduction angle determines how much of the input waveform the amplifier amplifies. This classification directly impacts the amplifier's efficiency and distortion.

The most common classification is based on **Class A, Class B, Class AB, Class C, Class D, Class E, Class F**, etc.

### Class A Power Amplifiers

**Definition:** A Class A amplifier is biased such that the active device conducts for the entire 360 degrees of the input signal cycle.

**Characteristics:**

*   **Conduction Angle:** 360°
*   **Operation:** The active device is always "on" and conducts throughout the entire input waveform cycle.
*   **Bias Point:** The quiescent collector current ($I_{CQ}$) is set to a significant value, typically around the midpoint of the load line, to ensure operation in the linear region for the full cycle.
*   **Efficiency:**
    *   **Theoretical Maximum Efficiency:** 25% (for a resistive load) or 50% (for a transformer-coupled load).
    *   **Reason for low efficiency:** The active device dissipates power even when there is no input signal (quiescent power dissipation).
*   **Distortion:** Generally exhibits very low distortion, making it suitable for high-fidelity audio applications where distortion is critical.
*   **Output Power:** Relatively low output power capability compared to other classes for a given device size.
*   **Applications:** Low-power audio amplifiers, drivers for other amplifier stages, high-fidelity audio systems.

**Circuit Diagram (Conceptual - BJT):**

```
      Vcc
       |
       Rc
       |
      +-----+----- Output
      |     |
    Collector |
      |     |
   Transistor |
      |     |
    Emitter |
      |     |
      Re    -
      |     |
     GND   GND
```

*   **Bias:** The quiescent collector current ($I_{CQ}$) and collector-emitter voltage ($V_{CEQ}$) are set by the emitter resistor ($R_E$) and base biasing resistors. For Class A, $I_{CQ}$ is usually chosen to be large enough to ensure operation over the full cycle.
*   **Load:** The load ($R_L$) is typically connected in series with the collector or via a transformer.

**Example (Conceptual):**
Imagine a Class A amplifier amplifying a sine wave. The transistor will conduct for the positive half-cycle and the negative half-cycle of the sine wave, effectively amplifying the entire waveform without clipping.

**Textbook References:**
*   **Boylestad & Nashelsky:** Discusses Class A amplifiers in the context of large-signal amplifier analysis, focusing on load lines and maximum power transfer.
*   **Sedra & Smith:** Explains Class A operation and its limitations in terms of efficiency and output power, often illustrating with transformer-coupled configurations.

**Important Point to Remember:** Class A amplifiers provide excellent linearity but at the cost of very poor efficiency.

---

### Class B Power Amplifiers

**Definition:** A Class B amplifier is biased such that the active device conducts for only 180 degrees of the input signal cycle.

**Characteristics:**

*   **Conduction Angle:** 180°
*   **Operation:** The active device is biased at or near cutoff. It conducts only when the input signal is positive (for an NPN transistor) or negative (for a PNP transistor).
*   **Efficiency:**
    *   **Theoretical Maximum Efficiency:** 78.5%
    *   **Reason for higher efficiency:** The active device dissipates very little power when there is no input signal (near-zero quiescent current).
*   **Distortion:** Suffers from **crossover distortion**, which occurs when the signal switches between the positive and negative half-cycles. This is because the device takes some finite time to turn on and off, leading to a dead zone around the zero crossing.
*   **Output Power:** Can deliver higher output power than Class A for a given device.
*   **Applications:** Often used in **push-pull configurations** to overcome crossover distortion.

**Circuit Diagram (Conceptual - Single-ended):**

A single-ended Class B amplifier is rarely used due to severe crossover distortion. It's typically implemented in a push-pull configuration.

**Class B Push-Pull Amplifier:**

**Definition:** A Class B push-pull amplifier uses two active devices (e.g., transistors) operating in Class B, with one amplifying the positive half-cycle and the other amplifying the negative half-cycle.

**Characteristics of Push-Pull:**

*   **Operation:** One transistor conducts for the positive half-cycle, and the other conducts for the negative half-cycle.
*   **Crossover Distortion:** Still present, though less severe than in a single-ended Class B amplifier, as the transition between devices can cause a brief period of no conduction.
*   **Efficiency:** Achieves high efficiency, approaching the theoretical maximum of 78.5%.
*   **Output Power:** Can deliver significant output power.
*   **Applications:** Common in audio amplifiers and RF power amplifiers.

**Circuit Diagram (Conceptual - BJT Push-Pull):**

```
      Vcc
       |
      +-----+----- Output
      |     |
   Transistor 1 |
      |     |
    Collector |
      |     |
      |     +---- Load
      |     |
    Collector |
      |     |
   Transistor 2 |
      |     |
      |     |
     GND   GND
```

*   **Input:** The input signal is applied to the bases of both transistors, often through a phase-splitting transformer or complementary input stages.
*   **Output:** The outputs of the two transistors are combined, with one handling the positive swing and the other the negative swing.
*   **Bias:** The transistors are biased just at cutoff.

**Textbook References:**
*   **Boylestad & Nashelsky:** Explains the operation of Class B amplifiers, highlighting the crossover distortion and the advantages of push-pull configurations.
*   **Sedra & Smith:** Provides a detailed analysis of Class B push-pull amplifiers, including methods to minimize crossover distortion.
*   **Bogart, Beasley, Rico:** Likely covers Class B operation, focusing on its efficiency and distortion characteristics in the context of power amplifier design.

**Important Point to Remember:** Class B offers high efficiency but suffers from crossover distortion, making it suitable for push-pull configurations.

---

### Class AB Power Amplifiers

**Definition:** A Class AB amplifier is biased such that the active device conducts for more than 180 degrees but less than 360 degrees of the input signal cycle.

**Characteristics:**

*   **Conduction Angle:** Between 180° and 360° (typically around 180° + a small portion of the other half-cycle).
*   **Operation:** A small quiescent current is established, allowing the device to conduct for slightly more than half the input cycle.
*   **Efficiency:**
    *   **Theoretical Maximum Efficiency:** Between Class B (78.5%) and Class A (25% or 50%). Typically around 50-60%.
    *   **Reason for efficiency:** Better than Class A because quiescent power dissipation is reduced, but lower than Class B because there is a small quiescent current.
*   **Distortion:** Significantly **reduces crossover distortion** compared to Class B by ensuring that the devices are always slightly "on." The linearity is improved over Class B.
*   **Output Power:** Good output power capability.
*   **Applications:** The most common class used in audio amplifiers due to its good balance of efficiency, linearity, and output power.

**Circuit Diagram (Conceptual - BJT Push-Pull with biasing):**

```
      Vcc
       |
      +-----+----- Output
      |     |
   Transistor 1 |
      |     |
    Collector |
      |     |
      |     +---- Load
      |     |
    Collector |
      |     |
   Transistor 2 |
      |     |
      |     |
     GND   GND
```

*   **Bias:** The key is the biasing mechanism that provides a small forward bias to the base-emitter junction, ensuring a small quiescent collector current ($I_{CQ}$). This is often achieved using diodes or adjustable resistors in the biasing network.
*   **Diodes for Biasing:** Two diodes in series can be used to provide a small voltage drop, forward-biasing the bases of the transistors, thus setting a small quiescent current.

**Textbook References:**
*   **Boylestad & Nashelsky:** Explains how biasing is adjusted in Class AB to minimize crossover distortion and improve linearity.
*   **Sedra & Smith:** Details the techniques for biasing Class AB amplifiers, such as using diode-connected transistors or VBE multipliers.
*   **Razavi:** Might discuss Class AB amplifiers in the context of integrated circuit design, emphasizing the trade-offs between linearity and quiescent current.

**Important Point to Remember:** Class AB offers a compromise between Class A's linearity and Class B's efficiency, making it the most popular choice for audio applications.

---

### Class C Power Amplifiers

**Definition:** A Class C amplifier is biased such that the active device conducts for less than 180 degrees of the input signal cycle.

**Characteristics:**

*   **Conduction Angle:** Less than 180° (can be as low as 90° or even less).
*   **Operation:** The active device is biased far beyond cutoff. It conducts only for a small portion of the input cycle when the input signal exceeds the threshold voltage.
*   **Efficiency:**
    *   **Theoretical Maximum Efficiency:** Can be very high, potentially exceeding 90%.
    *   **Reason for high efficiency:** Very low quiescent power dissipation and minimal conduction time.
*   **Distortion:** Exhibits very high distortion. The output is a series of pulses, not a faithful amplification of the input waveform.
*   **Output Power:** Can deliver very high output power efficiently.
*   **Applications:** Primarily used in **RF (Radio Frequency) tuned amplifiers** and **frequency multipliers**, where the output circuit (tank circuit) is resonant and filters out the harmonics, reconstructing a sinusoidal output. Not suitable for audio amplification.

**Circuit Diagram (Conceptual - Tuned Amplifier):**

```
      Vcc
       |
      +-----+----- Output (to tuned circuit)
      |     |
    Collector |
      |     |
   Transistor |
      |     |
    Emitter |
      |     |
      Re    -  (often bypassed for AC)
      |     |
     GND   GND

    Tuned Circuit (LC Tank)
    connected to the output
```

*   **Bias:** The base is biased negatively relative to the emitter (for NPN) so that the transistor only turns on when the positive peaks of the input signal are applied.
*   **Tuned Circuit:** The output is connected to a parallel LC resonant circuit (tank circuit). This circuit "rings" at its resonant frequency, effectively filtering out the unwanted harmonics generated by the pulsed output and producing a clean sinusoidal output at the desired frequency.

**Textbook References:**
*   **Boylestad & Nashelsky:** Introduces Class C amplifiers and their application in tuned circuits for RF applications.
*   **Sedra & Smith:** Details the operation of Class C amplifiers in resonant circuits, explaining how the output is shaped.
*   **Bogart, Beasley, Rico:** Likely covers Class C amplifiers in the context of RF circuits, emphasizing efficiency and harmonic generation.

**Important Point to Remember:** Class C amplifiers are highly efficient but only suitable for RF applications with resonant output circuits due to their high distortion.

---

### Other Classes of Power Amplifiers (Brief Overview)

While Class A, B, AB, and C are the most fundamental, other classes have been developed to further optimize efficiency and performance, particularly in modern electronics.

#### Class D Amplifiers

*   **Principle:** Operates as a **switching amplifier**. The input signal is converted into a pulse-width modulated (PWM) or pulse-density modulated (PDM) signal. The power transistors act as switches, rapidly turning on and off to deliver power to the load.
*   **Efficiency:** Extremely high efficiency (often > 90%) because the transistors are either fully ON (low voltage drop, high current) or fully OFF (no current).
*   **Distortion:** Requires careful design to minimize switching noise and distortion. An output low-pass filter is essential to recover the amplified analog signal.
*   **Applications:** Widely used in audio amplifiers (Class D audio amplifiers), switching power supplies, and wireless transmitters.

#### Class E Amplifiers

*   **Principle:** Designed for **high-frequency applications**. Utilizes resonant techniques and specific biasing to achieve near-zero voltage switching (ZVS) and near-zero current switching (ZCS).
*   **Efficiency:** Very high efficiency, especially at high frequencies.
*   **Applications:** RF power amplifiers, wireless communication systems.

#### Class F Amplifiers

*   **Principle:** Uses **harmonic termination** at the output to increase efficiency. The output circuit is designed to present specific impedances at the fundamental frequency and its harmonics.
*   **Efficiency:** High efficiency, often surpassing Class E.
*   **Applications:** RF power amplifiers, high-power transmitters.

**Textbook References:**
*   **Sedra & Smith:** May touch upon the principles of switching amplifiers like Class D.
*   **Razavi:** Likely covers switched-mode power amplifiers in detail due to their relevance in modern integrated circuits.

**Important Point to Remember:** Classes D, E, and F represent advancements in power amplifier efficiency, especially for switching and high-frequency applications.

---

## Power Amplifier Performance Metrics

When evaluating power amplifiers, several key performance metrics are considered:

1.  **Efficiency ($\eta$)**: The ratio of output signal power ($P_{out}$) to the total DC power supplied ($P_{DC}$).
    $$ \eta = \frac{P_{out}}{P_{DC}} \times 100\% $$
    Higher efficiency means less power is wasted as heat, leading to smaller heatsinks and lower power consumption.

2.  **Output Power ($P_{out}$)**: The maximum power the amplifier can deliver to the load without excessive distortion.

3.  **Distortion**: Any unwanted alteration of the input signal's waveform.
    *   **Harmonic Distortion:** Introduction of frequencies that are integer multiples of the fundamental frequency.
    *   **Intermodulation Distortion (IMD):** Generation of new frequencies that are sums and differences of two or more input frequencies.
    *   **Crossover Distortion:** Specific to Class B and Class AB, occurring at the zero-crossing of the signal.

4.  **Power Dissipation ($P_D$)**: The power consumed by the active device itself, primarily dissipated as heat.
    $$ P_D = P_{DC} - P_{out} $$

5.  **Frequency Response**: The range of frequencies over which the amplifier can operate effectively.

6.  **Gain**: The amplification factor, typically expressed as voltage gain ($A_v$) or power gain ($A_p$).

---

## Summary Table of Power Amplifier Classes

| Class | Conduction Angle | Theoretical Max. Efficiency | Primary Distortion | Typical Applications |
| :---- | :--------------- | :-------------------------- | :----------------- | :------------------- |
| A     | 360°             | 25% (Resistive), 50% (Transformer) | Low                | High-fidelity audio, Drivers |
| B     | 180°             | 78.5%                       | Crossover          | Push-pull audio, RF |
| AB    | 180° - 360°      | ~60%                        | Reduced Crossover  | Audio amplifiers     |
| C     | < 180°           | > 90%                       | High               | RF tuned amplifiers, Frequency multipliers |
| D     | Switching        | > 90%                       | Switching noise    | Audio, SMPS, Wireless |

---

## Practice Questions and Answers

**Question 1:** A Class A power amplifier is designed to deliver an output power of 10W to a load. What is the minimum DC power supply required if the amplifier's efficiency is 20%?

**Answer:**
Efficiency ($\eta$) = $\frac{P_{out}}{P_{DC}}$
$0.20 = \frac{10W}{P_{DC}}$
$P_{DC} = \frac{10W}{0.20} = 50W$
Therefore, the minimum DC power supply required is 50W.

**Question 2:** Which class of power amplifier suffers from crossover distortion, and in which configuration is this distortion most effectively reduced?

**Answer:**
Class B power amplifiers suffer from crossover distortion. This distortion is most effectively reduced when Class B amplifiers are used in a **push-pull configuration**.

**Question 3:** What is the main advantage of a Class AB amplifier over a Class B amplifier in audio applications?

**Answer:**
The main advantage of a Class AB amplifier over a Class B amplifier in audio applications is the **significant reduction in crossover distortion**. This is achieved by biasing the transistors to conduct for slightly more than 180 degrees, ensuring a small quiescent current and smoother transitions between the active devices.

**Question 4:** For high-efficiency radio frequency (RF) power amplification where linearity is not the primary concern, which class of amplifier is most suitable, and why?

**Answer:**
A **Class C amplifier** is most suitable for high-efficiency RF power amplification where linearity is not the primary concern. This is because Class C amplifiers have very high efficiency due to their small conduction angle, but they produce significant distortion. In RF applications, a tuned output circuit (like a tank circuit) filters out the harmonics and reconstructs a clean sinusoidal output at the desired frequency.

**Question 5:** Explain the fundamental operating principle of a Class D amplifier.

**Answer:**
A Class D amplifier operates as a **switching amplifier**. The analog input signal is converted into a pulse-width modulated (PWM) or pulse-density modulated (PDM) signal. Power transistors are used as switches, rapidly turning on and off to pass current to the load. An output low-pass filter is then used to recover the amplified analog signal from the high-frequency switching waveform. This switching operation leads to very high efficiencies.

---

## Key Concepts to Remember

*   **Conduction Angle:** The primary basis for classifying power amplifiers.
*   **Efficiency vs. Linearity:** A fundamental trade-off in power amplifier design. Class A is linear but inefficient; Class C is efficient but non-linear. Class AB offers a good compromise.
*   **Crossover Distortion:** A characteristic problem of Class B amplifiers when used in single-ended configurations or with insufficient biasing.
*   **Push-Pull Configuration:** A common technique used with Class B and Class AB amplifiers to improve output power and linearity.
*   **Tuned Circuits:** Essential for Class C amplifiers to filter out harmonics and achieve a clean output in RF applications.
*   **Switching Amplifiers:** Class D amplifiers utilize switching to achieve very high efficiencies, making them popular for audio and power supply applications.
*   **Quiescent Current:** The DC current flowing through the active device when there is no input signal. It directly impacts both the bias point and the power dissipation.

---

## Alignment with Course Outcomes (COs)

*   **CO4: Design power amplifiers and voltage regulator circuits.**
    *   This module directly addresses the "power amplifiers" part of CO4. Understanding the classification of power amplifiers is the foundational step towards designing them. Students learn the characteristics, advantages, and disadvantages of each class, which informs design choices based on desired performance (efficiency, linearity, output power). The study of different classes provides insights into how to bias transistors for specific output characteristics, a key aspect of power amplifier design.

This comprehensive set of notes covers the classification of power amplifiers, their operating principles, efficiency, distortion, and typical applications, as well as key performance metrics. It also includes practice questions with answers to reinforce learning and highlights important concepts. The content aligns with the learning objectives and the broader course outcome of designing power amplifiers.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
