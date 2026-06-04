---
title: "Fourier Transform and its inverse"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810689"
status: "completed"
scrapedAt: "2026-05-20T18:41:14.097Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3
## Module 1: Fourier Integral
### Topic: Fourier Transform and its Inverse

This module introduces the Fourier Integral, a powerful tool for analyzing signals and functions in terms of their frequency components. We will focus on the fundamental concepts of the Fourier Transform and its inverse, which allow us to transition between the time/spatial domain and the frequency domain.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the motivation behind the Fourier Transform:** Why do we need to analyze functions in the frequency domain?
*   **Define the Fourier Transform of a function:** Understand its mathematical formulation.
*   **Define the Inverse Fourier Transform:** Understand how to recover the original function from its transform.
*   **Understand the conditions for the existence of the Fourier Transform:** When is this analysis possible?
*   **Calculate Fourier Transforms of common functions:** Apply the definition to practical examples.
*   **Understand the properties of the Fourier Transform:** How do transformations in one domain affect the other?
*   **Apply the Fourier Transform and its inverse to solve problems in electrical and physical sciences.**

---

### 1. Motivation for the Fourier Transform

Many physical phenomena, especially in electrical engineering and physics, can be represented as signals or functions. Understanding the *frequency content* of these signals is crucial for:

*   **Signal Analysis:** Decomposing a complex signal into its constituent sinusoidal components.
*   **System Analysis:** Understanding how systems (like filters or circuits) respond to different frequencies.
*   **Data Compression:** Identifying and retaining important frequency components while discarding less significant ones.
*   **Solving Differential Equations:** Transforming differential equations in the time domain into algebraic equations in the frequency domain, which are often easier to solve.
*   **Image Processing:** Analyzing and manipulating images based on their spatial frequencies.

**The Fourier Transform allows us to switch from the time (or spatial) domain to the frequency domain, providing a different perspective on the function that can reveal valuable insights.**

---

### 2. The Fourier Transform

The Fourier Transform of a function $f(t)$ is denoted by $F(\omega)$ or $\mathcal{F}\{f(t)\}$, where $\omega$ represents angular frequency. It is defined as:

$$
F(\omega) = \mathcal{F}\{f(t)\} = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
$$

**Key Concepts and Definitions:**

*   **Integrand:** $f(t)e^{-i\omega t}$ is the product of the function and a complex exponential.
*   **Complex Exponential:** $e^{-i\omega t} = \cos(\omega t) - i \sin(\omega t)$. This represents a sinusoidal wave of angular frequency $\omega$.
*   **Integral:** The integral sums up the "contribution" of each frequency component present in $f(t)$.
*   **Frequency Domain Representation:** $F(\omega)$ is a complex-valued function of $\omega$.
    *   $|F(\omega)|$ represents the **amplitude spectrum** (magnitude of the frequency component).
    *   $\arg(F(\omega))$ represents the **phase spectrum** (phase shift of the frequency component).
*   **Integration Variable:** $t$ is the variable in the original domain (e.g., time).
*   **Transform Variable:** $\omega$ is the variable in the transformed domain (e.g., angular frequency).

**Conditions for Existence of the Fourier Transform:**

For the Fourier Transform $F(\omega)$ to exist (i.e., for the integral to converge), the function $f(t)$ must satisfy certain conditions, often referred to as Dirichlet conditions. A sufficient condition is that $f(t)$ is absolutely integrable:

$$
\int_{-\infty}^{\infty} |f(t)| dt < \infty
$$

Other conditions that contribute to convergence include:
*   $f(t)$ has a finite number of discontinuities in any finite interval.
*   $f(t)$ has a finite number of maxima and minima in any finite interval.

**Example:**
Let's find the Fourier Transform of a rectangular pulse function:

$$
f(t) = \begin{cases} 1 & -T/2 \le t \le T/2 \\ 0 & \text{otherwise} \end{cases}
$$

$$
\begin{aligned}
F(\omega) &= \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt \\
&= \int_{-T/2}^{T/2} 1 \cdot e^{-i\omega t} dt \\
&= \left[ \frac{e^{-i\omega t}}{-i\omega} \right]_{-T/2}^{T/2} \\
&= \frac{e^{-i\omega T/2} - e^{i\omega T/2}}{-i\omega} \\
&= \frac{2i \sin(\omega T/2)}{-i\omega} \\
&= \frac{2 \sin(\omega T/2)}{\omega} \\
\end{aligned}
$$

We can also write this in terms of the **sinc function**, defined as $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$:

$$
F(\omega) = T \frac{\sin(\omega T/2)}{\omega T/2} = T \cdot \text{sinc}\left(\frac{\omega T}{2\pi}\right)
$$

**Important Point to Remember:** The Fourier Transform of a localized pulse is a spread-out function in the frequency domain, and vice-versa. This is the **time-frequency uncertainty principle**.

---

### 3. The Inverse Fourier Transform

The Inverse Fourier Transform allows us to reconstruct the original function $f(t)$ from its Fourier Transform $F(\omega)$:

$$
f(t) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega
$$

**Key Concepts and Definitions:**

*   **Integral:** The integral sums up the contributions of all frequency components as described by $F(\omega)$.
*   **Complex Exponential:** $e^{i\omega t} = \cos(\omega t) + i \sin(\omega t)$. This has a positive frequency in the exponent, reconstructing the original signal.
*   **Scaling Factor:** The $\frac{1}{2\pi}$ factor is crucial for the inverse transform to recover the original function. The placement of this factor can vary depending on the definition of the Fourier Transform used (sometimes it's on the forward transform, sometimes split between both).

**Example:**
Let's find the Inverse Fourier Transform of $F(\omega) = 2\pi \delta(\omega - \omega_0) + 2\pi \delta(\omega + \omega_0)$, which represents two impulses at frequencies $+\omega_0$ and $-\omega_0$.

$$
\begin{aligned}
f(t) &= \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega \\
&= \frac{1}{2\pi} \int_{-\infty}^{\infty} (2\pi \delta(\omega - \omega_0) + 2\pi \delta(\omega + \omega_0)) e^{i\omega t} d\omega \\
&= \int_{-\infty}^{\infty} (\delta(\omega - \omega_0) + \delta(\omega + \omega_0)) e^{i\omega t} d\omega \\
\end{aligned}
$$

Using the sifting property of the Dirac delta function ($\int g(\omega) \delta(\omega - a) d\omega = g(a)$):

$$
\begin{aligned}
f(t) &= e^{i\omega_0 t} + e^{-i\omega_0 t} \\
&= (\cos(\omega_0 t) + i \sin(\omega_0 t)) + (\cos(\omega_0 t) - i \sin(\omega_0 t)) \\
&= 2 \cos(\omega_0 t) \\
\end{aligned}
$$

This shows that a signal composed of specific frequencies (represented by impulses in the frequency domain) can be reconstructed.

---

### 4. Conditions for the Existence of the Inverse Fourier Transform

The Inverse Fourier Transform is guaranteed to exist if the Fourier Transform $F(\omega)$ satisfies certain conditions, similar to the Dirichlet conditions for the forward transform. If $F(\omega)$ is absolutely integrable:

$$
\int_{-\infty}^{\infty} |F(\omega)| d\omega < \infty
$$

then the inverse transform exists.

---

### 5. Properties of the Fourier Transform

Understanding the properties of the Fourier Transform is crucial for simplifying calculations and solving problems.

| Property Name          | Original Function ($f(t)$) | Fourier Transform ($F(\omega)$) | Description                                                                                                                                                                 |
| :--------------------- | :------------------------- | :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Linearity**          | $af(t) + bg(t)$            | $aF(\omega) + bG(\omega)$       | The transform of a linear combination of functions is the linear combination of their transforms.                                                                           |
| **Time Shifting**      | $f(t - t_0)$               | $e^{-i\omega t_0} F(\omega)$    | Shifting a function in the time domain by $t_0$ results in multiplying its Fourier Transform by a complex exponential $e^{-i\omega t_0}$. This affects the phase but not the magnitude. |
| **Frequency Shifting** | $e^{i\omega_0 t} f(t)$     | $F(\omega - \omega_0)$          | Multiplying a function by a complex exponential in the time domain shifts its Fourier Transform in the frequency domain by $\omega_0$.                                        |
| **Time Scaling**       | $f(at)$                    | $\frac{1}{|a|} F\left(\frac{\omega}{a}\right)$ | Scaling the time axis by $a$ scales the frequency axis by $1/a$ and attenuates the amplitude by $1/|a|$. If $a>1$, the function is compressed in time and stretched in frequency. |
| **Time Differentiation** | $\frac{df(t)}{dt}$         | $i\omega F(\omega)$             | Differentiation in the time domain corresponds to multiplication by $i\omega$ in the frequency domain.                                                                     |
| **Time Integration**   | $\int_{-\infty}^{t} f(\tau) d\tau$ | $\frac{1}{i\omega} F(\omega) + \pi F(0) \delta(\omega)$ | Integration in the time domain corresponds to division by $i\omega$ in the frequency domain (with an additional term for the DC component).                               |
| **Convolution**        | $(f * g)(t) = \int_{-\infty}^{\infty} f(\tau) g(t - \tau) d\tau$ | $F(\omega) G(\omega)$           | Convolution in the time domain is equivalent to multiplication in the frequency domain. This is a fundamental property for analyzing LTI systems.                                |
| **Multiplication**     | $f(t)g(t)$                 | $\frac{1}{2\pi} (F * G)(\omega)$ | Multiplication in the time domain is equivalent to convolution in the frequency domain (scaled by $\frac{1}{2\pi}$).                                                       |
| **Parseval's Theorem** | $\int_{-\infty}^{\infty} |f(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |F(\omega)|^2 d\omega$ | The energy of the signal in the time domain is equal to the energy in the frequency domain.                                                                                   |

**Examples of Properties in Action:**

*   **Time Shifting:** If $f(t) = e^{-at} u(t)$ (where $u(t)$ is the unit step function), its transform is $F(\omega) = \frac{1}{a+i\omega}$. Then, the transform of $f(t-t_0) = e^{-a(t-t_0)} u(t-t_0)$ is $e^{-i\omega t_0} \frac{1}{a+i\omega}$.
*   **Time Differentiation:** The transform of $f'(t)$ is $i\omega F(\omega)$. This is useful for solving linear ODEs with constant coefficients.

---

### 6. Fourier Transforms of Common Functions

It is very useful to memorize the Fourier Transforms of common functions.

| Function ($f(t)$)                                     | Fourier Transform ($F(\omega)$)                       | Notes                                                                                                                                  |
| :---------------------------------------------------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| $\delta(t)$ (Dirac Delta Function)                    | $1$                                                   | The transform of an impulse is a constant (all frequencies present equally).                                                           |
| $1$ (Unit Step - improper)                            | $2\pi \delta(\omega)$                                 | The transform of a constant is an impulse at $\omega=0$ (DC component). This is technically an improper function for FT.             |
| $e^{-at} u(t)$, $a > 0$ (Decaying Exponential)       | $\frac{1}{a+i\omega}$                                 | A common transform used in system analysis.                                                                                            |
| $e^{at} u(-t)$, $a > 0$ (Growing Exponential)        | $\frac{1}{a-i\omega}$                                 |                                                                                                                                        |
| $\frac{1}{2}e^{-a|t|}$, $a > 0$ (Double Exponential)   | $\frac{a}{a^2 + \omega^2}$                            |                                                                                                                                        |
| $\text{rect}(t/T) = \begin{cases} 1 & -T/2 \le t \le T/2 \\ 0 & \text{otherwise} \end{cases}$ | $T \text{sinc}\left(\frac{\omega T}{2\pi}\right) = T \frac{\sin(\omega T/2)}{\omega T/2}$ | The sinc function is characteristic of the rectangular pulse.                                                                            |
| $e^{i\omega_0 t}$ (Complex Exponential)               | $2\pi \delta(\omega - \omega_0)$                    | A pure frequency corresponds to an impulse in the frequency domain.                                                                    |
| $\cos(\omega_0 t) = \frac{e^{i\omega_0 t} + e^{-i\omega_0 t}}{2}$ | $\pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$ | The transform of a cosine consists of two impulses at $\pm \omega_0$.                                                                  |
| $\sin(\omega_0 t) = \frac{e^{i\omega_0 t} - e^{-i\omega_0 t}}{2i}$ | $i\pi [\delta(\omega - \omega_0) - \delta(\omega + \omega_0)]$ | The transform of a sine consists of two impulses at $\pm \omega_0$ with opposite signs and a factor of $i$.                            |
| $u(t)$ (Unit Step Function)                           | $\pi \delta(\omega) + \frac{1}{i\omega}$              | The unit step can be thought of as a constant plus a decaying exponential.                                                             |

**Important Note on $\text{sinc}(x)$:**
There are two common definitions for the sinc function:
1.  $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$ (Normalized sinc)
2.  $\text{sinc}(x) = \frac{\sin(x)}{x}$ (Unnormalized sinc)

Be consistent with the definition used in your course materials. The above table uses the unnormalized sinc.

---

### 7. Application Examples

**Example 1: Analyzing a Circuit Response**

Consider an RC low-pass filter with input voltage $v_{in}(t)$ and output voltage $v_{out}(t)$. The relationship is given by the differential equation:

$RC \frac{dv_{out}(t)}{dt} + v_{out}(t) = v_{in}(t)$

Taking the Fourier Transform of both sides:

$RC (i\omega V_{out}(\omega)) + V_{out}(\omega) = V_{in}(\omega)$
$V_{out}(\omega) (i\omega RC + 1) = V_{in}(\omega)$

The **transfer function** $H(\omega)$ is the ratio of the output transform to the input transform:

$H(\omega) = \frac{V_{out}(\omega)}{V_{in}(\omega)} = \frac{1}{1 + i\omega RC}$

This transfer function reveals how the filter amplifies or attenuates different frequencies. For example, at low frequencies ($\omega \to 0$), $|H(\omega)| \approx 1$, meaning the input is passed largely unchanged. At high frequencies ($\omega \to \infty$), $|H(\omega)| \to 0$, meaning high frequencies are attenuated.

**Example 2: Properties of Signals**

If you have a signal $f(t)$ and you know its transform $F(\omega)$, you can easily find the transform of shifted or scaled versions of $f(t)$ using the properties. For instance, if $f(t)$ is a signal that starts at $t=0$ and its transform is $F(\omega)$, then the transform of $f(t-5)$ (the same signal delayed by 5 units) is $e^{-i\omega 5} F(\omega)$.

---

### 8. Practice Questions and Exercises

1.  **Find the Fourier Transform of the function:**
    $$
    f(t) = e^{-2t} u(t-1)
    $$
    (where $u(t)$ is the unit step function).

2.  **Find the Inverse Fourier Transform of:**
    $$
    F(\omega) = \frac{1}{3 + i\omega}
    $$

3.  **Using the properties of the Fourier Transform, find the Fourier Transform of:**
    $$
    g(t) = \cos(\omega_0 t) f(t)
    $$
    where $F(\omega) = \mathcal{F}\{f(t)\}$.

4.  **Calculate the Fourier Transform of the Gaussian function:**
    $$
    f(t) = e^{-at^2} \quad (a > 0)
    $$
    (Hint: You might need to use differentiation with respect to a parameter and a known integral result like $\int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\frac{\pi}{a}}$).

5.  **Determine if the Fourier Transform exists for the function:**
    $$
    f(t) = \frac{\sin(t)}{t}
    $$
    Justify your answer.

---

### Answers to Practice Questions

1.  **Solution:**
    We know that $\mathcal{F}\{e^{-at} u(t)\} = \frac{1}{a+i\omega}$.
    First, let $g(t) = e^{-2t} u(t)$, so $G(\omega) = \frac{1}{2+i\omega}$.
    Then $f(t) = e^{-2(t-1)} u(t-1) = e^2 \cdot e^{-2(t-1)} u(t-1)$.
    Since $f(t) = e^2 g(t-1)$, using the time shifting property:
    $\mathcal{F}\{f(t)\} = e^2 \cdot e^{-i\omega (1)} G(\omega)$
    $\mathcal{F}\{f(t)\} = e^2 e^{-i\omega} \frac{1}{2+i\omega} = \frac{e^2 e^{-i\omega}}{2+i\omega}$

2.  **Solution:**
    This is a standard transform. We know $\mathcal{F}\{e^{-at} u(t)\} = \frac{1}{a+i\omega}$.
    By comparing $F(\omega) = \frac{1}{3+i\omega}$ with the standard form, we have $a=3$.
    Therefore, $f(t) = e^{-3t} u(t)$.

3.  **Solution:**
    We know that $\mathcal{F}\{\cos(\omega_0 t)\} = \pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$.
    Using the multiplication property: $\mathcal{F}\{f(t)g(t)\} = \frac{1}{2\pi} (F * G)(\omega)$.
    So, $\mathcal{F}\{\cos(\omega_0 t) f(t)\} = \frac{1}{2\pi} (\pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] * F(\omega))$.
    Using the convolution property of the delta function (where $h * \delta(t-a) = h(t-a)$):
    $\mathcal{F}\{\cos(\omega_0 t) f(t)\} = \frac{1}{2} \left( \frac{F(\omega - \omega_0)}{1} + \frac{F(\omega + \omega_0)}{1} \right)$
    $\mathcal{F}\{\cos(\omega_0 t) f(t)\} = \frac{1}{2} [F(\omega - \omega_0) + F(\omega + \omega_0)]$
    This is also known as the **frequency modulation property**.

4.  **Solution:**
    Let $f(t) = e^{-at^2}$. We want to find $F(\omega) = \int_{-\infty}^{\infty} e^{-at^2} e^{-i\omega t} dt$.
    Consider the related integral $I(a, b) = \int_{-\infty}^{\infty} e^{-at^2 - bt} dt$.
    Completing the square in the exponent: $-at^2 - bt = -a(t^2 + \frac{b}{a}t) = -a(t + \frac{b}{2a})^2 + \frac{b^2}{4a}$.
    So, $I(a, b) = \int_{-\infty}^{\infty} e^{-a(t + \frac{b}{2a})^2 + \frac{b^2}{4a}} dt = e^{\frac{b^2}{4a}} \int_{-\infty}^{\infty} e^{-a(t + \frac{b}{2a})^2} dt$.
    Let $u = t + \frac{b}{2a}$, then $du = dt$. The limits of integration remain $-\infty$ to $\infty$.
    $I(a, b) = e^{\frac{b^2}{4a}} \int_{-\infty}^{\infty} e^{-au^2} du$.
    Using the known Gaussian integral $\int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\frac{\pi}{a}}$:
    $I(a, b) = e^{\frac{b^2}{4a}} \sqrt{\frac{\pi}{a}}$.

    In our case, $b = i\omega$ and we are integrating with respect to $t$. So, $F(\omega) = I(a, i\omega)$.
    $F(\omega) = e^{\frac{(i\omega)^2}{4a}} \sqrt{\frac{\pi}{a}} = e^{-\frac{\omega^2}{4a}} \sqrt{\frac{\pi}{a}}$.
    Thus, the Fourier Transform of $e^{-at^2}$ is $\sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}}$.

5.  **Solution:**
    The function is $f(t) = \frac{\sin(t)}{t}$.
    To check for the existence of the Fourier Transform, we need to see if $\int_{-\infty}^{\infty} |f(t)| dt < \infty$.
    The function $\frac{\sin(t)}{t}$ is known as the (unnormalized) sinc function.
    It is known that $\int_{-\infty}^{\infty} \left|\frac{\sin(t)}{t}\right| dt = \infty$ (the integral of the absolute value does not converge, it is conditionally convergent).
    Therefore, strictly speaking, the Fourier Transform of $\frac{\sin(t)}{t}$ in the sense of absolutely integrable functions does not exist.

    **However**, it is possible to define the Fourier Transform in a broader sense (e.g., using distributions or generalized functions). In this context, the Fourier Transform of $\frac{\sin(t)}{t}$ exists and is related to a rectangular pulse.
    For the purpose of this course, if the condition of absolute integrability is not met, you should state that the transform does not exist in the standard sense.

---

### Important Points to Remember:

*   **Domain Switching:** The Fourier Transform converts a function from the time/spatial domain to the frequency domain.
*   **Time-Frequency Duality:** A signal localized in time has a spread-out frequency spectrum, and a signal localized in frequency has a spread-out time representation.
*   **Properties are Key:** Memorize and understand the properties (linearity, shifting, scaling, differentiation, convolution) as they are essential for efficient problem-solving.
*   **Common Transforms:** Familiarize yourself with the Fourier Transforms of basic functions like the impulse, step, exponential, and sinusoids.
*   **Existence Conditions:** Be aware of the conditions under which the Fourier Transform exists (e.g., absolute integrability).
*   **Transfer Function:** The Fourier Transform is fundamental to defining and analyzing the transfer functions of systems, particularly Linear Time-Invariant (LTI) systems.

---
