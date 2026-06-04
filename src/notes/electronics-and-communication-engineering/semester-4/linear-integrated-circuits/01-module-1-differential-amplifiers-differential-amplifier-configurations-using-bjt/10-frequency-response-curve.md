---
title: "frequency response curve."
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 1: Differential Amplifiers:  Differential amplifier configurations using BJT"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe56a"
status: "completed"
scrapedAt: "2026-05-23T17:49:42.216Z"
---
# Linear Integrated Circuits - Module 1: Differential Amplifiers (BJT Configurations)

## Topic: Frequency Response Curve of Differential Amplifiers

This section focuses on understanding how the gain of a BJT differential amplifier changes with the frequency of the input signal.

### Learning Outcomes Covered:

*   **Understanding the impact of frequency on differential amplifier performance.**
*   **Identifying and analyzing the factors that limit the high-frequency response.**
*   **Interpreting frequency response curves to determine key parameters.**

### Key Concepts and Definitions:

*   **Frequency Response:** The characteristic of an amplifier that describes how its gain and phase shift vary with the frequency of the input signal.
*   **Bandwidth (BW):** The range of frequencies over which the amplifier operates effectively, typically defined as the frequency range where the gain is within 3 dB (or $0.707$ times the mid-band gain) of its maximum value.
*   **Cutoff Frequencies ($f_L$ and $f_H$):**
    *   **Lower Cutoff Frequency ($f_L$):** The frequency below which the amplifier's gain starts to decrease significantly due to coupling and bypass capacitors.
    *   **Upper Cutoff Frequency ($f_H$):** The frequency above which the amplifier's gain starts to decrease significantly due to parasitic capacitances within the transistors and stray capacitances.
*   **Mid-band Gain ($A_{mid}$):** The gain of the amplifier in the frequency range where the gain is relatively constant.
*   **Gain-Bandwidth Product (GBW):** A figure of merit for amplifiers that relates the mid-band gain to the bandwidth. For a single-pole system, $GBW \approx A_{mid} \times f_H$.
*   **Roll-off:** The rate at which the amplifier's gain decreases beyond the cutoff frequencies. Typically, for a single-pole system, the roll-off is -20 dB/decade or -6 dB/octave.
*   **Parasitic Capacitances:** Unintended capacitances present in semiconductor devices and circuit layout, primarily:
    *   **Base-Emitter Capacitance ($C_{be}$):** Capacitance between the base and emitter junctions.
    *   **Base-Collector Capacitance ($C_{bc}$):** Also known as the Miller capacitance, this is the capacitance between the base and collector junctions.
    *   **Collector-Emitter Capacitance ($C_{ce}$):** Capacitance between the collector and emitter.
    *   **Stray Capacitances:** Capacitances due to wiring, component leads, and printed circuit board traces.
*   **Miller Effect:** The apparent increase in capacitance between the input and output terminals of an inverting amplifier due to the feedback capacitance ($C_{bc}$). The effective capacitance is $C_{miller} = C_{bc}(1 - A_v)$, where $A_v$ is the voltage gain. This effect significantly impacts the high-frequency response.

### Factors Affecting Frequency Response:

The frequency response of a BJT differential amplifier is influenced by both internal device capacitances and external circuit components.

#### 1. Low-Frequency Response:

*   **Coupling Capacitors ($C_1, C_2$):** These capacitors block DC while allowing the AC signal to pass. At low frequencies, their impedance ($1/\omega C$) becomes significant, causing a reduction in the signal reaching the amplifier stages.
*   **Bypass Capacitors ($C_E$ in emitter-biased configurations):** These capacitors are used to bypass the emitter resistor, increasing the AC gain. At low frequencies, their impedance increases, and they start to bypass less of the AC signal, leading to a decrease in gain.

**Circuit Elements Involved:** Coupling capacitors ($C_{in}, C_{out}$), emitter bypass capacitor ($C_E$).

**Impact:** The gain starts to fall off as the frequency decreases due to the increasing impedance of these capacitors.

#### 2. High-Frequency Response:

*   **Internal BJT Capacitances:**
    *   **$C_{be}$ (Base-Emitter Capacitance):** This capacitance directly affects the input impedance and creates a pole in the frequency response.
    *   **$C_{bc}$ (Base-Collector Capacitance / Miller Capacitance):** This is the most significant parasitic capacitance. Due to the voltage gain between the collector and base, $C_{bc}$ appears as a much larger capacitance at the input terminals (Miller effect: $C_{miller} = C_{bc}(1-A_v)$). This significantly lowers the input impedance at higher frequencies and causes the gain to roll off.
    *   **$C_{ce}$ (Collector-Emitter Capacitance):** While present, its effect is generally less pronounced compared to $C_{bc}$ in common-emitter configurations.
*   **Stray Capacitances:** These arise from interconnections and component packaging.

**Circuit Elements Involved:** Internal capacitances ($C_{be}, C_{bc}, C_{ce}$) and external stray capacitances.

**Impact:** As frequency increases, these capacitances present a lower impedance path, shunting the AC signal and causing the gain to decrease. The dominant factor is often the Miller effect due to $C_{bc}$.

### Frequency Response Curve:

The frequency response of a differential amplifier is typically plotted as a graph of **voltage gain (in dB)** versus **frequency (on a logarithmic scale)**.

**General Shape:**

*   **Low-Frequency Region:** The gain is low and increases as frequency rises. The increase is due to the decreasing impedance of coupling and bypass capacitors.
*   **Mid-band Region:** The gain is relatively constant. This is the region where the amplifier operates most effectively.
*   **High-Frequency Region:** The gain starts to decrease as frequency rises. This decrease is caused by the increasing impedance of parasitic capacitances.

**Key Features of the Curve:**

*   **$f_L$ (Lower Cutoff Frequency):** The frequency where the gain is $0.707$ times the mid-band gain ($A_{mid}$), corresponding to a -3 dB drop. This marks the lower limit of the useful bandwidth.
*   **$f_H$ (Upper Cutoff Frequency):** The frequency where the gain is $0.707$ times the mid-band gain ($A_{mid}$), corresponding to a -3 dB drop. This marks the upper limit of the useful bandwidth.
*   **Bandwidth (BW):** $BW = f_H - f_L$. For wideband amplifiers, $f_L$ is usually much smaller than $f_H$, so $BW \approx f_H$.
*   **Roll-off:** In the high-frequency region, the gain typically decreases at a rate of -20 dB/decade or -6 dB/octave for each dominant pole in the amplifier's transfer function. A typical differential amplifier with dominant parasitic capacitances might exhibit a -20 dB/decade roll-off.

**Example of a Frequency Response Curve:**

```
       ^ Gain (dB)
       |
       |        ________________________  (Mid-band Gain, A_mid)
       |       /
       |      /
-------|-----/------------------------> Frequency (log scale)
       |    /|                      /
       |   / |                     /
       |  /  |                    /
       | /   |                   /
       |/    |                  /
       +-----|-----------------|------
             f_L               f_H

       <---- Bandwidth (BW) ---->
```

**Referencing Textbooks:**

*   **Roy D. C. & S. B. Jain (5/e):** Chapter 10 discusses the frequency response of single-stage amplifiers and often extends these concepts to multi-stage amplifiers. They would detail the role of coupling, bypass, and internal capacitances in shaping the gain-frequency curve.
*   **Sedra A. S. & K. C. Smith (6/e):** Chapter 14 (or similar, depending on edition) delves into frequency response, analyzing circuits with parasitic capacitances using pole-zero analysis. They would extensively cover the Miller effect and its impact on $f_H$.

### Analyzing the Frequency Response:

To determine the frequency response, we typically use techniques like:

1.  **Approximation Method (Open-Circuit and Short-Circuit Time Constants):** This method is used to estimate the cutoff frequencies.
    *   **Low-Frequency Analysis:**
        *   Replace all transistors with their small-signal models.
        *   Consider coupling and bypass capacitors.
        *   Set all parasitic capacitances to zero (effectively shorting them at relevant frequencies).
        *   Calculate the equivalent resistance seen by each capacitor.
        *   The time constant $\tau = RC$ for each capacitor.
        *   $f_L = 1/(2\pi \tau_{eq})$, where $\tau_{eq}$ is the sum of significant time constants. The lowest frequency component causing the gain drop is the dominant pole.
    *   **High-Frequency Analysis:**
        *   Replace all transistors with their small-signal models.
        *   Consider parasitic capacitances ($C_{be}, C_{bc}, C_{ce}$) and stray capacitances.
        *   Set all coupling and bypass capacitors to zero (effectively open-circuiting them at high frequencies).
        *   Calculate the equivalent resistance seen by each capacitor.
        *   The time constant $\tau = RC$ for each capacitor.
        *   $f_H = 1/(2\pi \tau_{eq})$, where $\tau_{eq}$ is the sum of significant time constants. The highest frequency component causing the gain drop is the dominant pole. The Miller capacitance ($C_{bc}(1-A_v)$) often dominates.

2.  **Transfer Function Analysis:** Derive the exact transfer function $A_v(s)$ of the amplifier, where $s = j\omega$. The poles of this function directly give the cutoff frequencies.

**Simplified Model for High-Frequency Analysis:**

A common approach for analyzing the high-frequency response of a common-emitter amplifier (which forms the basis of differential amplifier stages) involves considering the input resistance at the base due to $C_{be}$ and the Miller capacitance.

*   Input resistance at base $\approx r_{\pi}$
*   Effective input capacitance $\approx C_{be} + C_{bc}(1-A_v)$
*   Dominant pole frequency $f_H \approx \frac{1}{2\pi (r_{\pi} || R_L) (C_{be} + C_{bc}(1-A_v))}$ (This is a simplified view; the exact calculation involves more complex equivalent resistances).

**For a Differential Amplifier:**

The analysis is performed for one differential pair, considering its common-emitter configuration. The overall frequency response of the differential amplifier will be limited by the stage with the lowest $f_H$ and highest $f_L$.

### Gain-Bandwidth Product (GBW):

*   GBW is a crucial parameter for high-frequency applications.
*   For amplifiers with a single dominant pole, $A_{mid} \times f_H \approx GBW$.
*   This means if you increase the gain, the bandwidth will decrease proportionally, and vice-versa, to maintain a constant GBW.

### Practice Questions and Exercises:

**Question 1:**
Explain the primary reasons for the reduction in gain at low frequencies and high frequencies for a BJT differential amplifier. Identify the specific circuit components responsible for these effects.

**Answer:**
*   **Low Frequencies:** Gain reduction is due to the impedance of **coupling capacitors** (blocking the AC signal from entering the amplifier) and **bypass capacitors** (bypassing the emitter resistor, thereby reducing AC gain). As frequency decreases, the impedance of these capacitors ($1/\omega C$) increases, leading to signal attenuation.
*   **High Frequencies:** Gain reduction is due to the impedance of **parasitic capacitances** within the BJT ( $C_{be}$, $C_{bc}$, $C_{ce}$) and stray capacitances. The **Miller effect**, caused by $C_{bc}$ and the inverting gain, significantly increases the effective input capacitance ($C_{miller} = C_{bc}(1-A_v)$), creating a low-impedance path for the AC signal at high frequencies, thus shunting the signal and reducing gain.

**Question 2:**
What is the Miller effect, and how does it impact the high-frequency response of a differential amplifier?

**Answer:**
The Miller effect is the phenomenon where a capacitance connected between the input and output terminals of an inverting amplifier appears as a much larger capacitance at the input terminals. This is because any change in the output voltage is coupled back to the input through the capacitance. The effective capacitance seen at the input is $C_{miller} = C_{bc}(1 - A_v)$, where $A_v$ is the voltage gain. This increased capacitance at the input significantly lowers the input impedance at higher frequencies, causing the amplifier's gain to roll off prematurely.

**Question 3:**
If a differential amplifier has a mid-band gain of 100 and an upper cutoff frequency ($f_H$) of 1 MHz, what is its approximate Gain-Bandwidth Product (GBW)? If the mid-band gain is increased to 200, what would be the new $f_H$, assuming the GBW remains constant?

**Answer:**
*   **GBW Calculation:**
    $GBW = A_{mid} \times f_H$
    $GBW = 100 \times 1 \text{ MHz} = 100 \text{ MHz}$
*   **New $f_H$:**
    Assuming the GBW remains constant at 100 MHz, with a new mid-band gain of 200:
    $f_H = \frac{GBW}{A_{mid\_new}}$
    $f_H = \frac{100 \text{ MHz}}{200} = 0.5 \text{ MHz}$

**Question 4 (Conceptual):**
A differential amplifier is designed with large coupling capacitors to ensure a very low lower cutoff frequency ($f_L$). How might this design choice indirectly affect the upper cutoff frequency ($f_H$) or overall speed of the amplifier?

**Answer:**
While not directly related, the components that determine $f_L$ (coupling and bypass capacitors) are typically external and can be chosen independently to a large extent. However, the design for a very low $f_L$ might involve larger capacitance values. The core speed limitations of the amplifier are primarily dictated by the internal parasitic capacitances and the transistor's transition frequency ($f_T$), which determine $f_H$. There isn't a direct inverse relationship between the size of external coupling capacitors and $f_H$. However, optimizing for extremely low $f_L$ might involve trade-offs in overall circuit design that could impact the high-frequency performance or lead to compromises in other areas, but not a direct causal link via the capacitance value itself.

### Important Points to Remember:

*   **Frequency response is crucial for signal integrity.**
*   **Low-frequency limitations are primarily due to coupling and bypass capacitors.**
*   **High-frequency limitations are primarily due to parasitic internal capacitances ($C_{be}, C_{bc}$) and the Miller effect.**
*   **The Miller effect significantly increases the effective input capacitance.**
*   **The frequency response curve plots Gain (dB) vs. Frequency (log scale).**
*   **$f_L$ and $f_H$ mark the -3 dB points where gain drops to 70.7% of mid-band gain.**
*   **GBW is a useful metric, indicating the trade-off between gain and bandwidth.**
*   **Understanding these concepts is essential for selecting and using differential amplifiers in various applications.**

### Alignment with Course Outcomes:

*   **CO1 (Summarize concepts of operational amplifiers and differential amplifier configurations):** Understanding the frequency response curve is a key aspect of summarizing differential amplifier behavior.
*   **CO2 (Design operational amplifier circuits for various applications):** Knowledge of frequency response is vital for designing circuits that operate within a desired frequency range. For example, if an application requires high-speed operation, one must select an amplifier with a high $f_H$ and consider the impact of Miller capacitance.
*   **CO3 (Choose integrated circuit chips for various linear circuit applications):** Data sheets for ICs often provide frequency response information (e.g., GBW, $f_H$ for a specific gain). This knowledge helps in selecting appropriate chips.
*   **CO4 (Implement various applications using specific integrated circuit chips):** When building circuits, understanding the frequency limitations of the chosen ICs is essential for successful implementation and troubleshooting.

This concludes the study notes on the frequency response curve of BJT differential amplifiers. Remember to consult the recommended textbooks for more detailed derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
