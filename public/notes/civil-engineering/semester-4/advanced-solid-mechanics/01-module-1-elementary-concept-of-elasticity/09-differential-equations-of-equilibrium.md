---
title: "Differential equations of equilibrium"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 1: Elementary concept of elasticity"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109f1"
status: "completed"
scrapedAt: "2026-05-20T18:42:30.717Z"
---
# Advanced Solid Mechanics: Module 1 - Elementary Concepts of Elasticity

## Topic: Differential Equations of Equilibrium

### Introduction

This topic delves into the fundamental principles governing the balance of forces within an elastic solid body in equilibrium. Understanding these differential equations is crucial for analyzing stress and strain distributions and predicting the behavior of materials under load.

### Learning Outcomes

By the end of this topic, you will be able to:

*   **Understand the concept of equilibrium in solid mechanics.**
*   **Derive the differential equations of equilibrium in Cartesian and cylindrical coordinate systems.**
*   **Apply boundary conditions to solve problems in elasticity.**
*   **Recognize the significance of body forces and surface forces.**
*   **Relate the stress tensor to the equations of equilibrium.**

### 1. Concept of Equilibrium in Solid Mechanics

**Definition:** A body is in a state of **static equilibrium** if the net force and the net moment acting on it are zero. In the context of solid mechanics, this means that at every point within the body, the internal forces (stresses) and external forces (body forces and surface forces) are balanced.

**Key Principles:**

*   **Newton's First Law of Motion:** An object remains at rest or in uniform motion in a straight line unless acted upon by an external force. For a stationary body, this translates to zero net force.
*   **Newton's Second Law of Motion:** The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass ($\Sigma F = ma$). For static equilibrium, acceleration is zero, hence $\Sigma F = 0$.
*   **Sum of Moments:** For a body in equilibrium, the sum of all moments about any point must also be zero ($\Sigma M = 0$). This ensures rotational equilibrium.

### 2. The Stress Tensor

Before deriving the equations of equilibrium, it's essential to understand the stress tensor, which describes the state of stress at a point within a material.

**Stress:** Stress is defined as force per unit area. It quantifies the internal forces that particles within a continuous material exert on each other.

**Stress Components:**

Consider a small rectangular parallelepiped element with sides parallel to the coordinate axes.

*   **Normal Stresses ($\sigma$):** Perpendicular to the surface.
    *   $\sigma_{xx}, \sigma_{yy}, \sigma_{zz}$ are normal stresses acting on planes perpendicular to the x, y, and z axes, respectively.
*   **Shear Stresses ($\tau$):** Parallel to the surface.
    *   $\tau_{xy}, \tau_{yx}, \tau_{xz}, \tau_{zx}, \tau_{yz}, \tau_{zy}$ represent shear stresses. For equilibrium, $\tau_{xy} = \tau_{yx}$, $\tau_{xz} = \tau_{zx}$, and $\tau_{yz} = \tau_{zy}$ (due to moment equilibrium of the element).

**Stress Tensor ($\sigma_{ij}$):** The stress state at a point can be represented by a second-order tensor:

$$
\begin{bmatrix}
\sigma_{xx} & \tau_{xy} & \tau_{xz} \\
\tau_{yx} & \sigma_{yy} & \tau_{yz} \\
\tau_{zx} & \tau_{zy} & \sigma_{zz}
\end{bmatrix}
$$

Where $i$ represents the direction of the normal to the surface, and $j$ represents the direction of the stress component.

### 3. Differential Equations of Equilibrium in Cartesian Coordinates

Consider a small, infinitesimally small rectangular parallelepiped element of a continuous medium with sides of length $dx$, $dy$, and $dz$ parallel to the x, y, and z axes, respectively. Let the stress components at the center of the element be $\sigma_{ij}$.

**Assumptions:**

*   The material is homogeneous and continuous.
*   The body is in static equilibrium.
*   We are considering the forces acting on an infinitesimal volume element.

**Forces Acting on the Element:**

For each of the six faces of the parallelepiped, there are normal and shear stresses. The net force acting on a pair of opposite faces needs to be considered.

*   **Forces in the x-direction:**
    *   Forces on the faces perpendicular to the x-axis:
        *   Net force due to $\sigma_{xx}$ on the right face (at $x + dx/2$) minus the left face (at $x - dx/2$):
            $(\sigma_{xx} + \frac{\partial \sigma_{xx}}{\partial x} dx) dy dz - \sigma_{xx} dy dz = \frac{\partial \sigma_{xx}}{\partial x} dx dy dz$
    *   Forces on the faces perpendicular to the y-axis:
        *   Net force due to $\tau_{yx}$ on the top face (at $y + dy/2$) minus the bottom face (at $y - dy/2$):
            $(\tau_{yx} + \frac{\partial \tau_{yx}}{\partial y} dy) dx dz - \tau_{yx} dx dz = \frac{\partial \tau_{yx}}{\partial y} dx dy dz$
    *   Forces on the faces perpendicular to the z-axis:
        *   Net force due to $\tau_{zx}$ on the front face (at $z + dz/2$) minus the back face (at $z - dz/2$):
            $(\tau_{zx} + \frac{\partial \tau_{zx}}{\partial z} dz) dx dy - \tau_{zx} dx dy = \frac{\partial \tau_{zx}}{\partial z} dx dy dz$

*   **Body Forces ($F_x, F_y, F_z$):** These are forces acting on the volume of the element, such as gravity or electromagnetic forces. Assume body forces per unit volume are $X$, $Y$, and $Z$ in the x, y, and z directions, respectively.
    *   Total body force in the x-direction: $X dx dy dz$

**Applying Equilibrium (Sum of Forces in x-direction = 0):**

Summing all forces in the x-direction and setting it to zero:

$$
\frac{\partial \sigma_{xx}}{\partial x} dx dy dz + \frac{\partial \tau_{yx}}{\partial y} dx dy dz + \frac{\partial \tau_{zx}}{\partial z} dx dy dz + X dx dy dz = 0
$$

Dividing by $dx dy dz$:

$$
\frac{\partial \sigma_{xx}}{\partial x} + \frac{\partial \tau_{yx}}{\partial y} + \frac{\partial \tau_{zx}}{\partial z} + X = 0 \quad (*)*
$$

Similarly, by considering the equilibrium of forces in the y and z directions, we get:

$$
\frac{\partial \tau_{xy}}{\partial x} + \frac{\partial \sigma_{yy}}{\partial y} + \frac{\partial \tau_{zy}}{\partial z} + Y = 0 \quad (**)*
$$

$$
\frac{\partial \tau_{xz}}{\partial x} + \frac{\partial \tau_{yz}}{\partial y} + \frac{\partial \sigma_{zz}}{\partial z} + Z = 0 \quad (***)*
$$

These three equations are the **differential equations of equilibrium in Cartesian coordinates**. They express the balance of forces at any point within the body.

**In Tensor Notation:**

The equations of equilibrium can be more compactly written using the divergence of the stress tensor and the body force vector $\mathbf{F} = (X, Y, Z)$:

$$
\nabla \cdot \boldsymbol{\sigma} + \mathbf{F} = \mathbf{0}
$$

Or, in index notation:

$$
\sigma_{ji,j} + F_i = 0
$$

Where $\sigma_{ji,j}$ denotes the partial derivative of $\sigma_{ji}$ with respect to the $j$-th coordinate. Remember that $\sigma_{ji} = \sigma_{ij}$.

### 4. Differential Equations of Equilibrium in Cylindrical Coordinates

For problems with cylindrical symmetry, it's more convenient to use cylindrical coordinates $(r, \theta, z)$.

**Stress Components in Cylindrical Coordinates:**

*   Normal Stresses: $\sigma_{rr}, \sigma_{\theta\theta}, \sigma_{zz}$
*   Shear Stresses: $\tau_{r\theta}, \tau_{\theta r}, \tau_{rz}, \tau_{zr}, \tau_{z\theta}, \tau_{\theta z}$ (Note: $\tau_{r\theta} = \tau_{\theta r}$, $\tau_{rz} = \tau_{zr}$, $\tau_{z\theta} = \tau_{\theta z}$)

**Body Forces in Cylindrical Coordinates:**

The body force components per unit volume are $F_r, F_\theta, F_z$.

**Derivation (Conceptual):**

The derivation involves considering a small cylindrical element and balancing forces in the radial, tangential, and axial directions. This is more complex than the Cartesian derivation due to the varying direction of coordinate lines with position. The process involves:

1.  Defining the infinitesimal volume element.
2.  Calculating forces due to stresses on each face, considering the change in stress components over the element.
3.  Including body forces.
4.  Applying Newton's second law of motion ($\Sigma F = ma = 0$ for equilibrium).

**The Differential Equations of Equilibrium in Cylindrical Coordinates are:**

*   **Radial Equilibrium:**
    $$
    \frac{\partial \sigma_{rr}}{\partial r} + \frac{1}{r} \frac{\partial \tau_{r\theta}}{\partial \theta} + \frac{\partial \tau_{rz}}{\partial z} + \frac{\sigma_{rr} - \sigma_{\theta\theta}}{r} + F_r = 0
    $$
*   **Tangential (Circumferential) Equilibrium:**
    $$
    \frac{\partial \tau_{r\theta}}{\partial r} + \frac{1}{r} \frac{\partial \sigma_{\theta\theta}}{\partial \theta} + \frac{\partial \tau_{\theta z}}{\partial z} + \frac{2 \tau_{r\theta}}{r} + F_\theta = 0
    $$
*   **Axial Equilibrium:**
    $$
    \frac{\partial \tau_{rz}}{\partial r} + \frac{1}{r} \frac{\partial \tau_{\theta z}}{\partial \theta} + \frac{\partial \sigma_{zz}}{\partial z} + F_z = 0
    $$

**Important Note:** The terms $\frac{\sigma_{rr} - \sigma_{\theta\theta}}{r}$ and $\frac{2 \tau_{r\theta}}{r}$ arise from the curvature of the coordinate system and the fact that the radial and tangential directions change with $\theta$.

### 5. Body Forces and Surface Forces

**Body Forces:**

*   **Definition:** Forces that act on every particle of the body. They are proportional to the volume of the element.
*   **Examples:** Gravity, centrifugal forces, electromagnetic forces.
*   **Representation:** Usually denoted by a vector field $\mathbf{F}$ or components $X, Y, Z$ (Cartesian) or $F_r, F_\theta, F_z$ (Cylindrical) representing force per unit volume.

**Surface Forces:**

*   **Definition:** Forces that act on the surface of the body. They are proportional to the area of the surface.
*   **Examples:** Applied pressure, traction, contact forces.
*   **Representation:**
    *   **Traction Vector ($\mathbf{T}$):** The force per unit area acting on a surface with outward normal vector $\mathbf{n}$.
    *   In Cartesian coordinates, the traction vector on a plane with normal $\mathbf{n} = (n_x, n_y, n_z)$ is given by:
        $$
        \mathbf{T} = \boldsymbol{\sigma} \cdot \mathbf{n}
        $$
        Which expands to:
        $T_x = \sigma_{xx} n_x + \tau_{xy} n_y + \tau_{xz} n_z$
        $T_y = \tau_{yx} n_x + \sigma_{yy} n_y + \tau_{yz} n_z$
        $T_z = \tau_{zx} n_x + \tau_{zy} n_y + \sigma_{zz} n_z$

### 6. Boundary Conditions

**Definition:** Boundary conditions specify the state of stress or displacement on the surface of the elastic body. They are essential for uniquely solving the differential equations of equilibrium.

**Types of Boundary Conditions:**

1.  **Traction Boundary Conditions (Prescribed Surface Forces):**
    *   On a surface $S_T$ of the body, the traction vector $\mathbf{T}$ is specified.
    *   Mathematically: $\boldsymbol{\sigma} \cdot \mathbf{n} = \overline{\mathbf{T}}$ on $S_T$, where $\overline{\mathbf{T}}$ is the known traction vector.

2.  **Displacement Boundary Conditions (Prescribed Displacements):**
    *   On a surface $S_u$ of the body, the displacement vector $\mathbf{u}$ is specified.
    *   Mathematically: $\mathbf{u} = \overline{\mathbf{u}}$ on $S_u$, where $\overline{\mathbf{u}}$ is the known displacement vector.

**Compatibility:** The total surface of the body $S$ is the union of $S_T$ and $S_u$ ($S = S_T \cup S_u$), and these surfaces are disjoint ($S_T \cap S_u = \emptyset$).

**Importance:** The equations of equilibrium alone are not sufficient to determine the stress distribution. Boundary conditions provide the necessary constraints to find a unique solution. For example, a rigid body can be in equilibrium with any internal stress distribution if there are no external loads. Boundary conditions prevent this.

### 7. Relation to Elasticity Theory

The differential equations of equilibrium are a cornerstone of the theory of elasticity. Along with strain-displacement relations and the constitutive equations (Hooke's Law), they form the fundamental set of equations that govern the behavior of elastic materials.

*   **Strain-Displacement Relations:** Relate strain components to derivatives of displacement components.
*   **Constitutive Equations (Hooke's Law):** Relate stress components to strain components (e.g., $\sigma_{ij} = C_{ijkl} \epsilon_{kl}$).

By substituting strain-displacement and constitutive relations into the equations of equilibrium, we can obtain equations solely in terms of displacement components, which are often easier to solve.

### Examples

**Example 1: Uniformly Loaded Rectangular Bar (Cartesian)**

Consider a rectangular bar loaded axially with a force $P$ at the ends. Assume uniform stress distribution.

*   Body forces are negligible ($X=Y=Z=0$).
*   The stress components are $\sigma_{xx} = P/A$ (where $A$ is the cross-sectional area) and all other stress components are zero.

Let's check the equilibrium equations:

*   Equation 1: $\frac{\partial (P/A)}{\partial x} + \frac{\partial 0}{\partial y} + \frac{\partial 0}{\partial z} + 0 = 0 + 0 + 0 + 0 = 0$. (Satisfied)
*   Equation 2: $\frac{\partial 0}{\partial x} + \frac{\partial 0}{\partial y} + \frac{\partial 0}{\partial z} + 0 = 0$. (Satisfied)
*   Equation 3: $\frac{\partial 0}{\partial x} + \frac{\partial 0}{\partial y} + \frac{\partial 0}{\partial z} + 0 = 0$. (Satisfied)

This simple example shows that uniform axial stress satisfies the equilibrium equations.

**Example 2: Pressure Vessel (Cylindrical Coordinates)**

Consider a thin-walled cylinder subjected to internal pressure $p$. Due to symmetry, the stress state is often assumed to be axisymmetric, meaning stresses do not depend on $\theta$.

*   In this case, $\sigma_{\theta\theta}$ (hoop stress) and $\sigma_{rr}$ (radial stress) are significant, and $\tau_{r\theta} = \tau_{rz} = 0$.
*   Body forces are usually ignored.

The equilibrium equations simplify:

*   **Radial Equilibrium:**
    $$
    \frac{\partial \sigma_{rr}}{\partial r} + \frac{\sigma_{rr} - \sigma_{\theta\theta}}{r} = 0
    $$
*   **Tangential Equilibrium:**
    $$
    0 = 0
    $$
*   **Axial Equilibrium:**
    $$
    \frac{\partial \sigma_{zz}}{\partial z} = 0
    $$

These simplified equations, along with constitutive relations and boundary conditions (pressure on the inner and outer surfaces, zero traction on the ends), can be solved to find the hoop and radial stresses.

### Practice Questions and Exercises

**Question 1:**
State the three differential equations of equilibrium in Cartesian coordinates. Briefly explain the meaning of each term.

**Answer 1:**
The differential equations of equilibrium in Cartesian coordinates are:
1.  $\frac{\partial \sigma_{xx}}{\partial x} + \frac{\partial \tau_{yx}}{\partial y} + \frac{\partial \tau_{zx}}{\partial z} + X = 0$
2.  $\frac{\partial \tau_{xy}}{\partial x} + \frac{\partial \sigma_{yy}}{\partial y} + \frac{\partial \tau_{zy}}{\partial z} + Y = 0$
3.  $\frac{\partial \tau_{xz}}{\partial x} + \frac{\partial \tau_{yz}}{\partial y} + \frac{\partial \sigma_{zz}}{\partial z} + Z = 0$

*   $\frac{\partial \sigma_{ii}}{\partial i}$ terms represent the net force due to the gradient of normal stress in the $i$-direction.
*   $\frac{\partial \tau_{ij}}{\partial j}$ terms represent the net force due to the gradient of shear stress acting parallel to the $i$-direction.
*   $X, Y, Z$ represent the body forces per unit volume in the x, y, and z directions, respectively.

**Question 2:**
What are the two main types of boundary conditions used in the theory of elasticity? Provide their mathematical formulations.

**Answer 2:**
The two main types of boundary conditions are:
1.  **Traction Boundary Conditions (Prescribed Surface Forces):** On a surface $S_T$, the traction vector $\mathbf{T}$ is specified.
    Mathematical form: $\boldsymbol{\sigma} \cdot \mathbf{n} = \overline{\mathbf{T}}$ on $S_T$.
2.  **Displacement Boundary Conditions (Prescribed Displacements):** On a surface $S_u$, the displacement vector $\mathbf{u}$ is specified.
    Mathematical form: $\mathbf{u} = \overline{\mathbf{u}}$ on $S_u$.

**Question 3:**
Write down the differential equation for radial equilibrium in cylindrical coordinates. Identify the terms that are specific to cylindrical geometry.

**Answer 3:**
The differential equation for radial equilibrium in cylindrical coordinates is:
$$
\frac{\partial \sigma_{rr}}{\partial r} + \frac{1}{r} \frac{\partial \tau_{r\theta}}{\partial \theta} + \frac{\partial \tau_{rz}}{\partial z} + \frac{\sigma_{rr} - \sigma_{\theta\theta}}{r} + F_r = 0
$$
The terms specific to cylindrical geometry are:
*   $\frac{1}{r} \frac{\partial \tau_{r\theta}}{\partial \theta}$: This accounts for the shear stress component in the tangential direction and its variation with angle.
*   $\frac{\sigma_{rr} - \sigma_{\theta\theta}}{r}$: This term arises from the centripetal/centrifugal effects due to the curvature of the coordinate system and the difference between radial and hoop stresses.

**Question 4 (Conceptual):**
Why are body forces included in the differential equations of equilibrium?

**Answer 4:**
Body forces are included because they represent external forces acting on every particle within the volume of the body. For the body to be in equilibrium, these distributed forces must be balanced by the internal stresses. Ignoring body forces would lead to incorrect solutions in problems where these forces are significant (e.g., problems involving gravity).

### Important Points to Remember

*   **Equilibrium:** The fundamental principle is that the sum of all forces and moments acting on any volume element within the body must be zero.
*   **Stress Tensor:** Fully describes the state of stress at a point.
*   **Cartesian Equilibrium Equations:** Three equations relating the gradients of stress components and body forces.
*   **Cylindrical Equilibrium Equations:** Six equations (three are written above, but the full set considering stress tensor symmetry is six) are needed, with additional terms due to coordinate curvature.
*   **Body Forces:** Act on the volume (e.g., gravity).
*   **Surface Forces (Traction):** Act on the surface.
*   **Boundary Conditions:** Essential for a unique solution, specifying either stress or displacement on the body's surface.
*   **Foundation for Elasticity:** These equations are a critical part of the system of equations that describe elastic behavior.

This concludes Module 1, Topic 2. Understanding these differential equations is paramount for proceeding to more advanced topics in solid mechanics and elasticity.
