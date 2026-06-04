---
title: "Op-amps circuits – Scale changer, adder, integrator, and differentiator."
subject: "ANALOG ELECTRONICS LAB"
module: "Module 9: Op"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d57"
status: "completed"
scrapedAt: "2026-05-23T16:11:08.012Z"
---
# ANALOG ELECTRONICS LAB - Module 9: Op-amp Circuits

This module focuses on understanding and implementing fundamental op-amp circuits: Scale Changer, Adder, Integrator, and Differentiator. We will explore their theoretical underpinnings, practical design considerations, and simulation using circuit simulation software, aligning with Course Outcomes CO4 and CO5.

## 1. Introduction to Operational Amplifiers (Op-amps)

**Definition:** An operational amplifier (op-amp) is a high-gain, direct-coupled, differential amplifier with a very high input impedance and a very low output impedance. It is typically used to perform mathematical operations such as addition, subtraction, integration, and differentiation.

**Ideal Op-amp Characteristics:**

*   **Infinite Open-loop Gain ($A_{OL}$):** The output voltage is ideally infinite for any non-zero differential input voltage. In practice, it's very high (e.g., $10^5$ to $10^6$).
*   **Infinite Input Impedance ($Z_{in}$):** No current flows into the input terminals. This allows op-amps to be connected in cascade without loading each other.
*   **Zero Output Impedance ($Z_{out}$):** The op-amp can drive any load without its output voltage changing.
*   **Infinite Bandwidth:** The op-amp can amplify signals of any frequency.
*   **Zero Output Offset Voltage:** When the differential input voltage is zero, the output voltage is zero.
*   **Infinite Common-mode Rejection Ratio (CMRR):** The op-amp amplifies only the difference between the two input signals and rejects any signal common to both inputs.

**Real Op-amp Characteristics (Deviations from Ideal):**

*   Finite open-loop gain.
*   Finite input impedance.
*   Non-zero output impedance.
*   Limited bandwidth.
*   Output offset voltage.
*   Finite CMRR.

**Op-amp Terminals:**

*   **Inverting Input (-):** An input voltage applied here results in a 180-degree phase shift at the output.
*   **Non-inverting Input (+):** An input voltage applied here results in no phase shift at the output.
*   **Output:** The amplified output signal.
*   **Power Supplies:** Typically $+V_{CC}$ and $-V_{EE}$ (or a single supply with proper biasing).

**Key Concept: Virtual Short/Virtual Ground**

When an op-amp is used in a negative feedback configuration (as is common in these circuits), and the op-amp is operating in its linear region, two important conditions are met:

1.  **Virtual Short:** The voltage difference between the inverting and non-inverting inputs is zero ($V_+ = V_-$). This is because the open-loop gain is so high that even a tiny voltage difference would drive the output to saturation.
2.  **Virtual Ground:** If the non-inverting input ($V_+$) is connected to ground (0V), then the inverting input ($V_-$) also effectively acts as a ground, even though it's not directly connected.

**Reference:**
*   **Paynter, R. T. (Pearson Education):** Chapters on operational amplifiers will provide foundational knowledge of op-amp characteristics and ideal behavior.
*   **Boylestad & Nashelsky (Pearson Education):** Chapters on op-amps will offer detailed analysis of op-amp circuits and their applications.
*   **Neaman, D. A. (McGraw Hill Companies):** Chapters on feedback and op-amps will give insights into the design and analysis aspects.

## 2. Op-amp Circuits

### 2.1 Scale Changer (Amplifier)

**Concept:** A scale changer, commonly known as an amplifier, changes the amplitude (and possibly the sign) of an input signal.

**Circuit Configuration: Inverting Amplifier**

*   **Diagram:**
    ```
             R1
      Vin ---/\/\/\---+
                     |
                     _   -
                    | |  |
                    |_|  |
                     ^   |
                     |   |
                     +---+------ Vout
                     |   |
                     R_f |
                     |   |
                     ----|---+
                         |
                        GND
    ```
*   **Analysis:**
    *   The non-inverting input ($V_+$) is connected to ground. Therefore, $V_+ = 0V$.
    *   Due to the virtual short, $V_- = V_+ = 0V$ (virtual ground).
    *   Current through $R_1$ ($I_1$) = $(V_{in} - V_-) / R_1 = (V_{in} - 0) / R_1 = V_{in} / R_1$.
    *   Since no current flows into the op-amp input terminals (infinite input impedance), all of $I_1$ flows through $R_f$.
    *   Current through $R_f$ ($I_f$) = $(V_- - V_{out}) / R_f = (0 - V_{out}) / R_f = -V_{out} / R_f$.
    *   Equating currents: $I_1 = I_f$
        $V_{in} / R_1 = -V_{out} / R_f$
    *   **Voltage Gain ($A_v$) = $V_{out} / V_{in} = -R_f / R_1$**

*   **Key Features:**
    *   **Gain:** Determined by the ratio of feedback resistor ($R_f$) to input resistor ($R_1$).
    *   **Inverting:** The output signal is 180 degrees out of phase with the input signal.
    *   **Input Impedance:** Approximately equal to $R_1$.
    *   **Output Impedance:** Very low (due to op-amp's nature).

*   **Example:** If $R_1 = 1 \text{ k}\Omega$ and $R_f = 10 \text{ k}\Omega$, the gain is $-10$. A 1V input will produce a -10V output.

**Circuit Configuration: Non-inverting Amplifier**

*   **Diagram:**
    ```
        Vin ---+
               |
               +----| +
                    |
                    |
                   ---
                   ---
                    |
                    |
                    +------+
                    |      |
                    |     -
                    |    | |
                    |    |_|
                    |     ^
                    |     |
                    +-----+---- Vout
                    |     |
                    R1    Rf
                    |     |
                   GND   GND
    ```
*   **Analysis:**
    *   The non-inverting input ($V_+$) receives $V_{in}$.
    *   Due to the virtual short, $V_- = V_+ = V_{in}$.
    *   Current through $R_1$ ($I_1$) = $(V_- - 0) / R_1 = V_{in} / R_1$.
    *   This current flows through $R_f$.
    *   Current through $R_f$ ($I_f$) = $(V_{out} - V_-) / R_f = (V_{out} - V_{in}) / R_f$.
    *   Equating currents: $I_1 = I_f$
        $V_{in} / R_1 = (V_{out} - V_{in}) / R_f$
        $V_{in} \cdot R_f = V_{out} \cdot R_1 - V_{in} \cdot R_1$
        $V_{in} \cdot (R_f + R_1) = V_{out} \cdot R_1$
    *   **Voltage Gain ($A_v$) = $V_{out} / V_{in} = (R_1 + R_f) / R_1 = 1 + R_f / R_1$**

*   **Key Features:**
    *   **Gain:** Always greater than or equal to 1. Determined by the ratio of resistors.
    *   **Non-inverting:** The output signal is in phase with the input signal.
    *   **Input Impedance:** Very high (equal to the op-amp's input impedance).
    *   **Output Impedance:** Very low.

*   **Example:** If $R_1 = 10 \text{ k}\Omega$ and $R_f = 90 \text{ k}\Omega$, the gain is $1 + 90/10 = 10$. A 1V input will produce a 10V output.

**CO Alignment:** CO4 (Design and implement basic circuits using IC (OPAMP)). CO5 (Simulate electronic circuits).

### 2.2 Adder (Summing Amplifier)

**Concept:** An adder circuit uses op-amps to sum multiple input voltages, often with different weighting factors.

**Circuit Configuration: Inverting Summing Amplifier**

*   **Diagram:**
    ```
             R1
      V1 ---/\/\/\---+
                     |
             R2      |
      V2 ---/\/\/\---+
                     |
             R3      |
      V3 ---/\/\/\---+
                     |
                     _   -
                    | |  |
                    |_|  |
                     ^   |
                     |   |
                     +---+------ Vout
                     |   |
                     R_f |
                     |   |
                     ----|---+
                         |
                        GND
    ```
*   **Analysis:**
    *   The non-inverting input ($V_+$) is connected to ground, so $V_+ = 0V$.
    *   Due to the virtual short, $V_- = V_+ = 0V$ (virtual ground).
    *   Currents into the summing junction ($V_-$):
        *   $I_1 = (V_1 - V_-) / R_1 = V_1 / R_1$
        *   $I_2 = (V_2 - V_-) / R_2 = V_2 / R_2$
        *   $I_3 = (V_3 - V_-) / R_3 = V_3 / R_3$
    *   The total current flowing out of the summing junction through $R_f$ ($I_f$) is the sum of these input currents (since no current enters the op-amp).
        $I_f = I_1 + I_2 + I_3$
    *   $I_f = (V_- - V_{out}) / R_f = (0 - V_{out}) / R_f = -V_{out} / R_f$
    *   Equating: $-V_{out} / R_f = V_1 / R_1 + V_2 / R_2 + V_3 / R_3$
    *   **Output Voltage ($V_{out}$) = $-(R_f/R_1 \cdot V_1 + R_f/R_2 \cdot V_2 + R_f/R_3 \cdot V_3)$**

*   **Key Features:**
    *   **Summing:** Output is a weighted sum of inputs.
    *   **Inverting:** The output is the negative of the sum.
    *   **Weighting:** The contribution of each input to the output depends on the ratio of $R_f$ to its corresponding input resistor ($R_1, R_2, R_3$).
    *   **Design Tip:** To achieve equal weighting, set all input resistors equal to $R_1$. To achieve specific weighting, adjust the input resistors. For example, to make $V_2$ have twice the weight of $V_1$, set $R_2 = R_1/2$ (assuming $R_f$ is the same for both).

*   **Example:** If $R_1 = 10 \text{ k}\Omega$, $R_2 = 20 \text{ k}\Omega$, $R_3 = 10 \text{ k}\Omega$, and $R_f = 10 \text{ k}\Omega$:
    $V_{out} = -( (10/10)V_1 + (10/20)V_2 + (10/10)V_3 ) = -(V_1 + 0.5V_2 + V_3)$.
    If $V_1=1V$, $V_2=2V$, $V_3=1V$, then $V_{out} = -(1 + 0.5(2) + 1) = -(1 + 1 + 1) = -3V$.

**Circuit Configuration: Non-inverting Summing Amplifier**

*   **Diagram:** Requires multiple inputs to the non-inverting terminal with appropriate resistors, and feedback to the inverting terminal. This is more complex and less common for simple summing. The inverting summing amplifier is generally preferred for its simplicity and direct relationship between input voltage and output.

**CO Alignment:** CO4 (Design and implement basic circuits using IC (OPAMP)). CO5 (Simulate electronic circuits).

### 2.3 Integrator

**Concept:** An integrator circuit produces an output voltage that is proportional to the integral of the input voltage with respect to time.

**Circuit Configuration: Inverting Integrator**

*   **Diagram:**
    ```
             R
      Vin ---/\/\/\---+
                     |
                     -
                    | |
                    |_|
                     ^
                     |
                     +---+------ Vout
                     |   |
                     C   |
                     |   |
                     ----|---+
                         |
                        GND
    ```
*   **Analysis:**
    *   The non-inverting input ($V_+$) is connected to ground, so $V_+ = 0V$.
    *   Due to the virtual short, $V_- = V_+ = 0V$ (virtual ground).
    *   Current through the resistor ($I_R$) = $(V_{in} - V_-) / R = V_{in} / R$.
    *   This current charges the capacitor. The current through a capacitor is given by $I_C = C \cdot dV_C/dt$.
    *   Since $V_-$ is at virtual ground, the voltage across the capacitor is $V_C = V_{out} - V_- = V_{out}$.
    *   Therefore, $I_C = C \cdot dV_{out}/dt$.
    *   The current entering the summing junction from the input resistor is equal to the current leaving the summing junction through the capacitor (as no current enters the op-amp).
        $I_R = I_C$
        $V_{in} / R = C \cdot dV_{out}/dt$
    *   Rearranging to solve for $V_{out}$:
        $dV_{out}/dt = (1/RC) \cdot V_{in}$
    *   Integrating both sides with respect to time:
        $\int dV_{out} = \int (1/RC) \cdot V_{in}(t) dt$
    *   **Output Voltage ($V_{out}(t)$) = $-(1/RC) \int V_{in}(t) dt + V_{initial}$**
        Where $V_{initial}$ is the voltage across the capacitor at $t=0$.

*   **Key Features:**
    *   **Integration:** Output is the integral of the input.
    *   **Inverting:** The output is the negative integral.
    *   **Time Constant (RC):** Determines the integration rate. A larger RC means slower integration.
    *   **Gain:** The $1/RC$ term acts as a gain factor for the integration.
    *   **DC Input:** If a DC voltage is applied to the input, the capacitor will charge up to the supply voltage, causing the output to saturate. This is a limitation of the basic integrator.

*   **Example:** If $R = 10 \text{ k}\Omega$ and $C = 0.1 \mu F$, then $RC = (10 \times 10^3) \times (0.1 \times 10^{-6}) = 1 \times 10^{-3} \text{ s}$.
    $V_{out}(t) = -(1/0.001) \int V_{in}(t) dt = -1000 \int V_{in}(t) dt$.
    If $V_{in}(t) = 5V$ (constant DC), $V_{out}(t) = -1000 \int 5 dt = -5000t$. This will quickly saturate the op-amp output.

**Practical Integrator (Addressing DC Input Issue):**

To prevent saturation due to a DC input, a high-value resistor ($R_{f}$) can be placed in parallel with the feedback capacitor ($C$). This resistor provides a DC feedback path, limiting the gain for DC signals and preventing saturation.

*   **Diagram:** (Same as basic integrator but with $R_f$ in parallel with $C$)
    ```
             R
      Vin ---/\/\/\---+
                     |
                     -
                    | |
                    |_|
                     ^
                     |
                     +---+------ Vout
                     |   |
                     C   Rf
                     |   |
                     ----|---+
                         |
                        GND
    ```
*   **Analysis (with $R_f$):** The circuit becomes a low-pass filter for DC signals, with a very high gain for frequencies below the cutoff frequency. For signals with AC components, it approximates an integrator.

**CO Alignment:** CO4 (Design and implement basic circuits using IC (OPAMP)). CO5 (Simulate electronic circuits).

### 2.4 Differentiator

**Concept:** A differentiator circuit produces an output voltage that is proportional to the derivative of the input voltage with respect to time.

**Circuit Configuration: Inverting Differentiator**

*   **Diagram:**
    ```
             C
      Vin ---||----/\/\/\---+
                     |
                     -
                    | |
                    |_|
                     ^
                     |
                     +---+------ Vout
                     |   |
                     R   |
                     |   |
                     ----|---+
                         |
                        GND
    ```
*   **Analysis:**
    *   The non-inverting input ($V_+$) is connected to ground, so $V_+ = 0V$.
    *   Due to the virtual short, $V_- = V_+ = 0V$ (virtual ground).
    *   The capacitor acts as the input element. The current through the capacitor is $I_C = C \cdot dV_{in}/dt$.
    *   This current flows through the resistor ($R$) to the output.
    *   Current through the resistor ($I_R$) = $(V_- - V_{out}) / R = (0 - V_{out}) / R = -V_{out} / R$.
    *   Equating currents: $I_C = I_R$
        $C \cdot dV_{in}/dt = -V_{out} / R$
    *   Rearranging to solve for $V_{out}$:
        **Output Voltage ($V_{out}(t)$) = $-RC \cdot dV_{in}(t)/dt$**

*   **Key Features:**
    *   **Differentiation:** Output is the derivative of the input.
    *   **Inverting:** The output is the negative derivative.
    *   **Time Constant (RC):** Determines the differentiation rate. A larger RC means a greater output for a given rate of change.
    *   **Gain:** The $RC$ term acts as a gain factor for the differentiation.
    *   **Noise Sensitivity:** Differentiators are highly sensitive to noise, especially high-frequency noise, as the derivative of noise is often amplified. This is a significant practical limitation.
    *   **High-Frequency Gain:** The gain of the differentiator increases with frequency ($|A_v| = \omega RC$). This can lead to instability and amplification of unwanted high-frequency noise.

*   **Example:** If $R = 100 \text{ k}\Omega$ and $C = 0.01 \mu F$, then $RC = (100 \times 10^3) \times (0.01 \times 10^{-6}) = 1 \times 10^{-3} \text{ s}$.
    $V_{out}(t) = -(0.001) dV_{in}(t)/dt$.
    If $V_{in}(t) = 5t$ (a ramp), then $dV_{in}/dt = 5$. $V_{out}(t) = -(0.001)(5) = -0.005V$.
    If $V_{in}(t) = \sin(\omega t)$, then $dV_{in}/dt = \omega \cos(\omega t)$. $V_{out}(t) = -RC \omega \cos(\omega t)$. The output is a cosine wave, phase-shifted.

**Practical Differentiator (Addressing Noise and Stability):**

To mitigate the high-frequency gain and noise sensitivity, a small resistor ($R_{in}$) can be placed in series with the input capacitor ($C$), and a small capacitor ($C_f$) can be placed in parallel with the feedback resistor ($R$).

*   **Diagram:** (Illustrative of modifications for practical differentiator)
    ```
             Cin
      Vin ---||----/\/\/\---+
                     |
                     -
                    | |
                    |_|
                     ^
                     |
                     +---+------ Vout
                     |   |
                     Rf  Cf
                     |   |
                     ----|---+
                         |
                        GND
    ```
    *   Adding $R_{in}$ limits the gain at very high frequencies.
    *   Adding $C_f$ limits the overall bandwidth and reduces high-frequency gain.

**CO Alignment:** CO4 (Design and implement basic circuits using IC (OPAMP)). CO5 (Simulate electronic circuits).

## 3. Practice Questions and Exercises

**Instructions:** Assume ideal op-amps for these calculations.

**Question 1 (Scale Changer):**
Design an inverting amplifier using an op-amp to provide a voltage gain of -5. Use a $10 \text{ k}\Omega$ resistor for $R_1$.
*   **Answer:** $R_f = -A_v \cdot R_1 = -(-5) \cdot 10 \text{ k}\Omega = 50 \text{ k}\Omega$.

**Question 2 (Scale Changer):**
Design a non-inverting amplifier using an op-amp to provide a voltage gain of +10. Use a $10 \text{ k}\Omega$ resistor for $R_1$.
*   **Answer:** $A_v = 1 + R_f/R_1 \implies 10 = 1 + R_f/10 \text{ k}\Omega \implies 9 = R_f/10 \text{ k}\Omega \implies R_f = 90 \text{ k}\Omega$.

**Question 3 (Adder):**
Design an inverting summing amplifier that produces an output voltage $V_{out} = -(2V_1 + 0.5V_2)$. Use a feedback resistor $R_f = 20 \text{ k}\Omega$.
*   **Answer:**
    For $V_1$: $R_1 = R_f / 2 = 20 \text{ k}\Omega / 2 = 10 \text{ k}\Omega$.
    For $V_2$: $R_2 = R_f / 0.5 = 20 \text{ k}\Omega / 0.5 = 40 \text{ k}\Omega$.

**Question 4 (Integrator):**
A basic inverting integrator has $R = 10 \text{ k}\Omega$ and $C = 0.1 \mu F$. If the input is a step voltage of +2V, what is the output voltage after 5 ms? Assume the output was initially 0V.
*   **Answer:** $RC = (10 \times 10^3) \times (0.1 \times 10^{-6}) = 1 \text{ ms}$.
    $V_{out}(t) = -(1/RC) \int V_{in}(t) dt$.
    For $V_{in} = 2V$ (constant) from $t=0$ to $t=5$ ms:
    $V_{out}(t) = -(1/0.001) \int_0^t 2 d\tau = -1000 \cdot [2\tau]_0^t = -1000 \cdot (2t) = -2000t$.
    At $t = 5 \text{ ms} = 0.005 \text{ s}$:
    $V_{out}(0.005) = -2000 \times 0.005 = -10V$.

**Question 5 (Differentiator):**
A basic inverting differentiator has $R = 100 \text{ k}\Omega$ and $C = 0.01 \mu F$. If the input is a voltage $V_{in}(t) = 3 \sin(1000t)$, find the output voltage $V_{out}(t)$.
*   **Answer:** $RC = (100 \times 10^3) \times (0.01 \times 10^{-6}) = 1 \text{ ms}$.
    $V_{out}(t) = -RC \cdot dV_{in}(t)/dt$.
    $dV_{in}(t)/dt = d/dt (3 \sin(1000t)) = 3 \cdot 1000 \cos(1000t) = 3000 \cos(1000t)$.
    $V_{out}(t) = -(0.001) \cdot (3000 \cos(1000t)) = -3 \cos(1000t)$.

## 4. Important Points to Remember

*   **Virtual Short and Virtual Ground:** These are crucial concepts for analyzing op-amp circuits with negative feedback.
*   **Resistor Ratios:** For amplifiers and summing amplifiers, the ratio of resistors ($R_f/R_1$, $R_f/R_2$, etc.) determines the gain and weighting.
*   **RC Time Constant:** In integrators and differentiators, the product $RC$ is critical in determining the circuit's behavior with respect to time.
*   **Integrator Limitation:** Basic integrators saturate with DC inputs. Use a parallel feedback resistor for practical applications.
*   **Differentiator Limitation:** Differentiators are sensitive to noise and have high-frequency gain issues. Practical circuits use modifications to improve stability.
*   **Simulation is Key:** Always verify your circuit designs and understanding through simulations (using software like LTspice, Multisim, etc.) before building them on a breadboard. This helps identify potential issues and confirm theoretical calculations.
*   **Component Values:** When selecting actual components, consider standard available values and tolerances.
*   **Op-amp Selection:** The choice of op-amp IC (e.g., LM741, TL081) will affect performance characteristics like bandwidth, slew rate, and noise.

This module provides a strong foundation for understanding how op-amps can be used to build essential signal processing circuits. By mastering these configurations, you'll be well-equipped for more complex analog circuit design.
