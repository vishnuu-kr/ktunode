---
title: "Quantization."
subject: "DATA COMPRESSION"
module: "Module 1: Basic Compression Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b779"
status: "completed"
scrapedAt: "2026-05-20T16:44:23.489Z"
---
# DATA COMPRESSION: Module 1 - Basic Compression Techniques: Quantization

## Learning Outcomes:

*   Understand the concept of quantization and its role in data compression.
*   Differentiate between scalar and vector quantization.
*   Explain uniform and non-uniform quantization techniques.
*   Analyze the impact of quantization on data quality (distortion).
*   Apply quantization techniques to various data types (audio, image).
*   Identify the trade-offs between compression ratio and data quality in quantization.

## 1. Introduction to Quantization

*   **Definition:** Quantization is a lossy compression technique that reduces the number of distinct values in a data set, thereby reducing the amount of storage required to represent the data.  It essentially maps a continuous or large set of values to a smaller, discrete set of values.

*   **Role in Data Compression:** It achieves compression by representing a range of input values with a single representative value (quantization level). This reduction in the number of possible values leads to a smaller bit rate required for encoding.

*   **Lossy Nature:** Since quantization involves approximating original values, it inherently introduces distortion and results in loss of information. The degree of loss depends on the quantization step size.

*   **Applications:** Widely used in audio, image, and video compression. Examples include:
    *   Converting analog audio signals to digital signals (Analog-to-Digital Conversion - ADC).
    *   Compressing images by reducing the number of colors.
    *   Video encoding (e.g., MPEG, H.264).

## 2. Key Concepts and Definitions

*   **Quantization Step Size (Δ):** The distance between adjacent quantization levels. A smaller step size generally leads to lower distortion but results in less compression.  A larger step size leads to higher compression but also higher distortion.

*   **Quantization Levels:** The discrete set of values that represent the input range.  These are the representative values to which input values are mapped.

*   **Quantizer:** The function or algorithm that performs the quantization process. It maps input values to their corresponding quantization levels.

*   **Reconstruction Levels:** Values used to represent the dequantized signal. Often (but not always) the midpoint of the quantization intervals.

*   **Quantization Error (Distortion):** The difference between the original input value and its quantized value.  It's a measure of the information lost due to quantization.

*   **Dynamic Range:** The range of possible input values.

*   **Bit Rate:** The number of bits required to represent each quantized value.  Determined by the number of quantization levels.  For example, if there are 256 quantization levels, each level can be represented with 8 bits.

## 3. Types of Quantization

### 3.1 Scalar Quantization

*   **Definition:**  Each individual data sample is quantized independently.
*   **Process:** Each input value is compared to a set of thresholds, and based on the threshold exceeded, the input is mapped to the corresponding quantization level.
*   **Advantages:** Simple to implement.
*   **Disadvantages:** Doesn't exploit correlation between data samples, leading to potentially lower compression efficiency compared to vector quantization.
*   **Example:**
    *   Consider a signal with values ranging from 0 to 10. We can quantize it into 5 levels: {1, 3, 5, 7, 9}.
    *   Values between 0 and 2 are quantized to 1.
    *   Values between 2 and 4 are quantized to 3.
    *   And so on.

### 3.2 Vector Quantization (VQ)

*   **Definition:** A group of data samples (a vector) is quantized as a single unit.
*   **Process:** A codebook is created consisting of representative vectors (code vectors). The input vector is compared to each code vector in the codebook, and the closest code vector is selected to represent the input.  The index of the closest code vector is transmitted or stored.
*   **Advantages:** Can exploit correlation between data samples, leading to better compression efficiency and lower distortion compared to scalar quantization.
*   **Disadvantages:** More complex to implement, requires training to generate the codebook. Computational complexity increases significantly with the size of the vectors and the codebook.
*   **Example:**
    *   Image compression:  Dividing an image into 4x4 blocks (vectors) and comparing each block to a codebook of pre-defined patterns.
    *   Audio compression: Grouping consecutive audio samples into vectors and quantizing them together.

## 4. Uniform and Non-Uniform Quantization

### 4.1 Uniform Quantization

*   **Definition:** The quantization step size (Δ) is constant across the entire dynamic range of the input.
*   **Advantages:** Simple to implement.
*   **Disadvantages:** Inefficient when the probability distribution of input values is non-uniform (i.e., some values occur more frequently than others).  Assigns equal number of quantization levels regardless of the statistical distribution of input signal.
*   **Formula:** `Quantized_Value = floor(Input_Value / Δ) * Δ + Δ/2` (for midpoint reconstruction)

### 4.2 Non-Uniform Quantization

*   **Definition:** The quantization step size varies depending on the input value. Smaller step sizes are used in regions where the input values are more likely to occur, and larger step sizes are used where input values are less likely.
*   **Advantages:**  Provides better performance (lower distortion) than uniform quantization when the input data has a non-uniform distribution.
*   **Disadvantages:** More complex to implement than uniform quantization.
*   **Techniques:**
    *   **Logarithmic Quantization (e.g., μ-law and A-law):** Used in audio compression.  Based on logarithmic compression of the input signal before uniform quantization. Sensitive to low-amplitude signals.
    *   **Companding:** Combines compression and expansion. A non-linear compression function is applied before uniform quantization, and an inverse expansion function is applied after dequantization.
    *   **Adaptive Quantization:** Step size is dynamically adjusted based on the characteristics of the input signal.

## 5. Impact of Quantization on Data Quality (Distortion)

*   **Quantization Noise:** The error introduced by quantization is often perceived as noise.
*   **Signal-to-Noise Ratio (SNR):**  A measure of the quality of the quantized signal.  A higher SNR indicates lower distortion and better quality.
*   **Distortion Measures:**
    *   **Mean Squared Error (MSE):** The average squared difference between the original and quantized values.
    *   **Peak Signal-to-Noise Ratio (PSNR):** Commonly used to evaluate the quality of image and video compression.

*   **Trade-offs:**
    *   **Compression Ratio vs. Data Quality:**  Increasing the compression ratio (by using a larger step size or fewer quantization levels) leads to higher distortion and reduced data quality. Decreasing the compression ratio (by using a smaller step size or more quantization levels) leads to lower distortion but reduces the compression efficiency.

## 6. Applying Quantization to Various Data Types

### 6.1 Audio

*   **PCM (Pulse Code Modulation):** A common technique for converting analog audio signals to digital signals.  It involves sampling, quantization, and encoding.
*   **μ-law and A-law Companding:**  Used to improve the dynamic range of audio signals.
*   **Adaptive Quantization:** Adjusts the quantization step size based on the volume of the audio signal.

### 6.2 Image

*   **Color Quantization:** Reducing the number of colors in an image to reduce the file size.
*   **JPEG Compression:** Uses quantization in the Discrete Cosine Transform (DCT) domain to reduce the high-frequency components of the image.
*   **Vector Quantization:** Can be used to compress images by dividing them into blocks and quantizing the blocks using a codebook.

## 7. Practice Questions and Exercises

1.  **What is quantization and why is it used in data compression?**
    *   *Answer:* Quantization is the process of mapping a continuous or large set of values to a smaller, discrete set of values. It's used in data compression to reduce the number of distinct values, thereby reducing the storage requirements.

2.  **Explain the difference between scalar and vector quantization.**
    *   *Answer:* Scalar quantization quantizes each individual data sample independently, while vector quantization quantizes a group of data samples (a vector) as a single unit, exploiting correlation between samples.

3.  **What is the advantage of non-uniform quantization over uniform quantization?**
    *   *Answer:* Non-uniform quantization provides better performance (lower distortion) than uniform quantization when the input data has a non-uniform distribution by using smaller step sizes in regions where the input values are more likely to occur.

4.  **Explain how quantization affects the quality of the reconstructed data.**
    *   *Answer:* Quantization introduces distortion (quantization noise) and reduces the quality of the reconstructed data. The amount of distortion depends on the quantization step size; a larger step size leads to higher distortion.

5.  **Calculate the number of bits required to represent a signal quantized into 64 levels.**
    *   *Answer:* 6 bits (since 2<sup>6</sup> = 64).

6.  **Describe the trade-off between compression ratio and data quality in quantization.**
    *   *Answer:* Increasing the compression ratio through quantization leads to higher distortion and reduced data quality. Decreasing the compression ratio results in lower distortion but also less compression.

7.  **In Vector Quantization, what is a codebook and what role does it play?**
    *   *Answer:* A codebook in VQ is a collection of representative vectors (code vectors). During quantization, the input vector is compared to each code vector, and the closest one is selected to represent the input. The codebook allows for efficient representation of recurring patterns or structures in the data.

## 8. Important Points to Remember

*   Quantization is a **lossy** compression technique.
*   The choice of quantization method (scalar vs. vector, uniform vs. non-uniform) depends on the **characteristics of the data** and the desired **trade-off between compression ratio and data quality**.
*   **Quantization step size** is a critical parameter that affects both compression ratio and distortion.
*   **Vector quantization** can achieve better compression and lower distortion than scalar quantization but is more complex.
*   **Understanding the data distribution** is crucial for selecting the appropriate quantization strategy.
