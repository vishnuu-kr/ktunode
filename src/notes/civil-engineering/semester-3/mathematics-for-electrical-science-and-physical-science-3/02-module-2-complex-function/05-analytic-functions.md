---
title: "Analytic functions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810691"
status: "completed"
scrapedAt: "2026-05-20T18:41:18.938Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Function

### Topic: Analytic Functions

---

This module explores the fundamental concept of analytic functions in the realm of complex analysis. Understanding analytic functions is crucial as they form the bedrock for many advanced topics in electrical and physical sciences that utilize complex numbers.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Define** what a complex function is.
*   **Define** continuity and differentiability of a complex function.
*   **State and explain** the Cauchy-Riemann equations.
*   **Determine** whether a given complex function is analytic.
*   **Find** the derivative of an analytic function.
*   **Recognize** the geometric interpretation of analytic functions.

---

### 1. Introduction to Complex Functions

#### 1.1. What is a Complex Number?

A complex number is a number of the form $z = x + iy$, where $x$ and $y$ are real numbers, and $i$ is the imaginary unit, satisfying $i^2 = -1$.

*   $x$ is called the **real part** of $z$, denoted as $\text{Re}(z) = x$.
*   $y$ is called the **imaginary part** of $z$, denoted as $\text{Im}(z) = y$.

**Geometric Representation:** Complex numbers can be represented as points or vectors in the complex plane (also known as the Argand plane). The horizontal axis represents the real part, and the vertical axis represents the imaginary part.

#### 1.2. What is a Complex Function?

A complex function is a function that takes a complex number as input and produces a complex number as output. We can write it as $w = f(z)$, where $z$ and $w$ are complex numbers.

Let $z = x + iy$ and $w = u + iv$, where $x, y, u, v$ are real numbers.
Then, a complex function can be expressed in terms of its real and imaginary parts as:

$f(z) = f(x + iy) = u(x, y) + iv(x, y)$

Here, $u(x, y)$ and $v(x, y)$ are real-valued functions of two real variables.

**Example:**
Let $f(z) = z^2$.
If $z = x + iy$, then
$f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$

So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

---

### 2. Continuity of Complex Functions

A complex function $f(z)$ is **continuous** at a point $z_0$ if:

1.  $f(z_0)$ is defined.
2.  $\lim_{z \to z_0} f(z)$ exists.
3.  $\lim_{z \to z_0} f(z) = f(z_0)$.

**In terms of real and imaginary parts:**
$f(z) = u(x, y) + iv(x, y)$ is continuous at $z_0 = x_0 + iy_0$ if and only if both $u(x, y)$ and $v(x, y)$ are continuous as real functions of two real variables at the point $(x_0, y_0)$.

**Example:**
Is $f(z) = z^2$ continuous everywhere?
$f(z) = (x^2 - y^2) + i(2xy)$.
$u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$ are polynomial functions of $x$ and $y$, which are continuous everywhere in the real plane.
Therefore, $f(z) = z^2$ is continuous for all complex numbers $z$.

---

### 3. Differentiability of Complex Functions

#### 3.1. Definition of the Derivative

A complex function $f(z)$ is **differentiable** at a point $z_0$ if the following limit exists:

$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$

The limit must exist and be independent of the path along which $\Delta z$ approaches 0. This is the crucial difference from the differentiability of real functions.

**Important Note:** If $f(z)$ is differentiable at $z_0$, it is also continuous at $z_0$.

#### 3.2. Paths of Approach to Zero

Since $\Delta z$ can approach zero from any direction in the complex plane, we can consider different paths:

*   **Along the real axis:** Let $\Delta z = \Delta x$ (where $\Delta y = 0$).
    $f'(z_0) = \lim_{\Delta x \to 0} \frac{u(x_0 + \Delta x, y_0) - u(x_0, y_0)}{\Delta x} + i \lim_{\Delta x \to 0} \frac{v(x_0 + \Delta x, y_0) - v(x_0, y_0)}{\Delta x}$
    This is $\frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$ evaluated at $(x_0, y_0)$.

*   **Along the imaginary axis:** Let $\Delta z = i \Delta y$ (where $\Delta x = 0$).
    $f'(z_0) = \lim_{\Delta y \to 0} \frac{u(x_0, y_0 + \Delta y) - u(x_0, y_0)}{i \Delta y} + i \lim_{\Delta y \to 0} \frac{v(x_0, y_0 + \Delta y) - v(x_0, y_0)}{i \Delta y}$
    $f'(z_0) = \frac{1}{i} \lim_{\Delta y \to 0} \frac{u(x_0, y_0 + \Delta y) - u(x_0, y_0)}{\Delta y} + \lim_{\Delta y \to 0} \frac{v(x_0, y_0 + \Delta y) - v(x_0, y_0)}{\Delta y}$
    Since $\frac{1}{i} = -i$, this becomes $-i \frac{\partial u}{\partial y} + \frac{\partial v}{\partial y}$ evaluated at $(x_0, y_0)$.

For the derivative to exist, these two results must be equal:
$\frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$

Equating the real and imaginary parts, we get the **Cauchy-Riemann equations**.

---

### 4. The Cauchy-Riemann Equations

#### 4.1. Statement and Explanation

Let $f(z) = u(x, y) + iv(x, y)$ be a complex function. If $f(z)$ is differentiable at a point $z = x + iy$, then the first partial derivatives of $u$ and $v$ must satisfy the following equations at that point:

$$ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{(CR1)} $$
$$ \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \quad \text{(CR2)} $$

These are known as the **Cauchy-Riemann equations**.

**Converse Statement:** If the first partial derivatives of $u$ and $v$ are continuous in a neighborhood of a point $z_0$, and if the Cauchy-Riemann equations are satisfied at $z_0$, then $f(z)$ is differentiable at $z_0$.

**Significance:** The Cauchy-Riemann equations are a **necessary condition** for a function to be differentiable. If they are not satisfied at a point, the function cannot be differentiable at that point. They are also **sufficient** if the partial derivatives are continuous.

#### 4.2. Finding the Derivative using Cauchy-Riemann Equations

If $f(z)$ is differentiable at $z = x + iy$, its derivative can be expressed in terms of partial derivatives as:

$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$

Alternatively, using the Cauchy-Riemann equations:

$f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$

Or, we can also express it in terms of derivatives with respect to $x$ and $y$ only:

$f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y}$

$f'(z) = \frac{\partial v}{\partial y} + i \frac{\partial v}{\partial x}$

**Example:**
Find the derivative of $f(z) = z^2$.
We found $f(z) = (x^2 - y^2) + i(2xy)$.
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

Calculate the partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial v}{\partial y} = 2x$

Check Cauchy-Riemann equations:
CR1: $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 2x$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$. (Satisfied)
CR2: $\frac{\partial u}{\partial y} = -2y$ and $-\frac{\partial v}{\partial x} = -2y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$. (Satisfied)

Since the partial derivatives are continuous and the Cauchy-Riemann equations are satisfied, $f(z) = z^2$ is differentiable everywhere.

Using the formula for the derivative:
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = 2x + i(2y) = 2(x + iy) = 2z$.
This matches the direct differentiation of $f(z) = z^2$.

---

### 5. Analytic Functions

#### 5.1. Definition of Analytic Functions

A complex function $f(z)$ is said to be **analytic** at a point $z_0$ if it is differentiable not only at $z_0$ but also in some neighborhood (an open disk) containing $z_0$.

A function that is analytic at every point in a domain $D$ is said to be **analytic in the domain $D$**.

**Other Terms:** Analytic functions are also called:
*   **Holomorphic functions**
*   **Regular functions**

#### 5.2. Determining if a Function is Analytic

To determine if a function $f(z) = u(x, y) + iv(x, y)$ is analytic, we need to check two conditions:

1.  **Cauchy-Riemann Equations:** The Cauchy-Riemann equations must be satisfied at the point $z$.
2.  **Continuity of Partial Derivatives:** The first partial derivatives of $u$ and $v$ must be continuous in a neighborhood of $z$.

**If both conditions are met, the function is analytic.** If either condition fails at any point, the function is not analytic at that point.

**Example 1: Is $f(z) = z^3$ analytic?**
Let $z = x + iy$.
$f(z) = (x + iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3$
$f(z) = x^3 + 3ix^2y - 3xy^2 - iy^3$
$f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3)$

So, $u(x, y) = x^3 - 3xy^2$ and $v(x, y) = 3x^2y - y^3$.

Calculate partial derivatives:
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
$\frac{\partial u}{\partial y} = -6xy$
$\frac{\partial v}{\partial x} = 6xy$
$\frac{\partial v}{\partial y} = 3x^2 - 3y^2$

Check Cauchy-Riemann equations:
CR1: $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$ and $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$. (Satisfied for all $x, y$)
CR2: $\frac{\partial u}{\partial y} = -6xy$ and $-\frac{\partial v}{\partial x} = -6xy$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$. (Satisfied for all $x, y$)

The partial derivatives are polynomials and are therefore continuous everywhere. Since the Cauchy-Riemann equations are satisfied for all $x$ and $y$, and the partial derivatives are continuous everywhere, $f(z) = z^3$ is analytic everywhere (i.e., in the entire complex plane).

**Example 2: Is $f(z) = |z|^2 = x^2 + y^2$ analytic?**
$f(z) = x^2 + y^2$. Here, $v(x, y) = 0$.
So, $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.

Calculate partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = 2y$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = 0$

Check Cauchy-Riemann equations:
CR1: $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 0$. For CR1 to be satisfied, $2x = 0$, which means $x = 0$.
CR2: $\frac{\partial u}{\partial y} = 2y$ and $-\frac{\partial v}{\partial x} = 0$. For CR2 to be satisfied, $2y = 0$, which means $y = 0$.

The Cauchy-Riemann equations are only satisfied at the point $(0, 0)$, which corresponds to $z = 0$. For the function to be analytic at a point $z_0$, the CR equations must hold in a neighborhood around $z_0$. Since they only hold at a single point, $f(z) = |z|^2$ is not analytic anywhere. It is differentiable only at $z=0$ (where the derivative is 0), but not analytic.

**Example 3: Is $f(z) = \bar{z}$ analytic?**
$f(z) = \bar{z} = x - iy$.
So, $u(x, y) = x$ and $v(x, y) = -y$.

Calculate partial derivatives:
$\frac{\partial u}{\partial x} = 1$
$\frac{\partial u}{\partial y} = 0$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = -1$

Check Cauchy-Riemann equations:
CR1: $\frac{\partial u}{\partial x} = 1$ and $\frac{\partial v}{\partial y} = -1$. So, $1 = -1$, which is false.
CR2: $\frac{\partial u}{\partial y} = 0$ and $-\frac{\partial v}{\partial x} = 0$. So, $0 = 0$. (Satisfied)

Since CR1 is not satisfied for any point $(x, y)$, $f(z) = \bar{z}$ is not analytic anywhere.

---

### 6. Geometric Interpretation of Analytic Functions

Analytic functions have a profound geometric interpretation related to **conformal mapping**.

*   **Angle Preservation:** At points where $f'(z) \neq 0$, an analytic function $f(z)$ maps small figures in the $z$-plane to similar figures in the $w$-plane, preserving the angles between intersecting curves (both magnitude and orientation). Such a mapping is called a **conformal mapping**.

*   **Scaling:** The magnitude of the derivative, $|f'(z)|$, represents the local scaling factor of the mapping. Small lengths in the $z$-plane are magnified by $|f'(z)|$ in the $w$-plane.

*   **Rotation:** The argument of the derivative, $\arg(f'(z))$, represents the local angle of rotation of the mapping. Curves are rotated by this angle.

**Example:**
Consider $f(z) = z^2$. We found $f'(z) = 2z$.
At $z = 1 + i$, $f'(1+i) = 2(1+i) = 2 + 2i$.
$|f'(1+i)| = \sqrt{2^2 + 2^2} = \sqrt{8} = 2\sqrt{2}$.
$\arg(f'(1+i)) = \arctan(\frac{2}{2}) = \arctan(1) = \frac{\pi}{4}$ radians (or 45 degrees).

This means that around the point $z = 1 + i$, the function $f(z) = z^2$ scales lengths by a factor of $2\sqrt{2}$ and rotates figures counterclockwise by $\frac{\pi}{4}$ radians.

---

### 7. Practice Questions

**Question 1:**
Determine if the function $f(z) = z^3 + 2z^2$ is analytic.

**Solution 1:**
Let $z = x + iy$.
$f(z) = (x+iy)^3 + 2(x+iy)^2$
$f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3) + 2((x^2 - y^2) + i(2xy))$
$f(z) = (x^3 - 3xy^2 + 2x^2 - 2y^2) + i(3x^2y - y^3 + 4xy)$

$u(x, y) = x^3 - 3xy^2 + 2x^2 - 2y^2$
$v(x, y) = 3x^2y - y^3 + 4xy$

Partial derivatives:
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2 + 4x$
$\frac{\partial u}{\partial y} = -6xy - 4y$
$\frac{\partial v}{\partial x} = 6xy + 4y$
$\frac{\partial v}{\partial y} = 3x^2 - 3y^2 + 4x$

Check CR equations:
CR1: $\frac{\partial u}{\partial x} = 3x^2 - 3y^2 + 4x$. $\frac{\partial v}{\partial y} = 3x^2 - 3y^2 + 4x$. They are equal.
CR2: $\frac{\partial u}{\partial y} = -6xy - 4y$. $-\frac{\partial v}{\partial x} = -(6xy + 4y) = -6xy - 4y$. They are equal.

The partial derivatives are polynomials, hence continuous everywhere. Since the Cauchy-Riemann equations are satisfied for all $x$ and $y$, and the partial derivatives are continuous everywhere, $f(z) = z^3 + 2z^2$ is analytic everywhere.

**Question 2:**
Find the derivative of $f(z) = e^z$.

**Solution 2:**
Let $z = x + iy$.
$e^z = e^{x+iy} = e^x e^{iy} = e^x (\cos y + i \sin y)$
$e^z = e^x \cos y + i (e^x \sin y)$

$u(x, y) = e^x \cos y$
$v(x, y) = e^x \sin y$

Partial derivatives:
$\frac{\partial u}{\partial x} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$
$\frac{\partial v}{\partial x} = e^x \sin y$
$\frac{\partial v}{\partial y} = e^x \cos y$

Check CR equations:
CR1: $\frac{\partial u}{\partial x} = e^x \cos y$. $\frac{\partial v}{\partial y} = e^x \cos y$. They are equal.
CR2: $\frac{\partial u}{\partial y} = -e^x \sin y$. $-\frac{\partial v}{\partial x} = -(e^x \sin y) = -e^x \sin y$. They are equal.

The partial derivatives are continuous everywhere. Thus, $f(z) = e^z$ is analytic everywhere.

The derivative is:
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = e^x \cos y + i (e^x \sin y) = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.

**Question 3:**
Is the function $f(z) = \text{Re}(z) \cdot \text{Im}(z) = xy$ analytic?

**Solution 3:**
$f(z) = xy$. This is a real-valued function. For a function to be considered in the context of analytic functions, it must map complex numbers to complex numbers. If we interpret $f(z) = xy$ as $f(z) = xy + i(0)$, then:
$u(x, y) = xy$
$v(x, y) = 0$

Partial derivatives:
$\frac{\partial u}{\partial x} = y$
$\frac{\partial u}{\partial y} = x$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = 0$

Check CR equations:
CR1: $\frac{\partial u}{\partial x} = y$. $\frac{\partial v}{\partial y} = 0$. For CR1 to be satisfied, $y = 0$.
CR2: $\frac{\partial u}{\partial y} = x$. $-\frac{\partial v}{\partial x} = 0$. For CR2 to be satisfied, $x = 0$.

The Cauchy-Riemann equations are only satisfied at the point $(0, 0)$ (i.e., $z=0$). Therefore, the function $f(z) = xy$ is not analytic.

**Question 4:**
Find the derivative of $f(z) = \frac{1}{z}$.

**Solution 4:**
Let $z = x + iy$.
$f(z) = \frac{1}{x+iy} = \frac{1}{x+iy} \cdot \frac{x-iy}{x-iy} = \frac{x-iy}{x^2 + y^2} = \frac{x}{x^2+y^2} + i \frac{-y}{x^2+y^2}$

$u(x, y) = \frac{x}{x^2+y^2}$
$v(x, y) = \frac{-y}{x^2+y^2}$

Calculate partial derivatives:
$\frac{\partial u}{\partial x} = \frac{(x^2+y^2)(1) - x(2x)}{(x^2+y^2)^2} = \frac{y^2 - x^2}{(x^2+y^2)^2}$
$\frac{\partial u}{\partial y} = \frac{(x^2+y^2)(0) - x(2y)}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$
$\frac{\partial v}{\partial x} = \frac{(x^2+y^2)(0) - (-y)(2x)}{(x^2+y^2)^2} = \frac{2xy}{(x^2+y^2)^2}$
$\frac{\partial v}{\partial y} = \frac{(x^2+y^2)(-1) - (-y)(2y)}{(x^2+y^2)^2} = \frac{-x^2-y^2+2y^2}{(x^2+y^2)^2} = \frac{y^2 - x^2}{(x^2+y^2)^2}$

Check CR equations:
CR1: $\frac{\partial u}{\partial x} = \frac{y^2 - x^2}{(x^2+y^2)^2}$. $\frac{\partial v}{\partial y} = \frac{y^2 - x^2}{(x^2+y^2)^2}$. They are equal.
CR2: $\frac{\partial u}{\partial y} = \frac{-2xy}{(x^2+y^2)^2}$. $-\frac{\partial v}{\partial x} = -\frac{2xy}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$. They are equal.

The partial derivatives are rational functions and are continuous everywhere except at $z=0$ (where $x^2+y^2=0$). Thus, $f(z) = \frac{1}{z}$ is analytic everywhere except at $z=0$.

The derivative is:
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \frac{y^2 - x^2}{(x^2+y^2)^2} + i \frac{2xy}{(x^2+y^2)^2}$
$f'(z) = \frac{(y^2 - x^2) + i(2xy)}{(x^2+y^2)^2}$

We know that $(x+iy)^2 = x^2 - y^2 + 2ixy$.
And $z^2 = (x+iy)^2$.
Also, $z^2 = x^2 - y^2 + i(2xy)$.
So, $(y^2 - x^2) + i(2xy) = -(x^2 - y^2 - 2ixy) = -(\bar{z}^2)$. This is not quite right.

Let's use $f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y}$:
$f'(z) = \frac{y^2 - x^2}{(x^2+y^2)^2} - i \frac{-2xy}{(x^2+y^2)^2} = \frac{y^2 - x^2 + i(2xy)}{(x^2+y^2)^2}$

Alternatively, we know that the derivative of $\frac{1}{z}$ is $-\frac{1}{z^2}$.
Let's check if our result matches this.
$-\frac{1}{z^2} = -\frac{1}{(x+iy)^2} = -\frac{1}{x^2 - y^2 + i(2xy)}$
Multiply by the conjugate:
$-\frac{1}{x^2 - y^2 + i(2xy)} \cdot \frac{x^2 - y^2 - i(2xy)}{x^2 - y^2 - i(2xy)}$
$= -\frac{x^2 - y^2 - i(2xy)}{(x^2 - y^2)^2 + (2xy)^2} = -\frac{x^2 - y^2 - i(2xy)}{x^4 - 2x^2y^2 + y^4 + 4x^2y^2}$
$= -\frac{x^2 - y^2 - i(2xy)}{x^4 + 2x^2y^2 + y^4} = -\frac{x^2 - y^2 - i(2xy)}{(x^2+y^2)^2}$
$= \frac{y^2 - x^2 + i(2xy)}{(x^2+y^2)^2}$
This matches our calculated derivative.

---

### 8. Important Points to Remember

*   **Complex functions** map complex numbers to complex numbers: $w = f(z)$.
*   **Analyticity** is a property of a function at a point and in a neighborhood around it. A function must be differentiable in a neighborhood to be analytic.
*   The **Cauchy-Riemann equations** ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$) are a necessary condition for differentiability.
*   If the partial derivatives of $u$ and $v$ are **continuous** in a neighborhood and satisfy the Cauchy-Riemann equations in that neighborhood, then the function is **analytic**.
*   Functions that are analytic everywhere in the complex plane are called **entire functions** (e.g., $z^n$, $e^z$, $\sin z$, $\cos z$).
*   Functions like $f(z) = \bar{z}$, $f(z) = |z|^2$, and $f(z) = \text{Re}(z)$ are **not analytic** anywhere.
*   Analytic functions play a crucial role in **conformal mapping**, preserving angles in geometric transformations.

---
