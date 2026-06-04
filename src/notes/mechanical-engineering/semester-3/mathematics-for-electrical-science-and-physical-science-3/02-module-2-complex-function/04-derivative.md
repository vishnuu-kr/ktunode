---
title: "Derivative"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462c9f"
status: "completed"
scrapedAt: "2026-05-20T17:50:39.392Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Function

### Topic: Derivative

---

This topic explores the concept of the derivative of a complex function, a fundamental building block for understanding complex analysis. We will delve into its definition, the conditions for differentiability, and the implications of the Cauchy-Riemann equations.

---

### Learning Outcomes:

*   **LO1:** Understand the definition of the derivative of a complex function.
*   **LO2:** State and apply the Cauchy-Riemann equations to determine differentiability.
*   **LO3:** Recognize the geometric interpretation of the derivative.
*   **LO4:** Relate differentiability to analyticity.

---

### Key Concepts and Definitions:

#### 1. Introduction to Complex Functions

A complex function $f(z)$ maps a complex number $z$ to another complex number $w$. We can write $z = x + iy$ and $w = u + iv$, where $x, y, u, v$ are real numbers. Thus, a complex function can be represented as:

$f(z) = f(x + iy) = u(x, y) + iv(x, y)$

where $u(x, y)$ and $v(x, y)$ are real-valued functions of two real variables.

**Example:**
If $f(z) = z^2$, then $z = x + iy$.
$f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$.
Here, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

#### 2. Derivative of a Complex Function

The derivative of a complex function $f(z)$ at a point $z_0$ is defined analogously to the derivative of a real function:

$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$

provided that this limit exists and is independent of the path along which $\Delta z \to 0$.

**Important Note:** The existence of the limit implies that it must be the same regardless of the direction from which $\Delta z$ approaches zero. This is a crucial difference from real calculus.

#### 3. Conditions for Differentiability: The Cauchy-Riemann Equations

For a complex function $f(z) = u(x, y) + iv(x, y)$ to be differentiable at a point $z_0 = x_0 + iy_0$, the following conditions must be met:

*   The first partial derivatives of $u$ and $v$ with respect to $x$ and $y$ must exist in a neighborhood of $(x_0, y_0)$.
*   These partial derivatives must satisfy the **Cauchy-Riemann Equations** at $(x_0, y_0)$:

    $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$  (CR1)
    $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ (CR2)

If these conditions are met, then the derivative $f'(z_0)$ can be expressed in terms of these partial derivatives as:

$f'(z_0) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$

or equivalently,

$f'(z_0) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$

**Derivation of Cauchy-Riemann Equations (Informal):**
Consider the limit definition of the derivative along two different paths:

*   **Path 1: $\Delta z$ along the real axis** ($\Delta y = 0$, so $\Delta z = \Delta x$)
    $f'(z_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x + iy_0) - f(x_0 + iy_0)}{\Delta x}$
    $f'(z_0) = \lim_{\Delta x \to 0} \frac{u(x_0 + \Delta x, y_0) + iv(x_0 + \Delta x, y_0) - (u(x_0, y_0) + iv(x_0, y_0))}{\Delta x}$
    $f'(z_0) = \lim_{\Delta x \to 0} \frac{u(x_0 + \Delta x, y_0) - u(x_0, y_0)}{\Delta x} + i \lim_{\Delta x \to 0} \frac{v(x_0 + \Delta x, y_0) - v(x_0, y_0)}{\Delta x}$
    $f'(z_0) = \frac{\partial u}{\partial x}(x_0, y_0) + i \frac{\partial v}{\partial x}(x_0, y_0)$ (Eq. A)

*   **Path 2: $\Delta z$ along the imaginary axis** ($\Delta x = 0$, so $\Delta z = i \Delta y$)
    $f'(z_0) = \lim_{\Delta y \to 0} \frac{f(x_0 + i(y_0 + \Delta y)) - f(x_0 + iy_0)}{i \Delta y}$
    $f'(z_0) = \lim_{\Delta y \to 0} \frac{u(x_0, y_0 + \Delta y) + iv(x_0, y_0 + \Delta y) - (u(x_0, y_0) + iv(x_0, y_0))}{i \Delta y}$
    $f'(z_0) = \frac{1}{i} \lim_{\Delta y \to 0} \frac{u(x_0, y_0 + \Delta y) - u(x_0, y_0)}{\Delta y} + \lim_{\Delta y \to 0} \frac{v(x_0, y_0 + \Delta y) - v(x_0, y_0)}{\Delta y}$
    $f'(z_0) = -i \frac{\partial u}{\partial y}(x_0, y_0) + \frac{\partial v}{\partial y}(x_0, y_0)$ (Eq. B)

Equating Eq. A and Eq. B:
$\frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$

Equating real and imaginary parts:
$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
$\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$ (This is the same as CR2)

**Textbook Reference:**
*   **Kreyszig, 10th ed., Section 12.4:** Discusses the Cauchy-Riemann equations and their role in defining differentiability.
*   **Zill & Shanahan, 3rd ed., Chapter 2:** Provides a thorough treatment of complex differentiation and the Cauchy-Riemann equations.
*   **Ramana, 39th ed., Chapter 30:** Covers complex variables and their derivatives, including the Cauchy-Riemann conditions.
*   **Grewal, 44th ed., Chapter 16:** Introduces complex differentiation and the necessary conditions.

#### 4. Geometric Interpretation of the Derivative

If $f'(z_0)$ exists and is non-zero, then the transformation $w = f(z)$ at $z_0$ acts as a rotation and a magnification.

*   **Magnification:** The magnitude $|f'(z_0)|$ represents the factor by which lengths are magnified in the neighborhood of $z_0$.
*   **Rotation:** The argument $\arg(f'(z_0))$ represents the angle by which the tangent vector to a curve at $z_0$ is rotated.

This means that if two curves passing through $z_0$ intersect at an angle $\alpha$, their images under $w = f(z)$ will intersect at the same angle $\alpha$ (if $f'(z_0) \neq 0$). This property is fundamental to conformal mapping (discussed in later modules).

**Textbook Reference:**
*   **Zill & Shanahan, 3rd ed., Chapter 2.4:** Explores the geometric interpretation of the derivative.

#### 5. Analyticity (Differentiability vs. Analyticity)

*   **Differentiable:** A function $f(z)$ is differentiable at a point $z_0$ if its derivative $f'(z_0)$ exists at that point.
*   **Analytic (or Holomorphic):** A function $f(z)$ is analytic in an open region $D$ if it is differentiable at every point $z$ in $D$.
*   **Entire Function:** A function that is analytic in the entire complex plane is called an entire function.

**Important Relationship:** If a function is differentiable at a point, it does not necessarily mean it is analytic at that point. However, if a function is analytic in a region, it is differentiable at every point in that region. Analyticity implies differentiability in an open neighborhood.

**Key Point:** Analyticity is a stronger condition than mere differentiability at a single point. It requires differentiability throughout an open region.

**Textbook Reference:**
*   **Kreyszig, 10th ed., Section 12.4:** Distinguishes between differentiability and analyticity.
*   **Zill & Shanahan, 3rd ed., Chapter 2:** Elaborates on the concept of analyticity.

---

### Examples:

**Example 1: Differentiability of $f(z) = z^2$**
Let $f(z) = z^2 = (x + iy)^2 = (x^2 - y^2) + i(2xy)$.
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

Calculate the partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial v}{\partial y} = 2x$

Check the Cauchy-Riemann equations:
CR1: $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 2x$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$.
CR2: $\frac{\partial u}{\partial y} = -2y$ and $-\frac{\partial v}{\partial x} = -(2y) = -2y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.

Since the Cauchy-Riemann equations are satisfied for all $x, y$, and the partial derivatives are continuous everywhere, $f(z) = z^2$ is differentiable everywhere.
The derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = 2x + i(2y) = 2(x + iy) = 2z$.
Thus, $f(z) = z^2$ is an entire function.

**Example 2: Differentiability of $f(z) = \bar{z}$**
Let $f(z) = \bar{z} = x - iy$.
So, $u(x, y) = x$ and $v(x, y) = -y$.

Calculate the partial derivatives:
$\frac{\partial u}{\partial x} = 1$
$\frac{\partial u}{\partial y} = 0$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = -1$

Check the Cauchy-Riemann equations:
CR1: $\frac{\partial u}{\partial x} = 1$ and $\frac{\partial v}{\partial y} = -1$. So, $\frac{\partial u}{\partial x} \neq \frac{\partial v}{\partial y}$.
CR2: $\frac{\partial u}{\partial y} = 0$ and $-\frac{\partial v}{\partial x} = -(0) = 0$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.

Since CR1 is not satisfied, $f(z) = \bar{z}$ is not differentiable anywhere in the complex plane.

**Example 3: Differentiability of $f(z) = |z|^2$**
Let $f(z) = |z|^2 = x^2 + y^2$.
So, $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.

Calculate the partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = 2y$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = 0$

Check the Cauchy-Riemann equations:
CR1: $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 0$. For CR1 to hold, $2x = 0$, which means $x = 0$.
CR2: $\frac{\partial u}{\partial y} = 2y$ and $-\frac{\partial v}{\partial x} = -(0) = 0$. For CR2 to hold, $2y = 0$, which means $y = 0$.

The Cauchy-Riemann equations are satisfied only at the point $z_0 = 0 + i0$. Therefore, $f(z) = |z|^2$ is differentiable only at $z = 0$.
The derivative at $z=0$ is $f'(0) = \frac{\partial u}{\partial x}(0,0) + i \frac{\partial v}{\partial x}(0,0) = 0 + i(0) = 0$.
Since $f(z) = |z|^2$ is not differentiable in any open neighborhood of $z=0$, it is not analytic anywhere.

---

### Practice Questions/Exercises:

1.  Determine if the following functions are differentiable. If they are, find their derivatives.
    a) $f(z) = z^3$
    b) $f(z) = e^z$
    c) $f(z) = \text{Re}(z)$
    d) $f(z) = z \bar{z}^2$

2.  For each of the following functions, determine if they are analytic.
    a) $f(z) = x^2 - y^2 + i(2xy)$
    b) $f(z) = e^x (\cos y + i \sin y)$
    c) $f(z) = x^2 + y^2 + i(x^2 - y^2)$

3.  Given $f(z) = u(x,y) + iv(x,y)$, find $\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial y}$, $\frac{\partial v}{\partial x}$, $\frac{\partial v}{\partial y}$ for $f(z) = \frac{1}{z}$. Then, check if $f(z)$ is analytic. (Hint: Express $z$ in terms of $x$ and $y$, and then write $f(z)$ in the form $u+iv$.)

---

### Answers to Practice Questions:

1.  **a) $f(z) = z^3$**
    $f(z) = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = x^3 + 3ix^2y - 3xy^2 - iy^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$.
    $u = x^3 - 3xy^2$, $v = 3x^2y - y^3$.
    $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$, $\frac{\partial u}{\partial y} = -6xy$.
    $\frac{\partial v}{\partial x} = 6xy$, $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$.
    CR1: $3x^2 - 3y^2 = 3x^2 - 3y^2$ (Holds).
    CR2: $-6xy = -(6xy)$ (Holds).
    The function is differentiable everywhere.
    $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = (3x^2 - 3y^2) + i(6xy) = 3(x^2 - y^2 + 2ixy) = 3(x+iy)^2 = 3z^2$.

2.  **a) $f(z) = x^2 - y^2 + i(2xy)$**
    This is the function $f(z) = z^2$ from Example 1. It is analytic everywhere.

3.  **a) $f(z) = \text{Re}(z) = x$**
    $u = x$, $v = 0$.
    $\frac{\partial u}{\partial x} = 1$, $\frac{\partial u}{\partial y} = 0$.
    $\frac{\partial v}{\partial x} = 0$, $\frac{\partial v}{\partial y} = 0$.
    CR1: $1 \neq 0$. Not differentiable.

4.  **b) $f(z) = e^z$**
    $f(z) = e^{x+iy} = e^x e^{iy} = e^x (\cos y + i \sin y) = e^x \cos y + i e^x \sin y$.
    $u = e^x \cos y$, $v = e^x \sin y$.
    $\frac{\partial u}{\partial x} = e^x \cos y$, $\frac{\partial u}{\partial y} = -e^x \sin y$.
    $\frac{\partial v}{\partial x} = e^x \sin y$, $\frac{\partial v}{\partial y} = e^x \cos y$.
    CR1: $e^x \cos y = e^x \cos y$ (Holds).
    CR2: $-e^x \sin y = -(e^x \sin y)$ (Holds).
    The function is differentiable everywhere.
    $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = e^x \cos y + i e^x \sin y = e^x(\cos y + i \sin y) = e^z$.
    So, $f(z) = e^z$ is an entire function.

5.  **c) $f(z) = z \bar{z}^2$**
    $f(z) = (x+iy)(x-iy)^2 = (x+iy)(x^2 - 2ixy - y^2) = x(x^2 - 2ixy - y^2) + iy(x^2 - 2ixy - y^2)$
    $f(z) = x^3 - 2ix^2y - xy^2 + ix^2y + 2xy^2 + iy^3 = (x^3 + xy^2) + i(-x^2y + y^3)$.
    $u = x^3 + xy^2$, $v = -x^2y + y^3$.
    $\frac{\partial u}{\partial x} = 3x^2 + y^2$, $\frac{\partial u}{\partial y} = 2xy$.
    $\frac{\partial v}{\partial x} = -2xy$, $\frac{\partial v}{\partial y} = -x^2 + 3y^2$.
    CR1: $3x^2 + y^2 = -x^2 + 3y^2 \implies 4x^2 = 2y^2 \implies 2x^2 = y^2$.
    CR2: $2xy = -(-2xy) \implies 2xy = 2xy$ (Holds).
    The Cauchy-Riemann equations are satisfied only when $y^2 = 2x^2$. Therefore, $f(z)$ is differentiable only on the curves $y = \pm \sqrt{2}x$. It is not differentiable in any open region, so it is not analytic.

6.  **a) $f(z) = x^2 - y^2 + i(2xy)$**
    As shown in Q1a (and Example 1), this function satisfies the CR equations everywhere and its partial derivatives are continuous. Hence, it is analytic everywhere.

7.  **b) $f(z) = e^x (\cos y + i \sin y)$**
    As shown in Q1b, this function is $e^z$, which is analytic everywhere.

8.  **c) $f(z) = x^2 + y^2 + i(x^2 - y^2)$**
    $u = x^2 + y^2$, $v = x^2 - y^2$.
    $\frac{\partial u}{\partial x} = 2x$, $\frac{\partial u}{\partial y} = 2y$.
    $\frac{\partial v}{\partial x} = 2x$, $\frac{\partial v}{\partial y} = -2y$.
    CR1: $2x = -2y \implies x = -y$.
    CR2: $2y = -(2x) \implies y = -x$.
    Both CR1 and CR2 imply $y = -x$. The CR equations are satisfied only on the line $y = -x$. Since the function is not differentiable in any open region, it is not analytic.

9.  **$f(z) = \frac{1}{z}$**
    $z = x + iy$.
    $f(z) = \frac{1}{x+iy} = \frac{x-iy}{(x+iy)(x-iy)} = \frac{x-iy}{x^2+y^2} = \frac{x}{x^2+y^2} + i \frac{-y}{x^2+y^2}$.
    So, $u(x,y) = \frac{x}{x^2+y^2}$ and $v(x,y) = \frac{-y}{x^2+y^2}$.
    Calculate partial derivatives:
    $\frac{\partial u}{\partial x} = \frac{(x^2+y^2)(1) - x(2x)}{(x^2+y^2)^2} = \frac{x^2+y^2-2x^2}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$
    $\frac{\partial u}{\partial y} = \frac{(x^2+y^2)(0) - x(2y)}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$
    $\frac{\partial v}{\partial x} = \frac{(x^2+y^2)(0) - (-y)(2x)}{(x^2+y^2)^2} = \frac{2xy}{(x^2+y^2)^2}$
    $\frac{\partial v}{\partial y} = \frac{(x^2+y^2)(-1) - (-y)(2y)}{(x^2+y^2)^2} = \frac{-x^2-y^2+2y^2}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$

    Check Cauchy-Riemann equations:
    CR1: $\frac{\partial u}{\partial x} = \frac{y^2-x^2}{(x^2+y^2)^2}$ and $\frac{\partial v}{\partial y} = \frac{y^2-x^2}{(x^2+y^2)^2}$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ (Holds for $z \neq 0$).
    CR2: $\frac{\partial u}{\partial y} = \frac{-2xy}{(x^2+y^2)^2}$ and $-\frac{\partial v}{\partial x} = -\frac{2xy}{(x^2+y^2)^2}$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ (Holds for $z \neq 0$).

    Since the Cauchy-Riemann equations are satisfied for all $z \neq 0$, and the partial derivatives are continuous for $z \neq 0$, the function $f(z) = \frac{1}{z}$ is differentiable for all $z \neq 0$.
    The derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \frac{y^2-x^2}{(x^2+y^2)^2} + i \frac{2xy}{(x^2+y^2)^2} = \frac{(y^2-x^2) + i(2xy)}{(x^2+y^2)^2}$.
    We can also note that $f'(z) = -\frac{1}{z^2}$.
    $f(z) = \frac{1}{z}$ is analytic everywhere except at $z=0$.

---

### Important Points to Remember:

*   The definition of the complex derivative involves a limit that must be path-independent.
*   The **Cauchy-Riemann equations** ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$) are a **necessary and sufficient condition** for a function $f(z) = u+iv$ to be differentiable at a point $z_0$, provided that the first partial derivatives of $u$ and $v$ are continuous in a neighborhood of $z_0$.
*   If a function is differentiable at $z_0$, its derivative can be calculated as $f'(z_0) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$ (or $\frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$).
*   Analyticity means differentiability in an open region, not just at a single point.
*   The geometric interpretation of the derivative $|f'(z_0)|$ is magnification, and $\arg(f'(z_0))$ is rotation.

---

### Alignment with Course Outcomes (COs):

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3)**
    While this topic directly focuses on derivatives, understanding the fundamental properties of complex functions and their differentiability is crucial for later topics like Fourier transforms, especially in relation to analytic functions and their behavior. For example, the smoothness of a function (related to differentiability) impacts the decay rate of its Fourier transform.
*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping. (Knowledge Level: K3)**
    This topic lays the direct foundation for CO2. The definition of analyticity and the conditions for it (Cauchy-Riemann equations) are central to understanding how functions transform regions and points, which is the essence of conformal mapping.
*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)**
    The differentiability and analyticity established in this topic are prerequisites for applying Cauchy's Integral Theorem and Formula. These theorems fundamentally rely on the function being analytic within a contour.
*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)**
    Analyticity is key to understanding power series expansions (Taylor series). Singularities arise where functions are *not* analytic. The behavior of functions around these singularities, which this topic starts to define, is critical for Laurent series expansions and the residue theorem.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
