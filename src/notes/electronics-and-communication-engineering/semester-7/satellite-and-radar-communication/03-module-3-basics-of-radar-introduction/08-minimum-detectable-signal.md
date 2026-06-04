---
title: "Minimum Detectable Signal"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 3: Basics of Radar: Introduction"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff329"
status: "completed"
scrapedAt: "2026-05-23T18:10:53.219Z"
---
# SATELLITE AND RADAR COMMUNICATION: Module 3: Basics of Radar: Introduction

## Topic: Minimum Detectable Signal (MDS)

---

### 1. Introduction to Radar and the Need for Sensitivity

**Course Outcome Alignment:** CO3 (Illustrate Radar Fundamentals like Radar Equation and Applications.) - K2

**Key Concepts:**
*   **Radar:** Acronym for **R**adio **D**etection **a**nd **R**anging. It uses radio waves to determine the range, angle, or velocity of objects.
*   **Detection:** The process by which a radar system decides whether a target is present or not, based on the received signal.
*   **Signal-to-Noise Ratio (SNR):** A critical parameter in radar performance. It's the ratio of the power of the desired signal to the power of the background noise. A higher SNR generally leads to better detection probability.

**Why is Minimum Detectable Signal important?**
Every radar system has a limit to how weak a signal it can reliably detect. This limit is defined by the **Minimum Detectable Signal (MDS)**. It's the weakest signal that the radar receiver can process and distinguish from background noise with a specified probability of detection.

**Textbook Reference:**
*   **Skolnik (2017), Chapter 2: Radar Signals:** Discusses the fundamental nature of radar signals and the challenges posed by noise.
*   **Edde (2004), Chapter 4: Radar Receivers:** Introduces the concept of receiver sensitivity and its importance.

---

### 2. Defining the Minimum Detectable Signal (MDS)

**Course Outcome Alignment:** CO3 (Illustrate Radar Fundamentals like Radar Equation and Applications.) - K2

**Definition:**
The **Minimum Detectable Signal (MDS)** is the minimum signal power that a radar system can detect at its output with a specified probability of detection ($P_d$) and a specified probability of false alarm ($P_{fa}$).

**Key Factors Influencing MDS:**

*   **Noise:** The fundamental limitation. Thermal noise in the receiver, atmospheric noise, clutter, and jamming all contribute to the noise floor.
*   **Bandwidth of the Receiver:** Wider bandwidths allow more noise to enter the receiver, thus increasing the noise power.
*   **Receiver Noise Figure (NF):** A measure of how much the receiver degrades the SNR. A lower NF is desirable.
*   **Signal Processing:** The techniques used to process the received echo (e.g., matched filtering) can improve the SNR and thus lower the MDS.
*   **Detector Characteristics:** The type of detector used (e.g., envelope detector, square-law detector) affects the output SNR.
*   **Integration of Pulses:** Averaging multiple pulses from the same target can reduce the effect of noise and improve detection of weak signals.
*   **Desired Performance:** The required $P_d$ and acceptable $P_{fa}$ directly influence the MDS. Higher $P_d$ and lower $P_{fa}$ require a stronger signal, meaning a higher MDS.

**Mathematical Representation (Conceptual):**
The MDS is often expressed in terms of the minimum required SNR at the output of the processing stage. Let this minimum SNR be $(SNR)_{min}$.

$$MDS \propto N_0 \cdot B \cdot (SNR)_{min}$$

Where:
*   $N_0$ is the noise power spectral density (Watts/Hz).
*   $B$ is the receiver bandwidth (Hz).
*   $(SNR)_{min}$ is the minimum acceptable signal-to-noise ratio at the output.

**Important Point to Remember:** MDS is not a fixed value but a characteristic of a specific radar system operating under specific conditions and with specific performance requirements.

---

### 3. Noise in Radar Systems

**Course Outcome Alignment:** CO3 (Illustrate Radar Fundamentals like Radar Equation and Applications.) - K2

**Key Concepts:**
*   **Thermal Noise:** Also known as Johnson-Nyquist noise, caused by the random thermal motion of electrons in conductive materials. It's present in all electronic components.
*   **Noise Power Spectral Density ($N_0$):** The noise power per unit bandwidth. For thermal noise, $N_0 = kT$ Watts/Hz, where:
    *   $k$ is Boltzmann's constant ($1.38 \times 10^{-23}$ J/K).
    *   $T$ is the equivalent noise temperature of the system (Kelvin). This includes the physical temperature of the antenna and the receiver.
*   **Total Noise Power ($N$):** The total noise power within the receiver bandwidth $B$ is $N = N_0 \cdot B = kT B$.
*   **Noise Figure (NF):** A measure of the degradation of the SNR caused by a component (e.g., receiver).
    *   $NF = \frac{SNR_{in}}{SNR_{out}}$
    *   A perfect component has $NF = 1$ (or 0 dB). Real components have $NF > 1$.
    *   The equivalent noise temperature ($T_e$) of a component is related to its noise figure by $T_e = T_0 (NF - 1)$, where $T_0$ is a reference temperature (usually 290 K).
*   **External Noise:** Interference from other sources, such as other radars, atmospheric phenomena, or deliberate jamming.

**Textbook Reference:**
*   **Skolnik (2017), Chapter 7: Noise:** Provides a detailed analysis of various noise sources in radar systems and their impact.
*   **Pratt & Allnutt (2021), Chapter 3: Noise in Communication Systems:** While focused on satellite communications, the principles of noise are universally applicable to any communication system, including radar.

**Example:**
Consider a radar receiver with a bandwidth of 1 MHz and an equivalent noise temperature of 500 K.
The noise power spectral density is $N_0 = kT = (1.38 \times 10^{-23} \text{ J/K}) \times (500 \text{ K}) = 6.9 \times 10^{-21}$ Watts/Hz.
The total noise power in the 1 MHz bandwidth is $N = N_0 \cdot B = (6.9 \times 10^{-21} \text{ W/Hz}) \times (1 \times 10^6 \text{ Hz}) = 6.9 \times 10^{-15}$ Watts.

---

### 4. Receiver Sensitivity and MDS Calculation

**Course Outcome Alignment:** CO3 (Illustrate Radar Fundamentals like Radar Equation and Applications.) - K2

**Key Concepts:**
*   **Receiver Sensitivity:** The minimum RF input power that the receiver can amplify to a usable output level. It's directly related to the MDS.
*   **Matched Filter:** An optimal linear filter that maximizes the SNR for a given noise and a given signal waveform. For a pulsed radar, the matched filter's impulse response is the time-reversed and conjugated version of the transmitted pulse.
*   **Integration:** The process of summing or averaging multiple received pulses. This can be:
    *   **Non-coherent Integration:** Summing the detected envelope amplitudes of multiple pulses.
    *   **Coherent Integration:** Summing the complex voltage outputs of multiple pulses before detection. Coherent integration offers greater SNR improvement than non-coherent integration.
*   **Probability of Detection ($P_d$) and Probability of False Alarm ($P_{fa}$):**
    *   $P_d$: The probability that a target echo, when present, will be correctly detected.
    *   $P_{fa}$: The probability that the receiver will output a signal indicating a target when no target is present (i.e., a false alarm).
    *   These probabilities are typically related to the SNR via statistical distributions (e.g., Rayleigh fading for non-coherent detection, Ricean fading for coherent detection in the presence of noise).

**The Radar Range Equation and MDS:**
The radar range equation relates the system parameters to the maximum range at which a target can be detected. The MDS is a critical input to this equation. A simplified form of the radar range equation, considering the minimum detectable signal, is:

$$P_{tx} G_{tx}^2 \sigma \lambda^2 = (4\pi)^3 R_{max}^4 \frac{P_{rx, min}}{L_{total}}$$

Where:
*   $P_{tx}$ is the transmitted peak power.
*   $G_{tx}$ is the transmit antenna gain.
*   $\sigma$ is the radar target's radar cross-section.
*   $\lambda$ is the radar wavelength.
*   $R_{max}$ is the maximum detectable range.
*   $P_{rx, min}$ is the minimum detectable received power, which is essentially the MDS.
*   $L_{total}$ represents all losses (atmospheric, system losses, etc.).

**Calculating MDS:**
The MDS ($P_{rx, min}$) is the minimum received signal power required to achieve the desired $P_d$ and $P_{fa}$ after processing. It is often expressed as:

$$P_{rx, min} = (SNR)_{min} \cdot N$$
$$P_{rx, min} = (SNR)_{min} \cdot kTBF$$

Where:
*   $B$ is the effective noise bandwidth of the receiver (often approximated by the pulse bandwidth).
*   $F$ is the noise figure of the receiver (if not already accounted for in $T$).
*   $(SNR)_{min}$ is the minimum required SNR at the output of the signal processing stage for the specified $P_d$ and $P_{fa}$.

**Example (Conceptual Calculation):**
Suppose a radar needs an SNR of 10 dB (ratio of 10) at the output of its matched filter to achieve $P_d = 90\%$ with $P_{fa} = 10^{-6}$. The receiver has a bandwidth of 2 MHz and a noise figure of 3 dB (NF = 2). The system operates at room temperature ($T_0 = 290$ K).

1.  **Calculate Noise Power ($N$):**
    *   Equivalent noise temperature of the receiver: $T_e = T_0 (NF - 1) = 290 (2 - 1) = 290$ K. (Assuming receiver is the dominant noise source after the antenna).
    *   Noise Power Spectral Density: $N_0 = kT_e = (1.38 \times 10^{-23}) \times 290 \approx 4 \times 10^{-21}$ W/Hz.
    *   Total Noise Power: $N = N_0 \cdot B = (4 \times 10^{-21} \text{ W/Hz}) \times (2 \times 10^6 \text{ Hz}) = 8 \times 10^{-15}$ W.

2.  **Calculate Minimum Detectable Signal ($P_{rx, min}$):**
    *   $(SNR)_{min}$ in ratio = $10^{10 \text{ dB} / 10} = 10$.
    *   $P_{rx, min} = (SNR)_{min} \cdot N = 10 \times (8 \times 10^{-15} \text{ W}) = 80 \times 10^{-15}$ W.

This $P_{rx, min}$ is the MDS. The radar range equation would then be used to determine what transmitted power, antenna gain, etc., are needed to deliver this minimum received power from a target of a given radar cross-section at a desired range.

**Textbook Reference:**
*   **Skolnik (2017), Chapter 7 & 8:** Covers receiver sensitivity and the derivation of the radar range equation including noise effects.
*   **Edde (2004), Chapter 4 & 5:** Discusses receiver sensitivity, noise, and signal processing for detection.

---

### 5. Factors Affecting MDS and Practical Considerations

**Course Outcome Alignment:** CO3 (Illustrate Radar Fundamentals like Radar Equation and Applications.) - K2

**Key Factors and Practical Considerations:**

*   **Antenna Noise Temperature:** The temperature of the antenna due to thermal noise from the environment it "sees" (ground, sky, atmosphere, celestial sources) significantly impacts $N_0$. An antenna pointing at the cold sky will have a lower noise temperature than one pointing at the warm ground.
*   **Receiver Gain Distribution:** The noise added by each stage of the receiver is important. The first stage usually has the most impact due to the Friis formula for noise figure: $NF_{total} = NF_1 + \frac{NF_2-1}{G_1} + \frac{NF_3-1}{G_1 G_2} + ...$, where $G_i$ is the gain of stage $i$ and $NF_i$ is its noise figure.
*   **Pulsed vs. Continuous Wave (CW) Radar:** Pulse radars transmit intermittently, allowing for more sophisticated signal processing techniques like pulse compression and Doppler filtering, which can improve the effective SNR and thus lower the MDS for a given transmitted power. CW radars continuously transmit, making it harder to distinguish weak echoes from strong transmitted signals without Doppler separation.
*   **Clutter:** Unwanted echoes from stationary objects (ground, buildings) can mask weak target echoes. Advanced processing (e.g., Moving Target Indication - MTI, Pulse Doppler) is used to mitigate clutter, which can indirectly affect the minimum detectable clutter signal and hence the ability to detect targets within clutter.
*   **Jamming:** Intentional interference signals designed to disrupt radar operation. Jamming can significantly increase the noise floor, raising the MDS. Electronic Countermeasures (ECM) and Electronic Counter-Countermeasures (ECCM) are crucial in modern radar systems.
*   **Bandwidth vs. Resolution:** A narrower receiver bandwidth reduces noise power and therefore lowers MDS. However, it also reduces range resolution (the ability to distinguish between two closely spaced targets). This is a fundamental trade-off.
*   **Pulse Compression:** Techniques like Barker codes or Chirp pulses allow the transmission of long pulses (for energy) while achieving the range resolution of short pulses (by processing the received pulse to be narrow). This improves the energy-to-noise ratio and can lower MDS.
*   **Detection Threshold:** The specific voltage or amplitude level set in the receiver's decision circuit. This threshold is set based on the desired $P_{fa}$ and the statistical distribution of the signal plus noise.

**Textbook Reference:**
*   **Kinsley & Quegan (1999), Chapter 4: Noise and Interference:** Detailed discussion on various noise and interference sources impacting radar performance.
*   **Edde (2004), Chapter 11: Radar Applications and Performance:** Touches upon practical limitations and design considerations influencing radar sensitivity.

---

### 6. Learning Outcomes Checklist and Practice Questions

**Course Outcome Alignment:**
*   **CO1:** While this module focuses on radar, understanding receiver sensitivity and signal detection is a foundational concept that applies to satellite communications as well, particularly in terms of link budget and signal-to-noise ratios for reliable data transmission. (K2)
*   **CO3:** This entire module is dedicated to radar fundamentals, including the concept of MDS. (K2)

---

#### Practice Questions:

**Question 1:**
Define the Minimum Detectable Signal (MDS) in a radar system. What are the primary factors that determine the MDS?

**Answer:**
The Minimum Detectable Signal (MDS) is the weakest signal power that a radar system can detect at its output with a specified probability of detection ($P_d$) and a specified probability of false alarm ($P_{fa}$).
Primary factors include:
*   Receiver noise power (determined by bandwidth, noise figure, and system temperature).
*   The desired signal-to-noise ratio (SNR) required for the specified $P_d$ and $P_{fa}$.
*   Signal processing techniques (e.g., integration, matched filtering).

---

**Question 2:**
Explain the relationship between receiver noise, receiver bandwidth, and Minimum Detectable Signal.

**Answer:**
Receiver noise is the primary limitation on detecting weak signals. The total noise power in the receiver is directly proportional to the receiver's bandwidth ($N = N_0 \cdot B$). A wider bandwidth allows more noise power to enter the receiver, increasing the noise floor. Since MDS is the minimum signal power required to be distinguishable from noise (i.e., achieve a certain SNR), a higher noise power due to a wider bandwidth will result in a higher MDS. Conversely, a narrower bandwidth reduces noise power, leading to a lower MDS.

---

**Question 3:**
If a radar system has a receiver bandwidth of 5 MHz, an effective noise temperature of 700 K, and requires a minimum SNR of 15 dB for detection, what is the approximate MDS at the output of the processing stage?

**Answer:**
1.  **Noise Power Spectral Density ($N_0$):**
    $N_0 = kT = (1.38 \times 10^{-23} \text{ J/K}) \times (700 \text{ K}) = 9.66 \times 10^{-21}$ W/Hz.

2.  **Total Noise Power ($N$):**
    $N = N_0 \cdot B = (9.66 \times 10^{-21} \text{ W/Hz}) \times (5 \times 10^6 \text{ Hz}) = 4.83 \times 10^{-14}$ W.

3.  **Minimum SNR in Ratio:**
    $(SNR)_{min} = 10^{15 \text{ dB} / 10} = 10^{1.5} \approx 31.62$.

4.  **Minimum Detectable Signal (MDS):**
    $MDS = P_{rx, min} = (SNR)_{min} \cdot N = 31.62 \times (4.83 \times 10^{-14} \text{ W}) \approx 1.53 \times 10^{-12}$ W.

Therefore, the approximate MDS is $1.53$ picowatts (pW).

---

**Question 4:**
Discuss the trade-off between range resolution and Minimum Detectable Signal.

**Answer:**
There is an inverse relationship between range resolution and MDS.
*   **Range Resolution:** Determined by the pulse width ($ \tau $) or the bandwidth ($B$) of the transmitted pulse. Higher bandwidth (or shorter pulse width) provides better range resolution (i.e., the ability to distinguish between two closely spaced targets).
*   **Minimum Detectable Signal (MDS):** As discussed, MDS is inversely related to receiver bandwidth. A narrower bandwidth reduces noise power, thus lowering MDS.

Therefore, to achieve better range resolution (higher bandwidth), the radar's MDS will increase (it becomes less sensitive). Conversely, to lower the MDS (increase sensitivity) by using a narrower bandwidth, the range resolution will be degraded. Radar designers must balance these competing requirements based on the specific application. Techniques like pulse compression are used to mitigate this trade-off by transmitting wideband pulses for good range resolution while processing them to achieve the energy benefits of long pulses, effectively lowering the MDS.

---

### 7. Important Points to Remember

*   **MDS is the bedrock of radar sensitivity.** It sets the lower limit on detectable signal power.
*   **Noise is the fundamental adversary.** Understanding and quantifying noise is crucial for determining MDS.
*   **The Radar Range Equation links MDS to observable parameters.** A lower MDS allows for detection at longer ranges or of smaller targets.
*   **Trade-offs exist.** Bandwidth affects both resolution and MDS. Receiver design choices (like noise figure) directly impact sensitivity.
*   **System performance (Pd, Pfa) dictates the required SNR, which in turn dictates the MDS.**

---

This concludes the study notes for the topic "Minimum Detectable Signal" from Module 3. It is recommended to refer to the mentioned textbooks for a more in-depth understanding of the underlying mathematical derivations and detailed explanations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
