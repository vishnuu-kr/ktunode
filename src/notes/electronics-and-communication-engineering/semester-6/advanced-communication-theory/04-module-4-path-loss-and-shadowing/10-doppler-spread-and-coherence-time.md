---
title: "Doppler spread and Coherence time"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed37"
status: "completed"
scrapedAt: "2026-05-23T17:59:11.965Z"
---
# ADVANCED COMMUNICATION THEORY - Module 4: Path Loss and Shadowing

## Topic: Doppler Spread and Coherence Time

---

### **1. Introduction**

This section delves into two crucial concepts that describe the time-varying nature of wireless channels: **Doppler Spread** and **Coherence Time**. Understanding these concepts is essential for designing communication systems that can effectively cope with the distortions introduced by mobile environments.

*   **Relevance to Path Loss and Shadowing:** While path loss and shadowing describe the *average* signal attenuation, Doppler spread and coherence time focus on the *dynamic* variations of the channel over time. These variations arise due to the relative motion between the transmitter and receiver.

---

### **2. Doppler Effect and Doppler Shift**

The **Doppler effect** is a fundamental phenomenon where the frequency of a wave is perceived to change when the source of the wave and the observer are moving relative to each other.

*   **Key Concept:** When a mobile device moves, the received signal's frequency is shifted relative to the transmitted frequency. This shift is proportional to the relative velocity and the carrier frequency.

*   **Doppler Shift ($f_d$):** The instantaneous Doppler shift is given by:

    $f_d = v \cos(\theta) \frac{f_c}{c}$

    Where:
    *   $v$: Velocity of the mobile terminal.
    *   $\theta$: Angle between the direction of motion of the mobile and the direction of arrival of the radio wave.
    *   $f_c$: Carrier frequency.
    *   $c$: Speed of light.

    **Explanation:**
    *   The $\cos(\theta)$ term indicates that the Doppler shift is maximum when the mobile moves directly towards or away from the source ($\theta = 0^\circ$ or $180^\circ$) and zero when moving perpendicular to the wave's arrival ($\theta = 90^\circ$).
    *   Higher velocities and higher carrier frequencies lead to a larger Doppler shift.

*   **Example:** Consider a mobile phone moving at 100 km/h (approximately 27.8 m/s) in a city. If the carrier frequency is 900 MHz, the maximum Doppler shift would be:

    $f_d = 27.8 \text{ m/s} \times \frac{900 \times 10^6 \text{ Hz}}{3 \times 10^8 \text{ m/s}} \approx 83.3 \text{ Hz}$

*   **Impact on Communication:** Doppler shift causes the received signal frequency to be different from the transmitted signal frequency. This can lead to:
    *   Demodulation errors.
    *   Shifts in the occupied bandwidth.
    *   Phase changes in the received signal.

---

### **3. Doppler Spread ($B_d$)**

**Doppler spread** is a measure of the range of Doppler shifts experienced by the transmitted signal due to the movement of the mobile. It quantifies how much the channel's frequency response is distorted over time due to the Doppler effect.

*   **Key Concept:** In a multipath environment, signals arrive at the receiver via different paths. Each path experiences a different Doppler shift depending on the angle of arrival and the mobile's velocity. Doppler spread is the difference between the maximum and minimum Doppler shifts present in the received signal.

*   **Definition:** Doppler spread ($B_d$) is defined as the difference between the maximum and minimum Doppler shifts:

    $B_d = f_{d,max} - f_{d,min}$

    Assuming a uniformly distributed angle of arrival, the maximum Doppler shift is $f_{d,max} = v f_c / c$, and the minimum is $f_{d,min} = -v f_c / c$. Therefore:

    $B_d = 2 \times (v f_c / c) = 2 f_{d,max}$

*   **Typical Values:**
    *   Low Doppler spread (e.g., $B_d < 10$ Hz) indicates slow fading or a relatively static channel.
    *   High Doppler spread (e.g., $B_d > 100$ Hz) indicates fast fading and significant channel variations.

*   **Impact on Communication:**
    *   **Distortion:** A large Doppler spread can cause significant distortion of modulated signals, especially those with a large bandwidth.
    *   **Channel Variability:** It signifies how rapidly the channel's frequency characteristics are changing.

---

### **4. Coherence Time ($T_c$)**

**Coherence time** is a measure of the time duration over which the wireless channel can be considered approximately constant or "coherent." It represents the time interval within which the statistical properties of the channel (like its impulse response) do not change significantly.

*   **Key Concept:** If two signals are transmitted within a time interval shorter than the coherence time, they will experience very similar channel conditions. Conversely, if they are separated by a time longer than the coherence time, the channel conditions might have changed drastically.

*   **Relationship with Doppler Spread:** Coherence time and Doppler spread are inversely related. A larger Doppler spread implies a faster changing channel, thus a shorter coherence time. A common approximation is:

    $T_c \approx \frac{1}{5 f_{d,max}}$  or  $T_c \approx \frac{9}{32 \pi f_{d,max}}$ (Goldsmith, 2005)

    The factor of 5 or $9/(32\pi)$ is a rule of thumb used to define "significant change" in the channel.

*   **Example:** If the maximum Doppler shift is 100 Hz, the coherence time would be approximately:

    $T_c \approx \frac{1}{5 \times 100 \text{ Hz}} = \frac{1}{500 \text{ s}} = 2 \text{ ms}$

    This means that within a 2ms interval, the channel's properties are likely to remain similar.

*   **Impact on Communication:**
    *   **Modulation Bandwidth:** For a communication system to be unaffected by Doppler shifts (i.e., treated as a flat fading channel), the symbol duration ($T_s$) of the transmitted signal must be much shorter than the coherence time ($T_s \ll T_c$).
    *   **Channel Tracking:** If the symbol duration is comparable to or longer than the coherence time ($T_s \gtrsim T_c$), the channel will change during the transmission of a single symbol, leading to inter-symbol interference (ISI). The receiver will need mechanisms to track these channel variations.
    *   **System Design:** This directly influences the choice of modulation schemes, symbol rates, and the need for channel estimation and equalization techniques.

---

### **5. Fading and its Temporal Characteristics**

Doppler spread and coherence time are direct indicators of the temporal behavior of fading.

*   **Flat Fading:** Occurs when the coherence bandwidth of the channel is much larger than the bandwidth of the transmitted signal. In this case, all frequency components of the signal experience the same multiplicative gain. If the symbol duration ($T_s$) is much smaller than the coherence time ($T_c$), the channel is also considered **non-frequency selective** and **non-time selective** over the symbol duration. This simplifies receiver design.

*   **Frequency Selective Fading:** Occurs when the coherence bandwidth of the channel is smaller than the bandwidth of the transmitted signal. Different frequency components of the signal experience different attenuations and delays, leading to ISI.

*   **Fast Fading:** Occurs when the coherence time ($T_c$) is much shorter than the symbol duration ($T_s$). The channel changes significantly during the transmission of a single symbol, causing severe distortion and ISI. This is directly related to a high Doppler spread.

*   **Slow Fading:** Occurs when the coherence time ($T_c$) is much longer than the symbol duration ($T_s$). The channel remains relatively constant over the duration of several symbols. This is associated with a low Doppler spread.

*   **Summary Table:**

    | Fading Type          | Channel Condition                                        | Doppler Spread | Coherence Time | Impact on Symbol ($T_s$) |
    | :------------------- | :------------------------------------------------------- | :------------- | :------------- | :----------------------- |
    | **Fast Fading**      | Channel changes rapidly                                  | High           | Short ($T_c < T_s$) | Significant distortion |
    | **Slow Fading**      | Channel changes slowly                                   | Low            | Long ($T_c \gg T_s$) | Less distortion        |
    | **Flat Fading**      | All frequency components affected similarly              | N/A            | N/A            | Channel gain constant across BW |
    | **Frequency Sel. Fading** | Different frequency components affected differently | N/A            | N/A            | Channel gain varies across BW |

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **6. Textbooks and Reference Content**

This section highlights how the concepts of Doppler spread and coherence time are addressed in the provided literature:

*   **Goldsmith, Andrea. *Wireless Communications* (2005):**
    *   **Chapter 5: Fading Dispersive Channels:** This chapter extensively covers the time-varying nature of wireless channels. It provides detailed derivations for Doppler shift calculation and the relationship between Doppler spread and coherence time. Goldsmith emphasizes the impact of channel variations on system performance and introduces the concepts of slow and fast fading. (Knowledge Level: K2 - Understanding channel models)
    *   **Key takeaway:** Goldsmith's work is foundational in understanding the statistical models of fading channels, including their temporal characteristics.

*   **Rappaport, Theodore S. *Wireless Communication: Principles and Practice* (2022):**
    *   **Chapter 4: Wireless Propagation and Channel Modeling:** Rappaport also discusses channel time variations due to mobility. He provides practical examples and calculations of Doppler shift based on different mobile speeds and carrier frequencies. The concept of coherence time is linked to the symbol duration, highlighting when equalization or diversity techniques are necessary. (Knowledge Level: K2 - Understanding channel models)
    *   **Key takeaway:** Rappaport offers a practical perspective, often bridging theoretical concepts with real-world system design considerations.

*   **Schiller, Jochen. *Mobile Communications* (2008):**
    *   **Chapter 4: Radio Propagation:** Schiller explains the Doppler effect and its consequences for mobile communication systems. He discusses how Doppler shift affects signal frequency and the derivation of coherence time as an inverse of Doppler spread. The impact on modulation schemes and the need for synchronization are also addressed. (Knowledge Level: K2 - Understanding channel models)
    *   **Key takeaway:** Schiller provides a good overview for mobile communication systems, focusing on the practical implications of Doppler spread and coherence time.

*   **Haykin, Simon. *Communication Systems* (2020) & *Digital Communication Systems, An Indian Adaptation* (2021):**
    *   While these books are more general communication systems texts, they might touch upon Doppler effects in specific contexts, particularly in the chapters dealing with noise and interference in mobile environments. However, the primary focus on wireless channel time variations is better covered in the specialized wireless communication books. (Knowledge Level: K2 - General understanding of communication principles)

---

### **7. Alignment with Course Outcomes (COs)**

*   **CO1: Explain information theory measures...**
    *   While not directly related to entropy or mutual information, understanding the channel's time-varying nature is a prerequisite for analyzing the capacity of such channels, which is an information theoretic measure. (Indirectly supports CO1)

*   **CO2: Apply source coding theorem...**
    *   Not directly relevant.

*   **CO3: Apply channel coding for error detection and correction...**
    *   Doppler spread and coherence time directly impact the error rate of a communication system. Fast fading (high Doppler spread, short coherence time) increases the need for robust channel coding schemes to combat the rapidly changing errors. (Supports CO3 by highlighting the need for advanced coding)

*   **CO4: Explain the basic Principle of wireless communication techniques...**
    *   This topic is fundamental to understanding wireless communication principles, as mobility is a defining characteristic. The Doppler effect and coherence time explain why wireless channels are dynamic. (Directly supports CO4)

*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels.**
    *   Doppler spread and coherence time are key parameters in describing and classifying wireless channel models (e.g., slow fading vs. fast fading). Understanding these parameters is crucial for analyzing how modulation techniques perform in these time-varying, flat fading environments. (Directly supports CO5)

*   **CO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance.**
    *   When the coherence time is short ($T_c < T_s$), the channel changes rapidly, making it difficult for equalization to track the changes. Diversity techniques (e.g., time diversity, frequency diversity) are often employed to combat fast fading, where the data is transmitted multiple times or across different frequencies, increasing the probability that at least one version is received with a favorable channel condition. (Directly supports CO6)

---

### **8. Important Points to Remember**

*   **Mobility is Key:** Doppler shift, spread, and coherence time are direct consequences of the relative motion between transmitter and receiver.
*   **Inverse Relationship:** Doppler Spread ($B_d$) and Coherence Time ($T_c$) are inversely related. Higher mobility leads to higher Doppler spread and shorter coherence time.
*   **Symbol Duration vs. Coherence Time:** The relationship between symbol duration ($T_s$) and coherence time ($T_c$) determines whether a channel is slow or fast fading for that particular system.
    *   $T_s \ll T_c$: Slow fading (channel is relatively constant over a symbol)
    *   $T_s \gtrsim T_c$: Fast fading (channel changes significantly during a symbol)
*   **System Design Implications:** These parameters dictate the need for advanced techniques like channel equalization, diversity, and adaptive modulation.
*   **Carrier Frequency Impact:** Higher carrier frequencies lead to larger Doppler shifts for the same velocity.

---

### **9. Practice Questions and Exercises**

**Question 1:**
A mobile terminal is moving at a speed of 60 km/h in a cellular system operating at a carrier frequency of 1800 MHz. Calculate the maximum Doppler shift. If the system transmits data with a symbol duration of 0.5 ms, would this channel be considered slow or fast fading for this system? Justify your answer.

**Answer 1:**
*   **Calculate Doppler Shift:**
    *   Velocity $v = 60 \text{ km/h} = \frac{60 \times 1000 \text{ m}}{3600 \text{ s}} \approx 16.67 \text{ m/s}$.
    *   Carrier frequency $f_c = 1800 \text{ MHz} = 1800 \times 10^6 \text{ Hz}$.
    *   Speed of light $c = 3 \times 10^8 \text{ m/s}$.
    *   Maximum Doppler shift $f_{d,max} = \frac{v f_c}{c} = \frac{16.67 \text{ m/s} \times 1800 \times 10^6 \text{ Hz}}{3 \times 10^8 \text{ m/s}} \approx 99.94 \text{ Hz}$.

*   **Determine Fading Type:**
    *   First, estimate the coherence time $T_c$. Using the approximation $T_c \approx \frac{1}{5 f_{d,max}}$:
        $T_c \approx \frac{1}{5 \times 99.94 \text{ Hz}} \approx \frac{1}{499.7 \text{ s}} \approx 0.002 \text{ s} = 2 \text{ ms}$.
    *   The symbol duration is $T_s = 0.5 \text{ ms}$.
    *   Since $T_s = 0.5 \text{ ms}$ is significantly less than $T_c = 2 \text{ ms}$ ($T_s \ll T_c$), this channel would be considered **slow fading** for this system. The channel remains relatively constant over the transmission of a single symbol.

**Question 2:**
Explain the concept of coherence time and its significance in designing a mobile communication system. How does Doppler spread relate to coherence time?

**Answer 2:**
*   **Coherence Time:** Coherence time ($T_c$) is the time duration over which the wireless channel can be considered statistically invariant. If two signals are separated in time by an interval less than $T_c$, they experience highly correlated channel conditions.
*   **Significance:**
    *   **Symbol Duration:** It dictates whether the channel is slow or fast fading relative to the symbol duration ($T_s$). If $T_s \ll T_c$, the channel is slow fading, simplifying receiver design. If $T_s \gtrsim T_c$, the channel is fast fading, requiring techniques to track channel variations or mitigate their effects.
    *   **Channel Estimation:** If $T_s \gtrsim T_c$, channel estimation must be performed frequently to track changes.
    *   **Diversity Techniques:** Fast fading often necessitates diversity techniques (time, frequency, space) to improve reliability.
*   **Relationship with Doppler Spread:** Coherence time and Doppler spread are inversely proportional. A higher Doppler spread (caused by higher mobility or carrier frequency) implies a faster changing channel, thus a shorter coherence time. The relationship is approximately $T_c \propto 1/B_d$.

**Question 3:**
Consider a wireless system operating at 2 GHz with a mobile speed of 120 km/h. What is the Doppler spread? If the system uses QPSK modulation with a symbol rate of 500 ksps, how will the Doppler spread affect the system performance?

**Answer 3:**
*   **Calculate Doppler Spread:**
    *   Velocity $v = 120 \text{ km/h} = \frac{120 \times 1000 \text{ m}}{3600 \text{ s}} \approx 33.33 \text{ m/s}$.
    *   Carrier frequency $f_c = 2 \text{ GHz} = 2 \times 10^9 \text{ Hz}$.
    *   Speed of light $c = 3 \times 10^8 \text{ m/s}$.
    *   Maximum Doppler shift $f_{d,max} = \frac{v f_c}{c} = \frac{33.33 \text{ m/s} \times 2 \times 10^9 \text{ Hz}}{3 \times 10^8 \text{ m/s}} \approx 222.2 \text{ Hz}$.
    *   Doppler spread $B_d = 2 \times f_{d,max} \approx 444.4 \text{ Hz}$.

*   **Impact on Performance:**
    *   The symbol rate is 500 ksps, which means the symbol duration $T_s = 1 / (500 \times 10^3 \text{ Hz}) = 2 \text{ }\mu\text{s}$.
    *   Estimate coherence time $T_c \approx \frac{1}{5 f_{d,max}} = \frac{1}{5 \times 222.2 \text{ Hz}} \approx \frac{1}{1111 \text{ s}} \approx 0.9 \text{ ms}$.
    *   Since $T_s = 2 \text{ }\mu\text{s}$ is much smaller than $T_c = 0.9 \text{ ms}$ ($T_s \ll T_c$), the channel is slow fading.
    *   However, a Doppler spread of 444.4 Hz indicates a relatively fast changing channel. While it's slow fading in terms of symbol duration, the channel's impulse response will change significantly over a few milliseconds. This can lead to:
        *   **Fading Fluctuations:** Rapid fluctuations in signal strength (fading) will occur, impacting the Bit Error Rate (BER).
        *   **Need for Tracking:** The receiver will need to employ mechanisms for rapid channel tracking or use diversity techniques to ensure reliable reception.
        *   **Potential for ISI:** If the channel also exhibits frequency selectivity, the high Doppler spread might exacerbate ISI if not properly managed.

---
This concludes the study notes for Doppler spread and coherence time. Remember to consult the recommended textbooks for more in-depth understanding and derivations.