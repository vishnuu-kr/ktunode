---
title: "FM-CW Radar: FM-CW Radar"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff330"
status: "completed"
scrapedAt: "2026-05-23T18:10:58.084Z"
---
# Module 4: CW and Frequency Modulated Radar: Doppler Effect

## Topic: FM-CW Radar

This module delves into specific types of radar systems, focusing on Continuous Wave (CW) and Frequency Modulated Continuous Wave (FM-CW) radars. A crucial aspect of understanding these radars is the application of the Doppler effect.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Explain the fundamental principles of FM-CW radar.
*   Analyze the frequency and time domain characteristics of FM-CW radar signals.
*   Derive the expression for the beat frequency in FM-CW radar.
*   Understand how FM-CW radar measures range and velocity.
*   Discuss the advantages and disadvantages of FM-CW radar.
*   Relate the Doppler effect to the operation of FM-CW radar.

### Course Outcomes Alignment

This topic directly contributes to:

*   **CO3: Illustrate Radar Fundamentals like Radar Equation and Applications. (Knowledge Level: K2)** - Understanding the operation of FM-CW radar provides insights into radar principles and its applications in range and velocity measurement.
*   **CO4: Compare various types of Radars and tracking techniques (Knowledge Level: K2)** - By understanding FM-CW radar, you can differentiate it from other radar types, contributing to a broader understanding of radar system comparisons.

### 1. Introduction to FM-CW Radar

Frequency Modulated Continuous Wave (FM-CW) radar is a type of radar system that transmits a continuous wave signal whose frequency is varied (modulated) periodically. Unlike basic CW radar, which cannot measure range due to the absence of a time delay reference, FM-CW radar overcomes this limitation by modulating the transmitted frequency. This modulation allows for the measurement of both range and velocity.

**Key Concept:** The core principle of FM-CW radar is to utilize the frequency shift caused by the Doppler effect and combine it with the frequency shift caused by range-dependent time delay in a modulated waveform.

**Reference:** Skolnik (2017) extensively covers different radar waveforms, including FM-CW, in Chapter 3, providing a foundational understanding of its principles.

### 2. FM-CW Radar Waveform

The transmitted signal in an FM-CW radar is a continuous wave whose frequency is varied linearly with time. This is typically achieved using a Voltage-Controlled Oscillator (VCO).

**Waveform Description:**

*   The transmitted signal's frequency can be represented as:
    $f_t(t) = f_0 + \Delta f \sin(\omega_m t)$
    where:
    *   $f_t(t)$ is the instantaneous transmitted frequency.
    *   $f_0$ is the carrier frequency.
    *   $\Delta f$ is the frequency deviation (half of the bandwidth of the modulation).
    *   $\omega_m$ is the angular modulation frequency ($2\pi f_m$, where $f_m$ is the modulation frequency).

*   **Commonly, a linear sweep is used:**
    $f_t(t) = f_0 + m t$ for $0 \le t \le T_{sweep}$
    where:
    *   $m$ is the sweep rate (slope of the frequency change).
    *   $T_{sweep}$ is the sweep duration.

**Important Point:** The most common FM-CW radar uses a **linear frequency sweep**, also known as a **sawtooth sweep**. The frequency increases linearly over a period and then rapidly returns to its starting frequency for the next sweep. This linear sweep is crucial for range measurement.

**Reference:** Pratt & Allnutt (2021) might discuss different modulation techniques in satellite and radar communication, providing context for signal modulation in general. While their primary focus is satellites, understanding modulation is transferable.

### 3. Principle of Operation: Range Measurement

Range measurement in FM-CW radar is achieved by comparing the frequency of the received signal with the frequency of the currently transmitted signal.

**Process:**

1.  **Transmission:** The radar transmits a signal with a linearly sweeping frequency.
2.  **Target Reflection:** The signal reflects off a target at a range $R$. The time it takes for the signal to travel to the target and back is the round-trip delay, $\tau = \frac{2R}{c}$, where $c$ is the speed of light.
3.  **Reception:** The radar receives the reflected signal. Due to the time delay, the frequency of the received signal will be different from the frequency of the transmitted signal at the moment of reception.
4.  **Mixing:** The received signal is mixed with the transmitted signal. This mixing process generates sum and difference frequencies. The difference frequency (beat frequency, $f_b$) is the most important output for range measurement.

**Derivation of Beat Frequency for Range:**

Consider a single sweep of the transmitted frequency.
*   Transmitted frequency at time $t$: $f_t(t) = f_0 + m t$
*   Received frequency at time $t$: $f_r(t) = f_0 + m (t - \tau) = f_0 + m t - m \tau$
    *   Note: We are assuming the received signal's frequency is relative to the same carrier $f_0$ and is delayed in time by $\tau$.

The beat frequency $f_b$ is the difference between the transmitted and received frequencies:
$f_b(t) = f_t(t) - f_r(t)$
$f_b(t) = (f_0 + m t) - (f_0 + m t - m \tau)$
$f_b(t) = m \tau$

Since $\tau = \frac{2R}{c}$, the beat frequency is directly proportional to the range:
$f_b = m \frac{2R}{c}$

Therefore, the range $R$ can be determined from the beat frequency:
$R = \frac{c f_b}{2m}$

**Important Point:** The beat frequency generated by the time delay is **constant** during a single linear sweep, as long as the sweep rate $m$ is constant. This constant beat frequency is what allows for range determination.

**Example:**
Suppose an FM-CW radar uses a linear sweep from 100 MHz to 101 MHz over 1 ms. The sweep rate is $m = \frac{1 \text{ MHz}}{1 \text{ ms}} = 10^6 \text{ Hz} / 10^{-3} \text{ s} = 10^9 \text{ Hz/s}$.
If a target is at a range of 150 meters, the round trip delay is $\tau = \frac{2 \times 150 \text{ m}}{3 \times 10^8 \text{ m/s}} = 1 \text{ µs} = 10^{-6} \text{ s}$.
The beat frequency for range would be $f_b = m \tau = (10^9 \text{ Hz/s}) \times (10^{-6} \text{ s}) = 1000 \text{ Hz}$ or 1 kHz.

### 4. Principle of Operation: Velocity Measurement (Doppler Effect)

When the target is also moving, the received signal will experience a Doppler shift in addition to the frequency change due to the time delay.

**Doppler Shift:**
For a moving target, the received frequency is shifted by the Doppler frequency $f_d$:
$f_d = \frac{2v}{\lambda_0} = \frac{2v f_0}{c}$
where:
*   $v$ is the radial velocity of the target.
*   $\lambda_0$ is the wavelength of the carrier frequency $f_0$.

**Combined Effect:**
The instantaneous frequency of the received signal, considering both time delay and Doppler shift, becomes:
$f_r(t) = f_0 + m(t - \tau) - f_d$ (assuming the Doppler shift reduces the frequency for approaching targets, and increases for receding targets - convention may vary).

When this is mixed with the transmitted signal $f_t(t) = f_0 + m t$, the beat frequency produced will be:
$f_b(t) = f_t(t) - f_r(t)$
$f_b(t) = (f_0 + m t) - (f_0 + m t - m \tau - f_d)$
$f_b(t) = m \tau + f_d$

So, the beat frequency is the sum of the range-dependent beat frequency ($m\tau$) and the Doppler frequency ($f_d$).

**Challenge:** A single sweep produces a beat frequency that contains both range and velocity information, making it impossible to resolve them independently.

### 5. Resolving Range and Velocity: The Sawtooth Sweep

To overcome the ambiguity, FM-CW radars commonly employ a **sawtooth sweep**. This involves two sweeps in succession:

1.  **Up-Sweep:** The frequency increases linearly from $f_0$ to $f_0 + \Delta f$ over time $T_{sweep}$.
2.  **Down-Sweep:** The frequency decreases linearly from $f_0 + \Delta f$ back to $f_0$ over time $T_{sweep}$.

**Analysis during Up-Sweep (as derived before):**
Beat frequency $f_{b,up} = m \tau + f_d$ (where $m$ is the positive sweep rate).

**Analysis during Down-Sweep:**
During the down-sweep, the sweep rate is negative: $m' = -m$.
The transmitted frequency is $f_t(t) = (f_0 + \Delta f) - m (t - T_{sweep})$ for $T_{sweep} \le t \le 2T_{sweep}$.
The received frequency, with delay $\tau$ and Doppler $f_d$, is:
$f_r(t) = (f_0 + \Delta f) - m (t - \tau - T_{sweep}) - f_d$
The beat frequency during the down-sweep ($f_{b,down}$) is:
$f_{b,down}(t) = f_t(t) - f_r(t)$
$f_{b,down}(t) = [(f_0 + \Delta f) - m (t - T_{sweep})] - [(f_0 + \Delta f) - m (t - \tau - T_{sweep}) - f_d]$
$f_{b,down}(t) = -m (t - T_{sweep}) + m (t - \tau - T_{sweep}) + f_d$
$f_{b,down}(t) = -m t + m T_{sweep} + m t - m \tau - m T_{sweep} + f_d$
$f_{b,down}(t) = -m \tau + f_d$

**Important Point:** The beat frequency during the down-sweep has the opposite sign for the range-dependent term ($m\tau$) compared to the up-sweep, while the Doppler term ($f_d$) remains the same (assuming the target velocity is constant).

**Resolving Range and Velocity:**
We now have two equations:
1.  $f_{b,up} = m \tau + f_d$
2.  $f_{b,down} = -m \tau + f_d$

Adding these equations:
$f_{b,up} + f_{b,down} = 2 f_d$
$f_d = \frac{f_{b,up} + f_{b,down}}{2}$

Subtracting the second equation from the first:
$f_{b,up} - f_{b,down} = (m \tau + f_d) - (-m \tau + f_d)$
$f_{b,up} - f_{b,down} = 2 m \tau$
$\tau = \frac{f_{b,up} - f_{b,down}}{2m}$

Now we can find range $R$ and velocity $v$:
$R = \frac{c \tau}{2} = \frac{c (f_{b,up} - f_{b,down})}{4m}$
$v = \frac{c f_d}{2 f_0} = \frac{c (f_{b,up} + f_{b,down})}{4 f_0 m}$

**Example:**
Suppose during the up-sweep, the beat frequencies are $f_{b,up} = 1.5$ kHz and $f_{b,down} = 0.5$ kHz. The sweep rate is $m = 10^9$ Hz/s, and the carrier frequency is $f_0 = 100$ MHz.

Doppler frequency: $f_d = \frac{1.5 \text{ kHz} + 0.5 \text{ kHz}}{2} = \frac{2 \text{ kHz}}{2} = 1 \text{ kHz}$.
Velocity: $v = \frac{3 \times 10^8 \text{ m/s} \times 1 \times 10^3 \text{ Hz}}{4 \times 100 \times 10^6 \text{ Hz} \times 10^9 \text{ Hz/s}} = \frac{3 \times 10^{11}}{4 \times 10^{17}} = 0.75 \times 10^{-6} \text{ m/s}$.
*Correction*: The formula for velocity is $v = \frac{c f_d}{2 f_0}$.
$v = \frac{3 \times 10^8 \text{ m/s} \times 1 \times 10^3 \text{ Hz}}{2 \times 100 \times 10^6 \text{ Hz}} = \frac{3 \times 10^{11}}{2 \times 10^8} = 1.5 \times 10^3 \text{ m/s} = 1.5 \text{ km/s}$.

Range delay: $\tau = \frac{1.5 \text{ kHz} - 0.5 \text{ kHz}}{2 \times 10^9 \text{ Hz/s}} = \frac{1 \text{ kHz}}{2 \times 10^9 \text{ Hz/s}} = \frac{1000 \text{ Hz}}{2 \times 10^9 \text{ Hz/s}} = 0.5 \times 10^{-6} \text{ s} = 0.5 \text{ µs}$.
Range: $R = \frac{3 \times 10^8 \text{ m/s} \times 0.5 \times 10^{-6} \text{ s}}{2} = \frac{150 \text{ m}}{2} = 75 \text{ m}$.

**Reference:** Skolnik (2017) provides a detailed explanation of FM-CW radar waveforms and the signal processing required to extract range and velocity information, including the sawtooth sweep method.

### 6. Advantages and Disadvantages of FM-CW Radar

**Advantages:**

*   **Continuous Transmission:** Operates with a continuous wave, leading to lower peak power requirements compared to pulsed radars.
*   **Simpler Transmitter:** The transmitter design is generally simpler and less complex than that of high-power pulsed radars.
*   **Good Range Resolution:** With a sufficiently wide frequency sweep, FM-CW radar can achieve good range resolution.
*   **Simultaneous Range and Velocity Measurement:** The sawtooth sweep technique allows for the simultaneous measurement of both range and velocity.
*   **Cost-Effective:** Often less expensive to manufacture than pulsed radars for certain applications.

**Disadvantages:**

*   **Limited to Short Ranges:** The effectiveness of FM-CW radar is typically limited to shorter ranges (e.g., a few kilometers) due to the limitations of frequency sweeps and the generation of intelligible beat frequencies. For very long ranges, the sweep bandwidth and sweep rate become impractical.
*   **Doppler Ambiguity (with simple sweeps):** A single linear sweep cannot distinguish between range and velocity.
*   **Sideband Issues:** The mixing process can create unwanted sidebands, requiring careful filtering.
*   **Interference:** Being a continuous wave system, it can be susceptible to interference from other radio sources operating on the same or nearby frequencies.
*   **Velocity Ambiguity (with certain modulation schemes):** While sawtooth sweeps resolve range/velocity ambiguity, other modulation schemes might introduce velocity ambiguities.

**Reference:** Edde (2004) discusses the trade-offs of different radar types, which would include the advantages and disadvantages of FM-CW radar in the context of applications.

### 7. Applications of FM-CW Radar

FM-CW radar systems are well-suited for applications requiring relatively short-range measurements and where cost and simplicity are important factors.

**Examples:**

*   **Altimeters:** Used in aircraft to measure the altitude above the ground. The low peak power and continuous transmission are advantageous here.
*   **Speedometers:** Automotive radar systems for measuring vehicle speed and potentially distance to other vehicles.
*   **Level Measurement:** In industrial settings to measure the level of liquids or solids in tanks.
*   **Ground Surveillance:** For monitoring ground targets and their movements in lower-range surveillance applications.
*   **Weather Radar (less common now, but historically):** Early Doppler weather radars utilized frequency modulation principles.

**Reference:** Kinsley & Quegan (1999) provides practical insights into radar systems and their applications, offering examples where FM-CW radar might be deployed.

### 8. Important Points to Remember

*   **FM-CW radar overcomes the range ambiguity of simple CW radar by modulating the transmitted frequency.**
*   **A linear frequency sweep is essential for range measurement.**
*   **The beat frequency in FM-CW radar is proportional to the range for a given sweep rate.**
*   **A simple linear sweep cannot distinguish between range and velocity.**
*   **The sawtooth sweep (up-sweep and down-sweep) is used to resolve range and velocity independently.**
*   **The Doppler effect is crucial for velocity measurement in FM-CW radar.**
*   **FM-CW radar is generally suitable for short-range applications.**

### Practice Questions and Answers

**Question 1:**
What is the primary limitation of a simple CW radar that FM-CW radar addresses?
**Answer:** The primary limitation of simple CW radar is its inability to measure range. FM-CW radar overcomes this by modulating the transmitted frequency.

**Question 2:**
If an FM-CW radar uses a linear sweep with a rate of $2 \times 10^9$ Hz/s, and the mixer output for a target is a beat frequency of 2 kHz, what is the range to the target? (Assume no Doppler shift for simplicity).
**Answer:**
$R = \frac{c f_b}{2m}$
$R = \frac{(3 \times 10^8 \text{ m/s}) \times (2 \times 10^3 \text{ Hz})}{2 \times (2 \times 10^9 \text{ Hz/s})}$
$R = \frac{6 \times 10^{11}}{4 \times 10^9} = \frac{6}{4} \times 10^2 = 1.5 \times 100 = 150 \text{ meters}$.

**Question 3:**
Explain why a single linear frequency sweep in an FM-CW radar cannot independently determine both range and velocity.
**Answer:** In a single linear sweep, the beat frequency is a combination of the range-dependent frequency shift ($m\tau$) and the Doppler frequency shift ($f_d$). Since both contribute to the same measured beat frequency ($f_b = m\tau + f_d$), there are two unknowns ($R$ and $v$, which determine $\tau$ and $f_d$) and only one equation, making it impossible to solve for them independently.

**Question 4:**
In a sawtooth FM-CW radar, how does the beat frequency measured during the down-sweep differ from that of the up-sweep, specifically regarding the range and velocity components?
**Answer:** During the up-sweep, the beat frequency is $f_{b,up} = m\tau + f_d$. During the down-sweep, the sweep rate has an opposite sign, resulting in a beat frequency of $f_{b,down} = -m\tau + f_d$. The range component ($m\tau$) has opposite signs, while the Doppler component ($f_d$) remains the same.

**Question 5:**
List two common applications of FM-CW radar.
**Answer:**
1.  Aircraft altimeters.
2.  Automotive speedometers.
3.  Industrial level measurement.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
