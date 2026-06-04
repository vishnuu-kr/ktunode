---
title: "Formulation techniques"
subject: "FINITE ELEMENT METHOD"
module: "Module 3: Formulation techniques"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116d7"
status: "completed"
scrapedAt: "2026-05-20T18:58:58.713Z"
---
# Module 3: Formulation Techniques in Finite Element Method

This module delves into the fundamental techniques used to formulate the Finite Element Method (FEM). Understanding these techniques is crucial for applying FEM to a wide range of engineering problems.

## Learning Outcomes

Upon completion of this module, you should be able to:

*   Understand the foundational principles behind FEM formulation.
*   Derive the weak form of a differential equation.
*   Apply the Galerkin Method and its variants for FEM formulation.
*   Understand the concept of weighted residuals and their role in FEM.
*   Formulate FEM equations for different types of problems (e.g., elasticity, heat transfer).
*   Understand the process of element stiffness matrix and force vector assembly.

---

## 3.1 Introduction to FEM Formulation

The Finite Element Method (FEM) is a numerical technique used to find approximate solutions to boundary value problems governed by partial differential equations (PDEs). The core idea is to divide a complex domain into smaller, simpler subdomains called **finite elements**. Within each element, the unknown function (e.g., displacement, temperature) is approximated using **shape functions**.

### Key Concepts:

*   **Differential Equation:** The mathematical model describing the physical phenomenon.
*   **Boundary Value Problem (BVP):** A differential equation with specified conditions on the boundaries of the domain.
*   **Domain:** The physical region over which the problem is defined.
*   **Finite Element:** A small, simple geometric shape (e.g., line segment, triangle, quadrilateral) that discretizes the domain.
*   **Nodes:** Points connecting the elements where the unknown function's values are determined.
*   **Degrees of Freedom (DOFs):** The unknown values at the nodes (e.g., displacement at a node, temperature at a node).
*   **Shape Functions (or Basis Functions/Interpolation Functions):** Polynomial functions that define the variation of the unknown within an element based on the nodal values.
*   **Element Equations:** A system of algebraic equations relating nodal DOFs for a single element.
*   **Global Equations:** A system of algebraic equations for the entire domain, obtained by assembling element equations.

### Why Formulation Techniques?

Directly solving PDEs analytically is often impossible for complex geometries, material properties, and boundary conditions. FEM provides a systematic way to approximate these solutions. The formulation techniques transform the PDE into a solvable system of algebraic equations.

---

## 3.2 Weighted Residual Methods

Weighted residual methods are a general approach to finding approximate solutions to differential equations. The core idea is to minimize the "error" or "residual" of the differential equation over the entire domain.

### The Residual

Consider a general differential equation in differential form:

$L(u) = f$

where:
*   $L$ is a linear differential operator.
*   $u$ is the unknown function.
*   $f$ is a known function (forcing function).

The **residual**, $R(x)$, is the difference between the left-hand side and the right-hand side of the equation when an approximate solution $\tilde{u}(x)$ is substituted:

$R(x) = L(\tilde{u}(x)) - f$

Ideally, for the exact solution, $R(x) = 0$ everywhere in the domain. In FEM, we seek an approximate solution $\tilde{u}(x)$ such that the residual is minimized in some sense.

### Weighted Residual Statement

To minimize the residual, we multiply it by a set of **weighting functions** (or test functions), $w_i(x)$, and require that the integral of the product over the domain is zero:

$\int_{\Omega} w_i(x) R(x) \, d\Omega = 0$

This is the weighted residual statement. The choice of weighting functions $w_i(x)$ leads to different FEM formulation techniques.

---

## 3.3 Weak Formulation (Variational Methods)

The weak formulation is a powerful technique that transforms a differential equation (strong form) into an integral form, which is generally easier to satisfy and allows for lower-order continuity of the approximate solution.

### Principle of Virtual Work (for Mechanics Problems)

The principle of virtual work is a cornerstone for deriving weak forms in mechanics. It states that the total virtual work done by external forces is equal to the total virtual internal strain energy for a system in equilibrium.

**Virtual Displacement:** An arbitrary, infinitesimal kinematically admissible displacement $\delta u$.

**Virtual Strain:** The corresponding infinitesimal strain change, $\delta \epsilon$.

**Virtual Work Done by External Forces:**
$ \delta W_{ext} = \int_{\Omega} \mathbf{f}^T \delta \mathbf{u} \, d\Omega + \int_{\Gamma_t} \mathbf{t}^T \delta \mathbf{u} \, d\Gamma $
where:
*   $\mathbf{f}$ are body forces.
*   $\mathbf{t}$ are tractions on boundary $\Gamma_t$.
*   $\delta \mathbf{u}$ is the virtual displacement.

**Virtual Internal Strain Energy:**
$ \delta U = \int_{\Omega} \boldsymbol{\sigma}^T \delta \boldsymbol{\epsilon} \, d\Omega $
where:
*   $\boldsymbol{\sigma}$ are stresses.
*   $\delta \boldsymbol{\epsilon}$ are virtual strains.

**Principle of Virtual Work:** $\delta U = \delta W_{ext}$

### Derivation of Weak Form from Strong Form

Let's consider a 1D elasticity problem (bar under axial load):

**Strong Form:**
$ -\frac{d}{dx} (A E \frac{du}{dx}) + c u = f \quad \text{in } \Omega = (0, L) $
**Boundary Conditions:**
*   $u(0) = u_0$ (prescribed displacement at $x=0$)
*   $A E \frac{du}{dx}(L) = T$ (prescribed traction at $x=L$)

Here:
*   $A$ is the cross-sectional area.
*   $E$ is the Young's modulus.
*   $u(x)$ is the axial displacement.
*   $c$ is a distributed spring constant (optional term).
*   $f$ is a distributed load.
*   $T$ is the traction (force) at the end.

**Steps to derive the Weak Form:**

1.  **Multiply by a virtual displacement:** Multiply the strong form by a virtual displacement $\delta u(x)$. Note that $\delta u(0) = 0$ because the essential boundary condition (displacement) is prescribed.
    $ -\delta u \frac{d}{dx} (A E \frac{du}{dx}) + \delta u c u = \delta u f $

2.  **Integrate over the domain:** Integrate the equation over the domain $\Omega = (0, L)$.
    $ \int_{0}^{L} -\delta u \frac{d}{dx} (A E \frac{du}{dx}) \, dx + \int_{0}^{L} \delta u c u \, dx = \int_{0}^{L} \delta u f \, dx $

3.  **Apply integration by parts to the highest-order derivative term:** The term with the highest derivative ($d^2u/dx^2$ implicitly in the first term) is the one we want to reduce the order of. Apply integration by parts to the first integral: $\int u \, dv = uv - \int v \, du$.
    Let $u = \delta u$ and $dv = -\frac{d}{dx} (A E \frac{du}{dx}) \, dx$.
    Then $du = \frac{d(\delta u)}{dx} \, dx$ and $v = -A E \frac{du}{dx}$.

    $ \int_{0}^{L} -\delta u \frac{d}{dx} (A E \frac{du}{dx}) \, dx = [-\delta u (-A E \frac{du}{dx})]_{0}^{L} - \int_{0}^{L} (-A E \frac{du}{dx}) \frac{d(\delta u)}{dx} \, dx $
    $ = [\delta u (A E \frac{du}{dx})]_{0}^{L} + \int_{0}^{L} (A E \frac{du}{dx}) \frac{d(\delta u)}{dx} \, dx $

4.  **Substitute back into the integrated equation:**
    $ [\delta u (A E \frac{du}{dx})]_{0}^{L} + \int_{0}^{L} (A E \frac{du}{dx}) \frac{d(\delta u)}{dx} \, dx + \int_{0}^{L} \delta u c u \, dx = \int_{0}^{L} \delta u f \, dx $

5.  **Evaluate boundary terms and apply boundary conditions:**
    *   At $x=0$: $\delta u(0) = 0$, so the first term is zero.
    *   At $x=L$: $A E \frac{du}{dx}(L) = T$ (from the traction boundary condition). The term becomes $\delta u(L) \cdot T$.

    $ \delta u(L) T + \int_{0}^{L} (A E \frac{du}{dx}) \frac{d(\delta u)}{dx} \, dx + \int_{0}^{L} \delta u c u \, dx = \int_{0}^{L} \delta u f \, dx $

6.  **Rearrange to the standard weak form:**
    $ \int_{0}^{L} (A E \frac{du}{dx}) \frac{d(\delta u)}{dx} \, dx + \int_{0}^{L} c u \delta u \, dx = \int_{0}^{L} f \delta u \, dx - T \delta u(L) $

    This is the weak form of the 1D elasticity problem. It requires only $C^0$ continuity for $u$ (i.e., $u$ and its derivative must be continuous across element boundaries, but not necessarily the second derivative). The original strong form required $C^1$ continuity.

### Key Characteristics of Weak Form:

*   **Integral form:** Transforms differential equations into integral equations.
*   **Reduced continuity requirements:** Lower order continuity of the trial function is needed.
*   **Handles boundary conditions naturally:** Traction/flux boundary conditions appear as boundary integrals.
*   **Basis for Galerkin and other weighted residual methods:** The weak form is often the starting point for FEM discretization.

---

## 3.4 Galerkin Method

The Galerkin method is a specific and widely used type of weighted residual method where the **weighting functions are chosen to be the same as the shape functions** used to approximate the unknown.

### Steps in the Galerkin Method:

1.  **Discretize the domain:** Divide the domain $\Omega$ into $N_{el}$ finite elements.
2.  **Approximate the unknown within each element:** On element $e$, approximate the unknown $u(x)$ as:
    $ u(x) \approx \tilde{u}^{(e)}(x) = \sum_{i=1}^{n_{en}} N_i^{(e)}(x) u_i^{(e)} $
    where:
    *   $N_i^{(e)}(x)$ are the shape functions for element $e$.
    *   $u_i^{(e)}$ are the nodal values of $u$ for element $e$.
    *   $n_{en}$ is the number of nodes per element.
3.  **Define the global approximate solution:** The global approximate solution $\tilde{u}(x)$ is the sum of the approximations over all elements:
    $ \tilde{u}(x) = \sum_{j=1}^{N_{nodes}} N_j(x) u_j $
    where:
    *   $N_j(x)$ are the global shape functions.
    *   $u_j$ are the global nodal values.
    *   $N_{nodes}$ is the total number of nodes.
4.  **Substitute the approximate solution into the weak form:** Let the weak form be:
    $ \int_{\Omega} w(x) R(x) \, d\Omega = 0 $
    Substitute $\tilde{u}(x)$ for $u(x)$ in the weak form. The residual $R(x)$ will then be a function of the nodal unknowns $u_j$.
5.  **Choose weighting functions equal to shape functions:** For the Galerkin method, we choose the weighting functions $w(x)$ to be the same as the global shape functions $N_i(x)$ associated with each node $i$. This means we enforce the residual condition at each node.
    $ \int_{\Omega} N_i(x) R(\tilde{u}(x)) \, d\Omega = 0 \quad \text{for } i = 1, 2, \ldots, N_{nodes} $
6.  **Formulate element equations:** Apply the weighted residual statement to each element, considering only the nodes associated with that element. This leads to element stiffness matrices and force vectors.
7.  **Assemble global equations:** Combine the element equations into a global system of linear algebraic equations:
    $ [K] \{u\} = \{F\} $
    where:
    *   $[K]$ is the global stiffness matrix.
    *   $\{u\}$ is the vector of unknown nodal displacements.
    *   $\{F\}$ is the global force vector.
8.  **Apply essential boundary conditions:** Modify the global system to incorporate the prescribed nodal values (e.g., Dirichlet boundary conditions).
9.  **Solve for nodal unknowns:** Solve the system of algebraic equations for the unknown nodal values $\{u\}$.
10. **Post-processing:** Calculate strains, stresses, fluxes, etc., using the obtained nodal values and shape functions.

### Example: 1D Bar with Galerkin Method

Let's use the weak form derived earlier for the 1D bar:
$ \int_{0}^{L} (A E \frac{du}{dx}) \frac{d(\delta u)}{dx} \, dx + \int_{0}^{L} c u \delta u \, dx = \int_{0}^{L} f \delta u \, dx - T \delta u(L) $

**Discretization:** Divide the bar into $N_{el}$ elements. Consider a single 2-node linear element (e.g., from $x_1$ to $x_2$).
*   Nodes: 1 and 2.
*   Unknowns: $u_1, u_2$.

**Element Approximation:**
$ u^{(e)}(x) = N_1^{(e)}(x) u_1 + N_2^{(e)}(x) u_2 $
The shape functions for a 1D linear element are:
$ N_1^{(e)}(x) = \frac{x_2 - x}{l_e} $
$ N_2^{(e)}(x) = \frac{x - x_1}{l_e} $
where $l_e = x_2 - x_1$.

**Derivative of shape functions:**
$ \frac{dN_1^{(e)}}{dx} = -\frac{1}{l_e} $
$ \frac{dN_2^{(e)}}{dx} = \frac{1}{l_e} $

**Galerkin Weighting Functions:** For this element, the weighting functions are $\delta u = N_1^{(e)}$ and $\delta u = N_2^{(e)}$.

**Element Weak Form:** We set up two equations, one for each node:

**For $i=1$ (weighting function $N_1^{(e)}$):**
$ \int_{x_1}^{x_2} (A E \frac{du^{(e)}}{dx}) \frac{dN_1^{(e)}}{dx} \, dx + \int_{x_1}^{x_2} c u^{(e)} N_1^{(e)} \, dx = \int_{x_1}^{x_2} f N_1^{(e)} \, dx $
(Assuming no traction at $x_1$ and $x_2$ for the element-level calculation, this will be handled during assembly).

Substitute $u^{(e)}$ and its derivative:
$ \frac{du^{(e)}}{dx} = \frac{dN_1^{(e)}}{dx} u_1 + \frac{dN_2^{(e)}}{dx} u_2 $

$ \int_{x_1}^{x_2} (A E (\frac{dN_1^{(e)}}{dx} u_1 + \frac{dN_2^{(e)}}{dx} u_2)) \frac{dN_1^{(e)}}{dx} \, dx + \int_{x_1}^{x_2} c (N_1^{(e)} u_1 + N_2^{(e)} u_2) N_1^{(e)} \, dx = \int_{x_1}^{x_2} f N_1^{(e)} \, dx $

Rearrange into the form $[k^{(e)}] \{u^{(e)}\} = \{f^{(e)}\}$:
$ \left( \int_{x_1}^{x_2} A E \frac{dN_1^{(e)}}{dx} \frac{dN_1^{(e)}}{dx} \, dx + \int_{x_1}^{x_2} c N_1^{(e)} N_1^{(e)} \, dx \right) u_1 + \left( \int_{x_1}^{x_2} A E \frac{dN_2^{(e)}}{dx} \frac{dN_1^{(e)}}{dx} \, dx + \int_{x_1}^{x_2} c N_2^{(e)} N_1^{(e)} \, dx \right) u_2 = \int_{x_1}^{x_2} f N_1^{(e)} \, dx $

**For $i=2$ (weighting function $N_2^{(e)}$):**
Similarly, we get:
$ \left( \int_{x_1}^{x_2} A E \frac{dN_1^{(e)}}{dx} \frac{dN_2^{(e)}}{dx} \, dx + \int_{x_1}^{x_2} c N_1^{(e)} N_2^{(e)} \, dx \right) u_1 + \left( \int_{x_1}^{x_2} A E \frac{dN_2^{(e)}}{dx} \frac{dN_2^{(e)}}{dx} \, dx + \int_{x_1}^{x_2} c N_2^{(e)} N_2^{(e)} \, dx \right) u_2 = \int_{x_1}^{x_2} f N_2^{(e)} \, dx $

**Element Stiffness Matrix $[k^{(e)}]$ and Force Vector $\{f^{(e)}\}$:**
The integrals in these equations form the entries of the element stiffness matrix and force vector. These integrals are typically evaluated analytically or numerically (e.g., Gaussian quadrature).

For the term $\int_{x_1}^{x_2} A E \frac{dN_i^{(e)}}{dx} \frac{dN_j^{(e)}}{dx} \, dx$:
*   $k_{11}^{(e)} = \int_{x_1}^{x_2} A E (-\frac{1}{l_e}) (-\frac{1}{l_e}) \, dx = A E \int_{x_1}^{x_2} \frac{1}{l_e^2} \, dx = A E \frac{1}{l_e^2} [x]_{x_1}^{x_2} = \frac{A E}{l_e}$
*   $k_{12}^{(e)} = \int_{x_1}^{x_2} A E (-\frac{1}{l_e}) (\frac{1}{l_e}) \, dx = -A E \int_{x_1}^{x_2} \frac{1}{l_e^2} \, dx = -\frac{A E}{l_e}$
*   $k_{21}^{(e)} = k_{12}^{(e)} = -\frac{A E}{l_e}$
*   $k_{22}^{(e)} = \int_{x_1}^{x_2} A E (\frac{1}{l_e}) (\frac{1}{l_e}) \, dx = A E \int_{x_1}^{x_2} \frac{1}{l_e^2} \, dx = \frac{A E}{l_e}$

For the term $\int_{x_1}^{x_2} c N_i^{(e)} N_j^{(e)} \, dx$ (assuming $c$ is constant):
*   $k_{11}^{(e)} = c \int_{x_1}^{x_2} (\frac{x_2 - x}{l_e})(\frac{x_2 - x}{l_e}) \, dx = \frac{c}{l_e^2} \int_{x_1}^{x_2} (x_2 - x)^2 \, dx = \frac{c}{l_e^2} [-\frac{(x_2 - x)^3}{3}]_{x_1}^{x_2} = \frac{c}{l_e^2} (\frac{l_e^3}{3}) = \frac{c l_e}{3}$
*   $k_{12}^{(e)} = c \int_{x_1}^{x_2} (\frac{x_2 - x}{l_e})(\frac{x - x_1}{l_e}) \, dx = \frac{c}{l_e^2} \int_{x_1}^{x_2} (x_2 - x)(x - x_1) \, dx = \frac{c}{l_e^2} \frac{l_e^3}{6} = \frac{c l_e}{6}$
*   $k_{21}^{(e)} = k_{12}^{(e)} = \frac{c l_e}{6}$
*   $k_{22}^{(e)} = c \int_{x_1}^{x_2} (\frac{x - x_1}{l_e})(\frac{x - x_1}{l_e}) \, dx = \frac{c}{l_e^2} \int_{x_1}^{x_2} (x - x_1)^2 \, dx = \frac{c}{l_e^2} [\frac{(x - x_1)^3}{3}]_{x_1}^{x_2} = \frac{c}{l_e^2} (\frac{l_e^3}{3}) = \frac{c l_e}{3}$

For the force terms $\int_{x_1}^{x_2} f N_i^{(e)} \, dx$ (assuming $f$ is constant):
*   $f_1^{(e)} = f \int_{x_1}^{x_2} \frac{x_2 - x}{l_e} \, dx = \frac{f}{l_e} [-\frac{(x_2 - x)^2}{2}]_{x_1}^{x_2} = \frac{f}{l_e} (\frac{l_e^2}{2}) = \frac{f l_e}{2}$
*   $f_2^{(e)} = f \int_{x_1}^{x_2} \frac{x - x_1}{l_e} \, dx = \frac{f}{l_e} [\frac{(x - x_1)^2}{2}]_{x_1}^{x_2} = \frac{f}{l_e} (\frac{l_e^2}{2}) = \frac{f l_e}{2}$

**Element Stiffness Matrix (including spring term):**
$ [k^{(e)}] = \begin{bmatrix} \frac{A E}{l_e} + \frac{c l_e}{3} & -\frac{A E}{l_e} + \frac{c l_e}{6} \\ -\frac{A E}{l_e} + \frac{c l_e}{6} & \frac{A E}{l_e} + \frac{c l_e}{3} \end{bmatrix} $

**Element Force Vector (from distributed load):**
$ \{f^{(e)}\} = \begin{bmatrix} \frac{f l_e}{2} \\ \frac{f l_e}{2} \end{bmatrix} $

The process of assembly involves placing these element matrices and vectors into larger global matrices based on node numbering.

---

## 3.5 Other Weighted Residual Methods

While Galerkin is the most common, other choices of weighting functions lead to different methods:

### 3.5.1 Subdomain Method

*   **Weighting Functions:** The domain is divided into subdomains, and the weighting function is unity over its corresponding subdomain and zero elsewhere.
*   **Concept:** This method forces the residual to be zero over each subdomain. It's less commonly used in FEM compared to Galerkin.

### 3.5.2 Collocation Method

*   **Weighting Functions:** The weighting functions are Dirac delta functions, $\delta(x - x_i)$, concentrated at specific points (collocation points) within the domain.
*   **Concept:** This method forces the residual to be zero exactly at the collocation points. It's simpler to implement but can lead to less accurate results, especially for problems with strong gradients.

### 3.5.3 Least Squares Method

*   **Weighting Functions:** The weighting functions are chosen to minimize the integral of the square of the residual:
    $ \int_{\Omega} R(x)^2 \, d\Omega = \text{minimum} $
    This is equivalent to choosing $w_i = \frac{\partial R}{\partial u_i}$.
*   **Concept:** Minimizes the overall "energy" of the residual. It's mathematically more complex but can be effective for certain types of PDEs.

---

## 3.6 Formulation for Different Problems

The general framework of weighted residuals and weak forms can be applied to various physical phenomena.

### 3.6.1 Elasticity (Solid Mechanics)

*   **Governing Equations:** Equations of equilibrium, strain-displacement relations, and constitutive relations (Hooke's Law).
*   **Unknowns:** Displacements ($\mathbf{u}$).
*   **Weak Form Principle:** Often derived from the Principle of Virtual Work.
*   **Element Matrices:** Element stiffness matrix $[k^{(e)}]$ relates nodal forces to nodal displacements.
*   **Example:** 1D bar (covered extensively), 2D plane stress/strain, 3D elasticity.

**Example: 2D Plane Stress Element (e.g., Quadrilateral)**

*   **Unknowns:** $u_x, u_y$ at each node.
*   **Shape Functions:** Bilinear or higher-order for 2D.
*   **Strains:** $\boldsymbol{\epsilon} = \{ \epsilon_x, \epsilon_y, \gamma_{xy} \}^T$
*   **Stresses:** $\boldsymbol{\sigma} = \{ \sigma_x, \sigma_y, \tau_{xy} \}^T$
*   **Constitutive Matrix:** $[\text{D}]$ such that $\boldsymbol{\sigma} = [\text{D}] \boldsymbol{\epsilon}$.
*   **Element Stiffness Matrix (Biot-Savart Law for 2D):**
    $ [k^{(e)}] = \int_{A_e} [B]^T [\text{D}] [B] \, dA $
    where $[B]$ is the strain-displacement matrix relating nodal displacements to strains: $\boldsymbol{\epsilon} = [B] \{u^{(e)}\}$.

### 3.6.2 Heat Transfer

*   **Governing Equation:** Heat conduction equation (e.g., $\nabla \cdot (k \nabla T) + q = 0$, where $k$ is thermal conductivity, $T$ is temperature, $q$ is heat generation).
*   **Unknowns:** Temperature ($T$).
*   **Weak Form Principle:** Often derived from the Principle of Conservation of Energy or using weighted residuals.
*   **Element Matrices:** Element conductivity matrix $[K^{(e)}]$ relates nodal heat fluxes to nodal temperature differences.
*   **Example:** Steady-state or transient heat conduction.

**Example: 1D Heat Conduction (Bar)**

*   **Strong Form:** $ -\frac{d}{dx} (k A \frac{dT}{dx}) + \alpha T = q $ (where $\alpha T$ represents heat loss to surroundings).
*   **Boundary Conditions:** Specified temperature ($T$) or heat flux ($q = -k A \frac{dT}{dx}$).
*   **Weak Form (after integration by parts):**
    $ \int_{0}^{L} k A \frac{dT}{dx} \frac{d(\delta T)}{dx} \, dx + \int_{0}^{L} \alpha T \delta T \, dx = \int_{0}^{L} q \delta T \, dx - (k A \frac{dT}{dx})|_{x=L} \delta T(L) $
*   **Element Matrices:** Similar to the elasticity case, but with thermal conductivity $k$ instead of $AE$. The term $\alpha T$ contributes to the "stiffness" matrix (similar to spring term), and the boundary heat flux term becomes part of the force vector.

### 3.6.3 Fluid Mechanics

*   **Governing Equations:** Navier-Stokes equations (momentum and continuity).
*   **Unknowns:** Velocity components and pressure.
*   **Challenges:** Non-linearity, coupling of equations, handling of incompressibility.
*   **Formulation:** Often uses Galerkin or Petrov-Galerkin methods. Mixed formulations (e.g., mixed finite elements for velocity and pressure) are common.

---

## 3.7 Assembly of Element Equations

The process of combining element-level equations into a global system is crucial.

### Steps:

1.  **Global Node Numbering:** Assign unique numbers to all nodes in the discretized domain.
2.  **Element Connectivity:** Define which nodes belong to each element. This is usually stored in an **element connectivity table**.
3.  **Mapping Element DOFs to Global DOFs:** For each element, the local node numbers and their corresponding DOFs are mapped to the global node numbers and DOFs.
4.  **Initialization of Global Matrices:** Initialize the global stiffness matrix $[K]$ and global force vector $\{F\}$ with zeros. The size of $[K]$ is $N_{nodes} \times N_{nodes}$, and $\{F\}$ is $N_{nodes} \times 1$.
5.  **Stiffiness Matrix and Force Vector Contribution:** For each element $e$:
    *   Obtain the element stiffness matrix $[k^{(e)}]$ and element force vector $\{f^{(e)}\}$.
    *   For each entry $k_{ij}^{(e)}$ in $[k^{(e)}]$ and $f_i^{(e)}$ in $\{f^{(e)}\}$:
        *   Identify the global node numbers $I$ and $J$ corresponding to the element's local nodes $i$ and $j$.
        *   Add the element contribution to the global matrix:
            $ K_{IJ} = K_{IJ} + k_{ij}^{(e)} $
            $ F_I = F_I + f_i^{(e)} $
            (This is often called the "direct stiffness method" or "element-by-element assembly").
6.  **Boundary Condition Application:** Modify the global system $[K]\{u\} = \{F\}$ to incorporate the specified essential boundary conditions.

### Example of Assembly

Consider a simple 1D bar discretized into two linear elements.
*   Nodes: 1, 2, 3.
*   Elements: Element 1 (nodes 1, 2), Element 2 (nodes 2, 3).
*   Global DOFs: $u_1, u_2, u_3$.

Let the element stiffness matrix for a 2-node linear element be:
$ [k^{(e)}] = \begin{bmatrix} k_{11} & k_{12} \\ k_{21} & k_{22} \end{bmatrix} $
And the force vector:
$ \{f^{(e)}\} = \begin{bmatrix} f_1 \\ f_2 \end{bmatrix} $

**Element 1 (nodes 1, 2):**
$ [k^{(1)}] = \begin{bmatrix} k_{11}^{(1)} & k_{12}^{(1)} \\ k_{21}^{(1)} & k_{22}^{(1)} \end{bmatrix} $, $ \{f^{(1)}\} = \begin{bmatrix} f_1^{(1)} \\ f_2^{(1)} \end{bmatrix} $
Contributions to global matrices:
$ K_{11} += k_{11}^{(1)} $, $ K_{12} += k_{12}^{(1)} $, $ F_1 += f_1^{(1)} $
$ K_{21} += k_{21}^{(1)} $, $ K_{22} += k_{22}^{(1)} $, $ F_2 += f_2^{(1)} $

**Element 2 (nodes 2, 3):**
$ [k^{(2)}] = \begin{bmatrix} k_{11}^{(2)} & k_{12}^{(2)} \\ k_{21}^{(2)} & k_{22}^{(2)} \end{bmatrix} $, $ \{f^{(2)}\} = \begin{bmatrix} f_1^{(2)} \\ f_2^{(2)} \end{bmatrix} $
Contributions to global matrices:
$ K_{22} += k_{11}^{(2)} $, $ K_{23} += k_{12}^{(2)} $, $ F_2 += f_1^{(2)} $
$ K_{32} += k_{21}^{(2)} $, $ K_{33} += k_{22}^{(2)} $, $ F_3 += f_2^{(2)} $

**Resulting Global System:**
$ \begin{bmatrix} K_{11} & K_{12} & 0 \\ K_{21} & K_{22}^{(1)}+K_{22}^{(2)} & K_{23} \\ 0 & K_{32} & K_{33} \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \\ u_3 \end{bmatrix} = \begin{bmatrix} F_1 \\ F_2^{(1)}+F_2^{(2)} \\ F_3 \end{bmatrix} $

Notice how $K_{22}$ is the sum of contributions from both elements sharing node 2, and similarly for $F_2$. This highlights the "connectivity" in the global matrices.

---

## Practice Questions and Exercises

**Question 1:**
State the fundamental difference between the "strong form" and the "weak form" of a differential equation in the context of FEM. Why is the weak form preferred?

**Answer 1:**
The strong form is the original differential equation itself, requiring derivatives of the unknown function to exist and be continuous up to a certain order. The weak form is an integral formulation that relaxes these continuity requirements, only demanding that the unknown function and weighting functions be square-integrable (typically $L^2$) and that certain derivatives exist. The weak form is preferred because it allows the use of lower-order polynomial shape functions, which are easier to construct and implement in FEM. It also naturally incorporates boundary conditions of the Neumann/flux type.

**Question 2:**
Consider the 1D diffusion equation with a source term:
$ -\frac{d^2u}{dx^2} + u = x $ for $x \in (0, 1)$
Boundary Conditions: $u(0) = 0$, $\frac{du}{dx}(1) = 2$.

Derive the weak form of this equation.

**Answer 2:**
1.  **Multiply by weight $w$ and integrate:**
    $ \int_{0}^{1} (-\frac{d^2u}{dx^2} + u) w \, dx = \int_{0}^{1} x w \, dx $

2.  **Integrate by parts the second derivative term:**
    $ \int_{0}^{1} (-\frac{d^2u}{dx^2}) w \, dx = [-\frac{du}{dx} w]_{0}^{1} - \int_{0}^{1} (-\frac{du}{dx}) \frac{dw}{dx} \, dx $
    $ = [-\frac{du}{dx} w]_{0}^{1} + \int_{0}^{1} \frac{du}{dx} \frac{dw}{dx} \, dx $

3.  **Substitute back and apply boundary conditions:**
    $ [-\frac{du}{dx} w]_{0}^{1} + \int_{0}^{1} \frac{du}{dx} \frac{dw}{dx} \, dx + \int_{0}^{1} u w \, dx = \int_{0}^{1} x w \, dx $

    *   At $x=0$: $w(0) = 0$ (since $u(0)=0$ is an essential BC, the corresponding weight function must be zero there). So, $[-\frac{du}{dx} w]_{0} = 0$.
    *   At $x=1$: $\frac{du}{dx}(1) = 2$. So, $[-\frac{du}{dx} w]_{1} = -2 w(1)$.

4.  **Weak Form:**
    $ -2 w(1) + \int_{0}^{1} \frac{du}{dx} \frac{dw}{dx} \, dx + \int_{0}^{1} u w \, dx = \int_{0}^{1} x w \, dx $
    Or, rearranging:
    $ \int_{0}^{1} \frac{du}{dx} \frac{dw}{dx} \, dx + \int_{0}^{1} u w \, dx = \int_{0}^{1} x w \, dx + 2 w(1) $

**Question 3:**
A simple truss element has a stiffness $k$ and connects two nodes. If this element is part of a larger structure with 4 nodes, and this element connects node 1 to node 3, how would its stiffness matrix contribution be added to the global stiffness matrix $[K]$? Assume $k_{11}^{(e)}$, $k_{12}^{(e)}$, $k_{21}^{(e)}$, $k_{22}^{(e)}$ are the entries of the element stiffness matrix and $f_1^{(e)}$, $f_2^{(e)}$ are the entries of the element force vector.

**Answer 3:**
The element stiffness matrix is:
$ [k^{(e)}] = \begin{bmatrix} k_{11}^{(e)} & k_{12}^{(e)} \\ k_{21}^{(e)} & k_{22}^{(e)} \end{bmatrix} $
The element force vector is:
$ \{f^{(e)}\} = \begin{bmatrix} f_1^{(e)} \\ f_2^{(e)} \end{bmatrix} $

Since the element connects global node 1 (local node 1) and global node 3 (local node 2):

*   $k_{11}^{(e)}$ contributes to $K_{11}$ of the global matrix.
*   $k_{12}^{(e)}$ contributes to $K_{13}$ of the global matrix.
*   $k_{21}^{(e)}$ contributes to $K_{31}$ of the global matrix.
*   $k_{22}^{(e)}$ contributes to $K_{33}$ of the global matrix.

And the force contributions:

*   $f_1^{(e)}$ contributes to $F_1$ of the global force vector.
*   $f_2^{(e)}$ contributes to $F_3$ of the global force vector.

So, the updates to the global matrices are:
$ K_{11} \leftarrow K_{11} + k_{11}^{(e)} $
$ K_{13} \leftarrow K_{13} + k_{12}^{(e)} $
$ K_{31} \leftarrow K_{31} + k_{21}^{(e)} $
$ K_{33} \leftarrow K_{33} + k_{22}^{(e)} $
$ F_1 \leftarrow F_1 + f_1^{(e)} $
$ F_3 \leftarrow F_3 + f_2^{(e)} $

All other entries in the global stiffness matrix and force vector corresponding to this element's contribution (e.g., $K_{12}, K_{21}, K_{23}, K_{32}$ etc.) remain unchanged by this specific element, assuming they were initialized to zero.

---

## Important Points to Remember

*   **Weak formulation reduces continuity requirements**, making FEM practical.
*   The **Galerkin method is a specific weighted residual method** where shape functions are used as weighting functions.
*   The **Principle of Virtual Work** is a common method to derive weak forms for mechanics problems.
*   **Element matrices are derived by applying the weak form to a single element.**
*   **Assembly is the process of summing up element contributions** into global system matrices based on node connectivity.
*   **Essential boundary conditions (e.g., prescribed displacement) are applied by modifying the global system**, while natural boundary conditions (e.g., prescribed traction) appear naturally in the weak form's boundary integrals.
*   The formulation techniques are general and can be applied to various physics problems (elasticity, heat transfer, fluid dynamics, etc.) by adapting the governing equations and constitutive relationships.
