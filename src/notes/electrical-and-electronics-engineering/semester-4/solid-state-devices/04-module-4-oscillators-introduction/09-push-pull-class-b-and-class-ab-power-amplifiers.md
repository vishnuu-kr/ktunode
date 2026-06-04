---
title: "push pull class B and class AB power amplifiers"
subject: "SOLID STATE DEVICES"
module: "Module 4: Oscillators: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f9e"
status: "completed"
scrapedAt: "2026-05-23T16:19:00.618Z"
---
# SOLID STATE DEVICES: Module 4: Oscillators: Introduction

## Topic: Push-Pull Class B and Class AB Power Amplifiers

### 1. Introduction to Power Amplifiers

**Definition:** A power amplifier is an electronic amplifier designed to increase the power (and usually the amplitude) of a signal, typically to drive a load such as a loudspeaker, motor, or antenna. Unlike small-signal amplifiers which are designed for voltage or current gain, power amplifiers are primarily concerned with **efficiency** and **power output**.

**Key Concepts:**

*   **Power Output:** The ability to deliver significant power to a load.
*   **Efficiency:** The ratio of AC power delivered to the load to the total DC power supplied to the amplifier. Higher efficiency means less wasted power as heat.
*   **Distortion:** Unwanted changes in the waveform of the signal. Power amplifiers are prone to distortion due to their operation with large signals.
*   **Heat Dissipation:** Power amplifiers generate significant heat, necessitating effective heat sinks.

**Textbook References:**

*   **Boylested & Nashelsky (11/e):** Chapter on Power Amplifiers. Discusses the fundamental limitations and classifications of power amplifiers, including Class A, B, AB, C, and D.
*   **Sedra & Smith (6/e):** Chapter on Power Amplifiers. Provides a detailed analysis of different amplifier classes, their characteristics, and design considerations.
*   **Bell (5/e):** Chapter on Power Amplifiers. Offers a practical approach to understanding power amplifier operation and troubleshooting.

**Course Outcome Alignment:**

*   **CO5: Design power amplifiers and voltage regulator circuits (Knowledge Level: K4)**
    *   This topic directly addresses the design and analysis of power amplifiers, contributing to CO5. Understanding Class B and AB operation is crucial for designing efficient power amplifier stages.

### 2. Class B Power Amplifiers

**Concept:** Class B amplifiers operate with approximately **180 degrees** of the input waveform. Each active device (transistor) amplifies only half of the input signal. This is typically achieved using a **complementary symmetry** configuration with two transistors of opposite type (e.g., one NPN and one PNP, or one N-channel and one P-channel MOSFET).

**Circuit Configuration (Complementary Symmetry):**

*   **NPN/PNP Pair:**
    *   An NPN transistor amplifies the positive half-cycle of the input signal.
    *   A PNP transistor amplifies the negative half-cycle of the input signal.
    *   The outputs of both transistors are connected in parallel to the load.
    *   A coupling capacitor is often used to block the DC bias voltage from reaching the load.

*   **Diagram:** (Imagine a circuit diagram with an NPN transistor and a PNP transistor, both with emitters connected to the load, bases driven by the input signal via a phase splitter or transformer, and collectors connected to the positive and negative power supply rails respectively, with a capacitor in series with the load).

**Key Characteristics:**

*   **Operation:** Each transistor conducts for half a cycle of the input signal.
*   **Efficiency:** Significantly higher than Class A, theoretically reaching up to $\pi/4 \approx 78.5\%$. This is because the quiescent current is very low.
*   **Crossover Distortion:** A major drawback. During the transition from one transistor to the other (around the zero crossing of the input signal), both transistors are momentarily cut off, leading to a "gap" or distortion in the output waveform. This occurs because a small base-emitter voltage is required to turn on a BJT.

**Mathematical Analysis (Simplified):**

*   **Quiescent Power ($P_{Q}$):** Almost zero, as the transistors are ideally biased to cutoff.
*   **Maximum AC Output Power ($P_{out(max)}$):**
    $P_{out(max)} = \frac{V_{CC}^2}{2R_L}$ (where $V_{CC}$ is the supply voltage and $R_L$ is the load resistance).
*   **Maximum DC Input Power ($P_{DC}$):**
    $P_{DC} = \frac{V_{CC} \cdot I_{CC(avg)}}{}$
    For Class B, $P_{DC} = \frac{2 V_{CC}}{\pi} \cdot (\frac{V_{CC}}{R_L}) = \frac{2 V_{CC}^2}{\pi R_L}$ (This is the average DC power consumed from the supply).
*   **Theoretical Maximum Efficiency ($\eta_{max}$):**
    $\eta_{max} = \frac{P_{out(max)}}{P_{DC}} = \frac{V_{CC}^2 / (2R_L)}{2 V_{CC}^2 / (\pi R_L)} = \frac{\pi}{4} \approx 78.5\%$

**Example from Textbooks:**

*   **Boylested & Nashelsky (11/e):** Likely illustrates a Class B amplifier with a complementary symmetry configuration and analyzes its efficiency and power output capabilities, highlighting the issue of crossover distortion.
*   **Sedra & Smith (6/e):** Might provide a more detailed mathematical derivation of the efficiency and power output of Class B amplifiers, possibly comparing it with Class A.

**Important Points to Remember:**

*   **High Efficiency:** The primary advantage of Class B.
*   **Crossover Distortion:** The primary disadvantage, making it unsuitable for audio applications without modification.

### 3. Class AB Power Amplifiers

**Concept:** Class AB amplifiers are a compromise between Class A and Class B. Each active device amplifies **slightly more than 180 degrees** of the input waveform. This is achieved by providing a small **quiescent current** ($I_Q$) to each transistor, ensuring that they are always conducting, even when the input signal is zero.

**Circuit Configuration:**

*   Similar to Class B, using a complementary symmetry configuration with NPN and PNP transistors (or complementary MOSFETs).
*   **Bias Network:** A bias network is added to establish the quiescent current ($I_Q$) in each transistor. This can be done using diodes, transistors, or adjustable bias circuits.

**Key Characteristics:**

*   **Operation:** Each transistor conducts for slightly more than half a cycle.
*   **Efficiency:** Intermediate between Class A and Class B, typically in the range of 50-70%.
*   **Reduced Crossover Distortion:** The presence of a quiescent current significantly reduces or eliminates crossover distortion.
*   **Quiescent Current:** A small DC current flows through the transistors even with no input signal.

**Bias Methods for Class AB:**

*   **Diode Biasing:** Using one or two diodes in series with the base of one or both transistors to establish a small forward bias. The temperature dependency of diodes can be used to stabilize the quiescent current.
*   **Transistor Biasing:** Using a small transistor biased to provide a constant voltage to the bases of the output transistors.
*   **Adjustable Biasing:** Using a potentiometer to fine-tune the bias voltage and set the desired quiescent current.

**Mathematical Analysis (Simplified):**

*   **Quiescent Power ($P_{Q}$):** Non-zero, but much lower than Class A.
    $P_{Q} = 2 V_{CC} \cdot I_{Q}$ (for a bipolar supply or $V_{CC} \cdot I_{Q}$ for a single supply, with $I_{Q}$ being the quiescent current per device).
*   **Maximum AC Output Power ($P_{out(max)}$):** Similar to Class B, assuming the quiescent current doesn't limit the output swing.
    $P_{out(max)} = \frac{V_{CC}^2}{2R_L}$
*   **Efficiency ($\eta$):** The efficiency will be lower than Class B due to the quiescent power consumption.
    $\eta = \frac{P_{out}}{P_{DC}} = \frac{P_{out}}{P_{out} + P_{loss}}$
    Where $P_{loss} = P_{Q} + P_{transistor\_losses}$

**Example from Textbooks:**

*   **Bell (5/e):** Might present a practical Class AB amplifier circuit with a diode biasing network, explaining how it minimizes crossover distortion.
*   **Rashid (2/e):** Could offer detailed analysis of the efficiency and distortion characteristics of Class AB amplifiers for different quiescent current values.

**Important Points to Remember:**

*   **Eliminates Crossover Distortion:** The main advantage over Class B.
*   **Improved Efficiency over Class A:** Still offers good efficiency.
*   **Design Trade-off:** The quiescent current is a critical design parameter that balances distortion and efficiency.

### 4. Comparison: Class B vs. Class AB

| Feature               | Class B                                    | Class AB                                       |
| :-------------------- | :----------------------------------------- | :--------------------------------------------- |
| **Conduction Angle**  | $\approx 180^\circ$ per device               | $> 180^\circ$ per device                        |
| **Quiescent Current** | Very low (ideally zero)                    | Small, non-zero ($I_Q$)                        |
| **Crossover Distortion**| Significant                                | Negligible to none                             |
| **Efficiency**        | Higher (up to 78.5% theoretical)           | Moderate (lower than Class B, higher than Class A) |
| **Complexity**        | Simpler bias circuit                       | Requires a bias network to set $I_Q$           |
| **Applications**      | High-power applications where distortion can be tolerated or managed; often as a driver stage. | Audio amplifiers, general-purpose power amplification where low distortion is required. |

**Reference Book Insight:**

*   **Millman & Halkias (2/e):** Might delve into the distortion mechanisms of Class B and explain how the introduction of a small bias current in Class AB effectively combats this, providing graphical representations of the waveforms.

### 5. Practice Questions & Exercises

**Question 1:**
A Class B push-pull amplifier uses complementary NPN and PNP transistors. If the supply voltage is $V_{CC} = \pm 15V$ and the load resistance is $R_L = 8\Omega$, calculate:
a) The maximum DC input power.
b) The theoretical maximum AC output power.
c) The theoretical maximum efficiency.
d) What is the primary disadvantage of a Class B amplifier?

**Answer 1:**
a) $P_{DC} = \frac{2 V_{CC}^2}{\pi R_L} = \frac{2 \times (15V)^2}{\pi \times 8\Omega} = \frac{2 \times 225}{25.13} \approx 17.9W$
b) $P_{out(max)} = \frac{V_{CC}^2}{2R_L} = \frac{(15V)^2}{2 \times 8\Omega} = \frac{225}{16} = 14.06W$
c) $\eta_{max} = \frac{\pi}{4} \approx 78.5\%$
d) The primary disadvantage is crossover distortion.

**Question 2:**
How does the introduction of a quiescent current ($I_Q$) in a Class AB amplifier alleviate the problem of crossover distortion observed in Class B amplifiers?

**Answer 2:**
In a Class B amplifier, there is a period around the zero-crossing of the input signal where neither transistor is conducting, causing a "dead zone" or crossover distortion. In a Class AB amplifier, a small quiescent current ($I_Q$) is established in each transistor. This ensures that both transistors are always in the active region and conducting, even at zero input signal. This continuous conduction eliminates the dead zone and therefore removes the crossover distortion.

**Question 3:**
Compare the theoretical maximum efficiency of Class B and Class AB amplifiers. Explain why Class AB has lower efficiency.

**Answer 3:**
The theoretical maximum efficiency of a Class B amplifier is $\pi/4 \approx 78.5\%$. Class AB amplifiers have lower theoretical maximum efficiencies, typically in the range of 50-70%, and their actual efficiency depends on the chosen quiescent current. Class AB has lower efficiency because the quiescent current, while necessary to eliminate crossover distortion, results in a continuous power dissipation ($P_Q = 2V_{CC}I_Q$) even when there is no input signal. This quiescent power loss reduces the overall efficiency compared to Class B, where the quiescent power is ideally zero.

### 6. Important Points to Remember

*   **Push-Pull Configuration:** Essential for Class B and Class AB amplifiers to achieve higher power output and eliminate DC component from the load.
*   **Complementary Symmetry:** The most common implementation of push-pull power amplifiers using NPN/PNP or N-channel/P-channel devices.
*   **Crossover Distortion:** A significant issue in Class B amplifiers arising from the turn-on voltage requirement of transistors.
*   **Quiescent Current ($I_Q$):** The key differentiator between Class B and Class AB. A small $I_Q$ in Class AB eliminates crossover distortion.
*   **Efficiency vs. Distortion:** There's a design trade-off. Class B is more efficient but has distortion. Class AB reduces distortion at the cost of efficiency.
*   **Bias Stability:** For Class AB amplifiers, it's important that the bias current remains stable with variations in temperature and transistor parameters.

This concludes the study notes for Push-Pull Class B and Class AB Power Amplifiers. This topic is fundamental to understanding high-power signal amplification in electronic circuits.
