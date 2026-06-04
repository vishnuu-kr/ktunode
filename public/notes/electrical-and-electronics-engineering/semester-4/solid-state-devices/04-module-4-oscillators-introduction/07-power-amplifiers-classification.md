---
title: "Power amplifiers: Classification"
subject: "SOLID STATE DEVICES"
module: "Module 4: Oscillators: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f9c"
status: "completed"
scrapedAt: "2026-05-23T16:18:59.146Z"
---
## SOLID STATE DEVICES: Module 4: Oscillators: Introduction

### Topic: Power Amplifiers: Classification

This topic delves into the fundamental principles and classification of power amplifiers, which are crucial for delivering significant power to a load. Understanding their operation, advantages, and disadvantages is essential for designing effective audio systems, RF transmitters, and other high-power applications.

---

### 1. Introduction to Power Amplifiers

**Definition:** A power amplifier is an electronic amplifier designed to amplify a signal to a level suitable for driving a load that requires significant power, such as a loudspeaker, antenna, or motor. Unlike small-signal amplifiers that focus on fidelity, power amplifiers prioritize efficiency and the ability to deliver power without excessive distortion.

**Key Characteristics:**

*   **High Power Output:** The primary function is to provide a substantial output power.
*   **Efficiency:** A major concern is converting DC power supply energy into AC signal power efficiently, minimizing heat dissipation.
*   **Distortion:** While efficiency is key, minimizing signal distortion is also important, especially in audio applications.
*   **Load Driving Capability:** They are designed to drive low impedance loads.

**Contrast with Small-Signal Amplifiers:**

*   **Signal Level:** Small-signal amplifiers amplify signals in the millivolt range, while power amplifiers handle signals in the volt or even ampere range.
*   **Operating Point:** Small-signal amplifiers operate in the active region for linear amplification. Power amplifiers often operate in different classes to optimize efficiency.
*   **Distortion:** Small-signal amplifiers aim for minimal distortion. Power amplifiers may accept some level of distortion in exchange for higher efficiency, depending on the class of operation.

**Relevance to Course Outcomes:**

*   **CO5: Design and analyze power amplifier and voltage regulator circuits (Knowledge Level: K4)**: This topic directly contributes to understanding the design principles of power amplifiers, a core component of CO5.

---

### 2. Classification of Power Amplifiers

Power amplifiers are primarily classified based on their **mode of operation** or **class**, which dictates the portion of the input signal cycle for which the amplifying device (BJT or MOSFET) conducts. This conduction angle directly impacts efficiency and distortion.

**Key Classification Criteria:**

*   **Conduction Angle ($\theta$):** The portion of the input cycle during which the active device is turned ON.
*   **Efficiency:** The ratio of AC output power to DC input power.
*   **Distortion:** Non-linearities introduced into the amplified signal.
*   **Output Waveform:** The shape of the amplified output signal.

---

### 3. Class A Power Amplifiers

**Description:** In Class A operation, the active device conducts for the entire 360° of the input signal cycle.

**Key Concepts:**

*   **Conduction Angle ($\theta$):** 360°
*   **Operation:** The transistor is biased to remain in the active region throughout the entire input cycle.
*   **Efficiency:** Typically very low, theoretically a maximum of 50% for a transformer-coupled amplifier and 25% for a directly coupled amplifier.
*   **Distortion:** Generally the lowest among all classes, as the device operates linearly.
*   **Advantages:**
    *   High fidelity (low distortion).
    *   Simple design.
*   **Disadvantages:**
    *   Very low efficiency, leading to significant heat dissipation.
    *   Requires a larger power supply.
    *   Large heat sinks are often necessary.

**Circuit Configuration:**

*   **Transformer Coupled Class A:** Utilizes a transformer to couple the output to the load, improving efficiency slightly by allowing the transistor to operate with a larger voltage swing.
    *   **Boylested & Nashelsky (11/e):** Discusses transformer coupling for Class A amplifiers as a method to improve efficiency and achieve a higher output power. (Chapter 14: Power Amplifiers)
    *   **Sedra & Smith (6/e):** Analyzes the operation and efficiency of transformer-coupled Class A amplifiers in their power amplifier section. (Chapter 11: Power Amplifiers and Output Stages)
*   **Direct Coupled Class A:** The output is directly connected to the load, resulting in lower efficiency.

**Example:** An audio pre-amplifier stage that requires high fidelity and where efficiency is not a primary concern.

**Important Point to Remember:** Class A amplifiers are the "gold standard" for linearity but are highly inefficient.

---

### 4. Class B Power Amplifiers

**Description:** In Class B operation, the active device conducts for exactly 180° of the input signal cycle.

**Key Concepts:**

*   **Conduction Angle ($\theta$):** 180°
*   **Operation:** The transistor is biased at cutoff, meaning it only turns ON when the input signal is sufficiently positive (for NPN or NMOS).
*   **Efficiency:** Theoretically a maximum of 78.5%.
*   **Distortion:** Suffers from **crossover distortion**, which occurs when the signal switches between the positive and negative halves of the input cycle, as the transistor is momentarily OFF.
*   **Advantages:**
    *   Higher efficiency than Class A.
*   **Disadvantages:**
    *   Crossover distortion is a significant problem.
    *   Requires two transistors to amplify both halves of the signal.

**Circuit Configuration:**

*   **Push-Pull Class B:** Two transistors (one NPN/P-channel and one PNP/N-channel) are used. One amplifies the positive half-cycle, and the other amplifies the negative half-cycle.
    *   **Bell (5/e):** Explains the push-pull configuration for Class B amplifiers and the origin of crossover distortion. (Chapter 10: Power Amplifiers)
    *   **Neamen (3/e):** Provides detailed analysis of push-pull Class B amplifiers and methods to reduce crossover distortion. (Chapter 10: Power Amplifiers)

**Example:** Used in some audio amplifiers where efficiency is more important than absolute linearity, and crossover distortion can be mitigated.

**Important Point to Remember:** Class B amplifiers offer better efficiency than Class A but introduce crossover distortion.

---

### 5. Class AB Power Amplifiers

**Description:** In Class AB operation, the active device conducts for more than 180° but less than 360° of the input signal cycle.

**Key Concepts:**

*   **Conduction Angle ($\theta$):** $180° < \theta < 360°$
*   **Operation:** The transistor is biased slightly above cutoff, ensuring that both transistors in a push-pull configuration conduct for a small portion of the cycle, thereby eliminating crossover distortion.
*   **Efficiency:** Higher than Class A, but generally lower than Class B. Typically around 50-60%.
*   **Distortion:** Significantly reduced crossover distortion compared to Class B.
*   **Advantages:**
    *   Good compromise between efficiency and linearity.
    *   Reduced crossover distortion.
*   **Disadvantages:**
    *   Less efficient than Class B.
    *   Slightly more complex biasing than Class B.

**Circuit Configuration:**

*   **Push-Pull Class AB:** Similar to push-pull Class B, but with a small quiescent current established by biasing the transistors slightly above cutoff. This can be achieved using diodes or a specific biasing circuit.
    *   **Millman & Halkias (2/e):** Details the biasing techniques for Class AB amplifiers to minimize crossover distortion, including the use of diode biasing. (Chapter 17: Power Amplifiers)
    *   **Razavi (2015):** Explains the trade-offs between different classes of amplifiers, highlighting Class AB as a practical solution for audio applications. (Chapter 13: Power Amplifiers)

**Example:** The most common class for audio power amplifiers due to its excellent balance of linearity and efficiency.

**Important Point to Remember:** Class AB is the most practical and widely used class for audio amplifiers because it minimizes crossover distortion while maintaining reasonable efficiency.

---

### 6. Class C Power Amplifiers

**Description:** In Class C operation, the active device conducts for significantly less than 180° of the input signal cycle.

**Key Concepts:**

*   **Conduction Angle ($\theta$):** $\theta < 180°$ (often much less, e.g., 90° or even less).
*   **Operation:** The transistor is biased far below cutoff, so it only conducts when the input signal is very large.
*   **Efficiency:** Very high, theoretically up to 100% (though practically lower).
*   **Distortion:** High distortion. The output is a series of pulses, which are not a faithful amplification of the input waveform.
*   **Advantages:**
    *   Highest efficiency.
*   **Disadvantages:**
    *   High distortion, making it unsuitable for audio amplification.
    *   Requires a tuned circuit (LC tank) to reconstruct the desired output waveform from the pulsed output.
    *   Only amplifies a narrow band of frequencies.

**Circuit Configuration:**

*   **Tuned Amplifier:** Typically used in conjunction with a resonant circuit (e.g., an LC tank) to select and amplify a specific frequency.
    *   **Rashid (2/e):** Discusses the application of Class C amplifiers in RF power transmitters and the necessity of tuned circuits for waveform reconstruction. (Chapter 14: Power Amplifiers)

**Example:** RF power amplifiers in radio transmitters where the signal is modulated and the carrier frequency is amplified efficiently.

**Important Point to Remember:** Class C amplifiers are highly efficient but produce significant distortion and are only suitable for RF applications where a tuned circuit is used for demodulation.

---

### 7. Other Classes of Power Amplifiers

While Classes A, B, AB, and C are the most common, other classifications exist:

*   **Class D Amplifiers:**
    *   **Description:** Operates as a switching amplifier, using Pulse Width Modulation (PWM) or similar techniques. The output transistors are switched ON and OFF rapidly.
    *   **Efficiency:** Extremely high (often >90%).
    *   **Distortion:** Can be low with proper filtering, but switching noise can be an issue.
    *   **Applications:** High-power audio systems, digital audio amplifiers.
    *   **Boylested & Nashelsky (11/e):** Introduces the concept of switching amplifiers and their high efficiency. (Chapter 14: Power Amplifiers)

*   **Class E Amplifiers:**
    *   **Description:** Optimized for high-frequency switching applications, achieving very high efficiency by minimizing switching losses through zero-voltage switching and zero-current switching.
    *   **Efficiency:** Very high.
    *   **Applications:** RF power amplifiers, wireless power transfer.

*   **Class F Amplifiers:**
    *   **Description:** Utilizes harmonic termination to improve efficiency by shaping the voltage and current waveforms to minimize overlap.
    *   **Efficiency:** Very high.
    *   **Applications:** High-power RF applications.

**Important Point to Remember:** Higher classes (D, E, F) generally offer higher efficiency by employing switching techniques or advanced waveform shaping, but at the cost of increased circuit complexity.

---

### 8. Summary of Power Amplifier Classes

| Class | Conduction Angle ($\theta$) | Efficiency (Max Theoretical) | Distortion (Primary Issue) | Typical Applications               |
| :---- | :--------------------------- | :--------------------------- | :------------------------- | :--------------------------------- |
| A     | 360°                         | 50% (Transformer-coupled)    | Low                        | High-fidelity audio, pre-amplifiers |
| B     | 180°                         | 78.5%                        | Crossover Distortion       | Audio amplifiers (with mitigation) |
| AB    | 180° < $\theta$ < 360°       | ~78.5%                       | Reduced Crossover          | Audio power amplifiers             |
| C     | < 180°                       | ~100%                        | High                       | RF transmitters                    |
| D     | Switching                    | >90%                         | Switching noise            | Digital audio, high-power systems  |
| E     | Switching                    | Very High                    | -                          | RF power amplifiers                |
| F     | Harmonic termination         | Very High                    | -                          | High-power RF                      |

---

### 9. Practice Questions and Exercises

**Question 1:**
What is the primary advantage of a Class A power amplifier, and what is its major disadvantage? (Knowledge Level: K3)

**Answer 1:**
*   **Advantage:** High fidelity (low distortion).
*   **Disadvantage:** Very low efficiency, leading to significant heat dissipation.

**Question 2:**
Explain the phenomenon of crossover distortion in a Class B amplifier and how Class AB operation mitigates this issue. (Knowledge Level: K4)

**Answer 2:**
Crossover distortion occurs in Class B amplifiers when the input signal transitions from positive to negative (or vice versa). During this transition, both transistors are momentarily off, resulting in a "dead zone" where the output signal is distorted. Class AB amplifiers bias the transistors slightly above cutoff, ensuring that both transistors conduct for a small portion of the input cycle, thereby eliminating or significantly reducing crossover distortion.

**Question 3:**
Which class of power amplifier is most suitable for RF transmitters, and why? (Knowledge Level: K4)

**Answer 3:**
Class C power amplifiers are most suitable for RF transmitters. They offer very high efficiency, which is crucial for transmitting signals over long distances. The high distortion inherent in Class C operation is acceptable because RF transmitters typically use tuned circuits (LC tanks) to filter and reconstruct the desired carrier frequency after amplification.

**Question 4:**
A power amplifier has a DC input power of 10W and an AC output power of 6W. Calculate its efficiency. (Knowledge Level: K3)

**Answer 4:**
Efficiency ($\eta$) = (AC Output Power / DC Input Power) * 100%
$\eta$ = (6W / 10W) * 100% = 60%

**Question 5:**
Compare and contrast Class A and Class AB power amplifiers in terms of efficiency, distortion, and typical applications. (Knowledge Level: K4)

**Answer 5:**

| Feature       | Class A Amplifier                                 | Class AB Amplifier                                      |
| :------------ | :------------------------------------------------ | :------------------------------------------------------ |
| **Efficiency**| Very low (max 50% transformer-coupled)            | Moderate (higher than Class A, lower than Class B)      |
| **Distortion**| Very low (high fidelity)                          | Low (minimal crossover distortion)                      |
| **Conduction**| 360°                                              | 180° < $\theta$ < 360°                                  |
| **Applications**| High-fidelity audio pre-amplifiers, sensitive circuits | General-purpose audio power amplifiers                  |

---

### 10. Important Points to Remember

*   The classification of power amplifiers is based on the **conduction angle** of the active device.
*   **Efficiency** and **linearity (distortion)** are the primary trade-offs when choosing a power amplifier class.
*   **Class A** offers the best linearity but the worst efficiency.
*   **Class B** offers better efficiency but suffers from crossover distortion.
*   **Class AB** is a practical compromise, offering reduced crossover distortion and good efficiency, making it ideal for audio applications.
*   **Class C** offers the highest efficiency but produces significant distortion, suitable only for RF applications with tuned circuits.
*   Higher-order classes (D, E, F) achieve very high efficiencies through switching techniques or waveform shaping.
*   Understanding the operating principles of each class is crucial for selecting the appropriate amplifier for a given application and for designing efficient and effective power amplifier circuits (CO5).

---
This concludes the study notes for Power Amplifiers: Classification. Remember to refer to the recommended textbooks for more in-depth analysis and circuit examples.
