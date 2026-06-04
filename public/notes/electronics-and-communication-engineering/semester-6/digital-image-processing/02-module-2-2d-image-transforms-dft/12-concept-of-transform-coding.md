---
title: "Concept of transform coding"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee1c"
status: "completed"
scrapedAt: "2026-05-23T18:00:37.164Z"
---
# DIGITAL IMAGE PROCESSING - Module 2: 2D Image Transforms: DFT

## Topic: Concept of Transform Coding

### Learning Outcomes:
* Understand the fundamental principles of transform coding for image compression.
* Identify the advantages and disadvantages of transform coding.
* Differentiate between various transform coding techniques, with a focus on the Discrete Fourier Transform (DFT).
* Apply transform coding principles to the process of image compression.

### Course Outcomes Alignment:
* **CO2: Analyze the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)** - This topic directly addresses the analysis of transforms (DFT) for a specific application (coding/compression).
* **CO3: Illustrate the various schemes of image compression (Knowledge Level: K3)** - Transform coding is a core technique in image compression, and this topic explains its mechanism.

---

### 1. Introduction to Transform Coding

Transform coding is a **lossy compression technique** that works by converting the spatial domain representation of an image into a different domain (e.g., frequency domain) where the information can be represented more efficiently. The core idea is to decorrelate the image data and concentrate its energy into a few coefficients.

**Key Idea:** Represent the image in a transformed domain where the coefficients are more compressible.

#### 1.1 Why Transform Coding?

*   **Decorrelation:** Natural images have high correlation between adjacent pixels. This means their values are predictable. Transforms help to decorrelate these pixels, meaning the transformed coefficients are less dependent on each other.
*   **Energy Compaction:** Many transforms are designed to concentrate the most significant information of the image into a few large coefficients, while the remaining coefficients are small or zero. This allows for efficient quantization and representation.
*   **Redundancy Reduction:** By concentrating energy, we can eliminate or reduce various types of redundancy (e.g., spatial redundancy) present in the original image data.

#### 1.2 The Transform Coding Process

The transform coding process generally involves three main steps:

1.  **Transformation:** The image is transformed from the spatial domain to a different domain (e.g., frequency domain).
2.  **Quantization:** The transformed coefficients are quantized. This is the **lossy step** where some information is discarded. The degree of quantization determines the compression ratio and the quality of the reconstructed image.
3.  **Entropy Coding:** The quantized coefficients are then entropy coded (e.g., Huffman coding, arithmetic coding) to further reduce redundancy and achieve higher compression.

**Block Diagram:**

```
+--------------+     +--------------+     +--------------+     +--------------+
| Input Image  | --> | Transformation | --> | Quantization | --> | Entropy Coding | --> Compressed Data
+--------------+     +--------------+     +--------------+     +--------------+
                                                    ^
                                                    |
+--------------+     +--------------+     +--------------+     +--------------+
| Compressed   | <-- | Entropy Deco-| <-- | De-Quantization| <-- | Inverse Trans- |
| Data         |     |  ding        |     |              |     |  formation     |
+--------------+     +--------------+     +--------------+     +--------------+
```

**Reconstruction Process (Decoding):**

1.  **Entropy Decoding:** The compressed data is first entropy decoded.
2.  **De-Quantization:** The decoded coefficients are de-quantized. This reverses the quantization step, but the lost information cannot be recovered.
3.  **Inverse Transformation:** An inverse transform is applied to convert the coefficients back to the spatial domain, yielding the reconstructed image.

---

### 2. Discrete Fourier Transform (DFT) for Transform Coding

The Discrete Fourier Transform (DFT) is a fundamental transform that can be used for transform coding. It decomposes an image into a sum of complex sinusoids of different frequencies and orientations.

#### 2.1 2D DFT and its Inverse

For an $M \times N$ image $f(x, y)$, the 2D DFT is given by:

$F(u, v) = \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y) e^{-j2\pi (\frac{ux}{M} + \frac{vy}{N})}$

where $u = 0, 1, ..., M-1$ and $v = 0, 1, ..., N-1$.

The Inverse DFT (IDFT) is given by:

$f(x, y) = \frac{1}{MN} \sum_{u=0}^{M-1} \sum_{v=0}^{N-1} F(u, v) e^{j2\pi (\frac{ux}{M} + \frac{vy}{N})}$

**Key Properties of DFT relevant to Coding:**

*   **Energy Compaction (limited):** For typical images, the energy is spread across many coefficients. However, low-frequency components often dominate, and these are concentrated in the lower $u, v$ values of the DFT matrix.
*   **Linearity:** The DFT of a sum of functions is the sum of their DFTs.
*   **Separability:** The 2D DFT can be computed by performing 1D DFTs on rows and then on columns (or vice-versa). This significantly speeds up computation using the Fast Fourier Transform (FFT) algorithm.

#### 2.2 Application of DFT in Transform Coding

1.  **Block-Based Transformation:** Since the full image DFT is computationally expensive and might not lead to optimal energy compaction, images are typically divided into smaller blocks (e.g., $8 \times 8$ or $16 \times 16$ pixels). The DFT is then applied to each block independently.

    *   **Why block-based?**
        *   **Computational Efficiency:** Smaller transforms are faster.
        *   **Local Characteristics:** Images often have local characteristics that are better captured by local transforms.
        *   **Reduced Artifacts:** Block-based processing can reduce the propagation of artifacts.

2.  **Coefficient Manipulation:** After computing the DFT for each block, the coefficients $F(u, v)$ are obtained.
    *   The coefficient $F(0,0)$ represents the average intensity of the block (DC component). It usually has the largest magnitude.
    *   Coefficients with small $u$ and $v$ represent low-frequency components, which carry the most important visual information.
    *   Coefficients with large $u$ and $v$ represent high-frequency components, which often correspond to noise or fine details.

3.  **Quantization:** This is the crucial step for compression.
    *   **Uniform Quantization:** The range of each coefficient is divided into a number of intervals. All values within an interval are mapped to a single representative value.
    *   **Non-uniform Quantization:** The intervals are made non-uniform. Smaller intervals are used for coefficients with larger magnitudes (often low frequencies), and larger intervals are used for coefficients with smaller magnitudes (often high frequencies). This is more effective as it preserves the more significant coefficients more accurately.

    **Example of Quantization:**
    Let's say we have a DFT coefficient with value $C$. If we use a quantizer step size $Q$, the quantized value $C_q$ could be:
    $C_q = \text{round}(C / Q) \times Q$

    For compression, we often use integer values and divide by $Q$:
    $C'_q = \text{round}(C / Q)$

    **Quantization Matrix:** In practice, a quantization matrix is used. This matrix has values that are typically larger for higher frequencies. This means high-frequency coefficients are quantized more coarsely (more information lost).

    **(Reference: Gonzalez & Woods, 4th Ed., Chapter 12 - Image Compression, Section 12.2.2 - Transform Coding, discusses quantization strategies.)**

4.  **Entropy Coding:** The quantized coefficients (now typically integers) are then encoded using techniques like Huffman coding or arithmetic coding. This step exploits the statistical redundancy in the quantized coefficients, especially since many coefficients will be zero or small after coarse quantization.

#### 2.3 Limitations of DFT for Transform Coding

*   **Boundary Effects:** When applied to blocks, the DFT can introduce artifacts at block boundaries due to the discontinuities between blocks. This is because the DFT assumes the signal is periodic, and applying it to a finite block doesn't naturally handle the transition to the next block.
*   **Limited Energy Compaction:** While better than direct pixel coding, DFT doesn't always achieve the best energy compaction compared to other transforms like the Discrete Cosine Transform (DCT) or Wavelet Transform. The energy tends to be more spread out.
*   **Sensitivity to Local Variations:** The DFT is a global transform within the block. If a block contains sharp edges or significant variations, the DFT might not represent these efficiently.

---

### 3. Other Transforms Used in Transform Coding

While DFT can be used, other transforms are more popular and effective for image compression due to better energy compaction and reduced artifacts.

*   **Discrete Cosine Transform (DCT):** This is the most widely used transform for image compression (e.g., JPEG standard). It is known for its excellent energy compaction properties and its ability to approximate the Karhunen-Loève Transform (KLT) for highly correlated data.
    *   **Types of DCT:** DCT-II is most common for images.
    *   **Advantages over DFT:** DCT is real-valued (no complex numbers), which simplifies implementation. It also tends to have better energy compaction, especially for images with smooth regions.
    *   **(Reference: Jayaraman et al., Chapter 10 - Image Transforms, Section 10.3.3 - Discrete Cosine Transform (DCT), discusses its application in compression.)**

*   **Wavelet Transforms:** These are multiresolution transforms that decompose an image into different frequency bands at different spatial locations. They are excellent at capturing both frequency and spatial information, leading to very efficient compression, especially for images with irregular features or textures.
    *   **(Reference: Castleman, Chapter 7 - Compression, discusses wavelet-based compression.)**

---

### 4. Advantages and Disadvantages of Transform Coding

#### 4.1 Advantages:

*   **High Compression Ratios:** Can achieve significant compression by exploiting energy compaction and decorrelation.
*   **Good Quality Reconstruction:** When used with appropriate quantization and entropy coding, it can provide good visual quality at reasonable bit rates.
*   **Structured Data:** The transformed coefficients are often more structured and easier to process for further compression.
*   **Foundation for Standards:** Transforms like DCT are the backbone of many image and video compression standards (JPEG, MPEG).

#### 4.2 Disadvantages:

*   **Computational Cost:** The transformation and inverse transformation steps require significant computation, although FFT algorithms speed this up.
*   **Blocking Artifacts:** When applied in blocks, discontinuities at block boundaries can lead to visible artifacts, especially at high compression ratios.
*   **Lossy Nature:** Quantization inherently discards information, making it a lossy compression technique. The quality of reconstruction is directly tied to the quantization step.
*   **Block Size Dependency:** The choice of block size can significantly impact compression performance and artifact visibility.

---

### 5. Key Concepts and Definitions

*   **Transform Coding:** A compression technique that maps image data from the spatial domain to a transform domain for more efficient representation.
*   **Decorrelation:** Reducing the statistical dependency between data points.
*   **Energy Compaction:** Concentrating the signal's energy into a few coefficients in the transform domain.
*   **Quantization:** Reducing the precision of transformed coefficients, leading to loss of information and compression.
*   **Entropy Coding:** Further compression by exploiting statistical redundancy in the quantized coefficients.
*   **Spatial Domain:** The domain where an image is represented by pixel intensity values at specific spatial coordinates.
*   **Transform Domain:** A domain (e.g., frequency, wavelet) where the image is represented by coefficients that describe its characteristics in that domain.
*   **DC Component:** The zero-frequency component (e.g., $F(0,0)$ in DFT), representing the average intensity of a block.
*   **AC Components:** Non-zero frequency components.
*   **Blocking Artifacts:** Visible discontinuities that appear at the boundaries of blocks in reconstructed images due to block-based processing.

---

### 6. Important Points to Remember

*   Transform coding is a **lossy** compression method.
*   The goal is to **decorrelate** pixel data and achieve **energy compaction**.
*   **Quantization** is the primary step responsible for compression and loss.
*   The **DFT** can be used, but **DCT** is generally preferred for image compression due to better energy compaction and real-valued coefficients.
*   **Block-based processing** is common to manage computation and local image characteristics, but it can introduce **blocking artifacts**.
*   **Entropy coding** further compresses the quantized coefficients.

---

### 7. Practice Questions & Exercises

**Question 1:** (CO2, CO3)
Explain the fundamental concept of transform coding for image compression. What are the main steps involved in the transform coding process?

**Answer:**
Transform coding is a lossy compression technique that converts an image from the spatial domain to a transform domain. The goal is to decorrelate the pixel data and concentrate the image's energy into a few coefficients. This allows for more efficient representation and compression. The main steps are:
1.  **Transformation:** Applying a mathematical transform (e.g., DFT, DCT) to the image or its blocks.
2.  **Quantization:** Reducing the precision of the transformed coefficients, which is the lossy step for compression.
3.  **Entropy Coding:** Applying lossless coding techniques (e.g., Huffman, arithmetic) to the quantized coefficients.
The reconstruction process involves entropy decoding, de-quantization, and inverse transformation.

**Question 2:** (CO2)
What are the advantages of using transforms like DFT for image coding compared to direct pixel coding?

**Answer:**
Transforms like DFT offer advantages over direct pixel coding primarily due to:
*   **Decorrelation:** They reduce the correlation between adjacent pixels, making the data more statistically independent.
*   **Energy Compaction:** They concentrate the image's energy into a smaller number of coefficients, typically the low-frequency ones. This means most of the important information is represented by a few significant coefficients, while the rest can be discarded or coarsely quantized.
*   **Redundancy Reduction:** By exploiting decorrelation and energy compaction, transform coding effectively reduces statistical and spatial redundancies present in the original image.

**Question 3:** (CO2, CO3)
Describe how the DFT can be used in a block-based transform coding scheme. What is a potential issue with this approach?

**Answer:**
In a block-based transform coding scheme using DFT, the image is divided into smaller, non-overlapping blocks (e.g., $8 \times 8$ pixels). The 2D DFT is then computed for each block independently. The resulting DFT coefficients for each block are then quantized (usually non-uniformly, with larger steps for higher frequencies) and entropy coded.
A potential issue with this approach is **blocking artifacts**. Since the DFT is applied independently to each block, there can be discontinuities or abrupt changes in the reconstructed image at the block boundaries. This is because the DFT inherently assumes periodicity, and these assumptions are violated at the block edges.

**Question 4:** (CO3)
If you were to implement a transform coding scheme, why might you choose a quantization matrix that assigns larger values to higher-frequency coefficients?

**Answer:**
We would choose a quantization matrix with larger values for higher-frequency coefficients to achieve compression by selectively discarding less perceptually significant information. Human vision is generally less sensitive to high-frequency details and noise than to low-frequency variations. By quantizing high-frequency coefficients more coarsely (using larger step sizes), we reduce the number of bits needed to represent them. This leads to a higher compression ratio. The low-frequency coefficients, which contain the most perceptually important information (e.g., overall brightness, broad shapes), are quantized more finely, preserving more detail and visual quality.

**Question 5:** (CO2, CO3)
Consider an $8 \times 8$ block from an image. After applying the 2D DFT to this block, you obtain $64$ complex coefficients. If you are performing transform coding for compression, which coefficients are you most likely to discard or quantize most coarsely, and why?

**Answer:**
You are most likely to discard or quantize most coarsely the DFT coefficients corresponding to **high frequencies**. In the 2D DFT, the coefficient $F(0,0)$ (the DC component) represents the average intensity of the block and usually has the largest magnitude. Coefficients with small values of $u$ and $v$ represent low-frequency components, which carry the most significant visual information. Coefficients with large values of $u$ and $v$ represent high-frequency components, which often correspond to fine details, textures, or noise. Human visual perception is less sensitive to these high-frequency components. Therefore, quantizing them more coarsely (or even setting them to zero) results in a significant reduction in data while having a relatively smaller impact on the perceived quality of the reconstructed image.

---

This set of notes covers the concept of transform coding, its application with DFT, its principles, advantages, disadvantages, and includes practice questions to reinforce understanding. It aligns with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
