---
title: "Lossy, lossless compression"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36924"
status: "completed"
scrapedAt: "2026-05-23T16:35:17.039Z"
---
# DIGITAL IMAGE PROCESSING - Module 2: 2D Image Transforms: DFT

## Topic: Lossy and Lossless Compression

**Course Outcomes Covered:**
*   **CO3:** Illustrate the various schemes of image compression (Knowledge Level: K3)

**Module Learning Outcomes Addressed:**
*   Understand the fundamental principles of image compression.
*   Differentiate between lossless and lossy compression techniques.
*   Explain the trade-offs between compression ratio and image quality.
*   Relate the application of 2D DFT to image compression strategies.

---

### 1. Introduction to Image Compression

**Definition:** Image compression is the process of reducing the amount of data required to represent a digital image. The goal is to minimize the storage space and transmission bandwidth needed while maintaining acceptable image quality.

**Why is Image Compression Necessary?**
*   **Storage:** Digital images, especially high-resolution ones, consume significant storage space.
*   **Transmission:** Large image files are slow to transmit over networks (e.g., internet, wireless).
*   **Bandwidth:** Efficient use of limited bandwidth is crucial in various applications.

**Key Concepts:**
*   **Redundancy:** Images often contain redundant information that can be removed without significantly affecting perception. Types of redundancy include:
    *   **Coding Redundancy:** When the code used to represent pixels has more bits than necessary.
    *   **Interpixel Redundancy:** Correlation between neighboring pixels.
    *   **Psychovisual Redundancy:** Information that is imperceptible to the human visual system.
    *   **Temporal Redundancy:** In video sequences, correlation between consecutive frames. (Less relevant for static 2D images but important context).

*   **Distortion:** The difference between the original image and the reconstructed image after compression and decompression.

---

### 2. Types of Image Compression

Image compression techniques are broadly categorized into two main types:

#### 2.1. Lossless Compression

**Definition:** Lossless compression techniques reduce file size without discarding any information. The original image can be perfectly reconstructed from the compressed data.

**Characteristics:**
*   **Perfect Reconstruction:** No loss of original image data.
*   **Lower Compression Ratios:** Typically achieves lower compression ratios compared to lossy methods.
*   **Applications:** Used where the integrity of every pixel is critical, such as medical imaging (X-rays, MRIs), scientific data visualization, and archival purposes.

**Common Lossless Compression Algorithms:**
*   **Run-Length Encoding (RLE):** Replaces consecutive occurrences of the same pixel value with a count and the value itself.
    *   **Example:** `AAAAABBBCCDA` can be encoded as `5A3B2C1D1A`.
    *   **Effectiveness:** Works well for images with large areas of uniform color or intensity.
*   **Huffman Coding:** A variable-length coding technique where frequently occurring pixel values are assigned shorter codewords, and less frequent ones are assigned longer codewords.
    *   **Principle:** Based on the probability distribution of pixel values.
    *   **Textbook Reference:** Gonzalez & Woods (4th ed.), Chapter 5 (Image Compression), Section 5.2.1 (Lossless Compression).
*   **Arithmetic Coding:** Similar to Huffman coding but represents the entire image as a single fraction, leading to potentially higher compression ratios.
    *   **Textbook Reference:** Gonzalez & Woods (4th ed.), Chapter 5, Section 5.2.1.
*   **LZW (Lempel-Ziv-Welch):** A dictionary-based compression algorithm that builds a dictionary of frequently occurring strings (patterns of pixels) and replaces them with shorter codes.
    *   **Example:** Used in GIF and TIFF image formats.
*   **CALIC (Context-Adaptive Lossless Image Coding):** A more advanced lossless technique that exploits local correlations and context for better prediction and coding.

**How Lossless Compression Relates to DFT (Indirectly):**
While DFT itself is not a lossless compression algorithm, the *principles* of transforming data can be applied. For example, one could theoretically transform an image using DFT and then encode the DFT coefficients using lossless coding techniques. However, directly applying lossless coding to raw pixel data is usually more efficient for general lossless compression.

#### 2.2. Lossy Compression

**Definition:** Lossy compression techniques reduce file size by discarding some information that is considered less important or imperceptible to the human visual system. The original image cannot be perfectly reconstructed.

**Characteristics:**
*   **Information Loss:** Some data is permanently removed.
*   **Higher Compression Ratios:** Achieves significantly higher compression ratios than lossless methods.
*   **Trade-off:** There is a direct trade-off between the compression ratio and the quality of the reconstructed image.
*   **Applications:** Widely used for natural images where some loss of detail is acceptable for significant file size reduction, such as JPEG images for web display, photography, and streaming media.

**Key Principles of Lossy Compression:**
1.  **Transformation:** Convert the image data into a more compressible domain (e.g., frequency domain using DFT, DCT, or wavelet transforms).
2.  **Quantization:** Reduce the precision of the transformed coefficients, effectively discarding less significant information. This is the primary step where information is lost.
3.  **Encoding:** Apply lossless coding techniques to the quantized coefficients.

**Common Lossy Compression Algorithms:**
*   **JPEG (Joint Photographic Experts Group):** The most common lossy compression standard for photographic images.
    *   **Process:**
        1.  **Color Space Transformation:** Convert RGB to YCbCr (luminance and chrominance).
        2.  **Chroma Subsampling:** Reduce the resolution of the chrominance components (Cb and Cr) because the human eye is less sensitive to color detail than luminance. (e.g., 4:2:2, 4:2:0).
        3.  **Block Division:** Divide the image into 8x8 blocks.
        4.  **Discrete Cosine Transform (DCT):** Apply 2D DCT to each 8x8 block. DCT is chosen over DFT because it's a real-valued transform and better suited for energy compaction.
        5.  **Quantization:** Divide each DCT coefficient by a corresponding value from a quantization table. Larger values in the table lead to more zeros and greater compression. This is the most critical step for lossy compression.
        6.  **Entropy Encoding:** Apply lossless compression (like Huffman coding or arithmetic coding) to the quantized coefficients.
    *   **Textbook Reference:** Gonzalez & Woods (4th ed.), Chapter 5, Section 5.3 (Lossy Compression), specifically discussing JPEG.
    *   **Textbook Reference:** Jayaraman, Esakkirajan, Veerakumar (McGraw Hill), Chapter on Image Compression will likely cover JPEG in detail.
*   **Wavelet Compression:** Uses wavelet transforms to represent the image at different scales.
    *   **Advantages:** Can achieve better compression than JPEG, especially at high compression ratios, with fewer blocking artifacts.
    *   **Example:** JPEG 2000 standard.
*   **Vector Quantization (VQ):** Divides the image into vectors and represents them using a codebook.

**How DFT/DCT is Used in Lossy Compression (Specifically JPEG):**
The Discrete Cosine Transform (DCT), which is closely related to the Discrete Fourier Transform (DFT), is the core of JPEG compression.

*   **Energy Compaction:** Both DFT and DCT transform image data from the spatial domain to the frequency domain. They tend to concentrate the image's energy into a few low-frequency coefficients.
*   **Redundancy Reduction:** By moving to the frequency domain, interpixel redundancy (spatial correlation) is largely removed. The coefficients are often decorrelated.
*   **Quantization in Frequency Domain:** The key to lossy compression is quantizing these frequency coefficients.
    *   Low-frequency coefficients (representing general brightness and slow changes) are more important and are quantized finely (less precision loss).
    *   High-frequency coefficients (representing fine details and sharp edges) are less important to human vision and are quantized coarsely (more precision loss, often rounded to zero).
*   **DFT vs. DCT:**
    *   **DFT:** Outputs complex coefficients. While it can transform data, it's not as ideal for energy compaction for real-valued signals as DCT.
    *   **DCT:** Outputs real coefficients and is specifically designed to minimize mean squared error when approximating a signal with a finite set of orthogonal basis functions. This makes it more suitable for image compression where energy compaction is paramount.

**Illustrative Example of Quantization (Conceptual):**
Suppose a block of DCT coefficients for an 8x8 block is:
```
[100, 20, 10, 5,
  2,  1,  0, 0,
  1,  0,  0, 0,
  0,  0,  0, 0]
```
A simple quantization scheme might involve dividing these by a quantization table, for example:
```
Quantization Table (example):
[ 8, 16, 16, 16,
 16, 16, 16, 16,
 16, 16, 16, 16,
 16, 16, 16, 16]
```
After quantization (and rounding):
```
[12,  1,  0,  0,
  0,  0,  0,  0,
  0,  0,  0,  0,
  0,  0,  0,  0]
```
Notice how many coefficients become zero, drastically reducing the data needed to represent this block. The quality loss occurs here.

---

### 3. Trade-offs and Considerations

| Feature               | Lossless Compression                                   | Lossy Compression                                                    |
| :-------------------- | :----------------------------------------------------- | :------------------------------------------------------------------- |
| **Data Fidelity**     | Perfect reconstruction                                 | Approximate reconstruction, information loss                         |
| **Compression Ratio** | Lower (e.g., 2:1 to 3:1)                               | Higher (e.g., 10:1, 20:1, or more)                                   |
| **Quality**           | Unaffected                                             | Degrades with higher compression ratios; artifacts (e.g., blocking, blurring) |
| **Computational Cost**| Generally lower                                        | Can be higher due to complex transforms and quantization steps       |
| **Applications**      | Medical imaging, technical drawings, archives, text-based images | Natural images, photographs, web content, video streaming          |
| **Basis**             | Exploits statistical redundancy                        | Exploits statistical redundancy and psychovisual redundancy          |

**Important Points to Remember:**
*   **Lossless = Exactness, Lossy = Efficiency.**
*   The human visual system is the primary target for exploiting psychovisual redundancy in lossy compression.
*   Quantization is the core mechanism for achieving high compression ratios in lossy methods.
*   Transforms like DFT/DCT are crucial for preparing data for effective quantization by compacting energy and decorrelating pixels.

---

### 4. Practice Questions

**Question 1 (K3 - CO3):**
Explain the fundamental difference between lossless and lossy image compression techniques. Provide one example application for each.

**Question 2 (K3 - CO3):**
Describe the role of a transform like the Discrete Cosine Transform (DCT) in the JPEG image compression standard. How does it contribute to both compression and potential loss of information?

**Question 3 (K3 - CO3):**
If you were tasked with compressing a medical X-ray image that needs to be analyzed precisely, would you choose a lossless or lossy compression method? Justify your answer.

**Question 4 (K3 - CO3):**
Consider an image region with a large area of uniform color. Which type of lossless compression technique (e.g., RLE, Huffman) would likely be most effective for this region? Briefly explain why.

**Question 5 (K3 - CO3):**
What is chroma subsampling in the context of JPEG compression, and how does it leverage the properties of human vision to achieve compression?

---

### 5. Answers to Practice Questions

**Answer 1:**
The fundamental difference lies in whether information is discarded during compression.
*   **Lossless Compression:** Reduces file size by removing statistical redundancy without discarding any image data. The original image can be perfectly reconstructed. **Application:** Archiving important documents or medical scans where every detail is critical.
*   **Lossy Compression:** Reduces file size by discarding information that is considered less perceptible to the human eye. The original image cannot be perfectly reconstructed. **Application:** Storing photographs for web display or sharing, where a slight loss of quality is acceptable for significant file size reduction.

**Answer 2:**
In JPEG compression, the DCT is applied to 8x8 blocks of the image. Its role is to:
1.  **Energy Compaction:** Transform the spatial domain pixel values into the frequency domain, concentrating most of the image's energy into a few low-frequency coefficients.
2.  **Decorrelation:** The DCT coefficients are generally less correlated with each other than the original pixel values.
This transformation makes the data more amenable to quantization. By quantizing the frequency coefficients (especially the higher-frequency ones), information is discarded. The coefficients that represent fine details (high frequencies) are quantized more coarsely, leading to a loss of information and thus lossy compression.

**Answer 3:**
For a medical X-ray image that needs precise analysis, I would choose **lossless compression**. This is because any loss of data, however small, could potentially obscure subtle diagnostic features or lead to misinterpretation. Lossless compression guarantees that the reconstructed image is identical to the original, preserving all diagnostic information.

**Answer 4:**
For an image region with a large area of uniform color, **Run-Length Encoding (RLE)** would likely be most effective. RLE works by replacing consecutive occurrences of the same pixel value with a count and the value. A large uniform area means many consecutive pixels will have the same value, allowing RLE to represent them very compactly (e.g., "100 white pixels" instead of "100 individual white pixel values"). Huffman coding, while effective, is better suited for situations with a wide variety of pixel values where some occur more frequently than others, but not necessarily in long, contiguous runs.

**Answer 5:**
Chroma subsampling in JPEG (e.g., 4:2:2 or 4:2:0) involves reducing the spatial resolution of the chrominance components (Cb and Cr) relative to the luminance component (Y). This is possible because the human visual system is more sensitive to changes in brightness (luminance) than to changes in color (chrominance). By sampling chrominance information less frequently, the amount of data to be compressed is reduced significantly, contributing to higher compression ratios. While this does discard some color detail, it is generally imperceptible to the human eye.

---

### Important Points to Remember (Summary):

*   **Compression Goals:** Reduce storage/bandwidth.
*   **Lossless:** Perfect reconstruction, lower compression ratios (e.g., RLE, Huffman). Used when data integrity is paramount.
*   **Lossy:** Information discarded, higher compression ratios (e.g., JPEG, Wavelet). Used when some quality loss is acceptable for significant size reduction.
*   **Transforms (DFT/DCT):** Crucial for lossy compression by compacting energy and decorrelating data, preparing it for effective quantization.
*   **Quantization:** The primary step in lossy compression where information is lost by reducing coefficient precision.
*   **Human Visual System (HVS):** Exploited in lossy compression to discard imperceptible information (psychovisual redundancy).
*   **Trade-off:** Compression Ratio vs. Image Quality.

---

This study material provides a foundational understanding of lossy and lossless compression, aligning with CO3. The relationship between transforms like DFT/DCT and lossy compression is also highlighted, contributing to CO2.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
