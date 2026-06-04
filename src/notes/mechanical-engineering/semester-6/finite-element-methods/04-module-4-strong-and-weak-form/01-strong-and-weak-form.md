---
title: "Strong and Weak form"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463855"
status: "completed"
scrapedAt: "2026-05-20T18:04:06.128Z"
---
# Finite Element Methods - Module 4: Strong and Weak Form

## Introduction to Module 4

This module delves into the fundamental mathematical formulations underlying the Finite Element Method (FEM). We will explore the transition from the **Strong Form** of a differential equation to its **Weak Form**, a crucial step that enables the application of FEM to complex problems. This transition is essential for understanding how FEM approximates solutions and for developing the element stiffness matrices and load vectors.

**Learning Outcomes:**

*   Understand the concept of Strong and Weak forms of differential equations.
*   Relate the Strong Form to the governing differential equations of physical phenomena.
*   Understand the mathematical basis for deriving the Weak Form from the Strong Form.
*   Identify the advantages of using the Weak Form in FEM.
*   Relate the Weak Form to weighted residual methods, particularly the Galerkin method.

**Course Outcomes Addressed:**

*   **CO1 (K2):** To understand the governing equations of various physical phenomena and basic procedure of FEM. (This module directly addresses the governing equations and the initial step in FEM procedure).
*   **CO4 (K5):** Evaluate element stress using energy method and study Galekin weight residual formulations. (This module lays the groundwork for understanding Galerkin's method and its connection to residual formulations).

**Textbook References:**

*   Reddy, J. N. (2009). *An Introduction to Finite Element Method*. McGrawHill Education. (Chapters relevant to weak formulation and weighted residuals)
*   Cook, R. D. (2008). *Concept and Application of Finite Element Method*. Wiley. (Chapters discussing variational principles and weighted residuals)
*   Bhavikatti, S. S. (2008). *Finite Element Analysis*. New Age Publisher. (Sections on weak form and weighted residual methods)
*   Fish, J., & Belytschko, T. (2007). *A First Course in Finite Elements*. John Wiley & Sons, Ltd. (Chapters on variational methods and weak formulations)

**Reference Book References:**

*   Segerlind, L. J. (2010). *Applied Finite Element Analysis*. John Wiley and Sons. (Sections on weighted residual methods)
*   Hutton, D. V. (2009). *Fundamentals of Finite Element Methods*. McGrawHill Education. (Chapters on variational principles and weak forms)

---

## 1. The Strong Form of Differential Equations

The **Strong Form** of a differential equation is the original mathematical statement that describes the behavior of a physical system. It is the form we typically encounter when deriving governing equations from fundamental physical laws (e.g., conservation of mass, momentum, energy).

**Key Concepts:**

*   **Differential Equation:** An equation involving an unknown function and its derivatives.
*   **Governing Equations:** The specific differential equations that model a physical phenomenon.
*   **Domain:** The region in space where the differential equation holds.
*   **Boundary Conditions:** Conditions imposed on the boundaries of the domain to make the problem well-posed and physically meaningful.

**Characteristics of the Strong Form:**

*   **Requires Higher Order Derivatives:** The strong form usually requires the unknown function to have derivatives of a certain order (e.g., second-order derivatives for a beam bending problem).
*   **Strict Continuity Requirements:** The solution must be sufficiently smooth to satisfy the derivatives required by the equation. This means the solution must be continuous and have continuous derivatives up to the order of the highest derivative in the equation within the domain.

**Examples of Strong Forms:**

Let's consider a simple one-dimensional problem, such as the axial deformation of a bar.

**1.1 One-Dimensional Axial Deformation (Rod/Bar):**

*   **Physical Phenomenon:** Axial stress and strain in a deformable bar under axial load.
*   **Governing Equation (Strong Form):** For a homogeneous bar with constant cross-sectional area ($A$), Young's modulus ($E$), and subject to a distributed axial load $f(x)$ and boundary conditions.
    *   The governing differential equation is:
        $$-\frac{d}{dx}\left(A E \frac{du}{dx}\right) + f(x) = 0$$
        where:
        *   $u(x)$ is the axial displacement at position $x$.
        *   $\frac{du}{dx}$ is the axial strain.
        *   $AE \frac{du}{dx}$ is the axial force.
        *   $f(x)$ is the distributed axial load per unit length.
    *   This equation is valid over the domain $x \in [a, b]$.

*   **Boundary Conditions:**
    *   **Essential Boundary Conditions (Dirichlet Type):** Specify the value of the unknown function itself.
        *   Example: $u(a) = u_0$ (prescribed displacement at $x=a$).
    *   **Natural Boundary Conditions (Neumann Type):** Specify the value of the derivative of the unknown function, which often relates to physical quantities like force or flux.
        *   Example: $A E \frac{du}{dx} \Big|_{x=b} = P_b$ (prescribed force at $x=b$).

*   **Continuity Requirements for the Strong Form:** The function $u(x)$ must be continuous, and its first derivative $\frac{du}{dx}$ must also be continuous (piecewise continuous is often acceptable, but for the strict strong form, continuous derivatives are implied). For the example above, $u(x)$ must be continuously differentiable at least once, i.e., $u \in C^1([a, b])$.

**(Reference: Reddy, Chapter 2; Cook, Chapter 2; Bhavikatti, Chapter 2)**

---

## 2. The Weak Form of Differential Equations

The **Weak Form** is derived from the Strong Form by reducing the order of the derivatives required for the unknown function. This is achieved using integral formulations and introducing weighting functions. The Weak Form is the basis for the Finite Element Method because it relaxes the continuity requirements on the solution, allowing us to approximate the solution using piecewise polynomial functions (shape functions) that are typically only continuous.

**Key Concepts:**

*   **Weighted Residual Method:** A general procedure for finding approximate solutions to differential equations. It involves multiplying the differential equation by a weighting function, integrating over the domain, and forcing the integral of the residual to be zero.
*   **Residual ($R$):** The difference between the left-hand side and right-hand side of the differential equation when an approximate solution is substituted.
*   **Weighting Function ($w$):** An arbitrary, well-behaved function (usually chosen to be zero at the essential boundaries) used in the weighted residual method.
*   **Integration by Parts:** A fundamental calculus technique used to reduce the order of derivatives in the weak formulation.
*   **Essential Boundary Conditions (Dirichlet):** Must be satisfied by the trial/approximation functions.
*   **Natural Boundary Conditions (Neumann):** Arise naturally from the integration by parts process during the derivation of the weak form.

**Derivation of the Weak Form (General Procedure):**

Consider a general second-order differential equation of the form:

$$L(u) + f = 0 \quad \text{in } \Omega$$

where:
*   $L(u)$ is a differential operator of order $n$.
*   $f$ is a known function.
*   $\Omega$ is the domain.

To obtain the weak form, we follow these steps:

1.  **Multiply by a Weighting Function:** Multiply the differential equation by an arbitrary, admissible weighting function $w(x)$.
    $$w(x)[L(u) + f] = 0$$
2.  **Integrate over the Domain:** Integrate the equation over the domain $\Omega$.
    $$\int_{\Omega} w(x)[L(u) + f] \, d\Omega = 0$$
3.  **Integration by Parts:** Apply integration by parts to reduce the order of the highest derivative acting on the unknown function $u$. This process typically transfers derivatives from $u$ to $w$. Crucially, integration by parts introduces boundary terms.

**Example: Weak Form of the One-Dimensional Axial Deformation Problem**

Let's derive the weak form for the strong form:
$$-\frac{d}{dx}\left(A E \frac{du}{dx}\right) + f(x) = 0 \quad \text{for } x \in [a, b]$$
with boundary conditions:
*   Essential: $u(a) = u_0$
*   Natural: $-A E \frac{du}{dx} \Big|_{x=b} = P_b$ (This is a force at the boundary, the negative sign is often absorbed by convention, or the equation is written as $\frac{d}{dx}\left(A E \frac{du}{dx}\right) = f(x)$ and the boundary condition is $AE\frac{du}{dx}|_{x=b} = P_b$).

**Steps:**

1.  **Multiply by a weighting function $w(x)$:**
    $$w(x) \left[-\frac{d}{dx}\left(A E \frac{du}{dx}\right) + f(x)\right] = 0$$
2.  **Integrate over the domain $[a, b]$:**
    $$\int_{a}^{b} w(x) \left[-\frac{d}{dx}\left(A E \frac{du}{dx}\right)\right] \, dx + \int_{a}^{b} w(x) f(x) \, dx = 0$$
3.  **Apply Integration by Parts to the first term:**
    Recall the integration by parts formula: $\int_{a}^{b} u \, dv = [uv]_{a}^{b} - \int_{a}^{b} v \, du$.
    Let $u = w$ and $dv = -\frac{d}{dx}\left(A E \frac{du}{dx}\right) \, dx$.
    Then $du = \frac{dw}{dx} \, dx$ and $v = -A E \frac{du}{dx}$.

    Applying this:
    $$\left[w(x) \left(-A E \frac{du}{dx}\right)\right]_{a}^{b} - \int_{a}^{b} \left(-A E \frac{du}{dx}\right) \frac{dw}{dx} \, dx + \int_{a}^{b} w(x) f(x) \, dx = 0$$

    Rearranging:
    $$-\left[w(x) A E \frac{du}{dx}\right]_{a}^{b} + \int_{a}^{b} A E \frac{dw}{dx} \frac{du}{dx} \, dx + \int_{a}^{b} w(x) f(x) \, dx = 0$$

    Expanding the bracketed term:
    $$-\left[w(b) A E \frac{du}{dx}\Big|_{x=b} - w(a) A E \frac{du}{dx}\Big|_{x=a}\right] + \int_{a}^{b} A E \frac{dw}{dx} \frac{du}{dx} \, dx + \int_{a}^{b} w(x) f(x) \, dx = 0$$

4.  **Incorporate Boundary Conditions:**
    *   **Essential Boundary Condition:** $u(a) = u_0$. The weighting function $w(x)$ must satisfy $w(a) = 0$ to ensure that the term at $x=a$ in the bracket doesn't involve unknown derivatives of $u$ or unknown values of $w$. This condition $w(a)=0$ is standard for admissible weighting functions associated with essential boundary conditions.
    *   **Natural Boundary Condition:** $-A E \frac{du}{dx}\Big|_{x=b} = P_b$. This term can be directly substituted into the bracketed term.

    Substituting $w(a) = 0$ and the natural boundary condition:
    $$-\left[w(b) A E \frac{du}{dx}\Big|_{x=b}\right] + \int_{a}^{b} A E \frac{dw}{dx} \frac{du}{dx} \, dx + \int_{a}^{b} w(x) f(x) \, dx = 0$$

    The term $w(b) A E \frac{du}{dx}\Big|_{x=b}$ can be written as $-w(b) P_b$. So the equation becomes:
    $$-(-w(b) P_b) + \int_{a}^{b} A E \frac{dw}{dx} \frac{du}{dx} \, dx + \int_{a}^{b} w(x) f(x) \, dx = 0$$

    $$\int_{a}^{b} A E \frac{dw}{dx} \frac{du}{dx} \, dx - w(b) P_b + \int_{a}^{b} w(x) f(x) \, dx = 0$$

    Rearranging to group the boundary term with the load term:
    $$\int_{a}^{b} A E \frac{dw}{dx} \frac{du}{dx} \, dx = w(b) P_b - \int_{a}^{b} w(x) f(x) \, dx$$

    This is the **Weak Form** of the problem.

**Characteristics of the Weak Form:**

*   **Reduced Derivative Order:** The highest derivative acting on the unknown function $u$ is now the first derivative ($\frac{du}{dx}$), and the weighting function $w$ has its first derivative ($\frac{dw}{dx}$). This means the approximation for $u$ only needs to be $C^0$ (continuous), which is much easier to satisfy with FEM shape functions.
*   **Includes Boundary Terms:** Natural boundary conditions appear as explicit terms in the weak form, often related to fluxes or forces at the boundaries.
*   **Integral Equation:** It is an integral equation, making it suitable for numerical integration and approximation.

**(Reference: Reddy, Chapter 3; Cook, Chapter 3; Bhavikatti, Chapter 3; Fish & Belytschko, Chapter 3)**

---

## 3. Why Use the Weak Form in FEM?

The transition from the Strong Form to the Weak Form is fundamental to the success of the Finite Element Method. Here are the key advantages:

*   **Relaxed Continuity Requirements (CO1, CO4):** The most significant advantage. The weak form only requires the approximate solution to be continuous (e.g., $C^0$ continuity), whereas the strong form might require higher-order continuity (e.g., $C^1$ for beam bending). FEM uses piecewise polynomial shape functions which are naturally $C^0$ continuous but not typically $C^1$. The weak form allows us to use these simpler, more manageable shape functions.
*   **Enables Use of Piecewise Polynomial Approximations:** FEM approximates the solution within each element using polynomials (shape functions). The weak form's reduced derivative requirements make these piecewise polynomials valid approximations.
*   **Natural Inclusion of Boundary Conditions (CO1):** Natural boundary conditions (e.g., forces, fluxes) appear automatically in the weak form during the integration by parts process. This means we don't have to explicitly enforce them as constraints on the approximation functions, which simplifies the formulation. Essential boundary conditions (e.g., displacements) must still be imposed on the approximation functions.
*   **Consistent Formulation for Different Element Types:** The weak form provides a unified mathematical framework for deriving element stiffness matrices and load vectors for various element types (bars, beams, plates, etc.).
*   **Connection to Variational Principles and Weighted Residual Methods (CO4):** The weak form is closely related to variational principles (like the principle of minimum potential energy) and weighted residual methods (like the Galerkin method). This connection provides theoretical justification and alternative approaches for deriving FEM formulations.

**(Reference: Reddy, Chapter 3; Cook, Chapter 3; Bhavikatti, Chapter 3; Fish & Belytschko, Chapter 3)**

---

## 4. Weak Form and Weighted Residual Methods (Galerkin Method)

The weak form can be derived through various methods, including variational principles and weighted residual methods. The **Galerkin method** is the most commonly used weighted residual method in FEM and is directly linked to the weak form.

**4.1 Weighted Residual Methods (General Idea)**

A weighted residual method seeks an approximate solution $\tilde{u}$ that satisfies the governing differential equation $L(\tilde{u}) + f = 0$ in an average sense over the domain. This is achieved by minimizing the integral of the residual multiplied by a weighting function.

Let the strong form be:
$$L(u) + f = 0 \quad \text{in } \Omega$$

An approximate solution is assumed as:
$$\tilde{u}(x) = \sum_{i=1}^{N} u_i \phi_i(x)$$
where $u_i$ are unknown nodal values of the solution and $\phi_i(x)$ are basis (shape) functions.

The residual is:
$$R(x) = L(\tilde{u}) + f$$

The weighted residual statement is:
$$\int_{\Omega} w_j(x) R(x) \, d\Omega = 0 \quad \text{for } j = 1, 2, \dots, N$$
where $w_j(x)$ are $N$ chosen weighting functions.

**4.2 The Galerkin Method**

The Galerkin method is a specific and very popular type of weighted residual method where the weighting functions $w_j(x)$ are chosen to be the same as the basis (shape) functions $\phi_j(x)$ used to approximate the solution.

So, for the Galerkin method:
$$w_j(x) = \phi_j(x)$$

The Galerkin statement becomes:
$$\int_{\Omega} \phi_j(x) [L(\tilde{u}) + f] \, d\Omega = 0 \quad \text{for } j = 1, 2, \dots, N$$

**4.3 Relationship between Weak Form and Galerkin Method**

The process of deriving the weak form using integration by parts is mathematically equivalent to applying the Galerkin method to the strong form of the differential equation, provided the weighting functions are chosen appropriately (specifically, $w \in C^1$ and $w=0$ at essential boundaries).

Consider the strong form: $-\frac{d}{dx}(AE \frac{du}{dx}) + f = 0$ with $u(a)=u_0$ and $AE\frac{du}{dx}|_{x=b} = P_b$.

If we use the Galerkin method, we choose $w_j(x) = \phi_j(x)$. The approximation is $\tilde{u}(x) = \sum u_i \phi_i(x)$.

The Galerkin equation for a specific $j$ is:
$$\int_{a}^{b} \phi_j(x) \left[-\frac{d}{dx}\left(AE \frac{d\tilde{u}}{dx}\right) + f(x)\right] \, dx = 0$$

Applying integration by parts to the first term:
$$-\left[\phi_j(x) A E \frac{d\tilde{u}}{dx}\right]_{a}^{b} + \int_{a}^{b} \frac{d\phi_j}{dx} \left(A E \frac{d\tilde{u}}{dx}\right) \, dx + \int_{a}^{b} \phi_j(x) f(x) \, dx = 0$$

Now, apply boundary conditions:
*   $\phi_j(a) = 0$ because $\tilde{u}(a)$ is fixed, so the approximation for $u$ is only dependent on shape functions associated with internal nodes if $a$ is a boundary node, or if $u(a)$ is prescribed, the weight function associated with that degree of freedom must be zero. For essential boundary conditions, the weighting function is zero at those points.
*   $-A E \frac{d\tilde{u}}{dx}\Big|_{x=b} = P_b$.

Substituting these:
$$-\left[\phi_j(b) P_b - 0 \cdot (AE \frac{d\tilde{u}}{dx}\Big|_{x=a})\right] + \int_{a}^{b} A E \frac{d\phi_j}{dx} \frac{d\tilde{u}}{dx} \, dx + \int_{a}^{b} \phi_j(x) f(x) \, dx = 0$$

$$\int_{a}^{b} A E \frac{d\phi_j}{dx} \frac{d\tilde{u}}{dx} \, dx = \phi_j(b) P_b - \int_{a}^{b} \phi_j(x) f(x) \, dx$$

This equation is identical to the weak form derived earlier, where $w_j$ has been replaced by $\phi_j$. When summed over all $j$, this forms the system of algebraic equations for the nodal unknowns $u_i$.

**Structure of the Resulting Matrix Equation:**

When we substitute $\tilde{u}(x) = \sum_{i=1}^{N} u_i \phi_i(x)$ and $\frac{d\tilde{u}}{dx} = \sum_{i=1}^{N} u_i \frac{d\phi_i}{dx}$ into the Galerkin equation for each $j$, we get:

$$\sum_{i=1}^{N} u_i \left( \int_{a}^{b} A E \frac{d\phi_j}{dx} \frac{d\phi_i}{dx} \, dx \right) = \phi_j(b) P_b - \sum_{i=1}^{N} u_i \left( \int_{a}^{b} \phi_j(x) f(x) \, dx \right)$$

This can be written in matrix form as:

$$[K]\{u\} = \{F\}$$

where:
*   $K_{ji} = \int_{a}^{b} A E \frac{d\phi_j}{dx} \frac{d\phi_i}{dx} \, dx$ (Element stiffness matrix component)
*   $u_i$ are the unknown nodal displacements.
*   $F_j = \phi_j(b) P_b - \int_{a}^{b} \phi_j(x) f(x) \, dx$ (Element force vector component)

**(Reference: Reddy, Chapter 3; Cook, Chapter 3; Bhavikatti, Chapter 3; Segerlind, Chapter 3; Hutton, Chapter 3)**

---

## 5. Examples Illustrating the Concepts

Let's use the 1D axial deformation problem to illustrate the process.

**Example 1: Simple Rod Under Axial Load**

**Problem Statement:** Consider a rod of length $L$, cross-sectional area $A$, and Young's modulus $E$. It is subjected to a uniformly distributed load $f(x) = f_0$ along its length. The left end is fixed ($u(0) = 0$), and the right end has a prescribed force $P_L$ ($AE \frac{du}{dx}\Big|_{x=L} = P_L$).

**Strong Form:**
$$-\frac{d}{dx}\left(A E \frac{du}{dx}\right) + f_0 = 0 \quad \text{for } x \in [0, L]$$
Boundary conditions:
*   Essential: $u(0) = 0$
*   Natural: $A E \frac{du}{dx}\Big|_{x=L} = P_L$

**Weak Form Derivation:**

1.  Multiply by $w(x)$:
    $$w(x) \left[-\frac{d}{dx}\left(A E \frac{du}{dx}\right) + f_0\right] = 0$$
2.  Integrate from $0$ to $L$:
    $$\int_{0}^{L} w(x) \left[-\frac{d}{dx}\left(A E \frac{du}{dx}\right)\right] \, dx + \int_{0}^{L} w(x) f_0 \, dx = 0$$
3.  Integrate by parts on the first term:
    $$\left[-w(x) A E \frac{du}{dx}\right]_{0}^{L} + \int_{0}^{L} A E \frac{dw}{dx} \frac{du}{dx} \, dx + \int_{0}^{L} w(x) f_0 \, dx = 0$$
4.  Apply boundary conditions ($w(0)=0$, $AE \frac{du}{dx}\Big|_{x=L} = P_L$):
    $$\left[-w(L) P_L - (-w(0) A E \frac{du}{dx}\Big|_{x=0})\right] + \int_{0}^{L} A E \frac{dw}{dx} \frac{du}{dx} \, dx + \int_{0}^{L} w(x) f_0 \, dx = 0$$
    Since $w(0)=0$:
    $$-w(L) P_L + \int_{0}^{L} A E \frac{dw}{dx} \frac{du}{dx} \, dx + \int_{0}^{L} w(x) f_0 \, dx = 0$$

    **Weak Form:**
    $$\int_{0}^{L} A E \frac{dw}{dx} \frac{du}{dx} \, dx = w(L) P_L - \int_{0}^{L} w(x) f_0 \, dx$$

This weak form is ready for discretization using FEM.

**Example 2: Heat Conduction in 1D**

**Problem Statement:** Consider a rod of length $L$ with thermal conductivity $k$, cross-sectional area $A$, and subject to a distributed heat source $q(x)$ per unit volume. The left end has a prescribed temperature $T(0) = T_0$, and the right end is insulated, meaning no heat flux across it ($\frac{dT}{dx}\Big|_{x=L} = 0$).

*   Let $T(x)$ be the temperature at position $x$.
*   The heat flux is given by Fourier's Law: $q_x = -kA \frac{dT}{dx}$.
*   Conservation of energy leads to the governing equation.

**Strong Form:**
$$\frac{d}{dx}\left(k A \frac{dT}{dx}\right) + q(x) = 0 \quad \text{for } x \in [0, L]$$
Boundary conditions:
*   Essential: $T(0) = T_0$
*   Natural: $k A \frac{dT}{dx}\Big|_{x=L} = 0$ (zero heat flux at the insulated end)

**Weak Form Derivation:**

1.  Multiply by a weighting function $w(x)$:
    $$w(x) \left[\frac{d}{dx}\left(k A \frac{dT}{dx}\right) + q(x)\right] = 0$$
2.  Integrate from $0$ to $L$:
    $$\int_{0}^{L} w(x) \frac{d}{dx}\left(k A \frac{dT}{dx}\right) \, dx + \int_{0}^{L} w(x) q(x) \, dx = 0$$
3.  Integrate by parts on the first term:
    $$\left[w(x) k A \frac{dT}{dx}\right]_{0}^{L} - \int_{0}^{L} k A \frac{dw}{dx} \frac{dT}{dx} \, dx + \int_{0}^{L} w(x) q(x) \, dx = 0$$
4.  Apply boundary conditions ($w(0)=0$ due to $T(0)=T_0$, and $k A \frac{dT}{dx}\Big|_{x=L} = 0$):
    $$\left[w(L) \cdot 0 - w(0) k A \frac{dT}{dx}\Big|_{x=0}\right] - \int_{0}^{L} k A \frac{dw}{dx} \frac{dT}{dx} \, dx + \int_{0}^{L} w(x) q(x) \, dx = 0$$
    Since $w(0)=0$:
    $$0 - \int_{0}^{L} k A \frac{dw}{dx} \frac{dT}{dx} \, dx + \int_{0}^{L} w(x) q(x) \, dx = 0$$

    **Weak Form:**
    $$\int_{0}^{L} k A \frac{dw}{dx} \frac{dT}{dx} \, dx = \int_{0}^{L} w(x) q(x) \, dx$$

This weak form is ready for FEM discretization. Note how the boundary condition at $x=L$ did not introduce any explicit terms in the weak form because the flux was zero.

**(Reference: Reddy, Chapter 3; Cook, Chapter 3; Bhavikatti, Chapter 3)**

---

## 6. Practice Questions and Exercises

**Question 1:**
Consider the following strong form of a 1D Poisson equation:
$$-\frac{d^2u}{dx^2} + u = x \quad \text{for } x \in [0, 1]$$
with boundary conditions $u(0) = 0$ and $\frac{du}{dx}\Big|_{x=1} = 2$.
Derive the weak form of this equation.

**Answer 1:**
1.  Multiply by $w(x)$:
    $$w(x) \left[-\frac{d^2u}{dx^2} + u - x\right] = 0$$
2.  Integrate from $0$ to $1$:
    $$\int_{0}^{1} w(x) \left(-\frac{d^2u}{dx^2}\right) \, dx + \int_{0}^{1} w(x) u \, dx - \int_{0}^{1} w(x) x \, dx = 0$$
3.  Integrate by parts on the first term:
    $$\left[-w(x) \frac{du}{dx}\right]_{0}^{1} + \int_{0}^{1} \frac{dw}{dx} \frac{du}{dx} \, dx + \int_{0}^{1} w(x) u \, dx - \int_{0}^{1} w(x) x \, dx = 0$$
4.  Apply boundary conditions: $u(0)=0 \implies w(0)=0$. $\frac{du}{dx}\Big|_{x=1} = 2$.
    $$\left[-w(1) \cdot 2 - (-w(0) \frac{du}{dx}\Big|_{x=0})\right] + \int_{0}^{1} \frac{dw}{dx} \frac{du}{dx} \, dx + \int_{0}^{1} w(x) u \, dx - \int_{0}^{1} w(x) x \, dx = 0$$
    Since $w(0)=0$:
    $$-2w(1) + \int_{0}^{1} \frac{dw}{dx} \frac{du}{dx} \, dx + \int_{0}^{1} w(x) u \, dx - \int_{0}^{1} w(x) x \, dx = 0$$
5.  Rearrange to get the weak form:
    $$\int_{0}^{1} \frac{dw}{dx} \frac{du}{dx} \, dx + \int_{0}^{1} w(x) u \, dx = 2w(1) + \int_{0}^{1} w(x) x \, dx$$

**Question 2:**
For the weak form derived in Question 1, if we use the Galerkin method with shape functions $\phi_i(x)$, what would be the terms in the resulting element stiffness matrix and load vector? Assume the domain is divided into elements.

**Answer 2:**
If using Galerkin, $w$ is replaced by $\phi_j$. The weak form becomes:
$$\int_{0}^{1} \frac{d\phi_j}{dx} \frac{du}{dx} \, dx + \int_{0}^{1} \phi_j(x) u \, dx = 2\phi_j(1) + \int_{0}^{1} \phi_j(x) x \, dx$$
Let $u(x) = \sum_{i=1}^{N} u_i \phi_i(x)$ and $\frac{du}{dx} = \sum_{i=1}^{N} u_i \frac{d\phi_i}{dx}$.

The terms in the matrix equation $[K]\{u\} = \{F\}$ would be:

*   **Stiffness Matrix Components ($K_{ji}$):**
    $$K_{ji} = \int_{0}^{1} \frac{d\phi_j}{dx} \frac{d\phi_i}{dx} \, dx + \int_{0}^{1} \phi_j(x) \phi_i(x) \, dx$$
    This is because when substituting $u = \sum u_i \phi_i$, the $u_i$ term is factored out of the integral.

*   **Load Vector Components ($F_j$):**
    $$F_j = 2\phi_j(1) + \int_{0}^{1} \phi_j(x) x \, dx$$

**Question 3:**
Explain why the continuity requirement is relaxed in the weak form compared to the strong form. (Knowledge Level: K2)

**Answer 3:**
The relaxation of continuity requirements in the weak form is achieved through the process of integration by parts. When we integrate by parts, the derivative order acting on the unknown function $u$ is reduced, and a derivative is transferred to the weighting function $w$. For a second-order differential equation, integration by parts reduces the required differentiability of $u$ from $C^1$ (continuous first derivative) to $C^0$ (continuous function). This is crucial for FEM as it allows the use of piecewise polynomial shape functions, which are typically only $C^0$ continuous and cannot guarantee higher-order continuity across element boundaries.

---

## 7. Important Points to Remember

*   The **Strong Form** is the original differential equation and requires higher continuity of the solution.
*   The **Weak Form** is derived from the Strong Form using integration by parts and weighting functions.
*   The Weak Form reduces the order of derivatives required for the unknown function, allowing for $C^0$ continuity.
*   This relaxation of continuity is the primary reason why FEM works with piecewise polynomial approximations.
*   Natural boundary conditions appear explicitly in the Weak Form, while essential boundary conditions are imposed on the approximation functions.
*   The **Galerkin Method** is a weighted residual method where weighting functions are the same as the shape functions, leading directly to the FEM matrix equations.
*   The weak form provides the mathematical foundation for constructing element stiffness matrices and load vectors.

---

## Conclusion of Module 4

This module has provided a thorough understanding of the strong and weak forms of differential equations, their derivation, and their critical role in the Finite Element Method. By transitioning from the mathematically stringent strong form to the more accommodating weak form, FEM can effectively employ piecewise polynomial approximations to solve a wide range of physical problems. The next modules will build upon this foundation to develop the specific element formulations and assembly procedures.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
