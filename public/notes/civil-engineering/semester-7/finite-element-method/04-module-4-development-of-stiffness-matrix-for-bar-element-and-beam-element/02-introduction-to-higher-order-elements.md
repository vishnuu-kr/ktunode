---
title: "Introduction to higher order elements"
subject: "FINITE ELEMENT METHOD"
module: "Module 4: Development of stiffness matrix for bar element and beam element"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116dd"
status: "completed"
scrapedAt: "2026-05-20T18:59:02.587Z"
---
# FINITE ELEMENT METHOD - Module 4: Development of Stiffness Matrix for Bar and Beam Elements

## Topic: Introduction to Higher Order Elements

### Learning Outcomes:

*   Understand the motivation for using higher-order elements.
*   Define and differentiate between lower-order and higher-order elements.
*   Identify the key characteristics of higher-order polynomial approximations.
*   Explain the concept of interpolation functions (shape functions) for higher-order elements.
*   Recognize how higher-order elements affect the stiffness matrix and degrees of freedom.
*   Appreciate the advantages and disadvantages of using higher-order elements.

---

### 1. Motivation for Using Higher Order Elements

**Why do we need elements beyond the simplest ones (linear)?**

*   **Improved Accuracy for a Given Number of Elements:** Lower-order elements (e.g., linear bar or beam) often require a very fine mesh (many elements) to achieve acceptable accuracy, especially for problems with complex behavior like bending. Higher-order elements can capture the variation of the solution more effectively with fewer elements.
*   **Better Representation of Complex Behavior:** Real-world physical phenomena often involve non-linear variations (e.g., curvature in beams). Higher-order polynomial approximations can better represent these complex variations.
*   **Reduced Discretization Error:** The error in FEM solutions is often related to the approximation of the exact solution by piecewise polynomial functions. Higher-order polynomials generally lead to smaller discretization errors for a given mesh size.
*   **Handling Specific Boundary Conditions or Loads:** Certain types of boundary conditions or distributed loads might be more naturally represented by higher-order functions.

**Analogy:** Imagine trying to draw a smooth curve with only straight line segments (linear elements). You'll need many small segments to approximate the curve well. If you use curved segments (higher-order elements), you can achieve a better approximation with fewer segments.

---

### 2. Defining Lower-Order vs. Higher-Order Elements

**Definition:**

*   **Lower-Order Elements:** Elements that use simple polynomial approximations, typically linear or constant, to represent the variation of the solution (e.g., displacement, temperature) within the element.
*   **Higher-Order Elements:** Elements that use more complex polynomial approximations (quadratic, cubic, or higher) to represent the variation of the solution within the element.

| Feature            | Lower-Order Elements (e.g., Linear)                                  | Higher-Order Elements (e.g., Quadratic, Cubic)                                        |
| :----------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **Polynomial Degree** | Linear (degree 1) or constant (degree 0)                            | Quadratic (degree 2), Cubic (degree 3), Quartic (degree 4), etc.                   |
| **Nodes per Element** | Typically 2 nodes (at the ends)                                      | Typically 3 or more nodes (e.g., 3 for quadratic, 4 for cubic), including interior nodes. |
| **Degrees of Freedom (DOF) per Node** | Typically 1 DOF per node for a bar (axial displacement), 2 DOF for a beam (vertical displacement, rotation) | Can have the same DOFs per node as lower-order elements, but more nodes mean more total DOFs. |
| **Complexity of Shape Functions** | Simpler linear functions.                                          | More complex quadratic, cubic, or higher-order polynomial functions.                  |
| **Accuracy Potential** | Lower, especially for bending or complex stress gradients.           | Higher, can capture complex behavior more efficiently.                              |
| **Computational Cost** | Lower computational cost per element (smaller stiffness matrix).       | Higher computational cost per element (larger stiffness matrix).                     |
| **Implementation Effort** | Simpler to implement.                                                | More complex to implement.                                                           |

---

### 3. Key Characteristics of Higher-Order Polynomial Approximations

Higher-order elements utilize polynomial functions of degree 2 or higher to approximate the displacement or other relevant field variable within an element.

**Examples of Polynomials:**

*   **Linear (Degree 1):** $u(x) = a_0 + a_1 x$
*   **Quadratic (Degree 2):** $u(x) = a_0 + a_1 x + a_2 x^2$
*   **Cubic (Degree 3):** $u(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3$

**Number of Coefficients:** The number of coefficients ($a_0, a_1, a_2, \dots$) in a polynomial of degree $n$ is $n+1$.

**Relationship between Coefficients and DOFs:** For an element to be uniquely defined, we need as many data points (degrees of freedom) as there are unknown coefficients in the assumed polynomial.

*   **Linear Element (Degree 1, 2 coefficients):** Needs 2 DOFs (e.g., displacement at two nodes).
*   **Quadratic Element (Degree 2, 3 coefficients):** Needs 3 DOFs (e.g., displacement at two end nodes and one mid-side node).
*   **Cubic Element (Degree 3, 4 coefficients):** Needs 4 DOFs (e.g., displacement at two end nodes and two intermediate nodes).

**Continuity:** Higher-order elements can naturally provide higher-order continuity ($C^1$, $C^2$, etc.) if designed appropriately, which is crucial for beam bending problems where the second derivative of displacement (curvature) is important.

---

### 4. Interpolation Functions (Shape Functions) for Higher-Order Elements

Shape functions, denoted by $N_i(x)$, are fundamental to FEM. They describe how the nodal DOFs contribute to the overall displacement field within an element. For higher-order elements, these shape functions are polynomial in nature.

**General Form of Approximation:**
The displacement $u(x)$ within an element can be expressed as a linear combination of the nodal displacements ($u_i$) and their corresponding shape functions ($N_i(x)$):

$u(x) = \sum_{i=1}^{n} N_i(x) u_i$

where $n$ is the number of nodes in the element.

**Properties of Shape Functions:**

1.  $\sum_{i=1}^{n} N_i(x) = 1$ (ensures rigid body motion if all $u_i$ are constant).
2.  $N_i(x_j) = \delta_{ij}$ (Kronecker delta): $N_i(x_i) = 1$ and $N_i(x_j) = 0$ for $i \neq j$. This means that at node $i$, only the displacement $u_i$ is non-zero, and it directly contributes to the displacement at that node.

**Example: Quadratic Bar Element (3 Nodes)**

Consider a quadratic bar element defined over the interval $[x_1, x_3]$, with nodes at $x_1$ (left end), $x_2$ (mid-side), and $x_3$ (right end). The displacement $u(x)$ can be approximated by a quadratic polynomial:

$u(x) = a_0 + a_1 x + a_2 x^2$

We need 3 nodes to determine the 3 coefficients ($a_0, a_1, a_2$). Let the nodal displacements be $u_1, u_2, u_3$ at nodes $x_1, x_2, x_3$ respectively.

The shape functions for a quadratic element are typically derived using Lagrange polynomials. For a 1D element defined on a reference domain $[-1, 1]$ with nodes at $-1, 0, 1$:

*   $N_1(\xi) = \frac{1}{2} \xi (\xi - 1)$
*   $N_2(\xi) = (1 - \xi)(1 + \xi)$
*   $N_3(\xi) = \frac{1}{2} \xi (\xi + 1)$

where $\xi$ is the natural coordinate. For a general interval $[x_1, x_3]$, we map:

$\xi = \frac{2x - (x_1 + x_3)}{x_3 - x_1}$

And the shape functions become functions of $x$. A more direct way to define them is:

*   $N_1(x) = \frac{(x - x_2)(x - x_3)}{(x_1 - x_2)(x_1 - x_3)}$
*   $N_2(x) = \frac{(x - x_1)(x - x_3)}{(x_2 - x_1)(x_2 - x_3)}$
*   $N_3(x) = \frac{(x - x_1)(x - x_2)}{(x_3 - x_1)(x_3 - x_2)}$

If we consider a quadratic bar element with nodes at $x=0$, $x=L/2$, and $x=L$, the shape functions are:

*   $N_1(x) = \frac{(x - L/2)(x - L)}{(0 - L/2)(0 - L)} = \frac{(x - L/2)(x - L)}{L^2/2} = \frac{2}{L^2}(x - L/2)(x - L)$
*   $N_2(x) = \frac{(x - 0)(x - L)}{(L/2 - 0)(L/2 - L)} = \frac{x(x - L)}{(L/2)(-L/2)} = \frac{x(x - L)}{-L^2/4} = -\frac{4}{L^2}x(x - L)$
*   $N_3(x) = \frac{(x - 0)(x - L/2)}{(L - 0)(L - L/2)} = \frac{x(x - L/2)}{L(L/2)} = \frac{x(x - L/2)}{L^2/2} = \frac{2}{L^2}x(x - L/2)$

The displacement field is then: $u(x) = N_1(x)u_1 + N_2(x)u_2 + N_3(x)u_3$.

---

### 5. Impact on Stiffness Matrix and Degrees of Freedom

**Degrees of Freedom (DOF):**

*   **Bar Element:**
    *   Linear: 2 DOFs (axial displacements at ends) per element.
    *   Quadratic: 3 DOFs (axial displacements at ends and mid-side) per element.
    *   Cubic: 4 DOFs (axial displacements at ends and two intermediate points) per element.
*   **Beam Element:**
    *   Linear (Euler-Bernoulli): 2 DOFs per node (vertical displacement, rotation). Total 4 DOFs for a 2-node linear beam.
    *   Quadratic: 3 DOFs per node (vertical displacement, rotation, and displacement/slope at mid-side). Total 6 DOFs for a 3-node quadratic beam.
    *   Cubic (Hermite polynomial): 2 DOFs per node (vertical displacement, rotation). Total 4 DOFs for a 2-node cubic beam. *Note: The cubic Hermite beam element is often preferred over a quadratic one because it has $C^1$ continuity (continuous first derivative, i.e., slope), which is naturally required for beam bending.*

**Stiffness Matrix ($[k]$):**

*   **Size:** The size of the element stiffness matrix is determined by the number of DOFs per element.
    *   Linear bar: $2 \times 2$
    *   Quadratic bar: $3 \times 3$
    *   Cubic bar: $4 \times 4$
    *   Linear beam: $4 \times 4$
    *   Cubic beam: $4 \times 4$ (but shape functions are cubic)
    *   Quadratic beam: $6 \times 6$
*   **Derivation:** The stiffness matrix is derived by integrating the product of the derivatives of shape functions with respect to the appropriate material and geometric properties. For example, for a bar element:

    $[k] = \int_0^L AE \left(\frac{dB}{dx}\right)^T \left(\frac{dB}{dx}\right) dx$

    where $B$ is the strain-displacement matrix derived from the derivatives of the shape functions. Since higher-order shape functions involve higher-order polynomials and their derivatives, the integration will result in larger stiffness matrices.

**Example: Stiffness Matrix of a Quadratic Bar Element**

For a quadratic bar element with nodal displacements $u_1, u_2, u_3$ at $x_1, x_2, x_3$, the displacement is $u(x) = N_1(x)u_1 + N_2(x)u_2 + N_3(x)u_3$.
The strain is $\epsilon = \frac{du}{dx} = \frac{dN_1}{dx}u_1 + \frac{dN_2}{dx}u_2 + \frac{dN_3}{dx}u_3$.
The strain-displacement matrix is $B(x) = [\frac{dN_1}{dx}, \frac{dN_2}{dx}, \frac{dN_3}{dx}]$.
The stress is $\sigma = E \epsilon = E B \{u\}$.
The element stiffness matrix is $[k] = \int_0^L E A B^T B dx$.

The derivatives of the quadratic shape functions will be linear, leading to the $3 \times 3$ stiffness matrix.

---

### 6. Advantages and Disadvantages of Higher-Order Elements

**Advantages:**

*   **Higher Accuracy:** Generally provides more accurate results for a given number of elements, especially for problems with high gradients or bending.
*   **Fewer Elements Required:** Can significantly reduce the total number of elements needed for a mesh, thus reducing the overall problem size and computational cost for a desired accuracy.
*   **Better Convergence:** Exhibit faster convergence rates as the mesh is refined. The error often decreases with $h^{p+1}$, where $p$ is the polynomial degree and $h$ is the element size. For linear elements ($p=1$), this is $h^2$. For quadratic elements ($p=2$), it's $h^3$.
*   **Natural Representation of Smooth Fields:** Better at capturing smooth variations like bending in beams.
*   **Reduced "Locking" Effects:** In some cases (like thin structures in elasticity), higher-order elements can be less prone to numerical issues like shear locking compared to lower-order elements.

**Disadvantages:**

*   **Increased Complexity:** Derivation of shape functions and stiffness matrices is more complex.
*   **Higher Computational Cost per Element:** The stiffness matrix is larger ($N \times N$ where $N$ is the number of DOFs per element), leading to more computations for matrix operations.
*   **More DOFs per Element:** Even if the DOFs per node are the same, more nodes per element mean more total DOFs, potentially increasing the size of the global system of equations if not managed carefully.
*   **More Difficult to Implement:** Coding and debugging can be more challenging.
*   **Higher-Order Derivatives:** For some formulations (like stress calculations), higher-order derivatives of the solution are needed, which can be more sensitive to noise in the solution.
*   **Element Compatibility:** Ensuring continuity between elements of different orders can be problematic, though typically elements of the same order are used within a mesh for simplicity.

---

### Practice Questions and Exercises

**Question 1:**
What is the primary motivation for using higher-order finite elements compared to linear (lower-order) elements?

**Question 2:**
A quadratic bar element has how many nodes and what is the typical polynomial order of its displacement approximation?

**Question 3:**
If a linear bar element has 2 degrees of freedom (DOFs) per element, a quadratic bar element typically has how many DOFs per element? Explain why.

**Question 4:**
Consider a cubic approximation for the displacement $u(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3$.
a) How many coefficients are there in this approximation?
b) How many nodes are typically required for a finite element based on this cubic approximation?
c) What would be the size of the stiffness matrix for such an element?

**Question 5:**
Briefly discuss one advantage and one disadvantage of using higher-order elements.

---

### Answers to Practice Questions

**Answer 1:**
The primary motivation is to achieve higher accuracy with fewer elements, thereby reducing the overall computational effort and cost for a given level of precision, especially for problems with complex behavior like bending or significant stress gradients.

**Answer 2:**
A quadratic bar element typically has **three nodes**. Its displacement approximation is typically **quadratic (degree 2)**.

**Answer 3:**
A quadratic bar element typically has **three degrees of freedom (DOFs)** per element. This is because a quadratic polynomial has three coefficients, and each node contributes one unknown displacement, requiring three nodes to uniquely define the quadratic displacement field within the element.

**Answer 4:**
a) There are **four** coefficients ($a_0, a_1, a_2, a_3$) in the cubic approximation.
b) Typically **four nodes** are required for a finite element based on this cubic approximation.
c) The size of the stiffness matrix for such an element would be **4x4**.

**Answer 5:**
*   **Advantage:** Higher accuracy for a given number of elements, or fewer elements required for a desired accuracy.
*   **Disadvantage:** Increased complexity in derivation and implementation, and higher computational cost per element due to larger stiffness matrices.

---

### Important Points to Remember

*   **Order of Polynomial:** The "order" of an element refers to the highest power of the spatial coordinate in its interpolation (shape) functions.
*   **Nodes and DOFs:** Higher-order elements have more nodes (often including mid-side or internal nodes) and thus more degrees of freedom per element.
*   **Lagrange Polynomials:** Commonly used to derive shape functions for higher-order elements.
*   **Stiffness Matrix Size:** The size of the element stiffness matrix is equal to the number of DOFs per element.
*   **Accuracy vs. Cost:** Higher-order elements offer a trade-off: improved accuracy and convergence for increased implementation complexity and computational cost per element.
*   **Beam Elements:** For beam bending problems, cubic (Hermite) elements are often preferred over quadratic elements because they provide $C^1$ continuity (continuous slope), which is physically meaningful for bending.
