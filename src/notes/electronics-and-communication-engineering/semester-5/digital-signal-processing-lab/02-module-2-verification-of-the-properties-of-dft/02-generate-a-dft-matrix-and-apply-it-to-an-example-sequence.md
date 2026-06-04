---
title: "Generate a DFT matrix and apply it to an example sequence."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 2: Verification of the Properties of DFT"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec2f"
status: "completed"
scrapedAt: "2026-05-23T17:55:51.908Z"
---
# Digital Signal Processing Lab: Module 2 - Verification of the Properties of DFT

## Topic: Generate a DFT Matrix and Apply it to an Example Sequence

### 1. Introduction to the Discrete Fourier Transform (DFT)

The Discrete Fourier Transform (DFT) is a fundamental tool in Digital Signal Processing (DSP) that allows us to analyze the frequency content of a discrete-time signal. It transforms a finite-length sequence of discrete-time samples into an equal-length sequence of discrete-frequency components.

**Key Concepts & Definitions:**

*   **Discrete-Time Signal:** A signal whose value is defined only at discrete points in time. Represented as $x[n]$, where $n$ is the sample index.
*   **Finite-Length Sequence:** A sequence that has a limited number of samples.
*   **Frequency Domain:** The representation of a signal in terms of its constituent frequencies.
*   **Time Domain:** The representation of a signal in terms of its amplitude at different points in time.

**DFT Formula:**

For a finite-length sequence $x[n]$ of length $N$, where $n = 0, 1, \ldots, N-1$, the DFT is given by:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}$ for $k = 0, 1, \ldots, N-1$

Where:
*   $X[k]$ is the $k$-th frequency component of the DFT.
*   $N$ is the length of the sequence.
*   $e^{-j2\pi kn/N}$ is the complex exponential, often referred to as the "twiddle factor" or "DFT basis function."

**Inverse DFT (IDFT) Formula:**

The IDFT allows us to reconstruct the original time-domain signal from its frequency-domain representation:

$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j2\pi kn/N}$ for $n = 0, 1, \ldots, N-1$

### 2. The DFT Matrix

The DFT can be represented in a compact matrix form. This is particularly useful for understanding the transform and for computational implementations.

**Key Concepts & Definitions:**

*   **DFT Matrix (W_N):** A square matrix of size $N \times N$ that, when multiplied by a time-domain sequence vector, yields its DFT.
*   **Twiddle Factor:** The complex exponential term $W_N = e^{-j2\pi/N}$. The elements of the DFT matrix are powers of this twiddle factor.

**Constructing the DFT Matrix:**

The DFT matrix $W_N$ of size $N \times N$ is defined as:

$W_N = \begin{bmatrix}
W_N^{0 \cdot 0} & W_N^{0 \cdot 1} & \cdots & W_N^{0 \cdot (N-1)} \\
W_N^{1 \cdot 0} & W_N^{1 \cdot 1} & \cdots & W_N^{1 \cdot (N-1)} \\
\vdots & \vdots & \ddots & \vdots \\
W_N^{(N-1) \cdot 0} & W_N^{(N-1) \cdot 1} & \cdots & W_N^{(N-1) \cdot (N-1)}
\end{bmatrix}$

Where $W_N^{nk} = e^{-j2\pi nk/N}$.

**In matrix form, the DFT can be written as:**

$\mathbf{X} = W_N \mathbf{x}$

Where:
*   $\mathbf{X}$ is the column vector of DFT coefficients: $\mathbf{X} = \begin{bmatrix} X[0] \\ X[1] \\ \vdots \\ X[N-1] \end{bmatrix}$
*   $\mathbf{x}$ is the column vector of the input sequence: $\mathbf{x} = \begin{bmatrix} x[0] \\ x[1] \\ \vdots \\ x[N-1] \end{bmatrix}$
*   $W_N$ is the $N \times N$ DFT matrix.

**Example: Constructing a DFT matrix for N=4**

Let $N=4$. The twiddle factor is $W_4 = e^{-j2\pi/4} = e^{-j\pi/2} = -j$.

The DFT matrix $W_4$ is:

$W_4 = \begin{bmatrix}
W_4^{0 \cdot 0} & W_4^{0 \cdot 1} & W_4^{0 \cdot 2} & W_4^{0 \cdot 3} \\
W_4^{1 \cdot 0} & W_4^{1 \cdot 1} & W_4^{1 \cdot 2} & W_4^{1 \cdot 3} \\
W_4^{2 \cdot 0} & W_4^{2 \cdot 1} & W_4^{2 \cdot 2} & W_4^{2 \cdot 3} \\
W_4^{3 \cdot 0} & W_4^{3 \cdot 1} & W_4^{3 \cdot 2} & W_4^{3 \cdot 3}
\end{bmatrix}$

Let's calculate the elements:
*   $W_4^{nk} = (W_4)^n \cdot (W_4)^k = (-j)^n (-j)^k$

$W_4^{0 \cdot 0} = (-j)^0 (-j)^0 = 1 \cdot 1 = 1$
$W_4^{0 \cdot 1} = (-j)^0 (-j)^1 = 1 \cdot (-j) = -j$
$W_4^{0 \cdot 2} = (-j)^0 (-j)^2 = 1 \cdot (-1) = -1$
$W_4^{0 \cdot 3} = (-j)^0 (-j)^3 = 1 \cdot (j) = j$

$W_4^{1 \cdot 0} = (-j)^1 (-j)^0 = (-j) \cdot 1 = -j$
$W_4^{1 \cdot 1} = (-j)^1 (-j)^1 = (-j) \cdot (-j) = -1$
$W_4^{1 \cdot 2} = (-j)^1 (-j)^2 = (-j) \cdot (-1) = j$
$W_4^{1 \cdot 3} = (-j)^1 (-j)^3 = (-j) \cdot (j) = 1$

$W_4^{2 \cdot 0} = (-j)^2 (-j)^0 = (-1) \cdot 1 = -1$
$W_4^{2 \cdot 1} = (-j)^2 (-j)^1 = (-1) \cdot (-j) = j$
$W_4^{2 \cdot 2} = (-j)^2 (-j)^2 = (-1) \cdot (-1) = 1$
$W_4^{2 \cdot 3} = (-j)^2 (-j)^3 = (-1) \cdot (j) = -j$

$W_4^{3 \cdot 0} = (-j)^3 (-j)^0 = (j) \cdot 1 = j$
$W_4^{3 \cdot 1} = (-j)^3 (-j)^1 = (j) \cdot (-j) = 1$
$W_4^{3 \cdot 2} = (-j)^3 (-j)^2 = (j) \cdot (-1) = -j$
$W_4^{3 \cdot 3} = (-j)^3 (-j)^3 = (j) \cdot (j) = -1$

So, the DFT matrix for N=4 is:

$W_4 = \begin{bmatrix}
1 & -j & -1 & j \\
-j & -1 & j & 1 \\
-1 & j & 1 & -j \\
j & 1 & -j & -1
\end{bmatrix}$

**Connection to Textbooks:**

*   **Ingle & Proakis (Chapter 2):** Discusses the DFT and its properties. They often use matrix notation to explain the transform.
*   **Oppenheim & Schafer (Chapter 7):** Provides a rigorous mathematical treatment of the DFT, including its matrix representation.

### 3. Applying the DFT Matrix to an Example Sequence

Once we have the DFT matrix, we can apply it to an input sequence to compute its DFT. This is done through matrix multiplication.

**Procedure:**

1.  **Define the input sequence:** Choose a finite-length sequence $x[n]$ of length $N$.
2.  **Form the input vector:** Represent the sequence as a column vector $\mathbf{x}$.
3.  **Generate the DFT matrix:** Construct the $N \times N$ DFT matrix $W_N$.
4.  **Perform matrix multiplication:** Multiply the DFT matrix by the input vector: $\mathbf{X} = W_N \mathbf{x}$.
5.  **Interpret the result:** The resulting vector $\mathbf{X}$ contains the DFT coefficients $X[k]$.

**Example Sequence:**

Let's use the example sequence $x[n]$ of length $N=4$:
$x[0] = 1$
$x[1] = 2$
$x[2] = 1$
$x[3] = 0$

The input vector is:
$\mathbf{x} = \begin{bmatrix} 1 \\ 2 \\ 1 \\ 0 \end{bmatrix}$

We will use the $W_4$ matrix calculated previously:
$W_4 = \begin{bmatrix}
1 & -j & -1 & j \\
-j & -1 & j & 1 \\
-1 & j & 1 & -j \\
j & 1 & -j & -1
\end{bmatrix}$

**Matrix Multiplication:**

$\mathbf{X} = W_4 \mathbf{x} = \begin{bmatrix}
1 & -j & -1 & j \\
-j & -1 & j & 1 \\
-1 & j & 1 & -j \\
j & 1 & -j & -1
\end{bmatrix} \begin{bmatrix} 1 \\ 2 \\ 1 \\ 0 \end{bmatrix}$

**Calculation of X[k]:**

$X[0] = (1)(1) + (-j)(2) + (-1)(1) + (j)(0) = 1 - 2j - 1 + 0 = -2j$

$X[1] = (-j)(1) + (-1)(2) + (j)(1) + (1)(0) = -j - 2 + j + 0 = -2$

$X[2] = (-1)(1) + (j)(2) + (1)(1) + (-j)(0) = -1 + 2j + 1 + 0 = 2j$

$X[3] = (j)(1) + (1)(2) + (-j)(1) + (-1)(0) = j + 2 - j + 0 = 2$

So, the DFT of the sequence is:
$\mathbf{X} = \begin{bmatrix} -2j \\ -2 \\ 2j \\ 2 \end{bmatrix}$

**Verification using the DFT formula:**

Let's verify $X[0]$ using the DFT formula:
$X[0] = \sum_{n=0}^{3} x[n] e^{-j2\pi (0)n/4} = \sum_{n=0}^{3} x[n] e^0 = \sum_{n=0}^{3} x[n]$
$X[0] = x[0] + x[1] + x[2] + x[3] = 1 + 2 + 1 + 0 = 4$

**Wait, there's a discrepancy!** Let's re-examine the calculation and the standard DFT matrix definition.

**Important Point to Remember:** The commonly used DFT matrix has $W_N^{nk}$ in the $(n,k)$ position, where $n$ is the row index and $k$ is the column index. The calculation above assumes $n$ is the row index and $k$ is the column index in the matrix-vector product. However, the typical DFT definition has $k$ associated with the output frequency index and $n$ with the input time index.

Let's re-align with the standard DFT formula $X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}$.

The $k$-th row of the DFT matrix should produce $X[k]$. The $k$-th row vector is $[W_N^{k \cdot 0}, W_N^{k \cdot 1}, \ldots, W_N^{k \cdot (N-1)}]$.

So, the DFT matrix should be structured such that:
$\begin{bmatrix} X[0] \\ X[1] \\ \vdots \\ X[N-1] \end{bmatrix} = \begin{bmatrix}
W_N^{0 \cdot 0} & W_N^{0 \cdot 1} & \cdots & W_N^{0 \cdot (N-1)} \\
W_N^{1 \cdot 0} & W_N^{1 \cdot 1} & \cdots & W_N^{1 \cdot (N-1)} \\
\vdots & \vdots & \ddots & \vdots \\
W_N^{(N-1) \cdot 0} & W_N^{(N-1) \cdot 1} & \cdots & W_N^{(N-1) \cdot (N-1)}
\end{bmatrix} \begin{bmatrix} x[0] \\ x[1] \\ \vdots \\ x[N-1] \end{bmatrix}$

This confirms the initial matrix structure. Let's re-check the calculation of the elements and the multiplication.

**Recalculating W_4 elements:**
$W_4 = e^{-j2\pi/4} = e^{-j\pi/2} = -j$

Row 0: $W_4^{0 \cdot k} = (-j)^{0 \cdot k} = 1$ for all $k$.  This gives $[1, 1, 1, 1]$.
Row 1: $W_4^{1 \cdot k} = (-j)^k$ for $k=0,1,2,3$. This gives $[(-j)^0, (-j)^1, (-j)^2, (-j)^3] = [1, -j, -1, j]$.
Row 2: $W_4^{2 \cdot k} = (-j)^{2k} = ((-j)^2)^k = (-1)^k$ for $k=0,1,2,3$. This gives $[(-1)^0, (-1)^1, (-1)^2, (-1)^3] = [1, -1, 1, -1]$.
Row 3: $W_4^{3 \cdot k} = (-j)^{3k} = ((-j)^3)^k = (j)^k$ for $k=0,1,2,3$. This gives $[(j)^0, (j)^1, (j)^2, (j)^3] = [1, j, -1, -j]$.

So the correct $W_4$ matrix is:
$W_4 = \begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & -j & -1 & j \\
1 & -1 & 1 & -1 \\
1 & j & -1 & -j
\end{bmatrix}$

Now, let's re-apply this to the input vector $\mathbf{x} = \begin{bmatrix} 1 \\ 2 \\ 1 \\ 0 \end{bmatrix}$:

$\mathbf{X} = W_4 \mathbf{x} = \begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & -j & -1 & j \\
1 & -1 & 1 & -1 \\
1 & j & -1 & -j
\end{bmatrix} \begin{bmatrix} 1 \\ 2 \\ 1 \\ 0 \end{bmatrix}$

**Recalculating X[k]:**

$X[0] = (1)(1) + (1)(2) + (1)(1) + (1)(0) = 1 + 2 + 1 + 0 = 4$
(Matches the sum of the sequence as expected for $X[0]$)

$X[1] = (1)(1) + (-j)(2) + (-1)(1) + (j)(0) = 1 - 2j - 1 + 0 = -2j$

$X[2] = (1)(1) + (-1)(2) + (1)(1) + (-1)(0) = 1 - 2 + 1 + 0 = 0$

$X[3] = (1)(1) + (j)(2) + (-1)(1) + (-j)(0) = 1 + 2j - 1 + 0 = 2j$

So, the correct DFT of the sequence is:
$\mathbf{X} = \begin{bmatrix} 4 \\ -2j \\ 0 \\ 2j \end{bmatrix}$

**Verification using the DFT formula:**

$X[1] = \sum_{n=0}^{3} x[n] e^{-j2\pi (1)n/4} = \sum_{n=0}^{3} x[n] e^{-j\pi n/2}$
$X[1] = x[0]e^0 + x[1]e^{-j\pi/2} + x[2]e^{-j\pi} + x[3]e^{-j3\pi/2}$
$X[1] = (1)(1) + (2)(-j) + (1)(-1) + (0)(j)$
$X[1] = 1 - 2j - 1 = -2j$ (Matches)

$X[2] = \sum_{n=0}^{3} x[n] e^{-j2\pi (2)n/4} = \sum_{n=0}^{3} x[n] e^{-j\pi n}$
$X[2] = x[0]e^0 + x[1]e^{-j\pi} + x[2]e^{-j2\pi} + x[3]e^{-j3\pi}$
$X[2] = (1)(1) + (2)(-1) + (1)(1) + (0)(-1)$
$X[2] = 1 - 2 + 1 = 0$ (Matches)

$X[3] = \sum_{n=0}^{3} x[n] e^{-j2\pi (3)n/4} = \sum_{n=0}^{3} x[n] e^{-j3\pi n/2}$
$X[3] = x[0]e^0 + x[1]e^{-j3\pi/2} + x[2]e^{-j3\pi} + x[3]e^{-j9\pi/2}$
$X[3] = (1)(1) + (2)(j) + (1)(-1) + (0)(-j)$
$X[3] = 1 + 2j - 1 = 2j$ (Matches)

The matrix method yields the correct DFT coefficients.

**Reference to Python Implementation (Think DSP):**
Allen B. Downey's "Think DSP" often uses numerical libraries like NumPy in Python. In NumPy, you would typically generate the DFT matrix using `numpy.fft.dft` or by constructing it manually with complex exponentials.

### 4. Practical Implementation and Software Tools

In a lab setting, you would use software tools to generate the DFT matrix and apply it. Common tools include:

*   **MATLAB:** Offers built-in functions like `dftmtx(N)` to generate the DFT matrix and `fft(x)` for computing the Fast Fourier Transform (FFT), which is an efficient algorithm for computing the DFT.
*   **Python (with NumPy/SciPy):** `scipy.linalg.dft(N)` can generate the DFT matrix, and `numpy.fft.fft(x)` computes the FFT.

**MATLAB Example Snippet:**

```matlab
N = 4;
x = [1, 2, 1, 0]; % Input sequence

% Generate DFT matrix
W_N = dftmtx(N);

% Convert input to column vector
x_vec = x(:);

% Compute DFT using matrix multiplication
X_matrix = W_N * x_vec;

% Display the result
disp('DFT using matrix multiplication:');
disp(X_matrix);

% For comparison, compute DFT using FFT
X_fft = fft(x);
disp('DFT using fft() function:');
disp(X_fft);
```

**Python Example Snippet:**

```python
import numpy as np
from scipy.linalg import dft

N = 4
x = np.array([1, 2, 1, 0])

# Generate DFT matrix
W_N = dft(N)

# Compute DFT using matrix multiplication
X_matrix = W_N @ x # @ is matrix multiplication operator

# Display the result
print('DFT using matrix multiplication:')
print(X_matrix)

# For comparison, compute DFT using FFT
X_fft = np.fft.fft(x)
print('DFT using np.fft.fft():')
print(X_fft)
```

### 5. Learning Outcomes Addressed

This topic directly addresses the following learning outcomes:

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2)**
    *   While not directly generating waveforms here, understanding the DFT is crucial for analyzing the frequency components of waveforms. The DFT matrix is a fundamental building block for this.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2)**
    *   This topic is foundational to verifying DFT properties. By understanding the DFT matrix, you can see how operations in the time domain (like multiplication by the matrix) correspond to operations in the frequency domain. Many DFT properties (like linearity, convolution theorem) can be elegantly demonstrated using matrix operations.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2)**
    *   Understanding how the DFT is represented as a matrix multiplication is essential for appreciating the computational requirements of DSP algorithms. Efficient computation of the DFT (like the FFT) is a cornerstone of real-time DSP on hardware.
*   **CO4: Implement LTI systems (Knowledge Level: K3)**
    *   The convolution theorem, which states that convolution in the time domain is multiplication in the frequency domain, is a key concept for implementing LTI systems. The DFT is used to implement this theorem efficiently. Matrix representation of DFT helps understand this transformation.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3)**
    *   Filter design, especially FIR filters, often involves manipulating the frequency response. The DFT is used to analyze and design filters by working in the frequency domain. Understanding the DFT matrix provides a direct link between the time-domain impulse response and the frequency-domain representation.

### 6. Practice Questions and Exercises

**Question 1:**
Generate the DFT matrix $W_3$ for a sequence of length $N=3$. Compute the DFT of the sequence $x[n] = [2, -1, 0]$ using this matrix.

**Answer 1:**
For $N=3$, $W_3 = e^{-j2\pi/3} = e^{-j2\pi/3} = \cos(-2\pi/3) + j\sin(-2\pi/3) = -0.5 - j\sqrt{3}/2 \approx -0.5 - j0.866$.
$W_3 = \begin{bmatrix}
1 & 1 & 1 \\
1 & W_3^1 & W_3^2 \\
1 & W_3^2 & W_3^4
\end{bmatrix} = \begin{bmatrix}
1 & 1 & 1 \\
1 & e^{-j2\pi/3} & e^{-j4\pi/3} \\
1 & e^{-j4\pi/3} & e^{-j8\pi/3}
\end{bmatrix}$

$e^{-j2\pi/3} = -0.5 - j0.866$
$e^{-j4\pi/3} = e^{j2\pi/3} = -0.5 + j0.866$
$e^{-j8\pi/3} = e^{-j2\pi/3} = -0.5 - j0.866$

$W_3 = \begin{bmatrix}
1 & 1 & 1 \\
1 & -0.5 - j0.866 & -0.5 + j0.866 \\
1 & -0.5 + j0.866 & -0.5 - j0.866
\end{bmatrix}$

Input sequence: $x = [2, -1, 0]$.
Input vector: $\mathbf{x} = \begin{bmatrix} 2 \\ -1 \\ 0 \end{bmatrix}$.

$\mathbf{X} = W_3 \mathbf{x} = \begin{bmatrix}
1 & 1 & 1 \\
1 & -0.5 - j0.866 & -0.5 + j0.866 \\
1 & -0.5 + j0.866 & -0.5 - j0.866
\end{bmatrix} \begin{bmatrix} 2 \\ -1 \\ 0 \end{bmatrix}$

$X[0] = (1)(2) + (1)(-1) + (1)(0) = 2 - 1 = 1$
$X[1] = (1)(2) + (-0.5 - j0.866)(-1) + (-0.5 + j0.866)(0) = 2 + 0.5 + j0.866 = 2.5 + j0.866$
$X[2] = (1)(2) + (-0.5 + j0.866)(-1) + (-0.5 - j0.866)(0) = 2 + 0.5 - j0.866 = 2.5 - j0.866$

So, $\mathbf{X} = \begin{bmatrix} 1 \\ 2.5 + j0.866 \\ 2.5 - j0.866 \end{bmatrix}$.

**Question 2:**
What is the key advantage of using the Fast Fourier Transform (FFT) algorithm over direct matrix multiplication for computing the DFT, especially for large $N$?

**Answer 2:**
The primary advantage of the FFT is its **computational efficiency**. Direct matrix multiplication for computing the DFT of a sequence of length $N$ requires approximately $N^2$ complex multiplications and additions. FFT algorithms, such as the radix-2 Cooley-Tukey algorithm, reduce the computational complexity to approximately $O(N \log_2 N)$. For large values of $N$, this difference is substantial, making FFT essential for real-time DSP applications.

**Question 3:**
Explain how the DFT matrix can be used to verify the **linearity property** of the DFT.

**Answer 3:**
The linearity property of the DFT states that if $x_1[n]$ and $x_2[n]$ are two sequences, and $a$ and $b$ are constants, then:
$DFT\{ax_1[n] + bx_2[n]\} = a \cdot DFT\{x_1[n]\} + b \cdot DFT\{x_2[n]\}$

In matrix form, this translates to:
$W_N (a\mathbf{x}_1 + b\mathbf{x}_2) = a (W_N \mathbf{x}_1) + b (W_N \mathbf{x}_2)$

This equation holds true because matrix multiplication is distributive over vector addition and scalar multiplication is distributive over matrix multiplication. To verify this, one would:
1.  Choose two sequences, $\mathbf{x}_1$ and $\mathbf{x}_2$, and constants $a$ and $b$.
2.  Compute the left side: Construct the vector $a\mathbf{x}_1 + b\mathbf{x}_2$ and multiply it by $W_N$.
3.  Compute the right side: Compute $W_N \mathbf{x}_1$ and $W_N \mathbf{x}_2$ separately, then multiply by $a$ and $b$ respectively, and add the results.
4.  Compare the results from both sides, which should be identical (within numerical precision).

### 7. Important Points to Remember

*   The DFT transforms a finite-length time-domain sequence into a finite-length frequency-domain sequence.
*   The DFT can be efficiently represented and computed using a DFT matrix.
*   The elements of the DFT matrix are complex exponentials (twiddle factors).
*   Matrix multiplication of the DFT matrix with an input vector yields the DFT of the sequence.
*   Understanding the matrix representation is crucial for grasping DFT properties and the computational aspects of DSP.
*   While direct matrix multiplication is conceptually clear, FFT algorithms are used in practice for efficiency.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. Further Reading & Exploration

*   **Ingle & Proakis:** Review Chapter 2 for a detailed explanation of the DFT and its applications.
*   **Oppenheim & Schafer:** Refer to Chapter 7 for a rigorous mathematical foundation of the DFT and its properties, including matrix representations.
*   **Think DSP:** Explore how Python libraries like NumPy and SciPy implement FFT and DFT matrix generation for practical analysis.

This concludes the study notes for generating a DFT matrix and applying it to an example sequence. This topic is a fundamental stepping stone for understanding and verifying other properties of the DFT in subsequent modules.