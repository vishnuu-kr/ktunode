---
title: "Shape functions"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464294"
status: "completed"
scrapedAt: "2026-05-20T18:12:55.859Z"
---
# Finite Element Methods - Module 2: Types of Coordinate System in FEM

## Topic: Shape Functions

---

### **1. Introduction to Shape Functions**

Shape functions, also known as interpolation functions or basis functions, are fundamental to the Finite Element Method (FEM). They are used to approximate the behavior of a physical field (e.g., displacement, temperature) within an element in terms of nodal values.

**Key Concept:** Shape functions define how a variable varies across an element based on its values at the element's nodes.

**Importance:**
*   They allow us to represent complex continuous functions with simpler polynomial functions over discrete elements.
*   They are crucial for deriving the element stiffness matrices and load vectors, which are the building blocks of the global FEM solution.

**Reference:**
*   **Reddy (2009):** Emphasizes that shape functions are the cornerstone of FEM, enabling the approximation of continuous fields within each element.
*   **Cook (2008):** Highlights their role in interpolating nodal unknowns and forming the element equations.

---

### **2. Requirements of Shape Functions**

For a set of shape functions to be valid and effective, they must satisfy certain essential requirements:

**2.1 Completeness:**
*   **Definition:** The polynomial representing the field variable within an element must contain terms that can represent a constant value, a linear variation, and higher-order variations as needed. This ensures that the element can represent constant strain/stress states.
*   **Why it's important:** If an element cannot represent a constant strain state, it will exhibit "locking" under certain loading conditions, leading to inaccurate results.
*   **Example:** For a linear bar element, if the displacement function is $u(x) = c_1 + c_2x$, it is complete for linear variation.

**2.2 Continuity (or Convergence):**
*   **Definition:** The approximation must be continuous across element boundaries. This means that the field variable should have the same value at the shared nodes between adjacent elements.
*   **Why it's important:** This ensures that the solution is continuous across the entire domain, which is often a requirement for physical phenomena. It also guarantees convergence of the solution as the element size is reduced (h-refinement).
*   **Types of Continuity:**
    *   **C0 continuity:** Continuity of the function itself across element boundaries. This is the minimum requirement for most structural analysis problems.
    *   **C1 continuity:** Continuity of the first derivative across element boundaries. This is required for problems involving bending, like plate or shell analysis.
*   **Reference:**
    *   **Bhavikatti (2008):** Discusses the necessity of continuity for convergence and accuracy.

**2.3 Kronecker Delta Property:**
*   **Definition:** At each node $i$, the shape function $\phi_i$ associated with that node must have a value of 1, and at all other nodes $j$ ($j \neq i$), the shape function $\phi_j$ must have a value of 0.
    *   $\phi_i(\text{node } j) = \delta_{ij} = \begin{cases} 1 & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}$
*   **Why it's important:** This property ensures that when we evaluate the approximated field variable at a specific node, only the nodal value at that node contributes, and it contributes with a coefficient of 1. This directly links the approximated field to the nodal unknowns.
*   **Example:** For a 2-node linear bar element with nodes at $x=0$ and $x=L$, the shape functions are $\phi_1(x) = 1 - x/L$ and $\phi_2(x) = x/L$.
    *   At node 1 ($x=0$): $\phi_1(0) = 1$, $\phi_2(0) = 0$.
    *   At node 2 ($x=L$): $\phi_1(L) = 0$, $\phi_2(L) = 1$.

**2.4 Summability:**
*   **Definition:** The sum of all shape functions over the element must be equal to 1.
    *   $\sum_{i=1}^{n} \phi_i(x) = 1$ (for an element with $n$ nodes)
*   **Why it's important:** This property ensures that the element can correctly represent a uniform variation of the field variable (e.g., constant displacement, constant temperature). If the sum is not 1, a uniform field will be interpolated incorrectly.
*   **Example:** For the linear bar element: $\phi_1(x) + \phi_2(x) = (1 - x/L) + (x/L) = 1$.

**Reference:**
*   **Segerlind (2010):** Elaborates on these requirements, especially completeness and convergence, as they relate to the accuracy of the finite element solution.
*   **Fish & Belytschko (2007):** Provides a rigorous mathematical framework for the properties of shape functions and their implications for convergence.

---

### **3. Coordinate Systems in FEM and Shape Functions**

The formulation of shape functions is often simplified by using a local or natural coordinate system.

**3.1 Global vs. Local/Natural Coordinate Systems:**
*   **Global Coordinate System:** The standard Cartesian coordinate system ($x, y, z$) used to define the geometry of the entire structure.
*   **Local/Natural Coordinate System:** A dimensionless coordinate system defined within each element, typically ranging from -1 to +1 or 0 to 1. This system simplifies the derivation of shape functions and makes them independent of the element's size and orientation.

**3.2 Common Natural Coordinate Systems:**
*   **1D Elements (Line Segments):** Often use a single natural coordinate $\xi$, where $\xi = -1$ at one node and $\xi = +1$ at the other.
*   **2D Elements (Triangles, Quadrilaterals):**
    *   **Triangles:** Often use **areal coordinates** (also known as barycentric coordinates) $\lambda_1, \lambda_2, \lambda_3$, where $\lambda_1 + \lambda_2 + \lambda_3 = 1$.
    *   **Quadrilaterals:** Often use two natural coordinates $\xi$ and $\eta$, each ranging from -1 to +1.
*   **3D Elements (Tetrahedrons, Hexahedrons):** Similar extensions of 2D systems.

**Reference:**
*   **Hutton (2009):** Explains the advantages of using natural coordinates for simplifying element formulations.
*   **Ramamurthi (2004):** Demonstrates the application of natural coordinates for various element types.

---

### **4. Derivation and Examples of Shape Functions**

The derivation of shape functions depends on the type of element (1D, 2D, 3D) and its order (linear, quadratic, etc.).

**4.1 1D Elements (Line Segments)**

**4.1.1 Linear Bar Element (2 Nodes)**
*   **Geometry:** A line segment with nodes at $x_1$ and $x_2$. Length $L = x_2 - x_1$.
*   **Natural Coordinate:** $\xi$, where $\xi = -1$ at node 1 and $\xi = +1$ at node 2.
    *   Relationship: $x = x_1 + \frac{x_2 - x_1}{2}(\xi + 1) = x_1 + \frac{L}{2}(\xi + 1)$.
    *   Or, more simply, we can define $x$ relative to one node: Let node 1 be at $x=0$ and node 2 at $x=L$. Then $x$ is the global coordinate. The natural coordinate $\xi$ relates to $x$ as: $x = \frac{L}{2}(1+\xi)$ or $\xi = \frac{2x}{L} - 1$.
*   **Field Variable Approximation:** $u(\xi) = \sum_{i=1}^{2} \phi_i(\xi) u_i = \phi_1(\xi) u_1 + \phi_2(\xi) u_2$
*   **Derivation using Kronecker Delta Property:**
    *   We need a linear polynomial: $\phi_i(\xi) = a_i + b_i \xi$.
    *   At node 1 ($\xi = -1$):
        *   $\phi_1(-1) = 1 \implies a_1 - b_1 = 1$
        *   $\phi_2(-1) = 0 \implies a_2 - b_2 = 0 \implies a_2 = b_2$
    *   At node 2 ($\xi = +1$):
        *   $\phi_1(1) = 0 \implies a_1 + b_1 = 0 \implies a_1 = -b_1$
        *   $\phi_2(1) = 1 \implies a_2 + b_2 = 1$
    *   Solving these equations:
        *   From $a_1 - b_1 = 1$ and $a_1 = -b_1$: $-b_1 - b_1 = 1 \implies -2b_1 = 1 \implies b_1 = -1/2$. Then $a_1 = 1/2$.
        *   From $a_2 = b_2$ and $a_2 + b_2 = 1$: $2a_2 = 1 \implies a_2 = 1/2$. Then $b_2 = 1/2$.
*   **Shape Functions:**
    *   $\phi_1(\xi) = \frac{1}{2}(1 - \xi)$
    *   $\phi_2(\xi) = \frac{1}{2}(1 + \xi)$
*   **Check Properties:**
    *   Summability: $\phi_1 + \phi_2 = \frac{1}{2}(1 - \xi) + \frac{1}{2}(1 + \xi) = \frac{1}{2} - \frac{\xi}{2} + \frac{1}{2} + \frac{\xi}{2} = 1$. (Satisfied)
    *   Kronecker Delta:
        *   $\phi_1(-1) = \frac{1}{2}(1 - (-1)) = 1$; $\phi_2(-1) = \frac{1}{2}(1 + (-1)) = 0$.
        *   $\phi_1(1) = \frac{1}{2}(1 - 1) = 0$; $\phi_2(1) = \frac{1}{2}(1 + 1) = 1$. (Satisfied)
*   **Relationship to Global Coordinate $x$ (assuming node 1 at $x=0$, node 2 at $x=L$):**
    *   Substitute $\xi = \frac{2x}{L} - 1$:
        *   $\phi_1(x) = \frac{1}{2}(1 - (\frac{2x}{L} - 1)) = \frac{1}{2}(1 - \frac{2x}{L} + 1) = \frac{1}{2}(2 - \frac{2x}{L}) = 1 - \frac{x}{L}$
        *   $\phi_2(x) = \frac{1}{2}(1 + (\frac{2x}{L} - 1)) = \frac{1}{2}(1 + \frac{2x}{L} - 1) = \frac{1}{2}(\frac{2x}{L}) = \frac{x}{L}$
    *   These are the same shape functions derived earlier using the global coordinate directly.

**4.1.2 Quadratic Bar Element (3 Nodes)**
*   **Geometry:** A line segment with nodes at $x_1, x_2, x_3$. Typically, node 1 at $\xi = -1$, node 2 at $\xi = 0$, node 3 at $\xi = +1$.
*   **Field Variable Approximation:** $u(\xi) = \sum_{i=1}^{3} \phi_i(\xi) u_i = \phi_1(\xi) u_1 + \phi_2(\xi) u_2 + \phi_3(\xi) u_3$
*   **Derivation using Kronecker Delta Property and Polynomial Form:**
    *   Since it's quadratic, the polynomial form is $\phi_i(\xi) = a_i + b_i \xi + c_i \xi^2$.
    *   For node $j$ where $\phi_i(\xi_j) = \delta_{ij}$:
        *   $\phi_1$: Must be 1 at $\xi=-1$, 0 at $\xi=0$, 0 at $\xi=1$.
            *   $\phi_1(\xi) = C(\xi - 0)(\xi - 1) = C \xi(\xi - 1)$.
            *   $\phi_1(-1) = C(-1)(-1 - 1) = C(-1)(-2) = 2C = 1 \implies C = 1/2$.
            *   $\phi_1(\xi) = \frac{1}{2}\xi(\xi - 1) = \frac{1}{2}(\xi^2 - \xi)$.
        *   $\phi_2$: Must be 0 at $\xi=-1$, 1 at $\xi=0$, 0 at $\xi=1$.
            *   $\phi_2(\xi) = C(\xi - (-1))(\xi - 1) = C(\xi + 1)(\xi - 1) = C(\xi^2 - 1)$.
            *   $\phi_2(0) = C(0^2 - 1) = -C = 1 \implies C = -1$.
            *   $\phi_2(\xi) = -(\xi^2 - 1) = 1 - \xi^2$.
        *   $\phi_3$: Must be 0 at $\xi=-1$, 0 at $\xi=0$, 1 at $\xi=1$.
            *   $\phi_3(\xi) = C(\xi - (-1))(\xi - 0) = C(\xi + 1)\xi$.
            *   $\phi_3(1) = C(1 + 1)(1) = 2C = 1 \implies C = 1/2$.
            *   $\phi_3(\xi) = \frac{1}{2}\xi(\xi + 1) = \frac{1}{2}(\xi^2 + \xi)$.
*   **Shape Functions:**
    *   $\phi_1(\xi) = \frac{1}{2}(\xi^2 - \xi)$
    *   $\phi_2(\xi) = 1 - \xi^2$
    *   $\phi_3(\xi) = \frac{1}{2}(\xi^2 + \xi)$
*   **Check Properties:**
    *   Summability: $\frac{1}{2}\xi^2 - \frac{1}{2}\xi + 1 - \xi^2 + \frac{1}{2}\xi^2 + \frac{1}{2}\xi = (\frac{1}{2} - 1 + \frac{1}{2})\xi^2 + (-\frac{1}{2} + \frac{1}{2})\xi + 1 = 0 \cdot \xi^2 + 0 \cdot \xi + 1 = 1$. (Satisfied)
    *   Kronecker Delta: Verify for each node. (Satisfied)
*   **Reference:**
    *   **Reddy (2009):** Provides a detailed derivation for both linear and quadratic bar elements using natural coordinates.
    *   **Cook (2008):** Also covers these derivations and explains their use in forming element matrices.

**4.2 2D Elements**

**4.2.1 Linear Triangular Element (3 Nodes)**
*   **Geometry:** A triangle with nodes at $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$.
*   **Natural Coordinates (Areal Coordinates):** $\lambda_1, \lambda_2, \lambda_3$.
    *   $\lambda_1$: Value is 1 at node 1, 0 at node 2, 0 at node 3.
    *   $\lambda_2$: Value is 0 at node 1, 1 at node 2, 0 at node 3.
    *   $\lambda_3$: Value is 0 at node 1, 0 at node 2, 1 at node 3.
    *   Property: $\lambda_1 + \lambda_2 + \lambda_3 = 1$.
*   **Field Variable Approximation:** $f(x,y) = \sum_{i=1}^{3} \phi_i(x,y) f_i = \phi_1 f_1 + \phi_2 f_2 + \phi_3 f_3$.
*   **Shape Function Definition:** The shape function $\phi_i$ is equal to the corresponding natural coordinate $\lambda_i$.
    *   $\phi_1 = \lambda_1$
    *   $\phi_2 = \lambda_2$
    *   $\phi_3 = \lambda_3$
*   **Geometric Interpretation of Areal Coordinates:** $\lambda_i$ is the ratio of the area of the sub-triangle formed by connecting a point $P(x,y)$ to the two nodes opposite to node $i$, to the total area of the element.
    *   Let $A$ be the total area of the triangle.
    *   $\lambda_1 = \frac{\text{Area}(P, \text{node } 2, \text{node } 3)}{\text{Area}(\text{node } 1, \text{node } 2, \text{node } 3)}$
    *   $\lambda_2 = \frac{\text{Area}(P, \text{node } 1, \text{node } 3)}{\text{Area}(\text{node } 1, \text{node } 2, \text{node } 3)}$
    *   $\lambda_3 = \frac{\text{Area}(P, \text{node } 1, \text{node } 2)}{\text{Area}(\text{node } 1, \text{node } 2, \text{node } 3)}$
*   **Algebraic Expression for Shape Functions:**
    *   Let the coordinates of the nodes be $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$.
    *   $\lambda_1 = \frac{1}{2A} \left| \begin{vmatrix} 1 & x & y \\ 1 & x_2 & y_2 \\ 1 & x_3 & y_3 \end{vmatrix} \right| = \frac{1}{2A} [x_1(y_2 - y_3) + x(y_3 - y_2) + y(x_2 - x_3)]$
    *   $\lambda_2 = \frac{1}{2A} \left| \begin{vmatrix} 1 & x_1 & y_1 \\ 1 & x & y \\ 1 & x_3 & y_3 \end{vmatrix} \right| = \frac{1}{2A} [x_2(y_3 - y_1) + x(y_1 - y_3) + y(x_3 - x_1)]$
    *   $\lambda_3 = \frac{1}{2A} \left| \begin{vmatrix} 1 & x_1 & y_1 \\ 1 & x_2 & y_2 \\ 1 & x & y \end{vmatrix} \right| = \frac{1}{2A} [x_3(y_1 - y_2) + x(y_2 - y_1) + y(x_1 - x_2)]$
    *   Where $2A = \left| \begin{vmatrix} 1 & x_1 & y_1 \\ 1 & x_2 & y_2 \\ 1 & x_3 & y_3 \end{vmatrix} \right| = x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)$.
*   **Properties Check:**
    *   **Kronecker Delta:** At node 1 ($(x_1, y_1)$), $\lambda_1=1, \lambda_2=0, \lambda_3=0$. Similarly for nodes 2 and 3. (Satisfied)
    *   **Summability:** $\lambda_1 + \lambda_2 + \lambda_3 = 1$. (Satisfied)
    *   **Completeness:** The shape functions are linear, which means the element can represent linear variations. This is sufficient for constant strain triangles (CST), a key element type.
*   **Reference:**
    *   **Bhavikatti (2008):** Introduces areal coordinates and derives shape functions for linear triangles.
    *   **Fish & Belytschko (2007):** Provides a more theoretical treatment of these shape functions in the context of approximation theory.

**4.2.2 Isoparametric Quadrilateral Element (4 Nodes)**
*   **Geometry:** A quadrilateral with nodes at $(x_1, y_1), (x_2, y_2), (x_3, y_3), (x_4, y_4)$.
*   **Natural Coordinates:** $\xi, \eta$, each ranging from -1 to +1.
*   **Field Variable Approximation:** $f(\xi, \eta) = \sum_{i=1}^{4} \phi_i(\xi, \eta) f_i$
*   **Shape Functions:** These are typically derived using Lagrange polynomials in two dimensions. For a serendipity quadrilateral (nodes at corners), the shape functions are:
    *   $\phi_1(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 - \eta)$
    *   $\phi_2(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 - \eta)$
    *   $\phi_3(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 + \eta)$
    *   $\phi_4(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 + \eta)$
*   **Properties Check:**
    *   **Kronecker Delta:** E.g., $\phi_1( -1, -1) = \frac{1}{4}(1 - (-1))(1 - (-1)) = \frac{1}{4}(2)(2) = 1$. $\phi_1(1, -1) = \frac{1}{4}(1 - 1)(1 - (-1)) = 0$. $\phi_1(-1, 1) = 0$. $\phi_1(1, 1) = 0$. (Satisfied for all nodes)
    *   **Summability:** Summing all four functions yields 1. (Satisfied)
    *   **Completeness:** These functions are bilinear, meaning they can represent linear variations in $x$ and $y$. This is sufficient for formulating elements like the constant strain quadrilateral (CSQ).
*   **Isoparametric Concept:** The key idea here is that the same shape functions used to interpolate the field variable ($f$) are also used to interpolate the geometry itself.
    *   $x(\xi, \eta) = \sum_{i=1}^{4} \phi_i(\xi, \eta) x_i$
    *   $y(\xi, \eta) = \sum_{i=1}^{4} \phi_i(\xi, \eta) y_i$
    *   This allows for the representation of curved boundaries within elements, making FEM very versatile.
*   **Reference:**
    *   **Cook (2008):** Extensively covers isoparametric formulations, including quadrilateral elements and their shape functions.
    *   **Fish & Belytschko (2007):** Provides theoretical underpinnings for isoparametric mapping and its advantages.

---

### **5. Types of Elements Based on Shape Functions**

The choice of shape functions dictates the type of element and its behavior.

**5.1 Lagrangian Elements:**
*   **Definition:** Elements whose shape functions are constructed directly from the Kronecker delta property and are polynomials. They are typically defined on a standard reference element (e.g., a unit square or cube).
*   **Key Feature:** Nodes are typically located at the vertices and sometimes along the edges or within the element.
*   **Examples:** Linear bar, quadratic bar, linear triangle (using areal coords), bilinear quadrilateral.

**5.2 Serendipity Elements:**
*   **Definition:** Elements that use a minimum number of nodes required to achieve a certain polynomial order, often including mid-side nodes but not interior nodes.
*   **Key Feature:** They have fewer nodes than Lagrangian elements of the same polynomial order, leading to smaller matrices.
*   **Example:** A 2D quadrilateral with nodes only at the corners is Lagrangian (bilinear). A quadratic quadrilateral with nodes at the corners and mid-points of each edge is a Serendipity element (if it uses 8 nodes, it's a serendipity element, whereas a Lagrangian 8-node quad typically also includes an interior node).

**5.3 Hierarchical Elements:**
*   **Definition:** Elements where the basis functions of a lower-order element are a subset of the basis functions of a higher-order element. This is achieved by adding higher-order basis functions that are zero at the lower-order nodes.
*   **Key Feature:** Facilitates h-p refinement, where both element size (h) and polynomial order (p) can be adapted.

**Reference:**
*   **Reddy (2009):** Discusses different element formulations and the rationale behind them.
*   **Fish & Belytschko (2007):** Provides a comparative analysis of various element families.

---

### **6. Higher-Order Elements and Their Shape Functions**

Using higher-order polynomials for shape functions can lead to more accurate results with fewer elements, especially for problems with complex behavior.

**6.1 Concept:** Higher-order elements use more nodes (or nodes placed differently) and polynomials of higher degree to approximate the field variable.

**6.2 Example: Quadratic Triangle (6 Nodes)**
*   **Nodes:** 3 at vertices, 3 at mid-sides.
*   **Shape Functions:** These are also derived using the Kronecker delta property and typically expressed in terms of natural coordinates. For a quadratic triangle, the shape functions are quadratic polynomials.
*   **Advantages:** Can capture linear strain variations, leading to more accurate stress predictions compared to linear triangles.

**6.3 Example: Quadratic Quadrilateral (8 Nodes)**
*   **Nodes:** 4 at vertices, 4 at mid-sides.
*   **Shape Functions:** Quadratic in $\xi$ and $\eta$.
*   **Advantages:** Can capture linear strain variations.

**Reference:**
*   **Cook (2008):** Illustrates the shape functions for higher-order elements and their advantages.
*   **Segerlind (2010):** Explains the process of constructing these higher-order shape functions.

---

### **7. Relation to Course Outcomes**

*   **CO2: To apply the coordinate transformation and formulation of shape functions of various element.**
    *   This module directly addresses this CO by explaining the need for natural coordinates, demonstrating the derivation of shape functions for 1D and 2D elements, and highlighting the isoparametric concept.
*   **CO3: Formulate shape functions and element strain displacement matrix of various element.**
    *   The formation of shape functions is a prerequisite for deriving the strain-displacement matrix ([B] matrix). The derivatives of shape functions, $\partial \phi_i / \partial x$ and $\partial \phi_i / \partial y$, are essential for this. This topic lays the groundwork for CO3.

---

### **8. Practice Questions and Answers**

**Question 1:** For a 1D linear bar element with nodes at $x=0$ and $x=L$, what are the shape functions $\phi_1(x)$ and $\phi_2(x)$?
**Answer:**
$\phi_1(x) = 1 - \frac{x}{L}$
$\phi_2(x) = \frac{x}{L}$

**Question 2:** Which property of shape functions ensures that an element can represent a constant strain state?
**Answer:** Completeness.

**Question 3:** For a 2D linear triangular element with nodes 1, 2, and 3, what is the value of the shape function $\phi_2$ at node 1?
**Answer:** 0 (due to the Kronecker Delta property: $\phi_i$ is 0 at all nodes except node $i$).

**Question 4:** What is the main advantage of using isoparametric elements?
**Answer:** They allow for the representation of curved boundaries in the geometry using the same shape functions that interpolate the solution field, increasing the versatility of FEM.

**Question 5:** State the Kronecker Delta property for shape functions.
**Answer:** At node $j$, $\phi_i(\text{node } j) = \delta_{ij}$, which means $\phi_i=1$ if $i=j$ and $\phi_i=0$ if $i \neq j$.

**Question 6:** Write down the shape functions for a 4-node serendipity quadrilateral element in natural coordinates ($\xi, \eta$).
**Answer:**
$\phi_1(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 - \eta)$
$\phi_2(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 - \eta)$
$\phi_3(\xi, \eta) = \frac{1}{4}(1 + \xi)(1 + \eta)$
$\phi_4(\xi, \eta) = \frac{1}{4}(1 - \xi)(1 + \eta)$

**Question 7:** Consider a 1D quadratic bar element with nodes at $\xi = -1, 0, 1$. If the shape functions are $\phi_1(\xi) = \frac{1}{2}(\xi^2 - \xi)$, $\phi_2(\xi) = 1 - \xi^2$, $\phi_3(\xi) = \frac{1}{2}(\xi^2 + \xi)$, what is the value of $u(\xi)$ at $\xi = 0$?
**Answer:**
$u(0) = \phi_1(0)u_1 + \phi_2(0)u_2 + \phi_3(0)u_3$
$u(0) = (\frac{1}{2}(0^2 - 0))u_1 + (1 - 0^2)u_2 + (\frac{1}{2}(0^2 + 0))u_3$
$u(0) = 0 \cdot u_1 + 1 \cdot u_2 + 0 \cdot u_3 = u_2$.
This confirms the Kronecker Delta property for the middle node.

---

### **9. Important Points to Remember**

*   **Shape functions are local:** They are defined for a single element.
*   **Node numbering is crucial:** The order in which nodes are numbered affects the form of the shape functions.
*   **Polynomial order matters:** Higher-order shape functions generally provide better accuracy but increase computational cost.
*   **Natural coordinates simplify derivations:** They make shape functions independent of element size and orientation.
*   **Isoparametric concept bridges geometry and solution:** It allows for handling complex geometries.
*   **Shape function derivatives are key for [B] matrix:** $\partial \phi_i / \partial x$ and $\partial \phi_i / \partial y$ are obtained via the chain rule using Jacobian transformation from $(\xi, \eta)$ to $(x, y)$.

---

This comprehensive set of notes covers the essential aspects of shape functions in FEM, aligning with the provided learning and course outcomes. The references to textbooks indicate where further details can be found.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
