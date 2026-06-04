---
title: "Discrete time Fourier transform (DTFT)-Convergence condition"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe528"
status: "completed"
scrapedAt: "2026-05-23T17:52:32.538Z"
---
# Module 3: Sampling and Discrete-Time Fourier Transform (DTFT)

## Topic: Discrete-Time Fourier Transform (DTFT) - Convergence Condition

### 1. Introduction to DTFT

The Discrete-Time Fourier Transform (DTFT) is a fundamental tool for analyzing discrete-time signals in the frequency domain. It transforms a discrete-time signal, $x[n]$, into a continuous-frequency spectrum, $X(e^{j\omega})$. This transformation is crucial for understanding the frequency content of discrete-time signals, which is a direct outcome of sampling continuous-time signals, as explored in the earlier parts of Module 3. The DTFT allows us to characterize how the energy or amplitude of a discrete-time signal is distributed across different frequencies.

**Key Concept:** The DTFT represents a discrete-time signal as a sum of complex exponentials, where each exponential component corresponds to a specific frequency.

**Learning Outcome Addressed:** This section directly supports the learning outcomes related to analyzing signals in the frequency domain (CO3) and interpreting the use of transforms to analyze discrete-time signals (CO4).

### 2. Definition of the DTFT

For a discrete-time signal $x[n]$, its Discrete-Time Fourier Transform (DTFT), denoted by $X(e^{j\omega})$, is defined as:

$$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}$$

where:
*   $X(e^{j\omega})$ is the DTFT of $x[n]$.
*   $\omega$ is the angular frequency, varying over the range $(-\pi, \pi]$ or $[0, 2\pi)$. The periodicity of $e^{-j\omega n}$ with respect to $\omega$ with a period of $2\pi$ means that the frequency spectrum of a discrete-time signal is periodic.
*   $e^{-j\omega n}$ is a complex exponential representing a sinusoidal component at frequency $\omega$.

The DTFT is the inverse Fourier transform of the Discrete-Time Fourier Series (DTFS) coefficients, but it applies to sequences that are not necessarily periodic.

### 3. Inverse DTFT (IDTFT)

The original discrete-time signal $x[n]$ can be recovered from its DTFT $X(e^{j\omega})$ using the Inverse Discrete-Time Fourier Transform (IDTFT):

$$x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} X(e^{j\omega}) e^{j\omega n} d\omega$$

This equation shows that the discrete-time signal can be represented as a continuous superposition of complex exponentials with frequencies ranging from $-\pi$ to $\pi$.

**Key Concept:** The DTFT provides a mapping from the time domain to the frequency domain for discrete-time signals, and the IDTFT allows for the reverse transformation.

**References:**
*   **Oppenheim & Willsky:** Chapter 9 (Fourier Analysis of Discrete-Time Signals).
*   **Haykin:** Chapter 7 (The z-Transform). While the primary focus is the z-transform, the DTFT is a special case when $|z|=1$.

### 4. Convergence Condition of the DTFT

For the DTFT to exist (i.e., for the sum in its definition to converge), the signal $x[n]$ must satisfy certain conditions. The most common and practical convergence condition is:

**Absolute Summability:** The sum of the absolute values of the signal samples must be finite.

$$\sum_{n=-\infty}^{\infty} |x[n]| < \infty$$

**Explanation:**
The DTFT definition is $X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}$.
We know that $|e^{-j\omega n}| = | \cos(\omega n) - j \sin(\omega n) | = \sqrt{\cos^2(\omega n) + \sin^2(\omega n)} = 1$.
Therefore, $|X(e^{j\omega})| = \left|\sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}\right|$.
By the triangle inequality, $|X(e^{j\omega})| \le \sum_{n=-\infty}^{\infty} |x[n] e^{-j\omega n}| = \sum_{n=-\infty}^{\infty} |x[n]| |e^{-j\omega n}| = \sum_{n=-\infty}^{\infty} |x[n]|$.
For $X(e^{j\omega})$ to be finite for all $\omega$, it is sufficient that the right-hand side, $\sum_{n=-\infty}^{\infty} |x[n]|$, is finite.

**Other Convergence Conditions:**
While absolute summability is the most common and useful condition, other conditions can also guarantee convergence:

1.  **Finite Energy:** If the signal has finite energy, i.e., $\sum_{n=-\infty}^{\infty} |x[n]|^2 < \infty$, the DTFT will converge in a mean-square sense. This is related to Parseval's theorem for discrete-time signals.

2.  **Bounded Support (Finite Duration):** If $x[n]$ is non-zero only for a finite number of samples (i.e., $x[n] = 0$ for $|n| > N$ for some integer $N$), then the sum $\sum_{n=-\infty}^{\infty} |x[n]|$ will be finite, and thus the DTFT will converge. This is a very common scenario for signals that are processed digitally.

**Important Point:** The DTFT is defined for sequences that are not necessarily absolutely summable. For instance, periodic signals or signals that decay slowly can have a DTFT, but it might be a generalized function (like a Dirac delta function in the frequency domain). However, for typical signal processing applications where we analyze the frequency content of finite-duration or exponentially decaying signals, absolute summability is the key.

**References:**
*   **Oppenheim & Willsky:** Section 9.2 (The Fourier Transform of Discrete-Time Sequences). They discuss convergence conditions and the implications for signals that don't meet the absolute summability criteria.
*   **Haykin:** Section 7.2 (The z-transform). The convergence of the z-transform on the unit circle ($z=e^{j\omega}$) directly relates to the DTFT.

### 5. Examples of DTFT Convergence

Let's examine the convergence of the DTFT for different types of discrete-time signals.

**Example 1: Absolutely Summable Signal**
Let $x[n] = a^n u[n]$ where $|a| < 1$ and $u[n]$ is the unit step function.

*   **Check Convergence:**
    $$\sum_{n=-\infty}^{\infty} |x[n]| = \sum_{n=0}^{\infty} |a^n u[n]| = \sum_{n=0}^{\infty} |a|^n$$
    This is a geometric series. For $|a| < 1$, this sum converges to $\frac{1}{1-|a|}$.
    Since the sum of absolute values is finite, the DTFT converges.

*   **DTFT Calculation (for completeness, though not the focus of convergence):**
    $$X(e^{j\omega}) = \sum_{n=0}^{\infty} a^n e^{-j\omega n} = \sum_{n=0}^{\infty} (ae^{-j\omega})^n$$
    This is a geometric series with ratio $ae^{-j\omega}$. Since $|ae^{-j\omega}| = |a| |e^{-j\omega}| = |a| < 1$, the series converges to:
    $$X(e^{j\omega}) = \frac{1}{1 - ae^{-j\omega}}$$

**Example 2: Non-Absolutely Summable Signal (but finite energy)**
Let $x[n] = u[n]$ (unit step function).

*   **Check Convergence:**
    $$\sum_{n=-\infty}^{\infty} |x[n]| = \sum_{n=0}^{\infty} |u[n]| = \sum_{n=0}^{\infty} 1 = \infty$$
    This signal is *not* absolutely summable. Therefore, the standard DTFT definition $\sum x[n]e^{-j\omega n}$ does not converge to a finite value for all $\omega$.

*   **What happens in practice?** The DTFT of a unit step is a Dirac delta function at DC (zero frequency) and a scaled version of the Dirac comb in the frequency domain. Specifically, its DTFT is often represented as $\pi \delta(\omega) + \frac{1}{1-e^{-j\omega}}$.
    This indicates that the DTFT might exist in a generalized sense (as a distribution) even if the absolute summability condition is not met. However, for many practical analysis purposes, we often deal with truncated or windowed versions of signals like the unit step.

**Example 3: Finite Duration Signal**
Let $x[n] = 1$ for $n = 0, 1, 2$, and $x[n] = 0$ otherwise.

*   **Check Convergence:**
    $$\sum_{n=-\infty}^{\infty} |x[n]| = |x[0]| + |x[1]| + |x[2]| = |1| + |1| + |1| = 3$$
    Since the sum is finite, the DTFT converges.

*   **DTFT Calculation:**
    $$X(e^{j\omega}) = \sum_{n=0}^{2} 1 \cdot e^{-j\omega n} = e^{-j\omega(0)} + e^{-j\omega(1)} + e^{-j\omega(2)}$$
    $$X(e^{j\omega}) = 1 + e^{-j\omega} + e^{-j\omega 2} = e^{-j\omega} (e^{j\omega} + 1 + e^{-j\omega})$$
    $$X(e^{j\omega}) = e^{-j\omega} (1 + 2 \cos(\omega))$$
    This is a finite, well-defined function of $\omega$.

**Key Concept:** Signals that are absolutely summable always have a convergent DTFT. Signals with finite duration also always have a convergent DTFT. For other signals, the DTFT might exist in a generalized sense, often involving Dirac delta functions in the frequency domain, indicating a constant or growing component.

**Learning Outcome Addressed:** This section reinforces the understanding of frequency domain representations (CO3) by showing how different signal characteristics affect the existence and form of the DTFT.

### 6. Importance of Convergence for Discrete-Time Systems (LTI Systems)

In the context of Linear Time-Invariant (LTI) systems, the DTFT plays a crucial role in analyzing system behavior. The frequency response of an LTI system, $H(e^{j\omega})$, is the DTFT of its impulse response, $h[n]$.

$$H(e^{j\omega}) = \sum_{n=-\infty}^{\infty} h[n] e^{-j\omega n}$$

For a system to be stable, its impulse response $h[n]$ must be absolutely summable:

$$\sum_{n=-\infty}^{\infty} |h[n]| < \infty$$

This condition ensures that the frequency response $H(e^{j\omega})$ is well-defined and finite for all frequencies. If the impulse response is not absolutely summable, the system is unstable, and its frequency response might not be a well-behaved function.

**Connection to Course Outcomes:**
*   **CO2 (Stability and Causality):** The absolute summability of the impulse response $h[n]$ is the direct condition for the stability of an LTI system. This is also directly linked to the convergence of the DTFT of $h[n]$ to obtain the frequency response $H(e^{j\omega})$.
*   **CO3 & CO4 (Frequency Domain Analysis):** The ability to analyze signals and systems in the frequency domain relies on the existence of their Fourier transforms. The convergence condition ensures that this analysis is meaningful.

**References:**
*   **Oppenheim & Willsky:** Chapter 8 (Frequency Response of LTI Systems). They emphasize the connection between impulse response, stability, and frequency response.

### 7. Points to Remember

*   **DTFT Definition:** $X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}$.
*   **IDTFT Definition:** $x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} X(e^{j\omega}) e^{j\omega n} d\omega$.
*   **Primary Convergence Condition:** The DTFT of a discrete-time signal $x[n]$ converges if the signal is absolutely summable: $\sum_{n=-\infty}^{\infty} |x[n]| < \infty$.
*   **Finite Duration Signals:** Always have a convergent DTFT.
*   **System Stability:** An LTI system is stable if and only if its impulse response $h[n]$ is absolutely summable, which means the system's frequency response $H(e^{j\omega})$ converges.
*   **Periodic Spectrum:** The DTFT of a discrete-time signal is always periodic with a period of $2\pi$ in the frequency variable $\omega$.

### 8. Practice Questions/Exercises

**Question 1:**
Determine if the DTFT of the following signals converges. Justify your answer by checking the absolute summability condition.

(a) $x[n] = (1/2)^n u[n-2]$
(b) $x[n] = \sin(\frac{\pi}{4} n)$
(c) $x[n] = 1$ for $-5 \le n \le 5$, and $x[n] = 0$ otherwise.

**Question 2:**
Consider an LTI system with impulse response $h[n] = n u[n]$. Is this system stable? Explain why or why not in terms of the convergence of its DTFT.

**Question 3:**
For the signal $x[n] = \delta[n-3]$, does its DTFT converge? If so, why? (Hint: Think about the nature of the impulse function).

---

### Answers to Practice Questions

**Answer 1:**

(a) $x[n] = (1/2)^n u[n-2]$
To check absolute summability:
$\sum_{n=-\infty}^{\infty} |x[n]| = \sum_{n=0}^{\infty} |(1/2)^n u[n-2]| = \sum_{n=2}^{\infty} (1/2)^n$
This is a geometric series with first term $(1/2)^2 = 1/4$ and common ratio $1/2$. Since $|1/2| < 1$, the series converges.
Sum = $\frac{\text{first term}}{1 - \text{ratio}} = \frac{1/4}{1 - 1/2} = \frac{1/4}{1/2} = 1/2$.
Since $\sum_{n=-\infty}^{\infty} |x[n]| = 1/2 < \infty$, the DTFT converges.

(b) $x[n] = \sin(\frac{\pi}{4} n)$
To check absolute summability:
$\sum_{n=-\infty}^{\infty} |x[n]| = \sum_{n=-\infty}^{\infty} |\sin(\frac{\pi}{4} n)|$
The values of $\sin(\frac{\pi}{4} n)$ are periodic and non-zero for many $n$ (e.g., $\sin(\pi/4) = 1/\sqrt{2}$, $\sin(\pi/2)=1$, $\sin(3\pi/4)=1/\sqrt{2}$, $\sin(\pi)=0$, $\sin(5\pi/4)=-1/\sqrt{2}$, etc.). The sum of absolute values will grow unboundedly.
For example, for $n=1, 2, 3$, values are $1/\sqrt{2}, 1, 1/\sqrt{2}$. For $n=9, 10, 11$, the values repeat. The terms don't decay to zero.
Therefore, $\sum_{n=-\infty}^{\infty} |x[n]| = \infty$. The DTFT does not converge in the absolute summability sense. (However, it does converge in a generalized sense due to its periodicity).

(c) $x[n] = 1$ for $-5 \le n \le 5$, and $x[n] = 0$ otherwise.
This is a finite duration signal.
$\sum_{n=-\infty}^{\infty} |x[n]| = \sum_{n=-5}^{5} |1| = \sum_{n=-5}^{5} 1$
This sum is $1 + 1 + \dots + 1$ (11 times).
$\sum_{n=-\infty}^{\infty} |x[n]| = 11$.
Since $11 < \infty$, the DTFT converges.

**Answer 2:**
The system is stable if and only if its impulse response $h[n]$ is absolutely summable.
We need to check $\sum_{n=-\infty}^{\infty} |h[n]| = \sum_{n=-\infty}^{\infty} |n u[n]|$.
$h[n] = n u[n]$ means $h[n] = n$ for $n \ge 0$ and $h[n] = 0$ for $n < 0$.
So, $\sum_{n=0}^{\infty} |n| = \sum_{n=0}^{\infty} n = 0 + 1 + 2 + 3 + \dots$
This sum diverges to infinity.
Since $\sum_{n=-\infty}^{\infty} |h[n]| = \infty$, the impulse response $h[n]$ is not absolutely summable. Therefore, the LTI system is **unstable**. Consequently, its DTFT (the frequency response $H(e^{j\omega})$) does not converge to a finite value for all $\omega$ in the standard sense.

**Answer 3:**
The signal is $x[n] = \delta[n-3]$. This is a unit impulse located at $n=3$.
This is a finite duration signal, as it is non-zero only at $n=3$.
Let's check absolute summability:
$\sum_{n=-\infty}^{\infty} |x[n]| = \sum_{n=-\infty}^{\infty} |\delta[n-3]|$
The impulse function $\delta[n-3]$ is 1 at $n=3$ and 0 everywhere else.
So, the sum is $| \delta[0-3]| + |\delta[1-3]| + \dots + |\delta[3-3]| + \dots = 0 + 0 + \dots + |1| + 0 + \dots = 1$.
Since $\sum_{n=-\infty}^{\infty} |x[n]| = 1 < \infty$, the DTFT of $x[n] = \delta[n-3]$ converges.
The DTFT of $\delta[n]$ is 1. The DTFT of $\delta[n-n_0]$ is $e^{-j\omega n_0}$.
So, the DTFT of $\delta[n-3]$ is $e^{-j\omega 3}$. This is a well-defined, finite value for all $\omega$.

---
This detailed note covers the definition, convergence conditions, examples, and significance of the DTFT, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
