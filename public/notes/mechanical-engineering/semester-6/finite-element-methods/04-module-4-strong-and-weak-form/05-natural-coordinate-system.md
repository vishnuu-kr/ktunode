---
title: "natural coordinate system"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463859"
status: "completed"
scrapedAt: "2026-05-20T18:04:08.930Z"
---
# FINITE ELEMENT METHODS - Module 4: Strong and Weak Form

## Topic: Natural Coordinate System

### Learning Outcomes Addressed:

*   Understanding the concept of natural coordinates and their advantages.
*   Formulating shape functions using natural coordinates for various element types (1D, 2D, 3D).
*   Applying natural coordinates for isoparametric formulations.
*   Understanding the relationship between natural coordinates and the strong/weak form of governing equations.

### Course Outcomes Addressed:

*   **CO1 (K2):** To understand the governing equations of various physical phenomena and basic procedure of FEM. (Natural coordinates are a tool for simplifying the FEM procedure).
*   **CO2 (K3):** To apply the coordinate transformation and formulation of shape functions of various element. (Natural coordinates are fundamental to coordinate transformation and shape function formulation).
*   **CO3 (K4):** Formulate shape functions and element strain displacement matrix of various element. (Shape functions formulated in natural coordinates are essential for this).
*   **CO5 (K4):** Study the concept of iso parametric elements and analyze iso parametric formulations. (Natural coordinates are critical for isoparametric mapping).

---

### 1. Introduction to Natural Coordinate Systems

**1.1 What is a Natural Coordinate System?**

A natural coordinate system is a coordinate system defined *within* an element, where the coordinates are normalized and have a range typically between -1 and +1. This system is independent of the global Cartesian coordinate system (x, y, z) and is particularly useful for:

*   **Simplifying Shape Function Formulation:** Defining shape functions within the element's natural coordinate system makes them easier to derive and generalize for different element shapes and sizes.
*   **Isoparametric Formulations:** It's the foundation for mapping a complex physical element to a simple parent element in the natural coordinate system.
*   **Numerical Integration (Gaussian Quadrature):** Many numerical integration schemes are defined over the range [-1, 1], making natural coordinates ideal for these applications.

**1.2 Advantages of Natural Coordinate Systems:**

*   **Element Independence:** Shape functions formulated in natural coordinates are the same regardless of the element's size, shape, or orientation in the global system.
*   **Simplified Derivations:** Mathematical derivations, especially for shape functions and Jacobian matrices, become more straightforward.
*   **Systematic Approach:** Provides a consistent and systematic way to define elements and their properties.

**Key Concept:** The natural coordinate system intrinsically ties the coordinates to the geometry of the element itself, making it a "natural" choice for defining the element's behavior.

---

### 2. Natural Coordinates for Different Element Dimensions

The definition of natural coordinates depends on the dimensionality of the element.

#### 2.1 1D Elements (Line Segments)

*   **Global Coordinate:** $x$
*   **Natural Coordinate:** $\xi$
*   **Range:** $-1 \le \xi \le +1$

**Relationship between Global and Natural Coordinates:**

The relationship between the global coordinate $x$ and the natural coordinate $\xi$ for a 1D element with nodes at $x_1$ and $x_2$ is linear:

$x = N_1(\xi)x_1 + N_2(\xi)x_2$

where $N_1(\xi)$ and $N_2(\xi)$ are the shape functions.

For a 1D element, the shape functions in natural coordinates are:

*   $N_1(\xi) = \frac{1}{2}(1 - \xi)$
*   $N_2(\xi) = \frac{1}{2}(1 + \xi)$

**Mapping:**
*   Node 1 (where $x = x_1$) corresponds to $\xi = -1$.
*   Node 2 (where $x = x_2$) corresponds to $\xi = +1$.

**Example:** Consider a line segment from $x=0$ to $x=10$.
*   If $\xi = 0$, then $x = \frac{1}{2}(1)(0) + \frac{1}{2}(1)(10) = 5$. The midpoint.
*   If $\xi = 0.5$, then $x = \frac{1}{2}(1 - 0.5)(0) + \frac{1}{2}(1 + 0.5)(10) = \frac{1}{2}(0.5)(0) + \frac{1}{2}(1.5)(10) = 0 + 7.5 = 7.5$.

**Textbook Reference:**
*   **Reddy (2009), Chapter 5:** Discusses coordinate transformations and shape functions for 1D elements, often introducing natural coordinates as a simplification.
*   **Cook (2008), Chapter 4:** Explains the concept of parent elements and local coordinates, which are synonymous with natural coordinates for 1D elements.

#### 2.2 2D Elements (Triangles and Quadrilaterals)

*   **Global Coordinates:** $x, y$
*   **Natural Coordinates:** $\xi, \eta$
*   **Range:** Typically $-1 \le \xi \le +1$ and $-1 \le \eta \le +1$ for quadrilaterals. For triangles, the range might be defined differently, often using area coordinates or a similar $\xi, \eta$ system where the sum of coordinates is constrained.

##### 2.2.1 2D Quadrilateral Elements (Serendipity and Lagrange)

For a standard 4-node quadrilateral element (bilinear quadrilateral), the natural coordinates $(\xi, \eta)$ are defined such that:
*   The edges of the element align with the $\xi$ or $\eta$ axes.
*   The vertices of the element are at $(\pm 1, \pm 1)$ in the $(\xi, \eta)$ system.

**Shape Functions for a 4-node Quadrilateral Element:**

The shape functions $N_i(\xi, \eta)$ are products of linear functions of $\xi$ and $\eta$.

*   $N_1(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 - \eta)$ (at $\xi=-1, \eta=-1$)
*   $N_2(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 - \eta)$ (at $\xi=+1, \eta=-1$)
*   $N_3(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 + \eta)$ (at $\xi=+1, \eta=+1$)
*   $N_4(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 + \eta)$ (at $\xi=-1, \eta=+1$)

The physical coordinates $(x, y)$ of any point within the element are related to the nodal coordinates $(x_i, y_i)$ and shape functions by:

$x = \sum_{i=1}^{4} N_i(\xi, \eta) x_i$
$y = \sum_{i=1}^{4} N_i(\xi, \eta) y_i$

**Example:** Consider a square element with vertices at (0,0), (2,0), (2,2), (0,2).
The mapping from natural to global coordinates will transform $(\pm 1, \pm 1)$ to these vertices.
For example, if we want to find the physical coordinates at $(\xi, \eta) = (0, 0)$ (the center of the parent element):

$x = \frac{1}{4}(1)(1)x_1 + \frac{1}{4}(1)(1)x_2 + \frac{1}{4}(1)(1)x_3 + \frac{1}{4}(1)(1)x_4 = \frac{1}{4}(x_1+x_2+x_3+x_4)$
$y = \frac{1}{4}(1)(1)y_1 + \frac{1}{4}(1)(1)y_2 + \frac{1}{4}(1)(1)y_3 + \frac{1}{4}(1)(1)y_4 = \frac{1}{4}(y_1+y_2+y_3+y_4)$

If the vertices are (0,0), (2,0), (2,2), (0,2), then:
$x = \frac{1}{4}(0+2+2+0) = \frac{4}{4} = 1$
$y = \frac{1}{4}(0+0+2+2) = \frac{4}{4} = 1$
The center is indeed (1,1).

##### 2.2.2 2D Triangular Elements (Lagrange)

For a 3-node triangular element (linear triangle), the natural coordinates are often defined as area coordinates or a $\xi, \eta$ system. A common approach uses two coordinates, $\xi$ and $\eta$, within the range of [0, 1], with the constraint $\xi + \eta \le 1$.

Alternatively, a system similar to the quadrilateral can be used, but it might involve triangular parent elements with nodes at $(-1,0), (1,0), (0,1)$ or $(0,0), (1,0), (0,1)$. A more general natural coordinate system for a triangle often uses three coordinates, $L_1, L_2, L_3$, called **areal coordinates** or **barycentric coordinates**, such that:
*   $L_1 \ge 0, L_2 \ge 0, L_3 \ge 0$
*   $L_1 + L_2 + L_3 = 1$

The shape functions for a 3-node linear triangle are directly the area coordinates:
*   $N_1(L_1, L_2, L_3) = L_1$
*   $N_2(L_1, L_2, L_3) = L_2$
*   $N_3(L_1, L_2, L_3) = L_3$

The physical coordinates $(x, y)$ are given by:
$x = L_1 x_1 + L_2 x_2 + L_3 x_3$
$y = L_1 y_1 + L_2 y_2 + L_3 y_3$

**Mapping:**
*   Node 1 corresponds to $(L_1, L_2, L_3) = (1, 0, 0)$
*   Node 2 corresponds to $(L_1, L_2, L_3) = (0, 1, 0)$
*   Node 3 corresponds to $(L_1, L_2, L_3) = (0, 0, 1)$
*   The centroid of the triangle corresponds to $(L_1, L_2, L_3) = (1/3, 1/3, 1/3)$

**Textbook Reference:**
*   **Bhavikatti (2008), Chapter 6:** Details shape functions for triangular and quadrilateral elements, often using natural or local coordinates for derivation.
*   **Fish & Belytschko (2007), Chapter 3 & 4:** Explains mapping between physical and reference (natural) element domains, essential for formulating shape functions and stiffness matrices for 2D elements.

#### 2.3 3D Elements (Tetrahedrons, Hexahedrons, etc.)

*   **Global Coordinates:** $x, y, z$
*   **Natural Coordinates:** $\xi, \eta, \zeta$
*   **Range:** $-1 \le \xi, \eta, \zeta \le +1$ for hexahedral (brick) elements. For tetrahedral elements, a similar mapping to the 2D triangle case can be extended using three or four natural coordinates (e.g., $\xi, \eta, \zeta$ with $\xi + \eta + \zeta \le 1$ or four barycentric coordinates).

**Shape Functions for an 8-node Hexahedral Element (Trilinear Hexahedron):**

Similar to the 4-node quadrilateral, shape functions are products of linear terms in $\xi, \eta, \zeta$.

$N_i(\xi, \eta, \zeta) = \frac{1}{8}(1 \pm \xi)(1 \pm \eta)(1 \pm \zeta)$

where the signs $( \pm )$ are chosen according to the node's position in the $(\xi, \eta, \zeta)$ space. For instance, node 1 at $(\xi=-1, \eta=-1, \zeta=-1)$ will have the shape function:

$N_1(\xi, \eta, \zeta) = \frac{1}{8}(1 - \xi)(1 - \eta)(1 - \zeta)$

The physical coordinates $(x, y, z)$ are related by:

$x = \sum_{i=1}^{8} N_i(\xi, \eta, \zeta) x_i$
$y = \sum_{i=1}^{8} N_i(\xi, \eta, \zeta) y_i$
$z = \sum_{i=1}^{8} N_i(\xi, \eta, \zeta) z_i$

**Textbook Reference:**
*   **Segerlind (2010), Chapter 6:** Provides comprehensive coverage of 3D elements and the derivation of their shape functions, often utilizing natural coordinate systems.
*   **Hutton (2009), Chapter 7:** Discusses the formulation of shape functions for 3D elements, highlighting the role of mapping to a standard element in natural coordinates.

---

### 3. Relationship with Strong and Weak Forms

Natural coordinates are not directly part of the strong or weak formulation themselves, but they are instrumental in formulating the *elemental stiffness matrices* and *load vectors* that are ultimately used in the finite element assembly process derived from the weak form.

*   **Strong Form:** The governing differential equation that must be satisfied exactly (e.g., $\frac{d^2u}{dx^2} = f(x)$).
*   **Weak Form:** Obtained by applying integral formulations (like Galerkin's method or the principle of virtual work) to the strong form, reducing the order of derivatives and allowing for less strict satisfaction of boundary conditions. This typically results in an integral equation: $\int_{\Omega} w L(u) d\Omega = \int_{\Omega} w f d\Omega$.

**How Natural Coordinates are Used:**

1.  **Discretization:** The domain is divided into elements.
2.  **Approximation:** Within each element, the unknown field variable (e.g., displacement $u$) is approximated using shape functions $N_i$ and nodal values $u_i$:
    $u^e(\xi, \eta, \zeta) \approx \sum_{i=1}^{n} N_i(\xi, \eta, \zeta) u_i^e$
    These shape functions $N_i$ are derived in the natural coordinate system.
3.  **Derivatives:** Derivatives of $u$ with respect to global coordinates $(x, y, z)$ are required for the weak form (e.g., strain-displacement relations). These derivatives are calculated using the chain rule and the Jacobian matrix, which relates differentials in global and natural coordinates:
    $\frac{\partial u}{\partial x} = \sum_{i=1}^{n} \frac{\partial N_i}{\partial \xi} \frac{\partial \xi}{\partial x} + \frac{\partial N_i}{\partial \eta} \frac{\partial \eta}{\partial x} + \frac{\partial N_i}{\partial \zeta} \frac{\partial \zeta}{\partial x}$
    The terms $\frac{\partial \xi}{\partial x}$, etc., are derived from the Jacobian matrix:
    $[J] = \begin{bmatrix} \frac{\partial x}{\partial \xi} & \frac{\partial y}{\partial \xi} & \frac{\partial z}{\partial \xi} \\ \frac{\partial x}{\partial \eta} & \frac{\partial y}{\partial \eta} & \frac{\partial z}{\partial \eta} \\ \frac{\partial x}{\partial \zeta} & \frac{\partial y}{\partial \zeta} & \frac{\partial z}{\partial \zeta} \end{bmatrix}$
    and its inverse $[J]^{-1} = \begin{bmatrix} \frac{\partial \xi}{\partial x} & \frac{\partial \eta}{\partial x} & \frac{\partial \zeta}{\partial x} \\ \frac{\partial \xi}{\partial y} & \frac{\partial \eta}{\partial y} & \frac{\partial \zeta}{\partial y} \\ \frac{\partial \xi}{\partial z} & \frac{\partial \eta}{\partial z} & \frac{\partial \zeta}{\partial z} \end{bmatrix}$.
    Since $x = \sum N_i x_i$, $\frac{\partial x}{\partial \xi} = \sum \frac{\partial N_i}{\partial \xi} x_i$, and so on for all terms in the Jacobian.
4.  **Integral Evaluation:** The integrals in the weak form are typically over the element domain in physical space ($d\Omega = dx dy dz$). However, using the Jacobian determinant ($det[J]$), these integrals are transformed to be over the natural coordinate system ($d\Omega_{natural} = d\xi d\eta d\zeta$):
    $\int_{\Omega^e} (\dots) dx dy dz = \int_{-1}^{1} \int_{-1}^{1} (\dots) \det[J] d\xi d\eta$ (for 2D quadrilateral)

**Key Takeaway:** Natural coordinates provide the framework to express the approximation within an element and to transform integrals from the physical (often irregular) element domain to a standard parent element domain in a convenient coordinate system for numerical integration and analytical manipulation.

**Textbook Reference:**
*   **Reddy (2009), Chapter 6:** Focuses on the Finite Element Formulation of solid mechanics problems. It explains how strain-displacement relations (which involve derivatives) are computed using shape functions defined in natural coordinates and the Jacobian matrix.
*   **Fish & Belytschko (2007), Chapter 4:** This chapter is crucial as it details the mechanics of isoparametric mapping and the calculation of the Jacobian, which is central to transforming integrals and derivatives between physical and natural coordinate systems.

---

### 4. Isoparametric Formulations

**4.1 What are Isoparametric Elements?**

Isoparametric elements are a class of finite elements where the same shape functions are used to describe the geometry of the element and the variation of the unknown field variable within the element. This means:

*   **Geometry Approximation:** $x(\xi, \eta, \zeta) = \sum_{i=1}^{n} N_i(\xi, \eta, \zeta) x_i$
*   **Field Variable Approximation:** $u(\xi, \eta, \zeta) = \sum_{i=1}^{n} N_i(\xi, \eta, \zeta) u_i$

where $N_i$ are the same shape functions. This is a powerful concept because it allows FEM to model curved boundaries and complex geometries accurately using a single set of shape functions.

**4.2 Role of Natural Coordinates in Isoparametric Elements:**

Natural coordinates are indispensable for isoparametric formulations.

1.  **Parent Element:** The mapping from an arbitrary physical element (with potentially curved sides and nodes at any global coordinates) to a simple **parent element** (or reference element) in the natural coordinate system ($[-1, 1]^d$) is achieved using the isoparametric mapping.
2.  **Shape Function Definition:** Shape functions are *always* defined on the parent element in the natural coordinate system. Their form is simple and consistent.
3.  **Jacobian Calculation:** The Jacobian matrix $[J]$ is computed in the natural coordinate system using the derivatives of the shape functions and the nodal coordinates. This Jacobian is crucial for:
    *   Transforming derivatives of the field variable from natural to global coordinates.
    *   Transforming the integration domain from physical to natural coordinates.
4.  **Numerical Integration (Gaussian Quadrature):** Integrals appearing in the weak form (e.g., for stiffness matrices, load vectors) are evaluated numerically. Gaussian quadrature is typically applied over the parent element in the natural coordinate system using specific integration points and weights.

**Example (Isoparametric Quadrilateral Element):**

Consider a 4-node quadrilateral element with some curved sides. The geometry is described by:
$x(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) x_i$
$y(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) y_i$

The displacement $u$ is also approximated using the *same* shape functions:
$u(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) u_i$

The stiffness matrix element $k_{ij}^e = \int_{A^e} [B_i]^T [D] [B_j] dA$, where $[B_i]$ is the strain-displacement matrix. The calculation of $[B_i]$ involves derivatives of $N_i$ with respect to $x$ and $y$.

$\frac{\partial N_i}{\partial x} = \frac{\partial N_i}{\partial \xi} \frac{\partial \xi}{\partial x} + \frac{\partial N_i}{\partial \eta} \frac{\partial \eta}{\partial x}$
$\frac{\partial N_i}{\partial y} = \frac{\partial N_i}{\partial \xi} \frac{\partial \xi}{\partial y} + \frac{\partial N_i}{\partial \eta} \frac{\partial \eta}{\partial y}$

The terms $\frac{\partial \xi}{\partial x}$, $\frac{\partial \eta}{\partial x}$, etc., are obtained from $[J]^{-1}$. The integration is performed in $\xi, \eta$:
$k_{ij}^e = \int_{-1}^{1} \int_{-1}^{1} [B_i(\xi, \eta)]^T [D] [B_j(\xi, \eta)] \det[J] d\xi d\eta$

**Textbook Reference:**
*   **Cook (2008), Chapter 5 & 6:** Provides a thorough explanation of isoparametric concepts, mapping, Jacobian, and numerical integration for both 2D and 3D elements.
*   **Fish & Belytschko (2007), Chapter 4:** Explores quadrilateral and triangular elements and their isoparametric formulations in detail, connecting them to the derivation of stiffness matrices.
*   **Reddy (2009), Chapter 5 & 7:** Covers isoparametric formulations for different element types, including the derivation of shape functions and the necessary transformations.

---

### 5. Practice Questions and Exercises

**Question 1:**
For a 1D linear element with nodes at $x_1 = 5$ and $x_2 = 15$, find the natural coordinate $\xi$ corresponding to the physical coordinate $x = 10$.

**Answer 1:**
The relationship is $x = \frac{1}{2}(1-\xi)x_1 + \frac{1}{2}(1+\xi)x_2$.
Substituting the values:
$10 = \frac{1}{2}(1-\xi)(5) + \frac{1}{2}(1+\xi)(15)$
$20 = 5(1-\xi) + 15(1+\xi)$
$20 = 5 - 5\xi + 15 + 15\xi$
$20 = 20 + 10\xi$
$0 = 10\xi \implies \xi = 0$.

**Question 2:**
Consider a 4-node isoparametric quadrilateral element. Write down the shape function $N_2(\xi, \eta)$ and identify the coordinates of the corresponding node in the natural system.

**Answer 2:**
The shape function for node 2 (typically at $\xi=+1, \eta=-1$) is:
$N_2(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 - \eta)$
The coordinates of node 2 in the natural system are $(\xi, \eta) = (+1, -1)$.

**Question 3:**
What is the primary advantage of using natural coordinate systems for finite element analysis, particularly in relation to isoparametric formulations?

**Answer 3:**
The primary advantage is that it allows for the definition of element properties (like shape functions) on a standardized "parent" element with simple coordinates (e.g., -1 to +1). This simplifies the derivation of shape functions, facilitates the mapping of complex physical element geometries (including curved boundaries) to the parent element, and makes numerical integration (like Gaussian quadrature) straightforward and consistent across all element types and sizes.

**Question 4:**
For a 2D linear triangular element, what are the shape functions if they are defined using area coordinates $L_1, L_2, L_3$?

**Answer 4:**
For a 3-node linear triangular element, the shape functions are directly the area coordinates:
$N_1 = L_1$
$N_2 = L_2$
$N_3 = L_3$
where $L_1+L_2+L_3 = 1$, and $L_i \ge 0$.

**Question 5:**
Explain the role of the Jacobian matrix in transforming integrals from physical space to natural space for isoparametric elements.

**Answer 5:**
The Jacobian matrix $[J]$ relates differentials in the physical coordinate system $(dx, dy, dz)$ to differentials in the natural coordinate system $(d\xi, d\eta, d\zeta)$. For an integral $\int_{\Omega^e} f(x,y,z) dV$ over a physical element $\Omega^e$, the transformation to the natural coordinate system is given by:
$\int_{\Omega^e} f(x,y,z) dV = \int_{\Omega_{parent}} f(x(\xi,\eta,\zeta), y(\xi,\eta,\zeta), z(\xi,\eta,\zeta)) \det[J] d\xi d\eta d\zeta$
where $\det[J]$ is the determinant of the Jacobian matrix, and $\Omega_{parent}$ is the domain of the parent element in the natural coordinate system (e.g., $[-1,1]^3$). The Jacobian ensures that the volume element $dV$ is correctly accounted for during the coordinate transformation, making the integral evaluable in the simple parent element domain.

---

### 6. Important Points to Remember

*   **Natural coordinates are intrinsic to the element.** They define a local coordinate system.
*   **Range is typically [-1, 1] for quadrilaterals/hexahedrons.** For triangles/tetrahedrons, other forms like area coordinates might be used, but the principle of a local, standardized system remains.
*   **Shape functions are defined in natural coordinates.** This is crucial for element generality.
*   **Isoparametric elements use the same shape functions for geometry and field variables.** Natural coordinates are essential for this mapping.
*   **The Jacobian matrix is key to relating physical and natural coordinate systems.** It's used for derivative transformations and integral transformations.
*   **Numerical integration (Gaussian Quadrature) is performed in the natural coordinate system.**
*   **Natural coordinates simplify the FEM process by providing a standardized framework for element formulation, regardless of element size, shape, or orientation.**

---

This concludes the study notes for the natural coordinate system in the context of Finite Element Methods, Module 4.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
