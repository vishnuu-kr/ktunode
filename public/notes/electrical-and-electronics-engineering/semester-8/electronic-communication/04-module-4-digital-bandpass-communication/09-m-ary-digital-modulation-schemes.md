---
title: "M-ary digital modulation schemes"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 4: Digital bandpass communication :"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c0b"
status: "completed"
scrapedAt: "2026-05-23T16:40:47.502Z"
---
# Module 4: Digital Bandpass Communication - M-ary Digital Modulation Schemes

This module delves into M-ary digital modulation schemes, which are a fundamental part of modern digital communication systems. By transmitting multiple symbols simultaneously, these schemes significantly increase data rates while aiming to maintain efficient spectrum utilization and robust performance against noise.

**Learning Outcomes Covered:**

*   Understanding the principles of M-ary digital modulation.
*   Comparing and contrasting different M-ary modulation schemes.
*   Analyzing the performance of M-ary schemes in terms of bit error rate (BER) and bandwidth efficiency.
*   Understanding the trade-offs involved in choosing an M-ary modulation scheme for a specific application.
*   Relating the concepts of M-ary modulation to practical digital communication systems.

**Key Concepts and Definitions:**

*   **Digital Modulation:** The process of encoding digital information onto a carrier signal. In bandpass modulation, this typically involves modifying the amplitude, phase, or frequency of a sinusoidal carrier wave.
*   **Symbol:** A single unit of information in a digital modulation scheme. In M-ary schemes, a symbol represents more than one bit of data.
*   **M-ary Modulation:** Digital modulation schemes where each symbol can take one of $M$ possible values. This means each symbol carries $\log_2(M)$ bits of information.
*   **Alphabet Size (M):** The number of distinct symbols used in an M-ary modulation scheme.
*   **Bandwidth Efficiency:** A measure of how effectively the available bandwidth is utilized to transmit digital data. It is typically measured in bits per second per Hertz (bps/Hz).
*   **Bit Error Rate (BER):** The probability that a transmitted bit is received in error.
*   **Symbol Error Rate (SER):** The probability that a transmitted symbol is received incorrectly.
*   **Signal Constellation Diagram:** A graphical representation of the possible signal points (symbols) in a complex plane (I-Q plane) used in digital modulation.
*   **Decision Regions:** Areas in the signal constellation diagram within which an incoming received signal is decided to correspond to a particular transmitted symbol.
*   **Minimum Euclidean Distance ($d_{min}$):** The smallest distance between any two distinct signal points in the signal constellation. This is a critical parameter for determining the BER performance.
*   **Energy per Symbol ($E_s$):** The average energy contained in a single transmitted symbol.
*   **Energy per Bit ($E_b$):** The average energy per bit transmitted. $E_s = k E_b$, where $k = \log_2(M)$ is the number of bits per symbol.
*   **Normalized Bandwidth ($W_N$):** The bandwidth required to transmit a given digital signal. For bandpass signals, the null-to-null bandwidth is often considered.
*   **Non-coherent Detection:** Demodulation techniques that do not require precise knowledge of the carrier phase at the receiver.
*   **Coherent Detection:** Demodulation techniques that require precise knowledge of the carrier phase and frequency at the receiver.

---

## 1. Introduction to M-ary Digital Modulation

M-ary modulation schemes are designed to transmit multiple bits per symbol. Instead of mapping each individual bit to a unique carrier characteristic, we group $k$ bits together to form a *symbol*. This symbol is then mapped to one of $M$ possible signal waveforms.

**Key Idea:** By increasing the number of bits per symbol ($k = \log_2(M)$), we can potentially reduce the required bandwidth for a given data rate or increase the data rate for a given bandwidth. However, this comes at the cost of increased complexity and potentially poorer error performance.

**Relationship to Course Outcomes:**
*   **CO3:** Understanding the processing blocks of a digital communication system (including how data is encoded into symbols).
*   **CO4:** Applying knowledge of digital modulation in digital transmission (by understanding how M-ary schemes transmit data).

---

## 2. M-ary Amplitude Shift Keying (M-ASK)

In M-ASK, the amplitude of the carrier signal is varied to represent different symbols.

**Signal Representation:**
A transmitted M-ASK signal can be represented as:
$s_i(t) = A_i \cos(2\pi f_c t)$, for $0 \le t \le T_s$, where $i = 1, 2, \dots, M$.
Here, $A_i$ are $M$ distinct amplitude levels, $f_c$ is the carrier frequency, and $T_s$ is the symbol duration.

**Signal Constellation:**
The signal constellation for M-ASK consists of $M$ points lying on a single axis (the amplitude axis) in the I-Q plane. The points are typically equally spaced.

**Bandwidth Efficiency:**
The bandwidth required for M-ASK is primarily determined by the symbol rate ($R_s = 1/T_s$). The minimum bandwidth required for an M-ASK signal (assuming rectangular pulses) is $B = R_s = \frac{R_b}{\log_2(M)}$ Hz, where $R_b$ is the bit rate.
Bandwidth Efficiency = $\frac{R_b}{B} = \log_2(M)$ bps/Hz.

**Performance:**
*   **Error Performance:** M-ASK is highly susceptible to amplitude variations caused by noise and channel fading. As $M$ increases, the amplitude levels become closer, leading to higher SER and BER.
*   **Power Efficiency:** M-ASK can be power-inefficient, especially with non-uniform spacing of amplitude levels.

**Example:**
*   **2-ASK (BFSK):** Two amplitude levels, typically 0 and $A$. Corresponds to Binary Amplitude Shift Keying (BASK).
*   **4-ASK (QASK):** Four amplitude levels. Each symbol carries $\log_2(4) = 2$ bits.

**Reference:**
*   **Kennedy et al. (6th Ed.):** Discusses amplitude modulation and its digital variants.
*   **Tomasi (5th Ed.):** Covers ASK and its principles.

---

## 3. M-ary Frequency Shift Keying (M-FSK)

In M-FSK, the frequency of the carrier signal is varied to represent different symbols.

**Signal Representation:**
A transmitted M-FSK signal can be represented as:
$s_i(t) = A \cos(2\pi (f_c + \Delta f_i) t)$, for $0 \le t \le T_s$, where $i = 1, 2, \dots, M$.
Here

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
