---
title: "Filters – Passive filters - First and second order RC-filters - Low-pass first-order RC-filter – High pass first-order RC-filter – Band pass filters"
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 2: Industrial signal conditioning systems"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463670"
status: "completed"
scrapedAt: "2026-05-20T18:00:37.854Z"
---
# Instrumentation and Control Systems - Module 2: Industrial Signal Conditioning Systems

## Topic: Filters – Passive Filters - First and Second Order RC-Filters – Low-Pass First-Order RC-Filter – High-Pass First-Order RC-Filter – Band-Pass Filters

---

### 1. Introduction to Filters in Signal Conditioning (CO1, CO3 - K2, K4)

**Definition:** Filters are electronic circuits designed to pass signals within a certain frequency range and block signals outside that range. They are crucial in signal conditioning to remove unwanted noise and isolate the desired signal.

**Importance in Industrial Applications:**
*   **Noise Reduction:** Industrial environments are often noisy with electrical interference. Filters remove this noise, improving signal quality.
*   **Frequency Selection:** Isolating specific frequency components of a signal is essential for accurate measurements and control.
*   **Protection:** Filters can prevent high-frequency transients from damaging sensitive measurement equipment.
*   **Signal Shaping:** Filters can modify the frequency content of a signal to meet the requirements of subsequent stages (e.g., analog-to-digital converters).

**Types of Filters:**
*   **Passive Filters:** Constructed using only passive components (resistors, capacitors, inductors). They do not require an external power source.
*   **Active Filters:** Use active components (amplifiers, transistors) in addition to passive components. They require a power source and can provide signal gain.

**This module focuses on PASSIVE FILTERS.**

---

### 2. Passive Filters (CO3 - K4)

**Key Characteristics:**
*   **Components:** Resistors (R), Capacitors (C), Inductors (L).
*   **No Gain:** Passive filters cannot amplify a signal; they can only attenuate it. The maximum voltage gain is typically unity (0 dB).
*   **Simplicity:** Generally simpler in design compared to active filters.
*   **Power Dissipation:** Dissipate energy as heat, especially resistors.
*   **Loading Effects:** The output of a passive filter can be significantly affected by the impedance of the load connected to it.

**Basic Passive Filter Configurations:**
*   **RC Filters:** Use resistors and capacitors.
*   **RL Filters:** Use resistors and inductors.
*   **LC Filters:** Use inductors and capacitors.

**We will primarily focus on RC filters due to their common use and simplicity in signal conditioning.**

---

### 3. First-Order RC Filters (CO3 - K4)

**Definition:** A first-order filter uses a single reactive element (either a capacitor or an inductor) in combination with a resistor. These filters have a roll-off rate of -20 dB per decade (or -6 dB per octave) in their stopband.

**Analysis Method (Using Laplace Transform):**
The transfer function, $H(s) = \frac{V_{out}(s)}{V_{in}(s)}$, is used to characterize the filter's behavior.

#### 3.1. Low-Pass First-Order RC Filter (CO3 - K4)

**Circuit Configuration:**
*   A resistor (R) in series with the input signal.
*   A capacitor (C) in parallel with the output, connected to ground.

```
      R
Vin ---/\/\/----o---- Vout
             |
             ---||---
             |
            GND
```

**Derivation of Transfer Function:**
Using voltage division:
$H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{Z_C}{R + Z_C}$
where $Z_C = \frac{1}{sC}$ is the impedance of the capacitor.

$H(s) = \frac{\frac{1}{sC}}{R + \frac{1}{sC}} = \frac{1}{sRC + 1}$

**Standard Form:**
$H(s) = \frac{1}{1 + sRC}$

**Cut-off Frequency ($f_c$) or Corner Frequency ($\omega_c$):**
This is the frequency at which the magnitude of the transfer function is $\frac{1}{\sqrt{2}}$ (or -3 dB) of its passband value.
$|H(j\omega)| = \frac{1}{\sqrt{1 + (\omega RC)^2}}$
At $\omega = \omega_c$, $|H(j\omega_c)| = \frac{1}{\sqrt{2}}$.
So, $1 + (\omega_c RC)^2 = 2$, which implies $(\omega_c RC)^2 = 1$.
$\omega_c RC = 1 \implies \omega_c = \frac{1}{RC}$
$f_c = \frac{\omega_c}{2\pi} = \frac{1}{2\pi RC}$

**Key Characteristics:**
*   **Passband:** Frequencies from 0 Hz up to $f_c$ are passed with minimal attenuation.
*   **Stopband:** Frequencies significantly above $f_c$ are attenuated.
*   **Roll-off:** -20 dB/decade or -6 dB/octave.
*   **Phase Shift:** The output signal lags the input signal. The phase shift ranges from 0° (at DC) to -90° (at very high frequencies). At $f_c$, the phase shift is -45°.

**Application Example:**
*   Smoothing out ripple from a power supply.
*   Removing high-frequency noise from sensor readings (e.g., from a thermistor or strain gauge).

**Important Point to Remember:**
*   The cut-off frequency is the frequency where the signal power is halved.

**Reference (Krishnaswamy, 2003):** Chapter on Signal Conditioning, discusses the application of RC networks for filtering.

#### 3.2. High-Pass First-Order RC Filter (CO3 - K4)

**Circuit Configuration:**
*   A capacitor (C) in series with the input signal.
*   A resistor (R) in parallel with the output, connected to ground.

```
      C
Vin ---||----o---- Vout
            |
           ---/\/\/---
           |
          GND
```

**Derivation of Transfer Function:**
Using voltage division:
$H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{R}{R + Z_C}$
where $Z_C = \frac{1}{sC}$.

$H(s) = \frac{R}{R + \frac{1}{sC}} = \frac{sRC}{sRC + 1}$

**Standard Form:**
$H(s) = \frac{s}{s + \frac{1}{RC}}$

**Cut-off Frequency ($f_c$) or Corner Frequency ($\omega_c$):**
Similar to the low-pass filter, the cut-off frequency is where the magnitude of the transfer function is $\frac{1}{\sqrt{2}}$ of its passband value.
$|H(j\omega)| = \frac{\omega RC}{\sqrt{1 + (\omega RC)^2}}$
At $\omega = \omega_c$, $|H(j\omega_c)| = \frac{1}{\sqrt{2}}$.
So, $(\omega_c RC)^2 = 1 \implies \omega_c = \frac{1}{RC}$
$f_c = \frac{1}{2\pi RC}$

**Key Characteristics:**
*   **Passband:** Frequencies significantly above $f_c$ are passed with minimal attenuation.
*   **Stopband:** Frequencies from 0 Hz up to $f_c$ are attenuated.
*   **Roll-off:** -20 dB/decade or -6 dB/octave.
*   **Phase Shift:** The output signal leads the input signal. The phase shift ranges from +90° (at very low frequencies) to 0° (at very high frequencies). At $f_c$, the phase shift is +45°.

**Application Example:**
*   Removing DC offset from a sensor signal.
*   Blocking low-frequency noise or drift.
*   Coupling AC signals between stages.

**Important Point to Remember:**
*   High-pass filters block DC components and low-frequency signals.

**Reference (Doebelin, 1990):** Chapter on Signal Conditioning, describes the use of filters for attenuating undesired frequencies.

---

### 4. Second-Order RC Filters (CO3 - K4)

**Definition:** Second-order filters use two reactive elements (typically two capacitors or a capacitor and an inductor) along with resistors. They offer a steeper roll-off rate of -40 dB/decade (or -12 dB/octave) compared to first-order filters.

**General Form of Transfer Function (for passive LC and active filters):**
$H(s) = \frac{K \omega_n^2}{s^2 + 2\zeta \omega_n s + \omega_n^2}$
where:
*   $K$ is the DC gain.
*   $\omega_n$ is the undamped natural frequency.
*   $\zeta$ (zeta) is the damping ratio, which determines the filter's response characteristics (e.g., Butterworth, Chebyshev, Bessel).

**Second-Order Low-Pass RC Filter:**
A common implementation uses an RC network followed by another RC network, or an RL network. A simple second-order low-pass RC filter can be implemented with two RC stages, but this usually results in a roll-off of -40 dB/decade if designed appropriately or can be less steep if cascaded passively without buffering.

**Simple Passive Second-Order Low-Pass RC Filter Circuit (example using two RC stages):**

```
      R1        R2
Vin ---/\/\/----o----o---- Vout
             |     |
             ---||--- ---||---
             |     |
            GND   GND
```
*This specific configuration with simple cascading of passive RC filters will have a lower roll-off if not designed carefully or buffered. More common implementations use active components or LC networks for defined second-order responses.*

**For the scope of this topic, we will focus on the conceptual understanding of second-order filters providing a steeper roll-off and the ability to achieve different response types based on damping.**

**Key Concepts for Second-Order Filters (though not exclusively passive RC):**
*   **Butterworth Filter:** Maximally flat passband, -40 dB/decade roll-off.
*   **Chebyshev Filter:** Steeper roll-off than Butterworth in the stopband, but has ripples in the passband.
*   **Bessel Filter:** Linear phase response (preserves waveform shape), but slower roll-off.

**Reference (Nise, 6/e or Ogata, 5/e):** These textbooks extensively cover filter design and analysis, including higher-order filters and their characteristics, which are relevant for advanced signal conditioning.

---

### 5. Band-Pass Filters (CO3 - K4)

**Definition:** A band-pass filter allows frequencies within a specific range (band) to pass while attenuating frequencies above and below this band. It essentially combines the characteristics of a low-pass filter and a high-pass filter.

**Circuit Configuration:**
A band-pass filter can be constructed by cascading a low-pass filter and a high-pass filter. The cut-off frequency of the low-pass filter must be higher than the cut-off frequency of the high-pass filter.

**Cascaded High-Pass and Low-Pass RC Filter:**

```
      C1        R1
Vin ---||----o---/\/\/----o---- Vout
            |     |
           ---/\/\/--- ---||---
           |     |
          GND   GND
```
*   The first stage (C1, R1) acts as a high-pass filter with cut-off frequency $f_{c,HP} = \frac{1}{2\pi R_1 C_1}$.
*   The second stage (R2, C2) acts as a low-pass filter with cut-off frequency $f_{c,LP} = \frac{1}{2\pi R_2 C_2}$.
*   For a band-pass response, we need $f_{c,LP} > f_{c,HP}$.

**Transfer Function:**
The overall transfer function is the product of the individual transfer functions (assuming no loading effects, which might require buffers or specific component values).

$H_{HP}(s) = \frac{sRC_1}{1+sR_1C_1}$
$H_{LP}(s) = \frac{1}{1+sR_2C_2}$

$H(s) = H_{HP}(s) \times H_{LP}(s) = \frac{sR_1C_1}{(1+sR_1C_1)(1+sR_2C_2)}$

**Key Characteristics:**
*   **Passband:** Frequencies between the lower cut-off frequency ($f_{c,lower}$) and the upper cut-off frequency ($f_{c,upper}$) are passed.
*   **Stopband:** Frequencies below $f_{c,lower}$ and above $f_{c,upper}$ are attenuated.
*   **Center Frequency ($f_0$):** The frequency at the peak response of the band-pass filter. For simple RC filters, it's often related to the geometric mean of the cut-off frequencies.
*   **Bandwidth (BW):** The range of frequencies between the lower and upper -3 dB points: $BW = f_{c,upper} - f_{c,lower}$.
*   **Quality Factor (Q):** A measure of the selectivity of the filter. $Q = \frac{f_0}{BW}$. A higher Q indicates a narrower bandwidth and more selective filter.

**Application Example:**
*   Selecting a specific sensor's output frequency from a mixed signal environment.
*   Demodulating signals in communication systems.
*   Analyzing vibration signals to identify specific frequencies of interest.

**Important Point to Remember:**
*   Band-pass filters are formed by combining high-pass and low-pass filtering characteristics.

**Reference (Patranabis, 2017):** Chapter on Signal Conditioning Circuits, will cover the principles and implementation of various filter types.

---

### 6. Practice Questions and Answers

**Question 1:**
A first-order low-pass RC filter has a resistor of 10 k$\Omega$ and a capacitor of 0.1 $\mu$F. Calculate the cut-off frequency.
**(CO3 - K4)**

**Answer 1:**
The cut-off frequency $f_c$ is given by:
$f_c = \frac{1}{2\pi RC}$
$R = 10 \times 10^3 \Omega$
$C = 0.1 \times 10^{-6}$ F

$f_c = \frac{1}{2\pi \times (10 \times 10^3 \Omega) \times (0.1 \times 10^{-6} \text{ F})}$
$f_c = \frac{1}{2\pi \times 10^{-3}}$
$f_c = \frac{1000}{2\pi} \approx 159.15 \text{ Hz}$

**Question 2:**
What is the primary characteristic that distinguishes a first-order filter from a second-order filter in terms of frequency response?
**(CO3 - K4)**

**Answer 2:**
The primary distinguishing characteristic is the **roll-off rate** in the stopband. A first-order filter has a roll-off rate of -20 dB/decade, while a second-order filter has a roll-off rate of -40 dB/decade. This means second-order filters offer a much sharper attenuation of unwanted frequencies.

**Question 3:**
Explain why a high-pass RC filter is useful for removing DC offset from a sensor signal.
**(CO1, CO3 - K2, K4)**

**Answer 3:**
A high-pass filter attenuates low frequencies, including DC (which is 0 Hz). The transfer function of a high-pass filter is of the form $H(s) = \frac{sRC}{1+sRC}$. At $s=0$ (DC), $H(0) = 0$, indicating that the DC component of the input signal is completely blocked. Therefore, when a sensor signal with an unwanted DC offset is passed through a high-pass filter, the DC component is removed, leaving only the AC or time-varying part of the signal.

**Question 4:**
Design a simple passive band-pass filter using RC networks that passes frequencies between 100 Hz and 1000 Hz. Specify the component values.
**(CO3 - K4)**

**Answer 4:**
To create a band-pass filter, we cascade a high-pass filter and a low-pass filter.
Let $f_{c,HP}$ be the cut-off frequency of the high-pass filter, and $f_{c,LP}$ be the cut-off frequency of the low-pass filter.
We need $f_{c,HP} < f_{c,LP}$.

Let's choose:
*   $f_{c,HP} = 100 \text{ Hz}$
*   $f_{c,LP} = 1000 \text{ Hz}$

**High-Pass Section (RC):**
$f_{c,HP} = \frac{1}{2\pi R_1 C_1}$
Let $C_1 = 0.1 \mu$F.
$R_1 = \frac{1}{2\pi f_{c,HP} C_1} = \frac{1}{2\pi \times 100 \text{ Hz} \times 0.1 \times 10^{-6} \text{ F}}$
$R_1 = \frac{1}{2\pi \times 10^{-5}} \approx 15.915 \text{ k}\Omega$. Let's choose $R_1 = 16 \text{ k}\Omega$.

**Low-Pass Section (RC):**
$f_{c,LP} = \frac{1}{2\pi R_2 C_2}$
Let $C_2 = 0.01 \mu$F.
$R_2 = \frac{1}{2\pi f_{c,LP} C_2} = \frac{1}{2\pi \times 1000 \text{ Hz} \times 0.01 \times 10^{-6} \text{ F}}$
$R_2 = \frac{1}{2\pi \times 10^{-5}} \approx 15.915 \text{ k}\Omega$. Let's choose $R_2 = 16 \text{ k}\Omega$.

**Circuit:**
*   High-pass stage: Capacitor $C_1 = 0.1 \mu$F in series with resistor $R_1 = 16 \text{ k}\Omega$.
*   Low-pass stage: Resistor $R_2 = 16 \text{ k}\Omega$ in series with capacitor $C_2 = 0.01 \mu$F.
The output of the high-pass stage is fed to the input of the low-pass stage.

*(Note: This cascaded passive design has limitations due to loading effects. For better performance, buffering between stages or active filter designs are preferred.)*

---

### 7. Important Points to Remember

*   **Passive filters** use only R, L, C components and do not provide gain.
*   **First-order filters** have a roll-off rate of -20 dB/decade.
*   **Low-pass filters** pass low frequencies and attenuate high frequencies.
*   **High-pass filters** pass high frequencies and attenuate low frequencies (including DC).
*   **Cut-off frequency ($f_c$)** for first-order RC filters is $\frac{1}{2\pi RC}$. At this frequency, the output power is halved (-3 dB).
*   **Band-pass filters** allow a range of frequencies to pass and are formed by combining high-pass and low-pass filter characteristics.
*   **Second-order filters** offer a steeper roll-off (-40 dB/decade) and more flexibility in response shaping (e.g., Butterworth, Chebyshev).
*   **Loading effects** in passive filters can alter their performance and must be considered, often necessitating buffering.

---

### 8. Alignment with Course Outcomes

*   **CO1 (K2):** Basic knowledge of industrial measurement systems is supported by understanding filters as essential signal conditioning elements in these systems.
*   **CO2 (K4):** While this topic doesn't directly cover sensors/transducers, filters are applied to the signals generated by them, making it a prerequisite for understanding sensor signal processing.
*   **CO3 (K4):** This module directly addresses the knowledge of signal conditioning circuits like filters, their types (passive, RC), and their operational principles (low-pass, high-pass, band-pass).
*   **CO4 (K3):** Understanding filtering is foundational for understanding how control blocks (which often process conditioned signals) operate in feedback systems.
*   **CO5 (K4) & CO6 (K4):** While this topic doesn't delve into time-domain response analysis or root locus techniques directly, filters influence the overall system response. Understanding filter characteristics is crucial for analyzing and designing control systems that meet performance specifications.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. Textbook References Incorporated

*   **Industrial Instrumentation by K Krishnaswamy (2003):** The principles of RC filtering for noise reduction and signal conditioning are discussed in chapters related to measurement systems and transducers.
*   **Measurement systems applications and design by Ernest O. Doebelin (1990):** This text provides a strong foundation in signal conditioning, including the theory and application of filters to improve measurement accuracy.
*   **Control Systems Engineering by Nise N.S. (6/e) / Modern Control Engineering by Ogata K (5/e):** These books, while focused on control systems, often cover filter design and analysis as part of system modeling and compensation techniques, providing deeper theoretical insights into transfer functions and frequency response.
*   **Principles of Industrial Instrumentation by Patranabis D (2017):** This reference offers detailed explanations of various sensor types and the associated signal conditioning circuits, including passive filters, with practical examples.