---
title: "Conversion of continuous time signal to discrete time signal"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe523"
status: "completed"
scrapedAt: "2026-05-23T17:52:29.108Z"
---
# Signals and Systems: Module 3 - Sampling and Discrete-Time Frequency Representation

## Topic: Conversion of Continuous-Time Signal to Discrete-Time Signal

### 1. Introduction

This module focuses on the crucial process of converting continuous-time (CT) signals into discrete-time (DT) signals. This conversion is fundamental to digital signal processing (DSP), as most modern signal processing is performed on digital computers using discrete data. We will explore the underlying principles of sampling, the process by which we obtain discrete-time samples from a continuous-time signal.

### 2. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the process of sampling a continuous-time signal.
*   Explain the concept of impulse train sampling and its mathematical representation.
*   Define the Nyquist-Shannon Sampling Theorem and its implications.
*   Understand the relationship between the sampling frequency and the bandwidth of a signal.
*   Identify the phenomenon of aliasing and its causes.
*   Describe methods to prevent aliasing.
*   Understand the concept of quantizing a sampled signal (though this might be more deeply covered in later modules, a brief mention is relevant for the complete digitization process).
*   Recognize the frequency-domain representation of a sampled signal.

### 3. Key Concepts and Definitions

#### 3.1. What is Sampling?

**Sampling** is the process of converting a continuous-time signal, $x(t)$, into a discrete-time signal, $x[n]$, by taking measurements of $x(t)$ at regularly spaced points in time. These discrete-time measurements are called **samples**.

*   **Continuous-Time (CT) Signal:** A signal whose independent variable is continuous. Examples: audio waveforms, temperature readings over time. Represented as $x(t)$.
*   **Discrete-Time (DT) Signal:** A signal whose independent variable is discrete. Examples: daily stock prices, digital audio samples. Represented as $x[n]$.
*   **Sampling Interval ($T_s$):** The time difference between consecutive samples.
*   **Sampling Frequency ($f_s$):** The number of samples taken per unit of time. It is the reciprocal of the sampling interval: $f_s = \frac{1}{T_s}$.
*   **Sampling Angular Frequency ($\omega_s$):** The sampling frequency expressed in radians per second: $\omega_s = 2\pi f_s = \frac{2\pi}{T_s}$.

#### 3.2. Impulse Train Sampling

The most fundamental way to represent the sampling process mathematically is through **impulse train sampling**. We imagine multiplying the continuous-time signal $x(t)$ by an infinite train of Dirac delta functions (impulses) spaced at intervals of $T_s$.

Let the impulse train be denoted by $p(t)$:
$$p(t) = \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$$

The sampled continuous-time signal, often denoted as $x_s(t)$, is obtained by:
$$x_s(t) = x(t) p(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$$

Using the property of the Dirac delta function, $\delta(t-a)$, that $f(t)\delta(t-a) = f(a)\delta(t-a)$, we get:
$$x_s(t) = \sum_{n=-\infty}^{\infty} x(nT_s) \delta(t - nT_s)$$

This expression shows that the sampled signal is a train of impulses, where the amplitude of each impulse is the value of the original signal $x(t)$ at the sampling instant $nT_s$. The discrete-time signal $x[n]$ is often represented by the sequence of these impulse amplitudes:
$$x[n] = x(nT_s)$$

**Important Point:** While $x_s(t)$ is a continuous-time signal (composed of impulses), $x[n]$ is the discrete-time signal that represents the values of $x(t)$ at the sampling instants. In many contexts, $x_s(t)$ is treated as a representation of the discrete sequence $x[n]$.

#### 3.3. The Nyquist-Shannon Sampling Theorem

This theorem is the cornerstone of digital signal processing and dictates the minimum sampling rate required to perfectly reconstruct a continuous-time signal from its samples.

**Theorem Statement:**
A band-limited continuous-time signal $x(t)$ with no frequency components above $B$ Hz (i.e., $X(j\omega) = 0$ for $|\omega| > 2\pi B$ or $|f| > B$) can be perfectly reconstructed from its samples if the sampling frequency $f_s$ is greater than twice the highest frequency component, i.e., $f_s > 2B$.

*   **Band-limited signal:** A signal whose Fourier Transform is zero for frequencies above a certain limit.
*   **Nyquist Frequency ($f_N$):** The highest frequency that can be unambiguously represented in the sampled signal. It is half the sampling frequency: $f_N = \frac{f_s}{2}$.
*   **Nyquist Rate:** The minimum sampling rate required to avoid aliasing. It is twice the highest frequency in the signal: $f_{Nyquist} = 2B$.

**Condition for perfect reconstruction:** $f_s > 2B$

#### 3.4. Aliasing

**Aliasing** is the phenomenon that occurs when the sampling frequency is too low ($f_s \le 2B$). In this case, high-frequency components in the original signal fold back and masquerade as lower frequencies in the sampled signal, distorting it. This distortion is irreversible; once aliasing occurs, the original signal cannot be perfectly reconstructed from the samples.

**Frequency Domain View of Aliasing:**
Consider the Fourier Transform of a continuous-time signal $X(j\omega)$. The Fourier Transform of the impulse train is a series of impulses at multiples of the sampling angular frequency $\omega_s$:
$$P(j\omega) = \frac{2\pi}{T_s} \sum_{k=-\infty}^{\infty} \delta\left(\omega - k\omega_s\right) = \omega_s \sum_{k=-\infty}^{\infty} \delta\left(\omega - k\omega_s\right)$$

The Fourier Transform of the sampled signal $x_s(t)$ is given by:
$$X_s(j\omega) = \frac{1}{2\pi} [X(j\omega) * P(j\omega)]$$
$$X_s(j\omega) = \frac{1}{2\pi} \left[X(j\omega) * \omega_s \sum_{k=-\infty}^{\infty} \delta\left(\omega - k\omega_s\right)\right]$$
$$X_s(j\omega) = \frac{\omega_s}{2\pi} \sum_{k=-\infty}^{\infty} X(j(\omega - k\omega_s))$$
$$X_s(j\omega) = f_s \sum_{k=-\infty}^{\infty} X(j(\omega - k\omega_s))$$

This equation shows that the spectrum of the sampled signal is a sum of replicas of the original signal's spectrum, shifted by integer multiples of the sampling angular frequency $\omega_s$.

**How Aliasing Occurs:**
If the signal is band-limited to $B$ Hz (meaning $X(j\omega)=0$ for $|\omega| > 2\pi B$), and if $\omega_s > 2(2\pi B)$, then the replicas of $X(j\omega)$ centered at $k\omega_s$ do not overlap. In this case, $X(j(\omega - k\omega_s))$ and $X(j(\omega - (k+1)\omega_s))$ are separated.

However, if $\omega_s \le 2(2\pi B)$, or equivalently $f_s \le 2B$, then the shifted replicas overlap. For example, the replica shifted by $\omega_s$ will overlap with the original spectrum (centered at 0). This overlap causes the high-frequency components from the shifted replica to appear as lower frequencies in the baseband spectrum (around $\omega=0$), leading to aliasing.

**Visual Representation (refer to textbook diagrams):**
*   **No Aliasing ($f_s > 2B$):** Spectra are distinct and non-overlapping.
*   **Aliasing ($f_s \le 2B$):** Spectra overlap, distorting the baseband spectrum.

#### 3.5. Preventing Aliasing

The primary method to prevent aliasing is to ensure the sampling frequency is sufficiently high, adhering to the Nyquist-Shannon Sampling Theorem ($f_s > 2B$). If the signal's bandwidth $B$ is unknown or very large, or if it's not strictly band-limited, we can employ these strategies:

1.  **Anti-aliasing Filter:** A low-pass filter is applied to the continuous-time signal *before* sampling. This filter removes or significantly attenuates frequencies above $f_s/2$. This effectively reduces the bandwidth of the signal to be sampled, ensuring that $B_{filtered} < f_s/2$. The cutoff frequency of the anti-aliasing filter is typically set slightly below $f_s/2$.
2.  **Oversampling:** Sample the signal at a much higher rate than theoretically required ($f_s \gg 2B$). This pushes the overlapping replicas of the spectrum further apart in the frequency domain, making it easier to filter out the unwanted components and then digitally downsample the signal to the desired rate.

#### 3.6. Quantization (Brief Mention)

While sampling converts CT to DT in time, **quantization** converts the amplitude of the sampled signal from a continuous range to a finite set of discrete levels. This is the second step in analog-to-digital conversion (ADC) and is essential for representing signals digitally. Quantization introduces quantization error.

**Conversion to Digital Signal:**
Analog Signal ($x(t)$) $\xrightarrow{\text{Sampling}}$ Sampled Signal ($x_s(t)$) $\xrightarrow{\text{Quantization}}$ Quantized Sampled Signal $\xrightarrow{\text{Encoding}}$ Digital Signal ($x[n]$ in binary form).

### 4. Frequency Domain Representation of Sampled Signals

As derived earlier, the Fourier Transform of the sampled signal $x_s(t)$ is:
$$X_s(j\omega) = f_s \sum_{k=-\infty}^{\infty} X(j(\omega - k\omega_s))$$

This equation highlights that the frequency content of the sampled signal is composed of infinitely many replicas of the original signal's spectrum $X(j\omega)$, shifted by multiples of the sampling angular frequency $\omega_s = 2\pi f_s$.

**Impact of Sampling Rate on Frequency Domain:**

*   **High Sampling Rate ($f_s > 2B$):** The replicas $X(j(\omega - k\omega_s))$ are separated. In the frequency range $[-\omega_s/2, \omega_s/2]$ (which corresponds to $[-\pi/T_s, \pi/T_s]$ in normalized angular frequency), the spectrum is a faithful replica of $X(j\omega)$. This region is called the **baseband**.
*   **Low Sampling Rate ($f_s \le 2B$):** The replicas overlap. This overlap corrupts the baseband spectrum, leading to aliasing.

**Discrete-Time Fourier Transform (DTFT):**
For a discrete-time signal $x[n]$, its DTFT is defined as:
$$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}$$
The DTFT is a periodic function of $\omega$ with period $2\pi$.

The relationship between $X_s(j\omega)$ and $X(e^{j\omega})$ can be seen when we consider the values of $X_s(j\omega)$ at the sampling instants' corresponding angular frequencies.
If $x[n] = x(nT_s)$, then
$$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x(nT_s) e^{-j\omega n}$$
Comparing this with the baseband portion of $X_s(j\omega)$:
$$X_s(j\omega) = f_s X(j\omega) \quad \text{for } |\omega| < \omega_s/2 = \pi/T_s$$
We can relate $X(e^{j\omega})$ to the spectrum of the continuous-time signal $X(j\omega)$:
$$X(e^{j\omega}) = X(j\Omega) \quad \text{where } \Omega = \frac{\omega}{T_s} = \omega f_s$$
So, $X(e^{j\omega})$ is essentially $X(j\Omega)$ with the frequency axis scaled. The DTFT $X(e^{j\omega})$ is periodic with period $2\pi$, reflecting the fact that information about frequencies beyond $\pi/T_s$ in the original signal $X(j\Omega)$ would have been lost due to aliasing.

### 5. Examples

**Example 1: Sampling a Sinusoid**

Let $x(t) = \cos(2\pi f_0 t)$, where $f_0 = 100$ Hz.
The bandwidth of this signal is $B = f_0 = 100$ Hz.

*   **Case 1: $f_s = 300$ Hz**
    Since $f_s = 300 > 2B = 200$ Hz, sampling is done above the Nyquist rate. No aliasing will occur.
    The sampled sequence is $x[n] = x(nT_s) = \cos(2\pi f_0 nT_s) = \cos(2\pi \frac{f_0}{f_s} n) = \cos(2\pi \frac{100}{300} n) = \cos(2\pi \frac{1}{3} n)$.
    This discrete-time sinusoid has a frequency of $\frac{1}{3}$ cycles/sample.

*   **Case 2: $f_s = 150$ Hz**
    Since $f_s = 150 < 2B = 200$ Hz, sampling is done below the Nyquist rate. Aliasing will occur.
    The sampled sequence is $x[n] = x(nT_s) = \cos(2\pi f_0 nT_s) = \cos(2\pi \frac{f_0}{f_s} n) = \cos(2\pi \frac{100}{150} n) = \cos(2\pi \frac{2}{3} n)$.
    The discrete-time sinusoid has a frequency of $\frac{2}{3}$ cycles/sample.
    The original frequency of 100 Hz has been aliased to a lower frequency. The effective frequency in the sampled signal is $f_{effective} = |f_0 - k f_s|$ for some integer $k$, such that $|f_{effective}| < f_s/2$.
    For $f_0 = 100$ Hz and $f_s = 150$ Hz:
    $f_s/2 = 75$ Hz.
    $100 = 0 \cdot 150 + 100$ (original frequency)
    $|100 - 1 \cdot 150| = |-50| = 50$ Hz.
    Since $50 < 75$, the aliased frequency is 50 Hz.
    Let's check our discrete frequency: $\frac{2}{3}$ cycles/sample. What frequency in Hz does this correspond to at $f_s = 150$ Hz?
    Frequency in Hz = (frequency in cycles/sample) * $f_s = \frac{2}{3} \times 150

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
