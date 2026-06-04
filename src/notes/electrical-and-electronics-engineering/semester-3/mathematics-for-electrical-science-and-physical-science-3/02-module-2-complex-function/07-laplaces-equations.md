---
title: "Laplace’s Equations"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a68"
status: "completed"
scrapedAt: "2026-05-23T16:14:34.176Z"
---
# Mathematics for Electrical Science and Physical Science – 3: Module 2: Complex Function

## Topic: Laplace's Equations

**Introduction:**

This topic delves into the fascinating world of **Laplace's Equations** within the context of complex functions. While the term "Laplace's Equation" is more commonly associated with partial differential equations, in the realm of complex analysis, it refers to the concept of **harmonic functions**, which are intimately related to analytic functions. Understanding this connection is crucial for fields like electrostatics, fluid dynamics, and heat transfer, where Laplace's equation governs many physical phenomena. This module will bridge the gap between the properties of analytic functions and their role in solving problems described by Laplace's equation.

**Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   **Understand the relationship between analytic functions and harmonic functions.**
*   **Identify and verify harmonic functions.**
*   **Construct harmonic conjugates.**
*   **Apply the Cauchy-Riemann equations to determine analyticity and construct harmonic functions.**
*   **Relate the real and imaginary parts of an analytic function to solutions of Laplace's equation.**
*   **Understand the significance of harmonic functions in physical applications.**

---

### 1. Analytic Functions and Their Properties

**Key Concepts:**

*   **Complex Function:** A function $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$, and $u$ and $v$ are real-valued functions of two real variables $x$ and $y$.
*   **Analyticity (Holomorphicity):** A complex function $f(z)$ is analytic in a domain $D$ if its derivative $f'(z)$ exists at every point $z$ in $D$.
*   **Cauchy-Riemann Equations:** For a function $f(z) = u(x, y) + iv(x, y)$ to be analytic at a point $z = x + iy$, the following partial derivative conditions must hold:
    *   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
    *   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$
    These equations are a necessary and sufficient condition for analyticity, provided the partial derivatives are continuous.

**Reference:**

*   **Kreyszig, "Advanced Engineering Mathematics," 10th ed.** - Chapter 12: Complex Functions, Section 12.4: Analytic Functions. Cauchy-Riemann Equations.
*   **Zill & Shanahan, "Complex Analysis," 3rd ed.** - Chapter 2: Analytic Functions, Section 2.1: Functions of a Complex Variable, Section 2.3: Cauchy-Riemann Equations.
*   **Ramana, "Higher Engineering Mathematics," 39th ed.** - Chapter 24: Complex Variables, Section 24.5: Cauchy-Riemann Equations.
*   **Grewal, "Higher Engineering Mathematics," 44th ed.** - Chapter 15: Complex Variables, Section 15.5: Cauchy-Riemann Equations.

**Example:**

Let $f(z) = z^2$. We can write $z = x + iy$, so $f(z) = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 - y^2 + i(2xy)$.
Here, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.
Let's check the Cauchy-Riemann equations:
*   $\frac{\partial u}{\partial x} = 2x$
*   $\frac{\partial v}{\partial y} = 2x$
    So, $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ holds.
*   $\frac{\partial u}{\partial y} = -2y$
*   $\frac{\partial v}{\partial x} = 2y$
    So, $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ holds.
Since the Cauchy-Riemann equations are satisfied and the partial derivatives are continuous everywhere, $f(z) = z^2$ is analytic everywhere.

---

### 2. Harmonic Functions

**Key Concepts:**

*   **Harmonic Function:** A real-valued function $u(x, y)$ is called **harmonic** in a domain $D$ if its second partial derivatives are continuous in $D$ and satisfy **Laplace's Equation**:
    $$ \nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 $$
*   **Laplace's Equation:** The equation $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$ is a fundamental partial differential equation that describes many physical phenomena, such as steady-state heat distribution, electrostatic potential, and irrotational fluid flow.

**Theorem:** If $f(z) = u(x, y) + iv(x, y)$ is analytic in a domain $D$, then both $u(x, y)$ and $v(x, y)$ are harmonic in $D$.

**Proof:**
Given $f(z) = u(x, y) + iv(x, y)$ is analytic in $D$. This implies the Cauchy-Riemann equations hold:
1.  $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
2.  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

Since $f(z)$ is analytic, its derivative $f'(z)$ exists. Furthermore, if we assume that $f''(z)$ exists (which is true if $f(z)$ is analytic in a domain), then the second partial derivatives of $u$ and $v$ are continuous.

Differentiating (1) with respect to $x$:
$$ \frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial y \partial x} $$

Differentiating (2) with respect to $y$:
$$ \frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial x \partial y} $$

By Clairaut's Theorem (Schwarz's Theorem), if the mixed partial derivatives are continuous (which they are for analytic functions), then $\frac{\partial^2 v}{\partial y \partial x} = \frac{\partial^2 v}{\partial x \partial y}$.
Therefore,
$$ \frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial y \partial x} = \frac{\partial^2 v}{\partial x \partial y} $$
And
$$ \frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial x \partial y} $$

Now, substitute these into Laplace's equation for $u$:
$$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{\partial^2 v}{\partial y \partial x} + (-\frac{\partial^2 v}{\partial x \partial y}) = \frac{\partial^2 v}{\partial y \partial x} - \frac{\partial^2 v}{\partial x \partial y} = 0 $$
Thus, $u(x, y)$ is harmonic.

Similarly, we can show $v(x, y)$ is harmonic.
Differentiating (1) with respect to $y$:
$$ \frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 v}{\partial y^2} $$

Differentiating (2) with respect to $x$:
$$ \frac{\partial^2 u}{\partial x \partial y} = -\frac{\partial^2 v}{\partial x^2} $$

Using $\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 u}{\partial x \partial y}$:
$$ \frac{\partial^2 v}{\partial y^2} = -\frac{\partial^2 v}{\partial x^2} $$
Rearranging gives:
$$ \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0 $$
Thus, $v(x, y)$ is also harmonic.

**Reference:**

*   **Kreyszig, "Advanced Engineering Mathematics," 10th ed.** - Chapter 12: Complex Functions, Section 12.4: Analytic Functions. Harmonic Functions.
*   **Zill & Shanahan, "Complex Analysis," 3rd ed.** - Chapter 2: Analytic Functions, Section 2.4: Harmonic Functions.
*   **Ramana, "Higher Engineering Mathematics," 39th ed.** - Chapter 24: Complex Variables, Section 24.6: Harmonic Functions.
*   **Grewal, "Higher Engineering Mathematics," 44th ed.** - Chapter 15: Complex Variables, Section 15.6: Harmonic Functions.

**Example:**

From the previous example, $f(z) = z^2$ is analytic.
$u(x, y) = x^2 - y^2$
$v(x, y) = 2xy$

Let's check if $u(x, y)$ is harmonic:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial^2 u}{\partial x^2} = 2$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial^2 u}{\partial y^2} = -2$
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$. So, $u(x, y)$ is harmonic.

Let's check if $v(x, y)$ is harmonic:
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial^2 v}{\partial x^2} = 0$
$\frac{\partial v}{\partial y} = 2x$
$\frac{\partial^2 v}{\partial y^2} = 0$
$\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0 + 0 = 0$. So, $v(x, y)$ is harmonic.

---

### 3. Harmonic Conjugates

**Key Concepts:**

*   **Harmonic Conjugate:** If $u(x, y)$ is a harmonic function in a domain $D$, then a harmonic function $v(x, y)$ is called a **harmonic conjugate** of $u(x, y)$ if the function $f(z) = u(x, y) + iv(x, y)$ is analytic in $D$.
*   **Finding Harmonic Conjugates:** If $u(x, y)$ is given and harmonic, we can find its harmonic conjugate $v(x, y)$ by using the Cauchy-Riemann equations:
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$
    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$
    We integrate these partial differential equations to find $v(x, y)$.

**Reference:**

*   **Kreyszig, "Advanced Engineering Mathematics," 10th ed.** - Chapter 12: Complex Functions, Section 12.4: Analytic Functions. Harmonic Conjugates.
*   **Zill & Shanahan, "Complex Analysis," 3rd ed.** - Chapter 2: Analytic Functions, Section 2.4: Harmonic Functions.
*   **Ramana, "Higher Engineering Mathematics," 39th ed.** - Chapter 24: Complex Variables, Section 24.6: Harmonic Functions.
*   **Grewal, "Higher Engineering Mathematics," 44th ed.** - Chapter 15: Complex Variables, Section 15.6: Harmonic Functions.

**Example:**

Find the harmonic conjugate of $u(x, y) = x^2 - y^2$.
We know $u(x, y)$ is harmonic (from previous example).
Using Cauchy-Riemann equations:
1.  $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x$
    Integrating with respect to $y$:
    $v(x, y) = \int 2x \, dy = 2xy + g(x)$ (where $g(x)$ is an arbitrary function of $x$)

2.  $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y$
    Now, differentiate the expression for $v(x, y)$ with respect to $x$ and equate it to $2y$:
    $\frac{\partial}{\partial x} (2xy + g(x)) = 2y + g'(x)$
    So, $2y + g'(x) = 2y$.
    This implies $g'(x) = 0$, which means $g(x) = C$ (a constant).

Therefore, the harmonic conjugate is $v(x, y) = 2xy + C$.
The analytic function is $f(z) = u(x, y) + iv(x, y) = (x^2 - y^2) + i(2xy + C) = (x^2 - y^2 + 2ixy) + iC$.
Recognizing $x^2 - y^2 + 2ixy = (x+iy)^2 = z^2$, we have $f(z) = z^2 + iC$. If we set $C=0$, we get $f(z) = z^2$.

**Example 2:**

Find the harmonic conjugate of $u(x, y) = e^x \cos y$.
First, verify if $u(x, y)$ is harmonic:
$\frac{\partial u}{\partial x} = e^x \cos y$
$\frac{\partial^2 u}{\partial x^2} = e^x \cos y$
$\frac{\partial u}{\partial y} = -e^x \sin y$
$\frac{\partial^2 u}{\partial y^2} = -e^x \cos y$
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = e^x \cos y - e^x \cos y = 0$.
So, $u(x, y)$ is harmonic.

Now find $v(x, y)$ using Cauchy-Riemann equations:
1.  $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = e^x \cos y$
    Integrating with respect to $y$:
    $v(x, y) = \int e^x \cos y \, dy = e^x \sin y + g(x)$

2.  $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-e^x \sin y) = e^x \sin y$
    Differentiate the expression for $v(x, y)$ with respect to $x$:
    $\frac{\partial}{\partial x} (e^x \sin y + g(x)) = e^x \sin y + g'(x)$
    Equating this to $e^x \sin y$:
    $e^x \sin y + g'(x) = e^x \sin y$
    This implies $g'(x) = 0$, so $g(x) = C$ (a constant).

Therefore, the harmonic conjugate is $v(x, y) = e^x \sin y + C$.
The analytic function is $f(z) = u(x, y) + iv(x, y) = e^x \cos y + i(e^x \sin y + C) = e^x (\cos y + i \sin y) + iC = e^x e^{iy} + iC = e^{x+iy} + iC = e^z + iC$.

---

### 4. Constructing Analytic Functions from Harmonic Functions

**Key Concepts:**

*   **Milne-Thomson Method:** A direct method to construct an analytic function $f(z)$ when one of its harmonic components (real part $u$ or imaginary part $v$) is known. The method utilizes the relationship $f(z) = 2f(\frac{z}{2}, \frac{z}{2}) - f(0)$, where $f(x, y) = u(x, y) + iv(x, y)$. A more practical approach involves substituting $x = z$ and $y = 0$ into $u(x, y)$ and $v(x, y)$ after expressing $u$ and $v$ in terms of $z$ and $\bar{z}$ or by using the relationships derived from Cauchy-Riemann equations.

    **Method 1 (Using $f'(z)$):**
    If $u(x, y)$ is given and harmonic, find its harmonic conjugate $v(x, y)$. Then $f(z) = u(x, y) + iv(x, y)$. To express $f(z)$ in terms of $z$ alone, we can use the fact that for an analytic function:
    *   $u(x, y) = \text{Re} (f(z))$
    *   $v(x, y) = \text{Im} (f(z))$
    If we can express $u(x, y)$ and $v(x, y)$ in terms of $z$ and $\bar{z}$, we can then find $f(z)$. A simpler approach is to use the relationship:
    $f(z) = u(x, y) - iy \frac{\partial u}{\partial y} + C_1$ (if $u$ is known)
    or $f(z) = v(x, y) + ix \frac{\partial v}{\partial x} + C_2$ (if $v$ is known)

    A more direct method is to find $f'(z)$:
    $f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y}$
    If $u(x, y)$ is known, we can compute its partial derivatives with respect to $x$ and $y$, substitute $x=z$ and $y=0$ into these expressions, and then integrate $f'(z)$ to find $f(z)$.

    **Method 2 (Expressing $u$ and $v$ in terms of $z$):**
    If $f(z) = u(x, y) + iv(x, y)$ is analytic, then $z = x+iy$ and $\bar{z} = x-iy$.
    This gives $x = \frac{z+\bar{z}}{2}$ and $y = \frac{z-\bar{z}}{2i}$.
    Substitute these into $u(x, y)$ and $v(x, y)$. Then use the property that for an analytic function, $u(x, y)$ and $v(x, y)$ can be related to $f(z)$. A common trick is to set $\bar{z} = 0$ (which means $x=z, y=0$) after expressing $u$ and $v$ in terms of $z$ and $\bar{z}$ if the resulting expression simplifies to $f(z)$.

**Reference:**

*   **Kreyszig, "Advanced Engineering Mathematics," 10th ed.** - Chapter 12: Complex Functions, Section 12.4: Analytic Functions. Constructing Analytic Functions.
*   **Zill & Shanahan, "Complex Analysis," 3rd ed.** - Chapter 2: Analytic Functions, Section 2.4: Harmonic Functions.
*   **Ramana, "Higher Engineering Mathematics," 39th ed.** - Chapter 24: Complex Variables, Section 24.6: Harmonic Functions.
*   **Grewal, "Higher Engineering Mathematics," 44th ed.** - Chapter 15: Complex Variables, Section 15.6: Harmonic Functions.

**Example:**

Find the analytic function $f(z)$ whose real part is $u(x, y) = x^3 - 3xy^2$.
First, verify if $u(x, y)$ is harmonic:
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
$\frac{\partial^2 u}{\partial x^2} = 6x$
$\frac{\partial u}{\partial y} = -6xy$
$\frac{\partial^2 u}{\partial y^2} = -6x$
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 6x - 6x = 0$.
So, $u(x, y)$ is harmonic.

**Method 1 (Using $f'(z)$):**
$f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y}$
$f'(z) = (3x^2 - 3y^2) - i (-6xy) = 3x^2 - 3y^2 + 6ixy$
Now, substitute $x=z$ and $y=0$:
$f'(z) = 3(z)^2 - 3(0)^2 + 6i(z)(0) = 3z^2$
Integrate $f'(z)$ with respect to $z$:
$f(z) = \int 3z^2 \, dz = z^3 + C$

Let's check this. If $f(z) = z^3$, then $f(z) = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = x^3 + 3ix^2y - 3xy^2 - iy^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$.
The real part is indeed $u(x, y) = x^3 - 3xy^2$.

**Method 2 (Using $f(z) = u(x, y) - i y u_x(x, y) + C$ or similar):**
We know $f(z) = u(x, y) + iv(x, y)$. Also, $f'(z) = u_x + iv_x$.
And $v_y = u_x$, $v_x = -u_y$.
So, $f'(z) = u_x - i u_y$.
We can also write $f(z)$ in terms of $u$ and its derivatives.
Consider $f(z) = u(x,y) + i v(x,y)$.
We have $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
From the first equation, $v(x, y) = \int \frac{\partial u}{\partial x} dy$. Let $F(x,y) = \int \frac{\partial u}{\partial x} dy$.
Then $f(z) = u(x,y) + i F(x,y)$.
We can express $F(x,y)$ in terms of $u$ and its derivatives.
It is known that $f(z) = u(x,y) - i y \frac{\partial u}{\partial x}(x,y) + C$ is not always correct.

A reliable direct method is to substitute $x = z$ and $y = 0$ into the expression for $u(x,y)$ and its partial derivative $\frac{\partial u}{\partial y}$ to obtain $f(z)$ and $g(z)$, and then $f(z) = g(z) + i \int g(z) dz$. This is not standard.

Let's stick to the $f'(z)$ method which is robust.

**Alternative Approach (Expressing $u$ in terms of $z$):**
$u(x, y) = x^3 - 3xy^2$
Substitute $x = \frac{z+\bar{z}}{2}$ and $y = \frac{z-\bar{z}}{2i}$:
$u(x, y) = \left(\frac{z+\bar{z}}{2}\right)^3 - 3 \left(\frac{z+\bar{z}}{2}\right) \left(\frac{z-\bar{z}}{2i}\right)^2$
$u(x, y) = \frac{1}{8}(z+\bar{z})^3 - 3 \frac{z+\bar{z}}{2} \frac{(z-\bar{z})^2}{-4}$
$u(x, y) = \frac{1}{8}(z^3 + 3z^2\bar{z} + 3z\bar{z}^2 + \bar{z}^3) + \frac{3}{8}(z+\bar{z})(z^2 - 2z\bar{z} + \bar{z}^2)$
$u(x, y) = \frac{1}{8}(z^3 + 3z^2\bar{z} + 3z\bar{z}^2 + \bar{z}^3) + \frac{3}{8}(z^3 - 2z^2\bar{z} + z\bar{z}^2 + \bar{z}z^2 - 2z\bar{z}^2 + \bar{z}^3)$
$u(x, y) = \frac{1}{8}(z^3 + 3z^2\bar{z} + 3z\bar{z}^2 + \bar{z}^3 + 3z^3 - 6z^2\bar{z} + 3z\bar{z}^2 + 3\bar{z}z^2 - 6z\bar{z}^2 + 3\bar{z}^3)$
$u(x, y) = \frac{1}{8}(4z^3 - 3z^2\bar{z} + 3z\bar{z}^2 + 4\bar{z}^3)$
This doesn't look helpful directly.

The key insight from the $f'(z)$ method is that if $f(z)$ is analytic, then $f(z)$ can be expressed purely in terms of $z$.
We found $f'(z) = 3z^2$.
Let $f(z) = u(x,y) + iv(x,y)$.
We have $u(x,y) = x^3 - 3xy^2$.
We can find $v(x,y)$ using the Cauchy-Riemann equations:
$\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 3x^2 - 3y^2$
$v(x, y) = \int (3x^2 - 3y^2) dy = 3x^2y - y^3 + g(x)$
$\frac{\partial v}{\partial x} = 6xy + g'(x)$
We also need $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-6xy) = 6xy$.
So, $6xy + g'(x) = 6xy$, which implies $g'(x) = 0$, so $g(x) = C$.
$v(x, y) = 3x^2y - y^3 + C$.
$f(z) = u(x, y) + iv(x, y) = (x^3 - 3xy^2) + i(3x^2y - y^3) + iC$.
$f(z) = (x^3 + 3ix^2y - 3xy^2 - iy^3) + iC = (x+iy)^3 + iC = z^3 + iC$.
This confirms the result from the $f'(z)$ method.

---

### 5. Physical Significance of Harmonic Functions

**Key Concepts:**

*   **Electrostatics:** The electric potential $\phi(x, y)$ in a two-dimensional region with no charges satisfies Laplace's equation $\nabla^2 \phi = 0$. The real or imaginary parts of analytic functions can represent such potentials.
*   **Fluid Dynamics:** For an incompressible, irrotational fluid flow in two dimensions, the velocity potential $\phi(x, y)$ satisfies Laplace's equation. The stream function $\psi(x, y)$ also satisfies Laplace's equation, and the complex potential $W(z) = \phi + i\psi$ is an analytic function.
*   **Heat Conduction:** In steady-state heat conduction in two dimensions, the temperature distribution $T(x, y)$ satisfies Laplace's equation $\nabla^2 T = 0$.

**Reference:**

*   **Kreyszig, "Advanced Engineering Mathematics," 10th ed.** - Chapter 12: Complex Functions, Section 12.4: Analytic Functions. Applications.
*   **Zill & Shanahan, "Complex Analysis," 3rd ed.** - Chapter 2: Analytic Functions, Section 2.4: Harmonic Functions.
*   **Ramana, "Higher Engineering Mathematics," 39th ed.** - Chapter 24: Complex Variables, Section 24.6: Harmonic Functions.
*   **Grewal, "Higher Engineering Mathematics," 44th ed.** - Chapter 15: Complex Variables, Section 15.6: Harmonic Functions.

**Example (Electrostatics):**

Consider the electric potential $\phi(x, y)$ in a charge-free region. If we can find an analytic function $f(z) = \phi(x, y) + i\psi(x, y)$, then $\phi(x, y)$ is the electric potential. For instance, if $f(z) = z^2$, then $\phi(x, y) = x^2 - y^2$ is a possible electric potential distribution. The electric field is given by the gradient of the potential, and the equipotential lines are the level curves of $\phi(x, y)$. The stream function $\psi(x, y) = 2xy$ would represent the flow lines (e.g., electric field lines if $\phi$ were a stream function and $\psi$ a velocity potential).

---

### 6. Relationship to Course Outcomes

This topic directly supports several course outcomes:

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.**
    *   The concept of analyticity is fundamental to this topic. We use the Cauchy-Riemann equations to establish analyticity, which in turn guarantees that the real and imaginary parts are harmonic. The understanding of analyticity is a prerequisite for conformal mapping, and this topic builds that foundation by exploring the properties of analytic functions.

*   **Implicitly relates to other COs:** While not explicitly about Fourier Transforms or complex integration/residues, the understanding of analytic functions and their properties gained here is beneficial for those advanced topics. For example, the regularity of analytic functions simplifies certain integration problems.

---

### 7. Important Points to Remember

*   **Analyticity is key:** A function $f(z) = u + iv$ is analytic if and only if it satisfies the Cauchy-Riemann equations ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$) and its first partial derivatives are continuous.
*   **Harmonic functions satisfy Laplace's equation:** $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$.
*   **Analytic functions have harmonic real and imaginary parts:** If $f(z)$ is analytic, then both $u(x, y)$ and $v(x, y)$ are harmonic.
*   **Harmonic conjugates:** If $u(x, y)$ is harmonic, its harmonic conjugate $v(x, y)$ makes $f(z) = u + iv$ analytic. $v(x, y)$ can be found by integrating the Cauchy-Riemann equations.
*   **Constructing analytic functions:** The $f'(z)$ method is a reliable way to construct an analytic function when its real or imaginary part is known.
*   **Physical applications:** Harmonic functions are ubiquitous in physics and engineering, representing potentials and distributions in electrostatics, fluid dynamics, and heat transfer.

---

### 8. Practice Questions and Exercises

**Question 1:**
Verify that $u(x, y) = x^3 - 3xy^2$ is a harmonic function.
**Answer:**
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
$\frac{\partial^2 u}{\partial x^2} = 6x$
$\frac{\partial u}{\partial y} = -6xy$
$\frac{\partial^2 u}{\partial y^2} = -6x$
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 6x + (-6x) = 0$.
Thus, $u(x, y)$ is harmonic.

**Question 2:**
Find the harmonic conjugate of $u(x, y) = \ln(x^2 + y^2)$ for $z \neq 0$.
**Answer:**
First, verify if $u(x, y)$ is harmonic.
$\frac{\partial u}{\partial x} = \frac{2x}{x^2 + y^2}$
$\frac{\partial^2 u}{\partial x^2} = \frac{2(x^2+y^2) - 2x(2x)}{(x^2+y^2)^2} = \frac{2x^2+2y^2-4x^2}{(x^2+y^2)^2} = \frac{2y^2-2x^2}{(x^2+y^2)^2}$
$\frac{\partial u}{\partial y} = \frac{2y}{x^2 + y^2}$
$\frac{\partial^2 u}{\partial y^2} = \frac{2(x^2+y^2) - 2y(2y)}{(x^2+y^2)^2} = \frac{2x^2+2y^2-4y^2}{(x^2+y^2)^2} = \frac{2x^2-2y^2}{(x^2+y^2)^2}$
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{2y^2-2x^2}{(x^2+y^2)^2} + \frac{2x^2-2y^2}{(x^2+y^2)^2} = 0$.
So, $u(x, y)$ is harmonic.

Now find $v(x, y)$:
1.  $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = \frac{2x}{x^2 + y^2}$
    $v(x, y) = \int \frac{2x}{x^2 + y^2} dy = 2x \cdot \frac{1}{x^2} \int \frac{x^2}{x^2 + y^2} dy$. This integration is not straightforward.

    Let's reconsider the integration.
    $v(x, y) = \int \frac{2x}{x^2 + y^2} dy$. Treat $x$ as a constant during integration with respect to $y$.
    $v(x, y) = 2x \arctan\left(\frac{y}{x}\right) + g(x)$ (Assuming $x > 0$. If $x<0$, it would be $2x \arctan\left(\frac{y}{x}\right) + \pi$ or $\pi/2$ etc. For $z \neq 0$, we can consider the principal branch).

2.  $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -\frac{2y}{x^2 + y^2}$
    Differentiate the expression for $v(x, y)$ with respect to $x$:
    $\frac{\partial v}{\partial x} = \frac{\partial}{\partial x} \left( 2x \arctan\left(\frac{y}{x}\right) + g(x) \right)$
    Using the product rule for $\arctan$: $\frac{d}{dx} \arctan(u) = \frac{1}{1+u^2} \frac{du}{dx}$.
    $\frac{\partial}{\partial x} \left( 2x \arctan\left(\frac{y}{x}\right) \right) = 2 \arctan\left(\frac{y}{x}\right) + 2x \cdot \frac{1}{1+(y/x)^2} \cdot \left(-\frac{y}{x^2}\right)$
    $= 2 \arctan\left(\frac{y}{x}\right) + 2x \cdot \frac{x^2}{x^2+y^2} \cdot \left(-\frac{y}{x^2}\right)$
    $= 2 \arctan\left(\frac{y}{x}\right) - \frac{2xy}{x^2+y^2}$
    So, $\frac{\partial v}{\partial x} = 2 \arctan\left(\frac{y}{x}\right) - \frac{2xy}{x^2+y^2} + g'(x)$.

    Equating this to $-\frac{2y}{x^2 + y^2}$:
    $2 \arctan\left(\frac{y}{x}\right) - \frac{2xy}{x^2+y^2} + g'(x) = -\frac{2y}{x^2 + y^2}$
    This implies $2 \arctan\left(\frac{y}{x}\right) - \frac{2xy}{x^2+y^2} = -\frac{2y}{x^2 + y^2}$. This is not directly giving $g'(x) = 0$.

    There might be a mistake in assuming $v(x, y) = 2x \arctan\left(\frac{y}{x}\right) + g(x)$. Let's use a different approach.
    Consider $f(z) = \log z = \ln|z| + i \arg(z)$.
    Let $z = x+iy$. $|z| = \sqrt{x^2+y^2}$.
    $u(x, y) = \ln(\sqrt{x^2+y^2}) = \frac{1}{2} \ln(x^2+y^2)$.
    This is half of the given $u(x, y)$. So, let's consider $u_1(x,y) = \frac{1}{2} \ln(x^2+y^2)$.
    The harmonic conjugate of $u_1(x,y)$ is $v_1(x,y) = \arg(z) = \arctan(\frac{y}{x})$.

    Now, let's consider $u(x, y) = \ln(x^2 + y^2) = 2 \cdot \frac{1}{2} \ln(x^2+y^2)$.
    So, $u(x, y) = 2 u_1(x, y)$.
    The harmonic conjugate of $2 u_1(x,y)$ will be $2 v_1(x,y)$.
    Therefore, $v(x, y) = 2 \arctan\left(\frac{y}{x}\right) + C$.

    Let's verify this.
    If $v(x, y) = 2 \arctan(\frac{y}{x}) + C$:
    $\frac{\partial v}{\partial y} = 2 \cdot \frac{1}{1+(y/x)^2} \cdot \frac{1}{x} = \frac{2}{1+y^2/x^2} \cdot \frac{1}{x} = \frac{2x^2}{x^2+y^2} \cdot \frac{1}{x} = \frac{2x}{x^2+y^2}$. This matches $\frac{\partial u}{\partial x}$.
    $\frac{\partial v}{\partial x} = 2 \cdot \frac{1}{1+(y/x)^2} \cdot (-\frac{y}{x^2}) = \frac{2x^2}{x^2+y^2} \cdot (-\frac{y}{x^2}) = -\frac{2y}{x^2+y^2}$. This matches $-\frac{\partial u}{\partial y}$.

    So, the harmonic conjugate of $u(x, y) = \ln(x^2 + y^2)$ is $v(x, y) = 2 \arctan\left(\frac{y}{x}\right) + C$.

**Question 3:**
Find the analytic function $f(z)$ for which the imaginary part is $v(x, y) = e^x \sin y$.
**Answer:**
First, verify if $v(x, y)$ is harmonic:
$\frac{\partial v}{\partial x} = e^x \sin y$
$\frac{\partial^2 v}{\partial x^2} = e^x \sin y$
$\frac{\partial v}{\partial y} = e^x \cos y$
$\frac{\partial^2 v}{\partial y^2} = -e^x \sin y$
$\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = e^x \sin y - e^x \sin y = 0$.
So, $v(x, y)$ is harmonic.

Using the $f'(z)$ method:
$f'(z) = \frac{\partial v}{\partial y} + i \frac{\partial v}{\partial x}$
$\frac{\partial v}{\partial y} = e^x \cos y$
$\frac{\partial v}{\partial x} = e^x \sin y$
$f'(z) = e^x \cos y + i e^x \sin y = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.

Integrate $f'(z)$:
$f(z) = \int e^z dz = e^z + C$.

Let's verify this. If $f(z) = e^z$, then $f(z) = e^{x+iy} = e^x e^{iy} = e^x(\cos y + i \sin y) = e^x \cos y + i e^x \sin y$.
The imaginary part is indeed $v(x, y) = e^x \sin y$.

**Question 4:**
If $f(z) = u(x, y) + iv(x, y)$ is analytic, and $u(x, y) = x^2 - y^2 + 2x$. Find $f(z)$.
**Answer:**
First, verify if $u(x, y)$ is harmonic:
$\frac{\partial u}{\partial x} = 2x + 2$
$\frac{\partial^2 u}{\partial x^2} = 2$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial^2 u}{\partial y^2} = -2$
$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$.
So, $u(x, y)$ is harmonic.

Using the $f'(z)$ method:
$f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y}$
$f'(z) = (2x + 2) - i (-2y) = 2x + 2 + 2iy$
Substitute $x=z$ and $y=0$:
$f'(z) = 2z + 2 + 2i(0) = 2z + 2$.

Integrate $f'(z)$:
$f(z) = \int (2z + 2) dz = z^2 + 2z + C$.

Let's verify this. If $f(z) = z^2 + 2z$, then
$f(z) = (x+iy)^2 + 2(x+iy) = (x^2 - y^2 + 2ixy) + (2x + 2iy)$
$f(z) = (x^2 - y^2 + 2x) + i(2xy + 2y)$.
The real part is $u(x, y) = x^2 - y^2 + 2x$, which matches the given information.

---

This module provides a foundational understanding of the intimate relationship between analytic complex functions and the solutions of Laplace's equation, a critical tool in various scientific and engineering disciplines. The ability to identify harmonic functions, find their conjugates, and construct analytic functions from them is a powerful analytical skill.
