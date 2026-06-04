---
title: "Cauchy-Riemann Equations (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe25e"
status: "completed"
scrapedAt: "2026-05-23T17:47:03.807Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Cauchy-Riemann Equations (Without Proof)

---

### Learning Outcomes:

*   **Understand the concept of analyticity of a complex function.**
*   **State and apply the Cauchy-Riemann equations to determine if a complex function is analytic.**
*   **Relate the Cauchy-Riemann equations to the differentiability of a complex function.**

---

### Course Outcomes Alignment:

*   This topic directly supports **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.** (Knowledge Level: K3) by providing the fundamental criterion for analyticity, which is essential for understanding conformal mappings.

---

### 1. Introduction to Complex Functions and Differentiability

A complex function $f(z)$ maps a complex number $z$ to another complex number $w$. We can write $z = x + iy$ and $f(z) = u(x, y) + iv(x, y)$, where $u(x, y)$ and $v(x, y)$ are real-valued functions of two real variables $x$ and $y$.

**Definition of the Derivative of a Complex Function:**
The derivative of a complex function $f(z)$ at a point $z_0$ is defined as:
$$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$$
provided this limit exists.

**Crucial Point:** For the limit to exist, it must be the same regardless of the path $\Delta z$ takes to approach 0. This is a much stricter condition than for real-valued functions.

---

### 2. Analyticity

**Definition of Analytic Function:**
A function $f(z)$ is said to be **analytic** at a point $z_0$ if it is differentiable not only at $z_0$ but also in some neighborhood (an open disk) around $z_0$.

**Definition of Entire Function:**
A function that is analytic in the entire complex plane is called an **entire function**.

**Importance of Analyticity:**
Analytic functions possess many powerful properties, including:
*   They are infinitely differentiable.
*   They can be represented by Taylor series.
*   They satisfy Cauchy's Integral Theorem and Cauchy's Integral Formula (covered in other modules, but the foundation is analyticity).
*   They are essential for understanding conformal mapping (CO2).

---

### 3. The Cauchy-Riemann Equations

The Cauchy-Riemann equations provide a necessary and sufficient condition for the differentiability of a complex function $f(z) = u(x, y) + iv(x, y)$ at a point $z = x + iy$.

Let $f(z) = u(x, y) + iv(x, y)$.
Consider the limit definition of the derivative:
$$f'(z) = \lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z}$$

We will evaluate this limit along two specific paths:
1.  **Along the real axis:** $\Delta z = \Delta x$ (where $\Delta y = 0$).
    $$f'(z) = \lim_{\Delta x \to 0} \frac{u(x+\Delta x, y) + iv(x+\Delta x, y) - u(x, y) - iv(x, y)}{\Delta x}$$
    $$f'(z) = \lim_{\Delta x \to 0} \frac{u(x+\Delta x, y) - u(x, y)}{\Delta x} + i \lim_{\Delta x \to 0} \frac{v(x+\Delta x, y) - v(x, y)}{\Delta x}$$
    This gives:
    $$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$$  (Eq. 1)

2.  **Along the imaginary axis:** $\Delta z = i \Delta y$ (where $\Delta x = 0$).
    $$f'(z) = \lim_{\Delta y \to 0} \frac{u(x, y+\Delta y) + iv(x, y+\Delta y) - u(x, y) - iv(x, y)}{i \Delta y}$$
    $$f'(z) = \lim_{\Delta y \to 0} \frac{u(x, y+\Delta y) - u(x, y)}{i \Delta y} + i \lim_{\Delta y \to 0} \frac{v(x, y+\Delta y) - v(x, y)}{i \Delta y}$$
    $$f'(z) = \frac{1}{i} \lim_{\Delta y \to 0} \frac{u(x, y+\Delta y) - u(x, y)}{\Delta y} + \lim_{\Delta y \to 0} \frac{v(x, y+\Delta y) - v(x, y)}{\Delta y}$$
    Since $\frac{1}{i} = -i$, this gives:
    $$f'(z) = -i \frac{\partial u}{\partial y} + \frac{\partial v}{\partial y}$$ (Eq. 2)

**The Cauchy-Riemann Equations:**
For the derivative $f'(z)$ to exist, the limits obtained along both paths must be equal. Equating the real and imaginary parts of Eq. 1 and Eq. 2:

*   **Real Parts:** $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
*   **Imaginary Parts:** $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$

These are the **Cauchy-Riemann Equations**.

**Theorem:**
Let $f(z) = u(x, y) + iv(x, y)$. If the partial derivatives $\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial y}$, $\frac{\partial v}{\partial x}$, and $\frac{\partial v}{\partial y}$ exist in a neighborhood of a point $z$, and if they are continuous at $z$, and if they satisfy the Cauchy-Riemann equations at $z$, then $f(z)$ is differentiable at $z$.

Furthermore, if $f(z)$ is differentiable in a neighborhood of $z_0$ and the Cauchy-Riemann equations hold in that neighborhood, and the partial derivatives are continuous there, then $f(z)$ is **analytic** at $z_0$.

**In summary, for $f(z)$ to be differentiable (and thus analytic) at $z$, the Cauchy-Riemann equations must be satisfied.**

---

### 4. Criteria for Analyticity

A function $f(z) = u(x, y) + iv(x, y)$ is **analytic** in a domain $D$ if:
1.  The first partial derivatives of $u$ and $v$ exist in $D$.
2.  The Cauchy-Riemann equations are satisfied for all $z$ in $D$:
    *   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
    *   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$
3.  The partial derivatives $\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial y}$, $\frac{\partial v}{\partial x}$, and $\frac{\partial v}{\partial y}$ are continuous in $D$.

**Important Note:** If $f(z)$ is differentiable at a point $z_0$, and its partial derivatives are continuous at $z_0$ and satisfy the Cauchy-Riemann equations at $z_0$, then $f(z)$ is analytic at $z_0$. For many common functions (like polynomials, exponentials, trigonometric functions), the partial derivatives are not only continuous but also satisfy the Cauchy-Riemann equations everywhere they are defined.

---

### 5. Calculating the Derivative Using Cauchy-Riemann Equations

If the Cauchy-Riemann equations are satisfied, the derivative $f'(z)$ can be calculated using either of the expressions derived earlier:

*   $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$
*   $f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$ (substituting $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$)

**Alternative Form of the Cauchy-Riemann Equations:**
Sometimes, it's convenient to express the Cauchy-Riemann equations in terms of the Cauchy-Riemann equations and their derivatives. If $f(z)$ is analytic, then its second partial derivatives are also continuous. Differentiating the Cauchy-Riemann equations:

*   $\frac{\partial}{\partial x} \left(\frac{\partial u}{\partial x}\right) = \frac{\partial}{\partial x} \left(\frac{\partial v}{\partial y}\right) \implies \frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial x \partial y}$
*   $\frac{\partial}{\partial y} \left(\frac{\partial u}{\partial y}\right) = \frac{\partial}{\partial y} \left(-\frac{\partial v}{\partial x}\right) \implies \frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial y \partial x}$

Adding these two results:
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{\partial^2 v}{\partial x \partial y} - \frac{\partial^2 v}{\partial y \partial x}$
Since mixed partial derivatives are equal for analytic functions ($\frac{\partial^2 v}{\partial x \partial y} = \frac{\partial^2 v}{\partial y \partial x}$), the right-hand side is zero.

**Laplace's Equation:**
This leads to **Laplace's equation** for the real and imaginary parts of an analytic function:
*   $\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$
*   $\nabla^2 v = \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$

Functions $u$ and $v$ that satisfy Laplace's equation are called **harmonic functions**. If $f(z)$ is analytic, then both its real and imaginary parts ($u$ and $v$) are harmonic. The term $v$ is called the **harmonic conjugate** of $u$.

---

### 6. Examples

**Example 1: Is $f(z) = z^2$ analytic?**

Let $z = x + iy$.
$f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

Now, let's find the partial derivatives:
*   $\frac{\partial u}{\partial x} = 2x$
*   $\frac{\partial u}{\partial y} = -2y$
*   $\frac{\partial v}{\partial x} = 2y$
*   $\frac{\partial v}{\partial y} = 2x$

Check the Cauchy-Riemann Equations:
1.  $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 2x$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ is satisfied.
2.  $\frac{\partial u}{\partial y} = -2y$ and $-\frac{\partial v}{\partial x} = -(2y) = -2y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ is satisfied.

Since the Cauchy-Riemann equations are satisfied for all $x$ and $y$, and the partial derivatives are continuous everywhere, $f(z) = z^2$ is analytic everywhere (it is an entire function).

Let's find its derivative:
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = (2x) + i(2y) = 2(x + iy) = 2z$.
This matches the known derivative of $z^2$.

**Example 2: Is $f(z) = |z|^2 = x^2 + y^2$ analytic?**

Here, $f(z) = x^2 + y^2$. So, $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.

Partial derivatives:
*   $\frac{\partial u}{\partial x} = 2x$
*   $\frac{\partial u}{\partial y} = 2y$
*   $\frac{\partial v}{\partial x} = 0$
*   $\frac{\partial v}{\partial y} = 0$

Check the Cauchy-Riemann Equations:
1.  $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 0$. For these to be equal, $2x = 0$, which means $x = 0$.
2.  $\frac{\partial u}{\partial y} = 2y$ and $-\frac{\partial v}{\partial x} = -0 = 0$. For these to be equal, $2y = 0$, which means $y = 0$.

The Cauchy-Riemann equations are only satisfied at the point $z = 0 + i0 = 0$. Since they are not satisfied in any neighborhood around $z=0$, the function $f(z) = |z|^2$ is **not analytic** at any point. It is differentiable only at $z=0$.

**Example 3: Is $f(z) = e^z$ analytic?**

Let $z = x + iy$.
$f(z) = e^{x+iy} = e^x e^{iy} = e^x (\cos y + i \sin y) = e^x \cos y + i e^x \sin y$
So, $u(x, y) = e^x \cos y$ and $v(x, y) = e^x \sin y$.

Partial derivatives:
*   $\frac{\partial u}{\partial x} = e^x \cos y$
*   $\frac{\partial u}{\partial y} = -e^x \sin y$
*   $\frac{\partial v}{\partial x} = e^x \sin y$
*   $\frac{\partial v}{\partial y} = e^x \cos y$

Check the Cauchy-Riemann Equations:
1.  $\frac{\partial u}{\partial x} = e^x \cos y$ and $\frac{\partial v}{\partial y} = e^x \cos y$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ is satisfied.
2.  $\frac{\partial u}{\partial y} = -e^x \sin y$ and $-\frac{\partial v}{\partial x} = -(e^x \sin y) = -e^x \sin y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ is satisfied.

Since the Cauchy-Riemann equations are satisfied for all $x$ and $y$, and the partial derivatives (which are $e^x \cos y$, $-e^x \sin y$, $e^x \sin y$, $e^x \cos y$) are continuous everywhere, $f(z) = e^z$ is analytic everywhere (it is an entire function).

Derivative: $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = e^x \cos y + i e^x \sin y = e^x (\cos y + i \sin y) = e^x e^{iy} = e^z$.

**Example 4: Is $f(z) = \bar{z} = x - iy$ analytic?**

Here, $u(x, y) = x$ and $v(x, y) = -y$.

Partial derivatives:
*   $\frac{\partial u}{\partial x} = 1$
*   $\frac{\partial u}{\partial y} = 0$
*   $\frac{\partial v}{\partial x} = 0$
*   $\frac{\partial v}{\partial y} = -1$

Check the Cauchy-Riemann Equations:
1.  $\frac{\partial u}{\partial x} = 1$ and $\frac{\partial v}{\partial y} = -1$. These are not equal.
2.  $\frac{\partial u}{\partial y} = 0$ and $-\frac{\partial v}{\partial x} = -0 = 0$. These are equal.

Since the first Cauchy-Riemann equation is not satisfied, $f(z) = \bar{z}$ is **not analytic** anywhere.

---

### 7. Practice Questions

**Question 1:**
Determine whether the function $f(z) = z^3$ is analytic. If it is, find its derivative.

**Question 2:**
Determine whether the function $f(z) = \text{Re}(z) = x$ is analytic. If it is, find its derivative.

**Question 3:**
Determine whether the function $f(z) = e^{\bar{z}}$ is analytic. If it is, find its derivative.

**Question 4:**
For what values of $x$ and $y$ are the Cauchy-Riemann equations satisfied for the function $f(z) = x^3 + iy^3$? Is the function analytic?

**Question 5:**
Find the values of constants $a$ and $b$ such that the function $f(z) = x^2 + axy + y^2 + i(bx^2 + cxy + dy^2)$ is analytic.

---

### 8. Answers to Practice Questions

**Answer 1:**
$f(z) = z^3 = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3$
$f(z) = x^3 + 3ix^2y - 3xy^2 - iy^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$
$u(x, y) = x^3 - 3xy^2$, $v(x, y) = 3x^2y - y^3$

Partial derivatives:
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
$\frac{\partial u}{\partial y} = -6xy$
$\frac{\partial v}{\partial x} = 6xy$
$\frac{\partial v}{\partial y} = 3x^2 - 3y^2$

Cauchy-Riemann Equations:
1.  $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$ and $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$. They are equal.
2.  $\frac{\partial u}{\partial y} = -6xy$ and $-\frac{\partial v}{\partial x} = -6xy$. They are equal.

The Cauchy-Riemann equations are satisfied for all $x, y$. The partial derivatives are continuous.
**Conclusion:** $f(z) = z^3$ is analytic everywhere (an entire function).
**Derivative:** $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = (3x^2 - 3y^2) + i(6xy) = 3(x^2 - y^2 + 2ixy) = 3(x+iy)^2 = 3z^2$.

**Answer 2:**
$f(z) = x$. So, $u(x, y) = x$, $v(x, y) = 0$.

Partial derivatives:
$\frac{\partial u}{\partial x} = 1$
$\frac{\partial u}{\partial y} = 0$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = 0$

Cauchy-Riemann Equations:
1.  $\frac{\partial u}{\partial x} = 1$ and $\frac{\partial v}{\partial y} = 0$. They are not equal.
2.  $\frac{\partial u}{\partial y} = 0$ and $-\frac{\partial v}{\partial x} = -0 = 0$. They are equal.

Since the first equation is not satisfied,
**Conclusion:** $f(z) = x$ is not analytic anywhere.

**Answer 3:**
$f(z) = e^{\bar{z}} = e^{x-iy} = e^x e^{-iy} = e^x (\cos(-y) + i \sin(-y)) = e^x (\cos y - i \sin y)$
$u(x, y) = e^x \cos y$, $v(x, y) = -e^x \sin y$.

Partial derivatives:
$\frac{\partial u}{\partial x} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$
$\frac{\partial v}{\partial x} = -e^x \sin y$
$\frac{\partial v}{\partial y} = -e^x \cos y$

Cauchy-Riemann Equations:
1.  $\frac{\partial u}{\partial x} = e^x \cos y$ and $\frac{\partial v}{\partial y} = -e^x \cos y$. For these to be equal, $e^x \cos y = -e^x \cos y$, which implies $2e^x \cos y = 0$. Since $e^x > 0$, this requires $\cos y = 0$, meaning $y = \frac{\pi}{2} + k\pi$ for integer $k$.
2.  $\frac{\partial u}{\partial y} = -e^x \sin y$ and $-\frac{\partial v}{\partial x} = -(-e^x \sin y) = e^x \sin y$. For these to be equal, $-e^x \sin y = e^x \sin y$, which implies $2e^x \sin y = 0$. This requires $\sin y = 0$, meaning $y = k\pi$ for integer $k$.

The conditions $\cos y = 0$ and $\sin y = 0$ cannot be satisfied simultaneously for any real $y$. Therefore, the Cauchy-Riemann equations are never satisfied.
**Conclusion:** $f(z) = e^{\bar{z}}$ is not analytic anywhere.

**Answer 4:**
$f(z) = x^3 + iy^3$. So, $u(x, y) = x^3$, $v(x, y) = y^3$.

Partial derivatives:
$\frac{\partial u}{\partial x} = 3x^2$
$\frac{\partial u}{\partial y} = 0$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = 3y^2$

Cauchy-Riemann Equations:
1.  $\frac{\partial u}{\partial x} = 3x^2$ and $\frac{\partial v}{\partial y} = 3y^2$. For these to be equal, $3x^2 = 3y^2$, which means $x^2 = y^2$, or $y = \pm x$.
2.  $\frac{\partial u}{\partial y} = 0$ and $-\frac{\partial v}{\partial x} = -0 = 0$. These are always equal.

The Cauchy-Riemann equations are satisfied only on the lines $y = x$ and $y = -x$.
**Conclusion:** The function $f(z) = x^3 + iy^3$ is **not analytic** because the Cauchy-Riemann equations are not satisfied in any neighborhood. They are only satisfied along specific lines.

**Answer 5:**
$f(z) = (x^2 + axy + y^2) + i(bx^2 + cxy + dy^2)$
$u(x, y) = x^2 + axy + y^2$
$v(x, y) = bx^2 + cxy + dy^2$

Partial derivatives:
$\frac{\partial u}{\partial x} = 2x + ay$
$\frac{\partial u}{\partial y} = ax + 2y$
$\frac{\partial v}{\partial x} = 2bx + cy$
$\frac{\partial v}{\partial y} = cx + dy$

Cauchy-Riemann Equations:
1.  $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 2x + ay = cx + dy$
    For this to hold for all $x, y$:
    Equating coefficients of $x$: $2 = c$
    Equating coefficients of $y$: $a = d$

2.  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies ax + 2y = -(2bx + cy)$
    $ax + 2y = -2bx - cy$
    For this to hold for all $x, y$:
    Equating coefficients of $x$: $a = -2b$
    Equating coefficients of $y$: $2 = -c$

From the first set of conditions, we got $c=2$ and $d=a$.
From the second set of conditions, we got $a=-2b$ and $c=-2$.

These two sets of conditions are contradictory for $c$.
Let's recheck the second condition's derivation:
$\frac{\partial u}{\partial y} = ax + 2y$
$-\frac{\partial v}{\partial x} = -(2bx + cy) = -2bx - cy$

So, $ax + 2y = -2bx - cy$.
Equating coefficients of $x$: $a = -2b$.
Equating coefficients of $y$: $2 = -c \implies c = -2$.

Now let's equate the results from both Cauchy-Riemann conditions:
From (1): $c=2$ and $d=a$.
From (2): $a=-2b$ and $c=-2$.

We have a contradiction: $c$ must be $2$ and $-2$ simultaneously. This means there are no values of $a, b, c, d$ that will make this function analytic for arbitrary $x, y$ if we consider all components as given.

**However, if the question implies "find conditions for analyticity", there might be a misunderstanding or a typo in the question's form.** Let's assume there was a typo and try to solve for the most common scenario.

Let's reconsider the system of equations:
1. $2x + ay = cx + dy \implies (2-c)x + (a-d)y = 0$
2. $ax + 2y = -2bx - cy \implies (a+2b)x + (2+c)y = 0$

For these equations to hold for all $x, y$, the coefficients must be zero:
From (1):
$2-c = 0 \implies c = 2$
$a-d = 0 \implies a = d$

From (2):
$a+2b = 0 \implies a = -2b$
$2+c = 0 \implies c = -2$

We have a contradiction: $c=2$ and $c=-2$. This means the function as stated cannot be analytic for any values of $a,b,c,d$.

**Let's assume the question intended to give a form where analyticity is possible.**
A common scenario for such questions is when $f(z)$ is constructed in a way that ensures analyticity. For example, if $f(z)$ were $z^2 = (x^2-y^2) + i(2xy)$, then $u=x^2-y^2$ and $v=2xy$.

If the question is exactly as stated, then the answer is:
**Conclusion:** There are no values of $a$ and $b$ (and $c, d$ implicitly) that can make the function $f(z) = x^2 + axy + y^2 + i(bx^2 + cxy + dy^2)$ analytic for all $x, y$, due to contradictory conditions on $c$.

---

### 9. Key Points to Remember

*   A complex function $f(z) = u(x, y) + iv(x, y)$ is **analytic** at a point if it is differentiable in a neighborhood around that point.
*   The **Cauchy-Riemann equations** are a necessary condition for differentiability and analyticity:
    *   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
    *   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$
*   For a function to be analytic, the Cauchy-Riemann equations must be satisfied, and the first partial derivatives of $u$ and $v$ must be **continuous** in the domain.
*   If $f(z)$ is analytic, then its real part $u$ and imaginary part $v$ are **harmonic functions**, meaning they satisfy Laplace's equation: $\nabla^2 u = 0$ and $\nabla^2 v = 0$.
*   The derivative of an analytic function can be computed as $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$ or $f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$.
*   Functions like $z^n$, $e^z$, $\sin z$, $\cos z$, $\log z$ (in their domains of analyticity) are analytic. Functions involving $\bar{z}$ or $|z|$ are generally not analytic (except at specific points).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 10. References and Further Reading

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.** (Chapter 14: Complex Analysis - specifically sections on analytic functions and Cauchy-Riemann equations).
*   **Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed., Jones & Bartlett, 2015.** (Chapter 2: Analytic Functions - sections on differentiability and the Cauchy-Riemann equations).
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.** (Chapter 30: Complex Numbers and Functions - sections on analytic functions and Cauchy-Riemann equations).
*   **Grewal, B. S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.** (Chapter 20: Complex Numbers and Functions - sections on analytic functions and Cauchy-Riemann equations).

---