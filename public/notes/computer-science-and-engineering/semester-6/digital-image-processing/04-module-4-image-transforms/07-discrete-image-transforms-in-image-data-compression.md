---
title: "Discrete Image Transforms In Image data compression"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Transforms "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc64"
status: "completed"
scrapedAt: "2026-05-20T16:53:21.266Z"
---
# DIGITAL IMAGE PROCESSING - Module 4: Image Transforms
## Topic: Discrete Image Transforms in Image Data Compression

**Learning Outcomes:**

*   Understand the fundamental principles of image data compression.
*   Explain the role of image transforms in image compression.
*   Describe and compare different discrete image transforms (DCT, DFT, DWT, Hadamard).
*   Apply discrete image transforms for image data compression.
*   Analyze the performance of different transforms in terms of compression ratio and image quality.

---

### 1. Introduction to Image Data Compression

*   **Definition:** Image data compression is the process of reducing the amount of data required to represent a digital image.
*   **Why is it important?**
    *   Reduces storage space.
    *   Decreases transmission time.
    *   Conserves bandwidth.
*   **Types of Compression:**
    *   **Lossless Compression:**  Data is compressed without any loss of information. The original image can be perfectly reconstructed.  Examples: Run-Length Encoding (RLE), Huffman coding, Lempel-Ziv-Welch (LZW). Used when data integrity is paramount (e.g., medical images, archival purposes).
    *   **Lossy Compression:** Data is compressed by discarding some information. The original image cannot be perfectly reconstructed, but the loss is often imperceptible or acceptable for the intended application. Examples: JPEG (using DCT), JPEG 2000 (using DWT).  Used where storage and bandwidth are critical (e.g., photographs, video streaming).

### 2. Role of Image Transforms in Image Compression

*   **Transforms provide a mathematical representation of the image in a different domain.**
*   **Transform coding is a key technique in image compression.** The general process is as follows:
    1.  **Transform:** Apply a transform (e.g., DCT, DWT) to the image to obtain transform coefficients.
    2.  **Quantization:** Quantize the transform coefficients. This is where most of the loss occurs in lossy compression.
    3.  **Entropy Encoding:** Use entropy encoding (e.g., Huffman coding, arithmetic coding) to further compress the quantized coefficients.
*   **Why use transforms?**
    *   **Energy Compaction:** Transforms concentrate the image energy into a smaller number of coefficients. Most of the information is captured in a few, large-magnitude coefficients.
    *   **Decorrelation:**  Transforms decorrelate image pixels. Highly correlated pixels in the spatial domain become less correlated in the transform domain, leading to better compression.
    *   **Frequency Domain Analysis:** Allows for analysis of image frequency content, enabling selective discarding of high-frequency components (which are often less important perceptually).

### 3. Discrete Image Transforms: A Comparison

*   **Key Properties for Image Compression:**
    *   **Energy Compaction:** Ability to concentrate energy into few coefficients.
    *   **Decorrelation:**  Ability to reduce redundancy between pixels.
    *   **Computational Complexity:**  How computationally expensive the transform is to compute.
    *   **Reconstructibility:**  How easily the image can be reconstructed from the transformed data.
    *   **Basis Functions:** The set of functions used to represent the image.

#### 3.1. Discrete Cosine Transform (DCT)

*   **Definition:** A real-valued transform that decomposes an image into different cosine frequencies.
*   **Most widely used transform in image and video compression (JPEG, MPEG).**
*   **Formula (1D DCT):**

    ```
    F(u) = c(u) * Σ [ f(x) * cos(( (2x + 1) * u * π ) / (2N) ) ]
    ```
    where:
    *   `F(u)` is the DCT coefficient at frequency `u`
    *   `f(x)` is the pixel value at spatial location `x`
    *   `N` is the size of the input signal
    *   `c(u) = 1/sqrt(N) for u = 0, c(u) = sqrt(2/N) for u > 0`
*   **2D DCT:**  Applied to an image block-by-block (typically 8x8 blocks). The 2D DCT is separable, meaning it can be computed by performing 1D DCTs along rows and then along columns.
*   **Energy Compaction:**  Excellent for natural images.  Most of the energy is concentrated in the low-frequency coefficients (top-left corner of the transformed block).
*   **Decorrelation:** Good decorrelation properties.
*   **Computational Complexity:** Relatively efficient algorithms exist (e.g., Fast DCT).
*   **Advantages:** High compression ratio, good image quality.
*   **Disadvantages:** Blocking artifacts can occur at high compression ratios due to independent processing of blocks.

#### 3.2. Discrete Fourier Transform (DFT)

*   **Definition:**  A complex-valued transform that decomposes an image into different sine and cosine frequencies.
*   **Formula (1D DFT):**

    ```
    F(u) = Σ [ f(x) * exp(-j * 2 * π * u * x / N) ]
    ```
    where:
    *   `F(u)` is the DFT coefficient at frequency `u`
    *   `f(x)` is the pixel value at spatial location `x`
    *   `N` is the size of the input signal
    *   `j` is the imaginary unit
*   **2D DFT:**  Similar to DCT, can be applied block-by-block or to the entire image. Separable.
*   **Energy Compaction:**  Less efficient than DCT for typical images because it produces complex coefficients, requiring more storage.
*   **Decorrelation:**  Less effective than DCT for natural images.
*   **Computational Complexity:** Efficient algorithms exist (Fast Fourier Transform - FFT).
*   **Advantages:**  Useful for frequency domain analysis and filtering.
*   **Disadvantages:**  Lower compression ratio compared to DCT for most images. Complex-valued coefficients require more storage.

#### 3.3. Discrete Wavelet Transform (DWT)

*   **Definition:**  A transform that decomposes an image into different scales and orientations. Uses wavelet functions.
*   **Multiresolution Analysis:**  Provides a representation of the image at different resolutions.
*   **Unlike DCT, DWT doesn't divide the image into fixed-size blocks.**
*   **DWT decomposes the image into four subbands:**
    *   **LL (Low-Low):** Represents the approximation of the image at a lower resolution.
    *   **LH (Low-High):** Represents horizontal details.
    *   **HL (High-Low):** Represents vertical details.
    *   **HH (High-High):** Represents diagonal details.
*   **Energy Compaction:**  Excellent energy compaction.
*   **Decorrelation:**  Good decorrelation properties.
*   **Computational Complexity:**  Efficient algorithms exist.
*   **Advantages:**
    *   Better performance than DCT at high compression ratios (fewer artifacts).
    *   Supports progressive transmission (transmit low-resolution version first, then progressively improve the quality).
    *   Better suited for images with sharp edges and textures.
*   **Disadvantages:**  More computationally complex than DCT.
*   **Used in JPEG 2000.**

#### 3.4. Hadamard Transform

*   **Definition:** A real-valued, orthogonal transform that uses only +1 and -1 values.
*   **Formula:** The Hadamard transform matrix of size 2<sup>n</sup> is generated recursively.
*   **Simple to implement (only additions and subtractions).**
*   **Energy Compaction:**  Less effective than DCT and DWT for typical images.
*   **Decorrelation:**  Lower decorrelation properties compared to DCT and DWT.
*   **Computational Complexity:**  Very low computational complexity.
*   **Advantages:**  Simple hardware implementation.
*   **Disadvantages:**  Lower compression ratio and image quality compared to DCT and DWT.
*   **Rarely used for general image compression due to its poor energy compaction.** May be useful in specific applications where computational cost is extremely limited.

**Summary Table:**

| Transform          | Energy Compaction | Decorrelation | Computational Complexity | Advantages                                              | Disadvantages                                              |
|--------------------|--------------------|---------------|--------------------------|---------------------------------------------------------|----------------------------------------------------------|
| DCT                | Excellent          | Good          | Medium                   | High compression ratio, good image quality              | Blocking artifacts at high compression ratios            |
| DFT                | Fair               | Fair          | Medium                   | Useful for frequency domain analysis                    | Lower compression ratio, complex-valued coefficients       |
| DWT                | Excellent          | Good          | High                     | Better at high compression, progressive transmission   | More computationally complex than DCT                    |
| Hadamard           | Poor               | Poor          | Low                      | Simple implementation                                     | Low compression ratio, poor image quality                |

### 4. Applying Discrete Image Transforms for Image Data Compression

*   **General Steps:**

    1.  **Image Preparation:**  Divide the image into blocks (e.g., 8x8 for DCT).
    2.  **Transform Application:**  Apply the chosen transform (e.g., DCT, DWT) to each block.
    3.  **Quantization:**  Quantize the transform coefficients. This is a crucial step in lossy compression.  Higher frequency coefficients are often quantized more aggressively (i.e., set to zero or smaller values).
    4.  **Entropy Encoding:**  Apply entropy encoding (e.g., Huffman coding, arithmetic coding) to further compress the quantized coefficients.
    5.  **Storage/Transmission:** Store or transmit the compressed data.
*   **Quantization:**
    *   **Uniform Quantization:** Divide the range of coefficient values into equally sized intervals.
    *   **Non-Uniform Quantization:**  Use different interval sizes based on the statistical distribution of the coefficients.  Often used to reduce perceptual errors.
    *   **Quantization Table (JPEG):**  JPEG uses a quantization table to control the level of compression. Different quantization values are applied to different DCT coefficients.
*   **Entropy Encoding:**
    *   **Huffman Coding:**  Assigns shorter codes to more frequent symbols (quantized coefficients).
    *   **Arithmetic Coding:**  Represents the entire sequence of symbols with a single fraction.  Generally provides better compression than Huffman coding but is more complex.
*   **Decompression:**  The decompression process is the reverse of the compression process.

### 5. Analyzing Performance: Compression Ratio and Image Quality

*   **Compression Ratio (CR):**  The ratio of the original image size to the compressed image size.

    ```
    CR = (Original Image Size) / (Compressed Image Size)
    ```

*   **Image Quality Metrics:**
    *   **Mean Squared Error (MSE):**  The average squared difference between the original and reconstructed images.  Lower MSE indicates better image quality.

        ```
        MSE = (1 / (M * N)) * Σ Σ [ (I(i, j) - I'(i, j))^2 ]
        ```
        where:
        *   `I(i, j)` is the original image pixel value at location `(i, j)`
        *   `I'(i, j)` is the reconstructed image pixel value at location `(i, j)`
        *   `M` and `N` are the dimensions of the image

    *   **Peak Signal-to-Noise Ratio (PSNR):**  A measure of the peak signal power to the noise power. Higher PSNR indicates better image quality.

        ```
        PSNR = 10 * log10( (MAX^2) / MSE )
        ```
        where:
        *   `MAX` is the maximum possible pixel value (e.g., 255 for an 8-bit grayscale image).

    *   **Subjective Evaluation:**  Human visual assessment of image quality.  Often uses a rating scale.
*   **Trade-off:** There's a trade-off between compression ratio and image quality.  Higher compression ratios generally lead to lower image quality (more distortion).
*   **Choice of Transform:** The best transform depends on the specific application, desired compression ratio, and acceptable image quality. DCT is suitable for most general-purpose image compression, while DWT is better for higher compression ratios and images with sharp edges.

---

### Practice Questions and Exercises:

1.  **Question:** Explain the difference between lossless and lossy image compression. Give examples of each.
    *   **Answer:** Lossless compression preserves all the information in the original image, allowing for perfect reconstruction. Examples include RLE, Huffman coding, and LZW. Lossy compression discards some information, resulting in a smaller file size but a loss of image quality. Examples include JPEG (DCT) and JPEG 2000 (DWT).

2.  **Question:** What is energy compaction, and why is it important for image compression?
    *   **Answer:** Energy compaction is the ability of a transform to concentrate most of the image energy into a small number of coefficients.  This is important because these coefficients can be encoded with higher precision, while the remaining coefficients can be quantized more aggressively (or even discarded) without significantly affecting the perceived image quality.

3.  **Question:** Describe the steps involved in using the DCT for image compression.
    *   **Answer:** 1. Divide the image into blocks (e.g., 8x8). 2. Apply the DCT to each block. 3. Quantize the DCT coefficients. 4. Apply entropy encoding (e.g., Huffman coding) to the quantized coefficients.

4.  **Question:** What are the advantages of using the DWT over the DCT for image compression?
    *   **Answer:** The DWT often provides better performance at high compression ratios, exhibits fewer blocking artifacts, supports progressive transmission, and is better suited for images with sharp edges and textures.

5.  **Exercise:** Calculate the compression ratio if an original image of size 1MB is compressed to 256KB.
    *   **Answer:** CR = (1MB) / (256KB) = (1024KB) / (256KB) = 4.  Therefore, the compression ratio is 4:1.

6.  **Exercise:** Research and compare the performance of JPEG and JPEG 2000 for different types of images (e.g., natural scenes, medical images, text). Analyze their compression ratios and image quality based on PSNR and subjective evaluation.

---

### Important Points to Remember:

*   Image transforms are essential tools in image data compression.
*   DCT is the most widely used transform due to its good energy compaction and relatively low computational complexity.
*   DWT offers advantages at high compression ratios and is used in JPEG 2000.
*   Quantization is a critical step in lossy compression, where information is discarded to reduce file size.
*   Entropy encoding further compresses the quantized coefficients.
*   There is a trade-off between compression ratio and image quality.
*   Understanding the properties of different transforms is crucial for selecting the appropriate transform for a given application.
