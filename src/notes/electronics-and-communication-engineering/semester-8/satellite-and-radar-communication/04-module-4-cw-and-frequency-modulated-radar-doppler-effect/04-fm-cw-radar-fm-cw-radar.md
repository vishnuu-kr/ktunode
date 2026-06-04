---
title: "FM-CW Radar: FM-CW Radar"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8ba"
status: "completed"
scrapedAt: "2026-05-23T19:30:30.184Z"
---
# Satellite and Radar Communication: Module 4 - CW and Frequency Modulated Radar: Doppler Effect

## Topic: FM-CW Radar

### 1. Introduction to FM-CW Radar

Frequency Modulated Continuous Wave (FM-CW) radar is a type of radar system that transmits a continuous wave signal whose frequency is varied linearly over time. This frequency modulation is key to determining the range of a target.

*   **Princ:** By transmitting a continuously modulated signal and comparing the frequency of the transmitted signal with the received signal (which has been Doppler shifted and has a time delay corresponding to the range), the radar can determine both range and velocity.
*   **Evolution from CW Radar:** While CW radar is excellent for velocity measurement due to the Doppler effect, it struggles with range measurement. FM-CW radar overcomes this limitation by introducing frequency modulation.

### 2. Principle of Operation

The core principle of FM-CW radar lies in the frequency difference between the transmitted and received signals.

*   **Frequency Modulation:** The transmitted signal's frequency is swept linearly upwards (or downwards) over a period known as the modulation period ($T_m$). This is often referred to as a "chirp."
*   **Target Reflection:** The transmitted signal hits a target and is reflected back. During the time the signal travels to the target and back (time delay $\tau$), the transmitted frequency has changed.
*   **Beat Frequency:** The receiver mixes the currently transmitted signal with the received (delayed) signal. This mixing process generates a beat frequency, which is the difference between the two frequencies.
*   **Range Determination:** For a linearly swept frequency, the frequency difference (beat frequency) is directly proportional to the time delay ($\tau$). Since the velocity of propagation is known (speed of light, $c$), the range ($R$) can be calculated as:

    $R = \frac{c \tau}{2}$

    The beat frequency ($f_b$) is related to the range by:

    $f_b = \frac{\Delta f}{T_m} \tau = \frac{\Delta f}{T_m} \frac{2R}{c}$

    Where:
    *   $\Delta f$ is the total frequency deviation (bandwidth of the sweep).
    *   $T_m$ is the modulation period.
    *   $c$ is the speed of light.

*   **Doppler Effect and Velocity:** If the target is moving, the received signal will be Doppler shifted. This Doppler shift adds to or subtracts from the beat frequency caused by the range delay.

### 3. FM-CW Radar Waveforms and Frequency-Time Relationships

FM-CW radar typically uses a sawtooth or triangular sweep pattern for its frequency modulation.

*   **Sawtooth Sweep:**
    *   The frequency increases linearly from $f_0$ to $f_0 + \Delta f$ over time $T_m$.
    *   After reaching the peak, it rapidly returns to $f_0$ and the cycle repeats.
    *   **Problem:** The rapid downward sweep can lead to spurious beat frequencies, making it difficult to distinguish between range and Doppler components.

*   **Triangular Sweep (or Sawtooth with Up and Down Chirps):**
    *   The frequency increases linearly (up-chirp) over $T_m/2$ to $f_0 + \Delta f$.
    *   The frequency then decreases linearly (down-chirp) over the next $T_m/2$ back to $f_0$.
    *   This approach is more commonly used because it allows for the separation of range and Doppler information.

**Example of Triangular Sweep:**

Imagine a sweep from 100 MHz to 101 MHz over 1 millisecond (1 ms).
*   **Up-Chirp:** Frequency increases from 100 MHz to 101 MHz over 0.5 ms.
*   **Down-Chirp:** Frequency decreases from 101 MHz to 100 MHz over the next 0.5 ms.

Let's consider a target at a range of 150 meters. The time delay $\tau$ would be:
$\tau = \frac{2R}{c} = \frac{2 \times 150 \text{ m}}{3 \times 10^8 \text{ m/s}} = 1 \mu s$

During the up-chirp, the transmitted frequency has increased by $(1 \mu s / 0.5 \text{ ms}) \times 1 \text{ MHz} = 0.002 \times 1 \text{ MHz} = 2 \text{ kHz}$ from the frequency at the time the signal was transmitted.
The beat frequency during the up-chirp will be approximately $\frac{\Delta f}{T_m} \tau = \frac{1 \text{ MHz}}{1 \text{ ms}} \times 1 \mu s = 1000 \text{ kHz} \times 0.001 \text{ ms} = 1 \text{ kHz}$.

During the down-chirp, the transmitted frequency has decreased by the same amount. The beat frequency will be approximately $-\frac{\Delta f}{T_m} \tau$ (or the magnitude will be the same).

**Key takeaway:** The beat frequency is proportional to the range.

### 4. Range and Velocity Measurement with FM-CW Radar (Triangular Sweep)

The triangular sweep pattern is crucial for simultaneously measuring range and velocity.

*   **During the Up-Chirp:** The beat frequency ($f_{bu}$) is a combination of the range-induced frequency shift and the Doppler shift.
    $f_{bu} = f_{range} + f_{Doppler}$
    $f_{bu} = \frac{\Delta f}{T_m} \frac{2R}{c} + f_d$
    Where $f_d$ is the Doppler frequency shift.

*   **During the Down-Chirp:** The beat frequency ($f_{bd}$) is also a combination of the range-induced frequency shift and the Doppler shift, but the sign of the range-induced shift is reversed relative to the Doppler shift direction.
    $f_{bd} = f_{range} - f_{Doppler}$
    $f_{bd} = \frac{\Delta f}{T_m} \frac{2R}{c} - f_d$

*   **Solving for Range and Doppler:** By measuring both $f_{bu}$ and $f_{bd}$, we can solve for $f_{range}$ and $f_{Doppler}$:

    *   **Range Frequency ($f_{range}$):**
        $f_{bu} + f_{bd} = (f_{range} + f_{Doppler}) + (f_{range} - f_{Doppler}) = 2 f_{range}$
        $f_{range} = \frac{f_{bu} + f_{bd}}{2}$

    *   **Doppler Frequency ($f_{Doppler}$):**
        $f_{bu} - f_{bd} = (f_{range} + f_{Doppler}) - (f_{range} - f_{Doppler}) = 2 f_{Doppler}$
        $f_{Doppler} = \frac{f_{bu} - f_{bd}}{2}$

*   **Calculating Range and Velocity:**
    *   **Range:** $R = \frac{c \tau}{2} = \frac{c}{2} \frac{T_m}{\Delta f} f_{range}$
    *   **Velocity:** $v = \frac{\lambda_0 f_{Doppler}}{2}$, where $\lambda_0$ is the wavelength of the carrier frequency.

**Important Note:** The Doppler shift $f_d$ is positive if the target is moving towards the radar and negative if it's moving away. The formulation above assumes the Doppler shift is positive for a target moving away during the up-chirp and hence negative during the down-chirp relative to the frequency sweep direction. If the target is moving towards the radar, the signs of $f_{bu}$ and $f_{bd}$ will be reversed relative to the range component, but their difference and sum will still allow for separation.

### 5. Block Diagram of an FM-CW Radar

A typical FM-CW radar system consists of the following components:

```
+-------------------+      +-----------------+      +-------------------+
|   Transmitter     |----->|     Antenna     |----->|      Target       |
| (FM Oscillator)   |      |                 |      |                   |
+-------------------+      +--------+--------+      +--------+----------+
                                    |                        |
                                    | Reflected Signal       |
                                    |                        |
                                    |                        |
                                    |                        |
                                    |                        |
                                    |                        |
                                    |                        |
                                    v                        |
+-------------------+      +--------+--------+      +--------+----------+
|     Receiver      |<-----|     Antenna     |<-----|      Target       |
| (Mixer, Amplifier)|      |                 |      |                   |
+-------------------+      +-----------------+      +-------------------+
       |
       | Beat Frequency Output
       |
       v
+-------------------+
|   Signal          |
|   Processor       |
| (FFT, Filter,     |
|  Range/Velocity   |
|  Estimation)      |
+-------------------+
```

**Detailed Breakdown:**

1.  **Transmitter:** Generates the FM signal, typically using a Voltage-Controlled Oscillator (VCO) where the control voltage is varied to produce the desired frequency sweep.
2.  **Antenna:** Transmits the FM signal and receives the reflected signal. In simple systems, a single antenna is used with a duplexer, or separate transmit and receive antennas are used.
3.  **Receiver:**
    *   **Mixer:** Mixes the received signal with a portion of the transmitted signal (often a delayed version of the transmitted signal or a reference signal derived from the transmitter). This produces the beat frequency.
    *   **Amplifier:** Amplifies the weak received signal and the beat frequency signal.
    *   **Filter:** Filters out unwanted frequencies.
4.  **Signal Processor:**
    *   **Analog-to-Digital Converter (ADC):** Converts the analog beat frequency signal into a digital format.
    *   **Digital Signal Processor (DSP):** Performs operations like Fast Fourier Transform (FFT) to analyze the frequency content of the beat signal, identifying the range and Doppler frequencies.

### 6. Advantages and Disadvantages of FM-CW Radar

**Advantages:**

*   **Good Range Resolution:** Achievable with a large frequency deviation ($\Delta f$).
*   **Lower Peak Power:** Compared to pulsed radars, FM-CW radars have lower peak power requirements as they transmit continuously. This makes them suitable for applications where power consumption is a concern.
*   **Simplicity:** Generally simpler in design and operation compared to complex pulsed Doppler radars, especially for basic range measurement.
*   **Continuous Monitoring:** Provides continuous coverage and target detection.

**Disadvantages:**

*   **Limited Ambiguity Resolution (for simple sawtooth):** With a simple sawtooth sweep, it's difficult to distinguish between range and Doppler, leading to ambiguities.
*   **Range Sidelobes:** Similar to pulsed radars, frequency modulation can introduce range sidelobes, which can mask weak targets.
*   **Interference:** Susceptible to interference from other radar systems or strong clutter.
*   **Doppler Effect Complexity:** While it can measure Doppler, accurately separating Doppler from range can require more complex modulation schemes and signal processing.

### 7. Applications of FM-CW Radar

FM-CW radar finds applications in various domains due to its balance of performance and simplicity.

*   **Automotive Radar:** Widely used in advanced driver-assistance systems (ADAS) for adaptive cruise control, collision avoidance, and blind-spot monitoring. Their low cost and small size make them ideal.
*   **Altimeters:** Used in aircraft to measure altitude above ground level.
*   **Level Sensors:** Employed in industrial settings to measure the level of liquids or solids in tanks.
*   **Speed Measurement:** Can be used to measure the speed of vehicles or other objects.
*   **Short-Range Surveillance:** Suitable for applications requiring detection and tracking of targets at relatively short ranges.

### 8. Learning Outcome Alignment

This topic directly addresses the following learning outcomes:

*   **CO3 (Illustrate Radar Fundamentals like Radar Equation and Applications. Knowledge Level: K2):** FM-CW radar is a fundamental radar type, and its operation explains how range and velocity are determined, which are core radar concepts. Its applications are also discussed.
*   **CO4 (Compare various types of Radars and tracking techniques. Knowledge Level: K2):** Understanding FM-CW radar allows for comparison with other radar types like pulsed radar and CW radar, highlighting their respective strengths and weaknesses in terms of range and velocity measurement capabilities.

### 9. Important Points to Remember

*   **Frequency Modulation is Key:** The continuous variation of transmit frequency is what enables range measurement in FM-CW radar.
*   **Beat Frequency is Proportional to Range:** The difference between the transmitted and received frequencies (beat frequency) is directly proportional to the time delay, and thus the range.
*   **Triangular Sweep for Range & Velocity:** A triangular (up-and-down) frequency sweep is essential for separating range and Doppler information.
*   **Lower Power, Continuous Transmission:** FM-CW radars transmit continuously, requiring lower peak power than pulsed radars.
*   **Automotive and Altimeters are Common Applications:** These systems leverage the cost-effectiveness and performance of FM-CW radar.

### 10. Practice Questions and Answers

**Question 1:**
In an FM-CW radar with a triangular frequency sweep, what is the relationship between the beat frequency measured during the up-chirp ($f_{bu}$) and down-chirp ($f_{bd}$), the range frequency ($f_{range}$), and the Doppler frequency ($f_{Doppler}$)?

**Answer:**
During the up-chirp, $f_{bu} = f_{range} + f_{Doppler}$.
During the down-chirp, $f_{bd} = f_{range} - f_{Doppler}$.

**Question 2:**
An FM-CW radar uses a frequency sweep of 20 MHz over a modulation period of 2 ms. If the radar measures a beat frequency of 5 kHz, what is the range of the target? (Assume the speed of light $c = 3 \times 10^8$ m/s).

**Answer:**
We use the formula: $f_b = \frac{\Delta f}{T_m} \frac{2R}{c}$
Rearranging for range $R$: $R = \frac{f_b \cdot T_m \cdot c}{2 \cdot \Delta f}$

Given:
$\Delta f = 20 \text{ MHz} = 20 \times 10^6 \text{ Hz}$
$T_m = 2 \text{ ms} = 2 \times 10^{-3} \text{ s}$
$f_b = 5 \text{ kHz} = 5 \times 10^3 \text{ Hz}$
$c = 3 \times 10^8 \text{ m/s}$

$R = \frac{(5 \times 10^3 \text{ Hz}) \times (2 \times 10^{-3} \text{ s}) \times (3 \times 10^8 \text{ m/s})}{2 \times (20 \times 10^6 \text{ Hz})}$
$R = \frac{30 \times 10^8}{40 \times 10^6} \text{ m}$
$R = \frac{3000}{40} \text{ m}$
$R = 75 \text{ m}$

The range of the target is 75 meters.

**Question 3:**
What is the primary advantage of using a triangular frequency sweep in an FM-CW radar compared to a simple sawtooth sweep?

**Answer:**
The primary advantage of a triangular sweep is its ability to separate range and Doppler information, allowing for simultaneous measurement of both range and velocity. A simple sawtooth sweep makes this separation difficult due to the rapid downward frequency return.

**Question 4:**
Mention two common applications of FM-CW radar.

**Answer:**
Two common applications are:
1.  Automotive radar (for ADAS features)
2.  Aircraft altimeters

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 11. Textbook and Reference Material Integration

*   **Pratt & Allnutt (Satellite Communications):** While this book primarily focuses on satellite communications, it might touch upon general communication principles that could be indirectly related to radar signal processing or modulation techniques if the context involves satellite-based radar systems. However, direct coverage of FM-CW radar principles is unlikely.
*   **Skolnik (Introduction to Radar Systems):** This is a foundational text for radar systems. It extensively covers continuous wave (CW) radar, frequency modulation, and FM-CW radar principles, including waveform analysis, beat frequency generation, and range/velocity determination. Expect detailed explanations and mathematical derivations here.
*   **Ha (Digital Satellite Communications):** Similar to Pratt & Allnutt, this book focuses on satellite systems. Any relevance to FM-CW radar would be in broader communication system design principles.
*   **Pritchard (Satellite Communications Systems Engineering):** Again, a satellite-focused book.
*   **Edde (Radar: Principles, Technology, Applications):** This book provides a broad overview of radar systems. It will likely cover FM-CW radar as one of the fundamental types, explaining its operation, advantages, disadvantages, and applications.
*   **Kinsley & Quegan (Understanding Radar Systems):** This book is an excellent resource for understanding radar fundamentals. It will provide clear explanations of modulation techniques, including FM-CW, and how they are used to extract target information (range and velocity). Expect good coverage of signal processing aspects.

**How content is incorporated:** The notes are structured based on standard radar engineering principles, which are well-documented in Skolnik and Edde. Concepts like beat frequency generation, range calculation from beat frequency, and the use of triangular sweeps for Doppler separation are directly derived from the principles discussed in these radar-specific texts. The applications mentioned are common examples found in general radar literature like Edde.

This comprehensive set of notes covers the core aspects of FM-CW radar, aligning with the learning objectives and providing a solid foundation for understanding this important radar technology.