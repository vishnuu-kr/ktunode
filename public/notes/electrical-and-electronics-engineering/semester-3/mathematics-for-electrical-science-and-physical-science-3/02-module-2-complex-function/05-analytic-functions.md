---
title: "Analytic functions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a66"
status: "completed"
scrapedAt: "2026-05-23T16:14:32.442Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Analytic Functions

---

This module delves into the fascinating world of complex functions, building upon the foundational understanding of complex numbers. We will explore the concept of analyticity, a crucial property that underpins many powerful theorems and applications in electrical and physical sciences, particularly in areas like fluid dynamics, electromagnetism, and signal processing.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **LO1:** Understand the concept of a complex function and its domain.
*   **LO2:** Define and identify differentiable complex functions.
*   **LO3:** State and apply the Cauchy-Riemann equations to determine the analyticity of a complex function.
*   **LO4:** Understand the properties of analytic functions and their significance.
*   **LO5:** Recognize and work with elementary analytic functions (e.g., exponential, logarithmic, trigonometric).

---

### 1. Complex Functions and Their Domain

#### 1.1 Definition of a Complex Function

A **complex function** is a function whose domain and/or range are sets of complex numbers. We typically denote a complex function as $f(z)$, where $z$ is a complex variable.

A complex variable $z$ can be written in rectangular form as $z = x + iy$, where $x$ is the real part ($Re(z)$) and $y$ is the imaginary part ($Im(z)$).

Therefore, a complex function $f(z)$ can be expressed in terms of its real and imaginary parts as:
$f(z) = u(x, y) + iv(x, y)$
where $u(x, y)$ is the real-valued real part and $v(x, y)$ is the real-valued imaginary part of $f(z)$.

#### 1.2 Domain of a Complex Function

The **domain** of a complex function $f(z)$ is the set of all complex numbers $z$ for which the function is defined.

**Example:**
For $f(z) = z^2 + 3z$, the domain is all complex numbers $\mathbb{C}$, as the function is defined for every $z$.
For $f(z) = \frac{1}{z}$, the domain is all complex numbers except $z=0$.

#### 1.3 Visualizing Complex Functions (Brief Mention)

Visualizing complex functions often involves mapping points from the $z$-plane (domain) to the $w$-plane (range), where $w = f(z)$. This is a fundamental concept that leads to conformal mapping, discussed in later topics.

---

### 2. Differentiability of Complex Functions

#### 2.1 Definition of Complex Derivative

A complex function $f(z)$ is said to be **differentiable** at a point $z_0$ if the limit of the difference quotient exists as $\Delta z \to 0$:

$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$

**Important Note:** For this limit to exist, it must be the same regardless of the path along which $\Delta z \to 0$ in the complex plane. This is a key difference from the differentiability of real functions.

#### 2.2 Conditions for Differentiability

The existence of the limit implies that $f(z)$ must be continuous at $z_0$. However, differentiability is a much stronger condition.

---

### 3. The Cauchy-Riemann Equations

The Cauchy-Riemann equations provide a necessary and sufficient condition for a complex function to be differentiable at a point, assuming its partial derivatives exist and are continuous.

#### 3.1 Derivation and Statement

Let $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$.
Consider the limit for the derivative:

$f'(z) = \lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z}$

We can approach $\Delta z \to 0$ along two paths:

1.  **Along the real axis:** $\Delta z = \Delta x$ (so $\Delta y = 0$).
    $f'(z) = \lim_{\Delta x \to 0} \frac{u(x + \Delta x, y) + iv(x + \Delta x, y) - [u(x, y) + iv(x, y)]}{\Delta x}$
    $f'(z) = \lim_{\Delta x \to 0} \frac{u(x + \Delta x, y) - u(x, y)}{\Delta x} + i \lim_{\Delta x \to 0} \frac{v(x + \Delta x, y) - v(x, y)}{\Delta x}$
    $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$  (Equation A)

2.  **Along the imaginary axis:** $\Delta z = i \Delta y$ (so $\Delta x = 0$).
    $f'(z) = \lim_{\Delta y \to 0} \frac{u(x, y + \Delta y) + iv(x, y + \Delta y) - [u(x, y) + iv(x, y)]}{i \Delta y}$
    $f'(z) = \lim_{\Delta y \to 0} \frac{u(x, y + \Delta y) - u(x, y)}{i \Delta y} + i \lim_{\Delta y \to 0} \frac{v(x, y + \Delta y) - v(x, y)}{i \Delta y}$
    $f'(z) = \frac{1}{i} \frac{\partial u}{\partial y} + \frac{\partial v}{\partial y}$
    Since $\frac{1}{i} = -i$:
    $f'(z) = -i \frac{\partial u}{\partial y} + \frac{\partial v}{\partial y}$
    $f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$  (Equation B)

For $f'(z)$ to exist, the results from both paths must be equal (Equations A and B). Equating the real and imaginary parts:

*   **Real parts:** $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
*   **Imaginary parts:** $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$

These are the **Cauchy-Riemann Equations**.

#### 3.2 Theorem: Cauchy-Riemann Equations

Let $f(z) = u(x, y) + iv(x, y)$. If $f(z)$ is differentiable at a point $z = x + iy$, then the first partial derivatives of $u$ and $v$ must exist at $(x, y)$ and satisfy the Cauchy-Riemann equations:

$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$  and  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

**Conversely**, if the first partial derivatives of $u$ and $v$ exist in a neighborhood of $(x, y)$, are continuous at $(x, y)$, and satisfy the Cauchy-Riemann equations at $(x, y)$, then $f(z)$ is differentiable at $z = x + iy$.

#### 3.3 Polar Form of Cauchy-Riemann Equations

Sometimes it is convenient to use polar coordinates. Let $z = r e^{i\theta} = r(\cos\theta + i\sin\theta)$. Then $x = r\cos\theta$ and $y = r\sin\theta$.
The function can be written as $f(z) = u(r, \theta) + iv(r, \theta)$.

The Cauchy-Riemann equations in polar form are:

$\frac{\partial u}{\partial r} = \frac{1}{r} \frac{\partial v}{\partial \theta}$  and  $\frac{\partial u}{\partial \theta} = -r \frac{\partial v}{\partial r}$

This form is particularly useful for functions involving $z$ in polar form, such as the logarithm and powers of $z$.

**Kreyszig, 10th Ed., Section 13.4:** Discusses the Cauchy-Riemann equations and their polar form in detail.
**Zill & Shanahan, 3rd Ed., Section 2.3:** Provides a thorough treatment of differentiability and the Cauchy-Riemann equations.
**Ramana, 39th Ed., Chapter 36:** Covers differentiability and the Cauchy-Riemann equations.
**Grewal, 44th Ed., Chapter 31:** Explains the conditions for differentiability using Cauchy-Riemann equations.

#### 3.4 Examples

**Example 1:** Determine if $f(z) = z^2$ is differentiable and find its derivative.
Let $z = x + iy$. Then $f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 - y^2 + i(2xy)$.
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

Calculate partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial v}{\partial y} = 2x$

Check Cauchy-Riemann equations:
1. $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 2x$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$.
2. $\frac{\partial u}{\partial y} = -2y$ and $-\frac{\partial v}{\partial x} = -(2y) = -2y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.

Since the Cauchy-Riemann equations are satisfied everywhere, $f(z) = z^2$ is differentiable for all $z$.
The derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = 2x + i(2y) = 2(x + iy) = 2z$.

**Example 2:** Determine if $f(z) = \bar{z}$ is differentiable.
Let $z = x + iy$. Then $f(z) = \bar{z} = x - iy$.
So, $u(x, y) = x$ and $v(x, y) = -y$.

Calculate partial derivatives:
$\frac{\partial u}{\partial x} = 1$
$\frac{\partial u}{\partial y} = 0$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = -1$

Check Cauchy-Riemann equations:
1. $\frac{\partial u}{\partial x} = 1$ and $\frac{\partial v}{\partial y} = -1$. So, $\frac{\partial u}{\partial x} \neq \frac{\partial v}{\partial y}$.
The Cauchy-Riemann equations are not satisfied. Therefore, $f(z) = \bar{z}$ is not differentiable anywhere.

**Example 3:** Determine if $f(z) = |z|^2$ is differentiable.
Let $z = x + iy$. Then $f(z) = |z|^2 = x^2 + y^2$.
So, $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.

Calculate partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = 2y$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = 0$

Check Cauchy-Riemann equations:
1. $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 0$. For equality, $2x = 0 \implies x = 0$.
2. $\frac{\partial u}{\partial y} = 2y$ and $-\frac{\partial v}{\partial x} = 0$. For equality, $2y = 0 \implies y = 0$.

The Cauchy-Riemann equations are satisfied only at the point $(0, 0)$, which corresponds to $z=0$.
Therefore, $f(z) = |z|^2$ is differentiable only at $z=0$. The derivative $f'(0) = 0$.

---

### 4. Analytic Functions

#### 4.1 Definition of Analytic Function

A function $f(z)$ is called **analytic** in an open connected region $D$ if it is differentiable at every point $z$ in $D$.
A function that is analytic at a point $z_0$ is said to be **analytic at $z_0$**.
The terms **holomorphic** and **regular** are synonyms for analytic.

**Important Note:** Analyticity at a point $z_0$ means differentiability in an entire neighborhood around $z_0$. This is a crucial distinction from simply being differentiable at a single point.

#### 4.2 Properties of Analytic Functions

Analytic functions possess several remarkable properties:

*   **Infinitely Differentiable:** If a function is analytic in a region $D$, then all its derivatives $f'(z), f''(z), \dots$ exist and are analytic in $D$.
*   **Representable by Power Series:** Analytic functions can be represented by Taylor series expansions within their disk of convergence. This is a fundamental result in complex analysis (Taylor's Theorem).
*   **Satisfy Cauchy-Riemann Equations:** As we've seen, a necessary condition for analyticity is the satisfaction of the Cauchy-Riemann equations.
*   **Harmonic Conjugates:** If $f(z) = u(x, y) + iv(x, y)$ is analytic in a region $D$, then both $u(x, y)$ and $v(x, y)$ are harmonic functions in $D$. This means they satisfy Laplace's equation:
    $\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$
    $\nabla^2 v = \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$
    The functions $u$ and $v$ are called **harmonic conjugates** of each other.

**Kreyszig, 10th Ed., Section 13.5:** Explains analyticity and the relationship between analytic functions and harmonic functions.
**Zill & Shanahan, 3rd Ed., Section 2.4:** Discusses the concept of analyticity and its implications, including harmonic functions.
**Ramana, 39th Ed., Chapter 36:** Covers analytic functions and their properties.
**Grewal, 44th Ed., Chapter 31:** Elaborates on analytic functions and harmonic functions.

#### 4.3 Examples of Analytic Functions

*   **Polynomials:** $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$, where $a_i$ are complex constants, are analytic everywhere in the complex plane.
*   **Rational Functions:** $f(z) = \frac{P(z)}{Q(z)}$, where $P(z)$ and $Q(z)$ are polynomials, are analytic everywhere except at the zeros of $Q(z)$.

#### 4.4 Non-Analytic Functions

*   $f(z) = \bar{z}$ (as shown in Example 2).
*   $f(z) = |z|$.
*   $f(z) = Re(z) = x$.
*   $f(z) = Im(z) = y$.

**Example: Harmonic Functions**
Let's verify that $u(x, y) = x^2 - y^2$ from Example 1 is harmonic.
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial^2 u}{\partial x^2} = 2$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial^2 u}{\partial y^2} = -2$
$\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$.
So, $u(x, y) = x^2 - y^2$ is harmonic.

Let's verify its harmonic conjugate $v(x, y) = 2xy$.
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial^2 v}{\partial x^2} = 0$
$\frac{\partial v}{\partial y} = 2x$
$\frac{\partial^2 v}{\partial y^2} = 0$
$\nabla^2 v = \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0 + 0 = 0$.
So, $v(x, y) = 2xy$ is also harmonic.

---

### 5. Elementary Analytic Functions

We will briefly introduce some key elementary analytic functions.

#### 5.1 The Exponential Function

The **exponential function** is defined as $f(z) = e^z$.
Using Euler's formula, $e^{i\theta} = \cos\theta + i\sin\theta$, and for $z = x + iy$:
$e^z = e^{x+iy} = e^x e^{iy} = e^x (\cos y + i \sin y)$

Here, $u(x, y) = e^x \cos y$ and $v(x, y) = e^x \sin y$.

Let's check analyticity using Cauchy-Riemann equations:
$\frac{\partial u}{\partial x} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$
$\frac{\partial v}{\partial x} = e^x \sin y$
$\frac{\partial v}{\partial y} = e^x \cos y$

1. $\frac{\partial u}{\partial x} = e^x \cos y$ and $\frac{\partial v}{\partial y} = e^x \cos y$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$.
2. $\frac{\partial u}{\partial y} = -e^x \sin y$ and $-\frac{\partial v}{\partial x} = -(e^x \sin y) = -e^x \sin y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.

The Cauchy-Riemann equations are satisfied everywhere. The partial derivatives are continuous everywhere. Thus, $f(z) = e^z$ is analytic for all $z \in \mathbb{C}$.
Its derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = e^x \cos y + i e^x \sin y = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.

**Kreyszig, 10th Ed., Section 13.6:** Covers the exponential function and its properties.
**Zill & Shanahan, 3rd Ed., Section 2.5:** Discusses $e^z$ and related functions.

#### 5.2 Trigonometric Functions

Trigonometric functions can be defined in terms of the exponential function:
$\cos z = \frac{e^{iz} + e^{-iz}}{2}$
$\sin z = \frac{e^{iz} - e^{-iz}}{2i}$

Since $e^z$ is analytic everywhere, and linear combinations of analytic functions are analytic, $\cos z$ and $\sin z$ are analytic everywhere in the complex plane.

#### 5.3 Logarithmic Function

The **complex logarithm** is the inverse of the exponential function. For $z = r e^{i\theta}$, the logarithm is given by:
$\ln z = \ln r + i(\theta + 2k\pi)$, where $k$ is an integer.

The multi-valued nature of the logarithm means it's not analytic everywhere. However, we can define **branches** of the logarithm by restricting the argument $\theta$. The **principal branch** of the logarithm, denoted by $\text{Ln } z$, uses the principal value of the argument, $-\pi < \text{Arg}(z) \leq \pi$.

For the principal branch: $\text{Ln } z = \ln r + i \text{Arg}(z)$.
Here, $u(r, \theta) = \ln r$ and $v(r, \theta) = \theta$.

Using the polar form of Cauchy-Riemann equations:
$\frac{\partial u}{\partial r} = \frac{1}{r}$
$\frac{\partial v}{\partial \theta} = 1$
So, $\frac{\partial u}{\partial r} = \frac{1}{r} \frac{\partial v}{\partial \theta}$ is satisfied.

$\frac{\partial u}{\partial \theta} = 0$
$\frac{\partial v}{\partial r} = 0$
So, $\frac{\partial u}{\partial \theta} = -r \frac{\partial v}{\partial r}$ becomes $0 = -r(0)$, which is satisfied.

The principal branch $\text{Ln } z$ is analytic in the complex plane except for the non-positive real axis ($z \leq 0$), which is the branch cut.
The derivative is $\frac{d}{dz} (\text{Ln } z) = \frac{1}{z}$.

**Kreyszig, 10th Ed., Section 13.7:** Details the complex logarithmic function and its branches.
**Zill & Shanahan, 3rd Ed., Section 2.6:** Explores the complex logarithm and its properties.

#### 5.4 Powers of $z$

The general power function $z^c$ (where $c$ is a complex constant) is defined using the logarithm:
$z^c = e^{c \ln z}$

For $z^c$ to be analytic, we need $\ln z$ to be analytic, which means we consider branches of the logarithm. The principal value is obtained using the principal branch $\text{Ln } z$:
$z^c = e^{c \text{Ln } z}$

The derivative is $\frac{d}{dz} (z^c) = c z^{c-1}$.

---

### 6. Important Points to Remember

*   **Differentiability vs. Analyticity:** Differentiability at a point $z_0$ means the limit of the difference quotient exists. Analyticity at $z_0$ means differentiability in a neighborhood around $z_0$.
*   **Cauchy-Riemann Equations:** $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ are the cornerstone for determining differentiability and analyticity.
*   **Analytic Functions are "Well-Behaved":** They are infinitely differentiable, can be represented by power series, and their real and imaginary parts are harmonic.
*   **The Complex Exponential Function $e^z$ is Analytic Everywhere:** Its derivative is itself, $e^z$.
*   **Logarithm is Multi-valued:** To define an analytic logarithm, we must restrict its argument to a specific range, creating branches and introducing branch cuts.

---

### 7. Practice Questions

**1. (LO2, LO3)** Determine if the following functions are differentiable. If so, find their derivative.
    a) $f(z) = z^3$
    b) $f(z) = \text{Re}(z) = x$
    c) $f(z) = e^x (\cos y + i \sin y)$
    d) $f(z) = x + iy^2$

**2. (LO3, LO4)** Which of the following functions are analytic? Justify your answer using the Cauchy-Riemann equations.
    a) $f(z) = \bar{z}^2$
    b) $f(z) = e^{-y} (\cos x - i \sin x)$
    c) $f(z) = x^2 + iy^2$
    d) $f(z) = \frac{1}{z}$ (for $z \neq 0$)

**3. (LO4)** If $f(z) = u(x, y) + iv(x, y)$ is analytic, show that $u$ and $v$ satisfy Laplace's equation (i.e., they are harmonic).

**4. (LO5)** Find the derivative of $f(z) = \text{Ln}(z+1)$ for $z \neq -1$. (Hint: Use the properties of the logarithmic function).

**5. (LO3, LO4)** Is the function $f(z) = \frac{z}{\bar{z}}$ for $z \neq 0$ analytic? What happens at $z=0$?

---

### 8. Answers to Practice Questions

**1. (LO2, LO3)**
    a) $f(z) = z^3 = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = x^3 - 3xy^2 + i(3x^2y - y^3)$.
       $u = x^3 - 3xy^2$, $v = 3x^2y - y^3$.
       $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$, $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$. ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$)
       $\frac{\partial u}{\partial y} = -6xy$, $\frac{\partial v}{\partial x} = 6xy$. ($\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$)
       Satisfied everywhere. $f'(z) = 3x^2 - 3y^2 + i(6xy) = 3(x^2 - y^2 + 2ixy) = 3(x+iy)^2 = 3z^2$.
       **Yes, differentiable everywhere. $f'(z) = 3z^2$.**

    b) $f(z) = x$. $u = x$, $v = 0$.
       $\frac{\partial u}{\partial x} = 1$, $\frac{\partial v}{\partial y} = 0$. ($\frac{\partial u}{\partial x} \neq \frac{\partial v}{\partial y}$)
       **No, not differentiable.**

    c) $f(z) = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.
       As shown in section 5.1, this is analytic everywhere.
       **Yes, differentiable everywhere. $f'(z) = e^z$.**

    d) $f(z) = x + iy^2$. $u = x$, $v = y^2$.
       $\frac{\partial u}{\partial x} = 1$, $\frac{\partial v}{\partial y} = 2y$. ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 1 = 2y \implies y = 1/2$)
       $\frac{\partial u}{\partial y} = 0$, $\frac{\partial v}{\partial x} = 0$. ($\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies 0 = 0$)
       The Cauchy-Riemann equations are satisfied only when $y=1/2$. Since this is not a region, the function is not analytic anywhere. It is differentiable only on the line $y=1/2$, but not analytic.
       **No, not differentiable (in a neighborhood), hence not analytic.**

**2. (LO3, LO4)**
    a) $f(z) = \bar{z}^2 = (x-iy)^2 = x^2 - 2ixy - y^2 = (x^2 - y^2) + i(-2xy)$.
       $u = x^2 - y^2$, $v = -2xy$.
       $\frac{\partial u}{\partial x} = 2x$, $\frac{\partial v}{\partial y} = -2x$. ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 2x = -2x \implies x=0$)
       $\frac{\partial u}{\partial y} = -2y$, $\frac{\partial v}{\partial x} = -2y$. ($\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies -2y = -(-2y) = 2y \implies y=0$)
       Satisfied only at $z=0$. Not analytic.
       **No, not analytic.**

    b) $f(z) = e^{-y} (\cos x - i \sin x) = e^{-y} e^{-ix} = e^{-(y+ix)} = e^{-\bar{z}}$.
       $u = e^{-y} \cos x$, $v = -e^{-y} \sin x$.
       $\frac{\partial u}{\partial x} = -e^{-y} \sin x$
       $\frac{\partial u}{\partial y} = -e^{-y} \cos x$
       $\frac{\partial v}{\partial x} = -e^{-y} \cos x$
       $\frac{\partial v}{\partial y} = e^{-y} \sin x$
       1. $\frac{\partial u}{\partial x} = -e^{-y} \sin x$ and $\frac{\partial v}{\partial y} = e^{-y} \sin x$. For equality, $-e^{-y} \sin x = e^{-y} \sin x \implies 2e^{-y} \sin x = 0 \implies \sin x = 0 \implies x = k\pi$.
       2. $\frac{\partial u}{\partial y} = -e^{-y} \cos x$ and $-\frac{\partial v}{\partial x} = -(-e^{-y} \cos x) = e^{-y} \cos x$. For equality, $-e^{-y} \cos x = e^{-y} \cos x \implies 2e^{-y} \cos x = 0 \implies \cos x = 0 \implies x = \frac{\pi}{2} + k\pi$.
       The conditions $\sin x = 0$ and $\cos x = 0$ cannot be satisfied simultaneously.
       **No, not analytic.**

    c) $f(z) = x^2 + iy^2$. $u = x^2$, $v = y^2$.
       $\frac{\partial u}{\partial x} = 2x$, $\frac{\partial v}{\partial y} = 2y$. ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 2x = 2y \implies x=y$)
       $\frac{\partial u}{\partial y} = 0$, $\frac{\partial v}{\partial x} = 0$. ($\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies 0 = 0$)
       Satisfied only on the line $y=x$. Not analytic.
       **No, not analytic.**

    d) $f(z) = \frac{1}{z} = \frac{1}{x+iy} = \frac{x-iy}{x^2+y^2} = \frac{x}{x^2+y^2} + i \frac{-y}{x^2+y^2}$.
       $u = \frac{x}{x^2+y^2}$, $v = \frac{-y}{x^2+y^2}$.
       We know $z$ is analytic, and $1/z$ is the reciprocal of an analytic function (and $z \neq 0$).
       Let's verify CR equations:
       $\frac{\partial u}{\partial x} = \frac{(x^2+y^2)(1) - x(2x)}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$
       $\frac{\partial v}{\partial y} = \frac{(x^2+y^2)(-1) - (-y)(2y)}{(x^2+y^2)^2} = \frac{-x^2-y^2+2y^2}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$. (Matches)
       $\frac{\partial u}{\partial y} = \frac{(x^2+y^2)(0) - x(2y)}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$
       $-\frac{\partial v}{\partial x} = - \frac{(x^2+y^2)(0) - (-y)(2x)}{(x^2+y^2)^2} = - \frac{2xy}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$. (Matches)
       The partial derivatives are continuous for $z \neq 0$.
       **Yes, analytic for $z \neq 0$.**

**3. (LO4)**
Let $f(z) = u(x, y) + iv(x, y)$ be analytic in a region $D$. This implies $f'(z)$ exists in $D$.
We have $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$ and $f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$.
Also, $f''(z)$ exists if $f(z)$ is analytic.
$f''(z) = \frac{\partial}{\partial x} \left( \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} \right) = \frac{\partial^2 u}{\partial x^2} + i \frac{\partial^2 v}{\partial x^2}$.
$f''(z) = \frac{\partial}{\partial y} \left( \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y} \right) \frac{1}{i} = \frac{1}{i} \left( \frac{\partial^2 v}{\partial y^2} - i \frac{\partial^2 u}{\partial y^2} \right) = \frac{\partial^2 u}{\partial y^2} + i \frac{\partial^2 v}{\partial y^2}$.

Equating the two expressions for $f''(z)$:
Real parts: $\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 u}{\partial y^2}$
Imaginary parts: $\frac{\partial^2 v}{\partial x^2} = \frac{\partial^2 v}{\partial y^2}$

This seems incorrect. Let's use the property that if $f(z)$ is analytic, then $f'(z)$ is also analytic.
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$. Let $U = \frac{\partial u}{\partial x}$ and $V = \frac{\partial v}{\partial x}$.
For $f'(z)$ to be analytic, its real and imaginary parts must satisfy CR equations:
$\frac{\partial U}{\partial x} = \frac{\partial V}{\partial y}$ and $\frac{\partial U}{\partial y} = -\frac{\partial V}{\partial x}$.

Substituting back:
$\frac{\partial}{\partial x} \left(\frac{\partial u}{\partial x}\right) = \frac{\partial}{\partial y} \left(\frac{\partial v}{\partial x}\right) \implies \frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial y \partial x}$.
$\frac{\partial}{\partial y} \left(\frac{\partial u}{\partial x}\right) = -\frac{\partial}{\partial x} \left(\frac{\partial v}{\partial x}\right) \implies \frac{\partial^2 u}{\partial y \partial x} = -\frac{\partial^2 v}{\partial x^2}$.

Using the fact that if the second partial derivatives are continuous (which they are for analytic functions), then $\frac{\partial^2 v}{\partial y \partial x} = \frac{\partial^2 v}{\partial x \partial y}$.

From $\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial y \partial x}$ and $\frac{\partial^2 u}{\partial y \partial x} = -\frac{\partial^2 v}{\partial x^2}$:
Using CR equations for $f(z)$: $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
Differentiate $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ with respect to $x$: $\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial x \partial y}$.
Differentiate $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ with respect to $y$: $\frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial y \partial x}$.

Now, compare the mixed partials of $u$:
$\frac{\partial^2 u}{\partial x \partial y} = \frac{\partial}{\partial y} \left(\frac{\partial u}{\partial x}\right) = \frac{\partial}{\partial y} \left(\frac{\partial v}{\partial y}\right) = \frac{\partial^2 v}{\partial y^2}$.
$\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial}{\partial x} \left(\frac{\partial u}{\partial y}\right) = \frac{\partial}{\partial x} \left(-\frac{\partial v}{\partial x}\right) = -\frac{\partial^2 v}{\partial x^2}$.

If $f(z)$ is analytic, its second derivatives are continuous. We can use Clairaut's theorem for equality of mixed partials.
Consider the Cauchy-Riemann equations for $f'(z)$:
$\frac{\partial}{\partial x} (\frac{\partial u}{\partial x}) = \frac{\partial}{\partial y} (\frac{\partial v}{\partial x})$
$\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial y \partial x}$

$\frac{\partial}{\partial y} (\frac{\partial u}{\partial x}) = -\frac{\partial}{\partial x} (\frac{\partial v}{\partial x})$
$\frac{\partial^2 u}{\partial y \partial x} = -\frac{\partial^2 v}{\partial x^2}$

Now, let's relate $u$ and $v$ through Laplace's equation.
Differentiate $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ with respect to $x$: $\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial x \partial y}$.
Differentiate $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ with respect to $y$: $\frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial y \partial x}$.

Using Clairaut's Theorem ($\frac{\partial^2 v}{\partial x \partial y} = \frac{\partial^2 v}{\partial y \partial x}$):
$\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial x \partial y}$
$\frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial y \partial x}$

Substitute $\frac{\partial^2 v}{\partial y \partial x}$ from the first equation into the second:
$\frac{\partial^2 u}{\partial y^2} = - \frac{\partial^2 u}{\partial x^2}$
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$. Thus, $u$ is harmonic.

Similarly, to show $v$ is harmonic:
Differentiate $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ with respect to $y$: $\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 v}{\partial y^2}$.
Differentiate $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ with respect to $x$: $\frac{\partial^2 u}{\partial x \partial y} = -\frac{\partial^2 v}{\partial x^2}$.

Using Clairaut's Theorem ($\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 u}{\partial x \partial y}$):
$\frac{\partial^2 v}{\partial y^2} = \frac{\partial^2 u}{\partial y \partial x}$
$-\frac{\partial^2 v}{\partial x^2} = \frac{\partial^2 u}{\partial x \partial y}$

Substitute $\frac{\partial^2 u}{\partial y \partial x}$ from the first equation into the second:
$-\frac{\partial^2 v}{\partial x^2} = \frac{\partial^2 v}{\partial y^2}$
$\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$. Thus, $v$ is harmonic.

**4. (LO5)**
$f(z) = \text{Ln}(z+1)$. This is a transformation of the logarithmic function.
Let $w = z+1$. Then $f(z) = \text{Ln}(w)$.
The derivative of $\text{Ln}(w)$ with respect to $w$ is $1/w$.
Using the chain rule, $\frac{df}{dz} = \frac{df}{dw} \cdot \frac{dw}{dz}$.
$\frac{dw}{dz} = \frac{d}{dz}(z+1) = 1$.
So, $f'(z) = \frac{1}{w} \cdot 1 = \frac{1}{z+1}$.
**$f'(z) = \frac{1}{z+1}$** (for $z+1 \neq 0$, i.e., $z \neq -1$).

**5. (LO3, LO4)**
$f(z) = \frac{z}{\bar{z}}$.
If $z = x+iy$, then $\bar{z} = x-iy$.
$f(z) = \frac{x+iy}{x-iy} = \frac{(x+iy)(x+iy)}{(x-iy)(x+iy)} = \frac{x^2 - y^2 + 2ixy}{x^2+y^2} = \frac{x^2 - y^2}{x^2+y^2} + i \frac{2xy}{x^2+y^2}$.
$u = \frac{x^2 - y^2}{x^2+y^2}$, $v = \frac{2xy}{x^2+y^2}$.

Check Cauchy-Riemann equations:
$\frac{\partial u}{\partial x} = \frac{(x^2+y^2)(2x) - (x^2-y^2)(2x)}{(x^2+y^2)^2} = \frac{2x^3+2xy^2 - 2x^3+2xy^2}{(x^2+y^2)^2} = \frac{4xy^2}{(x^2+y^2)^2}$.
$\frac{\partial v}{\partial y} = \frac{(x^2+y^2)(2x) - (2xy)(2y)}{(x^2+y^2)^2} = \frac{2x^3+2xy^2 - 4xy^2}{(x^2+y^2)^2} = \frac{2x^3-2xy^2}{(x^2+y^2)^2}$.
$\frac{\partial u}{\partial x} \neq \frac{\partial v}{\partial y}$ in general.

What happens at $z=0$?
The function $f(z) = z/\bar{z}$ is not defined at $z=0$.
However, we can examine the limit as $z \to 0$.
If we approach along the real axis ($z=x, y=0$), $f(x) = x/x = 1$.
If we approach along the imaginary axis ($z=iy, x=0$), $f(iy) = iy/(-iy) = -1$.
Since the limits are different, the limit does not exist at $z=0$.

**No, $f(z) = z/\bar{z}$ is not analytic anywhere.**

---

This concludes our notes on Analytic Functions. The concepts covered here are fundamental for understanding the behavior of complex functions and form the basis for more advanced topics in complex analysis.
