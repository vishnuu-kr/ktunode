---
title: "Digital band pass modulation schemes-BPSK system and signal constellation."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 4: Digital band pass modulation schemes"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe918"
status: "completed"
scrapedAt: "2026-05-23T17:53:04.138Z"
---
# ANALOG AND DIGITAL COMMUNICATION - Module 4: Digital Band Pass Modulation Schemes

## Topic: Digital Band Pass Modulation Schemes - BPSK System and Signal Constellation

### 1. Introduction to Digital Band Pass Modulation

Digital band pass modulation schemes are essential for transmitting digital information over band pass channels, which are prevalent in many communication systems (e.g., wireless communication, satellite communication). Unlike baseband transmission where the signal is transmitted directly at base frequencies, band pass modulation shifts the digital signal to a higher carrier frequency. This allows for efficient utilization of the available frequency spectrum and enables multiplexing of multiple signals.

**Key Concepts:**

*   **Band Pass Channel:** A communication channel that allows signals within a specific range of frequencies (a band) to pass through, while attenuating or blocking frequencies outside this band.
*   **Carrier Frequency ($f_c$):** A high-frequency sinusoidal signal used to carry the information.
*   **Modulation:** The process of varying one or more properties of a periodic waveform (the carrier signal) with a modulating signal that typically contains information to be transmitted.
*   **Digital Modulation:** Modulation techniques specifically designed for transmitting digital data.

**Reference:**
*   Haykin & Moher, 5th Edition, Chapter 7: Digital Modulation

**Course Outcomes Alignment:**
*   **CO2:** Explain the basic concepts of digital communication. (K2) - This section introduces the fundamental need for digital band pass modulation.
*   **CO4:** Apply various digital modulation techniques in the design of digital communication systems. (K3) - This module builds the foundation for applying these techniques.

### 2. Binary Phase Shift Keying (BPSK) System

BPSK is one of the simplest and most widely used digital band pass modulation schemes. It is a form of phase modulation where the phase of the carrier signal is shifted to represent the binary data.

**2.1 Principle of Operation:**

In BPSK, two possible phases of the carrier signal are used to represent the two binary digits, '0' and '1'.

*   **Binary '0':** Represented by a carrier signal with a phase of 0 radians (or 0 degrees).
*   **Binary '1':** Represented by a carrier signal with a phase of $\pi$ radians (or 180 degrees).

**Mathematical Representation:**

A general BPSK signal can be represented as:

$s(t) = A \cos(2\pi f_c t + \phi(t))$

where:
*   $A$ is the amplitude of the carrier signal.
*   $f_c$ is the carrier frequency.
*   $\phi(t)$ is the phase of the carrier signal, which changes based on the binary data.

For BPSK:
*   If the input binary digit is '0', $\phi(t) = 0$.
    $s_0(t) = A \cos(2\pi f_c t)$
*   If the input binary digit is '1', $\phi(t) = \pi$.
    $s_1(t) = A \cos(2\pi f_c t + \pi) = -A \cos(2\pi f_c t)$

This means that a '1' bit is represented by a carrier signal that is 180 degrees out of phase with the carrier signal representing a '0' bit.

**2.2 Transmitter and Receiver Block Diagrams:**

**2.2.1 BPSK Transmitter:**

The BPSK transmitter typically consists of the following blocks:

1.  **Binary Source:** Generates the sequence of binary digits (0s and 1s).
2.  **NRZ-L Coder (Optional but common):** Converts the binary data into a suitable format for modulation. NRZ-L (Non-Return-to-Zero-Level) coding often maps '0' to a negative pulse and '1' to a positive pulse, or vice-versa.
3.  **Modulator:** Implements the phase shift based on the input binary data. This is usually achieved using a double-balanced modulator (DBM) or a switching circuit.
    *   The DBM multiplies the input binary data waveform with the carrier signal. If the data is represented as +1 for '1' and -1 for '0', then the output will be $+A \cos(2\pi f_c t)$ for '1' and $-A \cos(2\pi f_c t)$ for '0'. This effectively implements the phase shift.
4.  **Band Pass Filter:** Limits the bandwidth of the modulated signal to avoid inter-symbol interference (ISI) and to ensure it fits within the allocated channel bandwidth.

**Block Diagram (Simplified):**

```
Binary Source -> [NRZ-L Coder] -> Modulator (Carrier Signal x Data) -> Band Pass Filter -> Transmitted Signal
                                     ^
                                     |
                                  Carrier Generator
```

**2.2.2 BPSK Receiver:**

The BPSK receiver aims to recover the transmitted binary data from the received signal. It typically includes:

1.  **Band Pass Filter:** Removes out-of-band noise and interference.
2.  **Demodulator/Coherent Detector:** This is the core of the receiver. It involves multiplying the received signal with a locally generated carrier that is synchronized in phase and frequency with the transmitted carrier.
3.  **Low Pass Filter (LPF):** Removes the double-frequency components generated by the multiplication process, leaving the baseband signal.
4.  **Sample and Decision Device (Threshold Detector):** Samples the output of the LPF at the optimum sampling instant (usually the center of each bit interval) and compares it with a threshold to decide whether the transmitted bit was '0' or '1'.

**Block Diagram (Simplified):**

```
Received Signal -> Band Pass Filter -> [Synchronizer] -> Coherent Detector (Multiply by Local Carrier) -> Low Pass Filter -> Sample & Decision Device -> Recovered Binary Data
                                                                                                                                      ^
                                                                                                                                      |
                                                                                                                                    Local Carrier Generator
```

**Important Note on Coherent Detection:**
Coherent detection requires the receiver to have access to a replica of the carrier signal that is synchronized in both frequency and phase with the transmitted carrier. This synchronization is achieved using a **Carrier Synchronization Circuit** (e.g., Costas loop, Phase-Locked Loop - PLL) at the receiver.

**Reference:**
*   Lathi & Ding, 5th Edition, Chapter 10: Digital Modulation Techniques
*   Haykin & Moher, 2nd Edition, Chapter 12: Digital Modulation

### 3. BPSK Signal Constellation

A signal constellation is a graphical representation of the possible signal points (symbols) used in a digital modulation scheme. For a given modulation scheme, each unique symbol is mapped to a specific point in the constellation diagram. The axes of the constellation diagram typically represent the in-phase (I) and quadrature (Q) components of the carrier signal.

**3.1 Constructing the BPSK Constellation:**

In BPSK, each bit is represented by a unique phase of the carrier. We can represent the BPSK signal as:

$s(t) = A \cos(2\pi f_c t + \theta)$

where $\theta$ is the phase.

*   **Binary '0':** $s_0(t) = A \cos(2\pi f_c t)$. In terms of I and Q components, this can be thought of as having an in-phase component of $+A$ and a quadrature component of $0$.
*   **Binary '1':** $s_1(t) = A \cos(2\pi f_c t + \pi) = -A \cos(2\pi f_c t)$. This has an in-phase component of $-A$ and a quadrature component of $0$.

Alternatively, using a slightly different mathematical formulation where the signal is expressed in terms of orthogonal carriers $g_1(t) = \sqrt{2/T} \cos(2\pi f_c t)$ and $g_2(t) = \sqrt{2/T} \sin(2\pi f_c t)$, where T is the bit duration:

A BPSK signal can be expressed as:

$s(t) = \sqrt{E_b} \cos(2\pi f_c t)$ for bit '0'
$s(t) = -\sqrt{E_b} \cos(2\pi f_c t)$ for bit '1'

where $E_b$ is the energy per bit.

In terms of the I and Q components ($s(t) = I \cdot g_1(t) + Q \cdot g_2(t)$), and assuming $f_c$ is a high carrier frequency and we are looking at the representation in the I-Q plane after coherent demodulation and filtering:

*   **Bit '0':** Corresponds to a symbol with an in-phase component of $+\sqrt{E_b}$ and a quadrature component of 0.
*   **Bit '1':** Corresponds to a symbol with an in-phase component of $-\sqrt{E_b}$ and a quadrature component of 0.

**3.2 The BPSK Constellation Diagram:**

The BPSK constellation diagram consists of two points located on the in-phase (I) axis.

*   One point is at $(+\sqrt{E_b}, 0)$ representing bit '0'.
*   The other point is at $(-\sqrt{E_b}, 0)$ representing bit '1'.

The distance from the origin to each point is $\sqrt{E_b}$.

```
      ^ Q-axis
      |
      |
------|-------|--------> I-axis
      |       |
  (-sqrt(Eb),0) (+sqrt(Eb),0)
      |
      |
```

**Key Characteristics of BPSK Constellation:**

*   **Number of Symbols:** 2 (one for each bit).
*   **Dimensionality:** 1-dimensional (all points lie on a single axis, the I-axis in this common representation).
*   **Minimum Distance:** The distance between the two constellation points is $2\sqrt{E_b}$. This distance is crucial for determining the error performance of the system. A larger minimum distance generally leads to lower error probability.

**Reference:**
*   Proakis & Salehi, 6th Edition, Chapter 4: Digital Modulation
*   Stark, 1st edition, Chapter 3: Digital Modulation Schemes

**Course Outcomes Alignment:**
*   **CO2:** Explain the basic concepts of digital communication. (K2) - Understanding constellations is a core concept.
*   **CO3:** Analyse the baseband transmission of digital data through AWGN channel. (K3) - Constellation diagrams are used to analyze error performance in AWGN.
*   **CO4:** Apply various digital modulation techniques in the design of digital communication systems. (K3) - Constellation diagrams are fundamental to comparing and designing modulation schemes.

### 4. Advantages and Disadvantages of BPSK

**Advantages:**

*   **Simplicity:** BPSK is the simplest digital modulation scheme, making it easy to implement in both transmitters and receivers.
*   **Robustness:** It offers good noise immunity for a given energy per bit. The large separation between constellation points provides good resistance to noise.
*   **Spectral Efficiency:** While not the most spectrally efficient, it's reasonable for many applications.

**Disadvantages:**

*   **Bandwidth Requirement:** Requires twice the bandwidth of a non-return-to-zero (NRZ) baseband signal for the same data rate, due to the carrier.
*   **Coherent Detection Requirement:** Requires coherent detection, which necessitates carrier synchronization, adding complexity to the receiver.
*   **Limited Data Rate:** For higher data rates, other modulation schemes with more symbols per carrier might be preferred for better spectral efficiency.

**Reference:**
*   Haykin & Moher, 5th Edition, Section 7.4: BPSK
*   Kennedy, 6th Edition, Chapter 12: Digital Modulation Systems

### 5. Practice Questions and Answers

**Question 1:** What is the fundamental difference between baseband and band pass digital communication?

**Answer 1:** In baseband communication, the digital signal is transmitted directly at low frequencies without using a carrier. In band pass communication, the digital signal is modulated onto a high-frequency carrier signal for transmission.

**Question 2:** Describe the phase representation of binary '0' and binary '1' in a BPSK system.

**Answer 2:** In BPSK, binary '0' is typically represented by a carrier signal with a phase of 0 radians, while binary '1' is represented by a carrier signal with a phase of $\pi$ radians (180 degrees).

**Question 3:** Sketch the BPSK signal constellation diagram. Label the axes and the constellation points. What is the minimum distance between the constellation points, expressed in terms of $E_b$ (energy per bit)?

**Answer 3:**
*   **Sketch:** The diagram shows the I-Q plane with two points on the I-axis. One point is at $(+\sqrt{E_b}, 0)$ and the other is at $(-\sqrt{E_b}, 0)$.
*   **Minimum Distance:** The minimum distance between the two points is $2\sqrt{E_b}$.

**Question 4:** Why is carrier synchronization crucial for a BPSK receiver?

**Answer 4:** BPSK uses coherent detection, which requires the receiver to multiply the incoming signal with a locally generated carrier that is synchronized in phase and frequency with the transmitted carrier. Without proper synchronization, the detected signal would be distorted, leading to significant errors in data recovery.

**Question 5:** What is the main advantage of BPSK in terms of noise immunity compared to simpler modulation schemes?

**Answer 5:** BPSK has a larger minimum distance between its two signal points ($2\sqrt{E_b}$) compared to simpler amplitude-based schemes (like ASK with only one amplitude for each symbol, or two closely spaced amplitudes), making it more robust against noise and interference.

### 6. Important Points to Remember

*   **BPSK:** Binary Phase Shift Keying, a digital band pass modulation scheme.
*   **Phase Shift:** Uses two distinct phases of the carrier to represent binary '0' and '1'.
*   **Constellation:** Two points on the I-axis at $(+\sqrt{E_b}, 0)$ and $(-\sqrt{E_b}, 0)$.
*   **Minimum Distance:** $2\sqrt{E_b}$ for good noise performance.
*   **Coherent Detection:** Requires a synchronized local carrier at the receiver.
*   **Simplicity and Robustness:** Key advantages of BPSK.
*   **Bandwidth:** Requires a bandwidth of $2R_b$ (where $R_b$ is the bit rate) if a rectangular pulse shape is used and unfiltered, or approximately $R_b$ if a pulse shaping filter like raised cosine is applied.

---

This concludes the study notes for the BPSK system and signal constellation. Remember to refer to the textbooks for more detailed mathematical derivations and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
