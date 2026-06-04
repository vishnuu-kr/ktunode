---
title: "Fourier Cosine and Sine integrals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a5a"
status: "completed"
scrapedAt: "2026-05-23T16:14:24.028Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 1: Fourier Integral

### Topic: Fourier Cosine and Sine Integrals

---

### Learning Outcomes:

*   Understand the conditions under which a function can be represented by a Fourier Cosine integral.
*   Understand the conditions under which a function can be represented by a Fourier Sine integral.
*   Be able to derive and apply the formulas for Fourier Cosine and Sine integrals.
*   Be able to compute Fourier Cosine and Sine integrals for given functions.
*   Understand the relationship between Fourier Cosine/Sine integrals and the Fourier integral of an even/odd function.

---

### Course Outcomes Alignment:

This topic directly contributes to **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.** Specifically, Fourier Cosine and Sine integrals are specialized forms of the Fourier integral, crucial for analyzing functions defined on semi-infinite intervals or functions with specific symmetry properties, common in electrical and physical science applications like signal processing, heat transfer, and wave phenomena. The knowledge level (K3) implies understanding and applying these concepts.

---

### 1. Introduction to Fourier Integrals

The Fourier integral provides a way to represent functions that are not periodic, or are defined over an infinite interval, as a continuous superposition of sinusoids. This is a generalization of the Fourier series, which represents periodic functions.

**General Fourier Integral:**

For a function $f(x)$ that satisfies Dirichlet conditions on every finite interval, the Fourier integral is given by:

$$ f(x) = \frac{1}{\pi} \int_0^\infty [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega $$

where the Fourier coefficients are defined as:

$$ A(\omega) = \int_{-\infty}^\infty f(v) \cos(\omega v) dv $$
$$ B(\omega) = \int_{-\infty}^\infty f(v) \sin(\omega v) dv $$

This formula is derived from the limit of the Fourier series as the period tends to infinity.

---

### 2. Fourier Cosine Integral

The Fourier Cosine integral is used to represent functions $f(x)$ defined for $x \ge 0$ that are **even** functions. If $f(x)$ is even, then $f(-x) = f(x)$.

**Conditions for Fourier Cosine Integral:**

A function $f(x)$ defined for $x \ge 0$ can be represented by a Fourier Cosine integral if it satisfies the following:

1.  $f(x)$ is of bounded variation on every finite interval $[0, L]$.
2.  $f(x)$ is absolutely integrable on $[0, \infty)$, i.e., $\int_0^\infty |f(x)| dx < \infty$.
3.  $f(x)$ is an **even function**.

**Derivation:**

Consider an even function $f(x)$ defined for all $x$. Its Fourier integral is:

$$ f(x) = \frac{1}{\pi} \int_0^\infty [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega $$

where:
$$ A(\omega) = \int_{-\infty}^\infty f(v) \cos(\omega v) dv $$
$$ B(\omega) = \int_{-\infty}^\infty f(v) \sin(\omega v) dv $$

Since $f(v)$ is even, $f(v) \sin(\omega v)$ is odd, so $B(\omega) = 0$.
Since $f(v)$ is even, $f(v) \cos(\omega v)$ is even, so $A(\omega) = 2 \int_0^\infty f(v) \cos(\omega v) dv$.

Substituting these into the Fourier integral:

$$ f(x) = \frac{1}{\pi} \int_0^\infty \left( 2 \int_0^\infty f(v) \cos(\omega v) dv \right) \cos(\omega x) d\omega $$
$$ f(x) = \frac{2}{\pi} \int_0^\infty \left( \int_0^\infty f(v) \cos(\omega v) dv \right) \cos(\omega x) d\omega $$

This is the Fourier Cosine integral representation of an even function $f(x)$ for $x \ge 0$.

**Fourier Cosine Integral Formula:**

For a function $f(x)$ defined for $x \ge 0$, if $f(x)$ is even, its Fourier Cosine integral is:

$$ f(x) = \frac{2}{\pi} \int_0^\infty C_c(\omega) \cos(\omega x) d\omega $$

where the Fourier Cosine transform coefficient is:

$$ C_c(\omega) = \int_0^\infty f(v) \cos(\omega v) dv $$

**Important Note:** If the function $f(x)$ is originally defined only for $x \ge 0$, we can consider an *even extension* of $f(x)$ to the entire real line to use the general Fourier integral. Alternatively, the Fourier Cosine integral is directly applicable if the problem context implies symmetry.

**Example 1:** Find the Fourier Cosine integral of $f(x) = e^{-ax}$ for $x \ge 0$, where $a > 0$.

Here, $f(x)$ is defined for $x \ge 0$. If we consider its even extension, it would be $|x|$ which is not $e^{-a|x|}$. So, we directly apply the Fourier Cosine integral formula assuming $f(x)$ represents the function for $x \ge 0$.

$$ C_c(\omega) = \int_0^\infty e^{-av} \cos(\omega v) dv $$

This is a standard integral. We can solve it using integration by parts twice or by using the formula $\int e^{bx} \cos(cx) dx = \frac{e^{bx}}{b^2+c^2}(b \cos(cx) + c \sin(cx))$.

Here, $b = -a$ and $c = \omega$.

$$ C_c(\omega) = \left[ \frac{e^{-av}}{(-a)^2 + \omega^2}(-a \cos(\omega v) + \omega \sin(\omega v)) \right]_0^\infty $$

As $v \to \infty$, $e^{-av} \to 0$ since $a > 0$.
So, $C_c(\omega) = 0 - \frac{e^0}{a^2 + \omega^2}(-a \cos(0) + \omega \sin(0))$
$C_c(\omega) = - \frac{1}{a^2 + \omega^2}(-a \cdot 1 + \omega \cdot 0)$
$C_c(\omega) = - \frac{1}{a^2 + \omega^2}(-a) = \frac{a}{a^2 + \omega^2}$

Now, the Fourier Cosine integral is:

$$ f(x) = \frac{2}{\pi} \int_0^\infty \frac{a}{a^2 + \omega^2} \cos(\omega x) d\omega $$

So, $e^{-ax} = \frac{2a}{\pi} \int_0^\infty \frac{\cos(\omega x)}{a^2 + \omega^2} d\omega$ for $x \ge 0$.

This is a well-known integral representation of the exponential function.

---

### 3. Fourier Sine Integral

The Fourier Sine integral is used to represent functions $f(x)$ defined for $x \ge 0$ that are **odd** functions. If $f(x)$ is odd, then $f(-x) = -f(x)$.

**Conditions for Fourier Sine Integral:**

A function $f(x)$ defined for $x \ge 0$ can be represented by a Fourier Sine integral if it satisfies the following:

1.  $f(x)$ is of bounded variation on every finite interval $[0, L]$.
2.  $f(x)$ is absolutely integrable on $[0, \infty)$, i.e., $\int_0^\infty |f(x)| dx < \infty$.
3.  $f(x)$ is an **odd function**.

**Derivation:**

Consider an odd function $f(x)$ defined for all $x$. Its Fourier integral is:

$$ f(x) = \frac{1}{\pi} \int_0^\infty [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega $$

where:
$$ A(\omega) = \int_{-\infty}^\infty f(v) \cos(\omega v) dv $$
$$ B(\omega) = \int_{-\infty}^\infty f(v) \sin(\omega v) dv $$

Since $f(v)$ is odd, $f(v) \cos(\omega v)$ is odd, so $A(\omega) = 0$.
Since $f(v)$ is odd, $f(v) \sin(\omega v)$ is even, so $B(\omega) = 2 \int_0^\infty f(v) \sin(\omega v) dv$.

Substituting these into the Fourier integral:

$$ f(x) = \frac{1}{\pi} \int_0^\infty \left( 2 \int_0^\infty f(v) \sin(\omega v) dv \right) \sin(\omega x) d\omega $$
$$ f(x) = \frac{2}{\pi} \int_0^\infty \left( \int_0^\infty f(v) \sin(\omega v) dv \right) \sin(\omega x) d\omega $$

This is the Fourier Sine integral representation of an odd function $f(x)$ for $x \ge 0$.

**Fourier Sine Integral Formula:**

For a function $f(x)$ defined for $x \ge 0$, if $f(x)$ is odd, its Fourier Sine integral is:

$$ f(x) = \frac{2}{\pi} \int_0^\infty C_s(\omega) \sin(\omega x) d\omega $$

where the Fourier Sine transform coefficient is:

$$ C_s(\omega) = \int_0^\infty f(v) \sin(\omega v) dv $$

**Important Note:** Similar to the Cosine integral, if the function $f(x)$ is originally defined only for $x \ge 0$, we consider its *odd extension* to the entire real line, or directly apply the formula if the problem context implies odd symmetry.

**Example 2:** Find the Fourier Sine integral of $f(x) = e^{-ax}$ for $x \ge 0$, where $a > 0$.

This is the same function as in Example 1, but now we are looking for its Fourier Sine integral. This implies we are considering an odd function that matches $e^{-ax}$ for $x > 0$. However, the Fourier Sine integral is typically applied to functions that are defined for $x \ge 0$ and are *expected* to be represented by a sine series/integral due to their behavior or the nature of the problem. If the function itself is specified as $f(x) = e^{-ax}$ for $x \ge 0$, its Fourier Sine integral represents its odd extension. Let's calculate it.

$$ C_s(\omega) = \int_0^\infty e^{-av} \sin(\omega v) dv $$

Using the formula $\int e^{bx} \sin(cx) dx = \frac{e^{bx}}{b^2+c^2}(b \sin(cx) - c \cos(cx))$ with $b = -a$ and $c = \omega$.

$$ C_s(\omega) = \left[ \frac{e^{-av}}{(-a)^2 + \omega^2}(-a \sin(\omega v) - \omega \cos(\omega v)) \right]_0^\infty $$

As $v \to \infty$, $e^{-av} \to 0$.
So, $C_s(\omega) = 0 - \frac{e^0}{a^2 + \omega^2}(-a \sin(0) - \omega \cos(0))$
$C_s(\omega) = - \frac{1}{a^2 + \omega^2}(0 - \omega \cdot 1)$
$C_s(\omega) = - \frac{1}{a^2 + \omega^2}(-\omega) = \frac{\omega}{a^2 + \omega^2}$

Now, the Fourier Sine integral is:

$$ f(x) = \frac{2}{\pi} \int_0^\infty \frac{\omega}{a^2 + \omega^2} \sin(\omega x) d\omega $$

So, for $x \ge 0$, $e^{-ax} = \frac{2}{\pi} \int_0^\infty \frac{\omega \sin(\omega x)}{a^2 + \omega^2} d\omega$.
The function represented by this integral on the interval $(-\infty, \infty)$ is actually $e^{-a|x|}$ if $f(x)=e^{-ax}$ was considered for $x\ge 0$ and its even extension. If it were considered for its odd extension, it would be $x e^{-ax}$ for $x>0$ and $-(-x)e^{-a(-x)}$ for $x<0$. This integral represents the function $f(x)=e^{-ax}$ for $x\ge 0$ and $f(x)=-e^{ax}$ for $x<0$, which is an odd function.

Let's clarify. If $f(x)$ is defined for $x \ge 0$, then $C_s(\omega)$ is calculated using this $f(x)$. The resulting integral $\frac{2}{\pi} \int_0^\infty C_s(\omega) \sin(\omega x) d\omega$ will reconstruct the original $f(x)$ for $x \ge 0$. The integral itself can be extended for $x < 0$. If we consider an odd extension of $f(x)$, say $g(x)$, such that $g(x) = f(x)$ for $x \ge 0$ and $g(x) = -f(-x)$ for $x < 0$. Then the Fourier Sine integral of $f(x)$ is the Fourier integral of $g(x)$.

**Example 3:** Find the Fourier Sine integral of $f(x) = x$ for $0 \le x \le 1$ and $f(x) = 0$ for $x > 1$.

$$ C_s(\omega) = \int_0^\infty f(v) \sin(\omega v) dv = \int_0^1 v \sin(\omega v) dv $$

Using integration by parts: $\int u dv = uv - \int v du$.
Let $u = v$, $dv = \sin(\omega v) dv$.
Then $du = dv$, $v = -\frac{\cos(\omega v)}{\omega}$.

$$ C_s(\omega) = \left[ v \left(-\frac{\cos(\omega v)}{\omega}\right) \right]_0^1 - \int_0^1 \left(-\frac{\cos(\omega v)}{\omega}\right) dv $$
$$ C_s(\omega) = \left[ -\frac{v \cos(\omega v)}{\omega} \right]_0^1 + \frac{1}{\omega} \int_0^1 \cos(\omega v) dv $$
$$ C_s(\omega) = \left(-\frac{1 \cos(\omega \cdot 1)}{\omega} - 0\right) + \frac{1}{\omega} \left[ \frac{\sin(\omega v)}{\omega} \right]_0^1 $$
$$ C_s(\omega) = -\frac{\cos(\omega)}{\omega} + \frac{1}{\omega} \left( \frac{\sin(\omega)}{\omega} - 0 \right) $$
$$ C_s(\omega) = \frac{\sin(\omega)}{\omega^2} - \frac{\cos(\omega)}{\omega} $$

So, the Fourier Sine integral is:

$$ f(x) = \frac{2}{\pi} \int_0^\infty \left( \frac{\sin(\omega)}{\omega^2} - \frac{\cos(\omega)}{\omega} \right) \sin(\omega x) d\omega $$

This integral represents $f(x)$ for $x \ge 0$.

---

### 4. Relationship with Fourier Integral of Even/Odd Functions

*   **Fourier Cosine Integral:** If $f(x)$ is defined for $x \ge 0$, its Fourier Cosine integral is equivalent to the Fourier integral of its even extension, $f_e(x)$, where $f_e(x) = f(|x|)$.
    *   $f_e(x) = f(x)$ for $x \ge 0$ and $f_e(x) = f(-x)$ for $x < 0$.
    *   Since $f_e(x)$ is even, its $B(\omega)$ coefficient in the Fourier integral is zero, and $A_e(\omega) = 2 \int_0^\infty f_e(v) \cos(\omega v) dv = 2 \int_0^\infty f(v) \cos(\omega v) dv$, which matches $2C_c(\omega)$.
    *   Thus, $f_e(x) = \frac{1}{\pi} \int_0^\infty A_e(\omega) \cos(\omega x) d\omega = \frac{2}{\pi} \int_0^\infty C_c(\omega) \cos(\omega x) d\omega$.

*   **Fourier Sine Integral:** If $f(x)$ is defined for $x \ge 0$, its Fourier Sine integral is equivalent to the Fourier integral of its odd extension, $f_o(x)$, where $f_o(x) = f(x)$ for $x \ge 0$ and $f_o(x) = -f(-x)$ for $x < 0$.
    *   Since $f_o(x)$ is odd, its $A(\omega)$ coefficient in the Fourier integral is zero, and $B_o(\omega) = 2 \int_0^\infty f_o(v) \sin(\omega v) dv = 2 \int_0^\infty f(v) \sin(\omega v) dv$, which matches $2C_s(\omega)$.
    *   Thus, $f_o(x) = \frac{1}{\pi} \int_0^\infty B_o(\omega) \sin(\omega x) d\omega = \frac{2}{\pi} \int_0^\infty C_s(\omega) \sin(\omega x) d\omega$.

**In essence:**

*   The Fourier Cosine integral is for functions defined on $x \ge 0$ that behave like **even** functions.
*   The Fourier Sine integral is for functions defined on $x \ge 0$ that behave like **odd** functions.

---

### 5. Key Concepts and Definitions Recap

*   **Fourier Integral:** Represents non-periodic functions as a continuous sum of sinusoids.
    $$ f(x) = \frac{1}{\pi} \int_0^\infty [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega $$
    $$ A(\omega) = \int_{-\infty}^\infty f(v) \cos(\omega v) dv, \quad B(\omega) = \int_{-\infty}^\infty f(v) \sin(\omega v) dv $$
*   **Fourier Cosine Integral:** For $f(x)$ on $[0, \infty)$, representing an even behavior.
    $$ f(x) = \frac{2}{\pi} \int_0^\infty C_c(\omega) \cos(\omega x) d\omega $$
    $$ C_c(\omega) = \int_0^\infty f(v) \cos(\omega v) dv $$
*   **Fourier Sine Integral:** For $f(x)$ on $[0, \infty)$, representing an odd behavior.
    $$ f(x) = \frac{2}{\pi} \int_0^\infty C_s(\omega) \sin(\omega x) d\omega $$
    $$ C_s(\omega) = \int_0^\infty f(v) \sin(\omega v) dv $$
*   **Dirichlet Conditions:** For a function $f(x)$ to have a Fourier representation, it must be piecewise continuous, have a finite number of discontinuities and extrema in any finite interval, and be absolutely integrable.

---

### 6. Practice Questions

**Question 1:** Find the Fourier Cosine integral of $f(x) = e^{-x}$ for $x \ge 0$.
*(Hint: This is the same as Example 1 with $a=1$)*

**Answer 1:**
$C_c(\omega) = \int_0^\infty e^{-v} \cos(\omega v) dv = \frac{1}{1 + \omega^2}$
$f(x) = \frac{2}{\pi} \int_0^\infty \frac{\cos(\omega x)}{1 + \omega^2} d\omega$

**Question 2:** Find the Fourier Sine integral of $f(x) = \frac{1}{1+x^2}$ for $x \ge 0$.
*(Hint: You will need to evaluate $\int_0^\infty \frac{\sin(\omega v)}{1+v^2} dv$)*

**Answer 2:**
$C_s(\omega) = \int_0^\infty \frac{\sin(\omega v)}{1+v^2} dv$. This integral is known to be $\frac{\pi}{2} e^{-\omega}$ for $\omega \ge 0$.
$f(x) = \frac{2}{\pi} \int_0^\infty \frac{\pi}{2} e^{-\omega} \sin(\omega x) d\omega = \int_0^\infty e^{-\omega} \sin(\omega x) d\omega$.
Let's verify this by calculating the integral directly:
$C_s(\omega) = \int_0^\infty \frac{\sin(\omega v)}{1+v^2} dv$. This integral is $\frac{\pi}{2} e^{-\omega}$ for $\omega \ge 0$.
So, $f(x) = \frac{2}{\pi} \int_0^\infty \frac{\pi}{2} e^{-\omega} \sin(\omega x) d\omega = \int_0^\infty e^{-\omega} \sin(\omega x) d\omega$.
Evaluating $\int_0^\infty e^{-v} \sin(\omega v) dv$:
$C_s(\omega)$ here is the Fourier sine coefficient for the function $f(x)=\frac{1}{1+x^2}$. So we need to calculate $\int_0^\infty \frac{1}{1+v^2} \sin(\omega v) dv$.
Let's use the standard formula: $\int_0^\infty \frac{\sin(ax)}{x^2+b^2} dx = \frac{\pi}{2b} e^{-ab}$ for $a>0, b>0$.
Here, our variable is $v$, coefficient of $v$ in $\sin$ is $\omega$, and the denominator is $1+v^2$. So $a=\omega$ and $b=1$.
Thus, $C_s(\omega) = \int_0^\infty \frac{\sin(\omega v)}{1+v^2} dv = \frac{\pi}{2(1)} e^{-\omega(1)} = \frac{\pi}{2} e^{-\omega}$.
The Fourier Sine integral is:
$f(x) = \frac{2}{\pi} \int_0^\infty C_s(\omega) \sin(\omega x) d\omega = \frac{2}{\pi} \int_0^\infty \frac{\pi}{2} e^{-\omega} \sin(\omega x) d\omega = \int_0^\infty e^{-\omega} \sin(\omega x) d\omega$.
This represents the function $f(x) = \frac{1}{1+x^2}$ for $x \ge 0$.

**Question 3:** Find the Fourier Cosine integral of $f(x) = 1$ for $0 \le x \le 1$ and $f(x) = 0$ for $x > 1$.

**Answer 3:**
$C_c(\omega) = \int_0^\infty f(v) \cos(\omega v) dv = \int_0^1 1 \cdot \cos(\omega v) dv$
$C_c(\omega) = \left[ \frac{\sin(\omega v)}{\omega} \right]_0^1 = \frac{\sin(\omega)}{\omega}$ (for $\omega \ne 0$)
For $\omega = 0$, $C_c(0) = \int_0^1 1 dv = 1$. The expression $\frac{\sin(\omega)}{\omega}$ tends to 1 as $\omega \to 0$.
So, $f(x) = \frac{2}{\pi} \int_0^\infty \frac{\sin(\omega)}{\omega} \cos(\omega x) d\omega$.
This integral represents the function $f(x)$ for $x \ge 0$.

**Question 4:** If $f(x) = \begin{cases} \sin(x), & 0 \le x \le \pi \\ 0, & x > \pi \end{cases}$, find its Fourier Sine integral.

**Answer 4:**
$C_s(\omega) = \int_0^\infty f(v) \sin(\omega v) dv = \int_0^\pi \sin(v) \sin(\omega v) dv$.
Using the product-to-sum identity: $\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$.
$C_s(\omega) = \frac{1}{2} \int_0^\pi [\cos((1-\omega)v) - \cos((1+\omega)v)] dv$.

Case 1: $\omega \ne 1$.
$C_s(\omega) = \frac{1}{2} \left[ \frac{\sin((1-\omega)v)}{1-\omega} - \frac{\sin((1+\omega)v)}{1+\omega} \right]_0^\pi$
$C_s(\omega) = \frac{1}{2} \left[ \left(\frac{\sin(\pi(1-\omega))}{1-\omega} - \frac{\sin(\pi(1+\omega))}{1+\omega}\right) - (0-0) \right]$
Since $\sin(\pi - \pi\omega) = \sin(\pi\omega)$ and $\sin(\pi + \pi\omega) = -\sin(\pi\omega)$:
$C_s(\omega) = \frac{1}{2} \left[ \frac{\sin(\pi\omega)}{1-\omega} - \frac{-\sin(\pi\omega)}{1+\omega} \right]$
$C_s(\omega) = \frac{\sin(\pi\omega)}{2} \left[ \frac{1}{1-\omega} + \frac{1}{1+\omega} \right]$
$C_s(\omega) = \frac{\sin(\pi\omega)}{2} \left[ \frac{1+\omega + 1-\omega}{(1-\omega)(1+\omega)} \right] = \frac{\sin(\pi\omega)}{2} \left[ \frac{2}{1-\omega^2} \right]$
$C_s(\omega) = \frac{\sin(\pi\omega)}{1-\omega^2}$ for $\omega \ne 1$.

Case 2: $\omega = 1$.
$C_s(1) = \int_0^\pi \sin(v) \sin(v) dv = \int_0^\pi \sin^2(v) dv$.
$C_s(1) = \int_0^\pi \frac{1-\cos(2v)}{2} dv = \frac{1}{2} \left[ v - \frac{\sin(2v)}{2} \right]_0^\pi = \frac{1}{2} (\pi - 0) = \frac{\pi}{2}$.
Check the limit of $C_s(\omega)$ as $\omega \to 1$: $\lim_{\omega \to 1} \frac{\sin(\pi\omega)}{1-\omega^2} = \lim_{\omega \to 1} \frac{\pi \cos(\pi\omega)}{-2\omega} = \frac{\pi \cos(\pi)}{-2} = \frac{-\pi}{-2} = \frac{\pi}{2}$. So the formula is consistent.

The Fourier Sine integral is:
$f(x) = \frac{2}{\pi} \int_0^\infty \frac{\sin(\pi\omega)}{1-\omega^2} \sin(\omega x) d\omega$ for $x \ge 0$.

---

### 7. Important Points to Remember

*   The Fourier Cosine integral is used for functions defined on $[0, \infty)$ that are assumed to be **even**.
*   The Fourier Sine integral is used for functions defined on $[0, \infty)$ that are assumed to be **odd**.
*   The integrals for $C_c(\omega)$ and $C_s(\omega)$ are definite integrals from $0$ to $\infty$.
*   When calculating the Fourier integral coefficients, pay close attention to the limits of integration and the properties of the function (even/odd).
*   The Fourier integral of an even function $f(x)$ is $\frac{2}{\pi} \int_0^\infty (\int_0^\infty f(v) \cos(\omega v) dv) \cos(\omega x) d\omega$.
*   The Fourier integral of an odd function $f(x)$ is $\frac{2}{\pi} \int_0^\infty (\int_0^\infty f(v) \sin(\omega v) dv) \sin(\omega x) d\omega$.
*   These forms are useful for solving partial differential equations on semi-infinite domains, particularly for boundary conditions of the first (Dirichlet) or second (Neumann) kind.

---
