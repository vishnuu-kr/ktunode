---
title: "typical parameter values for 741, equivalent circuit, open loop configurations, voltage transfer curve"
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 1: Differential Amplifiers:  Differential amplifier configurations using BJT"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe569"
status: "completed"
scrapedAt: "2026-05-23T17:49:41.506Z"
---
# LINEAR INTEGRATED CIRCUITS - Module 1: Differential Amplifiers

## Topic: Differential Amplifiers using BJT

This module focuses on understanding the fundamental building block of many analog integrated circuits: the **Differential Amplifier**. We will explore its configurations using Bipolar Junction Transistors (BJTs), delve into the characteristics of a widely used op-amp, the 741, and analyze its behavior in open-loop configurations.

---

### Learning Outcomes:

By the end of this module, you will be able to:

*   **LO1:** Understand the basic structure and operation of a BJT differential amplifier.
*   **LO2:** Identify and analyze different configurations of BJT differential amplifiers.
*   **LO3:** Describe the typical parameter values of a general-purpose operational amplifier like the 741.
*   **LO4:** Draw and explain the small-signal equivalent circuit of a BJT differential amplifier.
*   **LO5:** Explain the operation of a differential amplifier in open-loop configurations.
*   **LO6:** Understand and sketch the voltage transfer characteristic (VTC) of a differential amplifier.

---

### Course Outcomes Alignment:

*   **CO1 (K2):** This module directly supports CO1 by summarizing the concepts of differential amplifier configurations.
*   **CO3 (K2):** Understanding the typical parameter values of a 741 op-amp helps in choosing appropriate IC chips for applications.

---

### 1. Introduction to Differential Amplifiers

A **differential amplifier** is an electronic circuit that amplifies the **difference** between two input voltages. It is a fundamental building block in analog integrated circuits, particularly in operational amplifiers (op-amps).

*   **Key Concept:** Amplifies $V_{in1} - V_{in2}$ while rejecting common-mode signals.
*   **Common-Mode Signal:** A signal that is present on both inputs simultaneously.
*   **Differential-Mode Signal:** A signal that is present with opposite polarity on the two inputs.

---

### 2. BJT Differential Amplifier Configurations

The most common implementation of a differential amplifier utilizes Bipolar Junction Transistors (BJTs). Let's explore the basic configurations:

#### 2.1. Basic Differential Amplifier (Common-Emitter Configuration)

This is the fundamental differential pair. Two identical BJTs are biased using a constant current source.

**Circuit Diagram (Conceptual):**

```
       Vcc
        |
       Rc1   Rc2
        |     |
  Vin1--|>--+--|>--|--Vout1
        |   |   |
       Q1  Q2
        |   |
      Re1 Re2
        |   |
        ---
         |
        Iee (Constant Current Source)
         |
        Vee
```

**Operation:**

*   When $V_{in1}$ increases and $V_{in2}$ decreases, $Q1$ conducts more, and $Q2$ conducts less.
*   The voltage at $V_{out1}$ (across $Rc1$) decreases, and the voltage at $V_{out2}$ (across $Rc2$) increases.
*   The differential output ($V_{out1} - V_{out2}$) will be proportional to the differential input ($V_{in1} - V_{in2}$).

**Types of Outputs:**

*   **Single-ended output:** Taking the output from either $V_{out1}$ or $V_{out2}$.
*   **Differential output:** Taking the output as the difference between $V_{out1}$ and $V_{out2}$.

#### 2.2. Differential Amplifier with Emitter Resistors (for improved CMRR)

Adding emitter resistors ($R_{E1}$, $R_{E2}$) to the basic configuration improves the Common-Mode Rejection Ratio (CMRR).

**Circuit Diagram (Conceptual):**

```
       Vcc
        |
       Rc1   Rc2
        |     |
  Vin1--|>--+--|>--|--Vout1
        |   |   |
       Q1  Q2
        |   |
      RE1 RE2
        |   |
      --+---+--
        |
       Iee (Constant Current Source)
        |
       Vee
```

**Operation:**

*   When a common-mode signal is applied to both inputs, the emitter current increases.
*   The voltage drop across the emitter resistors ($R_{E1}$, $R_{E2}$) increases, creating a negative feedback effect.
*   This negative feedback limits the change in collector currents and thus reduces the common-mode gain.

**Key Improvement:** Enhanced CMRR.

#### 2.3. Differential Amplifier with a Constant Current Source (for improved CMRR)

Using a **constant current source** in the emitter leg (instead of a simple resistor) provides a very high output impedance, leading to a significantly improved CMRR. This is the foundation of most practical differential amplifier stages.

**Circuit Diagram (Conceptual):**

```
       Vcc
        |
       Rc1   Rc2
        |     |
  Vin1--|>--+--|>--|--Vout1
        |   |   |
       Q1  Q2
        |   |
        ---
         |
      I_bias (Constant Current Source)
         |
        Vee
```

**The Constant Current Source:** Typically implemented using one or more transistors with biasing resistors. The goal is to present a high impedance to the common-mode signals.

**Key Improvement:** Very high CMRR.

**Reference:** Roy D. C. and S. B. Jain, Chapter 4 on Differential Amplifiers, discusses these configurations in detail.

---

### 3. Typical Parameter Values for the 741 Op-Amp

The LM741 is a classic and widely used general-purpose operational amplifier. While we are focusing on BJT differential amplifier configurations, the 741 internally uses differential amplifier stages. Understanding its parameters gives us a tangible example of the performance characteristics we aim to achieve.

**Important Note:** The 741 is a complex IC with multiple stages. The values below are typical for the *entire op-amp*, not just a single differential pair. However, the differential amplifier stage is the input stage and significantly dictates many of these parameters.

| Parameter                      | Symbol        | Typical Value | Unit      | Description                                                                                                                                     |
| :----------------------------- | :------------ | :------------ | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Input Offset Voltage**       | $V_{io}$      | 1             | mV        | The small DC voltage that must be applied between the inputs to force the output voltage to zero. Ideally zero.                                  |
| **Input Bias Current**         | $I_B$         | 80            | nA        | The average of the two input currents.                                                                                                          |
| **Input Offset Current**       | $I_{io}$      | 20            | nA        | The difference between the two input currents.                                                                                                  |
| **Large-Signal Voltage Gain**  | $A_{OL}$      | 200,000       | (V/mV)    | The open-loop voltage gain, the ratio of output voltage to the differential input voltage when operating in the linear region. Very high.        |
| **Slew Rate**                  | SR            | 0.5           | V/µs      | The maximum rate of change of the output voltage. Limits how fast the output can respond to large input signals.                                 |
| **Gain Bandwidth Product**     | GBW / GBP     | 1             | MHz       | The product of the open-loop gain and the frequency at which the gain drops to unity (0 dB). Varies with gain.                                  |
| **Input Impedance**            | $Z_{in}$      | 2             | MΩ        | The impedance seen by the input signal source. High for differential amplifiers.                                                                  |
| **Output Impedance**           | $Z_{out}$     | 75            | Ω         | The impedance seen by the load connected to the output. Low for op-amps.                                                                        |
| **Common-Mode Rejection Ratio**| CMRR          | 70            | dB        | The ratio of the differential gain to the common-mode gain. Higher is better, indicating rejection of unwanted common-mode signals.              |
| **Supply Voltage Rejection Ratio**| PSRR / SVRR   | 150           | dB        | The ratio of the change in input offset voltage to the change in supply voltage. Higher is better.                                              |
| **Quiescent Current Draw**     | $I_{CC}$      | 2.8           | mA        | The DC current drawn from the power supply when no input signal is applied.                                                                     |

**Reference:** Roy D. C. and S. B. Jain, Chapter 8 on Operational Amplifiers, provides a table of typical 741 parameters. Gayakwad R. A., Chapter 2, also details these parameters.

---

### 4. Equivalent Circuit of a BJT Differential Amplifier

To analyze the performance of a differential amplifier at AC signals, we use its small-signal equivalent circuit. This circuit models the behavior of the transistors for small input variations.

**Key Components:**

*   **Transistors (Q1, Q2):** Modeled by their hybrid-π equivalent circuits (or simplified versions like the transconductance model).
*   **Collector Resistors (Rc1, Rc2):** Represented as resistors.
*   **Emitter Current Source (Iee):** For AC analysis, an ideal current source has infinite impedance and is represented as an open circuit.
*   **Power Supplies (Vcc, Vee):** For AC analysis, AC grounds.

**Simplified Equivalent Circuit Model (per transistor):**

For a differential input ($v_{d}$) applied to $Q1$ and $-v_{d}$ to $Q2$, and assuming matched transistors:

*   $v_{be1} = v_{d}/2$
*   $v_{be2} = -v_{d}/2$

The output voltage at $V_{out1}$ can be analyzed. We'll use the common emitter with an ideal current source at the emitter.

**Small-Signal Model Components (per transistor):**

*   **Input:** A voltage source ($v_{be}$) applied to the base.
*   **Base-Emitter Resistance:** $r_{\pi} = \frac{\beta}{g_m}$, where $g_m = \frac{I_C}{V_T}$ ($I_C$ is the DC collector current, $V_T$ is the thermal voltage).
*   **Collector Current Source:** A dependent current source of value $g_m v_{be}$ flowing from collector to emitter.
*   **Collector Resistor:** $R_C$ (assuming $R_{c1} = R_{c2} = R_C$).
*   **Emitter:** The current source $I_{ee}$ is an AC open circuit.

**Analysis (Single-ended output $V_{out1}$):**

Assume $Q1$ and $Q2$ are identical, and the emitter current source $I_{ee}$ is ideal (infinite impedance). The DC collector current in each transistor is $I_C = I_{ee}/2$.

The small-signal model for $Q1$ with input $v_{in1}$ and output $v_{out1}$:

```
       Vcc (AC Ground)
        |
       Rc
        |
  vin1--o------>gm*vbe1----o------>vout1
        |             |     |
       r_pi          open  Rc
        |             |     |
        o------o      o------> Ground (emitter is AC ground due to Iee)
               vbe1
```

*   The current through $R_C$ is $g_m v_{be1}$ (if emitter is AC ground).
*   $v_{be1} = v_{in1}$ (assuming $v_{in2}=0$ for differential analysis).
*   So, the current through $R_C$ is $g_m v_{in1}$.
*   The output voltage $v_{out1} = -i_{c1} R_C = -(g_m v_{in1}) R_C$.
*   The differential gain $A_d = \frac{v_{out1}}{v_{in1}} = -g_m R_C$.

If we consider the differential input $v_d = v_{in1} - v_{in2}$, and assume $v_{in1} = v_d/2$, $v_{in2} = -v_d/2$, then $v_{be1} = v_d/2$.

The output voltage $v_{out1} = -g_m (v_d/2) R_C$.
The differential voltage gain is $A_d = \frac{v_{out1}}{v_d} = -\frac{1}{2} g_m R_C$.

For a differential output ($v_{out} = v_{out1} - v_{out2}$):
$v_{out1} = -g_m R_C (v_{in1} - v_{in2})/2$
$v_{out2} = -g_m R_C (v_{in2} - v_{in1})/2 = g_m R_C (v_{in1} - v_{in2})/2$
$v_{out} = v_{out1} - v_{out2} = -g_m R_C (v_{in1} - v_{in2})$
Differential Gain $A_d = \frac{v_{out}}{v_{in1} - v_{in2}} = -g_m R_C$.

**For common-mode analysis:**
$v_{in1} = v_{in2} = v_{cm}$.
$v_{be1} = v_{be2} = v_{cm}$ (if emitter is a direct connection, but here it's an AC open circuit).
In the case of a constant current source at the emitter, the emitter node is an AC ground.
So, $v_{be1} = v_{in1}$ and $v_{be2} = v_{in2}$.
For $v_{cm}$ input, $v_{be1} = v_{cm}$, $v_{be2} = v_{cm}$.
$v_{out1} = -g_m v_{cm} R_C$.
$v_{out2} = -g_m v_{cm} R_C$.
$v_{out} = v_{out1} - v_{out2} = 0$.
The common-mode gain $A_{cm} = 0$ for an ideal current source.

**CMRR** is the ratio of $A_d$ to $A_{cm}$. An ideal current source gives infinite CMRR.

**Reference:** Sedra A. S. and K. C. Smith, Chapter 6 on BJT Circuits, provides detailed analysis of small-signal equivalent circuits. Franco S., Chapter 5, also covers equivalent circuits for differential amplifiers.

---

### 5. Open-Loop Configurations of Differential Amplifiers

An operational amplifier is used in an "open-loop" configuration when it is not connected in a feedback circuit. In this mode, the differential amplifier stage (which forms the input stage of most op-amps) operates to amplify the difference between its two inputs.

**Basic Open-Loop Operation:**

*   **Differential Input Voltage ($v_{id}$):** $v_{id} = V_{in+} - V_{in-}$.
*   **Output Voltage ($v_o$):** $v_o = A_{OL} \times v_{id}$, where $A_{OL}$ is the open-loop voltage gain.

**Characteristics in Open-Loop:**

*   **High Gain:** $A_{OL}$ is very large (e.g., 200,000 for 741). This means even small input voltage differences result in very large output voltage swings.
*   **Saturation:** Due to the high gain, the output quickly saturates at the positive or negative power supply rails if the input difference is significant.
*   **Limited Bandwidth:** The open-loop gain is not constant with frequency. It decreases at higher frequencies.
*   **Sensitivity to Offset:** Any small input offset voltage present in the differential pair will be amplified by $A_{OL}$, leading to a large DC output offset.

**Example:**

If a 741 op-amp has an open-loop gain of $2 \times 10^5$ V/V and an input offset voltage of 1 mV, the output offset voltage will be:
$V_{out\_offset} = A_{OL} \times V_{io} = (2 \times 10^5 \text{ V/V}) \times (1 \times 10^{-3} \text{ V}) = 200$ V.
This value is far beyond the power supply rails, demonstrating that the op-amp will saturate.

**Applications of Open-Loop (Limited):**

*   **Comparators:** The high gain makes op-amps suitable for comparing two voltages. The output will swing to one of the saturation levels depending on which input is higher.
*   **Zero Crossing Detectors:** A specific type of comparator where the reference is ground.

**Reference:** Gayakwad R. A., Chapter 3 on Op-Amp Applications, discusses open-loop operation. Bell D. A., Chapter 5, also covers open-loop operation of op-amps.

---

### 6. Voltage Transfer Curve (VTC) of a Differential Amplifier

The **Voltage Transfer Curve (VTC)** plots the output voltage ($v_o$) against the differential input voltage ($v_{id}$). It graphically illustrates how the differential amplifier responds to changes in the input difference.

**Key Features of the VTC:**

*   **Linear Region:** Where the output voltage is proportional to the input voltage difference ($v_o = A_d \times v_{id}$). This region is typically narrow for open-loop op-amps.
*   **Saturation Regions:** The output voltage reaches the positive and negative power supply limits ($+V_{sat}$ and $-V_{sat}$) when the input voltage difference is large enough.
*   **Symmetry:** Ideally, the VTC is symmetrical around the origin.
*   **Input Offset:** If there's an input offset voltage ($V_{io}$), the linear region is shifted horizontally.

**Sketching the VTC (Open-Loop Op-Amp):**

Let $A_{OL}$ be the open-loop gain, $V_{sat+}$ be the positive saturation voltage, and $V_{sat-}$ be the negative saturation voltage.

1.  **Center Point:** At $v_{id} = 0$, the output is ideally 0. If there's an offset, the center is at $v_{id} = V_{io}$.
2.  **Linear Region:** A straight line with a very steep slope ($A_{OL}$) passes through the center point.
3.  **Saturation:** The line quickly reaches the saturation voltages.
    *   $v_{id\_sat+} = V_{sat+} / A_{OL}$
    *   $v_{id\_sat-} = V_{sat-} / A_{OL}$
    *   For example, if $A_{OL} = 2 \times 10^5$ and $V_{sat} = \pm 13$V, the transition from linear to saturation happens at $v_{id} = \pm 13V / (2 \times 10^5) = \pm 65 \mu V$.

**Graph:**

```
  +Vsat |      /-----------------
       |     /
       |    /
       |   /
       |  /
       | /
    0 -+----------------------> vid
       | \
       |  \
       |   \
       |    \
       |     \
  -Vsat|      \-----------------
```

**With Input Offset ($V_{io}$):**

The linear region is centered around $v_{id} = V_{io}$ instead of $v_{id} = 0$.

```
  +Vsat |      /-----------------
       |     /
       |    /
       |   /
       |  /
       | /
    0 -+------ Vio---------------> vid
       | \
       |  \
       |   \
       |    \
       |     \
  -Vsat|      \-----------------
```

**Reference:** Roy D. C. and S. B. Jain, Chapter 8, shows VTCs for op-amps. Gayakwad R. A., Chapter 3, also includes VTCs, particularly for comparator applications.

---

### Practice Questions

1.  **Question:** What is the primary advantage of using a constant current source in the emitter leg of a BJT differential amplifier compared to a simple emitter resistor?
    *   **Answer:** A constant current source provides a very high output impedance, which significantly improves the Common-Mode Rejection Ratio (CMRR) of the differential amplifier.

2.  **Question:** For a 741 op-amp with an open-loop gain of $2 \times 10^5$ V/V and output saturation voltages of $\pm 13$ V, what is the range of differential input voltage over which the op-amp operates in its linear region?
    *   **Answer:**
        *   Positive saturation input: $v_{id\_sat+} = V_{sat+} / A_{OL} = 13 \text{ V} / (2 \times 10^5 \text{ V/V}) = 6.5 \times 10^{-5}$ V = 65 µV.
        *   Negative saturation input: $v_{id\_sat-} = V_{sat-} / A_{OL} = -13 \text{ V} / (2 \times 10^5 \text{ V/V}) = -6.5 \times 10^{-5}$ V = -65 µV.
        *   The linear region is approximately between -65 µV and +65 µV.

3.  **Question:** Draw the small-signal equivalent circuit of a single BJT in a differential pair, assuming the emitter is connected to an ideal constant current source. Label all components.
    *   **Answer:** (Refer to the small-signal equivalent circuit discussion in Section 4, for a single transistor with $v_{be}$ driving a transconductance source $g_m v_{be}$ in parallel with $r_{\pi}$, connected to $R_C$ and AC ground at the emitter.)

4.  **Question:** Explain why an op-amp in open-loop configuration is generally not suitable for linear amplification applications but is useful as a comparator.
    *   **Answer:** In open-loop, the op-amp has extremely high gain and a very narrow linear operating region. Any small deviation from the ideal zero differential input causes the output to saturate at the power supply rails. This makes precise linear amplification difficult. However, this rapid saturation makes it excellent for comparators, where the goal is to switch the output to one of the extreme voltage levels based on the sign of the input difference.

5.  **Question:** If a differential amplifier has an open-loop gain of $10^5$ and an input offset voltage of 2 mV, what will be the output offset voltage?
    *   **Answer:**
        *   Output Offset Voltage = Open-Loop Gain $\times$ Input Offset Voltage
        *   $V_{out\_offset} = (10^5) \times (2 \times 10^{-3} \text{ V}) = 200$ V.

---

### Important Points to Remember:

*   **Differential Amplifiers** amplify the difference between two inputs and reject common-mode signals.
*   **Constant Current Sources** are crucial for high CMRR in differential amplifier stages.
*   The **741 op-amp** is a benchmark with specific parameter values (high gain, moderate slew rate, decent bandwidth).
*   **Small-signal equivalent circuits** are essential for AC analysis.
*   **Open-loop operation** of op-amps leads to saturation due to high gain, making them suitable for comparators.
*   The **Voltage Transfer Curve (VTC)** visually represents the input-output relationship, showing the linear and saturation regions.

---
This concludes Module 1. You should now have a solid understanding of the fundamental differential amplifier, its BJT implementation, the characteristics of a standard op-amp like the 741, and how these circuits behave in open-loop configurations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
