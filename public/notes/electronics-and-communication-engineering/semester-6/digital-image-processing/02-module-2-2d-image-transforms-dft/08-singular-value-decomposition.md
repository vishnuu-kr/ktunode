---
title: "Singular Value Decomposition"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee18"
status: "completed"
scrapedAt: "2026-05-23T18:00:34.218Z"
---
# DIGITAL IMAGE PROCESSING - MODULE 2: 2D IMAGE TRANSFORMS: DFT

## TOPIC: SINGULAR VALUE DECOMPOSITION (SVD)

### 1. INTRODUCTION TO SINGULAR VALUE DECOMPOSITION (SVD)

Singular Value Decomposition (SVD) is a fundamental matrix factorization technique that has broad applications in digital image processing, including image compression, noise reduction, and feature extraction. It decomposes any real or complex matrix into three other matrices, revealing the underlying structure and properties of the matrix.

**Key Concept:** SVD decomposes a matrix $A$ (which can be a representation of an image) into the product of three matrices: $U$, $\Sigma$, and $V^T$.

**Mathematical Representation:**

For any $m \times n$ matrix $A$, its SVD is given by:

$A = U \Sigma V^T$

Where:

*   **$U$**: An $m \times m$ orthogonal matrix. The columns of $U$ are called the **left singular vectors**.
*   **$\Sigma$**: An $m \times n$ diagonal matrix. The diagonal entries of $\Sigma$ are called the **singular values**, denoted by $\sigma_i$. These singular values are non-negative and are typically arranged in descending order: $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0$, where $r$ is the rank of the matrix $A$. The off-diagonal entries of $\Sigma$ are zero.
*   **$V^T$**: An $n \times n$ orthogonal matrix (the transpose of $V$). The columns of $V$ (and thus the rows of $V^T$) are called the **right singular vectors**.

**Relationship to Eigenvalue Decomposition:**

SVD is closely related to eigenvalue decomposition. The singular values of $A$ are the square roots of the non-zero eigenvalues of $A^T A$ (or $AA^T$). The right singular vectors of $A$ are the eigenvectors of $A^T A$, and the left singular vectors of $A$ are the eigenvectors of $AA^T$.

*   $A^T A = (U \Sigma V^T)^T (U \Sigma V^T) = V \Sigma^T U^T U \Sigma V^T = V (\Sigma^T \Sigma) V^T$
    *   Here, $V$ contains the eigenvectors of $A^T A$, and $\Sigma^T \Sigma$ contains the eigenvalues of $A^T A$ (which are $\sigma_i^2$).
*   $AA^T = (U \Sigma V^T) (U \Sigma V^T)^T = U \Sigma V^T V \Sigma^T U^T = U (\Sigma \Sigma^T) U^T$
    *   Here, $U$ contains the eigenvectors of $AA^T$, and $\Sigma \Sigma^T$ contains the eigenvalues of $AA^T$ (which are also $\sigma_i^2$).

**(Referenced from Gonzalez & Woods, 4th Ed., Chapter 12: Image Transforms - While SVD is not directly covered as a transform like DFT/DCT in Chapter 12, its principles of matrix decomposition and its applications in signal processing and image analysis are fundamental. The concept of representing a signal or image through its constituent parts is akin to transform domain analysis.)**

### 2. PROPERTIES AND SIGNIFICANCE OF SVD

*   **Uniqueness:** The singular values are unique. The singular vectors are unique up to sign changes.
*   **Rank of a Matrix:** The number of non-zero singular values of a matrix is equal to its rank.
*   **Dimensionality Reduction:** SVD allows for a low-rank approximation of the original matrix by keeping only the largest singular values and their corresponding singular vectors. This is a powerful tool for dimensionality reduction.
*   **Data Compression:** By using a low-rank approximation, we can significantly reduce the amount of data required to represent the original matrix (image).
*   **Noise Reduction:** Smaller singular values often correspond to noise in the data. By setting these small singular values to zero, we can effectively denoise the image.

### 3. SVD IN IMAGE PROCESSING APPLICATIONS

#### 3.1. Image Compression

This is one of the most prominent applications of SVD in image processing. The idea is to exploit the fact that many real-world images can be well-approximated by a low-rank matrix.

**Process:**

1.  **Represent Image as a Matrix:** A grayscale image can be directly treated as a matrix $A$, where each element represents the pixel intensity. For a color image, each color channel (R, G, B) can be treated as a separate matrix.
2.  **Compute SVD:** Decompose the image matrix $A$ into $U$, $\Sigma$, and $V^T$.
    $A = U \Sigma V^T$
3.  **Low-Rank Approximation:** To achieve compression, we select the $k$ largest singular values ($\sigma_1, \sigma_2, \dots, \sigma_k$) and their corresponding left and right singular vectors. This creates a low-rank approximation $A_k$:
    $A_k = U_k \Sigma_k V_k^T$
    Where:
    *   $U_k$ is an $m \times k$ matrix containing the first $k$ columns of $U$.
    *   $\Sigma_k$ is a $k \times k$ diagonal matrix containing the $k$ largest singular values.
    *   $V_k^T$ is a $k \times n$ matrix containing the first $k$ rows of $V^T$.
4.  **Storage/Transmission:** Instead of storing the entire $m \times n$ matrix $A$, we store $U_k$, $\Sigma_k$, and $V_k^T$. The total storage required is $mk + k + kn$. If $k$ is significantly smaller than $m$ and $n$, this results in substantial compression.
5.  **Reconstruction:** The original image can be approximated by reconstructing the matrix $A_k$ from its components: $A_k \approx U_k \Sigma_k V_k^T$.

**Example:**

Consider a small $3 \times 3$ image matrix:

$A = \begin{pmatrix} 10 & 12 & 15 \\ 14 & 16 & 18 \\ 20 & 22 & 24 \end{pmatrix}$

Let's assume (for illustrative purposes, actual computation is more complex) that its SVD yields:

$U = \begin{pmatrix} u_{11} & u_{12} & u_{13} \\ u_{21} & u_{22} & u_{23} \\ u_{31} & u_{32} & u_{33} \end{pmatrix}$, $\Sigma = \begin{pmatrix} \sigma_1 & 0 & 0 \\ 0 & \sigma_2 & 0 \\ 0 & 0 & \sigma_3 \end{pmatrix}$, $V^T = \begin{pmatrix} v_{11} & v_{12} & v_{13} \\ v_{21} & v_{22} & v_{23} \\ v_{31} & v_{32} & v_{33} \end{pmatrix}$

If $\sigma_1$ is much larger than $\sigma_2$ and $\sigma_3$, we can approximate $A$ using only the first singular value ($k=1$):

$A_1 = U_1 \Sigma_1 V_1^T$

Where:
*   $U_1$ is the first column of $U$ ($3 \times 1$).
*   $\Sigma_1$ is the scalar $\sigma_1$ ($1 \times 1$).
*   $V_1^T$ is the first row of $V^T$ ($1 \times 3$).

$A_1 = \begin{pmatrix} u_{11} \\ u_{21} \\ u_{31} \end{pmatrix} \begin{pmatrix} \sigma_1 \end{pmatrix} \begin{pmatrix} v_{11} & v_{12} & v_{13} \end{pmatrix} = \begin{pmatrix} u_{11}\sigma_1 v_{11} & u_{11}\sigma_1 v_{12} & u_{11}\sigma_1 v_{13} \\ u_{21}\sigma_1 v_{11} & u_{21}\sigma_1 v_{12} & u_{21}\sigma_1 v_{13} \\ u_{31}\sigma_1 v_{11} & u_{31}\sigma_1 v_{12} & u_{31}\sigma_1 v_{13} \end{pmatrix}$

The storage required for $A$ is $3 \times 3 = 9$ values. The storage for $A_1$ is $3 \times 1$ (for $U_1$) + $1$ (for $\Sigma_1$) + $1 \times 3$ (for $V_1^T$) = $3 + 1 + 3 = 7$ values. This is a minor reduction for a small matrix, but the savings are significant for large image matrices. The quality of the approximation depends on the relative magnitudes of the singular values.

**(Referenced from Gonzalez & Woods, 4th Ed., Chapter 12: Image Transforms - While not directly illustrating SVD for compression in this chapter, the concept of energy compaction and the goal of representing data with fewer coefficients is a core idea shared with SVD-based compression.)**

**(Referenced from S. Jayaraman et al., Chapter 9: Image Compression - This chapter likely discusses various compression techniques, and SVD would be a natural fit to discuss under transform coding methods.)**

#### 3.2. Image Denoising

SVD can be used to remove noise from an image. Noise often manifests as small, random fluctuations in pixel values, which can correspond to small singular values in the SVD.

**Process:**

1.  **Compute SVD:** Decompose the noisy image matrix $A$ into $U$, $\Sigma$, and $V^T$.
2.  **Threshold Singular Values:** Identify and set to zero a certain number of the smallest singular values. This thresholding is based on the assumption that these small singular values represent noise.
3.  **Reconstruct Image:** Reconstruct the denoised image using the modified $\Sigma$ matrix (with zeroed-out small singular values).

**Example:**

Suppose a noisy image matrix $A_{noisy}$ has the following singular values: $\sigma_1=100.5, \sigma_2=80.2, \sigma_3=5.1, \sigma_4=0.8, \sigma_5=0.2$.

If we believe that singular values less than 1 are primarily due to noise, we can set $\sigma_4$ and $\sigma_5$ to zero, creating a modified singular value matrix $\Sigma_{denoised}$. The reconstructed image $A_{denoised}$ will be an approximation that is smoother and less noisy.

**(Referenced from Castleman, 2/e, Chapter 12: Image Restoration and Enhancement - SVD is a powerful tool for decomposition and reconstruction, which are core concepts in image restoration and enhancement.)**

#### 3.3. Feature Extraction and Dimensionality Reduction

SVD can be used to extract the most important features of an image and reduce its dimensionality. The principal components of an image, in a statistical sense, are related to the singular vectors corresponding to the largest singular values.

**Process:**

1.  **Compute SVD:** Decompose the image matrix $A$.
2.  **Select Dominant Components:** Choose the singular vectors (columns of $U$ or rows of $V^T$) associated with the largest singular values. These vectors capture the most significant variations in the image data.
3.  **Project Data:** Project the original image data onto these dominant singular vectors to obtain a lower-dimensional representation.

This is the basis of techniques like Principal Component Analysis (PCA) when applied to image data, where SVD is often used for computation.

**(Referenced from Anil K Jain, Chapter 7: Image Compression - While Jain's book focuses on various compression methods, the underlying principle of finding compact representations of image data often involves techniques like PCA, which are closely linked to SVD.)**

### 4. COMPARISON WITH OTHER 2D IMAGE TRANSFORMS (DFT, DCT)

While DFT and DCT transform an image from the spatial domain to a frequency or related domain, SVD decomposes the image into components based on its inherent linear structure and energy distribution.

| Feature           | DFT (Discrete Fourier Transform)                                   | DCT (Discrete Cosine Transform)                                        | SVD (Singular Value Decomposition)                                             |
| :---------------- | :----------------------------------------------------------------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **Domain**        | Frequency domain (sinusoidal components)                           | Frequency-like domain (cosine components)                              | Matrix factorization based on singular values and vectors (no specific domain) |
| **Basis Functions** | Sines and cosines of different frequencies                         | Cosine functions of different frequencies                              | Not explicitly defined basis functions in the traditional sense; uses singular vectors. |
| **Energy Compaction** | Good for periodic signals, but can spread energy                   | Excellent energy compaction, especially for correlated data (like images) | Excellent energy compaction by selecting dominant singular values.             |
| **Data Representation** | Represents image as a sum of sinusoids                             | Represents image as a sum of cosine basis functions                    | Represents image as a sum of outer products of singular vectors.               |
| **Compression**   | Can be used for compression by quantizing frequency coefficients   | Widely used for image compression (e.g., JPEG) due to high energy compaction | Very effective for compression by low-rank approximation.                      |
| **Reversibility** | Perfectly reversible                                               | Perfectly reversible                                                   | Perfectly reversible (exact SVD). Approximations are not.                    |
| **Sensitivity to Noise** | Can be sensitive to noise, which spreads across frequencies      | Generally less sensitive to noise than DFT, better for compression     | Can be used for denoising by thresholding small singular values.               |
| **Computational Cost** | Moderate (FFT)                                                     | Moderate (FFT-based algorithms exist)                                  | Can be computationally intensive, especially for large matrices.               |
| **Key Application** | Signal analysis, filtering, pattern recognition                    | Image compression, feature extraction, denoising                       | Image compression, denoising, dimensionality reduction, recommender systems. |

**(Referenced from Gonzalez & Woods, 4th Ed., Chapter 12: Image Transforms - provides detailed comparisons of DFT, DCT, Walsh-Hadamard, Haar, and other transforms, highlighting their strengths and weaknesses. SVD's unique approach to decomposition places it in a different category but shares the goal of efficient representation.)**

### 5. COMPUTATIONAL ASPECTS AND COMPLEXITY

Calculating the SVD of an $m \times n$ matrix can be computationally expensive, especially for large images. The most common algorithms are based on iterative methods that converge to the singular values and vectors.

*   For an $N \times N$ image matrix, computing the SVD can have a complexity of roughly $O(N^3)$ or $O(N^4)$ depending on the algorithm.
*   This is significantly higher than the computational complexity of the Fast Fourier Transform (FFT) for DFT ($O(N^2 \log N)$) or DCT.
*   Therefore, for real-time applications or very large images, direct SVD computation might be prohibitive.
*   However, approximations and specialized algorithms exist to speed up the process for specific applications, like finding the top-k singular values.

### 6. IMPORTANT POINTS TO REMEMBER

*   **SVD is a matrix decomposition:** $A = U \Sigma V^T$.
*   **Singular values ($\sigma_i$) are non-negative and ordered:** $\sigma_1 \ge \sigma_2 \ge \dots \ge 0$.
*   **Low-rank approximation is key to compression:** $A_k = U_k \Sigma_k V_k^T$.
*   **SVD can denoise by zeroing small singular values.**
*   **SVD is computationally intensive:** Complexity is a major consideration for its practical application.
*   **The number of non-zero singular values equals the rank of the matrix.**
*   **$U$ and $V$ are orthogonal matrices.**

### 7. PRACTICE QUESTIONS AND EXERCISES

**Question 1:**

What are the three matrices that a matrix $A$ is decomposed into during Singular Value Decomposition?

**Answer:**
$U$, $\Sigma$, and $V^T$.

**Question 2:**

What is the primary advantage of using SVD for image compression?

**Answer:**
SVD allows for a low-rank approximation of the image matrix by retaining only the most significant singular values and their corresponding singular vectors. This significantly reduces the number of data points needed to represent the image, achieving compression.

**Question 3:**

How can SVD be used for image denoising?

**Answer:**
By computing the SVD of a noisy image and then setting the smallest singular values to zero (thresholding). Reconstructing the image from the modified singular value matrix effectively removes noise components that are often associated with these small singular values.

**Question 4:**

Given a $100 \times 100$ grayscale image. If we perform SVD and decide to compress it using the top $k=10$ singular values and vectors, how many values do we need to store compared to the original image?

**Answer:**
*   Original image storage: $100 \times 100 = 10000$ values.
*   For SVD compression with $k=10$:
    *   $U_k$: $100 \times 10$ matrix = 1000 values.
    *   $\Sigma_k$: $10 \times 10$ diagonal matrix = 10 values.
    *   $V_k^T$: $10 \times 100$ matrix = 1000 values.
*   Total storage for compressed representation: $1000 + 10 + 1000 = 2010$ values.
*   This is a significant reduction from 10000 values.

**Question 5 (Conceptual):**

Imagine an image where the main features are captured by the top 5 singular values, and the remaining singular values are very small. What would happen to the image if you kept all singular values versus only the top 5?

**Answer:**
*   **Keeping all singular values:** The reconstructed image would be an exact (or very close to exact) replica of the original image.
*   **Keeping only the top 5 singular values:** The reconstructed image would be a low-rank approximation of the original. It would retain the most important features and structures of the image, but finer details and potentially some noise might be lost. The image quality would likely be good, with significant compression achieved.

### 8. ALIGNMENT WITH COURSE OUTCOMES

*   **CO1: Explain different components of image processing system (Knowledge Level: K2):** Understanding SVD as a matrix decomposition tool helps explain how image data can be represented and manipulated internally within an image processing system.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3):** SVD is a key mathematical technique for analyzing the underlying structure of image data, revealing important properties like rank and principal components, which is crucial for advanced image processing.
*   **CO3: Illustrate the various schemes of image compression (Knowledge Level: K3):** SVD is a fundamental method for image compression through low-rank approximation, allowing students to understand and illustrate how data reduction is achieved.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3):** SVD's ability to denoise images by manipulating singular values directly relates to image filtering and restoration concepts.
*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2):** While not a primary segmentation technique, SVD can be used in pre-processing or feature extraction steps that aid in segmentation, by reducing dimensionality and highlighting important image characteristics.

---
**References:**

*   Gonzalez Rafael C, Woods Richard E. *Digital Image Processing*, 4th Edition. Pearson.
*   Jayaraman S, Esakkirajan S, Veerakumar T. *Digital Image Processing*. McGraw Hill, 1st Edition.
*   Castleman Kenneth R. *Digital Image Processing*, 2nd Edition. Pearson Education.
*   Jain Anil K. *Fundamentals of Digital Image Processing*. PHI.
*   Pratt William K. *Digital Image Processing*, 4th Edition. John Wiley.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
