---
title: "Shorten"
subject: "DATA COMPRESSION"
module: "Module 4: Audio Compression :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7a2"
status: "completed"
scrapedAt: "2026-05-20T16:44:50.545Z"
---
## DATA COMPRESSION - Module 4: Audio Compression - Topic: Shorten

**Introduction:**

Shorten is a lossless audio compression codec developed by Tony Robinson. It was a popular early lossless codec, particularly used for archiving and distributing CD-quality audio files. While not as prevalent today due to the emergence of more efficient codecs like FLAC, understanding Shorten provides valuable insights into the principles of lossless audio compression.

**Learning Outcomes:**

*   Understand the basic principles of Shorten's lossless audio compression.
*   Describe the algorithm's key features, including its prediction and coding methods.
*   Compare and contrast Shorten with other lossless audio codecs.
*   Recognize the limitations of Shorten compared to modern codecs.

**1. Basic Principles of Shorten:**

*   **Lossless Compression:**  Shorten achieves compression without discarding any audio information. The original audio can be perfectly reconstructed from the compressed file.
*   **Linear Predictive Coding (LPC):** Shorten leverages the redundancy inherent in audio signals, particularly speech and music, through LPC. LPC predicts the value of the current audio sample based on past samples.
*   **Residual Coding:**  The difference between the actual sample value and the predicted value (the "residual" or "prediction error") is encoded. Since the prediction is often accurate, the residual typically has a smaller dynamic range than the original signal. This smaller range is what allows for compression.
*   **Rice Coding:** Shorten uses Rice coding (a form of Golomb coding) to efficiently encode the residual values. Rice coding is particularly effective for data with a Laplacian distribution, which is common for residual values.
*   **Block-Based Processing:** Shorten processes audio data in blocks.  This allows it to adapt its prediction model and Rice coding parameters to the characteristics of each block.

**2. Key Features and Algorithm Description:**

*   **Prediction:**
    *   Shorten uses a linear predictor to estimate the current sample's value based on a weighted sum of previous samples.
    *   The predictor coefficients (weights) are calculated using a least-squares approach to minimize the prediction error over a block of audio.
    *   The number of previous samples used in the prediction (the "predictor order") can vary, typically up to 32.  Higher orders can potentially provide better prediction but increase complexity.
*   **Residual Calculation:**
    *   The residual is calculated by subtracting the predicted value from the actual sample value.
    *   `Residual = Actual Value - Predicted Value`
*   **Rice Coding:**
    *   Rice coding is a simple and efficient entropy coding technique suitable for exponentially decaying distributions, which are typical for residuals.
    *   It's parameterized by a "Rice parameter" (k).  The optimal 'k' value depends on the characteristics of the residual data and is chosen to minimize the average code length.
    *   The residual value is divided by 2^k. The quotient is encoded using unary code (e.g., if the quotient is 3, the unary code is 1110).
    *   The remainder (which has k bits) is encoded directly as a k-bit binary number.
*   **Header Information:**
    *   Shorten files include a header containing essential information, such as:
        *   Sample rate
        *   Number of channels (mono or stereo)
        *   Bits per sample (bit depth)
        *   Block size
        *   Predictor order
        *   Rice coding parameters (k values) for each block

**Example (Simplified):**

Imagine a small block of audio samples: `[100, 102, 105, 103]`

1.  **Prediction:** Let's say our predictor is very simple and just predicts the current sample as the previous sample.
2.  **Residual Calculation:**
    *   First sample (100): No prediction (or predicted as 0), residual = 100
    *   Second sample (102): Predicted as 100, residual = 102 - 100 = 2
    *   Third sample (105): Predicted as 102, residual = 105 - 102 = 3
    *   Fourth sample (103): Predicted as 105, residual = 103 - 105 = -2
    Residuals: `[100, 2, 3, -2]`
3.  **Rice Coding:** Let's say we choose k=1 for the smaller residuals. This means we divide by 2^1 = 2.
    *   Residual 2: Quotient = 2/2 = 1 (Unary: 10), Remainder = 0 (Binary: 0)  Code: 100
    *   Residual 3: Quotient = 3/2 = 1 (Unary: 10), Remainder = 1 (Binary: 1) Code: 101
    *   Residual -2: Requires special handling in Rice coding (typically mapping negative numbers to positive), but the principle remains the same.

**3. Comparison with Other Lossless Audio Codecs:**

*   **FLAC (Free Lossless Audio Codec):**  FLAC is generally more efficient than Shorten, achieving better compression ratios with similar encoding/decoding complexity.  FLAC also enjoys wider software and hardware support.  FLAC uses a more sophisticated prediction scheme and offers better handling of multi-channel audio.
*   **ALAC (Apple Lossless Audio Codec):**  Similar to FLAC in terms of efficiency and functionality. ALAC is developed by Apple and is native to the Apple ecosystem.
*   **WavPack:**  WavPack offers both lossless and lossy modes. In its lossless mode, it's comparable to FLAC and ALAC in terms of compression efficiency.
*   **Monkey's Audio (APE):**  Another lossless audio codec, known for its relatively high compression ratios but at the cost of higher encoding/decoding complexity.

**Comparison Table (Qualitative):**

| Feature          | Shorten | FLAC  | ALAC  | WavPack | Monkey's Audio |
|-------------------|---------|-------|-------|---------|----------------|
| Compression Ratio | Lower   | Higher| Higher| Higher  | Highest        |
| Complexity       | Lower   | Medium| Medium| Medium  | Higher         |
| Popularity       | Low     | High  | Medium| Medium  | Low            |
| Open Source       | No      | Yes   | Yes   | Yes     | No             |
| Multi-channel Support| Limited  | Good  | Good  | Good    | Good           |

**4. Limitations of Shorten:**

*   **Lower Compression Efficiency:** Compared to modern codecs like FLAC, ALAC, and WavPack, Shorten typically achieves lower compression ratios, resulting in larger file sizes.
*   **Limited Multi-channel Support:** Shorten was primarily designed for stereo audio and doesn't handle multi-channel audio (e.g., 5.1 surround sound) effectively.
*   **No Longer Actively Maintained:**  The Shorten project is no longer actively developed or maintained, making it less attractive for new applications.
*   **Proprietary Format:** Shorten is not a fully open-source codec, which limits its adoption and further development.
*   **Decoding Speed:** Decoding is slower when compared to other codecs like FLAC.

**Important Points to Remember:**

*   Shorten is a *lossless* audio codec.
*   It uses *linear predictive coding (LPC)* to exploit redundancy in audio signals.
*   The *residual* (prediction error) is encoded using *Rice coding*.
*   Modern codecs like *FLAC* generally offer better compression efficiency and features.
*   Shorten's popularity has declined significantly.

**Practice Questions/Exercises:**

1.  **What type of audio compression does Shorten employ?**
    *   Answer: Lossless compression.

2.  **What is the purpose of Linear Predictive Coding (LPC) in Shorten?**
    *   Answer: To predict the current audio sample based on past samples, allowing for the efficient encoding of the residual (prediction error).

3.  **What coding method is used to encode the residual values in Shorten?**
    *   Answer: Rice coding (a form of Golomb coding).

4.  **Why is FLAC generally preferred over Shorten today?**
    *   Answer: FLAC offers better compression efficiency, wider software and hardware support, and more features (like better multi-channel support).

5.  **True or False: Shorten is still actively maintained and updated.**
    *   Answer: False.

6.  **Explain the concept of "residual" in the context of Shorten's compression algorithm.**
    *   Answer: The residual is the difference between the actual audio sample value and the value predicted by the LPC algorithm. It represents the error in the prediction, and because the prediction is often accurate, the residual typically has a smaller dynamic range than the original signal, enabling compression.

7. **How does Shorten handle audio data?**
 * Answer: Shorten processes the audio data in blocks which allows for the prediction model and Rice coding parameters to be adapted to the characteristics of each block.
