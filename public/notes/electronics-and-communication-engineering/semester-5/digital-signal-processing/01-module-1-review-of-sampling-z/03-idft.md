---
title: "IDFT"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 1: Review of sampling, Z"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe988"
status: "completed"
scrapedAt: "2026-05-23T17:55:26.571Z"
---
# DIGITAL SIGNAL PROCESSING - Module 1: Review of Sampling, Z-Transform and DFT

## Topic: Inverse Discrete Fourier Transform (IDFT)

### 1. Introduction to IDFT

The Discrete Fourier Transform (DFT) converts a finite-length discrete-time signal from the time domain to the frequency domain, revealing its frequency components. The Inverse Discrete Fourier Transform (IDFT) is the complementary operation that reconstructs the original discrete-time signal from its frequency-domain representation.

**Key Concept:** The IDFT is the inverse operation of the DFT. If $X[k]$ is the DFT of a finite-length sequence $x[n]$, then the IDFT of $X[k]$ will recover $x[n]$.

### 2. The IDFT Formula

For a finite-length sequence $X[k]$ of length $N$, representing the DFT of a sequence $x[n]$, the IDFT is given by:

$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j 2\pi nk / N}$, for $n = 0, 1, 2, \dots, N-1$

**Breakdown of the Formula:**

*   **$x[n]$:** The time-domain sequence being reconstructed.
*   **$N$:** The length of the DFT sequence $X[k]$ and the reconstructed sequence $x[n]$. This is a crucial parameter for both DFT and IDFT.
*   **$X[k]$:** The frequency-domain sequence (the DFT coefficients).
*   **$k$:** The frequency index, ranging from $0$ to $N-1$.
*   **$n$:** The time index, ranging from $0$ to $N-1$.
*   **$e^{j 2\pi nk / N}$:** This is the "analysis" or "synthesis" exponential term. The positive sign in the exponent is what distinguishes the IDFT from the DFT (which has a negative sign).
*   **$\frac{1}{N}$:** The scaling factor. This normalization is essential to ensure that the IDFT correctly reconstructs the original signal. Some definitions might include this scaling factor within the summation, but this is the standard definition.

**Important Note:** The IDFT is defined for sequences of finite length $N$.

### 3. Relationship between DFT and IDFT

The DFT and IDFT form a pair. If $x[n]$ is a finite-length sequence and $X[k]$ is its DFT, then the IDFT of $X[k]$ will yield $x[n]$.

**Mathematical Proof of the Inverse Relationship:**

Let's assume $X[k]$ is the DFT of $x[n]$:
$X[k] = \sum_{m=0}^{N-1} x[m] e^{-j 2\pi mk / N}$

Now, let's compute the IDFT of $X[k]$:
$IDFT\{X[k]\} = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j 2\pi nk / N}$

Substitute the expression for $X[k]$ into the IDFT formula:
$IDFT\{X[k]\} = \frac{1}{N} \sum_{k=0}^{N-1} \left( \sum_{m=0}^{N-1} x[m] e^{-j 2\pi mk / N} \right) e^{j 2\pi nk / N}$

Rearrange the summations and constants:
$IDFT\{X[k]\} = \frac{1}{N} \sum_{m=0}^{N-1} x[m] \sum_{k=0}^{N-1} e^{-j 2\pi mk / N} e^{j 2\pi nk / N}$
$IDFT\{X[k]\} = \frac{1}{N} \sum_{m=0}^{N-1} x[m] \sum_{k=0}^{N-1} e^{j 2\pi (n-m) k / N}$

Now, consider the inner summation: $\sum_{k=0}^{N-1} e^{j 2\pi (n-m) k / N}$.
This is a geometric series. Let $\alpha = e^{j 2\pi (n-m) / N}$. The sum is $\sum_{k=0}^{N-1} \alpha^k$.

*   **Case 1: $n-m$ is a multiple of $N$.**
    If $n-m = qN$ for some integer $q$, then $e^{j 2\pi (n-m) / N} = e^{j 2\pi q} = 1$.
    In this case, $\alpha = 1$. The sum becomes $\sum_{k=0}^{N-1} 1^k = \sum_{k=0}^{N-1} 1 = N$.
    This happens when $n = m$ (since $0 \le n, m \le N-1$).

*   **Case 2: $n-m$ is NOT a multiple of $N$.**
    If $n-m$ is not a multiple of $N$, then $\alpha \neq 1$. The sum of the geometric series is:
    $\sum_{k=0}^{N-1} \alpha^k = \frac{1 - \alpha^N}{1 - \alpha}$
    Substitute $\alpha = e^{j 2\pi (n-m) / N}$:
    $\alpha^N = (e^{j 2\pi (n-m) / N})^N = e^{j 2\pi (n-m)} = 1$
    So, the sum becomes $\frac{1 - 1}{1 - \alpha} = 0$.

Combining these cases, the inner summation $\sum_{k=0}^{N-1} e^{j 2\pi (n-m) k / N}$ is equal to $N$ if $n=m$ and $0$ if $n \neq m$. This is known as the **orthogonality property of complex exponentials**.

Now, substitute this back into the IDFT expression:
$IDFT\{X[k]\} = \frac{1}{N} \sum_{m=0}^{N-1} x[m] \cdot (N \cdot \delta[n-m])$
where $\delta[n-m]$ is the Kronecker delta function (1 if $n=m$, 0 otherwise).

$IDFT\{X[k]\} = \frac{1}{N} \cdot N \cdot x[n]$
$IDFT\{X[k]\} = x[n]$

This confirms that the IDFT operation correctly recovers the original time-domain signal.

### 4. Example of IDFT Calculation

Let's find the IDFT of the sequence $X[k] = \{4, 0, -2, 0\}$ for $N=4$.

**Step 1: Identify $N$, $k$, and $X[k]$.**
$N = 4$
$k = 0, 1, 2, 3$
$X[0] = 4$
$X[1] = 0$
$X[2] = -2$
$X[3] = 0$

**Step 2: Apply the IDFT formula.**
$x[n] = \frac{1}{4} \sum_{k=0}^{3} X[k] e^{j 2\pi nk / 4}$, for $n = 0, 1, 2, 3$.

Let's calculate $x[n]$ for each value of $n$:

*   **For $n=0$:**
    $x[0] = \frac{1}{4} \sum_{k=0}^{3} X[k] e^{j 2\pi (0) k / 4} = \frac{1}{4} \sum_{k=0}^{3} X[k] e^{0} = \frac{1}{4} \sum_{k=0}^{3} X[k]$
    $x[0] = \frac{1}{4} (X[0] + X[1] + X[2] + X[3]) = \frac{1}{4} (4 + 0 + (-2) + 0) = \frac{1}{4} (2) = 0.5$

*   **For $n=1$:**
    $x[1] = \frac{1}{4} \sum_{k=0}^{3} X[k] e^{j 2\pi (1) k / 4} = \frac{1}{4} \sum_{k=0}^{3} X[k] e^{j \pi k / 2}$
    $x[1] = \frac{1}{4} [X[0]e^{j0} + X[1]e^{j\pi/2} + X[2]e^{j\pi} + X[3]e^{j3\pi/2}]$
    $x[1] = \frac{1}{4} [4(1) + 0(j) + (-2)(-1) + 0(-j)]$
    $x[1] = \frac{1}{4} [4 + 0 + 2 + 0] = \frac{1}{4} (6) = 1.5$

*   **For $n=2$:**
    $x[2] = \frac{1}{4} \sum_{k=0}^{3} X[k] e^{j 2\pi (2) k / 4} = \frac{1}{4} \sum_{k=0}^{3} X[k] e^{j \pi k}$
    $x[2] = \frac{1}{4} [X[0]e^{j0} + X[1]e^{j\pi} + X[2]e^{j2\pi} + X[3]e^{j3\pi}]$
    $x[2] = \frac{1}{4} [4(1) + 0(-1) + (-2)(1) + 0(-1)]$
    $x[2] = \frac{1}{4} [4 + 0 - 2 + 0] = \frac{1}{4} (2) = 0.5$

*   **For $n=3$:**
    $x[3] = \frac{1}{4} \sum_{k=0}^{3} X[k] e^{j 2\pi (3) k / 4} = \frac{1}{4} \sum_{k=0}^{3} X[k] e^{j 3\pi k / 2}$
    $x[3] = \frac{1}{4} [X[0]e^{j0} + X[1]e^{j3\pi/2} + X[2]e^{j3\pi} + X[3]e^{j9\pi/2}]$
    $x[3] = \frac{1}{4} [4(1) + 0(-j) + (-2)(-1) + 0(j)]$
    $x[3] = \frac{1}{4} [4 + 0 + 2 + 0] = \frac{1}{4} (6) = 1.5$

So, the reconstructed time-domain sequence is $x[n] = \{0.5, 1.5, 0.5, 1.5\}$.

**Verification (Optional - Perform DFT of x[n]):**
Let's compute the DFT of $x[n] = \{0.5, 1.5, 0.5, 1.5\}$ to see if we get $X[k] = \{4, 0, -2, 0\}$.
$X[k] = \sum_{n=0}^{3} x[n] e^{-j 2\pi nk / 4}$

*   $X[0] = 0.5 + 1.5 + 0.5 + 1.5 = 4$ (Correct)

*   $X[1] = 0.5 e^{0} + 1.5 e^{-j\pi/2} + 0.5 e^{-j\pi} + 1.5 e^{-j3\pi/2}$
    $X[1] = 0.5(1) + 1.5(-j) + 0.5(-1) + 1.5(j)$
    $X[1] = 0.5 - 1.5j - 0.5 + 1.5j = 0$ (Correct)

*   $X[2] = 0.5 e^{0} + 1.5 e^{-j\pi} + 0.5 e^{-j2\pi} + 1.5 e^{-j3\pi}$
    $X[2] = 0.5(1) + 1.5(-1) + 0.5(1) + 1.5(-1)$
    $X[2] = 0.5 - 1.5 + 0.5 - 1.5 = -2$ (Correct)

*   $X[3] = 0.5 e^{0} + 1.5 e^{-j3\pi/2} + 0.5 e^{-j3\pi} + 1.5 e^{-j9\pi/2}$
    $X[3] = 0.5(1) + 1.5(j) + 0.5(-1) + 1.5(-j)$
    $X[3] = 0.5 + 1.5j - 0.5 - 1.5j = 0$ (Correct)

The verification matches.

### 5. Connection to Sampling and Z-Transform (Module 1 Context)

**Sampling Theorem and Aliasing:**
The DFT/IDFT operates on discrete-time signals. When a continuous-time signal $x_c(t)$ is sampled at a rate $F_s$, we obtain a discrete-time signal $x[n] = x_c(nT)$, where $T = 1/F_s$. The Nyquist-Shannon sampling theorem states that to perfectly reconstruct $x_c(t)$ from $x[n]$, the sampling frequency $F_s$ must be at least twice the highest frequency component in $x_c(t)$ (i.e., $F_s \ge 2F_{max}$).

If the sampling rate is too low, aliasing occurs, where higher frequencies in $x_c(t)$ masquerade as lower frequencies in $x[n]$. The DFT/IDFT operates on the sampled discrete-time signal, and the frequency components it reveals are relative to the sampling frequency $F_s$. The frequency variable $k$ in $X[k]$ corresponds to frequencies $f = k \frac{F_s}{N}$.

**Z-Transform:**
The Z-transform is a powerful tool for analyzing discrete-time signals and systems. The DFT can be viewed as the evaluation of the Z-transform of a finite-length sequence on the unit circle in the z-plane at specific points.

Let $x[n]$ be a sequence. Its Z-transform is $X(z) = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$.
For a finite-length sequence $x[n]$ of length $N$ (from $n=0$ to $N-1$), the Z-transform is $X(z) = \sum_{n=0}^{N-1} x[n] z^{-n}$.

The DFT of $x[n]$ is given by:
$X[k] = X(z) \Big|_{z = e^{j 2\pi k / N}} = \sum_{n=0}^{N-1} x[n] (e^{j 2\pi k / N})^{-n} = \sum_{n=0}^{N-1} x[n] e^{-j 2\pi nk / N}$

The IDFT is the process of recovering $x[n]$ from its Z-transform evaluated at $N$ points on the unit circle. The IDFT formula essentially performs an inverse Z-transform restricted to these $N$ points.

**Relevance to Module 1:** Understanding the IDFT reinforces the idea that frequency-domain representations (like the DFT) are invertible, allowing for signal reconstruction. This is fundamental for applications like digital filtering, where signals are transformed to the frequency domain, modified, and then transformed back. It also highlights how the DFT is a special case of the Z-transform applied to samples on the unit circle.

### 6. Learning Outcome Alignment

*   **LO1: Understand the IDFT formula and its relationship to the DFT.** (Covered in sections 2 & 3)
*   **LO2: Calculate the IDFT of a given frequency-domain sequence.** (Demonstrated in section 4)
*   **LO3: Relate the IDFT to the concepts of sampling and the Z-transform.** (Discussed in section 5)

### 7. Practice Questions

**Question 1:**
Find the IDFT of the sequence $X[k] = \{2, 0, 2, 0\}$ for $N=4$.
(Corresponds to CO1, CO2)

**Question 2:**
If $x[n] = \{1, 2, 1, 2\}$ for $N=4$, find its DFT, $X[k]$. Then, compute the IDFT of $X[k]$ to verify the process.
(Corresponds to CO1, CO2)

**Question 3:**
Explain how the IDFT can be viewed as an inverse operation on the Z-transform evaluated at specific points on the unit circle.
(Corresponds to CO1, CO3)

### 8. Answers to Practice Questions

**Answer to Question 1:**
$N = 4$, $X[k] = \{2, 0, 2, 0\}$
$x[n] = \frac{1}{4} \sum_{k=0}^{3} X[k] e^{j 2\pi nk / 4}$

*   $x[0] = \frac{1}{4}(2 + 0 + 2 + 0) = \frac{4}{4} = 1$
*   $x[1] = \frac{1}{4}(2e^{j0} + 0e^{j\pi/2} + 2e^{j\pi} + 0e^{j3\pi/2}) = \frac{1}{4}(2(1) + 0 + 2(-1) + 0) = \frac{1}{4}(2-2) = 0$
*   $x[2] = \frac{1}{4}(2e^{j0} + 0e^{j\pi} + 2e^{j2\pi} + 0e^{j3\pi}) = \frac{1}{4}(2(1) + 0 + 2(1) + 0) = \frac{1}{4}(4) = 1$
*   $x[3] = \frac{1}{4}(2e^{j0} + 0e^{j3\pi/2} + 2e^{j3\pi} + 0e^{j9\pi/2}) = \frac{1}{4}(2(1) + 0 + 2(-1) + 0) = \frac{1}{4}(2-2) = 0$

So, $x[n] = \{1, 0, 1, 0\}$.

**Answer to Question 2:**
First, find the DFT of $x[n] = \{1, 2, 1, 2\}$ for $N=4$.
$X[k] = \sum_{n=0}^{3} x[n] e^{-j 2\pi nk / 4}$

*   $X[0] = 1 + 2 + 1 + 2 = 6$
*   $X[1] = 1e^0 + 2e^{-j\pi/2} + 1e^{-j\pi} + 2e^{-j3\pi/2} = 1 + 2(-j) + 1(-1) + 2(j) = 1 - 2j - 1 + 2j = 0$
*   $X[2] = 1e^0 + 2e^{-j\pi} + 1e^{-j2\pi} + 2e^{-j3\pi} = 1 + 2(-1) + 1(1) + 2(-1) = 1 - 2 + 1 - 2 = -2$
*   $X[3] = 1e^0 + 2e^{-j3\pi/2} + 1e^{-j3\pi} + 2e^{-j9\pi/2} = 1 + 2(j) + 1(-1) + 2(-j) = 1 + 2j - 1 - 2j = 0$

So, $X[k] = \{6, 0, -2, 0\}$.

Now, compute the IDFT of $X[k] = \{6, 0, -2, 0\}$ for $N=4$.
$x[n] = \frac{1}{4} \sum_{k=0}^{3} X[k] e^{j 2\pi nk / 4}$

*   $x[0] = \frac{1}{4}(6 + 0 + (-2) + 0) = \frac{4}{4} = 1$
*   $x[1] = \frac{1}{4}(6e^{j0} + 0e^{j\pi/2} + (-2)e^{j\pi} + 0e^{j3\pi/2}) = \frac{1}{4}(6(1) + 0 + (-2)(-1) + 0) = \frac{1}{4}(6+2) = \frac{8}{4} = 2$
*   $x[2] = \frac{1}{4}(6e^{j0} + 0e^{j\pi} + (-2)e^{j2\pi} + 0e^{j3\pi}) = \frac{1}{4}(6(1) + 0 + (-2)(1) + 0) = \frac{1}{4}(6-2) = \frac{4}{4} = 1$
*   $x[3] = \frac{1}{4}(6e^{j0} + 0e^{j3\pi/2} + (-2)e^{j3\pi} + 0e^{j9\pi/2}) = \frac{1}{4}(6(1) + 0 + (-2)(-1) + 0) = \frac{1}{4}(6+2) = \frac{8}{4} = 2$

The reconstructed $x[n] = \{1, 2, 1, 2\}$, which matches the original signal.

**Answer to Question 3:**
The Z-transform of a finite-length sequence $x[n]$ of length $N$ (from $n=0$ to $N-1$) is $X(z) = \sum_{n=0}^{N-1} x[n] z^{-n}$.
The DFT of $x[n]$ is obtained by evaluating $X(z)$ at $N$ equally spaced points on the unit circle: $z_k = e^{j 2\pi k / N}$ for $k = 0, 1, \dots, N-1$.
$X[k] = X(z)\Big|_{z=e^{j 2\pi k/N}} = \sum_{n=0}^{N-1} x[n] (e^{j 2\pi k / N})^{-n} = \sum_{n=0}^{N-1} x[n] e^{-j 2\pi nk / N}$.

The IDFT is the process of recovering $x[n]$ from these $N$ samples of $X(z)$ on the unit circle. The formula for the IDFT is effectively an inverse Z-transform applied only to these sampled values, yielding the original sequence. It reconstructs the unique finite-length sequence that would produce those $N$ frequency components when transformed via the DFT.

### 9. Important Points to Remember

*   The IDFT formula has a **positive sign** in the exponent of the complex exponential, unlike the DFT.
*   The IDFT requires a **scaling factor of $1/N$**, where $N$ is the length of the sequence.
*   The IDFT is the **inverse operation** of the DFT, allowing for reconstruction of the time-domain signal from its frequency-domain representation.
*   The IDFT operates on $N$ frequency-domain samples $X[k]$ to produce $N$ time-domain samples $x[n]$.
*   The concepts of sampling and the Z-transform are closely related to the DFT/IDFT, with the DFT being a specific evaluation of the Z-transform on the unit circle.

---

**Textbook References for Further Study:**

*   **Digital Signal Processing using Matlab by Ingle & Proakis:** Chapter on DFT/IDFT and their properties.
*   **Think DSP: Digital Signal Processing using Python by Downey:** Concepts related to frequency representation and signal reconstruction.
*   **Discrete-Time Signal Processing by Oppenheim & Schafer:** Thorough coverage of the DFT/IDFT pair and their mathematical properties.

These notes provide a foundation for understanding the IDFT, which is crucial for various DSP applications including filtering and spectral analysis as covered in later modules and aligned with CO1 and CO2.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
