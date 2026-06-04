---
title: "Finding harmonic conjugate"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462ca4"
status: "completed"
scrapedAt: "2026-05-20T17:50:42.951Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Finding Harmonic Conjugate

---

### 1. Introduction to Harmonic Functions and Harmonic Conjugates

**Key Concepts:**

*   **Analytic Function:** A complex function $f(z) = u(x, y) + iv(x, y)$ is analytic in a region if its derivative $f'(z)$ exists at every point in that region.
*   **Cauchy-Riemann Equations:** For an analytic function $f(z) = u(x, y) + iv(x, y)$, the following conditions must be met:
    *   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
    *   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$
*   **Harmonic Function:** A real-valued function $u(x, y)$ is called harmonic if it satisfies Laplace's Equation:
    $$ \nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 $$
*   **Harmonic Conjugate:** If a function $u(x, y)$ is harmonic, its **harmonic conjugate** is a harmonic function $v(x, y)$ such that the complex function $f(z) = u(x, y) + iv(x, y)$ is analytic. Conversely, if $v(x, y)$ is harmonic, its harmonic conjugate is $u(x, y)$ such that $f(z) = u(x, y) + iv(x, y)$ is analytic.

**Importance in Electrical Science and Physical Science:**

Harmonic functions and their conjugates appear in various physical phenomena, including:

*   **Electrostatics:** The electric potential $V(x, y)$ in a region free of charges satisfies Laplace's equation. The conjugate function can represent the electric field lines or stream functions.
*   **Fluid Dynamics:** Stream functions and velocity potentials in irrotational and incompressible fluid flow satisfy Laplace's equation.
*   **Heat Conduction:** Steady-state temperature distributions satisfy Laplace's equation.
*   **Quantum Mechanics:** Certain wave functions can exhibit harmonic properties.

**(Referenced from Kreyszig, 10th ed., Chapter 13: Complex Functions and Their Applications, particularly sections on Analytic Functions and Laplace's Equation.)**

---

### 2. Property: Harmonic Functions Satisfy Laplace's Equation

**Theorem:** If a complex function $f(z) = u(x, y) + iv(x, y)$ is analytic in a region, then both $u(x, y)$ and $v(x, y)$ are harmonic functions in that region.

**Proof Outline:**

Given that $f(z)$ is analytic, the Cauchy-Riemann equations hold:
1.  $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
2.  $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

Assuming $f(z)$ has continuous second partial derivatives (which is true if $f'(z)$ exists and is analytic), we can differentiate these equations further.

Differentiating (1) with respect to $x$ and (2) with respect to $y$:
*   $\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial x \partial y}$
*   $\frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial y \partial x}$

Since $\frac{\partial^2 v}{\partial x \partial y} = \frac{\partial^2 v}{\partial y \partial x}$ (by Clairaut's theorem on mixed partial derivatives, assuming sufficient smoothness), we have:
$$ \frac{\partial^2 u}{\partial x^2} = -\frac{\partial^2 u}{\partial y^2} $$
$$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 $$
Thus, $u(x, y)$ is harmonic.

Similarly, differentiating (1) with respect to $y$ and (2) with respect to $x$:
*   $\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 v}{\partial y^2}$
*   $\frac{\partial^2 u}{\partial x \partial y} = -\frac{\partial^2 v}{\partial x^2}$

Again, using Clairaut's theorem, we get:
$$ \frac{\partial^2 v}{\partial y^2} = -\frac{\partial^2 v}{\partial x^2} $$
$$ \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0 $$
Thus, $v(x, y)$ is also harmonic.

**(Referenced from Zill & Shanahan, 3rd ed., Chapter 2: Analytic Functions, Section 2.3: Harmonic and Conjugate Harmonic Functions.)**

---

### 3. Methods for Finding the Harmonic Conjugate

There are two primary methods to find the harmonic conjugate $v(x, y)$ of a given harmonic function $u(x, y)$, or vice-versa.

#### Method 1: Using the Cauchy-Riemann Equations

This is the most direct method. If $u(x, y)$ is given and is known to be harmonic, we need to find $v(x, y)$ such that:

1.  $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$
2.  $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$

**Steps:**

1.  Calculate the partial derivatives of the given harmonic function $u(x, y)$: $\frac{\partial u}{\partial x}$ and $\frac{\partial u}{\partial y}$.
2.  Use the Cauchy-Riemann equations to express $\frac{\partial v}{\partial y}$ and $\frac{\partial v}{\partial x}$ in terms of these derivatives of $u$.
3.  Integrate $\frac{\partial v}{\partial y}$ with respect to $y$ to obtain an expression for $v(x, y)$. This integration will involve an arbitrary function of $x$, let's call it $g(x)$. So, $v(x, y) = \int \frac{\partial u}{\partial x} dy + g(x)$.
4.  Differentiate the obtained expression for $v(x, y)$ with respect to $x$ and equate it to $-\frac{\partial u}{\partial y}$ from the Cauchy-Riemann equations. This will allow you to find $g'(x)$.
5.  Integrate $g'(x)$ with respect to $x$ to find $g(x)$.
6.  Substitute $g(x)$ back into the expression for $v(x, y)$ to get the harmonic conjugate. The arbitrary constant of integration will be absorbed into $g(x)$.

**Example 1: Find the harmonic conjugate of $u(x, y) = x^2 - y^2$.**

**Step 1: Verify $u(x, y)$ is harmonic.**
*   $\frac{\partial u}{\partial x} = 2x$
*   $\frac{\partial u}{\partial y} = -2y$
*   $\frac{\partial^2 u}{\partial x^2} = 2$
*   $\frac{\partial^2 u}{\partial y^2} = -2$
*   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$.
    So, $u(x, y)$ is harmonic.

**Step 2: Use Cauchy-Riemann equations to find $\frac{\partial v}{\partial y}$ and $\frac{\partial v}{\partial x}$.**
*   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x$
*   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y$

**Step 3: Integrate $\frac{\partial v}{\partial y}$ with respect to $y$.**
$$ v(x, y) = \int (2x) dy = 2xy + g(x) $$

**Step 4: Differentiate $v(x, y)$ with respect to $x$ and equate to $\frac{\partial v}{\partial x}$.**
*   $\frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(2xy + g(x)) = 2y + g'(x)$
*   Equating this to the required $\frac{\partial v}{\partial x} = 2y$:
    $$ 2y + g'(x) = 2y $$
    $$ g'(x) = 0 $$

**Step 5: Integrate $g'(x)$ to find $g(x)$.**
$$ g(x) = \int 0 dx = C $$
where $C$ is an arbitrary constant.

**Step 6: Substitute $g(x)$ back.**
$$ v(x, y) = 2xy + C $$

The harmonic conjugate is $v(x, y) = 2xy + C$. The analytic function is $f(z) = u(x, y) + iv(x, y) = (x^2 - y^2) + i(2xy) + iC$.
We recognize this as $f(z) = (x + iy)^2 + iC = z^2 + iC$.

**(Referenced from Ramana, 39th ed., Chapter 35: Complex Numbers, Section 35.6: Analytic Functions and Harmonic Functions.)**

---

#### Method 2: Using the Formula $f(z) = u(x, y) + iv(x, y)$ and the relationship $f(z) = u(\frac{z+\bar{z}}{2}, \frac{z-\bar{z}}{2}) + i v(\frac{z+\bar{z}}{2}, \frac{z-\bar{z}}{2})$.

A more advanced and often quicker method involves constructing the analytic function $f(z)$ directly, given either $u(x, y)$ or $v(x, y)$.

**If $u(x, y)$ is given:**

**Theorem:** If $u(x, y)$ is harmonic, then $f(z) = u(x, y) + iv(x, y)$ is analytic, and its derivative can be expressed in terms of $z$ as:
$$ f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y} $$
where the partial derivatives of $u$ are evaluated at $(x, y)$ and then $x$ is replaced by $z$ and $y$ by $0$.

**Steps:**

1.  Given the harmonic function $u(x, y)$, find its partial derivatives $\frac{\partial u}{\partial x}$ and $\frac{\partial u}{\partial y}$.
2.  Construct the expression for $f'(z)$ by substituting $x$ with $z$ and $y$ with $0$ in $\frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y}$.
3.  Integrate $f'(z)$ with respect to $z$ to obtain $f(z)$.
4.  From $f(z) = u(x, y) + iv(x, y)$, extract the imaginary part $v(x, y)$.

**Example 2: Find the harmonic conjugate of $u(x, y) = e^x \cos y$.**

**Step 1: Verify $u(x, y)$ is harmonic.**
*   $\frac{\partial u}{\partial x} = e^x \cos y$
*   $\frac{\partial u}{\partial y} = -e^x \sin y$
*   $\frac{\partial^2 u}{\partial x^2} = e^x \cos y$
*   $\frac{\partial^2 u}{\partial y^2} = -e^x \cos y$
*   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = e^x \cos y + (-e^x \cos y) = 0$.
    So, $u(x, y)$ is harmonic.

**Step 2: Construct $f'(z)$.**
*   $\frac{\partial u}{\partial x} = e^x \cos y$
*   $\frac{\partial u}{\partial y} = -e^x \sin y$
*   $f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y} = (e^x \cos y) - i (-e^x \sin y) = e^x \cos y + i e^x \sin y = e^x (\cos y + i \sin y) = e^x e^{iy} = e^{x+iy} = e^z$.

**Step 3: Integrate $f'(z)$ to find $f(z)$.**
$$ f(z) = \int e^z dz = e^z + C_1 $$
where $C_1$ is an arbitrary complex constant. Let $C_1 = C_2 + i C_3$.
$$ f(z) = e^z + C_2 + i C_3 $$

**Step 4: Extract the harmonic conjugate $v(x, y)$.**
*   $f(z) = e^{x+iy} + C_2 + i C_3 = e^x e^{iy} + C_2 + i C_3 = e^x (\cos y + i \sin y) + C_2 + i C_3$
*   $f(z) = (e^x \cos y + C_2) + i (e^x \sin y + C_3)$
*   Comparing with $f(z) = u(x, y) + iv(x, y)$:
    *   $u(x, y) = e^x \cos y + C_2$ (This matches our given $u(x, y)$ if we consider $C_2=0$ initially for finding the conjugate, or if the given $u$ implicitly had a constant.)
    *   $v(x, y) = e^x \sin y + C_3$

The harmonic conjugate of $u(x, y) = e^x \cos y$ is $v(x, y) = e^x \sin y$. (The constant $C_3$ is added to $v$ to maintain analyticity and does not affect its harmonic property.)

**(Referenced from Grewal, 44th ed., Chapter 38: Complex Integration, Section 38.6: Cauchy-Riemann Equations and Their Applications, mentioning harmonic functions.)**

---

**If $v(x, y)$ is given:**

The process is analogous. If $v(x, y)$ is harmonic, we need to find its conjugate $u(x, y)$.

**Theorem:** If $v(x, y)$ is harmonic, then $f(z) = u(x, y) + iv(x, y)$ is analytic, and its derivative can be expressed in terms of $z$ as:
$$ f'(z) = \frac{\partial v}{\partial y} + i \frac{\partial v}{\partial x} $$
where the partial derivatives of $v$ are evaluated at $(x, y)$ and then $x$ is replaced by $z$ and $y$ by $0$.

**Steps:**

1.  Given the harmonic function $v(x, y)$, find its partial derivatives $\frac{\partial v}{\partial y}$ and $\frac{\partial v}{\partial x}$.
2.  Construct the expression for $f'(z)$ by substituting $x$ with $z$ and $y$ with $0$ in $\frac{\partial v}{\partial y} + i \frac{\partial v}{\partial x}$.
3.  Integrate $f'(z)$ with respect to $z$ to obtain $f(z)$.
4.  From $f(z) = u(x, y) + iv(x, y)$, extract the real part $u(x, y)$.

**Example 3: Find the harmonic conjugate of $v(x, y) = \ln(x^2 + y^2)$.**

**Step 1: Verify $v(x, y)$ is harmonic.**
*   $\frac{\partial v}{\partial x} = \frac{2x}{x^2+y^2}$
*   $\frac{\partial v}{\partial y} = \frac{2y}{x^2+y^2}$
*   $\frac{\partial^2 v}{\partial x^2} = \frac{2(x^2+y^2) - 2x(2x)}{(x^2+y^2)^2} = \frac{2x^2+2y^2-4x^2}{(x^2+y^2)^2} = \frac{2y^2-2x^2}{(x^2+y^2)^2}$
*   $\frac{\partial^2 v}{\partial y^2} = \frac{2(x^2+y^2) - 2y(2y)}{(x^2+y^2)^2} = \frac{2x^2+2y^2-4y^2}{(x^2+y^2)^2} = \frac{2x^2-2y^2}{(x^2+y^2)^2}$
*   $\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = \frac{2y^2-2x^2}{(x^2+y^2)^2} + \frac{2x^2-2y^2}{(x^2+y^2)^2} = 0$.
    So, $v(x, y)$ is harmonic.

**Step 2: Construct $f'(z)$.**
*   $\frac{\partial v}{\partial y} = \frac{2y}{x^2+y^2}$
*   $\frac{\partial v}{\partial x} = \frac{2x}{x^2+y^2}$
*   $f'(z) = \frac{\partial v}{\partial y} + i \frac{\partial v}{\partial x} = \frac{2y}{x^2+y^2} + i \frac{2x}{x^2+y^2} = \frac{2(y+ix)}{x^2+y^2} = \frac{2i(x-iy)}{x^2+y^2} = \frac{2i\bar{z}}{|z|^2} = \frac{2i\bar{z}}{z\bar{z}} = \frac{2i}{z}$.

**Step 3: Integrate $f'(z)$ to find $f(z)$.**
$$ f(z) = \int \frac{2i}{z} dz = 2i \ln(z) + C_1 $$
where $C_1$ is an arbitrary complex constant. Let $C_1 = C_2 + i C_3$.
$$ f(z) = 2i \ln(z) + C_2 + i C_3 $$

**Step 4: Extract the harmonic conjugate $u(x, y)$.**
*   Let $z = r e^{i\theta}$. Then $\ln(z) = \ln(r) + i\theta$.
*   $f(z) = 2i (\ln(r) + i\theta) + C_2 + i C_3 = 2i \ln(r) - 2\theta + C_2 + i C_3$
*   $f(z) = (-2\theta + C_2) + i (2 \ln(r) + C_3)$
*   Comparing with $f(z) = u(x, y) + iv(x, y)$:
    *   $u(x, y) = -2\theta + C_2$
    *   $v(x, y) = 2 \ln(r) + C_3$
*   We know that $\theta = \arctan(\frac{y}{x})$ and $r = \sqrt{x^2+y^2}$.
*   So, $u(x, y) = -2 \arctan(\frac{y}{x}) + C_2$.
    The harmonic conjugate of $v(x, y) = \ln(x^2 + y^2)$ is $u(x, y) = -2 \arctan(\frac{y}{x})$.

**(Referenced from Ramana, 39th ed., Chapter 35: Complex Numbers, Section 35.7: Milne-Thomson Method, which is related to constructing analytic functions.)**

---

### 4. Important Points to Remember

*   **Harmonicity is a prerequisite:** Before finding a harmonic conjugate, always verify that the given function is indeed harmonic by checking if it satisfies Laplace's equation.
*   **Uniqueness of the Harmonic Conjugate:** For a given harmonic function $u(x, y)$, its harmonic conjugate $v(x, y)$ is unique up to an additive constant. Similarly, for a given harmonic $v(x, y)$, its conjugate $u(x, y)$ is unique up to an additive constant.
*   **Relationship with Analytic Functions:** The existence of a harmonic conjugate is directly linked to the analyticity of the complex function $f(z) = u + iv$. If $u$ and $v$ are harmonic conjugates, then $f(z)$ is analytic.
*   **Practical Applications:** Understanding harmonic conjugates is crucial for solving problems in electrostatics, fluid mechanics, heat transfer, and other areas where Laplace's equation governs the physical phenomena.
*   **Method 2 is often more efficient:** Constructing $f'(z)$ and integrating it is generally faster than the integration-by-parts method when dealing with complex functions.
*   **Cauchy-Riemann Equations:** Always keep the Cauchy-Riemann equations ($\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ and $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$) in mind, as they are fundamental to this topic.

---

### 5. Practice Questions and Answers

**Question 1:**
Determine if $u(x, y) = x^3 - 3xy^2$ is harmonic. If it is, find its harmonic conjugate.

**Answer:**
1.  **Harmonicity Check:**
    *   $\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
    *   $\frac{\partial u}{\partial y} = -6xy$
    *   $\frac{\partial^2 u}{\partial x^2} = 6x$
    *   $\frac{\partial^2 u}{\partial y^2} = -6x$
    *   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 6x + (-6x) = 0$.
        Yes, $u(x, y)$ is harmonic.

2.  **Finding the Harmonic Conjugate (Method 1):**
    *   $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 3x^2 - 3y^2$
    *   $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-6xy) = 6xy$
    *   Integrate $\frac{\partial v}{\partial y}$ with respect to $y$:
        $v(x, y) = \int (3x^2 - 3y^2) dy = 3x^2y - y^3 + g(x)$
    *   Differentiate $v(x, y)$ with respect to $x$:
        $\frac{\partial v}{\partial x} = 6xy + g'(x)$
    *   Equate to the required $\frac{\partial v}{\partial x} = 6xy$:
        $6xy + g'(x) = 6xy \implies g'(x) = 0 \implies g(x) = C$
    *   Thus, $v(x, y) = 3x^2y - y^3 + C$.

**Question 2:**
Find the harmonic conjugate of $v(x, y) = 2xy$.

**Answer:**
1.  **Harmonicity Check:**
    *   $\frac{\partial v}{\partial x} = 2y$
    *   $\frac{\partial v}{\partial y} = 2x$
    *   $\frac{\partial^2 v}{\partial x^2} = 0$
    *   $\frac{\partial^2 v}{\partial y^2} = 0$
    *   $\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0 + 0 = 0$.
        Yes, $v(x, y)$ is harmonic.

2.  **Finding the Harmonic Conjugate (Method 1):**
    *   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} = 2x$
    *   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} = -(2y) = -2y$
    *   Integrate $\frac{\partial u}{\partial x}$ with respect to $x$:
        $u(x, y) = \int (2x) dx = x^2 + h(y)$
    *   Differentiate $u(x, y)$ with respect to $y$:
        $\frac{\partial u}{\partial y} = 0 + h'(y)$
    *   Equate to the required $\frac{\partial u}{\partial y} = -2y$:
        $h'(y) = -2y \implies h(y) = -y^2 + C$
    *   Thus, $u(x, y) = x^2 - y^2 + C$.

**Question 3:**
Given $u(x, y) = \sin x \cosh y$, find its harmonic conjugate.

**Answer:**
1.  **Harmonicity Check:**
    *   $\frac{\partial u}{\partial x} = \cos x \cosh y$
    *   $\frac{\partial u}{\partial y} = \sin x \sinh y$
    *   $\frac{\partial^2 u}{\partial x^2} = -\sin x \cosh y$
    *   $\frac{\partial^2 u}{\partial y^2} = \sin x \cosh y$
    *   $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = -\sin x \cosh y + \sin x \cosh y = 0$.
        Yes, $u(x, y)$ is harmonic.

2.  **Finding the Harmonic Conjugate (Method 2):**
    *   $\frac{\partial u}{\partial x} = \cos x \cosh y$
    *   $\frac{\partial u}{\partial y} = \sin x \sinh y$
    *   $f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y} = (\cos x \cosh y) - i (\sin x \sinh y)$
    *   Substitute $x=z, y=0$:
        $f'(z) = (\cos z \cosh 0) - i (\sin z \sinh 0) = (\cos z \cdot 1) - i (\sin z \cdot 0) = \cos z$
    *   Integrate $f'(z)$:
        $f(z) = \int \cos z dz = \sin z + C_1$
    *   $f(z) = \sin(x+iy) + C_1 = \sin x \cos(iy) + \cos x \sin(iy) + C_1$
    *   Using $\cos(iy) = \cosh y$ and $\sin(iy) = i \sinh y$:
        $f(z) = \sin x \cosh y + \cos x (i \sinh y) + C_1 = (\sin x \cosh y) + i (\cos x \sinh y) + C_1$
    *   Let $C_1 = C_2 + i C_3$.
    *   $f(z) = (\sin x \cosh y + C_2) + i (\cos x \sinh y + C_3)$
    *   The harmonic conjugate is $v(x, y) = \cos x \sinh y + C_3$.

---

### 6. Connection to Course Outcomes

This topic directly supports:

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.**
    *   Finding harmonic conjugates is a key step in constructing analytic functions, which are fundamental for conformal mapping. The existence of a harmonic conjugate guarantees analyticity.
    *   **Knowledge Level: K3** (Applying the concept of analyticity derived from harmonic properties).

---
This study note aims to provide a comprehensive understanding of finding harmonic conjugates, a crucial concept in complex function theory with wide-ranging applications in electrical and physical sciences.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
