---
title: "Introduction to SIMPLE algorithm for incompressible flows."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 4: Introduction to Finite volume method."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464381"
status: "completed"
scrapedAt: "2026-05-20T18:10:44.305Z"
---
# Module 4: Introduction to Finite Volume Method
## Topic: Introduction to SIMPLE Algorithm for Incompressible Flows

This module introduces the Finite Volume Method (FVM) and focuses on the SIMPLE (Semi-Implicit Method for Pressure Linked Equations) algorithm, a widely used technique for solving incompressible fluid flow and heat transfer problems.

---

### 1. Learning Outcomes Covered

*   **Understanding the Governing Equations (CO1, K2):** We'll briefly revisit the governing equations for incompressible flows, which form the basis for the SIMPLE algorithm.
*   **Partial Differential Equations (PDEs) and Classification (CO2, K2):** While not directly the focus, understanding the nature of the Navier-Stokes equations (a set of coupled PDEs) is crucial.
*   **Familiarity with FVM (CO3, K1):** The SIMPLE algorithm is built upon the FVM framework, so a foundational understanding of FVM is assumed and will be implicitly reinforced.
*   **Solving Systems of Linear Algebraic Equations (CO4, K2):** The SIMPLE algorithm involves solving a series of linear systems, making this outcome relevant.
*   **Solving Conduction Problems (CO5, K3):** While SIMPLE is for fluid flow, the iterative nature and discretization techniques have parallels with solving conduction problems, particularly in understanding stability and convergence.

---

### 2. Key Concepts and Definitions

*   **Incompressible Flow:** A flow where the density ($\rho$) is constant. While real fluids are compressible, many low-speed flows approximate incompressible behavior.
*   **Navier-Stokes Equations:** The fundamental equations governing the motion of viscous fluid substances. For incompressible, steady-state flow, they are:
    *   **Momentum Equations:**
        $$
        \rho (\mathbf{u} \cdot \nabla) \mathbf{u} = -\nabla p + \mu \nabla^2 \mathbf{u} + \mathbf{f}
        $$
        where:
        *   $\mathbf{u}$ is the velocity vector
        *   $p$ is the pressure
        *   $\rho$ is the density
        *   $\mu$ is the dynamic viscosity
        *   $\mathbf{f}$ represents body forces (e.g., gravity)
    *   **Continuity Equation (Mass Conservation):**
        $$
        \nabla \cdot \mathbf{u} = 0
        $$
        This equation ensures that mass is conserved for incompressible flow.
*   **Pressure-Velocity Coupling:** A central challenge in solving incompressible Navier-Stokes equations is the absence of an explicit equation for pressure. Pressure acts as a Lagrange multiplier to enforce the continuity constraint (i.e., ensuring $\nabla \cdot \mathbf{u} = 0$).
*   **Finite Volume Method (FVM):** A numerical method that discretizes the computational domain into a finite number of control volumes. The governing equations are integrated over each control volume, converting differential equations into algebraic equations.
    *   **Control Volume:** A small region of space that encloses a specific grid point or cell.
    *   **Fluxes:** The rate of transport of a quantity (e.g., mass, momentum, energy) across the faces of a control volume. FVM enforces conservation by ensuring that the net flux into a control volume equals the accumulation within it.
*   **SIMPLE Algorithm:** An iterative algorithm that addresses the pressure-velocity coupling problem in incompressible flows. It provides a way to obtain a pressure field that ensures mass conservation for the computed velocity field.
*   **Pseudo-Pressure:** In some variations or conceptualizations, an artificial pressure term might be introduced to facilitate the iterative solution process.
*   **Under-relaxation:** A technique used in iterative methods to improve stability and convergence by taking only a fraction of the computed change in a variable at each iteration.

---

### 3. The Challenge: Pressure-Velocity Coupling

The main difficulty in solving incompressible Navier-Stokes equations numerically is that pressure is not directly determined by any of the governing differential equations. The continuity equation ($\nabla \cdot \mathbf{u} = 0$) acts as a constraint that the velocity field must satisfy.

*   **Why it's difficult:** If we directly discretize the momentum equations and solve for velocity, there's no guarantee that the resulting velocity field will satisfy the continuity equation. If we treat pressure as known, we get a velocity field that doesn't conserve mass. If we try to solve for pressure independently, we don't have an explicit equation for it.

---

### 4. The SIMPLE Algorithm: An Overview

SIMPLE is an iterative procedure that allows us to calculate velocity and pressure simultaneously. The core idea is to:

1.  **Guess** an initial pressure field ($p^*$).
2.  **Solve** the discretized momentum equations using this guessed pressure to obtain a provisional velocity field ($\mathbf{u}^*$). This $\mathbf{u}^*$ generally *does not* satisfy the continuity equation.
3.  **Derive** a pressure correction equation from the continuity equation and the momentum equations to determine a pressure correction field ($p'$).
4.  **Correct** the pressure ($p = p^* + \alpha_p p'$) and velocity ($\mathbf{u} = \mathbf{u}^* + \mathbf{u}'$) fields.
5.  **Iterate** until convergence (i.e., until the continuity equation is satisfied and the changes in variables are small).

---

### 5. The SIMPLE Algorithm Steps (Discretized Form using FVM)

Let's consider a general control volume with a velocity field $\mathbf{u}$ and pressure $p$. The discretized momentum equation for the $x$-direction, for example, would look something like:

$$
a_P^u u_P = \sum_{nb} a_{nb}^u u_{nb} + (\Delta V) \frac{\partial p}{\partial x} + S_u
$$

where:
*   $u_P$ is the velocity component at the center of the control volume $P$.
*   $u_{nb}$ are velocities at neighboring control volumes.
*   $a_P^u$ and $a_{nb}^u$ are coefficients obtained from discretizing convection and diffusion terms.
*   $\Delta V$ is the volume of the control volume.
*   $\frac{\partial p}{\partial x}$ is the pressure gradient term.
*   $S_u$ is the source term.

**The SIMPLE Procedure:**

**Step 1: Guess Pressure Field ($p^*$)**
*   Start with an initial guess for the pressure field throughout the domain. This can be zero or a physically motivated guess.

**Step 2: Solve Momentum Equations to get Provisional Velocity ($\mathbf{u}^*$)**
*   Using the guessed pressure field $p^*$, solve the discretized momentum equations (for $u^*$, $v^*$, $w^*$) to obtain a provisional velocity field.
    $$
    a_P^u u^*_P = \sum_{nb} a_{nb}^u u^*_{nb} + (\Delta V) \frac{\partial p^*}{\partial x} + S_u
    $$
    (Similar equations for $v^*$ and $w^*$)
*   At this stage, the continuity equation $\nabla \cdot \mathbf{u}^* = 0$ is generally *not* satisfied.

**Step 3: Derive Pressure Correction Equation**
*   The provisional velocity field $\mathbf{u}^*$ has a mass imbalance. We want to find a velocity correction $\mathbf{u}'$ and pressure correction $p'$ such that the final velocity $\mathbf{u} = \mathbf{u}^* + \mathbf{u}'$ satisfies continuity:
    $$
    \nabla \cdot (\mathbf{u}^* + \mathbf{u}') = 0 \quad \Rightarrow \quad \nabla \cdot \mathbf{u}^* + \nabla \cdot \mathbf{u}' = 0
    $$
*   We also need a relationship between $\mathbf{u}'$ and $p'$. This relationship comes from a linearized form of the momentum equations where the pressure gradient is the primary driver of the velocity correction.
    *   Consider the momentum equation for the corrected velocity:
        $$
        \rho (\mathbf{u} \cdot \nabla) \mathbf{u} = -\nabla p + \mu \nabla^2 \mathbf{u} + \mathbf{f}
        $$
    *   Substitute $\mathbf{u} = \mathbf{u}^* + \mathbf{u}'$ and $p = p^* + p'$:
        $$
        \rho ((\mathbf{u}^*+\mathbf{u}') \cdot \nabla) (\mathbf{u}^*+\mathbf{u}') = -\nabla (p^* + p') + \mu \nabla^2 (\mathbf{u}^*+\mathbf{u}') + \mathbf{f}
        $$
    *   Neglecting higher-order terms (products of corrections, e.g., $\mathbf{u}' \cdot \nabla \mathbf{u}^*$, $\mathbf{u}^* \cdot \nabla \mathbf{u}'$, $\nabla^2 \mathbf{u}'$, and assuming the $\mathbf{u}^*$ field is a reasonable approximation of the final velocity for deriving the correction):
        $$
        \rho (\mathbf{u}^* \cdot \nabla) \mathbf{u}^* + \rho (\mathbf{u}' \cdot \nabla) \mathbf{u}^* + \rho (\mathbf{u}^* \cdot \nabla) \mathbf{u}' \approx -\nabla p^* - \nabla p' + \mu \nabla^2 \mathbf{u}^* + \mu \nabla^2 \mathbf{u}' + \mathbf{f}
        $$
    *   We know that $\mathbf{u}^*$ was obtained from the momentum equation with $p^*$:
        $$
        \rho (\mathbf{u}^* \cdot \nabla) \mathbf{u}^* = -\nabla p^* + \mu \nabla^2 \mathbf{u}^* + \mathbf{f}
        $$
    *   Subtracting this from the previous equation, and neglecting terms that are small compared to the pressure correction term driving the velocity correction:
        $$
        \rho (\mathbf{u}' \cdot \nabla) \mathbf{u}^* + \rho (\mathbf{u}^* \cdot \nabla) \mathbf{u}' \approx -\nabla p' + \mu \nabla^2 \mathbf{u}'
        $$
    *   For SIMPLE, a common simplification is to assume that the convection and diffusion of the correction velocity are relatively small or can be approximated using the properties of $\mathbf{u}^*$. The key is that the pressure correction $p'$ is responsible for correcting the mass imbalance caused by $\mathbf{u}^*$. A simplified relationship is often used, connecting $\mathbf{u}'$ directly to the pressure gradient:
        $$
        \mathbf{u}' \approx -M \nabla p'
        $$
        where $M$ is related to the coefficients of the discretized momentum equations. In practice, this relationship is derived from the discretized momentum equation by isolating the velocity correction term. For instance, if the discretized momentum equation for $u^*$ is:
        $$
        u^*_P = \sum_{nb} A_{nb}^u u^*_{nb} + B^u p'_x + C^u
        $$
        Then, the pressure correction equation will be derived by substituting a similar form for $u'$ into the continuity equation.
*   **The Pressure Correction Equation:** By substituting the expression for $\mathbf{u}'$ (derived from the discretized momentum equations, relating velocity correction to pressure correction) into the continuity equation $\nabla \cdot \mathbf{u}' = -\nabla \cdot \mathbf{u}^*$, we obtain a Poisson-like equation for the pressure correction $p'$.
    $$
    \nabla^2 p' = \frac{1}{\Delta t} \nabla \cdot \mathbf{u}^* \quad \text{(or similar form depending on discretization and time dependence)}
    $$
    In SIMPLE, this is derived more rigorously by discretizing and substituting:
    $$
    \sum_{f} \dot{m}'_f = -\sum_{f} \dot{m}^*_f
    $$
    where $\dot{m}'_f$ and $\dot{m}^*_f$ are the mass fluxes of correction velocity and provisional velocity across face $f$, respectively. The mass flux $\dot{m}'_f$ is related to the pressure correction at the cell centers. This leads to a system of algebraic equations for $p'$:
    $$
    \sum_{nb} a_{nb}^{p'} p'_{nb} = (\Delta V) \nabla \cdot \mathbf{u}^*
    $$
    where $a_{nb}^{p'}$ are coefficients that depend on the discretized momentum equations.

**Step 4: Solve for Pressure Correction ($p'$)**
*   Solve the discretized pressure correction equation obtained in Step 3 to get the pressure correction field $p'$. This is typically a large, sparse, linear system that can be solved using methods discussed in Module 4 (e.g., Gauss-Seidel, SOR, conjugate gradient, TDMA for 1D cases).

**Step 5: Correct Pressure and Velocity**
*   Update the pressure field:
    $$
    p = p^* + \alpha_p p'
    $$
    where $\alpha_p$ is the pressure under-relaxation factor (typically $0.5 \le \alpha_p \le 0.8$).
*   Calculate the velocity correction $\mathbf{u}'$ using the pressure correction $p'$. The relationship is derived from the discretized momentum equations. For instance, for the $u$-velocity component at face $f$:
    $$
    u'_f = K_f \left(\frac{\partial p'}{\partial x}\right)_f
    $$
    where $K_f$ represents the coefficients from the discretized momentum equation.
*   Update the velocity field:
    $$
    \mathbf{u} = \mathbf{u}^* + \mathbf{u}'
    $$
    The velocity is corrected to satisfy continuity more closely.

**Step 6: Solve for Other Variables (e.g., Temperature, Scalars)**
*   If solving for other variables like temperature, solve their discretized transport equations using the updated velocity field.

**Step 7: Iterate**
*   Go back to Step 2 with the updated pressure field $p$ and repeat the process until the solution converges. Convergence is typically checked by monitoring the mass imbalance (residual of the continuity equation) and the changes in velocity and pressure between iterations.

---

### 6. Implementation Details and Variations

*   **Discretization:** The specific form of the coefficients $a_{nb}^{p'}$ and the relationship between $\mathbf{u}'$ and $p'$ depend heavily on the discretization schemes used for convection and diffusion terms (e.g., Upwind, Central Differencing, Hybrid, Power-Law) and the staggered grid or collocated grid arrangement.
*   **Collocated vs. Staggered Grids:**
    *   **Staggered Grid:** Velocity components are stored at the faces of the control volume, while pressure is stored at the center. This avoids the "checkerboard" pressure oscillation problem. SIMPLE was originally developed for staggered grids (Patankar, 1980).
    *   **Collocated Grid:** Velocity components and pressure are stored at the same grid points (centers of control volumes). This simplifies grid generation but requires special discretization schemes for pressure gradients to avoid checkerboard oscillations (e.g., Rhie-Chow interpolation).
*   **SIMPLEC (SIMPLE-Consistent):** A variant of SIMPLE that modifies the pressure correction equation to improve convergence, especially in situations with strong convection.
*   **PISO (Pressure Implicit with Splitting of Operators):** Another algorithm for pressure-velocity coupling, often more accurate for transient flows due to its explicit treatment of pressure gradients.
*   **Under-relaxation:** Crucial for stability. Common under-relaxation factors are used for pressure ($p$) and velocity ($u, v, w$).
    $$
    p^{k+1} = p^k + \alpha_p p'^k
    $$
    $$
    \mathbf{u}^{k+1} = \mathbf{u}^* + \alpha_u \mathbf{u}'^k
    $$
    where $k$ denotes the iteration number. $\alpha_u$ is usually close to 1.

---

### 7. Examples and Applications

The SIMPLE algorithm is widely used for:

*   **Laminar and Turbulent Flows:** In channels, boundary layers, wakes, jets.
*   **Heat Transfer Problems:** Coupled with temperature transport equations in natural and forced convection.
*   **Aerodynamics:** Flow around airfoils and vehicles.
*   **Civil Engineering:** Flow in pipes, rivers, and buildings.

**Example Scenario: Flow in a Driven Cavity**

Consider a 2D square cavity with one wall moving tangentially, driving the fluid inside.

1.  **Discretization:** Divide the cavity into a grid of control volumes.
2.  **Initial Guess:** Set $p^* = 0$ and initial velocities (e.g., $u^*=0, v^*=0$).
3.  **Momentum Solve:** Solve the discretized $u$ and $v$ momentum equations using $p^*$. This yields $u^*$ and $v^*$ which are likely zero or non-conserving.
4.  **Pressure Correction:** Derive and solve the pressure correction equation based on the mass imbalance from $u^*$ and $v^*$.
5.  **Correction:** Update $p = p^* + \alpha_p p'$ and $\mathbf{u} = \mathbf{u}^* + \mathbf{u}'$.
6.  **Iteration:** Repeat until the residual of continuity equation is small and velocity/pressure fields stabilize.

---

### 8. Practice Questions and Exercises

**Question 1:** What is the primary challenge in solving incompressible Navier-Stokes equations numerically, and how does the SIMPLE algorithm address it?

**Answer:** The primary challenge is the pressure-velocity coupling. There's no explicit equation for pressure, and it acts as a constraint to ensure mass conservation. SIMPLE addresses this by iteratively guessing pressure, computing velocity, deriving a pressure correction based on mass imbalance, and correcting both pressure and velocity until continuity is satisfied.

**Question 2:** Describe the role of the pressure correction ($p'$) in the SIMPLE algorithm.

**Answer:** The pressure correction ($p'$) is a field that, when added to the guessed pressure ($p^*$), corrects the provisional velocity field ($\mathbf{u}^*$) such that the resulting velocity field ($\mathbf{u}$) satisfies the continuity equation ($\nabla \cdot \mathbf{u} = 0$).

**Question 3:** Briefly outline the main steps of the SIMPLE algorithm.

**Answer:**
1.  Guess pressure ($p^*$).
2.  Solve momentum equations to get provisional velocity ($\mathbf{u}^*$).
3.  Derive and solve the pressure correction equation based on mass imbalance of $\mathbf{u}^*$.
4.  Correct pressure ($p = p^* + \alpha_p p'$) and velocity ($\mathbf{u} = \mathbf{u}^* + \mathbf{u}'$).
5.  Iterate until convergence.

**Question 4 (Conceptual):** Why is under-relaxation important in the SIMPLE algorithm?

**Answer:** Under-relaxation helps to stabilize the iterative process. By taking only a fraction of the calculated change in pressure (and sometimes velocity), it prevents oscillations and divergence, leading to a more robust convergence to the solution, especially for complex flows.

---

### 9. Important Points to Remember

*   **Pressure-Velocity Coupling is Key:** SIMPLE is designed to handle this inherent difficulty in incompressible flow.
*   **Iterative Nature:** SIMPLE is an iterative method; it doesn't provide a direct solution.
*   **Convergence:** Convergence requires careful selection of under-relaxation factors and convergence criteria.
*   **Discretization Matters:** The specific formulation of pressure correction and velocity correction depends on the FVM discretization schemes used.
*   **Mass Conservation is the Goal:** The algorithm aims to produce a velocity field that satisfies the continuity equation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 10. References and Further Reading

*   **Patankar, Suhas V. (2017). *Numerical Heat Transfer and Fluid Flow*. CRC Press.** This is a foundational text and the origin of the SIMPLE algorithm.
*   **Versteg, H., & Malalasekera, W. (2007). *An Introduction to Computational Fluid Dynamics: The Finite Volume Method*. Pearson India.** Provides excellent coverage of FVM and introduces algorithms like SIMPLE.
*   **Anderson Jr, John D., & Wendt, John. (1995). *Computational Fluid Dynamics*. McGraw-Hill.** Offers a broader perspective on CFD, including the role of pressure-velocity coupling algorithms.
*   **Sastry, S. S. (2012). *Introductory Methods to Numerical Analysis*. PHI Learning Pvt. Ltd.** While more focused on general numerical methods, it can provide background on solving linear systems, relevant to the pressure correction step.

---

This concludes the introduction to the SIMPLE algorithm for incompressible flows within the context of the Finite Volume Method. The next steps in your learning would involve understanding the detailed derivation of the pressure correction equation for specific discretization schemes and grid arrangements.