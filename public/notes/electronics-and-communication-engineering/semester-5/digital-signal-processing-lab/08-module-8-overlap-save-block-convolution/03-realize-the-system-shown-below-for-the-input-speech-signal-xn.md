---
title: "Realize the system shown below for the input speech signal x[n]."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 8: Overlap Save Block Convolution"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec5a"
status: "completed"
scrapedAt: "2026-05-23T17:56:18.417Z"
---
# DIGITAL SIGNAL PROCESSING LAB: Module 8 - Overlap Save Block Convolution

## 1. Introduction to Block Convolution

Block convolution is a method for computing the convolution of a long input signal with a Finite Impulse Response (FIR) filter. It's particularly useful for real-time applications or when dealing with signals too large to be processed entirely in memory at once. The core idea is to break down the long input signal into smaller blocks and process each block separately, then combine the results.

There are two main block convolution methods:
*   **Overlap-Add Method:** Each block of the output is added to the overlapping portion of the previous block's output.
*   **Overlap-Save Method:** Each block of the input is processed, and a portion of the output is discarded to avoid aliasing. The remaining portions are then concatenated to form the final output.

This module focuses on the **Overlap-Save Method**.

### Key Concepts:

*   **Convolution:** The operation that describes the effect of a Linear Time-Invariant (LTI) system on an input signal. For discrete-time signals, convolution is defined as:
    $y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$
    (Proakis & Ingle, 3rd Ed., Chapter 3)

*   **FIR Filter:** A filter whose impulse response $h[n]$ is of finite duration.

*   **Block Processing:** Dividing a long signal into smaller segments or blocks for processing.

## 2. The Overlap-Save Method Explained

The Overlap-Save method is efficient because it utilizes the Fast Fourier Transform (FFT) for convolution, which is computationally faster than direct convolution for longer blocks.

### 2.1. Why Block Convolution?

*   **Computational Efficiency:** FFT-based convolution is faster than direct convolution for sufficiently large block sizes.
*   **Memory Management:** Allows processing of signals that exceed available memory.
*   **Real-time Processing:** Essential for systems where data arrives sequentially and needs immediate processing.

### 2.2. The Problem with Direct Block Processing

If we simply convolve blocks of the input signal with the filter independently, we run into issues due to the finite duration of the filter. Specifically, the output of a block can depend on input samples that are not included in that block. This leads to incorrect results.

### 2.3. The Overlap-Save Solution

The Overlap-Save method addresses this by:

1.  **Padding the Input Signal:** The input signal $x[n]$ is divided into blocks of size $L$.
2.  **Padding the Filter:** The FIR filter $h[n]$ of length $M$ is padded with zeros to a length $N$ such that $N \ge L + M - 1$. This is to facilitate FFT-based convolution.
3.  **Circular Convolution via FFT:** Each block of the input, along with a certain overlap of samples from the *previous* block, is processed. However, in Overlap-Save, we achieve this by prepending a certain number of zeros to the input block.
    *   Let the input signal be $x[n]$.
    *   Divide $x[n]$ into blocks of length $L$.
    *   Let the filter be $h[n]$ of length $M$.
    *   For FFT-based convolution, we need to work with blocks of length $N$, where $N \ge L + M - 1$.
    *   **Crucial Step:** For each block $x_k[n]$ of length $L$ (where $n = 0, 1, \dots, L-1$ corresponds to the $k$-th block), we prepend $M-1$ zeros to create a block of length $L + M - 1$.
    *   This augmented block is then convolved with the filter (also padded to length $N$) using FFT. The result of this circular convolution will be of length $N$.
    *   **Saving the Output:** The first $M-1$ samples of the convolution output are discarded (saved) because they are affected by the prepended zeros and are not the true convolution result for this block.
    *   The remaining $L$ samples of the convolution output are saved and form a block of the final output $y[n]$.
    *   **Overlap:** The key insight is that the last $M-1$ samples of the previous block's *true* output are needed to correctly compute the first $M-1$ samples of the current block's *true* output. By prepending $M-1$ zeros to each input block, we effectively provide these missing "past" samples to the FFT convolution, but the *result* of this process will have invalid outputs in the first $M-1$ samples, which we discard. The valid $L$ samples from the current block correctly correspond to the output generated from the $L$ input samples of that block.

(Oppenheim & Schafer, 4th Ed., Chapter 7 discusses block convolution and FFT-based filtering.)

### 2.4. Mathematical Derivation (Simplified)

Let $x[n]$ be the input signal and $h[n]$ be the filter of length $M$. We want to compute $y[n] = x[n] * h[n]$.
Let $x_k[n]$ be the $k$-th block of input samples of length $L$, i.e., $x_k[n] = x[kL + n]$ for $n=0, \dots, L-1$.
We pad $h[n]$ with zeros to length $N$, where $N \ge L+M-1$. Let this be $h_N[n]$.
For each block $x_k[n]$, we create an augmented block $\tilde{x}_k[n]$ of length $N$:
$\tilde{x}_k[n] = \begin{cases} x[kL + n - (M-1)] & \text{for } n = M-1, \dots, L+M-2 \\ 0 & \text{otherwise} \end{cases}$
This $\tilde{x}_k[n]$ represents $x[n]$ shifted and windowed to align correctly with the filter for the $k$-th block, effectively including $M-1$ samples from the previous block.

The FFT of $\tilde{x}_k[n]$ is $X_k(z)|_{z=e^{j\omega}}$.
The FFT of $h_N[n]$ is $H(z)|_{z=e^{j\omega}}$.
The convolution in the frequency domain is $Y_k(z) = X_k(z)H(z)$.
Taking the inverse FFT, we get the circular convolution: $y_k[n] = \text{ifft}(X_k(z)H(z))$.
The first $M-1$ samples of $y_k[n]$ are discarded. The remaining $L$ samples $(y_k[n]$ for $n = M-1, \dots, L+M-2)$ are the output of the $k$-th block.
These $L$ samples are then concatenated to form the final output $y[n]$.

**Simplified Practical Implementation:**

1.  **Input Signal Partitioning:** Divide the input signal $x[n]$ into non-overlapping blocks of length $L$.
2.  **Filter Padding:** Pad the filter $h[n]$ with zeros to length $N = L+M-1$.
3.  **Block Processing Loop:** For each input block $x_k$ of length $L$:
    *   **Prepend Zeros:** Create an intermediate block $\tilde{x}_k$ by prepending $M-1$ zeros to $x_k$. The length of $\tilde{x}_k$ is $L + M - 1$.
    *   **FFT Convolution:** Compute the convolution of $\tilde{x}_k$ and $h$ using FFT:
        $Y_k = \text{ifft}(\text{fft}(\tilde{x}_k, N) \cdot \text{fft}(h, N))$
        (Note: $h$ is already padded to length $N$ if needed for the FFT).
    *   **Discard & Save:** Discard the first $M-1$ samples of $Y_k$. Save the remaining $L$ samples as the output block $y_k$.
4.  **Concatenate:** Concatenate all the saved output blocks $y_k$ to form the final output signal $y[n]$.

### 2.5. Choosing Block Sizes $L$ and $N$

*   **Filter Length ($M$):** This is fixed by the system's FIR coefficients.
*   **FFT Length ($N$):** It must be at least $L + M - 1$. For FFT efficiency, $N$ is often chosen as a power of 2. A common practice is to choose $N = 2^{\lceil \log_2(L+M-1) \rceil}$.
*   **Block Size ($L$):**
    *   Larger $L$ means fewer blocks, reducing overhead from FFTs and block management.
    *   Larger $L$ requires larger $N$, which can increase computation per block.
    *   A trade-off exists between block size and FFT size.

(Downey, Think DSP, Chapter 5 discusses FFTs and their applications, including convolution.)

## 3. System Realization for Speech Signal $x[n]$

The objective is to realize a system using the Overlap-Save method for a given input speech signal $x[n]$ and an FIR filter $h[n]$ (which defines the LTI system).

### 3.1. Steps Involved

1.  **Load Speech Signal:** Read the input speech signal $x[n]$ into a vector or array.
2.  **Define FIR Filter:** Define the coefficients of the FIR filter $h[n]$. This filter could be for example, a low-pass filter designed in a previous module (CO5).
3.  **Determine Block Parameters:**
    *   Filter length $M = \text{length}(h)$.
    *   Choose an input block size $L$.
    *   Calculate the FFT size $N$. A common choice is $N \ge L + M - 1$, often a power of 2.
4.  **Pad the Filter:** Pad the filter $h[n]$ with zeros to length $N$.
5.  **Process the Input Signal:**
    *   Initialize an empty output array.
    *   Iterate through the input signal $x[n]$ in blocks of size $L$.
    *   For each block $x_k$:
        *   Prepend $M-1$ zeros to $x_k$ to create $\tilde{x}_k$.
        *   Compute the FFT of $\tilde{x}_k$ and the padded filter $h$.
        *   Multiply the FFTs.
        *   Compute the Inverse FFT of the product.
        *   Discard the first $M-1$ samples of the IFFT result.
        *   Append the remaining $L$ samples to the output array.
6.  **Handle Remaining Samples:** If the total length of $x[n]$ is not a multiple of $L$, the last block will be shorter. Handle this last block appropriately, possibly by padding it to length $L$ before processing or by adjusting the overlap calculation.
7.  **Output:** The concatenated blocks form the convolved output signal $y[n]$.

### 3.2. Example Implementation (Conceptual - MATLAB/Python)

Let's assume we have a speech signal `speech_signal` and filter coefficients `filter_coeffs`.

```matlab
% Assume speech_signal and filter_coeffs are loaded

M = length(filter_coeffs);     % Filter length
L = 1024;                      % Input block size (example)
N = L + M - 1;                 % FFT size (or next power of 2 for efficiency)
N = 2^nextpow2(N);            % Using power of 2 for FFT efficiency

% Pad filter to length N
h_padded = [filter_coeffs, zeros(1, N - M)];

output_signal = [];
num_samples = length(speech_signal);
start_index = 1;

while start_index <= num_samples
    % Extract input block
    end_index = min(start_index + L - 1, num_samples);
    x_k = speech_signal(start_index : end_index);

    % Pad the current input block to length L if it's the last partial block
    if length(x_k) < L
        x_k = [x_k, zeros(1, L - length(x_k))];
    end

    % Create the augmented block: prepend M-1 zeros
    % Note: In practice, this often means taking M-1 samples from the *previous* block's
    % *valid* output to correctly form the convolution.
    % A more direct way for Overlap-Save implementation using FFT is:
    % Take a block of L input samples, prepend M-1 zeros, then FFT-convolve.
    % The first M-1 outputs are invalid.
    % Let's refine the block processing step for clarity:

    % Overlap-Save specific processing for a block of L input samples:
    % Take L input samples. These samples will contribute to L output samples.
    % To get these L correct output samples using N-point FFT convolution,
    % we need to process an input segment of length L + M - 1.
    % In overlap-save, we take L samples from the input, prepended by M-1 zeros.
    % This block of L+M-1 samples is then FFT-convolved with the filter (padded to N).
    % The first M-1 outputs are discarded, and the last L are kept.

    % Let's re-think the loop for Overlap-Save more precisely:
    % We need to process segments of length L. Each segment produces L valid outputs.
    % Total input segment length for FFT convolution to produce L outputs is L+M-1.
    % We use an N-point FFT, N >= L+M-1.

    % The 'overlap-save' method, when implemented using FFT blocks, usually works as follows:
    % 1. Take a block of input data of length L.
    % 2. Prepend M-1 zeros to this block. The total length is L+M-1.
    % 3. Perform N-point FFT convolution of this (L+M-1) block with the filter (padded to N).
    % 4. The first M-1 points of the resulting N-point output are discarded.
    % 5. The remaining L points are saved as the output block.
    % 6. For the next block of input data (next L samples), repeat.

    % Revised loop logic:
    current_block_start = start_index;
    current_block_end = min(start_index + L - 1, num_samples);
    input_block = speech_signal(current_block_start : current_block_end);

    % Pad input block to length L if it's the last partial block
    if length(input_block) < L
        input_block = [input_block, zeros(1, L - length(input_block))];
    end

    % Create the augmented block for Overlap-Save (L+M-1 samples)
    % This block effectively aligns the current L input samples for N-point FFT convolution.
    % The M-1 leading zeros help in avoiding wraparound issues in the first M-1 output samples,
    % which are then discarded.
    augmented_input_block = [zeros(1, M - 1), input_block]; % Length L+M-1

    % Perform N-point FFT convolution
    fft_input = fft(augmented_input_block, N);
    fft_filter = fft(h_padded, N);
    fft_output = fft_input .* fft_filter;
    output_block_full = ifft(fft_output);

    % Discard the first M-1 samples and save the next L samples
    output_block_valid = output_block_full(M : L + M - 1); % Extract L samples starting from index M

    % Append the valid output block to the final output
    output_signal = [output_signal, output_block_valid];

    % Move to the next block of L input samples
    start_index = start_index + L;
end

% Truncate output_signal if it's longer than expected due to final block handling
expected_output_len = num_samples + M - 1; % Approximate
if length(output_signal) > expected_output_len
    output_signal = output_signal(1:expected_output_len);
end

% Now 'output_signal' contains the result of the convolution
```

(Chassaing, DSP applications using C and the TMS320C6x DSK, discusses block processing and FFT convolution in detail for embedded systems.)

## 4. Learning Outcomes Alignment

This module directly addresses the following learning outcomes:

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2)**
    *   While not directly generating waveforms, understanding the input speech signal involves recognizing its characteristics, which are built upon basic signal concepts. The process of blocking and windowing can be seen as manipulating signal segments.

*   **CO2: Verify the properties of DFT (Knowledge Level: K2)**
    *   The Overlap-Save method relies heavily on the property that convolution in the time domain is multiplication in the frequency domain (via DFT/FFT). The success of the method validates this property.

*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2)**
    *   Although this module is likely implemented in software (Matlab/Python), the concepts of block processing and FFT convolution are fundamental to how DSP hardware performs efficient filtering, especially in real-time applications. The lab exercise requires interfacing with the computer to load data, run algorithms, and display results.

*   **CO4: Implement LTI systems (Knowledge Level: K3)**
    *   This is a core outcome. The FIR filter $h[n]$ represents an LTI system, and the block convolution technique is a method to implement the convolution operation, which is the defining characteristic of LTI systems.

*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3)**
    *   The FIR filter $h[n]$ used in the system realization could be a low-pass filter designed using methods learned in previous modules. This lab exercises the implementation of such a filter on a real-world signal.

## 5. Important Points to Remember

*   **Overlap-Save vs. Overlap-Add:** Understand the fundamental difference in how they handle the overlap. Overlap-Save discards initial output samples from each block, while Overlap-Add adds portions of output blocks.
*   **FFT Efficiency:** The benefit of this method comes from using FFT for convolution. Choose $N$ as a power of 2 for maximum FFT speed.
*   **Block Size Selection:** The choice of $L$ is a trade-off. Larger $L$ reduces overhead but requires larger $N$.
*   **Padding:** Correct zero-padding of the filter to length $N$ and prepending $M-1$ zeros to input blocks is critical.
*   **Discarding Samples:** Remember to discard the first $M-1$ samples of the FFT convolution output for each block.
*   **Real-time Context:** This method is crucial for real-time DSP where data arrives sequentially.

## 6. Practice Questions and Exercises

**Question 1:**
Explain why simply convolving blocks of input data with an FIR filter using FFTs independently would lead to incorrect results.

**Answer 1:**
Simply convolving blocks independently using FFTs results in circular convolution within each block. The FIR filter has a finite duration, meaning its output at any given time depends on a finite number of past input samples. When processing blocks separately, the circular convolution inherently assumes that the signal is periodic. The initial samples of the FFT convolution output are affected by "wrap-around" or aliasing from the end of the block to the beginning. For an FIR filter of length $M$, the first $M-1$ output samples of a block convolution using circular convolution are corrupted because they depend on input samples that are not contained within that specific block. The Overlap-Save method overcomes this by processing input segments of length $L+M-1$ and discarding the first $M-1$ output samples, which correspond to the corrupted portion.

**Question 2:**
Consider an FIR filter of length $M=5$. If we choose an input block size $L=64$, what should be the minimum size of the FFT ($N$) used for convolution? What is a common choice for $N$ for efficiency?

**Answer 2:**
The minimum size of the FFT ($N$) must be at least $L + M - 1$.
Given $M=5$ and $L=64$:
Minimum $N = 64 + 5 - 1 = 68$.

A common choice for $N$ for efficiency is the smallest power of 2 that is greater than or equal to $L+M-1$.
The smallest power of 2 greater than or equal to 68 is $2^7 = 128$.
So, a common efficient choice for $N$ would be 128.

**Question 3:**
Describe the specific modification made to an input block of length $L$ before performing FFT convolution in the Overlap-Save method.

**Answer 3:**
Before performing FFT convolution for an input block of length $L$, $M-1$ zeros are prepended to the block. This creates an "augmented" block of length $L + M - 1$. This augmented block is then used in the $N$-point FFT convolution. The first $M-1$ samples of the resulting convolution output are then discarded.

**Exercise 1:**
Implement the Overlap-Save method in MATLAB or Python for a simple input signal $x[n] = \text{chirp}(n, 0, 100, 50)$ for $n=0$ to $999$, and an FIR filter $h[n]$ representing a moving average of 3 samples: $h[n] = [1/3, 1/3, 1/3]$. Compare the output to the result obtained using MATLAB's `filter` or Python's `scipy.signal.lfilter` and `scipy.signal.convolve`.

**Hint:**
*   Load the chirp signal.
*   Define the moving average filter $h = [1/3, 1/3, 1/3]$.
*   Choose $L$ and $N$ appropriately.
*   Implement the block processing loop as described in Section 3.2.
*   Use `filter` or `lfilter` for the direct convolution result.
*   Use `conv` or `scipy.signal.convolve` for a direct, non-blocked convolution reference.

**Exercise 2:**
Repeat Exercise 1 with a longer speech signal and a more complex FIR filter (e.g., a designed low-pass filter). Analyze the computational time difference if possible (though this is more for understanding the concept than precise benchmarking in this context).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 7. References

*   **Proakis, John G., and Vinay K. Ingle. *Digital Signal Processing using Matlab*. Cengage Learning, 3rd Ed., 2011.** (Key references for understanding convolution, FIR filters, and FFT applications in DSP.)
*   **Downey, Allen B. *Think DSP: Digital Signal Processing using Python*. Green Tea Press, 1st Ed. 2019.** (Provides practical Python examples and good explanations of FFT and its uses.)
*   **Chassaing, Rulph. *DSP applications using C and the TMS320C6x DSK*. Wiley & Sons, 2/e. 2008.** (Excellent for understanding block processing in the context of embedded DSP hardware.)
*   **Oppenheim, Alan V., and Ronald W. Schafer. *Discrete-Time Signal Processing*. Pearson Education, 4th Ed., 2018.** (A foundational text for in-depth understanding of LTI systems and convolution methods.)