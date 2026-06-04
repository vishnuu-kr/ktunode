---
title: "Inverse transform"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe52e"
status: "completed"
scrapedAt: "2026-05-23T17:52:36.816Z"
---
# Signals and Systems: Module 3 - Inverse Transform

## Introduction

This module focuses on the transition from continuous-time (CT) signals to discrete-time (DT) signals through sampling, and then delves into the frequency-domain representation of these DT signals. A crucial aspect of understanding discrete-time signals and systems is the ability to perform the **inverse transform**. This allows us to recover the original discrete-time signal from its frequency-domain representation.

## Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental concept of the inverse Discrete-Time Fourier Transform (DTFT).
*   Derive and apply the inverse DTFT formula to reconstruct a discrete-time signal from its frequency-domain representation.
*   Relate the inverse DTFT to the concept of convolution in the time domain.
*   Recognize the periodicity of the DTFT and its implications for the inverse transform.
*   Apply the inverse DTFT to solve problems involving discrete-time signals and systems.

## Key Concepts and Definitions

### 1. Discrete-Time Fourier Transform (DTFT) - A Quick Recap

Before diving into the inverse transform, let's briefly recap the forward DTFT. For a discrete-time signal $x[n]$, its DTFT $X(e^{j\omega})$ is defined as:

$$
X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}
$$

The DTFT represents the frequency content of a discrete-time signal and is periodic with a period of $2\pi$.

### 2. The Inverse Discrete-Time Fourier Transform (IDTFT)

The Inverse Discrete-Time Fourier Transform (IDTFT) is the mathematical operation that allows us to recover the original discrete-time signal $x[n]$ from its DTFT $X(e^{j\omega})$. The formula for the IDTFT is given by:

$$
x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} X(e^{j\omega}) e^{j\omega n} d\omega
$$

**Explanation of the Formula:**

*   **$\frac{1}{2\pi}$:** This is a normalization factor.
*   **$\int_{-\pi}^{\pi} \dots d\omega$:** This indicates integration over one period of the frequency variable $\omega$. Since $X(e^{j\omega})$ is periodic with period $2\pi$, integrating over any interval of length $2\pi$ will yield the same result. The interval $[-\pi, \pi]$ is commonly used.
*   **$X(e^{j\omega}) e^{j\omega n}$:** This represents the "frequency components" of the signal, modulated by $e^{j\omega n}$. Summing (integrating) these components across all frequencies reconstructs the time-domain signal.

**Connection to Time Domain Convolution:**

The IDTFT can also be understood in terms of convolution. If $X(e^{j\omega})$ is the DTFT of $x[n]$, then $x[n]$ can be viewed as the "sum" of impulses in the frequency domain, scaled by $X(e^{j\omega})$. The term $e^{j\omega n}$ essentially represents a complex exponential at frequency $\omega$, which is the basis of the Fourier series representation (and by extension, the Fourier Transform).

## Properties of the Inverse DTFT

The IDTFT possesses properties that are analogous to the forward DTFT, but in reverse. Understanding these properties can simplify the process of finding inverse transforms. Some key properties include:

*   **Linearity:** If $X_1(e^{j\omega}) \leftrightarrow x_1[n]$ and $X_2(e^{j\omega}) \leftrightarrow x_2[n]$, then $aX_1(e^{j\omega}) + bX_2(e^{j\omega}) \leftrightarrow ax_1[n] + bx_2[n]$.
*   **Time Shifting:** If $X(e^{j\omega}) \leftrightarrow x[n]$, then $e^{-j\omega n_0} X(e^{j\omega}) \leftrightarrow x[n-n_0]$.
*   **Frequency Shifting:** If $X(e^{j\omega}) \leftrightarrow x[n]$, then $X(e^{j(\omega-\omega_0)}) \leftrightarrow e^{j\omega_0 n} x[n]$.
*   **Modulation:** If $X(e^{j\omega}) \leftrightarrow x[n]$, then $X(e^{j(\omega-\omega_0)}) \leftrightarrow e^{j\omega_0 n} x[n]$ (same as frequency shifting).
*   **Differentiation in Frequency:** $\frac{d}{d\omega}X(e^{j\omega}) \leftrightarrow j n x[n]$.
*   **Integration in Frequency:** $\int_{-\pi}^{\pi} X(e^{j\theta}) d\theta \leftrightarrow 2\pi x[0]$.

**(Refer to Oppenheim & Willsky, Chapter 7 for detailed proofs and explanations of these properties.)**

## Common DTFT Pairs and Their Inverse Transforms

Many common discrete-time signals have well-known DTFT pairs. Memorizing these pairs and understanding how to use the properties to derive new ones is crucial for efficient signal analysis.

| Discrete-Time Signal $x[n]$        | DTFT $X(e^{j\omega})$                                      | Notes                                                                                                                                       |
| :--------------------------------- | :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| Unit Impulse: $\delta[n]$          | $1$                                                        | The DTFT of an impulse is a constant.                                                                                                       |
| Unit Step: $u[n]$                  | $\frac{1}{1-e^{-j\omega}} + \pi \sum_{k=-\infty}^{\infty} \delta(\omega - 2\pi k)$ | This includes the DC component and the contribution from the infinite summation of delta functions in the frequency domain due to its DC offset. |
| Exponential: $a^n u[n]$, $|a| < 1$ | $\frac{1}{1 - ae^{-j\omega}}$                              | This is a causal decaying exponential.                                                                                                      |
| Sinusoidal: $\cos(\omega_0 n)$     | $\pi \sum_{k=-\infty}^{\infty} [\delta(\omega - \omega_0 - 2\pi k) + \delta(\omega + \omega_0 - 2\pi k)]$ | The DTFT of a cosine is a sum of impulses at positive and negative frequencies.                                                              |
| Sinusoidal: $\sin(\omega_0 n)$     | $j\pi \sum_{k=-\infty}^{\infty} [\delta(\omega + \omega_0 - 2\pi k) - \delta(\omega - \omega_0 - 2\pi k)]$ | The DTFT of a sine is a sum of impulses with alternating signs.                                                                               |
| Rectangular Pulse: $u[n] - u[n-N]$ | $\frac{1 - e^{-j\omega N}}{1 - e^{-j\omega}}$              | This represents a finite-duration signal.                                                                                                   |

**(Refer to Oppenheim & Willsky, Chapter 7 and Haykin, Chapter 8 for more DTFT pairs and their derivations.)**

## Examples

### Example 1: Inverse DTFT of a Simple Frequency Response

**Problem:** Find the discrete-time signal $x[n]$ whose DTFT is $X(e^{j\omega}) = 2 + e^{j\omega} - 3e^{-j2\omega}$.

**Solution:**

We can use the linearity property of the IDTFT. Recall the DTFT pair: $1 \leftrightarrow \delta[n]$ and $e^{j\omega k} \leftrightarrow \delta[n-k]$.

*   For the term '2': $2 \leftrightarrow 2\delta[n]$
*   For the term $e^{j\omega}$: This corresponds to a time shift of $n=-1$, so $e^{j\omega} \leftrightarrow \delta[n+1]$.
*   For the term $-3e^{-j2\omega}$: This corresponds to a time shift of $n=2$ and a scaling factor of -3, so $-3e^{-j2\omega} \leftrightarrow -3\delta[n-2]$.

Therefore, applying the linearity property:

$$
x[n] = \mathcal{IDTFT}\{2\} + \mathcal{IDTFT}\{e^{j\omega}\} - 3\mathcal{IDTFT}\{e^{-j2\omega}\}
$$

$$
x[n] = 2\delta[n] + \delta[n+1] - 3\delta[n-2]
$$

**Answer:** The discrete-time signal is $x[n] = 2\delta[n] + \delta[n+1] - 3\delta[n-2]$.

### Example 2: Inverse DTFT of a Causal Exponential

**Problem:** Find the discrete-time signal $x[n]$ whose DTFT is $X(e^{j\omega}) = \frac{1}{1 - \frac{1}{2}e^{-j\omega}}$.

**Solution:**

This DTFT matches the form of a causal decaying exponential: $a^n u[n] \leftrightarrow \frac{1}{1 - ae^{-j\omega}}$ with $|a| < 1$.

In this case, $a = \frac{1}{2}$, which satisfies $|a| < 1$.

Therefore, by direct observation and knowledge of the DTFT pair:

$$
x[n] = \left(\frac{1}{2}\right)^n u[n]
$$

**Answer:** The discrete-time signal is $x[n] = \left(\frac{1}{2}\right)^n u[n]$.

### Example 3: Inverse DTFT using Integration (Conceptual)

**Problem:** Find $x[n]$ given $X(e^{j\omega}) = 1$ for $-\frac{\pi}{2} < \omega < \frac{\pi}{2}$, and $X(e^{j\omega}) = 0$ otherwise.

**Solution:**

We use the inverse DTFT formula:

$$
x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} X(e^{j\omega}) e^{j\omega n} d\omega
$$

Since $X(e^{j\omega})$ is non-zero only between $-\frac{\pi}{2}$ and $\frac{\pi}{2}$:

$$
x[n] = \frac{1}{2\pi} \int_{-\pi/2}^{\pi/2} (1) e^{j\omega n} d\omega
$$

Now, we evaluate the integral.

**Case 1: $n = 0$**

$$
x[0] = \frac{1}{2\pi} \int_{-\pi/2}^{\pi/2} e^{j\omega (0)} d\omega = \frac{1}{2\pi} \int_{-\pi/2}^{\pi/2} 1 d\omega
$$

$$
x[0] = \frac{1}{2\pi} [\omega]_{-\pi/2}^{\pi/2} = \frac{1}{2\pi} \left(\frac{\pi}{2} - (-\frac{\pi}{2})\right) = \frac{1}{2\pi} (\pi) = \frac{1}{2}
$$

**Case 2: $n \neq 0$**

$$
x[n] = \frac{1}{2\pi} \left[ \frac{e^{j\omega n}}{jn} \right]_{-\pi/2}^{\pi/2} = \frac{1}{2\pi jn} \left( e^{j\omega n} \right)_{-\pi/2}^{\pi/2}
$$

$$
x[n] = \frac{1}{2\pi jn} \left( e^{j\frac{\pi n}{2}} - e^{-j\frac{\pi n}{2}} \right)
$$

Using Euler's formula $e^{j\theta} - e^{-j\theta} = 2j\sin(\theta)$:

$$
x[n] = \frac{1}{2\pi jn} \left( 2j \sin\left(\frac{\pi n}{2}\right) \right) = \frac{1}{\pi n} \sin\left(\frac{\pi n}{2}\right)
$$

We can combine both cases. The function $\frac{\sin(ax)}{ax}$ is known as the sinc function. In our case, we have $\frac{\sin(\frac{\pi n}{2})}{\pi n}$.  Note that $\lim_{n \to 0} \frac{\sin(\frac{\pi n}{2})}{\pi n} = \lim_{n \to 0} \frac{\frac{\pi}{2}\cos(\frac{\pi n}{2})}{\pi} = \frac{1}{2}$, which matches our $x[0]$ result.

Thus, we can write $x[n]$ as:

$$
x[n] = \begin{cases} \frac{1}{\pi n} \sin\left(\frac{\pi n}{2}\right) & \text{if } n \neq 0 \\ \frac{1}{2} & \text{if } n = 0 \end{cases}
$$

This is also equivalent to $\frac{1}{2} \text{sinc}\left(\frac{n}{2}\right)$, where $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$.

**Answer:** The discrete-time signal is $x[n] = \frac{1}{\pi n} \sin\left(\frac{\pi n}{2}\right)$ for $n \neq 0$, and $x[0] = \frac{1}{2}$.

## Practice Questions/Exercises

**Instructions:** For each of the following problems, find the discrete-time signal $x[n]$ corresponding to the given DTFT $X(e^{j\omega})$.

**Question 1:**
$X(e^{j\omega}) = 3 - e^{j\omega} + 2e^{-j3\omega}$

**Question 2:**
$X(e^{j\omega}) = \frac{1}{1 - \frac{3}{4}e^{-j\omega}}$, for $|e^{-j\omega}| < \frac{4}{3}$ (stability condition for the causal signal)

**Question 3:**
$X(e^{j\omega}) = e^{j\frac{\pi}{2}} \cdot \frac{1}{1 - \frac{1}{3}e^{-j\omega}}$

**Question 4:**
$X(e^{j\omega}) = \cos\left(\frac{\pi}{4}n\right)$ (Hint: Use the DTFT pair for cosine and properties)

**Question 5:**
$X(e^{j\omega}) = \sum_{k=-\infty}^{\infty} \delta(\omega - \frac{\pi}{2} - 2\pi k)$

---

## Answers to Practice Questions

**Answer 1:**
Using linearity and the property $e^{j\omega k} \leftrightarrow \delta[n-k]$:
$X(e^{j\omega}) = 3 \cdot 1 - e^{j\omega} + 2e^{-j3\omega}$
$x[n] = 3\delta[n] - \delta[n+1] + 2\delta[n-3]$

**Answer 2:**
This matches the DTFT of a causal decaying exponential $a^n u[n] \leftrightarrow \frac{1}{1 - ae^{-j\omega}}$ with $a = \frac{3}{4}$.
$x[n] = \left(\frac{3}{4}\right)^n u[n]$

**Answer 3:**
We can rewrite this as $e^{j\frac{\pi}{2}} \cdot \frac{1}{1 - \frac{1}{3}e^{-j\omega}}$.
The second part is the DTFT of $(\frac{1}{3})^n u[n]$.
Using the frequency shifting property: $X(e^{j(\omega-\omega_0)}) \leftrightarrow e^{j\omega_0 n} x[n]$.
Here, $\omega_0 = \frac{\pi}{2}$ and the base signal has DTFT $\frac{1}{1 - \frac{1}{3}e^{-j\omega}}$.
So, $X(e^{j\omega})$ in the question is $\frac{1}{1 - \frac{1}{3}e^{-j(\omega - \frac{\pi}{2})}}$.
This implies the signal is $e^{j\frac{\pi}{2} n} (\frac{1}{3})^n u[n] = (\frac{1}{3} e^{j\frac{\pi}{2}})^n u[n] = (\frac{j}{3})^n u[n]$.
Alternatively, if $X(e^{j\omega}) = e^{j\frac{\pi}{2}} \cdot Y(e^{j\omega})$, where $Y(e^{j\omega}) = \frac{1}{1 - \frac{1}{3}e^{-j\omega}}$, then $y[n] = (\frac{1}{3})^n u[n]$.
The presence of $e^{j\frac{\pi}{2}}$ outside the frequency variable usually implies a complex scaling factor. However, the typical interpretation of $e^{j\omega_0} Y(e^{j\omega})$ is not directly a simple time-domain operation in the same way as $Y(e^{j(\omega-\omega_0)})$.
Let's assume the question intended a frequency shift or a direct relationship to a property.
If we interpret $X(e^{j\omega}) = e^{j\frac{\pi}{2}} \cdot \frac{1}{1 - \frac{1}{3}e^{-j\omega}}$ as a multiplication by a constant in the frequency domain:
$x[n] = \mathcal{IDTFT}\{e^{j\frac{\pi}{2}}\} * \mathcal{IDTFT}\{\frac{1}{1 - \frac{1}{3}e^{-j\omega}}\}$
$x[n] = j \cdot (\frac{1}{3})^n u[n]$
**Let's re-examine the problem statement as it might be ambiguous. A more standard form would be $X(e^{j(\omega-\omega_0)})$ or $e^{j\omega_0 n} x[n]$. If the constant $e^{j\frac{\pi}{2}}$ is meant to modify the frequency variable directly, it's unusual notation.**

**Assuming the question meant:** $X(e^{j\omega}) = \frac{1}{1 - \frac{1}{3}e^{-j(\omega - \frac{\pi}{2})}}$.
Then, using the frequency shifting property $X(e^{j(\omega-\omega_0)}) \leftrightarrow e^{j\omega_0 n} x[n]$, where $x[n]$ has DTFT $\frac{1}{1 - \frac{1}{3}e^{-j\omega}}$.
So, $x[n]$ here would be $(\frac{1}{3})^n u[n]$.
Then the signal is $e^{j\frac{\pi}{2}n} (\frac{1}{3})^n u[n] = (\frac{j}{3})^n u[n]$.

**For clarity, let's proceed with the interpretation where the $e^{j\frac{\pi}{2}}$ is a constant multiplier in the frequency domain:**
$X(e^{j\omega}) = j \cdot \frac{1}{1 - \frac{1}{3}e^{-j\omega}}$
$x[n] = \mathcal{IDTFT}\{j\} * \mathcal{IDTFT}\{\frac{1}{1 - \frac{1}{3}e^{-j\omega}}\}$
$x[n] = j \cdot 2\pi \delta[\omega] * (\frac{1}{3})^n u[n]$  (DTFT of $j$ is $j \cdot 2\pi \delta(\omega)$)
This convolution in the frequency domain implies multiplication in the time domain.
$x[n] = j \cdot (\frac{1}{3})^n u[n]$

**Final Answer for Question 3 (assuming the simpler interpretation of a constant multiplier):**
$x[n] = j \left(\frac{1}{3}\right)^n u[n]$

**Question 4:**
The DTFT of $\cos(\omega_0 n)$ is $\pi \sum_{k=-\infty}^{\infty} [\delta(\omega - \omega_0 - 2\pi k) + \delta(\omega + \omega_0 - 2\pi k)]$.
Here, $\omega_0 = \frac{\pi}{4}$.
So, $X(e^{j\omega}) = \pi \sum_{k=-\infty}^{\infty} [\delta(\omega - \frac{\pi}{4} - 2\pi k) + \delta(\omega + \frac{\pi}{4} - 2\pi k)]$.
This is the DTFT of $\cos(\frac{\pi}{4}n)$.

**Answer 4:**
$x[n] = \cos\left(\frac{\pi}{4}n\right)$

**Question 5:**
$X(e^{j\omega}) = \sum_{k=-\infty}^{\infty} \delta(\omega - \frac{\pi}{2} - 2\pi k)$.
This is a sum of impulses at frequencies $\omega = \frac{\pi}{2} + 2\pi k$.
Consider the DTFT pair: $\frac{1}{1-e^{-j\omega}} + \pi \sum_{k=-\infty}^{\infty} \delta(\omega - 2\pi k)$ is for $u[n]$.
The DTFT of $e^{j\omega_0 n} x[n]$ is $X(e^{j(\omega-\omega_0)})$.
Let's consider a signal of the form $e^{j\omega_0 n}$. Its DTFT is $2\pi \delta(\omega - \omega_0)$.
The given $X(e^{j\omega})$ is a sum of impulses centered around $\frac{\pi}{2}$ with period $2\pi$.
This corresponds to the DTFT of $e^{j\frac{\pi}{2}n}$.
$e^{j\frac{\pi}{2}n} = (\cos(\frac{\pi}{2}n) + j\sin(\frac{\pi}{2}n))$.
The DTFT of $e^{j\frac{\pi}{2}n}$ is $2\pi \sum_{k=-\infty}^{\infty} \delta(\omega - \frac{\pi}{2} - 2\pi k)$.
This matches the given $X(e^{j\omega})$.

**Answer 5:**
$x[n] = e^{j\frac{\pi}{2}n} = j^n$

## Important Points to Remember

*   **Periodicity:** The DTFT $X(e^{j\omega})$ is always periodic with a period of $2\pi$. Therefore, the integration for the IDTFT can be performed over any interval of length $2\pi$, such as $[-\pi, \pi]$, $[0, 2\pi]$, or $[-\pi/2, 3\pi/2]$.
*   **Convergence:** For the IDTFT integral to converge, the DTFT $X(e^{j\omega})$ must be absolutely integrable over the interval $[-\pi, \pi]$. This is related to the condition for the existence of the DTFT of the time-domain signal.
*   **DTFT Pairs are Keys:** Familiarity with common DTFT pairs and their corresponding inverse transforms is essential for efficient analysis. Use properties to derive transforms for more complex signals.
*   **Role of $\delta[n]$:** The unit impulse $\delta[n]$ has a DTFT of $1$. This means a single impulse at a specific time instant contains "all frequencies" equally.
*   **Complex Exponentials:** The basis of the DTFT is the complex exponential $e^{j\omega n}$. Understanding its relationship to time shifting is critical for inverse transformations.

## Alignment with Course Outcomes

*   **CO1 (Classify signals and systems, perform basic operations):** Understanding the IDTFT allows us to recover the time-domain signal from its frequency representation, aiding in classification and understanding signal properties.
*   **CO3 (Analyze signals in frequency domain using various transforms and examine their properties):** The IDTFT is the reverse operation of the DTFT, directly enabling the analysis of signals by moving from the frequency domain back to the time domain.
*   **CO4 (Interpret the use of various transforms to analyze continuous and discrete time LTI systems):** The IDTFT is fundamental in system analysis. For an LTI system with frequency response $H(e^{j\omega})$, if we know the output's DTFT $Y(e^{j\omega}) = X(e^{j\omega})H(e^{j\omega})$, we use the IDTFT to find the output signal $y[n]$.

## Conclusion

The inverse Discrete-Time Fourier Transform is a powerful tool that complements the forward DTFT. It allows us to reconstruct discrete-time signals from their frequency-domain representations, which is crucial for understanding signal behavior, system analysis, and signal processing applications. By mastering the IDTFT formula, its properties, and common DTFT pairs, you will gain a comprehensive understanding of discrete-time signals and systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
