---
title: "Compute the DFTs of 16 point, 64 point and 1024 point random sequences using the above 
matrices."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 2: Verification of the Properties of DFT"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec32"
status: "completed"
scrapedAt: "2026-05-23T17:55:54.049Z"
---
# DIGITAL SIGNAL PROCESSING LAB: Module 2 - Verification of the Properties of DFT

## Topic: Compute the DFTs of 16-point, 64-point, and 1024-point Random Sequences using DFT Matrices

### 1. Introduction

This lab module focuses on understanding and verifying the properties of the Discrete Fourier Transform (DFT). A fundamental way to compute the DFT is by using the DFT matrix. This topic specifically addresses the practical computation of DFTs for sequences of varying lengths (16, 64, and 1024 points) using this matrix representation. This exercise will reinforce our understanding of how the DFT transforms a time-domain signal into its frequency-domain representation.

### 2. Learning Outcomes Covered

This topic directly contributes to the following learning outcomes:

*   **LO: Compute the DFTs of 16-point, 64-point, and 1024-point random sequences using the DFT matrices.**

While the immediate focus is on computation, understanding these computations is crucial for:

*   **LO: Generate basic signal waveforms (K2):** Generating random sequences is a form of signal generation.
*   **LO: Verify the properties of DFT (K2):** The ability to compute DFTs is a prerequisite for verifying its properties.
*   **LO: Implement LTI systems (K3):** The DFT is a powerful tool for analyzing and implementing Linear Time-Invariant (LTI) systems in the frequency domain.
*   **LO: Design and Implement FIR low-pass filters (K3):** Frequency-domain analysis using DFT is fundamental to filter design.

### 3. Key Concepts and Definitions

#### 3.1. Discrete Fourier Transform (DFT)

The DFT is a mathematical transformation that decomposes a finite sequence of data points into its constituent frequency components. For a sequence $x[n]$ of length $N$, its DFT $X[k]$ is given by:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi}{N} nk}$ , for $k = 0, 1, \dots, N-1$

**Important Note:** The DFT essentially represents the signal as a sum of complex exponentials at different frequencies.

#### 3.2. DFT Matrix

The DFT can be represented in matrix form. If $x$ is a column vector of the input sequence and $X$ is a column vector of its DFT, then:

$X = W_N x$

where $W_N$ is the $N \times N$ DFT matrix. The elements of the DFT matrix $W_N$ are given by:

$(W_N)_{kn} = W_N^{kn} = e^{-j \frac{2\pi}{N} kn}$

for $k, n = 0, 1, \dots, N-1$.

**Example: DFT matrix for N=4**

The DFT matrix $W_4$ is:

$$W_4 = \begin{bmatrix}
W_4^0 & W_4^0 & W_4^0 & W_4^0 \\
W_4^0 & W_4^1 & W_4^2 & W_4^3 \\
W_4^0 & W_4^2 & W_4^4 & W_4^6 \\
W_4^0 & W_4^3 & W_4^6 & W_4^9
\end{bmatrix}$$

where $W_N = e^{-j \frac{2\pi}{N}}$.
So, for N=4:
$W_4^0 = e^0 = 1$
$W_4^1 = e^{-j \frac{2\pi}{4}} = e^{-j \frac{\pi}{2}} = -j$
$W_4^2 = e^{-j \frac{4\pi}{4}} = e^{-j \pi} = -1$
$W_4^3 = e^{-j \frac{6\pi}{4}} = e^{-j \frac{3\pi}{2}} = j$

$$W_4 = \begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & -j & -1 & j \\
1 & -1 & 1 & -1 \\
1 & j & -1 & -j
\end{bmatrix}$$

#### 3.3. Random Sequences

A random sequence is a sequence where the values are generated according to a probability distribution. In this context, we will typically generate sequences with real-valued elements, often uniformly distributed within a certain range (e.g., between -1 and 1 or 0 and 1).

#### 3.4. Matrix Multiplication

The core operation for computing the DFT using matrices is matrix multiplication. The output DFT vector $X$ is obtained by multiplying the DFT matrix $W_N$ with the input sequence vector $x$.

$X = W_N x$

### 4. Practical Implementation Steps

To compute the DFTs of random sequences of lengths 16, 64, and 1024 using DFT matrices, we will follow these steps:

1.  **Generate Random Sequences:**
    *   Create random sequences $x_{16}$, $x_{64}$, and $x_{1024}$ of lengths 16, 64, and 1024, respectively. These sequences can be generated using functions available in programming environments like MATLAB or Python.
2.  **Construct DFT Matrices:**
    *   For each sequence length $N$ (16, 64, 1024), construct the corresponding $N \times N$ DFT matrix $W_N$. The elements $(W_N)_{kn}$ are $e^{-j \frac{2\pi}{N} kn}$.
3.  **Compute DFTs using Matrix Multiplication:**
    *   For each sequence, multiply the DFT matrix by the sequence vector:
        *   $X_{16} = W_{16} x_{16}$
        *   $X_{64} = W_{64} x_{64}$
        *   $X_{1024} = W_{1024} x_{1024}$

### 5. Examples and Code Snippets (Illustrative - using MATLAB syntax)

This section provides illustrative code snippets. You would implement these in your lab environment.

#### 5.1. Generating a Random Sequence (N=16)

```matlab
N = 16;
x_16 = rand(N, 1); % Generates a column vector of 16 random numbers between 0 and 1
```

#### 5.2. Constructing the DFT Matrix (N=16)

```matlab
N = 16;
W_16 = dftmtx(N); % MATLAB's built-in function to create DFT matrix
```

**Alternatively, manually construct the matrix:**

```matlab
N = 16;
W_16 = zeros(N, N);
for k = 0:N-1
    for n = 0:N-1
        W_16(k+1, n+1) = exp(-1j * 2 * pi * k * n / N);
    end
end
```
*Note: MATLAB uses 1-based indexing, so `k+1` and `n+1` are used.*

#### 5.3. Computing the DFT (N=16)

```matlab
N = 16;
x_16 = rand(N, 1);
W_16 = dftmtx(N);
X_16 = W_16 * x_16;
```

#### 5.4. Repeating for N=64 and N=1024

You would repeat the above steps with `N = 64` and `N = 1024`.

```matlab
% For N = 64
N_64 = 64;
x_64 = rand(N_64, 1);
W_64 = dftmtx(N_64);
X_64 = W_64 * x_64;

% For N = 1024
N_1024 = 1024;
x_1024 = rand(N_1024, 1);
W_1024 = dftmtx(N_1024);
X_1024 = W_1024 * x_1024;
```

**Verification using built-in FFT (Fast Fourier Transform):**

For comparison and verification, you can use the highly optimized FFT function, which calculates the DFT much more efficiently.

```matlab
% For N = 16
N = 16;
x_16 = rand(N, 1);
W_16 = dftmtx(N);
X_16_matrix = W_16 * x_16;
X_16_fft = fft(x_16); % Using built-in FFT

% Check if the results are close (due to floating-point precision)
disp('Are X_16_matrix and X_16_fft close?');
disp(max(abs(X_16_matrix - X_16_fft))); % Should be a very small number
```

### 6. Observations and Discussion Points

*   **Computational Complexity:** Directly computing the DFT using matrices involves $N^2$ complex multiplications and additions. For larger $N$ (like 1024), this becomes computationally very expensive. This is why the Fast Fourier Transform (FFT) algorithm, which reduces the complexity to $O(N \log N)$, is preferred in practice.
*   **Floating-Point Precision:** When comparing the results from matrix multiplication with the FFT, you might observe very small differences due to floating-point arithmetic. This is expected.
*   **Nature of DFT Output:** For random input sequences, the DFT output $X[k]$ will generally be complex-valued and spread across all frequencies. The magnitude of $X[k]$ indicates the strength of the corresponding frequency component.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. Connection to Textbooks and Reference Books

*   **Digital Signal Processing using Matlab by Vinay K. Ingle, John G. Proakis (Cengage Learning, 3rd Ed., 2011):** This textbook likely covers the DFT formulation and matrix representation in detail. Chapters on the DFT and its properties would be relevant. Ingle and Proakis are renowned for their clear explanations of DSP fundamentals.
*   **Think DSP: Digital Signal Processing using Python by Allen B. Downey (Green Tea Press, 1st Ed. 2019):** Downey's book emphasizes practical implementation. You'll find code examples for DFT computation, possibly using NumPy, which can be analogous to the MATLAB examples. The focus on understanding through Python code aligns well with this lab topic.
*   **DSP applications using C and the TMS320C6x DSK by Chassaing, Rulph (Wiley & Sons, 2/e. 2008):** While this book focuses on C and hardware, the underlying mathematical principles of the DFT and its matrix representation are the same. It provides context for how these computations are performed in embedded systems.
*   **Discrete-Time Signal Processing by Alan V Oppenheim, Ronald W. Schafer (Pearson Education, 4th Ed., 2018):** This is a foundational text in DSP. Oppenheim and Schafer provide rigorous mathematical derivations of the DFT and its properties, including the matrix formulation. Understanding the theoretical basis from this book will enhance the practical understanding gained in the lab.

### 8. Alignment with Course Outcomes

*   **CO1: Generate basic signal waveforms (K2):** Generating random sequences is a form of signal generation, contributing to this outcome.
*   **CO2: Verify the properties of DFT (K2):** The ability to compute the DFT is a fundamental step towards verifying its properties like linearity, convolution theorem, etc. This lab provides the tool (DFT computation) to perform those verifications later.
*   **CO3: Familiarize with DSP hardware and interface with Computer (K2):** While this specific topic is purely computational, the context of a DSP lab implies eventual connection to hardware. Understanding these basic computations is the first step before implementing them on DSP processors.
*   **CO4: Implement LTI systems (K3):** The DFT is a cornerstone for LTI system analysis and implementation in the frequency domain (e.g., through convolution). This topic builds the foundational skill of computing the DFT, which is essential for frequency-domain LTI system analysis.
*   **CO5: Design and Implement FIR low-pass filters (K3):** Filter design, especially FIR filters, heavily relies on frequency-domain analysis. The ability to compute the DFT of sequences is directly applicable to understanding the frequency response of filters.

### 9. Practice Questions and Exercises

**Question 1:**
Explain the computational complexity of computing the DFT of an $N$-point sequence using matrix multiplication.

**Answer:**
The DFT of an $N$-point sequence involves multiplying an $N \times N$ matrix with an $N \times 1$ vector. This requires $N^2$ complex multiplications and $N(N-1)$ complex additions. Thus, the computational complexity is $O(N^2)$.

**Question 2:**
Write down the steps to construct a 4-point DFT matrix ($W_4$) manually.

**Answer:**
1.  Define $N = 4$.
2.  Define the twiddle factor $W_N = e^{-j \frac{2\pi}{N}} = e^{-j \frac{2\pi}{4}} = e^{-j \frac{\pi}{2}} = -j$.
3.  The elements of the DFT matrix $W_4$ are $(W_4)_{kn} = W_N^{kn}$ for $k, n = 0, 1, 2, 3$.
4.  Calculate the powers of $W_4$:
    *   $W_4^0 = (-j)^0 = 1$
    *   $W_4^1 = (-j)^1 = -j$
    *   $W_4^2 = (-j)^2 = j^2 = -1$
    *   $W_4^3 = (-j)^3 = -j^3 = -(-j) = j$
    *   $W_4^4 = (-j)^4 = j^4 = 1$
    *   $W_4^6 = (-j)^6 = j^6 = j^4 \cdot j^2 = 1 \cdot (-1) = -1$
    *   $W_4^9 = (-j)^9 = (-j)^8 \cdot (-j)^1 = 1 \cdot (-j) = -j$
5.  Construct the matrix using these values:
    $$W_4 = \begin{bmatrix}
    W_4^0 & W_4^0 & W_4^0 & W_4^0 \\
    W_4^0 & W_4^1 & W_4^2 & W_4^3 \\
    W_4^0 & W_4^2 & W_4^4 & W_4^6 \\
    W_4^0 & W_4^3 & W_4^6 & W_4^9
    \end{bmatrix} = \begin{bmatrix}
    1 & 1 & 1 & 1 \\
    1 & -j & -1 & j \\
    1 & -1 & 1 & -1 \\
    1 & j & -1 & -j
    \end{bmatrix}$$

**Question 3:**
If you are asked to compute the DFT of a 2048-point random sequence using matrix multiplication, would you expect it to be computationally feasible in real-time on a standard desktop computer? Justify your answer.

**Answer:**
No, it would not be computationally feasible in real-time. A 2048-point DFT using matrix multiplication has a complexity of $O(N^2) = O(2048^2) = O(4,194,304)$. This involves millions of complex multiplications and additions, which would take a significant amount of time, far exceeding typical real-time constraints (often in the order of milliseconds). The FFT algorithm, with its $O(N \log N)$ complexity ($2048 \log_2 2048 = 2048 \times 11 = 22,528$), is what makes DFT computations practical for such large sequences.

**Question 4:**
Consider a real-valued random sequence $x[n]$. What can you say about the relationship between $X[k]$ and $X[N-k]$? (Hint: This relates to a property of the DFT for real signals).

**Answer:**
For a real-valued input sequence $x[n]$, the DFT $X[k]$ exhibits conjugate symmetry: $X[N-k] = X^*[k]$. This means the magnitude response is symmetric ($|X[N-k]| = |X[k]|$) and the phase response is anti-symmetric ($\angle X[N-k] = -\angle X[k]$). This property arises because the Fourier transform of a real signal is conjugate-symmetric.

### 10. Important Points to Remember

*   The DFT transforms a time-domain sequence into its frequency-domain representation.
*   The DFT can be computed using matrix multiplication, where the DFT matrix elements are complex exponentials.
*   The direct matrix multiplication approach has an $O(N^2)$ complexity, which becomes prohibitive for large $N$.
*   The Fast Fourier Transform (FFT) is a highly efficient algorithm for computing the DFT with $O(N \log N)$ complexity.
*   When using numerical software, compare your DFT matrix computation results with built-in FFT functions to verify correctness and observe computational efficiency differences.
*   Understanding the DFT computation is a fundamental prerequisite for verifying DFT properties and implementing DSP algorithms like filtering and system analysis in the frequency domain.

This comprehensive set of notes should provide a strong foundation for understanding and completing the lab task of computing DFTs using matrices for sequences of varying lengths.