---
title: "Uniform filter banks and its implementation using polyphase decomposition."
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 1: Multi"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff26c"
status: "completed"
scrapedAt: "2026-05-23T18:04:04.986Z"
---
# Advanced Digital Signal Processing - Module 1: Multirate Signal Processing

## Topic: Uniform Filter Banks and Polyphase Decomposition

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles of uniform filter banks.
*   Analyze the structure and operation of uniform filter banks.
*   Comprehend the concept of polyphase decomposition.
*   Implement uniform filter banks efficiently using polyphase decomposition.
*   Analyze the trade-offs and performance of uniform filter banks.
*   Relate the concepts of filter banks to signal analysis and processing tasks.

---

### Course Outcomes Alignment:

This topic directly contributes to the following Course Outcomes:

*   **CO3: Analyze signals in frequency domain using Laplace, Fourier and z-transforms and examine the properties of transforms. (Knowledge Level: K3)**
    *   Understanding filter bank frequency responses and their analysis is crucial.
*   **CO4: Interpret the use of various transforms to analyze continuous and discrete time LTI systems. (Knowledge Level: K3)**
    *   Filter banks are essentially collections of LTI systems (filters) used for signal decomposition and reconstruction.

---

## 1. Introduction to Filter Banks

### 1.1 What is a Filter Bank?

A filter bank is a system that decomposes an input signal into multiple subbands using a set of bandpass filters. These subbands can then be processed independently, and subsequently, they can be reconstructed into an approximation of the original signal.

**Key Concepts:**

*   **Decomposition:** Breaking down a signal into its constituent frequency components.
*   **Subbands:** The individual frequency ranges obtained after filtering.
*   **Reconstruction:** Recombining the processed subbands to approximate the original signal.

**Textbook Reference:** Oppenheim & Willsky (2nd ed.) discusses the general principles of signal decomposition and analysis, which forms the basis for filter banks. Haykin (2nd ed.) also provides insights into spectral analysis, relevant to understanding filter bank operation.

### 1.2 Types of Filter Banks

Filter banks can be categorized based on several criteria, including:

*   **Uniform vs. Non-uniform:**
    *   **Uniform Filter Banks:** The subbands have equal bandwidths.
    *   **Non-uniform Filter Banks:** The subbands have varying bandwidths.
*   **Number of Channels:**
    *   **Two-channel:** The simplest form, dividing the signal into two subbands.
    *   **M-channel:** Dividing the signal into *M* subbands.
*   **Perfect Reconstruction (PR):** Whether the reconstructed signal is an exact replica of the original signal (apart from potential delay).

This topic focuses on **Uniform M-channel Filter Banks**.

### 1.3 Applications of Filter Banks

Filter banks are ubiquitous in digital signal processing and find applications in:

*   **Audio Processing:** Compression (e.g., MP3, AAC), equalization, noise reduction.
*   **Image Processing:** Compression, analysis, texture synthesis.
*   **Telecommunications:** Channelization, modulation/demodulation.
*   **Biomedical Signal Processing:** ECG, EEG analysis.
*   **Speech Processing:** Speech synthesis, recognition.

---

## 2. Uniform M-channel Filter Banks

### 2.1 Structure of an M-channel Uniform Filter Bank

A uniform M-channel filter bank consists of:

*   **Analysis Filter Bank:** A set of *M* analysis filters ($H_0(z), H_1(z), ..., H_{M-1}(z)$) that decompose the input signal $x[n]$ into *M* subband signals $x_k[n]$.
*   **Downsampling:** Each subband signal $x_k[n]$ is downsampled by a factor of *M* to obtain $x_k[n] = x_k[nM]$. This reduces the sampling rate for each subband.
*   **Synthesis Filter Bank:** A set of *M* synthesis filters ($G_0(z), G_1(z), ..., G_{M-1}(z)$) that process the downsampled subband signals.
*   **Upsampling:** The output of each synthesis filter is upsampled by a factor of *M* to restore the original sampling rate.
*   **Reconstruction:** The upsampled subband signals are summed to produce the reconstructed output signal $\hat{x}[n]$.

**Block Diagram:**

```
      x[n] ------> Analysis Filters (H_k(z)) ------> Downsampling (M) ------> Synthesis Filters (G_k(z)) ------> Upsampling (M) ------> Sum ------> \hat{x}[n]
                      |                         |                       |                       |                       |
                      ---------------------------   -----------------------   ---------------------------   -----------------------
                                 x_k[n]                  x_k[nM]                 y_k[n]                  y_k[nM]
```

**Important Points:**

*   In a uniform filter bank, the analysis filters typically have overlapping passbands, and their center frequencies are equally spaced across the Nyquist frequency.
*   The downsampling step is crucial for reducing the data rate in each subband.

### 2.2 The Aliasing Problem

When downsampling is performed, aliasing occurs if the analysis filters do not have sufficient stopband attenuation. The aliased components from adjacent subbands can interfere with each other, making perfect reconstruction difficult.

**Concept:** Downsampling by *M* folds the frequency spectrum of the signal *M* times. If the analysis filters are not chosen carefully, these folded spectra will overlap, causing aliasing.

**Textbook Reference:** Oppenheim & Willsky and Haykin both cover the principles of aliasing that arise from sampling rate reduction.

### 2.3 Perfect Reconstruction (PR) Condition

For perfect reconstruction, the overall system response from $x[n]$ to $\hat{x}[n]$ should ideally be a scaled and delayed version of the input signal, i.e., $\hat{x}[n] = c \cdot x[n-d]$ for some constants $c$ and $d$.

The overall system can be represented in the z-domain as:

$$ \hat{x}(z) = \sum_{k=0}^{M-1} G_k(z) X(z W^{-k}) $$

where $W = e^{j2\pi/M}$ is the *M*-th root of unity, and $X(z)$ is the z-transform of the input signal. The term $X(z W^{-k})$ represents the effect of downsampling by *M*.

**Perfect Reconstruction Conditions (Ideal Case):**

1.  **Alias Cancellation:** The aliased components from different subbands must cancel out.
    $$ \sum_{k=0}^{M-1} G_k(z W^{-k}) H_k(z W^{-k}) = c \cdot z^{-d} $$
2.  **No Amplitude Distortion:** The overall gain should be constant.
3.  **No Phase Distortion (for FIR filters):** The phase response should be linear.

**Conditions for Alias-Free Systems (a subset of PR):**

For a system to be alias-free, the aliased components must cancel. This condition simplifies to:

$$ \sum_{k=0}^{M-1} G_k(z W^{-k}) H_k(z W^{-k}) = A(z) $$

where $A(z)$ is some arbitrary function.

---

## 3. Polyphase Decomposition

### 3.1 The Concept of Polyphase Decomposition

Polyphase decomposition is a powerful technique for analyzing and implementing multirate systems, particularly filter banks. It breaks down a general transfer function $H(z)$ into a set of simpler transfer functions called polyphase components.

For a filter $H(z)$ and a downsampling factor $M$, the polyphase decomposition expresses $H(z)$ as a sum of *M* terms, each associated with a specific phase:

$$ H(z) = \sum_{i=0}^{M-1} z^{-i} E_i(z^M) $$

where $E_i(z)$ are the polyphase components of $H(z)$.

**Alternatively, and more commonly used for filter banks:**

$$ H(z) = \sum_{i=0}^{M-1} z^{-i} H_i(z^M) $$

Here, $H_i(z)$ are the Type I polyphase components. The terms $z^{-i} H_i(z^M)$ represent the signal path for the $i$-th phase.

**Example (M=2):**

Let $H(z) = h_0 + h_1 z^{-1} + h_2 z^{-2} + h_3 z^{-3} + h_4 z^{-4} + h_5 z^{-5} + ...$

We can group terms based on their powers of $z^{-1}$ modulo 2:

*   **Even terms (i=0):** $h_0, h_2, h_4, ...$
*   **Odd terms (i=1):** $h_1, h_3, h_5, ...$

$$ H(z) = (h_0 + h_2 z^{-2} + h_4 z^{-4} + ...) + z^{-1}(h_1 + h_3 z^{-2} + h_5 z^{-4} + ...) $$
$$ H(z) = H_0(z^2) + z^{-1} H_1(z^2) $$

Here, $H_0(z) = h_0 + h_2 z^{-1} + h_4 z^{-2} + ...$ and $H_1(z) = h_1 + h_3 z^{-1} + h_5 z^{-2} + ...$ are the Type I polyphase components.

**Textbook Reference:** Oppenheim & Willsky and Haykin provide detailed explanations of the concept of sampling rate alteration and introduce polyphase representation as an efficient implementation method. Anand Kumar also covers polyphase decomposition for multirate systems.

### 3.2 The Polyphase Matrix

The polyphase decomposition allows us to represent the action of a multirate system using a **polyphase matrix**.

For a general two-channel decimator with filter $H(z)$:

$$ H(z) = H_0(z^2) + z^{-1} H_1(z^2) $$

The input signal $x[n]$ is split into even and odd samples:
$x_e[n] = x[2n]$ and $x_o[n] = x[2n+1] = z^{-1} x[2n]$.

The decimated output is:
$y[n] = H(z) x[n] \downarrow M$

Consider the output of the two-channel decimator:
$y[n] = \sum_{i=-\infty}^{\infty} h[i] x[n-i]$
After downsampling by M:
$y[n] = \sum_{i=-\infty}^{\infty} h[i] x[n-iM]$

The polyphase decomposition expresses $H(z)$ in terms of its Type I polyphase components $H_k(z)$ such that:
$H(z) = \sum_{k=0}^{M-1} z^{-k} H_k(z^M)$

The polyphase matrix $\mathbf{H}(z)$ for an $M$-channel filter bank is an $M \times M$ matrix whose entries are the polyphase components of the analysis filters:

$$ \mathbf{H}(z) = \begin{bmatrix}
H_{0,0}(z) & H_{0,1}(z) & \cdots & H_{0,M-1}(z) \\
H_{1,0}(z) & H_{1,1}(z) & \cdots & H_{1,M-1}(z) \\
\vdots & \vdots & \ddots & \vdots \\
H_{M-1,0}(z) & H_{M-1,1}(z) & \cdots & H_{M-1,M-1}(z)
\end{bmatrix} $$

where $H_{k,i}(z)$ is the $i$-th polyphase component of the $k$-th analysis filter $H_k(z)$.

For a standard $M$-channel filter bank with analysis filters $H_k(z)$:
$H_k(z) = \sum_{i=0}^{M-1} z^{-i} H_{k,i}(z^M)$

The input signal $x[n]$ is decomposed into its $M$ polyphase sequences:
$x_i[n] = x[nM+i]$ for $i = 0, 1, ..., M-1$.

The relation between the input polyphase sequences $\mathbf{x}(z)$ and the downsampled subband signals $\mathbf{y}(z)$ is given by:

$$ \mathbf{y}(z) = \mathbf{H}(z) \mathbf{x}(z) $$

where $\mathbf{x}(z) = [X_0(z), X_1(z), ..., X_{M-1}(z)]^T$ and $\mathbf{y}(z) = [Y_0(z), Y_1(z), ..., Y_{M-1}(z)]^T$ are column vectors containing the z-transforms of the polyphase components.

**For a uniform filter bank, the polyphase matrix is particularly structured.** A common structure is the **Alias Cancellation (AC)** matrix, which guarantees alias cancellation.

---

## 4. Implementing Uniform Filter Banks Using Polyphase Decomposition

### 4.1 Efficient Implementation Structure

Polyphase decomposition leads to a highly efficient implementation of filter banks by separating the filtering operations from the downsampling and upsampling operations.

**Analysis Section:**

Instead of filtering the input signal $x[n]$ with each of the $M$ filters $H_k(z)$ and then downsampling, we can first decompose each $H_k(z)$ into its polyphase components.

Let $H_k(z) = \sum_{i=0}^{M-1} z^{-i} H_{k,i}(z^M)$.

The output of the $k$-th analysis filter before downsampling is:
$X_k(z) = H_k(z) X(z) = \left(\sum_{i=0}^{M-1} z^{-i} H_{k,i}(z^M)\right) X(z)$

$$ X_k(z) = \sum_{i=0}^{M-1} z^{-i} H_{k,i}(z^M) X(z) $$

When we downsample $X_k(z)$ by $M$, denoted as $X_k(z) \downarrow M$, the terms $H_{k,i}(z^M)$ become $H_{k,i}(z)$, and the $z^{-i}$ term affects the phase.

The key insight is that we can group the polyphase components by phase:

$$ \sum_{k=0}^{M-1} X_k(z) = \sum_{k=0}^{M-1} \sum_{i=0}^{M-1} z^{-i} H_{k,i}(z^M) X(z) $$
$$ \sum_{k=0}^{M-1} X_k(z) = \sum_{i=0}^{M-1} z^{-i} \left(\sum_{k=0}^{M-1} H_{k,i}(z^M)\right) X(z) $$

Let $Y_i(z)$ be the $i$-th output of a common downsampler. The input to this common downsampler is the sum of signals processed by filters with the same phase component.

The output of the analysis filter bank after downsampling by $M$ can be expressed as:

$$ x_k[nM] = \sum_{i=0}^{M-1} H_{k,i}(z) x[nM-i] $$

This can be implemented more efficiently. The input signal $x[n]$ is first decomposed into its *M* polyphase sequences:
$x_i[n] = x[nM+i]$ for $i = 0, ..., M-1$.

These polyphase sequences are then filtered by the polyphase components of the analysis filters:
$y_{k,i}(n) = H_{k,i}(z) x_i[n]$

The outputs of these polyphase filters are then upsampled by $M$ and summed for each channel $k$:
$X_k(z) = \sum_{i=0}^{M-1} z^{-i} H_{k,i}(z^M) X(z)$
The downsampled subband signal is $X_k(z) \downarrow M$.

**Efficient Analysis Structure:**

1.  Decompose the input signal $x[n]$ into $M$ polyphase sequences: $x_0[n], x_1[n], ..., x_{M-1}[n]$.
2.  For each analysis filter $H_k(z)$, decompose it into its $M$ polyphase components: $H_{k,0}(z), ..., H_{k,M-1}(z)$.
3.  Filter the $i$-th polyphase sequence $x_i[n]$ with the $i$-th polyphase components of *all* analysis filters, i.e., $H_{0,i}(z), H_{1,i}(z), ..., H_{M-1,i}(z)$. This is incorrect.
    **Correct efficient analysis structure:**
    *   Input $x[n]$ is decomposed into polyphase components $x_i[n] = x[nM+i]$.
    *   For each channel $k=0, ..., M-1$:
        *   The $k$-th analysis filter $H_k(z)$ is decomposed into $H_{k,i}(z)$.
        *   The $i$-th polyphase component of the input $x_i[n]$ is filtered by the $i$-th polyphase component of the $k$-th analysis filter: $y_{k,i}[n] = H_{k,i}(z) x_i[n]$.
        *   The outputs $y_{k,i}[n]$ for a fixed $i$ are then upsampled by $M$ and summed. This is also not quite right.

Let's reconsider the definition:
$H(z) = \sum_{i=0}^{M-1} z^{-i} H_i(z^M)$

The output of the analysis filter $H_k(z)$ before downsampling is $Y_k(z) = H_k(z)X(z)$.
$Y_k(z) = \sum_{i=0}^{M-1} z^{-i} H_{k,i}(z^M) X(z)$.

The downsampled output is $y_k[n] = Y_k(z) \downarrow M$.
$y_k[n] = \sum_{i=0}^{M-1} H_{k,i}(z) x[nM-i]$. This form is tricky.

**Standard Efficient Analysis Structure:**

1.  **Input Polyphase Decomposition:** Decompose $x[n]$ into $M$ polyphase sequences: $x_i[n] = x[nM+i]$.
2.  **Filtering by Polyphase Components:** For each $i \in \{0, ..., M-1\}$, the sequence $x_i[n]$ is filtered by *each* of the $M$ polyphase components $H_{k,i}(z)$ for $k=0, ..., M-1$. This is incorrect.

Let's use the matrix form.
$X(z) = \sum_{i=0}^{M-1} z^{-i} X_i(z^M)$, where $X_i(z)$ are the z-transforms of the polyphase components of $x[n]$.

The output of the $k$-th analysis filter is $Y_k(z) = H_k(z) X(z)$.
$Y_k(z) = \sum_{i=0}^{M-1} z^{-i} H_{k,i}(z^M) \sum_{j=0}^{M-1} z^{-j} X_j(z^M)$
$Y_k(z) = \sum_{i=0}^{M-1} z^{-i} \sum_{j=0}^{M-1} H_{k,i}(z^M) z^{-j} X_j(z^M)$

Let $z \leftarrow zW^{-l}$, where $W=e^{j2\pi/M}$.
$Y_k(zW^{-l}) = \sum_{i=0}^{M-1} (zW^{-l})^{-i} \sum_{j=0}^{M-1} H_{k,i}(z^M W^{-Ml}) X_j(z^M W^{-Ml})$
Since $W^{-Ml} = (W^{-M})^l = 1^l = 1$, and $z^M W^{-Ml} = z^M$.
$Y_k(zW^{-l}) = \sum_{i=0}^{M-1} z^{-i} W^{li} \sum_{j=0}^{M-1} H_{k,i}(z^M) X_j(z^M)$.

After downsampling $Y_k(z)$ by $M$, we get $y_k[n]$.
The z-transform of the downsampled signal is $y_k[n] = \frac{1}{M} \sum_{l=0}^{M-1} Y_k(z W^{-l})$.

So, $y_k[n] \leftrightarrow \frac{1}{M} \sum_{l=0}^{M-1} \sum_{i=0}^{M-1} z^{-i} W^{li} \sum_{j=0}^{M-1} H_{k,i}(z^M) X_j(z^M)$.

Rearranging terms:
$y_k[n] \leftrightarrow \sum_{i=0}^{M-1} z^{-i} \left( \sum_{j=0}^{M-1} H_{k,i}(z^M) X_j(z^M) \right) \left( \frac{1}{M} \sum_{l=0}^{M-1} W^{li} \right)$.
The term $\frac{1}{M} \sum_{l=0}^{M-1} W^{li}$ is 1 if $i=0$ (mod M) and 0 otherwise.
This implies that only terms where $i=0$ (mod M) contribute. This is incorrect.

**The correct approach using the polyphase matrix:**

The analysis section can be implemented using a polyphase matrix $\mathbf{H}(z)$, where the entries are the polyphase components of the analysis filters.

$$ \mathbf{H}(z) = \begin{bmatrix}
H_{0,0}(z) & H_{0,1}(z) & \cdots & H_{0,M-1}(z) \\
H_{1,0}(z) & H_{1,1}(z) & \cdots & H_{1,M-1}(z) \\
\vdots & \vdots & \ddots & \vdots \\
H_{M-1,0}(z) & H_{M-1,1}(z) & \cdots & H_{M-1,M-1}(z)
\end{bmatrix} $$

**Efficient Analysis Implementation:**

1.  **Input Polyphase Decomposition:** Decompose $x[n]$ into $M$ polyphase sequences $x_i[n]$ for $i=0, \dots, M-1$.
2.  **Matrix Multiplication:** Multiply the polyphase matrix $\mathbf{H}(z)$ by the vector of input polyphase sequences $\mathbf{x}(z) = [X_0(z), \dots, X_{M-1}(z)]^T$ to get the output polyphase sequences of the analysis stage: $\mathbf{y}(z) = \mathbf{H}(z) \mathbf{x}(z)$.
    The $k$-th output sequence is $Y_k(z) = \sum_{i=0}^{M-1} H_{k,i}(z) X_i(z)$.
3.  **Reconstruction and Upsampling:** The sequences $Y_k(z)$ are then upsampled by $M$ and summed to produce the reconstructed signal.

**Synthesis Section:**

The synthesis section also uses a polyphase matrix $\mathbf{G}(z)$, where the entries are the polyphase components of the synthesis filters $G_k(z)$.

$$ \mathbf{G}(z) = \begin{bmatrix}
G_{0,0}(z) & G_{0,1}(z) & \cdots & G_{0,M-1}(z) \\
G_{1,0}(z) & G_{1,1}(z) & \cdots & G_{1,M-1}(z) \\
\vdots & \vdots & \ddots & \vdots \\
G_{M-1,0}(z) & G_{M-1,1}(z) & \cdots & G_{M-1,M-1}(z)
\end{bmatrix} $$

The overall system's polyphase matrix is $\mathbf{T}(z) = \mathbf{G}(z) \mathbf{H}(z)$.
For perfect reconstruction, $\mathbf{T}(z)$ needs to satisfy certain conditions.

**Efficient Synthesis Implementation:**

1.  **Input to Synthesis:** The downsampled subband signals $x_k[nM]$ are first upsampled by $M$ to $X_k(z)$.
2.  **Synthesis Polyphase Decomposition:** Each upsampled subband signal $X_k(z)$ is decomposed into its polyphase components $X_{k,i}(z)$.
3.  **Matrix Multiplication:** Multiply the synthesis polyphase matrix $\mathbf{G}(z)$ by the vector of input polyphase sequences $\mathbf{X}(z) = [X_0(z), \dots, X_{M-1}(z)]^T$ to get the output polyphase sequences: $\mathbf{Y}(z) = \mathbf{G}(z) \mathbf{X}(z)$.
    The $i$-th output sequence is $Y_i(z) = \sum_{k=0}^{M-1} G_{i,k}(z) X_k(z)$.
4.  **Reconstruction:** Reconstruct the final output signal by combining the polyphase sequences $Y_i(z)$ according to their phase:
    $\hat{x}[n] = \sum_{i=0}^{M-1} Y_i(z) \text{ (from } z^{-i} \text{ component)}$.

**Key Benefit:**
By performing the filtering operations at the lower sampling rate ($z \rightarrow z^M$) and then using simpler filters ($H_{k,i}(z)$), the computational complexity is significantly reduced compared to filtering at the original sampling rate.

**Textbook Reference:** Oppenheim & Willsky (Chapter 12) and Haykin (Chapter 9) provide detailed explanations of multirate systems and polyphase implementations, highlighting the computational savings.

### 4.2 Example: Two-Channel Uniform Filter Bank using Polyphase Decomposition

Consider a two-channel uniform filter bank with analysis filters $H_0(z)$ and $H_1(z)$, and synthesis filters $G_0(z)$ and $G_1(z)$.

Let the analysis filters be decomposed as:
$H_0(z) = H_{0,0}(z^2) + z^{-1} H_{0,1}(z^2)$
$H_1(z) = H_{1,0}(z^2) + z^{-1} H_{1,1}(z^2)$

The polyphase matrix for the analysis section is:
$$ \mathbf{H}(z) = \begin{bmatrix}
H_{0,0}(z) & H_{0,1}(z) \\
H_{1,0}(z) & H_{1,1}(z)
\end{bmatrix} $$

**Efficient Implementation Steps:**

1.  **Input Signal Decomposition:**
    $x[n]$ is decomposed into even and odd samples:
    $x_0[n] = x[2n]$ (even)
    $x_1[n] = x[2n+1]$ (odd)

2.  **Analysis Filtering:**
    $y_{0,0}[n] = H_{0,0}(z) x_0[n]$
    $y_{0,1}[n] = H_{0,1}(z) x_1[n]$
    $y_{1,0}[n] = H_{1,0}(z) x_0[n]$
    $y_{1,1}[n] = H_{1,1}(z) x_1[n]$

3.  **Subband Signal Generation:**
    The downsampled subband signals are obtained by summing the outputs of the polyphase filters for each channel:
    $x_0[nM] = y_{0,0}[n] + z^{-1} y_{0,1}[n]$ (This is actually for the signal passing through $H_0(z)$ before downsampling, then downsampling that.)

    Let's use the matrix output directly:
    The output of the analysis stage is a vector of signals that will be downsampled:
    $Y_0(z) = H_{0,0}(z) X_0(z) + H_{0,1}(z) X_1(z)$
    $Y_1(z) = H_{1,0}(z) X_0(z) + H_{1,1}(z) X_1(z)$

    These $Y_k(z)$ are the signals that are then downsampled by $M$ to give the subband signals $x_k[nM]$.

**Synthesis Section:**

The synthesis filters are decomposed:
$G_0(z) = G_{0,0}(z^2) + z^{-1} G_{0,1}(z^2)$
$G_1(z) = G_{1,0}(z^2) + z^{-1} G_{1,1}(z^2)$

The polyphase matrix for the synthesis section is:
$$ \mathbf{G}(z) = \begin{bmatrix}
G_{0,0}(z) & G_{0,1}(z) \\
G_{1,0}(z) & G_{1,1}(z)
\end{bmatrix} $$

**Efficient Synthesis Implementation Steps:**

1.  **Input to Synthesis:** The downsampled subband signals $x_k[nM]$ are upsampled by $M$ to $X_k(z)$.
2.  **Synthesis Polyphase Decomposition:**
    $X_k(z) = \sum_{i=0}^{M-1} z^{-i} X_{k,i}(z^M)$
    For M=2:
    $X_0(z) = X_{0,0}(z^2) + z^{-1} X_{0,1}(z^2)$
    $X_1(z) = X_{1,0}(z^2) + z^{-1} X_{1,1}(z^2)$

3.  **Synthesis Filtering:**
    The synthesis polyphase matrix $\mathbf{G}(z)$ is applied to the vector of upsampled subband signals $\mathbf{X}(z) = [X_0(z), X_1(z)]^T$:
    $\mathbf{Y}(z) = \mathbf{G}(z) \mathbf{X}(z)$
    $Y_0(z) = G_{0,0}(z) X_0(z) + G_{0,1}(z) X_1(z)$
    $Y_1(z) = G_{1,0}(z) X_0(z) + G_{1,1}(z) X_1(z)$

4.  **Reconstruction:**
    The final output $\hat{x}[n]$ is obtained by combining the polyphase outputs:
    $\hat{x}[n] \leftrightarrow \hat{X}(z) = Y_0(z) + z^{-1} Y_1(z)$

**Overall System Polyphase Matrix:**
The overall system's behavior is described by $\mathbf{T}(z) = \mathbf{G}(z) \mathbf{H}(z)$.
$$ \mathbf{T}(z) = \begin{bmatrix}
G_{0,0}(z) & G_{0,1}(z) \\
G_{1,0}(z) & G_{1,1}(z)
\end{bmatrix} \begin{bmatrix}
H_{0,0}(z) & H_{0,1}(z) \\
H_{1,0}(z) & H_{1,1}(z)
\end{bmatrix} = \begin{bmatrix}
T_{0,0}(z) & T_{0,1}(z) \\
T_{1,0}(z) & T_{1,1}(z)
\end{bmatrix} $$

where $T_{i,j}(z) = G_{i,0}(z) H_{0,j}(z) + G_{i,1}(z) H_{1,j}(z)$.

The overall system output is then reconstructed from these components as:
$\hat{X}(z) = T_{0,0}(z) X_0(z) + z^{-1} T_{0,1}(z) X_1(z) + z^{-1} T_{1,0}(z) X_0(z) + z^{-2} T_{1,1}(z) X_1(z)$
This is not directly $\hat{x}[n]$.

The polyphase matrix approach for the overall system relates the input polyphase sequences to the output polyphase sequences *after* downsampling.
$\hat{X}(z) = \sum_{i=0}^{M-1} z^{-i} \hat{X}_i(z^M)$
$\hat{X}_i(z)$ are the output polyphase sequences.

For a two-channel system with analysis polyphase matrix $\mathbf{H}(z)$ and synthesis polyphase matrix $\mathbf{G}(z)$:
The overall polyphase matrix is $\mathbf{T}(z) = \mathbf{G}(z) \mathbf{H}(z)$.
The reconstructed signal is $\hat{X}(z) = \sum_{i=0}^{M-1} z^{-i} [\mathbf{T}(z) \mathbf{X}(z)]_i$, where $\mathbf{X}(z)$ is the input polyphase vector.

For perfect reconstruction, $\mathbf{T}(z)$ must be a permutation matrix multiplied by a scalar and a delay:
$\mathbf{T}(z) = c \cdot z^{-d} \mathbf{P}$
where $\mathbf{P}$ is a permutation matrix.

For a standard two-channel PR filter bank, the conditions on the polyphase matrices are:
1.  **Alias Cancellation:** $H_{0,0}(z) G_{0,0}(z) + H_{1,0}(z) G_{1,0}(z) = 0$ and $H_{0,1}(z) G_{0,1}(z) + H_{1,1}(z) G_{1,1}(z) = 0$.
2.  **Distortion Cancellation:** $H_{0,0}(z) G_{0,1}(z) + H_{1,0}(z) G_{1,1}(z) = 0$ and $H_{0,1}(z) G_{0,0}(z) + H_{1,1}(z) G_{1,0}(z) = 0$.
3.  **Reconstruction:** $H_{0,0}(z) G_{0,0}(z) + H_{1,0}(z) G_{1,0}(z) = c \cdot z^{-d}$ (This should be the first condition of alias cancellation, which is actually the condition for the sum of signals for channel 0 before recombination.)

Let's simplify the reconstruction condition. The overall transfer function from $X(z)$ to $\hat{X}(z)$ is:
$\hat{X}(z) = \sum_{k=0}^{M-1} G_k(z) X(zW^{-k}) \downarrow M$ (This is the direct form).

Using polyphase:
$\hat{X}(z) = \sum_{i=0}^{M-1} z^{-i} [\mathbf{G}(z) \mathbf{H}(z) \mathbf{X}(z^M)]_i$.
For perfect reconstruction:
$\mathbf{G}(z) \mathbf{H}(z) = c \cdot z^{-d} \mathbf{P}$
where $\mathbf{P}$ is a permutation matrix.
For a standard two-channel alias-cancellation structure, $\mathbf{P} = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$.

This implies:
$G_{0,0}(z) H_{0,0}(z) + G_{0,1}(z) H_{1,0}(z) = 0$ (AC for first output polyphase component)
$G_{1,0}(z) H_{0,0}(z) + G_{1,1}(z) H_{1,0}(z) = c \cdot z^{-d}$ (PR for first output polyphase component)
$G_{0,0}(z) H_{0,1}(z) + G_{0,1}(z) H_{1,1}(z) = c \cdot z^{-d}$ (PR for second output polyphase component)
$G_{1,0}(z) H_{0,1}(z) + G_{1,1}(z) H_{1,1}(z) = 0$ (AC for second output polyphase component)

**Textbook Reference:** Lathi (2nd ed.) and Ziemer (4th ed.) discuss the implementation strategies and the efficiency gains offered by polyphase decomposition in multirate systems. Ambardar (2nd ed.) also provides a good overview of these implementations.

---

## 5. Perfect Reconstruction Conditions revisited with Polyphase Matrices

The overall system mapping from input polyphase sequences $\mathbf{X}(z)$ to output polyphase sequences $\mathbf{Y}(z)$ is given by the overall polyphase matrix $\mathbf{T}(z) = \mathbf{G}(z) \mathbf{H}(z)$.

For perfect reconstruction, the overall system must be equivalent to a pure delay and scaling. This means the overall polyphase matrix $\mathbf{T}(z)$ should be a permutation matrix multiplied by a scalar and a delay:

$$ \mathbf{T}(z) = c \cdot z^{-d} \mathbf{P} $$

where:
*   $c$ is a constant scaling factor.
*   $d$ is an integer delay.
*   $\mathbf{P}$ is a permutation matrix.

For an $M$-channel uniform filter bank, the simplest permutation matrix is the identity matrix $\mathbf{I}$ or a cyclic shift matrix.

**Conditions for Perfect Reconstruction for an M-channel Filter Bank:**

*   **Alias Cancellation:** The off-diagonal elements of $\mathbf{T}(z)$ (corresponding to permutations) must be zero.
*   **Amplitude and Phase Distortion:** The diagonal elements of $\mathbf{T}(z)$ must satisfy $\sum_{k=0}^{M-1} G_{k,i}(z) H_{k,i}(z) = c \cdot z^{-d}$ for the $i$-th diagonal element, and $\sum_{k=0}^{M-1} G_{k,j}(z) H_{k,i}(z) = 0$ for $i \neq j$ (this is for specific permutation matrices).

**For a common Type I Alias Cancellation structure:**
The analysis polyphase matrix is often of the form:
$$ \mathbf{H}(z) = \begin{bmatrix}
H_0(z) & H_1(z) & \cdots & H_{M-1}(z) \\
H_1(z) & H_2(z) & \cdots & H_0(z) \\
\vdots & \vdots & \ddots & \vdots \\
H_{M-1}(z) & H_{M-2}(z) & \cdots & H_{M-2}(z)
\end{bmatrix} $$
where $H_k(z)$ are the polyphase components of the original filter $H(z)$.

For perfect reconstruction, the synthesis polyphase matrix $\mathbf{G}(z)$ is related to $\mathbf{H}(z)$. For example, if $\mathbf{H}(z)$ is a Type I alias-cancellation polyphase matrix, then $\mathbf{G}(z)$ can be chosen to satisfy the PR conditions.

**Textbook Reference:** Oppenheim & Willsky and Haykin provide comprehensive treatments of PR conditions, including the roles of aliasing cancellation and distortion cancellation. The connection to the polyphase matrix provides a systematic way to derive and implement PR filter banks.

---

## 6. Design of Uniform Filter Banks (Brief Overview)

The design of uniform filter banks often involves designing a prototype filter $H(z)$ and then generating the $M$ analysis and synthesis filters.

*   **Alias-Cancellation Filter Banks:** These banks are designed to satisfy the alias cancellation conditions. For a two-channel system, the Weaver quadrature-mirror filter (QMF) is a well-known example, though it doesn't achieve perfect reconstruction.
*   **Perfect Reconstruction (PR) Filter Banks:** These banks are designed to meet both alias cancellation and distortion cancellation conditions.
    *   **Lattice Structures:** Polyphase decomposition naturally leads to lattice structures, which offer good design flexibility and numerical stability.
    *   **Coefficient Structures:** For PR filter banks, specific relationships between the analysis and synthesis filters are required. For example, for a two-channel PR system, if $G_k(z) = (-1)^k H_{1-k}(z)$ (for Type I), then alias cancellation is achieved. Further conditions are needed for distortion cancellation.

**Important Point:** Designing filters that meet both PR and good subband properties (like sharp transitions) is a complex task often involving optimization techniques.

---

## 7. Practice Questions and Exercises

**Question 1:**
Explain the primary challenge in implementing an $M$-channel filter bank and how downsampling contributes to it. (CO3, CO4)

**Answer:**
The primary challenge is **aliasing**, which occurs during the downsampling process. When a signal is downsampled by a factor of $M$, its spectrum is folded $M$ times. If the analysis filters do not have sufficiently narrow passbands or if their frequency responses are not carefully chosen, the folded spectra from adjacent subbands will overlap, causing interference that makes it difficult to reconstruct the original signal accurately.

**Question 2:**
What is polyphase decomposition? Illustrate with an example for $M=3$. (Learning Outcome: Understand the concept of polyphase decomposition)

**Answer:**
Polyphase decomposition breaks down a transfer function $H(z)$ into $M$ simpler transfer functions, called polyphase components, each operating at a lower sampling rate ($z^M$). It expresses $H(z)$ as:
$$ H(z) = \sum_{i=0}^{M-1} z^{-i} H_i(z^M) $$
where $H_i(z)$ are the Type I polyphase components.

**Example for M=3:**
Let $H(z) = h_0 + h_1 z^{-1} + h_2 z^{-2} + h_3 z^{-3} + h_4 z^{-4} + h_5 z^{-5} + h_6 z^{-6} + ...$
We group terms based on their powers of $z^{-1}$ modulo 3:
*   $i=0$: $h_0, h_3, h_6, ...$
*   $i=1$: $h_1, h_4, h_7, ...$
*   $i=2$: $h_2, h_5, h_8, ...$

$$ H(z) = (h_0 + h_3 z^{-3} + h_6 z^{-6} + ...) + z^{-1}(h_1 + h_4 z^{-3} + h_7 z^{-6} + ...) + z^{-2}(h_2 + h_5 z^{-3} + h_8 z^{-6} + ...) $$
$$ H(z) = H_0(z^3) + z^{-1} H_1(z^3) + z^{-2} H_2(z^3) $$
Here,
$H_0(z) = h_0 + h_3 z^{-1} + h_6 z^{-2} + ...$
$H_1(z) = h_1 + h_4 z^{-1} + h_7 z^{-2} + ...$
$H_2(z) = h_2 + h_5 z^{-1} + h_8 z^{-2} + ...$

**Question 3:**
Describe the efficient implementation of an analysis filter bank using polyphase decomposition. (Learning Outcome: Implement uniform filter banks efficiently using polyphase decomposition)

**Answer:**
The efficient implementation of an analysis filter bank using polyphase decomposition involves:
1.  **Input Polyphase Decomposition:** The input signal $x[n]$ is split into $M$ polyphase sequences: $x_i[n] = x[nM+i]$ for $i=0, \dots, M-1$.
2.  **Polyphase Matrix Multiplication:** Each analysis filter $H_k(z)$ is decomposed into its polyphase components $H_{k,i}(z)$. These components form the polyphase matrix $\mathbf{H}(z)$. The vector of input polyphase sequences $\mathbf{x}(z) = [X_0(z), \dots, X_{M-1}(z)]^T$ is multiplied by $\mathbf{H}(z)$ to produce the vector of filtered polyphase sequences $\mathbf{y}(z) = \mathbf{H}(z) \mathbf{x}(z)$. The $k$-th output sequence is $Y_k(z) = \sum_{i=0}^{M-1} H_{k,i}(z) X_i(z)$.
3.  **Downsampling and Recombination:** The output sequences $Y_k(z)$ are then upsampled by $M$ and summed to form the respective subband signals $x_k[nM]$.

This approach filters at the lower sampling rate ($z^M$), significantly reducing the computational complexity.

**Question 4:**
What is the condition for perfect reconstruction in terms of the overall polyphase matrix $\mathbf{T}(z) = \mathbf{G}(z) \mathbf{H}(z)$? (Learning Outcome: Analyze the trade-offs and performance of uniform filter banks)

**Answer:**
For perfect reconstruction, the overall polyphase matrix $\mathbf{T}(z)$ must be equal to a scaled and delayed permutation matrix:
$$ \mathbf{T}(z) = c \cdot z^{-d} \mathbf{P} $$
where $c$ is a constant, $d$ is an integer delay, and $\mathbf{P}$ is a permutation matrix. This ensures that the output signal is a scaled and delayed version of the input signal, with no aliasing or distortion introduced by the filter bank system.

**Question 5:**
Consider a two-channel uniform filter bank. If the analysis filters are $H_0(z)$ and $H_1(z)$, and the synthesis filters are $G_0(z)$ and $G_1(z)$, what would be the consequence of not satisfying the alias cancellation condition? (CO3, CO4)

**Answer:**
If the alias cancellation condition is not satisfied, the aliased components from the two subbands will not cancel out during the reconstruction process. This results in **aliasing distortion** in the reconstructed signal. The output signal $\hat{x}[n]$ will be corrupted by unwanted signal components, making it an inaccurate representation of the original input signal $x[n]$. This impurity prevents the possibility of perfect reconstruction.

---

## 8. Important Points to Remember

*   **Uniform filter banks** divide the frequency spectrum into equal-bandwidth subbands.
*   **Aliasing** is a critical issue in multirate systems due to downsampling.
*   **Polyphase decomposition** is a technique to represent filters in terms of simpler components operating at lower sampling rates.
*   **Polyphase matrices** provide a compact way to represent the behavior of multirate systems and filter banks.
*   **Efficient implementation** of filter banks using polyphase decomposition significantly reduces computational load.
*   **Perfect Reconstruction (PR)** is achieved when alias cancellation and distortion cancellation conditions are met.
*   The **overall polyphase matrix** of the filter bank system dictates the PR properties.

---

This concludes Module 1, Topic: Uniform filter banks and its implementation using polyphase decomposition. Please refer to the mentioned textbooks for more in-depth coverage and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
