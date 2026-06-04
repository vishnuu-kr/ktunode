---
title: "JFET amplifier-Measurement of gain, BW and plotting of frequency response."
subject: "ANALOG ELECTRONICS LAB"
module: "Module 5: JFET amplifier"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d4f"
status: "completed"
scrapedAt: "2026-05-23T16:11:05.012Z"
---
# ANALOG ELECTRONICS LAB: Module 5 - JFET Amplifier

## Topic: JFET Amplifier - Measurement of Gain, Bandwidth (BW) and Plotting of Frequency Response

---

### 1. Introduction to JFET Amplifiers

**Objective:** To understand the fundamental operation of a JFET as an amplifier and to characterize its performance by measuring gain, bandwidth, and plotting its frequency response.

**Relevance to Course Outcomes:**
*   **CO1 (K1):** Familiarization with electronic instruments for measurement.
*   **CO3 (K3):** Designing and implementing amplifier circuits using JFET.

**Key Concepts:**
*   **JFET (Junction Field-Effect Transistor):** A voltage-controlled semiconductor device where the current flow is modulated by an electric field. Key terminals are Gate (G), Drain (D), and Source (S).
*   **Amplifier:** A circuit that increases the amplitude of an input signal.
*   **Voltage Gain ($A_v$):** The ratio of the output voltage signal to the input voltage signal.
*   **Bandwidth (BW):** The range of frequencies over which an amplifier operates effectively, typically defined by the points where the gain drops by 3 dB from its maximum value.
*   **Frequency Response:** A plot showing how an amplifier's gain and phase shift vary with the frequency of the input signal.

**Reference Textbooks:**
*   **Paynter, R. T. (Introductory Electronic Devices and Circuits):** Likely covers the basic principles of FET operation and common amplifier configurations.
*   **Boylestad & Nashelsky (Electronic Devices and Circuit Theory):** Provides in-depth analysis of FET characteristics, small-signal models, and amplifier design considerations.
*   **Neaman, D. A. (Electronic Circuits: Analysis and Design):** Offers a more theoretical approach to amplifier analysis, including frequency response and limitations.

---

### 2. JFET Amplifier Configurations

JFETs can be configured as amplifiers in several ways. The most common ones are:

*   **Common Source (CS) Amplifier:**
    *   Input signal applied to the Gate.
    *   Output signal taken from the Drain.
    *   Source terminal is common to both input and output circuits.
    *   **Characteristics:** High voltage gain, high input impedance, moderate output impedance, $180^\circ$ phase inversion between input and output.
    *   **Reference:** Boylestad & Nashelsky will detail the analysis of the CS amplifier using the small-signal model.

*   **Common Drain (CD) Amplifier (Source Follower):**
    *   Input signal applied to the Gate.
    *   Output signal taken from the Source.
    *   Drain terminal is common to both input and output circuits.
    *   **Characteristics:** Voltage gain slightly less than unity, very high input impedance, low output impedance, no phase inversion. Primarily used as a buffer.
    *   **Reference:** Paynter's textbook might introduce this as a basic application.

*   **Common Gate (CG) Amplifier:**
    *   Input signal applied to the Source.
    *   Output signal taken from the Drain.
    *   Gate terminal is common to both input and output circuits (usually AC bypassed).
    *   **Characteristics:** Voltage gain greater than unity, low input impedance, high output impedance, no phase inversion. Used for impedance matching.
    *   **Reference:** Neaman's book might cover this less common configuration for specific applications.

**For this lab experiment, we will focus on the Common Source (CS) JFET amplifier.**

---

### 3. JFET Small-Signal Model

To analyze the AC performance of a JFET amplifier, we use its small-signal model.

**Key Parameters:**
*   **Transconductance ($g_m$):** The ratio of the change in drain current ($\Delta I_D$) to the change in gate-source voltage ($\Delta V_{GS}$) at a constant drain-source voltage ($V_{DS}$).
    *   $g_m = \frac{\Delta I_D}{\Delta V_{GS}} |_{V_{DS}=\text{constant}}$
    *   For a JFET, $g_m$ is typically dependent on the bias point ($I_{D}$ and $V_{GS}$). A common approximation is:
        $g_m \approx g_{m0} \left(1 - \frac{V_{GS}}{V_P}\right)$ where $g_{m0}$ is $g_m$ at $I_D=0$ (pinch-off voltage $V_P$) and $V_{GS}$ is the quiescent gate-source voltage.
    *   Alternatively, $g_m \approx \frac{2I_{DSS}}{|V_P|} \left(1 - \frac{V_{GS}}{V_P}\right)$, where $I_{DSS}$ is the drain current when $V_{GS}=0$.
    *   **Reference:** Boylestad & Nashelsky extensively covers the derivation and application of the JFET small-signal model.

*   **Output Resistance ($r_o$ or $r_d$):** Represents the output conductance of the JFET, due to channel-length modulation. It's the ratio of the change in drain-source voltage ($\Delta V_{DS}$) to the change in drain current ($\Delta I_D$) at a constant gate-source voltage ($V_{GS}$).
    *   $r_o = \frac{\Delta V_{DS}}{\Delta I_D} |_{V_{GS}=\text{constant}}$
    *   $r_o$ is usually very high for JFETs and often neglected in simpler analysis, but it affects the output impedance and gain.
    *   **Reference:** Neaman's book might provide a more detailed discussion on channel-length modulation and its impact on $r_o$.

**Basic Common Source Amplifier Small-Signal Equivalent Circuit:**

(Imagine a circuit diagram here with AC voltage source $v_{in}$ connected to gate, JFET model with $g_m v_{gs}$ controlled source, $r_d$ in parallel with drain resistor $R_D$, and output taken across $R_D$ and $r_d$ in parallel. Source resistor $R_S$ is bypassed with capacitor $C_S$.)

*   $v_{gs} \approx v_{in}$ (if gate is directly connected to AC source and input impedance is very high).
*   $i_d = g_m v_{gs}$
*   $v_{out} = -i_d (R_D || r_o)$
*   **Voltage Gain ($A_v$):** $A_v = \frac{v_{out}}{v_{in}} \approx -g_m (R_D || r_o)$.
    *   If $r_o$ is much larger than $R_D$, then $A_v \approx -g_m R_D$.

---

### 4. Measurement of Gain ($A_v$)

**Objective:** To experimentally determine the voltage gain of the JFET amplifier at a specific frequency (e.g., 1 kHz).

**Instruments Required:**
*   JFET (e.g., 2N3819, J201)
*   Resistors ($R_D$, $R_S$, $R_G$)
*   Capacitors ($C_S$, $C_{in}$, $C_{out}$)
*   DC Power Supply
*   Signal Generator
*   Dual-Channel Oscilloscope
*   Multimeter

**Circuit Setup:**
*   Construct a common source JFET amplifier circuit. A typical circuit might include:
    *   $R_G$: Gate resistor for biasing.
    *   $R_D$: Drain resistor.
    *   $R_S$: Source resistor for biasing (bypassed with a capacitor $C_S$ for AC gain).
    *   $C_{in}$, $C_{out}$: Coupling capacitors to block DC.
*   **Biasing:** Ensure the JFET is biased in the saturation region to operate as an amplifier. This involves setting appropriate DC voltages $V_{DD}$, $R_D$, and $R_S$ to achieve a desired quiescent drain current ($I_{DQ}$) and gate-source voltage ($V_{GSQ}$).

**Measurement Procedure:**
1.  **DC Bias Check:**
    *   Connect the DC power supply and set it to the desired $V_{DD}$.
    *   Using a multimeter, measure the DC voltages at the Gate ($V_G$), Source ($V_S$), and Drain ($V_D$).
    *   Calculate the quiescent $V_{GSQ} = V_G - V_S$ and $I_{DQ}$ (if $V_S$ is measured across $R_S$, $I_{DQ} = V_S / R_S$).
    *   Verify that the JFET is operating in the saturation region (typically $V_{DS} > V_{GS} - V_P$, where $V_P$ is the pinch-off voltage, which is negative for JFETs).
2.  **AC Gain Measurement:**
    *   Connect the signal generator to the input (through $C_{in}$) and set its output to a sinusoidal waveform with a frequency in the mid-band range (e.g., 1 kHz).
    *   Set the signal generator's output amplitude to a small value (e.g., 10 mV peak-to-peak) to ensure small-signal operation.
    *   Connect Channel 1 of the oscilloscope to the input signal (before $C_{in}$).
    *   Connect Channel 2 of the oscilloscope to the output signal (after $C_{out}$).
    *   Adjust the oscilloscope's vertical and horizontal scales to clearly display both input and output waveforms.
    *   **Calculate Voltage Gain ($A_v$):**
        $A_v = \frac{V_{out(peak-peak)}}{V_{in(peak-peak)}}$
        *   Note: Due to the $180^\circ$ phase shift, the output waveform will appear inverted relative to the input. The gain calculation uses the magnitudes of the peak-to-peak voltages.
    *   **Reference:** CO1 (K1) is directly addressed here as students use instruments to measure voltage.

**Example Calculation:**
*   If $V_{in(peak-peak)} = 20$ mV and $V_{out(peak-peak)} = 100$ mV, then $A_v = \frac{100 \text{ mV}}{20 \text{ mV}} = 5$.

---

### 5. Measurement of Bandwidth (BW)

**Objective:** To determine the bandwidth of the JFET amplifier by measuring the gain at various frequencies.

**Key Concepts:**
*   **Lower Cut-off Frequency ($f_L$):** The frequency below which the amplifier's gain starts to decrease significantly, typically due to the coupling and bypass capacitors ($C_{in}$, $C_{out}$, $C_S$). At $f_L$, the gain is $0.707$ times the mid-band gain (a drop of 3 dB).
*   **Upper Cut-off Frequency ($f_H$):** The frequency above which the amplifier's gain starts to decrease significantly, typically due to the parasitic capacitances within the JFET and circuit (e.g., $C_{gs}$, $C_{gd}$). At $f_H$, the gain is $0.707$ times the mid-band gain (a drop of 3 dB).
*   **Bandwidth (BW):** $BW = f_H - f_L$. For most amplifier circuits, $f_L$ is much lower than $f_H$, so $BW \approx f_H$.

**Measurement Procedure:**
1.  **Mid-band Gain:** Measure the gain ($A_{v\_mid}$) at a frequency well within the mid-band range (e.g., 1 kHz). This will be your reference gain.
2.  **Sweeping Frequencies:**
    *   Keep the input voltage amplitude constant.
    *   Start from a low frequency (e.g., 50 Hz) and gradually increase it.
    *   At each frequency, measure the output voltage ($V_{out}$).
    *   Calculate the voltage gain at that frequency: $A_v(f) = \frac{V_{out}(f)}{V_{in}}$.
    *   Continue sweeping the frequency until the gain drops significantly below the mid-band gain.
3.  **Identifying $f_L$:**
    *   Locate the frequency where the gain $A_v(f)$ drops to $0.707 \times A_{v\_mid}$. This is the lower cut-off frequency, $f_L$.
4.  **Identifying $f_H$:**
    *   Continue sweeping the frequency upwards. Locate the frequency where the gain $A_v(f)$ drops to $0.707 \times A_{v\_mid}$ again. This is the upper cut-off frequency, $f_H$.
5.  **Calculate Bandwidth:**
    *   $BW = f_H - f_L$.

**Reference:** Boylestad & Nashelsky will provide the theoretical basis for the frequency response of amplifiers, explaining the role of coupling, bypass, and parasitic capacitances. Neaman's book will offer deeper insights into high-frequency analysis.

---

### 6. Plotting of Frequency Response

**Objective:** To visualize the gain and phase characteristics of the JFET amplifier across a range of frequencies.

**Data Required:**
*   A table of frequencies ($f$) and their corresponding voltage gains ($A_v(f)$). It's also beneficial to measure and record the phase shift at each frequency, although gain is the primary focus for BW.

**Plotting Procedure:**
1.  **Semi-log Graph Paper:** Use semi-log graph paper, with frequency ($f$) plotted on the logarithmic (X) axis and voltage gain ($A_v$) plotted on the linear (Y) axis.
2.  **Plotting the Gain Curve:**
    *   Plot each data point ($f$, $A_v(f)$) from your measurements.
    *   Draw a smooth curve connecting the plotted points.
3.  **Identifying Key Frequencies on the Plot:**
    *   **Mid-band Gain ($A_{v\_mid}$):** The maximum gain achieved in the mid-band region.
    *   **$f_L$ and $f_H$:** Locate the frequencies on the X-axis where the gain curve is $0.707 \times A_{v\_mid}$. Draw a horizontal line at this gain level and find where it intersects the gain curve. Project these intersection points down to the frequency axis to find $f_L$ and $f_H$.
    *   **Bandwidth:** The horizontal distance between $f_L$ and $f_H$ on the log scale.
4.  **Interpreting the Plot:**
    *   **Low-Frequency Roll-off:** The gain decreases at low frequencies due to the impedance of coupling and bypass capacitors becoming significant.
    *   **Mid-band:** The region where the gain is relatively constant.
    *   **High-Frequency Roll-off:** The gain decreases at high frequencies due to the internal parasitic capacitances of the JFET and stray capacitances.

**Reference:** This directly addresses CO3 (K3) by visually representing the amplifier's performance. The interpretation of the plot is key.

---

### 7. Factors Affecting Frequency Response

*   **Coupling Capacitors ($C_{in}$, $C_{out}$):** Their capacitance values and the input/output resistances they work with determine $f_L$. At low frequencies, their impedance ($1/(\omega C)$) increases, reducing the signal transferred to/from the amplifier stage.
    *   $f_L \approx \frac{1}{2 \pi R_{in} C_{in}}$ (for input coupling)
    *   $f_L \approx \frac{1}{2 \pi R_{out} C_{out}}$ (for output coupling)
*   **Bypass Capacitor ($C_S$):** Its capacitance and the source resistance ($R_S$) it bypasses determine the lower frequency limit for gain roll-off caused by source degeneration.
    *   $f_L \approx \frac{1}{2 \pi R_S C_S}$ (approximately, neglecting the effect of $R_S$ in the small-signal model at DC)
*   **JFET Internal Capacitances:**
    *   **Gate-Source Capacitance ($C_{gs}$):** Connects the input to the output indirectly.
    *   **Gate-Drain Capacitance ($C_{gd}$):** This is particularly problematic due to the **Miller Effect**. The Miller effect amplifies the effective capacitance between gate and drain: $C_{M} = C_{gd}(1 - A_v)$. This greatly reduces the upper cut-off frequency ($f_H$).
        *   $f_H \approx \frac{1}{2 \pi R_{in\_eff} C_{gd}(1-A_v)}$ (Simplified for Miller effect's dominance).
    *   **Gate-Drain Capacitance ($C_{ds}$):** Connects the output to the drain.
*   **Resistances in the Circuit:** $R_G$, $R_D$, $R_S$, and the input/output resistances of the JFET itself influence the time constants that set the cut-off frequencies.

**Important Point:** The choice of component values for coupling and bypass capacitors is critical for setting the lower frequency limit, while the JFET's intrinsic capacitances and circuit layout dominate the upper frequency limit.

**Reference:** Boylestad & Nashelsky and Neaman both provide detailed explanations of these phenomena, especially the Miller effect and its impact on $f_H$.

---

### 8. Practice Questions and Answers

**Q1. What is the primary purpose of the bypass capacitor ($C_S$) in a common source JFET amplifier?**
    *   **Answer:** To bypass the source resistor ($R_S$) at AC signals, preventing AC degeneration and thus maximizing the AC voltage gain. Without it, the AC voltage gain would be significantly reduced.

**Q2. If a JFET amplifier has a mid-band gain of 20 and the lower cut-off frequency is 100 Hz, what is the gain at 100 Hz?**
    *   **Answer:** The gain at the cut-off frequency ($f_L$) is $0.707$ times the mid-band gain. So, the gain at 100 Hz is $20 \times 0.707 = 14.14$.

**Q3. What phenomenon is primarily responsible for the decrease in gain at high frequencies in a JFET amplifier?**
    *   **Answer:** The Miller effect, caused by the gate-drain capacitance ($C_{gd}$) amplified by the voltage gain ($A_v$), creates a large effective capacitance that shunts the input signal at high frequencies. Parasitic capacitances like $C_{gs}$ and $C_{ds}$ also contribute.

**Q4. A common source JFET amplifier circuit has $R_D = 1 \text{ k}\Omega$, and the JFET has $g_m = 10$ mS. If $r_o$ is very large, what is the approximate voltage gain?**
    *   **Answer:** $A_v \approx -g_m R_D = -(10 \times 10^{-3} \text{ S}) \times (1 \times 10^3 \Omega) = -10$. The voltage gain is approximately -10.

**Q5. You measure the following gains for a JFET amplifier: Mid-band gain = 15 at 1 kHz. Gain at 50 Hz = 10. Gain at 20 kHz = 12. Gain at 100 kHz = 7. What can you infer about $f_L$ and $f_H$?**
    *   **Answer:**
        *   $0.707 \times 15 \approx 10.6$.
        *   Since the gain at 50 Hz (10) is less than 10.6, $f_L$ must be *higher* than 50 Hz.
        *   Since the gain at 20 kHz (12) is still close to the mid-band gain, $f_H$ is likely *higher* than 20 kHz.
        *   Since the gain at 100 kHz (7) is significantly lower than 10.6, $f_H$ is likely between 20 kHz and 100 kHz.
        *   To find exact $f_L$ and $f_H$, you would need more data points around the frequencies where the gain drops to 10.6.

---

### 9. Important Points to Remember

*   **Biasing is Crucial:** Ensure the JFET is correctly biased in the saturation region for amplification. Check DC voltages ($V_{GS}$, $V_{DS}$).
*   **Small-Signal Assumption:** Use small input voltage amplitudes to ensure the JFET operates in its linear region and the small-signal model is valid.
*   **Mid-band Gain:** Accurately measure the gain at a mid-band frequency (typically 1 kHz) as the reference for BW calculations.
*   **3dB Points:** Bandwidth is defined by the frequencies where the gain drops by 3 dB (to 70.7% of the mid-band gain).
*   **Frequency Response Plot:** Use semi-log paper for accurate visualization of the frequency response.
*   **Miller Effect:** Be aware that the Miller effect significantly impacts the high-frequency response ($f_H$).
*   **Component Selection:** Coupling and bypass capacitors affect $f_L$. Larger values shift $f_L$ lower.

---

### 10. Relating to Course Outcomes

*   **CO1 (K1):** Students will use oscilloscopes, signal generators, and multimeters to perform measurements, demonstrating knowledge of instrument operation.
*   **CO3 (K3):** Students will design and construct a common source JFET amplifier circuit and experimentally verify its performance (gain and bandwidth), showcasing the ability to implement an amplifier circuit.

---

This comprehensive study guide covers the essential aspects of measuring gain, bandwidth, and plotting the frequency response of a JFET amplifier, aligning with the learning objectives and course outcomes. Remember to consult your textbooks for detailed theoretical derivations and further examples.
