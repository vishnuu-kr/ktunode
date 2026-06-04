---
title: "introduction to axisymmetric elements"
subject: "FINITE ELEMENT METHOD"
module: "Module 4: Development of stiffness matrix for bar element and beam element"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116de"
status: "completed"
scrapedAt: "2026-05-20T18:59:03.261Z"
---
# Finite Element Method: Module 4 - Stiffness Matrix for Bar and Beam Elements

## Topic: Introduction to Axisymmetric Elements

This section introduces the concept of axisymmetric elements within the broader context of the Finite Element Method. While the primary focus of Module 4 is on bar and beam elements, understanding axisymmetric behavior provides a foundational stepping stone for more complex 2D and 3D analyses.

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the concept of axisymmetry:** Recognize what makes a problem or structure axisymmetric.
*   **Identify the need for axisymmetric analysis:** Know when traditional 1D or 3D approaches might be inefficient or inadequate.
*   **Appreciate the simplification offered by axisymmetric elements:** Understand how reducing dimensionality leads to computational advantages.
*   **Recognize the typical degrees of freedom (DOFs) for axisymmetric elements:** Identify the relevant displacements and their associated nodal values.
*   **Understand the fundamental assumptions governing axisymmetric behavior:** Be aware of the simplifications made in deriving axisymmetric formulations.

---

### 1. What is Axisymmetry?

**Definition:** An axisymmetric problem or structure is one where the geometry, material properties, loading, and boundary conditions are all symmetric about a single axis of rotation.

**Key Characteristics:**

*   **Rotational Symmetry:** The behavior of the system is identical at any angular position around the axis of symmetry.
*   **Simplification of Geometry:** Instead of analyzing a 3D object, we can analyze a 2D cross-section that, when rotated around the axis of symmetry, generates the original 3D object.

**Examples of Axisymmetric Structures and Problems:**

*   **Tanks and Pressure Vessels:** Cylindrical or spherical tanks subjected to internal or external pressure.
*   **Pipes and Conduits:** Flow through pipes under pressure.
*   **Rotating Disks and Flywheels:** Stresses and deformations due to centrifugal forces.
*   **Shafts and Axles:** Torsion and bending in cylindrical components.
*   **Annular Rings and Washers:** Loads applied to ring-shaped components.
*   **Certain Machined Parts:** Components with rotational symmetry.

---

### 2. Why Use Axisymmetric Analysis?

**Computational Efficiency:**

*   **Reduced Degrees of Freedom (DOFs):** Instead of a 3D analysis with thousands or millions of DOFs, an axisymmetric analysis typically involves a 2D mesh, significantly reducing the problem size. This leads to:
    *   Faster computation times.
    *   Lower memory requirements.
*   **Simplified Formulation:** The mathematical formulation for axisymmetric elements is simpler than for general 3D elements due to the exploitation of rotational symmetry.

**Focus on Critical Stresses:**

*   In many axisymmetric problems, the most critical stresses occur in the plane containing the axis of symmetry or in planes perpendicular to it. Axisymmetric analysis allows for a direct investigation of these stress distributions.

---

### 3. The Axisymmetric Element in FEM

**Concept:**

An axisymmetric element represents a portion of the 3D axisymmetric body by considering its 2D cross-section in the $r-z$ plane (where $r$ is the radial distance from the axis of symmetry and $z$ is the axial coordinate).

**Typical Element Geometry:**

The most common axisymmetric element is the **axisymmetric triangular element** (often referred to as the "quadrilateral" element in 2D FEM, but here it represents a 2D cross-section). It has three nodes, each typically lying on the radial line $r$ and the axial direction $z$.

**Degrees of Freedom (DOFs):**

For an axisymmetric element, each node has **two** degrees of freedom:

*   **Radial Displacement ($u_r$):** Displacement in the direction perpendicular to the axis of symmetry (i.e., along the $r$ direction).
*   **Axial Displacement ($u_z$):** Displacement parallel to the axis of symmetry (i.e., along the $z$ direction).

**Important Note:** In axisymmetric analysis, we do *not* consider the tangential (circumferential) displacement $u_\theta$. This is because due to symmetry, the tangential displacement will be zero everywhere or will vary linearly with the radial coordinate in a way that is accounted for by the radial and axial displacements.

---

### 4. Assumptions in Axisymmetric Analysis

The formulation of axisymmetric elements relies on several key assumptions to simplify the problem:

*   **Geometry:** The geometry is perfectly symmetric about a single axis.
*   **Material Properties:** Material properties are uniform and isotropic within the 2D cross-section and do not vary with the angular position.
*   **Loading:** Loads are applied symmetrically with respect to the axis of rotation. This means loads are typically in the radial or axial directions and are constant for a given $r$ and $z$ location, regardless of the angular position.
*   **Boundary Conditions:** Boundary conditions (e.g., fixed supports, prescribed displacements) are also symmetric with respect to the axis of rotation.
*   **Stress/Strain State:** The stress and strain state is also symmetric. Specifically, the tangential stress and strain are related to the radial and axial stresses and strains. The tangential displacement $u_\theta$ is assumed to be zero or proportional to $r$ (e.g., $u_\theta = 0$ or $u_\theta = \omega r$, where $\omega$ is the angular velocity or rotation). In standard static axisymmetric analysis, we often assume $u_\theta = 0$.

**Key Implication of Assumptions:**

The most significant implication is that the entire 3D body can be represented by a 2D cross-section. The analysis is performed in the $r-z$ plane, and the results are then conceptually "rotated" to represent the 3D behavior.

---

### 5. Connection to Bar and Beam Elements

While this topic introduces axisymmetric elements, it's important to see the connection to Module 4's primary focus: bar and beam elements.

*   **Bar Elements:** Bar elements primarily handle axial forces and displacements. In an axisymmetric context, the axial displacement ($u_z$) in the $r-z$ plane corresponds to the axial deformation of a cylindrical bar. The radial displacement ($u_r$) in the $r-z$ plane is analogous to a radial expansion or contraction.
*   **Beam Elements:** Beam elements handle bending and shear. Axisymmetric bending is more complex and typically requires different formulations than simple beam theory. However, the concept of stiffness matrices and assembly remains fundamental.

**General FEM Workflow:**

The process of developing stiffness matrices for axisymmetric elements follows the same general FEM workflow as for bar and beam elements:

1.  **Discretization:** Divide the 2D cross-section into smaller elements.
2.  **Element Formulation:**
    *   Choose an element type (e.g., axisymmetric triangular).
    *   Define shape functions (interpolation functions) for displacements within the element.
    *   Derive strain-displacement relations (using appropriate constitutive laws, considering the tangential strain).
    *   Derive stress-strain relations (constitutive matrix).
    *   Formulate the element stiffness matrix ($[k]_e$) using the principle of minimum potential energy or virtual work.
3.  **Assembly:** Assemble the element stiffness matrices into a global stiffness matrix ($[K]$).
4.  **Boundary Conditions:** Apply essential boundary conditions.
5.  **Solution:** Solve the global system of equations ($[K]\{U\} = \{F\}$) for nodal displacements $\{U\}$.
6.  **Post-processing:** Calculate strains and stresses within each element.

---

### Practice Questions and Exercises:

1.  **Definition Check:** Briefly define what constitutes an axisymmetric problem.
2.  **Example Identification:** List three real-world examples of structures that can be analyzed using axisymmetric modeling.
3.  **DOFs:** How many degrees of freedom are typically associated with each node of a 2D axisymmetric element? What are these DOFs?
4.  **Assumption Impact:** What is the primary computational advantage gained by using axisymmetric analysis instead of a full 3D analysis for a symmetric problem?
5.  **Tangential Displacement:** Explain why tangential displacement is typically not considered as an independent nodal DOF in standard static axisymmetric analysis.

---

### Answers to Practice Questions:

1.  An axisymmetric problem is one where the geometry, material properties, loading, and boundary conditions are all symmetric about a single axis of rotation.
2.  Possible examples: Pressure vessels, pipes under internal pressure, rotating disks, cylindrical tanks.
3.  Each node typically has two degrees of freedom: radial displacement ($u_r$) and axial displacement ($u_z$).
4.  The primary advantage is a significant reduction in the number of degrees of freedom, leading to faster computation times and lower memory requirements.
5.  In static axisymmetric analysis, the tangential displacement ($u_\theta$) is assumed to be either zero or proportional to the radial coordinate ($u_\theta = \omega r$) and is implicitly accounted for by the radial and axial displacements due to the symmetry assumptions. Explicitly including it would lead to a 3D problem.

---

### Important Points to Remember:

*   **Symmetry is Key:** Axisymmetric analysis is only valid if the problem exhibits perfect rotational symmetry.
*   **2D Representation:** The analysis is performed on a 2D cross-section in the $r-z$ plane.
*   **Reduced DOFs:** Axisymmetric elements significantly reduce computational effort compared to 3D analyses.
*   **$u_r$ and $u_z$ are the primary DOFs:** Tangential displacement is generally not an independent nodal DOF.
*   **Applications:** This method is powerful for analyzing common engineering components like pressure vessels and rotating machinery.

---
