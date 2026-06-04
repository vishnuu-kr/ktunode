---
title: "Continuity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81068f"
status: "completed"
scrapedAt: "2026-05-20T18:41:17.534Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

## Topic: Continuity

### 1. Introduction to Continuity of Complex Functions

*   **Definition of a Complex Function:** A complex function is a function that maps a complex number to a complex number. It can be represented as $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$, $u(x, y)$ is the real part, and $v(x, y)$ is the imaginary part.

*   **The Importance of Continuity:** Continuity is a fundamental concept in calculus and analysis. For complex functions, continuity is crucial for understanding differentiability, integration, and the behavior of functions in the complex plane. A continuous function means that small changes in the input lead to small changes in the output, without any sudden jumps or breaks.

### 2. Formal Definition of Continuity

A complex function $f(z)$ is **continuous at a point $z_0$** if and only if:

1.  $f(z_0)$ is defined.
2.  The limit of $f(z)$ as $z$ approaches $z_0$ exists, i.e., $\lim_{z \to z_0} f(z)$ exists.
3.  The limit is equal to the function's value at $z_0$, i.e., $\lim_{z \to z_0} f(z) = f(z_0)$.

**In simpler terms:** For $f(z)$ to be continuous at $z_0$, the function must be defined at $z_0$, the function must approach a specific value as $z$ gets arbitrarily close to $z_0$, and that specific value must be exactly what the function evaluates to at $z_0$.

### 3. The Epsilon-Delta Definition of Continuity

The formal definition of continuity can be expressed using the epsilon-delta ($\epsilon-\delta$) definition, which is a rigorous way to define limits:

A function $f(z)$ is **continuous at a point $z_0$** if for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $|z - z_0| < \delta$, then $|f(z) - f(z_0)| < \epsilon$.

*   **Explanation:**
    *   $\epsilon$ (epsilon) represents an arbitrarily small positive "tolerance" around the function's value at $z_0$, i.e., $|f(z) - f(z_0)|$.
    *   $\delta$ (delta) represents a corresponding small positive "neighborhood" around the point $z_0$, i.e., $|z - z_0|$.
    *   The definition states that for any desired closeness ($\epsilon$) to the output $f(z_0)$, we can find a region ($\delta$) around the input $z_0$ such that all points within that region produce outputs within the desired closeness.

### 4. Continuity in Terms of Real and Imaginary Parts

Let $f(z) = u(x, y) + iv(x, y)$ and $z = x + iy$.
A function $f(z)$ is **continuous at $z_0 = x_0 + iy_0$** if and only if both its real part $u(x, y)$ and its imaginary part $v(x, y)$ are **continuous as functions of two real variables at the point $(x_0, y_0)$**.

*   **Key Concept:** The continuity of a complex function $f(z)$ is equivalent to the continuity of its real and imaginary components as functions of two real variables.

*   **Example:**
    Consider $f(z) = z^2$.
    Let $z = x + iy$. Then $f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 - y^2 + i(2xy)$.
    So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.
    Both $u(x, y)$ and $v(x, y)$ are polynomials in $x$ and $y$, and polynomials are continuous everywhere in the real plane. Therefore, $f(z) = z^2$ is continuous for all complex numbers $z$.

### 5. Continuity on a Domain

A function $f(z)$ is **continuous on a domain $D$** if it is continuous at every point $z_0$ in $D$.

### 6. Properties of Continuous Complex Functions

The algebra of continuous functions extends to complex functions:

*   **Sum:** If $f(z)$ and $g(z)$ are continuous at $z_0$, then $f(z) + g(z)$ is continuous at $z_0$.
*   **Difference:** If $f(z)$ and $g(z)$ are continuous at $z_0$, then $f(z) - g(z)$ is continuous at $z_0$.
*   **Product:** If $f(z)$ and $g(z)$ are continuous at $z_0$, then $f(z)g(z)$ is continuous at $z_0$.
*   **Quotient:** If $f(z)$ and $g(z)$ are continuous at $z_0$ and $g(z_0) \neq 0$, then $\frac{f(z)}{g(z)}$ is continuous at $z_0$.
*   **Composition:** If $g(z)$ is continuous at $z_0$ and $f(w)$ is continuous at $w_0 = g(z_0)$, then the composite function $f(g(z))$ is continuous at $z_0$.

**Important Note:** These properties are inherited from the properties of continuity of real-valued functions of two variables.

### 7. Examples of Continuous and Discontinuous Functions

*   **Polynomials:** Any polynomial in $z$ (e.g., $az^n + bz^{n-1} + ... + c$) is continuous for all $z \in \mathbb{C}$.
    *   *Reasoning:* Polynomials in $z$ can be expressed as $P(z) = \sum_{k=0}^n a_k z^k$. Each term $z^k$ is continuous, and sums and products of continuous functions are continuous.

*   **Rational Functions:** A rational function $R(z) = \frac{P(z)}{Q(z)}$, where $P(z)$ and $Q(z)$ are polynomials, is continuous everywhere except at the roots of the denominator $Q(z)$.
    *   *Example:* $f(z) = \frac{z+1}{z-2i}$ is continuous everywhere except at $z = 2i$.

*   **Exponential Function:** $f(z) = e^z$ is continuous for all $z \in \mathbb{C}$.
    *   *Reasoning:* $e^z = e^{x+iy} = e^x(\cos y + i \sin y)$. The real part $u(x, y) = e^x \cos y$ and the imaginary part $v(x, y) = e^x \sin y$ are continuous functions of two real variables.

*   **Trigonometric and Hyperbolic Functions:** Functions like $\sin z$, $\cos z$, $\sinh z$, $\cosh z$ are continuous for all $z \in \mathbb{C}$.
    *   *Reasoning:* These functions can be expressed in terms of $e^z$ and polynomials, which are continuous. For example, $\sin z = \frac{e^{iz} - e^{-iz}}{2i}$.

*   **Discontinuous Functions:**
    *   **Example 1:** $f(z) = \frac{1}{z}$. This function is discontinuous at $z=0$ because it is not defined at $z=0$.
    *   **Example 2:** Consider a function defined piecewise:
        $f(z) = \begin{cases} z^2 & \text{if } \operatorname{Re}(z) \neq 0 \\ 0 & \text{if } \operatorname{Re}(z) = 0 \end{cases}$
        Let's check continuity at $z_0 = 0$.
        $f(0) = 0$ (since $\operatorname{Re}(0) = 0$).
        Now consider the limit as $z \to 0$.
        If we approach along the imaginary axis (where $\operatorname{Re}(z) = 0$), say $z = iy$ with $y \to 0$, then $f(z) = f(iy) = 0$. The limit is 0.
        If we approach along the real axis (where $\operatorname{Im}(z) = 0$), say $z = x$ with $x \to 0$, then $f(z) = f(x) = x^2$. The limit is 0.
        However, if we approach along a path where $\operatorname{Re}(z) \neq 0$ for $z \neq 0$, we use $f(z) = z^2$. As $z \to 0$, $z^2 \to 0$.
        In this particular case, the limit as $z \to 0$ is 0. Since $f(0) = 0$, the function *is* continuous at $z=0$.

    *   **Example 3 (True Discontinuity):**
        $f(z) = \begin{cases} 1 & \text{if } |z| < 1 \\ 0 & \text{if } |z| \ge 1 \end{cases}$
        This function is discontinuous at $|z|=1$. For instance, at $z_0 = 1$:
        $f(1) = 0$.
        Consider approaching $z_0=1$ from inside the unit circle, e.g., $z_n = 1 - \frac{1}{n}$. As $n \to \infty$, $z_n \to 1$.
        For these $z_n$, $|z_n| < 1$, so $f(z_n) = 1$.
        Thus, $\lim_{n \to \infty} f(z_n) = 1$.
        Since $f(1) = 0 \neq 1$, the limit does not exist, and the function is discontinuous at $z=1$.

### 8. Continuity of Inverse Functions and Composite Functions

*   **Inverse Functions:** If a function $f$ is continuous on a domain $D$, and its inverse $f^{-1}$ exists and is defined on the range of $f$, then $f^{-1}$ is also continuous on the range of $f$.
*   **Composite Functions:** As mentioned in the properties, if $g(z)$ is continuous at $z_0$ and $f(w)$ is continuous at $w_0 = g(z_0)$, then $f(g(z))$ is continuous at $z_0$. This is a crucial property for building up complex analysis.

### 9. Practice Questions

**Question 1:**
Determine whether the function $f(z) = |z|^2$ is continuous for all complex numbers $z$.

**Question 2:**
Is the function $f(z) = \frac{\bar{z}}{z}$ continuous at $z=1$? Is it continuous at $z=0$?

**Question 3:**
Let $f(z) = \begin{cases} \frac{z^2 - 4}{z - 2} & \text{if } z \neq 2 \\ 4 & \text{if } z = 2 \end{cases}$. Is $f(z)$ continuous at $z=2$?

**Question 4:**
Consider the function $f(z) = u(x, y) + iv(x, y)$ where $u(x, y) = x^2 + y^2$ and $v(x, y) = x - y$. Is $f(z)$ continuous at $z_0 = 1 + i$?

### 10. Answers to Practice Questions

**Answer 1:**
$f(z) = |z|^2 = z \bar{z}$.
Let $z = x + iy$. Then $f(z) = (x+iy)(x-iy) = x^2 + y^2$.
Here, $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.
Both $u(x, y)$ and $v(x, y)$ are polynomials in $x$ and $y$, and thus are continuous everywhere in the $xy$-plane.
Therefore, $f(z) = |z|^2$ is continuous for all complex numbers $z$.

**Answer 2:**
For $f(z) = \frac{\bar{z}}{z}$:
*   **At $z=1$**:
    $f(1) = \frac{\bar{1}}{1} = \frac{1}{1} = 1$.
    Let's consider the limit as $z \to 1$. If $z$ is close to 1, $z$ is real and positive. So $\bar{z} = z$.
    Thus, for $z$ near 1 (but not equal to 1), $f(z) = \frac{z}{z} = 1$.
    So, $\lim_{z \to 1} f(z) = 1$.
    Since $f(1) = 1$ and the limit exists and equals $f(1)$, $f(z)$ is continuous at $z=1$.

*   **At $z=0$**:
    The function $f(z) = \frac{\bar{z}}{z}$ is not defined at $z=0$ because the denominator is zero. Therefore, it cannot be continuous at $z=0$.

**Answer 3:**
To check continuity at $z=2$, we need to see if $\lim_{z \to 2} f(z) = f(2)$.
We are given $f(2) = 4$.
Now, let's evaluate the limit:
$\lim_{z \to 2} f(z) = \lim_{z \to 2} \frac{z^2 - 4}{z - 2}$
This is an indeterminate form $\frac{0}{0}$. We can factor the numerator:
$\lim_{z \to 2} \frac{(z-2)(z+2)}{z - 2}$
For $z \neq 2$, we can cancel the $(z-2)$ term:
$\lim_{z \to 2} (z+2) = 2 + 2 = 4$.
Since $\lim_{z \to 2} f(z) = 4$ and $f(2) = 4$, the function $f(z)$ is continuous at $z=2$.

**Answer 4:**
$f(z) = u(x, y) + iv(x, y)$ where $u(x, y) = x^2 + y^2$ and $v(x, y) = x - y$.
$z_0 = 1 + i$, so $(x_0, y_0) = (1, 1)$.
We need to check if $u(x, y)$ and $v(x, y)$ are continuous at $(1, 1)$.
$u(x, y) = x^2 + y^2$ is a polynomial in $x$ and $y$, so it is continuous everywhere, including at $(1, 1)$.
$v(x, y) = x - y$ is also a polynomial in $x$ and $y$, so it is continuous everywhere, including at $(1, 1)$.
Since both the real and imaginary parts are continuous at $(1, 1)$, the complex function $f(z)$ is continuous at $z_0 = 1 + i$.

### 11. Important Points to Remember

*   **Definition is Key:** Always remember the three conditions for continuity at a point: defined, limit exists, and limit equals function value.
*   **Real/Imaginary Parts:** Continuity of $f(z)$ is equivalent to the continuity of its real and imaginary parts as functions of two real variables. This is a powerful tool for analysis.
*   **Algebraic Properties:** Sums, differences, products, quotients (with non-zero denominators), and compositions of continuous functions are also continuous.
*   **Points of Discontinuity:** Discontinuities typically arise where the function is undefined (e.g., division by zero) or where the limit does not match the function value.
*   **Epsilon-Delta:** While the epsilon-delta definition is rigorous, often checking continuity of real/imaginary parts or using algebraic properties is more practical.

This concludes the notes on continuity of complex functions. Understanding continuity is foundational for further topics like differentiability and integration in complex analysis.
