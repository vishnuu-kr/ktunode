---
title: "Hierarchical and Progressive Compression methods"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Transforms "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc67"
status: "completed"
scrapedAt: "2026-05-20T16:53:23.415Z"
---
## DIGITAL IMAGE PROCESSING - Module 4: Image Transforms - Hierarchical and Progressive Compression

**Learning Outcomes:**

*   Understand the concept of hierarchical image compression.
*   Explain the principles of progressive image transmission.
*   Compare and contrast different hierarchical and progressive compression techniques.
*   Analyze the advantages and disadvantages of these techniques.
*   Apply relevant transforms in hierarchical and progressive compression schemes.

**1. Introduction to Hierarchical and Progressive Image Compression**

*   **Motivation:** Traditional image compression methods transmit the entire image data before it can be viewed. This can be inefficient, especially for large images and slow network connections. Hierarchical and progressive methods address this limitation by allowing for a coarse version of the image to be transmitted and displayed quickly, followed by progressively finer details.

*   **Key Concepts:**
    *   **Hierarchical Compression:** Encodes the image at multiple resolutions (levels). Lower resolutions represent coarser approximations, while higher resolutions contain finer details.  Also known as scalable compression.
    *   **Progressive Transmission:** Transmits the image in multiple stages, starting with a low-resolution version and gradually refining it by adding more detail.

*   **Benefits:**
    *   **Quick preview:**  Users can quickly see a low-quality version of the image.
    *   **Early termination:**  Users can decide to stop the transmission if the initial version is sufficient.
    *   **Bandwidth efficiency:**  Less data needs to be transmitted for a basic preview.
    *   **Adaptability:** Suitable for various display sizes and network speeds.
    *   **Scalable decoding:** The image can be decoded to different resolutions based on the available resources.

**2. Hierarchical Compression Techniques**

*   **Subband Coding:**
    *   **Principle:** Decomposes the image into multiple frequency subbands using filter banks. The low-frequency subband represents the coarse approximation, while higher frequency subbands contain details.  Each subband can be encoded separately.
    *   **Process:**
        1.  **Decomposition:** Apply a filter bank (e.g., wavelet transform) to decompose the image into subbands.  Common decompositions include 2D Discrete Wavelet Transform (DWT).
        2.  **Quantization:**  Quantize the subband coefficients.  More aggressive quantization can be used for higher frequency bands, as human perception is less sensitive to high-frequency errors.
        3.  **Encoding:** Encode the quantized coefficients using entropy coding techniques (e.g., Huffman coding, arithmetic coding).
    *   **Hierarchical Nature:** The low-frequency subband can be further decomposed to create a hierarchy of representations.  This allows for progressive transmission by sending the lowest frequency band first, followed by the remaining bands.
    *   **Example:** Consider a 2-level DWT decomposition. Level 1 yields LL1 (low-low), LH1 (low-high), HL1 (high-low), HH1 (high-high) bands. Level 2 decomposes LL1 into LL2, LH2, HL2, HH2.  LL2 represents the coarsest approximation.

*   **Pyramid Coding:**
    *   **Principle:** Creates a series of images at progressively lower resolutions, forming a pyramid structure.
    *   **Process:**
        1.  **Downsampling/Decimation:** The original image is successively downsampled (e.g., by a factor of 2 in each dimension) to create lower-resolution versions. This typically involves filtering to prevent aliasing before downsampling.  Gaussian filters are often used.
        2.  **Difference Encoding:**  The difference between each level and its prediction from the next lower resolution level is encoded. This exploits the correlation between adjacent levels.
        3.  **Encoding:** Encode the difference images and the lowest resolution image.
    *   **Hierarchical Nature:** The pyramid structure inherently provides a hierarchical representation.
    *   **Example:**  A Gaussian pyramid consists of successively smoothed and downsampled versions of the original image.  A Laplacian pyramid consists of the difference between each level of the Gaussian pyramid and the upsampled version of the next lower level.  The Laplacian pyramid is a more efficient representation for image compression.

**3. Progressive Transmission Techniques**

*   **Bit-Plane Coding:**
    *   **Principle:** Transmits the image data bit-plane by bit-plane, starting with the most significant bit (MSB) and proceeding to the least significant bit (LSB).
    *   **Process:**
        1.  **Bit-Plane Extraction:**  Each pixel's value is represented in binary form. Extract each bit position across all pixels, forming a bit-plane.
        2.  **Encoding:**  Encode each bit-plane using compression techniques, such as run-length coding or entropy coding. The MSB bit-plane often contains significant information about the image structure and requires less aggressive compression.
    *   **Progressive Nature:**  As more bit-planes are transmitted, the image quality gradually improves.
    *   **Example:** Consider an 8-bit grayscale image.  The first bit-plane contains the MSB of each pixel (either 0 or 1). Subsequent bit-planes refine the pixel values.

*   **Successive Approximation Quantization (SAQ):**
    *   **Principle:**  Quantizes the image coefficients iteratively, refining the quantization levels with each stage of transmission.
    *   **Process:**
        1.  **Initial Quantization:** Apply a coarse quantization to the transform coefficients (e.g., DCT or wavelet coefficients).
        2.  **Difference Encoding:**  Encode the difference between the original coefficients and the quantized coefficients. This difference represents the quantization error.
        3.  **Refinement:**  Quantize the quantization error using a finer quantization level.  Transmit the quantized error.
        4.  **Iteration:** Repeat steps 2 and 3 with progressively finer quantization levels.
    *   **Progressive Nature:** Each iteration refines the image quality by reducing the quantization error.
    *   **Example:** Initially, all coefficients might be quantized to 0 or 1.  The difference between the original and quantized values is then computed.  This difference is then quantized more finely, and the process repeats.

**4. Comparison and Contrast**

| Feature             | Subband Coding                                  | Pyramid Coding                                 | Bit-Plane Coding                                   | Successive Approximation Quantization             |
| ------------------- | ----------------------------------------------- | ---------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| **Resolution**      | Multiple resolutions based on subbands.      | Multiple resolutions through downsampling.     | Single resolution, refined progressively.            | Single resolution, refined progressively.            |
| **Domain**          | Frequency domain.                             | Spatial domain.                               | Pixel/Coefficient domain.                              | Transform coefficient domain.                        |
| **Data Type**       | Transform coefficients (e.g., wavelet).         | Pixel values or difference images.              | Binary data (bit-planes).                            | Quantized coefficients and quantization errors.      |
| **Complexity**      | Higher complexity due to filter bank operations. | Moderate complexity.                          | Relatively simple.                                 | Moderate complexity.                                |
| **Suitable For**    | Images with frequency characteristics to exploit. | Images with spatial redundancy.                  | General-purpose image compression.                 | General-purpose image compression with transforms. |
| **Example Transform** | Wavelet transform, DCT.                          | Gaussian or Laplacian pyramids.                 | None (can be used with any transform)               | DCT, Wavelet transform                               |

**5. Advantages and Disadvantages**

| Technique          | Advantages                                                                                                        | Disadvantages                                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Hierarchical (General) | Quick preview, early termination, adaptable to various display sizes, bandwidth efficiency.                      | Increased computational complexity in encoding and decoding, potential for blocking artifacts at low resolutions. |
| Subband Coding     | Good energy compaction, effective for images with varying frequency content, good rate-distortion performance.       | Higher computational complexity, design of optimal filter banks can be challenging.                               |
| Pyramid Coding     | Simpler implementation compared to subband coding, intuitive approach.                                          | Less efficient energy compaction compared to subband coding, sensitivity to aliasing during downsampling.         |
| Progressive (General) |  Allows for gradual refinement of image quality, useful for slow network connections and limited display resources. | Can be less efficient than non-progressive methods if the entire image is always transmitted.                       |
| Bit-Plane Coding  | Simple to implement, can be used with various transforms.                                                        | Can be less efficient than other progressive methods for images with strong correlations.                               |
| SAQ                | Efficient compression, good quality at high compression ratios.                                                | Requires more complex quantization and encoding schemes.                                                              |

**6. Relevant Transforms**

*   **Discrete Cosine Transform (DCT):** Used in JPEG and other compression standards. Effective for energy compaction in images with smooth variations.
*   **Discrete Wavelet Transform (DWT):** Provides multiresolution analysis and good energy compaction. Widely used in JPEG 2000.

**7. Practice Questions/Exercises**

1.  **Explain the difference between hierarchical compression and progressive transmission.**

    *   **Answer:** *Hierarchical compression* creates multiple representations of an image at different resolutions. *Progressive transmission* is the process of transmitting an image in stages, starting with a low-resolution version and gradually refining it. Hierarchical compression is a *technique*, and progressive transmission is a *method* of using the hierarchical representation. You can use a hierarchically compressed image for progressive transmission.

2.  **Describe how subband coding can be used for hierarchical compression.**

    *   **Answer:** Subband coding decomposes an image into multiple frequency subbands. The low-frequency subband represents a coarse approximation of the image, while the higher frequency subbands contain details. By transmitting the low-frequency subband first, followed by the higher frequency subbands, a hierarchical compression scheme can be implemented.  Further decomposition of the low-frequency band can create deeper hierarchies.

3.  **What are the advantages of using bit-plane coding for progressive transmission?**

    *   **Answer:** Bit-plane coding is simple to implement and can be used with various transforms. It allows for a gradual refinement of image quality as more bit-planes are transmitted.

4.  **Explain how a Gaussian pyramid is created and its role in image compression.**

    *   **Answer:** A Gaussian pyramid is created by successively smoothing and downsampling the original image. This creates a series of images at progressively lower resolutions.  These levels can then be used with Difference encoding (e.g. to generate a Laplacian Pyramid) to compress the data, and provide a hierarchical representation suitable for progressive transmission.

5.  **What is Successive Approximation Quantization (SAQ) and how does it work in a compression scheme?**

    *   **Answer:** SAQ is an iterative quantization technique where transform coefficients are quantized progressively, refining quantization levels with each stage of transmission. Initially, coarse quantization is applied. Then, the difference between original and quantized values (quantization error) is encoded and quantized more finely in subsequent iterations. This gradually improves the image quality.

**8. Important Points to Remember**

*   Hierarchical and progressive compression techniques are valuable for efficient image transmission and storage, especially in scenarios with limited bandwidth or display resources.
*   Subband coding and pyramid coding are examples of hierarchical compression methods that create multiple resolutions of the image.
*   Bit-plane coding and successive approximation quantization are examples of progressive transmission techniques that transmit the image in stages, starting with a low-quality version and gradually refining it.
*   The choice of compression technique depends on the specific requirements of the application, such as the desired compression ratio, image quality, and computational complexity.
*   Transforms like DCT and DWT play a crucial role in many hierarchical and progressive compression schemes by compacting energy and facilitating efficient encoding.
