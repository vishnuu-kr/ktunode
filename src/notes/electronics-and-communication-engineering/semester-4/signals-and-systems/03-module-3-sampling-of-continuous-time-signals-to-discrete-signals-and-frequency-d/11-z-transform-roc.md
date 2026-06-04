---
title: "Z transform- ROC"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampling of continuous time signals to discrete signals and 
frequency domain representation of discrete time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe52c"
status: "completed"
scrapedAt: "2026-05-23T17:52:35.376Z"
---
## Module 3: Sampling and Discrete-Time Frequency Domain Representation - Z-Transform and ROC

This module delves into the crucial process of converting continuous-time signals to discrete-time signals through sampling and explores how to represent these discrete-time signals in the frequency domain. A key tool for this analysis is the Z-transform, and understanding its Region of Convergence (ROC) is paramount for analyzing system properties and ensuring stability.

### Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   Understand the fundamental principles of sampling a continuous-time signal and its implications.
*   Define and derive the Z-transform of various discrete-time signals.
*   Characterize the Region of Convergence (ROC) of a Z-transform and its significance.
*   Relate the properties of the Z-transform and its ROC to the characteristics of the corresponding discrete-time signal and system.
*   Utilize the Z-transform to analyze the behavior of discrete-time Linear Time-Invariant (LTI) systems.

---

### 1. Z-Transform: The Gateway to Discrete-Time Frequency Analysis

The Z-transform is a powerful mathematical tool that transforms a discrete-time signal, typically represented as a sequence $x[n]$, into a function of a complex variable $z$. This transformation allows us to analyze signals and systems in a way analogous to how the Laplace transform is used for continuous-time signals. It provides insights into the frequency content and transient behavior of discrete-time signals and systems.

**Definition:**

The **unilateral Z-transform** of a discrete-time signal $x[n]$ is defined as:

$X(z) = Z\{x[n]\} = \sum_{n=0}^{\infty} x[n]z^{-n}$

The **bilateral Z-transform** of a discrete-time signal $x[n]$ is defined as:

$X(z) = Z\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n]z^{-n}$

**Why use the Z-transform?**

*   **Simplifies operations:** Operations like convolution in the time domain become simple multiplication in the Z-domain.
*   **Frequency analysis:** The Z-transform provides a way to analyze the frequency content of discrete-time signals.
*   **System analysis:** It's instrumental in analyzing the stability, causality, and frequency response of discrete-time LTI systems.

**Key Concepts and Definitions:**

*   **Complex Variable 'z':** $z$ is a complex variable, often expressed in polar form as $z = re^{j\omega}$, where $r$ is the magnitude and $\omega$ is the angle.
*   **$z^{-1}$:** This represents a delay of one sample in the time domain. The Z-transform is often expressed in powers of $z^{-1}$ for convenience, especially when dealing with causal systems.
*   **Analytic Function:** For the Z-transform to be useful, $X(z)$ must be an analytic function in its region of convergence.

**Examples of Z-Transforms:**

Let's derive the Z-transform for some common discrete-time signals:

**a) Unit Step Signal:** $u[n] = \begin{cases} 1 & n \ge 0 \\ 0 & n < 0 \end{cases}$

$X(z) = Z\{u[n]\} = \sum_{n=0}^{\infty} 1 \cdot z^{-n} = 1 + z^{-1} + z^{-2} + z^{-3} + \dots$

This is a geometric series with the first term $a=1$ and common ratio $r=z^{-1}$. The sum converges if $|r| < 1$, i.e., $|z^{-1}| < 1$, which means $|z| > 1$.

$X(z) = \frac{1}{1 - z^{-1}} = \frac{z}{z-1}$ for $|z| > 1$.

**b) Unit Impulse Signal:** $\delta[n] = \begin{cases} 1 & n = 0 \\ 0 & n \neq 0 \end{cases}$

$X(z) = Z\{\delta[n]\} = \sum_{n=-\infty}^{\infty} \delta[n]z^{-n} = \delta[0]z^0 = 1$.

The ROC for the unit impulse is the entire z-plane, as the sum is finite for any value of $z$.

**c) Exponential Signal:** $a^n u[n]$

$X(z) = Z\{a^n u[n]\} = \sum_{n=0}^{\infty} a^n u[n] z^{-n} = \sum_{n=0}^{\infty} (az^{-1})^n$

This is a geometric series with first term 1 and common ratio $az^{-1}$. It converges if $|az^{-1}| < 1$, i.e., $|z| > |a|$.

$X(z) = \frac{1}{1 - az^{-1}} = \frac{z}{z-a}$ for $|z| > |a|$.

**d) Geometric Progression:** $b^{n-1}u[n-1]$

$X(z) = Z\{b^{n-1}u[n-1]\} = \sum_{n=1}^{\infty} b^{n-1}z^{-n} = z^{-1} \sum_{n=1}^{\infty} b^{n-1}z^{-(n-1)}$
Let $m = n-1$.
$X(z) = z^{-1} \sum_{m=0}^{\infty} b^m z^{-m} = z^{-1} \sum_{m=0}^{\infty} (bz^{-1})^m$

This is again a geometric series with common ratio $bz^{-1}$. It converges if $|bz^{-1}| < 1$, i.e., $|z| > |b|$.

$X(z) = z^{-1} \frac{1}{1 - bz^{-1}} = \frac{1}{z-b}$ for $|z| > |b|$.

**(Reference: Oppenheim & Willsky, Chapter 10; Haykin, Chapter 8)**

---

### 2. Region of Convergence (ROC) of the Z-Transform

The ROC of a Z-transform is the set of all values of $z$ in the complex plane for which the Z-transform series converges. The ROC is crucial because it uniquely determines the discrete-time signal from its Z-transform.

**Properties of the ROC:**

1.  **The ROC is a connected region:** This means it does not consist of disjoint parts.
2.  **The ROC is an annulus (ring-shaped) or a disk:** This is generally true for causal and anti-causal sequences.
3.  **The ROC is bounded by poles:** The ROC cannot contain any poles of $X(z)$. Poles are the values of $z$ where the denominator of $X(z)$ is zero.
4.  **If $X(z)$ converges at a point $z_0$, it also converges for all $z$ with $|z| > |z_0|$ if the system is causal.**
5.  **If $X(z)$ converges at a point $z_0$, it also converges for all $z$ with $|z| < |z_0|$ if the system is anti-causal.**
6.  **The ROC includes the unit circle ($|z|=1$) if and only if the discrete-time Fourier transform (DTFT) of the sequence exists.**

**Determining the ROC:**

The ROC is determined by the convergence of the infinite summation $\sum_{n=-\infty}^{\infty} x[n]z^{-n}$. For a causal sequence $x[n] = x_c[n]u[n]$, the sum is $\sum_{n=0}^{\infty} x[n]z^{-n}$. For an anti-causal sequence $x[n] = x_a[n]u[-n-1]$, the sum is $\sum_{n=-\infty}^{-1} x[n]z^{-n}$.

**Relationship between ROC and Signal Characteristics (Oppenheim & Willsky):**

*   **Causal Sequences:** The ROC is the region outside the outermost pole. It will be of the form $|z| > r_{max}$.
*   **Anti-causal Sequences:** The ROC is the region inside the innermost pole. It will be of the form $|z| < r_{min}$.
*   **Two-Sided Sequences:** The ROC is an annulus (ring) of the form $r_{min} < |z| < r_{max}$.

**Geometric Interpretation of ROC:**

*   The Z-transform $X(z)$ can be expressed as a ratio of polynomials in $z$ or $z^{-1}$.
*   The **poles** are the values of $z$ that make the denominator zero (i.e., where $X(z) \to \infty$).
*   The **zeros** are the values of $z$ that make the numerator zero (i.e., where $X(z) = 0$).
*   The ROC is the region in the complex plane where the magnitude of $z$ is such that the sum converges.

**Examples of ROCs:**

**a) Unit Step Signal: $u[n]$**

$X(z) = \frac{z}{z-1}$. Pole at $z=1$.
ROC: $|z| > 1$. This is the region outside the circle of radius 1 centered at the origin. This corresponds to a causal signal.

**b) Unit Impulse Signal: $\delta[n]$**

$X(z) = 1$. No poles.
ROC: The entire z-plane.

**c) Exponential Signal: $a^n u[n]$**

$X(z) = \frac{z}{z-a}$. Pole at $z=a$.
ROC: $|z| > |a|$. If $|a| < 1$, the ROC includes the unit circle. If $|a| \ge 1$, the ROC does not include the unit circle.

**d) Exponential Signal: $-a^n u[-n-1]$**

$X(z) = \sum_{n=1}^{\infty} -a^n z^{-n} = -\sum_{n=1}^{\infty} (az^{-1})^n$
This is a geometric series with first term $az^{-1}$ and common ratio $az^{-1}$. It converges if $|az^{-1}| < 1$, i.e., $|z| > |a|$.
$X(z) = -\frac{az^{-1}}{1 - az^{-1}} = -\frac{a}{z-a}$ for $|z| > |a|$.

**Wait!** This looks like an anti-causal sequence. Let's consider $x[n] = a^n u[-n-1]$.
$X(z) = \sum_{n=-\infty}^{-1} a^n z^{-n}$. Let $m = -n$, so $n = -m$.
$X(z) = \sum_{m=1}^{\infty} a^{-m} z^{m} = \sum_{m=1}^{\infty} (\frac{z}{a})^m$.
This is a geometric series with first term $\frac{z}{a}$ and common ratio $\frac{z}{a}$. It converges if $|\frac{z}{a}| < 1$, i.e., $|z| < |a|$.

$X(z) = \frac{z/a}{1 - z/a} = \frac{z}{a-z}$ for $|z| < |a|$.
The pole is at $z=a$. The ROC is $|z| < |a|$. This is the region inside the circle of radius $|a|$ centered at the origin. This corresponds to an anti-causal signal.

**e) Two-sided Exponential: $a^n u[n] + b^n u[-n-1]$ (with $|a| < |b|$)**

Let $x_1[n] = a^n u[n]$ and $x_2[n] = b^n u[-n-1]$.
$X_1(z) = \frac{z}{z-a}$ with ROC $|z| > |a|$.
$X_2(z) = \frac{z}{b-z}$ with ROC $|z| < |b|$.

The Z-transform of the sum is $X(z) = X_1(z) + X_2(z)$.
The ROC of the sum is the intersection of the individual ROCs: $|z| > |a|$ and $|z| < |b|$.
Therefore, the ROC is $|a| < |z| < |b|$. This is an annulus.

**(Reference: Oppenheim & Willsky, Chapter 10; Haykin, Chapter 8; Lathi, Chapter 8)**

---

### 3. Relating Z-Transform Properties to Signal and System Characteristics

The Z-transform and its ROC provide valuable information about the underlying discrete-time signal and the LTI systems they represent.

**Linking ROC to Causality and Stability (CO2, CO3, CO4):**

*   **Causality:** A causal LTI system has an impulse response $h[n]$ that is zero for $n < 0$. This means that the Z-transform of $h[n]$, denoted by $H(z)$, will have an ROC that extends to infinity. Specifically, if $H(z)$ has poles, the ROC of a causal system will be the region *outside* the outermost pole: $|z| > r_{max}$.
*   **Stability:** A causal LTI system is stable if and only if its ROC of $H(z)$ contains the unit circle ($|z|=1$). This is because the unit circle corresponds to the frequencies in the frequency domain. If the ROC includes the unit circle, the system's frequency response is bounded.
*   **Anti-causality:** An anti-causal LTI system has an impulse response $h[n]$ that is zero for $n > 0$. The ROC of $H(z)$ for an anti-causal system will be the region *inside* the innermost pole: $|z| < r_{min}$. An anti-causal system is stable if its ROC contains the origin.
*   **Finite Duration Impulse Response (FIR) Systems:** FIR systems have finite impulse responses, meaning $h[n] = 0$ for $n < 0$ and $n > N$ for some finite $N$. The Z-transform of an FIR system is a polynomial in $z^{-1}$ (or $z$) and has no poles in the finite z-plane. The ROC is the entire z-plane except possibly at $z=0$ or $z=\infty$. FIR systems are always stable.

**Using Z-Transform Properties for Analysis:**

Many useful properties of the Z-transform mirror those of the Laplace transform and the continuous-time Fourier transform, aiding in signal and system analysis.

| Property                      | Time Domain: $x[n]$                               | Z-Domain: $X(z)$                                                                                             | ROC Property                                                                                                                               |
| :---------------------------- | :------------------------------------------------ | :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| **Linearity**                 | $ax_1[n] + bx_2[n]$                               | $aX_1(z) + bX_2(z)$                                                                                          | ROC of the sum is the intersection of ROCs of $X_1(z)$ and $X_2(z)$.                                                                       |
| **Time Shifting**             | $x[n-n_0]$                                        | $z^{-n_0}X(z)$                                                                                               | ROC is unchanged, except possibly for $z=0$ or $z=\infty$ if $n_0 > 0$ or $n_0 < 0$ respectively.                                          |
| **Scaling in z-domain**       | $\frac{1}{2\pi j} \oint_C X(u)u^{n-1} du$          | $aX(az)$                                                                                                     | If ROC of $X(z)$ is $r_1 < |z| < r_2$, then ROC of $X(az)$ is $r_1/|a| < |z| < r_2/|a|$.                                                         |
| **Differentiation (in z)**    | $-nx[n]$                                          | $z\frac{d}{dz}X(z)$                                                                                          | ROC is unchanged, except possibly at the boundary if it contains poles.                                                                    |
| **Convolution**               | $x_1[n] * x_2[n] = \sum_{k=-\infty}^{\infty} x_1[k]x_2[n-k]$ | $X_1(z)X_2(z)$                                                                                               | ROC of the product is the intersection of the ROCs of $X_1(z)$ and $X_2(z)$.                                                              |
| **Multiplication**            | $x_1[n]x_2[n]$                                    | $\frac{1}{2\pi j} \oint_C X_1(v)X_2(z/v)v^{-1} dv$                                                           | ROC is the intersection of the ROCs of $X_1(z)$ and $X_2(z)$. (Complex convolution)                                                        |
| **Conjugation**               | $x^*[n]$                                          | $X^*(z^*)$                                                                                                   | If ROC of $X(z)$ is $R$, ROC of $X^*(z^*)$ is $\{z^* | z \in R \}$.                                                                       |
| **Time Reversal**             | $x[-n]$                                           | $X(z^{-1})$                                                                                                  | If ROC of $X(z)$ is $r_1 < |z| < r_2$, then ROC of $X(z^{-1})$ is $1/r_2 < |z| < 1/r_1$.                                                     |
| **Initial Value Theorem**     | $x[0]$ (for causal signals)                       | $\lim_{z \to \infty} X(z)$                                                                                   | Requires $x[n]$ to be causal and $X(z)$ to exist at $z = \infty$.                                                                         |
| **Final Value Theorem**       | $\lim_{n \to \infty} x[n]$ (for causal LTI systems) | $\lim_{z \to 1} (1-z^{-1})X(z)$                                                                               | Requires that the poles of $(1-z^{-1})X(z)$ lie inside the unit circle (i.e., no poles at or outside $|z|=1$). This is crucial for stability. |

**(Reference: Oppenheim & Willsky, Chapter 10; Haykin, Chapter 8; Lathi, Chapter 8)**

**Initial and Final Value Theorems (Key for Stability Analysis):**

*   **Initial Value Theorem:** For a causal signal $x[n]$, $x[0] = \lim_{z \to \infty} X(z)$. This is useful for finding the very first sample of a signal directly from its Z-transform.
*   **Final Value Theorem:** For a causal LTI system, the steady-state value of the output $y[\infty]$ can be found using $\lim_{n \to \infty} y[n] = \lim_{z \to 1} (1-z^{-1})Y(z)$. **Crucially, this theorem is only valid if all the poles of $(1-z^{-1})Y(z)$ are inside the unit circle.** If there are poles on or outside the unit circle, the limit may not exist or may be infinite, indicating instability or oscillations.

---

### 4. Practice Questions and Exercises

Let's test your understanding of Z-transforms and ROCs.

**Question 1:**

Find the Z-transform and ROC of the following sequences:

a) $x[n] = (1/2)^n u[n] + (1/3)^n u[n]$
b) $x[n] = 2^n u[-n-1]$
c) $x[n] = a^n \cos(\omega_0 n) u[n]$

**Solution 1:**

a) $x[n] = (1/2)^n u[n] + (1/3)^n u[n]$
$X_1(z) = \frac{z}{z-1/2}$ with ROC $|z| > 1/2$.
$X_2(z) = \frac{z}{z-1/3}$ with ROC $|z| > 1/3$.
$X(z) = X_1(z) + X_2(z) = \frac{z}{z-1/2} + \frac{z}{z-1/3} = \frac{z(z-1/3) + z(z-1/2)}{(z-1/2)(z-1/3)}$
$X(z) = \frac{z^2 - z/3 + z^2 - z/2}{z^2 - (1/2+1/3)z + 1/6} = \frac{2z^2 - 5z/6}{z^2 - 5z/6 + 1/6}$
ROC: Intersection of $|z| > 1/2$ and $|z| > 1/3$, which is $|z| > 1/2$.

b) $x[n] = 2^n u[-n-1]$
This is an anti-causal signal.
$X(z) = \sum_{n=-\infty}^{-1} 2^n z^{-n}$. Let $m=-n$.
$X(z) = \sum_{m=1}^{\infty} 2^{-m} z^m = \sum_{m=1}^{\infty} (\frac{z}{2})^m$.
This is a geometric series with first term $z/2$ and common ratio $z/2$. It converges if $|z/2| < 1$, i.e., $|z| < 2$.
$X(z) = \frac{z/2}{1 - z/2} = \frac{z}{2-z}$ for $|z| < 2$.

c) $x[n] = a^n \cos(\omega_0 n) u[n]$
We use Euler's formula: $\cos(\theta) = \frac{e^{j\theta} + e^{-j\theta}}{2}$.
$x[n] = a^n \left( \frac{e^{j\omega_0 n} + e^{-j\omega_0 n}}{2} \right) u[n] = \frac{1}{2} (a e^{j\omega_0})^n u[n] + \frac{1}{2} (a e^{-j\omega_0})^n u[n]$
$X(z) = \frac{1}{2} \frac{z}{z - ae^{j\omega_0}} + \frac{1}{2} \frac{z}{z - ae^{-j\omega_0}}$
$X(z) = \frac{z}{2} \left( \frac{1}{z - ae^{j\omega_0}} + \frac{1}{z - ae^{-j\omega_0}} \right)$
$X(z) = \frac{z}{2} \frac{z - ae^{-j\omega_0} + z - ae^{j\omega_0}}{(z - ae^{j\omega_0})(z - ae^{-j\omega_0})}$
$X(z) = \frac{z}{2} \frac{2z - a(e^{j\omega_0} + e^{-j\omega_0})}{z^2 - az(e^{j\omega_0} + e^{-j\omega_0}) + a^2}$
$X(z) = \frac{z(z - a \cos(\omega_0))}{z^2 - 2az \cos(\omega_0) + a^2}$
ROC: The ROCs of the individual terms are $|z| > |a|$. The intersection is $|z| > |a|$.

**Question 2:**

Consider a causal LTI system with the following transfer function:
$H(z) = \frac{z}{z - 0.5}$

a) What is the ROC of this system?
b) Is this system stable? Justify your answer.
c) Determine the impulse response $h[n]$ of this system.
d) If the input is $x[n] = u[n]$, find the Z-transform of the output $Y(z)$ and its ROC.

**Solution 2:**

a) The transfer function $H(z) = \frac{z}{z - 0.5}$ has a pole at $z = 0.5$. Since the system is causal, the ROC is the region outside the outermost pole, which is $|z| > 0.5$.

b) For stability, the ROC of a causal LTI system must contain the unit circle ($|z|=1$). Since $|z| > 0.5$ includes the unit circle (e.g., $z=1$, $z=j$, $z=-1$ all satisfy $|z| > 0.5$), the system is **stable**.

c) From part (a), we recognize that $H(z)$ is the Z-transform of $a^n u[n]$ with $a=0.5$. Therefore, the impulse response is $h[n] = (0.5)^n u[n]$.

d) Input $x[n] = u[n]$. Its Z-transform is $X(z) = \frac{z}{z-1}$ with ROC $|z| > 1$.
The output Z-transform is $Y(z) = H(z)X(z) = \left(\frac{z}{z - 0.5}\right) \left(\frac{z}{z-1}\right) = \frac{z^2}{(z - 0.5)(z-1)}$.
The ROC of $Y(z)$ is the intersection of the ROCs of $H(z)$ and $X(z)$:
ROC of $H(z)$ is $|z| > 0.5$.
ROC of $X(z)$ is $|z| > 1$.
The intersection is $|z| > 1$.

**Question 3 (True/False):**

a) The ROC of the Z-transform of any causal sequence is always $|z| > r_{max}$ for some $r_{max}$. (True/False)
b) If the ROC of a causal LTI system's transfer function $H(z)$ does not include the unit circle, the system is unstable. (True/False)
c) The ROC of the Z-transform of an anti-causal sequence is always $|z| < r_{min}$ for some $r_{min}$. (True/False)

**Solution 3:**

a) True. By definition, for a causal sequence, the ROC extends outwards from the outermost pole.
b) True. For a causal system to be stable, its ROC must contain the unit circle. If it doesn't, the system is unstable.
c) True. For an anti-causal sequence, the ROC is the region inside the innermost pole.

---

### 5. Important Points to Remember

*   **Z-transform is a fundamental tool for analyzing discrete-time signals and systems.** It transforms time-domain operations into simpler algebraic operations in the z-domain.
*   **The ROC is as important as the Z-transform expression itself.** It provides critical information about the signal's causality, stability, and uniqueness.
*   **ROC properties are directly linked to signal characteristics:** Causal signals have ROCs that extend outwards, anti-causal signals have ROCs that extend inwards, and two-sided signals have ROCs that are annuli.
*   **Stability of a causal LTI system is guaranteed if and only if its ROC contains the unit circle ($|z|=1$).** This is a crucial takeaway.
*   **The Final Value Theorem is a powerful tool for determining the steady-state behavior of causal LTI systems but has strict conditions for applicability.** Always check if the poles of $(1-z^{-1})Y(z)$ are inside the unit circle.
*   **FIR systems are always stable because their Z-transforms are polynomials in $z^{-1}$ and do not have poles in the finite z-plane.**

---

### Alignment with Course Outcomes:

*   **CO1: Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals.**
    *   This module introduces the Z-transform as a method to analyze discrete-time signals and systems, which directly aids in classification based on properties derived from the Z-transform and its ROC.
*   **CO2: Determine the stability and causality of LTI systems using convolution operations.**
    *   While this module doesn't focus on convolution operations directly, it provides the Z-transform and ROC as alternative and often simpler tools to determine stability and causality of LTI systems. The ROC's relation to the unit circle is key for stability.
*   **CO3: Analyze signals in frequency domain using various transforms and examine their properties.**
    *   The Z-transform is a primary tool for frequency domain analysis of discrete-time signals. Understanding the ROC allows us to infer frequency domain characteristics.
*   **CO4: Interpret the use of various transforms to analyze continuous and discrete time LTI systems.**
    *   This module specifically focuses on the Z-transform for discrete-time LTI systems, illustrating how it's used to understand system properties like stability and causality, and to analyze system responses.

This comprehensive set of notes provides a solid foundation for understanding the Z-transform and its Region of Convergence, essential concepts in the study of Signals and Systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
