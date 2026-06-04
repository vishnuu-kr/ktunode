---
title: "Frequency domain sampling, Discrete Fourier transform (DFT) - DFT pair, properties of DFT, frequency response analysis of signals using the DFT, circular convolution using DFT, linear filtering based on DFT."
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 1: Introduction to DSP and Discrete Fourier transform:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3665b"
status: "completed"
scrapedAt: "2026-05-23T16:26:34.986Z"
---
# Digital Signal Processing: Module 1 - Introduction to DSP and Discrete Fourier Transform

## Introduction

This module provides a foundational understanding of Digital Signal Processing (DSP) by introducing the concept of the Discrete Fourier Transform (DFT) and its applications. We will explore how to analyze signals in the frequency domain and perform operations like filtering and convolution using the DFT.

### Learning Outcomes:

*   Understand the concept of frequency domain sampling.
*   Define and compute the Discrete Fourier Transform (DFT) and its inverse.
*   Understand and apply the properties of the DFT.
*   Analyze the frequency response of signals using the DFT.
*   Perform circular convolution of sequences using the DFT.
*   Understand and implement linear filtering using the DFT.

### Course Outcomes Alignment:

*   **CO1: Analyse discrete-time systems using DFT (Knowledge Level: K2)** - This module directly addresses this outcome by detailing how the DFT is used for frequency domain analysis and processing.
*   **CO2: Realise IIR and FIR filters (Knowledge Level: K3)** - While the realization of filters is a later topic, understanding linear filtering via DFT is a prerequisite.
*   **CO3: Design of IIR and FIR filters (Knowledge Level: K3)** - Similar to CO2, this module lays the groundwork for filter design by introducing frequency domain analysis tools.
*   **CO4: Analyse effect of word length in digital filters (Knowledge Level: K3)** - This outcome is not directly covered in this introductory module, but the understanding of frequency representation is essential for later analysis.

---

## 1. Frequency Domain Sampling

**Concept:**

In Digital Signal Processing, we often analyze signals in the frequency domain, which represents the signal's content at different frequencies. The Discrete Fourier Transform (DFT) allows us to obtain this frequency representation of a discrete-time signal.

**Key Idea:**

When we sample a continuous-time signal in the time domain, we obtain a discrete-time signal. Similarly, when we consider a finite-length discrete-time signal and compute its DFT, we are essentially **sampling the frequency spectrum** of the underlying continuous-time signal (or a periodic extension of the discrete-time signal's spectrum).

**Details:**

*   If a discrete-time signal $x[n]$ is of length $N$ (i.e., $x[n]$ is non-zero for $0 \le n \le N-1$), its DFT, $X[k]$, will also be of length $N$.
*   The DFT gives us samples of the frequency spectrum at discrete frequencies $k \frac{2\pi}{N}$ for $k = 0, 1, 2, \dots, N-1$.
*   These samples are taken at uniformly spaced points in the normalized angular frequency range $[0, 2\pi)$.

**Important Point to Remember:**

The DFT provides a sampled version of the continuous-time Fourier Transform's spectrum. The resolution of this sampling in the frequency domain is determined by the length of the time-domain signal, $N$. A longer time-domain signal provides more frequency samples and thus a finer frequency resolution.

---

## 2. Discrete Fourier Transform (DFT) - DFT Pair

**Definition:**

The Discrete Fourier Transform (DFT) converts a finite-length sequence of $N$ samples in the time domain, $x[n]$, into a finite-length sequence of $N$ samples in the frequency domain, $X[k]$.

**DFT Pair (Forward Transform):**

For a finite-length sequence $x[n]$ of length $N$, its DFT $X[k]$ is defined as:

$$ X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi kn}{N}} \quad \text{for } k = 0, 1, \dots, N-1 $$

Where:
*   $x[n]$ is the time-domain sequence.
*   $X[k]$ is the frequency-domain sequence (the DFT of $x[n]$).
*   $N$ is the length of the sequence.
*   $k$ is the frequency index.
*   $e^{-j \frac{2\pi kn}{N}}$ is the complex exponential, often denoted as $W_N^{kn}$, where $W_N = e^{-j \frac{2\pi}{N}}$ is the "twiddle factor".

**Inverse DFT (IDFT) Pair (Inverse Transform):**

The Inverse Discrete Fourier Transform (IDFT) converts a finite-length sequence of $N$ samples in the frequency domain, $X[k]$, back into a finite-length sequence of $N$ samples in the time domain, $x[n]$.

$$ x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j \frac{2\pi kn}{N}} \quad \text{for } n = 0, 1, \dots, N-1 $$

**Example:**

Let $x[n] = \{1, 2\}$ be a sequence of length $N=2$.

**DFT Calculation:**

*   For $k=0$:
    $X[0] = \sum_{n=0}^{1} x[n] e^{-j \frac{2\pi (0)n}{2}} = x[0]e^0 + x[1]e^0 = 1(1) + 2(1) = 3$

*   For $k=1$:
    $X[1] = \sum_{n=0}^{1} x[n] e^{-j \frac{2\pi (1)n}{2}} = x[0]e^0 + x[1]e^{-j \pi} = 1(1) + 2(-1) = 1 - 2 = -1$

So, the DFT of $x[n] = \{1, 2\}$ is $X[k] = \{3, -1\}$.

**IDFT Calculation (to verify):**

*   For $n=0$:
    $x[0] = \frac{1}{2} \sum_{k=0}^{1} X[k] e^{j \frac{2\pi (0)k}{2}} = \frac{1}{2} (X[0]e^0 + X[1]e^0) = \frac{1}{2} (3(1) + (-1)(1)) = \frac{1}{2} (2) = 1$

*   For $n=1$:
    $x[1] = \frac{1}{2} \sum_{k=0}^{1} X[k] e^{j \frac{2\pi (1)k}{2}} = \frac{1}{2} (X[0]e^0 + X[1]e^{j \pi}) = \frac{1}{2} (3(1) + (-1)(-1)) = \frac{1}{2} (3+1) = \frac{1}{2} (4) = 2$

The IDFT correctly reconstructs the original sequence $x[n] = \{1, 2\}$.

**Reference:**
*   Proakis & Manolakis, 4th Ed., Chapter 7: Discrete Fourier Transform.

---

## 3. Properties of the DFT

The DFT possesses several useful properties that simplify signal processing operations.

### Property 1: Linearity

If $y[n] = ax_1[n] + bx_2[n]$, then $Y[k] = aX_1[k] + bX_2[k]$.
*   **Explanation:** The DFT is a linear transformation. This means the DFT of a sum of sequences is the sum of their DFTs, and scaling a sequence scales its DFT by the same factor.
*   **Application:** Useful for breaking down complex signals into simpler components or for combining processed signals.

### Property 2: Time Shifting

If $y[n] = x[n-n_0]$, then $Y[k] = X[k] e^{-j \frac{2\pi kn_0}{N}}$.
*   **Explanation:** Shifting a sequence in the time domain corresponds to multiplying its DFT by a complex exponential, which represents a linear phase shift in the frequency domain.
*   **Important Note:** This is circular time shifting, meaning $x[n-n_0]$ is computed modulo $N$.

### Property 3: Frequency Shifting

If $y[n] = x[n] e^{j \frac{2\pi k_0n}{N}}$, then $Y[k] = X[k-k_0]$.
*   **Explanation:** Multiplying a sequence by a complex exponential in the time domain corresponds to shifting its DFT in the frequency domain.
*   **Important Note:** This is circular frequency shifting, meaning $X[k-k_0]$ is computed modulo $N$.

### Property 4: Symmetry

If $x[n]$ is real, then $X[k]$ is conjugate symmetric: $X[N-k] = X^*[k]$.
*   **Explanation:** For real signals, the magnitude spectrum is even, and the phase spectrum is odd. This means we only need to compute the DFT for $k = 0, 1, \dots, N/2$ (for even $N$) to get the full spectrum.

### Property 5: Parseval's Theorem

$$ \sum_{n=0}^{N-1} |x[n]|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2 $$
*   **Explanation:** This theorem relates the total energy of a signal in the time domain to its energy in the frequency domain. It's a crucial tool for power and energy calculations.

### Property 6: Convolution

If $y[n] = x[n] * h[n]$ (linear convolution), and $x[n]$ and $h[n]$ have lengths $N_x$ and $N_h$ respectively, then $Y[k] = X[k] H[k]$ *if* $y[n]$ is computed using circular convolution with $N \ge N_x + N_h - 1$.
*   **Explanation:** Convolution in the time domain becomes multiplication in the frequency domain. This is a fundamental property that makes the DFT extremely powerful for filtering.
*   **Crucial Point:** To perform linear convolution using the DFT, we need to zero-pad both sequences to a length $N$ that is at least $N_x + N_h - 1$. This ensures that the circular convolution result is identical to the linear convolution result.

### Property 7: Multiplication

If $y[n] = x[n] w[n]$, then $Y[k] = \frac{1}{N} \sum_{l=0}^{N-1} X[l] W[k-l]$.
*   **Explanation:** Multiplication in the time domain corresponds to circular convolution of their DFTs in the frequency domain. This is the dual of the convolution property.

**Reference:**
*   Proakis & Manolakis, 4th Ed., Chapter 7: Discrete Fourier Transform.
*   Oppenheim & Schafer, 2nd Ed., Chapter 7: DFT.

---

## 4. Frequency Response Analysis of Signals using the DFT

The DFT allows us to analyze the frequency content of a signal, which is a key aspect of understanding its behavior and how it might be processed.

**Key Concept:**

The DFT of a finite-length signal $x[n]$ gives us discrete samples of its frequency spectrum, $X[k]$. These samples represent the amplitude and phase of the signal at specific frequencies $f_k = k \frac{F_s}{N}$, where $F_s$ is the sampling frequency in the time domain.

**Procedure:**

1.  **Obtain a finite-length segment of the signal:** If the signal is continuous or infinitely long, take a segment of $N$ samples, $x[n]$ for $n=0, 1, \dots, N-1$.
2.  **Compute the DFT:** Calculate $X[k]$ using the DFT formula:
    $$ X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi kn}{N}} $$
3.  **Analyze the magnitude and phase:**
    *   **Magnitude Spectrum:** $|X[k]|$ shows the amplitude of each frequency component present in the signal. Peaks in the magnitude spectrum indicate dominant frequencies.
    *   **Phase Spectrum:** $\angle X[k]$ shows the phase of each frequency component. This is important for understanding how the signal's components are aligned in time.
4.  **Interpret the results:**
    *   The frequencies are in the range $[0, F_s)$, with discrete bins at $0, \frac{F_s}{N}, \frac{2F_s}{N}, \dots, \frac{(N-1)F_s}{N}$.
    *   Due to aliasing, frequencies above $F_s/2$ appear as frequencies below $F_s/2$ (symmetric around $F_s/2$). For real signals, the spectrum is symmetric, so we often focus on the range $[0, F_s/2]$.

**Example:**

Consider a signal that is a sum of two sinusoids: $x[n] = \cos(2\pi \frac{10}{100}n) + 0.5\sin(2\pi \frac{25}{100}n)$, with $F_s = 100$ Hz. Let's analyze a segment of $N=100$ samples.

*   The first sinusoid has a frequency of 10 Hz.
*   The second sinusoid has a frequency of 25 Hz.

When we compute the DFT of a 100-sample segment, we expect to see peaks in the magnitude spectrum at $k$ values corresponding to these frequencies:
*   For 10 Hz: $k = \frac{10 \text{ Hz}}{100 \text{ Hz}} \times 100 = 10$. So, $X[10]$ should have a large magnitude.
*   For 25 Hz: $k = \frac{25 \text{ Hz}}{100 \text{ Hz}} \times 100 = 25$. So, $X[25]$ should have a large magnitude.

The DFT provides a discrete representation of this frequency content.

**Practical Considerations (Zero-Padding):**

*   **Increasing Frequency Resolution:** If the original signal segment is short, the frequency bins are widely spaced, making it hard to distinguish between closely spaced frequencies. Zero-padding the signal (appending zeros to the end of $x[n]$ to increase its length to $N' > N$) before computing the DFT increases the number of frequency samples ($N'$). This effectively interpolates the spectrum, providing a smoother representation and making it easier to pinpoint peak frequencies. It doesn't add new information but improves the visual resolution.
*   **Windowing:** For finite-length signals, the implicit assumption of the DFT is that the signal is periodic over $N$ samples. If the signal is not perfectly periodic within the $N$ samples, this truncation causes spectral leakage. Window functions (e.g., Hanning, Hamming) are applied to $x[n]$ to taper the signal at the edges, reducing this leakage.

**Reference:**
*   Proakis & Manolakis, 4th Ed., Chapter 7: Discrete Fourier Transform.
*   Oppenheim & Schafer, 2nd Ed., Chapter 7: DFT.
*   Ifeachor & Jervis, 2nd Ed., Chapter 4: The Discrete Fourier Transform.

---

## 5. Circular Convolution using DFT

**Concept:**

Circular convolution is a form of convolution where the sequences are treated as if they are periodic. The DFT provides an efficient way to compute circular convolution.

**Definition:**

The circular convolution of two sequences $x[n]$ and $h[n]$ of length $N$ is defined as:

$$ y[n] = x[n] \circledast h[n] = \sum_{m=0}^{N-1} x[m] h[(n-m)_N] \quad \text{for } n = 0, 1, \dots, N-1 $$

where $(n-m)_N$ denotes $(n-m) \mod N$.

**Key Property:**

The DFT transforms circular convolution in the time domain into element-wise multiplication in the frequency domain. If $X[k]$ is the DFT of $x[n]$ and $H[k]$ is the DFT of $h[n]$ (both of length $N$), then the DFT of $y[n] = x[n] \circledast h[n]$ is:

$$ Y[k] = X[k] H[k] \quad \text{for } k = 0, 1, \dots, N-1 $$

**Procedure for Computing Circular Convolution using DFT:**

1.  **Pad sequences to length N:** Ensure both sequences $x[n]$ and $h[n]$ have the same length $N$. If their original lengths are different, pad the shorter sequence with zeros to match the length of the longer one, or to a length required for linear convolution (explained in the next section).
2.  **Compute DFTs:** Compute the $N$-point DFT of $x[n]$ to get $X[k]$ and the $N$-point DFT of $h[n]$ to get $H[k]$.
3.  **Multiply DFTs:** Multiply the DFTs element-wise: $Y[k] = X[k] H[k]$ for $k = 0, 1, \dots, N-1$.
4.  **Compute IDFT:** Compute the $N$-point IDFT of $Y[k]$ to obtain the circular convolution result $y[n]$:
    $$ y[n] = \text{IDFT}\{Y[k]\} = \frac{1}{N} \sum_{k=0}^{N-1} Y[k] e^{j \frac{2\pi kn}{N}} $$

**Example:**

Let $x[n] = \{1, 2, 3\}$ and $h[n] = \{4, 5\}$. We want to compute $x[n] \circledast h[n]$.
Let's choose $N=3$ (length of the longer sequence). We need to pad $h[n]$ with a zero: $h[n] = \{4, 5, 0\}$.

1.  **DFT of $x[n]$ (N=3):**
    $X[0] = 1+2+3 = 6$
    $X[1] = 1 + 2e^{-j2\pi/3} + 3e^{-j4\pi/3} = 1 + 2(-\frac{1}{2} - j\frac{\sqrt{3}}{2}) + 3(-\frac{1}{2} + j\frac{\sqrt{3}}{2}) = 1 - 1 - j\sqrt{3} - \frac{3}{2} + j\frac{3\sqrt{3}}{2} = -\frac{3}{2} + j\frac{\sqrt{3}}{2}$
    $X[2] = 1 + 2e^{-j4\pi/3} + 3e^{-j8\pi/3} = 1 + 2(-\frac{1}{2} + j\frac{\sqrt{3}}{2}) + 3(-\frac{1}{2} - j\frac{\sqrt{3}}{2}) = 1 - 1 + j\sqrt{3} - \frac{3}{2} - j\frac{3\sqrt{3}}{2} = -\frac{3}{2} - j\frac{\sqrt{3}}{2}$

2.  **DFT of $h[n]$ (N=3):**
    $H[0] = 4+5+0 = 9$
    $H[1] = 4 + 5e^{-j2\pi/3} + 0e^{-j4\pi/3} = 4 + 5(-\frac{1}{2} - j\frac{\sqrt{3}}{2}) = 4 - \frac{5}{2} - j\frac{5\sqrt{3}}{2} = \frac{3}{2} - j\frac{5\sqrt{3}}{2}$
    $H[2] = 4 + 5e^{-j4\pi/3} + 0e^{-j8\pi/3} = 4 + 5(-\frac{1}{2} + j\frac{\sqrt{3}}{2}) = 4 - \frac{5}{2} + j\frac{5\sqrt{3}}{2} = \frac{3}{2} + j\frac{5\sqrt{3}}{2}$

3.  **Multiply DFTs:**
    $Y[0] = X[0]H[0] = 6 \times 9 = 54$
    $Y[1] = X[1]H[1] = (-\frac{3}{2} + j\frac{\sqrt{3}}{2})(\frac{3}{2} - j\frac{5\sqrt{3}}{2}) = -\frac{9}{4} + j\frac{15\sqrt{3}}{4} + j\frac{3\sqrt{3}}{4} + \frac{15}{4} = \frac{6}{4} + j\frac{18\sqrt{3}}{4} = \frac{3}{2} + j\frac{9\sqrt{3}}{2}$
    $Y[2] = X[2]H[2] = (-\frac{3}{2} - j\frac{\sqrt{3}}{2})(\frac{3}{2} + j\frac{5\sqrt{3}}{2}) = -\frac{9}{4} - j\frac{15\sqrt{3}}{4} - j\frac{3\sqrt{3}}{4} + \frac{15}{4} = \frac{6}{4} - j\frac{18\sqrt{3}}{4} = \frac{3}{2} - j\frac{9\sqrt{3}}{2}$

4.  **IDFT of $Y[k]$ (N=3):**
    $y[0] = \frac{1}{3} (Y[0] + Y[1] + Y[2]) = \frac{1}{3} (54 + (\frac{3}{2} + j\frac{9\sqrt{3}}{2}) + (\frac{3}{2} - j\frac{9\sqrt{3}}{2})) = \frac{1}{3} (54 + 3) = \frac{57}{3} = 19$
    $y[1] = \frac{1}{3} (Y[0] + Y[1]e^{j2\pi/3} + Y[2]e^{j4\pi/3})$
    $y[1] = \frac{1}{3} (54 + (\frac{3}{2} + j\frac{9\sqrt{3}}{2})(-\frac{1}{2} - j\frac{\sqrt{3}}{2}) + (\frac{3}{2} - j\frac{9\sqrt{3}}{2})(-\frac{1}{2} + j\frac{\sqrt{3}}{2}))$
    $y[1] = \frac{1}{3} (54 + [-\frac{3}{4} - j\frac{3\sqrt{3}}{4} - j\frac{9\sqrt{3}}{4} + \frac{27}{4}] + [-\frac{3}{4} + j\frac{3\sqrt{3}}{4} + j\frac{9\sqrt{3}}{4} + \frac{27}{4}])$
    $y[1] = \frac{1}{3} (54 + 2 \times (\frac{24}{4})) = \frac{1}{3} (54 + 12) = \frac{66}{3} = 22$
    $y[2] = \frac{1}{3} (Y[0] + Y[1]e^{j4\pi/3} + Y[2]e^{j8\pi/3})$
    $y[2] = \frac{1}{3} (54 + (\frac{3}{2} + j\frac{9\sqrt{3}}{2})(-\frac{1}{2} + j\frac{\sqrt{3}}{2}) + (\frac{3}{2} - j\frac{9\sqrt{3}}{2})(-\frac{1}{2} - j\frac{\sqrt{3}}{2}))$
    $y[2] = \frac{1}{3} (54 + [-\frac{3}{4} + j\frac{3\sqrt{3}}{4} - j\frac{9\sqrt{3}}{4} - \frac{27}{4}] + [-\frac{3}{4} - j\frac{3\sqrt{3}}{4} + j\frac{9\sqrt{3}}{4} - \frac{27}{4}])$
    $y[2] = \frac{1}{3} (54 + 2 \times (-\frac{30}{4})) = \frac{1}{3} (54 - 15) = \frac{39}{3} = 13$

So, the circular convolution $y[n] = \{19, 22, 13\}$.

**Reference:**
*   Proakis & Manolakis, 4th Ed., Chapter 7: Discrete Fourier Transform.
*   Oppenheim & Schafer, 2nd Ed., Chapter 7: DFT.

---

## 6. Linear Filtering Based on DFT

**Concept:**

Linear time-invariant (LTI) systems are fundamental in DSP. Their input-output relationship is described by convolution. The DFT allows us to perform this convolution efficiently in the frequency domain.

**Relationship between Linear Convolution and DFT:**

The DFT of a finite-length sequence $x[n]$ of length $N_x$ and a finite-length sequence $h[n]$ of length $N_h$ is usually computed for a length $N$.

*   **Linear Convolution:** $y[n] = x[n] * h[n] = \sum_{m=-\infty}^{\infty} x[m] h[n-m]$. The resulting sequence $y[n]$ has a length of $N_x + N_h - 1$.
*   **Circular Convolution:** $y[n] = x[n] \circledast h[n] = \sum_{m=0}^{N-1} x[m] h[(n-m)_N]$. The resulting sequence $y[n]$ has a length of $N$.

The key insight is that **if we perform circular convolution with a length $N \ge N_x + N_h - 1$, the result is identical to the linear convolution.**

**Procedure for Linear Filtering using DFT (Overlap-Add or Overlap-Save):**

For long input signals $x[n]$ that cannot fit into memory for a direct DFT computation, the signal is processed in blocks.

1.  **Choose Block Length and Overlap:**
    *   Let the impulse response of the filter be $h[n]$ with length $N_h$.
    *   Divide the input signal $x[n]$ into blocks of length $L$.
    *   The output of the convolution of a block of length $L$ with $h[n]$ will have length $L + N_h - 1$.
    *   To avoid interference between consecutive blocks when performing circular convolution, we need to either:
        *   **Overlap-Add:** Pad each block $x_i[n]$ with $N_h-1$ zeros to length $L+N_h-1$. Compute the DFT of $x_i[n]$ and $h[n]$. Multiply them in the frequency domain, and take the IDFT. The output block $y_i[n]$ will have length $L+N_h-1$. Overlap and add the last $N_h-1$ samples of $y_i[n]$ with the first $N_h-1$ samples of $y_{i+1}[n]$.
        *   **Overlap-Save:** Pad each block $x_i[n]$ with $N_h-1$ zeros to length $L+N_h-1$. Compute the DFT of $x_i[n]$ and $h[n]$. Multiply them in the frequency domain, and take the IDFT. The output block $y_i[n]$ will have length $L+N_h-1$. Discard the first $N_h-1$ samples of each output block, as they contain "wrap-around" effects from the circular convolution. The remaining $L$ samples form the actual output for that block.

**Procedure for Linear Filtering of Finite-Length Signals using DFT:**

This is a more direct application for signals that fit into memory.

1.  **Determine the DFT Length N:**
    *   Let the input signal be $x[n]$ of length $N_x$.
    *   Let the filter impulse response be $h[n]$ of length $N_h$.
    *   The linear convolution $y[n] = x[n] * h[n]$ will have length $N_y = N_x + N_h - 1$.
    *   To obtain the linear convolution result using circular convolution via DFT, choose the DFT length $N \ge N_y$. A common choice is $N = N_x + N_h - 1$.
2.  **Zero-Pad:**
    *   Pad $x[n]$ with zeros to length $N$: $x_p[n] = \{x[0], \dots, x[N_x-1], 0, \dots, 0\}$ (total $N$ samples).
    *   Pad $h[n]$ with zeros to length $N$: $h_p[n] = \{h[0], \dots, h[N_h-1], 0, \dots, 0\}$ (total $N$ samples).
3.  **Compute DFTs:**
    *   Compute the $N$-point DFT of $x_p[n]$ to get $X_p[k]$.
    *   Compute the $N$-point DFT of $h_p[n]$ to get $H_p[k]$.
4.  **Multiply in Frequency Domain:**
    *   $Y_p[k] = X_p[k] H_p[k]$ for $k=0, \dots, N-1$.
5.  **Compute Inverse DFT:**
    *   Compute the $N$-point IDFT of $Y_p[k]$ to get $y_p[n]$.
    *   The first $N_y = N_x + N_h - 1$ samples of $y_p[n]$ are the result of the linear convolution $y[n]$.

**Example:**

Let $x[n] = \{1, 2, 3\}$ ($N_x=3$) and $h[n] = \{1, -1\}$ ($N_h=2$). We want to perform linear filtering (convolution).

1.  **Determine DFT Length:** $N_y = 3 + 2 - 1 = 4$. Choose $N=4$.
2.  **Zero-Pad:**
    *   $x_p[n] = \{1, 2, 3, 0\}$
    *   $h_p[n] = \{1, -1, 0, 0\}$
3.  **Compute DFTs (N=4):**
    *   $X_p[k]$:
        $X_p[0] = 1+2+3+0 = 6$
        $X_p[1] = 1 + 2(-j) + 3(-1) + 0(j) = 1 - 2j - 3 = -2 - 2j$
        $X_p[2] = 1 + 2(-1) + 3(1) + 0(-1) = 1 - 2 + 3 = 2$
        $X_p[3] = 1 + 2(j) + 3(-1) + 0(-j) = 1 + 2j - 3 = -2 + 2j$
    *   $H_p[k]$:
        $H_p[0] = 1 - 1 + 0 + 0 = 0$
        $H_p[1] = 1 - 1(-j) + 0(-1) + 0(j) = 1 + j$
        $H_p[2] = 1 - 1(-1) + 0(1) + 0(-1) = 1 + 1 = 2$
        $H_p[3] = 1 - 1(j) + 0(-1) + 0(-j) = 1 - j$
4.  **Multiply DFTs:**
    *   $Y_p[0] = X_p[0]H_p[0] = 6 \times 0 = 0$
    *   $Y_p[1] = X_p[1]H_p[1] = (-2 - 2j)(1 + j) = -2 - 2j - 2j + 2 = -4j$
    *   $Y_p[2] = X_p[2]H_p[2] = 2 \times 2 = 4$
    *   $Y_p[3] = X_p[3]H_p[3] = (-2 + 2j)(1 - j) = -2 + 2j + 2j + 2 = 4j$
    So, $Y_p[k] = \{0, -4j, 4, 4j\}$.
5.  **Compute Inverse DFT (N=4):**
    *   $y_p[0] = \frac{1}{4} (0 + (-4j) + 4 + 4j) = \frac{1}{4} (4) = 1$
    *   $y_p[1] = \frac{1}{4} (0 + (-4j)e^{j2\pi/4} + 4e^{j4\pi/4} + 4j e^{j6\pi/4}) = \frac{1}{4} (0 - 4j(j) + 4(-1) + 4j(-j)) = \frac{1}{4} (0 + 4 - 4 + 4) = \frac{4}{4} = 1$
    *   $y_p[2] = \frac{1}{4} (0 + (-4j)e^{j4\pi/4} + 4e^{j8\pi/4} + 4j e^{j12\pi/4}) = \frac{1}{4} (0 - 4j(-1) + 4(1) + 4j(-1)) = \frac{1}{4} (0 + 4j + 4 - 4j) = \frac{4}{4} = 1$
    *   $y_p[3] = \frac{1}{4} (0 + (-4j)e^{j6\pi/4} + 4e^{j12\pi/4} + 4j e^{j18\pi/4}) = \frac{1}{4} (0 - 4j(-j) + 4(-1) + 4j(j)) = \frac{1}{4} (0 - 4 - 4 - 4) = \frac{-12}{4} = -3$

The linear convolution is $y[n] = y_p[0 \text{ to } N_y-1] = y_p[0 \text{ to } 3] = \{1, 1, 1, -3\}$.

Let's verify by direct convolution:
$y[0] = x[0]h[0] = 1 \times 1 = 1$
$y[1] = x[1]h[0] + x[0]h[1] = 2 \times 1 + 1 \times (-1) = 2 - 1 = 1$
$y[2] = x[2]h[0] + x[1]h[1] = 3 \times 1 + 2 \times (-1) = 3 - 2 = 1$
$y[3] = x[3]h[0] + x[2]h[1]$ (where $x[3]=0$) $= 0 \times 1 + 3 \times (-1) = -3$
The direct convolution result $\{1, 1, 1, -3\}$ matches.

**Advantage of DFT-based filtering:**

*   For long filters ($N_h$ is large), multiplication in the frequency domain is computationally much faster than direct convolution in the time domain. This is the basis of the Fast Fourier Transform (FFT) algorithm.

**Reference:**
*   Proakis & Manolakis, 4th Ed., Chapter 7: Discrete Fourier Transform.
*   Oppenheim & Schafer, 2nd Ed., Chapter 7: DFT.
*   Ifeachor & Jervis, 2nd Ed., Chapter 4: The Discrete Fourier Transform.

---

## Practice Questions

1.  **DFT Calculation:**
    Calculate the 4-point DFT of the sequence $x[n] = \{1, 0, 1, 0\}$.
    *(Answer: $X[k] = \{2, 0, 2, 0\}$)*

2.  **DFT Properties:**
    Let $x[n]$ have DFT $X[k]$. If $y[n] = x[n-1]$ (circular shift by 1), what is the DFT of $y[n]$, $Y[k]$?
    *(Answer: $Y[k] = X[k] e^{-j \frac{2\pi k}{N}}$)*

3.  **Frequency Analysis:**
    A signal is sampled at 50 Hz. You compute the 100-point DFT of a segment of this signal. At which discrete frequency bin (k-value) would you expect to see a peak for a sinusoid with a frequency of 10 Hz?
    *(Answer: $k = \frac{10 \text{ Hz}}{50 \text{ Hz}} \times 100 = 20$)*

4.  **Circular Convolution:**
    Compute the circular convolution of $x[n] = \{1, 2\}$ and $h[n] = \{3, 4\}$ using $N=2$.
    *(Answer: $y[n] = \{11, 10\}$)*

5.  **Linear Filtering using DFT:**
    Let $x[n] = \{1, 2, 3\}$ ($N_x=3$) and $h[n] = \{0, 1, 0\}$ ($N_h=3$). Perform linear convolution using the DFT.
    *(Hint: Choose $N = N_x + N_h - 1 = 3 + 3 - 1 = 5$. Pad $x[n]$ to length 5 and $h[n]$ to length 5.)*
    *(Answer: $y[n] = \{0, 1, 2, 3, 0\}$)*

---

## Important Points to Remember:

*   **DFT is Frequency Sampling:** The DFT provides discrete samples of the frequency spectrum. The spacing of these samples is $\frac{2\pi}{N}$.
*   **DFT Properties are Powerful:** Linearity, time/frequency shifting, and convolution properties are critical for efficient signal processing.
*   **Convolution Property is Key to Filtering:** Convolution in time domain = Multiplication in frequency domain.
*   **Linear vs. Circular Convolution:** To get linear convolution from circular convolution using DFT, zero-pad the sequences to a length $N \ge N_x + N_h - 1$.
*   **Frequency Resolution:** Determined by the length $N$ of the DFT. Longer $N$ gives finer resolution.
*   **Spectral Leakage:** Occurs when a finite-length signal is not periodic within the DFT window. Windowing can mitigate this.
*   **Zero-Padding for Interpolation:** Used to get more points on the spectrum, improving visual resolution but not adding new information.

---

This module provides a solid foundation for understanding how to analyze and process signals in the frequency domain using the Discrete Fourier Transform. The concepts learned here are essential for subsequent modules on filter design and implementation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
