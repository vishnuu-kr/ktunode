---
title: "QPSK transmitter and receiver."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 4: Digital band pass modulation schemes"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe91d"
status: "completed"
scrapedAt: "2026-05-23T17:53:07.763Z"
---
# ANALOG AND DIGITAL COMMUNICATION

## Module 4: Digital Band Pass Modulation Schemes

## Topic: Quadrature Phase Shift Keying (QPSK) Transmitter and Receiver

---

### **1. Introduction to QPSK**

Quadrature Phase Shift Keying (QPSK), also known as *tetraphase PSK*, is a digital modulation scheme that encodes digital data by changing the phase of a carrier wave. Unlike Binary Phase Shift Keying (BPSK) which uses two phases, QPSK uses four distinct phases to transmit two bits of data simultaneously. This allows for a higher data rate compared to BPSK for the same bandwidth.

**Key Concepts:**

*   **Digital Modulation:** The process of encoding digital information onto an analog carrier wave.
*   **Bandpass Modulation:** Modulation schemes where the modulating signal is used to vary properties of a high-frequency carrier wave.
*   **Phase Shift Keying (PSK):** A modulation scheme that conveys data by changing (modulating) the phase of a reference signal (the carrier wave) by a fixed amount.
*   **Symbol:** A single unit of transmission in a digital modulation scheme, representing a certain number of bits. In QPSK, a symbol represents 2 bits.
*   **Constellation Diagram:** A scatter plot of the possible transmitted symbols in the complex plane, showing the amplitude and phase of each symbol.

**Learning Outcome Alignment:**

*   **CO1 (K2):** Understanding the fundamental principle of using phase to represent digital information.
*   **CO2 (K2):** Grasping the concept of using multiple phases for digital data transmission.
*   **CO4 (K3):** Applying QPSK as a digital modulation technique.

---

### **2. QPSK Transmitter**

The QPSK transmitter takes a serial stream of binary data and converts it into a modulated carrier signal with one of four possible phases. It can be implemented in several ways, with the most common being the **Gray-coded QPSK** transmitter.

**2.1. Serial-to-Parallel Conversion:**

The incoming serial binary data stream is first divided into groups of two bits (dibits). This is achieved using a serial-to-parallel converter.

*   **Example:** A serial stream `11010010` is converted into dibits: `11`, `01`, `00`, `10`.

**2.2. Dibit-to-Symbol Mapping (Gray Coding):**

Each dibit is then mapped to a unique phase shift. **Gray coding** is preferred because it ensures that adjacent symbols in the constellation diagram differ by only one bit. This significantly reduces the bit error rate (BER) in the presence of noise, as a single error in detection will likely result in a correctly received bit in the other pair.

| Dibit | Phase ($\theta$) | Symbol (In-phase, Quadrature) |
| :---- | :--------------- | :---------------------------- |
| 00    | 45°              | $(1/\sqrt{2}, 1/\sqrt{2})$    |
| 01    | 135°             | $(-1/\sqrt{2}, 1/\sqrt{2})$   |
| 11    | 225°             | $(-1/\sqrt{2}, -1/\sqrt{2})$  |
| 10    | 315°             | $(1/\sqrt{2}, -1/\sqrt{2})$   |

*   **Note:** The mapping can vary, but Gray coding is crucial for performance. The amplitudes are normalized to ensure constant envelope, typically represented as $A/\sqrt{2}$.

**2.3. Generation of Two Baseband Signals (I and Q):**

The mapping process results in two baseband signals:

*   **In-phase (I) signal:** Represents the cosine component.
*   **Quadrature (Q) signal:** Represents the sine component.

These signals are typically bipolar pulse trains.

*   **Example (cont.):**
    *   `11` $\rightarrow$ 225° $\rightarrow$ $(-1/\sqrt{2}, -1/\sqrt{2})$: $s_I(t) = -1/\sqrt{2}$, $s_Q(t) = -1/\sqrt{2}$
    *   `01` $\rightarrow$ 135° $\rightarrow$ $(-1/\sqrt{2}, 1/\sqrt{2})$: $s_I(t) = -1/\sqrt{2}$, $s_Q(t) = 1/\sqrt{2}$

**2.4. Modulator:**

The I and Q baseband signals are then used to modulate two carrier waves that are in phase quadrature with each other.

*   **Carrier Signal 1:** $c_I(t) = A \cos(2\pi f_c t)$
*   **Carrier Signal 2:** $c_Q(t) = A \sin(2\pi f_c t)$

The modulated signals are formed by multiplying the I and Q baseband signals with their respective carrier waves:

*   **I-channel modulated signal:** $s_I(t) \cdot c_I(t) = s_I(t) \cdot A \cos(2\pi f_c t)$
*   **Q-channel modulated signal:** $s_Q(t) \cdot c_Q(t) = s_Q(t) \cdot A \sin(2\pi f_c t)$

**2.5. Combiner:**

The two modulated signals are then summed to produce the final QPSK signal.

*   **QPSK Signal:** $s(t) = s_I(t) \cos(2\pi f_c t) - s_Q(t) \sin(2\pi f_c t)$

    *(Note: The negative sign in the Q-channel is convention; some texts might use a positive sign, leading to a phase shift difference of 180 degrees in the constellation but not affecting the overall scheme.)*

**Block Diagram of QPSK Transmitter:**

```
Serial Data Input ----> Serial-to-Parallel Converter ----> Dibit-to-Symbol Mapper ---->
                                                                      |
                                                                      |-----> I-Channel Modulator (Mixer with cos(2pi fc t)) ----> Summer ----> QPSK Output
                                                                      |
                                                                      |-----> Q-Channel Modulator (Mixer with sin(2pi fc t)) ---->
```

**Key Points to Remember (Transmitter):**

*   QPSK transmits 2 bits per symbol, doubling the data rate compared to BPSK for the same bandwidth.
*   Gray coding minimizes bit errors by ensuring adjacent symbols differ by only one bit.
*   The transmitter uses two quadrature carriers, modulated by the in-phase and quadrature components of the data.

**Reference:**

*   **Haykin & Moher (5th Ed., 2020):** Discusses digital modulation techniques, including PSK variants, and their implementation. Section on coherent detection and modulated signals.
*   **Lathi & Ding (5th Ed., 2018):** Provides detailed explanations of digital modulation schemes, including QPSK, with block diagrams and mathematical derivations. Chapters on passband modulation.

---

### **3. QPSK Receiver**

The QPSK receiver's goal is to recover the original binary data from the received QPSK signal. This typically involves coherent detection.

**3.1. Demodulator:**

The received QPSK signal is multiplied by two locally generated carrier signals that are coherent with the transmitted carriers.

*   **Received Signal:** $r(t) = s(t) + n(t) = [s_I(t) \cos(2\pi f_c t) - s_Q(t) \sin(2\pi f_c t)] + n(t)$
    *   $n(t)$ is additive white Gaussian noise (AWGN).

*   **Local Carrier 1:** $\cos(2\pi f_c t)$
*   **Local Carrier 2:** $\sin(2\pi f_c t)$

**3.2. Product Modulators (Mixers):**

The received signal is passed through two product modulators:

*   **I-channel output:**
    $y_I(t) = r(t) \cos(2\pi f_c t)$
    $y_I(t) = [s_I(t) \cos(2\pi f_c t) - s_Q(t) \sin(2\pi f_c t) + n(t)] \cos(2\pi f_c t)$
    $y_I(t) = s_I(t) \cos^2(2\pi f_c t) - s_Q(t) \sin(2\pi f_c t) \cos(2\pi f_c t) + n(t) \cos(2\pi f_c t)$
    Using trigonometric identities: $\cos^2(\theta) = \frac{1+\cos(2\theta)}{2}$ and $\sin(\theta)\cos(\theta) = \frac{\sin(2\theta)}{2}$
    $y_I(t) = s_I(t) \frac{1+\cos(4\pi f_c t)}{2} - s_Q(t) \frac{\sin(4\pi f_c t)}{2} + n(t) \cos(2\pi f_c t)$

*   **Q-channel output:**
    $y_Q(t) = r(t) \sin(2\pi f_c t)$
    $y_Q(t) = [s_I(t) \cos(2\pi f_c t) - s_Q(t) \sin(2\pi f_c t) + n(t)] \sin(2\pi f_c t)$
    $y_Q(t) = s_I(t) \cos(2\pi f_c t) \sin(2\pi f_c t) - s_Q(t) \sin^2(2\pi f_c t) + n(t) \sin(2\pi f_c t)$
    Using trigonometric identities: $\sin^2(\theta) = \frac{1-\cos(2\theta)}{2}$ and $\cos(\theta)\sin(\theta) = \frac{\sin(2\theta)}{2}$
    $y_Q(t) = s_I(t) \frac{\sin(4\pi f_c t)}{2} - s_Q(t) \frac{1-\cos(4\pi f_c t)}{2} + n(t) \sin(2\pi f_c t)$

**3.3. Low-Pass Filters (LPFs):**

The outputs of the product modulators contain terms at $2f_c$ (double the carrier frequency) and the original baseband signals. Low-pass filters are used to remove the double-frequency components, leaving the baseband I and Q components.

*   **Filtered I-channel output:** $\frac{1}{2} s_I(t)$
*   **Filtered Q-channel output:** $-\frac{1}{2} s_Q(t)$

    *(Note: The scaling factor of 1/2 can be compensated by adjusting the gain in the receiver or transmitter.)*

**3.4. Samplers and Decision Devices:**

At the end of each symbol interval, the outputs of the LPFs are sampled. These samples are then compared to decision thresholds to determine the transmitted dibit.

*   **I-channel decision:** The sampled value of $s_I(t)$ is compared to 0.
    *   If sampled $s_I(t) > 0$, the I-bit is 1.
    *   If sampled $s_I(t) < 0$, the I-bit is 0.

*   **Q-channel decision:** The sampled value of $s_Q(t)$ is compared to 0.
    *   If sampled $s_Q(t) > 0$, the Q-bit is 1.
    *   If sampled $s_Q(t) < 0$, the Q-bit is 0.

**3.5. Parallel-to-Serial Conversion:**

The detected I and Q bits are then recombined in a parallel-to-serial converter to reconstruct the original serial binary data stream.

**Block Diagram of QPSK Receiver:**

```
Received Signal ----> Product Modulator 1 (x cos(2pi fc t)) ----> LPF ----> Sampler ----> Decision Device ---->
                            |                                                ^                               |
                            |                                                |                               |----> Serial Data Output
                            |----> Product Modulator 2 (x sin(2pi fc t)) ----> LPF ----> Sampler ----> Decision Device ---->
```

**Key Points to Remember (Receiver):**

*   Coherent detection is used, requiring the receiver to generate carriers synchronized in phase and frequency with the transmitter's carriers.
*   Two product modulators and two low-pass filters are used to separate the I and Q components.
*   Decision devices compare sampled values against thresholds to reconstruct the bits.

**Reference:**

*   **Proakis & Salehi (6th Ed., 2020):** Provides comprehensive details on digital communication receivers, including coherent detection techniques for PSK and QAM.
*   **Kennedy (6th Ed., 2017):** Explains the practical implementation of receivers, including mixers, filters, and decision circuits.

---

### **4. Performance of QPSK**

**4.1. Bandwidth Efficiency:**

QPSK achieves higher bandwidth efficiency than BPSK.

*   **BPSK Bandwidth:** $B = 2R_b$ (where $R_b$ is the bit rate)
*   **QPSK Bandwidth:** $B = R_s = R_b/2$ (where $R_s$ is the symbol rate and $R_b$ is the bit rate). For example, to achieve a bit rate of $R_b$, QPSK only needs a bandwidth of $R_b/2$.
*   **Bandwidth Efficiency:** Bits/sec/Hz.
    *   BPSK: $R_b / (2R_b) = 0.5$ bits/sec/Hz
    *   QPSK: $R_b / (R_b/2) = 2$ bits/sec/Hz

This means QPSK is **four times more bandwidth-efficient** than BPSK.

**4.2. Error Probability:**

The probability of bit error for QPSK is the same as for BPSK, provided the transmitted power is the same per bit. However, QPSK transmits two bits per symbol, so the symbol error probability is more relevant.

Let $E_b$ be the energy per bit. For QPSK, the energy per symbol $E_s = 2 E_b$.

The probability of symbol error $P_s$ for QPSK is related to the probability of a symbol being in the wrong quadrant.

The probability of bit error $P_b$ for QPSK using Gray coding is approximately:

$P_b \approx Q(\sqrt{E_b / N_0})$

where:
*   $Q(\cdot)$ is the Q-function (related to the Gaussian probability density).
*   $E_b$ is the energy per bit.
*   $N_0/2$ is the two-sided power spectral density of the AWGN.

**Important Point:** While QPSK has the same bit error probability as BPSK for the same energy per bit, it achieves **twice the bit rate** for the same bandwidth and power.

**Reference:**

*   **Stark (1st ed., 2023):** Introduces error probability analysis for various modulation schemes, comparing their performance in AWGN.
*   **Haykin & Moher (5th Ed., 2020):** Discusses the trade-offs between bandwidth efficiency and error performance for digital modulation schemes.

---

### **5. Variations of QPSK**

*   **Offset QPSK (OQPSK):** The Q-channel signal is delayed by half a symbol period relative to the I-channel signal. This reduces the envelope fluctuations of the modulated signal, making it more suitable for non-linear power amplifiers.
*   **Differential QPSK (DQPSK):** Instead of absolute phase shifts, information is encoded in the *change* of phase from one symbol to the next. This allows for non-coherent detection, simplifying the receiver design as carrier synchronization is not strictly required.

**Reference:**

*   **Lathi & Ding (5th Ed., 2018):** Explains OQPSK and DQPSK as important variations of QPSK.

---

### **6. Learning Outcomes Checklist & Course Outcome Alignment**

*   **Understand the fundamental principles of QPSK:**
    *   Definition of QPSK, dibits, symbols, constellation diagram.
    *   How phase is used to represent data.
    *   **CO2 (K2)**
*   **Explain the QPSK transmitter:**
    *   Serial-to-parallel conversion.
    *   Dibit-to-symbol mapping (Gray coding).
    *   Generation of I and Q signals.
    *   Modulation and combining.
    *   Block diagram.
    *   **CO4 (K3)**
*   **Explain the QPSK receiver:**
    *   Coherent detection process.
    *   Product modulators and LPFs.
    *   Sampling and decision devices.
    *   Parallel-to-serial conversion.
    *   Block diagram.
    *   **CO4 (K3)**
*   **Analyze the performance of QPSK:**
    *   Bandwidth efficiency.
    *   Error probability ($P_b$).
    *   Comparison with BPSK.
    *   **CO3 (K3)** (Implicitly, as it's about transmission through a channel)
*   **Illustrate the principles of digital communication systems:**
    *   QPSK is a prime example of digital modulation.
    *   **CO1 (K2)**

---

### **7. Practice Questions and Answers**

**Question 1:** What is the primary advantage of QPSK over BPSK in terms of spectral efficiency?

**Answer:** QPSK is four times more spectrally efficient than BPSK. For a given bandwidth, QPSK can transmit twice the data rate compared to BPSK.

**Question 2:** Why is Gray coding typically used in QPSK modulation?

**Answer:** Gray coding ensures that adjacent symbols in the constellation diagram differ by only one bit. This minimizes the probability of bit errors when noise causes the receiver to misinterpret one symbol for an adjacent one.

**Question 3:** Describe the role of the low-pass filters in a QPSK receiver.

**Answer:** The low-pass filters in a QPSK receiver remove the double-frequency components ($2f_c$) generated by the product modulators, allowing the extraction of the original in-phase (I) and quadrature (Q) baseband signals.

**Question 4:** If a QPSK system transmits at a bit rate of 4 Mbps, what is the symbol rate and the minimum required bandwidth?

**Answer:**
*   Each symbol in QPSK carries 2 bits.
*   Symbol Rate ($R_s$) = Bit Rate ($R_b$) / Number of bits per symbol
*   $R_s = 4 \text{ Mbps} / 2 \text{ bits/symbol} = 2 \text{ Msymbols/sec}$
*   Minimum Bandwidth ($B$) is equal to the symbol rate for Nyquist criteria.
*   $B = R_s = 2 \text{ MHz}$

**Question 5:** A QPSK transmitter uses the following dibit-to-phase mapping:
00 -> 0°, 01 -> 90°, 10 -> 180°, 11 -> 270°.
If the input data stream is `10001101`, what are the phases transmitted in sequence?

**Answer:**
The input data stream `10001101` is grouped into dibits: `10`, `00`, `11`, `01`.
According to the given mapping:
*   `10` maps to 180°
*   `00` maps to 0°
*   `11` maps to 270°
*   `01` maps to 90°

So, the transmitted phases are: **180°, 0°, 270°, 90°**.

---

### **8. Important Points to Remember**

*   **QPSK Fundamentals:** 2 bits per symbol, 4 phases, Gray coding for reduced BER.
*   **Transmitter Structure:** Serial-to-parallel, dibit mapping, I/Q modulation, carrier quadrature.
*   **Receiver Structure:** Coherent detection, mixers, LPFs, decision making.
*   **Performance:** High bandwidth efficiency (2 bits/sec/Hz), similar error performance to BPSK for same energy per bit but at double the rate.
*   **Variations:** OQPSK (reduced envelope fluctuation), DQPSK (non-coherent detection).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
