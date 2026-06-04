---
title: "Relationships Between the Filter Parameters and the Autocorrelation Sequence"
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 3: Power spectrum estimation "
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff27c"
status: "completed"
scrapedAt: "2026-05-23T18:04:16.460Z"
---
# ADVANCED DIGITAL SIGNAL PROCESSING

## Module 3: Power Spectrum Estimation

### Topic: Relationships Between the Filter Parameters and the Autocorrelation Sequence

---

### **Introduction: Bridging the Gap Between Filters and Autocorrelation**

In digital signal processing, understanding the relationship between the parameters of a digital filter and the autocorrelation sequence of the signal it processes is fundamental. This relationship is particularly crucial in power spectrum estimation, where we aim to infer the spectral content of a signal from its statistical properties, often represented by its autocorrelation. This topic explores how the characteristics of a Linear Time-Invariant (LTI) filter directly influence the autocorrelation of the output signal given an input signal, and conversely, how properties of the autocorrelation sequence can inform the design of filters.

---

### **Key Concepts and Definitions**

*   **Autocorrelation Sequence $r_{xx}(k)$:** For a discrete-time random process $x[n]$, the autocorrelation sequence measures the similarity between the signal at time $n$ and the signal at time $n-k$. It is defined as:
    $r_{xx}(k) = E\{x[n] x[n-k]\}$
    where $E\{\cdot\}$ denotes the expected value. For a Wide-Sense Stationary (WSS) process, the autocorrelation is independent of $n$.

*   **Power Spectral Density (PSD) $P_{xx}(\omega)$:** The Fourier transform of the autocorrelation sequence. It represents the distribution of power in the signal as a function of frequency. For a WSS process:
    $P_{xx}(\omega) = \sum_{k=-\infty}^{\infty} r_{xx}(k) e^{-j\omega k}$

*   **Linear Time-Invariant (LTI) System:** A system whose output is related to its input by convolution, and that satisfies the properties of linearity and time-invariance. For a discrete-time LTI system, the input-output relationship is given by:
    $y[n] = x[n] * h[n] = \sum_{m=-\infty}^{\infty} x[m] h[n-m]$
    where $h[n]$ is the impulse response of the system.

*   **Filter Parameters:** These refer to the coefficients of the filter's impulse response $h[n]$ or its transfer function $H(z)$. For an FIR filter, these are the $b_k$ coefficients. For an IIR filter, these are the $b_k$ (numerator) and $a_k$ (denominator) coefficients.

---

### **Relationships for LTI Systems**

Consider an LTI system with impulse response $h[n]$ and transfer function $H(z)$. Let $x[n]$ be the input signal and $y[n]$ be the output signal.

**1. Autocorrelation of the Output Signal ($r_{yy}(k)$) from Input Autocorrelation ($r_{xx}(k)$):**

If the input signal $x[n]$ is WSS with autocorrelation $r_{xx}(k)$ and PSD $P_{xx}(\omega)$, and it is processed by an LTI system with impulse response $h[n]$ and frequency response $H(\omega) = H(z)|_{z=e^{j\omega}}$, then the output signal $y[n]$ is also WSS, and its autocorrelation $r_{yy}(k)$ and PSD $P_{yy}(\omega)$ are related as follows:

*   **In the Time Domain:**
    $r_{yy}(k) = r_{xx}(k) * (h[k] * h^*[-k])$
    where $*$ denotes convolution and $h^*[-k]$ is the complex conjugate of the time-reversed impulse response. The term $(h[k] * h^*[-k])$ represents the autocorrelation of the impulse response itself.

*   **In the Frequency Domain:**
    $P_{yy}(\omega) = P_{xx}(\omega) |H(\omega)|^2$

This fundamental relationship shows that the PSD of the output signal is the PSD of the input signal multiplied by the squared magnitude of the system's frequency response. The filter essentially "shapes" the power spectrum of the input signal.

**2. Autocorrelation of the Impulse Response ($r_{hh}(k)$):**

The autocorrelation of the impulse response $h[n]$ is given by:
$r_{hh}(k) = \sum_{n=-\infty}^{\infty} h[n] h[n-k]$
In the frequency domain, the PSD of the impulse response is:
$P_{hh}(\omega) = H(\omega) H^*(\omega) = |H(\omega)|^2$

Therefore, the autocorrelation of the output signal can be expressed as:
$r_{yy}(k) = r_{xx}(k) * r_{hh}(k)$

**Example:**

Let $x[n]$ be a WSS random process with autocorrelation $r_{xx}(k)$ and PSD $P_{xx}(\omega)$. Consider a simple LTI system that acts as a low-pass filter with impulse response $h[n] = \{1, 0.5\}$ (for $n=0, 1$) and $0$ otherwise.

The transfer function is $H(z) = 1 + 0.5z^{-1}$.
The frequency response is $H(\omega) = 1 + 0.5e^{-j\omega}$.
The squared magnitude of the frequency response is:
$|H(\omega)|^2 = (1 + 0.5\cos(\omega) - j0.5\sin(\omega))(1 + 0.5\cos(\omega) + j0.5\sin(\omega))$
$|H(\omega)|^2 = (1 + 0.5\cos(\omega))^2 + (0.5\sin(\omega))^2$
$|H(\omega)|^2 = 1 + \cos(\omega) + 0.25\cos^2(\omega) + 0.25\sin^2(\omega)$
$|H(\omega)|^2 = 1 + \cos(\omega) + 0.25$
$|H(\omega)|^2 = 1.25 + \cos(\omega)$

The PSD of the output $y[n]$ is:
$P_{yy}(\omega) = P_{xx}(\omega) (1.25 + \cos(\omega))$

The autocorrelation of the output $r_{yy}(k)$ would be the convolution of $r_{xx}(k)$ with the autocorrelation of $h[n]$, $r_{hh}(k)$.

---

### **Relationship with Filter Design (Inverse Perspective)**

The relationship can also be viewed from the perspective of filter design, particularly when we know certain properties of the desired autocorrelation or PSD.

*   **Designing a Filter to Achieve a Target PSD:** If we want to shape the power spectrum of a signal, we can design a filter $H(\omega)$ such that its squared magnitude $|H(\omega)|^2$ amplifies or attenuates specific frequency bands according to the desired output PSD $P_{yy}(\omega)$ relative to the input PSD $P_{xx}(\omega)$:
    $|H(\omega)|^2 = \frac{P_{yy}(\omega)}{P_{xx}(\omega)}$
    This is a key concept in spectrum shaping and equalization.

*   **Wiener Filtering:** In situations where we want to estimate a desired signal $d[n]$ from a noisy observation $y[n]$ (where $y[n] = s[n] + v[n]$ and $s[n]$ is the desired signal, $v[n]$ is noise), we often use a Wiener filter. The Wiener filter is an LTI system designed to minimize the mean-squared error between the estimated signal $\hat{s}[n]$ and the desired signal $d[n]$. The optimal Wiener filter's impulse response $h_{opt}[n]$ (or transfer function $H_{opt}(z)$) is determined by the autocorrelations of the signals and their cross-correlation.
    In the frequency domain, the Wiener filter's frequency response is given by:
    $H_{opt}(\omega) = \frac{P_{sd}(\omega)}{P_{yy}(\omega)}$
    where $P_{sd}(\omega)$ is the cross-PSD between the desired signal $d[n]$ and the observation $y[n]$, and $P_{yy}(\omega)$ is the PSD of the observation $y[n]$.
    Crucially, $P_{sd}(\omega)$ is related to the cross-correlation $r_{dy}(k)$ by its Fourier Transform, and $P_{yy}(\omega)$ is related to $r_{yy}(k)$ by its Fourier Transform. Thus, the filter parameters are directly derived from the autocorrelation sequences.

    *   **Reference:** This concept is thoroughly discussed in Chapters 11 and 12 of Oppenheim and Willsky.

---

### **Specific Filter Types and their Autocorrelation Relationships**

**1. All-Pole Filters (IIR Filters):**

An all-pole filter has a transfer function of the form:
$H(z) = \frac{G}{1 + a_1 z^{-1} + a_2 z^{-2} + \dots + a_p z^{-p}}$
The PSD of the output of an all-pole filter driven by white noise ($P_{xx}(\omega) = \sigma^2$) is:
$P_{yy}(\omega) = \sigma^2 |H(\omega)|^2 = \frac{\sigma^2 G^2}{|1 + a_1 e^{-j\omega} + \dots + a_p e^{-j\omega p}|^2}$

The autocorrelation sequence $r_{yy}(k)$ of an all-pole process satisfies the Yule-Walker equations:
$r_{yy}(k) + a_1 r_{yy}(k-1) + \dots + a_p r_{yy}(k-p) = \begin{cases} \sigma^2 G^2 & k=0 \\ 0 & k \neq 0 \end{cases}$

*   **Key Insight:** The filter coefficients ($a_i$) of an all-pole filter are directly related to the autocorrelation sequence of the output process. If we can estimate the autocorrelation of a signal, we can potentially model it using an all-pole filter and extract its parameters. This is the basis of the Autoregressive (AR) model in time series analysis.

    *   **Reference:** This is a core topic in AR modeling and is often discussed in advanced DSP texts like those by Haykin or in signal processing applications. Oppenheim and Willsky also cover related concepts in relation to filter design.

**2. All-Zero Filters (FIR Filters):**

An all-zero filter (or FIR filter) has a transfer function of the form:
$H(z) = b_0 + b_1 z^{-1} + b_2 z^{-2} + \dots + b_q z^{-q}$
The PSD of the output of an all-zero filter driven by white noise is:
$P_{yy}(\omega) = \sigma^2 |H(\omega)|^2 = \sigma^2 |b_0 + b_1 e^{-j\omega} + \dots + b_q e^{-j\omega q}|^2$

The autocorrelation of the output of an all-zero filter is related to the autocorrelation of the impulse response.
$r_{yy}(k) = \sigma^2 r_{hh}(k)$
where $r_{hh}(k)$ is the autocorrelation of the impulse response $h[n] = \{b_0, b_1, \dots, b_q\}$.

*   **Key Insight:** The autocorrelation sequence of an all-zero filter's output is directly dependent on the convolution of the filter's coefficients with their time-reversed counterparts. The autocorrelation sequence of a finite-length sequence is also finite in length. This is the basis of the Moving Average (MA) model.

    *   **Reference:** Covered implicitly in filter design sections in Oppenheim and Willsky and Haykin.

**3. Pole-Zero Filters (ARMA Filters):**

These filters combine both poles and zeros:
$H(z) = \frac{G(1 + c_1 z^{-1} + \dots + c_q z^{-q})}{1 + a_1 z^{-1} + \dots + a_p z^{-p}}$
The PSD is:
$P_{yy}(\omega) = \sigma^2 \frac{|1 + c_1 e^{-j\omega} + \dots + c_q e^{-j\omega q}|^2}{|1 + a_1 e^{-j\omega} + \dots + a_p e^{-j\omega p}|^2}$

The autocorrelation of an ARMA process is more complex and satisfies both the Yule-Walker equations (for the AR part) and requires knowledge of the MA part through cross-correlation properties.

*   **Key Insight:** The parameters of an ARMA model are related to both the "predictive" properties (from poles, related to past values) and the "moving average" properties (from zeros, related to past innovations) of the signal's autocorrelation.

    *   **Reference:** Further discussed in advanced texts on time series analysis and ARMA modeling.

---

### **Implications for Power Spectrum Estimation**

The relationships discussed are vital for various power spectrum estimation techniques:

*   **Parametric Methods:** Techniques like AR, MA, and ARMA modeling directly use these relationships. They assume the signal's PSD can be modeled by a rational function (ratio of polynomials in $z^{-1}$) and estimate the filter parameters (coefficients) from the estimated autocorrelation sequence of the signal.
    *   **AR Model (All-Pole):** Uses Yule-Walker equations. If we estimate $r_{xx}(k)$, we can solve for the $a_i$ and $\sigma^2$. The PSD is then estimated as $\hat{P}_{xx}(\omega) = \frac{\sigma^2}{|1 + a_1 e^{-j\omega} + \dots + a_p e^{-j\omega p}|^2}$.
    *   **MA Model (All-Zero):** More complex to estimate parameters directly from autocorrelation, often involves spectral factorization.
    *   **ARMA Model (Pole-Zero):** Combines aspects of AR and MA modeling.

*   **Non-Parametric Methods (e.g., Periodogram, Welch's Method):** While these methods directly estimate the PSD from the Fourier Transform of the autocorrelation (or implicitly from the DFT), understanding how filters affect the PSD helps in interpreting the results and choosing appropriate windowing functions (which are themselves filters). For instance, smoothing the periodogram (as in Welch's method) is akin to filtering the periodogram's underlying estimate.

*   **Filter Bank Analysis:** In subband coding or filter bank decomposition, each filter in the bank processes the signal, and its frequency response $|H_i(\omega)|^2$ dictates how the power of the original signal is distributed among the subbands. The autocorrelation of the signal in each subband will be directly related to the original signal's autocorrelation shaped by the respective filter.

---

### **Learning Outcomes Addressed**

*   **Understanding the transformation of autocorrelation by LTI systems:** We learned how $r_{yy}(\omega) = r_{xx}(\omega) |H(\omega)|^2$. (CO1, CO3, CO4)
*   **Relating filter coefficients to autocorrelation properties:** Specifically, Yule-Walker equations for AR models link filter parameters ($a_i$) to autocorrelation estimates. (CO3, CO4)
*   **Using autocorrelation to infer filter characteristics:** This is the basis of parametric spectrum estimation. (CO3, CO4)
*   **Analyzing signals in the frequency domain:** The PSD is central to these relationships. (CO3)
*   **Interpreting the use of transforms:** The Fourier transform links autocorrelation and PSD, and the z-transform describes the filter. (CO3, CO4)

---

### **Practice Questions and Exercises**

**Question 1:**
A WSS random process $x[n]$ with autocorrelation $r_{xx}(k)$ and PSD $P_{xx}(\omega)$ is passed through an LTI system with frequency response $H(\omega)$. What is the PSD of the output signal $y[n]$?
a) $P_{yy}(\omega) = P_{xx}(\omega) + |H(\omega)|^2$
b) $P_{yy}(\omega) = P_{xx}(\omega) |H(\omega)|^2$
c) $P_{yy}(\omega) = P_{xx}(\omega) / |H(\omega)|^2$
d) $P_{yy}(\omega) = P_{xx}(\omega) H(\omega)$

**Answer:** b) $P_{yy}(\omega) = P_{xx}(\omega) |H(\omega)|^2$

**Question 2:**
Consider an all-pole filter with transfer function $H(z) = \frac{1}{1 + az^{-1}}$. If this filter is driven by white noise with variance $\sigma^2$, what are the Yule-Walker equations relating the output autocorrelation $r_{yy}(k)$ and the filter parameter $a$?
a) $r_{yy}(k) + a r_{yy}(k-1) = \sigma^2$ for $k=1$, $0$ for $k>1$.
b) $r_{yy}(k) + a r_{yy}(k+1) = \sigma^2$ for $k=0$, $0$ for $k \neq 0$.
c) $r_{yy}(k) + a r_{yy}(k-1) = 0$ for $k \neq 0$, and $r_{yy}(0) + a r_{yy}(-1) = \sigma^2$.
d) $r_{yy}(k) + a r_{yy}(k-1) = \sigma^2$ for $k \neq 0$, and $0$ for $k=0$.

**Answer:** c) $r_{yy}(k) + a r_{yy}(k-1) = 0$ for $k \neq 0$, and $r_{yy}(0) + a r_{yy}(-1) = \sigma^2$.
*Explanation: For an all-pole filter $H(z) = \frac{G}{1+a_1z^{-1}}$, the Yule-Walker equation for $k>0$ is $r_{yy}(k) + a_1 r_{yy}(k-1) = 0$. For $k=0$, it is $r_{yy}(0) + a_1 r_{yy}(-1) = \sigma^2 G^2$. Assuming $G=1$ and $\sigma^2$ is the variance of the driving noise, we get the correct form.*

**Question 3 (Conceptual):**
Explain how an autocorrelation sequence can be used to estimate the parameters of an AR model.

**Answer:** An AR model assumes that a signal can be represented as an output of an all-pole filter driven by white noise. The autocorrelation sequence of such a process satisfies the Yule-Walker equations, which directly relate the autocorrelation lags to the filter coefficients and the noise variance. By estimating the autocorrelation sequence of a given signal (e.g., using the biased or unbiased estimator), these equations can be solved to find the AR model parameters (the filter coefficients). This process allows for a parametric representation of the signal's power spectrum.

**Question 4 (Application):**
Let $h[n] = \{1, -0.5\}$ be the impulse response of a filter. Calculate the squared magnitude of its frequency response $|H(\omega)|^2$. If this filter is used to process white noise with variance $\sigma^2=1$, what is the PSD of the output?

**Solution:**
The transfer function is $H(z) = 1 - 0.5z^{-1}$.
The frequency response is $H(\omega) = 1 - 0.5e^{-j\omega} = 1 - 0.5(\cos(\omega) - j\sin(\omega))$.
$H(\omega) = (1 - 0.5\cos(\omega)) + j0.5\sin(\omega)$.

The squared magnitude is:
$|H(\omega)|^2 = (1 - 0.5\cos(\omega))^2 + (0.5\sin(\omega))^2$
$|H(\omega)|^2 = 1 - \cos(\omega) + 0.25\cos^2(\omega) + 0.25\sin^2(\omega)$
$|H(\omega)|^2 = 1 - \cos(\omega) + 0.25(\cos^2(\omega) + \sin^2(\omega))$
$|H(\omega)|^2 = 1 - \cos(\omega) + 0.25(1)$
$|H(\omega)|^2 = 1.25 - \cos(\omega)$

If the input is white noise with $\sigma^2=1$, then $P_{xx}(\omega) = \sigma^2 = 1$.
The PSD of the output is $P_{yy}(\omega) = P_{xx}(\omega) |H(\omega)|^2 = 1 \cdot (1.25 - \cos(\omega)) = 1.25 - \cos(\omega)$.

---

### **Important Points to Remember**

*   The PSD of an LTI system's output is the input PSD shaped by the squared magnitude of the system's frequency response: $P_{yy}(\omega) = P_{xx}(\omega) |H(\omega)|^2$.
*   This relationship is fundamental for understanding how filters modify signal power across frequencies.
*   The autocorrelation sequence of an output signal is the convolution of the input autocorrelation with the autocorrelation of the filter's impulse response: $r_{yy}(k) = r_{xx}(k) * r_{hh}(k)$.
*   For all-pole (AR) models, the filter parameters are directly linked to the autocorrelation sequence via the Yule-Walker equations. This is a cornerstone of parametric power spectrum estimation.
*   Conversely, if a desired PSD modification is known, it can inform the design of the filter's frequency response, $|H(\omega)|^2$.
*   These relationships are crucial for Wiener filtering, spectrum shaping, and various parametric time-series analysis methods.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **Further Reading Recommendations**

*   **Oppenheim & Willsky (2nd Ed.):** Chapters 10 (Frequency Domain Analysis of LTI Systems) and 11 (State-Space Representation of LTI Systems) provide foundational understanding of LTI systems and their frequency responses. Chapter 12 (The z-Transform) is also critical. While not explicitly focused on power spectrum estimation in its core chapters, the concepts of LTI system analysis are directly applicable.
*   **Haykin (2nd Ed.):** For a more direct approach to random processes and spectrum estimation, Haykin's "Signals and Systems" would likely delve into the statistical properties and their relationships with system responses more deeply, especially in chapters concerning random signals and Wiener filtering.
*   **Lathi (2nd Ed.):** Chapters on Fourier Transform, Laplace Transform, and system analysis will provide the mathematical tools.

---
This concludes the study notes for the topic "Relationships Between the Filter Parameters and the Autocorrelation Sequence." Remember that a deep understanding of these relationships is key to mastering power spectrum estimation techniques.