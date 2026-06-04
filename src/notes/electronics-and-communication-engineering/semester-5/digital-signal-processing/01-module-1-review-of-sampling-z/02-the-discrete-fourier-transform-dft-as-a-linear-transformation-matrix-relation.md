---
title: "The Discrete Fourier Transform: DFT as a linear transformation (Matrix 
Relation)"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 1: Review of sampling, Z"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe987"
status: "completed"
scrapedAt: "2026-05-23T17:55:25.863Z"
---
# DIGITAL SIGNAL PROCESSING: Module 1 - Review of Sampling, Z-Transforms, and DFT

## Topic: The Discrete Fourier Transform (DFT) as a Linear Transformation (Matrix Relation)

This topic explores the fundamental relationship between a discrete-time signal and its frequency-domain representation through the lens of linear algebra. We will understand the DFT as a matrix multiplication, providing a powerful and structured way to analyze and manipulate signals in the frequency domain.

---

### Learning Outcomes Covered:

*   Understanding the DFT as a linear transformation.
*   Deriving and interpreting the matrix representation of the DFT.
*   Relating the DFT to matrix operations.

---

### Course Outcomes Alignment:

*   **CO1 (K2): Illustrate fundamental properties and relations relevant to DFT and solve basic problems involving DFT-based filtering methods.**
    *   This topic directly supports the illustration of fundamental DFT properties by showing its linear nature. Understanding the matrix form aids in comprehending how DFT operates on signals, which is crucial for filtering.
*   **CO4 (K2): Compute DFT efficiently using FFT method and to explain the architecture of a DSP processor.**
    *   While this topic focuses on the basic DFT matrix, it lays the groundwork for understanding the computational aspects that lead to FFT algorithms. The matrix representation highlights the underlying operations involved in DFT computation.

---

### Key Concepts and Definitions:

*   **Discrete-Time Signal:** A sequence of numbers representing a signal sampled at discrete time instants. Denoted as $x[n]$, where $n$ is the integer time index.
*   **Discrete Fourier Transform (DFT):** A transformation that converts a finite-length discrete-time signal into its frequency-domain representation. It decomposes the signal into a sum of complex exponentials at different frequencies.
*   **Linear Transformation:** A function between vector spaces that preserves vector addition and scalar multiplication. In the context of DFT, it transforms a signal vector into a frequency-domain vector while maintaining linearity.
*   **Matrix:** A rectangular array of numbers, symbols, or expressions, arranged in rows and columns.
*   **Complex Exponential:** A function of the form $e^{j\omega n}$ or $e^{j2\pi kn/N}$, where $j$ is the imaginary unit, $\omega$ is angular frequency, $k$ is the frequency index, and $N$ is the number of samples.

---

### 1. The DFT as a Linear Transformation

The Discrete Fourier Transform (DFT) of a finite-length discrete-time signal $x[n]$ of length $N$, sampled from $n=0$ to $n=N-1$, is given by:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j 2\pi kn/N}$ for $k = 0, 1, \ldots, N-1$.

This formula expresses the $k$-th frequency component $X[k]$ as a weighted sum of the signal samples $x[n]$. The weights are complex exponentials $e^{-j 2\pi kn/N}$.

**Why is this a linear transformation?**

A transformation $T$ is linear if:
1.  $T(x_1 + x_2) = T(x_1) + T(x_2)$ (Additivity)
2.  $T(ax) = aT(x)$ (Homogeneity), where $a$ is a scalar.

Let's verify this for the DFT:

1.  **Additivity:**
    Let $y[n] = x_1[n] + x_2[n]$.
    $DFT\{y[n]\} = \sum_{n=0}^{N-1} (x_1[n] + x_2[n]) e^{-j 2\pi kn/N}$
    $DFT\{y[n]\} = \sum_{n=0}^{N-1} x_1[n] e^{-j 2\pi kn/N} + \sum_{n=0}^{N-1} x_2[n] e^{-j 2\pi kn/N}$
    $DFT\{y[n]\} = DFT\{x_1[n]\} + DFT\{x_2[n]\}$

2.  **Homogeneity:**
    Let $y[n] = ax[n]$.
    $DFT\{y[n]\} = \sum_{n=0}^{N-1} (ax[n]) e^{-j 2\pi kn/N}$
    $DFT\{y[n]\} = a \sum_{n=0}^{N-1} x[n] e^{-j 2\pi kn/N}$
    $DFT\{y[n]\} = a DFT\{x[n]\}$

Since the DFT satisfies both additivity and homogeneity, it is a linear transformation. This means we can represent the DFT operation using matrix multiplication.

---

### 2. The DFT as a Matrix Relation

We can express the DFT as a matrix multiplication by rewriting the DFT equations in matrix form.

Consider a signal vector $\mathbf{x}$ and its DFT vector $\mathbf{X}$:

$\mathbf{x} = \begin{bmatrix} x[0] \\ x[1] \\ \vdots \\ x[N-1] \end{bmatrix}$

$\mathbf{X} = \begin{bmatrix} X[0] \\ X[1] \\ \vdots \\ X[N-1] \end{bmatrix}$

The DFT can be written as $\mathbf{X} = \mathbf{W} \mathbf{x}$, where $\mathbf{W}$ is the DFT matrix.

Let's construct the DFT matrix $\mathbf{W}$ of size $N \times N$. The element in the $k$-th row and $n$-th column of $\mathbf{W}$ is given by $W_{kn} = e^{-j 2\pi kn/N}$.

So, the DFT matrix is:

$\mathbf{W} = \begin{bmatrix}
e^{-j 2\pi (0)(0)/N} & e^{-j 2\pi (0)(1)/N} & \cdots & e^{-j 2\pi (0)(N-1)/N} \\
e^{-j 2\pi (1)(0)/N} & e^{-j 2\pi (1)(1)/N} & \cdots & e^{-j 2\pi (1)(N-1)/N} \\
\vdots & \vdots & \ddots & \vdots \\
e^{-j 2\pi (N-1)(0)/N} & e^{-j 2\pi (N-1)(1)/N} & \cdots & e^{-j 2\pi (N-1)(N-1)/N}
\end{bmatrix}$

**Simplified notation:** Let $\omega_N = e^{-j 2\pi /N}$. Then $W_{kn} = \omega_N^{kn}$.

$\mathbf{W} = \begin{bmatrix}
\omega_N^{0 \cdot 0} & \omega_N^{0 \cdot 1} & \cdots & \omega_N^{0 \cdot (N-1)} \\
\omega_N^{1 \cdot 0} & \omega_N^{1 \cdot 1} & \cdots & \omega_N^{1 \cdot (N-1)} \\
\vdots & \vdots & \ddots & \vdots \\
\omega_N^{(N-1) \cdot 0} & \omega_N^{(N-1) \cdot 1} & \cdots & \omega_N^{(N-1) \cdot (N-1)}
\end{bmatrix}$

The matrix multiplication $\mathbf{W} \mathbf{x}$ then yields the DFT vector $\mathbf{X}$:

$\begin{bmatrix} X[0] \\ X[1] \\ \vdots \\ X[N-1] \end{bmatrix} = \begin{bmatrix}
\omega_N^{0 \cdot 0} & \omega_N^{0 \cdot 1} & \cdots & \omega_N^{0 \cdot (N-1)} \\
\omega_N^{1 \cdot 0} & \omega_N^{1 \cdot 1} & \cdots & \omega_N^{1 \cdot (N-1)} \\
\vdots & \vdots & \ddots & \vdots \\
\omega_N^{(N-1) \cdot 0} & \omega_N^{(N-1) \cdot 1} & \cdots & \omega_N^{(N-1) \cdot (N-1)}
\end{bmatrix} \begin{bmatrix} x[0] \\ x[1] \\ \vdots \\ x[N-1] \end{bmatrix}$

This matrix relation elegantly captures the essence of the DFT. Each output $X[k]$ is an inner product of the $k$-th row of $\mathbf{W}$ and the signal vector $\mathbf{x}$.

---

### 3. Example for N=4

Let's consider a signal of length $N=4$.
The signal is $x[n] = [x[0], x[1], x[2], x[3]]$.
The DFT coefficients are $X[0], X[1], X[2], X[3]$.

The DFT equations are:
$X[0] = x[0] + x[1] + x[2] + x[3]$
$X[1] = x[0] + x[1]e^{-j 2\pi (1)/4} + x[2]e^{-j 2\pi (2)/4} + x[3]e^{-j 2\pi (3)/4}$
$X[2] = x[0] + x[1]e^{-j 2\pi (2)/4} + x[2]e^{-j 2\pi (4)/4} + x[3]e^{-j 2\pi (6)/4}$
$X[3] = x[0] + x[1]e^{-j 2\pi (3)/4} + x[2]e^{-j 2\pi (6)/4} + x[3]e^{-j 2\pi (9)/4}$

Let $\omega_4 = e^{-j 2\pi /4} = e^{-j \pi /2} = -j$.
Then $\omega_4^0 = 1$, $\omega_4^1 = -j$, $\omega_4^2 = (-j)^2 = -1$, $\omega_4^3 = (-j)^3 = j$.

The DFT matrix for $N=4$ is:

$\mathbf{W}_4 = \begin{bmatrix}
\omega_4^{0 \cdot 0} & \omega_4^{0 \cdot 1} & \omega_4^{0 \cdot 2} & \omega_4^{0 \cdot 3} \\
\omega_4^{1 \cdot 0} & \omega_4^{1 \cdot 1} & \omega_4^{1 \cdot 2} & \omega_4^{1 \cdot 3} \\
\omega_4^{2 \cdot 0} & \omega_4^{2 \cdot 1} & \omega_4^{2 \cdot 2} & \omega_4^{2 \cdot 3} \\
\omega_4^{3 \cdot 0} & \omega_4^{3 \cdot 1} & \omega_4^{3 \cdot 2} & \omega_4^{3 \cdot 3}
\end{bmatrix} = \begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & -j & -1 & j \\
1 & -1 & 1 & -1 \\
1 & j & -1 & -j
\end{bmatrix}$

The matrix-vector multiplication is:

$\begin{bmatrix} X[0] \\ X[1] \\ X[2] \\ X[3] \end{bmatrix} = \begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & -j & -1 & j \\
1 & -1 & 1 & -1 \\
1 & j & -1 & -j
\end{bmatrix} \begin{bmatrix} x[0] \\ x[1] \\ x[2] \\ x[3] \end{bmatrix}$

This matches the DFT equations:
$X[0] = 1 \cdot x[0] + 1 \cdot x[1] + 1 \cdot x[2] + 1 \cdot x[3]$
$X[1] = 1 \cdot x[0] + (-j) \cdot x[1] + (-1) \cdot x[2] + j \cdot x[3]$
$X[2] = 1 \cdot x[0] + (-1) \cdot x[1] + 1 \cdot x[2] + (-1) \cdot x[3]$
$X[3] = 1 \cdot x[0] + j \cdot x[1] + (-1) \cdot x[2] + (-j) \cdot x[3]$

This clearly demonstrates the DFT as a linear transformation represented by matrix multiplication.

---

### Insights from Textbooks:

*   **Proakis & Ingle (3rd Ed.):** Chapter 7 (The Discrete Fourier Transform) discusses the DFT in detail. They emphasize its role in frequency analysis and introduce the DFT matrix as a fundamental representation, particularly when preparing for the discussion of the Fast Fourier Transform (FFT). They highlight that the DFT matrix is a special type of circulant matrix.
*   **Oppenheim & Schafer (3rd Ed.):** Chapter 7 (The Discrete Fourier Transform) also provides a thorough treatment. They stress the DFT as a linear operation and its connection to the Z-transform evaluated on the unit circle. The matrix formulation is presented as a direct consequence of the DFT definition, setting the stage for understanding computational algorithms.
*   **Downey (2nd Ed.):** While Think DSP focuses on practical implementation using Python, the underlying mathematical concepts are presented clearly. Downey implicitly shows the matrix relationship when explaining how the DFT is computed, illustrating the summations as dot products between the signal and complex exponentials.

---

### Important Points to Remember:

*   **Linearity:** The DFT is fundamentally a linear transformation, meaning it preserves vector addition and scalar multiplication. This is a crucial property that allows for its matrix representation.
*   **Matrix Form:** The DFT can be compactly expressed as a matrix-vector multiplication: $\mathbf{X} = \mathbf{W} \mathbf{x}$.
*   **DFT Matrix (W):** The elements of the $N \times N$ DFT matrix $\mathbf{W}$ are given by $W_{kn} = e^{-j 2\pi kn/N}$.
*   **Computational Implications:** Understanding the DFT as a matrix operation helps in appreciating the computational complexity of the DFT ($O(N^2)$ operations). This is what motivates the development of more efficient algorithms like the FFT.
*   **Inverse DFT (IDFT):** Similarly, the IDFT can also be represented by a matrix, which is the inverse of the DFT matrix (scaled).

---

### Practice Questions:

**Question 1:**
The Discrete Fourier Transform (DFT) is a linear transformation because it satisfies which two properties?
(a) Superposition and Invertibility
(b) Additivity and Homogeneity
(c) Causality and Stability
(d) Linearity and Time-Invariance

**Question 2:**
For a discrete-time signal of length $N$, the DFT matrix $\mathbf{W}$ is a matrix of size:
(a) $N \times 1$
(b) $1 \times N$
(c) $N \times N$
(d) $N^2 \times N^2$

**Question 3:**
Given a signal $x[n]$ of length $N$, its DFT $X[k]$ is represented in matrix form as $\mathbf{X} = \mathbf{W} \mathbf{x}$. What are the elements of the DFT matrix $\mathbf{W}$?

**Question 4:**
Consider a signal $x[n] = [1, 2, 3, 4]$ ($N=4$).
a) Construct the DFT matrix $\mathbf{W}_4$.
b) Compute the DFT of $x[n]$ using the matrix multiplication $\mathbf{X} = \mathbf{W}_4 \mathbf{x}$. (Show your work or use a computational tool).

---

### Answers to Practice Questions:

**Answer 1:**
(b) Additivity and Homogeneity

**Answer 2:**
(c) $N \times N$

**Answer 3:**
The elements of the DFT matrix $\mathbf{W}$ are given by $W_{kn} = e^{-j 2\pi kn/N}$, where $k$ is the row index (frequency index, $0$ to $N-1$) and $n$ is the column index (time index, $0$ to $N-1$).

**Answer 4:**
a) The DFT matrix $\mathbf{W}_4$ is:
$\mathbf{W}_4 = \begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & -j & -1 & j \\
1 & -1 & 1 & -1 \\
1 & j & -1 & -j
\end{bmatrix}$

b) The signal vector is $\mathbf{x} = \begin{bmatrix} 1 \\ 2 \\ 3 \\ 4 \end{bmatrix}$.

$\mathbf{X} = \mathbf{W}_4 \mathbf{x} = \begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & -j & -1 & j \\
1 & -1 & 1 & -1 \\
1 & j & -1 & -j
\end{bmatrix} \begin{bmatrix} 1 \\ 2 \\ 3 \\ 4 \end{bmatrix}$

$\mathbf{X} = \begin{bmatrix}
1(1) + 1(2) + 1(3) + 1(4) \\
1(1) + (-j)(2) + (-1)(3) + j(4) \\
1(1) + (-1)(2) + 1(3) + (-1)(4) \\
1(1) + j(2) + (-1)(3) + (-j)(4)
\end{bmatrix} = \begin{bmatrix}
1 + 2 + 3 + 4 \\
1 - 2j - 3 + 4j \\
1 - 2 + 3 - 4 \\
1 + 2j - 3 - 4j
\end{bmatrix} = \begin{bmatrix}
10 \\
-2 + 2j \\
-2 \\
-2 - 2j
\end{bmatrix}$

So, the DFT coefficients are $X[0]=10$, $X[1]=-2+2j$, $X[2]=-2$, $X[3]=-2-2j$.

---
This concludes the notes on the DFT as a linear transformation and its matrix relation. Understanding this foundational concept is crucial for progressing to more advanced topics in Digital Signal Processing, particularly the efficient computation of the DFT via the FFT.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
