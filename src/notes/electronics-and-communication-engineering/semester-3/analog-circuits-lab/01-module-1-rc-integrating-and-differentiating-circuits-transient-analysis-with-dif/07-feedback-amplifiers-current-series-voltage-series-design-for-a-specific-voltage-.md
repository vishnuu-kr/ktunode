---
title: "Feedback amplifiers (current series & voltage series) - Design for a specific voltage gain and plot frequency response characteristics"
subject: "ANALOG CIRCUITS LAB"
module: "Module 1: RC Integrating and Differentiating Circuits – (Transient analysis with different inputs and frequency response)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe42b"
status: "completed"
scrapedAt: "2026-05-23T17:44:32.632Z"
---
# ANALOG CIRCUITS LAB: Module 1 - Feedback Amplifiers

## Topic: Feedback Amplifiers (Current Series & Voltage Series) - Design for a Specific Voltage Gain and Plot Frequency Response Characteristics

### Introduction

Feedback is a technique where a portion of the output signal of an amplifier is fed back to the input. This feedback can be positive or negative. In analog circuits, **negative feedback** is predominantly used to improve the performance of amplifiers. This module focuses on understanding and designing two types of negative feedback amplifier configurations: **Current Series** and **Voltage Series**. We will delve into their design principles for achieving a specific voltage gain and analyze their frequency response characteristics.

---

### 1. Understanding Negative Feedback

Negative feedback is the process of feeding back a portion of the output signal to the input in **opposition** to the original input signal.

**Key Concepts:**

*   **Basic Amplifier:** A circuit that amplifies a signal (e.g., a transistor amplifier).
*   **Feedback Network:** A circuit that samples the output and feeds it back to the input.
*   **Comparison Point:** The point where the feedback signal is combined with the input signal.

**Formula for Gain with Negative Feedback ($A_{f}$):**

$A_{f} = \frac{A}{1 + \beta A}$

Where:
*   $A$ is the open-loop gain (gain without feedback).
*   $\beta$ is the feedback factor (the ratio of the feedback signal to the output signal).
*   $(1 + \beta A)$ is the **desensitivity factor** or **feedback factor**.

**Advantages of Negative Feedback:**

*   **Stabilizes Gain:** Makes the amplifier gain less dependent on variations in transistor parameters, temperature, etc.
*   **Increases Bandwidth:** Extends the frequency range over which the amplifier operates effectively.
*   **Reduces Distortion:** Decreases non-linear distortion introduced by the amplifier.
*   **Reduces Noise:** Attenuates noise generated within the amplifier.
*   **Modifies Input and Output Impedances:** Can increase or decrease input/output impedance depending on the feedback configuration.

**Disadvantages of Negative Feedback:**

*   **Reduced Gain:** The primary trade-off for the advantages is a reduction in the overall gain.
*   **Potential for Instability:** If not properly designed, negative feedback can lead to oscillations at certain frequencies.

---

### 2. Feedback Amplifier Configurations

We will focus on two common negative feedback configurations:

#### 2.1. Current Series Feedback Amplifier

**Description:** In this configuration, the feedback signal is proportional to the **output current**, and this feedback signal is **summed in series** with the input voltage.

**Block Diagram:**

```
      Vin ----> (+) --- Amplifier (A) ---> Vout
                ^         |
                |         |
              (-) ---- Iout ----> Feedback Network (B) ----> Vfb
```

*   **Input:** Voltage ($V_{in}$)
*   **Output:** Current ($I_{out}$)
*   **Feedback:** Current ($I_{fb}$) proportional to $I_{out}$.
*   **Sampling:** Output current is sampled.
*   **Mixing:** Feedback current is mixed in series with the input voltage.

**Effect on Impedances:**

*   **Input Impedance:** Increases.
*   **Output Impedance:** Increases.

**Derivation of Gain (Bell, Chapter 14):**

*   Let $V_{in}$ be the input voltage.
*   Let $I_{in}$ be the input current.
*   Let $A_i = V_{out} / I_{in}$ be the open-loop transconductance gain. (Note: Bell often uses transconductance for current-series).
*   Let $I_{out}$ be the output current.
*   Let $V_{fb}$ be the feedback voltage (which is proportional to $I_{out}$ and added in series with $V_{in}$).
*   Let $\beta_v = V_{fb} / I_{out}$ be the feedback factor (transresistance).

The loop gain is $\beta_v A_i$.

The input voltage at the amplifier stage is $V_{in} = V_{in\_signal} - V_{fb}$.
Therefore, $V_{in\_signal} = V_{in} + V_{fb}$.

The output current is $I_{out} = A_i \times (V_{in\_signal})$.
Substituting $V_{in\_signal}$: $I_{out} = A_i \times (V_{in} + V_{fb})$.

We know $V_{fb} = \beta_v \times I_{out}$.
Substituting $V_{fb}$: $I_{out} = A_i \times (V_{in} + \beta_v \times I_{out})$.

$I_{out} = A_i V_{in} + A_i \beta_v I_{out}$
$I_{out} (1 - A_i \beta_v) = A_i V_{in}$
$\frac{I_{out}}{V_{in}} = \frac{A_i}{1 - A_i \beta_v}$

The **closed-loop gain ($A_{if}$)** for current-series is the ratio of output current to input voltage:

$A_{if} = \frac{I_{out}}{V_{in}} = \frac{A_i}{1 - \beta_v A_i}$

**(Meganathan, Chapter 9 discusses various feedback topologies, including current-series. While Meganathan might use slightly different notation, the core principles of how feedback affects gain and impedance remain consistent.)**

**Design for a Specific Voltage Gain (Conceptual):**

While the fundamental gain is transconductance ($I_{out}/V_{in}$), if we consider a load resistor $R_L$ at the output, the voltage gain is $A_v = V_{out}/V_{in} = (I_{out} \times R_L) / V_{in} = A_{if} \times R_L$.

To achieve a specific voltage gain $A_{vf}$, we need to:

1.  **Choose an amplifier topology:** Common emitter, common collector, etc., will provide the initial transconductance ($A_i$).
2.  **Design the feedback network:** This network determines the feedback factor ($\beta_v$). $\beta_v$ is typically implemented using a resistor in series with the emitter or collector to sample current.
3.  **Calculate required $\beta_v$:**
    $A_{vf} = \frac{A_i \times R_L}{1 - \beta_v A_i}$
    If $A_i \gg 1$, then $A_{vf} \approx -\frac{R_L}{\beta_v}$ (for common emitter with emitter degeneration).

**Example:** Designing a current series amplifier to have a voltage gain of -50.

*   Assume a common emitter amplifier stage with an unloaded voltage gain $A_i = -1000$.
*   Assume a load resistor $R_L = 100 \Omega$.
*   We want $A_{vf} = -50$.
*   Using the approximation for high gain: $-50 \approx -\frac{100}{\beta_v}$
*   $\beta_v \approx \frac{100}{50} = 2 \, \Omega$ (since $\beta_v$ has units of resistance in this context).

**Practical implementation:** $\beta_v$ can be realized by a resistor $R_E$ in the emitter path. However, this resistor also affects the input impedance and gain. For current-series feedback, the feedback is usually taken from the output current, which can be achieved by sensing the voltage drop across a series resistor in the output path.

---

#### 2.2. Voltage Series Feedback Amplifier

**Description:** In this configuration, the feedback signal is proportional to the **output voltage**, and this feedback signal is **summed in series** with the input voltage. This is the most common feedback configuration for voltage amplifiers.

**Block Diagram:**

```
      Vin ----> (+) --- Amplifier (A) ---> Vout
                ^         |
                |         |
              (-) ---- Vout ----> Feedback Network (B) ----> Vfb
```

*   **Input:** Voltage ($V_{in}$)
*   **Output:** Voltage ($V_{out}$)
*   **Feedback:** Voltage ($V_{fb}$) proportional to $V_{out}$.
*   **Sampling:** Output voltage is sampled.
*   **Mixing:** Feedback voltage is mixed in series with the input voltage.

**Effect on Impedances:**

*   **Input Impedance:** Increases.
*   **Output Impedance:** Decreases.

**Derivation of Gain (Bell, Chapter 14):**

*   Let $V_{in}$ be the input voltage.
*   Let $A_v = V_{out} / V_{in\_amp}$ be the open-loop voltage gain of the amplifier stage.
*   Let $V_{out}$ be the output voltage.
*   Let $V_{fb}$ be the feedback voltage.
*   Let $\beta = V_{fb} / V_{out}$ be the feedback factor (dimensionless).

The loop gain is $\beta A_v$.

The input voltage to the amplifier is $V_{in\_amp} = V_{in} - V_{fb}$.
Therefore, $V_{in} = V_{in\_amp} + V_{fb}$.

The output voltage is $V_{out} = A_v \times V_{in\_amp}$.
Substituting $V_{in\_amp}$: $V_{out} = A_v \times (V_{in} - V_{fb})$.

We know $V_{fb} = \beta \times V_{out}$.
Substituting $V_{fb}$: $V_{out} = A_v \times (V_{in} - \beta \times V_{out})$.

$V_{out} = A_v V_{in} - A_v \beta V_{out}$
$V_{out} (1 + A_v \beta) = A_v V_{in}$
$\frac{V_{out}}{V_{in}} = \frac{A_v}{1 + \beta A_v}$

The **closed-loop gain ($A_{vf}$)** for voltage series feedback is the ratio of output voltage to input voltage:

$A_{vf} = \frac{V_{out}}{V_{in}} = \frac{A_v}{1 + \beta A_v}$

**(Meganathan, Chapter 9 provides a thorough analysis of voltage-series feedback, detailing how voltage sampling and series mixing are implemented using common amplifier configurations like common-emitter with emitter degeneration for increased input impedance and feedback network design using voltage dividers.)**

**Design for a Specific Voltage Gain:**

To achieve a desired closed-loop voltage gain $A_{vf}$, we need to select an amplifier with a suitable open-loop gain ($A_v$) and design a feedback network to provide the required feedback factor ($\beta$).

The equation $A_{vf} = \frac{A_v}{1 + \beta A_v}$ can be rearranged to find $\beta$:

$A_{vf} (1 + \beta A_v) = A_v$
$A_{vf} + A_{vf} \beta A_v = A_v$
$A_{vf} \beta A_v = A_v - A_{vf}$
$\beta = \frac{A_v - A_{vf}}{A_v A_{vf}} = \frac{1}{A_{vf}} - \frac{1}{A_v}$

Or, if we want to determine the open-loop gain needed for a given closed-loop gain and $\beta$:

$A_v = \frac{A_{vf}}{1 - \beta A_{vf}}$

**Key Design Steps:**

1.  **Determine the desired closed-loop gain ($A_{vf}$).**
2.  **Select an amplifier topology** (e.g., common emitter) that can provide sufficient open-loop gain ($A_v$). The greater the open-loop gain ($A_v$), the less sensitive the closed-loop gain will be to variations in $A_v$.
3.  **Design the feedback network** to provide the required $\beta$. For voltage series feedback, $\beta$ is typically implemented using a voltage divider at the output, sampling $V_{out}$, and feeding it back to the input summing point (usually the base or gate of the amplifying transistor).

**Example:** Design a voltage series feedback amplifier with a closed-loop voltage gain ($A_{vf}$) of -20.

*   **Choose a common-emitter amplifier** as the basic amplifying stage. A typical single-stage common-emitter amplifier might have an open-loop gain ($A_v$) of around -100 to -200. Let's assume we can achieve an unloaded $A_v = -150$.
*   **Calculate the required feedback factor ($\beta$):**
    $\beta = \frac{1}{A_{vf}} - \frac{1}{A_v} = \frac{1}{-20} - \frac{1}{-150} = -0.05 + 0.00667 = -0.04333$

    So, the feedback network must provide a voltage $V_{fb} = -0.04333 \times V_{out}$. The negative sign indicates that the feedback is in opposition to the input voltage, which is characteristic of negative feedback for a phase-inverting amplifier like a common-emitter.

*   **Practical Implementation of Feedback Network:**
    Consider a common-emitter amplifier with an emitter resistor $R_E$ that is bypassed by a capacitor ($C_E$) for AC signals to achieve high gain at mid-frequencies. To implement voltage series feedback, we can add a **voltage divider** at the output. However, it's more common to use emitter degeneration.
    
    If we use **emitter degeneration** (an unbypassed resistor $R_E$ in the emitter), the open-loop gain is reduced, but the feedback is inherent. Let's consider the case where the feedback network is external.
    
    Let's assume we are feeding back from the collector to the base. If we use a resistor $R_f$ from collector to base, the feedback is voltage-series. The feedback factor $\beta$ depends on the impedance looking into the base.
    
    **More typically for Voltage Series:** The feedback is achieved by sampling the output voltage using a voltage divider (e.g., $R_1$ and $R_2$ from collector to ground) and feeding it back to the input, typically to the emitter (if it's a common-emitter amplifier) or through a resistor to the base.
    
    **Let's consider a simplified example of feedback network design:**
    Assume we want to achieve $A_{vf} = -20$ from an amplifier with $A_v = -150$.
    
    A common way to implement voltage series feedback with a common-emitter amplifier is to connect a feedback resistor ($R_f$) from the output (collector) to the input (base). In this case, the feedback factor $\beta$ is approximately $-R_f / R_{in}$, where $R_{in}$ is the input impedance of the amplifier stage itself. This approach also affects the input impedance.
    
    A more controlled way to achieve a specific $\beta$ for voltage series feedback is to use a voltage divider from the output. Let's say we tap the output voltage $V_{out}$ and divide it using two resistors, $R_{a}$ and $R_{b}$, such that $V_{fb} = V_{out} \frac{R_{b}}{R_{a}+R_{b}}$. If this $V_{fb}$ is fed back to the emitter of a common-emitter amplifier, then $\beta = \frac{R_{b}}{R_{a}+R_{b}}$.
    
    So, we need $\beta = -0.04333$. This requires careful consideration of the amplifier's input and output impedances.
    
    Let's refine the calculation assuming $\beta$ is obtained from a voltage divider at the output, which is fed to the emitter of a common emitter amplifier.
    
    The closed-loop gain is approximately $A_{vf} \approx -\frac{R_C}{R_E}$ for a common emitter amplifier with emitter degeneration $R_E$. If we consider the feedback network as part of the amplifier design, then $R_E$ plays a role in the feedback.
    
    A cleaner way to think about designing for a specific gain is to:
    1.  Design a basic amplifier stage (e.g., common emitter) and determine its open-loop gain ($A_v$).
    2.  Use a voltage divider (e.g., $R_1, R_2$) from the output to the input summing point (e.g., emitter) to set $\beta$.
    
    Let's assume we want $A_{vf} = -20$ and we have an amplifier with $A_v = -150$.
    We need $\beta \approx \frac{1}{A_{vf}} - \frac{1}{A_v} = -0.05 - (-1/150) = -0.05 + 0.00667 \approx -0.0433$.
    
    If the feedback is from the collector to the emitter, and the emitter resistor is $R_E$, the feedback factor $\beta$ is related to the voltage division from the collector.
    
    **Let's consider a more practical design approach using emitter degeneration:**
    A common-emitter amplifier with an unbypassed emitter resistor $R_E$ provides voltage-series feedback. The gain is approximately $A_v \approx -R_C / R_E$. In this case, the feedback is inherent to the circuit. The feedback factor $\beta$ is related to the emitter resistor and the input impedance.
    
    If we want a gain of $A_{vf} = -20$, and we use a collector resistor $R_C = 10 \, k\Omega$.
    Then, $A_{vf} \approx -R_C / R_E$.
    $-20 \approx -10 \, k\Omega / R_E$.
    $R_E \approx 10 \, k\Omega / 20 = 500 \, \Omega$.
    
    This design directly sets the gain by choosing $R_C$ and $R_E$. The open-loop gain of such a circuit without emitter degeneration would be much higher.
    
    **Important Note:** The specific values for components will depend on the transistor characteristics ($h_{fe}$, $V_{BE}$), biasing resistors, and desired operating point.

---

### 3. Frequency Response Characteristics

The introduction of feedback affects the frequency response of an amplifier.

**Key Concepts:**

*   **Bandwidth:** The range of frequencies over which the amplifier's gain is relatively constant and within a specified tolerance (usually -3dB of the mid-band gain).
*   **Cutoff Frequency ($f_c$):** The frequency at which the gain drops to $0.707$ (or -3dB) of its mid-band value.
*   **Mid-band Gain ($A_{mid}$):** The gain of the amplifier in the frequency range where the effects of parasitic capacitances are negligible.
*   **High-frequency Response:** Limited by parasitic capacitances within the transistors (e.g., $C_{be}$, $C_{ce}$, $C_{gd}$, $C_{ds}$) and stray capacitances in the circuit. These capacitances create poles in the frequency response.
*   **Low-frequency Response:** Limited by coupling capacitors ($C_{in}$, $C_{out}$) and bypass capacitors ($C_E$). These capacitors create zeros or poles at low frequencies.

**Effect of Negative Feedback on Frequency Response:**

*   **Increases Bandwidth:** Negative feedback increases the bandwidth by the same factor that it reduces the gain.
    $BW_f = BW (1 + \beta A_v)$
    Where $BW$ is the open-loop bandwidth.
*   **Shifts Cutoff Frequencies:** Negative feedback shifts the high-frequency cutoff to a higher frequency and the low-frequency cutoff to a lower frequency.

**High-Frequency Response with Feedback:**

The dominant pole at high frequencies is usually determined by the amplifier's internal capacitances and the input resistance. Let's say the open-loop amplifier has a dominant pole at $f_{ch}$.

The closed-loop gain $A_{vf}(j\omega)$ can be approximated as:
$A_{vf}(j\omega) \approx \frac{A_{v0}}{1 + j\omega / \omega_{ch}}$
Where $A_{v0}$ is the mid-band gain and $\omega_{ch} = 2\pi f_{ch}$.

The closed-loop transfer function becomes:
$A_{vf}(j\omega) = \frac{A_v}{1 + \beta A_v (j\omega)} = \frac{A_v}{1 + \beta A_{v0} (1 / (1 + j\omega/\omega_{ch}))}$
$A_{vf}(j\omega) = \frac{A_{v0} (1 + j\omega/\omega_{ch})}{(1 + \beta A_{v0}) + j\omega/\omega_{ch}}$

This expression shows that with feedback, a zero appears at the open-loop pole frequency ($\omega_{ch}$), and a new dominant pole appears at a higher frequency.

The **closed-loop bandwidth ($BW_f$)** is related to the open-loop bandwidth ($BW$) by:
$BW_f = BW (1 + \beta A_{v0})$

This means if the gain is reduced by a factor of 10, the bandwidth increases by a factor of 10.

**Low-Frequency Response with Feedback:**

The low-frequency response is affected by coupling and bypass capacitors. Let's say the open-loop amplifier has a dominant pole at $f_{cl}$ due to coupling or bypass capacitors.

The closed-loop gain can be approximated as:
$A_{vf}(j\omega) \approx \frac{A_{v0}}{1 - j(\omega_{cl}/\omega)}$

The closed-loop transfer function becomes:
$A_{vf}(j\omega) = \frac{A_v}{1 + \beta A_v (j\omega)} = \frac{A_{v0} (1 - j(\omega_{cl}/\omega))}{(1 + \beta A_{v0}) - j(\omega_{cl}/\omega)}$

The feedback effectively shifts the low-frequency cutoff to a **lower** frequency. The closed-loop low-frequency cutoff $f_{clf}$ is approximately:
$f_{clf} \approx f_{cl} / (1 + \beta A_{v0})$

**Plotting Frequency Response Characteristics:**

To plot the frequency response:

1.  **Set up the circuit:** Build the amplifier with the feedback network.
2.  **Apply a sine wave input:** Vary the frequency of the input signal over a wide range (e.g., from 10 Hz to 1 MHz).
3.  **Measure the output voltage:** At each frequency, measure the amplitude of the output voltage.
4.  **Calculate the gain:** $Gain (dB) = 20 \log_{10} (|V_{out}| / |V_{in}|)$.
5.  **Plot the gain (dB) versus frequency (log scale):** This will show the low-frequency rolloff, the mid-band gain, and the high-frequency rolloff.

**(Bell, Chapter 14, and Meganathan, Chapter 9, provide detailed explanations and Bode plot examples of feedback amplifier frequency responses. They illustrate how the poles and zeros shift due to feedback and how the bandwidth is extended.)**

---

### 4. Designing for a Specific Voltage Gain and Plotting Frequency Response (Practical Approach for Lab)

**Objective:** Design and test a voltage series feedback amplifier to achieve a specific voltage gain and observe its frequency response.

**Circuit Topology:** Common Emitter Amplifier with Emitter Degeneration (which inherently provides voltage-series feedback).

**Design Steps:**

1.  **Choose Transistor:** Select a suitable NPN transistor (e.g., BC547).
2.  **Determine Desired Closed-Loop Gain ($A_{vf}$):** Let's target $A_{vf} = -10$ for this example.
3.  **Design the Biasing Network:**
    *   Choose a quiescent collector current ($I_{CQ}$). For BC547, around 1-5 mA is typical. Let's choose $I_{CQ} = 2 \, mA$.
    *   Choose a collector resistor ($R_C$) to set the output voltage swing. A common value is $R_C = 10 \, k\Omega$.
    *   The voltage at the collector ($V_{CC}$) can be, for example, 12V.
    *   The emitter voltage ($V_E$) is typically set to 1-2V for good biasing. Let $V_E = 1.5 \, V$.
    *   Calculate the emitter resistor ($R_E$): $R_E = V_E / I_{CQ} = 1.5 \, V / 2 \, mA = 750 \, \Omega$.
    *   Calculate the required base voltage ($V_B$): $V_B = V_E + V_{BE(on)} \approx 1.5 \, V + 0.7 \, V = 2.2 \, V$.
    *   Design the voltage divider ($R_1, R_2$) to provide $V_B$. Let $V_{CC} = 12 \, V$. We need $V_B = 2.2 \, V$.
        $V_B = V_{CC} \times \frac{R_2}{R_1 + R_2}$
        $2.2 = 12 \times \frac{R_2}{R_1 + R_2}$
        $\frac{R_2}{R_1 + R_2} = \frac{2.2}{12} \approx 0.183$
        If we choose $R_2 = 1 \, k\Omega$, then $R_1 + 1 \, k\Omega = 1 \, k\Omega / 0.183 \approx 5.46 \, k\Omega$.
        $R_1 \approx 4.46 \, k\Omega$. A standard value like $4.3 \, k\Omega$ or $4.7 \, k\Omega$ can be used. Let's choose $R_1 = 4.7 \, k\Omega$ and $R_2 = 1 \, k\Omega$.
        **(Note:** The base current must be much smaller than the current through $R_1$ and $R_2$. $I_{R1} \approx V_{CC} / R_1 = 12V / 4.7k\Omega \approx 2.5mA$. $I_{B(max)} \approx I_{CQ} / h_{fe(min)} \approx 2mA / 100 = 0.02mA$. The base current is significantly smaller than the divider current, so the biasing is stable.)
4.  **Calculate the Gain with Emitter Degeneration:**
    The approximate mid-band gain for a common emitter amplifier with emitter degeneration ($R_E$ unbypassed) is:
    $A_{vf} \approx -\frac{R_C}{R_E}$
    Using our chosen values: $A_{vf} \approx -\frac{10 \, k\Omega}{750 \, \Omega} = -13.33$.
    **This is close to our target gain of -10.** If we need exactly -10, we would adjust $R_E$ to $1 \, k\Omega$ (if $R_C = 10 \, k\Omega$). Let's proceed with $R_E = 750 \, \Omega$ and accept a gain of approximately -13.33.
    
    **(Self-correction/Refinement:** If the target gain was strictly -10, we would calculate $R_E = R_C / 10 = 10k\Omega / 10 = 1k\Omega$. This would mean $V_E = I_{CQ} \times R_E = 2mA \times 1k\Omega = 2V$. Then $V_B = 2V + 0.7V = 2.7V$. Using the voltage divider formula again: $2.7 = 12 \times R_2 / (R_1+R_2)$. If $R_2 = 1k\Omega$, then $R_1+1k\Omega = 1k\Omega \times (12/2.7) \approx 4.44k\Omega$, so $R_1 \approx 3.44k\Omega$, use $3.3k\Omega$.)
5.  **Frequency Response Measurement:**
    *   Connect a signal generator to the input through a coupling capacitor ($C_{in}$).
    *   Connect a load resistor ($R_L$) at the output through a coupling capacitor ($C_{out}$).
    *   Measure the frequency response by sweeping the signal generator frequency and observing the output voltage on an oscilloscope or spectrum analyzer.
    *   Record the output voltage amplitude at various frequencies.
    *   Plot $Gain (dB)$ vs. $Frequency (log \, Hz)$.
    *   Identify the mid-band gain and the -3dB bandwidth.

**Understanding the Frequency Response:**

*   **Low Frequencies:** The input coupling capacitor ($C_{in}$), output coupling capacitor ($C_{out}$), and any bypass capacitors ($C_E$, though we are using unbypassed $R_E$ for gain control) will cause the gain to roll off below a certain frequency (e.g., $f_{cin} = 1/(2\pi R_{in} C_{in})$).
*   **Mid-Band Frequencies:** The gain is relatively constant, approximately $-R_C/R_E$.
*   **High Frequencies:** Parasitic capacitances within the transistor (primarily $C_{be}$ and $C_{ce}$) and stray capacitances will cause the gain to roll off above a certain frequency. The bandwidth of this circuit will be significantly larger than a similar amplifier without emitter degeneration.

---

### 5. Learning Outcomes Addressed

*   **CO1: Design and demonstrate the functioning of basic analog circuits using discrete components.**
    *   This topic directly addresses designing a voltage series feedback amplifier (common emitter with emitter degeneration) using discrete components. You will design the biasing and feedback components to achieve a specific gain. Demonstrating its functioning involves building it and measuring its output.
*   **CO2: Design and simulate the functioning of basic analog circuits using simulation tools.**
    *   The design process described above can be simulated using SPICE-based simulators (like LTspice, Multisim, Proteus). You can simulate the circuit to verify the gain and plot the frequency response before building it.
*   **CO3: Conduct troubleshooting of a given circuit and to analyze it.**
    *   If a designed circuit doesn't meet the gain specification or shows unexpected frequency response, you will need to analyze the circuit, check component values, biasing, and connections to troubleshoot and fix the issues. This involves understanding how each component affects the circuit's performance.

---

### 6. Practice Questions and Answers

**Question 1:** What is the primary advantage of using negative feedback in amplifiers?
**Answer:** The primary advantage is the stabilization of gain, making it less sensitive to variations in transistor parameters, temperature, and load changes.

**Question 2:** A voltage series feedback amplifier has an open-loop gain ($A_v$) of -200 and a feedback factor ($\beta$) of -0.05. Calculate the closed-loop gain ($A_{vf}$).
**Answer:**
$A_{vf} = \frac{A_v}{1 + \beta A_v}$
$A_{vf} = \frac{-200}{1 + (-0.05) \times (-200)}$
$A_{vf} = \frac{-200}{1 + 10}$
$A_{vf} = \frac{-200}{11} \approx -18.18$

**Question 3:** If the closed-loop gain of a voltage series feedback amplifier is half of its open-loop gain, what is the feedback factor ($\beta$)?
**Answer:**
We are given $A_{vf} = A_v / 2$.
Substituting this into the formula for closed-loop gain:
$A_v / 2 = \frac{A_v}{1 + \beta A_v}$
$1 + \beta A_v = 2$
$\beta A_v = 1$
$\beta = \frac{1}{A_v}$

**Question 4:** How does negative feedback generally affect the bandwidth of an amplifier?
**Answer:** Negative feedback increases the bandwidth of an amplifier by the same factor that it reduces the gain.

**Question 5:** In a common-emitter amplifier with emitter degeneration using an unbypassed resistor $R_E$, the gain is approximately $-R_C/R_E$. What type of feedback is this, and how does it affect input and output impedance?
**Answer:** This is **voltage-series feedback**. It **increases the input impedance** (compared to a common-emitter amplifier without emitter degeneration) and **decreases the output impedance**.

**Question 6:** You are given a common-emitter amplifier stage with $R_C = 15 \, k\Omega$ and a desired closed-loop voltage gain of $A_{vf} = -15$. You are implementing this using emitter degeneration. What value of $R_E$ would you choose?
**Answer:**
Using the approximation $A_{vf} \approx -R_C / R_E$:
$-15 = -15 \, k\Omega / R_E$
$R_E = 15 \, k\Omega / 15 = 1 \, k\Omega$.

---

### 7. Important Points to Remember

*   **Negative feedback is crucial** for stabilizing amplifier gain, increasing bandwidth, and reducing distortion.
*   **Voltage Series feedback** is used for voltage amplifiers, sampling output voltage and mixing it in series with the input voltage. It increases input impedance and decreases output impedance.
*   **Current Series feedback** is used for current amplifiers, sampling output current and mixing it in series with the input voltage. It increases both input and output impedance.
*   The **desensitivity factor** is $(1 + \beta A)$. A higher factor means the closed-loop gain is less sensitive to variations in the open-loop gain.
*   Negative feedback **extends the bandwidth** by the same factor it reduces the gain.
*   The gain formula $A_{vf} = A / (1 + \beta A)$ is central to designing feedback amplifiers.
*   Emitter degeneration in a common-emitter amplifier is a practical way to implement voltage-series feedback and control gain.
*   When designing, always consider the **biasing** of the transistors to ensure they operate in the active region.
*   Parasitic capacitances limit the **high-frequency response**, while coupling/bypass capacitors limit the **low-frequency response**. Feedback shifts these cutoff frequencies.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References

*   **Bell, David A.** *Electronic Devices and Circuits*. Oxford University Press, 2008, 5th edition. (Specifically Chapters on Feedback Amplifiers and Frequency Response).
*   **Meganathan, D.** *Electronic Circuits Analysis and Design 1*. Yes Dee Publishing, 2023, 1st edition. (Chapters on Amplifier Topologies, Feedback, and Frequency Response).

---