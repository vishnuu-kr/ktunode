---
title: "Design 
of linear phase FIR filters using Window methods, (rectangular, Hamming 
and Hanning)"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Design of FIR Filters "
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe98f"
status: "completed"
scrapedAt: "2026-05-23T17:55:30.849Z"
---
# DIGITAL SIGNAL PROCESSING - Module 2: Design of FIR Filters

## Topic: Design of Linear Phase FIR Filters using Window Methods (Rectangular, Hamming, and Hanning)

This module focuses on the practical design of Finite Impulse Response (FIR) filters, with a specific emphasis on achieving linear phase characteristics using the widely adopted windowing methods. Linear phase is a desirable property as it ensures that all frequency components of a signal are delayed by the same amount, thus preserving the waveform's shape.

---

### 1. Introduction to FIR Filters and Linear Phase

*   **Finite Impulse Response (FIR) Filters:** These filters have an impulse response $h[n]$ that is of finite duration, meaning it eventually becomes zero. Their output $y[n]$ is given by the convolution of the input $x[n]$ and the impulse response $h[n]$:
    $y[n] = x[n] * h[n] = \sum_{k=0}^{M-1} h[k] x[n-k]$
    where $M$ is the filter order (length of the impulse response).

*   **Advantages of FIR Filters:**
    *   Guaranteed stability.
    *   Can achieve exactly linear phase.
    *   Easier to design and implement with desired characteristics.

*   **Linear Phase Property:** A filter has linear phase if its phase response $\angle H(e^{j\omega})$ is a linear function of frequency $\omega$. This means:
    $\angle H(e^{j\omega}) = -\omega \alpha$
    where $\alpha$ is a constant representing the delay.

*   **Types of Linear Phase FIR Filters:**
    *   **Type I:** Symmetric impulse response, $h[n] = h[M-1-n]$, for $M$ odd.
    *   **Type II:** Symmetric impulse response, $h[n] = h[M-1-n]$, for $M$ even.
    *   **Type III:** Antisymmetric impulse response, $h[n] = -h[M-1-n]$, for $M$ odd.
    *   **Type IV:** Antisymmetric impulse response, $h[n] = -h[M-1-n]$, for $M$ even.

    **Crucial Point:** The windowing methods discussed here primarily design Type I linear phase FIR filters.

---

### 2. The Ideal Filter and the Problem of Truncation

*   **Ideal Filters:** Ideal filters (e.g., ideal low-pass, high-pass, band-pass) have sharp transitions between passbands and stopbands. Their impulse responses are often infinitely long and non-causal.
    *   **Ideal Low-Pass Filter:**
        $h_d[n] = \frac{\omega_c}{\pi} \text{sinc}\left(\frac{\omega_c}{\pi} (n - \alpha)\right)$
        where $\omega_c$ is the cutoff frequency and $\alpha$ is the delay.

*   **The Truncation Problem:** Since FIR filters must have finite length, we need to truncate the ideal, infinitely long impulse response. Truncating directly using a rectangular window leads to undesirable features in the frequency response.

*   **Gibbs Phenomenon:** When an ideal low-pass filter's impulse response is truncated, the frequency response exhibits oscillations near the cutoff frequency. These oscillations (ripples) in the passband and stopband are known as the Gibbs phenomenon. The number of oscillations is directly related to the length of the truncated impulse response, and their amplitude is independent of the length.

---

### 3. Windowing Methods for FIR Filter Design

Windowing methods are a straightforward approach to design FIR filters by multiplying the ideal impulse response $h_d[n]$ with a finite-length window function $w[n]$.

*   **General Procedure:**
    1.  Specify the desired frequency response (e.g., ideal low-pass filter).
    2.  Obtain the ideal impulse response $h_d[n]$ by taking the inverse Fourier Transform of the desired frequency response.
    3.  Choose a window function $w[n]$ of length $M$.
    4.  Design the FIR filter's impulse response $h[n]$ by multiplying the ideal impulse response with the window:
        $h[n] = h_d[n] w[n]$, for $0 \le n \le M-1$
        $h[n] = 0$, otherwise.

*   **Effect of Windowing:** Multiplying in the time domain is equivalent to convolution in the frequency domain. The frequency response of the designed filter $H(e^{j\omega})$ is the convolution of the ideal frequency response $H_d(e^{j\omega})$ with the Fourier Transform of the window function $W(e^{j\omega})$:
    $H(e^{j\omega}) = H_d(e^{j\omega}) * W(e^{j\omega})$

*   **Key Trade-off:** The choice of window function involves a trade-off between the filter's transition bandwidth and the stopband attenuation.
    *   **Narrower main lobe (wider window):** Better frequency resolution, sharper transitions, but poorer stopband attenuation.
    *   **Wider main lobe (shorter window):** Poorer frequency resolution, broader transitions, but better stopband attenuation.

---

### 4. Specific Window Functions

We will now examine three common window functions: Rectangular, Hamming, and Hanning. For each, we will consider their properties and their impact on the filter's frequency response.

#### 4.1. Rectangular Window

*   **Definition:**
    $w[n] = 1$, for $0 \le n \le M-1$
    $w[n] = 0$, otherwise.

*   **Frequency Response Properties ($W(e^{j\omega})$):**
    *   **Main Lobe Width:** Approximately $4\pi/M$ radians.
    *   **Side Lobe Levels:** The first side lobe is at -13 dB relative to the main lobe. Subsequent side lobes decay slowly as $1/|\omega|$ (approximately $20$ dB per decade).
    *   **Trade-off:** The rectangular window has the narrowest main lobe, leading to the sharpest possible transitions for a given length $M$. However, it has the worst stopband attenuation due to its high side lobes.

*   **Impact on Filter Design:** Direct truncation of the ideal impulse response is equivalent to using a rectangular window. This results in the Gibbs phenomenon.

*   **Example:** Designing an ideal low-pass filter with cutoff $\omega_c$ and length $M$. The frequency response will have ripples in the passband and stopband near $\omega_c$.

*   **Reference:** Ingle & Proakis (3rd Ed.) discusses the rectangular window as the simplest form of truncation, highlighting its spectral characteristics and the Gibbs phenomenon. Oppenheim & Schafer (3rd Ed.) also covers the rectangular window in the context of approximating ideal filters.

#### 4.2. Hamming Window

*   **Definition:** The Hamming window is a raised cosine window designed to suppress the side lobes of the rectangular window.
    $w[n] = 0.54 - 0.46 \cos\left(\frac{2\pi n}{M-1}\right)$, for $0 \le n \le M-1$
    $w[n] = 0$, otherwise.

    *(Note: Some texts define the window as $0.54 - 0.46 \cos(2\pi n/(M-1))$ for $0 \leq n \leq M-1$. This form is also widely used.)*

*   **Frequency Response Properties ($W(e^{j\omega})$):**
    *   **Main Lobe Width:** Wider than the rectangular window (approximately $8\pi/M$ radians).
    *   **Side Lobe Levels:** The first side lobe is significantly reduced to approximately -41 dB relative to the main lobe. Side lobes decay as $1/|\omega|^3$ (approximately 60 dB per decade).
    *   **Trade-off:** The Hamming window offers much better stopband attenuation than the rectangular window at the cost of a wider transition band.

*   **Impact on Filter Design:** Reduces the Gibbs phenomenon significantly, leading to smoother frequency responses with lower ripples in the stopband.

*   **Example:** For a given filter length $M$, a Hamming window will result in a wider transition band but much lower stopband ripple compared to a rectangular window.

*   **Reference:** Downey's "Think DSP" might cover windowing in the context of spectral analysis, where similar trade-offs exist. Apte's "Digital Signal Processing" will provide detailed characteristics of the Hamming window and its application in FIR filter design.

#### 4.3. Hanning (Hann) Window

*   **Definition:** The Hanning window is another raised cosine window, similar to the Hamming window but with different coefficients.
    $w[n] = 0.5 - 0.5 \cos\left(\frac{2\pi n}{M-1}\right)$, for $0 \le n \le M-1$
    $w[n] = 0$, otherwise.

*   **Frequency Response Properties ($W(e^{j\omega})$):**
    *   **Main Lobe Width:** Similar to the Hamming window (approximately $8\pi/M$ radians).
    *   **Side Lobe Levels:** The first side lobe is around -31 dB relative to the main lobe. Side lobes decay as $1/|\omega|^3$ (approximately 60 dB per decade).
    *   **Trade-off:** The Hanning window provides moderate stopband attenuation, better than the rectangular window but generally worse than the Hamming window. Its main lobe is also wider than the rectangular window.

*   **Impact on Filter Design:** Provides a good compromise between transition bandwidth and stopband attenuation. It's often used when a moderate level of stopband attenuation is sufficient.

*   **Example:** Compared to a Hamming window of the same length, a Hanning window will have a slightly wider transition band but also slightly higher stopband ripples.

*   **Reference:** Mitra's "Digital Signal Processing: A Computer based Approach" is likely to detail the mathematical properties and comparison of Hanning and Hamming windows for FIR filter design. Ifeachor & Jervis's "Digital Signal Processing: A Practical Approach" would also offer practical insights into their usage.

---

### 5. Design Steps and Considerations

#### 5.1. Determining Filter Order (M)

The length of the window, $M$, is crucial in determining the filter's performance. For linear phase FIR filters designed using window methods, the required filter order $M$ (or length $M$) can be approximated based on the desired transition bandwidth ($\Delta\omega$) and stopband attenuation ($A_s$).

*   **General Guidelines (Empirical Formulas):**
    *   **For Stopband Attenuation $A_s$ (in dB):**
        *   Rectangular: $A_s \approx 21$ dB (fixed)
        *   Hanning: $A_s \approx 44$ dB
        *   Hamming: $A_s \approx 53$ dB
    *   **For Transition Bandwidth $\Delta\omega$:**
        *   Rectangular: $\Delta\omega \approx 4\pi/M$
        *   Hanning/Hamming: $\Delta\omega \approx 8\pi/M$

*   **Deriving M:**
    1.  **From desired stopband attenuation $A_s$**:
        *   If $A_s \le 21$ dB, a rectangular window might suffice, $M \approx \frac{4\pi}{\Delta\omega}$.
        *   If $21 < A_s \le 44$ dB, a Hanning window is a good choice, $M \approx \frac{8\pi}{\Delta\omega}$.
        *   If $44 < A_s \le 53$ dB, a Hamming window is suitable, $M \approx \frac{8\pi}{\Delta\omega}$.
        *   If $A_s > 53$ dB, these windows are insufficient, and other windows (like Kaiser) are needed.

    2.  **From desired transition bandwidth $\Delta\omega$**:
        *   Choose a window based on the required stopband attenuation.
        *   Calculate $M$ using the approximate formula for that window.
        *   **Important:** The filter length $M$ must be odd to ensure a symmetric impulse response for Type I linear phase filters when the ideal response is also symmetric around some point. If the calculated $M$ is even, increment it to the next odd integer.

*   **Example:** Design a low-pass filter with a cutoff frequency of $0.2\pi$ rad/sample and a stopband attenuation of at least 40 dB.
    *   Desired attenuation $A_s = 40$ dB.
    *   A Hanning window is suitable (attenuation $\approx 44$ dB).
    *   The transition bandwidth $\Delta\omega$ is not explicitly given, but we can infer it from the choice of window. For Hanning, the transition band is roughly $8\pi/M$. To have a reasonable transition band relative to the cutoff, let's assume a transition width of $0.1\pi$ rad/sample.
    *   Using the formula for Hanning: $M \approx \frac{8\pi}{\Delta\omega} = \frac{8\pi}{0.1\pi} = 80$.
    *   Since $M$ should be odd, we choose $M=81$.

#### 5.2. Calculating the FIR Filter Coefficients $h[n]$

1.  **Ideal Low-Pass Filter (Example):**
    Let the desired cutoff frequency be $\omega_c$ (normalized to $\pi$, so $0 < \omega_c < 1$).
    The ideal impulse response for a causal filter with delay $\alpha = (M-1)/2$ is:
    $h_d[n] = \frac{\sin(\omega_c (n - \alpha))}{\pi (n - \alpha)}$, for $n \neq \alpha$
    $h_d[\alpha] = \frac{\omega_c}{\pi}$

2.  **Apply Window:**
    Multiply $h_d[n]$ by the chosen window function $w[n]$ of length $M$:
    $h[n] = h_d[n] w[n]$, for $0 \le n \le M-1$.

*   **Example using Matlab/Python:** Libraries like SciPy (Python) or MATLAB provide functions to directly design FIR filters using windows. For instance, `scipy.signal.firwin(M, cutoff, window='hamming')` or `fir1(M, cutoff, window=hamming(M))` in MATLAB.

#### 5.3. Evaluating the Designed Filter

*   **Frequency Response:** Plot the magnitude and phase response of the designed filter $h[n]$.
    *   Magnitude response should meet the passband and stopband specifications.
    *   Phase response should be linear across the frequency range.

*   **Transition Bandwidth:** Measure the width of the transition band from the passband edge to the stopband edge.
*   **Stopband Attenuation:** Measure the maximum ripple in the stopband.

---

### 6. Course Outcome Alignment

*   **CO1: Illustrate fundamental properties and relations relevant to DFT and solve basic problems involving DFT-based filtering methods.**
    *   Windowing methods, while not directly DFT-based filtering in terms of implementation, rely on the frequency domain concept of ideal filters which are defined via the inverse DFT. Understanding the frequency response of windows ($W(e^{j\omega})$) and how it affects the overall filter response through convolution relates to understanding frequency domain operations.

*   **CO2: Design linear phase FIR filters and IIR filters of different specifications.**
    *   This entire topic directly addresses the design of linear phase FIR filters using window methods. The steps outlined for choosing window type and order $M$ are for meeting specific filter specifications.

*   **CO3: Realise the various FIR and IIR filter structures for a given system function.**
    *   Once the FIR filter coefficients $h[n]$ are designed using window methods, these coefficients define the system function $H(z) = \sum_{n=0}^{M-1} h[n] z^{-n}$. This system function can then be realized in various structures (direct form, transposed direct form, etc.), which is covered in later parts of Module 2.

*   **CO4: Compute DFT efficiently using FFT method and to explain the architecture of a DSP processor.**
    *   This topic is less directly related to CO4, which focuses on FFT algorithms and DSP processor architecture. However, understanding the frequency response of filters is often done by computing the DFT of the impulse response, which can be done efficiently using FFT.

---

### 7. Key Points to Remember

*   **Linear Phase:** Essential for preserving waveform shape.
*   **Gibbs Phenomenon:** Ripples introduced by truncating ideal impulse responses.
*   **Windowing:** A method to mitigate the Gibbs phenomenon by smoothing the truncated impulse response.
*   **Trade-off:** Window width (main lobe) vs. stopband attenuation (side lobe levels).
    *   Rectangular: Narrowest main lobe, worst attenuation.
    *   Hanning: Wider main lobe, moderate attenuation.
    *   Hamming: Similar main lobe to Hanning, better attenuation.
*   **Filter Order $M$:** Crucial for meeting specifications. Approximations exist based on desired transition bandwidth and stopband attenuation.
*   **Causality and Symmetry:** For Type I linear phase filters, $M$ is usually chosen to be odd, and the ideal impulse response is shifted to be symmetric around $(M-1)/2$.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the main advantage of FIR filters over IIR filters in terms of phase response?
**Answer:** FIR filters can be designed to have exactly linear phase, whereas IIR filters inherently have non-linear phase responses.

**Question 2:**
Explain the Gibbs phenomenon and how windowing helps to reduce it.
**Answer:** The Gibbs phenomenon refers to the oscillations (ripples) in the frequency response of a filter that occur near frequency transitions due to the truncation of an infinitely long ideal impulse response. Window functions, by tapering the impulse response towards zero at its ends, effectively smooth out these abrupt truncations, thereby reducing the side lobe levels in the frequency domain and consequently lessening the Gibbs ripples.

**Question 3:**
Compare the rectangular, Hamming, and Hanning windows in terms of their main lobe width and stopband attenuation.
**Answer:**
*   **Rectangular:** Narrowest main lobe, highest side lobes (-13 dB), worst stopband attenuation.
*   **Hanning:** Wider main lobe than rectangular, lower side lobes (-31 dB), moderate stopband attenuation.
*   **Hamming:** Similar main lobe width to Hanning, even lower side lobes (-41 dB), better stopband attenuation than Hanning.

**Question 4:**
You are tasked with designing a low-pass FIR filter with a transition bandwidth of approximately $0.1\pi$ rad/sample and a stopband attenuation of at least 45 dB. Which window would you primarily consider and why? Calculate an approximate required filter length.
**Answer:**
We need a stopband attenuation of at least 45 dB.
*   Rectangular: ~21 dB (insufficient)
*   Hanning: ~44 dB (might be just enough, but on the edge)
*   Hamming: ~53 dB (sufficient)

Therefore, the **Hamming window** is the most suitable choice.

For the Hamming window, the transition bandwidth is approximately $\Delta\omega \approx 8\pi/M$.
Given $\Delta\omega = 0.1\pi$:
$0.1\pi \approx \frac{8\pi}{M}$
$M \approx \frac{8\pi}{0.1\pi} = 80$

Since FIR filter length $M$ should ideally be odd for simple linear phase designs, we would choose $M=81$.

**Question 5:**
Consider an ideal low-pass filter with a cutoff frequency $\omega_c = 0.3\pi$ rad/sample. You need to design a causal FIR filter of length $M=21$ using the rectangular window.
a) What is the approximate transition bandwidth you can expect?
b) What is the approximate stopband attenuation you can expect?
c) Sketch the magnitude response of this filter, showing the expected ripples near the cutoff frequency.

**Answer:**
a) For a rectangular window, $\Delta\omega \approx 4\pi/M = 4\pi/21 \approx 0.19\pi$ rad/sample.
b) For a rectangular window, the stopband attenuation is approximately 21 dB.
c) The sketch would show a passband up to the cutoff frequency $0.3\pi$, with some ripples. Beyond $0.3\pi$, there would be a stopband with significant ripples, especially between $0.3\pi$ and $0.3\pi + \Delta\omega/2 \approx 0.3\pi + 0.095\pi = 0.395\pi$. The ripples in the passband and stopband would be of roughly equal magnitude.

---

This concludes the study notes for the design of linear phase FIR filters using window methods. Remember that these methods provide approximate solutions, and for precise specifications, other design techniques like the Parks-McClellan algorithm are employed. However, window methods are fundamental for understanding FIR filter design principles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
