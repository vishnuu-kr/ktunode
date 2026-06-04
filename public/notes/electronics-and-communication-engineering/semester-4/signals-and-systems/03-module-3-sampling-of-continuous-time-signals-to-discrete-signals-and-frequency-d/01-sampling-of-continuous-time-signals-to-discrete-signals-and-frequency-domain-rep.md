---
title: "Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe522"
status: "completed"
scrapedAt: "2026-05-23T17:52:28.464Z"
---
# Signals and Systems: Module 3 - Sampling and Discrete-Time Frequency Domain Representation

This module delves into the fundamental process of converting continuous-time signals into discrete-time signals through sampling, and subsequently explores how to represent these discrete-time signals in the frequency domain. This is a crucial bridge between the analog and digital worlds of signal processing.

---

## 1. Sampling of Continuous-Time Signals to Discrete Signals

### 1.1 Introduction to Sampling

*   **Definition:** Sampling is the process of converting a continuous-time signal, $x(t)$, into a discrete-time signal, $x[n]$, by taking measurements of $x(t)$ at regular intervals of time.
*   **Sampling Interval ($T_s$):** The time duration between successive samples.
*   **Sampling Frequency ($f_s$):** The number of samples taken per unit time. $f_s = 1/T_s$.
*   **Sampling Period:** Same as sampling interval, $T_s$.
*   **Sampling Rate:** Same as sampling frequency, $f_s$.

**Key Concept:** The core idea is to represent an infinite number of points in a continuous signal with a finite number of points at discrete time instants.

### 1.2 The Sampling Process Mathematically

*   **Impulse Train Sampling:** The ideal sampling process can be modeled as multiplying the continuous-time signal $x(t)$ with an impulse train $\sum_{n=-\infty}^{\infty} \delta(t - nT_s)$.
    *   The sampled signal, $x_s(t)$, is given by:
        $x_s(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT_s) = \sum_{n=-\infty}^{\infty} x(nT_s) \delta(t - nT_s)$
    *   Let $x[n] = x(nT_s)$ denote the discrete-time sequence of samples.
    *   So, $x_s(t) = \sum_{n=-\infty}^{\infty} x[n] \delta(t - nT_s)$.

*   **Graphical Representation:**
    *   A continuous-time signal $x(t)$.
    *   An impulse train with impulses at $0, T_s, 2T_s, -T_s, -2T_s, \ldots$.
    *   The sampled signal $x_s(t)$ is an impulse train where the amplitude of each impulse is the value of $x(t)$ at the time of the impulse.

### 1.3 Frequency Domain Representation of Sampling

*   **Fourier Transform of the Impulse Train:**
    *   The Fourier Transform of an impulse train $\sum_{n=-\infty}^{\infty} \delta(t - nT_s)$ is a periodic impulse train in the frequency domain:
        $\mathcal{F}\left\{\sum_{n=-\infty}^{\infty} \delta(t - nT_s)\right\} = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} \delta\left(f - kf_s\right)$, where $f_s = 1/T_s$.
    *   This means the spectrum of the impulse train consists of impulses at integer multiples of the sampling frequency ($0, \pm f_s, \pm 2f_s, \ldots$), each with a strength of $1/T_s$.

*   **Fourier Transform of the Sampled Signal:**
    *   Using the multiplication property of Fourier Transforms, $\mathcal{F}\{x(t)g(t)\} = X(f) * G(f)$ (convolution in the frequency domain).
    *   Let $g(t) = \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$.
    *   $\mathcal{F}\{x_s(t)\} = \mathcal{F}\{x(t)g(t)\} = X(f) * \frac{1}{T_s} \sum_{k=-\infty}^{\infty} \delta\left(f - kf_s\right)$.
    *   Convolution with impulses shifts the spectrum.
    *   $X_s(f) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X\left(f - kf_s\right)$.

*   **Interpretation:** The spectrum of the sampled signal $X_s(f)$ is a scaled and replicated version of the original signal's spectrum $X(f)$, shifted by integer multiples of the sampling frequency $f_s$.

### 1.4 The Nyquist-Shannon Sampling Theorem

*   **Statement:** To perfectly reconstruct a continuous-time signal $x(t)$ from its samples $x[n]$ without loss of information, the sampling frequency $f_s$ must be greater than twice the maximum frequency component $W$ present in the signal $x(t)$.
    *   $f_s > 2W$
*   **Nyquist Rate:** The minimum sampling rate required for perfect reconstruction, which is $2W$.
*   **Nyquist Frequency:** Half the sampling rate, $f_s/2$. The highest frequency that can be unambiguously represented by the sampling process.

**Importance:** This theorem is fundamental to digital signal processing. It establishes the condition under which the analog signal can be perfectly recovered from its discrete samples.

### 1.5 Aliasing

*   **Definition:** Aliasing occurs when the sampling frequency $f_s$ is less than the Nyquist rate ($f_s \le 2W$). In this case, the replicated spectra in $X_s(f)$ overlap.
*   **Effect:** When spectra overlap, information from higher frequencies "folds back" into the lower frequency range, distorting the original signal. It becomes impossible to distinguish between a low-frequency component and a higher-frequency component that has been aliased to that low frequency.

*   **Graphical Illustration of Aliasing:**
    *   Consider a signal $x(t)$ with a spectrum $X(f)$ that extends up to $W$.
    *   If $f_s$ is too low, the shifted spectra $X(f - kf_s)$ will overlap.
    *   For example, if $f_s < 2W$, the spectrum around $f_s - W$ will overlap with the spectrum around $W$.

**Key Point:** To avoid aliasing, either the signal must be band-limited to $W$ and sampled at $f_s > 2W$, or the signal must be pre-filtered (anti-aliasing filter) to remove frequencies above $f_s/2$ before sampling.

### 1.6 Anti-Aliasing Filter

*   **Purpose:** A low-pass filter used before sampling to remove or attenuate frequencies in the continuous-time signal that are above $f_s/2$.
*   **Implementation:** This filter ensures that the signal meets the band-limited condition required by the Nyquist-Shannon Sampling Theorem, preventing aliasing.

### 1.7 Reconstruction of Continuous-Time Signal from Samples

*   **Process:** If the sampling theorem is satisfied ($f_s > 2W$), the original spectrum $X(f)$ can be recovered from $X_s(f)$ by:
    1.  **Ideal Low-Pass Filtering:** Applying an ideal low-pass filter with a cutoff frequency between $W$ and $f_s - W$. The filter should have a gain of $T_s$ in the passband ($|f| \le W$) and zero gain elsewhere.
    2.  **The Reconstruction Formula:** The reconstructed signal $x_{rec}(t)$ is given by:
        $x_{rec}(t) = \sum_{n=-\infty}^{\infty} x[n] \text{sinc}\left(\frac{t - nT_s}{T_s}\right)$, where $\text{sinc}(\tau) = \frac{\sin(\pi\tau)}{\pi\tau}$.
        This formula shows that the reconstruction involves interpolating between the samples using sinc functions.

**Textbook References:**
*   Oppenheim & Willsky: Chapter 7 (Sampling) provides a thorough treatment of the sampling process, the Nyquist-Shannon theorem, and aliasing.
*   Haykin: Chapter 5 (Sampling Theory) covers similar concepts with a focus on practical aspects.
*   Lathi: Chapter 10 (Sampling of Band-Limited Signals) discusses the theoretical underpinnings.

---

## 2. Frequency Domain Representation of Discrete-Time Signals

### 2.1 Introduction to Discrete-Time Fourier Transform (DTFT)

*   **Definition:** The DTFT is the frequency domain representation of a discrete-time signal $x[n]$. It transforms a time-domain sequence into a continuous function of frequency.
*   **Formula:**
    $X(e^{j\omega}) = \mathcal{F}\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}$
    where:
    *   $X(e^{j\omega})$ is the DTFT of $x[n]$.
    *   $\omega$ is the angular frequency, with units of radians per sample.
    *   The frequency is periodic with period $2\pi$. This means $X(e^{j\omega}) = X(e^{j(\omega + 2\pi k)})$ for any integer $k$.

*   **Key Property:** The DTFT is a continuous function of frequency, and it is periodic with a period of $2\pi$ radians/sample. This periodicity is a direct consequence of the underlying sampling process.

### 2.2 Properties of the DTFT

The DTFT shares many properties with the continuous-time Fourier Transform, but with modifications due to the discrete nature of the signal and the periodicity of the frequency response.

*   **Linearity:** If $y[n] = ax[n] + b v[n]$, then $Y(e^{j\omega}) = aX(e^{j\omega}) + bV(e^{j\omega})$.
*   **Time Shifting:** If $y[n] = x[n-n_0]$, then $Y(e^{j\omega}) = e^{-j\omega n_0} X(e^{j\omega})$.
    *   This property reflects a linear phase shift in the frequency domain.
*   **Frequency Shifting:** If $y[n] = e^{j\omega_0 n} x[n]$, then $Y(e^{j\omega}) = X(e^{j(\omega - \omega_0)})$.
    *   This corresponds to a shift in the frequency spectrum.
*   **Conjugation:** If $y[n] = x^*[n]$, then $Y(e^{j\omega}) = X^*(e^{-j\omega})$.
*   **Conjugate Symmetry:** If $x[n]$ is real, then $X(e^{j\omega})$ has conjugate symmetry: $X(e^{j\omega}) = X^*(e^{-j\omega})$. This implies that the magnitude response $|X(e^{j\omega})|$ is even, and the phase response $\angle X(e^{j\omega})$ is odd.
*   **Time Reversal:** If $y[n] = x[-n]$, then $Y(e^{j\omega}) = X(e^{-j\omega})$.
*   **Differentiation (in Frequency):** $\mathcal{F}\{n x[n]\} = j \frac{d}{d\omega} X(e^{j\omega})$.
*   **Summation:** If $y[n] = \sum_{k=-\infty}^{n} x[k]$, then $Y(e^{j\omega}) = \frac{1}{1-e^{-j\omega}} X(e^{j\omega}) + \pi X(e^{j0}) \delta(\omega)$. (This is related to the accumulation property). A simpler form is $Y(e^{j\omega}) = \frac{Y(e^{j\omega})}{1-e^{-j\omega}} X(e^{j\omega})$.
*   **Convolution:** If $y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$, then $Y(e^{j\omega}) = X(e^{j\omega}) H(e^{j\omega})$.
    *   This is the fundamental property that makes frequency-domain analysis powerful for LTI systems.

**Important Note on Periodicity:** The frequency variable $\omega$ is usually normalized to be in the range $[-\pi, \pi]$ or $[0, 2\pi]$. The behavior outside this range repeats.

### 2.3 Inverse Discrete-Time Fourier Transform (IDTFT)

*   **Definition:** The process of recovering the discrete-time signal $x[n]$ from its DTFT $X(e^{j\omega})$.
*   **Formula:**
    $x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} X(e^{j\omega}) e^{j\omega n} d\omega$

### 2.4 Relationship between CTFT and DTFT

*   **Sampling in Time:** When we sample $x(t)$ to get $x[n] = x(nT_s)$, the DTFT of $x[n]$ is related to the CTFT of $x(t)$ as:
    $X(e^{j\omega}) = \sum_{k=-\infty}^{\infty} X_{CT}\left(\frac{\omega}{T_s} - k f_s\right)$
    where $X_{CT}(f)$ is the CTFT of $x(t)$, and $\omega$ is the normalized angular frequency (radians/sample).
    *   The relationship can be written as:
        $X(e^{j\omega}) = T_s \sum_{k=-\infty}^{\infty} X_{CT}\left(\frac{\omega - 2\pi k}{T_s}\right)$
    *   If the sampling frequency is $f_s$, then $\omega = 2\pi f / f_s$. Thus, $f = \omega f_s / 2\pi$.
    *   $X(e^{j\omega}) = \sum_{k=-\infty}^{\infty} X_{CT}(f) e^{-j\omega n}$
    *   $X(e^{j\omega})$ represents the sum of the original continuous-time spectrum $X_{CT}(f)$, scaled and shifted by multiples of $f_s$.

**Crucial Connection:** The DTFT $X(e^{j\omega})$ is essentially the sampled version of the continuously shifted spectra of the original continuous-time signal $x(t)$. The periodicity of $X(e^{j\omega})$ with period $2\pi$ directly arises from the replicated spectra in the frequency domain after sampling.

### 2.5 Discrete Fourier Series (DFS) and Discrete Fourier Transform (DFT)

While DTFT is for infinite-duration signals, practical implementations often deal with finite-duration signals.

*   **Discrete Fourier Series (DFS):** For periodic discrete-time signals $x[n]$ with period $N$, the DFS represents the signal as a sum of harmonically related complex exponentials.
    *   $x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j \frac{2\pi k}{N} n}$
    *   $X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi k}{N} n}$
    *   $X[k]$ are the Fourier coefficients, representing the frequency content at discrete frequencies $k \frac{2\pi}{N}$.

*   **Discrete Fourier Transform (DFT):** For finite-duration discrete-time signals $x[n]$ of length $N$ (i.e., $x[n] = 0$ for $n < 0$ or $n \ge N$), the DFT provides a finite set of frequency components.
    *   $X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi k}{N} n}$, for $k = 0, 1, \ldots, N-1$.
    *   The DFT is a finite discrete sequence representing the sampled version of the DTFT at $N$ equally spaced frequencies.
    *   The inverse DFT (IDFT) reconstructs the time-domain sequence from the DFT coefficients.

**Relevance:** The DFT is the workhorse of digital signal processing because it can be computed efficiently using the Fast Fourier Transform (FFT) algorithm. It's the practical tool for analyzing finite-length signals in the frequency domain.

**Textbook References:**
*   Oppenheim & Willsky: Chapter 10 (The Discrete-Time Fourier Transform) covers DTFT and its properties, and Chapter 9 (The z-Transform) lays the groundwork for spectral analysis. Chapter 12 discusses the DFT.
*   Haykin: Chapter 6 (The z-Transform) and Chapter 7 (The Discrete Fourier Transform).
*   Lathi: Chapter 11 (Sampling of Band-Limited Signals) relates to the DTFT, and Chapter 12 covers the DFT.
*   Anand Kumar: Chapters on Fourier Transforms for Discrete-Time signals.
*   Ziemer: Chapters on Discrete-Time Fourier Analysis.

---

## 3. Practice Questions and Exercises

**Question 1:**
A continuous-time signal $x(t)$ has a Fourier Transform $X(f)$ which is non-zero only for $-5 \text{ kHz} \le f \le 5 \text{ kHz}$. What is the minimum sampling rate $f_s$ required to avoid aliasing?
**(a) 5 kHz**
**(b) 10 kHz**
**(c) 20 kHz**
**(d) 2.5 kHz**

**Answer:**
The maximum frequency component in $x(t)$ is $W = 5 \text{ kHz}$. According to the Nyquist-Shannon Sampling Theorem, the minimum sampling rate $f_s$ must be greater than $2W$.
$f_s > 2 \times 5 \text{ kHz} = 10 \text{ kHz}$.
Therefore, the minimum sampling rate is just above 10 kHz. The closest option that satisfies this condition is 10 kHz (though technically it must be *greater than* 10 kHz for perfect reconstruction without overlap, the question asks for the *minimum rate*, which is often interpreted as the Nyquist rate for threshold purposes). In multiple-choice, 10 kHz is the Nyquist rate. If the question implies "strictly greater than", then 20 kHz would be a safe choice. Given typical context, 10 kHz (Nyquist rate) is the expected answer for the *minimum* threshold. Let's re-evaluate. The theorem says $f_s > 2W$. So $f_s$ must be *strictly* greater than 10 kHz. Among the choices, 10 kHz is the Nyquist rate. The next common choice is usually $2 \times \text{Nyquist rate}$. Let's assume the question is asking for the Nyquist rate itself.
Correct Answer: (b) 10 kHz (This represents the Nyquist Rate, the minimum frequency at which sampling can occur *without* aliasing, if the signal is bandlimited to exactly W. If the question implies practical implementation, often a higher rate like 20 kHz is used).

Let's refine the answer based on strict inequality. If $f_s = 10$ kHz, and $W=5$ kHz, then $f_s = 2W$. In this case, the replicated spectra just touch at the Nyquist frequency $f_s/2 = 5$ kHz without overlapping. However, perfect reconstruction requires $f_s > 2W$. Therefore, the minimum sampling rate *required* is infinitesimally larger than 10 kHz. In a multiple-choice setting, if 10 kHz is an option, it often refers to the Nyquist rate. If the question implies a practical margin, 20 kHz would be more appropriate. Assuming the question seeks the theoretical threshold:
**Refined Answer:** (b) 10 kHz (This is the Nyquist Rate. For unambiguous reconstruction, $f_s$ must be *greater than* 10 kHz. However, in MCQ, 10 kHz is often the intended answer for the threshold.)

**Question 2:**
If $x[n]$ is a discrete-time signal with DTFT $X(e^{j\omega})$, what is the DTFT of $y[n] = x[n-2]$?
**(a) $e^{j2\omega} X(e^{j\omega})$**
**(b) $e^{-j2\omega} X(e^{j\omega})$**
**(c) $X(e^{j(\omega-2)})$**
**(d) $X(e^{j(\omega+2)})$**

**Answer:**
This is a direct application of the time-shifting property of the DTFT: If $y[n] = x[n-n_0]$, then $Y(e^{j\omega}) = e^{-j\omega n_0} X(e^{j\omega})$. Here, $n_0 = 2$.
Correct Answer: (b) $e^{-j2\omega} X(e^{j\omega})$

**Question 3:**
Consider a continuous-time signal $x(t) = \cos(2\pi \times 1000 t)$. If this signal is sampled at a rate $f_s = 1500$ Hz, what is the frequency of the resulting discrete-time signal in the normalized angular frequency domain?
**(a) $\pi/3$ radians/sample**
**(b) $\pi/2$ radians/sample**
**(c) $2\pi/3$ radians/sample**
**(d) $\pi$ radians/sample**

**Answer:**
The original signal has a frequency $f_0 = 1000$ Hz.
The sampling rate is $f_s = 1500$ Hz.
The discrete-time signal has samples $x[n] = \cos(2\pi f_0 n T_s)$.
The normalized angular frequency $\omega$ is related to the analog frequency $f$ and sampling rate $f_s$ by $\omega = 2\pi f / f_s$.
Here, $f = 1000$ Hz and $f_s = 1500$ Hz.
$\omega = 2\pi \times (1000 \text{ Hz} / 1500 \text{ Hz}) = 2\pi \times (2/3) = 4\pi/3$ radians/sample.

Since the DTFT is periodic with period $2\pi$, we can represent $4\pi/3$ by an equivalent frequency in the range $[-\pi, \pi]$ or $[0, 2\pi]$.
$4\pi/3$ is equivalent to $4\pi/3 - 2\pi = -2\pi/3$.
Alternatively, $4\pi/3$ is already in $[0, 2\pi]$. However, the options suggest a value within $[0, \pi]$ or related. Let's recheck the options. The options are typically in $[-\pi, \pi]$ or $[0, 2\pi]$. $4\pi/3$ is a valid normalized angular frequency.

Let's consider the physical frequency $f_{discrete}$ in the discrete signal $x[n] = \cos(\omega n)$. This $\omega$ is the normalized angular frequency.
$x[n] = \cos(2\pi f_0 T_s n)$.
$\omega = 2\pi f_0 T_s = 2\pi (f_0/f_s)$.
$\omega = 2\pi (1000/1500) = 2\pi (2/3) = 4\pi/3$.

If we consider the frequency in the range $[0, 2\pi]$, $4\pi/3$ is correct.
However, often questions imply the fundamental frequency range $[-\pi, \pi]$.
$4\pi/3$ radians/sample is the same as $-2\pi/3$ radians/sample.
$|-2\pi/3|$ is $2\pi/3$. Let's check if $2\pi/3$ is an option. Yes, it is (c).

The original analog frequency is $f_0 = 1000$ Hz.
The sampling frequency is $f_s = 1500$ Hz.
The frequency of the discrete-time signal, in Hz, is $f_d = f_0 \pmod{f_s}$.
This would be $1000 \pmod{1500} = 1000$ Hz.
The normalized angular frequency is $\omega = 2\pi f_d / f_s = 2\pi (1000/1500) = 2\pi (2/3) = 4\pi/3$.
$4\pi/3$ radians/sample.
The options provided might imply a representation within the principal range $[-\pi, \pi]$.
$4\pi/3$ is equivalent to $4\pi/3 - 2\pi = -2\pi/3$.
The magnitude of this frequency is $2\pi/3$.

**Re-evaluation of the question and options:** The question asks for "the frequency... in the normalized angular frequency domain." The calculated $\omega = 4\pi/3$. If the options expect a value in the primary range $[-\pi, \pi]$, then $-2\pi/3$ is the equivalent, and its magnitude is $2\pi/3$.

Let's assume the options are values for $\omega$.
$4\pi/3$ radians/sample.
Is $4\pi/3$ directly an option? No.
Is there an equivalent frequency? Yes, $4\pi/3 \equiv -2\pi/3 \pmod{2\pi}$.
So, $-2\pi/3$ is a valid normalized angular frequency.
The magnitude of this frequency is $2\pi/3$.
Given the options, it's most likely that the question expects the value $2\pi/3$, which is related to $-2\pi/3$ (an equivalent frequency in the primary range).

Correct Answer: (c) $2\pi/3$ radians/sample (This implies the magnitude of the fundamental frequency component in the primary range $[-\pi, \pi]$).

---

## 4. Important Points to Remember

*   **Sampling Theorem is Crucial:** Always remember $f_s > 2W$ to avoid aliasing.
*   **Aliasing:** If you sample too slowly, high frequencies masquerade as low frequencies.
*   **DTFT Periodicity:** The frequency response of a discrete-time signal is periodic with period $2\pi$ radians/sample.
*   **Time Shifting in DTFT:** Causes a linear phase shift $e^{-j\omega n_0}$.
*   **Frequency Shifting in DTFT:** Causes a shift in the spectrum $X(e^{j(\omega-\omega_0)})$.
*   **Convolution in Time Domain:** Becomes Multiplication in Frequency Domain ($Y(e^{j\omega}) = X(e^{j\omega})H(e^{j\omega})$).
*   **DFT:** The practical tool for finite-length signals, allowing for efficient computation via FFT.

---

## 5. Module Summary

This module has provided the foundational knowledge for converting continuous-time signals into discrete-time signals through sampling. We learned about the Nyquist-Shannon Sampling Theorem and the critical concept of aliasing, emphasizing the importance of selecting an appropriate sampling rate. We then explored the frequency-domain representation of these discrete-time signals using the Discrete-Time Fourier Transform (DTFT), understanding its properties, periodicity, and its relationship to the continuous-time Fourier Transform. Finally, we touched upon the Discrete Fourier Series (DFS) and Discrete Fourier Transform (DFT) as practical tools for analyzing finite-duration signals. This module is essential for understanding how digital signal processing techniques operate on real-world signals.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
