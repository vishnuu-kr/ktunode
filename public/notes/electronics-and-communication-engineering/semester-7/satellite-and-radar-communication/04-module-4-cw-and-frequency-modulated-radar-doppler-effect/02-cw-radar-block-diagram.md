---
title: "CW Radar – Block Diagram"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff32e"
status: "completed"
scrapedAt: "2026-05-23T18:10:56.415Z"
---
# SATELLITE AND RADAR COMMUNICATION - Module 4: CW and Frequency Modulated Radar: Doppler Effect

## Topic: CW Radar – Block Diagram

**Course Outcomes Addressed:**
*   **CO3:** Illustrate Radar Fundamentals like Radar Equation and Applications. (Knowledge Level: K2)
*   **CO4:** Compare various types of Radars and tracking techniques (Knowledge Level: K2)

---

### 1. Introduction to CW Radar

Continuous Wave (CW) radar is a type of radar system that transmits a continuous radio frequency (RF) signal. Unlike pulsed radar, which transmits short bursts of energy and listens for reflections, CW radar transmits constantly. This continuous transmission simplifies the radar design and offers certain advantages, particularly in applications requiring velocity measurement.

**Key Concept:** The fundamental principle behind CW radar is the **Doppler Effect**, which is the change in frequency of a wave in relation to an observer who is moving relative to the wave source. This frequency shift is directly proportional to the radial velocity of the target.

**Reference:** Skolnik, "Introduction to Radar Systems," Chapter 2 (Principles of Radar) provides a foundational understanding of radar signal transmission and reception, which is crucial for understanding CW radar.

---

### 2. Block Diagram of a CW Radar System

A basic CW radar system consists of the following essential components:

#### 2.1. Transmitter

*   **Function:** Generates the continuous RF signal that is transmitted towards the target.
*   **Key Component:** An oscillator (e.g., a crystal oscillator or a voltage-controlled oscillator (VCO)) that produces a stable, continuous sinusoidal waveform at a specific RF frequency ($f_0$).
*   **Important Point:** The transmitter in a CW radar operates continuously, meaning it is always "on."

#### 2.2. Antenna

*   **Function:** Radiates the transmitted RF signal into space and receives the reflected (echo) signal from the target.
*   **Types:**
    *   **Directional Antenna:** Used to focus the transmitted energy in a specific direction and to improve the reception of echoes from that direction. Examples include parabolic dishes or horn antennas.
    *   **Separate Transmit and Receive Antennas:** Due to the continuous transmission, it is crucial to prevent the transmitted signal from directly coupling to the receiver. This is typically achieved by using two separate antennas with good isolation between them.
*   **Reference:** Pratt & Allnutt, "Satellite Communications," Chapter 5 (Antennas) discusses antenna principles that are applicable to radar as well, particularly regarding beamforming and directivity.

#### 2.3. Mixer (or Demodulator)

*   **Function:** Compares the transmitted signal with the received signal to extract the Doppler frequency shift.
*   **How it works:** The mixer takes two input signals and produces an output signal that contains sum and difference frequencies. In a CW radar, one input is the transmitted signal (reference signal), and the other is the received (echo) signal.
    *   If the target is stationary, the received signal will have the same frequency as the transmitted signal ($f_0$), and the mixer output will be close to zero (or a DC component).
    *   If the target is moving, the received signal will be shifted in frequency by the Doppler frequency ($f_d$). The mixer will then output this Doppler frequency ($f_d$) as the primary component, along with other frequencies that are typically filtered out.
*   **Formula:** $f_d = \frac{2v_r f_0}{c}$
    *   $f_d$: Doppler frequency
    *   $v_r$: Radial velocity of the target
    *   $f_0$: Transmitted carrier frequency
    *   $c$: Speed of light
*   **Important Point:** The mixer is the core component that leverages the Doppler effect in a CW radar.

#### 2.4. Low-Pass Filter (LPF)

*   **Function:** Removes unwanted high-frequency components (like the sum frequency from the mixer) and isolates the Doppler frequency, which contains the velocity information.
*   **Placement:** Typically placed after the mixer.
*   **Output:** The output of the LPF is the Doppler signal, which is a sinusoidal waveform at the Doppler frequency ($f_d$).

#### 2.5. Signal Processor (or Detector)

*   **Function:** Processes the Doppler signal to extract target information, primarily the radial velocity.
*   **Operations:**
    *   **Frequency Measurement:** Measures the frequency of the Doppler signal to determine the target's velocity. This can be done using various techniques like zero-crossing counters, frequency discriminators, or spectrum analyzers.
    *   **Amplitude Measurement:** The amplitude of the Doppler signal is related to the target's radar cross-section (RCS) and the range, but basic CW radar has limitations in determining precise range.
*   **Output:** Provides a measure of the target's velocity.

#### 2.6. Receiver (Amplifier)

*   **Function:** Amplifies the weak received echo signal before it is fed into the mixer.
*   **Type:** Typically a Low Noise Amplifier (LNA) to minimize the introduction of additional noise.
*   **Important Point:** The received signal is usually very weak, necessitating amplification.

---

### 3. Diagram of a Basic CW Radar System

```
                                          +--------------+
                                          |  Transmitter |
                                          | (Oscillator) |
                                          +--------------+
                                                 | (RF Signal $f_0$)
                                                 |
                                                 v
+--------------+        +--------------+        +--------------+
|  Antenna 1   |------->|  Receiver    |------->|     Mixer    |-----> (Doppler Signal $f_d$)
| (Transmit)   |        | (Amplifier)  |        |              |
+--------------+        +--------------+        +--------------+
                                 ^                      |
                                 | (Echo Signal)        |
                                 |                      v
+--------------+        +--------------+        +--------------+
|  Antenna 2   |<-------|     Mixer    |<-------| Low-Pass Filter |
|  (Receive)   |        |              |        |      (LPF)      |
+--------------+        +--------------+        +--------------+
                                                        |
                                                        v
                                                +-----------------+
                                                | Signal Processor|
                                                | (Velocity Calc.)|
                                                +-----------------+
                                                        |
                                                        v
                                                  Target Velocity
```

**Note:** In many simple CW radar implementations, a single antenna with a **circulator** or a **hybrid coupler** is used to separate the transmit and receive paths, providing isolation. However, for clarity of the basic function, the block diagram often depicts separate antennas.

---

### 4. Limitations and Variations of Basic CW Radar

**Limitations of Basic CW Radar:**

*   **Range Ambiguity:** Basic CW radar cannot directly measure the range to a target because there is no time delay measurement possible with a continuous transmission. All echoes return simultaneously.
*   **Clutter:** Stationary objects (ground clutter, buildings) also produce no Doppler shift. However, if they are very close to the radar, their transmitted signal can leak through to the receiver (transmit-to-receive leakage or "breakthrough") and can overwhelm the weak Doppler signals from moving targets. This is a major practical issue.

**Variations to Address Limitations:**

*   **Frequency Modulated Continuous Wave (FMCW) Radar:** This variation overcomes the range limitation by modulating the transmitted frequency. By sweeping the frequency linearly over time, the frequency difference between the transmitted and received signals at any instant is proportional to the range. The Doppler shift can still be measured from the frequency difference between successive sweeps.
    *   **Reference:** Skolnik, "Introduction to Radar Systems," Chapter 2, discusses FMCW radar as a solution for range measurement.
*   **Pulsed-Doppler Radar:** While not strictly CW, pulsed-Doppler radar combines pulsed operation with Doppler processing to achieve both range and velocity measurements.
    *   **Reference:** Edde, "Radar: Principles, Technology, Applications," Chapter 3 (Pulsed Radar Systems) and Chapter 11 (Doppler Radar) provides details on pulsed-Doppler systems.

---

### 5. Applications of CW Radar

CW radar is well-suited for applications where range is not a primary concern or where velocity measurement is the main objective.

*   **Speed Guns:** Police speed enforcement radar uses CW Doppler to measure the speed of vehicles.
*   **Motion Detectors:** Used in security systems, automatic doors, and lighting controls.
*   **Traffic Flow Monitoring:** Measuring the average speed of vehicles in a traffic stream.
*   **Proximity Sensors:** Detecting the movement of objects.
*   **Military Applications:** Some specific military applications like missile guidance systems that rely on relative velocity.
*   **Reference:** Edde, "Radar: Principles, Technology, Applications," Chapter 11, lists various applications of Doppler radar.

---

### 6. Key Concepts and Definitions to Remember

*   **Continuous Wave (CW):** A signal transmitted continuously without interruption.
*   **Doppler Effect:** The change in frequency of a wave due to the relative motion between the source and the observer.
*   **Doppler Frequency ($f_d$):** The frequency shift caused by the Doppler effect.
*   **Radial Velocity ($v_r$):** The component of the target's velocity along the line of sight of the radar.
*   **Mixer:** A non-linear circuit used to combine two signals, producing sum and difference frequencies. In CW radar, it extracts the Doppler frequency.
*   **Transmit-to-Receive Leakage (Breakthrough):** Unwanted signal coupling from the transmitter to the receiver in CW systems, which can mask weak echo signals.
*   **Range Ambiguity:** The inability of a basic CW radar to determine the distance to a target.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the fundamental principle that allows a CW radar to measure the velocity of a target?
**(a)** Time Delay Measurement
**(b)** Amplitude Modulation
**(c)** Doppler Effect
**(d)** Phase Coherence

**Answer:** (c) Doppler Effect

**Question 2:**
In a basic CW radar, what is the primary limitation regarding target detection?
**(a)** Inability to measure velocity.
**(b)** Inability to measure range.
**(c)** Susceptibility to atmospheric interference.
**(d)** Low transmitter power.

**Answer:** (b) Inability to measure range.

**Question 3:**
Describe the role of the mixer in a CW radar system.

**Answer:** The mixer in a CW radar system takes the transmitted reference signal and the received echo signal as inputs. It compares these two signals and produces an output signal whose frequency is the difference between the input frequencies. This difference frequency is the Doppler frequency, which directly relates to the target's radial velocity.

**Question 4:**
Consider a CW radar operating at a carrier frequency of $f_0 = 10$ GHz. If the Doppler frequency measured is $f_d = 1000$ Hz, calculate the radial velocity of the target. (Assume the speed of light $c = 3 \times 10^8$ m/s).

**Answer:**
The Doppler frequency formula is $f_d = \frac{2v_r f_0}{c}$.
Rearranging to solve for $v_r$: $v_r = \frac{f_d \cdot c}{2 \cdot f_0}$

Given:
$f_0 = 10 \text{ GHz} = 10 \times 10^9 \text{ Hz}$
$f_d = 1000 \text{ Hz}$
$c = 3 \times 10^8 \text{ m/s}$

$v_r = \frac{1000 \text{ Hz} \times 3 \times 10^8 \text{ m/s}}{2 \times 10 \times 10^9 \text{ Hz}}$
$v_r = \frac{3 \times 10^{11} \text{ m/s}}{20 \times 10^9}$
$v_r = \frac{3 \times 10^{11}}{2 \times 10^{10}}$
$v_r = 1.5 \times 10^1 \text{ m/s}$
$v_r = 15 \text{ m/s}$

Therefore, the radial velocity of the target is 15 m/s.

---

### 8. Important Points to Remember

*   **CW = Continuous Transmission:** The radar transmits a constant RF signal.
*   **Doppler = Velocity:** The Doppler shift in the received signal is directly proportional to the target's radial velocity.
*   **Mixer is Key:** The mixer is essential for extracting the Doppler frequency.
*   **No Direct Range:** Basic CW radar cannot measure target range without modifications.
*   **Clutter & Breakthrough:** These are significant challenges in practical CW radar systems, especially from stationary objects.
*   **Two Antennas (or equivalent):** Essential for separating the strong transmitted signal from the weak received signal.

---

This concludes the study notes for the CW Radar Block Diagram. Understanding this block diagram is fundamental to appreciating the capabilities and limitations of CW radar systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
