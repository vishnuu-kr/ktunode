---
title: "Shape functions"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463847"
status: "completed"
scrapedAt: "2026-05-20T18:03:57.389Z"
---
# FINITE ELEMENT METHODS - MODULE 2: TYPES OF COORDINATE SYSTEM IN FEM

## TOPIC: SHAPE FUNCTIONS

### 1. INTRODUCTION AND OBJECTIVES

This section focuses on understanding and formulating shape functions, a fundamental concept in the Finite Element Method (FEM). Shape functions are crucial for approximating the behavior of physical quantities within an element and are essential for bridging the gap between continuous physical phenomena and discrete FEM formulations.

**Learning Outcomes Covered:**

*   Understanding the role of shape functions in FEM.
*   Formulating shape functions for different types of elements and coordinate systems.
*   Applying shape functions in element stiffness matrix and load vector calculations.

**Course Outcomes Addressed:**

*   **CO2:** To apply the coordinate transformation and formulation of shape functions of various element. (Knowledge Level: K3)
*   **CO3:** Formulate shape functions and element strain displacement matrix of various element (Knowledge Level: K4)

**Key Concepts:**

*   **Interpolation:** Using known values at discrete points (nodes) to estimate values at other points within an element.
*   **Approximation:** Representing the continuous behavior of a physical quantity (e.g., displacement, temperature) within an element using a simple function.
*   **Nodal Values:** The values of the physical quantity at the nodes of an element.
*   **Element Domain:** The geometric region occupied by a single finite element.

### 2. DEFINITION AND PURPOSE OF SHAPE FUNCTIONS

**Definition:**

Shape functions, often denoted by $N_i$ (where $i$ is the node number), are functions that describe how a physical quantity (e.g., displacement, temperature) varies *within an element* as a function of nodal values of that quantity. They act as interpolating polynomials that define the spatial distribution of the unknown variable within the element.

**Purpose:**

*   **Approximation of the Primary Variable:** Shape functions allow us to express the approximate value of the primary variable (e.g., displacement $u$, temperature $T$) at any point within an element in terms of the nodal values of that variable.
    For a one-dimensional element with nodes $1$ and $2$, the displacement $u(x)$ can be approximated as:
    $u(x) \approx u_1 N_1(x) + u_2 N_2(x) = \sum_{i=1}^{n} u_i N_i(x)$
    where $u_i$ is the nodal value of displacement at node $i$, and $N_i(x)$ is the shape function associated with node $i$.

*   **Transformation to a Standard (Reference) Domain:** Shape functions are often conveniently defined in a dimensionless, normalized coordinate system (e.g., natural coordinates like $\xi$, $\eta$, $\zeta$). This simplifies the derivation and integration process, especially for complex element geometries. The transformation from the global coordinate system ($x, y, z$) to the natural coordinate system is a crucial step.

*   **Calculation of Element Matrices:** Shape functions are essential for deriving the element stiffness matrix ($[k]^e$) and the element load vector ($\{f\}^e$). These matrices relate nodal forces to nodal displacements and external forces applied to the element.

**Key Properties of Shape Functions:**

1.  **Completeness:** The polynomial used to define the shape functions should be complete up to a certain order. For example, for linear interpolation, the shape functions should be linear polynomials. For quadratic interpolation, they should be quadratic polynomials. This ensures that rigid body motion and constant strain states can be represented accurately.

2.  **Sum to Unity:** The sum of all shape functions over the element domain must be equal to unity.
    $\sum_{i=1}^{n} N_i(\xi, \eta, \zeta) = 1$
    This property ensures that if all nodal values are the same (e.g., a rigid body translation), the interpolated value is also that same constant value.

3.  **Kronecker Delta Property:** The shape function associated with a particular node must be equal to 1 at that node and 0 at all other nodes of the element.
    $N_i(\text{at node } i) = 1$
    $N_i(\text{at node } j \neq i) = 0$
    This ensures that the nodal values are correctly imposed on the interpolated field.

4.  **Continuity:** Shape functions should ensure the required continuity of the approximated variable across element boundaries. This depends on the order of the polynomial and the type of problem (e.g., for displacement, continuity of displacement is required; for temperature, continuity of temperature is required).

### 3. TYPES OF SHAPE FUNCTIONS

Shape functions are formulated based on the type of element (e.g., bar, beam, truss, triangular, quadrilateral, tetrahedral, hexahedral) and the order of interpolation (linear, quadratic, etc.).

#### 3.1. One-Dimensional (1D) Elements

Consider a 1D element (e.g., a bar or truss element) with two nodes, 1 and 2.

**3.1.1. Linear Shape Functions (2-Node Bar Element)**

*   **Global Coordinate System:** The element extends from $x_1$ to $x_2$. The length of the element is $L = x_2 - x_1$.
    The displacement $u(x)$ is approximated as: $u(x) \approx u_1 N_1(x) + u_2 N_2(x)$.

*   **Natural Coordinate System ($\xi$):** A convenient dimensionless coordinate $\xi$ is often used, defined such that $\xi = -1$ at node 1 and $\xi = +1$ at node 2.
    The relationship between $x$ and $\xi$ is linear:
    $x = x_1 + \frac{x_2 - x_1}{2} (\xi + 1) = x_1 + \frac{L}{2}(\xi + 1)$
    Alternatively,
    $\xi = \frac{2x - (x_1 + x_2)}{L}$

*   **Formulation of Shape Functions:**
    Using the Kronecker delta property:
    At node 1 ($\xi = -1$): $N_1(-1) = 1$, $N_2(-1) = 0$.
    At node 2 ($\xi = +1$): $N_1(+1) = 0$, $N_2(+1) = 1$.

    Since it's a linear element, the shape functions will be linear polynomials in $\xi$:
    $N_1(\xi) = a_1 + b_1 \xi$
    $N_2(\xi) = a_2 + b_2 \xi$

    Applying the boundary conditions:
    For $N_1$:
    $a_1 + b_1 (-1) = 1 \implies a_1 - b_1 = 1$
    $a_1 + b_1 (+1) = 0 \implies a_1 + b_1 = 0$
    Adding the two equations: $2a_1 = 1 \implies a_1 = 1/2$.
    Substituting $a_1$ into $a_1 + b_1 = 0$: $1/2 + b_1 = 0 \implies b_1 = -1/2$.
    So, $N_1(\xi) = \frac{1}{2} - \frac{1}{2} \xi = \frac{1-\xi}{2}$.

    For $N_2$:
    $a_2 + b_2 (-1) = 0 \implies a_2 - b_2 = 0$
    $a_2 + b_2 (+1) = 1 \implies a_2 + b_2 = 1$
    Adding the two equations: $2a_2 = 1 \implies a_2 = 1/2$.
    Substituting $a_2$ into $a_2 - b_2 = 0$: $1/2 - b_2 = 0 \implies b_2 = 1/2$.
    So, $N_2(\xi) = \frac{1}{2} + \frac{1}{2} \xi = \frac{1+\xi}{2}$.

    **Shape Functions for 2-Node Bar Element:**
    $N_1(\xi) = \frac{1-\xi}{2}$
    $N_2(\xi) = \frac{1+\xi}{2}$

    **Check properties:**
    *   Sum to unity: $N_1 + N_2 = \frac{1-\xi}{2} + \frac{1+\xi}{2} = \frac{1-\xi+1+\xi}{2} = \frac{2}{2} = 1$. (Satisfied)
    *   Kronecker Delta:
        *   At $\xi=-1$: $N_1 = \frac{1-(-1)}{2} = 1$, $N_2 = \frac{1+(-1)}{2} = 0$. (Satisfied)
        *   At $\xi=+1$: $N_1 = \frac{1-(+1)}{2} = 0$, $N_2 = \frac{1+(+1)}{2} = 1$. (Satisfied)

    **In terms of global coordinate $x$:**
    Substitute $\xi = \frac{2x - (x_1 + x_2)}{L}$:
    $N_1(x) = \frac{1 - \frac{2x - (x_1 + x_2)}{L}}{2} = \frac{L - (2x - x_1 - x_2)}{2L} = \frac{L - 2x + x_1 + x_2}{2L}$
    Since $L = x_2 - x_1$:
    $N_1(x) = \frac{(x_2 - x_1) - 2x + x_1 + x_2}{2L} = \frac{2x_2 - 2x}{2L} = \frac{x_2 - x}{L}$
    $N_2(x) =

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
