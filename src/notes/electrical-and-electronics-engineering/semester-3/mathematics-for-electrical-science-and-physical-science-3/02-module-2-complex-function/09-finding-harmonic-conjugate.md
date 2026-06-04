---
title: "Finding harmonic conjugate"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a6a"
status: "completed"
scrapedAt: "2026-05-23T16:14:35.781Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Function

### Topic: Finding Harmonic Conjugate

---

### Introduction

This topic delves into the concept of harmonic functions and their conjugates, which are fundamental in various areas of electrical and physical sciences, particularly in fluid mechanics, heat transfer, and electrostatics. Understanding harmonic conjugates allows us to construct analytic functions from given harmonic functions, which in turn enables us to solve boundary value problems using the powerful tools of complex analysis.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Define harmonic functions and their conjugates.
*   Understand the relationship between analytic functions and harmonic functions.
*   Find the harmonic conjugate of a given harmonic function.
*   Construct analytic functions given a harmonic function.

---

### Key Concepts and Definitions

#### 1. Harmonic Functions

A real-valued function $u(x, y)$ of two real variables $x$ and $y$ is said to be **harmonic** if it possesses continuous second partial derivatives and satisfies Laplace's equation:

$$
\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0
$$

Laplace's equation is a second-order linear partial differential equation. Functions that satisfy it are called harmonic functions.

**Importance:** Harmonic functions appear in steady-state phenomena where there are no sources or sinks, such as:
*   **Electrostatics:** The electric potential in a region free of charges satisfies Laplace's equation.
*   **Fluid Dynamics:** The velocity potential in irrotational fluid flow satisfies Laplace's equation.
*   **Heat Conduction:** The temperature distribution in a steady-state heat problem satisfies Laplace's equation.

#### 2. Harmonic Conjugate

If a function $u(x, y)$ is harmonic, then a function $v(x, y)$ is called a **harmonic conjugate** of $u(x, y)$ if $v(x, y)$ is also harmonic and the function $f(z) = u(x, y) + iv(x, y)$ is an analytic function of $z = x + iy$.

**Relationship with Analytic Functions:**
A key theorem states that if $f(z) = u(x, y) + iv(x, y)$ is an analytic function in a region, then both its real part $u(x, y)$ and its imaginary part $v(x, y)$ are harmonic functions in that region. Furthermore, $u$ and $v$ are harmonic conjugates of each other.

**Cauchy-Riemann Equations:**
For $f(z) = u(x, y) + iv(x, y)$ to be analytic, the Cauchy-Riemann equations must be satisfied:

$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$

These equations provide the fundamental link between the partial derivatives of the real and imaginary parts of an analytic function, and hence between harmonic functions and their conjugates.

---

### Finding the Harmonic Conjugate

Given a harmonic function $u(x, y)$, we want to find its harmonic conjugate $v(x, y)$ such that $f(z) = u(x, y) + iv(x, y)$ is analytic. We can achieve this using the Cauchy-Riemann equations.

**Method 1: Using Partial Derivatives and Integration**

1.  **Verify Harmonicity:** First, confirm that the given function $u(x, y)$ is indeed harmonic by checking if it satisfies Laplace's equation: $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$.
2.  **Use Cauchy-Riemann Equations to find $\frac{\partial v}{\partial x}$ and $\frac{\partial v}{\partial y}$:**
    From the Cauchy-Riemann equations, we have:
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$
    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$
3.  **Integrate to find $v(x, y)$:**
    *   Integrate $\frac{\partial v}{\partial y}$ with respect to $y$ to get an expression for $v(x, y)$. Treat $x$ as a constant during this integration. This will yield an expression of the form $v(x, y) = \phi(x, y) + h(x)$, where $\phi(x, y)$ contains terms dependent on both $x$ and $y$, and $h(x)$ is an arbitrary function of $x$ (the "constant of integration" with respect to $y$).
    *   Alternatively, integrate $\frac{\partial v}{\partial x}$ with respect to $x$ to get an expression for $v(x, y)$. Treat $y$ as a constant. This will yield an expression of the form $v(x, y) = \psi(x, y) + k(y)$, where $\psi(x, y)$ contains terms dependent on both $x$ and $y$, and $k(y)$ is an arbitrary function of $y$.
4.  **Determine the arbitrary function:** To find the specific $v(x, y)$, we use the other Cauchy-Riemann equation.
    *   If you integrated $\frac{\partial v}{\partial y}$, differentiate your expression for $v(x, y)$ with respect to $x$ and equate it to $-\frac{\partial u}{\partial y}$. Solve for $h'(x)$, then integrate to find $h(x)$.
    *   If you integrated $\frac{\partial v}{\partial x}$, differentiate your expression for $v(x, y)$ with respect to $y$ and equate it to $\frac{\partial u}{\partial x}$. Solve for $k'(y)$, then integrate to find $k(y)$.
    *   Combine the integrated terms to get the complete expression for $v(x, y)$. Note that we can usually set the constant of integration for $h(x)$ or $k(y)$ to zero, as $v(x,y)$ is defined up to an additive constant.

**Method 2: Constructing the Analytic Function $f(z)$ Directly**

This method is often more efficient. If $u(x, y)$ is harmonic, we can construct the analytic function $f(z) = u(x, y) + iv(x, y)$ and then identify $v(x, y)$.

1.  **Use Milné-Thomson Method (or a similar technique):**
    The Milné-Thomson method allows us to construct an analytic function $f(z)$ given its real part $u(x, y)$ or imaginary part $v(x, y)$.
    If $u(x, y)$ is known, the steps are:
    *   Replace $y$ with $0$ in $u(x, y)$ to get $u(x, 0)$.
    *   Replace $x$ with $z$ and $y$ with $0$ in $\frac{\partial u}{\partial x}(x, y)$ to get $\frac{\partial u}{\partial x}(z, 0)$.
    *   Replace $x$ with $z$ and $y$ with $0$ in $\frac{\partial u}{\partial y}(x, y)$ to get $\frac{\partial u}{\partial y}(z, 0)$.
    *   The analytic function is given by:
        $$
        f(z) = \int \left( \frac{\partial u}{\partial x}(z, 0) - i \frac{\partial u}{\partial y}(z, 0) \right) dz + C
        $$
        where $C$ is a complex constant.
    *   Once $f(z) = u(x, y) + iv(x, y)$ is found, the harmonic conjugate $v(x, y)$ can be extracted.

**Important Point:** If $v(x, y)$ is a harmonic conjugate of $u(x, y)$, then $u(x, y)$ is a harmonic conjugate of $-v(x, y)$. Also, $v(x, y) + C$ (where $C$ is a real constant) is also a harmonic conjugate of $u(x, y)$.

---

### Examples

#### Example 1: Find the harmonic conjugate of $u(x, y) = x^2 - y^2$.

**Solution:**

1.  **Check Harmonicity:**
    $\frac{\partial u}{\partial x} = 2x$
    $\frac{\partial^2 u}{\partial x^2} = 2$
    $\frac{\partial u}{\partial y} = -2y$
    $\frac{\partial^2 u}{\partial y^2} = -2$
    $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$.
    So, $u(x, y) = x^2 - y^2$ is harmonic.

2.  **Use Cauchy-Riemann Equations:**
    We need to find $v(x, y)$ such that $f(z) = u + iv$ is analytic.
    $\frac{\partial u}{\partial x} = 2x$
    $\frac{\partial u}{\partial y} = -2y$

    From Cauchy-Riemann equations:
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x$
    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y$

3.  **Integrate to find $v(x, y)$:**
    Integrate $\frac{\partial v}{\partial y} = 2x$ with respect to $y$:
    $v(x, y) = \int 2x \, dy = 2xy + h(x)$

4.  **Determine $h(x)$:**
    Differentiate $v(x, y)$ with respect to $x$:
    $\frac{\partial v}{\partial x} = 2y + h'(x)$
    Equate this to the required $\frac{\partial v}{\partial x} = 2y$:
    $2y + h'(x) = 2y$
    $h'(x) = 0$
    Integrate $h'(x)$ to find $h(x)$:
    $h(x) = C_1$ (a constant).

5.  **The Harmonic Conjugate:**
    Substituting $h(x) = C_1$ back into the expression for $v(x, y)$:
    $v(x, y) = 2xy + C_1$
    We can choose $C_1 = 0$ for simplicity. So, the harmonic conjugate is $v(x, y) = 2xy$.

6.  **Construct $f(z)$ (Optional check):**
    $f(z) = u(x, y) + iv(x, y) = (x^2 - y^2) + i(2xy)$
    Since $z = x + iy$, we know that $z^2 = (x + iy)^2 = x^2 + 2ixy + (iy)^2 = x^2 + 2ixy - y^2 = (x^2 - y^2) + i(2xy)$.
    So, $f(z) = z^2$, which is an analytic function. This confirms our result.

#### Example 2: Find the harmonic conjugate of $u(x, y) = e^x \cos y$.

**Solution:**

1.  **Check Harmonicity:**
    $\frac{\partial u}{\partial x} = e^x \cos y$
    $\frac{\partial^2 u}{\partial x^2} = e^x \cos y$
    $\frac{\partial u}{\partial y} = -e^x \sin y$
    $\frac{\partial^2 u}{\partial y^2} = -e^x \cos y$
    $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = e^x \cos y + (-e^x \cos y) = 0$.
    So, $u(x, y) = e^x \cos y$ is harmonic.

2.  **Use Cauchy-Riemann Equations:**
    $\frac{\partial u}{\partial x} = e^x \cos y$
    $\frac{\partial u}{\partial y} = -e^x \sin y$

    From Cauchy-Riemann equations:
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = e^x \cos y$
    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-e^x \sin y) = e^x \sin y$

3.  **Integrate to find $v(x, y)$:**
    Integrate $\frac{\partial v}{\partial y} = e^x \cos y$ with respect to $y$:
    $v(x, y) = \int e^x \cos y \, dy = e^x \sin y + h(x)$

4.  **Determine $h(x)$:**
    Differentiate $v(x, y)$ with respect to $x$:
    $\frac{\partial v}{\partial x} = e^x \sin y + h'(x)$
    Equate this to the required $\frac{\partial v}{\partial x} = e^x \sin y$:
    $e^x \sin y + h'(x) = e^x \sin y$
    $h'(x) = 0$
    Integrate $h'(x)$ to find $h(x)$:
    $h(x) = C_1$ (a constant).

5.  **The Harmonic Conjugate:**
    $v(x, y) = e^x \sin y + C_1$.
    Choosing $C_1 = 0$, the harmonic conjugate is $v(x, y) = e^x \sin y$.

6.  **Construct $f(z)$ (Optional check):**
    $f(z) = u(x, y) + iv(x, y) = e^x \cos y + i e^x \sin y = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.
    Since $e^z$ is analytic, our result is correct.

#### Example 3: Find the harmonic conjugate of $u(x, y) = \ln(x^2 + y^2)$ for $(x, y) \neq (0, 0)$.

**Solution:**

1.  **Check Harmonicity:**
    $\frac{\partial u}{\partial x} = \frac{2x}{x^2 + y^2}$
    $\frac{\partial^2 u}{\partial x^2} = \frac{2(x^2 + y^2) - 2x(2x)}{(x^2 + y^2)^2} = \frac{2x^2 + 2y^2 - 4x^2}{(x^2 + y^2)^2} = \frac{2y^2 - 2x^2}{(x^2 + y^2)^2}$
    $\frac{\partial u}{\partial y} = \frac{2y}{x^2 + y^2}$
    $\frac{\partial^2 u}{\partial y^2} = \frac{2(x^2 + y^2) - 2y(2y)}{(x^2 + y^2)^2} = \frac{2x^2 + 2y^2 - 4y^2}{(x^2 + y^2)^2} = \frac{2x^2 - 2y^2}{(x^2 + y^2)^2}$
    $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{2y^2 - 2x^2}{(x^2 + y^2)^2} + \frac{2x^2 - 2y^2}{(x^2 + y^2)^2} = 0$.
    So, $u(x, y) = \ln(x^2 + y^2)$ is harmonic for $(x, y) \neq (0, 0)$.

2.  **Use Cauchy-Riemann Equations:**
    $\frac{\partial u}{\partial x} = \frac{2x}{x^2 + y^2}$
    $\frac{\partial u}{\partial y} = \frac{2y}{x^2 + y^2}$

    From Cauchy-Riemann equations:
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = \frac{2x}{x^2 + y^2}$
    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -\frac{2y}{x^2 + y^2}$

3.  **Integrate to find $v(x, y)$:**
    Integrate $\frac{\partial v}{\partial y} = \frac{2x}{x^2 + y^2}$ with respect to $y$:
    $v(x, y) = \int \frac{2x}{x^2 + y^2} \, dy$.
    This integral is $\frac{2x}{x^2} \int \frac{1}{1 + (y/x)^2} \, dy$. Let $t = y/x$, so $dt = (1/x) dy$, $dy = x dt$.
    $v(x, y) = 2x \int \frac{1}{x^2 + y^2} \, dy = 2x \cdot \frac{1}{x} \int \frac{1}{1 + (y/x)^2} \, dy = 2 \int \frac{1}{1 + (y/x)^2} \, dy$.
    Using the substitution $y = x \tan \theta$, $dy = x \sec^2 \theta \, d\theta$.
    $v(x, y) = \int \frac{2x}{x^2 + y^2} \, dy = 2x \left[ \frac{1}{x} \arctan\left(\frac{y}{x}\right) \right] + h(x) = 2 \arctan\left(\frac{y}{x}\right) + h(x)$.

    **Alternatively, using partial fractions for integration with respect to $y$ is not straightforward for $\frac{2x}{x^2+y^2}$ as $x$ is not a constant when considering $v(x,y)$ as a function of $x$ and $y$.**

    Let's try integrating $\frac{\partial v}{\partial x} = -\frac{2y}{x^2 + y^2}$ with respect to $x$:
    $v(x, y) = \int -\frac{2y}{x^2 + y^2} \, dx = -2y \left[ \frac{1}{y} \arctan\left(\frac{x}{y}\right) \right] + k(y) = -2 \arctan\left(\frac{x}{y}\right) + k(y)$.

    This seems to suggest $v(x,y)$ could involve $\arctan(y/x)$ and $\arctan(x/y)$. Note that $\arctan(y/x) + \arctan(x/y) = \pi/2$ (or $-\pi/2$) for $x,y \neq 0$.

    Let's go back to $v(x, y) = 2 \arctan\left(\frac{y}{x}\right) + h(x)$.
    Differentiate with respect to $x$:
    $\frac{\partial v}{\partial x} = 2 \cdot \frac{1}{1 + (y/x)^2} \cdot \left(-\frac{y}{x^2}\right) + h'(x) = 2 \cdot \frac{x^2}{x^2 + y^2} \cdot \left(-\frac{y}{x^2}\right) + h'(x) = -\frac{2y}{x^2 + y^2} + h'(x)$.
    Equating this to the required $\frac{\partial v}{\partial x} = -\frac{2y}{x^2 + y^2}$:
    $-\frac{2y}{x^2 + y^2} + h'(x) = -\frac{2y}{x^2 + y^2}$
    $h'(x) = 0$, so $h(x) = C_1$.

    Thus, $v(x, y) = 2 \arctan\left(\frac{y}{x}\right) + C_1$.

    We can also use the polar coordinate representation $z = r e^{i\theta}$, where $x = r \cos \theta$ and $y = r \sin \theta$.
    Then $z^2 = r^2 e^{i2\theta} = r^2 (\cos 2\theta + i \sin 2\theta)$.
    The logarithm of $z$ is $\ln z = \ln r + i\theta$.
    So, $\ln |z|^2 = \ln (r^2) = 2 \ln r$.
    Let $z = x+iy$. Then $z\bar{z} = |z|^2 = x^2+y^2$.
    $\ln(x^2+y^2) = \ln |z|^2 = 2 \ln |z|$.
    If $f(z) = \ln z = \ln r + i\theta$. Then $u(x,y) = \ln r = \ln \sqrt{x^2+y^2} = \frac{1}{2} \ln(x^2+y^2)$. This is not our $u$.

    Consider $f(z) = \ln(z) = \ln(x+iy)$.
    $z = x+iy = r(\cos\theta + i\sin\theta)$.
    $\ln z = \ln r + i\theta$.
    So, $u(x,y) = \ln r = \ln \sqrt{x^2+y^2} = \frac{1}{2} \ln(x^2+y^2)$. This is half of our given $u$.
    The analytic function related to $u(x, y) = \ln(x^2 + y^2)$ is $f(z) = 2 \ln z = 2 (\ln r + i\theta) = 2 \ln r + i(2\theta)$.
    So, $u(x, y) = 2 \ln r = \ln(r^2) = \ln(x^2+y^2)$.
    And $v(x, y) = 2\theta$.
    We know that $\theta = \arctan(y/x)$ for $x>0$, and $\theta = \arctan(y/x) + \pi$ for $x<0$. The function $2 \arctan(y/x)$ is a valid harmonic conjugate for certain domains.

    Let's check $v(x, y) = 2 \arctan\left(\frac{y}{x}\right)$.
    $\frac{\partial v}{\partial y} = 2 \frac{1}{1+(y/x)^2} \cdot \frac{1}{x} = \frac{2}{x} \frac{x^2}{x^2+y^2} = \frac{2x}{x^2+y^2}$. This matches $\frac{\partial u}{\partial x}$.
    $\frac{\partial v}{\partial x} = 2 \frac{1}{1+(y/x)^2} \cdot (-\frac{y}{x^2}) = \frac{2x^2}{x^2+y^2} \cdot (-\frac{y}{x^2}) = -\frac{2y}{x^2+y^2}$. This matches $-\frac{\partial u}{\partial y}$.

    Thus, the harmonic conjugate is $v(x, y) = 2 \arctan\left(\frac{y}{x}\right)$.

    **Note:** The function $\arctan(y/x)$ is multi-valued and its domain depends on the branch cut. However, locally, $2 \arctan(y/x)$ serves as a harmonic conjugate. Another valid conjugate is $2 \arg(z)$.

---

### Practice Questions

1.  **Determine if the function $u(x, y) = x^3 - 3xy^2$ is harmonic. If it is, find its harmonic conjugate $v(x, y)$ and the corresponding analytic function $f(z)$.**
    *   **Answer:**
        *   Harmonicity check:
            $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$, $\frac{\partial^2 u}{\partial x^2} = 6x$
            $\frac{\partial u}{\partial y} = -6xy$, $\frac{\partial^2 u}{\partial y^2} = -6x$
            $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 6x + (-6x) = 0$. $u(x, y)$ is harmonic.
        *   Cauchy-Riemann:
            $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 3x^2 - 3y^2$
            $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-6xy) = 6xy$
        *   Integration:
            Integrate $\frac{\partial v}{\partial y} = 3x^2 - 3y^2$ w.r.t. $y$:
            $v(x, y) = \int (3x^2 - 3y^2) \, dy = 3x^2y - y^3 + h(x)$.
        *   Determine $h(x)$:
            Differentiate $v(x, y)$ w.r.t. $x$: $\frac{\partial v}{\partial x} = 6xy + h'(x)$.
            Equate to $6xy$: $6xy + h'(x) = 6xy \implies h'(x) = 0 \implies h(x) = C_1$.
        *   Harmonic conjugate: $v(x, y) = 3x^2y - y^3$.
        *   Analytic function: $f(z) = u + iv = (x^3 - 3xy^2) + i(3x^2y - y^3) = z^3$.

2.  **Find the harmonic conjugate of $v(x, y) = 2xy$ and the corresponding analytic function $f(z)$ if the imaginary part is given.**
    *   **Answer:**
        *   We are given $v(x, y) = 2xy$.
        *   Cauchy-Riemann:
            $\frac{\partial v}{\partial x} = 2y$, $\frac{\partial v}{\partial y} = 2x$.
            $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} = 2x$
            $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} = -2y$
        *   Integration:
            Integrate $\frac{\partial u}{\partial x} = 2x$ w.r.t. $x$:
            $u(x, y) = \int 2x \, dx = x^2 + h(y)$.
        *   Determine $h(y)$:
            Differentiate $u(x, y)$ w.r.t. $y$: $\frac{\partial u}{\partial y} = h'(y)$.
            Equate to $-2y$: $h'(y) = -2y \implies h(y) = -y^2 + C_1$.
        *   Harmonic conjugate (real part): $u(x, y) = x^2 - y^2$.
        *   Analytic function: $f(z) = u + iv = (x^2 - y^2) + i(2xy) = z^2$.

3.  **Find the harmonic conjugate of $u(x, y) = x^2 - y^2 + 2x$.**
    *   **Answer:**
        *   Harmonicity check:
            $\frac{\partial u}{\partial x} = 2x + 2$, $\frac{\partial^2 u}{\partial x^2} = 2$
            $\frac{\partial u}{\partial y} = -2y$, $\frac{\partial^2 u}{\partial y^2} = -2$
            $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$. $u(x, y)$ is harmonic.
        *   Cauchy-Riemann:
            $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x + 2$
            $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y$
        *   Integration:
            Integrate $\frac{\partial v}{\partial y} = 2x + 2$ w.r.t. $y$:
            $v(x, y) = \int (2x + 2) \, dy = (2x + 2)y + h(x) = 2xy + 2y + h(x)$.
        *   Determine $h(x)$:
            Differentiate $v(x, y)$ w.r.t. $x$: $\frac{\partial v}{\partial x} = 2y + h'(x)$.
            Equate to $2y$: $2y + h'(x) = 2y \implies h'(x) = 0 \implies h(x) = C_1$.
        *   Harmonic conjugate: $v(x, y) = 2xy + 2y$.

---

### Important Points to Remember

*   A function is harmonic if it satisfies Laplace's equation: $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$.
*   If $f(z) = u + iv$ is analytic, then both $u$ and $v$ are harmonic, and they are harmonic conjugates of each other.
*   The Cauchy-Riemann equations are crucial for finding harmonic conjugates: $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
*   When finding $v$ by integration, remember to add an arbitrary function of the other variable (e.g., $h(x)$ when integrating w.r.t. $y$).
*   The harmonic conjugate is unique up to an additive real constant.
*   The Milné-Thomson method is an alternative, often quicker, way to construct the analytic function directly from a harmonic component.

---
