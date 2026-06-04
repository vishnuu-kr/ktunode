---
title: "The four basic feedback topologies"
subject: "ANALOG CIRCUITS"
module: "Module 3: Feedback amplifiers: The general feedback structure"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2f2"
status: "completed"
scrapedAt: "2026-05-23T17:44:18.822Z"
---
# Module 3: Feedback Amplifiers - The General Feedback Structure
## Topic: The Four Basic Feedback Topologies

This module delves into the fundamental concept of feedback in analog circuits, exploring how it can be used to improve amplifier performance. We will focus on understanding the general feedback structure and the characteristics of its four basic topologies.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the general block diagram of a feedback amplifier.
*   Identify and differentiate between the four basic feedback topologies: voltage-series, current-series, voltage-shunt, and current-shunt.
*   Explain the basic mechanism of each feedback topology in sampling and mixing.
*   Relate the choice of feedback topology to the desired output signal and input signal types.
*   Recognize how feedback affects amplifier parameters like gain, bandwidth, and distortion.

### Key Concepts and Definitions:

*   **Feedback:** The process of feeding a portion of the output signal back to the input of an amplifier.
*   **Forward Gain ($A$):** The gain of the amplifier without any feedback.
*   **Feedback Factor ($\beta$):** The fraction of the output signal that is fed back to the input.
*   **Closed-Loop Gain ($A_f$):** The overall gain of the amplifier with feedback.
*   **Sampling:** The process of extracting a portion of the output signal to be fed back.
*   **Mixing:** The process of combining the sampled feedback signal with the original input signal.
*   **Negative Feedback:** Feedback that opposes the original input signal, leading to improved stability and reduced distortion.
*   **Positive Feedback:** Feedback that reinforces the original input signal, often leading to oscillations. (This topic primarily focuses on negative feedback for amplifier stabilization).

### The General Feedback Structure:

The general feedback amplifier can be represented by the following block diagram:

```
      +-----------+       +-----------+
Input -->| Amplifier |----->|   Output  |
      +-----------+       +-----------+
           ^                   |
           |                   |
           | Feedback Network  |
           |                   |
           +-------------------+
```

In a feedback amplifier, a portion of the output signal is fed back to the input through a feedback network. This feedback signal is then "mixed" with the original input signal. The type of feedback is determined by how the output signal is sampled and how it is mixed with the input signal.

**Key components of the feedback loop:**

1.  **Amplifier:** The core amplification stage (e.g., a BJT or FET amplifier).
2.  **Feedback Network:** A circuit (usually passive components like resistors, capacitors, inductors) that samples the output signal and provides the feedback factor ($\beta$).
3.  **Summing/Difference Amplifier:** A circuit that combines the input signal with the feedback signal.

### The Four Basic Feedback Topologies:

The four basic feedback topologies arise from the combination of how the output is sampled and how the feedback signal is mixed with the input.

**1. Voltage-Series Feedback (Series-Shunt Feedback)**

*   **Output Sampling:** The feedback signal is proportional to the **output voltage**. This means the feedback network senses the voltage across the output terminals.
*   **Input Mixing:** The feedback signal is **added in series** with the input voltage. The feedback voltage is subtracted from the input voltage to produce the effective input voltage to the amplifier.

**Block Diagram Representation:**

```
       +---------+     +--------+
Vin ---| Summing |-----| Amp. A |---- Vout
       | Network |     +--------+
       +---------+         |
           ^               |
           |               |
      Vf <----+-------------+
```

*   **Feedback Network:** Senses $V_{out}$ and produces $V_f$. $V_f = \beta V_{out}$.
*   **Summing Network:** $V_{in}' = V_{in} - V_f$ (subtractive mixing).
*   **Effective Input:** $V_{in}'$.
*   **Output Signal Type:** Voltage.
*   **Input Signal Type:** Voltage.
*   **Key Effect:** Reduces input impedance, increases output impedance, stabilizes voltage gain, reduces distortion.
*   **Textbook References:**
    *   **Sedra & Smith:** Discusses voltage-series feedback in Chapter 12, highlighting its impact on amplifier input and output impedances.
    *   **Boylestad & Nashelsky:** Introduces feedback topologies and their effects on gain and impedance, often with illustrative examples.

**Example:** A common-emitter BJT amplifier with a voltage divider across the output that feeds back to the input emitter resistor (bypassed by a capacitor for AC analysis to prevent AC feedback).

**2. Current-Series Feedback (Series-Series Feedback)**

*   **Output Sampling:** The feedback signal is proportional to the **output current**. This means the feedback network senses the current flowing out of the output terminals, typically by a resistor in series with the load.
*   **Input Mixing:** The feedback signal is **added in series** with the input voltage. The feedback voltage ($V_f = \beta I_{out}$) is subtracted from the input voltage.

**Block Diagram Representation:**

```
       +---------+     +--------+
Vin ---| Summing |-----| Amp. A |---- Io * RL = Vout
       | Network |     +--------+
       +---------+         |
           ^               |
           |               |
      Vf <----+-------------+
```

*   **Feedback Network:** Senses $I_{out}$ and produces $V_f$. $V_f = \beta I_{out}$.
*   **Summing Network:** $V_{in}' = V_{in} - V_f$.
*   **Effective Input:** $V_{in}'$.
*   **Output Signal Type:** Current (or voltage across a series load).
*   **Input Signal Type:** Voltage.
*   **Key Effect:** Increases input impedance, increases output impedance, stabilizes current gain, reduces distortion.
*   **Textbook References:**
    *   **Bogart, Beasley, Rico:** Explains series-series feedback and its impact on impedance, often using circuit examples like common-base or common-collector configurations modified for current sensing.
    *   **Razavi:** Provides a concise overview of feedback topologies, emphasizing how current-series feedback leads to high input and output impedances, making it suitable for transconductance amplifiers.

**Example:** A common-base BJT amplifier with a resistor placed in series with the collector, and this resistor is used to sense the output current. The voltage across this resistor is fed back to the input emitter.

**3. Voltage-Shunt Feedback (Shunt-Shunt Feedback)**

*   **Output Sampling:** The feedback signal is proportional to the **output voltage**.
*   **Input Mixing:** The feedback signal is **added in shunt (parallel)** with the input current. The feedback current ($I_f = \beta V_{out}$) is subtracted from the input current.

**Block Diagram Representation:**

```
       +---------+     +--------+
Iin -->| Summing |-----| Amp. A |---- Vout
       | Network |     +--------+
       +---------+         |
           ^               |
           |               |
      If <----+-------------+
```

*   **Feedback Network:** Senses $V_{out}$ and produces $I_f$. $I_f = \beta V_{out}$.
*   **Summing Network:** $I_{in}' = I_{in} - I_f$.
*   **Effective Input:** $I_{in}'$.
*   **Output Signal Type:** Voltage.
*   **Input Signal Type:** Current.
*   **Key Effect:** Reduces input impedance, reduces output impedance, stabilizes transconductance gain, reduces distortion.
*   **Textbook References:**
    *   **Bell:** Illustrates voltage-shunt feedback with circuits like common-collector amplifiers where the output voltage is sensed and fed back as a current to the input base.
    *   **Meganathan:** Details the analysis of shunt-shunt feedback, showing how it effectively reduces both input and output resistances, making it suitable for current amplifiers.

**Example:** A common-collector (emitter follower) BJT amplifier where a portion of the output voltage is fed back as a current to the base, typically through a resistor.

**4. Current-Shunt Feedback (Shunt-Series Feedback)**

*   **Output Sampling:** The feedback signal is proportional to the **output current**.
*   **Input Mixing:** The feedback signal is **added in shunt (parallel)** with the input current. The feedback current ($I_f = \beta I_{out}$) is subtracted from the input current.

**Block Diagram Representation:**

```
       +---------+     +--------+
Iin -->| Summing |-----| Amp. A |---- Io * RL = Vout
       | Network |     +--------+
       +---------+         |
           ^               |
           |               |
      If <----+-------------+
```

*   **Feedback Network:** Senses $I_{out}$ and produces $I_f$. $I_f = \beta I_{out}$.
*   **Summing Network:** $I_{in}' = I_{in} - I_f$.
*   **Effective Input:** $I_{in}'$.
*   **Output Signal Type:** Current.
*   **Input Signal Type:** Current.
*   **Key Effect:** Reduces input impedance, increases output impedance, stabilizes current gain, reduces distortion.
*   **Textbook References:**
    *   **Gopakumar:** Provides detailed mathematical derivations for current-shunt feedback, emphasizing its ability to maintain high output impedance while reducing input impedance.
    *   **Sedra & Smith:** Discusses current-shunt feedback in the context of transresistance amplifiers, where it is used to control current gain and improve linearity.

**Example:** A common-base BJT amplifier where the output current is sensed (e.g., by a resistor in the emitter) and fed back as a current to the input base.

---

### Summary Table of Feedback Topologies:

| Topology        | Output Sampling | Input Mixing | Signal Type (Output/Input) | Typical Impedance Changes (Input/Output) |
| :-------------- | :-------------- | :----------- | :------------------------- | :----------------------------------------- |
| Voltage-Series  | Voltage         | Series       | Voltage / Voltage          | Decreases / Increases                      |
| Current-Series  | Current         | Series       | Current / Voltage          | Increases / Increases                      |
| Voltage-Shunt   | Voltage         | Shunt        | Voltage / Current          | Decreases / Decreases                      |
| Current-Shunt   | Current         | Shunt        | Current / Current          | Decreases / Increases                      |

---

### Impact of Negative Feedback:

Regardless of the topology, negative feedback generally leads to:

*   **Stabilized Gain:** The closed-loop gain ($A_f$) is less sensitive to variations in the open-loop gain ($A$) and the characteristics of the active devices.
*   **Increased Bandwidth:** The frequency range over which the amplifier operates effectively is widened.
*   **Reduced Distortion:** Non-linearities in the amplifier are reduced.
*   **Reduced Noise:** Noise generated within the amplifier is also reduced.
*   **Modified Input and Output Impedances:** As summarized in the table above, impedances are predictably altered based on the topology.

---

### Relation to Course Outcomes:

*   **CO1: Design wave shaping circuits using first order RC network and diodes.** While this topic doesn't directly involve wave shaping, understanding feedback networks is crucial for designing circuits that shape signals in specific ways, especially when frequency response is a concern.
*   **CO2: Analyze single stage and multistage BJT amplifier circuits using equivalent models.** The analysis of the impact of each feedback topology on amplifier gain and impedance heavily relies on BJT equivalent models. This topic provides the foundation for understanding how feedback modifies the behavior of these amplifiers.
*   **CO3: Apply the principles of feedback in the design of oscillators.** Oscillators are essentially amplifiers with positive feedback. Understanding negative feedback topologies first is essential for grasping the concept of creating controlled oscillations.
*   **CO4: Design power amplifiers and voltage regulator circuits.** Voltage regulators often employ feedback mechanisms to maintain a stable output voltage, and power amplifiers can benefit from feedback to improve linearity and reduce distortion, making this topic foundational.

---

### Practice Questions/Exercises:

**Question 1:**
A voltage-series feedback amplifier has an open-loop voltage gain of $A = -1000$ and a feedback factor of $\beta = -0.01$. Calculate the closed-loop voltage gain $A_f$.

**Answer 1:**
The formula for the closed-loop voltage gain in a negative feedback system is $A_f = \frac{A}{1 - \beta A}$.
Given $A = -1000$ and $\beta = -0.01$.
$\beta A = (-0.01) \times (-1000) = 10$.
$A_f = \frac{-1000}{1 - 10} = \frac{-1000}{-9} \approx 111.11$.

**Question 2:**
Which of the four basic feedback topologies is characterized by sensing the output voltage and mixing the feedback signal in series with the input voltage?
a) Current-Series Feedback
b) Voltage-Shunt Feedback
c) Voltage-Series Feedback
d) Current-Shunt Feedback

**Answer 2:**
c) Voltage-Series Feedback

**Question 3:**
For a voltage-shunt feedback amplifier, how are the input and output impedances typically affected compared to the un-feedbacked amplifier?
a) Input impedance increases, output impedance increases.
b) Input impedance decreases, output impedance decreases.
c) Input impedance increases, output impedance decreases.
d) Input impedance decreases, output impedance increases.

**Answer 3:**
b) Input impedance decreases, output impedance decreases.

**Question 4:**
A current-series feedback amplifier is desired for an application requiring a high input impedance and a high output impedance. Which feedback topology fits this description?

**Answer 4:**
Current-Series Feedback (also known as Series-Series Feedback).

**Question 5:**
Explain how the feedback network in a voltage-series feedback topology samples the output and mixes with the input.

**Answer 5:**
In a voltage-series feedback topology, the feedback network samples the output voltage (e.g., by connecting across the output terminals or a series resistor). This sampled voltage is then fed back to the input stage and mixed in series with the input voltage signal. This mixing is typically achieved by subtracting the feedback voltage from the input voltage using a summing junction (e.g., a resistor in series with the input signal).

---

### Important Points to Remember:

*   The four topologies are defined by **what is sampled** at the output (voltage or current) and **how it is mixed** at the input (series or shunt).
*   **Voltage-Series** (Series-Shunt) feedback is used to create amplifiers with stable voltage gain, reduced input impedance, and increased output impedance.
*   **Current-Series** (Series-Series) feedback is used to create amplifiers with stable current gain, increased input impedance, and increased output impedance.
*   **Voltage-Shunt** (Shunt-Shunt) feedback is used to create amplifiers with stable transconductance, reduced input impedance, and reduced output impedance.
*   **Current-Shunt** (Shunt-Series) feedback is used to create amplifiers with stable transresistance, reduced input impedance, and increased output impedance.
*   Negative feedback is the primary mechanism discussed for improving amplifier performance characteristics like gain stability, bandwidth, distortion, and noise.

---

This comprehensive set of notes covers the fundamental concepts of the four basic feedback topologies, their characteristics, and their implications for amplifier design. By understanding these building blocks, you can effectively analyze and design more complex feedback amplifier circuits.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
