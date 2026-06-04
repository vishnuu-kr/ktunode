---
title: "Harmonic indices  (CF, DF, THD, TDD, TIF, DIN, C – message weights)"
subject: "POWER QUALITY"
module: "Module 3: Harmonic indices  (CF, DF, THD, TDD, TIF, DIN, C – message weights)"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36977"
status: "completed"
scrapedAt: "2026-05-23T16:38:54.041Z"
---
# POWER QUALITY: Module 3 - Harmonic Indices

## Introduction

This module delves into the quantitative assessment of harmonic distortion in power systems. Harmonic distortion, caused by non-linear loads, is a significant power quality issue that can lead to various problems such as equipment overheating, increased losses, and malfunctioning of sensitive electronic devices. Harmonic indices provide standardized metrics to measure and characterize the level of harmonic distortion, enabling effective monitoring, analysis, and mitigation.

**Relates to Course Outcomes:**
*   **CO1:** Identify the sources and effects of power quality problems. (Understanding how harmonic indices quantify these effects). (K2)
*   **CO2:** Apply Fourier concepts for harmonic analysis. (Harmonic indices are derived from Fourier analysis). (K3)
*   **CO3:** Explain the important aspects of power quality monitoring. (Indices are crucial for monitoring). (K2)

**Textbook References:**
*   Dugan, R. C., Me Granaghen, M. F., & Beaty, H. W. (2012). *Electrical Power System Quality*. (Chapter on Harmonics)
*   Sankaran, C. (2002). *Power Quality*. (Chapter on Harmonics)
*   Bollen, M. H. (1999). *Understanding Power Quality Problems*. (Chapter on Harmonics)
*   Singh, B., Chandra, A., & Al-Haddad, K. (2015). *Power Quality problems and mitigation techniques*. (Chapter on Harmonics)

## 3.1 Fourier Concepts for Harmonic Analysis (Brief Recap)

Before diving into harmonic indices, it's essential to recall the fundamentals of Fourier analysis, as it forms the basis for their calculation.

*   **Definition:** Any periodic but non-sinusoidal waveform can be represented as a sum of a fundamental frequency sinusoid and its integer multiples (harmonics) and possibly a DC component.
    $$v(t) = V_0 + \sum_{n=2}^{\infty} V_n \sin(n\omega_0 t + \phi_n)$$
    where:
    *   $V_0$: DC component
    *   $V_n$: Amplitude of the nth harmonic
    *   $\omega_0$: Fundamental angular frequency ($2\pi f_0$)
    *   $n$: Harmonic order (integer)
    *   $\phi_n$: Phase angle of the nth harmonic

*   **Key Components:**
    *   **Fundamental Component ($n=1$):** The main sinusoidal component at the system frequency (e.g., 50 Hz or 60 Hz).
    *   **Harmonic Components ($n > 1$):** Sinusoidal components at frequencies that are integer multiples of the fundamental frequency.
    *   **DC Offset ($n=0$):** A constant voltage or current value.

**Relates to Course Outcomes:**
*   **CO2:** Apply Fourier concepts for harmonic analysis. (This section directly addresses this). (K3)

**Important Point to Remember:** Harmonics are integer multiples of the fundamental frequency.

## 3.2 Key Harmonic Indices

Harmonic indices are numerical values that quantify the severity of harmonic distortion in a voltage or current waveform.

### 3.2.1 Total Harmonic Distortion (THD)

**Definition:** THD is the most common index used to measure the total harmonic distortion in a signal. It represents the ratio of the root-mean-square (RMS) value of all harmonic components to the RMS value of the fundamental component.

**Formula:**
$$THD = \frac{\sqrt{\sum_{n=2}^{\infty} V_n^2}}{V_1} \times 100\%$$
where:
*   $V_n$: RMS value of the nth harmonic voltage component.
*   $V_1$: RMS value of the fundamental voltage component.

**Key Concepts:**
*   **Non-linearity:** THD is a measure of how much the waveform deviates from a pure sine wave due to harmonic content.
*   **RMS Value:** Calculations are typically based on RMS values of the components.
*   **Excludes DC:** The summation starts from the second harmonic ($n=2$), excluding the DC component.
*   **Voltage and Current:** THD can be calculated for both voltage (THDv) and current (THDi).

**Example:**
Consider a voltage waveform with the following components:
*   Fundamental ($V_1$) = 120 V
*   3rd Harmonic ($V_3$) = 10 V
*   5th Harmonic ($V_5$) = 5 V
*   All other harmonics are negligible.

$$THD = \frac{\sqrt{10^2 + 5^2}}{120} \times 100\% = \frac{\sqrt{100 + 25}}{120} \times 100\% = \frac{\sqrt{125}}{120} \times 100\% \approx \frac{11.18}{120} \times 100\% \approx 9.32\%$$

**Textbook Reference:**
*   Dugan et al. (2012) defines THD as the ratio of the RMS of harmonics to the RMS of the fundamental.
*   Sankaran (2002) emphasizes THD as a primary indicator of harmonic distortion.

**Relates to Course Outcomes:**
*   **CO2:** Apply Fourier concepts for harmonic analysis. (Calculation of THD requires knowledge of harmonic amplitudes). (K3)
*   **CO3:** Explain the important aspects of power quality monitoring. (THD is a key parameter in monitoring). (K2)

**Important Point to Remember:** THD indicates the *proportion* of harmonic energy relative to the fundamental.

### 3.2.2 Total Demand Distortion (TDD)

**Definition:** TDD is similar to THD but is calculated with respect to the *maximum expected or measured demand current* rather than the fundamental current. This is particularly useful for assessing the impact of harmonic currents injected by a specific customer into the utility system.

**Formula:**
$$TDD = \frac{\sqrt{\sum_{n=2}^{\infty} I_n^2}}{I_{LL}} \times 100\%$$
where:
*   $I_n$: RMS value of the nth harmonic current component.
*   $I_{LL}$: Maximum load current (or peak demand current) at the point of common coupling.

**Key Concepts:**
*   **Utility Perspective:** TDD is designed to reflect the impact on the utility's distribution system, where the total harmonic current contribution from a load can be significant.
*   **Normalization:** Normalizing to the maximum load current provides a more consistent measure of harmonic impact across different load levels.
*   **IEEE Standard 519:** TDD is a key index in IEEE Standard 519 for controlling harmonic current emissions.

**Example:**
Consider a facility where the maximum demand current is 500 A. The measured harmonic currents are:
*   3rd Harmonic ($I_3$) = 30 A
*   5th Harmonic ($I_5$) = 15 A
*   7th Harmonic ($I_7$) = 5 A

$$TDD = \frac{\sqrt{30^2 + 15^2 + 5^2}}{500} \times 100\% = \frac{\sqrt{900 + 225 + 25}}{500} \times 100\% = \frac{\sqrt{1150}}{500} \times 100\% \approx \frac{33.93}{500} \times 100\% \approx 6.79\%$$

**Textbook Reference:**
*   Dugan et al. (2012) explains TDD in the context of harmonic current limits set by utilities.
*   Singh et al. (2015) highlights TDD's importance for utility-customer interface.

**Relates to Course Outcomes:**
*   **CO1:** Identify the sources and effects of power quality problems. (TDD quantifies the impact of harmonic sources). (K2)
*   **CO3:** Explain the important aspects of power quality monitoring. (TDD is crucial for monitoring harmonic current injections). (K2)

**Important Point to Remember:** TDD relates harmonic currents to the *load's capacity*, not just the fundamental current.

### 3.2.3 Crest Factor (CF)

**Definition:** The Crest Factor is the ratio of the peak instantaneous value of a waveform to its RMS value. It indicates the "peakiness" of a waveform.

**Formula:**
$$CF = \frac{V_{peak}}{V_{rms}}$$
where:
*   $V_{peak}$: Peak instantaneous value of the waveform.
*   $V_{rms}$: RMS value of the waveform.

**Key Concepts:**
*   **Peak Value:** Sensitive to the highest instantaneous value.
*   **Distortion Indicator:** A pure sine wave has a CF of $\sqrt{2} \approx 1.414$. Deviations from this value can indicate the presence of harmonics and other distortions.
*   **Transformer Saturation:** High CF can lead to increased stress on transformer cores, potentially causing saturation.

**Example:**
Consider a waveform with a peak value of 170 V and an RMS value of 120 V.
$$CF = \frac{170}{120} \approx 1.417$$
This is close to the CF of a pure sine wave, indicating low distortion.

Now consider a waveform with a peak value of 200 V and an RMS value of 120 V.
$$CF = \frac{200}{120} \approx 1.667$$
This higher CF suggests the presence of significant harmonics or other waveform distortions, potentially indicating a problematic load.

**Textbook Reference:**
*   Sankaran (2002) discusses CF as a measure of waveform distortion and its impact on equipment.
*   Bollen (1999) associates CF with the likelihood of overvoltages and equipment stress.

**Relates to Course Outcomes:**
*   **CO1:** Identify the sources and effects of power quality problems. (CF is an indicator of stress on equipment). (K2)
*   **CO3:** Explain the important aspects of power quality monitoring. (CF is a parameter monitored for waveform integrity). (K2)

**Important Point to Remember:** Higher CF than a pure sine wave indicates waveform distortion.

### 3.2.4 Distortion Factor (DF)

**Definition:** The Distortion Factor is a measure of harmonic distortion, specifically the ratio of the RMS value of all harmonic components to the RMS value of the fundamental component, but *without* the percentage multiplication. It is essentially THD expressed as a decimal.

**Formula:**
$$DF = \frac{\sqrt{\sum_{n=2}^{\infty} V_n^2}}{V_1}$$

**Key Concepts:**
*   **Relationship to THD:** $DF = THD / 100\%$.
*   **Convenience:** Sometimes used in calculations where percentages are not desired.

**Example:**
Using the THD example above:
$THD = 9.32\%$
$DF = 9.32\% / 100\% = 0.0932$

**Textbook Reference:**
*   While less commonly highlighted as a distinct index in some texts, the underlying concept of the ratio of harmonics to the fundamental is pervasive. Dugan et al. (2012) and Sankaran (2002) implicitly deal with this ratio when discussing THD.

**Relates to Course Outcomes:**
*   **CO2:** Apply Fourier concepts for harmonic analysis. (Directly related to harmonic calculations). (K3)

**Important Point to Remember:** DF is the decimal equivalent of THD.

## 3.3 Frequency-Weighted Harmonic Indices

Some harmonic indices are "frequency-weighted" to account for the fact that certain harmonics can be more detrimental than others. The weighting is typically based on the susceptibility of equipment to particular harmonic frequencies.

### 3.3.1 Telephone Interference Factor (TIF)

**Definition:** TIF is a measure of the harmonic voltage present in a power system that can cause interference with communication circuits, specifically those using telephony. It is a frequency-weighted index that gives more importance to harmonics that are more likely to cause audible noise in telephone receivers.

**Formula:**
$$TIF = \sqrt{\sum_{n=2}^{\infty} (w_n V_n)^2}$$
where:
*   $w_n$: Frequency weighting factor for the nth harmonic.
*   $V_n$: RMS value of the nth harmonic voltage component.

**Key Concepts:**
*   **Frequency Weighting Curve:** A specific weighting curve (e.g., the "Bell Telephone" weighting curve) is used to assign values to $w_n$. This curve typically has higher values for harmonics in the range of 500 Hz to 3 kHz, as these frequencies are particularly disruptive to voice communication.
*   **Communication Impact:** TIF directly relates harmonic distortion to its potential impact on telecommunication systems.
*   **Higher Harmonics:** TIF gives more significant weight to higher-order harmonics that might have smaller RMS values but are more troublesome for audio frequencies.

**Example:**
A power system has the following harmonic voltages:
*   $V_3 = 5V$
*   $V_5 = 3V$
*   $V_7 = 2V$
*   $V_{11} = 1V$
*   $V_{13} = 0.5V$
(Assuming other harmonics are negligible for simplicity)

Let's assume hypothetical weighting factors ($w_n$) based on a typical TIF curve:
*   $w_3 = 0.5$
*   $w_5 = 1.0$
*   $w_7 = 2.0$
*   $w_{11} = 3.0$
*   $w_{13} = 4.0$

$$TIF = \sqrt{(0.5 \times 5)^2 + (1.0 \times 3)^2 + (2.0 \times 2)^2 + (3.0 \times 1)^2 + (4.0 \times 0.5)^2}$$
$$TIF = \sqrt{(2.5)^2 + (3.0)^2 + (4.0)^2 + (3.0)^2 + (2.0)^2}$$
$$TIF = \sqrt{6.25 + 9.0 + 16.0 + 9.0 + 4.0} = \sqrt{44.25} \approx 6.65$$

**Textbook Reference:**
*   Dugan et al. (2012) provides a detailed explanation of TIF, including the weighting curve and its derivation.
*   Sankaran (2002) also covers TIF as an important metric for assessing communication interference.

**Relates to Course Outcomes:**
*   **CO1:** Identify the sources and effects of power quality problems. (TIF quantifies the effect of harmonics on communication systems). (K2)
*   **CO3:** Explain the important aspects of power quality monitoring. (TIF is a parameter monitored when communication interference is a concern). (K2)

**Important Point to Remember:** TIF is specifically designed to measure harmonic impact on telecommunication systems by weighting frequencies according to their potential to cause audible noise.

### 3.3.2 Harmonic Distortion Index (DIN) - (Not a Standard Index, often context-dependent)

**Note:** The term "DIN" in the context of harmonic indices is not a universally recognized standard index like THD or TIF. It's possible this refers to a specific internal standard or a less common metric used in certain regions or by particular manufacturers. If this is a term used in your course, it's important to clarify its exact definition and application as provided by your instructor or course materials.

**Possible Interpretations (Hypothetical based on common practices):**

1.  **Harmonic Distortion Index for a Specific Standard (e.g., DIN Standards):** If there are specific German (DIN) standards related to power quality, "DIN" might refer to an index defined within those standards. These could be similar to THD or TDD but with different limits or calculation methodologies.
2.  **Distortion Index related to a Specific Device:** It might be an index developed to assess distortion in relation to the performance of a particular device or system (e.g., inverter distortion index).

**Assuming a hypothetical definition for illustration:**
Let's assume "DIN" refers to a "Weighted Distortion Index" where specific harmonic orders are emphasized based on a particular application's sensitivity.

**Hypothetical Formula:**
$$DIN = \sqrt{\sum_{n=2}^{\infty} (k_n V_n)^2}$$
where:
*   $k_n$: A hypothetical weighting factor specific to the "DIN" definition.

**Example (Hypothetical):**
If the "DIN" index emphasizes even harmonics more than odd harmonics for a particular application:
*   $V_3 = 5V$, $k_3 = 0.5$
*   $V_4 = 3V$, $k_4 = 2.0$
*   $V_5 = 2V$, $k_5 = 1.0$
*   $V_6 = 4V$, $k_6 = 3.0$

$$DIN = \sqrt{(0.5 \times 5)^2 + (2.0 \times 3)^2 + (1.0 \times 2)^2 + (3.0 \times 4)^2}$$
$$DIN = \sqrt{(2.5)^2 + (6.0)^2 + (2.0)^2 + (12.0)^2}$$
$$DIN = \sqrt{6.25 + 36.0 + 4.0 + 144.0} = \sqrt{190.25} \approx 13.79$$

**Actionable Step:**
**Clarify the definition of "DIN" with your instructor or course materials.** Without a precise definition, it's difficult to provide accurate notes.

**Relates to Course Outcomes:**
*   **CO1:** Identify the sources and effects of power quality problems. (If DIN relates to specific effects). (K2)
*   **CO3:** Explain the important aspects of power quality monitoring. (If DIN is a monitored parameter). (K2)

**Important Point to Remember:** Verify the definition and application of "DIN" as it is not a universally standard harmonic index.

### 3.3.3 C-message Weights (C-Message Weighted Noise Voltage)

**Definition:** C-message weighting is a specific frequency weighting applied to noise voltages in communication circuits, particularly in telephony, to simulate the human ear's response to speech frequencies. While not strictly a harmonic *index* in the same vein as THD, it's a method of evaluating the *audible noise* contribution from specific frequency components, often including harmonics.

**Formula:**
$$V_{C-msg} = \sqrt{\sum_{n} (w_{C,n} V_n)^2}$$
where:
*   $w_{C,n}$: C-message weighting factor for the nth harmonic frequency.
*   $V_n$: RMS value of the nth harmonic voltage.

**Key Concepts:**
*   **Audio Frequency Focus:** The weighting curve is designed to emphasize frequencies between approximately 500 Hz and 3 kHz, where human speech intelligibility is highest.
*   **Audible Noise:** Measures the "noisiness" that a human listener might perceive, especially through telephone equipment.
*   **Weighting Curve:** Similar to TIF, it relies on a specific weighting curve that assigns higher values to frequencies within the speech range.

**Example:**
Assume a power system has harmonic components that contribute to audible noise.
*   $V_3 = 5V$, $w_{C,3} = 0.1$ (Low C-message weight for 3rd harmonic)
*   $V_5 = 3V$, $w_{C,5} = 0.5$
*   $V_7 = 2V$, $w_{C,7} = 1.0$
*   $V_{11} = 1V$, $w_{C,11} = 1.5$
*   $V_{13} = 0.5V$, $w_{C,13} = 1.2$

$$V_{C-msg} = \sqrt{(0.1 \times 5)^2 + (0.5 \times 3)^2 + (1.0 \times 2)^2 + (1.5 \times 1)^2 + (1.2 \times 0.5)^2}$$
$$V_{C-msg} = \sqrt{(0.5)^2 + (1.5)^2 + (2.0)^2 + (1.5)^2 + (0.6)^2}$$
$$V_{C-msg} = \sqrt{0.25 + 2.25 + 4.0 + 2.25 + 0.36} = \sqrt{9.11} \approx 3.02 \text{ V (C-message weighted)}$$

**Textbook Reference:**
*   Dugan et al. (2012) may refer to C-message weighting as a specific type of weighting used in certain PQ analyses, especially concerning communication interference.
*   Sankaran (2002) might also discuss it as a method for assessing audio-frequency noise.

**Relates to Course Outcomes:**
*   **CO1:** Identify the sources and effects of power quality problems. (C-message weighting assesses the effect of harmonics on audible noise). (K2)
*   **CO3:** Explain the important aspects of power quality monitoring. (If audible noise is a monitored aspect). (K2)

**Important Point to Remember:** C-message weighting focuses on the audibility of noise by simulating human ear response, particularly for speech frequencies.

## 3.4 Relationship between Indices and Course Outcomes

Let's explicitly link the learned indices to the course outcomes:

*   **CO1: Identify the sources and effects of power quality problems.**
    *   **THD/TDD:** Quantify the overall harmonic distortion, indicating the severity of a problem caused by non-linear loads.
    *   **CF:** Indicates waveform distortion that can lead to equipment stress (e.g., overheating, insulation breakdown).
    *   **TIF/C-message:** Quantify the specific effect of harmonics on communication systems and audible noise.

*   **CO2: Apply Fourier concepts for harmonic analysis.**
    *   **All Indices:** Their calculation directly relies on the amplitude and RMS values of harmonic components obtained through Fourier analysis. Understanding the fundamental and its harmonics is prerequisite.

*   **CO3: Explain the important aspects of power quality monitoring.**
    *   **All Indices:** These are the primary metrics used to monitor the level of harmonic distortion in a power system. Regular monitoring of THD, TDD, CF, TIF, etc., helps in identifying problematic loads or system conditions and assessing the effectiveness of mitigation measures.

*   **CO4: Examine power quality mitigation techniques.**
    *   The indices are used *before* mitigation to establish baseline performance and *after* mitigation to evaluate its effectiveness. For instance, installing harmonic filters aims to reduce THD/TDD.

*   **CO5: Discuss power quality issues in grid connected renewable energy systems.**
    *   Inverters in renewable energy systems (e.g., solar PV, wind turbines) often introduce harmonics. Indices like THD, TDD, and CF are used to characterize the harmonic injection from these sources into the grid and to ensure compliance with grid codes.

## 3.5 Practice Questions and Answers

**Question 1:** A 120V RMS voltage waveform has a fundamental component of 115V RMS and a third harmonic component of 5V RMS. Calculate the THD of the voltage.

**Answer 1:**
$$THD = \frac{\sqrt{V_3^2}}{V_1} \times 100\% = \frac{\sqrt{5^2}}{115} \times 100\% = \frac{5}{115} \times 100\% \approx 4.35\%$$

**Question 2:** A facility has a maximum demand current of 200A. The measured harmonic currents are: $I_3 = 10A$, $I_5 = 6A$, $I_7 = 3A$. Calculate the TDD.

**Answer 2:**
$$TDD = \frac{\sqrt{I_3^2 + I_5^2 + I_7^2}}{I_{LL}} \times 100\% = \frac{\sqrt{10^2 + 6^2 + 3^2}}{200} \times 100\%$$
$$TDD = \frac{\sqrt{100 + 36 + 9}}{200} \times 100\% = \frac{\sqrt{145}}{200} \times 100\% \approx \frac{12.04}{200} \times 100\% \approx 6.02\%$$

**Question 3:** What is the Crest Factor for a pure sinusoidal voltage waveform?
    a) 1.0
    b) 1.414
    c) 2.0
    d) $\sqrt{3}$

**Answer 3:**
b) 1.414 (The peak value of a sine wave is $V_{peak} = V_{rms} \times \sqrt{2}$, so $CF = V_{peak} / V_{rms} = \sqrt{2} \approx 1.414$)

**Question 4:** Which harmonic index is specifically designed to measure the potential for audible noise in telephone lines?
    a) THD
    b) TDD
    c) TIF
    d) CF

**Answer 4:**
c) TIF (Telephone Interference Factor is designed for this purpose, with C-message weighting being a specific method used within TIF calculations or for similar assessments.)

**Question 5:** If the RMS value of a waveform is 100V and its peak value is 180V, calculate its Crest Factor.

**Answer 5:**
$$CF = \frac{V_{peak}}{V_{rms}} = \frac{180V}{100V} = 1.8$$

## 3.6 Important Points to Remember

*   **Harmonic Distortion:** Caused by non-linear loads, leading to non-sinusoidal waveforms.
*   **THD:** Ratio of harmonic RMS to fundamental RMS (percentage). Measures total harmonic content.
*   **TDD:** Ratio of harmonic RMS to maximum load current (percentage). Useful for utility impact assessment.
*   **CF:** Ratio of peak value to RMS value. Indicates waveform "peakiness" and potential stress.
*   **TIF:** Frequency-weighted harmonic voltage, specifically assessing interference with communication systems.
*   **C-message weighting:** A specific weighting scheme used to evaluate audible noise in communication circuits by simulating human ear response.
*   **Fourier Analysis:** The foundation for calculating all harmonic indices.
*   **Monitoring:** These indices are critical tools for monitoring power quality and ensuring compliance with standards (e.g., IEEE 519).

## Conclusion

Understanding and quantifying harmonic distortion through various indices is fundamental to addressing power quality issues. THD and TDD provide overall measures of harmonic severity, while CF highlights waveform shape characteristics. TIF and C-message weighting focus on the specific impact of harmonics on communication systems and audible noise. By applying these indices, engineers can effectively diagnose, monitor, and mitigate harmonic problems, ensuring reliable and efficient operation of power systems and connected equipment.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
