---
title: "Cauchy-Riemann Equations (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462ca1"
status: "completed"
scrapedAt: "2026-05-20T17:50:40.811Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Function

### Topic: Cauchy-Riemann Equations (without proof)

---

### 1. Learning Outcomes

Upon successful completion of this topic, students will be able to:

*   Understand the role of the Cauchy-Riemann equations in determining the analyticity of a complex function.
*   Apply the Cauchy-Riemann equations to test if a given complex function is analytic.
*   Understand the relationship between Cauchy-Riemann equations and the derivative of a complex function.
*   Recognize the significance of analytic functions in various applications of electrical and physical sciences.

---

### 2. Key Concepts and Definitions

#### 2.1 Complex Functions

A complex function is a function whose domain and/or range are sets of complex numbers. A typical complex function is of the form $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$, and $u(x, y)$ and $v(x, y)$ are real-valued functions of two real variables $x$ and $y$.

*   $u(x, y)$: Real part of $f(z)$
*   $v(x, y)$: Imaginary part of $f(z)$

**(Referenced from Kreyszig, 10th ed., Chapter 13.1: Complex Functions)**

#### 2.2 Differentiability of Complex Functions

A complex function $f(z)$ is said to be differentiable at a point $z_0$ if the limit
$$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$$
exists. The limit must be the same regardless of the path $\Delta z$ approaches $0$.

#### 2.3 Analyticity (or Holomorphicity)

A complex function $f(z)$ is said to be **analytic** at a point $z_0$ if it is differentiable at $z_0$ and in some neighborhood (an open disk) containing $z_0$.
A function that is analytic in the entire complex plane is called an **entire function**.

**(Referenced from Zill & Shanahan, 3rd ed., Chapter 3.1: Differentiability and Analyticity)**

---

### 3. The Cauchy-Riemann Equations

The Cauchy-Riemann equations provide a necessary condition for a complex function to be differentiable. If a complex function $f(z) = u(x, y) + iv(x, y)$ is differentiable at a point $z = x + iy$, then the first partial derivatives of $u$ and $v$ must satisfy the following two equations at that point:

*   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
*   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

These two equations are collectively known as the **Cauchy-Riemann equations**.

**(Referenced from Kreyszig, 10th ed., Chapter 13.4: Analytic Functions. Harmonic Functions)**
**(Referenced from Ramana, 39th ed., Chapter 37: Complex Differentiation)**

#### 3.1 Sufficient Conditions for Analyticity

While the Cauchy-Riemann equations are necessary for differentiability, they are not always sufficient on their own. However, if a function $f(z) = u(x, y) + iv(x, y)$ has continuous first partial derivatives in a neighborhood of a point $z_0$, and these partial derivatives satisfy the Cauchy-Riemann equations at $z_0$, then $f(z)$ is differentiable at $z_0$.

If the first partial derivatives of $u$ and $v$ are continuous in a region $R$, and the Cauchy-Riemann equations hold throughout $R$, then $f(z)$ is analytic in $R$.

**Theorem:** Let $f(z) = u(x, y) + iv(x, y)$. If the first partial derivatives of $u$ and $v$ exist and are continuous in an open connected set $D$, and if they satisfy the Cauchy-Riemann equations
$$ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $$
at every point in $D$, then $f(z)$ is analytic in $D$.

**(Referenced from Zill & Shanahan, 3rd ed., Chapter 3.1: Differentiability and Analyticity)**
**(Referenced from Grewal, 44th ed., Chapter 32: Complex Differentiation)**

#### 3.2 Cauchy-Riemann Equations in Polar Coordinates

If we express $z$ in polar form, $z = r(\cos \theta + i \sin \theta) = re^{i\theta}$, then the function can be written as $f(z) = f(re^{i\theta}) = u(r, \theta) + iv(r, \theta)$.

The Cauchy-Riemann equations in polar coordinates are:

*   $\frac{\partial u}{\partial r} = \frac{1}{r} \frac{\partial v}{\partial \theta}$
*   $\frac{\partial u}{\partial \theta} = -r \frac{\partial v}{\partial r}$

These equations are useful for testing analyticity of functions in polar form, especially when the function is given in terms of $r$ and $\theta$.

**(Referenced from Kreyszig, 10th ed., Chapter 13.4: Analytic Functions. Harmonic Functions)**

---

### 4. Relationship to the Derivative

If $f(z) = u(x, y) + iv(x, y)$ is analytic in a region $R$, then its derivative is given by:

*   $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$
*   $f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$ (Using the Cauchy-Riemann equations in the first form)
*   $f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y}$ (Using the Cauchy-Riemann equations in the second form)
*   $f'(z) = \frac{\partial v}{\partial y} + i \frac{\partial v}{\partial x}$ (Using the Cauchy-Riemann equations in both forms)

The most common and useful forms for calculation are:
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$
and
$f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y}$ (by substituting $\frac{\partial v}{\partial y}$ for $\frac{\partial u}{\partial x}$)

**(Referenced from Kreyszig, 10th ed., Chapter 13.4: Analytic Functions. Harmonic Functions)**
**(Referenced from Ramana, 39th ed., Chapter 37: Complex Differentiation)**

---

### 5. Examples

#### Example 1: $f(z) = z^2$

Let $z = x + iy$. Then $f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$.
Here, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

Let's find the partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial v}{\partial y} = 2x$

Now, let's check the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 2x$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$. (Satisfied)
2.  $\frac{\partial u}{\partial y} = -2y$ and $-\frac{\partial v}{\partial x} = -(2y) = -2y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$. (Satisfied)

Since the partial derivatives of $u$ and $v$ are continuous everywhere and satisfy the Cauchy-Riemann equations everywhere, $f(z) = z^2$ is analytic for all $z \in \mathbb{C}$ (i.e., it is an entire function).

The derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = 2x + i(2y) = 2(x + iy) = 2z$, which is the expected derivative of $z^2$.

#### Example 2: $f(z) = e^z$

Let $z = x + iy$. Then $f(z) = e^{x+iy} = e^x e^{iy} = e^x(\cos y + i \sin y) = e^x \cos y + i e^x \sin y$.
Here, $u(x, y) = e^x \cos y$ and $v(x, y) = e^x \sin y$.

Let's find the partial derivatives:
$\frac{\partial u}{\partial x} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$
$\frac{\partial v}{\partial x} = e^x \sin y$
$\frac{\partial v}{\partial y} = e^x \cos y$

Now, let's check the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = e^x \cos y$ and $\frac{\partial v}{\partial y} = e^x \cos y$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$. (Satisfied)
2.  $\frac{\partial u}{\partial y} = -e^x \sin y$ and $-\frac{\partial v}{\partial x} = -(e^x \sin y) = -e^x \sin y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$. (Satisfied)

Since the partial derivatives are continuous everywhere and satisfy the Cauchy-Riemann equations everywhere, $f(z) = e^z$ is analytic for all $z \in \mathbb{C}$ (it is an entire function).

The derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = e^x \cos y + i (e^x \sin y) = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.

#### Example 3: $f(z) = |z|^2 = x^2 + y^2$

Let $f(z) = |z|^2 = x^2 + y^2$.
Here, $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.

Let's find the partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = 2y$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = 0$

Now, let's check the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 0$. For these to be equal, $2x = 0$, which means $x = 0$.
2.  $\frac{\partial u}{\partial y} = 2y$ and $-\frac{\partial v}{\partial x} = -0 = 0$. For these to be equal, $2y = 0$, which means $y = 0$.

The Cauchy-Riemann equations are only satisfied at the point $z = 0 + i0 = 0$. Therefore, $f(z) = |z|^2$ is differentiable only at $z=0$, but it is not analytic anywhere, as analyticity requires differentiability in a neighborhood.

#### Example 4: $f(z) = \bar{z}$

Let $f(z) = \bar{z} = x - iy$.
Here, $u(x, y) = x$ and $v(x, y) = -y$.

Let's find the partial derivatives:
$\frac{\partial u}{\partial x} = 1$
$\frac{\partial u}{\partial y} = 0$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = -1$

Now, let's check the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 1$ and $\frac{\partial v}{\partial y} = -1$. So, $1 = -1$, which is false.
2.  $\frac{\partial u}{\partial y} = 0$ and $-\frac{\partial v}{\partial x} = -0 = 0$. So, $0 = 0$. (Satisfied)

Since the first Cauchy-Riemann equation is not satisfied for any point $(x, y)$, the function $f(z) = \bar{z}$ is not differentiable at any point, and hence not analytic anywhere.

---

### 6. Important Points to Remember

*   **Necessary Condition:** The Cauchy-Riemann equations are a *necessary* condition for a function to be differentiable at a point. If they are not satisfied at a point, the function is not differentiable there.
*   **Sufficient Condition:** If the first partial derivatives of $u$ and $v$ are continuous in a region and satisfy the Cauchy-Riemann equations in that region, then the function is analytic in that region.
*   **Analyticity vs. Differentiability:** A function must be differentiable in an *open disk* (neighborhood) around a point to be analytic at that point. A function can be differentiable at a single point but not analytic there (e.g., $|z|^2$ at $z=0$).
*   **Harmonic Functions:** If $f(z) = u + iv$ is analytic in a region, then both $u$ and $v$ are **harmonic functions** in that region. A function $u(x, y)$ is harmonic if its second partial derivatives satisfy Laplace's equation: $\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$. The harmonic conjugate of a harmonic function $u$ is the function $v$ such that $u+iv$ is analytic.
*   **Polar Form:** Remember the Cauchy-Riemann equations in polar coordinates for functions expressed in $r$ and $\theta$.
*   **Derivative Formulas:** The derivative of an analytic function can be expressed in multiple forms using the Cauchy-Riemann equations.

**(Referenced from Kreyszig, 10th ed., Chapter 13.4: Analytic Functions. Harmonic Functions)**
**(Referenced from Ramana, 39th ed., Chapter 37: Complex Differentiation)**
**(Referenced from Grewal, 44th ed., Chapter 32: Complex Differentiation)**

---

### 7. Practice Questions/Exercises

**Question 1:**
Determine if the following complex functions are analytic. If they are, find their derivative.
(a) $f(z) = z^3$
(b) $f(z) = \frac{1}{z}$
(c) $f(z) = e^{-x}(\cos y - i \sin y)$
(d) $f(z) = x^2 - y^2 + 2ixy$
(e) $f(z) = \sin x \cosh y + i \cos x \sinh y$

**Question 2:**
Show that the function $f(z) = \frac{x}{x^2+y^2} + i \frac{-y}{x^2+y^2}$ is analytic for $z \neq 0$. Find its derivative.
*(Hint: Consider $z = re^{i\theta}$ or work in Cartesian coordinates. $f(z) = 1/z$ is a good candidate to compare with).*

**Question 3:**
Find the values of constants $a$, $b$, and $c$ such that the function $f(z) = x + iy + a(x^2 - y^2 + 2ixy) + b(x - iy) + c$ is analytic.

**Question 4:**
Is the function $f(z) = \text{Re}(z) = x$ analytic? Justify your answer using the Cauchy-Riemann equations.

**Question 5:**
Is the function $f(z) = z \bar{z}$ analytic? Justify your answer.

---

### 8. Answers to Practice Questions

**Answer 1:**
(a) $f(z) = z^3 = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = x^3 + 3ix^2y - 3xy^2 - iy^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$.
$u = x^3 - 3xy^2$, $v = 3x^2y - y^3$.
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2$, $\frac{\partial u}{\partial y} = -6xy$.
$\frac{\partial v}{\partial x} = 6xy$, $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$.
$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ (3x² - 3y² = 3x² - 3y²) and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ (-6xy = -6xy).
The partial derivatives are continuous everywhere. Thus, $f(z) = z^3$ is analytic everywhere.
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = (3x^2 - 3y^2) + i(6xy) = 3(x^2 - y^2 + 2ixy) = 3(x+iy)^2 = 3z^2$.

(b) $f(z) = \frac{1}{z} = \frac{1}{x+iy} = \frac{x-iy}{(x+iy)(x-iy)} = \frac{x-iy}{x^2+y^2} = \frac{x}{x^2+y^2} + i \frac{-y}{x^2+y^2}$.
$u = \frac{x}{x^2+y^2}$, $v = \frac{-y}{x^2+y^2}$.
$\frac{\partial u}{\partial x} = \frac{(x^2+y^2)(1) - x(2x)}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$.
$\frac{\partial u}{\partial y} = \frac{(x^2+y^2)(0) - x(2y)}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$.
$\frac{\partial v}{\partial x} = \frac{(x^2+y^2)(0) - (-y)(2x)}{(x^2+y^2)^2} = \frac{2xy}{(x^2+y^2)^2}$.
$\frac{\partial v}{\partial y} = \frac{(x^2+y^2)(-1) - (-y)(2y)}{(x^2+y^2)^2} = \frac{-x^2-y^2+2y^2}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$.
$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ (Satisfied) and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ (Satisfied).
The partial derivatives are continuous for all $z \neq 0$. Thus, $f(z) = 1/z$ is analytic for $z \neq 0$.
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \frac{y^2-x^2}{(x^2+y^2)^2} + i \frac{2xy}{(x^2+y^2)^2} = \frac{(y^2-x^2) + i(2xy)}{(x^2+y^2)^2} = \frac{-(x^2-y^2-2ixy)}{(x^2+y^2)^2} = \frac{-(x-iy)^2}{((x-iy)(x+iy))^2} = \frac{-(x-iy)^2}{(x-iy)^2(x+iy)^2} = \frac{-1}{(x+iy)^2} = \frac{-1}{z^2}$.

(c) $f(z) = e^{-x}(\cos y - i \sin y) = e^{-x}e^{-iy} = e^{-(x+iy)} = e^{-z}$.
$u = e^{-x} \cos y$, $v = -e^{-x} \sin y$.
$\frac{\partial u}{\partial x} = -e^{-x} \cos y$.
$\frac{\partial u}{\partial y} = -e^{-x} \sin y$.
$\frac{\partial v}{\partial x} = -(-e^{-x} \sin y) = e^{-x} \sin y$.
$\frac{\partial v}{\partial y} = -e^{-x} \cos y$.
$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ (-e⁻ˣ cos y = -e⁻ˣ cos y) and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ (-e⁻ˣ sin y = -e⁻ˣ sin y).
The partial derivatives are continuous everywhere. Thus, $f(z) = e^{-z}$ is analytic everywhere.
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = -e^{-x} \cos y + i (e^{-x} \sin y) = -e^{-x}(\cos y - i \sin y) = -e^{-x}e^{-iy} = -e^{-(x+iy)} = -e^{-z}$.

(d) $f(z) = x^2 - y^2 + 2ixy$. This is the same as $f(z) = z^2$. From Example 1, it is analytic everywhere, and $f'(z) = 2z$.

(e) $f(z) = \sin x \cosh y + i \cos x \sinh y$.
$u = \sin x \cosh y$, $v = \cos x \sinh y$.
$\frac{\partial u}{\partial x} = \cos x \cosh y$.
$\frac{\partial u}{\partial y} = \sin x \sinh y$.
$\frac{\partial v}{\partial x} = -\sin x \sinh y$.
$\frac{\partial v}{\partial y} = \cos x \cosh y$.
$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ (cos x cosh y = cos x cosh y) and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ (sin x sinh y = -(-sin x sinh y) = sin x sinh y).
The partial derivatives are continuous everywhere. Thus, $f(z)$ is analytic everywhere.
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \cos x \cosh y + i (-\sin x \sinh y) = \cos x \cosh y - i \sin x \sinh y$.
This can be recognized as $\cos(x+iy) = \cos z$.

**Answer 2:**
$f(z) = \frac{x}{x^2+y^2} + i \frac{-y}{x^2+y^2}$. This is the function $1/z$ in Cartesian form.
From the calculation in 1(b), the Cauchy-Riemann equations are satisfied for $z \neq 0$.
The partial derivatives are continuous for $z \neq 0$.
Thus, $f(z)$ is analytic for $z \neq 0$.
Its derivative is $f'(z) = \frac{-1}{z^2}$.

**Answer 3:**
Let $g(z) = x + iy = z$. This is analytic.
Let $h(z) = x^2 - y^2 + 2ixy = z^2$. This is analytic.
Let $k(z) = x - iy = \bar{z}$. This is not analytic.
$f(z) = (x + iy) + a(x^2 - y^2 + 2ixy) + b(x - iy) + c$
$f(z) = z + a z^2 + b \bar{z} + c$.
For $f(z)$ to be analytic, all terms must contribute to an analytic function. $z$ and $z^2$ are analytic. $c$ is a constant, so it's analytic. For $b \bar{z}$ to be analytic, $b$ must be 0.
If $b=0$, then $f(z) = z + a z^2 + c$. This is a sum of analytic functions, which is analytic.
So, $a$ and $c$ can be any complex numbers, and $b$ must be 0.

**Answer 4:**
$f(z) = x$.
$u(x, y) = x$, $v(x, y) = 0$.
$\frac{\partial u}{\partial x} = 1$, $\frac{\partial u}{\partial y} = 0$.
$\frac{\partial v}{\partial x} = 0$, $\frac{\partial v}{\partial y} = 0$.
Cauchy-Riemann equations:
1. $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 1 = 0$ (False).
2. $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies 0 = -0$ (True).
Since the first equation is not satisfied, $f(z) = x$ is not analytic anywhere.

**Answer 5:**
$f(z) = z \bar{z} = (x+iy)(x-iy) = x^2 + y^2$.
$u(x, y) = x^2 + y^2$, $v(x, y) = 0$.
$\frac{\partial u}{\partial x} = 2x$, $\frac{\partial u}{\partial y} = 2y$.
$\frac{\partial v}{\partial x} = 0$, $\frac{\partial v}{\partial y} = 0$.
Cauchy-Riemann equations:
1. $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 2x = 0 \implies x = 0$.
2. $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies 2y = -0 \implies y = 0$.
The Cauchy-Riemann equations are only satisfied at the point $(0, 0)$, i.e., $z=0$. Since analyticity requires differentiability in an open disk around a point, and the equations are not satisfied in any open disk (only at a single point), the function is not analytic anywhere.

---

### 9. Alignment with Course Outcomes

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.** This topic directly addresses the understanding of analyticity, which is a prerequisite for understanding conformal mapping in later parts of the module. The Cauchy-Riemann equations are the fundamental tool for checking analyticity.
*   **CO1, CO3, CO4:** While this specific topic focuses solely on Cauchy-Riemann equations and analyticity, these concepts are foundational for other outcomes. For instance, the existence of an analytic function is crucial for applying Cauchy's integral theorems (CO3) and for understanding series expansions and residue theory (CO4). Fourier transforms (CO1) often operate on functions, and understanding the properties of these functions (like analyticity) can be important in advanced applications.

---
**(End of Notes)**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
