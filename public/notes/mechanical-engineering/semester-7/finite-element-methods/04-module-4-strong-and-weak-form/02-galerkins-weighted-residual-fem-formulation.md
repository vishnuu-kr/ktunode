---
title: "Galerkin’s weighted residual FEM formulation"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044642a3"
status: "completed"
scrapedAt: "2026-05-20T18:13:04.953Z"
---
# Finite Element Methods - Module 4: Strong and Weak Form

## Topic: Galerkin's Weighted Residual FEM Formulation

### 1. Introduction

The Finite Element Method (FEM) is a powerful numerical technique used to solve complex engineering and physics problems that are often governed by partial differential equations (PDEs). While the strong form of a PDE represents a direct statement of the problem, it is often difficult to satisfy exactly over a discrete domain. The weighted residual methods, and specifically the Galerkin formulation, provide a systematic approach to derive an approximate solution in the FEM context.

**Learning Outcome Covered:**

*   Understand the governing equations of various physical phenomena and basic procedure of FEM. (CO1, K2)
*   Study Galekin weight residual formulations (CO4, K5)

---

### 2. Recap: Strong Form and Weak Form

#### 2.1. Strong Form of a PDE

The strong form of a differential equation requires that the equation be satisfied exactly at every point within the domain. For a second-order boundary value problem (BVP), this typically involves satisfying the differential equation in the interior of the domain and continuity conditions at the boundaries.

**Example:** Consider the one-dimensional steady-state heat conduction problem with a heat source:

$$
-\frac{d}{dx}\left(k\frac{du}{dx}\right) + q = 0 \quad \text{for } 0 < x < L
$$

where:
*   $u(x)$ is the temperature distribution.
*   $k$ is the thermal conductivity.
*   $q$ is the heat source.

The **strong form** also requires boundary conditions (e.g., Dirichlet, Neumann, or Robin) to be satisfied exactly.

#### 2.2. Weak Form of a PDE

The weak form is derived from the strong form by reducing the order of differentiation and allowing the solution to be less smooth. This is achieved by multiplying the strong form by a test function (or weight function), integrating over the domain, and applying integration by parts to transfer derivatives from the solution to the test function. This process often introduces boundary terms that correspond to physical quantities (like flux).

**Benefits of Weak Form:**

*   Allows for less smooth trial and test functions, which is crucial for FEM where we use piecewise polynomial approximations.
*   Incorporates boundary conditions naturally.
*   Leads to a symmetric system of equations (often).

**Derivation of Weak Form:**

For the heat conduction equation:
$$
-\frac{d}{dx}\left(k\frac{du}{dx}\right) + q = 0
$$

Multiply by a test function $v(x)$:
$$
\int_0^L \left[-\frac{d}{dx}\left(k\frac{du}{dx}\right) + q\right] v(x) dx = 0
$$

Rearrange:
$$
\int_0^L -\frac{d}{dx}\left(k\frac{du}{dx}\right) v(x) dx + \int_0^L q v(x) dx = 0
$$

Apply integration by parts to the first term:
$$
-\left[ \left(k\frac{du}{dx}\right) v(x) \right]_0^L + \int_0^L \left(k\frac{du}{dx}\right) \frac{dv}{dx} dx + \int_0^L q v(x) dx = 0
$$

This results in the weak form:
$$
\int_0^L k\frac{du}{dx} \frac{dv}{dx} dx - \left[ \left(k\frac{du}{dx}\right) v(x) \right]_0^L + \int_0^L q v(x) dx = 0
$$

The term $\left[ \left(k\frac{du}{dx}\right) v(x) \right]_0^L$ represents the boundary terms. If a Dirichlet boundary condition $u(x) = u_0$ is imposed at $x=0$ or $x=L$, then $v(x)$ must be zero at those boundaries. If a Neumann boundary condition is imposed, e.g., $k\frac{du}{dx} = f$ at $x=L$, then this term naturally incorporates it.

**Key Concept:** The weak form requires that the integral equation be satisfied for *all* admissible test functions $v(x)$ in a suitable function space (e.g., Sobolev space $H^1$).

**Reference:** Reddy, Chapter 3; Cook, Chapter 3.

---

### 3. Weighted Residual Methods

Weighted residual methods are a class of methods for finding approximate solutions to boundary value problems. The core idea is to assume an approximate solution $\hat{u}(x)$ that does not exactly satisfy the governing differential equation. This leads to a non-zero residual $R(x)$.

$$
L(u) = f \quad \text{(Strong form)}
$$

Approximate solution: $\hat{u}(x)$
Residual: $R(x) = L(\hat{u}) - f \neq 0$

The goal of weighted residual methods is to minimize this residual in some sense by requiring that the residual is "orthogonal" to a set of chosen weighting functions (or test functions) $w_i(x)$.

$$
\int_\Omega R(x) w_i(x) dx = 0 \quad \text{for } i = 1, 2, \dots, N
$$

where $\Omega$ is the domain.

#### 3.1. Types of Weighted Residual Methods

The choice of weighting functions $w_i(x)$ defines the specific method:

*   **Subdomain Method:** The domain is divided into subdomains, and the weighting functions are piecewise constant, being unity in one subdomain and zero elsewhere.
*   **Collocation Method:** The weighting functions are Dirac delta functions, $\delta(x-x_i)$, at specific points (collocation points) within the domain. This requires the residual to be zero at these points.
*   **Galerkin Method:** The weighting functions are the same as the basis functions (or trial functions) used to approximate the solution. This is the most widely used and robust method in FEM.

**Reference:** Bhavikatti, Chapter 4; Fish & Belytschko, Chapter 2.

---

### 4. Galerkin's Weighted Residual FEM Formulation

#### 4.1. The Core Idea

In the Galerkin method, we approximate the unknown solution $u(x)$ by a linear combination of basis functions (or shape functions), $\phi_i(x)$, multiplied by unknown coefficients (nodal values), $u_i$:

$$
u(x) \approx \hat{u}(x) = \sum_{i=1}^N u_i \phi_i(x)
$$

where $N$ is the total number of nodes.

The Galerkin formulation requires that the residual, $R(x) = L(\hat{u}) - f$, be orthogonal to the same basis functions $\phi_j(x)$:

$$
\int_\Omega R(x) \phi_j(x) dx = 0 \quad \text{for } j = 1, 2, \dots, N
$$

Substituting $R(x)$:

$$
\int_\Omega (L(\hat{u}) - f) \phi_j(x) dx = 0
$$

This set of $N$ integral equations, one for each basis function $\phi_j$, allows us to solve for the $N$ unknown nodal values $u_i$.

#### 4.2. Application to the Heat Conduction Problem (1D)

Let's apply the Galerkin method to the one-dimensional heat conduction problem with the weak form derived earlier:

$$
\int_0^L k\frac{du}{dx} \frac{dv}{dx} dx - \left[ \left(k\frac{du}{dx}\right) v(x) \right]_0^L + \int_0^L q v(x) dx = 0
$$

In FEM, we discretize the domain $[0, L]$ into $M$ elements. Within each element $e$, the solution is approximated as:

$$
u(x) \approx \hat{u}^{(e)}(x) = \sum_{i=1}^{n} u_i^{(e)} \phi_i^{(e)}(x)
$$

where $n$ is the number of nodes per element (e.g., 2 for linear elements) and $u_i^{(e)}$ are the nodal values for that element. The basis functions $\phi_i^{(e)}(x)$ are typically chosen to be simple polynomials (e.g., linear, quadratic).

The Galerkin method requires that the weak form be satisfied for *all* basis functions within the element. So, we choose the test functions $v(x)$ to be the same as the basis functions $\phi_j^{(e)}(x)$:

$$
\int_{x_1}^{x_2} k\frac{d\hat{u}^{(e)}}{dx} \frac{d\phi_j^{(e)}}{dx} dx - \left[ \left(k\frac{d\hat{u}^{(e)}}{dx}\right) \phi_j^{(e)}(x) \right]_{x_1}^{x_2} + \int_{x_1}^{x_2} q \phi_j^{(e)}(x) dx = 0 \quad \text{for } j=1, \dots, n
$$

Substituting $\hat{u}^{(e)}(x) = \sum_{i=1}^{n} u_i^{(e)} \phi_i^{(e)}(x)$:

$$
\int_{x_1}^{x_2} k \left(\sum_{i=1}^{n} u_i^{(e)} \frac{d\phi_i^{(e)}}{dx}\right) \frac{d\phi_j^{(e)}}{dx} dx - \left[ \left(k \frac{d}{dx} \sum_{i=1}^{n} u_i^{(e)} \phi_i^{(e)}(x) \right) \phi_j^{(e)}(x) \right]_{x_1}^{x_2} + \int_{x_1}^{x_2} q \phi_j^{(e)}(x) dx = 0
$$

Rearranging the terms for each element $e$:

$$
\sum_{i=1}^{n} u_i^{(e)} \left( \int_{x_1}^{x_2} k \frac{d\phi_i^{(e)}}{dx} \frac{d\phi_j^{(e)}}{dx} dx \right) - \left[ \left(k \sum_{i=1}^{n} u_i^{(e)} \frac{d\phi_i^{(e)}}{dx} \right) \phi_j^{(e)}(x) \right]_{x_1}^{x_2} + \int_{x_1}^{x_2} q \phi_j^{(e)}(x) dx = 0
$$

This can be written in matrix form for an element:

$$
\mathbf{k}^{(e)} \mathbf{u}^{(e)} - \mathbf{f}_{bc}^{(e)} + \mathbf{q}^{(e)} = 0
$$

where:
*   $\mathbf{k}^{(e)}$ is the element stiffness matrix, with entries $k_{ji}^{(e)} = \int_{x_1}^{x_2} k \frac{d\phi_i^{(e)}}{dx} \frac{d\phi_j^{(e)}}{dx} dx$.
*   $\mathbf{u}^{(e)}$ is the vector of unknown nodal values for the element, $\mathbf{u}^{(e)} = [u_1^{(e)}, u_2^{(e)}, \dots, u_n^{(e)}]^T$.
*   $\mathbf{f}_{bc}^{(e)}$ is the vector representing the boundary fluxes. For example, if $k\frac{du}{dx} = f_{L}$ at $x_1$ and $k\frac{du}{dx} = f_{R}$ at $x_2$, then:
    $$
    \mathbf{f}_{bc}^{(e)} = \left[ \begin{array}{c} f_L \phi_1^{(e)}(x_1) \\ f_L \phi_2^{(e)}(x_1) \\ \vdots \\ f_R \phi_1^{(e)}(x_2) \\ f_R \phi_2^{(e)}(x_2) \\ \vdots \end{array} \right]
    $$
    (Note: The exact formulation of $\mathbf{f}_{bc}^{(e)}$ depends on how boundary conditions are applied and whether the domain includes boundaries.)
*   $\mathbf{q}^{(e)}$ is the load vector due to the source term, with entries $q_j^{(e)} = \int_{x_1}^{x_2} q \phi_j^{(e)}(x) dx$.

#### 4.3. Element Stiffness Matrix and Load Vector Calculation

Let's consider a 1D linear element of length $l = x_2 - x_1$. The linear shape functions are:
$$
\phi_1^{(e)}(x) = \frac{x_2 - x}{l}, \quad \phi_2^{(e)}(x) = \frac{x - x_1}{l}
$$
Their derivatives are:
$$
\frac{d\phi_1^{(e)}}{dx} = -\frac{1}{l}, \quad \frac{d\phi_2^{(e)}}{dx} = \frac{1}{l}
$$

The entries of the element stiffness matrix $k_{ji}^{(e)}$ are calculated:

*   $k_{11}^{(e)} = \int_{x_1}^{x_2} k \left(-\frac{1}{l}\right) \left(-\frac{1}{l}\right) dx = \int_{x_1}^{x_2} \frac{k}{l^2} dx = \frac{k}{l^2} [x]_{x_1}^{x_2} = \frac{k}{l^2} (l) = \frac{k}{l}$
*   $k_{12}^{(e)} = \int_{x_1}^{x_2} k \left(-\frac{1}{l}\right) \left(\frac{1}{l}\right) dx = \int_{x_1}^{x_2} -\frac{k}{l^2} dx = -\frac{k}{l^2} [x]_{x_1}^{x_2} = -\frac{k}{l}$
*   $k_{21}^{(e)} = \int_{x_1}^{x_2} k \left(\frac{1}{l}\right) \left(-\frac{1}{l}\right) dx = \int_{x1}^{x2} -\frac{k}{l^2} dx = -\frac{k}{l}$
*   $k_{22}^{(e)} = \int_{x_1}^{x_2} k \left(\frac{1}{l}\right) \left(\frac{1}{l}\right) dx = \int_{x_1}^{x_2} \frac{k}{l^2} dx = \frac{k}{l}$

So, the element stiffness matrix for a linear element is:
$$
\mathbf{k}^{(e)} = \frac{k}{l} \left[ \begin{array}{rr} 1 & -1 \\ -1 & 1 \end{array} \right]
$$
*(This assumes $k$ is constant over the element. If $k$ varies, the integrals need to be performed accordingly, possibly using numerical integration like Gauss quadrature.)*

The entries of the load vector $q_j^{(e)}$ are calculated:

*   $q_1^{(e)} = \int_{x_1}^{x_2} q \left(\frac{x_2 - x}{l}\right) dx$
*   $q_2^{(e)} = \int_{x_1}^{x_2} q \left(\frac{x - x_1}{l}\right) dx$

*(These integrals depend on the form of the source term $q$. For instance, if $q$ is constant, these become simple calculations related to the average value of $q$ over the element.)*

**Reference:** Reddy, Chapter 3; Cook, Chapter 4; Segerlind, Chapter 4.

#### 4.4. Assembly and Solution

The element matrices and vectors are assembled into a global system of equations based on the connectivity of the elements.

$$
\mathbf{K} \mathbf{U} = \mathbf{F}
$$

where:
*   $\mathbf{K}$ is the global stiffness matrix.
*   $\mathbf{U}$ is the global vector of unknown nodal values.
*   $\mathbf{F}$ is the global load vector (which includes contributions from source terms and boundary conditions).

Boundary conditions are then imposed on the global system to make it solvable for the unknown nodal displacements. The resulting system of linear algebraic equations is solved to obtain the nodal values, which are then used to interpolate the solution over the domain.

---

### 5. Galerkin Method for Other Problems

The Galerkin method is a general technique applicable to a wide range of problems, including:

*   **Structural Mechanics (Solid Mechanics):** Stress and strain analysis.
    *   Governing equations often involve equilibrium, strain-displacement, and stress-strain relationships.
    *   The weak form is derived using virtual work principles.
    *   The element stiffness matrix is related to material properties (e.g., Young's modulus, Poisson's ratio) and geometric properties (e.g., cross-sectional area, moment of inertia).
    *   **CO3:** Formulate shape functions and element strain displacement matrix of various element.
    *   **CO4:** Evaluate element stress using energy method and study Galekin weight residual formulations.

    *Example (1D Bar):* For a bar under axial load, the equation of equilibrium is $-\frac{d}{dx}(A E \frac{du}{dx}) + f = 0$. The weak form leads to:
    $$
    \int_0^L AE \frac{du}{dx} \frac{dv}{dx} dx - \left[ (AE \frac{du}{dx}) v \right]_0^L + \int_0^L f v dx = 0
    $$
    The element stiffness matrix $\mathbf{k}^{(e)}$ for a linear element is $\frac{AE}{l} \left[ \begin{array}{rr} 1 & -1 \\ -1 & 1 \end{array} \right]$.

*   **Fluid Mechanics:** Fluid flow and heat transfer.
*   **Electromagnetics:** Maxwell's equations.

#### 5.1. Higher-Order Elements and Isoparametric Elements

The basis functions used can be of higher order (e.g., quadratic, cubic) to achieve higher accuracy with fewer elements.

*   **Isoparametric elements** are used when the geometry of the element itself is complex or curved. In isoparametric formulation, the same shape functions used to interpolate the solution variables are also used to interpolate the geometric coordinates. This allows for the representation of curved boundaries.
    *   **CO5:** Study the concept of iso parametric elements and analyze iso parametric formulations.

    *Reference:* Fish & Belytschko, Chapter 5; Reddy, Chapter 4.

---

### 6. Important Points to Remember

*   **Weak Form is Key:** The Galerkin method works by discretizing the weak form of the governing PDE.
*   **Weighting Functions = Basis Functions:** In Galerkin, the test functions are identical to the assumed basis (shape) functions for the solution.
*   **Residual Minimization:** The method ensures that the residual is minimized in an integral sense, weighted by the basis functions.
*   **Element Matrix Formulation:** The process leads to the calculation of element stiffness matrices and load vectors through integration over each element.
*   **Assembly and Boundary Conditions:** Element contributions are assembled globally, and boundary conditions are applied to solve the system.
*   **Accuracy:** Higher-order shape functions or smaller element sizes generally lead to more accurate solutions.

---

### 7. Practice Questions and Exercises

**Question 1:**
Derive the weak form of the following one-dimensional Poisson equation:
$$
-\frac{d^2u}{dx^2} = f(x) \quad \text{for } 0 < x < L
$$
with boundary conditions $u(0) = u_0$ and $u(L) = u_L$. Use a test function $v(x)$.

**Answer 1:**
Multiply by $v(x)$ and integrate:
$$
\int_0^L \left(-\frac{d^2u}{dx^2}\right) v(x) dx = \int_0^L f(x) v(x) dx
$$
Apply integration by parts to the left side:
$$
-\left[\frac{du}{dx} v(x)\right]_0^L + \int_0^L \frac{du}{dx} \frac{dv}{dx} dx = \int_0^L f(x) v(x) dx
$$
Substitute the boundary conditions $u(0)=u_0$ and $u(L)=u_L$. Since $v(x)$ is a test function and the Dirichlet BCs are imposed on $u$, $v(0)=0$ and $v(L)=0$. Thus the boundary term is zero:
$$
\left(\frac{du}{dx}\right|_{x=L} v(L) - \left(\frac{du}{dx}\right|_{x=0} v(0)\right) = 0
$$
The weak form is:
$$
\int_0^L \frac{du}{dx} \frac{dv}{dx} dx = \int_0^L f(x) v(x) dx
$$

**Question 2:**
For a 1D linear finite element with nodes at $x_1$ and $x_2$ (length $l=x_2-x_1$), derive the element stiffness matrix $\mathbf{k}^{(e)}$ for the equation $-\frac{d}{dx}\left(k\frac{du}{dx}\right) = 0$ where $k$ is a constant.

**Answer 2:**
The weak form is $\int_{x_1}^{x_2} k\frac{du}{dx} \frac{dv}{dx} dx = 0$.
The approximate solution is $\hat{u}(x) = u_1 \phi_1(x) + u_2 \phi_2(x)$.
We use $\phi_1(x)$ and $\phi_2(x)$ as test functions.
For $j=1$, $\phi_1(x) = \frac{x_2-x}{l}$:
$$
\int_{x_1}^{x_2} k \frac{d}{dx}(u_1\phi_1 + u_2\phi_2) \frac{d\phi_1}{dx} dx = 0
$$
$$
\int_{x_1}^{x_2} k \left(u_1\frac{d\phi_1}{dx} + u_2\frac{d\phi_2}{dx}\right) \frac{d\phi_1}{dx} dx = 0
$$
$$
u_1 \int_{x_1}^{x_2} k \frac{d\phi_1}{dx} \frac{d\phi_1}{dx} dx + u_2 \int_{x_1}^{x_2} k \frac{d\phi_2}{dx} \frac{d\phi_1}{dx} dx = 0
$$
The derivatives are $\frac{d\phi_1}{dx} = -\frac{1}{l}$ and $\frac{d\phi_2}{dx} = \frac{1}{l}$.
$$
u_1 \int_{x_1}^{x_2} k \left(-\frac{1}{l}\right) \left(-\frac{1}{l}\right) dx + u_2 \int_{x_1}^{x_2} k \left(\frac{1}{l}\right) \left(-\frac{1}{l}\right) dx = 0
$$
$$
u_1 \frac{k}{l^2} l + u_2 (-\frac{k}{l^2}) l = 0 \Rightarrow u_1 \frac{k}{l} - u_2 \frac{k}{l} = 0
$$
This gives the first row of the stiffness matrix: $\left[ \frac{k}{l} \quad -\frac{k}{l} \right]$.
Similarly, for $j=2$, $\phi_2(x) = \frac{x-x_1}{l}$:
$$
u_1 \int_{x_1}^{x_2} k \frac{d\phi_1}{dx} \frac{d\phi_2}{dx} dx + u_2 \int_{x_1}^{x_2} k \frac{d\phi_2}{dx} \frac{d\phi_2}{dx} dx = 0
$$
$$
u_1 \int_{x_1}^{x_2} k \left(-\frac{1}{l}\right) \left(\frac{1}{l}\right) dx + u_2 \int_{x_1}^{x_2} k \left(\frac{1}{l}\right) \left(\frac{1}{l}\right) dx = 0
$$
$$
u_1 (-\frac{k}{l^2}) l + u_2 (\frac{k}{l^2}) l = 0 \Rightarrow -u_1 \frac{k}{l} + u_2 \frac{k}{l} = 0
$$
This gives the second row of the stiffness matrix: $\left[ -\frac{k}{l} \quad \frac{k}{l} \right]$.

The element stiffness matrix is:
$$
\mathbf{k}^{(e)} = \frac{k}{l} \left[ \begin{array}{rr} 1 & -1 \\ -1 & 1 \end{array} \right]
$$

**Question 3:**
Consider the 1D steady-state heat conduction problem on a rod of length $L=10$ with constant thermal conductivity $k=10$ W/(m.K) and a uniform heat source $q = -50$ W/m³. The boundary conditions are $u(0)=100^\circ$C and $u(10)=50^\circ$C.
If this rod is discretized into two linear finite elements of equal length (5 m each), calculate the element stiffness matrix and load vector for the first element (nodes 0 to 5). Assume $u_0$ and $u_L$ are imposed by essential boundary conditions, meaning the corresponding test function values are zero at these boundaries.

**Answer 3:**
For a linear element of length $l=5$ and $k=10$:
Element stiffness matrix (as derived in Question 2):
$$
\mathbf{k}^{(e)} = \frac{k}{l} \left[ \begin{array}{rr} 1 & -1 \\ -1 & 1 \end{array} \right] = \frac{10}{5} \left[ \begin{array}{rr} 1 & -1 \\ -1 & 1 \end{array} \right] = 2 \left[ \begin{array}{rr} 1 & -1 \\ -1 & 1 \end{array} \right] = \left[ \begin{array}{rr} 2 & -2 \\ -2 & 2 \end{array} \right]
$$
Load vector due to source term $q=-50$:
$q_1^{(e)} = \int_{x_1}^{x_2} q \phi_1^{(e)}(x) dx = \int_0^5 (-50) \left(\frac{5-x}{5}\right) dx$
$q_1^{(e)} = -10 \int_0^5 (5-x) dx = -10 \left[ 5x - \frac{x^2}{2} \right]_0^5 = -10 \left( 25 - \frac{25}{2} \right) = -10 \left(\frac{25}{2}\right) = -125$

$q_2^{(e)} = \int_{x_1}^{x_2} q \phi_2^{(e)}(x) dx = \int_0^5 (-50) \left(\frac{x}{5}\right) dx$
$q_2^{(e)} = -10 \int_0^5 x dx = -10 \left[ \frac{x^2}{2} \right]_0^5 = -10 \left(\frac{25}{2}\right) = -125$

Load vector for the element: $\mathbf{q}^{(e)} = \left[ \begin{array}{r} -125 \\ -125 \end{array} \right]$.

The element equation is $\mathbf{k}^{(e)} \mathbf{u}^{(e)} + \mathbf{q}^{(e)} = \mathbf{0}$ (assuming no boundary fluxes):
$$
\left[ \begin{array}{rr} 2 & -2 \\ -2 & 2 \end{array} \right] \left[ \begin{array}{c} u_0 \\ u_5 \end{array} \right] + \left[ \begin{array}{r} -125 \\ -125 \end{array} \right] = \left[ \begin{array}{c} 0 \\ 0 \end{array} \right]
$$
This forms part of the global system.

---

### 8. Alignment with Course Outcomes

*   **CO1 (K2):** Understanding the governing equations (PDEs) for physical phenomena like heat transfer and the basic procedure of FEM (discretization, approximation, forming equations) is fundamental to this topic.
*   **CO4 (K5):** This entire topic directly addresses the study of Galerkin weight residual formulations. The process of deriving element matrices and understanding how the weak form is used to achieve this directly supports the knowledge level K5. While stress evaluation using energy methods is mentioned, the core of this module is the formulation process via weighted residuals.
*   **CO3 (K4) & CO5 (K4):** While not explicitly the focus of the Galerkin formulation itself, understanding Galerkin's method provides the foundation for calculating strain-displacement matrices (CO3) and for developing isoparametric formulations (CO5) as it establishes the framework for assembling element equations from approximations using shape functions. The same mathematical operations of integration and matrix manipulation are involved.

---
This concludes the study notes for Galerkin's Weighted Residual FEM Formulation. Remember that the strength of FEM lies in its ability to handle complex geometries and boundary conditions by breaking down the problem into smaller, manageable elements and solving a system of algebraic equations derived from the weak form.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
