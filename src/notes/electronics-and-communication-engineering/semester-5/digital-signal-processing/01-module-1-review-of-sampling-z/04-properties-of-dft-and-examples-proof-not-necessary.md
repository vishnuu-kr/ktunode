---
title: "Properties of DFT and examples (proof not necessary)"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 1: Review of sampling, Z"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe989"
status: "completed"
scrapedAt: "2026-05-23T17:55:27.281Z"
---
# DIGITAL SIGNAL PROCESSING - Module 1: Review of Sampling, Z-Transform and DFT

## Topic: Properties of DFT and Examples (Proof Not Necessary)

### Learning Outcomes Covered:

*   Understand and apply the fundamental properties of the Discrete Fourier Transform (DFT).
*   Relate DFT properties to their implications in signal processing tasks.
*   Solve basic problems involving the DFT.

### Course Outcomes Addressed:

*   **CO1 (K2):** Illustrate fundamental properties and relations relevant to DFT and solve basic problems involving DFT-based filtering methods. (This topic directly contributes to understanding and applying these properties.)

### Key Concepts and Definitions:

The **Discrete Fourier Transform (DFT)** is a mathematical transformation that decomposes a finite sequence of equally-spaced samples of a signal into components of different frequencies. For a finite-length sequence $x[n]$ of length $N$, its $N$-point DFT is given by:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}$, for $k = 0, 1, \dots, N-1$

The **Inverse DFT (IDFT)** reconstructs the original sequence from its DFT:

$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j2\pi kn/N}$, for $n = 0, 1, \dots, N-1$

### Properties of DFT:

Understanding the properties of the DFT is crucial for efficient and effective signal processing. Here are some key properties:

#### 1. Linearity

*   **Description:** If $x_1[n]$ has DFT $X_1[k]$ and $x_2[n]$ has DFT $X_2[k]$, then a linear combination of the sequences, $a x_1[n] + b x_2[n]$, has a DFT which is the same linear combination of their respective DFTs, $a X_1[k] + b X_2[k]$.
*   **Mathematical Representation:**
    $\text{DFT}\{a x_1[n] + b x_2[n]\} = a X_1[k] + b X_2[k]$
*   **Implication:** This property allows us to process signals by breaking them down into simpler components, processing those components, and then combining the results. This is fundamental to many filter designs.
*   **Reference:** Proakis & Ingle (Ch. 7), Oppenheim & Schafer (Ch. 7)

#### 2. Time Shifting (Cyclic Shift)

*   **Description:** Shifting a finite sequence in time by $m$ samples results in its DFT being multiplied by a complex exponential factor $e^{-j2\pi km/N}$. Note that this is a *cyclic* shift due to the finite nature of the DFT.
*   **Mathematical Representation:**
    $\text{DFT}\{x[n-m]\} = e^{-j2\pi km/N} X[k]$
    where $x[n-m]$ is understood to be $x[(n-m) \pmod{N}]$.
*   **Implication:** This property is useful in analyzing the phase response of systems and in implementing certain types of filters.
*   **Reference:** Proakis & Ingle (Ch. 7), Oppenheim & Schafer (Ch. 7)

#### 3. Frequency Shifting (Cyclic Shift)

*   **Description:** Multiplying a sequence $x[n]$ by a complex exponential $e^{j2\pi k_0 n/N}$ results in its DFT being shifted in frequency by $k_0$ samples (cyclically).
*   **Mathematical Representation:**
    $\text{DFT}\{x[n] e^{j2\pi k_0 n/N}\} = X[k-k_0]$ (where $k-k_0$ is modulo $N$)
*   **Implication:** This property is used in modulation techniques and in understanding the effect of multiplying a signal by a complex sinusoid.
*   **Reference:** Proakis & Ingle (Ch. 7), Oppenheim & Schafer (Ch. 7)

#### 4. Convolution Property

*   **Description:** The DFT of the convolution of two sequences is the product of their individual DFTs. This is a cornerstone of filter design.
*   **Mathematical Representation:**
    $\text{DFT}\{x[n] * h[n]\} = X[k] \cdot H[k]$
    where $x[n] * h[n]$ denotes the circular convolution of $x[n]$ and $h[n]$.
*   **Implication:** This property allows us to implement linear convolution in the time domain as multiplication in the frequency domain, which can be computationally more efficient using the Fast Fourier Transform (FFT). This is fundamental to FIR filter implementation.
*   **Reference:** Proakis & Ingle (Ch. 7), Oppenheim & Schafer (Ch. 7), Mitra (Ch. 7)

#### 5. Multiplication Property

*   **Description:** The DFT of the product of two sequences is proportional to the circular convolution of their individual DFTs.
*   **Mathematical Representation:**
    $\text{DFT}\{x[n] \cdot y[n]\} = \frac{1}{N} (X[k] * Y[k])$
    where $X[k] * Y[k]$ denotes the circular convolution of $X[k]$ and $Y[k]$.
*   **Implication:** This property is used in implementing certain types of filters and modulators, particularly when dealing with time-varying systems or windowing.
*   **Reference:** Proakis & Ingle (Ch. 7), Oppenheim & Schafer (Ch. 7)

#### 6. Conjugation Property

*   **Description:** If $x[n]$ has DFT $X[k]$, then the complex conjugate of $x[n]$ has a DFT that is the complex conjugate of $X[k]$, cyclically conjugated.
*   **Mathematical Representation:**
    $\text{DFT}\{x^*[n]\} = X^*[k^*]$ (where $k^*$ is modulo $N$)
*   **Implication:** This property is important for understanding the relationship between the spectrum of a signal and its complex conjugate, particularly for real-valued signals where the spectrum is conjugate symmetric.
*   **Reference:** Proakis & Ingle (Ch. 7), Oppenheim & Schafer (Ch. 7)

#### 7. Conjugate Symmetry

*   **Description:** For a real-valued sequence $x[n]$, its DFT $X[k]$ exhibits conjugate symmetry, meaning $X[k] = X^*[N-k]$ (modulo $N$). This implies that the magnitude spectrum $|X[k]|$ is even, and the phase spectrum $\angle X[k]$ is odd.
*   **Mathematical Representation:**
    If $x[n]$ is real, then $X[N-k] = X^*[k]$.
*   **Implication:** This property is very useful for verifying the correctness of DFT computations for real signals and for understanding the symmetry of frequency-domain representations.
*   **Reference:** Proakis & Ingle (Ch. 7), Oppenheim & Schafer (Ch. 7), Apte (Ch. 7)

#### 8. Parseval's Theorem

*   **Description:** Parseval's theorem relates the energy of a signal in the time domain to the energy of its DFT in the frequency domain.
*   **Mathematical Representation:**
    $\sum_{n=0}^{N-1} |x[n]|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2$
*   **Implication:** This theorem states that the total energy of a signal is conserved between the time and frequency domains. It's useful for calculating signal energy and understanding power distribution across frequencies.
*   **Reference:** Proakis & Ingle (Ch. 7), Oppenheim & Schafer (Ch. 7), Downey (Ch. 7)

#### 9. Symmetry of the DFT

*   **Description:** If $x[n]$ is an even sequence ($x[n] = x[n-N]$), its DFT $X[k]$ is real and even. If $x[n]$ is an odd sequence ($x[n] = -x[n-N]$), its DFT $X[k]$ is purely imaginary and odd.
*   **Mathematical Representation:**
    *   If $x[n] = x[N-n]$ (even), then $X[k]$ is real and $X[k] = X[N-k]$.
    *   If $x[n] = -x[N-n]$ (odd), then $X[k]$ is purely imaginary and $X[k] = -X[N-k]$.
*   **Implication:** These symmetries simplify analysis and computation for signals with known symmetry properties.
*   **Reference:** Oppenheim & Schafer (Ch. 7)

#### 10. Periodicity of the DFT

*   **Description:** Both the sequence $x[n]$ and its DFT $X[k]$ are periodic with period $N$.
*   **Mathematical Representation:**
    *   $x[n] = x[n+N]$
    *   $X[k] = X[k+N]$
*   **Implication:** This periodicity is inherent to the finite-length DFT and defines its cyclic nature. It's why we often talk about circular shifts.
*   **Reference:** Proakis & Ingle (Ch. 7), Oppenheim & Schafer (Ch. 7)

### Examples:

#### Example 1: Linearity

Let $x_1[n] = \{1, 2, 1, 0\}$ and $x_2[n] = \{0, 1, 2, 1\}$. Let $N=4$.
Calculate the DFT of $x_1[n]$ and $x_2[n]$. Then, calculate the DFT of $y[n] = 2x_1[n] + x_2[n]$ directly and by using the linearity property on the DFTs of $x_1[n]$ and $x_2[n]$.

*   **Direct DFT of $x_1[n]$:**
    $X_1[0] = 1+2+1+0 = 4$
    $X_1[1] = 1 - j2 - 1 + j0 = -2j$
    $X_1[2] = 1 - 2 + 1 - 0 = 0$
    $X_1[3] = 1 + j2 - 1 + j0 = 2j$
    So, $X_1[k] = \{4, -2j, 0, 2j\}$

*   **Direct DFT of $x_2[n]$:**
    $X_2[0] = 0+1+2+1 = 4$
    $X_2[1] = 0 - j1 - 2 + j1 = -2$
    $X_2[2] = 0 - 1 + 2 - 1 = 0$
    $X_2[3] = 0 + j1 - 2 - j1 = -2$
    So, $X_2[k] = \{4, -2, 0, -2\}$

*   **Calculate $y[n] = 2x_1[n] + x_2[n]$:**
    $y[n] = 2\{1, 2, 1, 0\} + \{0, 1, 2, 1\} = \{2, 4, 2, 0\} + \{0, 1, 2, 1\} = \{2, 5, 4, 1\}$

*   **DFT of $y[n]$ directly:**
    $Y[0] = 2+5+4+1 = 12$
    $Y[1] = 2 - j5 - 4 + j1 = -2 - 4j$
    $Y[2] = 2 - 5 + 4 - 1 = 0$
    $Y[3] = 2 + j5 - 4 - j1 = -2 + 4j$
    So, $Y[k] = \{12, -2-4j, 0, -2+4j\}$

*   **Using linearity property: $2X_1[k] + X_2[k]$**
    $2\{4, -2j, 0, 2j\} + \{4, -2, 0, -2\} = \{8, -4j, 0, 4j\} + \{4, -2, 0, -2\} = \{12, -2-4j, 0, -2+4j\}$

    **Observation:** The results match, demonstrating the linearity property.

#### Example 2: Time Shifting

Let $x[n] = \{1, 2, 3, 4\}$ with $N=4$.
Let $m=1$. Then $x[n-1]$ is a cyclic shift of $x[n]$ by 1 sample to the right.
$x[n-1] = \{4, 1, 2, 3\}$ (cyclically shifted).

*   **DFT of $x[n]$:**
    $X[0] = 1+2+3+4 = 10$
    $X[1] = 1 - j2 - 3 + j4 = -2 + 2j$
    $X[2] = 1 - 2 + 3 - 4 = -2$
    $X[3] = 1 + j2 - 3 - j4 = -2 - 2j$
    So, $X[k] = \{10, -2+2j, -2, -2-2j\}$

*   **DFT of cyclically shifted $x[n-1]$:**
    Let's call this $X_{shifted}[k]$.
    $X_{shifted}[0] = 4+1+2+3 = 10$
    $X_{shifted}[1] = 4 - j1 - 2 + j3 = 2 + 2j$
    $X_{shifted}[2] = 4 - 1 + 2 - 3 = 2$
    $X_{shifted}[3] = 4 + j1 - 2 - j3 = 2 - 2j$
    So, $X_{shifted}[k] = \{10, 2+2j, 2, 2-2j\}$

*   **Using time shifting property: $e^{-j2\pi k m/N} X[k]$ with $m=1, N=4$**
    For $k=0$: $e^0 X[0] = 1 \cdot 10 = 10$
    For $k=1$: $e^{-j2\pi (1)(1)/4} X[1] = e^{-j\pi/2} (-2+2j) = (-j)(-2+2j) = 2j - 2j^2 = 2j + 2 = 2+2j$
    For $k=2$: $e^{-j2\pi (2)(1)/4} X[2] = e^{-j\pi} (-2) = (-1)(-2) = 2$
    For $k=3$: $e^{-j2\pi (3)(1)/4} X[3] = e^{-j3\pi/2} (-2-2j) = (j)(-2-2j) = -2j - 2j^2 = -2j + 2 = 2-2j$

    **Observation:** The results match the direct DFT of the shifted sequence, confirming the time shifting property.

#### Example 3: Convolution Property

Let $x[n] = \{1, 2\}$ and $h[n] = \{3, 4\}$ with $N=2$.

*   **Circular Convolution $x[n] * h[n]$:**
    $x[0]*h[0] + x[1]*h[-1] = x[0]*h[0] + x[1]*h[1]$ (since $h[-1] = h[1]$ for $N=2$)
    $y[0] = (1 \cdot 3) + (2 \cdot 4) = 3 + 8 = 11$
    $x[1]*h[0] + x[0]*h[-1] = x[1]*h[0] + x[0]*h[1]$
    $y[1] = (2 \cdot 3) + (1 \cdot 4) = 6 + 4 = 10$
    So, $y[n] = x[n] * h[n] = \{11, 10\}$

*   **DFT of $x[n]$:**
    $X[0] = 1+2 = 3$
    $X[1] = 1-2 = -1$
    $X[k] = \{3, -1\}$

*   **DFT of $h[n]$:**
    $H[0] = 3+4 = 7$
    $H[1] = 3-4 = -1$
    $H[k] = \{7, -1\}$

*   **Product of DFTs: $X[k] \cdot H[k]$**
    $X[0] \cdot H[0] = 3 \cdot 7 = 21$
    $X[1] \cdot H[1] = (-1) \cdot (-1) = 1$
    Product = $\{21, 1\}$

*   **DFT of $y[n] = \{11, 10\}$:**
    $Y[0] = 11+10 = 21$
    $Y[1] = 11-10 = 1$
    $Y[k] = \{21, 1\}$

    **Observation:** The DFT of the circular convolution $Y[k]$ is equal to the product of the DFTs $X[k] \cdot H[k]$. This confirms the convolution property.

#### Example 4: Parseval's Theorem

Let $x[n] = \{1, 2, 3, 4\}$ with $N=4$.
From Example 2, $X[k] = \{10, -2+2j, -2, -2-2j\}$.

*   **Time-domain energy:**
    $\sum_{n=0}^{3} |x[n]|^2 = |1|^2 + |2|^2 + |3|^2 + |4|^2 = 1 + 4 + 9 + 16 = 30$

*   **Frequency-domain energy:**
    $\frac{1}{N} \sum_{k=0}^{3} |X[k]|^2 = \frac{1}{4} (|10|^2 + |-2+2j|^2 + |-2|^2 + |-2-2j|^2)$
    $= \frac{1}{4} (100 + ((-2)^2 + 2^2) + 4 + ((-2)^2 + (-2)^2))$
    $= \frac{1}{4} (100 + (4+4) + 4 + (4+4))$
    $= \frac{1}{4} (100 + 8 + 4 + 8)$
    $= \frac{1}{4} (120) = 30$

    **Observation:** The time-domain energy equals the frequency-domain energy, demonstrating Parseval's theorem.

#### Example 5: Conjugate Symmetry

Let $x[n] = \{1, 2, 1, 0\}$ (real signal) with $N=4$.
From Example 1, $X[k] = \{4, -2j, 0, 2j\}$.

*   **Check conjugate symmetry:** $X[k]$ should equal $X^*[N-k]$ (modulo $N$).
    *   For $k=1$: $X[1] = -2j$. $N-k = 4-1=3$. $X[3] = 2j$.
        Is $X[1] = X^*[3]$? $-2j = (2j)^* = -2j$. Yes.
    *   For $k=2$: $X[2] = 0$. $N-k = 4-2=2$. $X[2] = 0$.
        Is $X[2] = X^*[2]$? $0 = 0^* = 0$. Yes. (DC component is real, always).
    *   For $k=3$: $X[3] = 2j$. $N-k = 4-3=1$. $X[1] = -2j$.
        Is $X[3] = X^*[1]$? $2j = (-2j)^* = 2j$. Yes.

    **Observation:** The DFT $X[k]$ exhibits conjugate symmetry, as expected for a real signal.

### Important Points to Remember:

*   The DFT operates on finite-length sequences.
*   The DFT is periodic with period $N$ in both time and frequency.
*   The convolution property ($\text{DFT}\{x*h\} = X \cdot H$) is the foundation for efficient filtering using the DFT/FFT.
*   For real signals, the DFT exhibits conjugate symmetry ($X[k] = X^*[N-k]$), which means the magnitude spectrum is even and the phase spectrum is odd.
*   Parseval's theorem is crucial for energy calculations and understanding signal power in different domains.
*   Linearity simplifies signal processing by allowing independent processing of signal components.
*   Time and frequency shifting properties are essential for understanding modulation and phase shifts.

### Practice Questions:

1.  Let $x[n] = \{1, 0, -1, 0\}$ and $h[n] = \{2, 1, 1, 2\}$. Both sequences have length $N=4$.
    a.  Calculate the DFTs $X[k]$ and $H[k]$.
    b.  Compute $y[n] = x[n] * h[n]$ using circular convolution.
    c.  Compute the DFT of $y[n]$ directly.
    d.  Compute the product $X[k] \cdot H[k]$.
    e.  Verify the convolution property.

2.  Let $x[n] = \{1, 1, 0, 0\}$ with $N=4$.
    a.  Calculate the DFT $X[k]$.
    b.  Calculate the DFT of $x[n-2]$ (cyclically shifted by 2).
    c.  Verify the time-shifting property by comparing the DFT from (b) with $e^{-j2\pi k \cdot 2/4} X[k]$.

3.  A real-valued signal $x[n]$ of length $N=8$ has a DFT $X[k]$. If $X[1] = 3+j4$ and $X[3] = 1-j2$, what are the values of $X[7]$ and $X[5]$?

4.  Let $x[n] = \{2, -1, 3, 0\}$ with $N=4$.
    a.  Calculate the DFT $X[k]$.
    b.  Calculate the energy of $x[n]$ in the time domain.
    c.  Calculate the energy of $X[k]$ in the frequency domain and verify Parseval's theorem.

### Answers to Practice Questions:

1.  a. $X[k] = \{2, 2j, 2, -2j\}$; $H[k] = \{6, 0, 0, 0\}$
    b. $y[n] = \{12, 4, 3, 4\}$
    c. $Y[k] = \{23, 4-4j, 3, 4+4j\}$ (Mistake in manual calculation for Y[0] and Y[k] for H[k]=0. Let's re-calculate H[k] and product for H[k]=0)
       **Re-calculation for Question 1:**
       $H[0] = 2+1+1+2 = 6$
       $H[1] = 2 - j1 - 1 + j2 = 1+j$
       $H[2] = 2 - 1 + 1 - 2 = 0$
       $H[3] = 2 + j1 - 1 - j2 = 1-j$
       $H[k] = \{6, 1+j, 0, 1-j\}$

       $X[0] = 1+0-1+0 = 0$
       $X[1] = 1 - j0 - (-1) + j0 = 2$
       $X[2] = 1 - 0 + (-1) - 0 = 0$
       $X[3] = 1 + j0 - (-1) - j0 = 2$
       $X[k] = \{0, 2, 0, 2\}$

       b. Circular Convolution $y[n] = x[n] * h[n]$ (N=4):
          $y[0] = x[0]h[0] + x[1]h[3] + x[2]h[2] + x[3]h[1] = 1(2) + 0(2) + (-1)(1) + 0(1) = 2 - 1 = 1$
          $y[1] = x[0]h[1] + x[1]h[0] + x[2]h[3] + x[3]h[2] = 1(1) + 0(2) + (-1)(2) + 0(1) = 1 - 2 = -1$
          $y[2] = x[0]h[2] + x[1]h[1] + x[2]h[0] + x[3]h[3] = 1(1) + 0(1) + (-1)(2) + 0(2) = 1 - 2 = -1$
          $y[3] = x[0]h[3] + x[1]h[2] + x[2]h[1] + x[3]h[0] = 1(2) + 0(1) + (-1)(1) + 0(2) = 2 - 1 = 1$
          $y[n] = \{1, -1, -1, 1\}$

       c. DFT of $y[n]$:
          $Y[0] = 1 - 1 - 1 + 1 = 0$
          $Y[1] = 1 - j(-1) - (-1) + j1 = 1 + j + 1 + j = 2 + 2j$
          $Y[2] = 1 - (-1) + (-1) - 1 = 1 + 1 - 1 - 1 = 0$
          $Y[3] = 1 + j(-1) - (-1) - j1 = 1 - j + 1 - j = 2 - 2j$
          $Y[k] = \{0, 2+2j, 0, 2-2j\}$

       d. Product of DFTs $X[k] \cdot H[k]$:
          $X[0]H[0] = 0 \cdot 6 = 0$
          $X[1]H[1] = 2 \cdot (1+j) = 2+2j$
          $X[2]H[2] = 0 \cdot 0 = 0$
          $X[3]H[3] = 2 \cdot (1-j) = 2-2j$
          Product = $\{0, 2+2j, 0, 2-2j\}$

       e. The DFT of $y[n]$ matches the product $X[k]H[k]$, verifying the convolution property.

2.  a. $X[k] = \{2, 2-2j, 0, 2+2j\}$
    b. Let $z[n] = x[n-2]$. $z[n] = \{0, 0, 1, 1\}$.
       DFT of $z[n]$: $Z[k] = \{2, -2+2j, 0, -2-2j\}$
    c. $e^{-j2\pi k \cdot 2/4} X[k] = e^{-j\pi k} X[k]$
       $k=0: e^0 X[0] = 1 \cdot 2 = 2$
       $k=1: e^{-j\pi} X[1] = (-1)(2-2j) = -2+2j$
       $k=2: e^{-j2\pi} X[2] = (1)(0) = 0$
       $k=3: e^{-j3\pi} X[3] = (-1)(2+2j) = -2-2j$
       The results match $Z[k]$.

3.  For a real-valued signal $x[n]$, $X[k] = X^*[N-k]$.
    Given $X[1] = 3+j4$, then $X[7] = X^*[8-1] = X^*[7]^* = X^*[1] = (3+j4)^* = 3-j4$.
    Given $X[3] = 1-j2$, then $X[5] = X^*[8-3] = X^*[5]^* = X^*[3] = (1-j2)^* = 1+j2$.
    So, $X[7] = 3-j4$ and $X[5] = 1+j2$.

4.  a. $X[k] = \{4, 0, 4, 0\}$
    b. Time-domain energy: $|2|^2 + |-1|^2 + |3|^2 + |0|^2 = 4 + 1 + 9 + 0 = 14$.
    c. Frequency-domain energy: $\frac{1}{4} \sum_{k=0}^{3} |X[k]|^2 = \frac{1}{4} (|4|^2 + |0|^2 + |4|^2 + |0|^2) = \frac{1}{4}(16 + 0 + 16 + 0) = \frac{1}{4}(32) = 8$.
       **Error in question calculation or my understanding:** The example output is correct.
       Let's re-calculate $X[k]$ for $x[n] = \{2, -1, 3, 0\}$.
       $X[0] = 2 - 1 + 3 + 0 = 4$
       $X[1] = 2 - j(-1) - 3 + j0 = 2 + j - 3 = -1 + j$
       $X[2] = 2 - (-1) + 3 - 0 = 2 + 1 + 3 = 6$
       $X[3] = 2 + j(-1) - 3 - j0 = 2 - j - 3 = -1 - j$
       So $X[k] = \{4, -1+j, 6, -1-j\}$.

       b. Time-domain energy: $|2|^2 + |-1|^2 + |3|^2 + |0|^2 = 4 + 1 + 9 + 0 = 14$. (This is correct)

       c. Frequency-domain energy: $\frac{1}{4} \sum_{k=0}^{3} |X[k]|^2 = \frac{1}{4} (|4|^2 + |-1+j|^2 + |6|^2 + |-1-j|^2)$
          $= \frac{1}{4} (16 + ((-1)^2 + 1^2) + 36 + ((-1)^2 + (-1)^2))$
          $= \frac{1}{4} (16 + (1+1) + 36 + (1+1))$
          $= \frac{1}{4} (16 + 2 + 36 + 2)$
          $= \frac{1}{4} (56) = 14$.
       The time-domain energy (14) equals the frequency-domain energy (14), confirming Parseval's theorem.

---
**References:**

*   Ingle, V. K., & Proakis, J. G. (2011). *Digital Signal Processing using Matlab*. Cengage Learning. (Chapter 7 on DFT)
*   Downey, A. B. (2012). *Think DSP: Digital Signal Processing using Python*. Green Tea Press. (Chapter 7 on DFT)
*   Oppenheim, A. V., & Schafer, R. W. (2014). *Discrete-Time Signal Processing*. Pearson Education. (Chapter 7 on DFT)
*   Apte, S. D. (2019). *Digital Signal Processing*. Wiley. (Chapter 7 on DFT)
*   Mitra, S. K. (2014). *Digital Signal Processing: A Computer based Approach*. McGraw Hill. (Chapter 7 on DFT)
*   Ifeachor, E. C., & Jervis, B. W. (2009). *Digital Signal Processing: A Practical Approach*. Pearson Education. (Chapter 7 on DFT)
*   Salivahanan, S. (2019). *Digital Signal Processing*. McGraw Hill. (Chapter 7 on DFT)

These notes provide a comprehensive overview of the properties of the DFT, supported by examples and linked to the learning and course outcomes. Remember to practice applying these properties to different signal processing problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
