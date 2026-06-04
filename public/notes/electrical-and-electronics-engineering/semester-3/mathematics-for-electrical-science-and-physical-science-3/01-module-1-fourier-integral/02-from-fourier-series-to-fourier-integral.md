---
title: "From Fourier series to Fourier Integral"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a59"
status: "completed"
scrapedAt: "2026-05-23T16:14:23.290Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: From Fourier Series to Fourier Integral

---

### 1. Introduction: The Need for Fourier Integrals

Fourier Series are powerful tools for representing **periodic functions** as a sum of sines and cosines (or complex exponentials). However, many signals and phenomena encountered in electrical and physical sciences are **non-periodic**. To analyze these non-periodic functions, we need a generalization of Fourier Series, which leads us to the **Fourier Integral**.

**Analogy:** Think of Fourier Series as representing a complex periodic waveform by combining discrete frequencies (harmonics). The Fourier Integral can be seen as representing a non-periodic waveform by combining a continuous spectrum of frequencies.

---

### 2. Revisiting Fourier Series

Before delving into Fourier Integrals, let's briefly recall the key aspects of Fourier Series for a function $f(x)$ defined on an interval $[-L, L]$:

*   **Trigonometric Form:**
    $f(x) \approx a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right)$

*   **Fourier Coefficients:**
    $a_0 = \frac{1}{2L} \int_{-L}^{L} f(x) dx$
    $a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) dx$
    $b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$

*   **Complex Exponential Form:**
    $f(x) \approx \sum_{n=-\infty}^{\infty} c_n e^{i \frac{n\pi x}{L}}$

*   **Complex Fourier Coefficients:**
    $c_n = \frac{1}{2L} \int_{-L}^{L} f(x) e^{-i \frac{n\pi x}{L}} dx$

**Key takeaway:** Fourier Series represent a function as a sum of discrete frequency components.

---

### 3. The Transition to Fourier Integral

Consider a function $f(x)$ defined on the interval $[-L, L]$ and extended periodically outside this interval. If we let $L \to \infty$, the function effectively becomes non-periodic over the entire real line $(-\infty, \infty)$. Let's see how the Fourier Series transforms in this limit.

From the complex exponential form of the Fourier Series:
$f(x) \approx \sum_{n=-\infty}^{\infty} c_n e^{i \frac{n\pi x}{L}}$

Substitute the expression for $c_n$:
$f(x) \approx \sum_{n=-\infty}^{\infty} \left( \frac{1}{2L} \int_{-L}^{L} f(\tau) e^{-i \frac{n\pi \tau}{L}} d\tau \right) e^{i \frac{n\pi x}{L}}$

Rearrange the terms:
$f(x) \approx \sum_{n=-\infty}^{\infty} \frac{1}{2\pi} \left( \int_{-L}^{L} f(\tau) e^{-i \frac{n\pi \tau}{L}} d\tau \right) \left( \frac{\pi}{L} e^{i \frac{n\pi x}{L}} \right)$

Now, let $L \to \infty$. The interval $[-L, L]$ becomes $(-\infty, \infty)$.
Let $\omega_n = \frac{n\pi}{L}$. As $L \to \infty$, $\omega_n$ becomes a continuous variable, let's call it $\omega$.
The difference between consecutive frequencies, $\omega_{n+1} - \omega_n = \frac{(n+1)\pi}{L} - \frac{n\pi}{L} = \frac{\pi}{L}$, becomes infinitesimally small, $d\omega$.

The summation $\sum$ can be viewed as an integral as $L \to \infty$, with $\frac{\pi}{L}$ acting as the infinitesimal width $d\omega$.
The term $\frac{1}{2\pi} \int_{-L}^{L} f(\tau) e^{-i \frac{n\pi \tau}{L}} d\tau$ resembles an integral in the limit.

As $L \to \infty$, the expression transforms into an integral over $\omega$:

$f(x) = \int_{-\infty}^{\infty} \left( \frac{1}{2\pi} \int_{-\infty}^{\infty} f(\tau) e^{-i \omega \tau} d\tau \right) e^{i \omega x} d\omega$

This is the **Fourier Integral representation** of the function $f(x)$.

---

### 4. The Fourier Transform and its Inverse

The Fourier Integral can be written in a more compact form using the **Fourier Transform** and its **Inverse Fourier Transform**.

**Definition: Fourier Transform**
The Fourier Transform of a function $f(x)$, denoted by $\hat{f}(\omega)$ or $F(\omega)$, is defined as:
$\hat{f}(\omega) = \int_{-\infty}^{\infty} f(x) e^{-i \omega x} dx$

**Definition: Inverse Fourier Transform**
The Inverse Fourier Transform allows us to recover the original function $f(x)$ from its transform:
$f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{f}(\omega) e^{i \omega x} d\omega$

**Important Note:** The factor of $\frac{1}{2\pi}$ can be distributed differently (e.g., $\frac{1}{\sqrt{2\pi}}$ for both). The choice is a convention, but it's crucial to be consistent. The above convention is common in engineering.

**Kreyszig, 10th Edition, Section 11.6:** Discusses the Fourier Integral and Fourier transform as a generalization of Fourier Series.

**Ramana, 39th Edition, Chapter 38:** Covers Fourier Transforms and their properties, including the inverse transform.

**Grewal, 44th Edition, Chapter 28:** Also details Fourier Transforms and their applications.

---

### 5. Conditions for Existence of Fourier Integral

For the Fourier Integral to exist and represent the function $f(x)$, the integral $\int_{-\infty}^{\infty} |f(x)| dx$ must converge. This is often referred to as $f(x)$ being **absolutely integrable**.

**Sufficient Conditions (similar to Dirichlet conditions for Fourier Series):**
A function $f(x)$ satisfies the following conditions:
1.  $f(x)$ is piecewise continuous on every finite interval.
2.  $f(x)$ has a finite number of maxima and minima on every finite interval.
3.  $f(x)$ is absolutely integrable, i.e., $\int_{-\infty}^{\infty} |f(x)| dx < \infty$.

If these conditions are met, the Fourier Integral converges to $f(x)$ at points of continuity and to the average of the left- and right-hand limits at points of discontinuity.

---

### 6. Fourier Transform of Standard Functions (Examples)

Let's calculate the Fourier Transforms of some common functions.

**Example 1: Rectangular Pulse (Boxcar Function)**
Consider the function:
$f(x) = \begin{cases} 1 & \text{if } -a \le x \le a \\ 0 & \text{otherwise} \end{cases}$

We need to calculate $\hat{f}(\omega) = \int_{-\infty}^{\infty} f(x) e^{-i \omega x} dx$.
$\hat{f}(\omega) = \int_{-a}^{a} 1 \cdot e^{-i \omega x} dx$

If $\omega = 0$:
$\hat{f}(0) = \int_{-a}^{a} 1 dx = [x]_{-a}^{a} = a - (-a) = 2a$

If $\omega \neq 0$:
$\hat{f}(\omega) = \left[ \frac{e^{-i \omega x}}{-i \omega} \right]_{-a}^{a} = \frac{e^{-i \omega a} - e^{i \omega a}}{-i \omega}$
Using Euler's formula ($e^{i\theta} - e^{-i\theta} = 2i \sin\theta$):
$\hat{f}(\omega) = \frac{-(e^{i \omega a} - e^{-i \omega a})}{i \omega} = \frac{-2i \sin(\omega a)}{i \omega} = \frac{-2 \sin(\omega a)}{\omega}$

Combining the cases:
$\hat{f}(\omega) = \begin{cases} 2a & \text{if } \omega = 0 \\ \frac{-2 \sin(\omega a)}{\omega} & \text{if } \omega \neq 0 \end{cases}$

This can be written using the sinc function, $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$, or $\text{sinc}(x) = \frac{\sin x}{x}$. If we use $\text{sinc}(x) = \frac{\sin x}{x}$:
$\hat{f}(\omega) = 2a \frac{\sin(\omega a)}{\omega a} \cdot a = 2a \cdot \text{sinc}(\omega a)$
Or, more commonly using $\text{sinc}(u) = \frac{\sin u}{u}$:
$\hat{f}(\omega) = 2a \frac{\sin(\omega a)}{\omega}$
$\hat{f}(\omega) = 2a \frac{\sin(\omega a)}{(\omega a)} a = 2a^2 \frac{\sin(\omega a)}{\omega a}$ -- This is not quite right.

Let's stick to the form $\hat{f}(\omega) = \frac{-2 \sin(\omega a)}{\omega}$.
We can write $\sin(\omega a) = \omega a \cdot \text{sinc}(\omega a)$ if we define $\text{sinc}(x) = \frac{\sin x}{x}$.
So, $\hat{f}(\omega) = \frac{-2 \omega a \cdot \text{sinc}(\omega a)}{\omega} = -2a \cdot \text{sinc}(\omega a)$ for $\omega \neq 0$.
The limit as $\omega \to 0$ of $-2a \cdot \text{sinc}(\omega a)$ is $-2a \cdot 1 = -2a$.
There is a sign difference. Let's recheck the integration.

$\hat{f}(\omega) = \left[ \frac{e^{-i \omega x}}{-i \omega} \right]_{-a}^{a} = \frac{1}{-i \omega} (e^{-i \omega a} - e^{i \omega a}) = \frac{1}{-i \omega} (-2i \sin(\omega a)) = \frac{2 \sin(\omega a)}{\omega}$

So, for $\omega \neq 0$:
$\hat{f}(\omega) = \frac{2 \sin(\omega a)}{\omega}$
For $\omega = 0$, $\hat{f}(0) = 2a$.
As $\omega \to 0$, $\frac{2 \sin(\omega a)}{\omega} = \frac{2 \omega a \cdot \text{sinc}(\omega a)}{\omega} = 2a \cdot \text{sinc}(\omega a)$. The limit is $2a$.

Therefore, $\hat{f}(\omega) = \begin{cases} 2a & \text{if } \omega = 0 \\ \frac{2 \sin(\omega a)}{\omega} & \text{if } \omega \neq 0 \end{cases}$
This can be written as $\hat{f}(\omega) = 2a \cdot \text{sinc}(\omega a)$ if we use the definition $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$ and adjust the argument, or if we use $\text{sinc}(x) = \frac{\sin x}{x}$ and write $\hat{f}(\omega) = 2a \cdot \frac{\sin(\omega a)}{\omega a} \cdot a = 2a^2 \frac{\sin(\omega a)}{\omega a}$. No, that's incorrect.

The common way to write it is $\hat{f}(\omega) = 2a \frac{\sin(\omega a)}{\omega}$. This function is proportional to the **sinc function**.

**Example 2: Exponential Decay Function**
Consider the function:
$f(x) = e^{-ax} u(x)$, where $u(x)$ is the unit step function ($u(x)=1$ for $x \ge 0$, $u(x)=0$ for $x < 0$) and $a > 0$.

$\hat{f}(\omega) = \int_{-\infty}^{\infty} e^{-ax} u(x) e^{-i \omega x} dx$
$\hat{f}(\omega) = \int_{0}^{\infty} e^{-ax} e^{-i \omega x} dx$
$\hat{f}(\omega) = \int_{0}^{\infty} e^{-(a+i\omega)x} dx$

For this integral to converge, the real part of $(a+i\omega)$ must be positive, which means $a > 0$. This condition is satisfied.

$\hat{f}(\omega) = \left[ \frac{e^{-(a+i\omega)x}}{-(a+i\omega)} \right]_{0}^{\infty}$
As $x \to \infty$, $e^{-(a+i\omega)x} = e^{-ax} e^{-i\omega x}$. Since $a>0$, $e^{-ax} \to 0$.
At $x=0$, $e^{-(a+i\omega)0} = e^0 = 1$.

$\hat{f}(\omega) = 0 - \frac{1}{-(a+i\omega)} = \frac{1}{a+i\omega}$

**Example 3: Gaussian Function**
Consider the function $f(x) = e^{-ax^2}$ for $a > 0$.
The Fourier Transform of a Gaussian is another Gaussian.
$\hat{f}(\omega) = \int_{-\infty}^{\infty} e^{-ax^2} e^{-i \omega x} dx$
This integral can be solved using contour integration or by completing the square in the exponent. The result is:
$\hat{f}(\omega) = \sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}}$

**Reference:** Kreyszig (10th ed.) provides these examples and properties in Chapter 11.6 and subsequent sections. Ramana and Grewal also have extensive tables of Fourier Transforms.

---

### 7. Properties of Fourier Transforms

The Fourier Transform is a linear operator and possesses several useful properties that simplify calculations and analysis.

| Property            | Function $f(x)$     | Fourier Transform $\hat{f}(\omega)$ | Notes                                  |
| :------------------ | :------------------ | :---------------------------------- | :------------------------------------- |
| **Linearity**       | $af(x) + bg(x)$     | $a\hat{f}(\omega) + b\hat{g}(\omega)$ | $\hat{f}$ is linear.                   |
| **Time Shifting**   | $f(x-c)$            | $e^{-i\omega c} \hat{f}(\omega)$    | $\hat{f}(x-c)$ leads to $e^{i\omega c} \hat{f}(\omega)$ |
| **Frequency Shifting** | $e^{i\omega_0 x} f(x)$ | $\hat{f}(\omega - \omega_0)$        | Shift in the frequency domain.         |
| **Scaling (Time)**  | $f(ax)$ ($a>0$)     | $\frac{1}{a} \hat{f}(\frac{\omega}{a})$  | Compressing time expands frequency.    |
| **Duality**         | $\hat{f}(\omega)$   | $2\pi f(-\omega)$                   | If $f \leftrightarrow \hat{f}$, then $\hat{f} \leftrightarrow 2\pi f(-\omega)$. |
| **Differentiation (x)** | $f'(x)$             | $i\omega \hat{f}(\omega)$           | Similar to Laplace transform.          |
| **Differentiation ($\omega$)** | $x f(x)$            | $i \frac{d}{d\omega} \hat{f}(\omega)$ | Transforms differentiation in frequency domain into multiplication by $x$. |
| **Convolution**     | $(f * g)(x)$        | $\hat{f}(\omega) \hat{g}(\omega)$   | $(f * g)(x) = \int_{-\infty}^{\infty} f(\tau) g(x-\tau) d\tau$ |
| **Modulation**      | $\cos(\omega_0 x) f(x)$ | $\frac{1}{2} [\hat{f}(\omega - \omega_0) + \hat{f}(\omega + \omega_0)]$ | Relates product in time to sum in frequency. |

**Kreyszig, 10th Edition, Section 11.7:** Discusses these properties in detail.

**Learning Outcome CO1:** Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.
*   Understanding these properties is crucial for determining Fourier transforms of complex functions by breaking them down into simpler known transforms.
*   They are directly applicable to solving differential equations and analyzing systems in electrical and physical sciences.

**Example of Property Use:**
Find the Fourier transform of $f(x) = e^{-a(x-c)^2}$.
We know the transform of $g(x) = e^{-ax^2}$ is $\hat{g}(\omega) = \sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}}$.
Using the time-shifting property $f(x) = g(x-c)$, with $c$ being the shift amount:
$\hat{f}(\omega) = e^{-i\omega c} \hat{g}(\omega) = e^{-i\omega c} \sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}}$.

---

### 8. Fourier Cosine and Sine Transforms

For functions defined on $[0, \infty)$, we often use Fourier Cosine and Sine transforms, especially when dealing with boundary value problems.

*   **Fourier Cosine Transform:** For an even function $f(x)$.
    $f_c(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(x) \cos(\omega x) dx$
    $f(x) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f_c(\omega) \cos(\omega x) d\omega$

*   **Fourier Sine Transform:** For an odd function $f(x)$.
    $f_s(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(x) \sin(\omega x) dx$
    $f(x) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f_s(\omega) \sin(\omega x) d\omega$

If a function is neither even nor odd, we can use the full Fourier Transform. For functions defined on $[0, \infty)$, we can consider its even or odd extension.

**Kreyszig, 10th Edition, Section 11.8:** Covers Fourier Cosine and Sine transforms.

---

### 9. Relation to Laplace Transform

The Fourier transform is closely related to the Laplace transform. For a causal function $f(t)$ (i.e., $f(t)=0$ for $t<0$), its Laplace transform is:
$F(s) = \int_{0}^{\infty} f(t) e^{-st} dt$

If we set $s = i\omega$ (where $s$ is a complex variable, $s = \sigma + i\omega$), we get:
$F(i\omega) = \int_{0}^{\infty} f(t) e^{-i\omega t} dt$

If $f(t)$ is absolutely integrable over $[0, \infty)$ and $f(t)=0$ for $t<0$, then the Fourier transform is related to the Laplace transform by simply substituting $s = i\omega$, provided the Laplace transform exists.

For a function $f(x)$ defined over the entire real line, we can consider its causal part $f(x)u(x)$ and non-causal part $f(x)u(-x)$. The Fourier transform combines information from both.

**Ramana, 39th Edition, Chapter 38:** Discusses the relationship between Fourier and Laplace transforms.

---

### 10. Practice Questions

**Question 1:** Find the Fourier Transform of the function $f(x) = \begin{cases} 1 & \text{if } 0 \le x \le a \\ 0 & \text{otherwise} \end{cases}$.
**Answer:**
$\hat{f}(\omega) = \int_{0}^{a} 1 \cdot e^{-i \omega x} dx$
If $\omega = 0$: $\hat{f}(0) = \int_{0}^{a} 1 dx = [x]_0^a = a$.
If $\omega \neq 0$: $\hat{f}(\omega) = \left[ \frac{e^{-i \omega x}}{-i \omega} \right]_{0}^{a} = \frac{e^{-i \omega a} - e^{0}}{-i \omega} = \frac{e^{-i \omega a} - 1}{-i \omega} = \frac{1 - e^{-i \omega a}}{i \omega}$.
Using $1 - e^{-i\theta} = e^{-i\theta/2}(e^{i\theta/2} - e^{-i\theta/2}) = e^{-i\theta/2}(2i \sin(\theta/2))$:
$\hat{f}(\omega) = \frac{e^{-i \omega a/2} (2i \sin(\omega a/2))}{i \omega} = \frac{2 e^{-i \omega a/2} \sin(\omega a/2)}{\omega}$.

**Question 2:** Using the time-shifting property, find the Fourier Transform of $f(x) = e^{-a|x-c|}$ ($a>0$).
**Answer:**
We know that the Fourier Transform of $g(x) = e^{-a|x|}$ is $\hat{g}(\omega) = \frac{2a}{a^2 + \omega^2}$.
Let $h(x) = e^{-a|x-c|}$. This is $g(x-c)$.
Using the time-shifting property, $\hat{h}(\omega) = e^{-i\omega c} \hat{g}(\omega)$.
So, $\hat{h}(\omega) = e^{-i\omega c} \frac{2a}{a^2 + \omega^2}$.

**Question 3:** Find the Fourier Transform of $f(x) = x e^{-ax} u(x)$ ($a>0$).
**Answer:**
We know that the Fourier Transform of $g(x) = e^{-ax} u(x)$ is $\hat{g}(\omega) = \frac{1}{a+i\omega}$.
Using the property $x f(x) \leftrightarrow i \frac{d}{d\omega} \hat{f}(\omega)$:
Here, $f(x) = x e^{-ax} u(x)$. Let $h(x) = e^{-ax} u(x)$, so $\hat{h}(\omega) = \frac{1}{a+i\omega}$.
The transform of $x h(x)$ is $i \frac{d}{d\omega} \left( \frac{1}{a+i\omega} \right)$.
$\frac{d}{d\omega} \left( \frac{1}{a+i\omega} \right) = \frac{d}{d\omega} (a+i\omega)^{-1} = -1 (a+i\omega)^{-2} \cdot (i) = \frac{-i}{(a+i\omega)^2}$.
So, $i \frac{d}{d\omega} \hat{h}(\omega) = i \left( \frac{-i}{(a+i\omega)^2} \right) = \frac{-i^2}{(a+i\omega)^2} = \frac{1}{(a+i\omega)^2}$.

**Question 4 (Conceptual):** How does the Fourier Transform of a function change if the function is made narrower in the time domain?
**Answer:** If a function is made narrower in the time domain (e.g., by multiplying by a constant $a>1$ inside the function argument, $f(ax)$), its Fourier Transform becomes wider in the frequency domain (e.g., $\frac{1}{a}\hat{f}(\frac{\omega}{a})$). This is the time-scaling property. Conversely, if the function is widened in time, its spectrum becomes narrower.

---

### 11. Important Points to Remember

*   **Fourier Series vs. Fourier Integral:** Fourier Series for periodic functions (discrete frequencies), Fourier Integral for non-periodic functions (continuous frequency spectrum).
*   **Core Definitions:**
    *   Fourier Transform: $\hat{f}(\omega) = \int_{-\infty}^{\infty} f(x) e^{-i \omega x} dx$
    *   Inverse Fourier Transform: $f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{f}(\omega) e^{i \omega x} d\omega$
*   **Convergence:** Absolute integrability ($\int_{-\infty}^{\infty} |f(x)| dx < \infty$) is a key condition.
*   **Properties are Powerful:** Linearity, shifting, scaling, differentiation, and convolution properties are essential for manipulating and calculating Fourier Transforms.
*   **Sinc Function:** The Fourier Transform of a rectangular pulse involves the sinc function.
*   **Relationship to Laplace:** Fourier Transform is a special case of the Laplace Transform when $s=i\omega$ for causal functions, provided certain conditions are met.

---

### 12. Alignment with Course Outcomes (COs)

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**
    *   This entire topic directly addresses this CO. We have learned how to define and calculate Fourier Transforms, explored their properties, and seen examples of their application in transforming standard functions. The understanding of properties allows us to tackle more complex functions and use them as building blocks in engineering problems (e.g., solving ODEs, signal processing).
*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.**
    *   While this topic focuses on Fourier Integrals, the use of complex exponentials $e^{-i\omega x}$ implicitly involves complex analysis concepts. The connection between Fourier transforms and Laplace transforms (where $s = \sigma + i\omega$) is also a bridge to complex function theory, though a deeper dive into analyticity and conformal mapping is in other modules.
*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.**
    *   The derivation of Fourier Transforms often involves integrals. While this module primarily focuses on direct integration and properties, the broader context of the course involves using complex analysis tools to evaluate integrals, which can sometimes be relevant when evaluating specific Fourier Transform integrals that are hard to solve directly.
*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.**
    *   Similar to CO3, this topic provides the foundation for applying Fourier transforms to solve engineering problems. Some Fourier Transform integrals might be challenging to evaluate directly and could potentially be solved using residue techniques in more advanced applications, thus connecting to this CO.

This topic lays the groundwork for applying Fourier analysis to a wider range of problems than Fourier Series alone, which is fundamental to CO1. The use of complex exponentials connects it to the broader theme of complex variables in the course.
