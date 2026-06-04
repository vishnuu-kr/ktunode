---
title: "Complex Function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81068d"
status: "completed"
scrapedAt: "2026-05-20T18:41:16.194Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Function

### Topic: Complex Function

---

### Learning Outcomes (LO)

This module aims to equip students with the understanding and application of complex functions. Upon completion, you should be able to:

*   **LO1:** Understand the concept of a complex function and its representation.
*   **LO2:** Evaluate complex functions at specific complex numbers.
*   **LO3:** Understand the concept of the limit of a complex function.
*   **LO4:** Understand the concept of the continuity of a complex function.
*   **LO5:** Understand the concept of the derivative of a complex function.
*   **LO6:** Apply the Cauchy-Riemann equations to determine if a complex function is analytic.
*   **LO7:** Understand the definition and properties of analytic functions.
*   **LO8:** Understand the definition and properties of harmonic functions.
*   **LO9:** Understand the concept of elementary complex functions (exponential, trigonometric, logarithmic, and power functions).
*   **LO10:** Apply complex functions to solve problems in electrical science and physical science.

---

### 1. Introduction to Complex Functions

#### 1.1 What is a Complex Function?

A **complex function** is a function $f$ that maps a complex number $z$ from its domain (a subset of the complex plane $\mathbb{C}$) to another complex number $w$ in its codomain (also a subset of $\mathbb{C}$).

Mathematically, we write:
$w = f(z)$

Where $z = x + iy$ and $w = u + iv$.
Here, $x$ and $y$ are real variables, and $u$ and $v$ are also real variables. The function $f$ effectively maps a pair of real numbers $(x, y)$ to another pair of real numbers $(u, v)$.

#### 1.2 Representation of Complex Functions

A complex function $f(z)$ can be expressed in terms of its real and imaginary parts. If $z = x + iy$, then:

$f(z) = f(x + iy) = u(x, y) + iv(x, y)$

Where $u(x, y)$ is the **real part** of $f(z)$ and $v(x, y)$ is the **imaginary part** of $f(z)$.

**Example:**
Let $f(z) = z^2$.
If $z = x + iy$, then
$f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2$
$f(z) = (x^2 - y^2) + i(2xy)$

So, for $f(z) = z^2$:
*   Real part: $u(x, y) = x^2 - y^2$
*   Imaginary part: $v(x, y) = 2xy$

#### 1.3 Domain and Range of a Complex Function

*   **Domain:** The set of all complex numbers $z$ for which the function $f(z)$ is defined.
*   **Range:** The set of all complex numbers $w$ that are the output of $f(z)$ for all $z$ in the domain.

**Important Note:** Unless specified, the domain of a complex function is usually taken to be the largest subset of $\mathbb{C}$ for which the function is defined.

---

### 2. Evaluating Complex Functions (LO2)

To evaluate a complex function, substitute the given complex number for $z$ and simplify the expression.

**Example 1:**
If $f(z) = 3z^2 - 2z + 1$, evaluate $f(1 + i)$.

Substitute $z = 1 + i$:
$f(1 + i) = 3(1 + i)^2 - 2(1 + i) + 1$
$f(1 + i) = 3(1 + 2i + i^2) - 2 - 2i + 1$
$f(1 + i) = 3(1 + 2i - 1) - 1 - 2i$
$f(1 + i) = 3(2i) - 1 - 2i$
$f(1 + i) = 6i - 1 - 2i$
$f(1 + i) = -1 + 4i$

**Example 2:**
If $f(z) = \frac{1}{z}$, evaluate $f(2 - 3i)$.

Substitute $z = 2 - 3i$:
$f(2 - 3i) = \frac{1}{2 - 3i}$

To simplify, multiply the numerator and denominator by the conjugate of the denominator ($2 + 3i$):
$f(2 - 3i) = \frac{1}{2 - 3i} \times \frac{2 + 3i}{2 + 3i} = \frac{2 + 3i}{(2)^2 - (3i)^2}$
$f(2 - 3i) = \frac{2 + 3i}{4 - 9i^2} = \frac{2 + 3i}{4 - 9(-1)} = \frac{2 + 3i}{4 + 9} = \frac{2 + 3i}{13}$
$f(2 - 3i) = \frac{2}{13} + i\frac{3}{13}$

---

### 3. Limits of Complex Functions (LO3)

The limit of a complex function $f(z)$ as $z$ approaches $z_0$ is $L$ if, for every positive number $\epsilon$, there exists a positive number $\delta$ such that if $0 < |z - z_0| < \delta$, then $|f(z) - L| < \epsilon$.

**Definition:**
$\lim_{z \to z_0} f(z) = L$ if for every $\epsilon > 0$, there exists a $\delta > 0$ such that
$|f(z) - L| < \epsilon$ whenever $0 < |z - z_0| < \delta$.

**Key Idea:** For the limit to exist, the function must approach the same value $L$ regardless of the path along which $z$ approaches $z_0$.

**Using Real and Imaginary Parts:**
If $f(z) = u(x, y) + iv(x, y)$ and $z_0 = x_0 + iy_0$, then
$\lim_{z \to z_0} f(z) = \lim_{(x, y) \to (x_0, y_0)} u(x, y) + i \lim_{(x, y) \to (x_0, y_0)} v(x, y)$
provided both real and imaginary limits exist.

**Example:**
Evaluate $\lim_{z \to 1+i} z^2$.

Let $f(z) = z^2 = (x^2 - y^2) + i(2xy)$.
Here $z_0 = 1 + i$, so $x_0 = 1$ and $y_0 = 1$.

We need to evaluate:
$\lim_{(x, y) \to (1, 1)} (x^2 - y^2)$ and $\lim_{(x, y) \to (1, 1)} (2xy)$

Since $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$ are polynomials in $x$ and $y$, they are continuous everywhere. Thus, we can substitute the values:

$\lim_{(x, y) \to (1, 1)} (x^2 - y^2) = 1^2 - 1^2 = 0$
$\lim_{(x, y) \to (1, 1)} (2xy) = 2(1)(1) = 2$

Therefore, $\lim_{z \to 1+i} z^2 = 0 + i(2) = 2i$.

Alternatively, since $f(z) = z^2$ is a polynomial, it is continuous everywhere, so the limit can be found by direct substitution:
$\lim_{z \to 1+i} z^2 = (1 + i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$.

**Example of a Limit Not Existing:**
Consider $f(z) = \frac{z}{\bar{z}}$. Let's check the limit as $z \to 0$.
Let $z = x + iy$. Then $\bar{z} = x - iy$.
$f(z) = \frac{x + iy}{x - iy}$.

Consider approaching 0 along the real axis ($y = 0, x \to 0$):
$\lim_{x \to 0} \frac{x}{x} = 1$.

Consider approaching 0 along the imaginary axis ($x = 0, y \to 0$):
$\lim_{y \to 0} \frac{iy}{-iy} = -1$.

Since the limit is different along different paths, $\lim_{z \to 0} \frac{z}{\bar{z}}$ does not exist.

---

### 4. Continuity of Complex Functions (LO4)

A complex function $f(z)$ is **continuous** at a point $z_0$ if:
1.  $f(z_0)$ is defined.
2.  $\lim_{z \to z_0} f(z)$ exists.
3.  $\lim_{z \to z_0} f(z) = f(z_0)$.

**In terms of real and imaginary parts:**
If $f(z) = u(x, y) + iv(x, y)$, then $f(z)$ is continuous at $z_0 = x_0 + iy_0$ if and only if its real part $u(x, y)$ and its imaginary part $v(x, y)$ are continuous as functions of two real variables at $(x_0, y_0)$.

**Important Points:**
*   Polynomials in $z$ are continuous everywhere.
*   Rational functions (ratio of polynomials) are continuous everywhere except where the denominator is zero.
*   Sums, differences, products, and quotients (where the denominator is non-zero) of continuous functions are continuous.

**Example:**
Is $f(z) = |z|^2$ continuous at $z = 0$?

1.  $f(0) = |0|^2 = 0$. Defined.
2.  We need to evaluate $\lim_{z \to 0} |z|^2$.
    $|z|^2 = z \bar{z} = (x + iy)(x - iy) = x^2 + y^2$.
    $\lim_{z \to 0} |z|^2 = \lim_{(x, y) \to (0, 0)} (x^2 + y^2)$.
    Since $x^2 + y^2$ is a polynomial, we can substitute: $0^2 + 0^2 = 0$.
    So, the limit exists and is 0.
3.  Since $\lim_{z \to 0} f(z) = 0$ and $f(0) = 0$, we have $\lim_{z \to 0} f(z) = f(0)$.

Therefore, $f(z) = |z|^2$ is continuous at $z = 0$.

---

### 5. Derivative of Complex Functions (LO5)

The derivative of a complex function $f(z)$ at a point $z_0$ is defined as:

$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$

provided this limit exists.

**Key Idea:** Similar to real calculus, the derivative represents the instantaneous rate of change. The existence of the derivative is a much stronger condition than continuity.

**In terms of real and imaginary parts:**
Let $f(z) = u(x, y) + iv(x, y)$. For $f'(z)$ to exist, the limit must be independent of the path $\Delta z$ takes to approach 0. This leads to the **Cauchy-Riemann equations**.

**Example:**
Find the derivative of $f(z) = z^2$.

Using the definition:
$f'(z) = \lim_{\Delta z \to 0} \frac{(z + \Delta z)^2 - z^2}{\Delta z}$
$f'(z) = \lim_{\Delta z \to 0} \frac{z^2 + 2z\Delta z + (\Delta z)^2 - z^2}{\Delta z}$
$f'(z) = \lim_{\Delta z \to 0} \frac{2z\Delta z + (\Delta z)^2}{\Delta z}$
$f'(z) = \lim_{\Delta z \to 0} (2z + \Delta z)$
$f'(z) = 2z$

This matches the derivative we would get from real calculus.

---

### 6. Cauchy-Riemann Equations (LO6)

The **Cauchy-Riemann equations** are a necessary condition for a complex function to be differentiable (and hence analytic).

Let $f(z) = u(x, y) + iv(x, y)$. If $f(z)$ is differentiable at $z_0 = x_0 + iy_0$, then the partial derivatives of $u$ and $v$ at $(x_0, y_0)$ must satisfy:

$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
and
$\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

These are the Cauchy-Riemann equations.

**Sufficiency Condition:**
If the partial derivatives $\frac{\partial u}{\partial x}, \frac{\partial u}{\partial y}, \frac{\partial v}{\partial x}, \frac{\partial v}{\partial y}$ exist in some neighborhood of $(x_0, y_0)$, are continuous at $(x_0, y_0)$, and satisfy the Cauchy-Riemann equations at $(x_0, y_0)$, then $f(z)$ is differentiable at $z_0$.

**The derivative $f'(z)$ can be computed as:**
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$
or
$f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$

**Example:**
Determine if $f(z) = z^3$ is differentiable.

$f(z) = (x + iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3$
$f(z) = x^3 + 3ix^2y - 3xy^2 - iy^3$
$f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3)$

So, $u(x, y) = x^3 - 3xy^2$ and $v(x, y) = 3x^2y - y^3$.

Calculate the partial derivatives:
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
$\frac{\partial u}{\partial y} = -6xy$
$\frac{\partial v}{\partial x} = 6xy$
$\frac{\partial v}{\partial y} = 3x^2 - 3y^2$

Check the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$ and $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$. They are equal.
2.  $\frac{\partial u}{\partial y} = -6xy$ and $-\frac{\partial v}{\partial x} = -(6xy) = -6xy$. They are equal.

Since the Cauchy-Riemann equations are satisfied for all $x, y$, and the partial derivatives are continuous polynomials, $f(z) = z^3$ is differentiable everywhere.

The derivative is:
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = (3x^2 - 3y^2) + i(6xy)$

We can also express this in terms of $z$:
$z^2 = (x + iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$.
$3z^2 = 3(x^2 - y^2) + i(6xy) = (3x^2 - 3y^2) + i(6xy)$.
This matches.

---

### 7. Analytic Functions (LO7)

A complex function $f(z)$ is said to be **analytic** (or **holomorphic**) at a point $z_0$ if it is differentiable not only at $z_0$ but also at every point in some neighborhood (an open disk) around $z_0$.

A function is **analytic in a region** if it is analytic at every point in that region.

**Important Properties of Analytic Functions:**
*   If $f(z)$ is analytic in a region, then $f'(z)$ is also analytic in that region.
*   Sums, differences, products, and quotients (where the denominator is non-zero) of analytic functions are analytic.
*   Composition of analytic functions is analytic.
*   If $f(z)$ is analytic, its real and imaginary parts are harmonic functions (see Section 8).

**Example:**
$f(z) = z^n$ for any integer $n \ge 0$ is analytic everywhere.
$f(z) = e^z$ is analytic everywhere.
$f(z) = \frac{1}{z}$ is analytic everywhere except at $z=0$.

**Non-Analytic Example:**
$f(z) = \bar{z}$
$f(z) = x - iy$.
$u(x, y) = x$, $v(x, y) = -y$.
$\frac{\partial u}{\partial x} = 1$
$\frac{\partial v}{\partial y} = -1$
Since $\frac{\partial u}{\partial x} \neq \frac{\partial v}{\partial y}$, the Cauchy-Riemann equations are not satisfied. Thus, $f(z) = \bar{z}$ is nowhere differentiable, and therefore nowhere analytic.

---

### 8. Harmonic Functions (LO8)

A real-valued function $u(x, y)$ of two real variables is called **harmonic** in a region if it has continuous second-order partial derivatives in that region and satisfies **Laplace's equation**:

$\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$

**Relationship with Analytic Functions:**
If $f(z) = u(x, y) + iv(x, y)$ is analytic in a region, then both its real part $u(x, y)$ and its imaginary part $v(x, y)$ are harmonic functions in that region.

The function $v(x, y)$ is called the **harmonic conjugate** of $u(x, y)$.

**To find the harmonic conjugate:**
If $u(x, y)$ is given and is harmonic, we can find $v(x, y)$ by using the Cauchy-Riemann equations:
$\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$
$\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$

Integrate the first equation with respect to $y$ to find $v(x, y)$ in terms of $x$ and an arbitrary function of $x$. Then differentiate this expression for $v$ with respect to $x$ and equate it to $-\frac{\partial u}{\partial y}$ to find the arbitrary function of $x$.

**Example:**
Show that $u(x, y) = x^2 - y^2$ is harmonic and find its harmonic conjugate.

1.  Check for continuity of second-order partial derivatives:
    $\frac{\partial u}{\partial x} = 2x$
    $\frac{\partial^2 u}{\partial x^2} = 2$
    $\frac{\partial u}{\partial y} = -2y$
    $\frac{\partial^2 u}{\partial y^2} = -2$
    The second-order partial derivatives are continuous.

2.  Check Laplace's equation:
    $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$.
    So, $u(x, y)$ is harmonic.

3.  Find the harmonic conjugate $v(x, y)$:
    From Cauchy-Riemann equations:
    $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x$
    $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y$

    Integrate $\frac{\partial v}{\partial y} = 2x$ with respect to $y$:
    $v(x, y) = \int 2x dy = 2xy + g(x)$ (where $g(x)$ is an arbitrary function of $x$).

    Now, differentiate this expression for $v$ with respect to $x$:
    $\frac{\partial v}{\partial x} = 2y + g'(x)$

    Equate this with the second Cauchy-Riemann equation:
    $2y + g'(x) = 2y$
    $g'(x) = 0$
    $g(x) = C$ (a constant)

    So, $v(x, y) = 2xy + C$.

    The analytic function is $f(z) = u(x, y) + iv(x, y) = (x^2 - y^2) + i(2xy + C)$.
    We recognize $x^2 - y^2$ and $2xy$ as the real and imaginary parts of $z^2$.
    $z^2 = (x + iy)^2 = x^2 - y^2 + i(2xy)$.
    So, $f(z) = z^2 + iC$.
    This confirms that $u(x, y) = x^2 - y^2$ is part of an analytic function ($z^2$).

---

### 9. Elementary Complex Functions (LO9)

These are fundamental functions that extend their real-valued counterparts to the complex domain.

#### 9.1 Exponential Function

The complex exponential function is defined as:
$e^z = e^{x + iy} = e^x e^{iy}$

Using Euler's formula, $e^{iy} = \cos(y) + i \sin(y)$:
$e^z = e^x (\cos(y) + i \sin(y))$
$e^z = e^x \cos(y) + i e^x \sin(y)$

So, for $f(z) = e^z$:
*   $u(x, y) = e^x \cos(y)$
*   $v(x, y) = e^x \sin(y)$

**Properties:**
*   $e^{z_1 + z_2} = e^{z_1} e^{z_2}$
*   $e^z \neq 0$ for any $z \in \mathbb{C}$.
*   $e^{z + 2\pi i} = e^z$ (periodic with period $2\pi i$)
*   The derivative of $e^z$ is $e^z$.
*   $|e^z| = e^x$.
*   $\arg(e^z) = y + 2k\pi$ for integer $k$.

**Example:**
Evaluate $e^{1 + i\pi/2}$.
$e^{1 + i\pi/2} = e^1 (\cos(\pi/2) + i \sin(\pi/2)) = e (0 + i(1)) = ie$.

#### 9.2 Trigonometric Functions

Defined using the exponential function:
$\cos(z) = \frac{e^{iz} + e^{-iz}}{2}$
$\sin(z) = \frac{e^{iz} - e^{-iz}}{2i}$

Using $z = x + iy$:
$iz = i(x + iy) = ix - y$
$-iz = -ix + y$

$e^{iz} = e^{ix - y} = e^{-y}(\cos(x) + i \sin(x))$
$e^{-iz} = e^{-ix + y} = e^{y}(\cos(-x) + i \sin(-x)) = e^{y}(\cos(x) - i \sin(x))$

$\cos(z) = \frac{e^{-y}(\cos(x) + i \sin(x)) + e^{y}(\cos(x) - i \sin(x))}{2}$
$\cos(z) = \cos(x) \left(\frac{e^{-y} + e^y}{2}\right) - i \sin(x) \left(\frac{e^{-y} - e^y}{2}\right)$
$\cos(z) = \cos(x) \cosh(y) - i \sin(x) \sinh(y)$

$\sin(z) = \frac{e^{-y}(\cos(x) + i \sin(x)) - e^{y}(\cos(x) - i \sin(x))}{2i}$
$\sin(z) = \frac{\cos(x)(e^{-y} - e^y) + i \sin(x)(e^{-y} + e^y)}{2i}$
$\sin(z) = \frac{\cos(x)(-2\sinh(y)) + i \sin(x)(2\cosh(y))}{2i}$
$\sin(z) = \frac{-2i \cos(x)\sinh(y) - 2 \sin(x)\cosh(y)}{2i}$
$\sin(z) = \sin(x) \cosh(y) + i \cos(x) \sinh(y)$

**Properties:**
*   $\cos^2(z) + \sin^2(z) = 1$
*   $\cos(z_1 + z_2) = \cos(z_1)\cos(z_2) - \sin(z_1)\sin(z_2)$
*   $\sin(z_1 + z_2) = \sin(z_1)\cos(z_2) + \cos(z_1)\sin(z_2)$
*   $\frac{d}{dz} \cos(z) = -\sin(z)$
*   $\frac{d}{dz} \sin(z) = \cos(z)$
*   $\cos(z)$ and $\sin(z)$ are analytic everywhere.

**Example:**
Evaluate $\cos(i)$.
$\cos(i) = \cos(0) \cosh(1) - i \sin(0) \sinh(1) = 1 \cdot \cosh(1) - i \cdot 0 \cdot \sinh(1) = \cosh(1) = \frac{e^1 + e^{-1}}{2}$.

#### 9.3 Logarithmic Function

The complex logarithm is the inverse of the exponential function. If $w = e^z$, then $z = \log(w)$.
Let $z = x + iy$ and $w = r e^{i\theta}$.
We have $w = r e^{i(\theta + 2k\pi)}$ for any integer $k$, due to the periodicity of $e^{i\theta}$.

$e^{x + iy} = r e^{i(\theta + 2k\pi)}$
$e^x e^{iy} = r e^{i(\theta + 2k\pi)}$

Equating magnitudes and arguments:
$e^x = r \implies x = \ln(r)$ (where $\ln$ is the real natural logarithm)
$y = \theta + 2k\pi$

So, $\log(w) = \ln|w| + i \arg(w)$.
Since $\arg(w)$ is multi-valued, $\log(w)$ is also multi-valued.
$\log(w) = \ln|w| + i (\text{Arg}(w) + 2k\pi)$, where $\text{Arg}(w)$ is the principal value of the argument ($-\pi < \text{Arg}(w) \le \pi$).

The **principal value of the logarithm**, denoted $\text{Log}(w)$, is obtained by using the principal value of the argument:
$\text{Log}(w) = \ln|w| + i \text{Arg}(w)$

**Properties:**
*   $\log(w_1 w_2) = \log(w_1) + \log(w_2)$ (but this must be handled carefully due to the multi-valued nature).
*   $\frac{d}{dz} \log(z) = \frac{1}{z}$ (for the principal branch).
*   The logarithmic function is not analytic at $z=0$ and along the negative real axis for the principal branch.

**Example:**
Find $\log(-1)$.
$w = -1$. $|w| = |-1| = 1$. $\text{Arg}(w) = \pi$.
$\log(-1) = \ln(1) + i (\pi + 2k\pi) = 0 + i\pi(1 + 2k) = i\pi(2k+1)$, for $k \in \mathbb{Z}$.
The principal value is $\text{Log}(-1) = i\pi$.

#### 9.4 Power Functions

The complex power function $z^c$ is defined as:
$z^c = e^{c \log(z)}$
where $c$ is a complex number.

Again, due to the multi-valued nature of $\log(z)$, $z^c$ is generally multi-valued.

**Principal Value:**
The principal value of $z^c$ is given by:
$z^c = e^{c \text{Log}(z)}$

**Special Case: $z^n$ where $n$ is an integer.**
If $n$ is a positive integer, $z^n$ is a polynomial, analytic everywhere.
If $n$ is a negative integer, $z^n = 1/z^{-n}$, analytic everywhere except $z=0$.

**Example:**
Find the principal value of $i^i$.
$i^i = e^{i \text{Log}(i)}$
$\text{Log}(i) = \ln|i| + i \text{Arg}(i) = \ln(1) + i(\pi/2) = i\pi/2$.

$i^i = e^{i (i\pi/2)} = e^{-\pi/2}$.
This is a real number!

---

### 10. Applications of Complex Functions (LO10)

Complex functions are powerful tools in many areas of electrical science and physical science.

#### 10.1 Electrical Science

*   **AC Circuit Analysis:** Impedance ($Z$) is a complex quantity. $V = IZ$, where $V$ and $I$ are complex phasors representing voltage and current.
    *   Resistor: $Z_R = R$ (real)
    *   Inductor: $Z_L = j\omega L$ (purely imaginary)
    *   Capacitor: $Z_C = \frac{1}{j\omega C} = \frac{-j}{\omega C}$ (purely imaginary)
    The total impedance of series/parallel combinations involves complex arithmetic.
*   **Signal Processing:** Fourier Transforms and Laplace Transforms use complex exponentials ($e^{j\omega t}$ or $e^{st}$) to analyze signals.
*   **Control Systems:** Stability analysis often involves studying the roots of characteristic polynomials in the complex plane (poles and zeros).
*   **Electromagnetism:** Complex numbers are used to represent electric and magnetic fields, wave propagation, etc.

**Example (AC Circuit):**
Consider a series RLC circuit with a voltage source $V = 10 \angle 0^\circ$ V (which can be represented as the complex number $10 + 0i$).
Let $R = 5 \Omega$, $L = 0.1$ H, $C = 0.01$ F, and the angular frequency $\omega = 100$ rad/s.

Calculate the impedance of each component:
$Z_R = R = 5 \Omega$
$Z_L = j\omega L = j(100)(0.1) = j10 \Omega$
$Z_C = \frac{1}{j\omega C} = \frac{1}{j(100)(0.01)} = \frac{1}{j} = -j \Omega$

Total impedance:
$Z_{total} = Z_R + Z_L + Z_C = 5 + j10 - j = 5 + j9 \Omega$

Calculate the current $I = \frac{V}{Z_{total}}$:
$I = \frac{10}{5 + j9}$
$I = \frac{10}{5 + j9} \times \frac{5 - j9}{5 - j9} = \frac{10(5 - j9)}{5^2 + 9^2} = \frac{50 - j90}{25 + 81} = \frac{50 - j90}{106}$
$I = \frac{50}{106} - j\frac{90}{106} = \frac{25}{53} - j\frac{45}{53} A$

This complex current represents the magnitude and phase of the current.
Magnitude $|I| = \sqrt{(\frac{25}{53})^2 + (-\frac{45}{53})^2} \approx 0.994$ A.
Phase $\arg(I) = \arctan\left(\frac{-45/53}{25/53}\right) = \arctan\left(-\frac{45}{25}\right) = \arctan(-1.8) \approx -60.95^\circ$.

#### 10.2 Physical Science

*   **Quantum Mechanics:** Wave functions are complex-valued. The Schrödinger equation involves complex numbers.
*   **Fluid Dynamics:** Complex potentials can be used to model 2D fluid flow.
*   **Optics:** Complex numbers are used to describe the amplitude and phase of light waves, polarization, and refractive index.
*   **Heat Transfer:** Complex analysis can sometimes be applied to solve certain boundary value problems.

**Example (Fluid Dynamics - Potential Flow):**
Consider a uniform flow in the positive x-direction with velocity $V_0$. The complex potential is $F(z) = V_0 z$.
$F(z) = V_0 (x + iy) = V_0 x + i V_0 y$.
Here, $\phi(x, y) = V_0 x$ (velocity potential) and $\psi(x, y) = V_0 y$ (stream function).
The velocity vector is $\mathbf{v} = \nabla \phi = (\frac{\partial \phi}{\partial x}, \frac{\partial \phi}{\partial y}) = (V_0, 0)$, which is correct for a uniform flow.
The level curves of $\psi$ (streamlines) are $V_0 y = C$, which are horizontal lines, indicating the flow is purely horizontal.

---

### Practice Questions

1.  **Evaluate:** If $f(z) = 2z^2 - 3z + 1$, find $f(1 - i)$.
2.  **Evaluate:** Find $f(2 + i)$ if $f(z) = \frac{1}{z-1}$.
3.  **Limit:** Evaluate $\lim_{z \to i} z^3$.
4.  **Continuity:** Is $f(z) = \frac{z^2 - 1}{z - i}$ continuous at $z = i$? Justify your answer.
5.  **Cauchy-Riemann:** Verify if $f(z) = z \bar{z}$ is differentiable.
6.  **Cauchy-Riemann:** For $f(z) = x^2 + iy^2$, find $\frac{\partial u}{\partial x}, \frac{\partial u}{\partial y}, \frac{\partial v}{\partial x}, \frac{\partial v}{\partial y}$. Do the Cauchy-Riemann equations hold? Is $f(z)$ analytic?
7.  **Analyticity:** Determine if $f(z) = e^{\bar{z}}$ is analytic.
8.  **Harmonic Functions:** Show that $u(x, y) = e^x \cos(y)$ is harmonic. Find its harmonic conjugate $v(x, y)$ and the corresponding analytic function $f(z)$.
9.  **Logarithm:** Find the principal value of $\log(1 + i)$.
10. **Power Function:** Find the principal value of $(-1)^{1/2}$.
11. **AC Circuit:** A voltage of $V = 5 \angle 30^\circ$ V is applied to a series circuit with $R = 10 \Omega$ and $L = 0.2$ H at a frequency of $f = 60$ Hz. Calculate the total impedance and the current. (Use $\omega = 2\pi f$).

---

### Answers to Practice Questions

1.  $f(1 - i) = 2(1 - i)^2 - 3(1 - i) + 1 = 2(1 - 2i + i^2) - 3 + 3i + 1 = 2(1 - 2i - 1) - 2 + 3i = 2(-2i) - 2 + 3i = -4i - 2 + 3i = -2 - i$.
2.  $f(2 + i) = \frac{1}{(2 + i) - 1} = \frac{1}{1 + i} = \frac{1}{1 + i} \times \frac{1 - i}{1 - i} = \frac{1 - i}{1^2 - i^2} = \frac{1 - i}{1 - (-1)} = \frac{1 - i}{2} = \frac{1}{2} - \frac{1}{2}i$.
3.  $\lim_{z \to i} z^3 = i^3 = -i$.
4.  $f(z) = \frac{z^2 - 1}{z - i}$. At $z=i$, the denominator is zero, so the function is not defined at $z=i$. Therefore, it is not continuous at $z=i$.
5.  $f(z) = z \bar{z} = x^2 + y^2$. $u(x, y) = x^2 + y^2$, $v(x, y) = 0$.
    $\frac{\partial u}{\partial x} = 2x$, $\frac{\partial v}{\partial y} = 0$. For Cauchy-Riemann, $2x = 0 \implies x = 0$.
    $\frac{\partial u}{\partial y} = 2y$, $\frac{\partial v}{\partial x} = 0$. For Cauchy-Riemann, $2y = 0 \implies y = 0$.
    The Cauchy-Riemann equations only hold at $z = 0$. For differentiability, the partial derivatives must satisfy the C-R equations in a neighborhood. Therefore, $f(z) = z \bar{z}$ is not differentiable.
6.  $f(z) = x^2 + iy^2$. $u(x, y) = x^2$, $v(x, y) = y^2$.
    $\frac{\partial u}{\partial x} = 2x$, $\frac{\partial u}{\partial y} = 0$.
    $\frac{\partial v}{\partial x} = 0$, $\frac{\partial v}{\partial y} = 2y$.
    Cauchy-Riemann equations:
    $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 2x = 2y \implies x = y$.
    $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies 0 = -0 \implies 0 = 0$.
    The C-R equations only hold when $x = y$. Therefore, $f(z)$ is not analytic.
7.  $f(z) = e^{\bar{z}}$. Let $z = x + iy$, so $\bar{z} = x - iy$.
    $f(z) = e^{x - iy} = e^x e^{-iy} = e^x (\cos(-y) + i \sin(-y)) = e^x (\cos(y) - i \sin(y))$.
    $u(x, y) = e^x \cos(y)$, $v(x, y) = -e^x \sin(y)$.
    $\frac{\partial u}{\partial x} = e^x \cos(y)$
    $\frac{\partial v}{\partial y} = -e^x \cos(y)$
    $\frac{\partial u}{\partial y} = -e^x \sin(y)$
    $\frac{\partial v}{\partial x} = -e^x \sin(y)$
    For C-R equations:
    $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies e^x \cos(y) = -e^x \cos(y) \implies 2e^x \cos(y) = 0$. This implies $\cos(y) = 0$, so $y = \pi/2 + k\pi$.
    $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies -e^x \sin(y) = -(-e^x \sin(y)) \implies -e^x \sin(y) = e^x \sin(y) \implies 2e^x \sin(y) = 0$. This implies $\sin(y) = 0$, so $y = k\pi$.
    These two conditions ($y = \pi/2 + k\pi$ and $y = k\pi$) cannot both be true simultaneously. Thus, the Cauchy-Riemann equations are never satisfied. $f(z) = e^{\bar{z}}$ is nowhere analytic.
8.  $u(x, y) = e^x \cos(y)$.
    $\frac{\partial u}{\partial x} = e^x \cos(y)$, $\frac{\partial^2 u}{\partial x^2} = e^x \cos(y)$.
    $\frac{\partial u}{\partial y} = -e^x \sin(y)$, $\frac{\partial^2 u}{\partial y^2} = -e^x \cos(y)$.
    $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = e^x \cos(y) - e^x \cos(y) = 0$. So, $u(x, y)$ is harmonic.
    Find $v(x, y)$:
    $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = e^x \cos(y) \implies v(x, y) = \int e^x \cos(y) dy = e^x \sin(y) + g(x)$.
    $\frac{\partial v}{\partial x} = e^x \sin(y) + g'(x)$.
    Equate with $-\frac{\partial u}{\partial y}$:
    $e^x \sin(y) + g'(x) = -(-e^x \sin(y)) = e^x \sin(y)$.
    $g'(x) = 0 \implies g(x) = C$.
    So, $v(x, y) = e^x \sin(y) + C$.
    The analytic function is $f(z) = u(x, y) + iv(x, y) = e^x \cos(y) + i(e^x \sin(y) + C) = e^x(\cos(y) + i \sin(y)) + iC = e^x e^{iy} + iC = e^{x+iy} + iC = e^z + iC$.
9.  $w = 1 + i$. $|w| = \sqrt{1^2 + 1^2} = \sqrt{2}$. $\text{Arg}(w) = \arctan(1/1) = \pi/4$.
    $\text{Log}(1 + i) = \ln|1 + i| + i \text{Arg}(1 + i) = \ln(\sqrt{2}) + i\frac{\pi}{4} = \frac{1}{2}\ln(2) + i\frac{\pi}{4}$.
10. Principal value of $(-1)^{1/2}$.
    $(-1)^{1/2} = e^{\frac{1}{2} \text{Log}(-1)}$.
    $\text{Log}(-1) = \ln|-1| + i \text{Arg}(-1) = \ln(1) + i\pi = i\pi$.
    $(-1)^{1/2} = e^{\frac{1}{2} (i\pi)} = e^{i\pi/2} = \cos(\pi/2) + i \sin(\pi/2) = 0 + i(1) = i$.
    (This is the principal root of $z^2 = -1$, which is $i$).
11. $f = 60$ Hz. $\omega = 2\pi f = 2\pi (60) = 120\pi$ rad/s.
    $V = 5 \angle 30^\circ$ V $\implies V = 5(\cos(30^\circ) + i \sin(30^\circ)) = 5(\frac{\sqrt{3}}{2} + i \frac{1}{2}) = \frac{5\sqrt{3}}{2} + i \frac{5}{2}$.
    $R = 10 \Omega$.
    $Z_L = j\omega L = j(120\pi)(0.2) = j24\pi \Omega$.
    $Z_{total} = R + Z_L = 10 + j24\pi \Omega$.
    $I = \frac{V}{Z_{total}} = \frac{5(\frac{\sqrt{3}}{2} + i \frac{1}{2})}{10 + j24\pi}$.
    $|Z_{total}| = \sqrt{10^2 + (24\pi)^2} = \sqrt{100 + 576\pi^2} \approx \sqrt{100 + 5685} = \sqrt{5785} \approx 76.06 \Omega$.
    $\arg(Z_{total}) = \arctan(\frac{24\pi}{10}) = \arctan(2.4\pi) \approx \arctan(7.54) \approx 82.41^\circ$.
    $|I| = \frac{|V|}{|Z_{total}|} = \frac{5}{76.06} \approx 0.0657$ A.
    $\arg(I) = \arg(V) - \arg(Z_{total}) = 30^\circ - 82.41^\circ = -52.41^\circ$.
    So, $I \approx 0.0657 \angle -52.41^\circ$ A.

---

### Important Points to Remember

*   A complex function maps $\mathbb{C} \to \mathbb{C}$.
*   $f(z) = u(x, y) + iv(x, y)$. Limits and continuity depend on the existence of limits and continuity of $u$ and $v$ as real functions of two variables.
*   The existence of the derivative is a strong condition. The Cauchy-Riemann equations are necessary for differentiability.
*   Analytic functions are differentiable in a neighborhood.
*   Harmonic functions satisfy Laplace's equation ($\nabla^2 u = 0$). If $f(z)$ is analytic, its real and imaginary parts are harmonic.
*   Elementary functions ($e^z$, $\sin z$, $\cos z$, $\log z$, $z^c$) have specific definitions and properties in the complex plane, often leading to multi-valuedness (especially for $\log z$ and $z^c$).
*   Complex numbers (and functions) are crucial for analyzing AC circuits, signals, and various physical phenomena where phase is as important as amplitude.
