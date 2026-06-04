---
title: "Impulse Sampling"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 1: Analysis of Sampled Data Systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368c4"
status: "completed"
scrapedAt: "2026-05-23T16:35:54.442Z"
---
# DISCRETE TIME CONTROL SYSTEMS

## Module 1: Analysis of Sampled Data Systems

### Topic: Impulse Sampling

---

**Module Objective:** This module aims to introduce the fundamental concepts of sampled-data systems, focusing on their mathematical modeling and analysis. We will explore how continuous-time signals are converted into discrete-time signals and the implications of this conversion.

**Topic Objective:** This topic specifically focuses on the process of impulse sampling, a key technique for converting continuous-time signals into discrete-time sequences suitable for digital processing. We will delve into the mathematical representation of impulse sampling and its effects on the frequency spectrum of the signal.

---

### 1. Introduction to Sampled-Data Systems

**Key Concept:** Sampled-data systems are control systems that process information in discrete-time intervals. This is achieved by converting continuous-time signals into discrete-time signals using a sampler.

**1.1. Why Sample?**
*   **Digital Processing:** Modern control systems often utilize digital computers or microprocessors for implementation due to their flexibility, accuracy, and ability to perform complex algorithms. These digital processors can only operate on discrete-time data.
*   **Data Storage and Transmission:** Storing and transmitting data in a discrete format is more efficient and less susceptible to noise compared to continuous-time signals.

**1.2. Components of a Sampled-Data System:**
A typical sampled-data control system consists of:

*   **Continuous-Time Plant:** The physical system to be controlled.
*   **Sampler (Quantizer):** Converts continuous-time signals into discrete-time values at specific sampling instants.
*   **Digital Controller:** Processes the sampled data and generates discrete-time control signals.
*   **Digital-to-Analog Converter (DAC):** Converts the discrete-time control signal back into a continuous-time analog signal.
*   **Zero-Order Hold (ZOH) or other reconstructor:** Converts the discrete-time analog signal into a piecewise constant continuous-time signal to drive the plant.

*(Refer to: Philips and Nagle, Chapter 1; Ogata, Chapter 2)*

---

### 2. Impulse Sampling

**Key Concept:** Impulse sampling is an idealized method of sampling where the continuous-time signal is multiplied by a sequence of ideal impulses (Dirac delta functions) occurring at regular intervals.

**2.1. Mathematical Representation of Impulse Sampling:**

Let $x(t)$ be a continuous-time signal. The impulse-sampled signal, denoted by $x_s(t)$ or $x^*(t)$, is obtained by multiplying $x(t)$ with a train of Dirac delta functions:

$x_s(t) = x^*(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT)$

where:
*   $x(t)$ is the continuous-time input signal.
*   $\delta(t)$ is the Dirac delta function.
*   $T$ is the sampling period.
*   $nT$ are the sampling instants.

**Properties of Dirac Delta Function used here:**
*   $\delta(t - a) = 0$ for $t \neq a$
*   $\int_{-\infty}^{\infty} \delta(t - a) dt = 1$
*   $f(t) \delta(t - a) = f(a) \delta(t - a)$

Using the property $x(t) \delta(t - nT) = x(nT) \delta(t - nT)$, we can rewrite the impulse-sampled signal as:

$x_s(t) = \sum_{n=-\infty}^{\infty} x(nT) \delta(t - nT)$

This equation highlights that the impulse-sampled signal is a sequence of impulses, where the strength of each impulse is equal to the value of the original signal at the sampling instant.

*(Refer to: Philips and Nagle, Section 2.1; Ogata, Section 2-2)*

**Example 2.1.1:**
Let $x(t) = \sin(\omega_0 t)$.
The impulse-sampled signal is:
$x_s(t) = \sin(\omega_0 t) \sum_{n=-\infty}^{\infty} \delta(t - nT)$
$x_s(t) = \sum_{n=-\infty}^{\infty} \sin(\omega_0 nT) \delta(t - nT)$

This represents a sequence of impulses at times $0, T, 2T, \dots$, with strengths $\sin(0), \sin(\omega_0 T), \sin(2\omega_0 T), \dots$.

---

### 3. Frequency Domain Analysis of Impulse Sampling

**Key Concept:** Understanding the effect of impulse sampling on the frequency spectrum of a signal is crucial for analyzing and designing sampled-data systems. This involves the use of the Fourier Transform.

**3.1. Fourier Transform of the Impulse-Sampled Signal:**

Let $X(\omega)$ be the Fourier Transform of $x(t)$:
$X(\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$

The Fourier Transform of the impulse-sampled signal $x_s(t)$ is denoted by $X_s(\omega)$ or $X^*(\omega)$.

We know that the Fourier Transform of a Dirac delta function $\delta(t-a)$ is $e^{-j\omega a}$.
The Fourier Transform of the impulse train $\sum_{n=-\infty}^{\infty} \delta(t - nT)$ is given by:
$\mathcal{F}\left\{\sum_{n=-\infty}^{\infty} \delta(t - nT)\right\} = \frac{1}{T} \sum_{k=-\infty}^{\infty} \delta\left(\omega - k\omega_s\right)$, where $\omega_s = \frac{2\pi}{T}$ is the sampling angular frequency.

Now, applying the multiplication property of Fourier Transforms, which states that $\mathcal{F}\{f(t)g(t)\} = \frac{1}{2\pi} (F(\omega) * G(\omega))$, where '*' denotes convolution:

$X_s(\omega) = \mathcal{F}\left\{x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT)\right\}$
$X_s(\omega) = \frac{1}{2\pi} [X(\omega) * \mathcal{F}\left\{\sum_{n=-\infty}^{\infty} \delta(t - nT)\right\}]$
$X_s(\omega) = \frac{1}{2\pi} \left[X(\omega) * \left(\frac{1}{T} \sum_{k=-\infty}^{\infty} \delta\left(\omega - k\omega_s\right)\right)\right]$

Using the property that $F(\omega) * \delta(\omega - \omega_0) = F(\omega - \omega_0)$:

$X_s(\omega) = \frac{1}{2\pi} \cdot \frac{1}{T} \sum_{k=-\infty}^{\infty} [X(\omega) * \delta(\omega - k\omega_s)]$
$X_s(\omega) = \frac{1}{T} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s)$

This is a fundamental result. It states that the frequency spectrum of the impulse-sampled signal is a periodic repetition of the original signal's spectrum $X(\omega)$, shifted by integer multiples of the sampling frequency $\omega_s$. Each repetition is scaled by $1/T$.

*(Refer to: Philips and Nagle, Section 2.2; Ogata, Section 2-3)*

**3.2. Aliasing:**

**Key Concept:** Aliasing is an undesirable phenomenon that occurs during sampling when the sampling frequency is not high enough to capture all the significant frequency components of the original signal.

From the frequency domain expression $X_s(\omega) = \frac{1}{T} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s)$, we can see that if the shifted spectra $X(\omega - k\omega_s)$ overlap, the original signal's information is distorted.

*   If the bandwidth of the original signal $x(t)$ is $W$ (i.e., $X(\omega) = 0$ for $|\omega| > W$), and the sampling frequency $\omega_s$ is such that $\omega_s > 2W$, then the shifted spectra do not overlap. In this case, the original signal can be perfectly reconstructed from its samples. This condition is known as the **Nyquist-Shannon Sampling Theorem**.
*   If $\omega_s < 2W$, the shifted spectra overlap, causing aliasing. Information from higher frequencies "folds back" into the lower frequency range, corrupting the original signal's spectral content.

**3.3. Nyquist-Shannon Sampling Theorem:**

**Statement:** A band-limited continuous-time signal $x(t)$ with bandwidth $W$ (i.e., $X(\omega) = 0$ for $|\omega| > W$) can be uniquely determined from its samples if the sampling frequency $f_s$ is greater than twice the highest frequency present in the signal. That is, $f_s > 2W$, or equivalently, $\omega_s > 2W$. The minimum sampling frequency, $2W$, is called the **Nyquist rate**.

**Implications:**
*   To avoid aliasing, the sampling frequency must be chosen carefully.
*   If the original signal is not band-limited, it must be filtered (anti-aliasing filter) before sampling to remove frequencies above $W_{max} = \omega_s/2$ to prevent aliasing.

*(Refer to: Philips and Nagle, Section 2.2.1; Ogata, Section 2-3.1)*

**Example 3.3.1: Aliasing Scenario**
Let $x(t) = \cos(200\pi t) + \cos(400\pi t)$.
The frequencies present are $100$ Hz and $200$ Hz. So, $W = 200$ Hz.
The Nyquist rate is $2W = 400$ Hz.

*   **Scenario 1: Sampling at $f_s = 500$ Hz**
    Here, $f_s > 2W$. No aliasing. The sampled signal spectrum will contain replicas of the original spectrum centered at multiples of $500$ Hz, without overlap.

*   **Scenario 2: Sampling at $f_s = 300$ Hz**
    Here, $f_s < 2W$. Aliasing occurs.
    The frequency $200$ Hz is below $f_s/2 = 150$ Hz, so it will be represented correctly.
    However, the frequency $400$ Hz is above $f_s/2 = 150$ Hz.
    The spectral component at $400$ Hz will be folded back into the range $[0, 150]$ Hz.
    The folded frequency is $400 - k f_s$, where $k f_s$ is the closest multiple of $f_s$ less than $400$.
    $400 - 1 \times 300 = 100$ Hz.
    So, the sampled signal will incorrectly appear to have two components at $100$ Hz (one from the original $100$ Hz component and one from the aliased $400$ Hz component). The original signal cannot be reconstructed.

---

### 4. Reconstruction of Continuous-Time Signals from Samples

**Key Concept:** The ability to reconstruct the original continuous-time signal from its impulse samples depends on whether aliasing has occurred. If the sampling theorem is satisfied, reconstruction is possible using an ideal low-pass filter.

**4.1. Ideal Low-Pass Filter (Reconstruction Filter):**

If the sampling is performed at a frequency $\omega_s \ge 2W$ where $W$ is the bandwidth of $x(t)$, then the spectrum $X_s(\omega)$ consists of non-overlapping repetitions of $X(\omega)$. The original spectrum $X(\omega)$ can be recovered by passing $x_s(t)$ through an ideal low-pass filter with a cutoff frequency between $W$ and $\omega_s - W$.

The transfer function of an ideal low-pass filter is:
$H_{LPF}(\omega) = \begin{cases} T & \text{for } |\omega| \le \omega_s/2 \\ 0 & \text{for } |\omega| > \omega_s/2 \end{cases}$

The output of this filter, $y(t)$, is given by:
$Y(\omega) = X_s(\omega) H_{LPF}(\omega)$
$Y(\omega) = \left(\frac{1}{T} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s)\right) H_{LPF}(\omega)$

For $|\omega| \le \omega_s/2$, the filter allows only the $k=0$ term to pass:
$Y(\omega) = \left(\frac{1}{T} X(\omega)\right) T = X(\omega)$ for $|\omega| \le \omega_s/2$.

The inverse Fourier Transform of $Y(\omega)$ gives the reconstructed signal $y(t)$. If the sampling theorem is satisfied, $y(t) = x(t)$.

The impulse response of this ideal low-pass filter is the sinc function:
$h_{LPF}(t) = \mathcal{F}^{-1}\{T \text{ for } |\omega| \le \omega_s/2\}$
$h_{LPF}(t) = T \frac{\sin(\omega_s t/2)}{\pi t} = T \frac{\sin(\pi t/T)}{\pi t}$

The reconstructed signal is then:
$y(t) = x_s(t) * h_{LPF}(t) = \sum_{n=-\infty}^{\infty} x(nT) \delta(t - nT) * T \frac{\sin(\pi (t-nT)/T)}{\pi (t-nT)}$
$y(t) = T \sum_{n=-\infty}^{\infty} x(nT) \frac{\sin(\pi (t-nT)/T)}{\pi (t-nT)}$

This is the interpolation formula. It shows that the continuous-time signal can be reconstructed by summing weighted sinc functions, where the weights are the sampled values.

*(Refer to: Philips and Nagle, Section 2.2.2; Ogata, Section 2-3.2)*

**4.2. Practical Reconstruction:**

In practice, ideal low-pass filters are not realizable. Practical reconstruction is usually done using a Zero-Order Hold (ZOH) or First-Order Hold (FOH), which are approximations. These are discussed in later modules.

---

### 5. Relation to Discrete-Time Systems and Z-Transform

**Key Concept:** Impulse sampling is the bridge between continuous-time systems and discrete-time systems. The Z-transform is the primary tool for analyzing the resulting discrete-time signals.

**5.1. Generating Discrete-Time Sequences:**

The impulse-sampled signal $x_s(t) = \sum_{n=-\infty}^{\infty} x(nT) \delta(t - nT)$ directly produces discrete-time sequences of the form $x[n] = x(nT)$.

**5.2. Z-Transform of Sampled Signals:**

The Z-transform of a discrete-time sequence $x[n]$ is defined as:
$X(z) = Z\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$

For the sampled signal $x_s(t)$, the sequence of sampled values is $x[n] = x(nT)$. Therefore, the Z-transform of the sampled signal is:
$X(z) = Z\{x[nT]\} = \sum_{n=-\infty}^{\infty} x(nT) z^{-n}$

This $X(z)$ is the Z-transform of the discrete-time sequence obtained by impulse sampling. It is also referred to as the sampled-data Z-transform or the discrete-time equivalent of the Laplace transform of the continuous-time signal.

**5.3. Relation to Laplace Transform:**

We can establish a connection between the Laplace Transform of the continuous-time signal $X(s)$ and its Z-transform $X(z)$.

Consider the impulse-sampled signal $x_s(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT)$.
The Laplace Transform of $x_s(t)$ is:
$X_s(p) = \mathcal{L}\{x_s(t)\} = \mathcal{L}\left\{x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT)\right\}$
Using the linearity and time-shifting properties of the Laplace Transform:
$X_s(p) = \sum_{n=-\infty}^{\infty} \mathcal{L}\{x(nT) \delta(t - nT)\}$
$X_s(p) = \sum_{n=-\infty}^{\infty} x(nT) e^{-pnT}$

Now, let $z = e^{pT}$. Then $p = \frac{1}{T} \ln(z)$. Substituting this into the expression for $X_s(p)$:
$X_s(p) \bigg|_{p = \frac{1}{T} \ln(z)} = \sum_{n=-\infty}^{\infty} x(nT) e^{-\left(\frac{1}{T} \ln(z)\right) nT}$
$X_s(p) \bigg|_{p = \frac{1}{T} \ln(z)} = \sum_{n=-\infty}^{\infty} x(nT) e^{-n \ln(z)}$
$X_s(p) \bigg|_{p = \frac{1}{T} \ln(z)} = \sum_{n=-\infty}^{\infty} x(nT) (e^{\ln(z)})^{-n}$
$X_s(p) \bigg|_{p = \frac{1}{T} \ln(z)} = \sum_{n=-\infty}^{\infty} x(nT) z^{-n}$

This final expression is exactly the Z-transform of the sampled sequence $x[n] = x(nT)$.
Therefore, we have the fundamental relationship:
$X(z) = X_s(p) \bigg|_{p = \frac{1}{T} \ln(z)}$

This means that the Z-transform $X(z)$ of a discrete-time system is obtained by substituting $z = e^{sT}$ (or $s = \frac{1}{T} \ln(z)$) into the Laplace transform of the continuous-time signal (or its sampled version's Laplace transform). This substitution is called the **z-transform mapping** or **bilinear transformation** in a more general sense (though bilinear transformation usually refers to $s = \frac{2}{T} \frac{z-1}{z+1}$).

*(Refer to: Philips and Nagle, Section 2.3; Ogata, Section 2-4)*

---

### 6. Impact on System Analysis and Design (Course Outcomes Alignment)

**6.1. CO1: Model and analyse discrete-time system using pulse transfer function approach.**

*   Impulse sampling is the first step in creating discrete-time models of continuous-time systems. The sampled output $y^*(t)$ from a linear time-invariant (LTI) continuous-time system with input $x^*(t)$ can be represented by its pulse transfer function $G(z)$.
*   The analysis of these discrete-time systems in the z-domain using the pulse transfer function allows us to determine stability, transient response, and steady-state behavior, similar to how we analyze continuous-time systems in the s-domain.

*(Refer to: Philips and Nagle, Chapter 3; Ogata, Chapter 5)*

**6.2. Other Course Outcomes (CO2, CO3, CO4):**
While this topic focuses on the initial analysis of sampled data, the understanding of impulse sampling is foundational for:
*   **CO2 (Design digital compensators):** Once a discrete-time model is obtained via impulse sampling, digital compensators can be designed in the z-domain.
*   **CO3 (State space approach):** Impulse sampling is also applied to state-space representations of continuous-time systems to derive their discrete-time state-space models.
*   **CO4 (Design state feedback controllers and observers):** The discrete-time state-space models obtained after sampling are used for designing controllers and observers.

---

### 7. Summary of Key Points to Remember

*   **Impulse Sampling:** Idealized sampling where a signal is multiplied by an impulse train.
*   **Mathematical Representation:** $x^*(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT) = \sum_{n=-\infty}^{\infty} x(nT) \delta(t - nT)$.
*   **Frequency Domain:** $X_s(\omega) = \frac{1}{T} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s)$. The spectrum is a periodic repetition of $X(\omega)$.
*   **Aliasing:** Occurs when shifted spectra overlap due to insufficient sampling frequency ($\omega_s < 2W$).
*   **Nyquist-Shannon Sampling Theorem:** For perfect reconstruction, $\omega_s > 2W$, where $W$ is the signal bandwidth. Minimum sampling frequency is the Nyquist rate ($2W$).
*   **Reconstruction:** Possible using an ideal low-pass filter with cutoff $\omega_s/2$ if no aliasing occurs.
*   **Z-Transform:** $X(z) = Z\{x[nT]\} = \sum_{n=-\infty}^{\infty} x(nT) z^{-n}$.
*   **Z-Transform Mapping:** $X(z)$ of sampled signal is obtained from Laplace Transform $X(s)$ via $z = e^{sT}$.

---

### 8. Practice Questions and Exercises

**Question 1:**
A continuous-time signal $x(t) = e^{-2t} u(t)$ is impulse sampled with a sampling period $T = 0.1$ seconds.
(a) Write the mathematical expression for the impulse-sampled signal $x^*(t)$.
(b) Determine the Z-transform of the sampled signal, $X(z)$.
(c) Find the corresponding continuous-time signal that would be reconstructed by an ideal low-pass filter with cutoff frequency $\omega_c = 5$ rad/s.

**Answer 1:**
(a) $x^*(t) = \sum_{n=0}^{\infty} e^{-2nT} \delta(t - nT)$ with $T = 0.1$.
$x^*(t) = \sum_{n=0}^{\infty} e^{-0.2n} \delta(t - 0.1n)$

(b) The Laplace transform of $x(t)$ is $X(s) = \frac{1}{s+2}$.
The Z-transform is obtained by substituting $z = e^{sT}$:
$X(z) = X(s) \bigg|_{s = \frac{1}{T} \ln(z)} = \frac{1}{\frac{1}{T} \ln(z) + 2}$
With $T = 0.1$:
$X(z) = \frac{1}{\frac{1}{0.1} \ln(z) + 2} = \frac{1}{10 \ln(z) + 2}$
This is not the standard form of Z-transform. Let's use the direct definition $X(z) = \sum_{n=0}^{\infty} x(nT) z^{-n}$:
$X(z) = \sum_{n=0}^{\infty} e^{-0.2n} z^{-n} = \sum_{n=0}^{\infty} (e^{-0.2} z^{-1})^n$
This is a geometric series with $a = e^{-0.2} z^{-1}$. The sum is $\frac{1}{1 - a}$.
$X(z) = \frac{1}{1 - e^{-0.2} z^{-1}} = \frac{z}{z - e^{-0.2}}$
$e^{-0.2} \approx 0.8187$. So, $X(z) = \frac{z}{z - 0.8187}$.
*Correction*: The mapping $s = \frac{1}{T} \ln(z)$ leads to $X(z) = X(\frac{1}{T} \ln z)$. The correct way to get $X(z)$ from $X(s)$ is to use the mapping $z = e^{sT}$.
$X(s) = \frac{1}{s+2}$.
$z = e^{sT} \implies sT = \ln z \implies s = \frac{1}{T} \ln z$.
$X(z) = X(s) = \frac{1}{\frac{1}{T}\ln z + 2}$. This is correct for the continuous-time Laplace transform of the impulse sampled signal. However, the discrete-time sequence $x[n] = x(nT)$ has the Z-transform $X(z) = \sum x(nT)z^{-n}$.
Let's re-evaluate the $X(z)$ from the sequence $x[n] = e^{-0.2n}$:
$X(z) = \sum_{n=0}^{\infty} (e^{-0.2} z^{-1})^n = \frac{1}{1 - e^{-0.2} z^{-1}} = \frac{z}{z - e^{-0.2}}$. This is the correct Z-transform of the sequence.

(c) The bandwidth of $x(t)$ is effectively infinite, but for practical reconstruction, we consider the bandwidth of the spectrum *after* sampling. The original signal's spectrum is $X(\omega) = \frac{1}{j\omega+2}$.
The cutoff frequency of the ideal low-pass filter is $\omega_c = 5$ rad/s. This is less than the sampling frequency $\omega_s = 2\pi/T = 2\pi/0.1 = 20\pi \approx 62.8$ rad/s.
If $X(\omega) = 0$ for $|\omega| > W$, then we need $\omega_c \ge W$.
The bandwidth $W$ of $x(t)=e^{-2t}u(t)$ is infinite. However, if we consider the sampled signal $X_s(\omega) = \frac{1}{T} \sum X(\omega - k\omega_s)$, and we use a filter with cutoff $\omega_c$, the reconstructed signal's spectrum will be $X(\omega) H_{LPF}(\omega)$.
If $\omega_c = 5$, and assuming this is the effective bandwidth of interest after sampling, then the reconstructed signal's spectrum is $X(\omega)$ for $|\omega| \le 5$.
The original signal's Laplace transform is $X(s) = \frac{1}{s+2}$.
To find the time-domain signal from a Laplace transform truncated at $\omega_c$, we effectively filter the original signal.
The filtered signal's Laplace transform is $Y(s) = X(s) H_{LPF}(s)$, where $H_{LPF}(s) = T$ for $|\omega| \le \omega_c$.
$Y(s) = \frac{1}{s+2} \cdot T$, for $|\text{Im}(s)| \le 5$. This is getting complicated as ideal filter is used.

Let's rephrase the question's intent for (c): If the original signal *were* band-limited to $\omega_0$, what signal would be reconstructed if the filter cutoff is $\omega_c > \omega_0$?
However, with $x(t) = e^{-2t}u(t)$, its spectrum is not band-limited. The effective bandwidth where $X(\omega)$ is significant is much larger than 5 rad/s.
If we assume the question implies reconstructing the signal using the samples and an ideal low-pass filter with cutoff $\omega_c = 5$, the reconstructed signal's spectrum would be $Y(\omega) = X(\omega)$ for $|\omega| \le 5$.
So, $Y(s) = \frac{1}{s+2}$ within the strip $|\text{Im}(s)| \le 5$.
The problem here is that the reconstruction formula $y(t) = T \sum_{n=-\infty}^{\infty} x(nT) \frac{\sin(\pi (t-nT)/T)}{\pi (t-nT)}$ implicitly assumes no aliasing.
The transfer function of the ideal reconstruction filter is $H_{LPF}(s) = T$ for $|s_j| \le \omega_s/2$.
The bandwidth of $x(t)=e^{-2t}u(t)$ is infinite. The sampling rate is $\omega_s = 20\pi \approx 62.8$.
The filter cutoff is $\omega_c = 5$. This is much smaller than $\omega_s/2$.
The reconstructed signal's spectrum is $Y(\omega) = X_s(\omega) H_{LPF}(\omega)$.
$Y(\omega) = \left(\frac{1}{T} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s)\right) H_{LPF}(\omega)$.
With $H_{LPF}(\omega)$ cutting off at $\omega_c=5$, only the central lobe of $X(\omega)$ (for $|\omega| \le 5$) will pass, and the higher frequency shifted replicas $X(\omega - k\omega_s)$ for $k \neq 0$ will be attenuated significantly if they are outside $|\omega| \le 5$.
The resulting spectrum of $y(t)$ will be $Y(\omega) = X(\omega)$ for $|\omega| \le 5$ and $0$ otherwise.
So, $Y(s) = \frac{1}{s+2}$ for $|\text{Im}(s)| \le 5$.
To find $y(t)$ from this, we would need to do an inverse Laplace transform. This is still tricky because the truncation is in the frequency domain.
The sampled values are $x(nT) = e^{-0.2n}$.
The reconstructed signal is $y(t) = \sum_{n=0}^{\infty} e^{-0.2n} T \frac{\sin(\pi (t-nT)/T)}{\pi (t-nT)}$.
With $T=0.1$: $y(t) = \sum_{n=0}^{\infty} e^{-0.2n} 0.1 \frac{\sin(\pi (t-0.1n)/0.1)}{\pi (t-0.1n)}$.
This formula is for perfect reconstruction assuming no aliasing.

Let's consider a simpler interpretation for (c) based on the mapping: if the output signal $y(t)$ has a Laplace transform $Y(s)$, its Z-transform would be $Y(z) = Y(s)|_{s=\frac{1}{T}\ln z}$.
If we filter the continuous-time signal $x(t)$ first with an ideal low-pass filter of cutoff $\omega_c=5$, the filtered signal's Laplace transform is $Y_{filter}(s) = X(s)H_{filter}(s)$.
$H_{filter}(s)$ is an ideal low-pass filter. For reconstruction, the filter should have a gain of $T$. So $H_{LPF}(s) = T$ for $|s_j| \le \omega_s/2$.
The question means: what is the output of the ideal low-pass filter applied to the impulse-sampled signal $x^*(t)$?
The output spectrum is $Y(\omega) = X_s(\omega) H_{LPF}(\omega)$.
$Y(\omega) = \left(\frac{1}{T} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s)\right) H_{LPF}(\omega)$.
$X(\omega) = \frac{1}{2+j\omega}$. $X_s(\omega)$ is periodic with $\omega_s = 20\pi$. $H_{LPF}(\omega) = T$ for $|\omega| \le 5$.
$Y(\omega) = \frac{1}{T} X(\omega) H_{LPF}(\omega) + \frac{1}{T} X(\omega - \omega_s) H_{LPF}(\omega) + \dots$
Since $H_{LPF}(\omega)$ is zero for $|\omega| > 5$ and $\omega_s = 20\pi \approx 62.8$, and the bandwidth of $X(\omega)$ where it's significant is around $2$, the terms $X(\omega - k\omega_s)$ for $k \neq 0$ are shifted far away from the passband of the filter.
So, effectively, $Y(\omega) \approx \frac{1}{T} X(\omega) H_{LPF}(\omega)$.
$Y(\omega) \approx \frac{1}{T} \frac{1}{2+j\omega} T = \frac{1}{2+j\omega}$ for $|\omega| \le 5$, and 0 otherwise.
This means the reconstructed signal $y(t)$ has a Laplace transform $Y(s) = \frac{1}{s+2}$ limited to the frequency range $|\omega| \le 5$.
Finding the time-domain signal from this requires computing the inverse Laplace transform of a band-limited spectrum, which involves integrals of $\frac{e^{st}}{s+2}$.
This usually leads to expressions involving the incomplete gamma function or related functions.
A simpler interpretation might be: what is the signal whose Laplace transform is $X(s)$ band-limited to 5 rad/s?
This is $y(t) = \mathcal{L}^{-1}\{\frac{1}{s+2} \text{ for } |\text{Im}(s)| \le 5\}$.
This is $y(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \frac{e^{jt\omega}}{2+j\omega} d\omega$, where the integral is restricted to the frequency range.

Let's assume the question implies the standard reconstruction using the sinc function based on the samples, if no aliasing occurs.
Since $\omega_s = 20\pi$ and the effective bandwidth of $X(\omega)$ where $X(\omega)$ is non-zero is infinite, but the "pole" is at $s=-2$, which corresponds to a cutoff frequency of $\infty$.
The term $e^{-2t}u(t)$ has a spectrum that decays. If we were to band-limit it to $W$, we would need $\omega_s > 2W$.
If we assume the intent is to see what the reconstruction formula does, given $x(nT) = e^{-0.2n}$:
$y(t) = \sum_{n=0}^{\infty} e^{-0.2n} 0.1 \frac{\sin(\pi (t-0.1n)/0.1)}{\pi (t-0.1n)}$.
The filter cutoff $\omega_c=5$ rad/s is relevant in determining *if* the spectrum $X(\omega)$ has significant components beyond this cutoff. For $X(\omega) = \frac{1}{2+j\omega}$, the magnitude $|X(\omega)| = \frac{1}{\sqrt{4+\omega^2}}$. At $\omega=5$, $|X(5)| = \frac{1}{\sqrt{4+25}} = \frac{1}{\sqrt{29}} \approx 0.18$. This is not zero.
If the signal was band-limited to $W=5$, we would need $\omega_s > 10$. Our $\omega_s=20\pi$ is much greater.

The direct reconstruction formula $y(t) = T \sum_{n} x(nT) \text{sinc}(\frac{t-nT}{T})$ is the output of the ideal LPF on $x^*(t)$ assuming no aliasing.
So for part (c), it's asking to apply the reconstruction formula.
$y(t) = 0.1 \sum_{n=0}^{\infty} e^{-0.2n} \frac{\sin(\pi (t-0.1n)/0.1)}{\pi (t-0.1n)}$.
Let $\tau = t/T$. $y(t) = \sum_{n=0}^{\infty} x(nT) \text{sinc}(t/T - n)$.
$y(t) = \sum_{n=0}^{\infty} e^{-0.2n} \frac{\sin(\pi (t/0.1 - n))}{\pi (t/0.1 - n)}$.
$y(t) = \sum_{n=0}^{\infty} e^{-0.2n} \frac{\sin(\pi (10t - n))}{\pi (10t - n)}$.
This is the most likely intended answer for (c) by applying the reconstruction formula.

**Question 2:**
A signal $x(t)$ has a Fourier Transform $X(\omega)$ which is a rectangular pulse of width $2\pi \times 100$ rad/s, centered at $\omega=0$. This means $x(t)$ is band-limited to $W = 100$ rad/s.
If this signal is sampled at $f_s = 100$ Hz:
(a) What is the sampling angular frequency $\omega_s$?
(b) Will aliasing occur? Justify your answer.
(c) If the signal is sampled at $f_s = 200$ Hz, will aliasing occur? Justify your answer.

**Answer 2:**
(a) $f_s = 100$ Hz. $\omega_s = 2\pi f_s = 2\pi (100) = 200\pi$ rad/s.

(b) The bandwidth of the signal is $W = 100$ rad/s.
The sampling angular frequency is $\omega_s = 200\pi$ rad/s.
The Nyquist rate is $2W = 2 \times 100 = 200$ rad/s.
Since $\omega_s = 200\pi \approx 628.3$ rad/s and $2W = 200$ rad/s, we have $\omega_s > 2W$.
Therefore, aliasing will **not** occur.

(c) If the signal is sampled at $f_s = 200$ Hz:
The sampling angular frequency is $\omega_s = 2\pi f_s = 2\pi (200) = 400\pi$ rad/s.
The Nyquist rate is $2W = 200$ rad/s.
Since $\omega_s = 400\pi \approx 1256.6$ rad/s, and $2W = 200$ rad/s, we have $\omega_s > 2W$.
Therefore, aliasing will **not** occur.

*(Self-correction: The question implies sampling at 100 Hz is NOT enough. Let's assume W=100 rad/s implies frequency range is [-100, 100] rad/s)*

Let's re-evaluate (b) and (c) with this interpretation.
Bandwidth $W = 100$ rad/s.
Nyquist rate $2W = 200$ rad/s.

(b) Sampling frequency $f_s = 100$ Hz. $\omega_s = 2\pi f_s = 200\pi$ rad/s.
Is $\omega_s > 2W$? Is $200\pi > 200$? Yes, $200\pi \approx 628.3$, which is greater than 200.
So, no aliasing occurs.

*Perhaps the question meant $W=100\pi$ rad/s? Let's use the prompt as is.*

Let's consider the possibility that the signal's Fourier Transform being a rectangular pulse of width $2\pi \times 100$ means the highest frequency is $100 \times 2\pi$ rad/s, i.e. $W = 200\pi$ rad/s.
If $W = 200\pi$ rad/s, then Nyquist rate $2W = 400\pi$ rad/s.

(b) $f_s = 100$ Hz. $\omega_s = 200\pi$ rad/s.
Is $\omega_s > 2W$? Is $200\pi > 400\pi$? No.
So, aliasing **will** occur.

(c) $f_s = 200$ Hz. $\omega_s = 400\pi$ rad/s.
Is $\omega_s > 2W$? Is $400\pi > 400\pi$? No, it's equal.
According to the strict Nyquist theorem, we need $\omega_s > 2W$.
So, aliasing **might** occur at the exact Nyquist frequency. A practical interpretation often uses $\ge$. But for theoretical analysis, strict inequality is preferred.
Let's assume strict inequality is required. Aliasing **will** occur (or be at the boundary).

*Conclusion for Question 2: The phrasing "rectangular pulse of width $2\pi \times 100$ rad/s" is ambiguous. A common interpretation for a band-limited signal to $W$ is that $X(\omega)=0$ for $|\omega|>W$. If the width of the pulse is $2\pi \times 100$, and it's centered at 0, then the range is $[-100\pi, 100\pi]$ if the width is $200\pi$. So $W = 100\pi$.*

Let's assume $W = 100\pi$ rad/s.
Nyquist rate $2W = 200\pi$ rad/s.

(b) $f_s = 100$ Hz. $\omega_s = 200\pi$ rad/s.
Is $\omega_s > 2W$? Is $200\pi > 200\pi$? No.
So, aliasing **will** occur.

(c) $f_s = 200$ Hz. $\omega_s = 400\pi$ rad/s.
Is $\omega_s > 2W$? Is $400\pi > 200\pi$? Yes.
So, aliasing will **not** occur.

This revised interpretation for Question 2 makes more sense in a typical problem setting.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. References

*   **Philips, C. V., & Nagle, H. T. (1984).** *Digital control system analysis and design.* Prentice Hall.
*   **Ogata, K. (2009).** *Discrete Time Control Systems.* PHI Learning Private Limited, New Delhi.
*   **Gopal, M. (1997).** *Digital control and State Variable methods.* Tata McGraw – Hill.

*(Note: While reference books are provided, explicit content from them has not been directly quoted to avoid copyright issues, but the concepts and structure align with standard digital control textbooks of the era.)*