---
title: "Feedback amplifier circuits using BJT in each feedback topologies (Analysis of only Voltage series feedback circuit is required)"
subject: "SOLID STATE DEVICES"
module: "Module 3: MOSFETs "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f94"
status: "completed"
scrapedAt: "2026-05-23T16:18:53.966Z"
---
# SOLID STATE DEVICES: Module 3: MOSFETs - Feedback Amplifier Circuits using BJTs

**Topic:** Feedback amplifier circuits using BJT in each feedback topologies (Analysis of only Voltage series feedback circuit is required)

**Learning Outcomes:**

*   Understand the fundamental concept of feedback in amplifier circuits.
*   Analyze the effect of negative feedback on amplifier characteristics such as gain, bandwidth, input impedance, and output impedance.
*   Analyze the voltage-series feedback topology using BJT circuits.
*   Derive the gain, input impedance, and output impedance for a voltage-series feedback amplifier.
*   Understand the practical implementation of voltage-series feedback in BJT amplifier circuits.

**Course Outcomes Alignment:**

*   **CO4: Design and analyze feedback amplifiers and oscillators (Knowledge Level: K4)** - This module directly addresses the analysis of feedback amplifiers, specifically the voltage-series topology, which is a core component of CO4. While the topic is about BJT feedback circuits, the principles of feedback analysis are transferable and foundational for designing both BJT and MOSFET feedback amplifiers.

**Key Concepts and Definitions:**

*   **Feedback:** The process of diverting a portion of the output signal of a circuit and feeding it back to the input.
*   **Negative Feedback:** Feedback where the returned signal opposes the original input signal. This generally leads to stabilization of amplifier characteristics, reduced distortion, and increased bandwidth at the expense of reduced gain.
*   **Positive Feedback:** Feedback where the returned signal aids the original input signal. This can lead to oscillation or distortion.
*   **Feedback Amplifier:** An amplifier circuit that incorporates feedback.
*   **Basic Amplifier:** An amplifier without feedback.
*   **Feedback Network:** The circuit that samples the output and provides the feedback signal.
*   **Sampling:** How the output signal is taken (e.g., voltage or current).
*   **Mixing:** How the feedback signal is combined with the input signal (e.g., series or parallel).
*   **Voltage-Series Feedback:** A topology where the output voltage is sampled and the feedback signal is connected in series with the input voltage signal. This aims to control the output voltage.

**1. Introduction to Feedback in Amplifiers**

Feedback is a powerful technique used to modify the performance of amplifiers. It involves taking a fraction of the output signal and feeding it back to the input. Negative feedback is particularly important as it offers several advantages:

*   **Gain Stabilization:** Makes the amplifier's gain less dependent on variations in transistor parameters (like $\beta$) and temperature.
*   **Reduction of Nonlinear Distortion:** Non-linearities in the amplifier are reduced.
*   **Reduction of Noise:** Noise generated within the amplifier is reduced.
*   **Increase in Bandwidth:** The frequency range over which the amplifier operates effectively is widened.
*   **Control of Input and Output Impedance:** Input and output impedances can be increased or decreased as desired.

The primary disadvantage of negative feedback is a **reduction in the overall gain** of the amplifier.

**2. Feedback Topologies**

There are four basic feedback topologies, classified by how the output is sampled and how the feedback is mixed with the input:

| Topology        | Output Sampling | Input Mixing | Effect on Gain | Effect on Input Impedance | Effect on Output Impedance |
| :-------------- | :-------------- | :----------- | :------------- | :------------------------ | :------------------------- |
| **Voltage-Series** | Voltage         | Series       | Decreases      | Increases                 | Decreases                  |
| Voltage-Shunt   | Voltage         | Shunt        | Decreases      | Decreases                 | Decreases                  |
| Current-Series  | Current         | Series       | Decreases      | Increases                 | Increases                  |
| Current-Shunt   | Current         | Shunt        | Decreases      | Decreases                 | Increases                  |

This module focuses on the **Voltage-Series Feedback** topology.

**3. Voltage-Series Feedback Amplifier Analysis**

Voltage-series feedback is characterized by:
*   **Output Voltage Sampling:** A fraction of the output voltage ($V_o$) is sensed.
*   **Series Mixing:** The feedback voltage signal ($V_f$) is connected in series with the input voltage signal ($V_s$).

The goal of voltage-series feedback is to control the output voltage, making it more stable and predictable.

**3.1. Basic Voltage-Series Feedback Amplifier Circuit (BJT)**

A common implementation of a voltage-series feedback amplifier using a BJT is the common-emitter amplifier with a voltage divider for biasing and a feedback resistor ($R_f$) from the output to the emitter.

**(Conceptual Diagram)**

```
      Vs -- Rs --+
                |
                R1
                |
           +----B----Q1----C----+----RL----+----Vo
           |       |      |      |
           Re      E      |      Rc
           |       |      |      |
          GND     GND     |     GND
                          |
                          Rf
                          |
                         GND
```

*   **Q1:** The BJT amplifier.
*   **Vs:** Input signal voltage.
*   **Rs:** Source resistance.
*   **R1, R2 (implicit in biasing, not explicitly shown in simplified feedback diagram):** Bias resistors.
*   **Rc:** Collector resistor.
*   **Re:** Emitter resistor (often part of the feedback path).
*   **RL:** Load resistor.
*   **Rf:** Feedback resistor, connecting emitter to a point ahead of the output.
*   **Vo:** Output voltage.

In a typical voltage-series feedback configuration, $R_f$ is connected between the emitter and ground (or a point that allows sampling of the emitter voltage, which is proportional to the output voltage in many configurations, or directly to the output if a voltage divider at the output is used). For analysis, we'll consider a scenario where $R_f$ is connected between the emitter and ground, and the output is taken from the collector.

**Simplified Block Diagram:**

```
      Vs --+---> Input ---> Amplifier (A) ---> Output (Vo) ---+
           |                  ^                               |
           +--- Mixer ---------+----- Feedback Network (B) -----+
```

For voltage-series feedback:
*   Input mixing is **series**.
*   Output sampling is **voltage**.
*   The feedback signal ($V_f$) is a fraction of the output voltage ($V_o$).
*   The feedback factor ($\beta$) relates the feedback signal to the output voltage: $V_f = \beta V_o$.

**3.2. Analysis of Voltage-Series Feedback**

Let's analyze the effects of voltage-series feedback on an amplifier. We'll use the hybrid-$\pi$ model for the BJT.

**Assumptions for analysis:**
*   The feedback network is unilateral (it does not affect the forward path of the amplifier).
*   The feedback factor $\beta$ is constant.

**a) Gain with Feedback ($A_f$)**

The closed-loop gain ($A_f$) is related to the open-loop gain ($A$) and the feedback factor ($\beta$) by the formula:

$A_f = \frac{A}{1 + A\beta}$

Where:
*   $A$ is the open-loop voltage gain of the amplifier (without feedback).
*   $\beta$ is the feedback factor, representing the fraction of output voltage fed back to the input in series.

**Derivation (using block diagram and input/output relationships):**

Let $V_{in}$ be the actual input voltage to the amplifier stage (after mixing).
Let $V_s$ be the source voltage.
Let $V_f$ be the feedback voltage.

The input voltage to the amplifier is: $V_{in} = V_s + V_f$ (due to series mixing).
The output voltage is: $V_o = A \cdot V_{in}$
The feedback voltage is: $V_f = \beta \cdot V_o$

Substitute $V_f$ into the $V_{in}$ equation:
$V_{in} = V_s + \beta V_o$

Now substitute $V_{in}$ into the $V_o$ equation:
$V_o = A (V_s + \beta V_o)$
$V_o = A V_s + A \beta V_o$
$V_o (1 - A \beta) = A V_s$

The closed-loop gain $A_f$ is defined as $A_f = \frac{V_o}{V_s}$:
$A_f = \frac{A}{1 - A \beta}$

Since we are considering negative feedback, the feedback signal opposes the input, so the mixing equation should technically be $V_{in} = V_s - V_f$ or the feedback factor $\beta$ is negative if we use $V_{in} = V_s + V_f$. Conventionally, for negative feedback, the denominator becomes $(1 + A\beta)$. Let's re-evaluate the mixing for voltage-series negative feedback.

With voltage-series feedback, the input loop voltage equation is $V_s = V_{in} + V_f$.
So, $V_{in} = V_s - V_f$.
And $V_f = \beta V_o$.
Therefore, $V_{in} = V_s - \beta V_o$.

The output is $V_o = A V_{in}$.
Substituting $V_{in}$: $V_o = A (V_s - \beta V_o)$
$V_o = A V_s - A \beta V_o$
$V_o (1 + A \beta) = A V_s$

Thus, the closed-loop voltage gain is:
$A_f = \frac{V_o}{V_s} = \frac{A}{1 + A\beta}$

**Important:** For practical negative feedback, $A\beta$ is a positive quantity. The feedback factor $\beta$ is often defined as the ratio of feedback voltage to output voltage, and it's the polarity of $V_f$ relative to $V_s$ that determines negative feedback.

**b) Input Impedance with Feedback ($Z_{in,f}$)**

The input impedance with feedback is the impedance seen at the input terminals of the amplifier (i.e., looking into the source $V_s$ and resistor $Rs$).

$Z_{in,f} = \frac{V_s}{I_{in}}$

Where $I_{in}$ is the current flowing from the source into the amplifier's input terminals.
We know $V_{in} = V_s - V_f$, so $V_s = V_{in} + V_f$.
And $V_{in} = I_{in} \cdot Z_{in}$, where $Z_{in}$ is the open-loop input impedance.

Substituting $V_f = \beta V_o$ and $V_o = A V_{in}$:
$V_s = V_{in} + \beta (A V_{in})$
$V_s = V_{in} (1 + A\beta)$

Now, substitute $V_{in} = I_{in} \cdot Z_{in}$:
$V_s = (I_{in} \cdot Z_{in}) (1 + A\beta)$

So, $Z_{in,f} = \frac{V_s}{I_{in}} = Z_{in} (1 + A\beta)$

**Key Point:** Voltage-series feedback **increases** the input impedance by a factor of $(1 + A\beta)$. This is beneficial as it reduces the loading effect of the amplifier on the source signal.

**c) Output Impedance with Feedback ($Z_{out,f}$)**

To find the output impedance with feedback, we set the independent source ($V_s$) to zero and look into the output terminals.
Setting $V_s = 0$ implies $V_{in} = -V_f$.
The output impedance is calculated as $Z_{out,f} = \frac{V_{out}}{I_{out}}$ with $V_s=0$.

If $V_s = 0$, then $V_{in} = -\beta V_o$.
The output current $I_{out}$ is related to $V_o$ by: $V_o = A V_{in} - I_{out} Z_{out}$, where $Z_{out}$ is the open-loop output impedance.

Substituting $V_{in} = -\beta V_o$:
$V_o = A (-\beta V_o) - I_{out} Z_{out}$
$V_o = -A \beta V_o - I_{out} Z_{out}$
$V_o (1 + A \beta) = -I_{out} Z_{out}$

We want to find $Z_{out,f} = \frac{V_{out}}{I_{out}}$ when $V_s=0$.
$Z_{out,f} = -\frac{Z_{out}}{(1 + A\beta)}$

The negative sign arises from the direction of $I_{out}$ and $V_o$ in the definition of impedance. The magnitude is what matters.

$Z_{out,f} = \frac{Z_{out}}{1 + A\beta}$

**Key Point:** Voltage-series feedback **decreases** the output impedance by a factor of $(1 + A\beta)$. This improves the amplifier's ability to drive a load.

**3.3. Determining $A$, $\beta$, $Z_{in}$, and $Z_{out}$ for a BJT Circuit**

Let's consider a BJT common-emitter amplifier with a feedback resistor $R_f$ connected from the emitter to ground. The output is taken from the collector.

**(Circuit Diagram)**

```
      Vs --- Rs ---+----B----Q1----C----+----RL----+----Vo
                   |       |      |      |
                   R1      E      |      Rc
                   |       |      |      |
                  R2      GND     |     GND
                   |              |
                  GND            Rf
                                 |
                                GND
```

**Open-Loop Analysis (without Rf):**
Assume $R_f$ is removed or grounded.
The amplifier is a common-emitter amplifier biased by $R_1$ and $R_2$.

*   **Open-Loop Voltage Gain ($A$):**
    For a common-emitter amplifier with emitter resistor $R_e$, the voltage gain is approximately $A_v \approx -\frac{R_c}{r_e'}$.
    If the emitter resistor $R_e$ is unbypassed, the gain is $A_v \approx -\frac{R_c}{R_e + r_e'}$.
    In our case, the feedback resistor $R_f$ is connected from the emitter to ground, so effectively, the unbypassed emitter resistance is $R_e = R_f$.
    Therefore, $A \approx -\frac{R_c}{R_f + r_e'}$. (Assuming output taken from collector and $R_L$ is much larger than $R_c$ or $R_c$ is the effective collector resistance).
    The output impedance is $Z_{out} \approx R_c$.

*   **Open-Loop Input Impedance ($Z_{in}$):**
    The input impedance of a common-emitter amplifier is primarily determined by the biasing resistors and the transistor's input impedance ($h_{ie}$ or $\beta r_e'$).
    $Z_{in} \approx R_1 || R_2 || h_{ie}$.

*   **Open-Loop Output Impedance ($Z_{out}$):**
    The output impedance of a common-emitter amplifier is approximately $Z_{out} \approx R_c$.

**Feedback Network Analysis (determining $\beta$):**

The feedback signal is taken from the emitter voltage ($V_e$) and fed back in series with the input voltage source ($V_s$).
$V_{in} = V_s - V_f$.
The feedback voltage $V_f$ is the voltage at the emitter, $V_e$.
$V_f = V_e$.

From the circuit, the output voltage is $V_o = V_c$.
In this configuration, the feedback is voltage-series. The feedback is sampled from the emitter voltage, which is directly related to the output voltage. However, the output is taken from the collector.
Let's reconsider the definition of $\beta$. $\beta = V_f / V_o$.
Here, $V_f = V_e$.

We need to relate $V_e$ to $V_o = V_c$.
$V_e = I_e (R_f || r_{e}')$ (if we consider the AC analysis of the emitter part).
$V_c = -I_c R_c$.
$I_e \approx I_c = \beta I_b$.
$V_e = (\beta + 1) I_b (R_f || r_e')$.

This approach gets complicated quickly. A more direct way is to analyze the feedback network's behavior. For voltage-series feedback, the feedback factor $\beta$ is the ratio of the feedback voltage to the output voltage when the input is disconnected.

**Using the "Open Circuit" Test for $\beta$ (Voltage Sampling):**
To find $\beta$, we open-circuit the input terminals of the amplifier and apply a test voltage $V_{ox}$ at the output. We then measure the feedback voltage $V_{fx}$ that would be generated. $\beta = V_{fx} / V_{ox}$.

In our BJT circuit with $R_f$ from emitter to ground, the feedback is sampled from the emitter.
Consider the output terminal (collector). If we apply a test voltage $V_{ox}$ to the collector and observe the voltage at the emitter ($V_{ex}$), that voltage $V_{ex}$ is the feedback voltage $V_f$.
$V_f = V_{ex}$.
So $\beta = V_{ex} / V_{ox}$.

From the circuit diagram:
$V_{ex}$ is the voltage across $R_f$.
$V_{ox}$ is applied to the collector.

This still appears complex. Let's refer to a standard analysis of this common configuration from a textbook.

**According to Sedra & Smith (6/e), Section 7.2.1 (The Common-Emitter Amplifier with Emitter Resistor):**
When an emitter resistor ($R_e$) is used in a CE amplifier, it provides voltage-series feedback. The feedback signal is the emitter voltage ($V_e$), which is proportional to the output voltage.

*   **Gain ($A$):** For a CE amplifier with an emitter resistor $R_e$, the voltage gain is $A_v = -\frac{R_c}{R_e + r_e'}$. If the emitter resistor is bypassed by a capacitor, $R_e$ is effectively zero for AC, and the gain is $A_v = -\frac{R_c}{r_e'}$.
    In our case, $R_f$ acts as the emitter resistor. So, $A = -\frac{R_c}{R_f + r_e'}$.

*   **Input Impedance ($Z_{in}$):** The input impedance seen by the source, including Rs, is $Z_{in,total} = R_s + Z_{in,amp}$, where $Z_{in,amp}$ is the impedance looking into the base. $Z_{in,amp} = R_1 || R_2 || h_{ie}$. The effective input impedance for gain calculation is $Z_{in} = R_1 || R_2 || h_{ie}$.

*   **Output Impedance ($Z_{out}$):** The output impedance is approximately $Z_{out} \approx R_c$.

*   **Feedback Factor ($\beta$):** For voltage-series feedback using an emitter resistor $R_e$, the feedback factor is $\beta = \frac{V_f}{V_o}$.
    The feedback voltage $V_f = V_e$.
    The output voltage $V_o = V_c$.
    We need to find the ratio $V_e / V_c$ with the input source $V_s$ set to zero.
    When $V_s=0$, $V_{in} = -V_f = -V_e$.
    So, $V_e = -V_{in}$.
    $V_c = A V_{in} = A (-V_e)$.
    $V_c = -A V_e$.
    Therefore, $\beta = \frac{V_e}{V_c} = \frac{V_e}{-A V_e} = -\frac{1}{A}$.

    Wait, this is not correct. $\beta$ is determined by the feedback network itself.
    Consider the feedback network alone: output of amplifier connected to input of feedback network, output of feedback network is $V_f$.
    For voltage-series feedback with emitter resistor $R_f$, the feedback path is from emitter to ground.
    The output voltage is taken from the collector.
    We want $\beta = V_f / V_o$. Here $V_f = V_e$.
    Let's analyze the relationship between $V_e$ and $V_c$ with $V_s=0$.
    If $V_s=0$, then $V_{in} = -V_f = -V_e$.
    The output voltage is $V_c$. If we apply $V_{ox}$ at the collector, and measure $V_{ex}$ at the emitter:
    $V_{ox}$ is applied to collector. $V_{ex}$ is voltage at emitter.
    $V_{ox} = V_c$. $V_{ex} = V_e$.
    The relationship for the amplifier is $V_c \approx A \cdot V_{in}$ and $V_e$ is also related.
    A common simplification for $\beta$ in voltage-series feedback with emitter resistor $R_e$ is that the feedback network is essentially a voltage divider. However, in this case, the feedback is taken from the emitter.

    Let's use the definition of $\beta$ from the overall gain formula $A_f = \frac{A}{1+A\beta}$.
    $A_f = \frac{V_o}{V_s} = \frac{A}{1+A\beta}$.
    $V_s = V_{in} + V_f$.
    $V_{in} = V_s - V_f$.
    $V_o = A V_{in}$.
    $V_f$ is proportional to $V_o$. For voltage-series, $V_f = \beta V_o$.
    $A_f = \frac{V_o}{V_s}$.
    $V_s = V_o/A + \beta V_o = V_o (1/A + \beta)$.
    $A_f = \frac{V_o}{V_s} = \frac{1}{1/A + \beta} = \frac{A}{1 + A\beta}$.

    For the CE amplifier with an emitter resistor $R_e$, the feedback is obtained by tapping the emitter voltage.
    The feedback factor $\beta$ for a CE amplifier with emitter resistor $R_e$ (and output taken from collector) is $\beta = \frac{V_e}{V_c}$.
    When $V_s=0$, $V_{in} = -V_f = -V_e$.
    $V_c = A V_{in} = A (-V_e)$.
    So, $V_e = -\frac{V_c}{A}$.
    The feedback factor is the ratio of feedback voltage to output voltage. $V_f = V_e$.
    $\beta = \frac{V_e}{V_c}$.
    This means $\beta = \frac{-V_c/A}{V_c} = -1/A$. This seems problematic.

    **Correction:** The feedback factor $\beta$ is defined by the feedback network itself. For a voltage-series feedback configuration where the emitter resistor ($R_f$ in our case) is the feedback element, and the output is taken from the collector, the feedback factor is given by $\beta = \frac{V_f}{V_o}$, where $V_f = V_e$.
    We need to relate $V_e$ to $V_c$ by looking at the feedback path when the amplifier is operating.

    From the circuit, the emitter voltage is $V_e = I_e (R_f)$. Since $I_e \approx I_c$, $V_e \approx I_c R_f$.
    The output voltage is $V_c$.
    The current $I_c$ flows through $R_c$ to produce $V_c$.
    Let's consider the amplifier as a block. Input $V_{in}$ at base, output $V_c$ at collector.
    $V_o = V_c = -I_c R_c$.
    $V_e = I_e R_f$.
    The relationship between $V_c$ and $V_e$ through the transistor:
    $V_{ce} = V_c - V_e$.
    $V_{ce} = I_c R_c - V_e$. This is not helpful.

    **Textbook approach for $\beta$ in voltage-series CE amplifier:**
    The feedback voltage is $V_f = V_e$. The feedback network is essentially the emitter resistor $R_f$ connected from emitter to ground.
    The output voltage is $V_o = V_c$.
    We need to find the ratio $V_e / V_c$.
    Consider the circuit without the transistor's active amplification, just the AC paths.
    The feedback signal $V_f = V_e$.
    The output voltage is $V_c$.
    The relationship between $V_e$ and $V_c$ is established through the circuit components.

    If we assume a simplified model where $V_o = V_c$, and $V_f = V_e$.
    The circuit equation for the output path is $V_c = -I_c R_c$.
    And $I_c = \alpha I_e \approx I_e$. So $V_c \approx -I_e R_c$.
    The feedback voltage is $V_e = I_e R_f$.
    Thus, $\beta = \frac{V_e}{V_c} = \frac{I_e R_f}{-I_e R_c} = -\frac{R_f}{R_c}$.

    **Important Consideration:** This $\beta = -R_f/R_c$ is derived by assuming the feedback network is solely the emitter resistor and the output is directly related to the collector current through $R_c$. However, $R_c$ is part of the amplifier's forward gain path, not just the feedback network.

    A more general way to find $\beta$ for voltage-series feedback with an emitter resistor $R_f$ is to consider the ratio of the emitter resistor to the total effective resistance in the emitter path.
    Let's consider the input loop: $V_s = V_{in} + V_f$.
    The voltage at the emitter is $V_e = V_f$.
    The voltage across $r_e'$ is $V_{be} = V_{in}$.
    The voltage at the collector is $V_c = V_o$.
    $V_e = I_e R_f$.
    $V_c = -I_c R_c$.
    Since $I_e \approx I_c$:
    $V_e \approx I_c R_f$.
    $V_c \approx -I_c R_c$.
    $\beta = \frac{V_e}{V_c} = \frac{I_c R_f}{-I_c R_c} = -\frac{R_f}{R_c}$.

    **This assumes that $R_f$ is solely responsible for feedback and $R_c$ determines the output voltage. This is a common approximation for the $\beta$ of a voltage-series feedback configuration with an unbypassed emitter resistor.**

    Therefore, for this circuit:
    *   $A \approx -\frac{R_c}{R_f + r_e'}$
    *   $\beta \approx -\frac{R_f}{R_c}$ (Note: the negative sign for $\beta$ is crucial for negative feedback).
    *   $Z_{in} \approx R_1 || R_2 || h_{ie}$
    *   $Z_{out} \approx R_c$

    **3.4. Effect of Voltage-Series Feedback on Amplifier Parameters**

    Using the formulas derived:
    *   **Closed-loop Voltage Gain ($A_f$):**
        $A_f = \frac{A}{1 + A\beta} = \frac{-\frac{R_c}{R_f + r_e'}}{1 + (-\frac{R_c}{R_f + r_e'})(-\frac{R_f}{R_c})} = \frac{-\frac{R_c}{R_f + r_e'}}{1 + \frac{R_f}{R_f + r_e'}} = \frac{-\frac{R_c}{R_f + r_e'}}{\frac{R_f + r_e' + R_f}{R_f + r_e'}} = -\frac{R_c}{2R_f + r_e'}$

        **Important Observation:** The gain is now approximately $-\frac{R_c}{R_f}$ if $r_e'$ is small compared to $R_f$. The gain is stabilized by $R_f$. The denominator term $(1+A\beta)$ is called the **desensitivity factor** or **feedback factor**.

    *   **Closed-loop Input Impedance ($Z_{in,f}$):**
        $Z_{in,f} = Z_{in} (1 + A\beta) = (R_1 || R_2 || h_{ie}) (1 + (-\frac{R_c}{R_f + r_e'})(-\frac{R_f}{R_c})) = (R_1 || R_2 || h_{ie}) (1 + \frac{R_f}{R_f + r_e'})$
        $Z_{in,f} = (R_1 || R_2 || h_{ie}) \left(\frac{R_f + r_e' + R_f}{R_f + r_e'}\right) = (R_1 || R_2 || h_{ie}) \left(\frac{2R_f + r_e'}{R_f + r_e'}\right)$
        **Observation:** $Z_{in,f} > Z_{in}$. The input impedance is increased.

    *   **Closed-loop Output Impedance ($Z_{out,f}$):**
        $Z_{out,f} = \frac{Z_{out}}{1 + A\beta} = \frac{R_c}{1 + (-\frac{R_c}{R_f + r_e'})(-\frac{R_f}{R_c})} = \frac{R_c}{1 + \frac{R_f}{R_f + r_e'}} = \frac{R_c}{\frac{R_f + r_e' + R_f}{R_f + r_e'}} = \frac{R_c (R_f + r_e')}{2R_f + r_e'}$
        **Observation:** $Z_{out,f} < Z_{out}$. The output impedance is decreased.

    **Impact of Bypassing $R_f$:** If $R_f$ were bypassed with a capacitor ($C_f$), then for AC signals, $R_f$ would be shorted, and the feedback would be removed. The amplifier would revert to its open-loop configuration for AC signals.

**4. Practical Considerations and Design Examples**

**Example:**
Consider a common-emitter amplifier with the following parameters:
$V_{CC} = 12$ V, $R_1 = 47$ k$\Omega$, $R_2 = 10$ k$\Omega$, $R_c = 3.3$ k$\Omega$, $R_f = 1$ k$\Omega$.
Assume $\beta_{DC} = 100$ and $r_e' = 25$ mV / $I_E$.

**Step 1: Bias Analysis (DC Analysis) to find $I_E$ and $r_e'$.**
Voltage divider bias:
$V_B = V_{CC} \frac{R_2}{R_1 + R_2} = 12V \frac{10k}{47k+10k} = 12V \frac{10}{57} \approx 2.105$ V.
Assume $V_{BE} \approx 0.7$ V.
$V_E = V_B - V_{BE} = 2.105V - 0.7V = 1.405$ V.
$I_E = \frac{V_E}{R_f} = \frac{1.405V}{1k\Omega} = 1.405$ mA.
$I_C \approx I_E = 1.405$ mA.
$r_e' = \frac{25mV}{I_E} = \frac{0.025V}{1.405mA} \approx 17.8 \Omega$.

**Step 2: Calculate Open-Loop Parameters.**
*   $A$: $A \approx -\frac{R_c}{R_f + r_e'} = -\frac{3.3k\Omega}{1k\Omega + 17.8\Omega} \approx -\frac{3.3k\Omega}{1017.8\Omega} \approx -3.24$.
    (Note: This gain is quite low. A common-emitter amplifier typically has a higher gain. This suggests that for significant voltage gain, the emitter resistor $R_f$ might be bypassed by a capacitor in parallel, or a different feedback topology might be used for voltage gain control).

    Let's assume the intention was a standard CE amplifier with $R_e$ being the feedback resistor, and the gain formula is applicable. If $R_f$ is the *only* emitter resistance, the gain will be limited. For higher gain control, the emitter resistor is often placed in parallel with a bypass capacitor, and a *separate* series emitter resistor provides feedback. However, based on the direct problem statement, $R_f$ *is* the emitter resistor.

    If we want the gain formula $A = -R_c/r_e'$ (assuming a bypassed emitter resistor), then the feedback would be applied differently, e.g., voltage sampling from collector and feeding back to emitter via $R_f$.

    Let's stick to the current interpretation: $R_f$ is the unbypassed emitter resistor providing feedback.
    $A \approx -3.24$.
*   $\beta$: $\beta \approx -\frac{R_f}{R_c} = -\frac{1k\Omega}{3.3k\Omega} \approx -0.303$.
*   $Z_{in,amp} = R_1 || R_2 || h_{ie}$.
    $h_{ie} = \beta_{DC} r_e' = 100 \times 17.8 \Omega = 1780 \Omega$.
    $Z_{in,amp} = 47k || 10k || 1.78k = 10k || 1.78k \approx 1.51$ k$\Omega$.

*   $Z_{out} \approx R_c = 3.3$ k$\Omega$.

**Step 3: Calculate Closed-Loop Parameters.**
*   Feedback factor $1 + A\beta = 1 + (-3.24)(-0.303) \approx 1 + 0.981 \approx 1.981$.

*   **Closed-loop Voltage Gain ($A_f$):**
    $A_f = \frac{A}{1 + A\beta} = \frac{-3.24}{1.981} \approx -1.64$.
    Alternatively, using the derived formula: $A_f \approx -\frac{R_c}{2R_f + r_e'} = -\frac{3.3k\Omega}{2(1k\Omega) + 17.8\Omega} = -\frac{3.3k\Omega}{2017.8\Omega} \approx -1.635$.
    The gain has been reduced from -3.24 to -1.64.

*   **Closed-loop Input Impedance ($Z_{in,f}$):**
    $Z_{in,f} = Z_{in,amp} (1 + A\beta) = 1.51k\Omega \times 1.981 \approx 2.99$ k$\Omega$.
    The input impedance has increased.

*   **Closed-loop Output Impedance ($Z_{out,f}$):**
    $Z_{out,f} = \frac{Z_{out}}{1 + A\beta} = \frac{3.3k\Omega}{1.981} \approx 1.67$ k$\Omega$.
    The output impedance has decreased.

**Interpretation:** The voltage-series feedback has reduced the gain and improved the input/output impedance characteristics.

**Note on Higher Gain Control:** To achieve higher voltage gain with voltage-series feedback and stable characteristics, a common approach is to use a common-emitter amplifier with its emitter resistor bypassed by a capacitor for AC signals, thus providing high open-loop gain. Then, a separate, smaller emitter resistor ($R_{se}$) is used, and this $R_{se}$ is the feedback element. In this case, the feedback factor is $\beta \approx 1/A_{midband}$, where $A_{midband}$ is the gain of the bypassed amplifier stage, and the feedback is still voltage-series. The gain would be $A_f \approx 1/\beta$.

**5. Summary of Voltage-Series Feedback Effects:**

| Parameter          | Effect of Negative Voltage-Series Feedback | Magnitude of Change        |
| :----------------- | :----------------------------------------- | :------------------------- |
| Voltage Gain       | Decreases                                  | By a factor of $(1+A\beta)$ |
| Input Impedance    | Increases                                  | By a factor of $(1+A\beta)$ |
| Output Impedance   | Decreases                                  | By a factor of $(1+A\beta)$ |
| Bandwidth          | Increases                                  | By a factor of $(1+A\beta)$ |
| Distortion/Noise   | Decreases                                  | By a factor of $(1+A\beta)$ |

**6. Important Points to Remember:**

*   Voltage-series feedback samples the output voltage and mixes it in series with the input voltage.
*   Its primary purpose is to control and stabilize the output voltage.
*   It leads to an **increase** in input impedance and a **decrease** in output impedance.
*   The gain reduction is a trade-off for improved stability and other performance characteristics.
*   The feedback factor $\beta$ is crucial for calculating the performance of feedback amplifiers.
*   The analysis involves understanding the open-loop amplifier's characteristics ($A$, $Z_{in}$, $Z_{out}$) and the feedback network's behavior ($\beta$).
*   The factor $(1 + A\beta)$ quantifies the improvement in performance due to feedback.

**7. Practice Questions:**

1.  Explain the four basic feedback topologies and their effects on amplifier parameters. Which topology is discussed in detail in this module?
2.  Draw a circuit diagram of a BJT common-emitter amplifier employing voltage-series feedback using an emitter resistor.
3.  Derive the expression for the closed-loop voltage gain ($A_f$) of a voltage-series feedback amplifier.
4.  How does voltage-series feedback affect the input impedance and output impedance of an amplifier? Derive the expressions for $Z_{in,f}$ and $Z_{out,f}$.
5.  For the BJT common-emitter amplifier with an unbypassed emitter resistor $R_f$, derive the feedback factor $\beta$.
6.  A voltage-series feedback amplifier has an open-loop gain $A = -100$, an open-loop input impedance $Z_{in} = 2$ k$\Omega$, and an open-loop output impedance $Z_{out} = 5$ k$\Omega$. The feedback factor is $\beta = -0.05$. Calculate the closed-loop voltage gain, input impedance, and output impedance.
7.  Discuss the advantages and disadvantages of negative feedback in amplifier circuits.
8.  In the context of voltage-series feedback with an emitter resistor, what happens to the amplifier's performance if the emitter resistor is bypassed with a capacitor?

**Answers to Practice Questions:**

1.  (Refer to Section 2 of these notes for topologies and their effects). The topology discussed is Voltage-Series feedback.
2.  (Refer to Section 3.1 or Section 4 of these notes for the circuit diagram).
3.  $A_f = \frac{A}{1 + A\beta}$ (Derivation in Section 3.2.a).
4.  $Z_{in,f} = Z_{in} (1 + A\beta)$ (Increases); $Z_{out,f} = \frac{Z_{out}}{1 + A\beta}$ (Decreases) (Derivation in Section 3.2.b and 3.2.c).
5.  For a CE amplifier with unbypassed emitter resistor $R_f$ and output at collector, $\beta \approx -\frac{R_f}{R_c}$ (Explanation in Section 3.3).
6.  Given: $A = -100$, $Z_{in} = 2$ k$\Omega$, $Z_{out} = 5$ k$\Omega$, $\beta = -0.05$.
    Feedback factor (desensitivity factor) $= 1 + A\beta = 1 + (-100)(-0.05) = 1 + 5 = 6$.
    *   $A_f = \frac{A}{1 + A\beta} = \frac{-100}{6} \approx -16.67$.
    *   $Z_{in,f} = Z_{in} (1 + A\beta) = 2k\Omega \times 6 = 12$ k$\Omega$.
    *   $Z_{out,f} = \frac{Z_{out}}{1 + A\beta} = \frac{5k\Omega}{6} \approx 833.3 \Omega$.
7.  **Advantages:** Gain stabilization, reduction in distortion and noise, increased bandwidth, improved input/output impedance. **Disadvantages:** Reduction in gain.
8.  If the emitter resistor $R_f$ is bypassed by a capacitor, it acts as an open circuit for AC signals. This effectively removes the feedback path for AC. The amplifier will revert to its open-loop configuration for AC signals, resulting in a higher AC voltage gain (closer to $-R_c/r_e'$), higher output impedance, and lower input impedance compared to the feedback case.

**References:**

*   Electronic Devices and Circuit Theory by Robert Boylested and L. Nashelsky (Pearson, 11/e,2017.) - Covers basic amplifier analysis and feedback principles.
*   Microelectronic circuits by Sedra A S. and K. C. Smith (Oxford University Press, 6/e,2013) - Provides detailed analysis of amplifier circuits, including feedback topologies, and uses the hybrid-$\pi$ model extensively. Section 7.2.1 is particularly relevant for CE amplifier with emitter resistor.
*   Electronic Devices and Circuits by David A Bell (Oxford University Press, 5/e,2008) - Offers comprehensive coverage of transistor amplifiers and feedback circuits.
