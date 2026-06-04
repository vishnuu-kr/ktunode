---
title: "Fourier Cosine and Sine integrals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810685"
status: "completed"
scrapedAt: "2026-05-20T18:41:11.357Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Fourier Cosine and Sine Integrals

This module introduces the Fourier Integral as a generalization of the Fourier Series to functions defined over an infinite interval. We will specifically focus on the Fourier Cosine and Sine Integrals, which are applicable to even and odd functions, respectively.

---

### Learning Outcomes:

Upon successful completion of this topic, you should be able to:

*   **Understand the concept of Fourier Integral:** Grasp how to represent functions defined on an infinite interval using integrals, analogous to Fourier Series representing periodic functions using sums.
*   **Derive and understand the Fourier Cosine Integral:** Learn the conditions under which a function can be represented by a Fourier Cosine Integral and how to derive its formula.
*   **Apply the Fourier Cosine Integral:** Be able to compute the Fourier Cosine Integral for specific even functions.
*   **Derive and understand the Fourier Sine Integral:** Learn the conditions under which a function can be represented by a Fourier Sine Integral and how to derive its formula.
*   **Apply the Fourier Sine Integral:** Be able to compute the Fourier Sine Integral for specific odd functions.
*   **Distinguish between Fourier Cosine and Sine Integrals:** Understand when to use each type of integral based on the symmetry of the function.

---

### 1. Introduction to Fourier Integrals

**Concept:**
Fourier Series represent periodic functions as a sum of sines and cosines. The Fourier Integral extends this idea to non-periodic functions defined over an infinite interval $(-\infty, \infty)$. It represents such functions as an integral of sines and cosines, where the frequency is treated as a continuous variable.

**Analogy with Fourier Series:**
In Fourier Series, we have discrete frequencies (harmonics) $n\omega_0$. In Fourier Integrals, these discrete frequencies become continuous, with $\omega$ varying from $0$ to $\infty$. The summation becomes an integration.

**The General Fourier Integral Formula:**
For a function $f(x)$ defined on $(-\infty, \infty)$, if it satisfies Dirichlet conditions, its Fourier Integral is given by:

$$ f(x) = \frac{1}{\pi} \int_0^\infty \left[ \left( \int_{-\infty}^\infty f(t) \cos(\omega(t-x)) dt \right) d\omega \right] $$

This can be rewritten by separating the cosine and sine terms:

$$ f(x) = \frac{2}{\pi} \int_0^\infty A(\omega) \cos(\omega x) d\omega $$

where $A(\omega)$ is the Fourier Cosine Transform of $f(x)$:

$$ A(\omega) = \int_0^\infty f(t) \cos(\omega t) dt $$

And,

$$ f(x) = \frac{2}{\pi} \int_0^\infty B(\omega) \sin(\omega x) d\omega $$

where $B(\omega)$ is the Fourier Sine Transform of $f(x)$:

$$ B(\omega) = \int_0^\infty f(t) \sin(\omega t) dt $$

However, the general form is most useful when we consider the symmetry of the function.

---

### 2. Fourier Cosine Integral

**Applicability:**
The Fourier Cosine Integral is used for **even functions** defined on the interval $(-\infty, \infty)$.

**Derivation for Even Functions:**
If $f(x)$ is an even function, then $f(-t) = f(t)$.
Let's consider the general Fourier Integral:
$f(x) = \frac{1}{2\pi} \int_{-\infty}^\infty \int_{-\infty}^\infty f(t) e^{-i\omega(t-x)} dt d\omega$

Expanding the exponential: $e^{-i\omega(t-x)} = \cos(\omega(t-x)) - i \sin(\omega(t-x))$

$f(x) = \frac{1}{2\pi} \int_{-\infty}^\infty \int_{-\infty}^\infty f(t) [\cos(\omega(t-x)) - i \sin(\omega(t-x))] dt d\omega$

Since $f(t)$ is even, $f(t)\sin(\omega(t-x))$ is an odd function of $t$ (because $\sin(\omega(t-x))$ is odd in $t$ and $f(t)$ is even). Therefore, its integral over $(-\infty, \infty)$ is zero.

$f(x) = \frac{1}{2\pi} \int_{-\infty}^\infty \int_{-\infty}^\infty f(t) \cos(\omega(t-x)) dt d\omega$

Now, consider $\cos(\omega(t-x)) = \cos(\omega t - \omega x) = \cos(\omega t)\cos(\omega x) + \sin(\omega t)\sin(\omega x)$.
Since $f(t)$ is even, $f(t)\sin(\omega t)$ is odd in $t$, so $\int_{-\infty}^\infty f(t)\sin(\omega t) dt = 0$.
Also, $\cos(\omega t)$ is even. So, $f(t)\cos(\omega t)$ is even.
$\int_{-\infty}^\infty f(t) \cos(\omega(t-x)) dt = \int_{-\infty}^\infty f(t) (\cos(\omega t)\cos(\omega x) + \sin(\omega t)\sin(\omega x)) dt$
$= \cos(\omega x) \int_{-\infty}^\infty f(t)\cos(\omega t) dt + \sin(\omega x) \int_{-\infty}^\infty f(t)\sin(\omega t) dt$
$= \cos(\omega x) \int_{-\infty}^\infty f(t)\cos(\omega t) dt$ (since the sine integral is zero)

Since $f(t)$ is even, $f(t)\cos(\omega t)$ is also even. Thus, $\int_{-\infty}^\infty f(t)\cos(\omega t) dt = 2 \int_0^\infty f(t)\cos(\omega t) dt$.

Let $A(\omega) = \int_0^\infty f(t) \cos(\omega t) dt$.
Then, $\int_{-\infty}^\infty f(t) \cos(\omega(t-x)) dt = \cos(\omega x) [2 A(\omega)]$.

Substituting back into the Fourier Integral formula:
$f(x) = \frac{1}{2\pi} \int_{-\infty}^\infty [2 \cos(\omega x) A(\omega)] d\omega$
$f(x) = \frac{1}{\pi} \int_0^\infty \cos(\omega x) A(\omega) d\omega$  (integrating from $0$ to $\infty$ because the integrand is even in $\omega$ if $f(t)$ is even).

**Fourier Cosine Integral Formula:**
If $f(x)$ is an even function, it can be represented by the Fourier Cosine Integral:

$$ f(x) = \frac{2}{\pi} \int_0^\infty A(\omega) \cos(\omega x) d\omega $$

where the **Fourier Cosine Transform** of $f(x)$ is:

$$ A(\omega) = \int_0^\infty f(t) \cos(\omega t) dt $$

**Conditions for Existence:**
The Fourier Cosine Integral converges if $f(x)$ is piecewise continuous and absolutely integrable over $[0, \infty)$, i.e., $\int_0^\infty |f(x)| dx < \infty$.

**Example 1:** Find the Fourier Cosine Integral of $f(x) = e^{-ax}$, for $x \ge 0$, where $a > 0$.
This function is defined for $x \ge 0$. To use the Fourier Cosine Integral for a function defined on $[0, \infty)$, we can consider an even extension of $f(x)$ to $(-\infty, \infty)$. Alternatively, the formula is often applied directly to the function on $[0, \infty)$ where the integral is taken from $0$ to $\infty$.

Here, $f(x) = e^{-ax}$ for $x \ge 0$. We will use the formula derived for even functions but applied to the function on $[0, \infty)$.

1.  **Calculate $A(\omega)$:**
    $A(\omega) = \int_0^\infty f(t) \cos(\omega t) dt = \int_0^\infty e^{-at} \cos(\omega t) dt$

    We use integration by parts or known integral formulas. A standard result is:
    $\int_0^\infty e^{-at} \cos(bt) dt = \frac{a}{a^2 + b^2}$

    So, $A(\omega) = \frac{a}{a^2 + \omega^2}$.

2.  **Substitute into the Fourier Cosine Integral formula:**
    $f(x) = \frac{2}{\pi} \int_0^\infty A(\omega) \cos(\omega x) d\omega$
    $e^{-ax} = \frac{2}{\pi} \int_0^\infty \frac{a}{a^2 + \omega^2} \cos(\omega x) d\omega$

This equation represents the Fourier Cosine Integral of $e^{-ax}$ for $x \ge 0$.

**Example 2:** Find the Fourier Cosine Integral of $f(x) = \begin{cases} 1 & \text{if } 0 \le x \le 1 \\ 0 & \text{if } x > 1 \end{cases}$.
This function is defined for $x \ge 0$.

1.  **Calculate $A(\omega)$:**
    $A(\omega) = \int_0^\infty f(t) \cos(\omega t) dt = \int_0^1 1 \cdot \cos(\omega t) dt + \int_1^\infty 0 \cdot \cos(\omega t) dt$
    $A(\omega) = \int_0^1 \cos(\omega t) dt$

    If $\omega = 0$, $A(0) = \int_0^1 1 dt = 1$.
    If $\omega \neq 0$, $A(\omega) = \left[ \frac{\sin(\omega t)}{\omega} \right]_0^1 = \frac{\sin(\omega)}{\omega}$.

2.  **Substitute into the Fourier Cosine Integral formula:**
    $f(x) = \frac{2}{\pi} \int_0^\infty A(\omega) \cos(\omega x) d\omega$

    We need to be careful with the case $\omega = 0$. It's generally handled by the integral.
    $f(x) = \frac{2}{\pi} \int_0^\infty \frac{\sin(\omega)}{\omega} \cos(\omega x) d\omega$

    This is the Fourier Cosine Integral representation of the given rectangular pulse. This integral is known as Dirichlet's Integral.

---

### 3. Fourier Sine Integral

**Applicability:**
The Fourier Sine Integral is used for **odd functions** defined on the interval $(-\infty, \infty)$.

**Derivation for Odd Functions:**
If $f(x)$ is an odd function, then $f(-t) = -f(t)$.
From the general Fourier Integral:
$f(x) = \frac{1}{2\pi} \int_{-\infty}^\infty \int_{-\infty}^\infty f(t) [\cos(\omega(t-x)) - i \sin(\omega(t-x))] dt d\omega$

Since $f(t)$ is odd, $f(t)\cos(\omega(t-x))$ is an odd function of $t$ (because $\cos(\omega(t-x))$ is odd in $t$ and $f(t)$ is odd). Therefore, its integral over $(-\infty, \infty)$ is zero.

$f(x) = \frac{1}{2\pi} \int_{-\infty}^\infty \int_{-\infty}^\infty f(t) [-i \sin(\omega(t-x))] dt d\omega$

Now, consider $\sin(\omega(t-x)) = \sin(\omega t - \omega x) = \sin(\omega t)\cos(\omega x) - \cos(\omega t)\sin(\omega x)$.
Since $f(t)$ is odd, $f(t)\cos(\omega t)$ is odd in $t$, so $\int_{-\infty}^\infty f(t)\cos(\omega t) dt = 0$.
Also, $\sin(\omega t)$ is odd. So, $f(t)\sin(\omega t)$ is even.
$\int_{-\infty}^\infty f(t) \sin(\omega(t-x)) dt = \int_{-\infty}^\infty f(t) (\sin(\omega t)\cos(\omega x) - \cos(\omega t)\sin(\omega x)) dt$
$= \cos(\omega x) \int_{-\infty}^\infty f(t)\sin(\omega t) dt - \sin(\omega x) \int_{-\infty}^\infty f(t)\cos(\omega t) dt$
$= \cos(\omega x) \int_{-\infty}^\infty f(t)\sin(\omega t) dt$ (since the cosine integral is zero)

Since $f(t)$ is odd, $f(t)\sin(\omega t)$ is even. Thus, $\int_{-\infty}^\infty f(t)\sin(\omega t) dt = 2 \int_0^\infty f(t)\sin(\omega t) dt$.

Let $B(\omega) = \int_0^\infty f(t) \sin(\omega t) dt$.
Then, $\int_{-\infty}^\infty f(t) \sin(\omega(t-x)) dt = \cos(\omega x) [2 B(\omega)]$.

Substituting back into the Fourier Integral formula:
$f(x) = \frac{1}{2\pi} \int_{-\infty}^\infty [-i (2 \cos(\omega x) B(\omega))] d\omega$
$f(x) = \frac{-i}{\pi} \int_0^\infty \cos(\omega x) B(\omega) d\omega$

This doesn't look right. Let's reconsider the original general form and the properties of odd functions.
If $f(x)$ is odd, we can write:
$f(x) = \frac{1}{\pi} \int_0^\infty \left( \int_{-\infty}^\infty f(t) \cos(\omega(t-x)) dt \right) d\omega$

For an odd function $f(t)$:
$\int_{-\infty}^\infty f(t) \cos(\omega(t-x)) dt = \int_{-\infty}^\infty f(t) (\cos(\omega t)\cos(\omega x) + \sin(\omega t)\sin(\omega x)) dt$
$= \cos(\omega x) \int_{-\infty}^\infty f(t)\cos(\omega t) dt + \sin(\omega x) \int_{-\infty}^\infty f(t)\sin(\omega t) dt$
Since $f(t)$ is odd, $f(t)\cos(\omega t)$ is odd, so $\int_{-\infty}^\infty f(t)\cos(\omega t) dt = 0$.
Since $f(t)$ is odd, $f(t)\sin(\omega t)$ is even, so $\int_{-\infty}^\infty f(t)\sin(\omega t) dt = 2 \int_0^\infty f(t)\sin(\omega t) dt$.

So, $\int_{-\infty}^\infty f(t) \cos(\omega(t-x)) dt = \sin(\omega x) \left( 2 \int_0^\infty f(t)\sin(\omega t) dt \right)$.

Let $B(\omega) = \int_0^\infty f(t) \sin(\omega t) dt$.
Then, $\int_{-\infty}^\infty f(t) \cos(\omega(t-x)) dt = \sin(\omega x) [2 B(\omega)]$.

Substituting this into the Fourier Integral:
$f(x) = \frac{1}{\pi} \int_0^\infty [\sin(\omega x) 2 B(\omega)] d\omega$
$f(x) = \frac{2}{\pi} \int_0^\infty B(\omega) \sin(\omega x) d\omega$.

**Fourier Sine Integral Formula:**
If $f(x)$ is an odd function, it can be represented by the Fourier Sine Integral:

$$ f(x) = \frac{2}{\pi} \int_0^\infty B(\omega) \sin(\omega x) d\omega $$

where the **Fourier Sine Transform** of $f(x)$ is:

$$ B(\omega) = \int_0^\infty f(t) \sin(\omega t) dt $$

**Conditions for Existence:**
The Fourier Sine Integral converges if $f(x)$ is piecewise continuous and absolutely integrable over $[0, \infty)$, i.e., $\int_0^\infty |f(x)| dx < \infty$.

**Example 3:** Find the Fourier Sine Integral of $f(x) = xe^{-ax}$ for $x \ge 0$, where $a > 0$.
This function is defined for $x \ge 0$. We will use the formula applied to the function on $[0, \infty)$.

1.  **Calculate $B(\omega)$:**
    $B(\omega) = \int_0^\infty f(t) \sin(\omega t) dt = \int_0^\infty te^{-at} \sin(\omega t) dt$

    We can use integration by parts twice or look up the integral:
    $\int_0^\infty x e^{-ax} \sin(bx) dx = \frac{2ab}{(a^2+b^2)^2}$

    So, $B(\omega) = \frac{2a\omega}{(a^2 + \omega^2)^2}$.

2.  **Substitute into the Fourier Sine Integral formula:**
    $f(x) = \frac{2}{\pi} \int_0^\infty B(\omega) \sin(\omega x) d\omega$
    $xe^{-ax} = \frac{2}{\pi} \int_0^\infty \frac{2a\omega}{(a^2 + \omega^2)^2} \sin(\omega x) d\omega$

    This is the Fourier Sine Integral representation of $xe^{-ax}$ for $x \ge 0$.

**Example 4:** Find the Fourier Sine Integral of $f(x) = \begin{cases} 1 & \text{if } 0 \le x \le 1 \\ 0 & \text{if } x > 1 \end{cases}$.
This function is defined for $x \ge 0$.

1.  **Calculate $B(\omega)$:**
    $B(\omega) = \int_0^\infty f(t) \sin(\omega t) dt = \int_0^1 1 \cdot \sin(\omega t) dt + \int_1^\infty 0 \cdot \sin(\omega t) dt$
    $B(\omega) = \int_0^1 \sin(\omega t) dt$

    If $\omega = 0$, $B(0) = \int_0^1 0 dt = 0$.
    If $\omega \neq 0$, $B(\omega) = \left[ \frac{-\cos(\omega t)}{\omega} \right]_0^1 = \frac{-\cos(\omega) + 1}{\omega} = \frac{1 - \cos(\omega)}{\omega}$.

2.  **Substitute into the Fourier Sine Integral formula:**
    $f(x) = \frac{2}{\pi} \int_0^\infty B(\omega) \sin(\omega x) d\omega$
    $f(x) = \frac{2}{\pi} \int_0^\infty \frac{1 - \cos(\omega)}{\omega} \sin(\omega x) d\omega$

    This is the Fourier Sine Integral representation of the given rectangular pulse.

---

### 4. Summary of Fourier Cosine and Sine Integrals

| Property            | Fourier Cosine Integral                                   | Fourier Sine Integral                                     |
| :------------------ | :-------------------------------------------------------- | :-------------------------------------------------------- |
| **Function Type**   | Even functions defined on $(-\infty, \infty)$             | Odd functions defined on $(-\infty, \infty)$              |
| **Formula**         | $f(x) = \frac{2}{\pi} \int_0^\infty A(\omega) \cos(\omega x) d\omega$ | $f(x) = \frac{2}{\pi} \int_0^\infty B(\omega) \sin(\omega x) d\omega$ |
| **Transform**       | $A(\omega) = \int_0^\infty f(t) \cos(\omega t) dt$        | $B(\omega) = \int_0^\infty f(t) \sin(\omega t) dt$        |
| **Integral Range**  | $\int_0^\infty$                                           | $\int_0^\infty$                                           |
| **Basis Functions** | $\cos(\omega x)$                                          | $\sin(\omega x)$                                          |
| **When to Use**     | When the function is even or you need an even extension.  | When the function is odd or you need an odd extension.    |

**Important Note:** When dealing with functions defined only on $[0, \infty)$, we often implicitly assume we are considering the Fourier Cosine or Sine integral representation of that function on $[0, \infty)$, which corresponds to the representation of its even or odd extension, respectively. The formulas derived using $A(\omega)$ and $B(\omega)$ directly from the interval $[0, \infty)$ are commonly used in practice for functions defined on $[0, \infty)$.

---

### 5. Practice Questions

**Instructions:** For each question, identify whether to use the Fourier Cosine or Sine Integral and then compute the corresponding transform ($A(\omega)$ or $B(\omega)$). You do not need to write out the full integral representation unless explicitly asked.

1.  Find the Fourier Cosine Transform of $f(x) = e^{-2x}$ for $x \ge 0$.
2.  Find the Fourier Sine Transform of $f(x) = e^{-3x}$ for $x \ge 0$.
3.  Find the Fourier Cosine Transform of $f(x) = \begin{cases} x & \text{if } 0 \le x \le 1 \\ 0 & \text{if } x > 1 \end{cases}$.
4.  Find the Fourier Sine Transform of $f(x) = \begin{cases} x & \text{if } 0 \le x \le 1 \\ 0 & \text{if } x > 1 \end{cases}$.
5.  Find the Fourier Cosine Transform of $f(x) = \cos(x)$ for $0 \le x \le \pi$, and $f(x) = 0$ for $x > \pi$.
6.  Find the Fourier Sine Transform of $f(x) = \sin(x)$ for $0 \le x \le \pi$, and $f(x) = 0$ for $x > \pi$.

---

### 6. Answers to Practice Questions

1.  **Function:** $f(x) = e^{-2x}$ ($x \ge 0$). This is typically treated for its Cosine Integral representation.
    **Type:** Fourier Cosine Transform.
    **Calculation:**
    $A(\omega) = \int_0^\infty e^{-2t} \cos(\omega t) dt$
    Using the formula $\int_0^\infty e^{-at} \cos(bt) dt = \frac{a}{a^2 + b^2}$:
    $A(\omega) = \frac{2}{2^2 + \omega^2} = \frac{2}{4 + \omega^2}$.

2.  **Function:** $f(x) = e^{-3x}$ ($x \ge 0$). This is typically treated for its Sine Integral representation.
    **Type:** Fourier Sine Transform.
    **Calculation:**
    $B(\omega) = \int_0^\infty e^{-3t} \sin(\omega t) dt$
    Using the formula $\int_0^\infty e^{-at} \sin(bt) dt = \frac{b}{a^2 + b^2}$:
    $B(\omega) = \frac{\omega}{3^2 + \omega^2} = \frac{\omega}{9 + \omega^2}$.

3.  **Function:** $f(x) = \begin{cases} x & \text{if } 0 \le x \le 1 \\ 0 & \text{if } x > 1 \end{cases}$ ($x \ge 0$).
    **Type:** Fourier Cosine Transform.
    **Calculation:**
    $A(\omega) = \int_0^\infty f(t) \cos(\omega t) dt = \int_0^1 t \cos(\omega t) dt$.
    Using integration by parts ($\int u dv = uv - \int v du$):
    Let $u = t$, $dv = \cos(\omega t) dt$. Then $du = dt$, $v = \frac{\sin(\omega t)}{\omega}$.
    $A(\omega) = \left[ t \frac{\sin(\omega t)}{\omega} \right]_0^1 - \int_0^1 \frac{\sin(\omega t)}{\omega} dt$
    $A(\omega) = \left( \frac{1 \cdot \sin(\omega)}{\omega} - 0 \right) - \frac{1}{\omega} \int_0^1 \sin(\omega t) dt$
    $A(\omega) = \frac{\sin(\omega)}{\omega} - \frac{1}{\omega} \left[ \frac{-\cos(\omega t)}{\omega} \right]_0^1$
    $A(\omega) = \frac{\sin(\omega)}{\omega} - \frac{1}{\omega} \left( \frac{-\cos(\omega)}{\omega} - \frac{-1}{\omega} \right)$
    $A(\omega) = \frac{\sin(\omega)}{\omega} + \frac{\cos(\omega)}{\omega^2} - \frac{1}{\omega^2}$
    $A(\omega) = \frac{\omega \sin(\omega) + \cos(\omega) - 1}{\omega^2}$.

4.  **Function:** $f(x) = \begin{cases} x & \text{if } 0 \le x \le 1 \\ 0 & \text{if } x > 1 \end{cases}$ ($x \ge 0$).
    **Type:** Fourier Sine Transform.
    **Calculation:**
    $B(\omega) = \int_0^\infty f(t) \sin(\omega t) dt = \int_0^1 t \sin(\omega t) dt$.
    Using integration by parts:
    Let $u = t$, $dv = \sin(\omega t) dt$. Then $du = dt$, $v = \frac{-\cos(\omega t)}{\omega}$.
    $B(\omega) = \left[ t \frac{-\cos(\omega t)}{\omega} \right]_0^1 - \int_0^1 \frac{-\cos(\omega t)}{\omega} dt$
    $B(\omega) = \left( \frac{1 \cdot (-\cos(\omega))}{\omega} - 0 \right) + \frac{1}{\omega} \int_0^1 \cos(\omega t) dt$
    $B(\omega) = \frac{-\cos(\omega)}{\omega} + \frac{1}{\omega} \left[ \frac{\sin(\omega t)}{\omega} \right]_0^1$
    $B(\omega) = \frac{-\cos(\omega)}{\omega} + \frac{1}{\omega} \left( \frac{\sin(\omega)}{\omega} - 0 \right)$
    $B(\omega) = \frac{-\cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2}$
    $B(\omega) = \frac{\omega \sin(\omega) - \omega^2 \cos(\omega)}{\omega^2}$ (Incorrect manipulation, should be: $B(\omega) = \frac{\omega \sin(\omega) - \omega \cos(\omega)}{\omega^2}$ if we simplify $\frac{1}{\omega}$ outside; let's re-calculate)

    Recalculating $B(\omega) = \frac{-\cos(\omega)}{\omega} + \frac{\sin(\omega)}{\omega^2}$:
    $B(\omega) = \frac{\omega(-\cos(\omega)) + \sin(\omega)}{\omega^2} = \frac{\sin(\omega) - \omega \cos(\omega)}{\omega^2}$.

5.  **Function:** $f(x) = \begin{cases} \cos(x) & \text{if } 0 \le x \le \pi \\ 0 & \text{if } x > \pi \end{cases}$.
    **Type:** Fourier Cosine Transform.
    **Calculation:**
    $A(\omega) = \int_0^\infty f(t) \cos(\omega t) dt = \int_0^\pi \cos(t) \cos(\omega t) dt$.
    Using the product-to-sum formula: $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$.
    $A(\omega) = \int_0^\pi \frac{1}{2}[\cos(t-\omega t) + \cos(t+\omega t)] dt$
    $A(\omega) = \frac{1}{2} \int_0^\pi [\cos((1-\omega)t) + \cos((1+\omega)t)] dt$.

    **Case 1: $\omega = 1$**
    $A(1) = \frac{1}{2} \int_0^\pi [\cos(0) + \cos(2t)] dt = \frac{1}{2} \int_0^\pi [1 + \cos(2t)] dt$
    $A(1) = \frac{1}{2} \left[ t + \frac{\sin(2t)}{2} \right]_0^\pi = \frac{1}{2} \left[ (\pi + 0) - (0 + 0) \right] = \frac{\pi}{2}$.

    **Case 2: $\omega \neq 1$ and $\omega \neq -1$ (which is true since $\omega \ge 0$)**
    $A(\omega) = \frac{1}{2} \left[ \frac{\sin((1-\omega)t)}{1-\omega} + \frac{\sin((1+\omega)t)}{1+\omega} \right]_0^\pi$
    $A(\omega) = \frac{1}{2} \left[ \left(\frac{\sin((1-\omega)\pi)}{1-\omega} + \frac{\sin((1+\omega)\pi)}{1+\omega}\right) - (0+0) \right]$.
    Since $\sin(n\pi) = 0$ for integer $n$:
    If $1-\omega$ is an integer (i.e., $\omega = 0, -1, 2, -2, ...$), then $\sin((1-\omega)\pi) = 0$.
    If $1+\omega$ is an integer (i.e., $\omega = 0, 2, -2, 4, ...$), then $\sin((1+\omega)\pi) = 0$.
    Since $\omega \ge 0$, we consider $\omega = 0, 1, 2, ...$.

    *   If $\omega = 0$: $A(0) = \int_0^\pi \cos(t) dt = [\sin(t)]_0^\pi = 0$.
        Using the formula: $A(0) = \frac{1}{2} \left[ \frac{\sin(\pi)}{1} + \frac{\sin(\pi)}{1} \right] = 0$. (Matches)
    *   If $\omega = 1$: Handled above, $A(1) = \frac{\pi}{2}$.
    *   If $\omega = 2$: $A(2) = \frac{1}{2} \left[ \frac{\sin(-\pi)}{-1} + \frac{\sin(3\pi)}{3} \right] = 0$.
    *   If $\omega \neq 1$, then $1-\omega \neq 0$ and $1+\omega \neq 0$ (since $\omega \ge 0$).
        $A(\omega) = \frac{1}{2} \left[ \frac{\sin(\pi - \omega\pi)}{1-\omega} + \frac{\sin(\pi + \omega\pi)}{1+\omega} \right]$.
        Using $\sin(\pi - \theta) = \sin(\theta)$ and $\sin(\pi + \theta) = -\sin(\theta)$:
        $A(\omega) = \frac{1}{2} \left[ \frac{\sin(\omega\pi)}{1-\omega} - \frac{\sin(\omega\pi)}{1+\omega} \right]$
        $A(\omega) = \frac{\sin(\omega\pi)}{2} \left[ \frac{1}{1-\omega} - \frac{1}{1+\omega} \right]$
        $A(\omega) = \frac{\sin(\omega\pi)}{2} \left[ \frac{(1+\omega) - (1-\omega)}{(1-\omega)(1+\omega)} \right]$
        $A(\omega) = \frac{\sin(\omega\pi)}{2} \left[ \frac{2\omega}{1-\omega^2} \right] = \frac{\omega \sin(\omega\pi)}{1-\omega^2}$.

    So, $A(\omega) = \begin{cases} \frac{\pi}{2} & \text{if } \omega = 1 \\ \frac{\omega \sin(\omega\pi)}{1-\omega^2} & \text{if } \omega \neq 1 \end{cases}$.

6.  **Function:** $f(x) = \begin{cases} \sin(x) & \text{if } 0 \le x \le \pi \\ 0 & \text{if } x > \pi \end{cases}$.
    **Type:** Fourier Sine Transform.
    **Calculation:**
    $B(\omega) = \int_0^\infty f(t) \sin(\omega t) dt = \int_0^\pi \sin(t) \sin(\omega t) dt$.
    Using the product-to-sum formula: $\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$.
    $B(\omega) = \int_0^\pi \frac{1}{2}[\cos(t-\omega t) - \cos(t+\omega t)] dt$
    $B(\omega) = \frac{1}{2} \int_0^\pi [\cos((1-\omega)t) - \cos((1+\omega)t)] dt$.

    **Case 1: $\omega = 1$**
    $B(1) = \frac{1}{2} \int_0^\pi [\cos(0) - \cos(2t)] dt = \frac{1}{2} \int_0^\pi [1 - \cos(2t)] dt$
    $B(1) = \frac{1}{2} \left[ t - \frac{\sin(2t)}{2} \right]_0^\pi = \frac{1}{2} \left[ (\pi - 0) - (0 - 0) \right] = \frac{\pi}{2}$.

    **Case 2: $\omega \neq 1$ and $\omega \neq -1$**
    $B(\omega) = \frac{1}{2} \left[ \frac{\sin((1-\omega)t)}{1-\omega} - \frac{\sin((1+\omega)t)}{1+\omega} \right]_0^\pi$
    $B(\omega) = \frac{1}{2} \left[ \left(\frac{\sin((1-\omega)\pi)}{1-\omega} - \frac{\sin((1+\omega)\pi)}{1+\omega}\right) - (0-0) \right]$.
    Since $\sin(n\pi) = 0$ for integer $n$:
    *   If $\omega = 0$: $B(0) = \int_0^\pi \sin(t) \cdot 0 dt = 0$.
        Using the formula: $B(0) = \frac{1}{2} \left[ \frac{\sin(\pi)}{1} - \frac{\sin(\pi)}{1} \right] = 0$. (Matches)
    *   If $\omega = 1$: Handled above, $B(1) = \frac{\pi}{2}$.
    *   If $\omega = 2$: $B(2) = \frac{1}{2} \left[ \frac{\sin(-\pi)}{-1} - \frac{\sin(3\pi)}{3} \right] = 0$.
    *   If $\omega \neq 1$:
        $B(\omega) = \frac{1}{2} \left[ \frac{\sin(\pi - \omega\pi)}{1-\omega} - \frac{\sin(\pi + \omega\pi)}{1+\omega} \right]$
        $B(\omega) = \frac{1}{2} \left[ \frac{\sin(\omega\pi)}{1-\omega} - \frac{-\sin(\omega\pi)}{1+\omega} \right]$
        $B(\omega) = \frac{\sin(\omega\pi)}{2} \left[ \frac{1}{1-\omega} + \frac{1}{1+\omega} \right]$
        $B(\omega) = \frac{\sin(\omega\pi)}{2} \left[ \frac{(1+\omega) + (1-\omega)}{(1-\omega)(1+\omega)} \right]$
        $B(\omega) = \frac{\sin(\omega\pi)}{2} \left[ \frac{2}{1-\omega^2} \right] = \frac{\sin(\omega\pi)}{1-\omega^2}$.

    So, $B(\omega) = \begin{cases} \frac{\pi}{2} & \text{if } \omega = 1 \\ \frac{\sin(\omega\pi)}{1-\omega^2} & \text{if } \omega \neq 1 \end{cases}$.

---

### 7. Important Points to Remember

*   **Fourier Integral vs. Fourier Series:** Fourier Series for periodic functions (discrete frequencies), Fourier Integral for non-periodic functions over $(-\infty, \infty)$ (continuous frequencies).
*   **Symmetry is Key:**
    *   **Even Function** $\implies$ use **Fourier Cosine Integral**.
    *   **Odd Function** $\implies$ use **Fourier Sine Integral**.
*   **The Formulas:**
    *   Cosine: $f(x) = \frac{2}{\pi} \int_0^\infty A(\omega) \cos(\omega x) d\omega$, where $A(\omega) = \int_0^\infty f(t) \cos(\omega t) dt$.
    *   Sine: $f(x) = \frac{2}{\pi} \int_0^\infty B(\omega) \sin(\omega x) d\omega$, where $B(\omega) = \int_0^\infty f(t) \sin(\omega t) dt$.
*   **Functions on $[0, \infty)$:** When a function is defined only on $[0, \infty)$, we often use the cosine integral if we want to represent the function itself, and the sine integral if we want to represent an odd extension of the function. The formulas for $A(\omega)$ and $B(\omega)$ are calculated from the function on $[0, \infty)$.
*   **Convergence:** The function $f(x)$ must be absolutely integrable over $[0, \infty)$ for the transforms $A(\omega)$ and $B(\omega)$ to exist.
*   **Integral Calculation:** Be proficient in integration techniques, especially integration by parts, to calculate $A(\omega)$ and $B(\omega)$. Standard integral formulas for exponential multiplied by sine/cosine are also very useful.
*   **Special Cases in Integration:** Pay attention to cases where the denominator in the transform formula might be zero (e.g., $\omega=0$ or $\omega=1$ in the examples). Sometimes these require separate evaluation.

---
