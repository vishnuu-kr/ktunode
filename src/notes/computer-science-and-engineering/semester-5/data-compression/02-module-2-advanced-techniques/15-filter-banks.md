---
title: "Filter Banks"
subject: "DATA COMPRESSION"
module: "Module 2: Advanced Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b791"
status: "completed"
scrapedAt: "2026-05-20T16:44:39.985Z"
---
# DATA COMPRESSION - Module 2: Advanced Techniques - Filter Banks

## Introduction

These notes cover the topic of Filter Banks within the broader context of data compression. Filter Banks are a crucial technique for signal decomposition, leading to efficient coding in many compression algorithms. We'll explore the core concepts, types, and applications of filter banks.

## Learning Outcomes

By the end of this section, you should be able to:

*   Understand the fundamental principles of filter banks.
*   Differentiate between different types of filter banks (e.g., analysis and synthesis banks, perfect reconstruction).
*   Explain the role of subband coding in compression.
*   Describe the concept of aliasing and how it's mitigated in filter bank design.
*   Analyze the performance of different filter bank implementations.
*   Understand the application of filter banks in audio and image compression (briefly).

## 1. Fundamental Principles of Filter Banks

*   **Definition:** A filter bank is a set of filters (usually bandpass filters) that decompose a signal into multiple subbands or frequency components.  It consists of two main parts:
    *   **Analysis Filter Bank:** Decomposes the input signal into multiple subbands.
    *   **Synthesis Filter Bank:** Reconstructs the original signal (or a close approximation) from the subbands.

*   **Motivation for using Filter Banks in Compression:**

    *   **Subband Coding:** Dividing a signal into frequency bands allows for selective coding of each band.  Some bands may contain more important information than others, or may be perceptually more sensitive.  This allows allocating more bits to the more important subbands and fewer to the less important ones, resulting in better compression efficiency.
    *   **Removal of Redundancy:**  Filter banks can help remove statistical redundancies within the signal.  For example, in audio, energy is often concentrated in lower frequencies.  By separating these frequencies, we can exploit this non-uniform energy distribution for better compression.
    *   **Perceptual Coding:** Some filter banks are designed to mimic the human auditory or visual system. This allows us to remove information that is perceptually irrelevant, further improving compression.

*   **Block Diagram:**

    ```
    Input Signal (x[n])
         |
         V
    [Analysis Filter Bank: H0[z], H1[z], ..., HM-1[z]]
         |
         V
    [Downsampling by factor M] (e.g., decimation)
         |
         V
    Subband Signals (y0[n], y1[n], ..., yM-1[n])
         |   (Transmission/Storage/Quantization/Encoding)
         |
         V
    [Subband Signals (y0'[n], y1'[n], ..., yM-1'[n]) - After Quantization/Encoding]
         |
         V
    [Upsampling by factor M] (e.g., interpolation)
         |
         V
    [Synthesis Filter Bank: G0[z], G1[z], ..., GM-1[z]]
         |
         V
    Output Signal (x'[n]) - Reconstructed Signal
    ```

    *   **H<sub>k</sub>[z]:** Transfer function of the k-th analysis filter.
    *   **G<sub>k</sub>[z]:** Transfer function of the k-th synthesis filter.
    *   **M:** Number of subbands (decimation/interpolation factor).

## 2. Types of Filter Banks

*   **Analysis Filter Bank:** Consists of M filters, H<sub>0</sub>[z], H<sub>1</sub>[z], ..., H<sub>M-1</sub>[z], which split the input signal into M subband signals. Often followed by downsampling.

*   **Synthesis Filter Bank:** Consists of M filters, G<sub>0</sub>[z], G<sub>1</sub>[z], ..., G<sub>M-1</sub>[z], which reconstruct the signal from the M subband signals. Usually preceded by upsampling.

*   **Critical Sampling:** When the subband signals are downsampled by a factor of M (where M is the number of subbands), the filter bank is said to be critically sampled.  This is the most efficient in terms of data rate, but also the most challenging to design without aliasing.

*   **Oversampled Filter Banks:** Downsampling factor is less than the number of subbands.  Leads to redundancy, but can simplify filter design and provide robustness to errors.

*   **Perfect Reconstruction (PR) Filter Banks:** These filter banks are designed so that the reconstructed signal is exactly the same as the original signal (x'[n] = x[n]), except potentially for a delay.  Achieving perfect reconstruction is a primary goal. The condition for perfect reconstruction can be expressed in the Z-domain.

    *   **Near-Perfect Reconstruction (NPR) Filter Banks:**  A compromise; these filter banks reconstruct the signal very closely to the original, but not perfectly.  They often offer a better trade-off between complexity and reconstruction quality.

*   **Quadrature Mirror Filter (QMF) Banks:** A specific type of filter bank where the analysis and synthesis filters have a specific relationship.  They are commonly used due to their relative simplicity, although they often suffer from aliasing issues.  The filters are designed so that one is the mirror image of the other around a certain frequency (typically π/2).

*   **Cosine Modulated Filter Banks (CMFB):**  Another popular type of filter bank.  They are derived from a prototype filter by modulating it with cosine functions. This simplifies the design process and allows for efficient implementation.  They are widely used in audio coding standards like AAC.

## 3. Subband Coding

*   **Process:** Subband coding is a data compression technique that uses filter banks to divide the signal into multiple subbands, and then encodes each subband separately.
*   **Steps:**
    1.  **Analysis:** Use an analysis filter bank to split the signal into subbands.
    2.  **Downsampling:**  Reduce the sampling rate of each subband signal (typically by a factor of M, where M is the number of subbands).
    3.  **Quantization:** Quantize each subband signal.  The number of bits allocated to each subband is determined by its importance or perceptual relevance.
    4.  **Encoding:** Encode the quantized subband signals using an appropriate entropy coding technique (e.g., Huffman coding, arithmetic coding).
    5.  **Transmission/Storage:** Transmit or store the encoded data.
    6.  **Decoding:** Decode the encoded data.
    7.  **Dequantization:** Dequantize each subband signal.
    8.  **Upsampling:** Increase the sampling rate of each subband signal.
    9.  **Synthesis:** Use a synthesis filter bank to reconstruct the signal from the subband signals.

*   **Bit Allocation:**  A crucial part of subband coding is determining how many bits to allocate to each subband. Common strategies include:

    *   **Equal Bit Allocation:** Assign the same number of bits to each subband. Simple but not optimal.
    *   **Proportional Bit Allocation:** Allocate bits proportionally to the energy in each subband.
    *   **Perceptual Bit Allocation:** Allocate bits based on psychoacoustic models, which take into account the human auditory system's sensitivity to different frequencies. This allows for more efficient compression by discarding information that is perceptually irrelevant.

## 4. Aliasing

*   **Definition:** Aliasing is a distortion that occurs when downsampling a signal without properly bandlimiting it. It causes high-frequency components of the signal to be misinterpreted as lower frequencies, leading to artifacts in the reconstructed signal.
*   **Why it happens in Filter Banks:** Downsampling after the analysis filters can introduce aliasing if the filters do not perfectly bandlimit the signals. The spectral replicas created by downsampling overlap and corrupt the desired signal.
*   **How to Mitigate Aliasing:**

    *   **Anti-Aliasing Filters:** Ideal low-pass filters before downsampling would completely eliminate aliasing. However, ideal filters are not realizable.
    *   **Filter Bank Design:** Careful design of the analysis and synthesis filters is crucial for minimizing or canceling aliasing.  Specific filter bank designs, like QMF banks (with certain constraints) and perfect reconstruction filter banks, are designed to minimize or eliminate aliasing.  Perfect reconstruction filter banks are specifically designed to cancel aliasing terms during the reconstruction process.

*   **Aliasing Cancellation Condition:**  In perfect reconstruction filter banks, the aliasing terms introduced by downsampling and upsampling are designed to cancel each other out during the synthesis stage.  This is a key aspect of their design.

## 5. Performance Analysis of Filter Banks

*   **Metrics:**
    *   **Reconstruction Error:** Measures the difference between the original signal and the reconstructed signal. Ideally, the reconstruction error should be minimized.  Can be measured using metrics like Signal-to-Noise Ratio (SNR) or Mean Squared Error (MSE).
    *   **Computational Complexity:**  Refers to the amount of computational resources (e.g., number of multiplications, additions) required to implement the filter bank.  Lower complexity is desirable for real-time applications.
    *   **Delay:**  The time delay introduced by the filter bank.  Lower delay is important for real-time applications, especially interactive audio or video.
    *   **Coding Gain:** Measures the improvement in compression efficiency achieved by using a filter bank compared to directly quantizing the original signal. Higher coding gain is desirable.  Coding Gain = σ<sup>2</sup><sub>x</sub> /  (geometric mean of σ<sup>2</sup><sub>yk</sub>), where σ<sup>2</sup><sub>x</sub> is the variance of the input signal and σ<sup>2</sup><sub>yk</sub> are the variances of the subband signals.
    *   **Stopband Attenuation:**  The amount of attenuation provided by the filters in their stopband. Higher stopband attenuation reduces aliasing and improves reconstruction quality.
    *   **Passband Ripple:** The amount of variation in the filter's gain within its passband. Lower passband ripple results in less distortion of the desired signal.

*   **Factors Affecting Performance:**

    *   **Filter Design:** The choice of filter coefficients significantly impacts the performance of the filter bank.
    *   **Number of Subbands:** Increasing the number of subbands can improve compression efficiency, but also increases computational complexity.
    *   **Downsampling Factor:** The downsampling factor affects the amount of data reduction and the potential for aliasing.
    *   **Quantization Strategy:** The choice of quantization method and bit allocation strategy significantly affects the compression ratio and reconstruction quality.

## 6. Applications of Filter Banks in Audio and Image Compression

*   **Audio Compression:**

    *   **MPEG Audio Coding (e.g., MP3, AAC):** Uses filter banks (often CMFB) to split the audio signal into subbands, allowing for perceptual coding and efficient compression.
    *   **Dolby Digital (AC-3):** Employs a hybrid filter bank approach.

*   **Image Compression:**

    *   **JPEG 2000:** Uses wavelet transforms, which can be implemented using filter banks, to decompose the image into different frequency bands.  This allows for progressive transmission and better compression performance than JPEG.
    *   **HEIF (High Efficiency Image File Format):** Often utilizes similar wavelet-based techniques as JPEG 2000.

## Important Points to Remember

*   Filter banks are essential for subband coding and efficient data compression.
*   Perfect reconstruction is a key goal, but near-perfect reconstruction is often a good compromise.
*   Aliasing is a significant issue that must be addressed in filter bank design.
*   Performance metrics like reconstruction error, computational complexity, and coding gain are used to evaluate filter bank performance.
*   Filter banks are widely used in audio and image compression standards.

## Practice Questions and Exercises

**Question 1:** What are the two main components of a filter bank, and what is the purpose of each?

**Answer:** The two main components are the analysis filter bank and the synthesis filter bank. The analysis filter bank decomposes the input signal into subbands, while the synthesis filter bank reconstructs the original signal from the subbands.

**Question 2:** Explain the concept of aliasing and how it can occur in a filter bank system. How can it be mitigated?

**Answer:** Aliasing is a distortion that occurs when downsampling a signal without proper bandlimiting, causing high-frequency components to be misinterpreted as lower frequencies. It can occur in filter banks because downsampling after the analysis filters creates spectral replicas that can overlap. Mitigation techniques include using anti-aliasing filters and designing the filter bank to cancel aliasing terms.

**Question 3:** What is perfect reconstruction (PR) in the context of filter banks?  What are the advantages of PR filter banks?

**Answer:** Perfect reconstruction means the reconstructed signal is exactly the same as the original signal (possibly with a delay). The advantage of PR filter banks is that there is no distortion introduced by the filter bank itself, allowing for higher fidelity compression.

**Question 4:** Give an example of an audio compression standard that uses filter banks. Briefly explain how filter banks are used in this standard.

**Answer:** AAC (Advanced Audio Coding) uses filter banks, often Cosine Modulated Filter Banks (CMFB), to divide the audio signal into frequency subbands. This allows for perceptual coding, where the quantizer can allocate bits more efficiently based on the audibility of different frequencies, resulting in higher compression efficiency without significant perceived loss of quality.

**Question 5:** Calculate the coding gain for a signal with variance σ<sup>2</sup><sub>x</sub> = 10, after decomposing it into two subbands with variances σ<sup>2</sup><sub>y0</sub> = 8 and σ<sup>2</sup><sub>y1</sub> = 2.

**Answer:** Coding Gain = σ<sup>2</sup><sub>x</sub> / (geometric mean of σ<sup>2</sup><sub>yk</sub>) = 10 / √(8 * 2) = 10 / √16 = 10 / 4 = 2.5

**Exercise:**

Design a simple 2-band filter bank. Assume ideal low-pass and high-pass filters. Describe the frequency response of the analysis and synthesis filters. What are the potential problems with this design when used with real-world signals? (Hint: Consider aliasing). How could you improve the design to mitigate these problems?
