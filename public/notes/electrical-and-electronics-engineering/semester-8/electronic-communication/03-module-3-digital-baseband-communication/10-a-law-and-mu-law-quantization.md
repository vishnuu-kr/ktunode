---
title: "A-law and mu-law quantization."
subject: "ELECTRONIC COMMUNICATION"
module: "Module 3: Digital baseband communication:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c01"
status: "completed"
scrapedAt: "2026-05-23T16:40:32.440Z"
---
# Electronic Communication: Module 3 - Digital Baseband Communication

## Topic: A-law and mu-law Quantization

This module delves into digital baseband communication, focusing on the crucial process of converting analog signals into digital formats. Quantization, a fundamental step in this conversion, is explored through two widely used companding laws: A-law and mu-law.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the necessity of quantization in digital communication.
*   Explain the principles of uniform and non-uniform quantization.
*   Describe the mathematical basis and operational characteristics of A-law companding.
*   Describe the mathematical basis and operational characteristics of mu-law companding.
*   Compare and contrast A-law and mu-law companding.
*   Appreciate the role of companding in improving signal-to-quantization noise ratio (SQNR) for speech signals.

### Key Concepts and Definitions:

*   **Analog-to-Digital Conversion (ADC):** The process of converting a continuous analog signal into a discrete digital signal. This typically involves sampling, quantization, and encoding.
*   **Quantization:** The process of mapping a continuous range of input values to a finite set of discrete output values. This introduces quantization error or quantization noise.
*   **Quantization Error:** The difference between the actual analog sample value and the quantized (discrete) output value.
*   **Uniform Quantization:** A quantization scheme where the step sizes between adjacent quantization levels are equal throughout the entire input range. This provides uniform resolution across the signal amplitude.
*   **Non-uniform Quantization:** A quantization scheme where the step sizes are not uniform. Smaller step sizes are used for smaller input signal amplitudes, and larger step sizes are used for larger input signal amplitudes. This is particularly beneficial for signals with non-uniform amplitude distribution, such as speech.
*   **Companding:** A process that combines **com**pression and ex**panding**. In signal processing, it refers to a non-linear quantization scheme used to improve the SQNR of signals with a wide dynamic range, especially speech. The input signal is compressed before quantization and expanded after quantization.
*   **Companding Laws:** Specific mathematical functions used to define the non-linear compression and expansion characteristics. A-law and mu-law are the most common companding laws.
*   **Signal-to-Quantization Noise Ratio (SQNR):** A measure of the quality of the quantized signal, representing the ratio of the signal power to the quantization noise power.
*   **Dynamic Range:** The ratio between the maximum and minimum signal amplitudes that can be accurately represented by a quantizer.

### 1. The Need for Quantization

In digital communication, analog signals (like voice) must be converted into a digital format. This conversion process, typically Pulse Code Modulation (PCM), involves several steps. After sampling an analog signal, the amplitude of each sample is a continuous value. To represent this value digitally, it must be mapped to one of a finite number of discrete levels. This mapping process is called **quantization**.

**Why is quantization necessary?**

*   **Digital Representation:** Digital systems work with discrete values. Analog signals are continuous in both time and amplitude. Quantization discretizes the amplitude.
*   **Finite Bits:** Digital representation uses a finite number of bits. This inherently limits the number of possible amplitude levels that can be represented. For an N-bit quantizer, there are $2^N$ possible output levels.

**The Trade-off: Quantization Error**

While necessary, quantization introduces an unavoidable error, known as **quantization error** or **quantization noise**. This error is the difference between the actual sample value and the closest quantized level. The goal of quantization design is to minimize this error, or more specifically, to maximize the Signal-to-Quantization Noise Ratio (SQNR).

### 2. Uniform vs. Non-uniform Quantization

#### 2.1. Uniform Quantization

*   **Principle:** In uniform quantization, the entire range of input signal amplitudes is divided into equal-sized intervals. Each interval corresponds to a unique quantized output level.
*   **Characteristics:**
    *   Constant step size ($ \Delta $) throughout the amplitude range.
    *   Provides uniform resolution for all signal amplitudes.
    *   **SQNR:** For a full-scale sinusoidal input signal, the SQNR for uniform quantization is approximately $6.02N + 1.76$ dB, where $N$ is the number of bits.
*   **Disadvantages:**
    *   Inefficient for signals with non-uniform amplitude distribution, such as speech. Speech signals have most of their energy concentrated at lower amplitudes. Uniform quantization allocates the same number of quantization levels to the smaller amplitudes as to the larger ones, leading to poor resolution for weak signals.
    *   Limited dynamic range. A large number of bits is required to represent weak signals with good fidelity, which can be costly in terms of bandwidth.

#### 2.2. Non-uniform Quantization

*   **Principle:** In non-uniform quantization, the quantization intervals are not uniform. Smaller intervals (finer quantization) are used for smaller signal amplitudes, and larger intervals (coarser quantization) are used for larger signal amplitudes.
*   **Advantages:**
    *   **Improved SQNR for Speech:** By concentrating quantization levels in the regions where speech signals have the most power (lower amplitudes), non-uniform quantization significantly improves the SQNR for speech signals compared to uniform quantization with the same number of bits.
    *   **Wider Dynamic Range:** It allows for a wider dynamic range to be covered with the same number of bits by efficiently allocating resolution.
*   **Mechanism:** Companding is used to achieve non-uniform quantization. The analog signal is first compressed non-linearly before being uniformly quantized. After quantization and digital encoding, the digital signal is expanded non-linearly to restore the original signal's dynamic range.

**Example (Conceptual):**

Imagine a quantizer with only 4 levels.
*   **Uniform:** Levels at -3, -1, +1, +3. Step size = 2.
*   **Non-uniform:** Levels at -3, -0.5, +0.5, +3. Smaller steps around zero, larger steps at the extremes. This is more suitable if most signals are clustered near zero.

### 3. A-law Companding

A-law companding is a standard used in many parts of the world, particularly in Europe and other countries that follow CCITT (now ITU-T) recommendations for digital telephony.

*   **Purpose:** To compress the dynamic range of speech signals to improve SQNR when using a limited number of quantization bits.
*   **Mathematical Function:** The A-law companding function for a positive input sample $x$ is defined as:

    $ \text{Companded Value } y = \text{sgn}(x) \frac{A |x|}{1 + \ln(A)} \quad \text{for } \frac{|x|}{X_{max}} \ge \frac{1}{A} $

    $ \text{Companded Value } y = \text{sgn}(x) \frac{|x|}{X_{max}} \quad \text{for } \frac{|x|}{X_{max}} < \frac{1}{A} $

    Where:
    *   $|x|$ is the absolute value of the input sample.
    *   $X_{max}$ is the maximum possible input signal amplitude.
    *   $A$ is the compression parameter, typically $A = 87.6$ for 8-bit PCM.
    *   $\text{sgn}(x)$ is the sign function (+1 for positive $x$, -1 for negative $x$).

*   **Operation:**
    1.  **Compression:** The input analog signal is passed through a non-linear compressor circuit that implements the A-law function. This effectively reduces the amplitude of larger signals more than smaller signals.
    2.  **Quantization:** The compressed signal is then uniformly quantized into a finite number of levels.
    3.  **Encoding:** The quantized levels are encoded into binary words.
    4.  **Transmission:** The digital signal is transmitted.
    5.  **Decoding:** The received binary words are decoded back into quantized levels.
    6.  **Expansion:** The decoded signal is passed through a non-linear expander circuit that implements the inverse A-law function. This restores the original dynamic range of the speech signal.

*   **Characteristics of A-law:**
    *   The compression curve is segmented into 16 linear segments.
    *   It provides 13-bit logarithmic encoding with an effective 12-bit linear resolution.
    *   The SQNR for A-law companding is better than uniform quantization for speech signals.

*   **Reference:**
    *   Kennedy's Electronic Communication Systems, 6th Edition, Chapter 10 discusses PCM and companding.
    *   Wayne Tomasi's Electronic Communication Systems – Fundamentals through Advanced, 5th Edition, also covers PCM and companding in its digital communication chapters.

### 4. mu-law Companding

mu-law companding is another widely used non-uniform quantization scheme, particularly in North America and Japan.

*   **Purpose:** Similar to A-law, it aims to improve the SQNR of speech signals by using non-uniform quantization.
*   **Mathematical Function:** The mu-law companding function for a positive input sample $x$ is defined as:

    $ y = \text{sgn}(x) \frac{\ln(1 + \mu |x|/X_{max})}{\ln(1 + \mu)} $

    Where:
    *   $|x|$ is the absolute value of the input sample.
    *   $X_{max}$ is the maximum possible input signal amplitude.
    *   $ \mu $ (mu) is the compression parameter, typically $ \mu = 255 $ for 8-bit PCM.

*   **Operation:** The process is analogous to A-law: compress, quantize, encode, transmit, decode, expand.
    1.  **Compression:** Analog signal passed through a non-linear compressor (mu-law function).
    2.  **Quantization:** Compressed signal is uniformly quantized.
    3.  **Encoding:** Quantized levels are encoded.
    4.  **Transmission:** Digital signal transmitted.
    5.  **Decoding:** Received signal decoded.
    6.  **Expansion:** Decoded signal passed through an expander (inverse mu-law function).

*   **Characteristics of mu-law:**
    *   The compression curve is also segmented, but the number of segments and the logic differ from A-law.
    *   It effectively provides 12-bit linear resolution, but with a logarithmic compression characteristic.
    *   The SQNR for mu-law companding is also superior to uniform quantization for speech signals.

*   **Reference:**
    *   Simon Haykin and Michael Mohre's Communication Systems, 5th Edition, covers PCM and companding techniques.
    *   Taub & Schilling's Principles of Communication Systems, 4th edition, provides a detailed mathematical treatment of various modulation and quantization schemes.

### 5. Comparison of A-law and mu-law

| Feature           | A-law                                      | mu-law                                     |
| :---------------- | :----------------------------------------- | :----------------------------------------- |
| **Region of Use** | Europe, international telephony            | North America, Japan                       |
| **Parameter**     | $A = 87.6$ (for 8-bit PCM)                 | $ \mu = 255 $ (for 8-bit PCM)              |
| **Function**      | Piecewise linear logarithmic              | Logarithmic                                |
| **Segmentations** | 16 linear segments                         | Typically 15 linear segments               |
| **Resolution**    | 12-bit linear effective resolution        | 12-bit linear effective resolution        |
| **Compression**   | Compresses larger signals more             | Compresses smaller signals more            |
| **SQNR**          | Better than uniform for speech            | Better than uniform for speech            |
| **Preference**    | Often preferred for its more gradual compression | Offers slightly better performance at very low signal levels |

**Key Difference in Compression:**

*   **A-law:** Compresses larger signals more heavily. This means the difference between large signal levels is reduced more than the difference between small signal levels.
*   **mu-law:** Compresses smaller signals more heavily. This results in finer quantization around zero amplitude, which is where most speech energy lies.

For typical speech signals, both A-law and mu-law offer comparable performance gains over uniform quantization. The choice between them is largely dictated by regional standards.

### 6. Impact on Signal-to-Quantization Noise Ratio (SQNR)

Companding significantly improves the SQNR for signals with a wide dynamic range and a non-uniform amplitude distribution, such as speech.

*   **Uniform Quantization:** The SQNR is constant regardless of the signal's instantaneous amplitude. This means weak signals suffer from poor SQNR.
*   **Non-uniform Quantization (A-law/mu-law):**
    *   For **weak signals** (low amplitude), the quantization step sizes are small. This results in a higher SQNR for these signals.
    *   For **strong signals** (high amplitude), the quantization step sizes are larger. While the SQNR for these signals might be slightly lower than what a uniform quantizer could achieve for the same amplitude range, the overall improvement for the entire signal is significant because speech power is concentrated in the lower amplitude regions.

**Example:**

Consider a 3-bit uniform quantizer with 8 levels. It can represent 8 discrete amplitude values. If the dynamic range is wide, the step size will be large, leading to significant quantization error for small signals.
Now consider a 3-bit non-uniform quantizer using A-law or mu-law. It still uses 8 levels, but these levels are clustered more closely around zero amplitude. This means small signal variations are represented more accurately, leading to a higher SQNR for those small signals.

### 7. Course Outcome Alignment

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.**
    *   While this topic doesn't directly deal with amplitude modulation, the underlying principle of signal representation and processing is foundational. Quantization is a key step in digital baseband communication, which is often a precursor to modulated signals.
*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.**
    *   Similar to CO1, this topic focuses on the digital representation aspect. The quality of the digital representation (determined by quantization) impacts the fidelity of the signal that is eventually modulated.
*   **CO3: Understand the various processing blocks of a digital communication system.** (Knowledge Level: K2)
    *   This topic directly addresses **quantization**, which is a crucial processing block in ADC, a fundamental part of any digital communication system. Understanding A-law and mu-law helps in understanding how speech signals are digitized for transmission.
*   **CO4: Apply the knowledge of digital modulation in digital transmission.** (Knowledge Level: K3)
    *   While this topic is before modulation, the quality of the quantized digital signal directly affects the performance of subsequent digital modulation techniques. A signal with poor SQNR due to inefficient quantization will result in a poorly transmitted digital signal, regardless of the modulation scheme used.

### Important Points to Remember:

*   **Quantization is unavoidable** in analog-to-digital conversion.
*   Quantization introduces **quantization error/noise**.
*   **Uniform quantization** uses equal step sizes. It's simple but inefficient for speech.
*   **Non-uniform quantization** uses variable step sizes (finer for smaller amplitudes, coarser for larger).
*   **Companding** (compression + expansion) is the technique to achieve non-uniform quantization.
*   **A-law and mu-law** are the two primary companding standards for speech.
*   Both A-law and mu-law aim to **improve SQNR for speech signals** by allocating more quantization levels to the regions of lower amplitude where speech power is concentrated.
*   The choice between A-law and mu-law is largely **regional and standardization-based**.

### Practice Questions:

1.  What is the primary purpose of quantization in digital communication?
2.  Explain the difference between uniform and non-uniform quantization.
3.  Why is non-uniform quantization particularly beneficial for speech signals?
4.  Describe the companding process and its role in achieving non-uniform quantization.
5.  State the mathematical formula for the mu-law companding function and identify its parameters.
6.  How does A-law companding differ in its mathematical formulation and operational characteristics from mu-law companding?
7.  For a 7-bit PCM system, compare the expected SQNR of a speech signal quantized using uniform quantization versus mu-law companding. Briefly explain why there is a difference.
8.  Which companding law is typically used in North America, and which is used in Europe?

---

### Answers to Practice Questions:

1.  **Purpose of Quantization:** Quantization is the process of mapping a continuous range of analog sample amplitudes to a finite set of discrete digital values. This is essential for converting analog signals into a digital format that can be processed, stored, and transmitted by digital systems.
2.  **Uniform vs. Non-uniform Quantization:**
    *   **Uniform Quantization:** Divides the entire amplitude range into equal-sized intervals, resulting in constant step sizes.
    *   **Non-uniform Quantization:** Divides the amplitude range into unequal-sized intervals. Smaller step sizes are used for smaller amplitudes, and larger step sizes are used for larger amplitudes.
3.  **Benefit for Speech Signals:** Speech signals have a non-uniform amplitude distribution, with most of the signal power concentrated at lower amplitudes. Non-uniform quantization uses finer quantization steps for these low amplitudes, leading to a higher Signal-to-Quantization Noise Ratio (SQNR) for the majority of the signal energy, thus improving the perceived quality of the speech.
4.  **Companding Process:** Companding combines **com**pression and ex**panding**. First, the analog signal is compressed non-linearly (e.g., using A-law or mu-law). This reduces the dynamic range of the signal, with larger amplitudes being compressed more. Then, the compressed signal is uniformly quantized. Finally, after transmission and decoding, the signal is expanded non-linearly using the inverse companding function to restore its original dynamic range. This process effectively achieves non-uniform quantization.
5.  **mu-law Companding Formula:**
    $ y = \text{sgn}(x) \frac{\ln(1 + \mu |x|/X_{max})}{\ln(1 + \mu)} $
    Parameters:
    *   $|x|$: Absolute value of the input sample.
    *   $X_{max}$: Maximum possible input signal amplitude.
    *   $ \mu $: The compression parameter (e.g., $ \mu = 255 $ for 8-bit PCM).
6.  **A-law vs. mu-law:**
    *   **Formula:** A-law uses a piecewise linear logarithmic function with specific segments, while mu-law uses a simpler logarithmic function.
    *   **Compression Behavior:** A-law compresses larger amplitudes more significantly, while mu-law compresses smaller amplitudes more significantly.
    *   **Segmentation:** A-law is defined by 16 linear segments, whereas mu-law also uses segmentation but with different logic.
7.  **SQNR Comparison (7-bit PCM):**
    For a 7-bit PCM system (128 quantization levels):
    *   **Uniform Quantization:** The SQNR would be approximately $6.02 \times 7 + 1.76 \approx 43.9$ dB if it were uniformly quantized with 7 bits.
    *   **mu-law Companding:** With mu-law companding, the SQNR for speech signals would be significantly higher, often exceeding 45 dB or more, depending on the specific signal and measurement.
    **Reason for Difference:** Mu-law (and A-law) concentrates the quantization levels where speech signal power is highest (at low amplitudes), leading to a smaller quantization error for these important signal components. Uniform quantization spreads the levels evenly, resulting in larger relative errors for weak signals.
8.  **Regional Usage:**
    *   **North America and Japan:** Primarily use **mu-law** companding.
    *   **Europe and international telephony:** Primarily use **A-law** companding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
