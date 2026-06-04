---
title: "Bandpass modulation techniques:"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 4: Digital bandpass communication :"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c05"
status: "completed"
scrapedAt: "2026-05-23T16:40:37.724Z"
---
# Electronic Communication: Module 4 - Digital Bandpass Communication

## Topic: Bandpass Modulation Techniques

This module delves into the fundamental techniques used to transmit digital information over bandpass channels, where the information signal is modulated onto a high-frequency carrier wave. We will explore various modulation schemes, their characteristics, and their practical implications.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles of bandpass modulation.
*   Describe and differentiate between various digital bandpass modulation schemes.
*   Analyze the spectral characteristics of different bandpass modulation techniques.
*   Evaluate the power and efficiency of different bandpass modulation schemes.
*   Comprehend the trade-offs between bandwidth, power, and error probability for these schemes.
*   Relate these modulation techniques to the overall structure of a digital communication system.

---

### Key Concepts and Definitions:

*   **Bandpass Channel:** A communication channel that allows signals within a specific frequency range (the passband) to pass through, while attenuating signals outside this range.
*   **Carrier Wave:** A high-frequency sinusoidal signal used to carry information. It is characterized by its amplitude, frequency, and phase.
*   **Modulation:** The process of varying one or more properties of a periodic waveform (the carrier signal) with a modulating signal that typically contains information to be transmitted.
*   **Digital Bandpass Modulation:** A type of modulation where the modulating signal is digital (a sequence of discrete values), and the carrier wave's properties (amplitude, frequency, or phase) are altered based on these digital values.
*   **Passband Modulation:** A general term referring to modulation techniques that operate in the passband frequency range.
*   **Baseband Modulation:** Modulation techniques that operate at or near zero frequency (DC).
*   **In-phase (I) Component:** The component of a modulated signal that is in phase with the carrier.
*   **Quadrature (Q) Component:** The component of a modulated signal that is 90 degrees out of phase with the carrier.
*   **Constellation Diagram:** A graphical representation of the possible phase and amplitude combinations used in digital modulation schemes. Each point on the diagram represents a unique symbol.
*   **Symbol Rate:** The number of distinct symbols transmitted per second.
*   **Bit Rate:** The number of bits transmitted per second.
*   **Bandwidth Efficiency:** A measure of how effectively bandwidth is utilized by a modulation scheme, typically expressed in bits per second per Hertz (bps/Hz).
*   **Power Efficiency:** A measure of how much power is required to achieve a certain bit error rate (BER).

---

### Introduction to Bandpass Modulation:

In digital communication systems, transmitting digital data directly at baseband over long distances can be inefficient due to signal attenuation and the need for complex channel equalization. Bandpass modulation offers a solution by shifting the digital signal to a higher frequency band, which is more suitable for transmission over bandlimited channels, such as radio frequency channels.

The general form of a bandpass signal $s(t)$ can be represented as:

$s(t) = Re\{v(t)e^{j2\pi f_c t}\}$

where:
*   $v(t)$ is the complex envelope of the bandpass signal.
*   $f_c$ is the carrier frequency.

The complex envelope $v(t)$ carries the information and is typically represented as:

$v(t) = I(t) + jQ(t)$

where:
*   $I(t)$ is the in-phase component.
*   $Q(t)$ is the quadrature component.

Digital bandpass modulation techniques essentially define how the digital data influences the $I(t)$ and $Q(t)$ components.

---

### Major Bandpass Modulation Techniques:

We will explore the following key bandpass modulation techniques:

#### 1. Amplitude Shift Keying (ASK)

ASK is a digital modulation technique where the amplitude of the carrier wave is varied in accordance with the binary data.

*   **Principle:** The presence or absence of the carrier, or different levels of amplitude, represent the digital bits.
*   **Types:**
    *   **Binary ASK (2-ASK):** Two amplitude levels are used.
        *   Logic '0': Amplitude $A_0$
        *   Logic '1': Amplitude $A_1$
        *   Commonly, $A_0 = 0$ (On-Off Keying - OOK) and $A_1 = A$.
    *   **M-ary ASK (M-ASK):** $M$ distinct amplitude levels are used, where $M = 2^k$. Each level represents $k$ bits.
*   **Mathematical Representation (2-ASK / OOK):**
    $s(t) = A \cdot d(t) \cos(2\pi f_c t)$
    where $d(t)$ is a function that takes value 1 for a '1' bit and 0 for a '0' bit.
*   **Spectral Characteristics:** The spectrum of ASK contains the carrier frequency and sidebands. The bandwidth is approximately twice the symbol rate (Baud rate).
*   **Power Efficiency:** Relatively poor, especially for multi-level ASK, as larger amplitudes are needed for more levels, increasing average power.
*   **Bandwidth Efficiency:** Low compared to other techniques, typically around 1 to 2 bps/Hz.
*   **Applications:** Fiber optic communication (OOK), short-range communication, simple applications where bandwidth is not a critical constraint.

**Example:**
If a binary sequence is `10110`, and we use OOK with carrier amplitude $A$:
*   Bit '1': $s(t) = A \cos(2\pi f_c t)$
*   Bit '0': $s(t) = 0$

**Reference:** Kennedy's textbook often provides good coverage of ASK and its variants.

#### 2. Frequency Shift Keying (FSK)

FSK is a digital modulation technique where the frequency of the carrier wave is varied in accordance with the binary data.

*   **Principle:** Different frequencies are used to represent different digital symbols.
*   **Types:**
    *   **Binary FSK (2-FSK):** Two frequencies are used.
        *   Logic '0': Carrier frequency $f_1$
        *   Logic '1': Carrier frequency $f_2$
        The difference between $f_1$ and $f_2$, denoted as $\Delta f = |f_2 - f_1|$, is crucial.
    *   **M-ary FSK (M-FSK):** $M$ distinct frequencies are used, where $M = 2^k$. Each frequency represents $k$ bits.
*   **Mathematical Representation (2-FSK):**
    $s(t) = A \cos(2\pi f_0 t + \phi_0)$  if the bit is '0'
    $s(t) = A \cos(2\pi f_1 t + \phi_1)$  if the bit is '1'
    where $f_1 = f_0 + \Delta f$.
*   **Spectral Characteristics:** The spectrum of FSK is wider than ASK for the same symbol rate, especially for non-coherent FSK. The bandwidth depends on the frequency separation and the modulation index. For continuous-phase FSK (CPFSK), the spectrum is smoother and more concentrated.
*   **Power Efficiency:** Generally better than ASK, particularly for coherent detection.
*   **Bandwidth Efficiency:** Moderate, typically around 1 to 2 bps/Hz, but can be improved with coherent detection.
*   **Applications:** Modems, telemetry, radio pagers, simple wireless communication.

**Example:**
Binary sequence `10110` with $f_0$ for '0' and $f_1$ for '1'.
*   Bit '1': Transmit at frequency $f_1$.
*   Bit '0': Transmit at frequency $f_0$.

**Reference:** Tomasi's textbook often details the mathematical derivations and practical aspects of FSK.

#### 3. Phase Shift Keying (PSK)

PSK is a digital modulation technique where the phase of the carrier wave is varied in accordance with the digital data.

*   **Principle:** Different phases of the carrier signal represent different digital symbols.
*   **Types:**
    *   **Binary PSK (BPSK):** Two phases are used.
        *   Logic '0': Phase $\pi$ (or 180 degrees)
        *   Logic '1': Phase $0$ (or 0 degrees)
    *   **Quadrature PSK (QPSK):** Four phases are used, typically $45^\circ, 135^\circ, 225^\circ, 315^\circ$. Each phase represents 2 bits.
    *   **M-ary PSK (M-PSK):** $M$ phases are used, where $M = 2^k$. Each phase represents $k$ bits.
*   **Mathematical Representation (BPSK):**
    $s(t) = A \cos(2\pi f_c t + \phi)$
    where $\phi = 0$ for logic '1' and $\phi = \pi$ for logic '0'.
*   **Constellation Diagram:** For BPSK, two points on a circle. For QPSK, four points forming a square. For M-PSK, M points equally spaced on a circle.
*   **Spectral Characteristics:** PSK generally has a narrower spectrum than FSK for the same symbol rate. The bandwidth is approximately twice the symbol rate.
*   **Power Efficiency:** Generally better than ASK and FSK, especially for higher-order PSK schemes. It is more robust to noise.
*   **Bandwidth Efficiency:** Good, typically around 2 bps/Hz for BPSK and QPSK. Higher-order PSK can achieve higher bandwidth efficiency but at the cost of increased complexity and power.
*   **Applications:** Satellite communication, Wi-Fi, cellular communication, digital subscriber lines (DSL).

**Example:**
Binary sequence `1101` with BPSK:
*   Bit '1': Phase $0^\circ$.
*   Bit '0': Phase $180^\circ$.
The transmitted signal will alternate between $\cos(2\pi f_c t)$ and $\cos(2\pi f_c t + \pi) = -\cos(2\pi f_c t)$.

**Reference:** Haykin and Mohre's textbook provides in-depth analysis of PSK, including coherent and non-coherent detection.

#### 4. Quadrature Amplitude Modulation (QAM)

QAM is a modulation technique that combines Amplitude Shift Keying (ASK) and Phase Shift Keying (PSK) to achieve higher bandwidth efficiency.

*   **Principle:** Both the amplitude and phase of the carrier signal are varied to represent digital data.
*   **Types:**
    *   **Binary-Opposed Amplitude and Phase Shift Keying (BOASPK):** A simple form with two amplitude levels and two phases.
    *   **Quadrature Amplitude Modulation (QAM):** Uses combinations of amplitude and phase.
        *   **4-QAM (or QPSK):** Often considered a subset of QAM.
        *   **16-QAM:** 16 distinct symbols, formed by combining 4 amplitude levels and 4 phase shifts. Each symbol represents 4 bits ($k=4$).
        *   **64-QAM, 256-QAM:** Higher-order QAM schemes for greater bandwidth efficiency.
*   **Mathematical Representation:**
    $s(t) = A(t) \cos(2\pi f_c t + \phi(t))$
    Alternatively, using the complex envelope:
    $s(t) = Re\{(I(t) + jQ(t))e^{j2\pi f_c t}\}$
    where $I(t)$ and $Q(t)$ are amplitude-modulated carriers in phase and quadrature with the carrier.
*   **Constellation Diagram:** Forms a grid of points. For 16-QAM, it's a 4x4 grid.
*   **Spectral Characteristics:** Similar bandwidth to PSK for the same symbol rate.
*   **Power Efficiency:** Generally lower than PSK for the same number of bits per symbol, as amplitude variations make it more susceptible to non-linearities and noise.
*   **Bandwidth Efficiency:** Very high, typically 4 to 8+ bps/Hz. This is its primary advantage.
*   **Applications:** High-speed modems, digital TV broadcasting, Wi-Fi, cellular communication (LTE, 5G).

**Example:**
16-QAM constellation: 16 points arranged in a square grid.
*   Each point represents a unique combination of an I-component amplitude and a Q-component amplitude.
*   These amplitudes correspond to 2 bits each, for a total of 4 bits per symbol.

**Reference:** Proakis and Salehi's book is excellent for understanding the theory and design of digital communication systems, including QAM.

---

### Comparison of Bandpass Modulation Techniques:

| Modulation Technique | Bandwidth Efficiency (bps/Hz) | Power Efficiency | Complexity       | Robustness to Noise | Typical Applications                                  |
| :------------------- | :---------------------------- | :-------------- | :--------------- | :------------------ | :---------------------------------------------------- |
| **ASK (OOK)**        | ~1                            | Low             | Low              | Poor                | Short-range, Fiber optics                             |
| **FSK**              | ~1-2                          | Medium          | Medium           | Moderate            | Modems, Pagers                                        |
| **PSK (BPSK, QPSK)** | ~2-4                          | High            | Medium to High   | Good                | Satellite, Wi-Fi, Cellular                            |
| **QAM (16, 64, 256)**| ~4-8+                         | Medium to High  | High             | Moderate to Good    | High-speed modems, Digital TV, Wi-Fi, 4G/5G cellular |

**Important Point:** There is a fundamental trade-off between bandwidth efficiency and power efficiency in digital communication systems. Techniques that achieve higher bandwidth efficiency often require more power or are more complex to implement.

---

### Relation to Course Outcomes:

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.**
    *   This topic directly addresses ASK, providing the mathematical basis for its modulation. Demodulation principles for ASK (e.g., envelope detection for OOK, coherent detection) are related.
*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.**
    *   While this topic focuses on digital bandpass, the underlying principles of varying carrier properties (amplitude, frequency, phase) are analogous to analog modulation. We analyze spectra, power requirements, and efficiency for digital versions.
*   **CO3: Understand the various processing blocks of a digital communication system.**
    *   Bandpass modulation is a crucial block in the transmitter (and its inverse, demodulation, in the receiver). Understanding these techniques helps contextualize the overall system architecture.
*   **CO4: Apply the knowledge of digital modulation in digital transmission.**
    *   This topic is the core of applying digital modulation. By understanding ASK, FSK, PSK, and QAM, students can select appropriate modulation schemes for different communication scenarios.

---

### Practice Questions:

1.  **(CO4, CO2)** Compare and contrast BPSK and BFSK in terms of bandwidth efficiency and power efficiency. What are the typical applications where one might be preferred over the other?
2.  **(CO4)** A digital signal is transmitted using 8-PSK. If the symbol rate is 10,000 symbols per second, what is the bit rate? What is the minimum bandwidth required for this transmission?
3.  **(CO4)** Explain why QAM is considered a combination of ASK and PSK. What is the main advantage of using QAM over pure PSK or ASK?
4.  **(CO4)** Sketch the constellation diagram for 4-QAM. How many bits are represented by each symbol?
5.  **(CO2)** A communication system uses On-Off Keying (OOK). If the desired data rate is 1 Mbps, what is the approximate minimum bandwidth required for this system?

---

### Answers to Practice Questions:

1.  **Comparison of BPSK and BFSK:**
    *   **Bandwidth Efficiency:** BPSK typically has a bandwidth efficiency of about 2 bps/Hz, while BFSK is around 1-2 bps/Hz, depending on the frequency separation. BPSK is generally more bandwidth-efficient.
    *   **Power Efficiency:** BPSK is generally more power-efficient than BFSK, especially when coherent detection is used for both. PSK schemes tend to be more robust to noise for a given power level.
    *   **Applications:** BPSK is preferred when bandwidth is scarce and reliable transmission is needed (e.g., satellite communication). BFSK might be used in simpler systems where bandwidth is not as critical, or when non-coherent detection is acceptable (e.g., older modems, telemetry).

2.  **8-PSK Transmission:**
    *   **Bit Rate:** With 8-PSK, each symbol represents $\log_2(8) = 3$ bits.
        Bit Rate = Symbol Rate $\times$ bits/symbol
        Bit Rate = 10,000 symbols/sec $\times$ 3 bits/symbol = 30,000 bits/sec = 30 kbps.
    *   **Minimum Bandwidth:** For PSK, the minimum bandwidth ($B$) is approximately equal to the symbol rate ($R_s$).
        $B \approx R_s = 10,000$ Hz = 10 kHz.

3.  **QAM as a Combination:**
    *   QAM combines amplitude and phase modulation. In QAM, information is encoded by varying both the amplitude and the phase of the carrier signal.
    *   **Main Advantage:** The primary advantage of QAM is its higher bandwidth efficiency. By using multiple amplitude levels in conjunction with multiple phases, QAM can transmit more bits per symbol compared to PSK or ASK alone, thus achieving higher data rates within a given bandwidth.

4.  **4-QAM Constellation Diagram:**
    *   4-QAM (also known as QPSK) has 4 points in its constellation diagram.
    *   These points are typically located at phases of $45^\circ, 135^\circ, 225^\circ, 315^\circ$, all at the same amplitude.
    *   Each point represents $k = \log_2(4) = 2$ bits.
    *   **Sketch:** Imagine a circle centered at the origin. There will be four points on this circle, forming a diamond shape or a rotated square.

    ```
           ^ I
           |
        .  |  .
    -----+-+------- > Q
       . |    .
         |
    ```
    *(Note: This is a conceptual representation. Actual points would be on a circle.)*

5.  **OOK Bandwidth Requirement:**
    *   For On-Off Keying (OOK), the signal is essentially a baseband signal modulated onto a carrier. The bandwidth occupied by the signal is approximately twice the highest frequency component of the baseband signal. In the case of digital signals, this relates to the symbol rate.
    *   The minimum bandwidth ($B$) for ASK (including OOK) is approximately twice the symbol rate ($R_s$). Assuming the symbol rate is equal to the bit rate for binary OOK:
        $B \approx 2 \times R_s$
        Given a data rate (bit rate) of 1 Mbps, and assuming binary OOK (1 bit per symbol), the symbol rate $R_s = 1$ Mbaud.
        $B \approx 2 \times 1$ MHz = 2 MHz.

---

### Important Points to Remember:

*   **Trade-offs:** Always remember the fundamental trade-off between bandwidth efficiency and power efficiency.
*   **Constellation Diagrams:** Understand how to interpret and sketch constellation diagrams for different modulation schemes. They visually represent the mapping of digital symbols to analog signals.
*   **Carrier vs. Baseband:** Bandpass modulation shifts data to a carrier frequency, enabling transmission over specific frequency bands, unlike baseband transmission.
*   **Complexity:** Higher bandwidth efficiency often comes with increased system complexity in terms of implementation and synchronization.
*   **Noise Immunity:** Different modulation schemes have varying levels of immunity to noise and interference. PSK and QAM are generally more robust than ASK.

---

This concludes the notes on Bandpass Modulation Techniques. Further exploration into the transmitter and receiver structures for these modulations, including demodulation techniques (coherent vs. non-coherent), is crucial for a complete understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
