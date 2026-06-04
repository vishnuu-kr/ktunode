---
title: "Multiple Frequency CW Radar."
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8be"
status: "completed"
scrapedAt: "2026-05-23T20:03:49.376Z"
---
# Module 4: CW and Frequency Modulated Radar: Doppler Effect

## Topic: Multiple Frequency CW Radar

This topic delves into the advantages and operational principles of using multiple frequencies in Continuous Wave (CW) radar systems, building upon the foundational understanding of the Doppler effect.

### 1. Introduction to Multiple Frequency CW Radar

**1.1 Motivation:**
Standard CW radar, while effective at detecting moving targets, suffers from a significant drawback: it cannot determine the range of a target. This is because the transmitted signal is continuous, and the receiver cannot distinguish between echoes from different ranges returning at the same time. To overcome this limitation, various range ambiguity resolution techniques have been developed. Multiple Frequency CW radar is one such technique that leverages the Doppler effect across different transmitted frequencies to infer range information.

*   **Key Concept:** Range ambiguity in CW radar.
*   **Reference:** Skolnik (2017) discusses the limitations of basic CW radar and introduces methods for range measurement.

**1.2 Core Principle:**
The fundamental idea behind Multiple Frequency CW radar is to transmit a CW signal at multiple distinct frequencies, or to transmit a single CW signal that is frequency-agile. When a target reflects these signals, the Doppler shift experienced by each frequency will be unique. By analyzing the Doppler shifts for each transmitted frequency, the system can determine the target's range.

*   **Key Concept:** Range determination through Doppler shift analysis across multiple frequencies.

### 2. How Multiple Frequencies Enable Range Measurement

**2.1 The Doppler Shift and Range Relationship:**
The Doppler shift ($f_d$) observed in a radar system is directly proportional to the target's radial velocity ($v_r$) and the radar's operating frequency ($f_0$).

$$ f_d = \frac{2v_r f_0}{c} $$

where $c$ is the speed of light.

**2.2 Introducing Multiple Frequencies:**
Consider transmitting CW signals at two different frequencies, $f_1$ and $f_2$. A target moving with radial velocity $v_r$ will produce two different Doppler shifts:

$$ f_{d1} = \frac{2v_r f_1}{c} $$
$$ f_{d2} = \frac{2v_r f_2}{c} $$

**2.3 The Unambiguous Range (R_u):**
The key to range measurement with multiple frequencies lies in the concept of **unambiguous range**. In pulsed radar, the unambiguous range is determined by the pulse repetition frequency (PRF). In the context of frequency-agile CW radar, the effective "range resolution" and the range ambiguity are related to the **frequency difference** or the **bandwidth** used.

A common approach involves transmitting a series of CW pulses, each at a slightly different frequency. This is often referred to as **frequency-hopping CW** or **variable frequency CW**.

Let's consider transmitting a series of $N$ pulses, where the $n$-th pulse is transmitted at frequency $f_n = f_0 + n \Delta f$, where $\Delta f$ is the frequency step.

For a target at range $R$ and radial velocity $v_r$, the time delay of the echo is $\tau = \frac{2R}{c}$.

The Doppler shift for the $n$-th pulse is $f_{dn} = \frac{2v_r f_n}{c}$.

**2.4 Range Determination through Phase Comparison:**
When a CW signal is transmitted, its phase at the receiver after reflecting off a target at range $R$ depends on the round-trip propagation time $2R/c$.

Let the transmitted signal at frequency $f$ be $s(t) = A \cos(2\pi f t)$.
The echo received after time $2R/c$ is $r(t) = A' \cos(2\pi f (t - 2R/c))$.

The phase difference between the transmitted and received signal at a given instant is:
$\phi = 2\pi f \frac{2R}{c}$

If we transmit at two frequencies, $f_1$ and $f_2$, the phase shifts from the target will be:
$\phi_1 = 2\pi f_1 \frac{2R}{c}$
$\phi_2 = 2\pi f_2 \frac{2R}{c}$

The difference in phase shifts is:
$\Delta\phi = \phi_2 - \phi_1 = 2\pi (f_2 - f_1) \frac{2R}{c}$

Let $\Delta f = f_2 - f_1$. Then:
$\Delta\phi = 2\pi \Delta f \frac{2R}{c}$

If we can measure $\Delta\phi$, we can determine $R$. However, phase is ambiguous. A phase difference of $2\pi$ radians corresponds to a change in range of $\lambda/2$.

**2.5 The Key Insight for Multiple Frequency CW:**
The ability to determine range arises from the fact that the *measured* Doppler frequency from a target will depend on the *actual* range. By transmitting at multiple frequencies, we introduce a situation where the observed Doppler shift for a given velocity will vary with the *true* range in a predictable way.

Consider transmitting at two frequencies $f_1$ and $f_2$, separated by $\Delta f$.
Let the target have a true range $R$ and a radial velocity $v_r$.

The transmitted frequencies are $f_1$ and $f_2$.
The received frequencies will be $f_1 + f_{d1}$ and $f_2 + f_{d2}$.
Where $f_{d1} = \frac{2v_r f_1}{c}$ and $f_{d2} = \frac{2v_r f_2}{c}$.

In a simple CW radar without range measurement, we would mix the transmitted and received signals. This results in a beat frequency equal to the Doppler shift. If we transmit $f_1$ and $f_2$ sequentially (or simultaneously in a more complex setup), the resulting Doppler shifts would be $f_{d1}$ and $f_{d2}$.

**2.6 The Frequency-to-Range Conversion:**
A common technique is to transmit a series of $N$ pulses, each at a frequency $f_n = f_0 + (n-1)\Delta f$, where $n = 1, 2, ..., N$.

For a target at range $R$, the phase of the received echo for the $n$-th pulse will be:
$\Phi_n = 2\pi (f_0 + (n-1)\Delta f) \frac{2R}{c}$

If we consider the phase difference between consecutive pulses:
$\Delta\Phi_n = \Phi_{n+1} - \Phi_n = 2\pi [(f_0 + n\Delta f) - (f_0 + (n-1)\Delta f)] \frac{2R}{c}$
$\Delta\Phi_n = 2\pi \Delta f \frac{2R}{c}$

This phase difference $\Delta\Phi_n$ is independent of the Doppler velocity! This appears contradictory to the goal of using Doppler. However, this is how range can be resolved.

**A More Practical Approach (Skolnik, Chapter 2):**
A more practical method for range measurement with CW radar involves modulating the transmitted frequency. This can be done linearly with time (Frequency Modulated CW - FMCW) or using a stepped frequency approach.

For **Multiple Frequency CW Radar**, we are essentially talking about using discrete frequency steps. The core idea is that a target at a specific range $R$ will produce a particular phase shift when observed with a specific frequency. By changing the frequency, we change this phase shift.

Consider transmitting at two frequencies $f_1$ and $f_2$.
If a target is at range $R$, the round trip delay is $\tau = 2R/c$.
The phase difference between the transmitted signal and the received echo at frequency $f_1$ is $\phi_1 = 2\pi f_1 \tau$.
The phase difference at frequency $f_2$ is $\phi_2 = 2\pi f_2 \tau$.

The difference in phase is $\phi_2 - \phi_1 = 2\pi (f_2 - f_1) \tau = 2\pi \Delta f \frac{2R}{c}$.

This phase difference is directly proportional to the range $R$. However, measuring phase differences directly is problematic due to phase ambiguities (a phase difference of $2\pi$ corresponds to a $\lambda/2$ change in range).

**The Crucial Step: Ambiguity Resolution:**
The trick with multiple frequencies is to choose the frequency steps such that the *ambiguity interval* for range is manageable.

Let's consider transmitting $N$ frequencies $f_1, f_2, \ldots, f_N$.
A target at range $R$ will produce phase shifts $\phi_1, \phi_2, \ldots, \phi_N$.
$\phi_i = 2\pi f_i \frac{2R}{c}$

If we transmit these frequencies in sequence, the phase difference between consecutive transmissions for a stationary target is:
$\Delta \phi_i = 2\pi (f_{i+1} - f_i) \frac{2R}{c}$

The key is that the *Doppler frequency* is still present.
The received signal at frequency $f_i$ will be $f_i + f_d$, where $f_d$ is the Doppler frequency corresponding to the target's velocity.

**Example (Simplified Stepped Frequency CW):**
Imagine transmitting at $f_1$ and then $f_2$, where $f_2 = f_1 + \Delta f$.
A target at range $R$ with velocity $v_r$ will produce echoes with frequencies:
$f_{rec1} = f_1 + f_{d1}$ where $f_{d1} = \frac{2 v_r f_1}{c}$
$f_{rec2} = f_2 + f_{d2}$ where $f_{d2} = \frac{2 v_r f_2}{c} = \frac{2 v_r (f_1 + \Delta f)}{c} = f_{d1} + \frac{2 v_r \Delta f}{c}$

The *beat frequency* measured by mixing the transmitted and received signals will be the Doppler shift.
If we just transmitted $f_1$ and $f_2$ as CW, the beat frequencies would be $f_{d1}$ and $f_{d2}$.

**The Range "Modulation":**
The effective range determination comes from the phase difference between the received signals at different transmitted frequencies.

Let the transmitted signal be $s_i(t) = \cos(2\pi f_i t)$.
The received signal from a target at range $R$ and velocity $v_r$ is $r_i(t) = \cos(2\pi (f_i + f_{di}) (t - \frac{2R}{c}))$.

Consider the phase of the received signal relative to the transmitted signal.
Phase difference $\Delta\psi_i = 2\pi (f_i + f_{di}) \frac{2R}{c} = 2\pi f_i \frac{2R}{c} + 2\pi f_{di} \frac{2R}{c}$.

The second term is a phase shift due to the Doppler frequency itself. This term is typically small. The dominant phase term for range is $2\pi f_i \frac{2R}{c}$.

**Key Insight:** By switching frequencies, we can observe how the phase of the received signal (relative to the transmitted frequency at that instant) changes.

Let's consider transmitting at $f_1$ and then $f_2$.
Phase of received echo at $f_1$: $\Phi_{rec1} = 2\pi (f_1 + f_{d1}) \frac{2R}{c}$
Phase of received echo at $f_2$: $\Phi_{rec2} = 2\pi (f_2 + f_{d2}) \frac{2R}{c}$

If we only look at the Doppler frequency, we can't get range. The range information comes from the phase accumulation over the transmitted frequencies.

**The Prerequisite for Range Measurement:**
To resolve range, the system needs to have a way to distinguish echoes from different ranges. In CW radar, this is achieved by effectively "modulating" the transmitted signal.

**Multiple Frequency CW is often a precursor to FMCW.** In a stepped frequency approach, the system transmits at a series of frequencies and observes the phase shift at each frequency.

Let the transmitted frequency be $f_k = f_0 + k \Delta f$, for $k = 0, 1, \ldots, N-1$.
The received signal phase for a target at range $R$ is $\phi_k = 2\pi f_k \frac{2R}{c} + \phi_{d,k}$.
where $\phi_{d,k}$ is the Doppler phase.

If we consider the phase difference between consecutive transmissions for a stationary target:
$\Delta\phi_k = \phi_{k+1} - \phi_k = 2\pi (f_{k+1} - f_k) \frac{2R}{c} = 2\pi \Delta f \frac{2R}{c}$.

This phase difference $\Delta\phi_k$ is constant for all $k$ for a stationary target. It is directly proportional to $R$.

**The Challenge:** Phase measurement is ambiguous. A phase difference $\Delta\phi_k$ of $2\pi$ corresponds to a range change of $\lambda/2 = c/(2f)$.

**The Ambiguity Interval:**
The maximum range that can be unambiguously determined is related to the total frequency bandwidth swept. If we transmit $N$ frequencies with a step of $\Delta f$, the total bandwidth is $B = (N-1)\Delta f$.

The phase difference between the first and last transmitted frequencies is:
$\Delta\Phi_{total} = 2\pi (f_N - f_1) \frac{2R}{c} = 2\pi (N-1)\Delta f \frac{2R}{c}$

The ambiguity interval for range in a stepped frequency system is often considered as the range increment that causes a $2\pi$ phase shift difference across the entire frequency band.

**Let's refine this:**
Imagine transmitting at $f_1$ and $f_2 = f_1 + \Delta f$.
The phase difference between the received signals is $\Delta\phi = 2\pi \Delta f \frac{2R}{c}$.
This phase difference can be anywhere between $0$ and $2\pi$ for a range $R$ from $0$ to $R_{amb1} = \frac{c}{4\Delta f}$.

If we transmit at $f_1, f_2, \ldots, f_N$, where $f_k = f_0 + (k-1)\Delta f$.
The phase difference between $f_k$ and $f_{k+1}$ is $\Delta\phi_k = 2\pi \Delta f \frac{2R}{c}$.
The phase difference between $f_1$ and $f_N$ is $\Delta\Phi = 2\pi (f_N - f_1) \frac{2R}{c} = 2\pi (N-1)\Delta f \frac{2R}{c}$.

The system determines the phase $\Delta\phi$ over the band. The ambiguity interval for this single $\Delta f$ is $R_{amb1} = c/(4\Delta f)$.

To resolve this ambiguity, we need to use multiple frequency steps or a wider frequency band.

**Example of Range Resolution using Multiple Frequencies:**
Consider two transmitted frequencies $f_1$ and $f_2 = f_1 + \Delta f$.
The phase difference of the echoes is $\Delta\phi = 2\pi \Delta f (2R/c)$.
The phase difference can be measured modulo $2\pi$. This means the range is ambiguous. The unambiguous range for this single pair of frequencies is $R_{amb1} = c/(4\Delta f)$.

Now, consider transmitting at $f_1$ and $f_3 = f_1 + K \Delta f$, where $K$ is an integer.
The phase difference is $\Delta\phi' = 2\pi K \Delta f (2R/c)$.
This phase difference, modulo $2\pi$, will still depend on $R$.

**A More Concrete Example (from Skolnik):**
A technique called "staggered pulse repetition frequency" (staggered PRF) for pulsed radar can be adapted conceptually. For CW, think of "staggered frequency."

Suppose we transmit at $f_1$ and $f_2$.
The system measures the Doppler shift. Let's say it measures $f_{d1}$ at $f_1$ and $f_{d2}$ at $f_2$.
We know $f_{d1} = 2v_r f_1 / c$ and $f_{d2} = 2v_r f_2 / c$.
If $f_1$ and $f_2$ are very close, $f_{d1} \approx f_{d2}$. This doesn't help much.

The power of multiple frequencies comes from observing the *phase change* as the frequency changes.

**Let's use the phase difference method which is more common for CW range extension:**
Transmit frequencies $f_1, f_2, \ldots, f_N$.
For a target at range $R$, the phase of the echo at frequency $f_k$ is $\phi_k = 2\pi f_k \frac{2R}{c} \pmod{2\pi}$.

The key is to choose the frequency steps such that the phase differences between these frequencies uniquely identify the range.

Consider two frequencies $f_1$ and $f_2$ where $f_2 = f_1 + \Delta f$.
The phase difference is $\Delta\phi = 2\pi \Delta f \frac{2R}{c}$.
The range ambiguity is $R_{amb1} = c / (4 \Delta f)$.

If we use a second pair of frequencies $f_3$ and $f_4 = f_3 + \Delta f'$, the ambiguity interval is $R_{amb2} = c / (4 \Delta f')$.

By using multiple frequency pairs with different $\Delta f$, we can effectively resolve the range ambiguity. This is analogous to how multiple PRFs are used in pulsed radar.

**Example:**
Transmit at $f_1 = 10$ GHz and $f_2 = 10.01$ GHz. $\Delta f = 10$ MHz.
The ambiguity interval for this pair is $R_{amb1} = c / (4 \times 10 \times 10^6) = 3 \times 10^8 / (40 \times 10^6) = 300 / 40 = 7.5$ meters.
This means that if the target is at 7.5m, 15m, 22.5m, etc., the measured phase difference $\Delta\phi$ will be the same.

To resolve this, we could transmit at $f_3 = 10$ GHz and $f_4 = 10.005$ GHz. $\Delta f' = 5$ MHz.
The ambiguity interval is $R_{amb2} = c / (4 \times 5 \times 10^6) = 3 \times 10^8 / (20 \times 10^6) = 15$ meters.

By measuring $\Delta\phi$ from the first pair (ambiguity 7.5m) and $\Delta\phi'$ from the second pair (ambiguity 15m), we can resolve the range. For example, if the first pair gives a phase difference corresponding to 3.75m, and the second pair gives a phase difference corresponding to 11.25m, we can combine these to get a unique range within a larger interval.

*   **Key Concept:** Phase difference between echoes from different transmitted frequencies is proportional to range.
*   **Key Concept:** Ambiguity interval is determined by frequency separation.
*   **Reference:** Skolnik (2017) in chapters discussing CW and FMCW radar.

### 3. Types of Multiple Frequency CW Radar

**3.1 Stepped Frequency CW Radar:**
In this approach, the radar transmits a series of $N$ pulses, each at a slightly different frequency. The frequency is stepped incrementally. The phase of the received echo at each frequency is measured, and the differences in phase between consecutive or selected frequencies are used to determine the range.

*   **Operation:** Transmit $f_1, f_2, \dots, f_N$ where $f_{k+1} = f_k + \Delta f$.
*   **Processing:** Measure phase $\phi_k$ for each $f_k$. Calculate $\Delta\phi_k = \phi_{k+1} - \phi_k$. This $\Delta\phi_k$ is proportional to $R$ and resolves range up to $R_{amb} = c/(4\Delta f)$. By using a larger total bandwidth or multiple $\Delta f$ values, the ambiguity is resolved.
*   **Advantages:** Can provide range information.
*   **Disadvantages:** Requires sophisticated signal processing to measure phase accurately across frequencies.

**3.2 Frequency Hopping CW Radar:**
This is similar to stepped frequency, but the frequency transitions might be more dynamic or pseudorandom, often used for ECCM (Electronic Counter-Countermeasures) purposes as well. The principle of using phase differences across hopped frequencies remains the same.

*   **Reference:** While not exclusively a "multiple frequency CW" technique, frequency hopping is a relevant concept. Pratt & Allnutt (2021) discuss frequency agility in satellite communications, which has analogous principles.

### 4. Advantages and Disadvantages

**4.1 Advantages:**
*   **Range Measurement:** The primary advantage is the ability to measure the range of a target, overcoming a major limitation of simple CW radar.
*   **Velocity Measurement:** Still retains the ability to measure target velocity through the Doppler shift.
*   **Improved Resolution (Potentially):** By using a large frequency bandwidth, a significant theoretical range resolution can be achieved (similar to how bandwidth relates to resolution in pulse compression).
*   **ECCM Capabilities:** Frequency hopping can provide some resistance to jamming.

**4.2 Disadvantages:**
*   **Complexity:** Significantly more complex in terms of hardware (frequency synthesizers) and signal processing compared to basic CW radar.
*   **Ambiguity Resolution:** Requires careful selection of frequency steps and bandwidth to resolve range ambiguities. If the target range exceeds the unambiguous interval determined by the frequency steps, multiple ranges might fit the observed phase shifts.
*   **Vulnerability to Clutter:** Like all CW radars, it is susceptible to strong returns from nearby stationary objects (clutter). The Doppler processing needs to effectively filter these out.
*   **Transmit-Receive Isolation:** Still requires very good isolation between the transmitter and receiver to prevent the strong transmitted signal from overwhelming the weak echo.

### 5. Applications

While pure "Multiple Frequency CW Radar" as a distinct category is less common than FMCW, the principles of using multiple frequencies for range and Doppler are fundamental to advanced radar systems.

*   **Target Identification:** Analyzing Doppler signatures across multiple frequencies can sometimes help in distinguishing between different types of targets.
*   **Advanced Tracking Systems:** Where both precise range and velocity are required for tracking.
*   **Ground Penetrating Radar (GPR):** Some GPR systems utilize stepped frequencies to achieve different penetration depths and resolutions.

### 6. Relation to Course Outcomes

*   **CO1 (Illustrate principles of satellite communication):** While the direct application is radar, the concept of frequency agility and signal modulation used in multiple frequency CW radar shares conceptual similarities with frequency agility in satellite transponders for improving link performance or avoiding interference.
*   **CO2 (Design and analysis of satellite link):** Not directly applicable, as this is radar-focused.
*   **CO3 (Illustrate Radar Fundamentals like Radar Equation and Applications):** This topic directly contributes by explaining how CW radar principles are extended for range measurement, a fundamental radar capability. It adds to the understanding of radar applications beyond simple detection.
*   **CO4 (Compare various types of Radars and tracking techniques):** Understanding multiple frequency CW radar allows for comparison with other radar types like pulsed radar, FMCW radar, and how they achieve range and velocity measurements.

### 7. Key Points to Remember

*   Simple CW radar cannot measure range; it can only measure Doppler shift (velocity).
*   Multiple Frequency CW radar overcomes this by transmitting at multiple frequencies and analyzing the phase differences of the echoes.
*   The phase difference between echoes from two frequencies $f_1$ and $f_2$ is proportional to the range $R$ and the frequency difference $\Delta f$.
*   The range ambiguity interval for a frequency separation $\Delta f$ is $c/(4\Delta f)$.
*   Resolving range ambiguity requires using multiple frequency steps or a wider total bandwidth.
*   Stepped Frequency CW is a primary implementation method.

### 8. Practice Questions and Answers

**Question 1:**
What is the fundamental limitation of a simple CW radar that Multiple Frequency CW radar aims to address?

**Answer 1:**
The fundamental limitation of a simple CW radar is its inability to measure the **range** of a target. It can only determine the Doppler shift, which is directly related to the target's radial velocity.

**Question 2:**
How does transmitting at multiple frequencies allow a CW radar system to determine range?

**Answer 2:**
By transmitting at multiple frequencies, the radar can observe the **phase difference** of the received echoes corresponding to each transmitted frequency. This phase difference is proportional to the round-trip propagation time, and thus to the target's range. By carefully selecting the frequency steps and analyzing these phase differences, the system can resolve range ambiguities.

**Question 3:**
If a CW radar transmits at two frequencies, $f_1 = 10$ GHz and $f_2 = 10.02$ GHz, what is the unambiguous range for this system?

**Answer 3:**
The frequency difference is $\Delta f = f_2 - f_1 = 10.02$ GHz - $10$ GHz = $0.02$ GHz = $20 \times 10^6$ Hz.
The unambiguous range $R_{amb}$ is given by $R_{amb} = c / (4 \Delta f)$.
$R_{amb} = (3 \times 10^8 \text{ m/s}) / (4 \times 20 \times 10^6 \text{ Hz})$
$R_{amb} = (3 \times 10^8) / (80 \times 10^6)$
$R_{amb} = 300 / 80$
$R_{amb} = 3.75$ meters.

**Question 4:**
What is a potential disadvantage of using very small frequency steps in a Multiple Frequency CW radar system?

**Answer 4:**
Using very small frequency steps leads to a **large range ambiguity interval**. This means that the system can only resolve ranges up to that large interval, and beyond that, the range will be ambiguous. To achieve fine range resolution or to resolve larger ranges, a wider total frequency bandwidth or carefully chosen multiple frequency steps are required.

---
**End of Notes**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
