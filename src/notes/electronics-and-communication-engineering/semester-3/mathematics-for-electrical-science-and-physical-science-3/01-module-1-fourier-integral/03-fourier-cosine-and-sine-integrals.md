---
title: "Fourier Cosine and Sine integrals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 1: Fourier Integral"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe251"
status: "completed"
scrapedAt: "2026-05-23T17:46:53.890Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

### Module 1: Fourier Integral

#### Topic: Fourier Cosine and Sine Integrals

---

**Introduction:**

The Fourier Integral provides a way to represent functions that are not periodic, or periodic over an infinitely long interval, as a superposition of sinusoids. This is particularly useful in analyzing signals and physical phenomena in electrical and physical sciences, such as heat conduction, wave propagation, and signal processing. When dealing with functions defined over semi-infinite or infinite intervals, and possessing certain symmetry properties, we can simplify the Fourier Integral by considering Fourier Cosine and Sine Integrals.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the concept of the Fourier Integral for functions defined on $(-\infty, \infty)$.
*   Derive and understand the conditions for the existence of Fourier Cosine and Sine Integrals.
*   Compute Fourier Cosine and Sine Integrals for various functions.
*   Apply Fourier Cosine and Sine Integrals to solve problems related to functions defined on semi-infinite intervals.
*   Relate Fourier Cosine and Sine Integrals to the Fourier Transforms of even and odd functions.

---

### 1. The Fourier Integral

**1.1 Motivation:**

Fourier Series represents a periodic function as a sum of sines and cosines. What if the function is not periodic, or we are interested in its representation over an infinite interval $(-\infty, \infty)$? The Fourier Integral extends this idea.

Consider a function $f(x)$ defined on $(-\infty, \infty)$. If we consider a finite interval $[-L, L]$ and form its Fourier series, then let $L \to \infty$. This limiting process leads to the Fourier Integral.

**1.2 Definition:**

The Fourier Integral of a function $f(x)$ defined on $(-\infty, \infty)$ is given by:

$f(x) = \frac{1}{\pi} \int_0^\infty [A(\omega) \cos(\omega x) + B(\omega) \sin(\omega x)] d\omega$

where $A(\omega)$ and $B(\omega)$ are the Fourier coefficients, defined as:

$A(\omega) = \int_{-\infty}^\infty f(t) \cos(\omega t) dt$

$B(\omega) = \int_{-\infty}^\infty f(t) \sin(\omega t) dt$

**1.3 Conditions for Existence:**

The Fourier Integral of $f(x)$ exists if $f(x)$ satisfies the following conditions (similar to Dirichlet conditions for Fourier Series):

*   $f(x)$ is absolutely integrable over $(-\infty, \infty)$, i.e., $\int_{-\infty}^\infty |f(x)| dx < \infty$.
*   $f(x)$ has a finite number of discontinuities in every finite interval.
*   $f(x)$ has a finite number of maxima and minima in every finite interval.

If these conditions are met, the Fourier Integral converges to $f(x)$ at points of continuity and to the average of the left and right limits at points of discontinuity.

**1.4 Relation to Fourier Transforms:**

The Fourier Integral can be expressed in terms of the Fourier Transforms. Let:

*   $F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_0^\infty f(t) \cos(\omega t) dt$ (Cosine Transform)
*   $F_s(\omega) = \sqrt{\frac{2}{\pi}} \int_0^\infty f(t) \sin(\omega t) dt$ (Sine Transform)

Then, the inverse relationships are:

*   $f(x) = \sqrt{\frac{2}{\pi}} \int_0^\infty F_c(\omega) \cos(\omega x) d\omega$
*   $f(x) = \sqrt{\frac{2}{\pi}} \int_0^\infty F_s(\omega) \sin(\omega x) d\omega$

*(Refer to Kreyszig, 10th ed., Chapter 12 for a detailed derivation of the Fourier Integral from Fourier Series by considering the limit $L \to \infty$.)*

---

### 2. Fourier Cosine Integral

**2.1 Motivation:**

When $f(x)$ is an **even function**, i.e., $f(-x) = f(x)$, the Fourier Integral simplifies considerably. For an even function, $B(\omega) = 0$.

**2.2 Definition:**

For an even function $f(x)$, the Fourier Integral becomes the Fourier Cosine Integral:

$f(x) = \frac{1}{\pi} \int_0^\infty A(\omega) \cos(\omega x) d\omega$

where the cosine coefficient $A(\omega)$ is given by:

$A(\omega) = \int_{-\infty}^\infty f(t) \cos(\omega t) dt$

Since $f(t)$ is even, $f(t) \cos(\omega t)$ is also even, so:

$A(\omega) = 2 \int_0^\infty f(t) \cos(\omega t) dt$

Thus, the Fourier Cosine Integral is:

$f(x) = \frac{2}{\pi} \int_0^\infty \left( \int_0^\infty f(t) \cos(\omega t) dt \right) \cos(\omega x) d\omega$

**2.3 Conditions for Existence:**

The Fourier Cosine Integral of $f(x)$ exists if:

*   $f(x)$ is an even function.
*   $f(x)$ is absolutely integrable over $(0, \infty)$, i.e., $\int_0^\infty |f(x)| dx < \infty$.
*   $f(x)$ is continuous and has a finite number of maxima and minima in every finite interval in $(0, \infty)$.

*(Kreyszig, 10th ed., Section 12.7 discusses Fourier Cosine and Sine Transforms, which are closely related.)*

**2.4 Example:**

Find the Fourier Cosine Integral of $f(x) = e^{-ax}$ for $x > 0$, where $a > 0$.

**Solution:**

First, we need to define $f(x)$ for all $x$. Since we are considering the Fourier Cosine Integral, we assume $f(x)$ is an even function. However, the problem statement is for $x > 0$. We are asked to find the Fourier Cosine integral representation of $f(x) = e^{-ax}$ for $x > 0$. This implies we are considering this function on the semi-infinite interval $[0, \infty)$. The Fourier Cosine Integral is used for functions defined on semi-infinite intervals when we want to represent them using cosine terms, which are even functions.

Let's calculate $A(\omega)$:
$A(\omega) = 2 \int_0^\infty f(t) \cos(\omega t) dt = 2 \int_0^\infty e^{-at} \cos(\omega t) dt$

Using the standard integral formula: $\int e^{ax} \cos(bx) dx = \frac{e^{ax}}{a^2+b^2}(a \cos(bx) + b \sin(bx))$

Here, $a \to -a$ and $b \to \omega$.
So, $\int_0^\infty e^{-at} \cos(\omega t) dt = \left[ \frac{e^{-at}}{(-a)^2+\omega^2}(-a \cos(\omega t) + \omega \sin(\omega t)) \right]_0^\infty$
$= \left[ \frac{e^{-at}}{a^2+\omega^2}(-a \cos(\omega t) + \omega \sin(\omega t)) \right]_0^\infty$

As $t \to \infty$, $e^{-at} \to 0$ (since $a > 0$), so the term becomes 0.
At $t = 0$: $\frac{e^0}{a^2+\omega^2}(-a \cos(0) + \omega \sin(0)) = \frac{1}{a^2+\omega^2}(-a \cdot 1 + \omega \cdot 0) = \frac{-a}{a^2+\omega^2}$

Therefore, $\int_0^\infty e^{-at} \cos(\omega t) dt = 0 - \frac{-a}{a^2+\omega^2} = \frac{a}{a^2+\omega^2}$.

Now, $A(\omega) = 2 \times \frac{a}{a^2+\omega^2} = \frac{2a}{a^2+\omega^2}$.

The Fourier Cosine Integral is:
$f(x) = \frac{2}{\pi} \int_0^\infty A(\omega) \cos(\omega x) d\omega$
$f(x) = \frac{2}{\pi} \int_0^\infty \frac{2a}{a^2+\omega^2} \cos(\omega x) d\omega$
$f(x) = \frac{4a}{\pi} \int_0^\infty \frac{\cos(\omega x)}{a^2+\omega^2} d\omega$

We know the standard integral: $\int_0^\infty \frac{\cos(\alpha x)}{a^2+x^2} dx = \frac{\pi}{2a} e^{-a|\alpha|}$

In our case, the variable of integration is $\omega$, and we have $\cos(\omega x)$. So, we can write:
$\frac{4a}{\pi} \int_0^\infty \frac{\cos(\omega x)}{a^2+\omega^2} d\omega = \frac{4a}{\pi} \left( \frac{\pi}{2a} e^{-a|x|} \right) = 2e^{-a|x|}$

However, the Fourier Cosine Integral is for representing a function on $[0, \infty)$. The function we started with is $f(x) = e^{-ax}$ for $x > 0$. The result $2e^{-a|x|}$ suggests we are dealing with an even extension of $e^{-ax}$.

Let's re-examine the integral representation. The Fourier Cosine Integral represents $f(x)$ for $x \ge 0$.
$f(x) = \frac{2}{\pi} \int_0^\infty \left( \int_0^\infty f(t) \cos(\omega t) dt \right) \cos(\omega x) d\omega$

For $f(x) = e^{-ax}$ with $x \ge 0$:
$f(x) = \frac{2}{\pi} \int_0^\infty \left( \int_0^\infty e^{-at} \cos(\omega t) dt \right) \cos(\omega x) d\omega$
$f(x) = \frac{2}{\pi} \int_0^\infty \left( \frac{a}{a^2+\omega^2} \right) \cos(\omega x) d\omega$
$f(x) = \frac{2a}{\pi} \int_0^\infty \frac{\cos(\omega x)}{a^2+\omega^2} d\omega$

Using the integral $\int_0^\infty \frac{\cos(\alpha \omega)}{a^2+\omega^2} d\omega = \frac{\pi}{2a} e^{-a|\alpha|}$ where $\alpha = x$.
$f(x) = \frac{2a}{\pi} \left( \frac{\pi}{2a} e^{-a|x|} \right) = e^{-a|x|}$

Since the Fourier Cosine Integral is defined for $x \ge 0$, and our original function is $f(x) = e^{-ax}$ for $x \ge 0$, the result should be $e^{-ax}$ for $x \ge 0$. The $|x|$ in the result arises from the general integral formula. If we restrict to $x \ge 0$, then $|x|=x$.

So, for $f(x) = e^{-ax}$, $x \ge 0$:
$f(x) = \frac{2a}{\pi} \int_0^\infty \frac{\cos(\omega x)}{a^2+\omega^2} d\omega$. This integral evaluates to $e^{-ax}$ for $x \ge 0$.

*(This example highlights that the Fourier Cosine Integral is an integral representation of $f(x)$ for $x \ge 0$. The cosine terms are even, so this is equivalent to finding the Fourier Integral of the even extension of $f(x)$ on $[0, \infty)$.)*

---

### 3. Fourier Sine Integral

**3.1 Motivation:**

When $f(x)$ is an **odd function**, i.e., $f(-x) = -f(x)$, the Fourier Integral simplifies. For an odd function, $A(\omega) = 0$.

**3.2 Definition:**

For an odd function $f(x)$, the Fourier Integral becomes the Fourier Sine Integral:

$f(x) = \frac{1}{\pi} \int_0^\infty B(\omega) \sin(\omega x) d\omega$

where the sine coefficient $B(\omega)$ is given by:

$B(\omega) = \int_{-\infty}^\infty f(t) \sin(\omega t) dt$

Since $f(t)$ is odd, $f(t) \sin(\omega t)$ is even, so:

$B(\omega) = 2 \int_0^\infty f(t) \sin(\omega t) dt$

Thus, the Fourier Sine Integral is:

$f(x) = \frac{2}{\pi} \int_0^\infty \left( \int_0^\infty f(t) \sin(\omega t) dt \right) \sin(\omega x) d\omega$

**3.3 Conditions for Existence:**

The Fourier Sine Integral of $f(x)$ exists if:

*   $f(x)$ is an odd function.
*   $f(x)$ is absolutely integrable over $(0, \infty)$, i.e., $\int_0^\infty |f(x)| dx < \infty$.
*   $f(x)$ is continuous and has a finite number of maxima and minima in every finite interval in $(0, \infty)$.

*(Kreyszig, 10th ed., Section 12.7 is also relevant here.)*

**3.4 Example:**

Find the Fourier Sine Integral of $f(x) = e^{-ax}$ for $x > 0$, where $a > 0$.

**Solution:**

Here, the function is defined for $x > 0$, and we are asked for the Fourier Sine Integral. This means we are representing $f(x)$ using sine terms, which is appropriate for odd functions. However, the function $f(x) = e^{-ax}$ itself is neither even nor odd. The Fourier Sine Integral is applied to represent an odd function on $(-\infty, \infty)$. If $f(x)$ is defined only on $[0, \infty)$ and we want to use the Sine Integral, it implies we are considering the odd extension of $f(x)$ to $(-\infty, \infty)$.

Let's consider the function $g(x)$ such that $g(x) = e^{-ax}$ for $x > 0$ and $g(x) = -e^{ax}$ for $x < 0$. This is an odd function.

We need to find the Fourier Sine Integral representation of $f(x) = e^{-ax}$ for $x > 0$.
$B(\omega) = 2 \int_0^\infty f(t) \sin(\omega t) dt = 2 \int_0^\infty e^{-at} \sin(\omega t) dt$

Using the standard integral formula: $\int e^{ax} \sin(bx) dx = \frac{e^{ax}}{a^2+b^2}(a \sin(bx) - b \cos(bx))$

Here, $a \to -a$ and $b \to \omega$.
So, $\int_0^\infty e^{-at} \sin(\omega t) dt = \left[ \frac{e^{-at}}{(-a)^2+\omega^2}(-a \sin(\omega t) - \omega \cos(\omega t)) \right]_0^\infty$
$= \left[ \frac{e^{-at}}{a^2+\omega^2}(-a \sin(\omega t) - \omega \cos(\omega t)) \right]_0^\infty$

As $t \to \infty$, $e^{-at} \to 0$, so the term becomes 0.
At $t = 0$: $\frac{e^0}{a^2+\omega^2}(-a \sin(0) - \omega \cos(0)) = \frac{1}{a^2+\omega^2}(-a \cdot 0 - \omega \cdot 1) = \frac{-\omega}{a^2+\omega^2}$

Therefore, $\int_0^\infty e^{-at} \sin(\omega t) dt = 0 - \frac{-\omega}{a^2+\omega^2} = \frac{\omega}{a^2+\omega^2}$.

Now, $B(\omega) = 2 \times \frac{\omega}{a^2+\omega^2} = \frac{2\omega}{a^2+\omega^2}$.

The Fourier Sine Integral is:
$f(x) = \frac{2}{\pi} \int_0^\infty B(\omega) \sin(\omega x) d\omega$
$f(x) = \frac{2}{\pi} \int_0^\infty \frac{2\omega}{a^2+\omega^2} \sin(\omega x) d\omega$
$f(x) = \frac{4}{\pi} \int_0^\infty \frac{\omega \sin(\omega x)}{a^2+\omega^2} d\omega$

We know the standard integral: $\int_0^\infty \frac{x \sin(\alpha x)}{a^2+x^2} dx = \frac{\pi}{2} e^{-a|\alpha|}$

In our case, the variable of integration is $\omega$, and we have $\sin(\omega x)$. So, we can write:
$\frac{4}{\pi} \int_0^\infty \frac{\omega \sin(\omega x)}{a^2+\omega^2} d\omega = \frac{4}{\pi} \left( \frac{\pi}{2} e^{-a|x|} \right) = 2e^{-a|x|}$

Again, the result $2e^{-a|x|}$ suggests an even function. However, the Fourier Sine Integral represents $f(x)$ for $x \ge 0$.
If we restrict the result to $x \ge 0$, then $f(x) = e^{-ax}$ for $x \ge 0$.

The Fourier Sine Integral for $f(x) = e^{-ax}$ for $x \ge 0$:
$f(x) = \frac{2}{\pi} \int_0^\infty \left( \int_0^\infty e^{-at} \sin(\omega t) dt \right) \sin(\omega x) d\omega$
$f(x) = \frac{2}{\pi} \int_0^\infty \left( \frac{\omega}{a^2+\omega^2} \right) \sin(\omega x) d\omega$
$f(x) = \frac{2}{\pi} \int_0^\infty \frac{\omega \sin(\omega x)}{a^2+\omega^2} d\omega$

Using the integral $\int_0^\infty \frac{\omega \sin(\alpha \omega)}{a^2+\omega^2} d\omega = \frac{\pi}{2} e^{-a|\alpha|}$ where $\alpha = x$.
$f(x) = \frac{2}{\pi} \left( \frac{\pi}{2} e^{-a|x|} \right) = e^{-a|x|}$

Since the Sine Integral is for $x \ge 0$, and our original function is $f(x) = e^{-ax}$ for $x \ge 0$, the result should be $e^{-ax}$ for $x \ge 0$. The $|x|$ in the result arises from the general integral formula. For $x \ge 0$, $|x|=x$.

So, for $f(x) = e^{-ax}$, $x \ge 0$:
$f(x) = \frac{2}{\pi} \int_0^\infty \frac{\omega \sin(\omega x)}{a^2+\omega^2} d\omega$. This integral evaluates to $e^{-ax}$ for $x \ge 0$.

*(Similar to the Cosine Integral, the Sine Integral provides a representation for $f(x)$ on $x \ge 0$. The sine terms are odd, so this is equivalent to finding the Fourier Integral of the odd extension of $f(x)$ on $[0, \infty)$.)*

---

### 4. Relationship with Fourier Transforms (as per CO1)

The Fourier Cosine and Sine Integrals are special cases of the Fourier Integral, arising when the function has even or odd symmetry, respectively, when considering its representation over $(-\infty, \infty)$.

*   **Even Function $f(x)$:**
    The Fourier Transform of an even function $f(x)$ is given by:
    $F(\alpha) = \int_{-\infty}^\infty f(t) e^{-i\alpha t} dt = 2 \int_0^\infty f(t) \cos(\alpha t) dt$.
    This is precisely $\sqrt{\frac{\pi}{2}} A(\alpha)$ from our cosine integral definition.
    The inverse Fourier Transform is:
    $f(x) = \frac{1}{2\pi} \int_{-\infty}^\infty F(\alpha) e^{i\alpha x} d\alpha$
    $f(x) = \frac{1}{2\pi} \int_{-\infty}^\infty \left( 2 \int_0^\infty f(t) \cos(\alpha t) dt \right) (\cos(\alpha x) + i \sin(\alpha x)) d\alpha$
    For even functions, the sine part integrates to zero. The cosine part becomes:
    $f(x) = \frac{1}{\pi} \int_0^\infty \left( \int_0^\infty f(t) \cos(\alpha t) dt \right) \cos(\alpha x) d\alpha$ (This matches the Fourier Cosine Integral).

*   **Odd Function $f(x)$:**
    The Fourier Transform of an odd function $f(x)$ is given by:
    $F(\alpha) = \int_{-\infty}^\infty f(t) e^{-i\alpha t} dt = -2i \int_0^\infty f(t) \sin(\alpha t) dt$.
    This is precisely $-i \sqrt{\frac{\pi}{2}} B(\alpha)$ from our sine integral definition.
    The inverse Fourier Transform for odd functions results in:
    $f(x) = \frac{1}{\pi} \int_0^\infty \left( \int_0^\infty f(t) \sin(\alpha t) dt \right) \sin(\alpha x) d\alpha$ (This matches the Fourier Sine Integral).

This demonstrates how the Fourier Cosine and Sine Integrals are direct consequences of the properties of even and odd functions within the broader framework of the Fourier Integral and Fourier Transforms.

*(Refer to Kreyszig, 10th ed., Section 12.7 for the detailed relation between Fourier Transforms and Cosine/Sine Transforms.)*

---

### 5. Applications in Physical Science and Electrical Science (as per CO1)

Fourier Cosine and Sine Integrals are particularly useful for solving differential equations and analyzing signals/systems that operate on semi-infinite intervals or have specific symmetry properties.

*   **Heat Conduction:** Analyzing temperature distribution in a semi-infinite rod where one end is held at a specific temperature or subjected to a flux.
*   **Wave Propagation:** Representing waves in semi-infinite media.
*   **Signal Analysis:** Decomposing signals that are defined for time $t \ge 0$.

---

### 6. Practice Questions and Exercises

**(Note: These questions often require knowledge of standard integral formulas, which can be found in mathematics textbooks.)**

**Question 1:** Find the Fourier Cosine Integral of the function
$f(x) = \begin{cases} 1 & \text{if } 0 < x < 1 \\ 0 & \text{if } x > 1 \end{cases}$

**Answer:**
First, calculate $A(\omega)$:
$A(\omega) = 2 \int_0^\infty f(t) \cos(\omega t) dt = 2 \int_0^1 1 \cdot \cos(\omega t) dt$
$A(\omega) = 2 \left[ \frac{\sin(\omega t)}{\omega} \right]_0^1 = 2 \frac{\sin(\omega)}{\omega}$ (for $\omega \neq 0$).
For $\omega = 0$, $A(0) = 2 \int_0^1 1 dt = 2$. The formula $2\frac{\sin(\omega)}{\omega}$ approaches 2 as $\omega \to 0$.

The Fourier Cosine Integral is:
$f(x) = \frac{2}{\pi} \int_0^\infty \frac{\sin(\omega)}{\omega} \cos(\omega x) d\omega$

**Question 2:** Find the Fourier Sine Integral of the function
$f(x) = \begin{cases} x & \text{if } 0 < x < 1 \\ 0 & \text{if } x > 1 \end{cases}$

**Answer:**
First, calculate $B(\omega)$:
$B(\omega) = 2 \int_0^\infty f(t) \sin(\omega t) dt = 2 \int_0^1 t \sin(\omega t) dt$
Using integration by parts: $\int u dv = uv - \int v du$
Let $u = t$, $dv = \sin(\omega t) dt$. Then $du = dt$, $v = -\frac{\cos(\omega t)}{\omega}$.
$B(\omega) = 2 \left[ t \left(-\frac{\cos(\omega t)}{\omega}\right) \right]_0^1 - 2 \int_0^1 \left(-\frac{\cos(\omega t)}{\omega}\right) dt$
$B(\omega) = 2 \left( -\frac{\cos(\omega)}{\omega} - 0 \right) + \frac{2}{\omega} \int_0^1 \cos(\omega t) dt$
$B(\omega) = -\frac{2\cos(\omega)}{\omega} + \frac{2}{\omega} \left[ \frac{\sin(\omega t)}{\omega} \right]_0^1$
$B(\omega) = -\frac{2\cos(\omega)}{\omega} + \frac{2}{\omega^2} \sin(\omega)$ (for $\omega \neq 0$).
For $\omega = 0$, $B(0) = 2 \int_0^1 t dt = 2 [\frac{t^2}{2}]_0^1 = 1$. The expression $-\frac{2\cos(\omega)}{\omega} + \frac{2\sin(\omega)}{\omega^2}$ also approaches 0 as $\omega \to 0$. A more careful limit calculation is needed, or we can use the formula directly for $\omega \neq 0$. A common form for the integral of $t \sin(\omega t)$ is $\frac{\sin(\omega) - \omega \cos(\omega)}{\omega^2}$. So $B(\omega) = 2 \frac{\sin(\omega) - \omega \cos(\omega)}{\omega^2}$ for $\omega \neq 0$.

The Fourier Sine Integral is:
$f(x) = \frac{2}{\pi} \int_0^\infty \frac{\sin(\omega) - \omega \cos(\omega)}{\omega^2} \sin(\omega x) d\omega$

**Question 3:** Use the Fourier Cosine Integral to show that $\int_0^\infty \frac{\cos(\omega x)}{1+\omega^2} d\omega = \frac{\pi}{2} e^{-x}$ for $x > 0$.

**Answer:**
We know that the Fourier Cosine Integral of $f(x) = e^{-ax}$ for $x \ge 0$ is given by:
$e^{-ax} = \frac{2}{\pi} \int_0^\infty \left( \int_0^\infty e^{-at} \cos(\omega t) dt \right) \cos(\omega x) d\omega$
We calculated $\int_0^\infty e^{-at} \cos(\omega t) dt = \frac{a}{a^2+\omega^2}$.
So, $e^{-ax} = \frac{2}{\pi} \int_0^\infty \frac{a}{a^2+\omega^2} \cos(\omega x) d\omega$.
Let $a=1$. Then:
$e^{-x} = \frac{2}{\pi} \int_0^\infty \frac{1}{1+\omega^2} \cos(\omega x) d\omega$
Rearranging, we get:
$\int_0^\infty \frac{\cos(\omega x)}{1+\omega^2} d\omega = \frac{\pi}{2} e^{-x}$, for $x > 0$.

---

### 7. Important Points to Remember

*   **Fourier Integral:** Represents functions on $(-\infty, \infty)$ as a superposition of sinusoids. Requires absolute integrability.
*   **Fourier Cosine Integral:** Used for **even functions** or for representing functions on $[0, \infty)$ with **cosine terms**.
    $f(x) = \frac{2}{\pi} \int_0^\infty \left( \int_0^\infty f(t) \cos(\omega t) dt \right) \cos(\omega x) d\omega$ for $x \ge 0$.
*   **Fourier Sine Integral:** Used for **odd functions** or for representing functions on $[0, \infty)$ with **sine terms**.
    $f(x) = \frac{2}{\pi} \int_0^\infty \left( \int_0^\infty f(t) \sin(\omega t) dt \right) \sin(\omega x) d\omega$ for $x \ge 0$.
*   The notation $A(\omega)$ and $B(\omega)$ in the integrals are the *cosine* and *sine* coefficients, respectively.
*   The integrals are from $0$ to $\infty$ because we are dealing with functions on semi-infinite intervals or exploiting symmetry properties to reduce the integration range.
*   These concepts are fundamental for understanding Fourier Transforms, which are the continuous-time equivalent of Discrete Fourier Transforms used extensively in signal processing.

---

### 8. Alignment with Course Outcomes

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**
    This topic directly addresses the determination of Fourier Cosine and Sine integrals, which are the Fourier transforms of even and odd functions, respectively. The application to problems involving semi-infinite intervals or symmetry is a key aspect of engineering problem-solving.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### Textbooks and References:

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.** (Crucial for understanding the theoretical basis, derivation, and conditions for existence of Fourier Integrals and Transforms.)
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.** (Often provides a good range of examples and applications for Fourier series and integrals.)
*   **Grewal, B.S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.** (Similar to Ramana, offers detailed explanations and solved examples.)

*(Note: While the other references (Zill, Rao et al.) are valuable, Kreyszig is the primary textbook and should be the first point of reference for this topic. The material presented here is consistent with the approach in Kreyszig's text.)*