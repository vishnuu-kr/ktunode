---
title: "Staggered grid."
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 4: Finite volume method for steady"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463442"
status: "completed"
scrapedAt: "2026-05-20T17:58:23.184Z"
---
## Computational Fluid Dynamics: Module 4 - Finite Volume Method for Steady Flows

### Topic: Staggered Grid

---

### 1. Introduction to Staggered Grids

The Finite Volume Method (FVM) is a numerical method used to solve partial differential equations, particularly those arising in fluid dynamics and heat transfer. A crucial aspect of FVM implementation is the discretization of the computational domain into control volumes. The choice of how variables (like velocity and pressure) are located within these control volumes significantly impacts the accuracy and stability of the solution. This is where the concept of a **staggered grid** becomes paramount.

**What is a Staggered Grid?**

A staggered grid is a discretization scheme where different dependent variables are stored at different locations within a computational cell. In the context of fluid flow, this typically means that velocity components are stored at the **faces** of the control volumes, while scalar quantities like pressure are stored at the **centers** of the control volumes.

**Contrast with Collocated Grid:**

In a **collocated grid**, all dependent variables are stored at the same location, usually the center of the control volume. While simpler to implement initially, collocated grids often suffer from numerical instabilities, particularly the **checkerboard pressure oscillation** problem, when solving Navier-Stokes equations.

**Why Staggered Grids?**

The primary motivation for using staggered grids is to ensure **consistent and accurate discretization of flux terms** and to **avoid pressure oscillations**. This is directly linked to the underlying physics of fluid flow where pressure gradients drive velocity changes, and velocities are integrated over faces to obtain fluxes.

---

### 2. The Need for Staggered Grids in Fluid Flow

**Understanding the Problem:**

When discretizing the Navier-Stokes equations, especially the momentum equation, we encounter terms involving pressure gradients ($\nabla p$) and convection ($u \cdot \nabla u$). Similarly, the continuity equation involves divergence of velocity ($\nabla \cdot \mathbf{u}$).

Consider a simple control volume for a 1D flow along the x-axis. The momentum equation in x-direction might look like:

$\frac{\partial (\rho u)}{\partial t} + \frac{\partial (\rho u^2)}{\partial x} = -\frac{\partial p}{\partial x} + \frac{\partial}{\partial x} \left(\mu \frac{\partial u}{\partial x}\right) + S_u$

If both pressure ($p$) and velocity ($u$) are stored at the cell centers ($P$), discretizing the pressure gradient term $\frac{\partial p}{\partial x}$ would involve averaging pressure values at adjacent cell centers. This can lead to inaccurate representation of the pressure force, especially when the pressure field is oscillatory.

**The Checkerboard Pressure Oscillation Problem:**

In a collocated grid, the pressure at a cell center is calculated based on the momentum equations of neighboring cells. If the pressure field develops an alternating pattern (checkerboard), the pressure gradient calculated between adjacent cell centers can be zero or very small, leading to spurious oscillations in the velocity field. This instability makes it difficult to obtain a converged and physically meaningful solution.

**How Staggered Grids Solve This:**

The staggered grid arrangement naturally enforces the coupling between pressure and velocity in a way that avoids these oscillations.

*   **Pressure Gradient:** The pressure gradient term, $\frac{\partial p}{\partial x}$, is evaluated at the location where the velocity component is stored (e.g., on the cell face). This means the pressure difference is taken between the centers of adjacent control volumes, which is the most natural way to represent the pressure force acting on the fluid within a control volume.

*   **Continuity Equation:** The continuity equation, which expresses conservation of mass, involves the divergence of the velocity field. In a staggered grid, the velocity components (e.g., $u$ and $v$) are stored at the faces. This allows for a direct and accurate evaluation of the flux of mass across each face of a control volume. The sum of these fluxes across all faces of a control volume must be zero for the continuity equation to be satisfied.

---

### 3. Implementation of Staggered Grids (Patankar's Scheme)

The most widely recognized staggered grid formulation is due to S.V. Patankar, as detailed in his seminal book "Numerical Heat Transfer and Fluid Flow." Patankar's scheme, often referred to as the **"staggered grid"** or **"IPCS" (Implicit Pressure-Correction) scheme for pressure-velocity coupling**, involves the following:

**3.1. Two-Dimensional Staggered Grid Layout**

In a 2D Cartesian coordinate system, for a typical control volume $P$, with center coordinates $(x_P, y_P)$, its neighbors are denoted as:

*   $E$: East neighbor (center $(x_E, y_P)$)
*   $W$: West neighbor (center $(x_W, y_P)$)
*   $N$: North neighbor (center $(x_P, y_N)$)
*   $S$: South neighbor (center $(x_P, y_S)$)

In a **staggered grid**:

*   **Pressure ($p$)** is stored at the **center** of the control volume $P$.
*   **Velocity components** are stored at the **faces** of the control volume:
    *   **x-velocity ($u$)** is stored at the **vertical faces**:
        *   $u_{e}$ is stored at the east face (center $(x_E, y_P)$).
        *   $u_{w}$ is stored at the west face (center $(x_W, y_P)$).
    *   **y-velocity ($v$)** is stored at the **horizontal faces**:
        *   $v_{n}$ is stored at the north face (center $(x_P, y_N)$).
        *   $v_{s}$ is stored at the south face (center $(x_P, y_S)$).

**Visualization:**

Imagine a grid of points. Pressure nodes are at the intersections of grid lines. Velocity nodes are located halfway between pressure nodes, on the grid lines.

```
      ^ y
      |
  v_n *-------* u_e -------*
      |       |           |
      |   P   |           |
  v_s *-------* u_w -------*
      |       |           |
      +-------------------> x
```

*   `P` represents the pressure node at the center of a control volume.
*   `u_e` and `u_w` are x-velocity nodes on the vertical faces.
*   `v_n` and `v_s` are y-velocity nodes on the horizontal faces.

**3.2. Discretization of Governing Equations**

Let's consider a control volume centered at $P$.

**a) Momentum Equations:**

*   **x-momentum:** When discretizing the x-momentum equation, the pressure gradient term $\frac{\partial p}{\partial x}$ is evaluated at the face where the x-velocity is stored. For example, at the east face ($e$), the pressure gradient is approximated as $(p_E - p_P) / \Delta x_e$, where $p_E$ is the pressure at the center of the east cell and $p_P$ is the pressure at the center of the current cell.
    *   This requires interpolating pressure values from cell centers to cell faces. A common interpolation scheme is **linear interpolation**.

    *   **Example (1D):**
        Consider two adjacent cells with centers $P$ and $E$. The face between them is at $x_e$.
        $p_e \approx \frac{p_P + p_E}{2}$ (linear interpolation)
        $\frac{\partial p}{\partial x} \bigg|_e \approx \frac{p_e - p_P}{\Delta x_e} \approx \frac{(p_E - p_P)/2 - p_P}{\Delta x_e}$  (This is a simplified view, typically the difference is directly taken between centers of adjacent cells).
        A more precise discrete form at face $e$: $\frac{\partial p}{\partial x} \bigg|_e \approx \frac{p_E - p_P}{\Delta x_{Pe}}$, where $\Delta x_{Pe}$ is the distance between the centers of cell $P$ and cell $E$.

*   **Convection and Diffusion Terms:** These terms are discretized using FVM principles, integrating the fluxes over the control volume faces. The velocities needed for these fluxes are naturally available at the faces where they are stored.

**b) Continuity Equation:**

The continuity equation for a control volume is expressed in terms of mass fluxes across its faces. For a 2D rectangular cell, the continuity equation is:

$\frac{\partial (\rho u)}{\partial x} + \frac{\partial (\rho v)}{\partial y} = 0$

In discrete form, this translates to the balance of mass flowing into and out of the control volume. The mass flux across a face is the product of density, velocity, and the area of the face.

*   **Mass flux across the East face:** $(\rho u)_e \cdot A_e = (\rho u)_e \Delta y$
*   **Mass flux across the West face:** $(\rho u)_w \cdot A_w = (\rho u)_w \Delta y$
*   **Mass flux across the North face:** $(\rho v)_n \cdot A_n = (\rho v)_n \Delta x$
*   **Mass flux across the South face:** $(\rho v)_s \cdot A_s = (\rho v)_s \Delta x$

The discretized continuity equation at cell $P$ becomes:

$(\rho u)_e \Delta y - (\rho u)_w \Delta y + (\rho v)_n \Delta x - (\rho v)_s \Delta x = 0$

Crucially, the velocities $u_e, u_w, v_n, v_s$ are already defined at the faces where these fluxes occur. This directly uses the staggered grid property.

**3.3. Pressure-Velocity Coupling: The SIMPLE Algorithm (and its variants)**

The main challenge with staggered grids is how to derive a solvable equation for pressure. The continuity equation does not explicitly contain pressure. Patankar's work led to algorithms like SIMPLE (Semi-Implicit Method for Pressure Linked Equations), SIMPLER, SIMPLEC, etc.

The core idea is to:

1.  **Guess a Pressure Field ($p^*$):** Start with an initial guess for the pressure distribution.
2.  **Solve Momentum Equations:** Using this guessed pressure field, solve the discretized momentum equations for velocity components ($u^*, v^*$). These velocities will not satisfy the continuity equation.
3.  **Derive a Pressure Correction Equation:** Relate a pressure correction ($p'$) to a velocity correction ($u', v'$). The pressure correction is such that when added to the guessed pressure ($p = p^* + p'$), the resulting velocity ($u = u^* + u'$, $v = v^* + v'$) satisfies the continuity equation. This typically involves substituting the velocity correction expressions (derived from linearized momentum equations) into the continuity equation, resulting in a Poisson-like equation for $p'$.
4.  **Update Pressure and Velocity:** Solve the pressure correction equation for $p'$ and update the pressure ($p = p^* + p'$) and velocities ($u = u^* + u'$, $v = v^* + v'$).
5.  **Iterate:** Repeat steps 2-4 until convergence is achieved (i.e., both momentum and continuity equations are satisfied to a desired tolerance).

**Key Feature of Staggered Grids in SIMPLE:**

The pressure correction ($p'$) is calculated at the **cell centers**. The velocity corrections are then determined from this pressure correction, and these velocity corrections are applied to the velocities stored at the **cell faces**. This ensures consistency.

---

### 4. Advantages of Staggered Grids

*   **Eliminates Checkerboard Pressure Oscillations:** This is the most significant advantage, leading to more stable and robust solutions, especially for incompressible flows.
*   **Accurate Flux Discretization:** The natural placement of velocities at faces aligns with the FVM principle of conserving fluxes across boundaries.
*   **Improved Accuracy:** Generally leads to more accurate results for velocity and pressure fields compared to collocated grids without special stabilization techniques.
*   **Robustness:** The method is less prone to divergence during the iterative solution process.

---

### 5. Disadvantages of Staggered Grids

*   **Increased Complexity in Implementation:** Requires careful management of variable storage locations and interpolation schemes. For each control volume, you need to store pressure at the center and velocities at the surrounding faces.
*   **Need for Interpolation:** Pressure values need to be interpolated from cell centers to cell faces to evaluate pressure gradients.
*   **Not Trivial to Implement on Unstructured Grids:** While conceptually clear on structured grids, implementing staggered grids on complex unstructured meshes can be more involved.

---

### 6. Learning Outcomes Addressed

*   **CO1 (Governing Equations):** Understanding the need for staggered grids stems from the form of the Navier-Stokes equations (pressure gradient in momentum, velocity divergence in continuity).
*   **CO2 (Finite Difference Methods):** Although FVM is used, the core idea of discretizing derivatives is shared with FDM. Staggered grids are a way to improve FDM/FVM discretization.
*   **CO3 (FVM for 1D/2D):** The explanation and examples directly illustrate how FVM is applied with a staggered grid in 2D.
*   **CO4 (Solution Techniques for Convection-Diffusion):** Staggered grids are a precursor to developing algorithms like SIMPLE, which are used to solve convection-diffusion-dominated equations where pressure-velocity coupling is key.
*   **CO5 (Interpreting Graphical Results):** While this topic focuses on implementation, the improved stability and accuracy from staggered grids lead to more reliable and physically interpretable results.

---

### 7. Key Concepts and Definitions

*   **Control Volume:** A small region of the computational domain over which conservation laws are applied.
*   **Collocated Grid:** All variables stored at the same location (usually cell center).
*   **Staggered Grid:** Different variables stored at different locations (e.g., pressure at center, velocity at faces).
*   **Checkerboard Pressure Oscillation:** Spurious alternating pressure pattern on a collocated grid leading to instability.
*   **Flux:** The rate of transport of a quantity across a surface.
*   **Pressure Gradient:** The rate of change of pressure with respect to position.
*   **SIMPLE Algorithm:** An iterative procedure for solving pressure-velocity coupled equations.
*   **Linear Interpolation:** A method to estimate a value between two known points.

---

### 8. Important Points to Remember

*   The primary benefit of staggered grids is the **elimination of checkerboard pressure oscillations**.
*   In 2D, pressure is typically stored at the cell **center**, while u-velocity is at **vertical faces** and v-velocity is at **horizontal faces**.
*   The **continuity equation** is the basis for deriving the pressure correction equation, which is crucial for pressure-velocity coupling.
*   The **SIMPLE algorithm** and its variants are built around the staggered grid concept for solving incompressible flow problems.
*   While more complex to implement, staggered grids offer significantly **improved numerical stability and accuracy**.

---

### 9. Practice Questions and Exercises

**Question 1:**

Explain the "checkerboard pressure oscillation" problem and why it arises in collocated grids for solving Navier-Stokes equations.

**Answer:**
The checkerboard pressure oscillation arises in collocated grids because the pressure gradient term in the momentum equation is discretized using pressure values at adjacent cell centers. If the pressure field develops an alternating pattern (high, low, high, low), the pressure difference between adjacent centers can become zero or very small, leading to zero or very small pressure forces. This results in spurious, oscillating velocities that do not satisfy the continuity equation, causing numerical instability.

**Question 2:**

Describe the typical arrangement of variables in a 2D staggered grid for fluid flow problems.

**Answer:**
In a 2D staggered grid, pressure ($p$) is typically stored at the **center** of the control volume. The velocity components are stored at the faces: the x-velocity ($u$) is stored at the **vertical faces** of the control volume, and the y-velocity ($v$) is stored at the **horizontal faces**.

**Question 3:**

How does the staggered grid arrangement naturally improve the discretization of the continuity equation?

**Answer:**
The continuity equation states that the net rate of mass flow into a control volume is zero (for incompressible steady flow). This is expressed as the divergence of the velocity field. In a staggered grid, the velocity components ($u, v$) are stored at the faces where the flux occurs. This means that the discrete representation of the continuity equation, which sums the mass fluxes across each face, directly uses these face-located velocities, leading to a natural and accurate discretization of mass conservation.

**Question 4:**

Consider a 1D control volume with cell center P and its neighbors W and E. The velocity $u$ is stored at the faces, and pressure $p$ at the centers. Write down the discretized form of the pressure gradient term $\frac{\partial p}{\partial x}$ at the face between P and E.

**Answer:**
Let the face between P and E be denoted by 'e'. The discretized form of the pressure gradient at face 'e' is approximated by the difference in pressure between the centers of the adjacent cells, divided by the distance between these centers:

$\frac{\partial p}{\partial x} \bigg|_e \approx \frac{p_E - p_P}{\Delta x_{PE}}$

where $p_E$ is the pressure at cell center E, $p_P$ is the pressure at cell center P, and $\Delta x_{PE}$ is the distance between the centers of cell P and cell E.

**Question 5 (Conceptual):**

Why is a separate algorithm like SIMPLE necessary to solve for pressure when using a staggered grid, even though velocity and pressure are coupled?

**Answer:**
Although velocity and pressure are coupled in the Navier-Stokes equations, the continuity equation for incompressible flow does not directly involve pressure. The momentum equations provide relationships between pressure gradients and velocities. When discretizing, the pressure gradient term influences velocities. However, to ensure that the *solved* velocities satisfy continuity, an explicit step is needed to enforce this constraint. Algorithms like SIMPLE use the continuity equation, along with linearized momentum equations, to derive an equation that can be solved for a pressure correction, which then drives the velocity corrections to satisfy continuity. The staggered grid structure facilitates this process by ensuring accurate flux calculations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 10. References and Further Reading

*   **Computational Fluid Dynamics by John D Anderson Jr:** Provides a good introduction to FVM and its applications.
*   **Numerical Heat Transfer and Fluid Flow by S V Patankar:** This is the foundational text for staggered grids and the SIMPLE algorithm. Highly recommended for deep understanding.
*   **An Introduction to Computational Fluid Dynamics: The Finite Volume Method by H. Versteeg, W. Malalasekera:** Offers clear explanations of FVM principles, including discussions on grid types.
*   **Introduction to computational fluid dynamics by Anil W. Date:** May offer alternative perspectives or additional examples.

---

This comprehensive set of notes covers the fundamental aspects of staggered grids in the context of the Finite Volume Method for steady flows, addressing the learning outcomes and providing a strong foundation for understanding advanced CFD techniques.