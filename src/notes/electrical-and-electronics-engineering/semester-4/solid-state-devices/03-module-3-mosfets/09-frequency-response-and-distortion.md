---
title: "frequency response and distortion"
subject: "SOLID STATE DEVICES"
module: "Module 3: MOSFETs "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f92"
status: "completed"
scrapedAt: "2026-05-23T16:18:52.350Z"
---
# SOLID STATE DEVICES - Module 3: MOSFETs
## Topic: Frequency Response and Distortion

This module explores the behavior of MOSFETs at varying frequencies and the impact of non-linearities on signal integrity. We will build upon the foundational understanding of MOSFETs and their DC operation to analyze their AC performance in amplifier circuits.

**Course Outcomes Addressed:**

*   **CO3: Design and analyze MOSFET amplifier circuits (Knowledge Level: K4)** - This topic directly contributes to understanding the limitations of MOSFET amplifiers at higher frequencies and the presence of distortion, crucial for designing robust circuits.

---

### 1. Frequency Response of MOSFET Amplifiers

The gain of a MOSFET amplifier is not constant across all frequencies. Capacitances within the MOSFET and external circuit components introduce frequency-dependent behavior.

**Key Concepts & Definitions:**

*   **Mid-band Frequency ($f_m$)**: The frequency range where the amplifier's gain is relatively constant and at its maximum value.
*   **Cutoff Frequencies ($f_{L}$ and $f_{H}$)**: Frequencies at which the amplifier's gain drops by 3 dB (approximately 0.707 times the mid-band gain) or the power is halved.
    *   **Low-Frequency Cutoff ($f_{L}$)**: Determined by coupling, bypass, and stray capacitances. Below $f_L$, the gain starts to decrease.
    *   **High-Frequency Cutoff ($f_{H}$)**: Determined by internal MOSFET capacitances (e.g., $C_{gs}$, $C_{gd}$) and parasitic capacitances. Above $f_H$, the gain starts to decrease.
*   **Bandwidth (BW)**: The range of frequencies over which the amplifier operates effectively, defined as $BW = f_{H} - f_{L}$. For amplifiers where $f_{L} \ll f_{H}$, the bandwidth is often approximated as $BW \approx f_{H}$.
*   **Bode Plot**: A graphical representation of the frequency response, showing gain (in dB) and phase shift versus frequency on a logarithmic scale.
*   **Dominant Pole**: In low-frequency analysis, the pole associated with the largest time constant, which primarily determines $f_L$.
*   **Miller Effect**: The apparent increase in the capacitance between the gate and source ($C_{gs}$) due to the capacitance between the gate and drain ($C_{gd}$) and the amplifier's voltage gain.

**Sources of Capacitance Affecting Frequency Response:**

1.  **Internal MOSFET Capacitances:**
    *   $C_{gs}$ (Gate-Source Capacitance): Capacitance between the gate and source terminals.
    *   $C_{gd}$ (Gate-Drain Capacitance): Capacitance between the gate and drain terminals.
    *   $C_{ds}$ (Drain-Source Capacitance): Capacitance between the drain and source terminals.
    *   $C_{gb}$ (Gate-Bulk Capacitance): Capacitance between the gate and bulk (substrate) terminals.

2.  **External Circuit Capacitances:**
    *   **Coupling Capacitances ($C_C$)**: Capacitors used to block DC bias from the signal path, connecting amplifier stages or input/output.
    *   **Bypass Capacitances ($C_B$)**: Capacitors used to shunt AC signals to ground, bypassing components like source resistors for AC signals.
    *   **Stray Capacitances**: Unintended capacitances due to wiring, component leads, and board layout.

**Low-Frequency Response Analysis:**

At low frequencies, the impedance of coupling and bypass capacitors becomes significant, leading to voltage division that reduces the amplifier's gain.

*   **Shunt Capacitances:** These capacitors appear in parallel with the amplifier's signal path. Their impedance is $1/(j\omega C)$. As frequency decreases, their impedance increases, creating a low-pass filter effect.
*   **Series Capacitances:** These capacitors appear in series with the signal path. Their impedance is $1/(j\omega C)$. As frequency decreases, their impedance increases, acting as a series impedance.

**Example (Low-Frequency Response - Common Source Amplifier with Source Resistor):**

Consider a common-source MOSFET amplifier with a source resistor $R_S$.

*   **Without Bypass Capacitor ($C_B$):** The source resistor $R_S$ provides negative feedback for AC signals, reducing the gain. The low-frequency cutoff is determined by the coupling capacitors ($C_{in}$, $C_{out}$) and the effective resistance at the source node.
*   **With Bypass Capacitor ($C_B$):** $C_B$ is placed in parallel with $R_S$. At low frequencies, $C_B$ has high impedance, and the gain reduction due to $R_S$ is significant. As frequency increases, the impedance of $C_B$ decreases, bypassing $R_S$ and increasing the gain towards the mid-band value.

The dominant time constant at low frequencies is usually determined by the largest product of resistance and capacitance at each coupling/bypass point. The low-frequency cutoff $f_L$ is generally related to these time constants.

*(Refer to Boylested & Nashelsky, Chapter 11 for detailed low-frequency analysis of BJT amplifiers which can be conceptually extended to MOSFETs.)*

**High-Frequency Response Analysis:**

At high frequencies, the internal capacitances of the MOSFET ($C_{gs}$, $C_{gd}$, $C_{ds}$) become significant. Their low impedances can cause signal degradation and reduce the gain.

*   **Miller Effect on $C_{gd}$**: The gate-drain capacitance ($C_{gd}$) is particularly important. In an inverting amplifier, a voltage variation at the drain is amplified and appears at the gate with an opposite polarity. This amplified voltage across $C_{gd}$ effectively increases the capacitance seen from the gate to ground. The Miller-multiplied capacitance is $C_M = C_{gd}(1 + |A_v|)$, where $A_v$ is the mid-band voltage gain. This significantly reduces the high-frequency cutoff.

**Example (High-Frequency Response - Common Source Amplifier):**

In a common-source amplifier, the input impedance at high frequencies is affected by $C_{gs}$ and the Miller-multiplied $C_{gd}$. The output impedance is affected by $C_{ds}$ and the output network.

The high-frequency cutoff ($f_H$) is often determined by the pole created by the input resistance ($R_{in}$) and the total input capacitance ($C_{in\_total} = C_{gs} + C_M$), and the pole created by the output resistance ($R_{out}$) and the output capacitance ($C_{out\_total}$).

$f_{H} \approx \frac{1}{2\pi R_{in} C_{in\_total}}$ (Dominant input pole)
$f_{H} \approx \frac{1}{2\pi R_{out} C_{out\_total}}$ (Dominant output pole)

The overall $f_H$ is typically determined by the *lowest* of these cutoff frequencies.

*(Refer to Sedra & Smith, Chapter 7.5 for a detailed analysis of MOSFET high-frequency behavior and the Miller effect.)*

**Bandwidth Extension Techniques:**

*   **Source Degeneration (for Common Source):** Adding a small unbypassed resistor ($R_S'$) in series with the MOSFET's source improves linearity and increases the high-frequency cutoff by reducing the Miller effect. This comes at the cost of reduced mid-band gain.
*   **Cascode Amplifiers:** Stacking a common-gate stage above a common-source stage effectively isolates the drain of the common-source MOSFET from the output, significantly reducing the Miller effect and increasing bandwidth.
*   **Peaking Circuits:** Introducing resonant circuits (e.g., RLC networks) can boost the gain in a specific frequency range, effectively extending the bandwidth or creating a desired frequency response.

---

### 2. Distortion in MOSFET Amplifiers

Distortion refers to any unwanted alteration of the input signal's waveform. In MOSFET amplifiers, distortion arises from non-linearities in the device characteristics and circuit operation.

**Key Concepts & Definitions:**

*   **Non-linearity**: The output is not directly proportional to the input.
*   **Harmonic Distortion**: Occurs when the non-linearity generates harmonics of the input signal frequency.
    *   **Second Harmonic Distortion ($HD_2$)**: The component at twice the input frequency ($2f_0$).
    *   **Third Harmonic Distortion ($HD_3$)**: The component at three times the input frequency ($3f_0$).
*   **Intermodulation Distortion (IMD)**: Occurs when signals with multiple frequencies are applied to a non-linear amplifier, producing new frequency components at the sum and difference of the input frequencies.
*   **Clipping**: Occurs when the input signal amplitude is too large, causing the output voltage to reach the power supply rails or the MOSFET to exit saturation.
*   **Cross-over Distortion**: Primarily seen in class B amplifiers, where there is a small dead zone as the output signal transitions between the positive and negative halves of the cycle.
*   **Total Harmonic Distortion (THD)**: A measure of the total power of all harmonic frequencies relative to the power of the fundamental frequency.
    $THD = \frac{\sqrt{V_{h2}^2 + V_{h3}^2 + V_{h4}^2 + ...}}{V_{h1}}$
    where $V_{h1}$ is the fundamental voltage, and $V_{h2}, V_{h3}, ...$ are the voltages of the second, third, etc., harmonics.

**Sources of Distortion in MOSFET Amplifiers:**

1.  **Non-linear Drain Current ($I_D$) vs. Gate-Source Voltage ($V_{GS}$) Characteristic:**
    The fundamental equation for $I_D$ in saturation is:
    $I_D = K(V_{GS} - V_{TH})^2$
    where $K = \frac{1}{2} \mu_n C_{ox} \frac{W}{L}$. This quadratic relationship is a primary source of harmonic distortion.

2.  **Non-linear Transconductance ($g_m$)**:
    $g_m = \frac{\partial I_D}{\partial V_{GS}} = 2K(V_{GS} - V_{TH})$
    Since $g_m$ depends on $V_{GS}$, it varies with the AC signal, leading to distortion.

3.  **Load Line Non-linearity**: The operating point and the slope of the load line on the MOSFET's output characteristics affect distortion. Choosing an optimal bias point is crucial.

4.  **Voltage-Dependent Capacitances**: Capacitances like $C_{gs}$ and $C_{gd}$ can vary with terminal voltages, contributing to frequency-dependent distortion.

5.  **Channel Length Modulation (Early Effect)**: While primarily affecting output resistance ($r_o$), it can also contribute to non-linearity, especially in circuits sensitive to output variations.

**Analyzing Distortion:**

*   **Taylor Series Expansion**: The drain current $I_D$ can be approximated using a Taylor series around the DC bias point $V_{GSQ}$:
    $i_d(t) \approx g_m v_{gs}(t) + \frac{1}{2} g_{m1} v_{gs}^2(t) + \frac{1}{24} g_{m3} v_{gs}^3(t) + ...$
    where $g_m$ is the small-signal transconductance at the quiescent point, $g_{m1} = \frac{\partial^2 I_D}{\partial V_{GS}^2}|_{V_{GSQ}}$, and $g_{m3} = \frac{\partial^3 I_D}{\partial V_{GS}^3}|_{V_{GSQ}}$.

    If the input signal is a sinusoid $v_{gs}(t) = V_{gs} \cos(\omega t)$, then:
    *   The term $g_m v_{gs}(t)$ produces the fundamental output component.
    *   The term $\frac{1}{2} g_{m1} v_{gs}^2(t) = \frac{1}{2} g_{m1} V_{gs}^2 \cos^2(\omega t) = \frac{1}{4} g_{m1} V_{gs}^2 (1 + \cos(2\omega t))$ produces a DC component and a second harmonic component ($HD_2$).
    *   The term $\frac{1}{6} g_{m3} v_{gs}^3(t) = \frac{1}{6} g_{m3} V_{gs}^3 \cos^3(\omega t) = \frac{1}{8} g_{m3} V_{gs}^3 (\cos(\omega t) + \cos(3\omega t))$ produces a fundamental component and a third harmonic component ($HD_3$).

*   **Harmonic Distortion Coefficients:**
    *   The amplitude of the second harmonic is proportional to $g_{m1}$.
    *   The amplitude of the third harmonic is proportional to $g_{m3}$.

    For $I_D = K(V_{GS} - V_{TH})^2$:
    $g_m = 2K(V_{GSQ} - V_{TH})$
    $g_{m1} = \frac{\partial}{\partial V_{GS}} [2K(V_{GS} - V_{TH})] |_{V_{GSQ}} = 2K$
    $g_{m3} = \frac{\partial}{\partial V_{GS}} [0] |_{V_{GSQ}} = 0$

    This means a simple square-law MOSFET exhibits only second-order harmonic distortion in its drain current characteristic. The magnitude of $HD_2$ is related to the input signal amplitude ($V_{gs}$) and the transconductance parameter ($K$).

    $HD_2 = \frac{\frac{1}{4} g_{m1} V_{gs}^2}{g_m V_{gs}} = \frac{g_{m1} V_{gs}}{4 g_m} = \frac{2K V_{gs}}{4 \cdot 2K(V_{GSQ} - V_{TH})} = \frac{V_{gs}}{4(V_{GSQ} - V_{TH})}$

*(Refer to Sedra & Smith, Chapter 8.3 for a detailed discussion on distortion in MOSFETs and bipolar transistors.)*

**Minimizing Distortion:**

*   **Proper Biasing**: Ensure the MOSFET operates well within its saturation region and avoid signal excursions into the cutoff or triode regions. Choosing a bias point where the transconductance is relatively stable can help.
*   **Small Signal Operation**: Keeping the input signal amplitude small relative to $V_{GSQ} - V_{TH}$ minimizes the contribution of higher-order terms in the Taylor expansion.
*   **Symmetrical Waveforms**: Techniques like push-pull amplifiers can cancel even-order harmonics.
*   **Negative Feedback**: Applying negative feedback reduces distortion, although it also reduces gain.
*   **Complementary Symmetry (Class AB/B Amplifiers)**: Used in power amplifiers, these configurations can reduce crossover distortion.
*   **Differential Amplifiers**: Offer good common-mode rejection and can be designed for low distortion.

---

### 3. Intermodulation Distortion (IMD)

IMD occurs when multiple signals are present at the input. If the amplifier is non-linear, these signals will interact, producing new frequencies.

**Example:**

If the input signals are $v_1(t) = V_1 \cos(\omega_1 t)$ and $v_2(t) = V_2 \cos(\omega_2 t)$, and the amplifier's transfer function is non-linear, the output will contain components at:
*   $\omega_1, \omega_2$ (fundamental frequencies)
*   $2\omega_1, 2\omega_2$ (second harmonics)
*   $3\omega_1, 3\omega_2$ (third harmonics)
*   $\omega_1 \pm \omega_2$ (sum and difference frequencies)
*   $2\omega_1 \pm \omega_2, \omega_1 \pm 2\omega_2$ (second-order intermodulation products)
*   $3\omega_1 \pm \omega_2, \omega_1 \pm 3\omega_2$ (third-order intermodulation products)

Third-order intermodulation products ($2\omega_1 - \omega_2$ and $2\omega_2 - \omega_1$) are often the most problematic as they can fall close to the original signal frequencies, leading to audible distortion in audio systems.

*(Refer to Bell, Chapter 10 for a discussion on amplifier distortion and its measurement.)*

---

### 4. Practice Questions & Exercises

**Question 1:**
A common-source MOSFET amplifier uses a MOSFET with $K = 5$ mA/V$^2$ and $V_{TH} = 1.5$ V. The quiescent gate-source voltage is $V_{GSQ} = 3.5$ V.
(a) Calculate the quiescent drain current $I_{DQ}$.
(b) Calculate the small-signal transconductance $g_m$ at the quiescent point.
(c) If the input signal is a sine wave $v_{gs}(t) = 1 \sin(2\pi \cdot 10^3 t)$ V, calculate the amplitude of the fundamental component and the second harmonic component in the drain current.

**Answer 1:**
(a) $I_{DQ} = K(V_{GSQ} - V_{TH})^2 = 5 \times 10^{-3} (3.5 - 1.5)^2 = 5 \times 10^{-3} (2)^2 = 20$ mA.
(b) $g_m = 2K(V_{GSQ} - V_{TH}) = 2 \times 5 \times 10^{-3} (3.5 - 1.5) = 10 \times 10^{-3} \times 2 = 20$ mS.
(c) Fundamental component amplitude = $g_m V_{gs} = 20 \times 10^{-3} \times 1 = 20$ mA.
Second harmonic component amplitude = $\frac{1}{4} g_{m1} V_{gs}^2$.
$g_{m1} = 2K = 2 \times 5 \times 10^{-3} = 10 \times 10^{-3}$ S/V.
Second harmonic amplitude = $\frac{1}{4} \times 10 \times 10^{-3} \times (1)^2 = 2.5 \times 10^{-3}$ A = 2.5 mA.

---

**Question 2:**
Explain the Miller effect and how it impacts the high-frequency response of a MOSFET amplifier. How can the Miller effect be minimized?

**Answer 2:**
The Miller effect is the apparent increase in the capacitance between two nodes of an amplifier if there is a voltage gain between those nodes. In a MOSFET amplifier, the gate-drain capacitance ($C_{gd}$) is amplified by the amplifier's voltage gain ($A_v$). The effective capacitance seen between the gate and source terminals becomes $C_{gs} + C_{gd}(1+|A_v|)$. This significantly reduces the high-frequency cutoff ($f_H$) because the input impedance at high frequencies is dominated by this larger capacitance.

The Miller effect can be minimized by:
*   **Reducing the voltage gain ($A_v$)**: This might not be practical as gain is often desired.
*   **Using a cascode amplifier configuration**: This configuration isolates the drain of the first stage from the output, effectively reducing the voltage swing across $C_{gd}$ and thus minimizing the Miller effect.
*   **Using source degeneration (a small unbypassed resistor in the source path)**: This reduces the overall voltage gain and can also improve linearity.

---

**Question 3:**
What is the primary source of harmonic distortion in a MOSFET operating in saturation with a square-law characteristic? How does the input signal amplitude affect the level of second harmonic distortion?

**Answer 3:**
The primary source of harmonic distortion in a MOSFET operating in saturation with a square-law characteristic is the quadratic relationship between drain current ($I_D$) and gate-source voltage ($V_{GS}$): $I_D = K(V_{GS} - V_{TH})^2$. This non-linear behavior inherently generates harmonic content when a sinusoidal input signal is applied.

The level of second harmonic distortion ($HD_2$) is directly proportional to the input signal amplitude ($V_{gs}$) and inversely proportional to the quiescent overdrive voltage ($V_{GSQ} - V_{TH}$). Specifically, $HD_2 \propto \frac{V_{gs}}{V_{GSQ} - V_{TH}}$. This means that as the input signal amplitude increases, the second harmonic distortion increases linearly, and as the DC bias is increased (resulting in a larger overdrive voltage), the second harmonic distortion decreases.

---

### 5. Important Points to Remember

*   **Frequency Response**: Governed by internal and external capacitances. Low frequencies are affected by coupling and bypass capacitors, while high frequencies are affected by internal MOSFET capacitances ($C_{gs}$, $C_{gd}$, $C_{ds}$).
*   **Cutoff Frequencies ($f_L, f_H$)**: Define the bandwidth of the amplifier.
*   **Miller Effect**: Significantly increases effective input capacitance ($C_{gd}(1+|A_v)|$) at high frequencies, reducing bandwidth.
*   **Distortion**: Arises from non-linearities in the MOSFET's transfer characteristics. The square-law relationship ($I_D \propto (V_{GS} - V_{TH})^2$) leads to harmonic distortion.
*   **Harmonic Distortion**: Second harmonic distortion is dominant for ideal square-law devices. Third harmonic distortion becomes significant with deviations from the square-law characteristic or specific circuit configurations.
*   **Minimizing Distortion**: Proper biasing, small signal operation, negative feedback, and specific circuit topologies (like cascodes or differential amplifiers) are key.
*   **Bandwidth Extension**: Techniques like source degeneration and cascode configurations can improve high-frequency performance by reducing the Miller effect.

---

This comprehensive set of notes should provide a solid foundation for understanding the frequency response and distortion characteristics of MOSFET amplifiers, directly supporting the achievement of CO3. Remember to consult the provided textbooks for more in-depth explanations and derivations.
