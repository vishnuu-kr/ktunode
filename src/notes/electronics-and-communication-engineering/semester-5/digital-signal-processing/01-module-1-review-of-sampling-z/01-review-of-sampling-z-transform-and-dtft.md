---
title: "Review of sampling, Z-Transform and DTFT"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 1: Review of sampling, Z"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe986"
status: "completed"
scrapedAt: "2026-05-23T17:55:25.209Z"
---
# Module 1: Review of Sampling, Z-Transform, and DTFT

## 1.1 Introduction to Discrete-Time Signals and Systems

This module provides a foundational review of key concepts essential for understanding digital signal processing. We will revisit the process of converting continuous-time signals into discrete-time signals through sampling, and explore powerful mathematical tools like the Z-transform and the Discrete-Time Fourier Transform (DTFT) that are crucial for analyzing and designing discrete-time systems.

**Learning Outcomes:**

*   Understand the process of sampling a continuous-time signal and its implications.
*   Define and explain the properties of the Z-transform and its Region of Convergence (ROC).
*   Analyze discrete-time signals and systems using the Z-transform.
*   Define and explain the properties of the Discrete-Time Fourier Transform (DTFT).
*   Analyze discrete-time signals and systems using the DTFT.
*   Relate the Z-transform and DTFT to each other.

**Course Outcomes Alignment:**

*   **CO1 (K2):** This module lays the groundwork for understanding the DFT by reviewing its continuous-time counterparts (sampling) and fundamental transformational tools (Z-transform and DTFT). Understanding these concepts is crucial for interpreting and manipulating frequency-domain representations.
*   **CO2 (K3), CO3 (K3), CO4 (K2):** While this module doesn't directly involve filter design or FFT, the principles of system analysis using Z-transform and DTFT are fundamental to filter design and understanding system behavior, which will be explored in later modules.

**Textbook References:**

*   **Ingle & Proakis:** Chapter 2 (Sampling), Chapter 7 (The Z-Transform), Chapter 9 (The Discrete-Time Fourier Transform)
*   **Downey:** Chapter 3 (Sampling), Chapter 4 (The Z-Transform), Chapter 5 (The DTFT)
*   **Oppenheim & Schafer:** Chapter 1 (Introduction to Discrete-Time Signals and Systems), Chapter 6 (The Z-Transform), Chapter 7 (The Discrete-Time Fourier Transform)

**Reference Book References:**

*   **Apte:** Chapter 2 (Sampling), Chapter 4 (Z-Transform), Chapter 5 (DTFT)
*   **Mitra:** Chapter 1 (Introduction), Chapter 3 (The Z-Transform), Chapter 4 (The Discrete-Time Fourier Transform)
*   **Ifeachor & Jervis:** Chapter 2 (Sampling), Chapter 4 (Z-Transform), Chapter 5 (Discrete-Time Fourier Transform)
*   **Salivahanan:** Chapter 2 (Sampling), Chapter 4 (Z-Transform), Chapter 5 (Discrete-Time Fourier Transform)

---

## 1.2 Review of Sampling

Sampling is the process of converting a continuous-time signal, $x(t)$, into a discrete-time signal, $x[n]$, by taking measurements at regular intervals.

### 1.2.1 The Sampling Process

*   **Continuous-Time Signal:** $x(t)$
*   **Sampling Period:** $T$ (time interval between samples)
*   **Sampling Frequency:** $f_s = 1/T$ (number of samples per second)
*   **Discrete-Time Signal:** $x[n] = x(nT)$, where $n$ is an integer representing the sample index.

**Mathematical Representation:**

The process of sampling can be modeled by multiplying the continuous-time signal with an impulse train:

$x_s(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT)$

where $\delta(t)$ is the Dirac delta function.

**Important Point:** The discrete-time signal $x[n]$ is essentially a sequence of amplitude values obtained from the continuous-time signal at specific time instants.

### 1.2.2 The Nyquist-Shannon Sampling Theorem

This fundamental theorem provides the condition under which a bandlimited continuous-time signal can be perfectly reconstructed from its samples.

*   **Bandlimited Signal:** A signal $x(t)$ is bandlimited if its Fourier Transform, $X(f)$, is zero for all $|f| > W$, where $W$ is the bandwidth.
*   **Nyquist Rate:** The minimum sampling frequency required for perfect reconstruction is $2W$.
*   **Nyquist Frequency:** The maximum frequency that can be unambiguously represented in the sampled signal is $f_s/2$.

**Theorem Statement:**

A bandlimited continuous-time signal $x(t)$ with bandwidth $W$ can be perfectly reconstructed from its samples $x[n] = x(nT)$ if the sampling frequency $f_s$ is greater than or equal to twice the maximum frequency component of the signal, i.e., $f_s \geq 2W$.

**Implications:**

*   If $f_s < 2W$, **aliasing** occurs, where high-frequency components in the original signal masquerade as lower frequencies in the sampled signal, leading to distortion.
*   If $f_s \geq 2W$, the original continuous-time signal can be recovered by passing the sampled signal through an ideal low-pass filter with a cutoff frequency of $W$.

**Example (Ingle & Proakis, Chapter 2):**

Consider a continuous-time signal $x(t) = \cos(200\pi t) + \sin(400\pi t)$.
The frequencies present are $f_1 = 100$ Hz and $f_2 = 200$ Hz.
The maximum frequency component is $W = 200$ Hz.
According to the Nyquist-Shannon theorem, the minimum sampling frequency required for perfect reconstruction is $f_s \geq 2W = 400$ Hz.

If we sample at $f_s = 300$ Hz, aliasing will occur because $f_s < 2W$. The frequency $200$ Hz will be aliased.

### 1.2.3 Reconstruction of Continuous-Time Signals

The process of reconstructing $x(t)$ from $x[n]$ involves passing the impulse train of samples through an interpolating filter, typically an ideal low-pass filter.

$x_{recon}(t) = \sum_{n=-\infty}^{\infty} x[n] h(t - nT)$

where $h(t)$ is the impulse response of the interpolating filter. For ideal reconstruction, $h(t)$ is a sinc function:

$h(t) = \begin{cases} \frac{1}{T} & |t| \leq \frac{T}{2} \\ 0 & |t| > \frac{T}{2} \end{cases}$
This is an ideal low-pass filter with cutoff frequency $\omega_c = \pi/T$ (or $f_c = f_s/2$).

**Important Point:** The sampling theorem ensures that if the sampling rate is sufficiently high, the spectrum of the sampled signal contains distinct copies of the original signal's spectrum, allowing for perfect reconstruction.

---

## 1.3 The Z-Transform

The Z-transform is a powerful mathematical tool used to analyze discrete-time signals and systems. It converts a discrete-time sequence into a function of a complex variable $z$.

### 1.3.1 Definition

The Z-transform of a discrete-time sequence $x[n]$ is defined as:

$X(z) = Z\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$

where $z$ is a complex variable, $z = r e^{j\omega}$.

### 1.3.2 Region of Convergence (ROC)

The ROC is the set of all values of $z$ for which the Z-transform sum converges. The ROC is crucial for uniquely defining a sequence and for analyzing system stability and causality.

*   **For a causal sequence $x[n]$ (i.e., $x[n] = 0$ for $n < 0$):** The ROC is typically outside a circle in the z-plane.
*   **For an anti-causal sequence $x[n]$ (i.e., $x[n] = 0$ for $n > 0$):** The ROC is typically inside a circle in the z-plane.
*   **For a non-causal sequence:** The ROC can be an annulus (a ring-shaped region).

**Important Properties of ROC:**

1.  The ROC is a region in the z-plane.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
