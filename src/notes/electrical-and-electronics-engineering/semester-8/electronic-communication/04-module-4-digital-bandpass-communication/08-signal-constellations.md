---
title: "Signal constellations"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 4: Digital bandpass communication :"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c0a"
status: "completed"
scrapedAt: "2026-05-23T16:40:46.359Z"
---
# Electronic Communication: Module 4 - Digital Bandpass Communication

## Topic: Signal Constellations

### 1. Introduction to Digital Bandpass Communication

Digital bandpass communication systems transmit digital information over a communication channel that is band-limited. This is achieved by modulating a carrier wave with the digital data. Unlike baseband communication where the signal is transmitted directly, bandpass communication requires shifting the signal spectrum to a higher frequency band.

**Key Concepts:**

*   **Digital Data:** Information represented as a sequence of binary digits (0s and 1s).
*   **Bandpass Channel:** A channel that allows signals within a specific range of frequencies to pass while attenuating signals outside this range.
*   **Modulation:** The process of varying one or more properties of a periodic waveform (the carrier signal) with a modulating signal (the information-bearing signal).
*   **Carrier Signal:** A high-frequency sinusoidal signal used to carry the information.

**Alignment with Course Outcomes:**

*   **CO3:** Understand the various processing blocks of a digital communication system. (Knowledge Level: K2) - This section provides the foundational understanding of why bandpass modulation is necessary in digital communication systems.

### 2. Principles of Digital Bandpass Modulation

Digital bandpass modulation schemes use the digital data to control certain parameters of a carrier wave, typically its amplitude, phase, or frequency. The goal is to map discrete groups of bits into distinct signal waveforms.

**Key Concepts:**

*   **Symbol:** A unique signal waveform that represents a specific combination of bits.
*   **M-ary Modulation:** A modulation scheme where each symbol represents *m* bits, where $M = 2^m$. This allows for more efficient use of bandwidth.
*   **Decision Regions:** In the receiver, the received signal is compared to reference signals (or decision thresholds) to determine which symbol was transmitted.

**Textbook References:**

*   Kennedy's Electronic Communication Systems: Discusses various modulation techniques and their principles.
*   Tomasi's Electronic Communication Systems: Provides a good overview of modulation and demodulation in digital systems.

### 3. Signal Constellations: Visualizing Digital Modulation

A signal constellation, also known as a signal space diagram or constellation diagram, is a graphical representation of the possible signal vectors (or waveforms) used in a digital modulation scheme. Each point in the constellation diagram represents a unique symbol.

**Key Concepts:**

*   **Basis Functions:** A set of linearly independent functions used to represent the signal waveforms. For practical bandpass systems, these are typically sinusoidal functions, often in quadrature (i.e., sine and cosine).
*   **Signal Space:** A multidimensional space where each signal waveform can be represented as a vector. The dimensions are determined by the number of basis functions required.
*   **Symbol Energy:** The energy of a signal waveform representing a symbol.
*   **Minimum Distance ($d_{min}$):** The minimum Euclidean distance between any two points (symbols) in the constellation diagram. This is a crucial parameter for determining the error performance of the system.

**How it Works:**

In digital bandpass communication, a sequence of bits is grouped into symbols. Each symbol is then mapped to a unique signal waveform. The signal constellation diagram plots these unique signal waveforms as points in a 2-dimensional space (for practical bandpass systems using in-phase and quadrature components).

**Example:**

Consider a 4-ary Amplitude-Phase Shift Keying (4-APSK) scheme. If we use two basis functions, $\phi_1(t)$ and $\phi_2(t)$, corresponding to the in-phase and quadrature components of a carrier, each signal waveform $s_i(t)$ can be represented as:

$s_i(t) = \sqrt{E_{s_i}} \cos(2\pi f_c t + \theta_i)$

where $E_{s_i}$ is the energy of the $i$-th symbol, $f_c$ is the carrier frequency, and $\theta_i$ is the phase shift.

In the signal constellation, the points are typically plotted in the complex plane, where the horizontal axis represents the in-phase component and the vertical axis represents the quadrature component.

*   If a symbol corresponds to a specific amplitude $A$ and phase $\phi$, it can be represented as a point $(A \cos \phi, A \sin \phi)$ in the constellation diagram.

**Textbook References:**

*   Haykin & Mohre's Communication Systems: Provides a thorough explanation of signal space concepts and their application to digital modulation.
*   Proakis & Salehi's Communication System Engineering: Details signal representation and the geometry of signal constellations.
*   Lathi & Ding's Modern Digital and Analog Communication Systems: Offers visual explanations and examples of various constellation diagrams.

### 4. Types of Signal Constellations

The design of a signal constellation is critical for achieving a trade-off between spectral efficiency (bits per second per Hertz) and error performance (Bit Error Rate - BER).

#### 4.1. Amplitude Shift Keying (ASK)

In ASK, the amplitude of the carrier wave is varied to represent digital data.

*   **Binary ASK (2-ASK or OOK - On-Off Keying):**
    *   One amplitude level represents a '0' (typically zero amplitude) and another represents a '1' (a non-zero amplitude).
    *   **Constellation:** Two points along the real (in-phase) axis. One point at the origin (for '0') and another point at some amplitude $A$ (for '1').
    *   **Example:**
        *   '0' -> $s_0(t) = 0$
        *   '1' -> $s_1(t) = A \cos(2\pi f_c t)$
    *   **Error Performance:** Relatively poor, especially in the presence of amplitude variations or noise.

*   **M-ary ASK:**
    *   Uses *M* different amplitude levels to represent symbols.
    *   **Constellation:** *M* points equally spaced along a radial line from the origin in the complex plane.
    *   **Example:** 4-ASK uses 4 amplitude levels.

**Textbook References:**

*   Taub & Schilling's Principles of Communication Systems: Explains ASK and its variations in detail.
*   Couch's Digital and Analog Communication Systems: Provides practical aspects of implementing ASK.

#### 4.2. Phase Shift Keying (PSK)

In PSK, the phase of the carrier wave is varied to represent digital data. The amplitude is usually kept constant.

*   **Binary PSK (BPSK):**
    *   Two phases, typically 0 and $\pi$ radians (or 0 and 180 degrees).
    *   **Constellation:** Two points on the unit circle (if normalized) or a circle of radius $A$ in the complex plane, diametrically opposite each other. One point at $(A, 0)$ and the other at $(-A, 0)$ (if aligned with the real axis).
    *   **Example:**
        *   '0' -> $s_0(t) = A \cos(2\pi f_c t)$
        *   '1' -> $s_1(t) = -A \cos(2\pi f_c t) = A \cos(2\pi f_c t + \pi)$
    *   **Error Performance:** Good, relatively robust to noise. $d_{min}$ is proportional to amplitude.

*   **Quadrature PSK (QPSK):**
    *   Uses four phases, typically $\pi/4, 3\pi/4, 5\pi/4, 7\pi/4$ radians. Each phase represents 2 bits.
    *   **Constellation:** Four points equally spaced on a circle in the complex plane.
    *   **Example:**
        *   '00' -> $A \cos(2\pi f_c t + \pi/4)$
        *   '01' -> $A \cos(2\pi f_c t + 3\pi/4)$
        *   '11' -> $A \cos(2\pi f_c t + 5\pi/4)$
        *   '10' -> $A \cos(2\pi f_c t + 7\pi/4)$
    *   **Spectral Efficiency:** Higher than BPSK as it transmits 2 bits per symbol.
    *   **Error Performance:** Similar to BPSK for the same symbol energy, but transmits twice the data rate.

*   **M-ary PSK:**
    *   Uses $M$ phases equally spaced around a circle. Each symbol represents $\log_2(M)$ bits.
    *   **Constellation:** $M$ points equally spaced on a circle.
    *   **Trade-off:** Increasing $M$ increases spectral efficiency but reduces $d_{min}$ between adjacent points, leading to higher BER.

**Textbook References:**

*   Kennedy's Electronic Communication Systems: Detailed coverage of PSK schemes.
*   Tomasi's Electronic Communication Systems: Explains QPSK and its applications.

#### 4.3. Frequency Shift Keying (FSK)

In FSK, the frequency of the carrier wave is varied to represent digital data.

*   **Binary FSK (BFSK):**
    *   Two different frequencies, $f_1$ and $f_2$, are used to represent '0' and '1'.
    *   **Constellation:** Not easily represented in a 2D signal space diagram in the same way as ASK/PSK. It's more of a time-domain representation.
    *   **Example:**
        *   '0' -> $s_0(t) = A \cos(2\pi f_1 t)$
        *   '1' -> $s_1(t) = A \cos(2\pi f_2 t)$
    *   **Error Performance:** Generally worse than BPSK for the same bandwidth and power.

*   **M-ary FSK:**
    *   Uses $M$ distinct frequencies.

**Note on FSK Constellations:** While FSK can be represented using basis functions, its signal constellation is often visualized differently. For $N$ frequencies, $N$ orthogonal basis functions are required, making the representation more complex than the 2D constellations of ASK/PSK.

**Textbook References:**

*   Haykin & Mohre's Communication Systems: Discusses FSK and its spectral characteristics.
*   Taub & Schilling's Principles of Communication Systems: Provides mathematical analysis of FSK.

#### 4.4. Quadrature Amplitude Modulation (QAM)

QAM combines both amplitude and phase variations to transmit digital data. This allows for higher spectral efficiencies.

*   **M-ary QAM:**
    *   Uses *M* distinct signal points, where *M* is typically a power of 2 ($M=4, 8, 16, 32, 64$, etc.).
    *   **Constellation:** Points are arranged in a grid-like structure in the complex plane, with varying amplitudes and phases.
    *   **Example:**
        *   **4-QAM (also known as QPSK if points are on a circle):** Four points, typically at $(\pm A, \pm A)$ if using two amplitudes and two phases.
        *   **16-QAM:** 16 points arranged in a square grid. Each symbol represents 4 bits. The constellation has 4 amplitude levels and 4 phase values.
        *   **64-QAM:** 64 points arranged in a square grid. Each symbol represents 6 bits.
    *   **Trade-off:** Higher $M$ leads to higher spectral efficiency but requires a larger minimum distance ($d_{min}$) between points to maintain acceptable BER, meaning higher transmit power is needed.

**Important Considerations for QAM Constellations:**

*   **Square QAM:** Constellations are arranged in a square grid (e.g., 16-QAM, 64-QAM).
*   **Constellation Shaping:** The arrangement of points is optimized to improve error performance. For example, moving points further apart in regions where they might be confused by noise.
*   **Gray Coding:** Adjacent symbols in the constellation are assigned codes that differ by only one bit. This minimizes the probability of an error to a single bit if the receiver makes a small error in symbol detection.

**Textbook References:**

*   Proakis & Salehi's Communication System Engineering: Extensive coverage of QAM, including constellation design and error analysis.
*   Lathi & Ding's Modern Digital and Analog Communication Systems: Provides clear diagrams and explanations of various QAM constellations.
*   Tomasi's Electronic Communication Systems: Discusses the practical aspects and applications of QAM.

### 5. Performance Metrics Related to Signal Constellations

The choice of signal constellation directly impacts the performance of a digital communication system.

*   **Spectral Efficiency:** The amount of information that can be transmitted per unit of bandwidth. Measured in bits/sec/Hz. Higher *M* in M-ary modulation generally leads to higher spectral efficiency.
    *   For M-ary modulation: Spectral Efficiency = $\log_2(M) / T_s B$, where $T_s$ is symbol duration and $B$ is bandwidth.

*   **Error Probability (Bit Error Rate - BER):** The probability that a transmitted bit is received incorrectly.
    *   **Minimum Distance ($d_{min}$):** A larger $d_{min}$ leads to a lower BER, assuming a constant symbol energy.
    *   **Average Symbol Energy ($\bar{E}_s$):** Higher energy generally leads to lower BER.
    *   The relationship between BER and signal-to-noise ratio (SNR) is heavily influenced by the geometry of the constellation.

*   **Power Efficiency:** The ability to achieve a certain BER with a given amount of power. Systems with larger $d_{min}$ for a given symbol energy are more power-efficient.

**Alignment with Course Outcomes:**

*   **CO4:** Apply the knowledge of digital modulation in digital transmission. (Knowledge Level: K3) - Understanding constellations allows for the selection of appropriate modulation schemes for specific transmission requirements, balancing spectral and power efficiency.

**Textbook References:**

*   Haykin & Mohre's Communication Systems: Analyzes the error performance of different modulation schemes based on their constellations.
*   Ziemer & Tranter's Principles of Communications: Provides detailed mathematical derivations for error probabilities.

### 6. Examples and Applications

*   **Wi-Fi:** Uses various forms of QAM (e.g., 16-QAM, 64-QAM, 256-QAM) to achieve high data rates. The constellation used depends on the signal quality.
*   **Cellular Communication (e.g., 4G LTE, 5G):** Employs advanced QAM schemes to maximize data throughput.
*   **Digital Television Broadcasting:** Utilizes QAM for efficient transmission of video and audio signals.
*   **DSL (Digital Subscriber Line):** Uses ADSL (Asymmetric DSL) which often employs QAM.

### 7. Important Points to Remember

*   A signal constellation is a geometric representation of the possible signal waveforms used in digital modulation.
*   Each point in the constellation represents a unique symbol, which in turn represents a group of bits.
*   The **minimum distance ($d_{min}$)** between constellation points is a critical factor in determining the error performance of the system. A larger $d_{min}$ leads to better error performance.
*   Increasing the number of points (*M*) in the constellation increases **spectral efficiency** but generally decreases $d_{min}$ for a fixed symbol energy, leading to poorer error performance.
*   **QAM** is a popular modulation scheme that combines amplitude and phase variations to achieve high spectral efficiency.
*   **Gray coding** is often used in QAM constellations to minimize bit errors when symbol detection errors occur.
*   The choice of constellation involves a trade-off between spectral efficiency and power efficiency (or error performance).

### 8. Practice Questions and Exercises

**Question 1:**

What is a signal constellation diagram, and what information does it convey about a digital modulation scheme?

**Answer:**
A signal constellation diagram is a graphical representation of the possible signal waveforms (or signal vectors) used in a digital modulation scheme. Each point in the diagram represents a unique symbol, which in turn represents a specific combination of bits. It conveys information about the amplitude, phase, and frequency (implicitly, if not directly plotted) of the transmitted signals, as well as the relative spacing between these signals. The spacing is crucial for understanding the error performance and power efficiency of the modulation scheme.

**Question 2:**

Consider a system using BPSK. If the transmitted signal is $s(t) = A \cos(2\pi f_c t)$ for a '0' and $s(t) = -A \cos(2\pi f_c t)$ for a '1', sketch the signal constellation diagram. What is the minimum distance between the constellation points in terms of A?

**Answer:**
The signal constellation diagram for BPSK consists of two points. Assuming the carrier is aligned with the in-phase axis, the points are:
*   For '0': $(A, 0)$
*   For '1': $(-A, 0)$

```
       ^ Quadrature
       |
       |
-------+------- > In-phase
      -A      A
       |
       |
```

The minimum distance ($d_{min}$) between the two points is the Euclidean distance between $(A, 0)$ and $(-A, 0)$, which is $\sqrt{(A - (-A))^2 + (0 - 0)^2} = \sqrt{(2A)^2} = 2A$.

**Question 3:**

How does the minimum distance ($d_{min}$) between constellation points affect the error performance of a digital communication system?

**Answer:**
A larger minimum distance ($d_{min}$) between constellation points generally leads to better error performance. This is because the receiver needs to distinguish between these points. If the points are further apart, a smaller error due to noise is required to cause a misinterpretation of the received symbol. Consequently, a larger $d_{min}$ reduces the probability of error (Bit Error Rate - BER) for a given signal-to-noise ratio (SNR).

**Question 4:**

Compare and contrast 16-QAM and 64-QAM in terms of spectral efficiency and typical error performance.

**Answer:**
*   **Spectral Efficiency:**
    *   16-QAM transmits 4 bits per symbol ($\log_2(16) = 4$).
    *   64-QAM transmits 6 bits per symbol ($\log_2(64) = 6$).
    *   Therefore, 64-QAM has a higher spectral efficiency than 16-QAM. For the same symbol rate, 64-QAM transmits 50% more data.

*   **Error Performance:**
    *   64-QAM has more constellation points and typically has points closer together than 16-QAM for the same average symbol energy. This means the minimum distance ($d_{min}$) between constellation points is smaller in 64-QAM compared to 16-QAM.
    *   As a result, for the same SNR, 64-QAM will have a higher error probability (worse error performance) than 16-QAM. To achieve comparable error performance, 64-QAM requires a significantly higher SNR (more transmit power).

**Question 5:**

Explain the concept of Gray coding and its importance in digital communication systems, particularly for QAM.

**Answer:**
Gray coding is a mapping scheme where adjacent symbols in a signal constellation are assigned binary codes that differ by only a single bit. Its importance lies in reducing the bit error rate (BER). When a receiver makes a small error in detecting a symbol, and the constellation is Gray coded, this error will typically result in a misinterpretation of only one bit, rather than multiple bits. This is particularly beneficial in modulation schemes like QAM, where multiple bits are mapped to a single symbol, and errors in symbol detection are common.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
