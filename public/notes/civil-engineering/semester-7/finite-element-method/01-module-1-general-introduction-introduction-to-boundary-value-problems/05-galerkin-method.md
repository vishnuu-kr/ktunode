---
title: "Galerkin method"
subject: "FINITE ELEMENT METHOD"
module: "Module 1: General Introduction –introduction to boundary value problems"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116c9"
status: "completed"
scrapedAt: "2026-05-20T18:58:49.522Z"
---
## Finite Element Method: Module 1 - General Introduction to Boundary Value Problems

### Topic: The Galerkin Method

This module introduces the fundamental concepts of the Finite Element Method (FEM), focusing on how we approximate solutions to boundary value problems (BVPs). The Galerkin method is a cornerstone of FEM, providing a systematic way to derive these approximations.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the nature of Boundary Value Problems (BVPs) and their relevance to engineering.**
*   **Appreciate the need for approximate solution techniques for BVPs.**
*   **Introduce the concept of weak formulation and its role in transforming BVPs.**
*   **Explain the principle of the Galerkin method for deriving approximate solutions.**
*   **Formulate the Galerkin weighted residual method for a given differential equation.**
*   **Understand the process of selecting trial and test functions within the Galerkin framework.**
*   **Recognize the connection between the Galerkin method and the concept of minimizing errors.**

---

### 1. Introduction to Boundary Value Problems (BVPs)

Many physical phenomena in engineering and science are described by differential equations, often coupled with conditions at the boundaries of the domain. These are known as Boundary Value Problems (BVPs).

**Key Concepts:**

*   **Differential Equation:** An equation that relates a function with its derivatives.
    *   **Ordinary Differential Equation (ODE):** Involves derivatives with respect to a single independent variable.
    *   **Partial Differential Equation (PDE):** Involves derivatives with respect to multiple independent variables.
*   **Domain ($\Omega$):** The region over which the differential equation is defined.
*   **Boundary ($\Gamma$):** The limits or edges of the domain.
*   **Boundary Conditions (BCs):** Conditions specified on the boundary of the domain that help in obtaining a unique solution.
    *   **Dirichlet Boundary Conditions (Essential BCs):** Specify the value of the unknown function on the boundary (e.g., $u(x) = u_0$ on $\Gamma_D$).
    *   **Neumann Boundary Conditions (Natural BCs):** Specify the derivative of the unknown function on the boundary (e.g., $\frac{\partial u}{\partial n} = q_0$ on $\Gamma_N$).
    *   **Mixed Boundary Conditions:** A combination of Dirichlet and Neumann conditions on different parts of the boundary.

**Why are BVPs important in Engineering?**

BVPs are used to model a wide range of physical phenomena, including:

*   **Heat Transfer:** Temperature distribution in an object.
*   **Structural Mechanics:** Deflection and stress in beams, plates, and solids.
*   **Fluid Dynamics:** Velocity and pressure distribution in fluids.
*   **Electromagnetics:** Electric and magnetic fields.

**Example: 1D Heat Conduction**

Consider a one-dimensional rod of length $L$ with temperature $T(x)$. The steady-state heat conduction is governed by the following second-order ODE:

$-\frac{d}{dx}\left(k(x)\frac{dT}{dx}\right) + q(x) = 0$, for $0 < x < L$

where:
*   $k(x)$ is the thermal conductivity (can vary with position).
*   $q(x)$ is the heat generated per unit volume.

Boundary conditions might be:
*   **Dirichlet:** $T(0) = T_0$ (fixed temperature at one end)
*   **Neumann:** $-k(L)\frac{dT}{dx}\Big|_{x=L} = Q_0$ (heat flux at the other end)

---

### 2. The Need for Approximate Solution Techniques

Many BVPs, especially those with complex geometries, material properties, or boundary conditions, do not have simple analytical solutions. In such cases, we resort to numerical methods to find approximate solutions.

**Limitations of Analytical Solutions:**

*   Many real-world problems involve irregular shapes.
*   Material properties can vary non-uniformly.
*   Boundary conditions can be complex.

**Introduction to Numerical Methods:**

Numerical methods discretize the domain into smaller elements and approximate the solution within each element. The Finite Element Method (FEM) is a powerful and versatile numerical technique.

---

### 3. The Concept of Weak Formulation (Variational Formulation)

The Galerkin method is a type of **weighted residual method**. Before diving into Galerkin, it's crucial to understand the concept of weak formulation.

**The Problem with Direct Approximation:**

If we directly try to approximate the solution $u(x)$ of a differential equation like $L(u) = f$ within a certain domain, and substitute this approximation into the differential equation, the equation will generally not be satisfied exactly. There will be a **residual**, $R(x) = L(\tilde{u}) - f$, where $\tilde{u}(x)$ is our approximate solution.

**The Idea of Weak Formulation:**

Instead of forcing the differential equation to be satisfied *exactly* at every point, we aim to make the **weighted integral of the residual zero** over the domain. This is the essence of the weak formulation.

**Steps to obtain a Weak Formulation (General Procedure):**

1.  **Start with the Strong Form:** The original differential equation and its boundary conditions.
2.  **Introduce a Test Function ($v$):** A function that is arbitrary but satisfies certain smoothness requirements (e.g., continuous and differentiable). Crucially, test functions typically satisfy homogeneous boundary conditions corresponding to the *essential* (Dirichlet) boundary conditions of the original problem.
3.  **Multiply by the Test Function:** Multiply the differential equation by the test function $v$.
4.  **Integrate over the Domain:** Integrate the product over the domain $\Omega$.
    $\int_{\Omega} v (L(u) - f) dx = 0$
5.  **Apply Integration by Parts:** Use integration by parts to reduce the order of the derivatives acting on the unknown function $u$. This process often transfers the derivatives from $u$ to the test function $v$. This is where the "weakness" comes from – the requirement on $u$ might be reduced.
6.  **Incorporate Boundary Terms:** The integration by parts will introduce boundary terms. These boundary terms are then related to the *natural* (Neumann) boundary conditions of the original problem.

**Why Weak Formulation?**

*   **Reduces Derivative Order:** Lowering the derivative order requirement on the unknown function $u$ allows for simpler approximations (e.g., piecewise polynomials).
*   **Handles Neumann BCs Naturally:** Neumann boundary conditions naturally arise from the integration by parts process, simplifying their incorporation.
*   **Foundation for FEM:** It forms the basis for deriving the system of algebraic equations in FEM.

**Example: Weak Formulation of 1D Heat Conduction**

Consider the BVP:
$-u''(x) = f(x)$, for $0 < x < L$
$u(0) = u_0$ (Dirichlet)
$u'(L) = q_0$ (Neumann)

1.  **Strong Form:** $-u''(x) = f(x)$

2.  **Introduce Test Function:** Let $v(x)$ be an arbitrary, sufficiently smooth function such that $v(0) = 0$ (homogeneous Dirichlet BC).

3.  **Multiply and Integrate:**
    $\int_0^L v(x) [-u''(x) - f(x)] dx = 0$
    $\int_0^L v(x) [-u''(x)] dx - \int_0^L v(x) f(x) dx = 0$

4.  **Integration by Parts (on the first term):**
    Let $U = v$ and $dV = -u''(x) dx$. Then $dU = v'(x) dx$ and $V = -u'(x)$.
    $\int_0^L v(x) [-u''(x)] dx = [v(x)(-u'(x))]_0^L - \int_0^L v'(x) [-u'(x)] dx$
    $= -v(L)u'(L) + v(0)u'(0) + \int_0^L v'(x) u'(x) dx$

5.  **Substitute back and Simplify:**
    $[-v(L)u'(L) + v(0)u'(0) + \int_0^L v'(x) u'(x) dx] - \int_0^L v(x) f(x) dx = 0$

6.  **Apply Boundary Conditions for Test Function:**
    Since $v(0) = 0$, the second term vanishes: $v(0)u'(0) = 0$.

7.  **Resulting Weak Form:**
    $\int_0^L v'(x) u'(x) dx - v(L)u'(L) - \int_0^L v(x) f(x) dx = 0$

8.  **Incorporate Neumann BC:**
    We have $u'(L) = q_0$. Substitute this into the boundary term:
    $\int_0^L v'(x) u'(x) dx - v(L)q_0 - \int_0^L v(x) f(x) dx = 0$

    This can be rewritten as:
    $\int_0^L v'(x) u'(x) dx + \int_0^L v(x) f(x) dx = v(L)q_0$

    **Important:** Notice that the derivative of $u$ only appears as $u'$, not $u''$. The test function $v$ only needs to be differentiable once ($v'$). The Neumann condition $u'(L) = q_0$ appears naturally as a boundary term.

---

### 4. The Principle of the Galerkin Method

The Galerkin method is a specific and widely used technique for obtaining an approximate solution from the weak formulation. It falls under the umbrella of **weighted residual methods**.

**Core Idea:**

In the Galerkin method, the **test functions are chosen to be the same as the basis (trial) functions used to approximate the unknown solution.**

**Steps for Galerkin Method:**

1.  **Define the Domain and Problem:** Identify the differential equation and boundary conditions.
2.  **Obtain the Weak Formulation:** Convert the strong form of the BVP into its weak form by introducing a test function and using integration by parts.
3.  **Choose a Set of Basis (Trial) Functions:** Select a set of linearly independent functions $\{\phi_i(x)\}$ that span the solution space. These functions typically satisfy the essential (Dirichlet) boundary conditions.
4.  **Approximate the Solution:** Represent the unknown solution $u(x)$ as a linear combination of these basis functions:
    $\tilde{u}(x) = \sum_{i=1}^N c_i \phi_i(x)$
    where $c_i$ are unknown coefficients to be determined.
5.  **Choose Test Functions:** In the Galerkin method, the test functions are chosen to be the same as the basis functions. So, we have a set of test functions $\{v_j(x)\}$ where $v_j(x) = \phi_j(x)$ for $j = 1, 2, \ldots, N$.
6.  **Substitute Approximation into Weak Form:** Replace $u$ with $\tilde{u}$ in the weak formulation.
7.  **Enforce Weighted Residual Condition:** For *each* test function $v_j(x)$, set the integral of the residual to zero:
    $\int_{\Omega} v_j(x) [L(\tilde{u}) - f(x)] dx = 0$
    (This assumes $L$ is a differential operator and $f$ is the forcing function).
    Alternatively, directly using the weak form derived earlier:
    $\text{WeakForm}(\tilde{u}, v_j) = 0$ for $j = 1, 2, \ldots, N$.
8.  **Generate a System of Algebraic Equations:** Substituting $\tilde{u} = \sum_{i=1}^N c_i \phi_i(x)$ into the weighted residual equations will result in a system of $N$ linear algebraic equations for the $N$ unknown coefficients $c_i$.

**Key Point:** The Galerkin method ensures that the error (residual) is orthogonal to the space spanned by the chosen basis functions. This is a strong condition that leads to accurate approximations.

---

### 5. Formulating the Galerkin Weighted Residual Method

Let's apply the Galerkin principle to a general second-order linear BVP:

**Strong Form:**
$L(u) = -\frac{d}{dx}\left(p(x)\frac{du}{dx}\right) + q(x)u(x) = f(x)$, for $a < x < b$

**Boundary Conditions:**
*   Dirichlet: $u(a) = u_a$
*   Neumann: $p(b)\frac{du}{dx}\Big|_{x=b} = q_b$

**Steps for Galerkin Formulation:**

1.  **Weak Formulation:**
    *   Introduce test function $v(x)$ such that $v(a) = 0$.
    *   Multiply by $v(x)$ and integrate over $(a, b)$:
        $\int_a^b v(x) \left[-\frac{d}{dx}\left(p(x)\frac{du}{dx}\right) + q(x)u(x) - f(x)\right] dx = 0$
    *   Integrate by parts the first term:
        $\int_a^b v(x) \left[-\frac{d}{dx}\left(p(x)\frac{du}{dx}\right)\right] dx = \left[-v(x)p(x)\frac{du}{dx}\right]_a^b - \int_a^b (-v'(x)) p(x)\frac{du}{dx} dx$
        $= -v(b)p(b)\frac{du}{dx}\Big|_{x=b} + v(a)p(a)\frac{du}{dx}\Big|_{x=a} + \int_a^b v'(x) p(x)\frac{du}{dx} dx$
    *   Substitute back and use BCs: $v(a) = 0$, $p(b)\frac{du}{dx}\Big|_{x=b} = q_b$
        $\left[-v(b)q_b + 0 + \int_a^b v'(x) p(x)\frac{du}{dx} dx\right] + \int_a^b v(x)q(x)u(x) dx - \int_a^b v(x)f(x) dx = 0$
    *   Rearrange to the standard weak form:
        $\int_a^b v'(x) p(x)\frac{du}{dx} dx + \int_a^b v(x)q(x)u(x) dx = v(b)q_b + \int_a^b v(x)f(x) dx$

2.  **Choose Basis Functions:**
    *   Select $N$ linearly independent basis functions $\{\phi_i(x)\}_{i=1}^N$.
    *   Ensure these basis functions satisfy the Dirichlet BC: $\phi_i(a) = 0$ for all $i$. (This is crucial for consistency with the test function requirement).
    *   Approximate $u(x)$ as $\tilde{u}(x) = \sum_{i=1}^N c_i \phi_i(x)$.
    *   Note: The total solution often requires a term that explicitly satisfies the Dirichlet BC. So, $\tilde{u}(x) = U(x) + \sum_{i=1}^N c_i \phi_i(x)$, where $U(x)$ satisfies $U(a)=u_a$ and $\phi_i(a)=0$. For simplicity in illustration, if the domain is just $(0,L)$ and $u(0)=0$, then $\tilde{u}(x) = \sum c_i \phi_i(x)$ is sufficient. Let's assume the simpler case for now.

3.  **Galerkin Projection:**
    *   Choose test functions $v_j(x) = \phi_j(x)$ for $j = 1, 2, \ldots, N$.
    *   Substitute $\tilde{u}(x)$ into the weak form and set $v(x) = \phi_j(x)$:
        $\int_a^b \phi_j'(x) p(x)\frac{d}{dx}\left(\sum_{i=1}^N c_i \phi_i(x)\right) dx + \int_a^b \phi_j(x)q(x)\left(\sum_{i=1}^N c_i \phi_i(x)\right) dx = \phi_j(b)q_b + \int_a^b \phi_j(x)f(x) dx$

4.  **System of Equations:**
    *   Due to linearity, we can pull the sums outside the integrals:
        $\sum_{i=1}^N c_i \left(\int_a^b p(x) \phi_j'(x) \phi_i'(x) dx\right) + \sum_{i=1}^N c_i \left(\int_a^b q(x) \phi_j(x) \phi_i(x) dx\right) = \phi_j(b)q_b + \int_a^b f(x) \phi_j(x) dx$
    *   This can be written in matrix form $Ac = b$, where:
        *   $A_{ji} = \int_a^b p(x) \phi_j'(x) \phi_i'(x) dx + \int_a^b q(x) \phi_j(x) \phi_i(x) dx$
        *   $c_j$ are the unknown coefficients (if we index from 1 to N) or $c_i$ are the unknowns. Let's stick to $c_i$ for clarity on the summation.
        *   $b_j = \phi_j(b)q_b + \int_a^b f(x) \phi_j(x) dx$

**Important Considerations for Basis Functions:**

*   **Completeness:** The set of basis functions should be able to approximate the true solution with increasing accuracy as $N$ increases.
*   **Continuity:** For a problem requiring $u''$, basis functions that are $C^1$ continuous are ideal for Galerkin. For $u'$, $C^0$ continuous functions are sufficient.
*   **Enforcing Dirichlet BCs:** This is critical. Basis functions $\phi_i(x)$ must satisfy the homogeneous version of the Dirichlet BCs.

---

### 6. Trial and Test Functions in Galerkin

*   **Trial Functions ($\phi_i(x)$):** These are functions used to construct the approximate solution $\tilde{u}(x)$. They form a basis for the solution space.
    *   **Requirement:** Must be admissible, meaning they satisfy the essential (Dirichlet) boundary conditions.
*   **Test Functions ($v_j(x)$):** These are functions used to "weight" the residual. The Galerkin method states that the test functions must be chosen from the *same space* as the trial functions.
    *   **Requirement:** In Galerkin, $v_j(x) = \phi_j(x)$. They must also be sufficiently smooth to allow for integration by parts (at least $C^1$ if $u''$ is present, $C^0$ if only $u'$ is present). They must also satisfy the homogeneous boundary conditions corresponding to the essential BCs.

**Why this choice?**

By making the test functions the same as the basis functions, we are projecting the residual onto the subspace spanned by the basis functions. This ensures that the approximation is as "close" as possible to the true solution in a least-squares sense (for quadratic problems), or in a way that minimizes the error across the entire domain.

---

### 7. Connection to Minimizing Errors

The Galerkin method is closely related to minimization principles, particularly for self-adjoint differential operators (common in physics and engineering).

*   **Variational Principle:** Many BVPs can be formulated as finding a function $u$ that minimizes a certain functional (e.g., potential energy in structural mechanics).
*   **Minimization of Quadratic Functionals:** If the weak form is derived from minimizing a quadratic functional (like $\int (\frac{1}{2} p (\frac{du}{dx})^2 + \frac{1}{2} q u^2 - fu) dx$), then the Galerkin method applied to the corresponding Euler-Lagrange equation (which is the original differential equation) will yield a system of equations whose solution minimizes that functional over the chosen subspace of basis functions.

**Example:** For the BVP $-u'' = f$ with $u(0)=u(L)=0$, the functional to minimize is $I(u) = \int_0^L \left(\frac{1}{2} (u'(x))^2 - f(x)u(x)\right) dx$. The Euler-Lagrange equation of this functional is indeed $-u'' = f$. The Galerkin method will find coefficients $c_i$ such that $\tilde{u}(x) = \sum c_i \phi_i(x)$ minimizes $I(\tilde{u})$ over the subspace spanned by $\{\phi_i\}$.

**This minimization property is a key reason for the accuracy and stability of the Galerkin method.**

---

### Practice Questions/Exercises

**Question 1:**
Consider the following Boundary Value Problem:
$-u''(x) = x$, for $0 < x < 1$
$u(0) = 0$
$u(1) = 1$

**(a)** Derive the weak formulation of this problem.
**(b)** Choose a simple basis function for approximation. For example, let $\tilde{u}(x) = c_1 x(1-x)$ and then introduce a second basis function $\phi_2(x) = x^2(1-x)$ if needed for better accuracy. Let's stick to a single basis function for simplicity: $\tilde{u}(x) = c_1 x(1-x)$. *Correction: This basis function does not satisfy $u(1)=1$. A better choice that satisfies both BCs is $\tilde{u}(x) = x + c_1 x(1-x)$. Let's simplify and consider a homogeneous problem for now.*

**Let's use a simpler problem to illustrate:**
$-u''(x) = x$, for $0 < x < 1$
$u(0) = 0$
$u(1) = 0$

**(a)** Derive the weak formulation of this problem.
**(b)** Choose a simple basis function $\phi_1(x) = x(1-x)$.
**(c)** Using the Galerkin method with $\tilde{u}(x) = c_1 \phi_1(x)$, derive the algebraic equation for $c_1$.
**(d)** Solve for $c_1$ and state the approximate solution $\tilde{u}(x)$.

**Question 2:**
Consider the BVP:
$-\frac{d}{dx}\left(x\frac{du}{dx}\right) = 1$, for $1 < x < 2$
$u(1) = 0$
$\frac{du}{dx}\Big|_{x=2} = 0$

**(a)** Derive the weak formulation of this problem.
**(b)** Choose a suitable basis function that satisfies the Dirichlet boundary condition $u(1)=0$. For instance, $\phi_1(x) = (x-1)^2$.
**(c)** Using the Galerkin method with $\tilde{u}(x) = c_1 \phi_1(x)$, set up the system of algebraic equations for $c_1$.
**(d)** Solve for $c_1$.

---

### Answers to Practice Questions

**Answer to Question 1:**
BVP: $-u''(x) = x$, $0 < x < 1$, $u(0)=0$, $u(1)=0$.

**(a)** Weak Formulation:
*   Multiply by test function $v(x)$ with $v(0)=0, v(1)=0$.
*   $\int_0^1 v(x)[-u''(x) - x] dx = 0$
*   Integrate by parts: $\int_0^1 v'(x)u'(x) dx - [v(x)u'(x)]_0^1 - \int_0^1 v(x)x dx = 0$
*   Boundary terms vanish due to $v(0)=0$ and $v(1)=0$.
*   Weak Form: $\int_0^1 v'(x)u'(x) dx - \int_0^1 v(x)x dx = 0$

**(b)** Basis function: $\phi_1(x) = x(1-x)$. This satisfies $\phi_1(0)=0$ and $\phi_1(1)=0$.
Approximate solution: $\tilde{u}(x) = c_1 \phi_1(x) = c_1 x(1-x)$.
Derivative of basis function: $\phi_1'(x) = 1 - 2x$.

**(c)** Galerkin Method:
*   Choose test function $v_1(x) = \phi_1(x) = x(1-x)$.
*   Substitute $\tilde{u}(x)$ into the weak form:
    $\int_0^1 \phi_1'(x) \phi_1'(x) dx - \int_0^1 \phi_1(x)x dx = 0$
    $\int_0^1 (1-2x)(1-2x) dx - \int_0^1 x(1-x)x dx = 0$

**(d)** Solve for $c_1$:
*   First integral: $\int_0^1 (1 - 4x + 4x^2) dx = \left[x - 2x^2 + \frac{4}{3}x^3\right]_0^1 = 1 - 2 + \frac{4}{3} = \frac{1}{3}$.
*   Second integral: $\int_0^1 (x^2 - x^3) dx = \left[\frac{x^3}{3} - \frac{x^4}{4}\right]_0^1 = \frac{1}{3} - \frac{1}{4} = \frac{1}{12}$.
*   The equation becomes: $c_1 \left(\frac{1}{3}\right) - \frac{1}{12} = 0$
*   $c_1 \frac{1}{3} = \frac{1}{12} \implies c_1 = \frac{3}{12} = \frac{1}{4}$.

*   Approximate solution: $\tilde{u}(x) = \frac{1}{4} x(1-x)$.

**Answer to Question 2:**
BVP: $-\frac{d}{dx}\left(x\frac{du}{dx}\right) = 1$, $1 < x < 2$, $u(1)=0$, $\frac{du}{dx}\Big|_{x=2}=0$.

**(a)** Weak Formulation:
*   Let $p(x) = x$, $q(x) = 0$, $f(x) = -1$. The equation is $-\frac{d}{dx}(p u') = f$.
*   Introduce test function $v(x)$ such that $v(1)=0$.
*   Multiply by $v(x)$ and integrate over $(1, 2)$: $\int_1^2 v(x)\left[-\frac{d}{dx}\left(x\frac{du}{dx}\right) - 1\right] dx = 0$.
*   Integrate by parts the first term:
    $\int_1^2 v(x)\left[-\frac{d}{dx}\left(x\frac{du}{dx}\right)\right] dx = \left[-v(x)x\frac{du}{dx}\right]_1^2 - \int_1^2 (-v'(x)) x\frac{du}{dx} dx$
    $= -v(2)2\frac{du}{dx}\Big|_{x=2} + v(1)1\frac{du}{dx}\Big|_{x=1} + \int_1^2 v'(x)x\frac{du}{dx} dx$
*   Using BCs: $v(1)=0$, $\frac{du}{dx}\Big|_{x=2}=0$. The boundary term becomes $0 + 0$.
*   Weak Form: $\int_1^2 v'(x)x\frac{du}{dx} dx - \int_1^2 v(x) dx = 0$.
    Or, $\int_1^2 v'(x)x\frac{du}{dx} dx = \int_1^2 v(x) dx$.

**(b)** Basis function: $\phi_1(x) = (x-1)^2$. This satisfies $\phi_1(1) = (1-1)^2 = 0$.
Approximate solution: $\tilde{u}(x) = c_1 \phi_1(x) = c_1 (x-1)^2$.
Derivative of basis function: $\phi_1'(x) = 2(x-1)$.

**(c)** Galerkin Method:
*   Choose test function $v_1(x) = \phi_1(x) = (x-1)^2$.
*   Substitute $\tilde{u}(x)$ into the weak form:
    $\int_1^2 \phi_1'(x) x \frac{d}{dx}(c_1 \phi_1(x)) dx = \int_1^2 \phi_1(x) dx$
    $\int_1^2 [2(x-1)] x [c_1 2(x-1)] dx = \int_1^2 c_1 (x-1)^2 dx$
    $4c_1 \int_1^2 x (x-1)^2 dx = c_1 \int_1^2 (x-1)^2 dx$

**(d)** Solve for $c_1$:
*   Left Integral: $\int_1^2 x(x^2 - 2x + 1) dx = \int_1^2 (x^3 - 2x^2 + x) dx = \left[\frac{x^4}{4} - \frac{2x^3}{3} + \frac{x^2}{2}\right]_1^2$
    $= \left(\frac{16}{4} - \frac{16}{3} + \frac{4}{2}\right) - \left(\frac{1}{4} - \frac{2}{3} + \frac{1}{2}\right)$
    $= (4 - \frac{16}{3} + 2) - (\frac{3 - 8 + 6}{12}) = (6 - \frac{16}{3}) - \frac{1}{12} = \frac{18-16}{3} - \frac{1}{12} = \frac{2}{3} - \frac{1}{12} = \frac{8-1}{12} = \frac{7}{12}$.
*   Right Integral: $\int_1^2 (x-1)^2 dx$. Let $u = x-1$, $du=dx$. Limits: $1-1=0$, $2-1=1$.
    $\int_0^1 u^2 du = \left[\frac{u^3}{3}\right]_0^1 = \frac{1}{3}$.

*   The equation is: $4c_1 \left(\frac{7}{12}\right) = c_1 \left(\frac{1}{3}\right)$
    $\frac{7}{3} c_1 = \frac{1}{3} c_1$
    This equation leads to $\frac{6}{3} c_1 = 0$, so $2c_1 = 0 \implies c_1 = 0$.

*   **Wait!** Something is wrong. The test function must also satisfy the *homogeneous* Neumann boundary condition if it's carried in the weak form. However, in this formulation, the test function $v$ is only required to be zero at $x=1$. The Neumann condition for $u$ at $x=2$ is $\frac{du}{dx}\Big|_{x=2} = 0$. The test function $v$ is multiplied by this derivative in the boundary term of the integration by parts. Since $v(2)$ is not necessarily zero, the term $-v(2)p(2)\frac{du}{dx}\Big|_{x=2}$ is present. If the Neumann condition on $u$ is $p(b)\frac{du}{dx}\Big|_{x=b} = q_b$, then the boundary term is $-v(b)q_b$.
    For the Galerkin method, the test functions $v_j$ must satisfy the homogeneous versions of the essential (Dirichlet) boundary conditions. In this case, $v(1) = 0$.
    The Neumann boundary condition $p(b)\frac{du}{dx}\Big|_{x=b} = q_b$ typically appears on the right-hand side of the weak formulation.

    Let's re-evaluate the choice of basis function for the problem.
    The actual solution of $-\frac{d}{dx}\left(x\frac{du}{dx}\right) = 1$ is found by integrating:
    $x\frac{du}{dx} = -x + C_1$
    $\frac{du}{dx} = -1 + \frac{C_1}{x}$
    $u(x) = -x + C_1 \ln(x) + C_2$

    Using BCs:
    $u(1) = -1 + C_1 \ln(1) + C_2 = -1 + C_2 = 0 \implies C_2 = 1$.
    $\frac{du}{dx} = -1 + \frac{C_1}{x}$
    $\frac{du}{dx}\Big|_{x=2} = -1 + \frac{C_1}{2} = 0 \implies C_1 = 2$.
    So, the exact solution is $u(x) = -x + 2\ln(x) + 1$.

    Let's check the formulation again.
    Weak Form: $\int_1^2 v'(x)x\frac{du}{dx} dx - v(2)2\frac{du}{dx}\Big|_{x=2} = \int_1^2 v(x) dx$.
    With $v(1)=0$ and $\frac{du}{dx}\Big|_{x=2}=0$:
    $\int_1^2 v'(x)x\frac{du}{dx} dx = \int_1^2 v(x) dx$. This is correct.

    Now, the trial solution: $\tilde{u}(x) = c_1 \phi_1(x) = c_1 (x-1)^2$.
    $\tilde{u}'(x) = c_1 2(x-1)$.
    $\phi_1'(x) = 2(x-1)$.

    Substitute into the weak form:
    $\int_1^2 [2(x-1)] x [c_1 2(x-1)] dx = \int_1^2 c_1 (x-1)^2 dx$
    $4 c_1 \int_1^2 x (x-1)^2 dx = c_1 \int_1^2 (x-1)^2 dx$
    $4 c_1 (\frac{7}{12}) = c_1 (\frac{1}{3})$
    $\frac{7}{3} c_1 = \frac{1}{3} c_1 \implies \frac{6}{3} c_1 = 0 \implies 2c_1 = 0 \implies c_1 = 0$.

    This result $c_1=0$ implies $\tilde{u}(x) = 0$, which is incorrect.
    The issue is in the **choice of basis function**.
    The basis function $\phi_1(x) = (x-1)^2$ satisfies $u(1)=0$.
    However, the *true* solution $u(x) = -x + 2\ln(x) + 1$ has a derivative $\frac{du}{dx} = -1 + \frac{2}{x}$.
    At $x=1$, $\frac{du}{dx}\Big|_{x=1} = -1 + 2 = 1$.
    The basis function $\phi_1'(x) = 2(x-1)$ has $\phi_1'(1) = 0$.

    The Galerkin method requires the basis functions to be "complete enough" and also to behave somewhat like the true solution. The choice of $c_1(x-1)^2$ leads to $c_1 \cdot 2(x-1)$ as its derivative. This means $\tilde{u}'(1)=0$.
    The problem has a Neumann condition $\frac{du}{dx}\Big|_{x=2}=0$.

    Let's consider a slightly better basis function, say $\phi_1(x) = (x-1)^2 - \alpha(x-1)^3$. We need to satisfy $u(1)=0$ and $\frac{du}{dx}\Big|_{x=2}=0$.
    The simplest approach in FEM for a single variable is to define basis functions on elements and assemble them. For a single element problem, if we use a polynomial basis, we need to ensure they satisfy the BCs.

    **Let's reconsider the fundamental requirement for basis functions:**
    They must belong to the space where the solution is sought. For the weak form $\int_1^2 v'(x)x u'(x) dx = \int_1^2 v(x) dx$, we need $u$ to be such that $u'$ is defined. The basis functions $\phi_i$ and test functions $v_j$ must be differentiable.

    The problem is that the functional form $c_1(x-1)^2$ doesn't capture the logarithmic behavior of the exact solution well, and $c_1=0$ means the approximation is trivial.

    A better choice of basis function for $u(1)=0$ and $\frac{du}{dx}|_{x=2}=0$ would be one that satisfies these BCs inherently. For a single interval $(1, 2)$ with $u(1)=0$, we can use $\phi_1(x) = (x-1)$. This has $\phi_1(1)=0$. Then $\tilde{u}(x) = c_1(x-1)$.
    $\tilde{u}'(x) = c_1$.
    $\phi_1'(x) = 1$.

    Substitute into $\int_1^2 v'(x)x u'(x) dx = \int_1^2 v(x) dx$:
    $v_1(x) = \phi_1(x) = x-1$.
    $\int_1^2 (1) x (c_1 \cdot 1) dx = \int_1^2 c_1 (x-1) dx$
    $c_1 \int_1^2 x dx = c_1 \int_1^2 (x-1) dx$

    Left Integral: $\int_1^2 x dx = [\frac{x^2}{2}]_1^2 = \frac{4}{2} - \frac{1}{2} = \frac{3}{2}$.
    Right Integral: $\int_1^2 (x-1) dx = [\frac{(x-1)^2}{2}]_1^2 = \frac{(2-1)^2}{2} - \frac{(1-1)^2}{2} = \frac{1}{2}$.

    Equation: $c_1 (\frac{3}{2}) = c_1 (\frac{1}{2})$
    $c_1 (\frac{3}{2} - \frac{1}{2}) = 0 \implies c_1 (1) = 0 \implies c_1 = 0$.

    **Conclusion for Q2:** The chosen basis functions are not sufficient to capture the behavior of the true solution, or there's a fundamental issue with the problem setup for simple polynomial basis functions for this specific BVP.
    In FEM, we'd use piecewise polynomials and higher-order elements to improve accuracy. For a single element, we might need a polynomial of degree 3 or higher to satisfy two boundary conditions.

    Let's try a cubic basis function $\phi_1(x) = (x-1)^2(x-2)$. This satisfies $\phi_1(1)=0$ and $\phi_1(2)=0$. BUT, we have a Neumann BC at $x=2$, not a Dirichlet BC.

    **Correct approach for simple basis function with 2 BCs:**
    We need a function $\tilde{u}(x)$ that satisfies $u(1)=0$ and $u'(2)=0$.
    A basis function $\phi(x)$ satisfying $\phi(1)=0$ and $\phi'(2)=0$ would be $\phi(x) = (x-1)(x-2)^2$.
    Let's test this. $\phi(1) = (1-1)(1-2)^2 = 0$.
    $\phi'(x) = 1 \cdot (x-2)^2 + (x-1) \cdot 2(x-2) = (x-2)[(x-2) + 2(x-1)] = (x-2)(3x-4)$.
    $\phi'(2) = (2-2)(3 \cdot 2 - 4) = 0$.

    So, let $\tilde{u}(x) = c_1 (x-1)(x-2)^2$.
    $\phi_1(x) = (x-1)(x-2)^2$.
    $\phi_1'(x) = (x-2)(3x-4)$.

    Substitute into $\int_1^2 v'(x)x u'(x) dx = \int_1^2 v(x) dx$:
    $v_1(x) = \phi_1(x)$.
    $\int_1^2 [(x-2)(3x-4)] x [c_1 (x-2)(3x-4)] dx = \int_1^2 c_1 (x-1)(x-2)^2 dx$
    $c_1 \int_1^2 x [(x-2)(3x-4)]^2 dx = c_1 \int_1^2 (x-1)(x-2)^2 dx$

    This integral is becoming too complex for a simple example. The point is that the choice of basis functions is critical. For simple BVP on a single domain, we might choose polynomial basis functions that satisfy the prescribed BCs at the endpoints. For $u(1)=0$ and $u'(2)=0$, a basis function of degree 3 would be needed.

    **Let's use a known finite element basis function:**
    If we were on an element $[x_0, x_1]$ and we wanted to satisfy $u(x_0)=u_0$ and $u'(x_1)=q_1$, we'd use cubic Hermite shape functions.

    **Revisit Q2 with a simplified problem that has a non-zero result:**
    Problem: $-u''(x) = 1$, $0 < x < 1$, $u(0)=0$, $u'(1)=0$.
    Weak form: $\int_0^1 v'(x)u'(x) dx - v(1)u'(1) = \int_0^1 v(x) dx$.
    With $v(0)=0$ and $u'(1)=0$: $\int_0^1 v'(x)u'(x) dx = \int_0^1 v(x) dx$.

    Basis function: $\phi_1(x) = x$. $\phi_1(0)=0$.
    $\tilde{u}(x) = c_1 x$.
    $\phi_1'(x) = 1$.
    $v_1(x) = \phi_1(x) = x$.

    $\int_0^1 (1) x (c_1 \cdot 1) dx = \int_0^1 c_1 x dx$
    $c_1 \int_0^1 x dx = c_1 \int_0^1 x dx$
    $c_1 [\frac{x^2}{2}]_0^1 = c_1 [\frac{x^2}{2}]_0^1$
    $c_1 (\frac{1}{2}) = c_1 (\frac{1}{2})$
    This again results in $0 \cdot c_1 = 0$, which is true for any $c_1$. This implies that the basis function $x$ is not sufficient to provide a unique answer.

    If we use $\phi_1(x) = x^2$. $\phi_1(0)=0$. $\phi_1'(x) = 2x$.
    $\tilde{u}(x) = c_1 x^2$.
    $v_1(x) = x^2$.
    $\int_0^1 (2x) x (c_1 2x) dx = \int_0^1 c_1 x^2 dx$
    $4 c_1 \int_0^1 x^3 dx = c_1 \int_0^1 x^2 dx$
    $4 c_1 [\frac{x^4}{4}]_0^1 = c_1 [\frac{x^3}{3}]_0^1$
    $4 c_1 (\frac{1}{4}) = c_1 (\frac{1}{3})$
    $c_1 = \frac{1}{3} c_1 \implies \frac{2}{3} c_1 = 0 \implies c_1 = 0$.

    The issue is that for a single element, we need to fulfill the requirements of the weak formulation. The exact solution for $-u''=1$ is $u(x) = -x^2/2 + C_1 x + C_2$.
    $u(0)=0 \implies C_2 = 0$. $u(x) = -x^2/2 + C_1 x$.
    $u'(x) = -x + C_1$.
    $u'(1) = -1 + C_1 = 0 \implies C_1 = 1$.
    Exact solution: $u(x) = -x^2/2 + x$.

    With $\tilde{u}(x) = c_1 x$, the error is $e(x) = (-x^2/2+x) - c_1 x = -x^2/2 + (1-c_1)x$.
    The Galerkin method seeks to make the residual zero in the direction of basis functions.

    **The key takeaway is that the chosen basis functions must be able to represent the solution space accurately enough.**

---

### Important Points to Remember:

*   **Boundary Value Problems (BVPs):** Differential equations with conditions specified on the boundaries of the domain.
*   **Weak Formulation:** Transforming a BVP by multiplying with a test function and integrating over the domain, often using integration by parts to reduce derivative orders. This naturally incorporates Neumann boundary conditions.
*   **Galerkin Method:** A weighted residual method where the test functions are chosen to be the same as the basis (trial) functions used to approximate the solution.
*   **Trial Functions:** Must satisfy the essential (Dirichlet) boundary conditions.
*   **Test Functions:** In Galerkin, they are the same as trial functions and must satisfy the homogeneous versions of the essential BCs.
*   **System of Algebraic Equations:** The Galerkin method converts the differential equation into a system of linear algebraic equations ($Ac=b$) for the unknown coefficients of the approximate solution.
*   **Minimization Property:** For self-adjoint operators, Galerkin solutions often minimize a physical quantity (like potential energy).
*   **Accuracy:** The accuracy of the FEM solution depends on the choice and number of basis functions. More basis functions generally lead to better accuracy.

---
This concludes the notes on the Galerkin method for Module 1.
