---
title: "FM-CW altimeter"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8bd"
status: "completed"
scrapedAt: "2026-05-23T19:46:28.881Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 4: CW and Frequency Modulated Radar: Doppler Effect

### Topic: FM-CW Altimeter

---

**Learning Outcomes:**

*   Understand the working principle of an FM-CW altimeter.
*   Explain the role of the Doppler effect in FM-CW radar.
*   Analyze the relationship between beat frequency, altitude, and transmitted frequency in an FM-CW altimeter.
*   Differentiate between FM-CW altimeters and other radar systems.
*   Identify the advantages and limitations of FM-CW altimeters.
*   Relate FM-CW altimeter operation to satellite communication principles where applicable (e.g., for Earth observation or navigation).

---

**Course Outcomes Alignment:**

*   **CO1 (K2):** Understanding the basic principles of how an FM-CW altimeter operates contributes to illustrating satellite communication principles, particularly in the context of remote sensing or onboard navigation for satellites.
*   **CO3 (K2):** The FM-CW altimeter is a specific application of radar principles. Understanding its operation helps illustrate the radar equation (implicitly, as range measurement is a core radar function) and its application in altitude determination.
*   **CO4 (K2):** Comparing the FM-CW altimeter with other radar types, such as pulsed radar, aligns with comparing various types of radars.

---

**Textbook References:**

*   **Satellite Communications by Timothy Pratt, Jeremy Allnutt:** While primarily focused on satellite links, the principles of signal modulation and propagation are relevant. Section on *Modulation Techniques* might offer comparative insights into FM.
*   **Introduction to Radar Systems by Merrill I. Skolnik:** Essential for understanding radar fundamentals. Chapters on *FM Radar* and *Doppler Radar* are directly applicable.

**Reference Book References:**

*   **Digital Satellite Communications by Tri, T.Ha:** May contain information on signal processing techniques applicable to altimeters.
*   **Satellite Communications Systems Engineering by Pritchard:** Similar to Pratt & Allnutt, focus on link budgets and signal integrity, but the underlying wave propagation is shared.
*   **Radar: Principles, Technology, Applications by Byron Edde:** Likely to have detailed explanations of FM-CW radar, its design, and applications.
*   **Understanding Radar Systems by Simon Kinsley and Shaun Quegan:** Excellent resource for conceptual understanding of radar principles, including Doppler and modulation techniques.

---

### 1. Introduction to FM-CW Altimeters

An **FM-CW (Frequency Modulated Continuous Wave) altimeter** is a specialized type of radar used to measure the altitude (height) of an aircraft or spacecraft above the ground or sea. It operates by transmitting a continuous wave (CW) signal whose frequency is swept periodically over a specific bandwidth. By analyzing the frequency difference between the transmitted and received signals, the distance to the target can be determined.

**Key Concepts:**

*   **Continuous Wave (CW) Radar:** Transmits a continuous signal rather than pulses. This simplifies transmitter design but makes range determination challenging without modulation.
*   **Frequency Modulation (FM):** The frequency of the transmitted signal is varied as a function of time.
*   **Altimeter:** A device that measures altitude.

**Purpose:**

*   To provide accurate altitude readings for aircraft, helicopters, and spacecraft.
*   Essential for navigation, landing, and scientific missions (e.g., Earth observation).

---

### 2. Working Principle of FM-CW Radar

The core principle of FM-CW radar for altimetry relies on the **time delay** associated with the signal traveling to the ground and back. Since the transmitted signal's frequency is constantly changing, this time delay results in a frequency difference between the currently transmitted signal and the signal that was transmitted earlier and is now being received.

**Key Components:**

1.  **Transmitter:** Generates the FM-CW signal.
2.  **Antenna:** Transmits the signal and receives the echo.
3.  **Mixer:** Combines the transmitted signal and the received echo.
4.  **Low-Pass Filter (LPF):** Filters out high-frequency components from the mixer output, leaving the beat frequency.
5.  **Frequency Counter/Signal Processor:** Measures the beat frequency.

**The FM Sweep:**

A typical FM-CW altimeter uses a **linear frequency sweep**, often a sawtooth or triangular waveform.

*   **Sawtooth Sweep:** The frequency increases linearly from $f_{start}$ to $f_{stop}$ over a period $T_{sweep}$, then instantly drops back to $f_{start}$.
*   **Triangular Sweep:** The frequency increases linearly, then decreases linearly over the same period $T_{sweep}$, repeating. For altimetry, a sawtooth sweep is more common for simplicity in frequency measurement.

Let's consider a **sawtooth sweep**:

*   Transmitted frequency at time $t$: $f_t(t) = f_{start} + \frac{\Delta f}{T_{sweep}} \cdot t$, where $\Delta f = f_{stop} - f_{start}$ is the sweep bandwidth.
*   The signal transmitted at time $t$ reaches the ground and returns to the altimeter at time $t + \tau$, where $\tau$ is the round-trip time.
*   The received signal is therefore a delayed version of the transmitted signal.
*   The altitude $h$ is related to the round-trip time $\tau$ by: $h = \frac{c \tau}{2}$, where $c$ is the speed of light.
*   The frequency of the transmitted signal when the echo was sent out is $f_t(t + \tau) = f_{start} + \frac{\Delta f}{T_{sweep}} \cdot (t + \tau)$.
*   The altimeter mixes the currently transmitted signal $f_t(t)$ with the received signal $f_r(t+\tau)$. The mixer output contains sum and difference frequencies. The difference frequency, known as the **beat frequency ($f_b$)**, is the one of interest for range measurement.

**Beat Frequency Calculation:**

$f_b = |f_t(t) - f_r(t)|$. Since $f_r(t)$ is the signal transmitted at $t-\tau$, $f_r(t) = f_t(t-\tau)$.

Assuming the mixer mixes the transmitted signal at time $t$ with the received signal that was transmitted at time $t-\tau$ (which is arriving at time $t$):

$f_b = |f_t(t) - f_t(t-\tau)|$

If the sweep is linear and the time delay $\tau$ is small compared to $T_{sweep}$, then the frequency difference can be approximated by the rate of frequency change multiplied by the time delay.

Rate of frequency change = $\frac{\Delta f}{T_{sweep}}$

So, $f_b \approx \frac{\Delta f}{T_{sweep}} \cdot \tau$

Substituting $\tau = \frac{2h}{c}$:

$f_b \approx \frac{\Delta f}{T_{sweep}} \cdot \frac{2h}{c}$

Rearranging to find altitude $h$:

$h \approx \frac{c \cdot T_{sweep}}{2 \Delta f} \cdot f_b$

This equation shows that the beat frequency is directly proportional to the altitude.

**Example:**

Suppose an FM-CW altimeter has:
*   Sweep bandwidth ($\Delta f$) = 100 MHz
*   Sweep time ($T_{sweep}$) = 50 ms = $0.05$ s

If the measured beat frequency ($f_b$) is 10 kHz:

$h \approx \frac{(3 \times 10^8 \text{ m/s}) \cdot (0.05 \text{ s})}{2 \cdot (100 \times 10^6 \text{ Hz})} \cdot (10 \times 10^3 \text{ Hz})$
$h \approx \frac{1.5 \times 10^7}{2 \times 10^8} \cdot 10^4 \text{ m}$
$h \approx 0.075 \cdot 10^4 \text{ m}$
$h \approx 750 \text{ m}$

---

### 3. The Role of Doppler Effect

While the primary mechanism for range measurement in FM-CW radar is the beat frequency due to the frequency sweep, the **Doppler effect** plays a crucial role in distinguishing between stationary and moving targets and in simplifying the measurement for altimeters, especially when the platform is stationary relative to the ground (e.g., a hovering helicopter).

**Doppler Shift for a Moving Target:**

If the platform (e.g., aircraft) is moving with a radial velocity $v_r$ relative to the ground, the received signal will be Doppler shifted. The frequency of the received signal $f_r$ will be:

$f_r = f_t (1 + \frac{2v_r}{c})$ (for transmitted frequency $f_t$ and a simple CW radar)

For an FM-CW radar, the situation is more complex. The Doppler shift is superimposed on the frequency sweep.

*   **Moving Platform:** If the aircraft is moving, the transmitted frequency at the moment the echo was sent out is $f_t(t-\tau) = f_{start} + \frac{\Delta f}{T_{sweep}}(t-\tau)$. The Doppler shift will further modify this. The received signal frequency will be approximately $f_t(t-\tau)(1 + \frac{2v_r}{c})$.
*   **Beat Frequency with Doppler:** When mixed with the transmitted signal $f_t(t)$, the beat frequency will now be a combination of the range-dependent beat frequency ($f_{b,range}$) and the Doppler frequency ($f_d = \frac{2v_r}{\lambda}$, where $\lambda$ is the wavelength).
    *   $f_{b,total} \approx f_{b,range} \pm f_d$ (The sign depends on whether the platform is moving towards or away from the target).

**How Doppler is Handled/Utilized in FM-CW Altimeters:**

1.  **Distinguishing Range and Velocity:** With a simple sawtooth sweep, a single beat frequency is observed. If the platform is moving, this beat frequency is a sum or difference of the range beat frequency and the Doppler frequency. To separate these, more sophisticated techniques are used:
    *   **Triangular Sweep:** Using a triangular sweep (frequency increases then decreases) allows for separation. For a rising sweep, $f_b = f_{b,range} + f_d$. For a falling sweep, $f_b = f_{b,range} - f_d$. By measuring $f_b$ during both sweeps, both $f_{b,range}$ and $f_d$ can be determined.
    *   **Multiple Frequencies/Sweeps:** Using different sweep rates or transmitting at different carrier frequencies can also help resolve the ambiguity.

2.  **Zero Doppler Assumption (for static platforms):** For applications where the platform is expected to be stationary relative to the ground (e.g., a radar altimeter on a stationary platform or a helicopter hovering), the Doppler shift is zero ($v_r = 0$). In this case, the beat frequency is solely due to the range: $f_b = f_{b,range}$. This simplifies the calculation significantly.

**Key Point:** For a typical airborne altimeter, the ground is generally stationary relative to the aircraft's altitude. Therefore, the Doppler shift due to the target (ground) is zero. However, if the *aircraft itself* has a vertical velocity, this *platform velocity* will induce a Doppler shift.

*   **Pratt & Allnutt:** Might discuss how modulation techniques are used to overcome limitations of CW radar, including range ambiguity.
*   **Skolnik:** Likely provides detailed mathematical treatments of Doppler effects in FM radar and methods for separating range and velocity information.

---

### 4. FM-CW Altimeters vs. Other Radar Systems

**Comparison with Pulsed Radar Altimeters:**

| Feature               | FM-CW Altimeter                                     | Pulsed Radar Altimeter                                      |
| :-------------------- | :-------------------------------------------------- | :---------------------------------------------------------- |
| **Transmission**      | Continuous Wave (CW) with frequency sweep           | Short pulses of high power                                  |
| **Principle**         | Beat frequency proportional to range                | Time delay of pulse echo proportional to range              |
| **Complexity**        | Simpler transmitter, complex mixer/frequency detection | Complex high-power pulsed transmitter, simpler receiver       |
| **Power Efficiency**  | Generally more power-efficient (lower peak power)   | Requires high peak power, but average power can be low      |
| **Range Measurement** | Beat frequency ($f_b$)                               | Pulse transit time ($\tau$)                                 |
| **Altitude Range**    | Limited by sweep bandwidth and frequency measurement | Can measure very large ranges, but altimetry usually short-range |
| **Doppler Effect**    | Can be used to determine velocity, or suppressed    | Naturally provides Doppler information for velocity          |
| **Applications**      | Low-altitude measurements (aircraft, spacecraft)    | Aircraft altimetry, weather radar, military applications    |

**Comparison with Simple CW Radar:**

*   **Simple CW Radar:** Transmits a single, constant frequency. It is excellent for detecting moving targets (Doppler effect) but cannot directly measure range without additional modulation or multiple antennas.
*   **FM-CW Radar:** Adds frequency modulation to the CW signal. This modulation allows for range determination by creating a measurable frequency difference between transmitted and received signals, even for stationary targets.

**Comparison with Pulsed-Doppler Radar:**

*   **Pulsed-Doppler Radar:** Combines pulsing for range and Doppler for velocity. It measures both by analyzing the time delay and frequency shift of returning pulses.
*   **FM-CW Radar:** Achieves range measurement via frequency difference and can infer velocity through Doppler shift or specific sweep techniques. It's often favored for its simplicity in transmitter design for altimetry tasks where precise velocity measurement might be secondary.

---

### 5. Advantages and Limitations of FM-CW Altimeters

**Advantages:**

*   **Simpler Transmitter Design:** No need for high-power pulsed modulators, making it more compact and potentially less expensive.
*   **Higher Average Power:** Can transmit more average power for a given peak power, leading to better signal-to-noise ratio (SNR) for a given expenditure of power.
*   **Continuous Operation:** Operates continuously, allowing for constant altitude monitoring.
*   **Good Resolution at Low Altitudes:** Can achieve good altitude resolution at low altitudes.
*   **Doppler Information (with advanced techniques):** Can be used to estimate vertical velocity if needed.

**Limitations:**

*   **Ambiguity in Range/Velocity:** With simple sawtooth sweeps, distinguishing range and velocity can be problematic if the platform is moving. Triangular sweeps or other methods are required.
*   **Limited by Sweep Bandwidth:** The maximum altitude that can be unambiguously measured is related to the sweep bandwidth and the rate of sweep. A larger bandwidth $\Delta f$ generally allows for measurement of larger ranges.
*   **Doppler Effect for Platform Motion:** If the platform has significant vertical motion, it can affect the measured beat frequency and require compensation or more complex processing.
*   **Ground Clutter:** At very low altitudes, signals reflected from nearby terrain features (ground clutter) can interfere with the desired echo from the nadir (directly below).

---

### 6. FM-CW Altimeters in Satellite Communication Contexts

While primarily a radar technique for aircraft, FM-CW principles can be extended or conceptually related to satellite applications:

*   **Earth Observation Satellites:** Radar altimeters are a key instrument on many Earth observation satellites (e.g., TOPEX/Poseidon, Jason series, Sentinel-3). These satellite altimeters use **pulsed radar**, not FM-CW, to measure sea surface height, ice sheet elevation, and land topography. However, the fundamental concept of measuring distance via electromagnetic waves is shared. Understanding FM-CW helps appreciate the variety of radar approaches.
*   **Satellite Navigation:** For precise positioning of satellites or for providing altitude information for landers or orbiting spacecraft relative to planetary surfaces, radar techniques are employed. While not always FM-CW, the principles of frequency modulation and Doppler shift are fundamental to many modern navigation and ranging systems.
*   **Onboard Systems:** Smaller, lighter FM-CW radar systems could potentially be used for proximity sensing or docking maneuvers for satellites or space debris tracking.
*   **Link Budget Considerations:** While not directly FM-CW, understanding the signal propagation and modulation characteristics, as covered in **Pratt & Allnutt** and **Pritchard**, is crucial for designing any radar or communication system, including those used by satellites. The efficiency of the modulation scheme affects the overall link budget.

**Relevance to CO1 (Illustrate the principles of satellite communication):**

By understanding how FM-CW altimeters use modulation and frequency analysis to determine distance, students can draw parallels to how satellites use various modulation schemes (like FM, PSK, QAM) and signal processing techniques to transmit and receive information reliably over vast distances. The concept of signal delay and its effect on communication is universal.

---

### 7. Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain the fundamental difference in how a simple CW radar and an FM-CW radar measure range.
**Answer:** Simple CW radar relies on the Doppler frequency shift caused by a moving target for detection, but cannot directly measure range. FM-CW radar modulates the transmitted frequency and measures the frequency difference (beat frequency) between the transmitted and received signals, which is directly proportional to the time delay and thus the range.

**Question 2 (Calculation):**
An aircraft is using an FM-CW altimeter with a linear sawtooth sweep from 4.2 GHz to 4.3 GHz over a period of 100 ms. If the altimeter measures a beat frequency of 20 kHz, what is the altitude of the aircraft above the ground? (Speed of light, c = $3 \times 10^8$ m/s)
**Answer:**
*   Sweep bandwidth ($\Delta f$) = 4.3 GHz - 4.2 GHz = 100 MHz = $100 \times 10^6$ Hz
*   Sweep time ($T_{sweep}$) = 100 ms = $0.1$ s
*   Beat frequency ($f_b$) = 20 kHz = $20 \times 10^3$ Hz
*   Formula: $h \approx \frac{c \cdot T_{sweep}}{2 \Delta f} \cdot f_b$
*   $h \approx \frac{(3 \times 10^8 \text{ m/s}) \cdot (0.1 \text{ s})}{2 \cdot (100 \times 10^6 \text{ Hz})} \cdot (20 \times 10^3 \text{ Hz})$
*   $h \approx \frac{3 \times 10^7}{2 \times 10^8} \cdot 20 \times 10^3 \text{ m}$
*   $h \approx 0.15 \cdot 20 \times 10^3 \text{ m}$
*   $h \approx 3000 \text{ m}$

**Question 3 (Comparison):**
Compare the advantages of an FM-CW altimeter over a pulsed radar altimeter for low-altitude operations.
**Answer:** FM-CW altimeters generally have simpler transmitter designs (no high-power pulse modulator required), leading to smaller and lighter systems. They can operate with higher average power for a given peak power, potentially improving SNR. Their continuous transmission is also beneficial for constant monitoring.

**Question 4 (Doppler Consideration):**
If an aircraft is descending at a vertical velocity of 10 m/s, how would this affect the measured beat frequency in an FM-CW altimeter using a sawtooth sweep? Assume the Doppler shift adds to the beat frequency.
**Answer:** The vertical velocity of the aircraft will introduce a Doppler shift ($f_d$). If the aircraft is descending, the relative velocity of the ground with respect to the aircraft is positive (if positive velocity means moving away), or negative (if positive velocity means moving towards). Let's assume positive velocity means moving away for the ground echo. The Doppler shift is $f_d = \frac{2v_r}{\lambda}$. The wavelength $\lambda = \frac{c}{f_c}$, where $f_c$ is the carrier frequency (e.g., around 4.2 GHz).
$f_d = \frac{2 v_r f_c}{c}$.
If the aircraft is descending at 10 m/s, the ground is effectively moving *away* from the aircraft at 10 m/s. So $v_r = 10$ m/s.
If carrier frequency is $f_c = 4.2$ GHz:
$f_d = \frac{2 \times 10 \text{ m/s} \times 4.2 \times 10^9 \text{ Hz}}{3 \times 10^8 \text{ m/s}} = \frac{84 \times 10^9}{3 \times 10^8} \text{ Hz} = 280 \text{ Hz}$.
The measured beat frequency would be the sum of the range-dependent beat frequency and this Doppler frequency: $f_{b,measured} = f_{b,range} + f_d$. This would lead to an erroneous altitude calculation if the Doppler shift is not accounted for.

---

### 8. Important Points to Remember

*   **FM-CW Altimeters measure altitude by converting time delay into a frequency difference (beat frequency).**
*   **The beat frequency is linearly proportional to altitude for a linear frequency sweep.**
*   **Key formula:** $h \approx \frac{c \cdot T_{sweep}}{2 \Delta f} \cdot f_b$.
*   **Doppler effect can be present due to the platform's velocity, complicating range measurement if not handled.**
*   **Triangular sweeps are often used in FM-CW radar to separate range and velocity information.**
*   **Simpler transmitter design is a major advantage over pulsed radar for altimetry.**
*   **Satellite altimeters typically use pulsed radar, but the underlying principle of distance measurement is shared.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
