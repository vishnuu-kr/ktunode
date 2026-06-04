---
title: "Performance of Waveform Coding Using PCM"
subject: "COMMUNICATION LAB I"
module: "Module 3: Performance of Waveform Coding Using PCM"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecad"
status: "completed"
scrapedAt: "2026-05-23T17:54:18.430Z"
---
# COMMUNICATION LAB I: Module 3 - Performance of Waveform Coding Using PCM

## Introduction to Waveform Coding and PCM

Waveform coding is a fundamental process in digital communication systems that aims to convert an analog signal (like voice or audio) into a digital representation. Pulse Code Modulation (PCM) is the most widely used technique for waveform coding. It involves three primary steps: sampling, quantization, and encoding. Understanding the performance of PCM is crucial for designing efficient and reliable communication systems.

## Learning Outcomes Covered:

*   **Understanding PCM Basics:** Grasp the fundamental principles of sampling, quantization, and encoding in PCM.
*   **Quantization Noise:** Analyze the sources and impact of quantization noise on PCM system performance.
*   **Performance Metrics:** Define and calculate key performance metrics like Signal-to-Quantization Noise Ratio (SQNR) and Signal-to-Noise Ratio (SNR).
*   **Quantization Techniques:** Explore different quantization techniques (uniform vs. non-uniform) and their advantages/disadvantages.
*   **Companding:** Understand the concept and benefits of companding (μ-law and A-law) in PCM systems.
*   **Bit Rate and Bandwidth:** Relate the bit rate of a PCM system to its sampling rate and the number of quantization levels.
*   **Error Performance:** Discuss how channel errors affect PCM signal quality and introduce distortion.
*   **Comparison with Analog Systems:** Briefly compare the performance of PCM with analog modulation schemes.

## Key Concepts and Definitions

### 1. Sampling

*   **Definition:** Sampling is the process of converting a continuous-time analog signal into a discrete-time signal by taking samples at regular intervals.
*   **Nyquist-Shannon Sampling Theorem:** For a band-limited signal $x(t)$ with bandwidth $B$, to be perfectly reconstructed from its samples, the sampling frequency $f_s$ must be greater than or equal to twice the maximum frequency $f_{max}$ in the signal.
    *   $f_s \ge 2 f_{max}$ (Nyquist rate)
*   **Aliasing:** If the sampling frequency is less than the Nyquist rate, higher frequencies in the original signal can masquerade as lower frequencies, leading to distortion. This is prevented by using an **anti-aliasing filter** before sampling.

### 2. Quantization

*   **Definition:** Quantization is the process of approximating the continuous range of sample values with a finite set of discrete levels. This is an inherently lossy process, introducing **quantization error** or **quantization noise**.
*   **Quantization Error ($e_q$)**: The difference between the original sample value and its quantized level.
    *   $e_q(n) = x_q(n) - x(n)$, where $x_q(n)$ is the quantized sample and $x(n)$ is the original sample.
*   **Uniform Quantization:** The quantization levels are equally spaced.
    *   The step size, $ \Delta $, is constant.
    *   The range of the input signal is divided into $L$ equal intervals.
*   **Non-uniform Quantization:** The quantization levels are not equally spaced. They are more densely packed in regions where the signal is more likely to occur, and more sparsely packed in regions where the signal is less likely to occur. This is used to improve the performance for signals with non-uniform amplitude distributions.

### 3. Encoding

*   **Definition:** Encoding is the process of assigning a unique binary codeword to each quantized level.
*   **Number of Quantization Levels ($L$)**: Determines the number of bits required per sample.
    *   $L = 2^n$, where $n$ is the number of bits per sample.
*   **Bit Rate ($R$)**: The rate at which binary digits are transmitted.
    *   $R = n \times f_s$ (bits per second)

## Performance Metrics of PCM

### 1. Quantization Noise and Signal-to-Quantization Noise Ratio (SQNR)

*   **Quantization Noise:** The error introduced during the quantization process. It can be modeled as additive noise with a uniform distribution over the range $[-\Delta/2, \Delta/2]$.
*   **Mean Squared Quantization Error (MSQE):** The average power of the quantization noise. For uniform quantization with a step size $\Delta$, and assuming the input signal is uniformly distributed over the range $[-V_{max}, V_{max}]$, the MSQE is:
    *   $E[e_q^2] = \frac{\Delta^2}{12}$
    *   This approximation holds when the signal amplitude is within the quantization range and the number of levels is large.
*   **Signal Power ($P_s$):** The average power of the original analog signal. For a sinusoidal signal $A \sin(2\pi f_0 t)$, its power is $A^2/2$. In general, it's the mean square value of the signal.
*   **Signal-to-Quantization Noise Ratio (SQNR):** The ratio of the signal power to the quantization noise power. It's a measure of the quality of the quantized signal.
    *   $SQNR = \frac{P_s}{E[e_q^2]}$

#### SQNR for Uniform Quantization (Sinusoidal Input)

For a sinusoidal signal with amplitude $A$ and a uniform quantizer with $L$ levels spanning a range $[-V_{max}, V_{max}]$, where $A \le V_{max}$:
*   Step size $\Delta = \frac{2V_{max}}{L}$.
*   The signal power is $P_s = \frac{A^2}{2}$.
*   Assuming $A = V_{max}$ and $L$ is large, the signal is uniformly distributed over the range $[-V_{max}, V_{max}]$. The power of a uniformly distributed signal over $[-V_{max}, V_{max}]$ is $\frac{V_{max}^2}{3}$.
*   If we assume $A = V_{max}$, then $P_s = \frac{V_{max}^2}{2}$.
*   The MSQE is $\frac{\Delta^2}{12} = \frac{(2V_{max}/L)^2}{12} = \frac{4V_{max}^2}{12L^2} = \frac{V_{max}^2}{3L^2}$.
*   $SQNR = \frac{V_{max}^2/2}{V_{max}^2/(3L^2)} = \frac{3L^2}{2}$

In decibels (dB):
*   $SQNR_{dB} = 10 \log_{10}\left(\frac{3L^2}{2}\right) = 10 \log_{10}(3) + 20 \log_{10}(L) - 10 \log_{10}(2)$
*   $SQNR_{dB} \approx 4.77 + 20 \log_{10}(L) - 3.01 \approx 1.76 + 20 \log_{10}(L)$

Since $L = 2^n$, we have:
*   $SQNR_{dB} \approx 1.76 + 20 \log_{10}(2^n) = 1.76 + 20n \log_{10}(2)$
*   $SQNR_{dB} \approx 1.76 + 20n (0.301) = 1.76 + 6.02n$

**Important Point:** For every additional bit ($n$) used in uniform PCM, the SQNR improves by approximately 6 dB. This is a significant advantage of PCM.

### 2. Signal-to-Noise Ratio (SNR)

*   **Definition:** The ratio of the signal power to the *total* noise power in the system. In a PCM system, the total noise includes quantization noise and any other noise introduced by the channel or receiver.
*   **SNR:** $SNR = \frac{P_s}{P_{noise\_total}}$

### 3. Dynamic Range

*   **Definition:** The ratio of the maximum possible signal amplitude to the minimum possible signal amplitude that can be handled without unacceptable distortion.
*   For uniform PCM, the dynamic range is directly related to the number of quantization levels ($L$). A larger $L$ provides a wider dynamic range.

## Quantization Techniques

### 1. Uniform Quantization

*   **Description:** Divide the input signal's amplitude range into $L$ equal intervals.
*   **Pros:** Simple to implement.
*   **Cons:** Inefficient for signals with non-uniform amplitude distributions. Small amplitude signals are quantized with the same step size as large amplitude signals, leading to poor SQNR for low-amplitude signals.

**Example:** Consider a signal ranging from -10V to +10V and using 4 quantization levels.
*   Range = 20V.
*   Step size $\Delta = 20V / 4 = 5V$.
*   Quantization levels: -7.5V, -2.5V, +2.5V, +7.5V.
*   Any sample between -10V and -5V is mapped to -7.5V.
*   Any sample between -5V and 0V is mapped to -2.5V.
*   Any sample between 0V and +5V is mapped to +2.5V.
*   Any sample between +5V and +10V is mapped to +7.5V.
*   The quantizer cannot represent signals outside the [-10V, +10V] range, leading to **overload distortion**.

### 2. Non-uniform Quantization

*   **Description:** The step sizes are varied, with smaller step sizes for signal amplitudes that occur more frequently (typically low amplitudes) and larger step sizes for less frequent amplitudes. This is done to optimize the SQNR for signals with non-uniform amplitude distributions, such as speech.
*   **How it's achieved:**
    *   **Floating-point quantization:** Dynamically adjust the step size based on the signal's current amplitude.
    *   **Companding:** A practical method to achieve non-uniform quantization using uniform quantizers at both the transmitter and receiver.

## Companding

*   **Definition:** Companding is a process that applies a non-linear compression to the input signal's amplitude before quantization (at the transmitter) and a corresponding non-linear expansion after decoding (at the receiver).
*   **Purpose:** To improve the SQNR of the PCM system for signals with a wide dynamic range, especially speech. It effectively "compresses" the dynamic range of the signal.
*   **How it works:**
    *   **Compressor (Transmitter):** The signal amplitude is compressed non-linearly. Low-amplitude signals are amplified more than high-amplitude signals.
    *   **Quantizer:** A uniform quantizer with a smaller number of bits can be used to quantize the compressed signal.
    *   **Expander (Receiver):** The reverse non-linear expansion is applied to the quantized samples to restore the original signal's dynamic range.

### 1. μ-law Companding (North America and Japan)

*   **Description:** A logarithmic compression characteristic. The formula for the compressed signal $y(x)$ from an input signal $x$ is:
    *   $y(x) = \text{sgn}(x) \frac{V_{max} \ln(1 + \mu |x|/V_{max})}{\ln(1 + \mu)}$
    *   where $\mu$ is the compression parameter (typically 255).
*   **Effect:** Provides more quantization levels for small signal amplitudes and fewer for large amplitudes.
*   **Reference:** Described in Haykin & Moher (5th Ed.) and Lathi & Ding (5th Ed.).

### 2. A-law Companding (Europe and rest of the world)

*   **Description:** Another logarithmic-like compression characteristic, but it's a piecewise linear approximation of a logarithm.
    *   For $|x| \ge V_{max}/\mu$: $y(x) = \text{sgn}(x) \frac{V_{max}(1 + \ln(\mu |x|/V_{max}))}{1 + \ln(\mu)}$
    *   For $|x| < V_{max}/\mu$: $y(x) = \text{sgn}(x) \frac{\mu |x|}{1 + \ln(\mu)}$
    *   where $\mu$ is the compression parameter (typically 87.6).
*   **Reference:** Described in Haykin & Moher (5th Ed.) and Lathi & Ding (5th Ed.).

**Impact of Companding on SQNR:** Companding significantly improves the SQNR for low-amplitude signals, making the overall system more robust to the varying dynamic range of speech signals.

## Bit Rate and Bandwidth Requirements

*   **Bit Rate ($R$):**
    *   $R = n \times f_s$ bits per second (bps)
    *   `n`: number of bits per sample (determined by the number of quantization levels, $L = 2^n$).
    *   `f_s`: sampling frequency.
*   **Bandwidth:** The bandwidth required for a PCM signal depends on the bit rate. A common rule of thumb is that the transmission bandwidth ($B_T$) is approximately half the bit rate:
    *   $B_T \approx R/2$ (for raised cosine filtering with a roll-off factor of 0.5).
*   **Trade-offs:**
    *   **Higher $n$ (more bits):** Improves SQNR, leading to better quality, but increases the bit rate and hence the bandwidth requirement.
    *   **Higher $f_s$ (higher sampling rate):** Necessary to accurately represent the signal according to the Nyquist theorem, but also increases the bit rate and bandwidth requirement.

**Example:** For a voice signal with a maximum frequency of 4 kHz:
*   Minimum sampling rate ($f_s$) = 2 * 4 kHz = 8 kHz.
*   If using 8-bit PCM ($n=8$), the bit rate $R = 8 \text{ bits/sample} \times 8000 \text{ samples/second} = 64000 \text{ bps}$ (64 kbps).
*   Required bandwidth $B_T \approx 64 \text{ kbps} / 2 = 32 \text{ kHz}$.

## Error Performance of PCM

While PCM offers robustness against noise during transmission compared to analog systems, channel errors (bit errors) can still degrade the signal quality.

### 1. Impact of Bit Errors on PCM

*   **Quantization Error:** Bit errors introduce additional noise, effectively acting as a form of "quantization error" on top of the original quantization noise.
*   **Decoding Errors:** A single bit error in the received codeword can cause the decoder to select an entirely different quantization level, leading to a significant jump in the reconstructed signal value.
*   **Severity:** The impact of a bit error depends on:
    *   **The number of bits per sample ($n$):** More bits per sample mean that a single bit error represents a smaller deviation from the correct quantization level. However, a bit error in a higher-order bit will still cause a large error.
    *   **The quantization scheme:** Uniform quantization is more sensitive to bit errors in higher-order bits compared to non-uniform quantization or advanced coding schemes where errors are more localized.
*   **Error Concealment Techniques:** Sophisticated digital communication systems employ error detection and correction codes (e.g., Hamming codes, convolutional codes) or error concealment techniques to mitigate the impact of bit errors.

### 2. Comparison with Analog Modulation Schemes

*   **PCM Advantages:**
    *   **Robustness to Channel Noise:** As long as the bit errors are below a certain threshold, PCM can reconstruct the signal with its original quality (limited by quantization noise). Analog systems degrade gracefully with increasing noise.
    *   **Regenerative Repeaters:** Digital signals can be regenerated at repeaters, effectively removing accumulated noise, which is not possible with analog signals.
    *   **Multiplexing:** Easier to multiplex multiple PCM signals together (e.g., Time Division Multiplexing - TDM).
*   **PCM Disadvantages:**
    *   **Higher Bandwidth Requirement:** PCM typically requires more bandwidth than analog modulation schemes for transmitting the same information bandwidth.
    *   **Quantization Noise:** Introduces quantization noise, which is not present in ideal analog systems.
    *   **Complexity:** PCM systems are generally more complex due to the sampling, quantizing, and encoding/decoding steps.

## Practical Considerations and Applications

*   **Telephony:** PCM is the standard for digital telephony (e.g., 64 kbps PCM for voice).
*   **Digital Audio:** CDs, DVDs, and digital audio broadcasting use PCM.
*   **Software Defined Radio (SDR):** SDR platforms often digitize the intermediate frequency (IF) or baseband signal using ADCs (Analog-to-Digital Converters), which inherently perform sampling and quantization. Understanding PCM performance is crucial for analyzing the quality of digitized signals. (Reference: Laufer, "The Hobbyist's Guide to the RTL-SDR")

## Practice Questions and Exercises

1.  **SQNR Calculation:** A PCM system uses 10 bits per sample. If the input signal is a sinusoid with amplitude $A$ and the quantizer spans a range where the signal power is $P_s$, calculate the SQNR in dB if uniform quantization is used and $A$ is such that the signal is uniformly distributed over the range.
    *   **Answer:** For uniform quantization, $SQNR_{dB} \approx 1.76 + 6.02n$. With $n=10$, $SQNR_{dB} \approx 1.76 + 6.02 \times 10 = 1.76 + 60.2 = 61.96$ dB.

2.  **Bit Rate and Bandwidth:** A digital audio system samples an audio signal at 44.1 kHz and uses 16 bits per sample.
    *   a) What is the bit rate of the PCM signal?
    *   b) What is the approximate transmission bandwidth required for this signal?
    *   **Answer:**
        *   a) Bit rate $R = n \times f_s = 16 \text{ bits/sample} \times 44100 \text{ samples/second} = 705600 \text{ bps}$ (705.6 kbps).
        *   b) Approximate bandwidth $B_T \approx R/2 = 705600 / 2 = 352800 \text{ Hz}$ (352.8 kHz).

3.  **Companding Benefit:** Explain why companding is beneficial for transmitting speech signals using PCM.
    *   **Answer:** Speech signals have a wide dynamic range and their amplitude distribution is non-uniform, with most energy concentrated at lower amplitudes. Companding (e.g., $\mu$-law or A-law) compresses the dynamic range, allocating more quantization levels to the low-amplitude speech components. This significantly improves the Signal-to-Quantization Noise Ratio (SQNR) for these critical low-amplitude parts of the signal, leading to better perceived audio quality compared to uniform PCM with the same number of bits.

4.  **Aliasing Prevention:** What is aliasing, and how is it prevented in PCM systems?
    *   **Answer:** Aliasing is the phenomenon where, during sampling, high-frequency components in the analog signal fold back into the lower frequency range, causing distortion. It occurs when the sampling frequency ($f_s$) is less than twice the maximum frequency ($f_{max}$) of the signal (i.e., $f_s < 2f_{max}$). Aliasing is prevented by using an **anti-aliasing filter** (a low-pass filter) before the sampler to remove or attenuate frequencies above $f_s/2$.

## Important Points to Remember

*   **PCM is a cornerstone of digital communications.** Its performance is fundamentally limited by **quantization noise**.
*   The **SQNR for uniform PCM improves by approximately 6 dB per bit** increase.
*   **Nyquist-Shannon theorem** dictates the minimum sampling rate ($f_s \ge 2f_{max}$) to avoid aliasing.
*   **Companding (μ-law and A-law)** is crucial for optimizing PCM performance for signals with non-uniform amplitude distributions like speech, improving SQNR at the cost of increased system complexity.
*   **Bit rate ($R = n \times f_s$)** determines the bandwidth requirement of a PCM system.
*   While PCM is robust to channel noise, **bit errors** can still introduce significant distortion. Error correction coding is often used.
*   Understanding PCM performance is essential for evaluating and designing digital communication systems, including those implemented with **Software Defined Radio (SDR)**.

## Alignment with Course Outcomes

*   **CO1 (Setup prototype circuits):** While this module focuses on performance analysis rather than circuit building, understanding PCM's stages (sampling, quantization, encoding) provides the theoretical basis for designing circuits that perform these functions. Experiments in the lab might involve implementing these stages.
*   **CO2 (Simulate error performance):** This module's discussion on the impact of bit errors directly relates to simulating the error performance of digital communication systems. Understanding SQNR and how channel noise translates to perceived distortion is key.
*   **CO3 (Develop hands-on skills with SDR):** The RTL-SDR digitizes incoming radio signals. This module provides the theoretical knowledge to understand the quality of these digitized signals, the trade-offs in sampling rates and bit depths, and the impact of quantization noise on the received signal. Analyzing the performance of a digital communication system often involves working with sampled data, which is the output of the initial ADC stage.

This comprehensive set of notes covers the essential aspects of PCM performance, its underlying principles, performance metrics, practical considerations, and its relevance to digital communication systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
