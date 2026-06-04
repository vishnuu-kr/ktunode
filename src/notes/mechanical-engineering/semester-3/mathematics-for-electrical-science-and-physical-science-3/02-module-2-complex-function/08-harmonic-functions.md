---
title: "Harmonic functions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462ca3"
status: "completed"
scrapedAt: "2026-05-20T17:50:42.241Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 2: Complex Functions

### Topic: Harmonic Functions

---

### **1. Introduction to Harmonic Functions**

Harmonic functions are real-valued functions of two variables that satisfy Laplace's equation. They play a crucial role in various fields of physics and engineering, including electrostatics, fluid dynamics, heat conduction, and potential theory. In the context of complex analysis, harmonic functions are intimately related to analytic functions.

**Key Concept:** A real-valued function $u(x, y)$ of two real variables $x$ and $y$ is called **harmonic** in a domain $D$ if it has continuous second partial derivatives in $D$ and satisfies Laplace's equation:

$$ \nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 $$

The operator $\nabla^2$ is called the **Laplacian operator**.

---

### **2. Relationship between Analytic Functions and Harmonic Functions**

This section directly addresses the connection between complex functions and harmonic functions, which is fundamental to understanding their applications.

**Key Concept:** If a complex function $f(z) = u(x, y) + iv(x, y)$ is analytic in a domain $D$, then both its real part $u(x, y)$ and its imaginary part $v(x, y)$ are harmonic functions in $D$.

**Proof:**
If $f(z)$ is analytic, it satisfies the Cauchy-Riemann equations:
$$ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad (1) $$
$$ \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \quad (2) $$

Differentiating (1) with respect to $x$ gives:
$$ \frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial x \partial y} $$

Differentiating (2) with respect to $y$ gives:
$$ \frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial y \partial x} $$

Since $f(z)$ is analytic, its partial derivatives of all orders are continuous. Therefore, by Clairaut's theorem (or Schwarz's theorem), the mixed partial derivatives are equal: $\frac{\partial^2 v}{\partial x \partial y} = \frac{\partial^2 v}{\partial y \partial x}$.

Adding the two equations for $\frac{\partial^2 u}{\partial x^2}$ and $\frac{\partial^2 u}{\partial y^2}$:
$$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{\partial^2 v}{\partial x \partial y} - \frac{\partial^2 v}{\partial y \partial x} = 0 $$
Thus, $u(x, y)$ is harmonic.

Similarly, we can show that $v(x, y)$ is harmonic. Differentiating (1) with respect to $y$:
$$ \frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 v}{\partial y^2} $$
Differentiating (2) with respect to $x$:
$$ \frac{\partial^2 u}{\partial x \partial y} = -\frac{\partial^2 v}{\partial x^2} $$
From the first equation, $\frac{\partial^2 v}{\partial y^2} = \frac{\partial^2 u}{\partial y \partial x}$.
From the second equation, $-\frac{\partial^2 v}{\partial x^2} = \frac{\partial^2 u}{\partial x \partial y}$. Since $\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 u}{\partial x \partial y}$, we have $\frac{\partial^2 v}{\partial y^2} = -\frac{\partial^2 v}{\partial x^2}$, which means $\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$.
Thus, $v(x, y)$ is harmonic.

**Important Point:** The converse is not always true. A harmonic function does not necessarily have a harmonic conjugate, and if it does, the corresponding complex function might not be analytic. However, if a harmonic function $u(x, y)$ has a harmonic conjugate $v(x, y)$, then $f(z) = u(x, y) + iv(x, y)$ will be analytic in the domain where these functions are defined and differentiable.

---

### **3. Harmonic Conjugates**

The imaginary part of an analytic function is called the **harmonic conjugate** of its real part, and vice versa.

**Definition:** If $u(x, y)$ and $v(x, y)$ are harmonic in a domain $D$, and $f(z) = u(x, y) + iv(x, y)$ is analytic in $D$, then $v$ is called a **harmonic conjugate** of $u$, and $u$ is called a **harmonic conjugate** of $v$.

**How to find a Harmonic Conjugate (Method 1: Using Cauchy-Riemann Equations):**
Given a harmonic function $u(x, y)$, we can find its harmonic conjugate $v(x, y)$ by using the Cauchy-Riemann equations:
$$ \frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} $$
$$ \frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} $$
We can integrate these equations to find $v(x, y)$.

**Example:** Let $u(x, y) = x^2 - y^2$.
First, check if $u$ is harmonic:
$$ \frac{\partial u}{\partial x} = 2x, \quad \frac{\partial^2 u}{\partial x^2} = 2 $$
$$ \frac{\partial u}{\partial y} = -2y, \quad \frac{\partial^2 u}{\partial y^2} = -2 $$
$$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0 $$
So, $u(x, y)$ is harmonic.

Now, find $v(x, y)$ using Cauchy-Riemann equations:
$$ \frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 2x \quad \Rightarrow \quad v(x, y) = \int 2x \, dy = 2xy + g(x) $$
$$ \frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-2y) = 2y $$
Differentiating $v(x, y) = 2xy + g(x)$ with respect to $x$:
$$ \frac{\partial v}{\partial x} = 2y + g'(x) $$
Equating this with $2y$:
$$ 2y + g'(x) = 2y \quad \Rightarrow \quad g'(x) = 0 \quad \Rightarrow \quad g(x) = C $$
where $C$ is an arbitrary constant.
Thus, $v(x, y) = 2xy + C$.

The corresponding analytic function is $f(z) = u(x, y) + iv(x, y) = (x^2 - y^2) + i(2xy + C)$.
We know that $z = x + iy$, so $z^2 = (x+iy)^2 = x^2 - y^2 + 2ixy$.
Thus, $f(z) = z^2 + iC$. If we choose $C=0$, then $f(z) = z^2$, which is indeed analytic.

**How to find a Harmonic Conjugate (Method 2: Using Milne-Thomson Method):**
If $u(x, y)$ is harmonic, we can find an analytic function $f(z)$ such that $\text{Re}(f(z)) = u(x, y)$ and then extract the imaginary part.

We know that if $f(z) = u(x, y) + iv(x, y)$ is analytic, then $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$.
Using Cauchy-Riemann equations, $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$.
So, $f'(z) = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y}$.

To use the Milne-Thomson method, we substitute $x = z$ and $y = 0$ into $\frac{\partial u}{\partial x}(x, y)$ and $\frac{\partial u}{\partial y}(x, y)$. Let's call these $\phi(z)$ and $\psi(z)$ respectively.
Then, $f'(z) = \phi(z) - i \psi(z)$.
We can then integrate $f'(z)$ with respect to $z$ to find $f(z)$.
$f(z) = \int f'(z) \, dz$.
Finally, $v(x, y) = \text{Im}(f(z))$.

**Example (using Milne-Thomson Method):** Let $u(x, y) = x^2 - y^2$.
We found that $u(x, y)$ is harmonic.
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial u}{\partial y} = -2y$

Now, substitute $x=z, y=0$:
$\phi(z) = 2z$
$\psi(z) = -2(0) = 0$

So, $f'(z) = \phi(z) - i \psi(z) = 2z - i(0) = 2z$.

Integrate $f'(z)$:
$f(z) = \int 2z \, dz = z^2 + C_1$, where $C_1$ is a complex constant.
Let $C_1 = iC$ (since $u$ doesn't contain any constant term, and $v$ can have an arbitrary constant).
$f(z) = z^2 + iC$.

$f(z) = (x+iy)^2 + iC = x^2 - y^2 + 2ixy + iC = (x^2 - y^2) + i(2xy + C)$.
The real part is $u(x, y) = x^2 - y^2$, and the imaginary part is $v(x, y) = 2xy + C$. This matches our previous result.

**Reference:** This concept is covered in detail in Kreyszig's "Advanced Engineering Mathematics" (Chapter 14: Complex Analysis) and Zill & Shanahan's "Complex Analysis" (Chapter 9: Conformal Mapping and Applications, which discusses harmonic functions and conjugates).

---

### **4. Properties of Harmonic Functions**

**1. Mean Value Property:**
If $u(x, y)$ is harmonic in a domain $D$, then for any circle $|z - z_0| = r$ lying entirely within $D$, the average value of $u$ on the circle is equal to the value of $u$ at the center $z_0$.

$$ u(x_0, y_0) = \frac{1}{2\pi} \int_0^{2\pi} u(x_0 + r\cos\theta, y_0 + r\sin\theta) \, d\theta $$

This property is analogous to the mean value property for analytic functions.

**2. Maximum Modulus Principle (for harmonic functions):**
If $u(x, y)$ is harmonic in a domain $D$ and is not constant, then $|u(x, y)|$ has no maximum value in $D$. If $D$ is bounded and closed, then the maximum and minimum values of $u(x, y)$ occur on the boundary of $D$.

**3. Uniqueness Property:**
If two harmonic functions $u_1(x, y)$ and $u_2(x, y)$ are equal on the boundary of a region $D$, then $u_1(x, y) = u_2(x, y)$ throughout $D$. This is particularly useful in solving boundary value problems.

---

### **5. Applications of Harmonic Functions**

Harmonic functions are fundamental in solving various physical problems.

*   **Electrostatics:** The electric potential $\phi$ in a charge-free region satisfies Laplace's equation $\nabla^2 \phi = 0$. The real and imaginary parts of an analytic function can represent the electric potential and the electric field lines (or stream functions).

*   **Fluid Dynamics:** For an inviscid, incompressible, and irrotational fluid, the velocity potential $\phi$ satisfies Laplace's equation. The stream function $\psi$ also satisfies Laplace's equation. The complex potential $F(z) = \phi + i\psi$ is an analytic function.

*   **Heat Conduction:** In a steady-state heat conduction problem with no heat sources, the temperature distribution $T(x, y)$ satisfies Laplace's equation $\nabla^2 T = 0$.

*   **Potential Theory:** Harmonic functions are the building blocks of potential theory, which studies the properties of potential fields.

**Example (Electrostatics):** Consider the complex potential $f(z) = z^2$. We found $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.
If $u(x, y)$ represents the electric potential, then $u(x, y) = x^2 - y^2$ satisfies Laplace's equation. The electric field lines are given by $v(x, y) = 2xy = C$. These are hyperbolas. The equipotential lines are given by $u(x, y) = x^2 - y^2 = K$, which are also hyperbolas, but oriented differently.

---

### **6. Learning Outcome Alignment**

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.** (Knowledge Level: K3)
    *   While this module directly focuses on complex functions and harmonic functions, understanding harmonic functions is a prerequisite for many advanced topics in signal processing and Fourier analysis where Fourier transforms are applied. For instance, solving certain boundary value problems using separation of variables often leads to solving differential equations whose solutions involve Fourier series/transforms. Laplace's equation itself is a linear partial differential equation, and Fourier transform techniques are powerful tools for solving such equations. For example, in physics, solutions to the heat equation or wave equation are often expressed using Fourier analysis, and these equations are related to Laplace's equation in specific contexts (e.g., steady-state cases).

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.** (Knowledge Level: K3)
    *   This module directly supports CO2 by establishing the crucial link between analytic functions and harmonic functions. The property that the real and imaginary parts of an analytic function are harmonic is a fundamental concept. Conformal mappings, which are based on analytic functions, are used to transform physical domains. Since harmonic functions model physical quantities (like temperature or potential), understanding their behavior under conformal mappings is essential. For example, a temperature distribution in a complex shape can be mapped to a simpler shape using conformal mapping, and the temperature in the new shape will also be harmonic.

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.** (Knowledge Level: K3)
    *   This module provides the theoretical foundation for understanding why certain functions behave in specific ways, which is often a prerequisite or complementary knowledge for complex integration. For instance, knowing that the real and imaginary parts of an analytic function are harmonic helps in understanding the properties of the analytic function itself, which are then used in Cauchy's integral theorems. While not a direct application, the study of analytic functions is directly linked to complex integration.

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.** (Knowledge Level: K3)
    *   Similar to CO3, this module builds the foundational understanding of analytic functions. The behavior of functions around singularities is crucial for Laurent series expansions and the residue theorem. Harmonic functions represent the real parts of such analytic functions. Understanding the properties of these analytic functions, including their harmonic components, is part of a comprehensive understanding of complex analysis.

---

### **7. Practice Questions and Answers**

**Question 1:**
Verify that the function $u(x, y) = e^x \cos y$ is harmonic. Find its harmonic conjugate $v(x, y)$ and the corresponding analytic function $f(z)$.

**Answer 1:**
Check if $u(x, y)$ is harmonic:
$$ \frac{\partial u}{\partial x} = e^x \cos y, \quad \frac{\partial^2 u}{\partial x^2} = e^x \cos y $$
$$ \frac{\partial u}{\partial y} = -e^x \sin y, \quad \frac{\partial^2 u}{\partial y^2} = -e^x \cos y $$
$$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = e^x \cos y + (-e^x \cos y) = 0 $$
So, $u(x, y)$ is harmonic.

Find $v(x, y)$ using Cauchy-Riemann equations:
$$ \frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = e^x \cos y \quad \Rightarrow \quad v(x, y) = \int e^x \cos y \, dy = e^x \sin y + g(x) $$
$$ \frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-e^x \sin y) = e^x \sin y $$
Differentiating $v(x, y) = e^x \sin y + g(x)$ with respect to $x$:
$$ \frac{\partial v}{\partial x} = e^x \sin y + g'(x) $$
Equating this with $e^x \sin y$:
$$ e^x \sin y + g'(x) = e^x \sin y \quad \Rightarrow \quad g'(x) = 0 \quad \Rightarrow \quad g(x) = C $$
Thus, $v(x, y) = e^x \sin y + C$.

The corresponding analytic function is $f(z) = u(x, y) + iv(x, y) = e^x \cos y + i(e^x \sin y + C)$.
We know that $e^z = e^{x+iy} = e^x e^{iy} = e^x (\cos y + i \sin y) = e^x \cos y + i e^x \sin y$.
So, $f(z) = e^z + iC$.

**Question 2:**
Show that if $f(z) = \log z$, then its real part $u(x, y) = \ln |z|$ is harmonic for $z \neq 0$. Find its harmonic conjugate $v(x, y)$.

**Answer 2:**
$f(z) = \log z = \ln |z| + i \text{Arg}(z)$.
Let $z = x + iy$. Then $|z| = \sqrt{x^2 + y^2}$.
$u(x, y) = \ln |z| = \ln (\sqrt{x^2 + y^2}) = \frac{1}{2} \ln (x^2 + y^2)$.

Check if $u(x, y)$ is harmonic:
$$ \frac{\partial u}{\partial x} = \frac{1}{2} \frac{2x}{x^2 + y^2} = \frac{x}{x^2 + y^2} $$
$$ \frac{\partial^2 u}{\partial x^2} = \frac{(x^2 + y^2)(1) - x(2x)}{(x^2 + y^2)^2} = \frac{x^2 + y^2 - 2x^2}{(x^2 + y^2)^2} = \frac{y^2 - x^2}{(x^2 + y^2)^2} $$
$$ \frac{\partial u}{\partial y} = \frac{1}{2} \frac{2y}{x^2 + y^2} = \frac{y}{x^2 + y^2} $$
$$ \frac{\partial^2 u}{\partial y^2} = \frac{(x^2 + y^2)(1) - y(2y)}{(x^2 + y^2)^2} = \frac{x^2 + y^2 - 2y^2}{(x^2 + y^2)^2} = \frac{x^2 - y^2}{(x^2 + y^2)^2} $$
$$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{y^2 - x^2}{(x^2 + y^2)^2} + \frac{x^2 - y^2}{(x^2 + y^2)^2} = 0 $$
So, $u(x, y)$ is harmonic for $z \neq 0$.

Find $v(x, y)$ using Cauchy-Riemann equations:
$$ \frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = \frac{x}{x^2 + y^2} \quad \Rightarrow \quad v(x, y) = \int \frac{x}{x^2 + y^2} \, dy $$
Let $y = r \sin \theta$ and $x = r \cos \theta$. Here, we are using polar coordinates for integration perspective, but we need to integrate with respect to $y$.
Consider $x$ as a constant for integration with respect to $y$.
$v(x, y) = x \int \frac{1}{x^2 + y^2} \, dy$. This is an arctan integral.
$$ v(x, y) = x \cdot \frac{1}{x} \arctan\left(\frac{y}{x}\right) + g(x) = \arctan\left(\frac{y}{x}\right) + g(x) $$
We know that $\text{Arg}(z) = \arctan\left(\frac{y}{x}\right)$ for $-\frac{\pi}{2} < \frac{y}{x} < \frac{\pi}{2}$ (i.e., for $x > 0$).

Now, use the second Cauchy-Riemann equation:
$$ \frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -\frac{y}{x^2 + y^2} $$
Differentiating $v(x, y) = \arctan\left(\frac{y}{x}\right) + g(x)$ with respect to $x$:
$$ \frac{\partial v}{\partial x} = \frac{1}{1 + (y/x)^2} \cdot \left(-\frac{y}{x^2}\right) + g'(x) = \frac{x^2}{x^2 + y^2} \cdot \left(-\frac{y}{x^2}\right) + g'(x) = -\frac{y}{x^2 + y^2} + g'(x) $$
Equating this with $-\frac{y}{x^2 + y^2}$:
$$ -\frac{y}{x^2 + y^2} + g'(x) = -\frac{y}{x^2 + y^2} \quad \Rightarrow \quad g'(x) = 0 \quad \Rightarrow \quad g(x) = C $$
Thus, $v(x, y) = \arctan\left(\frac{y}{x}\right) + C$. This is the argument of $z$, $\text{Arg}(z)$.
For $f(z) = \log z$, the imaginary part is $\text{Arg}(z)$, which we often denote as $\theta$.

**Question 3:**
If $u(x, y) = x^3 - 3xy^2$ is harmonic, find its harmonic conjugate $v(x, y)$ and form the analytic function $f(z) = u + iv$.

**Answer 3:**
Check if $u(x, y)$ is harmonic:
$$ \frac{\partial u}{\partial x} = 3x^2 - 3y^2, \quad \frac{\partial^2 u}{\partial x^2} = 6x $$
$$ \frac{\partial u}{\partial y} = -6xy, \quad \frac{\partial^2 u}{\partial y^2} = -6x $$
$$ \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 6x + (-6x) = 0 $$
So, $u(x, y)$ is harmonic.

Find $v(x, y)$ using Cauchy-Riemann equations:
$$ \frac{\partial v}{\partial y} = \frac{\partial u}{\partial x} = 3x^2 - 3y^2 \quad \Rightarrow \quad v(x, y) = \int (3x^2 - 3y^2) \, dy = 3x^2 y - y^3 + g(x) $$
$$ \frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} = -(-6xy) = 6xy $$
Differentiating $v(x, y) = 3x^2 y - y^3 + g(x)$ with respect to $x$:
$$ \frac{\partial v}{\partial x} = 6xy + g'(x) $$
Equating this with $6xy$:
$$ 6xy + g'(x) = 6xy \quad \Rightarrow \quad g'(x) = 0 \quad \Rightarrow \quad g(x) = C $$
Thus, $v(x, y) = 3x^2 y - y^3 + C$.

The corresponding analytic function is $f(z) = u(x, y) + iv(x, y) = (x^3 - 3xy^2) + i(3x^2 y - y^3 + C)$.
We know that $z^3 = (x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = x^3 + 3ix^2y - 3xy^2 - iy^3$.
$z^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$.
So, $f(z) = z^3 + iC$.

---

### **8. Important Points to Remember**

*   A function $u(x, y)$ is harmonic if it satisfies Laplace's equation: $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$.
*   If $f(z) = u + iv$ is analytic, then both $u$ and $v$ are harmonic.
*   The real and imaginary parts of an analytic function are called harmonic conjugates of each other.
*   Harmonic functions satisfy the mean value property and the maximum/minimum modulus principle.
*   Harmonic functions are crucial for modeling physical phenomena in electrostatics, fluid dynamics, and heat transfer.
*   The Milne-Thomson method is a useful technique for finding an analytic function when its harmonic real part is known.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### **9. Further Reading and References**

*   **Kreyszig, Erwin.** *Advanced Engineering Mathematics*. John Wiley & Sons, 10th edition, 2016. (Chapter 14: Complex Analysis)
*   **Zill, Dennis G., and Patrick D. Shanahan.** *Complex Analysis*. Jones & Bartlett, 3rd edition, 2015. (Chapter 9: Conformal Mapping and Applications)
*   **Ramana, B. V.** *Higher Engineering Mathematics*. McGraw-Hill Education, 39th edition, 2023. (Relevant chapters on Complex Variables)
*   **Grewal, B.S.** *Higher Engineering Mathematics*. Khanna Publishers, 44th edition, 2018. (Relevant chapters on Complex Variables)

This comprehensive study note covers the definition, properties, and applications of harmonic functions within the context of complex analysis, aligning with the learning outcomes and course objectives.