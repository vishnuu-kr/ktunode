---
title: "stresses in three dimensions"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 1: Elementary concept of elasticity"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109ea"
status: "completed"
scrapedAt: "2026-05-20T18:42:25.812Z"
---
# ADVANCED SOLID MECHANICS - Module 1: Elementary Concept of Elasticity

## Topic: Stresses in Three Dimensions

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Define and explain the concept of stress in three dimensions.**
*   **Identify and define the different components of the stress tensor.**
*   **Understand the physical meaning of normal and shear stresses in 3D.**
*   **Explain the concept of stress transformation and its necessity.**
*   **Derive and apply the stress transformation equations in 3D.**
*   **Define principal stresses and principal planes, and understand their significance.**
*   **Determine the principal stresses and their corresponding directions for a given stress state.**
*   **Understand the concept of the stress invariant and their utility.**
*   **Apply Mohr's Circle for three dimensions to visualize and analyze stress states.**
*   **Define and understand the octahedral stresses (normal and shear).**
*   **Understand the relationship between stress and strain in three dimensions (briefly, as this will be expanded in later modules).**

---

### 1. Introduction to Stress in Three Dimensions

#### 1.1 Concept of Stress

*   **Definition:** Stress is the internal force per unit area within a material. It quantifies the intensity of internal forces acting between the infinitesimally small parts of a continuous body.
*   **Internal Forces:** When an external force is applied to a body, internal resisting forces develop within the material to maintain equilibrium.
*   **Area:** Stress is defined as force divided by area. The nature of the stress depends on the orientation of the surface on which the force acts.

#### 1.2 Stress Element

*   To understand stress at a point, we consider a small, infinitesimal cube (or element) centered at that point.
*   Forces acting on the faces of this element represent the stresses at that point.

#### 1.3 Types of Stress

*   **Normal Stress ($\sigma$):** Acts perpendicular to a surface. It tends to stretch or compress the material.
    *   Tensile stress (positive): Tends to pull apart the material.
    *   Compressive stress (negative): Tends to push the material together.
*   **Shear Stress ($\tau$):** Acts parallel to a surface. It tends to slide one part of the material over another.

---

### 2. The Stress Tensor

#### 2.1 Stress Components on a Plane

*   Consider an infinitesimal surface element with a unit normal vector $\mathbf{n}$ at a point within the material.
*   The resultant stress vector $\mathbf{t}$ acting on this surface can be resolved into a component perpendicular to the surface (normal stress) and a component parallel to the surface (shear stress).

#### 2.2 Normal and Shear Stress Vector

*   **Normal Stress ($\sigma_n$):** The component of the stress vector perpendicular to the surface.
*   **Shear Stress Vector ($\boldsymbol{\tau}_t$):** The component of the stress vector parallel to the surface.

#### 2.3 Stress Tensor Defined

*   The **stress tensor**, denoted by $\boldsymbol{\sigma}$ (or $\mathbf{T}$ or $\boldsymbol{\tau}$), is a mathematical object that completely describes the state of stress at a point in a material.
*   It is a second-order tensor, which means it can be represented by a 3x3 matrix in a given coordinate system.
*   In a Cartesian coordinate system (x, y, z), the stress tensor components are usually denoted as $\sigma_{ij}$, where:
    *   The first index ($i$) indicates the direction of the normal to the surface.
    *   The second index ($j$) indicates the direction of the force component.

#### 2.4 Components of the Stress Tensor

Consider an infinitesimal cube with faces perpendicular to the x, y, and z axes.

*   **Normal Stresses:**
    *   $\sigma_{xx}$: Normal stress acting on the face with normal in the x-direction (tensile is positive).
    *   $\sigma_{yy}$: Normal stress acting on the face with normal in the y-direction.
    *   $\sigma_{zz}$: Normal stress acting on the face with normal in the z-direction.

*   **Shear Stresses:**
    *   $\sigma_{xy}$: Shear stress acting on the face with normal in the x-direction, in the y-direction.
    *   $\sigma_{xz}$: Shear stress acting on the face with normal in the x-direction, in the z-direction.
    *   $\sigma_{yx}$: Shear stress acting on the face with normal in the y-direction, in the x-direction.
    *   $\sigma_{yz}$: Shear stress acting on the face with normal in the y-direction, in the z-direction.
    *   $\sigma_{zx}$: Shear stress acting on the face with normal in the z-direction, in the x-direction.
    *   $\sigma_{zy}$: Shear stress acting on the face with normal in the z-direction, in the y-direction.

The stress tensor in matrix form is:

$$
\boldsymbol{\sigma} = \begin{pmatrix}
\sigma_{xx} & \sigma_{xy} & \sigma_{xz} \\
\sigma_{yx} & \sigma_{yy} & \sigma_{yz} \\
\sigma_{zx} & \sigma_{zy} & \sigma_{zz}
\end{pmatrix}
$$

#### 2.5 Symmetry of the Stress Tensor

*   For a body in static equilibrium, the stress tensor is symmetric. This means the shear stresses are equal in pairs:
    *   $\sigma_{xy} = \sigma_{yx}$
    *   $\sigma_{xz} = \sigma_{zx}$
    *   $\sigma_{yz} = \sigma_{zy}$
*   **Physical Reason:** This symmetry arises from the balance of moments on the infinitesimal stress element. Consider the moment about the z-axis. The shear forces $\sigma_{xy}$ and $\sigma_{yx}$ on the faces of the cube contribute to this moment. For rotational equilibrium, the net moment must be zero.
*   Therefore, the stress tensor can be written as:

$$
\boldsymbol{\sigma} = \begin{pmatrix}
\sigma_{xx} & \sigma_{xy} & \sigma_{xz} \\
\sigma_{xy} & \sigma_{yy} & \sigma_{yz} \\
\sigma_{xz} & \sigma_{yz} & \sigma_{zz}
\end{pmatrix}
$$

*   This reduces the number of independent stress components from 9 to 6.

#### 2.6 Stress Vector and its Components

*   Consider a small plane with a unit normal vector $\mathbf{n} = (n_x, n_y, n_z)$ where $n_x^2 + n_y^2 + n_z^2 = 1$.
*   The resultant stress vector $\mathbf{t}$ acting on this plane can be calculated using the stress tensor:
    *   $\mathbf{t} = \boldsymbol{\sigma} \mathbf{n}$
    *   In component form:
        $t_x = \sigma_{xx} n_x + \sigma_{xy} n_y + \sigma_{xz} n_z$
        $t_y = \sigma_{xy} n_x + \sigma_{yy} n_y + \sigma_{yz} n_z$
        $t_z = \sigma_{xz} n_x + \sigma_{yz} n_y + \sigma_{zz} n_z$

*   The normal stress on this plane, $\sigma_n$, is the projection of $\mathbf{t}$ onto $\mathbf{n}$:
    *   $\sigma_n = \mathbf{t} \cdot \mathbf{n}$
    *   $\sigma_n = t_x n_x + t_y n_y + t_z n_z$
    *   Substituting the components of $\mathbf{t}$:
        $\sigma_n = (\sigma_{xx} n_x + \sigma_{xy} n_y + \sigma_{xz} n_z) n_x + (\sigma_{xy} n_x + \sigma_{yy} n_y + \sigma_{yz} n_z) n_y + (\sigma_{xz} n_x + \sigma_{yz} n_y + \sigma_{zz} n_z) n_z$
        $\sigma_n = \sigma_{xx} n_x^2 + \sigma_{yy} n_y^2 + \sigma_{zz} n_z^2 + 2\sigma_{xy} n_x n_y + 2\sigma_{xz} n_x n_z + 2\sigma_{yz} n_y n_z$

*   The shear stress on this plane, $\boldsymbol{\tau}_t$, is the component of $\mathbf{t}$ perpendicular to $\mathbf{n}$:
    *   $\boldsymbol{\tau}_t = \mathbf{t} - \sigma_n \mathbf{n}$
    *   The magnitude of the shear stress is $|\boldsymbol{\tau}_t| = \sqrt{|\mathbf{t}|^2 - \sigma_n^2}$.

---

### 3. Stress Transformation

#### 3.1 The Need for Stress Transformation

*   The stress components $\sigma_{xx}, \sigma_{yy}, \sigma_{zz}, \sigma_{xy}, \sigma_{xz}, \sigma_{yz}$ are specific to a particular coordinate system.
*   In many engineering problems, the maximum or minimum stresses (or other critical stress states) may not align with the chosen coordinate axes.
*   Stress transformation equations allow us to determine the stress components in a new coordinate system, rotated with respect to the original one. This is crucial for identifying critical stress directions and magnitudes.

#### 3.2 Stress Transformation Equations in 3D

Consider a new coordinate system (x', y', z') rotated with respect to the original (x, y, z) system. Let the direction cosines of the new axes with respect to the old axes be:

*   x' axis: $(l_1, m_1, n_1)$ (i.e., $n_x' = l_1, n_y' = m_1, n_z' = n_1$)
*   y' axis: $(l_2, m_2, n_2)$ (i.e., $n_x'' = l_2, n_y'' = m_2, n_z'' = n_2$)
*   z' axis: $(l_3, m_3, n_3)$ (i.e., $n_x''' = l_3, n_y''' = m_3, n_z''' = n_3$)

The components of the stress tensor in the new coordinate system ($\sigma'_{ij}$) can be related to the components in the original system ($\sigma_{ij}$) by the following transformation equations:

*   **Normal Stresses in the New System:**
    $\sigma_{x'x'} = \sum_{i=1}^3 \sum_{j=1}^3 l_i l_j \sigma_{ij}$
    This can be written in matrix form as:
    $\sigma_{x'x'} = l_1^2 \sigma_{xx} + m_1^2 \sigma_{yy} + n_1^2 \sigma_{zz} + 2 l_1 m_1 \sigma_{xy} + 2 l_1 n_1 \sigma_{xz} + 2 m_1 n_1 \sigma_{yz}$

    Similarly for $\sigma_{y'y'}$ and $\sigma_{z'z'}$:
    $\sigma_{y'y'} = l_2^2 \sigma_{xx} + m_2^2 \sigma_{yy} + n_2^2 \sigma_{zz} + 2 l_2 m_2 \sigma_{xy} + 2 l_2 n_2 \sigma_{xz} + 2 m_2 n_2 \sigma_{yz}$
    $\sigma_{z'z'} = l_3^2 \sigma_{xx} + m_3^2 \sigma_{yy} + n_3^2 \sigma_{zz} + 2 l_3 m_3 \sigma_{xy} + 2 l_3 n_3 \sigma_{xz} + 2 m_3 n_3 \sigma_{yz}$

*   **Shear Stresses in the New System:**
    $\sigma_{x'y'} = \sum_{i=1}^3 \sum_{j=1}^3 l_i m_j \sigma_{ij}$
    This can be written as:
    $\sigma_{x'y'} = l_1 l_2 \sigma_{xx} + m_1 m_2 \sigma_{yy} + n_1 n_2 \sigma_{zz} + (l_1 m_2 + m_1 l_2) \sigma_{xy} + (l_1 n_2 + n_1 l_2) \sigma_{xz} + (m_1 n_2 + n_1 m_2) \sigma_{yz}$

    Similarly for $\sigma_{y'z'}$ and $\sigma_{z'x'}$:
    $\sigma_{y'z'} = l_2 l_3 \sigma_{xx} + m_2 m_3 \sigma_{yy} + n_2 n_3 \sigma_{zz} + (l_2 m_3 + m_2 l_3) \sigma_{xy} + (l_2 n_3 + n_2 l_3) \sigma_{xz} + (m_2 n_3 + n_2 m_3) \sigma_{yz}$
    $\sigma_{z'x'} = l_3 l_1 \sigma_{xx} + m_3 m_1 \sigma_{yy} + n_3 n_1 \sigma_{zz} + (l_3 m_1 + m_3 l_1) \sigma_{xy} + (l_3 n_1 + n_3 l_1) \sigma_{xz} + (m_3 n_1 + n_3 m_1) \sigma_{yz}$

**Matrix Representation:**

The stress transformation can be represented in matrix form:

$\boldsymbol{\sigma}' = \mathbf{R} \boldsymbol{\sigma} \mathbf{R}^T$

where:
*   $\boldsymbol{\sigma}'$ is the stress tensor in the new coordinate system.
*   $\boldsymbol{\sigma}$ is the stress tensor in the original coordinate system.
*   $\mathbf{R}$ is the rotation matrix, whose elements are the direction cosines:
    $$
    \mathbf{R} = \begin{pmatrix}
    l_1 & m_1 & n_1 \\
    l_2 & m_2 & n_2 \\
    l_3 & m_3 & n_3
    \end{pmatrix}
    $$
*   $\mathbf{R}^T$ is the transpose of the rotation matrix.

---

### 4. Principal Stresses and Principal Planes

#### 4.1 Definition

*   **Principal Planes:** These are planes within the material at a point where the shear stresses are zero.
*   **Principal Stresses:** The normal stresses acting on the principal planes are called principal stresses. They represent the maximum and minimum normal stresses at that point.

#### 4.2 Finding Principal Stresses

*   On a principal plane, the stress vector $\mathbf{t}$ is purely normal to the plane. This means the shear stress component is zero.
*   Let the normal to a principal plane be $\mathbf{n} = (n_x, n_y, n_z)$. The stress vector on this plane is $\mathbf{t} = \sigma_n \mathbf{n}$, where $\sigma_n$ is the principal stress.
*   Using the stress vector equation: $\boldsymbol{\sigma} \mathbf{n} = \sigma_n \mathbf{n}$
*   Rearranging: $(\boldsymbol{\sigma} - \sigma_n \mathbf{I}) \mathbf{n} = \mathbf{0}$, where $\mathbf{I}$ is the identity matrix.
*   This is an eigenvalue problem. The principal stresses ($\sigma_n$) are the eigenvalues of the stress tensor, and the corresponding normal vectors ($\mathbf{n}$) are the eigenvectors.
*   For a non-trivial solution ($\mathbf{n} \neq \mathbf{0}$), the determinant of the matrix $(\boldsymbol{\sigma} - \sigma_n \mathbf{I})$ must be zero:
    $\det(\boldsymbol{\sigma} - \sigma_n \mathbf{I}) = 0$

#### 4.3 Characteristic Equation (Cubical Invariant)

*   Expanding the determinant gives the characteristic equation, which is a cubic polynomial in $\sigma_n$:
    $\begin{vmatrix}
    \sigma_{xx} - \sigma_n & \sigma_{xy} & \sigma_{xz} \\
    \sigma_{xy} & \sigma_{yy} - \sigma_n & \sigma_{yz} \\
    \sigma_{xz} & \sigma_{yz} & \sigma_{zz} - \sigma_n
    \end{vmatrix} = 0$

*   This equation can be written in terms of stress invariants:
    $\sigma_n^3 - I_1 \sigma_n^2 + I_2 \sigma_n - I_3 = 0$

    Where:
    *   $I_1 = \sigma_{xx} + \sigma_{yy} + \sigma_{zz}$ (First invariant, trace of the stress tensor)
    *   $I_2 = (\sigma_{yy}\sigma_{zz} - \sigma_{yz}^2) + (\sigma_{zz}\sigma_{xx} - \sigma_{xz}^2) + (\sigma_{xx}\sigma_{yy} - \sigma_{xy}^2)$ (Second invariant, sum of principal minors)
    *   $I_3 = \det(\boldsymbol{\sigma}) = \sigma_{xx}(\sigma_{yy}\sigma_{zz} - \sigma_{yz}^2) - \sigma_{xy}(\sigma_{xy}\sigma_{zz} - \sigma_{yz}\sigma_{xz}) + \sigma_{xz}(\sigma_{xy}\sigma_{yz} - \sigma_{yy}\sigma_{xz})$ (Third invariant, determinant of the stress tensor)

*   The roots of this cubic equation are the three principal stresses: $\sigma_1, \sigma_2, \sigma_3$. By convention, they are ordered such that $\sigma_1 \ge \sigma_2 \ge \sigma_3$.

#### 4.4 Principal Directions (Eigenvectors)

*   Once the principal stresses are known, we can find the corresponding principal directions (eigenvectors) by substituting each $\sigma_n$ back into the equation $(\boldsymbol{\sigma} - \sigma_n \mathbf{I}) \mathbf{n} = \mathbf{0}$.
*   For each principal stress $\sigma_i$, we solve for the unit normal vector $\mathbf{n}_i = (n_x, n_y, n_z)$.
*   The three principal directions are mutually orthogonal.

#### 4.5 Significance of Principal Stresses

*   **Maximum and Minimum Normal Stresses:** $\sigma_1$ is the maximum normal stress and $\sigma_3$ is the minimum normal stress at the point.
*   **Zero Shear Stress:** Shear stresses on the principal planes are zero.
*   **Stress State Simplification:** In the coordinate system aligned with the principal directions, the stress tensor is diagonal:
    $$
    \boldsymbol{\sigma}_{principal} = \begin{pmatrix}
    \sigma_1 & 0 & 0 \\
    0 & \sigma_2 & 0 \\
    0 & 0 & \sigma_3
    \end{pmatrix}
    $$
    This is the simplest representation of the stress state at a point.

---

### 5. Stress Invariants

#### 5.1 Definition and Importance

*   **Definition:** Stress invariants are scalar quantities that remain unchanged regardless of the orientation of the coordinate system used to describe the stress state.
*   **Importance:** They are fundamental properties of the stress state at a point and are independent of the chosen axes. They are used in the characteristic equation and in various failure theories.

#### 5.2 The Three Stress Invariants

As defined earlier for the characteristic equation:

*   **First Invariant ($I_1$):**
    $I_1 = \sigma_1 + \sigma_2 + \sigma_3 = \text{trace}(\boldsymbol{\sigma}) = \sigma_{xx} + \sigma_{yy} + \sigma_{zz}$
*   **Second Invariant ($I_2$):**
    $I_2 = \sigma_1\sigma_2 + \sigma_2\sigma_3 + \sigma_3\sigma_1 = (\sigma_{yy}\sigma_{zz} - \sigma_{yz}^2) + (\sigma_{zz}\sigma_{xx} - \sigma_{xz}^2) + (\sigma_{xx}\sigma_{yy} - \sigma_{xy}^2)$
*   **Third Invariant ($I_3$):**
    $I_3 = \sigma_1\sigma_2\sigma_3 = \det(\boldsymbol{\sigma})$

#### 5.3 Other Useful Invariants

*   **Mean Stress ($\sigma_m$) or Hydrostatic Stress:**
    $\sigma_m = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3} = \frac{I_1}{3}$
    This represents the average normal stress.

*   **Deviatoric Stress Tensor:**
    $\boldsymbol{\sigma}' = \boldsymbol{\sigma} - \sigma_m \mathbf{I}$
    The deviatoric stress tensor represents the part of the stress state that causes distortion (shear deformation). Its trace is always zero.

*   **Second Invariant of the Deviatoric Stress Tensor ($J_2$):**
    $J_2 = \frac{1}{2} [(\sigma_1 - \sigma_m)^2 + (\sigma_2 - \sigma_m)^2 + (\sigma_3 - \sigma_m)^2]$
    $J_2 = \frac{1}{2} [(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2] / 2$
    $J_2 = \frac{1}{6} [(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]$
    This invariant is related to the octahedral shear stress and is crucial in plasticity and failure theories.

---

### 6. Mohr's Circle for Three Dimensions

#### 6.1 Mohr's Circle in 2D Review

*   In 2D, Mohr's circle is a graphical tool that represents the transformation of stress. A point on the circle represents the normal and shear stress components on a plane oriented at a certain angle.
*   The diameter of the 2D circle is $(\sigma_1 - \sigma_3)$, where $\sigma_1$ and $\sigma_3$ are the principal stresses in 2D.

#### 6.2 Mohr's Circle in 3D

*   In 3D, the stress state cannot be represented by a single circle. Instead, it is represented by three circles drawn on the same plane.
*   These three circles are called the **principal circles** of Mohr.
*   **Construction:**
    1.  Identify the three principal stresses: $\sigma_1, \sigma_2, \sigma_3$ (ordered $\sigma_1 \ge \sigma_2 \ge \sigma_3$).
    2.  Draw a horizontal axis representing normal stress ($\sigma$) and a vertical axis representing shear stress ($\tau$).
    3.  **Circle 1:** Centered at $\frac{\sigma_1 + \sigma_2}{2}$ with radius $\frac{\sigma_1 - \sigma_2}{2}$. This circle represents stress states on planes that have their normal vector lying in the plane formed by the $\sigma_1$ and $\sigma_2$ directions.
    4.  **Circle 2:** Centered at $\frac{\sigma_2 + \sigma_3}{2}$ with radius $\frac{\sigma_2 - \sigma_3}{2}$. This circle represents stress states on planes with their normal vector lying in the plane formed by the $\sigma_2$ and $\sigma_3$ directions.
    5.  **Circle 3:** Centered at $\frac{\sigma_1 + \sigma_3}{2}$ with radius $\frac{\sigma_1 - \sigma_3}{2}$. This circle represents stress states on planes with their normal vector lying in the plane formed by the $\sigma_1$ and $\sigma_3$ directions.

#### 6.3 Interpretation of 3D Mohr's Circles

*   **Envelope:** The entire region of possible stress states (normal and shear stresses on any plane) lies *between* the largest and smallest circles. The largest circle (radius $\frac{\sigma_1 - \sigma_3}{2}$) forms an envelope that bounds all possible shear stresses.
*   **Maximum Shear Stress:** The maximum shear stress at a point is half the difference between the maximum and minimum principal stresses:
    $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2}$. This occurs on planes that bisect the angle between the principal directions corresponding to $\sigma_1$ and $\sigma_3$.
*   **Intermediate Principal Stress:** The intermediate principal stress $\sigma_2$ plays a crucial role in defining the three Mohr circles.
*   **Stress State on a Plane:** A point on one of the three principal circles represents the normal and shear stress components for planes whose normals lie within the respective principal planes. Any arbitrary plane's stress state will lie within the region bounded by these circles.

---

### 7. Octahedral Stresses

#### 7.1 Definition

*   **Octahedral Planes:** These are planes that are equally inclined to the three principal axes. There are eight such planes, forming an octahedron. The normal vector to an octahedral plane makes equal angles with the three principal directions.
*   **Octahedral Normal Stress ($\sigma_{oct}$):** The normal stress acting on an octahedral plane.
*   **Octahedral Shear Stress ($\tau_{oct}$):** The shear stress acting on an octahedral plane.

#### 7.2 Formulas for Octahedral Stresses

The normal vector to an octahedral plane can be represented as $\mathbf{n}_{oct} = (\pm \frac{1}{\sqrt{3}}, \pm \frac{1}{\sqrt{3}}, \pm \frac{1}{\sqrt{3}})$.
The normal stress on an octahedral plane is given by:

$\sigma_{oct} = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3} + \frac{2}{3} (\sigma_1 \cos\theta_1 + \sigma_2 \cos\theta_2 + \sigma_3 \cos\theta_3)$
where $\theta_1, \theta_2, \theta_3$ are angles between the normal to the plane and the principal axes.
For the specific case of octahedral planes, where the normal vectors are equally inclined:

$\sigma_{oct} = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3}$
This is simply the mean stress.

The octahedral shear stress is given by:

$\tau_{oct} = \sqrt{\frac{1}{3}[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2] / 2}$
$\tau_{oct} = \sqrt{\frac{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}{6}}$

Alternatively, using the second invariant of the deviatoric stress tensor ($J_2$):
$\tau_{oct} = \sqrt{\frac{2}{3} J_2}$

#### 7.3 Significance

*   Octahedral stresses are often used in failure criteria (e.g., von Mises yield criterion) because they capture the overall stress state without being tied to specific orientations.
*   The octahedral shear stress is directly related to the distortion energy in the material.

---

### 8. Stress and Strain Relationship (Brief Introduction)

*   **Hooke's Law in 3D:** For linear elastic materials, the stress and strain components are related by Hooke's Law. This is expressed using the elasticity tensor (or stiffness tensor), a fourth-order tensor with 81 components (reduced to 21 independent components for an isotropic material).
*   **Isotropic Material:** For an isotropic material, the relationship simplifies significantly, involving only two material constants: Young's modulus ($E$) and Poisson's ratio ($\nu$).
*   **Strain-Stress Tensor Transformation:**
    $\epsilon_{ij} = \frac{1+\nu}{E} \sigma_{ij} - \frac{\nu}{E} (\sigma_{kk}) \delta_{ij}$
    where $\epsilon_{kk} = \epsilon_{xx} + \epsilon_{yy} + \epsilon_{zz}$ is the volumetric strain (dilatation) and $\delta_{ij}$ is the Kronecker delta.
*   In principal coordinates, this simplifies to:
    $\epsilon_1 = \frac{1}{E}[\sigma_1 - \nu(\sigma_2 + \sigma_3)]$
    $\epsilon_2 = \frac{1}{E}[\sigma_2 - \nu(\sigma_1 + \sigma_3)]$
    $\epsilon_3 = \frac{1}{E}[\sigma_3 - \nu(\sigma_1 + \sigma_2)]$
*   This relationship will be explored in much greater detail in subsequent modules on strain and constitutive laws.

---

### 9. Examples and Practice Questions

#### Example 1: Finding Principal Stresses

A stress state at a point is given by the following stress tensor (in MPa):

$$
\boldsymbol{\sigma} = \begin{pmatrix}
20 & 10 & 0 \\
10 & 30 & 5 \\
0 & 5 & 40
\end{pmatrix}
$$

Find the principal stresses.

**Solution:**
1.  **Calculate Invariants:**
    $I_1 = 20 + 30 + 40 = 90$
    $I_2 = (30 \times 40 - 5^2) + (40 \times 20 - 0^2) + (20 \times 30 - 10^2)$
    $I_2 = (1200 - 25) + (800 - 0) + (600 - 100) = 1175 + 800 + 500 = 2475$
    $I_3 = 20(30 \times 40 - 5^2) - 10(10 \times 40 - 5 \times 0) + 0$
    $I_3 = 20(1175) - 10(400) = 23500 - 4000 = 19500$

2.  **Characteristic Equation:**
    $\sigma_n^3 - I_1 \sigma_n^2 + I_2 \sigma_n - I_3 = 0$
    $\sigma_n^3 - 90 \sigma_n^2 + 2475 \sigma_n - 19500 = 0$

3.  **Solve the cubic equation:**
    By inspection or using a numerical solver, the roots are found to be approximately:
    $\sigma_1 \approx 51.66$ MPa
    $\sigma_2 \approx 32.54$ MPa
    $\sigma_3 \approx 5.80$ MPa

    *(Note: Solving cubic equations manually can be tedious. In practice, numerical solvers are used.)*

#### Example 2: Stress Transformation

A 2D stress state is given by: $\sigma_{xx} = 100$ MPa, $\sigma_{yy} = 50$ MPa, $\sigma_{xy} = 30$ MPa.
Consider a new coordinate system (x', y') rotated by an angle $\theta = 30^\circ$ counter-clockwise from the (x, y) system. Calculate the stress components $\sigma_{x'x'}, \sigma_{y'y'}, \sigma_{x'y'}$.

**Solution (for 2D transformation):**
The 2D stress transformation equations are:
$\sigma_{x'x'} = \frac{\sigma_{xx} + \sigma_{yy}}{2} + \frac{\sigma_{xx} - \sigma_{yy}}{2} \cos(2\theta) + \sigma_{xy} \sin(2\theta)$
$\sigma_{y'y'} = \frac{\sigma_{xx} + \sigma_{yy}}{2} - \frac{\sigma_{xx} - \sigma_{yy}}{2} \cos(2\theta) - \sigma_{xy} \sin(2\theta)$
$\sigma_{x'y'} = -\frac{\sigma_{xx} - \sigma_{yy}}{2} \sin(2\theta) + \sigma_{xy} \cos(2\theta)$

Given: $\sigma_{xx} = 100$, $\sigma_{yy} = 50$, $\sigma_{xy} = 30$, $\theta = 30^\circ$.
$2\theta = 60^\circ$
$\cos(60^\circ) = 0.5$, $\sin(60^\circ) = \frac{\sqrt{3}}{2} \approx 0.866$

$\sigma_{x'x'} = \frac{100 + 50}{2} + \frac{100 - 50}{2} (0.5) + 30 (0.866)$
$\sigma_{x'x'} = 75 + \frac{50}{2} (0.5) + 25.98 = 75 + 12.5 + 25.98 = 113.48$ MPa

$\sigma_{y'y'} = \frac{100 + 50}{2} - \frac{100 - 50}{2} (0.5) - 30 (0.866)$
$\sigma_{y'y'} = 75 - 12.5 - 25.98 = 36.52$ MPa

$\sigma_{x'y'} = -\frac{100 - 50}{2} (0.866) + 30 (0.5)$
$\sigma_{x'y'} = -25 (0.866) + 15 = -21.65 + 15 = -6.65$ MPa

#### Practice Questions:

1.  **Define** the stress tensor and explain its symmetry.
2.  Given the stress tensor:
    $$
    \boldsymbol{\sigma} = \begin{pmatrix}
    50 & 0 & 0 \\
    0 & -20 & 0 \\
    0 & 0 & 10
    \end{pmatrix}
    $$
    What are the principal stresses and principal directions?
3.  A state of plane stress is defined by $\sigma_{xx} = 10$ MPa, $\sigma_{yy} = 20$ MPa, and $\sigma_{xy} = 0$.
    Calculate the normal stress on a plane whose normal makes an angle of $45^\circ$ with the x-axis.
4.  For the stress state in question 2, calculate the octahedral normal stress and octahedral shear stress.
5.  **Explain** the concept of Mohr's circle in 3D and what the three principal circles represent.
6.  If the principal stresses at a point are $\sigma_1 = 100$ MPa, $\sigma_2 = 50$ MPa, and $\sigma_3 = -20$ MPa, what is the maximum shear stress at that point?

---

#### Answers to Practice Questions:

1.  **Stress Tensor Definition:** The stress tensor is a second-order tensor that completely describes the state of stress at a point. In Cartesian coordinates, it's a 3x3 matrix $\boldsymbol{\sigma}$ where $\sigma_{ij}$ represents the force component in the $j$ direction on a plane whose normal is in the $i$ direction.
    **Symmetry:** For a body in static equilibrium, the stress tensor is symmetric, meaning $\sigma_{ij} = \sigma_{ji}$. This arises from the balance of moments on an infinitesimal element, implying $\sigma_{xy} = \sigma_{yx}$, $\sigma_{xz} = \sigma_{zx}$, and $\sigma_{yz} = \sigma_{zy}$.
2.  This stress tensor is already in diagonal form, which means it's aligned with the principal directions.
    *   **Principal Stresses:** $\sigma_1 = 50$ MPa, $\sigma_2 = 10$ MPa, $\sigma_3 = -20$ MPa. (Assuming $\sigma_1 \ge \sigma_2 \ge \sigma_3$).
    *   **Principal Directions:**
        *   For $\sigma_1 = 50$ MPa, the normal is along the x-axis: $(1, 0, 0)$.
        *   For $\sigma_2 = 10$ MPa, the normal is along the z-axis: $(0, 0, 1)$.
        *   For $\sigma_3 = -20$ MPa, the normal is along the y-axis: $(0, 1, 0)$.
    *(The assignment of $\sigma_1, \sigma_2, \sigma_3$ depends on the order, but the set of values is {50, 10, -20} and the directions are {x, y, z} axes)*.
3.  For plane stress, we can consider the stress tensor as:
    $$
    \boldsymbol{\sigma} = \begin{pmatrix}
    10 & 0 & 0 \\
    0 & 20 & 0 \\
    0 & 0 & 0
    \end{pmatrix}
    $$
    (The third normal stress $\sigma_{zz}$ is zero, and all shear stresses involving the z-direction are zero).
    The principal stresses in this 2D context are $\sigma_1 = 20$ MPa and $\sigma_2 = 10$ MPa. The third principal stress is $\sigma_3 = 0$.
    The normal stress on a plane inclined at $45^\circ$ to the x-axis is given by the 2D transformation formula:
    $\sigma_n = \frac{\sigma_{xx} + \sigma_{yy}}{2} + \frac{\sigma_{xx} - \sigma_{yy}}{2} \cos(2\theta)$
    $\sigma_n = \frac{10 + 20}{2} + \frac{10 - 20}{2} \cos(2 \times 45^\circ)$
    $\sigma_n = \frac{30}{2} + \frac{-10}{2} \cos(90^\circ)$
    $\sigma_n = 15 + (-5)(0) = 15$ MPa.
    *Alternatively, using the general 3D normal stress formula with $n_x = \cos(45^\circ) = 1/\sqrt{2}$, $n_y = \sin(45^\circ) = 1/\sqrt{2}$, $n_z = 0$:*
    $\sigma_n = \sigma_{xx} n_x^2 + \sigma_{yy} n_y^2 + \sigma_{zz} n_z^2 + 2\sigma_{xy} n_x n_y + 2\sigma_{xz} n_x n_z + 2\sigma_{yz} n_y n_z$
    $\sigma_n = 10 (1/\sqrt{2})^2 + 20 (1/\sqrt{2})^2 + 0(0)^2 + 2(0)(1/\sqrt{2})(1/\sqrt{2}) + 2(0)(1/\sqrt{2})(0) + 2(0)(1/\sqrt{2})(0)$
    $\sigma_n = 10 (1/2) + 20 (1/2) = 5 + 10 = 15$ MPa.
4.  Principal stresses: $\sigma_1 = 50$ MPa, $\sigma_2 = 10$ MPa, $\sigma_3 = -20$ MPa.
    *   **Octahedral Normal Stress ($\sigma_{oct}$):**
        $\sigma_{oct} = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3} = \frac{50 + 10 + (-20)}{3} = \frac{40}{3} \approx 13.33$ MPa.
    *   **Octahedral Shear Stress ($\tau_{oct}$):**
        $\tau_{oct} = \sqrt{\frac{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}{6}}$
        $\tau_{oct} = \sqrt{\frac{(50 - 10)^2 + (10 - (-20))^2 + (-20 - 50)^2}{6}}$
        $\tau_{oct} = \sqrt{\frac{(40)^2 + (30)^2 + (-70)^2}{6}} = \sqrt{\frac{1600 + 900 + 4900}{6}} = \sqrt{\frac{7400}{6}} = \sqrt{1233.33} \approx 35.12$ MPa.
5.  **Mohr's Circle in 3D:** It represents stress states using three circles (principal circles) on a shear stress vs. normal stress diagram. These circles have radii $(\sigma_1-\sigma_2)/2$, $(\sigma_2-\sigma_3)/2$, and $(\sigma_1-\sigma_3)/2$, centered on the normal stress axis at $(\sigma_1+\sigma_2)/2$, $(\sigma_2+\sigma_3)/2$, and $(\sigma_1+\sigma_3)/2$ respectively.
    *   **Representation:** The region bounded by these three circles contains all possible stress states (combinations of normal and shear stresses) on any plane passing through the point.
    *   **Largest Circle:** The largest circle (radius $(\sigma_1-\sigma_3)/2$) defines the envelope of maximum shear stress.
    *   **Intermediate Stress:** $\sigma_2$ defines the relative positioning and sizing of the three circles.
6.  **Maximum Shear Stress:**
    $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2} = \frac{100 \text{ MPa} - (-20 \text{ MPa})}{2} = \frac{120 \text{ MPa}}{2} = 60$ MPa.

---

### Important Points to Remember:

*   **Stress is an internal force per unit area.**
*   **The stress tensor** ($\boldsymbol{\sigma}$) completely defines the stress state at a point.
*   **Symmetry of the stress tensor** ($\sigma_{ij} = \sigma_{ji}$) is crucial for equilibrium.
*   **Principal stresses** are the maximum and minimum normal stresses at a point, occurring on planes of zero shear stress.
*   **The characteristic equation** is used to find principal stresses and involves stress invariants ($I_1, I_2, I_3$).
*   **Stress invariants** are independent of the coordinate system.
*   **Mohr's circle in 3D** uses three principal circles to visualize stress transformation. The largest circle's radius gives the maximum shear stress.
*   **Octahedral shear stress** is a useful measure of the shear stress state that is independent of specific plane orientations.
*   The relationship between stress and strain (Hooke's Law) forms the basis of elastic behavior, linking stress to deformation.
