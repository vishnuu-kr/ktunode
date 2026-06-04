---
title: "Input Resistance and Output Resistance."
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 2: Op Amp with negative feedback:  General concept of Voltage Series, Voltage Shunt, Current Series and Current Shunt negative feedback, Op Amp circuits with Voltage Series and Voltage Shunt feedback, Virtual ground concept."
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe56e"
status: "completed"
scrapedAt: "2026-05-23T17:49:44.360Z"
---
# Linear Integrated Circuits - Module 2: Op Amp with Negative Feedback

## Topic: Input Resistance and Output Resistance of Op-Amp Circuits with Negative Feedback

### 1. Introduction to Negative Feedback

Negative feedback is a technique where a portion of the output signal is fed back to the input with a phase reversal. This process significantly alters the performance characteristics of an amplifier, including its gain, bandwidth, and stability. In the context of operational amplifiers (Op-Amps), negative feedback is crucial for creating predictable and stable amplifier configurations.

**Key Concept:** Negative feedback reduces the overall gain but improves linearity, increases bandwidth, and reduces distortion and noise.

### 2. General Concepts of Negative Feedback Configurations

There are four fundamental types of negative feedback configurations, categorized by whether the feedback signal is a voltage or current and whether it is applied in series or shunt with the input signal:

*   **Voltage Series Feedback:**
    *   **Feedback Signal:** Voltage is sampled from the output.
    *   **Input Signal Connection:** Feedback is applied in **series** with the input voltage.
    *   **Effect:** Increases input resistance, decreases output resistance, decreases voltage gain.
    *   **Example:** Non-inverting amplifier.
*   **Voltage Shunt Feedback:**
    *   **Feedback Signal:** Voltage is sampled from the output.
    *   **Input Signal Connection:** Feedback is applied in **shunt** (parallel) with the input current.
    *   **Effect:** Decreases input resistance, decreases output resistance, decreases current gain.
    *   **Example:** Inverting amplifier.
*   **Current Series Feedback:**
    *   **Feedback Signal:** Current is sampled from the output.
    *   **Input Signal Connection:** Feedback is applied in **series** with the input voltage.
    *   **Effect:** Increases input resistance, increases output resistance, decreases voltage gain.
    *   **Example:** Transconductance amplifier.
*   **Current Shunt Feedback:**
    *   **Feedback Signal:** Current is sampled from the output.
    *   **Input Signal Connection:** Feedback is applied in **shunt** (parallel) with the input current.
    *   **Effect:** Decreases input resistance, increases output resistance, decreases current gain.
    *   **Example:** Transresistance amplifier.

**Important Point:** The input and output resistance of an op-amp circuit are significantly modified by the presence of negative feedback.

### 3. Op-Amp Circuits with Voltage Series and Voltage Shunt Feedback

We will now focus on the input and output resistance of circuits employing Voltage Series and Voltage Shunt feedback, as these are the most common configurations with op-amps.

#### 3.1. Op-Amp Circuits with Voltage Series Feedback

**Circuit Configuration:**
In voltage series feedback, the output voltage ($V_o$) is sampled, and a fraction of it is fed back in series with the input voltage ($V_{in}$). This is typically achieved using a voltage divider at the output and connecting the feedback signal to the non-inverting input of the op-amp.

**Example: Non-Inverting Amplifier**

```
     Vin ---- (+) -----[ Op-Amp ]----- Vout
               |         |
               R1        R2
               |         |
             -----       -----
              GND         GND
```

*   Let $A$ be the open-loop gain of the op-amp.
*   Let $R_{in}$ and $R_{out}$ be the input and output resistances of the *open-loop* op-amp.
*   Let $\beta$ be the feedback factor, representing the fraction of the output voltage fed back to the input. In the non-inverting amplifier, $\beta = R_1 / (R_1 + R_2)$.

**Analysis of Input Resistance ($R_{in,f}$)**

The input resistance of the non-inverting amplifier ($R_{in,f}$) is significantly increased due to voltage series feedback.

*   The signal at the non-inverting input of the op-amp is $V_+ = \beta V_o$.
*   The input voltage is $V_{in}$.
*   The voltage difference across the op-amp's intrinsic input terminals is $V_{in} - V_+ = V_{in} - \beta V_o$.
*   The input current drawn by the op-amp is $I_{in} = (V_{in} - V_+) / R_{in} = (V_{in} - \beta V_o) / R_{in}$.
*   The closed-loop voltage gain is $A_f = V_o / V_{in}$. For a non-inverting amplifier, $A_f = A / (1 + A\beta)$.
*   Therefore, $V_o = A_f V_{in}$.
*   Substituting $V_o$ in the $I_{in}$ equation:
    $I_{in} = (V_{in} - \beta A_f V_{in}) / R_{in} = V_{in} (1 - \beta A_f) / R_{in}$.
*   The input resistance of the feedback amplifier is $R_{in,f} = V_{in} / I_{in}$.
*   $R_{in,f} = V_{in} / [V_{in} (1 - \beta A_f) / R_{in}] = R_{in} / (1 - \beta A_f)$.
*   Since $A_f = A / (1 + A\beta)$, $(1 - \beta A_f) = 1 - \beta [A / (1 + A\beta)] = (1 + A\beta - A\beta) / (1 + A\beta) = 1 / (1 + A\beta)$.
*   So, $R_{in,f} = R_{in} / [1 / (1 + A\beta)] = R_{in} (1 + A\beta)$.

**Formula for Input Resistance (Voltage Series Feedback):**
$$R_{in,f} = R_{in} (1 + A\beta)$$

*   Since $A$ is very large (open-loop gain), $A\beta$ is also large.
*   This shows that the input resistance with voltage series feedback is significantly *increased* by a factor of $(1 + A\beta)$.
*   For an ideal op-amp, $R_{in} \rightarrow \infty$, hence $R_{in,f} \rightarrow \infty$. This is why the non-inverting input is considered to draw no current.

**Analysis of Output Resistance ($R_{out,f}$)**

The output resistance of the non-inverting amplifier ($R_{out,f}$) is significantly decreased due to voltage series feedback.

*   To find $R_{out,f}$, we set the independent input voltage source ($V_{in}$) to zero. This effectively grounds the input signal.
*   The op-amp is still operating with feedback.
*   We need to find the equivalent resistance seen looking into the output terminals.
*   Imagine injecting a test current $I_x$ into the output terminal and measuring the resulting voltage $V_x$. Then $R_{out,f} = V_x / I_x$.
*   With $V_{in} = 0$, the voltage at the non-inverting input is $V_+ = \beta V_x$.
*   The voltage across the op-amp's internal output resistance is $V_x$. The current flowing out of the op-amp's output terminal is $I_o = (A \cdot V_{d}) / R_{out}$, where $V_d$ is the differential input voltage.
*   In this case, $V_d = V_+ - 0 = \beta V_x$ (assuming the inverting input is grounded).
*   So, $I_o = (A \beta V_x) / R_{out}$.
*   The output terminal is delivering the test current $I_x$. Therefore, the net current flowing out of the op-amp is $I_x = I_o$.
*   $I_x = (A \beta V_x) / R_{out}$.
*   The output resistance is $R_{out,f} = V_x / I_x = V_x / [(A \beta V_x) / R_{out}] = R_{out} / (A \beta)$.

**Formula for Output Resistance (Voltage Series Feedback):**
$$R_{out,f} = R_{out} / (1 + A\beta)$$
(Note: The factor $A\beta$ is derived from the gain formula. The term $1+A\beta$ is the "desensitivity factor" or "feedback factor".)

*   Since $A\beta$ is very large, $R_{out,f}$ is significantly *decreased* by a factor of $(1 + A\beta)$.
*   For an ideal op-amp, $R_{out} \rightarrow 0$, hence $R_{out,f} \rightarrow 0$. This is why the output is considered to have zero impedance.

**Important Point (Roy D. C. & S. B. Jain, 5/e, Ch 5):** Voltage series feedback provides a very high input impedance and a very low output impedance, making it ideal for voltage amplification where minimal loading on the source and a good voltage transfer to the load are desired.

#### 3.2. Op-Amp Circuits with Voltage Shunt Feedback

**Circuit Configuration:**
In voltage shunt feedback, the output voltage ($V_o$) is sampled, and a fraction of it is fed back in shunt (parallel) with the input current signal. This is typically achieved using a resistor connected from the output to the inverting input of the op-amp, and the input signal is applied as a current source.

**Example: Inverting Amplifier**

```
     Vin ---- R1 ---- (-) -----[ Op-Amp ]----- Vout
                     |         |
                     Rf        R2
                     |         |
                   -----       -----
                    GND         GND
```

*   Let $A$ be the open-loop gain of the op-amp.
*   Let $R_{in}$ and $R_{out}$ be the input and output resistances of the *open-loop* op-amp.
*   The feedback network is often represented by a single feedback resistor $R_f$. The feedback factor $\beta$ in this configuration is related to the ratio of impedances in the feedback path and the input path. For simplicity in analyzing input resistance, we can consider the effect of $R_f$ on the input current.

**Analysis of Input Resistance ($R_{in,f}$)**

The input resistance of the inverting amplifier ($R_{in,f}$) is primarily determined by the input resistor $R_1$. The op-amp's high input impedance, combined with the virtual ground at the inverting input, means that $R_f$ does not directly affect the input resistance.

*   The voltage at the inverting input of the op-amp ($V_-$) is approximately zero due to the virtual ground concept.
*   The input current is $I_{in} = (V_{in} - V_-) / R_1$. Since $V_- \approx 0$, $I_{in} \approx V_{in} / R_1$.
*   The input resistance of the feedback amplifier is $R_{in,f} = V_{in} / I_{in} \approx V_{in} / (V_{in} / R_1) = R_1$.

**Formula for Input Resistance (Voltage Shunt Feedback):**
$$R_{in,f} \approx R_1$$

*   The input resistance is set by the external input resistor, $R_1$. It is independent of the op-amp's open-loop gain $A$ and the feedback resistor $R_f$.
*   For an ideal op-amp, $R_{in,f}$ is exactly $R_1$.

**Analysis of Output Resistance ($R_{out,f}$)**

The output resistance of the inverting amplifier ($R_{out,f}$) is significantly decreased due to voltage shunt feedback. The analysis is similar to the voltage series feedback case.

*   Set the independent input voltage source ($V_{in}$) to zero. This grounds $R_1$.
*   The voltage at the inverting input is now $V_- = (\beta V_x)$, where $\beta$ represents the feedback connection. In the inverting amplifier, the feedback signal effectively influences the voltage at the inverting input relative to the input signal.
*   For the inverting configuration, the feedback signal is applied in shunt. The effective input signal to the op-amp's differential input is $V_d = 0 - V_-$.
*   The feedback network consists of $R_f$ and $R_1$. The feedback factor $\beta$ is not simply a voltage ratio as in the non-inverting case. However, the effect on output resistance is the same as voltage series feedback.
*   The voltage difference driving the op-amp is $V_{in} - V_-$.
*   When $V_{in}$ is set to 0 (grounded), the voltage at the inverting input is $V_-$.
*   The feedback current through $R_f$ is $I_{f} = V_x / R_f$. This current flows towards the inverting input.
*   The differential voltage is $V_d = 0 - V_- = V_-$.
*   The current out of the op-amp's output stage is $I_o = (A V_d) / R_{out} = (A V_-) / R_{out}$.
*   The current $I_f$ flows into the op-amp's inverting input. The current into the op-amp's input terminals is negligible for an ideal op-amp.
*   So, the current $I_x$ (test current) injected into the output must be equal to the current flowing out of the op-amp's output.
*   $I_x = I_o$.
*   Also, the current through $R_f$ is $V_x / R_f$. This current is supplied by the op-amp.
*   The voltage at the inverting input is $V_-$. The current flowing through $R_f$ is also determined by $V_x$ and $V_-$.
*   Considering the loop containing $V_x$, $R_f$, and the inverting input, the voltage difference across $R_f$ is $V_x - V_-$.
*   The current $I_f = (V_x - V_-) / R_f$. This current flows towards the inverting input.
*   For an op-amp with negative feedback, the inverting input is at virtual ground, so $V_- \approx 0$.
*   Thus, $I_f \approx V_x / R_f$. This current is provided by the output.
*   The current supplied by the op-amp is $I_o = (A V_-) / R_{out}$. Since $V_- \approx 0$, this equation isn't directly helpful for output resistance calculation without considering the feedback loop.

Let's re-evaluate the output resistance for an inverting amplifier.
Set $V_{in} = 0$. The inverting input is at $V_-$.
The current through $R_f$ is $I_{R_f} = (V_x - V_-) / R_f$.
The current from the output stage of the op-amp is $I_{out\_stage} = (A \cdot (0 - V_-)) / R_{out} = (-A V_-) / R_{out}$.
The test current $I_x$ is the current flowing out of the output terminal.
$I_x = I_{out\_stage} - I_{R_f}$ (assuming $I_{R_f}$ flows towards the inverting input).
$I_x = (-A V_-) / R_{out} - (V_x - V_-) / R_f$.
From the op-amp's perspective, $V_-$ is determined by the input signal and feedback.
For the inverting configuration, the voltage at the inverting terminal is $V_- = V_o / A = (V_x - I_x R_{out}) / A$. This is complex.

A simpler way is to use the general formula for output resistance reduction by negative feedback. The output resistance of any amplifier with negative feedback is:
$$R_{out,f} = R_{out} / (1 + A\beta)$$
Where $\beta$ is the feedback factor representing the ratio of the signal fed back to the output signal.
In the inverting amplifier, the feedback signal is the voltage across $R_f$.
The feedback factor $\beta$ for voltage-shunt feedback (where current is fed back in parallel) is more complex than a simple voltage division. However, the underlying principle of feedback reducing output resistance by a factor of $(1+A\beta)$ holds.
For voltage shunt feedback, the reduction factor in output impedance is often derived by considering the feedback current.

**Simplified approach (using open circuit voltage and short circuit current):**
Open-circuit output voltage $V_{oc} = -V_{in} (R_f / R_1)$.
Short-circuit output current $I_{sc}$. If the output is shorted ($V_x = 0$), then $V_- = 0$. The current from the op-amp is $I_{out\_stage} = (A \cdot 0) / R_{out} = 0$. This is incorrect.

Let's use the derived formula for output resistance reduction with feedback:
For voltage shunt feedback, the effective feedback is $I_{feedback} \propto V_{out}$. The input being affected is current.
The feedback factor $\beta$ is defined as the ratio of the feedback signal to the output signal. In voltage shunt feedback, a fraction of the output voltage is fed back as current to the input.
The feedback current is $I_f = V_o / R_f$. This current is applied in parallel to the input current.
The equivalent circuit of the feedback loop shows that the feedback factor for a voltage shunt connection is related to the ratio of the feedback impedance to the input impedance.
The gain equation for an inverting amplifier is $V_o / V_{in} = -R_f / R_1$.
The feedback factor $\beta$ for voltage shunt is usually defined in terms of how the output voltage influences the input current.

**According to Franco, S. (3/e, Ch 4):**
For voltage-shunt feedback, the output resistance is reduced by a factor of $(1+A \cdot \alpha)$, where $\alpha$ is the feedback transmission factor. For the inverting amplifier, this reduction factor is indeed $(1+A)$.
$$R_{out,f} = R_{out} / (1 + A)$$
This implies $\beta$ in the general formula $1+A\beta$ is effectively 1 for voltage shunt.

**Formula for Output Resistance (Voltage Shunt Feedback):**
$$R_{out,f} = R_{out} / (1 + A)$$

*   Since $A$ is very large, $R_{out,f}$ is significantly *decreased* by a factor of $(1 + A)$.
*   For an ideal op-amp, $R_{out} \rightarrow 0$, hence $R_{out,f} \rightarrow 0$.

**Important Point (Roy D. C. & S. B. Jain, 5/e, Ch 5):** Voltage shunt feedback configurations lead to a low input impedance and a low output impedance, making them suitable for current amplification or applications where the input signal is a current source.

### 4. Virtual Ground Concept

The "virtual ground" is a crucial concept when analyzing op-amp circuits with negative feedback, especially for the inverting amplifier.

**Definition:**
A virtual ground is a node in a circuit that is held at approximately zero potential (ground potential) by the action of an op-amp in a negative feedback configuration, even though it is not physically connected to ground.

**How it Works (Inverting Amplifier):**

1.  **High Open-Loop Gain (A):** An op-amp has a very high open-loop gain, meaning a tiny difference between its non-inverting (+) and inverting (-) input voltages results in a very large output voltage.
2.  **Negative Feedback:** A portion of the output signal is fed back to the inverting input.
3.  **Input Signal:** An input voltage $V_{in}$ is applied through $R_1$ to the inverting input.
4.  **Op-Amp's Action:**
    *   If the inverting input voltage ($V_-$) were slightly positive, the op-amp's output would swing negatively (due to negative feedback). This negative voltage, fed back, would tend to pull $V_-$ back towards zero.
    *   If the inverting input voltage ($V_-$) were slightly negative, the op-amp's output would swing positively. This positive voltage, fed back, would tend to push $V_-$ back towards zero.
5.  **Equilibrium:** The op-amp constantly adjusts its output to keep the voltage difference between its inputs ($V_+ - V_-$) at a very small value (ideally zero). Since the non-inverting input ($V_+$) is usually connected to ground, the inverting input ($V_-$) is forced to be at the same potential as the non-inverting input, i.e., at ground potential.

**Consequences of Virtual Ground:**

*   **Input Resistance:** For an inverting amplifier, the input resistance is $R_1$ because the inverting input is at virtual ground. The voltage across $R_1$ is $V_{in} - 0 = V_{in}$, so current $I_{in} = V_{in} / R_1$.
*   **No Current Drawn by Op-Amp:** Since the inverting input is at zero potential, and the op-amp's own input impedance is very high, virtually no current flows into the inverting input terminal. This means all the input current $I_{in}$ flows through the feedback resistor $R_f$.

**Example (Inverting Amplifier):**
Input voltage $V_{in} = 2V$. $R_1 = 10k\Omega$, $R_f = 100k\Omega$.
*   The inverting input is at virtual ground ($V_- \approx 0V$).
*   Input current $I_{in} = (V_{in} - V_-) / R_1 = (2V - 0V) / 10k\Omega = 0.2mA$.
*   Since $V_- \approx 0V$, the current through $R_f$ is $I_f = (V_- - V_o) / R_f = (0V - V_o) / R_f$.
*   As all input current flows through $R_f$, $I_{in} = I_f$.
*   $0.2mA = (-V_o) / 100k\Omega$.
*   $V_o = -0.2mA \times 100k\Omega = -20V$.
*   The closed-loop gain is $V_o / V_{in} = -20V / 2V = -10$.
*   This matches the formula $A_f = -R_f / R_1 = -100k\Omega / 10k\Omega = -10$.

**Important Point (Gayakwad, R. A., 4/e, Ch 3):** The virtual ground concept is a simplification that holds due to the high open-loop gain and negative feedback. It allows for straightforward analysis of circuits like the inverting amplifier.

### 5. Practice Questions and Exercises

**Question 1:**
A non-inverting amplifier uses an op-amp with an open-loop gain $A = 10^5$, input resistance $R_{in} = 2M\Omega$, and output resistance $R_{out} = 100\Omega$. The feedback network consists of $R_1 = 1k\Omega$ and $R_2 = 100k\Omega$.
Calculate:
a) The feedback factor $\beta$.
b) The closed-loop input resistance $R_{in,f}$.
c) The closed-loop output resistance $R_{out,f}$.

**Solution 1:**
a) The feedback factor for a non-inverting amplifier is $\beta = R_1 / (R_1 + R_2)$.
$\beta = 1k\Omega / (1k\Omega + 100k\Omega) = 1 / 101 \approx 0.0099$.

b) The closed-loop input resistance is $R_{in,f} = R_{in} (1 + A\beta)$.
$R_{in,f} = 2M\Omega (1 + 10^5 \times (1/101))$
$R_{in,f} = 2M\Omega (1 + 100000/101) \approx 2M\Omega (1 + 990.1)$
$R_{in,f} \approx 2M\Omega \times 991.1 \approx 1982.2 M\Omega$.

c) The closed-loop output resistance is $R_{out,f} = R_{out} / (1 + A\beta)$.
$R_{out,f} = 100\Omega / (1 + 10^5 \times (1/101))$
$R_{out,f} \approx 100\Omega / 991.1 \approx 0.101\Omega$.

**Question 2:**
An inverting amplifier uses an op-amp. The input resistor is $R_1 = 5k\Omega$, and the feedback resistor is $R_f = 50k\Omega$.
a) What is the input resistance of this circuit?
b) What is the approximate output resistance of this circuit, assuming the op-amp has a high open-loop gain $A$ and a typical output resistance $R_{out}$? (Express your answer in terms of $R_{out}$ and $A$).

**Solution 2:**
a) For an inverting amplifier (voltage shunt feedback), the input resistance is approximately equal to the input resistor $R_1$.
$R_{in,f} \approx R_1 = 5k\Omega$.

b) For voltage shunt feedback, the output resistance is reduced by a factor of $(1 + A)$.
$R_{out,f} = R_{out} / (1 + A)$.

**Question 3:**
Explain the concept of virtual ground and its significance in the analysis of the inverting amplifier circuit.

**Solution 3:**
The virtual ground is a node in an op-amp circuit with negative feedback that is held at approximately zero potential without being physically connected to ground. This occurs because the op-amp's high open-loop gain forces the voltage difference between its inverting and non-inverting inputs to be nearly zero. If the non-inverting input is grounded, the inverting input becomes a virtual ground.
Its significance in the inverting amplifier is that it simplifies input resistance calculation (making it equal to $R_1$) and allows for straightforward analysis of current flow, as all input current is assumed to flow through the feedback resistor.

### 6. Important Points to Remember

*   **Voltage Series Feedback:** Increases input resistance, decreases output resistance. Used for voltage amplifiers.
*   **Voltage Shunt Feedback:** Decreases input resistance, decreases output resistance. Used for current amplifiers.
*   **Input Resistance Formulas:**
    *   Voltage Series: $R_{in,f} = R_{in} (1 + A\beta)$
    *   Voltage Shunt: $R_{in,f} \approx R_1$ (for inverting amp)
*   **Output Resistance Formulas:**
    *   Voltage Series: $R_{out,f} = R_{out} / (1 + A\beta)$
    *   Voltage Shunt: $R_{out,f} = R_{out} / (1 + A)$
*   **Virtual Ground:** Occurs at the inverting input when negative feedback is applied and the non-inverting input is at ground. Simplifies circuit analysis.
*   **Ideal Op-Amp Properties:** Infinite input impedance ($R_{in} \rightarrow \infty$), zero output impedance ($R_{out} \rightarrow 0$), infinite open-loop gain ($A \rightarrow \infty$). These idealizations lead to $R_{in,f} \rightarrow \infty$ for voltage series and $R_{in,f} = R_1$ for voltage shunt, and $R_{out,f} \rightarrow 0$ for both.

### 7. Alignment with Course Outcomes

*   **CO1 (Summarize concepts):** This module's notes cover the fundamental concepts of negative feedback, its four types, and the virtual ground concept. (K2)
*   **CO2 (Design circuits):** Understanding the impact of feedback on input and output resistance is crucial for designing circuits with desired impedance characteristics. The examples of non-inverting and inverting amplifiers are basic building blocks for more complex designs. (K3)
*   **CO3 (Choose IC chips):** While this topic focuses on circuit analysis, understanding impedance matching and signal transfer is essential for selecting appropriate op-amps for specific applications. (K2)
*   **CO4 (Implement applications):** The circuits discussed (non-inverting, inverting) are direct implementations that use IC op-amps for amplification. (K3)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
