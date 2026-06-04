---
title: "Two dimensional incompressible viscous flows."
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 4: Finite volume method for steady"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463441"
status: "completed"
scrapedAt: "2026-05-20T17:58:22.453Z"
---
# Computational Fluid Dynamics: Module 4 - Finite Volume Method for Steady Two-Dimensional Incompressible Viscous Flows

## 1. Introduction to Two-Dimensional Incompressible Viscous Flows

This section introduces the fundamental governing equations for fluid flow, focusing on the simplifications applicable to two-dimensional, incompressible, and viscous flows. This aligns with **CO1: To understand the governing equations of fluid flow and heat transfer.**

### 1.1 Governing Equations
The behavior of fluid flow is described by the Navier-Stokes equations. For a two-dimensional, incompressible, and steady flow, these equations simplify.

*   **Continuity Equation (Conservation of Mass):**
    This equation states that mass is conserved. For a 2D incompressible flow, it is:
    $$ \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0 $$
    where:
    *   $u$ is the velocity component in the $x$-direction.
    *   $v$ is the velocity component in the $y$-direction.

*   **Momentum Equations (Conservation of Momentum):**
    These equations describe the balance of forces acting on a fluid element. For a 2D incompressible, Newtonian fluid with constant viscosity ($\mu$), and neglecting body forces (or assuming them incorporated into pressure), the momentum equations are:

    *   **x-momentum:**
        $$ \rho \left( u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} \right) = -\frac{\partial p}{\partial x} + \mu \left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} \right) $$

    *   **y-momentum:**
        $$ \rho \left( u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} \right) = -\frac{\partial p}{\partial y} + \mu \left( \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} \right) $$
    where:
    *   $\rho$ is the fluid density.
    *   $p$ is the pressure.
    *   $\mu$ is the dynamic viscosity.

**Key Concept:** The Navier-Stokes equations are a set of coupled, non-linear partial differential equations (PDEs). Solving them analytically is often impossible for complex geometries and boundary conditions. This is where CFD methods like the Finite Volume Method (FVM) come into play.

**Reference:**
*   Anderson Jr., "Computational Fluid Dynamics," Chapter 3, discusses the derivation and form of Navier-Stokes equations.
*   Patankar, "Numerical Heat Transfer and Fluid Flow," Chapter 2, provides a good overview of governing equations.

### 1.2 Important Points to Remember
*   **Incompressibility:** Density ($\rho$) is constant. This simplifies the continuity equation significantly.
*   **Viscous Flow:** The presence of viscosity ($\mu$) introduces shear stresses and viscous diffusion terms (second derivatives of velocity). Neglecting viscosity would lead to Euler equations.
*   **Steady Flow:** Derivatives with respect to time are zero. This eliminates transient behavior and simplifies the equations.
*   **Two-Dimensional:** The flow can be described using only two spatial coordinates ($x$, $y$).

---

## 2. The Finite Volume Method (FVM) for Steady Flows

This section introduces the Finite Volume Method as a numerical technique for solving PDEs. It emphasizes its suitability for conservation laws and its application to steady-state problems. This aligns with **CO3: To demonstrate the use of finite volume method for simple 1D/2D problems** and **CO4: To understand different solution techniques for convection diffusion equation**.

### 2.1 Core Principle of FVM
The FVM is based on discretizing the computational domain into a finite number of control volumes (CVs). The governing PDEs are then integrated over each control volume. The key idea is to apply the **Gauss Divergence Theorem** to transform the volume integrals of divergence terms into surface integrals of flux. This ensures that the conservation laws are inherently satisfied at the discrete level.

**Gauss Divergence Theorem:**
$$ \int_V (\nabla \cdot \mathbf{F}) dV = \oint_S (\mathbf{F} \cdot \mathbf{n}) dS $$
where:
*   $V$ is a volume.
*   $\mathbf{F}$ is a vector field.
*   $S$ is the surface bounding the volume $V$.
*   $\mathbf{n}$ is the outward normal vector to the surface.

### 2.2 Discretization of the Domain
*   **Control Volume (CV):** A small region of the domain. For 2D, CVs are typically polygons (e.g., rectangles, triangles).
*   **Grid/Mesh:** The collection of all CVs that completely cover the domain.
*   **Grid Points/Nodes:** Typically located at the centroids of CVs or at the vertices of CVs. In the common cell-centered approach, CVs are defined around nodes.

### 2.3 FVM Formulation of a General Conservation Law
Consider a general steady conservation law in differential form:
$$ \frac{\partial}{\partial x}(\rho u \phi) + \frac{\partial}{\partial y}(\rho v \phi) = \frac{\partial}{\partial x}\left(\Gamma \frac{\partial \phi}{\partial x}\right) + \frac{\partial}{\partial y}\left(\Gamma \frac{\partial \phi}{\partial y}\right) + S_\phi $$
where:
*   $\phi$ is a general dependent variable (e.g., velocity components $u$, $v$, or temperature).
*   $\rho u$ and $\rho v$ represent convective fluxes.
*   $\Gamma$ is the diffusion coefficient (viscosity for momentum, thermal conductivity for heat).
*   $S_\phi$ is a source/sink term.

Integrating this equation over a control volume $P$ with volume $V_P$ and boundary surface $S_P$:
$$ \int_{V_P} \left[ \frac{\partial}{\partial x}(\rho u \phi) + \frac{\partial}{\partial y}(\rho v \phi) \right] dV_P = \int_{V_P} \left[ \frac{\partial}{\partial x}\left(\Gamma \frac{\partial \phi}{\partial x}\right) + \frac{\partial}{\partial y}\left(\Gamma \frac{\partial \phi}{\partial y}\right) \right] dV_P + \int_{V_P} S_\phi dV_P $$

Applying the Gauss Divergence Theorem to the flux terms:
$$ \oint_{S_P} (\rho u \phi \mathbf{i} + \rho v \phi \mathbf{j}) \cdot \mathbf{n} dS_P = \oint_{S_P} \left(\Gamma \nabla \phi\right) \cdot \mathbf{n} dS_P + \int_{V_P} S_\phi dV_P $$

This surface integral is then approximated by summing the fluxes across each face of the control volume. Let $P$ be a control volume with neighboring control volumes $E$ (east), $W$ (west), $N$ (north), $S$ (south). Let $f_E, f_W, f_N, f_S$ be the fluxes across the faces between $P$ and its neighbors.

The discretized equation takes the form:
$$ \sum_{f} F_f \phi_f - \sum_{f} \left(\Gamma A \frac{\partial \phi}{\partial n}\right)_f = Q_P $$
where:
*   $F_f$ is the mass flux across face $f$ (e.g., $\rho u A$ for a face perpendicular to x).
*   $A$ is the area of the face.
*   $(\partial \phi / \partial n)_f$ is the gradient of $\phi$ normal to the face.
*   $Q_P$ is the discretized source term for CV $P$.
*   $\phi_f$ is the value of $\phi$ at the face.

**Key Concept:** The discretization of the convection and diffusion terms is crucial. Different schemes (upwind, central differencing, hybrid) have different accuracy and stability properties.

**Reference:**
*   Versteeg & Malalasekera, "An Introduction to Computational Fluid Dynamics: The Finite Volume Method," Chapters 3 & 4, provides a thorough explanation of FVM principles and discretization schemes.
*   Patankar, "Numerical Heat Transfer and Fluid Flow," Chapters 5 & 6, discusses the concept of flux and its discretization.

### 2.4 Discretization of Convective and Diffusive Fluxes

To obtain algebraic equations, we need to approximate the values of $\phi$ and its gradients at the faces.

*   **Convective Flux ($F_f \phi_f$):**
    *   **Upwind Differencing Scheme (UDS):** Assumes $\phi_f$ is equal to the value of $\phi$ in the upstream CV. It's first-order accurate but unconditionally stable.
        If $F_f > 0$, $\phi_f = \phi_P$. If $F_f < 0$, $\phi_f = \phi_E$ (assuming $E$ is the neighbor).
    *   **Central Differencing Scheme (CDS):** Assumes $\phi_f$ is the average of the $\phi$ values in the two adjacent CVs. It's second-order accurate but can lead to oscillations if the Peclet number ($Pe = \frac{F_f}{\Gamma A}$) is high.
        $\phi_f = \frac{\phi_P + \phi_E}{2}$
    *   **Hybrid Scheme:** Uses UDS for high $Pe$ and CDS for low $Pe$.
    *   **Second-Order Upwind (SOU):** Aims for higher accuracy while maintaining stability.

*   **Diffusive Flux ($(\Gamma A \frac{\partial \phi}{\partial n})_f$):**
    This term is approximated using the gradient at the face.
    $$ \left(\Gamma A \frac{\partial \phi}{\partial n}\right)_f = \Gamma A \frac{\phi_E - \phi_P}{\delta x} $$
    where $\delta x$ is the distance between the centers of CV $P$ and CV $E$.

**Important Point:** The choice of discretization scheme for convection significantly impacts the accuracy and stability of the solution. UDS is simple and stable but diffusive, while CDS is accurate but unstable for high convection.

**Reference:**
*   Versteeg & Malalasekera, Chapter 4, delves into the details of various schemes.
*   Anderson Jr., Chapter 5, discusses discretization of convective and diffusive terms.

---

## 3. Solution Procedures for Steady Two-Dimensional Incompressible Viscous Flows

This section focuses on how to solve the discretized equations, particularly for the coupled velocity and pressure fields. This aligns with **CO4: To understand different solution techniques for convection diffusion equation** and **CO3: To demonstrate the use of finite volume method for simple 1D/2D problems**.

### 3.1 The Velocity-Pressure Coupling Problem
The major challenge in solving incompressible Navier-Stokes equations is the coupling between velocity and pressure. The continuity equation does not explicitly contain pressure, but pressure gradients drive the flow and ensure mass conservation.

*   **Issue:** If we solve the discretized momentum equations directly, there is no guarantee that the resulting velocity field will satisfy the continuity equation.
*   **Solution:** Special algorithms are required to link velocity and pressure.

### 3.2 Pressure-Correction Methods (e.g., SIMPLE, SIMPLER, PISO)
These algorithms are iterative and aim to satisfy both momentum and continuity equations simultaneously.

#### 3.2.1 The SIMPLE (Semi-Implicit Method for Pressure Linked Equations) Algorithm
This is a widely used algorithm. It involves an iterative process where:

1.  **Guess Pressure Field:** An initial guess for the pressure field ($p^*$) is made.
2.  **Solve Momentum Equations:** The discretized momentum equations are solved using the guessed pressure field $p^*$ to obtain intermediate velocity fields ($u^*, v^*$).
    *   $u^*$ and $v^*$ may not satisfy continuity.
3.  **Pressure-Correction Equation:** A pressure-correction equation is derived based on the continuity equation and the relationship between velocity and pressure corrections. This equation is solved to obtain a pressure correction field ($p'$).
    *   The pressure correction equation is typically derived by relating velocity corrections to pressure corrections through a relationship similar to the discretized momentum equations. For instance, a simplified relation might be used:
        $$ u' = -D_u \frac{\partial p'}{\partial x} $$
        where $D_u$ is a coefficient related to the discretization of the momentum equation.
    *   Substituting these into the discretized continuity equation for the corrected velocity ($u = u^* + u'$, $v = v^* + v'$) leads to a Poisson-like equation for $p'$.
4.  **Correct Velocity and Pressure:** The pressure and velocity fields are corrected:
    *   $p = p^* + \alpha_p p'$
    *   $u = u^* + u'$
    *   $v = v^* + v'$
    (where $\alpha_p$ is a pressure-under-relaxation factor). The velocity corrections ($u', v'$) are calculated using the corrected pressure $p$.
5.  **Iteration:** Steps 1-4 are repeated until convergence is achieved (i.e., the continuity residual and momentum residuals are below a specified tolerance).

**Key Features of SIMPLE:**
*   Iterative.
*   Uses discretized momentum equations to relate velocity to pressure.
*   Derives a pressure-correction equation to enforce continuity.
*   Often involves under-relaxation to improve stability.

**Reference:**
*   Patankar, Chapter 7, provides a detailed explanation of the SIMPLE algorithm and its variants.
*   Versteeg & Malalasekera, Chapter 8, also discusses pressure-velocity coupling and SIMPLE.

#### 3.2.2 Other Algorithms (Brief Mention)
*   **SIMPLER (SIMPLE-Revised):** An improvement over SIMPLE, where the pressure-correction equation is solved directly for the pressure, rather than a correction.
*   **PISO (Pressure Implicit with Splitting of Operators):** Often used for transient flows but can be adapted for steady-state. It uses an iterative pressure-correction process with explicit prediction and correction steps.

### 3.3 Solving Algebraic Systems
Once the discretized equations (algebraic equations for each CV) are obtained, they form a large system of linear equations. For a steady 2D flow on a grid of $N_x \times N_y$ CVs, this can result in $3 \times N_x \times N_y$ coupled equations (2 for momentum, 1 for continuity/pressure correction).

*   **Iterative Solvers:**
    *   **Gauss-Seidel:** Simple, but convergence can be slow.
    *   **Successive Over-Relaxation (SOR):** An accelerated version of Gauss-Seidel.
    *   **Conjugate Gradient (CG) methods (e.g., CGSTAB, BiCGSTAB):** More advanced and efficient for large systems.
*   **Direct Solvers:**
    *   **Gaussian Elimination:** Efficient for small systems but computationally prohibitive for large CFD grids due to storage and computational cost.

**Important Point:** The choice of solver depends on the size of the grid and the properties of the system of equations. Iterative solvers are generally preferred for CFD due to the large number of unknowns.

**Reference:**
*   Anderson Jr., Chapter 6, covers various numerical solution techniques for algebraic equations.
*   Sastry, "Introductory methods to numerical analysis," Chapter 5, can provide background on numerical linear algebra.

---

## 4. Discretization of Terms in Momentum Equations

This section details how the convection and diffusion terms from the Navier-Stokes equations are discretized using FVM. This is fundamental to **CO3: To demonstrate the use of finite volume method for simple 1D/2D problems** and **CO4: To understand different solution techniques for convection diffusion equation**.

Consider the x-momentum equation for the velocity component $u$:
$$ \rho \left( u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} \right) = -\frac{\partial p}{\partial x} + \mu \left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} \right) $$

Let's discretize this equation for a control volume $P$, centered at $(x_P, y_P)$, with neighbors $E$ (East), $W$ (West), $N$ (North), $S$ (South). The faces are at $x_E, x_W, y_N, y_S$.

### 4.1 Discretization of Pressure Gradient Term
$$ \left(\frac{\partial p}{\partial x}\right)_P \approx \frac{p_E - p_W}{2 \Delta x} \quad \text{(using central differencing for pressure gradient)} $$
Note: This is a simplified approximation. The actual discretization depends on the face locations and grid structure. For a staggered grid or specific algorithms like SIMPLE, the pressure gradient at a face might be approximated differently. For instance, in SIMPLE, the pressure gradient at a face might be interpolated.
$$ \left(\frac{\partial p}{\partial x}\right)_f \approx \frac{p_E - p_P}{\Delta x_{PE}} $$
where $\Delta x_{PE}$ is the distance between cell centers $P$ and $E$.

### 4.2 Discretization of Viscous Terms
The diffusion terms are typically discretized using CDS.

*   **$\frac{\partial^2 u}{\partial x^2}$ term:**
    At face $E$: $\left(\Gamma \frac{\partial u}{\partial x}\right)_E \approx \Gamma_E A_E \frac{u_E - u_P}{\delta x_{PE}}$
    At face $W$: $\left(\Gamma \frac{\partial u}{\partial x}\right)_W \approx \Gamma_W A_W \frac{u_P - u_W}{\delta x_{WP}}$
    The net diffusion flux in the x-direction for CV $P$ is:
    $$ D_x = \Gamma_E A_E \frac{u_E - u_P}{\delta x_{PE}} - \Gamma_W A_W \frac{u_P - u_W}{\delta x_{WP}} $$
    where $A_E$ and $A_W$ are face areas, and $\delta x_{PE}$, $\delta x_{WP}$ are distances between cell centers.

*   **$\frac{\partial^2 u}{\partial y^2}$ term:**
    At face $N$: $\left(\Gamma \frac{\partial u}{\partial y}\right)_N \approx \Gamma_N A_N \frac{u_N - u_P}{\delta y_{PN}}$
    At face $S$: $\left(\Gamma \frac{\partial u}{\partial y}\right)_S \approx \Gamma_S A_S \frac{u_P - u_S}{\delta y_{PS}}$
    The net diffusion flux in the y-direction for CV $P$ is:
    $$ D_y = \Gamma_N A_N \frac{u_N - u_P}{\delta y_{PN}} - \Gamma_S A_S \frac{u_P - u_S}{\delta y_{PS}} $$
    where $A_N$ and $A_S$ are face areas, and $\delta y_{PN}$, $\delta y_{PS}$ are distances between cell centers.

### 4.3 Discretization of Convective Terms
This is where the choice of scheme is critical. Let's use the Upwind Differencing Scheme (UDS) as an example.

*   **Convective flux across face $E$ (normal velocity component $u_E$):**
    If $u_E \ge 0$ (flow from $P$ to $E$): $\phi_f = u_P \Rightarrow (\rho u \phi)_E = \rho_E u_E u_P$
    If $u_E < 0$ (flow from $E$ to $P$): $\phi_f = u_E \Rightarrow (\rho u \phi)_E = \rho_E u_E u_E$

    This can be expressed more generally for flux $F_E = \rho_E u_E A_E$:
    $$ F_E \phi_f = F_E \max(u_E, 0) u_P + F_E \min(u_E, 0) u_E $$

*   **Convective flux across face $W$ (normal velocity component $u_W$):**
    If $u_W \ge 0$ (flow from $W$ to $P$): $\phi_f = u_W \Rightarrow (\rho u \phi)_W = \rho_W u_W u_W$
    If $u_W < 0$ (flow from $P$ to $W$): $\phi_f = u_P \Rightarrow (\rho u \phi)_W = \rho_W u_W u_P$

    More generally for flux $F_W = \rho_W u_W A_W$:
    $$ F_W \phi_f = F_W \max(u_W, 0) u_W + F_W \min(u_W, 0) u_P $$

*   **Convective flux across face $N$ (normal velocity component $v_N$):**
    If $v_N \ge 0$ (flow from $P$ to $N$): $\phi_f = u_P \Rightarrow (\rho v \phi)_N = \rho_N v_N u_P$
    If $v_N < 0$ (flow from $N$ to $P$): $\phi_f = u_N \Rightarrow (\rho v \phi)_N = \rho_N v_N u_N$

    More generally for flux $F_N = \rho_N v_N A_N$:
    $$ F_N \phi_f = F_N \max(v_N, 0) u_P + F_N \min(v_N, 0) u_N $$

*   **Convective flux across face $S$ (normal velocity component $v_S$):**
    If $v_S \ge 0$ (flow from $S$ to $P$): $\phi_f = u_S \Rightarrow (\rho v \phi)_S = \rho_S v_S u_S$
    If $v_S < 0$ (flow from $P$ to $S$): $\phi_f = u_P \Rightarrow (\rho v \phi)_S = \rho_S v_S u_P$

    More generally for flux $F_S = \rho_S v_S A_S$:
    $$ F_S \phi_f = F_S \max(v_S, 0) u_S + F_S \min(v_S, 0) u_P $$

**Discretized Momentum Equation (u-component) using UDS:**
The equation for CV $P$ becomes:
$$ \sum_{f \in \{E,W,N,S\}} F_f \phi_f - \left( D_x + D_y \right) = \left(\frac{\partial p}{\partial x}\right)_P V_P + Q_P V_P $$
Substituting the discretized terms, we get an algebraic equation for $u_P$ in terms of its neighbors:
$$ a_P u_P = \sum_{nb} a_{nb} u_{nb} + b $$
where $a_P$ is the sum of coefficients of $u_P$ from all terms, and $a_{nb}$ are coefficients for neighbors, and $b$ is the discretized pressure gradient and source term.

**Example:** For the term $\rho (u \frac{\partial u}{\partial x})$, if we use UDS at face $E$ and $u_E > 0$, it contributes $F_E u_P$. If we use CDS, it contributes $F_E \frac{u_P + u_E}{2}$.

**Reference:**
*   Versteeg & Malalasekera, Chapter 4, provides detailed derivations for various schemes.
*   Anderson Jr., Chapter 5, also covers these discretizations.

---

## 5. Handling Boundary Conditions

Boundary conditions are essential for closing the system of equations and are applied to the faces on the boundary of the computational domain. This relates to **CO3: To demonstrate the use of finite volume method for simple 1D/2D problems**.

### 5.1 Types of Boundary Conditions
*   **Dirichlet (Essential) Boundary Conditions:** The value of the variable is specified (e.g., velocity at a wall $u=0, v=0$).
*   **Neumann (Natural) Boundary Conditions:** The gradient of the variable is specified (e.g., zero gradient $\frac{\partial \phi}{\partial n} = 0$).
*   **Mixed/Robin Boundary Conditions:** A combination of both.

### 5.2 Application in FVM

*   **Dirichlet Condition (e.g., $u = U_{wall}$ on a boundary face):**
    If a face $f$ is on a boundary where $u$ is specified as $U_{wall}$, the convective and diffusive fluxes across that face are directly calculated using $U_{wall}$. For example, if $F_f > 0$, the contribution to the neighbor CV's equation would be $F_f U_{wall}$. For the momentum equation, if it's a wall, $u$ is often zero. The discretization of the momentum equation for the CV adjacent to the wall will use $u_{face} = 0$. The pressure correction equation will also use the specified velocity.

*   **Neumann Condition (e.g., $\frac{\partial u}{\partial x} = 0$ at an outlet):**
    If $\frac{\partial u}{\partial x} = 0$ at an outlet face $f$, then the diffusive flux across that face is zero: $\left(\Gamma A \frac{\partial u}{\partial n}\right)_f = 0$. The convective flux is calculated using interpolation from the interior CV.

*   **Inlet Boundary Conditions:** Typically specify velocity components (e.g., $u=U_{in}, v=0$). The pressure might be extrapolated or a reference pressure set.

*   **Outlet Boundary Conditions:** Typically specify pressure (e.g., $p=P_{out}$) or assume a zero gradient for velocity and other variables.

*   **Wall Boundary Conditions:** No-slip condition ($u=0, v=0$) and insulated condition (e.g., $\frac{\partial T}{\partial n} = 0$ for temperature).

**Example: No-slip wall boundary condition on the East face (face $E$ is a wall)**
For the u-momentum equation, if face $E$ is a wall with $u=0$:
The contribution to the CV $P$ from face $E$ would be:
*   Convection: $F_E \phi_f = \rho_E u_E A_E \times 0 = 0$ (assuming $u_E$ is velocity component normal to face $E$).
*   Diffusion: $\left(\Gamma A \frac{\partial u}{\partial n}\right)_E = \Gamma_E A_E \frac{0 - u_P}{\delta x_{PE}}$.
The algebraic equation for $u_P$ will have terms related to this.

**Important Point:** Accurate handling of boundary conditions is critical for obtaining correct solutions. They directly influence the fluxes leaving or entering the control volumes adjacent to the boundaries.

**Reference:**
*   Versteeg & Malalasekera, Chapter 5, covers boundary conditions in FVM.
*   Anderson Jr., Chapter 4, discusses boundary conditions for fluid flow.

---

## 6. Practice Questions and Exercises

Here are some practice questions to test your understanding.

**Question 1:**
Write down the simplified continuity and momentum equations for a steady, two-dimensional, incompressible, viscous flow. Identify the convective and diffusive terms.
*   **Answer:** See Section 1.1. The convective terms are $\rho (u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y})$ and $\rho (u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y})$. The diffusive terms are the second derivatives of velocity with respect to $x$ and $y$, multiplied by viscosity $\mu$.

**Question 2:**
Explain the core principle of the Finite Volume Method and how the Gauss Divergence Theorem is used.
*   **Answer:** FVM discretizes the domain into control volumes and integrates the governing PDEs over each CV. The Gauss Divergence Theorem converts volume integrals of divergence terms into surface integrals of fluxes, ensuring conservation.

**Question 3:**
Compare and contrast the Upwind Differencing Scheme (UDS) and the Central Differencing Scheme (CDS) for discretizing convective terms in terms of accuracy and stability.
*   **Answer:** UDS is first-order accurate and unconditionally stable but introduces artificial diffusion. CDS is second-order accurate but can become unstable for high Peclet numbers due to oscillations.

**Question 4:**
Describe the main challenge in solving incompressible Navier-Stokes equations and how pressure-correction methods like SIMPLE address it.
*   **Answer:** The main challenge is the velocity-pressure coupling, as pressure is not explicitly in the continuity equation. SIMPLE addresses this by guessing a pressure field, solving momentum equations, deriving and solving a pressure-correction equation to enforce continuity, and then correcting velocity and pressure iteratively.

**Question 5:**
Consider a 1D steady convection-diffusion problem: $\frac{d}{dx}(u \phi) = \Gamma \frac{d^2 \phi}{dx^2}$. Discretize this using FVM with UDS for convection and CDS for diffusion on a single CV between nodes $W$, $P$, $E$. Write down the resulting algebraic equation for $\phi_P$.
*   **Answer:**
    The equation integrated over CV $P$ is:
    $$ (u \phi)_E - (u \phi)_W = \Gamma \left(\frac{d\phi}{dx}\right)_E - \Gamma \left(\frac{d\phi}{dx}\right)_W $$
    Using UDS for convection and CDS for diffusion:
    *   $(u \phi)_E \approx u_E \phi_P$ (assuming $u_E > 0$)
    *   $(u \phi)_W \approx u_W \phi_W$ (assuming $u_W > 0$)
    *   $\left(\frac{d\phi}{dx}\right)_E \approx \frac{\phi_E - \phi_P}{\Delta x}$
    *   $\left(\frac{d\phi}{dx}\right)_W \approx \frac{\phi_P - \phi_W}{\Delta x}$

    Substituting these:
    $$ u_E \phi_P - u_W \phi_W = \Gamma \left(\frac{\phi_E - \phi_P}{\Delta x}\right) - \Gamma \left(\frac{\phi_P - \phi_W}{\Delta x}\right) $$
    Rearranging to solve for $\phi_P$:
    $$ \phi_P \left(u_E + \frac{\Gamma}{\Delta x} + \frac{\Gamma}{\Delta x}\right) = u_W \phi_W + \Gamma \frac{\phi_E}{\Delta x} + \Gamma \frac{\phi_W}{\Delta x} $$
    $$ \phi_P \left(u_E + \frac{2\Gamma}{\Delta x}\right) = (u_W + \frac{\Gamma}{\Delta x})\phi_W + \frac{\Gamma}{\Delta x} \phi_E $$
    This is in the form $a_P \phi_P = \sum a_{nb} \phi_{nb}$.

**Question 6:**
How would you apply a no-slip boundary condition ($u=0$) at a face on the boundary for the u-momentum equation?
*   **Answer:** The face value of $u$ would be set to zero when calculating the convective and diffusive fluxes across that boundary face. This means the terms involving this face in the discretized equation for the adjacent CV would be modified accordingly, typically making the flux zero or contributing zero to the convective term and using the zero value for diffusion calculation.

---

## 7. Summary and Key Takeaways

*   **Governing Equations:** Understanding the conservation of mass (continuity) and momentum (Navier-Stokes) is fundamental. For steady, 2D, incompressible viscous flows, these are PDEs that are typically hard to solve analytically.
*   **Finite Volume Method:** A robust numerical method that discretizes the domain into control volumes and applies conservation laws by integrating over these volumes. It inherently conserves quantities.
*   **Discretization:** Crucial step where differential operators are approximated by algebraic forms. Choice of schemes for convection (UDS, CDS, etc.) impacts accuracy and stability. Diffusion is often discretized using CDS.
*   **Velocity-Pressure Coupling:** A significant challenge in incompressible flow. Pressure-correction algorithms like SIMPLE are employed to iteratively solve for velocity and pressure fields that satisfy both momentum and continuity.
*   **Boundary Conditions:** Essential for problem definition and solution. They are applied at the faces on the domain boundary and can be of Dirichlet or Neumann type.
*   **Algebraic Systems:** Discretization leads to large systems of linear algebraic equations, typically solved using iterative methods.

**Knowledge Level Alignment:**
*   **K2 (Knowledge):** Understanding governing equations (Sec 1), FVM principles (Sec 2), types of discretization schemes (Sec 4), and boundary conditions (Sec 5).
*   **K3 (Application):** Demonstrating FVM for 2D problems involves applying the discretization schemes and solution procedures (Sec 2, 3, 4). Interpreting results (CO5) relies on understanding how these numerical solutions represent the physical phenomena.

This comprehensive study of Module 4 equips you with the foundational knowledge to discretize and solve steady, two-dimensional, incompressible viscous flows using the Finite Volume Method.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
