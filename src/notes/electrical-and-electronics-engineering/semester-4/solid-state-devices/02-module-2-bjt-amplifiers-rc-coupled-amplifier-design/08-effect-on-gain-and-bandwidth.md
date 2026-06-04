---
title: "Effect on gain and bandwidth."
subject: "SOLID STATE DEVICES"
module: "Module 2: BJT amplifiers: RC coupled amplifier –Design"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f88"
status: "completed"
scrapedAt: "2026-05-23T16:18:45.233Z"
---
# SOLID STATE DEVICES: Module 2: BJT Amplifiers: RC Coupled Amplifier Design

## Topic: Effect on Gain and Bandwidth

### Learning Outcomes Covered:

*   **Gain and Bandwidth of an RC Coupled Amplifier:** Understand how the design choices for an RC coupled amplifier affect its voltage gain and bandwidth.
*   **Frequency Response:** Analyze the frequency response of an RC coupled amplifier, including the mid-band, low-frequency, and high-frequency regions.
*   **Impact of Coupling and Bypass Capacitors:** Explain the role of coupling ($C_C$) and bypass ($C_E$) capacitors in determining the lower cutoff frequencies.
*   **Impact of Internal Device Capacitances:** Explain the role of internal device capacitances ($C_{be}$, $C_{bc}$) in determining the upper cutoff frequencies.
*   **Trade-offs in Design:** Discuss the trade-offs between gain, bandwidth, and other performance parameters during the design of an RC coupled amplifier.

### Course Outcomes Addressed:

*   **CO1: Design and analyze the RC circuits and BJT biasing circuits (Knowledge Level: K4):** Understanding the effects on gain and bandwidth directly informs the design process, requiring analysis of how component values influence performance.
*   **CO2: Perform small signal and high frequency analysis of BJT amplifier circuits using equivalent models (Knowledge Level: K3):** This topic is a direct application of small-signal analysis extended to include the effects of parasitic capacitances at different frequencies.

---

### 1. Introduction to RC Coupled Amplifiers and Frequency Response

An RC coupled amplifier is a common amplifier configuration where stages are coupled using resistors and capacitors. While effective for amplification in the mid-band frequency range, its performance degrades at very low and very high frequencies. This variation in gain with frequency is known as the **frequency response**.

**Key Concept:** The frequency response of an amplifier is typically presented as a plot of voltage gain ($A_v$) versus frequency ($f$). This plot is divided into three main regions:

*   **Low-Frequency Region:** Characterized by a decrease in gain due to the reactive effects of coupling and bypass capacitors.
*   **Mid-band Region:** Where the gain is relatively constant and at its maximum value.
*   **High-Frequency Region:** Characterized by a decrease in gain due to the parasitic capacitances within the transistor and stray capacitances in the circuit.

**Textbook Reference:**
*   Boylested and Nashelsky (11/e, 2017) provides a detailed explanation of frequency response in Chapter 12.
*   Sedra and Smith (6/e, 2013) discusses amplifier frequency response in Chapter 7.
*   Bell (5/e, 2008) covers frequency response in Chapter 6.

---

### 2. The Three Regions of Frequency Response

#### 2.1 Low-Frequency Region

In the low-frequency region, the coupling capacitors ($C_{C1}$, $C_{C2}$) and the emitter bypass capacitor ($C_E$) act as significant impedances, affecting the signal transfer between stages and from the emitter to ground.

*   **Coupling Capacitors ($C_{C1}$, $C_{C2}$):**
    *   **Function:** To block DC current from passing between stages while allowing the AC signal to pass.
    *   **Effect:** At low frequencies, the impedance of the coupling capacitor ($Z_{CC} = \frac{1}{j\omega C_C}$) becomes large. This large impedance causes a voltage drop across the capacitor, reducing the signal transferred to the next stage or the output.
    *   **Lower Cutoff Frequency ($f_{L}$):** Each coupling capacitor, along with the resistance it drives, forms a high-pass filter. The frequency at which the gain drops by 3 dB (or by a factor of 0.707) is called the lower cutoff frequency.
    *   **Formula:** For a coupling capacitor $C_C$ and the load resistance $R_L$ it drives, the lower cutoff frequency is approximately $f_{L} \approx \frac{1}{2\pi R_L C_C}$.
    *   **Design Impact:** To achieve a lower $f_L$ (i.e., extend the amplifier's useful low-frequency range), larger values of $C_C$ or higher load resistances are required. However, larger capacitors are physically larger and more expensive.

*   **Emitter Bypass Capacitor ($C_E$):**
    *   **Function:** To bypass the emitter resistor ($R_E$) at AC signals, thereby increasing the AC voltage gain.
    *   **Effect:** At low frequencies, the impedance of the bypass capacitor ($Z_{CE} = \frac{1}{j\omega C_E}$) is not negligible. This means that a portion of the AC signal is dropped across $C_E$ instead of being bypassed to ground. As a result, the emitter voltage ($V_e$) is no longer effectively at AC ground, which reduces the AC voltage gain.
    *   **Lower Cutoff Frequency due to $C_E$ ($f_{LE}$):** The bypass capacitor and the effective resistance in the emitter circuit determine another lower cutoff frequency.
    *   **Formula:** The effective resistance in the emitter circuit that $C_E$ works with is approximately $R_E' = R_E || r_e$. Thus, $f_{LE} \approx \frac{1}{2\pi R_E' C_E}$.
    *   **Design Impact:** To ensure that the bypass capacitor effectively shorts $R_E$ at the desired low-frequency limit, $C_E$ must be large enough so that its impedance is much smaller than $R_E'$ at that frequency. This means $f_{LE}$ should be below the desired lower cutoff frequency of the amplifier.

*   **Overall Low-Frequency Response:** The overall lower cutoff frequency of the amplifier is determined by the *highest* of the cutoff frequencies introduced by $C_{C1}$, $C_{C2}$, and $C_E$.
    $$f_L = \max(f_{L(C_{C1})}, f_{L(C_{C2})}, f_{LE})$$
    where $f_{L(C_{C1})}$ is the cutoff frequency due to $C_{C1}$ and $f_{L(C_{C2})}$ is the cutoff frequency due to $C_{C2}$.

**Example (Low-Frequency):**
Consider an RC coupled amplifier with $C_{C1} = 0.1 \mu F$, $C_{C2} = 0.1 \mu F$, $C_E = 10 \mu F$.
Let the input resistance seen by $C_{C1}$ be $R_{in1} \approx R_B || r_{\pi1}$ (where $R_B$ is the biasing resistor) $\approx 10 k\Omega$.
Let the load resistance seen by $C_{C2}$ be $R_{L2} \approx R_C || R_{L} \approx 5 k\Omega$.
Let the effective emitter resistance be $R_E' \approx R_E || r_e \approx 50 \Omega$.

*   $f_{L(C_{C1})} \approx \frac{1}{2\pi (10 \times 10^3 \Omega)(0.1 \times 10^{-6} F)} \approx 159 Hz$
*   $f_{L(C_{C2})} \approx \frac{1}{2\pi (5 \times 10^3 \Omega)(0.1 \times 10^{-6} F)} \approx 318 Hz$
*   $f_{LE} \approx \frac{1}{2\pi (50 \Omega)(10 \times 10^{-6} F)} \approx 318 Hz$

The overall lower cutoff frequency $f_L = \max(159 Hz, 318 Hz, 318 Hz) = 318 Hz$.
To improve the low-frequency response, we would need to increase the values of $C_{C1}$, $C_{C2}$, or $C_E$ (or $R_L$).

#### 2.2 Mid-band Region

In the mid-band region, the impedances of the coupling and bypass capacitors are negligible ($Z_{CC} \approx 0$, $Z_{CE} \approx 0$), and the parasitic capacitances are also negligible. The amplifier behaves as predicted by the DC-biased equivalent circuit.

*   **Voltage Gain ($A_{vm}$):** The voltage gain in the mid-band is approximately:
    *   For a common-emitter amplifier: $A_{vm} \approx -\frac{R_C}{r_e}$ (if $R_E$ is fully bypassed)
    *   If $R_E$ is not fully bypassed (i.e., $C_E$ is too small or absent), the gain is: $A_{vm} \approx -\frac{R_C}{r_e + R_E}$.
    *   Considering load resistor $R_L$: $A_{vm} \approx -\frac{R_{C} || R_L}{r_e}$ (for a single stage).

**Design Impact:** The mid-band gain is primarily determined by the transistor's internal parameters ($r_e$) and the external circuit components ($R_C$, $R_L$, $R_E$).

#### 2.3 High-Frequency Region

In the high-frequency region, the parasitic capacitances within the transistor become significant. These include:

*   **Base-Emitter Junction Capacitance ($C_{be}$):** This is the diffusion capacitance, which is proportional to the collector current ($I_C$). $C_{be} \approx \frac{g_m \tau_f}{1}$ where $\tau_f$ is the forward transit time.
*   **Base-Collector Junction Capacitance ($C_{bc}$):** This is the depletion capacitance of the reverse-biased base-collector junction. It is relatively constant with operating point.
*   **Stray Capacitances:** These include capacitances between wires, components, and ground, as well as the capacitance of the transistor package.

**Effect of Parasitic Capacitances:**

*   **$C_{be}$:** Acts in parallel with the input resistance ($r_{\pi}$) of the transistor. At high frequencies, the impedance of $C_{be}$ ($Z_{C_{be}} = \frac{1}{j\omega C_{be}}$) becomes small, shunting the input signal away from the base, thus reducing the input voltage. This contributes to a decrease in gain.
*   **$C_{bc}$ (Miller Effect):** This is the most critical capacitance affecting the high-frequency response. The voltage across $C_{bc}$ is the output voltage ($V_{out}$) minus the input voltage ($V_{in}$). Since $V_{out} \approx -A_v V_{in}$ in the mid-band, the voltage across $C_{bc}$ is approximately $V_{in} - (-A_v V_{in}) = (1+A_v)V_{in}$. This creates a large *effective* capacitance at the input, known as the **Miller capacitance**, given by $C_{miller} = C_{bc}(1+A_v)$.
    *   **Formula:** The input impedance at high frequencies is significantly reduced due to $C_{miller}$: $Z_{in} \approx \frac{1}{j\omega C_{miller}}$. This effectively shunts the input signal.
    *   **Design Impact:** A higher mid-band gain ($A_v$) leads to a larger Miller capacitance, thus a lower upper cutoff frequency. This highlights a fundamental trade-off: to achieve high gain, you often sacrifice bandwidth.

*   **Overall High-Frequency Response:** The combined effect of these capacitances creates a low-pass filter characteristic. The upper cutoff frequency ($f_H$) is the frequency at which the gain drops by 3 dB from its mid-band value.

**Approximation for Upper Cutoff Frequency ($f_H$):**
For a single-stage CE amplifier, an approximate formula for the upper cutoff frequency can be derived using the hybrid-$\pi$ model and considering the Miller effect.
$$f_H \approx \frac{1}{2\pi R_{in}' C_{in}'}$$
where $R_{in}'$ is the effective resistance at the input, and $C_{in}'$ is the effective capacitance at the input.
$R_{in}' = (R_B || r_{\pi}) || R_{source}$ (where $R_{source}$ is the source resistance).
$C_{in}' = C_{be} + C_{miller} + C_{stray} = C_{be} + C_{bc}(1+A_{vm}) + C_{stray}$.

A more practical approximation, often derived from analysis of the hybrid-$\pi$ model, relates $f_H$ to the transistor's transition frequency ($f_T$):
$$f_H \approx \frac{f_T}{1+|A_{vm}|}$$
where $f_T$ is the frequency at which the common-emitter current gain drops to unity. $f_T \approx \frac{g_m}{2\pi(C_{be}+C_{bc})}$.

**Textbook Reference:**
*   Boylested and Nashelsky (11/e, 2017) discusses the Miller effect and high-frequency analysis in Chapter 12.
*   Sedra and Smith (6/e, 2013) details the hybrid-$\pi$ model and its application to high-frequency response in Chapter 7.
*   Bell (5/e, 2008) covers the high-frequency limitations and Miller effect in Chapter 6.
*   Razavi (2015) provides a concise explanation of high-frequency analysis and the Miller effect in Chapter 4.

**Example (High-Frequency):**
Consider a BJT with $f_T = 500 MHz$, $C_{bc} = 2 pF$.
The amplifier stage has a mid-band gain $A_{vm} = -100$.
Assume $C_{be}$ and stray capacitances are negligible for this example.

*   $C_{miller} = C_{bc}(1+|A_{vm}|) = 2 pF (1 + 100) = 202 pF$.
*   The effective input capacitance $C_{in}' \approx C_{miller} = 202 pF$.
*   If the input resistance seen by $C_{in}'$ is $R_{in}' \approx 2 k\Omega$ (after considering biasing resistors and source resistance), then:
    $f_H \approx \frac{1}{2\pi (2 \times 10^3 \Omega)(202 \times 10^{-12} F)} \approx 393 kHz$.

Using the $f_T$ approximation:
$f_H \approx \frac{f_T}{1+|A_{vm}|} = \frac{500 MHz}{1+100} = \frac{500}{101} MHz \approx 4.95 MHz$.

The discrepancy between these two approximations highlights the simplified nature of the $f_T$ formula. A more rigorous analysis would be needed for precise calculation, but it illustrates that higher gain significantly reduces bandwidth.

---

### 3. Bandwidth of an RC Coupled Amplifier

The **bandwidth (BW)** of an amplifier is the range of frequencies over which the amplifier operates effectively, typically defined as the difference between the upper and lower cutoff frequencies.

$$BW = f_H - f_L$$

For amplifiers with a well-defined mid-band region where gain is constant, the bandwidth is often approximated as:

$$BW \approx f_H$$

This is because $f_L$ is typically much lower than $f_H$. For instance, if $f_L = 100 Hz$ and $f_H = 100 kHz$, then $BW = 99.9 kHz \approx 100 kHz$.

**Design Implications for Bandwidth:**

*   **To Increase Bandwidth:**
    *   **Increase $f_H$**:
        *   Reduce the mid-band voltage gain ($|A_{vm}|$). This is the most significant factor due to the Miller effect.
        *   Use transistors with higher $f_T$.
        *   Reduce $C_{bc}$ and stray capacitances.
        *   Reduce the effective input resistance at high frequencies (e.g., by reducing source resistance, but this can affect gain).
    *   **Decrease $f_L$**:
        *   Increase the values of coupling capacitors ($C_{C1}$, $C_{C2}$).
        *   Increase the values of bypass capacitor ($C_E$).
        *   Increase the load resistance ($R_L$) and collector resistance ($R_C$) (within limits set by biasing and power dissipation).

*   **Trade-offs:**
    *   **Gain vs. Bandwidth:** There is a fundamental trade-off. To achieve high gain, the Miller capacitance increases, reducing bandwidth. To achieve wide bandwidth, the gain must be reduced.
    *   **Low-Frequency Extension vs. Gain:** Using a larger $C_E$ to extend the low-frequency response can reduce the mid-band gain if $R_E$ is not fully bypassed.
    *   **Component Size and Cost:** Larger capacitors are needed to lower $f_L$, increasing the size and cost of the amplifier.

**Textbook Reference:**
*   Millman and Halkias (2/e, 2010) dedicates Chapter 14 to the frequency response and bandwidth of amplifiers.
*   Neamen (3/e, 2007) provides an in-depth analysis of amplifier frequency response and bandwidth in Chapter 10.

---

### 4. Summary of Design Considerations for Gain and Bandwidth

| Parameter          | To Increase Gain ($|A_{vm}|$)                                  | To Increase Bandwidth (BW)                                                      |
| :----------------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| **Gain ($A_{vm}$)** | Increase $R_C$, $R_L$; Decrease $r_e$ (increase $I_C$).     | Decrease gain ($|A_{vm}|$) - this is a primary factor for increasing $f_H$.    |
| **Low Frequency**  | Not directly affected, but higher gain stages might require more careful biasing. | Increase $C_{C1}$, $C_{C2}$; Increase $C_E$; Increase $R_L$, $R_C$.            |
| **High Frequency** | High gain increases Miller capacitance, *reducing* bandwidth. | Decrease $C_{bc}$, $C_{be}$, stray capacitances; Reduce $|A_{vm}|$.             |
| **Capacitors**     | $C_E$ size affects gain if $R_E$ is not fully bypassed.     | Large $C_{C1}, C_{C2}, C_E$ for low frequencies; Small parasitic capacitances for high frequencies. |
| **Transistor**     | Choose transistors with high $r_e$ or use negative feedback to control gain precisely. | Choose transistors with high $f_T$.                                             |

---

### 5. Practice Questions and Exercises

**Question 1:**
An RC coupled amplifier stage is designed with $C_{C1} = 0.05 \mu F$, $C_{C2} = 0.1 \mu F$, and $C_E = 5 \mu F$. The input resistance seen by $C_{C1}$ is $5 k\Omega$, and the load resistance seen by $C_{C2}$ is $10 k\Omega$. The emitter bypass capacitor $C_E$ works with an effective emitter resistance $R_E' = 20 \Omega$.
Calculate the lower cutoff frequency ($f_L$) of this stage.

**Answer 1:**
$f_{L(C_{C1})} = \frac{1}{2\pi R_{in1} C_{C1}} = \frac{1}{2\pi (5 \times 10^3 \Omega)(0.05 \times 10^{-6} F)} \approx 637 Hz$
$f_{L(C_{C2})} = \frac{1}{2\pi R_{L2} C_{C2}} = \frac{1}{2\pi (10 \times 10^3 \Omega)(0.1 \times 10^{-6} F)} \approx 159 Hz$
$f_{LE} = \frac{1}{2\pi R_E' C_E} = \frac{1}{2\pi (20 \Omega)(5 \times 10^{-6} F)} \approx 1591 Hz$
$f_L = \max(637 Hz, 159 Hz, 1591 Hz) = 1591 Hz$

**Question 2:**
A common-emitter amplifier stage has a mid-band voltage gain of $A_{vm} = -150$. The transistor has a base-collector capacitance $C_{bc} = 3 pF$. Assume the input resistance at high frequencies (including source resistance, biasing resistors, and $r_{\pi}$) is $R_{in}' = 1.5 k\Omega$. Neglect $C_{be}$ and stray capacitances for simplicity.
Estimate the upper cutoff frequency ($f_H$) using the Miller effect.

**Answer 2:**
$C_{miller} = C_{bc}(1+|A_{vm}|) = 3 pF (1 + 150) = 453 pF$
$f_H \approx \frac{1}{2\pi R_{in}' C_{in}'} = \frac{1}{2\pi (1.5 \times 10^3 \Omega)(453 \times 10^{-12} F)} \approx 234 kHz$

**Question 3:**
Discuss the trade-off between gain and bandwidth in BJT amplifiers. How can you improve the bandwidth of an RC coupled amplifier without significantly reducing its mid-band gain?

**Answer 3:**
The trade-off arises primarily from the Miller effect, where the base-collector capacitance ($C_{bc}$) appears as a much larger capacitance at the input due to the high voltage gain. This increased input capacitance shunts more of the high-frequency signal to ground, reducing bandwidth.
To improve bandwidth without significantly reducing mid-band gain:
1.  **Use transistors with higher $f_T$:** This directly increases $f_H$.
2.  **Reduce parasitic capacitances:** Careful layout, shorter leads, and component selection can minimize stray capacitances.
3.  **Reduce $C_{bc}$:** Some advanced transistor structures are designed to minimize $C_{bc}$.
4.  **Lower the lower cutoff frequency ($f_L$):** Increase coupling and bypass capacitor values. This extends the useful frequency range at the low end and allows for a wider overall bandwidth if $f_H$ remains high.
5.  **Employ negative feedback:** While feedback can reduce gain, it also flattens the frequency response and can increase bandwidth if applied correctly, provided the feedback loop is stable at high frequencies.

---

### 6. Important Points to Remember

*   **Frequency Response:** Gain varies with frequency due to reactive components ($C_C, C_E,$ and parasitic $C_{be}, C_{bc}$).
*   **Low-Frequency Limitation:** Dominated by coupling capacitors ($C_{C1}, C_{C2}$) and emitter bypass capacitor ($C_E$). The overall $f_L$ is the highest of the individual cutoff frequencies.
*   **High-Frequency Limitation:** Dominated by internal transistor capacitances ($C_{be}, C_{bc}$) and stray capacitances.
*   **Miller Effect:** The most significant factor at high frequencies. $C_{bc}$ appears as $C_{bc}(1+A_v)$ at the input, drastically reducing input impedance and thus gain.
*   **Gain-Bandwidth Trade-off:** Higher voltage gain generally leads to lower bandwidth, and vice-versa.
*   **Bandwidth Calculation:** $BW = f_H - f_L$. Often approximated by $f_H$ alone.
*   **Design Goal:** Select component values to meet desired gain and bandwidth specifications, understanding the inherent trade-offs.

---

This comprehensive study note covers the effect on gain and bandwidth in RC coupled BJT amplifiers, aligning with the learning outcomes and course objectives. The provided examples and practice questions aim to solidify understanding of these critical concepts.
