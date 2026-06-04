---
title: "Quadrature amplitude modulation."
subject: "ELECTRONIC COMMUNICATION"
module: "Module 4: Digital bandpass communication :"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c0e"
status: "completed"
scrapedAt: "2026-05-23T16:40:52.557Z"
---
# Module 4: Digital Bandpass Communication - Quadrature Amplitude Modulation (QAM)

## 1. Introduction to QAM

Quadrature Amplitude Modulation (QAM) is a digital modulation scheme that transmits data by modulating both the **amplitude** and the **phase** of a carrier wave. It's a spectrally efficient modulation technique widely used in modern digital communication systems, including Wi-Fi, cable modems, and digital television broadcasting.

**Key Concept:** QAM combines Amplitude Shift Keying (ASK) and Phase Shift Keying (PSK) to achieve higher data rates within a given bandwidth.

**Learning Outcome Alignment:**
*   **CO3: Understand the various processing blocks of a digital communication system.** (QAM is a core digital modulation technique).
*   **CO4: Apply the knowledge of digital modulation in digital transmission.** (QAM is a practical application of digital modulation).

## 2. Principles of QAM

In QAM, the digital data is mapped into a set of signal points in a two-dimensional signal space. This space is defined by two orthogonal carriers: an in-phase (I) component and a quadrature (Q) component.

**2.1. In-phase (I) and Quadrature (Q) Components:**

*   The carrier signal can be represented as $s(t) = A \cos(\omega_c t)$.
*   In QAM, this carrier is modulated by two independent data streams, one modulating the amplitude of the original carrier (in-phase component) and the other modulating the amplitude of a carrier shifted by 90 degrees (quadrature component).
*   The transmitted signal can be expressed as:
    $s(t) = I(t) \cos(\omega_c t) - Q(t) \sin(\omega_c t)$
    where:
    *   $I(t)$ represents the in-phase component of the modulated signal.
    *   $Q(t)$ represents the quadrature component of the modulated signal.
    *   $\cos(\omega_c t)$ is the carrier wave.
    *   $\sin(\omega_c t)$ is the quadrature carrier wave (90-degree phase shift).

**2.2. Constellation Diagrams:**

*   A **constellation diagram** is a graphical representation of the QAM signal. It plots the possible values of the I and Q components at the sampling instants. Each point in the constellation represents a unique symbol, and the number of points determines the number of bits per symbol.
*   **Example:** A 4-QAM (also known as Quadrature Phase Shift Keying or QPSK) constellation has 4 points, typically arranged in a square, representing 2 bits per symbol.

    *   **Symbol 1 (00):** I = +A, Q = +A
    *   **Symbol 2 (01):** I = -A, Q = +A
    *   **Symbol 3 (11):** I = -A, Q = -A
    *   **Symbol 4 (10):** I = +A, Q = -A

    *   *(Visual representation of a square constellation with points at (+A,+A), (-A,+A), (-A,-A), (+A,-A))*

*   **Higher Order QAM:** Increasing the number of points in the constellation allows for more bits per symbol, leading to higher data rates. Common forms include 16-QAM, 64-QAM, and 256-QAM.

    *   **16-QAM:** 16 points, representing 4 bits per symbol (2 bits for I, 2 bits for Q). The constellation is typically arranged in a square grid with varying amplitude levels.
    *   **64-QAM:** 64 points, representing 6 bits per symbol (3 bits for I, 3 bits for Q).
    *   **256-QAM:** 256 points, representing 8 bits per symbol (4 bits for I, 4 bits for Q).

**2.3. Amplitude and Phase Control:**

*   In QAM, the amplitude of the transmitted signal is varied to select one of the constellation points. The phase is also implicitly varied by the combination of I and Q components.
*   The amplitude of a specific symbol $k$ is given by:
    $A_k = \sqrt{I_k^2 + Q_k^2}$
    where $I_k$ and $Q_k$ are the amplitude levels of the in-phase and quadrature components for symbol $k$.

**Textbook Reference:**
*   **Kennedy's Electronic Communication Systems:** Chapter 12 discusses digital modulation techniques, including QAM, and its constellation diagrams.
*   **Tomasi's Electronic Communication Systems:** Chapter 13 covers digital modulation and demodulation, with detailed explanations of QAM.
*   **Haykin & Mohre's Communication Systems:** Chapter 4 provides a thorough treatment of digital modulation schemes, including QAM, with mathematical derivations and examples.

## 3. QAM Modulator

The QAM modulator is responsible for converting the digital data stream into an analog modulated signal.

**3.1. Block Diagram:**

```
Digital Data Input --> Serial-to-Parallel Converter -->
                        (I-channel Data) --> Amplitude Modulator (I) --> Summing Junction --> Output
                        (Q-channel Data) --> Amplitude Modulator (Q) --> Quadrature Carrier -->
```

**Explanation of Blocks:**

1.  **Serial-to-Parallel Converter:** The incoming serial data stream is split into two parallel streams: one for the in-phase (I) channel and one for the quadrature (Q) channel. For an $M$-QAM system, if each symbol represents $k$ bits, then $k/2$ bits are allocated to the I channel and $k/2$ bits to the Q channel.
2.  **Data Mapping and Amplitude Control:** The digital values for the I and Q channels are mapped to specific amplitude levels according to the chosen QAM constellation. This can be achieved using digital-to-analog converters (DACs) and variable gain amplifiers (VGAs) or lookup tables.
3.  **Carrier Generation:** Two carrier signals are generated: a cosine wave for the I channel and a sine wave (quadrature carrier) for the Q channel. These carriers have the same frequency $\omega_c$ and amplitude.
4.  **Amplitude Modulation:** The I-channel data amplitude levels modulate the cosine carrier, and the Q-channel data amplitude levels modulate the sine carrier.
5.  **Summing Junction:** The modulated I and Q signals are summed to produce the final QAM output signal.

**Mathematical Representation of Modulation:**

If the digital data for the I channel is represented by $a_I(t)$ and for the Q channel by $a_Q(t)$, where these are piecewise constant functions representing the amplitude levels for each symbol duration, then the modulated signal is:

$s(t) = a_I(t) \cos(\omega_c t) - a_Q(t) \sin(\omega_c t)$

**Textbook Reference:**
*   **Taub & Schilling's Principles of Communication Systems:** Chapter 9 covers digital modulation techniques, including the implementation of QAM modulators.
*   **Proakis & Salehi's Communication System Engineering:** Chapter 4 discusses digital modulation schemes and their hardware implementation.

## 4. QAM Demodulator

The QAM demodulator reconstructs the original digital data from the received QAM signal.

**4.1. Block Diagram:**

```
Received QAM Signal --> Coherent Detector (I-channel) -->
                        Low-pass Filter (LPF) --> Decision Device --> Output (I-channel Data)
Received QAM Signal --> Coherent Detector (Q-channel) -->
                        Low-pass Filter (LPF) --> Decision Device --> Output (Q-channel Data)
```

**Explanation of Blocks:**

1.  **Coherent Detector:** The received QAM signal is multiplied by two coherent carrier signals:
    *   $\cos(\omega_c t)$ (for the I-channel detection)
    *   $\sin(\omega_c t)$ (for the Q-channel detection)

    The output of the I-channel detector is:
    $r_I(t) = s(t) \cos(\omega_c t) = [I(t) \cos(\omega_c t) - Q(t) \sin(\omega_c t)] \cos(\omega_c t)$
    $r_I(t) = I(t) \cos^2(\omega_c t) - Q(t) \sin(\omega_c t) \cos(\omega_c t)$
    Using trigonometric identities: $\cos^2(\omega_c t) = \frac{1 + \cos(2\omega_c t)}{2}$ and $\sin(\omega_c t) \cos(\omega_c t) = \frac{\sin(2\omega_c t)}{2}$
    $r_I(t) = I(t) \left(\frac{1 + \cos(2\omega_c t)}{2}\right) - Q(t) \left(\frac{\sin(2\omega_c t)}{2}\right)$
    $r_I(t) = \frac{I(t)}{2} + \frac{I(t)}{2} \cos(2\omega_c t) - \frac{Q(t)}{2} \sin(2\omega_c t)$

    The output of the Q-channel detector is:
    $r_Q(t) = s(t) \sin(\omega_c t) = [I(t) \cos(\omega_c t) - Q(t) \sin(\omega_c t)] \sin(\omega_c t)$
    $r_Q(t) = I(t) \cos(\omega_c t) \sin(\omega_c t) - Q(t) \sin^2(\omega_c t)$
    Using trigonometric identities: $\sin^2(\omega_c t) = \frac{1 - \cos(2\omega_c t)}{2}$ and $\cos(\omega_c t) \sin(\omega_c t) = \frac{\sin(2\omega_c t)}{2}$
    $r_Q(t) = I(t) \left(\frac{\sin(2\omega_c t)}{2}\right) - Q(t) \left(\frac{1 - \cos(2\omega_c t)}{2}\right)$
    $r_Q(t) = \frac{I(t)}{2} - \frac{Q(t)}{2} + \frac{I(t)}{2} \sin(2\omega_c t) + \frac{Q(t)}{2} \cos(2\omega_c t)$

2.  **Low-Pass Filters (LPFs):** The outputs of the coherent detectors contain both the desired baseband components (proportional to $I(t)$ and $Q(t)$) and double-frequency terms ($2\omega_c$). The LPFs remove these high-frequency components, leaving:
    *   Output of I-LPF $\approx \frac{I(t)}{2}$
    *   Output of Q-LPF $\approx -\frac{Q(t)}{2}$ (Note: Depending on the sine wave phase, it might be $+Q(t)/2$ or $-Q(t)/2$). For the standard formulation $s(t) = I(t) \cos(\omega_c t) - Q(t) \sin(\omega_c t)$, multiplying by $\sin(\omega_c t)$ yields $-Q(t) \sin^2(\omega_c t)$, which after LPF results in $-Q(t)/2$.

3.  **Decision Device:** The outputs of the LPFs are sampled at the symbol timing instants. The sampled values are then compared to decision thresholds to determine which constellation point was transmitted. This process reconstructs the original digital bits for both the I and Q channels.
    *   The decision device essentially finds the closest point in the constellation diagram to the detected sample.

4.  **Parallel-to-Serial Converter:** The reconstructed I and Q channel bits are reassembled into a serial data stream.

**Textbook Reference:**
*   **Tomasi's Electronic Communication Systems:** Chapter 13 provides a detailed explanation of QAM demodulation, including the coherent detection process.
*   **Couch's Digital and Analog Communication Systems:** Chapter 9 discusses digital bandpass modulation and demodulation, offering insights into QAM receiver design.

## 5. Performance of QAM

The performance of QAM is typically evaluated in terms of:

*   **Bit Error Rate (BER):** The probability of a transmitted bit being received incorrectly.
*   **Bandwidth Efficiency:** The number of bits transmitted per second per Hertz of bandwidth.
*   **Power Efficiency:** The amount of power required to achieve a certain BER.

**5.1. Bandwidth Efficiency:**

*   For an $M$-QAM system, where $M = 2^k$, there are $k$ bits per symbol.
*   The symbol rate is $R_s$.
*   The bit rate is $R_b = k \times R_s$.
*   The bandwidth required for a QAM signal is typically $B \approx R_s$.
*   Therefore, the bandwidth efficiency is $\eta = \frac{R_b}{B} = \frac{k \times R_s}{R_s} = k$ bits/sec/Hz.

    *   **Example:** 16-QAM has $k=4$, so its bandwidth efficiency is 4 bits/sec/Hz. 256-QAM has $k=8$, so its bandwidth efficiency is 8 bits/sec/Hz.

**5.2. Error Probability (BER):**

*   The BER of QAM is affected by the number of constellation points and the distance between them.
*   **Higher order QAM (more points) leads to higher bandwidth efficiency but also lower power efficiency and higher BER** for the same transmit power and noise level, as the constellation points are closer together.
*   The minimum distance between constellation points is a critical factor.
*   For square $M$-QAM, the average energy per symbol $E_s$ is related to the noise variance $\sigma^2$. The BER is a function of the ratio of minimum distance to noise power spectral density.

**5.3. Trade-offs:**

*   **Bandwidth vs. Power:** There's a fundamental trade-off. To increase bandwidth efficiency (by using higher order QAM), you generally need more transmit power to achieve the same BER, or you accept a higher BER for the same power.
*   **Complexity:** Higher order QAM requires more complex modulators and demodulators.

**Textbook Reference:**
*   **Lathi & Ding's Modern Digital and Analog Communication Systems:** Chapter 8 discusses the performance of digital modulation schemes, including BER analysis for QAM under AWGN channels.
*   **Ziemer & Tranter's Principles of Communications:** Chapter 7 covers digital modulation and the performance metrics like BER for various schemes.

## 6. Types of QAM

While the fundamental principle remains the same, QAM constellations can be structured differently.

**6.1. Square QAM:**

*   The most common type, where constellation points are arranged in a square grid.
*   For $M$-QAM where $M$ is a perfect square ($M = N^2$), there are $N$ amplitude levels for both I and Q components.
*   **Example:** 16-QAM (N=4), 64-QAM (N=8).

**6.2. Cross-Constellation QAM:**

*   In some cases, for higher-order QAM, constellations might not be perfectly square to optimize for power efficiency by placing points at varying distances from the origin.

**Important Point to Remember:** Higher order QAM (e.g., 256-QAM, 1024-QAM) offers significantly higher data rates but requires cleaner channels and more sophisticated signal processing to achieve acceptable BER.

## 7. Applications of QAM

*   **Wi-Fi:** Wi-Fi standards (like 802.11n, 802.11ac, 802.11ax) extensively use QAM (e.g., 64-QAM, 256-QAM, 1024-QAM) for high-speed wireless data transmission.
*   **Cable Modems (DOCSIS):** QAM is used in cable modems to transmit data over coaxial cables, enabling high-speed internet access. 64-QAM and 256-QAM are common.
*   **Digital Television Broadcasting (DVB-C, DVB-T2):** Used for transmitting digital video signals.
*   **DSL (Digital Subscriber Line):** Some DSL technologies utilize QAM.
*   **Mobile Communications:** While other techniques are dominant, QAM variants are also employed in some mobile communication systems.

**Learning Outcome Alignment:**
*   **CO4: Apply the knowledge of digital modulation in digital transmission.** (Applications demonstrate the practical use of QAM).

## 8. Practice Questions and Answers

**Question 1:** What is the primary advantage of using QAM over simple ASK or PSK?
    a) Lower bandwidth efficiency
    b) Improved error performance in noisy channels
    c) Combined amplitude and phase modulation for higher data rates
    d) Simpler modulator and demodulator design

    **Answer:** c) Combined amplitude and phase modulation for higher data rates

**Question 2:** A 64-QAM system transmits 6 bits per symbol. If the symbol rate is 1 Mega-symbols per second (Msps), what is the total bit rate?
    a) 1 Mbps
    b) 6 Mbps
    c) 64 Mbps
    d) 60 Mbps

    **Answer:** c) 64 Mbps (Bit rate = bits/symbol * symbol rate = 6 * 1 Msps = 6 Mbps. *Correction: 6 bits/symbol * 1 Msps = 6 Mbps. The question asks for total bit rate. Let's re-evaluate. The symbol rate is 1 Msps. If each symbol carries 6 bits, then the bit rate is 6 Mbps. However, typically, the question implies a higher data rate. Let's assume the symbol rate is 1 Msps means 1 Million symbols per second. Then the bit rate is 6 bits/symbol * 1,000,000 symbols/second = 6,000,000 bits/second = 6 Mbps. Let's re-read the options. Hmm, perhaps there's a misunderstanding of the question or options. A symbol rate of 1 Msps usually leads to a bit rate higher than the symbol rate for M-QAM where M > 2. Let's assume the question meant to say 1 Mega-symbols per second and the answer choices are more representative of higher data rates. If we consider a symbol rate of 10 Msps for 64-QAM (6 bits/symbol), the bit rate would be 60 Mbps. If the symbol rate is 1 Msps, then the bit rate is indeed 6 Mbps. Let me re-frame this to be clear.*)

    **Revised Question 2:** A 64-QAM system transmits 6 bits per symbol. If the symbol rate is 10 Mega-symbols per second (Msps), what is the total bit rate?
    a) 10 Mbps
    b) 60 Mbps
    c) 640 Mbps
    d) 6 Mbps

    **Answer:** b) 60 Mbps (Bit rate = bits/symbol * symbol rate = 6 * 10 Msps = 60 Mbps)

**Question 3:** In a QAM modulator, what are the two carrier signals used?
    a) Two carriers of the same frequency and phase
    b) Two carriers of the same frequency but 90 degrees out of phase
    c) Two carriers of different frequencies
    d) One carrier and one baseband signal

    **Answer:** b) Two carriers of the same frequency but 90 degrees out of phase (in-phase and quadrature carriers)

**Question 4:** What does a constellation diagram visually represent for QAM?
    a) The frequency spectrum of the transmitted signal
    b) The time-domain waveform of the modulated signal
    c) The possible combinations of amplitude and phase for each symbol
    d) The error rate of the communication system

    **Answer:** c) The possible combinations of amplitude and phase for each symbol

**Question 5:** What is the bandwidth efficiency of a 256-QAM system?
    a) 4 bits/sec/Hz
    b) 8 bits/sec/Hz
    c) 16 bits/sec/Hz
    d) 256 bits/sec/Hz

    **Answer:** b) 8 bits/sec/Hz (256 = 2^8, so 8 bits per symbol)

**Practice Exercise:**

Consider a communication system that needs to transmit data at a rate of 24 Mbps over a channel with a bandwidth of 3 MHz.

**(a)** What is the minimum required bandwidth efficiency (in bits/sec/Hz) to achieve this data rate?

**(b)** Can this data rate be achieved using 16-QAM? Justify your answer.

**(c)** If the system uses 64-QAM, how many bits are transmitted per symbol? What is the symbol rate required to achieve 24 Mbps?

**Answers to Exercise:**

**(a)** Minimum required bandwidth efficiency = Data Rate / Bandwidth = 24 Mbps / 3 MHz = $24 \times 10^6$ bits/sec / $3 \times 10^6$ Hz = 8 bits/sec/Hz.

**(b)** 16-QAM has a bandwidth efficiency of 4 bits/sec/Hz (since 16 = 2^4, so 4 bits per symbol). To achieve 24 Mbps with 16-QAM, the required bandwidth would be 24 Mbps / 4 bits/sec/Hz = 6 MHz. Since the channel bandwidth is only 3 MHz, 16-QAM is not sufficient.

**(c)** 64-QAM transmits 6 bits per symbol (since 64 = 2^6).
    To achieve a data rate of 24 Mbps with 6 bits per symbol, the symbol rate required is:
    Symbol Rate = Data Rate / Bits per Symbol = 24 Mbps / 6 bits/symbol = 4 Mega-symbols per second (Msps).

## 9. Important Points to Remember

*   **QAM combines ASK and PSK.**
*   **Constellation diagram** is key to understanding QAM.
*   **I and Q channels** are orthogonal and carry independent data components.
*   **Bandwidth efficiency** increases with the number of constellation points (higher order QAM).
*   **Higher order QAM requires more power or results in a higher BER** for a given noise level.
*   **QAM is widely used** in modern wireless and wired communication systems.
*   **Coherent detection** is essential for demodulating QAM signals.

This set of notes provides a comprehensive overview of Quadrature Amplitude Modulation, aligning with the specified learning and course outcomes. Remember to consult the provided textbooks for more in-depth mathematical derivations and detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
