---
title: "Analog data to analog signal - Amplitude Modulation (AM), Frequency Modulation (FM), Phase Modulation (PM)."
subject: "DATA COMMUNICATION"
module: "Module 2: Digital data to digital signal – Non"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bee6"
status: "completed"
scrapedAt: "2026-05-20T16:51:42.441Z"
---
# Data Communication: Module 2 - Analog Data to Analog Signal

## Topic: Analog Data to Analog Signal - Amplitude Modulation (AM), Frequency Modulation (FM), Phase Modulation (PM)

This module focuses on how analog data, such as voice or audio signals, can be transmitted over an analog communication channel by modifying an analog carrier signal. We will explore three fundamental modulation techniques: Amplitude Modulation (AM), Frequency Modulation (FM), and Phase Modulation (PM).

---

### Learning Outcomes:

*   Understand the need for modulation in transmitting analog data.
*   Explain the principle of Amplitude Modulation (AM) and its types.
*   Describe the process of Frequency Modulation (FM) and its advantages.
*   Illustrate the concept of Phase Modulation (PM) and its characteristics.
*   Compare and contrast AM, FM, and PM techniques.
*   Analyze the bandwidth requirements and noise immunity of each modulation technique.

---

## 1. The Need for Modulation

Analog data, such as the sound waves from our voice, are typically at low frequencies. Transmitting these low-frequency signals directly over long distances is impractical due to several reasons:

*   **Antenna Size:** The physical size of the transmitting antenna is inversely proportional to the frequency of the signal. Low-frequency signals require very large antennas, making them impractical.
*   **Multiplexing:** To allow multiple signals to share the same communication medium (e.g., radio waves), each signal needs to be shifted to a different frequency band. Modulation allows us to achieve this.
*   **Noise and Interference:** Low-frequency signals are more susceptible to noise and interference. By shifting the signal to a higher frequency carrier, we can improve its robustness.
*   **Channel Bandwidth:** Different communication channels (like radio waves or telephone lines) are designed to operate efficiently within specific frequency ranges. Modulation allows us to adapt the analog data to these channel characteristics.

**Modulation** is the process of varying one or more properties (amplitude, frequency, or phase) of a periodic waveform, called the **carrier signal**, with a modulating signal that typically contains information to be transmitted.

**Demodulation** is the reverse process, where the original information-bearing signal is extracted from the modulated carrier at the receiver.

---

## 2. Amplitude Modulation (AM)

### 2.1 Principle of AM

In Amplitude Modulation (AM), the **amplitude** of the carrier signal is varied in proportion to the instantaneous amplitude of the modulating signal, while the frequency and phase of the carrier signal remain constant.

**Mathematical Representation:**

*   **Modulating Signal (Message Signal):** $m(t)$
*   **Carrier Signal:** $c(t) = A_c \cos(2\pi f_c t)$
    *   $A_c$: Amplitude of the carrier
    *   $f_c$: Frequency of the carrier
*   **Modulated Signal (AM):** $s_{AM}(t) = [A_c + k_a m(t)] \cos(2\pi f_c t)$
    *   $k_a$: Amplitude sensitivity of the modulator

The term $[A_c + k_a m(t)]$ represents the varying amplitude of the carrier. For proper demodulation, the term $A_c + k_a m(t)$ must always be positive, meaning $|k_a m(t)| \le A_c$. This condition is known as **no overmodulation**.

### 2.2 Types of AM

*   **Double Sideband-Full Carrier (DSB-FC) / Standard AM:**
    *   This is the most common form of AM used in broadcasting.
    *   The modulated signal contains the original carrier frequency and two sidebands.
    *   **Sidebands:**
        *   **Upper Sideband (USB):** Contains frequencies above the carrier frequency ($f_c + f_m$, where $f_m$ is the frequency of the modulating signal).
        *   **Lower Sideband (LSB):** Contains frequencies below the carrier frequency ($f_c - f_m$).
    *   **Bandwidth:** For a modulating signal with bandwidth $B$, the bandwidth of the DSB-FC AM signal is $2B$. This is because both the USB and LSB occupy a bandwidth of $B$.

*   **Double Sideband-Suppressed Carrier (DSB-SC):**
    *   In this type, the carrier component is suppressed from the modulated signal.
    *   **Modulated Signal (DSB-SC):** $s_{DSB-SC}(t) = m(t) \cos(2\pi f_c t)$
    *   **Advantage:** More power efficient as no power is wasted on transmitting the carrier.
    *   **Disadvantage:** Requires a coherent (synchronized) local oscillator at the receiver for demodulation, making the receiver more complex.

*   **Single Sideband (SSB):**
    *   Only one of the sidebands (either USB or LSB) is transmitted, along with or without the carrier.
    *   **Advantage:** Significant bandwidth saving (bandwidth is $B$ instead of $2B$) and improved power efficiency.
    *   **Disadvantage:** Highly complex transmitter and receiver circuitry to generate and recover the single sideband.

*   **Vestigial Sideband (VSB):**
    *   A compromise between DSB and SSB.
    *   One sideband is mostly suppressed, but a small portion of it (the vestige) is retained.
    *   Used in analog television broadcasting.

### 2.3 Amplitude Modulation Example

Let the modulating signal be $m(t) = \cos(2\pi f_m t)$ and the carrier signal be $c(t) = A_c \cos(2\pi f_c t)$, where $f_c > f_m$.

**DSB-FC AM:**
$s_{AM}(t) = [A_c + k_a \cos(2\pi f_m t)] \cos(2\pi f_c t)$
$s_{AM}(t) = A_c \cos(2\pi f_c t) + k_a \cos(2\pi f_m t) \cos(2\pi f_c t)$
Using the trigonometric identity $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$:
$s_{AM}(t) = A_c \cos(2\pi f_c t) + \frac{k_a}{2} [\cos(2\pi (f_c - f_m) t) + \cos(2\pi (f_c + f_m) t)]$

*   $A_c \cos(2\pi f_c t)$: Carrier component
*   $\frac{k_a}{2} \cos(2\pi (f_c - f_m) t)$: Lower Sideband (LSB)
*   $\frac{k_a}{2} \cos(2\pi (f_c + f_m) t)$: Upper Sideband (USB)

The spectrum of the AM signal consists of a carrier at $f_c$, an LSB component at $f_c - f_m$, and a USB component at $f_c + f_m$.

### 2.4 Advantages and Disadvantages of AM

**Advantages:**

*   Simple and inexpensive transmitter and receiver circuitry (especially for DSB-FC).
*   Easy to demodulate using an envelope detector.

**Disadvantages:**

*   **Poor Noise Immunity:** Amplitude variations due to noise directly affect the detected signal, leading to noise in the output.
*   **Power Inefficiency:** A significant portion of the transmitted power is in the carrier, which carries no information.
*   **Bandwidth Inefficiency (DSB-FC):** Requires twice the bandwidth of the original message signal.

---

## 3. Frequency Modulation (FM)

### 3.1 Principle of FM

In Frequency Modulation (FM), the **frequency** of the carrier signal is varied in proportion to the instantaneous amplitude of the modulating signal, while the amplitude and phase of the carrier signal remain constant.

**Mathematical Representation:**

*   **Modulating Signal (Message Signal):** $m(t)$
*   **Carrier Signal:** $c(t) = A_c \cos(2\pi f_c t)$
*   **Modulated Signal (FM):** $s_{FM}(t) = A_c \cos(2\pi [f_c + k_f m(t)] t)$
    *   $k_f$: Frequency sensitivity of the modulator

The instantaneous frequency of the FM signal is $f_i(t) = f_c + k_f m(t)$.

The term $k_f m(t)$ represents the frequency deviation from the carrier frequency. The maximum frequency deviation is $\Delta f = k_f \max|m(t)|$.

### 3.2 Bandwidth of FM

The bandwidth of an FM signal is generally wider than that of an AM signal. According to **Carson's Rule**, the bandwidth of an FM signal is approximately:

$BW_{FM} \approx 2(\Delta f + B)$

Where:
*   $\Delta f$: Maximum frequency deviation
*   $B$: Bandwidth of the modulating signal

The value of $\Delta f$ depends on the amplitude and frequency of the modulating signal.

### 3.3 Types of FM

*   **Narrowband FM (NBFM):**
    *   The frequency deviation $\Delta f$ is small compared to the modulating signal bandwidth $B$ ($\Delta f \ll B$).
    *   The bandwidth is approximately $BW_{NBFM} \approx 2B$. This makes it similar to AM in bandwidth requirements.
    *   Can be approximated by AM in some cases.

*   **Wideband FM (WBFM):**
    *   The frequency deviation $\Delta f$ is large compared to the modulating signal bandwidth $B$ ($\Delta f \gg B$).
    *   This results in a significantly wider bandwidth ($BW_{WBFM} \approx 2\Delta f$).
    *   Offers much better noise immunity.

### 3.4 Advantages and Disadvantages of FM

**Advantages:**

*   **Excellent Noise Immunity:** Noise primarily affects the amplitude of the signal. Since FM is insensitive to amplitude variations, it provides much better noise immunity compared to AM.
*   **Higher Fidelity:** Due to better noise immunity and wider bandwidth (allowing for a wider range of audio frequencies), FM generally offers higher fidelity audio transmission.
*   **No Amplitude Limiting Required:** The receiver does not need to limit the amplitude of the incoming signal to remove amplitude noise.

**Disadvantages:**

*   **Wider Bandwidth Requirement:** Especially for WBFM, it requires a significantly larger bandwidth than AM, limiting the number of FM channels that can be allocated in a given spectrum.
*   **More Complex Transmitter and Receiver:** FM generation and detection circuits are more complex and expensive than AM circuits.

---

## 4. Phase Modulation (PM)

### 4.1 Principle of PM

In Phase Modulation (PM), the **phase** of the carrier signal is varied in proportion to the instantaneous amplitude of the modulating signal, while the amplitude and frequency of the carrier signal remain constant.

**Mathematical Representation:**

*   **Modulating Signal (Message Signal):** $m(t)$
*   **Carrier Signal:** $c(t) = A_c \cos(2\pi f_c t)$
*   **Modulated Signal (PM):** $s_{PM}(t) = A_c \cos(2\pi f_c t + k_p m(t))$
    *   $k_p$: Phase sensitivity of the modulator

The instantaneous phase of the PM signal is $\phi(t) = 2\pi f_c t + k_p m(t)$. The phase deviation is $\Delta\phi = k_p \max|m(t)|$.

### 4.2 Relationship between FM and PM

FM and PM are closely related. A PM signal can be generated by first integrating the modulating signal and then applying it to an FM modulator. Conversely, an FM signal can be converted to a PM signal by integrating the modulating signal.

*   **FM from PM:** Integrate $m(t)$ to get $\int m(t) dt$, then use this as the modulating signal for a PM modulator. The output will be an FM signal.
    *   If $s_{PM}(t) = A_c \cos(2\pi f_c t + k_p m(t))$, then the instantaneous frequency is $f_i(t) = f_c + \frac{k_p}{2\pi} \frac{dm(t)}{dt}$. This is FM if $m(t)$ is integrated first.

*   **PM from FM:** Differentiate the modulating signal $m(t)$ and use this as the modulating signal for a PM modulator. The output will be an FM signal.
    *   If $s_{FM}(t) = A_c \cos(2\pi [f_c + k_f m(t)] t)$, then the phase is $2\pi f_c t + 2\pi k_f \int m(t) dt$. This is PM if $m(t)$ is differentiated first.

**Key Difference:**
The **bandwidth** of a PM signal depends on both the amplitude and **frequency** of the modulating signal. For a sinusoidal modulating signal $m(t) = M \cos(2\pi f_m t)$, the bandwidth of PM is the same as FM. However, for non-sinusoidal signals, the bandwidth characteristics differ.

### 4.3 Advantages and Disadvantages of PM

**Advantages:**

*   **Good Noise Immunity:** Similar to FM, PM is relatively immune to amplitude noise.
*   **Constant Amplitude:** The constant amplitude of the carrier is preserved, leading to efficient power utilization.

**Disadvantages:**

*   **Complexity:** PM generation and detection circuits are moderately complex.
*   **Bandwidth Dependence:** The bandwidth requirement of a PM signal depends on the frequency content of the modulating signal. Higher frequencies in the modulating signal lead to wider bandwidths for PM.
*   **Not as Robust as Wideband FM:** While it offers good noise immunity, it generally doesn't match the superior noise performance of Wideband FM.

---

## 5. Comparison of AM, FM, and PM

| Feature              | Amplitude Modulation (AM)                               | Frequency Modulation (FM)                                          | Phase Modulation (PM)                                            |
| :------------------- | :------------------------------------------------------ | :----------------------------------------------------------------- | :--------------------------------------------------------------- |
| **Modulated Property** | Amplitude                                               | Frequency                                                          | Phase                                                            |
| **Carrier Property** | Constant Amplitude, Constant Frequency                  | Constant Amplitude, Constant Frequency                             | Constant Amplitude, Constant Frequency                           |
| **Modulating Signal**| Varies Amplitude                                        | Varies Frequency                                                   | Varies Phase                                                     |
| **Noise Immunity**   | Poor (Amplitude noise directly affects signal)          | Excellent (Amplitude noise is rejected)                            | Good (Amplitude noise is rejected)                               |
| **Bandwidth**        | $2B$ (for DSB-FC)                                       | $2(\Delta f + B)$ (Carson's Rule), wider for WBFM                  | Depends on modulating signal frequency & amplitude; similar to FM for sinusoidal. |
| **Power Efficiency** | Poor (Carrier uses significant power)                   | Good (All power in the carrier)                                    | Good (All power in the carrier)                                  |
| **Complexity**       | Simple transmitter/receiver                             | Moderate to complex transmitter/receiver                           | Moderate transmitter/receiver                                    |
| **Applications**     | AM Radio Broadcasting, some voice communications        | FM Radio Broadcasting, TV sound, mobile communication, radar       | Data transmission, control systems, radar                        |
| **Fidelity**         | Lower                                                   | Higher                                                             | Higher                                                           |

---

## 6. Important Points to Remember

*   **Modulation is essential** to shift low-frequency analog signals to higher frequencies for efficient transmission and multiplexing.
*   **AM** is simple but susceptible to noise.
*   **FM** offers superior noise immunity at the cost of wider bandwidth and complexity.
*   **PM** is closely related to FM and also provides good noise immunity.
*   The **bandwidth** of FM and PM is generally wider than AM.
*   **Carson's Rule** is a useful approximation for the bandwidth of FM signals.
*   **Noise immunity** is a key advantage of FM and PM over AM.
*   **DSB-FC AM** is easy to demodulate with an envelope detector.
*   **DSB-SC AM** and **SSB AM** require coherent detection for demodulation.

---

## Practice Questions and Exercises

1.  **Explain why modulation is necessary for transmitting analog signals.**
2.  **Describe the process of Amplitude Modulation (AM). What are the different types of AM?**
3.  **A sinusoidal message signal $m(t) = 5 \cos(2\pi \times 1000t)$ is used to modulate a carrier signal $c(t) = 10 \cos(2\pi \times 100kHz \times t)$ using DSB-FC AM with an amplitude sensitivity $k_a = 0.5$.**
    *   **(a)** Write the mathematical expression for the modulated AM signal.
    *   **(b)** Identify the frequencies of the carrier, lower sideband, and upper sideband.
    *   **(c)** What is the bandwidth of this AM signal?
4.  **What is the main advantage of FM over AM in terms of noise immunity?**
5.  **If a modulating signal has a bandwidth of 5 kHz and the maximum frequency deviation in an FM system is 75 kHz, what is the approximate bandwidth of the FM signal using Carson's Rule?**
6.  **How is a Phase Modulated (PM) signal related to a Frequency Modulated (FM) signal?**
7.  **Compare the bandwidth requirements and noise immunity of AM, FM, and PM.**
8.  **Discuss the trade-offs involved in choosing between AM and FM for broadcasting.**

---

## Answers to Practice Questions

1.  **Why modulation is necessary:** Modulation shifts low-frequency analog signals to higher frequencies for efficient transmission, allowing for smaller antennas, enabling multiplexing, improving noise immunity, and matching channel characteristics.
2.  **AM Process and Types:** In AM, the amplitude of the carrier signal is varied in proportion to the instantaneous amplitude of the modulating signal. Types include DSB-FC (Standard AM), DSB-SC, SSB, and VSB.
3.  **AM Signal Calculation:**
    *   **(a)** $s_{AM}(t) = [10 + 0.5 \times 5 \cos(2\pi \times 1000t)] \cos(2\pi \times 100000t)$
        $s_{AM}(t) = [10 + 2.5 \cos(2\pi \times 1000t)] \cos(2\pi \times 100000t)$
    *   **(b)** Carrier frequency: $100 \text{ kHz}$. Message frequency: $1 \text{ kHz}$.
        Lower Sideband (LSB) frequency: $f_c - f_m = 100 \text{ kHz} - 1 \text{ kHz} = 99 \text{ kHz}$.
        Upper Sideband (USB) frequency: $f_c + f_m = 100 \text{ kHz} + 1 \text{ kHz} = 101 \text{ kHz}$.
    *   **(c)** Bandwidth = $2 \times (\text{maximum frequency of message signal}) = 2 \times 1000 \text{ Hz} = 2 \text{ kHz}$.
4.  **FM vs. AM Noise Immunity:** FM is much more immune to noise because noise primarily affects the amplitude of the signal, and FM receivers are designed to ignore amplitude variations, whereas AM receivers are sensitive to them.
5.  **FM Bandwidth:** $BW_{FM} \approx 2(\Delta f + B) = 2(75 \text{ kHz} + 5 \text{ kHz}) = 2(80 \text{ kHz}) = 160 \text{ kHz}$.
6.  **PM vs. FM Relationship:** A PM signal can be generated by integrating the message signal and then FM modulating it. Conversely, an FM signal can be converted to a PM signal by differentiating the message signal and then PM modulating it. The core difference lies in how the modulating signal's characteristics translate to frequency/phase variations.
7.  **Comparison:**
    *   **Bandwidth:** AM (DSB-FC) is $2B$. FM is $2(\Delta f + B)$. PM's bandwidth depends on the modulating signal's frequency spectrum. Generally, FM/PM require wider bandwidths than AM.
    *   **Noise Immunity:** AM has poor noise immunity. FM and PM have good to excellent noise immunity, with WBFM being the best.
8.  **AM vs. FM Trade-offs:**
    *   **AM:** Cheaper and simpler equipment, narrower bandwidth allows more channels. Lower fidelity, susceptible to noise.
    *   **FM:** Higher fidelity, excellent noise immunity. Wider bandwidth, more complex and expensive equipment.

---
This concludes the study notes for Analog Data to Analog Signal Modulation. Remember to review the key concepts and practice the calculations.
