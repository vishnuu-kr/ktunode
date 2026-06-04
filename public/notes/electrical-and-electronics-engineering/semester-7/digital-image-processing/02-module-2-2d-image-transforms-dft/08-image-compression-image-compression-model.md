---
title: "Image Compression: Image compression model"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36923"
status: "completed"
scrapedAt: "2026-05-23T16:35:15.712Z"
---
# DIGITAL IMAGE PROCESSING

## Module 2: 2D Image Transforms: DFT

### Topic: Image Compression: Image Compression Model

**Course Outcomes Addressed:**

*   **CO3:** Illustrate the various schemes of image compression (Knowledge Level: K3)

---

### 1. Introduction to Image Compression

Image compression is the process of reducing the amount of data required to represent a digital image. This is essential for efficient storage, transmission, and display of images. The goal is to minimize the number of bits needed while preserving the visual quality of the image as much as possible.

**Key Concept:** **Redundancy** is the core principle behind image compression. Digital images often contain redundant information that can be removed or represented more efficiently without significant loss of visual information.

**Types of Redundancy:**

*   **Coding Redundancy:** When symbols (e.g., pixel values) are represented using more bits than necessary. For example, if certain pixel values occur very frequently, they can be represented by shorter codes, and less frequent values by longer codes (e.g., Huffman coding).
*   **Interpixel Redundancy:** Correlation between neighboring pixels. Pixels close to each other in an image tend to have similar values. This redundancy can be exploited by predicting pixel values or by transforming the image into a domain where this correlation is reduced.
*   **Psychovisual Redundancy:** Information that is imperceptible to the human visual system. Certain details or variations in the image might not be noticed by a viewer, and this information can be discarded without significant degradation of perceived image quality.

**Importance (CO3):** Understanding these redundancies is crucial for designing effective image compression schemes. Different compression techniques target different types of redundancy.

---

### 2. The Generic Image Compression Model

The image compression process can be generally modeled as a two-stage process:

1.  **Encoder:** Transforms the input image into a compressed representation (bitstream).
2.  **Decoder:** Reconstructs an approximation of the original image from the compressed bitstream.

This model is applicable to both lossless and lossy compression techniques.

---

#### 2.1 Encoder

The encoder typically consists of several functional blocks:

*   **Source Encoder:** This component reduces the redundancy present in the image data. It can involve:
    *   **Transformation:** Applying a transform (like DFT, DCT, Wavelets) to convert pixel data into a more compact representation where information is decorrelated or energy is concentrated in a few coefficients.
    *   **Quantization:** Reducing the precision of the transformed coefficients. This is the primary step in **lossy compression**, where less significant coefficients are rounded or discarded.
    *   **Mapping/Encoding:** Assigning shorter codes to more frequent data values or patterns (e.g., Huffman coding, arithmetic coding) to reduce the overall bit count.

*   **Channel Encoder (Optional):** In some applications (e.g., transmission over noisy channels), error detection and correction codes are added to the compressed data to ensure reliable reconstruction. This is not strictly part of the compression itself but is related to data transmission.

#### 2.2 Decoder

The decoder performs the reverse operations of the encoder to reconstruct the image:

*   **Channel Decoder (Optional):** If a channel encoder was used, the channel decoder attempts to correct any errors introduced during transmission.

*   **Source Decoder:** This component reconstructs the image from the compressed bitstream. It typically involves:
    *   **Decoding:** Reversing the mapping/encoding process to obtain the quantized coefficients or transformed data.
    *   **Dequantization:** Restoring the precision of the coefficients (though the lost information during quantization cannot be recovered perfectly in lossy compression).
    *   **Inverse Transformation:** Applying the inverse transform (e.g., Inverse DFT, Inverse DCT) to convert the data back into the spatial domain (pixel values).

---

### 3. Types of Image Compression

Image compression techniques are broadly categorized into two types based on whether the original image can be perfectly reconstructed:

#### 3.1 Lossless Compression

*   **Definition:** In lossless compression, the reconstructed image is identical to the original image. No information is lost.
*   **Mechanism:** Exploits only coding and interpixel redundancy.
*   **Applications:** Medical imaging, technical drawings, text documents, situations where even minor loss of detail is unacceptable.
*   **Compression Ratio:** Typically lower than lossy compression (e.g., 2:1 or 3:1).
*   **Examples:**
    *   **Run-Length Encoding (RLE):** Replaces sequences of identical pixels with a count and the pixel value.
        *   *Example:* `AAAAABBBCCDAA` can be encoded as `5A3B2C1D2A`.
    *   **Huffman Coding:** Assigns variable-length codes to symbols based on their probabilities. More frequent symbols get shorter codes.
    *   **Arithmetic Coding:** Encodes the entire image as a single fraction, achieving higher compression ratios than Huffman coding by representing symbols more efficiently.
    *   **LZW (Lempel-Ziv-Welch):** Dictionary-based compression that builds a dictionary of recurring patterns.

#### 3.2 Lossy Compression

*   **Definition:** In lossy compression, some information is lost during the compression process. The reconstructed image is an approximation of the original.
*   **Mechanism:** Exploits coding, interpixel, and importantly, psychovisual redundancy. It discards information that is less likely to be perceived by the human eye.
*   **Applications:** Digital photography, video streaming, web images, where high compression ratios are desired, and minor loss of detail is acceptable.
*   **Compression Ratio:** Can be much higher than lossless compression (e.g., 10:1, 20:1, or more).
*   **Examples:**
    *   **JPEG (Joint Photographic Experts Group):** The most common lossy compression standard for still images.
        *   It uses the **Discrete Cosine Transform (DCT)** to decorrelate pixel data and then **quantizes** the DCT coefficients.
        *   Followed by entropy coding (like Huffman or Arithmetic coding).
    *   **Wavelet Compression:** Uses wavelet transforms to decompose the image into different frequency sub-bands, allowing for finer control over compression and better preservation of edge details compared to DCT.

---

### 4. Image Compression Model in Detail (Focus on Transform-Based Methods)

The topic explicitly mentions DFT, so we will focus on how transforms like DFT (or more commonly, DCT) fit into the compression model.

**Core Idea:** Transforms convert image data from the spatial domain (pixel values) to a transform domain (coefficients). In the transform domain, the data is often more compact and easier to compress due to decorrelation and energy compaction.

**Steps in a Transform-Based Lossy Compression System:**

1.  **Preprocessing (Optional):**
    *   **Blocking:** Dividing the image into smaller blocks (e.g., 8x8 pixels for DCT in JPEG). This is done to manage computational complexity and locality of correlation.
    *   **Color Space Transformation:** Converting RGB to YCbCr (Luminance, Chrominance Blue, Chrominance Red). The human eye is less sensitive to color variations (Cb, Cr) than to luminance (Y), so color channels can be subsampled (e.g., 4:2:0) to reduce data further.

2.  **Transformation:**
    *   Apply a transform to each block (or the entire image). Common transforms include:
        *   **Discrete Fourier Transform (DFT):** While conceptually important, DFT is rarely used directly for image compression due to its non-local nature and the fact that the imaginary components are usually discarded, leading to artifacts.
        *   **Discrete Cosine Transform (DCT):** Widely used in JPEG. It transforms spatial data into frequency components, concentrating most of the image energy into a few coefficients.
            *   For an 8x8 block `f(x,y)`, the 2D DCT is defined as:
                $$F(u,v) = \frac{1}{4}C(u)C(v)\sum_{x=0}^{7}\sum_{y=0}^{7}f(x,y)\cos\left[\frac{(2x+1)u\pi}{16}\right]\cos\left[\frac{(2y+1)v\pi}{16}\right]$$
                where $C(k) = \begin{cases} \frac{1}{\sqrt{2}} & \text{if } k=0 \\ 1 & \text{if } k>0 \end{cases}$
            *   The coefficient $F(0,0)$ represents the DC component (average value of the block), and the other coefficients represent AC components (frequency information).
        *   **Wavelet Transform:** Decomposes the image into different frequency bands, offering better energy compaction and localization than DCT, especially for images with sharp edges.

3.  **Quantization:**
    *   This is the **lossy** step. Coefficients from the transform are divided by values from a quantization table and then rounded to the nearest integer.
    *   **Quantization Table:** A matrix of the same size as the transform coefficients. Values in the table are typically larger for higher frequencies (higher u, v in DCT) because the human eye is less sensitive to high-frequency details.
    *   The quantization step effectively discards less significant information.
    *   *Example (Simplified for a 1D DCT coefficient `C` and quantization step `Q`):*
        `quantized_C = round(C / Q)`
        If `Q` is large, many coefficients will become zero.
    *   **Quality Setting:** The quantization table is adjusted based on the desired quality level. Higher quality means smaller quantization values, less information loss, and a larger file size. Lower quality means larger quantization values, more information loss, and a smaller file size.

4.  **Entropy Coding (Encoding):**
    *   **Zigzag Scan:** For DCT, the coefficients are often scanned in a zigzag pattern. This groups most of the zero coefficients (especially after quantization of high-frequency AC coefficients) together, making them efficient to encode using run-length encoding.
    *   **Run-Length Encoding (RLE):** Encodes sequences of zeros and the non-zero values.
    *   **Huffman Coding or Arithmetic Coding:** The RLE data is further compressed using variable-length codes to represent the quantized coefficients and their runs.

---

### 5. Image Compression Model: Decoder

The decoder reverses the encoder process:

1.  **Entropy Decoding:**
    *   The compressed bitstream is decoded using the same entropy coding method (Huffman, Arithmetic) used by the encoder to retrieve the run-length encoded data.

2.  **Inverse Zigzag Scan:**
    *   The run-length data is used to reconstruct the quantized coefficients in their original spatial arrangement (often after a zigzag scan reversal).

3.  **Dequantization:**
    *   Each quantized coefficient is multiplied by its corresponding value from the quantization table. This step attempts to recover the original transform coefficients, but the information lost during rounding in the quantization step cannot be recovered.
    *   *Example (Simplified):* `reconstructed_C = quantized_C * Q`

4.  **Inverse Transformation:**
    *   The inverse transform (e.g., Inverse DCT, Inverse Wavelet) is applied to the dequantized coefficients to reconstruct the image blocks in the spatial domain.
    *   *For 2D IDCT (for an 8x8 block):*
        $$f(x,y) = \frac{1}{4}\sum_{u=0}^{7}\sum_{v=0}^{7}C(u)C(v)F(u,v)\cos\left[\frac{(2x+1)u\pi}{16}\right]\cos\left[\frac{(2y+1)v\pi}{16}\right]$$

5.  **Postprocessing (Optional):**
    *   **De-blocking Filters:** Techniques to reduce blocking artifacts that often appear at the boundaries of blocks after inverse transformation, especially at low bit rates.
    *   **Color Space Inverse Transformation:** Converting YCbCr back to RGB for display.

---

### 6. Role of DFT/DCT in Compression

*   **Decorrelation:** Transforms like DFT and DCT decorrelate the pixel values within an image block. In the spatial domain, adjacent pixels are highly correlated. In the transform domain, the coefficients are much less correlated, making them more amenable to independent quantization and coding.
*   **Energy Compaction:** These transforms tend to concentrate most of the image's energy (information) into a few coefficients, typically the low-frequency ones (e.g., the DC coefficient and low-frequency AC coefficients in DCT). The high-frequency coefficients often have small magnitudes and can be quantized to zero with minimal visual impact.
*   **DFT vs. DCT for Compression:**
    *   **DFT:** Produces complex coefficients. For real input images, the coefficients are conjugate symmetric. To compress, one typically uses only the magnitude of the coefficients and discards the phase information, or discards the imaginary parts and keeps only the real parts. This discarding of information makes it less efficient than DCT. Also, DFT is global, meaning each coefficient depends on all pixels in the image.
    *   **DCT:** Produces real coefficients and is specifically designed for energy compaction of typical image data. Its advantage lies in its ability to represent signals with localized variations efficiently. The first coefficient (DC) represents the average value, and subsequent coefficients represent progressively higher frequencies. This property makes it ideal for quantization, where high-frequency components can be aggressively quantized.

**Important Point:** While the module title mentions DFT, the practical implementation of transform-based image compression (like JPEG) overwhelmingly uses DCT due to its superior performance in energy compaction for typical image data.

---

### 7. Key Concepts and Definitions

*   **Image Compression:** Reducing the number of bits needed to represent an image.
*   **Redundancy:** Unnecessary information in an image that can be exploited for compression.
    *   **Coding Redundancy:** Inefficient bit allocation for pixel values.
    *   **Interpixel Redundancy:** Correlation between neighboring pixels.
    *   **Psychovisual Redundancy:** Information imperceptible to the human visual system.
*   **Lossless Compression:** Compression without any loss of information. Original image is perfectly reconstructible.
*   **Lossy Compression:** Compression with some loss of information. Reconstructed image is an approximation.
*   **Encoder:** The part of the system that compresses data.
*   **Decoder:** The part of the system that decompresses data.
*   **Transformation:** Converting image data from spatial domain to a transform domain (e.g., frequency domain).
*   **Quantization:** Reducing the precision of transform coefficients, the primary step in lossy compression.
*   **Entropy Coding:** Efficiently encoding data using variable-length codes based on probability (e.g., Huffman, Arithmetic).
*   **DCT (Discrete Cosine Transform):** A transform widely used in image compression for its energy compaction properties.
*   **Blocking Artifacts:** Visible discontinuities at the boundaries of blocks caused by block-based processing in compression algorithms.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Textual References and Alignment

*   **Gonzalez & Woods (4th Ed):** Chapter 8, "Image Compression," thoroughly covers the concepts of redundancy, fidelity criteria, and the elements of the image compression model. It details lossless compression techniques (RLE, Huffman, Arithmetic, LZW) and lossy techniques, with a significant focus on transform coding (DCT) and its application in JPEG. This aligns perfectly with CO3.
*   **Jayaraman, Esakkirajan, Veerakumar (1st Ed):** Chapter 10, "Image Compression," also provides a good overview of redundancy, lossless and lossy methods, and discusses transform coding techniques. It will support the understanding of CO3.
*   **Castleman (2nd Ed):** Chapters on image compression will offer further depth into transform coding and practical considerations.
*   **Jain (1988):** A foundational text, likely covering basic principles of redundancy and early compression methods.
*   **Pratt (4th Ed):** Likely to have extensive coverage of transforms and their application in signal and image processing, including compression.

**Alignment with Course Outcomes:**

*   **CO3 (Illustrate the various schemes of image compression):** This entire module and topic are dedicated to image compression schemes, with the model providing the framework to understand these schemes. The discussion of lossless and lossy methods, and the role of transforms like DCT, directly addresses this CO.

---

### 9. Practice Questions and Answers

**Question 1:**

Explain the fundamental principle behind image compression. What are the different types of redundancies present in digital images?

**Answer:**

The fundamental principle behind image compression is the exploitation of **redundancy** present in digital images. By identifying and reducing or eliminating this redundant information, the amount of data required to represent the image can be significantly decreased.

The main types of redundancies are:
1.  **Coding Redundancy:** Occurs when pixels or symbols are represented using more bits than necessary. For example, using fixed-length codes for all pixel values when some values are much more frequent than others.
2.  **Interpixel Redundancy:** Arises from the high correlation between neighboring pixels in an image. The value of a pixel can often be predicted from the values of its neighbors.
3.  **Psychovisual Redundancy:** Information that is imperceptible to the human visual system. The eye has limitations in perceiving certain details, colors, or contrast variations, allowing this information to be discarded without significant degradation of perceived image quality.

---

**Question 2:**

Describe the generic image compression model. What are the main functional blocks in the encoder and decoder?

**Answer:**

The generic image compression model consists of an **encoder** and a decoder.

*   **Encoder:**
    1.  **Source Encoder:** This component reduces redundancy in the image data. It typically involves:
        *   **Transformation:** Converting pixel data into a more decorrelated domain (e.g., DCT).
        *   **Quantization:** Reducing the precision of transform coefficients (in lossy compression).
        *   **Mapping/Encoding:** Applying entropy coding to represent data efficiently.
    2.  **Channel Encoder (Optional):** Adds error control bits.

*   **Decoder:**
    1.  **Channel Decoder (Optional):** Removes error control bits.
    2.  **Source Decoder:** Reconstructs the image from the compressed data. It involves:
        *   **Decoding:** Reversing entropy coding.
        *   **Dequantization:** Restoring coefficient precision (partially).
        *   **Inverse Transformation:** Converting data back to the spatial domain.

---

**Question 3:**

What is the role of quantization in lossy image compression? How does it contribute to compression ratio and image quality?

**Answer:**

Quantization is the primary step responsible for **lossy** image compression. It reduces the precision of transform coefficients by mapping a range of values to a single representative value, effectively discarding information.

*   **Contribution to Compression Ratio:** By reducing the number of distinct values and often producing many zero coefficients (especially for high-frequency components), quantization significantly reduces the amount of data that needs to be encoded, leading to higher compression ratios.
*   **Contribution to Image Quality:** The degree of quantization directly impacts image quality.
    *   **Coarse Quantization (large quantization steps):** More information is lost, leading to lower image quality (e.g., blocky artifacts, loss of fine details) but higher compression ratios.
    *   **Fine Quantization (small quantization steps):** Less information is lost, preserving better image quality but resulting in lower compression ratios.
    The choice of quantization levels is a trade-off between achieving a desired compression ratio and maintaining acceptable visual fidelity.

---

**Question 4:**

Why is DCT (Discrete Cosine Transform) generally preferred over DFT (Discrete Fourier Transform) for image compression applications like JPEG?

**Answer:**

DCT is generally preferred over DFT for image compression due to the following reasons:

1.  **Energy Compaction:** DCT is highly effective at concentrating the energy of typical image signals into a few low-frequency coefficients. This means most of the important information is represented by a small number of coefficients, making it easier to compress.
2.  **Real Coefficients:** DCT produces real-valued coefficients for real-valued input signals (image pixel data). DFT produces complex-valued coefficients. Dealing with real coefficients simplifies the processing and storage requirements.
3.  **No Phase Information Loss (Implicit):** While both transforms can involve discarding information, DCT's structure naturally leads to a representation where the most significant information is captured by the initial coefficients. When compressing DFT coefficients, one might discard the imaginary parts or phase information, which can lead to more significant artifacts than controlled quantization of DCT coefficients.
4.  **Optimized for Image Statistics:** DCT is mathematically optimized to perform well on signals that are smooth and have a limited number of discontinuities, which is characteristic of most natural images.

---

### 10. Important Points to Remember

*   Image compression aims to reduce data size by exploiting **redundancy**.
*   **Lossless compression** provides perfect reconstruction but achieves lower compression ratios.
*   **Lossy compression** achieves higher compression ratios by discarding perceptually less significant information.
*   The generic compression model has an **encoder** and a **decoder**, each with source (and optional channel) components.
*   **Transforms (like DCT)** are crucial for decorrelating pixel data and achieving energy compaction in lossy compression.
*   **Quantization** is the core lossy step, directly influencing the trade-off between compression ratio and image quality.
*   **Entropy coding** is used to efficiently represent the quantized coefficients.
*   **DCT** is the transform of choice for JPEG due to its excellent energy compaction for image data and its real-valued coefficients.

---

This concludes the study notes for the Image Compression Model, focusing on its role within the broader context of 2D Image Transforms.