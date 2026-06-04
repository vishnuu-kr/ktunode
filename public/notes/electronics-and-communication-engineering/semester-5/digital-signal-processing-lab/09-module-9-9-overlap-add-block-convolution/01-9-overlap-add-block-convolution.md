---
title: "9. Overlap Add Block Convolution"
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 9: 9. Overlap Add Block Convolution"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec5e"
status: "completed"
scrapedAt: "2026-05-23T17:56:20.553Z"
---
# DIGITAL SIGNAL PROCESSING LAB - Module 9: Overlap-Add Block Convolution

## Topic: 9. Overlap-Add Block Convolution

### 1. Introduction

Block convolution is a technique used to efficiently compute the convolution of two sequences, particularly when one sequence (the impulse response) is much longer than the other (the input signal). This is often the case in real-time signal processing where the input signal arrives in blocks. Direct convolution of a long impulse response with a block of input data can be computationally intensive.

The Overlap-Add method is one of two common block convolution techniques (the other being Overlap-Save). It breaks down the long input signal into smaller blocks, performs convolution on each block with the impulse response, and then carefully combines these results to obtain the overall convolution. This approach is particularly useful when processing long signals in a block-by-block manner, which is a fundamental concept in real-time digital signal processing.

### 2. Motivation and Problem Statement

When dealing with long input signals $x[n]$ and a Finite Impulse Response (FIR) filter $h[n]$ of length $M$, the direct convolution $y[n] = x[n] * h[n]$ requires a significant number of multiplications and additions for each output sample. If we process the input signal in blocks of length $L$, direct block convolution would still be inefficient due to the long impulse response.

**Problem:** How to efficiently compute the convolution of a long input signal with a potentially long FIR filter using block processing?

**Goal:** Implement an efficient convolution method that can handle large input signals by processing them in manageable blocks.

### 3. Key Concepts and Definitions

*   **Convolution:** The mathematical operation that describes the effect of a linear time-invariant (LTI) system on an input signal. For discrete-time signals, the convolution of $x[n]$ and $h[n]$ is given by:
    $y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$

*   **Impulse Response $h[n]$:** The output of an LTI system when the input is a unit impulse, $\delta[n]$. The length of the impulse response ($M$) determines the order of the FIR filter.

*   **Input Signal $x[n]$:** The signal being processed by the LTI system.

*   **Output Signal $y[n]$:** The result of applying the LTI system to the input signal.

*   **Block Processing:** Dividing a continuous stream of data into smaller, discrete segments or blocks for processing. This is crucial for real-time applications where data arrives sequentially.

*   **FIR Filter:** A digital filter whose impulse response is of finite duration. FIR filters are known for their linear phase property and guaranteed stability.

*   **Circular Convolution:** A type of convolution used in the Fast Fourier Transform (FFT) algorithm. It's equivalent to linear convolution if the sequences are zero-padded to a sufficient length (at least $N+M-1$, where $N$ is the length of the input and $M$ is the length of the impulse response).

*   **Overlap-Add Method:** A block convolution technique where:
    1.  The input signal is divided into blocks of length $L$.
    2.  Each block is zero-padded to a length of $N = L + M - 1$.
    3.  The zero-padded block is convolved with the impulse response $h[n]$ using FFT-based circular convolution.
    4.  The resulting output blocks have length $N$.
    5.  Adjacent output blocks are overlapped by $M-1$ samples, and these overlapping segments are added together. The non-overlapping portions of the output blocks are directly taken.

### 4. Understanding the Overlap-Add Method

The core idea is to perform the convolution of a long input signal $x[n]$ with a filter $h[n]$ (length $M$) by dividing $x[n]$ into segments.

Let $x[n]$ be divided into blocks of length $L$:
$x_i[n] = x[n + iL]$ for $0 \le n < L$, and $x_i[n] = 0$ otherwise.

If we were to directly convolve each block $x_i[n]$ with $h[n]$, the output $y_i[n] = x_i[n] * h[n]$ would have a length of $L+M-1$. However, the linear convolution $y[n]$ is formed by summing these outputs:
$y[n] = \sum_{i=-\infty}^{\infty} x_i[n] * h[n]$

The problem is that $x_i[n]$ represents a segment of $x[n]$, and the summation of $x_i[n] * h[n]$ directly can lead to incorrect results if the blocks are not handled properly.

**The Overlap-Add Strategy:**

1.  **Block the Input:** Divide the input signal $x[n]$ into segments of length $L$. Let these segments be $x_0[n]$, $x_1[n]$, $x_2[n]$, etc., where $x_i[n]$ contains samples from $x[iL]$ to $x[iL + L - 1]$.

2.  **Zero-Padding:** For each block $x_i[n]$, zero-pad it to a length of $N = L + M - 1$. This ensures that the circular convolution of the padded block with $h[n]$ is equivalent to the linear convolution. Let the padded block be $\tilde{x}_i[n]$.

3.  **Convolution (FFT-based):** Compute the circular convolution of $\tilde{x}_i[n]$ with $h[n]$. This is efficiently done using the FFT:
    $Y_i[k] = \text{FFT}(\tilde{x}_i[n]) \odot \text{FFT}(h[n])$
    where $\odot$ denotes element-wise multiplication.
    The time-domain result is obtained by the Inverse FFT:
    $y_i[n] = \text{IFFT}(Y_i[k])$
    The length of $y_i[n]$ will be $N = L + M - 1$.

4.  **Overlap and Add:** The convolution $y[n]$ is formed by adding overlapping portions of the output blocks $y_i[n]$.
    *   The first output block $y_0[n]$ contributes directly to $y[n]$ from $n=0$ to $N-1$.
    *   The second output block $y_1[n]$ (of length $N$) is delayed by $L$ samples relative to $y_0[n]$. The first $M-1$ samples of $y_1[n]$ overlap with the last $M-1$ samples of $y_0[n]$. These overlapping samples need to be added.
    *   In general, for the $i$-th output block $y_i[n]$, the first $M-1$ samples of $y_i[n]$ are added to the last $M-1$ samples of the previous reconstructed output segment.

    Mathematically, the output $y[n]$ can be constructed as:
    $y[n] = y_0[n] \quad \text{for } 0 \le n < N$
    $y[n] = y_0[n] + y_1[n-L] \quad \text{for } N \le n < N+L$
    $y[n] = y_0[n] + y_1[n-L] + y_2[n-2L] \quad \text{for } N+L \le n < N+2L$
    ... and so on.

    A more structured way to think about it:
    Initialize $y[n] = 0$ for all $n$.
    For $i = 0, 1, 2, \ldots$:
        Extract block $x_i[n]$ of length $L$.
        Zero-pad $x_i[n]$ to length $N = L+M-1$ to get $\tilde{x}_i[n]$.
        Compute $y_i[n] = \tilde{x}_i[n] * h[n]$ (using FFT).
        Add $y_i[n]$ to the overall output $y[n]$ starting at index $iL$:
        $y[n] \leftarrow y[n] + y_i[n-iL]$ for $0 \le n-iL < N$.

    **Important Point:** The addition is done such that the $k$-th sample of $y_i[n]$ (i.e., $y_i[k]$) is added to the sample at index $iL+k$ in the overall output $y[n]$. The first $M-1$ samples of $y_i[n]$ overlap with the previous output segment.

**Block Size Selection ($L$):**
*   A larger $L$ leads to fewer blocks, reducing the overhead of block management and FFT/IFFT calculations.
*   A larger $L$ also requires larger FFTs, which can increase computation time per block.
*   The choice of $L$ often involves a trade-off between FFT efficiency and block management overhead. A common practice is to choose $L$ such that $L+M-1$ is a power of 2 for efficient FFT computation.

### 5. Comparison with Overlap-Save Method

| Feature           | Overlap-Add                      | Overlap-Save                       |
| :---------------- | :------------------------------- | :--------------------------------- |
| Input Blocking    | Blocks of length $L$             | Blocks of length $L$               |
| Zero-Padding      | Pad to $L+M-1$                   | Pad to $L+M-1$                     |
| Output Block      | $L+M-1$                          | $L+M-1$                            |
| Overlap           | $M-1$ samples added              | $M-1$ samples discarded            |
| Output Data       | All $L+M-1$ samples from $y_i[n]$ are used and summed. | Only $L$ samples from $y_i[n]$ are valid and appended. |
| Implementation    | Simpler conceptual addition of segments. | Requires discarding initial samples. |
| Memory Overhead   | May require more intermediate storage for summing. | Less intermediate storage.         |

### 6. Learning Outcomes Alignment

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2):** While not directly about waveform generation, understanding the input and output signals in block convolution relates to signal manipulation.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2):** The Overlap-Add method relies heavily on the property that circular convolution in the frequency domain (element-wise multiplication of DFTs) is equivalent to linear convolution in the time domain when sufficient zero-padding is used.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2):** Block processing is a fundamental technique for real-time DSP on hardware like TMS320C6x DSKs. This module provides insight into how long signals are handled efficiently in such systems.
*   **CO4: Implement LTI systems (Knowledge Level: K3):** Implementing the Overlap-Add method is a direct application of implementing an LTI system (the filter) efficiently on blocks of input data.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3):** This method is crucial for applying FIR filters in real-time to long input signals, which is a common application for FIR filters.

### 7. Examples and Implementation Notes

Let's consider a simple example.

**Example:**
Input signal: $x[n] = [1, 2, 3, 4, 5, 6, 7, 8]$
Impulse response (filter): $h[n] = [1, 2]$ (Length $M=2$)

**Direct Convolution:**
$y[n] = x[n] * h[n]$
$y[0] = 1*1 = 1$
$y[1] = 2*1 + 1*2 = 4$
$y[2] = 3*1 + 2*2 = 7$
$y[3] = 4*1 + 3*2 = 10$
$y[4] = 5*1 + 4*2 = 13$
$y[5] = 6*1 + 5*2 = 16$
$y[6] = 7*1 + 6*2 = 19$
$y[7] = 8*1 + 7*2 = 22$
$y[8] = 0*1 + 8*2 = 16$
$y[9] = 0*1 + 0*2 = 0$
So, $y[n] = [1, 4, 7, 10, 13, 16, 19, 22, 16]$ (length $8+2-1 = 9$)

**Overlap-Add Implementation:**
Let's choose a block size $L=4$.
$M=2$.
Required padded length $N = L + M - 1 = 4 + 2 - 1 = 5$.

**Block 0:**
$x_0[n] = [1, 2, 3, 4]$ (length $L=4$)
Zero-pad to length $N=5$: $\tilde{x}_0[n] = [1, 2, 3, 4, 0]$
Convolve $\tilde{x}_0[n]$ with $h[n] = [1, 2]$:
$\tilde{x}_0[n] * h[n]$ (using FFT or direct convolution for simplicity here):
Length of result is $5+2-1 = 6$.
$y_0[n] = [1, 4, 7, 10, 12, 8]$

**Block 1:**
The remaining input samples are $[5, 6, 7, 8]$. Since this block is also of length 4, $x_1[n] = [5, 6, 7, 8]$.
Zero-pad to length $N=5$: $\tilde{x}_1[n] = [5, 6, 7, 8, 0]$
Convolve $\tilde{x}_1[n]$ with $h[n] = [1, 2]$:
$y_1[n] = [5, 16, 26, 34, 40, 32]$

**Combining the Outputs:**
The total output $y[n]$ is constructed by adding overlapping segments.
The first $M-1 = 1$ sample of $y_1[n]$ should be added to the last $M-1=1$ sample of $y_0[n]$.

$y[n]$ initialization: $[0, 0, 0, 0, 0, 0, 0, 0, 0, \ldots]$

Add $y_0[n]$ starting at index $0$:
$y[n] = [1, 4, 7, 10, 12, 8, 0, 0, 0, \ldots]$

Add $y_1[n]$ starting at index $L=4$:
$y_1[n-L] = [0, 0, 0, 0, 5, 16, 26, 34, 40, 32, \ldots]$

Now, perform the addition for the overlap:
The first $M-1=1$ sample of $y_1[n]$ is $y_1[0]=5$. This should be added to the sample at index $L + 0 = 4$ in the overall output.
The sample at index 4 in $y[n]$ is $y_0[4] = 12$.
So, the effective output at index 4 becomes $12 + 5 = 17$. Wait, this is not correct.

Let's re-examine the combination rule. The $k$-th sample of $y_i[n]$ ($y_i[k]$) is added to the sample at index $iL+k$ in the overall output $y[n]$.

$y[n]$ initialization: $[0, 0, 0, 0, 0, 0, 0, 0, 0]$ (sufficient length for $8+2-1=9$)

**Contribution from $y_0[n]$:**
$y_0[n]$ has length $N=5$.
Add $y_0[n]$ to $y[n]$ starting at index $0$:
$y[n] = [1, 4, 7, 10, 12, 8, 0, 0, 0]$

**Contribution from $y_1[n]$:**
$y_1[n]$ has length $N=5$.
Add $y_1[k]$ to $y[4+k]$ for $k=0, \ldots, 4$.
$k=0: y[4] \leftarrow y[4] + y_1[0] = 12 + 5 = 17$.
$k=1: y[5] \leftarrow y[5] + y_1[1] = 8 + 16 = 24$.
$k=2: y[6] \leftarrow y[6] + y_1[2] = 0 + 26 = 26$.
$k=3: y[7] \leftarrow y[7] + y_1[3] = 0 + 34 = 34$.
$k=4: y[8] \leftarrow y[8] + y_1[4] = 0 + 40 = 40$.

Resulting $y[n]$: $[1, 4, 7, 10, 17, 24, 26, 34, 40]$

This is STILL not matching the direct convolution result: $[1, 4, 7, 10, 13, 16, 19, 22, 16]$. What is wrong?

**Correction: The Overlap-Add logic and indices.**

The output of the convolution of $x_i[n]$ (length $L$) padded to $N = L+M-1$ with $h[n]$ (length $M$) results in $y_i[n]$ of length $N$.
The $i$-th block output $y_i[n]$ contributes to the overall output $y[n]$ starting from sample $iL$.
The samples from $y_i[n]$ are $y_i[0], y_i[1], \ldots, y_i[N-1]$.
These samples contribute to $y[iL], y[iL+1], \ldots, y[iL+N-1]$.

**Let's redo the example carefully:**

$x[n] = [1, 2, 3, 4, 5, 6, 7, 8]$ ($L_{input}=8$)
$h[n] = [1, 2]$ ($M=2$)
Block size $L=4$. Padded length $N=L+M-1 = 4+2-1=5$.

**Block 0:**
$x_0[n] = [1, 2, 3, 4]$
Padded: $\tilde{x}_0[n] = [1, 2, 3, 4, 0]$
Convolve with $h[n]=[1, 2]$ to get $y_0[n]$ of length $N=5$:
$y_0[n] = [1, 4, 7, 10, 12]$
*(Note: The previous calculation $y_0[n] = [1, 4, 7, 10, 12, 8]$ was for convolution of length 4 with length 2, resulting in length 5, but my calculation produced 6 elements by mistake)*.

Direct convolution of $[1, 2, 3, 4]$ with $[1, 2]$:
$1*1 = 1$
$2*1 + 1*2 = 4$
$3*1 + 2*2 = 7$
$4*1 + 3*2 = 10$
$0*1 + 4*2 = 8$
$0*1 + 0*2 = 0$
Result: $[1, 4, 7, 10, 8]$ (length 5). This is $y_0[n]$.

**Block 1:**
Remaining input: $[5, 6, 7, 8]$
$x_1[n] = [5, 6, 7, 8]$
Padded: $\tilde{x}_1[n] = [5, 6, 7, 8, 0]$
Convolve with $h[n]=[1, 2]$ to get $y_1[n]$ of length $N=5$:
Direct convolution of $[5, 6, 7, 8]$ with $[1, 2]$:
$5*1 = 5$
$6*1 + 5*2 = 16$
$7*1 + 6*2 = 19$
$8*1 + 7*2 = 22$
$0*1 + 8*2 = 16$
Result: $[5, 16, 19, 22, 16]$ (length 5). This is $y_1[n]$.

**Combining the Outputs (Overlap-Add):**
Total output $y[n]$ needs to be at least length $8+2-1=9$.
Initialize $y[n] = [0, 0, 0, 0, 0, 0, 0, 0, 0]$.

**Add $y_0[n]$ starting at index $0$:**
$y[n]$ becomes: $[1, 4, 7, 10, 8, 0, 0, 0, 0]$

**Add $y_1[n]$ starting at index $L=4$:**
The samples $y_1[0], y_1[1], y_1[2], y_1[3], y_1[4]$ contribute to $y[4], y[5], y[6], y[7], y[8]$ respectively.
$y[4] \leftarrow y[4] + y_1[0] = 8 + 5 = 13$
$y[5] \leftarrow y[5] + y_1[1] = 0 + 16 = 16$
$y[6] \leftarrow y[6] + y_1[2] = 0 + 19 = 19$
$y[7] \leftarrow y[7] + y_1[3] = 0 + 22 = 22$
$y[8] \leftarrow y[8] + y_1[4] = 0 + 16 = 16$

Final $y[n]$: $[1, 4, 7, 10, 13, 16, 19, 22, 16]$.
This matches the direct convolution result!

**Textbook References:**

*   **Proakis & Ingle:** Chapter 7 (Section 7.7.3 - Block Convolution) discusses efficient FIR filter implementation using convolution in the frequency domain. The principles of dividing the input into blocks and using FFT for convolution are covered. The Overlap-Add method is described as a way to reconstruct the output by adding segments.
*   **Downey:** While Downey's "Think DSP" focuses more on Python implementation and conceptual understanding, the idea of processing signals in chunks and the efficiency gains from frequency-domain operations (like convolution via FFT) are central to DSP and can be applied to block convolution concepts.
*   **Chassaing:** Chapter 8 (Section 8.2.2 - Convolution Using FFT) and Chapter 9 (Section 9.3.1 - FIR Filter Implementation) on the TMS320C6x DSK would provide practical implementation details, especially concerning block processing for real-time applications and the use of FFTs.

**MATLAB/Python Implementation Sketch:**

```python
import numpy as np
from scipy.signal import fftconvolve

def overlap_add_conv(x, h, L):
    """
    Performs convolution of x with h using Overlap-Add method.

    Args:
        x (np.array): Input signal.
        h (np.array): Impulse response (filter).
        L (int): Block size for input signal.

    Returns:
        np.array: The convolved output signal.
    """
    M = len(h)
    N_fft = L + M - 1  # Length for FFT convolution

    num_blocks = int(np.ceil(len(x) / L))
    y = np.zeros(len(x) + M - 1)  # Initialize output buffer

    # Pre-calculate FFT of h
    H = np.fft.fft(h, N_fft)

    for i in range(num_blocks):
        # Extract input block
        start_idx = i * L
        end_idx = min(start_idx + L, len(x))
        x_block = x[start_idx:end_idx]

        # Zero-pad the block to N_fft
        x_block_padded = np.pad(x_block, (0, N_fft - len(x_block)), 'constant')

        # Compute FFT of the padded block
        X_block_fft = np.fft.fft(x_block_padded)

        # Perform circular convolution in frequency domain
        Y_block_fft = X_block_fft * H
        y_block = np.fft.ifft(Y_block_fft)

        # --- Overlap-Add ---
        # The result y_block has length N_fft.
        # We add y_block to the output y starting at index i*L.
        # The first M-1 samples of y_block overlap with the previous block's contribution.
        # Specifically, y_block[k] contributes to y[i*L + k].
        # We add y_block to the appropriate segment of the overall output buffer y.
        y[i*L : i*L + N_fft] += y_block.real # Use .real as we expect real output if inputs are real

    # The final output length should be len(x) + M - 1.
    # We can truncate or return the full buffer.
    # The accumulated buffer 'y' might be slightly longer if the last block
    # didn't fill up to N_fft. The '+= y_block' handles this correctly.
    return y[:len(x) + M - 1]

# --- Example Usage ---
x_signal = np.array([1, 2, 3, 4, 5, 6, 7, 8])
h_filter = np.array([1, 2])
block_size = 4

y_overlap_add = overlap_add_conv(x_signal, h_filter, block_size)
print(f"Input signal x: {x_signal}")
print(f"Filter h: {h_filter}")
print(f"Block size L: {block_size}")
print(f"Output (Overlap-Add): {y_overlap_add}")

# For verification: Direct convolution
y_direct = np.convolve(x_signal, h_filter)
print(f"Output (Direct Conv): {y_direct}")
```

**Important Notes for Implementation:**

*   **FFT Length ($N_{fft}$):** Ensure $N_{fft} = L + M - 1$. This is critical for the circular convolution to be equivalent to linear convolution.
*   **`np.fft.fft` and `np.fft.ifft`:** Use these functions for efficient computation.
*   **Zero-Padding:** Properly pad the input blocks to $N_{fft}$.
*   **Output Accumulation:** The core of Overlap-Add is correctly adding the output blocks. `y[i*L : i*L + N_fft] += y_block` achieves this. The samples of `y_block` are added to the output buffer `y` starting at index `i*L`.
*   **Floating-Point Precision:** Be mindful of floating-point errors when using FFT/IFFT. For real inputs, the output should ideally be real, so taking `.real` might be necessary.

### 8. Practice Questions

1.  **Conceptual:** Explain why zero-padding is necessary when using FFT for convolution. What is the minimum zero-padding required?
2.  **Application:** You are designing a real-time audio effect that uses a FIR filter with 256 taps ($M=256$). Your processing platform can handle blocks of 128 input samples at a time.
    *   What should be the FFT size for convolution?
    *   How many samples will overlap between consecutive output blocks?
    *   If your input signal is 1000 samples long, how many blocks will you process?
3.  **Algorithm Comparison:** Briefly describe the main difference between the Overlap-Add and Overlap-Save methods in terms of how output blocks are processed.
4.  **MATLAB/Python:**
    *   Implement the Overlap-Add convolution function in MATLAB or Python.
    *   Test your function with a simple input signal and filter.
    *   Compare the output of your function with the direct convolution output (`conv` in MATLAB, `np.convolve` or `scipy.signal.fftconvolve` in Python).

### 9. Answers to Practice Questions

1.  **Conceptual:** Zero-padding is necessary because the FFT computes circular convolution, not linear convolution. Linear convolution requires the sum $\sum_{k} x[k] h[n-k]$. If the sequences are not properly zero-padded, the circular shift in the FFT will wrap around parts of the sequences that should not be included in the convolution sum, leading to incorrect results. The minimum zero-padding required for the input block $x_i[n]$ (length $L$) and the impulse response $h[n]$ (length $M$) to obtain linear convolution via circular convolution is to pad the shorter sequence (or both) such that the total length is at least $L+M-1$. In the context of block convolution, the input block $x_i[n]$ (length $L$) is zero-padded to $N = L+M-1$. The impulse response $h[n]$ (length $M$) is also effectively used with this length by padding it with zeros to $N$ before the FFT.
2.  **Application:**
    *   FFT size: $N_{fft} = L + M - 1 = 128 + 256 - 1 = 383$. For efficient FFT, it's common to choose the next power of 2, so an FFT size of 512 would typically be used.
    *   Overlap samples: $M-1 = 256 - 1 = 255$ samples.
    *   Number of blocks: $\lceil 1000 / 128 \rceil = \lceil 7.8125 \rceil = 8$ blocks.
3.  **Algorithm Comparison:**
    *   **Overlap-Add:** Output blocks from the convolution are of length $L+M-1$. These blocks are then *added* together in overlapping segments ($M-1$ samples). Each output block contributes its full length, but the overlapping parts are summed.
    *   **Overlap-Save:** Input blocks are usually of length $L+M-1$ with a small overlap in the input signal. The convolution is performed on these larger blocks, but only the central $L$ samples of the output are kept (the first $M-1$ and last $M-1$ samples are discarded as they contain invalid wrap-around data). These valid $L$ samples are then appended to form the final output.
4.  **MATLAB/Python:** (See code example in Section 7. The verification step is crucial here.)

### 10. Important Points to Remember

*   **Efficiency:** Overlap-Add (and Overlap-Save) are essential for efficient FIR filtering of long signals, especially in real-time applications.
*   **FFT Property:** The method hinges on the property that circular convolution in the frequency domain equals linear convolution in the time domain when sufficient zero-padding is applied.
*   **Overlap Amount:** The overlap between output blocks is $M-1$, where $M$ is the length of the impulse response.
*   **Addition Strategy:** In Overlap-Add, the samples from consecutive output blocks are added to reconstruct the final output sequence. The $k$-th sample of the $i$-th output block ($y_i[k]$) contributes to the overall output at index $iL+k$.
*   **Block Size ($L$):** The choice of $L$ is a trade-off. Larger $L$ reduces block overhead but increases FFT size. Smaller $L$ increases block overhead but reduces FFT size.
*   **Output Length:** The final output of the convolution will have a length of $N_{input} + M - 1$.

This concludes the study notes on Overlap-Add Block Convolution. Understanding this method is key to implementing efficient digital filters for real-world applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
