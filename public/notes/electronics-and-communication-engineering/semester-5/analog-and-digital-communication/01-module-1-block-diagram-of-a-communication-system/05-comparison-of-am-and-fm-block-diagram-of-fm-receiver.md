---
title: "Comparison of AM and FM, Block diagram of FM receiver."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 1: Block diagram of a communication system."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8fc"
status: "completed"
scrapedAt: "2026-05-23T17:52:46.204Z"
---
# ANALOG AND DIGITAL COMMUNICATION - Module 1: Block Diagram of a Communication System

## Topic: Comparison of AM and FM, Block Diagram of FM Receiver

### Learning Outcomes:
*   Understand the fundamental differences between Amplitude Modulation (AM) and Frequency Modulation (FM).
*   Analyze the block diagram of an FM receiver and explain the function of each block.
*   Appreciate the advantages and disadvantages of AM and FM in various communication scenarios.
*   Relate the principles of AM and FM to the broader concept of analog communication systems (CO1).

---

### 1. Introduction to Modulation

**Key Concept:** Modulation is the process of varying one or more properties of a periodic waveform, called the carrier signal, with a modulating signal that typically contains information to be transmitted.

**Why Modulation?**
*   **Efficient Antenna Size:** Transmitting low-frequency signals directly would require impractically large antennas. Modulation shifts the signal to higher frequencies, allowing for smaller antennas. (Haykin & Moher, Ch 2)
*   **Multiplexing:** Allows multiple signals to be transmitted simultaneously over a common channel without interference by assigning different carrier frequencies to each signal.
*   **Overcoming Channel Limitations:** Some transmission channels are not suitable for low-frequency signals.
*   **Noise Immunity:** Certain modulation techniques can offer better noise immunity.

---

### 2. Comparison of Amplitude Modulation (AM) and Frequency Modulation (FM)

Both AM and FM are analog modulation techniques used to transmit information by modifying a carrier signal. The primary difference lies in *which* property of the carrier wave is varied.

#### 2.1. Amplitude Modulation (AM)

**Key Concept:** In AM, the amplitude of the carrier wave is varied in proportion to the instantaneous amplitude of the message signal, while the frequency and phase remain constant.

**Mathematical Representation:**
*   Carrier Signal: $c(t) = A_c \cos(2\pi f_c t)$
*   Message Signal: $m(t)$
*   Amplitude Modulated Signal: $s_{AM}(t) = A_c [1 + k_a m(t)] \cos(2\pi f_c t)$
    *   $A_c$: Amplitude of the carrier signal.
    *   $k_a$: Amplitude sensitivity of the modulator.

**Types of AM:**
*   **Double Sideband-Full Carrier (DSB-FC) or Conventional AM:** The standard AM used in broadcasting.
*   **Double Sideband-Suppressed Carrier (DSB-SC):** Carrier is suppressed to improve power efficiency. Requires a coherent local oscillator for demodulation.
*   **Single Sideband (SSB):** One of the sidebands is suppressed, further improving power efficiency and bandwidth. More complex to generate and demodulate.

**Advantages of AM:**
*   **Simpler Transmitter and Receiver Design:** Especially for conventional AM, the circuitry is relatively simple and inexpensive. (Kennedy, Ch 6)
*   **Ease of Demodulation:** Conventional AM can be demodulated using a simple envelope detector.

**Disadvantages of AM:**
*   **Susceptible to Noise:** Noise primarily affects the amplitude of the signal. Since AM carries information in amplitude variations, noise can easily corrupt the message.
*   **Poor Power Efficiency:** A significant portion of the transmitted power is in the carrier, which carries no information.
*   **Limited Bandwidth:** For a given bandwidth, AM can only accommodate one audio channel effectively.

**Applications:**
*   AM Radio Broadcasting (MW and SW bands)
*   Aircraft communication
*   Some older TV systems (for video transmission)

#### 2.2. Frequency Modulation (FM)

**Key Concept:** In FM, the frequency of the carrier wave is varied in proportion to the instantaneous amplitude of the message signal, while the amplitude and phase remain constant.

**Mathematical Representation:**
*   Carrier Signal: $c(t) = A_c \cos(2\pi f_c t)$
*   Message Signal: $m(t)$
*   Frequency Modulated Signal: $s_{FM}(t) = A_c \cos(2\pi [f_c + k_f m(t)]t)$
    *   $A_c$: Amplitude of the carrier signal (constant).
    *   $f_c$: Carrier frequency.
    *   $k_f$: Frequency sensitivity of the modulator.
    *   The instantaneous frequency is $f_i(t) = f_c + k_f m(t)$.

**Key Parameters in FM:**
*   **Frequency Deviation ($\Delta f$):** The maximum change in the instantaneous frequency from the carrier frequency, equal to $k_f m_{max}$, where $m_{max}$ is the maximum amplitude of the message signal.
*   **Modulation Index ($\beta$):** The ratio of frequency deviation to the modulating frequency ($f_m$). $\beta = \frac{\Delta f}{f_m}$.
    *   For **Narrowband FM (NBFM)**, $\beta \ll 1$ (typically < 0.5). The bandwidth is approximately $2f_m$. (Lathi & Ding, Ch 6)
    *   For **Wideband FM (WBFM)**, $\beta \gg 1$. The bandwidth is approximately $2(\Delta f + f_{max})$, where $f_{max}$ is the maximum modulating frequency. (Carson's Rule)

**Advantages of FM:**
*   **Superior Noise Immunity:** Noise primarily affects the amplitude of a signal. Since FM carries information in frequency variations, a limiting process can remove amplitude variations caused by noise, leading to significantly better noise performance compared to AM. (Haykin & Moher, Ch 5)
*   **Higher Fidelity:** FM can support wider bandwidths for the modulating signal, allowing for higher quality audio transmission (e.g., stereo sound).
*   **Constant Power Transmission:** The transmitted power is constant, making it more power-efficient in terms of useful signal power.

**Disadvantages of FM:**
*   **More Complex Transmitter and Receiver Design:** FM modulators and demodulators are generally more complex than their AM counterparts.
*   **Requires Wider Bandwidth:** Wideband FM requires significantly more bandwidth than AM for the same modulating signal. This limits the number of FM channels that can be accommodated within a given frequency spectrum.
*   **Capture Effect:** If two FM signals with slightly different frequencies are received, the receiver will tend to lock onto the stronger signal and suppress the weaker one, a phenomenon known as the capture effect.

**Applications:**
*   FM Radio Broadcasting (VHF band)
*   Television Sound Transmission
*   High-fidelity audio systems
*   Wireless microphones

#### 2.3. Summary of Comparison

| Feature           | Amplitude Modulation (AM)                                   | Frequency Modulation (FM)                                                              |
| :---------------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **Information Carrier** | Amplitude of the carrier                                    | Frequency of the carrier                                                               |
| **Modulation Process** | Amplitude varies with message signal                        | Frequency varies with message signal                                                   |
| **Amplitude of Carrier** | Variable ($A_c [1 + k_a m(t)]$)                                | Constant ($A_c$)                                                                       |
| **Frequency of Carrier** | Constant ($f_c$)                                            | Variable ($f_c + k_f m(t)$)                                                            |
| **Bandwidth Requirement** | Narrow (approx. $2f_{max}$)                                 | Wide (approx. $2(\Delta f + f_{max})$ for WBFM)                                      |
| **Noise Immunity** | Poor (susceptible to amplitude-based noise)                 | Good (can reject amplitude noise using a limiter)                                    |
| **Power Efficiency** | Poor (significant power in carrier)                         | Good (constant power)                                                                  |
| **Transmitter Complexity** | Simple                                                      | Complex                                                                                |
| **Receiver Complexity** | Simple (envelope detector)                                  | Complex (e.g., Foster-Seeley discriminator, ratio detector, PLL)                       |
| **Fidelity**      | Moderate                                                    | High (due to wider bandwidth and noise immunity)                                       |
| **Applications**  | AM Radio, Aircraft Comms                                    | FM Radio, TV Sound, Hi-Fi Audio                                                        |

---

### 3. Block Diagram of an FM Receiver

An FM receiver is designed to extract the original message signal from the received FM wave. It typically involves several stages, each performing a specific function.

**Overall Goal:** To convert the frequency-varying signal back into the original baseband message signal.

**(CO1: Illustrate the principles of analog communication systems)**

**Block Diagram:**

```
+-----------------+     +--------------------+     +-------------------+     +-------------------+     +-----------------+
| RF Amplifier    | --> | Mixer              | --> | IF Amplifier      | --> | Limiter           | --> | FM Demodulator  |
| (Tuner)         |     | (Local Oscillator) |     |                   |     |                   |     | (Discriminator/ |
+-----------------+     +--------------------+     +--------------------+     +-------------------+     | PLL)            |
        ^                                                                                                       |
        |                                                                                                       |
        |                                                                                                       v
+-----------------+                                                                                     +-----------------+
| Antenna         |                                                                                     | Loudspeaker     |
+-----------------+                                                                                     +-----------------+
```

**Explanation of Each Block:**

1.  **Antenna:**
    *   **Function:** Receives the modulated radio frequency (RF) signal from the transmission medium.
    *   **Details:** The received signal is very weak and needs to be amplified.

2.  **RF Amplifier (Tuner):**
    *   **Function:** Amplifies the weak received RF signal and selects the desired frequency band while rejecting unwanted signals (out-of-band interference).
    *   **Details:** This stage typically includes tuning circuits (e.g., LC resonant circuits) to select the desired station. Amplification improves the signal-to-noise ratio (SNR) before further processing.

3.  **Mixer (and Local Oscillator - LO):**
    *   **Function:** Converts the received RF signal to a fixed, lower Intermediate Frequency (IF). This is a crucial step for efficient amplification and filtering.
    *   **Details:** The Mixer combines the RF input signal with a signal from a Local Oscillator (LO) that is tuned to a frequency slightly different from the desired RF signal. The output of the mixer contains sum and difference frequencies, and the desired IF signal is the difference frequency ($f_{IF} = f_{RF} - f_{LO}$).
    *   **Example:** If the received station is at 100 MHz and the LO is set to 10.7 MHz below it (99.3 MHz), the difference frequency will be 0.7 MHz (which is not IF). If the LO is set to 10.7 MHz *above* the desired RF, then $f_{IF} = f_{RF} - f_{LO}$ is not right. A common IF for FM is 10.7 MHz. So if the RF is 100 MHz, the LO could be at 100 MHz - 10.7 MHz = 89.3 MHz. The mixer output will contain $100 - 89.3 = 10.7$ MHz. Or if the LO is at $100 + 10.7 = 110.7$ MHz, the output will contain $110.7 - 100 = 10.7$ MHz. The key is that the LO frequency is chosen such that the difference is the fixed IF.

4.  **IF Amplifier:**
    *   **Function:** Amplifies the IF signal to a high level and provides further selectivity to remove adjacent channel interference.
    *   **Details:** The IF amplifier is tuned to the intermediate frequency (e.g., 10.7 MHz). It provides most of the gain and selectivity of the receiver. Since the IF is fixed, the IF amplifiers can be designed for optimal performance. (Haykin & Moher, Ch 5)

5.  **Limiter:**
    *   **Function:** Removes any amplitude variations from the IF signal. This is the key to FM's noise immunity.
    *   **Details:** The received FM signal might have acquired amplitude variations due to noise or fading. The limiter circuit (often a diode circuit or a special amplifier) clips the signal at certain voltage levels, effectively converting the amplitude-varying signal back to a constant-amplitude FM signal. This ensures that only the frequency variations, which carry the information, are passed to the demodulator.

6.  **FM Demodulator (Discriminator or Ratio Detector or PLL):**
    *   **Function:** Converts the frequency variations of the FM signal back into the original baseband message signal.
    *   **Details:** This is the core of the FM receiver. Common types include:
        *   **Foster-Seeley Discriminator:** A circuit that produces an output voltage proportional to the input frequency deviation. It requires the input signal to be amplitude-limited.
        *   **Ratio Detector:** Similar to the Foster-Seeley discriminator but less sensitive to amplitude variations, making it simpler as it doesn't strictly require a separate limiter stage.
        *   **Phase-Locked Loop (PLL):** A highly effective and widely used demodulator that tracks the incoming FM signal's frequency and generates a voltage proportional to the frequency error, which is then used to reproduce the message signal. (Lathi & Ding, Ch 7)
    *   **Output:** The output of the demodulator is the recovered message signal $m(t)$.

7.  **Audio Amplifier (not explicitly shown but implied):**
    *   **Function:** Amplifies the recovered low-frequency message signal to a level suitable for driving the loudspeaker.

8.  **Loudspeaker:**
    *   **Function:** Converts the electrical audio signal into audible sound waves.

---

### 4. Important Points to Remember

*   **AM:** Information in amplitude. Simple, but poor noise immunity and power efficiency.
*   **FM:** Information in frequency. Complex, but excellent noise immunity and higher fidelity.
*   **Bandwidth:** FM (especially WBFM) requires significantly more bandwidth than AM.
*   **FM Receiver Stages:** RF Amp -> Mixer/LO -> IF Amp -> Limiter -> FM Demodulator.
*   **Limiter's Role:** Crucial for FM's noise immunity by removing amplitude variations.
*   **Demodulator's Role:** Converts frequency variations back to the original message signal.

---

### 5. Practice Questions and Exercises

**Question 1:**
Briefly explain the primary difference between Amplitude Modulation (AM) and Frequency Modulation (FM) in terms of how the information is encoded onto the carrier wave.

**Answer:**
In AM, the information is encoded by varying the amplitude of the carrier wave in proportion to the message signal, while the frequency and phase remain constant. In FM, the information is encoded by varying the frequency of the carrier wave in proportion to the message signal, while the amplitude and phase remain constant.

**Question 2:**
List two advantages of FM over AM and explain why FM provides better noise immunity.

**Answer:**
Two advantages of FM over AM are:
1.  **Better Noise Immunity:** FM is less susceptible to noise because noise primarily affects the amplitude of a signal. An FM receiver uses a limiter to remove these amplitude variations, thus preserving the information carried by the frequency variations. AM, on the other hand, carries information in amplitude, making it directly vulnerable to amplitude-based noise.
2.  **Higher Fidelity:** FM can utilize wider bandwidths than AM, allowing for the transmission of higher-quality audio signals (e.g., stereo sound) and a wider range of frequencies, resulting in higher fidelity.

**Question 3:**
Draw a block diagram of a typical FM receiver and briefly describe the function of the Limiter and the FM Demodulator.

**Answer:**
*(Refer to the block diagram and explanations in Section 3 of these notes)*
*   **Limiter:** Removes unwanted amplitude variations from the IF signal caused by noise or interference, ensuring the FM demodulator receives a constant-amplitude FM signal.
*   **FM Demodulator:** Converts the frequency variations of the input FM signal into the original baseband message signal.

**Question 4:**
If an FM radio station broadcasts at a carrier frequency of 98.1 MHz and the Intermediate Frequency (IF) used in the receiver is 10.7 MHz, what are the possible frequencies for the Local Oscillator (LO)?

**Answer:**
The mixer in an FM receiver generates sum and difference frequencies. The IF is the difference between the received RF frequency and the LO frequency. Let $f_{RF}$ be the received RF frequency and $f_{LO}$ be the LO frequency.
$f_{IF} = |f_{RF} - f_{LO}|$

Given:
$f_{RF} = 98.1 \text{ MHz}$
$f_{IF} = 10.7 \text{ MHz}$

Therefore,
$10.7 \text{ MHz} = |98.1 \text{ MHz} - f_{LO}|$

This gives two possibilities:
1.  $98.1 \text{ MHz} - f_{LO} = 10.7 \text{ MHz}$
    $f_{LO} = 98.1 \text{ MHz} - 10.7 \text{ MHz} = 87.4 \text{ MHz}$
2.  $98.1 \text{ MHz} - f_{LO} = -10.7 \text{ MHz}$ (or $f_{LO} - 98.1 \text{ MHz} = 10.7 \text{ MHz}$)
    $f_{LO} = 98.1 \text{ MHz} + 10.7 \text{ MHz} = 108.8 \text{ MHz}$

So, the possible frequencies for the Local Oscillator are **87.4 MHz** or **108.8 MHz**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 6. Relevant Textbook References

*   **Communication Systems by Simon Haykin and Michael Moher (5th Edition, 2020):** Chapters 2 (AM) and 5 (FM) will provide detailed explanations of AM and FM principles, their mathematical derivations, and receiver architectures.
*   **Modern Digital and Analog Communication Systems by B.P. Lathi and Zhi Ding (5th Edition, 2018):** Chapters 6 (FM) and 7 (FM Receivers) offer comprehensive coverage of FM modulation, demodulation techniques, and receiver circuit designs.
*   **Introduction to Analog and Digital Communication, An Indian adaptation by Simon Haykin and Michael Moher (2nd Edition, 2022):** This version is also a valuable resource, likely covering similar concepts from Haykin's main text with an Indian context.

---

This concludes the notes for Module 1, Topic: Comparison of AM and FM, Block diagram of FM receiver. This topic directly contributes to **CO1 (Illustrate the principles of analog communication systems)** by providing fundamental examples of analog modulation techniques and their implementation in receivers.