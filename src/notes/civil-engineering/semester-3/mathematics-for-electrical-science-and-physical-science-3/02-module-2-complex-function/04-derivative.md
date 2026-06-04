---
title: "Derivative"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810690"
status: "completed"
scrapedAt: "2026-05-20T18:41:18.242Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Derivative

This module introduces the concept of the derivative of a complex function, building upon your understanding of real-valued calculus. This is crucial for analyzing phenomena in electrical circuits (like impedance and AC circuit analysis) and physical systems (like fluid dynamics and quantum mechanics) that can be modeled using complex numbers.

---

### 1. Learning Outcomes Covered:

*   **Define the derivative of a complex function:** Understanding the fundamental definition and its relationship to limits.
*   **State and apply the Cauchy-Riemann equations:** Recognizing the necessary and sufficient conditions for a complex function to be differentiable.
*   **Determine if a complex function is differentiable:** Using the Cauchy-Riemann equations to check for differentiability.
*   **Calculate the derivative of a complex function:** Applying differentiation rules to various complex functions.
*   **Understand the geometric interpretation of the derivative of a complex function:** Visualizing the stretching and rotation associated with a complex transformation.

---

### 2. Key Concepts and Definitions:

#### 2.1. Complex Function:

A complex function is a function whose domain and/or range are sets of complex numbers. We typically denote a complex function as $f(z)$, where $z = x + iy$ is a complex variable, and $f(z)$ can be expressed in terms of its real and imaginary parts:

$f(z) = u(x, y) + iv(x, y)$

where $u(x, y)$ is the real part and $v(x, y)$ is the imaginary part of $f(z)$.

#### 2.2. Limit of a Complex Function:

The limit of a complex function $f(z)$ as $z$ approaches $z_0$ is $L$ if, for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < |z - z_0| < \delta$, then $|f(z) - L| < \epsilon$.

**Important Note:** For the limit to exist, the value of $f(z)$ must approach the same value $L$ regardless of the path along which $z$ approaches $z_0$.

#### 2.3. Derivative of a Complex Function:

The derivative of a complex function $f(z)$ at a point $z_0$, denoted by $f'(z_0)$ or $\frac{df}{dz}(z_0)$, is defined by the limit:

$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$

provided this limit exists.

**Similarities to Real Calculus:**
*   The definition is analogous to the derivative of a real function.
*   The limit must exist.

**Key Difference from Real Calculus:**
*   The limit must exist regardless of the direction from which $\Delta z$ approaches 0. This means the limit must be the same along the real axis ($\Delta z = \Delta x$) and the imaginary axis ($\Delta z = i \Delta y$).

#### 2.4. Differentiability:

A complex function $f(z)$ is **differentiable** at a point $z_0$ if its derivative $f'(z_0)$ exists. If $f(z)$ is differentiable at every point in an open region $R$, then $f(z)$ is said to be **analytic** (or **holomorphic**) in $R$.

#### 2.5. Cauchy-Riemann Equations:

The Cauchy-Riemann equations are a fundamental tool for determining if a complex function is differentiable. Let $f(z) = u(x, y) + iv(x, y)$. The Cauchy-Riemann equations are:

$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
$\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

**Theorem:** A complex function $f(z) = u(x, y) + iv(x, y)$ is differentiable at a point $z_0 = x_0 + iy_0$ if and only if the partial derivatives of $u$ and $v$ exist in an open neighborhood of $z_0$, are continuous at $z_0$, and satisfy the Cauchy-Riemann equations at $z_0$.

**If $f(z)$ is differentiable at $z_0$, then its derivative can be calculated as:**

$f'(z_0) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$
**OR**
$f'(z_0) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$

---

### 3. Examples:

#### Example 1: Differentiating a Simple Polynomial Function

Let $f(z) = z^2$.

We can write $f(z)$ in terms of $x$ and $y$:
$z = x + iy$
$z^2 = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$

So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

Let's find the partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial v}{\partial y} = 2x$

Now, check the Cauchy-Riemann equations:
1. $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 2x$. So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ is satisfied.
2. $\frac{\partial u}{\partial y} = -2y$ and $-\frac{\partial v}{\partial x} = -(2y) = -2y$. So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ is satisfied.

Since the partial derivatives exist, are continuous everywhere, and satisfy the Cauchy-Riemann equations for all $z$, $f(z) = z^2$ is differentiable everywhere (analytic everywhere).

Now, let's calculate the derivative using the formula:
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = 2x + i(2y) = 2(x + iy) = 2z$.

This matches the result we would get from real calculus rules ($ \frac{d}{dz}(z^2) = 2z $).

#### Example 2: Checking Differentiability using Cauchy-Riemann Equations

Let $f(z) = |z|^2 = x^2 + y^2$.

Here, $u(x, y) = x^2 + y^2$ and $v(x, y) = 0$.

Partial derivatives:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = 2y$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = 0$

Cauchy-Riemann equations:
1. $\frac{\partial u}{\partial x} = 2x$ and $\frac{\partial v}{\partial y} = 0$. For these to be equal, $2x = 0$, which means $x = 0$.
2. $\frac{\partial u}{\partial y} = 2y$ and $-\frac{\partial v}{\partial x} = -0 = 0$. For these to be equal, $2y = 0$, which means $y = 0$.

The Cauchy-Riemann equations are only satisfied at the point $z = 0 + i0 = 0$. Therefore, $f(z) = |z|^2$ is differentiable **only at $z = 0$**. It is not differentiable anywhere else.

At $z=0$:
$f'(0) = \frac{\partial u}{\partial x}(0,0) + i \frac{\partial v}{\partial x}(0,0) = 2(0) + i(0) = 0$.

#### Example 3: A Function That is Not Differentiable Anywhere

Let $f(z) = \bar{z} = x - iy$.

Here, $u(x, y) = x$ and $v(x, y) = -y$.

Partial derivatives:
$\frac{\partial u}{\partial x} = 1$
$\frac{\partial u}{\partial y} = 0$
$\frac{\partial v}{\partial x} = 0$
$\frac{\partial v}{\partial y} = -1$

Cauchy-Riemann equations:
1. $\frac{\partial u}{\partial x} = 1$ and $\frac{\partial v}{\partial y} = -1$. Since $1 \neq -1$, the first Cauchy-Riemann equation is never satisfied.
2. $\frac{\partial u}{\partial y} = 0$ and $-\frac{\partial v}{\partial x} = -0 = 0$. The second Cauchy-Riemann equation is satisfied.

Since the first Cauchy-Riemann equation is never satisfied, $f(z) = \bar{z}$ is **not differentiable anywhere**.

#### Example 4: Differentiating Complex Exponential Function

Let $f(z) = e^z$.

We know that $e^z = e^{x+iy} = e^x e^{iy} = e^x (\cos y + i \sin y)$.
So, $u(x, y) = e^x \cos y$ and $v(x, y) = e^x \sin y$.

Partial derivatives:
$\frac{\partial u}{\partial x} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$
$\frac{\partial v}{\partial x} = e^x \sin y$
$\frac{\partial v}{\partial y} = e^x \cos y$

Cauchy-Riemann equations:
1. $\frac{\partial u}{\partial x} = e^x \cos y$ and $\frac{\partial v}{\partial y} = e^x \cos y$. These are equal.
2. $\frac{\partial u}{\partial y} = -e^x \sin y$ and $-\frac{\partial v}{\partial x} = -(e^x \sin y) = -e^x \sin y$. These are equal.

The Cauchy-Riemann equations are satisfied for all $x$ and $y$. Thus, $f(z) = e^z$ is differentiable everywhere.

The derivative is:
$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = e^x \cos y + i (e^x \sin y) = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.

This confirms that $\frac{d}{dz}(e^z) = e^z$, just like in real calculus.

#### 4. Rules of Differentiation (Analogous to Real Calculus):

If $f(z)$ and $g(z)$ are differentiable at $z$, then:
*   **Sum Rule:** $(f(z) + g(z))' = f'(z) + g'(z)$
*   **Difference Rule:** $(f(z) - g(z))' = f'(z) - g'(z)$
*   **Constant Multiple Rule:** $(c f(z))' = c f'(z)$, where $c$ is a complex constant.
*   **Product Rule:** $(f(z)g(z))' = f'(z)g(z) + f(z)g'(z)$
*   **Quotient Rule:** $\left(\frac{f(z)}{g(z)}\right)' = \frac{f'(z)g(z) - f(z)g'(z)}{(g(z))^2}$, provided $g(z) \neq 0$.
*   **Chain Rule:** If $w = f(z)$ and $\zeta = g(w)$, then $\frac{d\zeta}{dz} = \frac{d\zeta}{dw} \frac{dw}{dz}$.

These rules are applied in the same way as in real calculus, provided the functions involved are differentiable.

#### Common Derivatives:

*   $\frac{d}{dz}(z^n) = nz^{n-1}$ for any integer $n$.
*   $\frac{d}{dz}(e^z) = e^z$
*   $\frac{d}{dz}(\sin z) = \cos z$
*   $\frac{d}{dz}(\cos z) = -\sin z$
*   $\frac{d}{dz}(\sinh z) = \cosh z$
*   $\frac{d}{dz}(\cosh z) = \sinh z$
*   $\frac{d}{dz}(\log z) = \frac{1}{z}$ (for $z \neq 0$)
*   $\frac{d}{dz}(c) = 0$ (where $c$ is a constant)

---

### 5. Geometric Interpretation of the Derivative:

The derivative $f'(z_0)$ of a complex function $f(z)$ at $z_0$ provides information about how the function transforms points in the complex plane near $z_0$.

If $f'(z_0)$ exists and is non-zero, the transformation $w = f(z)$ near $z_0$ can be approximated by a linear transformation:

$f(z) \approx f(z_0) + f'(z_0)(z - z_0)$

Let $z - z_0 = r e^{i\theta}$ (a displacement from $z_0$ with magnitude $r$ and argument $\theta$).
Let $f'(z_0) = R e^{i\phi}$ (where $R = |f'(z_0)|$ and $\phi = \arg(f'(z_0))$).

Then, the displacement $f(z) - f(z_0)$ is approximately:
$f(z) - f(z_0) \approx (R e^{i\phi}) (r e^{i\theta}) = (Rr) e^{i(\theta + \phi)}$

This shows that near $z_0$:
1.  **Magnification (Scaling):** The displacement is scaled by a factor of $R = |f'(z_0)|$. Small regions around $z_0$ are magnified by this factor.
2.  **Rotation:** The displacement is rotated by an angle of $\phi = \arg(f'(z_0))$.

**Special Cases:**
*   If $|f'(z_0)| = 1$, the transformation is locally conformal (preserves angles) and is a pure rotation.
*   If $\arg(f'(z_0)) = 0$, the transformation is locally a pure scaling (magnification without rotation).

**Conformality:** A function $f(z)$ is **conformal** at a point $z_0$ if it preserves the angle between any two smooth curves passing through $z_0$, both in magnitude and orientation. A function is conformal at $z_0$ if and only if it is analytic at $z_0$ and $f'(z_0) \neq 0$.

---

### 6. Important Points to Remember:

*   **Differentiability implies continuity:** If a complex function is differentiable at a point, it must be continuous at that point. However, the converse is not always true (e.g., $|z|^2$ is continuous at $z=0$ but only differentiable there).
*   **Cauchy-Riemann equations are NECESSARY for differentiability.** If they are not satisfied, the function is not differentiable.
*   **Cauchy-Riemann equations are SUFFICIENT for differentiability ONLY IF the partial derivatives are also continuous at the point.** (This is usually assumed in introductory contexts, or the definition of differentiability itself is used via limits).
*   **Analyticity:** A function is analytic in a region if it is differentiable at every point in that region. Analytic functions are the "well-behaved" functions in complex analysis and are fundamental in many applications.
*   **Geometric meaning of the derivative:** Think of it as a local scaling and rotation. The magnitude tells you how much distances are stretched, and the argument tells you by how much angles are rotated.
*   **Cauchy-Riemann equations can be written concisely:**
    $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$
    Or in shorthand: $u_x = v_y$ and $u_y = -v_x$.

---

### 7. Practice Questions:

1.  **Check Differentiability:** Determine if the function $f(z) = z \text{Re}(z)$ is differentiable. If so, find its derivative.
    *   Let $z = x+iy$. Then $\text{Re}(z) = x$.
    *   $f(z) = (x+iy)x = x^2 + ixy$.
    *   $u(x, y) = x^2$, $v(x, y) = xy$.
    *   $\frac{\partial u}{\partial x} = 2x$, $\frac{\partial u}{\partial y} = 0$
    *   $\frac{\partial v}{\partial x} = y$, $\frac{\partial v}{\partial y} = x$
    *   For Cauchy-Riemann:
        *   $u_x = v_y \implies 2x = x \implies x = 0$.
        *   $u_y = -v_x \implies 0 = -y \implies y = 0$.
    *   The Cauchy-Riemann equations are only satisfied at $z = 0$. Therefore, $f(z)$ is only differentiable at $z=0$.
    *   $f'(0) = u_x(0,0) + i v_x(0,0) = 2(0) + i(0) = 0$.
    *   **Answer:** $f(z)$ is differentiable only at $z=0$. $f'(0) = 0$.

2.  **Find the derivative:** Find the derivative of $f(z) = \frac{1}{z}$ for $z \neq 0$.
    *   Let $z = x+iy$.
    *   $f(z) = \frac{1}{x+iy} = \frac{x-iy}{(x+iy)(x-iy)} = \frac{x-iy}{x^2+y^2} = \frac{x}{x^2+y^2} + i \frac{-y}{x^2+y^2}$.
    *   $u(x, y) = \frac{x}{x^2+y^2}$, $v(x, y) = \frac{-y}{x^2+y^2}$.
    *   Calculate partial derivatives (using quotient rule):
        *   $\frac{\partial u}{\partial x} = \frac{(x^2+y^2)(1) - x(2x)}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$
        *   $\frac{\partial u}{\partial y} = \frac{(x^2+y^2)(0) - x(2y)}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$
        *   $\frac{\partial v}{\partial x} = \frac{(x^2+y^2)(0) - (-y)(2x)}{(x^2+y^2)^2} = \frac{2xy}{(x^2+y^2)^2}$
        *   $\frac{\partial v}{\partial y} = \frac{(x^2+y^2)(-1) - (-y)(2y)}{(x^2+y^2)^2} = \frac{-x^2-y^2+2y^2}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$
    *   Check Cauchy-Riemann:
        *   $u_x = \frac{y^2-x^2}{(x^2+y^2)^2}$ and $v_y = \frac{y^2-x^2}{(x^2+y^2)^2}$. (Satisfied)
        *   $u_y = \frac{-2xy}{(x^2+y^2)^2}$ and $-v_x = -\frac{2xy}{(x^2+y^2)^2}$. (Satisfied)
    *   The function is differentiable for all $z \neq 0$.
    *   $f'(z) = u_x + i v_x = \frac{y^2-x^2}{(x^2+y^2)^2} + i \frac{2xy}{(x^2+y^2)^2}$
    *   We can recognize this as: $\frac{(y^2-x^2) + i(2xy)}{(x^2+y^2)^2} = \frac{-(x^2-y^2-2ixy)}{(x^2+y^2)^2} = \frac{-(x+iy)^2}{(x^2+y^2)^2} = \frac{-z^2}{|z|^4}$. This is incorrect.
    *   Let's use the formula $f'(z) = u_x + i v_x$.
    *   $f'(z) = \frac{y^2-x^2}{(x^2+y^2)^2} + i \frac{2xy}{(x^2+y^2)^2} = \frac{(y^2-x^2) + i(2xy)}{(x^2+y^2)^2}$.
    *   This doesn't immediately look like $-\frac{1}{z^2}$. Let's try to rewrite the numerator:
        *   Numerator: $(y^2-x^2) + i(2xy)$.
        *   We know $z^2 = (x+iy)^2 = x^2 - y^2 + i(2xy)$.
        *   So, the numerator is $-(x^2-y^2) + i(2xy) = -( (x^2-y^2) - i(2xy) )$. This is not quite right.
    *   Let's rethink the numerator: $(y^2-x^2) + i(2xy)$.
        Consider $-z^2 = -(x^2 - y^2 + 2ixy) = -x^2 + y^2 - 2ixy$.
        Let's try $f'(z) = \frac{-1}{z^2} = \frac{-1}{(x+iy)^2} = \frac{-1}{x^2-y^2+2ixy} = \frac{-(x^2-y^2-2ixy)}{(x^2-y^2)^2 + (2xy)^2} = \frac{-(x^2-y^2) + i(2xy)}{x^4+y^4+2x^2y^2} = \frac{y^2-x^2 + i(2xy)}{(x^2+y^2)^2}$.
    *   This matches our calculated $f'(z)$.
    *   **Answer:** $f'(z) = -\frac{1}{z^2}$.

3.  **Analyticity:** Is the function $f(z) = e^x (\cos y + i \sin y)$ analytic? If so, find its derivative.
    *   This is $f(z) = e^x e^{iy} = e^{x+iy} = e^z$.
    *   We already showed in Example 4 that $e^z$ is analytic everywhere.
    *   **Answer:** Yes, $f(z) = e^z$ is analytic everywhere. $f'(z) = e^z$.

4.  **Geometric Interpretation:** For $f(z) = z^2$ at $z_0 = 1+i$, what is the local scaling factor and rotation angle?
    *   $f'(z) = 2z$.
    *   At $z_0 = 1+i$, $f'(1+i) = 2(1+i) = 2+2i$.
    *   Magnitude: $|f'(1+i)| = |2+2i| = \sqrt{2^2 + 2^2} = \sqrt{8} = 2\sqrt{2}$.
    *   Argument: $\arg(f'(1+i)) = \arctan\left(\frac{2}{2}\right) = \arctan(1) = \frac{\pi}{4}$ radians (or 45 degrees).
    *   **Answer:** The local scaling factor is $2\sqrt{2}$, and the local rotation angle is $\frac{\pi}{4}$ radians (45 degrees).

---
This concludes the notes for the derivative of complex functions. Remember to practice these concepts with various examples to solidify your understanding.
