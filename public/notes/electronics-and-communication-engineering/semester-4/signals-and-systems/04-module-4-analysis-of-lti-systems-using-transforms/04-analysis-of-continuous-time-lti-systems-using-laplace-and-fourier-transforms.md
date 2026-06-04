---
title: "Analysis of Continuous time LTI systems using Laplace and Fourier 
transforms."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Analysis of LTI systems using Transforms"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe534"
status: "completed"
scrapedAt: "2026-05-23T17:52:40.377Z"
---
# Module 4: Analysis of LTI Systems using Transforms (Continuous Time)

## Introduction

This module delves into the powerful techniques of Fourier and Laplace transforms for analyzing Continuous Time Linear Time-Invariant (LTI) systems. These transforms allow us to move from the time domain to the frequency or complex frequency domain, simplifying the analysis of system responses, stability, and the impact of system characteristics.

**Key Concepts:**

*   **LTI Systems:** Systems where linearity and time-invariance properties hold.
*   **Convolution:** The fundamental operation for determining the output of an LTI system given its input and impulse response.
*   **Transforms:** Mathematical tools that convert signals and system representations from one domain to another, often revealing insights not readily apparent in the original domain.

## 1. Fourier Transform Analysis of Continuous-Time LTI Systems

The Fourier Transform (FT) is particularly useful for analyzing LTI systems when dealing with **stable systems** and understanding their **steady-state frequency response**. It reveals how different frequency components of the input signal are modified by the system.

### 1.1 Fourier Transform of Signals and Systems

*   **Definition of Fourier Transform:** For a continuous-time signal $x(t)$, its Fourier Transform $X(j\omega)$ is given by:
    $$X(j\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$$
*   **Inverse Fourier Transform:**
    $$x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(j\omega) e^{j\omega t} d\omega$$
*   **Fourier Transform of LTI System's Impulse Response:**
    Let $h(t)$ be the impulse response of an LTI system. Its Fourier Transform, $H(j\omega)$, is called the **frequency response** of the system.
    $$H(j\omega) = \mathcal{F}\{h(t)\} = \int_{-\infty}^{\infty} h(t) e^{-j\omega t} dt$$

### 1.2 Convolution Property of Fourier Transform

One of the most significant properties of the Fourier Transform is its ability to convert convolution in the time domain into multiplication in the frequency domain.

*   **Property:** If $y(t) = x(t) * h(t)$, then $Y(j\omega) = X(j\omega) H(j\omega)$.
    *   This is a direct consequence of the convolution theorem for Fourier Transforms.

### 1.3 System Analysis using Fourier Transform

*   **Output in the Frequency Domain:** Given an input signal $x(t)$ with Fourier Transform $X(j\omega)$ and an LTI system with frequency response $H(j\omega)$, the output signal $y(t)$ has a Fourier Transform $Y(j\omega)$ given by:
    $$Y(j\omega) = X(j\omega) H(j\omega)$$
*   **Recovering the Output in the Time Domain:** To find the output signal $y(t)$, we take the inverse Fourier Transform of $Y(j\omega)$:
    $$y(t) = \mathcal{F}^{-1}\{Y(j\omega)\} = \mathcal{F}^{-1}\{X(j\omega) H(j\omega)\}$$

### 1.4 Frequency Response $H(j\omega)$

*   **Definition:** The frequency response $H(j\omega)$ represents how the system affects sinusoidal inputs at different frequencies. It's a complex-valued function of $\omega$.
*   **Magnitude Response:** $|H(j\omega)|$ indicates the gain or attenuation of the system at frequency $\omega$.
*   **Phase Response:** $\angle H(j\omega)$ indicates the phase shift introduced by the system at frequency $\omega$.
*   **Interpretation:** If $x(t) = A \cos(\omega_0 t + \phi)$, then the steady-state output for a stable LTI system is $y_{ss}(t) = A |H(j\omega_0)| \cos(\omega_0 t + \phi + \angle H(j\omega_0))$.

### 1.5 Conditions for Fourier Transform Analysis

The Fourier Transform method is directly applicable to LTI systems that are **stable**. A system is stable if its impulse response $h(t)$ is absolutely integrable:
$$\int_{-\infty}^{\infty} |h(t)| dt < \infty$$
For such systems, the Fourier Transform $H(j\omega)$ exists, and the frequency response analysis is valid.

### 1.6 Examples (Fourier Transform)

**Example 1:** Consider an LTI system with impulse response $h(t) = e^{-at} u(t)$, where $a > 0$.
*   **Step 1: Find the impulse response:** $h(t) = e^{-at} u(t)$.
*   **Step 2: Find the frequency response $H(j\omega)$:**
    $$H(j\omega) = \mathcal{F}\{e^{-at} u(t)\} = \int_{-\infty}^{\infty} e^{-at} u(t) e^{-j\omega t} dt$$
    $$H(j\omega) = \int_{0}^{\infty} e^{-at} e^{-j\omega t} dt = \int_{0}^{\infty} e^{-(a+j\omega)t} dt$$
    $$H(j\omega) = \left[\frac{e^{-(a+j\omega)t}}{-(a+j\omega)}\right]_{0}^{\infty} = 0 - \frac{1}{-(a+j\omega)} = \frac{1}{a+j\omega}$$
*   **Step 3: Analyze the system's behavior with an input $x(t) = e^{-bt} u(t)$ where $b>a>0$.**
    *   Input Fourier Transform: $X(j\omega) = \frac{1}{b+j\omega}$.
    *   Output Fourier Transform: $Y(j\omega) = X(j\omega) H(j\omega) = \frac{1}{b+j\omega} \cdot \frac{1}{a+j\omega}$.
    *   To find $y(t)$, we use partial fraction expansion for $Y(j\omega)$:
        $$\frac{1}{(b+j\omega)(a+j\omega)} = \frac{A}{b+j\omega} + \frac{B}{a+j\omega}$$
        $1 = A(a+j\omega) + B(b+j\omega)$
        Let $j\omega = -b \implies 1 = A(a-b) \implies A = \frac{1}{a-b}$
        Let $j\omega = -a \implies 1 = B(b-a) \implies B = \frac{1}{b-a}$
        So, $Y(j\omega) = \frac{1}{a-b} \left(\frac{1}{b+j\omega}\right) + \frac{1}{b-a} \left(\frac{1}{a+j\omega}\right)$.
    *   Inverse Fourier Transform:
        $$y(t) = \mathcal{F}^{-1}\{Y(j\omega)\} = \frac{1}{a-b} e^{-bt} u(t) + \frac{1}{b-a} e^{-at} u(t)$$
        $$y(t) = \frac{e^{-at} - e^{-bt}}{b-a} u(t)$$

**Example 2: Low-Pass Filter**
Consider an RC circuit with $R=1\Omega$ and $C=1F$. The impulse response is $h(t) = e^{-t} u(t)$.
*   Frequency Response: $H(j\omega) = \frac{1}{1+j\omega}$.
*   Magnitude Response: $|H(j\omega)| = \frac{1}{|1+j\omega|} = \frac{1}{\sqrt{1^2 + \omega^2}} = \frac{1}{\sqrt{1+\omega^2}}$.
*   Phase Response: $\angle H(j\omega) = \arctan(-\omega/1) = -\arctan(\omega)$.
*   **Analysis:** The magnitude response is high for low frequencies (close to 0) and decreases as frequency increases, indicating it's a low-pass filter. It attenuates high-frequency components of the input signal.

## 2. Laplace Transform Analysis of Continuous-Time LTI Systems

The Laplace Transform (LT) is a more general tool than the Fourier Transform. It can analyze **both stable and unstable LTI systems**, and it's particularly useful for analyzing systems with **initial conditions** and understanding **transient behavior**.

### 2.1 The Laplace Transform

*   **Definition:** For a continuous-time signal $x(t)$, its Laplace Transform $X(s)$ is given by:
    $$X(s) = \mathcal{L}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-st} dt$$
    where $s = \sigma + j\omega$ is a complex variable.
*   **Region of Convergence (ROC):** The set of values of $s$ for which the integral converges. The ROC is crucial for uniqueness of the transform and for determining system properties.
*   **Inverse Laplace Transform:**
    $$x(t) = \mathcal{L}^{-1}\{X(s)\} = \frac{1}{2\pi j} \int_{\sigma_c - j\infty}^{\sigma_c + j\infty} X(s) e^{st} ds$$
    where $\sigma_c$ is a real constant chosen such that the integral path lies within the ROC.

### 2.2 Laplace Transform of LTI System's Impulse Response

*   **System Function (Transfer Function):** Let $h(t)$ be the impulse response of an LTI system. Its Laplace Transform, $H(s)$, is called the **system function** or **transfer function** of the system.
    $$H(s) = \mathcal{L}\{h(t)\} = \int_{-\infty}^{\infty} h(t) e^{-st} dt$$

### 2.3 Convolution Property of Laplace Transform

Similar to the Fourier Transform, convolution in the time domain becomes multiplication in the $s$-domain.

*   **Property:** If $y(t) = x(t) * h(t)$, then $Y(s) = X(s) H(s)$.
    *   This holds provided that $X(s)$ and $H(s)$ exist and their ROCs have a non-empty intersection.

### 2.4 System Analysis using Laplace Transform

*   **Output in the $s$-Domain:** Given an input signal $x(t)$ with Laplace Transform $X(s)$ and an LTI system with system function $H(s)$, the output signal $y(t)$ has a Laplace Transform $Y(s)$ given by:
    $$Y(s) = X(s) H(s)$$
*   **Recovering the Output in the Time Domain:**
    $$y(t) = \mathcal{L}^{-1}\{Y(s)\} = \mathcal{L}^{-1}\{X(s) H(s)\}$$

### 2.5 System Function $H(s)$ and System Properties

*   **Poles and Zeros:** The roots of the numerator of $H(s)$ are called **zeros**, and the roots of the denominator are called **poles**. The locations of poles and zeros in the $s$-plane reveal important system characteristics.
*   **Stability:** An LTI system is **BIBO (Bounded-Input, Bounded-Output) stable** if and only if all the poles of its system function $H(s)$ lie in the **left-half of the $s$-plane** (i.e., have negative real parts), and the ROC of $H(s)$ includes the imaginary axis ($j\omega$-axis).
    *   *Reference:* Oppenheim & Willsky, Chapter 9; Haykin, Chapter 10.
*   **Causality:** A system is causal if its impulse response $h(t) = 0$ for $t < 0$. A causal LTI system has a system function $H(s)$ whose ROC is the region to the right of the outermost pole (i.e., $\text{Re}(s) > \sigma_{\max}$).
*   **Relationship between Laplace and Fourier Transforms:** If an LTI system is stable, its ROC for $H(s)$ will include the $j\omega$-axis. In this case, the Fourier Transform $H(j\omega)$ is obtained by evaluating $H(s)$ on the $j\omega$-axis, i.e., $H(j\omega) = H(s)|_{s=j\omega}$.

### 2.6 Analyzing Systems with Differential Equations

LTI systems are often described by linear constant-coefficient differential equations. The Laplace transform is very effective in solving these equations.

*   **Differential Equation:**
    $$\frac{d^n y(t)}{dt^n} + a_{n-1}\frac{d^{n-1} y(t)}{dt^{n-1}} + \dots + a_0 y(t) = b_m\frac{d^m x(t)}{dt^m} + \dots + b_0 x(t)$$
*   **Transforming to the $s$-Domain:** Applying the Laplace transform to both sides, using the differentiation property $\mathcal{L}\{\frac{d^k f(t)}{dt^k}\} = s^k F(s) - s^{k-1} f(0) - \dots - f^{(k-1)}(0)$, we get:
    $$(s^n Y(s) - \text{initial conditions}) + a_{n-1}(s^{n-1} Y(s) - \dots) + \dots + a_0 Y(s) = b_m(s^m X(s) - \dots) + \dots + b_0 X(s)$$
    Rearranging to solve for $Y(s)$:
    $$Y(s) \left(s^n + a_{n-1}s^{n-1} + \dots + a_0\right) = X(s) \left(b_m s^m + \dots + b_0\right) + \text{terms involving initial conditions}$$
*   **System Function:** Assuming zero initial conditions, the system function is:
    $$H(s) = \frac{Y(s)}{X(s)} = \frac{b_m s^m + b_{m-1} s^{m-1} + \dots + b_0}{s^n + a_{n-1} s^{n-1} + \dots + a_0}$$
*   **Initial Conditions:** When initial conditions are not zero, they contribute additional terms to $Y(s)$, representing the system's response to stored energy (e.g., initial voltage across a capacitor or current through an inductor).

### 2.7 Examples (Laplace Transform)

**Example 1:** Consider the system described by the differential equation:
$\frac{dy(t)}{dt} + 2y(t) = x(t)$ with $y(0) = 1$.
*   **Step 1: Transform to $s$-domain (assuming zero initial conditions for system function):**
    $sY(s) + 2Y(s) = X(s)$
    $Y(s)(s+2) = X(s)$
*   **Step 2: Find the System Function $H(s)$:**
    $H(s) = \frac{Y(s)}{X(s)} = \frac{1}{s+2}$
*   **Step 3: Determine Stability and Causality:**
    *   Pole is at $s = -2$. Since the pole is in the LHP, the system is stable.
    *   The ROC for $H(s)$ is $\text{Re}(s) > -2$. This ROC includes the $j\omega$-axis, so the system is causal.
*   **Step 4: Find the output $y(t)$ for input $x(t) = e^{-3t} u(t)$ with $y(0)=1$.**
    *   $X(s) = \mathcal{L}\{e^{-3t} u(t)\} = \frac{1}{s+3}$
    *   From the differential equation: $sY(s) - y(0) + 2Y(s) = X(s)$
    *   $Y(s)(s+2) - 1 = \frac{1}{s+3}$
    *   $Y(s)(s+2) = 1 + \frac{1}{s+3} = \frac{s+3+1}{s+3} = \frac{s+4}{s+3}$
    *   $Y(s) = \frac{s+4}{(s+2)(s+3)}$
    *   **Step 5: Partial Fraction Expansion for $Y(s)$:**
        $$\frac{s+4}{(s+2)(s+3)} = \frac{A}{s+2} + \frac{B}{s+3}$$
        $s+4 = A(s+3) + B(s+2)$
        Let $s=-2 \implies -2+4 = A(-2+3) \implies 2 = A$.
        Let $s=-3 \implies -3+4 = B(-3+2) \implies 1 = -B \implies B = -1$.
        So, $Y(s) = \frac{2}{s+2} - \frac{1}{s+3}$.
    *   **Step 6: Inverse Laplace Transform:**
        $y(t) = \mathcal{L}^{-1}\{\frac{2}{s+2}\} - \mathcal{L}^{-1}\{\frac{1}{s+3}\}$
        $y(t) = 2e^{-2t} u(t) - e^{-3t} u(t)$

**Example 2: Analyzing an RC Circuit**
Consider a series RC circuit with voltage source $v_{in}(t)$ and output voltage $v_{out}(t)$ across the capacitor.
*   Differential Equation: $RC \frac{dv_{out}(t)}{dt} + v_{out}(t) = v_{in}(t)$.
*   Assume $R=1$, $C=1$. Equation: $\frac{dv_{out}(t)}{dt} + v_{out}(t) = v_{in}(t)$.
*   **System Function:** $H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{1}{s+1}$.
*   **Impulse Response:** $h(t) = e^{-t} u(t)$. (Matches Example 1 of FT section).
*   **Stability:** Pole at $s=-1$, system is stable.
*   **Causality:** ROC is $\text{Re}(s) > -1$, system is causal.
*   **Frequency Response:** $H(j\omega) = \frac{1}{1+j\omega}$. This confirms that the Laplace transform of a stable system's impulse response is its Fourier Transform.

## 3. Connection Between Fourier and Laplace Transforms

*   **When do they coincide?** If an LTI system is stable, its impulse response $h(t)$ is absolutely integrable. This means its Laplace transform $H(s)$ has a ROC that includes the $j\omega$-axis. In this case, the Fourier Transform $H(j\omega)$ is obtained by simply substituting $s=j\omega$ into $H(s)$: $H(j\omega) = H(s)|_{s=j\omega}$.
*   **Laplace for Unstable Systems:** For unstable systems, $h(t)$ is not absolutely integrable, and $H(j\omega)$ may not exist. However, $H(s)$ might exist for some region of the $s$-plane (i.e., it has a ROC). Laplace transform analysis allows us to study these unstable systems.
*   **Example:** Consider $h(t) = e^{at} u(t)$ with $a>0$. This system is unstable.
    *   $H(s) = \mathcal{L}\{e^{at} u(t)\} = \frac{1}{s-a}$. The ROC is $\text{Re}(s) > a$.
    *   The ROC does *not* include the $j\omega$-axis, so the Fourier Transform $H(j\omega)$ does not exist. We cannot analyze this system using only the Fourier Transform.

## 4. Practice Questions and Exercises

**Question 1:** (CO3, CO4) An LTI system has an impulse response $h(t) = \delta(t) + 2e^{-2t}u(t)$.
(a) Find the Fourier Transform $H(j\omega)$ of the system.
(b) Find the frequency response $H(j\omega)$ and determine its magnitude and phase response.
(c) If the input is $x(t) = e^{j3t}$, find the output $y(t)$ in the time domain.

**Answer 1:**
(a) $\mathcal{F}\{\delta(t)\} = 1$. $\mathcal{F}\{e^{-2t}u(t)\} = \frac{1}{2+j\omega}$.
So, $H(j\omega) = 1 + \frac{1}{2+j\omega}$.
(b) The frequency response is $H(j\omega) = \frac{2+j\omega+1}{2+j\omega} = \frac{3+j\omega}{2+j\omega}$.
Magnitude Response: $|H(j\omega)| = \frac{|3+j\omega|}{|2+j\omega|} = \frac{\sqrt{9+\omega^2}}{\sqrt{4+\omega^2}}$.
Phase Response: $\angle H(j\omega) = \angle(3+j\omega) - \angle(2+j\omega) = \arctan(\omega/3) - \arctan(\omega/2)$.
(c) $X(j\omega) = 2\pi\delta(\omega-3)$.
$Y(j\omega) = X(j\omega) H(j\omega) = 2\pi\delta(\omega-3) \frac{3+j\omega}{2+j\omega}$.
To find $y(t)$, we use the property $\int_{-\infty}^{\infty} \delta(t-t_0) f(t) dt = f(t_0)$.
The output is a complex exponential, $y(t) = X(j\omega) e^{j\omega t}|_{\omega=3} \frac{1}{2\pi}$.
$y(t) = \left(2\pi\delta(\omega-3) \frac{3+j\omega}{2+j\omega}\right) e^{j\omega t}$
$y(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(j\omega) H(j\omega) e^{j\omega t} d\omega$
$y(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} 2\pi\delta(\omega-3) \frac{3+j\omega}{2+j\omega} e^{j\omega t} d\omega$
$y(t) = \frac{3+j3}{2+j3} e^{j3t}$.

**Question 2:** (CO2, CO4) An LTI system has the system function $H(s) = \frac{s-1}{(s+2)(s-3)}$.
(a) Determine the poles and zeros of the system.
(b) For the ROC $\text{Re}(s) > 3$, is the system causal and stable? Justify your answer.
(c) Find the impulse response $h(t)$ for the ROC $\text{Re}(s) > 3$.

**Answer 2:**
(a) Zeros: $s=1$. Poles: $s=-2, s=3$.
(b) Causality: For a causal system, the ROC must be to the right of the outermost pole. The outermost pole is at $s=3$. The given ROC is $\text{Re}(s) > 3$, which is to the right of the outermost pole. Therefore, the system is **causal**.
Stability: For B.I.B.O stability, all poles must lie in the left-half of the $s$-plane, and the ROC must include the $j\omega$-axis. Here, there is a pole at $s=3$ in the right-half plane. Also, the ROC $\text{Re}(s) > 3$ does not include the $j\omega$-axis. Therefore, the system is **unstable**.
(c) $H(s) = \frac{s-1}{(s+2)(s-3)}$.
Partial Fraction Expansion:
$\frac{s-1}{(s+2)(s-3)} = \frac{A}{s+2} + \frac{B}{s-3}$
$s-1 = A(s-3) + B(s+2)$
Let $s=3 \implies 3-1 = B(3+2) \implies 2 = 5B \implies B = 2/5$.
Let $s=-2 \implies -2-1 = A(-2-3) \implies -3 = -5A \implies A = 3/5$.
$H(s) = \frac{3/5}{s+2} + \frac{2/5}{s-3}$.
For ROC $\text{Re}(s) > 3$:
$h(t) = \mathcal{L}^{-1}\{\frac{3/5}{s+2}\} + \mathcal{L}^{-1}\{\frac{2/5}{s-3}\}$
$h(t) = \frac{3}{5}e^{-2t}u(t) + \frac{2}{5}e^{3t}u(t)$. (This result for causal system is derived from ROC of $H(s)$ which is to the right of the outermost pole. However, this is derived from the interpretation of the ROC that determines the causal part of the impulse response. For $\text{Re}(s) > 3$, the impulse response terms will have $u(t)$ multipliers based on the $\sigma$ value.)
Correctly, for ROC $\text{Re}(s) > 3$, the impulse response is $h(t) = \frac{3}{5}e^{-2t}u(t) + \frac{2}{5}e^{3t}u(t)$.

**Question 3:** (CO2, CO4) A causal LTI system is described by the differential equation:
$\frac{d^2 y(t)}{dt^2} + 5\frac{dy(t)}{dt} + 6y(t) = \frac{dx(t)}{dt} + 3x(t)$.
(a) Find the system function $H(s)$.
(b) Determine the poles and zeros of the system.
(c) Is the system stable? Justify your answer.

**Answer 3:**
(a) Taking the Laplace transform of both sides (assuming zero initial conditions for the system function):
$s^2 Y(s) + 5s Y(s) + 6Y(s) = s X(s) + 3X(s)$
$Y(s)(s^2 + 5s + 6) = X(s)(s+3)$
$H(s) = \frac{Y(s)}{X(s)} = \frac{s+3}{s^2 + 5s + 6}$.
(b) $H(s) = \frac{s+3}{(s+2)(s+3)}$.
Zeros: $s=-3$. Poles: $s=-2, s=-3$.
Note: There is a pole-zero cancellation at $s=-3$. The effective system function is $H(s) = \frac{1}{s+2}$ for $s \neq -3$.
(c) The system function is $H(s) = \frac{1}{s+2}$. The pole is at $s=-2$. Since the pole is in the left-half of the $s$-plane and the system is causal (implied by the differential equation structure and typical context), the ROC for $H(s)$ will be $\text{Re}(s) > -2$, which includes the $j\omega$-axis. Thus, the system is **stable**.

## Important Points to Remember

*   **Fourier Transform:** Excellent for analyzing **steady-state frequency response** of **stable** LTI systems. Converts convolution to multiplication.
*   **Laplace Transform:** More general, analyzes both **stable and unstable** LTI systems, handles **initial conditions**, and is crucial for understanding **transient behavior**. Converts convolution to multiplication.
*   **System Function $H(s)$:** The Laplace transform of the impulse response. Its poles and zeros dictate system behavior.
*   **Stability:** B.I.B.O. stability is achieved if all poles of $H(s)$ are in the LHP and the ROC includes the $j\omega$-axis.
*   **Causality:** For a causal system, the ROC of $H(s)$ is to the right of the outermost pole.
*   **ROC:** Crucial for the uniqueness of Laplace transforms and for determining system properties.
*   **Differential Equations:** Laplace transform converts linear constant-coefficient differential equations into algebraic equations, simplifying analysis.

This module equips you with powerful mathematical tools to analyze LTI systems, moving beyond direct convolution to understand system behavior in the frequency and complex frequency domains. This is fundamental for filter design, control systems, and many other signal processing applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
