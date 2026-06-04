---
title: "Harmonic functions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a69"
status: "completed"
scrapedAt: "2026-05-23T16:14:35.044Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 2: Complex Functions

### Topic: Harmonic Functions

**Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Define and identify harmonic functions.
*   Understand the relationship between harmonic functions and analytic functions through the Cauchy-Riemann equations.
*   Find the harmonic conjugate of a given harmonic function.
*   Apply the concept of harmonic functions in solving physical problems (e.g., steady-state heat conduction, electrostatics).
*   Recognize the significance of harmonic functions in the context of conformal mappings.

---

### 1. Introduction to Harmonic Functions

Harmonic functions play a crucial role in various fields of physics and engineering, particularly in areas governed by Laplace's equation. They are intimately connected with analytic complex functions.

**Key Concept:** A real-valued function $u(x, y)$ of two real variables $x$ and $y$ is called **harmonic** in a region if its second partial derivatives are continuous in that region and satisfy Laplace's equation:

$$ \nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 $$

The operator $\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2}$ is known as the **Laplacian operator**.

**Definition:** A function $u(x, y)$ is harmonic if it is twice continuously differentiable and satisfies Laplace's equation.

**Reference:**
*   **Kreyszig, Advanced Engineering Mathematics:** Chapter 14 introduces partial differential equations, including Laplace's equation.
*   **Ramana, Higher Engineering Mathematics:** Chapter 34 discusses harmonic functions and their relation to analytic functions.

---

### 2. Relationship Between Analytic Functions and Harmonic Functions

The connection between analytic functions and harmonic functions is a fundamental aspect of complex analysis.

**Key Theorem:** If a complex function $f(z) = u(x, y) + iv(x, y)$ is analytic in a region, then both its real part $u(x, y)$ and its imaginary part $v(x, y)$ are harmonic functions in that region.

**Proof Outline (using Cauchy-Riemann Equations):**

1.  **Recall Cauchy-Riemann Equations:** For $f(z) = u(x, y) + iv(x, y)$ to be analytic, it must satisfy:
    *   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
    *   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

2.  **Differentiate the Cauchy-Riemann Equations:**
    *   Differentiate the first equation with respect to $x$: $\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial x \partial y}$
    *   Differentiate the second equation with respect to $y$: $\frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial y \partial x}$

3.  **Use the Equality of Mixed Partial Derivatives:** Since $f(z)$ is analytic, its partial derivatives are continuous, so $\frac{\partial^2 v}{\partial x \partial y} = \frac{\partial^2 v}{\partial y \partial x}$.

4.  **Sum the Differentiated Equations:** Adding the two differentiated equations:
    $$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{\partial^2 v}{\partial x \partial y} - \frac{\partial^2 v}{\partial y \partial x} = 0 $$
    Thus, $u(x, y)$ is harmonic.

5.  **Similarly, for $v(x, y)$:**
    *   Differentiate the first equation with respect to $y$: $\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 v}{\partial y^2}$
    *   Differentiate the second equation with respect to $x$: $\frac{\partial^2 u}{\partial x \partial y} = -\frac{\partial^2 v}{\partial x^2}$
    *   Using equality of mixed partials: $\frac{\partial^2 v}{\partial y^2} = \frac{\partial^2 u}{\partial y \partial x} = -\frac{\partial^2 u}{\partial x \partial y}$
    *   And $\frac{\partial^2 v}{\partial x^2} = -\frac{\partial^2 u}{\partial x \partial y}$
    *   Summing the derivatives of the Cauchy-Riemann equations with respect to $y$ and $x$ (but swapped order):
        $\frac{\partial}{\partial y}(\frac{\partial u}{\partial x}) = \frac{\partial}{\partial y}(\frac{\partial v}{\partial y}) \implies \frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 v}{\partial y^2}$
        $\frac{\partial}{\partial x}(-\frac{\partial u}{\partial y}) = \frac{\partial}{\partial x}(\frac{\partial v}{\partial x}) \implies -\frac{\partial^2 u}{\partial x \partial y} = \frac{\partial^2 v}{\partial x^2}$
        Adding these: $\frac{\partial^2 v}{\partial y^2} + \frac{\partial^2 v}{\partial x^2} = \frac{\partial^2 u}{\partial y \partial x} - \frac{\partial^2 u}{\partial x \partial y} = 0$.
        Thus, $v(x, y)$ is harmonic.

**Important Point:** The converse is also true: if $u(x, y)$ is harmonic, then there exists an analytic function $f(z)$ such that $u(x, y)$ is its real part.

**Course Outcome Alignment:** CO2 (Understand the analyticity of complex functions and apply it in conformal mapping). This theorem directly links analyticity to the harmonic nature of the real and imaginary parts.

---

### 3. Harmonic Conjugate

Given a harmonic function $u(x, y)$, its **harmonic conjugate** is a function $v(x, y)$ such that $v(x, y)$ is harmonic and $f(z) = u(x, y) + iv(x, y)$ is analytic.

**How to find the Harmonic Conjugate:**

If $u(x, y)$ is harmonic, we can find its harmonic conjugate $v(x, y)$ using the Cauchy-Riemann equations:

*   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$
*   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$

We can integrate one of these equations to find $v(x, y)$.

**Example 1:** Find the harmonic conjugate of $u(x, y) = x^2 - y^2$.

1.  **Check if $u(x, y)$ is harmonic:**
    *   $\frac{\partial u}{\partial x} = 2x$
    *   $\frac{\partial^2 u}{\partial x^2} = 2$
    *   $\frac{\partial u}{\partial y} = -2y$
    *   $\frac{\partial^2 u}{\partial y^2} = -2$
    *   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$.
    So, $u(x, y)$ is harmonic.

2.  **Use Cauchy-Riemann equations to find $v(x, y)$:**
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x$
    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y$

3.  **Integrate $\frac{\partial v}{\partial y} = 2x$ with respect to $y$:**
    $v(x, y) = \int 2x \, dy = 2xy + g(x)$
    Here, $g(x)$ is an arbitrary function of $x$.

4.  **Differentiate this expression for $v(x, y)$ with respect to $x$ and equate it to $\frac{\partial v}{\partial x}$:**
    $\frac{\partial v}{\partial x} = \frac{\partial}{\partial x} (2xy + g(x)) = 2y + g'(x)$
    We know $\frac{\partial v}{\partial x} = 2y$.
    So, $2y + g'(x) = 2y$, which implies $g'(x) = 0$.

5.  **Integrate $g'(x) = 0$ to find $g(x)$:**
    $g(x) = C$, where $C$ is a constant.

6.  **Substitute $g(x)$ back into the expression for $v(x, y)$:**
    $v(x, y) = 2xy + C$

Therefore, the harmonic conjugate of $u(x, y) = x^2 - y^2$ is $v(x, y) = 2xy + C$. The analytic function is $f(z) = (x^2 - y^2) + i(2xy + C)$.

We can verify this: $f(z) = (x^2 - 2xyi - y^2) + C = (x^2 - y^2 + 2xyi) + C = z^2 + C$.

**Example 2:** Find the harmonic conjugate of $u(x, y) = e^x \cos y$.

1.  **Check if $u(x, y)$ is harmonic:**
    *   $\frac{\partial u}{\partial x} = e^x \cos y$
    *   $\frac{\partial^2 u}{\partial x^2} = e^x \cos y$
    *   $\frac{\partial u}{\partial y} = -e^x \sin y$
    *   $\frac{\partial^2 u}{\partial y^2} = -e^x \cos y$
    *   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = e^x \cos y + (-e^x \cos y) = 0$.
    So, $u(x, y)$ is harmonic.

2.  **Use Cauchy-Riemann equations to find $v(x, y)$:**
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = e^x \cos y$
    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-e^x \sin y) = e^x \sin y$

3.  **Integrate $\frac{\partial v}{\partial y} = e^x \cos y$ with respect to $y$:**
    $v(x, y) = \int e^x \cos y \, dy = e^x \sin y + g(x)$

4.  **Differentiate this expression for $v(x, y)$ with respect to $x$ and equate it to $\frac{\partial v}{\partial x}$:**
    $\frac{\partial v}{\partial x} = \frac{\partial}{\partial x} (e^x \sin y + g(x)) = e^x \sin y + g'(x)$
    We know $\frac{\partial v}{\partial x} = e^x \sin y$.
    So, $e^x \sin y + g'(x) = e^x \sin y$, which implies $g'(x) = 0$.

5.  **Integrate $g'(x) = 0$ to find $g(x)$:**
    $g(x) = C$, where $C$ is a constant.

6.  **Substitute $g(x)$ back into the expression for $v(x, y)$:**
    $v(x, y) = e^x \sin y + C$

Therefore, the harmonic conjugate of $u(x, y) = e^x \cos y$ is $v(x, y) = e^x \sin y + C$. The analytic function is $f(z) = e^x \cos y + i(e^x \sin y + C)$.

We can verify this: $f(z) = e^x (\cos y + i \sin y) + iC = e^x e^{iy} + iC = e^{x+iy} + iC = e^z + iC$.

**Reference:**
*   **Zill & Shanahan, Complex Analysis:** Chapter 2 discusses analytic functions and their relation to harmonic functions, including finding harmonic conjugates.
*   **Grewal, Higher Engineering Mathematics:** Chapter 12 covers analytic functions and their properties, including harmonic functions.

---

### 4. Applications of Harmonic Functions

Harmonic functions are fundamental in solving boundary value problems in various physical phenomena that are governed by Laplace's equation.

**Key Applications:**

*   **Steady-State Heat Conduction:** The temperature distribution $T(x, y)$ in a two-dimensional region in steady-state satisfies Laplace's equation: $\nabla^2 T = 0$. The temperature function is harmonic.
*   **Electrostatics:** The electric potential $\phi(x, y)$ in a charge-free region in two dimensions satisfies Laplace's equation: $\nabla^2 \phi = 0$. The potential function is harmonic. The electric field is related to the gradient of the potential.
*   **Fluid Dynamics:** In certain idealized fluid flows (e.g., irrotational, incompressible flow), the velocity potential or stream function can be harmonic.
*   **Ideal Membranes:** The displacement of an ideal stretched membrane can be described by functions satisfying Laplace's equation.

**Example (Electrostatics):** Consider a region in the $xy$-plane with no charges. The electric potential $\phi(x, y)$ satisfies Laplace's equation. If we know the potential on the boundaries of the region, we can use harmonic functions to find the potential inside.

If we have an analytic function $f(z) = \phi(x, y) + i\psi(x, y)$, where $\phi$ is the electric potential and $\psi$ is the electric flux function (or stream function), then $\phi$ and $\psi$ are harmonic. The electric field is given by $E = -\nabla \phi$.

**Course Outcome Alignment:**
*   CO1 (Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.) - While not directly about Fourier transforms, understanding fundamental mathematical functions like harmonic functions is a prerequisite for advanced topics.
*   CO2 (Understand the analyticity of complex functions and apply it in conformal mapping.) - Harmonic functions are essential for understanding conformal mappings, as they are preserved under such transformations.
*   Implied practical application in electrical science and physical science due to their connection to physical phenomena.

---

### 5. Harmonic Functions and Conformal Mappings

Conformal mappings preserve angles between intersecting curves and scale distances locally. They have significant applications in transforming complex geometries and boundary conditions.

**Key Property:** If $f(z)$ is analytic and non-constant in a region, then the mapping $w = f(z)$ is conformal at every point $z$ where $f'(z) \neq 0$.

**Theorem:** Harmonic functions are transformed into harmonic functions under a conformal mapping.
If $u(x, y)$ is harmonic and $w = f(z) = u_1(x, y) + i v_1(x, y)$ is a conformal mapping, then the function $U(X, Y) = u(x(X, Y), y(X, Y))$ is harmonic in the $XY$-plane, where $z = x + iy$ and $w = u_1 + iv_1 = X + iY$.

**Intuition:** Conformal mappings preserve the geometric properties of harmonic functions. If a function satisfies Laplace's equation in one coordinate system, it will continue to satisfy it in a transformed coordinate system obtained via a conformal mapping.

**Reference:**
*   **Zill & Shanahan, Complex Analysis:** Chapter 8 discusses conformal mappings and their properties, including the preservation of harmonic functions.

**Course Outcome Alignment:** CO2 (Understand the analyticity of complex functions and apply it in conformal mapping.) This directly highlights the connection between the properties of analytic functions (leading to harmonic functions) and conformal mappings.

---

### 6. Practice Questions and Answers

**Question 1:**
Determine if the function $u(x, y) = x^3 - 3xy^2$ is harmonic. If it is, find its harmonic conjugate.

**Answer 1:**
1.  **Check for Harmonicity:**
    *   $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
    *   $\frac{\partial^2 u}{\partial x^2} = 6x$
    *   $\frac{\partial u}{\partial y} = -6xy$
    *   $\frac{\partial^2 u}{\partial y^2} = -6x$
    *   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 6x + (-6x) = 0$.
    Yes, $u(x, y)$ is harmonic.

2.  **Find Harmonic Conjugate $v(x, y)$:**
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 3x^2 - 3y^2$
    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-6xy) = 6xy$

    Integrate $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$ with respect to $y$:
    $v(x, y) = \int (3x^2 - 3y^2) \, dy = 3x^2y - y^3 + g(x)$

    Differentiate with respect to $x$ and equate to $\frac{\partial v}{\partial x}$:
    $\frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(3x^2y - y^3 + g(x)) = 6xy + g'(x)$
    We have $\frac{\partial v}{\partial x} = 6xy$.
    So, $6xy + g'(x) = 6xy \implies g'(x) = 0$.
    Integrating $g'(x) = 0$ gives $g(x) = C$.

    Therefore, the harmonic conjugate is $v(x, y) = 3x^2y - y^3 + C$.
    The analytic function is $f(z) = (x^3 - 3xy^2) + i(3x^2y - y^3 + C)$. This is $z^3 + iC$.

**Question 2:**
Show that $u(x, y) = \ln(x^2 + y^2)$ is harmonic in any region not containing the origin. Find its harmonic conjugate.

**Answer 2:**
1.  **Check for Harmonicity:**
    *   $\frac{\partial u}{\partial x} = \frac{2x}{x^2 + y^2}$
    *   $\frac{\partial^2 u}{\partial x^2} = \frac{2(x^2+y^2) - 2x(2x)}{(x^2+y^2)^2} = \frac{2x^2+2y^2-4x^2}{(x^2+y^2)^2} = \frac{2y^2-2x^2}{(x^2+y^2)^2}$
    *   $\frac{\partial u}{\partial y} = \frac{2y}{x^2 + y^2}$
    *   $\frac{\partial^2 u}{\partial y^2} = \frac{2(x^2+y^2) - 2y(2y)}{(x^2+y^2)^2} = \frac{2x^2+2y^2-4y^2}{(x^2+y^2)^2} = \frac{2x^2-2y^2}{(x^2+y^2)^2}$
    *   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{2y^2-2x^2}{(x^2+y^2)^2} + \frac{2x^2-2y^2}{(x^2+y^2)^2} = 0$.
    Yes, $u(x, y)$ is harmonic for $(x, y) \neq (0, 0)$.

2.  **Find Harmonic Conjugate $v(x, y)$:**
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = \frac{2x}{x^2 + y^2}$
    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -\frac{2y}{x^2 + y^2}$

    Integrate $\frac{\partial v}{\partial y} = \frac{2x}{x^2 + y^2}$ with respect to $y$:
    $v(x, y) = \int \frac{2x}{x^2 + y^2} \, dy = 2x \int \frac{1}{x^2 + y^2} \, dy$
    Let $y = x \tan \theta$, $dy = x \sec^2 \theta \, d\theta$.
    $x^2 + y^2 = x^2 + x^2 \tan^2 \theta = x^2 (1 + \tan^2 \theta) = x^2 \sec^2 \theta$.
    $\int \frac{1}{x^2 \sec^2 \theta} \, x \sec^2 \theta \, d\theta = \int \frac{1}{x} \, d\theta = \frac{1}{x} \theta = \frac{1}{x} \arctan\left(\frac{y}{x}\right)$

    So, $v(x, y) = 2x \left(\frac{1}{x} \arctan\left(\frac{y}{x}\right)\right) + g(x) = 2 \arctan\left(\frac{y}{x}\right) + g(x)$.

    Differentiate with respect to $x$ and equate to $\frac{\partial v}{\partial x}$:
    $\frac{\partial v}{\partial x} = 2 \cdot \frac{1}{1 + (y/x)^2} \cdot \left(-\frac{y}{x^2}\right) + g'(x) = 2 \cdot \frac{x^2}{x^2+y^2} \cdot \left(-\frac{y}{x^2}\right) + g'(x) = -\frac{2y}{x^2+y^2} + g'(x)$
    We have $\frac{\partial v}{\partial x} = -\frac{2y}{x^2+y^2}$.
    So, $-\frac{2y}{x^2+y^2} + g'(x) = -\frac{2y}{x^2+y^2} \implies g'(x) = 0$.
    Integrating $g'(x) = 0$ gives $g(x) = C$.

    Therefore, the harmonic conjugate is $v(x, y) = 2 \arctan\left(\frac{y}{x}\right) + C$.
    The analytic function is $f(z) = \ln(x^2 + y^2) + i \left(2 \arctan\left(\frac{y}{x}\right) + C\right)$.
    This corresponds to $f(z) = 2 \ln z + iC$.

**Question 3 (Conceptual):**
What physical quantities are represented by harmonic functions in steady-state heat conduction and electrostatics?

**Answer 3:**
*   **Steady-State Heat Conduction:** The **temperature distribution** $T(x, y)$ is represented by a harmonic function.
*   **Electrostatics:** The **electric potential** $\phi(x, y)$ in a charge-free region is represented by a harmonic function.

---

### 7. Important Points to Remember

*   A function $u(x, y)$ is **harmonic** if it is twice continuously differentiable and satisfies Laplace's equation: $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$.
*   If $f(z) = u(x, y) + iv(x, y)$ is analytic in a region, then both $u(x, y)$ and $v(x, y)$ are harmonic in that region.
*   The **harmonic conjugate** of a harmonic function $u(x, y)$ is a function $v(x, y)$ such that $f(z) = u(x, y) + iv(x, y)$ is analytic.
*   Harmonic functions are found by using the Cauchy-Riemann equations and integration.
*   Harmonic functions appear in physical phenomena like steady-state heat conduction and electrostatics.
*   Conformal mappings preserve harmonic functions.

---
