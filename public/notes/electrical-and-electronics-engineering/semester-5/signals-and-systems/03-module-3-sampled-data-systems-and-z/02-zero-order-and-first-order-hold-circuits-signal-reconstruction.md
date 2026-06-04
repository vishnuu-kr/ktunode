---
title: "Zero-order and First-order hold circuits - Signal reconstruction."
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampled Data Systems and Z"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361dc"
status: "completed"
scrapedAt: "2026-05-23T16:23:49.810Z"
---
# Signals and Systems: Module 3 - Sampled Data Systems and Z-Transform

## Topic: Zero-order and First-order Hold Circuits - Signal Reconstruction

---

### 1. Introduction to Signal Reconstruction

In sampled data systems, a continuous-time signal $x(t)$ is converted into a discrete-time signal $x[n]$ through sampling. To convert this discrete-time signal back into an approximate continuous-time signal, a **reconstruction filter** or **hold circuit** is used. The process of reconstructing a continuous-time signal from its samples is called **digital-to-analog conversion (DAC)** followed by **signal reconstruction**.

**Key Concept:** The fundamental idea behind signal reconstruction is to "fill in the gaps" between the discrete samples to approximate the original continuous-time signal.

**Relevance to Course Outcomes:**
*   **CO1 (K2):** Understanding how to represent continuous and discrete time signals and how they relate through sampling and reconstruction.
*   **CO2 (K3):** Analyzing the frequency domain characteristics of reconstruction filters to understand their impact on the reconstructed signal.
*   **CO3 (K3):** Relating the reconstruction process to discrete-time systems and their Z-transform representations.

**Textbook References:**
*   **Haykin & Van Veen:** Discusses sampling and reconstruction in the context of discrete-time processing of continuous-time signals.
*   **Ogata:** Covers the conversion from discrete-time to continuous-time signals in control systems.

---

### 2. The Ideal Reconstruction Filter

The ideal reconstruction filter is a low-pass filter with a bandwidth equal to half the sampling frequency ($f_s/2$ or $\omega_s/2$). This is based on the **Nyquist-Shannon sampling theorem**, which states that if a signal is band-limited to $B$ Hz, it can be perfectly reconstructed from its samples taken at a rate $f_s > 2B$.

**Key Concept:** An ideal low-pass filter with a cutoff frequency of $\omega_s/2$ is the theoretical filter that can perfectly reconstruct a band-limited signal from its samples.

**Transfer Function of Ideal Low-Pass Filter:**
$H_{ideal}(\omega) = \begin{cases} T & |\omega| \le \frac{\omega_s}{2} \\ 0 & |\omega| > \frac{\omega_s}{2} \end{cases}$
where $T$ is the sampling period.

**Time-Domain Impulse Response:**
The impulse response of the ideal low-pass filter is a sinc function:
$h_{ideal}(t) = \frac{\sin(\omega_s t/2)}{\pi t} = \frac{\sin(\pi t/T)}{\pi t}$

**Reconstruction Formula:**
The reconstructed signal $\hat{x}(t)$ is given by the convolution of the sampled signal with the ideal impulse response:
$\hat{x}(t) = \sum_{n=-\infty}^{\infty} x[n] h_{ideal}(t - nT)$
$\hat{x}(t) = \sum_{n=-\infty}^{\infty} x[n] \frac{\sin(\frac{\pi}{T}(t - nT))}{\frac{\pi}{T}(t - nT)}$

**Limitations of Ideal Reconstruction:**
*   **Realizability:** The ideal low-pass filter has an infinitely long impulse response, making it physically unrealizable.
*   **Delay:** The impulse response is non-causal, requiring an infinite delay.

**Important Point to Remember:** The ideal reconstruction filter is a theoretical construct that demonstrates the possibility of perfect reconstruction under ideal conditions.

---

### 3. Zero-Order Hold (ZOH) Circuit

A Zero-Order Hold (ZOH) circuit is a practical approximation of the ideal reconstruction filter. It holds the last sampled value constant until the next sample arrives. This effectively creates a staircase-like approximation of the original continuous-time signal.

**Key Concept:** A ZOH circuit holds the value of the most recent sample constant for the duration of the sampling period.

**Operation:**
If the samples are $x[0], x[1], x[2], \dots$, the reconstructed signal $\hat{x}(t)$ for $nT \le t < (n+1)T$ is given by:
$\hat{x}(t) = x[n]$ for $nT \le t < (n+1)T$

**Time-Domain Representation of ZOH:**
The ZOH circuit can be viewed as passing the impulse train of sampled values through a pulse of duration $T$. The impulse response of a ZOH is a rectangular pulse:
$h_{ZOH}(t) = \begin{cases} 1 & 0 \le t < T \\ 0 & \text{otherwise} \end{cases}$

**Transfer Function of ZOH:**
The transfer function $H_{ZOH}(s)$ is the Laplace transform of $h_{ZOH}(t)$:
$H_{ZOH}(s) = \mathcal{L}\{h_{ZOH}(t)\} = \int_{0}^{T} 1 \cdot e^{-st} dt = \left[ -\frac{1}{s} e^{-st} \right]_{0}^{T} = -\frac{1}{s} (e^{-sT} - 1) = \frac{1 - e^{-sT}}{s}$

**Frequency Response of ZOH:**
To find the frequency response, substitute $s = j\omega$:
$H_{ZOH}(j\omega) = \frac{1 - e^{-j\omega T}}{j\omega} = \frac{e^{-j\omega T/2}(e^{j\omega T/2} - e^{-j\omega T/2})}{j\omega} = \frac{e^{-j\omega T/2}(2j \sin(\omega T/2))}{j\omega}$
$H_{ZOH}(j\omega) = \frac{2 \sin(\omega T/2)}{\omega} e^{-j\omega T/2}$

**Magnitude Response of ZOH:**
$|H_{ZOH}(j\omega)| = \left| \frac{2 \sin(\omega T/2)}{\omega} \right| = T \left| \frac{\sin(\omega T/2)}{\omega T/2} \right|$
Let $\nu = \omega T/2$. Then $|H_{ZOH}(j\omega)| = T \left| \frac{\sin(\nu)}{\nu} \right|$.

**Phase Response of ZOH:**
$\angle H_{ZOH}(j\omega) = -\frac{\omega T}{2}$ (a linear phase shift, representing a delay of $T/2$).

**Effect of ZOH on Frequency Spectrum:**
The ZOH acts as a low-pass filter, but its frequency response is not ideal. It has a main lobe and side lobes.
*   The main lobe cutoff is not sharp.
*   The side lobes cause **aliasing** and **distortion** in the reconstructed signal, even if the original signal is band-limited to $\omega_s/2$.

**Relationship to Sampling Theorem:**
The ZOH transfer function can be expressed in terms of the sampling frequency $\omega_s = 2\pi/T$:
$H_{ZOH}(j\omega) = T \frac{\sin(\omega T/2)}{\omega T/2} e^{-j\omega T/2}$
At $\omega = \omega_s/2$, $\omega T/2 = (\omega_s/2)T/2 = (\frac{2\pi}{T})/2 \cdot T/2 = \pi/2$.
$|H_{ZOH}(j\omega_s/2)| = T \left| \frac{\sin(\pi/2)}{\pi/2} \right| = T \left| \frac{1}{\pi/2} \right| = \frac{2T}{\pi} \approx 0.637T$.
This means the ZOH attenuates the signal at the Nyquist frequency by about 36.3%.

**Relevance to Course Outcomes:**
*   **CO1 (K2):** Visualizing the staircase approximation of a continuous signal.
*   **CO2 (K3):** Analyzing the magnitude and phase response of the ZOH to understand its filtering characteristics and distortion.
*   **CO3 (K3):** Relating the ZOH's operation to discrete-time processing through its transfer function.

**Textbook References:**
*   **Haykin & Van Veen:** Provides a detailed analysis of the ZOH's transfer function and its impact on signal reconstruction.
*   **Ogata:** Discusses ZOH in the context of converting sampled signals to continuous signals in control loops.
*   **Nise:** Covers the practical aspects of ZOH in control systems.

**Example:**
Consider a continuous-time signal $x(t) = \sin(\frac{2\pi}{T} t)$ sampled at a rate $f_s = 1/T$. The samples are $x[n] = \sin(2\pi n) = 0$ for all $n$. A ZOH will hold these zeros, resulting in a reconstructed signal of zero, which is incorrect. However, if the original signal was $\sin(\frac{\pi}{T} t)$, the samples would be $\sin(\pi n) = 0$, and the ZOH would reconstruct zero.

Let's consider a signal $x(t) = \cos(\frac{\pi}{T} t)$.
Samples at $nT$: $x[n] = \cos(\frac{\pi}{T} nT) = \cos(\pi n) = (-1)^n$.
For $0 \le t < T$: $\hat{x}(t) = x[0] = \cos(0) = 1$.
For $T \le t < 2T$: $\hat{x}(t) = x[1] = \cos(\pi) = -1$.
And so on. The reconstructed signal is a square wave.

---

### 4. First-Order Hold (FOH) Circuit

The First-Order Hold (FOH) circuit provides a better approximation of the original signal than the ZOH by using linear interpolation between samples. It essentially connects consecutive samples with straight lines.

**Key Concept:** An FOH circuit reconstructs the signal by linearly interpolating between consecutive samples.

**Operation:**
For $nT \le t < (n+1)T$, the reconstructed signal $\hat{x}(t)$ is given by the line segment connecting $(nT, x[n])$ and $((n+1)T, x[n+1])$:
$\hat{x}(t) = x[n] + \frac{x[n+1] - x[n]}{T} (t - nT)$ for $nT \le t < (n+1)T$

**Time-Domain Representation of FOH:**
The FOH can be viewed as two ZOHs operating in parallel, with one delayed by $T$ and scaled. The impulse response of the FOH is a triangular pulse (or a triangular spline).
$h_{FOH}(t) = \begin{cases} 1 - \frac{|t|}{T} & |t| < T \\ 0 & \text{otherwise} \end{cases}$

**Transfer Function of FOH:**
The transfer function $H_{FOH}(s)$ is the Laplace transform of $h_{FOH}(t)$:
$H_{FOH}(s) = \frac{1+sT - e^{sT}}{(sT)^2}$ (This derivation is more involved, but the result is a sinc-squared like function in frequency domain)

**Frequency Response of FOH:**
The frequency response is:
$H_{FOH}(j\omega) = T \left( \frac{\sin(\omega T/2)}{\omega T/2} \right)^2 e^{-j\omega T/2}$

**Magnitude Response of FOH:**
$|H_{FOH}(j\omega)| = T \left( \frac{\sin(\omega T/2)}{\omega T/2} \right)^2$

**Phase Response of FOH:**
$\angle H_{FOH}(j\omega) = -\frac{\omega T}{2}$ (same linear phase delay as ZOH).

**Effect of FOH on Frequency Spectrum:**
The FOH has a frequency response that is the square of the ZOH's magnitude response (ignoring the $T$ scaling).
*   It is a better approximation of the ideal low-pass filter than the ZOH.
*   The main lobe is narrower, and the side lobes are significantly smaller, resulting in less distortion and aliasing compared to the ZOH.

**Comparison of ZOH and FOH:**

| Feature             | Zero-Order Hold (ZOH)                               | First-Order Hold (FOH)                                     |
| :------------------ | :-------------------------------------------------- | :--------------------------------------------------------- |
| Approximation       | Staircase                                           | Linear interpolation (triangular pulses)                   |
| Transfer Function   | $\frac{1 - e^{-sT}}{s}$                             | $\frac{1+sT - e^{sT}}{(sT)^2}$                             |
| Magnitude Response  | $T \left| \frac{\sin(\omega T/2)}{\omega T/2} \right|$ | $T \left( \frac{\sin(\omega T/2)}{\omega T/2} \right)^2$   |
| Side Lobes          | Significant                                         | Significantly smaller                                      |
| Distortion/Aliasing | More                                                | Less                                                       |
| Complexity          | Simpler to implement                                | More complex to implement                                  |
| Cutoff at $\omega_s/2$ | $\approx 0.637T$ (attenuation)                      | $T (\frac{\sin(\pi/2)}{\pi/2})^2 = T (\frac{1}{\pi/2})^2 = \frac{4T}{\pi^2} \approx 0.405T$ (more attenuation) |

**Important Point to Remember:** FOH offers improved reconstruction accuracy over ZOH by using linear interpolation, leading to a frequency response that more closely approximates an ideal low-pass filter, though it still has limitations.

**Relevance to Course Outcomes:**
*   **CO1 (K2):** Visualizing the linear interpolation between samples.
*   **CO2 (K3):** Comparing the frequency responses of ZOH and FOH to understand their impact on signal fidelity.
*   **CO3 (K3):** Understanding how FOH can be analyzed using discrete-time system concepts.

**Textbook References:**
*   **Haykin & Van Veen:** Discusses FOH as an improvement over ZOH and analyzes its frequency domain characteristics.
*   **Ogata:** Covers FOH for signal reconstruction in control systems.

---

### 5. Signal Reconstruction and the Z-Transform

The process of reconstruction can be viewed in the context of the Z-transform. Consider the sampled signal $x[n]$. When a hold circuit is applied, it generates a continuous-time signal $\hat{x}(t)$.

**Z-Transform of the Sampled Signal:**
The Z-transform of the impulse train of samples is $X(z) = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$.

**Relationship between Continuous-Time and Discrete-Time Systems:**
The output of a hold circuit, $\hat{x}(t)$, can be related to the discrete-time sequence $x[n]$ and the impulse response of the hold circuit $h_{hold}(t)$.

For a ZOH:
$\hat{x}(t) = \sum_{n=-\infty}^{\infty} x[n] h_{ZOH}(t - nT)$
The Z-transform of the ZOH output sequence $y[n]$ (if we were to sample $\hat{x}(t)$ again at the same rate) can be obtained by considering the equivalent discrete-time system.

**The equivalent discrete-time system for a ZOH:**
The transfer function of the ZOH in the $z$-domain can be derived from its Laplace transform $H_{ZOH}(s) = \frac{1 - e^{-sT}}{s}$.
To find the $z$-domain transfer function, we use the relationship $z = e^{sT}$. Thus, $sT = \ln(z)$, or $s = \frac{1}{T}\ln(z)$.
$H_{ZOH}(z) = \frac{1 - e^{-(\frac{1}{T}\ln z)T}}{\frac{1}{T}\ln z} = \frac{1 - z^{-1}}{\frac{1}{T}\ln z} = T \frac{1-z^{-1}}{\ln z}$.

This $z$-domain transfer function is generally not a rational function of $z$, making direct Z-transform analysis difficult. However, approximations are often made, or the analysis is performed in the continuous-time frequency domain using $z = e^{j\omega T}$.

**Relation to the $z$-transform for systems:**
The output of a discrete-time system $y[n] = \sum_{k} b_k x[n-k]$ has a Z-transform $Y(z) = X(z) H(z)$, where $H(z)$ is the system's transfer function.

For reconstruction, we are going from discrete samples $x[n]$ to a continuous-time signal $\hat{x}(t)$. The hold circuit acts as an **interpolator**.

**Important Point to Remember:** While the Z-transform is primarily for discrete-time systems, the frequency response of hold circuits (obtained by substituting $s = j\omega$) can be analyzed using $z = e^{j\omega T}$ to understand their behavior at discrete frequency points.

**Textbook References:**
*   **Ogata:** Discusses modeling of sampled-data systems, which includes the interaction between discrete-time controllers and continuous-time plants using hold circuits.
*   **Haykin & Van Veen:** Connects the frequency response of hold circuits to their effect on the sampled spectrum.

---

### 6. Reconstruction Errors and Improvements

**Reconstruction Errors:**
The primary errors introduced by practical hold circuits (ZOH, FOH) are:
1.  **Amplitude Distortion:** Due to the non-ideal frequency response of the hold circuit, different frequency components of the signal are attenuated differently.
2.  **Aliasing:** If the original signal is not perfectly band-limited or if the sampling rate is insufficient, aliasing occurs during sampling, and hold circuits cannot recover the correct spectral content.
3.  **Phase Distortion:** While FOH and ZOH have linear phase characteristics (constant group delay), their phase response is not zero across all frequencies.

**Improvements in Reconstruction:**

*   **Higher-Order Holds:** Using higher-order polynomial interpolation can provide a closer approximation to the ideal reconstruction, but they are more complex to implement and can introduce other issues.
*   **Interpolators:** Digital interpolators can be used to generate intermediate samples between the original samples, effectively increasing the sampling rate before analog conversion. This allows for a simpler analog reconstruction filter.
*   **Anti-aliasing Filters:** Proper filtering of the continuous-time signal *before* sampling is crucial to prevent aliasing.

**Textbook References:**
*   **Haykin & Van Veen:** Discusses the practical limitations and improvements in signal reconstruction techniques.
*   **Proakis & Manolakis:** Covers digital signal processing techniques for interpolation and decimation, which are relevant to improving reconstruction.

---

### 7. Practice Questions and Exercises

**Question 1:**
A continuous-time signal $x(t) = \cos(100\pi t) + \sin(200\pi t)$ is sampled at a rate $f_s = 300$ Hz.
a) What is the sampling period $T$?
b) If this sampled signal is passed through a Zero-Order Hold (ZOH) circuit, what is the frequency response $H_{ZOH}(j\omega)$?
c) What is the magnitude of the ZOH frequency response at the Nyquist frequency ($f_s/2$)?
d) Sketch the magnitude responses of the ideal reconstruction filter, the ZOH, and the FOH for frequencies up to $f_s$.

**Answer 1:**
a) $T = 1/f_s = 1/300$ seconds.
b) $H_{ZOH}(j\omega) = \frac{1 - e^{-j\omega T}}{j\omega} = \frac{2 \sin(\omega T/2)}{\omega} e^{-j\omega T/2}$.
c) Nyquist frequency $f_{nyquist} = f_s/2 = 300/2 = 150$ Hz.
   $\omega_{nyquist} = 2\pi f_{nyquist} = 2\pi (150) = 300\pi$ rad/s.
   $|H_{ZOH}(j\omega_{nyquist})| = T \left| \frac{\sin(\omega_{nyquist} T/2)}{\omega_{nyquist} T/2} \right| = \frac{1}{300} \left| \frac{\sin(300\pi \cdot (1/300)/2)}{300\pi \cdot (1/300)/2} \right|$
   $|H_{ZOH}(j\omega_{nyquist})| = \frac{1}{300} \left| \frac{\sin(\pi/2)}{\pi/2} \right| = \frac{1}{300} \left| \frac{1}{\pi/2} \right| = \frac{2}{300\pi} = \frac{1}{150\pi}$.
d) **Sketch:**
    *   **Ideal:** A rectangular pulse from $-\omega_s/2$ to $\omega_s/2$ (or $-f_s/2$ to $f_s/2$) with height $T$. It drops to zero for $|\omega| > \omega_s/2$.
    *   **ZOH:** Starts at $T$ at $\omega=0$, decreases to $2T/\pi$ at $\omega=\omega_s/2$, and has side lobes that decay as $1/\omega$.
    *   **FOH:** Starts at $T$ at $\omega=0$, decreases to $4T/\pi^2$ at $\omega=\omega_s/2$, and has side lobes that decay as $1/\omega^2$, meaning they are much smaller than ZOH side lobes.

**Question 2:**
Compare the advantages and disadvantages of Zero-Order Hold (ZOH) and First-Order Hold (FOH) circuits for signal reconstruction.

**Answer 2:**
**Zero-Order Hold (ZOH):**
*   **Advantages:**
    *   Simpler to implement in hardware (uses a latch or buffer).
    *   Provides a basic form of reconstruction.
*   **Disadvantages:**
    *   Introduces significant distortion due to the staircase approximation.
    *   The frequency response has noticeable side lobes, leading to increased aliasing and amplitude distortion, especially at higher frequencies within the baseband.
    *   Attenuates frequencies at the Nyquist limit.

**First-Order Hold (FOH):**
*   **Advantages:**
    *   Provides a better approximation of the original signal through linear interpolation.
    *   Has a frequency response with much smaller side lobes than ZOH, reducing distortion and aliasing.
    *   More accurate reconstruction for signals with higher frequency content.
*   **Disadvantages:**
    *   More complex to implement in hardware, requiring interpolation circuitry.
    *   Still introduces some distortion and attenuation, though less than ZOH.
    *   The magnitude response at the Nyquist frequency is lower than ZOH, meaning more attenuation at that specific frequency.

**Question 3:**
Explain why an ideal reconstruction filter is not practically realizable.

**Answer 3:**
An ideal reconstruction filter has an impulse response $h(t) = \frac{\sin(\omega_c t)}{\pi t}$ (where $\omega_c = \omega_s/2$). This impulse response has two main properties that make it non-realizable:
1.  **Non-causality:** The impulse response $h(t)$ is non-zero for $t < 0$. This means the filter's output at any time depends on future input samples, which is not possible in real-time systems. To make it causal, an infinite delay would be required.
2.  **Infinite Duration:** The impulse response extends infinitely in time. Real filters must have a finite impulse response (FIR) or a stable, finite-duration impulse response, so they can eventually settle to zero.

---

### 8. Summary and Key Takeaways

*   **Signal Reconstruction** is the process of converting a discrete-time signal back into an approximate continuous-time signal.
*   The **Ideal Reconstruction Filter** is a theoretical low-pass filter with a cutoff at the Nyquist frequency ($\omega_s/2$). Its impulse response is a sinc function.
*   **Zero-Order Hold (ZOH)** is a practical reconstructor that holds the last sample value constant until the next sample arrives. It approximates the signal with a staircase.
    *   Its transfer function is $H_{ZOH}(s) = \frac{1 - e^{-sT}}{s}$.
    *   Its frequency response has significant side lobes, causing distortion.
*   **First-Order Hold (FOH)** reconstructs the signal by linearly interpolating between consecutive samples. It approximates the signal with a series of connected line segments.
    *   Its transfer function is $H_{FOH}(s) = \frac{1+sT - e^{sT}}{(sT)^2}$.
    *   Its frequency response has smaller side lobes than ZOH, offering better reconstruction.
*   **Errors** in reconstruction are due to the non-ideal frequency responses of practical hold circuits, leading to amplitude distortion and potential aliasing if not properly managed.
*   The choice between ZOH and FOH (or other holds) depends on the required accuracy and the acceptable complexity of the implementation.
*   **Digital interpolation** is a technique used in digital signal processing to improve reconstruction by effectively increasing the sampling rate before analog conversion, allowing for simpler analog filters.

---

### 9. Alignment with Course Outcomes

*   **CO1 (K2):** Students can now represent the sampled signal and visualize how ZOH and FOH reconstruct an approximate continuous-time signal from it. They understand the operation of these circuits.
*   **CO2 (K3):** Students can analyze and compare the frequency domain characteristics (magnitude and phase responses) of the ideal filter, ZOH, and FOH, understanding how these affect the reconstructed signal's fidelity.
*   **CO3 (K3):** Students understand that hold circuits bridge the gap between discrete-time and continuous-time domains, and their behavior can be analyzed using frequency-domain concepts related to the Z-transform ($z=e^{j\omega T}$).

---
This concludes the study notes for Topic: Zero-order and First-order hold circuits - Signal reconstruction.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
