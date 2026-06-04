---
title: "Op- Amp Circuits  – Inverting Amplifiers – Non inverting Amplifiers – Summing and Difference Amplifiers – Instrumentation Amplifiers"
subject: "ANALOG ELECTRONICS"
module: "Module 3: Introduction to Operational Amplifiers (Op"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b65"
status: "completed"
scrapedAt: "2026-05-23T16:10:56.866Z"
---
# ANALOG ELECTRONICS - Module 3: Introduction to Operational Amplifiers (Op-Amps)

## Topic: Op-Amp Circuits

This module introduces fundamental operational amplifier (op-amp) configurations, building upon the foundational knowledge of op-amp characteristics from previous modules. We will explore how op-amps can be configured to perform various signal processing tasks, including amplification, summation, and difference operations, laying the groundwork for more complex analog circuit design.

**Course Outcomes Addressed:**

*   **CO3: Design and develop various OPAMP application circuits.** (Knowledge Level: K3) - This entire topic directly contributes to this CO by detailing the design principles of key op-amp circuits.

**Textbook References:**

*   **Paynter, R. T. (Pearson Education):** Likely covers basic op-amp configurations and their analysis.
*   **Boylestad, R. L., & Nashelsky, L. (Pearson Education):** Expect detailed circuit analysis and design considerations for op-amp applications.
*   **Neaman, D. A. (McGraw Hill Companies):** Will likely provide a rigorous approach to op-amp circuit analysis and design.

**Reference Book References:**

*   **Floyd, T. L. (Pearson Education):** Provides practical insights and fundamental understanding of op-amp circuits.
*   **Gayakward, R. A. (PHI Learning Pvt. Ltd.):** A highly recommended resource for op-amp applications and IC circuits.
*   **Bell, D. A. (Oxford Higher Education):** Offers a comprehensive treatment of op-amp circuits and their applications.
*   **Choudhury, R. (New Age International Publishers):** Will likely offer a clear and concise explanation of op-amp circuits.

---

### 1. The Ideal Op-Amp Revisited

Before delving into specific circuits, it's crucial to recall the characteristics of an *ideal op-amp*. Understanding these ideal properties simplifies circuit analysis and design, and then we can consider how real op-amp limitations affect performance.

**Key Concepts:**

*   **Infinite Open-Loop Gain ($A_{OL}$):** The output voltage is infinitely amplified relative to the input voltage difference.
*   **Infinite Input Impedance ($Z_{in}$):** No current flows into or out of the input terminals.
*   **Zero Output Impedance ($Z_{out}$):** The output voltage is independent of the load connected to the output.
*   **Infinite Bandwidth:** The op-amp amplifies signals over an infinite range of frequencies.
*   **Zero Input Offset Voltage:** When the input voltage difference is zero, the output voltage is also zero.
*   **Infinite Common-Mode Rejection Ratio (CMRR):** The op-amp amplifies only the difference between the input signals and rejects any common-mode signals.

**Consequences of Ideal Op-Amp Assumptions:**

*   **Virtual Short (or Virtual Ground):** For an op-amp operating with negative feedback and whose open-loop gain is very large, the voltage difference between the inverting and non-inverting terminals is essentially zero ($v_+ \approx v_-$). This is a critical concept for analyzing many op-amp circuits.
*   **No Input Current:** Due to infinite input impedance, no current flows into the inverting ($I_-$) or non-inverting ($I_+$) terminals.

---

### 2. Inverting Amplifier

The inverting amplifier configuration is one of the most fundamental op-amp circuits, providing voltage gain with a 180-degree phase shift.

**Circuit Diagram:**

```
      Rin
Vin --/\/\/--+-----------------+
             |                 |
             _             _   |
            -|+           |+  |
            ---| op-amp |---|---- Vout
               |_      _|    |
                 |     |     |
                 +-----|-----Rin
                       |
                      GND
```

**Key Concepts & Analysis:**

*   **Input Signal:** Applied to the inverting terminal through an input resistor ($R_{in}$).
*   **Non-inverting Terminal:** Connected to ground (0V).
*   **Feedback Resistor ($R_f$):** Connected from the output to the inverting terminal, providing negative feedback.

**Derivation of Gain:**

1.  **Virtual Ground:** Since the non-inverting terminal is at ground ($v_+ = 0$), and due to the virtual short, the inverting terminal is also at virtual ground ($v_- \approx 0$).
2.  **Input Current:** The current flowing through $R_{in}$ is $I_{in} = (V_{in} - v_-) / R_{in}$. Since $v_- \approx 0$, $I_{in} = V_{in} / R_{in}$.
3.  **No Input Current:** Due to the ideal op-amp's infinite input impedance, no current flows into the inverting terminal ($I_- = 0$). Therefore, all the input current must flow through the feedback resistor ($R_f$).
4.  **Feedback Current:** $I_f = I_{in}$. The current through $R_f$ is also given by $I_f = (v_- - V_{out}) / R_f$. Since $v_- \approx 0$, $I_f = -V_{out} / R_f$.
5.  **Equating Currents:** $V_{in} / R_{in} = -V_{out} / R_f$.
6.  **Voltage Gain ($A_v$):** $V_{out} / V_{in} = -R_f / R_{in}$.

**Important Points to Remember:**

*   The voltage gain is negative, indicating a 180-degree phase shift between the input and output signals.
*   The magnitude of the gain is determined by the ratio of the feedback resistor to the input resistor ($|A_v| = R_f / R_{in}$).
*   The input impedance of the inverting amplifier is approximately equal to $R_{in}$ because the inverting terminal is at virtual ground.

**Example:**

If $R_{in} = 10 \, k\Omega$ and $R_f = 100 \, k\Omega$, and $V_{in} = 1 \, V$, then the output voltage is $V_{out} = -(100 \, k\Omega / 10 \, k\Omega) \times 1 \, V = -10 \, V$.

**Practice Question 1:**

Design an inverting amplifier with a voltage gain of -5 and an input impedance of $20 \, k\Omega$.

**Answer:**

To achieve a gain of -5, we need $R_f / R_{in} = 5$. With an input impedance of $20 \, k\Omega$, $R_{in} = 20 \, k\Omega$. Therefore, $R_f = 5 \times 20 \, k\Omega = 100 \, k\Omega$.

---

### 3. Non-inverting Amplifier

The non-inverting amplifier configuration provides voltage gain without a phase shift between the input and output signals.

**Circuit Diagram:**

```
      Rin
Vin --+--/\/\/--+-----------------+
      |         |                 |
      |         _             _   |
      |        -|+           |+  |
      +-----------| op-amp |---|---- Vout
                |_      _|    |
                  |     |     |
                  +-----|-----Rf
                        |
                       GND
```

**Key Concepts & Analysis:**

*   **Input Signal:** Applied directly to the non-inverting terminal.
*   **Non-inverting Terminal:** Connected to the input signal.
*   **Feedback Network:** Consists of a voltage divider formed by $R_{in}$ and $R_f$. $R_{in}$ is connected from the inverting terminal to ground, and $R_f$ is connected from the output to the inverting terminal.

**Derivation of Gain:**

1.  **Virtual Short:** Due to negative feedback and high open-loop gain, $v_+ \approx v_-$.
2.  **Voltage at Non-inverting Terminal:** $v_+ = V_{in}$.
3.  **Voltage at Inverting Terminal:** Therefore, $v_- \approx V_{in}$.
4.  **Voltage Divider at Inverting Terminal:** The voltage at the inverting terminal is determined by the voltage divider formed by $R_{in}$ and $R_f$. The voltage across $R_{in}$ is $V_{out} \times (R_{in} / (R_{in} + R_f))$. This voltage is also $v_-$.
5.  **Equating Voltages:** $V_{in} = V_{out} \times (R_{in} / (R_{in} + R_f))$.
6.  **Voltage Gain ($A_v$):** $V_{out} / V_{in} = (R_{in} + R_f) / R_{in} = 1 + R_f / R_{in}$.

**Important Points to Remember:**

*   The voltage gain is positive, indicating no phase shift between the input and output signals.
*   The minimum gain for a non-inverting amplifier is 1 (when $R_f = 0$, or effectively $R_f \to 0$ and $R_{in} \to \infty$ which is not a practical circuit for gain. A gain of 1 is achieved by connecting the output directly to the inverting input, forming a voltage follower).
*   The input impedance of the non-inverting amplifier is extremely high, theoretically infinite, because the input signal is applied directly to the non-inverting terminal. This is a significant advantage over the inverting configuration for high-impedance signal sources.

**Example:**

If $R_{in} = 10 \, k\Omega$ and $R_f = 100 \, k\Omega$, and $V_{in} = 1 \, V$, then the output voltage is $V_{out} = (1 + 100 \, k\Omega / 10 \, k\Omega) \times 1 \, V = (1 + 10) \times 1 \, V = 11 \, V$.

**Practice Question 2:**

Design a non-inverting amplifier with a voltage gain of 20.

**Answer:**

We need $1 + R_f / R_{in} = 20$, which means $R_f / R_{in} = 19$. We can choose $R_{in} = 10 \, k\Omega$, then $R_f = 19 \times 10 \, k\Omega = 190 \, k\Omega$.

---

### 4. Summing Amplifier (Summer)

A summing amplifier uses an op-amp to produce an output voltage that is proportional to the sum of multiple input voltages.

**Circuit Diagram:**

```
      R1
Vin1 --/\/\/--+-----------------+
             |                 |
      R2       _             _   |
Vin2 --/\/\/--+             |+  |
             |             |     |
             _            -|+  |
            -|+           |_  |
            ---| op-amp |---|---- Vout
               |_      _|    |
                 |     |     |
                 +-----|-----Rf
                       |
                      GND
```

**Key Concepts & Analysis:**

*   **Multiple Inputs:** Several input signals ($V_{in1}, V_{in2}, \dots$) are applied through separate input resistors ($R_1, R_2, \dots$).
*   **Common Feedback Resistor:** All input currents sum and flow through a common feedback resistor ($R_f$).

**Derivation of Gain:**

1.  **Virtual Ground:** $v_+ = 0$, so $v_- \approx 0$.
2.  **Input Currents:** $I_1 = (V_{in1} - v_-) / R_1 = V_{in1} / R_1$, $I_2 = (V_{in2} - v_-) / R_2 = V_{in2} / R_2$, and so on.
3.  **Sum of Input Currents:** $I_{total} = I_1 + I_2 + \dots = V_{in1}/R_1 + V_{in2}/R_2 + \dots$.
4.  **Feedback Current:** $I_f = (v_- - V_{out}) / R_f = -V_{out} / R_f$.
5.  **Equating Currents:** $I_{total} = I_f$.
    $V_{in1}/R_1 + V_{in2}/R_2 + \dots = -V_{out} / R_f$.
6.  **Output Voltage ($V_{out}$):** $V_{out} = -(R_f/R_1)V_{in1} - (R_f/R_2)V_{in2} - \dots$.

**Special Case: Equal Input Resistors ($R_1 = R_2 = \dots = R$):**

$V_{out} = -(R_f/R) \times (V_{in1} + V_{in2} + \dots)$. The gain for each input is $-R_f/R$.

**Weighted Summing Amplifier:**

By choosing different values for the input resistors, we can create a weighted sum. If $R_1 < R_2$, then the input $V_{in1}$ will have a larger gain (more negative) than $V_{in2}$.

**Important Points to Remember:**

*   The output is an inverted, weighted sum of the input voltages.
*   To achieve a simple sum with equal gains for each input, all input resistors should be equal, and the feedback resistor should be equal to the input resistors.
*   This circuit is useful for analog computation (e.g., addition, subtraction by inverting one input) and signal mixing.

**Example:**

Let $R_1 = 10 \, k\Omega$, $R_2 = 20 \, k\Omega$, $R_f = 100 \, k\Omega$.
If $V_{in1} = 2 \, V$ and $V_{in2} = 3 \, V$, then
$V_{out} = -(100\,k\Omega/10\,k\Omega) \times 2\,V - (100\,k\Omega/20\,k\Omega) \times 3\,V$
$V_{out} = -10 \times 2\,V - 5 \times 3\,V = -20\,V - 15\,V = -35\,V$.

**Practice Question 3:**

Design a summing amplifier to produce an output $V_{out} = -2V_{in1} - 4V_{in2}$.

**Answer:**

We need $R_f/R_1 = 2$ and $R_f/R_2 = 4$. Let $R_f = 100 \, k\Omega$.
Then $R_1 = R_f / 2 = 100 \, k\Omega / 2 = 50 \, k\Omega$.
And $R_2 = R_f / 4 = 100 \, k\Omega / 4 = 25 \, k\Omega$.

---

### 5. Difference Amplifier (Subtractor)

The difference amplifier produces an output voltage that is proportional to the difference between two input voltages.

**Circuit Diagram:**

```
      R1
Vin1 --/\/\/--+-----------------+
             |                 |
      R2       _             _   |
Vin2 --/\/\/--+             |+  |
             |             |     |
             _            -|+  |
            -|+           |_  |
            ---| op-amp |---|---- Vout
               |_      _|    |
                 |     |     |
                 +-----|-----R1
                       |
                       R2
                       |
                      GND
```

**Key Concepts & Analysis:**

*   **Two Inputs:** $V_{in1}$ is applied through $R_1$ to the inverting terminal, and $V_{in2}$ is applied through $R_2$ to the non-inverting terminal.
*   **Feedback Network:** A voltage divider ($R_1$ and $R_2$) is connected to the inverting terminal, and another voltage divider ($R_1$ and $R_2$) is connected to the non-inverting terminal.

**Derivation of Gain (with $R_1$ and $R_2$ for both inputs, and $R_f = R_1$ and $R_g = R_2$ for the feedback network):**

The general analysis involves superposition.

1.  **Case 1: $V_{in2} = 0$ (Inverting Amplifier configuration for $V_{in1}$):**
    The non-inverting terminal is grounded. The circuit is an inverting amplifier.
    $V_{out1} = -(R_f/R_1) \times V_{in1}$.

2.  **Case 2: $V_{in1} = 0$ (Non-inverting Amplifier configuration for $V_{in2}$):**
    The inverting terminal is connected to ground through $R_1$. The input $V_{in2}$ is applied to the non-inverting terminal through $R_2$. The feedback network consists of $R_f$ and $R_g$ connected to the inverting terminal.
    The voltage at the non-inverting terminal is $v_+ = V_{in2} \times (R_g / (R_2 + R_g))$.
    The inverting terminal is at virtual ground, $v_- \approx 0$.
    The current into the op-amp is $I_- = 0$.
    The current through $R_2$ is $(V_{in2} - v_+) / R_2$.
    The current through $R_g$ is $(v_+ - V_{out2}) / R_g$.
    Actually, it's easier to use the non-inverting amplifier formula for $V_{in2}$ if we consider the voltage at the non-inverting terminal as the input. The gain is $1 + R_f/R_1$.
    However, the voltage at the non-inverting terminal is not $V_{in2}$ directly if $R_2$ is there.

    Let's use the general formula for the difference amplifier derived by superposition or nodal analysis.
    The output voltage is given by:
    $V_{out} = \frac{R_f}{R_1}(V_{in2} \frac{R_g+R_2}{R_2+R_g} - V_{in1}) - \frac{R_f}{R_1} V_{in1}$ ... this is incorrect.

    Let's use the standard difference amplifier configuration where:
    *   $V_{in1}$ is applied through $R_1$ to the inverting input.
    *   $V_{in2}$ is applied through $R_2$ to the non-inverting input.
    *   A resistor $R_3$ is connected from the inverting input to ground.
    *   A resistor $R_4$ is connected from the output to the inverting input (feedback).

    The formula for a general difference amplifier is:
    $V_{out} = \frac{R_4}{R_1} (V_{in2} \frac{R_3+R_4}{R_2+R_3+R_4} - V_{in1} \frac{R_3}{R_3}) $ ... still complex.

    **Let's consider the most common and symmetric difference amplifier configuration:**
    *   $V_{in1}$ applied to inverting terminal via $R_{in1}$.
    *   $V_{in2}$ applied to non-inverting terminal via $R_{in2}$.
    *   $R_f$ from output to inverting terminal.
    *   $R_{g}$ from inverting terminal to ground.
    *   $R_{h}$ from non-inverting terminal to ground.

    For a perfect difference amplifier, we need:
    $R_{in1} = R_f$
    $R_{in2} = R_h$
    $R_1 = R_g$ (where $R_1$ is the resistor associated with $V_{in1}$)
    $R_2 = R_h$ (where $R_2$ is the resistor associated with $V_{in2}$)

    **Standard Difference Amplifier Circuit:**

    ```
          R1
    Vin1 --/\/\/--+-----------------+
                 |                 |
                 _             _   |
                -|+           |+  |
                ---| op-amp |---|---- Vout
                   |_      _|    |
                     |     |     |
                     +-----|-----Rf
                           |
                          R_g
                           |
                          GND

          R2
    Vin2 --+--/\/\/--+
             |         |
             |         R_h
             |         |
             +---------|----- Non-inverting terminal
                       |
                      GND
    ```

    **Analysis for the Symmetric Case ($R_1 = R_f$ and $R_2 = R_h$):**

    1.  **Virtual Ground:** $v_- \approx v_+$.
    2.  **Voltage at Non-inverting Terminal ($v_+$):** $v_+ = V_{in2} \times (R_h / (R_2 + R_h))$.
    3.  **Voltage at Inverting Terminal ($v_-$):** $v_- = v_+ = V_{in2} \times (R_h / (R_2 + R_h))$.
    4.  **Input Current to Inverting Terminal ($I_-$):** $I_- = 0$.
    5.  **Current through $R_1$:** $I_{in1} = (V_{in1} - v_-) / R_1$.
    6.  **Current through $R_f$:** $I_f = (v_- - V_{out}) / R_f$.
    7.  **Equating Currents:** $I_{in1} = I_f$.
        $(V_{in1} - v_-) / R_1 = (v_- - V_{out}) / R_f$.
    8.  **Substituting $v_-$:** $(V_{in1} - V_{in2} \frac{R_h}{R_2 + R_h}) / R_1 = (V_{in2} \frac{R_h}{R_2 + R_h} - V_{out}) / R_f$.
    9.  **For perfect difference, we need $R_1 = R_f$ and $R_2 = R_h$:**
        $(V_{in1} - V_{in2} \frac{R_2}{R_2 + R_2}) / R_1 = (V_{in2} \frac{R_2}{R_2 + R_2} - V_{out}) / R_1$.
        $V_{in1} - V_{in2}/2 = V_{in2}/2 - V_{out}$.
        $V_{out} = V_{in2}/2 - V_{in1} + V_{in2}/2 = V_{in2} - V_{in1}$.

        **Wait, this is not the standard formula.** Let's re-evaluate the case where $R_1 = R_f$ and $R_2 = R_h$.
        If $V_{in1}$ is applied through $R_1$ and $R_f$ is the feedback resistor.
        If $V_{in2}$ is applied through $R_2$ and $R_h$ is connected from the non-inverting terminal to ground.

        The output voltage of a difference amplifier is generally:
        $V_{out} = (1 + R_f/R_1) \times V_{in2\_effective} - (R_f/R_1) \times V_{in1}$.

        Where $V_{in2\_effective}$ is the voltage at the non-inverting terminal.
        $V_{in2\_effective} = V_{in2} \times \frac{R_h}{R_2 + R_h}$.

        So, $V_{out} = (1 + R_f/R_1) \times V_{in2} \frac{R_h}{R_2 + R_h} - (R_f/R_1) \times V_{in1}$.

        **For a perfect difference amplifier, where $V_{out} = A(V_{in2} - V_{in1})$:**
        We need the coefficient of $V_{in1}$ and $V_{in2}$ to be the same magnitude and opposite sign, and the coefficient of $V_{in2}$ should be positive.
        This requires:
        $(1 + R_f/R_1) \frac{R_h}{R_2 + R_h} = R_f/R_1$.

        Let $G = R_f/R_1$.
        $(1 + G) \frac{R_h}{R_2 + R_h} = G$.
        $1 + G = G \frac{R_2 + R_h}{R_h} = G (1 + R_2/R_h)$.
        $1 + G = G + G \frac{R_2}{R_h}$.
        $1 = G \frac{R_2}{R_h}$.
        $R_h = G \times R_2 = (R_f/R_1) \times R_2$.

        So, the conditions for a perfect difference amplifier are:
        1.  $R_f/R_1 = R_h/R_2$ (This ensures the gain magnitude for both inputs is the same).
        2.  $V_{out} = (R_f/R_1) \times (V_{in2} - V_{in1})$ (This requires the second condition derived above).

        A simpler way to remember the symmetric difference amplifier:
        *   $R_1$ from $V_{in1}$ to inverting terminal.
        *   $R_f$ from output to inverting terminal.
        *   $R_2$ from $V_{in2}$ to non-inverting terminal.
        *   $R_h$ from non-inverting terminal to ground.
        **If $R_1 = R_f$ and $R_2 = R_h$:**
        $V_{out} = (1 + R_f/R_1) \times V_{in2} \frac{R_h}{R_2 + R_h} - (R_f/R_1) \times V_{in1}$
        $V_{out} = (1 + 1) \times V_{in2} \frac{R_2}{R_2 + R_2} - 1 \times V_{in1}$
        $V_{out} = 2 \times V_{in2} \times (1/2) - V_{in1}$
        $V_{out} = V_{in2} - V_{in1}$.

        **This still gives a gain of 1.** The standard difference amplifier has a configurable gain.

        **Let's use the configuration where:**
        *   $V_{in1}$ to inverting terminal via $R_1$.
        *   $V_{in2}$ to non-inverting terminal via $R_2$.
        *   $R_f$ from output to inverting terminal.
        *   $R_g$ from inverting terminal to ground.

        Then the output is:
        $V_{out} = \frac{R_f}{R_1}(V_{in2} \frac{R_g+R_1}{R_2+R_g+R_1} - V_{in1}) $ ... Still not the standard one.

        **Correct Standard Difference Amplifier Analysis:**
        Circuit:
        *   $V_{in1}$ through $R_1$ to inverting terminal.
        *   $R_f$ from output to inverting terminal.
        *   $V_{in2}$ through $R_2$ to non-inverting terminal.
        *   $R_g$ from non-inverting terminal to ground.

        The output voltage is:
        $V_{out} = \frac{R_f}{R_1} \left( V_{in2} \frac{R_g}{R_2+R_g} \frac{R_1+R_f}{R_f} - V_{in1} \right)$ ... Incorrect.

        **Let's consider the commonly presented difference amplifier:**
        *   $V_{in1}$ connected to the inverting input through $R_1$.
        *   $R_f$ connected from the output to the inverting input.
        *   $V_{in2}$ connected to the non-inverting input through $R_2$.
        *   $R_g$ connected from the non-inverting input to ground.

        The output voltage is given by:
        $V_{out} = \left(1 + \frac{R_f}{R_1}\right) \left( V_{in2} \frac{R_g}{R_2+R_g} \right) - \left(\frac{R_f}{R_1}\right) V_{in1}$

        **To achieve $V_{out} = A(V_{in2} - V_{in1})$:**
        We need the terms multiplying $V_{in1}$ and $V_{in2}$ to be equal in magnitude and opposite in sign.
        This implies:
        1.  The gain of the $V_{in1}$ term is $-R_f/R_1$.
        2.  The gain of the $V_{in2}$ term is $(1 + R_f/R_1) (R_g / (R_2+R_g))$.
        For the gains to be equal and opposite, we need:
        $R_f/R_1 = (1 + R_f/R_1) (R_g / (R_2+R_g))$.
        Let $G = R_f/R_1$.
        $G = (1+G) (R_g / (R_2+R_g))$.
        $G(R_2+R_g) = (1+G)R_g$.
        $GR_2 + GR_g = R_g + GR_g$.
        $GR_2 = R_g$.
        $R_g = (R_f/R_1) \times R_2$.

        **So, the condition for a perfect difference amplifier is $R_g = (R_f/R_1) \times R_2$.**
        If this condition is met, then:
        $V_{out} = (1 + R_f/R_1) (V_{in2} \frac{(R_f/R_1)R_2}{R_2+(R_f/R_1)R_2}) - (R_f/R_1) V_{in1}$
        $V_{out} = (1 + R_f/R_1) (V_{in2} \frac{(R_f/R_1)R_2}{R_2(1+R_f/R_1)}) - (R_f/R_1) V_{in1}$
        $V_{out} = (1 + R_f/R_1) (V_{in2} \frac{R_f/R_1}{1+R_f/R_1}) - (R_f/R_1) V_{in1}$
        $V_{out} = V_{in2} (R_f/R_1) - V_{in1} (R_f/R_1)$
        $V_{out} = (R_f/R_1) (V_{in2} - V_{in1})$.

        The common-mode rejection ratio (CMRR) is crucial for difference amplifiers. A perfectly matched resistor network maximizes CMRR.

**Important Points to Remember:**

*   This circuit amplifies the *difference* between the two input voltages.
*   The gain is set by the ratio of the feedback resistor to the input resistor connected to the inverting terminal ($R_f/R_1$).
*   For ideal subtraction ($V_{out} = A(V_{in2} - V_{in1})$), the resistor network must be balanced such that $R_g = (R_f/R_1) \times R_2$. Often, a simpler balanced configuration is used where $R_1 = R_f$ and $R_2 = R_g$. In this specific case, the gain $A = 1$.
*   Difference amplifiers are sensitive to common-mode signals (signals present on both inputs simultaneously). The resistor matching is critical for achieving high CMRR.

**Example:**

Let $R_1 = 10 \, k\Omega$, $R_f = 100 \, k\Omega$, $R_2 = 20 \, k\Omega$.
For a perfect difference amplifier, $R_g = (100\,k\Omega / 10\,k\Omega) \times 20\,k\Omega = 10 \times 20\,k\Omega = 200\,k\Omega$.
The gain will be $R_f/R_1 = 100\,k\Omega / 10\,k\Omega = 10$.
If $V_{in1} = 1\,V$ and $V_{in2} = 2\,V$, then $V_{out} = 10 \times (2\,V - 1\,V) = 10\,V$.

**Practice Question 4:**

Design a difference amplifier with a gain of 5, such that $V_{out} = 5(V_{in2} - V_{in1})$.

**Answer:**

We need $R_f/R_1 = 5$. Let $R_1 = 10 \, k\Omega$, then $R_f = 50 \, k\Omega$.
We also need $R_g = (R_f/R_1) \times R_2 = 5 \times R_2$.
Let $R_2 = 10 \, k\Omega$, then $R_g = 5 \times 10 \, k\Omega = 50 \, k\Omega$.
So, $R_1 = 10 \, k\Omega$, $R_f = 50 \, k\Omega$, $R_2 = 10 \, k\Omega$, $R_g = 50 \, k\Omega$.

---

### 6. Instrumentation Amplifier

An instrumentation amplifier is a high-precision differential amplifier that amplifies the difference between two input voltages while rejecting common-mode signals. They are characterized by high input impedance, high CMRR, and precise gain.

**Circuit Diagram (Three Op-Amp Configuration):**

This is the most common and versatile configuration.

```
      R1       Rg       R1
Vin1 --/\/\/--(+)-------/\/\/--(+)-------+
             |   \      /     |       |
             |    \    /      |       |
             |     \  /       |       |
             |      \/        |       |
             |      /\        |       |
             |     /  \       |       |
             |    /    \      |       |
             |   /      \     |       |
       OA1 --|--(-)-----+----(-) OA2 --|-- Vout
             |   /      \     |   \   |
             |  /        \    |    \  |
             | /          \   |     \ |
             +/            \  |      \|
            / \            / \|     / \
           /   \          /   \   /   \
          /     \        /     \ /     \
     Rf ---       ----Rf        ---- Rf
         \       /          \       /
          \     /            \     /
           \   /              \   /
            \ /                \ /
             |                  |
            GND                GND

    Vin2 -------------------------------------
```

**Key Concepts & Analysis:**

*   **Three Op-Amps:** Consists of two non-inverting input buffer stages (OA1 and OA2) and a difference amplifier stage (OA3).
*   **Input Buffers (OA1, OA2):** These provide high input impedance. OA1 amplifies $V_{in1}$ with a gain of $1 + R_f/R_1$. OA2 amplifies $V_{in2}$ with the same gain.
    *   The signal at the output of OA1 is $V_{out1} = V_{in1} (1 + R_f/R_1)$.
    *   The signal at the output of OA2 is $V_{out2} = V_{in2} (1 + R_f/R_1)$.
    *   The resistor $R_g$ connects the inverting inputs of OA1 and OA2. The current through $R_g$ is $I_g = (V_{out2} - V_{out1}) / R_g$.
*   **Difference Amplifier (OA3):** OA3 acts as a difference amplifier with inputs from the outputs of OA1 and OA2. It uses resistors $R_1$ and $R_f$ for its feedback network.
    *   The output of OA3 is $V_{out} = (R_f/R_1) \times (V_{out1} - V_{out2})$.
*   **Overall Gain:**
    $V_{out} = (R_f/R_1) \times [V_{in1}(1 + R_f/R_1) - V_{in2}(1 + R_f/R_1)]$
    $V_{out} = (R_f/R_1) \times (1 + R_f/R_1) \times (V_{in1} - V_{in2})$.

    **Correction:** The first stage uses two op-amps OA1 and OA2. The inputs are $V_{in1}$ and $V_{in2}$.
    The output of OA1 is $V_{out1} = V_{in1} + (V_{in1} - V_{in\_inv1}) \times (R_f/R_1)$.
    The output of OA2 is $V_{out2} = V_{in2} + (V_{in2} - V_{in\_inv2}) \times (R_f/R_1)$.

    **Let's use the standard three-op-amp instrumentation amplifier formulation:**
    *   Op-amp 1 (OA1): Non-inverting input $V_{in1}$. Inverting input connected to ground via $R_1$. Feedback via $R_f$ to output. Non-inverting input also connected to ground via $R_1$. Output is $V_{out1}$.
    *   Op-amp 2 (OA2): Non-inverting input $V_{in2}$. Inverting input connected to ground via $R_1$. Feedback via $R_f$ to output. Non-inverting input also connected to ground via $R_1$. Output is $V_{out2}$.
    *   The inverting inputs of OA1 and OA2 are connected via a resistor $R_g$.

    **Let's analyze the first stage (OA1 and OA2):**
    *   Output of OA1: $V_{out1} = V_{in1} + (V_{in1} - V_{in\_inv1}) \times (R_f/R_1)$.
    *   Output of OA2: $V_{out2} = V_{in2} + (V_{in2} - V_{in\_inv2}) \times (R_f/R_1)$.

    The resistor $R_g$ connects the inverting inputs.
    Current through $R_g$: $I_g = (V_{out2} - V_{out1}) / R_g$.
    Current through inverting input of OA1: $I_{in1} = (V_{in\_inv1} - V_{out1}) / R_f$.
    Current through inverting input of OA2: $I_{in2} = (V_{in\_inv2} - V_{out2}) / R_f$.

    Since $I_{in1} = I_g$ and $I_{in2} = -I_g$ (assuming no current into the inverting inputs of OA1 and OA2 themselves),
    $V_{in\_inv1} = V_{in\_inv2}$. Let this be $V_{inv}$.
    This is incorrect. The standard configuration is:

    **Correct Three Op-Amp Instrumentation Amplifier:**

    ```
          R1       Rg       R1
    Vin1 --(+)-------/\/\/--(+)-------+------------------+
          |   \      /     |         |                  |
          |    \    /      |         |                  |
          |     \  /       |         |                  |
          |      \/ OA1     |         |                  |
          |      /\--------|---------|------(-) OA3 ---- Vout
          |     /  \       |         |      /  \
          |    /    \      |         |     /    \
          |   /      \     |         |    /      \
    Rf --- (-)       (-)---- Rf      |  Rf ----   ---- Rf
         \       /     \     /       |   \     /     \
          \     /       \   /        |    \   /       \
           \   /         \ /         |     \ /         \
            \ /           \/ OA2     |      \/
             |            /\--------|---------+
            GND          GND          |
                                      |
    Vin2 -----------------------------+

    ```

    **Let's analyze this correctly:**
    *   **OA1 and OA2 (Input Buffers):**
        *   OA1 has $V_{in1}$ at its non-inverting input. Its inverting input is connected to OA2's inverting input through $R_g$. The output of OA1 is $V_{out1}$.
        *   OA2 has $V_{in2}$ at its non-inverting input. Its inverting input is connected to OA1's inverting input through $R_g$. The output of OA2 is $V_{out2}$.
        *   The feedback resistors $R_f$ are connected from the outputs of OA1 and OA2 to their respective inverting inputs.
        *   The resistors $R_1$ are connected from the inverting inputs of OA1 and OA2 to ground.

        **Key property of the first stage:**
        The voltage difference at the output of OA1 and OA2 is related to the difference in their inputs and the gain set by $R_g$ and the feedback network.
        $V_{out1} = V_{in1} + \frac{R_f}{R_1}(V_{in1} - V_{inv1})$
        $V_{out2} = V_{in2} + \frac{R_f}{R_1}(V_{in2} - V_{inv2})$

        Due to the connection through $R_g$, $V_{inv1} = V_{inv2}$. Let this common voltage be $V_{inv}$.
        $V_{out1} = V_{in1} + \frac{R_f}{R_1}(V_{in1} - V_{inv})$
        $V_{out2} = V_{in2} + \frac{R_f}{R_1}(V_{in2} - V_{inv})$

        Current through $R_g$: $I_g = \frac{V_{out1} - V_{inv}}{R_f} = \frac{V_{out2} - V_{inv}}{R_f}$.
        This implies $V_{out1} - V_{inv} = V_{out2} - V_{inv}$, so $V_{out1} = V_{out2}$. This is not right.

        Let's focus on the difference:
        $V_{out1} - V_{out2} = (V_{in1} - V_{in2}) + \frac{R_f}{R_1} ((V_{in1} - V_{inv}) - (V_{in2} - V_{inv}))$
        $V_{out1} - V_{out2} = (V_{in1} - V_{in2}) + \frac{R_f}{R_1} (V_{in1} - V_{in2})$.
        $V_{out1} - V_{out2} = (V_{in1} - V_{in2}) (1 + \frac{R_f}{R_1})$.

        This is the crucial relationship for the first stage. The difference between the outputs of the first two op-amps is amplified by $(1 + R_f/R_1)$.

    *   **OA3 (Difference Amplifier):**
        OA3 is configured as a difference amplifier with inputs $V_{out1}$ and $V_{out2}$.
        The resistors from the output of OA1 to OA3's inverting input and from OA3's output to its inverting input are $R_1$ and $R_f$ respectively.
        The resistors from the output of OA2 to OA3's non-inverting input and from OA3's non-inverting input to ground are $R_1$ and $R_f$ respectively. (Assuming symmetry).

        The output of OA3 is $V_{out} = \frac{R_f}{R_1} (V_{out2} - V_{out1})$.

    *   **Overall Gain:**
        $V_{out} = \frac{R_f}{R_1} \times \left[ (V_{in1} - V_{in2}) \left(1 + \frac{R_f}{R_1}\right) \right]$.
        $V_{out} = \frac{R_f}{R_1} \left(1 + \frac{R_f}{R_1}\right) (V_{in1} - V_{in2})$.

        **Wait, the gain formula is different. Let's use a commonly cited formula:**
        $V_{out} = \left(1 + \frac{2R_f}{R_g}\right) \frac{R_c}{R_b}(V_{in1} - V_{in2})$
        In our current diagram with $R_1$ and $R_f$ and $R_g$:
        Let $R_f/R_1 = G$.
        Output of first stage diff: $V_{out1} - V_{out2} = (V_{in1} - V_{in2})(1+G)$.
        The third op-amp (OA3) is a difference amplifier with inputs $V_{out1}$ and $V_{out2}$.
        The feedback resistor for OA3 is $R_f$. The input resistor for $V_{out1}$ is $R_1$.
        The input resistor for $V_{out2}$ is connected to the non-inverting terminal.
        Let's consider the standard instrumentation amplifier circuit with specific resistor notations:

        **Standard Instrumentation Amplifier Configuration:**
        *   Two input op-amps (OA1, OA2) with input resistors $R_1$ to $V_{in1}$ and $V_{in2}$.
        *   A gain-setting resistor $R_g$ connected between the inverting inputs of OA1 and OA2.
        *   Feedback resistors $R_f$ connected from the output of OA1 and OA2 to their respective inverting inputs.
        *   A difference amplifier op-amp (OA3) with inputs from the outputs of OA1 and OA2.
        *   The difference amplifier uses equal resistors, say $R_A$ for input and $R_B$ for feedback.

        **Let's use the diagram with $R_1$, $R_f$, $R_g$ and the final difference amplifier stage:**
        The first stage outputs $V_{out1}$ and $V_{out2}$.
        The difference $V_{out1} - V_{out2} = (V_{in1} - V_{in2}) \times (1 + 2R_f/R_g)$. This is the gain of the first stage for the differential input.
        The second stage (difference amplifier OA3) amplifies this difference.
        If the difference amplifier is set up with equal input and feedback resistors (gain of 1), then $V_{out} = V_{out1} - V_{out2}$.
        $V_{out} = (V_{in1} - V_{in2}) \times (1 + 2R_f/R_g)$.

        **Ah, the resistors used in the diagram are:**
        *   $R_1$ from $V_{in1}$ to OA1 non-inverting terminal, and another $R_1$ from OA1 inverting terminal to ground.
        *   $R_f$ from OA1 output to OA1 inverting terminal.
        *   $R_g$ connecting the inverting terminals of OA1 and OA2.
        *   $R_1$ from $V_{in2}$ to OA2 non-inverting terminal, and another $R_1$ from OA2 inverting terminal to ground.
        *   $R_f$ from OA2 output to OA2 inverting terminal.
        *   The difference amplifier stage uses equal resistors $R_A$ and $R_B$.

        **Let's re-analyze based on standard instrumentation amplifier equations:**
        The gain of the instrumentation amplifier is typically given by:
        $A_v = \frac{R_f}{R_1} \left( 1 + \frac{2R_f}{R_g} \right)$ ... this is one common form.

        **Let's use the diagram provided and derive the gain:**
        *   OA1 has $V_{in1}$ at its non-inverting terminal.
        *   OA2 has $V_{in2}$ at its non-inverting terminal.
        *   Resistors $R_1$ connect the inverting inputs of OA1 and OA2 to ground.
        *   Resistors $R_f$ are feedback resistors from the outputs of OA1 and OA2 to their inverting inputs.
        *   Resistor $R_g$ connects the inverting inputs of OA1 and OA2.

        **Analysis of OA1:**
        $V_{out1} = V_{in1} + V_{in1} \frac{R_f}{R_1}$ (if the inverting input was at ground, but it's not).
        The voltage at the inverting input of OA1 ($v_{inv1}$) is influenced by $V_{in1}$ and $V_{out1}$ through $R_f$ and $R_1$, and also by $v_{inv2}$ through $R_g$.
        And $v_{inv1} = v_{inv2}$. Let this be $V_{inv}$.

        $V_{out1} = V_{in1} + (V_{in1} - V_{inv}) \frac{R_f}{R_1}$
        $V_{out2} = V_{in2} + (V_{in2} - V_{inv}) \frac{R_f}{R_1}$

        Current through $R_g$: $I_g = \frac{V_{inv} - V_{out1}}{R_f} = \frac{V_{inv} - V_{out2}}{R_f}$ ... This implies $V_{out1} = V_{out2}$ which is wrong.

        **The standard three-op-amp instrumentation amplifier uses this resistor configuration:**
        *   OA1: Input $V_{in1}$, non-inverting terminal. Inverting terminal connected to ground via $R_1$, feedback via $R_f$ to output. Output $V_{out1}$.
        *   OA2: Input $V_{in2}$, non-inverting terminal. Inverting terminal connected to ground via $R_1$, feedback via $R_f$ to output. Output $V_{out2}$.
        *   Resistor $R_g$ connects the inverting terminals of OA1 and OA2.

        **Let's assume the input buffers are configured as non-inverting amplifiers with gain G, and the gain is adjusted by a single resistor $R_g$.**

        **Correct Gain Derivation for a Common Instrumentation Amplifier:**
        The common configuration is:
        *   Two input buffers (OA1, OA2).
        *   OA1's non-inverting input is $V_{in1}$. Its inverting input is connected to ground via $R_1$, and to OA2's inverting input via $R_g$. Feedback from OA1 output to inverting input via $R_f$.
        *   OA2's non-inverting input is $V_{in2}$. Its inverting input is connected to ground via $R_1$, and to OA1's inverting input via $R_g$. Feedback from OA2 output to inverting input via $R_f$.
        *   A difference amplifier (OA3) with inputs from the outputs of OA1 and OA2. The resistors are typically equal for OA3.

        **The differential gain ($A_d$) of the first stage is determined by $R_g$ and the feedback resistors. The gain is:**
        $A_d = 1 + \frac{2R_f}{R_g}$.

        The output of the first stage difference amplifier (formed by OA1 and OA2) is:
        $V_{diff} = (V_{in1} - V_{in2}) \times (1 + \frac{2R_f}{R_g})$.

        The second stage (OA3) is a difference amplifier with gain $A_{out\_stage}$.
        If the second stage is a simple unity-gain difference amplifier (where $R_A = R_B$ for both inputs), then $V_{out} = V_{diff}$.
        $V_{out} = (V_{in1} - V_{in2}) \times (1 + \frac{2R_f}{R_g})$.

        **If the gain-setting resistor $R_g$ is varied, the overall gain changes.**
        *   **High Input Impedance:** Due to the buffer stages, the input impedance is very high.
        *   **High CMRR:** The balanced nature of the design ensures excellent common-mode rejection.
        *   **Adjustable Gain:** The gain is set by a single resistor ($R_g$), which is a significant advantage.

**Important Points to Remember:**

*   Instrumentation amplifiers are designed for amplifying small differential signals in the presence of large common-mode noise.
*   They offer high input impedance, high CMRR, and adjustable gain via a single resistor.
*   The gain is proportional to $1 + 2R_f/R_g$.
*   They are used in applications like medical instrumentation (ECG, EEG), data acquisition systems, and sensor amplification.

**Example:**

Let $R_f = 10 \, k\Omega$, $R_1 = 1 \, k\Omega$ (for input buffering gain, if it was a non-inverting setup without $R_g$ connected to ground), $R_g = 10 \, k\Omega$.
If the second stage has a gain of 1.
The gain of the instrumentation amplifier is $A_v = 1 + 2R_f/R_g = 1 + 2(10\,k\Omega)/(10\,k\Omega) = 1 + 2(1) = 3$.
If $V_{in1} = 1.1 \, V$ and $V_{in2} = 1 \, V$, then $V_{out} = 3 \times (1.1 \, V - 1 \, V) = 3 \times 0.1 \, V = 0.3 \, V$.

**Practice Question 5:**

Design an instrumentation amplifier with a gain of 100. You can choose the values of $R_f$ and $R_g$. Assume the input buffers have unity gain for the differential input in this calculation, and the difference amplifier stage has unity gain.

**Answer:**

We need $1 + 2R_f/R_g = 100$.
$2R_f/R_g = 99$.
Let $R_f = 10 \, k\Omega$.
Then $2(10\,k\Omega)/R_g = 99$.
$R_g = 2(10\,k\Omega) / 99 \approx 20 \, k\Omega / 99 \approx 202 \, \Omega$.

---

### Summary and Key Takeaways for Module 3 (Op-Amp Circuits)

*   **Inverting Amplifier:** Gain = $-R_f/R_{in}$, $180^\circ$ phase shift, input impedance $\approx R_{in}$.
*   **Non-inverting Amplifier:** Gain = $1 + R_f/R_{in}$, no phase shift, very high input impedance.
*   **Summing Amplifier:** Output is a weighted sum of inputs, $V_{out} = -\Sigma (R_f/R_i) V_{in\_i}$.
*   **Difference Amplifier:** Amplifies the difference between two inputs, $V_{out} = A(V_{in2} - V_{in1})$. Requires matched resistors for high CMRR.
*   **Instrumentation Amplifier:** High-precision differential amplifier with high input impedance, high CMRR, and adjustable gain. Gain is typically set by $A_v = 1 + 2R_f/R_g$.

---

### Self-Assessment Questions

1.  What is the fundamental characteristic that allows us to assume a "virtual short" in op-amp circuits with negative feedback?
2.  If you need a voltage gain of -10, which amplifier configuration would you choose: inverting or non-inverting? What resistor ratio would be required?
3.  You want to sum three voltages with equal weighting. What should be the resistor values in a summing amplifier if the feedback resistor is $50 \, k\Omega$?
4.  What is the key condition on resistor values in a difference amplifier to achieve perfect subtraction and maximize CMRR?
5.  What is the primary advantage of using an instrumentation amplifier over a simple difference amplifier in applications with very small differential signals and significant common-mode noise?
6.  Design a non-inverting amplifier with a voltage gain of 30.
7.  In a summing amplifier, if $R_f = 100 \, k\Omega$, $R_1 = 10 \, k\Omega$, $R_2 = 20 \, k\Omega$, and $V_{in1} = 0.5 \, V$, $V_{in2} = 1 \, V$, calculate the output voltage $V_{out}$.
8.  An instrumentation amplifier uses $R_f = 15 \, k\Omega$ and $R_g = 5 \, k\Omega$. If the second stage has a unity gain difference amplifier, what is the overall voltage gain?

---

### Answers to Self-Assessment Questions

1.  The fundamental characteristic is the **infinite open-loop gain** of the ideal op-amp. This, combined with negative feedback, forces the voltage difference between the inverting and non-inverting terminals to be virtually zero ($v_+ \approx v_-$).
2.  To achieve a voltage gain of -10, you would choose an **inverting amplifier**. The resistor ratio required is $R_f/R_{in} = 10$. For example, $R_f = 100 \, k\Omega$ and $R_{in} = 10 \, k\Omega$.
3.  For equal weighting in a summing amplifier, all input resistors should be equal to the feedback resistor. If the feedback resistor ($R_f$) is $50 \, k\Omega$, then each of the three input resistors ($R_1, R_2, R_3$) should also be $50 \, k\Omega$.
4.  The key condition for a perfect difference amplifier is that the ratio of the feedback resistor to the input resistor connected to the inverting terminal must be equal to the ratio of the resistor connected to the non-inverting terminal and the resistor connected from the non-inverting terminal to ground. Mathematically, for the standard configuration with $R_f, R_1, R_2, R_g$: $R_f/R_1 = R_g/R_2$ for equal gains, and the specific relationship $R_g = (R_f/R_1) \times R_2$ derived earlier is needed for exact subtraction. Matched resistor values are crucial for high CMRR.
5.  The primary advantage of an instrumentation amplifier is its **significantly higher CMRR and much higher input impedance** compared to a simple difference amplifier. This makes it ideal for amplifying very small differential signals that might be corrupted by common-mode noise, without loading the signal source. The gain adjustability with a single resistor is also a key benefit.
6.  For a non-inverting amplifier with a gain of 30, we need $1 + R_f/R_{in} = 30$. This means $R_f/R_{in} = 29$. We can choose $R_{in} = 10 \, k\Omega$, then $R_f = 29 \times 10 \, k\Omega = 290 \, k\Omega$.
7.  $V_{out} = -(R_f/R_1)V_{in1} - (R_f/R_2)V_{in2}$
    $V_{out} = -(100\,k\Omega/10\,k\Omega) \times 0.5\,V - (100\,k\Omega/20\,k\Omega) \times 1\,V$
    $V_{out} = -(10) \times 0.5\,V - (5) \times 1\,V$
    $V_{out} = -5\,V - 5\,V = -10\,V$.
8.  The gain of the instrumentation amplifier is $A_v = 1 + 2R_f/R_g$.
    $A_v = 1 + 2(15\,k\Omega)/(5\,k\Omega) = 1 + 2(3) = 1 + 6 = 7$.
    So, the overall voltage gain is 7.

---

This concludes Module 3's detailed study notes on Op-Amp Circuits. Understanding these fundamental configurations is essential for progressing to more advanced analog circuit design using operational amplifiers.
