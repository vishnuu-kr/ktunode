---
title: "Approaches to Image Compression"
subject: "DATA COMPRESSION"
module: "Module 2: Advanced Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b788"
status: "completed"
scrapedAt: "2026-05-20T16:44:33.630Z"
---
## DATA COMPRESSION: Module 2 - Advanced Techniques: Image Compression Approaches

These notes cover the different approaches to image compression, focusing on advanced techniques.

**Learning Outcomes:**

*   Understand the fundamental principles behind different image compression techniques.
*   Differentiate between lossless and lossy image compression methods.
*   Describe the working principles of transform coding techniques like DCT and Wavelet.
*   Explain the advantages and disadvantages of different image compression standards.
*   Apply appropriate image compression techniques based on specific application requirements.

**1. Introduction to Image Compression**

*   **Definition:** Image compression is the process of reducing the amount of data required to represent a digital image. This is essential for efficient storage, transmission, and processing of images.
*   **Why Compress Images?**
    *   **Reduced Storage Space:**  Less disk space required for archiving and backups.
    *   **Faster Transmission:**  Reduced bandwidth requirements, leading to faster download and upload speeds.
    *   **Efficient Processing:**  Reduced computational load for image processing tasks.
*   **Key Concepts:**
    *   **Redundancy:**  Images contain significant redundancy (correlated pixels, repeated patterns).  Compression aims to eliminate this redundancy. Types of redundancy include:
        *   **Spatial Redundancy:** Correlation between neighboring pixels.
        *   **Temporal Redundancy:**  Correlation between consecutive frames in a video sequence.
        *   **Coding Redundancy:**  Inefficient use of code words to represent data.
        *   **Irrelevant Information:**  Data that is not visually perceptible to the human eye.

**2. Lossless vs. Lossy Compression**

*   **Lossless Compression:**
    *   **Definition:**  Reconstructs the original image *perfectly* after decompression.  No information is lost.
    *   **Suitable for:** Archiving important images, medical imaging, text-based images, images where even minor errors are unacceptable.
    *   **Compression Ratio:**  Typically lower than lossy compression (e.g., 2:1 to 3:1).
    *   **Examples:**
        *   **Run-Length Encoding (RLE):** Replaces sequences of identical pixels with a count and the pixel value.
        *   **Huffman Coding:** Assigns shorter code words to more frequent pixel values and longer code words to less frequent ones.
        *   **Lempel-Ziv-Welch (LZW):**  A dictionary-based compression algorithm. Used in GIF and TIFF formats.
        *   **PNG (Portable Network Graphics):**  A popular lossless image format. Often combines DEFLATE compression (a variant of LZW) with filtering techniques.

*   **Lossy Compression:**
    *   **Definition:**  Achieves higher compression ratios by discarding some information that is considered less visually important.  The reconstructed image is not identical to the original.
    *   **Suitable for:**  Photographs, videos, images where some loss of quality is acceptable for significant reduction in file size.
    *   **Compression Ratio:**  Can be much higher than lossless (e.g., 10:1 to 100:1 or even higher).
    *   **Examples:**
        *   **JPEG (Joint Photographic Experts Group):**  The most widely used lossy image compression standard.  Based on Discrete Cosine Transform (DCT).
        *   **JPEG 2000:**  A more recent standard based on Wavelet transform.  Offers better compression performance and features than JPEG.
        *   **WEBP:** A modern image format developed by Google that offers both lossless and lossy compression.
        *   **High Efficiency Image File Format (HEIF):** Often uses HEVC (H.265) compression.

**3. Transform Coding**

*   **Principle:** Transform coding converts an image from the spatial domain (pixel values) to a transform domain, where the energy is concentrated in a few coefficients. These coefficients are then quantized and encoded.
*   **Key Steps:**
    1.  **Transformation:** Apply a mathematical transform to the image.
    2.  **Quantization:** Reduce the number of bits needed to represent the transformed coefficients.  This is where loss occurs in lossy compression.
    3.  **Encoding:** Encode the quantized coefficients using entropy coding (e.g., Huffman coding, arithmetic coding).
*   **Common Transforms:**
    *   **Discrete Cosine Transform (DCT):**
        *   **Description:** Decomposes the image into different frequency components.  Most of the energy is concentrated in the low-frequency components.
        *   **Used in:** JPEG, MPEG (video compression).
        *   **Process:**  The image is divided into 8x8 blocks. Each block is transformed using DCT. The DCT coefficients are then quantized (more aggressive quantization for high-frequency components).
    *   **Wavelet Transform:**
        *   **Description:** Decomposes the image into different frequency bands and scales (resolution levels).  Provides better energy compaction and handles edges and textures more effectively than DCT.
        *   **Used in:** JPEG 2000.
        *   **Types:** Discrete Wavelet Transform (DWT). Common wavelet families include Daubechies, Haar, and Coiflet.
*   **Why Transform Coding?**
    *   **Energy Compaction:**  Concentrates the energy of the image into fewer coefficients, allowing for efficient compression.
    *   **Perceptual Relevance:**  Allows for selective discarding of less visually important frequency components (quantization).

**4. JPEG Compression (Lossy)**

*   **Steps:**
    1.  **Color Space Conversion:** Convert the image from RGB to YCbCr (luminance and chrominance components). Chrominance components (Cb and Cr) can be subsampled (e.g., 4:2:0) since the human eye is less sensitive to color variations.
    2.  **Block Division:** Divide the image into 8x8 blocks.
    3.  **DCT Transformation:** Apply DCT to each 8x8 block.
    4.  **Quantization:**  Quantize the DCT coefficients using a quantization table. This table specifies the quantization step size for each coefficient.  Higher frequencies are quantized more coarsely. This is the main source of loss.
    5.  **Zig-Zag Scanning:** Order the quantized DCT coefficients in a zig-zag pattern to group low-frequency coefficients together.
    6.  **Entropy Coding:**  Encode the DC (Direct Current - average value) coefficient and the AC (Alternating Current) coefficients using Huffman coding or arithmetic coding. RLE can be used to encode sequences of zeros.

*   **Advantages:**
    *   High compression ratios.
    *   Widely supported and compatible.
*   **Disadvantages:**
    *   Lossy compression - image quality degrades with increasing compression ratios.
    *   Blocking artifacts at high compression ratios (due to independent processing of 8x8 blocks).
    *   Not suitable for images requiring perfect reconstruction.

**5. JPEG 2000 Compression (Lossy & Lossless)**

*   **Based on:** Discrete Wavelet Transform (DWT).
*   **Key Features:**
    *   **Superior Compression Performance:**  Better compression ratios than JPEG, especially at low bit rates.
    *   **Progressive Transmission:**  Allows for images to be decoded and displayed progressively, starting with a low-resolution version and gradually increasing the quality.
    *   **Region of Interest (ROI) Coding:**  Allows for different regions of the image to be encoded with different quality levels.
    *   **Lossless and Lossy Compression:**  Can support both lossless and lossy compression within the same framework.
    *   **Error Resilience:**  More robust to transmission errors than JPEG.
*   **Steps:**
    1.  **Preprocessing:**  Tiling (optional division of the image into tiles).
    2.  **Wavelet Transform:** Apply DWT to each tile.
    3.  **Quantization:** Quantize the wavelet coefficients.
    4.  **Entropy Coding:**  Encode the quantized coefficients using EBCOT (Embedded Block Coding with Optimal Truncation).

*   **Advantages:**
    *   Better compression ratios and image quality compared to JPEG.
    *   Supports progressive transmission and ROI coding.
    *   Supports both lossless and lossy compression.
*   **Disadvantages:**
    *   More computationally complex than JPEG.
    *   Less widely supported than JPEG.

**6. Other Image Compression Techniques**

*   **Vector Quantization (VQ):**  Divides the image into vectors (blocks of pixels) and maps each vector to the closest codeword in a codebook.
*   **Fractal Compression:**  Based on the idea that parts of an image often resemble other parts of the same image.

**7. Image Compression Standards & File Formats**

*   **JPEG (.jpg, .jpeg):**  Most widely used lossy image format.
*   **JPEG 2000 (.jp2, .jpx):**  More advanced image format offering better compression and features than JPEG.  Supports both lossless and lossy compression.
*   **PNG (.png):**  Lossless image format.  Suitable for images with sharp lines and text.
*   **GIF (.gif):**  Lossless image format (using LZW).  Limited to 256 colors.  Supports animation.
*   **TIFF (.tif, .tiff):**  Flexible image format that can support both lossless and lossy compression. Often used for archiving and professional imaging.
*   **WEBP (.webp):** Modern image format developed by Google. Supports both lossless and lossy. Aims to be better than JPEG and PNG.
*   **HEIF (.heic, .heif):** High Efficiency Image File Format, often uses HEVC (H.265) for compression.  Offers very high compression ratios.

**8. Application Considerations**

The choice of image compression technique depends on the specific application requirements:

*   **Medical Imaging:** Lossless compression is typically required to avoid any loss of diagnostic information.
*   **Web Images:** Lossy compression (JPEG, WEBP) is often used to reduce file sizes and improve website loading times.
*   **Archiving:**  Lossless compression (PNG, TIFF with lossless compression) is preferred for preserving the original image quality.
*   **Digital Photography:** Lossy compression (JPEG) is commonly used to store photos efficiently.  RAW formats (uncompressed or lightly compressed) are also popular for allowing maximum flexibility in post-processing.
*   **Video:** Lossy compression (MPEG, H.264, H.265) is essential for storing and transmitting video data.

**Important Points to Remember:**

*   **Lossless vs. Lossy:** Understand the fundamental difference and when to choose each.
*   **Transform Coding:**  Grasp the basic principles of transform coding and the role of DCT and Wavelet transforms.
*   **Quantization:**  Recognize that quantization is the main source of loss in lossy compression.
*   **Compression Ratio vs. Image Quality:**  There is a trade-off between compression ratio and image quality.
*   **File Format Compatibility:**  Consider the compatibility of different image formats when choosing a compression technique.

**Practice Questions/Exercises:**

1.  **What are the main differences between lossless and lossy image compression? Give examples of each.**

    *   **Answer:** Lossless compression reconstructs the original image perfectly without any loss of information, while lossy compression discards some information to achieve higher compression ratios. Examples of lossless compression include PNG, GIF, and TIFF (with LZW). Examples of lossy compression include JPEG and JPEG 2000.

2.  **Explain the basic principles of transform coding. Why is it used in image compression?**

    *   **Answer:** Transform coding converts an image from the spatial domain to a transform domain, concentrating the image's energy into fewer coefficients. This allows for efficient compression by quantizing (discarding) less important coefficients and encoding the remaining coefficients.  It's used to decorrelate the pixel values, making them more amenable to compression.

3.  **Describe the steps involved in JPEG compression.**

    *   **Answer:** The steps are: Color space conversion (RGB to YCbCr), block division (8x8), DCT transformation, quantization, zig-zag scanning, and entropy coding (Huffman coding).

4.  **What are the advantages and disadvantages of JPEG 2000 compared to JPEG?**

    *   **Answer:** *Advantages:* Better compression ratios, progressive transmission, region of interest coding, and supports both lossless and lossy compression. *Disadvantages:* More computationally complex and less widely supported.

5.  **You need to store medical images for long-term archiving. Which image compression technique would you choose and why?**

    *   **Answer:** Lossless compression (e.g., PNG or TIFF with lossless compression) should be used to ensure that no diagnostic information is lost during compression and storage.

6.  **Explain what `spatial redundancy` is in the context of image compression and give an example.**

    *   **Answer:** Spatial redundancy refers to the correlation between neighboring pixels in an image. For example, in a smooth gradient, adjacent pixels will have very similar color values, making it redundant to store each pixel's value independently.

7.  **Explain what `quantization` does, and why it is the step where loss occurs during lossy image compression.**

    *   **Answer:** Quantization reduces the number of bits used to represent the transform coefficients (e.g., DCT coefficients).  It maps a range of values to a single value, effectively discarding information and introducing error. This is where the loss occurs because the original values cannot be perfectly recovered after quantization.

8.  **Describe one application where you would prefer using WEBP over JPEG, and explain your reason.**

    *   **Answer:**  For web images needing transparency and a good compression ratio, WEBP is preferable.  WEBP's lossless compression supports transparency channels while providing better compression compared to PNG and offers better lossy compression than JPEG.

This comprehensive guide should provide a solid foundation for understanding image compression techniques.  Good luck with your studies!
