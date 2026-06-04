---
title: "Fast Fourier transform (FFT): Introduction, Radix -2 decimation in time FFT algorithm, Radix-2 decimation in frequency algorithm, IDFT using FFT algorithm."
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 1: Introduction to DSP and Discrete Fourier transform:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3665c"
status: "completed"
scrapedAt: "2026-05-23T16:26:37.427Z"
---
# DIGITAL SIGNAL PROCESSING - Module 1: Introduction to DSP and Discrete Fourier Transform

## Topic: Fast Fourier Transform (FFT)

---

### 1. Introduction to FFT

#### 1.1 Motivation for FFT

The Discrete Fourier Transform (DFT) is a fundamental tool for analyzing the frequency content of discrete-time signals. The DFT of a sequence $x[n]$ of length $N$ is given by:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}$, for $k = 0, 1, \dots, N-1$

A direct computation of the DFT requires $N$ complex multiplications and $N-1$ complex additions for each of the $N$ output values $X[k]$. This results in a total of $N^2$ complex multiplications and $N(N-1)$ complex additions. For large values of $N$, this computational complexity becomes prohibitive.

The **Fast Fourier Transform (FFT)** is a family of algorithms that compute the DFT in a much more efficient manner. FFT algorithms exploit the symmetries and periodicities in the complex exponential term $e^{-j2\pi kn/N}$ to reduce the computational complexity significantly.

#### 1.2 Computational Complexity of DFT vs. FFT

*   **DFT Complexity:** $O(N^2)$ complex multiplications and additions.
*   **FFT Complexity:** Typically $O(N \log_2 N)$ complex multiplications and additions.

**Example:** For $N = 1024$:
*   DFT: $1024^2 \approx 1 \text{ million}$ operations
*   FFT: $1024 \log_2 1024 = 1024 \times 10 \approx 10 \text{ thousand}$ operations

This significant reduction in computation makes FFT indispensable for real-time signal processing applications.

#### 1.3 Key Concept: Divide and Conquer

FFT algorithms are based on the "divide and conquer" strategy. The computation of an $N$-point DFT is recursively broken down into smaller DFTs, typically of size $N/2$.

---

### 2. Radix-2 Decimation-in-Time (DIT) FFT Algorithm

The Radix-2 DIT FFT algorithm is one of the most common FFT algorithms. It decomposes an $N$-point DFT into two $(N/2)$-point DFTs by dividing the input sequence into even-indexed and odd-indexed samples.

#### 2.1 Algorithm Derivation

Let's consider an $N$-point DFT:
$X[k] = \sum_{n=0}^{N-1} x[n] W_N^{kn}$, where $W_N = e^{-j2\pi/N}$ is the twiddle factor.

We can split the summation into even and odd indices:
$X[k] = \sum_{n=0}^{N/2-1} x[2n] W_N^{k(2n)} + \sum_{n=0}^{N/2-1} x[2n+1] W_N^{k(2n+1)}$

Using the properties of twiddle factors:
*   $W_N^{k(2n)} = (W_N^2)^{kn} = W_{N/2}^{kn}$
*   $W_N^{k(2n+1)} = W_N^{k(2n)} W_N^k = W_{N/2}^{kn} W_N^k$

Substituting these back into the equation for $X[k]$:
$X[k] = \sum_{n=0}^{N/2-1} x[2n] W_{N/2}^{kn} + W_N^k \sum_{n=0}^{N/2-1} x[2n+1] W_{N/2}^{kn}$

Let $X_e[k] = \sum_{n=0}^{N/2-1} x[2n] W_{N/2}^{kn}$ (DFT of even-indexed samples)
Let $X_o[k] = \sum_{n=0}^{N/2-1} x[2n+1] W_{N/2}^{kn}$ (DFT of odd-indexed samples)

Then, $X[k] = X_e[k] + W_N^k X_o[k]$

This equation holds for $k = 0, 1, \dots, N-1$.
We observe that $X_e[k]$ and $X_o[k]$ are $(N/2)$-point DFTs. Due to the periodicity of the twiddle factors ($W_{N/2}^{k+N/2} = -W_{N/2}^k$ and $W_N^{k+N/2} = -W_N^k$), we only need to compute $X_e[k]$ and $X_o[k]$ for $k = 0, 1, \dots, N/2-1$.

For $k = 0, 1, \dots, N/2-1$:
$X[k] = X_e[k] + W_N^k X_o[k]$

For $k = N/2, N/2+1, \dots, N-1$:
Let $k' = k - N/2$. Then $k = k' + N/2$.
$X[k' + N/2] = X_e[k' + N/2] + W_N^{k' + N/2} X_o[k' + N/2]$

Using periodicity:
$X_e[k' + N/2] = X_e[k']$
$X_o[k' + N/2] = X_o[k']$
$W_N^{k' + N/2} = W_N^{k'} W_N^{N/2} = W_N^{k'} (-1) = -W_N^{k'}$

So, for $k = N/2, N/2+1, \dots, N-1$ (with $k' = k - N/2$ ranging from $0$ to $N/2-1$):
$X[k' + N/2] = X_e[k'] - W_N^{k'} X_o[k']$

This pair of equations is known as a **butterfly** operation.

#### 2.2 Butterfly Structure

A 2-point butterfly combines two complex numbers $A$ and $B$ to produce two outputs $C$ and $D$:
$C = A + W B$
$D = A - W B$
Here, $W$ is a twiddle factor.

In the Radix-2 DIT FFT, an $N$-point DFT is computed using $\log_2 N$ stages. Each stage consists of $N/2$ butterfly operations.

#### 2.3 Signal Flow Graph (SFG) - Radix-2 DIT FFT

The SFG for DIT FFT involves reordering the input sequence in a bit-reversed order. The output sequence is in normal order.

**Example: 8-point DIT FFT** ($N=8$, $\log_2 8 = 3$ stages)

1.  **Input Reordering:** Bit-reversal of indices.
    *   0: 000 -> 000: 0
    *   1: 001 -> 001: 1
    *   2: 010 -> 010: 2
    *   3: 011 -> 011: 3
    *   4: 100 -> 001: 1 (Incorrect, should be 100 -> 001)
    *   Let's correct the bit reversal:
        *   0 (000) -> 0 (000)
        *   1 (001) -> 1 (001)
        *   2 (010) -> 2 (010)
        *   3 (011) -> 3 (011)
        *   4 (100) -> 4 (100)
        *   5 (101) -> 5 (101)
        *   6 (110) -> 6 (110)
        *   7 (111) -> 7 (111)

    My apologies, bit reversal is important for **input**. Let's re-do the bit reversal example for $N=8$:
    *   0 (000) -> 0 (000)
    *   1 (001) -> 4 (100)
    *   2 (010) -> 2 (010)
    *   3 (011) -> 6 (110)
    *   4 (100) -> 1 (001)
    *   5 (101) -> 5 (101)
    *   6 (110) -> 3 (011)
    *   7 (111) -> 7 (111)

    So the input sequence $x[n]$ needs to be reordered as $x[bitrev(n)]$.

2.  **Stages:**
    *   **Stage 1 (Size 2 DFTs):** Combines adjacent pairs of inputs.
        *   $X[0] = x[0] + W_8^0 x[4]$
        *   $X[4] = x[0] - W_8^0 x[4]$
        *   $X[1] = x[2] + W_8^1 x[6]$
        *   $X[5] = x[2] - W_8^1 x[6]$
        *   ... and so on.

    *   **Stage 2 (Size 4 DFTs):** Combines outputs from Stage 1.
        *   The twiddle factors used are $W_4^0, W_4^1$.
        *   Example: For the first output $X[0]$ (which is actually $X[0]$ in the final output), it would be computed from inputs that originated from $x[0]$ and $x[4]$. The next DFT of size 4 would involve $x[0], x[4]$ and the next two elements.

    *   **Stage 3 (Size 8 DFT):** Combines outputs from Stage 2 to produce the final $N$-point DFT.
        *   The twiddle factors used are $W_8^0, W_8^1, W_8^2, W_8^3$.

**Important Note:** The output of the DIT FFT algorithm is in normal order.

#### 2.4 Computational Complexity of Radix-2 DIT FFT

*   **Number of Stages:** $\log_2 N$
*   **Number of Butterflies per Stage:** $N/2$
*   **Total Butterflies:** $(N/2) \times \log_2 N$
*   **Twiddle Factors:**
    *   Stage 1: $N/2$ butterflies, $N/4$ twiddle factors (all $W_N^0$ or $W_N^{N/2}$)
    *   Stage 2: $N/4$ butterflies, $N/4$ twiddle factors ( $W_{N/2}^0, W_{N/2}^1$)
    *   Stage $m$: $N/2^m$ butterflies, $N/2^m$ twiddle factors ($W_{N/2^{m-1}}^k$)
    *   Total twiddle factors needed: $\sum_{m=1}^{\log_2 N} N/2^m = N/2 + N/4 + \dots + 1 \approx N$.

    More precisely, stage 1 uses $N/2$ multiplications (some are by 1).
    Stage 2 uses $N/4$ butterflies, each needing a twiddle factor from $W_{N/2}^k$. So $N/4$ multiplications.
    Stage 3 uses $N/8$ butterflies, each needing a twiddle factor from $W_{N/4}^k$. So $N/8$ multiplications.
    Total multiplications for twiddle factors: $N/2 + N/4 + N/8 + \dots + N/N = N-1$.

    **Total Complex Multiplications:** $(N/2) \times \log_2 N$ butterflies. For each butterfly, one complex multiplication is needed (if twiddle factor is not $\pm 1$ or $0$).
    Number of non-trivial twiddle factors: $W_N^k$ for $k=1, \dots, N/2-1$.
    The number of multiplications is approximately $N/2 \log_2 N$.
    A more accurate count of multiplications: The number of complex multiplications in each stage is $N/2, N/4, N/8, \dots, 1$ for the respective stages *if we only consider non-unity twiddle factors*.
    The total number of complex multiplications is $N \log_2 N$.

**Summary:** Radix-2 DIT FFT performs $N \log_2 N$ complex multiplications and $N \log_2 N$ complex additions. This is a significant improvement over $O(N^2)$.

---

### 3. Radix-2 Decimation-in-Frequency (DIF) FFT Algorithm

The Radix-2 DIF FFT algorithm decomposes an $N$-point DFT into two $(N/2)$-point DFTs by dividing the output sequence into even-indexed and odd-indexed samples.

#### 3.1 Algorithm Derivation

Consider the DFT equation:
$X[k] = \sum_{n=0}^{N-1} x[n] W_N^{kn}$

We can split the input sequence into the first half ($n = 0, \dots, N/2-1$) and the second half ($n = N/2, \dots, N-1$).
Let $n = m$ for $n = 0, \dots, N/2-1$, and $n = m + N/2$ for $n = N/2, \dots, N-1$.

$X[k] = \sum_{m=0}^{N/2-1} x[m] W_N^{km} + \sum_{m=0}^{N/2-1} x[m+N/2] W_N^{k(m+N/2)}$

Using the property $W_N^{k(m+N/2)} = W_N^{km} W_N^{kN/2} = W_N^{km} (-1)^k$:

$X[k] = \sum_{m=0}^{N/2-1} x[m] W_N^{km} + (-1)^k \sum_{m=0}^{N/2-1} x[m+N/2] W_N^{km}$

Let $g[m] = x[m]$ for $m = 0, \dots, N/2-1$
Let $h[m] = x[m+N/2]$ for $m = 0, \dots, N/2-1$

Then, $X[k] = \sum_{m=0}^{N/2-1} g[m] W_N^{km} + (-1)^k \sum_{m=0}^{N/2-1} h[m] W_N^{km}$

This equation appears to be related to DFTs of length $N/2$. However, the twiddle factor $W_N^{km}$ is correct, but the output $X[k]$ is not directly split into two $N/2$-point DFTs because of the $(-1)^k$ term.

To make this DIF, we consider the DFT for even $k$ and odd $k$ separately.

**For even $k$ (let $k = 2l$):**
$X[2l] = \sum_{m=0}^{N/2-1} x[m] W_N^{2lm} + (-1)^{2l} \sum_{m=0}^{N/2-1} x[m+N/2] W_N^{2lm}$
$X[2l] = \sum_{m=0}^{N/2-1} x[m] W_{N/2}^{lm} + \sum_{m=0}^{N/2-1} x[m+N/2] W_{N/2}^{lm}$
Let $Y_1[l] = \sum_{m=0}^{N/2-1} x[m] W_{N/2}^{lm}$ (DFT of first half of input)
Let $Y_2[l] = \sum_{m=0}^{N/2-1} x[m+N/2] W_{N/2}^{lm}$ (DFT of second half of input)
Then, $X[2l] = Y_1[l] + Y_2[l]$, for $l = 0, 1, \dots, N/2-1$.

**For odd $k$ (let $k = 2l+1$):**
$X[2l+1] = \sum_{m=0}^{N/2-1} x[m] W_N^{(2l+1)m} + (-1)^{2l+1} \sum_{m=0}^{N/2-1} x[m+N/2] W_N^{(2l+1)m}$
$X[2l+1] = \sum_{m=0}^{N/2-1} x[m] W_N^{(2l+1)m} - \sum_{m=0}^{N/2-1} x[m+N/2] W_N^{(2l+1)m}$
$X[2l+1] = \sum_{m=0}^{N/2-1} x[m] W_N^{lm} W_N^{m} - \sum_{m=0}^{N/2-1} x[m+N/2] W_N^{lm} W_N^{m}$
$X[2l+1] = W_N^l \sum_{m=0}^{N/2-1} x[m] W_{N/2}^{lm} - W_N^l \sum_{m=0}^{N/2-1} x[m+N/2] W_{N/2}^{lm}$
$X[2l+1] = W_N^l (Y_1[l] - Y_2[l])$

This means we first compute two $N/2$-point DFTs ($Y_1[l]$ and $Y_2[l]$) of the even and odd halves of the input sequence. Then, we combine these results using butterflies.

*   $X[2l] = Y_1[l] + Y_2[l]$
*   $X[2l+1] = W_N^l (Y_1[l] - Y_2[l])$ (where $W_N^l = e^{-j2\pi l/N}$)

This butterfly structure is different from DIT. The twiddle factor is applied *after* the subtraction.

#### 3.2 Butterfly Structure - Radix-2 DIF FFT

The DIF FFT butterfly structure combines intermediate results. The input sequence is in normal order. The intermediate stages involve twiddle factor multiplication and addition/subtraction. The output sequence of the DIF FFT is bit-reversed.

**Example: 8-point DIF FFT** ($N=8$, $\log_2 8 = 3$ stages)

1.  **Stage 1:** Combines adjacent pairs of inputs using twiddle factors.
    *   $y_1[m] = x[m] + W_8^m x[m+N/2]$
    *   $y_2[m] = x[m] - W_8^m x[m+N/2]$
    for $m = 0, \dots, N/2-1$.
    The twiddle factors used are $W_8^0, W_8^1, \dots, W_8^{N/2-1}$.

2.  **Stage 2:** Rearranges the outputs and applies further twiddle factors. This stage works on $N/4$ groups of 4 points.
    The $N/2$ outputs from Stage 1 are grouped into $N/4$ pairs. These pairs are then combined in a butterfly structure.

3.  **Stage 3:** Combines the results to produce the final DFT coefficients, but in bit-reversed order.

**Important Note:** The output of the DIF FFT algorithm is in bit-reversed order.

#### 3.3 Signal Flow Graph (SFG) - Radix-2 DIF FFT

The SFG for DIF FFT has a different structure. The input is in normal order. The stages of butterflies involve twiddle factor multiplication. The final output is bit-reversed.

**Key Difference between DIT and DIF:**

| Feature        | Radix-2 DIT FFT                                     | Radix-2 DIF FFT                                       |
| :------------- | :-------------------------------------------------- | :---------------------------------------------------- |
| **Decomposition** | Decimation in time (input sequence split)           | Decimation in frequency (output sequence split)       |
| **Input Order**  | Bit-reversed                                        | Normal                                                |
| **Output Order** | Normal                                              | Bit-reversed                                          |
| **Butterfly**    | $C = A + WB$, $D = A - WB$ (twiddle factor applied first) | $C = A + B$, $D = (A - B)W$ (twiddle factor applied after subtraction) |
| **Twiddle Factor Location** | Early stages                                      | Later stages                                          |

---

### 4. Inverse Discrete Fourier Transform (IDFT) using FFT Algorithm

The IDFT of a sequence $X[k]$ of length $N$ is given by:

$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j2\pi kn/N}$, for $n = 0, 1, \dots, N-1$

Notice the similarities with the DFT formula:
$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}$

We can relate the IDFT to the DFT by observing the signs in the exponent and the scaling factor.

Let's consider the complex conjugate of the DFT:
$(X[k])^* = \left(\sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}\right)^*$
$(X[k])^* = \sum_{n=0}^{N-1} (x[n])^* (e^{-j2\pi kn/N})^*$
$(X[k])^* = \sum_{n=0}^{N-1} (x[n])^* e^{j2\pi kn/N}$

Comparing this with the IDFT formula:
$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j2\pi kn/N}$

We can see a strong resemblance if we:
1.  Take the complex conjugate of the input sequence $X[k]$.
2.  Compute the DFT of the conjugated sequence.
3.  Take the complex conjugate of the result.
4.  Scale by $1/N$.

**Algorithm to compute IDFT using FFT:**

1.  **Conjugate the input:** Let $Y[k] = (X[k])^*$.
2.  **Compute DFT of $Y[k]$:** Use an FFT algorithm (e.g., Radix-2 DIT or DIF) to compute $Z[n] = \text{DFT}(Y[k])$.
    $Z[n] = \sum_{k=0}^{N-1} Y[k] e^{-j2\pi kn/N} = \sum_{k=0}^{N-1} (X[k])^* e^{-j2\pi kn/N}$
3.  **Conjugate the result:** Let $W[n] = (Z[n])^*$.
    $W[n] = \left(\sum_{k=0}^{N-1} (X[k])^* e^{-j2\pi kn/N}\right)^*$
    $W[n] = \sum_{k=0}^{N-1} \left((X[k])^* e^{-j2\pi kn/N}\right)^*$
    $W[n] = \sum_{k=0}^{N-1} X[k] e^{j2\pi kn/N}$
4.  **Scale by $1/N$:** $x[n] = \frac{1}{N} W[n]$.

**Alternative Method (using the "signed" DFT):**

Another way is to define a modified DFT where the exponent has a positive sign. Let's call this the "positive DFT":
$X_{pos}[k] = \sum_{n=0}^{N-1} x[n] e^{j2\pi kn/N}$

Then the IDFT is:
$x[n] = \frac{1}{N} X_{pos}[n]$

So, to compute the IDFT using an FFT algorithm (which computes the standard DFT with a negative exponent), we can:

1.  **Reverse the input sequence:** Let $X_{rev}[k] = X[N-k]$ for $k=1, \dots, N-1$, and $X_{rev}[0] = X[0]$.
    $X_{rev}[k] = \sum_{n=0}^{N-1} x[n] e^{j2\pi (N-k)n/N}$
    $X_{rev}[k] = \sum_{n=0}^{N-1} x[n] e^{j2\pi (Nn - kn)/N}$
    $X_{rev}[k] = \sum_{n=0}^{N-1} x[n] e^{j2\pi n} e^{-j2\pi kn/N}$
    Since $e^{j2\pi n} = 1$,
    $X_{rev}[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N} = X[k]$
    This reversal does not seem to help directly.

Let's go back to the conjugation method. The key is that computing the DFT of the conjugated sequence and then conjugating the output effectively computes the inverse transform.

**Simpler Method (using FFT algorithm directly):**

To compute the IDFT of $X[k]$:
1.  Consider the sequence $X[k]$ as input to a standard FFT algorithm.
2.  The FFT algorithm will compute $\sum_{k=0}^{N-1} X[k] W_N^{kn}$.
3.  We want $\sum_{k=0}^{N-1} X[k] e^{j2\pi kn/N}$. This is equivalent to computing the DFT of $X[k]$ with twiddle factors $W_N^{-kn} = W_N^{N-kn}$.
    So, if the FFT algorithm computes $\sum x[n] W_N^{-kn}$, then we need to feed it $X[k]$ with $W_N^{-kn}$ terms.

The most straightforward method is:
1.  Take the complex conjugate of $X[k]$ to get $X^*[k]$.
2.  Compute the $N$-point DFT of $X^*[k]$ using an FFT algorithm. Let this be $Y[n]$.
    $Y[n] = \sum_{k=0}^{N-1} X^*[k] W_N^{kn}$
3.  Take the complex conjugate of $Y[n]$ to get $Y^*[n]$.
    $Y^*[n] = \left(\sum_{k=0}^{N-1} X^*[k] W_N^{kn}\right)^* = \sum_{k=0}^{N-1} (X^*[k])^* (W_N^{kn})^*$
    $Y^*[n] = \sum_{k=0}^{N-1} X[k] e^{-j2\pi kn/N}$
4.  Scale the result by $1/N$.
    $x[n] = \frac{1}{N} Y^*[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{-j2\pi kn/N}$

This is *not* the IDFT. Let's re-evaluate.

**Correct Relation for IDFT using DFT:**

IDFT: $x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j2\pi kn/N}$
DFT: $X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}$

Let's work with the definition of DFT and IDFT.
Consider computing the DFT of $X^*[k]$:
$\text{DFT}(X^*[k]) = \sum_{k=0}^{N-1} X^*[k] e^{-j2\pi kn/N}$
Take the complex conjugate of this:
$(\text{DFT}(X^*[k]))^* = \left(\sum_{k=0}^{N-1} X^*[k] e^{-j2\pi kn/N}\right)^*$
$= \sum_{k=0}^{N-1} (X^*[k])^* (e^{-j2\pi kn/N})^*$
$= \sum_{k=0}^{N-1} X[k] e^{j2\pi kn/N}$

This sum is exactly $N$ times the IDFT of $X[k]$ (without the $1/N$ scaling).
So, the steps are:
1.  Compute $Y[k] = X^*[k]$.
2.  Compute $Z[n] = \text{DFT}(Y[k])$ using an FFT algorithm.
3.  Compute $x[n] = \frac{1}{N} Z^*[n]$.

**Computational Cost of IDFT using FFT:**

The complexity of computing the IDFT using an FFT algorithm is dominated by the FFT itself, which is $O(N \log_2 N)$. The complex conjugations and the final scaling are $O(N)$. Therefore, the overall complexity is $O(N \log_2 N)$.

---

### 5. Learning Outcomes Alignment and Course Outcomes

This topic directly addresses the core of **CO1: Analyse discrete-time systems using DFT**. The FFT is the efficient way to compute the DFT, which is used for spectral analysis of signals and the frequency response of systems.

*   Understanding the DFT and its computation is fundamental to analyzing system behavior in the frequency domain.
*   FFT algorithms enable practical analysis of systems for large datasets.

While this module focuses on DFT and FFT, the subsequent modules on filter design (CO2, CO3) will heavily rely on the frequency-domain analysis capabilities provided by DFT/FFT. For example, frequency sampling filter design directly uses DFT.

---

### 6. Key Concepts and Definitions

*   **DFT:** Discrete Fourier Transform - converts a discrete-time signal from the time domain to the frequency domain.
*   **FFT:** Fast Fourier Transform - a family of efficient algorithms to compute the DFT.
*   **Twiddle Factor:** $W_N^k = e^{-j2\pi k/N}$, the complex exponential term in the DFT.
*   **Butterfly Operation:** A basic computational unit in FFT algorithms that combines two complex numbers.
*   **Radix-2 FFT:** FFT algorithms that decompose an $N$-point DFT into $N/2$ DFTs of size 2. $N$ must be a power of 2.
*   **Decimation-in-Time (DIT):** FFT algorithm that decimates the time-domain input sequence.
*   **Decimation-in-Frequency (DIF):** FFT algorithm that decimates the frequency-domain output sequence.
*   **Bit Reversal:** A permutation of the input sequence indices based on reversing their binary representations, used in DIT FFT.
*   **Complex Conjugation:** $z^* = (a+jb)^* = a-jb$. Essential for computing IDFT using FFT.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. Textbooks and Reference Material (Prokis, Oppenheim & Schafer, Ifeachor & Jervis, Salivahanan et al.)

*   **Proakis & Manolakis:** Chapter 7 (Discrete Fourier Transform) and Chapter 8 (Fast Fourier Transform Algorithms) are highly relevant. They provide detailed derivations of DIT and DIF algorithms, including signal flow graphs and complexity analysis. Section 7.3 on the DFT properties and Section 8.1 on the basic ideas of FFT are crucial.
*   **Oppenheim & Schafer:** Chapter 7 (The Discrete Fourier Transform) covers the DFT. Section 7.4 discusses the computational complexity of the DFT. Chapter 10 (The Fast Fourier Transform) delves into the DIT and DIF algorithms, including their derivation and implementation.
*   **Ifeachor & Jervis:** Chapter 5 (The Discrete Fourier Transform) and Chapter 6 (Fast Fourier Transform Algorithms) provide a good overview. They emphasize the practical implementation aspects and the computational savings.
*   **Salivahanan, Vallavaraj, & Gnapriya:** Chapter 7 (The Discrete Fourier Transform) and Chapter 8 (Fast Fourier Transforms) cover these topics. They offer clear explanations and examples for understanding the algorithms.

**Key takeaway from textbooks:** The core concept is the divide-and-conquer approach. The differences in DIT and DIF lie in *where* the decimation occurs (input or output) and how the twiddle factors are applied. The IDFT can be efficiently computed by leveraging the DFT computation through conjugation.

---

### 8. Practice Questions and Exercises

**Question 1:**
(a) State the computational complexity of a direct DFT computation for a sequence of length $N$.
(b) What is the complexity of an FFT algorithm of length $N$?
(c) How many complex multiplications and additions are saved by using an FFT algorithm instead of a direct DFT for $N=1024$?

**Answer 1:**
(a) The direct DFT computation has a complexity of $O(N^2)$ complex multiplications and additions.
(b) The FFT algorithm has a complexity of $O(N \log_2 N)$ complex multiplications and additions.
(c) For $N=1024$:
    *   DFT operations: $N^2 = 1024^2 \approx 1.05 \times 10^6$
    *   FFT operations: $N \log_2 N = 1024 \times 10 = 10240$
    *   Savings in multiplications/additions: $\approx 1.05 \times 10^6 - 10240 \approx 1.04 \times 10^6$.

---

**Question 2:**
Consider the computation of an 8-point Radix-2 DIT FFT.
(a) What is the required order of the input sequence?
(b) How many stages of computation are there?
(c) How many butterflies are in each stage?
(d) What are the twiddle factors used in the first stage?

**Answer 2:**
(a) The input sequence needs to be in bit-reversed order. For $N=8$ (3 bits):
    0 (000) -> 0 (000)
    1 (001) -> 4 (100)
    2 (010) -> 2 (010)
    3 (011) -> 6 (110)
    4 (100) -> 1 (001)
    5 (101) -> 5 (101)
    6 (110) -> 3 (011)
    7 (111) -> 7 (111)
    So, the input $x[0], x[1], \dots, x[7]$ should be arranged as $x[0], x[4], x[2], x[6], x[1], x[5], x[3], x[7]$ before processing.

(b) For $N=8$, $\log_2 8 = 3$ stages.
(c) In each of the 3 stages, there are $N/2 = 8/2 = 4$ butterflies.
(d) The first stage computes 2-point DFTs. The twiddle factors used are $W_8^0$ and $W_8^1$, where:
    $W_8^0 = e^{-j2\pi \times 0 / 8} = 1$
    $W_8^1 = e^{-j2\pi \times 1 / 8} = e^{-j\pi/4} = \cos(\pi/4) - j\sin(\pi/4) = \frac{1}{\sqrt{2}} - j\frac{1}{\sqrt{2}}$

---

**Question 3:**
Describe the steps to compute the 4-point IDFT of a sequence $X[k] = \{1+j, 2, 1-j, 0\}$ using an FFT algorithm.

**Answer 3:**
Given $X[k] = \{1+j, 2, 1-j, 0\}$ for $k=0, 1, 2, 3$. $N=4$.

1.  **Conjugate the input:**
    $X^*[k] = \{1-j, 2, 1+j, 0\}$

2.  **Compute the 4-point DFT of $X^*[k]$ using an FFT algorithm (e.g., Radix-2 DIT):**
    First, bit-reverse the input:
    $X_{rev}^* = \{X^*[0], X^*[2], X^*[1], X^*[3]\} = \{1-j, 1+j, 2, 0\}$

    **Stage 1 (2-point DFTs):**
    *   $y_1[0] = X_{rev}^*[0] + W_4^0 X_{rev}^*[1] = (1-j) + 1(1+j) = 2$
    *   $y_1[1] = X_{rev}^*[0] - W_4^0 X_{rev}^*[1] = (1-j) - 1(1+j) = -2j$
    *   $y_1[2] = X_{rev}^*[2] + W_4^0 X_{rev}^*[3] = 2 + 1(0) = 2$
    *   $y_1[3] = X_{rev}^*[2] - W_4^0 X_{rev}^*[3] = 2 - 1(0) = 2$
    Intermediate output: $\{2, -2j, 2, 2\}$

    **Stage 2 (4-point DFT):**
    Input for Stage 2: $\{y_1[0], y_1[2], y_1[1], y_1[3]\}$ (reordered for normal output after bit-reversed input)
    Input: $\{2, 2, -2j, 2\}$

    *   Butterfly 1: Combine $y_1[0]$ and $y_1[2]$ with $W_4^0$ and $W_4^2$
        *   $Y[0] = y_1[0] + W_4^0 y_1[2] = 2 + 1(2) = 4$
        *   $Y[2] = y_1[0] - W_4^0 y_1[2] = 2 - 1(2) = 0$

    *   Butterfly 2: Combine $y_1[1]$ and $y_1[3]$ with $W_4^1$ and $W_4^3$
        *   $W_4^1 = e^{-j2\pi/4} = -j$
        *   $W_4^3 = e^{-j6\pi/4} = e^{-j3\pi/2} = j$ (or $W_4^1 = -j, W_4^3 = (-j)^3 = j$)
        *   $Y[1] = y_1[1] + W_4^1 y_1[3] = -2j + (-j)(2) = -4j$
        *   $Y[3] = y_1[1] - W_4^1 y_1[3] = -2j - (-j)(2) = 0$

    DFT result: $Z[n] = \{4, -4j, 0, 0\}$

3.  **Conjugate the result:**
    $Z^*[n] = \{4, 4j, 0, 0\}$

4.  **Scale by $1/N$:**
    $x[n] = \frac{1}{4} Z^*[n] = \{1, j, 0, 0\}$

The 4-point IDFT of $X[k]$ is $x[n] = \{1, j, 0, 0\}$.

---

### 9. Important Points to Remember

*   FFT significantly reduces the computational complexity of the DFT from $O(N^2)$ to $O(N \log_2 N)$.
*   Radix-2 FFT requires $N$ to be a power of 2.
*   **DIT FFT:** Input is bit-reversed, output is normal. Twiddle factors are applied early. Butterfly structure: $A \pm WB$.
*   **DIF FFT:** Input is normal, output is bit-reversed. Twiddle factors are applied later. Butterfly structure: $A \pm B$, then multiply by $W$.
*   The choice between DIT and DIF often depends on implementation details (e.g., memory access patterns).
*   IDFT can be efficiently computed using FFT by taking the complex conjugate of the input, performing a DFT (FFT), and then taking the complex conjugate of the output, followed by scaling by $1/N$.
*   FFT is a cornerstone of digital signal processing, enabling spectral analysis and efficient implementation of many algorithms.

---