---
title: "Pressure correction methods."
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 4: Finite volume method for steady"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463443"
status: "completed"
scrapedAt: "2026-05-20T17:58:23.919Z"
---
# Computational Fluid Dynamics: Module 4 - Finite Volume Method for Steady Flow

## Topic: Pressure Correction Methods

**Module Learning Outcomes:**

*   Understand the challenges in solving the coupled Navier-Stokes equations.
*   Describe the need for pressure correction methods.
*   Explain the principles of pressure-velocity coupling.
*   Detail the SIMPLE algorithm and its variants (SIMPLER, SIMPLEC).
*   Apply pressure correction methods to solve steady-state fluid flow problems.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Understanding the governing equations of fluid flow is foundational to understanding why pressure correction is necessary.
*   **CO2 (K3):** While this module focuses on FVM, understanding the need for iterative solutions and handling coupled equations relates to finite difference approaches for PDEs.
*   **CO3 (K3):** Pressure correction methods are a core technique for applying FVM to fluid flow problems.
*   **CO4 (K2):** Pressure correction methods are a specific solution technique for convection-diffusion equations, particularly when pressure is involved.
*   **CO5 (K3):** Successful application of pressure correction methods leads to results that can be interpreted graphically.

---

### 1. Introduction to Pressure-Velocity Coupling

#### 1.1 Governing Equations for Fluid Flow (Recap)

The fundamental equations governing fluid flow are the **Navier-Stokes equations**. For incompressible, steady-state flow, these are:

*   **Momentum Equations:**
    $\rho \left( \mathbf{u} \cdot \nabla \right) \mathbf{u} = -\nabla p + \nabla \cdot \boldsymbol{\tau} + \mathbf{f}$
    where:
    *   $\rho$ is the fluid density.
    *   $\mathbf{u}$ is the velocity vector.
    *   $p$ is the pressure.
    *   $\boldsymbol{\tau}$ is the viscous stress tensor.
    *   $\mathbf{f}$ represents body forces.

*   **Continuity Equation:**
    $\nabla \cdot \mathbf{u} = 0$
    This equation expresses the conservation of mass.

#### 1.2 The Challenge: Lack of Explicit Pressure Equation

*   The momentum equations contain the pressure gradient ($\nabla p$).
*   The continuity equation provides a constraint on the velocity field but does *not* provide an explicit equation to solve for pressure.
*   This creates a **pressure-velocity coupling problem**: velocity influences pressure through the continuity equation, and pressure influences velocity through the momentum equation.

#### 1.3 Why Pressure Correction is Needed

Solving the Navier-Stokes equations directly is difficult due to this coupling. Iterative methods are typically employed. A common approach is to:

1.  **Guess** a pressure field.
2.  Solve the momentum equations using this pressure field to obtain a **predicted velocity field**.
3.  The predicted velocity field may **not satisfy** the continuity equation.
4.  Introduce a **pressure correction** to adjust the pressure and velocity fields so that the continuity equation is satisfied.

This iterative process refines both the pressure and velocity fields until they satisfy both the momentum and continuity equations.

**Key Concept:** Pressure correction methods are iterative algorithms designed to achieve pressure-velocity coupling by enforcing the continuity equation.

---

### 2. The SIMPLE Algorithm (Semi-Implicit Method for Pressure Linked Equations)

The SIMPLE algorithm, developed by Patankar and Spalding, is a foundational pressure correction method. It's based on the idea of decoupling the pressure and velocity calculations within an iterative step.

#### 2.1 Algorithm Steps (Simplified Overview)

1.  **Guess Pressure Field ($p^*$):** Initialize a pressure field ($p^*$) throughout the domain.
2.  **Solve Momentum Equations:** Solve the discretized momentum equations using the current pressure field ($p^*$) to obtain a provisional velocity field ($\mathbf{u}^*$).
    *   The velocity components are typically related to the pressure gradient using discretized approximations derived from the FVM.
    *   For example, a discretized momentum equation for the x-component might look like:
        $a_P u_P = \sum_{nb} a_{nb} u_{nb} + D_P (p_W - p_E) + S_u$
        where $a_P$ and $a_{nb}$ are coefficients from discretization, $u_P$ and $u_{nb}$ are velocities at cell center and neighbor, $D_P$ is a coefficient related to the pressure gradient across the face, and $S_u$ is a source term.
3.  **Generate Pressure Correction Equation:**
    *   Relate the pressure correction ($p'$) to the velocity correction ($u'$). This relationship is derived from the momentum equations.
    *   The pressure correction ($p'$) is assumed to be related to the velocity correction ($u'$) by:
        $u' = K p'$ (where K is a coefficient derived from the discretized momentum equation)
    *   Substitute this relationship into the continuity equation:
        $\nabla \cdot \mathbf{u} = \nabla \cdot (\mathbf{u}^* + \mathbf{u}') = 0$
        $\nabla \cdot \mathbf{u}^* + \nabla \cdot \mathbf{u}' = 0$
        $\nabla \cdot \mathbf{u}^* + \nabla \cdot (K p') = 0$
    *   This leads to a Poisson-like equation for the pressure correction ($p'$). The discretized form of this equation is solved.
4.  **Correct Pressure and Velocity:**
    *   Update the pressure: $p = p^* + \alpha_p p'$ (where $\alpha_p$ is an under-relaxation factor, typically 0.7-1.0).
    *   Update the velocity using the pressure correction: $u = u^* + K p'$.
5.  **Check Continuity:** Evaluate the continuity equation for the corrected velocity field. If it's not satisfied within a certain tolerance, repeat from step 2 with the corrected pressure.
6.  **Iterate:** Repeat the entire process until convergence is achieved (i.e., both momentum and continuity equations are satisfied to a predefined tolerance).

#### 2.2 Key Components of SIMPLE

*   **Discretization:** The FVM is used to discretize the governing equations, leading to a system of algebraic equations.
*   **Pressure-Velocity Coupling:** The core of SIMPLE is the explicit way it handles the interdependence of pressure and velocity.
*   **Pressure Correction Equation:** A separate equation derived to enforce continuity by correcting the pressure.
*   **Under-Relaxation:** Used to stabilize the iterative process, especially for the pressure correction.

#### 2.3 Finite Volume Implementation of SIMPLE

**For a control volume 'P' with neighbors 'nb'**:

1.  **Momentum Discretization:**
    The discretized momentum equation for velocity component $u$ at cell $P$ often takes the form:
    $a_P u_P = \sum_{nb} a_{nb} u_{nb} + \sum_{f} A_f (p_W - p_E) + Q$
    where $A_f$ is the face area, $(p_W - p_E)$ is the pressure difference across the face.

2.  **Pressure Correction Relationship:**
    The velocity correction at a face ($u'_{f}$) is related to the pressure correction at the neighboring cells ($p'$) by:
    $u'_{f} \approx b_f p'_{f}$
    where $b_f$ is a coefficient determined by the momentum equation discretization.

3.  **Continuity Equation:**
    The continuity equation at cell $P$ is:
    $\sum_{f} A_f u_f = 0$
    Substituting the corrected velocities ($u_f = u_f^* + u'_f$):
    $\sum_{f} A_f (u_f^* + u'_f) = 0$
    $\sum_{f} A_f u_f^* + \sum_{f} A_f u'_f = 0$

4.  **Pressure Correction Equation (Discretized):**
    Using $u'_f \approx b_f p'_f$ and assuming $p'_f$ is approximated by the pressure corrections of the adjacent cells (e.g., $p'_P$ for a face on the right boundary of cell P), the equation becomes:
    $\sum_{f} A_f u_f^* + \sum_{f} A_f b_f p'_P = 0$ (simplified, in reality involves $p'_P$ and $p'_{nb}$)
    This results in an equation of the form:
    $a_P^{pc} p'_P = \sum_{nb} a_{nb}^{pc} p'_{nb} + B_P$
    where $a_P^{pc}$, $a_{nb}^{pc}$, and $B_P$ are coefficients derived from the discretization of the continuity equation and the momentum-based velocity correction relation. This is a Poisson-like equation for $p'$.

5.  **Velocity Correction:**
    The velocity correction for each cell face is then calculated:
    $u'_f = b_f p'_P$ (for the face on the right of cell P)
    $u'_f = b_f p'_{nb}$ (for the face on the left of cell P)

6.  **Update Velocities:**
    $u_P = u_P^* + \sum_{f} A_f u'_{f}$ (summing contributions of velocity corrections on faces bounding cell P)

**Reference:** Patankar (2017) extensively details the derivation and implementation of SIMPLE. Anderson Jr. (2012) also provides a good overview.

---

### 3. Variants of SIMPLE

#### 3.1 SIMPLER (SIMPLE Revised)

*   **Motivation:** SIMPLER was developed to improve the convergence and stability of SIMPLE.
*   **Key Differences:**
    *   **Pressure-Velocity Coupling:** SIMPLER makes a stronger link between the pressure gradient term in the momentum equations and the velocity.
    *   **Pressure Correction Equation:** The equation for pressure correction in SIMPLER is derived differently, often leading to a more robust solution. It directly uses a velocity-based continuity constraint.
    *   **Velocity Prediction:** The velocity field ($u^*$) is predicted using the pressure field, and then a pressure correction ($p'$) is computed based on this velocity field. The pressure correction is then used to correct the velocity.
    *   **Improved Velocity Correction:** The velocity correction is directly linked to the pressure correction in a way that's more consistent with the discretized momentum equations.

#### 3.2 SIMPLEC (SIMPLE Consistent)

*   **Motivation:** SIMPLEC aims to improve the accuracy and convergence of SIMPLE by reducing the explicit dependence of pressure correction on the velocity-correction velocity terms, which can lead to errors.
*   **Key Differences:**
    *   **Pressure Correction Equation Formulation:** SIMPLEC reformulates the pressure correction equation to be more consistent with the discretization of the momentum equations. It aims to better approximate the actual pressure-velocity coupling.
    *   **Reduced Error:** By making the pressure correction equation more consistent, SIMPLEC tends to reduce the "discretization error" introduced by the SIMPLE algorithm's approximations, leading to potentially faster convergence and more accurate results, especially for convection-dominated flows.
    *   **Under-Relaxation:** Often requires less aggressive under-relaxation than SIMPLE.

**Reference:** Versteeg & Malalasekera (2008) provide detailed comparisons and derivations of these algorithms.

---

### 4. Application to Finite Volume Method

#### 4.1 Solving the Pressure Correction Equation

The pressure correction equation derived from the continuity and momentum equations in FVM is a linear system of equations:

$a_P^{pc} p'_P = \sum_{nb} a_{nb}^{pc} p'_{nb} + B_P$

This system can be solved using iterative methods like:

*   **Gauss-Seidel:** Updates each $p'$ value using the most recently computed values.
*   **SOR (Successive Over-Relaxation):** An accelerated version of Gauss-Seidel.
*   **Conjugate Gradient (CG) and its variants (e.g., BiCGSTAB):** More advanced iterative solvers suitable for sparse matrices.

The solution of this pressure correction equation is a critical step in each iteration of the pressure-velocity coupling algorithm.

#### 4.2 Example: 2D Lid-Driven Cavity Flow

**Problem Description:** A square cavity with a moving lid (top wall). The fluid inside is driven by the motion of the lid. We need to find the steady-state velocity and pressure fields.

**FVM Setup:**

*   **Grid:** Discretize the cavity into a grid of control volumes (cells).
*   **Variables:** Store velocity components ($u, v$) and pressure ($p$) at the center of each control volume.
*   **Boundary Conditions:**
    *   Lid: $u = U_{lid}$, $v = 0$.
    *   Walls: $u = 0$, $v = 0$.
    *   Inlet/Outlet (if applicable): Specified pressure or velocity.

**Algorithm Steps (SIMPLE applied to Lid-Driven Cavity):**

1.  **Initialization:**
    *   Guess initial pressure $p^*$ for all cells.
    *   Guess initial velocity $u^*$ and $v^*$ for all cells (often zero, or from a previous iteration).
2.  **Momentum Solution (Pressure Predictor):**
    *   For each cell $P$, solve the discretized momentum equations for $u^*$ and $v^*$ using the current $p^*$. The pressure gradient terms $(\nabla p^*)$ are used here.
    *   The discretization on each face will account for the pressure difference.
3.  **Pressure Correction Equation (Continuity Enforcer):**
    *   Derive the pressure correction equation for each cell $P$ based on the continuity equation and the relationship between velocity correction ($u', v'$) and pressure correction ($p'$).
    *   The terms in the pressure correction equation involve the fluxes of the predicted velocity field ($u^*, v^*$) across cell faces and coefficients relating velocity correction to pressure correction.
    *   For example, on a face between cell P and cell E, the continuity flux is $u_{f}^*$. The velocity correction at this face $u'_{f}$ will depend on $p'_P$ and $p'_E$.
    *   Solve the resulting linear system for $p'$.
4.  **Correction Application:**
    *   **Pressure Correction:** Update pressure: $p = p^* + \alpha_p p'$.
    *   **Velocity Correction:** Update velocities for each cell based on the pressure correction. For a face between cell P and cell E, the velocity correction $u'_f$ is calculated and then used to update the cell velocities.
    *   $u_P = u_P^* + \dots$ (incorporating velocity corrections from faces)
    *   $v_P = v_P^* + \dots$ (incorporating velocity corrections from faces)
5.  **Iteration:**
    *   Check for convergence by evaluating the sum of absolute values of continuity residuals across all cells.
    *   If not converged, set $p^* = p$, $u^* = u$, $v^* = v$ and go back to step 2.
    *   If converged, output the final $u, v, p$ fields.

**Important Note:** The exact form of the coefficients in the pressure correction equation ($a^{pc}, b^{pc}$) depends on the specific discretization scheme used for the momentum equations (e.g., Upwind, Central Differencing, QUICK).

---

### 5. Practice Questions and Exercises

**Question 1:** Explain the fundamental problem of pressure-velocity coupling in solving the Navier-Stokes equations for incompressible flow. (CO1, K2)

**Answer:** The Navier-Stokes equations for incompressible flow consist of momentum equations and a continuity equation. While the momentum equations explicitly contain the pressure gradient, the continuity equation provides a constraint on the velocity field but lacks an explicit equation for pressure itself. This creates a coupling: pressure affects velocity through the momentum equations, and the velocity field must satisfy the continuity equation, which implicitly constrains the pressure. Solving these equations iteratively requires a mechanism to enforce this coupling, which is where pressure correction methods like SIMPLE are used.

**Question 2:** Briefly describe the main steps of the SIMPLE algorithm. (CO3, K3)

**Answer:**
1.  Guess a pressure field ($p^*$).
2.  Solve momentum equations to get a provisional velocity field ($u^*$).
3.  Derive and solve a pressure correction equation ($p'$) based on the continuity equation.
4.  Correct the pressure ($p = p^* + \alpha_p p'$) and velocity ($u = u^* + u'$).
5.  Repeat until convergence.

**Question 3:** What is the primary goal of the pressure correction equation in pressure-velocity coupling algorithms? (CO4, K2)

**Answer:** The primary goal of the pressure correction equation is to enforce the conservation of mass (the continuity equation) by adjusting the pressure field. It ensures that the corrected velocity field satisfies $\nabla \cdot \mathbf{u} = 0$.

**Question 4:** Differentiate between SIMPLE, SIMPLER, and SIMPLEC based on their primary improvements. (CO4, K2)

**Answer:**
*   **SIMPLE:** The foundational algorithm.
*   **SIMPLER:** Aims for improved convergence and stability by reformulating the pressure-velocity link and the pressure correction equation, often leading to a more direct and robust procedure.
*   **SIMPLEC:** Focuses on reducing discretization errors in the pressure correction equation by making it more consistent with the momentum discretizations, potentially leading to higher accuracy and faster convergence.

**Question 5:** Consider a 1D steady-state flow in a control volume with a flux across the left face ($F_W$) and a flux across the right face ($F_E$). The continuity equation for this volume is $F_E - F_W = 0$. If the velocity at the right face ($u_e$) is related to the pressure correction at the cell center ($p'$) by $u_e = b_e p'$, and the velocity at the left face ($u_w$) is related by $u_w = b_w p'$, and the predicted velocities are $u_e^*$ and $u_w^*$, write down the continuity equation in terms of corrections. (CO3, K3)

**Answer:**
The continuity equation is:
$A_e u_e - A_w u_w = 0$ (where A are face areas, assuming $A_e=A_w=A$)
Substituting corrected velocities ($u_e = u_e^* + u'_e$, $u_w = u_w^* + u'_w$):
$A(u_e^* + u'_e) - A(u_w^* + u'_w) = 0$
$A u_e^* - A u_w^* + A u'_e - A u'_w = 0$
Using $u'_e = b_e p'$ and $u'_w = b_w p'$:
$A u_e^* - A u_w^* + A b_e p' - A b_w p' = 0$
Rearranging to form a pressure correction equation:
$A(b_e - b_w) p' = A(u_w^* - u_e^*)$
This is a simple form of the pressure correction equation for 1D flow. In 2D or 3D, it becomes a Poisson-like equation with sums over faces.

---

### 6. Important Points to Remember

*   **Pressure is a Poisson Equation Driver:** While there's no explicit pressure equation, the continuity equation, coupled with the momentum equations, leads to a Poisson-type equation for pressure or pressure correction.
*   **Iterative Nature:** Pressure correction methods are inherently iterative, requiring multiple sweeps through the domain to achieve a converged solution.
*   **Under-Relaxation is Crucial:** For stability, especially in SIMPLE, under-relaxation factors are often used for pressure and sometimes velocity updates.
*   **Accuracy vs. Convergence:** Different variants (SIMPLER, SIMPLEC) offer trade-offs between computational cost, convergence speed, and solution accuracy.
*   **FVM and Discretization:** The specific form of the pressure correction equation in FVM depends critically on how the momentum and continuity equations are discretized and how velocities and pressures are interpolated onto cell faces.
*   **Non-Orthogonal Grids:** Handling pressure-velocity coupling on non-orthogonal grids adds further complexity to the discretization.
*   **Application:** These methods are widely used for solving incompressible or low-speed compressible flows in various engineering applications.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. References

*   **Anderson Jr., John D.** (2012). *Computational Fluid Dynamics*. McGraw-Hill Book Company.
*   **Patankar, S. V.** (2017). *Numerical Heat Transfer and Fluid Flow*. McGraw-Hill. (Highly recommended for detailed derivations of SIMPLE).
*   **Versteeg, H., & Malalasekera, W.** (2008). *An Introduction to Computational Fluid Dynamics: The Finite Volume Method* (2nd ed.). Pearson. (Excellent resource for FVM implementation of SIMPLE and its variants).
*   **Date, Anil W.** (2005). *Introduction to Computational Fluid Dynamics*. Cambridge University Press.
*   **Sastry, S. S.** (2012). *Introductory Methods to Numerical Analysis*. PHI Learning Private Ltd.
*   **Venkatesh, S. P.** (2009). *Heat Transfer*. Ane Books Pvt Ltd. (May provide context on related transport phenomena).

---
This concludes the study notes for Pressure Correction Methods in Module 4. Remember to practice the derivations and understand the iterative process to effectively apply these techniques.