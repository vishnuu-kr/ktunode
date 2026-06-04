---
title: "Radar Waveforms"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 3: Basics of Radar: Introduction"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8ae"
status: "completed"
scrapedAt: "2026-05-23T18:57:23.079Z"
---
# Satellite and Radar Communication

## Module 3: Basics of Radar: Introduction

### Topic: Radar Waveforms

---

**Learning Outcomes:**

*   **LO1: Define radar and its basic principle of operation.**
*   **LO2: Explain the fundamental concept of a radar pulse.**
*   **LO3: Describe different types of radar waveforms and their characteristics.**
*   **LO4: Discuss the factors influencing the choice of radar waveform.**

---

**Course Outcomes Alignment:**

*   **CO3: Illustrate Radar Fundamentals like Radar Equation and Applications. (Knowledge Level: K2)** - Understanding waveforms is fundamental to understanding how radar systems operate and how they are applied.
*   **CO1: Illustrate the principles of satellite communication (Knowledge Level: K2)** - While this module focuses on radar, understanding basic signal transmission principles is common to both satellite and radar communication.

---

### 1. Introduction to Radar

**Definition:**
**Radar** is an acronym for **RAdio Detection And Ranging**. It is a system that uses radio waves to determine the range, angle, or velocity of objects.

**Basic Principle of Operation:**
Radar works by transmitting radio waves (or microwaves) and then detecting the reflected waves (echoes) from objects. By analyzing these echoes, the radar system can deduce information about the target.

**Key Steps:**

1.  **Transmission:** A radar transmitter generates and sends out radio waves in a specific direction.
2.  **Propagation:** These waves travel through space at the speed of light.
3.  **Reflection:** When the waves encounter an object (target), a portion of the energy is reflected back towards the radar.
4.  **Reception:** A radar receiver detects these reflected waves.
5.  **Processing:** The received echoes are processed to extract information about the target.

**Information Extracted:**

*   **Range (Distance):** Determined by measuring the time it takes for the transmitted pulse to travel to the target and return.
*   **Bearing (Direction):** Determined by the direction in which the radar antenna is pointed.
*   **Elevation:** Determined by the vertical angle of the antenna.
*   **Velocity:** Determined by the Doppler shift of the reflected waves.

**Skolnik, Chapter 1:** "Radar is a system that uses electromagnetic waves for detecting the presence, range, bearing, and altitude of objects." This emphasizes the core function of radar.

---

### 2. The Radar Pulse

A common way to transmit radio waves in radar is through short, powerful bursts called **pulses**.

**Pulse Characteristics:**

*   **Pulse Duration ($\tau$ or $T_p$):** The time duration of the transmitted pulse. This is a critical parameter that affects range resolution and maximum unambiguous range.
    *   *Example:* A pulse might last for 1 microsecond ($\mu$s).
*   **Pulse Repetition Interval (PRI) or Pulse Repetition Time ($T_{pri}$):** The time between the start of one transmitted pulse and the start of the next pulse.
    *   *Relationship:* $T_{pri} = 1 / PRF$, where PRF is the Pulse Repetition Frequency.
    *   *Example:* If a pulse is transmitted every 1000 $\mu$s, the PRI is 1000 $\mu$s.
*   **Pulse Repetition Frequency (PRF):** The number of pulses transmitted per second.
    *   *Relationship:* $PRF = 1 / T_{pri}$.
    *   *Example:* If the PRI is 1000 $\mu$s (1 ms), the PRF is 1000 Hz (1 kHz).
*   **Pulse Bandwidth (B):** The range of frequencies contained within the pulse. A shorter pulse duration generally requires a wider bandwidth for efficient transmission and reception.
*   **Peak Power ($P_p$):** The maximum power output of the transmitter during the pulse.
*   **Duty Cycle (d):** The ratio of the pulse duration to the pulse repetition interval.
    *   *Formula:* $d = \tau / T_{pri}$
    *   *Significance:* Represents the fraction of time the radar is transmitting. A low duty cycle is typical for pulsed radars to manage power.
*   **Average Power ($P_{avg}$):** The average power delivered to the antenna.
    *   *Formula:* $P_{avg} = P_p \times d$

**Relationship to Range Resolution:**
**Range resolution** is the ability of a radar to distinguish between two closely spaced targets along the same radial direction. It is fundamentally limited by the pulse duration.

*   **Formula for Range Resolution ($\Delta R$):** $\Delta R = c \tau / 2$, where $c$ is the speed of light.
    *   *Explanation:* For two targets to be resolved, the time difference between their echoes must be at least equal to the pulse duration. The factor of 2 accounts for the round trip.
    *   *Example:* If $\tau = 1 \mu s$, $\Delta R = (3 \times 10^8 \, m/s \times 1 \times 10^{-6} \, s) / 2 = 150 \, m$. This means targets closer than 150 meters apart might not be distinguishable.

**Relationship to Maximum Unambiguous Range ($R_{max}$):**
The maximum range at which a target can be detected without ambiguity in range is determined by the Pulse Repetition Interval (PRI).

*   **Formula for Maximum Unambiguous Range ($R_{max}$):** $R_{max} = c T_{pri} / 2$
    *   *Explanation:* If the time for an echo to return from a target is longer than the PRI, the radar might mistake the echo for that of a subsequent pulse, leading to an ambiguous range measurement.
    *   *Example:* If $T_{pri} = 1000 \mu s$ (1 ms), $R_{max} = (3 \times 10^8 \, m/s \times 1 \times 10^{-3} \, s) / 2 = 150 \, km$.

**Pratt & Allnutt, Chapter 11 (Radar Communications):** While this textbook primarily focuses on satellite communications, it often provides context for electromagnetic wave principles that are shared across communication systems. The fundamental idea of transmitting and receiving signals, and the concepts of pulse duration and repetition frequency are relevant.

---

### 3. Types of Radar Waveforms

Radar waveforms are the characteristic patterns of the transmitted signal. The choice of waveform significantly impacts the radar's performance in terms of range, resolution, velocity measurement, and clutter rejection.

**3.1. Simple Pulsed Waveforms:**

*   **Characteristics:** These are the most basic waveforms, consisting of short, high-power pulses.
*   **Pros:**
    *   Simple transmitter design.
    *   Good range resolution (depends on $\tau$).
    *   Good for detecting targets at moderate ranges.
*   **Cons:**
    *   Limited average power for a given peak power (low duty cycle).
    *   Susceptible to range ambiguity if PRF is too high.
    *   Poor velocity resolution for a single pulse (requires Doppler analysis over multiple pulses).
*   **Applications:** Air surveillance, weather radar, air traffic control.

**3.2. Continuous Wave (CW) Radar:**

*   **Characteristics:** Transmits a continuous, unmodulated sinusoidal wave.
*   **Pros:**
    *   Infinite theoretical average power (limited by receiver dynamic range).
    *   Excellent for Doppler velocity measurement because the frequency shift is constant.
*   **Cons:**
    *   Cannot measure range directly without modulation because there's no time reference for echoes.
    *   Suffers from "clutter" (strong reflections from stationary objects) which can mask moving targets.
*   **Applications:** Speed guns, proximity fuzes, missile guidance (often in conjunction with other techniques).

**3.3. Frequency Modulated Continuous Wave (FMCW) Radar:**

*   **Characteristics:** Transmits a continuous wave whose frequency is varied linearly over time (often a sawtooth or triangular waveform).
*   **How it works:** The frequency difference between the transmitted signal and the received echo is proportional to the range.
    *   If the frequency is increasing (up-chirp), the received echo will have a lower frequency than the transmitted signal at any given moment.
    *   If the frequency is decreasing (down-chirp), the received echo will have a higher frequency.
    *   The beat frequency ($f_b$) is the difference between the transmitted and received frequencies. For a linear chirp, $f_b$ is proportional to the range. $f_b = (Sweep\_Rate \times 2R) / c$, where Sweep\_Rate is the rate of frequency change.
*   **Pros:**
    *   Can measure both range and velocity simultaneously.
    *   Can achieve good range resolution with relatively low peak power and simpler transmitters than pulsed radars (wide bandwidth is achieved by sweeping frequency).
    *   No range ambiguity issues inherent to pulsed radar.
*   **Cons:**
    *   Requires careful receiver design to handle the beat frequency.
    *   Can be susceptible to range/velocity coupling issues with complex target scenarios.
*   **Applications:** Automotive radar (adaptive cruise control, collision avoidance), altimeters, short-range surveillance.

**Edde, Chapter 2 (Radar Waveforms):** Edde provides a detailed explanation of various waveforms, including CW, FMCW, and pulsed Doppler, emphasizing their generation and signal processing aspects.

**3.4. Pulse Compression Waveforms (Modulated Pulses):**

These waveforms are designed to achieve the range resolution of a short pulse while transmitting a longer pulse, thereby increasing the average power and improving the signal-to-noise ratio (SNR).

*   **Concept:** The transmitted pulse is modulated (e.g., frequency or phase) internally. The received echo is then processed to compress this long, modulated pulse into a very narrow, high-power pulse. This compression is achieved through matched filtering.

*   **Types of Pulse Compression:**

    *   **Linear Frequency Modulation (LFM) or Chirp:**
        *   **Characteristics:** The frequency of the pulse varies linearly over its duration.
        *   **Pulse Compression:** Achieved by passing the received echo through a filter whose delay is a function of frequency (e.g., a dispersive delay line or a matched filter).
        *   **Compression Ratio:** The ratio of the transmitted pulse duration ($\tau$) to the compressed pulse duration ($\tau_c$). A higher compression ratio implies better range resolution and SNR improvement.
        *   **Range Resolution:** Determined by the compressed pulse width ($\tau_c$), so $\Delta R = c \tau_c / 2$.
        *   **Pros:** Relatively easy to implement, good sidelobe performance.
        *   **Cons:** Can be susceptible to Doppler shifts, which can degrade performance.
        *   **Applications:** Many modern surveillance radars, weather radars.

    *   **Phase Coding (Binary Phase Coding - BPC):**
        *   **Characteristics:** The pulse is divided into sub-pulses, and the phase of each sub-pulse is switched between 0 and 180 degrees according to a specific code (e.g., Barker codes, Frank codes).
        *   **Pulse Compression:** Achieved using a matched filter that correlates the received signal with the transmitted code.
        *   **Barker Codes:** Have the property that their autocorrelation function has only one peak and very low sidelobes, providing good resolution and sidelobe suppression.
        *   **Pros:** Less sensitive to Doppler shifts than LFM, good sidelobe performance with appropriate codes.
        *   **Cons:** More complex signal processing, can be more susceptible to jamming.
        *   **Applications:** Target detection in clutter, some military radars.

**Kinsley & Quegan, Chapter 3 (Radar Waveforms):** This reference book provides excellent coverage of pulse compression techniques, including detailed explanations of LFM and various phase-coding schemes and their associated signal processing.

**3.5. Pulse Doppler Radar:**

*   **Characteristics:** Combines pulsed radar operation with the measurement of Doppler frequency shifts. It typically uses a high PRF to capture sufficient Doppler information from moving targets.
*   **How it works:** Multiple pulses are transmitted within a coherent processing interval (CPI). The Doppler frequency shift of the target's echo is measured by analyzing the phase changes of the echoes from pulse to pulse.
*   **Pros:**
    *   Excellent at distinguishing moving targets from stationary clutter (clutter rejection).
    *   Can measure target velocity directly.
*   **Cons:**
    *   High PRF can lead to range ambiguity (low $R_{max}$).
    *   Low PRF can lead to velocity ambiguity (targets moving too fast appear to be moving slower).
    *   Requires coherent transmission and reception.
*   **Applications:** Air traffic control, weather radar (measuring wind speed), military surveillance (detecting aircraft and missiles).

**Skolnik, Chapter 4 (Doppler Radar):** Skolnik offers a comprehensive treatment of Doppler radar principles, including the effects of PRF on range and velocity ambiguities and the techniques for Doppler processing.

---

### 4. Factors Influencing the Choice of Radar Waveform

The selection of a radar waveform is a critical design decision driven by the radar's intended application and operating environment.

*   **Target Characteristics:**
    *   **Size and Reflectivity:** Larger, more reflective targets require less complex waveforms.
    *   **Velocity:** High-velocity targets might necessitate Doppler capabilities.
    *   **Number of Targets:** Multiple targets close together might require good range resolution.

*   **Range Requirements:**
    *   **Maximum Range:** Dictates the PRI (for pulsed radars) or transmission power.
    *   **Range Resolution:** Dictates the pulse duration ($\tau$) or the bandwidth of a modulated pulse.

*   **Velocity Measurement Requirements:**
    *   **Need for Velocity:** CW, FMCW, and Pulse Doppler radars are suited for velocity measurement.
    *   **Velocity Ambiguity Tolerance:** High PRF Pulse Doppler can suffer from velocity ambiguity.

*   **Clutter Environment:**
    *   **Ground Clutter:** Stationary echoes from the ground can mask moving targets. Pulse Doppler and pulse compression with good sidelobe control are effective.
    *   **Weather Clutter:** Rain, snow, and hail can significantly attenuate signals and create false targets. Doppler processing can help distinguish weather echoes from aircraft.

*   **Jamming Environment:**
    *   **Electronic Countermeasures (ECM):** Sophisticated waveforms (e.g., complex frequency hopping, LPI - Low Probability of Intercept waveforms) are needed to resist jamming.

*   **Transmitter and Receiver Capabilities:**
    *   **Peak Power:** Limited by tube technology (e.g., magnetrons, klystrons) or solid-state devices.
    *   **Average Power:** Affects the overall detectability and range.
    *   **Bandwidth:** Limits the achievable range resolution for pulsed radars and the chirp rate for FMCW.
    *   **Signal Processing Complexity:** More complex waveforms require more powerful and sophisticated signal processing hardware.

*   **Cost and Complexity:**
    *   Simpler waveforms (like basic pulses) are cheaper to implement than advanced pulse compression or complex Doppler processing systems.

**Pratt & Allnutt (general principles):** While focusing on satellite links, the principles of signal-to-noise ratio (SNR), bandwidth, and power limitations are universally applicable and influence waveform choices in any communication system, including radar.

---

### Important Points to Remember:

*   **Trade-offs:** Radar waveform design involves fundamental trade-offs, primarily between range resolution, maximum unambiguous range, and average power.
*   **Pulse Duration ($\tau$):** Directly affects range resolution ($\Delta R \propto \tau$). Shorter pulse = better resolution.
*   **PRI / PRF:** Directly affects maximum unambiguous range ($R_{max} \propto T_{pri}$ or $R_{max} \propto 1/PRF$). Longer PRI = higher $R_{max}$.
*   **Pulse Compression:** Allows achieving the range resolution of a short pulse with the average power of a longer pulse, improving SNR.
*   **Doppler Effect:** Crucial for velocity measurement and distinguishing moving targets from stationary clutter.
*   **FMCW:** Offers a way to measure range without the range ambiguity issues of pulsed radar, and can measure velocity simultaneously.
*   **Waveform Choice is Application-Specific:** The "best" waveform depends entirely on what the radar needs to do.

---

### Practice Questions and Exercises

**1. Multiple Choice:**

Which radar waveform is best suited for measuring the velocity of a target while also providing range information, and is often used in automotive applications?
a) Simple Pulsed Radar
b) Continuous Wave (CW) Radar
c) Frequency Modulated Continuous Wave (FMCW) Radar
d) Pulse Doppler Radar

**Answer:** c) Frequency Modulated Continuous Wave (FMCW) Radar

**2. Short Answer:**

a) What is the primary limitation of a simple pulsed radar regarding range resolution?
b) How does the Pulse Repetition Frequency (PRF) affect the maximum unambiguous range of a pulsed radar?

**Answers:**
a) The primary limitation of a simple pulsed radar regarding range resolution is the pulse duration ($\tau$). The range resolution is directly proportional to the pulse duration: $\Delta R = c \tau / 2$.
b) The Pulse Repetition Frequency (PRF) is inversely proportional to the maximum unambiguous range. A higher PRF (shorter PRI) leads to a lower maximum unambiguous range, and vice versa. The relationship is $R_{max} = c T_{pri} / 2 = c / (2 \times PRF)$.

**3. Problem Solving:**

A radar system transmits pulses of 1 $\mu$s duration at a rate of 1000 pulses per second.

a) Calculate the range resolution of this radar.
b) Calculate the maximum unambiguous range of this radar.
c) If the radar used pulse compression to achieve a compressed pulse width of 0.05 $\mu$s, what would be the new range resolution?

**Solutions:**

Given:
*   Pulse duration ($\tau$) = 1 $\mu$s = $1 \times 10^{-6}$ s
*   PRF = 1000 pulses/s
*   Speed of light (c) $\approx 3 \times 10^8$ m/s

a) **Range Resolution ($\Delta R$):**
    $\Delta R = c \tau / 2$
    $\Delta R = (3 \times 10^8 \, m/s \times 1 \times 10^{-6} \, s) / 2$
    $\Delta R = 300 \, m / 2$
    $\Delta R = 150 \, m$

b) **Maximum Unambiguous Range ($R_{max}$):**
    First, find the Pulse Repetition Interval (PRI) or Pulse Repetition Time ($T_{pri}$).
    $T_{pri} = 1 / PRF = 1 / 1000 \, s = 0.001 \, s = 1000 \, \mu s$
    $R_{max} = c T_{pri} / 2$
    $R_{max} = (3 \times 10^8 \, m/s \times 0.001 \, s) / 2$
    $R_{max} = 300,000 \, m / 2$
    $R_{max} = 150,000 \, m = 150 \, km$

c) **New Range Resolution with Pulse Compression:**
    Compressed pulse width ($\tau_c$) = 0.05 $\mu$s = $0.05 \times 10^{-6}$ s
    $\Delta R_{compressed} = c \tau_c / 2$
    $\Delta R_{compressed} = (3 \times 10^8 \, m/s \times 0.05 \times 10^{-6} \, s) / 2$
    $\Delta R_{compressed} = 15 \, m / 2$
    $\Delta R_{compressed} = 7.5 \, m$

**4. Discussion Question:**

Compare and contrast the advantages and disadvantages of Linear Frequency Modulated (LFM) waveforms and Binary Phase Coded (BPC) waveforms for pulse compression in radar systems. Consider factors like implementation complexity, Doppler sensitivity, and sidelobe performance.

---
This concludes Module 3, Topic: Radar Waveforms. The next module will build upon these fundamental waveform concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
