---
title: "Galerkin’s weighted residual FEM formulation"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463856"
status: "completed"
scrapedAt: "2026-05-20T18:04:06.828Z"
---
# Finite Element Methods - Module 4: Strong and Weak Forms

## Topic: Galerkin's Weighted Residual FEM Formulation

This module introduces the fundamental concepts of weighted residual methods, specifically focusing on the Galerkin formulation. Understanding these methods is crucial for transforming a differential equation into a system of algebraic equations that can be solved by the Finite Element Method (FEM). This topic directly contributes to **CO1 (Knowledge Level: K2)** by understanding governing equations and basic FEM procedure, and **CO4 (Knowledge Level: K5)** by studying Galerkin weight residual formulations.

---

### 1. Introduction to Weighted Residual Methods

**Key Concept:** Most physical phenomena are described by differential equations (e.g., Partial Differential Equations - PDEs). FEM aims to approximate the solution of these differential equations over a domain by dividing it into smaller sub-domains called finite elements.

**Problem:** The exact solution to a differential equation may be difficult or impossible to find. Therefore, we seek an approximate solution.

**Weighted Residual Methods:** These methods are a systematic way to derive approximate solutions to differential equations. The core idea is to minimize the "residual" of the differential equation, which is the difference between the differential equation and the approximate solution.

**The Residual:**
Consider a differential equation of the form:
$L(u) = f$
where:
*   $L$ is a differential operator.
*   $u$ is the unknown function we want to solve for.
*   $f$ is a known function or source term.

Let $u_h$ be an approximate solution that can be expressed as a linear combination of basis functions (or shape functions) $\phi_i$:
$u_h(x) = \sum_{i=1}^{n} u_i \phi_i(x)$
where $u_i$ are the unknown nodal values of the solution, and $n$ is the number of nodes.

The residual, $R(x)$, is defined as:
$R(x) = L(u_h) - f$

**The Goal:** We want to make the residual as small as possible over the domain $\Omega$. Instead of making the residual zero everywhere (which is usually impossible with an approximate solution), we make the residual "zero in some average sense." This is achieved by forcing the weighted integral of the residual over the domain to be zero.

---

### 2. The General Weighted Residual Statement

The general weighted residual statement is given by:

$\int_{\Omega} W_j(x) R(x) d\Omega = 0$

where:
*   $W_j(x)$ is a weight function associated with the $j$-th unknown ($u_j$).
*   $R(x)$ is the residual of the differential equation.
*   $\Omega$ is the domain of interest.

This statement means that the residual is made orthogonal to a set of chosen weight functions. The choice of these weight functions distinguishes different weighted residual methods.

---

### 3. Galerkin's Weighted Residual Formulation

**Key Concept:** In Galerkin's method, the weight functions $W_j(x)$ are chosen to be the same as the basis functions (shape functions) $\phi_j(x)$ used to represent the approximate solution $u_h$.

**Formulation:**
Substituting $W_j = \phi_j$ and $R = L(u_h) - f$ into the general weighted residual statement:

$\int_{\Omega} \phi_j(x) [L(u_h) - f] d\Omega = 0$  for $j = 1, 2, \dots, n$

where $u_h(x) = \sum_{i=1}^{n} u_i \phi_i(x)$.

**Implications:**
*   **Symmetry:** Choosing $W_j = \phi_j$ often leads to symmetric stiffness matrices in FEM, which is desirable for numerical solvers.
*   **Consistency:** It ensures consistency with the weak form of the problem (discussed later).

**Connection to Textbooks:**
*   **Reddy (2009), Chapter 4:** Discusses weighted residual methods and Galerkin's procedure for various boundary value problems. It emphasizes the choice of basis and weight functions.
*   **Bhavikatti (2008), Chapter 5:** Introduces weighted residual methods and specifically details the Galerkin approach for deriving element equations.
*   **Fish & Belytschko (2007), Chapter 3:** Covers the foundational principles of variational methods and weighted residuals, with a focus on deriving discrete equations.

---

### 4. Example: One-Dimensional Boundary Value Problem (Steady-State Heat Conduction)

Let's consider a 1D steady-state heat conduction problem described by the following differential equation:

$-\frac{d}{dx} \left( k \frac{du}{dx} \right) + c u = f(x)$  for $0 < x < L$

with boundary conditions:
*   Dirichlet boundary condition: $u(0) = u_0$ (prescribed temperature)
*   Neumann boundary condition: $-k \frac{du}{dx} \Big|_{x=L} = q_L$ (prescribed heat flux at $x=L$)

Here, $u(x)$ represents the temperature, $k$ is thermal conductivity, $c$ is a coefficient related to heat generation, and $f(x)$ is a heat source term.

**Step 1: Define the approximate solution ($u_h$)**
Divide the domain $[0, L]$ into $m$ elements. Within each element, the solution is approximated using shape functions:
$u_h(x) = \sum_{i=1}^{n} u_i \phi_i(x)$
where $n$ is the total number of nodes in the discretized domain.

**Step 2: Determine the residual ($R$)**
$R(x) = -\frac{d}{dx} \left( k \frac{du_h}{dx} \right) + c u_h - f(x)$

**Step 3: Apply Galerkin's method**
We require $\int_{0}^{L} W_j(x) R(x) dx = 0$ for each node $j$.
Choosing $W_j(x) = \phi_j(x)$:

$\int_{0}^{L} \phi_j(x) \left[ -\frac{d}{dx} \left( k \frac{du_h}{dx} \right) + c u_h - f(x) \right] dx = 0$

**Step 4: Integration by Parts (to reduce derivative order)**
This is a crucial step to obtain the weak form and to incorporate natural boundary conditions automatically. Apply integration by parts to the term involving the second derivative of $u_h$:

$\int_{0}^{L} \phi_j \left[ -\frac{d}{dx} \left( k \frac{du_h}{dx} \right) \right] dx = \left[ -\phi_j \left( k \frac{du_h}{dx} \right) \right]_0^L + \int_{0}^{L} \frac{d\phi_j}{dx} \left( k \frac{du_h}{dx} \right) dx$

Substituting this back into the Galerkin equation:

$\left[ -\phi_j \left( k \frac{du_h}{dx} \right) \right]_0^L + \int_{0}^{L} \frac{d\phi_j}{dx} \left( k \frac{du_h}{dx} \right) dx + \int_{0}^{L} \phi_j (c u_h - f(x)) dx = 0$

**Step 5: Apply Boundary Conditions**
*   **At $x=0$ (Dirichlet BC):** $u(0) = u_0$. The weight function $\phi_j(0)$ might be non-zero, but the approximation $u_h$ is enforced to be $u_0$.
*   **At $x=L$ (Neumann BC):** $-k \frac{du}{dx} \Big|_{x=L} = q_L$. This term appears in the boundary integral.
    *   The boundary term becomes: $-\phi_j(L) (k \frac{du_h}{dx} \Big|_{x=L}) + \phi_j(0) (k \frac{du_h}{dx} \Big|_{x=0})$
    *   At $x=L$: $-\phi_j(L) (-q_L) = \phi_j(L) q_L$
    *   At $x=0$: If $\phi_j(0) \neq 0$, and we have a Dirichlet condition at $x=0$, the term involving the derivative at $x=0$ is implicitly handled by the primary variable formulation. For simplicity in understanding, if $u(0)=u_0$, the term related to the derivative at $x=0$ is typically set to zero or absorbed into the known values if $\phi_j(0)=0$ for the basis functions chosen. In the direct stiffness formulation, the Dirichlet conditions are enforced by modifying the system of equations, not directly in the integral.

The Galerkin formulation after integration by parts and applying boundary conditions leads to a system of linear equations:

$\sum_{i=1}^{n} u_i \int_{0}^{L} \left( k \frac{d\phi_j}{dx} \frac{d\phi_i}{dx} + c \phi_j \phi_i \right) dx = \int_{0}^{L} \phi_j f(x) dx - \phi_j(0) Q_0 + \phi_j(L) q_L$

where $Q_0$ is the heat flux at $x=0$.

This system can be written in matrix form as:
$[K] \{u\} = \{F\}$
where:
*   $[K]$ is the stiffness matrix with elements $K_{ji} = \int_{0}^{L} \left( k \frac{d\phi_j}{dx} \frac{d\phi_i}{dx} + c \phi_j \phi_i \right) dx$.
*   $\{u\}$ is the vector of unknown nodal temperatures $\{u_i\}$.
*   $\{F\}$ is the force vector with elements $F_j = \int_{0}^{L} \phi_j f(x) dx - \phi_j(0) Q_0 + \phi_j(L) q_L$.

**Important Note on Boundary Conditions:**
*   **Essential (Dirichlet) Boundary Conditions:** (e.g., prescribed displacement, temperature) are enforced directly on the nodal values. They must be satisfied by the approximate solution $u_h$. In the integral formulation, they affect which equations are solved for.
*   **Natural Boundary Conditions:** (e.g., prescribed force, heat flux) arise naturally from the integration by parts and appear in the force vector $\{F\}$.

**Connection to CO4 (Knowledge Level K5):** This example directly demonstrates the application of Galerkin weighted residual formulation to derive element stiffness matrices and force vectors, a key aspect of evaluating element stresses and understanding FEM formulations at a higher knowledge level.

---

### 5. Comparison with Other Weighted Residual Methods

While Galerkin's method is the most popular, other weighted residual methods exist, differing in the choice of weight functions:

| Method                 | Weight Functions ($W_j$)                       | Characteristics                                                                  | Example Textbooks                                                                                              |
| :--------------------- | :--------------------------------------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| **Galerkin**           | $W_j = \phi_j$ (Basis functions)               | Leads to symmetric matrices, widely used, consistent with variational principles. | Reddy (Ch 4), Bhavikatti (Ch 5), Fish & Belytschko (Ch 3)                                                      |
| **Sub-domain**         | $W_j = 1$ over sub-domain $i$, 0 elsewhere.    | Simpler to implement for some problems, but can lead to non-symmetric matrices. | Segerlind (Ch 3)                                                                                               |
| **Collocation**        | $W_j = \delta(x-x_j)$ (Dirac delta function)   | Residual is made zero at specific points (nodes). Less accurate than Galerkin. | Hutton (Ch 2)                                                                                                  |
| **Least Squares**      | $W_j = \frac{\partial R}{\partial u_j}$        | Minimizes the integral of the square of the residual. Always results in symmetric matrices. | Reddy (Ch 4), Cook (Ch 5)                                                                                      |

**Why Galerkin is Preferred:**
*   **Symmetry:** Often yields symmetric stiffness matrices, which are efficient to solve.
*   **Variational Principles:** For self-adjoint differential operators (common in many physical problems), the Galerkin formulation is equivalent to finding the minimum of a potential energy functional (variational principle). This provides a strong theoretical foundation.
*   **Accuracy:** Generally provides good accuracy for a given number of degrees of freedom.

---

### 6. Connection to Weak Form

**Key Concept:** The process of integrating by parts in the Galerkin method to reduce the order of derivatives is exactly how the weak form of a differential equation is derived.

**Strong Form:** The original differential equation that must hold pointwise over the domain.
**Weak Form:** An integral statement of the differential equation, derived by multiplying by a test function (weight function) and integrating over the domain, often using integration by parts.

**Steps to Derive the Weak Form (using the heat conduction example):**

1.  **Start with the governing equation:**
    $-\frac{d}{dx} \left( k \frac{du}{dx} \right) + c u = f(x)$

2.  **Multiply by a test function $v(x)$:**
    $v \left[ -\frac{d}{dx} \left( k \frac{du}{dx} \right) + c u - f(x) \right] = 0$

3.  **Integrate over the domain $\Omega$:**
    $\int_{\Omega} v \left[ -\frac{d}{dx} \left( k \frac{du}{dx} \right) + c u - f(x) \right] dx = 0$

4.  **Apply integration by parts to the highest derivative term:**
    $\int_{\Omega} v \left[ -\frac{d}{dx} \left( k \frac{du}{dx} \right) \right] dx = \left[ -v \left( k \frac{du}{dx} \right) \right]_{\partial\Omega} + \int_{\Omega} \frac{dv}{dx} \left( k \frac{du}{dx} \right) dx$
    (where $\partial\Omega$ represents the boundary of the domain)

5.  **Substitute back and rearrange:**
    $\left[ -v \left( k \frac{du}{dx} \right) \right]_{\partial\Omega} + \int_{\Omega} \frac{dv}{dx} \left( k \frac{du}{dx} \right) dx + \int_{\Omega} v (c u - f(x)) dx = 0$

6.  **Incorporate boundary conditions:**
    *   At boundaries where $u$ is specified (essential BC), the test function $v$ must be zero ($v=0$).
    *   At boundaries where flux/force is specified (natural BC), the boundary term $\left[ -v \left( k \frac{du}{dx} \right) \right]_{\partial\Omega}$ is used to enforce this condition. For example, if at $x=L$, $-k \frac{du}{dx} = q_L$, then the boundary term at $L$ becomes $-v(L) (-q_L) = v(L) q_L$.

The resulting equation is the weak form. The Galerkin method essentially chooses the test functions $v$ to be the basis functions $\phi_j$ that approximate $u$.

**Connection to CO1 (Knowledge Level K2):** Understanding the distinction between strong and weak forms and how Galerkin's method bridges this gap is fundamental to the basic procedure of FEM.

---

### 7. Element-Level Formulation

The integral equation derived from the Galerkin method is applied over each element, and then the element equations are assembled to form the global system of equations.

For a typical 1D element $e$ with nodes $i$ and $j$:
The element stiffness matrix $[k^{(e)}]$ and element force vector $\{f^{(e)}\}$ are calculated as:

$k_{ji}^{(e)} = \int_{x_e}^{x_{e+1}} \left( k \frac{d\phi_j^{(e)}}{dx} \frac{d\phi_i^{(e)}}{dx} + c \phi_j^{(e)} \phi_i^{(e)} \right) dx$

$f_j^{(e)} = \int_{x_e}^{x_{e+1}} \phi_j^{(e)} f(x) dx + \text{boundary terms from natural BCs on element } e$

The global stiffness matrix $[K]$ and force vector $\{F\}$ are assembled by summing up the contributions from each element.

**Example: 1D Bar under Axial Load (from Bhavikatti, Chapter 5)**

Consider a bar of length $L$, cross-sectional area $A$, and Young's modulus $E$. The governing equation is:
$-\frac{d}{dx} \left( A E \frac{du}{dx} \right) = f(x)$

Galerkin's method leads to the weak form:
$\int_{0}^{L} \frac{dv}{dx} \left( A E \frac{du}{dx} \right) dx - \left[ v \left( A E \frac{du}{dx} \right) \right]_0^L = \int_{0}^{L} v f(x) dx$

For a 2-node element, $u^{(e)}(x) = u_i \phi_i(x) + u_j \phi_j(x)$, where $\phi_i$ and $\phi_j$ are linear shape functions.
The element stiffness matrix is:
$[k^{(e)}] = \frac{AE}{l_e} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
where $l_e$ is the element length.

The element force vector due to distributed load $f(x)$ is:
$\{f^{(e)}\} = \int_{0}^{l_e} \begin{Bmatrix} \phi_i \\ \phi_j \end{Bmatrix} f(x) dx = \frac{f_0 l_e}{2} \begin{Bmatrix} 1 \\ 1 \end{Bmatrix}$ (if $f(x) = f_0$ is constant)

And boundary terms are added for natural boundary conditions.

---

### 8. Summary of Galerkin's Method Steps in FEM

1.  **Discretize the Domain:** Divide the problem domain into finite elements.
2.  **Define Approximate Solution:** Express the unknown field variable ($u_h$) within each element using shape functions and nodal values: $u_h(x) = \sum_{i=1}^{n} u_i \phi_i(x)$.
3.  **Formulate the Residual:** Substitute the approximate solution into the governing differential equation to obtain the residual $R(x) = L(u_h) - f$.
4.  **Apply Galerkin's Principle:** Set the weighted integral of the residual to zero using the same shape functions as weight functions: $\int_{\Omega} \phi_j(x) R(x) d\Omega = 0$.
5.  **Reduce Derivative Order:** Apply integration by parts to the highest derivative term in the residual. This naturally incorporates natural boundary conditions and reduces the required continuity of the approximate solution.
6.  **Derive Element Equations:** Apply the weak form over each element to obtain element stiffness matrices $[k^{(e)}]$ and element force vectors $\{f^{(e)}\}$.
7.  **Assemble Global System:** Combine the element matrices and vectors to form the global system of equations $[K]\{u\} = \{F\}$.
8.  **Apply Boundary Conditions:** Enforce essential boundary conditions by modifying the global system.
9.  **Solve the System:** Solve the linear system of equations to find the unknown nodal values $\{u\}$.

---

### 9. Practice Questions and Exercises

**Question 1:**
What is the primary characteristic of Galerkin's method for formulating FEM equations?
a) The residual is zero at nodal points.
b) The weight functions are different from the shape functions.
c) The weight functions are the same as the shape functions.
d) The residual is minimized in a least-squares sense.

**Question 2:**
Consider the Poisson equation in 1D: $-\frac{d^2u}{dx^2} = f(x)$ with $u(0)=0$ and $u(1)=0$.
Apply Galerkin's method to derive the weak form. Show the integration by parts step and how the boundary conditions are handled.

**Question 3:**
For a 2-node 1D element with linear shape functions $\phi_1(x) = \frac{1-x'}{l}$ and $\phi_2(x) = \frac{x'}{l}$ (where $x'$ is local coordinate from 0 to $l$), and the equation $AE \frac{d^2u}{dx^2} = 0$, derive the element stiffness matrix $[k^{(e)}]$ using Galerkin's method.

---

### 10. Answers to Practice Questions

**Answer 1:**
c) The weight functions are the same as the shape functions.

**Answer 2:**
Governing equation: $-\frac{d^2u}{dx^2} = f(x)$
Residual: $R(x) = -\frac{d^2u_h}{dx^2} - f(x)$
Galerkin's principle: $\int_{0}^{1} \phi_j(x) \left( -\frac{d^2u_h}{dx^2} - f(x) \right) dx = 0$

Integration by parts on the second derivative term:
$\int_{0}^{1} \phi_j \left( -\frac{d^2u_h}{dx^2} \right) dx = \left[ -\phi_j \frac{du_h}{dx} \right]_0^1 + \int_{0}^{1} \frac{d\phi_j}{dx} \frac{du_h}{dx} dx$

Substituting back:
$\left[ -\phi_j \frac{du_h}{dx} \right]_0^1 + \int_{0}^{1} \frac{d\phi_j}{dx} \frac{du_h}{dx} dx - \int_{0}^{1} \phi_j f(x) dx = 0$

Applying boundary conditions:
*   At $x=0$, $u(0)=0$. We can assume $\phi_j(0)=0$ for the basis functions used for Dirichlet BCs, or this term is handled by enforcing $u_h(0)=0$.
*   At $x=1$, $u(1)=0$. We can assume $\phi_j(1)=0$ for the basis functions used for Dirichlet BCs.

The boundary term $\left[ -\phi_j \frac{du_h}{dx} \right]_0^1$ becomes $-\phi_j(1)\frac{du_h}{dx}\Big|_{x=1} + \phi_j(0)\frac{du_h}{dx}\Big|_{x=0}$. If $\phi_j(0)=0$ and $\phi_j(1)=0$, this term vanishes.

The weak form is:
$\int_{0}^{1} \frac{d\phi_j}{dx} \frac{du_h}{dx} dx = \int_{0}^{1} \phi_j f(x) dx$

This form requires only the first derivative of $u_h$, and the essential boundary conditions are directly imposed on $u_h$.

**Answer 3:**
The governing equation is $AE \frac{d^2u}{dx^2} = 0$.
The residual is $R(x) = AE \frac{d^2u_h}{dx^2}$.
Galerkin's method: $\int_{0}^{l} \phi_j \left( AE \frac{d^2u_h}{dx^2} \right) dx = 0$.

Integration by parts:
$\left[ \phi_j \left( AE \frac{du_h}{dx} \right) \right]_0^l - \int_{0}^{l} \frac{d\phi_j}{dx} \left( AE \frac{du_h}{dx} \right) dx = 0$

For a typical element, there are no essential boundary conditions *within* the element, only at the global boundaries. Thus, the boundary term is $\phi_j(l) (AE u'_j) - \phi_j(0) (AE u'_i)$. Since the shape functions $\phi_i$ and $\phi_j$ are defined such that $\phi_i(0)=1, \phi_i(l)=0$ and $\phi_j(0)=0, \phi_j(l)=1$, the boundary term evaluated at the element ends often vanishes unless these are global boundaries with natural conditions. For deriving the element stiffness matrix without specific natural BCs, this term is zero.

We get:
$-\int_{0}^{l} \frac{d\phi_j}{dx} \left( AE \frac{du_h}{dx} \right) dx = 0$

Substitute $u_h = u_i \phi_i + u_j \phi_j$:
$-\int_{0}^{l} \frac{d\phi_j}{dx} \left( AE \frac{d}{dx}(u_i \phi_i + u_j \phi_j) \right) dx = 0$
$-\int_{0}^{l} \frac{d\phi_j}{dx} \left( AE (u_i \frac{d\phi_i}{dx} + u_j \frac{d\phi_j}{dx}) \right) dx = 0$

Rearranging for $u_i$ and $u_j$:
$u_i \int_{0}^{l} AE \frac{d\phi_j}{dx} \frac{d\phi_i}{dx} dx + u_j \int_{0}^{l} AE \frac{d\phi_j}{dx} \frac{d\phi_j}{dx} dx = 0$

The element stiffness matrix is $[k^{(e)}]$ where:
$k_{ji} = \int_{0}^{l} AE \frac{d\phi_j}{dx} \frac{d\phi_i}{dx} dx$

For linear shape functions:
$\phi_1(x') = 1 - x'/l$, $\frac{d\phi_1}{dx'} = -1/l$
$\phi_2(x') = x'/l$, $\frac{d\phi_2}{dx'} = 1/l$

$k_{11} = \int_{0}^{l} AE (-\frac{1}{l}) (-\frac{1}{l}) dx' = AE \int_{0}^{l} \frac{1}{l^2} dx' = AE \frac{1}{l}$
$k_{12} = \int_{0}^{l} AE (-\frac{1}{l}) (\frac{1}{l}) dx' = AE \int_{0}^{l} -\frac{1}{l^2} dx' = -AE \frac{1}{l}$
$k_{21} = \int_{0}^{l} AE (\frac{1}{l}) (-\frac{1}{l}) dx' = AE \int_{0}^{l} -\frac{1}{l^2} dx' = -AE \frac{1}{l}$
$k_{22} = \int_{0}^{l} AE (\frac{1}{l}) (\frac{1}{l}) dx' = AE \int_{0}^{l} \frac{1}{l^2} dx' = AE \frac{1}{l}$

So, the element stiffness matrix is:
$[k^{(e)}] = \frac{AE}{l} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

---

### 11. Important Points to Remember

*   **Galerkin's method:** Chooses weight functions identical to the basis (shape) functions.
*   **Residual:** The error term when an approximate solution is substituted into the governing differential equation.
*   **Weak Form:** Derived from the strong form by multiplying by a test function and integrating, often using integration by parts to reduce derivative order.
*   **Integration by Parts:** Crucial for obtaining the weak form, reducing continuity requirements, and naturally incorporating natural boundary conditions.
*   **Essential BCs:** Are enforced directly on nodal values.
*   **Natural BCs:** Appear in the weak form's boundary integral terms and contribute to the force vector.
*   **Symmetry:** Galerkin's method often leads to symmetric stiffness matrices, which are computationally advantageous.
*   **Assembly:** Element-level equations are assembled into a global system.

---

### 12. Alignment with Course Outcomes

*   **CO1 (K2):** Understanding the governing equations and basic procedure of FEM is achieved through understanding the residual and the weighted integral approach.
*   **CO4 (K5):** This topic directly addresses the study of Galerkin weight residual formulations and is fundamental to evaluating element stresses (as the derived element matrices are used for this).

This module provides the core mathematical framework for deriving the element equations that are the building blocks of any FEM analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
