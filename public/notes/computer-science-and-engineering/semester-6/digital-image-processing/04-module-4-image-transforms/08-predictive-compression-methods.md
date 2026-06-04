---
title: "Predictive compression methods"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Transforms "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc65"
status: "completed"
scrapedAt: "2026-05-20T16:53:21.970Z"
---
# DIGITAL IMAGE PROCESSING - Module 4: Image Transforms - Predictive Compression Methods

These notes cover Predictive Compression Methods as part of the Image Transforms module in Digital Image Processing.

**Learning Outcomes:**

*   Understand the principles of predictive compression techniques.
*   Describe different types of predictive compression methods.
*   Explain the encoder and decoder architectures for predictive compression.
*   Analyze the performance of predictive compression based on compression ratio and error metrics.
*   Identify applications where predictive compression is most suitable.
*   Evaluate the advantages and disadvantages of predictive compression.

## 1. Introduction to Predictive Compression

*   **What is Predictive Compression?**
    *   Predictive compression, also known as Differential Pulse Code Modulation (DPCM), is a lossless or near-lossless data compression technique that exploits redundancy within an image.
    *   It doesn't directly encode the pixel values. Instead, it encodes the *difference* between the actual pixel value and a *predicted* value.
    *   The assumption is that neighboring pixels often have similar values, meaning the difference between them will be small, requiring fewer bits to represent.
*   **Key Concept: Redundancy Reduction**
    *   Predictive compression aims to reduce *spatial redundancy* in images. Spatial redundancy refers to the correlation between neighboring pixels.
*   **Lossless vs. Lossy**
    *   **Lossless Predictive Coding:** The predicted value can be calculated exactly at the decoder, allowing for perfect reconstruction of the original image.  The *error* is losslessly coded (e.g., using Huffman coding).
    *   **Lossy Predictive Coding:** A *quantizer* is introduced after calculating the prediction error.  The quantized error is then coded. This introduces irreversible information loss but allows for higher compression ratios.

## 2. Principles of Predictive Compression

*   **The Prediction Model:**  The core of predictive compression is the *prediction model*, which uses previously coded pixels to predict the value of the current pixel.
*   **Prediction Error (Differential Signal):** The difference between the actual pixel value and the predicted pixel value.
*   **Encoding the Error:**  Instead of encoding the original pixel value, we encode the prediction error, which ideally has a smaller range of values.
*   **Decoding:**  At the decoder, the same prediction model is used. The decoded pixel value is calculated by adding the received (encoded) prediction error to the predicted value.

## 3. Types of Predictive Compression Methods

*   **Linear Prediction:**
    *   Uses a linear combination of previously coded pixels to predict the current pixel.
    *   A general linear predictor has the form:
        *   `p(x, y) = Σ (a_i * f(x - i, y)) + Σ (b_j * f(x, y - j))`
        *   Where `p(x, y)` is the predicted value at location (x, y), `f(x - i, y)` and `f(x, y - j)` are neighboring pixel values, and `a_i` and `b_j` are prediction coefficients.
    *   **Examples of Linear Predictors:**
        *   **First-Order Predictor:**  `p(x, y) = f(x - 1, y)`  (Predicts using the pixel to the left).
        *   **Second-Order Predictor:** `p(x, y) = 0.5 * f(x - 1, y) + 0.5 * f(x, y - 1)` (Average of the pixel to the left and the pixel above).
        *   **Differential Pulse Code Modulation (DPCM):** A general framework that utilizes a predictor, a quantizer (for lossy compression), and an entropy encoder.
*   **Non-Linear Prediction:**
    *   Uses non-linear functions of previously coded pixels to predict the current pixel.
    *   These can be more complex than linear predictors and may be better at capturing certain types of image features.
    *   Examples include predictors that use median filtering or other non-linear operations.
*   **Adaptive Prediction:**
    *   The prediction model *adapts* based on the local characteristics of the image.
    *   The predictor coefficients are adjusted dynamically to minimize the prediction error.
    *   This can lead to better performance, especially for images with non-stationary statistics.
    *   Examples include Least Mean Squares (LMS) adaptive prediction.
*   **Delta Modulation:**
    *   A simplified form of DPCM where the prediction error is quantized to only two levels (positive or negative).
    *   Very simple to implement but typically achieves lower compression ratios.
*   **Differential Pulse Code Modulation (DPCM):** As previously mentioned, DPCM is a general framework, not a specific predictor.  It combines a predictor, a quantizer, and an entropy encoder.  The predictor can be linear or non-linear, and the quantizer controls the lossiness of the compression.  Huffman coding is often used as the entropy encoder.

## 4. Encoder and Decoder Architectures

*   **Encoder:**
    1.  **Prediction:** Use the prediction model to predict the value of the current pixel.
    2.  **Error Calculation:** Calculate the prediction error (difference between the actual and predicted value). `e = f(x, y) - p(x, y)`
    3.  **Quantization (Optional - Lossy):** Quantize the error `e_q = Q(e)`.  For lossless compression, skip this step and `e_q = e`.
    4.  **Encoding:** Encode the quantized error `e_q` using an entropy encoding technique (e.g., Huffman coding, arithmetic coding).
*   **Decoder:**
    1.  **Decoding:** Decode the encoded error `e_q`.
    2.  **Prediction:** Use the *same* prediction model used by the encoder to predict the value of the current pixel. `p(x, y)` (This is critical for proper reconstruction).
    3.  **Reconstruction:** Reconstruct the pixel value by adding the decoded error to the predicted value. `f'(x, y) = p(x, y) + e_q`
    4.  **Note:** `f'(x, y)` is the reconstructed pixel value.  In lossless compression, `f'(x, y) = f(x, y)`. In lossy compression, there may be differences due to quantization.

## 5. Performance Analysis

*   **Compression Ratio:**  Measures the reduction in data size achieved by the compression algorithm.
    *   `Compression Ratio = (Original Size) / (Compressed Size)`
    *   Higher compression ratio is better.
*   **Bit Rate (Bits Per Pixel - bpp):**  Indicates the average number of bits used to represent each pixel in the compressed image.
    *   `Bit Rate = (Compressed Size in bits) / (Number of Pixels)`
    *   Lower bit rate is better.
*   **Error Metrics (for Lossy Compression):**
    *   **Mean Squared Error (MSE):**  Measures the average squared difference between the original and reconstructed images.
        *   `MSE = (1 / (M * N)) * Σ Σ (f(x, y) - f'(x, y))^2` (Summation over all M rows and N columns).
    *   **Peak Signal-to-Noise Ratio (PSNR):**  A logarithmic measure of the ratio between the maximum possible power of a signal and the power of corrupting noise.  Higher PSNR indicates better quality.
        *   `PSNR = 10 * log10((MAX_I^2) / MSE)`
        *   `MAX_I` is the maximum possible pixel value (e.g., 255 for 8-bit grayscale images).
*   **Factors Affecting Performance:**
    *   **Prediction Model Accuracy:**  A more accurate prediction model will result in smaller prediction errors and better compression.
    *   **Quantization (for lossy compression):**  Finer quantization (more levels) reduces distortion but also reduces compression.
    *   **Entropy Encoding Efficiency:**  A more efficient entropy encoder (e.g., arithmetic coding vs. Huffman coding) will result in better compression.

## 6. Applications of Predictive Compression

*   **Image Archiving:** Storing images in a compressed format to save storage space.
*   **Image Transmission:**  Transmitting images over a network more efficiently by reducing the amount of data that needs to be sent.
*   **Medical Imaging:**  Where lossless or near-lossless compression is crucial to preserve diagnostic information.
*   **Remote Sensing:** Compressing satellite and aerial imagery.
*   **Video Compression (e.g., within codecs like MPEG):** Often used as part of more complex video coding schemes.

## 7. Advantages and Disadvantages

*   **Advantages:**
    *   Relatively simple to implement.
    *   Can achieve good compression ratios, especially for images with high spatial redundancy.
    *   Can be used for both lossless and lossy compression.
    *   Adaptive prediction can improve performance significantly.
*   **Disadvantages:**
    *   Performance depends heavily on the accuracy of the prediction model.
    *   Error propagation: In lossy compression, errors introduced by quantization can propagate through the image, especially if a simple predictor is used.  However, more complex predictors use multiple previous pixels, which can mitigate the effect of single-pixel errors.
    *   Can be computationally expensive, especially for complex adaptive prediction algorithms.
    *   Performance can be lower for images with low spatial redundancy (e.g., noisy images).

## 8. Important Points to Remember

*   The goal of predictive compression is to reduce the redundancy in the image data by encoding the difference between the actual and predicted pixel values.
*   The accuracy of the prediction model is crucial for achieving good compression.
*   Quantization is used to achieve lossy compression but introduces distortion.
*   Error propagation can be a problem in lossy predictive coding, but sophisticated predictors and error resilience techniques can mitigate this.
*   Adaptive prediction techniques can improve performance, but at the cost of increased complexity.

## 9. Practice Questions and Exercises

**Question 1:** Explain the difference between lossless and lossy predictive compression.

**Answer:** Lossless predictive compression reconstructs the original image perfectly. This is achieved by coding the prediction error without quantization. Lossy predictive compression introduces quantization of the prediction error, resulting in irreversible information loss but achieving higher compression ratios.

**Question 2:** Describe the function of the encoder and decoder in a DPCM system.

**Answer:** The DPCM encoder predicts the current pixel value based on previously encoded pixels, calculates the prediction error, quantizes the error (for lossy compression), and then encodes the quantized error using an entropy encoder. The DPCM decoder decodes the encoded error, predicts the current pixel value using the *same* prediction model as the encoder, and adds the decoded error to the predicted value to reconstruct the pixel.

**Question 3:**  What is the purpose of the quantizer in a DPCM system?

**Answer:** The quantizer is used to reduce the number of possible values for the prediction error. This introduces loss (distortion) but allows for a more efficient representation (fewer bits) of the error signal, leading to higher compression.  For lossless compression, the quantizer is effectively bypassed.

**Question 4:**  Consider a simple first-order predictor:  `p(x,y) = f(x-1, y)`.  Given the following pixel values in a row: `[100, 102, 105, 103, 106]`, what are the prediction errors? Assume `f(0,y) = 100` for the first pixel.

**Answer:**

*   Pixel 1 (100): Prediction Error = 100 - 100 = 0
*   Pixel 2 (102): Prediction Error = 102 - 100 = 2
*   Pixel 3 (105): Prediction Error = 105 - 102 = 3
*   Pixel 4 (103): Prediction Error = 103 - 105 = -2
*   Pixel 5 (106): Prediction Error = 106 - 103 = 3

**Question 5:** What are the advantages of adaptive prediction over non-adaptive prediction?

**Answer:** Adaptive prediction adjusts the prediction model based on the local characteristics of the image. This allows it to better capture the varying statistics of the image and reduce the prediction error compared to non-adaptive methods that use a fixed prediction model regardless of the image content.

**Question 6:** Explain the concept of error propagation in lossy predictive coding.  How can this be mitigated?

**Answer:** Error propagation occurs when an error introduced by the quantizer affects subsequent pixel predictions. Since the decoder relies on previously decoded pixels for prediction, a quantization error in one pixel can propagate to other pixels.  This can be mitigated by:

*   **Using higher-order predictors:** They use information from multiple neighboring pixels, so the impact of an error in a single pixel is lessened.
*   **Resetting the predictor:** Periodically resetting the predictor to a known value breaks the chain of error propagation.
*   **Using error-resilient coding techniques:** Including redundancy in the bitstream to allow the decoder to detect and correct errors.
*   **Reducing the quantization step size:** Finer quantization reduces the magnitude of individual quantization errors.

These notes provide a solid foundation for understanding Predictive Compression Methods in Digital Image Processing. Remember to review the concepts, practice the exercises, and consider further reading on specific algorithms and applications.
