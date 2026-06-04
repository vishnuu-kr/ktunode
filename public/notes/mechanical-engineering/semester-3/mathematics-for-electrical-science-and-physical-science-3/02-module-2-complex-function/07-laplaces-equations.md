---
title: "Laplace’s Equations"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462ca2"
status: "completed"
scrapedAt: "2026-05-20T17:50:41.531Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

**Module 2: Complex Functions**

**Topic: Laplace's Equations**

---

### **1. Introduction to Laplace's Equations in the Context of Complex Functions**

While the term "Laplace's Equation" is primarily associated with partial differential equations (PDEs) describing potential fields (like electrostatics, fluid flow, heat distribution), its connection to complex functions in this module likely stems from:

*   **Harmonic Functions:** Solutions to Laplace's equation are called harmonic functions. Complex analytic functions have a strong relationship with harmonic functions, as their real and imaginary parts are harmonic.
*   **Applications in Physics and Engineering:** Many physical phenomena that can be modeled by Laplace's equation can be analyzed using complex variable methods, particularly in 2D.

**Key Concept:** A function $u(x, y)$ is **harmonic** if it satisfies Laplace's equation:

$\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$

**Connection to Complex Functions:**

If $f(z) = u(x, y) + i v(x, y)$ is an analytic function of $z = x + iy$, then both $u(x, y)$ and $v(x, y)$ are harmonic functions. This is a fundamental result derived from the Cauchy-Riemann equations.

**Learning Outcome 1: Understand the analyticity of complex functions and apply it in conformal mapping.**

*   **Analyticity:** A complex function $f(z)$ is analytic at a point $z_0$ if it is differentiable not only at $z_0$ but also in some neighborhood around $z_0$.
*   **Cauchy-Riemann Equations:** For $f(z) = u(x, y) + i v(x, y)$ to be analytic, the following conditions must be met:
    *   $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
    *   $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

*   **Harmonic Conjugate:** If $u(x, y)$ is harmonic, then its harmonic conjugate $v(x, y)$ is such that $f(z) = u(x, y) + iv(x, y)$ is analytic.

**Example 1:**

Let $f(z) = z^2$.
$z = x + iy$
$f(z) = (x + iy)^2 = x^2 - y^2 + 2ixy$
So, $u(x, y) = x^2 - y^2$ and $v(x, y) = 2xy$.

Let's check if $u(x, y)$ is harmonic:
$\frac{\partial u}{\partial x} = 2x$
$\frac{\partial^2 u}{\partial x^2} = 2$
$\frac{\partial u}{\partial y} = -2y$
$\frac{\partial^2 u}{\partial y^2} = -2$

$\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 2 + (-2) = 0$.
Thus, $u(x, y) = x^2 - y^2$ is harmonic.

Similarly, let's check if $v(x, y)$ is harmonic:
$\frac{\partial v}{\partial x} = 2y$
$\frac{\partial^2 v}{\partial x^2} = 0$
$\frac{\partial v}{\partial y} = 2x$
$\frac{\partial^2 v}{\partial y^2} = 0$

$\nabla^2 v = \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0 + 0 = 0$.
Thus, $v(x, y) = 2xy$ is harmonic.

**Example 2:**

Find the harmonic conjugate of $u(x, y) = x^3 - 3xy^2$.
First, check if $u(x, y)$ is harmonic:
$\frac{\partial u}{\partial x} = 3x^2 - 3y^2$
$\frac{\partial^2 u}{\partial x^2} = 6x$
$\frac{\partial u}{\partial y} = -6xy$
$\frac{\partial^2 u}{\partial y^2} = -6x$
$\nabla^2 u = 6x + (-6x) = 0$. $u(x, y)$ is harmonic.

Now, find $v(x, y)$ using Cauchy-Riemann equations:
$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 3x^2 - 3y^2 = \frac{\partial v}{\partial y}$
Integrating with respect to $y$:
$v(x, y) = \int (3x^2 - 3y^2) dy = 3x^2y - y^3 + g(x)$

Now, use the second Cauchy-Riemann equation:
$\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$
$-6xy = - \frac{\partial}{\partial x} (3x^2y - y^3 + g(x))$
$-6xy = - (6xy + g'(x))$
$-6xy = -6xy - g'(x)$
$g'(x) = 0 \implies g(x) = C$ (a constant)

So, $v(x, y) = 3x^2y - y^3 + C$.
The corresponding analytic function is $f(z) = (x^3 - 3xy^2) + i (3x^2y - y^3 + C)$.
We can observe this is $f(z) = z^3 + iC$.

**Important Point to Remember:** The real and imaginary parts of an analytic function are harmonic. Conversely, given a harmonic function, its harmonic conjugate can be found, and together they form an analytic function. This is crucial for solving boundary value problems in physics.

**Course Outcome Alignment:** This section directly addresses **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.** The relationship between analyticity and harmonic functions is foundational.

---

### **2. Laplace's Equation in Different Coordinate Systems (Brief Mention)**

While this module focuses on complex functions (Cartesian $x, y$ coordinates), it's worth noting that Laplace's equation can be expressed in other coordinate systems relevant to physical sciences:

*   **Polar Coordinates:** For a function $u(r, \theta)$, Laplace's equation is:
    $\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u}{\partial r}\right) + \frac{1}{r^2}\frac{\partial^2 u}{\partial \theta^2} = 0$

    Complex functions can be mapped to polar coordinates using $z = re^{i\theta}$. This is particularly useful for problems with circular symmetry and for understanding conformal mappings.

**Reference:** Kreyszig's "Advanced Engineering Mathematics" provides detailed discussions on Laplace's equation in various coordinate systems.

---

### **3. Applications of Complex Functions to Solve Laplace's Equations**

The power of complex analysis lies in its ability to transform complex geometries and boundary conditions into simpler ones, making them solvable. This is achieved through conformal mappings.

**Learning Outcome 1 (Continued): Apply it in conformal mapping.**

*   **Conformal Mapping:** A mapping $w = f(z)$ is conformal at a point $z_0$ if it preserves angles (both magnitude and orientation) between intersecting curves passing through $z_0$. A function is conformal in a region if it is analytic in that region and $f'(z) \neq 0$.

**How Conformal Mapping Helps:**

1.  **Transformation of Domains:** A complex domain $\mathcal{D}$ in the $z$-plane (with complicated boundary conditions) can be mapped conformally to a simpler domain $\mathcal{D}'$ in the $w$-plane (e.g., a half-plane, a strip, a disk) where the Laplace equation is easier to solve.
2.  **Transformation of Harmonic Functions:** If $u(x, y)$ is harmonic in the $z$-plane, and $w = f(z)$ is a conformal mapping, then the corresponding function $\phi(u, v) = u(x(u, v), y(u, v))$ in the $w$-plane is also harmonic.

**Example: Mapping the Upper Half-Plane to a Unit Disk**

Consider the problem of finding a harmonic function $u(x, y)$ in the upper half-plane ($y > 0$) satisfying certain boundary conditions on the real axis.
This domain can be mapped to the unit disk in the $w$-plane using a Mobius transformation. For example, the Joukowsky transformation or simpler linear fractional transformations can achieve this.

Let's say we map the upper half-plane ($y > 0$) to the interior of the unit disk ($|\xi| < 1$) using a transformation $w = g(z)$. If we find a harmonic function $\psi(\xi, \eta)$ in the disk satisfying transformed boundary conditions, then $u(x, y) = \psi(\xi(x, y), \eta(x, y))$ will be the solution in the original domain.

**Key Reference:** Kreyszig (Chapter 16) and Zill & Shanahan (Chapter 7) provide extensive coverage of conformal mapping and its applications to boundary value problems.

---

### **4. Complex Integrals and Laplace's Equation (Indirect Link)**

While Laplace's equation itself is a PDE, complex integration techniques are fundamental tools in complex analysis, which is then applied to solve these PDEs.

**Learning Outcome 3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.**

*   **Cauchy's Integral Theorem:** If $f(z)$ is analytic in a simply connected domain $D$, then for every closed curve $\gamma$ in $D$, $\oint_\gamma f(z) dz = 0$.
*   **Cauchy's Integral Formula:** If $f(z)$ is analytic in a simply connected domain $D$ and $\gamma$ is a simple closed contour in $D$ with interior $\mathcal{C}$, then for any point $z_0$ in $\mathcal{C}$,
    $f(z_0) = \frac{1}{2\pi i} \oint_\gamma \frac{f(z)}{z - z_0} dz$
    Also, the $n$-th derivative is:
    $f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_\gamma \frac{f(z)}{(z - z_0)^{n+1}} dz$

These theorems are crucial for:
*   Evaluating integrals that arise in physical problems.
*   Deriving properties of analytic functions, which in turn relate to harmonic functions.
*   Understanding the behavior of functions around singularities, leading to residue theory.

**Example:**

Evaluate $\oint_{|z|=2} \frac{e^z}{z - 1} dz$.
Here, $f(z) = e^z$, which is analytic everywhere. The point $z_0 = 1$ is inside the circle $|z|=2$.
Using Cauchy's Integral Formula:
$\oint_{|z|=2} \frac{e^z}{z - 1} dz = 2\pi i f(1) = 2\pi i e^1 = 2\pi i e$.

**Course Outcome Alignment:** This section directly addresses **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.** These are foundational skills for working with complex functions.

---

### **5. Series Expansion and Residue Theorem (Indirect Link)**

The residue theorem is a powerful tool derived from the properties of functions around their singularities, often explored through Laurent series expansions.

**Learning Outcome 4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.**

*   **Laurent Series:** For a function $f(z)$ that is analytic in an annulus $r < |z - z_0| < R$, it can be represented by a Laurent series:
    $f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n$
    The coefficient $a_{-1}$ is called the **residue** of $f(z)$ at $z_0$.

*   **Residue Theorem:** If $f(z)$ is analytic inside and on a simple closed contour $\gamma$, except for a finite number of singularities $z_1, z_2, \dots, z_k$ inside $\gamma$, then:
    $\oint_\gamma f(z) dz = 2\pi i \sum_{j=1}^k \text{Res}(f, z_j)$

**Connection to Laplace's Equation:**

While not directly calculating Laplace's equation, residue theory is used to evaluate integrals that often arise when solving PDEs, including those related to potential theory, via transform methods (like Fourier or Laplace transforms, which are in CO1). The problem might involve evaluating integrals of functions that satisfy certain properties related to potential theory.

**Example:**

Evaluate $\int_{-\infty}^{\infty} \frac{1}{x^2 + 1} dx$.
Consider the complex function $f(z) = \frac{1}{z^2 + 1}$. It has simple poles at $z = i$ and $z = -i$.
We choose a contour consisting of the real axis from $-R$ to $R$ and a semi-circle in the upper half-plane.
The only pole inside this contour is $z = i$.
The residue at $z=i$ is $\text{Res}(f, i) = \lim_{z \to i} (z - i) \frac{1}{(z - i)(z + i)} = \frac{1}{2i}$.
By the Residue Theorem: $\oint_\gamma f(z) dz = 2\pi i \times \frac{1}{2i} = \pi$.
As $R \to \infty$, the integral over the semi-circle goes to zero.
So, $\int_{-\infty}^{\infty} \frac{1}{x^2 + 1} dx = \pi$.

**Course Outcome Alignment:** This section directly addresses **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.**

---

### **6. Fourier Transforms and Laplace's Equation (CO1)**

**Learning Outcome 1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**

*   **Fourier Transform:** For a function $f(t)$, its Fourier transform $\mathcal{F}(\omega)$ is given by:
    $\mathcal{F}(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$
    (Note: The $\frac{1}{\sqrt{2\pi}}$ factor convention can vary; some use $\frac{1}{2\pi}$ or 1).

*   **Laplace Transform:** For a function $f(t)$ defined for $t \ge 0$:
    $\mathcal{L}\{f(t)\} = F(s) = \int_{0}^{\infty} f(t) e^{-st} dt$, where $s$ is a complex variable.

**Application to PDEs:**

Fourier and Laplace transforms are powerful techniques for solving linear PDEs, including Laplace's equation, especially when considering boundary value problems in unbounded domains or initial value problems.

*   **Using Fourier Transform:** If we have a PDE involving derivatives with respect to $x$, taking the Fourier transform with respect to $x$ converts derivatives into multiplications by $i\omega$:
    $\mathcal{F}\left\{\frac{\partial^2 u}{\partial x^2}\right\} = (i\omega)^2 U(\omega, t) = -\omega^2 U(\omega, t)$
    This can transform a PDE into an ODE in the remaining variable (e.g., $t$).
*   **Using Laplace Transform:** Similarly, taking the Laplace transform with respect to $t$ converts time derivatives into algebraic terms involving $s$:
    $\mathcal{L}\left\{\frac{\partial^2 u}{\partial t^2}\right\} = s^2 U(x, s) - s u(x, 0) - \frac{\partial u}{\partial t}(x, 0)$

**Example (Conceptual Link):**

Consider a steady-state heat conduction problem described by Laplace's equation $\nabla^2 T = 0$. If we are looking for a solution in a semi-infinite rod ($x \ge 0$) with specific boundary conditions at $x=0$ and as $x \to \infty$, applying the Fourier transform in $x$ can simplify the problem. The resulting ODE in the transformed variable can then be solved. The boundary conditions need careful handling.

**Important Note:** While the Fourier transform operates on functions of a real variable, the complex variable $s$ in the Laplace transform also plays a crucial role, and the theory of complex functions underpins the understanding and manipulation of these transforms, especially concerning convergence and inversion.

**Course Outcome Alignment:** This section directly addresses **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.** The broader context of using transforms to solve PDEs links back to the physical science applications that complex functions enable.

---

### **7. Practice Questions and Exercises**

**Q1 (Analyticity and Harmonic Functions):**
Let $f(z) = \ln|z| + i \text{Arg}(z)$, where $\text{Arg}(z)$ is the principal argument ($-\pi < \text{Arg}(z) \le \pi$).
(a) Write $f(z)$ in terms of $x$ and $y$.
(b) Show that the real part of $f(z)$ is harmonic.
(c) Find the harmonic conjugate of the real part.
(d) Is $f(z)$ analytic? Justify your answer.

**Q2 (Cauchy's Integral Formula):**
Evaluate $\oint_{|z-i|=2} \frac{\cos z}{z^2 + 1} dz$.

**Q3 (Residue Theorem):**
Evaluate $\int_{0}^{2\pi} \frac{d\theta}{2 + \cos \theta}$ using complex integration. (Hint: Use the substitution $z = e^{i\theta}$).

**Q4 (Conformal Mapping - Conceptual):**
Describe how conformal mapping can be used to solve a two-dimensional electrostatics problem (e.g., finding the potential in a region with complex boundaries) by transforming it to a simpler region where the solution is known.

---

### **8. Answers to Practice Questions**

**A1:**
(a) $f(z) = \ln\sqrt{x^2+y^2} + i \arctan\left(\frac{y}{x}\right) = \frac{1}{2}\ln(x^2+y^2) + i \arctan\left(\frac{y}{x}\right)$
(b) $u(x, y) = \frac{1}{2}\ln(x^2+y^2)$
$\frac{\partial u}{\partial x} = \frac{x}{x^2+y^2}$
$\frac{\partial^2 u}{\partial x^2} = \frac{(x^2+y^2)(1) - x(2x)}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$
$\frac{\partial u}{\partial y} = \frac{y}{x^2+y^2}$
$\frac{\partial^2 u}{\partial y^2} = \frac{(x^2+y^2)(1) - y(2y)}{(x^2+y^2)^2} = \frac{x^2-y^2}{(x^2+y^2)^2}$
$\nabla^2 u = \frac{y^2-x^2}{(x^2+y^2)^2} + \frac{x^2-y^2}{(x^2+y^2)^2} = 0$. Thus, $u(x, y)$ is harmonic.

(c) $v(x, y) = \arctan\left(\frac{y}{x}\right)$. The harmonic conjugate of $u(x, y)$ is $v(x, y) = \arctan\left(\frac{y}{x}\right) + C$.

(d) $f(z) = \ln z$. This function is analytic in the complex plane except for $z=0$ and the branch cut along the negative real axis. The Cauchy-Riemann equations hold for $z \neq 0$ and $z$ not on the negative real axis.

**A2:**
$f(z) = \frac{\cos z}{z^2 + 1} = \frac{\cos z}{(z-i)(z+i)}$.
The poles are at $z=i$ and $z=-i$. The contour $|z-i|=2$ has center $z=i$ and radius 2. Both poles $z=i$ and $z=-i$ are inside this circle.
We need to calculate the residues at $z=i$ and $z=-i$.
For $z=i$:
$\text{Res}(f, i) = \lim_{z \to i} (z-i) \frac{\cos z}{(z-i)(z+i)} = \frac{\cos i}{2i} = \frac{\cosh(1)}{2i}$
For $z=-i$:
$\text{Res}(f, -i) = \lim_{z \to -i} (z+i) \frac{\cos z}{(z-i)(z+i)} = \frac{\cos(-i)}{-2i} = \frac{\cosh(1)}{-2i}$
Using the Residue Theorem:
$\oint_{|z-i|=2} \frac{\cos z}{z^2 + 1} dz = 2\pi i (\text{Res}(f, i) + \text{Res}(f, -i))$
$= 2\pi i \left(\frac{\cosh(1)}{2i} + \frac{\cosh(1)}{-2i}\right) = 2\pi i \left(\frac{\cosh(1)}{2i} - \frac{\cosh(1)}{2i}\right) = 0$.

**A3:**
Let $z = e^{i\theta}$. Then $dz = ie^{i\theta} d\theta$.
$d\theta = \frac{dz}{ie^{i\theta}} = \frac{dz}{iz}$.
Also, $\cos \theta = \frac{z + z^{-1}}{2}$.
The integral becomes $\oint_{|z|=1} \frac{1}{2 + \frac{z + z^{-1}}{2}} \frac{dz}{iz} = \oint_{|z|=1} \frac{1}{\frac{4 + z + z^{-1}}{2}} \frac{dz}{iz}$
$= \oint_{|z|=1} \frac{2}{z + z^{-1} + 4} \frac{dz}{iz} = \oint_{|z|=1} \frac{2}{z + \frac{1}{z} + 4} \frac{dz}{iz}$
$= \oint_{|z|=1} \frac{2z}{z^2 + 1 + 4z} \frac{dz}{iz} = \oint_{|z|=1} \frac{2}{i(z^2 + 4z + 1)} dz$.
The poles are roots of $z^2 + 4z + 1 = 0$:
$z = \frac{-4 \pm \sqrt{16 - 4}}{2} = \frac{-4 \pm \sqrt{12}}{2} = -2 \pm \sqrt{3}$.
Let $z_1 = -2 + \sqrt{3}$ and $z_2 = -2 - \sqrt{3}$.
$|z_1| = |-2 + \sqrt{3}| \approx |-2 + 1.732| = |-0.268| < 1$. So $z_1$ is inside the unit circle.
$|z_2| = |-2 - \sqrt{3}| \approx |-3.732| > 1$. So $z_2$ is outside the unit circle.
The integrand is $f(z) = \frac{2}{i(z^2 + 4z + 1)} = \frac{2}{i(z - z_1)(z - z_2)}$.
The residue at $z_1$ is:
$\text{Res}(f, z_1) = \lim_{z \to z_1} (z - z_1) \frac{2}{i(z - z_1)(z - z_2)} = \frac{2}{i(z_1 - z_2)}$
$z_1 - z_2 = (-2 + \sqrt{3}) - (-2 - \sqrt{3}) = 2\sqrt{3}$.
$\text{Res}(f, z_1) = \frac{2}{i(2\sqrt{3})} = \frac{1}{i\sqrt{3}}$.
By the Residue Theorem:
$\oint_{|z|=1} f(z) dz = 2\pi i \times \text{Res}(f, z_1) = 2\pi i \times \frac{1}{i\sqrt{3}} = \frac{2\pi}{\sqrt{3}}$.

**A4:**
To solve a 2D electrostatics problem, one typically needs to find the electric potential function $\phi(x, y)$, which satisfies Laplace's equation $\nabla^2 \phi = 0$, subject to boundary conditions (e.g., constant potentials on conducting surfaces). If the region has a complicated shape, directly solving Laplace's equation can be very difficult.

Conformal mapping provides a method to simplify the problem:
1.  **Identify a Conformal Mapping:** Find a complex function $w = f(z)$ that maps the complicated domain $\mathcal{D}$ in the $z$-plane (where $z = x + iy$) to a simpler domain $\mathcal{D}'$ in the $w$-plane (where $w = u + iv$). Simple domains often include half-planes, strips, or disks, for which solutions to Laplace's equation are known.
2.  **Transform the Harmonic Function:** If $\phi(x, y)$ is harmonic in $\mathcal{D}$, then $\psi(u, v) = \phi(x(u, v), y(u, v))$ is harmonic in $\mathcal{D}'$. The derivation relies on the Cauchy-Riemann equations and the property that the Laplacian is invariant under conformal transformations up to a factor, but for analytic functions, the Laplacian of the transformed function is zero.
3.  **Solve in the Simpler Domain:** Solve Laplace's equation for $\psi(u, v)$ in the transformed domain $\mathcal{D}'$, subject to the transformed boundary conditions. This is typically much easier.
4.  **Map Back to the Original Domain:** Once $\psi(u, v)$ is found, substitute back the expressions for $u$ and $v$ in terms of $x$ and $y$ (obtained from the inverse mapping $z = f^{-1}(w)$) to obtain the solution $\phi(x, y)$ in the original complicated domain.

This process effectively "transfers" the solution from an easy problem to a hard one, provided a suitable conformal mapping can be found.

---

### **9. Important Points to Remember**

*   **Harmonic Functions:** Solutions to $\nabla^2 u = 0$. The real and imaginary parts of any analytic function are harmonic.
*   **Cauchy-Riemann Equations:** Necessary and sufficient conditions for analyticity. Their satisfaction implies the harmonic nature of the real and imaginary parts.
*   **Conformal Mapping:** Preserves angles between curves. Analytic functions with non-zero derivatives are conformal. Essential for transforming boundary value problems of Laplace's equation to simpler domains.
*   **Cauchy's Integral Theorem & Formula:** Tools for evaluating complex integrals and understanding the behavior of analytic functions.
*   **Laurent Series & Residue Theorem:** Used to analyze functions near singularities and evaluate integrals, often applied indirectly in solving physical problems that involve transforms.
*   **Transforms (Fourier & Laplace):** Powerful techniques for converting differential equations (including PDEs like Laplace's) into algebraic equations, making them solvable. Complex function theory is foundational to understanding these transforms.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### **10. References and Further Reading**

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.** (Key chapters on Complex Functions, Conformal Mapping, Boundary Value Problems).
*   **Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed., Jones & Bartlett, 2015.** (Comprehensive coverage of analyticity, Cauchy-Riemann equations, integration, series, residues, and applications).
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.** (Likely covers Fourier series/transforms and potentially some complex variable applications).
*   **Grewal, B.S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.** (Similar to Ramana, provides broad mathematical coverage).
*   **Rao, K.R., Do Nyeon Kim, and Jae Jeong Hwang. *Fast Fourier Transform - Algorithms and Applications*. Springer, 1st ed., 2011.** (Focuses on FFT algorithms, but the underlying theory relies on complex numbers and transforms).

This detailed set of notes aims to provide a solid foundation for understanding the interplay between complex functions and Laplace's equations within the scope of your course. Remember to consult the specified textbooks for deeper theoretical insights and a wider range of examples.