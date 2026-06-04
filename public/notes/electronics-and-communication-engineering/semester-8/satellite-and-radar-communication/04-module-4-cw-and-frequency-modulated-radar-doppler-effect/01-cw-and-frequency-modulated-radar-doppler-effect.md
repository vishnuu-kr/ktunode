---
title: "CW and Frequency Modulated Radar: Doppler Effect"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8b7"
status: "completed"
scrapedAt: "2026-05-23T19:15:14.451Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 4: CW and Frequency Modulated Radar: Doppler Effect

### Topic: CW and Frequency Modulated Radar: Doppler Effect

---

**Course Outcomes Addressed:**

*   **CO3:** Illustrate Radar Fundamentals like Radar Equation and Applications. (Knowledge Level: K2)
*   **CO4:** Compare various types of Radars and tracking techniques. (Knowledge Level: K2)

**Learning Outcomes:**

*   Understand the principle of Continuous Wave (CW) radar.
*   Understand the principle of Frequency Modulated (FM) radar.
*   Explain the Doppler effect and its application in radar systems.
*   Analyze the performance of CW and FM radars in the presence of clutter.
*   Understand the concept of range resolution and velocity resolution for CW and FM radars.

---

### 1. Introduction to Radar Systems

*   **Radar (Radio Detection and Ranging):** A system that uses radio waves to determine the range, angle, or velocity of objects.
*   **Basic Radar Operation:**
    1.  A transmitter generates radio waves.
    2.  These waves are focused into a beam by an antenna.
    3.  The beam is directed towards the target.
    4.  A portion of the radio wave energy is reflected by the target back towards the radar.
    5.  A receiver detects these reflected waves (echoes).
    6.  Processing the received signals provides information about the target.
*   **Key Radar Parameters:**
    *   **Range:** Distance to the target.
    *   **Azimuth/Elevation:** Angular position of the target.
    *   **Velocity:** Speed of the target.
    *   **Size/Shape:** Characteristics of the target from its reflected signal.

*(Reference: Skolnik, "Introduction to Radar Systems," Chapter 1)*

---

### 2. Continuous Wave (CW) Radar

#### 2.1 Principle of Operation

*   **Concept:** A CW radar transmits a continuous beam of radio waves and simultaneously receives the reflected signals.
*   **Simplex Operation:** Due to the need for simultaneous transmission and reception, CW radars cannot use a single antenna for both unless specifically designed to overcome the self-interference.
*   **Transmitter and Receiver Separation:**
    *   **Separate Antennas:** The most common method is to use two directional antennas separated by a sufficient distance. One antenna transmits, and the other receives. The separation minimizes the leakage of the transmitted signal into the receiver.
    *   **Single Antenna with Duplexer:** While a standard duplexer (used in pulsed radar) cannot handle the continuous transmit and receive signals simultaneously, advanced techniques like circulators or specialized RF switches can be used, but they are complex and often have leakage issues.
*   **Advantages of CW Radar:**
    *   **No Range Measurement:** A pure CW radar transmits continuously, so there's no time reference to measure the round-trip delay and thus the range. It primarily measures velocity.
    *   **High Average Power:** Transmitting continuously allows for high average transmitted power, leading to good detection range for targets with sufficient radar cross-section.
    *   **Simplicity:** Relatively simpler design compared to pulsed radars.
*   **Disadvantages of CW Radar:**
    *   **No Range Measurement Capability (in pure form):** Cannot determine the range of a target.
    *   **Transmitter Leakage and Clutter:** Strong transmitted signal can leak into the receiver, masking weak target echoes. Ground clutter and other stationary objects reflect strongly and can overwhelm the receiver.

*(Reference: Skolnik, "Introduction to Radar Systems," Chapter 2)*
*(Reference: Edde, "Radar: Principles, Technology, Applications," Chapter 2)*

#### 2.2 Application: Velocity Measurement

*   The primary application of CW radar is measuring the velocity of targets. This is achieved through the **Doppler effect**.

---

### 3. The Doppler Effect

#### 3.1 Definition and Principle

*   **Doppler Effect:** The apparent change in frequency of a wave in relation to an observer who is moving relative to the wave source.
*   **In Radar:** When a radar wave of frequency $f_0$ is reflected by a target moving with a radial velocity $v_r$, the frequency of the reflected wave changes. This change in frequency, called the Doppler frequency ($f_d$), is directly proportional to the radial velocity of the target.

#### 3.2 Doppler Frequency Calculation

*   **Scenario:**
    *   Radar transmits a signal with frequency $f_0$.
    *   Target is moving with radial velocity $v_r$.
    *   Radar receives the reflected signal.

*   **Derivation:**
    1.  When the radar transmits, the frequency received by the moving target is effectively Doppler shifted by $+f_d$. The frequency incident on the target is $f_0 + f_d$.
    2.  The target, moving away from the radar, reflects this signal. The reflected signal is Doppler shifted again, but now due to the target's motion relative to its own reflected wave. Since the target is moving away from the source of the reflection (itself), the frequency of the reflected wave appears lower.
    3.  The frequency reflected by the target is $(f_0 + f_d) - f_d'$.
    4.  The total Doppler shift experienced by the radar receiver is $f_d - f_d'$.
    5.  For a target moving radially, the total Doppler shift is twice the frequency shift experienced by the wave incident on it.
    6.  The Doppler frequency $f_d$ is given by:
        $$f_d = \frac{2 v_r}{ \lambda }$$
        where:
        *   $f_d$ is the Doppler frequency (Hz).
        *   $v_r$ is the radial velocity of the target (m/s).
        *   $\lambda$ is the wavelength of the transmitted signal (m).
        *   The factor of 2 arises because the Doppler shift occurs twice: once when the wave is reflected by the moving target and again when the reflected wave travels back to the stationary radar.

*   **Example:** If a radar transmits at 10 GHz ($10^{10}$ Hz) and detects a target moving towards it at 100 m/s, what is the Doppler frequency?
    *   Wavelength $\lambda = c / f_0 = (3 \times 10^8 \text{ m/s}) / (10 \times 10^9 \text{ Hz}) = 0.03$ m.
    *   $f_d = (2 \times 100 \text{ m/s}) / 0.03 \text{ m} \approx 6667$ Hz.

#### 3.3 CW Radar for Velocity Measurement

*   **Receiver Output:** The receiver in a CW radar mixes the transmitted signal with the received signal.
*   **Frequency Mixing:** This process produces sum and difference frequencies. The difference frequency is the Doppler frequency $f_d$.
*   **Velocity Detection:** The presence of a Doppler frequency shift indicates a moving target. The magnitude of $f_d$ directly gives the radial velocity.
*   **Stationary Targets:** Stationary targets reflect the transmitted signal with no Doppler shift ($f_d = 0$). These signals are filtered out in a CW Doppler radar.
*   **Block Diagram:**
    ```
    Transmitter (f0) --> Antenna 1 --> Target --> Antenna 2 --> Receiver --> Mixer --> Filter (Bandpass for fd) --> Doppler Processor (measures fd)
                   ^                                    ^
                   |                                    |
                   ----------------- Local Oscillator (f0)
    ```

*(Reference: Skolnik, "Introduction to Radar Systems," Chapter 2)*
*(Reference: Kinsley & Quegan, "Understanding Radar Systems," Chapter 3)*

#### 3.4 Limitation: Zero Velocity Problem (Blind Speed)

*   **Problem:** Pure CW radar cannot distinguish between zero velocity and a velocity that causes a Doppler frequency that is a multiple of the pulse repetition frequency (PRF) in pulsed Doppler radars. In pure CW, this isn't an issue for velocity measurement itself, but for differentiating targets from clutter.
*   **Clutter:** CW radar is highly susceptible to clutter from stationary objects (ground, buildings, etc.) which produce a zero Doppler shift. These signals can overwhelm the weak echoes from moving targets.
*   **Mitigation:**
    *   **Frequency Modulated (FM) CW Radar:** This type of radar overcomes the zero velocity problem by modulating the transmitted frequency.

*(Reference: Skolnik, "Introduction to Radar Systems," Chapter 2)*

---

### 4. Frequency Modulated (FM) CW Radar

#### 4.1 Principle of Operation

*   **Concept:** FM CW radar transmits a signal whose frequency is varied (modulated) over time. The most common modulation scheme is **linear frequency modulation (LFM)**, also known as a sawtooth sweep.
*   **Frequency Sweep:** The transmitted frequency changes linearly from $f_{low}$ to $f_{high}$ over a time interval $T_{sweep}$, and then instantaneously jumps back to $f_{low}$ (or vice-versa for different sweep patterns).
*   **Range Measurement:**
    1.  **Simultaneous Transmission and Reception:** Similar to CW, FM CW radar transmits continuously.
    2.  **Frequency Difference:** When the radar receives an echo from a target at range $R$, the transmitted frequency at the moment of reception is different from the frequency that was transmitted when the echo was originally sent.
    3.  Let the transmitted frequency at time $t$ be $f(t)$. The echo from a target at range $R$ will be received at time $t + \tau$, where $\tau = 2R/c$.
    4.  During the time interval $\tau$, the transmitted frequency has changed. If the frequency is swept linearly with a slope $S$ (Hz/s), the frequency difference ($\Delta f$) between the transmitted signal and the received echo is proportional to the time delay $\tau$:
        $$f(t+\tau) = f(t) + S \tau$$
        The received frequency $f_{rec}$ is $f(t)$. The transmitted frequency when the echo was sent is $f(t-\tau)$.
        So, $f_{rec} = f(t)$. The transmitted frequency that generated the echo was $f(t-\tau)$.
        If $f(t) = f_0 + St$, then $f(t-\tau) = f_0 + S(t-\tau)$.
        The frequency difference detected at the receiver is:
        $$ \Delta f = f(t) - f(t-\tau) = (f_0 + St) - (f_0 + S(t-\tau)) = S \tau $$
    5.  Since $\tau = 2R/c$, we have $\Delta f = S \frac{2R}{c}$.
    6.  Therefore, the range $R$ can be determined by measuring the frequency difference $\Delta f$:
        $$R = \frac{c \Delta f}{2S}$$
        where $S$ is the sweep rate (Hz/s).
*   **Velocity Measurement (Doppler Shift):**
    1.  If the target is moving, its echo will also be Doppler shifted by $f_d$.
    2.  When the transmitted frequency is $f_{tx}(t)$, the received echo frequency is $f_{rx}(t) = f_{tx}(t-\tau) + f_d$.
    3.  The mixer output will contain a frequency component equal to $|f_{rx}(t) - f_{tx}(t)| = |(f_{tx}(t-\tau) + f_d) - f_{tx}(t)| = |f_d - (f_{tx}(t) - f_{tx}(t-\tau))| = |f_d - S\tau|$.
    4.  This means the mixer output frequency contains a term related to both Doppler shift and range.
*   **Overcoming the Zero Velocity Problem:**
    *   **Sawtooth Sweep:** For a sawtooth sweep (frequency increases linearly, then drops instantaneously), the mixer output frequency will be $\Delta f$ for stationary targets and $\Delta f \pm f_d$ for moving targets (depending on whether the target is approaching or receding during the sweep).
    *   **Double Sideband (DSB) Mixing:** The mixer output contains both $|\Delta f + f_d|$ and $|\Delta f - f_d|$. By analyzing the two distinct frequencies, one can determine both range and velocity.
    *   **Triangular Sweep:** In a triangular sweep (frequency increases linearly, then decreases linearly), the system produces two different beat frequencies for stationary targets, allowing for unambiguous range measurement. The Doppler frequency can then be extracted by comparing the beat frequencies from the up-sweep and down-sweep.

*(Reference: Skolnik, "Introduction to Radar Systems," Chapter 2)*
*(Reference: Edde, "Radar: Principles, Technology, Applications," Chapter 3)*
*(Reference: Kinsley & Quegan, "Understanding Radar Systems," Chapter 3)*

#### 4.2 Advantages of FM CW Radar

*   **Range Measurement Capability:** Can measure range, unlike pure CW radar.
*   **Velocity Measurement:** Can measure velocity using the Doppler effect.
*   **Clutter Rejection:** Can reject stationary clutter by processing the Doppler shifts.
*   **High Average Power:** Efficient use of transmitter power, similar to CW.

#### 4.3 Disadvantages of FM CW Radar

*   **Range and Velocity Ambiguity:** With simple sweep patterns, there can be ambiguities in range and velocity measurements, especially if the sweep repetition period is comparable to the time it takes for the signal to travel to the target and back.
*   **Bandwidth Requirements:** Requires significant bandwidth for frequency modulation.

---

### 5. Range Resolution and Velocity Resolution

#### 5.1 Range Resolution

*   **Definition:** The ability of a radar system to distinguish between two targets that are close to each other in range.
*   **Pulsed Radar:** For pulsed radar, range resolution is determined by the pulse width ($\tau_p$). The minimum range separation for two targets to be resolved is approximately $c\tau_p/2$.
*   **CW Radar:** Pure CW radar has infinite range resolution (or rather, no range resolution capability).
*   **FM CW Radar:** For FM CW radar, range resolution is determined by the bandwidth of the transmitted signal ($B = f_{high} - f_{low}$).
    $$ \Delta R = \frac{c}{2B} $$
    *   A larger bandwidth $B$ leads to better range resolution $\Delta R$.

*(Reference: Skolnik, "Introduction to Radar Systems," Chapter 2)*
*(Reference: Edde, "Radar: Principles, Technology, Applications," Chapter 3)*

#### 5.2 Velocity Resolution

*   **Definition:** The ability of a radar system to distinguish between two targets that are close to each other in velocity.
*   **Pulsed Doppler Radar:** Velocity resolution is typically determined by the pulse repetition interval (PRI) or the observation time.
*   **CW and FM CW Radar:**
    *   In CW and FM CW radars, velocity resolution is primarily determined by the **signal-to-noise ratio (SNR)** and the ability to distinguish the Doppler frequency from nearby frequencies.
    *   A longer coherent processing time (the time over which the signal is processed to extract Doppler frequencies) leads to better velocity resolution.
    *   The minimum velocity difference that can be resolved is related to the smallest distinguishable Doppler frequency, which is limited by the Doppler bandwidth of the system.
    *   $$ \Delta v_r \approx \frac{\lambda}{2T_{obs}} $$
        where $T_{obs}$ is the observation time.

*(Reference: Skolnik, "Introduction to Radar Systems," Chapter 2)*

---

### 6. Clutter and its Mitigation in CW/FM CW Radar

*   **Clutter:** Unwanted radar reflections from objects other than the target of interest, such as ground, buildings, rain, or chaff.
*   **CW Radar and Clutter:** Pure CW radar is extremely susceptible to clutter because stationary objects produce a zero Doppler shift, which is the same as no Doppler shift.
*   **FM CW Radar and Clutter Rejection:**
    *   **Doppler Filtering:** FM CW radar can reject clutter by utilizing the Doppler shift. Stationary clutter will have zero Doppler shift, while moving targets will have a non-zero Doppler shift.
    *   **Mixed-Signal Processing:** By mixing the transmitted and received signals and then filtering, the Doppler frequencies can be isolated. Stationary clutter is filtered out.
    *   **Limitations:** If a moving target has a Doppler frequency that falls within the frequency band of the clutter (e.g., due to interference or specific types of clutter), it can still be difficult to distinguish.

*(Reference: Skolnik, "Introduction to Radar Systems," Chapter 2)*
*(Reference: Kinsley & Quegan, "Understanding Radar Systems," Chapter 3)*

---

### 7. Key Concepts and Important Points to Remember

*   **CW Radar:** Transmits continuously, primarily measures velocity via Doppler effect. Cannot measure range. Highly susceptible to clutter.
*   **FM CW Radar:** Transmits continuously but modulates frequency. Can measure both range and velocity. Overcomes the zero-velocity problem of pure CW.
*   **Doppler Effect:** The change in frequency of a wave due to relative motion between the source and observer. In radar, $f_d = 2v_r/\lambda$.
*   **Range Resolution (FM CW):** Determined by the bandwidth of the transmitted signal ($ \Delta R = c / (2B) $).
*   **Velocity Resolution:** Determined by the observation time ($ \Delta v_r \approx \lambda / (2T_{obs}) $).
*   **Clutter:** Stationary objects can mask moving targets in CW radar. FM CW radar can reject clutter using Doppler filtering.
*   **Zero Velocity Problem:** Pure CW radar cannot distinguish stationary targets from the transmitted signal leakage. FM CW addresses this.

---

### 8. Practice Questions and Exercises

**Question 1:** A pure CW radar operates at a frequency of 5 GHz. If it detects a target moving radially at 200 m/s, what is the Doppler frequency shift?
    *   **Answer:**
        *   Wavelength $\lambda = c / f_0 = (3 \times 10^8 \text{ m/s}) / (5 \times 10^9 \text{ Hz}) = 0.06$ m.
        *   $f_d = (2 v_r) / \lambda = (2 \times 200 \text{ m/s}) / 0.06 \text{ m} \approx 6667$ Hz.

**Question 2:** An FM CW radar uses a linear frequency sweep of 100 MHz over 1 ms. What is the range resolution of this radar?
    *   **Answer:**
        *   Bandwidth $B = 100 \text{ MHz} = 100 \times 10^6$ Hz.
        *   Range Resolution $\Delta R = c / (2B) = (3 \times 10^8 \text{ m/s}) / (2 \times 100 \times 10^6 \text{ Hz}) = 1.5$ m.

**Question 3:** Explain why a pure CW radar is generally not used for range measurement.
    *   **Answer:** A pure CW radar transmits continuously without any timing reference. To measure range, the radar needs to measure the time it takes for the transmitted pulse to travel to the target and return. Since the transmission is continuous, this time-of-flight measurement is not possible.

**Question 4:** How does FM CW radar overcome the problem of distinguishing between moving targets and stationary clutter?
    *   **Answer:** FM CW radar utilizes the Doppler effect. Stationary clutter has zero Doppler shift, while moving targets have a non-zero Doppler shift. By processing the received signal and filtering out the zero-frequency component (or analyzing the frequency spectrum), the radar can isolate the Doppler shifts corresponding to moving targets, thereby distinguishing them from clutter.

**Question 5:** A CW radar is used to measure the speed of cars. What are the primary challenges faced by this type of radar system, and how can they be addressed?
    *   **Answer:**
        *   **Challenge 1: Clutter (Stationary Objects):** Strong reflections from roads, buildings, etc., can overwhelm the weak echoes from cars.
        *   **Address:** Use Doppler filtering to reject zero-frequency components.
        *   **Challenge 2: Interference:** Strong signals from other transmitters.
        *   **Address:** Use directional antennas and narrow bandwidth filters.
        *   **Challenge 3: No Range Information:** Cannot determine the distance to the cars.
        *   **Address:** If range information is required, an FM CW or pulsed radar system must be used instead.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. References

*   **Pratt, Timothy, and Jeremy Allnutt. *Satellite Communications*. Wiley, 3rd Edition, 2021.** (While this textbook primarily focuses on satellite communications, it may provide context on general communication principles that can be related to radar systems, particularly regarding signal propagation and modulation concepts. However, direct coverage of CW/FM radar details is less likely.)
*   **Skolnik, Merrill I. *Introduction to Radar Systems*. Tata McGraw-Hill, 2nd Edition, 2017.** (This is a foundational text and will extensively cover CW and FM CW radar principles, Doppler effect, range, and velocity measurements, clutter, and resolution. **Crucial reference for this module.**)
*   **Ha, Tri T. *Digital Satellite Communications*. McGraw-Hill Education, 2nd Edition, 2017.** (Similar to Pratt & Allnutt, focus is on satellite, but modulation techniques can be conceptually relevant.)
*   **Pritchard, Charles. *Satellite Communications Systems Engineering*. Pearson Education, 2nd Edition, 2006.** (Again, satellite focused. General understanding of signal processing may be found.)
*   **Edde, Byron. *Radar: Principles, Technology, Applications*. Pearson, 1st Edition, 2004.** (A comprehensive resource for radar systems, providing detailed explanations of CW, FM CW, Doppler effect, and various radar applications. **Very relevant reference.**)
*   **Kinsley, Simon, and Shaun Quegan. *Understanding Radar Systems*. John Wiley & Sons, 1st Edition, 1999.** (Offers a clear and accessible explanation of radar principles, including CW and FM CW radar, Doppler effects, and target detection. **Highly recommended reference.**)

---