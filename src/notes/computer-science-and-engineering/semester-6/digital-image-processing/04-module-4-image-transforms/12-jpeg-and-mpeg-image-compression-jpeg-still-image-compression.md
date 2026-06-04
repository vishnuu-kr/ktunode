---
title: "JPEG and MPEG image compression JPEG still image compression"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Transforms "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc69"
status: "completed"
scrapedAt: "2026-05-20T16:53:24.838Z"
---
# DIGITAL IMAGE PROCESSING - Module 4: Image Transforms - JPEG and MPEG Image Compression

## Topic: JPEG Still Image Compression

**Learning Outcomes:**

*   Understand the fundamental principles behind JPEG image compression.
*   Describe the steps involved in the JPEG encoding process.
*   Explain the role of the Discrete Cosine Transform (DCT) in JPEG.
*   Explain the role of Quantization in JPEG.
*   Understand the impact of Quantization on image quality and compression ratio.
*   Describe entropy coding (Huffman or Arithmetic coding) in JPEG.
*   Understand the difference between Lossy and Lossless JPEG compression modes.
*   Discuss the advantages and disadvantages of JPEG compression.

### 1. Introduction to Image Compression

*   **Definition:** Image compression is the process of reducing the amount of data required to represent a digital image, without significantly degrading the image quality.
*   **Motivation:** To reduce storage space, transmission bandwidth, and processing time.
*   **Types of Compression:**
    *   **Lossless Compression:** Allows perfect reconstruction of the original image. Examples: Run-Length Encoding (RLE), Huffman Coding, LZW, PNG (uses Deflate).
    *   **Lossy Compression:** Allows for higher compression ratios but results in some information loss. Examples: JPEG.
*   **Compression Ratio:**  Ratio of the original image size to the compressed image size.  A higher ratio means more compression.  Compression Ratio = (Original Size) / (Compressed Size)

### 2. JPEG (Joint Photographic Experts Group) Standard

*   **Purpose:** A widely used standard for lossy compression of still images, especially photographic images with continuous tone color.
*   **Key Idea:** Exploits spatial redundancy (correlation between neighboring pixels) and psycho-visual redundancy (human eye's lower sensitivity to certain details) in images.
*   **Color Space:** Usually operates on YCbCr color space.
    *   **Y (Luminance):** Represents brightness information (more sensitive to human vision).
    *   **Cb (Chrominance Blue):** Represents the difference between blue and luminance.
    *   **Cr (Chrominance Red):** Represents the difference between red and luminance.
    *   **Conversion:** RGB images are converted to YCbCr because the chrominance components can be subsampled without significant perceptual loss.

### 3. JPEG Encoding Process (Key Steps)

1.  **Color Space Conversion (RGB to YCbCr):**  As described above.

2.  **Downsampling (Chroma Subsampling):** Reduce the resolution of the chrominance (Cb and Cr) components.  Common subsampling ratios include:
    *   **4:4:4:** No downsampling (every pixel has its own Y, Cb, and Cr).
    *   **4:2:2:** Horizontal downsampling by a factor of 2 (one Cb and Cr sample for every two Y samples).
    *   **4:2:0:** Horizontal and vertical downsampling by a factor of 2 (one Cb and Cr sample for every four Y samples).  This is the most common configuration.

3.  **Block Division:** The image is divided into 8x8 blocks of pixels.

4.  **Discrete Cosine Transform (DCT):** Applies a DCT to each 8x8 block.

    *   **Definition:** A mathematical transform that converts the spatial representation of the block into a frequency representation.
    *   **Purpose:** Concentrates the energy of the block into a few low-frequency coefficients (upper-left corner of the transformed block). This makes it easier to discard high-frequency components during quantization.
    *   **Formula (1D DCT):**
    ```
    F(u) = (1 / sqrt(N)) * C(u) * sum[x=0 to N-1] { f(x) * cos(((2x + 1) * u * pi) / (2N)) }
    ```
       Where:
        * `F(u)` is the DCT coefficient at frequency `u`.
        * `f(x)` is the pixel value at spatial position `x`.
        * `N` is the block size (e.g., 8 for 8x8 blocks).
        * `C(u) = 1/sqrt(2)` for `u = 0`, and `C(u) = 1` otherwise.
    *   **Formula (2D DCT):** Applying the 1D DCT along rows and then along columns of the block.
    *   **Properties:** Real-valued, orthogonal, energy-preserving.

5.  **Quantization:** Divides each DCT coefficient by a corresponding value from a *quantization table* and rounds the result to the nearest integer.  This is where loss of information occurs.

    *   **Definition:** The process of reducing the number of distinct values representing the DCT coefficients.
    *   **Quantization Table:**  An 8x8 matrix containing quantization values for each DCT coefficient.  The values in the table control the amount of compression and image quality.
    *   **Process:** `Quantized Coefficient = round(DCT Coefficient / Quantization Table Value)`
    *   **Purpose:**  Removes less important (high-frequency) information by setting many high-frequency coefficients to zero.
    *   **Impact:** Higher quantization values lead to more compression, but also more loss of detail and potentially more noticeable artifacts.  Different quantization tables can be used for the luminance and chrominance components.  Human eyes are more sensitive to errors in the luminance component, so it's usually quantized with smaller values.
    *   **Example Quantization Tables:** Standard luminance and chrominance quantization tables are provided by the JPEG standard but can be customized.

6.  **Entropy Coding (Lossless):** Encodes the quantized DCT coefficients using a lossless compression technique.

    *   **Zig-Zag Scan:** Rearranges the 8x8 quantized coefficients into a 1D sequence, starting from the top-left corner and following a zig-zag pattern. This groups many consecutive zero coefficients together.
    *   **Run-Length Encoding (RLE):** Replaces sequences of identical values (especially zeros) with a run-length code (e.g., "10 zeros" is represented as (10, 0)).
    *   **Huffman Coding:** Assigns shorter codes to frequently occurring symbols (e.g., run-length codes) and longer codes to less frequent symbols. This further reduces the size of the data.
    *   **Arithmetic Coding:**  A more advanced entropy coding technique that can provide slightly better compression than Huffman coding but is computationally more complex.

7.  **Frame Building:**  Combines the compressed data, quantization tables, and other header information to form the final JPEG file.

### 4. JPEG Decoding Process

The decoding process is the reverse of the encoding process:

1.  **Entropy Decoding:** Decompresses the coded data using Huffman or Arithmetic decoding.
2.  **De-quantization:** Multiplies the quantized DCT coefficients by the corresponding values from the quantization table. `DCT Coefficient = Quantized Coefficient * Quantization Table Value`.  Note this does *not* perfectly restore the original DCT coefficients because the rounding step in the quantization phase is irreversible.
3.  **Inverse Discrete Cosine Transform (IDCT):** Applies the IDCT to each 8x8 block to reconstruct the spatial representation of the image.
4.  **Block Assembly:**  Reassembles the 8x8 blocks into a complete image.
5.  **Upsampling (Chroma Upsampling):** Upsamples the chrominance components (Cb and Cr) to match the resolution of the luminance component (Y).
6.  **Color Space Conversion (YCbCr to RGB):** Converts the image from YCbCr color space back to RGB color space.

### 5. Advantages and Disadvantages of JPEG Compression

**Advantages:**

*   **High Compression Ratios:** Achieves significantly higher compression ratios compared to lossless methods.
*   **Adjustable Quality:** Allows control over the level of compression and image quality through the quantization table.
*   **Widely Supported:**  Universally supported by most image viewers and applications.
*   **Suitable for Photographic Images:** Works well for images with continuous tones and gradients.

**Disadvantages:**

*   **Lossy Compression:** Introduces irreversible information loss, which can lead to artifacts if the compression ratio is too high.
*   **Blocking Artifacts:** Visible block boundaries may appear in highly compressed images. This is due to the independent processing of 8x8 blocks.
*   **Not Suitable for Line Drawings or Text:**  JPEG performs poorly on images with sharp edges, fine lines, or text, as these features are often blurred or distorted by the compression process.
*   **Computational Complexity:**  The DCT and IDCT operations can be computationally intensive.

### 6. Lossless JPEG

*   There's also a *lossless* version of JPEG, which uses predictive coding and entropy coding (like Huffman coding) but *without* the DCT and Quantization steps.
*   It provides better compression than raw image formats, but significantly less compression than standard (lossy) JPEG.
*   Less widely used than lossy JPEG.

### 7. Important Points to Remember

*   JPEG exploits both spatial and psycho-visual redundancy.
*   Quantization is the key source of loss in JPEG.
*   The quality of a JPEG image depends on the quantization table used.
*   Higher compression ratios result in lower image quality.
*   Blocking artifacts are a common problem with JPEG compression.
*   Understand the trade-off between compression ratio and image quality.

### Practice Questions / Exercises

1.  **Explain the purpose of the Discrete Cosine Transform (DCT) in JPEG compression.**

    *   **Answer:** The DCT converts the spatial representation of an image block into a frequency representation. This concentrates the energy of the block into a few low-frequency coefficients, making it easier to discard high-frequency components (which are less visually important) during quantization, thus enabling compression.

2.  **What is the role of the quantization table in JPEG compression? How does it affect image quality and compression ratio?**

    *   **Answer:** The quantization table determines the amount of quantization applied to each DCT coefficient.  The table contains values that each DCT coefficient is divided by. Larger values in the quantization table result in more aggressive quantization, leading to higher compression ratios but also more significant loss of detail and potentially more visible artifacts, thus reducing image quality.

3.  **What are some common chroma subsampling ratios used in JPEG, and what do they mean?**

    *   **Answer:**
        *   **4:4:4:** No chroma subsampling (full resolution for all components).
        *   **4:2:2:** Horizontal subsampling of chroma components by a factor of 2.
        *   **4:2:0:** Horizontal and vertical subsampling of chroma components by a factor of 2.

4.  **Explain the difference between lossless and lossy compression.**

    *   **Answer:**
        *   **Lossless compression:** Allows perfect reconstruction of the original data after decompression. No information is lost.
        *   **Lossy compression:** Introduces irreversible information loss during compression. The decompressed data is an approximation of the original data. This allows for higher compression ratios.

5.  **What are blocking artifacts, and why do they occur in JPEG images?**

    *   **Answer:** Blocking artifacts are visible discontinuities along the edges of the 8x8 blocks in a JPEG image. They occur because JPEG processes each block independently.  Aggressive quantization can cause significant differences between adjacent blocks, leading to these visible artifacts.

6.  **Describe the steps involved in the JPEG encoding process.**

    *   **Answer:** (See section 3 above for a detailed description of each step)
        1.  Color Space Conversion (RGB to YCbCr)
        2.  Chroma Subsampling
        3.  Block Division (8x8 blocks)
        4.  Discrete Cosine Transform (DCT)
        5.  Quantization
        6.  Entropy Coding (Zig-zag scan, Run-length Encoding, Huffman/Arithmetic Coding)
        7.  Frame Building

7.  **Explain the role of entropy coding in JPEG.**

    *   **Answer:** Entropy coding is a *lossless* compression technique used *after* quantization. It further compresses the quantized DCT coefficients by assigning shorter codes to frequently occurring values (e.g., zero values after quantization due to high-frequency coefficients being discarded) and longer codes to less frequent values. Common entropy coding methods used in JPEG include Huffman coding and Arithmetic coding.  It's essential to understand that entropy coding *does not* contribute to any loss of information; it merely encodes the existing (quantized and therefore lossy) data more efficiently.
