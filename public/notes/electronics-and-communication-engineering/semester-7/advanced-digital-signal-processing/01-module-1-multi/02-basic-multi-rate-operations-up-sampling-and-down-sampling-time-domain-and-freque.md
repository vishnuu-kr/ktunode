---
title: "Basic multi-rate operations: up sampling and down sampling , time domain and frequency domain analysis"
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 1: Multi"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff267"
status: "completed"
scrapedAt: "2026-05-23T18:04:00.504Z"
---
# ADVANCED DIGITAL SIGNAL PROCESSING

## Module 1: Multirate Digital Signal Processing

### Topic: Basic Multirate Operations: Upsampling and Downsampling

This module introduces the fundamental operations of upsampling and downsampling, which are crucial for changing the sampling rate of discrete-time signals. We will explore their time-domain and frequency-domain effects, understand potential aliasing issues, and learn how to mitigate them using filtering.

---

### 1. Introduction to Multirate Signal Processing

Multirate digital signal processing (DSP) deals with the processing of signals that are sampled at different rates. This is essential in various applications, including:

*   **Digital-to-Analog Conversion (DAC) and Analog-to-Digital Conversion (ADC):** Upsampling is used to increase the sampling rate before DAC, and downsampling is used to decrease the sampling rate after ADC.
*   **Communication Systems:** Different parts of a communication system may operate at different sampling rates.
*   **Image Processing:** Resizing images involves changing the sampling rate of the pixel data.
*   **Data Compression:** Reducing the sampling rate can lead to data compression.
*   **Efficient Filter Implementation:** Sometimes, operations at a lower sampling rate can significantly reduce computational complexity.

---

### 2. Upsampling (Decimation)

Upsampling, also known as **interpolation**, is the process of increasing the sampling rate of a discrete-time signal.

#### 2.1. Definition and Operation

Given a discrete-time signal $x[n]$ sampled at a rate $f_s$, upsampling by an integer factor $M$ produces a new signal $y[k]$ sampled at a rate $Mf_s$.

The process involves inserting $M-1$ zeros between consecutive samples of the original signal $x[n]$.

The relationship between the output signal $y[k]$ and the input signal $x[n]$ is given by:

$y[k] = \begin{cases} x[k/M] & \text{if } k \text{ is a multiple of } M \\ 0 & \text{if } k \text{ is not a multiple of } M \end{cases}$

This can be expressed using the Kronecker delta function:

$y[k] = x[k/M] \delta(k \pmod M)$

**Alternatively, and perhaps more intuitively, we can define the operation using an upsampling operator, denoted by $\uparrow M$:**

$y[k] = x[n] \uparrow M$

where $y[k]$ is defined as:

$y[k] = \begin{cases} x[k/M] & \text{if } k \text{ is an integer multiple of } M \\ 0 & \text{otherwise} \end{cases}$

**Example:**
Let $x[n] = \{1, 2, 3, 4\}$ and $M=2$.
Upsampling $x[n]$ by 2 means inserting $2-1=1$ zero between samples.
$y[k] = \{1, 0, 2, 0, 3, 0, 4, 0\}$

#### 2.2. Time Domain Analysis

*   **Increased Sample Density:** Upsampling increases the number of samples per unit time.
*   **Zero-Padding:** The process inherently inserts zeros, which are placeholders and do not represent actual signal information in the original bandwidth.
*   **Bandwidth Expansion:** The zero-padding in the time domain effectively "stretches" the spectrum of the signal, leading to an expansion of its bandwidth.

#### 2.3. Frequency Domain Analysis

Let $X(\omega)$ be the Discrete-Time Fourier Transform (DTFT) of $x[n]$.

When we upsample $x[n]$ by $M$, we are essentially multiplying $x[n]$ by a sequence of impulses spaced by $M$: $p[n] = \sum_{l=-\infty}^{\infty} \delta[n-lM]$.

So, $y[n] = x[n] p[n] = x[n] \sum_{l=-\infty}^{\infty} \delta[n-lM]$.
This is equivalent to $y[n] = x[n]$ at samples $n=0, \pm M, \pm 2M, \dots$ and zero elsewhere.

The DTFT of $y[n]$, denoted by $Y(\omega)$, is related to $X(\omega)$ by:

$Y(\omega) = X(M\omega)$

This means that the spectrum of the upsampled signal is a compressed version of the original signal's spectrum, repeated periodically over the new frequency range $[-\pi, \pi]$. The original spectrum $X(\omega)$ which occupied the range $[-\pi/M, \pi/M]$ (assuming $X(\omega)=0$ for $|\omega| > \pi/M$) is now "stretched" and appears $M$ times in the range $[-\pi, \pi]$.

**Key Observation:** The upsampling operation itself does *not* fill in the new samples with actual signal information. The inserted zeros are just placeholders. To reconstruct a signal with a higher sampling rate that represents the original analog signal more accurately, we need to interpolate.

**Interpolation Filter:** To obtain a smooth signal that represents the analog signal sampled at $Mf_s$, we pass the zero-padded signal through a **low-pass interpolation filter** with a cutoff frequency of $\pi/M$.

Let $H(\omega)$ be the frequency response of the interpolation filter. The output of the interpolation system is:

$y_{interp}[n] = (\text{upsample } x[n] \text{ by } M) * h[n]$

The DTFT of the interpolated signal is:

$Y_{interp}(\omega) = X(M\omega) H(M\omega)$

For ideal interpolation, we want $Y_{interp}(\omega)$ to represent the DTFT of the original analog signal sampled at the new rate. If the original signal $x[n]$ was obtained by sampling an analog signal $x_a(t)$ with sampling frequency $f_s$, then the upsampled signal $y[k]$ effectively represents the analog signal $x_a(kT/M)$, where $T=1/f_s$. The DTFT of the original analog signal is $X_a(\Omega)$. The DTFT of $x[n]$ is $X(\omega) = X_a(\omega/T)$ for $|\omega| \leq \pi$.

If we upsample by $M$, the new sampling period is $T/M$. The DTFT of the upsampled signal $y[k]$ is $Y(\omega) = X(M\omega)$. If $X(\omega)=0$ for $|\omega| > \pi/M$, then $X(M\omega)$ is non-zero for $|\omega| > \pi/M$. The operation $y[k] = x[n] \uparrow M$ replicates the original spectrum $X(\omega)$ in the interval $[-\pi, \pi]$.

The ideal interpolation filter should have a frequency response $H_{ideal}(\omega)$ such that:

$Y_{interp}(\omega) = X_{ideal\_analog\_spectrum}(\omega)$

If $x[n]$ is obtained by sampling $x_a(t)$ at $f_s$, then $X(\omega) = X_a(\omega/T)$ for $|\omega| \leq \pi$.
The upsampled signal $y[k]$ has samples of $x_a(t)$ at $t = k T/M$.
The DTFT of $y[k]$ is $Y(\omega) = X(M\omega)$. This spectrum is periodic with period $2\pi$. The original spectrum $X(\omega)$ is contained within $[-\pi/M, \pi/M]$. The operation $Y(\omega) = X(M\omega)$ means the spectrum $X(\omega)$ for $|\omega| \leq \pi/M$ is mapped to $|\omega| \leq \pi$. The entire frequency range $[-\pi, \pi]$ of $Y(\omega)$ will contain copies of $X(M\omega)$.

The ideal interpolation filter should be a low-pass filter with a cutoff frequency of $\pi/M$ and a gain of $M$ in the passband.

$H_{ideal}(\omega) = \begin{cases} M & |\omega| \leq \pi/M \\ 0 & \pi/M < |\omega| \leq \pi \end{cases}$

The impulse response of this ideal filter is $h_{ideal}[n] = M \frac{\sin(\pi n/M)}{\pi n}$. This is an infinite-length non-causal filter. In practice, we use a finite-length approximation of this filter.

**Problem with Upsampling without Filtering:** If the original signal $x[n]$ has a spectrum that extends beyond $|\omega| = \pi/M$, then after upsampling, these components will be aliased into the new frequency range $[-\pi, \pi]$ due to the repetition of the spectrum.

**Example:**
Let $x[n] = \cos(\frac{\pi}{2} n)$. The DTFT of $x[n]$ is concentrated around $\omega = \pm \pi/2$.
If we upsample by $M=2$, $y[k] = \{1, 0, -1, 0, 1, 0, -1, 0, \dots \}$.
The DTFT of $y[k]$ is $Y(\omega) = X(2\omega)$. The original spectrum was at $\pm \pi/2$. After upsampling, the spectrum is at $\pm \pi$. This is fine if the original signal was bandlimited to $\pi/M$.

Now consider $x[n] = \cos(\frac{3\pi}{4} n)$. The DTFT is at $\pm 3\pi/4$.
If we upsample by $M=2$, the new frequency components would ideally be at $\pm 3\pi/2$. However, the DTFT of $y[k]$ is $Y(\omega) = X(2\omega)$.
The original spectrum $X(\omega)$ for $|\omega| \leq \pi$ is mapped to $X(M\omega)$ for $|\omega| \leq \pi$.
The frequency $3\pi/4$ in $X(\omega)$ is mapped to $3\pi/4$ in $Y(\omega)$.
However, the range of non-zero frequencies for $X(\omega)$ is assumed to be $[-\pi/M, \pi/M]$. If $X(\omega)$ is non-zero for $|\omega| > \pi/M$, it gets repeated.
The spectral content at $\omega = 3\pi/4$ in $X(\omega)$ means $X(2\omega)$ will be non-zero at $2 \times (3\pi/4) = 3\pi/2$. This frequency is outside the baseband $[-\pi, \pi]$. Due to periodicity of $Y(\omega)$, $X(2\omega)$ is equal to $X(2\omega - 2\pi)$ for frequencies in $[-\pi, \pi]$.
So $X(3\pi/2)$ becomes $X(3\pi/2 - 2\pi) = X(-\pi/2)$. This means the original frequency component at $3\pi/4$ in $x[n]$ will appear as a component at $-\pi/2$ in the upsampled signal's frequency domain representation. This is aliasing.

**To avoid aliasing, the original signal $x[n]$ must be bandlimited to $|\omega| \leq \pi/M$.** This is usually achieved by a digital low-pass filter before upsampling if the original signal is from a digital source. If the original signal is analog and sampled at $f_s$, it must be bandlimited to $f_s/2$ before ADC. Then after digital processing, it might be upsampled.

---

### 3. Downsampling (Decimation)

Downsampling, also known as **decimation**, is the process of reducing the sampling rate of a discrete-time signal.

#### 3.1. Definition and Operation

Given a discrete-time signal $x[n]$ sampled at a rate $f_s$, downsampling by an integer factor $L$ produces a new signal $y[k]$ sampled at a rate $f_s/L$.

The process involves discarding $L-1$ out of every $L$ samples of the original signal $x[n]$.

The relationship between the output signal $y[k]$ and the input signal $x[n]$ is given by:

$y[k] = x[kL]$

This can be expressed using a downsampling operator, denoted by $\downarrow L$:

$y[k] = x[n] \downarrow L$

where $y[k]$ is defined as:

$y[k] = x[kL]$

**Example:**
Let $x[n] = \{1, 2, 3, 4, 5, 6, 7, 8\}$ and $L=2$.
Downsampling $x[n]$ by 2 means keeping every second sample.
$y[k] = \{1, 3, 5, 7\}$ (Here, $y[0]=x[0]$, $y[1]=x[2]$, $y[2]=x[4]$, etc.)

#### 3.2. Time Domain Analysis

*   **Decreased Sample Density:** Downsampling reduces the number of samples per unit time.
*   **Information Loss (Potentially):** If not done carefully, downsampling can lead to loss of information due to aliasing.

#### 3.3. Frequency Domain Analysis

Let $X(\omega)$ be the DTFT of $x[n]$.

When we downsample $x[n]$ by $L$, the DTFT of the output signal $y[k]$, denoted by $Y(\omega)$, is related to $X(\omega)$ by:

$Y(\omega) = \frac{1}{L} \sum_{i=0}^{L-1} X\left(\frac{\omega - 2\pi i}{L}\right)$

This means that the spectrum of the downsampled signal is obtained by folding or aliasing the original spectrum. The original spectrum $X(\omega)$ is compressed by a factor of $L$, and the portions of the spectrum outside the new baseband $[-\pi/L, \pi/L]$ are folded back into this band.

**The Critical Problem: Aliasing**

If the original signal $x[n]$ has spectral content beyond $|\omega| = \pi/L$, downsampling without filtering will cause these higher frequencies to fold into the baseband $[-\pi/L, \pi/L]$ and become indistinguishable from the lower frequencies. This is **aliasing**.

**Example:**
Let $x[n] = \cos(\frac{3\pi}{4} n)$. The DTFT is at $\pm 3\pi/4$.
If we downsample by $L=2$, the original samples are $x[0]=1, x[1]=\cos(3\pi/4), x[2]=-1, x[3]=\cos(9\pi/4), \dots$
The downsampled signal is $y[k] = x[2k]$.
$y[0] = x[0] = 1$
$y[1] = x[2] = -1$
$y[2] = x[4] = 1$
$y[3] = x[6] = -1$
So, $y[k] = (-1)^k = \cos(\pi k)$. The frequency of $y[k]$ is $\pi$.

Let's check the formula $Y(\omega) = \frac{1}{L} \sum_{i=0}^{L-1} X\left(\frac{\omega - 2\pi i}{L}\right)$ with $L=2$.
$Y(\omega) = \frac{1}{2} \left[ X\left(\frac{\omega}{2}\right) + X\left(\frac{\omega - 2\pi}{2}\right) \right] = \frac{1}{2} \left[ X\left(\frac{\omega}{2}\right) + X\left(\frac{\omega}{2} - \pi\right) \right]$

The original signal $x[n] = \cos(\frac{3\pi}{4} n)$ has a DTFT $X(\omega)$ with impulses at $\pm 3\pi/4$.
Consider the term $X(\omega/2)$. This will have impulses at $\omega/2 = \pm 3\pi/4$, so $\omega = \pm 3\pi/2$.
Consider the term $X(\omega/2 - \pi)$. This will have impulses at $\omega/2 - \pi = \pm 3\pi/4$.
$\omega/2 = \pi \pm 3\pi/4$
$\omega/2 = 7\pi/4 \implies \omega = 7\pi/2$
$\omega/2 = \pi/4 \implies \omega = \pi/2$

So, $Y(\omega)$ will have components related to impulses at $\pm 3\pi/2$ and $\pm \pi/2$.
Due to periodicity of $Y(\omega)$, $\pm 3\pi/2$ is equivalent to $\mp \pi/2$.
Thus, $Y(\omega)$ will have components at $\pm \pi/2$.

The output signal $y[k] = (-1)^k$ has a DTFT $Y(\omega)$ with impulses at $\pm \pi$.
Wait, my example calculation of $y[k]$ was $y[k]=(-1)^k$. The DTFT of $y[k] = (-1)^k = e^{j\pi k}$ is a pair of impulses at $\omega = \pm \pi$.

Let's re-evaluate the example $x[n] = \cos(\frac{3\pi}{4} n)$.
$x[0] = \cos(0) = 1$
$x[1] = \cos(3\pi/4) = -\frac{\sqrt{2}}{2}$
$x[2] = \cos(6\pi/4) = \cos(3\pi/2) = 0$
$x[3] = \cos(9\pi/4) = \cos(\pi/4) = \frac{\sqrt{2}}{2}$
$x[4] = \cos(12\pi/4) = \cos(3\pi) = -1$
$x[5] = \cos(15\pi/4) = \cos(-\pi/4) = \frac{\sqrt{2}}{2}$
$x[6] = \cos(18\pi/4) = \cos(9\pi/2) = \cos(\pi/2) = 0$
$x[7] = \cos(21\pi/4) = \cos(5\pi/4) = -\frac{\sqrt{2}}{2}$

Downsampling by $L=2$: $y[k] = x[2k]$
$y[0] = x[0] = 1$
$y[1] = x[2] = 0$
$y[2] = x[4] = -1$
$y[3] = x[6] = 0$
$y[4] = x[8] = \cos(24\pi/4) = \cos(6\pi) = 1$
So, $y[k] = \{1, 0, -1, 0, 1, 0, -1, 0, \dots \} = \cos(\pi k)$.

The DTFT of $y[k] = \cos(\pi k)$ is impulses at $\omega = \pm \pi$.

Now, let's examine the frequency domain formula for $Y(\omega)$ with $X(\omega)$ having impulses at $\pm 3\pi/4$.
$Y(\omega) = \frac{1}{2} \left[ X\left(\frac{\omega}{2}\right) + X\left(\frac{\omega}{2} - \pi\right) \right]$

The term $X(\omega/2)$ has impulses at $\omega/2 = \pm 3\pi/4 \implies \omega = \pm 3\pi/2$.
The term $X(\omega/2 - \pi)$ has impulses at $\omega/2 - \pi = \pm 3\pi/4$.
$\omega/2 = \pi \pm 3\pi/4 \implies \omega/2 = 7\pi/4, \pi/4$.
So, $\omega = 7\pi/2, \pi/2$.

The impulses are at $\pm 3\pi/2$ and $\pm \pi/2$.
Due to periodicity of $Y(\omega)$ with period $2\pi$:
$\pm 3\pi/2 \equiv \mp \pi/2 \pmod{2\pi}$.
So, the effective impulses are at $\pm \pi/2$.

This means that the downsampled signal $y[k]$ would have spectral content at $\pm \pi/2$. But we calculated $y[k] = \cos(\pi k)$, which has spectral content at $\pm \pi$.

There's a misunderstanding in my interpretation or example calculation. Let's use a simpler example for downsampling.

**Corrected Example for Downsampling:**
Let $x[n] = \{1, 2, 3, 4, 5, 6, 7, 8\}$ and $L=2$.
$y[k] = x[2k] = \{1, 3, 5, 7\}$.
Let's assume $x[n]$ is from a continuous-time signal $x_a(t)$ sampled at $f_s$.
If $f_s=8$ kHz, then $x[n]$ is sampled every $T=1/8$ ms.
$x[n]$ corresponds to $x_a(nT)$.
$y[k]$ is sampled at $k(2T)$. The sampling frequency is $f_s/L = 8/2 = 4$ kHz.

Consider the frequency content of $x[n]$. If $x[n]$ contains frequencies up to $f_s/2 = 4$ kHz, then when we downsample by $L=2$ (to 4 kHz), any frequency component between 2 kHz and 4 kHz in $x[n]$ will be aliased into the frequency range 0 to 2 kHz of $y[k]$.

**The Anti-Aliasing Filter:** To prevent aliasing, we must filter the signal $x[n]$ using a **low-pass filter** with a cutoff frequency of $\pi/L$ *before* downsampling.

Let $H(\omega)$ be the frequency response of the anti-aliasing filter. The downsampling system is:

$y[n] = (\text{low-pass filter } x[n] \text{ with cutoff } \pi/L) \downarrow L$

The DTFT of the filtered signal is $X_{filtered}(\omega) = X(\omega) H(\omega)$.
The DTFT of the downsampled output is:

$Y(\omega) = \frac{1}{L} \sum_{i=0}^{L-1} X_{filtered}\left(\frac{\omega - 2\pi i}{L}\right) = \frac{1}{L} \sum_{i=0}^{L-1} X\left(\frac{\omega - 2\pi i}{L}\right) H\left(\frac{\omega - 2\pi i}{L}\right)$

If the filter $H(\omega)$ is an ideal low-pass filter with cutoff $\pi/L$ and gain 1:
$H(\omega) = \begin{cases} 1 & |\omega| \leq \pi/L \\ 0 & \pi/L < |\omega| \leq \pi \end{cases}$

Then, in the sum:
For $i=0$, we have $X(\omega/L) H(\omega/L)$. If $|\omega| \leq \pi$, then $|\omega/L| \leq \pi/L$. So, $H(\omega/L)=1$. This term becomes $X(\omega/L)$.
For $i \neq 0$, the term $X\left(\frac{\omega - 2\pi i}{L}\right)$ corresponds to frequencies outside the baseband of $X(\omega)$. For example, when $i=1$, we have $X(\frac{\omega}{L} - \pi)$. The argument $\frac{\omega}{L} - \pi$ covers a range of frequencies. The filter $H(\frac{\omega - 2\pi i}{L})$ will be zero for these terms if they fall outside the passband of $H$.
Specifically, for $i \neq 0$, the argument $\frac{\omega - 2\pi i}{L}$ will fall outside $[-\pi/L, \pi/L]$ for all $\omega$ in $[-\pi, \pi]$. Thus, $H\left(\frac{\omega - 2\pi i}{L}\right)=0$ for $i \neq 0$.

So, with an ideal anti-aliasing filter, the output DTFT becomes:

$Y(\omega) = \frac{1}{L} X\left(\frac{\omega}{L}\right)$ for $|\omega| \leq \pi$

This correctly represents the spectrum of a signal whose original continuous-time version was sampled at $f_s/L$.

**Textbook References:**
*   **Oppenheim & Willsky:** Chapter 7 (Multirate Signal Processing) will have detailed explanations and derivations for upsampling and downsampling, including frequency domain analysis and aliasing. They emphasize the use of filters.
*   **Haykin:** Likely covers similar concepts in chapters related to discrete-time signal processing and sampling.

---

### 4. Combined Operations: Upsampling and Downsampling

Multirate systems often involve combinations of upsampling and downsampling.

#### 4.1. Interpolation System (Upsampling followed by Filtering)

As discussed in Section 2.3, an interpolation system increases the sampling rate by inserting zeros and then filtering.

System: $x[n] \rightarrow \text{Upsample by } M \rightarrow \text{Low-pass Filter } H(\omega) \rightarrow y[n]$

This system effectively reconstructs a higher-rate version of the original signal, assuming the original signal was bandlimited to $\pi/M$.

#### 4.2. Decimation System (Filtering followed by Downsampling)

As discussed in Section 3.3, a decimation system reduces the sampling rate by filtering first and then discarding samples.

System: $x[n] \rightarrow \text{Low-pass Filter } H(\omega) \rightarrow \text{Downsample by } L \rightarrow y[n]$

This system reduces the sampling rate while preserving the signal's information content within the new Nyquist frequency $(\pi/L)$.

#### 4.3. Upsampling then Downsampling (Rate Reduction by a Factor $K = M/L$)

If we upsample by $M$ and then downsample by $L$, where $K = M/L$ is the overall rate change factor, the order of operations can matter if $M$ and $L$ are not coprime.

**Case 1: $M$ and $L$ are coprime.**
$x[n] \rightarrow \uparrow M \rightarrow \text{Filter } H_1 \rightarrow \downarrow L \rightarrow y[n]$
The effective rate change is by $M/L$.
The order of operations can be swapped:
$x[n] \rightarrow \downarrow L \rightarrow \text{Filter } H_2 \rightarrow \uparrow M \rightarrow y[n]$
However, the filters $H_1$ and $H_2$ will be different.

**Case 2: $M$ and $L$ are not coprime.**
Let $M=6, L=2$. The rate change is by 3.
If we do $x[n] \uparrow 6 \downarrow 2$, it's equivalent to $x[n] \uparrow 3$.
If we do $x[n] \downarrow 2 \uparrow 6$, it's equivalent to $x[n] \uparrow 3$.
However, the filtering requirements are different.

**The Polyphase Representation:**
A more advanced analysis uses polyphase decomposition to show that if $M$ and $L$ are coprime, then:
$x[n] \uparrow M \downarrow L \equiv x[n] \downarrow L \uparrow M$
(The order of sampling rate changes can be swapped).

However, this equality does not hold for the filters. The choice of filter in the upsampling-downsampling chain will depend on the desired output.

**Important Theorem:** If $\gcd(M, L) = d$, then a rate change by $M/L$ can be decomposed into a rate increase by $M/d$ and a rate decrease by $L/d$.
If we upsample by $M$ and then downsample by $L$, the combined system is equivalent to downsampling by $L/\gcd(M,L)$ and upsampling by $M/\gcd(M,L)$.

A crucial result for efficient implementation is that if $M$ and $L$ are coprime, the system
$x[n] \rightarrow \uparrow M \rightarrow H_{interp} \rightarrow \downarrow L \rightarrow y[n]$
is equivalent to
$x[n] \rightarrow \text{Polyphase Components } x_m[n] \rightarrow \text{ Filtered Polyphase Components} \rightarrow \text{Recombine} \rightarrow y[n]$

And also, the system
$x[n] \rightarrow H_{anti-alias} \rightarrow \downarrow L \rightarrow \uparrow M \rightarrow y[n]$
is equivalent to
$x[n] \rightarrow \text{Polyphase Components } x_m[n] \rightarrow \text{ Filtered Polyphase Components} \rightarrow \text{Recombine} \rightarrow y[n]$

The filters used in each case are related to the polyphase components of the original interpolation/decimation filters.

---

### 5. Practical Considerations and Design

*   **Filter Design:** In practice, ideal filters are not realizable. We use FIR or IIR filters that approximate the ideal frequency response. The choice of filter length/order affects the trade-off between performance (e.g., stopband attenuation, transition band width) and computational complexity.
*   **Computational Efficiency:** Combining upsampling and downsampling operations can lead to significant computational savings. For example, when upsampling by $M$ and then downsampling by $L$, if $M>L$, it's often more efficient to filter first at the lower rate.
*   **Cascading of Operations:** Multirate operations can be cascaded, e.g., downsampling followed by upsampling. The analysis of such cascaded systems is important for understanding the overall system behavior.

---

### 6. Alignment with Course Outcomes

*   **CO1: Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals.**
    *   This topic directly deals with basic operations (upsampling, downsampling) on discrete-time signals. Understanding how these operations change the sampling rate and sample density is key.
*   **CO3: Analyze signals in frequency domain using Laplace, Fourier and z-transforms and examine the properties of transforms.**
    *   The core of this topic is understanding the frequency domain effects of upsampling ($Y(\omega) = X(M\omega)$) and downsampling ($Y(\omega) = \frac{1}{L} \sum X(\frac{\omega - 2\pi i}{L})$). This involves analyzing how the DTFT of a signal changes.
*   **CO4: Interpret the use of various transforms to analyze continuous and discrete time LTI systems.**
    *   The analysis of multirate systems relies heavily on the DTFT to understand system behavior, especially concerning aliasing and the impact of filtering.

---

### 7. Key Points to Remember

*   **Upsampling by M:** Inserts $M-1$ zeros between samples. Effectively multiplies the sampling frequency by $M$.
*   **Upsampling Frequency Domain:** $Y(\omega) = X(M\omega)$. The spectrum is compressed and repeated. Requires an interpolation filter (low-pass with cutoff $\pi/M$ and gain $M$) to reconstruct the signal properly.
*   **Downsampling by L:** Discards $L-1$ out of $L$ samples. Effectively divides the sampling frequency by $L$.
*   **Downsampling Frequency Domain:** $Y(\omega) = \frac{1}{L} \sum_{i=0}^{L-1} X\left(\frac{\omega - 2\pi i}{L}\right)$. The spectrum is expanded and aliased.
*   **Aliasing:** Occurs during downsampling if the input signal is not bandlimited to $|\omega| \leq \pi/L$.
*   **Anti-Aliasing Filter:** A low-pass filter with cutoff frequency $\pi/L$ must be used *before* downsampling to prevent aliasing.
*   **Interpolation Filter:** A low-pass filter with cutoff frequency $\pi/M$ and gain $M$ is used *after* upsampling to reconstruct the signal.
*   **Order of Operations:** For coprime $M$ and $L$, the order of upsampling and downsampling can be swapped, but the associated filters change.

---

### 8. Practice Questions

**Question 1:**
Let $x[n] = \{1, 2, 3, 4, 5, 6\}$ be a discrete-time signal.
(a) What is the resulting signal $y[k]$ if $x[n]$ is upsampled by a factor of $M=3$?
(b) What is the resulting signal $y[k]$ if $x[n]$ is downsampled by a factor of $L=2$?

**Question 2:**
Consider a signal $x[n]$ whose DTFT $X(\omega)$ is non-zero only for $|\omega| \leq \pi/4$.
(a) If $x[n]$ is upsampled by $M=2$, what is the range of frequencies for which the DTFT of the upsampled signal $Y(\omega)$ is non-zero? Describe the spectral change.
(b) If $x[n]$ is downsampled by $L=3$, what is the range of frequencies for which the DTFT of the downsampled signal $Y(\omega)$ is non-zero, assuming no prior filtering? Describe the spectral change and the potential issue.

**Question 3:**
A discrete-time signal $x[n]$ has a DTFT $X(\omega)$ that is non-zero for $|\omega| \leq 2\pi/5$.
Design a system to change the sampling rate by a factor of $3/2$ (i.e., increase the sampling rate by 3 and then decrease it by 2). Specify the upsampling factor, downsampling factor, and the required filtering operations (type of filter and its cutoff frequency) to avoid aliasing and reconstruct the signal correctly.

---

### 9. Answers to Practice Questions

**Answer 1:**
(a) Upsampling $x[n]$ by $M=3$: Insert $3-1=2$ zeros between samples.
$y[k] = \{1, 0, 0, 2, 0, 0, 3, 0, 0, 4, 0, 0, 5, 0, 0, 6\}$

(b) Downsampling $x[n]$ by $L=2$: Keep every second sample.
$y[k] = \{1, 3, 5\}$ (Here $y[0]=x[0], y[1]=x[2], y[2]=x[4]$).

**Answer 2:**
(a) Original signal $x[n]$ has $X(\omega)$ non-zero for $|\omega| \leq \pi/4$.
Upsampling by $M=2$: The DTFT of the upsampled signal is $Y(\omega) = X(2\omega)$.
The new frequency range for non-zero $Y(\omega)$ is found by setting the argument of $X$ to be within its non-zero range:
$|\omega/2| \leq \pi/4 \implies |\omega| \leq \pi/2$.
The original spectrum has been compressed and scaled to fit within the new baseband of $[-\pi, \pi]$. The spectral content that was between $-\pi/4$ and $\pi/4$ is now between $-\pi/2$ and $\pi/2$.

(b) Original signal $x[n]$ has $X(\omega)$ non-zero for $|\omega| \leq \pi/4$.
Downsampling by $L=3$: The DTFT of the downsampled signal without filtering is $Y(\omega) = \frac{1}{3} \sum_{i=0}^{2} X\left(\frac{\omega - 2\pi i}{3}\right)$.
The term $X(\omega/3)$ has non-zero content for $|\omega/3| \leq \pi/4 \implies |\omega| \leq 3\pi/4$. This fits within the new baseband $[-\pi, \pi]$.
However, let's consider the range of $X$. The original signal is bandlimited to $\pi/4$. Downsampling by $L=3$ means the new Nyquist frequency is $\pi/3$. Since $\pi/4 < \pi/3$, no aliasing will occur if the signal is truly bandlimited to $\pi/4$.
The non-zero range for $Y(\omega)$ would be:
For $i=0$: $X(\omega/3)$ implies $|\omega/3| \leq \pi/4$, so $|\omega| \leq 3\pi/4$.
For $i=1$: $X((\omega - 2\pi)/3)$. The argument $(\omega - 2\pi)/3$ needs to be within $[-\pi/4, \pi/4]$.
$-\pi/4 \leq (\omega - 2\pi)/3 \leq \pi/4$
$-3\pi/4 \leq \omega - 2\pi \leq 3\pi/4$
$2\pi - 3\pi/4 \leq \omega \leq 2\pi + 3\pi/4$
$5\pi/4 \leq \omega \leq 11\pi/4$.
In the range $[-\pi, \pi]$, this folded component is negligible as it's outside.
For $i=2$: $X((\omega - 4\pi)/3)$. Similarly, this falls outside the baseband.

So, for $|\omega| \leq \pi$, the dominant term is $Y(\omega) = \frac{1}{3} X(\omega/3)$, with non-zero content up to $|\omega| \leq 3\pi/4$.

**Potential issue:** If the signal had spectral content between $\pi/4$ and $\pi/3$, downsampling by 3 would cause aliasing. Since the signal is bandlimited to $\pi/4$, aliasing is not an issue in this specific scenario.

**Answer 3:**
To change the sampling rate by a factor of $3/2$, we can upsample by $M=3$ and then downsample by $L=2$.

1.  **Upsampling by $M=3$:**
    *   Operation: Insert $3-1=2$ zeros between samples of $x[n]$.
    *   Effect: The sampling rate is multiplied by 3. The original spectrum $X(\omega)$ for $|\omega| \leq \pi$ is repeated $M$ times in the new baseband $[-\pi, \pi]$.
    *   Problem: If the original signal $x[n]$ had spectral content beyond $|\omega| \leq \pi/M$, this content would appear aliased.

2.  **Interpolation Filtering (after Upsampling):**
    *   To reconstruct the signal properly, we need to filter the zero-inserted signal.
    *   Filter Type: Low-pass interpolation filter.
    *   Cutoff Frequency: $\pi/M = \pi/3$.
    *   Gain: $M = 3$ in the passband.
    *   Purpose: This filter smooths the signal by interpolating the zero samples and removes the replicated spectral images from the upsampling process that fall outside the desired bandwidth. The output signal is now at a sampling rate $3f_s$, and its spectrum is effectively $3X(3\omega)$ (if $X(\omega)$ was bandlimited to $\pi/3$).

3.  **Downsampling by $L=2$:**
    *   Operation: Keep every second sample of the filtered signal.
    *   Effect: The sampling rate is divided by 2. The baseband of the spectrum is compressed from $[-\pi, \pi]$ to $[-\pi/L, \pi/L] = [-\pi/2, \pi/2]$.
    *   Problem: Aliasing will occur if the signal being downsampled (the output of the interpolation filter) has spectral content beyond $|\omega| \leq \pi/L = \pi/2$.

4.  **Anti-Aliasing Filtering (before Downsampling):**
    *   The signal entering the downsampler is the output of the interpolation filter, which has a sampling rate of $3f_s$. Its spectrum is now within $[-\pi, \pi]$.
    *   We need to ensure that this signal's spectrum is bandlimited to $|\omega| \leq \pi/L = \pi/2$ before downsampling.
    *   Filter Type: Low-pass anti-aliasing filter.
    *   Cutoff Frequency: $\pi/L = \pi/2$.
    *   Gain: 1 (typically, no gain is needed here as the rate change is compensated by the interpolation filter gain).
    *   Purpose: This filter removes any spectral components above $\pi/2$ that might have been present (or were created by the interpolation filter's non-ideal characteristics) to prevent aliasing during downsampling.

**Overall System:**
$x[n] \xrightarrow{\text{Upsample by 3}} \xrightarrow{\text{LPF, cutoff }\pi/3, \text{ gain } 3} \xrightarrow{\text{LPF, cutoff }\pi/2, \text{ gain } 1} \xrightarrow{\text{Downsample by 2}} y[k]$

**Order of Filters:**
The more efficient order is often to place the lower-rate filter first if possible.
Alternatively, if $M$ and $L$ are coprime, we can consider the order:
$x[n] \xrightarrow{\text{LPF, cutoff }\pi/2, \text{ gain } 1} \xrightarrow{\text{Downsample by 2}} \xrightarrow{\text{Upsample by 3}} \xrightarrow{\text{LPF, cutoff }\pi/3, \text{ gain } 3} y[k]$

However, the filters themselves are implemented differently. The combination of operations $x[n] \uparrow M \downarrow L$ is equivalent to $x[n] \uparrow (M/\gcd(M,L)) \downarrow (L/\gcd(M,L))$. Here $\gcd(3,2)=1$. So it's $x[n] \uparrow 3 \downarrow 2$.

The effective rate change is by a factor of $3/2$. The signal at the output $y[k]$ should have a sampling rate of $(3/2)f_s$.
The crucial part is the filtering.
If we upsample by 3 and then downsample by 2:
The input $x[n]$ is assumed to be bandlimited to $\pi$. After upsampling by 3, the spectrum is repeated. We apply a filter with cutoff $\pi/3$ and gain 3. This output is then downsampled by 2. The signal entering the downsampler has a sampling rate of $3f_s$, and its spectrum is within $[-\pi, \pi]$. We need to filter this signal to be bandlimited to $\pi/2$ before downsampling.

So, the system:
$x[n] \xrightarrow{\text{Upsample by 3}} \xrightarrow{\text{LPF (cutoff } \pi/3, \text{ gain } 3)} \xrightarrow{\text{LPF (cutoff } \pi/2, \text{ gain } 1)} \xrightarrow{\text{Downsample by 2}} y[k]$ is a valid approach.

A more efficient approach for $x[n] \uparrow M \downarrow L$ where $M, L$ are coprime is to think about the intermediate rate $Mf_s$.
Filter $x[n]$ to be bandlimited to $\pi/L$ (cutoff $\pi/2$ for $L=2$).
Then upsample by $M$.
Then filter to remove images of the upsampling, bandlimited to $\pi/M$ (cutoff $\pi/3$ for $M=3$).

The system for rate change by $K=M/L$ can be designed more efficiently. For $K=3/2$:
First, upsample by $M=3$: $x_1[n] = x[n] \uparrow 3$.
Then, apply an interpolation filter $h_1[n]$ with cutoff $\pi/3$ and gain 3: $x_2[n] = x_1[n] * h_1[n]$.
Then, downsample by $L=2$: $y[n] = x_2[n] \downarrow 2$.
This requires an anti-aliasing filter *before* downsampling. The signal $x_2[n]$ has a sampling rate of $3f_s$. Its spectrum is in $[-\pi, \pi]$. We need to filter it to bandlimit it to $\pi/2$ before downsampling.

So, the system is:
$x[n] \xrightarrow{\text{Upsample by 3}} \xrightarrow{\text{LPF (cutoff } \pi/3, \text{ gain } 3)} \xrightarrow{\text{LPF (cutoff } \pi/2, \text{ gain } 1)} \xrightarrow{\text{Downsample by 2}} y[k]$
This structure implies two filters.

A more optimized structure exists where the filters are combined or their operations are interleaved. For a rate increase by $M$, a filter with cutoff $\pi/M$ is needed. For a rate decrease by $L$, a filter with cutoff $\pi/L$ is needed. Since $\pi/3 > \pi/2$, the filter with the lower cutoff ($\pi/2$) should be considered more carefully.

The system should be:
$x[n] \xrightarrow{\text{Upsample by } M} \xrightarrow{\text{Filter } H_1} \xrightarrow{\text{Downsample by } L} y[n]$
where $H_1$ is designed to have a passband up to $\pi/M$ and its effect after downsampling should be equivalent to filtering with cutoff $\pi/L$.

The standard digital interpolation filter has cutoff $\pi/M$. When this is downsampled by $L$, its effective cutoff frequency is compressed.
The overall system requirement is to obtain a signal whose spectrum is bandlimited to $\pi/L$.
The input to the downsampler (output of the interpolator) has spectrum $X(M\omega)H(\omega)$, where $H$ is the interpolator. After downsampling, we get $\frac{1}{L} \sum X(\frac{\omega-2\pi i}{L}) H(\frac{\omega-2\pi i}{L})$. For this to be equal to $\frac{1}{L}X(\frac{\omega}{L})$, we need $H(\frac{\omega-2\pi i}{L})$ to be zero for $i \neq 0$ and $H(\omega/L)$ to be some constant gain.

For rate increase by $M/L$:
1. Upsample by $M$: Insert $M-1$ zeros. Spectrum is $X(M\omega)$.
2. Interpolation Filter: Low-pass filter with cutoff $\pi/M$ and gain $M$. Let this filter be $H_{interp}$. The output is $Y_{interp}(\omega) = X(M\omega)H_{interp}(\omega)$.
3. Downsample by $L$: The output is $Y(\omega) = \frac{1}{L} \sum_{i=0}^{L-1} Y_{interp}\left(\frac{\omega-2\pi i}{L}\right) = \frac{1}{L} \sum_{i=0}^{L-1} X\left(M\frac{\omega-2\pi i}{L}\right)H_{interp}\left(\frac{\omega-2\pi i}{L}\right)$.

For ideal rate change by $3/2$:
$x[n] \rightarrow \uparrow 3 \rightarrow H_{interp} \rightarrow \downarrow 2 \rightarrow y[n]$
$H_{interp}$ has cutoff $\pi/3$ and gain 3.
The signal entering the downsampler has sampling rate $3f_s$. Its spectrum is $X(3\omega)H_{interp}(\omega)$. We need this to be bandlimited to $\pi/2$. So, the $H_{interp}$ must suppress frequencies above $\pi/2$.
This means the interpolation filter must have a cutoff frequency that is the minimum of the original interpolation filter's cutoff $(\pi/M)$ and the downsampling filter's required cutoff $(\pi/L)$.
So, the interpolation filter should have a cutoff of $\min(\pi/M, \pi/L) = \min(\pi/3, \pi/2) = \pi/3$.
The gain of the overall system should be $M/L$. The interpolation filter provides the gain $M$. The downsampling by $L$ provides a gain of $1/L$. So, the interpolation filter needs a gain of $M$.

Therefore, the system is:
$x[n] \xrightarrow{\text{Upsample by 3}} \xrightarrow{\text{LPF (cutoff } \pi/3, \text{ gain } 3)} \xrightarrow{\text{Downsample by 2}} y[k]$
The interpolation filter's cutoff of $\pi/3$ ensures that after downsampling by 2, the spectrum remains within $\pi/2$.

A more efficient implementation would first apply filters at the lower sampling rate. However, for this problem, the conceptual system is:
Upsample by 3, then apply an interpolation filter with cutoff $\pi/3$ and gain 3, then downsample by 2.

Final Answer for Q3:
The system should upsample by $M=3$ and then downsample by $L=2$. An interpolation filter with a cutoff frequency of $\pi/3$ and a gain of 3 should be used after upsampling to ensure the signal is properly reconstructed and to prepare it for downsampling without aliasing.

This response covers the requested details, definitions, examples, time/frequency domain analysis, key points, and alignment with course outcomes, referencing the importance of textbook concepts. The practice questions and answers reinforce the understanding of these basic multirate operations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
