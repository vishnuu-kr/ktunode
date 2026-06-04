---
title: "Hadamard transform"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: 2D Image transforms: DFT"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3691f"
status: "completed"
scrapedAt: "2026-05-23T16:35:09.664Z"
---
# Digital Image Processing: Module 2 - 2D Image Transforms: DFT

## Topic: Hadamard Transform

---

### 1. Introduction to Hadamard Transform

The Hadamard transform is a **linear, orthogonal transform** that decomposes an image into a set of basis vectors. Unlike the Fourier transform, which uses sinusoidal functions as basis vectors, the Hadamard transform uses ** Walsh functions**. These Walsh functions are essentially piecewise constant waveforms taking values of +1 and -1.

*   **Key Characteristic:** It is computationally efficient, particularly for powers of 2 sized images, as it involves only additions and subtractions, avoiding multiplications. This makes it highly suitable for real-time applications.
*   **Relation to DFT:** While DFT decomposes an image into complex sinusoids, the Hadamard transform provides a representation in terms of Walsh functions. Both are valuable for different types of analysis and processing.

**Relevant Textbook/Reference:**
*   **Gonzalez & Woods (4th Ed.)**: Likely discusses various orthogonal transforms, including Hadamard, in the context of image transforms. May highlight its computational efficiency.
*   **Jain (1988)**: A foundational text, it's probable that Hadamard transform is covered as a significant alternative to Fourier for certain applications.
*   **Jayaraman, Esakkirajan, Veerakumar (McGraw Hill)**: This text is also likely to cover Hadamard transform as a basis for image representation and processing.

**Alignment with Course Outcomes:**
*   **CO2 (K3):** Understanding the mathematical properties and application of Hadamard transform as a tool for image analysis and representation.

---

### 2. Walsh Functions and Hadamard Matrices

The Hadamard transform is defined using **Hadamard matrices**.

#### 2.1 Walsh Functions

*   **Definition:** Walsh functions are a set of square-wave functions that are orthogonal and complete. They are characterized by their number of zero crossings (or "sequency").
*   **Properties:**
    *   Take values +1 and -1.
    *   Orthogonal: The integral of the product of two different Walsh functions over their domain is zero.
    *   Completeness: Any piecewise constant function can be represented as a linear combination of Walsh functions.
*   **Sequency:** The number of zero crossings (sign changes) in a normalized interval. This is analogous to frequency in Fourier analysis.

#### 2.2 Hadamard Matrices

*   **Definition:** A Hadamard matrix $H_N$ of order $N$ is an $N \times N$ matrix with entries $+1$ or $-1$ such that its rows (and columns) are mutually orthogonal.
*   **Construction (Sylvester's Construction):**
    If $H_N$ is a Hadamard matrix of order $N$, then
    $$ H_{2N} = \begin{bmatrix} H_N & H_N \\ H_N & -H_N \end{bmatrix} $$
    The base case is $H_1 = [1]$.
*   **Properties:**
    *   $H_N H_N^T = N I_N$, where $I_N$ is the identity matrix.
    *   Hadamard matrices exist only for orders $N = 1, 2, 4, 8, \dots, 2^k$ (i.e., powers of 2). This is a significant limitation.
*   **Types of Hadamard Matrices:**
    *   **Sequency Ordered:** Rows are ordered by increasing sequency. This is often preferred for image processing as it groups basis functions with similar patterns.
    *   **Hadamard Ordered (Natural Ordering):** Rows are ordered based on the Sylvester construction.

**Example (Hadamard Matrix of Order 4 - Natural Ordering):**
$$ H_4 = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix} $$

**Example (Walsh Functions corresponding to H4 rows - Sequency Ordered):**
The sequency-ordered Walsh matrix of order 4 would reorder the rows of $H_4$ to correspond to increasing sequency.

**Relevant Textbook/Reference:**
*   **Gonzalez & Woods (4th Ed.)**: Likely provides a detailed explanation of Hadamard matrices and their construction, possibly mentioning sequency ordering.
*   **Jain (1988)**: Will definitely cover the mathematical basis of Hadamard matrices and their properties.
*   **Castleman (2/e)**: Might offer a practical perspective on the implementation and generation of Hadamard matrices.

**Alignment with Course Outcomes:**
*   **CO2 (K3):** Understanding the mathematical definition and properties of Hadamard matrices, which form the basis of the transform.

---

### 3. The 1D Hadamard Transform

For a data vector $x$ of length $N$ (where $N = 2^k$), the $N$-point Hadamard transform $X$ is given by:

$$ X = \frac{1}{N} H_N x $$

where $H_N$ is the Hadamard matrix of order $N$.

**Forward Transform:** $X_i = \frac{1}{N} \sum_{j=0}^{N-1} H_{N,ij} x_j$

**Inverse Transform:** $x = H_N X$ (Note: No scaling factor for the inverse when using $H_N$ directly)

**Important Note on Scaling:** Different definitions of the Hadamard transform exist regarding the scaling factor (e.g., $1/\sqrt{N}$, $1/N$, or no scaling). It's crucial to be consistent with the chosen definition. The definition $X = \frac{1}{N} H_N x$ ensures that the transform is **orthogonal**, meaning $H_N H_N^T = N I_N$.

**Computational Efficiency (Fast Hadamard Transform - FHT):**
Similar to the Fast Fourier Transform (FFT), a Fast Hadamard Transform (FHT) algorithm exists. It reduces the computational complexity from $O(N^2)$ to $O(N \log N)$ by exploiting the recursive structure of Hadamard matrices. The FHT involves only additions and subtractions.

**Example (1D Hadamard Transform):**
Let $x = \begin{bmatrix} 2 \\ 4 \\ 6 \\ 8 \end{bmatrix}$ and $N=4$.
Using $H_4$ (natural ordering):
$$ X = \frac{1}{4} H_4 x = \frac{1}{4} \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 4 \\ 6 \\ 8 \end{bmatrix} $$
$$ X = \frac{1}{4} \begin{bmatrix} 2+4+6+8 \\ 2-4+6-8 \\ 2+4-6-8 \\ 2-4-6+8 \end{bmatrix} = \frac{1}{4} \begin{bmatrix} 20 \\ -4 \\ -8 \\ 0 \end{bmatrix} = \begin{bmatrix} 5 \\ -1 \\ -2 \\ 0 \end{bmatrix} $$

**Relevant Textbook/Reference:**
*   **Gonzalez & Woods (4th Ed.)**: Likely covers the 1D transform and the FHT algorithm.
*   **Jain (1988)**: Will provide the mathematical formulation for the 1D transform.
*   **Jayaraman, Esakkirajan, Veerakumar (McGraw Hill)**: Expected to detail the 1D transform and its computational aspects.

**Alignment with Course Outcomes:**
*   **CO2 (K3):** Applying the 1D Hadamard transform to a data vector and understanding its computational efficiency.

---

### 4. The 2D Hadamard Transform

For an $N \times N$ image $f(x,y)$, the 2D Hadamard transform $F(u,v)$ is typically defined using a separable approach, similar to the 2D DFT. It involves applying the 1D Hadamard transform to rows and then to columns (or vice-versa).

$$ F(u,v) = \frac{1}{N^2} \sum_{x=0}^{N-1} \sum_{y=0}^{N-1} H_{N,ux} H_{N,vy} f(x,y) $$

where $H_{N,ux}$ and $H_{N,vy}$ are elements of the Hadamard matrix of order $N$.

**Forward Transform:** $F = \frac{1}{N^2} H_N f H_N^T$ (using matrix notation for the image)

**Inverse Transform:** $f(x,y) = \sum_{u=0}^{N-1} \sum_{v=0}^{N-1} H_{N,ux} H_{N,vy} F(u,v)$

**Alternatively (using separable property):**
1.  Apply 1D Hadamard transform to each row of the image $f$. Let the result be $G$.
    $$ G(u,y) = \frac{1}{N} \sum_{x=0}^{N-1} H_{N,ux} f(x,y) $$
2.  Apply 1D Hadamard transform to each column of $G$. The result is $F$.
    $$ F(u,v) = \frac{1}{N} \sum_{y=0}^{N-1} H_{N,vy} G(u,y) $$
    Combining these, we get the $1/N^2$ scaling factor for the overall transform.

**Computational Efficiency:** The 2D FHT can be implemented by applying the 1D FHT to each row and then to each column of the image, resulting in a complexity of $O(N^2 \log N)$.

**Properties of the 2D Hadamard Transform:**
*   **Orthogonality:** The transform is orthogonal.
*   **Energy Compaction:** For many types of images, the Hadamard transform can achieve good energy compaction, meaning most of the image's energy is concentrated in a few transform coefficients, especially when using sequency-ordered basis functions.
*   **Basis Functions:** The basis functions are separable Walsh functions. These are piecewise constant rectangles of alternating signs.

**Example (2D Hadamard Transform - Conceptual):**
Consider a 2x2 image:
$$ f = \begin{bmatrix} a & b \\ c & d \end{bmatrix} $$
Let $H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$.

1.  Apply 1D HT to rows:
    $$ G = \frac{1}{2} H_2 f = \frac{1}{2} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \frac{1}{2} \begin{bmatrix} a+c & b+d \\ a-c & b-d \end{bmatrix} $$
2.  Apply 1D HT to columns of $G$:
    $$ F = \frac{1}{2} H_2 G = \frac{1}{2} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \left( \frac{1}{2} \begin{bmatrix} a+c & b+d \\ a-c & b-d \end{bmatrix} \right) $$
    $$ F = \frac{1}{4} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} a+c & b+d \\ a-c & b-d \end{bmatrix} = \frac{1}{4} \begin{bmatrix} (a+c)+(a-c) & (b+d)+(b-d) \\ (a+c)-(a-c) & (b+d)-(b-d) \end{bmatrix} $$
    $$ F = \frac{1}{4} \begin{bmatrix} 2a & 2b \\ 2c & 2d \end{bmatrix} = \begin{bmatrix} a/2 & b/2 \\ c/2 & d/2 \end{bmatrix} $$
    *(Wait, this is not right. Let's re-check the application of 1D HT to columns.*)

    Let's reapply correctly:
    $$ F = \frac{1}{2} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} \frac{a+c}{2} & \frac{b+d}{2} \\ \frac{a-c}{2} & \frac{b-d}{2} \end{bmatrix} $$
    $$ F = \frac{1}{2} \begin{bmatrix} \frac{a+c}{2} + \frac{a-c}{2} & \frac{b+d}{2} + \frac{b-d}{2} \\ \frac{a+c}{2} - \frac{a-c}{2} & \frac{b+d}{2} - \frac{b-d}{2} \end{bmatrix} $$
    $$ F = \frac{1}{2} \begin{bmatrix} \frac{2a}{2} & \frac{2b}{2} \\ \frac{2c}{2} & \frac{2d}{2} \end{bmatrix} = \frac{1}{2} \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} a/2 & b/2 \\ c/2 & d/2 \end{bmatrix} $$
    *(This is still incorrect if we consider the full definition $F(u,v) = \frac{1}{N^2} \sum_{x=0}^{N-1} \sum_{y=0}^{N-1} H_{N,ux} H_{N,vy} f(x,y)$.)*

    Let's use the definition directly for a 2x2 image with $H_2$:
    $$ F(u,v) = \frac{1}{4} \sum_{x=0}^{1} \sum_{y=0}^{1} H_{2,ux} H_{2,vy} f(x,y) $$
    For $N=2$, $H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$.

    *   $F(0,0) = \frac{1}{4} (H_{2,00}H_{2,00}f(0,0) + H_{2,00}H_{2,01}f(0,1) + H_{2,01}H_{2,00}f(1,0) + H_{2,01}H_{2,01}f(1,1))$
        $F(0,0) = \frac{1}{4} (1 \cdot 1 \cdot a + 1 \cdot 1 \cdot b + 1 \cdot 1 \cdot c + 1 \cdot 1 \cdot d) = \frac{1}{4}(a+b+c+d)$ (Average of the image)

    *   $F(0,1) = \frac{1}{4} (H_{2,00}H_{2,10}f(0,0) + H_{2,00}H_{2,11}f(0,1) + H_{2,01}H_{2,10}f(1,0) + H_{2,01}H_{2,11}f(1,1))$
        $F(0,1) = \frac{1}{4} (1 \cdot 1 \cdot a + 1 \cdot (-1) \cdot b + 1 \cdot 1 \cdot c + 1 \cdot (-1) \cdot d) = \frac{1}{4}(a-b+c-d)$

    *   $F(1,0) = \frac{1}{4} (H_{2,10}H_{2,00}f(0,0) + H_{2,10}H_{2,01}f(0,1) + H_{2,11}H_{2,00}f(1,0) + H_{2,11}H_{2,01}f(1,1))$
        $F(1,0) = \frac{1}{4} (1 \cdot 1 \cdot a + 1 \cdot 1 \cdot b + (-1) \cdot 1 \cdot c + (-1) \cdot 1 \cdot d) = \frac{1}{4}(a+b-c-d)$

    *   $F(1,1) = \frac{1}{4} (H_{2,10}H_{2,10}f(0,0) + H_{2,10}H_{2,11}f(0,1) + H_{2,11}H_{2,10}f(1,0) + H_{2,11}H_{2,11}f(1,1))$
        $F(1,1) = \frac{1}{4} (1 \cdot 1 \cdot a + 1 \cdot (-1) \cdot b + (-1) \cdot 1 \cdot c + (-1) \cdot (-1) \cdot d) = \frac{1}{4}(a-b-c+d)$

    So, for the 2x2 image:
    $$ F = \frac{1}{4} \begin{bmatrix} a+b+c+d & a-b+c-d \\ a+b-c-d & a-b-c+d \end{bmatrix} $$
    This correctly represents the transform coefficients.

**Important Consideration:** The efficiency of the Hadamard transform is maximized when image dimensions are powers of 2. For other sizes, padding is typically required, which can affect performance and introduce artifacts.

**Relevant Textbook/Reference:**
*   **Gonzalez & Woods (4th Ed.)**: Will definitely explain the 2D separable transform and its properties, likely with examples.
*   **Jain (1988)**: Expected to have a thorough treatment of the 2D transform.
*   **Jayaraman, Esakkirajan, Veerakumar (McGraw Hill)**: Likely to cover the 2D transform and its computational aspects.
*   **Pratt (4/e)**: Might discuss the application of Hadamard transform in image coding and compression, highlighting its basis functions.

**Alignment with Course Outcomes:**
*   **CO2 (K3):** Understanding and applying the 2D Hadamard transform for image representation.
*   **CO3 (K3):** The energy compaction property makes it relevant for image compression schemes, where coefficients are quantized or discarded.

---

### 5. Applications of Hadamard Transform in Image Processing

The Hadamard transform finds applications in various image processing tasks due to its computational efficiency and energy compaction properties.

#### 5.1 Image Compression

*   **Principle:** Like other transforms (e.g., DCT, DFT), Hadamard transform converts image data into a domain where most of the energy is concentrated in a few coefficients. These coefficients can then be quantized more coarsely or even set to zero, leading to data reduction.
*   **Advantages:** Its fast computation makes it attractive for real-time compression systems.
*   **Disadvantages:** Generally, it provides less energy compaction than DCT for typical images, especially those with smooth regions. The piecewise constant nature of Walsh functions is less effective at representing smooth gradients compared to sinusoidal basis functions.
*   **Example:** In early image compression techniques, Hadamard transform was explored for its speed. Block-wise Hadamard transform was applied, and coefficients were then encoded using variable-length codes.

**Relevant Textbook/Reference:**
*   **Gonzalez & Woods (4th Ed.)**: Likely discusses transform coding and might mention Hadamard transform as one of the transforms used.
*   **Jayaraman, Esakkirajan, Veerakumar (McGraw Hill)**: Expected to cover transform coding for image compression, potentially including Hadamard.
*   **Castleman (2/e)**: May discuss various transform-based compression methods.
*   **Pratt (4/e)**: Known for its depth in image compression, likely has sections on Hadamard or Walsh-Hadamard transforms.

#### 5.2 Image Filtering and Restoration

*   **Transform Domain Filtering:** The transform coefficients can be manipulated to achieve filtering. For example, high sequency coefficients could be attenuated to act as a low-pass filter.
*   **Deconvolution:** In noisy environments, deconvolution can be performed in the transform domain.
*   **Challenges:** The discrete nature of Walsh functions can lead to blocky artifacts in filtered images, especially for low-pass filtering.

**Relevant Textbook/Reference:**
*   **Gonzalez & Woods (4th Ed.)**: Discusses filtering in the transform domain for various transforms.
*   **Jain (1988)**: Likely covers filtering principles in transform domains.
*   **Jayaraman, Esakkirajan, Veerakumar (McGraw Hill)**: Expected to cover filtering and restoration techniques.

#### 5.3 Image Analysis and Feature Extraction

*   **Pattern Recognition:** The coefficients can be used as features for pattern recognition tasks.
*   **Texture Analysis:** The distribution of coefficients can provide information about image texture.

**Relevant Textbook/Reference:**
*   **Gonzalez & Woods (4th Ed.)**: May touch upon feature extraction using transforms.
*   **Jain (1988)**: A comprehensive text that might discuss feature extraction.

#### 5.4 Other Applications

*   **Error Detection/Correction Codes:** The properties of Hadamard matrices are utilized in coding theory for error detection and correction.
*   **Pattern Matching:** For binary images, Hadamard transform can be very efficient for certain matching operations.

**Alignment with Course Outcomes:**
*   **CO3 (K3):** Directly applicable to understanding image compression techniques.
*   **CO4 (K3):** Relevant for understanding how transforms can be used for filtering and restoration.
*   **CO1 (K2):** Understanding that transforms are components of an image processing system used for analysis and manipulation.

---

### 6. Comparison with Fourier Transform

| Feature            | Hadamard Transform                                    | Fourier Transform                                       |
| :----------------- | :---------------------------------------------------- | :------------------------------------------------------ |
| **Basis Functions** | Piecewise constant Walsh functions (+1, -1)           | Sinusoidal functions (complex exponentials)             |
| **Domain**         | Sequency (number of zero crossings)                   | Frequency                                               |
| **Computation**    | Additions and subtractions only (very fast)         | Multiplications (real and imaginary parts), additions |
| **FFT/FHT**        | Fast Hadamard Transform (FHT) is highly efficient     | Fast Fourier Transform (FFT) is highly efficient        |
| **Energy Compaction** | Good for binary images and specific patterns. Can be less effective for smooth images than DCT/DFT. | Generally good for images with smooth variations and sinusoidal components. |
| **Complex Values** | Coefficients are real                                 | Coefficients are complex                                |
| **Mathematical Basis** | Orthogonal Hadamard Matrices                          | Orthogonal complex exponentials                         |
| **Order Requirement** | Primarily for powers of 2                               | Can be applied to any size, but powers of 2 are optimized for FFT. |

**Key Takeaway:** The Hadamard transform excels in computational speed due to its reliance on additions and subtractions. It's particularly useful for applications where speed is paramount and the input data properties align well with Walsh functions (e.g., binary images, specific signal patterns). For general natural images, DCT often offers better energy compaction, making it more popular for compression.

**Relevant Textbook/Reference:**
*   **Gonzalez & Woods (4th Ed.)**: Will likely provide comparative tables or discussions.
*   **Jain (1988)**: A good source for understanding the mathematical differences and implications.
*   **Jayaraman, Esakkirajan, Veerakumar (McGraw Hill)**: Will likely highlight the trade-offs between different transforms.

**Alignment with Course Outcomes:**
*   **CO2 (K3):** Analyzing the strengths and weaknesses of Hadamard transform in comparison to other image transforms.

---

### 7. Important Points to Remember

*   **Power of 2:** Hadamard matrices (and thus the standard Hadamard transform) are defined for dimensions that are powers of 2. Padding is often necessary for other image sizes.
*   **Computational Efficiency:** The primary advantage is its speed due to the absence of multiplications.
*   **Walsh Functions:** The basis functions are piecewise constant, making them suitable for representing signals with sharp transitions.
*   **Sequency:** The order of basis functions by sequency (zero crossings) is often preferred for better energy compaction.
*   **Energy Compaction:** While good, it might not be as effective as DCT for typical natural images with smooth gradients.
*   **Real Coefficients:** All transform coefficients are real numbers.

---

### 8. Practice Questions and Answers

**Question 1:** What is the primary computational advantage of the Hadamard transform compared to the Fourier transform?
**Answer:** The Hadamard transform uses only additions and subtractions as its basic operations, whereas the Fourier transform involves multiplications (with complex exponentials), making the Hadamard transform computationally faster.

**Question 2:** For what image dimensions is the standard Hadamard transform most efficiently applied?
**Answer:** The standard Hadamard transform is most efficiently applied to images whose dimensions are powers of 2 (e.g., 2x2, 4x4, 8x8, 16x16, etc.).

**Question 3:** What are the basis functions used by the Hadamard transform?
**Answer:** The Hadamard transform uses Walsh functions, which are piecewise constant waveforms taking values of +1 and -1.

**Question 4:** Explain the concept of "sequency" in the context of the Hadamard transform.
**Answer:** Sequency is analogous to frequency in the Fourier transform. It represents the number of zero crossings (sign changes) in a Walsh function over a normalized interval.

**Question 5:** Briefly describe how the Hadamard transform can be used for image compression.
**Answer:** The Hadamard transform compacts image energy into a few coefficients. By quantizing or discarding the less significant coefficients, data can be reduced, leading to compression.

**Question 6:** Given a 2x2 image $f = \begin{bmatrix} 10 & 20 \\ 30 & 40 \end{bmatrix}$, compute its 2D Hadamard transform $F$ using the standard $H_2$ matrix where $H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$.

**Answer:**
The formula is $F(u,v) = \frac{1}{N^2} \sum_{x=0}^{N-1} \sum_{y=0}^{N-1} H_{N,ux} H_{N,vy} f(x,y)$, with $N=2$.
$N^2 = 4$.

*   $F(0,0) = \frac{1}{4} (H_{2,00}H_{2,00}f(0,0) + H_{2,00}H_{2,01}f(0,1) + H_{2,01}H_{2,00}f(1,0) + H_{2,01}H_{2,01}f(1,1))$
    $F(0,0) = \frac{1}{4} (1 \cdot 1 \cdot 10 + 1 \cdot 1 \cdot 20 + 1 \cdot 1 \cdot 30 + 1 \cdot 1 \cdot 40) = \frac{1}{4}(10+20+30+40) = \frac{100}{4} = 25$

*   $F(0,1) = \frac{1}{4} (H_{2,00}H_{2,10}f(0,0) + H_{2,00}H_{2,11}f(0,1) + H_{2,01}H_{2,10}f(1,0) + H_{2,01}H_{2,11}f(1,1))$
    $F(0,1) = \frac{1}{4} (1 \cdot 1 \cdot 10 + 1 \cdot (-1) \cdot 20 + 1 \cdot 1 \cdot 30 + 1 \cdot (-1) \cdot 40) = \frac{1}{4}(10-20+30-40) = \frac{-20}{4} = -5$

*   $F(1,0) = \frac{1}{4} (H_{2,10}H_{2,00}f(0,0) + H_{2,10}H_{2,01}f(0,1) + H_{2,11}H_{2,00}f(1,0) + H_{2,11}H_{2,01}f(1,1))$
    $F(1,0) = \frac{1}{4} (1 \cdot 1 \cdot 10 + 1 \cdot 1 \cdot 20 + (-1) \cdot 1 \cdot 30 + (-1) \cdot 1 \cdot 40) = \frac{1}{4}(10+20-30-40) = \frac{-40}{4} = -10$

*   $F(1,1) = \frac{1}{4} (H_{2,10}H_{2,10}f(0,0) + H_{2,10}H_{2,11}f(0,1) + H_{2,11}H_{2,10}f(1,0) + H_{2,11}H_{2,11}f(1,1))$
    $F(1,1) = \frac{1}{4} (1 \cdot 1 \cdot 10 + 1 \cdot (-1) \cdot 20 + (-1) \cdot 1 \cdot 30 + (-1) \cdot (-1) \cdot 40) = \frac{1}{4}(10-20-30+40) = \frac{0}{4} = 0$

So, the 2D Hadamard transform is $F = \begin{bmatrix} 25 & -5 \\ -10 & 0 \end{bmatrix}$.

---
This concludes the study notes for the Hadamard Transform. Remember to cross-reference with your textbooks for deeper insights and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
