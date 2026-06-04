---
title: "Implement the overlap save block convolution method"
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 8: Overlap Save Block Convolution"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec5c"
status: "completed"
scrapedAt: "2026-05-23T17:56:19.842Z"
---
# DIGITAL SIGNAL PROCESSING LAB: Module 8 - Overlap Save Block Convolution

## Topic: Implement the Overlap Save Block Convolution Method

---

### Introduction

Block convolution is a technique used to efficiently compute the convolution of a long input signal with a finite impulse response (FIR) filter. Direct convolution of a very long signal can be computationally expensive and memory-intensive. Block convolution, and specifically the Overlap Save method, breaks down the long convolution into smaller, manageable blocks, significantly improving computational efficiency.

This module focuses on understanding and implementing the **Overlap Save** method for block convolution. This method is particularly useful in real-time applications where the input signal is processed in chunks.

---

### 1. Learning Outcomes

Upon successful completion of this module, you should be able to:

*   Understand the concept of block convolution.
*   Explain the principles behind the Overlap Save method.
*   Implement the Overlap Save block convolution algorithm in a simulation environment (e.g., MATLAB, Python).
*   Analyze the computational efficiency of the Overlap Save method compared to direct convolution.
*   Apply the Overlap Save method to process long signals through an FIR filter.

---

### 2. Key Concepts and Definitions

#### 2.1. Convolution

Convolution is a fundamental operation in Digital Signal Processing (DSP) that describes the effect of a Linear Time-Invariant (LTI) system on an input signal. For discrete-time signals, the convolution of an input signal $x[n]$ with an impulse response $h[n]$ is given by:

$y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$

**Important Note:** For a causal FIR filter of length $M$ and an input signal of length $N$, the output signal $y[n]$ will have a length of $N+M-1$.

#### 2.2. Computational Complexity of Direct Convolution

Direct convolution involves $N$ multiplications and $N-1$ additions for each output sample, resulting in a total of $O(NM)$ operations for an input signal of length $N$ and filter of length $M$. This can become prohibitive for large $N$.

#### 2.3. Block Convolution

Block convolution aims to reduce the computational burden by processing the input signal in blocks. The core idea is to compute the convolution of segments of the input signal with the filter and then combine these results to obtain the overall convolution.

#### 2.4. Overlap Save Method

The Overlap Save method is a block convolution technique that is well-suited for real-time processing. It leverages the Fast Fourier Transform (FFT) for efficient convolution. The key ideas are:

*   **Blocking the Input:** The long input signal $x[n]$ is divided into blocks of length $L$.
*   **Zero-Padding the Filter:** The FIR filter $h[n]$ of length $M$ is zero-padded to a length equal to the block size $L$.
*   **Circular Convolution:** For each block, we compute the *circular convolution* of the padded filter with a portion of the input block. Circular convolution can be efficiently computed using the FFT.
*   **Overlap and Save:** The crucial insight of the Overlap Save method is that only a portion of the circular convolution result is valid and useful for the final output. Specifically, the first $M-1$ samples of the circular convolution result for each block are "artifacts" or "overlaps" from the previous block and are discarded ("saved" for the next block). The remaining $L$ samples are the valid output samples corresponding to that block of input.

**Why "Overlap Save"?**
The term "Overlap Save" refers to the fact that each input block overlaps with the previous one by $M-1$ samples. These overlapping samples are "saved" and are used in the computation of the output for the *current* block, rather than being discarded. However, the term is often used to describe the method where the first $M-1$ samples of the *output* of each circular convolution are discarded. Let's clarify this:

*   **Input Blocking:** We take input blocks $x_i[n]$ of length $L$.
*   **Filter Preparation:** We zero-pad the filter $h[n]$ to length $L$. We also need to consider that the output of a convolution of a signal of length $L$ with a filter of length $M$ will have length $L+M-1$. To make this computationally efficient with FFTs of length $L$, we usually choose $L \ge M$.
*   **FFT Convolution:** Compute the circular convolution of $x_i[n]$ with $h[n]$ (zero-padded to $L$). This is done by taking the FFT of $x_i[n]$, the FFT of $h[n]$ (padded to length $L$), multiplying them element-wise, and then taking the inverse FFT (IFFT). Let this result be $y_i[n]$.
*   **Discarding Artifacts:** The first $M-1$ samples of $y_i[n]$ are discarded. These are the samples that would have been affected by the elements in the input block that were *not* included in $x_i[n]$ (i.e., the "overlap" from the *previous* block's output calculation).
*   **Saving Valid Output:** The remaining $L$ samples of $y_i[n]$ are the valid output samples corresponding to the input block $x_i[n]$. These are concatenated to form the final output $y[n]$.

**Choosing Block Size ($L$) and Filter Length ($M$)**

*   **$L \ge M$:** To ensure that the circular convolution result ($L+M-1$ samples) contains enough valid points and to avoid aliasing issues with the FFT. A common choice is to make the FFT length $L$ a power of 2 for computational efficiency.
*   **$L+M-1$:** The length of the circular convolution output.
*   **Valid Output Length:** $L$ samples per block.
*   **Number of Samples to Discard:** $M-1$ samples per block.

**Visualizing the Overlap Save Method:**

Let $x[n]$ be the input signal and $h[n]$ be the filter. Let $M$ be the filter length and $L$ be the block size.

1.  **Input $x[n]$:**
    $x[0], x[1], ..., x[L-1], x[L], ..., x[2L-1], ...$

2.  **Block 1 ($x_1[n]$):**
    $x[0], x[1], ..., x[L-1]$ (Length $L$)
    *Zero-pad $h[n]$ to length $L$.*
    *Compute circular convolution $y_1[n]$ = $x_1[n] \circledast h_{padded}[n]$ (Length $L$)*
    *Discard $y_1[0], ..., y_1[M-2]$ (M-1 samples).*
    *Save $y_1[M-1], ..., y_1[L-1]$ (L - (M-1) samples).*

3.  **Block 2 ($x_2[n]$):**
    We need $M-1$ samples from the previous input block to ensure continuity. So, the actual input to the circular convolution will be:
    $x[L-(M-1)], ..., x[L-1], x[L], ..., x[2L-2]$ (Length $L$)
    *Zero-pad $h[n]$ to length $L$.*
    *Compute circular convolution $y_2[n]$ = $x_2[n] \circledast h_{padded}[n]$ (Length $L$)*
    *Discard $y_2[0], ..., y_2[M-2]$ (M-1 samples).*
    *Save $y_2[M-1], ..., y_2[L-1]$ (L - (M-1) samples).*

**Crucial Correction for Overlap Save:** The input to the circular convolution should be a block of length $L$, but it's constructed such that it includes the necessary overlap from the previous input block.

Let's refine the input blocking for Overlap Save:

*   **Input $x[n]$:**
    $x[0], x[1], ..., x[L-1], x[L], ..., x[2L-1], x[2L], ...$
*   **Filter $h[n]$:** Length $M$. Zero-pad $h[n]$ to length $L$.
*   **Block 1:**
    *   Input block for circular convolution: $x_{conv1}[n] = [x[0], x[1], ..., x[L-1]]$ (Length $L$).
    *   Compute $y_{conv1}[n] = x_{conv1}[n] \circledast h_{padded}[n]$ (Length $L$).
    *   Discard the first $M-1$ samples of $y_{conv1}[n]$: $y_{conv1}[0], ..., y_{conv1}[M-2]$.
    *   The valid output samples for the first block are: $y_{conv1}[M-1], ..., y_{conv1}[L-1]$. (Length $L - (M-1)$).
*   **Block 2:**
    *   The input for the second circular convolution needs to include the last $M-1$ samples of the *previous input block*.
    *   Input block for circular convolution: $x_{conv2}[n] = [x[L-(M-1)], ..., x[L-1], x[L], ..., x[2L-2]]$ (Length $L$).
    *   Compute $y_{conv2}[n] = x_{conv2}[n] \circledast h_{padded}[n]$ (Length $L$).
    *   Discard the first $M-1$ samples of $y_{conv2}[n]$: $y_{conv2}[0], ..., y_{conv2}[M-2]$.
    *   The valid output samples for the second block are: $y_{conv2}[M-1], ..., y_{conv2}[L-1]$. (Length $L - (M-1)$).

**Important:** Each input block $x_{conv, i}[n]$ for the circular convolution has length $L$. The actual input signal samples used are $x[ (i-1)(L-(M-1)) : (i-1)(L-(M-1)) + L -1 ]$. This formulation ensures the overlap.

Let's use a more standard approach with consistent block indices:

Assume input signal $x[n]$ of length $N$. Filter $h[n]$ of length $M$.
Choose block size $L$ such that $L \ge M$. A common choice is $L$ being a power of 2. The FFT length will be $L$.

**Algorithm Steps:**

1.  **Initialization:**
    *   Create an input buffer of size $L$.
    *   Create a filter $h[n]$ of length $M$.
    *   Zero-pad $h[n]$ to length $L$ to get $h_{padded}[n]$.
    *   Compute the FFT of $h_{padded}[n]$: $H(k) = \text{FFT}(h_{padded}[n])$. Store this.
    *   Initialize an output buffer and an "overlap" buffer (of size $M-1$) for the input.

2.  **Process Blocks:**
    For each block $i$ of the input signal $x[n]$:
    a.  **Form Input Block for Convolution:**
        *   Take the previous $M-1$ "saved" input samples (if any).
        *   Take the next $L-(M-1)$ samples from the input signal $x[n]$.
        *   Concatenate these to form the input block for FFT convolution, $x_{conv,i}[n]$, of length $L$.
        *   The $M-1$ samples from the previous block are the first $M-1$ samples of $x_{conv,i}[n]$. The subsequent $L-(M-1)$ samples are from the current chunk of $x[n]$.
    b.  **Compute FFT:** Compute the FFT of $x_{conv,i}[n]$: $X_{conv,i}(k) = \text{FFT}(x_{conv,i}[n])$.
    c.  **Multiply in Frequency Domain:** Compute $Y_{conv,i}(k) = X_{conv,i}(k) \cdot H(k)$ (element-wise multiplication).
    d.  **Compute IFFT:** Compute the IFFT: $y_{conv,i}[n] = \text{IFFT}(Y_{conv,i}(k))$. This result has length $L$.
    e.  **Extract Valid Output:** The valid output samples for this block are the last $L - (M-1)$ samples of $y_{conv,i}[n]$. These are $y_{conv,i}[M-1], y_{conv,i}[M], ..., y_{conv,i}[L-1]$.
    f.  **Append to Output:** Append these valid samples to the overall output signal $y[n]$.
    g.  **Save Overlap:** Save the last $M-1$ samples of the current input block ($x_{conv,i}[L-(M-1)], ..., x_{conv,i}[L-1]$) to be used as the overlap for the *next* block's input.

**Example:**

*   Input signal $x[n]$: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` ($N=10$)
*   Filter $h[n]$: `[1, 0.5, 0.2]` ($M=3$)
*   Block size $L=4$. FFT length = 4.
*   Number of samples to discard = $M-1 = 2$.
*   Number of valid output samples per block = $L - (M-1) = 4 - 2 = 2$.

**Steps:**

1.  **Filter Prep:**
    *   $h_{padded}[n] = [1, 0.5, 0.2, 0]$ (Length $L=4$)
    *   $H(k) = \text{FFT}([1, 0.5, 0.2, 0])$

2.  **Block 1:**
    *   **Input overlap (saved from previous, initially empty):** [] (Length 0)
    *   **Next input samples:** $x[0], x[1], x[2], x[3]$ = `[1, 2, 3, 4]`
    *   **Input block for convolution ($x_{conv1}$):** `[1, 2, 3, 4]` (Length $L=4$)
    *   **Compute $X_{conv1}(k) = \text{FFT}([1, 2, 3, 4])$**
    *   **Compute $Y_{conv1}(k) = X_{conv1}(k) \cdot H(k)$**
    *   **Compute $y_{conv1}[n] = \text{IFFT}(Y_{conv1}(k))$** (Length 4)
        *(Let's assume for this example that the result is roughly [1, 2.5, 3.7, 4.4])*
    *   **Discard first $M-1=2$ samples:** Discard `1, 2.5`
    *   **Save valid output samples:** `[3.7, 4.4]` (Length $L-(M-1)=2$). Append to overall output.
    *   **Save overlap for next block:** Last $M-1=2$ samples of $x_{conv1}$: `[3, 4]`.

3.  **Block 2:**
    *   **Input overlap (saved from previous):** `[3, 4]` (Length $M-1=2$)
    *   **Next input samples:** $x[4], x[5]$ = `[5, 6]`
    *   **Input block for convolution ($x_{conv2}$):** `[3, 4, 5, 6]` (Length $L=4$)
    *   **Compute $X_{conv2}(k) = \text{FFT}([3, 4, 5, 6])$**
    *   **Compute $Y_{conv2}(k) = X_{conv2}(k) \cdot H(k)$**
    *   **Compute $y_{conv2}[n] = \text{IFFT}(Y_{conv2}(k))$** (Length 4)
        *(Let's assume for this example that the result is roughly [3, 6.5, 8.7, 9.4])*
    *   **Discard first $M-1=2$ samples:** Discard `3, 6.5`
    *   **Save valid output samples:** `[8.7, 9.4]` (Length $L-(M-1)=2$). Append to overall output.
    *   **Save overlap for next block:** Last $M-1=2$ samples of $x_{conv2}$: `[5, 6]`.

4.  **Block 3:**
    *   **Input overlap (saved from previous):** `[5, 6]` (Length $M-1=2$)
    *   **Next input samples:** $x[6], x[7]$ = `[7, 8]`
    *   **Input block for convolution ($x_{conv3}$):** `[5, 6, 7, 8]` (Length $L=4$)
    *   **Compute $X_{conv3}(k) = \text{FFT}([5, 6, 7, 8])$**
    *   **Compute $Y_{conv3}(k) = X_{conv3}(k) \cdot H(k)$**
    *   **Compute $y_{conv3}[n] = \text{IFFT}(Y_{conv3}(k))$** (Length 4)
        *(Let's assume for this example that the result is roughly [5, 9.5, 11.7, 12.4])*
    *   **Discard first $M-1=2$ samples:** Discard `5, 9.5`
    *   **Save valid output samples:** `[11.7, 12.4]` (Length $L-(M-1)=2$). Append to overall output.
    *   **Save overlap for next block:** Last $M-1=2$ samples of $x_{conv3}$: `[7, 8]`.

5.  **Block 4:**
    *   **Input overlap (saved from previous):** `[7, 8]` (Length $M-1=2$)
    *   **Next input samples:** $x[8], x[9]$ = `[9, 10]`
    *   **Input block for convolution ($x_{conv4}$):** `[7, 8, 9, 10]` (Length $L=4$)
    *   **Compute $X_{conv4}(k) = \text{FFT}([7, 8, 9, 10])$**
    *   **Compute $Y_{conv4}(k) = X_{conv4}(k) \cdot H(k)$**
    *   **Compute $y_{conv4}[n] = \text{IFFT}(Y_{conv4}(k))$** (Length 4)
        *(Let's assume for this example that the result is roughly [7, 10.5, 13.7, 14.4])*
    *   **Discard first $M-1=2$ samples:** Discard `7, 10.5`
    *   **Save valid output samples:** `[13.7, 14.4]` (Length $L-(M-1)=2$). Append to overall output.
    *   **Save overlap for next block:** Last $M-1=2$ samples of $x_{conv4}$: `[9, 10]`.

**Final Output (concatenated):** `[3.7, 4.4, 8.7, 9.4, 11.7, 12.4, 13.7, 14.4]`

**Note on Output Length:** The total number of valid output samples generated is $N_{blocks} \times (L - (M-1))$. In this case, $4 \times 2 = 8$. The direct convolution of a length 10 signal with a length 3 filter would yield $10+3-1 = 12$ samples. This discrepancy is because the last block of input does not have enough subsequent samples to produce a full $L$ output samples after the $M-1$ overlap. The Overlap Save method effectively produces $N-M+1$ output samples that are valid.

The total length of the output $y[n]$ should be $N+M-1$. The Overlap Save method generates $(N - (M-1)) / (L - (M-1)) \times (L-(M-1))$ samples.
Let $N_{total}$ be the length of the input signal.
Number of blocks $N_{blocks} = \lceil \frac{N_{total}}{L - (M-1)} \rceil$.
Total valid output samples produced = $N_{blocks} \times (L-(M-1))$. This should ideally be close to $N_{total} + M - 1$.

A better way to think about the input block construction for $x_{conv,i}[n]$:

Let $L$ be the FFT length. The number of input samples used for each circular convolution is $L$.
The number of output samples taken from each circular convolution is $L$.
The number of output samples discarded is $M-1$.
The number of output samples kept is $L-(M-1)$.

*   **Input $x[n]$ of length $N$. Filter $h[n]$ of length $M$. Block size $L \ge M$.**
*   **Pad $h[n]$ to length $L$. Compute $H(k)$.**
*   **Initialize:** `overlap_input = zeros(1, M-1)`
*   **Initialize:** `output = []`
*   **Loop through input signal in steps of $L-(M-1)$:**
    *   `start_idx = current_step_start`
    *   `end_idx = start_idx + L - 1` (This might go beyond $N$)
    *   **Construct input block for FFT convolution ($x_{conv}$):**
        *   `x_conv = [overlap_input, x[start_idx : start_idx + L - (M-1) - 1]]`
        *   *Ensure $x[ ]$ indices are valid.* If `start_idx + L - (M-1) - 1` is beyond $N$, pad with zeros.
    *   **Compute $X_{conv}(k) = \text{FFT}(x_{conv})$**
    *   **Compute $Y_{conv}(k) = X_{conv}(k) \cdot H(k)$**
    *   **Compute $y_{conv}[n] = \text{IFFT}(Y_{conv}(k))$**
    *   **Extract valid output:** `valid_y = y_{conv}[M-1 : L-1]`
    *   **Append to output:** `output = [output, valid_y]`
    *   **Save overlap:** `overlap_input = x_conv[L-(M-1) : L-1]`

Let's re-do the example with this more precise input block construction:

*   Input signal $x[n]$: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` ($N=10$)
*   Filter $h[n]$: `[1, 0.5, 0.2]` ($M=3$)
*   Block size $L=4$. FFT length = 4.
*   Samples to discard = $M-1 = 2$.
*   Valid output samples per block = $L-(M-1) = 2$.
*   Input block step size = $L-(M-1) = 2$.

**Steps:**

1.  **Filter Prep:**
    *   $h_{padded}[n] = [1, 0.5, 0.2, 0]$ (Length $L=4$)
    *   $H(k) = \text{FFT}([1, 0.5, 0.2, 0])$

2.  **Block 1 (step_idx = 0):**
    *   **Overlap input (initially empty):** []
    *   **Input samples for this block:** $x[0 : 0 + 2 - 1]$ = $x[0:1]$ = `[1, 2]` (length $L-(M-1)=2$)
    *   **Input block for FFT convolution ($x_{conv1}$):** `[1, 2, 3, 4]` (Length $L=4$). (Overlap is empty, so it's just $x[0..3]$ if available. Let's follow the rule: `overlap_input` + `x[start_idx : start_idx + L - (M-1) - 1]`).
        *   Correct construction: `x_conv = [zeros(1, M-1), x[start_idx : min(N-1, start_idx + L - (M-1) - 1)]]`
        *   For Block 1 (step_idx = 0): `x_conv1 = [0, 0, x[0], x[1]]` ? No, this is wrong.

Let's go back to the standard definition of Overlap-Save input blocking.
The input blocks for the circular convolution *must* be of length $L$.
The input signal is divided into segments of length $L-(M-1)$.

*   Segment 1: $x[0], \dots, x[L-(M-1)-1]$
*   Segment 2: $x[L-(M-1)], \dots, x[2(L-(M-1))-1]$
*   ...

**Input block for circular convolution $i$ ($x_{conv,i}$ of length $L$):**
$x_{conv,i} = [\text{last } M-1 \text{ samples of } x_{conv,i-1}, \text{ next } L-(M-1) \text{ samples of } x[n]]$

Let's manage the input signal indexing carefully.
Total input signal length $N$. Filter length $M$. Block size $L$.
Output length $N+M-1$.

*   **Block 1:**
    *   `input_block_conv_1 = [x[0], x[1], ..., x[L-1]]` (Length $L$). Pad with zeros if $N < L$.
    *   Compute $y_{conv,1} = \text{IFFT}(\text{FFT}(input\_block\_conv\_1) \cdot H(k))$.
    *   `output = [output, y_{conv,1}[M-1 : L-1]]`
    *   `input_overlap_to_save = input_block_conv_1[L-(M-1) : L-1]`

*   **Block 2:**
    *   `input_block_conv_2 = [input_overlap_to_save, x[L] , ..., x[L + (L-(M-1)) - 1]]` (Length $L$). Pad with zeros if needed.
    *   Compute $y_{conv,2} = \text{IFFT}(\text{FFT}(input\_block\_conv\_2) \cdot H(k))$.
    *   `output = [output, y_{conv,2}[M-1 : L-1]]`
    *   `input_overlap_to_save = input_block_conv_2[L-(M-1) : L-1]`

Let's use the example again with this structure:

*   Input signal $x[n]$: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` ($N=10$)
*   Filter $h[n]$: `[1, 0.5, 0.2]` ($M=3$)
*   Block size $L=4$. FFT length = 4.
*   Samples to discard = $M-1 = 2$.
*   Valid output samples per block = $L-(M-1) = 2$.
*   Input signal segments advance by $L-(M-1) = 2$ samples each time.

**Steps:**

1.  **Filter Prep:**
    *   $h_{padded}[n] = [1, 0.5, 0.2, 0]$ (Length $L=4$)
    *   $H(k) = \text{FFT}([1, 0.5, 0.2, 0])$

2.  **Block 1:**
    *   Input signal segment: $x[0:3]$ = `[1, 2, 3, 4]`
    *   Input block for convolution ($x_{conv1}$): `[1, 2, 3, 4]` (Length $L=4$)
    *   Compute $y_{conv1}[n]$ (assume $\approx [1, 2.5, 3.7, 4.4]$)
    *   Valid output: $y_{conv1}[2:3]$ = `[3.7, 4.4]`
    *   Append to output: `output = [3.7, 4.4]`
    *   Save overlap for next block: $x_{conv1}[2:3]$ = `[3, 4]`

3.  **Block 2:**
    *   Input signal segment: $x[4:5]$ = `[5, 6]` (Length $L-(M-1)=2$)
    *   Input block for convolution ($x_{conv2}$): `[3, 4, 5, 6]` (Length $L=4$) (Previous overlap + new segment)
    *   Compute $y_{conv2}[n]$ (assume $\approx [3, 6.5, 8.7, 9.4]$)
    *   Valid output: $y_{conv2}[2:3]$ = `[8.7, 9.4]`
    *   Append to output: `output = [3.7, 4.4, 8.7, 9.4]`
    *   Save overlap for next block: $x_{conv2}[2:3]$ = `[5, 6]`

4.  **Block 3:**
    *   Input signal segment: $x[6:7]$ = `[7, 8]` (Length $L-(M-1)=2$)
    *   Input block for convolution ($x_{conv3}$): `[5, 6, 7, 8]` (Length $L=4$)
    *   Compute $y_{conv3}[n]$ (assume $\approx [5, 9.5, 11.7, 12.4]$)
    *   Valid output: $y_{conv3}[2:3]$ = `[11.7, 12.4]`
    *   Append to output: `output = [3.7, 4.4, 8.7, 9.4, 11.7, 12.4]`
    *   Save overlap for next block: $x_{conv3}[2:3]$ = `[7, 8]`

5.  **Block 4:**
    *   Input signal segment: $x[8:9]$ = `[9, 10]` (Length $L-(M-1)=2$)
    *   Input block for convolution ($x_{conv4}$): `[7, 8, 9, 10]` (Length $L=4$)
    *   Compute $y_{conv4}[n]$ (assume $\approx [7, 10.5, 13.7, 14.4]$)
    *   Valid output: $y_{conv4}[2:3]$ = `[13.7, 14.4]`
    *   Append to output: `output = [3.7, 4.4, 8.7, 9.4, 11.7, 12.4, 13.7, 14.4]`
    *   Save overlap for next block: $x_{conv4}[2:3]$ = `[9, 10]`

The total number of output samples is 8. For direct convolution, it's 12. The Overlap Save method produces the "tail" of the full convolution. The first $M-1$ samples of the actual convolution are not produced by this method. The total number of valid output samples should be $N$.

The number of samples advanced in the input signal for each block is $L-(M-1)$.
Total input samples processed to generate $K$ blocks of valid output:
$N_{processed} = (M-1) + K \times (L - (M-1))$

We need to generate $N$ valid output samples (if we want the full convolution).
If we process $K$ blocks, we get $K \times (L - (M-1))$ output samples.
If we want to cover the entire input $x[n]$ of length $N$, we need to ensure we process enough blocks.
The number of blocks needed is related to how much input signal is consumed.

**Key Point:** The Overlap Save method is most efficient when $L$ is large. The computational cost for each block is dominated by the FFT, which is $O(L \log L)$. If we have $N_{blocks} = \lceil N / (L-(M-1)) \rceil$, the total complexity is roughly $O(N_{blocks} \cdot L \log L)$.
If $L$ is chosen to be proportional to $N$, the complexity is $O(N \log N)$. This is a significant improvement over $O(NM)$.

#### 2.5. Overlap-Add vs. Overlap-Save

*   **Overlap-Add:** Divides input into blocks of length $L$. Each block is convolved with the filter (zero-padded to $L$). The outputs are overlapped and added. The first $M-1$ samples of each block's output are discarded. The remaining $L$ samples are added to the appropriate positions in the overall output.
*   **Overlap-Save:** Divides input into blocks of length $L$. The input blocks for convolution are constructed with an overlap of $M-1$ samples from the previous block. The first $M-1$ samples of the *circular convolution output* are discarded. The remaining $L-(M-1)$ samples are appended to the output.

**Implementation Notes:**

*   Choose $L$ to be a power of 2 for efficient FFT computation.
*   Ensure $L \ge M$.
*   Handle edge cases where the input signal length $N$ is not an exact multiple of $L-(M-1)$. The last input block might need zero-padding.

---

### 3. Implementation Example (Conceptual MATLAB/Python)

```matlab
% --- Parameters ---
N = 100;        % Length of input signal
M = 10;         % Length of FIR filter
L = 64;         % Block size (e.g., power of 2, L >= M)

% Ensure L >= M
if L < M
    error('Block size L must be greater than or equal to filter length M.');
end

% --- Signal and Filter Generation ---
x = randn(1, N);         % Example input signal
h = fir1(M-1, 0.5);      % Example FIR filter (low-pass)

% --- Pre-computation for Overlap-Save ---
% Zero-pad filter to block size L
h_padded = [h, zeros(1, L - M)];

% Compute FFT of the padded filter
H = fft(h_padded);

% --- Overlap-Save Implementation ---
output = [];
input_overlap = zeros(1, M - 1); % Initialize overlap buffer

% Calculate the step size for advancing through the input signal
step_size = L - (M - 1);

% Iterate through the input signal in blocks
for i = 1 : step_size : N
    % --- Form the input block for circular convolution ---
    % Start index for the current segment of x
    x_start_idx = i;
    % Number of new samples to take from x
    num_new_samples = L - (M - 1);
    
    % Ensure we don't go beyond the input signal length
    x_end_idx = min(N, x_start_idx + num_new_samples - 1);
    
    % Get the current segment of x
    current_x_segment = x(x_start_idx : x_end_idx);
    
    % Construct the input block for FFT convolution
    % It consists of the previous overlap and the current segment of x
    x_conv_block = [input_overlap, current_x_segment];
    
    % Pad the block to length L if necessary (if x runs out)
    x_conv_block = [x_conv_block, zeros(1, L - length(x_conv_block))];
    
    % --- Perform FFT convolution ---
    % Compute FFT of the input block
    X_conv = fft(x_conv_block);
    
    % Multiply in frequency domain
    Y_conv = X_conv .* H;
    
    % Compute Inverse FFT
    y_conv_block = ifft(Y_conv);
    
    % --- Extract valid output samples ---
    % The valid output samples are from index M-1 to L-1
    valid_output_samples = y_conv_block(M : L); % MATLAB indexing: M-1+1 to L
    
    % Append valid samples to the overall output
    output = [output, valid_output_samples];
    
    % --- Save overlap for the next block ---
    % The overlap consists of the last M-1 samples of the current input block
    input_overlap = x_conv_block(L - (M - 1) + 1 : L); % MATLAB indexing
end

% --- Verification (Optional) ---
% Direct convolution for comparison
y_direct = conv(x, h);

% Due to the nature of Overlap-Save, it produces N valid output samples.
% The direct convolution produces N+M-1 samples. We compare the first N.
disp(['Length of Overlap-Save output: ', num2str(length(output))]);
disp(['Length of Direct convolution output: ', num2str(length(y_direct))]);

% Compare the first N samples
difference = max(abs(output - y_direct(1:N)));
fprintf('Maximum absolute difference between Overlap-Save and direct convolution (first N samples): %.4f\n', difference);
```

**Python Example (using NumPy and SciPy):**

```python
import numpy as np
from scipy.signal import fftconvolve

# --- Parameters ---
N = 100        # Length of input signal
M = 10         # Length of FIR filter
L = 64         # Block size (e.g., power of 2, L >= M)

# Ensure L >= M
if L < M:
    raise ValueError('Block size L must be greater than or equal to filter length M.')

# --- Signal and Filter Generation ---
x = np.random.randn(N)   # Example input signal
h = np.array([1.0/M] * M) # Example simple FIR filter (can be replaced with fir1 etc.)
h = np.convolve(h, [0.5, 1, 0.5], 'full') # Make it slightly more interesting
h = h / np.sum(h)
M = len(h)

# --- Pre-computation for Overlap-Save ---
# Zero-pad filter to block size L
h_padded = np.pad(h, (0, L - M), 'constant')

# Compute FFT of the padded filter
H = np.fft.fft(h_padded)

# --- Overlap-Save Implementation ---
output = np.array([])
input_overlap = np.zeros(M - 1) # Initialize overlap buffer

# Calculate the step size for advancing through the input signal
step_size = L - (M - 1)

# Iterate through the input signal in blocks
for i in range(0, N, step_size):
    # --- Form the input block for circular convolution ---
    x_start_idx = i
    num_new_samples = L - (M - 1)
    x_end_idx = min(N, x_start_idx + num_new_samples)

    current_x_segment = x[x_start_idx : x_end_idx]

    # Construct the input block for FFT convolution
    x_conv_block = np.concatenate((input_overlap, current_x_segment))

    # Pad the block to length L if necessary
    x_conv_block = np.pad(x_conv_block, (0, L - len(x_conv_block)), 'constant')

    # --- Perform FFT convolution ---
    X_conv = np.fft.fft(x_conv_block)
    Y_conv = X_conv * H
    y_conv_block = np.fft.ifft(Y_conv)

    # --- Extract valid output samples ---
    # Valid samples are from index M-1 to L-1
    valid_output_samples = y_conv_block[M-1 : L].real # Take real part, assuming real input/filter

    # Append valid samples to the overall output
    output = np.concatenate((output, valid_output_samples))

    # --- Save overlap for the next block ---
    input_overlap = x_conv_block[L - (M - 1) :]

# --- Verification (Optional) ---
# Direct convolution for comparison
y_direct = np.convolve(x, h)

# The Overlap-Save method as implemented here should produce N output samples
print(f'Length of Overlap-Save output: {len(output)}')
print(f'Length of Direct convolution output: {len(y_direct)}')

# Compare the first N samples
difference = np.max(np.abs(output - y_direct[:N]))
print(f'Maximum absolute difference: {difference:.4f}')
```

---

### 4. Computational Efficiency Analysis

*   **Direct Convolution:** $O(NM)$ operations.
*   **Overlap-Save Convolution:**
    *   Filter FFT: $O(L \log L)$ (done once).
    *   For each of the $N_{blocks} = \lceil N / (L-(M-1)) \rceil$ blocks:
        *   Input block formation: $O(L)$
        *   FFT of input block: $O(L \log L)$
        *   Frequency domain multiplication: $O(L)$
        *   IFFT: $O(L \log L)$
        *   Output extraction and overlap save: $O(L)$
    *   Total complexity $\approx O(L \log L) + \frac{N}{L-(M-1)} \times O(L \log L)$.

*   **Choosing $L$:** If $L$ is chosen to be roughly proportional to $M$ or $N/K$ for some $K$, we can achieve near linear time complexity in $N$. For instance, if $L$ is a constant (say, $1024$) and $M$ is much smaller than $N$, the complexity approaches $O(N \log L)$. If $L$ is chosen to be proportional to $N^{1/2}$, the complexity can be optimized. The most common choice is to make $L$ a power of 2 that is larger than $M$.

**Advantages:**

*   Significantly faster than direct convolution for long signals.
*   Suitable for real-time applications as it processes the signal in blocks.
*   Leverages the efficiency of FFT algorithms.

**Disadvantages:**

*   Requires more memory for storing FFTs and intermediate results.
*   Introduces latency due to block processing.
*   Implementation is more complex than direct convolution.

---

### 5. Alignment with Course Outcomes

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2):** While not directly generating waveforms, understanding the input and output signals is crucial. The example code uses `randn` for input and `fir1` for filter design, which relate to signal generation.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2):** The implementation heavily relies on the convolution property of the DFT: $x[n] * h[n] \leftrightarrow X(k) \cdot H(k)$. The use of FFT and IFFT is a direct application of DFT properties.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2):** Although this is a lab exercise, the principles of block processing and efficient computation are fundamental to how DSP algorithms are implemented on embedded hardware (like TMS320C6x mentioned in textbooks) for real-time operation.
*   **CO4: Implement LTI systems (Knowledge Level: K3):** The entire module is about implementing an LTI system (convolution) using a specific efficient method. This is a core application of LTI system theory.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3):** The example uses `fir1` to create a low-pass filter. The block convolution method is then applied to process signals through this designed filter, demonstrating a practical application.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 6. Textbook and Reference Book Relevance

*   **Digital Signal Processing using Matlab by Vinay K. Ingle, John G. Proakis:** This book is likely to have detailed explanations and MATLAB examples for block convolution techniques, including Overlap Save and Overlap Add. Chapters on FFT-based convolution and efficient implementation of FIR filters would be relevant.
*   **Think DSP: Digital Signal Processing using Python by Allen B. Downey:** This book emphasizes practical implementation. Expect discussions on computational efficiency and real-time processing, with Python examples that would mirror the conceptual code provided here. Chapters on convolution and FFT are highly relevant.
*   **DSP applications using C and the TMS320C6x DSK by Chassaing, Rulph:** This book provides insights into how these algorithms are implemented on actual DSP hardware. While the lab might not use C, understanding the hardware context helps appreciate the need for efficient algorithms like Overlap Save.
*   **Discrete-Time Signal Processing by Alan V Oppenheim, Ronald W. Schafer:** This is a foundational text. It will provide rigorous mathematical derivations and theoretical underpinnings for convolution, circular convolution, and the properties of the DFT that make FFT-based convolution possible. Expect detailed explanations of the aliasing that Overlap Save avoids.

---

### 7. Practice Questions and Exercises

1.  **Question:** Explain the core idea behind the Overlap Save method for block convolution. Why is it called "Overlap Save"?
    **Answer:** The Overlap Save method breaks a long convolution into smaller, FFT-based circular convolutions. It's called "Overlap Save" because each input block used for the circular convolution includes an overlap of $M-1$ samples from the previous input block, and the first $M-1$ output samples from each circular convolution are discarded. This ensures that the circular convolution produces valid linear convolution results without aliasing.

2.  **Question:** Given an input signal of length $N=200$ and an FIR filter of length $M=15$. If you choose a block size $L=32$, how many input blocks will be processed for the Overlap Save method? How many valid output samples are generated per block?
    **Answer:**
    *   Step size = $L - (M-1) = 32 - (15-1) = 32 - 14 = 18$.
    *   Number of blocks = $\lceil N / \text{step\_size} \rceil = \lceil 200 / 18 \rceil = \lceil 11.11 \rceil = 12$ blocks.
    *   Valid output samples per block = $L - (M-1) = 32 - 14 = 18$.

3.  **Question:** What is the primary advantage of using Overlap Save over direct convolution for long signals?
    **Answer:** The primary advantage is computational efficiency. Overlap Save leverages the FFT, reducing the overall computational complexity from $O(NM)$ to approximately $O(N \log L)$ (where $L$ is the block size), which is significantly faster for large $N$.

4.  **Question:** If the input signal length is $N=50$ and the filter length is $M=5$, and you choose $L=10$:
    a) What is the length of the padded filter?
    b) How many samples are discarded from each circular convolution output?
    c) How many valid output samples are generated per block?
    d) How many input blocks (for FFT convolution) are needed to process the entire input signal?
    **Answer:**
    a) The length of the padded filter is $L=10$.
    b) $M-1 = 5-1 = 4$ samples are discarded.
    c) $L - (M-1) = 10 - 4 = 6$ valid output samples are generated per block.
    d) Step size = $L - (M-1) = 10 - 4 = 6$. Number of blocks = $\lceil N / \text{step\_size} \rceil = \lceil 50 / 6 \rceil = \lceil 8.33 \rceil = 9$ blocks.

5.  **Question:** Consider the impact of choosing a very small $L$ (e.g., $L=M$) versus a very large $L$ (e.g., $L=N$) on the efficiency of the Overlap Save method.
    **Answer:**
    *   **Small $L$ (e.g., $L=M$):** The step size $L-(M-1)$ becomes small (e.g., 1 if $L=M$). This means many blocks are processed, and each block requires an FFT. While the FFT is of a smaller size, the overhead of processing many blocks and FFT computations can make it less efficient than direct convolution for moderately sized signals.
    *   **Large $L$ (e.g., $L=N$):** If $L=N$, the method essentially becomes a single FFT-based convolution of the entire signal. This is the most efficient form of FFT convolution if $N$ is a power of 2. However, if $L$ is chosen much larger than $N$, it involves zero-padding the input signal significantly, which can also be inefficient. The optimal $L$ is often a power of 2, greater than or equal to $M$, and balances block processing overhead with FFT efficiency.

---

### 8. Important Points to Remember

*   **$L \ge M$ is crucial.**
*   **FFT length is $L$.**
*   **$M-1$ output samples are discarded per block.**
*   **$L-(M-1)$ valid output samples are kept per block.**
*   **Input blocks for convolution are of length $L$, constructed using $M-1$ samples of overlap from the previous input block and $L-(M-1)$ new samples from the input signal.**
*   **The step size for advancing the input signal is $L-(M-1)$.**
*   **The choice of $L$ impacts efficiency; powers of 2 are generally preferred for FFT performance.**
*   **The Overlap Save method effectively computes the output for the first $N-(M-1)$ samples of the full convolution, producing $N$ valid output samples.**

---
This concludes the study notes for implementing the Overlap Save block convolution method. Remember to refer to your textbooks for detailed mathematical proofs and further examples.