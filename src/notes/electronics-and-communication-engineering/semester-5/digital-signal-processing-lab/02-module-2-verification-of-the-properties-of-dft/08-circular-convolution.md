---
title: "Circular Convolution."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 2: Verification of the Properties of DFT"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec35"
status: "completed"
scrapedAt: "2026-05-23T17:55:56.190Z"
---
# DIGITAL SIGNAL PROCESSING LAB: Module 2 - Verification of the Properties of DFT

## Topic: Circular Convolution

---

### 1. Introduction to Circular Convolution

Circular convolution is a fundamental operation in Digital Signal Processing (DSP), particularly relevant to the Discrete Fourier Transform (DFT). It's the equivalent of linear convolution in the time domain, but performed in a circular manner, which is naturally suited for systems with finite impulse response (FIR) filters implemented using the DFT. This operation is crucial for understanding how signals interact within a finite-length system and for efficient implementation of convolution using the Fast Fourier Transform (FFT) algorithm.

**Why Circular Convolution?**

*   **DFT Basis:** The DFT operates on finite-length sequences. When we multiply two finite-length sequences in the frequency domain (which corresponds to convolution in the time domain), the resulting convolution is inherently circular.
*   **Efficient Implementation:** Circular convolution can be efficiently computed using the FFT, making it a cornerstone for real-time signal processing applications.

---

### 2. Definition of Circular Convolution

Given two discrete-time sequences, $x[n]$ of length $N$ and $h[n]$ of length $M$, their circular convolution, denoted by $x[n] \circledast h[n]$, is defined for a specific length $L$. For the DFT to be directly applicable, we typically consider sequences of the same length $N$. If the lengths are different, we zero-pad the shorter sequence to match the length of the longer sequence, or pad both to a length $L$ that is at least $N+M-1$ for linear convolution to be recovered. For DFT properties verification, we usually consider sequences of the same length $N$.

The circular convolution of $x[n]$ and $h[n]$, both of length $N$, is given by:

$y[n] = x[n] \circledast h[n] = \sum_{k=0}^{N-1} x[k] h[(n-k)_N]$

where $(n-k)_N$ denotes the modulo $N$ operation, meaning the index is taken modulo $N$. Specifically:

$(n-k)_N = (n-k) \mod N$

This modulo operation ensures that the indices of $h$ wrap around, creating the "circular" nature of the convolution.

**Key Concepts:**

*   **Modulo Arithmetic:** Essential for understanding the circular indexing.
*   **Folding and Shifting:** Similar to linear convolution, but the shifted sequence is folded back onto itself due to the modulo operation.

---

### 3. Relationship between Linear and Circular Convolution

Circular convolution is closely related to linear convolution. For two sequences $x[n]$ and $h[n]$ of lengths $N_x$ and $N_h$ respectively, their linear convolution $y_{lin}[n]$ has a length of $N_x + N_h - 1$.

If we compute the circular convolution of $x[n]$ and $h[n]$ with a length $N$, where $N \ge N_x + N_h - 1$, the result of the circular convolution will be identical to the linear convolution, provided that the sequences are zero-padded to length $N$.

**Example:**

Let $x[n] = \{1, 2, 3\}$ (length $N_x = 3$) and $h[n] = \{4, 5\}$ (length $N_h = 2$).

**Linear Convolution:**
$y_{lin}[n] = x[n] * h[n] = \sum_{k=0}^{N_x-1} x[k] h[n-k]$
Length of $y_{lin}[n] = N_x + N_h - 1 = 3 + 2 - 1 = 4$.

$y_{lin}[0] = x[0]h[0] = 1 \times 4 = 4$
$y_{lin}[1] = x[0]h[1] + x[1]h[0] = (1 \times 5) + (2 \times 4) = 5 + 8 = 13$
$y_{lin}[2] = x[1]h[1] + x[2]h[0] = (2 \times 5) + (3 \times 4) = 10 + 12 = 22$
$y_{lin}[3] = x[2]h[1] = 3 \times 5 = 15$
So, $y_{lin}[n] = \{4, 13, 22, 15\}$.

**Circular Convolution (Length N=3):**
$x[n] = \{1, 2, 3\}$, $h[n] = \{4, 5, 0\}$ (zero-padded to length 3).
$y[n] = x[n] \circledast h[n] = \sum_{k=0}^{2} x[k] h[(n-k)_3]$

$y[0] = x[0]h[0] + x[1]h[-1]_3 + x[2]h[-2]_3 = x[0]h[0] + x[1]h[2] + x[2]h[1]$
$y[0] = (1 \times 4) + (2 \times 0) + (3 \times 5) = 4 + 0 + 15 = 19$

$y[1] = x[0]h[1] + x[1]h[0] + x[2]h[-1]_3 = x[0]h[1] + x[1]h[0] + x[2]h[2]$
$y[1] = (1 \times 5) + (2 \times 4) + (3 \times 0) = 5 + 8 + 0 = 13$

$y[2] = x[0]h[2] + x[1]h[1] + x[2]h[0] = x[0]h[2] + x[1]h[1] + x[2]h[0]$
$y[2] = (1 \times 0) + (2 \times 5) + (3 \times 4) = 0 + 10 + 12 = 22$

So, $y[n] = \{19, 13, 22\}$. Notice this is different from linear convolution.

**Circular Convolution (Length N=4):**
$x[n] = \{1, 2, 3, 0\}$, $h[n] = \{4, 5, 0, 0\}$ (zero-padded to length 4).
$y[n] = x[n] \circledast h[n] = \sum_{k=0}^{3} x[k] h[(n-k)_4]$

$y[0] = x[0]h[0] + x[1]h[3] + x[2]h[2] + x[3]h[1] = (1 \times 4) + (2 \times 0) + (3 \times 0) + (0 \times 5) = 4$
$y[1] = x[0]h[1] + x[1]h[0] + x[2]h[3] + x[3]h[2] = (1 \times 5) + (2 \times 4) + (3 \times 0) + (0 \times 0) = 5 + 8 = 13$
$y[2] = x[0]h[2] + x[1]h[1] + x[2]h[0] + x[3]h[3] = (1 \times 0) + (2 \times 5) + (3 \times 4) + (0 \times 0) = 10 + 12 = 22$
$y[3] = x[0]h[3] + x[1]h[2] + x[2]h[1] + x[3]h[0] = (1 \times 0) + (2 \times 0) + (3 \times 5) + (0 \times 4) = 15$

So, $y[n] = \{4, 13, 22, 15\}$. This matches the linear convolution.

**Insight:** To obtain the linear convolution of two sequences using circular convolution, the length $N$ of the circular convolution must be at least $N_x + N_h - 1$. The sequences should also be zero-padded to this length $N$.

---

### 4. Properties of Circular Convolution

Circular convolution shares many properties with linear convolution, which are crucial for its application in DSP.

#### 4.1 Commutative Property

$x[n] \circledast h[n] = h[n] \circledast x[n]$

**Explanation:** The order of the sequences being convolved does not affect the result. This is due to the symmetric nature of the summation and modulo operation.

#### 4.2 Associative Property

$(x[n] \circledast h_1[n]) \circledast h_2[n] = x[n] \circledast (h_1[n] \circledast h_2[n])$

**Explanation:** The convolution of multiple sequences can be grouped in any way. This property is fundamental in cascading systems. If $y[n] = x[n] \circledast h_1[n]$ and $z[n] = y[n] \circledast h_2[n]$, then $z[n]$ can also be obtained by first convolving $h_1[n]$ and $h_2[n]$ circularly, and then convolving $x[n]$ with that result.

#### 4.3 Distributive Property

$x[n] \circledast (h_1[n] + h_2[n]) = (x[n] \circledast h_1[n]) + (x[n] \circledast h_2[n])$

**Explanation:** Convolution distributes over addition. This property is useful for representing complex systems as a sum of simpler systems.

#### 4.4 Convolution Theorem (DFT Domain)

This is the most important property linking convolution and DFT. The circular convolution of two finite-length sequences in the time domain is equivalent to the element-wise multiplication of their Discrete Fourier Transforms (DFTs) in the frequency domain.

Let $X[k] = DFT\{x[n]\}$ and $H[k] = DFT\{h[n]\}$. Then:

$DFT\{x[n] \circledast h[n]\} = X[k] \cdot H[k]$ (where $\cdot$ denotes element-wise multiplication)

**Proof Sketch (for sequences of length N):**
$DFT\{x[n] \circledast h[n]\} = \sum_{n=0}^{N-1} (x[n] \circledast h[n]) e^{-j 2\pi nk/N}$
$= \sum_{n=0}^{N-1} \left( \sum_{m=0}^{N-1} x[m] h[(n-m)_N] \right) e^{-j 2\pi nk/N}$
Change of summation order and let $p = (n-m)_N$, so $n = (p+m)_N$.
$= \sum_{m=0}^{N-1} x[m] \sum_{p=0}^{N-1} h[p] e^{-j 2\pi (p+m)k/N}$
$= \sum_{m=0}^{N-1} x[m] e^{-j 2\pi mk/N} \sum_{p=0}^{N-1} h[p] e^{-j 2\pi pk/N}$
$= X[k] \cdot H[k]$

**Implication:** This theorem allows us to perform convolution efficiently by transforming the sequences to the frequency domain (using FFT), multiplying them element-wise, and then transforming back to the time domain (using IFFT).

---

### 5. Circular Convolution in Practice (Verification in Lab)

The lab exercises in this module will likely involve verifying these properties. This typically involves:

*   **Calculating Circular Convolution Directly:** Using the definition formula (as shown in the example above).
*   **Calculating Linear Convolution:** To compare with circular convolution results when appropriate zero-padding is applied.
*   **Calculating DFTs of the sequences.**
*   **Performing Element-wise Multiplication of DFTs.**
*   **Calculating the Inverse DFT (IDFT) of the product.**
*   **Comparing the results of direct circular convolution with the IDFT of the product of DFTs.**

**Common Tools:**

*   **MATLAB:** Functions like `conv` (for linear convolution), `cconv` (for circular convolution), `fft`, `ifft` are extensively used. (Refer to Ingle & Proakis)
*   **Python (NumPy/SciPy):** Functions like `numpy.convolve`, `numpy.fft.fft`, `numpy.fft.ifft`, `scipy.signal.convolve` with `method='fft'` for efficient linear convolution, and `scipy.linalg.circulant` or manual implementation for circular convolution. (Refer to Downey)
*   **C with TMS320C6x DSK:** Requires understanding the underlying algorithms and implementing them on the DSP hardware. (Refer to Chassaing)

**Example Lab Task:** Verify the Convolution Theorem for two given sequences.

**Steps:**

1.  **Define Sequences:** Let $x[n] = \{1, 2, 3\}$ and $h[n] = \{4, 5\}$.
2.  **Choose Length:** Let's choose $N=4$ for circular convolution to ensure we can compare with linear convolution.
3.  **Pad Sequences:**
    $x_{pad}[n] = \{1, 2, 3, 0\}$
    $h_{pad}[n] = \{4, 5, 0, 0\}$
4.  **Calculate Direct Circular Convolution:** $y_{circ}[n] = x_{pad}[n] \circledast h_{pad}[n]$. (As calculated before, $y_{circ}[n] = \{4, 13, 22, 15\}$).
5.  **Calculate DFTs:**
    $X[k] = DFT\{x_{pad}[n]\}$
    $H[k] = DFT\{h_{pad}[n]\}$
6.  **Element-wise Product in Frequency Domain:**
    $Y_{freq}[k] = X[k] \cdot H[k]$
7.  **Calculate IDFT of Product:**
    $y_{freq\_conv}[n] = IDFT\{Y_{freq}[k]\}$
8.  **Compare:** Check if $y_{circ}[n] \approx y_{freq\_conv}[n]$.

---

### 6. Learning Outcomes Alignment

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2)**
    *   While not directly generating waveforms, understanding sequences like impulses, steps, and exponentials is foundational for defining $x[n]$ and $h[n]$ for convolution.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2)**
    *   This topic is central to this CO, specifically verifying the convolution theorem via circular convolution. The associative and distributive properties can also be verified by comparing DFT and time-domain operations.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2)**
    *   Implementing convolution algorithms (especially using FFT) on hardware (like TMS320C6x) requires understanding how circular convolution is computed efficiently.
*   **CO4: Implement LTI systems (Knowledge Level: K3)**
    *   Convolution is the fundamental operation for LTI systems. Circular convolution is the method used when implementing FIR filters using the DFT, which are LTI systems.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3)**
    *   The impulse response of an FIR filter is $h[n]$. When applying this filter to an input signal $x[n]$ using the DFT-based approach, circular convolution is the underlying operation.

---

### 7. Important Points to Remember

*   **Length Matters:** To recover linear convolution, the circular convolution length $N$ must be $\ge N_x + N_h - 1$.
*   **Zero-Padding:** Crucial for both aligning lengths and ensuring the recovery of linear convolution.
*   **DFT-Convolution Theorem:** The core principle: Convolution in time domain = Multiplication in frequency domain.
*   **FFT/IFFT Efficiency:** The power of using DFT for convolution lies in the speed of FFT and IFFT algorithms.
*   **Modulo Arithmetic:** The definition of circular convolution relies heavily on modulo indexing.
*   **Applications:** Real-time filtering, spectral analysis, and system analysis.

---

### 8. Practice Questions and Answers

**Q1:** What is the length of the linear convolution of $x[n] = \{1, 2, 3, 4\}$ and $h[n] = \{5, 6\}$? What minimum length $N$ should be chosen for their circular convolution to yield the same result?

**Answer:**
*   Length of $x[n]$ ($N_x$) = 4.
*   Length of $h[n]$ ($N_h$) = 2.
*   Length of linear convolution = $N_x + N_h - 1 = 4 + 2 - 1 = 5$.
*   Minimum length $N$ for circular convolution to match linear convolution = 5.

**Q2:** Let $x[n] = \{1, 0, 1\}$ and $h[n] = \{2, 1\}$. Compute the circular convolution $y[n] = x[n] \circledast h[n]$ for $N=3$.

**Answer:**
Pad $h[n]$ to length 3: $h_{pad}[n] = \{2, 1, 0\}$.
$x[n] = \{1, 0, 1\}$

$y[0] = x[0]h[0] + x[1]h[2] + x[2]h[1] = (1 \times 2) + (0 \times 0) + (1 \times 1) = 2 + 0 + 1 = 3$
$y[1] = x[0]h[1] + x[1]h[0] + x[2]h[2] = (1 \times 1) + (0 \times 2) + (1 \times 0) = 1 + 0 + 0 = 1$
$y[2] = x[0]h[2] + x[1]h[1] + x[2]h[0] = (1 \times 0) + (0 \times 1) + (1 \times 2) = 0 + 0 + 2 = 2$

So, $y[n] = \{3, 1, 2\}$.

**Q3:** If $X[k]$ and $H[k]$ are the DFTs of $x[n]$ and $h[n]$ respectively, what is the DFT of their circular convolution $y[n] = x[n] \circledast h[n]$?

**Answer:**
$DFT\{x[n] \circledast h[n]\} = X[k] \cdot H[k]$ (element-wise product).

**Q4:** Why is it often more efficient to compute convolution using the FFT than by direct time-domain summation for long sequences?

**Answer:**
Direct time-domain convolution has a complexity of approximately $O(N^2)$, where $N$ is the length of the sequences. The FFT algorithm has a complexity of $O(N \log N)$. For long sequences, $N \log N$ is significantly smaller than $N^2$, making the FFT-based approach much more computationally efficient.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. Textbooks and Reference Book Connections

*   **Ingle & Proakis (Cengage Learning, 3rd Ed., 2011):** This textbook is a primary resource for digital signal processing fundamentals, including detailed explanations of DFT properties, convolution, and their implementation using MATLAB. Expect to find algorithms for circular convolution and FFT applications covered thoroughly.
*   **Downey (Green Tea Press, 1st Ed. 2019):** "Think DSP" focuses on conceptual understanding and practical implementation, often using Python. It will likely provide intuitive explanations of convolution and how the DFT/FFT enables efficient computation, possibly with illustrative Python code.
*   **Chassaing (Wiley & Sons, 2/e. 2008):** This book emphasizes practical DSP implementation using C and specific hardware like the TMS320C6x DSK. It will be invaluable for understanding how circular convolution algorithms are coded and executed on embedded DSP systems.
*   **Oppenheim & Schafer (Pearson Education, 4th Ed., 2018):** A classic and comprehensive reference for discrete-time signal processing. It provides rigorous mathematical treatments of convolution, DFT properties, and their theoretical underpinnings, offering deep insights into the subject matter.

---
This concludes the study notes for Circular Convolution in the context of Module 2: Verification of the Properties of DFT. Remember to practice implementing these concepts in your chosen programming environment or hardware.