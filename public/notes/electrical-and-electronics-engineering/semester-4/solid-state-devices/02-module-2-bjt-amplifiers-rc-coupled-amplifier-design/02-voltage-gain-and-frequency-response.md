---
title: "Voltage gain and frequency response"
subject: "SOLID STATE DEVICES"
module: "Module 2: BJT amplifiers: RC coupled amplifier –Design"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f82"
status: "completed"
scrapedAt: "2026-05-23T16:18:40.449Z"
---
# Module 2: BJT Amplifiers: RC Coupled Amplifier – Design

## Topic: Voltage Gain and Frequency Response

This module focuses on the design and analysis of RC-coupled BJT amplifiers, with a particular emphasis on understanding their voltage gain and frequency response. We will delve into the small-signal analysis and how various circuit components influence the amplifier's performance across different frequencies.

---

### Learning Outcomes:

*   **Understand the concept of voltage gain in BJT amplifiers:** Define voltage gain, its significance, and factors affecting it.
*   **Analyze the frequency response of RC-coupled BJT amplifiers:** Explain the behavior of the amplifier at low, mid, and high frequencies.
*   **Identify and analyze the parasitic capacitances and their impact on high-frequency response:** Understand the role of $C_\mu$, $C_e$, $C_c$, $C_s$, and $C_L$.
*   **Determine the lower and upper cutoff frequencies ($f_L$ and $f_H$):** Calculate these critical frequencies based on circuit parameters.
*   **Calculate the bandwidth of the amplifier:** Understand how bandwidth is related to cutoff frequencies.
*   **Understand the concept of the mid-band gain:** Define and calculate the voltage gain in the mid-frequency range.
*   **Design an RC-coupled amplifier for a desired voltage gain and frequency response:** Apply theoretical knowledge to practical design scenarios.

---

### Key Concepts and Definitions:

*   **Voltage Gain ($A_v$):** The ratio of the output voltage to the input voltage of an amplifier.
    $A_v = \frac{V_{out}}{V_{in}}$
    A higher voltage gain means the amplifier can amplify the input signal more significantly.

*   **Frequency Response:** The variation of the amplifier's voltage gain with the frequency of the input signal. It is typically plotted as gain versus frequency on a logarithmic scale.

*   **RC-Coupled Amplifier:** A common amplifier configuration where coupling capacitors ($C_C$) are used to block DC components and pass AC signals between amplifier stages or between the signal source and the amplifier.

*   **Mid-band Frequency Range:** The frequency range where the amplifier's voltage gain is relatively constant and at its maximum value. This is the desired operating range for most amplifier applications.

*   **Lower Cutoff Frequency ($f_L$):** The frequency below which the voltage gain of the amplifier starts to decrease significantly due to the effects of coupling capacitors ($C_{C1}$, $C_{C2}$) and bypass capacitors ($C_E$).

*   **Upper Cutoff Frequency ($f_H$):** The frequency above which the voltage gain of the amplifier starts to decrease significantly due to the effects of internal parasitic capacitances of the BJT ($C_\mu$, $C_e$) and parasitic capacitances of the circuit ($C_s$, $C_L$).

*   **Bandwidth (BW):** The range of frequencies over which the amplifier provides a satisfactory gain. It is typically defined as the difference between the upper and lower cutoff frequencies:
    $BW = f_H - f_L$
    For most amplifiers, the bandwidth is approximated as $BW \approx f_H$, as $f_L$ is usually much smaller than $f_H$.

*   **Decibel (dB):** A logarithmic unit used to express the ratio of two values of a physical quantity, often power or intensity. For voltage gain, it is expressed as:
    $A_v(dB) = 20 \log_{10} |A_v|$
    A decrease of 3 dB from the mid-band gain corresponds to a gain of $0.707$ times the mid-band gain, or a decrease in signal amplitude by a factor of $\sqrt{2}$.

*   **Miller Effect:** The apparent increase in the capacitance between the input and output terminals of an active device (like a BJT or MOSFET) due to the gain of the device. This effect significantly impacts the high-frequency response by increasing the effective input capacitance, which in turn lowers the upper cutoff frequency. The effective capacitance is $C_{Miller} = C_{out} (1 + A_v)$, where $C_{out}$ is the capacitance across the output terminals and $A_v$ is the voltage gain.

---

### Analysis of RC-Coupled Amplifier Frequency Response:

The frequency response of an RC-coupled amplifier is divided into three regions:

1.  **Low-Frequency Response:** Dominated by the coupling capacitors ($C_{C1}$, $C_{C2}$) and the emitter bypass capacitor ($C_E$).
2.  **Mid-band Frequency Response:** Where the amplifier operates ideally, with coupling and bypass capacitors acting as short circuits and parasitic capacitances acting as open circuits.
3.  **High-Frequency Response:** Dominated by the internal parasitic capacitances of the BJT ($C_{be}$, $C_{ce}$ or $C_\pi$, $C_\mu$) and external stray capacitances ($C_s$, $C_L$).

---

#### 1. Low-Frequency Response:

At low frequencies, the reactances of the coupling capacitors ($X_{C_{C1}}$, $X_{C_{C2}}$) and the emitter bypass capacitor ($X_{C_E}$) become significant, opposing the AC signal.

*   **Coupling Capacitor $C_{C1}$ (Input Coupling):** Forms a high-pass filter with the input impedance of the amplifier ($Z_{in}$).
    $f_{L1} \approx \frac{1}{2 \pi R_1 C_{C1}}$ where $R_1$ is the equivalent resistance seen by $C_{C1}$ (typically $R_{source} || R_{B}$) and $C_{C1}$ is the input coupling capacitor. (Boylested & Nashelsky, Ch 12)

*   **Coupling Capacitor $C_{C2}$ (Output Coupling):** Forms a high-pass filter with the load resistance ($R_L$).
    $f_{L2} \approx \frac{1}{2 \pi R_2 C_{C2}}$ where $R_2$ is the equivalent resistance seen by $C_{C2}$ (typically $R_{out} || R_L$) and $C_{C2}$ is the output coupling capacitor. (Boylested & Nashelsky, Ch 12)

*   **Emitter Bypass Capacitor $C_E$:** Bypasses the emitter resistance ($R_E$) at AC. If $C_E$ is not present or too small, $R_E$ will reduce the mid-band gain (as seen in the common-emitter amplifier without emitter bypass). When $C_E$ is present, it bypasses $R_E$. At low frequencies, $X_{C_E}$ is large, so $R_E$ is not fully bypassed, reducing the gain. The bypass action becomes effective when $X_{C_E} \leq R_E / 10$. The lower cutoff frequency due to $C_E$ is approximately:
    $f_{LE} \approx \frac{1}{2 \pi R_E' C_E}$ where $R_E'$ is the equivalent resistance seen by $C_E$ (typically $R_E || (R_{in(stage)}/\beta)$). (Sedra & Smith, Ch 6)

The overall lower cutoff frequency ($f_L$) is determined by the highest of these individual low-frequency cutoff frequencies:
$f_L = \max(f_{L1}, f_{L2}, f_{LE})$

**Design Considerations for Low Frequencies:**
To ensure a flat frequency response down to a desired low-frequency limit ($f_{L(desired)}$), the capacitors should be chosen such that:
$C_{C1} \geq \frac{1}{2 \pi R_1 f_{L(desired)}}$
$C_{C2} \geq \frac{1}{2 \pi R_2 f_{L(desired)}}$
$C_E \geq \frac{1}{2 \pi R_E' f_{L(desired)}}$

---

#### 2. Mid-band Frequency Response:

In the mid-band frequency range, the reactances of coupling and bypass capacitors are negligible ($X_{C_{C1}} \approx 0$, $X_{C_{C2}} \approx 0$, $X_{C_E} \approx 0$). The parasitic capacitances of the BJT and the circuit are also negligible ($X_{C_\mu} \approx \infty$, $X_{C_{be}} \approx \infty$, $X_{C_s} \approx \infty$, $X_{C_L} \approx \infty$).

The small-signal equivalent circuit for the mid-band frequency is simplified. The voltage gain is primarily determined by the transistor's parameters ($r_e$, $\beta$) and the external resistors ($R_C$, $R_L$).

For a common-emitter amplifier with emitter resistor bypassed:
$A_{v(mid)} \approx -\frac{R_C || R_L}{r_e}$
where $r_e = \frac{V_T}{I_E}$ ($V_T$ is the thermal voltage, approximately 25mV at room temperature, $I_E$ is the DC emitter current). (Bell, Ch 7)

The negative sign indicates a phase inversion between the input and output signals.

**Example (Mid-band Gain):**
Consider a common-emitter amplifier with $R_C = 2.7 k\Omega$, $R_L = 10 k\Omega$, and $I_E = 1 mA$.
$r_e = \frac{25 mV}{1 mA} = 25 \Omega$.
$A_{v(mid)} \approx -\frac{2.7 k\Omega || 10 k\Omega}{25 \Omega} = -\frac{2.07 k\Omega}{25 \Omega} \approx -82.8$.

---

#### 3. High-Frequency Response:

At high frequencies, the parasitic capacitances of the BJT and the circuit become significant. These capacitances act as low-impedance paths for AC signals, causing a reduction in the amplifier's voltage gain.

*   **BJT Internal Capacitances:**
    *   **$C_{be}$ (or $C_\pi$):** Base-emitter junction capacitance. Forms a low-pass filter with the input resistance of the transistor ($r_\pi$).
    *   **$C_{ce}$ (or $C_\mu$):** Collector-base junction capacitance (also called $C_{cb}$ or $C_{bc}$ depending on convention). This is the most critical capacitance due to the Miller effect.

*   **External Stray Capacitances:**
    *   **$C_s$ (Source Capacitance):** Capacitance associated with the signal source.
    *   **$C_L$ (Load Capacitance):** Capacitance associated with the load connected to the output, including stray wiring and device capacitances at the load.

**The Miller Effect:**
The capacitance $C_{cb}$ ($C_\mu$) between the collector and base of the BJT is the primary cause of the high-frequency roll-off. Due to the high voltage gain ($A_v$) between the collector and base, this capacitance appears magnified at the input. The effective input capacitance due to the Miller effect is:
$C_{Miller} = C_{cb}(1 - A_v)$ (for $A_v$ as voltage gain, which is negative for CE amplifier, so $1 - A_v$ is $>1$)
A more accurate formulation is $C_{Miller} = C_{cb}(1 + |A_v|)$ if $A_v$ is the magnitude of the gain. (Millman & Halkias, Ch 17)
This significantly increases the input impedance at high frequencies, forming a low-pass filter with the source resistance ($R_s$) and the total input resistance ($R_{in(stage)}$).

**High-Frequency Cutoff ($f_H$) Calculation:**

There are several methods to approximate $f_H$:

*   **Approximation 1 (Dominant Pole Method):**
    The upper cutoff frequency $f_H$ is approximately determined by the pole introduced by the input circuit due to the Miller effect.
    $f_H \approx \frac{1}{2 \pi R_{eq} C_{eq}}$
    where $R_{eq}$ is the equivalent resistance seen by the equivalent capacitance $C_{eq}$.
    $R_{eq} \approx R_s || R_{in(stage)}$
    $C_{eq} \approx C_{be} + C_{cb}(1 + |A_v|)$
    $R_{in(stage)} = R_B || (\beta r_e)$ (where $R_B = R_{B1} || R_{B2}$)

    $f_H \approx \frac{1}{2 \pi (R_s || R_{in(stage)}) (C_{be} + C_{cb}(1 + |A_v|))}$

*   **Approximation 2 (Gain-Bandwidth Product):**
    This method uses the concept of the gain-bandwidth product ($GBW$), which is the frequency at which the gain drops to unity (0 dB). For a single-pole system, $GBW = f_H \times |A_v(mid)|$. This assumes the gain rolls off at -20 dB/decade after the mid-band.
    This is not directly used for calculating $f_H$ from component values but relates gain and bandwidth.

*   **Approximation 3 (Three-Pole Approximation - More Accurate):**
    The overall frequency response can be modeled by three dominant poles, each associated with a capacitor:
    *   $f_{p1} \approx \frac{1}{2 \pi (R_s || R_{in(stage)}) (C_{be} + C_{cb}(1+|A_v|))}$ (Input pole due to Miller effect)
    *   $f_{p2} \approx \frac{1}{2 \pi R_C C_{cb}}$ (Output pole, often less significant as $R_C$ is usually smaller than $R_{eq}$ at input)
    *   $f_{p3} \approx \frac{1}{2 \pi (R_C || R_L) C_L}$ (Output pole due to load capacitance)

    The upper cutoff frequency $f_H$ is then approximated using the "sum of squares" method or by considering the dominant pole:
    $f_H \approx \sqrt{f_{p1}^2 + f_{p2}^2 + f_{p3}^2}$ (Sedra & Smith, Ch 6)

    **However, a more common and practical approach for initial design is to focus on the dominant pole, often the input pole due to the Miller effect.**

**Design Considerations for High Frequencies:**
To extend the upper cutoff frequency ($f_H$), the following strategies can be employed:

*   **Reduce parasitic capacitances:**
    *   Use transistors with lower internal capacitances ($C_{be}$, $C_{cb}$).
    *   Minimize stray wiring capacitance.
    *   Use low-capacitance components and connectors.
*   **Reduce Miller effect:**
    *   Reduce the voltage gain ($|A_v|$). This can be done by:
        *   Increasing the emitter resistance ($R_E$) and not fully bypassing it with $C_E$. This will reduce the mid-band gain. (Boylested & Nashelsky, Ch 12)
        *   Using a different amplifier configuration (e.g., common-base or common-collector) which have significantly lower Miller effect.
    *   Use neutralization techniques (though less common in simple RC-coupled amplifiers).
*   **Reduce source and load impedances:**
    *   Lower $R_s$ reduces the time constant at the input.
    *   Lower $R_L$ reduces the time constant at the output.

---

### Overall Frequency Response and Bandwidth:

The overall frequency response curve is obtained by combining the effects of low-frequency and high-frequency roll-offs.

*   **Low-frequency roll-off:** Caused by coupling and bypass capacitors, the gain decreases at frequencies below $f_L$. The slope of the roll-off is typically +20 dB/decade per capacitor that is not fully effective.
*   **Mid-band:** The gain is relatively constant.
*   **High-frequency roll-off:** Caused by parasitic capacitances, the gain decreases at frequencies above $f_H$. The slope of the roll-off is typically -20 dB/decade due to the dominant pole.

The **bandwidth (BW)** is the range of frequencies where the gain is at least $0.707$ of the mid-band gain (i.e., -3 dB points).
$BW = f_H - f_L$
Since $f_L << f_H$, the bandwidth is often approximated as $BW \approx f_H$.

The gain at any frequency $f$ can be expressed as:
$A_v(f) = A_{v(mid)} \times \frac{1}{1 + j \frac{f_L}{f}} \times \frac{1}{1 + j \frac{f}{f_H}}$

The magnitude of the gain is:
$|A_v(f)| = |A_{v(mid)}| \times \frac{1}{\sqrt{1 + (\frac{f_L}{f})^2}} \times \frac{1}{\sqrt{1 + (\frac{f}{f_H})^2}}$

At $f = f_L$, $|A_v(f_L)| = \frac{|A_{v(mid)}|}{\sqrt{1+1}} \times \frac{1}{\sqrt{1+(f_L/f_H)^2}} \approx \frac{|A_{v(mid)}|}{\sqrt{2}}$ (assuming $f_L \ll f_H$).
At $f = f_H$, $|A_v(f_H)| = \frac{|A_{v(mid)}|}{\sqrt{1+(f_L/f_H)^2}} \times \frac{1}{\sqrt{1+1}} \approx \frac{|A_{v(mid)}|}{\sqrt{2}}$ (assuming $f_L \ll f_H$).

---

### Design Example: RC Coupled Amplifier

**Problem Statement:** Design an RC-coupled common-emitter amplifier using a BJT with the following specifications:
*   Desired mid-band voltage gain ($|A_{v(mid)}|$) of -50.
*   Lower cutoff frequency ($f_L$) of 50 Hz.
*   Upper cutoff frequency ($f_H$) of 50 kHz.
*   Load resistance ($R_L$) = 10 k$\Omega$.
*   Assume the BJT has $\beta = 100$, $C_{be} = 10 pF$, $C_{cb} = 5 pF$.
*   Signal source resistance ($R_s$) = 600 $\Omega$.

**Design Steps:**

**1. Biasing and Mid-band Gain Design:**
*   Choose an operating point (e.g., $I_C \approx 1 mA$). This determines $I_E$.
*   Calculate $r_e = V_T / I_E = 25mV / 1mA = 25 \Omega$.
*   For $|A_{v(mid)}| = 50$, we need $R_C || R_L \approx |A_{v(mid)}| \times r_e = 50 \times 25 \Omega = 1250 \Omega$.
*   Let $R_C = 2 k\Omega$. Then $R_C || R_L = 2 k\Omega || 10 k\Omega = \frac{2 \times 10}{2+10} k\Omega = 1.67 k\Omega$.
*   This gives a mid-band gain of $|A_{v(mid)}| \approx \frac{1.67 k\Omega}{25 \Omega} = 66.8$, which is higher than the target of 50. To achieve a gain of exactly 50, we can either:
    *   Use an emitter resistor ($R_E$) and bypass it with $C_E$. This reduces the gain by a factor of $(R_C || R_L) / (r_e + R_E')$, where $R_E'$ is the effective resistance seen by $C_E$.
    *   Adjust the bias point or transistor parameters if they were not fixed.
    *   Let's proceed with $R_C = 2 k\Omega$ and consider reducing the gain later if needed, or we can select a smaller $R_C$. Let's try $R_C = 1.5 k\Omega$.
    *   $R_C || R_L = 1.5 k\Omega || 10 k\Omega = \frac{1.5 \times 10}{1.5+10} k\Omega = 1.3 k\Omega$.
    *   $|A_{v(mid)}| \approx \frac{1.3 k\Omega}{25 \Omega} = 52$. This is close enough for initial design.

*   **Bias Resistors ($R_{B1}, R_{B2}$):**
    *   Assume a voltage divider bias. Let $V_{CEQ} \approx V_{CC}/2$. Let $V_{CC} = 12V$. Then $V_{CEQ} \approx 6V$.
    *   $R_E$ needs to be chosen for stability. Let $R_E \approx 0.1 R_C = 0.1 \times 1.5 k\Omega = 150 \Omega$.
    *   Then $V_{EQ} = I_E \times R_E = 1mA \times 150 \Omega = 0.15V$.
    *   $V_{BQ} = V_{EQ} + V_{BE(on)} \approx 0.15V + 0.7V = 0.85V$.
    *   $R_B = R_{B1} || R_{B2} \approx 10 \times R_E = 10 \times 150 \Omega = 1.5 k\Omega$. (This is a common rule of thumb to ensure $I_B \ll I_{divider}$).
    *   Choose $R_{B1} = 22 k\Omega$ and $R_{B2} = 2.2 k\Omega$. $R_B = 22 || 2.2 = \frac{22 \times 2.2}{22+2.2} = \frac{48.4}{24.2} = 2 k\Omega$.
    *   Check bias stability: $R_B / R_E = 2 k\Omega / 150 \Omega \approx 13.3 > 10$. This is acceptable.
    *   Calculate $I_C = \beta I_B = \beta \frac{V_{CC}-V_{BE(on)}}{R_{B1}+R_E + R_{B1}R_E/R_{B2}}$. Let's assume $I_C \approx 1mA$.
    *   $r_\pi = \beta r_e = 100 \times 25 \Omega = 2.5 k\Omega$.
    *   $R_{in(stage)} = R_{B1} || R_{B2} || r_\pi = 22 k\Omega || 2.2 k\Omega || 2.5 k\Omega \approx 2 k\Omega || 2.5 k\Omega = 1.11 k\Omega$.

**2. Low-Frequency Design ($f_L = 50 Hz$):**
*   **$C_{C1}$:** Forms HPF with $R_s || R_{in(stage)}$.
    $R_1 = R_s || R_{in(stage)} = 600 \Omega || 1.11 k\Omega = \frac{0.6 \times 1.11}{0.6+1.11} k\Omega = \frac{0.666}{1.71} k\Omega \approx 390 \Omega$.
    $C_{C1} \geq \frac{1}{2 \pi R_1 f_L} = \frac{1}{2 \pi \times 390 \Omega \times 50 Hz} = \frac{1}{122500} F \approx 8.16 \mu F$.
    Choose $C_{C1} = 10 \mu F$.

*   **$C_{C2}$:** Forms HPF with $R_{out} || R_L$.
    $R_2 = R_{out} || R_L$. For a CE amplifier, $R_{out} \approx R_C = 1.5 k\Omega$.
    $R_2 = 1.5 k\Omega || 10 k\Omega = 1.3 k\Omega$.
    $C_{C2} \geq \frac{1}{2 \pi R_2 f_L} = \frac{1}{2 \pi \times 1.3 k\Omega \times 50 Hz} = \frac{1}{40840} F \approx 24.5 \mu F$.
    Choose $C_{C2} = 25 \mu F$.

*   **$C_E$:** Bypasses $R_E = 150 \Omega$. The resistance seen by $C_E$ is $R_E' = R_E || (r_\pi/\beta) = 150 \Omega || (2.5 k\Omega / 100) = 150 \Omega || 25 \Omega = 20.8 \Omega$.
    $f_{LE} \approx \frac{1}{2 \pi R_E' C_E}$. We need this to be less than $f_L$.
    A common design rule is to choose $C_E$ such that $f_{LE}$ is around $f_L/10$ to ensure $R_E$ is fully bypassed.
    $f_{LE} \approx \frac{1}{2 \pi \times 20.8 \Omega \times C_E} < 50 Hz$.
    $C_E > \frac{1}{2 \pi \times 20.8 \Omega \times 50 Hz} \approx 153 \mu F$.
    Choose $C_E = 200 \mu F$.

    **Wait! If we use $R_E$ and bypass it with $C_E$, the mid-band gain is reduced.**
    $|A_{v(mid)}| = \frac{R_C || R_L}{r_e + R_E'} = \frac{1.3 k\Omega}{25 \Omega + 20.8 \Omega} = \frac{1.3 k\Omega}{45.8 \Omega} \approx 28.4$.
    This gain is too low. To get a gain of 50, we should **not use an emitter resistor ($R_E$) or make it very small.**

    Let's redesign without a significant $R_E$ to achieve the target gain.
    *   Set $R_E = 0$ for maximum gain. Then $|A_{v(mid)}| = R_C || R_L / r_e = 1.3 k\Omega / 25 \Omega = 52$. This is acceptable.
    *   If $R_E=0$, we don't need $C_E$.

    **Revised Low-Frequency Design (with $R_E = 0$):**
    *   $C_{C1} = 10 \mu F$ (as calculated before).
    *   $C_{C2} = 25 \mu F$ (as calculated before).

**3. High-Frequency Design ($f_H = 50 kHz$):**
*   We need to ensure that the high-frequency pole is at or above 50 kHz.
*   Let's use Approximation 1 (Dominant Pole at input).
*   $|A_v| \approx -52$.
*   $R_{eq} = R_s || R_{in(stage)} = 390 \Omega$.
*   $C_{eq} = C_{be} + C_{cb}(1 + |A_v|) = 10 pF + 5 pF (1 + 52) = 10 pF + 5 pF \times 53 = 10 pF + 265 pF = 275 pF$.
*   $f_H \approx \frac{1}{2 \pi R_{eq} C_{eq}} = \frac{1}{2 \pi \times 390 \Omega \times 275 pF} = \frac{1}{2 \pi \times 390 \times 275 \times 10^{-12}} \approx \frac{1}{6.78 \times 10^{-7}} Hz \approx 147 kHz$.

    This calculation shows that with the chosen components and parameters, the $f_H$ is around 147 kHz, which is significantly higher than the required 50 kHz. This means our current design has a wider bandwidth than specified.

    **To reduce $f_H$ to 50 kHz:** We need to increase $R_{eq}$ or $C_{eq}$.
    *   **Increase $C_{eq}$:** This implies using a transistor with higher $C_{be}$ or $C_{cb}$, or there's an error in our assumptions.
    *   **Increase $R_{eq}$:** We can increase $R_s$ (not possible if it's given) or decrease $R_{in(stage)}$.
        *   Decreasing $R_{in(stage)}$ means decreasing $R_{B1} || R_{B2} || r_\pi$.
        *   This can be achieved by decreasing $\beta$, decreasing $r_\pi$, or decreasing the bias resistors $R_{B1}, R_{B2}$.
        *   Let's try reducing the bias resistors. If $R_{B1} || R_{B2} = 1 k\Omega$, then $R_{in(stage)} = 1 k\Omega || 2.5 k\Omega = 714 \Omega$.
        *   $R_{eq} = R_s || R_{in(stage)} = 600 \Omega || 714 \Omega = 325 \Omega$.
        *   $f_H \approx \frac{1}{2 \pi \times 325 \Omega \times 275 pF} \approx 176 kHz$. Still too high.

    *   **Alternatively, let's consider the effect of external capacitances like $C_L$ and $C_s$ that were implicitly assumed to be negligible.**
        The problem states $R_s = 600 \Omega$. It doesn't mention $C_s$. The load $R_L = 10 k\Omega$. It doesn't mention $C_L$.
        If we include $C_L$, it would affect the output pole.
        $f_{p3} \approx \frac{1}{2 \pi (R_C || R_L) C_L} = \frac{1}{2 \pi (1.5 k\Omega || 10 k\Omega) C_L} = \frac{1}{2 \pi (1.3 k\Omega) C_L}$.
        If $f_{p3}$ is a significant contributor and is lower than $f_H$, it will reduce the overall $f_H$.
        Suppose we have a $C_L = 50 pF$.
        $f_{p3} \approx \frac{1}{2 \pi \times 1300 \Omega \times 50 pF} \approx 2.45 MHz$. This is too high to affect $f_H$.

        Let's re-examine the Miller capacitance calculation and the target $f_H$.
        $f_H = \frac{1}{2 \pi R_{eq} C_{eq}}$. We need $f_H = 50 kHz$.
        $C_{eq} = 275 pF$.
        $R_{eq} = R_s || R_{in(stage)} = 390 \Omega$.
        $50 kHz = \frac{1}{2 \pi \times 390 \Omega \times C_{eq}}$.
        $C_{eq} = \frac{1}{2 \pi \times 390 \Omega \times 50 \times 10^3 Hz} \approx 8.16 \times 10^{-9} F = 8.16 nF$.
        This required $C_{eq}$ is extremely large and not achievable with the given transistor capacitances. This indicates that the dominant pole assumption might be too simplistic, or the target $f_H$ is too low for the given parameters.

        **Let's reconsider the design for $f_H=50 kHz$.**
        To reduce $f_H$, we need to increase $C_{eq}$ or $R_{eq}$.
        *   **Increase $C_{eq}$:** This is the most direct way. If we use a transistor with higher junction capacitances (e.g., $C_{cb} = 20 pF$).
            $C_{eq} = 10 pF + 20 pF (1 + 52) = 10 pF + 20 pF \times 53 = 10 pF + 1060 pF = 1070 pF$.
            With $R_{eq} = 390 \Omega$:
            $f_H \approx \frac{1}{2 \pi \times 390 \Omega \times 1070 pF} \approx 37 kHz$. This is closer.

        *   **Alternatively, reduce $|A_v|$ to reduce $C_{Miller}$.**
            If we reintroduce a small emitter resistor $R_E = 50 \Omega$.
            $r_e = 25 \Omega$.
            $R_E' = R_E || (r_\pi/\beta) = 50 \Omega || 25 \Omega = 16.67 \Omega$.
            $|A_{v(mid)}| = \frac{R_C || R_L}{r_e + R_E'} = \frac{1.3 k\Omega}{25 \Omega + 16.67 \Omega} = \frac{1.3 k\Omega}{41.67 \Omega} \approx 31.2$.
            Now, $C_{eq} = C_{be} + C_{cb}(1 + |A_v|) = 10 pF + 5 pF (1 + 31.2) = 10 pF + 5 pF \times 32.2 = 10 pF + 161 pF = 171 pF$.
            $R_{in(stage)} = R_{B1} || R_{B2} || r_\pi$. We need to check bias again.
            Let $R_E = 50 \Omega$. $V_{EQ} = 1mA \times 50 \Omega = 50mV$. $V_{BQ} = 0.75V$.
            Let $R_B = 1.5 k\Omega$. $R_{in(stage)} = 1.5 k\Omega || 2.5 k\Omega = 937.5 \Omega$.
            $R_{eq} = R_s || R_{in(stage)} = 600 \Omega || 937.5 \Omega \approx 365 \Omega$.
            $f_H \approx \frac{1}{2 \pi R_{eq} C_{eq}} = \frac{1}{2 \pi \times 365 \Omega \times 171 pF} \approx 255 kHz$. Still not 50 kHz.

        **Let's assume the problem statement implies that the parasitic capacitances are the only limiting factors for $f_H$, and the designer can choose components or biasing to achieve the target.**
        The easiest way to lower $f_H$ is to increase the equivalent capacitance at the input, or increase the equivalent resistance at the input.
        Given $R_s = 600 \Omega$. If we want $f_H=50 kHz$ with $C_{eq}=275 pF$.
        $R_{eq} = \frac{1}{2 \pi f_H C_{eq}} = \frac{1}{2 \pi \times 50 \times 10^3 Hz \times 275 \times 10^{-12} F} \approx 10.3 k\Omega$.
        This $R_{eq}$ is very high. This means $R_{in(stage)}$ must be very high, which is contrary to typical biasing.

        **Perhaps the problem intends for us to consider the effect of $C_L$ more prominently, or that the $f_H$ is related to multiple poles.**
        Let's assume the dominant pole approximation is used and we need to adjust parameters.
        If we accept $|A_v| = 52$ and $R_{eq} = 390 \Omega$, we need $C_{eq} \approx 8.16 nF$ to get $f_H=50 kHz$. This is clearly not feasible with standard BJT parameters.

        **Re-evaluating the goal for $f_H=50 kHz$.**
        It's more likely that $f_H$ is set by a combination of poles.
        Let's assume the given $f_H$ is achievable by carefully selecting the transistor or by accepting a lower mid-band gain.
        If we want $f_H = 50 kHz$ with $R_{eq} = 390 \Omega$, $C_{eq}$ must be around $8.16 nF$. This is impossible.
        If we want $f_H = 50 kHz$ with $C_{eq} = 275 pF$, $R_{eq}$ must be around $10.3 k\Omega$.
        This means $R_s || R_{in(stage)} = 10.3 k\Omega$. Since $R_s = 600 \Omega$, this is impossible.

        **Possibility:** The example might be flawed or expects a very specific approach. Let's assume we need to reduce $f_H$ by increasing the effective capacitance at the input.
        Perhaps the transistor has larger junction capacitances than assumed. If $C_{cb}$ was 100 pF.
        $C_{eq} = 10 pF + 100 pF (1 + 52) = 10 pF + 5200 pF = 5.21 nF$.
        With $R_{eq} = 390 \Omega$, $f_H \approx \frac{1}{2 \pi \times 390 \Omega \times 5.21 nF} \approx 77 kHz$. Still higher than 50 kHz.

        **Let's try reducing the mid-band gain significantly.**
        If $|A_v| = 10$.
        $C_{eq} = 10 pF + 5 pF (1 + 10) = 10 pF + 55 pF = 65 pF$.
        With $R_{eq} = 390 \Omega$, $f_H \approx \frac{1}{2 \pi \times 390 \Omega \times 65 pF} \approx 6.2 MHz$. This is even higher.

        **Conclusion for this example:** The given parameters and desired $f_H$ might be contradictory with the standard approach. In a real design scenario, if $f_H$ is too low, you might choose a different transistor, or use emitter degeneration to reduce gain and Miller capacitance, or even a different amplifier topology.

        **Let's assume for a moment that the $f_H$ is primarily determined by the output pole.**
        $f_{p3} = \frac{1}{2 \pi (R_C || R_L) C_{external\_load\_or\_stray}} = 50 kHz$.
        $(R_C || R_L) = 1.3 k\Omega$.
        $C_{external\_load\_or\_stray} = \frac{1}{2 \pi \times 1.3 k\Omega \times 50 kHz} \approx 2.45 nF$.
        This would be a very large stray capacitance at the output.

        **A more realistic scenario for achieving $f_H=50kHz$ would be to select a transistor with much higher junction capacitances, or to intentionally add capacitance at the input or output.**

        **Let's consider the possibility that the $f_H$ calculation should include all parasitic capacitances and the Miller effect combined properly.**
        The $f_H$ is often approximated by considering the frequency where the sum of the squares of the time constants equals the inverse of the desired $f_H^2$.
        $f_H \approx (\sum \frac{1}{2\pi \tau_i^2})^{-1/2}$
        Where $\tau_i = R_{eq\_i} C_i$.
        For our case:
        $\tau_{in} = (R_s || R_{in(stage)}) (C_{be} + C_{cb}(1+|A_v|)) = 390 \Omega \times 275 pF = 107.25 ns$.
        $\tau_{out} = (R_C || R_L) C_{cb} = 1.3 k\Omega \times 5 pF = 6.5 ns$.
        $f_{p,in} = 1/(2\pi \tau_{in}) \approx 14.7 kHz$.
        $f_{p,out} = 1/(2\pi \tau_{out}) \approx 24.5 MHz$.

        $f_H \approx \sqrt{f_{p,in}^{-2} + f_{p,out}^{-2}}^{-1} = \sqrt{(1/14.7kHz)^{-2} + (1/24.5MHz)^{-2}}^{-1} \approx 14.7 kHz$.
        This calculation shows that the input pole is dominant and limits $f_H$ to around 14.7 kHz.
        This means the initial design has an $f_H$ of approximately 14.7 kHz, not 50 kHz.

        **To achieve $f_H = 50 kHz$:**
        We need to increase the dominant pole frequency. This means reducing $R_{eq}$ or $C_{eq}$.
        *   If we use a transistor with $C_{cb}=1 pF$:
            $C_{eq} = 10 pF + 1 pF (1+52) = 10 pF + 53 pF = 63 pF$.
            $f_H \approx \frac{1}{2 \pi \times 390 \Omega \times 63 pF} \approx 6.5 MHz$.

        *   If we need $f_H = 50 kHz$, and it's dominated by the input pole:
            $R_{eq} C_{eq} = 1 / (2 \pi \times 50 kHz) = 1 / (314159) \approx 3.18 \mu s$.
            If $C_{eq}=275 pF$, $R_{eq} = 3.18 \mu s / 275 pF \approx 11.5 k\Omega$.
            This requires $R_s || R_{in(stage)} = 11.5 k\Omega$. Since $R_s = 600 \Omega$, $R_{in(stage)}$ must be very high, which is usually achieved with higher $\beta$ or different biasing.

        Let's assume we can select a transistor with $C_{cb} = 2 pF$.
        $C_{eq} = 10 pF + 2 pF (1+52) = 10 pF + 104 pF = 114 pF$.
        With $R_{eq} = 390 \Omega$:
        $f_H \approx \frac{1}{2 \pi \times 390 \Omega \times 114 pF} \approx 2.8 MHz$.

        **This example highlights the interplay between gain and bandwidth. Higher gain generally leads to lower bandwidth due to the Miller effect.**

---

### Practice Questions:

1.  **Define voltage gain and bandwidth for an amplifier.** (Knowledge Level: K1)
2.  **Explain why the voltage gain of an amplifier varies with frequency.** (Knowledge Level: K2)
3.  **Identify the components responsible for the low-frequency and high-frequency roll-off in an RC-coupled amplifier.** (Knowledge Level: K2)
4.  **Calculate the lower cutoff frequency ($f_L$) for an RC-coupled amplifier with the following parameters:**
    *   Input coupling capacitor $C_{C1} = 5 \mu F$.
    *   Source resistance $R_s = 1 k\Omega$.
    *   Input resistance of the amplifier stage $R_{in(stage)} = 5 k\Omega$.
    *   Assume $f_{L1}$ is the dominant low-frequency cutoff.
    *(Answer: $f_{L1} = \frac{1}{2 \pi (1 k\Omega || 5 k\Omega) \times 5 \mu F} = \frac{1}{2 \pi (0.833 k\Omega) \times 5 \mu F} \approx 38.2 Hz$)*
5.  **If an RC-coupled amplifier has a mid-band gain of 80 and an upper cutoff frequency ($f_H$) of 100 kHz, what is its approximate bandwidth?** (Knowledge Level: K2)
    *(Answer: $BW \approx f_H = 100 kHz$, assuming $f_L \ll f_H$)*
6.  **How does the Miller effect influence the high-frequency response of a BJT amplifier?** (Knowledge Level: K2)
7.  **Design an emitter bypass capacitor $C_E$ for a common-emitter amplifier with $R_E = 100 \Omega$, $r_\pi = 1 k\Omega$, $\beta = 100$, and a desired lower cutoff frequency due to $C_E$ of 20 Hz.** (Knowledge Level: K4)
    *(Answer: $R_E' = R_E || (r_\pi/\beta) = 100 \Omega || (1 k\Omega / 100) = 100 \Omega || 10 \Omega = 9.09 \Omega$.
    $C_E = \frac{1}{2 \pi R_E' f_{LE}} = \frac{1}{2 \pi \times 9.09 \Omega \times 20 Hz} \approx 875 \mu F$.)*
8.  **List two methods to improve the upper cutoff frequency ($f_H$) of an RC-coupled amplifier.** (Knowledge Level: K2)
9.  **Design an RC-coupled amplifier to meet the following specifications:**
    *   $V_{CC} = 15V$, $R_L = 10 k\Omega$.
    *   Mid-band voltage gain $|A_{v(mid)}| \approx -60$.
    *   $f_L \geq 20 Hz$.
    *   $f_H \geq 100 kHz$.
    *   Use a transistor with $\beta = 150$, $C_{be} = 15 pF$, $C_{cb} = 5 pF$.
    *   $R_s = 1 k\Omega$.
    *(This is a complex design problem that requires iterating through biasing, gain calculation, and frequency response estimation. The answers will depend on the choices made for biasing and intermediate component values. The goal is to demonstrate the process.)*

---

### Important Points to Remember:

*   **Low-frequency limit:** Determined by coupling capacitors ($C_{C1}, C_{C2}$) and emitter bypass capacitor ($C_E$). The highest of the individual cutoff frequencies sets the overall $f_L$.
*   **Mid-band:** Ideal region where coupling and bypass capacitors act as shorts, and parasitic capacitances act as opens. Gain is maximized here.
*   **High-frequency limit:** Determined by parasitic capacitances ($C_{be}, C_{cb}$) and external stray capacitances. The Miller effect amplifies $C_{cb}$, significantly impacting $f_H$.
*   **Bandwidth:** $BW \approx f_H - f_L$. Typically, $BW \approx f_H$.
*   **Trade-off:** There's a fundamental trade-off between voltage gain and bandwidth in BJT amplifiers. To achieve higher gain, the bandwidth often decreases due to the Miller effect.
*   **Design Process:** Biasing and gain calculation usually come first. Then, capacitor values are chosen for the desired low-frequency response. Finally, the high-frequency response is analyzed, and if it doesn't meet specifications, adjustments are made (e.g., choosing a different transistor, altering bias, or using emitter degeneration).
*   **Approximations:** $f_L$ and $f_H$ calculations often use approximations, especially when multiple poles are involved. The dominant pole approximation is common for $f_H$.

---

### Alignment with Course Outcomes:

*   **CO1: Design and analyze the RC circuits and BJT biasing circuits (Knowledge Level: K4)**
    *   This module directly addresses the design of RC-coupled amplifier circuits, including the selection of coupling and bypass capacitors and bias resistors. Analysis of biasing networks is a prerequisite for gain and frequency response calculations.

*   **CO2: Perform small signal and high frequency analysis of BJT amplifier circuits using equivalent models (Knowledge Level: K3)**
    *   The entire topic of frequency response relies on small-signal analysis and understanding how parasitic capacitances (modeled in equivalent circuits) affect the amplifier's behavior at high frequencies.

---

This comprehensive study material covers the voltage gain and frequency response of RC-coupled BJT amplifiers, providing the necessary theoretical background, practical design considerations, and example problems. Remember to consult the referenced textbooks for more in-depth explanations and derivations.
