---
title: "Fourier Integral"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a58"
status: "completed"
scrapedAt: "2026-05-23T16:14:22.557Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

**Module 1: Fourier Integral**

**Topic: Fourier Integral**

---

### **1. Introduction to Fourier Integral**

The Fourier Series represents periodic functions as a sum of sines and cosines. However, many practical problems in electrical science and physical science involve **non-periodic functions**. The Fourier Integral extends the concept of Fourier Series to represent these non-periodic functions as an integral of sines and cosines. This powerful tool allows us to analyze signals and systems that don't repeat indefinitely.

**Learning Outcome Alignment:** This topic directly supports **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**

**Key Concept:** The Fourier Integral is a generalization of the Fourier Series for non-periodic functions.

**Reference:** Kreyszig's "Advanced Engineering Mathematics" (10th ed.) provides a thorough introduction to the Fourier Integral in Chapter 11, emphasizing its derivation from the Fourier Series by extending the period to infinity.

---

### **2. Derivation of the Fourier Integral**

Consider a function $f(x)$ defined on $(-\infty, \infty)$. We can think of $f(x)$ as a periodic function with a very large period $2L$. The Fourier Series representation for such a function is:

$f(x) = a_0 + \sum_{n=1}^{\infty} (a_n \cos(\frac{n\pi x}{L}) + b_n \sin(\frac{n\pi x}{L}))$

where:
$a_0 = \frac{1}{2L} \int_{-L}^{L} f(x) dx$
$a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos(\frac{n\pi x}{L}) dx$
$b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin(\frac{n\pi x}{L}) dx$

Now, let $\Delta\omega = \frac{\pi}{L}$. As $L \to \infty$, $\Delta\omega \to 0$. This means the terms in the summation become infinitesimally close. We can rewrite the Fourier Series using complex exponentials:

$f(x) = \sum_{n=-\infty}^{\infty} c_n e^{i \frac{n\pi x}{L}}$

where $c_n = \frac{1}{2L} \int_{-L}^{L} f(t) e^{-i \frac{n\pi t}{L}} dt$.

Let $\omega_n = \frac{n\pi}{L}$. Then $\Delta\omega = \omega_{n+1} - \omega_n = \frac{\pi}{L}$.
The expression for $c_n$ can be written as:

$c_n = \frac{1}{2L} \int_{-L}^{L} f(t) e^{-i \omega_n t} dt = \frac{1}{2\pi} \Delta\omega \int_{-L}^{L} f(t) e^{-i \omega_n t} dt$

Substituting this back into the Fourier Series:

$f(x) = \sum_{n=-\infty}^{\infty} \left( \frac{1}{2\pi} \Delta\omega \int_{-L}^{L} f(t) e^{-i \omega_n t} dt \right) e^{i \omega_n x}$

As $L \to \infty$, $\Delta\omega \to 0$, and the summation approaches an integral. Let $\omega = \frac{n\pi}{L}$. The sum becomes an integral with respect to $\omega$:

$f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} f(t) e^{-i \omega t} dt \right) e^{i \omega x} d\omega$

This is the **Fourier Integral representation** of $f(x)$.

**Important Point to Remember:** The Fourier Integral is obtained by considering a function as a periodic function with an infinitely large period.

---

### **3. The Fourier Transform and its Inverse**

The Fourier Integral can be formally defined using the concepts of the Fourier Transform and its Inverse.

**Definition: Fourier Transform**
The Fourier Transform of a function $f(x)$ is denoted by $\mathcal{F}\{f(x)\}$ or $F(\omega)$ and is defined as:

$F(\omega) = \mathcal{F}\{f(x)\} = \int_{-\infty}^{\infty} f(x) e^{-i \omega x} dx$

**Definition: Inverse Fourier Transform**
The Inverse Fourier Transform of $F(\omega)$ is denoted by $\mathcal{F}^{-1}\{F(\omega)\}$ and is defined as:

$f(x) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i \omega x} d\omega$

Combining these, we get the Fourier Integral theorem:

$f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \mathcal{F}\{f(t)\} e^{i \omega x} d\omega$

**Note on Conventions:** Some texts define the Fourier Transform with a $\frac{1}{\sqrt{2\pi}}$ factor on both the forward and inverse transforms, or with the $\frac{1}{2\pi}$ factor solely on the forward transform. The convention used here is common in electrical engineering and physics.

**Reference:** Kreyszig (10th ed.), Chapter 11, provides these definitions and the associated theorem. B.V. Ramana's "Higher Engineering Mathematics" (39th ed.) also covers these definitions comprehensively.

**Learning Outcome Alignment:** This section directly addresses **CO1**.

---

### **4. Conditions for Existence of Fourier Integral**

For the Fourier Integral of $f(x)$ to exist, the function $f(x)$ must satisfy certain conditions. These conditions are similar to those for the existence of Fourier Series, but extended to the entire real line.

**Dirichlet Conditions for Fourier Integral:**
A function $f(x)$ is said to satisfy the Dirichlet conditions on $(-\infty, \infty)$ if:

1.  **Finite number of discontinuities:** $f(x)$ has a finite number of discontinuities in every finite interval.
2.  **Finite number of maxima/minima:** $f(x)$ has a finite number of maxima and minima in every finite interval.
3.  **Absolute integrability:** $\int_{-\infty}^{\infty} |f(x)| dx < \infty$. This is the most crucial condition for the Fourier Transform to exist.

**Value of the Fourier Integral at Discontinuities:**
If $f(x)$ has a jump discontinuity at $x=x_0$, the Fourier Integral converges to the average of the left-hand and right-hand limits:

$\frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i \omega x_0} d\omega = \frac{1}{2} [f(x_0^-) + f(x_0^+)]$

If $f(x)$ is continuous at $x=x_0$, the integral converges to $f(x_0)$.

**Reference:** Kreyszig (10th ed.), Section 11.2, discusses these conditions and their implications.

---

### **5. Properties of Fourier Transforms**

Fourier Transforms possess several useful properties that simplify their application.

| Property              | Original Function $f(x)$ | Fourier Transform $F(\omega)$ | Description                                  |
| :-------------------- | :----------------------- | :---------------------------- | :------------------------------------------- |
| **Linearity**         | $af(x) + bg(x)$          | $aF(\omega) + bG(\omega)$     | The transform of a linear combination is the linear combination of the transforms. |
| **Shifting in $x$**   | $f(x-a)$                 | $e^{-ia\omega} F(\omega)$     | Shifting the function in the time/space domain corresponds to multiplication by a complex exponential in the frequency domain. |
| **Shifting in $\omega$** | $e^{ia\omega} f(x)$      | $F(\omega - a)$               | Shifting the function in the frequency domain corresponds to multiplication by a complex exponential in the time/space domain. |
| **Scaling (Duality)** | $f(ax)$                  | $\frac{1}{|a|} F(\frac{\omega}{a})$ | Scaling the function in the time/space domain affects the frequency domain inversely. For $a>0$, it's $\frac{1}{a} F(\frac{\omega}{a})$. |
| **Differentiation in $x$** | $f'(x)$                  | $i\omega F(\omega)$           | Differentiation in the time/space domain corresponds to multiplication by $i\omega$ in the frequency domain. |
|                       | $f''(x)$                 | $(i\omega)^2 F(\omega) = -\omega^2 F(\omega)$ | For the second derivative.               |
| **Integration in $x$** | $\int_{-\infty}^{x} f(t) dt$ | $\frac{1}{i\omega} F(\omega)$  | Integration in the time/space domain corresponds to division by $i\omega$ in the frequency domain (with caveats). |
| **Multiplication by $x$** | $x f(x)$                 | $i \frac{d}{d\omega} F(\omega)$ | Multiplication by $x$ in the time/space domain corresponds to differentiation with respect to $\omega$ in the frequency domain (multiplied by $i$). |
| **Convolution**       | $(f * g)(x) = \int_{-\infty}^{\infty} f(\tau) g(x-\tau) d\tau$ | $F(\omega) G(\omega)$         | The convolution of two functions in the time/space domain is the product of their Fourier Transforms in the frequency domain. |
| **Modulation**        | $f(x) \cos(ax)$          | $\frac{1}{2} [F(\omega - a) + F(\omega + a)]$ | Multiplication by a cosine in the time/space domain splits the frequency component. |

**Reference:** Kreyszig (10th ed.), Chapter 11, Section 11.3, details these properties. Ramana and Grewal also cover these extensively.

**Learning Outcome Alignment:** Understanding these properties is crucial for **CO1**.

---

### **6. Standard Fourier Transforms**

Knowing the Fourier Transforms of common functions can significantly speed up problem-solving.

| Function $f(x)$                       | Fourier Transform $F(\omega) = \int_{-\infty}^{\infty} f(x) e^{-i \omega x} dx$ | Inverse Transform $f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i \omega x} d\omega$ | Notes                                                              |
| :------------------------------------ | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| $1$ (for $-a < x < a$), $0$ otherwise (Rectangular Pulse) | $2 \frac{\sin(a\omega)}{\omega}$                                                | $\pi$ (for $|x|<a$), $0$ (for $|x|>a$)                                                                  | This is related to the sinc function. Sometimes defined as $\frac{\sin(a\omega)}{\omega}$ with a factor of 2 absorbed in the inverse. |
| $e^{-ax^2}$ ($a>0$) (Gaussian Pulse)   | $\sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}}$                                   | $\frac{1}{\sqrt{4\pi b}} e^{-\frac{x^2}{4b}}$ (where $b = 1/(4a)$)                                         | The Fourier Transform of a Gaussian is another Gaussian.           |
| $e^{-a|x|}$ ($a>0$)                   | $\frac{2a}{\omega^2 + a^2}$                                                       | $\frac{1}{2\pi} \int_{-\infty}^{\infty} \frac{2a}{\omega^2 + a^2} e^{i \omega x} d\omega = e^{-a|x|}$      | The transform of an exponential decay.                             |
| $e^{ax}$ (for $x>0$), $0$ (for $x<0$)   | $\frac{1}{a - i\omega}$ (for $a>0$)                                               | $\frac{1}{2\pi} \int_{-\infty}^{\infty} \frac{1}{a - i\omega} e^{i \omega x} d\omega$                      | This transform exists only if the real part of $a$ is positive.  |
| $1$ (constant)                        | $2\pi \delta(\omega)$                                                             | $1$                                                                                                      | The transform of a constant involves the Dirac delta function.    |
| $\delta(x)$ (Dirac Delta)             | $1$                                                                               | $\delta(x)$                                                                                              | The transform of the Dirac delta function is a constant.          |
| $\cos(ax)$                            | $\pi [\delta(\omega - a) + \delta(\omega + a)]$                                 | $\cos(ax)$                                                                                               | Uses the property of transforms of constants.                     |
| $\sin(ax)$                            | $\frac{\pi}{i} [\delta(\omega - a) - \delta(\omega + a)]$                       | $\sin(ax)$                                                                                               | Uses the property of transforms of constants.                     |

**Reference:** Kreyszig (10th ed.), Chapter 11, Appendix, and Section 11.4 provide tables of Fourier Transforms. Ramana and Grewal also have such tables.

**Learning Outcome Alignment:** Crucial for **CO1**.

---

### **7. Examples of Fourier Integral Calculations**

Let's illustrate with some examples.

**Example 1: Fourier Transform of a Rectangular Pulse**
Find the Fourier Transform of $f(x) = \begin{cases} 1 & \text{if } |x| < a \\ 0 & \text{if } |x| > a \end{cases}$.

$F(\omega) = \int_{-\infty}^{\infty} f(x) e^{-i \omega x} dx$
$F(\omega) = \int_{-a}^{a} 1 \cdot e^{-i \omega x} dx$
$F(\omega) = \left[ \frac{e^{-i \omega x}}{-i \omega} \right]_{-a}^{a}$
$F(\omega) = \frac{e^{-i \omega a} - e^{i \omega a}}{-i \omega}$
$F(\omega) = \frac{-(e^{i \omega a} - e^{-i \omega a})}{i \omega}$
$F(\omega) = \frac{-2i \sin(a\omega)}{i \omega} = \frac{2 \sin(a\omega)}{\omega}$

If $\omega = 0$, $F(0) = \int_{-a}^{a} 1 dx = 2a$.
We can see that $\lim_{\omega \to 0} \frac{2 \sin(a\omega)}{\omega} = 2a$.

**Example 2: Fourier Transform of $f(x) = e^{-a|x|}$ ($a>0$)**

$F(\omega) = \int_{-\infty}^{\infty} e^{-a|x|} e^{-i \omega x} dx$
$F(\omega) = \int_{-\infty}^{0} e^{ax} e^{-i \omega x} dx + \int_{0}^{\infty} e^{-ax} e^{-i \omega x} dx$
$F(\omega) = \int_{-\infty}^{0} e^{(a-i\omega)x} dx + \int_{0}^{\infty} e^{-(a+i\omega)x} dx$

For the first integral: $\left[ \frac{e^{(a-i\omega)x}}{a-i\omega} \right]_{-\infty}^{0} = \frac{1}{a-i\omega} - 0 = \frac{1}{a-i\omega}$ (since $a>0$).
For the second integral: $\left[ \frac{e^{-(a+i\omega)x}}{-(a+i\omega)} \right]_{0}^{\infty} = 0 - \frac{1}{-(a+i\omega)} = \frac{1}{a+i\omega}$ (since $a>0$).

$F(\omega) = \frac{1}{a-i\omega} + \frac{1}{a+i\omega} = \frac{(a+i\omega) + (a-i\omega)}{(a-i\omega)(a+i\omega)}$
$F(\omega) = \frac{2a}{a^2 + \omega^2}$

**Example 3: Inverse Fourier Transform of $F(\omega) = e^{-\alpha|\omega|}$**
Let's find the function $f(x)$ whose Fourier Transform is $F(\omega) = e^{-\alpha|\omega|}$.

$f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-\alpha|\omega|} e^{i \omega x} d\omega$
$f(x) = \frac{1}{2\pi} \left( \int_{-\infty}^{0} e^{\alpha\omega} e^{i \omega x} d\omega + \int_{0}^{\infty} e^{-\alpha\omega} e^{i \omega x} d\omega \right)$
$f(x) = \frac{1}{2\pi} \left( \int_{-\infty}^{0} e^{(\alpha+ix)\omega} d\omega + \int_{0}^{\infty} e^{(-\alpha+ix)\omega} d\omega \right)$

First integral: $\left[ \frac{e^{(\alpha+ix)\omega}}{\alpha+ix} \right]_{-\infty}^{0} = \frac{1}{\alpha+ix} - 0 = \frac{1}{\alpha+ix}$ (since $\alpha>0$).
Second integral: $\left[ \frac{e^{(-\alpha+ix)\omega}}{-\alpha+ix} \right]_{0}^{\infty} = 0 - \frac{1}{-\alpha+ix} = \frac{-1}{-(\alpha-ix)} = \frac{1}{\alpha-ix}$ (since $\alpha>0$).

$f(x) = \frac{1}{2\pi} \left( \frac{1}{\alpha+ix} + \frac{1}{\alpha-ix} \right)$
$f(x) = \frac{1}{2\pi} \left( \frac{(\alpha-ix) + (\alpha+ix)}{(\alpha+ix)(\alpha-ix)} \right)$
$f(x) = \frac{1}{2\pi} \left( \frac{2\alpha}{\alpha^2 + x^2} \right) = \frac{\alpha}{\pi (\alpha^2 + x^2)}$

**Learning Outcome Alignment:** Demonstrates practical application of **CO1**.

---

### **8. Applications in Electrical Science and Physical Science**

The Fourier Integral is a fundamental tool in many areas:

*   **Signal Processing:** Analyzing the frequency content of non-periodic signals (e.g., transient signals, communication signals).
*   **System Analysis:** Determining the response of linear time-invariant (LTI) systems to arbitrary inputs. The Fourier Transform of the impulse response of a system gives its frequency response.
*   **Quantum Mechanics:** Representing wave functions in momentum space.
*   **Diffraction:** Analyzing the patterns produced when waves pass through apertures.
*   **Partial Differential Equations:** Solving PDEs like the heat equation and wave equation, especially for infinite domains.

**Reference:** Kreyszig (10th ed.), Chapter 11, Section 11.7 discusses applications. B.S. Grewal's "Higher Engineering Mathematics" (44th ed.) also provides numerous application-oriented examples. The book "Fast Fourier Transform - Algorithms and Applications" by Rao, Kim, and Hwang highlights the practical importance in digital signal processing.

**Learning Outcome Alignment:** Directly addresses the application aspect of **CO1**.

---

### **9. Practice Questions**

1.  Find the Fourier Transform of the function $f(x) = \begin{cases} x & \text{if } |x| < 1 \\ 0 & \text{if } |x| > 1 \end{cases}$.
2.  Find the Fourier Transform of $f(x) = e^{-3|x|}$.
3.  Find the Fourier Transform of the function $f(x) = x e^{-ax^2}$, where $a > 0$.
4.  Find the function $f(x)$ whose Fourier Transform is $F(\omega) = \frac{2}{1+\omega^2}$.
5.  Using the properties of Fourier Transforms, find the Fourier Transform of $f(x) = \frac{\sin(a(x-b))}{(x-b)}$.

---

### **10. Answers to Practice Questions**

1.  $F(\omega) = \int_{-1}^{1} x e^{-i \omega x} dx$
    Using integration by parts ($u=x, dv=e^{-i\omega x}dx$):
    $F(\omega) = \left[ \frac{x e^{-i \omega x}}{-i \omega} \right]_{-1}^{1} - \int_{-1}^{1} \frac{e^{-i \omega x}}{-i \omega} dx$
    $F(\omega) = \left( \frac{1 e^{-i \omega}}{-i \omega} - \frac{-1 e^{i \omega}}{-i \omega} \right) + \left[ \frac{e^{-i \omega x}}{(-i \omega)^2} \right]_{-1}^{1}$
    $F(\omega) = \frac{e^{-i \omega} + e^{i \omega}}{-i \omega} + \frac{e^{-i \omega} - e^{i \omega}}{-\omega^2}$
    $F(\omega) = \frac{2 \cos(\omega)}{-i \omega} + \frac{-2i \sin(\omega)}{-\omega^2}$
    $F(\omega) = \frac{2i \cos(\omega)}{\omega} + \frac{2i \sin(\omega)}{\omega^2}$
    $F(\omega) = 2i \left( \frac{\cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2} \right)$

2.  From the table, for $f(x) = e^{-a|x|}$, $F(\omega) = \frac{2a}{a^2 + \omega^2}$.
    Here, $a=3$, so $F(\omega) = \frac{2(3)}{3^2 + \omega^2} = \frac{6}{9 + \omega^2}$.

3.  We know that the Fourier Transform of $e^{-ax^2}$ is $\sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}}$.
    Using the property $x f(x) \leftrightarrow i \frac{d}{d\omega} F(\omega)$:
    Let $g(x) = e^{-ax^2}$, so $G(\omega) = \sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}}$.
    $\mathcal{F}\{x e^{-ax^2}\} = i \frac{d}{d\omega} \left( \sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}} \right)$
    $= i \sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}} \left( -\frac{2\omega}{4a} \right)$
    $= i \sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}} \left( -\frac{\omega}{2a} \right)$
    $= -i \frac{\omega}{2a} \sqrt{\frac{\pi}{a}} e^{-\frac{\omega^2}{4a}}$
    $= -i \frac{\omega}{2a^{3/2}} \sqrt{\pi} e^{-\frac{\omega^2}{4a}}$

4.  We know that the Fourier Transform of $e^{-a|x|}$ is $\frac{2a}{a^2 + \omega^2}$.
    We want to find $f(x)$ for $F(\omega) = \frac{2}{1+\omega^2}$.
    This matches the form $\frac{2a}{a^2 + \omega^2}$ with $a=1$.
    Therefore, $f(x) = e^{-1|x|} = e^{-|x|}$.

5.  We know that the Fourier Transform of $\frac{\sin(ax)}{x}$ is $\sqrt{\frac{\pi}{2}}$ if $|\omega| < a$ and $0$ otherwise (a rectangular pulse in frequency domain).
    Let $g(x) = \frac{\sin(ax)}{x}$. Its transform is $G(\omega) = \sqrt{\frac{\pi}{2}} \text{rect}(\frac{\omega}{2a})$.
    We want to find the transform of $f(x) = \frac{\sin(a(x-b))}{x-b}$.
    Let $y = x-b$. Then $f(x)$ can be written in terms of $y$. Let $h(y) = \frac{\sin(ay)}{y}$. The transform of $h(y)$ is $H(\alpha) = \sqrt{\frac{\pi}{2}} \text{rect}(\frac{\alpha}{2a})$.
    Since $f(x) = h(x-b)$, we use the shifting property $f(x-b) \leftrightarrow e^{-ib\omega} F(\omega)$.
    So, $\mathcal{F}\left\{\frac{\sin(a(x-b))}{x-b}\right\} = e^{-ib\omega} \sqrt{\frac{\pi}{2}} \text{rect}(\frac{\omega}{2a})$.

---

### **11. Important Points to Remember**

*   The Fourier Integral is the generalization of Fourier Series for non-periodic functions.
*   The condition $\int_{-\infty}^{\infty} |f(x)| dx < \infty$ is essential for the existence of the Fourier Transform.
*   Key properties like linearity, shifting, scaling, differentiation, and convolution are vital for manipulating Fourier Transforms.
*   Familiarity with standard Fourier Transform pairs significantly aids in solving problems.
*   The Fourier Transform converts differential equations in the time/space domain into algebraic equations in the frequency domain, simplifying analysis.

---

This concludes the study notes for the Fourier Integral. Remember to practice applying these concepts to various problems from your textbooks.
