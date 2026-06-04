---
title: "QPSK system and Signal constellations."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 4: Digital band pass modulation schemes"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe91a"
status: "completed"
scrapedAt: "2026-05-23T17:53:05.677Z"
---
# Module 4: Digital Band Pass Modulation Schemes - QPSK System and Signal Constellations

## 1. Introduction to Digital Band Pass Modulation

This module delves into digital band pass modulation schemes, which are crucial for transmitting digital information over radio frequency (RF) channels. Unlike baseband modulation (where the modulated signal occupies frequencies starting from DC), band pass modulation shifts the signal spectrum to a higher frequency band, allowing for efficient use of the available spectrum.

**Key Concept:** Digital band pass modulation maps digital data bits into analog waveforms modulated onto a carrier frequency.

**Course Outcome Alignment:**
*   **CO2:** Explain the basic concepts of digital communication. (K2)
*   **CO3:** Analyze the baseband transmission of digital data through AWGN channel. (K3) - Understanding the need for band pass modulation is a precursor to analyzing baseband representation.
*   **CO4:** Apply various digital modulation techniques in the design of digital communication systems. (K3) - This module directly addresses applying modulation techniques.

**Textbook References:**
*   Haykin & Moher (5th Ed.): Chapter 6, "Digital Modulation Techniques"
*   Lathi & Ding (5th Ed.): Chapter 4, "Digital Modulation Techniques"

---

## 2. Quadrature Phase Shift Keying (QPSK)

QPSK is a popular digital band pass modulation scheme that offers increased data rates compared to simpler schemes like Binary Phase Shift Keying (BPSK) by transmitting more than one bit per symbol.

**Key Concept:** In QPSK, digital data is encoded into symbols, and each symbol is represented by a specific phase shift of a carrier wave. Two bits are typically transmitted per symbol.

**How it Works:**
1.  **Bit Grouping:** Incoming serial data bits are grouped into pairs (dibits).
2.  **Mapping to Symbols:** Each dibit is mapped to a unique phase and amplitude of the carrier signal.
3.  **Modulation:** The carrier signal is then modulated by these phase/amplitude combinations.

**Example:**
Consider a stream of binary data: `11010010`.
*   Grouped into dibits: `11`, `01`, `00`, `10`.
*   Each dibit is mapped to a specific phase/amplitude, which is then applied to the carrier.

**Textbook References:**
*   Haykin & Moher (5th Ed.): Section 6.3, "Quadrature Phase-Shift Keying (QPSK)"
*   Lathi & Ding (5th Ed.): Section 4.3, "Quadrature Phase-Shift Keying (QPSK)"
*   Proakis & Salehi (6th Ed.): Chapter 2, "Digital Modulation"

---

### 2.1 Signal Constellations for QPSK

A signal constellation is a graphical representation of the possible signal states (symbols) in a digital modulation scheme. For QPSK, the constellation is typically plotted in the I-Q plane (In-phase and Quadrature components).

**Key Concept:** A signal constellation for QPSK shows the unique combinations of amplitude and phase used to represent data symbols.

**QPSK Signal Constellation:**
*   QPSK uses four distinct signal points in the constellation diagram.
*   Each point represents a dibit.
*   The points are typically located at equal angular separation (90 degrees) and at the same radial distance (constant amplitude).

**Common QPSK Constellation Mapping:**
| Dibit | Quadrature Component (Q) | In-phase Component (I) | Phase ($\phi$) |
| :---- | :----------------------- | :--------------------- | :------------- |
| 00    | +A                       | +A                     | 45°            |
| 01    | -A                       | +A                     | 135°           |
| 11    | -A                       | -A                     | 225°           |
| 10    | +A                       | -A                     | 315° (-45°)    |

*(Note: The specific mapping can vary, but the principle of 4 points at 90° separation remains the same.)*

**Diagrammatic Representation (I-Q Plane):**

```
       ^ Q (Quadrature)
       |
       |      (0,1) - 01
       |        *
       |
-------+---------> I (In-phase)
       | *      | *
(1,0) - 10 |      (1,1) - 11
       |
```
*(In the above diagram, for simplicity, let's assume A=1. The points are roughly at (1,1), (-1,1), (-1,-1), (1,-1) for I and Q respectively, corresponding to different dibits.)*

**Important Points to Remember:**
*   Each point in the constellation represents a symbol that conveys 2 bits of information (since there are $2^2 = 4$ points).
*   The distance of each point from the origin represents the amplitude of the signal. In standard QPSK, all points have the same amplitude, making it a **constant envelope** modulation scheme.
*   The angle of each point relative to the I-axis represents the phase of the signal.

**Textbook References:**
*   Haykin & Moher (5th Ed.): Figure 6.9, "Signal constellation for QPSK"
*   Lathi & Ding (5th Ed.): Figure 4.6, "QPSK signal constellation"

---

### 2.2 Mathematical Representation of QPSK Signals

A QPSK signal can be represented as:

$s_i(t) = \sqrt{\frac{2E_s}{T_s}} \cos(\omega_c t + \phi_i)$  for $0 \le t \le T_s$, and $i = 1, 2, 3, 4$.

Where:
*   $E_s$ is the energy per symbol.
*   $T_s$ is the symbol duration.
*   $\omega_c$ is the carrier angular frequency.
*   $\phi_i$ is the phase for the $i$-th symbol.
*   $\sqrt{\frac{2E_s}{T_s}}$ is the amplitude of the carrier.

Alternatively, QPSK can be viewed as the superposition of two BPSK signals modulated onto two quadrature carriers:

$s(t) = d_I(t) \cos(\omega_c t) - d_Q(t) \sin(\omega_c t)$

Where:
*   $d_I(t)$ is the in-phase component signal.
*   $d_Q(t)$ is the quadrature component signal.
*   $d_I(t)$ and $d_Q(t)$ are typically rectangular pulses of duration $T_s$, taking values of $\pm \sqrt{E_b/T_s}$, where $E_b$ is the energy per bit.

**Example:**
If a dibit is `00`, it might map to $d_I(t) = \sqrt{E_b/T_s}$ and $d_Q(t) = \sqrt{E_b/T_s}$ (or vice-versa, depending on the mapping convention).

**Important Points to Remember:**
*   $T_s = 2 T_b$, where $T_b$ is the bit duration. This means that for the same bit rate, the symbol duration in QPSK is twice that of BPSK.
*   $E_s = 2E_b$. The energy per symbol is twice the energy per bit because each symbol carries two bits.

**Textbook References:**
*   Haykin & Moher (5th Ed.): Section 6.3.1, "Mathematical description of QPSK"
*   Lathi & Ding (5th Ed.): Section 4.3.1, "QPSK signal"

---

### 2.3 QPSK Transmitters and Receivers

**QPSK Transmitter:**

1.  **Serial-to-Parallel Converter:** Converts the incoming serial data stream into two parallel streams, one for the in-phase (I) channel and one for the quadrature (Q) channel. Each parallel stream carries bits at half the original serial rate.
2.  **Dibit-to-Symbol Mapper:** Maps each pair of bits (dibit) to the corresponding phase shift or amplitude levels for the I and Q components.
3.  **Modulators:**
    *   **In-phase Modulator:** Modulates a carrier signal $\cos(\omega_c t)$ with the I-channel data.
    *   **Quadrature Modulator:** Modulates a quadrature carrier signal $\sin(\omega_c t)$ with the Q-channel data. (Note: The quadrature carrier is phase-shifted by 90 degrees relative to the in-phase carrier).
4.  **Summer:** Adds the outputs of the I and Q modulators to produce the final QPSK modulated signal.

**QPSK Receiver:**

1.  **Demodulator (Coherent Detection):**
    *   **Synchronized Carrier Recovery:** The receiver needs a local oscillator that is synchronized in frequency and phase with the incoming carrier. This is often achieved using a Phase-Locked Loop (PLL).
    *   **Product Demodulators (Mixers):** The received signal is multiplied with two locally generated carriers: one in-phase ($ \cos(\omega_c t)$) and one in quadrature ($ \sin(\omega_c t)$).
2.  **Low-Pass Filters (LPF):** After mixing, the outputs are passed through LPFs to remove high-frequency components, leaving the baseband I and Q signals.
3.  **Symbol Sampler:** The filtered I and Q signals are sampled at the symbol timing instants ($T_s$).
4.  **Decision Device:** Based on the sampled values of the I and Q components, the receiver decides which of the four possible symbols was transmitted. This is done by comparing the sampled values to decision thresholds.
5.  **Parallel-to-Serial Converter:** The detected dibits are converted back into a serial data stream.

**Textbook References:**
*   Haykin & Moher (5th Ed.): Section 6.3.2, "QPSK Transmitter and Receiver"
*   Lathi & Ding (5th Ed.): Section 4.3.2, "QPSK Transmitter and Receiver"

---

### 2.4 Performance of QPSK

The performance of a QPSK system is typically evaluated in terms of its Bit Error Rate (BER) in the presence of Additive White Gaussian Noise (AWGN).

**Key Concepts:**
*   **Bit Error Rate (BER):** The probability that a transmitted bit is received incorrectly.
*   **Symbol Error Rate (SER):** The probability that a transmitted symbol is received incorrectly.
*   **Energy per Bit ($E_b$) to Noise Power Spectral Density Ratio ($N_0$):** A key parameter affecting BER, often expressed as $E_b/N_0$.

**Performance Analysis:**
*   QPSK requires a higher $E_b/N_0$ compared to BPSK to achieve the same BER because it carries more information per symbol.
*   For a given symbol error rate, QPSK requires approximately 3 dB more $E_s/N_0$ than BPSK. However, since $E_s = 2E_b$, this means QPSK performs similarly to BPSK in terms of $E_b/N_0$ for the same BER.
*   Specifically, the BER for QPSK is given by:

    $P_e \approx Q\left(\sqrt{\frac{E_b}{N_0}}\right)$

    Where $Q(x)$ is the Q-function (tail probability of the standard normal distribution). This is the same as BPSK, but we need to remember that $E_b$ is the energy per bit, and QPSK transmits 2 bits per symbol.

**Advantages of QPSK:**
*   **Higher Data Rate:** Transmits twice the number of bits per symbol compared to BPSK, achieving a higher data rate for the same symbol rate.
*   **Constant Envelope:** Makes it suitable for amplification by non-linear power amplifiers without significant distortion.

**Disadvantages of QPSK:**
*   **More Complex Transmitter and Receiver:** Requires more sophisticated circuitry than BPSK.
*   **Requires More Bandwidth:** For the same bit rate, QPSK occupies the same bandwidth as BPSK, but to achieve a *higher* bit rate at the same symbol rate, it implicitly requires a wider channel if the symbol rate is increased. However, when comparing QPSK and BPSK at the *same bit rate*, they occupy the same bandwidth. The advantage is that you can achieve that bit rate with a lower symbol rate compared to BPSK if you had a limited bandwidth.

**Textbook References:**
*   Haykin & Moher (5th Ed.): Section 6.3.3, "Performance of QPSK in AWGN"
*   Lathi & Ding (5th Ed.): Section 4.3.3, "Performance of QPSK"
*   Proakis & Salehi (6th Ed.): Chapter 4, "Performance Analysis of Digital Communication Systems"

---

## 3. Types of QPSK

While the core principle remains the same, variations of QPSK exist to improve performance or meet specific system requirements.

### 3.1 Offset QPSK (OQPSK)

**Key Concept:** In OQPSK, the data streams for the in-phase and quadrature components are shifted in time by half a symbol period ($T_s/2$).

**How it Works:**
*   The I and Q data streams are staggered. When one stream changes value, the other remains constant for an additional half symbol period.

**Advantages:**
*   **Reduced Envelope Fluctuations:** The staggered nature of the signals leads to smoother transitions in the modulated signal's phase and amplitude compared to standard QPSK. This reduces spectral spreading caused by non-linear amplification.

**Disadvantages:**
*   **Slightly More Complex Receiver:** Requires more careful synchronization.

**Textbook References:**
*   Haykin & Moher (5th Ed.): Section 6.3.4, "Offset QPSK (OQPSK)"
*   Lathi & Ding (5th Ed.): Section 4.3.4, "Offset QPSK (OQPSK)"

---

### 3.2 π/4-QPSK

**Key Concept:** In $\pi/4$-QPSK, the phase of the transmitted signal is shifted by $\pi/4$ relative to the previous symbol's phase, in addition to the phase shift dictated by the dibit.

**How it Works:**
*   The mapping involves a differential encoding scheme. The phase change between consecutive symbols is dependent on the current dibit.
*   The phase of each symbol is $\pi/4$ ahead of the phase of the previous symbol, plus an additional phase shift determined by the current dibit.

**Advantages:**
*   **Reduced Envelope Fluctuations:** Similar to OQPSK, $\pi/4$-QPSK also offers reduced amplitude variations, making it robust against non-linear amplification. It is often preferred in applications where non-linear amplification is unavoidable.
*   **Simpler Receiver Design:** Can be demodulated using non-coherent or differentially coherent detection methods, which are less complex than coherent detection.

**Disadvantages:**
*   **Lower Spectral Efficiency (compared to some advanced schemes):** For the same bandwidth, it may carry slightly less information than more complex modulations.

**Textbook References:**
*   Haykin & Moher (5th Ed.): Section 6.3.5, "$\pi/4$-QPSK"
*   Lathi & Ding (5th Ed.): Section 4.3.5, "$\pi/4$-QPSK"

---

## 4. Practice Questions and Exercises

**Question 1:**
What is the primary advantage of QPSK over BPSK?
(a) Higher spectral efficiency
(b) Better noise immunity
(c) Higher data rate for the same bandwidth and symbol rate
(d) Simpler transmitter design

**Answer:** (c) Higher data rate for the same bandwidth and symbol rate. QPSK transmits 2 bits per symbol, while BPSK transmits 1 bit per symbol.

**Question 2:**
In a QPSK signal constellation, how many distinct signal points are there, and how many bits does each point represent?

**Answer:** There are 4 distinct signal points, and each point represents 2 bits.

**Question 3:**
Explain the difference between standard QPSK and Offset QPSK (OQPSK). What is the main benefit of OQPSK?

**Answer:** In standard QPSK, the in-phase and quadrature data streams are processed independently. In OQPSK, the I and Q data streams are time-shifted by half a symbol period ($T_s/2$). The main benefit of OQPSK is reduced envelope fluctuations, leading to better performance when amplified by non-linear amplifiers.

**Question 4:**
A QPSK system transmits data at a symbol rate of 1 Msps (Mega symbols per second). What is the bit rate of the system?

**Answer:**
Symbol rate ($R_s$) = 1 Msps
Bits per symbol = 2
Bit rate ($R_b$) = Symbol rate $\times$ Bits per symbol
$R_b = 1 \text{ Msymbols/s} \times 2 \text{ bits/symbol} = 2 \text{ Mbps}$

**Question 5:**
Sketch the signal constellation for QPSK in the I-Q plane. Label the quadrants and indicate a possible mapping for dibits (e.g., 00, 01, 10, 11).

**Answer:**
(Refer back to Section 2.2 for the diagrammatic representation. The key is to show 4 points equally spaced at 90-degree intervals on a circle centered at the origin).

```
       ^ Q
       |
       |      (e.g., 01)
       |        *
       |
-------+---------> I
       | *      | *
(e.g., 10)|      (e.g., 11)
       |      *
       |    (e.g., 00)
```

**Question 6:**
If a QPSK signal has an energy per symbol $E_s = 0.02$ Joules and a symbol duration $T_s = 10^{-6}$ seconds, calculate the amplitude of the carrier.

**Answer:**
The signal can be represented as $s(t) = \sqrt{\frac{2E_s}{T_s}} \cos(\omega_c t + \phi_i)$
Amplitude $= \sqrt{\frac{2E_s}{T_s}}$
Amplitude $= \sqrt{\frac{2 \times 0.02 \text{ J}}{10^{-6} \text{ s}}}$
Amplitude $= \sqrt{\frac{0.04}{10^{-6}}} = \sqrt{4 \times 10^4}$
Amplitude $= 2 \times 10^2 = 200$ Volts (assuming the amplitude is in Volts for voltage signals).

---

## 5. Important Points to Remember

*   **QPSK carries 2 bits per symbol**, allowing for a higher data rate than BPSK at the same symbol rate.
*   The **signal constellation** for QPSK has **four points**, equally spaced in phase (90 degrees apart) and at a constant amplitude.
*   QPSK is a **constant envelope** modulation, making it suitable for non-linear amplifiers.
*   **$T_s = 2T_b$** and **$E_s = 2E_b$** are crucial relationships in QPSK.
*   **OQPSK** and **$\pi/4$-QPSK** are variants designed to reduce envelope fluctuations, improving performance in non-linear channels and potentially simplifying receiver design.
*   The performance of QPSK in AWGN is characterized by its BER, which is approximately the same as BPSK for the same $E_b/N_0$.

---

## 6. Conclusion

Quadrature Phase Shift Keying (QPSK) is a fundamental digital band pass modulation scheme that significantly enhances data transmission efficiency by encoding two bits per symbol. Its ability to achieve higher data rates while maintaining a constant envelope makes it widely applicable in modern communication systems. Understanding its signal constellation, mathematical representation, and transmitter/receiver architecture is key to appreciating its role in digital communications. The variations like OQPSK and $\pi/4$-QPSK further highlight the continuous evolution of modulation techniques to meet diverse system requirements.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
