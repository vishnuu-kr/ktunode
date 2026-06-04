---
title: "From Fourier series to Fourier Integral"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810684"
status: "completed"
scrapedAt: "2026-05-20T18:41:10.661Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: From Fourier Series to Fourier Integral

---

### 1. Introduction: The Need for Fourier Integrals

Fourier series are incredibly powerful tools for representing **periodic** functions as an infinite sum of sines and cosines. However, in electrical science and physical science, we often encounter **non-periodic** functions. These functions might be transient signals, impulses, or functions defined over a finite interval. Directly applying Fourier series to non-periodic functions is not possible.

The Fourier Integral is the generalization of the Fourier series that allows us to represent **non-periodic** functions as a continuous spectrum of frequencies. It essentially extends the concept of discrete frequency components in Fourier series to a continuous range of frequencies.

---

### 2. Revisiting Fourier Series: A Foundation

Before diving into Fourier Integrals, let's briefly recap the key aspects of Fourier Series for a periodic function $f(x)$ with period $T$:

*   **Representation:**
    $f(x) = a_0 + \sum_{n=1}^{\infty} (a_n \cos(n\omega_0 t) + b_n \sin(n\omega_0 t))$
    where $\omega_0 = \frac{2\pi}{T}$ is the fundamental angular frequency.

*   **Coefficients:**
    $a_0 = \frac{1}{T} \int_{-T/2}^{T/2} f(x) dx$
    $a_n = \frac{2}{T} \int_{-T/2}^{T/2} f(x) \cos(n\omega_0 t) dx$
    $b_n = \frac{2}{T} \int_{-T/2}^{T/2} f(x) \sin(n\omega_0 t) dx$

*   **Key Idea:** The Fourier series decomposes a periodic function into a sum of **discrete** frequency components (harmonics) at frequencies $n\omega_0$.

---

### 3. Transitioning from Periodic to Non-Periodic

Consider a periodic function $f(x)$ with period $T$. Let's imagine we are stretching this period $T$ to infinity. As $T \to \infty$, the fundamental frequency $\omega_0 = \frac{2\pi}{T} \to 0$.

The discrete frequencies $n\omega_0$ become closer and closer together. In the limit as $T \to \infty$, these discrete frequencies merge to form a **continuous** spectrum of frequencies. This transition is the core idea behind the Fourier Integral.

Let's see how the Fourier series coefficients change as $T \to \infty$:

*   The interval of integration $[-T/2, T/2]$ becomes $(-\infty, \infty)$.
*   The fundamental frequency $\omega_0$ approaches zero.
*   The terms $n\omega_0$ can be thought of as a continuous variable, which we'll call $\omega$.

Consider the complex form of the Fourier series:
$f(x) = \sum_{n=-\infty}^{\infty} c_n e^{in\omega_0 x}$
where $c_n = \frac{1}{T} \int_{-T/2}^{T/2} f(x) e^{-in\omega_0 x} dx$.

As $T \to \infty$:
*   $\Delta\omega = \omega_0 = \frac{2\pi}{T}$ becomes the infinitesimal frequency step.
*   $nc_n = \frac{1}{T} \int_{-T/2}^{T/2} f(x) e^{-in\omega_0 x} dx \times \omega_0$
*   Let $\omega = n\omega_0$. As $n$ ranges from $-\infty$ to $\infty$ and $\omega_0 \to 0$, $\omega$ covers all real numbers.
*   The sum $\sum_{n=-\infty}^{\infty} nc_n e^{in\omega_0 x}$ can be thought of as an integral over $\omega$.

This transition leads to the development of the Fourier Integral.

---

### 4. The Fourier Integral (or Fourier Transform Pair)

For a non-periodic function $f(x)$, its Fourier Integral representation is given by the following pair of equations:

**Fourier Integral (Integral of the Exponential Form):**

$f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega x} d\omega$

where $F(\omega)$ is the **Fourier Transform of $f(x)$**, defined as:

**Fourier Transform:**

$F(\omega) = \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$

*   **Key Concept:** The Fourier Transform $F(\omega)$ represents the **amplitude and phase** of each frequency component $\omega$ present in the function $f(x)$. It essentially tells us how much of each frequency is in the signal.

*   **Interpretation:**
    *   $F(\omega)$ is a complex-valued function of the angular frequency $\omega$.
    *   $|F(\omega)|$ represents the magnitude of the frequency component.
    *   $\arg(F(\omega))$ represents the phase of the frequency component.
    *   The inverse transform allows us to reconstruct the original function $f(x)$ from its frequency components.

---

### 5. Alternative Forms of the Fourier Integral

The Fourier Integral can also be expressed using sines and cosines directly, which is analogous to the trigonometric form of the Fourier series.

Let $F(\omega) = A(\omega) + iB(\omega)$.
Then $f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} (A(\omega) + iB(\omega)) (\cos(\omega x) + i\sin(\omega x)) d\omega$

Expanding this and separating real and imaginary parts (and using the fact that $A(\omega)$ and $B(\omega)$ are related to the even and odd parts of $f(x)$), we get:

**Fourier Integral (Trigonometric Form):**

$f(x) = \frac{1}{\pi} \int_{0}^{\infty} [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega$

where $A(\omega)$ and $B(\omega)$ are defined as:

**Fourier Cosine Transform:**

$A(\omega) = \int_{-\infty}^{\infty} f(x) \cos(\omega x) dx$

**Fourier Sine Transform:**

$B(\omega) = \int_{-\infty}^{\infty} f(x) \sin(\omega x) dx$

**Important Note:** The relationship between $F(\omega)$ and $A(\omega)$, $B(\omega)$ is:
$F(\omega) = \int_{-\infty}^{\infty} f(x) (\cos(\omega x) - i\sin(\omega x)) dx$
$F(\omega) = \int_{-\infty}^{\infty} f(x) \cos(\omega x) dx - i \int_{-\infty}^{\infty} f(x) \sin(\omega x) dx$
So, $A(\omega) = \text{Re}(F(\omega))$ and $B(\omega) = -\text{Im}(F(\omega))$.

**However, the more standard definition using $A(\omega)$ and $B(\omega)$ in the trigonometric form of the Fourier Integral is derived as follows:**

If $f(x)$ is an **even** function, then $f(x) = \frac{1}{\pi} \int_0^\infty A(\omega) \cos(\omega x) d\omega$, where $A(\omega) = 2 \int_0^\infty f(x) \cos(\omega x) dx$.
If $f(x)$ is an **odd** function, then $f(x) = \frac{1}{\pi} \int_0^\infty B(\omega) \sin(\omega x) d\omega$, where $B(\omega) = 2 \int_0^\infty f(x) \sin(\omega x) dx$.

For a general function $f(x)$:
$f(x) = \frac{1}{\pi} \int_0^\infty \left(\int_{-\infty}^{\infty} f(u) \cos(\omega(x-u)) du \right) d\omega$

This can be split into:
$f(x) = \frac{1}{\pi} \int_0^\infty \left(\int_{-\infty}^{\infty} f(u) (\cos(\omega x) \cos(\omega u) + \sin(\omega x) \sin(\omega u)) du \right) d\omega$
$f(x) = \frac{1}{\pi} \int_0^\infty \left(\cos(\omega x) \int_{-\infty}^{\infty} f(u) \cos(\omega u) du + \sin(\omega x) \int_{-\infty}^{\infty} f(u) \sin(\omega u) du \right) d\omega$

Thus, we define:
$A(\omega) = \int_{-\infty}^{\infty} f(x) \cos(\omega x) dx$
$B(\omega) = \int_{-\infty}^{\infty} f(x) \sin(\omega x) dx$

And the representation becomes:
$f(x) = \frac{1}{\pi} \int_{0}^{\infty} [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega$

---

### 6. Conditions for Existence of Fourier Integral

The Fourier Integral of a function $f(x)$ exists if $f(x)$ satisfies Dirichlet conditions on $(-\infty, \infty)$:

1.  $f(x)$ is absolutely integrable, i.e., $\int_{-\infty}^{\infty} |f(x)| dx < \infty$.
2.  $f(x)$ has a finite number of discontinuities in every finite interval.
3.  $f(x)$ has a finite number of maxima and minima in every finite interval.

**Note:** If $f(x)$ is not absolutely integrable but has compact support (i.e., $f(x) = 0$ outside a finite interval), the Fourier Integral can still exist.

---

### 7. Examples

#### Example 1: Fourier Transform of a Rectangular Pulse

Consider the rectangular pulse function:
$f(x) = \begin{cases} 1 & \text{if } |x| \le a \\ 0 & \text{if } |x| > a \end{cases}$

We want to find its Fourier Transform $F(\omega)$.

$F(\omega) = \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$
$F(\omega) = \int_{-a}^{a} 1 \cdot e^{-i\omega x} dx$

Let's evaluate the integral:
If $\omega \ne 0$:
$\int_{-a}^{a} e^{-i\omega x} dx = \left[ \frac{e^{-i\omega x}}{-i\omega} \right]_{-a}^{a}$
$= \frac{e^{-i\omega a} - e^{i\omega a}}{-i\omega}$
$= \frac{-(e^{i\omega a} - e^{-i\omega a})}{i\omega}$
$= \frac{-2i \sin(\omega a)}{i\omega}$
$= \frac{2 \sin(\omega a)}{\omega}$

If $\omega = 0$:
$F(0) = \int_{-a}^{a} 1 \cdot e^{-i(0)x} dx = \int_{-a}^{a} 1 dx = [x]_{-a}^{a} = a - (-a) = 2a$.

We can use the sinc function, defined as $\text{sinc}(u) = \frac{\sin(u)}{u}$.
Then $\frac{2 \sin(\omega a)}{\omega} = 2a \frac{\sin(\omega a)}{\omega a} = 2a \cdot \text{sinc}(a\omega)$.

So, the Fourier Transform is:
$F(\omega) = \begin{cases} \frac{2 \sin(\omega a)}{\omega} & \text{if } \omega \ne 0 \\ 2a & \text{if } \omega = 0 \end{cases}$

Or, more compactly using the sinc function:
$F(\omega) = 2a \cdot \text{sinc}(a\omega)$

Now, let's find the inverse Fourier Transform to see if we get the original function back:
$f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega x} d\omega$
$f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \frac{2 \sin(\omega a)}{\omega} e^{i\omega x} d\omega$
$f(x) = \frac{1}{\pi} \int_{-\infty}^{\infty} \frac{\sin(\omega a)}{\omega} e^{i\omega x} d\omega$

This integral is known to evaluate to the rectangular pulse function.

#### Example 2: Fourier Transform of an Exponential Decay

Consider the function:
$f(x) = e^{-ax} u(x)$, where $a > 0$ and $u(x)$ is the unit step function ($u(x) = 1$ for $x \ge 0$, $0$ for $x < 0$).

This is a causal exponential decay.

$F(\omega) = \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$
$F(\omega) = \int_{0}^{\infty} e^{-ax} e^{-i\omega x} dx$
$F(\omega) = \int_{0}^{\infty} e^{-(a+i\omega)x} dx$

This integral converges because $\text{Re}(a+i\omega) = a > 0$.
$F(\omega) = \left[ \frac{e^{-(a+i\omega)x}}{-(a+i\omega)} \right]_{0}^{\infty}$
As $x \to \infty$, $e^{-(a+i\omega)x} = e^{-ax} e^{-i\omega x}$. Since $a > 0$, $e^{-ax} \to 0$.
So, the upper limit is 0.
The lower limit is $- \frac{e^{-(a+i\omega)0}}{-(a+i\omega)} = - \frac{1}{-(a+i\omega)} = \frac{1}{a+i\omega}$.

Thus, $F(\omega) = \frac{1}{a+i\omega}$.

Let's check the condition for existence:
$\int_{-\infty}^{\infty} |f(x)| dx = \int_{0}^{\infty} |e^{-ax}| dx = \int_{0}^{\infty} e^{-ax} dx = \left[ \frac{e^{-ax}}{-a} \right]_0^\infty = 0 - \frac{1}{-a} = \frac{1}{a}$.
Since $a > 0$, this is finite, so the condition is met.

#### Example 3: Using the Trigonometric Form

Let $f(x) = e^{-ax}$ for $x \ge 0$ and $f(x) = 0$ for $x < 0$, with $a > 0$.
We'll use the trigonometric form:
$f(x) = \frac{1}{\pi} \int_{0}^{\infty} [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega$

First, calculate $A(\omega)$ and $B(\omega)$:
$A(\omega) = \int_{-\infty}^{\infty} f(x) \cos(\omega x) dx = \int_{0}^{\infty} e^{-ax} \cos(\omega x) dx$
$B(\omega) = \int_{-\infty}^{\infty} f(x) \sin(\omega x) dx = \int_{0}^{\infty} e^{-ax} \sin(\omega x) dx$

These are standard integrals. Using integration by parts twice or known formulas:
$\int e^{kx} \cos(mx) dx = \frac{e^{kx}}{k^2+m^2}(k\cos(mx) + m\sin(mx))$
$\int e^{kx} \sin(mx) dx = \frac{e^{kx}}{k^2+m^2}(k\sin(mx) - m\cos(mx))$

For $A(\omega)$: $k = -a$, $m = \omega$.
$A(\omega) = \left[ \frac{e^{-ax}}{(-a)^2+\omega^2}(-a\cos(\omega x) + \omega\sin(\omega x)) \right]_0^\infty$
$A(\omega) = 0 - \frac{1}{a^2+\omega^2}(-a\cos(0) + \omega\sin(0))$
$A(\omega) = - \frac{1}{a^2+\omega^2}(-a) = \frac{a}{a^2+\omega^2}$

For $B(\omega)$: $k = -a$, $m = \omega$.
$B(\omega) = \left[ \frac{e^{-ax}}{(-a)^2+\omega^2}(-a\sin(\omega x) - \omega\cos(\omega x)) \right]_0^\infty$
$B(\omega) = 0 - \frac{1}{a^2+\omega^2}(-a\sin(0) - \omega\cos(0))$
$B(\omega) = - \frac{1}{a^2+\omega^2}(-\omega) = \frac{\omega}{a^2+\omega^2}$

Now substitute $A(\omega)$ and $B(\omega)$ into the trigonometric Fourier Integral:
$f(x) = \frac{1}{\pi} \int_{0}^{\infty} \left[ \frac{a}{a^2+\omega^2} \cos(\omega x) + \frac{\omega}{a^2+\omega^2} \sin(\omega x) \right] d\omega$

This integral represents $e^{-ax}$ for $x>0$ and $0$ for $x<0$.

**Relationship between Exponential and Trigonometric Forms:**
Recall $F(\omega) = \frac{1}{a+i\omega}$.
$F(\omega) = \frac{1}{a+i\omega} \cdot \frac{a-i\omega}{a-i\omega} = \frac{a-i\omega}{a^2+\omega^2} = \frac{a}{a^2+\omega^2} - i\frac{\omega}{a^2+\omega^2}$.
So, $\text{Re}(F(\omega)) = \frac{a}{a^2+\omega^2}$ and $\text{Im}(F(\omega)) = -\frac{\omega}{a^2+\omega^2}$.

The trigonometric form used $A(\omega) = \text{Re}(F(\omega))$ and $B(\omega) = -\text{Im}(F(\omega))$ which matches our calculated values.

---

### 8. Properties of the Fourier Transform

Many properties of the Fourier Transform are analogous to those of the Fourier Series, but applied to a continuous spectrum.

| Property                      | Time Domain ($f(x)$) | Frequency Domain ($F(\omega)$) | Name of Property |
| :---------------------------- | :------------------- | :----------------------------- | :--------------- |
| **Linearity**                 | $af(x) + bg(x)$      | $aF(\omega) + bG(\omega)$      | Linearity        |
| **Time Shifting**             | $f(x-x_0)$           | $e^{-i\omega x_0} F(\omega)$   | Time Shift       |
| **Frequency Shifting**        | $e^{i\omega_0 x} f(x)$ | $F(\omega - \omega_0)$         | Frequency Shift  |
| **Scaling**                   | $f(ax)$              | $\frac{1}{|a|} F\left(\frac{\omega}{a}\right)$     | Scaling          |
| **Differentiation in Time**   | $\frac{df}{dx}$      | $i\omega F(\omega)$            | Differentiation  |
| **Integration in Time**       | $\int_{-\infty}^x f(u) du$ | $\frac{F(\omega)}{i\omega} + \pi F(0) \delta(\omega)$ | Integration      |
| **Convolution**               | $(f * g)(x)$         | $F(\omega) G(\omega)$          | Convolution      |
| **Multiplication**            | $f(x)g(x)$           | $\frac{1}{2\pi}(F * G)(\omega)$  | Modulation       |
| **Parseval's Theorem**        | $\int_{-\infty}^{\infty} |f(x)|^2 dx = \frac{1}{2\pi} \int_{-\infty}^{\infty} |F(\omega)|^2 d\omega$ | Energy Conservation |

**Explanation of Key Properties:**

*   **Time Shifting:** Shifting a signal in the time domain results in multiplying its Fourier Transform by a complex exponential $e^{-i\omega x_0}$. This accounts for the phase change associated with the shift.

*   **Frequency Shifting:** Multiplying a signal by a complex exponential $e^{i\omega_0 x}$ in the time domain shifts its entire spectrum by $\omega_0$ in the frequency domain. This is the basis of modulation in communication systems.

*   **Differentiation in Time:** Taking the derivative of a signal in the time domain corresponds to multiplying its Fourier Transform by $i\omega$. This means that high-frequency components are amplified.

*   **Convolution:** Convolution in the time domain (which represents filtering or system response) becomes simple multiplication in the frequency domain. This is one of the most important properties for signal processing. $(f * g)(x) = \int_{-\infty}^{\infty} f(\tau) g(x-\tau) d\tau$.

*   **Parseval's Theorem:** This theorem relates the total energy of a signal in the time domain to its energy in the frequency domain. It states that the integral of the squared magnitude of the signal over all time is equal to the integral of the squared magnitude of its Fourier Transform over all frequencies, scaled by $\frac{1}{2\pi}$. This is crucial for analyzing signal power and energy.

---

### 9. Applications in Electrical and Physical Science

*   **Signal Analysis:** Analyzing the frequency content of signals (e.g., audio signals, electrical waveforms).
*   **System Analysis:** Understanding how linear time-invariant (LTI) systems affect signals. The frequency response of a system is its Fourier Transform.
*   **Filtering:** Designing filters to pass or reject certain frequency bands.
*   **Image Processing:** Applying 2D Fourier Transforms to analyze and manipulate images.
*   **Quantum Mechanics:** The momentum representation of a wavefunction is its Fourier Transform with respect to position.
*   **Optics:** Diffraction patterns are often described by Fourier Transforms.
*   **Control Systems:** Analyzing system stability and response in the frequency domain.

---

### 10. Practice Questions

**Question 1:**
Find the Fourier Transform of the function $f(x) = e^{-3|x|}$.

**Question 2:**
Let $f(x) = \begin{cases} \cos(\frac{\pi x}{2}) & \text{if } |x| \le 1 \\ 0 & \text{if } |x| > 1 \end{cases}$.
Find the Fourier Transform of $f(x)$.

**Question 3:**
State the conditions under which the Fourier Integral of a function $f(x)$ exists.

**Question 4:**
If $F(\omega)$ is the Fourier Transform of $f(x)$, what is the Fourier Transform of $f(x-2)$?

**Question 5:**
If $F(\omega)$ is the Fourier Transform of $f(x)$, what is the Fourier Transform of $e^{i5x} f(x)$?

---

### 11. Answers to Practice Questions

**Answer 1:**
$f(x) = e^{-3|x|}$ is an even function.
$F(\omega) = \int_{-\infty}^{\infty} e^{-3|x|} e^{-i\omega x} dx$
$F(\omega) = \int_{-\infty}^{0} e^{3x} e^{-i\omega x} dx + \int_{0}^{\infty} e^{-3x} e^{-i\omega x} dx$
$F(\omega) = \int_{-\infty}^{0} e^{(3-i\omega)x} dx + \int_{0}^{\infty} e^{-(3+i\omega)x} dx$

For the first integral:
$\left[ \frac{e^{(3-i\omega)x}}{3-i\omega} \right]_{-\infty}^{0} = \frac{e^0}{3-i\omega} - 0 = \frac{1}{3-i\omega}$

For the second integral:
$\left[ \frac{e^{-(3+i\omega)x}}{-(3+i\omega)} \right]_{0}^{\infty} = 0 - \frac{e^0}{-(3+i\omega)} = \frac{1}{3+i\omega}$

$F(\omega) = \frac{1}{3-i\omega} + \frac{1}{3+i\omega}$
$F(\omega) = \frac{(3+i\omega) + (3-i\omega)}{(3-i\omega)(3+i\omega)}$
$F(\omega) = \frac{6}{9 - (i\omega)^2} = \frac{6}{9 + \omega^2}$

**Answer 2:**
$F(\omega) = \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$
Since $f(x)$ is zero for $|x|>1$, the integral is from -1 to 1.
$F(\omega) = \int_{-1}^{1} \cos(\frac{\pi x}{2}) e^{-i\omega x} dx$
We can use the identity $\cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2}$.
$F(\omega) = \int_{-1}^{1} \frac{e^{i\frac{\pi x}{2}} + e^{-i\frac{\pi x}{2}}}{2} e^{-i\omega x} dx$
$F(\omega) = \frac{1}{2} \int_{-1}^{1} (e^{i(\frac{\pi}{2}-\omega)x} + e^{-i(\frac{\pi}{2}+\omega)x}) dx$
$F(\omega) = \frac{1}{2} \left[ \frac{e^{i(\frac{\pi}{2}-\omega)x}}{i(\frac{\pi}{2}-\omega)} + \frac{e^{-i(\frac{\pi}{2}+\omega)x}}{-i(\frac{\pi}{2}+\omega)} \right]_{-1}^{1}$
$F(\omega) = \frac{1}{2} \left[ \frac{e^{i(\frac{\pi}{2}-\omega)} - e^{-i(\frac{\pi}{2}-\omega)}}{i(\frac{\pi}{2}-\omega)} - \frac{e^{-i(\frac{\pi}{2}+\omega)} - e^{i(\frac{\pi}{2}+\omega)}}{-i(\frac{\pi}{2}+\omega)} \right]$
$F(\omega) = \frac{1}{2} \left[ \frac{2i \sin(\frac{\pi}{2}-\omega)}{i(\frac{\pi}{2}-\omega)} - \frac{-2i \sin(\frac{\pi}{2}+\omega)}{-i(\frac{\pi}{2}+\omega)} \right]$
$F(\omega) = \frac{1}{2} \left[ \frac{2 \sin(\frac{\pi}{2}-\omega)}{\frac{\pi}{2}-\omega} - \frac{2 \sin(\frac{\pi}{2}+\omega)}{\frac{\pi}{2}+\omega} \right]$
Using $\sin(\frac{\pi}{2}-\theta) = \cos(\theta)$ and $\sin(\frac{\pi}{2}+\theta) = \cos(\theta)$:
$F(\omega) = \frac{1}{2} \left[ \frac{2 \cos(\omega)}{\frac{\pi}{2}-\omega} - \frac{2 \cos(\omega)}{\frac{\pi}{2}+\omega} \right]$
$F(\omega) = \cos(\omega) \left[ \frac{1}{\frac{\pi}{2}-\omega} - \frac{1}{\frac{\pi}{2}+\omega} \right]$
$F(\omega) = \cos(\omega) \left[ \frac{\frac{\pi}{2}+\omega - (\frac{\pi}{2}-\omega)}{(\frac{\pi}{2}-\omega)(\frac{\pi}{2}+\omega)} \right]$
$F(\omega) = \cos(\omega) \left[ \frac{2\omega}{(\frac{\pi}{2})^2-\omega^2} \right]$
$F(\omega) = \frac{2\omega \cos(\omega)}{\frac{\pi^2}{4}-\omega^2}$

**Answer 3:**
The Fourier Integral of $f(x)$ exists if $f(x)$ satisfies the Dirichlet conditions:
1.  $f(x)$ is absolutely integrable: $\int_{-\infty}^{\infty} |f(x)| dx < \infty$.
2.  $f(x)$ has a finite number of discontinuities in every finite interval.
3.  $f(x)$ has a finite number of maxima and minima in every finite interval.

**Answer 4:**
The Fourier Transform of $f(x-x_0)$ is $e^{-i\omega x_0} F(\omega)$.
For $x_0 = 2$, the Fourier Transform of $f(x-2)$ is $e^{-i\omega 2} F(\omega)$.

**Answer 5:**
The Fourier Transform of $e^{i\omega_0 x} f(x)$ is $F(\omega - \omega_0)$.
For $\omega_0 = 5$, the Fourier Transform of $e^{i5x} f(x)$ is $F(\omega - 5)$.

---

### 12. Important Points to Remember

*   **Fourier Series:** For **periodic** functions, discrete frequency components.
*   **Fourier Integral:** For **non-periodic** functions, continuous frequency spectrum.
*   **Fourier Transform $F(\omega)$:** $F(\omega) = \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$. It describes the frequency content of $f(x)$.
*   **Inverse Fourier Transform:** $f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega x} d\omega$. Reconstructs $f(x)$ from its frequency components.
*   **Existence Condition:** Absolute integrability of $f(x)$ is crucial.
*   **Key Properties:** Linearity, time/frequency shifting, differentiation, convolution, Parseval's Theorem are fundamental for applications.
*   **Applications:** Essential for signal processing, system analysis, and many areas of physics.

---
