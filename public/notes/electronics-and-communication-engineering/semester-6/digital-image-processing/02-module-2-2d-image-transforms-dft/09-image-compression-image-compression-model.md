---
title: "Image Compression: Image compression model"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee19"
status: "completed"
scrapedAt: "2026-05-23T18:00:35.047Z"
---
# DIGITAL IMAGE PROCESSING - Module 2: 2D Image Transforms: DFT

## Topic: Image Compression: Image Compression Model

**Course Outcomes Addressed:**

*   **CO3: Illustrate the various schemes of image compression (Knowledge Level: K3)** - This module directly addresses the fundamental model and principles of image compression, a key scheme.

**Learning Outcomes:**

*   Understand the fundamental principles of image compression.
*   Identify the key components of a generic image compression model.
*   Describe the role of each component in the compression process.
*   Differentiate between lossless and lossy compression techniques.
*   Relate the concepts of data redundancy and psychovisual redundancy to image compression.

---

### 1. Introduction to Image Compression

Image compression is the process of reducing the amount of data required to represent a digital image. This is crucial for efficient storage and transmission of images, especially in applications like digital photography, medical imaging, and telecommunications.

**Key Concepts:**

*   **Redundancy:** Unnecessary information in an image that can be removed without significant loss of visual quality.
*   **Psychovisual Redundancy:** Information that is not perceptible to the human visual system.
*   **Data Redundancy:** Information that is not related to the visual content of the image.

**Goal of Image Compression:** To minimize the number of bits used to represent an image while maintaining acceptable visual quality.

---

### 2. The Need for Image Compression

*   **Storage:** Digital images, especially high-resolution ones, consume significant storage space. Compression reduces this requirement.
*   **Transmission:** Transmitting large image files over networks (like the internet) can be slow and consume substantial bandwidth. Compression speeds up transmission.
*   **Bandwidth Efficiency:** In applications like video conferencing or streaming, efficient bandwidth usage is critical.

---

### 3. Types of Image Compression

Image compression techniques are broadly categorized into two types:

#### 3.1. Lossless Compression

*   **Definition:** In lossless compression, the original image can be perfectly reconstructed from the compressed data. No information is lost during the compression process.
*   **Mechanism:** Exploits data redundancy by using techniques like run-length encoding (RLE), Huffman coding, and Lempel-Ziv (LZ) coding.
*   **Compression Ratio:** Generally lower than lossy compression.
*   **Applications:** Medical imaging, technical drawings, archival purposes where perfect fidelity is paramount.
*   **Example:** PNG, GIF (for limited colors), lossless JPEG.

#### 3.2. Lossy Compression

*   **Definition:** In lossy compression, some information is permanently discarded during the compression process to achieve higher compression ratios. The reconstructed image is an approximation of the original.
*   **Mechanism:** Exploits both data redundancy and psychovisual redundancy. It often involves transforming the image, quantizing the transformed coefficients, and then encoding the quantized data.
*   **Compression Ratio:** Can achieve significantly higher compression ratios than lossless methods.
*   **Applications:** Digital photography (JPEG), video, internet streaming where slight loss of detail is acceptable for significant size reduction.
*   **Example:** JPEG, MPEG, H.264.

**Important Point:** The choice between lossless and lossy compression depends on the application's requirements for fidelity versus compression ratio.

---

### 4. Generic Image Compression Model

A generic image compression model consists of two main stages: **Compression** and **Decompression**. Both stages have sub-components.

**Figure (Conceptual):**

```
+---------------------+       +---------------------+       +---------------------+
|     Image           | ----> |     Compressor      | ----> |   Compressed Data   |
|     (Input)         |       |                     |       |                     |
+---------------------+       +---------+-----------+       +---------------------+
                                        |
                                        | (e.g., Channel)
                                        |
                                        v
+---------------------+       +---------------------+       +---------------------+
|   Compressed Data   | ----> |     Decompressor    | ----> |     Restored Image  |
|     (Received)      |       |                     |       |     (Output)        |
+---------------------+       +---------------------+       +---------------------+
```

**Key Components of the Compressor:**

1.  **Source Encoder:** This is the core of the compression process. It aims to reduce the data redundancy present in the image.
2.  **Channel Encoder (Optional but common):** This component adds redundancy to the compressed data to enable error detection and correction during transmission or storage. This is crucial for robust transmission, especially over noisy channels.

**Key Components of the Decompressor:**

1.  **Channel Decoder:** This component attempts to detect and correct errors introduced in the compressed data (if channel encoding was used).
2.  **Source Decoder:** This component reconstructs the image from the compressed data.

---

### 5. Detailed Breakdown of Compression Components

#### 5.1. Source Encoder

The source encoder is further broken down into several stages, which are often performed in a specific order:

1.  **Preprocessing (Optional but beneficial):**
    *   **Purpose:** To prepare the image for more effective compression by reducing noise or enhancing certain features.
    *   **Examples:** Noise reduction filters (e.g., median filter), contrast enhancement.

2.  **Transformation:**
    *   **Purpose:** To convert the image data into a more decorrelated or perceptually relevant domain. This concentrates most of the image's energy into a few coefficients, making it easier to compress.
    *   **Key Idea:** Exploit correlation between neighboring pixels. In the spatial domain, pixels are highly correlated. Transforming the image can decorrelate these pixels.
    *   **Example Techniques:**
        *   **Discrete Cosine Transform (DCT):** Widely used in JPEG compression. It transforms spatial domain pixel values into frequency domain coefficients. Lower frequency coefficients represent the general brightness and contrast of larger image regions, while higher frequency coefficients represent finer details and edges. Most of the image's energy is concentrated in the low-frequency DCT coefficients.
        *   **Discrete Fourier Transform (DFT):** While not as commonly used for image *compression* directly as DCT, understanding DFT is fundamental to understanding frequency domain analysis, which is a basis for many transform-based compression techniques. DFT decomposes an image into sinusoidal components of different frequencies and orientations.
        *   **Wavelet Transform:** Offers better spatial localization than DCT, making it suitable for capturing both frequency and spatial information. Used in JPEG 2000.

    **Learning Outcome Connection (CO2):** Understanding transformations like DFT is crucial for analyzing compression schemes.

3.  **Quantization:**
    *   **Purpose:** This is the primary step responsible for lossy compression. It reduces the precision of the transformed coefficients, discarding information that is less perceptible to the human eye.
    *   **Mechanism:** Divides the coefficients by a quantization step size and rounds the result to the nearest integer. Larger step sizes lead to more aggressive quantization and higher compression but greater loss of detail.
    *   **Types:**
        *   **Uniform Quantization:** Same step size for all coefficients.
        *   **Non-uniform Quantization:** Different step sizes for different coefficients, typically using smaller step sizes for perceptually important coefficients (e.g., low-frequency coefficients) and larger step sizes for less important ones (e.g., high-frequency coefficients).
    *   **Example (JPEG):** In JPEG, a quantization table is used, where each coefficient from the DCT is divided by a corresponding value in the table and then rounded. The quantization table is designed based on psychovisual models.

4.  **Coding (Entropy Coding):**
    *   **Purpose:** To further reduce data redundancy by assigning shorter codes to frequently occurring symbols (coefficients, transformed values) and longer codes to less frequent ones. This step is typically lossless.
    *   **Example Techniques:**
        *   **Run-Length Encoding (RLE):** Effective for images with large areas of constant color (e.g., graphics). It replaces sequences of identical pixels with a count and the pixel value.
        *   **Huffman Coding:** Assigns variable-length binary codes to symbols based on their probabilities. More frequent symbols get shorter codes.
        *   **Arithmetic Coding:** Represents the entire image as a single fraction, achieving higher compression ratios than Huffman coding by assigning codes more efficiently.

#### 5.2. Channel Encoder (Optional)

*   **Purpose:** To add error-detecting or error-correcting capabilities to the compressed data. This is important for reliable transmission over noisy channels.
*   **Mechanism:** Adds parity bits or other redundant information according to specific coding schemes (e.g., Hamming codes, Reed-Solomon codes).
*   **Impact:** Increases the size of the compressed data but improves resilience to errors.

---

### 6. Detailed Breakdown of Decompression Components

#### 6.1. Channel Decoder (Optional)

*   **Purpose:** To detect and potentially correct errors that may have occurred during transmission or storage.
*   **Mechanism:** Uses the added redundant information to identify and rectify errors.

#### 6.2. Source Decoder

The source decoder essentially reverses the operations performed by the source encoder:

1.  **Decoding (Entropy Decoding):**
    *   **Purpose:** To reconstruct the quantized coefficients from the compressed bitstream using the same coding scheme (e.g., Huffman decoding, arithmetic decoding).

2.  **Dequantization:**
    *   **Purpose:** To reverse the quantization process. In lossy compression, this is an irreversible step. The reconstructed coefficients are typically multiplied by the same quantization step sizes used during compression.
    *   **Important Point:** Since quantization involves rounding, the original precise coefficient values cannot be recovered perfectly.

3.  **Inverse Transformation:**
    *   **Purpose:** To transform the reconstructed coefficients back into the spatial domain, yielding the restored image.
    *   **Example Techniques:** Inverse Discrete Cosine Transform (IDCT) for JPEG, Inverse Wavelet Transform for JPEG 2000.

4.  **Postprocessing (Optional):**
    *   **Purpose:** To reduce artifacts introduced by the compression process (e.g., blocking artifacts in JPEG) and to improve the visual quality of the restored image.
    *   **Examples:** Deblocking filters.

---

### 7. Redundancy Types in Images

Understanding the types of redundancy is key to designing effective compression algorithms.

#### 7.1. Data Redundancy

*   **Definition:** Redundancy arising from the statistical properties of the image signal itself. It refers to the fact that the information in an image can be represented more efficiently.
*   **Types:**
    *   **Inter-pixel Redundancy:** Adjacent pixels in an image are often highly correlated. For example, in a smooth region, neighboring pixels will have very similar intensity values. This correlation can be exploited by transforms or prediction schemes.
    *   **Model Redundancy:** When the model used to represent the image is not optimal. For example, if we assume a uniform distribution of pixel values when the actual distribution is highly skewed.
    *   **Psychovisual Redundancy:** (Discussed separately below).

#### 7.2. Psychovisual Redundancy

*   **Definition:** Redundancy due to the limitations and characteristics of the human visual system (HVS). The HVS is not equally sensitive to all types of visual information.
*   **Exploitation:** Lossy compression techniques exploit psychovisual redundancy by removing or reducing information that the HVS is unlikely to perceive.
*   **Examples:**
    *   **Sensitivity to Luminance vs. Chrominance:** The HVS is more sensitive to changes in luminance (brightness) than in chrominance (color). This is why color images are often converted to YCbCr (Luminance Y, Chrominance Cb, Chrominance Cr) and the chrominance components are subsampled (e.g., 4:2:2 or 4:2:0).
    *   **Sensitivity to High Frequencies:** The HVS is less sensitive to high-frequency details compared to low-frequency information, especially in smooth regions. Quantization aggressively discards high-frequency coefficients.
    *   **Masking Effects:** Visual information in textured or noisy regions can mask the presence of other details.

**Textbook Reference (Gonzalez & Woods, 4th Ed., Chapter 8 - Image Compression):** This chapter provides a thorough discussion of redundancy types and their role in compression. It emphasizes how transforms help decorrelate pixels, making them more amenable to efficient coding.

---

### 8. Relationship to Discrete Fourier Transform (DFT)

While DCT is more prevalent in image compression standards like JPEG, understanding the DFT is foundational for grasping frequency-domain analysis, which underpins transform coding.

*   **DFT's Role:** The 2D DFT decomposes an image into a sum of complex sinusoidal components at various frequencies and orientations.
*   **Frequency Domain Representation:** The DFT coefficients represent the magnitude and phase of these sinusoidal components.
*   **Compression Relevance:**
    *   **Energy Compaction:** For images with smooth regions, most of the image's energy (represented by the strength of the sinusoidal components) is concentrated in the low-frequency coefficients. High-frequency coefficients often have small magnitudes.
    *   **Quantization:** By quantizing the DFT coefficients, we can discard information from less significant components (often high frequencies) without a drastic perceptual loss.
    *   **Limitations of DFT for Compression:**
        *   **Non-real coefficients:** DFT produces complex coefficients, which are harder to handle than the real coefficients produced by DCT.
        *   **Boundary artifacts:** The DFT assumes the image is periodic, which can lead to artifacts at the boundaries if the image is not truly periodic. DCT, with its cosine basis functions, is better suited to handle image boundaries.

**Learning Outcome Connection (CO2):** This topic directly relates to analyzing mathematical transforms necessary for image processing, including how they can be leveraged for compression.

---

### 9. Practice Questions

**Question 1:** (CO3, K3) Describe the two main stages of a generic image compression model and list the sub-components of the compressor.

**Question 2:** (CO3, K3) Differentiate between lossless and lossy image compression, providing an example of each.

**Question 3:** (CO3, K3) Explain the role of the **Transformation** and **Quantization** steps in a lossy image compression scheme.

**Question 4:** (CO3, K3) How does the human visual system's sensitivity to luminance versus chrominance contribute to image compression efficiency?

**Question 5:** (CO2, CO3, K3) Although DCT is commonly used, how can the concepts of the Discrete Fourier Transform (DFT) be related to image compression? What are the limitations of using DFT directly for compression compared to DCT?

---

### 10. Answers to Practice Questions

**Answer 1:**
The two main stages of a generic image compression model are **Compression** and **Decompression**.

The sub-components of the **Compressor** are:
1.  **Source Encoder:**
    *   Preprocessing (Optional)
    *   Transformation
    *   Quantization
    *   Coding (Entropy Coding)
2.  **Channel Encoder (Optional):**

**Answer 2:**
*   **Lossless Compression:**
    *   **Definition:** The original image can be perfectly reconstructed from the compressed data. No information is lost.
    *   **Example:** PNG, RLE.
*   **Lossy Compression:**
    *   **Definition:** Some information is discarded during compression, resulting in an approximation of the original image. Higher compression ratios are achievable.
    *   **Example:** JPEG, MP3 (for audio).

**Answer 3:**
*   **Transformation:** This step converts the image data from the spatial domain to another domain (e.g., frequency domain using DCT or wavelet transform). The goal is to decorrelate pixels and concentrate most of the image's energy into a few coefficients. This makes the data more amenable to compression.
*   **Quantization:** This is the primary step for achieving lossy compression. It reduces the precision of the transformed coefficients by dividing them by quantization step sizes and rounding. This step discards perceptually less significant information, leading to data reduction. Larger step sizes result in higher compression but more loss.

**Answer 4:**
The human visual system (HVS) is more sensitive to changes in luminance (brightness) than in chrominance (color). In lossy compression, this property is exploited by converting the image to a color space like YCbCr, where Y represents luminance and Cb/Cr represent chrominance. The chrominance components (Cb, Cr) can then be subsampled (reduced in resolution) without a significant perceived loss of image quality, thus achieving higher compression ratios.

**Answer 5:**
The Discrete Fourier Transform (DFT) decomposes an image into sinusoidal components of different frequencies and orientations. For images with smooth regions, most of the image's energy is concentrated in the low-frequency components of the DFT. This energy compaction property means that high-frequency coefficients often have small magnitudes.

In compression, this allows for:
*   **Quantization:** High-frequency DFT coefficients can be quantized more coarsely (using larger step sizes) or even discarded, as they contribute less to the overall visual appearance and the HVS is less sensitive to them.
*   **Entropy Coding:** The distribution of coefficients after quantization is often more amenable to efficient entropy coding.

**Limitations of DFT for Compression compared to DCT:**
*   **Complex Coefficients:** DFT produces complex-valued coefficients, which are more complex to handle and encode than the real-valued coefficients produced by DCT.
*   **Boundary Artifacts:** DFT assumes the image is periodic. If the image content at the boundaries does not match, it can lead to "wrap-around" artifacts during inverse transformation, degrading the reconstructed image. DCT, with its cosine basis functions, is inherently better suited for handling natural image boundaries, leading to fewer such artifacts.

---

### 11. Important Points to Remember

*   Image compression aims to reduce data size for storage and transmission.
*   Lossless compression preserves all original information; Lossy compression discards some information for higher compression.
*   Data redundancy (inter-pixel, model) and psychovisual redundancy are key targets for compression.
*   The generic compression model involves a source encoder and optionally a channel encoder.
*   Transformation (like DCT or DFT concepts) decorrelates data and compacts energy.
*   Quantization is the primary mechanism for lossy compression, exploiting psychovisual redundancy.
*   Entropy coding (Huffman, Arithmetic) is used for lossless data reduction based on symbol probabilities.
*   The HVS's different sensitivities (luminance vs. chrominance, frequency) are crucial for lossy compression design.

---

This comprehensive set of notes covers the image compression model, its components, the types of compression, and its relationship to fundamental transforms like DFT, aligning with the specified learning outcomes and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
