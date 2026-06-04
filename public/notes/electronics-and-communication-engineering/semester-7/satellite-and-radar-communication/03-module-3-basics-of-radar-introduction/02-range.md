---
title: "Range"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 3: Basics of Radar: Introduction"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff323"
status: "completed"
scrapedAt: "2026-05-23T18:10:48.365Z"
---
# Module 3: Basics of Radar: Introduction - Topic: Range

## Introduction to Radar Systems

This module introduces the fundamental principles of radar systems, with a particular focus on understanding how radar determines the **range** to a target. This knowledge is crucial for various applications, from weather forecasting and air traffic control to military surveillance and navigation.

## Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Define** the concept of range in radar systems.
*   **Explain** the principles of range measurement using pulsed radar.
*   **Derive** the basic radar range equation relating range to measured parameters.
*   **Discuss** factors affecting radar range and methods to improve it.
*   **Identify** different types of radar based on their range measurement capabilities.

## Course Outcomes Alignment

This topic directly contributes to:

*   **CO3: Illustrate Radar Fundamentals like Radar Equation and Applications. (Knowledge Level: K2)**
    *   Understanding range is a fundamental radar concept and a key component in the radar equation.

## Key Concepts and Definitions

### What is Radar?

**Radar (Radio Detection and Ranging)** is a detection system that uses radio waves to determine the range, angle, or velocity of objects.

### Range

**Range** is defined as the distance between the radar antenna and the target. It is the most fundamental parameter that radar systems measure.

### Principle of Range Measurement (Pulsed Radar)

The most common method for determining range in radar is by using **pulsed radar**. The core principle relies on the following steps:

1.  **Transmission of a Pulse:** The radar transmits a short burst of electromagnetic energy (a radio pulse) towards the target.
2.  **Pulse Travel Time:** The pulse travels through the medium (e.g., air) at the speed of light.
3.  **Reflection from Target:** A portion of the transmitted pulse is reflected by the target back towards the radar antenna.
4.  **Reception of Echo:** The radar antenna receives the reflected pulse (echo).
5.  **Time Measurement:** The radar system measures the time elapsed ($\Delta t$) between the transmission of the pulse and the reception of the echo.

**Key Equation:**
Since the pulse travels to the target and back, the total distance traveled by the pulse is twice the range ($2R$).

$$ 2R = c \times \Delta t $$

where:
*   $R$ is the range to the target (in meters)
*   $c$ is the speed of light (approximately $3 \times 10^8$ meters per second)
*   $\Delta t$ is the time delay between transmission and reception (in seconds)

**Therefore, the range can be calculated as:**

$$ R = \frac{c \times \Delta t}{2} $$

**Example:**
If a radar detects an echo $\Delta t = 20 \mu s$ (microseconds) later, the range to the target is:

$$ R = \frac{(3 \times 10^8 \text{ m/s}) \times (20 \times 10^{-6} \text{ s})}{2} $$
$$ R = \frac{6000 \text{ m}}{2} = 3000 \text{ meters} = 3 \text{ km} $$

### Range Resolution

**Range resolution** is the ability of a radar system to distinguish between two closely spaced targets on the same bearing. It is primarily determined by the **pulse width** of the transmitted pulse.

*   **Shorter pulse width** leads to **better range resolution**.
*   If two targets are separated by a distance less than half the pulse width, the radar may not be able to distinguish them as separate targets.

**Key Formula:**
The minimum range resolution ($\Delta R$) is approximately half the pulse width:

$$ \Delta R \approx \frac{c \times \tau}{2} $$

where:
*   $\tau$ is the pulse width (in seconds)

**Example:**
A radar with a pulse width of $1 \mu s$ ($1 \times 10^{-6}$ s) has a range resolution of:

$$ \Delta R \approx \frac{(3 \times 10^8 \text{ m/s}) \times (1 \times 10^{-6} \text{ s})}{2} = \frac{300 \text{ m}}{2} = 150 \text{ meters} $$

This means the radar can distinguish two targets if they are at least 150 meters apart in range.

### Maximum Range of Radar

The maximum range at which a radar can detect a target is determined by several factors, most notably the **Pulse Repetition Frequency (PRF)** and the **echo signal strength**.

#### Maximum Unambiguous Range (Pulsed Radar)

In pulsed radar, there is a limitation on the maximum range that can be measured without ambiguity. This is because the radar transmits pulses at a specific rate, known as the **Pulse Repetition Frequency (PRF)**.

*   **Pulse Repetition Interval (PRI):** The time between the start of one pulse and the start of the next pulse. $PRI = 1/PRF$.
*   **Maximum Unambiguous Range ($R_{max}$):** The maximum range at which a target can be detected without ambiguity. If a target is further away than this range, its echo might arrive after the next pulse has been transmitted, making it appear as if it's a closer target from a subsequent pulse.

The maximum unambiguous range is determined by the time it takes for a pulse to travel to the furthest possible unambiguous target and return, which is equal to the PRI.

$$ 2R_{max} = c \times PRI $$

$$ R_{max} = \frac{c \times PRI}{2} = \frac{c}{2 \times PRF} $$

**Example:**
A radar with a PRF of 1000 Hz (pulses per second) has a PRI of $1/1000 = 1 ms$.
The maximum unambiguous range is:

$$ R_{max} = \frac{(3 \times 10^8 \text{ m/s}) \times (1 \times 10^{-3} \text{ s})}{2} = \frac{300,000 \text{ m}}{2} = 150,000 \text{ meters} = 150 \text{ km} $$

**Important Note on Ambiguity:**
If a target is at a range $R > R_{max}$, its echo will arrive after the next pulse has been transmitted. This echo will be interpreted by the radar as originating from a closer target, belonging to the next transmission. This is known as **range ambiguity**.

### Factors Affecting Radar Range

Several factors influence the maximum detection range of a radar system:

1.  **Transmitter Power ($P_t$):** Higher transmitter power leads to stronger transmitted signal, resulting in stronger echoes and thus longer range. (As seen in the radar equation).
2.  **Antenna Gain ($G$):** A directive antenna focuses the transmitted energy and collects echoes more efficiently, increasing range.
3.  **Radar Cross-Section (RCS or $\sigma$):** The size and reflectivity of the target significantly affect the strength of the echo. Larger, more reflective targets provide stronger echoes.
4.  **Wavelength ($\lambda$):** Affects antenna gain and atmospheric absorption.
5.  **Receiver Sensitivity ($S_{min}$):** The minimum signal power the receiver can detect. A more sensitive receiver can detect weaker echoes from distant targets.
6.  **System Losses ($L$):** Losses in the transmission line, antenna, and atmospheric absorption reduce the signal strength.
7.  **Pulse Repetition Frequency (PRF):** Determines the maximum unambiguous range. Lower PRF allows for greater unambiguous range but reduces the probability of detecting targets at shorter ranges with multiple echoes.
8.  **Pulse Width ($\tau$):** Affects range resolution and the energy transmitted per pulse. Longer pulse widths carry more energy but degrade resolution.
9.  **Clutter:** Unwanted echoes from the ground, sea, rain, or other objects can mask the desired target echoes.
10. **Atmospheric Conditions:** Absorption and scattering by rain, fog, and other atmospheric phenomena can attenuate the radar signal, reducing range.

### The Radar Range Equation (Simplified)

The **Radar Range Equation** is a fundamental formula that relates the maximum range of a radar to its parameters and the target's characteristics. A simplified form for pulsed radar is:

$$ R_{max}^4 = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{min} L} $$

where:
*   $R_{max}$ is the maximum range (in meters)
*   $P_t$ is the peak transmitted power (in watts)
*   $G$ is the antenna gain (dimensionless)
*   $\lambda$ is the wavelength of the transmitted signal (in meters)
*   $\sigma$ is the radar cross-section of the target (in square meters)
*   $S_{min}$ is the minimum detectable signal power by the receiver (in watts)
*   $L$ represents all system losses (dimensionless, $L \ge 1$)

**Key Insights from the Radar Range Equation:**

*   **Range is proportional to the fourth root of transmitter power ($P_t^{1/4}$) and antenna gain ($G^{1/2}$).** This means to double the range, you need to increase transmitter power by a factor of 16, or antenna gain by a factor of 4.
*   **Range is proportional to the square root of radar cross-section ($\sigma^{1/4}$).** Larger targets extend range.
*   **Range is proportional to the wavelength ($\lambda^{1/2}$).** Longer wavelengths can offer better range performance, but with trade-offs in antenna size and resolution.
*   **Range is inversely proportional to the square root of minimum detectable signal ($S_{min}^{-1/4}$).** A more sensitive receiver increases range.

*(Note: The full derivation of the radar range equation involves detailed calculations of power density, scattering, and antenna patterns. For this introduction, the simplified form highlights the key dependencies.)*

### Types of Radar Based on Range Measurement

*   **Pulsed Radar:** Measures range by timing the return of transmitted pulses. This is the most common type for distance measurement.
*   **Continuous Wave (CW) Radar:** Transmits continuously. While good for Doppler velocity measurement, it's not inherently suited for direct range measurement unless frequency modulation (FMCW) is used.
*   **Frequency Modulated Continuous Wave (FMCW) Radar:** Transmits a continuous wave whose frequency is modulated (typically linearly). By comparing the transmitted and received frequencies, range can be determined. This method avoids range ambiguity issues inherent in simple pulsed radar.

## Important Points to Remember

*   **Range is the distance to the target.**
*   **Pulsed radar measures range by timing the echo return.**
*   **The speed of light is a critical constant ($c \approx 3 \times 10^8$ m/s).**
*   **Range calculation: $R = c \times \Delta t / 2$.**
*   **Range resolution is determined by pulse width; shorter pulse width = better resolution.**
*   **Maximum unambiguous range is limited by PRF; lower PRF = greater unambiguous range.**
*   **The radar range equation shows the dependencies of maximum range on various radar and target parameters.**
*   **Increasing transmitter power or antenna gain significantly impacts range, but the relationship is not linear ($R \propto P_t^{1/4}, R \propto G^{1/2}$).**

## Practice Questions and Exercises

**Question 1:**
A pulsed radar system transmits a pulse of duration $0.5 \mu s$. What is the approximate range resolution of this radar?
(a) 75 meters
(b) 150 meters
(c) 300 meters
(d) 600 meters

**Answer 1:**
The range resolution is approximately half the pulse width.
$ \Delta R \approx \frac{c \times \tau}{2} = \frac{(3 \times 10^8 \text{ m/s}) \times (0.5 \times 10^{-6} \text{ s})}{2} = \frac{150 \text{ m}}{2} = 75 \text{ meters} $
**Correct Answer: (a)**

**Question 2:**
If a radar system receives an echo $100 \mu s$ after transmitting a pulse, what is the range to the target?
(a) 15 km
(b) 30 km
(c) 150 km
(d) 300 km

**Answer 2:**
$ R = \frac{c \times \Delta t}{2} = \frac{(3 \times 10^8 \text{ m/s}) \times (100 \times 10^{-6} \text{ s})}{2} = \frac{30,000 \text{ m}}{2} = 15,000 \text{ meters} = 15 \text{ km} $
**Correct Answer: (b)**

**Question 3:**
A radar operates with a PRF of 2000 Hz. What is its maximum unambiguous range?

**Answer 3:**
$ PRI = \frac{1}{PRF} = \frac{1}{2000 \text{ Hz}} = 0.5 \times 10^{-3} \text{ s} = 0.5 ms $
$ R_{max} = \frac{c \times PRI}{2} = \frac{(3 \times 10^8 \text{ m/s}) \times (0.5 \times 10^{-3} \text{ s})}{2} = \frac{150,000 \text{ m}}{2} = 75,000 \text{ meters} = 75 \text{ km} $

**Question 4:**
According to the radar range equation, if you want to double the maximum detection range, by what factor would you need to increase the transmitter power?

**Answer 4:**
The radar range equation shows $R_{max} \propto P_t^{1/4}$.
To double the range ($R_{new} = 2R_{old}$), we have:
$ 2R_{old} \propto P_{t,new}^{1/4} $
$ R_{old} \propto P_{t,old}^{1/4} $
Dividing the two equations:
$ 2 = \left(\frac{P_{t,new}}{P_{t,old}}\right)^{1/4} $
Raising both sides to the power of 4:
$ 2^4 = \frac{P_{t,new}}{P_{t,old}} $
$ 16 = \frac{P_{t,new}}{P_{t,old}} $
Therefore, the transmitter power needs to be increased by a factor of **16**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## References

*   **Pratt, T., & Allnutt, J. (2021). *Satellite Communications* (3rd ed.). Wiley.** (While this book focuses on satellite communication, understanding radar principles is often a prerequisite or complementary knowledge in broader communication engineering courses. Concepts of signal propagation and detection can be indirectly relevant.)
*   **Skolnik, M. I. (2017). *Introduction to Radar Systems* (2nd ed.). Tata McGraw-Hill.** (This is a primary reference for radar fundamentals, including detailed derivations of the range equation, pulse properties, and factors affecting range.)
*   **Edde, B. (2004). *Radar: Principles, Technology, Applications*. Pearson.** (Provides a solid foundation in radar principles, including discussions on range measurement and limitations.)
*   **Kinsley, S., & Quegan, S. (1999). *Understanding Radar Systems*. John Wiley & Sons.** (Offers an accessible yet comprehensive treatment of radar principles, with clear explanations of range determination.)

*(Note: For specific details on the radar range equation and its components, Skolnik's "Introduction to Radar Systems" is the most authoritative reference among those listed. The other references provide broader context in communication systems, which can be beneficial for understanding how radar fits into the overall communication landscape.)*