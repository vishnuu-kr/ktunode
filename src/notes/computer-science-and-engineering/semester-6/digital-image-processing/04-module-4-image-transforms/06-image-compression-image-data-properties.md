---
title: "Image Compression - Image data Properties"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Transforms "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc63"
status: "completed"
scrapedAt: "2026-05-20T16:53:20.560Z"
---
# DIGITAL IMAGE PROCESSING - MODULE 4: IMAGE TRANSFORMS - IMAGE COMPRESSION - IMAGE DATA PROPERTIES

## Learning Outcomes:

*   Understand the fundamental concepts of image compression.
*   Identify and explain different types of image data redundancy.
*   Calculate compression ratios and understand their significance.
*   Explain the role of image data properties in compression algorithms.
*   Distinguish between lossless and lossy compression techniques in relation to image data properties.

## 1. Introduction to Image Compression

*   **Definition:** Image compression is the process of reducing the amount of data required to represent a digital image. This is achieved by identifying and eliminating redundancy and irrelevant information.

*   **Why Compress?**
    *   **Reduced Storage Space:** Images consume significant storage. Compression allows for storing more images in a given amount of space.
    *   **Faster Transmission:** Smaller image files transmit faster over networks, reducing bandwidth requirements.
    *   **Efficient Processing:** Some image processing tasks become faster with smaller image files.

*   **Types of Compression:**
    *   **Lossless Compression:** Reconstructs the original image perfectly after decompression. Suitable for images where detail is critical (e.g., medical images, text images). Examples: Run-Length Encoding (RLE), Huffman Coding, Lempel-Ziv-Welch (LZW).
    *   **Lossy Compression:** Reconstructs an approximation of the original image. Some data is permanently lost. Suitable for images where slight degradation is acceptable (e.g., photographs, videos). Examples: JPEG, JPEG 2000, Wavelet compression.

## 2. Image Data Properties: Redundancy

Redundancy in image data is the key to compression. By removing redundancy, we can represent the image with fewer bits.

*   **2.1 Coding Redundancy (Statistical Redundancy)**

    *   **Definition:** Occurs when less optimal (longer) code words are used to represent frequently occurring pixel values, and/or when more optimal (shorter) code words are used to represent less frequently occurring pixel values. Essentially, the distribution of pixel intensities is not used efficiently.
    *   **Example:** Consider an image with only two gray levels: 0 and 255. If we use 8 bits to represent each pixel, we are being inefficient.  We could use 1 bit, where 0 represents gray level 0 and 1 represents gray level 255.
    *   **Removal Technique:** Variable-length coding (e.g., Huffman coding) assigns shorter codewords to frequently occurring gray levels and longer codewords to less frequent ones.

*   **2.2 Interpixel Redundancy (Spatial Redundancy, Geometric Redundancy)**

    *   **Definition:** Occurs because neighboring pixels are often correlated (similar).  This is because objects and surfaces in images tend to have smooth variations in color and intensity.
    *   **Example:**  A photograph of a blue sky will have many adjacent pixels with very similar blue values.
    *   **Removal Techniques:**
        *   **Run-Length Encoding (RLE):**  Records consecutive sequences of the same pixel value (runs).
        *   **Differential Coding:**  Encodes the difference between successive pixels rather than the actual pixel values.
        *   **Transform Coding (e.g., Discrete Cosine Transform (DCT) in JPEG):** Transforms the image into a different domain where the energy is concentrated in a few coefficients.  These coefficients are then quantized and encoded.

*   **2.3 Psychovisual Redundancy**

    *   **Definition:** Occurs because the human visual system is not equally sensitive to all types of image information. Certain information can be removed without significantly affecting the perceived image quality.
    *   **Example:** The human eye is less sensitive to high-frequency components (rapid changes in intensity) in certain regions of an image.
    *   **Removal Techniques:**
        *   **Quantization:**  Reducing the number of bits used to represent a pixel value.  This is a lossy process.
        *   **Thresholding:**  Discarding or coarsely quantizing less important frequency components.
        *   **Subsampling/Downsampling:** Reducing the spatial resolution of the image.

## 3. Compression Ratio

*   **Definition:** A measure of the reduction in data required to represent an image.

*   **Formula:**

    `Compression Ratio = Original Image Size / Compressed Image Size`

*   **Example:** If an image originally requires 1 MB of storage and after compression requires 250 KB of storage:

    `Compression Ratio = 1 MB / 250 KB = 1024 KB / 250 KB ≈ 4.1:1`

    This means the image has been compressed by a factor of approximately 4.1.

*   **Significance:** Higher compression ratios mean greater storage savings and faster transmission, but with lossy compression, a higher ratio usually means more image degradation.

## 4. The Role of Image Data Properties in Compression Algorithms

*   Compression algorithms are designed to exploit specific types of redundancy in image data.

    *   **Lossless algorithms** primarily focus on removing coding and interpixel redundancy *without losing any information*.  They are mathematically reversible.
    *   **Lossy algorithms** exploit all three types of redundancy (coding, interpixel, and psychovisual). They discard information that is deemed less important to the human visual system, achieving significantly higher compression ratios at the cost of some image degradation.

*   **Example:** JPEG compression leverages the Discrete Cosine Transform (DCT) to decorrelate pixels (removing interpixel redundancy).  It then quantizes the DCT coefficients, removing psychovisual redundancy by discarding high-frequency components that are less noticeable to the human eye. Huffman coding is used to remove coding redundancy in the quantized coefficients.

## 5. Lossless vs. Lossy Compression and Image Data Properties

| Feature             | Lossless Compression                                                                    | Lossy Compression                                                                            |
| ------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Redundancy Targeted** | Primarily coding and interpixel redundancy                                           | All three types of redundancy (coding, interpixel, psychovisual)                               |
| **Data Loss**          | No data loss; original image can be perfectly reconstructed                               | Some data is permanently lost; reconstructed image is an approximation                       |
| **Compression Ratio**   | Typically lower (e.g., 2:1 to 5:1)                                                  | Typically higher (e.g., 10:1 to 100:1 or even higher)                                      |
| **Application**       | Images where detail is critical (medical, text, archiving)                              | Images where slight degradation is acceptable (photographs, videos, streaming)                 |
| **Examples**         | Run-Length Encoding (RLE), Huffman Coding, Lempel-Ziv-Welch (LZW), PNG (for still images) | JPEG, JPEG 2000, MPEG (for videos), WebP (can be both lossless and lossy, depending on settings)|
| **Impact of Redundancy** | Highly sensitive to the statistical distribution of pixel values. Less redundancy yields less compression. | Can achieve high compression even with images that have complex textures or features.       |

## 6. Important Points to Remember

*   **Redundancy is key:** Image compression works by removing redundancy.
*   **Types of Redundancy:** Coding, Interpixel, and Psychovisual.
*   **Lossless vs. Lossy:** Choose the right technique based on the application and the required image quality.
*   **Compression Ratio:** A measure of compression efficiency.
*   **Human Visual System:**  Psychovisual redundancy relies on the limitations of the HVS.

## 7. Practice Questions/Exercises

**Question 1:** Explain the difference between coding redundancy and interpixel redundancy. Provide an example of each.

**Answer:**

*   **Coding Redundancy:** Arises from inefficient representation of pixel values, such as using a fixed number of bits for all pixel values when some values occur much more frequently than others.
    *   **Example:** Using 8 bits (256 possible values) to represent pixels in an image that only contains two gray levels (0 and 255). A more efficient code would use only 1 bit.

*   **Interpixel Redundancy:** Arises from the correlation between neighboring pixels.  Pixels close to each other in an image often have similar values.
    *   **Example:**  A smooth gradient in an image where the value of a pixel is very similar to the values of its neighboring pixels.

**Question 2:** An image originally requires 5 MB of storage. After compression, it requires 500 KB. Calculate the compression ratio.

**Answer:**

*   Compression Ratio = Original Image Size / Compressed Image Size
*   Compression Ratio = 5 MB / 500 KB = 5120 KB / 500 KB = 10.24
*   Compression Ratio = 10.24:1

**Question 3:**  Explain why lossy compression techniques can achieve higher compression ratios than lossless techniques.

**Answer:**

Lossy compression techniques can achieve higher compression ratios because they are allowed to discard information that is deemed less important to the human visual system (psychovisual redundancy).  Lossless techniques, on the other hand, must preserve all information in the image to allow for perfect reconstruction, limiting the amount of redundancy that can be removed.

**Question 4:**  Give an example of an image type where you would definitely want to use lossless compression and explain why.

**Answer:**

Medical images (e.g., X-rays, MRIs) require lossless compression.  Any data loss could lead to misdiagnosis or incorrect treatment.  The integrity of the image data is paramount.

**Question 5:** Describe how the JPEG compression algorithm exploits interpixel and psychovisual redundancy.

**Answer:**

*   **Interpixel Redundancy:** JPEG uses the Discrete Cosine Transform (DCT) to convert the image into a set of frequency components. The DCT concentrates most of the image energy into a small number of low-frequency coefficients, thereby decorrelating the pixels and reducing interpixel redundancy.

*   **Psychovisual Redundancy:** JPEG uses quantization to discard high-frequency DCT coefficients that the human eye is less sensitive to. This process removes psychovisual redundancy, as the lost information is unlikely to be noticed by a human observer.  The amount of quantization can be adjusted to control the trade-off between compression ratio and image quality.
