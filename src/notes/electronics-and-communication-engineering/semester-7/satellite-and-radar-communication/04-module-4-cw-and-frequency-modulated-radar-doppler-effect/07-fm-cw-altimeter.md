---
title: "FM-CW altimeter"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff333"
status: "completed"
scrapedAt: "2026-05-23T18:11:00.590Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 4: CW and Frequency Modulated Radar: Doppler Effect

### Topic: FM-CW Altimeter

---

**Table of Contents:**

1.  Introduction to Altimetry
2.  FM-CW Radar Principle
3.  FM-CW Altimeter Operation
    *   Frequency Sweep
    *   Beat Frequency Generation
    *   Altitude Calculation
4.  Advantages of FM-CW Altimeters
5.  Disadvantages of FM-CW Altimeters
6.  Key Concepts and Definitions
7.  Examples
8.  Practice Questions and Answers
9.  Important Points to Remember
10. Textbook and Reference Material Integration

---

### 1. Introduction to Altimetry

Altimetry is the measurement of altitude, which is the height of an object above a reference surface. In the context of radar, altimetry specifically refers to determining the height of an aircraft or spacecraft above the ground or sea surface. This information is crucial for:

*   **Navigation:** Ensuring safe flight altitudes.
*   **Landing:** Precise altitude control during approach.
*   **Mapping:** Terrain profiling and surface studies.
*   **Scientific research:** Measuring ice sheet thickness, vegetation height, etc.

Altimeters can be broadly classified into two categories:

*   **Barometric Altimeters:** Measure atmospheric pressure, which decreases with altitude. These are susceptible to atmospheric conditions.
*   **Radio Altimeters:** Use radio waves to measure the distance to the ground. These provide more accurate readings, especially at low altitudes.

This module focuses on **Radio Altimeters**, specifically the **FM-CW (Frequency Modulated Continuous Wave) Altimeter**.

---

### 2. FM-CW Radar Principle

FM-CW radar utilizes a continuous wave (CW) transmitter whose frequency is varied linearly with time. This frequency modulation (FM) allows for both ranging and Doppler measurements.

**Key Principles:**

*   **Continuous Wave (CW) Transmission:** Unlike pulsed radar which transmits short bursts, CW radar transmits a continuous signal. This simplifies the transmitter design but presents a challenge in distinguishing between transmitted and received signals directly.
*   **Frequency Modulation (FM):** The transmitted signal's frequency is changed in a predictable way, typically in a triangular or sawtooth waveform over time.
*   **Doppler Effect:** The frequency of the received signal (from a moving target) will be shifted due to the Doppler effect. This shift is proportional to the target's radial velocity.
*   **Beat Frequency:** By mixing the transmitted signal with the received signal, a "beat frequency" is generated. This beat frequency contains information about both the range and the Doppler shift.

---

### 3. FM-CW Altimeter Operation

An FM-CW altimeter is specifically designed to measure the altitude of an aircraft above the terrain. It typically operates at **low altitudes** (from a few feet to a few thousand feet) where precise height measurement is critical.

#### 3.1 Frequency Sweep

The core of the FM-CW altimeter's operation lies in its frequency modulation scheme. A common approach is to use a **triangular frequency sweep**.

*   **Up-sweep:** The transmitter frequency increases linearly from a starting frequency ($f_0$) to an ending frequency ($f_0 + \Delta f$) over a period $T/2$.
*   **Down-sweep:** The transmitter frequency decreases linearly from ($f_0 + \Delta f$) back to $f_0$ over the next period $T/2$.

The total sweep period is $T$. The bandwidth of the sweep is $\Delta f$.

**Important Note:** The frequency of the transmitted signal at any given time $t$ can be represented as:

*   **During Up-sweep (0 to $T/2$):** $f_t(t) = f_0 + \frac{\Delta f}{T/2} t = f_0 + \frac{2 \Delta f}{T} t$
*   **During Down-sweep ($T/2$ to $T$):** $f_t(t) = f_0 + \Delta f - \frac{\Delta f}{T/2} (t - T/2) = f_0 + \Delta f - \frac{2 \Delta f}{T} (t - T/2)$

Where:
*   $f_0$ is the center frequency.
*   $\Delta f$ is the peak frequency deviation.
*   $T$ is the sweep period.

#### 3.2 Beat Frequency Generation

The altimeter transmits this modulated signal downwards. The signal reflects off the ground and is received by the altimeter.

*   **Transmission:** The transmitted signal has a frequency $f_t(t)$.
*   **Reception:** The reflected signal, due to the travel time ($t_r$) to the ground and back, will have a frequency corresponding to the transmitted frequency at an earlier time $(t - t_r)$. However, for simplicity in FM-CW, we consider the frequency difference due to the time delay.

Let $h$ be the altitude and $c$ be the speed of light. The time taken for the signal to travel to the ground and back is $t_r = \frac{2h}{c}$.

When the transmitted and received signals are mixed in a mixer, a beat frequency ($f_b$) is generated. This beat frequency is the difference between the instantaneous transmitted frequency and the received frequency.

**During Up-sweep:**
The transmitted frequency at time $t$ is $f_t(t) = f_0 + \frac{2 \Delta f}{T} t$.
The received signal is the transmitted signal from time $(t - t_r)$.
The frequency of the received signal is $f_r(t) = f_t(t - t_r) = f_0 + \frac{2 \Delta f}{T} (t - t_r)$.

The beat frequency is $f_b = f_t(t) - f_r(t) = (f_0 + \frac{2 \Delta f}{T} t) - (f_0 + \frac{2 \Delta f}{T} (t - t_r)) = \frac{2 \Delta f}{T} t_r$.

Substituting $t_r = \frac{2h}{c}$:
$f_b = \frac{2 \Delta f}{T} \left(\frac{2h}{c}\right) = \frac{4 \Delta f h}{cT}$

**During Down-sweep:**
The transmitted frequency at time $t$ is $f_t(t) = f_0 + \Delta f - \frac{2 \Delta f}{T} (t - T/2)$.
The received signal is the transmitted signal from time $(t - t_r)$.
The frequency of the received signal is $f_r(t) = f_t(t - t_r) = f_0 + \Delta f - \frac{2 \Delta f}{T} ((t - t_r) - T/2)$.

The beat frequency is $f_b = f_t(t) - f_r(t) = (f_0 + \Delta f - \frac{2 \Delta f}{T} (t - T/2)) - (f_0 + \Delta f - \frac{2 \Delta f}{T} ((t - t_r) - T/2))$
$f_b = \frac{2 \Delta f}{T} (t - T/2) - \frac{2 \Delta f}{T} ((t - t_r) - T/2) = \frac{2 \Delta f}{T} t_r$.

Again, substituting $t_r = \frac{2h}{c}$:
$f_b = \frac{2 \Delta f}{T} \left(\frac{2h}{c}\right) = \frac{4 \Delta f h}{cT}$

**Observation:** The beat frequency ($f_b$) is constant during the up-sweep and down-sweep periods, and it is directly proportional to the altitude $h$.

**Crucial Insight from Skolnik (2nd Ed., Ch. 3):** For a linearly swept FM signal, the beat frequency is directly proportional to the range (or altitude in this case). This is a fundamental principle for FM ranging.

#### 3.3 Altitude Calculation

From the derived beat frequency equation:
$f_b = \frac{4 \Delta f h}{cT}$

We can rearrange this equation to solve for altitude $h$:

$$ h = \frac{c T f_b}{4 \Delta f} $$

This equation shows that if we know the sweep parameters ($c$, $T$, $\Delta f$) and can measure the beat frequency ($f_b$), we can directly calculate the altitude.

**Role of Doppler:**

If the aircraft is moving, the received signal will also experience a Doppler shift, $f_d = \frac{2 v_r}{\lambda}$, where $v_r$ is the radial velocity.

*   During the up-sweep, the beat frequency will be $f_{b,up} = f_b + f_d$.
*   During the down-sweep, the beat frequency will be $f_{b,down} = f_b - f_d$.

By measuring both $f_{b,up}$ and $f_{b,down}$, we can determine both the altitude ($h$) and the radial velocity ($v_r$):

*   $f_b = \frac{f_{b,up} + f_{b,down}}{2}$ (This gives the altitude, as the Doppler shift cancels out)
*   $f_d = \frac{f_{b,up} - f_{b,down}}{2}$ (This gives the Doppler shift, which can be used to calculate velocity)

This dual-sweep capability makes FM-CW radar particularly useful for altimeters, as it can simultaneously provide altitude and ground speed information.

**Pratt & Allnutt (3rd Ed., Ch. 10):** While their primary focus is satellite communication, they often discuss radar principles. They would likely frame this in terms of ranging by frequency difference, highlighting the linearity of the modulation and the resulting proportional beat frequency.

---

### 4. Advantages of FM-CW Altimeters

*   **Simplicity:** Compared to pulsed altimeters, FM-CW altimeters can be simpler in design, particularly the transmitter and receiver.
*   **Low Transmitter Power:** Continuous transmission means lower peak power is required compared to pulsed radar for the same average power, leading to reduced power consumption.
*   **High Range Resolution:** The range resolution ($\Delta R$) of an FM-CW radar is given by $\Delta R = \frac{c}{2 \Delta f}$. A larger bandwidth ($\Delta f$) leads to better range resolution, allowing for precise altitude measurements.
*   **Simultaneous Velocity Measurement:** As discussed, the dual-sweep FM technique allows for the measurement of both altitude and radial velocity.
*   **Effective at Low Altitudes:** They are well-suited for precise altitude measurements close to the ground, where terrain features are important.

---

### 5. Disadvantages of FM-CW Altimeters

*   **Doppler Interference (for simple CW):** In a basic CW radar without frequency modulation, the transmitter and receiver are at the same frequency, making it difficult to separate the strong transmitted signal from the weak received signal. This is overcome by FM.
*   **Ambiguity:** For complex terrain or situations with multiple reflectors, distinguishing the primary ground return from clutter can be challenging.
*   **Sensitivity to Side Lobes:** If the antenna's side lobes illuminate other objects or the sky, false readings can occur.
*   **Limited Maximum Altitude:** The required sweep bandwidth and the achievable beat frequencies limit the maximum altitude that can be accurately measured. The range is directly proportional to $1/\Delta f$.

---

### 6. Key Concepts and Definitions

*   **Altimetry:** The measurement of altitude.
*   **Radio Altimeter:** An altimeter that uses radio waves to measure altitude.
*   **FM-CW Radar:** Frequency Modulated Continuous Wave Radar. A radar system that transmits a continuous wave signal whose frequency is varied linearly with time.
*   **Frequency Sweep:** The process of changing the transmitted signal's frequency over a specific range.
*   **Up-sweep:** The period during which the transmitter frequency increases linearly.
*   **Down-sweep:** The period during which the transmitter frequency decreases linearly.
*   **Beat Frequency ($f_b$):** The frequency resulting from the mixing of the transmitted and received signals. It is the difference between the instantaneous frequencies of these two signals.
*   **Range Resolution ($\Delta R$):** The minimum separation in range between two targets that can be distinguished as separate. For FM-CW radar, $\Delta R = \frac{c}{2 \Delta f}$.
*   **Doppler Shift ($f_d$):** The change in frequency of the received signal due to the relative motion between the transmitter/receiver and the target. $f_d = \frac{2 v_r}{\lambda}$.
*   **Mixer:** A non-linear circuit that takes two input signals and produces output signals at the sum and difference frequencies of the inputs.

---

### 7. Examples

**Example 1: Calculating Altitude**

An aircraft is using an FM-CW altimeter. The radar parameters are:
*   Sweep bandwidth ($\Delta f$) = 200 MHz = $200 \times 10^6$ Hz
*   Sweep period ($T$) = 2 ms = $2 \times 10^{-3}$ s
*   Measured beat frequency ($f_b$) = 10 kHz = $10 \times 10^3$ Hz
*   Speed of light ($c$) = $3 \times 10^8$ m/s

Calculate the altitude of the aircraft.

**Solution:**
Using the formula: $h = \frac{c T f_b}{4 \Delta f}$

$h = \frac{(3 \times 10^8 \text{ m/s}) \times (2 \times 10^{-3} \text{ s}) \times (10 \times 10^3 \text{ Hz})}{4 \times (200 \times 10^6 \text{ Hz})}$
$h = \frac{6 \times 10^6 \times 10 \times 10^3}{800 \times 10^6}$
$h = \frac{60 \times 10^9}{800 \times 10^6}$
$h = \frac{60 \times 10^3}{800}$
$h = \frac{60000}{800}$
$h = 75$ meters

The altitude of the aircraft is 75 meters.

**Example 2: Range Resolution**

Using the same FM-CW altimeter parameters from Example 1, calculate the range resolution.

**Solution:**
Using the formula: $\Delta R = \frac{c}{2 \Delta f}$

$\Delta R = \frac{3 \times 10^8 \text{ m/s}}{2 \times (200 \times 10^6 \text{ Hz})}$
$\Delta R = \frac{3 \times 10^8}{400 \times 10^6}$
$\Delta R = \frac{300 \times 10^6}{400 \times 10^6}$
$\Delta R = \frac{300}{400}$
$\Delta R = 0.75$ meters

The range resolution of the altimeter is 0.75 meters, meaning it can distinguish between two objects on the ground that are at least 0.75 meters apart in range.

---

### 8. Practice Questions and Answers

**Question 1:**
What is the primary purpose of frequency modulation in an FM-CW altimeter?
a) To increase the transmitted power
b) To measure the Doppler shift
c) To generate a beat frequency proportional to altitude
d) To reduce interference from other radar systems

**Answer 1:** c) To generate a beat frequency proportional to altitude. While it helps in distinguishing signals (overcoming CW limitations) and can be used for Doppler, its core function for ranging is the beat frequency.

**Question 2:**
If an FM-CW altimeter has a sweep bandwidth of 100 MHz and its sweep period is 1 ms, what is the minimum altitude it can measure if the maximum measurable beat frequency is 10 kHz? (Assume $c = 3 \times 10^8$ m/s)

**Answer 2:**
The minimum altitude corresponds to the maximum measurable beat frequency.
$h_{min} = \frac{c T f_{b,max}}{4 \Delta f}$
$h_{min} = \frac{(3 \times 10^8 \text{ m/s}) \times (1 \times 10^{-3} \text{ s}) \times (10 \times 10^3 \text{ Hz})}{4 \times (100 \times 10^6 \text{ Hz})}$
$h_{min} = \frac{3 \times 10^5 \times 10 \times 10^3}{400 \times 10^6}$
$h_{min} = \frac{30 \times 10^8}{400 \times 10^6}$
$h_{min} = \frac{3000 \times 10^6}{400 \times 10^6} = \frac{3000}{400} = 7.5$ meters

**Question 3:**
What is the range resolution of an FM-CW radar with a sweep bandwidth of 50 MHz?

**Answer 3:**
$\Delta R = \frac{c}{2 \Delta f} = \frac{3 \times 10^8 \text{ m/s}}{2 \times (50 \times 10^6 \text{ Hz})} = \frac{3 \times 10^8}{100 \times 10^6} = \frac{300 \times 10^6}{100 \times 10^6} = 3$ meters

**Question 4:**
Explain how the Doppler effect can be utilized in an FM-CW altimeter that uses a dual-frequency sweep (up and down).

**Answer 4:**
In an FM-CW altimeter with a dual-frequency sweep (up-sweep and down-sweep), the Doppler shift from the moving aircraft adds to the beat frequency during the up-sweep and subtracts during the down-sweep. By measuring the beat frequencies during both sweeps ($f_{b,up}$ and $f_{b,down}$), the average can be taken to determine the true altitude-dependent beat frequency ($f_b = (f_{b,up} + f_{b,down})/2$), effectively cancelling out the Doppler effect. The difference between the two beat frequencies ($f_{b,up} - f_{b,down}$) is twice the Doppler shift, allowing for the calculation of the aircraft's radial velocity.

---

### 9. Important Points to Remember

*   **FM-CW is a ranging technique:** It uses frequency modulation to establish a relationship between beat frequency and distance.
*   **Beat frequency is key:** The beat frequency ($f_b$) is directly proportional to altitude ($h$).
*   **Triangular sweep is common:** Allows for simultaneous altitude and velocity measurement.
*   **Altitude formula:** $h = \frac{c T f_b}{4 \Delta f}$ (for a triangular sweep).
*   **Range resolution depends on bandwidth:** $\Delta R = \frac{c}{2 \Delta f}$. Wider bandwidth means better resolution.
*   **Low altitude operation:** FM-CW altimeters are most effective at relatively low altitudes.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. Textbook and Reference Material Integration

This topic draws upon fundamental radar principles discussed in the referenced texts.

*   **Skolnik, "Introduction to Radar Systems" (2nd Ed.):** Chapter 3 on CW and Pulse Doppler Radar systems will extensively cover the principles of FM radar, frequency sweeps, beat frequency generation, and the relationship between beat frequency and range. The concept of using the Doppler effect for velocity measurement is also a core part of this chapter. The derivation of the beat frequency formula for FM radar is likely found here.
*   **Pratt & Allnutt, "Satellite Communications" (3rd Ed.):** While primarily focused on satellite systems, these texts often include introductory or comparative sections on radar. They might mention FM-CW principles as a basis for understanding signal processing and modulation techniques used in communication and sensing systems. The context would be broader principles of RF signal modulation and detection.
*   **Edde, "Radar: Principles, Technology, Applications" (1st Ed.):** This book would provide practical insights into radar system design and applications. It would elaborate on the specific implementation of FM-CW altimeters, including antenna design, waveform generation, and signal processing for altimetry.
*   **Kinsley & Quegan, "Understanding Radar Systems" (1st Ed.):** Similar to Edde, this book would offer a comprehensive understanding of radar system components and signal processing. It would detail the mathematical underpinnings of FM-CW radar and its performance characteristics.

**Alignment with Course Outcomes:**

*   **CO1 (Illustrate principles of satellite communication):** While this topic is radar-specific, understanding modulation and signal processing in FM-CW radar can provide a foundational understanding of modulation techniques used in satellite communication (e.g., frequency modulation for bandwidth efficiency).
*   **CO2 (Design and analysis of satellite link):** This module's content on signal properties, modulation, and frequency manipulation in radar systems provides transferable knowledge for analyzing signal transmission and reception in satellite links, especially regarding signal bandwidth and frequency characteristics.
*   **CO3 (Illustrate Radar Fundamentals like Radar Equation and Applications):** This topic directly addresses radar fundamentals by explaining a specific type of radar (FM-CW) and its application (altimetry). It delves into the operational principles that allow it to measure altitude.
*   **CO4 (Compare various types of Radars and tracking techniques):** By studying FM-CW radar, students gain knowledge of one specific type, which can be compared to other radar types (like pulsed radar) discussed in other modules, highlighting differences in their operating principles, advantages, and disadvantages.

---