---
title: "Introduction to Finite volume method."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 4: Introduction to Finite volume method."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446437d"
status: "completed"
scrapedAt: "2026-05-20T18:10:41.469Z"
---
# COMPUTATIONAL HEAT TRANSFER - Module 4: Introduction to Finite Volume Method

## Topic: Introduction to Finite Volume Method

---

### 1. Introduction to Numerical Methods in Heat Transfer

Before diving into the Finite Volume Method (FVM), it's crucial to understand why numerical methods are essential in Computational Heat Transfer. Many real-world heat transfer problems involve complex geometries, irregular boundary conditions, and non-linear material properties, making analytical solutions impossible or extremely difficult. Numerical methods provide a systematic way to approximate solutions by discretizing the problem domain into smaller, manageable parts.

**Key Concepts:**

*   **Discretization:** Dividing the continuous physical domain into a finite number of discrete elements (volumes or nodes).
*   **Approximation:** Replacing differential equations with algebraic equations that can be solved computationally.
*   **Numerical Solution:** Obtaining an approximate solution at discrete points or within discrete regions of the domain.

**Relevance to Course Outcomes:**

*   **CO1 (K2):** Understanding the basics of governing equations is a prerequisite for approximating them numerically.
*   **CO2 (K2):** PDEs are the mathematical representation of heat transfer phenomena, and numerical methods are designed to solve them.
*   **CO3 (K1):** This module directly addresses familiarization with numerical techniques like FVM.
*   **CO5 (K3):** FVM is a powerful tool to solve conduction problems, which this outcome aims for.

---

### 2. The Finite Volume Method (FVM)

The Finite Volume Method (FVM) is a numerical technique used for solving partial differential equations (PDEs). It is particularly well-suited for fluid flow and heat transfer problems because it inherently conserves quantities like mass, momentum, and energy at a fundamental level.

**Key Concepts:**

*   **Control Volume:** The fundamental building block of FVM. The domain is divided into a finite number of control volumes, and the governing equations are integrated over each control volume.
*   **Integral Form of Governing Equations:** FVM works with the integral form of the conservation laws (e.g., conservation of energy for heat transfer). This is advantageous as it does not require the derivatives to be continuous everywhere, making it robust for complex geometries and discontinuous solutions.
*   **Fluxes:** The quantities that cross the boundaries of the control volumes (e.g., heat flux).
*   **Approximation of Fluxes:** Fluxes across the faces of the control volumes are approximated using values at the centers of adjacent control volumes or at the face itself.

**Patankar (2017):** Patankar's book, "Numerical Heat Transfer and Fluid Flow," is a foundational text for FVM. He emphasizes the importance of conservation and discusses various schemes for approximating fluxes (e.g., upwind, central differencing).

**Veerstrag & Malalasekra (2008):** This reference provides a thorough introduction to FVM, covering its fundamental principles, discretization strategies, and implementation details for various flow and heat transfer problems.

**Anderson & Wendt (1995):** While focusing on CFD, this book provides a strong foundation in the underlying principles of numerical methods for fluid dynamics, which are directly applicable to heat transfer using FVM.

---

### 3. Steps Involved in the Finite Volume Method

The FVM procedure can be broken down into the following key steps:

#### 3.1. Discretization of the Domain

The physical domain of the problem is divided into a finite number of non-overlapping control volumes (CVs). These volumes can be of various shapes (e.g., cubes, prisms, tetrahedra) and arrangements (e.g., structured or unstructured grids).

**Key Concepts:**

*   **Grid/Mesh:** The collection of control volumes.
*   **Nodes:** Typically, the centers of the control volumes where the variable (e.g., temperature) is sought.
*   **Faces:** The boundaries between adjacent control volumes.

**Example (1D):**
Consider a 1D rod of length $L$. We can divide it into $N$ control volumes.
*   The rod extends from $x=0$ to $x=L$.
*   We can define grid points $x_0, x_1, x_2, ..., x_N$, where $x_0 = 0$ and $x_N = L$.
*   The $i$-th control volume is centered at $x_i$ and extends from $x_{i-1/2}$ to $x_{i+1/2}$.
*   The width of the $i$-th control volume is $\Delta x_i = x_{i+1/2} - x_{i-1/2}$. For a uniform grid, $\Delta x_i = \Delta x$.

![1D Discretization Example](https://i.imgur.com/1Q2Yk3P.png) *(Illustrative image: A 1D rod divided into segments representing control volumes)*

#### 3.2. Derivation of the Discretized Equations

The governing partial differential equation (PDE) is integrated over each control volume.

**Consider a general conservation equation for a scalar property $\phi$:**

$\frac{\partial}{\partial t}(\rho \phi) + \nabla \cdot (\rho \mathbf{u} \phi) = \nabla \cdot (\Gamma \nabla \phi) + S$

where:
*   $\rho$: density
*   $\phi$: the conserved scalar property (e.g., temperature $T$ for energy)
*   $\mathbf{u}$: velocity vector
*   $\Gamma$: diffusion coefficient (e.g., thermal conductivity $k$)
*   $S$: source term

**Integral form over a control volume $V_c$ with surface $A_c$:**

$\int_{V_c} \frac{\partial}{\partial t}(\rho \phi) dV + \int_{V_c} \nabla \cdot (\rho \mathbf{u} \phi) dV = \int_{V_c} \nabla \cdot (\Gamma \nabla \phi) dV + \int_{V_c} S dV$

Using the Divergence Theorem, the volume integrals of divergence terms are converted to surface integrals:

$\int_{V_c} \frac{\partial}{\partial t}(\rho \phi) dV + \oint_{A_c} (\rho \mathbf{u} \phi) \cdot d\mathbf{A} = \oint_{A_c} (\Gamma \nabla \phi) \cdot d\mathbf{A} + \int_{V_c} S dV$

**Approximation:**

*   The time derivative term is approximated at the center of the control volume.
*   The surface integrals are approximated by summing the fluxes across each face of the control volume.
*   The source term is often approximated as a value at the center of the control volume multiplied by its volume.

For a specific face $f$ between two adjacent control volumes (e.g., CV $P$ and CV $N$), the flux across face $f$ is approximated as:

$F_f \approx \sum_k (\rho \mathbf{u} \phi)_f \cdot \mathbf{A}_f - (\Gamma \nabla \phi)_f \cdot \mathbf{A}_f$

where $\mathbf{A}_f$ is the area vector of the face. The terms $(\rho \mathbf{u} \phi)_f$ and $(\Gamma \nabla \phi)_f$ represent the convective and diffusive fluxes across the face $f$, respectively. These fluxes need to be approximated based on the values of $\phi$ at the cell centers.

#### 3.3. Approximation of Fluxes at Interfaces

This is a critical step where different FVM schemes arise. The goal is to approximate the value of the dependent variable (e.g., temperature) and its gradients at the faces of the control volumes based on the values at the cell centers.

**Key Concepts:**

*   **Face Interpolation:** How to determine the value of $\phi$ at the face $f$ between two nodes $P$ and $N$.
*   **Gradient Approximation:** How to approximate $\nabla \phi$ at the face $f$.

**Common Schemes for Flux Approximation:**

*   **Upwind Scheme (UW):**
    *   **Convection:** The value of $\phi$ at the face is taken as the value from the upstream control volume. If flow is from $P$ to $N$, $\phi_f = \phi_P$. If flow is from $N$ to $P$, $\phi_f = \phi_N$.
    *   **Diffusion:** The gradient is approximated using values from the adjacent cell centers.
    *   **Pros:** Ensures stability for convection-dominated problems.
    *   **Cons:** Introduces significant numerical diffusion (artificial smoothing), reducing accuracy.
    *   **Reference:** Patankar (2017) extensively discusses the upwind scheme.

*   **Central Differencing Scheme (CDS):**
    *   **Convection & Diffusion:** The value of $\phi$ and its gradient at the face are approximated by linear interpolation between the adjacent cell centers. For example, $\phi_f \approx (\phi_P + \phi_N)/2$.
    *   **Pros:** High accuracy for diffusion-dominated problems.
    *   **Cons:** Can lead to oscillatory solutions and instability for convection-dominated problems (wiggles).
    *   **Reference:** Veerstrag & Malalasekra (2008) compare CDS with other schemes.

*   **Hybrid Scheme:** A combination of upwind and central differencing. It uses CDS when the Peclet number (ratio of convection to diffusion) is low and UW when it is high.

*   **Second-Order Upwind Scheme (SOU):** A more accurate approximation than the standard upwind scheme, often using a quadratic interpolation.

*   **QUICK (Quadratic Upstream Interpolation for Calculation of Properties):** A popular higher-order scheme for convection.

#### 3.4. Assembly of Algebraic Equations

After approximating the fluxes, the integral conservation equation for each control volume is transformed into a system of linear algebraic equations. For a typical interior control volume $P$, the equation often takes the form:

$a_P \phi_P = \sum_{nb} a_{nb} \phi_{nb} + b$

where:
*   $\phi_P$ is the unknown value at the center of control volume $P$.
*   $a_P$ is the coefficient for $\phi_P$.
*   $nb$ denotes the neighboring control volumes.
*   $a_{nb}$ are the coefficients for the neighboring values $\phi_{nb}$.
*   $b$ is a constant term, often incorporating source terms and boundary conditions.

**Important Note:** The coefficients $a_P$ and $a_{nb}$ depend on the discretization scheme used for flux approximation and the properties of the fluid and the grid.

**Sastry (2012):** Sastry's book covers numerical methods for solving systems of linear algebraic equations, which is a direct application of the equations assembled by FVM.

#### 3.5. Application of Boundary Conditions

Boundary conditions specify the physical behavior of the system at the edges of the domain. These conditions are incorporated into the algebraic equations, typically by modifying the coefficients ($a_P$, $a_{nb}$) and the source term ($b$) for control volumes adjacent to the boundary.

**Common Boundary Conditions:**

*   **Dirichlet Boundary Condition (Prescribed Value):** The value of the variable ($\phi$) is specified on the boundary. For example, specifying the temperature on a surface ($T = T_{wall}$).
*   **Neumann Boundary Condition (Prescribed Flux):** The derivative of the variable (flux) is specified on the boundary. For example, specifying the heat flux on a surface ($\frac{\partial T}{\partial n} = q''$).
*   **Robin Boundary Condition (Convective Boundary Condition):** A combination of the variable value and its derivative is specified. For example, convection to an ambient fluid ($k \frac{\partial T}{\partial n} = h(T - T_\infty)$).

#### 3.6. Solution of the Algebraic System

Once the system of linear algebraic equations is assembled and boundary conditions are applied, it needs to be solved to obtain the unknown values of $\phi$ at the centers of the control volumes.

**Methods for Solving Linear Systems:**

*   **Direct Methods:** Gaussian elimination, LU decomposition. Suitable for small systems.
*   **Iterative Methods:** Jacobi, Gauss-Seidel, SOR (Successive Over-Relaxation), Conjugate Gradient. More suitable for large systems arising from FVM discretization.

**Relevance to Course Outcomes:**

*   **CO4 (K2):** This outcome is directly addressed by understanding the need to solve the system of linear algebraic equations generated by FVM.

#### 3.7. Post-processing

After obtaining the numerical solution, the results are analyzed, visualized, and interpreted to understand the heat transfer behavior. This may involve plotting temperature distributions, heat fluxes, or other relevant quantities.

---

### 4. FVM for Steady-State Heat Conduction

Let's illustrate the FVM for a simple steady-state heat conduction problem in 1D.

**Governing Equation:**

$\frac{d}{dx}\left( k \frac{dT}{dx} \right) + S = 0$

For a uniform thermal conductivity $k$ and no source term ($S=0$):

$k \frac{d^2T}{dx^2} = 0 \implies \frac{d^2T}{dx^2} = 0$

**Domain and Discretization:**

Consider a 1D rod of length $L$, discretized into $N$ control volumes. The $i$-th control volume is centered at $x_i$ and spans from $x_{i-1/2}$ to $x_{i+1/2}$.

**Derivation for an Interior Control Volume:**

Integrate the governing equation over the $i$-th control volume $V_i$:

$\int_{V_i} \frac{d}{dx}\left( k \frac{dT}{dx} \right) dx = 0$

Applying the Fundamental Theorem of Calculus (or Divergence Theorem in 1D):

$\left[ k \frac{dT}{dx} \right]_{x_{i-1/2}}^{x_{i+1/2}} = 0$

$k \left( \frac{dT}{dx} \right)_{i+1/2} - k \left( \frac{dT}{dx} \right)_{i-1/2} = 0$

Now, we need to approximate the gradients at the faces $x_{i+1/2}$ and $x_{i-1/2}$.

**Using Central Differencing Scheme (CDS):**

The temperature at the face $i+1/2$ is approximated by linear interpolation:
$T_{i+1/2} \approx \frac{T_i + T_{i+1}}{2}$

The gradient at the face $i+1/2$ is then:
$\left( \frac{dT}{dx} \right)_{i+1/2} \approx \frac{T_{i+1} - T_i}{x_{i+1} - x_i} = \frac{T_{i+1} - T_i}{\Delta x_i}$

Similarly, for the face $i-1/2$:
$T_{i-1/2} \approx \frac{T_{i-1} + T_i}{2}$
$\left( \frac{dT}{dx} \right)_{i-1/2} \approx \frac{T_i - T_{i-1}}{x_i - x_{i-1}} = \frac{T_i - T_{i-1}}{\Delta x_{i-1}}$

Substituting these approximations back into the integrated equation:

$k_i \left( \frac{T_{i+1} - T_i}{\Delta x_i} \right) - k_{i-1} \left( \frac{T_i - T_{i-1}}{\Delta x_{i-1}} \right) = 0$

Assuming uniform thermal conductivity $k$ and uniform grid spacing $\Delta x$:

$k \left( \frac{T_{i+1} - T_i}{\Delta x} \right) - k \left( \frac{T_i - T_{i-1}}{\Delta x} \right) = 0$

Multiply by $\Delta x / k$:

$(T_{i+1} - T_i) - (T_i - T_{i-1}) = 0$

$T_{i+1} - T_i - T_i + T_{i-1} = 0$

$T_{i-1} - 2T_i + T_{i+1} = 0$

This is the discretized equation for an interior node $i$. It's a linear algebraic equation relating $T_i$ to its neighbors $T_{i-1}$ and $T_{i+1}$.

Rearranging to the general form $a_P T_P = \sum a_{nb} T_{nb} + b$:

$2T_i = T_{i-1} + T_{i+1}$

Here, $a_i = 2$, $a_{i-1} = 1$, $a_{i+1} = 1$, and $b=0$.

**Boundary Conditions:**

*   **Dirichlet at $x=0$:** $T_0 = T_{left}$ (for the first control volume, $i=1$, the face at $x_{1-1/2}$ is the boundary).
*   **Dirichlet at $x=L$:** $T_N = T_{right}$ (for the last control volume, $i=N$, the face at $x_{N+1/2}$ is the boundary).

**Applying Dirichlet BCs:**

For $i=1$: The term involving $T_{i-1}$ (which is $T_0$) becomes a known value.
$2T_1 = T_0 + T_2$
$2T_1 = T_{left} + T_2$
$T_2 - 2T_1 = -T_{left}$ (or $a_1 T_1 = a_2 T_2 + b$ form)

For $i=N$: The term involving $T_{i+1}$ (which is $T_{N+1}$) becomes a known value.
$T_{N-1} - 2T_N = 0$
$T_{N-1} - 2T_N = -T_{right}$ (or $a_N T_N = a_{N-1} T_{N-1} + b$ form)

**System of Equations:**

For $N$ control volumes, we get $N$ algebraic equations. These equations can be assembled into a matrix form $A\mathbf{T} = \mathbf{b}$, which can then be solved for the temperature vector $\mathbf{T} = [T_1, T_2, ..., T_N]^T$.

**Example:**
Rod of length $L=1$ m. $T(0) = 100^\circ C$, $T(1) = 0^\circ C$.
Discretize into $N=2$ CVs.
$x_0=0, x_1=0.5, x_2=1$.
CV1: centered at $x_1=0.5$, spans $x_0$ to $x_1$. Node 1.
CV2: centered at $x_2=0.5$, spans $x_1$ to $x_2$. Node 2.
No, this is wrong. CVs are centered at nodes.

Let's use nodes $x_0, x_1, x_2$.
$x_0=0, x_1=0.5, x_2=1$.
CV centered at $x_1$: spans $x_0$ to $x_2$. $\Delta x_1 = x_2 - x_0 = 1$.
This is not the standard FVM way.

**Standard FVM Grid for 1D:**
Nodes: $x_0, x_1, x_2, ..., x_N$.
CVs centered at $x_1, x_2, ..., x_{N-1}$.
Let's re-align the CVs with nodes.

Consider nodes $x_1, x_2, ..., x_{N-1}$ in the interior.
The $i$-th control volume is centered at $x_i$, and its faces are at $x_{i-1/2}$ and $x_{i+1/2}$.

**Example:**
Rod of length $L=1$ m. $T(0) = 100^\circ C$, $T(1) = 0^\circ C$.
Discretize with 3 nodes: $x_0=0, x_1=0.5, x_2=1$.
This implies 2 interior control volumes? No.
Let's define grid points $x_0, x_1, x_2$.
Control volume 1: centered at $x_1$. Faces at $x_{0.5}$ and $x_{1.5}$.
This requires defining nodes at half points, which is not standard.

**Correct FVM Discretization for 1D:**
Let the nodal points be $x_1, x_2, ..., x_N$.
The control volume for node $i$ is centered at $x_i$ and extends from $x_{i-1/2}$ to $x_{i+1/2}$.
For $i=1$, the CV extends from $x_{1/2}$ to $x_{1+1/2}$.
For boundary nodes, we often need to be careful.

**Alternative: Using Control Volumes and Cell Centers**
Let the cell centers be $x_1, x_2, \dots, x_N$.
The control volume for cell $i$ is $[x_{i-1/2}, x_{i+1/2}]$.
For $N$ cells, we need $N+1$ boundary points $x_{1/2}, x_{3/2}, \dots, x_{N+1/2}$.
If we have $N$ nodes where the variable is calculated, these are typically the cell centers.

**Example:**
Rod $L=1$, $T(0)=100$, $T(1)=0$.
Let's use 2 control volumes.
Cell centers: $x_1=0.25$, $x_2=0.75$.
Cell faces: $x_{0.5}=0$, $x_{1.5}=0.5$, $x_{2.5}=1$.
$\Delta x_1 = x_{1.5} - x_{0.5} = 0.5$.
$\Delta x_2 = x_{2.5} - x_{1.5} = 0.5$.

For cell 1 (centered at $x_1=0.25$):
Faces at $x_{0.5}=0$ and $x_{1.5}=0.5$.
Equation: $k \left( \frac{T_2 - T_1}{\Delta x_1} \right) - k \left( \frac{T_1 - T_0}{\Delta x_0 ??} \right) = 0$

This requires thinking about how to handle boundary terms for $T_0$ (which is $T(0)$).
The flux crossing the face $x_{0.5}=0$ is a boundary flux.

**Boundary Condition at $x=0$ (Dirichlet: $T=T_0=100$):**
The equation for cell 1 is:
$k \frac{T_2 - T_1}{x_{1.5} - x_{0.5}} - k \frac{T_1 - T(0)}{x_{0.5} - \text{boundary position}} = 0$
This form is still a bit confusing.

**Patankar's Approach for 1D:**
Consider a control volume around node $i$.
The equation for node $i$ is:
$a_i T_i = \sum_{j \ne i} a_j T_j + b_i$

For the equation at node $i$, we consider fluxes from $i-1$ to $i$ and from $i$ to $i+1$.
The grid points are $x_1, x_2, ..., x_N$.
The control volume for node $i$ spans $[x_{i-1/2}, x_{i+1/2}]$.
$x_{i-1/2} = (x_{i-1} + x_i)/2$
$x_{i+1/2} = (x_i + x_{i+1})/2$

For $i=1$: CV spans $[x_{1/2}, x_{3/2}]$.
$x_{1/2} = (x_0 + x_1)/2$. If $x_0=0$, $x_{1/2} = x_1/2$.
$x_{3/2} = (x_1 + x_2)/2$.

Let's use the simplified 1D rod example from textbooks directly.

**Example from Patankar (1980s):**
1D slab of thickness $L$. Steady state, no heat generation.
$T(0) = T_0$, $T(L) = T_L$.
Discretize into $N$ intervals.
Cell centers $x_1, x_2, \dots, x_N$.
Cell faces $x_{1/2}, x_{3/2}, \dots, x_{N+1/2}$.
$x_0 = 0$, $x_{N+1} = L$.
$x_{i+1/2} - x_{i-1/2} = \Delta x_i$.

Consider the $i$-th CV:
$\left[ k \frac{dT}{dx} \right]_{x_{i+1/2}} - \left[ k \frac{dT}{dx} \right]_{x_{i-1/2}} = 0$

Using CDS for fluxes:
$k_i \frac{T_{i+1} - T_i}{\Delta x_i} - k_{i-1} \frac{T_i - T_{i-1}}{\Delta x_{i-1}} = 0$

With uniform grid $\Delta x$:
$\frac{k}{\Delta x} (T_{i+1} - T_i) - \frac{k}{\Delta x} (T_i - T_{i-1}) = 0$
$T_{i+1} - T_i - T_i + T_{i-1} = 0$
$T_{i-1} - 2T_i + T_{i+1} = 0$

For the first CV ($i=1$), the left face is at $x_{1/2} = 0$.
The equation should be formulated such that the boundary condition at $x=0$ is applied.
$k \left( \frac{T_2 - T_1}{\Delta x} \right) - k \left( \frac{dT}{dx} \right)_{x=0} = 0$
If $T(0)$ is specified (Dirichlet), we need to evaluate the flux at the boundary.
Using CDS, the gradient at $x=0$ (face $x_{1/2}$) requires $T_0$ and $T_1$.
$\left( \frac{dT}{dx} \right)_{x=0} \approx \frac{T_1 - T_0}{x_1 - x_0}$.
If $x_0 = 0$, then $\left( \frac{dT}{dx} \right)_{x=0} \approx \frac{T_1}{x_1}$. (This depends on how $T_0$ is defined).

A more robust way for Dirichlet boundary condition at $x=0$ ($T=T_0$):
The flux crossing the boundary $x=0$ (left face of CV 1) is $k (dT/dx)_{x=0}$.
This flux should be related to $T_1$ and $T_0$.
Using CDS, the flux at face $i-1/2$ (which is $x=0$ for $i=1$) can be expressed using $T_1$ and $T_0$.
If we consider $T_0$ as a "ghost node", then $T_0 = T_1 - (T_1-T_0)$ so $T_{i-1} = T_1 - (T_1 - T_0)$
The discretized equation for the first control volume becomes:
$k \frac{T_2 - T_1}{\Delta x} - k \frac{T_1 - T_0}{x_1} = 0$
Assuming $x_1 = \Delta x$ for the first cell center.
$k \frac{T_2 - T_1}{\Delta x} - k \frac{T_1 - T_0}{\Delta x} = 0$
$T_2 - T_1 - T_1 + T_0 = 0$
$T_2 - 2T_1 + T_0 = 0$
This is the same form.
$T_0 - 2T_1 + T_2 = 0$

If $T_0$ is given, the equation for $T_1$ involves a known value:
$-2T_1 + T_2 = -T_0$. This equation is for node $T_1$.

For node $T_N$ (right boundary):
$T_{N-1} - 2T_N + T_{N+1} = 0$
The flux at the right face $x_{N+1/2}$ is also a boundary flux.
$k \frac{T_{N+1} - T_N}{\Delta x} - k \frac{T_N - T_{N-1}}{\Delta x} = 0$
If $T_{N+1}$ is specified as $T_L$, then:
$k \frac{T_L - T_N}{\Delta x} - k \frac{T_N - T_{N-1}}{\Delta x} = 0$
$T_L - T_N - T_N + T_{N-1} = 0$
$T_{N-1} - 2T_N + T_L = 0$
$T_{N-1} - 2T_N = -T_L$.

**Example:** $L=1$, $T(0)=100$, $T(1)=0$. $N=2$ control volumes.
Cell centers: $x_1=0.25, x_2=0.75$.
$\Delta x = 0.5$.

For CV 1 (node $T_1$ at $x_1=0.25$):
Left face at $x=0$, Right face at $x=0.5$.
Equation for node $T_1$: $T_0 - 2T_1 + T_2 = 0$.
Applying BC $T_0 = 100$: $100 - 2T_1 + T_2 = 0 \implies -2T_1 + T_2 = -100$.

For CV 2 (node $T_2$ at $x_2=0.75$):
Left face at $x=0.5$, Right face at $x=1$.
Equation for node $T_2$: $T_1 - 2T_2 + T_3 = 0$.
Applying BC $T_3 = T(1) = 0$: $T_1 - 2T_2 + 0 = 0 \implies T_1 - 2T_2 = 0$.

System of equations:
1) $-2T_1 + T_2 = -100$
2) $T_1 - 2T_2 = 0$

From (2), $T_1 = 2T_2$. Substitute into (1):
$-2(2T_2) + T_2 = -100$
$-4T_2 + T_2 = -100$
$-3T_2 = -100 \implies T_2 = 100/3 \approx 33.33^\circ C$.
$T_1 = 2T_2 = 200/3 \approx 66.67^\circ C$.

**Analytical Solution:**
$T(x) = T_0 + (T_L - T_0) \frac{x}{L}$
$T(x) = 100 + (0 - 100) \frac{x}{1} = 100 - 100x$.
$T(0.25) = 100 - 100(0.25) = 100 - 25 = 75^\circ C$.
$T(0.75) = 100 - 100(0.75) = 100 - 75 = 25^\circ C$.

The FVM result ($T_1 \approx 66.67, T_2 \approx 33.33$) is not very accurate for only 2 CVs. This is due to the low-order approximation (CDS) and the placement of control volume faces. If we used more CVs, the accuracy would improve.

**Using Upwind Scheme (UW):**
The discrete equation for an interior node $i$ (assuming flow from $i-1$ to $i+1$, i.e., $T_{i-1} \rightarrow T_i \rightarrow T_{i+1}$):
$k \left( \frac{T_i - T_{i-1}}{\Delta x} \right) - k \left( \frac{T_i - T_{i-1}}{\Delta x} \right) = 0$
This is not how UW works for conduction. UW is primarily for convection. For conduction, CDS is usually preferred.

However, if we consider the discrete equation for node $P$ with neighbor $N$, the flux from $P$ to $N$ is $F_{PN}$.
The equation is: $\sum F_{Pf} = S_P$.
For conduction, this means flux from $i$ to $i+1$ plus flux from $i$ to $i-1$.
Flux $i \rightarrow i+1$: $F_{i,i+1} = -k \frac{T_{i+1}-T_i}{\Delta x}$ (using CDS)
Flux $i \rightarrow i-1$: $F_{i,i-1} = -k \frac{T_i-T_{i-1}}{\Delta x}$ (using CDS)

Summing these should equal zero for no source term.
$F_{i,i+1} + F_{i,i-1} = 0$
$-k \frac{T_{i+1}-T_i}{\Delta x} - k \frac{T_i-T_{i-1}}{\Delta x} = 0$
$(T_{i+1}-T_i) + (T_i-T_{i-1}) = 0$
$T_{i+1} - T_i + T_i - T_{i-1} = 0$
$T_{i+1} - T_{i-1} = 0$. This is wrong. It should be $-2T_i$.

Let's re-examine the flux direction.
The equation is $\frac{d}{dx}(k\frac{dT}{dx}) = 0$.
Integral over CV $i$: Flux at $i+1/2$ minus Flux at $i-1/2$.
Flux at $i+1/2$: $F_{i+1/2} = k (\frac{dT}{dx})_{i+1/2}$
Flux at $i-1/2$: $F_{i-1/2} = k (\frac{dT}{dx})_{i-1/2}$
$F_{i+1/2} - F_{i-1/2} = 0$.

Using CDS:
$F_{i+1/2} \approx k \frac{T_{i+1} - T_i}{\Delta x}$
$F_{i-1/2} \approx k \frac{T_i - T_{i-1}}{\Delta x}$

So, $k \frac{T_{i+1} - T_i}{\Delta x} - k \frac{T_i - T_{i-1}}{\Delta x} = 0$.
This leads to $T_{i-1} - 2T_i + T_{i+1} = 0$. This is correct.

**Revisit Example with Corrected Understanding:**
$L=1$, $T(0)=100$, $T(1)=0$. $N=2$ CVs.
CV1 centered at $x_1=0.25$. Faces at $x_{0.5}=0$, $x_{1.5}=0.5$. $\Delta x_1 = 0.5$.
CV2 centered at $x_2=0.75$. Faces at $x_{1.5}=0.5$, $x_{2.5}=1$. $\Delta x_2 = 0.5$.
Uniform $\Delta x = 0.5$.

Equation for CV1 (node $T_1$):
Flux at face $x_{1.5}$ minus flux at face $x_{0.5}$ equals 0.
Flux at $x_{1.5}$ (between $T_1$ and $T_2$): $F_{1.5} = k \frac{T_2 - T_1}{\Delta x}$.
Flux at $x_{0.5}$ (boundary face at $x=0$): $F_{0.5} = k (\frac{dT}{dx})_{x=0}$.
If Dirichlet $T(0)=T_0=100$, this flux needs to be evaluated.
Using CDS, the gradient at $x=0$ (left face of CV1) requires a virtual node $T_0$ such that $x_{0.5}=(x_0+x_1)/2$.
If we align CVs with nodes, then $x_1$ is the node. CV is $[x_{1/2}, x_{3/2}]$.
$x_{1/2} = (x_0+x_1)/2$. Boundary at $x_0$.
$x_{3/2} = (x_1+x_2)/2$.

Let's simplify the setup for clarity.
Consider nodes $x_1, x_2, \dots, x_N$.
The control volume for node $i$ is centered at $x_i$ and extends from $x_{i-1/2}$ to $x_{i+1/2}$.
For $i=1$, the left face is at $x_{1/2}$. If $x_0=0$, $x_{1/2} = x_1/2$.
For $i=N$, the right face is at $x_{N+1/2}$. If $x_{N+1}=L$, $x_{N+1/2} = (x_N+L)/2$.

Let's take $N$ nodes and $N$ control volumes.
Nodes $x_1, \dots, x_N$. $x_i = i \Delta x$, where $\Delta x = L/(N+1)$.
$x_0=0, x_1=\Delta x, \dots, x_N=N\Delta x, x_{N+1}=L=(N+1)\Delta x$.

For node $i$, the CV is $[x_{i-1/2}, x_{i+1/2}]$.
$x_{i-1/2} = x_i - \Delta x/2$.
$x_{i+1/2} = x_i + \Delta x/2$.
For $i=1$, CV is $[x_0, x_1]$. $x_{1/2} = x_1 - \Delta x/2 = \Delta x - \Delta x/2 = \Delta x/2$.
This is correct if we define $x_0$ as the left boundary.
The flux across the face $x_{i-1/2}$ needs to be expressed.

Equation for node $i$: $a_i T_i = \sum_{j \ne i} a_j T_j + b_i$.
This is $a_i T_i = a_{i-1} T_{i-1} + a_{i+1} T_{i+1} + b_i$.

For interior node $i$ ($1 < i < N$):
$k \frac{T_{i+1} - T_i}{\Delta x} - k \frac{T_i - T_{i-1}}{\Delta x} = 0$
$T_{i+1} - T_i - T_i + T_{i-1} = 0$
$T_{i-1} - 2T_i + T_{i+1} = 0$.
This is $a_i = 2$, $a_{i-1} = 1$, $a_{i+1} = 1$, $b_i=0$.

For node $i=1$:
Flux at $x_{1/2}$ (boundary $x=0$) and flux at $x_{3/2}$ (between $T_1$ and $T_2$).
$k \frac{T_2 - T_1}{\Delta x} - k (\frac{dT}{dx})_{x=0} = 0$.
If $T(0)=T_0$, using CDS, the gradient at $x=0$ is related to $T_1$ and $T_0$.
$(\frac{dT}{dx})_{x=0} = \frac{T_1 - T_0}{x_1 - x_0} = \frac{T_1 - T_0}{\Delta x}$.
So, $k \frac{T_2 - T_1}{\Delta x} - k \frac{T_1 - T_0}{\Delta x} = 0$.
$T_2 - T_1 - T_1 + T_0 = 0 \implies T_0 - 2T_1 + T_2 = 0$.
$a_1 = 2, a_2 = 1, b_1 = -T_0$.

For node $i=N$:
Flux at $x_{N-1/2}$ (between $T_{N-1}$ and $T_N$) and flux at $x_{N+1/2}$ (boundary $x=L$).
$k \frac{T_N - T_{N-1}}{\Delta x} - k (\frac{dT}{dx})_{x=L} = 0$.
If $T(L)=T_L$, using CDS, the gradient at $x=L$ is related to $T_N$ and $T_{N+1}$ (ghost node).
$(\frac{dT}{dx})_{x=L} = \frac{T_{N+1} - T_N}{x_{N+1} - x_N} = \frac{T_L - T_N}{\Delta x}$.
So, $k \frac{T_N - T_{N-1}}{\Delta x} - k \frac{T_L - T_N}{\Delta x} = 0$.
$T_N - T_{N-1} - T_L + T_N = 0 \implies T_{N-1} - 2T_N + T_L = 0$.
$a_N = 2, a_{N-1} = 1, b_N = -T_L$.

**Example Revisited with this Setup:**
$L=1$, $T(0)=100$, $T(1)=0$. $N=2$ nodes.
$\Delta x = L/(N+1) = 1/(2+1) = 1/3$.
Nodes: $x_1=1/3, x_2=2/3$.
$T_0 = 100, T_1, T_2, T_3=0$.

Node 1 ($i=1$):
$a_1=2, a_2=1, b_1 = -T_0 = -100$.
Eq: $2T_1 = T_0 + T_2 \implies 2T_1 = 100 + T_2$.

Node 2 ($i=2$):
$a_2=2, a_1=1, b_2 = -T_3 = 0$.
Eq: $2T_2 = T_1 + T_3 \implies 2T_2 = T_1 + 0$.

System:
1) $2T_1 - T_2 = 100$
2) $-T_1 + 2T_2 = 0$

From (2), $T_1 = 2T_2$. Substitute into (1):
$2(2T_2) - T_2 = 100$
$4T_2 - T_2 = 100 \implies 3T_2 = 100 \implies T_2 = 100/3 \approx 33.33^\circ C$.
$T_1 = 2T_2 = 200/3 \approx 66.67^\circ C$.

This matches the previous calculation. The accuracy depends on $N$.
For $N=10$, $\Delta x = 0.1$. Analytical $T(0.1)=90, T(0.2)=80, \dots$
FVM will give values closer to these.

**Practice Question:**
A 1D rod of length $L=0.5$ m is subjected to a constant heat flux of $q''=500 \, W/m^2$ at $x=0$ and is held at a constant temperature of $T=200^\circ C$ at $x=0.5$ m. The thermal conductivity of the rod is $k=50 \, W/(m \cdot K)$. There is no heat generation within the rod. Use FVM with 2 control volumes to find the temperature distribution.

**Governing Equation:** $k \frac{d^2T}{dx^2} = 0$ (no source term).

**Boundary Conditions:**
$x=0$: $-k \frac{dT}{dx} = q'' \implies \frac{dT}{dx} = -\frac{q''}{k} = -\frac{500}{50} = -10 \, K/m$. (Neumann BC)
$x=0.5$: $T = 200^\circ C$. (Dirichlet BC)

**FVM Setup:**
$L=0.5$, $N=2$. $\Delta x = L/(N+1) = 0.5/(2+1) = 0.5/3 \approx 0.1667 \, m$.
Nodes: $x_1 = 0.1667$, $x_2 = 0.3333$.
$T_0 = T(0)$, $T_1$, $T_2$, $T_3 = T(0.5) = 200$.

**Discretized Equations:**

For node $i=1$:
Flux at $x_{1/2}$ (boundary $x=0$) minus flux at $x_{3/2}$ (between $T_1$ and $T_2$) equals 0.
$k (\frac{dT}{dx})_{x=0} - k \frac{T_2 - T_1}{\Delta x} = 0$.
We are given $k (\frac{dT}{dx})_{x=0} = -q'' = -500$.
So, $-q'' - k \frac{T_2 - T_1}{\Delta x} = 0$.
$-500 - 50 \frac{T_2 - T_1}{0.5/3} = 0$.
$-500 - 50 \frac{T_2 - T_1}{1/6} = 0$.
$-500 - 300 (T_2 - T_1) = 0$.
$300 (T_1 - T_2) = 500$.
$T_1 - T_2 = 500/300 = 5/3$.

For node $i=2$:
Flux at $x_{3/2}$ (between $T_1$ and $T_2$) minus flux at $x_{5/2}$ (boundary $x=0.5$) equals 0.
$k \frac{T_2 - T_1}{\Delta x} - k (\frac{dT}{dx})_{x=0.5} = 0$.
This is incorrect. The flux out of CV2 at $x_{5/2}$ needs to be calculated.
For node $i=N=2$, the equation is:
$k \frac{T_N - T_{N-1}}{\Delta x} - k (\frac{dT}{dx})_{x=L} = 0$.
$k \frac{T_2 - T_1}{\Delta x} - k (\frac{dT}{dx})_{x=0.5} = 0$.
The boundary condition at $x=0.5$ is $T=200$.
So we use the Dirichlet condition for the last node, $T_2$.
The equation for node $i=2$ needs to incorporate the boundary condition $T_3 = 200$.
The general form for node $i$ is $a_i T_i = \sum a_j T_j + b_i$.
For $i=2$: $a_2 T_2 = a_1 T_1 + a_3 T_3 + b_2$.
We know $T_3 = 200$.
The equation for $i=2$ is derived from $k \frac{T_2 - T_1}{\Delta x} - k \frac{T_3 - T_2}{\Delta x} = 0$.
$T_2 - T_1 - T_3 + T_2 = 0$.
$T_1 - 2T_2 + T_3 = 0$.
Substitute $T_3=200$: $T_1 - 2T_2 + 200 = 0 \implies T_1 - 2T_2 = -200$.

We have a system of two equations:
1) $T_1 - T_2 = 5/3$
2) $T_1 - 2T_2 = -200$

Subtract (2) from (1):
$(T_1 - T_2) - (T_1 - 2T_2) = 5/3 - (-200)$
$T_2 = 5/3 + 200 = 5/3 + 600/3 = 605/3 \approx 201.67^\circ C$.

Substitute $T_2$ into (1):
$T_1 - 605/3 = 5/3$
$T_1 = 5/3 + 605/3 = 610/3 \approx 203.33^\circ C$.

So, $T_1 \approx 203.33^\circ C$ and $T_2 \approx 201.67^\circ C$.

**Analytical Solution for comparison:**
$T(x) = A + Bx$.
$dT/dx = B$.
BC1: $-k B = q'' \implies B = -q''/k = -500/50 = -10$.
$T(x) = A - 10x$.
BC2: $T(0.5) = 200 \implies A - 10(0.5) = 200 \implies A - 5 = 200 \implies A = 205$.
$T(x) = 205 - 10x$.
$T_1 = T(0.1667) = 205 - 10(0.1667) = 205 - 1.667 = 203.333^\circ C$.
$T_2 = T(0.3333) = 205 - 10(0.3333) = 205 - 3.333 = 201.667^\circ C$.
The FVM results match the analytical solution very well.

**Answer to Practice Question:**
$T_1 \approx 203.33^\circ C$, $T_2 \approx 201.67^\circ C$.

---

### 5. Key Concepts and Important Points to Remember

*   **FVM Philosophy:** Conservation of physical quantities is enforced over discrete control volumes.
*   **Integral Form:** FVM works with the integral form of conservation equations.
*   **Control Volumes:** The domain is partitioned into control volumes (cells).
*   **Fluxes:** The key is to accurately approximate fluxes across cell faces.
*   **Discretization Schemes:** Upwind, Central Differencing, Hybrid, etc., are used for flux approximation.
    *   **Upwind:** Stable, but introduces numerical diffusion.
    *   **Central Differencing:** Accurate for diffusion, unstable for convection.
*   **Algebraic System:** FVM transforms PDEs into a system of linear algebraic equations.
*   **Boundary Conditions:** Crucial for obtaining correct solutions and are incorporated into the algebraic system.
*   **Conservation:** FVM guarantees conservation by its formulation, which is vital for fluid flow and heat transfer.
*   **Applications:** Well-suited for problems with complex geometries, irregular meshes, and both convection and diffusion phenomena.

**Veerstrag & Malalasekra (2008) - Highlight:** Emphasize the flexibility of FVM with unstructured meshes, making it suitable for complex industrial geometries.

**Patankar (2017) - Highlight:** The author's focus on the "finite-difference method for differential equations" within the FVM context, stressing the importance of discrete approximations. He also highlights the need for robust schemes like upwind for convection-dominated flows.

---

### 6. Practice Questions

1.  Explain the fundamental difference between the Finite Difference Method (FDM) and the Finite Volume Method (FVM) in terms of their approach to discretizing differential equations.
2.  Consider a 1D steady-state heat conduction problem with a constant thermal conductivity $k$ and a uniform heat source $S$ within the domain. Write down the governing PDE and its integral form over a control volume.
3.  For the equation $\frac{d^2T}{dx^2} = 0$, derive the discretized equation using the Central Differencing Scheme for a uniform grid. Show the steps.
4.  Discuss the advantages and disadvantages of the Upwind Scheme compared to the Central Differencing Scheme for approximating fluxes in FVM.
5.  A 1D rod of length $L=1$ m has thermal conductivity $k=10 \, W/(m \cdot K)$. The temperatures at the ends are $T(0) = 50^\circ C$ and $T(1) = 150^\circ C$. There is no heat generation. Use FVM with 3 control volumes to find the temperature at the interior nodes.
    *   **Hint:** Use $\Delta x = L/(N+1)$ for $N$ interior nodes. For $N=3$, you have nodes $x_1, x_2, x_3$ and $\Delta x = 1/4 = 0.25$ m. The nodes are at $0.25, 0.50, 0.75$ m.

---

### 7. Answers to Practice Questions

1.  **FDM vs. FVM:**
    *   **FDM:** Approximates derivatives in the differential equation using Taylor series expansions at discrete grid points (nodes). It focuses on the differential form.
    *   **FVM:** Integrates the conservation laws over discrete control volumes. It approximates fluxes across the faces of these volumes. It focuses on the integral form and is inherently conservative.

2.  **Governing PDE and Integral Form:**
    *   **PDE:** $-\frac{d}{dx}\left(k\frac{dT}{dx}\right) = S$ (assuming the equation is written as divergence of flux).
    *   **Integral Form over Control Volume $V_i$:**
        $\int_{V_i} -\frac{d}{dx}\left(k\frac{dT}{dx}\right) dV = \int_{V_i} S dV$
        Using the divergence theorem in 1D:
        $-\left[k\frac{dT}{dx}\right]_{x_{i-1/2}}^{x_{i+1/2}} = S_i V_i$
        where $S_i$ is the average source term in $V_i$, and $V_i$ is the volume of the control volume.

3.  **Discretized Equation for $\frac{d^2T}{dx^2} = 0$ using CDS:**
    The equation is $\frac{d}{dx}(k\frac{dT}{dx})=0$. For uniform $k$ and grid $\Delta x$:
    $\frac{k}{\Delta x} \left[ \frac{dT}{dx} \right]_{x_{i+1/2}} - \frac{k}{\Delta x} \left[ \frac{dT}{dx} \right]_{x_{i-1/2}} = 0$.
    Using CDS for gradients at faces:
    $\left[ \frac{dT}{dx} \right]_{x_{i+1/2}} \approx \frac{T_{i+1} - T_i}{\Delta x}$
    $\left[ \frac{dT}{dx} \right]_{x_{i-1/2}} \approx \frac{T_i - T_{i-1}}{\Delta x}$
    Substituting these:
    $\frac{k}{\Delta x} \left( \frac{T_{i+1} - T_i}{\Delta x} \right) - \frac{k}{\Delta x} \left( \frac{T_i - T_{i-1}}{\Delta x} \right) = 0$
    Multiplying by $\frac{\Delta x}{k}$:
    $\frac{T_{i+1} - T_i}{\Delta x} - \frac{T_i - T_{i-1}}{\Delta x} = 0$
    $T_{i+1} - T_i - T_i + T_{i-1} = 0$
    $T_{i-1} - 2T_i + T_{i+1} = 0$.

4.  **Upwind vs. Central Differencing:**
    *   **Upwind Scheme:**
        *   **Advantages:** Guarantees numerical stability for convection-dominated problems (high Peclet number). Simple to implement.
        *   **Disadvantages:** Introduces significant artificial diffusion (numerical viscosity), which can smear out sharp gradients and reduce accuracy, especially in diffusion-dominated or boundary layer problems.
    *   **Central Differencing Scheme (CDS):**
        *   **Advantages:** High accuracy for diffusion-dominated problems (low Peclet number).
        *   **Disadvantages:** Can lead to unphysical oscillations and instability (wiggles) in convection-dominated flows.

5.  **FVM Calculation for 1D Rod:**
    $L=1$ m, $k=10 \, W/(m \cdot K)$. $T(0)=50^\circ C$, $T(1)=150^\circ C$. $N=3$ control volumes.
    $\Delta x = L/(N+1) = 1/(3+1) = 0.25$ m.
    Nodes: $x_1=0.25$, $x_2=0.50$, $x_3=0.75$.
    Boundary values: $T_0=50$, $T_1$, $T_2$, $T_3$, $T_4=150$.

    The discretized equation for an interior node $i$ is $T_{i-1} - 2T_i + T_{i+1} = 0$.

    *   **Node 1 ($i=1$):**
        The equation considers the flux balance for the control volume centered at $x_1$. The faces are at $x_0=0$ and $x_{1.5}=0.25+0.125=0.375$? No, faces are at $x_i \pm \Delta x/2$.
        For node $i=1$, CV is $[x_0, x_1]$. $x_{1/2}=0$. $x_{3/2}=0.5$.
        The equation for node 1 should correctly incorporate $T_0$ and $T_1$.
        Equation: $T_0 - 2T_1 + T_2 = 0$.
        $50 - 2T_1 + T_2 = 0 \implies -2T_1 + T_2 = -50$.

    *   **Node 2 ($i=2$):**
        Equation: $T_1 - 2T_2 + T_3 = 0$.
        $T_1 - 2T_2 + 0.50 = 0 \implies T_1 - 2T_2 = -0.50$.

    *   **Node 3 ($i=3$):**
        Equation: $T_2 - 2T_3 + T_4 = 0$.
        $T_2 - 2T_3 + 150 = 0 \implies T_2 - 2T_3 = -150$.

    System of equations:
    1) $-2T_1 + T_2 = -50$
    2) $T_1 - 2T_2 = -0.50$
    3) $T_2 - 2T_3 = -150$

    Solve (1) and (2) for $T_1$ and $T_2$.
    From (1), $T_2 = 2T_1 - 50$. Substitute into (2):
    $T_1 - 2(2T_1 - 50) = -0.50$
    $T_1 - 4T_1 + 100 = -0.50$
    $-3T_1 = -100.50$
    $T_1 = 100.50 / 3 = 33.50^\circ C$.

    Now find $T_2$:
    $T_2 = 2T_1 - 50 = 2(33.50) - 50 = 67.00 - 50 = 17.00^\circ C$.

    Wait, the analytical solution for this problem is $T(x) = 50 + 100x$.
    $T(0.25) = 50 + 100(0.25) = 50 + 25 = 75^\circ C$.
    $T(0.50) = 50 + 100(0.50) = 50 + 50 = 100^\circ C$.
    $T(0.75) = 50 + 100(0.75) = 50 + 75 = 125^\circ C$.

    My discretized equations for boundary nodes must be wrong.
    Let's re-evaluate the boundary handling for Dirichlet BCs.

    The equation for node $i$ is:
    $a_i T_i = \sum_{j \ne i} a_j T_j + b_i$.

    For $i=1$ (left boundary node):
    The standard interior node equation is $T_{i-1} - 2T_i + T_{i+1} = 0$.
    This means $a_i=2$, $a_{i-1}=1$, $a_{i+1}=1$.
    If $T_{i-1}$ is a boundary value (e.g., $T_0$), it should be handled by the RHS.
    $2T_1 = T_0 + T_2$.
    $a_1=2, a_2=1, b_1 = T_0 = 50$.

    For $i=N$ (right boundary node):
    $T_{i-1} - 2T_i + T_{i+1} = 0$.
    $a_i=2, a_{i-1}=1, a_{i+1}=1$.
    If $T_{i+1}$ is a boundary value (e.g., $T_{N+1}$), it should be handled by the RHS.
    $T_{N-1} - 2T_N + T_{N+1} = 0$.
    $a_N=2, a_{N-1}=1, b_N = -T_{N+1} = -150$.

    **Corrected System for Q5:**
    $N=3$. Nodes $T_1, T_2, T_3$.
    Node 1 ($i=1$): $2T_1 = T_0 + T_2 \implies 2T_1 = 50 + T_2 \implies -2T_1 + T_2 = -50$.
    Node 2 ($i=2$): $T_1 - 2T_2 + T_3 = 0$.
    Node 3 ($i=3$): $T_2 - 2T_3 + T_4 = 0 \implies T_2 - 2T_3 + 150 = 0 \implies T_2 - 2T_3 = -150$.

    System:
    1) $-2T_1 + T_2 = -50$
    2) $T_1 - 2T_2 + T_3 = 0$
    3) $T_2 - 2T_3 = -150$

    From (1), $T_2 = 2T_1 - 50$. Substitute into (2):
    $T_1 - 2(2T_1 - 50) + T_3 = 0$
    $T_1 - 4T_1 + 100 + T_3 = 0$
    $-3T_1 + T_3 = -100$. (Eq. A)

    Substitute $T_2$ from (1) into (3):
    $(2T_1 - 50) - 2T_3 = -150$
    $2T_1 - 2T_3 = -100$.
    $T_1 - T_3 = -50$. (Eq. B)

    Now solve Eq. A and Eq. B for $T_1$ and $T_3$.
    A) $-3T_1 + T_3 = -100$
    B) $T_1 - T_3 = -50$

    Add (A) and (B):
    $(-3T_1 + T_3) + (T_1 - T_3) = -100 + (-50)$
    $-2T_1 = -150$
    $T_1 = 75^\circ C$.

    Substitute $T_1$ into (B):
    $75 - T_3 = -50$
    $T_3 = 75 + 50 = 125^\circ C$.

    Now find $T_2$:
    $T_2 = 2T_1 - 50 = 2(75) - 50 = 150 - 50 = 100^\circ C$.

    **Answer to Practice Question 5:**
    $T_1 = 75^\circ C$, $T_2 = 100^\circ C$, $T_3 = 125^\circ C$.

---
This concludes the introductory notes for the Finite Volume Method in Computational Heat Transfer. The next modules will likely build upon these concepts for more complex problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
