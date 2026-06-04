---
title: "Cauchy-Riemann Equations (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810692"
status: "completed"
scrapedAt: "2026-05-20T18:41:19.636Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Function

### Topic: Cauchy-Riemann Equations (without proof)

---

### 1. Introduction to Complex Functions

A complex function is a function whose domain and/or range are sets of complex numbers. We typically denote a complex function as $f(z)$, where $z$ is a complex variable. A complex number $z$ can be written in rectangular form as $z = x + iy$, where $x$ and $y$ are real numbers, and $i$ is the imaginary unit ($i^2 = -1$).

When we express a complex function $f(z)$ in terms of $x$ and $y$, we can separate it into its real and imaginary parts. Let:

$f(z) = u(x, y) + iv(x, y)$

where $u(x, y)$ is the real part of $f(z)$ and $v(x, y)$ is the imaginary part of $f(z)$. Both $u$ and $v$ are real-valued functions of two real variables $x$ and $y$.

**Key Concept:** Every complex function $f(z)$ can be uniquely represented by two real-valued functions of two real variables, its real part $u(x, y)$ and its imaginary part $v(x, y)$.

---

### 2. The Concept of Differentiability for Complex Functions

A complex function $f(z)$ is said to be **differentiable** at a point $z_0$ if the limit
$$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$$
exists. The limit must exist and be the same regardless of the path along which $\Delta z$ approaches 0.

**Important Point to Remember:** This requirement for the limit to be independent of the path of approach is much stronger than for real functions and leads to the powerful Cauchy-Riemann equations.

---

### 3. The Cauchy-Riemann Equations

The Cauchy-Riemann equations are a pair of partial differential equations that provide a necessary condition for a complex function $f(z) = u(x, y) + iv(x, y)$ to be differentiable at a point $z = x + iy$.

**Statement of Cauchy-Riemann Equations:**

A complex function $f(z) = u(x, y) + iv(x, y)$ is differentiable at a point $z = x + iy$ if and only if the partial derivatives of $u$ and $v$ with respect to $x$ and $y$ exist and satisfy the following two equations at that point:

1.  $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
2.  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

These equations are often written in a more compact form:

$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

**Explanation:**

*   These equations relate the rates of change of the real part $u$ with respect to the real variable $x$ to the rate of change of the imaginary part $v$ with respect to the imaginary variable $y$.
*   They also relate the rate of change of $u$ with respect to $y$ to the rate of change of $v$ with respect to $x$. The negative sign in the second equation is crucial.

---

### 4. The Relationship Between Differentiability and Cauchy-Riemann Equations

While the Cauchy-Riemann equations are a *necessary* condition for differentiability, they are not always *sufficient* on their own. For a function to be differentiable, not only must the Cauchy-Riemann equations hold, but also the partial derivatives of $u$ and $v$ must exist and be continuous in a neighborhood of the point.

**Sufficient Condition for Differentiability:**

A complex function $f(z) = u(x, y) + iv(x, y)$ is differentiable at a point $z_0 = x_0 + iy_0$ if:

1.  The partial derivatives $\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial y}$, $\frac{\partial v}{\partial x}$, and $\frac{\partial v}{\partial y}$ exist in some neighborhood of $(x_0, y_0)$.
2.  The Cauchy-Riemann equations are satisfied at $(x_0, y_0)$:
    $\frac{\partial u}{\partial x}(x_0, y_0) = \frac{\partial v}{\partial y}(x_0, y_0)$
    $\frac{\partial u}{\partial y}(x_0, y_0) = -\frac{\partial v}{\partial x}(x_0, y_0)$
3.  The partial derivatives $\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial y}$, $\frac{\partial v}{\partial x}$, and $\frac{\partial v}{\partial y}$ are **continuous** at $(x_0, y_0)$.

**Key Point:** For most functions encountered in introductory complex analysis, if the Cauchy-Riemann equations are satisfied and the partial derivatives are continuous (which is often the case for polynomial or simple algebraic functions), then the function is differentiable.

---

### 5. Using Cauchy-Riemann Equations to Test for Differentiability

We can use the Cauchy-Riemann equations to determine if a given complex function is differentiable at a specific point or in a region.

**Steps:**

1.  **Identify the real and imaginary parts:** Given $f(z)$, express it in the form $f(z) = u(x, y) + iv(x, y)$.
2.  **Calculate the partial derivatives:** Find $\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial y}$, $\frac{\partial v}{\partial x}$, and $\frac{\partial v}{\partial y}$.
3.  **Check the Cauchy-Riemann equations:**
    *   Compare $\frac{\partial u}{\partial x}$ with $\frac{\partial v}{\partial y}$.
    *   Compare $\frac{\partial u}{\partial y}$ with $-\frac{\partial v}{\partial x}$.
4.  **Conclusion:**
    *   If both equations are satisfied at a point $(x, y)$, and the partial derivatives are continuous at that point, then $f(z)$ is differentiable at $z = x + iy$.
    *   If either equation fails to hold at a point, then $f(z)$ is not differentiable at that point.

---

### 6. Examples

**Example 1: $f(z) = z^2$**

Let $z = x + iy$.
$f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$

So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

Now, let's find the partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial v}{\partial y} = 2x$

Check the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 2x$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$. (Holds)
2.  $\frac{\partial u}{\partial y} = -2y$ and $-\frac{\partial v}{\partial x} = -(2y) = -2y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$. (Holds)

Since both Cauchy-Riemann equations are satisfied for all $x$ and $y$, and the partial derivatives are continuous everywhere, $f(z) = z^2$ is differentiable for all complex numbers $z$.

**Example 2: $f(z) = |z|^2$**

Let $z = x + iy$.
$f(z) = |z|^2 = x^2 + y^2$.
This is a purely real function, so its imaginary part is zero.
$f(z) = (x^2 + y^2) + i(0)$

So, $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.

Now, let's find the partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = 2y$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = 0$

Check the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 0$. For these to be equal, $2x = 0$, which means $x = 0$.
2.  $\frac{\partial u}{\partial y} = 2y$ and $-\frac{\partial v}{\partial x} = -0 = 0$. For these to be equal, $2y = 0$, which means $y = 0$.

Both Cauchy-Riemann equations are only satisfied simultaneously at the point $(0, 0)$, which corresponds to $z = 0$.
The partial derivatives are continuous everywhere. Therefore, $f(z) = |z|^2$ is differentiable only at $z = 0$.

**Example 3: $f(z) = \bar{z}$ (Complex Conjugate)**

Let $z = x + iy$.
$f(z) = \bar{z} = x - iy$.

So, $u(x, y) = x$ and $v(x, y) = -y$.

Now, let's find the partial derivatives:
$\frac{\partial u}{\partial x} = 1$
$\frac{\partial u}{\partial y} = 0$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = -1$

Check the Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 1$ and $\frac{\partial v}{\partial y} = -1$. Here, $1 \neq -1$. So, $\frac{\partial u}{\partial x} \neq \frac{\partial v}{\partial y}$. (Fails)
2.  $\frac{\partial u}{\partial y} = 0$ and $-\frac{\partial v}{\partial x} = -0 = 0$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$. (Holds)

Since the first Cauchy-Riemann equation is not satisfied for any $(x, y)$, $f(z) = \bar{z}$ is not differentiable anywhere in the complex plane.

---

### 7. Practice Questions

**Question 1:**
Determine whether the function $f(z) = z^3$ is differentiable. If it is, find its derivative.

**Question 2:**
For the function $f(z) = e^x (\cos y + i \sin y)$, find the real and imaginary parts, $u(x, y)$ and $v(x, y)$. Then, check if the Cauchy-Riemann equations are satisfied and determine if the function is differentiable.

**Question 3:**
Is the function $f(z) = x^2 - y^2 - 2ixy$ differentiable? Justify your answer using the Cauchy-Riemann equations.

**Question 4:**
Consider the function $f(z) = \frac{z}{\bar{z}}$ for $z \neq 0$. Is this function differentiable? (Hint: Consider different paths for $\Delta z \to 0$ or analyze the real and imaginary parts carefully.)

---

### 8. Answers to Practice Questions

**Answer 1:**
Let $z = x + iy$.
$f(z) = z^3 = (x + iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3$
$f(z) = x^3 + 3ix^2y - 3xy^2 - iy^3$
$f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3)$

So, $u(x, y) = x^3 - 3xy^2$ and $v(x, y) = 3x^2y - y^3$.

Partial derivatives:
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
$\frac{\partial u}{\partial y} = -6xy$
$\frac{\partial v}{\partial x} = 6xy$
$\frac{\partial v}{\partial y} = 3x^2 - 3y^2$

Checking Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$ and $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$. They are equal.
2.  $\frac{\partial u}{\partial y} = -6xy$ and $-\frac{\partial v}{\partial x} = -(6xy) = -6xy$. They are equal.

Both equations are satisfied for all $x$ and $y$. The partial derivatives are polynomials, hence continuous everywhere.
Therefore, $f(z) = z^3$ is differentiable everywhere.

The derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = (3x^2 - 3y^2) + i(6xy)$.
We can also express this in terms of $z$: $f'(z) = 3(x^2 - y^2 + 2ixy) = 3(x + iy)^2 = 3z^2$.

**Answer 2:**
$f(z) = e^x (\cos y + i \sin y)$
This is Euler's formula form: $f(z) = e^x e^{iy} = e^{x+iy} = e^z$.

So, $u(x, y) = e^x \cos y$ and $v(x, y) = e^x \sin y$.

Partial derivatives:
$\frac{\partial u}{\partial x} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$
$\frac{\partial v}{\partial x} = e^x \sin y$
$\frac{\partial v}{\partial y} = e^x \cos y$

Checking Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = e^x \cos y$ and $\frac{\partial v}{\partial y} = e^x \cos y$. They are equal.
2.  $\frac{\partial u}{\partial y} = -e^x \sin y$ and $-\frac{\partial v}{\partial x} = -(e^x \sin y) = -e^x \sin y$. They are equal.

Both equations are satisfied for all $x$ and $y$. The partial derivatives are continuous everywhere.
Therefore, $f(z) = e^z$ is differentiable everywhere.
Its derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = e^x \cos y + i e^x \sin y = e^x(\cos y + i \sin y) = e^z$.

**Answer 3:**
$f(z) = x^2 - y^2 - 2ixy$
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = -2xy$.

Partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial v}{\partial x} = -2y$
$\frac{\partial v}{\partial y} = -2x$

Checking Cauchy-Riemann equations:
1.  $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = -2x$. For these to be equal, $2x = -2x$, which implies $4x = 0$, so $x = 0$.
2.  $\frac{\partial u}{\partial y} = -2y$ and $-\frac{\partial v}{\partial x} = -(-2y) = 2y$. For these to be equal, $-2y = 2y$, which implies $4y = 0$, so $y = 0$.

Both Cauchy-Riemann equations are only satisfied simultaneously at the point $(0, 0)$, which corresponds to $z = 0$.
The partial derivatives are polynomials and thus continuous everywhere.
Therefore, $f(z) = x^2 - y^2 - 2ixy$ is differentiable only at $z = 0$.

*(Note: This function is actually $-(x+iy)^2 = -z^2$. The function $z^2$ in Example 1 was $(x^2 - y^2) + i(2xy)$, which is different from this $v(x,y)$ term.)*

**Answer 4:**
$f(z) = \frac{z}{\bar{z}}$ for $z \neq 0$.
Let $z = x + iy$. Then $\bar{z} = x - iy$.
$f(z) = \frac{x + iy}{x - iy} = \frac{(x + iy)(x + iy)}{(x - iy)(x + iy)} = \frac{x^2 + 2ixy - y^2}{x^2 + y^2}$
$f(z) = \frac{x^2 - y^2}{x^2 + y^2} + i \frac{2xy}{x^2 + y^2}$

So, $u(x, y) = \frac{x^2 - y^2}{x^2 + y^2}$ and $v(x, y) = \frac{2xy}{x^2 + y^2}$.

Let's consider differentiability at a point $(x, y) \neq (0, 0)$.
Calculating partial derivatives directly is very tedious and involves the quotient rule for multivariable functions.
A more insightful approach is to consider the definition of differentiability and the limit as $\Delta z \to 0$.

Consider approaching the origin $z=0$.
If we approach along the real axis, $z = x$ (so $y=0$), then $\Delta z = \Delta x$.
$f(z) = \frac{x}{x} = 1$ (for $x \neq 0$).
So, $f'(0)$ via this path would suggest a derivative of 0.

If we approach along the imaginary axis, $z = iy$ (so $x=0$), then $\Delta z = i \Delta y$.
$f(z) = \frac{iy}{-iy} = -1$ (for $y \neq 0$).
So, $f'(0)$ via this path would suggest a derivative of 0.

However, let's try approaching along the line $y=x$. Then $z = x + ix = x(1+i)$.
$f(z) = \frac{x(1+i)}{x(1-i)} = \frac{1+i}{1-i} = \frac{(1+i)(1+i)}{(1-i)(1+i)} = \frac{1 + 2i - 1}{1 + 1} = \frac{2i}{2} = i$.
The limit as $z \to 0$ along $y=x$ is $i$.

Since the limits along different paths are different, the overall limit $\lim_{\Delta z \to 0} f(z)$ does not exist.
Therefore, $f(z) = \frac{z}{\bar{z}}$ is not differentiable anywhere.

*(Self-correction: The initial thought of checking Cauchy-Riemann equations for this function is very difficult due to the division by $x^2+y^2$, making the partial derivatives complicated. The limit approach is more effective here to show non-differentiability.)*

---

### 9. Important Points to Remember

*   **Cauchy-Riemann equations are necessary conditions for differentiability.** If they are not met, the function is not differentiable.
*   For a function to be differentiable, the partial derivatives must also be **continuous** in a neighborhood of the point. This is a sufficient condition along with the Cauchy-Riemann equations being met.
*   Differentiability in the complex sense is a much stronger condition than in the real sense, implying that the function behaves very "nicely" (is conformal, meaning it preserves angles) in the neighborhood of a differentiable point.
*   The Cauchy-Riemann equations can be expressed in polar coordinates as well, but the rectangular form is usually the starting point for understanding.
*   If a function is differentiable everywhere in a region, it is called an **analytic** or **holomorphic** function in that region.
