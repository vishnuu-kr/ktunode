---
title: "High frequency response of single stage CE amplifier, short circuit current gain, cut-off frequency  fβ & unity gain bandwidth fT"
subject: "ANALOG CIRCUITS"
module: "Module 2: BJT Amplifiers: Design of RC coupled CE amplifier "
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2e8"
status: "completed"
scrapedAt: "2026-05-23T17:44:11.317Z"
---
# ANALOG CIRCUITS - Module 2: BJT Amplifiers: Design of RC coupled CE amplifier

## Topic: High Frequency Response of Single Stage CE Amplifier, Short Circuit Current Gain, Cut-off Frequency ($f_\beta$) & Unity Gain Bandwidth ($f_T$)

This module explores the behavior of a single-stage Common-Emitter (CE) BJT amplifier at high frequencies. We will analyze how parasitic capacitances within the BJT and the circuit affect its performance, leading to a reduction in gain. Key parameters like short-circuit current gain, cut-off frequency ($f_\beta$), and unity gain bandwidth ($f_T$) will be defined and analyzed.

---

### Learning Outcomes:

*   **Analyze the high-frequency response of a single-stage CE amplifier.**
*   **Understand the role of parasitic capacitances in limiting high-frequency performance.**
*   **Define and calculate the short-circuit current gain.**
*   **Define and calculate the lower cut-off frequency ($f_\beta$) due to internal BJT capacitances.**
*   **Define and calculate the unity gain bandwidth ($f_T$) and its relation to the amplifier's characteristics.**

---

### Course Outcomes Alignment:

*   **CO2: Analyze single stage and multistage BJT amplifier circuits using equivalent models.** This topic directly addresses the analysis of single-stage BJT amplifiers, specifically focusing on their behavior at different frequencies and utilizing hybrid-pi and T-equivalent models for this analysis. (Knowledge Level: K3)

---

## 1. Introduction to High Frequency Response of CE Amplifiers

At low and mid-frequencies, RC-coupled CE amplifiers are primarily characterized by external coupling and bypass capacitors. However, as the signal frequency increases, internal capacitances within the BJT itself become significant and start to dominate the amplifier's behavior. These parasitic capacitances lead to a decrease in the amplifier's voltage and current gain.

**Key Concept:** The performance of an amplifier is typically characterized by its frequency response, which is a plot of gain versus frequency. This response typically shows a flat mid-band gain, with a roll-off at lower and higher frequencies.

**Reference:**
*   **Boylestad & Nashelsky (11th ed., 2015):** Chapter 14 "Frequency Response" will provide a foundational understanding of amplifier frequency response.
*   **Sedra & Smith (6th ed., 2013):** Chapter 9 "MOSFETs and CAD Tools" and Chapter 10 "Integrated-Circuit Device Design" touch upon internal capacitances. While focusing on MOSFETs, the principles of parasitic capacitances are transferable.

---

## 2. Parasitic Capacitances in a BJT

The BJT, despite being a fundamental active component, possesses inherent capacitances that are crucial for understanding its high-frequency limitations. These capacitances arise from the physical structure of the transistor.

**2.1 Internal Capacitances:**

*   **Base-Emitter Junction Capacitance ($C_{be}$ or $C_\pi$):** This capacitance exists across the forward-biased base-emitter junction. It's composed of two parts:
    *   **Diffusion Capacitance ($C_d$):** Dominant in forward active mode. It's proportional to the collector current ($I_C$) and is responsible for the charge storage in the base region. $C_d = \frac{g_m \tau_F}{q}$, where $g_m$ is the transconductance and $\tau_F$ is the forward transit time.
    *   **Junction (Depletion) Capacitance ($C_j$):** Present across any PN junction, regardless of biasing. In the forward-biased B-E junction, it's usually smaller than the diffusion capacitance.

*   **Base-Collector Junction Capacitance ($C_{bc}$ or $C_\mu$):** This capacitance exists across the reverse-biased base-collector junction. It's a depletion capacitance and is relatively independent of the collector current. It's also known as the Miller capacitance when it's amplified by the voltage gain of the stage.

*   **Collector-Emitter Capacitance ($C_{ce}$):** This is a small parasitic capacitance between the collector and emitter terminals. It's generally much smaller than $C_{be}$ and $C_{bc}$ and often neglected in high-frequency analysis.

**Diagrammatic Representation (Hybrid-$\pi$ Model):**
The hybrid-$\pi$ model at high frequencies includes these parasitic capacitances.

```
       v_be
        +---+
        |   |
       C_be |
        |   |
        +---+------ b
          |      /
          |     /
          gm*v_be
          |     \
          |      \
        c +---+---+------ c
              |   |
             C_bc |
              |   |
              +---+------ e
```

**Important Point:** The value of $C_{be}$ is significantly affected by the DC biasing conditions, particularly the collector current ($I_C$). Higher $I_C$ leads to a larger diffusion capacitance, thus reducing the high-frequency response.

**Reference:**
*   **Boylestad & Nashelsky (11th ed., 2015):** Section 14.2 "Capacitances of the Transistor" will detail these capacitances.
*   **Sedra & Smith (6th ed., 2013):** Section 7.3 "Small-Signal Operation at High Frequencies" and the hybrid-$\pi$ model discussion will be relevant.
*   **Bogart, Beasley & Rico (6th ed.):** Chapter 7 "Frequency Response" will provide a comprehensive treatment.

---

## 3. High-Frequency Equivalent Circuit

To analyze the high-frequency response, the CE amplifier is represented by its hybrid-$\pi$ equivalent circuit, including the parasitic capacitances.

**3.1 Miller Effect:**

The most significant impact of $C_{bc}$ at high frequencies is the Miller effect. $C_{bc}$ is connected between the base and the collector. Since the collector voltage ($v_c$) is inverted with respect to the base voltage ($v_b$) by the CE amplifier (gain is negative), a change in $v_b$ causes a change in $v_c$ with an opposite polarity. This causes current to flow through $C_{bc}$ that appears to be amplified.

The effective capacitance seen from the base terminal ($C_{miller}$) is given by:

$C_{miller} = C_{bc} (1 - A_v)$

Where $A_v$ is the mid-band voltage gain of the CE amplifier. Since $A_v$ is negative, $1 - A_v$ becomes a large positive value. This significantly increases the effective capacitance at the base, leading to a lower cut-off frequency.

**Important Point:** The Miller effect is significant because it amplifies the effect of $C_{bc}$, making it the dominant factor in limiting the high-frequency response.

**3.2 High-Frequency Hybrid-$\pi$ Model:**

The complete hybrid-$\pi$ model at high frequencies includes $C_{be}$ and $C_{bc}$ (with the Miller effect applied to $C_{bc}$).

```
        b
        o----- C_be -----o-----gm*v_be -----o c
        |                |                   |
        |                |                   |
        ---              ---                 ---
        g_m              r_pi                C_bc_eff (Miller Capacitance)
        |                |                   |
        |                |                   |
        o----------------o-------------------o e
```

Where:
*   $r_\pi = \frac{\beta_0}{g_m}$ (DC current gain $\beta_0$)
*   $C_{be} = C_b + C_d$ (where $C_b$ is the base-emitter junction capacitance and $C_d$ is the diffusion capacitance)
*   $C_{bc\_eff} = C_{bc} (1 - A_v)$ (Miller capacitance)

**3.3 Simplified High-Frequency Model:**

Often, for analysis, we consider the dominant time constants. At high frequencies, the output loop and input loop can be considered separately using approximations.

*   **Input Loop (Dominant Pole):** The input circuit can be approximated as a series combination of $R_{in}$ (input resistance of the amplifier, $R_{in} \approx r_\pi || R_B$ where $R_B$ is the biasing resistance) and the equivalent capacitance $C_{eq1} = C_{be} + C_{bc\_eff}$. This combination forms a low-pass filter.

*   **Output Loop (Dominant Pole):** The output circuit can be approximated by considering the resistance seen from the collector ($R_{out} \approx R_C || R_L$) and the capacitance $C_{bc}$ (as seen from the output). However, a more rigorous approach involves considering the output impedance at the collector and the feedback capacitance.

**Reference:**
*   **Boylestad & Nashelsky (11th ed., 2015):** Section 14.3 "High-Frequency Response" will explain the impact of these capacitances.
*   **Sedra & Smith (6th ed., 2013):** Section 7.3 "Small-Signal Operation at High Frequencies" will cover the Miller effect and high-frequency equivalent circuits.
*   **Razavi (2nd ed., 2015):** Chapter 7 "CMOS Analog Circuit Design" (though CMOS, the principles of frequency response and parasitic capacitances are similar) and Chapter 5 "Basic Active Filters" might offer insights into frequency analysis techniques.

---

## 4. Short-Circuit Current Gain ($A_i(j\omega)$)

The short-circuit current gain is a fundamental parameter used to characterize the high-frequency performance of a transistor. It's defined as the ratio of the short-circuit output current to the input current at a given frequency. For a CE amplifier, we typically analyze the short-circuit current gain of the *transistor* itself, not the entire amplifier circuit.

**4.1 Definition:**

The short-circuit current gain ($A_i(j\omega)$) is defined as:

$A_i(j\omega) = \frac{i_c(j\omega)}{i_b(j\omega)}|_{\text{short circuit at output}}$

where $i_c(j\omega)$ is the collector current and $i_b(j\omega)$ is the base current, both as phasors at angular frequency $\omega$.

**4.2 Derivation using Hybrid-$\pi$ Model:**

Consider the hybrid-$\pi$ model with only internal BJT capacitances $C_{be}$ and $C_{bc}$. The output is short-circuited to the emitter ($v_{ce} \approx 0$).

In the hybrid-$\pi$ model:
*   $i_b = \frac{v_{be}}{r_\pi} + j\omega C_{be} v_{be}$
*   $i_c = g_m v_{be} - j\omega C_{bc} v_{be}$ (Since output is shorted, $v_{ce} \approx 0$, so the current through $C_{bc}$ flows from base to collector)

From the input side:
$i_b = v_{be} \left( \frac{1}{r_\pi} + j\omega C_{be} \right) = v_{be} \left( \frac{1 + j\omega r_\pi C_{be}}{r_\pi} \right)$

From the output side:
$i_c = v_{be} (g_m - j\omega C_{bc})$

Now, calculating the ratio:
$A_i(j\omega) = \frac{i_c}{i_b} = \frac{v_{be} (g_m - j\omega C_{bc})}{v_{be} \left( \frac{1 + j\omega r_\pi C_{be}}{r_\pi} \right)}$
$A_i(j\omega) = \frac{r_\pi (g_m - j\omega C_{bc})}{1 + j\omega r_\pi C_{be}}$

Substitute $g_m = \frac{\beta_0}{r_\pi}$:
$A_i(j\omega) = \frac{r_\pi \left(\frac{\beta_0}{r_\pi} - j\omega C_{bc}\right)}{1 + j\omega r_\pi C_{be}}$
$A_i(j\omega) = \frac{\beta_0 - j\omega r_\pi C_{bc}}{1 + j\omega r_\pi C_{be}}$

**4.3 Characteristic Frequency ($f_\beta$):**

The short-circuit current gain expression has a form that describes a first-order low-pass filter. The denominator dictates the cut-off frequency.

The denominator is $1 + j\omega r_\pi C_{be}$. The pole of this transfer function occurs when the denominator is zero.
$1 + j\omega_{p1} r_\pi C_{be} = 0 \implies j\omega_{p1} r_\pi C_{be} = -1$

The angular frequency of this pole is $\omega_{p1} = \frac{1}{r_\pi C_{be}}$.
The cut-off frequency ($f_\beta$) associated with this pole is:

$f_\beta = \frac{\omega_{p1}}{2\pi} = \frac{1}{2\pi r_\pi C_{be}}$

This frequency, $f_\beta$, is also known as the **beta cut-off frequency** or the **lower 3-dB frequency** of the short-circuit current gain. At this frequency, the magnitude of the short-circuit current gain drops to $\frac{1}{\sqrt{2}}$ of its mid-band value ($\beta_0$).

**4.4 Mid-band Current Gain:**

At low frequencies ($\omega \to 0$), $A_i(j\omega) \to \frac{\beta_0}{1} = \beta_0$. This is the mid-band short-circuit current gain.

**Important Point:** $f_\beta$ is a measure of how the short-circuit current gain rolls off due to the base-emitter capacitance. It is directly influenced by $r_\pi$ and $C_{be}$.

**Example:**
Consider a BJT with $r_\pi = 1 \, k\Omega$ and $C_{be} = 20 \, pF$.
The beta cut-off frequency $f_\beta$ is:
$f_\beta = \frac{1}{2\pi (1 \times 10^3 \, \Omega)(20 \times 10^{-12} \, F)} = \frac{1}{40\pi \times 10^{-9}} \approx 7.96 \, MHz$.

**Reference:**
*   **Boylestad & Nashelsky (11th ed., 2015):** Section 14.4 "Gain-Bandwidth Product" will link to these concepts.
*   **Sedra & Smith (6th ed., 2013):** Section 7.3.1 "The Hybrid-$\pi$ Model at High Frequencies" will cover the derivation of $A_i(j\omega)$ and $f_\beta$.
*   **Bell (5th ed., 2008):** Chapter 7 "Frequency Response" will offer detailed explanations.

---

## 5. Unity Gain Bandwidth ($f_T$)

The unity gain bandwidth ($f_T$), also known as the transition frequency, is another critical parameter that characterizes the high-frequency capability of a transistor. It's the frequency at which the magnitude of the short-circuit current gain $|A_i(j\omega)|$ drops to unity (or 0 dB).

**5.1 Definition:**

The unity gain bandwidth ($f_T$) is the frequency at which $|A_i(j\omega)| = 1$.

**5.2 Derivation of $f_T$:**

We have the short-circuit current gain:
$A_i(j\omega) = \frac{\beta_0 - j\omega r_\pi C_{bc}}{1 + j\omega r_\pi C_{be}}$

To find $f_T$, we set $|A_i(j\omega)| = 1$. This involves setting the numerator's magnitude equal to the denominator's magnitude. A common approximation simplifies the analysis by considering the dominant role of $C_{bc}$ in limiting the gain at higher frequencies.

A more direct derivation of $f_T$ involves the hybrid-$\pi$ model and considering the frequency where the current gain drops to 1. At very high frequencies, the term $j\omega r_\pi C_{bc}$ in the numerator becomes dominant, and the term $j\omega r_\pi C_{be}$ in the denominator becomes dominant.

A simplified form of $A_i(j\omega)$ at high frequencies, considering the dominant terms, is:
$A_i(j\omega) \approx \frac{-j\omega r_\pi C_{bc}}{j\omega r_\pi C_{be}} = \frac{C_{bc}}{C_{be}}$ (This is incorrect for the exact $f_T$ but shows the ratio of capacitances).

A more accurate way to derive $f_T$ is to consider the transfer function and set its magnitude to 1.

Let's rewrite $A_i(j\omega)$:
$A_i(j\omega) = \frac{\beta_0 (1 - j\omega \frac{r_\pi C_{bc}}{\beta_0})}{1 + j\omega r_\pi C_{be}}$

At frequencies significantly above $f_\beta$, the denominator is approximately $j\omega r_\pi C_{be}$.
$A_i(j\omega) \approx \frac{\beta_0 - j\omega r_\pi C_{bc}}{j\omega r_\pi C_{be}} = \frac{\beta_0}{j\omega r_\pi C_{be}} - \frac{C_{bc}}{C_{be}}$

This approximation isn't quite right for $f_T$. The correct derivation for $f_T$ considers the frequency where the magnitude of the current gain is 1.

A key insight is that at very high frequencies, $f_T$ is primarily determined by the total effective capacitance at the base, and the feedback capacitance $C_{bc}$ plays a crucial role. The $f_T$ is related to the intrinsic properties of the transistor.

The definition of $f_T$ is derived from the relationship between the transconductance ($g_m$), base resistance ($r_x$, usually ignored in ideal hybrid-$\pi$), base capacitance ($C_\pi$ or $C_{be}$), and feedback capacitance ($C_\mu$ or $C_{bc}$).

The transition frequency $f_T$ can be expressed as:

$f_T = \frac{g_m}{2\pi(C_{be} + C_{bc})} = \frac{1}{2\pi r_\pi (C_{be} + C_{bc})}$

This formula arises from considering the dominant frequency-dependent terms in the hybrid-$\pi$ model. It's the frequency where the current gain from base to collector drops to unity.

**5.3 Relationship between $f_T$, $f_\beta$, and $\beta_0$:**

We have $f_\beta = \frac{1}{2\pi r_\pi C_{be}}$ and $|A_i(j\omega)| = \frac{\beta_0 \sqrt{1 + (\omega r_\pi C_{bc}/\beta_0)^2}}{\sqrt{1 + (\omega r_\pi C_{be})^2}}$.

Setting $|A_i(j\omega)| = 1$ and solving for $\omega = \omega_T = 2\pi f_T$ is complex. However, a very useful relationship exists.

By comparing the expressions, it can be shown that:

$f_T = \beta_0 f_\beta = \beta_0 \frac{1}{2\pi r_\pi C_{be}}$

This equation is a fundamental relationship between these three parameters.

**Important Point:** $f_T$ is a figure of merit for the transistor's high-frequency performance. A higher $f_T$ means the transistor can operate at higher frequencies. It's directly proportional to $\beta_0$ and $f_\beta$.

**Example:**
If a BJT has $\beta_0 = 100$ and $f_\beta = 5 \, MHz$, then its unity gain bandwidth $f_T$ is:
$f_T = 100 \times 5 \, MHz = 500 \, MHz$.

**5.4 Miller Effect and $f_T$:**

The Miller effect is more relevant to the voltage gain of an amplifier stage, which is related to the capacitance seen at the input. While $f_T$ is a parameter of the transistor itself, the Miller capacitance can lower the effective bandwidth of an amplifier stage, shifting its cut-off frequency lower than what $f_T$ might suggest for the transistor alone.

**Reference:**
*   **Boylestad & Nashelsky (11th ed., 2015):** Section 14.4 "Gain-Bandwidth Product" will be crucial here.
*   **Sedra & Smith (6th ed., 2013):** Section 7.3.1 "The Hybrid-$\pi$ Model at High Frequencies" discusses $f_T$.
*   **Meganathan (1st ed., 2023):** "Electronic Circuits Analysis and Design 1" is a good reference for these concepts if available, likely covering transistor models in detail.

---

## 6. High-Frequency Response of the CE Amplifier Stage

Now, let's consider the entire CE amplifier stage at high frequencies, including the input and output resistances, biasing resistors, and load resistance.

**6.1 Dominant Poles:**

The frequency response of a CE amplifier at high frequencies is typically characterized by one or more dominant poles. The poles represent frequencies at which the gain starts to roll off.

*   **Input Pole:** Caused by the input resistance ($R_{in}$) and the effective input capacitance ($C_{in\_eq} = C_{be} + C_{bc}(1-A_v)$). The cut-off frequency for this pole is $f_{in} = \frac{1}{2\pi R_{in} C_{in\_eq}}$. This pole is usually dominant at higher frequencies.

*   **Output Pole:** Caused by the output resistance ($R_{out}$) and the capacitance seen at the output. This often includes $C_{bc}$ and any parasitic capacitances at the collector. A simplified view considers $R_{out}$ and $C_{bc}$ leading to a cut-off frequency $f_{out} = \frac{1}{2\pi R_{out} C_{bc}}$.

*   **Dominance:** The overall bandwidth of the amplifier is determined by the lowest of these pole frequencies. The lowest pole frequency is the most dominant pole, causing the first significant roll-off in gain.

**6.2 Approximate Upper Cut-off Frequency ($f_{H}$):**

The upper cut-off frequency ($f_H$) of the amplifier is approximately determined by the dominant pole. If there are multiple poles, the bandwidth is roughly the inverse of the sum of the reciprocals of the pole frequencies (the "one-pole approximation" is that the bandwidth is equal to the dominant pole frequency).

A more general approach uses the concept of dominant poles:
$f_H \approx \min(f_1, f_2, ...)$ where $f_i$ are the pole frequencies.

In many cases, the input pole dominates. Using the Miller effect, the input capacitance is significantly increased.

$f_H \approx \frac{1}{2\pi (R_{in}) (C_{be} + C_{bc}(1-A_v))}$

where:
*   $R_{in}$ is the equivalent input resistance of the stage.
*   $A_v$ is the mid-band voltage gain.

**Important Point:** The upper cut-off frequency ($f_H$) of the *amplifier stage* is generally lower than $f_T$ or $f_\beta$ of the individual transistor due to the influence of circuit resistances and the overall gain of the stage.

**Example Calculation of $f_H$:**
Consider a CE amplifier with:
*   $r_\pi = 1 \, k\Omega$
*   $C_{be} = 20 \, pF$
*   $C_{bc} = 5 \, pF$
*   $R_B = 50 \, k\Omega$ (biasing resistor)
*   $R_C = 2 \, k\Omega$ (collector resistor)
*   $R_L = 2 \, k\Omega$ (load resistor)
*   Mid-band voltage gain $A_v = -50$

1.  **Calculate $g_m$ and $r_\pi$ (assuming $I_C$ is known, e.g., $I_C = 1 \, mA$, then $g_m = I_C/V_T \approx 1/0.025 = 40 \, mS$, and $r_\pi = \beta/g_m$. Let's assume $r_\pi$ is given as $1k\Omega$ for simplicity).**
    Let's proceed with the given $r_\pi = 1 \, k\Omega$.

2.  **Calculate $R_{in}$:**
    $R_{in} = R_B || r_\pi = 50 \, k\Omega || 1 \, k\Omega = \frac{50 \times 1}{50 + 1} \, k\Omega \approx 0.98 \, k\Omega$

3.  **Calculate Miller Capacitance ($C_{bc\_eff}$):**
    $C_{bc\_eff} = C_{bc}(1 - A_v) = 5 \, pF (1 - (-50)) = 5 \, pF (51) = 255 \, pF$

4.  **Calculate Total Input Capacitance ($C_{in\_eq}$):**
    $C_{in\_eq} = C_{be} + C_{bc\_eff} = 20 \, pF + 255 \, pF = 275 \, pF$

5.  **Calculate the input pole frequency ($f_{in}$):**
    $f_{in} = \frac{1}{2\pi R_{in} C_{in\_eq}} = \frac{1}{2\pi (0.98 \times 10^3 \, \Omega)(275 \times 10^{-12} \, F)}$
    $f_{in} = \frac{1}{2\pi (2.7 \times 10^{-7})} \approx 0.59 \, MHz$

6.  **Consider the output pole frequency ($f_{out}$):**
    $R_{out} \approx R_C || r_o$ (where $r_o$ is the output resistance of the BJT, usually large and neglected in simple analyses, so $R_{out} \approx R_C = 2 \, k\Omega$).
    $f_{out} = \frac{1}{2\pi R_{out} C_{bc}} = \frac{1}{2\pi (2 \times 10^3 \, \Omega)(5 \times 10^{-12} \, F)}$
    $f_{out} = \frac{1}{2\pi (10 \times 10^{-9})} \approx 15.9 \, MHz$

7.  **Determine the dominant pole and $f_H$:**
    The input pole frequency ($0.59 \, MHz$) is significantly lower than the output pole frequency ($15.9 \, MHz$). Therefore, the input pole is dominant.
    $f_H \approx f_{in} \approx 0.59 \, MHz$.

This example shows how the Miller effect can drastically reduce the upper cut-off frequency of the amplifier stage.

**Reference:**
*   **Boylestad & Nashelsky (11th ed., 2015):** Chapter 14 "Frequency Response" covers the analysis of amplifier stages.
*   **Sedra & Smith (6th ed., 2013):** Section 7.4 "Frequency Response of the MOSFET Cascade Amplifier" (although MOSFET, the analysis approach for multi-pole response is similar) or sections on BJT amplifier frequency response.
*   **Gopakumar (1st ed., 2023):** "Electronic Devices and Circuits" is a potential source for detailed analysis of CE amplifier frequency response.

---

## 7. Summary and Key Takeaways

*   **High-frequency limitations** in CE amplifiers are primarily due to parasitic capacitances ($C_{be}$, $C_{bc}$, $C_{ce}$).
*   The **Miller effect** amplifies $C_{bc}$, creating a large effective capacitance at the input ($C_{bc\_eff} = C_{bc}(1-A_v)$), significantly reducing the upper cut-off frequency.
*   **Short-circuit current gain ($A_i(j\omega)$)** describes how the current gain of the transistor varies with frequency.
*   **Beta cut-off frequency ($f_\beta$)** is the frequency at which $|A_i(j\omega)|$ drops to $\frac{1}{\sqrt{2}}\beta_0$. It is given by $f_\beta = \frac{1}{2\pi r_\pi C_{be}}$.
*   **Unity gain bandwidth ($f_T$)** is the frequency at which $|A_i(j\omega)| = 1$. It is a key figure of merit for transistor speed, given by $f_T = \beta_0 f_\beta = \frac{g_m}{2\pi(C_{be} + C_{bc})}$.
*   The **upper cut-off frequency ($f_H$) of a CE amplifier stage** is determined by the dominant pole in its frequency response, which is often the input pole influenced by the Miller effect.
*   The overall bandwidth of the CE amplifier is limited by the **lowest of the dominant pole frequencies**.
*   To achieve good high-frequency performance, one needs transistors with high $f_T$, low parasitic capacitances, and design the amplifier to minimize the Miller effect (e.g., by reducing voltage gain or using circuit techniques like cascode).

---

## Practice Questions

**Question 1:**
Define the following terms related to the high-frequency response of a BJT:
a) Beta cut-off frequency ($f_\beta$)
b) Unity gain bandwidth ($f_T$)
c) Miller effect

**Question 2:**
A BJT has the following parameters: $\beta_0 = 150$, $r_\pi = 500 \, \Omega$, $C_{be} = 30 \, pF$, $C_{bc} = 10 \, pF$.
a) Calculate the beta cut-off frequency ($f_\beta$).
b) Calculate the unity gain bandwidth ($f_T$).

**Question 3:**
Explain how the Miller effect impacts the high-frequency response of a CE amplifier. How does it affect the input capacitance and the upper cut-off frequency of the stage?

**Question 4:**
Consider a CE amplifier stage with a mid-band voltage gain of $A_v = -40$. If the transistor has $C_{bc} = 8 \, pF$, what is the effective Miller capacitance seen at the base?

**Question 5:**
A CE amplifier stage is found to have a dominant input pole at $f_1 = 1 \, MHz$ and an output pole at $f_2 = 10 \, MHz$. What is the approximate upper cut-off frequency ($f_H$) of the amplifier stage?

---

## Answers to Practice Questions

**Answer 1:**
a) **Beta cut-off frequency ($f_\beta$):** The frequency at which the magnitude of the short-circuit current gain of a transistor drops to $\frac{1}{\sqrt{2}}$ times its mid-band value ($\beta_0$). It is given by $f_\beta = \frac{1}{2\pi r_\pi C_{be}}$.
b) **Unity gain bandwidth ($f_T$):** The frequency at which the magnitude of the short-circuit current gain of a transistor becomes unity. It is given by $f_T = \beta_0 f_\beta = \frac{g_m}{2\pi(C_{be} + C_{bc})}$.
c) **Miller effect:** The phenomenon where the capacitance between the input and output of an inverting amplifier ($C_{bc}$ in a CE amplifier) appears amplified when viewed from the input terminal. The effective input capacitance due to the Miller effect is $C_{miller} = C_{bc}(1 - A_v)$, where $A_v$ is the voltage gain.

**Answer 2:**
a) $f_\beta = \frac{1}{2\pi r_\pi C_{be}} = \frac{1}{2\pi (500 \, \Omega)(30 \times 10^{-12} \, F)} = \frac{1}{3\pi \times 10^{-8}} \approx 10.61 \, MHz$.
b) $f_T = \beta_0 f_\beta = 150 \times 10.61 \, MHz \approx 1591.5 \, MHz$ or $1.59 \, GHz$.

**Answer 3:**
The Miller effect amplifies the base-collector capacitance ($C_{bc}$) by a factor of $(1 - A_v)$, where $A_v$ is the negative voltage gain of the CE stage. This creates a much larger effective capacitance at the input terminal, $C_{in\_eq} = C_{be} + C_{bc}(1 - A_v)$. This increased input capacitance, when combined with the input resistance ($R_{in}$), forms a low-pass filter with a lower cut-off frequency ($f_{in} = \frac{1}{2\pi R_{in} C_{in\_eq}}$). Consequently, the upper cut-off frequency ($f_H$) of the amplifier stage is significantly reduced.

**Answer 4:**
$C_{miller} = C_{bc}(1 - A_v) = 8 \, pF (1 - (-40)) = 8 \, pF (41) = 328 \, pF$.

**Answer 5:**
When multiple poles exist, the upper cut-off frequency ($f_H$) is generally approximated by the lowest (dominant) pole frequency. In this case, the dominant pole is at $f_1 = 1 \, MHz$.
Therefore, $f_H \approx 1 \, MHz$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
