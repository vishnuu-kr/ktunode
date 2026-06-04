---
title: "Image Compression- Introduction"
subject: "DATA COMPRESSION"
module: "Module 2: Advanced Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b787"
status: "completed"
scrapedAt: "2026-05-20T16:44:32.930Z"
---
# Data Compression: Module 2 - Advanced Techniques: Image Compression - Introduction

## Learning Outcomes:

*   Understand the need for image compression.
*   Describe different types of image compression (lossless vs. lossy).
*   Explain the basic concepts of image data representation (pixels, color models).
*   Outline common applications of image compression.
*   Identify the key performance metrics for image compression.

## 1.  Need for Image Compression

### 1.1 The Problem: Large Image File Sizes

*   Digital images, especially high-resolution ones, can consume significant storage space.
*   Uncompressed images require substantial bandwidth for transmission over networks.
*   Processing and displaying large images can be computationally expensive, demanding powerful hardware.
*   **Example:** A single high-resolution photograph taken with a modern smartphone can easily exceed 10MB.  Imagine storing or transmitting hundreds of these!
*   **Key Idea:** Image compression reduces the amount of data required to represent an image, without significantly degrading its visual quality.

### 1.2 Reasons for Compression:
    * **Storage Space:** Minimizes the amount of storage required for image archives.
    * **Bandwidth:** Reduces the amount of data to be transmitted, leading to faster downloads and uploads.
    * **Processing Speed:** Smaller file sizes enable faster image processing and rendering.
    * **Transmission Time:** Reduced file size allows for faster transmission over networks.
    * **Economical Value:** Reducing storage and bandwidth costs results in economic benefits.

## 2. Types of Image Compression

### 2.1 Lossless Compression

*   **Definition:** Compression techniques where no information is lost during compression and decompression. The original image can be perfectly reconstructed.
*   **Ideal for:** Images where preserving detail is critical, such as medical images, scientific data, and archival images.
*   **Examples:**
    *   **Run-Length Encoding (RLE):** Effective for images with long runs of identical pixel values.  E.g., `AAAAABBBCC` becomes `5A3B2C`.
    *   **Lempel-Ziv-Welch (LZW):** Used in GIF images.  Identifies repeating patterns and assigns them short codes.
    *   **Deflate:**  Combination of Lempel-Ziv and Huffman coding, used in PNG images.
*   **Compression Ratios:** Generally lower than lossy compression (typically 2:1 to 3:1).  Compression ratio = original size / compressed size.

### 2.2 Lossy Compression

*   **Definition:** Compression techniques that discard some information during compression.  The decompressed image is not identical to the original, but the goal is to minimize the perceived difference to the human eye.
*   **Ideal for:** Images where a small amount of information loss is acceptable in exchange for significant compression, such as photographs, web graphics, and streaming video.
*   **Examples:**
    *   **JPEG (Joint Photographic Experts Group):**  Uses Discrete Cosine Transform (DCT) and quantization to discard high-frequency components.
    *   **JPEG 2000:**  A more advanced standard based on wavelet transforms, offering better compression efficiency and features than JPEG.
    *   **WebP:**  Developed by Google, combining lossless and lossy compression methods.
*   **Compression Ratios:** Can achieve significantly higher compression ratios than lossless compression (e.g., 10:1 to 100:1 or even higher).

### 2.3 Lossless vs. Lossy: A Summary

| Feature           | Lossless Compression                               | Lossy Compression                                     |
|-------------------|---------------------------------------------------|-----------------------------------------------------|
| Data Loss         | None                                              | Some                                                  |
| Reconstruction      | Perfect                                           | Imperfect (approximation of the original)              |
| Compression Ratio | Lower                                             | Higher                                                |
| Complexity        | Generally Lower                                   | Generally Higher                                      |
| Applications      | Archival, medical imaging, text documents         | Photographs, streaming video, web graphics              |
| Example Formats   | PNG, GIF, TIFF (with lossless options)           | JPEG, JPEG 2000, WebP                                |

## 3. Image Data Representation

### 3.1 Pixels

*   **Definition:**  The smallest addressable element in an image. Each pixel represents a single color or intensity.
*   **Arrangement:** Pixels are arranged in a two-dimensional grid (rows and columns).
*   **Resolution:** The number of pixels in an image (e.g., 1920 x 1080). Higher resolution images have more pixels and greater detail.

### 3.2 Color Models

*   **RGB (Red, Green, Blue):**
    *   Most common color model for digital displays.
    *   Each pixel's color is represented by the intensity of red, green, and blue light components.
    *   Typically, each component is represented by 8 bits, resulting in 24 bits per pixel (True Color).
    *   **Example:** (255, 0, 0) is pure red; (0, 255, 0) is pure green; (0, 0, 255) is pure blue; (255, 255, 255) is white; (0, 0, 0) is black.

*   **Grayscale:**
    *   Represents images using shades of gray, from black to white.
    *   Each pixel is represented by a single intensity value.
    *   Typically, each pixel is represented by 8 bits, allowing for 256 levels of gray.

*   **CMYK (Cyan, Magenta, Yellow, Key/Black):**
    *   Used in printing.
    *   Colors are created by subtracting colors from white light.

*   **HSV (Hue, Saturation, Value):**
    *   Represents colors in terms of hue (color type), saturation (intensity), and value (brightness).
    *   More intuitive for some image processing tasks.

### 3.3 Image Size Calculation

*   Image Size (in bytes) = (Width in pixels) * (Height in pixels) * (Bits per pixel) / 8
*   **Example:** A 1024x768 RGB (24 bits per pixel) image requires (1024 * 768 * 24) / 8 = 2,359,296 bytes = ~2.36 MB of storage.

## 4. Common Applications of Image Compression

*   **Digital Photography:** JPEG is the standard format for storing photographs.
*   **Web Images:** JPEG, PNG, WebP are commonly used for displaying images on websites.
*   **Video Streaming:** Lossy compression algorithms (e.g., H.264, H.265) are used to compress video frames, which are essentially sequences of images.
*   **Medical Imaging:** Lossless compression is crucial for preserving the integrity of medical images like X-rays and MRIs.
*   **Document Archiving:** TIFF (Tagged Image File Format) can be used with lossless compression for archiving important documents and images.
*   **Satellite Imagery:** Compression is essential for transmitting large amounts of data collected by satellites.

## 5. Key Performance Metrics for Image Compression

*   **Compression Ratio:** The ratio of the original image size to the compressed image size.  A higher compression ratio means more efficient compression.
    *   Compression Ratio = Original Size / Compressed Size
*   **Bit Rate (bpp - bits per pixel):** The number of bits used to represent each pixel in the compressed image.  A lower bit rate generally means a smaller file size, but may also indicate more loss.
    *   Bit Rate = Compressed Size (in bits) / (Width * Height)
*   **PSNR (Peak Signal-to-Noise Ratio):** A measure of the difference between the original and the reconstructed image. Higher PSNR values indicate better image quality.  Typically measured in decibels (dB).
*   **MSE (Mean Squared Error):** The average squared difference between the pixel values of the original and the reconstructed image. Lower MSE values indicate better image quality.
*   **Subjective Visual Quality:**  The perceived quality of the image as judged by human observers.  This is often assessed using subjective tests, as PSNR and MSE don't always perfectly correlate with perceived quality.

## Important Points to Remember

*   **Trade-off between Compression Ratio and Image Quality:** Lossy compression achieves higher compression ratios but sacrifices some image quality. Lossless compression preserves image quality but offers lower compression ratios.
*   **Application-Specific Requirements:** The choice of compression algorithm depends on the specific application and the requirements for image quality, compression ratio, and computational complexity.
*   **Perceptual Coding:** Modern compression algorithms often incorporate perceptual coding techniques that take into account the characteristics of human vision to minimize perceived distortion.

## Practice Questions/Exercises

1.  **Question:** Explain the difference between lossless and lossy image compression. Provide an example of each type and their common use cases.
    *   **Answer:** Lossless compression preserves all the original data, allowing for perfect reconstruction. Examples include PNG (web graphics) and TIFF (archival). Lossy compression discards some data, resulting in higher compression ratios but some loss of quality. Examples include JPEG (photographs) and WebP (web images).

2.  **Question:** Calculate the uncompressed size of a grayscale image with a resolution of 512x512 pixels, assuming each pixel is represented by 8 bits.
    *   **Answer:** Size = (512 * 512 * 8) / 8 = 262,144 bytes = 256 KB

3.  **Question:** What are the key performance metrics used to evaluate image compression algorithms? Explain what each metric represents.
    *   **Answer:** Key metrics include:
        *   **Compression Ratio:**  How much smaller the compressed image is compared to the original.
        *   **Bit Rate:**  The number of bits per pixel in the compressed image.
        *   **PSNR:** A measure of the difference between the original and reconstructed image (higher is better).
        *   **MSE:** The average squared difference between pixels (lower is better).
        *   **Subjective Visual Quality:**  How good the image looks to a human viewer.

4.  **Question:**  Why is lossless compression preferred for medical imaging?
    *   **Answer:** Lossless compression is preferred for medical imaging to ensure that no diagnostic information is lost during compression.  Even subtle details can be crucial for accurate diagnoses.

5.  **Question:** Give one advantage and one disadvantage of using JPEG compression.
    *   **Answer:** Advantage: High compression ratios, leading to small file sizes. Disadvantage: Lossy compression, which can result in visible artifacts, especially at high compression levels.
