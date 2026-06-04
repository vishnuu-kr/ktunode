---
title: "Cauchy-Riemann Equations (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a67"
status: "completed"
scrapedAt: "2026-05-23T16:14:33.188Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 2: Complex Functions

### Topic: Cauchy-Riemann Equations (Without Proof)

---

### 1. Introduction to Complex Functions and Differentiability

**Key Concept:** A complex function $f(z)$ maps a complex number $z$ to another complex number $w = f(z)$.

**Definition:** A complex function $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$ and $u(x, y)$ and $v(x, y)$ are real-valued functions of two real variables $x$ and $y$, is called a complex-valued function of a complex variable.

**Definition of Differentiability:** A complex function $f(z)$ is differentiable at a point $z_0$ if the limit
$$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$$
exists. This limit must be independent of the path along which $\Delta z$ approaches zero.

**Importance:** Differentiability is a crucial concept as it leads to analyticity, which is fundamental for many powerful theorems in complex analysis (e.g., Cauchy's Integral Theorem, Cauchy's Integral Formula). This directly relates to **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.**

---

### 2. The Cauchy-Riemann Equations

**Key Concept:** The Cauchy-Riemann equations provide a necessary and sufficient condition for the differentiability of a complex function $f(z) = u(x, y) + iv(x, y)$ at a point $z = x + iy$, assuming that the first partial derivatives of $u$ and $v$ exist at that point.

**Formulation of the Cauchy-Riemann Equations:**

Let $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$.

The Cauchy-Riemann equations are:

1.  $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
2.  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

**Conditions for Differentiability using Cauchy-Riemann Equations:**

A complex function $f(z) = u(x, y) + iv(x, y)$ is differentiable at a point $z_0 = x_0 + iy_0$ if:

*   The first partial derivatives of $u$ and $v$ exist in some neighborhood of $(x_0, y_0)$.
*   The Cauchy-Riemann equations are satisfied at $(x_0, y_0)$:
    *   $\frac{\partial u}{\partial x}(x_0, y_0) = \frac{\partial v}{\partial y}(x_0, y_0)$
    *   $\frac{\partial u}{\partial y}(x_0, y_0) = -\frac{\partial v}{\partial x}(x_0, y_0)$
*   The partial derivatives $\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial y}$, $\frac{\partial v}{\partial x}$, and $\frac{\partial v}{\partial y}$ are continuous at $(x_0, y_0)$.

If these conditions are met, then the derivative of $f(z)$ at $z_0$ is given by:

$$f'(z_0) = \frac{\partial u}{\partial x}(x_0, y_0) + i \frac{\partial v}{\partial x}(x_0, y_0)$$

**Alternative forms of $f'(z)$:**

Using the Cauchy-Riemann equations, we can also express $f'(z)$ as:

$$f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$$

$$f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y}$$

$$f'(z) = \frac{\partial v}{\partial x} + i \frac{\partial v}{\partial y}$$

**Textbook Reference:** Kreyszig, Chapter 12.1 (Complex Functions). Zill & Shanahan, Chapter 2.1 (Complex Functions). Grewal, Chapter 29 (Complex Numbers). Ramana, Chapter 34 (Complex Variables and Differentiation).

**Knowledge Level:** K3 (Applying) - Students need to apply these equations to check for differentiability.

---

### 3. Examples of Applying Cauchy-Riemann Equations

**Example 1: $f(z) = z^2$**

Let $z = x + iy$. Then $f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 - y^2 + i(2xy)$.
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

Let's compute the partial derivatives:
*   $\frac{\partial u}{\partial x} = 2x$
*   $\frac{\partial u}{\partial y} = -2y$
*   $\frac{\partial v}{\partial x} = 2y$
*   $\frac{\partial v}{\partial y} = 2x$

Now, let's check the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 2x$. Thus, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$.
2.  $\frac{\partial u}{\partial y} = -2y$ and $-\frac{\partial v}{\partial x} = -2y$. Thus, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.

Since both Cauchy-Riemann equations are satisfied for all $x$ and $y$, and the partial derivatives are continuous everywhere, $f(z) = z^2$ is differentiable for all $z$.

The derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = 2x + i(2y) = 2(x + iy) = 2z$.

**Example 2: $f(z) = |z|^2$**

Let $z = x + iy$. Then $f(z) = |z|^2 = x^2 + y^2$.
So, $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$ (since there is no imaginary part).

Let's compute the partial derivatives:
*   $\frac{\partial u}{\partial x} = 2x$
*   $\frac{\partial u}{\partial y} = 2y$
*   $\frac{\partial v}{\partial x} = 0$
*   $\frac{\partial v}{\partial y} = 0$

Now, let's check the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 0$. So, $2x = 0$, which implies $x = 0$.
2.  $\frac{\partial u}{\partial y} = 2y$ and $-\frac{\partial v}{\partial x} = 0$. So, $2y = 0$, which implies $y = 0$.

The Cauchy-Riemann equations are satisfied only at the point $(0, 0)$, which corresponds to $z = 0$. Thus, $f(z) = |z|^2$ is differentiable only at $z = 0$.

At $z = 0$, the partial derivatives are continuous.
$f'(0) = \frac{\partial u}{\partial x}(0, 0) + i \frac{\partial v}{\partial x}(0, 0) = 0 + i(0) = 0$.

**Example 3: $f(z) = \bar{z}$**

Let $z = x + iy$. Then $f(z) = \bar{z} = x - iy$.
So, $u(x, y) = x$ and $v(x, y) = -y$.

Let's compute the partial derivatives:
*   $\frac{\partial u}{\partial x} = 1$
*   $\frac{\partial u}{\partial y} = 0$
*   $\frac{\partial v}{\partial x} = 0$
*   $\frac{\partial v}{\partial y} = -1$

Now, let's check the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 1$ and $\frac{\partial v}{\partial y} = -1$. So, $1 = -1$, which is false.
2.  $\frac{\partial u}{\partial y} = 0$ and $-\frac{\partial v}{\partial x} = 0$. So, $0 = 0$, which is true.

Since the first Cauchy-Riemann equation is not satisfied for any point $(x, y)$, $f(z) = \bar{z}$ is nowhere differentiable.

---

### 4. Analyticity and the Cauchy-Riemann Equations

**Key Concept:** An analytic function is a function that is differentiable not only at a point but also in some neighborhood around that point.

**Definition of Analytic Function:** A complex function $f(z)$ is said to be **analytic** (or **holomorphic**) in a region $R$ if it is differentiable at every point in $R$. If $f(z)$ is analytic in the entire complex plane, it is called an **entire function**.

**Connection to Cauchy-Riemann Equations:**

If a complex function $f(z) = u(x, y) + iv(x, y)$ is analytic in a region $R$, then the Cauchy-Riemann equations must hold for all $z$ in $R$. Moreover, the partial derivatives of $u$ and $v$ must be continuous in $R$.

**Conformal Mapping (Relating to CO2):**

Analytic functions are intimately related to conformal mapping. A mapping $w = f(z)$ is **conformal** at a point $z_0$ if it preserves angles between intersecting curves passing through $z_0$, both in magnitude and orientation.

**Theorem:** If $f(z)$ is analytic in a region $R$ and $f'(z) \neq 0$ at a point $z_0 \in R$, then the mapping $w = f(z)$ is conformal at $z_0$.

**Significance:** Understanding analyticity through the Cauchy-Riemann equations is crucial for understanding conformal mappings, which have applications in fluid dynamics, heat transfer, and elasticity in physical sciences and electrical engineering.

**Important Point to Remember:** The existence of the derivative at a single point does not imply analyticity. For a function to be analytic, it must be differentiable in a neighborhood. The continuity of the partial derivatives is key to ensuring this.

---

### 5. Harmonic Functions

**Key Concept:** If $f(z) = u(x, y) + iv(x, y)$ is an analytic function, then both its real part $u(x, y)$ and its imaginary part $v(x, y)$ are **harmonic functions**.

**Definition of Harmonic Function:** A real-valued function $\phi(x, y)$ of two real variables $x$ and $y$ is called **harmonic** in a region if its second partial derivatives exist and are continuous and satisfy Laplace's equation:
$$\nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$$

**Harmonic Conjugate:** If $u(x, y)$ and $v(x, y)$ are such that $f(z) = u(x, y) + iv(x, y)$ is analytic, then $v$ is called the **harmonic conjugate** of $u$, and vice versa.

**Relationship with Cauchy-Riemann Equations:**

If $f(z) = u + iv$ is analytic, then:
$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.

Consider $u(x, y)$:
$\frac{\partial^2 u}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial u}{\partial x}\right) = \frac{\partial}{\partial x}\left(\frac{\partial v}{\partial y}\right) = \frac{\partial^2 v}{\partial x \partial y}$
$\frac{\partial^2 u}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial u}{\partial y}\right) = \frac{\partial}{\partial y}\left(-\frac{\partial v}{\partial x}\right) = -\frac{\partial^2 v}{\partial y \partial x}$

Since the mixed partial derivatives of $v$ are equal (due to the continuity of partial derivatives of an analytic function), we have:
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{\partial^2 v}{\partial x \partial y} - \frac{\partial^2 v}{\partial y \partial x} = 0$.
Thus, $u$ is harmonic.

Similarly, for $v(x, y)$:
$\frac{\partial^2 v}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial v}{\partial x}\right) = \frac{\partial}{\partial x}\left(-\frac{\partial u}{\partial y}\right) = -\frac{\partial^2 u}{\partial x \partial y}$
$\frac{\partial^2 v}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial v}{\partial y}\right) = \frac{\partial}{\partial y}\left(\frac{\partial u}{\partial x}\right) = \frac{\partial^2 u}{\partial y \partial x}$

$\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = -\frac{\partial^2 u}{\partial x \partial y} + \frac{\partial^2 u}{\partial y \partial x} = 0$.
Thus, $v$ is harmonic.

**Textbook Reference:** Kreyszig, Chapter 12.3 (Harmonic Functions). Zill & Shanahan, Chapter 2.2 (Analyticity). Ramana, Chapter 34.3 (Harmonic Functions). Grewal, Chapter 29.7 (Harmonic Functions).

**Significance:** The concept of harmonic functions is vital in solving boundary value problems in physics and engineering, such as steady-state temperature distribution and electrostatic potential. This relates to the broader applications of complex analysis in physical sciences.

---

### 6. Practice Questions and Answers

**Question 1:** Determine if the function $f(z) = e^x (\cos y + i \sin y)$ is analytic. If it is, find its derivative.

**Solution 1:**
Let $z = x + iy$.
$f(z) = e^x \cos y + i e^x \sin y$.
So, $u(x, y) = e^x \cos y$ and $v(x, y) = e^x \sin y$.

Partial derivatives:
*   $\frac{\partial u}{\partial x} = e^x \cos y$
*   $\frac{\partial u}{\partial y} = -e^x \sin y$
*   $\frac{\partial v}{\partial x} = e^x \sin y$
*   $\frac{\partial v}{\partial y} = e^x \cos y$

Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = e^x \cos y$ and $\frac{\partial v}{\partial y} = e^x \cos y$. Thus, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$.
2.  $\frac{\partial u}{\partial y} = -e^x \sin y$ and $-\frac{\partial v}{\partial x} = -e^x \sin y$. Thus, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.

All partial derivatives exist and are continuous everywhere. The Cauchy-Riemann equations are satisfied for all $z$. Therefore, $f(z)$ is analytic everywhere (it is an entire function).

The derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = e^x \cos y + i e^x \sin y = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.

**Question 2:** For which values of $z$ is the function $f(z) = x^3 + iy^3$ differentiable?

**Solution 2:**
$u(x, y) = x^3$ and $v(x, y) = y^3$.

Partial derivatives:
*   $\frac{\partial u}{\partial x} = 3x^2$
*   $\frac{\partial u}{\partial y} = 0$
*   $\frac{\partial v}{\partial x} = 0$
*   $\frac{\partial v}{\partial y} = 3y^2$

Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 3x^2$ and $\frac{\partial v}{\partial y} = 3y^2$. So, $3x^2 = 3y^2 \implies x^2 = y^2 \implies x = \pm y$.
2.  $\frac{\partial u}{\partial y} = 0$ and $-\frac{\partial v}{\partial x} = 0$. So, $0 = 0$, which is always true.

The Cauchy-Riemann equations are satisfied only when $x = y$ or $x = -y$. The partial derivatives are continuous everywhere. Therefore, $f(z) = x^3 + iy^3$ is differentiable only at points where $x = y$ or $x = -y$.

**Question 3:** Show that the function $f(z) = \frac{z+2}{z+1}$ is analytic everywhere except at $z = -1$. Find $f'(z)$.

**Solution 3:**
$f(z) = \frac{x+iy+2}{x+iy+1} = \frac{(x+2)+iy}{(x+1)+iy}$

Multiply by the conjugate of the denominator:
$f(z) = \frac{((x+2)+iy)((x+1)-iy)}{((x+1)+iy)((x+1)-iy)}$
$f(z) = \frac{(x+2)(x+1) - i y (x+2) + i y (x+1) - (iy)(-iy)}{(x+1)^2 + y^2}$
$f(z) = \frac{(x^2 + 3x + 2) - ixy - 2iy + ixy + iy + y^2}{(x+1)^2 + y^2}$
$f(z) = \frac{(x^2 + y^2 + 3x + 2) + i(-y)}{(x+1)^2 + y^2}$

So, $u(x, y) = \frac{x^2 + y^2 + 3x + 2}{(x+1)^2 + y^2}$ and $v(x, y) = \frac{-y}{(x+1)^2 + y^2}$.

Calculating the partial derivatives would be tedious. Instead, we can use the fact that $f(z)$ is a rational function of $z$. Rational functions are analytic wherever their denominator is non-zero. The denominator is $z+1$, which is zero when $z = -1$. Therefore, $f(z)$ is analytic everywhere except at $z = -1$.

Using the quotient rule for derivatives:
$f'(z) = \frac{(1)(z+1) - (z+2)(1)}{(z+1)^2} = \frac{z+1 - z - 2}{(z+1)^2} = \frac{-1}{(z+1)^2}$.

**Question 4:** Find the harmonic conjugate of $u(x, y) = x^3 - 3xy^2$.

**Solution 4:**
First, verify that $u(x, y)$ is harmonic.
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
$\frac{\partial^2 u}{\partial x^2} = 6x$
$\frac{\partial u}{\partial y} = -6xy$
$\frac{\partial^2 u}{\partial y^2} = -6x$
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 6x + (-6x) = 0$.
So, $u(x, y)$ is harmonic.

We need to find $v(x, y)$ such that $f(z) = u(x, y) + iv(x, y)$ is analytic. This means the Cauchy-Riemann equations must hold:
1.  $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 3x^2 - 3y^2 = \frac{\partial v}{\partial y}$
2.  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies -6xy = -\frac{\partial v}{\partial x} \implies 6xy = \frac{\partial v}{\partial x}$

Integrate (1) with respect to $y$:
$v(x, y) = \int (3x^2 - 3y^2) dy = 3x^2y - y^3 + \phi(x)$

Now, differentiate this expression for $v$ with respect to $x$ and equate it to $\frac{\partial v}{\partial x}$ from (2):
$\frac{\partial v}{\partial x} = \frac{\partial}{\partial x} (3x^2y - y^3 + \phi(x)) = 6xy + \phi'(x)$.

Equating this with $6xy$:
$6xy + \phi'(x) = 6xy$
$\phi'(x) = 0 \implies \phi(x) = C$ (a constant).

So, the harmonic conjugate is $v(x, y) = 3x^2y - y^3 + C$.
The analytic function is $f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3) + iC$.
Notice that $f(z) = z^3$. Let's check: $z^3 = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = x^3 + 3ix^2y - 3xy^2 - iy^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$. This matches our $u$ and $v$ (ignoring the constant C for the function itself).

---

### 7. Important Points to Remember

*   The Cauchy-Riemann equations are necessary conditions for differentiability. For differentiability at a point, these equations must hold, and the partial derivatives must be continuous in a neighborhood of that point.
*   The existence of the derivative at a point means the function is locally linear.
*   Analyticity implies differentiability in a neighborhood. A function is analytic in a region if it is differentiable at every point in that region.
*   Harmonic functions are the real and imaginary parts of analytic functions. They satisfy Laplace's equation.
*   The Cauchy-Riemann equations provide a link between differentiability of a complex function and the harmonic nature of its real and imaginary parts.
*   The derivative $f'(z)$ can be expressed in several forms using the Cauchy-Riemann equations.

---

### 8. Alignment with Course Outcomes

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. (Knowledge Level: K3)**
    While this topic doesn't directly cover Fourier Transforms, the ability to analyze and understand functions in the complex plane is foundational for more advanced topics like the Fourier Transform of complex functions or the use of complex analysis in signal processing.

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping. (Knowledge Level: K3)**
    This topic is central to CO2. The Cauchy-Riemann equations are the primary tool for determining if a function is analytic. The understanding of analyticity is the direct prerequisite for studying conformal mappings, as the Cauchy-Riemann equations are implicitly used in their derivation and properties.

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)**
    The Cauchy-Riemann equations are fundamental for establishing the conditions under which Cauchy's Integral Theorem and Formula are applicable (i.e., the integrand must be analytic). Without differentiability (and thus the satisfaction of C-R equations), these powerful integral theorems cannot be used.

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)**
    Similar to CO3, the concept of analyticity, directly assessed by the Cauchy-Riemann equations, is crucial. Singularities are points where a function fails to be analytic. Understanding where a function *is* analytic (using C-R equations) helps in classifying singularities and applying the Residue Theorem.

---

This comprehensive study note provides a thorough understanding of the Cauchy-Riemann Equations, their significance, and their application in determining the differentiability and analyticity of complex functions, aligning with the learning outcomes and course objectives for Module 2.
