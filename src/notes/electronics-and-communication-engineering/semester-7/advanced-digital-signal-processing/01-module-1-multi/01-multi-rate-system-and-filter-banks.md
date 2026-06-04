---
title: "Multi-rate system and filter banks :"
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 1: Multi"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff266"
status: "completed"
scrapedAt: "2026-05-23T18:03:59.593Z"
---
# Advanced Digital Signal Processing - Module 1: Multi-rate Systems and Filter Banks

## Introduction to Multi-rate Systems

Multi-rate digital signal processing deals with systems that process signals at different sampling rates. This is a powerful technique used in various applications like digital communications, audio and image processing, and data compression. The core idea is to strategically change the sampling rate of a signal to achieve efficiency, reduce computational complexity, or enable compatibility between systems operating at different rates.

### Key Concepts and Definitions

*   **Upsampling (Interpolation):** Increasing the sampling rate of a discrete-time signal.
*   **Downsampling (Decimation):** Decreasing the sampling rate of a discrete-time signal.
*   **Sampling Rate Converter:** A system that changes the sampling rate of a signal by a rational factor.
*   **Aliasing:** Distortion that occurs when the sampling rate is insufficient to capture the highest frequencies in a signal.
*   **Image/Replication:** The appearance of the original spectrum multiple times in the frequency domain after sampling.

### Upsampling (Interpolation)

Upsampling a discrete-time signal $x[n]$ by an integer factor $M$ means inserting $M-1$ zeros between each sample of $x[n]$. The resulting signal is denoted as $x_{up}[n]$.

**Mathematical Definition:**
$$ x_{up}[n] = \begin{cases} x[n/M] & \text{if } n \text{ is a multiple of } M \\ 0 & \text{otherwise} \end{cases} $$

**Effect on Spectrum:**
Upsampling by $M$ replicates the original spectrum of $x[n]$ at frequencies $\frac{2\pi k}{M}$ for $k = 0, 1, \dots, M-1$. The bandwidth of the signal is effectively expanded by a factor of $M$.

**Diagram:**
```
     x[n] ---- Upsample by M ----> x_up[n]
         (Insert M-1 zeros)
```

**Example:**
Let $x[n] = \{1, 2, 3\}$ for $n=0, 1, 2$. Upsample by $M=3$.
$x_{up}[n] = \{1, 0, 0, 2, 0, 0, 3, 0, 0, \dots\}$

**Important Note:** Upsampling by itself does not remove aliasing; it replicates the existing spectrum. To avoid aliasing in subsequent stages, a **low-pass filter (interpolation filter)** is typically used before or after upsampling.

**Interpolation Filter:**
An interpolation filter is a low-pass filter designed to remove the unwanted spectral replicas created by upsampling. It typically has a cutoff frequency of $\frac{\pi}{M}$.

$$ x_{int}[n] = x_{up}[n] * h_{int}[n] $$
where $h_{int}[n]$ is the impulse response of the interpolation filter.

### Downsampling (Decimation)

Downsampling a discrete-time signal $x[n]$ by an integer factor $L$ means keeping every $L$-th sample and discarding the rest. The resulting signal is denoted as $x_{down}[n]$.

**Mathematical Definition:**
$$ x_{down}[n] = x[nL] $$

**Effect on Spectrum:**
Downsampling by $L$ compresses the original spectrum of $x[n]$ by a factor of $L$. The new Nyquist frequency becomes $\frac{\pi}{L}$.

**Diagram:**
```
     x[n] ---- Downsample by L ----> x_down[n]
          (Keep every L-th sample)
```

**Example:**
Let $x[n] = \{1, 2, 3, 4, 5, 6\}$ for $n=0, 1, 2, 3, 4, 5$. Downsample by $L=2$.
$x_{down}[n] = \{1, 3, 5, \dots\}$

**Important Note:** Downsampling without proper filtering leads to **aliasing**. The high-frequency components of the original signal beyond the new Nyquist frequency $\frac{\pi}{L}$ will fold back into the desired frequency band.

**Anti-aliasing Filter:**
An anti-aliasing filter is a low-pass filter that is applied **before** downsampling to remove frequencies that would cause aliasing. The cutoff frequency of this filter should be less than or equal to $\frac{\pi}{L}$.

$$ x_{filtered}[n] = x[n] * h_{anti}[n] $$
$$ x_{down}[n] = x_{filtered}[nL] $$
where $h_{anti}[n]$ is the impulse response of the anti-aliasing filter.

## Sampling Rate Conversion by a Rational Factor

A common scenario is to change the sampling rate by a rational factor $\frac{M}{L}$, where $M$ is the upsampling factor and $L$ is the downsampling factor. This can be achieved by first upsampling by $M$ and then downsampling by $L$.

**Process:**
1.  **Upsample by M:** $x[n] \rightarrow x_{up}[n]$ (insert $M-1$ zeros)
2.  **Filter:** $x_{up}[n] \rightarrow x_{filtered}[n]$ (using an interpolation filter with cutoff $\frac{\pi}{M}$)
3.  **Downsample by L:** $x_{filtered}[n] \rightarrow y[n]$ (keep every $L$-th sample)

**Overall System:**
$$ y[n] = x_{filtered}[nL] = \left( x_{up}[n] * h_{int}[n] \right) \Big|_{n \rightarrow nL} $$

**Order of Operations:**
It is crucial to consider the order of upsampling and downsampling.
*   **Upsample then Downsample:** This is the standard approach for sampling rate conversion by $\frac{M}{L}$. The interpolation filter is essential.
*   **Downsample then Upsample:** This is generally **not** equivalent. If you downsample first, you lose information and introduce aliasing, which cannot be recovered by subsequent upsampling.

**Diagram of Sampling Rate Converter ($\frac{M}{L}$):**
```
     x[n] ---- Upsample by M ----> x_up[n] ---- LPF (Cutoff $\pi/M$) ----> x_filtered[n] ---- Downsample by L ----> y[n]
                                                                              (Keep every L-th)
```

**Important Considerations (Oppenheim & Willsky, Haykin):**
*   The design of the interpolation filter is critical for the performance of the sampling rate converter. The filter must effectively suppress the unwanted spectral images.
*   The delay introduced by the filter is also important to consider in practical implementations.

**Example of Sampling Rate Conversion:**
Convert a signal sampled at $f_s$ to a signal sampled at $\frac{M}{L} f_s$.
If $f_s = 8 \text{ kHz}$ and we want to convert to $16 \text{ kHz}$, then $\frac{M}{L} = \frac{16}{8} = 2$. So, $M=2, L=1$.
This means upsampling by 2 and no downsampling. The interpolation filter should have a cutoff at $\frac{\pi}{2}$.

If $f_s = 16 \text{ kHz}$ and we want to convert to $8 \text{ kHz}$, then $\frac{M}{L} = \frac{8}{16} = \frac{1}{2}$. So, $M=1, L=2$.
This means no upsampling and downsampling by 2. An anti-aliasing filter with cutoff at $\frac{\pi}{2}$ is required before downsampling.

If $f_s = 8 \text{ kHz}$ and we want to convert to $12 \text{ kHz}$, then $\frac{M}{L} = \frac{12}{8} = \frac{3}{2}$. So, $M=3, L=2$.
The process is: Upsample by 3, filter (cutoff $\pi/3$), downsample by 2.

## Filter Banks

Filter banks are a collection of bandpass filters designed to decompose a signal into different frequency subbands. They are fundamental components in many signal processing applications, including audio coding, speech analysis, and image processing.

### Types of Filter Banks

1.  **Uniform Filter Banks:** The bandpass filters are equally spaced in frequency and have identical bandwidths.
2.  **Non-uniform Filter Banks:** The filters are not equally spaced or do not have identical bandwidths.

### Analysis and Synthesis Filter Banks

A common structure is the **two-channel filter bank**, which decomposes a signal into two subbands (low-pass and high-pass).

#### Analysis Filter Bank

The analysis filter bank consists of a pair of filters, $h_0[n]$ (low-pass) and $h_1[n]$ (high-pass). The input signal $x[n]$ is split into two channels.

**Process:**
1.  $x[n]$ is passed through a low-pass filter $h_0[n]$ and a high-pass filter $h_1[n]$.
    *   $u_0[n] = x[n] * h_0[n]$
    *   $u_1[n] = x[n] * h_1[n]$
2.  The outputs of these filters are then downsampled by a factor of $L$ (typically $L=2$ for a two-channel filter bank). This is done to reduce the data rate.
    *   $x_0[n] = u_0[nL]$
    *   $x_1[n] = u_1[nL]$

**Diagram (Analysis):**
```
          h0[n] ---\      /--- Downsample by L
x[n] ---|           >---|
          h1[n] ---/      \--- Downsample by L
```

#### Synthesis Filter Bank

The synthesis filter bank reconstructs the original signal from the processed subband signals. It involves upsampling and then filtering.

**Process:**
1.  The subband signals $x_0[n]$ and $x_1[n]$ are upsampled by a factor of $L$.
    *   $v_0[n] = x_0[n]$ upsampled by $L$.
    *   $v_1[n] = x_1[n]$ upsampled by $L$.
2.  The upsampled signals are then passed through synthesis filters, $g_0[n]$ (low-pass) and $g_1[n]$ (high-pass).
    *   $y_0[n] = v_0[n] * g_0[n]$
    *   $y_1[n] = v_1[n] * g_1[n]$
3.  The outputs of the synthesis filters are added together to reconstruct the signal.
    *   $\hat{x}[n] = y_0[n] + y_1[n]$

**Diagram (Synthesis):**
```
          Upsample by L ---\      /--- g0[n] ---\
x0[n] ---|                 >---|               >--- Add --- \
                              |                     /--- g1[n] ---|--- \hat{x}[n]
x1[n] ---| Upsample by L ---/      \---------------|              |
```

### Perfect Reconstruction (PR) Filter Banks

A filter bank system achieves **perfect reconstruction (PR)** if the reconstructed signal $\hat{x}[n]$ is an exact replica of the original input signal $x[n]$, possibly with a delay.
$$ \hat{x}[n] = c \cdot x[n - d] $$
where $c$ is a constant gain and $d$ is a delay.

**Conditions for Perfect Reconstruction in a Two-Channel QMF (Quadrature Mirror Filter) System (L=2):**

Let the analysis filters be $h_0[n]$ and $h_1[n]$, and the synthesis filters be $g_0[n]$ and $g_1[n]$.

1.  **Alias Cancellation:**
    $$ g_0[n] = 2 h_1[N-1-n] $$
    $$ g_1[n] = -2 h_0[N-1-n] $$
    where $N$ is the filter length. This condition ensures that aliasing components introduced by downsampling cancel out after upsampling and filtering.

2.  **Magnitude Response:**
    $$ |G_0(\omega)| = |G_1(\omega)| $$
    The magnitudes of the synthesis filters should be equal.

3.  **Phase Response:**
    $$ \angle G_0(\omega) = \angle G_1(\omega) $$
    The phases of the synthesis filters should be equal.

Combining these, the PR condition is often simplified in terms of the analysis filters. For a critically sampled (L=2) two-channel filter bank:

**Conditions for PR:**
*   **Alias Cancellation:** $g_0[n] = 2h_1[N-1-n]$ and $g_1[n] = -2h_0[N-1-n]$
*   **Magnitude Response:** $|H_0(\omega)| + |H_0(\omega+\pi)| = 1$ (for $g_0[n]$ and $g_1[n]$ defined above)
*   **Magnitude Response:** $|H_0(\omega)|^2 + |H_1(\omega)|^2 = 2$ (if $g_0[n] = h_0[n]$ and $g_1[n] = h_1[n]$ with specific design)

**Quadrature Mirror Filters (QMF):**
QMFs are a specific type of filter used in two-channel filter banks that satisfy the alias cancellation condition. For QMFs, the filters are related as follows:
*   $h_1[n] = (-1)^n h_0[N-1-n]$
*   $g_0[n] = 2 h_0[n]$ (or proportional to $h_0[n]$)
*   $g_1[n] = 2 h_1[n]$ (or proportional to $h_1[n]$)

With these choices, the PR condition simplifies to:
$$ |H_0(\omega)|^2 + |H_0(\omega + \pi)|^2 = 1 $$
This is the **product quantization condition**.

**Aliasing Example in a Two-Channel Filter Bank:**
Consider a signal $x[n]$ with a spectrum spanning from $0$ to $\pi$.
If we downsample by $L=2$, the new Nyquist frequency is $\pi/2$.
The low-pass analysis filter $h_0[n]$ should ideally pass frequencies from $0$ to $\pi/2$ and reject frequencies from $\pi/2$ to $\pi$.
If $h_0[n]$ is not ideal and passes some frequencies above $\pi/2$, then when $u_0[n]$ is downsampled to $x_0[n]$, these high frequencies will alias to the band $0$ to $\pi/2$.
The high-pass analysis filter $h_1[n]$ is designed to pass frequencies from $\pi/2$ to $\pi$. When $u_1[n]$ is downsampled to $x_1[n]$, these frequencies are compressed and map to $0$ to $\pi/2$.
The synthesis filters $g_0[n]$ and $g_1[n]$ are designed to reconstruct the signal. The alias cancellation condition ensures that the aliased components from the low-pass path and the shifted components from the high-pass path cancel each other out.

### Polyphase Representation

The analysis and synthesis filter banks can be more efficiently represented using the **polyphase representation**. This involves decomposing the filters into sub-filters that operate on alternating samples.

For a filter $h[n]$ and downsampling by $L$:
$$ h[n] = \sum_{k=0}^{L-1} E_k[n] z^{-k} $$
where $E_k[n]$ are the polyphase components.

The analysis filter bank can be represented in matrix form using polyphase matrices. This representation is crucial for understanding more complex filter bank structures like M-channel filter banks and for proving PR conditions.

**M-Channel Filter Banks:**
These generalize the two-channel case to $M$ channels. The analysis bank uses $M$ filters and downsamples by $M$. The synthesis bank uses $M$ filters and upsamples by $M$. The PR conditions become more complex, involving matrix equations in the polyphase domain.

### Applications of Multi-rate Systems and Filter Banks

*   **Digital Communications:** Transmultiplexers (combining multiple voice channels onto a single carrier), rate conversion for compatibility.
*   **Audio and Speech Processing:** Audio compression (e.g., MP3, AAC), speech recognition, equalization.
*   **Image and Video Processing:** Image compression, feature extraction, resolution enhancement.
*   **Data Compression:** Wavelet transforms (which are closely related to filter banks).
*   **Subband Coding:** Efficiently coding signals by separating them into different frequency bands.

---

## Alignment with Course Outcomes

*   **CO1: Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals.**
    *   This module directly deals with discrete-time signals and systems. Operations like upsampling and downsampling are fundamental signal manipulations. Understanding properties like aliasing is key.
*   **CO2: Determine the stability and causality of LTI systems using convolution operations.**
    *   While not the primary focus, filters used in multi-rate systems are LTI systems. Their stability and causality are important design considerations, and their frequency response (analyzed via Fourier transform) is crucial for multi-rate operations. Convolution is implicitly used in filtering.
*   **CO3: Analyze signals in frequency domain using Laplace, Fourier and z-transforms and examine the properties of transforms.**
    *   The entire analysis of upsampling and downsampling relies heavily on understanding how the spectrum of a signal changes. The Z-transform and Fourier transform are indispensable tools for analyzing the effects of sampling rate changes and designing filters.
*   **CO4: Interpret the use of various transforms to analyze continuous and discrete time LTI systems.**
    *   As stated in CO3, transforms are fundamental for understanding and designing multi-rate systems and filter banks, allowing us to analyze spectral replication, aliasing, and filter performance.

---

## Practice Questions and Exercises

**Question 1:**
A discrete-time signal $x[n]$ is sampled at $f_s = 10$ kHz. If we want to convert this signal to a sampling rate of $f'_s = 25$ kHz, by what integer factors $M$ and $L$ should we upsample and downsample, respectively?

**Answer 1:**
We need to find integers $M$ and $L$ such that $\frac{M}{L} = \frac{f'_s}{f_s} = \frac{25 \text{ kHz}}{10 \text{ kHz}} = \frac{25}{10} = \frac{5}{2}$.
Therefore, we should upsample by $M=5$ and downsample by $L=2$.

**Question 2:**
Consider a discrete-time signal $x[n]$ with a spectrum that is non-zero only for $|\omega| \leq \frac{\pi}{4}$. If we downsample this signal by a factor of $L=3$, what is the range of frequencies for which the resulting signal $y[n]$ will have a non-zero spectrum? What is the condition on an anti-aliasing filter applied before downsampling?

**Answer 2:**
The original signal's bandwidth is $\frac{\pi}{4}$.
When downsampling by $L=3$, the spectrum is compressed by a factor of 3. The new Nyquist frequency becomes $\frac{\pi}{L} = \frac{\pi}{3}$.
The original frequencies in the range $[-\frac{\pi}{4}, \frac{\pi}{4}]$ will now occupy the range $[-\frac{\pi}{3}, \frac{\pi}{3}]$.
So, the resulting signal $y[n]$ will have a non-zero spectrum for $|\omega| \leq \frac{\pi}{3}$.

The condition on an anti-aliasing filter applied before downsampling is that it must remove all frequencies above the new Nyquist frequency, which is $\frac{\pi}{3}$. Therefore, the cutoff frequency of the anti-aliasing filter must be less than or equal to $\frac{\pi}{3}$.

**Question 3:**
Explain the phenomenon of aliasing in the context of downsampling. If a signal $x[n]$ contains frequencies up to $\pi$, and we downsample by $L=2$ without any filtering, describe how the spectrum of the downsampled signal $y[n] = x[nL]$ will look like.

**Answer 3:**
Aliasing occurs when downsampling a signal without first removing frequencies that are above the new Nyquist frequency ($\pi/L$). These high frequencies "fold" or "wrap around" into the desired lower frequency band, distorting the signal.

If a signal $x[n]$ has a spectrum from $0$ to $\pi$, and we downsample by $L=2$, the original spectrum will be compressed into the new range $[-\pi/2, \pi/2]$. However, the original spectrum from $\pi/2$ to $\pi$ will fold back into the range $[-\pi/2, 0]$ (or equivalently $[0, \pi/2]$), overlapping with the original frequencies in $[0, \pi/2]$.

Specifically, the original spectrum $X(\omega)$ for $|\omega| \in [\pi/2, \pi]$ will appear in the downsampled signal's spectrum $Y(\Omega)$ in the range $|\Omega| \in [\pi/2, \pi]$ as:
$Y(\Omega) = X(\Omega) + X(\Omega + 2\pi/L)$ where $L=2$.
So, $Y(\Omega) = X(\Omega) + X(\Omega + 2\pi/2) = X(\Omega) + X(\Omega+\pi)$.
For $|\Omega| \in [0, \pi/2]$, $X(\Omega+\pi)$ is the portion of the original spectrum that was in $[\pi/2, \pi]$ and has now been aliased into $[0, \pi/2]$.

**Question 4 (Filter Bank concept):**
In a two-channel QMF filter bank system with $L=2$, what is the relationship between the low-pass analysis filter $h_0[n]$ and the high-pass analysis filter $h_1[n]$ for perfect reconstruction, assuming the synthesis filters are derived from the analysis filters?

**Answer 4:**
For a two-channel QMF system with $L=2$ and assuming the synthesis filters are related to the analysis filters as $g_0[n] = 2h_0[n]$ and $g_1[n] = 2h_1[n]$ (or scaled versions), the perfect reconstruction condition is primarily governed by the alias cancellation and a specific relationship between the analysis filters:
$$ h_1[n] = (-1)^n h_0[N-1-n] $$
where $N$ is the length of the filters. This relationship ensures that the magnitude response satisfies $|H_0(\omega)|^2 + |H_0(\omega + \pi)|^2 = 1$, which is the condition for alias cancellation and unity gain reconstruction.

---

## Important Points to Remember

*   **Upsampling by M:** Inserts $M-1$ zeros. Replicates the spectrum. Requires an interpolation filter to remove unwanted images.
*   **Downsampling by L:** Keeps every $L$-th sample. Compresses the spectrum. Requires an anti-aliasing filter (LPF with cutoff $\leq \pi/L$) **before** downsampling to prevent aliasing.
*   **Sampling Rate Conversion by M/L:** Achieved by upsampling by M, filtering, and then downsampling by L.
*   **Aliasing:** A critical issue in downsampling. High frequencies fold into the desired band if not removed by an anti-aliasing filter.
*   **Filter Banks:** Decompose signals into frequency subbands. Used for compression, analysis, and signal manipulation.
*   **Perfect Reconstruction (PR):** Ensures the reconstructed signal is an exact replica of the original, possibly with a delay. Key conditions involve alias cancellation and magnitude/phase matching.
*   **QMFs:** A common type of filter for two-channel PR filter banks, satisfying specific relationships between filters.
*   **Order of Operations:** Upsample then downsample is the correct order for sampling rate conversion by M/L. Downsampling first loses information and introduces aliasing.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## Textbook References

*   **Oppenheim & Willsky:** Chapters dealing with sampling, multi-rate systems, and filter banks are highly relevant. They provide detailed mathematical derivations for spectral effects and PR conditions.
*   **Haykin:** Similar to Oppenheim & Willsky, Haykin's text will cover the fundamentals of sampling, interpolation, decimation, and the design and analysis of filter banks.

---

This comprehensive study note covers the essential aspects of multi-rate systems and filter banks, aligning with the provided learning and course outcomes. The examples and practice questions help solidify understanding. Remember to consult the specified textbooks for deeper theoretical insights and rigorous mathematical treatments.