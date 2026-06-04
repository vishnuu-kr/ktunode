---
title: "Properties (Proof not needed)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe52d"
status: "completed"
scrapedAt: "2026-05-23T17:52:36.092Z"
---
# Signals and Systems: Module 3 - Sampling and Discrete-Time Frequency Domain

This module delves into the crucial process of converting continuous-time signals into discrete-time signals through sampling, and then explores how to represent these discrete-time signals in the frequency domain. Understanding these concepts is fundamental to digital signal processing and is directly related to analyzing signals in the frequency domain (CO3) and interpreting transforms for discrete-time systems (CO4).

## 3.1 Sampling of Continuous-Time Signals to Discrete-Time Signals

Sampling is the process of converting a continuous-time signal, $x(t)$, into a discrete-time signal, $x[n]$, by taking measurements of $x(t)$ at regular intervals.

### 3.1.1 Ideal Sampling (Impulse Sampling)

*   **Definition:** Ideal sampling involves multiplying the continuous-time signal $x(t)$ with a train of Dirac delta functions, $\delta(t - nT_s)$, where $T_s$ is the sampling period and $n$ is an integer.

    $x_s(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT_s) = \sum_{n=-\infty}^{\infty} x[n] \delta(t - nT_s)$

    Here, $x[n] = x(nT_s)$ represents the sampled values of the continuous-time signal.

*   **Key Concept:** The continuous-time signal $x(t)$ is replaced by a sequence of impulses, where the amplitude of each impulse is proportional to the value of the continuous-time signal at the sampling instant.

*   **Frequency Domain Representation:** The frequency domain representation of the sampled signal $x_s(t)$ is a periodic repetition of the frequency spectrum of the original signal $x(t)$.

    $X_s(j\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X(j(\omega - k\omega_s))$

    where $X(j\omega)$ is the Fourier Transform of $x(t)$, and $\omega_s = \frac{2\pi}{T_s}$ is the sampling frequency.

*   **Sampling Theorem (Nyquist-Shannon Sampling Theorem):** To perfectly reconstruct a band-limited continuous-time signal $x(t)$ from its samples, the sampling frequency $\omega_s$ must be greater than twice the maximum frequency component of $x(t)$.

    $\omega_s > 2\omega_{max}$  or  $f_s > 2f_{max}$

    where $\omega_{max}$ is the maximum angular frequency and $f_{max}$ is the maximum frequency. The minimum required sampling frequency is called the Nyquist rate ($2f_{max}$).

*   **Aliasing:** If the sampling frequency is less than the Nyquist rate ($\omega_s < 2\omega_{max}$), the repeated spectra in the frequency domain of the sampled signal will overlap, causing aliasing. This means that high-frequency components in the original signal masquerade as lower frequencies in the sampled signal, leading to distortion that cannot be recovered.

    *   **Example:** Imagine trying to determine the speed of a spinning wheel by looking at it through a strobe light. If the strobe light flashes too slowly, the wheel might appear to be spinning slower or even backward. This is analogous to aliasing.

*   **Anti-aliasing Filter:** To prevent aliasing, a low-pass filter (anti-aliasing filter) is often applied to the continuous-time signal *before* sampling. This filter removes or attenuates frequency components above $\omega_s/2$.

### 3.1.2 Practical Sampling (Impulse train sampling)

*   **Definition:** In practice, we cannot implement ideal impulse sampling directly. Instead, we use a train of narrow rectangular pulses of width $T_s$ and amplitude $1/T_s$ to approximate impulse sampling.

    $x_p(t) = x(t) \sum_{n=-\infty}^{\infty} p_T(t - nT_s)$

    where $p_T(t)$ is a rectangular pulse of duration $T$. The sampled signal is then obtained by multiplying $x(t)$ with this pulse train.

*   **Key Concept:** The sampled signal is essentially a sequence of pulses, where the shape of each pulse is the original signal $x(t)$ at the sampling instant, and the pulse width is $T$.

*   **Frequency Domain Representation:** The frequency spectrum of the practical sampled signal $x_p(t)$ is similar to the ideal sampled signal but with a modification due to the sinc function shape of the rectangular pulse's Fourier Transform. This results in a modulation of the repeated spectra of $x(t)$.

    $X_p(j\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X(j(\omega - k\omega_s)) P(j(\omega - k\omega_s))$

    where $P(j\omega)$ is the Fourier Transform of the pulse $p_T(t)$, which is a sinc function.

*   **Reconstruction:** Reconstruction of the original signal from its samples is typically done using a Sample-and-Hold circuit followed by a reconstruction filter. A low-pass filter with a cutoff frequency below $\omega_s/2$ is used to smooth out the sampled pulses and approximate the original continuous-time signal.

## 3.2 Frequency Domain Representation of Discrete-Time Signals

Once a signal is sampled, we move from the continuous-time frequency domain ($j\omega$) to the discrete-time frequency domain.

### 3.2.1 Discrete-Time Fourier Transform (DTFT)

*   **Definition:** The DTFT of a discrete-time signal $x[n]$ is given by:

    $X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}$

    where $\omega$ is the discrete-time frequency, which is a dimensionless quantity. The frequency variable $\omega$ is periodic with a period of $2\pi$. This means that $X(e^{j\omega}) = X(e^{j(\omega + 2\pi k)})$ for any integer $k$.

*   **Key Concepts:**
    *   **Periodicity:** The DTFT of a discrete-time signal is always periodic with period $2\pi$ in the frequency domain.
    *   **Range of Frequency:** The relevant range of frequencies for a discrete-time signal is typically considered from $-\pi$ to $\pi$ (or $0$ to $2\pi$) because of the periodicity.
    *   **No Aliasing in Frequency Domain:** Unlike continuous-time sampling, the DTFT itself doesn't suffer from aliasing in the same way. The periodicity inherent in the DTFT directly reflects the consequence of sampling at a finite rate.

*   **Relationship to Continuous-Time Sampling:** If $x[n] = x(nT_s)$, then the DTFT $X(e^{j\omega})$ is related to the continuous-time Fourier Transform $X(j\Omega)$ by:

    $X(e^{j\omega}) = \sum_{k=-\infty}^{\infty} X(j(\frac{\omega}{T_s} - k\omega_s))$

    This equation shows that the DTFT is formed by summing up shifted versions of the continuous-time spectrum, scaled by the sampling period $T_s$. The term $X(j\frac{\omega}{T_s})$ represents the baseband spectrum of $x(t)$, and the summation accounts for the replicas caused by sampling. If $\omega_s > 2\omega_{max}$, these replicas do not overlap, and the original spectrum can be recovered by appropriately scaling and filtering.

### 3.2.2 Properties of the DTFT

These properties are analogous to the properties of the Continuous-Time Fourier Transform and are crucial for analyzing discrete-time signals and systems.

| Property           | Discrete-Time Domain ($x[n]$) | Frequency Domain ($X(e^{j\omega})$) | Textbook Reference(s)                                       |
| :----------------- | :---------------------------- | :--------------------------------- | :---------------------------------------------------------- |
| **Linearity**      | $ax[n] + by[n]$               | $aX(e^{j\omega}) + bY(e^{j\omega})$ | Oppenheim & Willsky (Sec. 10.2), Haykin (Sec. 3.3)          |
| **Time Shifting**  | $x[n - n_0]$                  | $e^{-j\omega n_0} X(e^{j\omega})$   | Oppenheim & Willsky (Sec. 10.2), Haykin (Sec. 3.3)          |
| **Frequency Shifting** | $e^{j\omega_0 n} x[n]$        | $X(e^{j(\omega - \omega_0)})$      | Oppenheim & Willsky (Sec. 10.2), Haykin (Sec. 3.3)          |
| **Time Reversal**  | $x[-n]$                       | $X(e^{-j\omega})$                  | Oppenheim & Willsky (Sec. 10.2), Haykin (Sec. 3.3)          |
| **Convolution**    | $x[n] * y[n]$                 | $X(e^{j\omega}) Y(e^{j\omega})$    | Oppenheim & Willsky (Sec. 10.2), Haykin (Sec. 3.3)          |
| **Parseval's Theorem** | $\sum_{n=-\infty}^{\infty} |x[n]|^2$ | $\frac{1}{2\pi} \int_{-\pi}^{\pi} |X(e^{j\omega})|^2 d\omega$ | Oppenheim & Willsky (Sec. 10.2), Haykin (Sec. 3.3)          |
| **Multiplication** | $x[n]y[n]$                    | $\frac{1}{2\pi} \int_{-\pi}^{\pi} X(e^{j\theta}) Y(e^{j(\omega - \theta)}) d\theta$ (Convolution in frequency) | Oppenheim & Willsky (Sec. 10.2), Haykin (Sec. 3.3)          |
| **Differentiation in Frequency** | $n x[n]$ | $j \frac{d}{d\omega} X(e^{j\omega})$ | Oppenheim & Willsky (Sec. 10.2), Haykin (Sec. 3.3)          |
| **Summation**      | $\sum_{k=-\infty}^{n} x[k]$   | $\frac{1}{1 - e^{-j\omega}} X(e^{j\omega}) + \pi X(e^{j0}) \delta(\omega \mod 2\pi)$ | Oppenheim & Willsky (Sec. 10.2)                           |
| **Duality**        | (Applies more directly to Z-transform) | (Analogous relationships exist) | (Refer to specific Z-transform duality properties)        |

**Important Note on Real Signals:** For real signals $x[n]$, the DTFT $X(e^{j\omega})$ has conjugate symmetry:
$X(e^{j\omega}) = X^*(e^{-j\omega})$.
This implies that $|X(e^{j\omega})|$ is an even function of $\omega$, and $\angle X(e^{j\omega})$ is an odd function of $\omega$.

### 3.2.3 The Discrete Fourier Transform (DFT)

*   **Definition:** While the DTFT represents the frequency content of an *infinite-duration* discrete-time signal, the DFT is used to represent the frequency content of a *finite-duration* discrete-time signal. It samples the DTFT at a finite number of frequencies. For a finite-duration sequence $x[n]$ of length $N$ (i.e., $x[n]$ is non-zero only for $0 \leq n \leq N-1$), the $N$-point DFT is:

    $X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi}{N} k n}$, for $k = 0, 1, \dots, N-1$.

*   **Key Concepts:**
    *   **Finite Duration:** The DFT is applicable to finite-length sequences.
    *   **Discrete Frequencies:** The DFT provides the spectrum at $N$ discrete frequency points, corresponding to frequencies $k \frac{2\pi}{N}$ for $k = 0, 1, \dots, N-1$.
    *   **Periodicity:** The DFT itself is periodic with period $N$ in the index $k$.
    *   **Relationship to DTFT:** The DFT can be viewed as samples of the DTFT of a finite-duration sequence, where the sequence is implicitly assumed to be zero outside the given finite duration. If the original infinite sequence has duration $N$, and we choose $N$ samples for the DFT, this is equivalent to taking $N$ samples of the DTFT. If $N$ is chosen to be greater than or equal to the actual duration of the signal, zero-padding can be used to get more detailed frequency information (smoother spectrum).

*   **Inverse DFT (IDFT):** The original finite-duration sequence can be perfectly recovered from its DFT using the IDFT:

    $x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{j \frac{2\pi}{N} k n}$, for $n = 0, 1, \dots, N-1$.

*   **Properties of the DFT:** The DFT shares many of the same properties as the DTFT, with slight modifications due to its finite nature and discrete frequency representation. These include linearity, time shifting, frequency shifting, convolution (circular convolution), and Parseval's theorem.

## Practice Questions and Exercises

1.  **Sampling and Aliasing:**
    A continuous-time signal $x(t) = \cos(200\pi t)$ is sampled at a sampling frequency of $f_s = 300$ Hz.
    *   What is the frequency of the sampled signal in the discrete-time domain?
    *   If the original signal were $x(t) = \cos(500\pi t)$ and sampled at $f_s = 300$ Hz, what frequency would appear in the sampled signal? Explain why.

    **Answer:**
    *   Original frequency $f = 100$ Hz. Sampling frequency $f_s = 300$ Hz. Since $f_s > 2f$ (300 > 200), there is no aliasing. The discrete-time frequency $\omega = 2\pi f / f_s = 2\pi (100) / 300 = 2\pi/3$ radians/sample. The frequency in Hz in the discrete domain is $f_{discrete} = f = 100$ Hz (but it's important to think in terms of normalized frequency or angular frequency).
    *   Original frequency $f = 250$ Hz. Sampling frequency $f_s = 300$ Hz. Here, $f_s < 2f$ (300 < 500), so aliasing will occur. The sampled frequency will appear as $|f - kf_s|$, where $k$ is an integer such that the result is within $[0, f_s/2]$.
        For $f = 250$ Hz and $f_s = 300$ Hz:
        $|250 - k \times 300|$.
        If $k=1$, $|250 - 300| = |-50| = 50$ Hz.
        So, the 250 Hz component will appear as 50 Hz.

2.  **DTFT Property:**
    Let $x[n]$ be a discrete-time signal with DTFT $X(e^{j\omega})$. Find the DTFT of $y[n] = x[n-2]$.

    **Answer:** Using the time-shifting property, if $x[n]$ has DTFT $X(e^{j\omega})$, then $x[n-n_0]$ has DTFT $e^{-j\omega n_0} X(e^{j\omega})$.
    Here, $n_0 = 2$. Therefore, the DTFT of $y[n] = x[n-2]$ is $e^{-j2\omega} X(e^{j\omega})$.

3.  **DFT Example:**
    Compute the 4-point DFT of the sequence $x[n] = \{1, 2, 3, 4\}$ for $n=0, 1, 2, 3$.

    **Answer:** Using the DFT formula $X[k] = \sum_{n=0}^{3} x[n] e^{-j \frac{2\pi}{4} k n}$:
    $X[0] = 1 \cdot e^0 + 2 \cdot e^0 + 3 \cdot e^0 + 4 \cdot e^0 = 1+2+3+4 = 10$.
    $X[1] = 1 \cdot e^{-j \pi/2} + 2 \cdot e^{-j \pi} + 3 \cdot e^{-j 3\pi/2} + 4 \cdot e^{-j 2\pi}$
           $= 1(-j) + 2(-1) + 3(j) + 4(1) = -j - 2 + 3j + 4 = 2 + 2j$.
    $X[2] = 1 \cdot e^{-j \pi} + 2 \cdot e^{-j 2\pi} + 3 \cdot e^{-j 3\pi} + 4 \cdot e^{-j 4\pi}$
           $= 1(-1) + 2(1) + 3(-1) + 4(1) = -1 + 2 - 3 + 4 = 2$.
    $X[3] = 1 \cdot e^{-j 3\pi/2} + 2 \cdot e^{-j 3\pi} + 3 \cdot e^{-j 9\pi/2} + 4 \cdot e^{-j 6\pi}$
           $= 1(j) + 2(-1) + 3(-j) + 4(1) = j - 2 - 3j + 4 = 2 - 2j$.
    So, $X[k] = \{10, 2+2j, 2, 2-2j\}$.

## Important Points to Remember

*   **Sampling is irreversible without proper conditions:** Aliasing destroys information, making perfect reconstruction impossible if the sampling rate is too low.
*   **Nyquist rate is a minimum:** For perfect reconstruction of band-limited signals, the sampling frequency *must exceed* twice the maximum frequency.
*   **DTFT for infinite sequences, DFT for finite sequences:** Understand when to use each transform.
*   **Periodicity of DTFT:** The frequency domain for discrete-time signals is inherently periodic with period $2\pi$.
*   **Properties are key:** Mastering the properties of the DTFT (and DFT) allows for efficient analysis of discrete-time signals and systems.
*   **Real signals and conjugate symmetry:** For real signals, the magnitude spectrum is even, and the phase spectrum is odd.

## Alignment with Course Outcomes

*   **CO1 (Classify signals and perform operations):** This module directly addresses the classification of signals as continuous or discrete and the fundamental operation of sampling.
*   **CO3 (Analyze signals in frequency domain):** The entire second half of the module is dedicated to representing discrete-time signals in the frequency domain using DTFT and DFT, and understanding their properties.
*   **CO4 (Interpret transforms for systems):** While this module focuses on signal representation, the understanding of DTFT and DFT is foundational for analyzing discrete-time LTI systems in the frequency domain, which is a core aspect of CO4. The properties of DTFT, especially convolution, are directly used in system analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
