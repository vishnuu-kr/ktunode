---
title: "Analog data to digital signal - Sampling theorem, Pulse Code Modulation (PCM), Delta Modulation (DM)."
subject: "DATA COMMUNICATION"
module: "Module 2: Digital data to digital signal – Non"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bee4"
status: "completed"
scrapedAt: "2026-05-20T16:51:41.023Z"
---
# Data Communication: Module 2 - Analog Data to Digital Signal

## Module Overview

This module focuses on the fundamental process of converting analog data (like voice or audio) into a digital signal for transmission. We will explore the essential techniques and theorems that enable this conversion, ensuring accurate and efficient representation of analog information in the digital domain.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   **Understand and apply the Sampling Theorem.**
*   **Explain the principles and steps of Pulse Code Modulation (PCM).**
*   **Describe the operation and characteristics of Delta Modulation (DM).**
*   **Compare and contrast PCM and DM.**
*   **Identify the advantages and disadvantages of analog-to-digital conversion techniques.**

---

## 1. Analog Data to Digital Signal Conversion: The Need

**Why convert analog to digital?**

Analog signals are continuous in both time and amplitude, meaning they can take on an infinite number of values within a given range. Examples include human voice, music, and temperature readings. However, modern communication systems, computers, and digital signal processing techniques rely heavily on digital signals, which are discrete in both time and amplitude.

**Advantages of Digital Signals:**

*   **Noise Immunity:** Digital signals are less susceptible to noise and interference during transmission compared to analog signals.
*   **Data Integrity:** Digital data can be easily reproduced without degradation, unlike analog signals which can lose quality with each regeneration.
*   **Error Detection and Correction:** Digital systems allow for robust error detection and correction mechanisms.
*   **Flexibility:** Digital signals can be easily processed, compressed, stored, and multiplexed using digital hardware and software.
*   **Cost-Effectiveness:** In many cases, digital transmission and processing can be more cost-effective, especially for long-distance communication.

---

## 2. The Sampling Theorem (Nyquist-Shannon Sampling Theorem)

The Sampling Theorem is the cornerstone of analog-to-digital conversion. It provides the theoretical basis for accurately reconstructing an analog signal from its discrete samples.

**Key Concepts:**

*   **Sampling:** The process of taking discrete measurements (samples) of an analog signal at regular intervals of time.
*   **Sampling Rate ($f_s$)**: The number of samples taken per second.
*   **Bandwidth ($B$)**: The range of frequencies present in an analog signal. For a signal to be band-limited, it means its frequency content is zero beyond a certain frequency.
*   **Nyquist Rate**: The minimum sampling rate required to perfectly reconstruct an analog signal.

**Statement of the Sampling Theorem:**

A continuous-time band-limited signal $x(t)$ with maximum frequency $f_{max}$ can be perfectly reconstructed from its samples if the sampling rate $f_s$ is greater than twice the maximum frequency.

Mathematically:
$f_s > 2f_{max}$

The minimum sampling rate, $2f_{max}$, is called the **Nyquist Rate**.

**The Nyquist Interval:**

The maximum time interval between samples is the reciprocal of the Nyquist rate:
$T_s \le \frac{1}{2f_{max}}$

**Implications:**

*   If the sampling rate is too low (below the Nyquist rate), a phenomenon called **aliasing** will occur.
*   Aliasing: Higher frequency components in the original analog signal will appear as lower frequencies in the sampled signal, leading to distortion and inability to reconstruct the original signal accurately.

**Example:**

Consider an analog signal with a maximum frequency of 4 kHz (e.g., speech).
According to the Sampling Theorem, the minimum sampling rate required is:
$f_s > 2 \times 4 \text{ kHz} = 8 \text{ kHz}$

Therefore, we must sample this signal at a rate greater than 8,000 samples per second to avoid aliasing and ensure perfect reconstruction. Common sampling rates for audio are 8 kHz, 44.1 kHz, and 48 kHz.

**Practical Considerations:**

*   **Anti-aliasing Filter:** In practice, an analog low-pass filter called an **anti-aliasing filter** is used before sampling to remove or attenuate frequencies above $f_{max}/2$ (or $f_s/2$ if we consider the practical sampling rate). This prevents unwanted higher frequencies from folding back into the desired frequency band during sampling.

---

## 3. Pulse Code Modulation (PCM)

PCM is the most common and widely used method for converting analog data to digital signals. It involves three main steps: **Sampling, Quantization, and Encoding.**

**Steps of PCM:**

1.  **Sampling:**
    *   The analog input signal is sampled at regular intervals, as dictated by the Sampling Theorem.
    *   This results in a sequence of discrete-time, continuous-amplitude samples.

2.  **Quantization:**
    *   Quantization is the process of approximating the continuous amplitude values of the samples to a finite set of discrete amplitude levels.
    *   Each sample's amplitude is mapped to the closest quantization level.
    *   **Quantization Error (Quantization Noise):** The difference between the actual sample amplitude and its quantized value is the quantization error. This error is inherent in the PCM process.
    *   **Number of Quantization Levels (L):** The number of discrete amplitude levels used. A larger number of levels leads to finer quantization and reduced quantization error, but requires more bits for encoding.
    *   **Quantization Step Size (Δ):** The difference between adjacent quantization levels. For uniform quantization, $\Delta = \frac{V_{max} - V_{min}}{L}$, where $V_{max}$ and $V_{min}$ are the maximum and minimum amplitudes of the analog signal.
    *   **Types of Quantization:**
        *   **Uniform Quantization:** The quantization step size is constant across the entire amplitude range. Simpler to implement, but less efficient for signals with non-uniform amplitude distributions.
        *   **Non-uniform Quantization:** The quantization step size varies, with smaller steps for smaller amplitudes and larger steps for larger amplitudes. This is more efficient for signals like speech where most amplitudes are clustered around zero. Commonly used techniques are **μ-law (mu-law)** and **A-law** companding.

3.  **Encoding:**
    *   Each quantized sample is assigned a unique binary code.
    *   The number of bits required per sample is determined by the number of quantization levels ($L$): $n = \log_2 L$.
    *   For example, if there are 256 quantization levels, then $n = \log_2 256 = 8$ bits are needed per sample. This is often referred to as the **bit depth**.
    *   The output of PCM is a stream of binary digits.

**Block Diagram of PCM Transmitter:**

```
Analog Input Signal --> Low-Pass Filter (Anti-aliasing) --> Sampler --> Quantizer --> Encoder --> Digital Output (PCM Signal)
```

**PCM Receiver (Demodulator):**

The PCM receiver performs the reverse process:

```
Digital Input (PCM Signal) --> Decoder --> Sample-and-Hold --> Low-Pass Filter --> Reconstructed Analog Signal
```

**Example: Simplified PCM (4-bit quantization)**

Let's assume a simplified PCM system with:
*   Sampling rate: $f_s = 8$ kHz
*   Number of quantization levels: $L = 16$
*   Number of bits per sample: $n = \log_2 16 = 4$ bits

Consider a few samples of an analog signal with amplitudes: +0.5V, +1.2V, -0.8V, +0.1V.
Assume the quantization levels are $\{-0.75, -0.5, -0.25, 0, +0.25, +0.5, +0.75, +1.0, +1.25, ...\}$.

1.  **Sampling:** We get samples at $t_1, t_2, t_3, t_4$ with amplitudes +0.5V, +1.2V, -0.8V, +0.1V.
2.  **Quantization:**
    *   +0.5V is quantized to +0.5V (closest level).
    *   +1.2V is quantized to +1.25V (closest level).
    *   -0.8V is quantized to -0.75V (closest level).
    *   +0.1V is quantized to 0V (closest level).
3.  **Encoding:**
    *   +0.5V (quantized to +0.5V) might be represented as binary `0110`.
    *   +1.2V (quantized to +1.25V) might be represented as binary `1100`.
    *   -0.8V (quantized to -0.75V) might be represented as binary `0010`.
    *   +0.1V (quantized to 0V) might be represented as binary `0100`.

The digital output stream would be: `0110 1100 0010 0100 ...`

**Key PCM Parameters:**

*   **Sampling Rate ($f_s$)**: Affects the bandwidth requirement and the Nyquist criterion.
*   **Number of Quantization Levels (L) / Bit Depth (n)**: Affects the signal-to-quantization noise ratio (SQNR).
    *   SQNR (dB) $\approx 6.02n + 1.76$ dB. A higher bit depth results in better fidelity.
*   **Bit Rate**: The rate at which bits are transmitted, calculated as $f_s \times n$.

---

## 4. Delta Modulation (DM)

Delta Modulation is a simpler form of differential pulse-code modulation (DPCM). Instead of quantizing the absolute amplitude of each sample, DM quantizes the *difference* between the current sample and a predicted value (often the previous quantized value).

**Key Concepts:**

*   **Differential Quantization:** It quantizes the change in the signal rather than its absolute value.
*   **Single Bit Quantizer:** DM uses a 1-bit quantizer, meaning the difference is approximated by either +Δ (step size) or -Δ.
*   **Step Size (Δ):** A fixed increment or decrement in the quantized output.

**How DM Works:**

1.  **Prediction:** The transmitter compares the current analog sample with the previous reconstructed value (or a prediction based on previous values).
2.  **Quantization of Difference:** The difference between the current sample and the previous reconstructed value is quantized. If the difference is positive (sample > previous reconstructed value), the output is a `+1` (or `+Δ`). If the difference is negative (sample < previous reconstructed value), the output is a `-1` (or `-Δ`).
3.  **Encoding:** The `+1` or `-1` is transmitted as a single bit.
4.  **Reconstruction (Transmitter Side):** The transmitter also reconstructs the signal to keep track of the previous value. If the output was `+1`, it adds Δ to the previous reconstructed value. If it was `-1`, it subtracts Δ.

**Block Diagram of DM Transmitter:**

```
Analog Input Signal --> Comparator --> Step Size Generator --> Modulator (Encoder) --> Digital Output (DM Signal)
       ^                                      |
       |                                      |
       +------------------- Reconstructed Signal (Feedback Loop)
```

**Block Diagram of DM Receiver:**

```
Digital Input (DM Signal) --> Demodulator (Decoder) --> Step Size Generator --> Integrator --> Reconstructed Analog Signal
                                                                                                   ^
                                                                                                   |
                                                                                                   +----- Feedback Loop
```

**Example: Simplified DM**

Let's assume:
*   Initial reconstructed value: 0V
*   Step size: Δ = 1V

| Sample Time | Analog Sample | Previous Reconstructed Value | Difference | Quantized Difference | DM Output (1-bit) | New Reconstructed Value |
| :---------- | :------------ | :--------------------------- | :--------- | :------------------- | :---------------- | :---------------------- |
| $t_0$       | +0.5V         | 0V                           | +0.5V      | +Δ (1V)              | 1                 | 0V + 1V = 1V            |
| $t_1$       | +1.2V         | 1V                           | +0.2V      | +Δ (1V)              | 1                 | 1V + 1V = 2V            |
| $t_2$       | +0.8V         | 2V                           | -1.2V      | -Δ (-1V)             | 0                 | 2V - 1V = 1V            |
| $t_3$       | +1.5V         | 1V                           | +0.5V      | +Δ (1V)              | 1                 | 1V + 1V = 2V            |

The DM output stream would be `1 1 0 1 ...`

**Disadvantages of Basic DM:**

*   **Slope Overload Distortion:** Occurs when the analog signal changes too rapidly for the single-bit quantizer to keep up. If the slope of the analog signal is steeper than the maximum slope the DM can follow (which is Δ per sampling period), the output will continuously increase or decrease, resulting in a distorted approximation.
*   **Granular Noise (Idle Noise):** Occurs when the analog signal is relatively flat. The quantizer will oscillate around the actual value, causing small fluctuations.

**Improvements to DM:**

To overcome the limitations of basic DM, several improved versions exist, such as:
*   **Adaptive Delta Modulation (ADM):** The step size Δ is varied adaptively based on the recent history of the signal to reduce slope overload and granular noise.
*   **Delta-Sigma Modulation (ΔΣM):** Incorporates a noise-shaping technique by using a delta modulator with an integrator and feedback loop, which pushes quantization noise to higher frequencies outside the signal's band.

---

## 5. Comparison of PCM and Delta Modulation (DM)

| Feature             | Pulse Code Modulation (PCM)                                 | Delta Modulation (DM)                                       |
| :------------------ | :---------------------------------------------------------- | :---------------------------------------------------------- |
| **Quantization**    | Quantizes the absolute amplitude of each sample.            | Quantizes the difference between current and previous sample. |
| **Quantizer Type**  | Multi-bit quantizer (e.g., 8-bit, 16-bit).                  | Single-bit quantizer (+Δ or -Δ).                            |
| **Complexity**      | More complex (requires multi-bit quantizer and encoder).    | Simpler (requires single-bit quantizer and integrator).     |
| **Bandwidth**       | Higher bandwidth requirement due to multiple bits per sample. | Lower bandwidth requirement (only 1 bit per sample).        |
| **Bit Rate**        | Higher bit rate ($f_s \times n$).                           | Lower bit rate ($f_s \times 1$).                            |
| **Quantization Error**| Lower quantization error, better fidelity (higher SQNR).  | Higher quantization error, prone to slope overload and granular noise. |
| **Implementation**  | More components, higher cost.                               | Fewer components, lower cost.                               |
| **Applications**    | High-fidelity audio, voice, digital telephony (e.g., ISDN). | Low-fidelity audio, voice, sensor data, simple communication. |

---

## 6. Advantages and Disadvantages of Analog-to-Digital Conversion

**Advantages:**

*   **Improved Noise Immunity:** Digital signals are robust against noise.
*   **Data Integrity:** No signal degradation during transmission or reproduction.
*   **Error Control:** Efficient error detection and correction possible.
*   **Multiplexing:** Multiple digital signals can be combined and transmitted over a single channel (e.g., Time Division Multiplexing - TDM).
*   **Digital Signal Processing (DSP):** Enables advanced signal processing, compression, and manipulation.
*   **Storage and Retrieval:** Easy to store and retrieve digital data without loss of quality.

**Disadvantages:**

*   **Quantization Error:** Inherent distortion introduced during the quantization process.
*   **Bandwidth Requirement:** Can require higher bandwidth than analog transmission for the same information content (due to the need for multiple bits per sample in PCM).
*   **Complexity:** A/D converters can be more complex and expensive than analog circuits.
*   **Sampling Rate Limitations:** The sampling theorem imposes limits on the maximum frequency that can be accurately converted.

---

## Practice Questions and Answers

**Question 1:**
According to the Sampling Theorem, what is the minimum sampling rate required to accurately reconstruct a signal with a maximum frequency of 10 kHz?

**Answer:**
The Sampling Theorem states that $f_s > 2f_{max}$.
Given $f_{max} = 10$ kHz, the minimum sampling rate is $f_s > 2 \times 10 \text{ kHz} = 20 \text{ kHz}$.
So, the minimum sampling rate is slightly above 20 kHz.

---

**Question 2:**
What phenomenon occurs if the sampling rate is below the Nyquist rate?

**Answer:**
Aliasing occurs. High-frequency components of the original signal are incorrectly represented as lower frequencies in the sampled signal, leading to distortion.

---

**Question 3:**
List the three main steps involved in Pulse Code Modulation (PCM).

**Answer:**
The three main steps are:
1.  Sampling
2.  Quantization
3.  Encoding

---

**Question 4:**
If a PCM system uses 8 quantization levels, how many bits are required to encode each sample?

**Answer:**
The number of bits $n$ is given by $n = \log_2 L$, where $L$ is the number of quantization levels.
For $L = 8$, $n = \log_2 8 = 3$ bits.

---

**Question 5:**
Describe the primary difference in what is quantized between PCM and Delta Modulation.

**Answer:**
PCM quantizes the *absolute amplitude* of each sample, while Delta Modulation (DM) quantizes the *difference* between the current sample and the previous reconstructed value.

---

**Question 6:**
What are the two main types of distortion encountered in basic Delta Modulation?

**Answer:**
The two main types of distortion are:
1.  Slope Overload Distortion
2.  Granular Noise (Idle Noise)

---

**Question 7:**
A telephone system uses PCM with a sampling rate of 8 kHz and 8 bits per sample. What is the bit rate of this system?

**Answer:**
Bit Rate = Sampling Rate $\times$ Bits per Sample
Bit Rate = 8 kHz $\times$ 8 bits/sample
Bit Rate = 8,000 samples/second $\times$ 8 bits/sample
Bit Rate = 64,000 bits/second = 64 kbps.

---

## Important Points to Remember

*   The **Sampling Theorem** is crucial for analog-to-digital conversion. Always ensure $f_s > 2f_{max}$ to avoid aliasing.
*   An **anti-aliasing filter** is essential before sampling in practical systems.
*   **PCM** offers high fidelity but requires more bandwidth and complexity.
*   **DM** is simpler and requires less bandwidth but suffers from quantization errors like slope overload and granular noise.
*   The **bit depth** (number of bits per sample in PCM) directly impacts the Signal-to-Quantization Noise Ratio (SQNR).
*   The **bit rate** determines the transmission channel capacity required.

---
