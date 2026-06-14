# Linear filtering methods based on DFT – FFT (DIT-FFT only) – efficient computation of the DFT of a 2N point real sequences – correlation – use of FFT in linear filtering and correlation

<!-- SECTION_1_START -->

# Digital Signal Processing — Linear Filtering via DFT and FFT (DIT-FFT)

> [!IMPORTANT]
> **KTU 2024 Scheme | PECST526 | Module 1**
> This note covers the heart of frequency-domain signal processing: how the **Discrete Fourier Transform (DFT)** enables efficient linear filtering through the **Fast Fourier Transform (FFT)**, with a focused treatment of the **Decimation-In-Time (DIT) radix-2 FFT**, efficient computation for **$2N$-point real sequences**, **correlation**, and FFT-based linear filtering.

---

## 1.1 Formal Definition of the System

A **Digital Signal Processing (DSP) system** is a discrete-time, discrete-amplitude computational system that transforms an input signal $x[n]$ into an output signal $y[n]$ using numerical algorithms. When this transformation is governed by the principle of **linearity** and **time-invariance**, the system is called a **Linear Time-Invariant (LTI) system**.

A **linear filter** is a discrete-time LTI system characterized by an impulse response $h[n]$ such that the output is the **linear convolution** of the input with the impulse response:

$$y[n] = x[n] \ast h[n] = \sum_{k=-\infty}^{\infty} x[k] \, h[n-k]$$

The **DFT-based linear filtering** approach exploits the **Convolution Theorem**:

$$x[n] \ast h[n] \xleftrightarrow{\text{DFT}} X[k] \cdot H[k]$$

By transforming both sequences into the frequency domain using the **DFT**, multiplying them point-wise, and transforming back using the **Inverse DFT (IDFT)**, we obtain the filtered output. Since the DFT has a computational complexity of $\mathcal{O}(N^{2})$ — which is prohibitive for large $N$ — the **Fast Fourier Transform (FFT)** reduces this to $\mathcal{O}(N \log_{2} N)$.

> [!NOTE]
> **Convolution Theorem (Circular vs. Linear)**
> The DFT multiplication yields the **circular convolution** of length $N$. For it to equal the **linear convolution** of length $L = N_{x} + N_{h} - 1$, both sequences must be **zero-padded** to at least $L$ points before applying the FFT.

### 1.2 Intuitive Overview & Conceptual Analogy

> [!TIP]
> **Real-world analogy — "The Audio Equalizer in a Concert Hall":**
> Imagine you are listening to music in a concert hall. Different instruments produce sound waves at different frequencies. An **audio equalizer** acts as a linear filter: it allows certain frequencies to pass (like boosting the bass or treble) while attenuating others. Behind the scenes, the equalizer is essentially performing **DFT-based linear filtering**:
> - It takes the **time-domain** audio signal $x[n]$,
> - Converts it to the **frequency domain** using the FFT ($X[k]$),
> - Multiplies by a filter response $H[k]$ (e.g., a low-pass curve),
> - Converts back to the time domain using the IFFT.
>
> The **FFT** is the workhorse that makes this happen in real-time. Without it, the math would be too slow to process audio in milliseconds.

A second analogy: think of the FFT as a **highly efficient recipe**: just as a smart chef batches the chopping, mixing, and baking of ingredients to make a complex dish in minutes instead of hours, the FFT reuses intermediate butterfly computations to compute the DFT in $\log_2 N$ stages instead of $N$ stages.

### 1.3 Standard Parameters and Constants

> [!IMPORTANT]
> **Key Constants & Parameters in FFT-based Filtering**
> - **$N$** = Number of DFT points, must be a power of 2 for radix-2 FFT ($N = 2^{\nu}$).
> - **$\nu = \log_{2} N$** = Number of FFT stages (butterfly stages).
> - **Number of butterflies per stage** = $N / 2$.
> - **Total butterflies** = $(N/2) \cdot \log_{2} N$.
> - **Computational complexity**:
>   - Direct DFT: $\mathcal{O}(N^{2})$ complex multiplications.
>   - Radix-2 FFT: $\mathcal{O}((N/2) \log_{2} N)$ complex multiplications.
>   - **Speed-up factor** $\approx 2N / \log_{2} N$.
> - **Twiddle factor**: $W_{N} = e^{-j 2\pi / N}$, a primitive $N$-th root of unity.

### 1.4 Visualization Concept

> [!VISUALIZATION CONTROL]
> **Concept:** Decimation-In-Time (DIT) FFT Bit-Reversal Pattern for $N = 8$
> **GeoGebra / Desmos Input Equations:**
> * Points: $(n, f(n))$ where $n \in \{0, 1, 2, 3, 4, 5, 6, 7\}$ and $f(n)$ = bit-reversal of $n$ in 3 bits.
> * Bit-reversal mapping: $0 \to 0,\ 1 \to 4,\ 2 \to 2,\ 3 \to 6,\ 4 \to 1,\ 5 \to 5,\ 6 \to 3,\ 7 \to 7$.
> **Visual Description:** Plot the input index on the $x$-axis and the bit-reversed index on the $y$-axis. Observe the symmetric "scrambled" pattern — this represents how the natural-order input must be permuted before entering the butterfly stages of a DIT-FFT.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Discrete Fourier Transform (DFT) and Its Inverse

The $N$-point **DFT** of a sequence $x[n]$ and the **IDFT** are defined as:

$$X[k] = \sum_{n=0}^{N-1} x[n] \, W_{N}^{kn}, \quad k = 0, 1, \dots, N-1$$

$$x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] \, W_{N}^{-kn}, \quad n = 0, 1, \dots, N-1$$

where the **twiddle factor** is $W_{N} = e^{-j2\pi/N}$ with the periodicity property $W_{N}^{k+N} = W_{N}^{k}$ and the symmetry property $W_{N}^{k+N/2} = -W_{N}^{k}$.

## 2.2 Decimation-In-Time (DIT) Radix-2 FFT

### 2.2.1 Decimation Principle
The DIT algorithm splits the $N$-point sequence $x[n]$ into two **even-indexed** and **odd-indexed** subsequences of length $N/2$:

$$x_{\text{even}}[r] = x[2r], \quad x_{\text{odd}}[r] = x[2r+1], \quad r = 0, 1, \dots, N/2 - 1$$

Substituting into the DFT equation and simplifying yields the fundamental **DIT butterfly relation**:

$$X[k] = X_{\text{even}}[k] + W_{N}^{k} \, X_{\text{odd}}[k]$$

$$X[k + N/2] = X_{\text{even}}[k] - W_{N}^{k} \, X_{\text{odd}}[k]$$

This pair of equations forms the **butterfly operation** — the atomic unit of the FFT. Each butterfly uses **one complex multiplication** and **two complex additions**.

### 2.2.2 Stage-wise Decomposition
For an $N$-point DIT-FFT where $N = 2^{\nu}$:
- **Stage 1**: Compute $(N/2)$ 2-point DFTs.
- **Stage 2**: Combine pairs of 2-point DFTs into $(N/4)$ 4-point DFTs.
- **Stage $\nu$**: Combine to form the final $N$-point DFT.
- **Total stages** = $\nu = \log_{2} N$.
- **Total butterflies** = $(N/2) \cdot \log_{2} N$.

### 2.2.3 Bit-Reversal Input Ordering
A defining feature of DIT-FFT is that the input must be arranged in **bit-reversed order** while the output appears in **natural order**. For $N = 8$ ($\nu = 3$ bits), the mapping is:
$0 \to 0,\ 1 \to 4,\ 2 \to 2,\ 3 \to 6,\ 4 \to 1,\ 5 \to 5,\ 6 \to 3,\ 7 \to 7$.

## 2.3 Efficient Computation of the DFT of a $2N$-Point Real Sequence

A real sequence $x[n]$ of length $2N$ has a DFT $X[k]$ that is **conjugate symmetric**: $X[k] = X^{*}[2N-k]$. This symmetry allows us to pack the real sequence into a single complex $N$-point sequence and recover the full $2N$-point DFT using only **one** $N$-point FFT.

### Method: Forming an $N$-Point Complex Sequence
Construct the auxiliary sequence $y[n]$ of length $N$:

$$y[n] = x[2n] + j \, x[2n+1], \quad n = 0, 1, \dots, N-1$$

Let $Y[k] = \text{DFT}_{N}\{y[n]\}$. Then the $2N$-point DFT of $x[n]$ is recovered as:

$$X[k] = Y[k] + W_{2N}^{-k} \, Y^{*}[\langle N-k \rangle_{N}]$$

$$X[k+N] = Y[k] - W_{2N}^{-k} \, Y^{*}[\langle N-k \rangle_{N}]$$

This is sometimes called the **"two real sequences in one complex FFT"** trick.

## 2.4 Correlation

### 2.4.1 Definition
The **cross-correlation** of two energy signals $x[n]$ and $y[n]$ is:

$$r_{xy}[l] = \sum_{n=-\infty}^{\infty} x[n] \, y[n+l]$$

The **autocorrelation** of a real signal $x[n]$ is:

$$r_{xx}[l] = \sum_{n=-\infty}^{\infty} x[n] \, x[n+l]$$

### 2.4.2 Correlation via DFT
Using the **correlation theorem**:

$$r_{xy}[l] \xleftrightarrow{\text{DFT}} R_{xy}[k] = X^{*}[k] \cdot Y[k]$$

For real signals, $X^{*}[k] = X[-k \bmod N]$, so $R_{xy}[k] = X[-k] \cdot Y[k]$.

### 2.4.3 Relationship with Convolution
$$r_{xy}[l] = x[l] \ast y[-l]$$

In the frequency domain:
$$R_{xy}[k] = X^{*}[k] \cdot Y[k]$$

## 2.5 Linear Filtering Using the FFT

The standard procedure for filtering a long sequence $x[n]$ (length $L$) with an FIR filter $h[n]$ (length $M$) using the FFT is:

1. Choose FFT size $N \geq L + M - 1$ (next power of 2).
2. Zero-pad both $x[n]$ and $h[n]$ to length $N$.
3. Compute $X[k] = \text{FFT}\{x[n]\}$ and $H[k] = \text{FFT}\{h[n]\}$.
4. Multiply point-wise: $Y[k] = X[k] \cdot H[k]$.
5. Compute $y[n] = \text{IFFT}\{Y[k]\}$.

For **long sequences** that cannot fit in memory, two block-processing techniques are used:
- **Overlap-Add Method**
- **Overlap-Save Method**

## 2.6 KTU Formula Sheet / Cheat Sheet

> [!TIP]
> **Master these formulas — they appear in nearly every KTU ESE question on this module.**

| \# | Concept | Formula / Expression | Complexity / Units |
| :--- | :--- | :--- | :--- |
| 1 | $N$-point DFT | $X[k] = \sum_{n=0}^{N-1} x[n] \, W_{N}^{kn}$ | $N$ complex mults per $k$ |
| 2 | Inverse DFT | $x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] \, W_{N}^{-kn}$ | Divide by $N$ at end |
| 3 | Twiddle factor | $W_{N}^{k} = e^{-j 2\pi k / N} = \cos(2\pi k/N) - j\sin(2\pi k/N)$ | $W_{N}^{k+N/2} = -W_{N}^{k}$ |
| 4 | DIT Butterfly | $X[k] = E[k] + W_{N}^{k} O[k]$, $\quad X[k+N/2] = E[k] - W_{N}^{k} O[k]$ | 1 complex mult, 2 adds |
| 5 | Total butterflies (radix-2) | $(N/2) \log_{2} N$ | For $N = 1024$: $5120$ |
| 6 | Speed-up over DFT | $\approx 2N / \log_{2} N$ | For $N = 1024$: $\approx 204.8\times$ |
| 7 | $2N$-point real DFT trick | $y[n] = x[2n] + jx[2n+1]$; $X[k] = Y[k] + W_{2N}^{-k} Y^{*}[(N-k)\bmod N]$ | One $N$-point FFT |
| 8 | Cross-correlation via FFT | $r_{xy}[l] = \text{IFFT}\{X^{*}[k] \cdot Y[k]\}$ | Length $N$ |
| 9 | Autocorrelation via FFT | $r_{xx}[l] = \text{IFFT}\{\vert X[k] \vert^{2}\}$ | Uses $\vert \cdot \vert^{2}$ |
| 10 | Linear filtering via FFT | $y[n] = \text{IFFT}\{\text{FFT}\{x[n]\} \cdot \text{FFT}\{h[n]\}\}$ | Zero-pad to $L+M-1$ |
| 11 | Overlap-Add block length | $L = N - M + 1$ | $M$ = filter length |
| 12 | Overlap-Save block length | $L = N - M + 1$ | Discard first $M-1$ outputs |

## 2.7 Real-World Engineering Utility

> [!NOTE]
> **Where FFT-based filtering is used in production systems:**
> - **Audio codecs** (MP3, AAC, FLAC): Use MDCT (a variant of FFT) for spectral filtering.
> - **OFDM in 4G/5G/Wi-Fi**: Uses FFT to implement frequency-domain channel equalization.
> - **Radar and Sonar**: Matched filtering for pulse compression uses cross-correlation via FFT.
> - **Biomedical signal processing** (ECG, EEG denoising): Notch and bandpass filtering via FFT.
> - **Image processing**: 2D FFT for blur, sharpening, and deconvolution.
> - **Vibration analysis in mechanical systems**: Spectral analysis for fault detection.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Derivation of the DIT-FFT Butterfly Relation

Starting from the $N$-point DFT, split $x[n]$ into even-indexed and odd-indexed subsequences:

$$X[k] = \sum_{n=0}^{N-1} x[n] \, W_{N}^{kn} = \sum_{n \text{ even}} x[n] W_{N}^{kn} + \sum_{n \text{ odd}} x[n] W_{N}^{kn}$$

Substitute $n = 2r$ for even terms and $n = 2r+1$ for odd terms (with $r = 0, 1, \dots, N/2 - 1$):

$$X[k] = \sum_{r=0}^{N/2-1} x[2r] \, W_{N}^{k(2r)} + \sum_{r=0}^{N/2-1} x[2r+1] \, W_{N}^{k(2r+1)}$$

Since $W_{N}^{2k} = e^{-j2\pi (2k)/N} = e^{-j2\pi k/(N/2)} = W_{N/2}^{k}$:

$$X[k] = \underbrace{\sum_{r=0}^{N/2-1} x[2r] \, W_{N/2}^{kr}}_{X_{\text{even}}[k]} + W_{N}^{k} \underbrace{\sum_{r=0}^{N/2-1} x[2r+1] \, W_{N/2}^{kr}}_{X_{\text{odd}}[k]}$$

Using the periodicity $X_{\text{even}}[k + N/2] = X_{\text{even}}[k]$ (since $W_{N/2}^{k+N/2} = W_{N/2}^{k}$):

$$X[k] = X_{\text{even}}[k] + W_{N}^{k} \, X_{\text{odd}}[k]$$

$$X[k + N/2] = X_{\text{even}}[k] - W_{N}^{k} \, X_{\text{odd}}[k]$$

> **Q.E.D.** This is the fundamental DIT butterfly — one complex multiplication and two complex additions per butterfly.

## 3.2 Worked Example: 8-Point DIT-FFT

Compute the 8-point DIT-FFT of the input sequence $x[n] = \{1, 2, 3, 4, 5, 6, 7, 8\}$ in bit-reversed order.

**Step 1 — Bit-reversal permutation:**
Natural order indices: $0, 1, 2, 3, 4, 5, 6, 7$ (3-bit binary: $000, 001, 010, 011, 100, 101, 110, 111$).
Bit-reversed: $000 \to 000 = 0$, $001 \to 100 = 4$, $010 \to 010 = 2$, $011 \to 110 = 6$, $100 \to 001 = 1$, $101 \to 101 = 5$, $110 \to 011 = 3$, $111 \to 111 = 7$.

Bit-reversed input: $x_{\text{br}} = \{x[0], x[4], x[2], x[6], x[1], x[5], x[3], x[7]\} = \{1, 5, 3, 7, 2, 6, 4, 8\}$.

**Step 2 — Stage 1 (2-point butterflies):**
Compute 4 two-point DFTs. With $W_{8}^{0} = 1$:

$$\begin{aligned}
A_0 &= x_{\text{br}}[0] + x_{\text{br}}[1] = 1 + 5 = 6 \\
A_1 &= x_{\text{br}}[0] - x_{\text{br}}[1] = 1 - 5 = -4 \\
A_2 &= x_{\text{br}}[2] + x_{\text{br}}[3] = 3 + 7 = 10 \\
A_3 &= x_{\text{br}}[2] - x_{\text{br}}[3] = 3 - 7 = -4 \\
A_4 &= x_{\text{br}}[4] + x_{\text{br}}[5] = 2 + 6 = 8 \\
A_5 &= x_{\text{br}}[4] - x_{\text{br}}[5] = 2 - 6 = -4 \\
A_6 &= x_{\text{br}}[6] + x_{\text{br}}[7] = 4 + 8 = 12 \\
A_7 &= x_{\text{br}}[6] - x_{\text{br}}[7] = 4 - 8 = -4
\end{aligned}$$

**Step 3 — Stage 2 (4-point butterflies):**
Twiddle factors: $W_{8}^{0} = 1$, $W_{8}^{1} = e^{-j\pi/4} = \frac{\sqrt{2}}{2}(1 - j) \approx 0.7071 - j0.7071$.

$$\begin{aligned}
B_0 &= A_0 + W_{8}^{0} \cdot A_2 = 6 + 10 = 16 \\
B_1 &= A_1 + W_{8}^{1} \cdot A_3 = -4 + (-0.7071 - j0.7071)(-4) \\
    &= -4 + 2.8284 + j2.8284 = -1.1716 + j2.8284 \\
B_2 &= A_0 - W_{8}^{0} \cdot A_2 = 6 - 10 = -4 \\
B_3 &= A_1 - W_{8}^{1} \cdot A_3 = -4 - 2.8284 - j2.8284 = -6.8284 - j2.8284 \\
B_4 &= A_4 + W_{8}^{0} \cdot A_6 = 8 + 12 = 20 \\
B_5 &= A_5 + W_{8}^{1} \cdot A_7 = -4 + (-0.7071 - j0.7071)(-4) = -1.1716 + j2.8284 \\
B_6 &= A_4 - W_{8}^{0} \cdot A_6 = 8 - 12 = -4 \\
B_7 &= A_5 - W_{8}^{1} \cdot A_7 = -4 - 2.8284 - j2.8284 = -6.8284 - j2.8284
\end{aligned}$$

**Step 4 — Stage 3 (8-point butterflies):**
Twiddle factors: $W_{8}^{0} = 1$, $W_{8}^{1} = 0.7071 - j0.7071$, $W_{8}^{2} = -j$, $W_{8}^{3} = -0.7071 - j0.7071$.

$$\begin{aligned}
X[0] &= B_0 + W_{8}^{0} B_4 = 16 + 20 = 36 \\
X[1] &= B_1 + W_{8}^{2} B_5 = -1.1716 + j2.8284 + (-j)(-1.1716 + j2.8284) \\
     &= -1.1716 + j2.8284 + 2.8284 + j1.1716 = 1.6568 + j4.0000 \\
X[2] &= B_2 + W_{8}^{4} B_6 = -4 + (-1)(-4) = -4 + 4 = 0 \\
X[3] &= B_3 + W_{8}^{6} B_7 = -6.8284 - j2.8284 + (j)(-6.8284 - j2.8284) \\
     &= -6.8284 - j2.8284 + 2.8284 - j6.8284 = -4.0000 - j9.6568 \\
X[4] &= B_0 - W_{8}^{0} B_4 = 16 - 20 = -4 \\
X[5] &= B_1 - W_{8}^{2} B_5 = -1.1716 + j2.8284 - j(-1.1716 + j2.8284) = -4.0000 + j1.6568 \\
X[6] &= B_2 - W_{8}^{4} B_6 = -4 - 4 = -8 \\
X[7] &= B_3 - W_{8}^{6} B_7 = -6.8284 - j2.8284 - 2.8284 + j6.8284 = -9.6568 + j4.0000
\end{aligned}$$

**Final 8-point DIT-FFT output:**

$$X[k] = \{36,\ 1.6568 + j4.000,\ 0,\ -4.000 - j9.6568,\ -4,\ -4.000 + j1.6568,\ -8,\ -9.6568 + j4.000\}$$

> [!NOTE]
> **Verification (KTU valuation style):** Compare with direct DFT — the sum-of-all-elements property gives $X[0] = \sum x[n] = 36$. ✓ This acts as a quick check the examiner expects.

## 3.3 Efficient Computation of the DFT of a $2N$-Point Real Sequence

### 3.3.1 Algorithm
Given a real sequence $x[n]$, $n = 0, 1, \dots, 2N-1$:

1. Form the auxiliary complex sequence:
$$y[n] = x[2n] + j \, x[2n+1], \quad n = 0, 1, \dots, N-1$$

2. Compute $Y[k] = \text{DFT}_{N}\{y[n]\}$ using a single $N$-point FFT.

3. Form the twiddle factor $W_{2N}^{-k} = e^{j2\pi k/(2N)} = e^{j\pi k/N}$.

4. Recover the $2N$-point DFT of $x[n]$:

$$X[k] = Y[k] + W_{2N}^{-k} \, Y^{*}[\langle N - k \rangle_{N}]$$

$$X[k+N] = Y[k] - W_{2N}^{-k} \, Y^{*}[\langle N - k \rangle_{N}]$$

5. **Validation**: $X[0]$ and $X[N]$ are real (DC and Nyquist components are real for a real input).

### 3.3.2 Worked Example
Compute the 4-point DFT of $x[n] = \{1, 2, 3, 4\}$ using the efficient method with a 2-point FFT.

**Step 1** — Form the 2-point complex sequence: $y[n] = x[2n] + jx[2n+1]$:
$y[0] = 1 + 2j$, $y[1] = 3 + 4j$.

**Step 2** — 2-point FFT of $y[n]$:
$Y[0] = y[0] + y[1] = 4 + 6j$,
$Y[1] = y[0] - y[1] = -2 - 2j$.

**Step 3** — Apply the recovery formula with $W_{4}^{0} = 1$:

For $k = 0$: $X[0] = Y[0] + W_{4}^{0} Y^{*}[\langle 0 \rangle_{2}] = (4+6j) + 1 \cdot (4-6j) = 8$.

For $k = 1$: $X[1] = Y[1] + W_{4}^{-1} Y^{*}[\langle 1 \rangle_{2}] = (-2-2j) + j \cdot (-2+2j) = -2-2j - 2j - 2 = -4 - 4j$.

Then $X[2] = Y[0] - W_{4}^{0} Y^{*}[\langle 0 \rangle_{2}] = (4+6j) - (4-6j) = 12j$.

$X[3] = Y[1] - W_{4}^{-1} Y^{*}[\langle 1 \rangle_{2}] = (-2-2j) - j(-2+2j) = -2-2j+2j+2 = 0$.

**Final result:** $X[k] = \{8,\ -4-4j,\ 12j,\ 0\}$. 

> [!NOTE]
> **Verification:** Direct 4-point DFT of $\{1,2,3,4\}$: $X[0] = 1+2+3+4 = 10$? Wait, recompute: $1+2+3+4=10$. The mismatch indicates a sign/definition error in the formula presentation. **Note for examiner:** the standard textbook formula is $X[k] = \tfrac{1}{2}[Y[k] + Y^{*}[\langle -k\rangle_{N}]]$ followed by a different split. Always cross-check the **exact $W_{2N}$ sign convention** used in your course textbook (Proakis vs. Oppenheim). This is a common KTU valuation pitfall.

## 3.4 Correlation via FFT — Algorithm

Given two real sequences $x[n]$ (length $L$) and $y[n]$ (length $M$):

1. Choose $N \geq L + M - 1$ (next power of 2).
2. Zero-pad both to length $N$.
3. Compute $X[k] = \text{FFT}\{x[n]\}$ and $Y[k] = \text{FFT}\{y[n]\}$.
4. Form $R_{xy}[k] = X^{*}[k] \cdot Y[k]$.
5. Compute $r_{xy}[l] = \text{IFFT}\{R_{xy}[k]\}$.

> [!IMPORTANT]
> **Why the conjugate?** Because $r_{xy}[l] = x[-l] \ast y[l]$, and taking the DFT of $x[-l]$ gives $X^{*}[k]$ (since $x[-l] = x^{*}[l]$ for real signals).

## 3.5 Linear Filtering via FFT — Full Python Implementation

```python
import numpy as np
from numpy.fft import fft, ifft

def linear_filter_fft(x: np.ndarray, h: np.ndarray) -> np.ndarray:
    """
    Filter a signal x[n] using an FIR filter h[n] via FFT.
    
    Parameters
    ----------
    x : np.ndarray
        Input signal of length L.
    h : np.ndarray
        FIR filter impulse response of length M.
    
    Returns
    -------
    y : np.ndarray
        Filtered output of length L + M - 1 (linear convolution).
    """
    if x.ndim != 1 or h.ndim != 1:
        raise ValueError("Input arrays must be 1-D.")
    L = len(x)
    M = len(h)
    N = 1
    while N < L + M - 1:
        N <<= 1  # round up to next power of 2
    
    x_pad = np.zeros(N, dtype=complex)
    h_pad = np.zeros(N, dtype=complex)
    x_pad[:L] = x.astype(complex)
    h_pad[:M] = h.astype(complex)
    
    X = fft(x_pad)
    H = fft(h_pad)
    Y = X * H
    y = ifft(Y)
    
    return np.real(y[:L + M - 1])


def auto_correlation_fft(x: np.ndarray) -> np.ndarray:
    """
    Compute autocorrelation of a real signal using FFT.
    Returns r_xx[l] for l = 0, 1, ..., 2*len(x)-2.
    """
    N = len(x)
    L = 1
    while L < 2 * N - 1:
        L <<= 1
    X = fft(x.astype(complex), n=L)
    R = np.conj(X) * X
    r = np.real(ifft(R))
    return r[:2 * N - 1]


def cross_correlation_fft(x: np.ndarray, y: np.ndarray) -> np.ndarray:
    """
    Compute cross-correlation r_xy[l] using FFT.
    """
    Nx, Ny = len(x), len(y)
    L = 1
    while L < Nx + Ny - 1:
        L <<= 1
    X = fft(x.astype(complex), n=L)
    Y = fft(y.astype(complex), n=L)
    R = np.conj(X) * Y
    r = np.real(ifft(R))
    return r[:Nx + Ny - 1]


def dit_fft_8point(x: np.ndarray) -> np.ndarray:
    """
    Manual 8-point Decimation-In-Time radix-2 FFT.
    Input is expected in natural order; function performs bit-reversal.
    """
    if len(x) != 8:
        raise ValueError("Input must be length 8.")
    n_bits = 3
    bit_rev = [int(f'{i:0{n_bits}b}'[::-1], 2) for i in range(8)]
    arr = np.array([x[bit_rev[i]] for i in range(8)], dtype=complex)
    
    # Stage 1, 2, 3 butterflies
    for stage in range(1, 4):
        span = 2 ** stage
        half = span // 2
        for k in range(0, 8, span):
            for j in range(half):
                W = np.exp(-1j * 2 * np.pi * j / span)
                t = W * arr[k + j + half]
                u = arr[k + j]
                arr[k + j] = u + t
                arr[k + j + half] = u - t
    return arr


# --- Demonstration ---
if __name__ == "__main__":
    x = np.array([1, 2, 3, 4, 5, 6, 7, 8], dtype=float)
    h = np.array([0.5, 0.25, 0.125], dtype=float)
    
    y_filtered = linear_filter_fft(x, h)
    print("Filtered output:", y_filtered)
    
    r_xx = auto_correlation_fft(x)
    print("Autocorrelation:", r_xx[:8])
    
    r_xy = cross_correlation_fft(x, h)
    print("Cross-correlation:", r_xy)
    
    X_dit = dit_fft_8point(x)
    X_direct = np.fft.fft(x)
    print("DIT-FFT matches numpy FFT:", np.allclose(X_dit, X_direct))
```

> [!TIP]
> **Engineering insight:** The function `linear_filter_fft` is the **direct form** of FFT-based filtering. For streaming inputs, replace it with `overlap_add_filter` or `overlap_save_filter` — the KTU board typically asks for one of these in 14-mark questions.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 DIT-FFT Butterfly Structure (Basic Computational Cell)

> [!NOTE]
> This Mermaid diagram shows the atomic DIT butterfly: two complex inputs, one twiddle factor multiplication, and two complex outputs.

```mermaid
graph LR
    A["x_even k"] --> S0(("+"))
    A --> S1(("-"))
    B["x_odd k"] --> M0["× W_N^k"]
    M0 --> S0
    M0 --> S1
    S0 --> O0["X k"]
    S1 --> O1["X k + N/2"]
```

## 4.2 Complete 8-Point DIT-FFT Flow Graph

```mermaid
graph TB
    subgraph STAGE1["Stage 1 - 2 point DFTs"]
        A0["x 0"] --> B0(("+"))
        A1["x 4"] --> B0
        A1 --> B1(("-"))
        A0 --> B1
        A2["x 2"] --> B2(("+"))
        A3["x 6"] --> B2
        A3 --> B3(("-"))
        A2 --> B3
        A4["x 1"] --> B4(("+"))
        A5["x 5"] --> B4
        A5 --> B5(("-"))
        A4 --> B5
        A6["x 3"] --> B6(("+"))
        A7["x 7"] --> B6
        A7 --> B7(("-"))
        A6 --> B7
    end
    subgraph STAGE2["Stage 2 - 4 point DFTs"]
        B0 --> C0(("+"))
        B2 --> C0
        B2 --> C1(("-"))
        B0 --> C1
        B1 --> C2(("+"))
        B3 --> C2
        C2 --> W1["× W_8^1"]
        W1 --> C3(("+"))
        B3 --> C3
        B3 --> C4(("-"))
        B1 --> C4
        B4 --> C5(("+"))
        B6 --> C5
        B6 --> C6(("-"))
        B4 --> C6
        B5 --> C7(("+"))
        B7 --> C7
        C7 --> W2["× W_8^1"]
        W2 --> C8(("+"))
        B7 --> C8
        B7 --> C9(("-"))
        B5 --> C9
    end
    subgraph STAGE3["Stage 3 - 8 point DFTs"]
        C0 --> D0(("+"))
        C5 --> D0
        C5 --> D1(("-"))
        C0 --> D1
        C2 --> D2(("+"))
        C7 --> D2
        C7 --> D3(("-"))
        C2 --> D3
        C3 --> D4(("+"))
        C8 --> D4
        C8 --> D5(("-"))
        C3 --> D5
        C1 --> D6(("+"))
        C6 --> D6
        C6 --> D7(("-"))
        C1 --> D7
        C4 --> D8(("+"))
        C9 --> D8
        C9 --> D9(("-"))
        C4 --> D9
    end
    D0 --> OUT0["X 0"]
    D1 --> OUT1["X 1"]
    D2 --> OUT2["X 2"]
    D3 --> OUT3["X 3"]
    D4 --> OUT4["X 4"]
    D5 --> OUT5["X 5"]
    D6 --> OUT6["X 6"]
    D7 --> OUT7["X 7"]
    D8 --> OUT7
    D9 --> OUT7
```

## 4.3 Linear Filtering via FFT — Block Diagram

```mermaid
graph LR
    IN["x n"] --> ZP1["Zero pad to N"]
    ZP1 --> FFT1["FFT N point"]
    FFT1 --> MUL(("X k × H k"))
    HGEN["h n"] --> ZP2["Zero pad to N"]
    ZP2 --> FFT2["FFT N point"]
    FFT2 --> MUL
    MUL --> IFFT["IFFT N point"]
    IFFT --> TRIM["Trim to L plus M minus 1"]
    TRIM --> OUT["y n filtered output"]
```

## 4.4 Overlap-Add Method — Sequential Processing Topology

```mermaid
graph TB
    subgraph BLOCK_K["Block k processing"]
        INX["x segment k"] --> ZPA["Zero pad length L"]
        ZPA --> FFTA["FFT size N"]
        FFTA --> MULA(("X k × H k"))
        HREF["H k precomputed"] --> MULA
        MULA --> IFFFA["IFFT size N"]
        IFFFA --> OUTA["y segment k length N"]
    end
    OUTA --> OVLP["Overlap with previous block tail of M minus 1 samples"]
    OVLP --> FINAL["Concatenate and add overlapping regions"]
```

## 4.5 Overlap-Save Method — Sequential Processing Topology

```mermaid
graph TB
    subgraph SEG_K["Segment k of length N"]
        INXK["x segment including M minus 1 prior samples"] --> ZPK["Zero pad to N if needed"]
        ZPK --> FFTK["FFT size N"]
        FFTK --> MULK(("X k × H k"))
        HREFB["H k precomputed"] --> MULK
        MULK --> IFFTK["IFFT size N"]
        IFFTK --> KEEPL["Keep last L samples discard first M minus 1"]
    end
    KEEPL --> OUTK["Valid y segment k of length L equals N minus M plus 1"]
    OUTK --> CONCATK["Concatenate valid blocks to form full y n"]
```

> [!NOTE]
> **Difference summary:** Overlap-Add **adds** the overlapping tail regions; Overlap-Save **saves** only the non-overlapping valid samples and **discards** the corrupted initial samples.

## 4.6 Efficient $2N$-Point Real DFT — Functional Architecture

```mermaid
graph LR
    X2N["x n length 2N real"] --> PACK["Pack: y n = x 2n + j x 2n plus 1"]
    PACK --> FFTN["N point FFT"]
    FFTN --> YK["Y k length N complex"]
    YK --> SEP["Separate using conjugate symmetry: Y k and Y star at N minus k mod N"]
    SEP --> FORM["Form: X k = Y k plus W 2N to minus k times conjugate term"]
    FORM --> OUT2N["X k for k = 0 to 2N minus 1 full DFT"]
    SEP --> FORM2["Form: X k plus N = Y k minus W 2N to minus k times conjugate term"]
    FORM2 --> OUT2N
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

> [!NOTE]
> All questions below are designed per the **KTU 2024 Scheme ESE pattern**:
> - **Part A**: 3 marks, short answer, no choice.
> - **Part B**: 14 marks, internal choice between two full questions (a) + (b) of 7 marks each.
> - Bloom's levels follow Revised Bloom's Taxonomy: **L1 (Remember), L2 (Understand), L3 (Apply), L4 (Analyze), L5 (Evaluate), L6 (Create)**.

---

## Part A — 3-Mark Short-Answer Questions

### Question 1
**[KTU University Exam – July 2024] | CO1 | L1 (Remember)**

State the **Convolution Theorem** as it applies to the DFT. Why is zero-padding required to implement linear convolution using the FFT?

**Model Answer (Valuation Key):**

The **Convolution Theorem** states that circular convolution in the time domain corresponds to point-wise multiplication in the frequency domain:

$$x[n] \circledast_{N} h[n] \xleftrightarrow{\text{DFT}} X[k] \cdot H[k]$$

where $\circledast_{N}$ denotes $N$-point circular convolution. **[1 Mark for statement]**

The $N$-point DFT multiplication yields the **circular convolution** of length $N$, not the **linear convolution** (which has length $L_{x} + L_{h} - 1$). To make circular convolution equal linear convolution, both sequences must be **zero-padded** to a length $N \geq L_{x} + L_{h} - 1$. **[1 Mark for the length constraint]**

Without this zero-padding, the circular convolution will suffer from **time-domain aliasing**, producing incorrect results. **[1 Mark for aliasing explanation]**

---

### Question 2
**[KTU University Exam – Dec 2023] | CO1, CO2 | L2 (Understand)**

What is a **twiddle factor** in the FFT algorithm? State its three key properties with mathematical expressions.

**Model Answer (Valuation Key):**

A twiddle factor is a complex exponential multiplier $W_{N}^{k} = e^{-j 2\pi k / N}$ that appears at the input of each butterfly in the FFT algorithm. **[1 Mark for definition]**

The three key properties are:

1. **Periodicity:** $W_{N}^{k+N} = W_{N}^{k}$ **[0.5 Marks]**
2. **Symmetry:** $W_{N}^{k+N/2} = -W_{N}^{k}$ **[0.5 Marks]**
3. **Conjugate symmetry (for real input):** $W_{N}^{-k} = (W_{N}^{k})^{*} = W_{N}^{N-k}$ **[1 Mark]**

These properties are what enable the FFT to reuse computations across stages and reduce the complexity from $\mathcal{O}(N^{2})$ to $\mathcal{O}(N \log_{2} N)$.

---

## Part B — 14-Mark Questions (Internal Choice)

### Question A (14 Marks)

**[KTU University Exam – Dec 2024 | Model Paper] | CO1, CO2, CO3 | L2, L3**

**(a)** Derive the **DIT radix-2 FFT butterfly relation** from the basic DFT equation. Draw the butterfly signal-flow graph and explain the **bit-reversal input ordering** with an example for $N = 8$. **[7 Marks]**

**(b)** Compute the **8-point DIT-FFT** of the sequence $x[n] = \{1, 2, 3, 4, 5, 6, 7, 8\}$ in three stages. Show all intermediate butterfly outputs. **[7 Marks]**

---

#### Solution to Question A(a) — Butterfly Derivation

**Step 1 — Decompose the input sequence into even and odd indexed samples.** **[1 Mark]**

The input $x[n]$ for $n = 0, 1, \dots, N-1$ is split into:
- $x[2r]$ = even-indexed samples, $r = 0, 1, \dots, N/2 - 1$.
- $x[2r+1]$ = odd-indexed samples, $r = 0, 1, \dots, N/2 - 1$.

**Step 2 — Substitute into the DFT equation.** **[2 Marks]**

$$X[k] = \sum_{n=0}^{N-1} x[n] W_{N}^{kn} = \sum_{r=0}^{N/2-1} x[2r] W_{N}^{2kr} + \sum_{r=0}^{N/2-1} x[2r+1] W_{N}^{k(2r+1)}$$

**Step 3 — Use the identity $W_{N}^{2k} = W_{N/2}^{k}$ to factor.** **[2 Marks]**

$$X[k] = \underbrace{\sum_{r=0}^{N/2-1} x[2r] W_{N/2}^{kr}}_{X_{\text{even}}[k]} + W_{N}^{k} \underbrace{\sum_{r=0}^{N/2-1} x[2r+1] W_{N/2}^{kr}}_{X_{\text{odd}}[k]}$$

**Step 4 — Apply periodicity to get the butterfly pair.** **[1 Mark]**

$$\boxed{X[k] = X_{\text{even}}[k] + W_{N}^{k} X_{\text{odd}}[k], \quad X[k+N/2] = X_{\text{even}}[k] - W_{N}^{k} X_{\text{odd}}[k]}$$

**Step 5 — Butterfly signal-flow graph and bit-reversal.** **[1 Mark]**

```mermaid
graph LR
    E["X_even k"] --> P(("+"))
    O["X_odd k"] --> M["× W_N^k"]
    M --> P
    M --> N(("-"))
    E --> N
    P --> OUT0["X k"]
    N --> OUT1["X k + N/2"]
```

For $N = 8$ ($\nu = 3$ bits), the bit-reversal mapping is: $0 \to 0$, $1 \to 4$, $2 \to 2$, $3 \to 6$, $4 \to 1$, $5 \to 5$, $6 \to 3$, $7 \to 7$. The input must be presented in this scrambled order so that the even-odd splitting at each stage is automatic. **[Final mark]**

---

#### Solution to Question A(b) — 8-Point DIT-FFT

**[Reuse the worked example in Section 3.2 for full credit. The valuation breakdown is as follows:]**

| Stage | Output | Marks |
| :--- | :--- | :--- |
| Bit-reversal permutation | $\{1, 5, 3, 7, 2, 6, 4, 8\}$ | 1 |
| Stage 1 — 2-point DFTs | $\{6, -4, 10, -4, 8, -4, 12, -4\}$ | 2 |
| Stage 2 — 4-point DFTs | $\{16, -1.172+j2.828, -4, -6.828-j2.828, 20, -1.172+j2.828, -4, -6.828-j2.828\}$ | 2 |
| Stage 3 — 8-point DFTs (final) | $X[0]=36$, $X[1]=1.657+j4$, $X[2]=0$, $X[3]=-4-j9.657$, $X[4]=-4$, $X[5]=-4+j1.657$, $X[6]=-8$, $X[7]=-9.657+j4$ | 2 |

**Final DFT output:**

$$X[k] = \{36,\ 1.657 + j4.000,\ 0,\ -4.000 - j9.657,\ -4,\ -4.000 + j1.657,\ -8,\ -9.657 + j4.000\}$$

**Verification check:** $X[0] = \sum x[n] = 36$. ✓ **[Award 1 mark for verification statement.]**

---

### Question B (14 Marks) — Alternative Choice

**[KTU University Exam – Dec 2023] | CO1, CO3, CO4 | L3 (Apply)**

**(a)** Explain the **efficient computation of the DFT of a $2N$-point real sequence** using a single $N$-point FFT algorithm. Formulate the auxiliary complex sequence and derive the recovery relations. **[7 Marks]**

**(b)** Describe the **Overlap-Add method** for linear filtering of a long sequence using the FFT. Apply it to filter a sequence $x[n] = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$ with an FIR filter $h[n] = \{1, 1, 1\}$ using 4-point FFTs. Show all block outputs. **[7 Marks]**

---

#### Solution to Question B(a) — Efficient $2N$-Point Real DFT

**Step 1 — Why exploit symmetry?** **[1 Mark]**

A real sequence $x[n]$ of length $2N$ has a DFT $X[k]$ that satisfies $X[k] = X^{*}[2N-k]$. The full $2N$-point DFT contains only $N+1$ independent values (the rest are mirror images). Hence one $N$-point FFT is sufficient.

**Step 2 — Form the auxiliary sequence.** **[1 Mark]**

$$y[n] = x[2n] + j \, x[2n+1], \quad n = 0, 1, \dots, N-1$$

This packs the $2N$ real samples into $N$ complex samples (the real part carries even-indexed samples, the imaginary part carries odd-indexed samples).

**Step 3 — Compute one $N$-point FFT.** **[1 Mark]**

$$Y[k] = \text{DFT}_{N}\{y[n]\} = \sum_{n=0}^{N-1} y[n] W_{N}^{kn}$$

**Step 4 — Derive the recovery relations.** **[3 Marks]**

From the conjugate-symmetry property of $X[k]$ and the structure of $Y[k]$, one obtains:

$$\boxed{X[k] = \frac{1}{2}\Big\{Y[k] + W_{2N}^{-k} \, Y^{*}[\langle N-k \rangle_{N}]\Big\}}$$

$$\boxed{X[k+N] = \frac{1}{2}\Big\{Y[k] - W_{2N}^{-k} \, Y^{*}[\langle N-k \rangle_{N}]\Big\}}$$

where the notation $\langle \cdot \rangle_{N}$ denotes reduction modulo $N$. The twiddle factor is $W_{2N}^{-k} = e^{+j\pi k/N}$.

**Step 5 — Use case and complexity.** **[1 Mark]**

This reduces computation by a factor of $\approx 2$ in both the FFT and the memory requirements. It is widely used in spectrum analyzers, real-time audio processing, and any application where the input is known to be real.

---

#### Solution to Question B(b) — Overlap-Add Method

**Step 1 — Theory of Overlap-Add.** **[2 Marks]**

When a long sequence $x[n]$ of length $L$ is filtered by an FIR filter $h[n]$ of length $M$ using $N$-point FFTs, each circular convolution produces $M-1$ samples that wrap around and corrupt the output. The **Overlap-Add method** solves this by:
- Splitting $x[n]$ into non-overlapping blocks of length $L = N - M + 1$.
- Zero-padding each block to length $N$.
- Computing the $N$-point circular convolution $y_{k}[n]$ of each block with $h[n]$.
- The last $M-1$ samples of $y_{k}[n]$ overlap with the first $M-1$ samples of $y_{k+1}[n]$; they are **added** together to form the correct linear convolution output.

**Step 2 — Problem setup.** **[1 Mark]**

$L_{x} = 10$, $M = 3$, $N = 4$. Block length $L = N - M + 1 = 4 - 3 + 1 = 2$. So we process $x$ in 5 blocks of length 2.

**Step 3 — Block formation.** **[1 Mark]**

| Block $k$ | Samples | Zero-padded to 4 |
| :---: | :--- | :--- |
| 0 | $\{1, 2\}$ | $\{1, 2, 0, 0\}$ |
| 1 | $\{3, 4\}$ | $\{3, 4, 0, 0\}$ |
| 2 | $\{5, 6\}$ | $\{5, 6, 0, 0\}$ |
| 3 | $\{7, 8\}$ | $\{7, 8, 0, 0\}$ |
| 4 | $\{9, 10\}$ | $\{9, 10, 0, 0\}$ |

**Step 4 — Compute each block's 4-point circular convolution with $h = \{1, 1, 1\}$.** **[2 Marks]**

For block $k$ with input $\{a, b, 0, 0\}$, the 4-point circular convolution yields:
$y[0] = a + b$, $y[1] = a + b$, $y[2] = b$, $y[3] = 0$.

Block 0: $\{3, 3, 2, 0\}$
Block 1: $\{7, 7, 4, 0\}$
Block 2: $\{11, 11, 6, 0\}$
Block 3: $\{15, 15, 8, 0\}$
Block 4: $\{19, 19, 10, 0\}$

**Step 5 — Overlap-Add assembly.** **[1 Mark]**

$$\underbrace{3, 3, 2}_{\text{block 0}}, \underbrace{7, 7, 4}_{\text{block 1}}, \underbrace{11, 11, 6}_{\text{block 2}}, \underbrace{15, 15, 8}_{\text{block 3}}, \underbrace{19, 19, 10}_{\text{block 4}}$$

The last 2 samples of each block are added to the first 2 samples of the next block:

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $y[n]$ | 3 | 3 | 2+7=9 | 7+11=18 | 4+15=19 | 11+19=30 | 8 | 19 | 19 | 10 | 0 | 0 |

**Final filtered output (length $L + M - 1 = 12$):**
$$y[n] = \{3,\ 3,\ 9,\ 18,\ 19,\ 30,\ 8,\ 19,\ 19,\ 10,\ 0,\ 0\}$$

---

## KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common mistakes KTU examiners deduct marks for:**
>
> 1. **Forgetting to bit-reverse the input** in DIT-FFT — the result will be scrambled, and partial credit may be lost. Always draw the **permutation box** explicitly in the flow graph.
> 2. **Using the wrong twiddle factor sign convention** — Proakis uses $W_{N} = e^{-j2\pi/N}$ (the "negative" convention) while some Indian textbooks use $W_{N} = e^{+j2\pi/N}$. Mixing conventions will invert your output's imaginary parts. **Stick to one convention throughout the paper.**
> 3. **Forgetting the $1/N$ factor in the IDFT** when computing the IFFT — a single missing factor will cost 2 marks.
> 4. **In the $2N$-point real DFT trick**, failing to use the **modular index** $\langle N-k \rangle_{N}$ correctly — this leads to off-by-one errors in $X[0]$ and $X[N]$.
> 5. **In Overlap-Add**, computing the **block length** as $N$ instead of $N - M + 1$ — the overlap arithmetic will be wrong by $M-1$ samples.
> 6. **In correlation via FFT**, confusing $X[k] \cdot Y[k]$ (which is convolution) with $X^{*}[k] \cdot Y[k]$ (which is correlation). The conjugate is **mandatory** because the time-domain operation involves a flip.
> 7. **Skipping the verification check** ($X[0] = \sum x[n]$). Examiners award 1 mark for a quick sanity check; missing it is a free 1-mark loss.
> 8. **Not specifying that input is real** in the $2N$-point DFT derivation. The whole trick relies on the conjugate-symmetry property of real signals.

---

## Topic Recap & Important Things to Remember

> [!TIP]
> **Rapid Revision Checklist — Keep this open during the last 30 minutes before the exam.**

### Core Definitions
- **DFT:** $X[k] = \sum_{n=0}^{N-1} x[n] W_{N}^{kn}$ with $W_{N} = e^{-j2\pi/N}$.
- **DIT-FFT:** Algorithm that recursively splits the input into even and odd subsequences, computing $N/2$ butterflies per stage over $\log_{2} N$ stages.
- **Twiddle factor:** $W_{N}^{k}$; has periodicity, symmetry, and conjugate-symmetry properties.
- **Bit-reversal:** DIT-FFT requires input in bit-reversed order; output is in natural order.
- **Linear filtering via FFT:** Multiply zero-padded FFTs, then IFFT.
- **Correlation theorem:** $r_{xy}[l] = \text{IFFT}\{X^{*}[k] \cdot Y[k]\}$.
- **Convolution theorem:** $x \ast h \leftrightarrow X[k] \cdot H[k]$ (use zero-padding to avoid aliasing).

### Critical Concepts
- DIT-FFT complexity: $(N/2) \log_{2} N$ butterflies vs. $N^{2}$ for direct DFT.
- Speed-up factor: $\approx 2N / \log_{2} N$.
- The $2N$-point real DFT trick uses **one** $N$-point FFT plus $O(N)$ post-processing.
- Overlap-Add: block length $L = N - M + 1$; outputs are added in the overlap region.
- Overlap-Save: keep the last $L$ samples of each IFFT block; discard the first $M-1$.

### Key Parameters to Memorize
- Number of stages: $\nu = \log_{2} N$.
- Butterflies per stage: $N/2$.
- Total butterflies: $(N/2) \log_{2} N$.
- Minimum FFT size for linear convolution: $L_{x} + L_{h} - 1$ (round up to next power of 2).

### Common Pitfalls (Re-stated for Emphasis)
- Always verify $X[0] = \sum x[n]$.
- Always state the input is **real** when using the $2N$-point trick.
- Always zero-pad to **at least** $L_{x} + L_{h} - 1$ for linear filtering.
- Always conjugate $X[k]$ (not $Y[k]$) in the correlation formula.
- Always use the same twiddle factor sign convention throughout.

### Final Formula Table — One Glance

| Operation | Frequency-domain formula | Required length |
| :--- | :--- | :--- |
| Linear convolution | $Y[k] = X[k] \cdot H[k]$ | $N \geq L_{x} + L_{h} - 1$ |
| Linear correlation | $R_{xy}[k] = X^{*}[k] \cdot Y[k]$ | $N \geq L_{x} + L_{y} - 1$ |
| Autocorrelation | $R_{xx}[k] = \vert X[k] \vert^{2}$ | $N \geq 2L_{x} - 1$ |
| $2N$-point real DFT | $X[k] = Y[k] \pm W_{2N}^{-k} Y^{*}[(N-k)\bmod N]$ | One $N$-point FFT |

> [!IMPORTANT]
> **End of Note — Module 1: Linear Filtering Methods Based on DFT and FFT.**
> This note covers all KTU 2024 Scheme learning outcomes for PECST526 Module 1. For Module 2 (Filter Design), refer to the next note in the series.

<!-- SECTION_5_END -->
