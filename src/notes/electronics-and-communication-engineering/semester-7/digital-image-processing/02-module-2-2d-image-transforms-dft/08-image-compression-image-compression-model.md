---
title: "Image Compression: Image compression model"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff509"
status: "completed"
scrapedAt: "2026-05-23T18:06:38.733Z"
---
# DIGITAL IMAGE PROCESSING - Module 2: 2D Image Transforms: DFT

## Topic: Image Compression: Image Compression Model

**Course Outcomes addressed:** CO3 (Illustrate the various schemes of image compression)

**Knowledge Level:** K3 (Analysis)

---

### 1. Introduction to Image Compression

Image compression is the process of reducing the amount of data required to represent a digital image. This is crucial for:

*   **Storage:** Reducing file sizes saves disk space.
*   **Transmission:** Faster transfer rates over networks (internet, wireless).
*   **Bandwidth:** Less data usage, especially important for mobile devices and streaming.

**Key Concept:** Redundancy. Most natural images contain significant amounts of redundancy, which can be exploited for compression.

**Referenced Textbooks:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 8: Image Compression (This chapter comprehensively covers the principles and models of image compression).
*   **Jayaraman et al.:** Chapter 9: Image Compression (Provides a good overview of compression techniques).

---

### 2. Image Compression Model

An image compression system typically consists of two main stages:

1.  **Encoding (Compression):** This stage takes the original image and transforms it into a compressed representation.
2.  **Decoding (Decompression):** This stage takes the compressed representation and reconstructs an approximation of the original image.

The general image compression model can be broken down into the following functional blocks:

**(K2: CO1 - Explain different components of image processing system)**

```
Original Image ----> Preprocessing ----> Transformation ----> Quantization ----> Encoding ----> Compressed Data
                                                ^                                   ^                                   ^
                                                |                                   |                                   |
Compressed Data ----> Decoding ----> Inverse Quantization ----> Inverse Transformation ----> Postprocessing ----> Reconstructed Image
```

Let's break down each component:

#### 2.1. Preprocessing

*   **Purpose:** To prepare the image for efficient compression by reducing or removing certain types of redundancy.
*   **Common Techniques:**
    *   **Geometric Operations:** Scaling, rotation (though less common for general compression, can be used for specific applications).
    *   **Color Space Conversion:** Converting RGB to other color spaces like YCbCr can be beneficial. Luminance (Y) often has more detail than chrominance (Cb, Cr), allowing for selective compression of color information.
    *   **Noise Reduction:** While not always part of the compression model itself, reducing noise *before* compression can sometimes lead to better compression ratios, as noise is often random and hard to compress efficiently.
*   **Example:** Converting a 24-bit RGB image to YCbCr and then subsampling the Cb and Cr components (e.g., 4:2:0 chroma subsampling) reduces the amount of color data to be compressed.

#### 2.2. Transformation

*   **Purpose:** To decorrelate the image data and concentrate the signal's energy into a few coefficients. This makes the data more amenable to quantization and subsequent encoding.
*   **Key Concept:** Decorrelation. By transforming the image into a different domain (e.g., frequency domain), we can often find that many coefficients have small values, which can be efficiently represented.
*   **Common Transforms:**
    *   **Discrete Cosine Transform (DCT):** Widely used in standards like JPEG. It transforms spatial domain data into frequency domain coefficients. The energy of the image is typically concentrated in the low-frequency coefficients.
    *   **Wavelet Transform:** Used in JPEG 2000. It provides both spatial and frequency localization, often resulting in better compression performance, especially for images with sharp edges.
    *   **Karhunen-Loeve Transform (KLT):** Optimal in the sense that it achieves maximum decorrelation. However, it is data-dependent, making it computationally complex and less practical for general image compression standards.
*   **Example (DCT):** For an 8x8 block of image pixels, the 2D DCT transforms these 64 pixel values into 64 DCT coefficients. Most of these coefficients will be close to zero, especially for smooth regions of the image.

**(K3: CO3 - Illustrate the various schemes of image compression)**
**(K3: CO2 - Analyse the various concepts and mathematical transforms necessary for image processing)**

#### 2.3. Quantization

*   **Purpose:** To reduce the number of bits required to represent the transformed coefficients by discarding less significant information. This is the primary source of loss in lossy compression.
*   **Key Concept:** Approximation. Quantization involves mapping a range of input values to a single output value.
*   **Types of Quantization:**
    *   **Scalar Quantization:** Each coefficient is quantized independently. This is common for DCT coefficients.
    *   **Vector Quantization:** Groups of coefficients are quantized together as a vector. This can achieve higher compression ratios but is more complex.
*   **Quantization Table:** In JPEG, a quantization table is used with the DCT coefficients. Coefficients corresponding to higher frequencies (which are typically smaller) are divided by larger values, effectively rounding them to zero more often.
*   **Example (JPEG Quantization):**
    *   The DCT coefficients of an 8x8 block are divided by the corresponding values in a quantization table.
    *   `Quantized_Coefficient = round(DCT_Coefficient / Quantization_Table_Value)`
    *   If a DCT coefficient is 5 and the quantization table value is 10, the quantized coefficient becomes `round(5/10) = 0`.
*   **Lossy vs. Lossless:**
    *   **Lossy Quantization:** Irreversible. Information is discarded.
    *   **Lossless Quantization:** Not typically done in this stage for compression, as the goal is bit reduction.

#### 2.4. Encoding

*   **Purpose:** To represent the quantized coefficients using fewer bits than the original representation.
*   **Key Concept:** Entropy Coding. This stage exploits the statistical redundancy in the quantized data.
*   **Common Encoding Techniques:**
    *   **Run-Length Encoding (RLE):** Efficient for sequences of identical values (especially zeros). For example, a sequence of ten zeros can be represented as "10 zeros".
    *   **Huffman Coding:** A variable-length coding technique where frequently occurring symbols (quantized coefficients) are assigned shorter codewords, and less frequent symbols are assigned longer codewords. It is optimal for symbol-by-symbol encoding.
    *   **Arithmetic Coding:** Encodes the entire message into a single fractional number. It can achieve higher compression ratios than Huffman coding because it can assign fractional bits to symbols.
    *   **Zigzag Scan:** In JPEG, the quantized DCT coefficients are read in a zigzag pattern. This groups the low-frequency coefficients (which are usually non-zero and important) together at the beginning and the high-frequency coefficients (which are often zero) together at the end, making RLE more effective.
*   **Example (Zigzag Scan + RLE + Huffman):**
    1.  An 8x8 block of quantized DCT coefficients is scanned in a zigzag pattern.
    2.  This sequence is then processed by RLE to group consecutive zeros.
    3.  The RLE output is then encoded using Huffman coding.

**(K3: CO3 - Illustrate the various schemes of image compression)**

#### 2.5. Decoding (Inverse Operations)

*   **Purpose:** To reconstruct the image from the compressed bitstream.
*   **Steps:** The decoding process mirrors the encoding process in reverse.
    1.  **Decoding:** The compressed bitstream is decoded using the inverse of the encoding techniques (e.g., Huffman decoding, RLE decoding).
    2.  **Inverse Quantization:** The quantized coefficients are de-quantized. This involves multiplying them by the corresponding values in the quantization table. *Crucially, this is where the lost information cannot be recovered.*
    3.  **Inverse Transformation:** The de-quantized coefficients are transformed back into the spatial domain using the inverse of the forward transform (e.g., Inverse DCT).
    4.  **Postprocessing:** Optional steps to improve the visual quality of the reconstructed image, such as deblocking filters to reduce artifacts caused by quantization.
    5.  **Color Space Conversion:** If a color space conversion was performed initially, it's converted back to the original color space (e.g., YCbCr back to RGB).

**(K2: CO1 - Explain different components of image processing system)**

---

### 3. Types of Image Compression

Based on the reversibility of the process, image compression is broadly classified into two categories:

#### 3.1. Lossless Compression

*   **Definition:** The original image can be perfectly reconstructed from the compressed data. No information is lost during the compression process.
*   **How it works:** Exploits statistical redundancy in the image data without discarding any perceptual information.
*   **Algorithms:**
    *   **Run-Length Encoding (RLE):** Simple and effective for images with large areas of uniform color or intensity.
    *   **Huffman Coding:** Assigns variable-length codes based on symbol frequencies.
    *   **Lempel-Ziv-Welch (LZW) Algorithm:** Dictionary-based compression that replaces recurring strings of data with shorter codes.
    *   **Differential Pulse Code Modulation (DPCM):** Encodes the difference between adjacent pixels.
*   **Applications:** Medical imaging (e.g., X-rays), technical drawings, archival purposes where perfect fidelity is essential.
*   **Compression Ratio:** Typically lower than lossy compression, usually around 2:1 to 3:1.

#### 3.2. Lossy Compression

*   **Definition:** Some information is lost during the compression process, resulting in a reconstructed image that is an approximation of the original.
*   **How it works:** Exploits both statistical redundancy and perceptual redundancy (information that is not easily perceptible to the human eye).
*   **Algorithms:**
    *   **JPEG (Joint Photographic Experts Group):** The most common standard for photographic images. Uses DCT, quantization, and entropy coding.
    *   **JPEG 2000:** Uses wavelet transforms, offering better compression performance and features like scalability.
    *   **MPEG (Moving Picture Experts Group):** Standards for video compression, which also incorporate image compression techniques for individual frames.
*   **Applications:** Digital photography, web images, video streaming, where some loss of detail is acceptable in exchange for significant file size reduction.
*   **Compression Ratio:** Can achieve much higher compression ratios, typically from 10:1 up to 100:1 or more, depending on the desired quality.

**(K3: CO3 - Illustrate the various schemes of image compression)**

---

### 4. Important Points to Remember

*   **The compression model is a pipeline:** Each stage builds upon the output of the previous one.
*   **Quantization is the key to lossy compression:** It's where the irreversible information reduction occurs.
*   **Transformations aim to decorrelate data:** Making it easier to compress by concentrating energy.
*   **Encoding exploits statistical redundancy:** Using methods like entropy coding to assign fewer bits to common symbols.
*   **The choice of transform and quantization strategy impacts compression efficiency and quality.**
*   **Lossless compression is perfect fidelity, lossy compression is about acceptable quality vs. file size trade-off.**

---

### 5. Practice Questions

1.  **Describe the basic components of a general image compression model and explain the purpose of each component.** (K2: CO1)
2.  **Explain why transformations are used in image compression. Provide an example of a transform commonly used for image compression and briefly describe its principle.** (K3: CO2, CO3)
3.  **What is the role of quantization in image compression? Differentiate between lossy and lossless quantization in this context.** (K3: CO3)
4.  **How can encoding techniques like Run-Length Encoding (RLE) and Huffman coding be applied to the output of the quantization stage to achieve further compression?** (K3: CO3)
5.  **Compare and contrast lossless and lossy image compression, providing examples of their applications and typical compression ratios.** (K3: CO3)

---

### 6. Answers to Practice Questions

1.  **Basic components of a general image compression model:**
    *   **Preprocessing:** Prepares image for compression (e.g., color space conversion).
    *   **Transformation:** Decorrelates data and concentrates energy (e.g., DCT, Wavelet).
    *   **Quantization:** Reduces precision of transformed coefficients, discarding less significant information (primary cause of loss in lossy compression).
    *   **Encoding:** Represents quantized data efficiently using entropy coding (e.g., RLE, Huffman).
    *   **(Decoding side):** Decoding, Inverse Quantization, Inverse Transformation, Postprocessing.

2.  **Role of Transformations:** Transformations like DCT decorrelate pixel values and concentrate the image's energy into a few coefficients, primarily in the low-frequency range. This makes the data more suitable for quantization and entropy coding, as many coefficients become zero or very small.
    *   **Example:** **Discrete Cosine Transform (DCT).** It transforms spatial domain pixel values into frequency domain coefficients. For a block of pixels, the DCT produces coefficients representing different spatial frequencies. Most natural images have smoothly varying intensity, resulting in most energy being in the low-frequency coefficients, while high-frequency coefficients are small.

3.  **Role of Quantization:** Quantization reduces the precision of the transformed coefficients. By mapping ranges of values to single values, it discards less significant information.
    *   **Lossy Quantization:** Irreversible. The original coefficient value cannot be perfectly recovered after de-quantization. This is how most of the data reduction in lossy compression is achieved.
    *   **Lossless Quantization:** Not typical in the compression model for bit reduction. If it were to be done, it would involve representing coefficients precisely, leading to no data loss but also no significant bit reduction at this stage. The goal of compression is typically to reduce bits, so lossy quantization is paramount.

4.  **Encoding Techniques:**
    *   **RLE:** After quantization, many coefficients, especially high-frequency ones, become zero. RLE can efficiently represent these consecutive zeros (e.g., "10 zeros" instead of ten '0's).
    *   **Huffman Coding:** Assigns shorter codewords to more frequent symbols (e.g., common quantized coefficient values or RLE codes) and longer codewords to less frequent symbols. This reduces the average number of bits per symbol.
    *   **Zigzag Scan (often used before RLE in JPEG):** Arranges coefficients in an order that groups zeros together, making RLE more effective.

5.  **Comparison of Lossless and Lossy Compression:**
    *   **Lossless:**
        *   **Fidelity:** Perfect reconstruction.
        *   **How:** Exploits statistical redundancy only.
        *   **Applications:** Medical images, technical drawings, text files.
        *   **Compression Ratio:** Lower (e.g., 2:1 to 3:1).
        *   **Algorithms:** RLE, Huffman, LZW.
    *   **Lossy:**
        *   **Fidelity:** Approximation, some information lost.
        *   **How:** Exploits statistical and perceptual redundancy.
        *   **Applications:** Photographic images, video, web graphics.
        *   **Compression Ratio:** Higher (e.g., 10:1 to 100:1+).
        *   **Algorithms:** JPEG, JPEG 2000.

---

This comprehensive set of notes covers the image compression model as discussed in Module 2, focusing on its components and the role of transforms. It aligns with the learning outcomes and course outcomes, particularly CO3 and CO2. The references to Gonzalez & Woods and Jayaraman et al. ensure grounding in the provided textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
