---
title: "Linear filtering methods based on DFT – FFT (DIT-FFT only) – efficient computation of the DFT of a 2N point real sequences – correlation – use of FFT in linear filtering and correlation"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 1: Definition of a digital signal processing system"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7dd"
status: "completed"
scrapedAt: "2026-05-20T16:46:05.682Z"
---
# DIGITAL SIGNAL PROCESSING - Module 1: Linear Filtering Methods Based on DFT & FFT

**Topic:** Linear filtering methods based on DFT – FFT (DIT-FFT only) – efficient computation of the DFT of a 2N point real sequences – correlation – use of FFT in linear filtering and correlation

**Learning Outcomes:**

*   Understand linear filtering methods using the Discrete Fourier Transform (DFT).
*   Describe and apply the Decimation-In-Time Fast Fourier Transform (DIT-FFT) algorithm.
*   Compute the DFT of a 2N point real sequence efficiently.
*   Explain and calculate correlation.
*   Demonstrate the use of FFT in linear filtering and correlation.

## 1. Introduction to Linear Filtering using DFT

*   **Linear Filtering:** A process where an input signal is modified by a system (linear and time-invariant - LTI) to produce an output signal. Mathematically represented as a convolution:  `y[n] = x[n] * h[n]`, where `x[n]` is the input, `h[n]` is the impulse response of the system, and `y[n]` is the output.
*   **DFT and Linear Filtering:** The DFT transforms a time-domain signal into the frequency domain. Convolution in the time domain becomes multiplication in the frequency domain. This property allows for efficient linear filtering by:
    1.  Taking the DFT of the input signal `x[n]` -> `X[k]`
    2.  Taking the DFT of the impulse response `h[n]` -> `H[k]`
    3.  Multiplying the DFTs: `Y[k] = X[k] * H[k]`
    4.  Taking the Inverse DFT (IDFT) of `Y[k]` -> `y[n]`
*   **Circular Convolution vs. Linear Convolution:**  The DFT inherently performs *circular convolution*. To obtain the same results as linear convolution using the DFT, we must zero-pad the input signals.
    *   **Zero-Padding:** Appending zeros to the end of a signal to increase its length.  If `x[n]` has length `N` and `h[n]` has length `M`, we need to zero-pad both signals to a length of `L >= N + M - 1` to ensure that the circular convolution is equivalent to the linear convolution.

**Example:**

Let `x[n] = [1, 2, 3]` and `h[n] = [4, 5]`.

1.  **Linear Convolution (direct calculation):**  `y[n] = x[n] * h[n] = [4, 13, 22, 15]`
2.  **DFT-based Linear Convolution:**
    *   Zero-pad `x[n]` to length 4: `x'[n] = [1, 2, 3, 0]`
    *   Zero-pad `h[n]` to length 4: `h'[n] = [4, 5, 0, 0]`
    *   Calculate DFT of `x'[n]` and `h'[n]`.
    *   Multiply the DFTs.
    *   Calculate the IDFT of the product.  The result will be `[4, 13, 22, 15]` (ideally, depending on the DFT implementation and rounding).

## 2. Fast Fourier Transform (FFT) - Decimation-In-Time (DIT)

*   **DFT Complexity:** The direct calculation of the DFT for an N-point sequence requires O(N<sup>2</sup>) complex multiplications and additions.
*   **FFT - Divide and Conquer:** FFT algorithms reduce the computational complexity to O(N log<sub>2</sub>N) by exploiting the symmetry and periodicity of the twiddle factors.
*   **Decimation-In-Time (DIT) FFT:**
    *   DIT-FFT recursively decomposes the DFT into smaller DFTs.
    *   It first separates the input sequence into even-indexed and odd-indexed subsequences.
    *   This process is repeated until 2-point DFTs are reached.
    *   **Butterfly Diagram:** A graphical representation of the DIT-FFT algorithm showing the interconnected stages and operations.  Each "butterfly" represents a 2-point DFT calculation.
    *   **Bit Reversal:** The input sequence needs to be bit-reversed before starting the butterfly computations. This ensures that the output is in the correct order.

**DIT-FFT Algorithm (for N = 2<sup>v</sup>):**

1.  **Bit-Reverse Ordering:** Rearrange the input sequence `x[n]` according to the bit-reversed indices.
2.  **Iterative Butterfly Computations:** Perform `v = log2(N)` stages of butterfly computations.  Each stage combines pairs of DFT values.
    *   **Twiddle Factors:** Complex exponentials `W<sub>N</sub><sup>k</sup> = e<sup>-j(2π/N)k</sup>` are used in the butterfly computations.

**Example (4-point DIT-FFT):**

Assume `x[n] = [x0, x1, x2, x3] = [1, 2, 3, 4]`

1.  **Bit Reversal:**
    *   0 (00) -> 0 (00)
    *   1 (01) -> 2 (10)
    *   2 (10) -> 1 (01)
    *   3 (11) -> 3 (11)
    *   Bit-reversed sequence: `x'[n] = [x0, x2, x1, x3] = [1, 3, 2, 4]`

2.  **Butterfly Computations:**

    *   **Stage 1 (2-point DFTs):**
        *   `X[0] = x'[0] + W<sub>4</sub><sup>0</sup> * x'[1] = 1 + 1 * 3 = 4`
        *   `X[1] = x'[0] - W<sub>4</sub><sup>0</sup> * x'[1] = 1 - 1 * 3 = -2`
        *   `X[2] = x'[2] + W<sub>4</sub><sup>0</sup> * x'[3] = 2 + 1 * 4 = 6`
        *   `X[3] = x'[2] - W<sub>4</sub><sup>0</sup> * x'[3] = 2 - 1 * 4 = -2`

    *   **Stage 2 (4-point DFT):**  `W<sub>4</sub><sup>1</sup> = e<sup>-j(2π/4)1</sup> = -j`
        *   `Y[0] = X[0] + W<sub>4</sub><sup>0</sup> * X[2] = 4 + 1 * 6 = 10`
        *   `Y[1] = X[1] + W<sub>4</sub><sup>0</sup> * X[3] = -2 + 1 * -2 = -4`
        *   `Y[2] = X[0] - W<sub>4</sub><sup>1</sup> * X[2] = 4 - (-j) * 6 = 4 + 6j`
        *   `Y[3] = X[1] - W<sub>4</sub><sup>1</sup> * X[3] = -2 - (-j) * -2 = -2 - 2j`

    *   Therefore, `X[k] = [10, -4, 4+6j, -2-2j]`

## 3. Efficient Computation of DFT for Real Sequences (2<sup>N</sup> points)

*   **Symmetry Properties of DFT:**  For a real-valued sequence `x[n]`, the DFT `X[k]` exhibits conjugate symmetry: `X[k] = X*[-k] = X*(N-k)`, where `X*` denotes the complex conjugate.
*   **Using a Single N-point DFT:**
    1.  **Form a Complex Sequence:**  Divide the 2N-point real sequence `x[n]` into two N-point sequences:
        *   `g[n] = x[2n]` (even-indexed samples)
        *   `h[n] = x[2n+1]` (odd-indexed samples)
        *   Create a complex sequence: `y[n] = g[n] + j * h[n]`
    2.  **Compute the N-point DFT:**  `Y[k] = DFT{y[n]}`
    3.  **Extract the 2N-point DFT:**
        *   `G[k] = 0.5 * (Y[k] + Y*[(N-k) mod N])`
        *   `H[k] = -j * 0.5 * (Y[k] - Y*[(N-k) mod N])`
        *   `X[k] = G[k] + W<sub>2N</sub><sup>k</sup> * H[k]`  for `k = 0, 1, ..., N-1`
        *   `X[N+k] = G[k] - W<sub>2N</sub><sup>k</sup> * H[k]` for `k = 0, 1, ..., N-1`

**Explanation:**

The method leverages the properties of DFT and conjugates to efficiently compute the 2N-point DFT using a single N-point DFT.  This significantly reduces the computational cost.

## 4. Correlation

*   **Definition:** Correlation measures the similarity between two signals as a function of the time-lag applied to one of them.
*   **Cross-correlation:** Measures the similarity between two different signals, `x[n]` and `y[n]`.
    *   `r<sub>xy</sub>[l] = Σ x[n] * y[n-l]` where the summation is over all `n`.  'l' is the lag.
*   **Autocorrelation:** Measures the similarity of a signal with a time-delayed version of itself, `x[n]`.
    *   `r<sub>xx</sub>[l] = Σ x[n] * x[n-l]`
*   **Applications:**
    *   Signal detection: Detecting the presence of a known signal in noise.
    *   Time delay estimation: Determining the time delay between two related signals.
    *   Pattern recognition.

## 5. Using FFT in Linear Filtering and Correlation

*   **Linear Filtering:** As mentioned before, the convolution theorem states that convolution in the time domain is equivalent to multiplication in the frequency domain.  The FFT allows us to efficiently compute the DFTs needed for this process.
*   **Correlation using FFT:**  Correlation can also be efficiently computed using the FFT.
    *   **Cross-correlation:** `r<sub>xy</sub>[n] = IDFT{X[k] * Y* [k]}` where `X[k]` and `Y[k]` are the DFTs of `x[n]` and `y[n]`, respectively, and `Y*[k]` is the complex conjugate of `Y[k]`. Remember to zero-pad the signals as needed to avoid circular convolution effects.
    *   **Autocorrelation:** `r<sub>xx</sub>[n] = IDFT{X[k] * X* [k]} = IDFT{|X[k]|<sup>2</sup>}`

**Advantages of using FFT for Linear Filtering and Correlation:**

*   **Computational Efficiency:**  FFT-based methods have a lower computational complexity (O(N log<sub>2</sub>N)) compared to direct time-domain methods (O(N<sup>2</sup>)). This is especially beneficial for long signals.
*   **Implementation:** FFT algorithms are readily available in software libraries and hardware implementations.

## Practice Questions & Exercises

1.  **DIT-FFT:** Compute the 8-point DIT-FFT of the sequence `x[n] = [1, 1, 1, 1, 0, 0, 0, 0]`. Show the bit-reversed input and the butterfly diagram (you can sketch this).

    **Answer:** (Detailed solution requires drawing the butterfly diagram, but the final output will be:  `X[k] = [4, 2.613 - 1.082j, 0 - 0j, 0.383 - 0.158j, 0, 0.383 + 0.158j, 0 + 0j, 2.613 + 1.082j]`)

2.  **Real Sequence DFT:**  Explain how you would compute the 16-point DFT of a real-valued sequence using a single 8-point DFT.

    **Answer:** See section "3. Efficient Computation of DFT for Real Sequences (2N points)" for the detailed steps.  In this case, N=8, and 2N=16.

3.  **Linear Filtering:**  You have an input signal `x[n]` of length 100 and an impulse response `h[n]` of length 20.  What is the minimum length to which you must zero-pad both signals to perform linear filtering using the DFT?

    **Answer:** `L >= N + M - 1 = 100 + 20 - 1 = 119`. Therefore, zero-pad both signals to a length of 119 or greater.

4.  **Correlation:**  Calculate the cross-correlation between `x[n] = [1, 2, 3]` and `y[n] = [0, 1, 2]` directly and then using the FFT method.

    **Answer:**
    *   **Direct Calculation:**
        *   `r<sub>xy</sub>[0] = 1*0 + 2*1 + 3*2 = 8`
        *   `r<sub>xy</sub>[1] = 1*1 + 2*2 + 3*0 = 5`
        *   `r<sub>xy</sub>[2] = 1*2 + 2*0 + 3*0 = 2`
        *   `r<sub>xy</sub>[-1] = 0*0 + 1*1 + 2*2 = 5`
        *   `r<sub>xy</sub>[-2] = 0*0 + 0*1 + 1*2 = 2`
    *   **FFT Calculation:**  You would zero-pad, take DFTs, conjugate one, multiply, and inverse DFT. Compare the zero lag values to the answer above.

## Important Points to Remember

*   **Zero-padding is essential for linear filtering using the DFT** to avoid circular convolution effects.  Choose the zero-padding length appropriately.
*   **FFT significantly reduces the computational complexity** of DFT calculations, making it suitable for real-time applications.
*   **Understanding the butterfly diagram** is crucial for implementing and debugging DIT-FFT algorithms.
*   **Symmetry properties** can be exploited to further optimize DFT computations for real-valued signals.
*   **Correlation is a powerful tool for signal analysis,** and the FFT provides an efficient way to compute it.
*   Always consider the trade-offs between time-domain and frequency-domain processing based on the specific application and signal characteristics.
