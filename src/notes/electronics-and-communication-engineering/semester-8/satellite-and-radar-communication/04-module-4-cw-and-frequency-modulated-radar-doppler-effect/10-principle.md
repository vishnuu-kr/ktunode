---
title: "Principle"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8c0"
status: "completed"
scrapedAt: "2026-05-23T20:03:50.929Z"
---
# Module 4: CW and Frequency Modulated Radar: Doppler Effect - Principle

## Introduction to Radar Systems and Doppler Effect

This module delves into the fundamental principles of Continuous Wave (CW) and Frequency Modulated (FM) radar, with a strong emphasis on the Doppler effect. Understanding these concepts is crucial for comprehending how radar systems detect and measure the velocity of targets.

**Relevant Course Outcomes:**
*   **CO3:** Illustrate Radar Fundamentals like Radar Equation and Applications. (Knowledge Level: K2)
*   **CO4:** Compare various types of Radars and tracking techniques (Knowledge Level: K2)

**Learning Outcomes:**
*   Explain the basic principle of radar.
*   Understand the Doppler effect and its application in radar.
*   Describe the working principle of Continuous Wave (CW) radar.
*   Explain the limitations of CW radar and the methods to overcome them.
*   Describe the working principle of Frequency Modulated (FM) radar.
*   Analyze the range and velocity measurement capabilities of FM radar.

---

### 1. Basic Principle of Radar

Radar, an acronym for **R**adio **D**etection **a**nd **R**anging, is a system that uses radio waves to detect the presence, distance, direction, and speed of objects.

*   **Core Principle:** Radar transmits electromagnetic waves (radio waves or microwaves) into space and listens for reflections from objects.
*   **Key Components:**
    *   **Transmitter:** Generates and amplifies the radio frequency (RF) pulses or continuous waves.
    *   **Antenna:** Transmits the RF energy and receives the reflected signals.
    *   **Receiver:** Detects and amplifies the weak reflected signals.
    *   **Signal Processor:** Analyzes the received signals to extract information about the target.
    *   **Display:** Presents the processed information to the operator (e.g., on a screen).

*   **Basic Operation Cycle:**
    1.  **Transmission:** The radar transmits a pulse of electromagnetic energy.
    2.  **Propagation:** The energy travels outwards at the speed of light.
    3.  **Reflection:** The energy strikes a target and is reflected back towards the radar.
    4.  **Reception:** The radar antenna receives the reflected energy.
    5.  **Processing:** The received signal is processed to determine target characteristics.

**Example:** Imagine shouting in a large empty hall. You hear an echo of your voice after a short delay. Radar works on a similar principle, but with radio waves and much greater distances.

**Reference:** Skolnik, M. I. (2017). *Introduction to Radar Systems*. (Chapter 1: Introduction)

---

### 2. The Doppler Effect and its Application in Radar

The Doppler effect is the change in frequency of a wave in relation to an observer who is moving relative to the wave source.

*   **Definition:** When a source of waves (like a radar transmitter) and an observer (the target reflecting the waves) are moving relative to each other, the observed frequency of the waves will be different from the transmitted frequency.
*   **Mechanism:**
    *   If the target is moving towards the radar, the reflected waves are compressed, resulting in a **higher** observed frequency.
    *   If the target is moving away from the radar, the reflected waves are stretched, resulting in a **lower** observed frequency.
*   **Doppler Shift ($f_d$):** The difference between the transmitted frequency ($f_t$) and the received frequency ($f_r$).
    *   $f_d = f_r - f_t$
*   **Formula for Doppler Shift:**
    *   For radial velocity ($v_r$) of the target, the Doppler shift is given by:
        $$f_d = \frac{2 v_r f_t}{c}$$
        where:
        *   $f_d$ is the Doppler frequency shift.
        *   $v_r$ is the radial velocity of the target (positive if moving away, negative if moving towards).
        *   $f_t$ is the transmitted frequency.
        *   $c$ is the speed of light.

    *   The factor of 2 arises because the target undergoes two Doppler shifts: one when moving away from the transmitter and one when moving towards the receiver.

**Application in Radar:**

The Doppler effect is fundamental to Doppler radar, allowing it to measure the **radial velocity** of targets. By comparing the frequency of the transmitted signal with the frequency of the received signal, the radar can calculate how fast an object is moving towards or away from it.

**Example:** A police radar gun uses the Doppler effect to measure the speed of cars. It transmits a known frequency. The reflected waves from a moving car will have a slightly different frequency. The radar gun analyzes this frequency difference to calculate the car's speed.

**Important Point:** Doppler radar primarily measures *radial* velocity (the component of velocity directly towards or away from the radar). It cannot directly measure tangential velocity (velocity perpendicular to the line of sight).

**Reference:** Skolnik, M. I. (2017). *Introduction to Radar Systems*. (Chapter 2: Doppler Radar)

---

### 3. Continuous Wave (CW) Radar

Continuous Wave (CW) radar transmits a continuous, unmodulated sinusoidal signal.

*   **Working Principle:**
    1.  A continuous, constant-frequency RF signal is transmitted.
    2.  Reflected signals from targets are received by a separate antenna or the same antenna using a duplexer.
    3.  The received signal is mixed with a sample of the transmitted signal.
    4.  If the target is stationary, the transmitted and received signals will have the same frequency, and the mixer output will be DC.
    5.  If the target is moving, the received signal will have a different frequency due to the Doppler shift. The mixer output will be an AC signal at the Doppler frequency ($f_d$).
    6.  This Doppler frequency is then processed to determine the target's radial velocity.

*   **Block Diagram (Simplified):**
    ```
    Transmitter (CW Signal) --> Antenna 1 --> Target --> Antenna 2 --> Receiver --> Mixer --> Doppler Filter --> Velocity Output
                                                                ^
                                                                |
                                                     Transmitted Signal Sample
    ```

*   **Advantages:**
    *   **High Average Power:** Transmits continuously, allowing for high average power, which improves detection range and sensitivity.
    *   **Simple Design:** Relatively simple transmitter design.
    *   **Good Velocity Measurement:** Excellent for measuring target velocity accurately.

*   **Disadvantages:**
    *   **Inability to Measure Range:** Since the signal is continuous, there's no timing reference to determine the time of flight, and thus the range of the target. This is the **major limitation**.
    *   **Transmitter-to-Receiver Leakage:** Strong leakage of the transmitted signal into the receiver can mask weak reflected signals from targets, especially stationary ones.

**Example:** CW Doppler radars are often used in applications where velocity measurement is the primary goal and range is not critical, such as speed guns, meteorological radars (for wind speed), and some proximity fuses.

**Reference:** Skolnik, M. I. (2017). *Introduction to Radar Systems*. (Chapter 2: Doppler Radar - CW Radar)
Edde, B. (2004). *Radar: Principles, Technology, Applications*. (Chapter 8: CW Radar)

---

### 4. Methods to Overcome Limitations of CW Radar

The primary limitation of CW radar is its inability to measure range. Two common techniques are used to overcome this:

#### a) Pulsed CW Radar

While standard CW radar transmits continuously, a modification is to transmit short pulses of CW energy.

*   **Principle:**
    1.  A short, high-power pulse of CW signal is transmitted.
    2.  The time delay between transmission and reception of the pulse is used to calculate the range, similar to conventional pulsed radar.
    3.  The Doppler shift within the pulse is used to measure velocity.

*   **Challenge:** The transmitted pulse can still leak into the receiver, causing interference.

#### b) Frequency Modulated Continuous Wave (FMCW) Radar

This is the primary method to achieve both range and velocity measurement with a continuous wave transmission. This will be discussed in the next section.

---

### 5. Frequency Modulated Continuous Wave (FMCW) Radar

FMCW radar transmits a continuous wave whose frequency is varied linearly over time.

*   **Working Principle:**
    1.  The radar transmits a continuous signal whose frequency is swept linearly upwards (or downwards) over a period of time called the **sweep time** ($T_s$). The rate of frequency change is the **sweep rate**.
    2.  The transmitted signal's frequency ($f_t$) at time $t$ can be represented as: $f_t(t) = f_0 + \alpha t$, where $f_0$ is the starting frequency and $\alpha$ is the sweep rate.
    3.  The reflected signal from a target at range $R$ will arrive at the receiver with a time delay $\tau = \frac{2R}{c}$.
    4.  During this time delay, the transmitted frequency has changed. Therefore, the received signal's frequency ($f_r$) will be different from the transmitted signal's frequency at the moment of reception.
    5.  The difference in frequency between the transmitted signal and the received signal at any given moment is called the **beat frequency** ($f_b$).
    6.  For an FMCW radar, the beat frequency is directly proportional to the range of the target.
        $$f_b = \frac{2R}{c} \times \text{Sweep Rate}$$
        If the sweep rate is constant ($S$), then $f_b = \frac{2RS}{c}$.
    7.  **Range Measurement:** By measuring the beat frequency ($f_b$), the radar can calculate the range ($R$) of the target.
    8.  **Velocity Measurement:** If the target is moving with a radial velocity $v_r$, the Doppler shift ($f_d$) will also be present. This Doppler shift adds to or subtracts from the beat frequency.
        *   During an upward frequency sweep, the beat frequency will be $f_b + f_d$ if the target is moving towards the radar, and $f_b - f_d$ if moving away.
        *   During a downward frequency sweep (if employed), the beat frequency would be $f_b - f_d$ for a target moving towards, and $f_b + f_d$ for a target moving away.
    9.  **Simultaneous Range and Velocity:** To resolve both range and velocity, FMCW radars typically use a triangular or sawtooth sweep pattern.
        *   **Sawtooth Sweep:** One sweep is up, then it immediately starts another up sweep. This allows range measurement but complicates velocity measurement due to the same sweep direction.
        *   **Triangular Sweep:** The frequency sweeps up, then sweeps down at the same rate. By comparing the beat frequencies during the up and down sweeps, both range and velocity can be unambiguously determined.
            *   During up-sweep: $f_{b\_up} = f_b + f_d$ (for approaching target) or $f_b - f_d$ (for receding target).
            *   During down-sweep: $f_{b\_down} = f_b - f_d$ (for approaching target) or $f_b + f_d$ (for receding target).
            *   Range ($R$) can be found from $(f_{b\_up} + f_{b\_down})/2$.
            *   Velocity ($v_r$) can be found from $(f_{b\_up} - f_{b\_down})/2$.

**Example:** Automotive radar systems for adaptive cruise control and collision avoidance use FMCW principles to detect the range and relative speed of other vehicles.

**Reference:** Skolnik, M. I. (2017). *Introduction to Radar Systems*. (Chapter 2: Doppler Radar - FMCW Radar)
Kinsley, S., & Quegan, S. (1999). *Understanding Radar Systems*. (Chapter 5: FMCW Radar)

---

### 6. Range and Velocity Measurement Capabilities of FMCW Radar

*   **Range Measurement:**
    *   The maximum range ($R_{max}$) is determined by the sweep bandwidth ($\Delta f$) and the sweep rate ($S$).
    *   $R_{max} = \frac{c \Delta f}{2S}$
    *   Higher sweep bandwidth allows for better range resolution (ability to distinguish between two closely spaced targets).
    *   A longer sweep time ($T_s$) is needed for larger bandwidths.

*   **Velocity Measurement:**
    *   The maximum unambiguous velocity ($v_{r\_max}$) is determined by the sweep period ($T_s$) or the period of the triangular sweep.
    *   For a triangular sweep with period $T$, the maximum unambiguous velocity is approximately $v_{r\_max} \approx \frac{c}{4f_t T}$.
    *   For a given transmitted frequency, a shorter sweep period leads to a higher maximum unambiguous velocity.

*   **Range-Velocity Ambiguity:** In some FMCW radar configurations, there can be ambiguity in simultaneously measuring range and velocity if the sweep parameters are not carefully chosen. Triangular sweeps are designed to mitigate this.

**Important Points to Remember:**

*   **Doppler Effect:** The cornerstone of velocity measurement in Doppler radars.
*   **CW Radar:** Excellent for velocity, but cannot measure range due to continuous transmission.
*   **FMCW Radar:** Achieves both range and velocity measurement by sweeping the transmitted frequency.
*   **Beat Frequency ($f_b$):** Directly proportional to range in FMCW radar.
*   **Triangular Sweep:** Essential for FMCW radars to resolve both range and velocity unambiguously.
*   **Radial Velocity:** Doppler radar measures only the component of velocity along the line of sight.

---

### Practice Questions and Exercises

**Question 1:**
What is the fundamental principle behind radar operation?
(a) Using sound waves to detect objects.
(b) Using light waves to detect objects.
(c) Using radio waves to detect objects.
(d) Using magnetic fields to detect objects.

**Answer:** (c) Using radio waves to detect objects.

**Question 2:**
A radar transmits at a frequency of 10 GHz. A target is moving towards the radar at a radial velocity of 100 m/s. What is the Doppler frequency shift? (Speed of light $c = 3 \times 10^8$ m/s).
(a) 666.7 Hz
(b) 1333.3 Hz
(c) 333.3 Hz
(d) 6667 Hz

**Answer:**
The Doppler shift formula is $f_d = \frac{2 v_r f_t}{c}$.
Given:
$v_r = -100$ m/s (negative as it's moving towards the radar)
$f_t = 10 \text{ GHz} = 10 \times 10^9 \text{ Hz}$
$c = 3 \times 10^8 \text{ m/s}$

$f_d = \frac{2 \times (-100 \text{ m/s}) \times (10 \times 10^9 \text{ Hz})}{3 \times 10^8 \text{ m/s}}$
$f_d = \frac{-200 \times 10 \times 10^9}{3 \times 10^8} \text{ Hz}$
$f_d = \frac{-2000 \times 10^9}{3 \times 10^8} \text{ Hz}$
$f_d = \frac{-2 \times 10^{12}}{3 \times 10^8} \text{ Hz}$
$f_d = -\frac{20}{3} \times 10^4 \text{ Hz}$
$f_d \approx -6666.67 \text{ Hz}$

The magnitude of the Doppler shift is approximately 6666.7 Hz.
The question asks for the Doppler frequency shift (magnitude).
Looking at the options, it seems the calculation in the options might have used a slightly different convention or rounding. Let's re-evaluate the formula and options.

If we consider the magnitude and ignore the sign for frequency shift value:
$|f_d| = \frac{2 |v_r| f_t}{c}$
$|f_d| = \frac{2 \times 100 \times 10 \times 10^9}{3 \times 10^8} = \frac{2000 \times 10^9}{3 \times 10^8} = \frac{2 \times 10^{12}}{3 \times 10^8} = \frac{20}{3} \times 10^4 = 6666.67 \text{ Hz}$.

There might be a typo in the options or the question's expected calculation. Let's assume one of the options is correct and work backwards or check common mistakes.

If the velocity was 100 km/h, it would be $100 \times \frac{1000}{3600} \approx 27.78$ m/s.
If velocity was 100 mph, it would be $100 \times 1.609 \approx 160.9$ m/s.

Let's re-check the math for the given values.
$f_d = \frac{2 \times 100 \times 10 \times 10^9}{3 \times 10^8} = \frac{2000 \times 10^9}{3 \times 10^8} = \frac{2 \times 10^{12}}{3 \times 10^8} = \frac{20}{3} \times 10^4 = 6666.67 \text{ Hz}$.

Let's consider if the question intended 10 MHz instead of 10 GHz.
If $f_t = 10 \text{ MHz} = 10 \times 10^6 \text{ Hz}$:
$f_d = \frac{2 \times 100 \times 10 \times 10^6}{3 \times 10^8} = \frac{2000 \times 10^6}{3 \times 10^8} = \frac{2 \times 10^9}{3 \times 10^8} = \frac{20}{3} \times 10 = \frac{200}{3} \approx 66.67 \text{ Hz}$. Still not matching.

Let's consider if the velocity was 10 m/s instead of 100 m/s.
If $v_r = 10 \text{ m/s}$:
$f_d = \frac{2 \times 10 \times 10 \times 10^9}{3 \times 10^8} = \frac{200 \times 10^9}{3 \times 10^8} = \frac{2 \times 10^{11}}{3 \times 10^8} = \frac{200}{3} \times 10^3 = 666.67 \text{ Hz}$.

**Therefore, assuming the velocity was intended to be 10 m/s for the options to be plausible, the answer would be (a).**
*Given the context, it's likely that either the velocity or the options provided have a discrepancy. For the purpose of demonstrating the calculation, if $v_r=10$ m/s, then (a) is the correct answer.*

**Question 3:**
What is the primary disadvantage of Continuous Wave (CW) radar?
(a) It cannot measure target velocity accurately.
(b) It requires very low transmitted power.
(c) It cannot measure target range.
(d) It is highly susceptible to atmospheric interference.

**Answer:** (c) It cannot measure target range.

**Question 4:**
In an FMCW radar with a triangular sweep pattern, how is the target's radial velocity determined?
(a) By the beat frequency during the upward sweep.
(b) By the difference between beat frequencies during upward and downward sweeps.
(c) By the average beat frequency over the entire sweep period.
(d) By the transmitted frequency itself.

**Answer:** (b) By the difference between beat frequencies during upward and downward sweeps.

**Question 5:**
Explain the limitation of CW radar and how FMCW radar overcomes it.

**Answer:**
The primary limitation of CW radar is its inability to measure the range of a target. Since it transmits a continuous, unmodulated signal, there is no timing reference to determine the time it takes for the signal to travel to the target and back. This prevents the calculation of the distance.

FMCW radar overcomes this limitation by modulating the frequency of the transmitted continuous wave. Typically, the frequency is swept linearly over a specific bandwidth. The reflected signal from a target will arrive at the receiver at a time delay corresponding to the target's range. During this time delay, the transmitted frequency will have changed. The difference between the instantaneous transmitted frequency and the received frequency (the beat frequency) is directly proportional to the target's range. By measuring this beat frequency, the radar can accurately determine the target's range.

---
This concludes Module 4, Topic: Principle.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
