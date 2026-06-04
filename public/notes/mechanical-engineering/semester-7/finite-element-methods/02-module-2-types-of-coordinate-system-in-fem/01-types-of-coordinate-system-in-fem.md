---
title: "Types of coordinate system in FEM"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464292"
status: "completed"
scrapedAt: "2026-05-20T18:12:54.471Z"
---
# Finite Element Methods: Module 2 - Types of Coordinate Systems in FEM

## Introduction

This module delves into the fundamental concept of coordinate systems used in Finite Element Methods (FEM). Understanding how to represent geometry and displacements in different coordinate systems is crucial for accurately formulating and solving complex engineering problems. We will explore the various types of coordinate systems and their significance in FEM analysis.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   **LO1:** Distinguish between different types of coordinate systems used in FEM.
*   **LO2:** Understand the necessity and application of each coordinate system.
*   **LO3:** Relate coordinate systems to the formulation of shape functions and element matrices.
*   **LO4:** Recognize the role of coordinate transformations in solving problems with complex geometries.

## Course Outcomes Alignment

This module directly contributes to the following Course Outcomes:

*   **CO2:** To apply the coordinate transformation and formulation of shape functions of various elements. (Knowledge Level: K3) - This module lays the groundwork for understanding coordinate transformations which are essential for shape function formulation.
*   **CO5:** To study the concept of iso parametric elements and analyze iso parametric formulations. (Knowledge Level: K4) - Iso parametric formulations heavily rely on the use of a single coordinate system (natural coordinate system) to define geometry and displacements, which we will introduce here.

---

## 1. Cartesian Coordinate System (Global Coordinate System)

The Cartesian coordinate system, also known as the global or fixed coordinate system, is the most familiar and widely used coordinate system in mathematics and engineering. It is defined by mutually orthogonal axes (usually denoted as x, y, and z) originating from a common origin.

### Key Concepts and Definitions

*   **Origin:** The point where all axes intersect (0, 0, 0).
*   **Axes:** Mutually perpendicular lines representing the directions of measurement.
*   **Coordinates:** The numerical values that specify the location of a point in space relative to the origin along each axis.

### Applications in FEM

*   **Defining Global Geometry:** The overall dimensions and shape of the physical domain being analyzed are initially defined in the global Cartesian coordinate system.
*   **Boundary Conditions:** Essential for applying loads and supports at specific locations within the global domain.
*   **Assembly of Global Stiffness Matrix:** The element stiffness matrices, once formulated, are assembled into a global stiffness matrix that is organized based on the global nodal degrees of freedom.

### Examples

*   A rectangular plate under tension, where the plate lies in the xy-plane with its corners defined by (0,0), (L,0), (L,W), and (0,W).
*   A beam fixed at one end and loaded at the other, with the beam aligned along the x-axis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### Textbooks Reference

*   **Reddy (2009):** Introduces the fundamental concept of describing physical quantities and geometry using the Cartesian system in early chapters when discussing the basic FEM procedure.
*   **Cook (2008):** Emphasizes the Cartesian system as the initial framework for defining the problem domain and applying loads.
*   **Bhavikatti (2008):** Uses Cartesian coordinates to explain the basic steps of discretization and the definition of element properties.
*   **Fish & Belytschko (2007):** Explains how the global system is used for nodal connectivity and the assembly of global matrices.

### Important Points to Remember

*   The global Cartesian system provides a fixed reference frame for the entire structure or domain.
*   All nodes and elements are initially defined in this system.

---

## 2. Local Coordinate System (Element Coordinate System)

The local coordinate system is defined independently for each finite element. It simplifies the formulation of element stiffness matrices and shape functions, especially for elements with simple geometries.

### Key Concepts and Definitions

*   **Element-Specific:** Each element has its own unique local coordinate system.
*   **Element Origin:** The origin of the local system is typically placed at a convenient location within the element, such as at one of its nodes or its geometric center.
*   **Element Axes:** The axes of the local system are usually aligned with the principal directions of the element, making calculations simpler.

### Applications in FEM

*   **Element Stiffness Matrix Formulation:** Many element stiffness matrices are most easily derived in a local coordinate system. This avoids complex transformations during the initial derivation.
*   **Shape Function Formulation:** Shape functions are often defined in terms of local or natural coordinates, which are typically normalized and lie within a specific range (e.g., -1 to +1).
*   **Simplification of Integration:** Integrals for calculating element properties (like stiffness and mass) are often simpler to evaluate in a local system.

### Types of Local Coordinate Systems

*   **Element Cartesian Coordinates:** A Cartesian system defined for each element, usually with its origin at one of the element's nodes.
*   **Natural Coordinates (Isoparametric Coordinates):** A dimensionless coordinate system that is particularly useful for curved or complex-shaped elements. These coordinates are typically normalized and range from -1 to +1. For a 1D element, it's usually a single coordinate (ξ). For a 2D element, it's two coordinates (ξ, η), and for a 3D element, it's three coordinates (ξ, η, ζ).

### Examples

*   **1D Bar Element:** A local coordinate system with the origin at the left node and the axis aligned with the element's length.
*   **2D Rectangular Element:** A local coordinate system with the origin at the bottom-left node and axes aligned with the element's sides.
*   **2D Triangular Element:** Often defined using natural coordinates (ξ, η), where the shape functions are directly expressed in terms of these coordinates.

### Textbooks Reference

*   **Reddy (2009):** Dedicates significant attention to defining shape functions and deriving element matrices in local and natural coordinate systems, particularly for various element types.
*   **Cook (2008):** Illustrates the benefits of using local coordinates for deriving element stiffness and other matrices, simplifying the mathematical derivations.
*   **Bhavikatti (2008):** Explains how local coordinates simplify the interpolation of displacements and the calculation of strains within an element.
*   **Fish & Belytschko (2007):** Introduces natural coordinates (ξ, η) as a powerful tool for handling elements of arbitrary shapes and for isoparametric formulations.

### Important Points to Remember

*   Local coordinate systems are element-specific and simplify element formulation.
*   Natural coordinates are a type of local coordinate system that are dimensionless and essential for isoparametric elements.

---

## 3. Coordinate Transformation

Coordinate transformation is the process of converting coordinates from one system to another. In FEM, this is crucial for relating element matrices formulated in local systems to the global system.

### Key Concepts and Definitions

*   **Transformation Matrix:** A matrix that relates the coordinates or displacement vectors in one coordinate system to another.
*   **Rotation Matrix:** A specific type of transformation matrix used when the axes of the two coordinate systems are parallel but have different origins, or when one system is rotated relative to another.
*   **Translation:** Shifting the origin of a coordinate system.

### Applications in FEM

*   **Element Stiffness Matrix Transformation:** Element stiffness matrices formulated in a local coordinate system are transformed into the global coordinate system using a transformation matrix. This allows for the assembly of the global stiffness matrix.
*   **Relating Node Displacements:** Transforming nodal displacements from a local element orientation to their corresponding global displacements.
*   **Handling Rotated Elements:** For elements that are not aligned with the global axes, coordinate transformations are essential to accurately represent their stiffness and behavior in the global system.

### Types of Transformations

*   **2D Plane Element Rotation:**
    Let the global Cartesian coordinates be (x, y) and the local Cartesian coordinates for an element be (x', y'). If the local x'-axis is rotated by an angle θ with respect to the global x-axis, the transformation relationships are:
    $x' = x \cos \theta + y \sin \theta$
    $y' = -x \sin \theta + y \cos \theta$
    The displacement transformation can be represented as:
    $u' = u \cos \theta + v \sin \theta$
    $v' = -u \sin \theta + v \cos \theta$
    Where (u, v) are displacements in the global system and (u', v') are displacements in the local system.

    The transformation matrix (often denoted as **L**) relates the global nodal displacements $\{u_e\}$ to the local nodal displacements $\{u'_e\}$:
    $\{u'_e\} = [L] \{u_e\}$
    And the element stiffness matrix in the global system is related to the stiffness matrix in the local system $[k']$ by:
    $[k_e] = [L]^T [k'] [L]$

*   **3D Element Rotation:** In 3D, the transformation involves direction cosines and can be more complex, involving rotation matrices for three dimensions.

### Examples

*   **Slanted Beam Element:** A beam element that is not aligned with the global x-axis requires a rotation transformation to relate its stiffness matrix to the global system. The angle of rotation θ is determined by the coordinates of its nodes.
*   **Triangular Element in Global System:** A triangular element might be defined by nodes in the global Cartesian system. To formulate its stiffness matrix, it's often convenient to transform the coordinates to a local system aligned with the element's sides, then transform the stiffness matrix back to the global system.

### Textbooks Reference

*   **Reddy (2009):** Provides detailed derivations of transformation matrices for 2D and 3D elements, explaining how to convert element matrices between local and global systems.
*   **Cook (2008):** Focuses on the mechanics of coordinate transformations, illustrating their use in assembling the global stiffness matrix from element matrices.
*   **Bhavikatti (2008):** Explains the transformation of element stiffness matrices using rotation matrices, emphasizing the role of direction cosines.
*   **Fish & Belytschko (2007):** Discusses coordinate transformations in the context of general element formulations, including the Jacobian matrix for isoparametric transformations.
*   **Segerlind (2010):** Offers a thorough treatment of transformation matrices for various element types, including detailed examples of 2D and 3D transformations.
*   **Hutton (2009):** Explains the process of transforming element properties into a global framework, highlighting the mathematical basis for these transformations.

### Important Points to Remember

*   Coordinate transformations are essential for integrating element behavior into the global system.
*   The transformation matrix is derived from the relative orientation of the local and global coordinate systems.
*   For stiffness matrices, the transformation involves $[k_e] = [L]^T [k'] [L]$.

---

## 4. Natural Coordinate System (Isoparametric Coordinates)

The natural coordinate system is a dimensionless coordinate system defined locally for each element. It is particularly powerful for formulating elements of arbitrary shapes, including curved ones.

### Key Concepts and Definitions

*   **Dimensionless:** Coordinates do not have physical units.
*   **Normalized Range:** Typically defined to range from -1 to +1.
*   **Geometric Mapping:** The natural coordinates are used to map the element's geometry in the physical (global) domain to a simple reference element (e.g., a square or triangle) in the natural coordinate domain.
*   **Shape Functions:** Shape functions are directly defined in terms of natural coordinates.
*   **Isoparametric Elements:** Elements where the same set of shape functions is used to describe both the geometry of the element and the variation of the field variable (e.g., displacement) within the element.

### Applications in FEM

*   **Handling Complex Geometries:** Natural coordinates allow for the representation of curved boundaries and complex element shapes.
*   **Isoparametric Formulations:** The core of isoparametric element formulation relies on defining both nodal coordinates and nodal unknowns using the same shape functions in natural coordinates.
*   **Numerical Integration (Gauss Quadrature):** Integrals are typically performed over the reference element in natural coordinates using Gauss quadrature, which is efficient for these domains.

### Types of Natural Coordinate Systems

*   **1D Elements:** A single coordinate, usually denoted by ξ (xi), ranging from -1 to +1. The reference element is a line segment.
*   **2D Elements:** Two coordinates, typically ξ and η (eta), ranging from -1 to +1. The reference element is a square. For triangular elements, sometimes a third coordinate ζ (zeta) is introduced, with ξ + η + ζ = 1, or the system can be expressed using just ξ and η.
*   **3D Elements:** Three coordinates, typically ξ, η, and ζ, ranging from -1 to +1. The reference element is a cube.

### Examples

*   **1D Quadratic Bar Element:**
    Nodes at ξ = -1, 0, +1. Shape functions are $N_1 = \frac{1}{2} (\xi^2 - \xi)$, $N_2 = 1 - \xi^2$, $N_3 = \frac{1}{2} (\xi^2 + \xi)$.
*   **2D Isoparametric Quadrilateral Element (Serendipity or Lagrangian):**
    Uses nodal coordinates (x, y) and displacements (u, v) defined as:
    $x(\xi, \eta) = \sum_{i=1}^n N_i(\xi, \eta) x_i$
    $y(\xi, \eta) = \sum_{i=1}^n N_i(\xi, \eta) y_i$
    $u(\xi, \eta) = \sum_{i=1}^n N_i(\xi, \eta) u_i$
    $v(\xi, \eta) = \sum_{i=1}^n N_i(\xi, \eta) v_i$
    Where $N_i$ are the shape functions and $(x_i, y_i)$ are the global coordinates of node $i$, and $(u_i, v_i)$ are the global displacements of node $i$.

### Textbooks Reference

*   **Reddy (2009):** Provides a comprehensive introduction to isoparametric elements and natural coordinates, explaining their use in formulating elements of arbitrary shapes.
*   **Cook (2008):** Details the concept of isoparametric mapping and the Jacobian matrix, crucial for integrating in the natural coordinate system.
*   **Bhavikatti (2008):** Explains the formulation of shape functions in natural coordinates and their application in isoparametric elements.
*   **Fish & Belytschko (2007):** Focuses on the mathematical aspects of isoparametric formulations, including the Jacobian, and its implications for stress and strain calculations.
*   **Segerlind (2010):** Offers clear explanations of natural coordinates for various element types and their role in simplifying element formulation.
*   **Hutton (2009):** Explains how isoparametric elements use natural coordinates to define both geometry and displacements, making them highly versatile.
*   **Ramamurthi (2008):** Discusses the advantages of natural coordinates for FEM, especially for meshing complex domains and implementing numerical integration.

### Important Points to Remember

*   Natural coordinates are dimensionless and normalized, simplifying integration and formulation for curved elements.
*   Isoparametric elements use the same shape functions for geometry and displacement, defined in natural coordinates.
*   The Jacobian matrix is essential for transforming integrals from the physical domain to the natural coordinate domain.

---

## 5. The Jacobian Matrix and its Role in Transformations

The Jacobian matrix is a fundamental tool used in conjunction with natural coordinates for coordinate transformations. It relates differential changes in the physical coordinate system to differential changes in the natural coordinate system.

### Key Concepts and Definitions

*   **Jacobian Matrix ($J$):** A matrix containing the partial derivatives of the physical coordinates (x, y, z) with respect to the natural coordinates (ξ, η, ζ).
    For a 2D element:
    $$
    [J] = \begin{bmatrix}
    \frac{\partial x}{\partial \xi} & \frac{\partial x}{\partial \eta} \\
    \frac{\partial y}{\partial \xi} & \frac{\partial y}{\partial \eta}
    \end{bmatrix}
    $$
*   **Jacobian Determinant ($det(J)$):** The determinant of the Jacobian matrix. It represents the ratio of the differential area (or volume) in the physical domain to the differential area (or volume) in the natural coordinate domain.
    $dA = |det(J)| d\xi d\eta$ (for 2D)
    $dV = |det(J)| d\xi d\eta d\zeta$ (for 3D)
*   **Inverse Jacobian:** Used to compute derivatives of shape functions with respect to physical coordinates.
    $[\frac{\partial N_i}{\partial x} \quad \frac{\partial N_i}{\partial y}] = [\frac{\partial N_i}{\partial \xi} \quad \frac{\partial N_i}{\partial \eta}] [J]^{-1}$

### Applications in FEM

*   **Integral Transformation:** Essential for changing the limits of integration from the physical domain to the reference element in the natural coordinate domain:
    $\int_{V_e} f(x,y) dA = \int_{-1}^{1} \int_{-1}^{1} f(x(\xi,\eta), y(\xi,\eta)) |det(J)| d\xi d\eta$
*   **Strain-Displacement Matrix Calculation:** The strain-displacement matrix [B] requires derivatives of displacements with respect to physical coordinates. These are calculated using the Jacobian matrix and the derivatives of shape functions with respect to natural coordinates.
*   **Element Stiffness Matrix Calculation:**
    $[k_e] = \int_{V_e} [B]^T [D] [B] dV$
    This integral is transformed to the natural coordinate system using the Jacobian:
    $[k_e] = \int_{-1}^{1} \int_{-1}^{1} [B(\xi,\eta)]^T [D] [B(\xi,\eta)] |det(J)| d\xi d\eta$

### Examples

*   **Quadrilateral Element:** When calculating the strain-displacement matrix for a 2D isoparametric quadrilateral element, the derivatives of displacements like $\frac{\partial u}{\partial x}$ are obtained by:
    $\frac{\partial u}{\partial x} = \frac{\partial u}{\partial \xi} \frac{\partial \xi}{\partial x} + \frac{\partial u}{\partial \eta} \frac{\partial \eta}{\partial x}$
    The terms $\frac{\partial \xi}{\partial x}$, $\frac{\partial \eta}{\partial x}$, $\frac{\partial \xi}{\partial y}$, $\frac{\partial \eta}{\partial y}$ are found from the inverse of the Jacobian matrix.

### Textbooks Reference

*   **Reddy (2009):** Provides detailed derivations of the Jacobian matrix and its inverse for various element types and demonstrates its use in calculating the [B] matrix and stiffness matrices.
*   **Cook (2008):** Explains the concept of the Jacobian determinant as a scaling factor for area/volume transformation and its importance in numerical integration.
*   **Bhavikatti (2008):** Shows how to compute the Jacobian matrix and its determinant for different elements and its role in stress and strain calculations.
*   **Fish & Belytschko (2007):** Emphasizes the Jacobian in the context of numerical integration and the calculation of element properties for isoparametric elements.
*   **Segerlind (2010):** Offers a clear explanation of the Jacobian and its application in transforming integrals from physical space to natural space.
*   **Hutton (2009):** Illustrates how the Jacobian connects the geometry defined in natural coordinates to the physical geometry, enabling accurate calculations of derivatives.
*   **Ramamurthi (2008):** Focuses on the Jacobian's role in numerical integration schemes like Gauss Quadrature for isoparametric elements.

### Important Points to Remember

*   The Jacobian matrix is crucial for transforming integrals and derivatives between physical and natural coordinate systems.
*   The determinant of the Jacobian represents the area/volume distortion during the transformation.
*   Accurate calculation of the Jacobian is vital for obtaining correct element matrices and ultimately the solution.

---

## Practice Questions and Exercises

**Question 1:**
Explain the purpose of a local coordinate system in FEM. What is the advantage of using natural coordinates for element formulation?

**Answer 1:**
A local coordinate system is defined for each element independently to simplify the formulation of element stiffness matrices and shape functions. Natural coordinates are a type of local, dimensionless coordinate system that is particularly advantageous for handling elements of arbitrary shapes, including curved ones. They allow for a unified formulation using isoparametric concepts and simplify numerical integration.

**Question 2:**
Consider a 2D linear quadrilateral element with nodes at (0,0), (L,0), (L,W), and (0,W).
a) Define its local Cartesian coordinate system (x', y') with origin at (0,0).
b) Define its natural coordinate system (ξ, η) where ξ=-1 and ξ=1 correspond to x=0 and x=L respectively, and η=-1 and η=1 correspond to y=0 and y=W respectively.
c) Sketch the mapping of the physical element to the reference element in the natural coordinate system.

**Answer 2:**
a) **Local Cartesian (x', y'):** Origin at (0,0).
   $x' = x$
   $y' = y$
b) **Natural Coordinates (ξ, η):**
   For a standard mapping of a rectangle:
   $x = \frac{1}{2}(1+\xi)L$  => $\xi = \frac{2x}{L} - 1$
   $y = \frac{1}{2}(1+\eta)W$  => $\eta = \frac{2y}{W} - 1$
   The reference element in the (ξ, η) plane is a square with vertices at (-1,-1), (1,-1), (1,1), and (-1,1).
c) The mapping is a direct linear transformation where the corners of the physical rectangle in the (x,y) plane map to the corners of the reference square in the (ξ, η) plane.

**Question 3:**
For a 1D bar element of length L, aligned with the x-axis, show the transformation of the element stiffness matrix $[k']$ from the local coordinate system (x') to the global coordinate system (x). Assume the local x'-axis is along the element.

**Answer 3:**
If the element is aligned with the global x-axis, the local and global coordinate systems are essentially the same (or can be made so by translation, which doesn't affect stiffness matrix). If we consider a simple 1D bar element, the stiffness matrix in the local system $[k']$ would be:
$$
[k'] = \frac{AE}{L} \begin{bmatrix}
1 & -1 \\
-1 & 1
\end{bmatrix}
$$
where A is the cross-sectional area and E is the Young's modulus.
If the element is aligned with the global x-axis, the transformation matrix [L] would be an identity matrix or simply a matrix that maps the local degrees of freedom to the global degrees of freedom. For a 1D element with two nodes, if the local and global node ordering is the same:
$$
[L] = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \quad \text{(if considering 2D displacement components)}
$$
Or more simply for 1D axial displacements, if $u'$ are local displacements and $u$ are global displacements: $u' = u$.
The transformation of the stiffness matrix $[k_e]$ in the global system from the local stiffness matrix $[k']$ is:
$$
[k_e] = [L]^T [k'] [L]
$$
If $[L]$ is an identity matrix, then $[k_e] = [k']$. For a simple 1D case, if the element is aligned with the global axis, the element stiffness matrix in the global system is the same as in the local system.

**Question 4:**
What is the primary role of the Jacobian matrix in isoparametric formulations?

**Answer 4:**
The primary role of the Jacobian matrix in isoparametric formulations is to facilitate the transformation of integrals (for calculating element stiffness, mass, etc.) from the physical element domain to the simple reference element domain in natural coordinates. It also provides the necessary relationships to compute derivatives of field variables (like displacement) with respect to physical coordinates (x, y, z) from their derivatives with respect to natural coordinates (ξ, η, ζ).

---

## Important Points to Remember (Summary)

*   **Global Cartesian System:** Fixed reference for the entire problem. Used for defining geometry, applying boundary conditions, and assembling the global system.
*   **Local Coordinate System:** Element-specific, simplifies element formulation. Natural coordinates (ξ, η, ζ) are a common type of local system, dimensionless and normalized (-1 to +1).
*   **Coordinate Transformation:** Essential for relating local element properties to the global system, especially for rotated or curved elements.
*   **Transformation Matrix [L]:** Links displacements and stiffness matrices between local and global systems. For stiffness, $[k_e] = [L]^T [k'] [L]$.
*   **Isoparametric Elements:** Use the same shape functions for geometry and field variable interpolation, defined in natural coordinates. Highly versatile for complex geometries.
*   **Jacobian Matrix ($J$):** Connects differential changes in physical coordinates to natural coordinates. Crucial for transforming integrals and calculating derivatives for isoparametric elements. Its determinant $|det(J)|$ is the area/volume scaling factor.

---

This module provides the foundational understanding of how different coordinate systems and transformations are employed in FEM. This knowledge is critical for developing accurate element formulations and understanding the mechanics of FEM analysis for a wide range of engineering problems.