---
title: "bar element assembly and solution procedure"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463843"
status: "completed"
scrapedAt: "2026-05-20T18:03:55.347Z"
---
# FINITE ELEMENT METHODS - Module 1: Introduction to FEM

## Topic: Bar Element Assembly and Solution Procedure

This module introduces the fundamental concepts of the Finite Element Method (FEM), focusing on the simplest structural element: the bar element. We will explore how to derive the stiffness matrix for a bar element, assemble these elements to represent a larger structure, and then outline the general solution procedure to solve for nodal displacements and stresses.

---

### **1.1 Introduction to the Finite Element Method (FEM)**

**Objective:** To understand the basic procedure of FEM (CO1 - K2).

**Key Concepts:**

*   **What is FEM?**
    *   A powerful numerical technique used to solve complex engineering problems by discretizing a continuous system into a finite number of smaller, interconnected subdomains called "finite elements."
    *   It allows us to approximate the solution of differential equations that describe physical phenomena (e.g., stress, strain, heat transfer) in complex geometries and under various boundary conditions.

*   **Why FEM?**
    *   Handles complex geometries that are difficult to solve analytically.
    *   Accommodates varying material properties and boundary conditions.
    *   Provides a systematic approach to problem-solving.

*   **General Steps of FEM:**
    1.  **Preprocessing:**
        *   **Discretization:** Dividing the continuous domain into finite elements.
        2.  **Element Formulation:**
        *   **Derivation of Element Stiffness Matrix ([k]e):** Relating nodal forces to nodal displacements for each element.
        *   **Derivation of Element Force Vector ({f}e):** Representing external forces acting on the element.
    3.  **Assembly:**
        *   Combining element stiffness matrices and force vectors to form the global system of equations.
    4.  **Application of Boundary Conditions:**
        *   Modifying the global system to incorporate known displacements and forces.
    5.  **Solution:**
        *   Solving the global system of equations for unknown nodal displacements.
    6.  **Postprocessing:**
        *   Calculating strains, stresses, and other derived quantities.
        *   Interpreting and visualizing results.

**Relevant Textbooks/References:**

*   Reddy, J. N. (2009). Chapter 1.
*   Cook, R. D. (2008). Chapter 1.
*   Bhavikatti, S. S. (2008). Chapter 1.
*   Fish, J., & Belytschko, T. (2007). Chapter 1.
*   Segerlind, L. J. (2010). Chapter 1.
*   Ramamurthi, G. (n.d.). Chapter 1.
*   Hutton, D. V. (2009). Chapter 1.

---

### **1.2 The Bar Element**

**Objective:** To understand the governing equations of bar elements and derive their stiffness matrix (CO1 - K2, CO2 - K3).

**Key Concepts & Definitions:**

*   **Bar Element:** A one-dimensional structural element that can resist axial forces (tension or compression) only. It has two nodes, each with one degree of freedom (DOF): axial displacement.
*   **Assumptions for a 1D Bar Element:**
    *   The bar is straight.
    *   Deformations are small.
    *   The material is linear elastic, isotropic, and homogeneous.
    *   Stress is uniform along the cross-section.
    *   Plane sections remain plane and perpendicular to the axis after deformation (no bending or shear).
    *   Only axial displacements are considered.

*   **Governing Equation (for a continuous bar):**
    The governing differential equation for a bar under axial load is derived from the principle of equilibrium and the constitutive law (Hooke's Law):
    $$
    \frac{d}{dx} \left( A E \frac{du}{dx} \right) + q(x) = 0
    $$
    where:
    *   $A$: Cross-sectional area
    *   $E$: Young's modulus (modulus of elasticity)
    *   $u(x)$: Axial displacement at position $x$
    *   $q(x)$: Distributed axial load per unit length

*   **Stress-Strain Relationship (Hooke's Law):**
    $$
    \sigma = E \epsilon
    $$
    where:
    *   $\sigma$: Axial stress
    *   $\epsilon$: Axial strain

*   **Strain-Displacement Relationship:**
    $$
    \epsilon = \frac{du}{dx}
    $$

*   **Force-Displacement Relationship:**
    The axial force $F$ in a bar element is related to the strain by:
    $$
    F = A \sigma = A E \epsilon = A E \frac{du}{dx}
    $$

**Derivation of the Element Stiffness Matrix ([k]e):**

We will use the **Direct Stiffness Method** or the **Virtual Work Method** (which is equivalent to the Principle of Minimum Potential Energy in this case). The Virtual Work Method is more general and widely used in FEM.

**Method 1: Direct Stiffness Method (for a single bar element)**

Consider a bar element of length $L$ with cross-sectional area $A$ and Young's modulus $E$. Let the nodal displacements at node 1 and node 2 be $u_1$ and $u_2$ respectively.

1.  **Assume a displacement field within the element:**
    We assume a linear displacement field for a bar element, which is exact for this case.
    $$
    u(x) = \alpha_1 + \alpha_2 x
    $$
    Applying nodal displacements:
    *   At node 1 ($x=0$): $u(0) = u_1 = \alpha_1$
    *   At node 2 ($x=L$): $u(L) = u_2 = \alpha_1 + \alpha_2 L$
    Solving for $\alpha_1$ and $\alpha_2$:
    $$
    \alpha_1 = u_1
    $$
    $$
    \alpha_2 = \frac{u_2 - u_1}{L}
    $$
    Substituting back into the displacement field:
    $$
    u(x) = u_1 + \frac{u_2 - u_1}{L} x
    $$
    We can express this in matrix form using shape functions:
    $$
    u(x) = \begin{bmatrix} 1 & x \end{bmatrix} \begin{bmatrix} \alpha_1 \\ \alpha_2 \end{bmatrix} = \begin{bmatrix} 1 & x \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 1 & 1/L \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}
    $$
    This form is not the standard shape function representation. A more useful form is:
    $$
    u(x) = N_1(x) u_1 + N_2(x) u_2
    $$
    where $N_1(x)$ and $N_2(x)$ are the shape functions.
    From $u(x) = u_1 + \frac{u_2 - u_1}{L} x = u_1 \left(1 - \frac{x}{L}\right) + u_2 \left(\frac{x}{L}\right)$, we get:
    $$
    N_1(x) = 1 - \frac{x}{L}
    $$
    $$
    N_2(x) = \frac{x}{L}
    $$
    So, the displacement vector $\{u\}_e$ and shape function matrix $[N(x)]$ are:
    $$
    \{u\}_e = \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}
    $$
    $$
    [N(x)] = \begin{bmatrix} 1 - \frac{x}{L} & \frac{x}{L} \end{bmatrix}
    $$
    And the displacement within the element is:
    $$
    u(x) = [N(x)] \{u\}_e
    $$

2.  **Calculate strain within the element:**
    $$
    \epsilon(x) = \frac{du}{dx} = \frac{d}{dx} ([N(x)] \{u\}_e) = [B(x)] \{u\}_e
    $$
    where $[B(x)]$ is the strain-displacement matrix.
    $$
    \frac{dN_1}{dx} = -\frac{1}{L}
    $$
    $$
    \frac{dN_2}{dx} = \frac{1}{L}
    $$
    $$
    [B(x)] = \frac{d}{dx} \begin{bmatrix} 1 - \frac{x}{L} & \frac{x}{L} \end{bmatrix} = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix}
    $$

3.  **Calculate element stress:**
    $$
    \{\sigma\}_e = E \epsilon(x) = E [B(x)] \{u\}_e
    $$
    For a bar element, stress is a scalar, but we often represent it as a column vector with a single entry.
    $$
    \{\sigma\}_e = \begin{bmatrix} \sigma_{xx} \end{bmatrix} = E \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}
    $$

4.  **Calculate element stiffness matrix:**
    The element stiffness matrix $[k]_e$ is defined by the relationship $\{F\}_e = [k]_e \{u\}_e$, where $\{F\}_e$ is the nodal force vector.
    From the principle of virtual work, the internal virtual work done must equal the external virtual work done. For a bar element under virtual displacements $\{\delta u\}_e$:
    $$
    \int_{V_e} \{\delta \epsilon\}_e^T \{\sigma\}_e dV = \{\delta u\}_e^T \{F\}_e
    $$
    Substituting $\{\sigma\}_e = E [B(x)] \{u\}_e$ and $\{\delta \epsilon\}_e = [B(x)] \{\delta u\}_e$:
    $$
    \int_{V_e} ([B(x)] \{\delta u\}_e)^T (E [B(x)] \{u\}_e) dV = \{\delta u\}_e^T \{F\}_e
    $$
    $$
    \{\delta u\}_e^T \left( \int_{V_e} [B(x)]^T E [B(x)] dV \right) \{u\}_e = \{\delta u\}_e^T \{F\}_e
    $$
    Since this must hold for arbitrary virtual displacements $\{\delta u\}_e$, we have:
    $$
    \{F\}_e = \left( \int_{V_e} [B(x)]^T E [B(x)] dV \right) \{u\}_e
    $$
    Thus, the element stiffness matrix is:
    $$
    [k]_e = \int_{V_e} [B(x)]^T E [B(x)] dV
    $$
    Since $E$ and $A$ are assumed constant along the element length, and $dV = A dx$:
    $$
    [k]_e = \int_{0}^{L} [B(x)]^T E A [B(x)] dx
    $$
    Substitute $[B(x)]$:
    $$
    [k]_e = \int_{0}^{L} \begin{bmatrix} -\frac{1}{L} \\ \frac{1}{L} \end{bmatrix} E A \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} dx
    $$
    $$
    [k]_e = E A \int_{0}^{L} \begin{bmatrix} \frac{1}{L^2} & -\frac{1}{L^2} \\ -\frac{1}{L^2} & \frac{1}{L^2} \end{bmatrix} dx
    $$
    Integrating with respect to $x$ from 0 to $L$:
    $$
    [k]_e = E A \begin{bmatrix} \frac{1}{L^2} x & -\frac{1}{L^2} x \\ -\frac{1}{L^2} x & \frac{1}{L^2} x \end{bmatrix} \bigg|_{0}^{L}
    $$
    $$
    [k]_e = E A \begin{bmatrix} \frac{1}{L^2} L & -\frac{1}{L^2} L \\ -\frac{1}{L^2} L & \frac{1}{L^2} L \end{bmatrix}
    $$
    **Element Stiffness Matrix for a Bar Element:**
    $$
    [k]_e = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}
    $$

**Important Points to Remember:**

*   The stiffness matrix $[k]_e$ relates nodal forces $\{F\}_e$ to nodal displacements $\{u\}_e$.
*   For a bar element, the stiffness matrix is $2 \times 2$ as there are two nodes and one DOF per node.
*   The term $\frac{EA}{L}$ is the axial stiffness of the bar.
*   The derivation assumes a linear displacement field, which is exact for bar elements.

**Relevant Textbooks/References:**

*   Reddy, J. N. (2009). Chapter 2 (especially section 2.3 on bar elements).
*   Cook, R. D. (2008). Chapter 3 (especially section 3.2 on truss elements, which are analogous to bar elements).
*   Bhavikatti, S. S. (2008). Chapter 3 (especially section 3.2 on bar elements).
*   Fish, J., & Belytschko, T. (2007). Chapter 2 (section on axial elements).
*   Segerlind, L. J. (2010). Chapter 3 (section on axial bars).
*   Hutton, D. V. (2009). Chapter 3 (section on 1D elements).

---

### **1.3 Element Force Vector ({f}e)**

**Objective:** To understand how to represent external forces acting on an element (CO1 - K2).

**Key Concepts:**

*   **Point Loads:** Forces applied directly at the nodes. These are directly included in the global force vector.
*   **Distributed Loads:** Loads spread over the length of the element. These need to be "converted" into equivalent nodal forces.
*   **Work-Equivalent Nodal Forces:** The principle used is to find nodal forces that do the same work as the distributed load during the assumed nodal displacement field.

**Derivation of Equivalent Nodal Forces for a Uniformly Distributed Load:**

Consider a bar element of length $L$ with a uniformly distributed load $w$ acting downwards (or in the direction of the positive axial displacement). Let the nodal displacements be $u_1$ and $u_2$.

The displacement field within the element is $u(x) = N_1(x)u_1 + N_2(x)u_2 = (1 - x/L)u_1 + (x/L)u_2$.
The distributed load is $w(x) = w$ (constant).

Using the principle of virtual work:
$$
\{\delta u\}_e^T \{F\}_e^{eq} = \int_{0}^{L} \delta u(x) w(x) dx
$$
$$
\{\delta u\}_e^T \{F\}_e^{eq} = \int_{0}^{L} (N_1(x)\delta u_1 + N_2(x)\delta u_2) w dx
$$
$$
\{\delta u\}_e^T \{F\}_e^{eq} = \delta u_1 \int_{0}^{L} N_1(x) w dx + \delta u_2 \int_{0}^{L} N_2(x) w dx
$$
where $\{F\}_e^{eq} = \begin{bmatrix} F_{1} \\ F_{2} \end{bmatrix}$ are the equivalent nodal forces at nodes 1 and 2.

Substituting the shape functions:
$$
\int_{0}^{L} N_1(x) w dx = \int_{0}^{L} \left(1 - \frac{x}{L}\right) w dx = w \left[x - \frac{x^2}{2L}\right]_0^L = w \left(L - \frac{L^2}{2L}\right) = w \left(L - \frac{L}{2}\right) = \frac{wL}{2}
$$
$$
\int_{0}^{L} N_2(x) w dx = \int_{0}^{L} \left(\frac{x}{L}\right) w dx = w \left[\frac{x^2}{2L}\right]_0^L = w \frac{L^2}{2L} = \frac{wL}{2}
$$
So, the equivalent nodal force vector for a uniformly distributed load $w$ is:
$$
\{f\}_e = \begin{bmatrix} F_1 \\ F_2 \end{bmatrix} = \begin{bmatrix} \frac{wL}{2} \\ \frac{wL}{2} \end{bmatrix}
$$
This means that half of the total distributed load ($wL$) is assumed to act at each node.

**Example:**
If a bar element of length 2m has a uniform load of 100 N/m, the equivalent nodal forces would be:
$w = 100$ N/m, $L = 2$ m
$F_1 = F_2 = \frac{100 \times 2}{2} = 100$ N.

**Important Points to Remember:**

*   Distributed loads must be converted to equivalent nodal forces.
*   For uniform loads, the load is split equally between the two nodes.
*   The calculation relies on the principle of work equivalence using the element's shape functions.

**Relevant Textbooks/References:**

*   Reddy, J. N. (2009). Section 2.3.3.
*   Cook, R. D. (2008). Section 3.2.3.
*   Bhavikatti, S. S. (2008). Section 3.2.3.

---

### **1.4 Coordinate Transformation (Optional but important for general case)**

**Objective:** To understand how to handle bar elements oriented at an angle to the global coordinate system (CO2 - K3).

**Key Concepts:**

*   **Global vs. Local Coordinates:**
    *   **Local Coordinates:** A coordinate system defined along the axis of the bar element itself. This simplifies the derivation of the element stiffness matrix.
    *   **Global Coordinates:** A common coordinate system used for the entire structure.

*   **Transformation Matrix:** A matrix that relates displacements and forces in the local system to those in the global system. For a bar element, this is a rotation matrix.

**Derivation for a Bar Element at an Angle $\theta$:**

Consider a bar element connecting nodes 1 and 2. Let the global coordinates of node 1 be $(x_1, y_1)$ and node 2 be $(x_2, y_2)$. The length of the element is $L = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.
The direction cosines of the element's axis with respect to the global x and y axes are:
$$
c = \cos \theta = \frac{x_2 - x_1}{L}
$$
$$
s = \sin \theta = \frac{y_2 - y_1}{L}
$$

Let the displacements in the local coordinate system (along the element axis) be $u'_1$ and $u'_2$.
Let the displacements in the global coordinate system be $(u_{x1}, u_{y1})$ and $(u_{x2}, u_{y2})$.

The axial displacement in the local system is the projection of the global displacement vector onto the element's axis.
For node 1: $u'_1 = u_{x1} \cos \theta + u_{y1} \sin \theta = u_{x1} c + u_{y1} s$
For node 2: $u'_2 = u_{x2} \cos \theta + u_{y2} \sin \theta = u_{x2} c + u_{y2} s$

In matrix form, this relationship is:
$$
\{u'\}_e = [T] \{u\}_e
$$
where $\{u'\}_e = \begin{bmatrix} u'_1 \\ u'_2 \end{bmatrix}$ and $\{u\}_e = \begin{bmatrix} u_{x1} \\ u_{y1} \\ u_{x2} \\ u_{y2} \end{bmatrix}$.

The transformation matrix $[T]$ is:
$$
[T] = \begin{bmatrix} c & s & 0 & 0 \\ 0 & 0 & c & s \end{bmatrix}
$$

The axial force in the local system is $F'_1$ and $F'_2$. The relationship in the local system is:
$$
\{F'\}_e = [k']_e \{u'\}_e
$$
where $[k']_e = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$.

To get the stiffness matrix in the global coordinate system, we use the relationship $\{F\}_e = [T]^T \{F'\}_e$.
$$
\{F\}_e = [T]^T [k']_e [T] \{u\}_e
$$
Therefore, the element stiffness matrix in global coordinates is:
$$
[k]_e = [T]^T [k']_e [T]
$$
$$
[k]_e = \begin{bmatrix} c & 0 \\ s & 0 \\ 0 & c \\ 0 & s \end{bmatrix} \left( \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \right) \begin{bmatrix} c & s & 0 & 0 \\ 0 & 0 & c & s \end{bmatrix}
$$
After performing the matrix multiplication, the element stiffness matrix in global coordinates is:
$$
[k]_e = \frac{EA}{L} \begin{bmatrix}
c^2 & cs & -c^2 & -cs \\
cs & s^2 & -cs & -s^2 \\
-c^2 & -cs & c^2 & cs \\
-cs & -s^2 & cs & s^2
\end{bmatrix}
$$

**Important Points to Remember:**

*   When elements are not aligned with global axes, a transformation is required.
*   The transformation involves direction cosines of the element.
*   The global stiffness matrix is obtained by $[T]^T [k']_e [T]$.
*   The global stiffness matrix is $4 \times 4$ because each node has two DOFs (x and y displacements).

**Relevant Textbooks/References:**

*   Reddy, J. N. (2009). Section 2.3.4.
*   Cook, R. D. (2008). Section 3.3.
*   Bhavikatti, S. S. (2008). Section 3.3.
*   Fish, J., & Belytschko, T. (2007). Chapter 2 (section on transformation).
*   Segerlind, L. J. (2010). Chapter 4.

---

### **1.5 Assembly of Element Matrices**

**Objective:** To combine element stiffness matrices and force vectors into global system of equations (CO1 - K2).

**Key Concepts:**

*   **Global Stiffness Matrix ([K]):** The stiffness matrix of the entire structure. It is assembled by summing up the contributions of individual element stiffness matrices.
*   **Global Force Vector ({F}):** The force vector of the entire structure, containing nodal forces from applied loads and boundary conditions.
*   **Global Displacement Vector ({U}):** The vector of unknown nodal displacements for the entire structure.

**Assembly Procedure:**

The global system of equations is represented as:
$$
[K] \{U\} = \{F\}
$$

**Steps for Assembly:**

1.  **Determine the number of nodes and degrees of freedom (DOFs):** For a 1D bar problem, each node has 1 DOF (axial displacement). If we consider 2D or 3D truss problems, each node has 2 or 3 DOFs respectively. For this module's focus on bar elements (axial only), we assume 1 DOF per node in a 1D context.
2.  **Create a null global stiffness matrix [K] and a null global force vector {F}:** The size of these matrices is (total number of DOFs) $\times$ (total number of DOFs) and (total number of DOFs) $\times$ 1, respectively.
3.  **For each element:**
    *   Calculate the element stiffness matrix $[k]_e$ (using the formula $\frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ for a 1D bar in its local coordinate system).
    *   Calculate the element force vector $\{f\}_e$ (equivalent nodal forces).
    *   **Map element DOFs to global DOFs:** Identify which global DOF corresponds to each nodal DOF of the element. For a bar element connecting nodes $i$ and $j$ in a 1D context, the element DOFs $u_1$ and $u_2$ correspond to global DOFs $U_i$ and $U_j$.
    *   **Add element contributions to the global matrices:** Add the terms of $[k]_e$ to the corresponding locations in $[K]$ and the terms of $\{f\}_e$ to the corresponding locations in $\{F\}$.
        *   If $[k]_e$ is for element $e$ connecting nodes $i$ and $j$, then $k_{pq}$ of $[k]_e$ contributes to $K_{I J}$ of $[K]$, where $I$ and $J$ are the global DOF numbers corresponding to element DOFs $p$ and $q$.
        *   Similarly, $f_p$ of $\{f\}_e$ contributes to $F_I$ of $\{F\}$.

**Example of Assembly (1D Bar Chain):**

Consider a bar composed of two elements.
*   Element 1 connects nodes 1 and 2.
*   Element 2 connects nodes 2 and 3.

Let $u_1, u_2, u_3$ be the global displacements at nodes 1, 2, and 3.
The global system will be $3 \times 3$.

**Element 1:** (Nodes 1, 2)
$$
[k]_1 = \frac{EA}{L_1} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \quad \text{corresponding to } \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}
$$
**Element 2:** (Nodes 2, 3)
$$
[k]_2 = \frac{EA}{L_2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \quad \text{corresponding to } \begin{bmatrix} u_2 \\ u_3 \end{bmatrix}
$$

**Assembly:**
$$
[K] = \begin{bmatrix}
k_{11}^{(1)} & k_{12}^{(1)} & 0 \\
k_{21}^{(1)} & k_{22}^{(1)} + k_{11}^{(2)} & k_{12}^{(2)} \\
0 & k_{21}^{(2)} & k_{22}^{(2)}
\end{bmatrix}
$$
where $k_{ij}^{(e)}$ denotes the element in the i-th row and j-th column of $[k]_e$.

For the force vector, $\{f\}_e$ are the equivalent nodal forces. If node 1 has no load, $F_1 = 0$. If node 2 has a load $F_2$, it gets added to $f_1^{(1)}$ and $f_2^{(2)}$.

**Important Points to Remember:**

*   Assembly is a process of mapping element matrices to the global matrix based on node connectivity.
*   The global stiffness matrix is symmetric.
*   The size of the global matrices depends on the total number of DOFs in the structure.

**Relevant Textbooks/References:**

*   Reddy, J. N. (2009). Chapter 3 (Assembly of global matrices).
*   Cook, R. D. (2008). Chapter 2 (Assembly of global stiffness matrices).
*   Bhavikatti, S. S. (2008). Chapter 2 (Assembly of stiffness matrices).
*   Segerlind, L. J. (2010). Chapter 5.

---

### **1.6 Solution Procedure**

**Objective:** To solve the system of equations for nodal displacements and then calculate stresses (CO1 - K2, CO4 - K5).

**Key Concepts:**

*   **System of Linear Equations:** The assembled equation is $[K]\{U\} = \{F\}$.
*   **Boundary Conditions (BCs):** Constraints on displacements or forces.
    *   **Essential Boundary Conditions:** Prescribed nodal displacements (e.g., fixed end $u=0$).
    *   **Natural Boundary Conditions:** Prescribed nodal forces (e.g., applied load).
*   **Methods for Applying BCs:**
    *   **Penalty Method:** Adding a large stiffness to the diagonal corresponding to the constrained DOF.
    *   **Reduction Method (or Elimination Method):** Directly modifying the $[K]$ and $\{F\}$ matrices to enforce the BCs. This is more common and often simpler to implement.
*   **Solving for Displacements:** Solving the modified system of linear equations for $\{U\}$.
*   **Calculating Strains and Stresses:** Using the calculated nodal displacements to find strains and stresses within each element.

**General Solution Procedure:**

1.  **Formulate the Global System:** Assemble $[K]$ and $\{F\}$ from all elements.
2.  **Apply Boundary Conditions:** Modify $[K]$ and $\{F\}$ to satisfy the essential BCs (prescribed displacements).
    *   **Reduction Method:**
        *   For a prescribed displacement $U_i = d_i$ at node $i$ (DOF $i$):
            *   Zero out the $i$-th row and $i$-th column of $[K]$.
            *   Set the diagonal element $K_{ii}$ to 1.
            *   Set the $i$-th element of $\{F\}$ to $d_i$.
            *   For all other DOFs $j$ where $U_j$ is not prescribed, update the force vector: $F_j = F_j - K_{ij} d_i$.
    *   A more direct way for $U_i = 0$ (fixed support): Zero out the $i$-th row and $i$-th column of $[K]$ and set $K_{ii} = 1$. The $i$-th entry of $\{F\}$ becomes 0.
3.  **Solve the System:** Solve the modified system of equations $[K]\{U\} = \{F\}$ for the unknown nodal displacements $\{U\}$. This can be done using various numerical methods like Gaussian elimination, LU decomposition, or iterative solvers.
4.  **Calculate Element Strains and Stresses:** Once the global displacements $\{U\}$ are known, we can find the displacements for each element $\{u\}_e$ by extracting the relevant components from $\{U\}$. Then, use these to calculate strains and stresses:
    *   **Strain within element e:** $\{\epsilon\}_e = [B]_e \{u\}_e$
    *   **Stress within element e:** $\{\sigma\}_e = E \{\epsilon\}_e = E [B]_e \{u\}_e$ (for a bar element).

**Example of Boundary Condition Application (Reduction Method for $U_1=0$):**

Suppose we have the system:
$$
\begin{bmatrix} K_{11} & K_{12} & K_{13} \\ K_{21} & K_{22} & K_{23} \\ K_{31} & K_{32} & K_{33} \end{bmatrix} \begin{bmatrix} U_1 \\ U_2 \\ U_3 \end{bmatrix} = \begin{bmatrix} F_1 \\ F_2 \\ F_3 \end{bmatrix}
$$
And we have the boundary condition $U_1 = 0$.

Modified system:
1.  Zero out row 1 and column 1 of $[K]$.
2.  Set $K_{11} = 1$.
3.  Set $F_1 = 0$.

The system becomes:
$$
\begin{bmatrix} 1 & 0 & 0 \\ 0 & K_{22} & K_{23} \\ 0 & K_{32} & K_{33} \end{bmatrix} \begin{bmatrix} U_1 \\ U_2 \\ U_3 \end{bmatrix} = \begin{bmatrix} 0 \\ F_2 \\ F_3 \end{bmatrix}
$$
Now, we have the reduced system for $U_2$ and $U_3$:
$$
\begin{bmatrix} K_{22} & K_{23} \\ K_{32} & K_{33} \end{bmatrix} \begin{bmatrix} U_2 \\ U_3 \end{bmatrix} = \begin{bmatrix} F_2 \\ F_3 \end{bmatrix}
$$
This reduced system can be solved for $U_2$ and $U_3$. $U_1$ is already known to be 0.

**Important Points to Remember:**

*   Essential boundary conditions are crucial for obtaining a unique solution. Without them, the stiffness matrix is singular, and the structure can undergo rigid body motion.
*   The reduction method is effective for imposing displacement constraints.
*   The solution of the global system yields nodal displacements, which are then used to compute element-level strains and stresses.

**Relevant Textbooks/References:**

*   Reddy, J. N. (2009). Chapter 3 (Solving the system of equations and application of boundary conditions).
*   Cook, R. D. (2008). Chapter 2 (Solving the global system).
*   Bhavikatti, S. S. (2008). Chapter 2 (Solution of system of equations).
*   Segerlind, L. J. (2010). Chapter 5.

---

### **1.7 Stress Calculation (Using Energy Method / Virtual Work)**

**Objective:** To evaluate element stresses using energy principles (CO4 - K5). This is an extension of step 1.6.4.

**Key Concepts:**

*   **Strain Energy:** The energy stored within an element due to deformation. For a bar element, it's $U_e = \frac{1}{2} \{u\}_e^T [k]_e \{u\}_e$.
*   **Stress from Strain Energy:** While not the primary method for bar elements (direct calculation using $\{\sigma\}_e = E [B]_e \{u\}_e$ is simpler), energy principles are fundamental in FEM, especially for deriving elements or calculating stresses in more complex scenarios (e.g., using stress recovery techniques). For completeness, consider the constitutive relationship.

**Stress Calculation (Direct Method - reiteration):**

Once the element nodal displacements $\{u\}_e$ are determined from the global solution, the strain and stress within the element can be calculated directly.

For a bar element $e$, the displacement vector is $\{u\}_e = \begin{bmatrix} u_i \\ u_j \end{bmatrix}$, where $u_i$ and $u_j$ are the displacements of nodes $i$ and $j$ of the element.

The strain is:
$$
\{\epsilon\}_e = [B]_e \{u\}_e = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} \begin{bmatrix} u_i \\ u_j \end{bmatrix} = \frac{u_j - u_i}{L}
$$
This is the constant strain within the element.

The stress is:
$$
\{\sigma\}_e = E \{\epsilon\}_e = E \frac{u_j - u_i}{L}
$$
Or in matrix form:
$$
\{\sigma\}_e = E [B]_e \{u\}_e = E \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} \begin{bmatrix} u_i \\ u_j \end{bmatrix}
$$
The stress calculated this way is often referred to as "elemental stress" and is constant over the element. This is exact for a bar element under axial load.

**Relevant Textbooks/References:**

*   Reddy, J. N. (2009). Section 2.3.2 (Stress-strain relation).
*   Cook, R. D. (2008). Section 3.2.2 (Stress calculation).
*   Bhavikatti, S. S. (2008). Section 3.2.2 (Stress calculation).

---

### **1.8 Practice Questions and Exercises**

**Question 1:**
A steel bar element has a length of 1 m, a Young's modulus $E = 200$ GPa, and a cross-sectional area $A = 100$ mm$^2$. Calculate the element stiffness matrix for this bar.

**Answer 1:**
Given:
$L = 1 \text{ m} = 1000 \text{ mm}$
$E = 200 \text{ GPa} = 200 \times 10^3 \text{ N/mm}^2$
$A = 100 \text{ mm}^2$

The element stiffness matrix is:
$$
[k]_e = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}
$$
$$
\frac{EA}{L} = \frac{(200 \times 10^3 \text{ N/mm}^2) \times (100 \text{ mm}^2)}{1000 \text{ mm}} = \frac{20 \times 10^6 \text{ N}}{1000 \text{ mm}} = 20000 \text{ N/mm} = 20 \text{ kN/mm}
$$
$$
[k]_e = 20000 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \text{ N/mm} \quad \text{or} \quad 20 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \text{ kN/mm}
$$

**Question 2:**
Consider a bar element subjected to a uniformly distributed load $w = 5$ kN/m along its length. If the element has a length of $L=2$ m, calculate the equivalent nodal forces.

**Answer 2:**
The equivalent nodal forces for a uniformly distributed load $w$ are $F_1 = \frac{wL}{2}$ and $F_2 = \frac{wL}{2}$.
Given $w = 5$ kN/m and $L = 2$ m.
$F_1 = \frac{5 \text{ kN/m} \times 2 \text{ m}}{2} = 5 \text{ kN}$
$F_2 = \frac{5 \text{ kN/m} \times 2 \text{ m}}{2} = 5 \text{ kN}$
The element force vector is $\{f\}_e = \begin{bmatrix} 5 \\ 5 \end{bmatrix}$ kN.

**Question 3:**
A single bar element has nodes 1 and 2. Node 1 is fixed ($u_1 = 0$). Node 2 is free to move and has a load $P = 10$ kN applied at it. The element has $E = 210$ GPa, $A = 500$ mm$^2$, and $L = 1$ m. Calculate the nodal displacement at node 2 and the stress in the element.

**Answer 3:**
**Step 1: Element Stiffness Matrix**
$L = 1 \text{ m} = 1000 \text{ mm}$
$E = 210 \text{ GPa} = 210 \times 10^3 \text{ N/mm}^2$
$A = 500 \text{ mm}^2$
$$
\frac{EA}{L} = \frac{(210 \times 10^3 \text{ N/mm}^2) \times (500 \text{ mm}^2)}{1000 \text{ mm}} = \frac{105 \times 10^6 \text{ N}}{1000 \text{ mm}} = 105000 \text{ N/mm} = 105 \text{ kN/mm}
$$
$$
[k]_e = 105000 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \text{ N/mm}
$$

**Step 2: Global System and Boundary Conditions**
The global system is $[K]\{U\} = \{F\}$, where $\{U\} = \begin{bmatrix} U_1 \\ U_2 \end{bmatrix}$ and $\{F\} = \begin{bmatrix} F_1 \\ F_2 \end{bmatrix}$.
We are given:
$U_1 = 0$ (fixed at node 1)
$F_2 = 10$ kN (load at node 2)
We assume $F_1 = 0$ (no applied load at node 1).

The system is:
$$
105000 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} U_1 \\ U_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 10000 \end{bmatrix} \text{ N}
$$
Using $U_1 = 0$:
$$
105000 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ U_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 10000 \end{bmatrix}
$$
This gives two equations:
Equation 1: $105000 (0 - U_2) = 0 \implies -105000 U_2 = 0 \implies U_2 = 0$. This is incorrect because there is an external force.

**Correct Boundary Condition Application (Reduction Method):**
Initial system:
$$
\begin{bmatrix} K_{11} & K_{12} \\ K_{21} & K_{22} \end{bmatrix} \begin{bmatrix} U_1 \\ U_2 \end{bmatrix} = \begin{bmatrix} F_1 \\ F_2 \end{bmatrix}
$$
$$
\begin{bmatrix} 105000 & -105000 \\ -105000 & 105000 \end{bmatrix} \begin{bmatrix} U_1 \\ U_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 10000 \end{bmatrix}
$$
Apply $U_1 = 0$:
Set $K_{11}=1$, $K_{12}=0$, $K_{21}=0$. Set $F_1=0$.
Modified system:
$$
\begin{bmatrix} 1 & 0 \\ 0 & K_{22} \end{bmatrix} \begin{bmatrix} U_1 \\ U_2 \end{bmatrix} = \begin{bmatrix} 0 \\ F_2' \end{bmatrix}
$$
Where $F_2' = F_2 - K_{21} U_1 = 10000 - (-105000) \times 0 = 10000$ N.
The second equation is $K_{22} U_2 = F_2'$, which is $105000 U_2 = 10000$.

**Step 3: Solve for Displacements**
$$
U_2 = \frac{10000 \text{ N}}{105000 \text{ N/mm}} = \frac{10}{105} \text{ mm} \approx 0.0952 \text{ mm}
$$
So, the nodal displacement at node 2 is approximately $0.0952$ mm.

**Step 4: Calculate Stress**
The element nodal displacements are $\{u\}_e = \begin{bmatrix} U_1 \\ U_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0.0952 \end{bmatrix}$ mm.
$$
\epsilon_e = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} \begin{bmatrix} 0 \\ 0.0952 \end{bmatrix} = \begin{bmatrix} -\frac{1}{1000 \text{ mm}} & \frac{1}{1000 \text{ mm}} \end{bmatrix} \begin{bmatrix} 0 \\ 0.0952 \end{bmatrix}
$$
$$
\epsilon_e = \frac{0.0952}{1000} = 9.52 \times 10^{-5} \text{ (unitless strain)}
$$
$$
\sigma_e = E \epsilon_e = (210 \times 10^3 \text{ N/mm}^2) \times (9.52 \times 10^{-5}) \approx 20 \text{ N/mm}^2 = 20 \text{ MPa}
$$
The stress in the element is approximately 20 MPa (tensile).

---

### **1.9 Summary of Key Concepts and Learning Outcomes**

This module covered the fundamental building blocks of FEM for a simple bar element:

*   **Understanding FEM Procedure (CO1 - K2):** The general steps from discretization to postprocessing.
*   **Bar Element Formulation (CO2 - K3):** Derivation of shape functions $N_1(x) = 1 - x/L$ and $N_2(x) = x/L$, and the strain-displacement matrix $[B]$.
*   **Element Stiffness Matrix (CO1 - K2):** Derivation of $[k]_e = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ using the principle of virtual work.
*   **Element Force Vector (CO1 - K2):** Representing distributed loads as equivalent nodal forces.
*   **Coordinate Transformation (CO2 - K3):** Understanding the need for and formulation of the transformation matrix for angled elements.
*   **Assembly (CO1 - K2):** Combining element matrices to form the global system $[K]\{U\} = \{F\}$.
*   **Solution Procedure (CO1 - K2):** Applying boundary conditions and solving the linear system for nodal displacements.
*   **Stress Calculation (CO4 - K5):** Using nodal displacements and the strain-displacement matrix to compute element stresses.

These concepts lay the groundwork for analyzing more complex structural problems using FEM.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
