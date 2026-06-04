---
title: "Type 1 and Type 2 polyphase decomposition"
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 1: Multi"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff26a"
status: "completed"
scrapedAt: "2026-05-23T18:04:03.192Z"
---
# Advanced Digital Signal Processing: Module 1 - Multirate Signal Processing

## Topic: Type 1 and Type 2 Polyphase Decomposition

### 1. Introduction to Multirate Signal Processing

Multirate signal processing deals with systems that process signals at different sampling rates. This is crucial for various applications like telecommunications, audio and image processing, and data compression.

*   **Upsampling (Interpolation):** Increasing the sampling rate of a signal.
*   **Downsampling (Decimation):** Decreasing the sampling rate of a signal.

### 2. The Problem Addressed by Polyphase Decomposition

When dealing with multirate systems, particularly those involving filters, direct implementation of upsampling and downsampling can lead to significant computational complexity. Polyphase decomposition offers an efficient way to implement these operations by reorganizing the filter's structure.

### 3. Polyphase Decomposition: The Core Idea

Polyphase decomposition breaks down a filter into a set of subfilters (or "phases"). Each subfilter operates on a specific subset of the input signal samples. This allows for a more structured and efficient implementation of multirate operations.

Let's consider a digital filter with impulse response $h[n]$ and a downsampling factor of $M$.

**Key Concept:** The impulse response $h[n]$ can be represented as a sum of $M$ individual polyphase components.

### 4. Type 1 Polyphase Decomposition

In Type 1 polyphase decomposition, the input signal is split into $M$ subsequences, and each subsequence is processed by a corresponding subfilter.

**Definition:**
For a sequence $x[n]$, the Type 1 polyphase components are defined as:
*   $x_k[n] = x[nM + k]$, for $k = 0, 1, \dots, M-1$.

This means $x_0[n]$ contains samples $x[0], x[M], x[2M], \dots$, $x_1[n]$ contains samples $x[1], x[M+1], x[2M+1], \dots$, and so on.

The original signal $x[n]$ can be reconstructed from its polyphase components using an "upsampling by $M$" operation followed by a "zero-padding" structure (often represented by the $U_M$ operator).

$x[n] = \sum_{k=0}^{M-1} U_M(x_k[n] \delta[n-k])$

**Filter Representation:**
The filter $H(z)$ can be decomposed into $M$ polyphase components, $H_k(z)$, such that:

$H(z) = \sum_{k=0}^{M-1} z^{-k} H_k(z^M)$

where $H_k(z)$ are the Type 1 polyphase components of the filter.

**Relationship between $H(z)$ and $H_k(z)$:**
The polyphase components $H_k(z)$ can be extracted from $H(z)$ using the following relationship (derived from the definition):

$H_k(z) = \frac{1}{M} \sum_{j=0}^{M-1} \omega^{-kj} H(\omega^j z^{1/M})$

where $\omega = e^{-j2\pi/M}$ is the $M$-th root of unity.

**Example:** Consider a filter $H(z) = 1 + 2z^{-1} + 3z^{-2} + 4z^{-3}$ with $M=2$.

*   **Type 1 Polyphase Decomposition:**
    *   $H(z) = (1 + 3z^{-2}) + z^{-1}(2 + 4z^{-2})$
    *   Here, $H_0(z^2) = 1 + 3z^{-2}$ and $H_1(z^2) = 2 + 4z^{-2}$.
    *   Therefore, $H_0(z) = 1 + 3z^{-1}$ and $H_1(z) = 2 + 4z^{-1}$.

**Implementation for Downsampling:**
When downsampling by $M$, the process involves:
1.  Splitting the input signal $x[n]$ into $M$ polyphase components ($x_k[n]$).
2.  Processing each $x_k[n]$ with its corresponding subfilter $H_k(z)$.
3.  Summing the outputs of the subfilters.

This is often visualized using a **polyphase filter bank**.

### 5. Type 2 Polyphase Decomposition

Type 2 polyphase decomposition is particularly useful for **upsampling**. It focuses on reorganizing the filter structure to handle the interpolation process efficiently.

**Definition:**
In Type 2, the filter $H(z)$ is expressed as:

$H(z) = \sum_{k=0}^{M-1} z^{-k} H_k(z^M)$

This form is the same as Type 1, but the interpretation and usage differ.

**Implementation for Upsampling:**
When upsampling by $M$, the process involves:
1.  Splitting the filter $H(z)$ into $M$ Type 2 polyphase components ($H_k(z)$).
2.  Processing the upsampled input signal ($U_M(x[n])$) with each $H_k(z)$.
3.  Summing the outputs.

However, a more computationally efficient way to implement upsampling using Type 2 polyphase decomposition is as follows:

1.  Decompose the filter $H(z)$ into Type 2 polyphase components $H_k(z)$.
2.  The upsampled signal $y[n] = U_M(x[n])$ can be seen as $x[n/M]$ for $n$ being a multiple of $M$, and 0 otherwise.
3.  The output of the upsampler followed by the filter $H(z)$ is:
    $y[n] = \sum_{l=-\infty}^{\infty} x[l] h[n-l]$
    If we upsample $x[n]$ first, the output of the upsampler is $x'[n] = x[n/M]$ for $n$ multiple of $M$, and $0$ otherwise.
    The output of the system is $y'[n] = \sum_{l=-\infty}^{\infty} x'[l] h[n-l]$.

    The key insight for Type 2 is to directly implement the effect of upsampling and filtering.
    Consider the output $y[n]$ of a system with input $x[n]$ and filter $H(z)$ that has been upsampled by $M$.
    $y[n] = \sum_{k=0}^{M-1} H_k(z^M) (z^{-k} U_M(x[n]))$
    This means we apply the upsampler to the input first, then route the samples to the appropriate polyphase filters.

    A more practical way to think about Type 2 for upsampling is:
    1.  Take the input $x[n]$.
    2.  Route the samples $x[n]$ to $M$ parallel paths, where path $k$ receives $x[n]$ delayed by $k$ samples.
    3.  Apply the polyphase filters $H_k(z)$ to these delayed signals.
    4.  Combine the outputs.

    This is equivalent to:
    $y[n] = \sum_{k=0}^{M-1} h[n-k] x[n-k]$  (this is the definition of convolution)

    Let's consider the system where we first upsample the input and then filter.
    The upsampled signal is $x'[n] = x[n/M]$ if $n \pmod M = 0$, and $0$ otherwise.
    The output is $y[n] = \sum_{l=-\infty}^{\infty} x'[l] h[n-l]$.
    Substituting $x'[l]$:
    $y[n] = \sum_{m=-\infty}^{\infty} x[m] h[n - mM]$ (only terms where $n-l$ is a multiple of $M$ survive)

    With Type 2 polyphase decomposition:
    $H(z) = H_0(z^M) + z^{-1}H_1(z^M) + \dots + z^{-(M-1)}H_{M-1}(z^M)$
    The output when filtering an upsampled signal can be expressed as:
    $y[n] = \sum_{k=0}^{M-1} H_k(z) [z^{-k} U_M(x[n])]$  (This is incorrect formulation for Type 2 upsampling implementation)

    **Correct Formulation for Type 2 Upsampling Implementation:**
    The output of an upsampler followed by a filter $H(z)$ can be implemented using Type 2 polyphase decomposition as follows:
    1.  Decompose $H(z)$ into Type 2 polyphase components: $H(z) = \sum_{k=0}^{M-1} z^{-k} H_k(z^M)$.
    2.  Take the input signal $x[n]$.
    3.  Generate $M$ streams of the input signal, where the $k$-th stream is $x[n]$ delayed by $k$ samples: $x_k[n] = x[n-k]$.
    4.  Pass each $x_k[n]$ through the corresponding Type 2 polyphase filter $H_k(z)$.
    5.  The outputs of these filters are then upsampled by $M$.
    6.  Summing these upsampled outputs gives the final output $y[n]$.

    Let's revisit the definition $H(z) = \sum_{k=0}^{M-1} z^{-k} H_k(z^M)$.
    When we upsample the input $x[n]$ by $M$, we get $x_{up}[n] = x[n/M]$ if $n$ is a multiple of $M$, and 0 otherwise.
    The output is $y[n] = H(z)x_{up}[n]$.
    $y[n] = \sum_{k=0}^{M-1} z^{-k} H_k(z^M) U_M(x[n])$

    The direct implementation of $U_M(x[n])$ means inserting $M-1$ zeros between samples of $x[n]$.
    Let $x[n]$ be the input. The upsampled signal is $x_{up}[n]$ which has samples $x[0], 0, 0, \dots, x[1], 0, 0, \dots$.
    Let's consider the output $y[n]$.
    $y[n] = \sum_{l=-\infty}^\infty x_{up}[l] h[n-l]$
    $y[n] = \sum_{m=-\infty}^\infty x[m] h[n - mM]$

    **Efficient Implementation using Type 2 Polyphase:**
    The Type 2 polyphase decomposition is structured such that:
    1.  The input $x[n]$ is processed.
    2.  The output is formed by combining $M$ filtered streams.
    3.  The structure is:
        *   Split $x[n]$ into $M$ components: $x_0[n]=x[n], x_1[n]=x[n-1], \dots, x_{M-1}[n]=x[n-(M-1)]$.
        *   Filter each $x_k[n]$ with $H_k(z)$.
        *   The output of each filter $H_k(z)$ is then upsampled by $M$.
        *   Finally, sum these upsampled outputs.

    So, the operation is: $y[n] = \sum_{k=0}^{M-1} U_M(H_k(z) x[n-k])$.

**Example:** Consider a filter $H(z) = 1 + 2z^{-1} + 3z^{-2} + 4z^{-3}$ with $M=2$.

*   **Type 2 Polyphase Decomposition:**
    *   $H(z) = (1 + 3z^{-2}) + z^{-1}(2 + 4z^{-2})$
    *   Here, $H_0(z^2) = 1 + 3z^{-2}$ and $H_1(z^2) = 2 + 4z^{-2}$.
    *   Therefore, $H_0(z) = 1 + 3z^{-1}$ and $H_1(z) = 2 + 4z^{-1}$.

*   **Upsampling by 2 Implementation using Type 2:**
    Let the input be $x[n]$.
    The output $y[n]$ is calculated as:
    $y[n] = U_2(H_0(z) x[n]) + U_2(H_1(z) x[n-1])$
    $y[n] = U_2((1+3z^{-1}) x[n]) + U_2((2+4z^{-1}) x[n-1])$

**Important Note:** The distinction between Type 1 and Type 2 can be subtle and depends on how the filter is split and how the subfilters are applied to the input signal in the context of upsampling or downsampling. The fundamental decomposition form $H(z) = \sum_{k=0}^{M-1} z^{-k} H_k(z^M)$ is common to both, but the assignment of $H_k(z)$ to the specific operations differs.

*   **Type 1** is generally associated with **downsampling** where the input is split into $M$ subsequences.
*   **Type 2** is generally associated with **upsampling** where the filter is split, and the subfilters are applied to appropriately delayed versions of the input, followed by upsampling.

### 6. Computational Efficiency

The primary motivation for polyphase decomposition is to achieve computational efficiency.

**Downsampling by $M$ (Type 1):**
Without polyphase decomposition, filtering a signal and then downsampling requires computing $N$ (filter length) multiplications and additions for each output sample. If the original sampling rate is $f_s$, and we downsample by $M$, the new sampling rate is $f_s/M$. The number of operations per output sample at the original rate is $N$.

With Type 1 polyphase decomposition, the filter $H(z)$ of length $N$ is split into $M$ subfilters, each of length approximately $N/M$.
The input is split into $M$ subsequences.
Each subsequence is filtered by a subfilter of length $N/M$.
The total number of multiplications per output sample at the original rate:
$M \times (N/M) = N$.

However, if we consider the operations at the *output* sampling rate ($f_s/M$), we are computing $M$ outputs for every original input sample.
With the polyphase approach for downsampling:
The output of each $H_k(z)$ is a sequence sampled at the original rate.
The total operations at the original rate are still $N$.

The real advantage comes when implementing downsampling *before* filtering.
If we downsample first, the signal length reduces by $M$.
Consider a filter of length $N$.
Direct: $N$ operations per sample at original rate.
Downsample by $M$ first, then filter: $N$ operations per sample at original rate for the original signal, but we only produce $1/M$ samples. So, effectively $N/M$ operations per output sample.
Polyphase decomposition for downsampling achieves this efficiency by structuring the processing.

**Upsampling by $M$ (Type 2):**
Without polyphase decomposition, upsampling by $M$ followed by a filter of length $N$ requires $N$ operations for each of the $M$ samples generated between original samples, totaling $N \times M$ operations for every original input sample.

With Type 2 polyphase decomposition:
The filter $H(z)$ is split into $M$ subfilters, each of length $N/M$.
Each subfilter processes a portion of the input signal (or a delayed version).
The number of operations per original input sample is approximately $M \times (N/M) = N$.

**Crucial Point:** Polyphase decomposition allows us to implement the equivalent of filtering an upsampled signal with $N \times M$ operations per original sample, using only $N$ operations per original sample.

### 7. Key Concepts and Definitions

*   **Multirate Signal Processing:** Processing signals at different sampling rates.
*   **Upsampling (Interpolation):** $x_{up}[n] = x[n/M]$ if $n \pmod M = 0$, else $0$.
*   **Downsampling (Decimation):** $x_{down}[n] = x[nM]$.
*   **Polyphase Decomposition:** Expressing a filter $H(z)$ as a sum of subfilters operating on different "phases" of the signal or filter.
*   **Type 1 Polyphase:**
    *   Decomposes the input signal into $M$ subsequences.
    *   Associated with efficient **downsampling**.
    *   $x_k[n] = x[nM+k]$.
    *   $H(z) = \sum_{k=0}^{M-1} z^{-k} H_k(z^M)$.
*   **Type 2 Polyphase:**
    *   Decomposes the filter $H(z)$.
    *   Associated with efficient **upsampling**.
    *   Efficient implementation: $y[n] = \sum_{k=0}^{M-1} U_M(H_k(z) x[n-k])$.
*   **Polyphase Matrix:** A matrix representation of the polyphase decomposition, useful for analyzing and designing multirate filter banks.

### 8. Connection to Textbooks and Course Outcomes

*   **Oppenheim & Willsky (Pearson):** Chapters on digital filtering, sampling, and introduction to multirate signal processing would cover these concepts. The emphasis is on the theoretical underpinnings and system representations.
*   **Haykin (Wiley):** Similar to Oppenheim, Haykin provides a strong foundation in LTI systems, transforms, and sampling, which are prerequisites for understanding polyphase decomposition.
*   **Reference Books:** These books offer alternative perspectives and detailed examples, reinforcing the understanding of filter structures and efficient implementation.

**Alignment with Course Outcomes:**

*   **CO1 (Classify signals and systems):** Understanding upsampling and downsampling is fundamental to classifying signals based on their sampling rates and analyzing systems that operate at different rates.
*   **CO3 (Analyze signals in frequency domain):** The analysis of $H(z)$ and its decomposition into $H_k(z)$ relies on frequency-domain representations and properties of the z-transform.
*   **CO4 (Interpret use of transforms to analyze systems):** Polyphase decomposition is a technique that leverages the properties of transforms (specifically the z-transform) to analyze and implement multirate systems efficiently.

### 9. Examples and Practice Questions

**Example 1: Type 1 Polyphase Decomposition for Downsampling**

Let $H(z) = 1 + 2z^{-1} + 3z^{-2} + 4z^{-3} + 5z^{-4} + 6z^{-5}$ and $M=3$.
Decompose $H(z)$ into its Type 1 polyphase components.

**Solution:**
We want to express $H(z)$ in the form $H(z) = \sum_{k=0}^{2} z^{-k} H_k(z^3)$.
$H(z) = (1 + 4z^{-3}) + z^{-1}(2 + 5z^{-3}) + z^{-2}(3 + 6z^{-3})$
Comparing this with the desired form:
*   $H_0(z^3) = 1 + 4z^{-3} \implies H_0(z) = 1 + 4z^{-1}$
*   $z^{-1}H_1(z^3) = z^{-1}(2 + 5z^{-3}) \implies H_1(z^3) = 2 + 5z^{-3} \implies H_1(z) = 2 + 5z^{-1}$
*   $z^{-2}H_2(z^3) = z^{-2}(3 + 6z^{-3}) \implies H_2(z^3) = 3 + 6z^{-3} \implies H_2(z) = 3 + 6z^{-1}$

So, the Type 1 polyphase components are:
$H_0(z) = 1 + 4z^{-1}$
$H_1(z) = 2 + 5z^{-1}$
$H_2(z) = 3 + 6z^{-1}$

**Example 2: Type 2 Polyphase Decomposition for Upsampling**

Using the same filter $H(z) = 1 + 2z^{-1} + 3z^{-2} + 4z^{-3} + 5z^{-4} + 6z^{-5}$ and $M=3$.
Implement the upsampling by 3 of an input signal $x[n]$ using its Type 2 polyphase components.

**Solution:**
From Example 1, the Type 2 polyphase components are:
$H_0(z) = 1 + 4z^{-1}$
$H_1(z) = 2 + 5z^{-1}$
$H_2(z) = 3 + 6z^{-1}$

The output $y[n]$ when upsampling $x[n]$ by $M=3$ and filtering with $H(z)$ is implemented as:
$y[n] = U_3(H_0(z) x[n]) + U_3(H_1(z) x[n-1]) + U_3(H_2(z) x[n-2])$

Let's expand the first term:
$U_3(H_0(z) x[n]) = U_3((1+4z^{-1}) x[n])$
$= U_3(x[n] + 4x[n-1])$
This means the output sequence will be:
$(x[0] + 4x[-1]), 0, 0, (x[1] + 4x[0]), 0, 0, (x[2] + 4x[1]), 0, 0, \dots$

The total output $y[n]$ is the sum of these three upsampled and filtered streams.

**Practice Questions:**

1.  **Question:** A filter has the transfer function $H(z) = 0.5 + z^{-1} + 1.5z^{-2} + 2z^{-3} + 1.5z^{-4} + z^{-5} + 0.5z^{-6}$. Find its Type 1 polyphase components for $M=2$.
    **Answer:**
    $H(z) = (0.5 + 1.5z^{-2} + 1.5z^{-4} + 0.5z^{-6}) + z^{-1}(1 + 2z^{-2} + z^{-4})$
    $H_0(z^2) = 0.5 + 1.5z^{-2} + 1.5z^{-4} + 0.5z^{-6} \implies H_0(z) = 0.5 + 1.5z^{-1} + 1.5z^{-2} + 0.5z^{-3}$
    $H_1(z^2) = 1 + 2z^{-2} + z^{-4} \implies H_1(z) = 1 + 2z^{-1} + z^{-2}$

2.  **Question:** Consider the filter $H(z) = 1 + z^{-1} + z^{-2}$ and $M=2$.
    a) Find the Type 1 polyphase components.
    b) Describe how to implement downsampling by 2 using these components.
    c) Find the Type 2 polyphase components.
    d) Describe how to implement upsampling by 2 using these components.

    **Answer:**
    a) $H(z) = (1+z^{-2}) + z^{-1}(1)$
    $H_0(z^2) = 1+z^{-2} \implies H_0(z) = 1+z^{-1}$
    $H_1(z^2) = 1 \implies H_1(z) = 1$

    b) To implement downsampling by 2:
    Split the input $x[n]$ into $x_0[n] = x[2n]$ and $x_1[n] = x[2n+1]$.
    Filter $x_0[n]$ with $H_0(z)$ to get $y_0[n]$.
    Filter $x_1[n]$ with $H_1(z)$ to get $y_1[n]$.
    The downsampled output is $y[n] = y_0[n] + y_1[n]$.

    c) The Type 2 polyphase components are the same as Type 1 for this structure:
    $H_0(z) = 1+z^{-1}$
    $H_1(z) = 1$

    d) To implement upsampling by 2:
    Filter $x[n]$ with $H_0(z)$ to get $z_0[n] = (1+z^{-1})x[n]$.
    Filter $x[n-1]$ with $H_1(z)$ to get $z_1[n] = (1)x[n-1]$.
    The output is $y[n] = U_2(z_0[n]) + U_2(z_1[n])$.
    $y[n] = U_2((1+z^{-1})x[n]) + U_2(x[n-1])$.

### 10. Important Points to Remember

*   Polyphase decomposition is a powerful technique for **efficiently implementing multirate filters**.
*   **Type 1** is primarily used for efficient **downsampling**.
*   **Type 2** is primarily used for efficient **upsampling**.
*   The mathematical form $H(z) = \sum_{k=0}^{M-1} z^{-k} H_k(z^M)$ is common, but the application of $H_k(z)$ differs.
*   The computational savings are significant, especially for high upsampling or downsampling factors. Instead of $N \times M$ operations for upsampling, we achieve $N$ operations per original sample.

This concludes the notes on Type 1 and Type 2 polyphase decomposition. Understanding these concepts is crucial for designing and implementing efficient digital signal processing systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
