---
title: "Fourier Cosine and Sine Transform"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810686"
status: "completed"
scrapedAt: "2026-05-20T18:41:12.057Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Fourier Cosine and Sine Transform

---

### 1. Introduction to Fourier Transforms

The Fourier Integral is a generalization of the Fourier Series, allowing us to represent functions that are not necessarily periodic over an infinite interval. Fourier Transforms are powerful tools in signal processing, physics, and engineering for analyzing signals and systems in the frequency domain.

**Key Concept:** The Fourier Transform decomposes a function into its constituent frequencies.

---

### 2. The Need for Cosine and Sine Transforms

When dealing with functions defined over the interval $[0, \infty)$, the standard Fourier Transform can involve complex exponentials. However, in many physical and electrical science applications, we encounter functions that are either:

*   **Even Functions:** These functions are symmetric about the y-axis ($f(x) = f(-x)$). Their Fourier Transforms consist only of cosine terms.
*   **Odd Functions:** These functions are symmetric about the origin ($f(x) = -f(-x)$). Their Fourier Transforms consist only of sine terms.

To simplify the analysis of such functions and to directly work with them on the interval $[0, \infty)$, we use Fourier Cosine and Sine Transforms.

---

### 3. Fourier Cosine Transform

The Fourier Cosine Transform is used for **even functions** defined on the interval $[0, \infty)$.

**Definition:**

The **Fourier Cosine Transform** of a function $f(x)$ is defined as:

$F_c(\omega) = \mathcal{F}_c\{f(x)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(x) \cos(\omega x) dx$

**Inverse Fourier Cosine Transform:**

The function $f(x)$ can be recovered from its Fourier Cosine Transform using the inverse transform:

$f(x) = \mathcal{F}_c^{-1}\{F_c(\omega)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} F_c(\omega) \cos(\omega x) d\omega$

**Conditions for Existence:**

The Fourier Cosine Transform of $f(x)$ exists if:

*   $f(x)$ is an even function.
*   $f(x)$ is absolutely integrable over $[0, \infty)$, i.e., $\int_{0}^{\infty} |f(x)| dx < \infty$.
*   $f(x)$ has a finite number of discontinuities in any finite interval.
*   For every positive jump discontinuity, the function value is the average of the left and right limits.

**Derivation (Briefly):**

Consider the Fourier Transform of an even function $f(x)$ defined on $(-\infty, \infty)$:

$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$

Since $f(x)$ is even, $f(x) = f(-x)$.
$e^{-i\omega x} = \cos(\omega x) - i \sin(\omega x)$

$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) (\cos(\omega x) - i \sin(\omega x)) dx$

$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) \cos(\omega x) dx - \frac{i}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) \sin(\omega x) dx$

For an even function $f(x)$, $f(x)\cos(\omega x)$ is even and $f(x)\sin(\omega x)$ is odd.
The integral of an odd function over a symmetric interval $(-\infty, \infty)$ is zero.
So, $\int_{-\infty}^{\infty} f(x) \sin(\omega x) dx = 0$.

$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) \cos(\omega x) dx$

Since $f(x)\cos(\omega x)$ is even, $\int_{-\infty}^{\infty} f(x) \cos(\omega x) dx = 2 \int_{0}^{\infty} f(x) \cos(\omega x) dx$.

$F(\omega) = \frac{1}{\sqrt{2\pi}} \left( 2 \int_{0}^{\infty} f(x) \cos(\omega x) dx \right) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(x) \cos(\omega x) dx$

This is the definition of the Fourier Cosine Transform, $F_c(\omega)$.

**Example 1:** Find the Fourier Cosine Transform of $f(x) = e^{-ax}$, $a>0$.

$F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} e^{-ax} \cos(\omega x) dx$

We know the standard integral $\int_{0}^{\infty} e^{-ax} \cos(bx) dx = \frac{a}{a^2 + b^2}$ for $a>0$.
Here, $b = \omega$.

$F_c(\omega) = \sqrt{\frac{2}{\pi}} \left( \frac{a}{a^2 + \omega^2} \right)$

**Example 2:** Find the Fourier Cosine Transform of $f(x) = \frac{1}{1+x^2}$.

$F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} \frac{\cos(\omega x)}{1+x^2} dx$

This integral is a known result: $\int_{0}^{\infty} \frac{\cos(\omega x)}{1+x^2} dx = \frac{\pi}{2} e^{-|\omega|}$.

$F_c(\omega) = \sqrt{\frac{2}{\pi}} \left( \frac{\pi}{2} e^{-|\omega|} \right) = \sqrt{\frac{\pi}{2}} e^{-|\omega|}$

---

### 4. Fourier Sine Transform

The Fourier Sine Transform is used for **odd functions** defined on the interval $[0, \infty)$.

**Definition:**

The **Fourier Sine Transform** of a function $f(x)$ is defined as:

$F_s(\omega) = \mathcal{F}_s\{f(x)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(x) \sin(\omega x) dx$

**Inverse Fourier Sine Transform:**

The function $f(x)$ can be recovered from its Fourier Sine Transform using the inverse transform:

$f(x) = \mathcal{F}_s^{-1}\{F_s(\omega)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} F_s(\omega) \sin(\omega x) d\omega$

**Conditions for Existence:**

The Fourier Sine Transform of $f(x)$ exists if:

*   $f(x)$ is an odd function.
*   $f(x)$ is absolutely integrable over $[0, \infty)$, i.e., $\int_{0}^{\infty} |f(x)| dx < \infty$.
*   $f(x)$ has a finite number of discontinuities in any finite interval.
*   For every positive jump discontinuity, the function value is the average of the left and right limits.

**Derivation (Briefly):**

Consider the Fourier Transform of an odd function $f(x)$ defined on $(-\infty, \infty)$:

$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$

Since $f(x)$ is odd, $f(x) = -f(-x)$.
$e^{-i\omega x} = \cos(\omega x) - i \sin(\omega x)$

$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) (\cos(\omega x) - i \sin(\omega x)) dx$

$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) \cos(\omega x) dx - \frac{i}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) \sin(\omega x) dx$

For an odd function $f(x)$, $f(x)\cos(\omega x)$ is odd and $f(x)\sin(\omega x)$ is even.
The integral of an odd function over a symmetric interval $(-\infty, \infty)$ is zero.
So, $\int_{-\infty}^{\infty} f(x) \cos(\omega x) dx = 0$.

$F(\omega) = - \frac{i}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) \sin(\omega x) dx$

Since $f(x)\sin(\omega x)$ is even, $\int_{-\infty}^{\infty} f(x) \sin(\omega x) dx = 2 \int_{0}^{\infty} f(x) \sin(\omega x) dx$.

$F(\omega) = - \frac{i}{\sqrt{2\pi}} \left( 2 \int_{0}^{\infty} f(x) \sin(\omega x) dx \right) = -i \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(x) \sin(\omega x) dx$

This is the definition of the Fourier Sine Transform, $F_s(\omega)$. Note the presence of $-i$ in the relationship between $F(\omega)$ and $F_s(\omega)$ for odd functions, which is implicit in the definition of $F_s(\omega)$ itself with the $\sqrt{2/\pi}$ factor.

**Example 3:** Find the Fourier Sine Transform of $f(x) = e^{-ax}$, $a>0$.
Note: $f(x) = e^{-ax}$ is NOT an odd function. If we are asked for the Fourier Sine Transform of $f(x) = e^{-ax}$ on $[0, \infty)$, we treat it as a general function.

$F_s(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} e^{-ax} \sin(\omega x) dx$

We know the standard integral $\int_{0}^{\infty} e^{-ax} \sin(bx) dx = \frac{b}{a^2 + b^2}$ for $a>0$.
Here, $b = \omega$.

$F_s(\omega) = \sqrt{\frac{2}{\pi}} \left( \frac{\omega}{a^2 + \omega^2} \right)$

**Example 4:** Find the Fourier Sine Transform of $f(x) = \frac{x}{1+x^2}$.
Note: $f(x) = \frac{x}{1+x^2}$ is an odd function.

$F_s(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} \frac{x \sin(\omega x)}{1+x^2} dx$

This integral is a known result: $\int_{0}^{\infty} \frac{x \sin(\omega x)}{1+x^2} dx = \frac{\pi}{2} e^{-|\omega|}$.

$F_s(\omega) = \sqrt{\frac{2}{\pi}} \left( \frac{\pi}{2} e^{-|\omega|} \right) = \sqrt{\frac{\pi}{2}} e^{-|\omega|}$

---

### 5. Relation between Fourier Transform and Cosine/Sine Transforms

Let $f(x)$ be a function defined on $(-\infty, \infty)$.
Let $f_e(x)$ be the even extension of $f(x)$ to $[0, \infty)$, i.e., $f_e(x) = f(x)$ for $x>0$ and $f_e(x) = f(-x)$ for $x<0$. This is equivalent to considering $f(x)$ on $[0, \infty)$ and implicitly assuming it's extended symmetrically.
Let $f_o(x)$ be the odd extension of $f(x)$ to $[0, \infty)$, i.e., $f_o(x) = f(x)$ for $x>0$ and $f_o(x) = -f(-x)$ for $x<0$. This is equivalent to considering $f(x)$ on $[0, \infty)$ and implicitly assuming it's extended antisymmetrically.

Any function $f(x)$ can be decomposed into its even and odd parts:
$f(x) = f_e(x) + f_o(x)$
where $f_e(x) = \frac{f(x) + f(-x)}{2}$ and $f_o(x) = \frac{f(x) - f(-x)}{2}$.

The Fourier Transform of $f(x)$ is:
$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x) e^{-i\omega x} dx$
$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} (f_e(x) + f_o(x)) e^{-i\omega x} dx$
$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_e(x) e^{-i\omega x} dx + \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_o(x) e^{-i\omega x} dx$

As shown in the derivations:
$\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_e(x) e^{-i\omega x} dx = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f_e(x) \cos(\omega x) dx = F_c(\omega)$ (where $f_e(x)$ is the even part)
$\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f_o(x) e^{-i\omega x} dx = -i \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f_o(x) \sin(\omega x) dx = -i F_s(\omega)$ (where $f_o(x)$ is the odd part)

Therefore, $F(\omega) = F_c(\omega) - i F_s(\omega)$.

**For functions defined on $[0, \infty)$:**

*   If $f(x)$ is **even** on $[0, \infty)$ (implicitly implying $f(-x) = f(x)$ for the extension), then $F(\omega) = F_c(\omega)$.
*   If $f(x)$ is **odd** on $[0, \infty)$ (implicitly implying $f(-x) = -f(x)$ for the extension), then $F(\omega) = -i F_s(\omega)$.

**Important Distinction:** When we calculate the Fourier Cosine or Sine transform of a function $f(x)$ defined *only* on $[0, \infty)$, we are implicitly assuming it's an extension of an even or odd function to $(-\infty, \infty)$, or we are simply adapting the transform to work with the half-line interval. The $\sqrt{2/\pi}$ factor is crucial for making the inverse transforms consistent.

---

### 6. Properties of Fourier Cosine and Sine Transforms

These properties are analogous to the properties of the standard Fourier Transform.

**a) Linearity:**
If $a$ and $b$ are constants, then:
$\mathcal{F}_c\{a f(x) + b g(x)\} = a \mathcal{F}_c\{f(x)\} + b \mathcal{F}_c\{g(x)\}$
$\mathcal{F}_s\{a f(x) + b g(x)\} = a \mathcal{F}_s\{f(x)\} + b \mathcal{F}_s\{g(x)\}$

**b) Change of Scale:**
Let $y = ax$, so $x = y/a$, $dx = dy/a$.
$\mathcal{F}_c\{f(ax)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(ax) \cos(\omega x) dx$
Let $u = ax$, so $x = u/a$, $dx = du/a$. If $a>0$, the limits remain $0$ to $\infty$.
$\mathcal{F}_c\{f(ax)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(u) \cos(\omega \frac{u}{a}) \frac{du}{a} = \frac{1}{a} \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(u) \cos(\frac{\omega}{a} u) du = \frac{1}{a} F_c(\frac{\omega}{a})$
If $a<0$, let $a = -b$ where $b>0$.
$\mathcal{F}_c\{f(ax)\} = \mathcal{F}_c\{f(-bx)\}$. If $f$ is even, $f(-bx) = f(bx)$. So $\mathcal{F}_c\{f(ax)\} = \frac{1}{|a|} F_c(\frac{\omega}{a})$. This holds for general $a \neq 0$.

Similarly for Sine Transform:
$\mathcal{F}_s\{f(ax)\} = \frac{1}{|a|} F_s(\frac{\omega}{a})$ for $a \neq 0$.

**c) Change of Frequency (Shift):**
This property is slightly different from the standard Fourier Transform due to the cosine/sine nature.
$\mathcal{F}_c\{f(x) \cos(cx)\}$ is complex and not a simple cosine/sine transform.
However, it can be related to the sum/difference of cosine transforms of $f(x)$ at different frequencies.
$f(x) \cos(cx) = f(x) \frac{e^{icx} + e^{-icx}}{2}$
$\mathcal{F}_c\{f(x) \cos(cx)\} \propto \int_0^\infty f(x) \cos(cx) \cos(\omega x) dx$
Using $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$:
$\int_0^\infty f(x) \frac{1}{2}[\cos((\omega-c)x) + \cos((\omega+c)x)] dx$
$= \frac{1}{2} \int_0^\infty f(x) \cos((\omega-c)x) dx + \frac{1}{2} \int_0^\infty f(x) \cos((\omega+c)x) dx$
$= \frac{1}{2} F_c(\omega - c) + \frac{1}{2} F_c(\omega + c)$
So, $\mathcal{F}_c\{f(x) \cos(cx)\} = \frac{1}{2} [\mathcal{F}_c\{f(x)\} (\omega-c) + \mathcal{F}_c\{f(x)\} (\omega+c)]$

Similarly, $\mathcal{F}_s\{f(x) \sin(cx)\} = \frac{1}{2} [\mathcal{F}_s\{f(x)\} (\omega-c) - \mathcal{F}_s\{f(x)\} (\omega+c)]$

**d) Derivative Properties:**

*   **First Derivative (Cosine Transform):**
    Let $F_c(\omega) = \mathcal{F}_c\{f(x)\}$.
    $\mathcal{F}_c\{f'(x)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f'(x) \cos(\omega x) dx$
    Using integration by parts: $u = \cos(\omega x)$, $dv = f'(x) dx$. So $du = -\omega \sin(\omega x) dx$, $v = f(x)$.
    $= \sqrt{\frac{2}{\pi}} [f(x) \cos(\omega x)]_{0}^{\infty} - \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(x) (-\omega \sin(\omega x)) dx$
    Assuming $f(x) \to 0$ as $x \to \infty$:
    $= \sqrt{\frac{2}{\pi}} [0 - f(0)] + \omega \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(x) \sin(\omega x) dx$
    $= -\sqrt{\frac{2}{\pi}} f(0) + \omega F_s(\omega)$

*   **First Derivative (Sine Transform):**
    $\mathcal{F}_s\{f'(x)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f'(x) \sin(\omega x) dx$
    Using integration by parts: $u = \sin(\omega x)$, $dv = f'(x) dx$. So $du = \omega \cos(\omega x) dx$, $v = f(x)$.
    $= \sqrt{\frac{2}{\pi}} [f(x) \sin(\omega x)]_{0}^{\infty} - \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(x) (\omega \cos(\omega x)) dx$
    Assuming $f(x) \to 0$ as $x \to \infty$:
    $= \sqrt{\frac{2}{\pi}} [0 - 0] - \omega \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(x) \cos(\omega x) dx$
    $= -\omega F_c(\omega)$

*   **Second Derivative (Cosine Transform):**
    $\mathcal{F}_c\{f''(x)\} = \mathcal{F}_c\{(f')'(x)\}$
    Using the property for the first derivative on $f'(x)$:
    $= -\sqrt{\frac{2}{\pi}} f'(0) + \omega \mathcal{F}_s\{f'(x)\}$
    Substitute $\mathcal{F}_s\{f'(x)\} = -\omega F_c(\omega)$:
    $= -\sqrt{\frac{2}{\pi}} f'(0) + \omega (-\omega F_c(\omega))$
    $= -\omega^2 F_c(\omega) - \sqrt{\frac{2}{\pi}} f'(0)$

*   **Second Derivative (Sine Transform):**
    $\mathcal{F}_s\{f''(x)\} = \mathcal{F}_s\{(f')'(x)\}$
    Using the property for the first derivative on $f'(x)$:
    $= -\omega \mathcal{F}_c\{f'(x)\}$
    Substitute $\mathcal{F}_c\{f'(x)\} = -\sqrt{\frac{2}{\pi}} f(0) + \omega F_s(\omega)$:
    $= -\omega (-\sqrt{\frac{2}{\pi}} f(0) + \omega F_s(\omega))$
    $= -\omega^2 F_s(\omega) + \sqrt{\frac{2}{\pi}} \omega f(0)$

**Summary of Derivative Properties:**
$\mathcal{F}_c\{f'(x)\} = \omega F_s(\omega) - \sqrt{\frac{2}{\pi}} f(0)$
$\mathcal{F}_s\{f'(x)\} = -\omega F_c(\omega)$
$\mathcal{F}_c\{f''(x)\} = -\omega^2 F_c(\omega) - \sqrt{\frac{2}{\pi}} f'(0)$
$\mathcal{F}_s\{f''(x)\} = -\omega^2 F_s(\omega) + \sqrt{\frac{2}{\pi}} \omega f(0)$

**e) Convolution Theorem:**

*   **Cosine Transform:**
    If $h(x) = \int_{0}^{\infty} f(u) g(x-u) du$ (where $g$ is assumed to be defined appropriately or extended), then
    $\mathcal{F}_c\{h(x)\} = \sqrt{\frac{2}{\pi}} F_c(\omega) G_c(\omega)$

*   **Sine Transform:**
    If $h(x) = \int_{0}^{\infty} f(u) g(x-u) du$, then
    $\mathcal{F}_s\{h(x)\} = \sqrt{\frac{2}{\pi}} F_s(\omega) G_s(\omega)$

    **Important Note on Convolution:** The convolution for Fourier Cosine and Sine Transforms on $[0, \infty)$ is defined slightly differently due to the half-line nature. For $f(x)$ and $g(x)$ defined on $[0, \infty)$:

    *   **Cosine Convolution:** $(f * g)_c(x) = \int_{0}^{\infty} f(u) g(x-u) du + \int_{0}^{\infty} f(u) g(x+u) du$
        The transform is $\mathcal{F}_c\{(f * g)_c(x)\} = \sqrt{\frac{2}{\pi}} F_c(\omega) G_c(\omega)$.

    *   **Sine Convolution:** $(f * g)_s(x) = \int_{0}^{\infty} f(u) g(x-u) du - \int_{0}^{\infty} f(u) g(x+u) du$
        The transform is $\mathcal{F}_s\{(f * g)_s(x)\} = \sqrt{\frac{2}{\pi}} F_s(\omega) G_s(\omega)$.

---

### 7. Applications in Electrical Science and Physical Science

*   **Solving Differential Equations:** Fourier Cosine and Sine Transforms are used to convert linear ordinary and partial differential equations with constant coefficients into algebraic equations in the frequency domain. This simplifies the process of finding solutions, especially for boundary value problems.

    *   **Example: Heat Conduction:** To find the temperature distribution in a rod of finite length with specific boundary conditions, Fourier Sine Transforms are often employed.
    *   **Example: Vibrations:** Analyzing the vibration of strings or membranes can involve Fourier Sine Transforms.

*   **Signal Processing:** Decomposing signals into their frequency components. Cosine transforms are useful for analyzing even signals (like step functions, impulses) on $[0, \infty)$, while sine transforms are useful for odd signals (like ramps, derivatives of impulses).

*   **Circuit Analysis:** Analyzing the response of electrical circuits to specific inputs, especially when dealing with signals that are only defined for $t \ge 0$.

---

### 8. Standard Fourier Transform Pairs (Cosine and Sine)

It's beneficial to memorize common pairs.

| $f(x)$                                          | $\mathcal{F}_c\{f(x)\} = F_c(\omega)$                                              | $\mathcal{F}_s\{f(x)\} = F_s(\omega)$                                              |
| :---------------------------------------------- | :-------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| $e^{-ax}$ ($a>0$)                               | $\sqrt{\frac{2}{\pi}} \frac{a}{a^2 + \omega^2}$                                    | $\sqrt{\frac{2}{\pi}} \frac{\omega}{a^2 + \omega^2}$                               |
| $\frac{1}{1+x^2}$                               | $\sqrt{\frac{\pi}{2}} e^{-|\omega|}$                                               | $\sqrt{\frac{\pi}{2}} \frac{|\omega|}{1+x^2}$ (for $f(x) = x/(1+x^2)$ on $[0,\infty)$) |
| $1$ for $0 < x < a$, $0$ otherwise (Rectangular) | $\sqrt{\frac{2}{\pi}} \frac{\sin(a\omega)}{\omega}$                              | $\sqrt{\frac{2}{\pi}} \frac{1 - \cos(a\omega)}{\omega}$                            |
| $\cos(ax)$                                      | $\sqrt{\frac{\pi}{2}} [\delta(\omega-a) + \delta(\omega+a)]$ (formal)             | $\sqrt{\frac{\pi}{2}} [\delta(\omega-a) - \delta(\omega+a)]$ (formal)             |
| $\sin(ax)$                                      | $\sqrt{\frac{\pi}{2}} [\delta(\omega+a) - \delta(\omega-a)]$ (formal)             | $\sqrt{\frac{\pi}{2}} [\delta(\omega+a) + \delta(\omega-a)]$ (formal)             |
| $x e^{-ax}$ ($a>0$)                             | $\sqrt{\frac{2}{\pi}} \frac{2a\omega}{(a^2+\omega^2)^2}$                            | $\sqrt{\frac{2}{\pi}} \frac{a^2-\omega^2}{(a^2+\omega^2)^2}$                         |

**Note on Delta Functions:** The delta function $(\delta)$ appears when transforming constants or sinusoidal functions. These are formal results and require careful interpretation in the context of generalized functions.

---

### 9. Practice Questions and Exercises

**Question 1:** Find the Fourier Cosine Transform of $f(x) = e^{-2x}$ for $x \ge 0$.

**Solution 1:**
Using the formula $\mathcal{F}_c\{e^{-ax}\} = \sqrt{\frac{2}{\pi}} \frac{a}{a^2 + \omega^2}$ with $a=2$:
$F_c(\omega) = \sqrt{\frac{2}{\pi}} \frac{2}{2^2 + \omega^2} = \sqrt{\frac{2}{\pi}} \frac{2}{4 + \omega^2}$

**Question 2:** Find the Fourier Sine Transform of $f(x) = \sin(3x)$ for $x \ge 0$.

**Solution 2:**
Using the formula $\mathcal{F}_s\{f(x)\}$ for $f(x) = \sin(ax)$:
$\mathcal{F}_s\{\sin(ax)\} = \sqrt{\frac{2}{\pi}} \int_0^\infty \sin(ax) \sin(\omega x) dx$
This integral is $\frac{\pi}{2}$ if $\omega = a$, $0$ if $\omega \neq a$, and $\frac{\pi}{4}$ if $\omega=a=0$.
This leads to a delta function representation: $\sqrt{\frac{2}{\pi}} \frac{\pi}{2} [\delta(\omega-a) + \delta(\omega+a)]$ (for $\sin(ax)$). However, for Sine Transform, the definition leads to $\sqrt{\frac{2}{\pi}} [\delta(\omega-a) - \delta(\omega+a)]$.
For $a=3$: $F_s(\omega) = \sqrt{\frac{2}{\pi}} (\delta(\omega-3) - \delta(\omega+3))$.

**Question 3:** Find the Fourier Sine Transform of $f(x) = \frac{x}{a^2+x^2}$, $a>0$.

**Solution 3:**
This function is $f(x) = \frac{x}{a^2+x^2}$. Its Fourier Sine Transform is:
$F_s(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} \frac{x}{a^2+x^2} \sin(\omega x) dx$
We know the integral $\int_{0}^{\infty} \frac{x}{a^2+x^2} \sin(\omega x) dx = \frac{\pi}{2} e^{-a|\omega|}$ for $a>0$.
$F_s(\omega) = \sqrt{\frac{2}{\pi}} \left( \frac{\pi}{2} e^{-a|\omega|} \right) = \sqrt{\frac{\pi}{2}} e^{-a|\omega|}$.

**Question 4:** If $\mathcal{F}_c\{f(x)\} = \frac{\omega}{1+\omega^2}$, find $f(x)$.

**Solution 4:**
We need to find the inverse Fourier Cosine Transform:
$f(x) = \mathcal{F}_c^{-1}\{F_c(\omega)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} \frac{\omega}{1+\omega^2} \cos(\omega x) d\omega$
This integral is known to be $\sqrt{\frac{\pi}{2}} e^{-x}$ for $x \ge 0$.
So, $f(x) = \sqrt{\frac{2}{\pi}} \left( \sqrt{\frac{\pi}{2}} e^{-x} \right) = e^{-x}$ for $x \ge 0$.

**Question 5:** Find the Fourier Cosine Transform of $f(x) = \begin{cases} 1, & 0 < x < 1 \\ 0, & x > 1 \end{cases}$

**Solution 5:**
$F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(x) \cos(\omega x) dx$
$F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_{0}^{1} 1 \cdot \cos(\omega x) dx$
$F_c(\omega) = \sqrt{\frac{2}{\pi}} \left[ \frac{\sin(\omega x)}{\omega} \right]_{0}^{1}$ (assuming $\omega \neq 0$)
$F_c(\omega) = \sqrt{\frac{2}{\pi}} \frac{\sin(\omega)}{\omega}$
If $\omega = 0$, $\int_0^1 \cos(0) dx = \int_0^1 1 dx = 1$. So $F_c(0) = \sqrt{\frac{2}{\pi}}$. The expression $\frac{\sin(\omega)}{\omega}$ approaches $1$ as $\omega \to 0$, so the formula holds for $\omega=0$ as well.

---

### 10. Important Points to Remember

*   **Domain of Application:** Fourier Cosine Transform is for even functions (or functions considered on $[0, \infty)$ where an even extension is implied), while Fourier Sine Transform is for odd functions (or functions on $[0, \infty)$ where an odd extension is implied).
*   **The $\sqrt{2/\pi}$ Factor:** This factor is crucial for making the transform and its inverse have the same form, ensuring a consistent mathematical framework.
*   **Derivative Properties:** Pay close attention to the initial conditions ($f(0), f'(0)$) when applying derivative properties. These are often different from the standard Fourier Transform.
*   **Convolution:** The definition of convolution for Cosine and Sine transforms on $[0, \infty)$ includes both direct and reflected integrals to ensure the transform property $\mathcal{F}\{f * g\} = \mathcal{F}\{f\} \mathcal{F}\{g\}$.
*   **Applications:** These transforms are powerful tools for solving differential equations and analyzing signals, particularly when dealing with boundary conditions on semi-infinite domains.
*   **Conditions for Existence:** Ensure the function is absolutely integrable over $[0, \infty)$ and satisfies conditions related to continuity and jump discontinuities.

---

This comprehensive set of notes covers the definitions, derivations, properties, and applications of Fourier Cosine and Sine Transforms, along with practice problems. Remember to practice applying these concepts to various functions and differential equations.
