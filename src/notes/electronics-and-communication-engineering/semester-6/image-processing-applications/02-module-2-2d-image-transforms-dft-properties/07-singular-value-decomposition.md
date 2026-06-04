---
title: "Singular Value Decomposition"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 2: 2D Image transforms: DFT, Properties"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef66"
status: "completed"
scrapedAt: "2026-05-23T18:01:16.424Z"
---
# Study Notes: Singular Value Decomposition (SVD)

## Module 2: 2D Image Transforms: DFT, Properties

### Topic: Singular Value Decomposition (SVD)

**Subject:** IMAGE PROCESSING APPLICATIONS

**Learning Outcomes:**

*   Understand the mathematical foundation of Singular Value Decomposition (SVD).
*   Relate SVD to the concept of eigenvalues and eigenvectors of a matrix.
*   Explain the geometric interpretation of SVD.
*   Apply SVD for dimensionality reduction in image processing.
*   Analyze the role of SVD in image compression.
*   Discuss the applications of SVD in image denoising and feature extraction.

**Course Outcomes Alignment:**

*   **CO2: Analyse the various concepts and mathematical transforms and compression schemes necessary for image processing (Knowledge Level: K4)** - SVD is a fundamental mathematical transform with direct implications for image compression and analysis.
*   **CO4: Determine the techniques for restoration of images (Knowledge Level: K5)** - SVD plays a crucial role in image denoising, which is a form of image restoration.

---

### 1. Introduction to Singular Value Decomposition (SVD)

Singular Value Decomposition (SVD) is a fundamental matrix factorization technique with wide-ranging applications in linear algebra, data analysis, and signal processing, including image processing. It allows us to decompose any matrix into three other matrices, providing valuable insights into the matrix's structure, rank, and singular values.

**Key Concept:** SVD decomposes an $m \times n$ matrix $\mathbf{A}$ into the product of three matrices:

$\mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^T$

Where:

*   $\mathbf{A}$: The original $m \times n$ matrix.
*   $\mathbf{U}$: An $m \times m$ orthogonal matrix whose columns are the **left singular vectors** of $\mathbf{A}$.
*   $\mathbf{\Sigma}$ (Sigma): An $m \times n$ diagonal matrix containing the **singular values** of $\mathbf{A}$ on its diagonal, usually arranged in descending order. The off-diagonal elements are zero.
*   $\mathbf{V}^T$: The transpose of an $n \times n$ orthogonal matrix $\mathbf{V}$. The columns of $\mathbf{V}$ (and thus the rows of $\mathbf{V}^T$) are the **right singular vectors** of $\mathbf{A}$.

**Important Point to Remember:** Orthogonal matrices have the property that their transpose is also their inverse (e.g., $\mathbf{U}^T \mathbf{U} = \mathbf{I}$ and $\mathbf{V}^T \mathbf{V} = \mathbf{I}$).

---

### 2. Mathematical Foundation and Relationship to Eigenvalues/Eigenvectors

SVD is closely related to the eigenvalue decomposition of a matrix.

**Derivation of Singular Values and Vectors:**

Let $\mathbf{A}$ be an $m \times n$ matrix.
Consider the matrices $\mathbf{A}^T \mathbf{A}$ and $\mathbf{A} \mathbf{A}^T$. Both are square and symmetric (and hence diagonalizable).

1.  **Eigenvalues of $\mathbf{A}^T \mathbf{A}$:**
    The eigenvalues of $\mathbf{A}^T \mathbf{A}$ are non-negative. Let these eigenvalues be $\lambda_1, \lambda_2, \ldots, \lambda_n$.
    The singular values, $\sigma_i$, are the square roots of these eigenvalues: $\sigma_i = \sqrt{\lambda_i}$.
    These are arranged in descending order: $\sigma_1 \ge \sigma_2 \ge \ldots \ge \sigma_n \ge 0$.

2.  **Eigenvectors of $\mathbf{A}^T \mathbf{A}$:**
    The corresponding normalized eigenvectors of $\mathbf{A}^T \mathbf{A}$ form the columns of the matrix $\mathbf{V}$. These are the **right singular vectors**.
    So, $(\mathbf{A}^T \mathbf{A}) \mathbf{v}_i = \lambda_i \mathbf{v}_i$, where $\mathbf{v}_i$ are the columns of $\mathbf{V}$.

3.  **Eigenvalues of $\mathbf{A} \mathbf{A}^T$:**
    The eigenvalues of $\mathbf{A} \mathbf{A}^T$ are also non-negative and are the same as the non-zero eigenvalues of $\mathbf{A}^T \mathbf{A}$. If $r$ is the rank of $\mathbf{A}$, then $\mathbf{A} \mathbf{A}^T$ will have $r$ non-zero eigenvalues, which are $\sigma_1^2, \sigma_2^2, \ldots, \sigma_r^2$.

4.  **Eigenvectors of $\mathbf{A} \mathbf{A}^T$:**
    The corresponding normalized eigenvectors of $\mathbf{A} \mathbf{A}^T$ form the columns of the matrix $\mathbf{U}$. These are the **left singular vectors**.
    So, $(\mathbf{A} \mathbf{A}^T) \mathbf{u}_i = \lambda_i \mathbf{u}_i$, where $\mathbf{u}_i$ are the columns of $\mathbf{U}$.

**Relationship between Left and Right Singular Vectors:**

A crucial relationship exists between the singular vectors:

$\mathbf{A} \mathbf{v}_i = \sigma_i \mathbf{u}_i$
$\mathbf{A}^T \mathbf{u}_i = \sigma_i \mathbf{v}_i$

This relationship can be derived from the eigenvalue equations:
If $(\mathbf{A}^T \mathbf{A}) \mathbf{v}_i = \sigma_i^2 \mathbf{v}_i$, then multiplying by $\mathbf{A}$ on the left:
$\mathbf{A} (\mathbf{A}^T \mathbf{A}) \mathbf{v}_i = \sigma_i^2 \mathbf{A} \mathbf{v}_i$
$(\mathbf{A} \mathbf{A}^T) (\mathbf{A} \mathbf{v}_i) = \sigma_i^2 (\mathbf{A} \mathbf{v}_i)$
This shows that $\mathbf{A} \mathbf{v}_i$ is an eigenvector of $\mathbf{A} \mathbf{A}^T$ with eigenvalue $\sigma_i^2$. If $\sigma_i \ne 0$, then $\mathbf{A} \mathbf{v}_i$ is proportional to $\mathbf{u}_i$. Specifically, $\mathbf{u}_i = \frac{1}{\sigma_i} \mathbf{A} \mathbf{v}_i$.

**Textbook Reference:**
*   Gonzalez & Woods (2009), Chapter 2 (Image Transforms) discusses various transforms and their mathematical properties. While SVD might not be explicitly detailed as a "2D Image Transform" like DFT in this chapter, its importance in matrix manipulation relevant to image processing is foundational.
*   Jayaraman et al. (2015), Chapter 4 (Image Transforms) and Chapter 11 (Image Compression) would likely cover SVD in the context of its applications.

---

### 3. Geometric Interpretation of SVD

Geometrically, SVD provides a way to understand how a linear transformation (represented by matrix $\mathbf{A}$) acts on a vector space. It decomposes the transformation into three fundamental operations:

1.  **Rotation/Reflection ($\mathbf{V}^T$):** The multiplication by $\mathbf{V}^T$ rotates or reflects the input vector space so that the new axes are aligned with the directions of the principal variances (eigenvectors of $\mathbf{A}^T \mathbf{A}$).
2.  **Scaling ($\mathbf{\Sigma}$):** The multiplication by $\mathbf{\Sigma}$ scales the vectors along these new axes by the singular values. Larger singular values correspond to directions where the transformation has a greater stretching effect.
3.  **Rotation/Reflection ($\mathbf{U}$):** The multiplication by $\mathbf{U}$ rotates or reflects the scaled vectors into the final output space.

In simpler terms, SVD shows that any linear transformation can be thought of as a sequence of:
*   A rotation (or reflection).
*   A scaling along the new axes.
*   Another rotation (or reflection).

**Example:** Consider a 2D transformation of a unit circle.
*   $\mathbf{V}^T$ rotates the circle.
*   $\mathbf{\Sigma}$ stretches it into an ellipse along the major and minor axes, with the lengths of the semi-axes determined by the singular values.
*   $\mathbf{U}$ rotates this ellipse into its final orientation.

---

### 4. SVD for Image Compression

SVD is a powerful tool for image compression due to its ability to reveal the underlying structure and redundancy in an image.

**How it works:**

An image can be represented as a matrix of pixel intensity values. Applying SVD to this matrix:

$\mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^T$

The singular values in $\mathbf{\Sigma}$ are ordered from largest to smallest. The largest singular values correspond to the most significant information in the image, while the smaller singular values capture less significant details or noise.

**Approximation using Truncated SVD:**

We can obtain a compressed approximation of the original image by keeping only the $k$ largest singular values and their corresponding singular vectors. This is known as a **truncated SVD**.

$\mathbf{A}_k = \mathbf{U}_k \mathbf{\Sigma}_k \mathbf{V}_k^T$

Where:
*   $\mathbf{U}_k$: The first $k$ columns of $\mathbf{U}$.
*   $\mathbf{\Sigma}_k$: The $k \times k$ diagonal matrix containing the $k$ largest singular values.
*   $\mathbf{V}_k^T$: The first $k$ rows of $\mathbf{V}^T$ (or the first $k$ columns of $\mathbf{V}$, transposed).

The resulting matrix $\mathbf{A}_k$ is a rank-$k$ approximation of $\mathbf{A}$. The quality of the approximation depends on $k$. A smaller $k$ means higher compression but potentially lower quality, and vice versa.

**Advantages:**

*   **Optimal Low-Rank Approximation:** SVD provides the best possible low-rank approximation of a matrix in terms of the Frobenius norm and the spectral norm. This means that for a given rank $k$, the truncated SVD yields an approximation with the minimum possible error.
*   **Adaptive to Image Content:** SVD naturally adapts to the specific content of the image. Images with strong edges and smooth regions will have a more concentrated distribution of singular values, allowing for better compression.

**Disadvantages:**

*   **Computational Cost:** Computing the full SVD of a large image matrix can be computationally intensive, especially for high-resolution images.
*   **Storage of $\mathbf{U}_k, \mathbf{\Sigma}_k, \mathbf{V}_k^T$:** While the original image matrix is large, the compressed representation involves storing $\mathbf{U}_k$ ($m \times k$), $\mathbf{\Sigma}_k$ ($k \times k$), and $\mathbf{V}_k^T$ ($k \times n$). For effective compression, $k$ needs to be significantly smaller than $m$ and $n$.

**Example:**

Consider a grayscale image of size $256 \times 256$. The original data requires $256 \times 256 = 65,536$ values.
If we use truncated SVD with $k=50$:
*   We store the first 50 columns of $\mathbf{U}$ ($256 \times 50$ values).
*   We store the 50 singular values in $\mathbf{\Sigma}_k$ (50 values).
*   We store the first 50 rows of $\mathbf{V}^T$ ($50 \times 256$ values).

Total stored values: $(256 \times 50) + 50 + (50 \times 256) = 12,800 + 50 + 12,800 = 25,650$.
This represents a compression ratio of approximately $65,536 / 25,650 \approx 2.56$ times. The quality of the reconstructed image would depend on the image content and the choice of $k$.

**Textbook Reference:**
*   Jayaraman et al. (2015), Chapter 11 (Image Compression) directly discusses SVD as a method for achieving compression.
*   Pratt (2007), Chapter 17 (Image Data Compression) may also cover SVD in its discussion of transform coding and matrix factorization techniques.

---

### 5. Applications of SVD in Image Processing

Beyond compression, SVD has several other critical applications in image processing.

#### 5.1. Dimensionality Reduction

Images, especially high-resolution ones, often exist in high-dimensional spaces. SVD can be used to reduce this dimensionality while preserving the most important information.

*   **Principal Component Analysis (PCA):** SVD is the underlying computational engine for PCA. In PCA, the singular vectors of the data matrix (often the centered pixel values) represent the principal components, which are directions of maximum variance in the data. By keeping only the top $k$ principal components (corresponding to the largest singular values), we can represent the data in a lower-dimensional subspace, effectively reducing dimensionality.

    *   **Example:** For a set of images of faces, PCA (via SVD) can identify the "eigenfaces" (principal components) that capture the most variation in facial features. A new face image can then be represented by a linear combination of these eigenfaces, requiring less storage and enabling faster processing.

#### 5.2. Image Denoising (Restoration)

Noise in an image often manifests as small perturbations that affect the less significant singular values. By truncating the SVD representation at a specific rank $k$, we can effectively remove noise components associated with the smaller singular values.

*   **Process:**
    1.  Represent the noisy image as a matrix $\mathbf{A}$.
    2.  Compute the SVD of $\mathbf{A}$: $\mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^T$.
    3.  Determine an appropriate rank $k$ by analyzing the distribution of singular values (e.g., looking for an "elbow" where the singular values drop significantly) or through cross-validation.
    4.  Reconstruct a denoised image using the truncated SVD: $\mathbf{A}_k = \mathbf{U}_k \mathbf{\Sigma}_k \mathbf{V}_k^T$.

*   **Textbook Reference:**
    *   Castleman (2003), Chapter 10 (Image Filtering) and Chapter 12 (Image Restoration) could discuss SVD as a method for noise reduction.
    *   Jain (1988), Chapter 5 (Image Enhancement) and Chapter 7 (Image Restoration) might touch upon matrix decomposition methods for image processing.

#### 5.3. Feature Extraction

The singular vectors and singular values themselves can be used as features for image analysis, classification, and recognition tasks.

*   **Example:** The singular values can indicate the "energy" or "importance" of different directions in the image. The singular vectors can capture directional patterns. These can be used in conjunction with machine learning algorithms.

#### 5.4. Image Reconstruction and Inpainting

SVD can be used to reconstruct incomplete images or fill in missing regions (inpainting). By treating the known pixels as a partial matrix and using SVD to find the best low-rank completion, reasonable estimations for the missing pixels can be made.

#### 5.5. Image Watermarking

SVD can be used for robust image watermarking. The watermark can be embedded in the singular values or singular vectors of the image, making it resistant to certain types of image manipulations like cropping, scaling, or adding noise.

---

### 6. Important Points to Remember

*   **SVD decomposes any $m \times n$ matrix $\mathbf{A}$ into $\mathbf{U} \mathbf{\Sigma} \mathbf{V}^T$.**
*   **$\mathbf{U}$ and $\mathbf{V}$ are orthogonal matrices; $\mathbf{\Sigma}$ is a diagonal matrix of singular values.**
*   **Singular values ($\sigma_i$) are non-negative and typically arranged in descending order.**
*   **SVD is closely related to eigenvalue decomposition of $\mathbf{A}^T \mathbf{A}$ and $\mathbf{A} \mathbf{A}^T$.**
*   **The rank of a matrix is equal to the number of its non-zero singular values.**
*   **Truncated SVD provides the optimal low-rank approximation of a matrix.**
*   **Key applications in image processing include compression, dimensionality reduction, denoising, and feature extraction.**
*   **Computational cost of full SVD can be high, but truncated SVD is often efficient for approximations.**

---

### 7. Practice Questions and Exercises

**Question 1:**
Given a matrix $\mathbf{A} = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$, compute its Singular Value Decomposition $\mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^T$.
*   Calculate $\mathbf{A}^T \mathbf{A}$.
*   Find the eigenvalues and normalized eigenvectors of $\mathbf{A}^T \mathbf{A}$ to determine $\mathbf{V}$ and $\mathbf{\Sigma}$.
*   Use the relationship $\mathbf{u}_i = \frac{1}{\sigma_i} \mathbf{A} \mathbf{v}_i$ to find $\mathbf{U}$.
*   Verify that $\mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^T$.

**Answer 1:**
1.  **Calculate $\mathbf{A}^T \mathbf{A}$:**
    $\mathbf{A}^T = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$
    $\mathbf{A}^T \mathbf{A} = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$

2.  **Find eigenvalues and eigenvectors of $\mathbf{A}^T \mathbf{A}$:**
    Characteristic equation: $\det(\mathbf{A}^T \mathbf{A} - \lambda \mathbf{I}) = 0$
    $\det \begin{pmatrix} 1-\lambda & 1 \\ 1 & 1-\lambda \end{pmatrix} = (1-\lambda)^2 - 1 = 0$
    $1 - 2\lambda + \lambda^2 - 1 = 0$
    $\lambda^2 - 2\lambda = 0$
    $\lambda(\lambda - 2) = 0$
    Eigenvalues are $\lambda_1 = 2$ and $\lambda_2 = 0$.

    Singular values are $\sigma_1 = \sqrt{2}$ and $\sigma_2 = 0$.
    $\mathbf{\Sigma} = \begin{pmatrix} \sqrt{2} & 0 \\ 0 & 0 \end{pmatrix}$

    **For $\lambda_1 = 2$:**
    $(\mathbf{A}^T \mathbf{A} - 2\mathbf{I}) \mathbf{v}_1 = \begin{pmatrix} 1-2 & 1 \\ 1 & 1-2 \end{pmatrix} \mathbf{v}_1 = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \mathbf{v}_1 = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
    $-v_{11} + v_{12} = 0 \implies v_{11} = v_{12}$.
    Let $v_{11} = c$. Then $\mathbf{v}_1 = \begin{pmatrix} c \\ c \end{pmatrix}$.
    For normalization, $||\mathbf{v}_1|| = \sqrt{c^2 + c^2} = \sqrt{2c^2} = |c|\sqrt{2} = 1$.
    So, $c = \frac{1}{\sqrt{2}}$ (or $-\frac{1}{\sqrt{2}}$). Let's choose $c = \frac{1}{\sqrt{2}}$.
    $\mathbf{v}_1 = \begin{pmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{pmatrix}$

    **For $\lambda_2 = 0$:**
    $(\mathbf{A}^T \mathbf{A} - 0\mathbf{I}) \mathbf{v}_2 = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \mathbf{v}_2 = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
    $v_{21} + v_{22} = 0 \implies v_{21} = -v_{22}$.
    Let $v_{22} = d$. Then $\mathbf{v}_2 = \begin{pmatrix} -d \\ d \end{pmatrix}$.
    For normalization, $||\mathbf{v}_2|| = \sqrt{(-d)^2 + d^2} = \sqrt{2d^2} = |d|\sqrt{2} = 1$.
    So, $d = \frac{1}{\sqrt{2}}$ (or $-\frac{1}{\sqrt{2}}$). Let's choose $d = \frac{1}{\sqrt{2}}$.
    $\mathbf{v}_2 = \begin{pmatrix} -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{pmatrix}$

    Thus, $\mathbf{V} = \begin{pmatrix} \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{pmatrix}$ and $\mathbf{V}^T = \begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{pmatrix}$.

3.  **Find $\mathbf{U}$:**
    $\mathbf{u}_1 = \frac{1}{\sigma_1} \mathbf{A} \mathbf{v}_1 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{pmatrix} = \frac{1}{\sqrt{2}} \begin{pmatrix} \frac{2}{\sqrt{2}} \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

    For $\mathbf{u}_2$, since $\mathbf{U}$ must be orthogonal and we only have one non-zero singular value, we need to find a vector orthogonal to $\mathbf{u}_1$.
    Let $\mathbf{u}_2 = \begin{pmatrix} x \\ y \end{pmatrix}$. Then $\mathbf{u}_1^T \mathbf{u}_2 = 1 \cdot x + 0 \cdot y = x = 0$.
    So, $\mathbf{u}_2 = \begin{pmatrix} 0 \\ y \end{pmatrix}$. For normalization, $y = \pm 1$. Let's choose $y=1$.
    $\mathbf{u}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.

    Thus, $\mathbf{U} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ (the identity matrix).

4.  **Verify $\mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^T$:**
    $\mathbf{U} \mathbf{\Sigma} \mathbf{V}^T = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} \sqrt{2} & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{pmatrix}$
    $= \begin{pmatrix} \sqrt{2} & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{pmatrix} = \begin{pmatrix} \sqrt{2} \cdot \frac{1}{\sqrt{2}} + 0 & \sqrt{2} \cdot \frac{1}{\sqrt{2}} + 0 \\ 0 & 0 \end{pmatrix}$
    $= \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} = \mathbf{A}$.
    The decomposition is correct.

**Question 2:**
Imagine a $100 \times 100$ grayscale image. If we perform SVD and keep only the top $k=10$ singular values and their corresponding vectors for reconstruction, what is the approximate storage required for the compressed representation compared to the original image? Assume pixel values are stored as 8-bit integers.

**Answer 2:**
*   **Original Image Storage:** $100 \times 100$ pixels = 10,000 pixels.
    If each pixel is an 8-bit integer, it requires 1 byte per pixel.
    Total storage = $10,000$ bytes = 10 KB.

*   **Compressed Representation Storage (Truncated SVD with k=10):**
    $\mathbf{A}_k = \mathbf{U}_k \mathbf{\Sigma}_k \mathbf{V}_k^T$
    *   $\mathbf{U}_k$: $100 \times 10$ matrix. Requires $100 \times 10 = 1000$ values.
    *   $\mathbf{\Sigma}_k$: $10 \times 10$ diagonal matrix. Requires $10$ singular values.
    *   $\mathbf{V}_k^T$: $10 \times 100$ matrix. Requires $10 \times 100 = 1000$ values.

    Total values to store for reconstruction = $1000 (\mathbf{U}_k) + 10 (\mathbf{\Sigma}_k) + 1000 (\mathbf{V}_k^T) = 2010$ values.
    Assuming these values (pixel intensities, singular values, and vector components) are stored as floating-point numbers (e.g., 4 bytes per number), the storage would be approximately:
    $2010 \times 4 \text{ bytes/value} \approx 8040 \text{ bytes} \approx 8 \text{ KB}$.

    **Comparison:**
    Original storage: 10,000 bytes
    Compressed storage: 8,040 bytes

    The compressed representation requires approximately $10000 / 8040 \approx 1.24$ times less storage.
    *Note: This is a simplified calculation. In practice, singular values and vector components are floats. For practical image compression, a larger $k$ might be needed for acceptable quality, impacting the compression ratio. However, the principle of storing reduced-dimension matrices is demonstrated.*

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
