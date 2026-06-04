---
title: "complementary- symmetry class B and Class AB"
subject: "ANALOG CIRCUITS"
module: "Module 4: Power amplifiers: Classification"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2fa"
status: "completed"
scrapedAt: "2026-05-23T17:44:24.552Z"
---
# ANALOG CIRCUITS: Module 4 - Power Amplifiers: Classification

## Topic: Complementary-Symmetry Class B and Class AB Power Amplifiers

This module delves into power amplifiers, a crucial component in delivering amplified signals with sufficient power to drive loads like speakers. We will specifically focus on the **Complementary-Symmetry Class B** and **Class AB** configurations, understanding their operation, advantages, disadvantages, and design considerations.

**Relevant Course Outcome:**

*   **CO4:** Design power amplifiers and voltage regulator circuits. (Knowledge Level: K3) - This topic directly addresses the design and analysis of power amplifiers.

**Relevant Textbooks/Reference Books:**

*   **Electronic Devices and Circuit Theory** by Boylestad and Nashelsky (Chapter on Power Amplifiers)
*   **Microelectronic Circuits** by Sedra and Smith (Chapter on Power Amplifiers)
*   **Electronic Circuits and Devices** by Bogart, Beasley, and Rico (Chapter on Power Amplifiers)
*   **Fundamentals of Microelectronics** by Razavi (Chapter on Power Amplifiers)

---

### 1. Introduction to Power Amplifiers

*   **Definition:** A power amplifier is a type of amplifier that converts a low-power input signal into a high-power signal capable of driving a load. They are typically found in the output stages of audio systems, radio transmitters, and other applications requiring significant power delivery.
*   **Key Characteristics:**
    *   **Efficiency:** The ratio of AC output power to DC input power. Crucial for power amplifiers to minimize heat dissipation and power consumption.
    *   **Power Output:** The maximum AC power the amplifier can deliver to a load.
    *   **Distortion:** Unwanted alteration of the input signal waveform. Harmonic distortion and intermodulation distortion are common concerns.
    *   **Heat Dissipation:** Power amplifiers often generate significant heat, requiring careful thermal management.

---

### 2. Power Amplifier Classification

Power amplifiers are classified based on their **conduction angle**, which refers to the portion of the input signal cycle during which the amplifying device (transistor) is active. The primary classes are A, B, AB, C, and D.

*   **Class A:** Conducts for the entire 360 degrees of the input cycle. Offers low distortion but very low efficiency.
*   **Class B:** Conducts for 180 degrees of the input cycle. Offers higher efficiency than Class A but suffers from crossover distortion.
*   **Class AB:** Conducts for slightly more than 180 degrees of the input cycle. A compromise between Class B and Class A, balancing efficiency and distortion.
*   **Class C:** Conducts for less than 180 degrees of the input cycle. Highly efficient but introduces significant distortion, suitable for RF applications where the output is typically filtered.
*   **Class D:** Operates as a switch, achieving very high efficiency but requiring more complex circuitry and filtering.

---

### 3. Complementary-Symmetry Class B Power Amplifier

This is a widely used configuration that utilizes a **complementary pair** of transistors (an NPN and a PNP) operating in Class B.

*   **Concept:**
    *   Two power transistors, one NPN and one PNP, are used.
    *   They are connected in a "push-pull" configuration, where one transistor amplifies the positive half-cycle of the input signal, and the other amplifies the negative half-cycle.
    *   The output is taken from the junction of the two transistors.
    *   This arrangement effectively cancels out even-order harmonic distortion.

*   **Circuit Diagram (Conceptual):**

    ```
          Vin ---->  +-------+
                     |       |
                     |   Q1  | (NPN)
                     |       |
                     +-------+-----> Output
                         |
                         |
          Vin ---->  +-------+
                     |       |
                     |   Q2  | (PNP)
                     |       |
                     +-------+-----> Output
    ```
    *Note: This is a simplified representation. Actual circuits involve biasing, load resistors, and decoupling capacitors.*

*   **Operation:**
    *   **Positive Half-Cycle of Vin:** The NPN transistor (Q1) is forward-biased and conducts, amplifying the positive half of the input signal. The PNP transistor (Q2) is reverse-biased and remains off.
    *   **Negative Half-Cycle of Vin:** The PNP transistor (Q2) is forward-biased and conducts, amplifying the negative half of the input signal. The NPN transistor (Q1) is reverse-biased and remains off.

*   **Advantages:**
    *   **Higher Efficiency:** Significantly higher efficiency compared to Class A amplifiers because the transistors are off for half the cycle.
    *   **Reduced Even-Order Distortion:** The push-pull arrangement cancels out even-order harmonic distortion.

*   **Disadvantages:**
    *   **Crossover Distortion:** This is the most significant drawback. When the input signal crosses zero, there's a small period where both transistors are off. This results in a dead zone where the output signal is distorted, especially at low signal amplitudes. This occurs because the base-emitter voltage ($V_{BE}$) required to turn on a silicon transistor is around 0.7V. During the zero crossing, the input voltage might not be sufficient to overcome this threshold for either transistor.

*   **Biasing for Class B:** In a pure Class B amplifier, no quiescent bias current ($I_Q$) is intentionally set. The transistors turn on only when the input signal is sufficient to overcome their $V_{BE(on)}$.

*   **Power Dissipation and Efficiency (Class B):**
    *   **Maximum Efficiency:** Theoretically, 78.5% ( $\pi/4$ ).
    *   **Power Dissipation:** Lower than Class A, as devices are off for half the cycle.

*   **Mitigating Crossover Distortion:**
    *   **Biasing with Diodes:** Introduce a small forward bias to the base-emitter junctions of both transistors using diodes. This ensures that at least one transistor is slightly conducting even when the input is near zero.
    *   **Using Class AB:** This is the most common and effective method, discussed next.

---

### 4. Complementary-Symmetry Class AB Power Amplifier

Class AB amplifiers bridge the gap between Class A and Class B, offering improved linearity over Class B while maintaining good efficiency.

*   **Concept:**
    *   Similar to Class B, it uses a complementary pair of transistors in a push-pull configuration.
    *   The key difference is the introduction of a **small quiescent bias current** ($I_Q$). This bias is achieved by applying a small positive voltage difference across the base-emitter junctions of both transistors, even when there is no input signal.
    *   This small quiescent current ensures that both transistors are always slightly conducting, eliminating or significantly reducing crossover distortion.

*   **Biasing for Class AB:**
    *   **Diode Biasing:** A common method involves using two or more diodes in the bias network. The forward voltage drop of these diodes provides the necessary bias voltage to the base-emitter junctions.
        *   **Boylestad and Nashelsky** (Chapter 12) often illustrate this with a V-I characteristic of the transistor and how the diodes set a specific bias point. The goal is to have the transistors operating in the active region even with zero input signal.
    *   **Transistor Biasing:** A small transistor can be used to set the bias for the power transistors.

*   **Circuit Diagram (Conceptual with Diode Biasing):**

    ```
          Vin ---->  +-------+
                     |       |
                     |   Q1  | (NPN)
                     |       |
                     +-------+-----> Output
                         |       |
                         +-------+-----> D1
                         |       |
                         +-------+-----> D2
                         |       |
                         |   Q2  | (PNP)
                         |       |
                         +-------+-----> Output
    ```
    *The diodes D1 and D2 are connected in series to provide the necessary forward bias to the base-emitter junctions of Q1 and Q2 respectively.*

*   **Operation:**
    *   **Small Input Signal (near zero):** Both transistors conduct a small quiescent current, ensuring smooth transitions and eliminating crossover distortion.
    *   **Positive Half-Cycle:** The NPN transistor (Q1) conducts more heavily, amplifying the positive half. The PNP transistor (Q2) conducts less but still conducts a small current.
    *   **Negative Half-Cycle:** The PNP transistor (Q2) conducts more heavily, amplifying the negative half. The NPN transistor (Q1) conducts less but still conducts a small current.

*   **Advantages:**
    *   **Reduced Crossover Distortion:** Significantly lower crossover distortion compared to Class B.
    *   **Good Efficiency:** More efficient than Class A, though slightly less than ideal Class B.
    *   **Good Linearity:** Offers a good balance between efficiency and linearity.

*   **Disadvantages:**
    *   **Lower Efficiency than Class B:** Due to the quiescent current, it's slightly less efficient than a theoretically perfect Class B amplifier.
    *   **More Complex Biasing:** Requires careful biasing to set the quiescent current.

*   **Power Dissipation and Efficiency (Class AB):**
    *   **Maximum Efficiency:** Theoretically less than 78.5%, but practically achieved efficiency is good.
    *   **Power Dissipation:** Higher than Class B due to the quiescent current, but much lower than Class A.

*   **Sedra and Smith** (Chapter 2.4.1 & 2.4.2) provide detailed analysis of Class A, B, and AB amplifiers, including power calculations and efficiency derivations. They emphasize the trade-offs between linearity and efficiency for each class.

*   **Bogart, Beasley, and Rico** (Chapter 10) also cover power amplifiers extensively, including the practical aspects of biasing and the impact of device characteristics on performance.

---

### 5. Design Considerations and Examples

**Objective:** Design a complementary-symmetry Class AB amplifier to deliver a specific output power to a load.

**Key Parameters to Consider:**

*   **Supply Voltage ($V_{CC}$):** Determines the maximum output voltage swing and power.
*   **Load Resistance ($R_L$):** The resistance of the speaker or other load.
*   **Quiescent Current ($I_Q$):** Dictates the bias point and affects crossover distortion and efficiency.
*   **Transistor Selection:** Power handling capability, voltage and current ratings, gain, and thermal resistance.

**Example Design Steps (Conceptual):**

1.  **Determine Supply Voltage ($V_{CC}$):** For a given desired peak output voltage ($V_p$) across $R_L$, the supply voltage needs to be higher to account for transistor saturation voltage and bias voltages.
    *   For Class B, $V_p \approx V_{CC}$.
    *   For Class AB, a slightly higher $V_{CC}$ might be chosen for margin.

2.  **Calculate Quiescent Current ($I_Q$):** This is a design choice. A common starting point is a few milliamps (e.g., 10-50mA) to eliminate crossover distortion without excessive quiescent power dissipation.
    *   Quiescent power dissipation in each transistor: $P_Q = V_{CEQ} \times I_Q$. Since $V_{CEQ}$ is typically around $V_{CC}/2$, $P_Q \approx (V_{CC}/2) \times I_Q$.

3.  **Select Biasing Method:** Choose diode biasing or a transistor-based bias network to achieve the desired $I_Q$. The voltage drop across the diodes should be adjusted (e.g., by using germanium diodes or multiple silicon diodes in series) to provide the target $V_{BE}$ for the quiescent current.

4.  **Select Power Transistors:** Choose NPN and PNP transistors (e.g., 2N3055 and MJ2955, or similar complementary pairs) that can handle the required power dissipation and voltage/current swings. Ensure they have adequate heat sinks.

5.  **Calculate Maximum Output Power:**
    *   The peak output voltage swing is approximately $V_{CC}$.
    *   The peak output current is $I_p = V_{CC} / R_L$.
    *   The RMS output power is $P_{o(RMS)} = V_{CC}^2 / (2 R_L)$ (for a sinusoidal signal). This is for a push-pull Class B/AB where the full supply voltage is utilized.

6.  **Calculate Power Dissipation:**
    *   **Maximum Power Dissipation in Transistors:** In Class AB, the worst-case power dissipation occurs at $V_{in} = 0$ (when quiescent current flows) or at maximum signal, depending on the specific bias. For a Class B amplifier, maximum power dissipation occurs at half the maximum output power.
    *   **Total DC Input Power:** $P_{DC} = V_{CC} \times I_{CC}$, where $I_{CC}$ is the average DC current drawn from the supply.

7.  **Calculate Efficiency:** $\eta = P_{o(RMS)} / P_{DC}$.

*   **Razavi** (Chapter 10) provides a thorough analysis of power amplifier efficiency, explaining how it relates to the bias point and signal amplitude. He emphasizes that for Class AB, the efficiency is a compromise.

---

### 6. Important Points to Remember

*   **Complementary Symmetry:** Utilizes NPN and PNP transistors to amplify both halves of the signal.
*   **Class B:** High efficiency, but suffers from crossover distortion due to the zero-crossing dead zone.
*   **Class AB:** Achieves reduced crossover distortion by introducing a small quiescent current, offering a balance between linearity and efficiency.
*   **Crossover Distortion:** Occurs when the input signal is near zero, and neither transistor is sufficiently forward-biased.
*   **Biasing:** Crucial for Class AB amplifiers to set the quiescent current and eliminate crossover distortion. Diode biasing is a common technique.
*   **Efficiency:** Class B and AB are significantly more efficient than Class A.
*   **Heat Sinks:** Essential for power transistors to dissipate the heat generated during operation.
*   **Load Matching:** Proper matching of the amplifier's output impedance to the load impedance is important for maximum power transfer.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the fundamental difference between Class B and Class AB complementary-symmetry power amplifiers. What is the primary advantage of Class AB over Class B?

**Answer 1:**
The primary difference lies in their biasing. A Class B amplifier has no quiescent current, meaning transistors turn on only when the input signal is large enough. A Class AB amplifier has a small quiescent current, ensuring both transistors are always slightly conducting. The main advantage of Class AB over Class B is the significant reduction or elimination of **crossover distortion**.

**Question 2:**
A complementary-symmetry Class B power amplifier uses a $\pm 15V$ power supply. What is the theoretical maximum output power it can deliver to an $8 \Omega$ load, assuming a sinusoidal input signal?

**Answer 2:**
For a Class B push-pull amplifier, the peak output voltage swing is approximately equal to the supply voltage, $V_{CC} = 15V$.
The peak output current is $I_p = V_{CC} / R_L = 15V / 8\Omega = 1.875A$.
The RMS output voltage is $V_{o(RMS)} = V_{CC} / \sqrt{2} = 15V / \sqrt{2} \approx 10.61V$.
The maximum RMS output power is $P_{o(RMS)} = V_{o(RMS)}^2 / R_L = (10.61V)^2 / 8\Omega \approx 14.03W$.
Alternatively, using the formula $P_{o(RMS)} = V_{CC}^2 / (2 R_L) = (15V)^2 / (2 \times 8\Omega) = 225V^2 / 16\Omega = 14.0625W$.

**Question 3:**
What causes crossover distortion in a Class B power amplifier, and how can it be minimized?

**Answer 3:**
Crossover distortion occurs because there is a small "dead zone" around the zero-crossing point of the input signal where neither the NPN nor the PNP transistor is sufficiently forward-biased to conduct. This is due to the base-emitter voltage ($V_{BE}$) required to turn on a silicon transistor (approximately 0.7V).
It can be minimized by:
1.  **Using Class AB biasing:** Introducing a small quiescent current to ensure both transistors are always slightly on.
2.  **Biasing with diodes:** Using diodes in the bias network to provide a small forward bias to the base-emitter junctions.

**Question 4:**
A complementary-symmetry Class AB amplifier is designed with a quiescent current of $20mA$ and operates from $\pm 12V$ supplies. Calculate the quiescent power dissipation in each transistor, assuming the collector-emitter voltage is approximately $V_{CC}/2$.

**Answer 4:**
Quiescent current ($I_Q$) = $20mA = 0.02A$.
Collector-emitter voltage ($V_{CEQ}$) $\approx V_{CC}/2 = 12V/2 = 6V$.
Quiescent power dissipation in each transistor ($P_Q$) = $V_{CEQ} \times I_Q = 6V \times 0.02A = 0.12W = 120mW$.

---

This concludes the notes on complementary-symmetry Class B and Class AB power amplifiers. Understanding their operation, the trade-offs between them, and the methods for biasing and distortion reduction is crucial for designing effective power amplifier circuits. Remember to consult the provided textbooks for more in-depth theoretical analysis and practical circuit examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
