---
title: "approximate numerical solutions for solving differential equations"
subject: "FINITE ELEMENT METHOD"
module: "Module 1: General Introduction –introduction to boundary value problems"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116c6"
status: "completed"
scrapedAt: "2026-05-20T18:58:47.260Z"
---
# Finite Element Method: Module 1 - General Introduction to Boundary Value Problems

## Topic: Approximate Numerical Solutions for Solving Differential Equations

This module introduces the fundamental concepts behind solving differential equations using approximate numerical methods, specifically setting the stage for the Finite Element Method (FEM).

### 1. The Need for Approximate Numerical Solutions

Differential equations (DEs) are powerful tools for modeling physical phenomena across various engineering disciplines (e.g., structural analysis, heat transfer, fluid dynamics, electromagnetics). However, many real-world problems involve:

*   **Complex Geometries:** Irregular shapes that are difficult or impossible to solve analytically.
*   **Complex Boundary Conditions:** Conditions that are not simple or uniform.
*   **Non-linearities:** Material properties or loading conditions that depend on the solution itself.
*   **Heterogeneous Materials:** Materials with varying properties.

In these cases, finding an exact, closed-form analytical solution is often intractable. This necessitates the use of **approximate numerical methods**.

### 2. Types of Differential Equations Relevant to FEM

Finite Element Method is primarily concerned with solving **Boundary Value Problems (BVPs)**, which are a type of Ordinary Differential Equation (ODE) or Partial Differential Equation (PDE) that are defined on a domain with specified conditions at the boundaries of that domain.

**Key Concepts:**

*   **Differential Equation (DE):** An equation that relates a function with its derivatives.
    *   **Ordinary Differential Equation (ODE):** Contains derivatives of a function with respect to a single independent variable.
        *   *Example:* $\frac{d^2u}{dx^2} + u = x$ (The deflection of a beam under load).
    *   **Partial Differential Equation (PDE):** Contains partial derivatives of a function with respect to two or more independent variables.
        *   *Example:* $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$ (The heat conduction equation).
*   **Boundary Value Problem (BVP):** A DE for which the solution is constrained by conditions imposed at the boundaries of the domain.
    *   **Domain ($\Omega$):** The region where the DE is to be solved.
    *   **Boundary ($\partial \Omega$):** The edges or surfaces of the domain.
    *   **Boundary Conditions (BCs):** Constraints imposed on the solution or its derivatives at the boundary.
        *   **Dirichlet Boundary Conditions (Essential BCs):** Specify the value of the unknown function at the boundary (e.g., $u(x=0) = 0$).
        *   **Neumann Boundary Conditions (Natural BCs):** Specify the derivative of the unknown function at the boundary (e.g., $\frac{du}{dx}(x=L) = 5$).
        *   **Robin/Mixed Boundary Conditions:** A combination of Dirichlet and Neumann conditions.

**Example of a BVP:**

Consider the steady-state heat conduction in a one-dimensional rod of length $L$. The governing PDE is:

$$ -\frac{d}{dx}\left(k(x)\frac{du}{dx}\right) = f(x) $$

where:
*   $u(x)$ is the temperature at position $x$.
*   $k(x)$ is the thermal conductivity of the material (can vary with $x$).
*   $f(x)$ is the heat source/sink term.

**Boundary Conditions:**
*   At $x=0$: Dirichlet condition, $u(0) = T_0$ (fixed temperature).
*   At $x=L$: Neumann condition, $-k(L)\frac{du}{dx}(L) = q_L$ (specified heat flux).

### 3. Approximate Numerical Solution Strategies

Numerical methods aim to transform the continuous problem (defined by DEs over a continuous domain) into a discrete problem that can be solved by a computer. This typically involves discretizing the domain and approximating the unknown function.

**General Steps:**

1.  **Discretization of the Domain:** The continuous domain $\Omega$ is divided into a finite number of smaller, simpler subdomains called **elements**. The collection of these elements forms a **mesh**.
2.  **Approximation of the Unknown Function:** Within each element, the unknown function (e.g., temperature, displacement) is approximated using a set of **basis functions** (also called shape functions or interpolation functions). These functions are typically simple polynomials.
3.  **Derivation of Algebraic Equations:** The DE is transformed into a system of algebraic equations that relate the unknown values of the function at discrete points (called **nodes**) within the mesh.
4.  **Solution of Algebraic Equations:** The system of algebraic equations is solved using standard numerical techniques (e.g., Gaussian elimination, iterative solvers) to obtain the approximate values of the unknown function at the nodes.
5.  **Post-processing:** The nodal values are used to reconstruct the approximate solution over the entire domain and to calculate other quantities of interest (e.g., stresses, strains, heat fluxes).

### 4. Weak Formulation (The Foundation of FEM)

While direct discretization of the differential equation can be done (e.g., Finite Difference Method), FEM often relies on a more robust approach called the **weak formulation** or **variational formulation**. This approach transforms the original differential equation into an integral form, which is less restrictive on the smoothness of the solution and allows for easier incorporation of boundary conditions.

**Key Concepts:**

*   **Test Functions (or Weight Functions):** Auxiliary functions, denoted by $v(x)$, that are used to "test" the differential equation. These functions are typically chosen to be continuous and have derivatives that exist, and often satisfy homogeneous boundary conditions (especially for Dirichlet BCs).
*   **Weighted Residual Method:** The core idea is to minimize the "residual" of the differential equation by multiplying it by a test function and integrating over the domain. The goal is to make the weighted residual zero.

**Derivation of Weak Form (using an example ODE):**

Consider the 1D BVP:

$$ -\frac{d^2u}{dx^2} = f(x) \quad \text{on } \Omega = [0, L] $$
with $u(0) = u_0$ and $\frac{du}{dx}(L) = q_L$.

1.  **Multiply by a test function $v(x)$:**
    $$ -\frac{d^2u}{dx^2} v(x) = f(x) v(x) $$
2.  **Integrate over the domain $\Omega$:**
    $$ \int_0^L -\frac{d^2u}{dx^2} v(x) dx = \int_0^L f(x) v(x) dx $$
3.  **Apply Integration by Parts:** This is crucial for reducing the order of derivatives and introducing boundary terms.
    $$ \int_0^L \frac{du}{dx} \frac{dv}{dx} dx - \left[ \frac{du}{dx} v(x) \right]_0^L = \int_0^L f(x) v(x) dx $$
4.  **Incorporate Boundary Terms:**
    $$ \int_0^L \frac{du}{dx} \frac{dv}{dx} dx - \left( \frac{du}{dx}(L) v(L) - \frac{du}{dx}(0) v(0) \right) = \int_0^L f(x) v(x) dx $$

Now, we consider how boundary conditions are applied:

*   **Dirichlet BCs (e.g., $u(0) = u_0$):** The test function $v(x)$ must satisfy $v(0) = 0$ to ensure that the approximation of $u$ at $x=0$ is enforced. This eliminates the $v(0)$ term from the boundary integral.
*   **Neumann BCs (e.g., $\frac{du}{dx}(L) = q_L$):** The boundary term at $x=L$ directly incorporates the Neumann condition: $\frac{du}{dx}(L) v(L) = q_L v(L)$.

The resulting **weak form** is:

$$ \int_0^L \frac{du}{dx} \frac{dv}{dx} dx - q_L v(L) = \int_0^L f(x) v(x) dx $$

where $v(0) = 0$.

**Why is this "weak"?** The original DE required $u$ to be twice differentiable. The weak form only requires $u$ to be once differentiable (so $\frac{du}{dx}$ exists) and $v$ to be once differentiable. This allows for a broader class of approximate solutions.

### 5. Galerkin Method: A Specific Implementation of Weak Formulation

The **Galerkin method** is a widely used technique for obtaining a system of algebraic equations from the weak form. It involves choosing the basis functions for approximating the unknown solution to also serve as the test functions.

**Steps in the Galerkin Method:**

1.  **Assume an approximate solution:**
    $$ u(x) \approx u^h(x) = \sum_{j=1}^N N_j(x) u_j $$
    where $N_j(x)$ are the basis functions (e.g., linear, quadratic polynomials defined over elements) and $u_j$ are the unknown nodal values of $u$.
2.  **Choose test functions:** In the Galerkin method, the test functions $v(x)$ are chosen from the same space as the approximating functions:
    $$ v(x) = N_i(x) $$
    where $i = 1, 2, \dots, N$ (for each node).
3.  **Substitute into the weak form:** Replace $u$ with $u^h$ and $v$ with $N_i$ in the weak form.
    $$ \int_0^L \frac{d}{dx}\left(\sum_{j=1}^N N_j(x) u_j\right) \frac{d N_i(x)}{dx} dx - q_L N_i(L) = \int_0^L f(x) N_i(x) dx $$
4.  **Rearrange to group nodal unknowns:**
    $$ \sum_{j=1}^N \left(\int_0^L \frac{d N_j}{dx} \frac{d N_i}{dx} dx\right) u_j = \int_0^L f(x) N_i(x) dx + q_L N_i(L) $$
5.  **Form the system of algebraic equations:** This results in a system of linear equations in matrix form: $[K]\{u\} = \{F\}$.
    *   $[K]$ is the stiffness matrix, where $K_{ij} = \int_0^L \frac{d N_j}{dx} \frac{d N_i}{dx} dx$.
    *   $\{u\}$ is the vector of unknown nodal values.
    *   $\{F\}$ is the force vector, where $F_i = \int_0^L f(x) N_i(x) dx + q_L N_i(L)$.

**Important Note:** For a general BVP, the stiffness matrix $[K]$ and force vector $\{F\}$ are assembled by summing contributions from each element. This is the core of the Finite Element Method.

### 6. Other Numerical Methods (Brief Overview)

While FEM is our focus, it's beneficial to understand other numerical approaches to solving DEs:

*   **Finite Difference Method (FDM):** Approximates derivatives using finite differences of function values at discrete points on a grid. It's simpler to implement but less flexible for complex geometries and boundary conditions.
    *   *Example:* $\frac{d^2u}{dx^2} \approx \frac{u_{i+1} - 2u_i + u_{i-1}}{(\Delta x)^2}$
*   **Finite Volume Method (FVM):** Divides the domain into control volumes and applies conservation laws to each volume. It's particularly useful for fluid dynamics and problems involving conservation principles.
*   **Spectral Methods:** Use global basis functions (e.g., Fourier series, Chebyshev polynomials) to represent the solution. They can achieve very high accuracy for smooth solutions but are less suited for complex geometries.

### Learning Outcome Checklist:

*   **Understanding the limitations of analytical solutions:** Yes, covered in Section 1.
*   **Identifying the need for numerical methods:** Yes, covered in Section 1.
*   **Differentiating between ODEs and PDEs, and the concept of BVPs:** Yes, covered in Section 2.
*   **Recognizing different types of boundary conditions (Dirichlet, Neumann, Robin):** Yes, covered in Section 2.
*   **Understanding the general strategy of discretization and approximation:** Yes, covered in Section 3.
*   **Grasping the concept of weak formulation and its benefits:** Yes, covered in Section 4.
*   **Understanding the principles of the Galerkin method:** Yes, covered in Section 5.
*   **Appreciating the transformation from differential equations to algebraic systems:** Yes, covered in Section 5.

### Practice Questions:

1.  **Question:** For the 1D BVP: $-\frac{d^2u}{dx^2} = 0$ on $[0, 1]$ with $u(0)=1$ and $u(1)=2$.
    a.  What is the analytical solution?
    b.  Write down the weak form of this BVP.
    c.  If we use a linear basis function $N_1(x) = 1-x$ and $N_2(x) = x$ to approximate $u(x) = N_1(x)u_1 + N_2(x)u_2$, and we choose $v(x) = N_1(x)$ and $v(x) = N_2(x)$ as test functions for the Galerkin method, what would be the terms in the resulting $[K]\{u\} = \{F\}$ system? (Assume $u_1$ is fixed by the Dirichlet condition).

2.  **Question:** Explain why weak formulation is considered "weaker" than the original differential equation.

3.  **Question:** Consider the BVP: $\frac{du}{dx} = 2x$ for $x \in [0, 2]$ with $u(0) = 0$.
    a.  Find the analytical solution.
    b.  What type of boundary condition is given at $x=0$?
    c.  If we were to solve this using Finite Differences with a step size $\Delta x$, how would you approximate $\frac{du}{dx}$ at a point $x_i$?

### Answers to Practice Questions:

1.  **Answer:**
    a.  The analytical solution is $u(x) = x + 1$.
    b.  Weak form: Multiply by $v(x)$ and integrate over $[0, 1]$:
        $$ \int_0^1 -\frac{d^2u}{dx^2} v(x) dx = \int_0^1 0 \cdot v(x) dx = 0 $$
        Apply integration by parts:
        $$ \int_0^1 \frac{du}{dx} \frac{dv}{dx} dx - \left[ \frac{du}{dx} v(x) \right]_0^1 = 0 $$
        Since $\frac{d^2u}{dx^2} = 0$, we have $\frac{du}{dx} = C$. From $u(0)=1$ and $u(1)=2$, we get $C=1$. So $\frac{du}{dx}=1$.
        $$ \int_0^1 (1) \frac{dv}{dx} dx - \left[ (1) v(x) \right]_0^1 = 0 $$
        $$ \int_0^1 \frac{dv}{dx} dx - (v(1) - v(0)) = 0 $$
        Using the property that test functions satisfy homogeneous Dirichlet BCs ($v(0)=0$, $v(1)=0$ for this problem), the boundary terms vanish. The weak form is:
        $$ \int_0^1 \frac{du}{dx} \frac{dv}{dx} dx = 0 $$
    c.  Approximate solution: $u^h(x) = (1-x)u_1 + x u_2$.
        Dirichlet condition at $x=0$: $u(0) = 1 \implies u_1 = 1$.
        So, $u^h(x) = (1-x)(1) + x u_2 = 1 - x + x u_2$.
        The unknown is $u_2$. The basis functions are $N_1(x) = 1-x$ and $N_2(x) = x$.
        Test functions will be $v(x) = N_1(x)$ and $v(x) = N_2(x)$.

        For test function $v(x) = N_1(x) = 1-x$:
        $K_{11}u_1 + K_{12}u_2 = F_1$
        $\int_0^1 \frac{d}{dx}(1-x) \frac{d}{dx}(1-x) dx \cdot u_1 + \int_0^1 \frac{d}{dx}(x) \frac{d}{dx}(1-x) dx \cdot u_2 = \int_0^1 0 \cdot (1-x) dx$
        $\int_0^1 (-1)(-1) dx \cdot u_1 + \int_0^1 (1)(-1) dx \cdot u_2 = 0$
        $[1] u_1 + [-1] u_2 = 0 \implies u_1 - u_2 = 0$.

        For test function $v(x) = N_2(x) = x$:
        $K_{21}u_1 + K_{22}u_2 = F_2$
        $\int_0^1 \frac{d}{dx}(1-x) \frac{d}{dx}(x) dx \cdot u_1 + \int_0^1 \frac{d}{dx}(x) \frac{d}{dx}(x) dx \cdot u_2 = \int_0^1 0 \cdot x dx$
        $\int_0^1 (-1)(1) dx \cdot u_1 + \int_0^1 (1)(1) dx \cdot u_2 = 0$
        $[-1] u_1 + [1] u_2 = 0 \implies -u_1 + u_2 = 0$.

        The system of equations is:
        $$ \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} $$
        This is a singular matrix, which is expected because the solution is completely determined by the Dirichlet condition $u_1=1$. The second equation is redundant. With $u_1=1$, we get $1-u_2=0 \implies u_2=1$. The approximate solution is $u^h(x) = (1-x)(1) + x(1) = 1$, which is incorrect because the $u(1)=2$ boundary condition wasn't properly imposed on the unknown nodal value. This highlights the importance of applying BCs correctly in the algebraic system. A more proper approach is to modify the matrix/vector to enforce the BC.

2.  **Answer:** The weak formulation is considered "weaker" because it reduces the smoothness requirements on the approximate solution and the test functions compared to the original differential equation. The original differential equation might require the solution to be twice continuously differentiable ($C^2$), while the weak form typically only requires the solution and test functions to be once continuously differentiable ($C^1$). This allows for a broader class of functions, including piecewise smooth functions, to be considered as approximate solutions, which is crucial for FEM where piecewise polynomial basis functions are used.

3.  **Answer:**
    a.  Integrating $\frac{du}{dx} = 2x$ once gives $u(x) = x^2 + C$. Using the boundary condition $u(0) = 0$, we get $0^2 + C = 0 \implies C=0$. So, $u(x) = x^2$.
    b.  The boundary condition $u(0) = 0$ specifies the value of the unknown function at the boundary, so it is a **Dirichlet boundary condition**.
    c.  Using a **forward difference** approximation for $\frac{du}{dx}$ at $x_i$: $\frac{du}{dx} \approx \frac{u(x_i + \Delta x) - u(x_i)}{\Delta x} = \frac{u_{i+1} - u_i}{\Delta x}$.
        Using a **backward difference** approximation: $\frac{du}{dx} \approx \frac{u(x_i) - u(x_i - \Delta x)}{\Delta x} = \frac{u_i - u_{i-1}}{\Delta x}$.
        Using a **central difference** approximation (more accurate): $\frac{du}{dx} \approx \frac{u(x_i + \Delta x) - u(x_i - \Delta x)}{2\Delta x} = \frac{u_{i+1} - u_{i-1}}{2\Delta x}$.

### Important Points to Remember:

*   **The goal of numerical methods for DEs is to transform a continuous problem into a discrete algebraic system.**
*   **Boundary Value Problems (BVPs) are central to FEM, and boundary conditions are critical.**
*   **Weak formulation is a powerful tool that relaxes smoothness requirements and simplifies the incorporation of boundary conditions.**
*   **The Galerkin method is a specific procedure to derive algebraic equations from the weak form by using the basis functions as test functions.**
*   **FEM discretizes the domain into elements and approximates the solution within each element using basis functions.**
*   **The resulting system of algebraic equations is typically of the form $[K]\{u\} = \{F\}$.**
