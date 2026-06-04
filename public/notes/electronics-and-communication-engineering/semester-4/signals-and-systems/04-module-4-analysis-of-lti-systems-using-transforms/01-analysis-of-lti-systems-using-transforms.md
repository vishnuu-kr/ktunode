---
title: "Analysis of LTI systems using Transforms"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Analysis of LTI systems using Transforms"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe531"
status: "completed"
scrapedAt: "2026-05-23T17:52:38.249Z"
---
# Signals and Systems: Module 4 - Analysis of LTI Systems using Transforms

## Introduction to Module 4

This module delves into a powerful technique for analyzing Linear Time-Invariant (LTI) systems: the use of transforms. Transforms allow us to represent signals and system characteristics in different domains (e.g., frequency, complex frequency), often simplifying complex operations like convolution into algebraic manipulations. This approach is fundamental to understanding system behavior and designing effective signal processing systems.

**Key Idea:** Transforms convert differential and integral equations describing LTI systems into algebraic equations, making analysis much easier.

**Course Outcomes Addressed:**
*   **CO3:** Analyze signals in frequency domain using various transforms and examine their properties. (Knowledge Level: K3)
*   **CO4:** Interpret the use of various transforms to analyze continuous and discrete time LTI systems. (Knowledge Level: K3)

---

## 4.1 The Laplace Transform

The Laplace transform is a generalization of the Fourier transform, particularly useful for analyzing continuous-time signals and LTI systems, especially those with initial conditions and those that are unstable.

### 4.1.1 Definition of the Laplace Transform

For a continuous-time signal $x(t)$, its Laplace transform $X(s)$ is defined as:

$X(s) = \mathcal{L}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-st} dt$

where $s$ is a complex variable: $s = \sigma + j\omega$.

**Important Note:** This is the **Bilateral Laplace Transform**. Often, we deal with causal signals ($x(t) = 0$ for $t < 0$), and the transform is defined as the **Unilateral Laplace Transform**:

$X(s) = \int_{0}^{\infty} x(t) e^{-st} dt$

For LTI system analysis, especially in the context of causal systems, the unilateral transform is commonly used.

**Textbook References:**
*   Oppenheim & Willsky (2nd Ed.): Chapter 9
*   Haykin (2nd Ed.): Chapter 7

### 4.1.2 Region of Convergence (ROC)

The ROC of the Laplace transform $X(s)$ is the set of all values of $s$ for which the integral converges. The ROC is crucial for uniquely determining a signal from its transform and for understanding system properties.

**Key Properties of ROC:**
1.  The ROC is a region in the complex $s$-plane.
2.  If $X(s)$ converges at a certain value $s_0$, it will also converge for all $s$ with the same real part as $s_0$, provided $s_0$ is in the ROC. This means the ROC is always a set of vertical strips, possibly including the $j\omega$-axis or extending to the left/right.
3.  The ROC does not contain any poles.
4.  If a signal $x(t)$ is absolutely integrable ($\int_{-\infty}^{\infty} |x(t)| dt < \infty$), then its Fourier transform exists, and the ROC of its Laplace transform includes the $j\omega$-axis.

**Examples of ROCs:**
*   **Right-sided signal ($x(t)u(t)$):** ROC is to the right of a vertical line.
*   **Left-sided signal ($-x(t)u(-t)$):** ROC is to the left of a vertical line.
*   **Two-sided signal:** ROC is a vertical strip.
*   **Finite-duration signal:** ROC is the entire $s$-plane except possibly at infinity.

### 4.1.3 Properties of the Laplace Transform

The Laplace transform possesses several useful properties that simplify system analysis:

| Property                | Time Domain       | Laplace Domain       |
| :---------------------- | :---------------- | :------------------- |
| Linearity               | $ax_1(t) + bx_2(t)$ | $aX_1(s) + bX_2(s)$  |
| Time Shifting           | $x(t-t_0)$        | $e^{-st_0} X(s)$     |
| Frequency Shifting      | $e^{at} x(t)$     | $X(s-a)$             |
| Time Scaling            | $x(at)$           | $\frac{1}{|a|} X(\frac{s}{a})$ |
| Differentiation in Time | $\frac{dx(t)}{dt}$  | $sX(s) - x(0^-)$     |
| Integration in Time     | $\int_{-\infty}^{t} x(\tau) d\tau$ | $\frac{X(s)}{s}$     |
| Differentiation in $s$  | $-t x(t)$         | $\frac{dX(s)}{ds}$   |
| Convolution             | $x(t) * h(t)$     | $X(s) H(s)$          |

**Initial Value Theorem:** $x(0^+) = \lim_{s \to \infty} sX(s)$ (Provided $x(t)$ is of exponential order)
**Final Value Theorem:** $\lim_{t \to \infty} x(t) = \lim_{s \to 0} sX(s)$ (Provided all poles of $sX(s)$ are in the LHP, i.e., Re{s} < 0)

### 4.1.4 Inverse Laplace Transform

The inverse Laplace transform allows us to recover the time-domain signal from its Laplace transform.

$x(t) = \mathcal{L}^{-1}\{X(s)\} = \frac{1}{2\pi j} \int_{\sigma - j\infty}^{\sigma + j\infty} X(s) e^{st} ds$

In practice, the inverse Laplace transform is usually computed using partial fraction expansion and looking up standard transform pairs.

**Common Laplace Transform Pairs:**

| $x(t)$          | $X(s)$                 | ROC             |
| :-------------- | :--------------------- | :-------------- |
| $\delta(t)$     | 1                      | All $s$         |
| $u(t)$          | $1/s$                  | Re{s} > 0       |
| $e^{-at}u(t)$   | $1/(s+a)$              | Re{s} > -a      |
| $t e^{-at}u(t)$ | $1/(s+a)^2$            | Re{s} > -a      |
| $\cos(\omega_0 t) u(t)$ | $\frac{s}{s^2 + \omega_0^2}$ | Re{s} > 0       |
| $\sin(\omega_0 t) u(t)$ | $\frac{\omega_0}{s^2 + \omega_0^2}$ | Re{s} > 0       |

### 4.1.5 Analysis of LTI Systems using Laplace Transform

For an LTI system with impulse response $h(t)$ and input $x(t)$, the output $y(t)$ is given by convolution:

$y(t) = x(t) * h(t)$

Taking the Laplace transform of both sides:

$Y(s) = X(s) H(s)$

where $H(s) = \mathcal{L}\{h(t)\}$ is the **system function** or **transfer function** of the LTI system.

**System Function ($H(s)$):**
The system function $H(s)$ characterizes the input-output relationship of an LTI system in the Laplace domain. It is the ratio of the output transform to the input transform when the initial conditions are zero.

$H(s) = \frac{Y(s)}{X(s)} \Big|_{y(0^-)=0}$

**Stability:**
An LTI system is Bounded-Input Bounded-Output (BIBO) stable if and only if the ROC of $H(s)$ includes the $j\omega$-axis (i.e., Re{s} = 0). This means that for any input $x(t)$ whose Laplace transform $X(s)$ converges in some region of the $s$-plane, the output $y(t)$ will also be bounded if $X(s)$ converges in a region that overlaps with the ROC of $H(s)$.

**Causality:**
A causal LTI system has an impulse response $h(t)$ that is zero for $t<0$. This implies that the ROC of $H(s)$ must be the region to the right of the outermost pole of $H(s)$.

**Example:**
Consider a system with the differential equation: $\frac{dy(t)}{dt} + 2y(t) = x(t)$.
Assuming zero initial conditions ($y(0^-) = 0$).
Taking the Laplace transform: $sY(s) + 2Y(s) = X(s)$.
So, $Y(s)(s+2) = X(s)$, which gives $H(s) = \frac{Y(s)}{X(s)} = \frac{1}{s+2}$.
The impulse response is $h(t) = e^{-2t}u(t)$.
The ROC of $H(s)$ is Re{s} > -2. Since this ROC includes the $j\omega$-axis (Re{s} = 0), the system is BIBO stable. Since $h(t) = 0$ for $t < 0$, the system is also causal.

---

## 4.2 The Z-Transform

The Z-transform is the discrete-time counterpart of the Laplace transform. It is used to analyze discrete-time signals and LTI systems.

### 4.2.1 Definition of the Z-Transform

For a discrete-time signal $x[n]$, its Z-transform $X(z)$ is defined as:

$X(z) = \mathcal{Z}\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$

where $z$ is a complex variable, typically represented in polar coordinates as $z = re^{j\omega}$.

**Important Note:** The Z-transform is often used with causal signals ($x[n] = 0$ for $n < 0$), in which case the transform becomes:

$X(z) = \sum_{n=0}^{\infty} x[n] z^{-n}$

### 4.2.2 Region of Convergence (ROC)

The ROC of the Z-transform $X(z)$ is the set of all values of $z$ for which the summation converges. The ROC is crucial for uniquely determining a signal from its transform and for understanding system properties.

**Key Properties of ROC:**
1.  The ROC is a region in the $z$-plane.
2.  The ROC is an annulus (a ring-shaped region) between two circles centered at the origin, or a disk, or the exterior of a circle.
3.  If $X(z)$ converges at a certain value $z_0$, it will converge for all $z$ with the same magnitude $|z| = |z_0|$ if $z_0$ is on the circle of convergence.
4.  The ROC does not contain any poles.
5.  If a signal $x[n]$ is absolutely summable ($\sum_{n=-\infty}^{\infty} |x[n]| < \infty$), then its DTFS/DTFT exists, and the ROC of its Z-transform includes the unit circle ($|z| = 1$).

**Examples of ROCs:**
*   **Right-sided sequence ($x[n]u[n]$):** ROC is the exterior of a circle $|z| > r$.
*   **Left-sided sequence ($x[n]u[-n-1]$):** ROC is the interior of a circle $|z| < r$.
*   **Finite-duration sequence:** ROC is the entire $z$-plane except possibly at $z=0$ or $z=\infty$.

### 4.2.3 Properties of the Z-Transform

Similar to the Laplace transform, the Z-transform has several useful properties:

| Property             | Time Domain       | Z-Domain            |
| :------------------- | :---------------- | :------------------ |
| Linearity            | $ax_1[n] + bx_2[n]$ | $aX_1(z) + bX_2(z)$ |
| Time Shifting (delay) | $x[n-n_0]$        | $z^{-n_0} X(z)$     |
| Multiplication by $a^n$ | $a^n x[n]$        | $X(z/a)$            |
| Convolution          | $x_1[n] * x_2[n]$ | $X_1(z) X_2(z)$     |
| Differentiation      | $n x[n]$          | $-z \frac{dX(z)}{dz}$ |

**Initial Value Theorem:** $x[0] = \lim_{z \to \infty} X(z)$ (Provided $x[n]=0$ for $n<0$)
**Final Value Theorem:** $\lim_{n \to \infty} x[n] = \lim_{z \to 1} (1-z^{-1}) X(z)$ (Provided all poles of $(1-z^{-1})X(z)$ lie inside the unit circle)

### 4.2.4 Inverse Z-Transform

The inverse Z-transform allows us to recover the discrete-time signal from its Z-transform.

$x[n] = \mathcal{Z}^{-1}\{X(z)\} = \frac{1}{2\pi j} \oint_C X(z) z^{n-1} dz$

where $C$ is a closed contour in the ROC, counterclockwise. In practice, partial fraction expansion and standard transform pairs are used.

**Common Z-Transform Pairs:**

| $x[n]$            | $X(z)$                  | ROC            |
| :---------------- | :---------------------- | :------------- |
| $\delta[n]$       | 1                       | All $z$        |
| $u[n]$            | $\frac{1}{1-z^{-1}}$   | $|z| > 1$      |
| $a^n u[n]$        | $\frac{1}{1-az^{-1}}$  | $|z| > |a|$    |
| $-a^n u[-n-1]$    | $\frac{1}{1-az^{-1}}$  | $|z| < |a|$    |
| $n a^n u[n]$      | $\frac{az^{-1}}{(1-az^{-1})^2}$ | $|z| > |a|$    |
| $\cos(\omega_0 n) u[n]$ | $\frac{1- \cos(\omega_0) z^{-1}}{1 - 2\cos(\omega_0) z^{-1} + z^{-2}}$ | $|z| > 1$      |
| $\sin(\omega_0 n) u[n]$ | $\frac{\sin(\omega_0) z^{-1}}{1 - 2\cos(\omega_0) z^{-1} + z^{-2}}$ | $|z| > 1$      |

### 4.2.5 Analysis of LTI Systems using Z-Transform

For a discrete-time LTI system with impulse response $h[n]$ and input $x[n]$, the output $y[n]$ is given by convolution:

$y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$

Taking the Z-transform of both sides:

$Y(z) = X(z) H(z)$

where $H(z) = \mathcal{Z}\{h[n]\}$ is the **system function** or **transfer function** of the discrete-time LTI system.

**System Function ($H(z)$):**
The system function $H(z)$ characterizes the input-output relationship of a discrete-time LTI system in the Z-domain. It is the ratio of the output transform to the input transform when the initial conditions are zero.

$H(z) = \frac{Y(z)}{X(z)} \Big|_{y[-1]=0, y[-2]=0, \dots}$

For systems described by linear constant-coefficient difference equations (LCCDEs):

$y[n] + a_1 y[n-1] + \dots + a_N y[n-N] = b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M]$

Taking the Z-transform (assuming zero initial conditions):

$Y(z) + a_1 z^{-1} Y(z) + \dots + a_N z^{-N} Y(z) = b_0 X(z) + b_1 z^{-1} X(z) + \dots + b_M z^{-M} X(z)$

$Y(z)(1 + a_1 z^{-1} + \dots + a_N z^{-N}) = X(z)(b_0 + b_1 z^{-1} + \dots + b_M z^{-M})$

$H(z) = \frac{Y(z)}{X(z)} = \frac{b_0 + b_1 z^{-1} + \dots + b_M z^{-M}}{1 + a_1 z^{-1} + \dots + a_N z^{-N}}$

**Stability:**
A discrete-time LTI system is BIBO stable if and only if the ROC of $H(z)$ includes the unit circle ($|z|=1$). This means that for any input $x[n]$ whose Z-transform $X(z)$ converges in some region of the $z$-plane, the output $y[n]$ will also be bounded if $X(z)$ converges in a region that overlaps with the ROC of $H(z)$.

**Causality:**
A causal discrete-time LTI system has an impulse response $h[n]$ that is zero for $n<0$. This implies that the ROC of $H(z)$ must be the region outside the outermost pole of $H(z)$ (i.e., $|z| > r_{max}$).

**Example:**
Consider a system with the difference equation: $y[n] - \frac{1}{2} y[n-1] = x[n]$.
Assuming zero initial conditions ($y[-1]=0$).
Taking the Z-transform: $Y(z) - \frac{1}{2} z^{-1} Y(z) = X(z)$.
So, $Y(z)(1 - \frac{1}{2} z^{-1}) = X(z)$, which gives $H(z) = \frac{Y(z)}{X(z)} = \frac{1}{1 - \frac{1}{2}z^{-1}}$.
The ROC for $h[n] = (\frac{1}{2})^n u[n]$ is $|z| > \frac{1}{2}$.
Since the ROC includes the unit circle ($|z|=1$), the system is BIBO stable.
Since $h[n] = (\frac{1}{2})^n u[n]$, $h[n] = 0$ for $n<0$, the system is causal.

---

## 4.3 The Fourier Transform and its Relation to Laplace Transform

The Fourier Transform (FT) is a powerful tool for analyzing the frequency content of continuous-time signals. It is closely related to the Laplace transform.

### 4.3.1 Definition of the Fourier Transform

For a continuous-time signal $x(t)$, its Fourier Transform $X(j\omega)$ is defined as:

$X(j\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$

The inverse Fourier Transform is:

$x(t) = \mathcal{F}^{-1}\{X(j\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(j\omega) e^{j\omega t} d\omega$

**Textbook References:**
*   Oppenheim & Willsky (2nd Ed.): Chapter 8
*   Haykin (2nd Ed.): Chapter 6

### 4.3.2 Relationship between Laplace and Fourier Transforms

The Fourier transform can be viewed as the Laplace transform evaluated on the imaginary axis ($s = j\omega$).

$X(j\omega) = X(s) \Big|_{s=j\omega}$

For the Fourier transform of $x(t)$ to exist, the signal $x(t)$ must be absolutely integrable, i.e., $\int_{-\infty}^{\infty} |x(t)| dt < \infty$. This condition implies that the ROC of the Laplace transform of $x(t)$ must include the $j\omega$-axis.

**Important Point:** If the ROC of $X(s)$ does not include the $j\omega$-axis, the Fourier transform $X(j\omega)$ does not exist in the usual sense. However, we can still analyze the system using the Laplace transform.

### 4.3.3 Analysis of LTI Systems using Fourier Transform

For an LTI system with impulse response $h(t)$ and input $x(t)$, the output is $y(t) = x(t) * h(t)$.
Taking the Fourier transform:

$Y(j\omega) = X(j\omega) H(j\omega)$

where $H(j\omega) = \mathcal{F}\{h(t)\}$ is the **frequency response** of the LTI system.

**Frequency Response ($H(j\omega)$):**
The frequency response characterizes how an LTI system affects the amplitude and phase of different sinusoidal frequency components of an input signal. It is the Fourier transform of the impulse response.

**Stability:**
An LTI system is BIBO stable if its frequency response $H(j\omega)$ exists. This requires the ROC of $H(s)$ to include the $j\omega$-axis.

**Example:**
Consider a causal, stable LTI system with $H(s) = \frac{1}{s+a}$ where $a > 0$.
The ROC is Re{s} > -a. Since $a > 0$, this ROC includes the $j\omega$-axis.
The frequency response is $H(j\omega) = \frac{1}{j\omega+a}$.
The magnitude response is $|H(j\omega)| = \frac{1}{\sqrt{\omega^2 + a^2}}$, and the phase response is $\angle H(j\omega) = -\arctan(\frac{\omega}{a})$.
This shows how the system attenuates higher frequencies.

---

## 4.4 The Discrete-Time Fourier Transform (DTFT) and its Relation to Z-Transform

The DTFT is the discrete-time equivalent of the Fourier Transform, used to analyze the frequency spectrum of discrete-time signals.

### 4.4.1 Definition of the DTFT

For a discrete-time signal $x[n]$, its DTFT $X(e^{j\omega})$ is defined as:

$X(e^{j\omega}) = \mathcal{DTFT}\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}$

The inverse DTFT is:

$x[n] = \mathcal{DTFT}^{-1}\{X(e^{j\omega})\} = \frac{1}{2\pi} \int_{2\pi} X(e^{j\omega}) e^{j\omega n} d\omega$

where the integral is over any interval of length $2\pi$.

**Textbook References:**
*   Oppenheim & Willsky (2nd Ed.): Chapter 7
*   Haykin (2nd Ed.): Chapter 5

### 4.4.2 Relationship between Z-Transform and DTFT

The DTFT can be viewed as the Z-transform evaluated on the unit circle ($z = e^{j\omega}$).

$X(e^{j\omega}) = X(z) \Big|_{z=e^{j\omega}}$

For the DTFT of $x[n]$ to exist, the ROC of the Z-transform of $x[n]$ must include the unit circle ($|z|=1$).

**Important Point:** If the ROC of $X(z)$ does not include the unit circle, the DTFT $X(e^{j\omega})$ does not exist in the usual sense. However, we can still analyze the system using the Z-transform.

### 4.4.3 Analysis of LTI Systems using DTFT

For a discrete-time LTI system with impulse response $h[n]$ and input $x[n]$, the output is $y[n] = x[n] * h[n]$.
Taking the DTFT:

$Y(e^{j\omega}) = X(e^{j\omega}) H(e^{j\omega})$

where $H(e^{j\omega}) = \mathcal{DTFT}\{h[n]\}$ is the **frequency response** of the discrete-time LTI system.

**Frequency Response ($H(e^{j\omega})$):**
The frequency response of a discrete-time LTI system indicates how the system modifies the magnitude and phase of the input's frequency components. It is the DTFT of the impulse response.

**Stability:**
A discrete-time LTI system is BIBO stable if its frequency response $H(e^{j\omega})$ exists. This requires the ROC of $H(z)$ to include the unit circle.

**Example:**
Consider a causal, stable discrete-time LTI system with $H(z) = \frac{1}{1 - az^{-1}}$ where $|a|<1$.
The ROC is $|z| > |a|$. Since $|a|<1$, this ROC includes the unit circle.
The frequency response is $H(e^{j\omega}) = \frac{1}{1 - ae^{-j\omega}}$.
The magnitude response is $|H(e^{j\omega})| = \frac{1}{|1 - ae^{-j\omega}|} = \frac{1}{\sqrt{(1-a\cos\omega)^2 + (a\sin\omega)^2}} = \frac{1}{\sqrt{1 - 2a\cos\omega + a^2}}$.
The phase response is $\angle H(e^{j\omega}) = -\arctan(\frac{-a\sin\omega}{1-a\cos\omega}) = \arctan(\frac{a\sin\omega}{1-a\cos\omega})$.
This shows how the system's behavior varies with different frequencies.

---

## 4.5 The Relationship between Transforms and LTI System Analysis

Transforms provide a powerful framework for understanding and manipulating LTI systems.

### 4.5.1 Transforming Differential/Difference Equations

LTI systems are often described by linear constant-coefficient differential equations (for CT systems) or difference equations (for DT systems). Transforms convert these into algebraic equations, simplifying the analysis.

**Continuous-Time:**
Differential equation: $\sum_{k=0}^{N} a_k \frac{d^k y(t)}{dt^k} = \sum_{k=0}^{M} b_k \frac{d^k x(t)}{dt^k}$
Laplace transform: $\sum_{k=0}^{N} a_k s^k Y(s) = \sum_{k=0}^{M} b_k s^k X(s)$
System Function: $H(s) = \frac{Y(s)}{X(s)} = \frac{\sum_{k=0}^{M} b_k s^k}{\sum_{k=0}^{N} a_k s^k}$

**Discrete-Time:**
Difference equation: $\sum_{k=0}^{N} a_k y[n-k] = \sum_{k=0}^{M} b_k x[n-k]$
Z-transform: $\sum_{k=0}^{N} a_k z^{-k} Y(z) = \sum_{k=0}^{M} b_k z^{-k} X(z)$
System Function: $H(z) = \frac{Y(z)}{X(z)} = \frac{\sum_{k=0}^{M} b_k z^{-k}}{\sum_{k=0}^{N} a_k z^{-k}}$

**Course Outcome Alignment:** CO4 (Interpret the use of various transforms to analyze continuous and discrete time LTI systems.)

### 4.5.2 Stability and Causality using Transforms

The concepts of stability and causality are directly reflected in the ROC of the system function.

*   **BIBO Stability:** The ROC of $H(s)$ must include the $j\omega$-axis (Re{s}=0). The ROC of $H(z)$ must include the unit circle ($|z|=1$).
*   **Causality:** The ROC of $H(s)$ must be the region to the right of the outermost pole. The ROC of $H(z)$ must be the region outside the outermost pole.

**Important Point:** For a causal system, the ROC of $H(s)$ is always the region to the right of the rightmost pole. For a stable causal system, this ROC must include the $j\omega$-axis.

### 4.5.3 Frequency Domain Analysis

By evaluating the system function on the $j\omega$-axis (for CT) or the unit circle (for DT), we obtain the frequency response. The frequency response allows us to understand how the system modifies the amplitude and phase of different frequency components in the input signal. This is crucial for filter design and signal processing.

**Course Outcome Alignment:** CO3 (Analyze signals in frequency domain using various transforms and examine their properties.)

### 4.5.4 Initial Conditions

The unilateral Laplace and Z-transforms are particularly useful for systems with initial conditions. The properties related to differentiation in the time/difference domain ($sX(s) - x(0^-)$ and $zX(z) - z x[-1]$) directly incorporate the initial state of the system.

---

## Practice Questions and Exercises

**Instructions:** Solve the following problems, applying the concepts learned in this module.

---

**Question 1 (Laplace Transform):**
A continuous-time LTI system has an impulse response $h(t) = e^{-2t} u(t)$.
(a) Find the Laplace transform $H(s)$ and its ROC.
(b) Is the system causal? Is it BIBO stable?
(c) If the input is $x(t) = u(t)$, find the Laplace transform of the output $Y(s)$ and its ROC.
(d) Find the output $y(t)$ by taking the inverse Laplace transform.

**Answer 1:**
(a) $H(s) = \mathcal{L}\{e^{-2t} u(t)\} = \frac{1}{s+2}$. The ROC is Re{s} > -2.
(b) Yes, the system is causal because $h(t) = 0$ for $t < 0$. Yes, the system is BIBO stable because the ROC (Re{s} > -2) includes the $j\omega$-axis (Re{s}=0).
(c) $X(s) = \mathcal{L}\{u(t)\} = \frac{1}{s}$, with ROC Re{s} > 0.
$Y(s) = X(s) H(s) = \frac{1}{s} \cdot \frac{1}{s+2}$. The ROC for $Y(s)$ is the intersection of the ROCs of $X(s)$ and $H(s)$, which is Re{s} > 0.
(d) Using partial fraction expansion:
$\frac{1}{s(s+2)} = \frac{A}{s} + \frac{B}{s+2}$
$1 = A(s+2) + Bs$
Setting $s=0 \implies 1 = 2A \implies A = 1/2$.
Setting $s=-2 \implies 1 = -2B \implies B = -1/2$.
$Y(s) = \frac{1/2}{s} - \frac{1/2}{s+2}$.
$y(t) = \mathcal{L}^{-1}\{Y(s)\} = \frac{1}{2} u(t) - \frac{1}{2} e^{-2t} u(t) = \frac{1}{2}(1 - e^{-2t}) u(t)$.

---

**Question 2 (Z-Transform):**
A discrete-time LTI system has an impulse response $h[n] = (\frac{1}{3})^n u[n]$.
(a) Find the Z-transform $H(z)$ and its ROC.
(b) Is the system causal? Is it BIBO stable?
(c) If the input is $x[n] = u[n]$, find the Z-transform of the output $Y(z)$ and its ROC.
(d) Find the output $y[n]$ by taking the inverse Z-transform.

**Answer 2:**
(a) $H(z) = \mathcal{Z}\{(\frac{1}{3})^n u[n]\} = \frac{1}{1 - \frac{1}{3}z^{-1}}$. The ROC is $|z| > \frac{1}{3}$.
(b) Yes, the system is causal because $h[n] = 0$ for $n < 0$. Yes, the system is BIBO stable because the ROC ($|z| > \frac{1}{3}$) includes the unit circle ($|z|=1$).
(c) $X(z) = \mathcal{Z}\{u[n]\} = \frac{1}{1-z^{-1}}$, with ROC $|z| > 1$.
$Y(z) = X(z) H(z) = \frac{1}{1-z^{-1}} \cdot \frac{1}{1 - \frac{1}{3}z^{-1}}$. The ROC for $Y(z)$ is the intersection of the ROCs of $X(z)$ and $H(z)$, which is $|z| > 1$.
(d) Using partial fraction expansion:
$\frac{1}{(1-z^{-1})(1-\frac{1}{3}z^{-1})} = \frac{A}{1-z^{-1}} + \frac{B}{1-\frac{1}{3}z^{-1}}$
$1 = A(1-\frac{1}{3}z^{-1}) + B(1-z^{-1})$
Setting $z^{-1}=1 \implies 1 = A(1-\frac{1}{3}) = \frac{2}{3}A \implies A = \frac{3}{2}$.
Setting $z^{-1}=\frac{1}{3} \implies 1 = B(1-\frac{1}{3}) = \frac{2}{3}B \implies B = \frac{3}{2}$.
$Y(z) = \frac{3/2}{1-z^{-1}} + \frac{3/2}{1-\frac{1}{3}z^{-1}}$.
$y[n] = \mathcal{Z}^{-1}\{Y(z)\} = \frac{3}{2} u[n] + \frac{3}{2} (\frac{1}{3})^n u[n] = \frac{3}{2} (1 + (\frac{1}{3})^n) u[n]$.

---

**Question 3 (System Function and Stability):**
For a discrete-time LTI system described by the difference equation:
$y[n] - \frac{3}{4} y[n-1] + \frac{1}{8} y[n-2] = x[n]$.
(a) Find the system function $H(z)$.
(b) Determine the poles of the system and their locations.
(c) Based on the poles, what can you say about the system's stability if it is causal?

**Answer 3:**
(a) Taking the Z-transform:
$Y(z) - \frac{3}{4} z^{-1} Y(z) + \frac{1}{8} z^{-2} Y(z) = X(z)$.
$Y(z) (1 - \frac{3}{4} z^{-1} + \frac{1}{8} z^{-2}) = X(z)$.
$H(z) = \frac{1}{1 - \frac{3}{4} z^{-1} + \frac{1}{8} z^{-2}}$.
(b) To find the poles, we set the denominator to zero: $1 - \frac{3}{4} z^{-1} + \frac{1}{8} z^{-2} = 0$.
Multiplying by $z^2$: $z^2 - \frac{3}{4} z + \frac{1}{8} = 0$.
This is a quadratic equation. We can find the roots:
$z = \frac{\frac{3}{4} \pm \sqrt{(\frac{3}{4})^2 - 4(1)(\frac{1}{8})}}{2} = \frac{\frac{3}{4} \pm \sqrt{\frac{9}{16} - \frac{4}{8}}}{2} = \frac{\frac{3}{4} \pm \sqrt{\frac{9}{16} - \frac{8}{16}}}{2}$
$z = \frac{\frac{3}{4} \pm \sqrt{\frac{1}{16}}}{2} = \frac{\frac{3}{4} \pm \frac{1}{4}}{2}$.
The poles are $z_1 = \frac{\frac{3}{4} + \frac{1}{4}}{2} = \frac{1}{2}$ and $z_2 = \frac{\frac{3}{4} - \frac{1}{4}}{2} = \frac{1}{4}$.
The poles are located at $z = \frac{1}{2}$ and $z = \frac{1}{4}$.
(c) For a causal system, the ROC is the region outside the outermost pole, which is $|z| > \frac{1}{2}$. Since this ROC includes the unit circle ($|z|=1$), the causal system is BIBO stable.

---

## Important Points to Remember

*   **Transforms Simplify Operations:** Convolution in the time domain becomes multiplication in the transform domain.
*   **ROC is Key:** The Region of Convergence is crucial for uniquely defining a signal from its transform and for determining system properties like stability and causality.
*   **System Function:** The ratio of the output transform to the input transform (with zero initial conditions) is the system function, which completely characterizes an LTI system.
*   **Stability Criteria:**
    *   **CT LTI:** ROC of $H(s)$ must include the $j\omega$-axis.
    *   **DT LTI:** ROC of $H(z)$ must include the unit circle ($|z|=1$).
*   **Causality Criteria:**
    *   **CT LTI:** ROC of $H(s)$ is the region to the right of the outermost pole.
    *   **DT LTI:** ROC of $H(z)$ is the region outside the outermost pole.
*   **Laplace vs. Fourier:** Fourier Transform is the Laplace Transform evaluated on $s=j\omega$. The FT exists if the ROC of the Laplace Transform includes the $j\omega$-axis.
*   **Z-Transform vs. DTFT:** DTFT is the Z-Transform evaluated on $z=e^{j\omega}$. The DTFT exists if the ROC of the Z-Transform includes the unit circle.
*   **Initial Conditions:** Unilateral Laplace and Z-transforms are essential for systems with non-zero initial conditions, as they directly incorporate these conditions into the algebraic equations.

---

## Conclusion

This module has provided a deep dive into the analysis of LTI systems using various transforms. By converting time-domain operations into algebraic manipulations in the transform domain, we gain powerful insights into system behavior, including stability, causality, and frequency response. The Laplace transform for continuous-time systems and the Z-transform for discrete-time systems are indispensable tools for signal processing engineers and researchers. Understanding the properties of these transforms and their associated ROCs is fundamental to mastering this topic.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
