---
title: "Digital bandpass communication :"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 4: Digital bandpass communication :"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c03"
status: "completed"
scrapedAt: "2026-05-23T16:40:33.750Z"
---
# Module 4: Digital Bandpass Communication

## 1. Introduction to Digital Bandpass Communication

### 1.1 Why Bandpass Communication?

*   **Limited Spectrum:** Most communication channels operate within a specific frequency range (e.g., radio waves, coaxial cables).
*   **Efficient Spectrum Utilization:** Bandpass modulation allows us to transmit digital information over these limited frequency bands.
*   **Noise Immunity:** Bandpass filtering can help to reduce out-of-band noise.
*   **Antenna Size:** The required antenna size is inversely proportional to the carrier frequency. Higher frequencies allow for smaller antennas, which are practical for many applications.

### 1.2 Digital vs. Analog Bandpass Communication

| Feature             | Analog Bandpass Communication                                | Digital Bandpass Communication                                     |
| :------------------ | :----------------------------------------------------------- | :----------------------------------------------------------------- |
| Information Signal  | Continuous, varying over time.                               | Discrete, represented by binary digits (bits).                     |
| Modulation Schemes  | AM, FM, PM                                                   | ASK, FSK, PSK, QAM                                                 |
| Signal Processing   | Relatively simpler circuits (mixers, filters, oscillators).  | Requires digital signal processing (DSP) techniques, ADC, DAC, etc. |
| Noise Performance   | Susceptible to noise, leading to signal degradation.         | More robust to noise due to error correction and detection codes.    |
| Bandwidth           | Can be less efficient in bandwidth utilization.              | Generally more bandwidth-efficient, especially with advanced schemes. |
| Complexity          | Lower hardware complexity for basic systems.                 | Higher hardware complexity, but greater flexibility with software. |
| Data Rate           | Limited by the bandwidth and noise.                          | Can achieve very high data rates.                                  |

### 1.3 Key Concepts

*   **Carrier Signal:** A sinusoidal signal of a specific frequency ($f_c$) used to "carry" the digital information. It is represented as $s_c(t) = A_c \cos(2\pi f_c t + \phi_c)$.
*   **Modulating Signal:** The digital data sequence (typically binary 0s and 1s).
*   **Modulated Signal:** The carrier signal whose properties (amplitude, frequency, or phase) are altered according to the modulating signal.
*   **Baseband Signal:** The original digital signal before modulation.
*   **Bandpass Signal:** A signal whose frequency content is concentrated around a non-zero carrier frequency.

**Reference:** Kennedy's Electronic Communication Systems, Chapter 12 (Digital Modulation Techniques).

## 2. Digital Bandpass Modulation Schemes

Digital bandpass modulation techniques use a carrier signal to transmit digital data. The digital data (bits) are used to modify one or more of the carrier signal's parameters: amplitude, frequency, or phase.

### 2.1 Amplitude Shift Keying (ASK)

*   **Concept:** The amplitude of the carrier signal is varied to represent different digital symbols. For binary ASK, two amplitude levels are used, typically one for '0' and one for '1'.
*   **Mathematical Representation:**
    *   For a binary '1': $s_1(t) = A_1 \cos(2\pi f_c t)$
    *   For a binary '0': $s_0(t) = A_0 \cos(2\pi f_c t)$
    *   Often, $A_0 = 0$ (On-Off Keying - OOK).
*   **Spectrum:** The spectrum of ASK consists of the carrier frequency and two sidebands. The bandwidth is approximately $2B$, where $B$ is the bit rate.
*   **Advantages:** Simple to implement.
*   **Disadvantages:** Susceptible to amplitude variations and noise. Power inefficient compared to other schemes.
*   **Example:** Imagine a flashlight blinking: on for '1', off for '0'.

**Reference:** Tomasi's Electronic Communication Systems, Chapter 10 (Digital Modulation).

### 2.2 Frequency Shift Keying (FSK)

*   **Concept:** The frequency of the carrier signal is varied to represent different digital symbols. For binary FSK, two frequencies are used, one for '0' and one for '1'.
*   **Mathematical Representation:**
    *   For a binary '1': $s_1(t) = A_c \cos(2\pi f_1 t)$
    *   For a binary '0': $s_0(t) = A_c \cos(2\pi f_0 t)$
    *   Where $f_1 = f_c + \Delta f$ and $f_0 = f_c - \Delta f$, and $\Delta f$ is the frequency deviation. The difference between $f_1$ and $f_0$ is usually greater than the bit rate ($B$) to ensure orthogonality of the signals.
*   **Spectrum:** The spectrum of FSK spreads around both $f_0$ and $f_1$. The bandwidth is approximately $2(f_1 - f_0) = 4 \Delta f$. For non-coherent detection, the bandwidth is approximately $B + 2\Delta f$. For coherent detection, it can be as low as $B$.
*   **Advantages:** More robust to noise and amplitude variations than ASK. Simpler to demodulate non-coherently.
*   **Disadvantages:** Less bandwidth-efficient than PSK.

**Reference:** Haykin & Mohre's Communication Systems, Chapter 4 (Digital Modulation).

### 2.3 Phase Shift Keying (PSK)

*   **Concept:** The phase of the carrier signal is varied to represent different digital symbols.
*   **Binary PSK (BPSK):**
    *   **Concept:** Two phases are used: $0^\circ$ for '1' and $180^\circ$ for '0'.
    *   **Mathematical Representation:**
        *   For a binary '1': $s_1(t) = A_c \cos(2\pi f_c t)$
        *   For a binary '0': $s_0(t) = A_c \cos(2\pi f_c t + \pi) = -A_c \cos(2\pi f_c t)$
    *   **Spectrum:** Similar to ASK, bandwidth is approximately $2B$.
    *   **Advantages:** Relatively good noise immunity for its bandwidth.
    *   **Disadvantages:** Requires coherent demodulation, which is more complex.
*   **Quadrature Phase Shift Keying (QPSK):**
    *   **Concept:** Uses four phases (e.g., $45^\circ, 135^\circ, 225^\circ, 315^\circ$) to represent two bits per symbol. This doubles the data rate for the same bandwidth as BPSK.
    *   **Mathematical Representation:**
        *   Symbol 00: $s_1(t) = A_c \cos(2\pi f_c t + \pi/4)$
        *   Symbol 01: $s_2(t) = A_c \cos(2\pi f_c t + 3\pi/4)$
        *   Symbol 10: $s_3(t) = A_c \cos(2\pi f_c t + 5\pi/4)$
        *   Symbol 11: $s_4(t) = A_c \cos(2\pi f_c t + 7\pi/4)$
    *   **Spectrum:** Bandwidth is approximately $B$, where $B$ is the symbol rate (which is half the bit rate).
    *   **Advantages:** More bandwidth-efficient than BPSK.
    *   **Disadvantages:** Requires coherent demodulation. More complex than BPSK.
*   **M-ary PSK:** Uses $M$ phases to represent $\log_2 M$ bits per symbol.

**Reference:** Taub & Schilling's Principles of Communication Systems, Chapter 13 (Digital Modulation).

### 2.4 Quadrature Amplitude Modulation (QAM)

*   **Concept:** Combines Amplitude Shift Keying (ASK) and Phase Shift Keying (PSK). Both the amplitude and phase of the carrier are varied to represent digital symbols.
*   **Mathematical Representation:**
    $s_k(t) = A_k \cos(2\pi f_c t + \phi_k)$
    where $A_k$ and $\phi_k$ are chosen from a set of possible amplitude and phase values.
*   **Types:**
    *   **2-ASK/2-PSK (Gray code mapping):** Equivalent to QPSK.
    *   **4-ASK/4-PSK (16-QAM):** Uses 16 different combinations of amplitude and phase to represent 4 bits per symbol.
    *   **Higher Order QAM (64-QAM, 256-QAM):** Used for higher data rates but requires better signal-to-noise ratio (SNR) and more complex circuitry.
*   **Spectrum:** The bandwidth of QAM is approximately $B$, where $B$ is the symbol rate.
*   **Advantages:** Very bandwidth-efficient. Allows for high data rates.
*   **Disadvantages:** Highly susceptible to noise and non-linearities in the channel. Requires coherent demodulation and precise control of amplitude and phase.

**Reference:** Proakis & Salehi's Communication System Engineering, Chapter 4 (Digital Modulation Techniques).

## 3. Digital Bandpass Demodulation

Demodulation involves recovering the original digital data from the received modulated signal. This typically involves correlating the received signal with locally generated versions of the possible transmitted signals.

### 3.1 Coherent vs. Non-Coherent Demodulation

*   **Coherent Demodulation:** Requires knowledge of the carrier's phase at the receiver. Typically involves a phase-locked loop (PLL) or Costas loop to recover the carrier. This method offers better performance (lower error rates) but is more complex.
*   **Non-Coherent Demodulation:** Does not require precise knowledge of the carrier's phase. Simpler to implement but generally has lower performance than coherent demodulation.

### 3.2 Demodulation Techniques

*   **ASK Demodulation:**
    *   **Coherent:** Involves multiplying the received signal with a locally generated carrier, followed by a low-pass filter and a decision device.
    *   **Non-Coherent:** Can use envelope detectors.
*   **FSK Demodulation:**
    *   **Coherent:** Uses two correlators, one tuned to $f_0$ and the other to $f_1$, followed by a decision device.
    *   **Non-Coherent:** Can use discriminator detection or frequency discriminators.
*   **PSK Demodulation:**
    *   **Coherent:** Crucial for PSK. Involves multiplying the received signal with two locally generated carriers that are in phase quadrature ($ \cos(2\pi f_c t)$ and $\sin(2\pi f_c t)$), followed by low-pass filters to get two baseband signals. These are then sampled and compared to decide the transmitted phase.
    *   **Non-Coherent:** Less common for PSK due to performance degradation.
*   **QAM Demodulation:**
    *   **Coherent:** Similar to PSK demodulation, but involves amplitude decisions as well. The received signal is multiplied by two quadrature carriers, filtered, and then sampled. The sampled values (in-phase and quadrature components) are then mapped back to the original symbols based on their amplitudes and phases.

**Reference:** Lathi & Ding's Modern Digital and Analog Communication Systems, Chapter 7 (Digital Modulation).

## 4. Performance of Digital Bandpass Communication Systems

The performance of these systems is typically evaluated in terms of:

*   **Bit Error Rate (BER):** The probability that a transmitted bit is received incorrectly.
*   **Bandwidth Efficiency:** The amount of data that can be transmitted per unit of bandwidth (e.g., bits per second per Hertz).
*   **Power Efficiency:** The amount of power required to achieve a certain BER.

### 4.1 Signal-to-Noise Ratio (SNR)

*   **Definition:** The ratio of the power of the desired signal to the power of the noise. Crucial for determining BER.
*   **Relationship to BER:** Higher SNR generally leads to lower BER.
*   **Noise Power Spectral Density ($N_0/2$):** A measure of the noise power per unit bandwidth.

### 4.2 Bandwidth Efficiency

*   **Definition:** $\eta = \frac{\text{Data Rate (bps)}}{\text{Bandwidth (Hz)}}$ (often expressed in bits/sec/Hz).
*   **Comparison:**
    *   BPSK: $\eta = 1$ bit/sec/Hz (approx.)
    *   QPSK: $\eta = 2$ bits/sec/Hz (approx.)
    *   M-ary PSK/QAM: $\eta = \log_2 M$ bits/sec/Hz (approx.)
    *   FSK: Lower bandwidth efficiency compared to PSK.

### 4.3 Power Efficiency

*   **Comparison:** For the same BER, PSK and QAM are generally more power-efficient than ASK and FSK. Higher-order modulation schemes (e.g., 16-QAM) require higher SNRs to achieve the same BER as lower-order schemes (e.g., BPSK).

**Important Point:** There is a trade-off between bandwidth efficiency and power efficiency. Schemes that are more bandwidth-efficient (like higher-order QAM) typically require more power (higher SNR) to achieve a given BER.

**Reference:** Ziemer & Tranter's Principles of Communications, Chapter 6 (Digital Modulation and Detection).

## 5. Processing Blocks in a Digital Communication System (Revisited for Bandpass)

This module reinforces the understanding of the fundamental blocks of a digital communication system as they apply to bandpass transmission.

*   **Source:** Generates the digital data (bits).
*   **Encoder (Optional):** Adds redundancy for error detection and correction.
*   **Channel Encoder:** Implements forward error correction (FEC).
*   **Modulator:** Converts the digital baseband signal into a bandpass signal suitable for transmission over the channel. This is where ASK, FSK, PSK, QAM techniques are applied.
*   **Channel:** The physical medium through which the signal propagates (e.g., air, cable), introducing noise and distortion.
*   **Demodulator:** Recovers the digital signal from the received bandpass signal. This involves detecting the variations in amplitude, frequency, or phase.
*   **Channel Decoder:** Removes redundancy and corrects errors introduced by the channel.
*   **Regenerator/Decision Device:** Makes a final decision on the received bits.
*   **Sink:** Receives the reconstructed digital data.

**Course Outcome Alignment:** This section directly addresses CO3: "Understand the various processing blocks of a digital communication system."

## 6. Practice Questions and Exercises

**Question 1:**
Which digital bandpass modulation scheme is generally considered the most bandwidth-efficient?
a) ASK
b) BPSK
c) FSK
d) QAM

**Answer:** d) QAM

**Question 2:**
Explain the primary difference between coherent and non-coherent demodulation in digital bandpass systems.

**Answer:** Coherent demodulation requires the receiver to have precise knowledge of the carrier's phase, often achieved using a Phase-Locked Loop (PLL). Non-coherent demodulation does not require this phase information, making it simpler but generally less performant.

**Question 3:**
If a system uses QPSK modulation, what is the approximate bandwidth efficiency in bits/sec/Hz?

**Answer:** For QPSK, two bits are transmitted per symbol. The bandwidth is approximately proportional to the symbol rate. Therefore, the bandwidth efficiency is approximately 2 bits/sec/Hz.

**Question 4:**
A communication system transmits digital data using Binary Phase Shift Keying (BPSK). The carrier frequency is 100 MHz, and the bit rate is 1 Mbps.
a) Write the mathematical expression for the transmitted signal if the first bit is '1' and the second bit is '0'. Assume the amplitude is $A_c$ and the phase is 0 for a '1'.
b) What is the approximate bandwidth required for this BPSK signal?

**Answer:**
a) For BPSK:
*   If bit is '1': $s_1(t) = A_c \cos(2\pi \times 100 \times 10^6 t)$
*   If bit is '0': $s_0(t) = A_c \cos(2\pi \times 100 \times 10^6 t + \pi) = -A_c \cos(2\pi \times 100 \times 10^6 t)$

So, if the first bit is '1' and the second is '0', the transmitted signal is a concatenation of $s_1(t)$ for the first $1 \mu s$ and $s_0(t)$ for the next $1 \mu s$.

b) The bandwidth required for BPSK is approximately twice the bit rate.
Bandwidth $\approx 2 \times \text{Bit Rate} = 2 \times 1 \text{ Mbps} = 2 \text{ MHz}$.

**Question 5:**
What is the main advantage of using QAM over PSK for the same bandwidth?

**Answer:** QAM can achieve higher data rates for the same bandwidth compared to PSK by encoding more bits per symbol through variations in both amplitude and phase. For example, 16-QAM can transmit 4 bits per symbol, whereas BPSK transmits only 1 bit per symbol.

## 7. Important Points to Remember

*   **Bandpass modulation is essential for transmitting digital data over radio frequencies.**
*   **ASK, FSK, PSK, and QAM are the primary digital bandpass modulation techniques.**
*   **The choice of modulation scheme involves trade-offs between bandwidth efficiency, power efficiency, and implementation complexity.**
*   **QAM offers the highest bandwidth efficiency, but requires higher SNR and is more complex.**
*   **Coherent demodulation generally provides better performance (lower BER) than non-coherent demodulation but is more complex.**
*   **SNR is a critical factor determining the performance (BER) of digital communication systems.**
*   **The processing blocks (modulation, channel, demodulation) work together to transmit and receive digital information accurately.**

This module provides a foundational understanding of how digital data is transmitted efficiently over bandpass channels, a crucial aspect of modern communication systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
