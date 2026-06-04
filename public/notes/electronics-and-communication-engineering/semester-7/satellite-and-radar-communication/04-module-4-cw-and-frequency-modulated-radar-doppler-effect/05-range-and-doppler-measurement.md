---
title: "Range and Doppler Measurement"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff331"
status: "completed"
scrapedAt: "2026-05-23T18:10:58.934Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 4: CW and Frequency Modulated Radar: Doppler Effect

### Topic: Range and Doppler Measurement

---

### Introduction

This topic delves into fundamental aspects of radar systems, specifically how range (distance) and velocity (through Doppler effect) are measured. We will explore the principles behind these measurements, the role of different radar types, and the underlying signal processing techniques. This knowledge is crucial for understanding radar's capabilities in various applications, from satellite remote sensing to military surveillance.

---

### 1. Range Measurement

#### 1.1. Principle of Range Measurement

*   **Concept:** Radar determines the range to a target by measuring the time it takes for a transmitted pulse to travel to the target, reflect off it, and return to the radar receiver.
*   **Key Idea:** The speed of the transmitted electromagnetic wave is known (the speed of light, 'c').
*   **Formula:**
    *   Let $t$ be the round-trip time of flight.
    *   The distance traveled is $2R$, where $R$ is the range to the target.
    *   Since speed = distance / time, we have $c = \frac{2R}{t}$.
    *   Therefore, the range $R$ can be calculated as:
        $$R = \frac{c \times t}{2}$$
*   **Important Point:** We divide by 2 because the time measured is for the wave to travel to the target *and* back.

#### 1.2. Pulse Radar for Range Measurement

*   **Operation:** Pulse radars transmit short bursts (pulses) of radio frequency (RF) energy. The time between the transmission of a pulse and the reception of its echo is measured.
*   **Pulse Width ($\tau$):** The duration of the transmitted pulse. This affects range resolution.
*   **Pulse Repetition Frequency (PRF) / Pulse Repetition Interval (PRI):**
    *   **PRF:** The number of pulses transmitted per second.
    *   **PRI:** The time between the start of one pulse and the start of the next (PRI = 1/PRF). This determines the maximum unambiguous range.
*   **Maximum Unambiguous Range ($R_{max}$):** The farthest target distance from which an echo can be received before the next pulse is transmitted.
    *   If an echo from a target arrives *after* the next pulse has been transmitted, it can be mistaken for an echo from a closer target, leading to a range ambiguity.
    *   The time for the echo to return from $R_{max}$ must be equal to the PRI.
    *   Therefore, $PRI = \frac{2R_{max}}{c}$.
    *   Rearranging for maximum unambiguous range:
        $$R_{max} = \frac{c \times PRI}{2} = \frac{c}{2 \times PRF}$$
*   **Range Resolution:** The ability of a radar to distinguish between two closely spaced targets.
    *   It is primarily determined by the pulse width ($\tau$).
    *   Two targets can be resolved if the time between their echoes is greater than the pulse width.
    *   The minimum range separation for resolution is approximately:
        $$ \Delta R = \frac{c \times \tau}{2} $$
*   **Skolnik (2nd Ed., 2017) Reference:** Chapter 2 ("Pulsed Radar") thoroughly covers these principles of range measurement, including the effects of pulse width, PRF, and range resolution.

#### 1.3. Range Measurement Techniques

*   **Simple Time Measurement:** For basic pulse radars, the time delay is measured directly.
*   **Range Gating:** A time-varying gate is applied to the receiver output. The gate is opened only for a specific time interval corresponding to a expected range. This helps to isolate echoes from targets within a particular range interval and reject clutter from closer or farther objects.
*   **Digital Signal Processing:** Modern radars use digital techniques to sample the received signal and precisely determine the time delay of the echo.

#### 1.4. Example of Range Measurement

*   **Scenario:** A radar transmits a pulse of 1 microsecond ($\tau = 1 \mu s$) duration. An echo is received 100 microseconds ($t = 100 \mu s$) after the pulse was transmitted.
*   **Calculation:**
    *   $c \approx 3 \times 10^8$ m/s
    *   $R = \frac{c \times t}{2} = \frac{(3 \times 10^8 \text{ m/s}) \times (100 \times 10^{-6} \text{ s})}{2}$
    *   $R = \frac{30000 \text{ m}}{2} = 15000 \text{ m} = 15 \text{ km}$
*   **Range Resolution:**
    *   $\Delta R = \frac{c \times \tau}{2} = \frac{(3 \times 10^8 \text{ m/s}) \times (1 \times 10^{-6} \text{ s})}{2}$
    *   $\Delta R = \frac{300 \text{ m}}{2} = 150 \text{ m}$
    *   This means the radar can distinguish between two targets if they are separated by at least 150 meters along the line of sight.

---

### 2. Doppler Effect and Doppler Measurement

#### 2.1. Principle of Doppler Effect in Radar

*   **Concept:** The Doppler effect is the change in frequency of a wave in relation to an observer who is moving relative to the wave source. For radar, this means the frequency of the reflected wave changes if the target is moving.
*   **Mechanism:**
    *   When a radar transmits a wave, and the target is moving towards the radar, the reflected wave is compressed in time, resulting in a higher frequency (positive Doppler shift).
    *   When the target is moving away from the radar, the reflected wave is stretched in time, resulting in a lower frequency (negative Doppler shift).
*   **Key Idea:** The magnitude of the frequency shift is directly proportional to the radial velocity of the target.
*   **Doppler Shift ($f_d$):**
    *   Let $f_0$ be the transmitted radar frequency.
    *   Let $v_r$ be the radial velocity of the target (positive if moving away, negative if moving towards).
    *   The Doppler shift is given by:
        $$f_d = \frac{2 f_0 v_r}{c}$$
        *   The factor of 2 arises because the Doppler effect is experienced twice: once when the wave is incident on the moving target and again when the reflected wave returns to the stationary radar.
*   **Relationship to Received Frequency ($f_r$):**
    *   If the target is moving towards the radar ($v_r$ is negative), $f_r = f_0 - |f_d|$.
    *   If the target is moving away from the radar ($v_r$ is positive), $f_r = f_0 + f_d$.
    *   Therefore, $f_d = f_r - f_0$.

#### 2.2. Doppler Measurement Techniques

*   **Continuous Wave (CW) Radar:**
    *   CW radar transmits a continuous, unmodulated wave.
    *   It uses separate transmitting and receiving antennas (or a single antenna with a circulator) to prevent desensitization.
    *   The received signal is mixed with a sample of the transmitted signal. The output of the mixer is the Doppler frequency, $f_d$.
    *   **Limitation:** CW radar alone cannot measure range, as it doesn't transmit pulses to measure time of flight.
*   **Frequency Modulated Continuous Wave (FMCW) Radar:**
    *   FMCW radar transmits a continuous wave whose frequency is varied linearly with time (a "chirp").
    *   When the echo returns, the transmitted signal has already changed frequency. The difference in frequency between the received echo and the currently transmitted signal is proportional to the range.
    *   To measure Doppler velocity, a second chirp (or a variation in the sweep) is needed. By comparing the frequency difference for two chirps, the Doppler shift can be extracted.
    *   **Advantages:** Can measure both range and velocity simultaneously.
*   **Pulsed Doppler Radar:**
    *   Combines the range measurement capability of pulse radar with Doppler processing.
    *   Transmits a series of pulses (a pulse train).
    *   The Doppler shift is measured by observing the phase change of the received echo from pulse to pulse. For a moving target, the phase of the echo will change from one pulse to the next, while for stationary clutter, the phase remains constant.
    *   **Coherent Pulsed Doppler Radar:** This is a key concept. The radar must maintain a stable phase reference between transmitted pulses to accurately measure the phase shifts caused by the Doppler effect.
*   **Skolnik (2nd Ed., 2017) Reference:** Chapter 1 ("Introduction") and Chapter 3 ("Pulsed Doppler Radar") are vital for understanding Doppler principles and measurement. Chapter 11 ("CW and FM Radar") details FMCW techniques.

#### 2.3. Doppler Measurement and Velocity Measurement

*   **Radial Velocity:** The Doppler effect measures only the velocity component along the line of sight between the radar and the target (radial velocity).
*   **Maximum Unambiguous Doppler Velocity ($v_{r,max}$):**
    *   This is limited by the PRF. The maximum Doppler frequency shift that can be unambiguously measured is half the PRF (Nyquist frequency).
    *   $|f_{d,max}| = \frac{PRF}{2}$
    *   Using the Doppler shift formula: $\frac{2 f_0 v_{r,max}}{c} = \frac{PRF}{2}$
    *   Therefore, the maximum unambiguous radial velocity is:
        $$v_{r,max} = \frac{c \times PRF}{4 f_0}$$
*   **Doppler Ambiguity:** If the target's radial velocity causes a Doppler shift greater than $PRF/2$, it will be aliased, meaning the measured Doppler shift will be smaller than the actual shift, leading to an incorrect velocity estimate.
*   **Target Detection in Clutter:** Doppler processing is highly effective at separating moving targets from stationary clutter (e.g., ground, buildings). Stationary objects produce zero Doppler shift, allowing them to be filtered out by Doppler filters (like MTI - Moving Target Indication).

#### 2.4. Examples of Doppler Measurement

*   **Scenario:** A radar operating at a frequency of $f_0 = 10$ GHz transmits pulses with a PRF of 1000 Hz. A target is observed to have a Doppler shift of $f_d = 200$ Hz.
*   **Calculation of Radial Velocity:**
    *   $c \approx 3 \times 10^8$ m/s
    *   $f_d = \frac{2 f_0 v_r}{c}$
    *   $v_r = \frac{c \times f_d}{2 f_0} = \frac{(3 \times 10^8 \text{ m/s}) \times (200 \text{ Hz})}{2 \times (10 \times 10^9 \text{ Hz})}$
    *   $v_r = \frac{60 \times 10^9 \text{ m/s}}{20 \times 10^9} = 3 \text{ m/s}$
    *   Since $f_d$ is positive, the target is moving away from the radar at 3 m/s.
*   **Maximum Unambiguous Velocity:**
    *   $v_{r,max} = \frac{c \times PRF}{4 f_0} = \frac{(3 \times 10^8 \text{ m/s}) \times (1000 \text{ Hz})}{4 \times (10 \times 10^9 \text{ Hz})}$
    *   $v_{r,max} = \frac{300 \times 10^9 \text{ m/s}}{40 \times 10^9} = 7.5 \text{ m/s}$
    *   If the target's actual velocity caused a Doppler shift greater than 500 Hz (PRF/2), its velocity would be ambiguous.

---

### 3. Combined Range and Doppler Measurement

#### 3.1. Pulsed Doppler Radar System Architecture

*   **Transmit:** Generates a stable RF pulse (coherent).
*   **Receive:** Receives echoes from targets.
*   **Mixer/Demodulator:** Mixes the received echo with a stable reference signal (derived from the transmitter) to produce a baseband or intermediate frequency (IF) signal.
*   **Pulse Compression (Optional but Common):** Techniques like linear frequency modulation (chirp) within the pulse or phase coding are used to improve range resolution and signal-to-noise ratio without sacrificing average transmitted power.
*   **Doppler Filters (Filters Bank):** The received signal (after demodulation and potentially pulse compression) is passed through a series of bandpass filters, each tuned to a specific Doppler frequency. This allows for the separation of targets moving at different velocities.
*   **Range-Doppler Map:** The output of the Doppler filters for each received pulse is analyzed across different range bins, creating a two-dimensional map of target intensity as a function of both range and Doppler velocity.

#### 3.2. Measuring Range and Doppler Simultaneously

*   **FMCW:** As mentioned, FMCW can measure range by the frequency difference between transmitted and received signals during a single sweep. To measure Doppler, the frequency sweep needs to be repeated, and the Doppler shift is found by comparing the range measurements from consecutive sweeps.
*   **Pulsed Doppler:**
    *   **Range:** Determined by the time delay of the pulse echo, just like in a simple pulse radar.
    *   **Doppler:** Determined by the phase change of the echo from one pulse to the next in a coherent pulse train. The phase history of the target's echo over several pulses is analyzed to estimate its Doppler frequency.
*   **Pratt & Allnutt (3rd Ed., 2021) Reference:** While their primary focus is satellite communications, the principles of signal processing for ranging and Doppler are universal. Concepts related to signal detection and parameter estimation discussed in satellite link analysis have analogous applications in radar signal processing.
*   **Edde (1st Ed., 2004) Reference:** Chapter 3 ("The Doppler Effect and Its Application") and Chapter 4 ("Pulsed Radar Systems") provide excellent coverage of how range and Doppler are measured together, particularly in the context of radar system design.

#### 3.3. Challenges and Considerations

*   **Clutter:** Stationary objects can create strong echoes with zero Doppler shift. Moving targets must be detected against this background. MTI (Moving Target Indication) and MTD (Moving Target Detection) techniques are used to suppress clutter.
*   **Ambiguities:**
    *   **Range Ambiguity:** Occurs when the PRI is too short, causing echoes from distant targets to be mistaken for closer ones.
    *   **Doppler Ambiguity:** Occurs when the PRF is too low, causing high velocities to be mistaken for lower ones (aliasing).
*   **Trade-offs:** There's a fundamental trade-off between unambiguous range and unambiguous velocity. A higher PRF provides better velocity resolution and less velocity ambiguity but reduces the maximum unambiguous range. A lower PRF extends the unambiguous range but limits the unambiguous velocity measurement.
    *   **Pratt & Allnutt (3rd Ed., 2021) / Skolnik (2nd Ed., 2017):** Both texts implicitly highlight these trade-offs when discussing system design parameters like PRF.

---

### 4. Applications Related to Range and Doppler Measurement

*   **Satellite Altimetry:** Satellites use radar altimeters to measure the height of the ocean surface by precisely timing radar pulses reflected from the sea. Doppler information can also be used to correct for satellite motion. (Relates to CO1, CO2)
*   **Weather Radar:** Measures the distance to precipitation particles and their velocity (wind speed and direction) through Doppler shifts. This allows for the detection of storms, hail, and tornadoes. (Relates to CO3, CO4)
*   **Ground Penetrating Radar (GPR):** Measures the depth and characteristics of subsurface layers by timing reflected radar pulses. (Relates to CO3)
*   **Automotive Radar:** Used for adaptive cruise control, collision avoidance, and parking assist. Measures the range and relative velocity of other vehicles. (Relates to CO3, CO4)
*   **Air Traffic Control Radar:** Tracks aircraft, providing both range and velocity information to air traffic controllers. (Relates to CO3, CO4)
*   **Target Tracking:** The ability to measure both range and Doppler velocity is fundamental for tracking the position and movement of targets over time.

---

### Practice Questions and Answers

**Question 1:** A radar transmits a pulse of 0.5 microseconds duration. An echo is received 10 microseconds after transmission. What is the range to the target? What is the radar's range resolution?

**Answer 1:**
*   **Range:**
    *   $t = 10 \mu s = 10 \times 10^{-6}$ s
    *   $c \approx 3 \times 10^8$ m/s
    *   $R = \frac{c \times t}{2} = \frac{(3 \times 10^8 \text{ m/s}) \times (10 \times 10^{-6} \text{ s})}{2} = \frac{3000 \text{ m}}{2} = 1500 \text{ m} = 1.5 \text{ km}$
*   **Range Resolution:**
    *   $\tau = 0.5 \mu s = 0.5 \times 10^{-6}$ s
    *   $\Delta R = \frac{c \times \tau}{2} = \frac{(3 \times 10^8 \text{ m/s}) \times (0.5 \times 10^{-6} \text{ s})}{2} = \frac{150 \text{ m}}{2} = 75 \text{ m}$

**Question 2:** A coherent pulsed radar transmits at 5 GHz with a PRF of 2000 Hz. What is the maximum unambiguous radial velocity that can be measured?

**Answer 2:**
*   $f_0 = 5 \text{ GHz} = 5 \times 10^9$ Hz
*   $PRF = 2000$ Hz
*   $c \approx 3 \times 10^8$ m/s
*   $v_{r,max} = \frac{c \times PRF}{4 f_0} = \frac{(3 \times 10^8 \text{ m/s}) \times (2000 \text{ Hz})}{4 \times (5 \times 10^9 \text{ Hz})} = \frac{600 \times 10^9 \text{ m/s}}{20 \times 10^9} = 30 \text{ m/s}$

**Question 3:** Explain the difference between range ambiguity and Doppler ambiguity in pulsed radar. How does PRF affect these ambiguities?

**Answer 3:**
*   **Range Ambiguity:** Occurs when the time between the transmission of a pulse and the reception of its echo is longer than the Pulse Repetition Interval (PRI). This causes the echo from a distant target to appear as if it originated from a closer target, leading to an incorrect range measurement. Higher PRF (shorter PRI) increases the likelihood of range ambiguity.
*   **Doppler Ambiguity:** Occurs when the Doppler shift frequency is too high for the PRF. The Doppler shift is proportional to the radial velocity. If the Doppler shift exceeds half the PRF ($PRF/2$), it will be aliased, leading to an incorrect velocity measurement (a lower velocity being reported). Higher PRF reduces the chance of Doppler ambiguity.
*   **Effect of PRF:**
    *   **Increasing PRF:** Decreases maximum unambiguous range, decreases Doppler ambiguity.
    *   **Decreasing PRF:** Increases maximum unambiguous range, increases Doppler ambiguity.

---

### Important Points to Remember

*   **Range is measured by time of flight:** $R = \frac{c \times t}{2}$.
*   **Range resolution is determined by pulse width:** $\Delta R = \frac{c \times \tau}{2}$.
*   **Doppler shift is proportional to radial velocity:** $f_d = \frac{2 f_0 v_r}{c}$.
*   **CW radar measures Doppler but not range.**
*   **FMCW radar can measure both range and Doppler.**
*   **Pulsed Doppler radar uses coherent pulse trains and phase history analysis to measure Doppler.**
*   **PRF determines the trade-off between unambiguous range and unambiguous velocity.**
*   **Doppler processing is key for clutter rejection.**

---

### Alignment with Course Outcomes

*   **CO1: Illustrate the principles of satellite communication (Knowledge Level: K2)**
    *   While this module is radar-centric, the underlying principles of signal propagation, timing, and frequency shifts are fundamental to both radar and satellite communication systems. Understanding Doppler effects is relevant for satellite Doppler tracking and ranging.
*   **CO2: Design and analysis of satellite link (Knowledge Level: K3)**
    *   Concepts like signal processing and parameter estimation are shared. The ability to analyze the time-domain and frequency-domain characteristics of signals is crucial for both link budget calculations and radar measurements.
*   **CO3: Illustrate Radar Fundamentals like Radar Equation and Applications. (Knowledge Level: K2)**
    *   This topic directly addresses the core measurements of radar systems (range and velocity) and their applications, forming a fundamental part of radar fundamentals.
*   **CO4: Compare various types of Radars and tracking techniques (Knowledge Level: K2)**
    *   Understanding CW, FMCW, and Pulsed Doppler radar inherently involves comparing their capabilities and how they achieve range and Doppler measurements, which is a prerequisite for understanding different radar types and tracking techniques.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### Textbook and Reference Material Integration

*   **Skolnik (2nd Ed., 2017):** Chapters 2, 3, and 11 provide foundational material for pulsed radar, Doppler principles, and CW/FM radar, directly supporting range and Doppler measurement concepts.
*   **Edde (1st Ed., 2004):** Chapters 3 and 4 are particularly relevant for Doppler effects and pulsed radar systems, offering clear explanations of how these measurements are performed.
*   **Pratt & Allnutt (3rd Ed., 2021):** While focused on satellites, the sections on signal modulation, detection, and noise have overarching relevance to signal processing techniques used in radar for parameter estimation.
*   **Ha (2nd Ed., 2017), Pritchard (2nd Ed., 2006), Kinsley & Quegan (1st Ed., 1999):** These resources offer broader perspectives on communication systems and radar principles that complement the specific details of range and Doppler measurement.

---