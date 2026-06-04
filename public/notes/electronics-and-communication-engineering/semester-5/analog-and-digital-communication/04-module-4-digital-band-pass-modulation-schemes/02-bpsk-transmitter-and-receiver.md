---
title: "BPSK transmitter and receiver."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 4: Digital band pass modulation schemes"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe919"
status: "completed"
scrapedAt: "2026-05-23T17:53:04.862Z"
---
# ANALOG AND DIGITAL COMMUNICATION - Module 4: Digital Band Pass Modulation Schemes

## Topic: Binary Phase Shift Keying (BPSK) Transmitter and Receiver

### 1. Introduction to Band Pass Modulation Schemes

*   **Purpose:** Digital band pass modulation schemes are used to transmit digital information over a band-limited analog channel, typically a radio frequency (RF) channel. This is achieved by modulating a carrier signal with the digital data.
*   **Why Band Pass?** Baseband digital signals (e.g., pulses) often have significant DC components and low-frequency content, making them unsuitable for direct transmission over channels that block DC and have limited bandwidth. Band pass modulation shifts the digital signal spectrum to a higher frequency range.
*   **Key Parameters:**
    *   **Carrier Frequency ($f_c$):** The frequency of the sinusoidal carrier signal.
    *   **Bandwidth:** The range of frequencies occupied by the modulated signal.
    *   **Data Rate ($R_b$):** The number of bits transmitted per second.
    *   **Symbol Rate ($R_s$):** The number of distinct symbols transmitted per second. For BPSK, symbol rate equals data rate ($R_s = R_b$).
*   **Course Outcomes Alignment:** This section addresses **CO2** (Explain the basic concepts of digital communication) by introducing the fundamental need for digital band pass modulation.

### 2. Binary Phase Shift Keying (BPSK)

*   **Definition:** BPSK is the simplest form of phase shift keying, where the phase of the carrier signal is shifted by 180 degrees to represent binary data. One phase represents a binary '0', and the other phase represents a binary '1'.
*   **Key Concept:** BPSK is a coherent modulation scheme, meaning the receiver needs to know the phase of the carrier signal to correctly demodulate the data.
*   **Representation:**
    *   If the binary digit is '1', the transmitted signal is $s_1(t) = A \cos(2\pi f_c t)$ for $0 \le t \le T_b$, where $A$ is the amplitude and $T_b$ is the bit duration.
    *   If the binary digit is '0', the transmitted signal is $s_0(t) = -A \cos(2\pi f_c t) = A \cos(2\pi f_c t + \pi)$ for $0 \le t \le T_b$.
    *   This can be compactly written as $s(t) = A \cos(2\pi f_c t + \phi(t))$, where $\phi(t)$ is either $0$ or $\pi$ depending on the bit.
    *   Alternatively, using a common reference phase $\cos(2\pi f_c t)$, the two signals are:
        *   Binary '1': $s_1(t) = A \cos(2\pi f_c t)$
        *   Binary '0': $s_0(t) = -A \cos(2\pi f_c t)$
*   **Energy per Bit:** The energy per bit ($E_b$) for BPSK is given by $E_b = \frac{A^2 T_b}{2}$.
*   **Bandwidth:** The minimum bandwidth required for BPSK is equal to the data rate, $B = R_b$. However, in practice, to avoid intersymbol interference (ISI), a raised cosine filter or similar shaping is used, which increases the bandwidth. A common practical bandwidth is $B = 2R_b$ (for unfiltered BPSK).
*   **Advantages:**
    *   Simple to implement.
    *   Robust against noise (relatively good performance for a given bandwidth).
    *   Achieves optimal performance for a given bandwidth and symbol energy.
*   **Disadvantages:**
    *   Requires coherent detection, which adds complexity.
    *   Bandwidth efficiency is not as high as some other schemes (e.g., QPSK).
*   **Textbook References:**
    *   Haykin & Moher (5th Ed.): Chapter 8 introduces digital modulation techniques, including BPSK.
    *   Lathi & Ding (5th Ed.): Chapter 11 discusses digital modulation methods, covering BPSK.
    *   Proakis & Salehi (6th Ed.): Chapter 4 provides a detailed analysis of digital modulation schemes like BPSK.
*   **Course Outcomes Alignment:** This section addresses **CO2** (Explain the basic concepts of digital communication) by defining BPSK, and **CO4** (Apply various digital modulation techniques...) by introducing a specific technique.

### 3. BPSK Transmitter

The BPSK transmitter converts a binary data stream into a modulated carrier signal.

**Block Diagram:**

```
+-----------+      +-----------------+      +-----------------+      +--------------------+
| Binary    |----->| NRZ-L Encoder   |----->| Baseband        |----->| RF Mixer (Multiplier)|-----> Transmitted
| Data      |      | (Optional)      |      | Pulse Shaper    |      |                    |     BPSK Signal
| Stream    |      +-----------------+      | (e.g., Rectangular)|      +--------------------+
+-----------+                                +--------+--------+
                                                      ^
                                                      |
                                               +------+------+
                                               | Local       |
                                               | Oscillator  |
                                               | (Carrier)   |
                                               +-------------+
```

**Components and Operation:**

1.  **Input Binary Data Stream:** The source generates a sequence of binary digits (0s and 1s).
2.  **NRZ-L Encoder (Optional but common):**
    *   **Non-Return-to-Zero-Level (NRZ-L):** This is a simple line coding scheme where a binary '1' is represented by a high voltage level, and a binary '0' is represented by a low voltage level (or vice-versa). This makes the signal directly usable for modulation.
    *   **Function:** Converts the binary data stream into a pulse train suitable for shaping.
3.  **Baseband Pulse Shaper:**
    *   **Purpose:** To shape the pulses of the digital signal to limit the bandwidth and reduce intersymbol interference (ISI). While theoretically, rectangular pulses can be used, they have an infinite bandwidth ($1/T_b$).
    *   **Common Shaping:** Often, a simple rectangular pulse (representing a bit duration $T_b$) is used for conceptual understanding, which can be thought of as directly mapping to the carrier phase. More practical transmitters use Nyquist-shaped pulses (e.g., raised cosine) to ensure zero ISI at the sampling instants at the receiver.
    *   **Operation:** For BPSK, the pulse shaping effectively determines the phase of the output signal. A positive pulse (representing '1') might be multiplied by $\cos(2\pi f_c t)$, and a negative pulse (representing '0') by $-\cos(2\pi f_c t)$.
4.  **RF Mixer (Multiplier):**
    *   **Function:** This is the core modulation element. It multiplies the shaped baseband signal with the carrier signal generated by the local oscillator.
    *   **Carrier Signal:** $c(t) = A \cos(2\pi f_c t)$
    *   **Baseband Signal:** $m(t)$ can be represented as $m(t) = d(t) \cdot g(t)$, where $d(t)$ is the unipolar binary data pulse train and $g(t)$ is a switching function that is +1 for a '1' and -1 for a '0'.
    *   **Output BPSK Signal:** $s(t) = m(t) \cdot c(t) = [d(t) \cdot g(t)] \cdot [A \cos(2\pi f_c t)]$.
        *   If $d(t)$ is a pulse of amplitude $A_m$ for a '1': $s(t) = A_m \cos(2\pi f_c t)$.
        *   If $d(t)$ is a pulse of amplitude $-A_m$ for a '0': $s(t) = -A_m \cos(2\pi f_c t)$.
    *   The amplitude $A$ of the carrier is typically a constant, and the baseband signal directly controls the phase. If the baseband signal is represented as $+A_m$ for '1' and $-A_m$ for '0', then the modulated signal is $s(t) = A_m \cdot (\text{data representation}) \cdot \cos(2\pi f_c t)$.
5.  **Local Oscillator:** Generates the stable carrier frequency $f_c$.
6.  **Power Amplifier (Not explicitly shown in modulation block, but part of transmitter):** Amplifies the modulated signal to the required transmission power level.
7.  **Band-limiting Filter (Not explicitly shown):** Further filters the signal to meet spectral emission requirements.

*   **Textbook References:**
    *   Haykin & Moher (5th Ed.): Discusses modulator circuits in Chapter 8.
    *   Lathi & Ding (5th Ed.): Explains transmitter architectures in Chapter 11.
    *   Kennedy (6th Ed.): Covers modulator design in Chapter 10.
*   **Course Outcomes Alignment:** This section addresses **CO4** (Apply various digital modulation techniques...) by detailing the implementation of a BPSK transmitter.

### 4. BPSK Receiver

The BPSK receiver aims to recover the original binary data stream from the received noisy modulated signal.

**Block Diagram (Coherent Detection):**

```
+-----------------+      +-----------------+      +-----------------+      +--------------------+
| Received BPSK   |----->| RF Mixer        |----->| Low-Pass Filter |----->| Decision Device    |-----> Recovered
| Signal (noisy)  |      | (Synchronized   |      | (LPF)           |      | (Threshold)        |     Binary Data
+-----------------+      | Carrier)        |      +-----------------+      +---------+----------+
                         +--------+--------+                ^                        |
                                  |                           |                        |
                           +------+------+             +------+------+          +-------+-------+
                           | Local       |             | Phase       |          | Clock Recovery|
                           | Oscillator  |             | & Frequency |          | Circuit       |
                           | (Carrier)   |             | Synchronization|          +---------------+
                           +-------------+             +-------------+
```

**Components and Operation:**

1.  **Received BPSK Signal:** The input signal is the transmitted BPSK signal corrupted by noise, typically Additive White Gaussian Noise (AWGN). $r(t) = s(t) + n(t)$, where $s(t)$ is the transmitted BPSK signal and $n(t)$ is the noise.
2.  **RF Mixer (Synchronized Carrier):**
    *   **Function:** This is the core of the demodulation process. It multiplies the received noisy signal $r(t)$ with a locally generated carrier signal that is synchronized in frequency and phase with the transmitted carrier.
    *   **Local Carrier:** $c_{local}(t) = A \cos(2\pi f_c t + \theta)$, where $\theta$ is the phase difference between the local and transmitted carriers. For optimal detection, $\theta$ should be 0.
    *   **Output of Mixer:**
        $r(t) \cdot c_{local}(t) = [s(t) + n(t)] \cdot [A \cos(2\pi f_c t + \theta)]$
        $= [A \cos(2\pi f_c t + \phi(t)) + n(t)] \cdot [A \cos(2\pi f_c t + \theta)]$
        $= A^2 \cos(2\pi f_c t + \phi(t)) \cos(2\pi f_c t + \theta) + n(t) A \cos(2\pi f_c t + \theta)$
        Using $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$:
        $= \frac{A^2}{2} [\cos(\phi(t) - \theta) + \cos(4\pi f_c t + \phi(t) + \theta)] + \text{Noise Term}$
    *   The term $\cos(4\pi f_c t + \phi(t) + \theta)$ is at a high frequency ($2f_c$) and is removed by the LPF.
3.  **Low-Pass Filter (LPF):**
    *   **Function:** Removes the high-frequency component ($2f_c$) and the noise components that are shifted to higher frequencies.
    *   **Output of LPF:** $\frac{A^2}{2} \cos(\phi(t) - \theta) + \text{filtered noise}$. If the carrier synchronization is perfect ($\theta=0$), this becomes $\frac{A^2}{2} \cos(\phi(t))$.
    *   **Demodulation Outcome:**
        *   If $\phi(t) = 0$ (binary '1'), the output is $\frac{A^2}{2}$.
        *   If $\phi(t) = \pi$ (binary '0'), the output is $\frac{A^2}{2} \cos(\pi) = -\frac{A^2}{2}$.
    *   The output is essentially a baseband signal that varies between a positive peak (for '1') and a negative peak (for '0').
4.  **Clock Recovery Circuit:**
    *   **Purpose:** To extract the timing information from the received signal to sample the output of the LPF at the correct time instants (typically the center of each bit interval $T_b$).
    *   **Methods:** Often uses a phase-locked loop (PLL) or a squaring loop to generate a clock signal at the bit rate.
5.  **Decision Device (Threshold Detector):**
    *   **Function:** Samples the output of the LPF at the instants provided by the clock recovery circuit. It then compares the sampled value to a threshold.
    *   **Threshold:** For BPSK, a zero threshold is typically used.
    *   **Decision Rule:**
        *   If the sampled value is positive (greater than 0), it decides that a binary '1' was transmitted.
        *   If the sampled value is negative (less than 0), it decides that a binary '0' was transmitted.
    *   **Output:** The recovered binary data stream.
6.  **Carrier Synchronization:**
    *   **Importance:** Crucial for coherent detection. An offset in carrier phase ($\theta$) degrades performance. A phase error of $\pi/2$ would result in zero output from the mixer for BPSK.
    *   **Techniques:** Uses circuits like Costas Loop or Decision-Directed PLLs to track and synchronize the local oscillator's phase with the incoming carrier.

*   **Textbook References:**
    *   Haykin & Moher (5th Ed.): Chapter 8 provides detailed explanation of BPSK receiver structure and performance analysis.
    *   Lathi & Ding (5th Ed.): Chapter 11 covers the receiver design for digital modulation.
    *   Proakis & Salehi (6th Ed.): Chapter 4 on coherent detection of BPSK.
    *   Taub & Schilling (4th Ed.): Chapter 11 discusses synchronization and detection.
*   **Course Outcomes Alignment:** This section addresses **CO2** (Explain the basic concepts of digital communication) by detailing the receiver process, and **CO4** (Apply various digital modulation techniques...) by explaining how to demodulate BPSK.

### 5. Performance Analysis of BPSK

*   **Error Probability:** The performance of a digital modulation scheme is often measured by its probability of error ($P_e$). For BPSK in the presence of AWGN, the probability of a bit error is given by:
    $P_e = Q\left(\sqrt{\frac{E_b}{N_0}}\right)$
    where:
    *   $E_b$ is the energy per bit.
    *   $N_0$ is the power spectral density of the white Gaussian noise.
    *   $Q(x) = \frac{1}{\sqrt{2\pi}} \int_x^\infty e^{-t^2/2} dt$ is the Q-function, representing the tail probability of a standard normal distribution.
*   **Meaning:** A higher ratio of $E_b/N_0$ leads to a lower probability of error. This means more energy per bit or less noise is required for reliable communication.
*   **Bandwidth Efficiency:** BPSK is less bandwidth-efficient compared to schemes like QPSK or 8-PSK. Its bandwidth efficiency is typically $1$ bit/sec/Hz (for ideal Nyquist filtering).
*   **Comparison with other schemes:** BPSK offers a good trade-off between simplicity and performance, often used when bandwidth is not a critical constraint. For higher data rates in a given bandwidth, more spectrally efficient schemes are preferred.
*   **Textbook References:**
    *   Haykin & Moher (5th Ed.): Chapter 8 includes detailed performance analysis and error probability calculations for BPSK.
    *   Lathi & Ding (5th Ed.): Chapter 11 presents performance metrics and comparisons.
    *   Proakis & Salehi (6th Ed.): Chapter 4 offers a rigorous analysis of BPSK error performance.
*   **Course Outcomes Alignment:** This section directly addresses **CO3** (Analyze the baseband transmission of digital data through AWGN channel) by providing a key performance metric (error probability) in the context of AWGN. **CO4** is also reinforced as understanding performance is crucial for applying modulation techniques.

### 6. Example Scenario

**Problem:**
Consider a BPSK system transmitting at a data rate of $R_b = 100$ kbps with a carrier frequency of $f_c = 1$ MHz. The transmitted signal has an amplitude $A = 2V$. The noise spectral density is $N_0 = 10^{-12} W/Hz$. Calculate the probability of bit error if the bandwidth of the BPSK signal is $B = 200$ kHz.

**Solution:**

1.  **Bit Duration ($T_b$):**
    $T_b = \frac{1}{R_b} = \frac{1}{100 \times 10^3} = 10 \mu s$.

2.  **Energy per Bit ($E_b$):**
    Assuming the baseband pulse shape is rectangular and represents $+A_m$ for '1' and $-A_m$ for '0', where $A_m$ is the amplitude of the baseband pulse. In BPSK, the carrier amplitude $A$ is related to $E_b$. The power of the transmitted BPSK signal is $P_s = \frac{A^2}{2}$.
    $E_b = P_s \cdot T_b = \frac{A^2}{2} \cdot T_b$
    $E_b = \frac{(2V)^2}{2} \cdot (10 \times 10^{-6} s) = \frac{4}{2} \cdot 10 \times 10^{-6} = 20 \times 10^{-6} J = 20 \mu J$.

3.  **Signal-to-Noise Ratio (SNR) per bit:**
    The ratio $\frac{E_b}{N_0}$ is the crucial parameter.
    $\frac{E_b}{N_0} = \frac{20 \times 10^{-6} J}{10^{-12} W/Hz} = 20 \times 10^6 = 2 \times 10^7$.

4.  **Probability of Bit Error ($P_e$):**
    $P_e = Q\left(\sqrt{\frac{E_b}{N_0}}\right)$
    $\sqrt{\frac{E_b}{N_0}} = \sqrt{2 \times 10^7} \approx 4472$

    We need to find $Q(4472)$. The Q-function decreases very rapidly for large arguments. For practical purposes, $Q(x)$ for $x > 4$ is very small. For $x=6$, $Q(6) \approx 10^{-9}$. As the argument becomes very large like 4472, the probability of error is extremely close to zero.

    $P_e \approx 0$ (or a vanishingly small number).

**Note:** The bandwidth information ($B = 200$ kHz) is relevant for assessing spectral efficiency but is not directly used in the $P_e$ calculation if $E_b/N_0$ is known. For unfiltered BPSK, $B = R_b = 100$ kHz. If raised-cosine filtering is used with a roll-off factor $\alpha$, the bandwidth is $B = R_b(1+\alpha)/2$. A bandwidth of 200 kHz suggests a roll-off factor of 1 (or a non-ideal rectangular pulse shaping).

*   **Course Outcomes Alignment:** This example demonstrates **CO4** by applying the BPSK concept to a practical scenario and **CO3** by calculating the error probability, which is a core aspect of analyzing transmission over an AWGN channel.

### 7. Important Points to Remember

*   **BPSK Basics:** Simple, phase shifts by 180 degrees.
*   **Coherent Detection:** Requires synchronization of carrier phase and frequency.
*   **Transmitter:** Multiplies baseband signal (representing data phase) with carrier.
*   **Receiver:** Multiplies received signal with synchronized carrier, filters, and uses a threshold detector.
*   **Performance:** Characterized by $P_e = Q(\sqrt{E_b/N_0})$. BPSK is known for good performance at the cost of bandwidth efficiency compared to other schemes.
*   **Bandwidth:** Ideally $B=R_b$, practically $B \approx R_b$ to $2R_b$.
*   **Complexity:** Simpler than QPSK or higher-order PSK schemes.

### 8. Practice Questions

1.  **Question:** Describe the operation of a BPSK transmitter. What are the key components and their functions?
    **Answer:** A BPSK transmitter takes a binary data stream, optionally encodes it (e.g., NRZ-L), shapes the pulses to control the phase, and then mixes this baseband signal with a carrier signal. The mixing operation multiplies the carrier by +1 or -1 according to the binary data, effectively shifting the carrier phase by 0 or 180 degrees. Key components include the pulse shaper, local oscillator, and mixer.

2.  **Question:** Explain the role of carrier synchronization in a BPSK receiver. What happens if the carrier synchronization is imperfect?
    **Answer:** Carrier synchronization is crucial for coherent detection. The received BPSK signal is multiplied by a locally generated carrier that must match the phase and frequency of the transmitted carrier. If synchronization is imperfect (i.e., there's a phase offset $\theta$), the output of the mixer will be scaled by $\cos(\theta)$. For BPSK, if $\theta = \pi/2$, the output of the mixer will be zero, leading to complete loss of information. For other phase errors, the signal-to-noise ratio is reduced, increasing the bit error probability.

3.  **Question:** Derive the probability of bit error for BPSK in an AWGN channel. What does the term $E_b/N_0$ represent?
    **Answer:** The probability of bit error for BPSK in AWGN is $P_e = Q(\sqrt{E_b/N_0})$. $E_b$ is the energy per bit, representing the total energy carried by each bit of information. $N_0$ is the power spectral density of the white Gaussian noise, indicating the noise power per unit bandwidth. The ratio $E_b/N_0$ is a measure of the signal-to-noise ratio that determines the reliability of the communication.

4.  **Question:** Compare BPSK with Quadrature Phase Shift Keying (QPSK) in terms of bandwidth efficiency and implementation complexity.
    **Answer:**
    *   **Bandwidth Efficiency:** QPSK is more bandwidth-efficient than BPSK. QPSK transmits 2 bits per symbol, while BPSK transmits 1 bit per symbol. For the same symbol rate, QPSK can achieve twice the data rate within the same bandwidth as BPSK, or the same data rate in half the bandwidth.
    *   **Implementation Complexity:** BPSK is simpler to implement as it only requires modulation and demodulation of a single carrier phase. QPSK requires modulating and demodulating two carriers in quadrature, making its transmitter and receiver more complex.

5.  **Question:** A BPSK signal is transmitted with $E_b/N_0 = 10$. Calculate the probability of bit error. (Assume you have access to Q-function tables or a calculator).
    **Answer:**
    $P_e = Q\left(\sqrt{\frac{E_b}{N_0}}\right) = Q\left(\sqrt{10}\right)$
    $\sqrt{10} \approx 3.162$
    Using a Q-function calculator or table, $Q(3.162) \approx 0.00078$.
    So, $P_e \approx 7.8 \times 10^{-4}$.

### 9. Course Outcomes Mapping Summary

*   **CO1 (Illustrate the principles of analog communication systems - K2):** While this module is about digital communication, understanding bandpass modulation inherently involves carrier signals, which have analog properties. This module builds upon the understanding of carriers introduced in analog communication.
*   **CO2 (Explain the basic concepts of digital communication - K2):** This topic directly explains the fundamental concepts of digital modulation, specifically BPSK, covering how digital data is represented and transmitted using analog carriers.
*   **CO3 (Analyze the baseband transmission of digital data through AWGN channel - K3):** The performance analysis section, particularly the probability of error calculation, directly aligns with analyzing the impact of AWGN on digital signal transmission.
*   **CO4 (Apply various digital modulation techniques in the design of digital communication systems - K3):** This entire topic is about applying BPSK. The explanations of the transmitter and receiver, along with the performance analysis and example, provide the knowledge needed to apply BPSK in system design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
