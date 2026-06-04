---
title: "Efficient structures for decimation and interpolation filters."
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 1: Multi"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff26b"
status: "completed"
scrapedAt: "2026-05-23T18:04:04.087Z"
---
# ADVANCED DIGITAL SIGNAL PROCESSING

## Module 1: Multirate Signal Processing

### Topic: Efficient Structures for Decimation and Interpolation Filters

This module introduces the fundamental concepts of multirate signal processing, focusing on the techniques and efficient implementations of decimation (downsampling) and interpolation (upsampling).

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the principles of decimation and interpolation.
*   Analyze the effects of decimation and interpolation on the signal spectrum.
*   Identify and explain the need for anti-aliasing and anti-imaging filters.
*   Design and implement efficient structures for decimation and interpolation filters.
*   Understand the implications of polyphase decomposition for efficient filter implementation.
*   Analyze the computational complexity of different multirate filter structures.

---

### 1. Introduction to Multirate Signal Processing

Multirate signal processing involves the processing of digital signals at different sampling rates. This is crucial in many applications, such as:

*   **Digital Communications:** Converting between different sampling rates in communication systems.
*   **Audio Processing:** Changing the sampling rate of audio signals (e.g., CD quality to MP3).
*   **Image Processing:** Resizing images.
*   **Telecommunications:** Bandwidth reduction and expansion.

The two primary operations in multirate signal processing are:

*   **Decimation (Downsampling):** Reducing the sampling rate of a signal.
*   **Interpolation (Upsampling):** Increasing the sampling rate of a signal.

---

### 2. Decimation (Downsampling)

#### 2.1. Definition and Operation

Decimation by an integer factor $M$ involves reducing the sampling rate of a discrete-time signal $x[n]$ from $F_s$ to $F_s/M$. This is achieved by keeping one sample out of every $M$ samples and discarding the rest.

Mathematically, the decimated signal $y[n]$ is related to the original signal $x[n]$ as follows:

$y[n] = x[nM]$

**Example:**
Let $x[n] = \{1, 2, 3, 4, 5, 6, 7, 8, \dots\}$
If we decimate by $M=2$, the decimated signal $y[n]$ is:
$y[n] = x[2n] = \{x[0], x[2], x[4], x[6], \dots\} = \{1, 3, 5, 7, \dots\}$

#### 2.2. Effect on the Spectrum

When a signal is decimated, its spectrum is compressed by a factor of $M$. If the original signal's spectrum is $X(e^{j\omega})$, the spectrum of the decimated signal $y[n]$ appears as:

$Y(e^{j\omega}) = X(e^{jM\omega})$

This compression can lead to aliasing if the original signal contains frequency components above $F_s/(2M)$. These higher frequency components, when compressed, will fold back into the lower frequency band $(0, F_s/(2M))$, distorting the signal.

**Important Consideration:** To prevent aliasing during decimation, a low-pass filter (called an **anti-aliasing filter**) must be applied *before* the downsampling operation. This filter removes frequency components above $F_s/(2M)$.

#### 2.3. Decimation with an Anti-Aliasing Filter

The correct process for decimation by $M$ is:

1.  **Low-pass filter** the original signal $x[n]$ with a cutoff frequency at or below $\pi/M$ radians per sample. Let the filtered signal be $x_f[n]$.
2.  **Decimate** the filtered signal $x_f[n]$ by $M$ to obtain the output $y[n]$:
    $y[n] = x_f[nM]$

The spectrum of the filtered signal $X_f(e^{j\omega})$ is zero for $|\omega| > \pi/M$. When $X_f(e^{j\omega})$ is compressed, the aliased components do not overlap.

**Referenced Concept (Oppenheim & Willsky, Chapter 7: Sampling of Signals):** The Nyquist-Shannon sampling theorem states that to perfectly reconstruct a band-limited signal from its samples, the sampling rate must be at least twice the highest frequency component of the signal. Decimation effectively reduces the sampling rate, necessitating a pre-filter to avoid violating this theorem in the decimated signal.

---

### 3. Interpolation (Upsampling)

#### 3.1. Definition and Operation

Interpolation by an integer factor $L$ involves increasing the sampling rate of a discrete-time signal $x[n]$ from $F_s$ to $LF_s$. This is achieved by inserting $L-1$ zero-valued samples between consecutive samples of the original signal.

Mathematically, the upsampled signal $y[n]$ is related to the original signal $x[n]$ as follows:

$y[n] = \begin{cases} x[n/L] & \text{if } n \text{ is a multiple of } L \\ 0 & \text{otherwise} \end{cases}$

This can also be expressed as:

$y[n] = x[n] \cdot \sum_{k=-\infty}^{\infty} \delta[n - kL]$

**Example:**
Let $x[n] = \{1, 3, 5, 7, \dots\}$
If we interpolate by $L=2$, the upsampled signal $y[n]$ is:
$y[n] = \{1, 0, 3, 0, 5, 0, 7, 0, \dots\}$

#### 3.2. Effect on the Spectrum

When a signal is upsampled by $L$, its spectrum is expanded by a factor of $L$. The original spectrum $X(e^{j\omega})$ is replicated at frequencies $\omega = 2\pi k/L$ for $k = 0, \pm 1, \pm 2, \dots$.

The spectrum of the upsampled signal $y[n]$ is:

$Y(e^{j\omega}) = \sum_{k=-\infty}^{\infty} X(e^{j(\omega - 2\pi k)/L})$

This expansion creates copies of the original spectrum. If the original signal's bandwidth is not appropriately limited (relative to the new sampling rate), these copies can overlap, causing **imaging**.

**Important Consideration:** To prevent imaging during interpolation, a low-pass filter (called an **anti-imaging filter**) must be applied *after* the upsampling operation. This filter removes the unwanted spectral images, leaving only the desired baseband replica of the original signal's spectrum. The cutoff frequency of this filter should be $\pi/L$ radians per sample.

#### 3.3. Interpolation with an Anti-Imaging Filter

The correct process for interpolation by $L$ is:

1.  **Upsample** the signal $x[n]$ by $L$ to obtain an intermediate signal $w[n]$.
2.  **Low-pass filter** the upsampled signal $w[n]$ with a cutoff frequency at or below $\pi/L$ radians per sample. Let the filtered signal be $y[n]$.

The low-pass filter has a frequency response $H(e^{j\omega})$ such that:
$y[n] = w[n] * h[n]$
$Y(e^{j\omega}) = W(e^{j\omega}) H(e^{j\omega})$

Where $W(e^{j\omega})$ contains the replicated spectra. The filter $H(e^{j\omega})$ is designed to pass the baseband spectrum $X(e^{jL\omega})$ and attenuate the images.

**Referenced Concept (Haykin, Chapter 12: Digital Interpolation and Decimation):** Interpolation is essentially a synthesis process where new samples are generated. The zero-insertion process itself does not create meaningful new information; it only expands the existing spectrum. The subsequent filtering is what reconstructs a signal that could have been sampled at the higher rate.

---

### 4. Cascaded Integrators-Comb (CIC) Filters for Decimation and Interpolation

CIC filters are a class of digital filters commonly used in multirate systems. They are computationally efficient because they only use delays and additions, avoiding multiplications. This makes them ideal for hardware implementation, especially in FPGAs.

#### 4.1. Decimation by M using CIC Filters

A basic CIC decimator consists of a cascade of $N$ sections of an integrator followed by a comb filter section.

**Structure:**
Input $x[n]$ $\rightarrow$ $\text{Integrator}_1 \rightarrow \text{Integrator}_2 \rightarrow \dots \rightarrow \text{Integrator}_N \rightarrow \text{CombFilter}_1 \rightarrow \text{CombFilter}_2 \rightarrow \dots \rightarrow \text{CombFilter}_N$ $\rightarrow$ Output $y[n]$

*   **Integrator Section:** Implemented as $H_I(z) = \frac{1}{1 - z^{-1}}$. This corresponds to a running sum.
*   **Comb Filter Section:** Implemented as $H_C(z) = 1 - z^{-M}$. This corresponds to differencing the input with a delayed version of itself, where the delay is the downsampling factor $M$.

The overall transfer function for a $N$-section CIC decimator is:

$H_{CIC}(z) = \left( \frac{1}{1 - z^{-M}} \right)^N \left( \frac{1}{1 - z^{-1}} \right)^N = \left( \frac{1 - z^{-1}}{1 - z^{-M}} \right)^N$

**Key Properties of CIC Decimators:**
*   **No Multipliers:** Simplifies hardware.
*   **Fixed Frequency Response:** The shape of the frequency response is determined by $N$ and $M$.
*   **Sinc-like Response:** The frequency response is a product of sinc functions. The nulls of the comb filter are critical for achieving spectral shaping.
*   **Fixed Point Arithmetic Issues:** Overflow can occur in integrators if not properly managed.

#### 4.2. Interpolation by L using CIC Filters

A CIC interpolator is the reverse of a CIC decimator. It consists of a comb filter followed by a cascade of integrators.

**Structure:**
Input $x[n]$ $\rightarrow$ $\text{CombFilter}_1 \rightarrow \text{CombFilter}_2 \rightarrow \dots \rightarrow \text{CombFilter}_N \rightarrow \text{Integrator}_1 \rightarrow \text{Integrator}_2 \rightarrow \dots \rightarrow \text{Integrator}_N$ $\rightarrow$ Output $y[n]$

The transfer function for a $N$-section CIC interpolator is:

$H_{CIC}(z) = \left( \frac{1}{1 - z^{-1}} \right)^N \left( \frac{1 - z^{-L}}{1} \right)^N = \left( \frac{1 - z^{-L}}{1 - z^{-1}} \right)^N$

**Note:** The $z^{-L}$ in the comb filter for interpolation is applied *before* the upsampling. However, in a typical CIC interpolator, the comb filter operates on the upsampled signal. A more accurate representation of the interpolator structure and its transfer function relates to the cascaded integrator and comb sections applied after upsampling.

A common implementation view for CIC interpolation is to first upsample by $L$, then apply a cascade of integrators, and then a cascade of comb filters. The order can be interchanged, but the impulse response will be different.

A more standard view for CIC interpolation is:
1.  **Upsample** by $L$.
2.  **Integrator Section:** $H_I(z) = 1 + z^{-1} + z^{-2} + \dots + z^{-(L-1)} = \frac{1 - z^{-L}}{1 - z^{-1}}$
3.  **Comb Filter Section:** $H_C(z) = 1 - z^{-1}$

The overall transfer function for a $N$-section CIC interpolator where each section consists of an integrator followed by a comb filter (applied after upsampling) is:

$H_{CIC}(z) = \left( \frac{1 - z^{-L}}{1 - z^{-1}} \right)^N \left( 1 - z^{-1} \right)^N = (1 - z^{-L})^N$

This is a simplified view. For a more accurate understanding, consider the direct form:
Upsample $x[n]$ by $L$ to get $w[n]$.
Then apply $N$ cascaded sections, each with a transfer function of $\frac{1-z^{-L}}{1-z^{-1}}$.
The overall transfer function for $N$ such sections is $\left(\frac{1-z^{-L}}{1-z^{-1}}\right)^N$.

**Key Properties of CIC Interpolators:**
*   **No Multipliers.**
*   **Efficient for Upsampling:** They effectively spread the energy of the input samples into $L$ output samples.
*   **Spectral Replication:** Similar to general interpolation, CIC interpolators also produce spectral images that need to be filtered by an anti-imaging filter.

**Referenced Concept (Ambardar, Chapter 9: Digital Interpolation and Decimation):** CIC filters are a prime example of how to achieve multirate operations with minimal computational cost by leveraging delay elements and simple adders/subtractors. Their frequency response is related to the sinc function, which has inherent low-pass characteristics.

---

### 5. Polyphase Decomposition

Polyphase decomposition is a powerful technique for restructuring filter operations, especially multirate filters, to improve computational efficiency. It allows us to separate the filter's coefficients into different "phases."

#### 5.1. Polyphase Representation of a Filter

Any Linear Time-Invariant (LTI) system with transfer function $H(z)$ can be decomposed into $M$ polyphase components. For a filter of length $K$, we can consider its impulse response $h[n]$.

We can express $H(z)$ as:

$H(z) = \sum_{n=0}^{K-1} h[n]z^{-n}$

The $M$-polyphase decomposition splits $H(z)$ into $M$ components:

$H(z) = H_0(z^M) + z^{-1}H_1(z^M) + z^{-2}H_2(z^M) + \dots + z^{-(M-1)}H_{M-1}(z^M)$

where $H_k(z)$ are the $M$-polyphase components of $H(z)$. The $k$-th polyphase component $H_k(z)$ contains all the impulse response coefficients $h[n]$ where $n \equiv k \pmod{M}$.

$H_k(z) = \sum_{j=0}^{\lfloor (K-1-k)/M \rfloor} h[k+jM]z^{-j}$

#### 5.2. Polyphase Structure for Decimation

The decimation operation $y[n] = x_f[nM]$ can be implemented efficiently using polyphase decomposition of the anti-aliasing filter $H(z)$.

Consider the process: $y[n] = \sum_{k=0}^{K-1} h[k] x_f[nM-k]$.
Let $m = nM$. Then $y[m/M] = \sum_{k=0}^{K-1} h[k] x_f[m-k]$.
The input $x_f[n]$ can be decomposed into its $M$ polyphase components:
$X_f(z) = X_{f0}(z^M) + z^{-1}X_{f1}(z^M) + \dots + z^{-(M-1)}X_{f,M-1}(z^M)$

The output $Y(z)$ is obtained by processing each polyphase component of the input with the corresponding polyphase component of the filter and then combining them.

$Y(z) = \sum_{k=0}^{M-1} z^{-k} H_k(z^M) X_{fk}(z^M)$

This structure is more efficient because the filters $H_k(z)$ operate at a reduced sampling rate of $F_s/M$.

**Computational Advantage:**
Instead of filtering the entire signal at the high sampling rate $F_s$ and then downsampling, we split the input into $M$ streams, filter each stream at $F_s/M$, and then combine them. This significantly reduces the number of multiplications and additions.

#### 5.3. Polyphase Structure for Interpolation

Similarly, polyphase decomposition can be applied to the interpolation process. The interpolation process involves upsampling by $L$ followed by filtering.

The process is: $y[n] = \sum_{k=0}^{K-1} h[k] x[n-k]$ where the input $x[n]$ is upsampled.
Let the input signal be $x[n]$. Upsample it by $L$ to get $x_{up}[n]$.
$x_{up}[n] = \begin{cases} x[n/L] & \text{if } n \text{ is a multiple of } L \\ 0 & \text{otherwise} \end{cases}$

The output is $y[n] = h[n] * x_{up}[n]$.

Using polyphase decomposition of the filter $H(z)$:
$H(z) = \sum_{k=0}^{L-1} z^{-k} H_k(z^L)$

The interpolation can be implemented as:
1.  Decompose the input $x[n]$ into $L$ polyphase components.
2.  Filter each polyphase component $x_k[n]$ with the corresponding polyphase component of the filter $H_k(z)$.
3.  Upsample the filtered components by $L$.
4.  Sum the upsampled components.

However, a more common and efficient polyphase implementation for interpolation is to filter *before* upsampling.
$y[n] = \sum_{k=0}^{K-1} h[k] x[n-k]$
Consider the input signal $x[n]$. We can think of its polyphase components $x_k[n]$ for $k=0, \dots, L-1$.
The output $y[n]$ can be seen as:
$y[n] = \sum_{k=0}^{L-1} \left( \sum_{j} h_{jL+k} x[n-(jL+k)] \right)$

This can be rewritten as:
$y[n] = \sum_{k=0}^{L-1} \left( \sum_{j} h_{jL+k} x[n-k-jL] \right)$

Let $n' = n-k$.
$y[n] = \sum_{k=0}^{L-1} \left( \sum_{j} h_{jL+k} x[n'-jL] \right)$

This can be implemented efficiently:
1.  Decompose $x[n]$ into $L$ polyphase components $x_k[n]$.
2.  Filter each $x_k[n]$ using a polyphase filter $H_k(z)$ operating at the original sampling rate.
3.  Combine the outputs of these filters: $y[n] = \sum_{k=0}^{L-1} \text{output}_k[n]$. This implicitly handles the upsampling and spectral imaging.

**Computational Advantage:** The polyphase structure for interpolation processes $L$ parallel branches. Each branch filters the input at the original sampling rate $F_s$, but the filter is split into smaller polyphase filters $H_k(z)$. The overall computation is reduced because the combined effect of filtering and upsampling is achieved with fewer operations than a direct implementation.

**Referenced Concept (Oppenheim & Willsky, Chapter 7: Sampling of Signals - Multirate Systems):** Polyphase decomposition is the key to understanding and implementing efficient multirate filters. It allows the separation of operations so that they can be performed at a reduced sampling rate or in parallel branches, minimizing computational load.

---

### 6. Efficient Structures for Decimation and Interpolation Filters (Detailed Implementations)

#### 6.1. Efficient Decimation Structure

A direct implementation of decimation with an anti-aliasing filter $H(z)$ involves:
1.  Apply $H(z)$ to $x[n]$, resulting in $x_f[n]$.
2.  Downsample $x_f[n]$ by $M$.

If $H(z)$ is a FIR filter of length $K$, this requires approximately $K$ multiplications per input sample.

**Polyphase Implementation for Decimation:**
Let the anti-aliasing filter $H(z)$ have impulse response $h[n]$ of length $K$.
$H(z) = \sum_{n=0}^{K-1} h[n]z^{-n}$

Decompose $H(z)$ into $M$ polyphase components:
$H(z) = H_0(z^M) + z^{-1}H_1(z^M) + \dots + z^{-(M-1)}H_{M-1}(z^M)$

The polyphase components $H_k(z)$ are filters of length approximately $K/M$.

The decimation operation can be implemented as:
$y[n] = \sum_{k=0}^{M-1} H_k(z^M) \cdot z^{-k} X_{k}(z^M)$
where $X_k(z)$ are the polyphase components of the input signal $x[n]$.

**Implementation Steps:**
1.  Decompose the input signal $x[n]$ into $M$ polyphase streams: $x_0[n] = x[nM]$, $x_1[n] = x[nM+1]$, ..., $x_{M-1}[n] = x[nM+M-1]$. Note that these streams are at a rate $F_s/M$.
2.  Filter each stream $x_k[n]$ with the corresponding polyphase filter $H_k(z)$. This results in $y_k[n] = H_k(z) * x_k[n]$. These filters operate at the reduced rate $F_s/M$.
3.  Combine the outputs by upsampling each $y_k[n]$ by $M$ and summing them. However, in the context of decimation, the combination is simpler. The output $y[n]$ is formed by taking the $n$-th sample from the $k$-th polyphase component and applying the $k$-th filter.

A more direct way to view the polyphase decimator:
*   Input $x[n]$.
*   Split $x[n]$ into $M$ polyphase sequences $x_k[n]$.
*   Filter each $x_k[n]$ with $H_k(z)$, resulting in $y_k[n]$.
*   The output $y[n]$ is obtained by: $y[n] = \sum_{k=0}^{M-1} y_k[n]$.

**Computational Savings:**
If the original filter $H(z)$ has length $K$, a direct implementation requires $K$ multiplications per input sample. In the polyphase implementation, the $M$ polyphase filters $H_k(z)$ each have length $K/M$. Each polyphase filter operates at $F_s/M$ rate. The total number of multiplications per output sample is approximately $M \times (K/M) = K$. However, the filtering operations are effectively spread across $M$ parallel filters operating at a lower rate. The total number of operations per unit time is significantly reduced, particularly if the output rate is $F_s/M$.

Let's consider operations per sample at the *original* rate $F_s$.
Original filter length $K$.
Decimation by $M$.
Polyphase filters $H_k(z)$ have length $K_p \approx K/M$.
We have $M$ such filters operating on interleaved samples.
The total number of multiplications per $M$ samples of input is $M \times K_p \approx M \times (K/M) = K$.
However, the operations are distributed: each of the $M$ polyphase filters performs $K_p$ multiplications for every $M$ input samples (or 1 multiplication for every sample in its $F_s/M$ stream).
Total multiplications per unit time for $F_s$ input: $K$ multiplications.
Total multiplications per unit time for $F_s/M$ output: $K$ multiplications / $M$.
This means the computation per output sample is approximately $K/M$.

**Example:** A FIR filter of length 100 is used for decimation by $M=4$.
Direct implementation: 100 multiplications per input sample.
Polyphase implementation: 4 polyphase filters, each of length $100/4 = 25$. Each filter operates at $F_s/4$.
Total multiplications per input sample: $4 \times 25 = 100$.
Total multiplications per output sample (at $F_s/4$): $(4 \times 25) / 4 = 25$.
Significant saving!

#### 6.2. Efficient Interpolation Structure

A direct implementation of interpolation by $L$ with an anti-imaging filter $H(z)$ involves:
1.  Upsample $x[n]$ by $L$, creating $x_{up}[n]$ (inserting zeros).
2.  Apply $H(z)$ to $x_{up}[n]$.

If $H(z)$ is a FIR filter of length $K$, the upsampled signal $x_{up}[n]$ has $L-1$ zeros for every one input sample. Applying $H(z)$ directly to $x_{up}[n]$ is very inefficient because most of the multiplications are with zeros.

**Polyphase Implementation for Interpolation:**
Let the anti-imaging filter $H(z)$ have impulse response $h[n]$ of length $K$.
Decompose $H(z)$ into $L$ polyphase components:
$H(z) = H_0(z^L) + z^{-1}H_1(z^L) + \dots + z^{-(L-1)}H_{L-1}(z^L)$

The polyphase components $H_k(z)$ are filters of length approximately $K/L$.

The interpolation operation can be implemented efficiently as:
1.  Decompose the input signal $x[n]$ into $L$ polyphase streams: $x_0[n] = x[n]$, $x_1[n] = x[n-1]$, ..., $x_{L-1}[n] = x[n-(L-1)]$. (This is not the standard way; the decomposition is of the filter, and the input is processed in parallel streams).

A more standard polyphase interpolator:
*   Input $x[n]$.
*   Split $x[n]$ into $L$ polyphase sequences $x_k[n]$ where $x_k[n] = x[n]$ for all $n$ (effectively, each sequence is the original signal). This is not quite right.

Let's rethink the polyphase interpolation structure.
The goal is to compute $y[n] = H(z) \cdot \uparrow_L \{x[n]\}$.
The upsampled signal $w[n] = \uparrow_L \{x[n]\}$ has spectrum $W(e^{j\omega}) = X(e^{j\omega/L})$.
$Y(z) = H(z) W(z)$.
Let $H(z) = \sum_{k=0}^{L-1} z^{-k} H_k(z^L)$.
$Y(z) = \sum_{k=0}^{L-1} z^{-k} H_k(z^L) X(z)$. This is incorrect.

Correct polyphase interpolator structure:
1.  Decompose the filter $H(z)$ into $L$ polyphase components $H_k(z)$.
2.  For each $k \in \{0, 1, \dots, L-1\}$:
    *   Take the input signal $x[n]$.
    *   Filter $x[n]$ with $H_k(z)$. Let the output be $v_k[n]$.
3.  Combine the outputs: $y[n] = \sum_{k=0}^{L-1} v_k[n-k]$.

This structure filters the input signal at the original sampling rate $F_s$. Each polyphase filter $H_k(z)$ operates at $F_s$. The overall number of multiplications per input sample is $L \times (K/L) = K$.
However, the advantage comes in hardware implementation or if further processing is done at the higher rate.
The key idea here is that the $L$ polyphase filters $H_k(z)$ operating in parallel at the original rate $F_s$ are simpler (shorter) than the single filter $H(z)$ operating on the upsampled signal.

Let's consider the operations:
For each output sample $y[n]$:
$y[n] = \sum_{k=0}^{L-1} v_k[n-k]$
where $v_k[n] = H_k(z) * x[n]$.

The number of multiplications per input sample $x[n]$ is $K$.
The operations $H_k(z) * x[n]$ are performed in parallel for $k=0, \dots, L-1$. Each $H_k(z)$ has length $K/L$.
Total multiplications for the $L$ filters: $L \times (K/L) = K$.
Then these results are shifted and added.

**Computational Advantage:**
The advantage of polyphase for interpolation is realized by performing the filtering at the lower rate.
Consider the structure:
1.  Decompose $x[n]$ into $L$ polyphase sequences: $x_k[n] = x[nL+k]$. These are $L$ sequences, each at a sampling rate $F_s/L$.
2.  Filter each $x_k[n]$ with $H_k(z)$, resulting in $v_k[n]$. These filters operate at $F_s/L$.
3.  Combine the outputs: $y[n] = \sum_{k=0}^{L-1} v_k[n]$.

This is the correct and efficient polyphase structure for interpolation.
Each $H_k(z)$ has length $K/L$.
The operations are performed on $L$ parallel streams, each at $F_s/L$.
Total multiplications per $L$ input samples: $L \times (K/L) = K$.
Total multiplications per input sample (at $F_s$): $K/L$.
Total multiplications per output sample (at $LF_s$): $K/L$.

This is a significant saving compared to the direct method, which would effectively perform $K$ multiplications for every $L$ input samples, if done optimally. But a naive implementation of filtering after zero-insertion would be $K \times L$ operations per $L$ input samples, which is very inefficient.

**Referenced Concept (Lathi, Chapter 10: Digital Filter Design):** Polyphase decomposition is a fundamental tool in filter bank design and multirate systems. It allows us to restructure filter operations to achieve significant computational savings by mapping filter operations to parallel processing or operations at reduced sampling rates.

---

### 7. Computational Complexity Comparison

| Operation       | Method                        | Multiplications per Output Sample | Additions per Output Sample | Overall Complexity (approx.) |
| :-------------- | :---------------------------- | :------------------------------ | :-------------------------- | :--------------------------- |
| **Decimation**  | Direct (Filter then DS)       | $K$                             | $K-1$                       | $O(K)$                       |
|                 | Polyphase Filter Bank         | $K/M$                           | $(K/M) \times M \approx K$  | $O(K/M)$                     |
| **Interpolation** | Direct (Zero-insert then Filter) | $K \times L$ (inefficient)      | $(K \times L - 1) \times L$ | $O(KL)$ (inefficient)        |
|                 | Polyphase Filter Bank         | $K/L$                           | $(K/L) \times L \approx K$  | $O(K/L)$                     |

**Note on Additions:** The number of additions is typically one less than the number of multiplications for FIR filters. The polyphase structures also involve combining the outputs, which adds some overhead in terms of additions, but this is generally less dominant than the reduction in multiplications.

**Example:** Decimate by $M=4$ using a FIR filter of length $K=100$.
*   Direct: 100 mult/output, 99 add/output.
*   Polyphase: $100/4 = 25$ mult/output, $(25 \times 4 - 1) \approx 99$ add/output (total across branches).

**Example:** Interpolate by $L=4$ using a FIR filter of length $K=100$.
*   Direct (naive): $100 \times 4 = 400$ mult/output, $(400-1) \times 4 \approx 1596$ add/output. (This is a very rough estimate as filtering a sparse signal is complex).
*   Polyphase: $100/4 = 25$ mult/output, $(25 \times 4 - 1) \approx 99$ add/output (total across branches).

**Important Point:** The polyphase approach restructures the computation. For decimation, it breaks down a large filter operating at a high rate into smaller filters operating at a lower rate. For interpolation, it breaks down a large filter operating on a sparse (zero-filled) signal into smaller filters operating at the original rate.

---

### 8. Practice Questions and Exercises

**Question 1:**
A signal $x[n]$ is sampled at $F_s = 48$ kHz. We need to decimate this signal by $M=3$. The original signal contains frequency components up to 15 kHz.
a) What is the new sampling rate after decimation?
b) What is the maximum frequency that can be present in the signal *before* decimation to avoid aliasing?
c) Describe the role of an anti-aliasing filter and specify its cutoff frequency.

**Answer 1:**
a) New sampling rate $F_s' = F_s / M = 48 \text{ kHz} / 3 = 16$ kHz.
b) To avoid aliasing, the new Nyquist frequency at 16 kHz must be at least twice the maximum frequency. So, max frequency $\le F_s' / 2 = 16 \text{ kHz} / 2 = 8$ kHz.
c) An anti-aliasing filter is a low-pass filter applied *before* decimation. Its purpose is to remove frequency components above $F_s/(2M)$ to prevent them from folding back into the desired frequency band and causing aliasing. The cutoff frequency should be at or below $F_s/(2M) = 8$ kHz.

**Question 2:**
A signal $x[n]$ is sampled at $F_s = 8$ kHz. We need to interpolate this signal by $L=4$.
a) What is the new sampling rate after interpolation?
b) What are the spectral images produced by simple upsampling?
c) Describe the role of an anti-imaging filter and specify its cutoff frequency.

**Answer 2:**
a) New sampling rate $F_s' = F_s \times L = 8 \text{ kHz} \times 4 = 32$ kHz.
b) Simple upsampling by $L$ replicates the original spectrum $X(e^{j\omega})$ at frequencies $\omega = 2\pi k/L$ for $k = \pm 1, \pm 2, \dots$. These are spectral images.
c) An anti-imaging filter is a low-pass filter applied *after* upsampling. Its purpose is to remove the unwanted spectral images, leaving only the baseband replica of the original signal's spectrum, thereby reconstructing a signal that could have been sampled at the higher rate. The cutoff frequency should be at or below $\pi/L$ radians per sample, corresponding to $F_s'/2$ in the original sampling rate. This is $F_s/2 = 8 \text{ kHz} / 2 = 4$ kHz.

**Question 3:**
Consider a FIR filter $H(z)$ of length $K=64$ used for decimation by $M=4$.
a) How many multiplications per input sample are required for a direct implementation?
b) If $H(z)$ is decomposed into a polyphase filter bank, how many polyphase filters are there? What is the approximate length of each polyphase filter?
c) How many multiplications per input sample (at the original rate) are required for the polyphase implementation? How many multiplications per output sample (at the decimated rate) are required?

**Answer 3:**
a) Direct implementation requires $K = 64$ multiplications per input sample.
b) For decimation by $M=4$, there are $M=4$ polyphase filters. The length of each polyphase filter is approximately $K/M = 64/4 = 16$.
c) For the polyphase implementation, the total number of multiplications per input sample (at the original rate) is $M \times (K/M) = 4 \times 16 = 64$. However, these operations are distributed across parallel branches operating at a lower rate. The number of multiplications per output sample (at the decimated rate $F_s/M$) is $(M \times K/M) / M = K/M = 64/4 = 16$ multiplications per output sample.

**Question 4:**
Explain why polyphase decomposition is particularly beneficial for interpolation filters compared to a direct implementation of filtering after zero-insertion.

**Answer 4:**
Directly filtering a signal after zero-insertion (upsampling) is computationally very inefficient. For a filter of length $K$ and an interpolation factor $L$, the upsampled signal has $L-1$ zeros for every original sample. A direct FIR filtering operation on this sparse signal would involve approximately $K \times L$ multiplications per $L$ original samples, as the filter's impulse response is effectively convolved with many zeros.

Polyphase decomposition restructures the interpolation filter $H(z)$ into $L$ shorter polyphase filters $H_k(z)$, each of length $K/L$. The input signal $x[n]$ is then decomposed into $L$ parallel streams (e.g., $x_k[n] = x[nL+k]$). Each stream is filtered by its corresponding $H_k(z)$ at the original sampling rate $F_s$. This approach drastically reduces the computational load. Instead of one large filter operating on a sparse signal, we have $L$ smaller filters operating on the original signal. The total number of multiplications per input sample becomes $K/L$, which is a significant saving.

---

### 9. Important Points to Remember

*   **Decimation:** Reduces sampling rate by $M$. Requires an **anti-aliasing filter** *before* downsampling to prevent spectral folding.
*   **Interpolation:** Increases sampling rate by $L$. Requires an **anti-imaging filter** *after* upsampling to remove spectral replicas.
*   **Aliasing:** Occurs in decimation when frequencies above $F_s/(2M)$ are present.
*   **Imaging:** Occurs in interpolation when spectral copies created by upsampling overlap.
*   **CIC Filters:** Computationally efficient for multirate operations as they avoid multipliers, using only delays and adders/subtractors. Their frequency response is sinc-like.
*   **Polyphase Decomposition:** A fundamental technique to improve the efficiency of multirate filters. It decomposes a filter into smaller parallel filters operating at reduced sampling rates (for decimation) or in parallel at the original rate (for interpolation), leading to significant computational savings.
*   **Computational Complexity:** Polyphase structures reduce the number of multiplications per output sample by a factor of $M$ for decimation and $L$ for interpolation, compared to naive direct implementations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 10. References

*   **Oppenheim, A. V., & Willsky, A. S. (2015). *Signals and Systems* (2nd ed.). Pearson Education.** (Provides foundational concepts on sampling, aliasing, and introduction to multirate systems.)
*   **Haykin, S. (2021). *Signals and Systems* (2nd ed.). John Wiley.** (Offers comprehensive coverage of signal processing techniques, including multirate systems.)
*   **Lathi, B. P. (2009). *Principles of Signal Processing & Linear systems* (2nd ed.). Oxford University Press.** (Discusses digital filter design and multirate systems, likely touching upon polyphase decomposition.)
*   **Ambardar, A. (2013). *Analog and Digital Signal Processing* (2nd ed.). Brooks/Cole Publishing Company.** (Likely includes practical aspects and implementations of digital filters and multirate techniques.)

This comprehensive set of notes covers the core concepts of efficient structures for decimation and interpolation filters, their theoretical underpinnings, implementation strategies like polyphase decomposition, and practical considerations.