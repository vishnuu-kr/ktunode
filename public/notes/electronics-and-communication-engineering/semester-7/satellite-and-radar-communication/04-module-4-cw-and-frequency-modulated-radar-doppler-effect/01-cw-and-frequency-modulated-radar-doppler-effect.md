---
title: "CW and Frequency Modulated Radar: Doppler Effect"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff32d"
status: "completed"
scrapedAt: "2026-05-23T18:10:55.692Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 4: CW and Frequency Modulated Radar: Doppler Effect

---

### 1. Introduction to CW and FM Radar

**(Corresponds to CO3: Illustrate Radar Fundamentals like Radar Equation and Applications.)**
**(Corresponds to CO4: Compare various types of Radars and tracking techniques.)**

Continuous Wave (CW) and Frequency Modulated (FM) radar are fundamental types of radar systems used for various applications. Understanding their principles, particularly the Doppler effect, is crucial for comprehending their operation and distinguishing them from pulsed radar systems.

#### 1.1. Continuous Wave (CW) Radar

*   **Definition:** CW radar transmits a continuous, unmodulated radio frequency (RF) signal. It operates by comparing the transmitted signal with the received signal.
*   **Key Characteristic:** CW radar does not transmit pulses. It transmits and receives simultaneously.
*   **Simplicity:** CW radar is conceptually simple and often uses a single antenna for both transmitting and receiving.
*   **Limitations:**
    *   **Lack of Range Information:** Without pulsed signals or a way to measure time-of-flight, standard CW radar cannot directly determine the range of a target. This is because the transmitted and received signals are continuous, making it impossible to distinguish between echoes from different ranges.
    *   **Clutter:** CW radar is highly susceptible to interference from stationary objects (clutter) because any Doppler shift will be the primary distinguishing factor.

#### 1.2. Frequency Modulated (FM) Radar

*   **Definition:** FM radar transmits a continuous signal whose frequency is varied (modulated) over time, typically in a triangular or sawtooth pattern. This modulation allows for range determination.
*   **How Range is Determined:** The frequency shift between the transmitted signal and the received signal at any given moment is directly proportional to the time delay (and thus the range) of the reflected signal.
*   **Types of FM Modulation:**
    *   **Sawtooth Modulation:** Frequency increases linearly, then drops instantaneously.
    *   **Triangular Modulation:** Frequency increases linearly, then decreases linearly. This is more common as it offers a more consistent Doppler shift.
*   **Advantages over CW:** The frequency modulation allows FM radar to measure range, overcoming a major limitation of basic CW radar.
*   **Relationship to CW:** FM radar is an extension of CW radar principles, incorporating modulation to extract range information.

---

### 2. The Doppler Effect in Radar

**(Corresponds to CO3: Illustrate Radar Fundamentals like Radar Equation and Applications.)**

The Doppler effect is the change in frequency of a wave in relation to an observer who is moving relative to the wave source. In radar, this effect is crucial for detecting moving targets and measuring their velocity.

#### 2.1. Doppler Shift

*   **Definition:** When a radar signal reflects off a moving target, the frequency of the reflected signal is shifted compared to the transmitted signal. This shift is known as the Doppler shift ($f_d$).
*   **Cause:** The relative motion between the radar and the target causes the wave crests to be compressed or stretched as they are reflected.
*   **Formula:** The Doppler shift is given by:
    $f_d = \frac{2Rv}{c}$
    Where:
    *   $R$ is the range to the target.
    *   $v$ is the radial velocity of the target (velocity component along the line of sight of the radar).
    *   $c$ is the speed of light.
    *   The factor of 2 arises because the target experiences the Doppler shift twice: once when the wave approaches it, and again when it reflects the wave back to the radar.

#### 2.2. Significance of Doppler Shift

*   **Target Velocity Measurement:** The magnitude of the Doppler shift directly indicates the radial velocity of the target. A positive Doppler shift indicates the target is moving towards the radar, while a negative shift indicates it is moving away.
*   **Target Detection in Clutter:** Doppler radar can discriminate between moving targets and stationary clutter. Stationary objects have zero radial velocity and hence no Doppler shift. By filtering out signals with no Doppler shift, the radar can effectively suppress clutter and highlight moving targets.
*   **Improved Signal-to-Clutter Ratio:** This filtering process significantly improves the signal-to-clutter ratio, making it possible to detect small moving targets even in the presence of strong stationary reflections.

#### 2.3. Doppler Effect in CW Radar

*   **Operation:** A basic CW radar transmits a constant frequency ($f_t$) and receives a reflected signal at a slightly different frequency ($f_r = f_t + f_d$) due to the Doppler shift.
*   **Detection:** The radar mixes the transmitted signal with the received signal. This mixing process produces sum and difference frequencies. The difference frequency is the Doppler shift ($f_d$).
*   **Applications:**
    *   **Speed Guns:** Used by law enforcement to measure vehicle speeds. The Doppler shift from the moving vehicle is measured, and the speed is calculated.
    *   **Proximity Fuses:** For artillery shells or missiles. The Doppler shift can indicate when the projectile is close enough to a target for detonation.
    *   **Simple Motion Detectors:** For security systems or automatic doors.

#### 2.4. Doppler Effect in FM Radar

*   **Operation:** In FM radar, the transmitted frequency changes continuously. When the reflected signal returns, its frequency is shifted due to the Doppler effect, and it also corresponds to a different point in the modulation cycle compared to the transmitted signal at the moment of reception.
*   **Range and Velocity Determination:** By analyzing the frequency difference (which includes both the Doppler shift and the frequency difference due to modulation) and knowing the modulation parameters, both range and velocity can be determined.
*   **Example (Triangular Modulation):**
    *   During the "up-sweep" of the triangular modulation, the transmitted frequency increases.
    *   During the "down-sweep," the transmitted frequency decreases.
    *   The received signal's frequency will be shifted by $f_d$.
    *   The difference in frequency between the transmitted signal and the received signal at any point will be a combination of the Doppler shift and the frequency change due to the modulation.
    *   By comparing the frequency difference during the up-sweep and down-sweep, both range and velocity can be extracted.

---

### 3. CW Radar with Doppler Processing

**(Corresponds to CO3: Illustrate Radar Fundamentals like Radar Equation and Applications.)**
**(Corresponds to CO4: Compare various types of Radars and tracking techniques.)**

While basic CW radar lacks range information, sophisticated processing techniques can be applied to CW signals to extract range and velocity.

#### 3.1. Doppler Filters (MTI - Moving Target Indication)

*   **Concept:** Doppler filters are used to separate signals based on their Doppler frequency. A bank of filters is employed, with each filter tuned to a specific range of Doppler frequencies.
*   **Operation:**
    *   The received CW signal is processed to extract the Doppler shift.
    *   This Doppler shift is then fed into the Doppler filter bank.
    *   Filters corresponding to zero Doppler shift are rejected, effectively removing stationary clutter.
    *   Filters with non-zero Doppler shifts detect moving targets.
*   **Advantage:** Allows CW radar systems to detect moving targets even in the presence of significant clutter.

#### 3.2. CW Doppler Radar for Velocity Measurement

*   **Princ:** CW Doppler radar is excellent for measuring velocity. The Doppler shift ($f_d$) is directly proportional to the radial velocity ($v$).
*   **Calculation:** $v = \frac{f_d c}{2f_t}$
    Where:
    *   $f_d$ is the measured Doppler shift.
    *   $c$ is the speed of light.
    *   $f_t$ is the transmitted frequency.
*   **Example:** A police speed gun uses CW radar. It transmits a signal at a known frequency (e.g., X-band). It measures the Doppler shift of the reflected signal from a car. Using the formula, it calculates the car's radial velocity.

#### 3.3. Limitations of CW Doppler Radar (Ambiguity)

*   **Velocity Ambiguity:** CW Doppler radar can only measure the radial component of velocity. It cannot determine if the target is moving towards or away from the radar unless phase information is considered.
*   **Range Ambiguity (Basic CW):** As mentioned, basic CW radar cannot determine range.

---

### 4. Frequency Modulated (FM) Radar for Range and Velocity Measurement

**(Corresponds to CO3: Illustrate Radar Fundamentals like Radar Equation and Applications.)**
**(Corresponds to CO4: Compare various types of Radars and tracking techniques.)**

FM radar overcomes the range limitation of CW radar by modulating the transmitted frequency.

#### 4.1. Range Measurement with FM Radar

*   **Princ:** The frequency of the received signal differs from the transmitted signal at any given instant due to two factors:
    1.  **Time Delay (Range):** The time it takes for the signal to travel to the target and back.
    2.  **Doppler Shift (Velocity):** The relative motion of the target.
*   **Triangular Modulation Example:**
    *   Let the transmitted signal frequency be $f(t)$.
    *   Let the modulation bandwidth be $B$ and the sweep time be $T$. The rate of frequency change (slope) is $S = B/T$.
    *   The transmitted frequency at time $t$ is: $f_t(t) = f_0 + S t$ (during up-sweep).
    *   The received signal from a target at range $R$ will arrive at time $\Delta t = 2R/c$ later.
    *   The frequency of the received signal at the moment of reception will be based on the transmitted frequency at $t - \Delta t$.
    *   The frequency difference $\Delta f_{range}$ due to range is: $\Delta f_{range} = S \Delta t = S \frac{2R}{c}$.
    *   This $\Delta f_{range}$ is what allows range determination.
*   **Range Calculation:** $R = \frac{\Delta f_{range} c}{2S}$

#### 4.2. Velocity Measurement with FM Radar

*   **Princ:** The Doppler shift $f_d$ adds to or subtracts from the frequency difference due to range.
*   **Triangular Modulation Example:**
    *   During the up-sweep, the transmitted frequency is $f_{t,up}(t) = f_0 + S t$. The received signal's frequency will be $f_{r,up}(t) = f_{t,up}(t - \Delta t) + f_d = f_0 + S (t - \Delta t) + f_d$. The frequency difference is $\Delta f_{up} = f_{t,up}(t) - f_{r,up}(t) = S \Delta t - f_d$.
    *   During the down-sweep, the transmitted frequency is $f_{t,down}(t) = f_0 + S T - S t$. The received signal's frequency will be $f_{r,down}(t) = f_{t,down}(t - \Delta t) + f_d = f_0 + S T - S (t - \Delta t) + f_d$. The frequency difference is $\Delta f_{down} = f_{t,down}(t) - f_{r,down}(t) = -S \Delta t - f_d$.
    *   By measuring $\Delta f_{up}$ and $\Delta f_{down}$, we have two equations:
        $\Delta f_{up} = S \frac{2R}{c} - f_d$
        $\Delta f_{down} = -S \frac{2R}{c} - f_d$
    *   Adding these two equations: $(\Delta f_{up} + \Delta f_{down}) = -2f_d$. Thus, $f_d = - \frac{\Delta f_{up} + \Delta f_{down}}{2}$.
    *   Subtracting the second from the first: $(\Delta f_{up} - \Delta f_{down}) = 2 S \frac{2R}{c}$. Thus, $S \frac{2R}{c} = \frac{\Delta f_{up} - \Delta f_{down}}{2}$.
    *   From these, both $R$ and $f_d$ (and hence $v$) can be determined simultaneously.

#### 4.3. Types of FM Radar (Based on Modulation)

*   **FM/CW Radar (Triangular or Sawtooth):** As described above, these use continuous wave transmission with frequency modulation.
*   **Pulsed Doppler Radar:** While not strictly FM radar, it's important to note that pulsed radar systems often incorporate Doppler processing to extract velocity information, similar in principle to how Doppler effects are utilized.

#### 4.4. Applications of FM Radar

*   **Altimeters:** Aircraft altimeters use FM radar to measure the altitude above the ground.
*   **Automotive Radar:** Used in modern vehicles for adaptive cruise control, collision avoidance, and blind-spot detection.
*   **Speed Measurement:** Can be used for accurate velocity measurement of vehicles or other objects.

---

### 5. Comparison: CW vs. FM Radar

**(Corresponds to CO4: Compare various types of Radars and tracking techniques.)**

| Feature               | CW Radar                               | FM Radar                                     |
| :-------------------- | :------------------------------------- | :------------------------------------------- |
| **Modulation**        | Continuous wave, unmodulated         | Continuous wave, frequency modulated         |
| **Range Measurement** | Not possible (in basic form)           | Possible (by measuring frequency difference) |
| **Velocity Measurement** | Possible (by measuring Doppler shift) | Possible (by measuring Doppler shift)        |
| **Complexity**        | Simple                                 | More complex due to modulation               |
| **Clutter Rejection** | Susceptible to stationary clutter      | Can reject clutter using Doppler filters     |
| **Applications**      | Speed guns, proximity fuses, motion detectors | Altimeters, automotive radar, speed measurement |
| **Key Advantage**     | Simplicity, low power consumption      | Ability to measure both range and velocity   |
| **Key Disadvantage**  | No inherent range capability           | Can be complex to implement and process      |

---

### 6. Important Points to Remember

*   **Doppler Effect:** The change in frequency of a wave due to relative motion between source and observer. In radar, it's crucial for detecting moving targets and measuring their radial velocity.
*   **Doppler Shift Formula:** $f_d = \frac{2Rv}{c}$
*   **CW Radar:** Transmits a continuous, unmodulated signal. Primarily detects velocity but not range without additional processing.
*   **FM Radar:** Transmits a continuous, frequency-modulated signal. Can determine both range and velocity by analyzing frequency differences.
*   **Range in FM Radar:** Determined by the frequency difference caused by the time delay of the reflected signal, proportional to the sweep rate and time delay.
*   **Velocity in FM Radar:** Determined by the Doppler shift, which is superimposed on the range-dependent frequency difference.
*   **MTI (Moving Target Indication):** A processing technique using Doppler filters to distinguish moving targets from stationary clutter.
*   **Limitations:** Basic CW radar lacks range. Velocity measurement is always radial. Ambiguities can arise in more complex systems.

---

### 7. Practice Questions and Exercises

**Instructions:** Answer the following questions based on the concepts learned in this module.

**Question 1:**
A CW radar transmits at a frequency of 10 GHz. It detects a Doppler shift of 1 kHz. What is the radial velocity of the target? (Given $c = 3 \times 10^8$ m/s)

**Question 2:**
Explain why basic CW radar cannot determine the range of a target.

**Question 3:**
In an FM radar with triangular modulation, how is the range of a target determined? What parameter is used?

**Question 4:**
What is the primary advantage of using FM radar over basic CW radar?

**Question 5:**
A radar system uses Doppler filters to separate signals. What is the purpose of these filters?

**Question 6:**
Describe the Doppler effect and its significance in radar communication.

**Question 7 (Application):**
A traffic enforcement radar gun operates by measuring the Doppler shift from moving vehicles. If the radar transmits at 24.15 GHz and detects a Doppler shift of 2 kHz from a car, calculate the car's speed in km/h. (Assume the speed is directly towards the radar, and $c = 3 \times 10^8$ m/s).

---

### 8. Answers to Practice Questions

**Answer 1:**
The Doppler shift formula is $f_d = \frac{2Rv}{c}$. To find velocity $v$, we rearrange:
$v = \frac{f_d c}{2R}$.
However, the question directly asks for the radial velocity, and the formula $f_d = \frac{2Rv}{c}$ implicitly relates Doppler shift to velocity.
Let's re-evaluate the relationship for velocity directly:
The Doppler shift is related to radial velocity $v$ by: $f_d = \frac{2 v f_t}{c}$, where $f_t$ is the transmitted frequency.
So, $v = \frac{f_d c}{2 f_t}$.
Given:
$f_d = 1 \text{ kHz} = 1 \times 10^3 \text{ Hz}$
$f_t = 10 \text{ GHz} = 10 \times 10^9 \text{ Hz}$
$c = 3 \times 10^8 \text{ m/s}$

$v = \frac{(1 \times 10^3 \text{ Hz}) \times (3 \times 10^8 \text{ m/s})}{2 \times (10 \times 10^9 \text{ Hz})}$
$v = \frac{3 \times 10^{11}}{20 \times 10^9} \text{ m/s}$
$v = \frac{3 \times 10^{11}}{2 \times 10^{10}} \text{ m/s}$
$v = 1.5 \times 10^1 \text{ m/s}$
$v = 15 \text{ m/s}$

**Answer 2:**
Basic CW radar transmits a continuous, unmodulated signal. Both the transmitted and received signals are continuous. Without a mechanism to measure the time it takes for the signal to travel to the target and return (like the pulse width in pulsed radar), it is impossible to distinguish between echoes from targets at different ranges. The received signal's frequency is solely dependent on the target's velocity (Doppler shift), not its distance.

**Answer 3:**
In FM radar with triangular modulation, the range of a target is determined by measuring the frequency difference ($\Delta f_{range}$) between the transmitted signal and the received signal during a sweep. This frequency difference is caused by the time delay ($\Delta t = 2R/c$) it takes for the signal to travel to the target and back. The frequency difference is proportional to the sweep rate ($S$) of the modulation: $\Delta f_{range} = S \Delta t$. By knowing the sweep rate ($S$) and measuring $\Delta f_{range}$, the time delay $\Delta t$ can be calculated, and subsequently, the range $R$ can be found using $R = c \Delta t / 2$.

**Answer 4:**
The primary advantage of FM radar over basic CW radar is its ability to measure the **range** of a target, in addition to its velocity. While CW radar can detect moving targets and measure their velocity via the Doppler effect, it cannot determine their distance. FM radar achieves range measurement by modulating the transmitted frequency, which creates a frequency difference that is directly related to the target's range.

**Answer 5:**
Doppler filters are used in radar systems to separate signals based on their Doppler frequency. Their primary purpose is to distinguish between moving targets and stationary clutter (like ground reflections or buildings). Stationary objects produce no Doppler shift (zero frequency difference), while moving targets produce a Doppler shift. By using filters tuned to specific Doppler frequency ranges, the radar can effectively reject signals from stationary objects and highlight signals from moving targets, thus improving the signal-to-clutter ratio and target detection probability.

**Answer 6:**
The Doppler effect is the change in frequency of a wave as a result of relative motion between the observer (or receiver) and the source of the wave. In radar, the radar system is the observer, and the target is the source of the reflected wave.
**Significance in Radar Communication:**
1.  **Velocity Measurement:** The Doppler shift ($f_d$) is directly proportional to the radial velocity ($v$) of the target. This allows radar systems to accurately measure how fast a target is approaching or receding.
2.  **Moving Target Detection (MTD):** By filtering out signals with no Doppler shift, radar can differentiate moving targets from stationary clutter, significantly enhancing the ability to detect targets in noisy environments.
3.  **Target Identification:** The Doppler signature of a target can sometimes provide clues about its type (e.g., a helicopter's rotor blades produce a distinct Doppler signature).

**Answer 7:**
Given:
Transmitted Frequency ($f_t$) = 24.15 GHz = $24.15 \times 10^9$ Hz
Doppler Shift ($f_d$) = 2 kHz = $2 \times 10^3$ Hz
Speed of light ($c$) = $3 \times 10^8$ m/s

The formula relating Doppler shift to radial velocity is:
$f_d = \frac{2 v f_t}{c}$

Rearranging to solve for velocity ($v$):
$v = \frac{f_d c}{2 f_t}$

Plugging in the values:
$v = \frac{(2 \times 10^3 \text{ Hz}) \times (3 \times 10^8 \text{ m/s})}{2 \times (24.15 \times 10^9 \text{ Hz})}$
$v = \frac{6 \times 10^{11}}{48.3 \times 10^9} \text{ m/s}$
$v = \frac{600}{48.3} \text{ m/s}$
$v \approx 12.42 \text{ m/s}$

To convert this speed to kilometers per hour (km/h):
1 m/s = 3.6 km/h
Speed in km/h = $12.42 \text{ m/s} \times 3.6 \text{ km/h per m/s}$
Speed in km/h $\approx 44.71 \text{ km/h}$

The car's speed is approximately **44.71 km/h**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. References

*   **Pratt, T., & Allnutt, J. (2021). *Satellite Communications* (3rd ed.). Wiley.** (While this book primarily focuses on satellite communications, it might offer foundational concepts applicable to electromagnetic wave propagation relevant to radar.)
*   **Skolnik, M. I. (2017). *Introduction to Radar Systems* (2nd ed.). Tata McGraw-Hill.** (This is a core text for radar principles, including CW and FM radar, and the Doppler effect. Highly relevant for this module.)
*   **Ha, T. T. (2017). *Digital Satellite Communications* (2nd ed.). McGraw-Hill Education.** (Similar to Pratt & Allnutt, may provide broader context on signal processing aspects.)
*   **Pritchard, W. L. (2006). *Satellite Communications Systems Engineering* (2nd ed.). Pearson Education.** (Again, primarily satellite focus, but relevant for signal propagation.)
*   **Edde, B. (2004). *Radar: Principles, Technology, Applications*. Pearson.** (A comprehensive text on radar, covering fundamental principles and applications of various radar types, including Doppler radar.)
*   **Kinsley, S., & Quegan, S. (1999). *Understanding Radar Systems*. John Wiley & Sons.** (This book provides a detailed explanation of radar principles, including CW and FM radar, and the Doppler effect, making it highly relevant.)

---
This study material is designed to cover the key aspects of CW and FM radar with a focus on the Doppler effect, aligning with the provided learning outcomes and course outcomes.