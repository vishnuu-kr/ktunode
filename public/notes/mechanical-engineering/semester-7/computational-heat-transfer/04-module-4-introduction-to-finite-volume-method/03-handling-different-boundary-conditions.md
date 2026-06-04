---
title: "Handling different boundary conditions."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 4: Introduction to Finite volume method."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446437f"
status: "completed"
scrapedAt: "2026-05-20T18:10:42.860Z"
---
# Computational Heat Transfer: Module 4 - Introduction to Finite Volume Method

## Topic: Handling Different Boundary Conditions

### 1. Introduction

The Finite Volume Method (FVM) is a numerical technique used to solve differential equations that describe physical phenomena, particularly in fluid flow and heat transfer. A key aspect of applying FVM to solve problems in a defined domain is the accurate incorporation of boundary conditions. Boundary conditions specify the values of the dependent variable or its derivatives at the boundaries of the computational domain. Incorrectly handling boundary conditions can lead to inaccurate solutions or even divergence of the numerical scheme.

This module focuses on how different types of boundary conditions are implemented within the FVM framework for heat transfer problems.

### 2. Governing Equations in FVM

Before delving into boundary conditions, it's essential to recall the general form of a conservation equation in FVM, which typically involves diffusion, convection, and source terms. For heat transfer, this could be Fourier's law for conduction and Newton's law of cooling for convection.

Consider a general conservation equation of the form:

$\frac{\partial}{\partial t}(\rho \phi) + \nabla \cdot (\rho \mathbf{u} \phi) = \nabla \cdot (\Gamma \nabla \phi) + S$

where:
*   $\phi$ is the conserved quantity (e.g., temperature, $T$).
*   $\rho$ is density.
*   $\mathbf{u}$ is velocity vector.
*   $\Gamma$ is the diffusion coefficient (e.g., thermal conductivity, $k$).
*   $S$ is the source term.

In FVM, this equation is integrated over a control volume (CV). For a steady-state problem, the transient term is zero.

### 3. Discretization and Flux Calculation

The core of FVM is the integration of the conservation equation over discrete control volumes. The domain is divided into a finite number of non-overlapping control volumes. The flux of the conserved quantity across the faces of these control volumes is calculated.

For a control volume $CV_P$ with center $P$, the integrated equation is:

$\sum_{f \in CV_P} \mathbf{F}_f \cdot \mathbf{A}_f = \int_{CV_P} S \, dV$

where $\mathbf{F}_f$ is the flux vector across face $f$, and $\mathbf{A}_f$ is the area vector of face $f$. The flux vector typically consists of convection and diffusion components:

$\mathbf{F}_f = \rho \mathbf{u}_f \phi_f - \Gamma \nabla \phi_f$

The challenge in FVM lies in calculating the value of $\phi$ ($\phi_f$) and its gradient ($\nabla \phi_f$) at the faces, which usually lie between the centers of adjacent control volumes. This requires **interpolation schemes** (e.g., Central Difference, Upwind, Quadratic Upstream Interpolation for Convective Kinetics - QUICK).

### 4. Handling Boundary Conditions

Boundary conditions are applied to the control volumes that lie on the physical boundaries of the domain. They influence the flux calculations at the faces that coincide with these boundaries.

**Key Concept:** Boundary conditions modify the flux terms at the boundary faces.

#### 4.1. Dirichlet Boundary Condition (Prescribed Value)

This condition specifies the value of the dependent variable ($\phi$) at the boundary. For heat transfer, this means specifying the temperature.

**Example:** $T = T_{wall}$ at the boundary.

**FVM Implementation:**
For a control volume $CV_P$ adjacent to a boundary face $f_b$, where the temperature is prescribed as $T_{boundary}$:

1.  **Flux Calculation at Boundary Face:** The flux across the boundary face $f_b$ is directly calculated using the prescribed value.
    *   **Convection:** If there is a convective flux component, $\rho \mathbf{u}_f \phi_f$, then $\phi_f$ is taken as $T_{boundary}$.
    *   **Diffusion:** For diffusion, the gradient is needed. If the face is on the boundary, we can assume the value at the face is the boundary value, $T_f = T_{boundary}$. The gradient calculation needs careful handling, often assuming the value of the adjacent internal node.

Let's consider a simple 1D conduction problem with a boundary face at $x=0$ where $T(0) = T_0$. The control volume $P$ is adjacent to this boundary face $f_b$. The flux from face $f_b$ into $P$ is:

$F_{f_b} = -k \frac{T_P - T_0}{\Delta x/2}$ (using a simple central difference approximation and assuming the value at the face is the average of $T_P$ and $T_0$, or more precisely, if $T_f = T_0$)

A common approach is to treat the boundary node $P$ as having its value fixed. However, in FVM, it's more about modifying the flux. For a boundary face $f_b$ with prescribed value $\phi_b$:

*   **Convection:** The convective flux across $f_b$ is $F_{conv, f_b} = \dot{m}_f \phi_b$, where $\dot{m}_f$ is the mass flow rate through the face.
*   **Diffusion:** The diffusive flux across $f_b$ is $F_{diff, f_b} = (\Gamma A)_f \frac{\phi_P - \phi_b}{\delta x_f}$, where $\delta x_f$ is the distance from $P$ to the face $f_b$.

The general discretized equation for node $P$ adjacent to the boundary face $f_b$ will have a term for the flux through $f_b$.

**Textbook Reference:** Patankar (2017) emphasizes that for a Dirichlet boundary condition, the unknown $\phi_P$ is replaced by the specified boundary value $\phi_b$ in the flux calculation.

**Example from Patankar (2017), Chapter 6:**
Consider a control volume adjacent to a boundary where $\phi = \phi_b$. The flux through this boundary face is computed using $\phi_b$. For diffusion, the flux across the face at distance $\delta$ from $P$ is $-(\Gamma A / \delta)(\phi_P - \phi_b)$.

#### 4.2. Neumann Boundary Condition (Prescribed Gradient)

This condition specifies the gradient of the dependent variable at the boundary. For heat transfer, this could be a specified heat flux or an adiabatic condition.

**Example 1: Prescribed Heat Flux**
$q''_{wall} = -k \frac{\partial T}{\partial n} = q_{boundary}$ at the boundary.

**FVM Implementation:**
The diffusive flux across the boundary face $f_b$ is directly determined by the prescribed gradient.

*   **Diffusion:** $F_{diff, f_b} = (\Gamma A)_f (\nabla \phi)_f$. If $(\nabla \phi)_f$ is prescribed (e.g., $\frac{\partial T}{\partial n} = \frac{q_{boundary}}{k}$), then the flux is directly known.
    $F_{diff, f_b} = A_f \times q_{boundary}$ (where $q_{boundary}$ is the heat flux per unit area).

Let's consider the 1D case again. At $x=0$, $\frac{\partial T}{\partial x} = G_0$.
The flux into the control volume $P$ from face $f_b$ is $F_{f_b} = -k A_f \frac{\partial T}{\partial x} = -k A_f G_0$. This term is added to the discretized equation for $P$.

**Example 2: Adiabatic Boundary Condition (Zero Flux)**
$\frac{\partial T}{\partial n} = 0$ at the boundary. This implies zero heat flux.

**FVM Implementation:**
The diffusive flux across the boundary face $f_b$ is zero.

*   **Diffusion:** $F_{diff, f_b} = 0$. This means no diffusive term is added to the discretized equation from this boundary face.

**Textbook Reference:** Veersteg & Malalasekra (2008) explain that for a Neumann boundary condition (prescribed flux), the flux contribution from the boundary face is added to the source term of the adjacent control volume.

**Example from Veersteg & Malalasekra (2008), Chapter 4:**
For a boundary face where the flux is $F_{boundary}$, the discretized equation for the adjacent node $P$ becomes:
$\sum_{f \in \text{internal faces}} (\text{fluxes}) + F_{boundary} = S_P \times V_P$

#### 4.3. Robin Boundary Condition (Convective Boundary Condition)

This condition combines aspects of both Dirichlet and Neumann conditions, typically involving a heat transfer coefficient.

**Example:** Newton's Law of Cooling: $-k \frac{\partial T}{\partial n} = h (T - T_{fluid})$ at the boundary.

**FVM Implementation:**
The flux across the boundary face $f_b$ has both a convective and a diffusive part that needs to be expressed in terms of the adjacent node's value ($T_P$).

*   **Total Flux:** $F_{total, f_b} = -(\Gamma A)_f \frac{\partial T}{\partial n} = -k A_f \frac{\partial T}{\partial n}$
    Substituting the Robin condition: $F_{total, f_b} = A_f h (T_f - T_{fluid})$.
*   **Interpolation:** To relate $T_f$ to $T_P$, we use an interpolation scheme. A common one is to assume $T_f \approx T_P$ (if the face is assumed to have the same temperature as the adjacent node).
    Then, $F_{total, f_b} = A_f h (T_P - T_{fluid})$.

This flux is then added to the discretized equation for node $P$. This effectively adds a diffusion-like term and a source term to the equation for $P$:

$a_P T_P - \sum_{nb} a_{nb} T_{nb} = Q_P$

The boundary flux $A_f h (T_P - T_{fluid})$ can be rewritten as:
$(A_f h) T_P - (A_f h) T_{fluid}$

This term is incorporated into the discretized equation of node $P$. The coefficient $a_P$ associated with $T_P$ will increase by $A_f h$, and a new source term contribution of $-A_f h T_{fluid}$ will be added to $Q_P$.

**Textbook Reference:** Veersteg & Malalasekra (2008) discuss the Robin condition by expressing the flux at the boundary face in terms of the temperature of the adjacent control volume and the fluid temperature, thus contributing to both the coefficient and the source term.

**Example from Veersteg & Malalasekra (2008), Chapter 4:**
For a boundary face with a heat transfer coefficient $h$ and external fluid temperature $T_\infty$, the flux is $h A (T_P - T_\infty)$. This flux is added to the equation for $P$. The term $h A T_P$ is incorporated into the $a_P$ coefficient, and $-h A T_\infty$ becomes part of the source term.

#### 4.4. Mixed Boundary Conditions

It's possible to have different types of boundary conditions on different parts of the domain boundary. Each section of the boundary is handled according to its specified type.

### 5. Specific Examples and Applications

#### 5.1. 1D Steady-State Conduction with Mixed Boundary Conditions

Consider a rod of length $L$ with the following conditions:
*   Left end ($x=0$): Fixed Temperature, $T(0) = T_1$ (Dirichlet).
*   Right end ($x=L$): Convective heat transfer to ambient, $-k \frac{dT}{dx} = h (T(L) - T_\infty)$ (Robin).

**FVM Discretization:**
Divide the rod into $N$ control volumes. Let $P$ be an internal node, and $W$ be its west neighbor, $E$ be its east neighbor. The face between $P$ and $E$ is denoted by $f_e$.

For an internal node $P$:
$\Phi_W \phi_W - (\Phi_W + \Phi_E + \Phi_P^{conv}) \phi_P + \Phi_E \phi_E = -Q_P + \Phi_P^{source}$
where $\Phi$ represents the conductance (related to $k A / \Delta x$ for diffusion, and mass flow for convection).

**Boundary Node at Left End ($x=0$):**
Assume the first control volume has its center at $x_1$. The left face of this volume is at $x=0$.
The equation for the first node $P_1$:
$(\Phi_W \text{term at } x=0) \phi_0 + \Phi_E \phi_{P_2} = \dots$
Since $T(0) = T_1$ (Dirichlet), we can either:
1.  Set $\phi_0 = T_1$. The flux across the boundary is handled by the equation of the first control volume.
2.  Treat the boundary face as contributing to the equation of the first control volume $P_1$. The flux across the boundary face at $x=0$ is handled by the term associated with the face $f_w$ of $P_1$. If we assume a ghost node $\phi_0$ such that $\phi_0 = T_1$.

A common approach in FVM is to model the flux at the boundary. For the control volume containing the left boundary face, the flux entering from the left is prescribed by the Dirichlet condition. If we consider node $P_1$ to be centered at $x_1$, its left face is at $x=0$. The flux across this face is handled by setting the value at the face (or a ghost node) to $T_1$.

Let's say $P_1$ is the first node, and its left face is the boundary. The equation for $P_1$ will involve the flux at the left boundary.
If $T(0) = T_1$, then for the left face of the first CV (let's call its center $P_1$), the flux crossing this face into the CV is related to $T_1$.
The discretized equation for $P_1$ will look like:
$a_{P_1} T_{P_1} + a_{P_2} T_{P_2} = b_{P_1}$
where $a_{P_1}$ and $b_{P_1}$ are modified to account for the Dirichlet condition at the left face. The flux entering the CV containing $P_1$ from the left boundary is $-\left.k A \frac{\partial T}{\partial x}\right|_{x=0}$. If we treat the boundary as a face of the CV, and $T_1$ is the value on this face, the flux contribution to $P_1$ depends on the interpolation.

A simpler view: The equation for the first node $P_1$ will have its boundary flux term handled by setting the value of the adjacent "ghost" node to $T_1$.

**Boundary Node at Right End ($x=L$):**
Let the last control volume have center $P_N$ and its right face at $x=L$.
The flux across this face $f_e$ is given by the Robin condition:
$F_{f_e} = h A (T_{P_N} - T_\infty)$
This flux is added to the discretized equation of $P_N$. The equation for $P_N$ becomes:
$\dots - (\Phi_W + \Phi_E^{conv}) T_{P_N} + (\Phi_E^{conv}) T_\infty = \dots$
where $\Phi_E^{conv} = hA$. The term $(hA)T_{P_N}$ is absorbed into the coefficient of $T_{P_N}$, and $-(hA)T_\infty$ becomes part of the source term.

#### 5.2. Adiabatic Walls in Convection

When modeling convection and heat transfer in a channel or around an object, walls are often assumed to be adiabatic or have a specified temperature.

*   **Adiabatic Wall:** $\frac{\partial T}{\partial n} = 0$ at the wall.
    This means the flux normal to the wall is zero. In FVM, the flux through the boundary face is set to zero. This simplifies the discretized equation for the nodes adjacent to the wall, as no diffusive or convective flux from the wall contributes.

#### 5.3. Symmetric Boundaries

In problems with geometric symmetry, one can model only a portion of the domain and impose symmetry boundary conditions.

*   **Symmetry Boundary Condition:** $\frac{\partial \phi}{\partial n} = 0$ (flux is zero across the symmetry plane, hence adiabatic) OR $\phi = \text{constant}$ (if the symmetry plane implies a constant value).
    For temperature, if the symmetry plane is an axis of symmetry, the temperature gradient normal to the plane is zero. This is an adiabatic condition.

### 6. Important Points to Remember

*   **Boundary Faces:** Boundary conditions are applied to the faces of control volumes that lie on the physical boundaries of the domain.
*   **Flux Modification:** Boundary conditions modify the flux calculations at these boundary faces.
*   **Dirichlet:** Prescribed value ($\phi$) at the boundary. Influences flux by setting face value (or ghost node value).
*   **Neumann:** Prescribed gradient ($\nabla \phi$) at the boundary. Directly sets the flux value.
*   **Robin:** Combination of value and gradient. Expressed as flux in terms of adjacent node value and external conditions.
*   **Continuity:** Ensure that the flux entering one control volume from an adjacent control volume (or boundary) is equal to the flux leaving the adjacent volume.
*   **Discretized Equation:** Boundary conditions translate into specific adjustments in the coefficients and source terms of the discretized algebraic equations for the control volumes adjacent to the boundary.

### 7. Course Outcome Alignment

*   **CO1 (Governing Equations):** Understanding the fundamental conservation equations is crucial for integrating them over control volumes and applying boundary conditions correctly.
*   **CO2 (PDE Classification):** While not directly about classification, applying boundary conditions correctly is essential for solving the PDEs that are classified. Different boundary conditions might arise from different physical scenarios described by PDEs.
*   **CO3 (FDM/FVM Familiarization):** This topic is central to FVM. Learning how to handle boundary conditions is a core skill in applying FVM.
*   **CO4 (Solving Linear Systems):** Boundary conditions influence the structure of the resulting system of linear algebraic equations (e.g., modifying diagonal dominance, changing source terms).
*   **CO5 (Solving Conduction Problems):** The examples provided directly relate to solving steady-state conduction problems with various boundary conditions, a fundamental application of FVM.

### 8. Practice Questions and Exercises

**Question 1:**
Consider a 1D control volume $P$ adjacent to a boundary face $f_b$. The domain is discretized such that the face $f_b$ is at $x=0$ and the node $P$ is at $x = \Delta x / 2$. The diffusion coefficient is $\Gamma$ and the area is $A$.

a) If the boundary condition at $x=0$ is $\phi(0) = \phi_{boundary}$ (Dirichlet), how does this affect the flux calculation from $f_b$ into $P$?
b) If the boundary condition at $x=0$ is $- \Gamma \frac{\partial \phi}{\partial x} = q''_{boundary}$ (Neumann), how is the flux calculated?
c) If the boundary condition at $x=0$ is $- \Gamma \frac{\partial \phi}{\partial x} = h (\phi(0) - \phi_{fluid})$ (Robin), and we assume $\phi(0) \approx \phi_P$, how is the flux expressed in terms of $\phi_P$?

**Solution 1:**
a) **Dirichlet:** For a Dirichlet condition $\phi(0) = \phi_{boundary}$, the flux across face $f_b$ from the boundary into $P$ is calculated as $F_{f_b} = \Gamma A \frac{\phi_P - \phi_{boundary}}{\Delta x/2}$. This term is then added to the discretized equation of node $P$.

b) **Neumann:** For a Neumann condition $- \Gamma \frac{\partial \phi}{\partial x} = q''_{boundary}$, the flux across face $f_b$ is directly given by $F_{f_b} = q''_{boundary} \times A$. This flux value is added as a source term to the discretized equation of node $P$.

c) **Robin:** For a Robin condition $- \Gamma \frac{\partial \phi}{\partial x} = h (\phi(0) - \phi_{fluid})$ and assuming $\phi(0) \approx \phi_P$, the flux across face $f_b$ is $F_{f_b} = h A (\phi_P - \phi_{fluid})$. This flux term is incorporated into the discretized equation for $P$, contributing to the coefficient of $\phi_P$ and the source term.

---

**Question 2:**
A 2D rectangular domain is discretized using FVM. A boundary face lies on the line $y=0$.

a) What boundary condition would be applied if the wall at $y=0$ is perfectly insulated?
b) How would this insulation condition be implemented in the FVM discretization for the control volumes adjacent to the $y=0$ boundary?

**Solution 2:**
a) A perfectly insulated wall implies no heat transfer across it. This is an **adiabatic boundary condition**, which is a type of Neumann boundary condition where the temperature gradient normal to the boundary is zero: $\frac{\partial T}{\partial y} = 0$ at $y=0$.

b) For control volumes adjacent to the $y=0$ boundary face, the adiabatic condition means that the **flux across this boundary face is zero**. In the discretized equation for these control volumes, the contribution from the boundary face (which would normally represent either convection or diffusion) is set to zero. This means no term related to heat transfer from the boundary is added to the equation, effectively making the wall 'inactive' in terms of heat exchange with the fluid/domain.

---

**Question 3:**
Consider a wall with temperature $T_w$ exposed to a fluid at $T_\infty$ with a heat transfer coefficient $h$. If this wall forms a boundary of a computational domain for heat transfer within the wall, and the heat transfer occurs from the wall's surface into the fluid, how is this represented in the FVM discretization of the control volume adjacent to this surface?

**Solution 3:**
This is a Robin boundary condition: $-k \frac{\partial T}{\partial n} = h (T - T_\infty)$ at the wall surface. Let $P$ be the control volume adjacent to the wall surface, and let the wall surface be represented by a face $f_w$.

The heat flux from the wall surface into the fluid is $h A (T - T_\infty)$. For FVM, we relate this flux to the temperature of the adjacent control volume $T_P$. Assuming $T \approx T_P$ at the wall surface:

Flux $= h A (T_P - T_\infty)$.

This flux leaves the control volume $P$ (if $T_P > T_\infty$) or enters $P$ (if $T_P < T_\infty$). When assembling the discretized equation for $P$, this flux is accounted for:

The term $h A T_P$ is added to the coefficient of $T_P$.
The term $-h A T_\infty$ is added to the source term of the equation for $P$.

This effectively models the convective heat loss (or gain) from the wall surface into the external fluid.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 9. References

*   **Patankar, Suhas V. (2017).** *Numerical Heat Transfer and Fluid Flow*. CRC Press. (Chapter 6 on Finite Volume Method for Boundary Conditions)
*   **Veersteg, H., & Malalasekra, W. (2008).** *An Introduction to Computational Fluid Dynamics the Finite Volume Method*. Pearson Education. (Chapter 4 on Discretization of Conservation Equations, including boundary condition handling)
*   **Anderson, John David, & Wendt, John. (1995).** *Computational Fluid Dynamics*. McGraw-Hill. (Provides broader context on numerical methods and boundary conditions in CFD)

This concludes the notes for "Handling Different Boundary Conditions" in Module 4 of Computational Heat Transfer.