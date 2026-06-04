---
title: "JPEG and JPEG-LS Standard  Image Compression, H.261."
subject: "COMPUTER GRAPHICS & MULTIMEDIA"
module: "Module 4: Fundamental of Multimedia "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b82c"
status: "completed"
scrapedAt: "2026-05-20T16:43:25.527Z"
---
# COMPUTER GRAPHICS & MULTIMEDIA: Module 4 - Fundamentals of Multimedia

## Topic: JPEG and JPEG-LS Standard Image Compression, H.261

### Learning Outcomes:

*   Understand the principles of JPEG (Joint Photographic Experts Group) and JPEG-LS (Joint Photographic Experts Group - Lossless) image compression.
*   Describe the different modes of operation in JPEG compression.
*   Explain the Discrete Cosine Transform (DCT) and its role in JPEG.
*   Understand the principles of Quantization in JPEG.
*   Describe the principles and structure of JPEG-LS compression.
*   Understand the H.261 video compression standard.
*   Explain the key features and coding techniques of H.261.
*   Compare and contrast JPEG, JPEG-LS, and H.261.

### 1. JPEG (Joint Photographic Experts Group) Image Compression

#### 1.1. Introduction to JPEG

*   **Definition:** JPEG is a widely used lossy compression standard for digital images, particularly photographs. It's designed to achieve high compression ratios with acceptable image quality degradation.
*   **Key Features:**
    *   Lossy compression: Achieves high compression ratios but sacrifices some image data.
    *   Block-based: Divides the image into 8x8 blocks.
    *   DCT (Discrete Cosine Transform): Converts spatial data to frequency data.
    *   Quantization: Reduces the precision of DCT coefficients, leading to data loss.
    *   Entropy coding: Uses techniques like Huffman coding to further compress the quantized coefficients.
*   **Use Cases:** Commonly used for storing and transmitting photographic images on the web, in digital cameras, and in various multimedia applications.

#### 1.2. Modes of Operation

*   **Sequential Encoding:**
    *   Each 8x8 block is processed independently.
    *   Encoding and decoding occur in a sequential, top-to-bottom, left-to-right fashion.
    *   Suitable for general-purpose compression.

*   **Progressive Encoding:**
    *   Image is encoded in multiple scans, allowing a low-resolution version to be displayed quickly, followed by successively higher-resolution versions.
    *   Useful for applications where a quick preview is desired, like web images.  There are two main types:
        *   *Spectral Selection:* Coefficients are transmitted in order of increasing frequency.
        *   *Successive Approximation:* Coefficients are refined incrementally.

*   **Hierarchical Encoding:**
    *   Encodes the image at multiple resolutions.
    *   Decoders can access versions of the image at different resolutions without having to decode the full image.
    *   Useful for browsing large images and for devices with varying display capabilities.

*   **Lossless Encoding:**
    *   A special mode of JPEG designed to compress images without any loss of data.
    *   Achieves lower compression ratios compared to the lossy modes.
    *   Rarely used, as JPEG-LS and other lossless codecs offer better performance.

#### 1.3. JPEG Encoding Process (Sequential Baseline)

1.  **Color Space Conversion:** Converts the image from RGB to YCbCr.  Y represents luminance (brightness), and Cb and Cr represent chrominance (color).  This allows for chrominance subsampling (reducing the resolution of color information) without significantly impacting perceived image quality.
2.  **Downsampling (Chroma Subsampling):**  Reduces the resolution of the Cb and Cr components (e.g., 4:2:0, 4:2:2).  This is based on the principle that the human eye is less sensitive to color variations than to luminance variations.
3.  **Block Division:** The image is divided into 8x8 blocks.
4.  **Discrete Cosine Transform (DCT):** Each 8x8 block is transformed from the spatial domain to the frequency domain using the DCT. The DCT concentrates the image energy into a few low-frequency coefficients.
    *   **Definition:** A mathematical transformation that converts a signal from the spatial domain to the frequency domain.
    *   **Role in JPEG:**  Decomposes the image block into a set of cosine functions with different frequencies.
    *   **Formula (1D DCT):**

    ```
    F(u) = c(u) * sum(x=0 to N-1) [ f(x) * cos((2x+1)*u*pi / (2*N)) ]
    ```
    Where:
    *   `F(u)` is the DCT coefficient at frequency `u`
    *   `f(x)` is the pixel value at position `x`
    *   `N` is the size of the block (e.g., 8)
    *   `c(u) = 1/sqrt(2)` if `u=0`,  `c(u) = 1` otherwise

5.  **Quantization:** DCT coefficients are quantized using a quantization table.  This is the primary source of loss in JPEG compression.  Higher frequency coefficients are typically quantized more heavily.
    *   **Definition:** The process of reducing the number of possible values of a quantity, thereby reducing the number of bits needed to represent it.
    *   **Role in JPEG:**  Introduces loss by discarding less important (usually higher frequency) information.
    *   **Process:** Each DCT coefficient is divided by its corresponding value in the quantization table, and the result is rounded to the nearest integer.
    *   **Example:**  If a DCT coefficient is 100 and the corresponding quantization table value is 10, the quantized coefficient is 100/10 = 10. If the coefficient was 102, then it would be 102/10 = 10.2 rounded to 10. This results in loss.
6.  **Entropy Coding:** The quantized coefficients are then entropy encoded using techniques such as:
    *   **Zig-zag scan:** Orders the coefficients in a zig-zag pattern to group similar values together, creating long runs of zeros.
    *   **Run-length encoding (RLE):** Encodes sequences of identical values by storing the value and the number of times it repeats.
    *   **Huffman coding:** Assigns shorter codes to more frequent values and longer codes to less frequent values. Arithmetic coding can also be used and generally provides better compression but at the cost of computational complexity.

#### 1.4. JPEG Decoding Process

1.  **Entropy Decoding:** Decodes the compressed data using Huffman decoding (or arithmetic decoding if that was used in encoding) and run-length decoding.
2.  **Dequantization:** Multiplies the quantized coefficients by the corresponding values in the quantization table.
3.  **Inverse Discrete Cosine Transform (IDCT):**  Transforms the frequency domain data back to the spatial domain.
4.  **Upsampling (if chroma subsampling was used):**  Restores the original resolution of the Cb and Cr components.
5.  **Color Space Conversion:** Converts the image from YCbCr back to RGB.

#### 1.5. Advantages and Disadvantages of JPEG

*   **Advantages:**
    *   High compression ratios.
    *   Widely supported and used.
    *   Adjustable compression levels.
*   **Disadvantages:**
    *   Lossy compression, leading to image quality degradation, especially at high compression ratios.
    *   Block artifacts can be visible at high compression ratios.  (The visible "blocks" of the 8x8 grid).
    *   Not suitable for images with sharp lines or text.
    *   Not well-suited for editing, as each save reintroduces loss.

### 2. JPEG-LS (Joint Photographic Experts Group - Lossless) Standard

#### 2.1. Introduction to JPEG-LS

*   **Definition:** A lossless or near-lossless compression standard for continuous-tone images. It is designed to provide better compression performance than lossless JPEG and other general-purpose lossless compression algorithms.
*   **Key Features:**
    *   Lossless or near-lossless compression.
    *   Based on predictive coding.
    *   Low complexity and hardware-friendly.
*   **Principles:** JPEG-LS employs *context modeling* and *Golomb-Rice coding*.
    *   **Context Modeling:** Predicts the value of a pixel based on the values of its neighbors (typically the pixels to the left, above, and diagonally above).
    *   **Golomb-Rice Coding:** An efficient entropy coding technique suitable for encoding prediction errors (residuals).  It's a special case of Huffman coding designed for geometric distributions, which often occur with residuals.

#### 2.2. JPEG-LS Encoding Process

1.  **Prediction:** Predict the value of the current pixel based on its neighboring pixels. The standard defines several prediction methods. LOCO-I (LOw COmplexity LOssless COmpression for Images) algorithm is commonly used in JPEG-LS, and uses a gradient-adjusted prediction method.
2.  **Residual Calculation:** Calculate the difference (residual) between the actual pixel value and the predicted value.
3.  **Context Modeling:** Determine the context of the current pixel based on the gradients between neighboring pixels. The context influences the coding of the residual.  The context is determined by differences between the predicted pixel and its immediate neighbors.
4.  **Entropy Coding (Golomb-Rice Coding):** Encode the residual using Golomb-Rice coding, adapted to the context.  The *k* parameter in the Golomb-Rice code is adaptively chosen based on the context.

#### 2.3. JPEG-LS Decoding Process

1.  **Entropy Decoding (Golomb-Rice Decoding):** Decode the residuals using Golomb-Rice decoding, using the same context information as the encoder.
2.  **Prediction:** Predict the value of the current pixel based on its neighboring pixels, using the same prediction method as the encoder.
3.  **Reconstruction:** Add the decoded residual to the predicted value to reconstruct the original pixel value.

#### 2.4. Advantages and Disadvantages of JPEG-LS

*   **Advantages:**
    *   Lossless or near-lossless compression.
    *   Good compression ratios, especially for images with high detail.
    *   Low complexity.
    *   Suitable for medical imaging and archiving.
*   **Disadvantages:**
    *   More complex than simple lossless codecs like LZW.
    *   Not as widely supported as JPEG.
    *   Can be slightly computationally more expensive than some lossless formats, but generally offers better compression.

### 3. H.261 Video Compression Standard

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=RBSGKlAxfdI) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=dbwY2e4-e0k) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=0IAPZzGSbME) |

#### 3.1. Introduction to H.261

*   **Definition:** An early video compression standard designed for videoconferencing over ISDN (Integrated Services Digital Network) lines.
*   **Key Features:**
    *   Block-based motion compensation.
    *   DCT-based transform coding.
    *   Variable-length coding (VLC).
*   **Standardization:** Developed by the ITU-T (International Telecommunication Union - Telecommunication Standardization Sector).
*   **Target Bitrates:**  Typically targeted bitrates in multiples of 64 kbit/s (n x 64 kbit/s).
*   **Picture Formats:**  Supports two main picture formats:
    *   *Common Intermediate Format (CIF):* 352x288 luminance pixels, and 176x144 chrominance pixels.
    *   *Quarter CIF (QCIF):* 176x144 luminance pixels, and 88x72 chrominance pixels.

#### 3.2. H.261 Encoding Process

1.  **Frame Division:**  Each video frame is divided into macroblocks (16x16 pixels).
2.  **Motion Estimation:** For each macroblock in the current frame, the encoder searches for a matching macroblock in the previous (reference) frame.  The displacement between the two macroblocks is called the motion vector. This process aims to remove temporal redundancy (redundancy between frames).
3.  **Motion Compensation:** The encoder uses the motion vectors to predict the current macroblock from the reference frame.
4.  **Residual Calculation:** The difference between the predicted macroblock and the actual macroblock is calculated (the residual).
5.  **DCT:** The residual is divided into 8x8 blocks, and the DCT is applied to each block.
6.  **Quantization:** The DCT coefficients are quantized.
7.  **Entropy Coding (Variable-Length Coding - VLC):**  The quantized DCT coefficients and motion vectors are entropy encoded using VLC (often Huffman coding) to further reduce the bit rate.

#### 3.3. H.261 Decoding Process

1.  **Entropy Decoding (VLC Decoding):** The encoded data is decoded using VLC decoding.
2.  **Dequantization:** The quantized DCT coefficients are dequantized.
3.  **Inverse DCT:** The IDCT is applied to the dequantized coefficients.
4.  **Motion Compensation:** The motion vectors are used to locate the matching macroblocks in the reference frame.
5.  **Reconstruction:** The residual is added to the motion-compensated macroblock to reconstruct the current macroblock.

#### 3.4. Key Features of H.261

*   **Motion Compensation:** Exploits temporal redundancy by predicting frames based on motion vectors.
*   **DCT Coding:**  Uses the DCT to transform residual blocks into the frequency domain for efficient compression.
*   **Variable-Length Coding (VLC):** Uses VLC to encode DCT coefficients and motion vectors.
*   **Loop Filter (Optional):**  Can be applied to reduce blocking artifacts.  This is optional according to the standard.

#### 3.5. Advantages and Disadvantages of H.261

*   **Advantages:**
    *   Established standard for videoconferencing.
    *   Relatively simple to implement.
*   **Disadvantages:**
    *   Lower compression efficiency compared to later standards like H.263 and H.264.
    *   Primarily designed for low bitrates (ISDN).
    *   Block artifacts can be noticeable, especially at very low bitrates.

### 4. Comparison of JPEG, JPEG-LS, and H.261

| Feature        | JPEG                 | JPEG-LS             | H.261                 |
|----------------|----------------------|----------------------|----------------------|
| Type           | Image Compression   | Image Compression   | Video Compression   |
| Compression    | Lossy (or Lossless) | Lossless/Near Lossless | Lossy                |
| Data Type      | Still Images        | Still Images        | Video                |
| Primary Use    | Photographs, Web Images | Medical Imaging, Archiving | Videoconferencing    |
| Core Technique | DCT, Quantization, Entropy Coding | Predictive Coding, Context Modeling, Golomb-Rice Coding | Motion Compensation, DCT, Quantization, VLC |
| Complexity     | Medium               | Medium               | High                 |
| Compression Ratio | High                 | Moderate             | Moderate             |
| Blocking Artifacts| Possible (at high compression) | Not Applicable       | Possible (at low bitrates) |

### Practice Questions & Exercises

1.  **Explain the role of the Discrete Cosine Transform (DCT) in JPEG compression.  What is the purpose of transforming the image data into the frequency domain?**

    *Answer:* The DCT transforms spatial domain image data into the frequency domain. This concentrates the image's energy into a few low-frequency coefficients.  This makes it easier to discard less important high-frequency information during quantization, leading to efficient compression.*

2.  **What is quantization in JPEG, and why is it the main source of loss? Give a short example.**

    *Answer:* Quantization reduces the precision of DCT coefficients. Each DCT coefficient is divided by a value from the quantization table.  The result is rounded to the nearest integer, thereby discarding information and making it the main source of loss in JPEG. For example, if a DCT coefficient is 102 and the quantization table value is 10, then 102/10 = 10.2, which is rounded to 10.  The difference between 102 and 100 (which you'd effectively get after dequantization) is lost.*

3.  **Describe the main difference between lossless and lossy compression. Give an example of an application that would require lossless compression.**

    *Answer:* Lossless compression preserves all the original data, allowing for perfect reconstruction. Lossy compression sacrifices some data to achieve higher compression ratios. Medical imaging requires lossless compression because data loss can have serious consequences for diagnosis.*

4.  **Explain the concept of motion compensation in H.261 video compression.**

    *Answer:* Motion compensation is a technique used to reduce temporal redundancy in video.  It estimates the movement of objects between frames and uses this information to predict the current frame from a previous (reference) frame. By sending only the difference (residual) between the predicted frame and the actual frame, significant compression can be achieved.*

5.  **What are the picture formats supported by H.261 and their resolutions?**

    *Answer:* H.261 supports Common Intermediate Format (CIF) with a resolution of 352x288 (luminance) and Quarter CIF (QCIF) with a resolution of 176x144 (luminance).*

6.  **Describe what Golomb-Rice coding is and how it is used in JPEG-LS.**

    *Answer:* Golomb-Rice coding is an entropy coding technique optimized for geometric distributions.  In JPEG-LS, it's used to encode the prediction errors (residuals) between predicted pixel values and actual pixel values.  The *k* parameter in Golomb-Rice coding is adaptively selected based on the context of the pixel, making it an efficient method for compressing residuals.*

### Important Points to Remember

*   JPEG is a widely used lossy compression standard suitable for photographs and web images where some quality loss is acceptable for high compression.
*   JPEG-LS is a lossless or near-lossless compression standard suitable for applications where data integrity is critical (e.g., medical imaging, archiving).
*   H.261 is an early video compression standard designed for videoconferencing, employing motion compensation and DCT coding.
*   DCT transforms spatial data to frequency data, concentrating image energy in a few low-frequency coefficients.
*   Quantization is the primary source of loss in JPEG and H.261.
*   Motion compensation reduces temporal redundancy in video compression.
*   Golomb-Rice coding is efficient for encoding prediction errors (residuals) in JPEG-LS.