---
title: "Inverse transform."
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe52b"
status: "completed"
scrapedAt: "2026-05-23T17:52:34.671Z"
---
# Signals and Systems: Module 3 - Sampling and Discrete-Time Frequency Representation

## Topic: Inverse Transform

This topic delves into the process of reconstructing a discrete-time signal from its frequency domain representation. This is a crucial step in understanding how signals are processed and how information is recovered after transformations.

**Learning Outcomes:**

*   Understand the concept of the Inverse Discrete-Time Fourier Transform (IDTFT).
*   Be able to compute the IDTFT for various discrete-time signals.
*   Relate the IDTFT to the reconstruction of a sampled continuous-time signal.
*   Appreciate the properties of the IDTFT and its applications.

**Course Outcomes Alignment:**

*   **CO3:** Analyze signals in frequency domain using various transforms and examine their properties. (Knowledge Level: K3) - This topic directly addresses the analysis of signals in the frequency domain by providing the means to reconstruct them.
*   **CO4:** Interpret the use of various transforms to analyze continuous and discrete time LTI systems. (Knowledge Level: K3) - Understanding the inverse transform is essential for analyzing the output of LTI systems in the frequency domain and then interpreting the time-domain behavior.

---

### 1. Introduction to the Inverse Discrete-Time Fourier Transform (IDTFT)

The Discrete-Time Fourier Transform (DTFT) transforms a discrete-time signal $x[n]$ into its frequency domain representation $X(e^{j\omega})$. The IDTFT is the reverse operation, allowing us to recover the original discrete-time signal $x[n]$ from its frequency-domain representation $X(e^{j\omega})$.

**Key Concept:** The DTFT is defined for infinite-duration discrete-time signals. The IDTFT reconstructs these signals.

**Definition:** The Inverse Discrete-Time Fourier Transform (IDTFT) of a frequency-domain representation $X(e^{j\omega})$ is given by:

$$
x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} X(e^{j\omega}) e^{j\omega n} d\omega
$$

**Important Points:**

*   The integration is performed over one period of the frequency spectrum, typically from $-\pi$ to $\pi$.
*   The term $e^{j\omega n}$ is the complex exponential that oscillates with frequency $\omega$ and time index $n$.
*   The IDTFT shows that the discrete-time signal $x[n]$ can be represented as a superposition of complex exponentials with different frequencies.

**Reference:** Oppenheim & Willsky, Chapter 7: Fourier Series and Fourier Transform, discusses the inverse Fourier transform for continuous-time signals, with analogous principles applying to the discrete-time case. Haykin also extensively covers transform techniques in his text.

---

### 2. Properties of the IDTFT

The IDTFT shares several useful properties with the DTFT, which simplify signal analysis and manipulation.

| Property          | Time Domain ($x[n]$) | Frequency Domain ($X(e^{j\omega})$) | Description                                                                                                                                                                                                |
| :---------------- | :------------------- | :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Linearity**     | $ax_1[n] + bx_2[n]$  | $aX_1(e^{j\omega}) + bX_2(e^{j\omega})$ | If $x_1[n] \leftrightarrow X_1(e^{j\omega})$ and $x_2[n] \leftrightarrow X_2(e^{j\omega})$, then a linear combination of signals in the time domain corresponds to the same linear combination in the frequency domain. |
| **Time Shifting** | $x[n-n_0]$           | $e^{-j\omega n_0} X(e^{j\omega})$    | Shifting a signal in the time domain by $n_0$ samples results in a phase shift in the frequency domain.                                                                                                    |
| **Frequency Shifting** | $e^{j\omega_0 n} x[n]$ | $X(e^{j(\omega-\omega_0)})$       | Multiplying a signal by a complex exponential in the time domain shifts its frequency spectrum.                                                                                                           |
| **Differentiation in Frequency** | $j n x[n]$           | $\frac{d}{d\omega} X(e^{j\omega})$  | Multiplication by $n$ in the time domain corresponds to differentiation with respect to frequency in the frequency domain. This property is particularly useful for obtaining expressions for $n x[n]$. |
| **Parseval's Theorem** | $\sum_{n=-\infty}^{\infty} |x[n]|^2$      | $\frac{1}{2\pi} \int_{-\pi}^{\pi} |X(e^{j\omega})|^2 d\omega$                                                                                                                                      | The total energy of a signal is conserved between the time and frequency domains.                                                                                                                     |

**Reference:** Oppenheim & Willsky, Chapter 7, details these properties for continuous-time Fourier Transforms, and these are directly transferable to the discrete-time domain. Lathi's book also provides comprehensive coverage of transform properties.

---

### 3. Computing the IDTFT

The computation of the IDTFT can be done using the integral definition. However, for many common signals, recognizing the frequency-domain representation and using the properties or known inverse transforms is more practical.

#### 3.1 Using the Integral Definition

**Example 1:** Find the IDTFT of $X(e^{j\omega}) = 2\pi \delta(\omega)$ for $-\pi < \omega \leq \pi$.

**Solution:**
Using the IDTFT formula:
$$
x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} 2\pi \delta(\omega) e^{j\omega n} d\omega
$$
Since $\delta(\omega)$ is zero everywhere except at $\omega=0$, and the integration interval includes $\omega=0$, the integral evaluates to:
$$
x[n] = e^{j(0)n} = e^0 = 1
$$
Therefore, $x[n] = 1$ for all $n$. This makes sense because a DC component (zero frequency) in the frequency domain corresponds to a constant signal in the time domain.

#### 3.2 Using Known Inverse Transforms and Properties

Many common DTFT pairs can be memorized or derived. Here are a few important ones:

*   **Unit Impulse:**
    $ \delta[n] \leftrightarrow 1 $
*   **Unit Step:**
    $ u[n] \leftrightarrow \frac{1}{1-e^{-j\omega}} + \pi \sum_{k=-\infty}^{\infty} \delta(\omega - 2\pi k) $
    For the principal interval $[-\pi, \pi]$, the sum term is often represented as $\delta(\omega)$ at $\omega=\pi$ and handled by the integration limits. A simpler representation often used in contexts focusing on the response of LTI systems is $e^{j\omega/2} / (2\cos(\omega/2))$ or similar, which avoids the singularity. However, for the purpose of IDTFT reconstruction, understanding that the unit step has a DC component (at $\omega=0$) and a specific frequency response is key.
*   **Complex Exponential:**
    $ a^n u[n] \leftrightarrow \frac{1}{1 - a e^{-j\omega}} $, for $|a| < 1$
*   **Rectangular Pulse (Finite Duration Sequence):**
    $ x[n] = 1, \text{ for } 0 \le n \le N-1 $, and $0$ otherwise.
    $ X(e^{j\omega}) = e^{-j\omega(N-1)/2} \frac{\sin(N\omega/2)}{\sin(\omega/2)} $

**Example 2:** Find the IDTFT of $X(e^{j\omega}) = \frac{1}{1 - 0.5 e^{-j\omega}}$.

**Solution:**
This directly matches the DTFT pair for $a^n u[n]$. Here, $a = 0.5$.
Therefore, $x[n] = (0.5)^n u[n]$.

**Example 3:** Find the IDTFT of $X(e^{j\omega}) = e^{-j2\omega}$.

**Solution:**
We know that a time shift in the time domain results in a multiplication by $e^{-j\omega n_0}$ in the frequency domain. Conversely, a multiplication by $e^{-j\omega n_0}$ in the frequency domain corresponds to a time shift $x[n-n_0]$ in the time domain.
Here, $n_0 = 2$.
The DTFT of a unit impulse is $1$. So, if $X(e^{j\omega}) = 1$, then $x[n] = \delta[n]$.
Since $X(e^{j\omega}) = e^{-j2\omega} \times 1$, we can use the time-shifting property in reverse.
$x[n] = \delta[n-2]$.

**Example 4:** Find the IDTFT of $X(e^{j\omega}) = \cos(\omega)$.

**Solution:**
We can use Euler's formula to express $\cos(\omega)$:
$ \cos(\omega) = \frac{e^{j\omega} + e^{-j\omega}}{2} $
So, $ X(e^{j\omega}) = \frac{1}{2} e^{j\omega} + \frac{1}{2} e^{-j\omega} $
We know the following DTFT pairs:
*   $ \delta[n] \leftrightarrow 1 $
*   $ \delta[n-1] \leftrightarrow e^{-j\omega} $ (time shift by 1)
*   $ \delta[n+1] \leftrightarrow e^{j\omega} $ (time shift by -1)

Applying the inverse time-shifting property:
*   $ \frac{1}{2} e^{j\omega} \leftrightarrow \frac{1}{2} \delta[n+1] $
*   $ \frac{1}{2} e^{-j\omega} \leftrightarrow \frac{1}{2} \delta[n-1] $

Using the linearity property of the IDTFT:
$ x[n] = \frac{1}{2} \delta[n+1] + \frac{1}{2} \delta[n-1] $

**Reference:** Ambardar's book provides numerous examples of inverse transforms for common discrete-time signals and systems. Ziemer's text also offers a good balance of theory and practical examples.

---

### 4. IDTFT and Reconstruction of Sampled Signals

In Module 3, we learned about sampling continuous-time signals. The DTFT of a sampled signal $x_s[n] = x[nT]$ is related to the DTFT of the original continuous-time signal $X(j\Omega)$ by:

$ X(e^{j\omega}) = \sum_{k=-\infty}^{\infty} X\left(j\frac{\omega}{T} - j\frac{2\pi k}{T}\right) $

This equation shows that the DTFT of the sampled signal is a scaled and shifted version of the original continuous-time signal's spectrum.

**The IDTFT plays a crucial role in reconstructing the original continuous-time signal $x(t)$ from the discrete-time signal $x[n]$.** If we can recover $x[n]$ from $X(e^{j\omega})$ using the IDTFT, and if the sampling rate was sufficient (i.e., $\Omega_s > 2\Omega_M$, where $\Omega_M$ is the maximum frequency in $X(j\Omega)$ to avoid aliasing), then we can perfectly reconstruct $x(t)$ using the sinc interpolation formula:

$ x(t) = \sum_{n=-\infty}^{\infty} x[n] \text{sinc}\left(\frac{t}{T} - n\right) $
where $\text{sinc}(u) = \frac{\sin(\pi u)}{\pi u}$.

**Key Concept:** The IDTFT allows us to get the discrete-time samples $x[n]$ from the frequency representation of these samples. These $x[n]$ are then used in an interpolation process to reconstruct the original continuous-time signal $x(t)$.

**Reference:** Oppenheim & Willsky, Chapter 10, discusses the sampling process and reconstruction, highlighting the relationship between continuous-time and discrete-time processing.

---

### 5. Practice Questions and Exercises

**Question 1:**
Find the IDTFT of $X(e^{j\omega}) = \frac{1}{1 - 0.8e^{-j\omega}} + \frac{0.5}{1 - 0.2e^{-j\omega}}$.

**Answer 1:**
This expression is a sum of two terms, each in the form of the DTFT of $a^n u[n]$.
$ X(e^{j\omega}) = X_1(e^{j\omega}) + X_2(e^{j\omega}) $
Where $X_1(e^{j\omega}) = \frac{1}{1 - 0.8e^{-j\omega}}$ and $X_2(e^{j\omega}) = \frac{0.5}{1 - 0.2e^{-j\omega}}$.
Using linearity and the known pair $a^n u[n] \leftrightarrow \frac{1}{1 - a e^{-j\omega}}$:
$x_1[n] = (0.8)^n u[n]$
$x_2[n] = 0.5 (0.2)^n u[n]$
Therefore, $x[n] = x_1[n] + x_2[n] = (0.8)^n u[n] + 0.5 (0.2)^n u[n]$.

**Question 2:**
Determine the discrete-time signal $x[n]$ whose DTFT is $X(e^{j\omega}) = 4 e^{j3\omega}$.

**Answer 2:**
We know that $\delta[n] \leftrightarrow 1$.
The property of time shifting states that $x[n-n_0] \leftrightarrow e^{-j\omega n_0} X(e^{j\omega})$.
In this case, $X(e^{j\omega}) = 4 \times e^{j3\omega}$. The term $4$ is a scaling factor, and $e^{j3\omega}$ is a frequency shift.
From the property $e^{j\omega_0 n} x[n] \leftrightarrow X(e^{j(\omega-\omega_0)})$, we have $e^{j3\omega}$ corresponds to multiplication by $e^{-j3n}$ in the time domain, not $e^{j3n}$.
The correct property for frequency shifting is:
$e^{j\omega_0 n} x[n] \leftrightarrow X(e^{j(\omega - \omega_0)})$
So, to get $e^{j3\omega}$ in the frequency domain, we would need $x[n]$ to be multiplied by $e^{-j3n}$ in the time domain.
Let's consider $x[n] = A \delta[n-n_0]$. Its DTFT is $A e^{-j\omega n_0}$.
We have $X(e^{j\omega}) = 4 e^{j3\omega}$. This can be written as $4 e^{-j\omega (-3)}$.
Comparing this to $A e^{-j\omega n_0}$, we have $A=4$ and $n_0 = -3$.
Therefore, $x[n] = 4 \delta[n - (-3)] = 4 \delta[n+3]$.

**Question 3:**
Consider the signal $X(e^{j\omega}) = \pi \left[ \delta(\omega - \frac{\pi}{2}) + \delta(\omega + \frac{\pi}{2}) \right]$ for $-\pi < \omega \le \pi$. Find the IDTFT of this signal.

**Answer 3:**
Using the IDTFT definition:
$$
x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} \pi \left[ \delta(\omega - \frac{\pi}{2}) + \delta(\omega + \frac{\pi}{2}) \right] e^{j\omega n} d\omega
$$
$$
x[n] = \frac{1}{2} \int_{-\pi}^{\pi} \delta(\omega - \frac{\pi}{2}) e^{j\omega n} d\omega + \frac{1}{2} \int_{-\pi}^{\pi} \delta(\omega + \frac{\pi}{2}) e^{j\omega n} d\omega
$$
Due to the property of the Dirac delta function, $\int_{-\infty}^{\infty} f(x) \delta(x-a) dx = f(a)$:
For the first integral, the pole is at $\omega = \frac{\pi}{2}$, which is within $[-\pi, \pi]$.
$ \int_{-\pi}^{\pi} \delta(\omega - \frac{\pi}{2}) e^{j\omega n} d\omega = e^{j(\pi/2)n} $
For the second integral, the pole is at $\omega = -\frac{\pi}{2}$, which is also within $[-\pi, \pi]$.
$ \int_{-\pi}^{\pi} \delta(\omega + \frac{\pi}{2}) e^{j\omega n} d\omega = e^{j(-\pi/2)n} $
So,
$$
x[n] = \frac{1}{2} e^{j\frac{\pi}{2}n} + \frac{1}{2} e^{-j\frac{\pi}{2}n}
$$
Using Euler's formula, $\cos(\theta) = \frac{e^{j\theta} + e^{-j\theta}}{2}$:
$ x[n] = \cos\left(\frac{\pi}{2}n\right) $

**Important Note for Practice:** Always verify that the frequency shifts or impulse locations fall within the integration interval $[-\pi, \pi]$ when using the integral definition.

---

### 6. Important Points to Remember

*   The IDTFT reconstructs a discrete-time signal from its frequency-domain representation.
*   The integral definition is the fundamental basis for the IDTFT.
*   Recognizing standard DTFT pairs and utilizing the properties of the DTFT (linearity, time shifting, frequency shifting, etc.) is crucial for efficient computation.
*   The IDTFT is essential for understanding how to recover a discrete-time signal from its spectral characteristics.
*   In the context of sampling, the IDTFT is the first step in reconstructing a continuous-time signal from its sampled version.
*   The frequency domain for discrete-time signals is periodic with period $2\pi$.

---

### 7. Connection to Course Outcomes

*   **CO3:** This topic directly enables the analysis of signals in the frequency domain by providing the means to translate back to the time domain. Understanding $X(e^{j\omega})$ is incomplete without the ability to perform the inverse transform.
*   **CO4:** When analyzing LTI systems, we often work in the frequency domain. The IDTFT allows us to interpret the system's output in the time domain after it has been represented and manipulated in the frequency domain. For instance, if $Y(e^{j\omega}) = H(e^{j\omega})X(e^{j\omega})$, the IDTFT of $Y(e^{j\omega})$ gives the time-domain output $y[n]$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
