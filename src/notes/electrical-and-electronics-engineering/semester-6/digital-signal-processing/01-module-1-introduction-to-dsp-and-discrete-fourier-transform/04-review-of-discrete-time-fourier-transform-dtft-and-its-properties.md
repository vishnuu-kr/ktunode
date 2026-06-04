---
title: "Review of Discrete-Time Fourier transform (DTFT) and its properties."
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 1: Introduction to DSP and Discrete Fourier transform:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3665a"
status: "completed"
scrapedAt: "2026-05-23T16:26:32.686Z"
---
# Digital Signal Processing: Module 1 - Introduction to DSP and Discrete Fourier Transform

## Topic: Review of Discrete-Time Fourier Transform (DTFT) and its Properties

---

### Learning Outcomes:

*   Understand the concept of the Discrete-Time Fourier Transform (DTFT) for analyzing discrete-time signals in the frequency domain.
*   Recall and apply the fundamental properties of the DTFT to simplify signal processing operations.
*   Relate the DTFT to the Fourier Transform of continuous-time signals and understand the implications of discrete-time sampling.

---

### Course Outcomes Alignment:

This topic primarily supports **CO1: Analyse discrete-time systems using DFT (Knowledge Level: K2)**. While the DFT is the focus of later analysis, understanding the DTFT is foundational. The concepts of frequency representation and system analysis in the frequency domain are introduced here, which are crucial for applying the DFT later.

---

### Key Concepts and Definitions

#### 1. The Discrete-Time Fourier Transform (DTFT)

The DTFT is a mathematical tool used to represent a discrete-time signal in the frequency domain. It transforms a time-domain sequence $x[n]$ into a frequency-domain function $X(\omega)$, where $\omega$ represents the angular frequency (in radians per sample).

**Definition:**

The DTFT of a discrete-time signal $x[n]$ is defined as:

$$X(\omega) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}$$

where:
*   $x[n]$ is the discrete-time signal.
*   $\omega$ is the angular frequency, with values typically ranging from $-\pi$ to $\pi$ (or $0$ to $2\pi$). This is because the frequency response of a discrete-time system is periodic with a period of $2\pi$.
*   $e^{-j\omega n}$ is the complex exponential basis function.

**Important Note:** The DTFT is defined for signals that are absolutely summable, meaning $\sum_{n=-\infty}^{\infty} |x[n]| < \infty$. This condition ensures that the DTFT converges. For signals that are not absolutely summable (e.g., energy signals, periodic signals), the DTFT may not converge as a finite value.

#### 2. The Inverse Discrete-Time Fourier Transform (IDTFT)

The IDTFT allows us to recover the original discrete-time signal $x[n]$ from its DTFT $X(\omega)$.

**Definition:**

The IDTFT of a frequency-domain function $X(\omega)$ is defined as:

$$x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} X(\omega) e^{j\omega n} d\omega$$

This integral is taken over one period of the frequency response ($-\pi$ to $\pi$).

#### 3. Relationship between DTFT and Fourier Transform (FT)

The DTFT can be viewed as the Fourier Transform of a sequence of impulses spaced $T$ seconds apart, where each impulse has a strength of $x[n]$ at time $nT$. If $x_c(t)$ is a continuous-time signal and $x[n] = x_c(nT)$ is its sampled version, then the DTFT of $x[n]$ is related to the FT of $x_c(t)$.

$$X(\omega) = \sum_{n=-\infty}^{\infty} x_c(nT) e^{-j\omega n}$$

The Fourier Transform of $x_c(t)$ is $X_c(j\Omega)$, where $\Omega$ is the continuous-time angular frequency. The relationship between the DTFT frequency $\omega$ and the continuous-time frequency $\Omega$ is $\omega = \Omega T$.

The DTFT of a sampled signal $x[n] = x_c(nT)$ can be expressed in terms of the FT of the continuous-time signal $x_c(t)$ as:

$$X(\omega) = \sum_{k=-\infty}^{\infty} X_c\left(j\frac{\omega}{T} - j\frac{2\pi k}{T}\right)$$

This equation shows that the DTFT of a sampled signal is a sum of scaled and shifted versions of the FT of the original continuous-time signal. This leads to the phenomenon of **aliasing** if the sampling rate is not high enough (Nyquist criterion).

---

### DTFT Properties

Understanding the properties of the DTFT is crucial for manipulating and analyzing discrete-time signals and systems. These properties are analogous to the properties of the continuous-time Fourier Transform.

| Property              | Time Domain ($x[n]$)       | Frequency Domain ($X(\omega)$)     | Description                                                                                              |
| :-------------------- | :------------------------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Linearity**         | $ax_1[n] + bx_2[n]$        | $aX_1(\omega) + bX_2(\omega)$      | The DTFT of a linear combination of signals is the linear combination of their individual DTFTs.       |
| **Time Shifting**     | $x[n-n_0]$                 | $e^{-j\omega n_0} X(\omega)$       | Shifting a signal in time by $n_0$ samples results in multiplying its DTFT by a phase factor $e^{-j\omega n_0}$. |
| **Frequency Shifting**| $e^{j\omega_0 n} x[n]$     | $X(\omega - \omega_0)$             | Multiplying a signal by a complex exponential in the time domain shifts its DTFT in frequency by $\omega_0$. |
| **Time Reversal**     | $x[-n]$                    | $X(-\omega)$                       | Reversing a signal in time results in reversing its DTFT in frequency.                                   |
| **Conjugation**       | $x^*[n]$                   | $X^*(-\omega)$                     | The DTFT of a conjugate signal is the conjugate of the DTFT evaluated at the negative frequency.        |
| **Conjugate Symmetry**| $x^*[n] = x[n]$ (Real)     | $X^*(\omega) = X(-\omega)$ (Conjugate Symmetric) | For a real signal $x[n]$, its DTFT $X(\omega)$ is conjugate symmetric.                                     |
|                       | $x^*[n] = -x[n]$ (Imaginary)| $X^*(\omega) = -X(-\omega)$ (Conjugate Antisymmetric) | For a purely imaginary signal $x[n]$, its DTFT $X(\omega)$ is conjugate antisymmetric.                  |
| **Parseval's Theorem**| $\sum_{n=-\infty}^{\infty} |x[n]|^2$ | $\frac{1}{2\pi} \int_{-\pi}^{\pi} |X(\omega)|^2 d\omega$ | The total energy of a signal is conserved in the frequency domain.                                       |
| **Differentiation in Frequency** | $n x[n]$              | $j \frac{d}{d\omega} X(\omega)$ | Multiplying a signal by $n$ in the time domain is equivalent to differentiating its DTFT with respect to $\omega$ and multiplying by $j$. |
| **Convolution**       | $x_1[n] * x_2[n]$          | $X_1(\omega) X_2(\omega)$          | Convolution in the time domain corresponds to multiplication in the frequency domain.                    |
| **Multiplication**    | $x_1[n] x_2[n]$            | $\frac{1}{2\pi} [X_1(\omega) * X_2(\omega)]$ | Multiplication in the time domain corresponds to convolution of their DTFTs in the frequency domain. |

---

### Examples

#### Example 1: DTFT of a Unit Step Function

Let $x[n] = u[n]$ (the unit step function, $u[n]=1$ for $n \ge 0$ and $u[n]=0$ for $n < 0$).

$X(\omega) = \sum_{n=0}^{\infty} 1 \cdot e^{-j\omega n}$

This is a geometric series with first term $a=1$ and common ratio $r = e^{-j\omega}$. The sum converges if $|r| < 1$. However, $|e^{-j\omega}| = 1$, so the series does not converge in the traditional sense for all $\omega$.

When $|e^{-j\omega}| < 1$, which is not the case here, the sum is $\frac{1}{1 - e^{-j\omega}}$.

For practical purposes, and especially in the context of systems with inputs like the unit step, we often consider the limit or a related concept. A common representation, derived using distributional properties or by considering the limit of causal exponential signals, is:

$X(\omega) = \pi \delta(\omega) + \frac{1}{1 - e^{-j\omega}}$ for $-\pi \le \omega \le \pi$.

The $\pi \delta(\omega)$ term represents the DC component (average value) of the signal.

**Reference:** Proakis & Manolakis (4th Ed.), Section 4.2.1, discusses the DTFT of common signals.

#### Example 2: DTFT of a Rectangular Pulse

Let $x[n] = 1$ for $0 \le n \le N-1$ and $x[n] = 0$ otherwise.

$X(\omega) = \sum_{n=0}^{N-1} 1 \cdot e^{-j\omega n}$

This is a finite geometric series:

$X(\omega) = \frac{1 - e^{-j\omega N}}{1 - e^{-j\omega}}$

We can rewrite this using Euler's formula ($e^{-j\theta} = \cos\theta - j\sin\theta$):

$X(\omega) = \frac{e^{-j\omega N/2}(e^{j\omega N/2} - e^{-j\omega N/2})}{e^{-j\omega/2}(e^{j\omega/2} - e^{-j\omega/2})}$

$X(\omega) = e^{-j\omega (N-1)/2} \frac{2j\sin(\omega N/2)}{2j\sin(\omega/2)}$

$X(\omega) = e^{-j\omega (N-1)/2} \frac{\sin(\omega N/2)}{\sin(\omega/2)}$

This is the Dirichlet kernel function. The term $e^{-j\omega (N-1)/2}$ represents a linear phase shift, indicating a delay. The magnitude response is $\left| \frac{\sin(\omega N/2)}{\sin(\omega/2)} \right|$.

**Reference:** Oppenheim & Schafer (2nd Ed.), Chapter 7, provides detailed derivations of DTFTs for various signals.

#### Example 3: Applying the Time Shifting Property

If $x[n] = u[n]$, then $X(\omega) = \pi \delta(\omega) + \frac{1}{1 - e^{-j\omega}}$.
Let $y[n] = x[n-2] = u[n-2]$.

Using the time shifting property:
$Y(\omega) = e^{-j\omega (2)} X(\omega) = e^{-j2\omega} \left(\pi \delta(\omega) + \frac{1}{1 - e^{-j\omega}}\right)$
$Y(\omega) = \pi e^{-j2\omega} \delta(\omega) + \frac{e^{-j2\omega}}{1 - e^{-j\omega}}$

Since $\omega \delta(\omega) = 0$, we have $e^{-j2\omega} \delta(\omega) = \delta(\omega)$.
So, $Y(\omega) = \pi \delta(\omega) + \frac{e^{-j2\omega}}{1 - e^{-j\omega}}$.

This is consistent with the definition of $u[n-2]$ having the same DC component but a phase shift in its frequency representation.

#### Example 4: Applying the Convolution Property

Consider a Linear Time-Invariant (LTI) system with impulse response $h[n]$. The output $y[n]$ is the convolution of the input $x[n]$ with the impulse response $h[n]$: $y[n] = x[n] * h[n]$.

The DTFT of the output is given by:

$Y(\omega) = X(\omega) H(\omega)$

where $H(\omega)$ is the frequency response of the system, which is the DTFT of $h[n]$. This property is fundamental to analyzing LTI systems in the frequency domain. For instance, if $x[n]$ is a unit step and $h[n]$ is an averager (e.g., $h[n] = \frac{1}{M} \{u[n] - u[n-M]\}$), then $y[n]$ can be found by taking the DTFT of $x[n]$ and $h[n]$ and multiplying them.

**Reference:** Ifeachor & Jervis (2nd Ed.), Chapter 5, extensively covers system analysis using DTFT and its properties.

---

### Important Points to Remember

*   **Convergence:** The DTFT $X(\omega)$ exists if and only if the signal $x[n]$ is absolutely summable, i.e., $\sum_{n=-\infty}^{\infty} |x[n]| < \infty$. Signals that are not absolutely summable (like the unit step) may have DTFTs that are distributions (e.g., involving Dirac delta functions).
*   **Periodicity:** The DTFT $X(\omega)$ is always periodic with period $2\pi$. This is a direct consequence of the $e^{-j\omega n}$ term, as $e^{-j(\omega+2\pi)n} = e^{-j\omega n} e^{-j2\pi n} = e^{-j\omega n} (1) = e^{-j\omega n}$.
*   **Symmetry for Real Signals:** For a real-valued signal $x[n]$, its DTFT $X(\omega)$ exhibits conjugate symmetry: $X^*(\omega) = X(-\omega)$. This means the magnitude response is even ($|X(\omega)| = |X(-\omega)|$) and the phase response is odd ($\angle X(\omega) = -\angle X(-\omega)$).
*   **Frequency Response:** The DTFT of the impulse response $h[n]$ of an LTI system, $H(\omega)$, is known as the system's frequency response. It describes how the system modifies the amplitude and phase of different frequency components of the input signal.
*   **Parseval's Theorem:** Crucial for understanding energy conservation. It relates the total energy of a signal in the time domain to its energy in the frequency domain.

---

### Practice Questions and Exercises

**Question 1:** (Knowledge Level: K2)
Find the DTFT of the signal $x[n] = a^n u[n]$ for $|a| < 1$.
What is the condition for the DTFT to exist?

**Question 2:** (Knowledge Level: K2)
Using the time-shifting property, find the DTFT of $y[n] = x[n-3]$ if the DTFT of $x[n]$ is $X(\omega) = \frac{1}{1 - 0.5e^{-j\omega}}$.

**Question 3:** (Knowledge Level: K2)
If a causal LTI system has an impulse response $h[n] = \delta[n] - 0.5\delta[n-1]$, find its frequency response $H(\omega)$. What is the effect of this system on a DC input signal (i.e., $\omega=0$)?

**Question 4:** (Knowledge Level: K2)
Consider a real signal $x[n]$ whose DTFT is $X(\omega)$. If $x[n]$ is also an even function of $n$ (i.e., $x[n] = x[-n]$), what can you say about the symmetry of $X(\omega)$?

**Question 5:** (Knowledge Level: K2)
The DTFT of $x[n]$ is $X(\omega) = 2\pi \delta(\omega) + \frac{1}{1-e^{-j\omega}}$. What is the signal $x[n]$?

---

### Answers to Practice Questions

**Answer 1:**
The DTFT of $x[n] = a^n u[n]$ is:
$X(\omega) = \sum_{n=0}^{\infty} a^n e^{-j\omega n} = \sum_{n=0}^{\infty} (ae^{-j\omega})^n$
This is a geometric series with common ratio $r = ae^{-j\omega}$. For convergence, we need $|r| < 1$.
$|ae^{-j\omega}| = |a| |e^{-j\omega}| = |a| \cdot 1 = |a|$.
So, the condition for the DTFT to exist is $|a| < 1$.
When $|a| < 1$, the sum is:
$X(\omega) = \frac{1}{1 - ae^{-j\omega}}$

**Answer 2:**
Given $X(\omega) = \frac{1}{1 - 0.5e^{-j\omega}}$ for $x[n]$.
We want to find the DTFT of $y[n] = x[n-3]$.
Using the time-shifting property $x[n-n_0] \leftrightarrow e^{-j\omega n_0} X(\omega)$, with $n_0 = 3$:
$Y(\omega) = e^{-j\omega \cdot 3} X(\omega) = e^{-j3\omega} \left(\frac{1}{1 - 0.5e^{-j\omega}}\right)$
$Y(\omega) = \frac{e^{-j3\omega}}{1 - 0.5e^{-j\omega}}$

**Answer 3:**
The impulse response is $h[n] = \delta[n] - 0.5\delta[n-1]$.
The frequency response $H(\omega)$ is the DTFT of $h[n]$:
$H(\omega) = \sum_{n=-\infty}^{\infty} h[n] e^{-j\omega n}$
$H(\omega) = (\delta[n] - 0.5\delta[n-1]) \leftrightarrow \sum_{n=-\infty}^{\infty} \delta[n]e^{-j\omega n} - 0.5 \sum_{n=-\infty}^{\infty} \delta[n-1]e^{-j\omega n}$
Using the property that $\delta[n] \leftrightarrow 1$ and $\delta[n-k] \leftrightarrow e^{-j\omega k}$:
$H(\omega) = 1 - 0.5e^{-j\omega}$

For a DC input signal, $\omega=0$.
$H(0) = 1 - 0.5e^{-j\cdot 0} = 1 - 0.5e^0 = 1 - 0.5 \cdot 1 = 0.5$.
The system attenuates the DC component by a factor of 0.5.

**Answer 4:**
For a real signal $x[n]$, we know $X(\omega)$ has conjugate symmetry: $X^*(\omega) = X(-\omega)$.
If $x[n]$ is also an even function, $x[n] = x[-n]$.
Let's check the symmetry of $X(\omega)$:
$X(-\omega) = \sum_{n=-\infty}^{\infty} x[n] e^{-j(-\omega) n} = \sum_{n=-\infty}^{\infty} x[n] e^{j\omega n}$
Since $x[n] = x[-n]$, let $m = -n$. When $n \to -\infty$, $m \to \infty$. When $n \to \infty$, $m \to -\infty$.
$X(-\omega) = \sum_{m=-\infty}^{\infty} x[-m] e^{j\omega (-m)} = \sum_{m=-\infty}^{\infty} x[m] e^{-j\omega m} = X(\omega)$

Now consider the conjugate symmetry: $X^*(\omega) = X(-\omega)$.
We found $X(-\omega) = X(\omega)$.
So, $X^*(\omega) = X(\omega)$.
This means $X(\omega)$ is purely real.
Also, for real signals, $|X(\omega)|$ is even and $\angle X(\omega)$ is odd. Since $X(\omega)$ is real, its phase is either $0$ or $\pi$. If $X(\omega)$ is real and even, then $|X(\omega)|$ is even. If $X(\omega)$ is positive, its phase is $0$ (even). If $X(\omega)$ is negative, its phase is $\pi$ (odd). However, if $X(\omega)$ is real, then $X^*(\omega) = X(\omega)$. Combined with $X^*(\omega) = X(-\omega)$, this implies $X(\omega) = X(-\omega)$.
Since $X(\omega)$ is real, $X^*(\omega) = X(\omega)$. From $X^*(\omega) = X(-\omega)$, we get $X(\omega) = X(-\omega)$. This means $X(\omega)$ is an even function.
So, if $x[n]$ is real and even, $X(\omega)$ is real and even.

**Answer 5:**
The DTFT $X(\omega) = 2\pi \delta(\omega) + \frac{1}{1-e^{-j\omega}}$ is the sum of two terms.
The term $2\pi \delta(\omega)$ is the DTFT of the unit step function $u[n]$.
The term $\frac{1}{1-e^{-j\omega}}$ is the DTFT of $a^n u[n]$ with $a=1$. However, $a^n u[n]$ for $a=1$ is just $u[n]$, and its DTFT is not $\frac{1}{1-e^{-j\omega}}$ but rather $\pi \delta(\omega)$. This indicates a slight nuance or common representation.

Let's re-examine the DTFT of the unit step:
$X(\omega) = \sum_{n=0}^{\infty} e^{-j\omega n}$
When we consider the system response to a unit step, the DC component $(\omega=0)$ is crucial. The $\frac{1}{1-e^{-j\omega}}$ term without the delta function would approach infinity at $\omega=0$. The $\pi \delta(\omega)$ term captures the DC component correctly.

Therefore, $x[n]$ is the unit step function, $x[n] = u[n]$. The representation $X(\omega) = \pi \delta(\omega) + \frac{1}{1 - e^{-j\omega}}$ is the standard form for the DTFT of $u[n]$.

---

### Conclusion

The DTFT is a powerful tool for analyzing the frequency content of discrete-time signals. Its properties, such as linearity, time/frequency shifting, and convolution, simplify complex operations in signal processing. Understanding the relationship between the DTFT and the Fourier Transform of continuous-time signals is also key to grasping concepts like aliasing. This foundational knowledge of the DTFT is essential before moving on to its discrete counterpart, the Discrete Fourier Transform (DFT), which is used for practical computation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
