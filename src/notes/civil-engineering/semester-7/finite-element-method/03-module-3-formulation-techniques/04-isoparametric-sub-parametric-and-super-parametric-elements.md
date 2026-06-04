---
title: "Isoparametric, sub-parametric and super-parametric elements"
subject: "FINITE ELEMENT METHOD"
module: "Module 3: Formulation techniques"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116da"
status: "completed"
scrapedAt: "2026-05-20T18:59:01.029Z"
---
# Finite Element Method: Module 3 - Formulation Techniques

## Topic: Isoparametric, Sub-parametric, and Super-parametric Elements

This module delves into advanced element formulation techniques that allow for the representation of complex geometries and the efficient approximation of displacements within finite elements.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of mapping and its role in element formulation.**
*   **Define and differentiate between isoparametric, sub-parametric, and super-parametric elements.**
*   **Explain the advantages and disadvantages of each element type.**
*   **Apply the concept of natural coordinates (shape functions) to different element types.**
*   **Formulate the stiffness matrix and load vector for elements using these techniques.**
*   **Recognize situations where each element type is most appropriate.**

---

### 1. Mapping and Natural Coordinates

Before diving into the specific element types, it's crucial to understand the concept of mapping and the use of natural coordinates.

#### 1.1. Motivation for Mapping

*   **Complex Geometries:** Real-world engineering problems often involve complex geometries (e.g., curved boundaries, irregular shapes) that are difficult to represent directly using simple Cartesian coordinates.
*   **Element Generalization:** Mapping allows us to generalize the formulation of simple, standard elements (like a square or cube in parent coordinates) to represent more complex shapes in the global or physical coordinates.
*   **Integral Evaluation:** Using natural coordinates often simplifies the evaluation of integrals that arise in the finite element formulation (e.g., stiffness matrix, load vector).

#### 1.2. Natural Coordinates

*   **Definition:** Natural coordinates are dimensionless coordinates that are defined within a reference element, typically a simple shape like a square (2D) or a cube (3D).
*   **Examples:**
    *   **2D:** $(\xi, \eta)$ where $-1 \le \xi \le 1$ and $-1 \le \eta \le 1$.
    *   **3D:** $(\xi, \eta, \zeta)$ where $-1 \le \xi \le 1$, $-1 \le \eta \le 1$, and $-1 \le \zeta \le 1$.
*   **Benefits:**
    *   **Universality:** A single set of shape functions in natural coordinates can be used to define elements of different shapes and sizes.
    *   **Integral Simplification:** Integrals over the element domain in physical coordinates are transformed into integrals over the standard reference element in natural coordinates, which are often easier to evaluate.

#### 1.3. Mapping Function

*   **Purpose:** A mapping function establishes a relationship between the coordinates in the physical domain $(x, y)$ and the coordinates in the natural domain $(\xi, \eta)$.
*   **Representation:** The mapping is typically defined using the same shape functions that are used to interpolate displacements.
    $$
    \begin{bmatrix} x \\ y \end{bmatrix} = \sum_{i=1}^{n} N_i(\xi, \eta) \begin{bmatrix} x_i \\ y_i \end{bmatrix}
    $$
    where:
    *   $N_i(\xi, \eta)$ are the shape functions in natural coordinates.
    *   $(x_i, y_i)$ are the global coordinates of the $i$-th node of the element.

*   **Jacobian Matrix:** The mapping function is crucial for relating derivatives in physical coordinates to derivatives in natural coordinates. This relationship is governed by the Jacobian matrix (J):
    $$
    \begin{bmatrix} \frac{\partial}{\partial \xi} \\ \frac{\partial}{\partial \eta} \end{bmatrix} = \begin{bmatrix} \frac{\partial x}{\partial \xi} & \frac{\partial y}{\partial \xi} \\ \frac{\partial x}{\partial \eta} & \frac{\partial y}{\partial \eta} \end{bmatrix} \begin{bmatrix} \frac{\partial}{\partial x} \\ \frac{\partial}{\partial y} \end{bmatrix} = \mathbf{J} \begin{bmatrix} \frac{\partial}{\partial x} \\ \frac{\partial}{\partial y} \end{bmatrix}
    $$
    The elements of the Jacobian matrix are calculated as:
    $$
    J_{ij} = \frac{\partial x_j}{\partial \xi_i}
    $$
    where $x_1 = x$, $x_2 = y$, $\xi_1 = \xi$, $\xi_2 = \eta$.

    The inverse Jacobian matrix is used to transform derivatives:
    $$
    \begin{bmatrix} \frac{\partial}{\partial x} \\ \frac{\partial}{\partial y} \end{bmatrix} = \mathbf{J}^{-1} \begin{bmatrix} \frac{\partial}{\partial \xi} \\ \frac{\partial}{\partial \eta} \end{bmatrix}
    $$
    And the determinant of the Jacobian ($det(\mathbf{J})$) is used for integrating over the element domain:
    $$
    dx dy = |det(\mathbf{J})| d\xi d\eta
    $$

---

### 2. Types of Parametric Elements

Parametric elements use a mapping function to define the geometry and/or the nodal unknowns (displacements, temperatures, etc.) in terms of interpolation functions defined in natural coordinates. The key difference between the types lies in *what* is interpolated using these shape functions.

#### 2.1. Isoparametric Elements

*   **Definition:** In isoparametric elements, the **same set of shape functions** is used to interpolate both the **geometry** and the **nodal unknowns** (e.g., displacements).
*   **Concept:**
    *   The physical coordinates $(x, y)$ are interpolated using shape functions $N_i(\xi, \eta)$ and nodal coordinates $(x_i, y_i)$.
    *   The displacements $(u, v)$ at any point within the element are also interpolated using the *same* shape functions $N_i(\xi, \eta)$ and nodal displacements $(u_i, v_i)$.
    $$
    \begin{bmatrix} x \\ y \end{bmatrix} = \sum_{i=1}^{n} N_i(\xi, \eta) \begin{bmatrix} x_i \\ y_i \end{bmatrix}
    $$
    $$
    \begin{bmatrix} u \\ v \end{bmatrix} = \sum_{i=1}^{n} N_i(\xi, \eta) \begin{bmatrix} u_i \\ v_i \end{bmatrix}
    $$
*   **Advantages:**
    *   **Versatility:** Can represent curved boundaries and complex geometries accurately.
    *   **Simplicity:** A single set of shape functions is used for both geometry and displacement interpolation, simplifying implementation.
    *   **Consistent Approximation:** The order of polynomial approximation for geometry and displacement is the same.
*   **Disadvantages:**
    *   **Computational Cost:** May require higher-order elements for simple geometries compared to sub-parametric elements.
    *   **Potential for Distortion:** Poorly chosen nodes or high-order elements can lead to distorted elements (e.g., negative Jacobian determinant), which can cause numerical instability.

*   **Examples:**
    *   **Isoparametric Quadrilateral (4-node linear):** Uses linear shape functions (bilinear) to define both geometry and displacements. This element is identical to a standard Lagrangian quadrilateral.
    *   **Isoparametric Quadrilateral (8-node quadratic):** Uses quadratic shape functions to define both geometry and displacements. This element is a Serendipity element.
    *   **Isoparametric Triangle (3-node linear):** Uses linear shape functions. Identical to a standard Lagrangian triangle.
    *   **Isoparametric Triangle (6-node quadratic):** Uses quadratic shape functions.

#### 2.2. Sub-parametric Elements

*   **Definition:** In sub-parametric elements, the **geometry** is interpolated using a **lower-order** set of shape functions than those used to interpolate the **nodal unknowns** (displacements).
*   **Concept:**
    *   The physical coordinates $(x, y)$ are interpolated using shape functions $N^G_i(\xi, \eta)$.
    *   The displacements $(u, v)$ are interpolated using shape functions $N^U_i(\xi, \eta)$, where the order of $N^U$ is greater than the order of $N^G$.
    $$
    \begin{bmatrix} x \\ y \end{bmatrix} = \sum_{i=1}^{m} N^G_i(\xi, \eta) \begin{bmatrix} x_i \\ y_i \end{bmatrix} \quad (\text{where } m \le n)
    $$
    $$
    \begin{bmatrix} u \\ v \end{bmatrix} = \sum_{i=1}^{n} N^U_i(\xi, \eta) \begin{bmatrix} u_i \\ v_i \end{bmatrix} \quad (\text{where order of } N^U > \text{order of } N^G)
    $$
*   **Advantages:**
    *   **Computational Efficiency:** Uses lower-order shape functions for geometry, which can reduce the computational cost for mapping and Jacobian calculations.
    *   **Suitable for Simple Geometries:** Can be used when the geometry is well-approximated by lower-order polynomials, but higher-order approximation is needed for displacement.
*   **Disadvantages:**
    *   **Inconsistent Approximation:** The order of approximation for geometry and displacement is different, which can lead to some loss of accuracy in representing the true geometry.
    *   **Implementation Complexity:** Requires managing two different sets of shape functions.

*   **Examples:**
    *   **Sub-parametric Quadrilateral (8-node displacement, 4-node geometry):** The geometry is approximated using linear (bilinear) shape functions, while the displacements are approximated using quadratic shape functions. This is a common and efficient choice for representing curved boundaries with quadratic displacement fields.

#### 2.3. Super-parametric Elements

*   **Definition:** In super-parametric elements, the **geometry** is interpolated using a **higher-order** set of shape functions than those used to interpolate the **nodal unknowns** (displacements).
*   **Concept:**
    *   The physical coordinates $(x, y)$ are interpolated using shape functions $N^G_i(\xi, \eta)$.
    *   The displacements $(u, v)$ are interpolated using shape functions $N^U_i(\xi, \eta)$, where the order of $N^G$ is greater than the order of $N^U$.
    $$
    \begin{bmatrix} x \\ y \end{bmatrix} = \sum_{i=1}^{m} N^G_i(\xi, \eta) \begin{bmatrix} x_i \\ y_i \end{bmatrix} \quad (\text{where order of } N^G > \text{order of } N^U)
    $$
    $$
    \begin{bmatrix} u \\ v \end{bmatrix} = \sum_{i=1}^{n} N^U_i(\xi, \eta) \begin{bmatrix} u_i \\ v_i \end{bmatrix} \quad (\text{where } n \le m)
    $$
*   **Advantages:**
    *   **Accurate Geometry Representation:** Can capture very complex geometries accurately with a higher-order geometric description.
*   **Disadvantages:**
    *   **Computational Cost:** Higher-order geometric interpolation increases the complexity of Jacobian calculations.
    *   **Overkill for Simple Displacements:** Using a higher-order geometry with lower-order displacements might not be beneficial if the displacement field is adequately represented by lower-order polynomials.
    *   **Less Common:** Generally less common in practice compared to isoparametric and sub-parametric elements due to computational cost and limited benefits unless exceptionally complex geometries are coupled with simple displacement fields.

*   **Examples:**
    *   **Super-parametric Quadrilateral (4-node displacement, 8-node geometry):** The geometry is approximated using quadratic shape functions, while the displacements are approximated using linear shape functions. This might be useful if the boundary is highly curved, but the expected deformation is relatively simple.

---

### 3. Formulation Aspects

The choice of element type impacts the formulation of the stiffness matrix and load vector. The general process involves:

1.  **Define Element Geometry and Displacement Interpolation:** Choose the shape functions ($N_i$) for geometry and displacement interpolation.
2.  **Calculate Jacobian Matrix:** Compute $\mathbf{J}$ and its determinant using the chosen shape functions and nodal coordinates.
3.  **Transform Derivatives:** Use the inverse Jacobian to relate spatial derivatives to derivatives in natural coordinates ($\frac{\partial}{\partial x}, \frac{\partial}{\partial y}$).
4.  **Formulate Strain-Displacement Matrix (B):** This matrix relates nodal displacements to strains. It involves derivatives of the shape functions, which are now expressed in terms of natural coordinates via the Jacobian.
5.  **Formulate Element Stiffness Matrix (k):**
    $$
    [k] = \int_{V} [B]^T [D] [B] dV
    $$
    Using the Jacobian determinant, this integral is transformed to natural coordinates:
    $$
    [k] = \int_{-1}^{1} \int_{-1}^{1} [B(\xi, \eta)]^T [D] [B(\xi, \eta)] |det(\mathbf{J})| d\xi d\eta \quad \text{(for 2D)}
    $$
    where $[D]$ is the material constitutive matrix.
6.  **Formulate Element Load Vector (f):**
    *   **Body forces:** $\mathbf{f}_{body} = \int_{V} [N]^T \{b\} dV = \int_{-1}^{1} \int_{-1}^{1} [N]^T \{b\} |det(\mathbf{J})| d\xi d\eta$
    *   **Surface forces:** $\mathbf{f}_{surface} = \int_{S} [N]^T \{t\} dS = \int_{\text{boundary}} [N]^T \{t\} |det(\mathbf{J})| ds$ (where $ds$ is an element of arc length along the boundary).

---

### 4. Key Concepts and Definitions Summary

*   **Natural Coordinates $(\xi, \eta, \zeta)$:** Dimensionless coordinates defined over a reference element (e.g., square, cube).
*   **Shape Functions $N_i$:** Interpolation functions defined in natural coordinates, used to approximate geometry and nodal unknowns.
*   **Mapping Function:** Relates physical coordinates $(x, y)$ to natural coordinates $(\xi, \eta)$.
*   **Jacobian Matrix $\mathbf{J}$:** Relates derivatives in physical and natural coordinate systems; its determinant is used for transforming integrals.
*   **Isoparametric Element:** Same shape functions for geometry and displacement interpolation.
*   **Sub-parametric Element:** Lower-order shape functions for geometry, higher-order for displacement.
*   **Super-parametric Element:** Higher-order shape functions for geometry, lower-order for displacement.

---

### 5. Practice Questions and Exercises

**Question 1:**

Consider a 4-node quadrilateral element in physical coordinates $(x, y)$ and mapped to a square in natural coordinates $(\xi, \eta)$ with the following nodal coordinates:
$N_1$ at $(-1, -1)$, $N_2$ at $(1, -1)$, $N_3$ at $(1, 1)$, $N_4$ at $(-1, 1)$.

Let the geometry be interpolated using linear shape functions:
$N_1 = \frac{1}{4}(1-\xi)(1-\eta)$
$N_2 = \frac{1}{4}(1+\xi)(1-\eta)$
$N_3 = \frac{1}{4}(1+\xi)(1+\eta)$
$N_4 = \frac{1}{4}(1-\xi)(1+\eta)$

If the element is **isoparametric**, what order of shape functions are used for displacement interpolation? Explain why.

**Answer:**
Since the element is isoparametric, the displacement interpolation uses the **same set of linear (bilinear) shape functions** as the geometry interpolation. This means that for a 4-node quadrilateral, both geometry and displacements are approximated using linear polynomials.

---

**Question 2:**

Consider a 2D plane stress problem with a boundary that is a quarter circle. You are formulating finite elements to discretize this region.

*   Would you prefer to use isoparametric or sub-parametric elements if you want to accurately represent the curved boundary with quadratic displacement approximations? Explain your choice.

**Answer:**
To accurately represent the curved boundary, we need a higher-order approximation for the geometry. If we are also using quadratic displacement approximations, then **isoparametric elements** are a good choice. This is because they use the same order of shape functions for both geometry and displacement, ensuring that the element's curved sides can be accurately represented by the quadratic shape functions.

If you were to use **sub-parametric elements** in this scenario, you might use quadratic shape functions for displacement but linear shape functions for geometry. While computationally cheaper for the geometric part, the linear approximation of the geometry would not accurately capture the quarter-circle boundary, potentially leading to errors.

*   If you were using linear displacement approximations for simplicity, and the boundary was only slightly curved, what element type might you consider for computational efficiency while still capturing some curvature?

**Answer:**
If using linear displacement approximations but needing to capture some curvature of the boundary, you could consider using **sub-parametric elements** where the geometry is interpolated using quadratic shape functions, and the displacements are interpolated using linear shape functions. This allows for a more accurate representation of the curved boundary with the geometric interpolation, while the computational cost remains lower due to the linear displacement interpolation.

---

**Question 3:**

For an isoparametric quadrilateral element, how are the derivatives of displacement with respect to $x$ and $y$ calculated from the derivatives with respect to $\xi$ and $\eta$?

**Answer:**
The derivatives of displacement with respect to $x$ and $y$ are calculated using the inverse Jacobian matrix.
Let $\{u\} = [N] \{u_e\}$ be the displacement interpolation. Then the strains $\{\epsilon\}$ are related to nodal displacements by $\{\epsilon\} = [B] \{u_e\}$, where $[B]$ contains the spatial derivatives of the shape functions.

$$
\begin{bmatrix} \frac{\partial u}{\partial x} \\ \frac{\partial v}{\partial x} \\ \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial y} \end{bmatrix} = \begin{bmatrix} \frac{\partial N_i}{\partial x} \\ \frac{\partial N_i}{\partial y} \end{bmatrix}
$$

Using the chain rule and the Jacobian matrix:
$$
\begin{bmatrix} \frac{\partial N_i}{\partial x} \\ \frac{\partial N_i}{\partial y} \end{bmatrix} = \mathbf{J}^{-1} \begin{bmatrix} \frac{\partial N_i}{\partial \xi} \\ \frac{\partial N_i}{\partial \eta} \end{bmatrix}
$$
where $\mathbf{J}^{-1}$ is the inverse of the Jacobian matrix, which is calculated using the derivatives of the shape functions with respect to natural coordinates and the nodal coordinates.

$$
\mathbf{J} = \begin{bmatrix} \frac{\partial x}{\partial \xi} & \frac{\partial y}{\partial \xi} \\ \frac{\partial x}{\partial \eta} & \frac{\partial y}{\partial \eta} \end{bmatrix} = \sum_{k=1}^{n} \begin{bmatrix} \frac{\partial N_k}{\partial \xi} x_k & \frac{\partial N_k}{\partial \xi} y_k \\ \frac{\partial N_k}{\partial \eta} x_k & \frac{\partial N_k}{\partial \eta} y_k \end{bmatrix}
$$

The strain-displacement matrix $[B]$ will then be constructed using these derivatives obtained via the inverse Jacobian.

---

### 6. Important Points to Remember

*   **The choice of element type directly impacts the accuracy and computational cost of the FE analysis.**
*   **Isoparametric elements offer a good balance of accuracy for geometry and displacement representation.** They are the most common choice for problems with curved boundaries.
*   **Sub-parametric elements are advantageous when computational efficiency is paramount, and the geometry can be adequately represented by lower-order functions than the displacement.**
*   **Super-parametric elements are less common but can be useful for extremely complex geometries where higher-order geometric description is essential, even if the displacement field is simple.**
*   **The Jacobian matrix is the key to transforming derivatives and integrals from physical to natural coordinates.** A singular or near-singular Jacobian indicates a distorted element and potential numerical issues.
*   **The order of shape functions used for geometry interpolation determines the element's ability to represent curved boundaries.**
