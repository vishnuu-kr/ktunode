---
title: "Introduction to finite volume method."
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 3: Introduction to finite volume method."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463437"
status: "completed"
scrapedAt: "2026-05-20T17:58:15.858Z"
---
# Computational Fluid Dynamics: Module 3 - Introduction to the Finite Volume Method

## 3.1 Introduction to Finite Volume Method (FVM)

This module introduces the Finite Volume Method (FVM), a widely used numerical technique for solving fluid flow and heat transfer problems governed by Partial Differential Equations (PDEs). We will explore its fundamental principles, how it differs from other methods like Finite Difference Method (FDM), and its advantages in handling complex geometries and conservation properties.

### Learning Outcomes:

*   Understand the core principles of the Finite Volume Method.
*   Appreciate the advantages of FVM for fluid flow and heat transfer problems.
*   Identify the steps involved in formulating and solving problems using FVM.
*   Relate FVM to the conservation laws of fluid mechanics.

### Course Outcomes Alignment:

*   **CO1 (K2):** Understand the governing equations of fluid flow and heat transfer. (FVM is a method to discretize and solve these equations).
*   **CO3 (K3):** Demonstrate the use of finite volume method for simple 1D/2D problems. (This module lays the groundwork for future applications).

### 3.1.1 What is the Finite Volume Method?

The Finite Volume Method (FVM) is a numerical method used to solve partial differential equations (PDEs). Unlike the Finite Difference Method (FDM), which approximates derivatives at discrete points, FVM **discretizes the computational domain into a finite number of control volumes (or cells)**. The governing equations are then integrated over each of these control volumes.

**Key Concept:** The fundamental idea behind FVM is to ensure that the **conservation principles** (mass, momentum, energy, etc.) are satisfied exactly in a discrete sense for each control volume. This makes FVM particularly well-suited for problems where conservation is paramount, such as fluid dynamics.

### 3.1.2 Advantages of FVM:

*   **Conservation:** FVM inherently conserves physical quantities (mass, momentum, energy) because the fluxes across the boundaries of control volumes are calculated and applied consistently. This is a significant advantage over FDM, which may not strictly enforce conservation unless special formulations are used. (Anderson Jr., 2012; Patankar, 2017)
*   **Geometric Flexibility:** FVM can easily handle complex geometries, including irregular shapes and non-uniform grids, by defining control volumes that conform to the boundaries. This is crucial for real-world engineering problems. (Versteeg & Malalasekera, 2008)
*   **Accuracy for Discontinuous Solutions:** FVM is robust in handling solutions with discontinuities, such as shock waves, because the integration over volumes smooths out localized sharp gradients.
*   **Foundation for Commercial Codes:** Many widely used commercial CFD software packages (e.g., ANSYS Fluent, STAR-CCM+) are based on the Finite Volume Method.

### 3.1.3 Comparison with Finite Difference Method (FDM):

| Feature         | Finite Difference Method (FDM)                                | Finite Volume Method (FVM)                                        |
| :-------------- | :------------------------------------------------------------ | :---------------------------------------------------------------- |
| **Discretization** | Approximates derivatives at discrete grid points.            | Integrates equations over discrete control volumes (cells).       |
| **Conservation** | Not inherently conserved unless special formulations are used. | Inherently conserved due to flux balance across control volumes.  |
| **Geometry**    | Primarily suited for regular, structured grids.               | Easily handles complex, unstructured grids and irregular geometries. |
| **Focus**       | Point-wise accuracy.                                          | Volume-wise conservation and accuracy.                            |
| **Application** | Simpler problems, heat conduction, potential flow.            | Fluid dynamics, heat transfer, complex flows.                     |

**(Reference: Anderson Jr., 2012; Versteeg & Malalasekera, 2008)**

### 3.1.4 Fundamental Steps in FVM:

1.  **Discretization of the Domain:** Divide the physical domain into a finite number of control volumes (cells). These volumes can be structured (e.g., hexahedrons, tetrahedrons) or unstructured.
2.  **Integration of Governing Equations:** Integrate the conservation equations (e.g., Navier-Stokes equations) over each control volume.
3.  **Approximation of Fluxes:** Approximate the fluxes of conserved quantities (e.g., mass, momentum, energy) across the boundaries of each control volume. This is a crucial step that requires interpolation schemes.
4.  **Assembly of Algebraic Equations:** Formulate a system of algebraic equations for each control volume, representing the discretized form of the governing PDEs.
5.  **Solution of Algebraic Equations:** Solve the resulting system of linear (or non-linear) algebraic equations using appropriate numerical methods.

### 3.1.5 Governing Equations and Conservation Laws (CO1 - K2):

FVM is particularly effective for solving the following governing equations, which express conservation principles:

*   **Continuity Equation (Conservation of Mass):**
    $$ \frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{u}) = 0 $$
    where:
    *   $\rho$ is density
    *   $t$ is time
    *   $\mathbf{u}$ is velocity vector

*   **Momentum Equation (Conservation of Momentum):**
    $$ \frac{\partial (\rho \mathbf{u})}{\partial t} + \nabla \cdot (\rho \mathbf{u} \mathbf{u}) = -\nabla p + \nabla \cdot \boldsymbol{\tau} + \mathbf{f} $$
    where:
    *   $p$ is pressure
    *   $\boldsymbol{\tau}$ is the viscous stress tensor
    *   $\mathbf{f}$ represents body forces

*   **Energy Equation (Conservation of Energy):**
    $$ \frac{\partial (\rho E)}{\partial t} + \nabla \cdot (\mathbf{u} (\rho E + p)) = \nabla \cdot (k \nabla T) + \nabla \cdot (\boldsymbol{\tau} \cdot \mathbf{u}) + \mathbf{f} \cdot \mathbf{u} $$
    where:
    *   $E$ is total energy per unit mass
    *   $k$ is thermal conductivity
    *   $T$ is temperature

**(Reference: Anderson Jr., 2012; Patankar, 2017)**

**Important Point:** The FVM approach ensures that the sum of fluxes into and out of a control volume equals the rate of change of the conserved quantity within that volume, thus maintaining conservation.

### 3.1.6 Control Volumes and Discretization:

The computational domain is divided into smaller regions called **control volumes (CVs)**. The most common approach is to consider a single CV for each grid point (node).

*   **Grid Point:** A point where the solution (e.g., velocity, pressure) is to be determined.
*   **Control Volume:** A region of space surrounding a grid point, over which the governing equations are integrated. The boundaries of the CV are typically halfway between adjacent grid points.

**Example (1D):**
Consider a 1D domain divided into $N$ grid points $x_1, x_2, \dots, x_N$.
The control volume associated with grid point $i$ (denoted as CV$_i$) would extend from the midpoint between $x_{i-1}$ and $x_i$ to the midpoint between $x_i$ and $x_{i+1}$.
$$ CV_i = [x_{i-1/2}, x_{i+1/2}] $$
where $x_{i-1/2} = (x_{i-1} + x_i)/2$ and $x_{i+1/2} = (x_i + x_{i+1})/2$.

**(Reference: Versteeg & Malalasekera, 2008)**

### 3.1.7 Fluxes and Interpolation:

A critical aspect of FVM is calculating the fluxes of conserved quantities across the faces of the control volumes. Since the governing equations are integrated over volumes, we need to approximate these fluxes at the control volume faces.

**Flux:** The rate at which a conserved quantity crosses a unit area. For a quantity $\phi$ transported by a velocity $\mathbf{u}$, the flux is often represented as $\rho \mathbf{u} \phi$.

**Interpolation Schemes:** To determine the value of a variable at a control volume face, interpolation from nodal values is required. Common schemes include:

*   **Upwind Scheme:** Assumes the value at the face is the same as the value in the upstream cell. This is robust but can be diffusive.
*   **Central Differencing Scheme:** Assumes the value at the face is the average of the values in the adjacent cells. This is less diffusive but can be unstable for high convection.
*   **Second-Order Upwind, QUICK, etc.:** More sophisticated schemes that provide higher accuracy.

**(Reference: Patankar, 2017; Versteeg & Malalasekera, 2008)**

### Practice Questions:

1.  **What is the fundamental difference between the Finite Difference Method and the Finite Volume Method in terms of how they discretize the domain and approximate governing equations?**
    *   **Answer:** FDM approximates derivatives at grid points, while FVM integrates equations over control volumes and approximates fluxes across their faces.

2.  **List at least three advantages of using the Finite Volume Method for computational fluid dynamics problems.**
    *   **Answer:** Conservation, geometric flexibility, robustness with discontinuities.

3.  **State the conservation principle represented by the continuity equation.**
    *   **Answer:** Conservation of Mass.

4.  **In a 1D FVM context, if grid points are located at $x_1, x_2, x_3$, what are the boundaries of the control volume associated with the grid point $x_2$?**
    *   **Answer:** The control volume for $x_2$ extends from $(x_1+x_2)/2$ to $(x_2+x_3)/2$.

### Summary of Important Points:

*   FVM discretizes the domain into control volumes.
*   Governing equations are integrated over these control volumes.
*   FVM ensures conservation of physical quantities.
*   It is highly suitable for fluid dynamics and complex geometries.
*   Approximating fluxes at control volume faces is a key step.

---

This introduction lays the foundation for understanding how the Finite Volume Method is applied. The subsequent sections in this module will delve deeper into the discretization process, flux approximation, and the formulation of algebraic equations for various types of PDEs relevant to CFD.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
