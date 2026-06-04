---
title: "Types of coordinate system in FEM"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463845"
status: "completed"
scrapedAt: "2026-05-20T18:03:56.042Z"
---
# Finite Element Methods: Module 2 - Types of Coordinate Systems in FEM

## 1. Introduction to Coordinate Systems in FEM

The Finite Element Method (FEM) is a powerful numerical technique used to solve complex engineering problems that are often described by partial differential equations. A crucial aspect of FEM is the ability to represent the geometry of the problem domain and the behavior of the solution within that domain. Coordinate systems play a fundamental role in this representation.

### Learning Outcomes Addressed:
*   Understanding the governing equations of various physical phenomena and basic procedure of FEM. (CO1, K2)
*   Applying coordinate transformation and formulation of shape functions of various elements. (CO2, K3)

### Key Concepts & Definitions:
*   **Domain:** The region in space or time over which a physical phenomenon occurs.
*   **Element:** A small, discrete portion of the domain.
*   **Node:** A point within an element where the unknown variable (e.g., displacement, temperature) is approximated.
*   **Coordinate System:** A reference system used to describe the location of points within the domain and elements.

### Types of Coordinate Systems:
FEM utilizes different types of coordinate systems to facilitate the analysis and transformation of information between different geometric representations. The primary types are:

#### 1.1. Global (Cartesian) Coordinate System ($x, y, z$)

*   **Description:** This is the standard coordinate system used to describe the overall geometry of the problem. It is fixed for the entire problem domain.
*   **Purpose:**
    *   Defines the physical dimensions and locations of the structure or domain.
    *   Used for defining boundary conditions and applied loads in their actual physical locations.
    *   Provides a common reference frame for all elements.
*   **Textbook References:**
    *   **Reddy (3rd Ed., 2009):** Chapter 2, "One-Dimensional Finite Elements," often introduces concepts using Cartesian coordinates.
    *   **Cook (3rd Ed., 2008):** Chapter 2, "The Finite Element Method: A First Step," discusses the need for a global reference.
    *   **Bhavikatti (3rd Ed., 2008):** Chapter 2, "One Dimensional Finite Elements," typically starts with the global representation.
*   **Example:** For a beam resting on the ground, the global $x$-axis could be along the beam's length, and the global $y$-axis vertical.
*   **Important Point to Remember:** The global coordinate system represents the "real world" dimensions of the problem.

#### 1.2. Local (Element) Coordinate System ($\xi, \eta, \zeta$)

*   **Description:** Each finite element can have its own coordinate system, referred to as the local or element coordinate system. These coordinates are typically normalized and range from -1 to +1 for simpler element formulations.
*   **Purpose:**
    *   Simplifies the mathematical formulation of element properties (e.g., stiffness matrices, load vectors).
    *   Allows for consistent formulation of element matrices regardless of the element's orientation or position in the global system.
    *   Facilitates the implementation of numerical integration techniques like Gaussian quadrature.
*   **Textbook References:**
    *   **Reddy (3rd Ed., 2009):** Chapter 3, "Two-Dimensional Finite Elements," introduces the use of natural or local coordinates for quadrilateral and triangular elements.
    *   **Cook (3rd Ed., 2008):** Chapter 4, "Element Stiffness Matrices," discusses mapping from global to local coordinates and vice-versa.
    *   **Bhavikatti (3rd Ed., 2008):** Chapter 3, "Two Dimensional Finite Elements," extensively uses isoparametric concepts with local coordinates.
    *   **Fish & Belytschko (2nd Ed., 2007):** Chapter 2, "Two-Dimensional Elements," delves into the transformation to natural coordinates.
*   **Example:** For a square element in the global $x, y$ system, the local $\xi, \eta$ system might have its origin at the center of the element, with $\xi$ ranging from -1 to +1 along the element's width and $\eta$ ranging from -1 to +1 along its height.
*   **Important Point to Remember:** Local coordinates simplify calculations and provide a standardized way to define elements.

#### 1.3. Natural Coordinate System

*   **Description:** This term is often used interchangeably with the local coordinate system, especially when the local coordinates are normalized and intrinsic to the element's geometry. For triangular elements, natural coordinates are barycentric coordinates.
*   **Purpose:** Same as local coordinate systems.
*   **Textbook References:**
    *   **Segerlind (2nd Ed., 2010):** Chapter 3, "The Plane Stress-Strain Problem," discusses natural coordinates for triangular elements.
    *   **Ramamurthi (2nd Ed.):** Chapter 2, "Finite Element Formulation," covers natural coordinates in the context of element formulation.
    *   **Hutton (3rd Ed., 2009):** Chapter 4, "Element Formulation," explores natural coordinates for isoparametric elements.
*   **Example:** For a triangular element, the natural coordinates $\lambda_1, \lambda_2, \lambda_3$ are defined such that their sum is 1 ($\lambda_1 + \lambda_2 + \lambda_3 = 1$), and they represent the relative distances from the element's vertices.
*   **Important Point to Remember:** Natural coordinates are particularly useful for defining interpolation functions for elements with triangular or simplex shapes.

## 2. Coordinate Transformation

A critical aspect of FEM is the ability to relate the local element coordinates to the global system coordinates. This transformation allows us to assemble element matrices into a global system for the entire domain.

### Learning Outcomes Addressed:
*   Applying coordinate transformation and formulation of shape functions of various elements. (CO2, K3)

### Key Concepts & Definitions:
*   **Coordinate Transformation:** The mathematical process of converting coordinates from one system to another.
*   **Jacobian Matrix:** A matrix of partial derivatives that relates the differentials in the local coordinate system to the differentials in the global coordinate system. It's crucial for integration and transformation.
*   **Shape Functions (Interpolation Functions):** Functions that define the variation of the unknown variable within an element in terms of nodal values.

### Types of Transformations:

#### 2.1. Transformation from Local to Global Coordinates

*   **Description:** This transformation maps points defined in the local coordinate system to their corresponding locations in the global coordinate system. For isoparametric elements, this mapping is done using shape functions.
*   **Mathematical Representation (Isoparametric Elements):**
    For an element in $n$ dimensions, a point $(x, y, ...)$ in the global system can be related to the local coordinates $(\xi, \eta, ...)$ and nodal coordinates $(x_i, y_i, ...)$ by:
    $x = \sum_{i=1}^{N} N_i(\xi, \eta, ...) x_i$
    $y = \sum_{i=1}^{N} N_i(\xi, \eta, ...) y_i$
    ...
    where $N_i$ are the shape functions in the local coordinate system, and $x_i, y_i$ are the global coordinates of the $i$-th node.
*   **Textbook References:**
    *   **Reddy (3rd Ed., 2009):** Chapter 4, "Isoparametric Elements," details this transformation extensively.
    *   **Cook (3rd Ed., 2008):** Chapter 5, "Isoparametric Elements," provides a thorough explanation of the mapping.
    *   **Fish & Belytschko (2nd Ed., 2007):** Chapter 5, "Isoparametric Elements," discusses the theoretical underpinnings.
*   **Example:** For a 2D rectangular element with nodes at $(x_1, y_1), (x_2, y_2), (x_3, y_3), (x_4, y_4)$ and local coordinates $(\xi, \eta)$, the global coordinates $(x, y)$ of any point within the element are:
    $x = N_1 x_1 + N_2 x_2 + N_3 x_3 + N_4 x_4$
    $y = N_1 y_1 + N_2 y_2 + N_3 y_3 + N_4 y_4$
    where $N_i$ are the shape functions in $(\xi, \eta)$.

#### 2.2. Transformation from Global to Local Coordinates

*   **Description:** This is the inverse of the above transformation. It's often more complex, especially for isoparametric elements, as it might involve solving a system of non-linear equations.
*   **Purpose:** To determine the local coordinates of a point given its global coordinates. This is often needed for numerical integration (e.g., evaluating stiffness matrices at specific Gauss points).

#### 2.3. Jacobian Matrix and its Role

*   **Description:** The Jacobian matrix, denoted by $[J]$, is fundamental for relating differentials and performing integrations between coordinate systems.
    For a 2D system with $x, y$ in global and $\xi, \eta$ in local:
    $[J] = \begin{bmatrix} \frac{\partial x}{\partial \xi} & \frac{\partial x}{\partial \eta} \\ \frac{\partial y}{\partial \xi} & \frac{\partial y}{\partial \eta} \end{bmatrix}$
*   **Purpose:**
    *   **Area/Volume Transformation:** $|det(J)| d\xi d\eta = dx dy$ (for 2D). This is used when changing the integration variable in integrals, especially during stiffness matrix calculation.
    *   **Gradient Transformation:** The relationship between gradients in global and local coordinates is also mediated by the Jacobian. For example, $[\frac{\partial}{\partial x}, \frac{\partial}{\partial y}]^T = [J]^{-1} [\frac{\partial}{\partial \xi}, \frac{\partial}{\partial \eta}]^T$.
*   **Textbook References:**
    *   **Reddy (3rd Ed., 2009):** Chapter 4, "Isoparametric Elements," provides detailed derivations for the Jacobian.
    *   **Cook (3rd Ed., 2008):** Chapter 5, "Isoparametric Elements," explains how to compute and use the Jacobian.
    *   **Hutton (3rd Ed., 2009):** Chapter 4, "Element Formulation," emphasizes the Jacobian for integration.
*   **Example:** For a 2D 4-node rectangular element with shape functions $N_i$, the Jacobian matrix entries are calculated as:
    $\frac{\partial x}{\partial \xi} = \sum_{i=1}^{4} \frac{\partial N_i}{\partial \xi} x_i$
    $\frac{\partial x}{\partial \eta} = \sum_{i=1}^{4} \frac{\partial N_i}{\partial \eta} x_i$
    and similarly for $y$. The determinant of this matrix is used for integration.
*   **Important Point to Remember:** The Jacobian is essential for accurate integration and transformations, especially for non-linear mappings (isoparametric elements).

## 3. Practice Questions and Exercises

**Question 1:** Explain the need for both global and local coordinate systems in FEM. (CO1, K2)

**Question 2:** For a 2D problem, how is the Jacobian matrix defined? What is its significance in FEM calculations? (CO2, K3)

**Question 3:** Consider a 1D bar element with length $L$. If the global coordinate $x$ ranges from 0 to $L$, what would be a suitable local coordinate system ($\xi$) for this element? Derive the transformation equation between $x$ and $\xi$. (CO2, K3)

**Question 4:** Given a 2D triangular element with nodes at $(x_1, y_1), (x_2, y_2), (x_3, y_3)$, what are natural coordinates? How do they relate to the nodal values? (CO2, K3)

---

## 4. Answers to Practice Questions

**Answer 1:**
*   **Global Coordinate System:** Is necessary to define the actual physical dimensions, locations of boundaries, and applied loads of the problem domain. It provides a common reference frame for the entire structure.
*   **Local Coordinate System:** Simplifies the mathematical formulation of element properties (like stiffness matrices). It allows for a consistent and standardized approach to deriving these matrices, regardless of the element's size, shape, or orientation in the global system. It also facilitates the use of numerical integration techniques.

**Answer 2:**
For a 2D problem, where global coordinates are $(x, y)$ and local coordinates are $(\xi, \eta)$, the Jacobian matrix $[J]$ is defined as:
$[J] = \begin{bmatrix} \frac{\partial x}{\partial \xi} & \frac{\partial x}{\partial \eta} \\ \frac{\partial y}{\partial \xi} & \frac{\partial y}{\partial \eta} \end{bmatrix}$

Its significance lies in:
*   **Integration Transformation:** It allows us to transform integrals from the global coordinate system ($dx dy$) to the local coordinate system ($d\xi d\eta$) using the relationship $dx dy = |det(J)| d\xi d\eta$. This is crucial for calculating element stiffness matrices and load vectors, which often involve integration over the element domain.
*   **Gradient Transformation:** It is used to relate gradients of the solution (e.g., strain, heat flux) in the global system to those in the local system, which is essential for calculating element strains and stresses.

**Answer 3:**
For a 1D bar element of length $L$, where the global coordinate $x$ ranges from 0 to $L$:
A suitable local coordinate system ($\xi$) would be a normalized coordinate system ranging from -1 to +1.
The transformation equation can be derived by assuming a linear mapping:
$x = a\xi + b$
When $\xi = -1$, $x = 0 \implies 0 = -a + b \implies b = a$
When $\xi = +1$, $x = L \implies L = a + b$
Substituting $b=a$: $L = a + a = 2a \implies a = L/2$.
Therefore, $b = L/2$.
The transformation is: $x = \frac{L}{2}\xi + \frac{L}{2}$
Or, solving for $\xi$: $\xi = \frac{2x}{L} - 1$.

**Answer 4:**
For a 2D triangular element with nodes at $(x_1, y_1), (x_2, y_2), (x_3, y_3)$, natural coordinates (also known as barycentric coordinates) are $\lambda_1, \lambda_2, \lambda_3$. They are defined such that:
*   $\lambda_1 + \lambda_2 + \lambda_3 = 1$
*   $\lambda_i \ge 0$ for points inside the triangle, and $\lambda_i = 0$ on the opposite edge.

These coordinates directly relate to the nodal values of the shape functions. For a linear triangular element, the shape functions $N_i$ are identical to the natural coordinates:
$N_1 = \lambda_1$, $N_2 = \lambda_2$, $N_3 = \lambda_3$.
The value of any field variable (e.g., temperature $T$) at any point within the triangle can be expressed as a linear combination of the nodal values:
$T(x, y) = T_1 N_1 + T_2 N_2 + T_3 N_3 = T_1 \lambda_1 + T_2 \lambda_2 + T_3 \lambda_3$.

## 5. Important Points to Remember

*   **Global vs. Local:** Global for physical reality, Local for mathematical simplification and generalization.
*   **Isoparametric Concept:** Using the same shape functions to describe geometry and the variation of the unknown field variable. This is a powerful tool for handling curved boundaries.
*   **Jacobian:** The bridge between local and global differentials. Its determinant is crucial for integration.
*   **Normalized Coordinates:** Often preferred in local systems (-1 to +1) for ease of integration (Gaussian Quadrature) and formulation independence.
*   **Natural Coordinates:** A specific type of local coordinate system, particularly useful for simplex elements (e.g., triangles, tetrahedrons).

This module lays the groundwork for understanding how FEM handles geometric complexity by breaking down the problem into simpler, standardized elements, and how transformations allow us to stitch these elements together into a global solution.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
