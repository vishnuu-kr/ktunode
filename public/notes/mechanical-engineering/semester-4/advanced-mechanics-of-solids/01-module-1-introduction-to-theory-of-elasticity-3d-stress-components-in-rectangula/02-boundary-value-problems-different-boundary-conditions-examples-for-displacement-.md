---
title: "Boundary value problems: Different boundary conditions-Examples for Displacement Formulation/ Force Formulation."
subject: "ADVANCED MECHANICS OF SOLIDS"
module: "Module 1: Introduction to theory of elasticity – 3D stress components in rectangular and cylindrical coordinate systems– strain"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf480446325f"
status: "completed"
scrapedAt: "2026-05-20T17:51:12.068Z"
---
# Advanced Mechanics of Solids - Module 1: Introduction to Theory of Elasticity

## Topic: Boundary Value Problems: Different Boundary Conditions - Examples for Displacement Formulation/Force Formulation

---

### 1. Introduction to Boundary Value Problems (BVPs) in Elasticity

**Definition:** A Boundary Value Problem in elasticity involves finding a state of stress and deformation within a body that satisfies:
*   The governing differential equations of elasticity (equilibrium, strain-displacement, and constitutive relations).
*   Specific conditions prescribed on the boundaries of the body.

These boundary conditions define how the body interacts with its surroundings. Without specifying boundary conditions, an infinite number of solutions would exist for the governing equations, making the problem ill-defined.

**Importance:** BVPs are crucial for solving real-world engineering problems. The type and application of loads and constraints on a structure are mathematically represented by boundary conditions.

---

### 2. Governing Equations of Elasticity (Brief Recap)

For a complete understanding of BVPs, it's essential to recall the fundamental equations:

*   **Equations of Equilibrium:** Relate stress components to body forces.
    *   In Rectangular Coordinates (x, y, z):
        *   $\frac{\partial \sigma_{xx}}{\partial x} + \frac{\partial \tau_{xy}}{\partial y} + \frac{\partial \tau_{xz}}{\partial z} + X = 0$
        *   $\frac{\partial \tau_{yx}}{\partial x} + \frac{\partial \sigma_{yy}}{\partial y} + \frac{\partial \tau_{yz}}{\partial z} + Y = 0$
        *   $\frac{\partial \tau_{zx}}{\partial x} + \frac{\partial \tau_{zy}}{\partial y} + \frac{\partial \sigma_{zz}}{\partial z} + Z = 0$
    *   *(Note: Refer to Timoshenko & Goodier, Chapter 5 for detailed derivation and in cylindrical coordinates).*
*   **Kinematic Relations (Strain-Displacement):** Relate strain components to displacement components.
    *   In Rectangular Coordinates:
        *   $\epsilon_{xx} = \frac{\partial u}{\partial x}$, $\epsilon_{yy} = \frac{\partial v}{\partial y}$, $\epsilon_{zz} = \frac{\partial w}{\partial z}$
        *   $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$, $\gamma_{yz} = \frac{\partial v}{\partial z} + \frac{\partial w}{\partial y}$, $\gamma_{zx} = \frac{\partial w}{\partial x} + \frac{\partial u}{\partial z}$
    *   *(Note: Refer to Srinath, Chapter 3 for detailed derivation and in cylindrical coordinates).*
*   **Constitutive Relations (Stress-Strain, Hooke's Law):** Relate stress and strain components. For an isotropic, linear elastic material:
    *   $\epsilon_{xx} = \frac{1}{E} [\sigma_{xx} - \nu (\sigma_{yy} + \sigma_{zz})]$
    *   $\gamma_{xy} = \frac{1}{G} \tau_{xy}$ (and similar for other shear strains)
    *   *(Note: Refer to Kazimi, Chapter 2 for detailed explanation of these relations).*
*   **Compatibility Equations:** Ensure that the strain field can be derived from a continuous displacement field.
    *   In Rectangular Coordinates:
        *   $\frac{\partial^2 \epsilon_{xx}}{\partial y^2} + \frac{\partial^2 \epsilon_{yy}}{\partial x^2} = \frac{\partial^2 \epsilon_{xy}}{\partial x \partial y}$ (and cyclic permutations for other pairs)
        *   $\frac{\partial^2 \gamma_{xy}}{\partial x \partial z} = \frac{\partial^2}{\partial y \partial z} (\frac{\partial u}{\partial x})$ (and other forms)
    *   The Beltrami-Michell equations, expressed in terms of stress, are also important compatibility conditions. *(Refer to Atkin & Fox, Chapter 4 for comprehensive coverage).*

---

### 3. Boundary Conditions (BCs)

Boundary conditions specify the state of stress or displacement on the surface of the elastic body. These are typically defined on the boundary surface, denoted by $S$.

**Classification of Boundary Conditions:**

There are two primary categories of boundary conditions:

1.  **Displacement Boundary Conditions (Essential BCs):** These directly specify the displacement components on the boundary.
    *   **Type 1: Prescribed Displacement:**
        *   $u = \bar{u}$ on $S_u$
        *   $v = \bar{v}$ on $S_u$
        *   $w = \bar{w}$ on $S_u$
        where $\bar{u}, \bar{v}, \bar{w}$ are known functions of position on the boundary $S_u$.
    *   **Examples:**
        *   **Fixed Boundary:** Where the body is rigidly clamped. All displacement components are zero.
            *   $u = 0, v = 0, w = 0$ on $S_{fixed}$
        *   **Simply Supported Boundary:** Where the body is supported to allow rotation but not translation. Some displacement components might be zero.
            *   e.g., in a beam bending problem, $u=0, w=0$ at the supports.
        *   **Interface with another body:** If two bodies are perfectly bonded, their displacements at the interface must be equal.

2.  **Stress Boundary Conditions (Natural BCs):** These specify the stress components on the boundary. They arise from applied forces, tractions, or the absence of stress on a boundary.
    *   **Type 2: Prescribed Traction:**
        *   $\sigma_{xx} n_x + \tau_{xy} n_y + \tau_{xz} n_z = \bar{T}_x$ on $S_T$
        *   $\tau_{yx} n_x + \sigma_{yy} n_y + \tau_{yz} n_z = \bar{T}_y$ on $S_T$
        *   $\tau_{zx} n_x + \tau_{zy} n_y + \sigma_{zz} n_z = \bar{T}_z$ on $S_T$
        where $n_x, n_y, n_z$ are the direction cosines of the outward normal to the surface $S_T$, and $\bar{T}_x, \bar{T}_y, \bar{T}_z$ are the prescribed traction components on the surface $S_T$.
    *   **Type 3: Mixed Boundary Conditions:** A combination of displacement and stress conditions on different parts of the boundary.
    *   **Examples:**
        *   **Free Surface:** Where no external forces or tractions are applied. The traction components are zero.
            *   $\bar{T}_x = 0, \bar{T}_y = 0, \bar{T}_z = 0$ on $S_{free}$
        *   **Applied Load:** A known force or pressure applied to a surface.
            *   e.g., uniformly distributed pressure on a surface: $\sigma_{zz} = -p$ on $S_{load}$ (assuming the surface is perpendicular to z-axis and normal is in -z direction).
        *   **Contact Pressure:** In problems involving contact, the normal stress might be specified as pressure, and shear stresses might be zero (smooth contact) or related to friction.

**Cauchy's Stress Theorem:** The stress boundary conditions are derived from Cauchy's stress theorem, which relates the traction vector $T_i$ on a surface with normal $n_j$ to the stress tensor $\sigma_{ij}$ as $T_i = \sigma_{ij} n_j$. *(Refer to Timoshenko & Goodier, Chapter 1 for this fundamental theorem).*

---

### 4. Formulations for Solving BVPs

The choice of formulation depends on what is directly known or easier to prescribe.

**A. Displacement Formulation (Primal Formulation):**

*   **Goal:** To find the displacement field $u(x,y,z), v(x,y,z), w(x,y,z)$.
*   **Method:**
    1.  Start with the strain-displacement relations.
    2.  Use Hooke's Law to express strains in terms of stresses.
    3.  Use the equilibrium equations and substitute stress in terms of displacement. This leads to the **Navier-Cauchy equations** (or Navier's equations).
    *   For an isotropic, linear elastic material:
        *   $(\lambda + \mu) \nabla (\nabla \cdot \mathbf{u}) + \mu \nabla^2 \mathbf{u} + \mathbf{X} = 0$
        *   where $\lambda$ and $\mu$ are Lame's constants, $\mathbf{u} = (u, v, w)$ is the displacement vector, $\nabla \cdot \mathbf{u}$ is the divergence (volumetric strain), $\nabla^2$ is the Laplacian operator, and $\mathbf{X} = (X, Y, Z)$ are body forces.
*   **Boundary Conditions:** Must be expressed in terms of displacements.
    *   On $S_u$: $u=\bar{u}, v=\bar{v}, w=\bar{w}$
    *   On $S_T$: $\sigma_{ij} n_j = \bar{T}_i$. These stress components are then replaced using Hooke's Law and strain-displacement relations to get boundary conditions in terms of displacements. For example, on a surface with normal $n_x, n_y, n_z$:
        *   $(\lambda (\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z}) n_x + 2\mu \frac{\partial u}{\partial x} n_x + \mu (\frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}) n_y + \mu (\frac{\partial u}{\partial z} + \frac{\partial w}{\partial x}) n_z) + X = 0$ (ignoring body forces for simplicity on boundary)
        *   This simplifies to $\sigma_{xx} n_x + \tau_{xy} n_y + \tau_{xz} n_z = 0$ if the boundary is free of traction.
*   **Suitability:** This formulation is ideal when displacement boundary conditions are primarily specified (e.g., clamped surfaces).

**B. Force Formulation (Stress Formulation):**

*   **Goal:** To find the stress field $\sigma_{xx}, \sigma_{yy}, \sigma_{zz}, \tau_{xy}, \tau_{yz}, \tau_{zx}$.
*   **Method:**
    1.  Start with the equilibrium equations.
    2.  Introduce stress components that automatically satisfy equilibrium. This is often achieved using **Airy's Stress Function** $\Phi$ in 2D or its generalizations in 3D.
    3.  The stress-strain relations are then used to enforce compatibility.
    *   In 2D (plane stress/strain), Airy's stress function $\Phi(x,y)$ satisfies:
        *   $\sigma_{xx} = \frac{\partial^2 \Phi}{\partial y^2}$, $\sigma_{yy} = \frac{\partial^2 \Phi}{\partial x^2}$, $\tau_{xy} = -\frac{\partial^2 \Phi}{\partial x \partial y}$.
        *   For compatibility, $\Phi$ must satisfy the **Biharmonic Equation**: $\nabla^4 \Phi = 0$.
    *   In 3D, there are generalizations like the formulation using $\Phi_{ij}$ or methods involving stress potentials. *(Refer to Srinath, Chapter 5 for stress functions and their role in compatibility).*
*   **Boundary Conditions:** Must be expressed in terms of stresses.
    *   On $S_T$: $\sigma_{ij} n_j = \bar{T}_i$.
    *   On $S_u$: The displacement conditions need to be converted into stress conditions. For example, if a surface is fixed ($u=0$), the normal and tangential stresses on that surface might be implicitly determined or require further analysis. This can sometimes make the force formulation less direct for displacement-prescribed boundaries.
*   **Suitability:** This formulation is powerful when traction boundary conditions are primarily specified (e.g., applied loads, free surfaces). It directly satisfies equilibrium and compatibility if the stress function is chosen correctly.

---

### 5. Examples of Boundary Value Problems

**Example 1: Cantilever Beam under End Load (Displacement Formulation Approach)**

*   **Problem:** A beam fixed at one end (x=0) and subjected to a transverse load at the other end (x=L).
*   **Coordinate System:** Rectangular (x along the beam, y transverse).
*   **Governing Equations:** Navier-Cauchy equations for beam bending.
*   **Boundary Conditions:**
    *   **At the fixed end (x=0):** Prescribed displacements (clamped).
        *   $u(0,y) = 0$
        *   $w(0,y) = 0$
        *   $\frac{\partial w}{\partial x}(0,y) = 0$ (no rotation)
        *   *(Note: $v$ might also be zero if it's a 2D problem, or the displacement in the transverse direction of the cross-section)*.
    *   **At the loaded end (x=L):** Prescribed traction.
        *   $\sigma_{xx}(L,y) = 0$ (assuming no axial load)
        *   $\tau_{xy}(L,y) = 0$ (assuming no shear on the end face initially, *before* the concentrated load is applied - this is a simplification)
        *   $\sigma_{yy}(L,y) = 0$ (assuming no pressure on the end face)
        *   The effect of the concentrated load $P$ is usually modeled as a distribution of stress over a small area or using singularity functions. For a simply supported beam with end load $P$:
            *   $\int_{A} \sigma_{xy}(L,y) dA = P$ (representing the shear force $P$).
            *   $\int_{A} y \sigma_{xx}(L,y) dA = 0$ (representing the bending moment $PL$).
*   **Solution Approach (Displacement):** Solve the Navier-Cauchy equations subject to the displacement boundary conditions at $x=0$ and the resulting stress/traction conditions at $x=L$. This often involves deriving the beam deflection equation ($EI \frac{d^4w}{dx^4} = q(x)$) from the 3D elasticity equations, which simplifies the problem significantly.

**Example 2: Thick-Walled Cylinder under Internal and External Pressure (Force Formulation Approach)**

*   **Problem:** A cylinder with inner radius $a$ and outer radius $b$, subjected to internal pressure $p_i$ and external pressure $p_o$.
*   **Coordinate System:** Cylindrical coordinates $(r, \theta, z)$.
*   **Governing Equations:** Equations of equilibrium and compatibility in cylindrical coordinates. For a long cylinder, the problem can be reduced to a plane strain or plane stress problem in terms of radial and hoop stresses, often solved using stress functions.
*   **Boundary Conditions:**
    *   **At the inner surface (r=a):** Prescribed radial stress (internal pressure).
        *   $\sigma_r(a) = -p_i$ (assuming outward normal is in positive r direction).
        *   $\tau_{r\theta}(a) = 0$ (assuming symmetry and no shear).
        *   $\sigma_{rz}(a) = 0$ (assuming symmetry and no axial shear).
    *   **At the outer surface (r=b):** Prescribed radial stress (external pressure).
        *   $\sigma_r(b) = -p_o$.
        *   $\tau_{r\theta}(b) = 0$.
        *   $\sigma_{rz}(b) = 0$.
*   **Solution Approach (Force):**
    1.  Assume a stress distribution that satisfies equilibrium and symmetry. In cylindrical coordinates for an axisymmetric problem with no body forces, this often leads to $\sigma_{r}$ and $\sigma_{\theta}$ as functions of $r$ only, and $\sigma_z$ being constant or a function of $r$.
    2.  Use the stress-strain relations and compatibility conditions (or Betti's solution for axisymmetric problems) to find the stresses.
    3.  For this specific problem, a common solution form for $\sigma_r$ and $\sigma_\theta$ is:
        *   $\sigma_r = A - \frac{B}{r^2}$
        *   $\sigma_\theta = A + \frac{B}{r^2}$
        *   where $A$ and $B$ are constants determined by the boundary conditions.
    4.  Apply the boundary conditions at $r=a$ and $r=b$ to solve for $A$ and $B$.
        *   $-p_i = A - \frac{B}{a^2}$
        *   $-p_o = A - \frac{B}{b^2}$
    5.  Solve these two equations for $A$ and $B$.
    6.  Calculate the displacement $u_r(r)$ using the strain-displacement relation $\epsilon_r = \frac{du_r}{dr}$ and Hooke's law.
*   **Reference:** This is a classic problem covered in detail in Timoshenko & Goodier (Chapter 6) and Srinath (Chapter 7).

---

### 6. Learning Outcome Alignment

*   **CO1: Formulate the field equations of Elasticity.**
    *   **Coverage:** This note recaps equilibrium, kinematic, and constitutive equations. The discussion on Navier-Cauchy equations and stress function formulations implicitly uses these.
*   **CO2: Model engineering problems as two-dimensional, for solutions involving a Stress Function.**
    *   **Coverage:** The example of the thick-walled cylinder illustrates a problem often reduced to 2D, and the mention of Airy's stress function is central to this outcome.
*   **CO3: Develop solutions for axi-symmetric problems for applications in thick pressure Vessels and in rotating circular discs.**
    *   **Coverage:** The thick-walled cylinder example is a direct application of this, showcasing axisymmetric boundary conditions and the resulting stress/displacement analysis.
*   **CO4: Extend the basic ideas related to theory of elastic flexure, for skewed loading and for beams which are curved.**
    *   **Coverage:** The cantilever beam example touches upon flexure, though a full treatment of skewed/curved beams is beyond this specific topic's scope, it lays the foundation for applying boundary conditions in flexure.
*   **CO5: Apply solution methods for torsion in components with non-circular cross Sections and thin -walled structures.**
    *   **Coverage:** This note primarily focuses on stress and displacement BCs rather than torsion. However, the principles of setting up BVPs apply to torsion as well.

---

### 7. Key Points to Remember

*   **Boundary Value Problems (BVPs):** Governing equations + Boundary Conditions = Unique Solution.
*   **Boundary Conditions (BCs):**
    *   **Displacement BCs (Essential):** Specify displacements (e.g., fixed, constrained).
    *   **Stress BCs (Natural):** Specify tractions/forces (e.g., free surface, applied load).
*   **Formulations:**
    *   **Displacement Formulation:** Solves for displacements, uses Navier-Cauchy equations, natural for displacement BCs.
    *   **Force/Stress Formulation:** Solves for stresses, uses stress functions and compatibility (e.g., Biharmonic equation), natural for stress BCs.
*   **Coordinate Systems:** Stress and strain components, and boundary conditions, need to be expressed in the appropriate coordinate system (rectangular, cylindrical).
*   **Cauchy's Stress Theorem:** Relates traction to stress and surface normal.
*   The choice of formulation impacts how boundary conditions are applied and the form of the governing differential equations used.

---

### 8. Practice Questions and Exercises

**Question 1:**
A rectangular plate of length $2a$ and width $2b$ is subjected to uniform pressure $p$ on its top surface ($z=b$) and is fixed at its bottom surface ($z=-b$). The edges ($x=\pm a, y=\pm b$) are free.
(a) Identify the type of boundary conditions at each surface.
(b) Which formulation (displacement or force) would be more convenient for this problem and why?
(c) Write down the boundary conditions in terms of stress components for the free edges.

**Answer 1:**
(a)
*   **Top Surface (z=b):** Prescribed traction (pressure). $\sigma_{zz}(z=b) = -p$, $\tau_{xz}(z=b) = 0$, $\tau_{yz}(z=b) = 0$. (Assuming normal is in +z direction, pressure acts inward).
*   **Bottom Surface (z=-b):** Prescribed displacement (fixed). $u(z=-b)=0, v(z=-b)=0, w(z=-b)=0$.
*   **Side Edges (x=±a, y=±b):** Free surfaces. $\sigma_{zz} n_z + \tau_{xz} n_x = 0$, $\tau_{yz} n_y + \sigma_{yy} n_y = 0$, etc. For the edges $x=\pm a$, $n_x=\pm 1, n_y=0, n_z=0$. So, $\sigma_{xx}=0, \tau_{xy}=0, \tau_{xz}=0$ at $x=\pm a$. Similarly for $y=\pm b$.

(b) A displacement formulation might be more direct due to the fixed boundary condition at $z=-b$. However, if the primary interest is stress distribution, and the applied load is the primary driver, a stress formulation could also be effective, requiring conversion of the displacement BCs into stress BCs. Given the mix, both have merits. If we were only given prescribed tractions everywhere, a stress formulation would be preferred.

(c) For the edge $x=a$, the outward normal is $\mathbf{n} = (1, 0, 0)$.
*   $\sigma_{xx}(x=a, y, z) (1) + \tau_{xy}(x=a, y, z) (0) + \tau_{xz}(x=a, y, z) (0) = 0 \implies \sigma_{xx} = 0$
*   $\tau_{yx}(x=a, y, z) (1) + \sigma_{yy}(x=a, y, z) (0) + \tau_{yz}(x=a, y, z) (0) = 0 \implies \tau_{xy} = 0$
*   $\tau_{zx}(x=a, y, z) (1) + \tau_{zy}(x=a, y, z) (0) + \sigma_{zz}(x=a, y, z) (0) = 0 \implies \tau_{xz} = 0$

**Question 2:**
Consider a thin circular disc of radius $R$ lying in the xy-plane, subjected to uniform normal stress $\sigma_0$ on its outer circumference. The center of the disc is stress-free.
(a) What coordinate system is most appropriate?
(b) Write down the boundary conditions at $r=R$ and $r=0$.
(c) If you were to use a displacement formulation, what would be the general form of the Navier-Cauchy equations in this coordinate system for an axisymmetric problem with no body forces?

**Answer 2:**
(a) Cylindrical coordinates $(r, \theta)$ are most appropriate due to the circular geometry and axisymmetric loading.

(b)
*   **At the outer circumference (r=R):** Prescribed radial stress (assuming outward normal is in +r direction).
    *   $\sigma_r(R) = -\sigma_0$ (for applied pressure $\sigma_0$) or $\sigma_r(R) = \sigma_0$ (for applied tension $\sigma_0$). Let's assume tension $\sigma_0$.
    *   $\tau_{r\theta}(R) = 0$ (due to symmetry).
*   **At the center (r=0):** The stress components must be finite. For $\sigma_r$ and $\sigma_\theta$ to be finite at $r=0$, $\sigma_r(0)$ would typically be some finite value (often zero if it's a free surface or support allowing radial stress) and $\sigma_\theta$ must also be finite. For many solutions, $\sigma_r$ is zero at the center.

(c) For an axisymmetric problem with no body forces, the displacement vector $\mathbf{u}$ has only a radial component $u_r$, which is a function of $r$ only. The Navier-Cauchy equation in cylindrical coordinates, simplified for $u_r(r)$ and no body forces, is:
    *   $(\lambda + \mu) \frac{d}{dr} \left( \frac{1}{r} \frac{d}{dr}(r u_r) \right) + \mu \frac{d^2 u_r}{dr^2} = 0$
    *(Refer to Srinath, Chapter 3 or Timoshenko & Goodier, Chapter 10 for detailed derivation of Navier-Cauchy equations in cylindrical coordinates for axisymmetric problems).*

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 9. References

*   **Timoshenko and Goodier, Theory of Elasticity, Third Edition, 2009:** Chapters 1, 5, 6, 10. (Fundamental theorems, equilibrium equations, stress/strain relations, cylindrical coordinates, beam theory, axisymmetric problems).
*   **S.L. Srinath, Advanced Mechanics of Solids, Third Edition, 2008:** Chapters 3, 5, 7. (Strain-displacement, stress functions, compatibility, axisymmetric problems).
*   **S.M.A. Kazimi, Solid Mechanics, 2008:** Chapters related to stress, strain, and constitutive laws.
*   **S. Jose, Advanced Mechanics of Materials, 2013:** Provides practical examples and extensions.
*   **R.J. Atkin and N. Fox, An Introduction to the Theory of Elasticity, 1980:** Chapters on compatibility and stress functions.

---