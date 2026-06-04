---
title: "Vector quantization"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Transforms "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc66"
status: "completed"
scrapedAt: "2026-05-20T16:53:22.704Z"
---
## DIGITAL IMAGE PROCESSING: Module 4 - Image Transforms: Vector Quantization

**Learning Outcomes:**

*   Understand the concept of vector quantization and its application in image compression.
*   Explain the differences between scalar and vector quantization.
*   Describe the LBG (Linde-Buzo-Gray) algorithm for designing codebooks.
*   Calculate the distortion introduced by vector quantization.
*   Analyze the advantages and disadvantages of vector quantization.
*   Apply vector quantization to image compression.

---

**1. Introduction to Vector Quantization (VQ)**

*   **Definition:** Vector quantization (VQ) is a lossy data compression technique where the input data is divided into blocks or vectors, and each vector is approximated by the closest vector from a predefined set of vectors called a *codebook*.
*   **Key Idea:** Replace a group of input data values (a vector) with an index pointing to the best matching codeword in the codebook.  This index requires fewer bits than representing the original vector.
*   **Goal:** To reduce the number of bits required to represent an image or other data while maintaining acceptable visual quality.

**2. Scalar Quantization vs. Vector Quantization**

*   **Scalar Quantization:**
    *   Quantizes each input data point (scalar) independently.
    *   Simpler to implement.
    *   Less efficient than vector quantization in exploiting correlations between data points.
    *   Example: Quantizing pixel intensities individually.
*   **Vector Quantization:**
    *   Quantizes groups of data points (vectors) together.
    *   More complex to implement.
    *   More efficient because it can exploit correlations within the vector.
    *   Example: Quantizing a block of 4x4 pixels as a single vector.

*   **Why Vector Quantization is Better:**
    *   Exploits statistical dependencies between data points in a vector.
    *   Can represent a wider range of shapes and patterns.
    *   Leads to higher compression ratios for a given distortion level.
    *   Shape Gain: Vector quantization captures the shapes within a vector, leading to more efficient representation.
    *   Memoryless Source Gain: Overcomes the limitations of representing correlated data as independent points.

**Example:**

Imagine quantizing two correlated random variables, X and Y.

*   **Scalar Quantization:** Would independently quantize X and Y, ignoring their correlation. This can lead to suboptimal results.
*   **Vector Quantization:** Would treat (X, Y) as a vector and quantize it based on the overall distribution of (X, Y). This takes the correlation into account.

**3. The LBG (Linde-Buzo-Gray) Algorithm for Codebook Design**

*   **Purpose:**  The LBG algorithm (also known as the k-means algorithm for VQ) is an iterative clustering algorithm used to design the optimal codebook for a given training set.
*   **Steps:**

    1.  **Initialization:**
        *   Choose an initial codebook (a set of `k` codewords). This can be done randomly, or by selecting `k` vectors from the training set.
    2.  **Assignment (Encoding):**
        *   For each training vector, find the closest codeword in the current codebook based on a distance metric (e.g., Euclidean distance).
        *   Assign the training vector to the cluster associated with that closest codeword.
    3.  **Update (Decoding):**
        *   For each cluster, calculate the centroid (mean) of all the training vectors belonging to that cluster.
        *   Replace the codeword with the centroid of its cluster.
    4.  **Iteration:**
        *   Repeat steps 2 and 3 until the total distortion (the average distance between training vectors and their assigned codewords) falls below a threshold or the change in distortion is negligible.

*   **Distance Metric:** Commonly used is the Euclidean distance:

    ```
    d(x, y) = sqrt(Σ (xi - yi)^2)  for i = 1 to n
    ```
    where `x` and `y` are two vectors of length `n`.

*   **Advantages of LBG:**
    *   Relatively simple to implement.
    *   Generally converges to a locally optimal codebook.

*   **Disadvantages of LBG:**
    *   Sensitive to the initial codebook. Different initializations can lead to different results.
    *   Can get stuck in local optima.
    *   Computationally intensive, especially for large training sets and large codebooks.

**Example (Simplified):**

Let's say we have a training set of 4 2D vectors: {(1, 1), (1, 2), (4, 3), (4, 4)} and we want to create a codebook with 2 codewords (k=2).

1.  **Initialization:**  Randomly choose (1,1) and (4,4) as the initial codewords.
2.  **Assignment:**
    *   (1, 1) is closest to (1, 1) (cluster 1)
    *   (1, 2) is closest to (1, 1) (cluster 1)
    *   (4, 3) is closest to (4, 4) (cluster 2)
    *   (4, 4) is closest to (4, 4) (cluster 2)
3.  **Update:**
    *   New codeword 1: ((1+1)/2, (1+2)/2) = (1, 1.5)
    *   New codeword 2: ((4+4)/2, (3+4)/2) = (4, 3.5)
4.  **Iteration:** Repeat steps 2 and 3 until convergence.

**4. Distortion Calculation**

*   **Purpose:** To measure the quality of the reconstructed image after vector quantization.
*   **Distortion:** Represents the average difference between the original vectors and their corresponding codewords.
*   **Common Metric:** Mean Squared Error (MSE):

    ```
    MSE = (1/N) * Σ d(xi, c(xi))^2  for i = 1 to N
    ```

    where:
    *   `N` is the number of training vectors.
    *   `xi` is the i-th training vector.
    *   `c(xi)` is the codeword assigned to `xi`.
    *   `d(xi, c(xi))` is the distance between `xi` and `c(xi)`.

*   **Other Metrics:** Peak Signal-to-Noise Ratio (PSNR) which is derived from MSE. Higher PSNR means better quality.

**5. Image Compression using Vector Quantization**

*   **Encoding (Compression):**
    1.  Divide the image into blocks (vectors) of a chosen size (e.g., 4x4, 8x8).
    2.  For each block, find the closest codeword in the codebook.
    3.  Store the *index* of the closest codeword instead of the actual pixel values.  This is the compressed representation.

*   **Decoding (Decompression):**
    1.  For each index in the compressed data, retrieve the corresponding codeword from the codebook.
    2.  Replace the index with the codeword.
    3.  Reassemble the codewords to form the reconstructed image.

*   **Compression Ratio:**

    ```
    Compression Ratio = (Original Image Size in Bits) / (Compressed Image Size in Bits)
    ```
    *   Original image size: (Image Width * Image Height * Bits per Pixel)
    *   Compressed image size: (Number of Blocks * Bits to represent the codeword index)
    *   Number of Blocks: (Image Width * Image Height) / (Block Width * Block Height)
    *   Bits to represent the codeword index: `log2(Number of codewords)` (rounded up to the nearest integer)

**Example:**

Image size: 256x256 pixels, 8 bits per pixel.
Block size: 4x4 pixels.
Number of codewords: 256.

*   Original image size: 256 * 256 * 8 = 524,288 bits
*   Number of blocks: (256 * 256) / (4 * 4) = 4096
*   Bits per index: log2(256) = 8 bits
*   Compressed image size: 4096 * 8 = 32,768 bits
*   Compression ratio: 524,288 / 32,768 = 16:1

**6. Advantages and Disadvantages of Vector Quantization**

*   **Advantages:**
    *   High compression ratios compared to scalar quantization.
    *   Simple decoding process (table lookup).
    *   Good performance for images with repetitive patterns.

*   **Disadvantages:**
    *   Computationally intensive encoding process (finding the closest codeword).
    *   Requires a large codebook for good quality, which increases storage requirements.
    *   Sensitive to the training set. A codebook trained on one type of image may not perform well on another.
    *   Block artifacts can be visible at high compression ratios.

**7. Improvements and Variations of Vector Quantization**

*   **Tree-Structured VQ:** Organizes the codebook in a tree structure to speed up the search process.
*   **Gain-Shape VQ:** Separates the gain (energy) and shape of a vector, quantizing them separately.
*   **Adaptive VQ:** Adapts the codebook to the local characteristics of the image.
*   **Classified VQ:**  Divides the image into different classes (e.g., smooth regions, edge regions) and uses different codebooks for each class.

**8. Important Points to Remember**

*   Vector quantization is a lossy compression technique.
*   The LBG algorithm is a widely used method for codebook design.
*   Distortion measures the quality of the reconstructed image.
*   A larger codebook generally results in better quality but requires more storage and computation.
*   The choice of block size and codebook size affects the compression ratio and image quality.
*   VQ exploits spatial redundancies within blocks of pixels.

**Practice Questions and Exercises:**

1.  **Explain the difference between scalar and vector quantization. Give an example of each.**

    *   *Answer:* Scalar quantization quantizes individual data points, while vector quantization quantizes groups of data points (vectors). Scalar quantization is simpler but less efficient. Example: Scalar – quantizing individual pixel intensities. Vector – quantizing a 4x4 block of pixels.
2.  **Describe the steps involved in the LBG algorithm for codebook design.**

    *   *Answer:* The LBG algorithm involves Initialization, Assignment, and Update steps. See Section 3 above.
3.  **Calculate the compression ratio achieved by vector quantization given the following information: image size = 512x512 pixels, 8 bits per pixel, block size = 8x8 pixels, codebook size = 64 codewords.**

    *   *Answer:*
        *   Original image size: 512 * 512 * 8 = 2,097,152 bits
        *   Number of blocks: (512 * 512) / (8 * 8) = 4096
        *   Bits per index: log2(64) = 6 bits
        *   Compressed image size: 4096 * 6 = 24,576 bits
        *   Compression ratio: 2,097,152 / 24,576 = 85.33:1
4.  **What are some advantages and disadvantages of vector quantization?**

    *   *Answer:* See Section 6 above.
5.  **How does the size of the codebook affect the performance of vector quantization?**

    *   *Answer:* A larger codebook generally results in better image quality because it can represent a wider range of vectors. However, it also increases the storage requirements for the codebook and the computational cost of finding the closest codeword during encoding.
6. **Why do you need a training dataset to create a codebook for Vector Quantization?**

    *Answer:* Vector quantization relies on having a representative set of image data to create a codebook that reflects the types of patterns commonly found in those images. A training dataset allows the LBG algorithm to find clusters of similar vectors and create codewords that best represent these clusters.  Without a training dataset, you would have to rely on a randomly generated codebook, which would likely result in poor compression and low-quality reconstructions.
