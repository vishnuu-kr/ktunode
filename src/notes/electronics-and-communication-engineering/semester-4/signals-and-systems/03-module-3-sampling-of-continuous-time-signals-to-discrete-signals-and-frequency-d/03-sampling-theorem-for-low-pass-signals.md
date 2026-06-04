---
title: "Sampling 
theorem for low pass signals"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe524"
status: "completed"
scrapedAt: "2026-05-23T17:52:29.750Z"
---
# Signals and Systems: Module 3 - Sampling of Continuous-Time Signals to Discrete-Time Signals

## Topic: Sampling Theorem for Low-Pass Signals

This module focuses on the fundamental process of converting continuous-time signals into discrete-time signals through sampling. Understanding the sampling theorem is crucial for this conversion, as it dictates the conditions under which this process can be performed without loss of information. This topic directly contributes to **CO1** (classifying signals) and **CO3** (analyzing signals in the frequency domain).

### 1. Introduction to Sampling

Sampling is the process of converting a continuous-time signal $x(t)$ into a discrete-time signal $x[n]$ by taking measurements of $x(t)$ at regular intervals.

*   **Continuous-Time Signal:** A signal defined for all values of time $t$.
*   **Discrete-Time Signal:** A signal defined only at discrete points in time, typically denoted by $n$, where $n$ is an integer.
*   **Sampling Period ($T_s$):** The time interval between consecutive samples.
*   **Sampling Frequency ($f_s$ or $\Omega_s$):** The number of samples taken per unit of time. $f_s = 1/T_s$. In angular frequency, $\Omega_s = 2\pi f_s = 2\pi/T_s$.

### 2. The Ideal Sampling Process

Mathematically, ideal sampling can be represented by multiplying the continuous-time signal $x(t)$ with an impulse train $\sum_{n=-\infty}^{\infty} \delta(t - nT_s)$.

$$ x_s(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT_s) = \sum_{n=-\infty}^{\infty} x(nT_s) \delta(t - nT_s) $$

This process generates a train of impulses, where the amplitude of each impulse is proportional to the value of the continuous-time signal at the sampling instant.

**Textbook Reference:** Oppenheim & Willsky (2nd ed.) extensively covers this mathematical representation in Chapter 1.

### 3. Frequency Domain Representation of Sampling

The effect of sampling on the spectrum of a signal is crucial.

*   **Spectrum of $x(t)$:** Let $X(j\omega)$ be the Fourier Transform of $x(t)$.
*   **Spectrum of the Impulse Train:** The Fourier Transform of an impulse train $\sum_{n=-\infty}^{\infty} \delta(t - nT_s)$ is another impulse train in the frequency domain: $\frac{2\pi}{T_s} \sum_{k=-\infty}^{\infty} \delta(\omega - k\Omega_s)$, where $\Omega_s = 2\pi/T_s$.
*   **Spectrum of the Sampled Signal ($x_s(t)$):** The Fourier Transform of the product of two signals is the convolution of their individual Fourier Transforms (scaled by $1/(2\pi)$ for continuous-time).

$$ X_s(j\omega) = \frac{1}{2\pi} [X(j\omega) * \left( \frac{2\pi}{T_s} \sum_{k=-\infty}^{\infty} \delta(\omega - k\Omega_s) \right)] $$

$$ X_s(j\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X\left(j\left(\omega - k\Omega_s\right)\right) $$

This equation reveals that the spectrum of the sampled signal $X_s(j\omega)$ is a scaled and shifted replica of the original signal's spectrum $X(j\omega)$. The replicas are centered at integer multiples of the sampling frequency $\Omega_s$.

**Visualization:**
Imagine the original spectrum $X(j\omega)$ as a shape. Sampling creates copies of this shape, shifted by $\pm \Omega_s, \pm 2\Omega_s, \pm 3\Omega_s, \ldots$, and scaled by $1/T_s$.

**Textbook Reference:** Haykin (2nd ed.) in Chapter 7 discusses the frequency-domain implications of sampling.

### 4. The Nyquist-Shannon Sampling Theorem

This is the cornerstone of sampling theory. It provides the condition required to perfectly reconstruct a continuous-time signal from its samples.

**Theorem Statement (for low-pass signals):**
A band-limited continuous-time signal $x(t)$ with no frequency components above $W$ Hz (i.e., $X(j\omega) = 0$ for $|\omega| > W$) can be perfectly reconstructed from its samples $x[n] = x(nT_s)$ if the sampling frequency $f_s$ is greater than twice the highest frequency $W$.

$$ f_s > 2W $$

or, in terms of angular frequencies:

$$ \Omega_s > 2W $$

where $W$ is the bandwidth of the signal in radians per second.

**Equivalently, in terms of sampling period:**

$$ T_s < \frac{1}{2W} $$

**Justification:**

Consider the spectrum of the sampled signal $X_s(j\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X\left(j\left(\omega - k\Omega_s\right)\right)$.

For perfect reconstruction, the replicated spectra in the frequency domain must not overlap. The original signal's spectrum $X(j\omega)$ is non-zero only for $|\omega| \le W$. The first replica is centered at $\Omega_s$ and extends from $\Omega_s - W$ to $\Omega_s + W$. The replica centered at $-\Omega_s$ extends from $-\Omega_s - W$ to $-\Omega_s + W$.

For no overlap, the lower edge of the first positive replica ($\Omega_s - W$) must be greater than the upper edge of the original spectrum ($W$).

$$ \Omega_s - W > W $$
$$ \Omega_s > 2W $$

If this condition is met, the spectra are distinct, and a low-pass filter can isolate the original spectrum $X(j\omega)$ from the sampled spectrum $X_s(j\omega)$.

**Textbook Reference:** Oppenheim & Willsky (2nd ed.) dedicates a significant section to the Sampling Theorem in Chapter 1. Lathi (2nd ed.) also provides a clear explanation in Chapter 10.

### 5. Implications of the Sampling Theorem

*   **Aliasing:** If the sampling frequency is *less* than twice the highest frequency component (i.e., $f_s < 2W$ or $\Omega_s < 2W$), the replicated spectra in the frequency domain will overlap. This overlap is called aliasing. When aliasing occurs, high-frequency components of the original signal are indistinguishable from low-frequency components in the sampled signal, leading to irreversible distortion.

    **Example:** If a signal contains frequencies up to 5 kHz, and we sample at 8 kHz, the Nyquist rate is 10 kHz. Since 8 kHz < 10 kHz, aliasing will occur. Frequencies above 4 kHz (i.e., $f_s/2$) will fold back into the range 0 to 4 kHz.

*   **Nyquist Rate:** The minimum sampling frequency required for a band-limited signal to avoid aliasing is called the Nyquist rate, which is $2W$.
*   **Nyquist Frequency:** The maximum frequency that can be unambiguously represented at a given sampling rate $f_s$ is $f_s/2$. This is also known as the folding frequency.

**Textbook Reference:** Anand Kumar (3rd ed.) emphasizes the concept of aliasing and the Nyquist rate in its sampling discussions.

### 6. Reconstruction of the Continuous-Time Signal

If the sampling theorem is satisfied, the original continuous-time signal $x(t)$ can be reconstructed from its samples $x[n]$ by passing the sampled signal $x_s(t)$ through an ideal low-pass filter.

*   **Low-Pass Filter:** A filter that allows frequencies below a certain cutoff frequency to pass and attenuates frequencies above it.
*   **Ideal Low-Pass Filter:** Has a perfectly flat passband and an infinitely sharp cutoff. Its frequency response is:

$$ H_{LPF}(j\omega) = \begin{cases} T_s & \text{if } |\omega| \le \Omega_s/2 \\ 0 & \text{if } |\omega| > \Omega_s/2 \end{cases} $$

*   **Reconstruction Process:** The output of the low-pass filter is:

$$ x_r(t) = x_s(t) * h_{LPF}(t) $$

$$ X_r(j\omega) = X_s(j\omega) H_{LPF}(j\omega) $$

$$ X_r(j\omega) = \left( \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X\left(j\left(\omega - k\Omega_s\right)\right) \right) H_{LPF}(j\omega) $$

When $H_{LPF}(j\omega)$ is chosen as above, and $\Omega_s > 2W$, the filter selects only the $k=0$ term, which is $X(j\omega)$, thus perfectly reconstructing the original signal:

$$ X_r(j\omega) = \frac{1}{T_s} X(j\omega) \cdot T_s = X(j\omega) \quad \text{for } |\omega| \le W $$

**Textbook Reference:** Ziemer (4th ed.) provides detailed explanations on the reconstruction process and the role of the interpolating filter.

### 7. Practical Considerations

*   **Ideal Low-Pass Filter is Unattainable:** In practice, ideal low-pass filters are not realizable. Realizable filters have transition bands where attenuation gradually increases. This means that if the sampling frequency is only slightly above the Nyquist rate, some aliasing might still occur, or a significant amount of signal energy might be attenuated if the cutoff frequency is too close to $W$.
*   **Anti-Aliasing Filter:** To prevent aliasing in practical systems, a continuous-time low-pass filter (called an anti-aliasing filter) is used *before* sampling. This filter removes or significantly attenuates frequencies above $f_s/2$ (or slightly less to account for the filter's transition band) to ensure the signal entering the sampler is effectively band-limited to meet the sampling theorem requirements.
*   **Quantization:** In digital signal processing, samples are not only discrete in time but also quantized in amplitude. This quantization process introduces another form of error.

**Textbook Reference:** Ambardar (2nd ed.) discusses practical aspects of sampling and the necessity of anti-aliasing filters.

### 8. Examples

**Example 1: Sampling a Sine Wave**
Let $x(t) = \sin(2\pi \cdot 1000t)$. The highest frequency component is $W = 1000$ Hz.
*   **Nyquist Rate:** $2W = 2000$ Hz.
*   **Case A: Sample at $f_s = 3000$ Hz.**
    Since $3000 > 2000$, the sampling theorem is satisfied. No aliasing will occur. The sampled signal will be $x[n] = \sin(2\pi \cdot 1000 \cdot n T_s) = \sin(2\pi \cdot 1000 \cdot n/3000) = \sin(2\pi \cdot n/3)$.
*   **Case B: Sample at $f_s = 1500$ Hz.**
    Since $1500 < 2000$, the sampling theorem is violated. Aliasing will occur. The effective frequency in the sampled signal will be $|f - k f_s|$ where $f=1000$ Hz. For $k=1$, $|1000 - 1 \cdot 1500| = |-500| = 500$ Hz. The sampled signal will appear as a 500 Hz sine wave, which is an aliased version of the original 1000 Hz signal.

**Example 2: Band-Limited Signal Spectrum**
Let $X(j\omega)$ be a rectangular pulse in the frequency domain, non-zero from $-\omega_0$ to $\omega_0$. So, $W = \omega_0$.
*   If $\Omega_s > 2\omega_0$, the sampled spectrum consists of non-overlapping replicas of $X(j\omega)$.
*   If $\Omega_s < 2\omega_0$, the replicas overlap, causing aliasing. The spectral content beyond $\Omega_s/2$ from the original spectrum is "folded" back into the $0$ to $\Omega_s/2$ range.

### 9. Practice Questions

1.  A continuous-time signal $x(t)$ has a Fourier Transform $X(j\omega)$ that is zero for $|\omega| > 5000$ rad/s. What is the minimum sampling frequency required to avoid aliasing?
    *   **Answer:** The bandwidth is $W = 5000$ rad/s. The Nyquist rate is $\Omega_s = 2W = 10000$ rad/s. The minimum sampling frequency in Hz is $f_s = \Omega_s / (2\pi) = 10000 / (2\pi) \approx 1591.5$ Hz.

2.  Consider a signal $x(t) = \cos(200\pi t) + \sin(400\pi t)$. What is the Nyquist sampling rate for this signal?
    *   **Answer:** The frequencies present are $f_1 = 100$ Hz (from $\cos(200\pi t)$) and $f_2 = 200$ Hz (from $\sin(400\pi t)$). The highest frequency is $W = 200$ Hz. The Nyquist rate is $2W = 400$ Hz.

3.  If a signal is sampled at $f_s = 1000$ Hz, what is the highest frequency component that can be represented without aliasing?
    *   **Answer:** The Nyquist frequency (or folding frequency) is $f_s/2 = 1000/2 = 500$ Hz.

4.  Explain the phenomenon of aliasing and how it can be prevented.
    *   **Answer:** Aliasing occurs when a continuous-time signal is sampled at a frequency below its Nyquist rate. This causes high-frequency components to be misrepresented as lower frequencies, leading to distortion. It can be prevented by sampling at a rate greater than or equal to twice the highest frequency component in the signal (Nyquist rate), and by using an anti-aliasing filter prior to sampling.

### 10. Important Points to Remember

*   **Sampling Theorem:** $f_s > 2W$ for perfect reconstruction of a band-limited signal.
*   **Nyquist Rate:** The minimum sampling rate ($2W$) required to avoid aliasing.
*   **Nyquist Frequency:** The maximum frequency ($f_s/2$) that can be represented without aliasing at a given sampling rate.
*   **Aliasing:** Occurs when $f_s < 2W$, leading to spectral overlap and distortion.
*   **Reconstruction:** Achieved using an ideal low-pass filter with a cutoff frequency of $f_s/2$, provided the sampling theorem is satisfied.
*   **Practicality:** Anti-aliasing filters are essential in real-world systems to prevent aliasing.

### 11. Alignment with Course Outcomes

*   **CO1 (K2):** This topic directly involves classifying signals based on their frequency content (band-limited) and understanding the process of converting continuous-time to discrete-time signals.
*   **CO3 (K3):** The core of sampling theory is analyzing the frequency-domain representation of sampled signals and understanding how sampling affects the spectrum, leading to the Nyquist criterion.

This module lays the groundwork for understanding how continuous-time signals are represented and processed in discrete-time systems, a fundamental concept in digital signal processing.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
