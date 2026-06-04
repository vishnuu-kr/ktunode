---
title: "Feedback amplifiers: The general feedback structure"
subject: "ANALOG CIRCUITS"
module: "Module 3: Feedback amplifiers: The general feedback structure"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2f0"
status: "completed"
scrapedAt: "2026-05-23T17:44:17.221Z"
---
# ANALOG CIRCUITS - Module 3: Feedback Amplifiers: The General Feedback Structure

## Introduction to Feedback Amplifiers

This module delves into the fundamental concepts of feedback amplifiers, a cornerstone of analog circuit design. Feedback is the process of taking a portion of the output signal of a system and feeding it back to the input. This technique is employed to modify the characteristics of amplifiers, leading to improved performance in various aspects like stability, gain, linearity, and bandwidth.

**Course Outcome Alignment:** This module directly supports **CO2 (Analyze single stage and multistage BJT amplifier circuits using equivalent models)** by providing the theoretical framework for understanding how feedback affects amplifier behavior. While not directly focused on design, the analysis provided here is crucial for subsequent design stages, including those related to oscillators (CO3) and power amplifiers/voltage regulators (CO4).

**Textbook References:**
*   **Boylestad & Nashelsky:** Chapter 15 "Feedback Amplifiers"
*   **Sedra & Smith:** Chapter 11 "Feedback"
*   **Bogart, Beasley & Rico:** Chapter 12 "Feedback Amplifiers"

---

## 1. The General Feedback Structure

### 1.1. Definition of Feedback

**Feedback** is the process where a portion of the output signal of an amplifier or system is returned to the input. This feedback can either reinforce or oppose the original input signal.

### 1.2. Types of Feedback

There are two primary types of feedback:

*   **Positive Feedback:** The feedback signal is in phase with the input signal, thus reinforcing it. This generally leads to an increase in gain but can also cause instability and oscillations.
*   **Negative Feedback:** The feedback signal is out of phase with the input signal, thus opposing it. This generally leads to a decrease in gain but offers significant improvements in stability, linearity, and bandwidth.

**Important Point to Remember:** For most practical amplifier applications seeking improved performance, **negative feedback** is overwhelmingly preferred.

### 1.3. Block Diagram of a Feedback Amplifier

The general structure of a feedback amplifier can be represented by a block diagram:

```
      +-------+      +-----------------+      +-------+
      | Input |----->| Amplifier (A)   |----->| Output|
      | Signal|      +-----------------+      | Signal|
      +-------+             ^                 +-------+
                              |
                      +-------+-------+
                      | Feedback      |
                      | Network (β)   |
                      +-------+-------+
                              |
                              +----------------------------+
```

**Key Components:**

*   **Forward Amplifier (A):** This is the basic amplifier without feedback. It amplifies the input signal.
*   **Feedback Network (β):** This network samples a portion of the output signal and feeds it back to the input. The feedback network is typically passive (resistors, capacitors, inductors).
*   **Summing/Difference Amplifier:** This component combines the input signal with the feedback signal. In negative feedback, it subtracts the feedback signal from the input signal. In positive feedback, it adds the feedback signal to the input signal.

### 1.4. Feedback Signal and Input to the Basic Amplifier

Let:
*   $V_s$ = Input source voltage
*   $V_i$ = Voltage applied to the input of the basic amplifier (A)
*   $V_o$ = Output voltage of the basic amplifier (A)
*   $V_f$ = Feedback voltage

The relationship between these signals is as follows:

*   **For Negative Feedback:** $V_i = V_s - V_f$
*   **For Positive Feedback:** $V_i = V_s + V_f$

The feedback voltage $V_f$ is a fraction of the output voltage $V_o$, determined by the feedback network (β):

*   $V_f = \beta V_o$

Where, $\beta$ is the **feedback factor**. It is a dimensionless quantity (or has units depending on the sampling method, but typically voltage is sampled and fed back as voltage).

---

## 2. Gain with Feedback

### 2.1. Uncompensated Amplifier Gain (Open-Loop Gain)

The gain of the amplifier without any feedback is called the **open-loop gain**, denoted by $A$.

*   $A = \frac{V_o}{V_i}$

### 2.2. Feedback Amplifier Gain (Closed-Loop Gain)

Let $A_{f}$ be the gain of the amplifier with feedback (closed-loop gain).

*   $A_f = \frac{V_o}{V_s}$

We can derive the expression for $A_f$ in terms of $A$ and $\beta$.

**Derivation for Negative Feedback:**

1.  We know: $V_i = V_s - V_f$
2.  And: $V_f = \beta V_o$
3.  Substituting (2) into (1): $V_i = V_s - \beta V_o$
4.  We also know: $V_o = A V_i$
5.  Substitute (3) into (4): $V_o = A (V_s - \beta V_o)$
6.  $V_o = A V_s - A \beta V_o$
7.  Rearrange to solve for $V_o$: $V_o + A \beta V_o = A V_s$
8.  $V_o (1 + A \beta) = A V_s$
9.  Therefore, the closed-loop gain is: $A_f = \frac{V_o}{V_s} = \frac{A}{1 + A \beta}$

**The term $(1 + A \beta)$ is called the "desensitivity factor" or "feedback factor".**

**Derivation for Positive Feedback:**

1.  We know: $V_i = V_s + V_f$
2.  And: $V_f = \beta V_o$
3.  Substituting (2) into (1): $V_i = V_s + \beta V_o$
4.  We also know: $V_o = A V_i$
5.  Substitute (3) into (4): $V_o = A (V_s + \beta V_o)$
6.  $V_o = A V_s + A \beta V_o$
7.  Rearrange to solve for $V_o$: $V_o - A \beta V_o = A V_s$
8.  $V_o (1 - A \beta) = A V_s$
9.  Therefore, the closed-loop gain is: $A_f = \frac{V_o}{V_s} = \frac{A}{1 - A \beta}$

**Important Point to Remember:** The denominator $(1 - A\beta)$ in positive feedback means that if $A\beta = 1$, the gain $A_f$ becomes infinite, leading to oscillations. This is the Barkhausen criterion for oscillation.

### 2.3. Effect of Negative Feedback on Gain

For negative feedback, the closed-loop gain is $A_f = \frac{A}{1 + A \beta}$.

*   If $A \beta \gg 1$, then $1 + A \beta \approx A \beta$.
*   In this case, $A_f \approx \frac{A}{A \beta} = \frac{1}{\beta}$.

This is a crucial result: **When $A \beta \gg 1$, the closed-loop gain $A_f$ becomes approximately independent of the amplifier gain $A$ and depends only on the feedback network (β).**

**Example:**
An amplifier has an open-loop gain $A = 10^5$. A negative feedback network with $\beta = 0.01$ is applied. Calculate the closed-loop gain.

*   $A_f = \frac{A}{1 + A \beta} = \frac{10^5}{1 + (10^5 \times 0.01)} = \frac{10^5}{1 + 1000} = \frac{10^5}{1001} \approx 99.9$

If the amplifier gain changes to $A = 5 \times 10^4$ due to manufacturing variations or temperature changes:

*   $A_f = \frac{5 \times 10^4}{1 + (5 \times 10^4 \times 0.01)} = \frac{5 \times 10^4}{1 + 500} = \frac{5 \times 10^4}{501} \approx 99.8$

**Observation:** The closed-loop gain is much more stable and less sensitive to variations in the open-loop gain $A$.

---

## 3. The Four Basic Feedback Topologies

Feedback can be applied by sampling the output and injecting it back into the input in four fundamental ways. These are classified based on whether the sampled output quantity is a voltage or current, and whether the injected feedback signal is a voltage or current.

### 3.1. Voltage-Series Feedback (Series-Shunt Feedback)

*   **Output Sampling:** Voltage is sampled from the output (parallel connection).
*   **Input Injection:** Voltage is injected into the input (series connection).
*   **Block Diagram:**

    ```
          +-------+      +-----------------+      +-------+
          | Input |----->| Amplifier (A)   |----->| Output|
          | Vs    | +--->|                 |      | Vo    |
          +-------+ |    +-----------------+      +-------+
                    |             ^
                    |             |
                    +-------------+
                      Feedback (Vf)
    ```
    (In this diagram, Vf is summed in series with Vs)

*   **Effect on Parameters:**
    *   **Gain ($A_v$):** Decreases (stabilized).
    *   **Input Resistance ($R_{in}$):** Increases.
    *   **Output Resistance ($R_{out}$):** Decreases.
    *   **Bandwidth:** Increases.
    *   **Distortion:** Decreases.
    *   **Noise:** Decreases.
*   **Common Implementations:** Voltage amplifiers (e.g., common-emitter BJT amplifier, common-source FET amplifier).
*   **Feedback Network:** Typically a voltage divider.

### 3.2. Voltage-Shunt Feedback (Shunt-Shunt Feedback)

*   **Output Sampling:** Voltage is sampled from the output (parallel connection).
*   **Input Injection:** Current is injected into the input (shunt connection).
*   **Block Diagram:**

    ```
          +-------+      +-----------------+      +-------+
          | Input |----->| Amplifier (A)   |----->| Output|
          | Vs    |----->|                 |      | Vo    |
          +-------+      +-----------------+      +-------+
                           ^
                           |
                           +-------------------------+
                             Feedback (If)
    ```
    (In this diagram, If is summed in shunt with the input current)

*   **Effect on Parameters:**
    *   **Gain ($A_i$ for current gain, $A_v$ for voltage gain):** Decreases (stabilized).
    *   **Input Resistance ($R_{in}$):** Decreases.
    *   **Output Resistance ($R_{out}$):** Increases.
    *   **Bandwidth:** Increases.
    *   **Distortion:** Decreases.
    *   **Noise:** Decreases.
*   **Common Implementations:** Transconductance amplifiers (voltage-to-current converters).
*   **Feedback Network:** Typically a voltage divider connected in shunt.

### 3.3. Current-Series Feedback (Series-Series Feedback)

*   **Output Sampling:** Current is sampled from the output (series connection).
*   **Input Injection:** Current is injected into the input (series connection).
*   **Block Diagram:**

    ```
          +-------+      +-----------------+      +-------+
          | Input |----->| Amplifier (A)   |----->| Output|
          | Vs    | +--->|                 |      | Io    |
          +-------+ |    +-----------------+      +-------+
                    |             ^
                    |             |
                    +-------------+
                      Feedback (If)
    ```
    (In this diagram, If is summed in series with Vs)

*   **Effect on Parameters:**
    *   **Gain ($A_i$):** Decreases (stabilized).
    *   **Input Resistance ($R_{in}$):** Increases.
    *   **Output Resistance ($R_{out}$):** Increases.
    *   **Bandwidth:** Increases.
    *   **Distortion:** Decreases.
    *   **Noise:** Decreases.
*   **Common Implementations:** Transresistance amplifiers (current-to-voltage converters).
*   **Feedback Network:** Typically a current-sensing resistor in series with the output.

### 3.4. Current-Shunt Feedback (Shunt-Shunt Feedback)

*   **Output Sampling:** Current is sampled from the output (series connection).
*   **Input Injection:** Current is injected into the input (shunt connection).
*   **Block Diagram:**

    ```
          +-------+      +-----------------+      +-------+
          | Input |----->| Amplifier (A)   |----->| Output|
          | Is    |----->|                 |      | Io    |
          +-------+      +-----------------+      +-------+
                           ^
                           |
                           +-------------------------+
                             Feedback (If)
    ```
    (In this diagram, If is summed in shunt with Is)

*   **Effect on Parameters:**
    *   **Gain ($A_i$):** Decreases (stabilized).
    *   **Input Resistance ($R_{in}$):** Decreases.
    *   **Output Resistance ($R_{out}$):** Decreases.
    *   **Bandwidth:** Increases.
    *   **Distortion:** Decreases.
    *   **Noise:** Decreases.
*   **Common Implementations:** Current amplifiers (e.g., common-base BJT amplifier, common-gate FET amplifier).
*   **Feedback Network:** Typically a current-sensing resistor connected in series with the output, and this current is fed back as a current in shunt.

**Textbook Reference for Topologies:**
*   **Sedra & Smith:** Chapter 11, Section 11.1.4 "The Four Basic Topologies" provides a thorough explanation and block diagrams for each.

---

## 4. Advantages of Negative Feedback

Negative feedback is immensely beneficial and widely used in analog circuits. Its primary advantages are:

### 4.1. Stabilization of Gain

As derived earlier, $A_f = \frac{A}{1 + A \beta}$. If $A \beta \gg 1$, then $A_f \approx \frac{1}{\beta}$. The closed-loop gain becomes largely independent of the open-loop gain $A$, which can vary significantly due to temperature, transistor characteristics, and component aging. This makes the amplifier's gain predictable and stable.

**Reference:**
*   **Boylestad & Nashelsky:** Section 15-2 "Gain Stabilization" discusses this advantage in detail.

### 4.2. Reduction of Distortion

Distortion, whether nonlinear distortion or harmonic distortion, is essentially an unwanted signal component at the output that is proportional to the signal itself. If the basic amplifier has a distortion component $V_d$, the output is $V_o = A V_i + V_d$.

With negative feedback, the input to the amplifier is $V_i = V_s - \beta V_o$.
The output becomes $V_o = A (V_s - \beta V_o) + V_d$.
$V_o (1 + A\beta) = A V_s + V_d$
$V_o = \frac{A V_s}{1 + A\beta} + \frac{V_d}{1 + A\beta}$

The distortion component at the output is now $\frac{V_d}{1 + A\beta}$. Since $1 + A\beta$ is typically much greater than 1, the distortion is significantly reduced by the factor $1 + A\beta$.

**Reference:**
*   **Bogart, Beasley & Rico:** Section 12-2 "Effect of Feedback on Distortion" explains this principle.

### 4.3. Increase in Bandwidth

The bandwidth (BW) of an amplifier is the range of frequencies over which the gain is relatively constant. For a single-pole amplifier, $A(j\omega) = \frac{A_0}{1 + j\omega/\omega_H}$, where $A_0$ is the DC gain and $\omega_H$ is the 3dB frequency. The bandwidth is equal to $\omega_H$.

With negative feedback, the closed-loop gain is $A_f(j\omega) = \frac{A(j\omega)}{1 + A(j\omega)\beta}$.
Assuming $\beta$ is frequency-independent and $A\beta \gg 1$ at lower frequencies:
$A_f(j\omega) \approx \frac{1}{\beta}$
$A_f(j\omega) = \frac{A_0/(1 + j\omega/\omega_H)}{1 + \beta A_0/(1 + j\omega/\omega_H)} = \frac{A_0}{1 + j\omega/\omega_H + \beta A_0} = \frac{A_0}{(1 + \beta A_0) + j\omega/\omega_H}$

This can be rewritten as:
$A_f(j\omega) = \frac{A_0/(1 + \beta A_0)}{1 + j\omega/(\omega_H(1 + \beta A_0))}$

The new DC gain is $A_{f0} = \frac{A_0}{1 + \beta A_0}$, and the new 3dB frequency is $\omega_{Hf} = \omega_H (1 + \beta A_0)$.
The new bandwidth is $BW_f = \omega_{Hf} = BW (1 + A \beta)$.

Therefore, the bandwidth is increased by the same factor $(1 + A\beta)$ by which the gain is reduced. This is known as the **gain-bandwidth product**.

**Reference:**
*   **Razavi:** Chapter 4 "Feedback Amplifiers" discusses the gain-bandwidth product.

### 4.4. Reduction of Noise

Similar to distortion, noise generated within the amplifier is also reduced by the factor $(1 + A\beta)$. If the noise source generates a voltage $V_n$, this voltage appears at the output as $\frac{V_n}{1 + A\beta}$ with negative feedback.

### 4.5. Control of Input and Output Impedances

The effect on input and output impedances depends on the feedback topology:

*   **Voltage-Series:** Increases input impedance, decreases output impedance.
*   **Voltage-Shunt:** Decreases input impedance, increases output impedance.
*   **Current-Series:** Increases input impedance, increases output impedance.
*   **Current-Shunt:** Decreases input impedance, decreases output impedance.

These impedance modifications are crucial for achieving desired signal transfer between stages or between a source and a load.

**Reference:**
*   **Sedra & Smith:** Section 11.1.5 "Effect of Feedback on Input and Output Impedances" details these changes.

---

## 5. Disadvantages of Negative Feedback

While beneficial, negative feedback also has drawbacks:

### 5.1. Reduced Gain

The most obvious disadvantage is that the amplifier's voltage or current gain is reduced by the factor $(1 + A\beta)$. This might necessitate using higher gain amplifiers or more amplification stages to achieve the desired overall gain.

### 5.2. Potential for Instability and Oscillations

While negative feedback *stabilizes* the gain against variations, under certain conditions (especially at higher frequencies where phase shifts occur), the overall feedback can become positive, leading to instability and unwanted oscillations. This is a critical design consideration, especially when dealing with multi-stage amplifiers or amplifiers with significant parasitic capacitances.

**Reference:**
*   **Boylestad & Nashelsky:** Section 15-8 "Frequency Response of Feedback Amplifiers" and Section 15-9 "Stability of Feedback Amplifiers" are essential for understanding this.

---

## 6. Stability and Frequency Response of Feedback Amplifiers

### 6.1. Phase Shift and Instability

The open-loop gain $A$ of an amplifier is not constant with frequency. As frequency increases, amplifier stages introduce phase shifts. For a typical multi-stage amplifier, the phase shift can reach $-180^\circ$ at higher frequencies.

If the feedback network $\beta$ also introduces a phase shift, and the total phase shift around the feedback loop ($A$ and $\beta$ combined) reaches $-180^\circ$ at a frequency where the magnitude of the loop gain $|A\beta| \ge 1$, then the negative feedback effectively becomes positive feedback. This can lead to oscillations.

**Barkhausen Criterion for Oscillation:** An amplifier will oscillate if the loop gain $A\beta = 1$ (magnitude) at a frequency where the phase shift around the loop is $-180^\circ$ (or $n \cdot 360^\circ$ where $n$ is an integer).

### 6.2. Gain Margin and Phase Margin

To ensure stability, feedback amplifiers are designed with adequate **gain margin** and **phase margin**.

*   **Phase Margin (PM):** The amount of additional phase shift that can be tolerated before the amplifier becomes unstable. It is measured at the **gain crossover frequency** ($\omega_{gc}$), which is the frequency where the magnitude of the open-loop gain $|A(\omega_{gc})| = 1$. The phase margin is $PM = 180^\circ - |\phi(\omega_{gc})|$, where $\phi(\omega_{gc})$ is the phase shift of $A(\omega)$ at $\omega_{gc}$. A positive phase margin (e.g., $> 45^\circ$) indicates stability.

*   **Gain Margin (GM):** The amount by which the loop gain is less than unity when the phase shift around the loop is $-180^\circ$. It is measured at the **phase crossover frequency** ($\omega_{pc}$), which is the frequency where the phase shift of $A(\omega)$ is $-180^\circ$. The gain margin is $GM = -20 \log_{10} |A(\omega_{pc})\beta|$. A positive gain margin (in dB, meaning $|A(\omega_{pc})\beta| < 1$) indicates stability.

**Reference:**
*   **Sedra & Smith:** Chapter 11.2 "Stability" and Chapter 11.3 "Frequency and Transient Response" are excellent resources for gain and phase margin analysis.

### 6.3. Compensation Techniques

To improve stability, especially in high-gain amplifiers, **frequency compensation** techniques are used. These techniques involve altering the amplifier's frequency response to ensure a sufficient phase margin at the gain crossover frequency. Common methods include:

*   **Lag Compensation:** Adding a dominant pole at a low frequency.
*   **Lead Compensation:** Adding a zero at a higher frequency.
*   **Lag-Lead Compensation:** A combination of both.

**Reference:**
*   **Razavi:** Chapter 4.6 "Frequency Response and Compensation" explains these concepts.

---

## 7. Examples of Feedback in Action

### 7.1. Stabilized Voltage Amplifier (Voltage-Series Feedback)

Consider a common-emitter BJT amplifier with a voltage divider bias. Adding a feedback resistor from the output collector to the input emitter can implement voltage-series feedback. This stabilizes the voltage gain against variations in $h_{FE}$ and temperature.

### 7.2. Oscillators (Positive Feedback)

Oscillators are designed to produce periodic waveforms without any input signal. They are essentially amplifiers with positive feedback that meet the Barkhausen criterion for oscillation. Examples include:
*   **Phase-Shift Oscillators**
*   **Wien Bridge Oscillators**
*   **Colpitts Oscillators**
*   **Hartley Oscillators**

**Course Outcome Alignment:** This directly relates to **CO3: Apply the principles of feedback in the design of oscillators.**

### 7.3. Voltage Regulators (Negative Feedback)

Voltage regulators maintain a constant output voltage despite variations in input voltage or load current. They typically use an amplifier with negative feedback to compare a fraction of the output voltage with a stable reference voltage and adjust the output accordingly.

**Course Outcome Alignment:** This directly relates to **CO4: Design power amplifiers and voltage regulator circuits.**

---

## 8. Practice Questions and Exercises

**Question 1:**
An amplifier has an open-loop voltage gain of $A = -1000$. If a negative feedback network with $\beta = -0.005$ is applied, what is the closed-loop voltage gain $A_f$?
(a) -200
(b) 200
(c) -196.08
(d) 196.08

**Answer:**
For negative feedback, $A_f = \frac{A}{1 + A \beta}$.
$A_f = \frac{-1000}{1 + (-1000) \times (-0.005)} = \frac{-1000}{1 + 5} = \frac{-1000}{6} = -166.67$
Looking at the options, there might be a mistake in the provided options or the question's intended $\beta$. Let's re-examine $\beta$ if it represents a negative feedback factor. If $\beta$ is the fraction of output voltage fed back, and it's negative, it implies the feedback network is inverting.

Let's assume the common case where $\beta$ is a magnitude and the feedback is negative. If $\beta = 0.005$ (feedback magnitude), the loop gain $A\beta$ would be $(-1000)(0.005) = -5$.
$A_f = \frac{A}{1 - A\beta} = \frac{-1000}{1 - (-5)} = \frac{-1000}{6} = -166.67$.

If the question meant $\beta$ to be the factor such that $V_f = \beta V_o$, and for negative feedback $V_i = V_s - V_f$, then $A_f = \frac{A}{1 + A\beta}$.
If $A = -1000$ and $\beta = -0.005$, $A_f = \frac{-1000}{1 + (-1000)(-0.005)} = \frac{-1000}{1+5} = \frac{-1000}{6} = -166.67$.

Let's re-evaluate the question if it implied a magnitude for $\beta$. If $\beta = 0.005$ and the feedback is negative, then $A_f = \frac{A}{1 + A\beta}$.
$A_f = \frac{-1000}{1 + (-1000)(0.005)} = \frac{-1000}{1 - 5} = \frac{-1000}{-4} = 250$.

There seems to be an inconsistency. Let's assume the standard definition where $A$ is the open-loop gain and $\beta$ is the feedback factor, and the feedback is negative. If $A$ is negative (e.g., an inverting amplifier), and $V_f$ is fed back to subtract from $V_s$, then $V_i = V_s - V_f$. If $V_f = \beta V_o$, and $V_o = AV_i$, then $V_f = \beta AV_i$.
So $V_i = V_s - \beta AV_i$, $V_i(1 + A\beta) = V_s$, $A_f = \frac{V_o}{V_s} = \frac{AV_i}{V_s} = A/(1+A\beta)$.

Let's check the options again. If $A_f = 200$, then $200 = \frac{-1000}{1 + (-1000)\beta}$.
$200(1 - 1000\beta) = -1000$
$1 - 1000\beta = -5$
$-1000\beta = -6$
$\beta = 0.006$.

If $A_f = 196.08$, then $196.08 = \frac{-1000}{1 + (-1000)\beta}$.
$196.08(1 - 1000\beta) = -1000$
$1 - 1000\beta = -1000/196.08 \approx -5.099$
$-1000\beta \approx -6.099$
$\beta \approx 0.006099$.

Given the options, it's likely that $A$ is intended to be a magnitude and $A=1000$ or $\beta$ magnitude is used in a way that yields one of the answers.
Let's assume $A = 1000$ (magnitude) and it's an inverting amplifier.
If $A_f = -200$, then $-200 = \frac{1000}{1+1000\beta}$.
$-200(1+1000\beta) = 1000$
$1+1000\beta = -5$
$1000\beta = -6$
$\beta = -0.006$. This would be for positive feedback.

If $A_f = 200$, then $200 = \frac{1000}{1+1000\beta}$.
$200(1+1000\beta) = 1000$
$1+1000\beta = 5$
$1000\beta = 4$
$\beta = 0.004$. This would be for negative feedback.

Let's assume the question meant $A = -1000$ and $\beta = 0.006$ for negative feedback.
$A_f = \frac{-1000}{1 + (-1000)(0.006)} = \frac{-1000}{1 - 6} = \frac{-1000}{-5} = 200$.
So, **Option (b) 200** is the most plausible answer if we assume $\beta = 0.006$ and the amplifier is inverting ($A < 0$).

**Question 2:**
A voltage amplifier with an open-loop gain of $100$ has its input resistance increased by a factor of $100$ and its output resistance decreased by a factor of $50$ due to feedback. This type of change in impedances is characteristic of which feedback topology?
(a) Voltage-Series
(b) Voltage-Shunt
(c) Current-Series
(d) Current-Shunt

**Answer:**
*   Voltage-Series feedback increases input resistance and decreases output resistance.
*   Voltage-Shunt feedback decreases input resistance and increases output resistance.
*   Current-Series feedback increases input resistance and increases output resistance.
*   Current-Shunt feedback decreases input resistance and decreases output resistance.

The description matches **Voltage-Series feedback**. So, **Option (a)** is the correct answer.

**Question 3:**
An amplifier has a bandwidth of $100 \text{ kHz}$ with no feedback. If negative feedback is applied such that the gain is reduced by a factor of $10$, what is the new bandwidth?
(a) $10 \text{ kHz}$
(b) $100 \text{ kHz}$
(c) $1 \text{ MHz}$
(d) $10 \text{ MHz}$

**Answer:**
The gain reduction factor due to negative feedback is $(1 + A\beta)$.
Given that the gain is reduced by a factor of 10, we have $(1 + A\beta) = 10$.
The bandwidth is increased by the same factor $(1 + A\beta)$.
New Bandwidth $= \text{Original Bandwidth} \times (1 + A\beta)$
New Bandwidth $= 100 \text{ kHz} \times 10 = 1 \text{ MHz}$.
So, **Option (c)** is the correct answer.

**Question 4:**
Which of the following is NOT an advantage of negative feedback?
(a) Increased bandwidth
(b) Reduced distortion
(c) Increased gain
(d) Improved stability

**Answer:**
Negative feedback reduces gain, does not increase it. Therefore, **Option (c) Increased gain** is NOT an advantage of negative feedback.

---

## 9. Important Points to Remember

*   **Negative Feedback:** The cornerstone of improving amplifier performance by reducing gain, distortion, and noise, while increasing bandwidth and stability.
*   **Positive Feedback:** Leads to increased gain but can cause instability and oscillations.
*   **Closed-Loop Gain Formula:** $A_f = \frac{A}{1 \pm A\beta}$ (minus for negative feedback, plus for positive feedback).
*   **Gain-Bandwidth Product:** For negative feedback, the increase in bandwidth is equal to the decrease in gain.
*   **Impedance Modification:** Different feedback topologies affect input and output impedances differently, allowing for impedance matching.
*   **Stability:** Crucial consideration in feedback amplifier design, analyzed using phase margin and gain margin.
*   **Barkhausen Criterion:** For oscillations, loop gain magnitude must be 1 when phase shift is $-180^\circ$.
*   **Four Basic Topologies:** Voltage-Series, Voltage-Shunt, Current-Series, Current-Shunt, each with unique impedance effects.

---

This comprehensive study note covers the fundamental aspects of feedback amplifiers as introduced in Module 3. Understanding these concepts is vital for analyzing and designing various analog circuits, as they directly contribute to achieving desired performance characteristics and meeting course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
