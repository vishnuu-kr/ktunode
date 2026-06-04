---
title: "Concept of transform coding"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36925"
status: "completed"
scrapedAt: "2026-05-23T16:35:18.684Z"
---
# DIGITAL IMAGE PROCESSING: Module 2 - 2D Image Transforms: DFT

## Topic: Concept of Transform Coding

This topic delves into the fundamental principles of transform coding, a crucial technique for image compression. It leverages the power of transforms to represent image data in a more efficient form, thereby reducing redundancy.

---

### Learning Outcomes Addressed:

*   **CO2: Analyze the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)** - This topic directly addresses how transforms like the DFT are applied in a practical context for data manipulation.
*   **CO3: Illustrate the various schemes of image compression (Knowledge Level: K3)** - Transform coding is a cornerstone of many image compression schemes, and this topic provides the conceptual understanding behind it.

---

### 1. Introduction to Transform Coding

Transform coding is a **lossy or lossless data compression technique** that exploits the inherent redundancy in an image by converting it into a different domain where it can be represented more efficiently. The core idea is to decorrelate the image pixels and concentrate their energy into a few transform coefficients.

**Key Idea:**
Instead of encoding the image pixel by pixel, we transform the image into a different domain (e.g., frequency domain), and then encode the transform coefficients. This often leads to a more compact representation.

**Why Transform Coding?**

*   **Redundancy Reduction:** Images often exhibit high correlation between adjacent pixels. Transforms can decorrelate these pixels.
*   **Energy Compaction:** Many transforms tend to concentrate the image's energy into a few dominant coefficients. These coefficients carry most of the important information, while others are small and can be quantized or discarded with minimal perceptual loss.
*   **Perceptual Importance:** Some transforms can separate perceptually significant information from less significant information, allowing for targeted quantization.

---

### 2. The Transform Process

Transform coding generally involves the following steps:

1.  **Transformation:** The original image data (pixels) is transformed into a new domain using a suitable transform (e.g., DFT, DCT, Hadamard, Wavelet).
2.  **Quantization:** The transform coefficients are quantized. This is the step where lossy compression is introduced. Coefficients deemed less important are represented with fewer bits or even set to zero.
3.  **Encoding:** The quantized coefficients are then encoded using a lossless compression technique (e.g., Huffman coding, Run-Length Encoding) to further reduce the data size.

**Decompression Process:**

1.  **Decoding:** The encoded data is decoded to recover the quantized transform coefficients.
2.  **Inverse Transformation:** An inverse transform is applied to reconstruct an approximation of the original image from the quantized coefficients.

---

### 3. Transform Domain and Coefficients

The goal of a transform is to map an input signal (image) into a set of coefficients in a different domain.

*   **Input Domain:** Typically the spatial domain (pixels).
*   **Transform Domain:** Could be the frequency domain (DFT, DCT), spatial frequency domain, or a combination.
*   **Transform Coefficients:** These are the new representation of the image data in the transform domain.

**Example:**
Consider a simple 1D signal (a row of pixels). A transform takes this row and produces a set of coefficients that represent the signal in terms of basis functions.

---

### 4. Choosing a Transform

The effectiveness of transform coding heavily depends on the choice of the transform. An ideal transform for image compression should exhibit:

*   **Energy Compaction:** The ability to concentrate most of the signal's energy into a few coefficients.
*   **Decorrelation:** The ability to decorrelate the input data.
*   **Computational Efficiency:** The transform and its inverse should be computationally feasible.
*   **Adaptability:** The transform should be able to adapt to the statistical properties of the image.

**Commonly Used Transforms:**

*   **Discrete Fourier Transform (DFT):** Decomposes a signal into complex exponentials of different frequencies. While useful for frequency analysis, its energy compaction properties are not always optimal for images compared to others.
*   **Discrete Cosine Transform (DCT):** Particularly the 2D DCT, is widely used in image and video compression (e.g., JPEG). It has excellent energy compaction properties for highly correlated data like images.
*   **Karhunen-Loève Transform (KLT) / Principal Component Analysis (PCA):** Optimal in terms of energy compaction, but computationally expensive and requires knowledge of the image's covariance matrix.
*   **Walsh-Hadamard Transform (WHT):** Computationally efficient but doesn't perform as well in energy compaction as DCT.
*   **Wavelet Transform:** Provides a good balance of spatial and frequency localization, offering excellent compression performance, especially for images with varying degrees of detail.

---

### 5. Transform Coding using Discrete Fourier Transform (DFT)

While the 2D DFT is not as commonly used for image compression as the 2D DCT due to less ideal energy compaction for typical images, understanding its application in this context helps illustrate the general principles of transform coding.

**How it works:**

1.  **Divide the Image:** The image is typically divided into smaller blocks (e.g., 8x8 or 16x16 pixels). This is done because the DFT (and DCT) operates on finite-length sequences. Processing the entire image at once would be computationally prohibitive and may not capture local image characteristics well.
2.  **Apply 2D DFT:** The 2D DFT is applied to each block. The 2D DFT of an $N \times N$ block $f(x, y)$ is given by:

    $$F(u, v) = \frac{1}{N^2} \sum_{x=0}^{N-1} \sum_{y=0}^{N-1} f(x, y) e^{-j2\pi(ux/N + vy/N)}$$

    Where:
    *   $f(x, y)$ is the pixel value at spatial coordinates $(x, y)$.
    *   $F(u, v)$ are the complex-valued transform coefficients in the frequency domain, indexed by spatial frequencies $(u, v)$.
    *   $N$ is the size of the block.

    The DFT coefficients $F(u, v)$ represent the contribution of sinusoidal components at different frequencies and orientations to the original image block. The DC coefficient ($F(0,0)$) represents the average intensity of the block.

3.  **Quantization of DFT Coefficients:**
    *   The magnitude of the DFT coefficients is what is typically quantized.
    *   **Frequency Domain Quantization:** High-frequency coefficients (those with larger $u$ or $v$) are generally more sensitive to noise and contribute less to the overall visual quality. They can be quantized more coarsely (represented with fewer bits or set to zero). Low-frequency coefficients (especially the DC component) are more important and are quantized more finely.
    *   **Quantization Table:** A quantization table is used, where each entry corresponds to a DFT coefficient. The value of an entry dictates the quantization step size for the corresponding coefficient.

4.  **Encoding of Quantized Coefficients:**
    *   The quantized coefficients are then arranged (e.g., in a zig-zag scan) to group similar values together and are encoded using lossless compression techniques.

**Decomposition into Basis Functions:**

The 2D DFT can be seen as decomposing an image block into a sum of complex exponentials (sinusoids) at various frequencies and orientations. Each coefficient $F(u, v)$ corresponds to the amplitude and phase of a specific sinusoid.

**Energy Compaction with DFT:**

For natural images, which have significant spatial correlation, the DFT tends to spread the energy across many coefficients, including higher frequencies. This means that many coefficients might have significant values, making it harder to achieve high compression ratios with minimal loss compared to transforms like DCT or Wavelets.

**Example (Conceptual):**

Imagine a simple block with a horizontal gradient:

```
[10, 20, 30, 40]
[10, 20, 30, 40]
[10, 20, 30, 40]
[10, 20, 30, 40]
```

When the DFT is applied, coefficients corresponding to horizontal frequencies will have larger magnitudes, representing the dominant horizontal structure.

---

### 6. Quantization: The Heart of Lossy Compression

Quantization is the process of mapping a continuous or large set of discrete values to a smaller set of discrete values. In transform coding, it's applied to the transform coefficients.

**Types of Quantization:**

*   **Uniform Quantization:** The range of values is divided into equally sized intervals.
*   **Non-uniform Quantization:** Intervals are of different sizes, typically smaller for values that occur more frequently or are more perceptually significant.

**Quantization Step Size ($\Delta$):**

*   The quantization step size determines the precision of the representation.
*   A larger $\Delta$ leads to coarser quantization, more data reduction, but also more loss.
*   A smaller $\Delta$ leads to finer quantization, less data reduction, and less loss.

**Quantization Process:**

$$Q(c) = \text{round}(c / \Delta) \times \Delta$$

or, for integer representation:

$$Q_{\text{int}}(c) = \text{round}(c / \Delta)$$

Where:
*   $c$ is a transform coefficient.
*   $\Delta$ is the quantization step size.
*   $Q(c)$ is the quantized coefficient.
*   $Q_{\text{int}}(c)$ is the quantized coefficient as an integer.

**De-quantization:**

$$c' = Q_{\text{int}}(c) \times \Delta$$

**Example:**
If $\Delta = 10$ and a coefficient $c = 47$:
$Q_{\text{int}}(47) = \text{round}(47 / 10) = \text{round}(4.7) = 5$.
The reconstructed coefficient would be $c' = 5 \times 10 = 50$.

**Importance of Perceptual Quantization:**

Human vision is less sensitive to certain types of visual information (e.g., high-frequency details in busy areas, subtle changes in color). Transform coding exploits this by quantizing coefficients that correspond to less perceptually significant information more aggressively.

---

### 7. Encoding and Bit Allocation

After quantization, the coefficients are encoded.

*   **Run-Length Encoding (RLE):** Effective for coding sequences of zeros, which are common after aggressive quantization of high-frequency coefficients.
*   **Huffman Coding:** A variable-length coding scheme that assigns shorter codewords to more frequent symbols (quantized coefficients) and longer codewords to less frequent symbols.
*   **Arithmetic Coding:** Generally provides better compression ratios than Huffman coding.

**Bit Allocation:**

The process of deciding how many bits to allocate to each transform coefficient's representation. This is closely tied to the quantization step sizes. More bits are allocated to more important coefficients (finer quantization), and fewer bits to less important coefficients (coarser quantization).

---

### 8. Advantages and Disadvantages of Transform Coding

**Advantages:**

*   **High Compression Ratios:** Can achieve significant data reduction, especially with optimized transforms and quantization strategies.
*   **Decoupling of Compression Stages:** Transformation, quantization, and encoding can be optimized independently.
*   **Error Resilience:** Can offer some degree of robustness to transmission errors if designed carefully.

**Disadvantages:**

*   **Computational Complexity:** Transforms can be computationally intensive, especially for large image blocks or complex transforms.
*   **Blocking Artifacts:** When processing images in blocks, discontinuities can appear at block boundaries, especially at high compression ratios.
*   **Lossy Nature:** Most practical transform coding schemes are lossy, meaning some image quality is sacrificed for compression.

---

### 9. Relation to Course Outcomes

*   **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing):** This topic directly uses the DFT (as discussed in previous sections of Module 2) and explains its application within a broader image processing context (compression). It requires understanding how the transform maps spatial data to a new domain.
*   **CO3 (Illustrate the various schemes of image compression):** Transform coding is a fundamental scheme for image compression. This topic explains the core mechanism, including transformation, quantization, and encoding, which are common to many compression standards.

---

### 10. Key Points to Remember

*   **Transform coding reduces redundancy by moving data to a different domain.**
*   **Energy compaction and decorrelation are key properties of effective transforms for compression.**
*   **Quantization is the primary step where loss is introduced for compression.**
*   **High-frequency coefficients are typically quantized more coarsely.**
*   **Blocking artifacts can occur at block boundaries.**
*   **DFT, while a foundational transform, is not always the most efficient for image compression due to its energy compaction properties compared to DCT or Wavelets.**

---

### 11. Practice Questions and Exercises

**Question 1:**
Explain the core principle of transform coding for image compression. Why is quantization an essential step in this process?

**Answer:**
Transform coding aims to compress images by transforming pixel data into a different domain (e.g., frequency domain) where it can be represented more compactly. This is achieved by decorrelating pixels and concentrating image energy into a few coefficients. Quantization is essential because it reduces the precision with which these coefficients are represented, thereby reducing the overall data size. This step is typically where lossy compression is introduced, as less significant coefficients are represented with fewer bits or set to zero.

---

**Question 2:**
Discuss the role of energy compaction in transform coding. Which properties of a transform make it suitable for achieving good energy compaction?

**Answer:**
Energy compaction refers to the ability of a transform to concentrate most of the image's energy (or variance) into a few transform coefficients. A transform with good energy compaction is desirable for compression because it means that only a small number of coefficients carry most of the important visual information. These dominant coefficients can be represented with high precision, while the remaining coefficients, which have low energy, can be quantized more coarsely or discarded with minimal perceptual impact. Properties that contribute to good energy compaction include the ability to decorrelate the input data and the use of basis functions that closely match the characteristics of the image data.

---

**Question 3:**
Consider a scenario where you are using a transform coding scheme for image compression. You have a transform that produces coefficients $c_1, c_2, ..., c_n$. You decide to quantize these coefficients using a uniform quantizer with step sizes $\Delta_1, \Delta_2, ..., \Delta_n$ respectively. If $c_1 = 23.5$, $\Delta_1 = 5$, $c_2 = -18.2$, $\Delta_2 = 10$. Calculate the quantized integer coefficients $Q_{\text{int}}(c_1)$ and $Q_{\text{int}}(c_2)$.

**Answer:**
Using the formula $Q_{\text{int}}(c) = \text{round}(c / \Delta)$:

For $c_1 = 23.5$ and $\Delta_1 = 5$:
$Q_{\text{int}}(c_1) = \text{round}(23.5 / 5) = \text{round}(4.7) = 5$.

For $c_2 = -18.2$ and $\Delta_2 = 10$:
$Q_{\text{int}}(c_2) = \text{round}(-18.2 / 10) = \text{round}(-1.82) = -2$.

---

**Question 4:**
What are "blocking artifacts" in the context of transform coding, and how are they typically mitigated?

**Answer:**
Blocking artifacts are discontinuities that appear at the boundaries of blocks when an image is processed in separate blocks, as is common in many transform coding schemes (like JPEG's use of 8x8 DCT blocks). These artifacts occur because the transform and quantization are applied independently to each block, and there's no guarantee of continuity between adjacent blocks. Mitigation strategies include:
*   **Overlapping Block Motion Compensation (OBMC):** Used in video compression, where blocks overlap, and values in the overlap region are averaged.
*   **Post-filtering:** Applying a smoothing filter at the block boundaries.
*   **Loop Filters:** Integrated into the compression/decompression loop (e.g., deblocking filters in H.264/AVC).
*   **Using larger block sizes:** Reduces the number of boundaries, but increases computational cost and memory requirements.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 12. References and Further Reading

*   **Digital Image Processing by Gonzalez Rafael C (PEARSON, 4TH):** Chapter 13 (Image Compression) provides a thorough treatment of transform coding, including DCT and other transforms.
*   **Digital Image Processing by S Jayaraman, S Esakkirajan, T Veerakumar (McGraw Hill, Ist):** Relevant chapters on image transforms and compression will cover these concepts.
*   **Digital Image Processing by Kenneth R Castleman (Pearson Education, 2/e,2003):** This book offers detailed explanations of various transforms and their applications in compression.
*   **Fundamentals of digital image processing by Anil K Jain (PHI, 1988):** Chapters on transforms and compression are highly relevant.
*   **Digital Image Processing by Pratt William K (John Wiley, 4/e,2007):** A comprehensive resource covering transform coding techniques.

---