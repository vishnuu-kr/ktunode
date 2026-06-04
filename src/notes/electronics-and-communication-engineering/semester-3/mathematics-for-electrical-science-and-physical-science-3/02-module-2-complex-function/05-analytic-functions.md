---
title: "Analytic functions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe25d"
status: "completed"
scrapedAt: "2026-05-23T17:47:03.012Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Analytic Functions

---

### **1. Introduction to Complex Functions**

A complex function is a function whose domain and/or range are subsets of the complex numbers. We typically deal with functions of the form $w = f(z)$, where $z = x + iy$ is a complex variable and $w = u + iv$ is its corresponding complex value. Here, $u$ and $v$ are real-valued functions of $x$ and $y$.

**Key Concept:** A complex function can be thought of as mapping a point in the complex plane (z-plane) to another point in the complex plane (w-plane).

**Example:**
Let $f(z) = z^2$. If $z = 1 + 2i$, then
$w = f(1+2i) = (1+2i)^2 = 1^2 + 2(1)(2i) + (2i)^2 = 1 + 4i - 4 = -3 + 4i$.
So, $u(x,y) = x^2 - y^2$ and $v(x,y) = 2xy$.

---

### **2. Analyticity of Complex Functions**

This topic is crucial for understanding the behavior and applications of complex functions in various fields, including electrical science and physical science. Analyticity is a concept directly related to the differentiability of complex functions.

**Learning Outcome:** Understand the analyticity of complex functions and apply it in conformal mapping. (CO2: K3)

**Key Concepts & Definitions:**

*   **Limit of a Complex Function:**
    Let $f(z)$ be defined in a neighborhood of $z_0$, except possibly at $z_0$ itself. We say that the limit of $f(z)$ as $z$ approaches $z_0$ is $L$ if for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < |z - z_0| < \delta$, then $|f(z) - L| < \epsilon$.
    Notation: $\lim_{z \to z_0} f(z) = L$.

*   **Continuity of a Complex Function:**
    A complex function $f(z)$ is continuous at a point $z_0$ if:
    1.  $f(z_0)$ is defined.
    2.  $\lim_{z \to z_0} f(z)$ exists.
    3.  $\lim_{z \to z_0} f(z) = f(z_0)$.

*   **Derivative of a Complex Function:**
    A complex function $f(z)$ is differentiable at a point $z_0$ if the limit
    $f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$
    exists. The limit must be independent of the path along which $\Delta z \to 0$.

*   **Analyticity (Holomorphic) of a Complex Function:**
    A complex function $f(z)$ is **analytic** at a point $z_0$ if it is differentiable at $z_0$ and in some neighborhood (an open disk) around $z_0$.
    A function is analytic in a region if it is analytic at every point in that region.

**Important Point to Remember:** Analyticity is a stronger condition than differentiability at a single point. A function can be differentiable at a point but not analytic there if it's not differentiable in its neighborhood.

**Reference:** Kreyszig's "Advanced Engineering Mathematics" (10th ed.) discusses these definitions in Chapter 13, Section 13.2. Zill and Shanahan's "Complex Analysis" (3rd ed.) also covers these foundational concepts thoroughly.

---

### **3. Cauchy-Riemann Equations**

The Cauchy-Riemann equations provide a necessary condition for a complex function to be analytic. They relate the partial derivatives of the real and imaginary parts of the function.

**Key Concept:** For a function $f(z) = u(x, y) + iv(x, y)$ to be differentiable at $z = x + iy$, the following conditions must hold:

$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$

These are the **Cauchy-Riemann Equations**.

**Theorem:** If $f(z) = u(x, y) + iv(x, y)$ is defined in a region, and the partial derivatives $\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial y}$, $\frac{\partial v}{\partial x}$, and $\frac{\partial v}{\partial y}$ are continuous in that region, then $f(z)$ is analytic in the region if and only if the Cauchy-Riemann equations are satisfied throughout the region.

**If $f(z)$ is analytic, its derivative is given by:**

$$
f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}
$$

or equivalently,

$$
f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}
$$

**Example:**
Consider $f(z) = z^2$.
Here, $z = x + iy$, so $f(z) = (x+iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 - y^2 + i(2xy)$.
So, $u(x,y) = x^2 - y^2$ and $v(x,y) = 2xy$.

Let's check the Cauchy-Riemann equations:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial v}{\partial y} = 2x$

We see that $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} = 2x$ and $\frac{\partial u}{\partial y} = -2y$, which is equal to $-\frac{\partial v}{\partial x} = -(2y) = -2y$.
The Cauchy-Riemann equations are satisfied for all $x, y$. Since the partial derivatives are continuous, $f(z) = z^2$ is analytic everywhere.

Its derivative is $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = 2x + i(2y) = 2(x+iy) = 2z$.

**Reference:** All reference books (Kreyszig, Zill & Shanahan, Ramana, Grewal) have detailed sections on the Cauchy-Riemann equations. Ramana's "Higher Engineering Mathematics" (39th ed.) provides numerous solved examples.

---

### **4. Harmonic Functions**

Harmonic functions are real-valued functions of two variables that satisfy Laplace's equation. They are closely related to analytic functions.

**Key Concept:** A real-valued function $u(x, y)$ is called **harmonic** if its second partial derivatives are continuous and it satisfies Laplace's equation:

$$
\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0
$$

The **conjugate harmonic function** $v(x, y)$ of a harmonic function $u(x, y)$ is a function such that $f(z) = u(x, y) + iv(x, y)$ is an analytic function.

**Theorem:** If $f(z) = u(x, y) + iv(x, y)$ is analytic in a region, then both $u(x, y)$ and $v(x, y)$ are harmonic functions in that region.

**Theorem:** If $u(x, y)$ is harmonic in a region, then it has a conjugate harmonic function $v(x, y)$ in that region.

**How to find the conjugate harmonic function:**
Given a harmonic function $u(x, y)$, we can find its conjugate $v(x, y)$ by using the Cauchy-Riemann equations:
1.  $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$
2.  $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$

Integrate the first equation with respect to $y$, treating $x$ as a constant:
$v(x, y) = \int \frac{\partial u}{\partial x} dy + g(x)$, where $g(x)$ is an arbitrary function of $x$.

Differentiate this expression for $v(x, y)$ with respect to $x$:
$\frac{\partial v}{\partial x} = \frac{\partial}{\partial x} \left( \int \frac{\partial u}{\partial x} dy \right) + g'(x)$.

Equate this to $-\frac{\partial u}{\partial y}$ from the second Cauchy-Riemann equation, and solve for $g'(x)$. Then integrate $g'(x)$ to find $g(x)$.

**Example:**
Show that $u(x, y) = x^3 - 3xy^2$ is harmonic and find its conjugate harmonic function.

1.  **Check for Harmonic:**
    $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
    $\frac{\partial^2 u}{\partial x^2} = 6x$
    $\frac{\partial u}{\partial y} = -6xy$
    $\frac{\partial^2 u}{\partial y^2} = -6x$

    $\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 6x + (-6x) = 0$.
    Thus, $u(x, y)$ is harmonic.

2.  **Find the Conjugate Harmonic Function $v(x, y)$:**
    We have $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$ and $\frac{\partial u}{\partial y} = -6xy$.
    Using Cauchy-Riemann equations for $v$:
    $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 3x^2 - 3y^2$
    $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-6xy) = 6xy$

    Integrate $\frac{\partial v}{\partial y}$ with respect to $y$:
    $v(x, y) = \int (3x^2 - 3y^2) dy = 3x^2y - y^3 + g(x)$.

    Differentiate this $v(x, y)$ with respect to $x$:
    $\frac{\partial v}{\partial x} = 6xy + g'(x)$.

    Equate this with $6xy$:
    $6xy + g'(x) = 6xy$
    $g'(x) = 0$.
    Integrating, $g(x) = C$, where $C$ is a constant.

    So, the conjugate harmonic function is $v(x, y) = 3x^2y - y^3 + C$.
    The analytic function is $f(z) = u(x, y) + iv(x, y) = (x^3 - 3xy^2) + i(3x^2y - y^3) + iC$.
    Let's verify this. We can observe that $f(z) = z^3$.
    If $z = x+iy$, then $z^3 = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = x^3 + 3ix^2y - 3xy^2 - iy^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$.
    This matches our $u$ and $v$.

**Reference:** Kreyszig (Sec. 13.3), Zill & Shanahan (Sec. 2.3), Ramana (Sec. 29.2), Grewal (Sec. 34.2).

---

### **5. Conformal Mapping**

Conformal mappings are transformations that preserve angles between curves. This property is a direct consequence of a function being analytic and having a non-zero derivative.

**Learning Outcome:** Understand the analyticity of complex functions and apply it in conformal mapping. (CO2: K3)

**Key Concepts & Definitions:**

*   **Transformation (Mapping):** A rule that assigns to each point $z$ in a domain $D$ a unique point $w$ in a domain $D'$. This is represented by $w = f(z)$.

*   **Conformal Mapping:** A transformation $w = f(z)$ is called **conformal** at a point $z_0$ if it preserves angles between intersecting curves passing through $z_0$, in both magnitude and orientation.
    A mapping is conformal in a region if it is conformal at every point in the region.

**Theorem:** If $f(z)$ is analytic in a region, and $f'(z_0) \neq 0$ at $z_0$ in the region, then the mapping $w = f(z)$ is conformal at $z_0$.

**Important Points:**

*   If $f(z)$ is analytic in a region, the mapping $w=f(z)$ is conformal at every point $z_0$ where $f'(z_0) \neq 0$.
*   At points where $f'(z_0) = 0$, the mapping is not conformal. Angles may be magnified or distorted. These points are called **critical points**.

**Geometric Interpretation of Analyticity:**
The derivative $f'(z_0)$ represents a rotation by the argument of $f'(z_0)$ and a local magnification by the magnitude of $f'(z_0)$.
If $f'(z_0) \neq 0$, these transformations preserve angles.

**Example:**
The transformation $w = z^2$.
$f(z) = z^2$, so $f'(z) = 2z$.
$f'(z) = 0$ when $z = 0$.
Therefore, the mapping $w = z^2$ is conformal everywhere except at $z=0$. At $z=0$, the angle is doubled.

Consider two curves $C_1$ and $C_2$ intersecting at $z_0$ with an angle $\alpha$. Their images $C_1'$ and $C_2'$ under $w = f(z)$ will intersect at $w_0 = f(z_0)$ with the same angle $\alpha$ (and same orientation) if $f'(z_0) \neq 0$.

**Applications in Physical Sciences and Engineering:**
Conformal mappings are extremely useful for solving boundary value problems in potential theory (e.g., electrostatics, fluid dynamics, heat conduction) by transforming complex geometries into simpler ones where solutions are known.

**Reference:** Kreyszig (Sec. 14.2), Zill & Shanahan (Sec. 7.1), Ramana (Sec. 35.1), Grewal (Sec. 36.1).

---

### **6. Practice Questions and Exercises**

1.  **Cauchy-Riemann Equations:**
    Determine whether the function $f(z) = e^x (\cos y + i \sin y)$ is analytic. If so, find its derivative.
    *(Hint: $f(z) = e^z$. Recall the definition of $e^z$)*

2.  **Harmonic Functions:**
    Show that $u(x, y) = x^2 - y^2 + 2x$ is harmonic. Find its conjugate harmonic function $v(x, y)$ and form the corresponding analytic function $f(z)$.

3.  **Conformal Mapping:**
    For the transformation $w = e^z$:
    a) Show that the mapping is conformal everywhere.
    b) What is the angle of rotation at $z = \pi i/4$?
    c) What is the local magnification at $z = \pi i/4$?

---

### **7. Answers to Practice Questions**

1.  **Cauchy-Riemann Equations:**
    $f(z) = e^x (\cos y + i \sin y)$.
    $u(x, y) = e^x \cos y$
    $v(x, y) = e^x \sin y$

    $\frac{\partial u}{\partial x} = e^x \cos y$
    $\frac{\partial u}{\partial y} = -e^x \sin y$
    $\frac{\partial v}{\partial x} = e^x \sin y$
    $\frac{\partial v}{\partial y} = e^x \cos y$

    Check Cauchy-Riemann equations:
    $\frac{\partial u}{\partial x} = e^x \cos y = \frac{\partial v}{\partial y}$ (Holds)
    $\frac{\partial u}{\partial y} = -e^x \sin y = -\frac{\partial v}{\partial x} = -(e^x \sin y)$ (Holds)

    Since the Cauchy-Riemann equations are satisfied and the partial derivatives are continuous, $f(z)$ is analytic everywhere.
    $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = e^x \cos y + i (e^x \sin y) = e^x (\cos y + i \sin y) = e^z$.

2.  **Harmonic Functions:**
    $u(x, y) = x^2 - y^2 + 2x$.
    $\frac{\partial u}{\partial x} = 2x + 2$
    $\frac{\partial^2 u}{\partial x^2} = 2$
    $\frac{\partial u}{\partial y} = -2y$
    $\frac{\partial^2 u}{\partial y^2} = -2$

    $\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$.
    Thus, $u(x, y)$ is harmonic.

    Find $v(x, y)$:
    $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x + 2$
    $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y$

    Integrate $\frac{\partial v}{\partial y}$ with respect to $y$:
    $v(x, y) = \int (2x + 2) dy = (2x + 2)y + g(x) = 2xy + 2y + g(x)$.

    Differentiate with respect to $x$:
    $\frac{\partial v}{\partial x} = 2y + g'(x)$.

    Equate to $2y$:
    $2y + g'(x) = 2y \implies g'(x) = 0 \implies g(x) = C$ (constant).

    So, $v(x, y) = 2xy + 2y + C$.
    The analytic function is $f(z) = u(x, y) + iv(x, y) = (x^2 - y^2 + 2x) + i(2xy + 2y + C)$.

    We can verify this is $f(z) = z^2 + 2z$.
    $z^2 + 2z = (x+iy)^2 + 2(x+iy) = (x^2 - y^2 + 2ixy) + (2x + 2iy) = (x^2 - y^2 + 2x) + i(2xy + 2y)$.
    This matches our $u$ and $v$ (ignoring the constant $C$ for now, which can be incorporated into $f(z)$).

3.  **Conformal Mapping:**
    $w = e^z = e^{x+iy} = e^x (\cos y + i \sin y)$.
    $f(z) = e^z$.
    $f'(z) = e^z$.

    a) The derivative $f'(z) = e^z$ is never zero for any complex number $z$. Therefore, the mapping $w = e^z$ is conformal everywhere in the complex plane.

    b) The angle of rotation at $z_0$ is given by the argument of $f'(z_0)$.
    At $z_0 = \pi i/4$, $f'(z_0) = e^{\pi i/4} = \cos(\pi/4) + i \sin(\pi/4) = \frac{1}{\sqrt{2}} + i \frac{1}{\sqrt{2}}$.
    The argument of $f'(z_0)$ is $\arg(e^{\pi i/4}) = \pi/4$.
    So, the angle of rotation at $z = \pi i/4$ is $\pi/4$ (or 45 degrees).

    c) The local magnification at $z_0$ is given by the magnitude of $f'(z_0)$.
    At $z_0 = \pi i/4$, $|f'(z_0)| = |e^{\pi i/4}| = |\cos(\pi/4) + i \sin(\pi/4)| = \sqrt{(\frac{1}{\sqrt{2}})^2 + (\frac{1}{\sqrt{2}})^2} = \sqrt{\frac{1}{2} + \frac{1}{2}} = \sqrt{1} = 1$.
    The local magnification at $z = \pi i/4$ is 1.

---

### **8. Important Points to Remember**

*   A complex function $f(z) = u(x, y) + iv(x, y)$ is analytic at $z_0$ if it is differentiable in an open disk containing $z_0$.
*   The Cauchy-Riemann equations ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$) are necessary conditions for analyticity. If the partial derivatives are continuous, they are also sufficient.
*   If $f(z)$ is analytic, both its real part $u$ and imaginary part $v$ are harmonic functions, satisfying Laplace's equation $\nabla^2 u = 0$ and $\nabla^2 v = 0$.
*   A mapping $w = f(z)$ is conformal at $z_0$ if $f(z)$ is analytic at $z_0$ and $f'(z_0) \neq 0$.
*   Conformal mappings preserve angles locally. The rotation is by $\arg(f'(z_0))$ and magnification by $|f'(z_0)|$.

---

### **9. Alignment with Course Outcomes**

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping. (Knowledge Level: K3)**
    This entire topic directly addresses CO2. The definitions of analyticity, the role of Cauchy-Riemann equations, and the conditions for conformal mapping are covered. The examples demonstrate how analyticity enables conformal mappings, which are key to many physical science and engineering problems.

---

This study material provides a foundational understanding of analytic functions, their properties, and their importance in various scientific disciplines, particularly as it relates to conformal mapping as outlined in CO2. The provided examples and practice questions aim to reinforce these concepts. Further exploration of specific analytic functions (like $e^z$, $\log z$, trigonometric functions) and their mapping properties can be found in the referenced textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
