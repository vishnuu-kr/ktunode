---
title: "Limit"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a63"
status: "completed"
scrapedAt: "2026-05-23T16:14:30.164Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 2: Complex Functions

### Topic: Limit

This topic introduces the fundamental concept of a limit for complex functions, laying the groundwork for understanding continuity, derivatives, and integrals in the complex plane.

---

### 1. Learning Outcomes

*   **Understand the concept of a limit of a complex function.** This involves defining what it means for a function to approach a specific value as the input approaches a particular point in the complex plane.
*   **State and apply the $\epsilon-\delta$ definition of a limit for complex functions.** This rigorous definition provides a precise way to prove whether a limit exists.
*   **Evaluate limits of complex functions using algebraic methods and properties of limits.** This includes techniques for simplifying complex expressions and using known limit properties.
*   **Recognize and evaluate limits involving infinity.** This addresses scenarios where the function's value or the input tends towards infinity in the complex plane.

---

### 2. Key Concepts and Definitions

#### 2.1 The Complex Plane

Before delving into limits, it's crucial to recall the representation of complex numbers and functions in the complex plane. A complex number $z = x + iy$ can be represented as a point $(x, y)$ in a two-dimensional plane, where $x$ is the real part and $y$ is the imaginary part.

*   **Reference:** Kreyszig, Chapter 1 (Complex Numbers) and Chapter 13 (Complex Functions).

#### 2.2 Complex Functions

A complex function $f(z)$ maps a complex number $z$ from its domain $D$ (a subset of the complex plane $\mathbb{C}$) to a complex number $w$ in its range (also a subset of $\mathbb{C}$). We can write $w = f(z)$.

A complex function can be expressed in terms of its real and imaginary parts:
$f(z) = f(x+iy) = u(x,y) + iv(x,y)$,
where $u(x,y)$ is the real part and $v(x,y)$ is the imaginary part of $f(z)$.

#### 2.3 The Limit of a Complex Function

**Definition:** Let $f(z)$ be a function defined in a neighborhood of a point $z_0$, except possibly at $z_0$ itself. We say that the limit of $f(z)$ as $z$ approaches $z_0$ is $L$, written as:

$$ \lim_{z \to z_0} f(z) = L $$

if for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < |z - z_0| < \delta$, then $|f(z) - L| < \epsilon$.

**Explanation:** This definition is analogous to the $\epsilon-\delta$ definition of a limit for real-valued functions.
*   $|z - z_0|$ represents the distance between $z$ and $z_0$ in the complex plane.
*   $|f(z) - L|$ represents the distance between the function's output $f(z)$ and the proposed limit $L$ in the complex plane.

The condition $0 < |z - z_0| < \delta$ means that $z$ is in an open disk of radius $\delta$ centered at $z_0$, but $z$ is not equal to $z_0$.
The condition $|f(z) - L| < \epsilon$ means that $f(z)$ lies within an open disk of radius $\epsilon$ centered at $L$.

**Geometric Interpretation:** The limit $L$ exists if, for any arbitrarily small disk around $L$ (with radius $\epsilon$), we can find a disk around $z_0$ (with radius $\delta$) such that all points $z$ in the disk around $z_0$ (excluding $z_0$) map to points $f(z)$ within the disk around $L$.

*   **Reference:** Kreyszig, Section 13.1; Zill & Shanahan, Section 2.2.

#### 2.4 The $\epsilon-\delta$ Definition in Detail

The $\epsilon-\delta$ definition is crucial for proving limit theorems and establishing properties of complex functions.

**Key Elements:**
*   **$\epsilon$ (epsilon):** Represents an arbitrarily small positive real number related to the output of the function.
*   **$\delta$ (delta):** Represents a positive real number related to the input of the function.
*   **Neighborhood:** The set of points $z$ such that $|z - z_0| < \delta$ is an open disk of radius $\delta$ centered at $z_0$.
*   **Punctured Neighborhood:** The set of points $z$ such that $0 < |z - z_0| < \delta$ is a punctured open disk, meaning the center $z_0$ is excluded.

**Implication of the Limit:** The existence of the limit implies that the value of $f(z)$ can be made arbitrarily close to $L$ by choosing $z$ sufficiently close to $z_0$. This is independent of the direction from which $z$ approaches $z_0$.

#### 2.5 Uniqueness of the Limit

If a limit of a complex function exists, it is unique.

**Proof Sketch (using the $\epsilon-\delta$ definition):** Assume $\lim_{z \to z_0} f(z) = L_1$ and $\lim_{z \to z_0} f(z) = L_2$, with $L_1 \neq L_2$.
For any $\epsilon > 0$, there exist $\delta_1 > 0$ and $\delta_2 > 0$ such that:
*   $0 < |z - z_0| < \delta_1 \implies |f(z) - L_1| < \epsilon$
*   $0 < |z - z_0| < \delta_2 \implies |f(z) - L_2| < \epsilon$

Let $\delta = \min(\delta_1, \delta_2)$. Then for $0 < |z - z_0| < \delta$, both inequalities hold.
Using the triangle inequality:
$|L_1 - L_2| = |L_1 - f(z) + f(z) - L_2| \le |L_1 - f(z)| + |f(z) - L_2| = |f(z) - L_1| + |f(z) - L_2|$.
So, $|L_1 - L_2| < \epsilon + \epsilon = 2\epsilon$.
Since this holds for any $\epsilon > 0$, it must be that $|L_1 - L_2| = 0$, which implies $L_1 = L_2$. This contradicts our assumption that $L_1 \neq L_2$. Therefore, the limit must be unique.

*   **Reference:** Kreyszig, Section 13.1.

#### 2.6 Properties of Limits (Sum, Difference, Product, Quotient)

If $\lim_{z \to z_0} f(z) = L_1$ and $\lim_{z \to z_0} g(z) = L_2$, then:

*   **Sum:** $\lim_{z \to z_0} [f(z) + g(z)] = L_1 + L_2$
*   **Difference:** $\lim_{z \to z_0} [f(z) - g(z)] = L_1 - L_2$
*   **Product:** $\lim_{z \to z_0} [f(z) g(z)] = L_1 L_2$
*   **Quotient:** $\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{L_1}{L_2}$, provided $L_2 \neq 0$.
*   **Constant Multiple:** $\lim_{z \to z_0} [c f(z)] = c L_1$, where $c$ is a complex constant.

These properties are essential for evaluating limits algebraically.

*   **Reference:** Kreyszig, Section 13.1; Zill & Shanahan, Section 2.2.

#### 2.7 Limits of Polynomials and Rational Functions

*   **Polynomials:** For a polynomial $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_0$,
    $$ \lim_{z \to z_0} P(z) = P(z_0) = a_n z_0^n + a_{n-1} z_0^{n-1} + \dots + a_0 $$
    This follows directly from the properties of limits.

*   **Rational Functions:** For a rational function $R(z) = \frac{P(z)}{Q(z)}$, where $P(z)$ and $Q(z)$ are polynomials,
    $$ \lim_{z \to z_0} R(z) = \frac{P(z_0)}{Q(z_0)} $$
    provided $Q(z_0) \neq 0$.

    If $Q(z_0) = 0$ and $P(z_0) \neq 0$, then the limit does not exist (it may tend to infinity).
    If $Q(z_0) = 0$ and $P(z_0) = 0$, then further analysis (e.g., factorization and cancellation) is required.

*   **Reference:** Kreyszig, Section 13.1.

#### 2.8 Limits Involving Infinity

We consider limits where $z_0$ or $f(z)$ approaches infinity.

**Definition (Limit at Infinity):**
$$ \lim_{z \to \infty} f(z) = L $$
if for every $\epsilon > 0$, there exists a real number $M > 0$ such that if $|z| > M$, then $|f(z) - L| < \epsilon$.

**Geometric Interpretation:** This means that as $z$ moves further away from the origin (in any direction), $f(z)$ gets arbitrarily close to $L$. This is often evaluated by considering the limit as $w \to 0$ of $f(1/w)$:
$$ \lim_{z \to \infty} f(z) = \lim_{w \to 0} f(1/w) $$

**Definition (Limit approaches Infinity):**
$$ \lim_{z \to z_0} f(z) = \infty $$
if for every positive real number $\eta$, there exists a $\delta > 0$ such that if $0 < |z - z_0| < \delta$, then $|f(z)| > \eta$.

**Geometric Interpretation:** This means that as $z$ approaches $z_0$, the magnitude of $f(z)$ grows without bound.

**The Point at Infinity:** In complex analysis, it is often useful to consider the "point at infinity," denoted by $\infty$. The complex plane along with the point at infinity forms the **Riemann sphere**. A function $f(z)$ has a limit of $\infty$ as $z \to z_0$ if it has a pole at $z_0$.

*   **Reference:** Kreyszig, Section 13.1; Zill & Shanahan, Section 2.2.

---

### 3. Examples

#### Example 1: Basic Limit Evaluation

Evaluate $\lim_{z \to 1+i} z^2$.

**Solution:**
Since $f(z) = z^2$ is a polynomial, we can directly substitute $z_0 = 1+i$:
$$ \lim_{z \to 1+i} z^2 = (1+i)^2 $$
$$ (1+i)^2 = 1^2 + 2(1)(i) + i^2 = 1 + 2i - 1 = 2i $$
Thus, $\lim_{z \to 1+i} z^2 = 2i$.

#### Example 2: Using Properties of Limits

Evaluate $\lim_{z \to i} \frac{z^3 + 1}{z - i}$.

**Solution:**
If we substitute $z=i$, the numerator becomes $i^3 + 1 = -i + 1$, and the denominator becomes $i - i = 0$. Since the numerator is non-zero and the denominator is zero, the limit approaches infinity.

Let's try to factor the numerator: $z^3 + 1 = (z+1)(z^2 - z + 1)$. This doesn't seem to help with the $(z-i)$ term directly.

Consider the expression $z^3+1$. Let $z_0 = i$.
The numerator at $z_0=i$ is $i^3+1 = -i+1$.
The denominator at $z_0=i$ is $i-i = 0$.
Since the numerator is non-zero and the denominator is zero, the limit is $\infty$.

To be more rigorous, consider $z = i + h$, where $h \to 0$.
$z^3 + 1 = (i+h)^3 + 1 = i^3 + 3i^2h + 3ih^2 + h^3 + 1 = -i - 3h + 3ih^2 + h^3 + 1$.
$z - i = (i+h) - i = h$.
So, $\frac{z^3 + 1}{z - i} = \frac{-i - 3h + 3ih^2 + h^3 + 1}{h} = \frac{(1-i) - 3h + 3ih^2 + h^3}{h}$
$= \frac{1-i}{h} - 3 + 3ih + h^2$.
As $h \to 0$, the term $\frac{1-i}{h}$ dominates. The magnitude $|h|$ approaches 0, while the numerator $1-i$ has a non-zero magnitude. Thus, the magnitude of $\frac{1-i}{h}$ goes to infinity.
So, $\lim_{z \to i} \frac{z^3 + 1}{z - i} = \infty$.

#### Example 3: Using $\epsilon-\delta$ Definition (Conceptual)

Prove that $\lim_{z \to 2i} z^2 = -4$.

**Proof:**
We need to show that for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < |z - 2i| < \delta$, then $|z^2 - (-4)| < \epsilon$.
Let $z_0 = 2i$ and $L = -4$. We have $|f(z) - L| = |z^2 - (-4)| = |z^2 + 4|$.
We can factor $z^2 + 4 = (z - 2i)(z + 2i)$.
So, $|z^2 + 4| = |z - 2i| |z + 2i|$.

We are given $|z - 2i| < \delta$. We need to bound $|z + 2i|$.
We can write $z + 2i = (z - 2i) + 4i$.
Using the triangle inequality: $|z + 2i| = |(z - 2i) + 4i| \le |z - 2i| + |4i|$.
If we choose $\delta \le 1$, then $|z - 2i| < 1$, so $|z + 2i| \le |z - 2i| + 4 < 1 + 4 = 5$.

Now, $|f(z) - L| = |z - 2i| |z + 2i| < \delta \cdot 5$.
We want this to be less than $\epsilon$. So, $5\delta < \epsilon$, which means $\delta < \frac{\epsilon}{5}$.

To satisfy both conditions ($\delta \le 1$ and $\delta < \frac{\epsilon}{5}$), we choose $\delta = \min(1, \frac{\epsilon}{5})$.

Therefore, for any $\epsilon > 0$, if we choose $\delta = \min(1, \frac{\epsilon}{5})$, then $0 < |z - 2i| < \delta$ implies $|z^2 - (-4)| < \epsilon$.
Thus, $\lim_{z \to 2i} z^2 = -4$.

#### Example 4: Limit at Infinity

Evaluate $\lim_{z \to \infty} \frac{3z+1}{z-2}$.

**Solution:**
We can use the substitution $z = 1/w$. As $z \to \infty$, $w \to 0$.
$$ \lim_{z \to \infty} \frac{3z+1}{z-2} = \lim_{w \to 0} \frac{3(1/w)+1}{(1/w)-2} $$
$$ = \lim_{w \to 0} \frac{\frac{3+w}{w}}{\frac{1-2w}{w}} $$
$$ = \lim_{w \to 0} \frac{3+w}{1-2w} $$
Now, substitute $w=0$:
$$ = \frac{3+0}{1-2(0)} = \frac{3}{1} = 3 $$
Thus, $\lim_{z \to \infty} \frac{3z+1}{z-2} = 3$.

*   **Alternative method for Example 4:** Divide numerator and denominator by the highest power of $z$ in the denominator (which is $z$):
    $$ \lim_{z \to \infty} \frac{3z+1}{z-2} = \lim_{z \to \infty} \frac{\frac{3z}{z}+\frac{1}{z}}{\frac{z}{z}-\frac{2}{z}} = \lim_{z \to \infty} \frac{3+\frac{1}{z}}{1-\frac{2}{z}} $$
    As $z \to \infty$, $\frac{1}{z} \to 0$ and $\frac{2}{z} \to 0$.
    $$ = \frac{3+0}{1-0} = 3 $$

#### Example 5: Limit of a Function of Two Variables (from Real and Imaginary Parts)

Let $f(z) = \frac{z^2}{\bar{z}}$. Find $\lim_{z \to 0} f(z)$, if it exists.
We write $z = x + iy$, so $\bar{z} = x - iy$.
$f(z) = \frac{(x+iy)^2}{x-iy} = \frac{x^2 - y^2 + 2ixy}{x-iy}$.
To make the denominator real, multiply by the conjugate of the denominator:
$f(z) = \frac{(x^2 - y^2 + 2ixy)(x+iy)}{(x-iy)(x+iy)} = \frac{x(x^2 - y^2) + iy(x^2 - y^2) + 2ix^2y + 2i^2xy}{x^2 + y^2}$
$f(z) = \frac{x^3 - xy^2 - 2xy + i(yx^2 - y^3 + 2x^2y)}{x^2 + y^2}$
$f(z) = \frac{x^3 - xy^2 - 2xy}{x^2 + y^2} + i \frac{3x^2y - y^3}{x^2 + y^2}$.
So, $u(x,y) = \frac{x^3 - xy^2 - 2xy}{x^2 + y^2}$ and $v(x,y) = \frac{3x^2y - y^3}{x^2 + y^2}$.

We need to check if $\lim_{(x,y) \to (0,0)} u(x,y) = L_1$ and $\lim_{(x,y) \to (0,0)} v(x,y) = L_2$ exist and are finite.

**Consider $u(x,y)$:**
If we approach along the x-axis ($y=0, x \to 0$):
$u(x,0) = \frac{x^3 - 0 - 0}{x^2 + 0} = \frac{x^3}{x^2} = x$.
$\lim_{x \to 0} x = 0$.

If we approach along the y-axis ($x=0, y \to 0$):
$u(0,y) = \frac{0 - 0 - 0}{0 + y^2} = 0$.
$\lim_{y \to 0} 0 = 0$.

If we approach along the line $y=mx$:
$u(x,mx) = \frac{x^3 - x(mx)^2 - 2x(mx)}{x^2 + (mx)^2} = \frac{x^3 - m^2x^3 - 2mx^2}{x^2 + m^2x^2}$
$u(x,mx) = \frac{x^3(1 - m^2) - 2mx^2}{x^2(1 + m^2)} = \frac{x(1 - m^2) - 2m}{1 + m^2}$.
As $x \to 0$, $u(x,mx) \to \frac{-2m}{1+m^2}$.
This limit depends on $m$. For example, if $m=1$, the limit is $\frac{-2}{2} = -1$. If $m=0$, the limit is $0$.
Since the limit depends on the path of approach, $\lim_{(x,y) \to (0,0)} u(x,y)$ does not exist.

Therefore, $\lim_{z \to 0} \frac{z^2}{\bar{z}}$ does not exist.

*   **Important Note:** For a limit of a complex function to exist, the limit of its real part and the limit of its imaginary part must exist independently and be finite, and importantly, these limits must be the same regardless of the path of approach.

---

### 4. Practice Questions and Exercises

**Instructions:** Solve the following problems.

1.  Evaluate $\lim_{z \to 2+i} (z^2 - 3z + 5)$.
2.  Evaluate $\lim_{z \to i} \frac{z^4 - 1}{z - i}$.
3.  Evaluate $\lim_{z \to 0} \frac{\sin z}{z}$. (Hint: Use Euler's formula $e^{iz} = \cos z + i \sin z$, or properties of real limits if you consider $z=x$ and $z=iy$ separately).
4.  Evaluate $\lim_{z \to \infty} \frac{5z^2 - 2z + 1}{z^2 + 3z - 4}$.
5.  Evaluate $\lim_{z \to 0} \frac{\bar{z}}{z}$.
6.  Prove that $\lim_{z \to 1-i} z^2 = -2i$ using the $\epsilon-\delta$ definition.

---

### 5. Answers to Practice Questions

1.  **Solution:** Since $f(z) = z^2 - 3z + 5$ is a polynomial, substitute $z_0 = 2+i$:
    $$ (2+i)^2 - 3(2+i) + 5 = (4 + 4i + i^2) - (6 + 3i) + 5 $$
    $$ = (4 + 4i - 1) - 6 - 3i + 5 = 3 + 4i - 6 - 3i + 5 = (3-6+5) + (4-3)i = 2 + i $$
    **Answer:** $2+i$

2.  **Solution:** The numerator is $z^4 - 1 = (z^2 - 1)(z^2 + 1) = (z-1)(z+1)(z^2+1)$.
    This doesn't directly help with the $(z-i)$ term. Let's try factoring $z^4-1$ as a difference of squares where one factor is related to $(z-i)$.
    Recall $(z-i)(z+i) = z^2 - i^2 = z^2+1$.
    Recall $(z^2-i^2)(z^2+i^2) = (z^2+1)(z^2-1) = z^4 - 1$.
    So, $z^4 - 1 = (z-i)(z+i)(z^2-1)$.
    Therefore, $\frac{z^4 - 1}{z - i} = \frac{(z-i)(z+i)(z^2-1)}{z - i} = (z+i)(z^2-1)$ for $z \neq i$.
    Now, take the limit as $z \to i$:
    $$ \lim_{z \to i} (z+i)(z^2-1) = (i+i)(i^2-1) = (2i)(-1-1) = (2i)(-2) = -4i $$
    **Answer:** $-4i$

3.  **Solution:** We know that $\lim_{x \to 0} \frac{\sin x}{x} = 1$ and $\lim_{y \to 0} \frac{\sin iy}{iy} = \lim_{y \to 0} \frac{i \sinh y}{iy} = \lim_{y \to 0} \frac{\sinh y}{y} = 1$.
    Using Euler's formula: $e^{iz} = \cos z + i \sin z$.
    $\sin z = \frac{e^{iz} - e^{-iz}}{2i}$.
    So, $\frac{\sin z}{z} = \frac{e^{iz} - e^{-iz}}{2iz}$.
    Let $w = 1/z$. As $z \to 0$, $w \to \infty$. This is not helpful.

    Let's use the real and imaginary parts approach. Let $z=x+iy$.
    $\sin z = \sin(x+iy) = \sin x \cos(iy) + \cos x \sin(iy)$
    $\cos(iy) = \cosh y$, $\sin(iy) = i \sinh y$.
    $\sin z = \sin x \cosh y + i \cos x \sinh y$.
    $\frac{\sin z}{z} = \frac{\sin x \cosh y + i \cos x \sinh y}{x + iy}$.

    Consider approaching along the real axis ($y=0, x \to 0$):
    $\lim_{x \to 0} \frac{\sin x \cosh 0 + i \cos x \sinh 0}{x + i(0)} = \lim_{x \to 0} \frac{\sin x}{x} = 1$.

    Consider approaching along the imaginary axis ($x=0, y \to 0$):
    $\lim_{y \to 0} \frac{\sin 0 \cosh y + i \cos 0 \sinh y}{0 + iy} = \lim_{y \to 0} \frac{i \sinh y}{iy} = \lim_{y \to 0} \frac{\sinh y}{y} = 1$.

    It can be shown that for all paths, the limit is 1.
    **Answer:** 1

4.  **Solution:** Divide numerator and denominator by $z^2$:
    $$ \lim_{z \to \infty} \frac{5z^2 - 2z + 1}{z^2 + 3z - 4} = \lim_{z \to \infty} \frac{\frac{5z^2}{z^2} - \frac{2z}{z^2} + \frac{1}{z^2}}{\frac{z^2}{z^2} + \frac{3z}{z^2} - \frac{4}{z^2}} = \lim_{z \to \infty} \frac{5 - \frac{2}{z} + \frac{1}{z^2}}{1 + \frac{3}{z} - \frac{4}{z^2}} $$
    As $z \to \infty$, terms like $\frac{k}{z}$ and $\frac{k}{z^2}$ go to 0.
    $$ = \frac{5 - 0 + 0}{1 + 0 - 0} = 5 $$
    **Answer:** 5

5.  **Solution:** Let $z = x+iy$.
    $\frac{\bar{z}}{z} = \frac{x-iy}{x+iy}$.
    As $z \to 0$, $(x,y) \to (0,0)$.
    Approach along the x-axis ($y=0, x \to 0$): $\lim_{x \to 0} \frac{x}{x} = 1$.
    Approach along the y-axis ($x=0, y \to 0$): $\lim_{y \to 0} \frac{-iy}{iy} = -1$.
    Since the limits along different paths are different, the limit does not exist.
    **Answer:** Does not exist

6.  **Solution:** We need to prove $\lim_{z \to 1-i} z^2 = -2i$.
    Let $z_0 = 1-i$ and $L = -2i$. We want to show that for any $\epsilon > 0$, there exists $\delta > 0$ such that if $0 < |z - (1-i)| < \delta$, then $|z^2 - (-2i)| < \epsilon$.
    $|z^2 - (-2i)| = |z^2 + 2i|$.
    We know $z_0^2 = (1-i)^2 = 1 - 2i + i^2 = 1 - 2i - 1 = -2i$. So $L = z_0^2$.
    $|z^2 + 2i| = |z^2 - z_0^2| = |(z - z_0)(z + z_0)| = |z - z_0| |z + z_0|$.
    We are given $|z - z_0| < \delta$. We need to bound $|z + z_0|$.
    $z + z_0 = (z - z_0) + 2z_0 = (z - (1-i)) + 2(1-i) = (z - 1 + i) + (2 - 2i)$.
    $|z + z_0| = |(z - 1 + i) + (2 - 2i)| \le |z - 1 + i| + |2 - 2i|$.
    If we choose $\delta \le 1$, then $|z - (1-i)| < 1$.
    So, $|z + z_0| \le |z - (1-i)| + |2 - 2i| < 1 + \sqrt{2^2 + (-2)^2} = 1 + \sqrt{4+4} = 1 + \sqrt{8} = 1 + 2\sqrt{2}$.
    Now, $|z^2 + 2i| = |z - z_0| |z + z_0| < \delta (1 + 2\sqrt{2})$.
    We want this to be less than $\epsilon$. So, $\delta (1 + 2\sqrt{2}) < \epsilon$, which means $\delta < \frac{\epsilon}{1 + 2\sqrt{2}}$.
    To satisfy both conditions ($\delta \le 1$ and $\delta < \frac{\epsilon}{1 + 2\sqrt{2}}$), we choose $\delta = \min\left(1, \frac{\epsilon}{1 + 2\sqrt{2}}\right)$.
    Thus, the limit is proven.

---

### 6. Important Points to Remember

*   **The $\epsilon-\delta$ definition is the rigorous foundation for limits.** Understanding it is key to proving limit properties and understanding continuity.
*   **The path of approach matters.** If the limit of a complex function yields different values along different paths as $z$ approaches $z_0$, then the limit does not exist.
*   **Polynomials and rational functions are well-behaved.** Their limits can usually be found by direct substitution, provided the denominator is non-zero for rational functions.
*   **Limits at infinity can be handled by substitution ($z=1/w$) or by dividing by the highest power of $z$.**
*   **The conjugate $\bar{z}$ often leads to limits that do not exist** because it breaks the Cauchy-Riemann equations (which are central to analyticity, a later topic).

---

### 7. Alignment with Course Outcomes

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3)**
    While this topic is about limits, a strong understanding of limits is foundational for calculus operations (derivatives, integrals) that are used in defining and computing Fourier transforms. For example, the convergence of integrals, which is essential for Fourier transforms, relies on limit concepts.

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping. (Knowledge Level: K3)**
    The concept of a limit is the prerequisite for understanding **continuity**, which is the first step towards **analyticity**. A function is continuous at a point if the limit exists, equals the function's value at that point, and the function is defined at that point. Analyticity requires a function to be differentiable in a neighborhood, and differentiability itself is defined using a limit.

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)**
    Complex integration is defined as a limit of Riemann sums. Therefore, a firm grasp of limits is essential for understanding how complex integrals are formally defined and computed.

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)**
    Series expansions (like Taylor and Laurent series) involve limits in their definition and convergence criteria. The residue theorem, which is applied to compute integrals, is built upon the behavior of functions near singularities, which is understood through limits.

---

This topic on limits is the cornerstone for building your understanding of complex analysis as it applies to electrical science and physical science. Mastering these concepts will pave the way for more advanced topics in the course.
