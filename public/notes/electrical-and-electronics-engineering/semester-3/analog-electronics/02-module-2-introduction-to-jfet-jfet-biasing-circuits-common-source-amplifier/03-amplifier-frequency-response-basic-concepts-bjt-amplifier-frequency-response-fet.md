---
title: "Amplifier Frequency Response  – Basic concepts – BJT amplifier Frequency response – FET amplifier Frequency Response"
subject: "ANALOG ELECTRONICS"
module: "Module 2: Introduction to JFET  – JFET biasing circuits – Common Source Amplifier"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b5f"
status: "completed"
scrapedAt: "2026-05-23T16:10:53.149Z"
---
Sure, let's dive into the Amplifier Frequency Response for BJT and FET amplifiers.

## ANALOG ELECTRONICS - Module 2: Introduction to JFET – JFET Biasing Circuits – Common Source Amplifier

### Topic: Amplifier Frequency Response – Basic Concepts – BJT Amplifier Frequency Response – FET Amplifier Frequency Response

---

### 1. Basic Concepts of Amplifier Frequency Response

This section lays the groundwork for understanding how amplifiers perform at different frequencies.

**1.1 What is Frequency Response?**

*   **Definition:** Frequency response describes how an amplifier's gain and phase shift vary with the input signal frequency.
*   **Importance:** Real-world signals are rarely pure sine waves. They contain a spectrum of frequencies. An amplifier must amplify all these frequencies effectively to reproduce the original signal without distortion.
*   **Graphical Representation:** Frequency response is typically plotted as:
    *   **Gain vs. Frequency (Bode Plot):** Shows the voltage gain (or power gain) on a logarithmic scale (dB) against frequency on a logarithmic scale.
    *   **Phase Shift vs. Frequency:** Shows the phase difference between the input and output signals against frequency.

**1.2 Key Concepts and Definitions**

*   **Bandwidth (BW):** The range of frequencies over which an amplifier operates effectively. It's usually defined between the lower and upper cutoff frequencies.
*   **Cutoff Frequency ($f_L$ and $f_H$):**
    *   **Lower Cutoff Frequency ($f_L$):** The frequency below which the amplifier's gain drops significantly.
    *   **Upper Cutoff Frequency ($f_H$):** The frequency above which the amplifier's gain drops significantly.
    *   **Definition:** These frequencies are typically defined as the points where the amplifier's output power is half of its mid-band power, or equivalently, where the voltage gain drops to $0.707$ times its mid-band value (a drop of 3 dB).
*   **Mid-band Frequency Range:** The range of frequencies where the amplifier's gain is relatively constant.
*   **3 dB Bandwidth:** The bandwidth defined by the lower and upper cutoff frequencies.
*   **Gain-Bandwidth Product (GBWP):** For many amplifiers, the product of mid-band gain and bandwidth is approximately constant. This is a crucial parameter for amplifier selection.
*   **Roll-off:** The rate at which the amplifier's gain decreases outside the mid-band range. It's typically expressed in dB per decade or dB per octave.

**1.3 Why Does Gain Vary with Frequency?**

The variation in amplifier gain with frequency is primarily due to the presence of **internal capacitances** within the active devices (BJTs and FETs) and **external coupling and bypass capacitors** in the amplifier circuit.

*   **Internal Capacitances:**
    *   **BJTs:** Base-Emitter capacitance ($C_{be}$), Base-Collector capacitance ($C_{bc}$), Collector-Emitter capacitance ($C_{ce}$).
    *   **FETs:** Gate-Source capacitance ($C_{gs}$), Gate-Drain capacitance ($C_{gd}$), Drain-Source capacitance ($C_{ds}$).
*   **External Capacitances:**
    *   **Coupling Capacitors ($C_C$):** Used to block DC bias and pass AC signals between stages or to the load. They act as series impedances.
    *   **Bypass Capacitors ($C_E$ or $C_S$):** Used to shunt AC signals to ground around emitter or source resistors, thereby increasing AC gain in the mid-band. They act as parallel impedances.

**1.4 The Effect of Capacitors on Frequency Response**

Capacitors have an impedance that is inversely proportional to frequency: $X_C = \frac{1}{2\pi f C}$.

*   **At Low Frequencies:**
    *   **Coupling Capacitors:** Their impedance ($X_C$) becomes large, forming a voltage divider with the amplifier's input impedance, reducing the signal passed to the next stage. This causes the gain to drop.
    *   **Bypass Capacitors:** Their impedance ($X_C$) becomes large, preventing them from effectively bypassing the emitter/source resistor. The unbypassed portion of the resistor reduces AC gain, causing the gain to drop.
*   **At High Frequencies:**
    *   **Internal Capacitances:** Their impedance ($X_C$) becomes small, acting as a low-impedance path.
        *   For $C_{be}$ and $C_{gs}$, this can lead to shunting of the input signal.
        *   For $C_{bc}$ (Miller effect) and $C_{gd}$, this creates a feedback path from the output to the input, reducing the overall gain.
    *   **Stray Capacitances:** Unintended parasitic capacitances between components and traces also become significant at high frequencies, contributing to gain reduction.

---

### 2. BJT Amplifier Frequency Response

This section details how internal and external capacitances affect the frequency response of BJT amplifiers.

**2.1 Sources of Capacitance in BJT Amplifiers**

*   **Internal Capacitances (Semiconductor Junction Capacitances):**
    *   **Base-Emitter Capacitance ($C_{be}$):**
        *   Composed of diffusion capacitance ($C_d$) and junction capacitance ($C_j$) across the B-E junction.
        *   $C_d$ dominates at higher currents and is proportional to the current.
        *   $C_j$ is the depletion capacitance of the reverse-biased junction.
    *   **Base-Collector Capacitance ($C_{bc}$):**
        *   Primarily the depletion capacitance ($C_j$) of the reverse-biased B-C junction.
        *   This capacitance is critical because it is amplified by the circuit's gain (Miller Effect).
*   **External Capacitances:**
    *   **Coupling Capacitors ($C_{C1}, C_{C2}$):** Input coupling capacitor and output coupling capacitor.
    *   **Emitter Bypass Capacitor ($C_E$):** Bypasses the emitter resistor ($R_E$) for AC signals.
    *   **Stray Capacitances:** Capacitances between component leads, wires, and PC board traces.

**2.2 Low-Frequency Response of BJT Amplifiers**

*   **Analysis Approach:** At low frequencies, internal capacitances have high impedance and can be considered open circuits. External capacitors ($C_{C1}, C_{C2}, C_E$) have significant impedance and are the dominant factors.
*   **Lower Cutoff Frequency ($f_L$) Determination:**
    *   Each capacitor ($C_{C1}, C_{C2}, C_E$) creates its own lower cutoff frequency.
    *   The overall low-frequency response is determined by the *highest* of these individual cutoff frequencies.
    *   **$f_{CL1}$ (due to $C_{C1}$):** Determined by the series combination of $C_{C1}$ and the input impedance of the amplifier ($Z_{in}$). $f_{CL1} \approx \frac{1}{2\pi R_{in\_total} C_{C1}}$, where $R_{in\_total}$ is the equivalent resistance seen by $C_{C1}$.
    *   **$f_{CLE}$ (due to $C_E$):** Determined by the parallel combination of $R_E$ and the parallel resistance seen looking into the emitter ($r_e' + R_E'$). $f_{CLE} \approx \frac{1}{2\pi (R_E || (r_e' + R_E')) C_E}$.
    *   **$f_{CL2}$ (due to $C_{C2}$):** Determined by the series combination of $C_{C2}$ and the load impedance ($R_L$). $f_{CL2} \approx \frac{1}{2\pi (R_S + R_{out}) C_{C2}}$, where $R_S$ is the source resistance.
*   **Behavior:** The gain starts to drop below the mid-band gain as frequency decreases. The rate of drop is typically 20 dB/decade for each dominant pole (each capacitor creating a cutoff frequency).

**2.3 High-Frequency Response of BJT Amplifiers**

*   **Analysis Approach:** At high frequencies, external coupling and bypass capacitors have very low impedance and can be considered short circuits. Internal capacitances ($C_{be}, C_{bc}$) become significant and cause the gain to drop.
*   **Miller Effect:**
    *   The base-collector capacitance ($C_{bc}$) is connected between the input (base) and output (collector) of the common-emitter amplifier.
    *   Due to the signal inversion, a signal at the output is fed back to the input.
    *   This feedback current through $C_{bc}$ is amplified by the circuit's gain ($A_v$).
    *   The effective input capacitance is increased by a factor of $(1 - A_v)$, leading to the Miller capacitance: $C_M = C_{bc}(1 - A_v)$.
    *   This significantly lowers the upper cutoff frequency ($f_H$) because it appears as a large capacitance in parallel with the amplifier's input.
*   **Upper Cutoff Frequency ($f_H$) Determination:**
    *   The high-frequency response is primarily determined by the combined effect of $C_{be}$ and the Miller capacitance $C_M$.
    *   These appear in parallel with the amplifier's input resistance ($R_{in}$).
    *   The upper cutoff frequency ($f_H$) is approximately: $f_H \approx \frac{1}{2\pi (R_{in} \cdot (C_{be} + C_{bc}(1-A_v)))}$.
    *   A more accurate analysis considers the entire circuit's high-frequency behavior, often involving "poles" associated with different capacitive paths. The highest of these poles determines the overall $f_H$.
*   **Behavior:** The gain starts to drop above the mid-band frequency. The rate of drop is typically 20 dB/decade for each dominant pole.

**2.4 Mid-band Gain of BJT Amplifiers**

*   **Definition:** The gain in the frequency range where all coupling and bypass capacitors act as short circuits and all internal capacitances act as open circuits.
*   **For Common-Emitter Amplifier:** $A_v_{mid} \approx -\frac{R_C || R_L}{r_e'}$, where $R_C$ is the collector resistor and $r_e'$ is the small-signal emitter resistance.

**2.5 Gain-Bandwidth Product (GBWP) for BJT Amplifiers**

*   **Concept:** For a single-stage amplifier, the product of mid-band gain and the upper cutoff frequency is approximately constant.
*   **$GBWP \approx |A_v_{mid}| \cdot f_H$.**
*   **Significance:** If you increase the gain of a BJT amplifier, its bandwidth will decrease proportionally, and vice versa.

**Example (BJT Amplifier):**

Consider a common-emitter amplifier with $A_{v,mid} = -100$ and $f_H = 100 \, \text{kHz}$.
The GBWP is approximately $|-100| \times 100 \, \text{kHz} = 10 \, \text{MHz}$.
If we redesign the amplifier to have a mid-band gain of $-200$, the new upper cutoff frequency will be approximately $f_H' \approx \frac{10 \, \text{MHz}}{200} = 50 \, \text{kHz}$.

**Important Points to Remember (BJT):**

*   Low frequencies are affected by external coupling and bypass capacitors.
*   High frequencies are affected by internal junction capacitances, especially $C_{bc}$ due to the Miller effect.
*   $f_L$ is determined by the highest individual cutoff frequency from each capacitor.
*   $f_H$ is dominated by the input circuitry's response to internal capacitances.
*   Miller effect significantly increases the effective input capacitance at high frequencies.

---

### 3. FET Amplifier Frequency Response

This section explores the frequency response of FET amplifiers, highlighting their similarities and differences with BJT amplifiers.

**3.1 Sources of Capacitance in FET Amplifiers**

*   **Internal Capacitances (Semiconductor Junction Capacitances):**
    *   **Gate-Source Capacitance ($C_{gs}$):** Capacitance between the gate and source terminals.
    *   **Gate-Drain Capacitance ($C_{gd}$):** Capacitance between the gate and drain terminals. This is the equivalent of $C_{bc}$ in BJTs and is also subject to the Miller effect.
    *   **Drain-Source Capacitance ($C_{ds}$):** Capacitance between the drain and source terminals. Usually less significant for frequency response analysis.
    *   For MOSFETs, these are primarily oxide capacitances (gate-to-channel, gate-to-bulk).
*   **External Capacitances:**
    *   **Coupling Capacitors ($C_{C1}, C_{C2}$):** Input and output coupling capacitors.
    *   **Source Bypass Capacitor ($C_S$):** Bypasses the source resistor ($R_S$) for AC signals in a common-source amplifier.
    *   **Stray Capacitances:** Similar to BJTs.

**3.2 Low-Frequency Response of FET Amplifiers**

*   **Analysis Approach:** Similar to BJTs, at low frequencies, internal capacitances have high impedance. External capacitors ($C_{C1}, C_{C2}, C_S$) dominate.
*   **Lower Cutoff Frequency ($f_L$) Determination:**
    *   Each external capacitor creates its own lower cutoff frequency.
    *   The overall $f_L$ is the highest of these individual cutoff frequencies.
    *   **$f_{CL1}$ (due to $C_{C1}$):** Determined by the series combination of $C_{C1}$ and the input impedance of the FET amplifier ($Z_{in}$). $f_{CL1} \approx \frac{1}{2\pi R_{in\_total} C_{C1}}$.
    *   **$f_{CLS}$ (due to $C_S$):** Determined by the parallel combination of $R_S$ and the parallel resistance seen looking into the source. For a JFET, this is roughly $R_S || R_{S\_parallel}$. For a MOSFET, the source resistor is often grounded ($R_S=0$), so bypass is usually not an issue unless there's an unbypassed source resistor. $f_{CLS} \approx \frac{1}{2\pi (R_S || R_{S\_parallel}) C_S}$.
    *   **$f_{CL2}$ (due to $C_{C2}$):** Determined by the series combination of $C_{C2}$ and the load impedance ($R_L$). $f_{CL2} \approx \frac{1}{2\pi (R_S + R_{out}) C_{C2}}$.
*   **Behavior:** Gain drops as frequency decreases, with a rate of approximately 20 dB/decade per dominant pole.

**3.3 High-Frequency Response of FET Amplifiers**

*   **Analysis Approach:** At high frequencies, external capacitors act as short circuits. Internal capacitances ($C_{gs}, C_{gd}$) become significant.
*   **Miller Effect in FETs:**
    *   The gate-drain capacitance ($C_{gd}$) is connected between the input (gate) and output (drain) of the common-source amplifier.
    *   Similar to BJTs, this capacitance causes a feedback effect.
    *   The effective input capacitance is increased by the Miller capacitance: $C_M = C_{gd}(1 - A_v)$. Note that in FET common-source amplifiers, $A_v$ is negative, so $(1-A_v)$ is greater than 1.
*   **Upper Cutoff Frequency ($f_H$) Determination:**
    *   The high-frequency response is determined by the combined effect of $C_{gs}$ and the Miller capacitance $C_M$.
    *   These appear in parallel with the amplifier's input resistance ($Z_{in}$).
    *   The upper cutoff frequency ($f_H$) is approximately: $f_H \approx \frac{1}{2\pi (Z_{in} \cdot (C_{gs} + C_{gd}(1-A_v)))}$.
    *   A more rigorous analysis considers the circuit's poles and zeros.
*   **Behavior:** Gain drops as frequency increases, with a rate of approximately 20 dB/decade per dominant pole.

**3.4 Mid-band Gain of FET Amplifiers**

*   **Definition:** The gain in the frequency range where external capacitors are shorts and internal capacitances are opens.
*   **For Common-Source Amplifier (JFET/MOSFET):** $A_v_{mid} \approx -g_m R_D'$, where $g_m$ is the transconductance and $R_D'$ is the equivalent drain resistance ($R_D || R_L$ for JFETs and MOSFETs with drain resistor $R_D$).

**3.5 Gain-Bandwidth Product (GBWP) for FET Amplifiers**

*   **Concept:** Similar to BJTs, the product of mid-band gain and bandwidth is approximately constant.
*   **$GBWP \approx |A_v_{mid}| \cdot f_H$.**
*   **Significance:** Higher gain implies lower bandwidth, and vice versa.

**Example (FET Amplifier):**

Consider a common-source FET amplifier with $A_{v,mid} = -50$ and $f_H = 200 \, \text{kHz}$.
The GBWP is approximately $|-50| \times 200 \, \text{kHz} = 10 \, \text{MHz}$.
If we want to achieve a mid-band gain of $-100$, the new upper cutoff frequency will be $f_H' \approx \frac{10 \, \text{MHz}}{100} = 100 \, \text{kHz}$.

**Important Points to Remember (FET):**

*   Low frequencies are affected by external coupling and bypass capacitors.
*   High frequencies are affected by internal capacitances, especially $C_{gd}$ due to the Miller effect.
*   The analysis for low-frequency cutoff ($f_L$) and high-frequency cutoff ($f_H$) is conceptually similar to BJTs, but involves different capacitance values and input/output impedances.
*   FETs generally have lower internal capacitances than BJTs, potentially leading to higher bandwidths for equivalent gains.

---

### 4. Comparison: BJT vs. FET Amplifier Frequency Response

| Feature               | BJT Amplifier                                   | FET Amplifier                                     |
| :-------------------- | :---------------------------------------------- | :------------------------------------------------ |
| **Dominant Capacitances** | $C_{be}, C_{bc}$ (internal), $C_{C1}, C_{E}, C_{C2}$ (external) | $C_{gs}, C_{gd}$ (internal), $C_{C1}, C_{S}, C_{C2}$ (external) |
| **Miller Effect**     | Significant due to $C_{bc}$                     | Significant due to $C_{gd}$                       |
| **Low-Frequency Issues** | External capacitors ($C_{C1}, C_E, C_{C2}$)     | External capacitors ($C_{C1}, C_S, C_{C2}$)       |
| **High-Frequency Issues** | Internal capacitances, especially $C_{bc}$      | Internal capacitances, especially $C_{gd}$        |
| **Typical $f_H$**     | Generally lower for comparable gain           | Generally higher for comparable gain              |
| **Input Impedance**   | Relatively low ($r_e'$ dependent)               | Relatively high (gate impedance)                  |
| **$C_{be}$ vs. $C_{gs}$** | $C_{be}$ often larger and current-dependent   | $C_{gs}$ often smaller, voltage-dependent (MOSFET) |
| **$C_{bc}$ vs. $C_{gd}$** | $C_{bc}$ can be significant, voltage-dependent | $C_{gd}$ can be significant, voltage-dependent    |

---

### 5. Practice Questions and Exercises

**Question 1:**
A common-emitter BJT amplifier has a mid-band voltage gain of -150. If its upper cutoff frequency is 50 kHz, what is the approximate gain-bandwidth product (GBWP)? If the mid-band gain is increased to -300, what is the new approximate upper cutoff frequency?

**Answer 1:**
*   GBWP = $|A_{v,mid}| \times f_H = |-150| \times 50 \, \text{kHz} = 7500 \, \text{kHz} = 7.5 \, \text{MHz}$.
*   New $f_H' = \frac{GBWP}{|A_{v,mid}'|} = \frac{7.5 \, \text{MHz}}{300} = 25 \, \text{kHz}$.

**Question 2:**
List the primary internal capacitances that affect the high-frequency response of a JFET common-source amplifier. Which of these is most critical for the Miller effect, and why?

**Answer 2:**
The primary internal capacitances are $C_{gs}$, $C_{gd}$, and $C_{ds}$.
$C_{gd}$ is most critical for the Miller effect because it is connected between the input (gate) and output (drain) terminals. The inversion of the signal at the drain causes this capacitance to appear much larger at the input.

**Question 3:**
Explain how a bypass capacitor ($C_E$) affects the low-frequency response of a common-emitter BJT amplifier. What happens to the gain as the frequency decreases and the impedance of $C_E$ increases?

**Answer 3:**
A bypass capacitor ($C_E$) is used in parallel with the emitter resistor ($R_E$) to shunt AC signals to ground.
*   At mid-band frequencies, $C_E$ has very low impedance, effectively shorting out $R_E$. This increases the AC gain significantly compared to an amplifier without a bypass capacitor.
*   As the frequency decreases, the impedance of $C_E$ ($X_{CE} = \frac{1}{2\pi f C_E}$) increases.
*   When $X_{CE}$ becomes comparable to the parallel resistance seen into the emitter ($r_e'$), the bypass is no longer perfect. A portion of the AC signal appears across $R_E$, which reduces the AC voltage gain.
*   As frequency continues to decrease, $X_{CE}$ becomes much larger than the emitter impedance, and the gain drops. This contributes to the lower cutoff frequency ($f_L$) of the amplifier.

**Question 4:**
What is the main difference in the origin of internal capacitances between BJTs and MOSFETs?

**Answer 4:**
*   **BJTs:** Internal capacitances ($C_{be}, C_{bc}$) are primarily **junction capacitances** (depletion capacitance) and **diffusion capacitances**, which are related to the charge stored in the depletion regions and the transistor's operating current.
*   **MOSFETs:** Internal capacitances ($C_{gs}, C_{gd}$) are primarily **oxide capacitances** formed by the gate insulator (silicon dioxide) and the semiconductor channel. These are largely independent of current and more dependent on device geometry and applied voltage.

---

### 6. Important Points to Remember (Overall)

*   **Frequency Response is Crucial:** Amplifiers are frequency-sensitive due to reactive components (capacitors).
*   **Low-Frequency Limitations:** Caused by external coupling and bypass capacitors whose impedance increases at low frequencies.
*   **High-Frequency Limitations:** Caused by internal capacitances of the active device and stray capacitances whose impedance decreases at high frequencies.
*   **Miller Effect:** Significantly boosts the effective input capacitance due to feedback through the device's feedback capacitance ($C_{bc}$ or $C_{gd}$), drastically reducing bandwidth.
*   **Cutoff Frequencies ($f_L, f_H$):** Define the bandwidth, where gain drops by 3 dB.
*   **Roll-off:** Gain decreases at 20 dB/decade per dominant pole outside the mid-band.
*   **Gain-Bandwidth Product (GBWP):** A key parameter indicating the trade-off between gain and bandwidth.
*   **BJT vs. FET:** While the concepts are similar, the specific capacitance values and their dependencies differ, leading to performance variations. FETs often have better high-frequency performance due to generally lower internal capacitances.

---

This comprehensive set of notes covers the basic concepts of amplifier frequency response, detailing the effects of capacitances on BJT and FET amplifiers, and includes practice questions to reinforce understanding. The information aligns with the learning outcomes and the general principles discussed in standard analog electronics textbooks.
