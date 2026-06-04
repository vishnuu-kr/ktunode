---
title: "Range and Doppler Measurement"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8bb"
status: "completed"
scrapedAt: "2026-05-23T19:30:30.879Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 4: CW and Frequency Modulated Radar: Doppler Effect

### Topic: Range and Doppler Measurement

This module delves into the fundamental principles of Continuous Wave (CW) and Frequency Modulated (FM) radar, with a specific focus on how these systems measure target range and velocity using the Doppler effect.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Explain the principle of range measurement in radar systems.
*   Describe the concept of the Doppler effect and its application in radar.
*   Analyze how CW radar utilizes the Doppler effect for velocity measurement.
*   Understand the principles of range measurement in FM radar.
*   Differentiate between range and Doppler measurements in different radar types.
*   Discuss the limitations and challenges in range and Doppler measurements.

---

### Key Concepts and Definitions:

**Radar:** An electromagnetic system used for detecting the presence, direction, distance, and speed of objects by sending out pulses of radio waves or microwaves which are reflected by the object.

**Range:** The distance between the radar system and the target.

**Doppler Effect:** The change in frequency of a wave in relation to an observer who is moving relative to the wave source. In radar, this occurs when the target is moving relative to the radar antenna.

**Continuous Wave (CW) Radar:** A radar system that transmits a continuous electromagnetic wave. It is primarily used for measuring the velocity of targets.

**Frequency Modulated (FM) Radar:** A radar system that transmits a wave whose frequency is varied over time. This allows for both range and velocity measurements.

**Pulse Radar:** A radar system that transmits short pulses of radio waves and measures the time it takes for the reflected pulse to return. This is the primary method for range measurement in traditional radar.

**Beat Frequency:** In heterodyne detection, the difference between two frequencies, often used in Doppler processing.

**Chirp:** A signal whose frequency increases (up-chirp) or decreases (down-chirp) linearly with time. Used in FM radar for range measurement.

**Dechirping:** A process in FM radar where the received echo is mixed with a replica of the transmitted signal to extract the range information.

---

### 1. Range Measurement in Radar Systems

**Fundamental Principle:** Range is determined by measuring the time it takes for a transmitted pulse to travel to the target and back to the radar receiver. This is based on the known speed of electromagnetic waves (the speed of light, $c$).

**The Radar Equation (for range determination):**

The time delay ($\Delta t$) for a target at range ($R$) is given by:
$$ \Delta t = \frac{2R}{c} $$

where:
*   $R$ is the range to the target.
*   $c$ is the speed of light ($c \approx 3 \times 10^8$ m/s).

Since the radar transmits pulses, it measures the time between the transmission of a pulse and the reception of its echo. If the radar transmits pulses at a Pulse Repetition Frequency (PRF), the maximum unambiguous range ($R_{max}$) is determined by the time between pulses, known as the Pulse Repetition Interval (PRI).

$$ PRI = \frac{1}{PRF} $$

The maximum unambiguous range is then:
$$ R_{max} = \frac{c \times PRI}{2} = \frac{c}{2 \times PRF} $$

**Example:** If a radar transmits pulses at a PRF of 1000 Hz (1000 pulses per second), the PRI is $1/1000 = 0.001$ seconds (1 ms). The maximum unambiguous range would be:
$$ R_{max} = \frac{3 \times 10^8 \text{ m/s} \times 0.001 \text{ s}}{2} = 150,000 \text{ m} = 150 \text{ km} $$

**Important Point:** Range measurement is primarily achieved by **pulse radar** and is dependent on accurately measuring the time-of-flight of the transmitted pulse.

**Reference:**
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Chapter 2 discusses basic radar principles, including range measurement.

---

### 2. The Doppler Effect and its Application in Radar

**The Doppler Effect Explained:**
When a radar transmits a signal at frequency $f_0$ and the target is moving with a radial velocity $v_r$ relative to the radar, the frequency of the reflected signal ($f_r$) will be shifted. This frequency shift is called the Doppler shift ($f_d$).

The formula for the Doppler shift is:
$$ f_d = \frac{2 v_r}{\lambda} $$

where:
*   $v_r$ is the radial velocity of the target (positive for approaching targets, negative for receding targets).
*   $\lambda$ is the wavelength of the transmitted signal ($\lambda = c/f_0$).

Substituting $\lambda$:
$$ f_d = \frac{2 v_r f_0}{c} $$

**Application in Radar:**

*   **Velocity Measurement:** CW radar systems exploit the Doppler shift to measure the velocity of targets. By comparing the transmitted frequency with the received frequency, the Doppler shift can be measured, and thus the target's radial velocity can be calculated.
*   **Target Discrimination:** The Doppler shift can also be used to distinguish between moving targets and stationary clutter (e.g., ground, buildings). Stationary objects produce no Doppler shift, allowing them to be filtered out.

**Important Point:** The Doppler effect is crucial for measuring target **velocity** in radar systems.

**Reference:**
*   Pratt, T., & Allnutt, J. (2021). *Satellite Communications*. While primarily focused on satellite comms, the underlying physics of waves and Doppler is transferable.
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Chapter 1 and relevant sections in later chapters discuss the Doppler effect in radar.
*   Edde, B. (2004). *Radar: Principles, Technology, Applications*. Chapter 3 covers Doppler radar principles.

---

### 3. CW Radar: Doppler Effect for Velocity Measurement

**How CW Radar Works:**
CW radar transmits a continuous, single-frequency signal. The transmitted signal is usually kept separate from the received signal using a duplexer or by physically separating the transmit and receive antennas.

*   **Transmission:** A stable, continuous wave (CW) signal of frequency $f_0$ is transmitted.
*   **Reception:** The reflected signal from the target is received at frequency $f_r$.
*   **Mixing:** The received signal is mixed with a sample of the transmitted signal. This process generates a signal at the difference frequency, which is the Doppler shift ($f_d$).
*   **Detection:** This beat frequency ($f_d$) is then filtered and measured.

**Advantages of CW Radar:**
*   **High average power:** Allows for long detection ranges.
*   **Simple design:** Compared to pulsed radar.
*   **Excellent velocity measurement:** Direct measurement of Doppler shift.

**Limitations of CW Radar:**
*   **No inherent range measurement:** A simple CW radar cannot distinguish between echoes from different ranges. All echoes are mixed with the transmitted signal, and the Doppler shift is the only information obtained.
*   **Clutter:** Difficulty in separating weak moving targets from strong stationary clutter due to frequency overlap if filtering is not done effectively.

**Overcoming Limitations (for range and velocity):**
To overcome the range ambiguity of simple CW radar, modifications are introduced, such as Frequency Modulated Continuous Wave (FMCW) radar.

**Example:** A police speed gun is a classic example of CW Doppler radar. It transmits a signal, and the Doppler shift from a moving vehicle is used to calculate its speed.

**Important Point:** Simple CW radar excels at velocity measurement but **cannot directly measure range**.

**Reference:**
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Chapter 2 covers CW radar.
*   Edde, B. (2004). *Radar: Principles, Technology, Applications*. Chapter 3 is dedicated to Doppler radar.
*   Kinsley, S., & Quegan, S. (1999). *Understanding Radar Systems*. Chapters on Doppler radar are relevant.

---

### 4. Range Measurement in Frequency Modulated (FM) Radar

**The Need for Range in FM Radar:**
Simple CW radar lacks range information. FM radar (specifically FMCW radar) is designed to measure both range and velocity.

**How FMCW Radar Works:**
In FMCW radar, the transmitted signal's frequency is swept linearly over time, creating a "chirp." This chirp can be either an "up-chirp" (frequency increasing) or a "down-chirp" (frequency decreasing).

*   **Transmission:** The radar transmits a signal with a frequency that changes linearly over a period called the sweep time ($T_s$) by a frequency deviation ($\Delta f$).
*   **Reception:** The reflected signal from a target at range $R$ will be a delayed version of the transmitted signal.
*   **Mixing (Dechirping):** The received echo is mixed with a replica of the *current* transmitted signal. This process generates a beat frequency ($f_b$).

**Range Measurement in FMCW Radar:**
Consider a target at range $R$. The time delay for the echo is $\Delta t = 2R/c$.
During this time delay, the transmitted signal's frequency has changed. The difference in frequency between the transmitted signal and the received echo, when mixed, produces a beat frequency that is proportional to the time delay and hence the range.

If the sweep is linear, the rate of frequency change is $K = \Delta f / T_s$ (Hz/s).
The frequency difference ($f_b$) is then:
$$ f_b = K \times \Delta t = \frac{\Delta f}{T_s} \times \frac{2R}{c} $$

From this, the range $R$ can be determined:
$$ R = \frac{c \times T_s \times f_b}{2 \times \Delta f} $$

**Important Point:** In FMCW radar, a beat frequency is generated which is directly proportional to the target's **range**.

**Reference:**
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Chapter 2 discusses FMCW radar.
*   Kinsley, S., & Quegan, S. (1999). *Understanding Radar Systems*. Chapters on FMCW radar.

---

### 5. Differentiating Range and Doppler Measurements in Different Radar Types

| Radar Type           | Primary Measurement | How Range is Measured                                    | How Doppler is Measured                                   |
| :------------------- | :------------------ | :------------------------------------------------------- | :-------------------------------------------------------- |
| **Pulse Radar**      | Range               | Time-of-flight of transmitted pulse to target and back. | Doppler shift is measured from the received pulse.        |
| **CW Radar (Simple)** | Velocity            | **Cannot directly measure range.**                       | Direct measurement of the frequency difference (Doppler shift). |
| **FMCW Radar**       | Range & Velocity    | Beat frequency from frequency sweep and time delay.      | Additional frequency shift from Doppler effect.           |

**Measuring Both Range and Velocity in FMCW Radar:**

In FMCW radar, the received signal is a chirp that is delayed by $\Delta t = 2R/c$ and frequency-shifted by $f_d = 2v_r/\lambda$.

When the received echo is mixed with a replica of the *current* transmitted signal:

*   **Range Component:** The frequency difference due to range is $f_{b\_range} = K \times \Delta t$.
*   **Doppler Component:** The Doppler shift causes a further frequency shift.

To separate range and velocity, FMCW radar typically employs a **sawtooth sweep**.

1.  **Up-Chirp:** Transmit a chirp with increasing frequency. The beat frequency produced will be $f_{b1} = f_{b\_range} + f_d$.
2.  **Down-Chirp (or return to start):** Transmit a chirp with decreasing frequency (or return to the start of the sweep for the next transmission). The beat frequency produced will be $f_{b2} = f_{b\_range} - f_d$.

By measuring $f_{b1}$ and $f_{b2}$, we can solve for the range and Doppler shift:
*   $f_{b\_range} = (f_{b1} + f_{b2}) / 2$
*   $f_d = (f_{b1} - f_{b2}) / 2$

This allows for simultaneous measurement of both range and velocity.

**Important Point:** FMCW radar with **sawtooth sweeps** is capable of measuring **both range and velocity** simultaneously.

**Reference:**
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Chapter 2 provides detailed analysis of FMCW radar.
*   Kinsley, S., & Quegan, S. (1999). *Understanding Radar Systems*. Chapters dedicated to FMCW and Doppler radar.

---

### 6. Limitations and Challenges in Range and Doppler Measurements

**Range Measurement Limitations:**

*   **Ambiguity:** In pulsed radar, if the PRI is too short, echoes from distant targets may arrive during the transmission of the next pulse, leading to range ambiguity. $R_{max} = c/(2 \times PRF)$.
*   **Resolution:** The ability to distinguish between two closely spaced targets. This is determined by the pulse width ($\tau$) for pulse radar: $R_{resolution} = c \times \tau / 2$. Shorter pulses provide better resolution but require wider bandwidths.
*   **Signal-to-Noise Ratio (SNR):** Weak echoes can be lost in noise, limiting the maximum detectable range. The radar equation governs this.
*   **Clutter:** Strong echoes from stationary objects (ground, rain) can mask weaker echoes from desired targets.

**Doppler Measurement Limitations:**

*   **Ambiguity:** In pulsed Doppler radar, if the PRF is too low, the Doppler shift can be aliased, meaning that a measured Doppler frequency might correspond to multiple true Doppler frequencies. This is velocity ambiguity. $f_{d\_max} = PRF/2$.
*   **Zero Velocity Targets:** Simple CW radar cannot detect stationary targets because there is no Doppler shift.
*   **Clutter:** Stationary clutter can overwhelm moving target signals if not properly filtered.
*   **Target Acceleration:** If a target accelerates significantly during the observation time, the Doppler shift will change, complicating velocity estimation.
*   **Beamwidth Effects:** If a target is not directly on the radar's boresight, the measured Doppler shift will only represent the radial component of velocity. The velocity component perpendicular to the beam is not detected.

**FMCW Specific Limitations:**

*   **Range-Velocity Coupling:** In FMCW radar, there's a potential for range and velocity to be coupled. If the Doppler shift is significant compared to the chirp bandwidth, it can affect the beat frequency measurement.
*   **Sweep Linearity:** Imperfect linearity in the frequency sweep can introduce errors in range measurements.
*   **Target Visibility:** FMCW radar is generally best suited for detecting targets within a limited range and velocity space, especially in applications like automotive radar.

**Important Points to Remember:**

*   **Range is determined by time-of-flight (pulse radar) or beat frequency from frequency sweep (FMCW radar).**
*   **Velocity is determined by the Doppler frequency shift.**
*   **CW radar is primarily for velocity, not range.**
*   **FMCW radar can measure both range and velocity, often using sawtooth frequency sweeps.**
*   **Ambiguities (range and velocity) are critical design considerations, linked to PRF and sweep parameters.**
*   **Clutter and SNR are pervasive challenges affecting both measurements.**

**Reference:**
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Chapters discussing ambiguities and radar performance.
*   Kinsley, S., & Quegan, S. (1999). *Understanding Radar Systems*. Chapters on practical radar limitations.

---

### Course Outcome Alignment:

*   **CO1 (Illustrate principles of satellite communication - K2):** While this module is radar-focused, understanding wave propagation, frequency, and Doppler effects are foundational principles shared across various communication systems, including satellite communication where Doppler shifts are also important (e.g., due to satellite movement).
*   **CO2 (Design and analysis of satellite link - K3):** The concepts of signal processing, frequency manipulation, and overcoming signal degradation (noise, interference) discussed in radar are directly applicable to the design and analysis of satellite communication links. Understanding how to extract information from modulated signals is key.
*   **CO3 (Illustrate Radar Fundamentals like Radar Equation and Applications - K2):** This module directly covers fundamental radar principles, including how range is measured (related to the radar equation's range dependency) and the application of the Doppler effect for velocity measurement and target detection.
*   **CO4 (Compare various types of Radars and tracking techniques - K2):** This module explicitly compares CW and FM radar, highlighting their strengths and weaknesses in range and Doppler measurement, which are crucial for understanding different radar types and their suitability for various tracking applications.

---

### Practice Questions and Exercises:

**Question 1:**
A pulsed radar system operates with a PRF of 2 kHz. What is the maximum unambiguous range of this radar?

**Answer 1:**
The Pulse Repetition Interval (PRI) is $PRI = 1/PRF = 1/2000 \text{ Hz} = 0.0005$ seconds.
The maximum unambiguous range is $R_{max} = \frac{c \times PRI}{2}$.
$R_{max} = \frac{3 \times 10^8 \text{ m/s} \times 0.0005 \text{ s}}{2} = \frac{150,000 \text{ m}}{2} = 75,000 \text{ m} = 75 \text{ km}$.

**Question 2:**
A CW radar transmits a signal at 10 GHz. A target is observed to be moving towards the radar with a radial velocity of 100 m/s. What is the Doppler shift frequency?

**Answer 2:**
The Doppler shift formula is $f_d = \frac{2 v_r f_0}{c}$.
Given:
$v_r = 100$ m/s (positive as it's approaching)
$f_0 = 10$ GHz $= 10 \times 10^9$ Hz
$c = 3 \times 10^8$ m/s

$f_d = \frac{2 \times 100 \text{ m/s} \times 10 \times 10^9 \text{ Hz}}{3 \times 10^8 \text{ m/s}}$
$f_d = \frac{200 \times 10 \times 10^9}{3 \times 10^8} \text{ Hz}$
$f_d = \frac{2000 \times 10^9}{3 \times 10^8} \text{ Hz}$
$f_d = \frac{20 \times 10^{11}}{3 \times 10^8} \text{ Hz}$
$f_d = \frac{20}{3} \times 10^3 \text{ Hz} \approx 6.67 \times 10^3 \text{ Hz} = 6.67 \text{ kHz}$.

**Question 3:**
In an FMCW radar, the transmitted signal has a sweep rate of $2 \times 10^{12}$ Hz/s and a total sweep bandwidth of 200 MHz. If a target is detected at a range of 1 km, what is the beat frequency generated due to range?

**Answer 3:**
The sweep rate $K = \Delta f / T_s$. We are given $K = 2 \times 10^{12}$ Hz/s.
The range is $R = 1$ km $= 1000$ m.
The time delay is $\Delta t = \frac{2R}{c} = \frac{2 \times 1000 \text{ m}}{3 \times 10^8 \text{ m/s}} = \frac{2000}{3 \times 10^8} \text{ s} = \frac{2}{3} \times 10^{-5}$ s.
The beat frequency due to range is $f_{b\_range} = K \times \Delta t$.
$f_{b\_range} = (2 \times 10^{12} \text{ Hz/s}) \times (\frac{2}{3} \times 10^{-5} \text{ s})$
$f_{b\_range} = \frac{4}{3} \times 10^7 \text{ Hz} \approx 1.33 \times 10^7 \text{ Hz} = 13.3 \text{ MHz}$.

*(Note: The sweep bandwidth of 200 MHz is not directly needed to calculate the beat frequency for a given range if the sweep rate is known. The relationship $R = c \times T_s \times f_b / (2 \times \Delta f)$ can also be used, where $f_b$ would be the beat frequency for a target at range R. Rearranging, $f_b = 2 \times R \times \Delta f / (c \times T_s) = (2R/c) \times (\Delta f / T_s) = \Delta t \times K$.)*

**Question 4:**
Explain why a simple CW radar cannot measure range, and how FMCW radar overcomes this limitation.

**Answer 4:**
A simple CW radar transmits a single, continuous frequency. The receiver mixes the received echo with a sample of the transmitted signal. The output is the Doppler shift, which is dependent on the target's velocity ($f_d = 2v_r/\lambda$). There is no inherent time delay measurement or frequency variation that would allow for range determination. All echoes, regardless of range, will produce a Doppler shift if the target is moving.

FMCW radar overcomes this by continuously sweeping the transmitted frequency. When the received echo (which is a delayed version of the transmitted signal) is mixed with the current transmitted signal, a beat frequency is generated. This beat frequency is directly proportional to the time delay, and thus the range, because the frequency of the transmitted signal has changed during the time the echo was traveling. By carefully controlling the frequency sweep and measuring the resulting beat frequency, the radar can determine the target's range. Further sophistication, like sawtooth sweeps, allows for simultaneous velocity measurement.

---
This concludes the study notes for Module 4, Topic: Range and Doppler Measurement. Remember to review the references for deeper understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
