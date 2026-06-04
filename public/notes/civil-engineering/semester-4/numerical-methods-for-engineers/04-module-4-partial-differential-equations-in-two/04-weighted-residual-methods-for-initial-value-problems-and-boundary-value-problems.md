---
title: "Weighted residual methods for initial value problems and boundary value problems – Collocation method, Method of least squares, Galerkin’s method."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 4: Partial differential equations in two"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b4b"
status: "completed"
scrapedAt: "2026-05-20T18:46:54.542Z"
---
# NUMERICAL METHODS FOR ENGINEERS - Module 4: Partial Differential Equations in Two

## Topic: Weighted Residual Methods for Initial Value Problems and Boundary Value Problems

### Introduction

Partial Differential Equations (PDEs) are ubiquitous in engineering and physics, describing phenomena like heat transfer, fluid flow, and wave propagation. Analytical solutions are often impossible to obtain for complex geometries or boundary conditions. Weighted Residual Methods provide a powerful framework for approximating solutions to PDEs by transforming them into a system of algebraic equations that can be solved numerically.

This module focuses on applying these methods to both Initial Value Problems (IVPs) and Boundary Value Problems (BVPs) for PDEs in two independent variables. We will explore three prominent weighted residual techniques: the Collocation Method, the Method of Least Squares, and Galerkin's Method.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental concept of weighted residual methods for approximating solutions to PDEs.
*   Formulate the weighted residual statement for a given PDE.
*   Apply the Collocation method to solve PDEs.
*   Apply the Method of Least Squares to solve PDEs.
*   Apply Galerkin's Method to solve PDEs.
*   Choose an appropriate weighted residual method for a given problem.
*   Understand the advantages and disadvantages of each method.

---

### 1. The Concept of Weighted Residual Methods

The core idea behind weighted residual methods is to approximate the unknown solution, $u(x, t)$ or $u(x, y)$, of a PDE with a simpler, trial function, $\tilde{u}$. This trial function is typically a linear combination of known basis functions with unknown coefficients.

**General PDE form:**

For a general PDE of the form:
$L(u) = f$

where $L$ is a differential operator and $f$ is a source term.

**Trial Solution:**

We approximate the true solution $u$ by a trial solution $\tilde{u}$:
$\tilde{u}(x, t; c_1, c_2, ..., c_N) = \sum_{i=1}^{N} c_i \phi_i(x, t)$

or for a 2D spatial problem (e.g., $u(x, y)$):
$\tilde{u}(x, y; c_1, c_2, ..., c_N) = \sum_{i=1}^{N} c_i \phi_i(x, y)$

Here, $\phi_i$ are chosen basis functions (often polynomials, splines, or trigonometric functions) and $c_i$ are the unknown coefficients we need to determine. The choice of basis functions is crucial for the accuracy and convergence of the method.

**Residual:**

Substituting the trial solution into the PDE results in an error term called the **residual**, denoted by $R$:
$R(x, t; c_1, ..., c_N) = L(\tilde{u}) - f$

Ideally, for the exact solution, the residual would be zero everywhere. Since $\tilde{u}$ is an approximation, the residual will generally not be zero.

**Weighted Residual Statement:**

Weighted residual methods aim to minimize this residual in some average sense over the domain. This is achieved by requiring that the residual is orthogonal to a set of **weighting functions**, $w_j$, over the domain $\Omega$:

$\int_{\Omega} w_j(x, t) R(x, t; c_1, ..., c_N) d\Omega = 0, \quad j = 1, 2, ..., N$

This process converts the PDE into a system of $N$ algebraic equations for the $N$ unknown coefficients $c_j$.

**Key Concepts:**

*   **Trial Function ($\tilde{u}$):** An assumed approximate solution with unknown coefficients.
*   **Basis Functions ($\phi_i$):** Pre-selected functions that form the trial solution. They should ideally satisfy any essential boundary conditions.
*   **Residual ($R$):** The error when the trial solution is substituted into the PDE.
*   **Weighting Functions ($w_j$):** Functions used to "weight" the residual and enforce the condition that it is minimized in an average sense. The choice of weighting functions defines the specific weighted residual method.
*   **Domain ($\Omega$):** The region over which the PDE is defined (e.g., a spatial domain, a time interval).

---

### 2. Collocation Method

**Concept:**

The Collocation method requires the residual to be exactly zero at a specific set of $N$ points within the domain, called **collocation points** ($x_j$ or $(x_j, t_j)$). The weighting functions are Dirac delta functions centered at these collocation points.

**Mathematical Formulation:**

The weighting functions are chosen as:
$w_j(x, t) = \delta(x - x_j, t - t_j)$ (for 2D spatial variable and time)
or
$w_j(x, y) = \delta(x - x_j, y - y_j)$ (for 2D spatial variables)

where $\delta$ is the Dirac delta function.

The weighted residual statement becomes:
$\int_{\Omega} \delta(x - x_j, t - t_j) R(x, t; c_1, ..., c_N) d\Omega = 0$

Due to the property of the Dirac delta function, this simplifies to:
$R(x_j, t_j; c_1, ..., c_N) = 0$

Thus, the residual must be zero at each collocation point.

**Steps for Application:**

1.  **Define the trial solution:** $\tilde{u}(x, t; c_1, ..., c_N) = \sum_{i=1}^{N} c_i \phi_i(x, t)$. Ensure basis functions satisfy essential boundary conditions.
2.  **Substitute into the PDE:** Calculate the residual $R = L(\tilde{u}) - f$.
3.  **Choose collocation points:** Select $N$ points $(x_j, t_j)$ within the domain.
4.  **Set residual to zero at collocation points:** $R(x_j, t_j; c_1, ..., c_N) = 0$ for $j = 1, ..., N$. This generates a system of $N$ linear (or nonlinear) algebraic equations for the $N$ unknown coefficients $c_j$.
5.  **Solve the system of equations** for $c_j$.
6.  **Substitute the coefficients back** into the trial solution to get the approximate solution.

**Advantages:**

*   Conceptually simple and easy to implement.
*   Often leads to sparse systems of equations.

**Disadvantages:**

*   The accuracy is highly dependent on the choice of collocation points.
*   Can be sensitive to the behavior of the solution between collocation points.

**Example:**

Consider the one-dimensional boundary value problem (BVP):
$\frac{d^2 u}{dx^2} + u = -x$, with $u(0) = 0$ and $u(1) = 0$.

Let's approximate the solution using the Collocation method with $N=2$ basis functions, $\phi_1(x) = x(1-x)$ and $\phi_2(x) = x^2(1-x)$. The trial solution is:
$\tilde{u}(x) = c_1 x(1-x) + c_2 x^2(1-x)$
Note that this choice of basis functions automatically satisfies the essential boundary conditions $u(0)=0$ and $u(1)=0$.

The PDE is $L(u) = \frac{d^2 u}{dx^2} + u$.
The source term is $f = -x$.

Calculate the second derivative of $\tilde{u}$:
$\frac{d\tilde{u}}{dx} = c_1(1-2x) + c_2(2x-3x^2)$
$\frac{d^2\tilde{u}}{dx^2} = -2c_1 + c_2(2-6x)$

The residual is:
$R(x) = (-2c_1 + c_2(2-6x)) + (c_1 x(1-x) + c_2 x^2(1-x)) - (-x)$
$R(x) = -2c_1 + 2c_2 - 6xc_2 + c_1 x - c_1 x^2 + c_2 x^2 - c_2 x^3 + x$

Let's choose $N=2$ collocation points, say $x_1 = 1/3$ and $x_2 = 2/3$.

**Collocation at $x_1 = 1/3$:**
$R(1/3) = -2c_1 + 2c_2 - 6(1/3)c_2 + c_1 (1/3) - c_1 (1/3)^2 + c_2 (1/3)^2 - c_2 (1/3)^3 + (1/3) = 0$
$-2c_1 + 2c_2 - 2c_2 + \frac{1}{3}c_1 - \frac{1}{9}c_1 + \frac{1}{9}c_2 - \frac{1}{27}c_2 + \frac{1}{3} = 0$
Multiplying by 27:
$-54c_1 + 9c_1 - 3c_1 + 3c_2 - c_2 + 9 = 0$
$-48c_1 + 2c_2 = -9 \quad (Equation 1)$

**Collocation at $x_2 = 2/3$:**
$R(2/3) = -2c_1 + 2c_2 - 6(2/3)c_2 + c_1 (2/3) - c_1 (2/3)^2 + c_2 (2/3)^2 - c_2 (2/3)^3 + (2/3) = 0$
$-2c_1 + 2c_2 - 4c_2 + \frac{2}{3}c_1 - \frac{4}{9}c_1 + \frac{4}{9}c_2 - \frac{8}{27}c_2 + \frac{2}{3} = 0$
Multiplying by 27:
$-54c_1 + 54c_2 - 108c_2 + 18c_1 - 12c_1 + 12c_2 - 8c_2 + 18 = 0$
$(-54 + 18 - 12)c_1 + (54 - 108 + 12 - 8)c_2 = -18$
$-48c_1 - 50c_2 = -18 \quad (Equation 2)$

Now we have a system of two linear equations for $c_1$ and $c_2$:
1) $-48c_1 + 2c_2 = -9$
2) $-48c_1 - 50c_2 = -18$

Subtracting (2) from (1):
$(2 - (-50))c_2 = -9 - (-18)$
$52c_2 = 9 \implies c_2 = 9/52$

Substitute $c_2$ into (1):
$-48c_1 + 2(9/52) = -9$
$-48c_1 + 9/26 = -9$
$-48c_1 = -9 - 9/26 = (-234 - 9)/26 = -243/26$
$c_1 = \frac{-243}{26 \times -48} = \frac{243}{1248} = \frac{81}{416}$

So, the approximate solution is $\tilde{u}(x) = \frac{81}{416} x(1-x) + \frac{9}{52} x^2(1-x)$.

---

### 3. Method of Least Squares

**Concept:**

The Method of Least Squares seeks to minimize the integral of the *square* of the residual over the entire domain. This is analogous to the least squares fitting in regression analysis.

**Mathematical Formulation:**

The objective is to minimize the functional $I$:
$I(c_1, ..., c_N) = \int_{\Omega} [R(x, t; c_1, ..., c_N)]^2 d\Omega$

To find the values of $c_j$ that minimize $I$, we set the partial derivatives of $I$ with respect to each $c_k$ to zero:
$\frac{\partial I}{\partial c_k} = \frac{\partial}{\partial c_k} \int_{\Omega} [R]^2 d\Omega = \int_{\Omega} 2R \frac{\partial R}{\partial c_k} d\Omega = 0$

This leads to the weighted residual statement with weighting functions:
$w_k = \frac{\partial R}{\partial c_k}$

So, the weighted residual statement becomes:
$\int_{\Omega} \frac{\partial R}{\partial c_k} R(x, t; c_1, ..., c_N) d\Omega = 0, \quad k = 1, 2, ..., N$

**Steps for Application:**

1.  **Define the trial solution:** $\tilde{u}(x, t; c_1, ..., c_N) = \sum_{i=1}^{N} c_i \phi_i(x, t)$. Ensure basis functions satisfy essential boundary conditions.
2.  **Substitute into the PDE:** Calculate the residual $R = L(\tilde{u}) - f$.
3.  **Calculate partial derivatives:** Find $\frac{\partial R}{\partial c_k}$ for each $k$.
4.  **Formulate the integral equations:** Set up the system of $N$ equations: $\int_{\Omega} \frac{\partial R}{\partial c_k} R d\Omega = 0$.
5.  **Evaluate the integrals:** This often involves analytical integration or numerical quadrature.
6.  **Solve the system of equations** for $c_j$.
7.  **Substitute the coefficients back** into the trial solution.

**Advantages:**

*   Generally provides a more robust and stable solution compared to Collocation, as it minimizes error over the entire domain.
*   Less sensitive to the choice of basis functions than Collocation.

**Disadvantages:**

*   Can lead to a fully populated system of equations, which can be computationally more expensive than sparse systems from Collocation.
*   Requires evaluating integrals, which can be more complex.
*   The resulting system might be nonlinear even if the PDE is linear, if basis functions are not chosen carefully.

**Example:**

Consider the same BVP as before:
$\frac{d^2 u}{dx^2} + u = -x$, with $u(0) = 0$ and $u(1) = 0$.
Trial solution: $\tilde{u}(x) = c_1 x(1-x) + c_2 x^2(1-x)$.

We found the residual:
$R(x) = -2c_1 + 2c_2 - 6xc_2 + c_1 x - c_1 x^2 + c_2 x^2 - c_2 x^3 + x$

Now we need to calculate $\frac{\partial R}{\partial c_1}$ and $\frac{\partial R}{\partial c_2}$:
$\frac{\partial R}{\partial c_1} = -2 + x - x^2$
$\frac{\partial R}{\partial c_2} = 2 - 6x + x^2 - x^3$

The integral domain is $\Omega = [0, 1]$.

**Equation for $k=1$:**
$\int_{0}^{1} \frac{\partial R}{\partial c_1} R dx = \int_{0}^{1} (-2 + x - x^2) [-2c_1 + 2c_2 - 6xc_2 + c_1 x - c_1 x^2 + c_2 x^2 - c_2 x^3 + x] dx = 0$

This is a very tedious integral to compute manually. Let's expand it conceptually:
The integral will be a sum of terms like:
$\int_{0}^{1} (-2)(-2c_1) dx + \int_{0}^{1} (-2)(2c_2) dx + \int_{0}^{1} (-2)(-6xc_2) dx + \dots + \int_{0}^{1} (x)(c_2 x^2) dx + \int_{0}^{1} (x)(-c_2 x^3) dx + \int_{0}^{1} (x)(x) dx$

Each integral of the form $\int_{0}^{1} x^p dx$ is $\frac{1}{p+1}$.
For example:
$\int_{0}^{1} (-2)(-2c_1) dx = 4c_1 \int_{0}^{1} dx = 4c_1$
$\int_{0}^{1} (-2)(x) dx = -2 \int_{0}^{1} x dx = -2 (1/2) = -1$
$\int_{0}^{1} (x)(x) dx = \int_{0}^{1} x^2 dx = 1/3$

After expanding and integrating all terms, we would get a linear equation of the form $A_{11}c_1 + A_{12}c_2 = B_1$.

**Equation for $k=2$:**
$\int_{0}^{1} \frac{\partial R}{\partial c_2} R dx = \int_{0}^{1} (2 - 6x + x^2 - x^3) [-2c_1 + 2c_2 - 6xc_2 + c_1 x - c_1 x^2 + c_2 x^2 - c_2 x^3 + x] dx = 0$

Similarly, this would result in another linear equation $A_{21}c_1 + A_{22}c_2 = B_2$.

The system of equations would be:
$A_{11}c_1 + A_{12}c_2 = B_1$
$A_{21}c_1 + A_{22}c_2 = B_2$

This system needs to be solved for $c_1$ and $c_2$.

---

### 4. Galerkin's Method

**Concept:**

Galerkin's method is a special case of weighted residual methods where the weighting functions are chosen to be the same as the basis functions used in the trial solution.

**Mathematical Formulation:**

The weighting functions are chosen as:
$w_j(x, t) = \phi_j(x, t)$

The weighted residual statement becomes:
$\int_{\Omega} \phi_j(x, t) R(x, t; c_1, ..., c_N) d\Omega = 0, \quad j = 1, 2, ..., N$

If the basis functions $\phi_i$ are linearly independent and the domain $\Omega$ is well-behaved, this formulation ensures that the residual is orthogonal to each basis function.

**Relationship to Least Squares:**

For many linear PDEs with self-adjoint operators, Galerkin's method is equivalent to the Method of Least Squares. In general, for a linear PDE $L(u) = f$, where $L$ is a linear operator, Galerkin's method leads to a system of linear algebraic equations:
$\sum_{i=1}^{N} c_i \int_{\Omega} \phi_j L(\phi_i) d\Omega = \int_{\Omega} \phi_j f d\Omega, \quad j = 1, ..., N$

This can be written in matrix form: $K \mathbf{c} = \mathbf{F}$, where $K_{ji} = \int_{\Omega} \phi_j L(\phi_i) d\Omega$ and $F_j = \int_{\Omega} \phi_j f d\Omega$.

**Steps for Application:**

1.  **Define the trial solution:** $\tilde{u}(x, t; c_1, ..., c_N) = \sum_{i=1}^{N} c_i \phi_i(x, t)$. Ensure basis functions satisfy essential boundary conditions.
2.  **Substitute into the PDE:** Calculate the residual $R = L(\tilde{u}) - f$.
3.  **Formulate the integral equations:** Set up the system of $N$ equations: $\int_{\Omega} \phi_j R d\Omega = 0$ for $j = 1, ..., N$.
4.  **Evaluate the integrals:** This often involves analytical integration or numerical quadrature. For linear PDEs, this leads to a system of linear equations.
5.  **Solve the system of equations** for $c_j$.
6.  **Substitute the coefficients back** into the trial solution.

**Advantages:**

*   Leads to a system of linear equations for linear PDEs, which is easier to solve.
*   Often considered the most systematic and widely used weighted residual method.
*   The resulting matrices (like the stiffness matrix $K$) often have desirable properties (e.g., symmetric, positive-definite for certain operators).

**Disadvantages:**

*   Requires that the basis functions satisfy the essential boundary conditions.
*   May still require numerical integration for complex problems.

**Example:**

Consider the same BVP:
$\frac{d^2 u}{dx^2} + u = -x$, with $u(0) = 0$ and $u(1) = 0$.
Trial solution: $\tilde{u}(x) = c_1 x(1-x) + c_2 x^2(1-x)$.
Basis functions: $\phi_1(x) = x(1-x)$, $\phi_2(x) = x^2(1-x)$.

The residual is:
$R(x) = \frac{d^2\tilde{u}}{dx^2} + \tilde{u} - (-x)$
$R(x) = [-2c_1 + c_2(2-6x)] + [c_1 x(1-x) + c_2 x^2(1-x)] + x$

**Galerkin for $j=1$:**
$\int_{0}^{1} \phi_1(x) R(x) dx = \int_{0}^{1} x(1-x) [-2c_1 + c_2(2-6x) + c_1 x(1-x) + c_2 x^2(1-x) + x] dx = 0$

This integral expands to:
$\int_{0}^{1} (x-x^2) [-2c_1 + 2c_2 - 6xc_2 + c_1(x-x^2) + c_2(x^2-x^3) + x] dx = 0$

Let's compute the relevant integrals of powers of $x$:
$\int_0^1 x^n dx = \frac{1}{n+1}$
$\int_0^1 x(1-x) dx = \int_0^1 (x-x^2) dx = [x^2/2 - x^3/3]_0^1 = 1/2 - 1/3 = 1/6$
$\int_0^1 x^2(1-x) dx = \int_0^1 (x^2-x^3) dx = [x^3/3 - x^4/4]_0^1 = 1/3 - 1/4 = 1/12$
$\int_0^1 x^3(1-x) dx = \int_0^1 (x^3-x^4) dx = [x^4/4 - x^5/5]_0^1 = 1/4 - 1/5 = 1/20$
$\int_0^1 x^4(1-x) dx = \int_0^1 (x^4-x^5) dx = [x^5/5 - x^6/6]_0^1 = 1/5 - 1/6 = 1/30$
$\int_0^1 x^2(1-x)^2 dx = \int_0^1 x^2(1-2x+x^2) dx = \int_0^1 (x^2-2x^3+x^4) dx = [x^3/3 - 2x^4/4 + x^5/5]_0^1 = 1/3 - 1/2 + 1/5 = (10-15+6)/30 = 1/30$

Let's write the residual in terms of $c_1, c_2$ and powers of $x$:
$R(x) = -2c_1 + 2c_2 + x(c_1+1) + x^2(c_2-c_1) + x^3(-c_2) + x^2c_2 + c_1x^2 - c_1x^3 - c_2x^3 + x$
$R(x) = (-2c_1 + 2c_2) + (c_1+1)x + (c_2 - c_1 + c_1)x^2 + (-c_2 + c_2)x^3$
$R(x) = (-2c_1 + 2c_2) + (c_1+1)x + c_2 x^2$ (Mistake in prior calculation, let's recalculate)

$\frac{d^2\tilde{u}}{dx^2} = c_1(1-2x)'$' + c_2(2x-3x^2)' = -2c_1 + c_2(2-6x)$
$L(\tilde{u}) = \frac{d^2\tilde{u}}{dx^2} + \tilde{u} = -2c_1 + c_2(2-6x) + c_1 x(1-x) + c_2 x^2(1-x)$
$L(\tilde{u}) = -2c_1 + 2c_2 - 6xc_2 + c_1(x-x^2) + c_2(x^2-x^3)$
$L(\tilde{u}) = -2c_1 + 2c_2 + c_1 x - c_1 x^2 + c_2 x^2 - c_2 x^3 - 6xc_2$
$L(\tilde{u}) = -2c_1 + 2c_2 + (c_1 - 6c_2)x - c_1 x^2 + c_2 x^2 - c_2 x^3$

Residual $R(x) = L(\tilde{u}) - f = -2c_1 + 2c_2 + (c_1 - 6c_2)x + (-c_1+c_2) x^2 - c_2 x^3 + x$
$R(x) = (-2c_1 + 2c_2) + (c_1 - 6c_2 + 1)x + (-c_1+c_2) x^2 - c_2 x^3$

**Galerkin for $j=1$:** $\int_{0}^{1} (x-x^2) R(x) dx = 0$
$\int_{0}^{1} (x-x^2) [(-2c_1 + 2c_2) + (c_1 - 6c_2 + 1)x + (-c_1+c_2) x^2 - c_2 x^3] dx = 0$

We need integrals of the form:
$\int_0^1 (x-x^2) x^n dx = \int_0^1 (x^{n+1} - x^{n+2}) dx = \frac{1}{n+2} - \frac{1}{n+3}$

For $n=0$ (constant term): $\int_0^1 (x-x^2) dx = 1/2 - 1/3 = 1/6$
For $n=1$ ($x$ term): $\int_0^1 (x-x^2) x dx = \int_0^1 (x^2-x^3) dx = 1/3 - 1/4 = 1/12$
For $n=2$ ($x^2$ term): $\int_0^1 (x-x^2) x^2 dx = \int_0^1 (x^3-x^4) dx = 1/4 - 1/5 = 1/20$
For $n=3$ ($x^3$ term): $\int_0^1 (x-x^2) x^3 dx = \int_0^1 (x^4-x^5) dx = 1/5 - 1/6 = 1/30$

Equation 1:
$(-2c_1 + 2c_2) (1/6) + (c_1 - 6c_2 + 1) (1/12) + (-c_1+c_2) (1/20) - c_2 (1/30) = 0$
Multiply by 60:
$10(-2c_1 + 2c_2) + 5(c_1 - 6c_2 + 1) + 3(-c_1+c_2) - 2c_2 = 0$
$-20c_1 + 20c_2 + 5c_1 - 30c_2 + 5 - 3c_1 + 3c_2 - 2c_2 = 0$
$(-20 + 5 - 3)c_1 + (20 - 30 + 3 - 2)c_2 = -5$
$-18c_1 - 9c_2 = -5 \quad (Eq 1)$

**Galerkin for $j=2$:** $\int_{0}^{1} x^2(1-x) R(x) dx = 0$
$\int_{0}^{1} (x^2-x^3) [(-2c_1 + 2c_2) + (c_1 - 6c_2 + 1)x + (-c_1+c_2) x^2 - c_2 x^3] dx = 0$

We need integrals of the form:
$\int_0^1 (x^2-x^3) x^n dx = \int_0^1 (x^{n+2} - x^{n+3}) dx = \frac{1}{n+3} - \frac{1}{n+4}$

For $n=0$: $\int_0^1 (x^2-x^3) dx = 1/3 - 1/4 = 1/12$
For $n=1$: $\int_0^1 (x^2-x^3) x dx = \int_0^1 (x^3-x^4) dx = 1/4 - 1/5 = 1/20$
For $n=2$: $\int_0^1 (x^2-x^3) x^2 dx = \int_0^1 (x^4-x^5) dx = 1/5 - 1/6 = 1/30$
For $n=3$: $\int_0^1 (x^2-x^3) x^3 dx = \int_0^1 (x^5-x^6) dx = 1/6 - 1/7 = 1/42$

Equation 2:
$(-2c_1 + 2c_2) (1/12) + (c_1 - 6c_2 + 1) (1/20) + (-c_1+c_2) (1/30) - c_2 (1/42) = 0$
Multiply by 420 (LCM of 12, 20, 30, 42):
$35(-2c_1 + 2c_2) + 21(c_1 - 6c_2 + 1) + 14(-c_1+c_2) - 10c_2 = 0$
$-70c_1 + 70c_2 + 21c_1 - 126c_2 + 21 - 14c_1 + 14c_2 - 10c_2 = 0$
$(-70 + 21 - 14)c_1 + (70 - 126 + 14 - 10)c_2 = -21$
$-63c_1 - 52c_2 = -21 \quad (Eq 2)$

System of equations:
1) $-18c_1 - 9c_2 = -5$
2) $-63c_1 - 52c_2 = -21$

Solving this system (e.g., using Cramer's rule or substitution) would give the values for $c_1$ and $c_2$.

---

### 5. Weighted Residuals for Initial Value Problems (IVPs)

For IVPs of ODEs or PDEs, the domain is typically spatial and temporal. The trial solution must also satisfy the initial conditions.

**Example: First-order ODE IVP**
$\frac{du}{dt} = -u$, with $u(0) = u_0$.

Let $N=1$ and the trial solution be $\tilde{u}(t) = c_1 \phi_1(t)$.
If $\phi_1(t) = e^{-t}$, then $\tilde{u}(0) = c_1 e^0 = c_1$. To satisfy $u(0)=u_0$, we need $c_1 = u_0$. So $\tilde{u}(t) = u_0 e^{-t}$ is the exact solution. This is a trivial case.

Let's use a polynomial basis, e.g., $\phi_1(t) = t$. Then $\tilde{u}(t) = c_1 t$.
This trial solution does not satisfy $u(0)=u_0$ unless $u_0=0$.

A better approach for IVPs is to use basis functions that inherently satisfy the initial condition. For instance, if $u(0)=u_0$, we can write:
$\tilde{u}(t) = u_0 \psi_0(t) + \sum_{i=1}^{N} c_i \psi_i(t)$
where $\psi_0(t)$ satisfies $\psi_0(0)=1$ and $\psi_i(0)=0$ for $i \geq 1$.
A common choice is $\phi_1(t) = t$ and $\phi_2(t) = t^2$, etc. If the initial condition is $u(0)=u_0$, then a trial solution of the form $\tilde{u}(t) = u_0 + c_1 t + c_2 t^2 + \dots$ can be used.

Let's use $\tilde{u}(t) = u_0 (1+t)$. This is not ideal for a general approach.
A more flexible approach is to incorporate the initial condition into the basis functions or use a trial solution of the form $\tilde{u}(t) = u_0 + c_1 \phi_1(t) + \dots$. If $\phi_1(0)=0$, then $\tilde{u}(0) = u_0$.

Let's try $\tilde{u}(t) = c_1 \phi_1(t)$ where $\phi_1(t)$ is chosen such that $\phi_1(0) \neq 0$.
Then the residual is $R(t) = \frac{d\tilde{u}}{dt} + \tilde{u} = c_1 - c_1 t$.
If we use $\tilde{u}(t) = c_1 (1-e^{-t})$, then $\tilde{u}(0)=0$.
If the initial condition is $u(0)=u_0$, we typically choose a trial function that satisfies it:
$\tilde{u}(t) = u_0 \psi_0(t) + \sum_{i=1}^{N} c_i \phi_i(t)$, where $\psi_0(0)=1$ and $\phi_i(0)=0$.
Or, we can absorb the initial condition directly if the basis functions are simple:
$\tilde{u}(t) = u_0 + c_1 t$.
$R(t) = \frac{d\tilde{u}}{dt} + \tilde{u} = c_1 + (u_0 + c_1 t) = u_0 + c_1(1+t)$.
For Collocation at $t_1$: $u_0 + c_1(1+t_1) = 0 \implies c_1 = -\frac{u_0}{1+t_1}$.
For Galerkin: $\int_0^T \phi_1(t) R(t) dt = 0$, where $\phi_1(0)=0$. Let $\phi_1(t) = t$.
$\int_0^T t (u_0 + c_1(1+t)) dt = 0$
$\int_0^T (u_0 t + c_1 t + c_1 t^2) dt = 0$
$[u_0 t^2/2 + c_1 t^2/2 + c_1 t^3/3]_0^T = 0$
$u_0 T^2/2 + c_1 T^2/2 + c_1 T^3/3 = 0$
$c_1 (T^2/2 + T^3/3) = -u_0 T^2/2$
$c_1 T^2 (1/2 + T/3) = -u_0 T^2/2$
$c_1 \frac{3T^2 + 2T^3}{6} = -u_0 \frac{T^2}{2}$
$c_1 = -u_0 \frac{T^2}{2} \frac{6}{T^2(3+2T)} = -\frac{3u_0}{3+2T}$.
Then $\tilde{u}(t) = u_0 - \frac{3u_0}{3+2T} t$.

**For PDEs with IVPs and BVPs (e.g., Heat Equation):**
$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$
with $u(x, 0) = f(x)$ and boundary conditions at $x=0, L$.

We can use a trial solution $\tilde{u}(x, t)$. For example, if we discretize in space first (method of lines):
$\tilde{u}(x, t) \approx \sum_{k=1}^{M} c_k(t) \phi_k(x)$, where $\phi_k(x)$ are spatial basis functions satisfying the boundary conditions.
Substituting this into the PDE results in a system of ODEs for $c_k(t)$. These ODEs can then be solved using numerical methods.

Alternatively, we can discretize both space and time or use a Petrov-Galerkin approach where temporal basis functions are different from spatial ones.

---

### 6. Choosing a Method

*   **Collocation:** Simple to implement, good for smooth solutions, can be efficient if good collocation points are known. Sensitive to point placement.
*   **Least Squares:** More robust, minimizes error over the entire domain. Can lead to dense matrices and more complex integrals.
*   **Galerkin:** Systematic, leads to linear systems for linear PDEs, often preferred for its mathematical properties and widespread use. Requires basis functions to satisfy essential boundary conditions.

The choice often depends on the problem characteristics, desired accuracy, and computational resources.

---

### Practice Questions

1.  **Conceptual:** Explain the core difference between the Collocation method and Galerkin's method.
2.  **Application (Galerkin):** Solve the BVP $\frac{d^2 u}{dx^2} = -1$ with $u(0)=0$ and $u(1)=0$ using Galerkin's method with a single basis function $\phi_1(x) = x(1-x)$.
3.  **Application (Collocation):** Solve the same BVP ($\frac{d^2 u}{dx^2} = -1$, $u(0)=0$, $u(1)=0$) using Collocation method with one basis function $\phi_1(x) = x(1-x)$ and one collocation point $x_1 = 0.5$.
4.  **Application (Least Squares):** For the same BVP and trial function $\tilde{u}(x) = c_1 x(1-x)$, set up the integral equation for the Method of Least Squares. You do not need to solve it, just set up the integral to be zero.

---

### Answers to Practice Questions

**1. Conceptual:**
*   **Collocation:** Requires the residual to be zero at specific *points* within the domain. Uses Dirac delta functions as weighting functions.
*   **Galerkin:** Requires the residual to be orthogonal to the *basis functions* themselves over the entire domain. Uses the basis functions as weighting functions.

**2. Application (Galerkin):**
BVP: $\frac{d^2 u}{dx^2} = -1$, $u(0)=0$, $u(1)=0$.
Trial function: $\tilde{u}(x) = c_1 \phi_1(x) = c_1 x(1-x)$.
$\frac{d\tilde{u}}{dx} = c_1(1-2x)$, $\frac{d^2\tilde{u}}{dx^2} = -2c_1$.
Residual: $R(x) = \frac{d^2\tilde{u}}{dx^2} - (-1) = -2c_1 + 1$.

Galerkin's method: $\int_0^1 \phi_1(x) R(x) dx = 0$.
$\int_0^1 x(1-x) (-2c_1 + 1) dx = 0$.
$(-2c_1 + 1) \int_0^1 (x-x^2) dx = 0$.
$(-2c_1 + 1) [x^2/2 - x^3/3]_0^1 = 0$.
$(-2c_1 + 1) (1/2 - 1/3) = 0$.
$(-2c_1 + 1) (1/6) = 0$.
$-2c_1 + 1 = 0 \implies c_1 = 1/2$.
Approximate solution: $\tilde{u}(x) = \frac{1}{2} x(1-x)$.

*(Note: The exact solution is $u(x) = \frac{1}{2}x(1-x)$, so this approximation is exact for this simple case.)*

**3. Application (Collocation):**
BVP: $\frac{d^2 u}{dx^2} = -1$, $u(0)=0$, $u(1)=0$.
Trial function: $\tilde{u}(x) = c_1 \phi_1(x) = c_1 x(1-x)$.
Residual: $R(x) = -2c_1 + 1$.
Collocation point: $x_1 = 0.5$.

Collocation requires $R(x_1) = 0$.
$R(0.5) = -2c_1 + 1 = 0$.
$c_1 = 1/2$.
Approximate solution: $\tilde{u}(x) = \frac{1}{2} x(1-x)$.

**4. Application (Least Squares):**
BVP: $\frac{d^2 u}{dx^2} = -1$, $u(0)=0$, $u(1)=0$.
Trial function: $\tilde{u}(x) = c_1 x(1-x)$.
Residual: $R(x) = -2c_1 + 1$.

Least Squares requires minimizing $\int_0^1 R(x)^2 dx$.
This is done by setting $\frac{\partial}{\partial c_1} \int_0^1 R(x)^2 dx = 0$.
$\int_0^1 2 R(x) \frac{\partial R}{\partial c_1} dx = 0$.
$\frac{\partial R}{\partial c_1} = \frac{\partial}{\partial c_1}(-2c_1 + 1) = -2$.

The integral equation is:
$\int_0^1 (-2) (-2c_1 + 1) dx = 0$.
$-2 \int_0^1 (-2c_1 + 1) dx = 0$.
$\int_0^1 (-2c_1 + 1) dx = 0$.
This is exactly the same equation obtained by Galerkin's method for this specific problem, leading to $c_1 = 1/2$.

---

### Important Points to Remember

*   **Trial Solution:** Choose basis functions that satisfy essential boundary conditions whenever possible. For IVPs, ensure initial conditions are met.
*   **Residual:** The error term $R = L(\tilde{u}) - f$.
*   **Weighting Functions:** The choice of $w_j$ defines the method (Dirac delta for Collocation, basis functions for Galerkin, $\partial R / \partial c_k$ for Least Squares).
*   **System of Equations:** All weighted residual methods transform a PDE into a system of algebraic equations for the unknown coefficients $c_j$.
*   **Order of Accuracy:** Generally, higher $N$ (more basis functions) leads to better accuracy.
*   **Integral Evaluation:** For many problems, analytical integration is possible. For more complex cases, numerical quadrature (e.g., Gaussian quadrature) is used.
*   **Computational Cost:** Collocation can be computationally cheaper if it yields sparse systems. Least Squares and Galerkin can lead to denser matrices.

---
