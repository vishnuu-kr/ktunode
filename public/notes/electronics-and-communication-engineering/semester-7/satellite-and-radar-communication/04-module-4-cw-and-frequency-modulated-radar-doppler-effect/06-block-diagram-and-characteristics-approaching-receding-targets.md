---
title: "Block Diagram and Characteristics (Approaching/ Receding Targets)"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff332"
status: "completed"
scrapedAt: "2026-05-23T18:10:59.775Z"
---
## Satellite and Radar Communication: Module 4 - CW and Frequency Modulated Radar: Doppler Effect

### Topic: Block Diagram and Characteristics (Approaching/ Receding Targets)

This module delves into the fundamental principles of Continuous Wave (CW) and Frequency Modulated (FM) radar, with a specific focus on the Doppler effect and its implications for detecting approaching and receding targets. We will explore the block diagrams and key characteristics of these radar systems.

---

### 1. Introduction to Doppler Radar

**Key Concept:** The Doppler effect is the change in frequency of a wave in relation to an observer who is moving relative to the wave source. In radar, this means that the frequency of the reflected signal (echo) will be different from the transmitted signal if the target is moving.

**Relevance to Radar:**
*   **Target Velocity Measurement:** The magnitude of the Doppler shift directly corresponds to the radial velocity of the target.
*   **Target Detection:** Doppler radar can distinguish moving targets from stationary clutter (e.g., ground reflections), which have zero Doppler shift.

**Textbook Reference:**
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Tata McGraw-Hill. (Chapter 2, Doppler Radar Principles)

**Course Outcome Alignment:**
*   **CO3:** Illustrate Radar Fundamentals like Radar Equation and Applications. (K2) - Understanding Doppler is fundamental to radar applications.

---

### 2. Continuous Wave (CW) Radar

**2.1. Basic Principle:**
CW radar transmits a continuous, unmodulated sine wave. It relies on separating the transmitted signal from the received echo to detect the Doppler shift.

**2.2. Block Diagram of a Simple CW Radar:**

```
+-----------------+      +-----------------+      +-----------------+
|                 |      |                 |      |                 |
| Transmitter     |----->|   Antenna       |----->|    Target       |
| (Generates CW   |      |                 |      |                 |
| Signal)         |      |                 |      |                 |
+-----------------+      +-----------------+      +-----------------+
                             ^
                             | (Reflected Signal)
                             |
                       +-----------------+      +-----------------+
                       |                 |      |                 |
                       |   Receiver      |<-----|    Mixer        |
                       | (Detects Echo)  |      | (Subtracts Tx & Rx|
                       |                 |      |  Frequencies)   |
                       +-----------------+      +-----------------+
                             |
                             | (IF Signal containing Doppler Shift)
                             |
                       +-----------------+
                       |                 |
                       |  Signal         |
                       |  Processor      |
                       | (Measures       |
                       |  Doppler Shift) |
                       +-----------------+
```

**Key Components and their Functions:**
*   **Transmitter:** Generates a continuous, unmodulated sinusoidal wave.
*   **Antenna:** Transmits the signal and receives the reflected echo. In many simple CW systems, a single antenna is used for both transmission and reception, requiring a circulator or diplexer for isolation. More commonly, separate transmit and receive antennas are used for better isolation.
*   **Receiver:** Amplifies the weak received echo.
*   **Mixer (or Demodulator):** This is the crucial component. It mixes the transmitted signal with the received echo.
    *   If the target is stationary, the received frequency is the same as the transmitted frequency. The mixer output will be a constant DC voltage (ideally).
    *   If the target is moving, the received frequency is shifted by the Doppler frequency ($f_d$). The mixer output will be an Intermediate Frequency (IF) signal at $f_d$.
*   **Signal Processor:** Analyzes the IF signal to determine the Doppler frequency, which is then used to calculate the target's radial velocity.

**2.3. Characteristics of Simple CW Radar:**
*   **Pros:**
    *   Simple design and low cost.
    *   High average power capability (can be pulsed or CW, but for simple CW, it's continuous).
    *   Excellent for measuring velocity.
*   **Cons:**
    *   **Lack of Range Information:** Because the transmitter is always on, it's impossible to distinguish between echoes from different ranges without further modification. The mixer output contains Doppler shifts from all targets within the antenna's beamwidth, regardless of their range.
    *   **Transmitter-Receiver Leakage:** A significant problem is the leakage of the strong transmitted signal directly into the receiver. This leakage is at the transmitted frequency and can mask the much weaker Doppler-shifted echo signal. This requires excellent isolation between the transmit and receive antennas or circuitry.

**Important Point to Remember:** The inherent problem with simple CW radar is its inability to determine the range of a target.

**Textbook Reference:**
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Tata McGraw-Hill. (Chapter 2, CW Radar)
*   Edde, B. (2004). *Radar: Principles, Technology, Applications*. Pearson. (Chapter 3, CW Radar)

**Course Outcome Alignment:**
*   **CO3:** Illustrate Radar Fundamentals like Radar Equation and Applications. (K2) - Understanding the limitations of CW radar is part of fundamental knowledge.
*   **CO4:** Compare various types of Radars and tracking techniques (K2) - This is a foundational radar type to compare against others.

---

### 3. Doppler Effect and Target Velocity

**3.1. Doppler Frequency Formula:**
The Doppler shift ($f_d$) for a target moving with radial velocity ($v_r$) is given by:

$f_d = \frac{2 v_r}{ \lambda }$

Where:
*   $f_d$ is the Doppler frequency shift.
*   $v_r$ is the radial velocity of the target (positive for approaching, negative for receding).
*   $\lambda$ is the wavelength of the transmitted radar signal ($\lambda = c/f_0$, where $c$ is the speed of light and $f_0$ is the transmitted frequency).

**3.2. Approaching vs. Receding Targets:**
*   **Approaching Target:** If the target is moving towards the radar, its radial velocity ($v_r$) is positive. The received signal frequency will be higher than the transmitted frequency, resulting in a positive Doppler shift.
*   **Receding Target:** If the target is moving away from the radar, its radial velocity ($v_r$) is negative. The received signal frequency will be lower than the transmitted frequency, resulting in a negative Doppler shift.

**Example:**
A radar operating at a frequency of 10 GHz (wavelength $\lambda = 0.03$ m) detects a target moving towards it at a radial velocity of 100 m/s.
$f_d = \frac{2 \times 100 \text{ m/s}}{0.03 \text{ m}} \approx 6667 \text{ Hz}$ or 6.67 kHz.
The received signal will be at $10 \text{ GHz} + 6.67 \text{ kHz}$.

If the target was receding at 100 m/s, the Doppler shift would be -6.67 kHz, and the received signal would be at $10 \text{ GHz} - 6.67 \text{ kHz}$.

**Important Point to Remember:** The sign of the Doppler shift indicates the direction of the target's radial motion relative to the radar.

**Textbook Reference:**
*   Pratt, T., & Allnutt, J. (2021). *Satellite Communications*. Wiley. (While this book focuses on satellite comms, the physics of wave propagation and Doppler effects are universal. For radar-specific Doppler, Skolnik is primary).
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Tata McGraw-Hill. (Chapter 2)

**Course Outcome Alignment:**
*   **CO3:** Illustrate Radar Fundamentals like Radar Equation and Applications. (K2) - Direct application of Doppler effect for velocity measurement.

---

### 4. Frequency Modulated (FM) or "FMCW" Radar

**4.1. Basic Principle:**
To overcome the range ambiguity of simple CW radar, FMCW radar transmits a signal whose frequency is varied linearly over time. By mixing the transmitted signal with the received echo, both the Doppler shift (related to velocity) and the time delay (related to range) can be measured.

**4.2. Block Diagram of an FMCW Radar:**

```
+-----------------+      +-----------------+      +-----------------+
|                 |      |                 |      |                 |
|   Ramp         |----->| Transmitter     |----->|   Antenna       |----->|    Target       |
| Generator      |      | (Swept Frequency)|      |                 |      |                 |
+-----------------+      +-----------------+      |                 |      |                 |
                             ^                      +-----------------+      +-----------------+
                             | (Transmitted Signal)             ^
                             |                                    | (Reflected Signal)
                       +-----------------+                      |
                       |                 |                      |
                       |   Receiver      |<---------------------+
                       | (Receives Echo) |
                       |                 |
                       +-----------------+
                             |
                             | (Mixed Signals)
                             |
                       +-----------------+      +-----------------+
                       |                 |      |                 |
                       |    Mixer        |----->|  Signal         |
                       | (Mixes Tx & Rx) |      |  Processor      |
                       |                 |      | (Measures Range &|
                       |                 |      |  Velocity)      |
                       +-----------------+      +-----------------+
```

**Key Components and their Functions:**
*   **Ramp Generator:** Controls the frequency sweep of the transmitter. It generates a triangular or sawtooth waveform to modulate the transmitter's frequency.
*   **Transmitter:** Transmits a signal whose frequency changes over time. This is often achieved using a Voltage-Controlled Oscillator (VCO).
*   **Antenna:** Transmits the signal and receives the echo. Similar considerations for isolation as in CW radar apply.
*   **Receiver:** Amplifies the received echo.
*   **Mixer:** This is where the magic happens. It mixes the *currently transmitted* frequency with the *received* frequency.
    *   **Range Measurement:** Due to the frequency sweep, the received signal will have a frequency different from the transmitted signal *even if the target is stationary*. This frequency difference is proportional to the time delay between transmission and reception, hence proportional to the range.
    *   **Velocity Measurement:** If the target is also moving, the Doppler shift will be added to or subtracted from the frequency difference caused by the range delay.
*   **Signal Processor:**
    *   **Range:** Analyzes the frequency difference in the mixer output during the sweep to determine the range.
    *   **Velocity:** If a triangular sweep is used (frequency increases for a period, then decreases), the Doppler shift can be isolated. The frequency difference caused by range will be in one direction during the up-sweep and the opposite direction during the down-sweep. The Doppler shift, however, will have the same sign in both sweeps (relative to the transmitted frequency), allowing it to be separated from the range-induced frequency differences.

**4.3. Waveform Considerations:**
*   **Sawtooth Sweep:** Provides range information directly from the frequency difference. However, it cannot distinguish between approaching and receding targets if there's also a Doppler shift.
*   **Triangular Sweep:** This is more common for Doppler-capable FMCW radar.
    *   **Up-Sweep:** $f_{Tx}(t) = f_0 + \frac{B}{T_{sweep}} t$. The received frequency $f_{Rx}$ will be $f_{Tx}(t - \tau)$ where $\tau = 2R/c$. The mixer output frequency during the up-sweep is $f_{IF, up} = (\frac{B}{T_{sweep}} \tau) + f_d$.
    *   **Down-Sweep:** $f_{Tx}(t) = f_0 + \frac{B}{T_{sweep}} T_{sweep} - \frac{B}{T_{sweep}} (t - T_{sweep})$. The received frequency $f_{Rx}$ will be $f_{Tx}(t - \tau)$. The mixer output frequency during the down-sweep is $f_{IF, down} = -(\frac{B}{T_{sweep}} \tau) + f_d$.
    *   **Range ($R$):** $2R/c = \tau = \frac{f_{IF, up} - f_{IF, down}}{2B/T_{sweep}}$.
    *   **Velocity ($v_r$):** $f_d = \frac{f_{IF, up} + f_{IF, down}}{2}$.

**Example:**
An FMCW radar uses a triangular sweep with a bandwidth $B = 100$ MHz and a sweep period $T_{sweep} = 1$ ms. A target is at a range of 100 m and moving towards the radar at 50 m/s.
*   Time delay $\tau = 2R/c = 2 \times 100 \text{ m} / (3 \times 10^8 \text{ m/s}) \approx 0.667 \mu s$.
*   Doppler frequency $f_d = \frac{2 \times 50 \text{ m/s}}{\lambda}$. Let's assume a center frequency of 10 GHz, so $\lambda = 0.03$ m. $f_d \approx \frac{2 \times 50}{0.03} \approx 3333 \text{ Hz}$.
*   Frequency sweep rate $= B/T_{sweep} = 100 \text{ MHz} / 0.001 \text{ s} = 10^{11} \text{ Hz/s}$.
*   During up-sweep, frequency difference due to range $\Delta f_{range} = (B/T_{sweep}) \tau = 10^{11} \text{ Hz/s} \times 0.667 \times 10^{-6} \text{ s} \approx 66.7 \text{ kHz}$.
*   $f_{IF, up} = \Delta f_{range} + f_d = 66.7 \text{ kHz} + 3.33 \text{ kHz} = 70.03 \text{ kHz}$.
*   During down-sweep, frequency difference due to range $\Delta f_{range} = -(B/T_{sweep}) \tau = -66.7 \text{ kHz}$.
*   $f_{IF, down} = -\Delta f_{range} + f_d = -66.7 \text{ kHz} + 3.33 \text{ kHz} = -63.37 \text{ kHz}$.
*   From these IFs, we can recover range and velocity.

**Important Point to Remember:** FMCW radar with a triangular sweep can measure both range and velocity simultaneously.

**Textbook Reference:**
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Tata McGraw-Hill. (Chapter 2, FMCW Radar)
*   Kinsley, S., & Quegan, S. (1999). *Understanding Radar Systems*. John Wiley & Sons. (Chapter 5, FMCW Radar)

**Course Outcome Alignment:**
*   **CO3:** Illustrate Radar Fundamentals like Radar Equation and Applications. (K2) - Demonstrates how radar determines range and velocity.
*   **CO4:** Compare various types of Radars and tracking techniques (K2) - A key radar type with distinct advantages.

---

### 5. Characteristics of FMCW Radar (Approaching/Receding Targets)

**5.1. Range Measurement:**
*   The frequency difference $\Delta f = f_{tx} - f_{rx}$ in an FMCW radar is directly proportional to the time delay $\tau$, and thus the range $R$:
    $\Delta f = \frac{2 v_r}{\lambda} + \frac{2R}{c} \times \frac{B}{T_{sweep}}$ (for up-sweep)
    $\Delta f = \frac{2 v_r}{\lambda} - \frac{2R}{c} \times \frac{B}{T_{sweep}}$ (for down-sweep)

**5.2. Velocity Measurement:**
*   For a triangular sweep, the Doppler shift $f_d$ is half the sum of the IF frequencies from the up and down sweeps: $f_d = \frac{f_{IF, up} + f_{IF, down}}{2}$.
*   This means a positive Doppler shift (approaching target) will increase the IF frequency during the up-sweep and decrease it during the down-sweep (relative to the range-induced frequency shift).
*   A negative Doppler shift (receding target) will decrease the IF frequency during the up-sweep and increase it during the down-sweep.

**5.3. Target Characteristics based on FMCW Output:**

| Target Motion | $f_{IF, up}$ (Approximate) | $f_{IF, down}$ (Approximate) | Range Information | Velocity Information |
| :------------ | :------------------------- | :--------------------------- | :---------------- | :------------------- |
| **Stationary** | $\Delta f_{range}$         | $-\Delta f_{range}$          | Determined by $\Delta f_{range}$ | Zero Doppler ($f_d=0$) |
| **Approaching**| $\Delta f_{range} + f_d$   | $-\Delta f_{range} + f_d$    | Determined by average IF ($\approx f_d$) | Positive Doppler ($f_d>0$) |
| **Receding**   | $\Delta f_{range} - f_d$   | $-\Delta f_{range} - f_d$    | Determined by average IF ($\approx -f_d$) | Negative Doppler ($f_d<0$) |

**Important Points to Remember:**
*   The frequency difference during a single sweep in FMCW is a combination of range and Doppler.
*   Using a triangular sweep allows separation of range and velocity information by analyzing the IFs from both the up-sweep and down-sweep.
*   The sign of the Doppler shift is correctly preserved and measurable.

**Textbook Reference:**
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Tata McGraw-Hill. (Chapter 2)

**Course Outcome Alignment:**
*   **CO3:** Illustrate Radar Fundamentals like Radar Equation and Applications. (K2) - Connects the operating principle to target characteristics.
*   **CO4:** Compare various types of Radars and tracking techniques (K2) - Understanding the processing of Doppler information.

---

### 6. Limitations and Considerations

*   **Range and Velocity Resolution:** The ability of an FMCW radar to distinguish between targets at slightly different ranges or with slightly different velocities depends on the sweep bandwidth, sweep time, and signal processing techniques.
*   **Ambiguities:** In some FMCW schemes, range or velocity ambiguities can arise, requiring careful waveform design or additional processing.
*   **Clutter:** Stationary clutter can still be an issue, although Doppler processing helps to mitigate it.
*   **Transmitter-Receiver Isolation:** As with CW radar, effective isolation is crucial to prevent the strong transmitted signal from overwhelming the receiver.

**Textbook Reference:**
*   Skolnik, M. I. (2017). *Introduction to Radar Systems*. Tata McGraw-Hill. (Chapter 2)
*   Kinsley, S., & Quegan, S. (1999). *Understanding Radar Systems*. John Wiley & Sons. (Chapter 5)

**Course Outcome Alignment:**
*   **CO3:** Illustrate Radar Fundamentals like Radar Equation and Applications. (K2) - Understanding limitations is part of fundamental knowledge.

---

### 7. Practice Questions and Answers

**Question 1:** What is the primary limitation of a simple CW radar system?
    a) Inability to measure velocity
    b) Inability to measure range
    c) High susceptibility to clutter
    d) Difficulty in generating high power

**Answer:** b) Inability to measure range. Simple CW radar excels at measuring velocity but cannot distinguish targets at different ranges due to its continuous transmission.

**Question 2:** If a target is receding from an X-band radar, what will be the nature of the Doppler shift?
    a) Positive frequency shift
    b) Negative frequency shift
    c) Zero frequency shift
    d) No shift, only amplitude change

**Answer:** b) Negative frequency shift. A receding target moves away from the radar, causing the reflected frequency to be lower than the transmitted frequency.

**Question 3:** In an FMCW radar using a triangular sweep, how can the Doppler frequency ($f_d$) be determined?
    a) By measuring the frequency difference during the up-sweep only.
    b) By measuring the frequency difference during the down-sweep only.
    c) By taking the average of the IF frequencies from the up-sweep and down-sweep.
    d) By summing the IF frequencies from the up-sweep and down-sweep.

**Answer:** c) By taking the average of the IF frequencies from the up-sweep and down-sweep. The range-induced frequency shift changes sign between sweeps, while the Doppler shift remains consistent (relative to transmitted frequency), allowing its isolation by averaging the resulting IFs.

**Question 4:** A radar operating at 5 GHz with a wavelength of 0.06 m detects a target moving towards it with a radial velocity of 200 m/s. Calculate the Doppler frequency shift.

**Solution:**
Using the Doppler frequency formula: $f_d = \frac{2 v_r}{\lambda}$
Given:
*   $v_r = 200$ m/s (positive for approaching)
*   $\lambda = 0.06$ m
$f_d = \frac{2 \times 200 \text{ m/s}}{0.06 \text{ m}} = \frac{400}{0.06} \text{ Hz} \approx 6666.67 \text{ Hz}$ or 6.67 kHz.

**Question 5:** Explain the fundamental difference in how CW radar and FMCW radar measure target information.

**Answer:**
*   **CW Radar:** Transmits a continuous, unmodulated frequency. It relies on mixing the transmitted and received signals to detect the Doppler shift, which directly indicates the target's radial velocity. However, it cannot determine the target's range.
*   **FMCW Radar:** Transmits a signal with a frequency that changes over time (e.g., linearly with a sawtooth or triangular sweep). By mixing the currently transmitted signal with the received echo, it generates an intermediate frequency (IF) that is a function of both the time delay (related to range) and the Doppler shift (related to velocity). With a triangular sweep, both range and velocity can be measured simultaneously.

---

### 8. Key Points to Remember

*   **Doppler Effect:** The change in received frequency due to target motion is fundamental to Doppler radar.
*   **CW Radar:** Simple, measures velocity, but lacks range capability. Vulnerable to transmitter-receiver leakage.
*   **FMCW Radar:** Overcomes CW range limitation by frequency sweeping. Triangular sweeps allow simultaneous range and velocity measurement.
*   **Approaching Targets:** Result in a positive Doppler shift (higher received frequency).
*   **Receding Targets:** Result in a negative Doppler shift (lower received frequency).
*   The Doppler frequency is directly proportional to radial velocity and inversely proportional to wavelength.

---

This concludes the notes on the block diagrams and characteristics of CW and FM radar for approaching/receding targets. These principles are foundational for understanding more advanced radar systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
