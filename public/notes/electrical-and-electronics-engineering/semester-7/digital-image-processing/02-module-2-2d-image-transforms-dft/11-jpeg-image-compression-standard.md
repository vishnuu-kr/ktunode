---
title: "JPEG Image compression standard"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36926"
status: "completed"
scrapedAt: "2026-05-23T16:35:20.753Z"
---
# Digital Image Processing: Module 2 - 2D Image Transforms: DFT - JPEG Image Compression Standard

## 1. Introduction to JPEG Image Compression

The Joint Photographic Experts Group (JPEG) is a committee of various organizations that has set standards for digital image compression. The JPEG standard is a lossy compression method for digital images, particularly photographic images. It is widely used for storing and transmitting digital images on the web, in digital cameras, and in various imaging applications.

**Learning Outcome Addressed:** Illustrate the various schemes of image compression (CO3: K3).

**Key Concept:** Lossy Compression. This means that some image information is discarded during the compression process to achieve higher compression ratios. The discarded information is generally chosen to be imperceptible to the human visual system.

**Reference:** Gonzalez & Woods (4th ed.), Chapter 8: Image Compression, discusses various compression techniques, including the principles behind JPEG.

## 2. JPEG Compression Process Overview

The JPEG compression process can be broadly divided into the following stages:

1.  **Color Space Transformation:** Convert the image from RGB to a luminance/chrominance color space.
2.  **Downsampling (Chroma Subsampling):** Reduce the resolution of the chrominance components.
3.  **Block Formation:** Divide the image into 8x8 pixel blocks.
4.  **Forward Discrete Cosine Transform (FDCT):** Apply the 2D DCT to each 8x8 block.
5.  **Quantization:** Reduce the precision of the DCT coefficients by dividing them by quantization values.
6.  **Zigzag Scan:** Rearrange the quantized coefficients into a 1D array.
7.  **Entropy Coding:** Compress the resulting data using techniques like Run-Length Encoding (RLE) and Huffman coding or Arithmetic coding.

**Learning Outcome Addressed:** Understand different components of image processing system (CO1: K2), Analyse the various concepts and mathematical transforms necessary for image processing (CO2: K3), Illustrate the various schemes of image compression (CO3: K3).

**Key Concepts:** Color Space, Chroma Subsampling, DCT, Quantization, Zigzag Scan, Entropy Coding.

## 3. Detailed Stages of JPEG Compression

### 3.1. Color Space Transformation

*   **Purpose:** To separate luminance (brightness) from chrominance (color) information. The human visual system is more sensitive to changes in luminance than in chrominance.
*   **Common Color Spaces:**
    *   **Y'CbCr:** This is the most common color space used in JPEG. Y' represents luminance, Cb represents blue difference chrominance, and Cr represents red difference chrominance.
    *   **YUV:** Similar to Y'CbCr, often used in video compression.
*   **Transformation:** A linear transformation is applied to the RGB values. For Y'CbCr:
    *   $Y' = 0.299R + 0.587G + 0.114B$
    *   $Cb = -0.1687R - 0.3313G + 0.5B + 128$
    *   $Cr = 0.5R - 0.4187G - 0.0813B + 128$

**Learning Outcome Addressed:** Analyse the various concepts and mathematical transforms necessary for image processing (CO2: K3).

**Example:** An RGB image is converted to Y'CbCr. The Y' channel contains the brightness information, while Cb and Cr carry the color information.

**Important Point:** Separating luminance and chrominance allows for differential treatment based on human visual perception.

### 3.2. Downsampling (Chroma Subsampling)

*   **Purpose:** To reduce the amount of color information, leveraging the fact that the human eye is less sensitive to fine color details.
*   **Common Schemes:**
    *   **4:4:4:** No downsampling. All luminance and chrominance components are retained at full resolution. (Rarely used for compression).
    *   **4:2:2:** Horizontal subsampling of chrominance components. For every 4 luminance samples, there are 2 Cb samples and 2 Cr samples. Effectively, chrominance resolution is halved horizontally.
    *   **4:2:0:** Both horizontal and vertical subsampling of chrominance components. For every 4 luminance samples in a 2x2 block, there is 1 Cb sample and 1 Cr sample. This is the most common scheme for JPEG.
*   **How it works:** Typically, for a 2x2 block of pixels, the Cb and Cr values are averaged to create a single Cb and Cr value for the block.

**Learning Outcome Addressed:** Illustrate the various schemes of image compression (CO3: K3).

**Example:** In 4:2:0 subsampling, a 2x2 block of pixels might have RGB values. The Y' values are computed for all 4 pixels. The Cb and Cr values for these 4 pixels are averaged to produce a single Cb and Cr value that represents the color for the entire 2x2 block.

**Important Point:** Chroma subsampling is a crucial step for achieving significant compression with minimal perceptual loss.

### 3.3. Block Formation

*   **Purpose:** The DCT is applied to small blocks of pixels, making the computation more manageable and allowing for localized compression.
*   **Standard Block Size:** 8x8 pixels.
*   **Process:** The luminance (Y') and chrominance (Cb, Cr) components are independently divided into 8x8 blocks. If the image dimensions are not a multiple of 8, padding is applied.

**Learning Outcome Addressed:** Analyse the various concepts and mathematical transforms necessary for image processing (CO2: K3), Illustrate the various schemes of image compression (CO3: K3).

**Example:** An image is broken into non-overlapping 8x8 pixel squares. Each square is then processed independently.

**Important Point:** The 8x8 block size is a compromise between computational complexity and the effectiveness of the DCT in decorrelating pixel values.

### 3.4. Forward Discrete Cosine Transform (FDCT)

*   **Purpose:** To transform the spatial domain pixel data into the frequency domain. The DCT efficiently decorrelates the pixels within an 8x8 block and concentrates most of the image energy into a few low-frequency coefficients.
*   **The 2D DCT Formula:** For an 8x8 block of pixels $f(x,y)$, where $0 \le x, y \le 7$, the DCT coefficients $F(u,v)$ are given by:

    $F(u,v) = \frac{1}{4} C(u) C(v) \sum_{x=0}^{7} \sum_{y=0}^{7} f(x,y) \cos\left(\frac{(2x+1)u\pi}{16}\right) \cos\left(\frac{(2y+1)v\pi}{16}\right)$

    where:
    *   $u, v$ are the frequency indices ($0 \le u, v \le 7$)
    *   $C(k) = \begin{cases} \frac{1}{\sqrt{2}} & \text{if } k=0 \\ 1 & \text{if } k > 0 \end{cases}$

*   **Interpretation of Coefficients:**
    *   $F(0,0)$: The DC coefficient, representing the average value of the 8x8 block. It contains the most energy.
    *   $F(u,v)$ for $u>0$ or $v>0$: The AC coefficients, representing the higher frequency components. These values tend to be smaller for natural images.

**Learning Outcome Addressed:** Analyse the various concepts and mathematical transforms necessary for image processing (CO2: K3).

**Reference:** Gonzalez & Woods (4th ed.), Chapter 4: Spatial Filtering: Frequency and Wavelength, provides a detailed explanation of the DCT.

**Example:** Applying the FDCT to an 8x8 block of pixels results in an 8x8 matrix of coefficients. The top-left coefficient ($F(0,0)$) is the DC coefficient, and the coefficients to the right and below represent increasing frequencies.

**Important Point:** The DCT is crucial for energy compaction, meaning that most of the image's visual information is captured by a small number of coefficients.

### 3.5. Quantization

*   **Purpose:** To reduce the precision of the DCT coefficients, thereby reducing the amount of data and achieving lossy compression. This is the primary step where information is discarded.
*   **Process:** Each DCT coefficient $F(u,v)$ is divided by a corresponding quantization coefficient $Q(u,v)$ from a quantization table. The result is then rounded to the nearest integer.

    $F_{quantized}(u,v) = \text{round} \left( \frac{F(u,v)}{Q(u,v)} \right)$

*   **Quantization Tables:** JPEG uses two standard quantization tables: one for luminance and one for chrominance. These tables have values that are typically larger for higher frequencies.
    *   **Luminance Quantization Table:** Contains smaller values for low frequencies (e.g., $Q(0,0)=8$) and larger values for high frequencies (e.g., $Q(7,7)=64$).
    *   **Chrominance Quantization Table:** Generally contains larger values than the luminance table, reflecting the lower sensitivity of the human eye to color details.
*   **Quality Factor:** The quantization tables can be scaled by a "quality factor" (typically from 1 to 100) to control the level of compression and visual quality. A lower quality factor means larger quantization values, leading to more compression but lower quality.

**Learning Outcome Addressed:** Illustrate the various schemes of image compression (CO3: K3).

**Example:**
Let's say a DCT coefficient $F(2,3) = 50$ and its corresponding quantization value $Q(2,3) = 20$.
The quantized coefficient would be $\text{round}(50/20) = \text{round}(2.5) = 3$.
If the quantization value were larger, say $Q(2,3) = 50$, the quantized coefficient would be $\text{round}(50/50) = \text{round}(1) = 1$. This indicates more aggressive compression.

**Important Point:** Quantization is the main source of loss in JPEG. The choice of quantization table and quality factor directly impacts the compression ratio and image quality.

### 3.6. Zigzag Scan

*   **Purpose:** To group the quantized coefficients efficiently for subsequent entropy coding. High-frequency coefficients, which are often zero or small after quantization, are placed together.
*   **Process:** The 8x8 block of quantized coefficients is read in a zigzag pattern, starting from the DC coefficient ($F(0,0)$) and moving towards higher frequencies. This creates a 1D array of coefficients.

**Learning Outcome Addressed:** Illustrate the various schemes of image compression (CO3: K3).

**Example:**
Consider a quantized 8x8 block:
```
 12  3  5  8  2  1  0  0
  2  3  4  6  1  0  0  0
  1  2  3  5  0  0  0  0
  2  2  2  3  0  0  0  0
  1  1  1  1  0  0  0  0
  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0
```
A zigzag scan would produce the following 1D array:
`12, 3, 2, 5, 3, 2, 8, 4, 2, 1, 1, 6, 5, 3, 2, 1, ... (many zeros)`

**Important Point:** The zigzag scan is a reordering process that prepares the data for efficient coding by grouping similar values (especially zeros).

### 3.7. Entropy Coding

*   **Purpose:** To further compress the data by assigning shorter codes to frequently occurring symbols and longer codes to less frequent symbols. This is a lossless compression stage.
*   **Two Main Techniques Used by JPEG:**
    1.  **Differential Pulse Code Modulation (DPCM) for DC Coefficients:**
        *   The DC coefficients of consecutive blocks are not encoded independently. Instead, the *difference* between the current DC coefficient and the previous one is encoded. This exploits the fact that DC coefficients tend to be similar between adjacent blocks.
        *   The differences are then quantized and entropy coded.
    2.  **Run-Length Encoding (RLE) and Huffman Coding (or Arithmetic Coding) for AC Coefficients:**
        *   **RLE:** The 1D array of AC coefficients (after zigzag scan) is encoded by representing consecutive zeros as a count. For example, `0, 0, 0, 0, 5, 0, 0, 2` might be encoded as `(4, 0), (1, 5), (2, 0), (1, 2)`, where the first element is the run length.
        *   **Huffman Coding (or Arithmetic Coding):** The (run-length, value) pairs and the remaining non-zero AC coefficients are then encoded using a variable-length code, such as Huffman coding. Huffman coding assigns shorter bit codes to more frequent pairs and longer codes to less frequent ones. Arithmetic coding is another option that can achieve slightly better compression ratios but is more complex.

**Learning Outcome Addressed:** Illustrate the various schemes of image compression (CO3: K3).

**Reference:** Gonzalez & Woods (4th ed.), Chapter 8: Image Compression, covers entropy coding techniques.

**Example:**
Suppose the AC coefficients after zigzag scan look like: `[2, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]`
After RLE, it might become: `(0, 2), (0, 1), (8, 0), (1, 3), (2, 0), (1, 1), (58, 0)` (where (run-length, value) and 0 might be encoded specially).
These pairs and values are then mapped to Huffman codes.

**Important Point:** Entropy coding is the final lossless compression stage that takes advantage of statistical redundancies in the quantized DCT coefficients.

## 4. JPEG Decompression Process

The JPEG decompression process is essentially the reverse of the compression process:

1.  **Entropy Decoding:** Decode the compressed bitstream to recover the quantized coefficients.
2.  **Inverse Zigzag Scan:** Rearrange the 1D array of coefficients back into 8x8 blocks.
3.  **Dequantization:** Multiply the quantized coefficients by the corresponding quantization values from the quantization table.
4.  **Inverse Discrete Cosine Transform (IDCT):** Apply the IDCT to each 8x8 block to reconstruct the spatial domain pixel values.
5.  **Upsampling (Chroma Upsampling):** Reconstruct the chrominance components to their original resolution.
6.  **Color Space Transformation:** Convert the image back from Y'CbCr to RGB.

**Learning Outcome Addressed:** Understand different components of image processing system (CO1: K2), Analyse the various concepts and mathematical transforms necessary for image processing (CO2: K3), Illustrate the various schemes of image compression (CO3: K3).

**Key Concept:** Inverse Operations. Each compression step has a corresponding inverse operation for decompression.

**Reference:** Gonzalez & Woods (4th ed.), Chapter 8: Image Compression, describes the decompression process.

## 5. JPEG Variants and Modes

JPEG is not a single algorithm but a family of standards and modes:

*   **Baseline JPEG:** The most common mode, which uses the sequential DCT-based compression described above.
*   **Progressive JPEG:** Encodes the image in multiple passes, allowing a lower-resolution version of the image to be displayed quickly while higher resolutions are progressively loaded.
*   **Lossless JPEG:** Uses lossless compression techniques (e.g., predictive coding) instead of DCT and quantization. Offers no compression but preserves all image data.
*   **Hierarchical JPEG:** Encodes images at multiple resolutions.
*   **Lossy vs. Lossless Compression:** JPEG is primarily known for its lossy compression. However, a lossless mode exists.

**Learning Outcome Addressed:** Illustrate the various schemes of image compression (CO3: K3).

**Important Point:** Understanding the different JPEG modes allows for choosing the best option for specific applications (e.g., web browsing vs. medical imaging archival).

## 6. Advantages and Disadvantages of JPEG

### Advantages:

*   **High Compression Ratios:** Achieves significant file size reduction for photographic images.
*   **Widely Supported:** Supported by virtually all image viewing software and hardware.
*   **Perceptually Transparent Compression:** For moderate quality settings, the compression artifacts are often imperceptible to the human eye.
*   **Adjustable Quality:** The quality factor allows control over the compression-quality trade-off.

### Disadvantages:

*   **Lossy Compression:** Introduces artifacts (e.g., blocking, ringing, mosquito noise) at high compression ratios.
*   **Not Suitable for Text or Line Drawings:** Sharp edges and text can be distorted by the DCT and quantization. Lossless compression (like PNG) is preferred for such content.
*   **Color Information Loss:** Chroma subsampling reduces color detail, which can be noticeable in images with fine color gradients.
*   **Compression Artifacts Accumulate:** Repeatedly saving a JPEG image can degrade its quality with each save.

**Learning Outcome Addressed:** Illustrate the various schemes of image compression (CO3: K3).

**Reference:** Castleman (2/e), Chapter 5: Compression Techniques, discusses the pros and cons of various compression methods.

**Important Point:** JPEG is optimized for continuous-tone photographic images. Its limitations become apparent when applied to images with sharp transitions.

## 7. Relationship to Other Image Processing Concepts

*   **Frequency Domain Analysis (Module 2):** The DCT is a frequency domain transform, and understanding its properties is key to understanding JPEG.
*   **Filtering (Module 3/4):** Quantization can be viewed as a form of frequency-dependent filtering, where high frequencies are attenuated more strongly.
*   **Image Restoration:** JPEG compression artifacts can be considered a form of degradation that image restoration techniques might aim to reduce.

**Learning Outcome Addressed:** Analyse the various concepts and mathematical transforms necessary for image processing (CO2: K3), Analyze the filtering and restoration of images (CO4: K3).

## 8. Practice Questions and Answers

**Question 1:** What is the primary purpose of the Discrete Cosine Transform (DCT) in the JPEG compression process?
**(CO2, CO3)**

**Answer:** The DCT transforms spatial pixel data into the frequency domain, concentrating most of the image's energy into a few low-frequency coefficients. This energy compaction makes subsequent quantization and entropy coding more effective.

**Question 2:** Explain the role of quantization in JPEG compression. What is the trade-off involved?
**(CO3)**

**Answer:** Quantization reduces the precision of the DCT coefficients by dividing them by values from a quantization table and rounding. This is the main step where data is lost, leading to compression. The trade-off is between compression ratio (higher compression with larger quantization values) and image quality (better quality with smaller quantization values).

**Question 3:** Why is chroma subsampling used in JPEG, and what are the common subsampling schemes?
**(CO3)**

**Answer:** Chroma subsampling is used because the human visual system is less sensitive to color detail than to brightness. By reducing the resolution of the chrominance components (Cb and Cr), significant compression is achieved with minimal perceptual loss. Common schemes include 4:4:4 (no subsampling), 4:2:2 (horizontal subsampling), and 4:2:0 (horizontal and vertical subsampling), with 4:2:0 being the most common.

**Question 4:** Describe the purpose of the zigzag scan in JPEG.
**(CO3)**

**Answer:** The zigzag scan reorders the quantized DCT coefficients from an 8x8 block into a 1D array. This is done to group together many of the high-frequency coefficients, which are often zero or small after quantization, making them suitable for efficient run-length encoding.

**Question 5:** What type of images is JPEG best suited for, and why? What are its limitations for other types of images?
**(CO3)**

**Answer:** JPEG is best suited for continuous-tone photographic images because the DCT and quantization process effectively represents smooth variations in color and brightness. Its limitations lie in images with sharp edges, text, or high contrast, such as line drawings or screenshots. For these types of images, JPEG compression can introduce noticeable artifacts like ringing and blocking, making lossless compression formats (like PNG) more appropriate.

**Question 6:** Briefly explain how the DC coefficients are encoded differently from the AC coefficients in JPEG.
**(CO3)**

**Answer:** DC coefficients represent the average intensity of a block and tend to be similar between adjacent blocks. Therefore, they are encoded using Differential Pulse Code Modulation (DPCM), where the difference between the current DC coefficient and the previous one is transmitted. AC coefficients, representing higher frequencies, are encoded using Run-Length Encoding (RLE) followed by Huffman or Arithmetic coding.

## 9. Important Points to Remember

*   **JPEG is primarily a lossy compression standard.**
*   **The DCT is the core transform for energy compaction.**
*   **Quantization is the main source of data loss and controls the compression-quality trade-off.**
*   **Chroma subsampling exploits the limitations of human color vision.**
*   **Zigzag scan prepares coefficients for efficient entropy coding.**
*   **Entropy coding (RLE + Huffman/Arithmetic) is the final lossless compression stage.**
*   **JPEG is optimized for photographic images, not sharp-edged graphics.**
*   **The quality factor directly influences the quantization tables and thus the compression level and quality.**

This comprehensive set of notes covers the JPEG image compression standard, aligning with the learning outcomes and course objectives by detailing the process, its underlying mathematical concepts (DFT), and its practical implications. The references provided by the textbooks and the practice questions further aid in understanding and retention.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
