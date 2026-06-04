---
title: "Governing Equations – Discrete and continuous models"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446383e"
status: "completed"
scrapedAt: "2026-05-20T18:03:51.921Z"
---
# Finite Element Methods: Module 1 - Introduction to FEM

## Topic: Governing Equations – Discrete and Continuous Models

---

### 1. Introduction to Governing Equations

The Finite Element Method (FEM) is a powerful numerical technique used to solve complex engineering and physics problems that cannot be solved analytically. At its core, FEM discretizes a continuous physical domain into smaller, interconnected subdomains called **finite elements**. For each of these elements, a simplified mathematical representation is developed, which is then assembled to approximate the solution for the entire domain.

Understanding the **governing equations** of the physical phenomenon being studied is the crucial first step in applying FEM. These equations describe the fundamental behavior of the system (e.g., heat transfer, structural mechanics, fluid dynamics).

---

### 2. Continuous Models vs. Discrete Models

#### 2.1 Continuous Models

*   **Definition:** A continuous model represents a physical system where properties and variables (like displacement, temperature, pressure) vary smoothly and continuously throughout the domain. The governing equations are typically expressed as **differential equations** (often Partial Differential Equations - PDEs) or integral equations.

*   **Characteristics:**
    *   Involve derivatives of unknown functions.
    *   Assume a continuous distribution of the unknown variable.
    *   Often derived from fundamental physical principles (e.g., conservation laws, constitutive relations).
    *   Can be challenging to solve directly for complex geometries or boundary conditions.

*   **Examples of Governing Equations (Continuous Form):**

    *   **Structural Mechanics (Linear Elasticity):**
        *   **Equation of Equilibrium (in terms of displacement, $u$):**
            $$ \nabla \cdot \boldsymbol{\sigma} + \mathbf{b} = 0 $$
            where $\boldsymbol{\sigma}$ is the stress tensor, $\nabla \cdot$ is the divergence operator, and $\mathbf{b}$ represents body forces.
        *   **Constitutive Relation (Hooke's Law):**
            $$ \boldsymbol{\sigma} = \mathbf{C} \boldsymbol{\varepsilon} $$
            where $\mathbf{C}$ is the elasticity tensor and $\boldsymbol{\varepsilon}$ is the strain tensor.
        *   **Strain-Displacement Relation:**
            $$ \boldsymbol{\varepsilon} = \frac{1}{2} (\nabla \mathbf{u} + (\nabla \mathbf{u})^T) $$
            (for small strains)

    *   **Heat Transfer (Steady State, without internal heat generation):**
        *   **Fourier's Law of Conduction:**
            $$ \mathbf{q} = -k \nabla T $$
            where $\mathbf{q}$ is the heat flux vector, $k$ is the thermal conductivity, and $T$ is the temperature.
        *   **Equation of Energy Conservation (in terms of temperature, $T$):**
            $$ \nabla \cdot \mathbf{q} + q_{gen} = 0 $$
            Substituting Fourier's Law:
            $$ - \nabla \cdot (k \nabla T) + q_{gen} = 0 $$
            or for constant thermal conductivity $k$:
            $$ k \nabla^2 T + q_{gen} = 0 $$

*   **Textbook References:**
    *   Reddy, Chapter 2: Formulation of Governing Equations.
    *   Cook, Chapter 1: Introduction and Background.
    *   Bhavikatti, Chapter 1: Introduction to FEM.

#### 2.2 Discrete Models

*   **Definition:** A discrete model approximates the continuous domain by dividing it into a finite number of elements. Within each element, the unknown variable is approximated using a set of **interpolation functions** (also called shape functions) and unknown nodal values. This process transforms the continuous governing differential equations into a system of algebraic equations.

*   **Characteristics:**
    *   The domain is represented by a mesh of discrete elements.
    *   The unknown variable is approximated by piecewise polynomial functions.
    *   The solution is defined at discrete points (nodes).
    *   Leads to a system of algebraic equations that can be solved using computers.

*   **Key Concepts in Discretization:**
    *   **Elements:** The basic building blocks of the discretized domain (e.g., line segments, triangles, quadrilaterals, tetrahedrons, hexahedrons).
    *   **Nodes:** Points in space where the unknown variable's values are calculated and connected to adjacent elements.
    *   **Shape Functions (Interpolation Functions):** Functions used to approximate the unknown variable within an element based on its nodal values. They are typically denoted by $N_i(\xi, \eta, \zeta)$, where $i$ is the node number and $(\xi, \eta, \zeta)$ are the natural (local) coordinates within the element.
    *   **Displacement/Variable Approximation:**
        $$ u(x, y) \approx \hat{u}(x, y) = \sum_{i=1}^{n} N_i(x, y) u_i $$
        where $\hat{u}$ is the approximated variable, $N_i$ are the shape functions, and $u_i$ are the nodal values of the variable.

*   **Transformation from Continuous to Discrete:** The core idea is to take the continuous governing equations and apply a procedure to derive algebraic equations for the nodal values. Common methods include:
    *   **Galerkin Method (Weighted Residual Method):** This is a fundamental approach where the residual of the governing equation is made orthogonal to a set of weighting functions. The weighting functions are often chosen to be the same as the shape functions.
    *   **Principle of Virtual Work / Principle of Minimum Potential Energy:** These variational principles are used in structural mechanics and other fields to derive the discrete equations.

*   **Textbook References:**
    *   Reddy, Chapter 3: Finite Element Interpolation.
    *   Cook, Chapter 2: Finite Element Formulation.
    *   Bhavikatti, Chapter 2: One-dimensional finite element analysis.
    *   Segerlind, Chapter 2: The finite element method.

---

### 3. Deriving Discrete Models from Continuous Governing Equations

The process of converting continuous governing equations into a discrete algebraic system is central to FEM. This typically involves transforming the differential equations into an integral form and then applying a discretization strategy.

#### 3.1 Weak Formulation (Integral Form)

Many continuous governing equations, especially PDEs, can be reformulated into an equivalent integral form known as the **weak formulation**. This process often involves:

1.  **Multiplying the governing equation by a weighting function, $W$.**
2.  **Integrating over the entire domain, $\Omega$.**
3.  **Applying integration by parts** (Green's theorem in higher dimensions) to reduce the order of derivatives required for the unknown variable, allowing for less smooth (piecewise polynomial) approximations. This also incorporates boundary conditions naturally.

**Example: Steady-State Heat Conduction (1D)**

Consider the steady-state heat conduction equation:
$$ -\frac{d}{dx} \left( k \frac{dT}{dx} \right) + q_{gen} = 0 \quad \text{for } 0 < x < L $$
with boundary conditions:
*   Dirichlet (temperature): $T(0) = T_0$
*   Neumann (heat flux): $-k \frac{dT}{dx}(L) = q_L$

**Steps to Weak Formulation:**

1.  **Multiply by a weighting function $W(x)$:**
    $$ \int_{0}^{L} W(x) \left[ -\frac{d}{dx} \left( k \frac{dT}{dx} \right) + q_{gen} \right] dx = 0 $$
2.  **Integrate by parts the first term:**
    $$ \int_{0}^{L} W(x) \left[ -\frac{d}{dx} \left( k \frac{dT}{dx} \right) \right] dx + \int_{0}^{L} W(x) q_{gen} dx = 0 $$
    Using integration by parts: $\int u dv = uv - \int v du$. Let $u = W$ and $dv = -\frac{d}{dx}(k \frac{dT}{dx}) dx$. Then $du = \frac{dW}{dx} dx$ and $v = -k \frac{dT}{dx}$.
    $$ \left[ -W(x) k \frac{dT}{dx} \right]_{0}^{L} + \int_{0}^{L} k \frac{dW}{dx} \frac{dT}{dx} dx + \int_{0}^{L} W(x) q_{gen} dx = 0 $$
3.  **Apply boundary conditions:**
    *   At $x=0$: $W(0) T(0) = W(0) T_0$. The term becomes $-W(L) k \frac{dT}{dx}(L) - (-W(0) k \frac{dT}{dx}(0))$.
    *   The Neumann boundary condition at $x=L$ is $-k \frac{dT}{dx}(L) = q_L$. So, the term at $x=L$ is $W(L) q_L$.
    *   For the weighting function $W(x)$, we usually enforce the Dirichlet boundary condition, meaning $W(0) = 0$.
    The weak form becomes:
    $$ \int_{0}^{L} k \frac{dW}{dx} \frac{dT}{dx} dx - W(L) q_L + \int_{0}^{L} W(x) q_{gen} dx = 0 $$
    (Note: if $W(0)$ was non-zero, we would have a term $W(0) k \frac{dT}{dx}(0)$ as well).

This weak form is now ready for discretization.

*   **Textbook References:**
    *   Reddy, Chapter 2.4: Weighted Residual Methods.
    *   Fish & Belytschko, Chapter 4: Variational and Weighted Residual Methods.
    *   Hutton, Chapter 4: Weighted Residual Methods.

#### 3.2 Discretization of the Weak Form

1.  **Divide the domain into finite elements:** The domain $\Omega$ is partitioned into $m$ non-overlapping elements $\Omega_e$.
2.  **Approximate the unknown variable within each element:**
    $$ T(x) \approx \hat{T}(x) = \sum_{i=1}^{n_e} N_i(x) T_i $$
    where $N_i(x)$ are the shape functions for element $e$, and $T_i$ are the nodal values of temperature at nodes $i$.
3.  **Substitute the approximation into the weak form:** The weighting function $W(x)$ is typically chosen to be the shape functions themselves ($W = N_j$). This leads to the **Galerkin method**.
    For each node $j$ in the mesh, we define a test function $N_j(x)$ such that $N_j$ is non-zero only over elements connected to node $j$, and $N_j(x_i) = \delta_{ji}$ (Kronecker delta).
    The weak form equation is enforced for each $N_j$:
    $$ \int_{0}^{L} k \frac{dN_j}{dx} \frac{d\hat{T}}{dx} dx - N_j(L) q_L + \int_{0}^{L} N_j(x) q_{gen} dx = 0 $$
    Substituting $\hat{T}(x) = \sum_{i=1}^{n} N_i(x) T_i$ (where $n$ is the total number of nodes):
    $$ \sum_{i=1}^{n} \left( \int_{0}^{L} k \frac{dN_j}{dx} \frac{dN_i}{dx} dx \right) T_i - N_j(L) q_L + \int_{0}^{L} N_j(x) q_{gen} dx = 0 $$
4.  **Form the Element Matrix Equations:** The integrals are evaluated over each element. For a typical element $e$, the equation for node $j$ will involve $T_i$ values for nodes connected to that element.
    $$ \sum_{i \in \text{nodes of } e} \left( \int_{\Omega_e} k \frac{dN_j}{dx} \frac{dN_i}{dx} dx \right) T_i = \int_{\Omega_e} N_j(x) q_{gen} dx + \text{boundary terms} $$
    This leads to the **element stiffness matrix** $[k^{(e)}]$ and the **element force vector** $\{f^{(e)}\}$:
    $$ [k^{(e)}] \{T^{(e)}\} = \{f^{(e)}\} $$
    where $[k^{(e)}]_{ji} = \int_{\Omega_e} k \frac{dN_j}{dx} \frac{dN_i}{dx} dx$ and $\{f^{(e)}\}_j = \int_{\Omega_e} N_j(x) q_{gen} dx + \text{boundary terms}$.
5.  **Assemble the Global Matrix Equation:** The element matrices are assembled into a global system of algebraic equations:
    $$ [K] \{T\} = \{F\} $$
    where $[K]$ is the global stiffness matrix, $\{T\}$ is the vector of unknown nodal temperatures, and $\{F\}$ is the global force vector.

*   **Textbook References:**
    *   Reddy, Chapter 3.2: Discretization of Domain.
    *   Cook, Chapter 3: Element Formulation.
    *   Bhavikatti, Chapter 2: One-dimensional finite element analysis.

---

### 4. Importance of Governing Equations in FEM

*   **Foundation for Discretization:** The form and complexity of the governing equations directly influence the choice of elements, shape functions, and the discretization procedure.
*   **Physical Interpretation:** Understanding the governing equations allows engineers to interpret the physical meaning of the FEM results and assess the validity of the model.
*   **Accuracy and Convergence:** The accuracy of the FEM solution depends on how well the discrete model represents the continuous governing equations. The choice of element type and the order of shape functions play a crucial role.
*   **Incorporation of Boundary Conditions:** Governing equations, especially in their weak form, provide a systematic way to incorporate various types of boundary conditions (essential/Dirichlet, natural/Neumann).
*   **CO1 Alignment:** This entire section directly addresses CO1: "To understand the governing equations of various physical phenomena and basic procedure of FEM." The knowledge level K2 (Understand) is achieved by grasping these concepts.

---

### 5. Examples of Governing Equations and their FEM Treatment

#### 5.1 Structural Mechanics (1D Bar/Truss Element)

*   **Governing Equation (Axial Deformation):**
    $$ -\frac{d}{dx} \left( A E \frac{du}{dx} \right) + b = 0 $$
    where $A$ is the cross-sectional area, $E$ is the Young's modulus, $u(x)$ is the axial displacement, and $b$ is the distributed axial body force per unit length.
    Boundary conditions might be prescribed displacements or applied forces at the ends.

*   **FEM Approach:**
    1.  **Discretize:** Divide the bar into 1D line elements.
    2.  **Shape Functions:** For a 2-node linear element, $u(x) = N_1(x) u_1 + N_2(x) u_2$, where $N_1 = (1-\frac{x}{L})$ and $N_2 = \frac{x}{L}$.
    3.  **Weak Formulation:** Multiply by $N_j$, integrate, and integrate by parts to get:
        $$ \int_{0}^{L} AE \frac{dN_j}{dx} \frac{du}{dx} dx - [N_j u']_{0}^{L} + \int_{0}^{L} N_j b dx = 0 $$
        (Here $u'$ denotes $\frac{du}{dx}$, the axial strain). The boundary term $[N_j u']_{0}^{L}$ incorporates the traction/force at the ends.
    4.  **Element Matrix:**
        $$ [k^{(e)}] \{u^{(e)}\} = \{f^{(e)}\} $$
        where $[k^{(e)}]_{ji} = \int_{0}^{L} AE \frac{dN_j}{dx} \frac{dN_i}{dx} dx$ is the element stiffness matrix and $\{f^{(e)}\}_j = \int_{0}^{L} N_j b dx + \text{boundary forces}$.
    5.  **Assembly:** Assemble $[k^{(e)}]$ and $\{f^{(e)}\}$ into global $[K] \{U\} = \{F\}$ to solve for nodal displacements $\{U\}$. Strains and stresses can then be calculated.

*   **CO3 Alignment:** This example relates to CO3: "Formulate shape functions and element strain displacement matrix of various element." The $\frac{dN_i}{dx}$ terms are directly involved in forming the strain-displacement matrix ($[B]$).

#### 5.2 Heat Transfer (2D Steady-State Conduction)

*   **Governing Equation:**
    $$ -\frac{\partial}{\partial x} \left( k \frac{\partial T}{\partial x} \right) - \frac{\partial}{\partial y} \left( k \frac{\partial T}{\partial y} \right) + q_{gen} = 0 \quad \text{in } \Omega $$
    Boundary conditions:
    *   Dirichlet (Prescribed Temperature): $T = \bar{T}$ on $\Gamma_1$
    *   Neumann (Prescribed Heat Flux): $-k \frac{\partial T}{\partial n} = q_n$ on $\Gamma_2$ (where $n$ is the outward normal)
    *   Convection (often handled as a Neumann condition): $-k \frac{\partial T}{\partial n} = h(T - T_\infty)$ on $\Gamma_3$

*   **FEM Approach:**
    1.  **Discretize:** Divide the 2D domain into elements (e.g., triangles, quadrilaterals).
    2.  **Shape Functions:** For a 3-node linear triangle element, $T(x,y) \approx \hat{T}(x,y) = N_1(x,y) T_1 + N_2(x,y) T_2 + N_3(x,y) T_3$.
    3.  **Weak Formulation:** Multiply by a weighting function $W$, integrate over $\Omega$, and apply Green's theorem:
        $$ \int_{\Omega} \left( k \frac{\partial W}{\partial x} \frac{\partial T}{\partial x} + k \frac{\partial W}{\partial y} \frac{\partial T}{\partial y} \right) dx dy - \int_{\Gamma} W q_n ds - \int_{\Omega} W q_{gen} dx dy = 0 $$
        The integral over $\Gamma$ incorporates the Neumann boundary conditions.
    4.  **Element Matrix:**
        $$ [k^{(e)}] \{T^{(e)}\} = \{f^{(e)}\} $$
        where $[k^{(e)}]_{ji} = \int_{\Omega_e} \left( k \frac{\partial N_j}{\partial x} \frac{\partial N_i}{\partial x} + k \frac{\partial N_j}{\partial y} \frac{\partial N_i}{\partial y} \right) dx dy$ and $\{f^{(e)}\}_j = \int_{\Omega_e} N_j q_{gen} dx dy + \int_{\Gamma_e} N_j q_n ds$.
    5.  **Assembly:** Assemble into global $[K] \{T\} = \{F\}$ to solve for nodal temperatures $\{T\}$. Heat fluxes can then be calculated.

*   **CO1 Alignment:** Again, understanding the governing equation and its weak form is key to this entire process, aligning with CO1.

---

### 6. Key Points to Remember

*   **FEM bridges the gap between continuous physical laws and numerical computation.**
*   **Governing equations are the mathematical statement of physical principles.**
*   **Continuous models use differential equations, assuming smooth variations.**
*   **Discrete models approximate the continuous domain with elements and use nodal values.**
*   **The conversion from continuous to discrete typically involves weak formulation (integral form) and discretization.**
*   **Galerkin method is a common technique for deriving discrete equations, often using shape functions as weighting functions.**
*   **The process leads to a system of algebraic equations: $[K]\{U\} = \{F\}$.**
*   **The accuracy of FEM depends on the chosen element types, shape functions, and mesh density, all guided by the governing equations.**

---

### 7. Practice Questions and Exercises

**Question 1:**
State the governing equation for steady-state one-dimensional heat conduction with variable thermal conductivity and an internal heat source. Explain how the weak formulation is derived from this equation.

**Answer 1:**
The governing equation is:
$$ -\frac{d}{dx} \left( k(x) \frac{dT}{dx} \right) + q_{gen}(x) = 0 $$
To derive the weak formulation, we multiply by a weighting function $W(x)$, integrate over the domain $[0, L]$, and apply integration by parts:
$$ \int_{0}^{L} W(x) \left[ -\frac{d}{dx} \left( k(x) \frac{dT}{dx} \right) \right] dx + \int_{0}^{L} W(x) q_{gen}(x) dx = 0 $$
$$ \left[ -W(x) k(x) \frac{dT}{dx} \right]_{0}^{L} + \int_{0}^{L} k(x) \frac{dW}{dx} \frac{dT}{dx} dx + \int_{0}^{L} W(x) q_{gen}(x) dx = 0 $$
If boundary conditions are $T(0)=T_0$ and $-k(L) \frac{dT}{dx}(L) = q_L$, and we choose $W(0)=0$, the weak form is:
$$ \int_{0}^{L} k(x) \frac{dW}{dx} \frac{dT}{dx} dx - W(L) q_L + \int_{0}^{L} W(x) q_{gen}(x) dx = 0 $$

**Question 2:**
Consider a 1D bar of length $L$ with Young's modulus $E$ and cross-sectional area $A$. If this bar is discretized into two linear 2-node elements, what are the components of the element stiffness matrix for the first element (nodes 1 and 2)? Assume $AE$ is constant.

**Answer 2:**
For a 2-node linear element, the displacement is approximated as $u(x) = N_1(x) u_1 + N_2(x) u_2$, where $N_1 = 1 - \frac{x}{L}$ and $N_2 = \frac{x}{L}$. The derivatives are $\frac{dN_1}{dx} = -\frac{1}{L}$ and $\frac{dN_2}{dx} = \frac{1}{L}$.
The element stiffness matrix $[k^{(e)}]_{ji} = \int_{0}^{L} AE \frac{dN_j}{dx} \frac{dN_i}{dx} dx$.

*   $k_{11}^{(e)} = \int_{0}^{L} AE \left(-\frac{1}{L}\right) \left(-\frac{1}{L}\right) dx = \int_{0}^{L} \frac{AE}{L^2} dx = \frac{AE}{L}$
*   $k_{12}^{(e)} = \int_{0}^{L} AE \left(-\frac{1}{L}\right) \left(\frac{1}{L}\right) dx = \int_{0}^{L} -\frac{AE}{L^2} dx = -\frac{AE}{L}$
*   $k_{21}^{(e)} = \int_{0}^{L} AE \left(\frac{1}{L}\right) \left(-\frac{1}{L}\right) dx = \int_{0}^{L} -\frac{AE}{L^2} dx = -\frac{AE}{L}$
*   $k_{22}^{(e)} = \int_{0}^{L} AE \left(\frac{1}{L}\right) \left(\frac{1}{L}\right) dx = \int_{0}^{L} \frac{AE}{L^2} dx = \frac{AE}{L}$

So, the element stiffness matrix for a 1D linear element is:
$$ [k^{(e)}] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} $$

**Question 3 (Conceptual):**
Why is it often advantageous to work with the weak formulation of a governing equation in FEM?

**Answer 3:**
It is advantageous to work with the weak formulation for several reasons:
1.  **Reduced Smoothness Requirements:** The weak formulation reduces the order of derivatives required for the unknown variable. This allows for the use of piecewise polynomial interpolation functions (shape functions) that are only continuous, not necessarily continuously differentiable, making the approximation simpler and more widely applicable.
2.  **Natural Boundary Condition Incorporation:** Integration by parts often moves boundary terms to the formulation. These boundary terms directly correspond to natural boundary conditions (like applied forces or heat fluxes), which can be incorporated more directly into the system of algebraic equations.
3.  **Systematic Derivation:** It provides a rigorous and systematic procedure for deriving the discrete system of equations from the continuous governing equations, regardless of the complexity of the problem.

---

### 8. Connecting to Course Outcomes

*   **CO1: To understand the governing equations of various physical phenomena and basic procedure of FEM. (Knowledge Level: K2)**
    *   This entire module, focusing on governing equations, their continuous and discrete representations, and the initial steps of FEM procedure, directly fulfills CO1. The examples and explanations build this foundational understanding.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
