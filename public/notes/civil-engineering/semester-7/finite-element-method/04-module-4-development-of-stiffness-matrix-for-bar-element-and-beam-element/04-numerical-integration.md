---
title: "Numerical Integration"
subject: "FINITE ELEMENT METHOD"
module: "Module 4: Development of stiffness matrix for bar element and beam element"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116df"
status: "completed"
scrapedAt: "2026-05-20T18:59:04.032Z"
---
# Finite Element Method - Module 4: Development of Stiffness Matrix for Bar and Beam Elements

## Topic: Numerical Integration

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the necessity of numerical integration in the finite element method.
*   Explain the concept of Gaussian Quadrature.
*   Derive the stiffness matrix for a bar element using numerical integration.
*   Derive the stiffness matrix for a beam element using numerical integration.
*   Apply numerical integration techniques to solve problems involving complex material properties or geometries.

---

### 1. Introduction to Numerical Integration

**1.1 Why is Numerical Integration Necessary in FEM?**

In the Finite Element Method, we often need to evaluate definite integrals of complex functions. These functions can arise from:

*   **Non-uniform material properties:** Material properties (like Young's modulus, thermal conductivity) might vary along the element length or cross-section.
*   **Variable cross-sectional areas:** Bar or beam cross-sections might change along their length.
*   **Complex load distributions:** Loads might be distributed in a non-standard or difficult-to-integrate manner.
*   **Boundary conditions:** Integration is required to incorporate certain types of boundary conditions.
*   **Weak form formulation:** The Galerkin method, a common FEM approach, leads to integral forms of the governing equations.

**Exact analytical integration** of these integrals can be difficult or impossible. Therefore, **numerical integration techniques** are employed to approximate these integrals.

**1.2 The Concept of Numerical Integration**

Numerical integration aims to approximate the value of a definite integral:

$$ \int_{a}^{b} f(x) dx \approx \sum_{i=1}^{n} w_i f(x_i) $$

where:
*   $f(x)$ is the function to be integrated.
*   $[a, b]$ is the interval of integration.
*   $x_i$ are the **sampling points** or **abscissas**.
*   $w_i$ are the **weights** associated with each sampling point.
*   $n$ is the number of sampling points (order of integration).

The goal is to choose the points $x_i$ and weights $w_i$ such that the approximation is as accurate as possible for a given number of points.

---

### 2. Gaussian Quadrature

**2.1 What is Gaussian Quadrature?**

Gaussian Quadrature is a powerful and efficient numerical integration technique that selects the sampling points and weights optimally to achieve the highest possible accuracy for a given number of points. Unlike simpler methods like the Trapezoidal or Simpson's rule, where points are fixed (e.g., equally spaced), Gaussian Quadrature determines the best locations for the points within the interval.

**2.2 The Standard Interval of Integration**

Gaussian Quadrature is typically defined over the **standard interval of integration** $[-1, 1]$. Any interval $[a, b]$ can be transformed to $[-1, 1]$ using a linear mapping:

$$ x = \frac{b-a}{2} \xi + \frac{a+b}{2} $$

where $\xi$ is the variable in the standard interval $[-1, 1]$, and $dx = \frac{b-a}{2} d\xi$. The integral becomes:

$$ \int_{a}^{b} f(x) dx = \int_{-1}^{1} f\left(\frac{b-a}{2} \xi + \frac{a+b}{2}\right) \frac{b-a}{2} d\xi $$

**2.3 Gaussian Quadrature Formula**

The general formula for Gaussian Quadrature over $[-1, 1]$ is:

$$ \int_{-1}^{1} g(\xi) d\xi \approx \sum_{i=1}^{n} w_i g(\xi_i) $$

where:
*   $\xi_i$ are the Gaussian abscissas (roots of Legendre polynomials).
*   $w_i$ are the Gaussian weights.

**2.4 Accuracy of Gaussian Quadrature**

A key advantage of Gaussian Quadrature is its ability to integrate a polynomial of degree $2n-1$ exactly using $n$ points.

| Number of Points (n) | Max. Polynomial Degree Integrated Exactly |
| :------------------ | :----------------------------------------- |
| 1                   | 1                                          |
| 2                   | 3                                          |
| 3                   | 5                                          |
| 4                   | 7                                          |

**2.5 Common Gaussian Quadrature Rules:**

**2.5.1 One-Point Gaussian Quadrature:**
*   Abscissa: $\xi_1 = 0$
*   Weight: $w_1 = 2$
*   Formula: $\int_{-1}^{1} g(\xi) d\xi \approx 2 g(0)$

**2.5.2 Two-Point Gaussian Quadrature:**
*   Abscissas: $\xi_1 = -\frac{1}{\sqrt{3}}$, $\xi_2 = \frac{1}{\sqrt{3}}$
*   Weights: $w_1 = 1$, $w_2 = 1$
*   Formula: $\int_{-1}^{1} g(\xi) d\xi \approx g\left(-\frac{1}{\sqrt{3}}\right) + g\left(\frac{1}{\sqrt{3}}\right)$

**2.5.3 Three-Point Gaussian Quadrature:**
*   Abscissas: $\xi_1 = -\sqrt{\frac{3}{5}}$, $\xi_2 = 0$, $\xi_3 = \sqrt{\frac{3}{5}}$
*   Weights: $w_1 = \frac{5}{9}$, $w_2 = \frac{8}{9}$, $w_3 = \frac{5}{9}$
*   Formula: $\int_{-1}^{1} g(\xi) d\xi \approx \frac{5}{9} g\left(-\sqrt{\frac{3}{5}}\right) + \frac{8}{9} g(0) + \frac{5}{9} g\left(\sqrt{\frac{3}{5}}\right)$

---

### 3. Development of Stiffness Matrix for a Bar Element using Numerical Integration

**3.1 Review: Stiffness Matrix for a Homogeneous, Prismatic Bar Element**

For a standard bar element with constant Young's modulus ($E$), cross-sectional area ($A$), and length ($L$), the stiffness matrix is:

$$ \mathbf{k} = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $$

This is derived assuming the material and geometric properties are constant.

**3.2 Incorporating Variable Properties using Numerical Integration**

When $E$ or $A$ vary along the element length, the integral for stiffness becomes more complex. Let's consider a bar element in 1D, with axial displacement $u(x)$. The strain $\epsilon(x) = \frac{du}{dx}$.

The constitutive relation is stress $\sigma(x) = E(x) \epsilon(x) = E(x) \frac{du}{dx}$.

The strain energy density is $U_e = \frac{1}{2} \sigma \epsilon = \frac{1}{2} E(x) \left(\frac{du}{dx}\right)^2$.
The total strain energy in the element is $U_e = \int_{0}^{L} \frac{1}{2} E(x) A(x) \left(\frac{du}{dx}\right)^2 dx$.

Using the weak form and Galerkin method, the stiffness matrix contribution is given by:

$$ k_{ij} = \int_{0}^{L} E(x) A(x) \frac{d\phi_i}{dx} \frac{d\phi_j}{dx} dx $$

where $\phi_i$ and $\phi_j$ are the shape functions. For a 2-node bar element, the shape functions are linear:
*   $\phi_1(x) = 1 - \frac{x}{L}$
*   $\phi_2(x) = \frac{x}{L}$

The derivatives of shape functions are:
*   $\frac{d\phi_1}{dx} = -\frac{1}{L}$
*   $\frac{d\phi_2}{dx} = \frac{1}{L}$

So, $k_{ij} = \int_{0}^{L} E(x) A(x) \left(\frac{d\phi_i}{dx}\right) \left(\frac{d\phi_j}{dx}\right) dx$.

Let's transform the integration interval to $[-1, 1]$ using $x = \frac{L}{2}(\xi+1)$, so $dx = \frac{L}{2} d\xi$.
The integral becomes:

$$ k_{ij} = \int_{-1}^{1} E\left(\frac{L}{2}(\xi+1)\right) A\left(\frac{L}{2}(\xi+1)\right) \left(\frac{d\phi_i}{d\xi} \frac{d\xi}{dx}\right) \left(\frac{d\phi_j}{d\xi} \frac{d\xi}{dx}\right) \frac{L}{2} d\xi $$

Since $\frac{d\xi}{dx} = \frac{2}{L}$:

$$ k_{ij} = \int_{-1}^{1} E\left(\frac{L}{2}(\xi+1)\right) A\left(\frac{L}{2}(\xi+1)\right) \left(\frac{d\phi_i}{d\xi} \frac{2}{L}\right) \left(\frac{d\phi_j}{d\xi} \frac{2}{L}\right) \frac{L}{2} d\xi $$

$$ k_{ij} = \int_{-1}^{1} E(\xi) A(\xi) \frac{d\phi_i}{d\xi} \frac{d\phi_j}{d\xi} \frac{2}{L} d\xi $$

Let $g(\xi) = E(\xi) A(\xi) \frac{d\phi_i}{d\xi} \frac{d\phi_j}{d\xi}$. We want to compute $\int_{-1}^{1} g(\xi) \frac{2}{L} d\xi$.

Let $B_{ij} = \frac{d\phi_i}{d\xi} \frac{d\phi_j}{d\xi}$. The shape functions in terms of $\xi$ are:
*   $\phi_1(\xi) = \frac{1-\xi}{2}$
*   $\phi_2(\xi) = \frac{1+\xi}{2}$

Derivatives with respect to $\xi$:
*   $\frac{d\phi_1}{d\xi} = -\frac{1}{2}$
*   $\frac{d\phi_2}{d\xi} = \frac{1}{2}$

So, for a 2-node bar element:
*   $i=1, j=1$: $B_{11} = (-\frac{1}{2})(-\frac{1}{2}) = \frac{1}{4}$
*   $i=1, j=2$: $B_{12} = (-\frac{1}{2})(\frac{1}{2}) = -\frac{1}{4}$
*   $i=2, j=1$: $B_{21} = (\frac{1}{2})(-\frac{1}{2}) = -\frac{1}{4}$
*   $i=2, j=2$: $B_{22} = (\frac{1}{2})(\frac{1}{2}) = \frac{1}{4}$

The stiffness matrix element $k_{ij}$ becomes:

$$ k_{ij} = \frac{2}{L} \int_{-1}^{1} E\left(\frac{L}{2}(\xi+1)\right) A\left(\frac{L}{2}(\xi+1)\right) B_{ij} d\xi $$

We can now approximate this integral using Gaussian Quadrature. Let's use 2-point Gaussian Quadrature:

$$ k_{ij} \approx \frac{2}{L} \left[ w_1 \left(E(\xi_1)A(\xi_1)B_{ij}\right) + w_2 \left(E(\xi_2)A(\xi_2)B_{ij}\right) \right] $$

With $w_1=1, w_2=1$ and $\xi_1 = -1/\sqrt{3}, \xi_2 = 1/\sqrt{3}$:

$$ k_{ij} \approx \frac{2}{L} \left[ E\left(\frac{L}{2}(\frac{-1}{\sqrt{3}}+1)\right) A\left(\frac{L}{2}(\frac{-1}{\sqrt{3}}+1)\right) B_{ij} + E\left(\frac{L}{2}(\frac{1}{\sqrt{3}}+1)\right) A\left(\frac{L}{2}(\frac{1}{\sqrt{3}}+1)\right) B_{ij} \right] $$

$$ k_{ij} \approx \frac{2}{L} B_{ij} \left[ E(x_1)A(x_1) + E(x_2)A(x_2) \right] $$

where $x_1 = \frac{L}{2}(1-\frac{1}{\sqrt{3}})$ and $x_2 = \frac{L}{2}(1+\frac{1}{\sqrt{3}})$ are the locations of the integration points in the original coordinate system.

**Example:** Consider a bar with $E(x) = E_0 + \alpha x$ and constant $A$.
Let's compute $k_{11}$ using 2-point Gaussian Quadrature.
$B_{11} = 1/4$.
$x_1 = L/2 (1 - 1/\sqrt{3})$, $x_2 = L/2 (1 + 1/\sqrt{3})$.

$E(x_1) = E_0 + \alpha \frac{L}{2} (1 - \frac{1}{\sqrt{3}})$
$E(x_2) = E_0 + \alpha \frac{L}{2} (1 + \frac{1}{\sqrt{3}})$

$k_{11} \approx \frac{2}{L} \frac{1}{4} \left[ A(E_0 + \alpha \frac{L}{2} (1 - \frac{1}{\sqrt{3}})) + A(E_0 + \alpha \frac{L}{2} (1 + \frac{1}{\sqrt{3}})) \right]$
$k_{11} \approx \frac{A}{2L} \left[ E_0 + \alpha \frac{L}{2} - \alpha \frac{L}{2\sqrt{3}} + E_0 + \alpha \frac{L}{2} + \alpha \frac{L}{2\sqrt{3}} \right]$
$k_{11} \approx \frac{A}{2L} \left[ 2E_0 + \alpha L \right]$
$k_{11} \approx \frac{A E_0}{L} + \frac{\alpha A}{2}$

Compare this to the standard case where $E(x) = E_0$:
$k_{11} = \frac{E_0 A}{L}$. The additional term $\frac{\alpha A}{2}$ accounts for the linear variation of $E$.

---

### 4. Development of Stiffness Matrix for a Beam Element using Numerical Integration

**4.1 Review: Stiffness Matrix for a Homogeneous, Prismatic Beam Element**

For a standard Euler-Bernoulli beam element with constant Young's modulus ($E$) and moment of inertia ($I$), the stiffness matrix relating nodal forces and moments to nodal displacements and rotations is:

$$ \mathbf{k} = \frac{EI}{L^3} \begin{bmatrix} 12 & 6L & -12 & 6L \\ 6L & 4L^2 & -6L & 2L^2 \\ -12 & -6L & 12 & -6L \\ 6L & 2L^2 & -6L & 4L^2 \end{bmatrix} $$

This is derived assuming $E$ and $I$ are constant.

**4.2 Incorporating Variable Properties using Numerical Integration**

For a beam element, we consider transverse displacement $v(x)$ and rotation $\theta(x) = \frac{dv}{dx}$. The bending moment $M(x) = E(x)I(x) \frac{d^2v}{dx^2}$.

The strain energy density due to bending is $U_e = \frac{1}{2} M \kappa = \frac{1}{2} E(x)I(x) \left(\frac{d^2v}{dx^2}\right)^2$.
The total strain energy in the element is $U_e = \int_{0}^{L} \frac{1}{2} E(x)I(x) \left(\frac{d^2v}{dx^2}\right)^2 dx$.

The stiffness matrix element is given by:

$$ k_{ij} = \int_{0}^{L} E(x)I(x) \frac{d^2\phi_i}{dx^2} \frac{d^2\phi_j}{dx^2} dx $$

where $\phi_i$ and $\phi_j$ are the shape functions for transverse displacement for a beam element. For a 4-node beam element (commonly using Hermite polynomials):

*   $\phi_1(x) = 2\eta^3 - 3\eta^2 + 1$
*   $\phi_2(x) = L(\eta^3 - 2\eta^2 + \eta)$
*   $\phi_3(x) = -2\eta^3 + 3\eta^2$
*   $\phi_4(x) = L(\eta^3 - \eta^2)$

where $\eta = \frac{x}{L} - \frac{1}{2}$ is a normalized coordinate on $[-1/2, 1/2]$. It's more convenient to work with the standard $\xi \in [-1, 1]$ transformation.

Let's use the common beam shape functions based on interpolation in $\xi \in [-1, 1]$:
The nodal degrees of freedom are $v_1, \theta_1, v_2, \theta_2$.
Shape functions $N_i(x)$ for $i=1,2,3,4$ corresponding to $v_1, \theta_1, v_2, \theta_2$.
For a 2-node beam element:
*   $N_1(x) = \frac{1}{4L^3}(2x^3 - 9Lx^2 + 9L^2x - L^3)$ for $v_1$
*   $N_2(x) = \frac{1}{4L^2}(2x^3 - 7Lx^2 + 8L^2x - 3L^3)$ for $\theta_1$
*   $N_3(x) = \frac{1}{4L^3}(-2x^3 + 3Lx^2)$ for $v_2$
*   $N_4(x) = \frac{1}{4L^2}(2x^3 - 5Lx^2 + 4L^2x - L^3)$ for $\theta_2$

These are cubic Hermite polynomials. Their second derivatives are needed.
Let's transform to $\xi \in [-1, 1]$ where $x = \frac{L}{2}(\xi+1)$, $dx = \frac{L}{2}d\xi$.
$v(x) = \sum_{i=1}^{4} N_i(x) v_i$ where $v_i$ are nodal displacements/rotations.
$\frac{d^2v}{dx^2} = \sum_{i=1}^{4} \frac{d^2 N_i}{dx^2} v_i$.

The integral becomes:

$$ k_{ij} = \int_{-1}^{1} E\left(\frac{L}{2}(\xi+1)\right) I\left(\frac{L}{2}(\xi+1)\right) \left(\frac{d^2 N_i}{dx^2} \frac{dx}{d\xi}\right) \left(\frac{d^2 N_j}{dx^2} \frac{dx}{d\xi}\right) \frac{L}{2} d\xi $$

Since $\frac{dx}{d\xi} = \frac{L}{2}$:

$$ k_{ij} = \int_{-1}^{1} E(\xi) I(\xi) \left(\frac{d^2 N_i}{d\xi} \frac{2}{L}\right) \left(\frac{d^2 N_j}{d\xi} \frac{2}{L}\right) \frac{L}{2} d\xi $$

$$ k_{ij} = \int_{-1}^{1} E(\xi) I(\xi) \frac{d^2 N_i}{d\xi} \frac{d^2 N_j}{d\xi} \frac{2}{L} d\xi $$

Let $C_{ij}(\xi) = E(\xi) I(\xi) \frac{d^2 N_i}{d\xi} \frac{d^2 N_j}{d\xi}$. The integral is:

$$ k_{ij} = \frac{2}{L} \int_{-1}^{1} C_{ij}(\xi) d\xi $$

We can approximate this integral using Gaussian Quadrature. For beam elements, due to the cubic nature of shape functions, their second derivatives are linear. Therefore, the product of second derivatives will be at most a quadratic function. To integrate a quadratic polynomial exactly, we need at least 2-point Gaussian Quadrature (which integrates cubics exactly). In practice, 2 or 3-point Gaussian Quadrature is often sufficient for beam elements.

Let's look at the general form of the derivatives of beam shape functions with respect to $\xi$:
The expressions for $N_i(x)$ are cubic in $x$.
Let's rewrite $N_i(x)$ in terms of $\xi$:
$x = \frac{L}{2}(\xi+1)$
$\frac{d}{dx} = \frac{d}{d\xi} \frac{d\xi}{dx} = \frac{2}{L} \frac{d}{d\xi}$
$\frac{d^2}{dx^2} = (\frac{2}{L})^2 \frac{d^2}{d\xi^2} = \frac{4}{L^2} \frac{d^2}{d\xi^2}$

So, $\frac{d^2 N_i}{dx^2} = \frac{4}{L^2} \frac{d^2 N_i}{d\xi^2}$.
Substituting this into the stiffness matrix integral:

$$ k_{ij} = \int_{0}^{L} E(x)I(x) \left(\frac{4}{L^2} \frac{d^2 N_i}{d\xi^2}\right) \left(\frac{4}{L^2} \frac{d^2 N_j}{d\xi^2}\right) \frac{L}{2} d\xi $$

$$ k_{ij} = \frac{2}{L^3} \int_{-1}^{1} E(\xi)I(\xi) \frac{d^2 N_i}{d\xi^2} \frac{d^2 N_j}{d\xi^2} d\xi $$

Again, we use Gaussian Quadrature to approximate the integral:

$$ k_{ij} \approx \frac{2}{L^3} \sum_{k=1}^{n} w_k \left[ E(\xi_k)I(\xi_k) \frac{d^2 N_i}{d\xi^2}(\xi_k) \frac{d^2 N_j}{d\xi^2}(\xi_k) \right] $$

where $n$ is the number of integration points and $w_k, \xi_k$ are the Gaussian weights and abscissas.

**Example: Using 2-point Gaussian Quadrature for Beam Stiffness**

Let's use the standard 2-point rule: $\xi_1 = -1/\sqrt{3}, \xi_2 = 1/\sqrt{3}$, $w_1 = 1, w_2 = 1$.

$$ k_{ij} \approx \frac{2}{L^3} \left[ E(\xi_1)I(\xi_1) \frac{d^2 N_i}{d\xi^2}(\xi_1) \frac{d^2 N_j}{d\xi^2}(\xi_1) + E(\xi_2)I(\xi_2) \frac{d^2 N_i}{d\xi^2}(\xi_2) \frac{d^2 N_j}{d\xi^2}(\xi_2) \right] $$

The shape functions and their second derivatives with respect to $\xi$ for a beam element are quite complex to derive from scratch here but are available in FEM textbooks. For instance, if $E$ and $I$ are constant, this formulation should recover the standard stiffness matrix. When $E$ or $I$ vary, the numerical integration will correctly weight the contribution of $EI$ at different points along the beam.

---

### 5. Practice Questions and Exercises

**Question 1:**
Explain why numerical integration is often required in the Finite Element Method.

**Question 2:**
What is the main advantage of Gaussian Quadrature over simpler numerical integration methods like the Trapezoidal rule?

**Question 3:**
Calculate $\int_{-1}^{1} (x^3 + 2x^2 - x + 1) dx$ using:
a) 2-point Gaussian Quadrature
b) 3-point Gaussian Quadrature
Compare your results with the exact analytical solution.

**Question 4:**
Consider a bar element where the Young's modulus varies linearly as $E(x) = E_0 + \alpha x$, where $0 \le x \le L$. Derive the $k_{11}$ component of the stiffness matrix using 2-point Gaussian Quadrature. Assume constant cross-sectional area $A$.

**Question 5:**
How does numerical integration help in formulating the stiffness matrix for a beam element with a variable moment of inertia ($I(x)$)?

---

### Answers to Practice Questions

**Answer 1:**
Numerical integration is required because material properties ($E$, $A$), geometric properties (cross-sectional area, moment of inertia), or applied loads can vary along the length of an element. These variations lead to integrals in the stiffness matrix formulation that are difficult or impossible to solve analytically. Numerical integration provides an accurate approximation of these integrals.

**Answer 2:**
The main advantage of Gaussian Quadrature is its **optimality**. It selects the sampling points (abscissas) and their corresponding weights such that it achieves the highest possible accuracy for a given number of integration points. For example, $n$ points can exactly integrate a polynomial of degree $2n-1$, which is more accurate than other methods using the same number of points.

**Answer 3:**
Let $f(x) = x^3 + 2x^2 - x + 1$.

Exact Solution:
$\int_{-1}^{1} (x^3 + 2x^2 - x + 1) dx = \left[\frac{x^4}{4} + \frac{2x^3}{3} - \frac{x^2}{2} + x\right]_{-1}^{1}$
$= (\frac{1}{4} + \frac{2}{3} - \frac{1}{2} + 1) - (\frac{1}{4} - \frac{2}{3} - \frac{1}{2} - 1)$
$= \frac{1}{4} + \frac{2}{3} - \frac{1}{2} + 1 - \frac{1}{4} + \frac{2}{3} + \frac{1}{2} + 1$
$= \frac{4}{3} + 2 = \frac{4+6}{3} = \frac{10}{3} \approx 3.333$

a) 2-point Gaussian Quadrature: $\xi_1 = -1/\sqrt{3}, \xi_2 = 1/\sqrt{3}$, $w_1 = 1, w_2 = 1$.
Integral $\approx w_1 f(\xi_1) + w_2 f(\xi_2)$
$f(-1/\sqrt{3}) = (-1/\sqrt{3})^3 + 2(-1/\sqrt{3})^2 - (-1/\sqrt{3}) + 1 = -1/(3\sqrt{3}) + 2/3 + 1/\sqrt{3} + 1 = 2/3 + 1 + (1/\sqrt{3})(1 - 1/3) = 5/3 + 2/(3\sqrt{3})$
$f(1/\sqrt{3}) = (1/\sqrt{3})^3 + 2(1/\sqrt{3})^2 + (1/\sqrt{3}) + 1 = 1/(3\sqrt{3}) + 2/3 + 1/\sqrt{3} + 1 = 5/3 + (1/\sqrt{3})(1/3 + 1) = 5/3 + 4/(3\sqrt{3})$
Integral $\approx 1 \times (5/3 + 2/(3\sqrt{3})) + 1 \times (5/3 + 4/(3\sqrt{3}))$
Integral $\approx 10/3 + 6/(3\sqrt{3}) = 10/3 + 2/\sqrt{3} \approx 3.333 + 1.155 = 4.488$
*(Self-correction: The polynomial is of degree 3, and 2-point G.Q. integrates cubics exactly. Let me re-calculate f(x) more carefully.)*

Let's re-evaluate the function and points:
$f(x) = x^3 + 2x^2 - x + 1$
Points: $\xi_1 = -0.57735$, $\xi_2 = 0.57735$

$f(-0.57735) \approx (-0.57735)^3 + 2(-0.57735)^2 - (-0.57735) + 1$
$f(-0.57735) \approx -0.19245 + 2(0.33333) + 0.57735 + 1$
$f(-0.57735) \approx -0.19245 + 0.66666 + 0.57735 + 1 \approx 2.05156$

$f(0.57735) \approx (0.57735)^3 + 2(0.57735)^2 + (0.57735) + 1$
$f(0.57735) \approx 0.19245 + 2(0.33333) + 0.57735 + 1$
$f(0.57735) \approx 0.19245 + 0.66666 + 0.57735 + 1 \approx 2.43646$

Integral $\approx 1 \times 2.05156 + 1 \times 2.43646 = 4.48802$

Wait, this still doesn't match the exact value. Let's check the formula for Gaussian Quadrature. The $f(x_i)$ are evaluated at the roots of Legendre polynomials, not arbitrary points.
The roots are $\xi = \pm \frac{1}{\sqrt{3}}$.
$f(-1/\sqrt{3}) = (-1/\sqrt{3})^3 + 2(-1/\sqrt{3})^2 - (-1/\sqrt{3}) + 1 = -\frac{1}{3\sqrt{3}} + \frac{2}{3} + \frac{1}{\sqrt{3}} + 1 = \frac{5}{3} + \frac{2}{3\sqrt{3}}$
$f(1/\sqrt{3}) = (1/\sqrt{3})^3 + 2(1/\sqrt{3})^2 + (1/\sqrt{3}) + 1 = \frac{1}{3\sqrt{3}} + \frac{2}{3} + \frac{1}{\sqrt{3}} + 1 = \frac{5}{3} + \frac{4}{3\sqrt{3}}$

Integral $\approx f(-1/\sqrt{3}) + f(1/\sqrt{3}) = (\frac{5}{3} + \frac{2}{3\sqrt{3}}) + (\frac{5}{3} + \frac{4}{3\sqrt{3}}) = \frac{10}{3} + \frac{6}{3\sqrt{3}} = \frac{10}{3} + \frac{2}{\sqrt{3}}$
$\approx 3.333 + 1.1547 = 4.4877$

There seems to be a misunderstanding in my expectation that it should match the exact solution. Let's re-read the theory. Gaussian quadrature integrates polynomials of degree $2n-1$ *exactly*.
For $n=2$, it integrates up to degree $2(2)-1 = 3$. Our polynomial is degree 3.
Let's re-evaluate the analytical integral:
$\int_{-1}^{1} (x^3 + 2x^2 - x + 1) dx = [\frac{x^4}{4} + \frac{2x^3}{3} - \frac{x^2}{2} + x]_{-1}^{1}$
$= (\frac{1}{4} + \frac{2}{3} - \frac{1}{2} + 1) - (\frac{1}{4} - \frac{2}{3} - \frac{1}{2} - 1)$
$= (\frac{3+8-6+12}{12}) - (\frac{3-8-6-12}{12})$
$= (\frac{17}{12}) - (\frac{-23}{12}) = \frac{17+23}{12} = \frac{40}{12} = \frac{10}{3}$.

Now let's re-evaluate $f(\xi_i)$ and the sum:
$f(-1/\sqrt{3}) = -\frac{1}{3\sqrt{3}} + \frac{2}{3} + \frac{1}{\sqrt{3}} + 1 = \frac{5}{3} + \frac{2}{3\sqrt{3}}$
$f(1/\sqrt{3}) = \frac{1}{3\sqrt{3}} + \frac{2}{3} + \frac{1}{\sqrt{3}} + 1 = \frac{5}{3} + \frac{4}{3\sqrt{3}}$
Sum: $\frac{10}{3} + \frac{6}{3\sqrt{3}} = \frac{10}{3} + \frac{2}{\sqrt{3}} = \frac{10}{3} + \frac{2\sqrt{3}}{3}$

Ah, the exact solution calculation was correct, the Gaussian Quadrature calculation result must be correct then. Let's verify if $2/\sqrt{3}$ cancels out properly.
No, the terms $x^3$ and $-x$ are odd functions and integrate to zero. $x^2$ and $1$ are even functions.
$\int_{-1}^1 x^3 dx = 0$
$\int_{-1}^1 -x dx = 0$
$\int_{-1}^1 2x^2 dx = 2 [\frac{x^3}{3}]_{-1}^1 = 2(\frac{1}{3} - (-\frac{1}{3})) = 2(\frac{2}{3}) = \frac{4}{3}$
$\int_{-1}^1 1 dx = [x]_{-1}^1 = 1 - (-1) = 2$
Total exact integral = $4/3 + 2 = 10/3$.

Let's re-evaluate the sum of $f(\xi_i)$ more carefully.
$f(\xi) = \xi^3 + 2\xi^2 - \xi + 1$
$\xi_1 = -1/\sqrt{3}$, $\xi_2 = 1/\sqrt{3}$
$f(\xi_1) = (-1/\sqrt{3})^3 + 2(-1/\sqrt{3})^2 - (-1/\sqrt{3}) + 1 = -1/(3\sqrt{3}) + 2/3 + 1/\sqrt{3} + 1 = 5/3 + (1/\sqrt{3})(-1/3 + 1) = 5/3 + 2/(3\sqrt{3})$
$f(\xi_2) = (1/\sqrt{3})^3 + 2(1/\sqrt{3})^2 + (1/\sqrt{3}) + 1 = 1/(3\sqrt{3}) + 2/3 + 1/\sqrt{3} + 1 = 5/3 + (1/\sqrt{3})(1/3 + 1) = 5/3 + 4/(3\sqrt{3})$
Sum = $f(\xi_1) + f(\xi_2) = (5/3 + 2/(3\sqrt{3})) + (5/3 + 4/(3\sqrt{3})) = 10/3 + 6/(3\sqrt{3}) = 10/3 + 2/\sqrt{3}$.

Ah, the issue might be in the problem statement or my interpretation of Gaussian Quadrature for a polynomial.
If $f(x) = ax^3 + bx^2 + cx + d$, then $\int_{-1}^1 f(x) dx = 0 + \frac{2b}{3} + 0 + 2d$.
For $f(x) = x^3 + 2x^2 - x + 1$: $a=1, b=2, c=-1, d=1$.
Exact integral = $2(2)/3 + 2(1) = 4/3 + 2 = 10/3$.

Gaussian Quadrature: $\int_{-1}^1 g(\xi) d\xi \approx \sum w_i g(\xi_i)$.
If $g(\xi) = \xi^3 + 2\xi^2 - \xi + 1$:
$g(\xi_1) = g(-1/\sqrt{3}) = -1/(3\sqrt{3}) + 2/3 + 1/\sqrt{3} + 1 = 5/3 + 2/(3\sqrt{3})$
$g(\xi_2) = g(1/\sqrt{3}) = 1/(3\sqrt{3}) + 2/3 + 1/\sqrt{3} + 1 = 5/3 + 4/(3\sqrt{3})$
Sum = $10/3 + 6/(3\sqrt{3}) = 10/3 + 2/\sqrt{3}$.
This is not $10/3$. There's still a mistake.

**Let's use the property of odd/even functions with Gaussian points.**
The points $\pm 1/\sqrt{3}$ are symmetric around 0.
$f(x) = x^3 + 2x^2 - x + 1$
$f(-x) = (-x)^3 + 2(-x)^2 - (-x) + 1 = -x^3 + 2x^2 + x + 1$
The terms $x^3$ and $-x$ are odd, $2x^2$ and $1$ are even.
$f(\xi_1) = f(-1/\sqrt{3}) = (-1/\sqrt{3})^3 + 2(-1/\sqrt{3})^2 - (-1/\sqrt{3}) + 1$
$f(\xi_2) = f(1/\sqrt{3}) = (1/\sqrt{3})^3 + 2(1/\sqrt{3})^2 + (1/\sqrt{3}) + 1$

Sum $= [(-1/\sqrt{3})^3 + 2(-1/\sqrt{3})^2 - (-1/\sqrt{3}) + 1] + [(1/\sqrt{3})^3 + 2(1/\sqrt{3})^2 + (1/\sqrt{3}) + 1]$
Sum $= [-1/(3\sqrt{3}) + 2/3 + 1/\sqrt{3} + 1] + [1/(3\sqrt{3}) + 2/3 + 1/\sqrt{3} + 1]$
Sum $= (-1/(3\sqrt{3}) + 1/(3\sqrt{3})) + (2/3 + 2/3) + (1/\sqrt{3} + 1/\sqrt{3}) + (1+1)$
Sum $= 0 + 4/3 + 2/\sqrt{3} + 2 = 10/3 + 2/\sqrt{3}$.

This result *is* what the 2-point Gaussian quadrature yields for this function.
The error is that $2/\sqrt{3}$ is not zero. This means either the formula for $f(\xi_i)$ is wrong, or my understanding of exactness is wrong.

**Let's test with a simpler polynomial:** $\int_{-1}^1 x^2 dx$. Exact = $[x^3/3]_{-1}^1 = 1/3 - (-1/3) = 2/3$.
2-point G.Q.: $f(x) = x^2$.
$f(-1/\sqrt{3}) = (-1/\sqrt{3})^2 = 1/3$.
$f(1/\sqrt{3}) = (1/\sqrt{3})^2 = 1/3$.
Sum = $1/3 + 1/3 = 2/3$. This works.

**Let's test with a cubic:** $\int_{-1}^1 x^3 dx$. Exact = $[x^4/4]_{-1}^1 = 1/4 - 1/4 = 0$.
2-point G.Q.: $f(x) = x^3$.
$f(-1/\sqrt{3}) = (-1/\sqrt{3})^3 = -1/(3\sqrt{3})$.
$f(1/\sqrt{3}) = (1/\sqrt{3})^3 = 1/(3\sqrt{3})$.
Sum = $-1/(3\sqrt{3}) + 1/(3\sqrt{3}) = 0$. This works.

Okay, there must be a mistake in the calculation of $f(-1/\sqrt{3})$ and $f(1/\sqrt{3})$ for the original polynomial.
$f(x) = x^3 + 2x^2 - x + 1$
$f(-1/\sqrt{3}) = (-1/\sqrt{3})^3 + 2(-1/\sqrt{3})^2 - (-1/\sqrt{3}) + 1$
$= -1/(3\sqrt{3}) + 2(1/3) + 1/\sqrt{3} + 1$
$= -1/(3\sqrt{3}) + 2/3 + 3/(3\sqrt{3}) + 3/3$
$= 5/3 + 2/(3\sqrt{3})$

$f(1/\sqrt{3}) = (1/\sqrt{3})^3 + 2(1/\sqrt{3})^2 + (1/\sqrt{3}) + 1$
$= 1/(3\sqrt{3}) + 2(1/3) + 1/\sqrt{3} + 1$
$= 1/(3\sqrt{3}) + 2/3 + 3/(3\sqrt{3}) + 3/3$
$= 5/3 + 4/(3\sqrt{3})$

Sum = $f(-1/\sqrt{3}) + f(1/\sqrt{3}) = (5/3 + 2/(3\sqrt{3})) + (5/3 + 4/(3\sqrt{3})) = 10/3 + 6/(3\sqrt{3}) = 10/3 + 2/\sqrt{3}$.

The mistake might be in the polynomial itself. Perhaps the example intended a simpler polynomial or there's a numerical precision issue in my calculator.
Let's try the 3-point rule.
$\xi_1 = -\sqrt{3/5}$, $\xi_2 = 0$, $\xi_3 = \sqrt{3/5}$
$w_1 = 5/9$, $w_2 = 8/9$, $w_3 = 5/9$

$f(0) = 1$.
$\xi_1^2 = 3/5$, $\xi_1^3 = -(3/5)\sqrt{3/5}$
$\xi_3^2 = 3/5$, $\xi_3^3 = (3/5)\sqrt{3/5}$

$f(\xi_1) = -(3/5)\sqrt{3/5} + 2(3/5) - (-\sqrt{3/5}) + 1 = -(3/5)\sqrt{3/5} + 6/5 + \sqrt{3/5} + 1 = 11/5 + \sqrt{3/5}(1 - 3/5) = 11/5 + \sqrt{3/5}(2/5) = 11/5 + (2/5)\sqrt{3/5}$
$f(\xi_3) = (3/5)\sqrt{3/5} + 2(3/5) + \sqrt{3/5} + 1 = (3/5)\sqrt{3/5} + 6/5 + \sqrt{3/5} + 1 = 11/5 + \sqrt{3/5}(3/5 + 1) = 11/5 + (8/5)\sqrt{3/5}$

Integral $\approx (5/9) f(\xi_1) + (8/9) f(\xi_2) + (5/9) f(\xi_3)$
$\approx (5/9) [11/5 + (2/5)\sqrt{3/5}] + (8/9) [1] + (5/9) [11/5 + (8/5)\sqrt{3/5}]$
$\approx (11/9 + (2/9)\sqrt{3/5}) + 8/9 + (11/9 + (8/9)\sqrt{3/5})$
$\approx (11/9 + 8/9 + 11/9) + (2/9)\sqrt{3/5} + (8/9)\sqrt{3/5}$
$\approx 30/9 + (10/9)\sqrt{3/5} = 10/3 + (10/9)\sqrt{0.6} \approx 3.333 + (10/9)*0.7746 \approx 3.333 + 0.8607 = 4.1937$

This is still not $10/3$. The problem statement might have an error, or the function is chosen poorly for demonstration. **The key takeaway is that for a polynomial of degree $2n-1$, $n$-point Gaussian Quadrature is exact.** My calculations are likely the source of the discrepancy.

Let's use a property that odd functions integrated over symmetric intervals are zero, and even functions are twice the integral from 0 to upper limit.
$f(x) = x^3 - x + 2x^2 + 1$
$g(\xi) = \xi^3 - \xi + 2\xi^2 + 1$
$\int_{-1}^1 g(\xi) d\xi = \int_{-1}^1 (\xi^3 - \xi) d\xi + \int_{-1}^1 (2\xi^2 + 1) d\xi$
The first integral is zero since $\xi^3-\xi$ is odd.
The second integral is even.
With 2-point G.Q., $w_1=1, w_2=1$ and $\xi_1=-1/\sqrt{3}, \xi_2=1/\sqrt{3}$:
The odd part of the function at these points:
$\xi^3 - \xi$
At $-1/\sqrt{3}$: $(-1/\sqrt{3})^3 - (-1/\sqrt{3}) = -1/(3\sqrt{3}) + 1/\sqrt{3} = 2/(3\sqrt{3})$
At $1/\sqrt{3}$: $(1/\sqrt{3})^3 - (1/\sqrt{3}) = 1/(3\sqrt{3}) - 1/\sqrt{3} = -2/(3\sqrt{3})$
Sum of odd part = $2/(3\sqrt{3}) - 2/(3\sqrt{3}) = 0$. This is correct.

The even part of the function at these points:
$2\xi^2 + 1$
At $-1/\sqrt{3}$: $2(-1/\sqrt{3})^2 + 1 = 2(1/3) + 1 = 2/3 + 1 = 5/3$.
At $1/\sqrt{3}$: $2(1/\sqrt{3})^2 + 1 = 2(1/3) + 1 = 2/3 + 1 = 5/3$.
Sum of even part = $5/3 + 5/3 = 10/3$.

Therefore, for $f(x) = x^3 - x + 2x^2 + 1$, the 2-point G.Q. gives $10/3$.

**Final Answer for Q3:**
a) 2-point Gaussian Quadrature: $10/3$ (exact)
b) 3-point Gaussian Quadrature: $10/3$ (exact)
The calculation for Q3 with the given polynomial $x^3 + 2x^2 - x + 1$ *should* yield $10/3$ for both 2-point and 3-point Gaussian Quadrature because it is a degree 3 polynomial, and 2-point G.Q. is exact for degree 3 polynomials. My previous calculations were flawed due to manual errors.

**Answer 4:**
$k_{11} = \frac{2}{L} \int_{-1}^{1} E\left(\frac{L}{2}(\xi+1)\right) A B_{11} d\xi$
$E(\xi) = E_0 + \alpha \frac{L}{2}(\xi+1)$
$A(\xi) = A$ (constant)
$B_{11} = 1/4$ (from bar shape function derivatives)

$k_{11} = \frac{2}{L} \int_{-1}^{1} (E_0 + \alpha \frac{L}{2}(\xi+1)) A \frac{1}{4} d\xi$
$k_{11} = \frac{A}{2L} \int_{-1}^{1} (E_0 + \alpha \frac{L}{2}\xi + \alpha \frac{L}{2}) d\xi$
$k_{11} = \frac{A}{2L} \int_{-1}^{1} ((E_0 + \alpha \frac{L}{2}) + \alpha \frac{L}{2}\xi) d\xi$

Using 2-point Gaussian Quadrature ($\xi_1 = -1/\sqrt{3}, \xi_2 = 1/\sqrt{3}, w_1=1, w_2=1$):
$k_{11} \approx \frac{A}{2L} [1 \cdot ((E_0 + \alpha \frac{L}{2}) + \alpha \frac{L}{2}(-\frac{1}{\sqrt{3}})) + 1 \cdot ((E_0 + \alpha \frac{L}{2}) + \alpha \frac{L}{2}(\frac{1}{\sqrt{3}}))]$
$k_{11} \approx \frac{A}{2L} [(E_0 + \alpha \frac{L}{2} - \alpha \frac{L}{2\sqrt{3}}) + (E_0 + \alpha \frac{L}{2} + \alpha \frac{L}{2\sqrt{3}})]$
$k_{11} \approx \frac{A}{2L} [2(E_0 + \alpha \frac{L}{2})]$
$k_{11} \approx \frac{A}{2L} [2E_0 + \alpha L]$
$k_{11} \approx \frac{AE_0}{L} + \frac{\alpha A}{2}$

**Answer 5:**
Numerical integration allows us to accurately approximate the integral $\int_{0}^{L} E(x)I(x) \frac{d^2 N_i}{dx^2} \frac{d^2 N_j}{dx^2} dx$. When $E(x)$ or $I(x)$ are not constant, the product $E(x)I(x)$ varies along the beam length. Gaussian Quadrature samples the term $E(x)I(x)$ at specific points within the element and weights these samples according to the Gaussian quadrature rules. This correctly accounts for the varying flexural rigidity $(EI)$ in different parts of the beam, leading to a more accurate stiffness matrix than methods that assume constant $EI$.

---

### Important Points to Remember:

*   **Necessity:** Numerical integration is crucial for handling non-uniform material properties, geometries, and complex loads in FEM.
*   **Gaussian Quadrature:** It's an optimal numerical integration technique that uses strategically chosen points (abscissas) and weights for high accuracy.
*   **Exactness:** $n$-point Gaussian Quadrature can integrate polynomials of degree up to $2n-1$ exactly.
*   **Transformation:** Integration intervals are typically transformed to $[-1, 1]$ for Gaussian Quadrature.
*   **Bar Elements:** For bar elements with variable $EA$, the integral $\int EA (\frac{d\phi}{dx})^2 dx$ is approximated.
*   **Beam Elements:** For beam elements with variable $EI$, the integral $\int EI (\frac{d^2\phi}{dx^2})^2 dx$ is approximated.
*   **Choice of $n$:** The number of integration points ($n$) should be chosen such that the polynomial degree of the integrand is handled accurately. For cubic shape functions in beams, 2-point G.Q. is often sufficient.
*   **Cost:** More integration points lead to higher accuracy but also higher computational cost.

---
This concludes the notes for the Numerical Integration topic in Module 4.
