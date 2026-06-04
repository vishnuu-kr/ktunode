---
title: "Amplitude shift keying"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 4: Digital bandpass communication :"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c06"
status: "completed"
scrapedAt: "2026-05-23T16:40:39.730Z"
---
# Electronic Communication: Module 4 - Digital Bandpass Communication: Amplitude Shift Keying (ASK)

## 1. Introduction to Digital Bandpass Communication

Digital communication systems transmit information in discrete form (bits). Bandpass communication is used for transmitting these digital signals over a radio frequency (RF) channel, which inherently has a limited bandwidth. This involves modulating a carrier wave with the digital data.

**Key Concepts:**

*   **Digital Data:** Information represented as a sequence of binary digits (0s and 1s).
*   **Bandpass Channel:** A communication channel that allows signals within a specific range of frequencies to pass through, attenuating signals outside this range.
*   **Modulation:** The process of varying one or more properties of a periodic waveform (the carrier signal) with a modulating signal (the information-bearing signal). In digital bandpass modulation, the digital data controls the carrier wave.
*   **Demodulation:** The reverse process of modulation, where the original digital data is extracted from the received modulated signal.

**Relevance to Course Outcomes:**

*   **CO3: Understand the various processing blocks of a digital communication system. (Knowledge Level: K2)**
    *   This module directly addresses the modulation and demodulation blocks within a digital communication system.

## 2. Amplitude Shift Keying (ASK)

Amplitude Shift Keying (ASK) is a digital modulation technique where the amplitude of a carrier signal is varied to represent binary data. It is one of the simplest forms of digital modulation.

### 2.1 Basic Principle of ASK

In Binary ASK (BASK), two different amplitudes of the carrier signal are used to represent the two binary digits, '0' and '1'.

*   **For a binary '1':** The carrier signal is transmitted with a certain amplitude (usually non-zero).
*   **For a binary '0':** The carrier signal is transmitted with a different amplitude (often zero, which is called On-Off Keying or OOK).

**Mathematical Representation:**

Let the carrier signal be $s(t) = A_c \cos(2\pi f_c t)$, where:
*   $A_c$ is the carrier amplitude.
*   $f_c$ is the carrier frequency.

In ASK, the transmitted signal $s_T(t)$ can be represented as:

$s_T(t) = \begin{cases} A_1 \cos(2\pi f_c t) & \text{for binary '1'} \\ A_0 \cos(2\pi f_c t) & \text{for binary '0'} \end{cases}$

**Special Case: On-Off Keying (OOK)**

OOK is a common form of ASK where:
*   $A_1 = A$ (a non-zero amplitude)
*   $A_0 = 0$ (zero amplitude)

$s_{OOK}(t) = \begin{cases} A \cos(2\pi f_c t) & \text{for binary '1'} \\ 0 & \text{for binary '0'} \end{cases}$

**Multi-level ASK (M-ASK):**

ASK can be extended to more than two amplitude levels, allowing for the transmission of more than one bit per symbol. For an M-ASK system, there are $M$ possible amplitude levels, and each symbol represents $\log_2 M$ bits.

$s_{M-ASK}(t) = A_k \cos(2\pi f_c t)$, where $k = 0, 1, \dots, M-1$, and $A_k$ are the distinct amplitude levels.

**Example:**

Consider a binary data stream: `10110`.
If we use OOK with carrier amplitude $A$ for '1' and 0 for '0':

*   '1': Transmit $A \cos(2\pi f_c t)$
*   '0': Transmit $0$

The transmitted signal would be a sequence of pulses of amplitude $A$ and gaps of zero amplitude, modulated by the carrier.

**Textbook References:**

*   **Kennedy, Davis and Prasanna:** Likely discusses basic modulation schemes including ASK in early chapters related to amplitude modulation.
*   **Wayne Tomasi:** Provides a comprehensive treatment of digital modulation techniques, including ASK, in chapters dedicated to digital modulation.
*   **Haykin and Mohre:** Offers theoretical insights into digital modulation, potentially covering ASK from a signal processing perspective.
*   **Taub & Schilling:** A foundational text that will cover the principles of ASK, including mathematical derivations and practical considerations.
*   **Proakis and Salehi:** May discuss ASK within the broader context of digital communication systems, including performance analysis.
*   **Lathi and Ding:** Will likely cover ASK in detail, possibly with explanations of its advantages and disadvantages.

**Relevance to Course Outcomes:**

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations. (Knowledge Level: K2)**
    *   This section provides the mathematical basis for ASK modulation.
*   **CO4: Apply the knowledge of digital modulation in digital transmission. (Knowledge Level: K3)**
    *   Understanding ASK is a direct application of digital modulation for transmission.

### 2.2 ASK Modulator

An ASK modulator generates the modulated signal by varying the amplitude of the carrier based on the input digital data.

**Implementation using a multiplier:**

The most straightforward way to implement an ASK modulator is by multiplying the carrier signal with a binary data signal that is shaped to represent the bits.

Let the input binary data be represented by a sequence of pulses $d(t)$:
*   $d(t) = 1$ for a binary '1'
*   $d(t) = 0$ for a binary '0' (in OOK)

The modulator output is $s_{ASK}(t) = d(t) \cdot s_c(t)$, where $s_c(t) = A_c \cos(2\pi f_c t)$ is the carrier.

**Example (OOK):**

If $d(t)$ is a pulse train representing `101`:
*   For '1': $d(t)=1$, $s_{ASK}(t) = 1 \cdot A_c \cos(2\pi f_c t) = A_c \cos(2\pi f_c t)$
*   For '0': $d(t)=0$, $s_{ASK}(t) = 0 \cdot A_c \cos(2\pi f_c t) = 0$

**More generalized M-ASK modulator:**

For M-ASK, the input data bits are first converted into a sequence of symbols, where each symbol corresponds to one of the M amplitude levels. This is typically achieved using a **Digital-to-Analog Converter (DAC)** followed by a **gain control circuit** or directly using a DAC that outputs different voltage levels.

**Important Point:** The pulse shaping of the input data signal $d(t)$ (e.g., NRZ, RZ) influences the bandwidth occupied by the ASK signal.

### 2.3 ASK Demodulator

An ASK demodulator extracts the original binary data from the received ASK modulated signal. This typically involves detecting the amplitude of the received signal.

**Coherent Demodulation:**

Coherent demodulators require a locally generated carrier signal that is phase-locked with the incoming carrier.

1.  **Product Modulator (Mixer):** The received ASK signal $r(t)$ is multiplied with a locally generated carrier $A_c \cos(2\pi f_c t)$.
    $y(t) = r(t) \cdot A_c \cos(2\pi f_c t)$

2.  **Low-Pass Filter (LPF):** The output of the mixer contains sum and difference frequency components. The LPF removes the sum frequency components, leaving the baseband signal.
    *   If $r(t) = A_1 \cos(2\pi f_c t)$ (for '1'): $y(t) = A_1 A_c \cos^2(2\pi f_c t) = \frac{A_1 A_c}{2} (1 + \cos(4\pi f_c t))$. After LPF, we get $\frac{A_1 A_c}{2}$.
    *   If $r(t) = A_0 \cos(2\pi f_c t)$ (for '0'): $y(t) = A_0 A_c \cos^2(2\pi f_c t) = \frac{A_0 A_c}{2} (1 + \cos(4\pi f_c t))$. After LPF, we get $\frac{A_0 A_c}{2}$.

3.  **Decision Circuit (Threshold Detector):** A threshold voltage $V_{th}$ is used to decide whether the detected amplitude corresponds to a '1' or a '0'.
    *   If the LPF output voltage $> V_{th}$, decide '1'.
    *   If the LPF output voltage $< V_{th}$, decide '0'.

For OOK ($A_0=0$), the threshold is typically set to $V_{th} = \frac{A \cdot A_c}{4}$ (half of the expected amplitude for '1', assuming ideal conditions and carrier amplitude $A_c$).

**Non-Coherent Demodulation:**

Non-coherent demodulators do not require a synchronized local oscillator.

1.  **Envelope Detector:** For OOK, an envelope detector (a diode, resistor, and capacitor) can directly track the amplitude envelope of the received signal.
    *   When the carrier is present (for '1'), the envelope detector output will follow the amplitude $A$.
    *   When the carrier is absent (for '0'), the output will be close to zero.

2.  **Decision Circuit:** A threshold detector is used, similar to the coherent case.

**Textbook References:**

*   **Kennedy, Davis and Prasanna:** Will cover demodulation techniques for amplitude modulated signals, which can be adapted for digital ASK.
*   **Wayne Tomasi:** Details various demodulator structures, including coherent and non-coherent receivers for ASK.
*   **Simon Haykin:** Provides a theoretical framework for signal detection and estimation, relevant to understanding demodulator design.
*   **Taub & Schilling:** Offers detailed explanations of envelope detectors and coherent receivers for AM signals, applicable to ASK.
*   **Leon Couch:** Discusses the block diagrams and operations of digital modulators and demodulators.

**Relevance to Course Outcomes:**

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations. (Knowledge Level: K2)**
    *   This section provides the functional blocks and mathematical operations for ASK demodulation.

### 2.4 Performance of ASK

The performance of ASK is typically evaluated in terms of its error probability and bandwidth efficiency.

**Probability of Error ($P_e$):**

The probability of error in ASK is primarily due to noise, which can cause the amplitude of the received signal to fluctuate, leading to incorrect decisions by the threshold detector.

**For OOK (Binary Symmetric Channel with Additive White Gaussian Noise - AWGN):**

If the two transmitted amplitudes are $A$ (for '1') and $0$ (for '0'), and assuming equal probability of transmitting '1' and '0':

The average received signal energy per bit is $E_b = \frac{A^2 T_b}{2}$, where $T_b$ is the bit duration.

The probability of bit error for coherent OOK is given by:
$P_e = Q\left(\frac{A}{2\sqrt{N_0}}\right) = Q\left(\sqrt{\frac{E_b}{N_0}}\right)$

where:
*   $Q(x) = \frac{1}{\sqrt{2\pi}} \int_{x}^{\infty} e^{-t^2/2} dt$ is the Q-function.
*   $N_0$ is the power spectral density of the additive white Gaussian noise.
*   $\frac{E_b}{N_0}$ is the signal-to-noise ratio (SNR) per bit.

**For non-coherent OOK:** The probability of error is slightly higher than coherent OOK.

**M-ASK:** For M-ASK, the probability of symbol error depends on the separation between amplitude levels and the noise variance.

**Bandwidth Efficiency:**

Bandwidth efficiency is a measure of how effectively the available bandwidth is used to transmit data. It is usually expressed in bits per second per Hertz (bps/Hz).

For ASK, the minimum bandwidth required for transmitting a bit stream at a rate $R_b$ (bits per second) is roughly equal to $R_b$. This is because the baseband pulses have a bandwidth related to $R_b$, and the modulated signal bandwidth is centered around $f_c$.

Bandwidth Efficiency $(\eta) = \frac{R_b}{B_{min}}$, where $B_{min}$ is the minimum bandwidth required.
For ASK, $\eta \approx 1$ bps/Hz (assuming ideal Nyquist pulses for baseband shaping).

**Trade-offs:**

*   **Simplicity:** ASK is simple to implement.
*   **Power Efficiency:** ASK is less power-efficient compared to other modulation schemes like PSK or FSK, especially when the amplitude difference between the two states is small, or in the presence of noise. To achieve a low error rate, a higher transmit power is often required.
*   **Bandwidth Efficiency:** ASK offers reasonable bandwidth efficiency.

**Textbook References:**

*   **Kennedy, Davis and Prasanna:** Discusses SNR and its impact on error rates for various modulation schemes.
*   **Wayne Tomasi:** Provides detailed analysis of error probabilities for ASK and compares it with other digital modulations.
*   **Simon Haykin:** Covers theoretical aspects of communication system performance, including error probability calculations.
*   **Taub & Schilling:** Offers formulas and derivations for error probabilities in the presence of noise.
*   **Proakis and Salehi:** Presents performance analysis, including SNR requirements for desired error rates.
*   **B. P. Lathi, Zhi Ding:** Provides a comprehensive comparison of different digital modulation schemes based on their power and bandwidth efficiencies.

**Relevance to Course Outcomes:**

*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency. (Knowledge Level: K3)**
    *   While this course outcome focuses on analog modulation, understanding the performance metrics (power, efficiency) of digital ASK helps draw parallels and understand trade-offs in communication systems broadly.
*   **CO4: Apply the knowledge of digital modulation in digital transmission. (Knowledge Level: K3)**
    *   Understanding performance metrics is crucial for applying digital modulation techniques effectively.

### 2.5 Advantages and Disadvantages of ASK

**Advantages:**

*   **Simple to Implement:** The circuitry for ASK modulation and demodulation is relatively simple, especially for OOK.
*   **Low Cost:** Due to its simplicity, ASK systems are generally less expensive to build.
*   **Reasonable Bandwidth Efficiency:** Offers decent bandwidth efficiency, comparable to PSK.

**Disadvantages:**

*   **Susceptible to Noise and Interference:** Amplitude variations make ASK vulnerable to amplitude-limited noise and other forms of interference that affect the signal amplitude. Envelope detectors, used in non-coherent demodulation, are particularly sensitive to noise.
*   **Requires High Transmit Power:** To achieve a low error rate, ASK often requires higher transmit power compared to FSK or PSK, especially in noisy channels. This is because a significant amplitude difference is needed between the two states to distinguish them reliably from noise.
*   **Non-linearity Issues:** Amplifiers in the transmission path can introduce non-linearities, which can distort the amplitude of the ASK signal, leading to increased errors.

**Textbook References:**

*   **Wayne Tomasi:** Provides a comparative analysis of different digital modulation schemes, highlighting their pros and cons.
*   **Taub & Schilling:** Discusses the practical limitations and performance trade-offs of ASK.
*   **Leon Couch:** Compares ASK with other digital modulation techniques in terms of complexity, power, and bandwidth.

**Relevance to Course Outcomes:**

*   **CO4: Apply the knowledge of digital modulation in digital transmission. (Knowledge Level: K3)**
    *   Understanding the advantages and disadvantages is critical for choosing the appropriate modulation scheme for a given application.

## 3. Applications of ASK

ASK is used in applications where simplicity and low cost are prioritized, and the channel conditions are relatively benign or data rates are not excessively high.

*   **Radio Frequency Identification (RFID):** Very common in passive and active RFID tags for short-range communication. The low power requirements of RFID systems make ASK a suitable choice.
*   **Remote Controls:** Simple remote controls (e.g., for garage doors, toys) often use OOK.
*   **Fiber Optic Communication:** Although less common for high-speed links compared to other techniques, ASK can be used for lower-speed optical data transmission.
*   **Consumer Electronics:** Certain wireless devices and simple data transmission links.
*   **Early Modems:** Some older modem technologies used ASK.

**Textbook References:**

*   **Wayne Tomasi:** May include examples of ASK applications in sections discussing digital modulation.
*   **Kennedy, Davis and Prasanna:** Could mention applications in broader discussions of communication systems.

**Relevance to Course Outcomes:**

*   **CO4: Apply the knowledge of digital modulation in digital transmission. (Knowledge Level: K3)**
    *   Understanding where ASK is applied reinforces its practical relevance.

## 4. Practice Questions and Exercises

**Question 1:**
Describe the basic principle of Binary Amplitude Shift Keying (BASK). How is a binary '1' represented and how is a binary '0' represented in On-Off Keying (OOK)?

**Answer 1:**
In Binary Amplitude Shift Keying (BASK), the amplitude of a carrier signal is varied to represent binary data. In On-Off Keying (OOK), a specific amplitude (e.g., $A$) is used to represent a binary '1', and zero amplitude is used to represent a binary '0'. Effectively, a pulse of the carrier is transmitted for a '1', and no pulse (or a zero-amplitude carrier) is transmitted for a '0'.

**Question 2:**
Sketch the block diagram of a coherent ASK demodulator. Explain the function of each block.

**Answer 2:**
A coherent ASK demodulator typically consists of:
1.  **Product Modulator (Mixer):** Multiplies the received ASK signal with a locally generated carrier signal that is synchronized in frequency and phase.
2.  **Low-Pass Filter (LPF):** Removes high-frequency components (sum frequencies) from the mixer output, leaving the baseband signal proportional to the original amplitude.
3.  **Decision Circuit (Threshold Detector):** Compares the output of the LPF to a predefined threshold voltage. If the voltage is above the threshold, it decides '1'; otherwise, it decides '0'.

**Question 3:**
What is the main advantage of ASK over PSK and FSK in terms of implementation complexity? What is its main disadvantage?

**Answer 3:**
The main advantage of ASK is its **simplicity of implementation**, especially for OOK, which requires less complex circuitry compared to PSK and FSK. Its main disadvantage is its **susceptibility to noise and interference** that affect amplitude, and it generally requires **higher transmit power** to achieve a comparable error rate to PSK or FSK.

**Question 4:**
If an ASK system transmits data at 1 Mbps (R_b = 1 x 10^6 bps), what is the approximate minimum bandwidth required for transmission? What is the bandwidth efficiency?

**Answer 4:**
For ASK, the minimum bandwidth required is approximately equal to the data rate.
Minimum Bandwidth ($B_{min}$) $\approx R_b = 1 \times 10^6$ Hz or 1 MHz.

Bandwidth Efficiency ($\eta$) = $\frac{R_b}{B_{min}} = \frac{1 \times 10^6 \text{ bps}}{1 \times 10^6 \text{ Hz}} = 1$ bps/Hz.

**Question 5:**
How does additive white Gaussian noise (AWGN) affect the performance of an ASK system? Write the formula for the probability of error for coherent OOK in terms of $E_b/N_0$.

**Answer 5:**
AWGN adds random voltage fluctuations to the received signal, which can cause the detected amplitude to deviate from its intended value. This can lead to the decision circuit making incorrect decisions (e.g., mistaking a '0' for a '1' or vice-versa).
The probability of bit error ($P_e$) for coherent OOK in AWGN is:
$P_e = Q\left(\sqrt{\frac{E_b}{N_0}}\right)$

## 5. Important Points to Remember

*   **ASK Principle:** Varies carrier amplitude to represent digital data.
*   **OOK:** A specific form of ASK where one amplitude is $A$ and the other is 0.
*   **Modulator:** Typically a multiplier that combines data signal with carrier.
*   **Demodulator:** Can be coherent (requires synchronized carrier) or non-coherent (e.g., envelope detector for OOK).
*   **Performance:** Susceptible to noise, less power-efficient than PSK/FSK, but simple.
*   **Bandwidth Efficiency:** Approximately 1 bps/Hz.
*   **Applications:** RFID, remote controls, simple data links.

This comprehensive set of notes covers Amplitude Shift Keying, aligning with the provided learning outcomes and course outcomes, and references the specified textbooks and reference books.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
