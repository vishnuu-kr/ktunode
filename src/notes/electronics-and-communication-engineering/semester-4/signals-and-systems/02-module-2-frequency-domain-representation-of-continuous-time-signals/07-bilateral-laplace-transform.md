---
title: "Bilateral Laplace Transform"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Frequency domain representation of continuous time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe51e"
status: "completed"
scrapedAt: "2026-05-23T17:52:26.321Z"
---
# Signals and Systems: Module 2 - Frequency Domain Representation of Continuous Time Signals

## Topic: Bilateral Laplace Transform

This module delves into representing continuous-time signals in the frequency domain, a powerful technique for analyzing and understanding the behavior of signals and systems. We will focus on the **Bilateral Laplace Transform**.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the definition and purpose of the Bilateral Laplace Transform.
*   Determine the Region of Convergence (ROC) for various signals.
*   Compute the Bilateral Laplace Transform for common continuous-time signals.
*   Utilize the properties of the Bilateral Laplace Transform for signal and system analysis.
*   Relate the Bilateral Laplace Transform to the Fourier Transform.
*   Apply the Bilateral Laplace Transform to solve differential equations representing LTI systems.

### Course Outcomes Addressed:

*   **CO3: Analyze signals in frequency domain using various transforms and examine their properties. (Knowledge Level: K3)** - The Bilateral Laplace Transform is a fundamental tool for frequency domain analysis.
*   **CO4: Interpret the use of various transforms to analyze continuous and discrete time LTI systems. (Knowledge Level: K3)** - This topic directly contributes to understanding how transforms aid in LTI system analysis.

---

### 1. Introduction to the Bilateral Laplace Transform

The Bilateral Laplace Transform is a generalization of the Fourier Transform that allows us to analyze signals that may not be absolutely integrable (and thus not have a finite Fourier Transform). It extends the concept of frequency to complex frequencies.

**Key Concept:** The Bilateral Laplace Transform transforms a time-domain function $x(t)$ into a complex frequency-domain function $X(s)$, where $s = \sigma + j\omega$ is a complex variable.

**Definition:**
The Bilateral Laplace Transform of a signal $x(t)$ is defined as:

$$X(s) = \mathcal{L}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-st} dt$$

where $s = \sigma + j\omega$ is a complex variable.

**Why "Bilateral"?**
The term "bilateral" signifies that the integral is taken over the entire time axis from $-\infty$ to $\infty$. This is in contrast to the Unilateral Laplace Transform, which is used for causal signals and systems and integrates from $0^-$ to $\infty$.

**Purpose:**

*   **Analysis of Unstable Systems:** The Bilateral Laplace Transform can analyze systems with impulse responses that grow over time, which are not absolutely integrable.
*   **Broader Signal Representation:** It can represent a wider class of signals compared to the Fourier Transform.
*   **System Analysis:** It simplifies the analysis of linear time-invariant (LTI) systems, converting differential equations into algebraic equations in the $s$-domain.

**Textbook Reference:**
*   **Oppenheim & Willsky:** Introduces the Laplace Transform as a generalization of the Fourier Transform, emphasizing its role in analyzing signals and systems that may not possess a Fourier Transform. (Chapter 9)
*   **Haykin:** Presents the Laplace Transform as a powerful tool for analyzing LTI systems, particularly those described by differential equations. (Chapter 7)

---

### 2. Region of Convergence (ROC)

The Region of Convergence (ROC) is the set of values of $s$ for which the Bilateral Laplace Transform integral converges. The ROC is crucial because it uniquely determines the time-domain signal $x(t)$ from its Laplace Transform $X(s)$.

**Convergence Condition:**
For the integral $X(s) = \int_{-\infty}^{\infty} x(t) e^{-st} dt$ to converge, the magnitude of the integrand must be absolutely integrable:

$$\int_{-\infty}^{\infty} |x(t) e^{-st}| dt < \infty$$

Substituting $s = \sigma + j\omega$:

$$\int_{-\infty}^{\infty} |x(t) e^{-(\sigma + j\omega)t}| dt < \infty$$
$$\int_{-\infty}^{\infty} |x(t) e^{-\sigma t} e^{-j\omega t}| dt < \infty$$

Since $|e^{-j\omega t}| = 1$:

$$\int_{-\infty}^{\infty} |x(t)| e^{-\sigma t} dt < \infty$$

The ROC is determined by the values of $\sigma$ that satisfy this condition.

**Key Properties of ROC:**

1.  **The ROC is a connected region in the s-plane.** It cannot be split into multiple disjoint regions.
2.  **If $X(s)$ converges at $s_0$, then it converges for all $s$ in the half-plane to the right of $s_0$ if $x(t)$ is right-sided, or to the left of $s_0$ if $x(t)$ is left-sided.** (More relevant for unilateral, but the principle of accumulation applies).
3.  **The ROC includes the imaginary axis ($j\omega$-axis) if and only if the Fourier Transform of $x(t)$ exists.** This happens when $x(t)$ is absolutely integrable.
4.  **If $X(s)$ has a pole at $s = p$, then the ROC cannot include $p$.** The ROC will be bounded by poles.
5.  **If $X(s)$ has a zero at $s = z$, the ROC can include or exclude $z$.**

**Examples of ROCs:**

*   **Right-sided signal ($x(t)u(t)$):** The ROC is typically of the form $\text{Re}(s) > \sigma_0$.
*   **Left-sided signal ($x(t)u(-t)$):** The ROC is typically of the form $\text{Re}(s) < \sigma_0$.
*   **Two-sided signal:** The ROC can be a strip between two vertical lines, $\sigma_1 < \text{Re}(s) < \sigma_2$.

**Textbook Reference:**
*   **Oppenheim & Willsky:** Provides a detailed explanation of ROCs and their importance in uniquely identifying signals. (Chapter 9)
*   **Haykin:** Discusses the ROC as a critical component of the Laplace Transform representation. (Chapter 7)
*   **Lathi:** Explains how the ROC is determined by the impulse response of the system. (Chapter 7)

---

### 3. Computing Bilateral Laplace Transforms for Common Signals

Let's compute the Laplace Transforms for some fundamental signals.

**3.1 Unit Step Function $u(t)$**

$x(t) = u(t)$

$X(s) = \int_{-\infty}^{\infty} u(t) e^{-st} dt = \int_{0}^{\infty} 1 \cdot e^{-st} dt$

$X(s) = \left[ \frac{e^{-st}}{-s} \right]_0^{\infty} = 0 - \frac{e^{-s\infty}}{-s}$

For convergence, we need $e^{-s\infty}$ to be 0. If $s = \sigma + j\omega$, then $e^{-s\infty} = e^{-(\sigma+j\omega)\infty} = e^{-\sigma\infty} e^{-j\omega\infty}$.
We need $e^{-\sigma\infty} = 0$, which means $\sigma > 0$.

$X(s) = \frac{1}{s}$, for $\text{Re}(s) > 0$

**ROC:** $\text{Re}(s) > 0$. This is the right half-plane.

**3.2 Unit Impulse Function $\delta(t)$**

$x(t) = \delta(t)$

$X(s) = \int_{-\infty}^{\infty} \delta(t) e^{-st} dt$

Using the sifting property of the impulse function:

$X(s) = e^{-s \cdot 0} = e^0 = 1$

**ROC:** The ROC is the entire s-plane, as the integral is always finite, regardless of $s$.

**3.3 Exponential Function $e^{-at}u(t)$ (Right-sided)**

$x(t) = e^{-at}u(t)$

$X(s) = \int_{-\infty}^{\infty} e^{-at}u(t) e^{-st} dt = \int_{0}^{\infty} e^{-at} e^{-st} dt$

$X(s) = \int_{0}^{\infty} e^{-(a+s)t} dt$

$X(s) = \left[ \frac{e^{-(a+s)t}}{-(a+s)} \right]_0^{\infty}$

For convergence, we need $e^{-(a+s)t}$ to approach 0 as $t \to \infty$.
Let $s = \sigma + j\omega$. We need $e^{-(\sigma + j\omega)t} = e^{-\sigma t} e^{-j\omega t} \to 0$ as $t \to \infty$.
This requires $\text{Re}(a+s) > 0$, or $\text{Re}(s) > -\text{Re}(a)$.

$X(s) = 0 - \frac{e^{0}}{-(a+s)} = \frac{1}{s+a}$

**ROC:** $\text{Re}(s) > -\text{Re}(a)$

**3.4 Exponential Function $e^{-at}u(-t)$ (Left-sided)**

$x(t) = e^{-at}u(-t)$

$X(s) = \int_{-\infty}^{\infty} e^{-at}u(-t) e^{-st} dt = \int_{-\infty}^{0} e^{-at} e^{-st} dt$

$X(s) = \int_{-\infty}^{0} e^{-(a+s)t} dt$

$X(s) = \left[ \frac{e^{-(a+s)t}}{-(a+s)} \right]_{-\infty}^{0} = \frac{e^{0}}{-(a+s)} - \lim_{t\to-\infty} \frac{e^{-(a+s)t}}{-(a+s)}$

For convergence, we need $e^{-(a+s)t} \to 0$ as $t \to -\infty$.
Let $s = \sigma + j\omega$. We need $e^{-(\sigma+j\omega)t} = e^{-\sigma t} e^{-j\omega t} \to 0$ as $t \to -\infty$.
This requires $-\sigma < 0$, or $\sigma > 0$. So, we need $\text{Re}(a+s) < 0$, or $\text{Re}(s) < -\text{Re}(a)$.

$X(s) = \frac{1}{-(a+s)} - 0 = \frac{-1}{s+a}$

**ROC:** $\text{Re}(s) < -\text{Re}(a)$

**3.5 Sinusoidal Signals**

Using Euler's formula: $\cos(\omega_0 t) = \frac{e^{j\omega_0 t} + e^{-j\omega_0 t}}{2}$ and $\sin(\omega_0 t) = \frac{e^{j\omega_0 t} - e^{-j\omega_0 t}}{2j}$.

We can use the property $\mathcal{L}\{e^{at}x(t)\} = X(s-a)$.

For $\cos(\omega_0 t)u(t)$:
$\mathcal{L}\{e^{j\omega_0 t}u(t)\} = \frac{1}{s - j\omega_0}$ with $\text{Re}(s) > 0$.
$\mathcal{L}\{e^{-j\omega_0 t}u(t)\} = \frac{1}{s + j\omega_0}$ with $\text{Re}(s) > 0$.

$\mathcal{L}\{\cos(\omega_0 t)u(t)\} = \frac{1}{2} \left( \frac{1}{s - j\omega_0} + \frac{1}{s + j\omega_0} \right)$
$= \frac{1}{2} \frac{s + j\omega_0 + s - j\omega_0}{(s - j\omega_0)(s + j\omega_0)}$
$= \frac{1}{2} \frac{2s}{s^2 + \omega_0^2} = \frac{s}{s^2 + \omega_0^2}$

**ROC:** $\text{Re}(s) > 0$.

Similarly for $\sin(\omega_0 t)u(t)$:
$\mathcal{L}\{\sin(\omega_0 t)u(t)\} = \frac{1}{2j} \left( \frac{1}{s - j\omega_0} - \frac{1}{s + j\omega_0} \right)$
$= \frac{1}{2j} \frac{s + j\omega_0 - (s - j\omega_0)}{(s - j\omega_0)(s + j\omega_0)}$
$= \frac{1}{2j} \frac{2j\omega_0}{s^2 + \omega_0^2} = \frac{\omega_0}{s^2 + \omega_0^2}$

**ROC:** $\text{Re}(s) > 0$.

**Textbook Reference:**
*   **Oppenheim & Willsky:** Provides tables of Laplace Transforms for common signals. (Chapter 9)
*   **Haykin:** Offers detailed derivations for common signal transforms. (Chapter 7)
*   **Anand Kumar:** Also provides comprehensive tables and examples. (Chapter 8)
*   **Ambardar:** Covers derivations for various elementary signals. (Chapter 6)

**Important Point to Remember:** The ROC is as important as the transform function itself for uniquely defining the signal. Different signals can have the same functional form for their Laplace Transform but different ROCs.

---

### 4. Properties of the Bilateral Laplace Transform

These properties are essential for manipulating and simplifying Laplace Transforms.

| Property                  | Time-Domain $x(t)$                               | Frequency-Domain $X(s)$                             | ROC of $X(s)$                                         |
| :------------------------ | :----------------------------------------------- | :-------------------------------------------------- | :---------------------------------------------------- |
| **Linearity**             | $ax_1(t) + bx_2(t)$                              | $aX_1(s) + bX_2(s)$                                 | Intersection of ROCs of $X_1(s)$ and $X_2(s)$        |
| **Time Shifting**         | $x(t-t_0)$                                       | $e^{-st_0} X(s)$                                    | Same ROC as $X(s)$                                    |
| **Time Scaling**          | $x(at)$                                          | $\frac{1}{|a|} X\left(\frac{s}{a}\right)$          | If ROC of $X(s)$ is $\text{Re}(s) > \sigma_0$, ROC of $X(s/a)$ is $\text{Re}(s) > a\sigma_0$ (for $a>0$) or $\text{Re}(s) < a\sigma_0$ (for $a<0$). |
| **Frequency Shifting**    | $e^{s_0 t} x(t)$                                 | $X(s-s_0)$                                          | Shift ROC of $X(s)$ by $s_0$. If ROC is $\text{Re}(s) > \sigma_0$, new ROC is $\text{Re}(s) > \sigma_0 + \text{Re}(s_0)$. |
| **Differentiation in Time** | $\frac{dx(t)}{dt}$                               | $sX(s)$                                             | Same ROC as $X(s)$ (except possibly at $s=\infty$)   |
| **Differentiation in Time** | $t x(t)$                                         | $-\frac{dX(s)}{ds}$                                 | Same ROC as $X(s)$                                    |
| **Integration in Time**   | $\int_{-\infty}^{t} x(\tau) d\tau$               | $\frac{1}{s} X(s)$                                  | ROC of $\frac{1}{s}X(s)$ is the ROC of $X(s)$ intersected with $\text{Re}(s) > 0$. |
| **Convolution in Time**   | $x_1(t) * x_2(t)$                                | $X_1(s) X_2(s)$                                     | Intersection of ROCs of $X_1(s)$ and $X_2(s)$        |
| **Convolution in Frequency** | $\frac{1}{2\pi j} \int_{c-j\infty}^{c+j\infty} X_1(\sigma) X_2(s-\sigma) d\sigma$ | $X_1(s) X_2(s)$                                     | Intersection of ROCs of $X_1(s)$ and $X_2(s)$        |
| **Initial Value Theorem** | $x(0)$ (if $x(t)u(t)$ has transform, or if $x(t)$ is causal) | $\lim_{s\to\infty} sX(s)$                            | Requires $x(t)$ to be causal.                       |
| **Final Value Theorem**   | $\lim_{t\to\infty} x(t)$ (if poles of $sX(s)$ are in LHP) | $\lim_{s\to 0} sX(s)$                                | Requires $x(t)$ to be causal and stable.            |

**Details on Differentiation in Time:**

*   $\mathcal{L}\left\{\frac{dx(t)}{dt}\right\} = sX(s) - x(0^-)$ (for causal signals, often used with unilateral transform). For bilateral, it's $sX(s)$ if $x(t)$ is a purely unilateral signal starting at $0^-$. If $x(t)$ exists for $t<0$, the property is more complex.
*   In the context of bilateral transforms for LTI systems described by differential equations, the property is often simplified to $sX(s)$ assuming the impulse response is taken as the starting point.

**Details on Integration in Time:**

*   The ROC of the integral $\int_{-\infty}^{t} x(\tau) d\tau$ is the ROC of $X(s)$ intersected with $\text{Re}(s) > 0$. This is because the integration process is equivalent to multiplying by $u(t)$ and then convolution with $u(t)$. The ROC of $u(t)$ is $\text{Re}(s) > 0$.

**Textbook Reference:**
*   **Oppenheim & Willsky:** Covers these properties thoroughly with examples of their application. (Chapter 9)
*   **Haykin:** Explains the utility of each property in simplifying analyses. (Chapter 7)
*   **Lathi:** Demonstrates how properties are used to find transforms and analyze system behavior. (Chapter 7)
*   **Ziemer:** Focuses on how properties simplify complex signal manipulations. (Chapter 6)

---

### 5. Relation to the Fourier Transform

The Bilateral Laplace Transform is a generalization of the Fourier Transform.

**Relationship:**
If the ROC of the Bilateral Laplace Transform $X(s)$ of $x(t)$ includes the imaginary axis ($j\omega$-axis), then the Fourier Transform of $x(t)$ exists and is given by evaluating $X(s)$ on the $j\omega$-axis:

$$\mathcal{F}\{x(t)\} = X(j\omega) = X(s)|_{s=j\omega}$$

This means that if $x(t)$ is absolutely integrable, its Fourier Transform can be found by setting $s=j\omega$ in its Laplace Transform, provided the ROC of the Laplace Transform contains the $j\omega$-axis.

**Example:**
For $x(t) = e^{-at}u(t)$ with $a > 0$:
$X(s) = \frac{1}{s+a}$, with ROC: $\text{Re}(s) > -\text{Re}(a)$.
If $a > 0$, then $-\text{Re}(a) < 0$. The ROC $\text{Re}(s) > -\text{Re}(a)$ includes the $j\omega$-axis (where $\text{Re}(s) = 0$).
So, the Fourier Transform is:
$X(j\omega) = \frac{1}{j\omega+a} = \frac{1}{a+j\omega}$.
This matches the known Fourier Transform of $e^{-at}u(t)$ for $a>0$.

If $a \le 0$, then $-\text{Re}(a) \ge 0$. The ROC would be $\text{Re}(s) > -\text{Re}(a)$. If $-\text{Re}(a) > 0$, the ROC does not include the $j\omega$-axis, and the Fourier Transform does not exist (because $e^{-at}u(t)$ is not absolutely integrable if $a \le 0$).

**Textbook Reference:**
*   **Oppenheim & Willsky:** Explicitly states this relationship and its conditions. (Chapter 9)
*   **Haykin:** Highlights the Laplace Transform as a bridge between time-domain and frequency-domain analysis. (Chapter 7)

---

### 6. Application to LTI Systems: Solving Differential Equations

The Bilateral Laplace Transform is a powerful tool for analyzing LTI systems, especially those described by linear constant-coefficient differential equations (LCCDEs). It transforms differential equations in the time domain into algebraic equations in the $s$-domain.

**General LCCDE for an LTI System:**

$$a_n \frac{d^n y(t)}{dt^n} + \dots + a_1 \frac{dy(t)}{dt} + a_0 y(t) = b_m \frac{d^m x(t)}{dt^m} + \dots + b_1 \frac{dx(t)}{dt} + b_0 x(t)$$

Taking the Bilateral Laplace Transform of both sides:

$a_n \mathcal{L}\left\{\frac{d^n y(t)}{dt^n}\right\} + \dots + a_0 \mathcal{L}\{y(t)\} = b_m \mathcal{L}\left\{\frac{d^m x(t)}{dt^m}\right\} + \dots + b_0 \mathcal{L}\{x(t)\}$

Using the differentiation property $\mathcal{L}\left\{\frac{d^k x(t)}{dt^k}\right\} = s^k X(s)$ (assuming conditions for this property hold, typically related to causal signals or defining initial conditions appropriately):

$a_n s^n Y(s) + \dots + a_0 Y(s) = b_m s^m X(s) + \dots + b_0 X(s)$

$(a_n s^n + \dots + a_0) Y(s) = (b_m s^m + \dots + b_0) X(s)$

This can be written as:

$$H(s) = \frac{Y(s)}{X(s)} = \frac{b_m s^m + \dots + b_0}{a_n s^n + \dots + a_0}$$

where $H(s)$ is the **transfer function** of the system. The transfer function is the Laplace Transform of the system's impulse response $h(t)$.

**Steps to Solve:**

1.  **Take the Laplace Transform of the differential equation:** Apply the Laplace Transform to both sides, using the differentiation property.
2.  **Account for initial conditions:** For unilateral Laplace transforms, initial conditions $y(0^-), y'(0^-), \dots$ are explicitly included. For bilateral, if we are analyzing the system's response to an input starting at $t=0$, and we assume the system was in a quiescent state before $t=0$, then we effectively use the unilateral approach.
3.  **Solve for $Y(s)$:** Rearrange the equation to isolate $Y(s)$.
4.  **Determine the transfer function $H(s)$:** $H(s) = Y(s)/X(s)$.
5.  **Find the impulse response $h(t)$:** Take the inverse Laplace Transform of $H(s)$.
6.  **Find the output for a specific input $x(t)$:** Calculate $X(s)$, then $Y(s) = H(s)X(s)$, and finally find $y(t) = \mathcal{L}^{-1}\{Y(s)\}$.

**Example:**
Consider an LTI system described by the differential equation:
$\frac{dy(t)}{dt} + 2y(t) = x(t)$
with $x(t) = u(t)$ and initial condition $y(0^-) = 1$.

1.  **Laplace Transform:**
    $\mathcal{L}\left\{\frac{dy(t)}{dt}\right\} + 2\mathcal{L}\{y(t)\} = \mathcal{L}\{x(t)\}$
    $(sY(s) - y(0^-)) + 2Y(s) = X(s)$

2.  **Substitute initial condition and input:**
    $y(0^-) = 1$, $x(t) = u(t) \implies X(s) = \frac{1}{s}$ (for $\text{Re}(s)>0$)
    $(sY(s) - 1) + 2Y(s) = \frac{1}{s}$

3.  **Solve for $Y(s)$:**
    $Y(s)(s+2) - 1 = \frac{1}{s}$
    $Y(s)(s+2) = 1 + \frac{1}{s} = \frac{s+1}{s}$
    $Y(s) = \frac{s+1}{s(s+2)}$

4.  **Find the Transfer Function $H(s)$:**
    Assuming $X(s)$ is the input and $Y(s)$ is the output, and considering the system equation without the specific input:
    $sY(s) + 2Y(s) = X(s)$
    $(s+2)Y(s) = X(s)$
    $H(s) = \frac{Y(s)}{X(s)} = \frac{1}{s+2}$

5.  **Find the impulse response $h(t)$:**
    $h(t) = \mathcal{L}^{-1}\{H(s)\} = \mathcal{L}^{-1}\left\{\frac{1}{s+2}\right\} = e^{-2t}u(t)$

6.  **Find the output $y(t)$:**
    We have $Y(s) = \frac{s+1}{s(s+2)}$. Use partial fraction expansion:
    $\frac{s+1}{s(s+2)} = \frac{A}{s} + \frac{B}{s+2}$
    $s+1 = A(s+2) + Bs$
    Let $s=0 \implies 1 = 2A \implies A = 1/2$
    Let $s=-2 \implies -1 = -2B \implies B = 1/2$
    $Y(s) = \frac{1/2}{s} + \frac{1/2}{s+2}$
    $y(t) = \mathcal{L}^{-1}\{Y(s)\} = \frac{1}{2}u(t) + \frac{1}{2}e^{-2t}u(t)$

**Textbook Reference:**
*   **Oppenheim & Willsky:** Emphasizes the systematic approach to solving differential equations using Laplace Transforms. (Chapter 9)
*   **Haykin:** Details the transfer function concept and its derivation from differential equations. (Chapter 7)
*   **Lathi:** Provides numerous examples of solving circuit and system problems using Laplace Transforms. (Chapter 7)
*   **Ziemer:** Focuses on the algebraic manipulation in the s-domain. (Chapter 6)
*   **Ambardar:** Explains the transform approach for solving system differential equations. (Chapter 6)

---

### 7. Practice Questions and Exercises

**Question 1:**
Find the Bilateral Laplace Transform and its ROC for the signal $x(t) = e^{-3t}u(t) + e^{2t}u(-t)$.

**Solution 1:**
Let $x_1(t) = e^{-3t}u(t)$ and $x_2(t) = e^{2t}u(-t)$.
For $x_1(t) = e^{-3t}u(t)$:
$X_1(s) = \frac{1}{s+3}$, with ROC: $\text{Re}(s) > -3$.

For $x_2(t) = e^{2t}u(-t)$:
Using $\mathcal{L}\{e^{at}u(-t)\} = \frac{-1}{s-a}$ with ROC $\text{Re}(s) < a$:
$X_2(s) = \frac{-1}{s-2}$, with ROC: $\text{Re}(s) < 2$.

Using the linearity property, $X(s) = X_1(s) + X_2(s)$:
$X(s) = \frac{1}{s+3} - \frac{1}{s-2}$
$X(s) = \frac{(s-2) - (s+3)}{(s+3)(s-2)} = \frac{s-2-s-3}{s^2 + s - 6} = \frac{-5}{s^2 + s - 6}$

The ROC for $X(s)$ is the intersection of the ROCs of $X_1(s)$ and $X_2(s)$:
ROC: $\text{Re}(s) > -3$ and $\text{Re}(s) < 2$, which is $-3 < \text{Re}(s) < 2$.

**Answer:** $X(s) = \frac{-5}{s^2 + s - 6}$, ROC: $-3 < \text{Re}(s) < 2$.

---

**Question 2:**
Find the impulse response $h(t)$ of an LTI system with the transfer function $H(s) = \frac{s+2}{s^2+4s+3}$.

**Solution 2:**
First, find the partial fraction expansion of $H(s)$:
The denominator is $s^2+4s+3 = (s+1)(s+3)$.
$\frac{s+2}{(s+1)(s+3)} = \frac{A}{s+1} + \frac{B}{s+3}$
$s+2 = A(s+3) + B(s+1)$

Let $s=-1 \implies -1+2 = A(-1+3) + B(0) \implies 1 = 2A \implies A = 1/2$.
Let $s=-3 \implies -3+2 = A(0) + B(-3+1) \implies -1 = -2B \implies B = 1/2$.

So, $H(s) = \frac{1/2}{s+1} + \frac{1/2}{s+3}$.

Now, take the inverse Laplace Transform to find $h(t)$:
$h(t) = \mathcal{L}^{-1}\{H(s)\} = \mathcal{L}^{-1}\left\{\frac{1/2}{s+1}\right\} + \mathcal{L}^{-1}\left\{\frac{1/2}{s+3}\right\}$
$h(t) = \frac{1}{2}e^{-t}u(t) + \frac{1}{2}e^{-3t}u(t)$

**Answer:** $h(t) = \left(\frac{1}{2}e^{-t} + \frac{1}{2}e^{-3t}\right)u(t)$.

---

**Question 3:**
Use the Bilateral Laplace Transform to solve the differential equation:
$\frac{dy(t)}{dt} + 3y(t) = x(t)$
given $x(t) = e^{-t}u(t)$ and $y(0^-) = 1$.

**Solution 3:**
1.  **Laplace Transform of the equation:**
    $sY(s) - y(0^-) + 3Y(s) = X(s)$

2.  **Substitute initial condition and input:**
    $y(0^-) = 1$.
    $x(t) = e^{-t}u(t) \implies X(s) = \frac{1}{s+1}$ with ROC $\text{Re}(s) > -1$.
    $(sY(s) - 1) + 3Y(s) = \frac{1}{s+1}$

3.  **Solve for $Y(s)$:**
    $Y(s)(s+3) - 1 = \frac{1}{s+1}$
    $Y(s)(s+3) = 1 + \frac{1}{s+1} = \frac{s+1+1}{s+1} = \frac{s+2}{s+1}$
    $Y(s) = \frac{s+2}{(s+1)(s+3)}$

4.  **Partial Fraction Expansion of $Y(s)$:**
    $\frac{s+2}{(s+1)(s+3)} = \frac{A}{s+1} + \frac{B}{s+3}$
    $s+2 = A(s+3) + B(s+1)$
    Let $s=-1 \implies -1+2 = A(-1+3) \implies 1 = 2A \implies A = 1/2$.
    Let $s=-3 \implies -3+2 = B(-3+1) \implies -1 = -2B \implies B = 1/2$.
    $Y(s) = \frac{1/2}{s+1} + \frac{1/2}{s+3}$

5.  **Inverse Laplace Transform to find $y(t)$:**
    $y(t) = \mathcal{L}^{-1}\{Y(s)\} = \mathcal{L}^{-1}\left\{\frac{1/2}{s+1}\right\} + \mathcal{L}^{-1}\left\{\frac{1/2}{s+3}\right\}$
    $y(t) = \frac{1}{2}e^{-t}u(t) + \frac{1}{2}e^{-3t}u(t)$

**Answer:** $y(t) = \left(\frac{1}{2}e^{-t} + \frac{1}{2}e^{-3t}\right)u(t)$.

---

### 8. Important Points to Remember

*   The **Bilateral Laplace Transform** is defined as $X(s) = \int_{-\infty}^{\infty} x(t) e^{-st} dt$, where $s = \sigma + j\omega$.
*   The **Region of Convergence (ROC)** is critical. It determines the uniqueness of the signal and is influenced by the nature of the signal (right-sided, left-sided, or two-sided).
*   **ROC Properties:** Connected region, bounded by poles, includes $j\omega$-axis iff FT exists.
*   The Laplace Transform converts **differential equations into algebraic equations**, simplifying system analysis.
*   The **Transfer Function** $H(s)$ of an LTI system is the Laplace Transform of its impulse response $h(t)$.
*   The Laplace Transform is a generalization of the Fourier Transform. If the ROC includes the $j\omega$-axis, then $X(j\omega) = X(s)|_{s=j\omega}$.
*   Properties like linearity, time shifting, frequency shifting, and convolution are essential tools for signal and system manipulation.

---

This comprehensive study guide provides a solid foundation for understanding the Bilateral Laplace Transform within the context of Signals and Systems. Remember to practice deriving these transforms and applying the properties to build your proficiency.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
