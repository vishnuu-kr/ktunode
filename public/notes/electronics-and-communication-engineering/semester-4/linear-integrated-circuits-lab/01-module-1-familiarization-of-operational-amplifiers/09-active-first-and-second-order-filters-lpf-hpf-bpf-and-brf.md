---
title: "Active first and second order filters (LPF, HPF, BPF and BRF)"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 1: Familiarization of Operational amplifiers "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe8a5"
status: "completed"
scrapedAt: "2026-05-23T17:49:58.604Z"
---
# LINEAR INTEGRATED CIRCUITS LAB

## Module 1: Familiarization of Operational Amplifiers

### Topic: Active First and Second Order Filters (LPF, HPF, BPF and BRF)

---

### 1. Introduction to Filters

**Definition:** Filters are electronic circuits that selectively pass signals within a specified range of frequencies and block or attenuate signals outside that range.

**Types of Filters based on Frequency Response:**

*   **Low-Pass Filter (LPF):** Allows low frequencies to pass and attenuates high frequencies.
*   **High-Pass Filter (HPF):** Allows high frequencies to pass and attenuates low frequencies.
*   **Band-Pass Filter (BPF):** Allows a specific band of frequencies to pass and attenuates frequencies outside this band.
*   **Band-Reject (Notch) Filter (BRF):** Attenuates a specific band of frequencies and allows frequencies outside this band to pass.

**Why Active Filters?**

*   **Gain:** Active filters can provide voltage gain, unlike passive filters (which only attenuate). This is crucial for signal amplification.
*   **Loading Effects:** They can buffer the signal, preventing the filter from being loaded by the subsequent stage.
*   **No Inductors:** Active filters typically use resistors, capacitors, and active components like Op-Amps, eliminating the need for bulky and non-ideal inductors.
*   **Easier Design:** Active filters offer more flexibility in designing specific frequency responses and Q factors.

**Key Parameters of a Filter:**

*   **Cutoff Frequency ($f_c$):** The frequency at which the filter's output power is half the passband power, or the voltage gain is reduced by 3 dB.
*   **Bandwidth (BW):** For BPF and BRF, it's the range of frequencies between the half-power points.
*   **Center Frequency ($f_0$):** For BPF and BRF, it's the geometric mean of the two cutoff frequencies.
*   **Quality Factor (Q):** A measure of the sharpness of the filter's response, especially important for BPF and BRF. $Q = f_0 / BW$. Higher Q means a narrower, sharper peak or notch.
*   **Roll-off Rate:** The rate at which the filter's gain decreases outside the passband, typically measured in dB/octave or dB/decade.

---

### 2. First-Order Filters

First-order filters have a roll-off rate of -20 dB/decade (or -6 dB/octave). They use a single reactive component (capacitor or inductor). In active filters, Op-Amps are used to provide gain and buffer the output.

#### 2.1 Active First-Order Low-Pass Filter (LPF)

**Concept:** An LPF passes frequencies below its cutoff frequency ($f_c$) and attenuates frequencies above $f_c$.

**Circuit Configuration (Unity Gain LPF):**

```
      R1
Vin ---/\/\/\----+--- Vout
                |
               C1
               ---
                |
               GND
```

**Op-Amp Implementation (Non-inverting Unity Gain LPF):**

```
      R1
Vin ---/\/\/\----+
                |
               C1
               ---
                |
   - -----| Op-Amp |----- Vout
          |      |
   + -----|______|----- GND
```

**Circuit Analysis:**
*   The capacitor C1 acts as an open circuit at DC (low frequencies), allowing the signal to pass through R1 to the Op-Amp's non-inverting input.
*   At high frequencies, C1 acts as a short circuit, shunting the signal to ground.
*   The Op-Amp in a voltage-follower configuration provides unity gain.

**Transfer Function:**
The voltage gain $A_v(j\omega)$ is given by:
$A_v(j\omega) = \frac{V_{out}}{V_{in}} = \frac{1}{1 + j\omega RC}$

**Key Characteristics:**
*   **Cutoff Frequency ($f_c$):** $f_c = \frac{1}{2\pi RC}$
*   **Gain at DC ($f=0$):** $A_v(0) = 1$ (unity gain)
*   **Gain at $f_c$:** $|A_v(j\omega_{c})| = \frac{1}{\sqrt{1^2 + 1^2}} = \frac{1}{\sqrt{2}} \approx 0.707$ (which is -3 dB)
*   **Roll-off:** -20 dB/decade for $f > f_c$

**Design Example:**
Design a first-order unity-gain LPF with a cutoff frequency of 1 kHz.
Let $R_1 = 10 \text{ k}\Omega$.
We need to find C1:
$C_1 = \frac{1}{2\pi f_c R_1} = \frac{1}{2\pi (1000 \text{ Hz})(10 \times 10^3 \Omega)} = \frac{1}{2\pi \times 10^7} \approx 15.9 \text{ nF}$

**Choudhary & Jain (6th Ed.):** Chapter 10 (Active Filters) covers various active filter configurations, including unity-gain and non-unity-gain first-order LPFs. They emphasize the role of Op-Amps in overcoming the limitations of passive filters.

---

#### 2.2 Active First-Order High-Pass Filter (HPF)

**Concept:** An HPF passes frequencies above its cutoff frequency ($f_c$) and attenuates frequencies below $f_c$.

**Circuit Configuration (Unity Gain HPF):**

```
      C1
Vin ---||----+--- Vout
            |
           R1
           ---
            |
           GND
```

**Op-Amp Implementation (Non-inverting Unity Gain HPF):**

```
      C1
Vin ---||----+
            |
           R1
           ---
            |
   - -----| Op-Amp |----- Vout
          |      |
   + -----|______|----- GND
```

**Circuit Analysis:**
*   The capacitor C1 acts as a short circuit at high frequencies, allowing the signal to pass through to the Op-Amp's non-inverting input.
*   At low frequencies (especially DC), C1 acts as an open circuit, blocking the signal from reaching the Op-Amp.
*   The Op-Amp in a voltage-follower configuration provides unity gain.

**Transfer Function:**
$A_v(j\omega) = \frac{V_{out}}{V_{in}} = \frac{j\omega RC}{1 + j\omega RC}$

**Key Characteristics:**
*   **Cutoff Frequency ($f_c$):** $f_c = \frac{1}{2\pi RC}$
*   **Gain at DC ($f=0$):** $A_v(0) = 0$
*   **Gain at $f_c$:** $|A_v(j\omega_{c})| = \frac{1}{\sqrt{1^2 + 1^2}} = \frac{1}{\sqrt{2}} \approx 0.707$ (which is -3 dB)
*   **Roll-off:** +20 dB/decade for $f < f_c$

**Design Example:**
Design a first-order unity-gain HPF with a cutoff frequency of 1 kHz.
Let $R_1 = 10 \text{ k}\Omega$.
We need to find C1:
$C_1 = \frac{1}{2\pi f_c R_1} = \frac{1}{2\pi (1000 \text{ Hz})(10 \times 10^3 \Omega)} = \frac{1}{2\pi \times 10^7} \approx 15.9 \text{ nF}$

**Choudhary & Jain (6th Ed.):** Similar to LPFs, chapter 10 details the active HPF circuits. The placement of R and C is crucial for determining the filter type.

---

### 3. Second-Order Filters

Second-order filters have a roll-off rate of -40 dB/decade (or -12 dB/octave). They use two reactive components (capacitors or inductors, but in active filters, we use two capacitors and resistors). Second-order filters offer a steeper roll-off and allow for greater control over the filter's response (e.g., Q factor).

#### 3.1 Active Second-Order Low-Pass Filter (LPF)

**Concept:** Steeper attenuation of high frequencies compared to first-order LPFs.

**Circuit Configuration (Sallen-Key Unity Gain LPF):**
This is a very popular configuration.

```
      R1              R2
Vin ---/\/\/\---+----/\/\/\----+--- Vout
                |              |
               C1             C2
               ---            ---
                |              |
   - -----| Op-Amp |----- GND
          |      |
   + -----|______|----- GND
```
*Note: In a unity gain Sallen-Key LPF, R1=R2=R and C1=C2=C.*

**Simplified Unity Gain Sallen-Key LPF:**

```
      R               R
Vin ---/\/\/\---+----/\/\/\----+--- Vout
                |              |
               C               C
               ---             ---
                |               |
   - -----| Op-Amp |----- GND
          |      |
   + -----|______|----- GND
```

**Circuit Analysis:**
The circuit consists of two RC stages feeding into an Op-Amp configured as a voltage follower.

**Transfer Function (for unity gain Sallen-Key LPF with R1=R2=R, C1=C2=C):**
$A_v(j\omega) = \frac{1}{1 + j\frac{\omega}{\omega_0} + (j\frac{\omega}{\omega_0})^2}$
where $\omega_0 = \frac{1}{RC}$ is the natural frequency.

**Key Characteristics:**
*   **Natural Frequency ($\omega_0$):** $\omega_0 = \frac{1}{RC}$ (related to cutoff frequency)
*   **Cutoff Frequency ($f_c$):** For a Butterworth response (maximally flat passband), $f_c = f_0 = \frac{1}{2\pi RC}$.
*   **Q Factor:** For unity gain Sallen-Key, $Q = 0.5$ (this is a Butterworth response).
*   **Roll-off:** -40 dB/decade for $f > f_c$

**Design Example:**
Design a second-order unity-gain Sallen-Key LPF with a cutoff frequency of 1 kHz, using identical resistors and capacitors.
We need $f_c = \frac{1}{2\pi RC} = 1000$ Hz.
Let $R = 10 \text{ k}\Omega$.
$C = \frac{1}{2\pi f_c R} = \frac{1}{2\pi (1000 \text{ Hz})(10 \times 10^3 \Omega)} \approx 15.9 \text{ nF}$
Choose standard component values, e.g., $R = 10 \text{ k}\Omega$ and $C = 15 \text{ nF}$ or $18 \text{ nF}$.

**Choudhary & Jain (6th Ed.):** Chapter 10 discusses Sallen-Key filters extensively, including unity-gain and non-unity-gain versions, and how component values affect the Q factor and response shape (Butterworth, Chebyshev, Bessel).

---

#### 3.2 Active Second-Order High-Pass Filter (HPF)

**Concept:** Steeper attenuation of low frequencies compared to first-order HPFs.

**Circuit Configuration (Sallen-Key Unity Gain HPF):**
This is similar to the LPF, but with the capacitor and resistor positions swapped in the first stage.

```
      C1              C2
Vin ---||----+----||----+--- Vout
            |           |
           R1          R2
           ---         ---
            |           |
   - -----| Op-Amp |----- GND
          |      |
   + -----|______|----- GND
```
*Note: In a unity gain Sallen-Key HPF, R1=R2=R and C1=C2=C.*

**Simplified Unity Gain Sallen-Key HPF:**

```
      C               C
Vin ---||----+----||----+--- Vout
            |           |
           R           R
           ---         ---
            |           |
   - -----| Op-Amp |----- GND
          |      |
   + -----|______|----- GND
```

**Circuit Analysis:**
The circuit consists of two CR stages feeding into an Op-Amp configured as a voltage follower.

**Transfer Function (for unity gain Sallen-Key HPF with R1=R2=R, C1=C2=C):**
$A_v(j\omega) = \frac{(j\omega/\omega_0)^2}{1 + j\frac{\omega}{\omega_0} + (j\frac{\omega}{\omega_0})^2}$
where $\omega_0 = \frac{1}{RC}$ is the natural frequency.

**Key Characteristics:**
*   **Natural Frequency ($\omega_0$):** $\omega_0 = \frac{1}{RC}$
*   **Cutoff Frequency ($f_c$):** For a Butterworth response, $f_c = f_0 = \frac{1}{2\pi RC}$.
*   **Q Factor:** For unity gain Sallen-Key, $Q = 0.5$ (Butterworth response).
*   **Roll-off:** +40 dB/decade for $f < f_c$

**Design Example:**
Design a second-order unity-gain Sallen-Key HPF with a cutoff frequency of 1 kHz, using identical resistors and capacitors.
We need $f_c = \frac{1}{2\pi RC} = 1000$ Hz.
Let $R = 10 \text{ k}\Omega$.
$C = \frac{1}{2\pi f_c R} = \frac{1}{2\pi (1000 \text{ Hz})(10 \times 10^3 \Omega)} \approx 15.9 \text{ nF}$
Choose standard component values, e.g., $R = 10 \text{ k}\Omega$ and $C = 15 \text{ nF}$ or $18 \text{ nF}$.

---

#### 3.3 Active Second-Order Band-Pass Filter (BPF)

**Concept:** Passes a band of frequencies between two cutoff frequencies and attenuates frequencies outside this band.

**Circuit Configuration (Multiple Feedback BPF - uses only one Op-Amp):**
This is a common and effective configuration.

```
      R1              R2
Vin ---/\/\/\---+----/\/\/\----+--- Vout
                |              |
               C1             C2
               ---            ---
                |              |
   - -----| Op-Amp |----- GND
          |      |  +-----|
   + -----|______|--/\/\/\--|
                |    R3
                |
               GND
```

**Analysis (simplified case: R1=R2=R, C1=C2=C):**
The transfer function can be complex. However, for a common configuration where $R_1=R_2=R$, $C_1=C_2=C$, and $R_3 = R/2$, we get:

**Transfer Function (simplified for specific component choices):**
$A_v(j\omega) = \frac{-\frac{1}{R_1 C_2}s}{s^2 + s(\frac{1}{C_1}(\frac{1}{R_1}+\frac{1}{R_2}+\frac{1}{R_3})) + \frac{1}{R_1 R_3 C_1 C_2}}$
where $s = j\omega$.

**Key Characteristics:**
*   **Center Frequency ($f_0$):** $f_0 = \frac{1}{2\pi}\sqrt{\frac{R_1+R_3}{R_1 R_2 R_3 C_1 C_2}}$
*   **Gain at Center Frequency:** $A_v(j\omega_0) = -\frac{R_3}{R_1}$
*   **Q Factor:** $Q = \frac{1}{R_3}\sqrt{\frac{R_1 R_2 R_3 C_1 C_2}{R_1+R_3}}$
*   **Bandwidth (BW):** $BW = f_0 / Q$

**Design Considerations:**
BPF design often involves choosing component values to achieve a desired $f_0$, gain at $f_0$, and Q factor. This can be iterative.

**Example Design Approach (for a specific Q and gain):**
Given a desired $f_0$, $Q$, and gain ($A_0$).
*   Choose C1=C2=C.
*   $R_1 = \frac{Q}{2\pi f_0 C A_0}$
*   $R_2 = \frac{Q}{2\pi f_0 C (2Q^2 - A_0)}$
*   $R_3 = \frac{Q}{2\pi f_0 C}$

**Choudhary & Jain (6th Ed.):** Chapter 10 covers BPFs using various techniques, including the multiple feedback topology. They provide design equations for achieving specific filter parameters.

---

#### 3.4 Active Second-Order Band-Reject Filter (BRF) / Notch Filter

**Concept:** Attenuates a specific band of frequencies and passes frequencies outside this band.

**Circuit Configuration (Twin-T Notch Filter with Op-Amp):**
A common approach is to use a passive Twin-T notch filter combined with an Op-Amp to provide gain and improve the notch depth.

**Passive Twin-T Notch Filter:**
Consists of two T-shaped networks. The "notch" is created by cancellation.

```
      R              R/2
Vin --/\/\/\----+---||---- Vout
            |       C       C
           2C      ---     ---
            |       |       |
           GND     GND     GND
```
*Note: This is a passive version. The passive Twin-T has a very deep notch but no gain and is sensitive to loading.*

**Active Twin-T Notch Filter:**
The passive Twin-T is connected to the Op-Amp in a summing amplifier or a voltage follower configuration to provide gain.

**Circuit using an Op-Amp as a Summing Amplifier:**

```
Passive Twin-T Filter
     +--------------------+
     |                    |
 R/2 ---|/\|                |
     C ---||----+          |
     C ---||----+          |
                |          |
Vin --/\/\/\----+----------+--- R_f ---+--- Vout
                |                     |
               2R                   R_g
                |                     |
               GND                   GND
   - -----| Op-Amp |-----
          |      |
   + -----|______|----- GND
```

**Analysis:**
The notch frequency is determined by the component ratios in the Twin-T network. The Op-Amp can be configured to provide gain and to buffer the output.

**Key Characteristics:**
*   **Notch Frequency ($f_n$):** $f_n = \frac{1}{2\pi RC}$ (for the standard Twin-T where resistors are R, R/2 and capacitors are C, 2C).
*   **Depth of Notch:** Ideally infinite, but practically limited by component tolerances and Op-Amp characteristics.
*   **Roll-off:** Varies depending on the Q factor.

**Design:**
Choose R and C to set the notch frequency. Adjust the feedback resistors ($R_f$, $R_g$) in the summing amplifier configuration to achieve desired gain outside the notch.

**Choudhary & Jain (6th Ed.):** Chapter 10 may cover notch filters and their implementation using active circuits. They often discuss the limitations of passive notch filters and how active circuits overcome them.

---

### 4. Practical Considerations and Lab Implementation

*   **Component Tolerances:** Real resistors and capacitors have tolerances (e.g., $\pm$ 5%, $\pm$ 10%). This affects the actual cutoff frequency, center frequency, and Q factor. Use components with tighter tolerances for more accurate results.
*   **Op-Amp Characteristics:**
    *   **Gain-Bandwidth Product (GBWP):** Limits the maximum operating frequency and gain. For a desired gain G at frequency f, GBWP must be >> G*f.
    *   **Slew Rate:** Limits the maximum rate of change of the output voltage, affecting performance at high frequencies and large amplitudes.
    *   **Input Offset Voltage/Current:** Can introduce DC errors. For unity-gain filters, these are less critical.
    *   **Input Bias Current:** Affects the operating point, especially with large resistors.
*   **Power Supply:** Use dual power supplies (e.g., $\pm$ 5V, $\pm$ 9V, $\pm$ 12V) for Op-Amps. Decoupling capacitors (e.g., 0.1 $\mu$F) should be placed close to the Op-Amp's power pins.
*   **Breadboarding:** Ensure good connections. Keep leads short to minimize parasitic inductance and capacitance, especially at higher frequencies.
*   **Testing:**
    *   Use a function generator to provide the input signal.
    *   Use an oscilloscope or spectrum analyzer to observe the output signal and measure its amplitude and frequency response.
    *   Sweep the input frequency to plot the frequency response (Gain vs. Frequency).

**Rashid (3rd Ed.):** While primarily a PSpice book, it implicitly covers practical considerations by demonstrating circuit behavior under various conditions. Simulating with realistic component models and Op-Amp models can reveal practical limitations.

**Gayekwad:** Likely provides practical design approaches and circuit examples in a clear manner, focusing on the implementation aspects.

---

### 5. Alignment with Course Outcomes (COs)

*   **CO1: Design and implement basic linear integrated circuits using Op Amps. (K4)**
    *   **Relevance:** This topic directly addresses the design and implementation of active filters using Op-Amps. Students will learn to select appropriate Op-Amp configurations and calculate component values for specific filter characteristics.
*   **CO2: Design and implement basic linear integrated circuits using linear ICs. (K4)**
    *   **Relevance:** Op-Amps (like the 741, LM358, TL07x series) are the core linear ICs used here. The lab work involves building these circuits with these ICs.
*   **CO3: Design and simulate the functioning of basic linear integrated circuits and linear ICs. using simulation tools. (K4)**
    *   **Relevance:** Students can use simulation tools like PSpice (as mentioned in Rashid's book) to design and verify their filter circuits before physical implementation, predicting their behavior and troubleshooting potential issues.
*   **CO4: Effectively troubleshoot a given circuit and analyze it (K4)**
    *   **Relevance:** During lab work, circuits may not behave as expected due to component issues, wiring errors, or incorrect design calculations. This necessitates troubleshooting skills and a deep understanding of how each component and the Op-Amp contribute to the overall filter response.

---

### 6. Practice Questions and Answers

**Question 1:**
Design a first-order unity-gain active LPF with a cutoff frequency of 2 kHz. Use a resistor value of $R = 8 \text{ k}\Omega$. Calculate the required capacitor value and the gain at 1 kHz and 10 kHz.

**Answer 1:**
*   **Capacitor Calculation:**
    $f_c = \frac{1}{2\pi RC}$
    $C = \frac{1}{2\pi f_c R} = \frac{1}{2\pi (2000 \text{ Hz})(8 \times 10^3 \Omega)} = \frac{1}{32000\pi} \approx 9.95 \text{ nF}$
    Choose $C = 10 \text{ nF}$.
*   **Gain Calculation:**
    $A_v(j\omega) = \frac{1}{1 + j\omega RC}$
    $\omega RC = j 2\pi f RC$
    At $f = 1 \text{ kHz}$:
    $\omega RC = j 2\pi (1000 \text{ Hz})(8 \times 10^3 \Omega)(10 \times 10^{-9} \text{ F}) = j 0.05026$
    $A_v(j\omega) = \frac{1}{1 + j0.05026} = \frac{1}{\sqrt{1^2 + 0.05026^2}} \angle -\arctan(0.05026) \approx 0.9987 \angle -2.88^\circ$
    Gain $\approx 0.9987$ (close to unity)
    At $f = 10 \text{ kHz}$:
    $\omega RC = j 2\pi (10000 \text{ Hz})(8 \times 10^3 \Omega)(10 \times 10^{-9} \text{ F}) = j 0.5026$
    $A_v(j\omega) = \frac{1}{1 + j0.5026} = \frac{1}{\sqrt{1^2 + 0.5026^2}} \angle -\arctan(0.5026) \approx 0.831 \angle -26.7^\circ$
    Gain $\approx 0.831$ (approximately -1.6 dB)

**Question 2:**
What is the roll-off rate of a first-order filter and a second-order filter in dB/decade?

**Answer 2:**
*   First-order filter: -20 dB/decade
*   Second-order filter: -40 dB/decade

**Question 3:**
For a unity-gain Sallen-Key LPF, what component ratio ensures a Butterworth response?

**Answer 3:**
A Butterworth response for a unity-gain Sallen-Key LPF is achieved when all resistors are equal ($R_1=R_2=R$) and all capacitors are equal ($C_1=C_2=C$). This configuration results in a Q factor of 0.5.

**Question 4:**
You are building an active filter and notice that the output amplitude is significantly lower than expected at high frequencies. What are potential issues?

**Answer 4:**
*   **Incorrect filter type:** You might have built an HPF or BPF instead of an LPF, or the component values are wrong for the desired LPF.
*   **Component values:** The RC time constants might be incorrect, leading to an earlier cutoff frequency.
*   **Op-Amp limitations:** The operating frequency might be too high for the Op-Amp's Gain-Bandwidth Product (GBWP) or slew rate.
*   **Loading:** The subsequent stage might be loading the filter, reducing its output amplitude. (Less likely with unity-gain buffer stages).
*   **Incorrect wiring:** A mistake in connecting components or the Op-Amp.

---

### 7. Important Points to Remember

*   **Active filters use Op-Amps to provide gain, improve isolation, and avoid inductors.**
*   **First-order filters have a roll-off of -20 dB/decade.**
*   **Second-order filters have a roll-off of -40 dB/decade.**
*   **The cutoff frequency ($f_c$) is where the gain drops by 3 dB.**
*   **The Sallen-Key topology is common for second-order active filters.**
*   **The Q factor determines the sharpness of the filter's response, especially for BPF and BRF.**
*   **Butterworth response provides a maximally flat passband, with a Q of 0.5 for unity-gain Sallen-Key filters.**
*   **Component tolerances and Op-Amp limitations (GBWP, Slew Rate) are critical for practical filter performance.**
*   **Always check your wiring and component values carefully in the lab.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
