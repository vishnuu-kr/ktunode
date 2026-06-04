---
title: "Solution algorithm for pressure-velocity coupling in steady flows- SIMPLE algorithm to solve Navier - Stokes equations."
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 4: Finite volume method for steady"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463444"
status: "completed"
scrapedAt: "2026-05-20T17:58:24.653Z"
---
# Computational Fluid Dynamics: Module 4 - Finite Volume Method for Steady Flows

## Topic: Solution Algorithm for Pressure-Velocity Coupling in Steady Flows - SIMPLE Algorithm to Solve Navier-Stokes Equations

This module focuses on how to numerically solve the Navier-Stokes equations, which describe fluid motion, using the Finite Volume Method (FVM). Specifically, we'll delve into the challenge of pressure-velocity coupling in steady flows and explore the SIMPLE (Semi-Implicit Method for Pressure Linked Equations) algorithm as a widely used solution.

---

### 1. Understanding the Governing Equations (CO1: K2)

The foundation of fluid dynamics lies in the governing equations that describe conservation principles. For incompressible, steady flows, these are:

*   **Continuity Equation (Mass Conservation):**
    ∇ ⋅ **u** = 0
    This states that the net rate of mass flow into any region must be zero. In Cartesian coordinates for 2D flow:
    ∂u/∂x + ∂v/∂y = 0

*   **Momentum Equations (Newton's Second Law for Fluids):**
    **u** ⋅ ∇**u** = -∇p/ρ + ν ∇²**u** + **f**
    This equation balances the inertial forces, pressure forces, viscous forces, and body forces per unit mass. In Cartesian coordinates for 2D flow (x-momentum):
    u ∂u/∂x + v ∂u/∂y = - (1/ρ) ∂p/∂x + ν (∂²u/∂x² + ∂²u/∂y²) + f_x
    And for the y-momentum:
    u ∂v/∂x + v ∂v/∂y = - (1/ρ) ∂v/∂y + ν (∂²v/∂x² + ∂²v/∂y²) + f_y

    *   **u**: Velocity vector
    *   p: Pressure
    *   ρ: Density
    *   ν: Kinematic viscosity
    *   **f**: Body forces per unit mass (e.g., gravity)

**Key Concept:** The Navier-Stokes equations are **coupled** and **non-linear**. The velocity components (u, v) appear in the convective acceleration terms (e.g., u ∂u/∂x) and are linked to the pressure gradient (∇p). This coupling makes direct analytical or numerical solution challenging.

---

### 2. The Challenge of Pressure-Velocity Coupling

**Problem Statement:** In incompressible flow, there is no explicit equation for pressure. The continuity equation acts as a constraint on the velocity field. When discretizing the Navier-Stokes equations using FVM or FDM, a direct solution for velocity and pressure simultaneously is problematic.

*   **Discretization:** Applying FVM to the momentum equations yields discrete equations for velocity components (u, v). However, these equations involve unknown pressure gradients.
*   **Pressure Gradient Term:** The pressure gradient term (-∇p/ρ) couples the velocity components. If we have guessed values for velocities, the pressure gradient can be approximated. But how do we ensure this approximated pressure gradient leads to a velocity field that satisfies the continuity equation?

**Why it's Difficult:**
*   **No Pressure Equation:** Unlike velocity, pressure isn't directly obtained from a conservation law that leads to an evolution equation.
*   **Interdependence:** Velocity influences pressure (through continuity) and pressure influences velocity (through momentum).

---

### 3. Introduction to the SIMPLE Algorithm (CO4: K2)

The SIMPLE algorithm, developed by Patankar and Spalding (1972), is an iterative procedure to solve the coupled pressure-velocity problem in incompressible flow. It's a **pressure-correction** method.

**Core Idea:**
1.  Guess an initial pressure field ($p^*$).
2.  Solve the discretized momentum equations using this guessed pressure field to obtain an intermediate velocity field ($u^*$, $v^*$). This intermediate velocity field generally does not satisfy the continuity equation.
3.  Derive a pressure correction equation ($p'$) that, when applied to the intermediate pressure, yields a corrected pressure ($p = p^* + p'$) and a corrected velocity ($u = u^* + u'$, $v = v^* + v'$) that *does* satisfy continuity.
4.  Update the velocities using the pressure correction.
5.  Repeat steps 2-4 until convergence is achieved (both momentum and continuity are satisfied).

**Textbook Reference:** Patankar (2017) provides a foundational explanation of this algorithm.

---

### 4. The Steps of the SIMPLE Algorithm

Let's break down the steps, referencing the FVM discretization. Consider a control volume (CV) surrounding a node P.

**Step 1: Guess Pressure ($p^*$) and Solve Momentum Equations**

*   Discretize the momentum equations for u and v using FVM for each control volume.
*   Assume a guessed pressure field ($p^*$).
*   The discretized momentum equations will have the form:
    *   For u: $a_P^u u_P = \sum a_{nb}^u u_{nb} + \sum b_C^u \Delta p_x$ (where $\Delta p_x$ are pressure differences across faces) $+ S_u$
    *   For v: $a_P^v v_P = \sum a_{nb}^v v_{nb} + \sum b_C^v \Delta p_y$ (where $\Delta p_y$ are pressure differences across faces) $+ S_v$
*   These equations can be written in a general form:
    $L(u^*) = -\frac{1}{\rho} (\nabla p^*)_d + \text{other terms}$
    $L(v^*) = -\frac{1}{\rho} (\nabla p^*)_d + \text{other terms}$
    where $L$ represents the discretized convective and diffusive terms, and $(\nabla p^*)_d$ is the discretized pressure gradient.
*   Solving these gives an intermediate velocity field ($u^*$, $v^*$) which is **not** divergence-free.

**Step 2: Derive the Pressure Correction Equation**

*   The actual velocity and pressure fields are related by:
    $u = u^* + u'$
    $v = v^* + v'$
    $p = p^* + p'$
*   Substitute these into the discretized momentum equations. The starred terms should satisfy the momentum equations with the guessed pressure. So, we get:
    $L(u^*+u') = -\frac{1}{\rho} (\nabla (p^*+p'))_d + \text{other terms}$
    $L(v^*+v') = -\frac{1}{\rho} (\nabla (p^*+p'))_d + \text{other terms}$
*   Now, let's look at the continuity equation: $\nabla \cdot \mathbf{u} = 0$.
    $\nabla \cdot (\mathbf{u}^* + \mathbf{u}') = 0$
    $\nabla \cdot \mathbf{u}^* + \nabla \cdot \mathbf{u}' = 0$
*   The intermediate velocity field $\mathbf{u}^*$ does not satisfy continuity, so $\nabla \cdot \mathbf{u}^* \neq 0$.
*   We want the corrected velocity $\mathbf{u}$ to satisfy continuity, so we need to determine $\mathbf{u}'$ such that $\nabla \cdot \mathbf{u}' = - \nabla \cdot \mathbf{u}^*$.
*   How do we relate $\mathbf{u}'$ to the pressure correction $p'$?
    Consider the momentum equation for the *corrected* velocity:
    $L(u) = -\frac{1}{\rho} \nabla p + \dots$
    Substitute $u = u^* + u'$ and $p = p^* + p'$:
    $L(u^* + u') = -\frac{1}{\rho} \nabla (p^* + p') + \dots$
    If we approximate $L(u^*+u') \approx L(u^*)$ and $L(v^*+v') \approx L(v^*)$ (this is a key approximation in SIMPLE), then:
    $L(u^*) \approx -\frac{1}{\rho} (\nabla p^*)_d + \dots$
    $L(v^*) \approx -\frac{1}{\rho} (\nabla p^*)_d + \dots$
    Substituting these back:
    $(-\frac{1}{\rho} (\nabla p^*)_d + \dots) + L(u') \approx (-\frac{1}{\rho} (\nabla p^*)_d - \frac{1}{\rho} (\nabla p')_d) + \dots$
    $L(u') \approx -\frac{1}{\rho} (\nabla p')_d$
    $L(v') \approx -\frac{1}{\rho} (\nabla p')_d$
*   This implies that the velocity correction ($u'$, $v'$) is driven by the pressure correction gradient ($\nabla p'$).
*   We can write the approximate relationship between velocity correction and pressure correction as:
    $u' \approx \frac{1}{\rho} (\nabla p')_d$ (This is a simplified representation; in FVM, it's more involved, relating face fluxes to pressure differences).
    $v' \approx \frac{1}{\rho} (\nabla p')_d$
*   Now, substitute these expressions for $u'$ and $v'$ into the continuity constraint for the corrections:
    $\nabla \cdot \mathbf{u}' = - \nabla \cdot \mathbf{u}^*$
    $\nabla \cdot \left( \frac{1}{\rho} (\nabla p')_d \right) = - \nabla \cdot \mathbf{u}^*$
*   This is a Poisson equation for the pressure correction $p'$.
    $\nabla^2 p' = \rho \nabla \cdot \mathbf{u}^*$ (simplified form)

**Step 3: Solve the Pressure Correction Equation**

*   Discretize the pressure correction equation (the Poisson equation derived above) for each control volume. This will involve pressure correction values ($p'$) at neighboring nodes and the divergence of the intermediate velocity field ($\nabla \cdot \mathbf{u}^*$) within each CV.
*   The discretized form will look like:
    $\sum A_{nb}^{p'} p'_{nb} + A_P^{p'} p'_P = B_P$
    where $A_{nb}^{p'}$ and $A_P^{p'}$ depend on the coefficients from the discretized momentum equations and discretization scheme, and $B_P$ depends on the divergence of the intermediate velocity.
*   Solve this system of linear equations to obtain the pressure correction field ($p'$).

**Step 4: Update Velocity and Pressure**

*   Once $p'$ is known, update the velocity and pressure fields:
    $p = p^* + p'$
    $u = u^* + u'$
    $v = v^* + v'$
*   Crucially, the relationship between $u'$ and $p'$ derived in Step 2 is used to calculate $u'$ and $v'$. In FVM, $u'$ is related to the pressure difference across the faces bounding the control volume, and these pressure differences are derived from the pressure correction values at nodes.
    For instance, the corrected velocity at a face $f$ would be:
    $u_f = u_f^* + u'_f$
    where $u'_f$ is related to the pressure correction difference across the face.

**Step 5: Iteration**

*   The updated pressure and velocity fields become the new guessed fields ($p^*$ and $\mathbf{u}^*$) for the next iteration.
*   Repeat steps 1-4 until the continuity and momentum equations are satisfied to within a specified tolerance.

**Important Point:** The relationship between velocity correction ($u'$) and pressure correction ($p'$) is crucial and requires careful discretization to ensure consistency with the momentum equations. Patankar (2017) details this through the concept of "pressure-velocity coupling coefficients."

---

### 5. The SIMPLE Algorithm Variations (SIMPLEC, SIMPLER)

*   **SIMPLE:** The basic algorithm. It can be slow to converge, especially for high Reynolds number flows. The approximation of neglecting the $L(u')$ and $L(v')$ terms in step 2 can lead to under-relaxation.
*   **SIMPLER (SIMPLE Revised):** Introduced by Patankar (1979), this algorithm is considered more robust. It directly calculates velocities from the corrected pressure, and then calculates the pressure correction from the continuity equation. This avoids the explicit calculation of velocity correction terms ($u', v'$).
*   **SIMPLEC (SIMPLE Consistent):** Developed by Van Doormaal and Raithby (1984), it corrects the pressure correction equation to improve its accuracy and stability, particularly for convection-dominated flows. It addresses some of the approximations made in SIMPLE.

**Key Concept:** These variations aim to improve the accuracy and convergence rate of the pressure-velocity coupling.

---

### 6. Discretization for FVM (CO3: K3)

Let's consider how the SIMPLE algorithm is implemented in FVM, using the concepts from Versteeg & Malalasekera (2008) and Anderson Jr. (2012).

**Control Volume:** Consider a control volume surrounding a node P.
**Faces:** The CV has faces: East (e), West (w), North (n), South (s).
**Velocity at Faces:** For FVM, we need face fluxes (e.g., $F_e = \rho u_e A_e$). The velocities $u_e, u_w, v_n, v_s$ are typically interpolated from the nodal values.

**Momentum Equation Discretization (Example: x-momentum):**
The discretized form of the x-momentum equation for node P typically looks like:
$\sum_{f} (\rho \mathbf{u} \cdot \mathbf{A})_f u_f - \sum_{f} (\Gamma \nabla u \cdot \mathbf{A})_f = \sum_f (p \mathbf{n})_f \cdot \mathbf{A}_f + S_u$
where $\Gamma$ is the diffusion coefficient.

**Pressure Correction Equation Discretization:**
The pressure correction equation is derived from the continuity equation. For a control volume, the discretized continuity equation for the intermediate velocity is:
$\sum_f (\rho \mathbf{u}^* \cdot \mathbf{A})_f = D_P^*$
where $D_P^*$ is the net mass flux into the CV from the intermediate velocity field. For continuity to be satisfied, $D_P^*$ must be zero.

The corrected velocity at a face $f$ is $u_f = u_f^* + u'_f$. The flux is $(\rho \mathbf{u} \cdot \mathbf{A})_f = (\rho \mathbf{u}^* \cdot \mathbf{A})_f + (\rho \mathbf{u}' \cdot \mathbf{A})_f$.
The continuity equation for the corrected velocity:
$\sum_f (\rho \mathbf{u}^* \cdot \mathbf{A})_f + \sum_f (\rho \mathbf{u}' \cdot \mathbf{A})_f = 0$
$D_P^* + \sum_f (\rho \mathbf{u}' \cdot \mathbf{A})_f = 0$

The term $\mathbf{u}' \cdot \mathbf{A}$ represents the mass flux correction. Based on the approximate momentum equation for $u'$ ($u' \approx \frac{1}{\rho} (\nabla p')_d$), we can relate the mass flux correction at a face to the pressure correction difference across the faces of the CV.
For example, if $P$ is connected to neighbor $E$ by a face, and $p'$ is the pressure correction at $P$ and $p'_E$ is at $E$, then the velocity correction at the face between $P$ and $E$ ($u'_e$) is proportional to $(p'_P - p'_E)$.
$\rho u'_e A_e \propto (p'_P - p'_E)$

This leads to a discretized pressure correction equation of the form:
$A_P^{p'} p'_P + \sum_{nb} A_{nb}^{p'} p'_{nb} = B_P$
where $A_{nb}^{p'}$ are coefficients related to the velocity fluxes derived from pressure differences, and $B_P$ is related to the divergence of the intermediate velocity field.

**Example Application:** Consider a 2D channel flow where the pressure is specified at the inlet and outlet, and the velocity is zero at the walls. The SIMPLE algorithm would be applied iteratively to solve for the velocity and pressure fields in this channel.

---

### 7. Implementation Considerations and Practice Questions

**Important Points to Remember:**

*   **Under-relaxation:** Often, the updated velocity and pressure are under-relaxed (e.g., $u_{new} = \alpha u_{old} + (1-\alpha) u_{iter}$) to improve stability, especially for the intermediate velocity and pressure correction. $\alpha$ is typically between 0.5 and 0.8.
*   **Mesh Dependency:** The accuracy and convergence of the SIMPLE algorithm are highly dependent on the grid resolution and quality.
*   **Boundary Conditions:** Correctly imposing boundary conditions for velocity and pressure (or pressure correction) is vital.
*   **Initialization:** A good initial guess for pressure and velocity can significantly speed up convergence.
*   **Convergence Criteria:** Define appropriate criteria for convergence, usually based on the residual of the continuity and momentum equations.

---

### Practice Questions and Exercises

**Question 1 (Conceptual):**
Why is direct simultaneous solution of the Navier-Stokes equations for pressure and velocity difficult in incompressible flow? (CO1: K2)

**Answer:** In incompressible flow, there is no independent equation governing the pressure evolution. Pressure acts as a Lagrange multiplier to enforce the continuity equation (divergence-free velocity field). This tight coupling means that changes in pressure affect velocity and vice versa, but without an explicit pressure equation, a direct solution is not straightforward.

**Question 2 (Conceptual):**
Explain the fundamental idea behind the SIMPLE algorithm. (CO4: K2)

**Answer:** The SIMPLE algorithm is a pressure-correction method. It involves guessing an initial pressure field, solving the momentum equations to get an intermediate velocity field (which doesn't satisfy continuity), deriving a pressure correction equation from the continuity requirement and the momentum equation's pressure-velocity relationship, solving this correction equation, and then updating the pressure and velocity. This process is iterated until convergence.

**Question 3 (Application - Sketch):**
Consider a 2D grid with nodes P, E (East of P), and W (West of P). The pressure correction values at these nodes are $p'_P$, $p'_E$, and $p'_W$. If the velocity correction ($u'$) at the face between P and E is proportional to $(p'_P - p'_E)$, and the velocity correction ($u'$) at the face between W and P is proportional to $(p'_W - p'_P)$, how would these velocity corrections contribute to the continuity equation for the control volume centered at P? (CO3: K3)

**Answer:** Let $\Delta x_e$ be the distance between P and E, and $\Delta x_w$ be the distance between W and P. Let $A$ be the face area.
From the continuity equation for the CV at P, the net flux must be zero:
$\rho u'_e A - \rho u'_w A = 0$ (simplified, ignoring other fluxes)
Using the proportionality:
$\rho k (p'_P - p'_E) A - \rho k (p'_W - p'_P) A = 0$ (where $k$ is a proportionality constant)
$k (p'_P - p'_E) - k (p'_W - p'_P) = 0$
$k p'_P - k p'_E - k p'_W + k p'_P = 0$
$2k p'_P - k p'_E - k p'_W = 0$
This shows how pressure corrections at neighboring nodes influence the pressure correction at the central node P to satisfy continuity. This forms the basis of the discretized pressure correction equation.

**Question 4 (Implementation Detail):**
What is under-relaxation and why is it often used in the SIMPLE algorithm? (CO4: K2)

**Answer:** Under-relaxation involves taking a weighted average of the old and new values when updating a variable, rather than fully accepting the new value. For example, $u_{new} = \alpha u_{old} + (1-\alpha) u_{calculated}$, where $\alpha < 1$. It is used to dampen oscillations and improve the stability of the iterative process, especially when dealing with strong convection or stiffness in the equations. In SIMPLE, it's often applied to the velocity and pressure correction steps.

**Question 5 (Problem Solving - Conceptual):**
Consider a steady, laminar flow in a driven cavity. The SIMPLE algorithm would be used to solve the Navier-Stokes equations. Describe the typical boundary conditions you would apply for velocity and pressure, and how the algorithm would proceed to find the solution. (CO1: K2, CO5: K3)

**Answer:**
*   **Boundary Conditions:**
    *   **Velocity:** No-slip condition at all solid walls (u=0, v=0). For the driven cavity, one wall (e.g., the top wall) would have a specified non-zero velocity (e.g., u=U, v=0).
    *   **Pressure:** At the inlet, pressure might be specified (e.g., $p=p_{inlet}$). At the outlet, a zero gradient for pressure is often assumed ($\partial p / \partial n = 0$), or a fixed pressure is specified. For a closed cavity with no inlet/outlet in the usual sense, pressure boundary conditions are trickier. Often, a reference pressure is set at one point (e.g., $p=0$ at the center), or the pressure correction is set to zero at the walls to avoid singularity in the pressure correction equation.

*   **Algorithm Proceeding:**
    1.  Initialize pressure ($p^*$) and velocity ($u^*, v^*$) fields (e.g., zero velocity, uniform pressure).
    2.  Solve momentum equations for $u^*$ and $v^*$ using $p^*$.
    3.  Calculate the divergence of $u^*$ and $v^*$ for each CV.
    4.  Formulate and solve the pressure correction ($p'$) equation to ensure that the corrected velocities satisfy continuity.
    5.  Update pressure $p = p^* + p'$ and velocities $u = u^* + u'$, $v = v^* + v'$ using the relationships derived from the momentum equations.
    6.  Under-relax the updated $u, v, p$ if necessary.
    7.  Repeat steps 2-6 until the residuals of momentum and continuity equations are below a specified tolerance.

---

This concludes the detailed notes on the SIMPLE algorithm for pressure-velocity coupling in steady flows. Remember to consult the provided textbooks for deeper insights and mathematical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
