---
title: "Sources, channels and receivers"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 3: Digital baseband communication:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bfa"
status: "completed"
scrapedAt: "2026-05-23T16:40:22.741Z"
---
# Module 3: Digital Baseband Communication: Sources, Channels, and Receivers

This module delves into the fundamental building blocks of digital baseband communication systems, exploring the journey of digital information from its origin to its reception. We will examine the characteristics of information sources, the challenges presented by communication channels, and the essential components of a receiver that reconstruct the original data.

## 3.1 Information Sources

An information source is anything that generates data that needs to be communicated. In digital communication, these sources produce discrete symbols or sequences of bits. The nature of the source significantly influences the design and efficiency of the communication system.

### 3.1.1 Types of Digital Sources

*   **Discrete Memoryless Sources (DMS):** These sources produce symbols independently of past symbols. Each symbol's occurrence probability is fixed and doesn't depend on previous symbols.
    *   **Definition:** A discrete random variable $X$ with a finite alphabet $\mathcal{A} = \{a_1, a_2, \dots, a_N\}$ and a probability mass function $P(X=a_i) = p_i$ for $i=1, \dots, N$. The sequence of outcomes $X_1, X_2, X_3, \dots$ are independent and identically distributed (i.i.d.).
    *   **Example:** A fair coin toss. The outcome is either Heads (H) or Tails (T), each with a probability of 0.5. The outcome of one toss does not affect the outcome of the next.
    *   **Reference:** Haykin & Mohre, Chapter 2 (Information Theory) – discusses entropy and source coding for DMS.

*   **Discrete Markov Sources:** The probability of the current symbol depends on the previous symbol(s). This introduces a dependency structure, which can be exploited for more efficient coding.
    *   **Definition:** A sequence of random variables $X_1, X_2, X_3, \dots$ such that the probability distribution of $X_n$ depends only on $X_{n-1}$ (for a first-order Markov chain). This is expressed as $P(X_n | X_1, \dots, X_{n-1}) = P(X_n | X_{n-1})$.
    *   **Example:** Text generation where the probability of the next letter depends on the current letter. For instance, after 'q', the probability of 'u' is very high.
    *   **Reference:** Kennedy, Davis & Prasanna, Chapter 2 (Digital Representation of Information) – might touch upon source coding for sources with memory.

### 3.1.2 Source Encoding

The process of converting source data into a binary format suitable for transmission. The goal is to represent the information efficiently, minimizing redundancy.

*   **Purpose:**
    *   Reduce the number of bits required to represent the information (data compression).
    *   Protect the information from errors during transmission (error correction coding).
*   **Key Concepts:**
    *   **Entropy (H):** The average amount of information produced by a source per symbol. It represents the theoretical lower bound on the average number of bits per symbol required for lossless compression.
        *   For a DMS: $H(X) = -\sum_{i=1}^N p_i \log_2 p_i$ bits/symbol.
    *   **Source Coding Theorem (Shannon's First Theorem):** States that for a DMS, it is possible to achieve an average code length arbitrarily close to the source entropy, but not less.
    *   **Types of Source Coding:**
        *   **Lossless Compression:** Aims to represent data with fewer bits without losing any information, allowing for perfect reconstruction of the original data.
            *   **Huffman Coding:** A variable-length coding technique that assigns shorter codewords to more frequent symbols and longer codewords to less frequent symbols.
                *   **Example:**
                    *   Source alphabet: {A, B, C, D}
                    *   Probabilities: P(A)=0.4, P(B)=0.3, P(C)=0.2, P(D)=0.1
                    *   Huffman codes might be: A: 0, B: 10, C: 110, D: 111
                *   **Reference:** Kennedy, Davis & Prasanna, Chapter 2; Tomasi, Chapter 2 (Source Encoding).
            *   **Lempel-Ziv (LZ) algorithms (LZ77, LZ78, LZW):** Dictionary-based compression techniques that replace repeating sequences of symbols with shorter codes.
        *   **Lossy Compression:** Achieves higher compression ratios by discarding some information that is deemed less important, leading to a loss of fidelity. This is common for multimedia data like audio and images.
            *   **Example:** JPEG for images, MP3 for audio.
            *   **Reference:** Tomasi, Chapter 2; Lathi & Ding, Chapter 2 (Data Compression).

## 3.2 Communication Channels

A communication channel is the medium through which information is transmitted from the source to the destination. Channels are imperfect and introduce various forms of distortion and noise.

### 3.2.1 Characteristics of Communication Channels

*   **Bandwidth:** The range of frequencies over which the channel can effectively transmit signals.
    *   **Definition:** The difference between the highest and lowest frequencies a channel can pass. Measured in Hertz (Hz).
    *   **Impact:** Limits the rate at which information can be transmitted.
    *   **Reference:** Kennedy, Davis & Prasanna, Chapter 1 (Introduction to Communications Systems).

*   **Noise:** Unwanted random signals that interfere with the transmitted signal.
    *   **Definition:** Any signal that degrades the quality of the transmitted information.
    *   **Types of Noise:**
        *   **Thermal Noise (Johnson-Nyquist noise):** Caused by the random thermal motion of electrons in conductors. It's present in all electronic components and is generally broadband.
            *   Power spectral density: $N_0/2$ W/Hz (where $N_0$ is the two-sided spectral density).
            *   Formula: $P_n = kTB$, where $k$ is Boltzmann's constant, $T$ is absolute temperature, and $B$ is bandwidth.
            *   **Reference:** Kennedy, Davis & Prasanna, Chapter 4 (Noise); Tomasi, Chapter 3 (Noise and Interference); Haykin & Mohre, Chapter 3 (Noise in Analog Communication Systems).
        *   **Shot Noise:** Occurs due to the discrete nature of charge carriers (electrons and holes) crossing a potential barrier (e.g., in a semiconductor junction).
        *   **Interference:** Unwanted signals from other communication systems or sources.
            *   **Co-channel interference:** Interference from signals using the same frequency.
            *   **Adjacent channel interference:** Interference from signals in nearby frequency bands.
        *   **Inter-symbol Interference (ISI):** Distortion of a signal where previous symbols interfere with the current symbol. This is a significant problem in digital communication and is caused by channel dispersion (non-uniform frequency response) and band-limiting filters.
            *   **Cause:** The impulse response of the channel is not an impulse, causing transmitted pulses to spread in time and overlap.
            *   **Mitigation:** Equalization techniques at the receiver.
            *   **Reference:** Tomasi, Chapter 9 (Digital Modulation Techniques); Lathi & Ding, Chapter 5 (Interference and Noise).

*   **Distortion:** Alteration of the signal's waveform without the addition of external noise.
    *   **Types of Distortion:**
        *   **Linear Distortion:** Occurs when different frequency components of the signal are attenuated or phase-shifted differently by the channel. This leads to changes in the signal's shape.
        *   **Non-linear Distortion:** Occurs when the channel's response is not linearly related to the input signal amplitude, leading to the generation of new frequencies not present in the original signal.

### 3.2.2 Channel Models

Mathematical representations of how a channel affects a signal.

*   **Additive White Gaussian Noise (AWGN) Channel:** A fundamental model that assumes the only impairment is additive noise that is white (uniform power spectral density) and Gaussian (normally distributed).
    *   **Equation:** $y(t) = s(t) + n(t)$, where $y(t)$ is the received signal, $s(t)$ is the transmitted signal, and $n(t)$ is the AWGN with zero mean and a constant power spectral density of $N_0/2$.
    *   **Importance:** Widely used for analysis and performance evaluation due to its mathematical tractability.
    *   **Reference:** Kennedy, Davis & Prasanna, Chapter 4; Tomasi, Chapter 3; Haykin & Mohre, Chapter 3.

*   **Band-limited Channel:** A channel that only allows frequencies within a specific range to pass. This introduces ISI if the signal bandwidth exceeds the channel bandwidth.
    *   **Nyquist Criterion:** A criterion for designing a communication system such that ISI is eliminated or minimized.
        *   **Ideal Nyquist Channel:** A channel with a rectangular frequency response, allowing a maximum symbol rate of $2B$, where $B$ is the bandwidth. This leads to ISI free transmission.
        *   **Practical Nyquist Channel:** Uses raised-cosine filters to achieve a compromise between bandwidth efficiency and spectral shaping, mitigating ISI.
            *   **Raised Cosine Filter:** A filter whose frequency response is described by:
                $$ H(f) = \begin{cases} 1, & |f| \le \frac{1-\alpha}{2B} \\ \frac{1}{2} \left[ 1 + \cos\left(\frac{\pi(|f|-B(1-\alpha)/2B)}{\alpha B}\right) \right], & \frac{1-\alpha}{2B} < |f| < \frac{1+\alpha}{2B} \\ 0, & |f| \ge \frac{1+\alpha}{2B} \end{cases} $$
                where $B$ is the bit rate and $\alpha$ is the roll-off factor ($0 \le \alpha \le 1$).
            *   **Reference:** Tomasi, Chapter 9; Taub & Schilling, Chapter 9 (Bandwidth Requirements and Spectral Characteristics).

*   **Fading Channels:** Channels where the signal strength fluctuates over time due to multipath propagation, Doppler shifts, or atmospheric conditions.
    *   **Types:** Flat fading (amplitude and phase vary equally across the signal bandwidth), frequency-selective fading (different frequency components experience different fading).
    *   **Reference:** Proakis & Salehi, Chapter 5 (Wireless Communication Channels); Lathi & Ding, Chapter 8 (Digital Communication in Fading Channels).

## 3.3 Digital Communication Receivers

The receiver's primary role is to reconstruct the original digital information from the distorted and noisy received signal. This involves several crucial processing steps.

### 3.3.1 Receiver Processing Blocks

A typical digital baseband receiver consists of the following blocks:

1.  **Input Band-pass Filter (BPF):**
    *   **Purpose:** To limit the bandwidth of the received signal to the range of frequencies that contain the desired information, thereby reducing out-of-band noise.
    *   **Design Considerations:** Should ideally match the transmitted signal's spectrum to maximize signal power and minimize noise. Often designed to satisfy the Nyquist criterion for ISI-free reception.
    *   **Reference:** Kennedy, Davis & Prasanna, Chapter 3 (Signal Analysis and Filtering); Tomasi, Chapter 9.

2.  **Demodulator/Detector:**
    *   **Purpose:** To extract the transmitted digital symbols from the received waveform. This involves making decisions about which symbol was sent based on the observed signal.
    *   **Key Concepts:**
        *   **Coherent Detection:** The receiver uses a locally generated carrier wave that is synchronized in frequency and phase with the carrier at the transmitter. This is generally more complex but offers better performance.
        *   **Non-coherent Detection:** The receiver does not require a locally generated carrier synchronized with the transmitter. Simpler but typically has lower performance than coherent detection.
    *   **Reference:** Tomasi, Chapter 9; Haykin & Mohre, Chapter 9 (Digital Modulation Schemes); Taub & Schilling, Chapter 9.

3.  **Decision Device:**
    *   **Purpose:** To decide which symbol was most likely transmitted based on the output of the demodulator.
    *   **Decision Criteria:**
        *   **Maximum Likelihood (ML) Detection:** Chooses the symbol that maximizes the probability of observing the received signal, assuming a known channel and noise model.
        *   **Maximum A Posteriori (MAP) Detection:** Chooses the symbol that maximizes the posterior probability of the symbol given the received signal. For equally probable symbols, ML and MAP are equivalent.
    *   **Example (for Binary Phase Shift Keying - BPSK):** If the received signal component is positive, decide '1'; if negative, decide '0'.
    *   **Reference:** Tomasi, Chapter 9; Lathi & Ding, Chapter 5.

4.  **Equalizer (Optional but often necessary):**
    *   **Purpose:** To counteract the effects of ISI introduced by the channel and the transmit/receive filters.
    *   **Types:**
        *   **Linear Equalizers:** Simple to implement (e.g., Transversal equalizer).
        *   **Non-linear Equalizers:** Offer better performance, especially in severe ISI conditions (e.g., Decision Feedback Equalizer - DFE).
    *   **Reference:** Tomasi, Chapter 9; Proakis & Salehi, Chapter 4 (Equalization).

5.  **Clock Recovery/Timing Synchronization:**
    *   **Purpose:** To determine the optimal sampling instants for the received signal to make the symbol decisions. This is crucial because the receiver needs to sample the signal when the ISI is minimal.
    *   **Methods:** Often achieved using a timing recovery loop (e.g., Costas loop, Phase-Locked Loop - PLL).
    *   **Reference:** Tomasi, Chapter 9; Lathi & Ding, Chapter 5.

6.  **Error Detection and Correction (Optional but common):**
    *   **Purpose:** To detect and potentially correct errors that occurred during transmission, improving the reliability of the received data.
    *   **Techniques:** Parity checks, Cyclic Redundancy Checks (CRC), Forward Error Correction (FEC) codes (e.g., Hamming codes, Convolutional codes, Turbo codes).
    *   **Reference:** Couch, Chapter 8 (Error Detection and Correction); Lathi & Ding, Chapter 7 (Error Control Coding).

### 3.3.2 Performance Metrics

*   **Bit Error Rate (BER):** The ratio of the number of erroneous bits to the total number of bits transmitted.
    *   **Definition:** $BER = \frac{\text{Number of bit errors}}{\text{Total number of bits transmitted}}$.
    *   **Goal:** Minimize BER.
    *   **Reference:** Kennedy, Davis & Prasanna, Chapter 4; Tomasi, Chapter 9.

*   **Signal-to-Noise Ratio (SNR):** A measure of the power of the desired signal relative to the power of the background noise.
    *   **Definition:** $SNR = \frac{\text{Signal Power}}{\text{Noise Power}}$. Often expressed in dB.
    *   **Impact:** Higher SNR generally leads to lower BER.
    *   **Reference:** Kennedy, Davis & Prasanna, Chapter 4; Tomasi, Chapter 3.

*   **Bandwidth Efficiency:** The rate at which data can be transmitted over a given bandwidth.
    *   **Definition:** Bits per second per Hertz (bps/Hz).
    *   **Equation:** $\eta = \frac{R_b}{B}$, where $R_b$ is the bit rate and $B$ is the bandwidth.
    *   **Reference:** Tomasi, Chapter 9; Lathi & Ding, Chapter 4.

### 3.3.3 Examples of Digital Receivers

*   **Baseband Receiver for On-Off Keying (OOK) / Amplitude Shift Keying (ASK):**
    *   Receives pulses that represent '1' (amplitude A) and absence of pulse for '0' (amplitude 0).
    *   Uses a matched filter or integrate-and-dump filter to maximize the SNR at the sampling instant.
    *   Compares the sampled output to a threshold to decide on the symbol.
    *   **Reference:** Tomasi, Chapter 9; Taub & Schilling, Chapter 8.

*   **Baseband Receiver for Binary Phase Shift Keying (BPSK):**
    *   Transmits '1' as a carrier phase of 0 radians and '0' as a carrier phase of $\pi$ radians.
    *   Requires coherent detection, often using a Costas loop for carrier recovery.
    *   Samples the demodulated signal and makes a decision based on the sign of the output.
    *   **Reference:** Tomasi, Chapter 9; Haykin & Mohre, Chapter 9.

---

## Practice Questions and Exercises

**Question 1 (K2, K3):**
Define entropy for a discrete memoryless source. Calculate the entropy of a source that transmits symbols {A, B, C} with probabilities P(A)=0.5, P(B)=0.25, P(C)=0.25. If each symbol is represented by a fixed-length code, how many bits per symbol would be required?

**Answer 1:**
Entropy ($H$) is the average information content per symbol from a source. For a discrete memoryless source (DMS) with alphabet $\mathcal{A} = \{a_1, a_2, \dots, a_N\}$ and probabilities $P(a_i) = p_i$, the entropy is given by:
$H(X) = -\sum_{i=1}^N p_i \log_2 p_i$

For the given source:
$H(X) = -(0.5 \log_2 0.5 + 0.25 \log_2 0.25 + 0.25 \log_2 0.25)$
$H(X) = -(0.5 \times -1 + 0.25 \times -2 + 0.25 \times -2)$
$H(X) = -(-0.5 - 0.5 - 0.5) = 1.5$ bits/symbol

If each symbol is represented by a fixed-length code, and there are 3 symbols, you would need $\lceil \log_2 3 \rceil = 2$ bits per symbol to represent all symbols uniquely (e.g., A=00, B=01, C=10). This is more than the entropy, indicating redundancy in the fixed-length code.

**Question 2 (K2):**
What is the primary purpose of a matched filter in a digital communication receiver?

**Answer 2:**
The primary purpose of a matched filter is to maximize the output signal-to-noise ratio (SNR) at the sampling instant for a known signal shape corrupted by additive white Gaussian noise (AWGN). It does this by correlating the received signal with a template of the expected transmitted pulse shape.

**Question 3 (K2, K3):**
Explain the concept of Inter-Symbol Interference (ISI). What are the common causes and how can it be mitigated?

**Answer 3:**
Inter-Symbol Interference (ISI) occurs in digital communication when the pulse representing a symbol spreads in time and overlaps with the pulses representing adjacent symbols. This overlap corrupts the signal, making it difficult for the receiver to correctly distinguish between different symbols.

*   **Causes:**
    *   **Channel Dispersion:** The channel's frequency response is not flat, causing different frequency components of the signal to be delayed or attenuated differently.
    *   **Band-limiting Filters:** Both transmit and receive filters are often band-limited to conserve bandwidth, which causes the pulses to spread in time.
*   **Mitigation:**
    *   **Nyquist Criterion:** Designing transmit and receive filters such that the overall system response satisfies the Nyquist criterion, which ensures zero ISI at the sampling instants. This is often achieved using raised-cosine filters.
    *   **Equalization:** Using equalizers at the receiver to counteract the distortion caused by the channel and filters. Common types include transversal equalizers and Decision Feedback Equalizers (DFE).
    *   **Sufficient Symbol Spacing:** Increasing the time between symbols (reducing the bit rate) can reduce the likelihood of overlap, but this reduces bandwidth efficiency.

**Question 4 (K2):**
Briefly describe the role of a decision device in a digital receiver.

**Answer 4:**
The decision device is the final stage in a digital receiver that determines which symbol was most likely transmitted. It typically takes the output of the demodulator (which has been filtered and potentially equalized) and compares it to one or more thresholds. Based on this comparison, it outputs the most probable transmitted symbol (e.g., '0' or '1' for binary systems).

**Question 5 (K2, K3):**
Describe the Additive White Gaussian Noise (AWGN) channel model. What are its key assumptions, and why is it important in communication systems analysis?

**Answer 5:**
The Additive White Gaussian Noise (AWGN) channel model is a fundamental and widely used model for communication channels. Its key assumptions are:

1.  **Additive:** The noise is added to the transmitted signal. The received signal is the sum of the transmitted signal and the noise. $y(t) = s(t) + n(t)$.
2.  **White:** The noise has a uniform power spectral density across all frequencies. This means that all frequencies are equally likely to be present in the noise.
3.  **Gaussian:** The noise is characterized by a Gaussian (normal) probability distribution. This implies that the noise samples are random variables with a bell-shaped probability density function. The noise is often assumed to have zero mean.

**Importance:**
The AWGN channel model is important because:
*   **Mathematical Tractability:** The Gaussian distribution and uniform spectrum of the noise make the mathematical analysis of communication system performance (like BER calculations) significantly easier.
*   **Foundation for Advanced Models:** It serves as a baseline for understanding more complex channel impairments. Many advanced channel models build upon the AWGN assumptions by adding other effects like fading or interference.
*   **Performance Benchmarking:** It allows engineers to establish theoretical performance limits and compare the performance of real-world systems against this ideal scenario.

---

## Important Points to Remember

*   **Source coding** aims to compress data efficiently, with **entropy** representing the theoretical limit for lossless compression.
*   Communication **channels** are imperfect, introducing **noise** (like thermal noise) and **distortion** (like ISI).
*   **AWGN** is a foundational channel model due to its mathematical simplicity and role as a performance benchmark.
*   **ISI** is a critical impairment in digital baseband communication, primarily caused by channel dispersion and filtering, and is mitigated by **Nyquist filtering** and **equalization**.
*   A digital receiver's core functions include **filtering**, **demodulation**, **decision making**, **synchronization**, and often **error control**.
*   **BER** and **SNR** are crucial performance metrics for digital communication systems.
*   **Bandwidth efficiency** measures how effectively the available bandwidth is utilized.

---

This module provides a foundational understanding of the components involved in digital baseband communication. The principles discussed here are essential for designing and analyzing more complex digital communication systems, including modulated systems covered in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
