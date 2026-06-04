---
title: "Derivative"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe25c"
status: "completed"
scrapedAt: "2026-05-23T17:47:02.205Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

### Module 2: Complex Function - Topic: Derivative

---

### Introduction to Complex Derivatives

This module focuses on the concept of the derivative of a complex function, which is a fundamental building block for understanding complex analysis. This topic is crucial for several course outcomes, particularly those related to analyticity and its applications.

**Key Concept:** The derivative of a complex function is a generalization of the derivative of a real-valued function. However, the conditions for differentiability in the complex plane are much stricter, leading to the concept of analytic functions.

---

### 1. Definition of the Complex Derivative

Let $f(z)$ be a complex-valued function of a complex variable $z$. The derivative of $f(z)$ at a point $z_0$ is defined as the limit:

$$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$$

provided this limit exists and is independent of the path along which $\Delta z$ approaches 0.

**Important Point:** The requirement that the limit exists and is independent of the path is the key differentiator from real calculus.

---

### 2. Differentiability and Analyticity

A function $f(z)$ is said to be **differentiable** at a point $z_0$ if its derivative $f'(z_0)$ exists.

A function $f(z)$ is said to be **analytic** (or **holomorphic**) in a region $R$ if it is differentiable at every point in $R$. A function that is analytic at a point $z_0$ is also analytic in some neighborhood of $z_0$.

**Connection to Course Outcomes:** This concept directly relates to **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.** Analyticity is a prerequisite for many powerful theorems in complex analysis, including those related to conformal mappings.

---

### 3. Cauchy-Riemann Equations

The Cauchy-Riemann equations provide a necessary and sufficient condition for a complex function to be differentiable at a point.

Let $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$, and $u(x, y)$ and $v(x, y)$ are real-valued functions of two real variables $x$ and $y$.

The function $f(z)$ is differentiable at $z = x + iy$ if and only if the partial derivatives of $u$ and $v$ exist and satisfy the Cauchy-Riemann equations:

$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$

**If these conditions are met and the partial derivatives are continuous in a neighborhood of $(x, y)$, then $f(z)$ is analytic at $z$.**

**In terms of the complex derivative:**
If $f(z)$ is differentiable at $z$, then:
$$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$$
or equivalently, using the Cauchy-Riemann equations:
$$f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$$

**Example:**
Let $f(z) = z^2$. Then $f(z) = (x+iy)^2 = x^2 - y^2 + i(2xy)$.
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

Let's check the Cauchy-Riemann equations:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial v}{\partial y} = 2x$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial v}{\partial x} = 2y$

Here, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} = 2x$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} = -2y$.
The Cauchy-Riemann equations are satisfied for all $x$ and $y$. The partial derivatives are continuous everywhere. Therefore, $f(z) = z^2$ is analytic everywhere, and its derivative is:
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = 2x + i(2y) = 2(x+iy) = 2z$.

**Reference:** Kreyszig, 10th edition, Chapter 12, Section 12.1.

---

### 4. Methods for Checking Differentiability and Analyticity

#### 4.1 Using the Definition (Limit)

While the definition is fundamental, it's often cumbersome to use directly for finding derivatives. It's more useful for proving properties or understanding the concept.

**Example:**
Show that $f(z) = |z|^2$ is differentiable at $z=0$ but not elsewhere.
$f(z) = x^2 + y^2$. So $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.

At $z=0$ ($x=0, y=0$):
$\frac{\partial u}{\partial x} = 2x = 0$
$\frac{\partial v}{\partial y} = 0$
$\frac{\partial u}{\partial y} = 2y = 0$
$\frac{\partial v}{\partial x} = 0$
The Cauchy-Riemann equations hold at $(0,0)$. $f'(0) = 0$.

For $z \neq 0$, let's consider approaching $z$ along different paths:
Let $z = x+iy$.
$\Delta z = \Delta x + i\Delta y$.
$f(z+\Delta z) = |z+\Delta z|^2 = (x+\Delta x)^2 + (y+\Delta y)^2 = x^2 + 2x\Delta x + (\Delta x)^2 + y^2 + 2y\Delta y + (\Delta y)^2$
$f(z) = x^2 + y^2$
$f(z+\Delta z) - f(z) = 2x\Delta x + (\Delta x)^2 + 2y\Delta y + (\Delta y)^2$

$\frac{f(z+\Delta z) - f(z)}{\Delta z} = \frac{2x\Delta x + (\Delta x)^2 + 2y\Delta y + (\Delta y)^2}{\Delta x + i\Delta y}$

If we approach along the real axis, $\Delta y = 0$:
$\lim_{\Delta x \to 0} \frac{2x\Delta x + (\Delta x)^2}{\Delta x} = \lim_{\Delta x \to 0} (2x + \Delta x) = 2x$.

If we approach along the imaginary axis, $\Delta x = 0$:
$\lim_{\Delta y \to 0} \frac{2y\Delta y + (\Delta y)^2}{i\Delta y} = \lim_{\Delta y \to 0} \frac{2y + \Delta y}{i} = \frac{2y}{i} = -2iy$.

For differentiability, $2x = -2iy$. This implies $x=0$ and $y=0$. So, $|z|^2$ is only differentiable at $z=0$.

#### 4.2 Using Cauchy-Riemann Equations

This is the most practical method.

**Example:**
Is $f(z) = e^z$ analytic?
$f(z) = e^{x+iy} = e^x e^{iy} = e^x (\cos y + i \sin y)$.
$u(x, y) = e^x \cos y$
$v(x, y) = e^x \sin y$

$\frac{\partial u}{\partial x} = e^x \cos y$
$\frac{\partial v}{\partial y} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$
$\frac{\partial v}{\partial x} = e^x \sin y$

We see that $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
The partial derivatives are continuous everywhere. Therefore, $f(z) = e^z$ is analytic everywhere.
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = e^x \cos y + i (e^x \sin y) = e^x (\cos y + i \sin y) = e^x e^{iy} = e^z$.

**Reference:** Zill & Shanahan, 3rd edition, Chapter 3, Section 3.1.

---

### 5. Rules for Differentiation of Complex Functions

The rules for differentiation are analogous to those for real-valued functions. If $f(z)$ and $g(z)$ are differentiable at $z$, then:

1.  **Sum Rule:** $(f+g)'(z) = f'(z) + g'(z)$
2.  **Difference Rule:** $(f-g)'(z) = f'(z) - g'(z)$
3.  **Product Rule:** $(fg)'(z) = f'(z)g(z) + f(z)g'(z)$
4.  **Quotient Rule:** $(\frac{f}{g})'(z) = \frac{f'(z)g(z) - f(z)g'(z)}{[g(z)]^2}$, provided $g(z) \neq 0$.
5.  **Chain Rule:** If $w = f(z)$ and $\zeta = g(w)$, then $\frac{d\zeta}{dz} = \frac{d\zeta}{dw} \frac{dw}{dz}$.

**Important Derivatives:**
*   $\frac{d}{dz}(c) = 0$ (where $c$ is a complex constant)
*   $\frac{d}{dz}(z^n) = nz^{n-1}$ (for any integer $n$)
*   $\frac{d}{dz}(e^z) = e^z$
*   $\frac{d}{dz}(\sin z) = \cos z$
*   $\frac{d}{dz}(\cos z) = -\sin z$
*   $\frac{d}{dz}(\sinh z) = \cosh z$
*   $\frac{d}{dz}(\cosh z) = \sinh z$
*   $\frac{d}{dz}(\ln z) = \frac{1}{z}$ (for the principal branch of $\ln z$)
*   $\frac{d}{dz}(a^z) = a^z \ln a$ (for $a > 0$)

**Example:**
Find the derivative of $f(z) = z^3 + 2e^z - \sin z$.
Using the sum, difference, and derivative rules:
$f'(z) = \frac{d}{dz}(z^3) + 2\frac{d}{dz}(e^z) - \frac{d}{dz}(\sin z)$
$f'(z) = 3z^2 + 2e^z - \cos z$.

**Reference:** Ramana, 39th edition, Chapter 28, Section 28.3.

---

### 6. Analytic Functions and Harmonic Functions

A significant consequence of the Cauchy-Riemann equations is the connection between analytic functions and harmonic functions.

If $f(z) = u(x, y) + iv(x, y)$ is analytic in a region $R$, then both its real part $u(x, y)$ and its imaginary part $v(x, y)$ are **harmonic functions** in $R$. A function is harmonic if it satisfies Laplace's equation:

$$\nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$$

**Proof Sketch:**
From the Cauchy-Riemann equations:
$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
$\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

Differentiate the first equation with respect to $x$:
$\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial x \partial y}$

Differentiate the second equation with respect to $y$:
$\frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial y \partial x}$

Assuming the mixed partial derivatives of $v$ are continuous (which is true if $f(z)$ is analytic in a region with continuous second partial derivatives), we have $\frac{\partial^2 v}{\partial x \partial y} = \frac{\partial^2 v}{\partial y \partial x}$.
Therefore, $\frac{\partial^2 u}{\partial x^2} = -\frac{\partial^2 u}{\partial y^2}$, which means $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$.
So, $u(x, y)$ is harmonic.

Similarly, one can show that $v(x, y)$ is also harmonic.

**Connection to Course Outcomes:** This property is deeply linked to many physical phenomena described by Laplace's equation (e.g., steady-state temperature distribution, electric potential). Understanding analyticity helps in finding solutions to such problems.

**Example:**
As shown before, $f(z) = z^2 = (x^2 - y^2) + i(2xy)$ is analytic.
The real part $u(x, y) = x^2 - y^2$ should be harmonic.
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial^2 u}{\partial x^2} = 2$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial^2 u}{\partial y^2} = -2$
$\nabla^2 u = 2 + (-2) = 0$. So $u$ is harmonic.

The imaginary part $v(x, y) = 2xy$ should also be harmonic.
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial^2 v}{\partial x^2} = 0$
$\frac{\partial v}{\partial y} = 2x$
$\frac{\partial^2 v}{\partial y^2} = 0$
$\nabla^2 v = 0 + 0 = 0$. So $v$ is harmonic.

**Finding Harmonic Conjugates:**
If $u(x, y)$ is a harmonic function, its **harmonic conjugate** $v(x, y)$ can be found using the Cauchy-Riemann equations.
Given $u(x, y)$, we have:
$\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$
$\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$

Integrate the first equation with respect to $y$ to find $v$:
$v(x, y) = \int \frac{\partial u}{\partial x} dy + g(x)$ (where $g(x)$ is an arbitrary function of $x$).

Then, differentiate this expression for $v$ with respect to $x$ and equate it to $-\frac{\partial u}{\partial y}$ to find $g(x)$.

**Example:**
Find the harmonic conjugate of $u(x, y) = x^2 - y^2$.
We know $u$ is harmonic.
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$

Using Cauchy-Riemann:
$\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x \implies v(x, y) = \int 2x dy = 2xy + g(x)$.
$\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y$.

Differentiating $v(x, y) = 2xy + g(x)$ with respect to $x$:
$\frac{\partial v}{\partial x} = 2y + g'(x)$.

Equating the two expressions for $\frac{\partial v}{\partial x}$:
$2y + g'(x) = 2y \implies g'(x) = 0 \implies g(x) = C$ (a constant).

So, $v(x, y) = 2xy + C$.
The function $f(z) = u(x, y) + iv(x, y) = (x^2 - y^2) + i(2xy + C) = z^2 + iC$. This is consistent with our earlier findings.

**Reference:** Grewal, 44th edition, Chapter 38, Section 38.3.

---

### 7. Relationship with Fourier Transforms (Indirectly)

While this topic is primarily about complex derivatives, it's worth noting the connection to **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**

The ability to differentiate and integrate complex functions is fundamental for understanding and manipulating Fourier transforms. Many operations in the frequency domain, such as multiplication by $j\omega$ in the Fourier transform of derivatives, rely on the rules of calculus extended to the complex domain.

For instance, if $f(t) \leftrightarrow F(\omega)$, then $\frac{df}{dt} \leftrightarrow j\omega F(\omega)$. This involves understanding the derivative of functions that are represented in the complex frequency domain.

**Reference:** Rao, Kim, Hwang, "Fast Fourier Transform - Algorithms and Applications" (While this book focuses on FFT, the underlying mathematical principles of signal processing in the frequency domain are rooted in complex analysis.)

---

### 8. Practice Questions and Answers

**Question 1:**
Determine whether the function $f(z) = |z|$ is differentiable. If so, where?

**Answer 1:**
$f(z) = |z|$. We can write $f(z) = \sqrt{x^2 + y^2}$.
$u(x, y) = \sqrt{x^2 + y^2}$ and $v(x, y) = 0$.

Let's check the Cauchy-Riemann equations:
$\frac{\partial u}{\partial x} = \frac{x}{\sqrt{x^2 + y^2}}$
$\frac{\partial v}{\partial y} = 0$

For differentiability, we need $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$, so $\frac{x}{\sqrt{x^2 + y^2}} = 0$. This implies $x=0$.
Also, $\frac{\partial u}{\partial y} = \frac{y}{\sqrt{x^2 + y^2}}$ and $\frac{\partial v}{\partial x} = 0$.
So, we need $\frac{y}{\sqrt{x^2 + y^2}} = 0$, which implies $y=0$.

The Cauchy-Riemann equations are only satisfied at $(x, y) = (0, 0)$. However, the partial derivatives $\frac{\partial u}{\partial x}$ and $\frac{\partial u}{\partial y}$ are not defined at $(0,0)$.
Using the limit definition, it can be shown that $f(z)=|z|$ is not differentiable anywhere.

**Question 2:**
Find the derivative of $f(z) = \frac{1}{z}$ and determine where it is analytic.

**Answer 2:**
We can use the quotient rule or the power rule ($\frac{d}{dz}(z^{-1}) = -1 z^{-2}$).
$f'(z) = -\frac{1}{z^2}$.

To check analyticity using Cauchy-Riemann:
$f(z) = \frac{1}{x+iy} = \frac{x-iy}{(x+iy)(x-iy)} = \frac{x-iy}{x^2+y^2} = \frac{x}{x^2+y^2} + i \frac{-y}{x^2+y^2}$.
$u(x, y) = \frac{x}{x^2+y^2}$, $v(x, y) = \frac{-y}{x^2+y^2}$.

$\frac{\partial u}{\partial x} = \frac{(x^2+y^2)(1) - x(2x)}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$
$\frac{\partial v}{\partial y} = \frac{(x^2+y^2)(-1) - (-y)(2y)}{(x^2+y^2)^2} = \frac{-x^2-y^2+2y^2}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$

$\frac{\partial u}{\partial y} = \frac{(x^2+y^2)(0) - x(2y)}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$
$\frac{\partial v}{\partial x} = \frac{(x^2+y^2)(0) - (-y)(2x)}{(x^2+y^2)^2} = \frac{2xy}{(x^2+y^2)^2}$

The Cauchy-Riemann equations are satisfied:
$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
The partial derivatives are continuous everywhere except at $(0,0)$, which is where $f(z)$ is undefined.
Thus, $f(z) = \frac{1}{z}$ is analytic everywhere except at $z=0$.

**Question 3:**
Given $u(x, y) = e^x \cos y$, find its harmonic conjugate $v(x, y)$ and express the analytic function $f(z) = u(x, y) + iv(x, y)$ in terms of $z$.

**Answer 3:**
$u(x, y) = e^x \cos y$. We know this is harmonic (from $e^z$).
$\frac{\partial u}{\partial x} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$

Using Cauchy-Riemann equations for $v(x, y)$:
$\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = e^x \cos y \implies v(x, y) = \int e^x \cos y dy = e^x \sin y + g(x)$.
$\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-e^x \sin y) = e^x \sin y$.

Differentiating $v(x, y) = e^x \sin y + g(x)$ with respect to $x$:
$\frac{\partial v}{\partial x} = e^x \sin y + g'(x)$.

Equating the two expressions for $\frac{\partial v}{\partial x}$:
$e^x \sin y + g'(x) = e^x \sin y \implies g'(x) = 0 \implies g(x) = C$ (a constant).

So, $v(x, y) = e^x \sin y + C$.
The analytic function is $f(z) = u(x, y) + iv(x, y) = (e^x \cos y) + i(e^x \sin y + C) = e^x (\cos y + i \sin y) + iC = e^x e^{iy} + iC = e^{x+iy} + iC = e^z + iC$.

---

### 9. Summary of Key Points

*   The derivative of a complex function $f(z)$ is defined as a limit that must be path-independent.
*   **Analyticity** is the property of being differentiable in a region.
*   The **Cauchy-Riemann equations** ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$) are the key criteria for checking differentiability and analyticity.
*   If $f(z)$ is analytic, its real and imaginary parts are **harmonic functions** satisfying Laplace's equation.
*   The rules for differentiation (sum, product, quotient, chain) are similar to real calculus.
*   Understanding derivatives is foundational for other topics like conformal mapping and integration in the complex plane.

---

This concludes the notes on the Derivative of Complex Functions. This topic is crucial for progressing to more advanced concepts in complex analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
