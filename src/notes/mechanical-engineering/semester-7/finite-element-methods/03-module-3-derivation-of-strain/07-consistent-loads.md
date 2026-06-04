---
title: "consistent loads"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044642a0"
status: "completed"
scrapedAt: "2026-05-20T18:13:03.527Z"
---
# FINITE ELEMENT METHODS - Module 3: Derivation of Strain

## Topic: Consistent Loads

### 1. Introduction to Consistent Loads

This topic focuses on how to represent external forces and boundary conditions as equivalent nodal forces in the finite element method (FEM). In FEM, the governing differential equations are typically expressed in a weak or variational form, which is then used to derive the stiffness matrix and load vector. Consistent loads are a crucial component of the load vector.

**Key Concept:** In FEM, forces are assumed to act at the nodes of the element. However, in reality, loads can be distributed over the element (e.g., distributed pressure, body forces) or prescribed displacements at boundaries. To maintain consistency with the assumed displacement field within the element, these distributed loads and boundary conditions must be transformed into equivalent nodal forces. These equivalent nodal forces are called **consistent loads**.

**Importance:** The accuracy of the FEM solution is highly dependent on how well the actual loads and boundary conditions are represented by the nodal forces. Inconsistent representation can lead to erroneous results, especially in terms of stresses and strains.

**Learning Outcome Alignment:**

*   **LO 1:** Understand the governing equations and basic procedure of FEM (K2) - This topic is fundamental to setting up the FEM equations.
*   **LO 3:** Formulate shape functions and element strain displacement matrix (K4) - Consistent loads are derived using the same shape functions used for displacement interpolation, ensuring consistency.

**Course Outcome Alignment:**

*   **CO1 (K2):** Understanding the basic procedure of FEM involves understanding how loads are incorporated into the system equations.
*   **CO3 (K4):** The formulation of consistent loads directly uses the shape functions, reinforcing their application beyond strain-displacement relationships.

---

### 2. Types of Loads and Their Consistent Nodal Force Representation

We will explore how different types of loads are converted into equivalent nodal forces for various element types. The general principle involves integrating the product of the load and the shape function over the domain where the load is applied.

#### 2.1. Body Forces (e.g., Gravity, Centrifugal Forces)

Body forces act on the entire volume or mass of an element. They are typically represented as a force per unit volume or per unit mass.

**Description:** Let $\mathbf{b}$ be the body force vector per unit volume. For an element with volume $V_e$, the total body force is $\int_{V_e} \mathbf{b} \, dV$.

**Derivation:**
The equivalent nodal force vector $\mathbf{f}_b$ for an element is obtained by considering the work done by the body forces in displacing the element nodes according to the assumed displacement field.
The displacement field within an element is given by $\mathbf{u}_e = \mathbf{N} \mathbf{d}_e$, where $\mathbf{N}$ is the matrix of shape functions and $\mathbf{d}_e$ is the vector of nodal displacements.

The virtual work done by the body forces is:
$\delta W_b = \int_{V_e} \mathbf{b} \cdot \delta \mathbf{u}_e \, dV = \int_{V_e} \mathbf{b} \cdot \delta (\mathbf{N} \mathbf{d}_e) \, dV$

Since $\mathbf{d}_e$ are independent nodal displacements, $\delta \mathbf{u}_e = \mathbf{N} \delta \mathbf{d}_e$.
$\delta W_b = \int_{V_e} \mathbf{b}^T \mathbf{N} \delta \mathbf{d}_e \, dV = \left( \int_{V_e} \mathbf{N}^T \mathbf{b} \, dV \right)^T \delta \mathbf{d}_e$

The consistent nodal force vector is then:
$\mathbf{f}_b = \int_{V_e} \mathbf{N}^T \mathbf{b} \, dV$

**Example (1D Bar Element):**
Consider a 1D bar element with length $L$ subjected to a distributed body force $\rho A g$ along its length (e.g., gravity, where $\rho$ is density, $A$ is cross-sectional area, and $g$ is acceleration due to gravity). Assume the force acts in the x-direction.

The shape functions for a 1D bar element are $N_1(\xi) = \frac{1-\xi}{2}$ and $N_2(\xi) = \frac{1+\xi}{2}$, where $\xi$ is the natural coordinate, and $x = L\xi/2$. $dx = L/2 \, d\xi$.
The body force per unit volume is $b_x$. The body force per unit length is $f_x = b_x A$. Let's assume a constant body force per unit volume $b_x$.

$\mathbf{f}_b = \int_{V_e} \mathbf{N}^T \mathbf{b} \, dV = \int_{-1}^{1} \begin{bmatrix} N_1 \\ N_2 \end{bmatrix} b_x (A \, dx)$
$\mathbf{f}_b = \int_{-1}^{1} \begin{bmatrix} N_1 \\ N_2 \end{bmatrix} b_x A \left(\frac{L}{2} \, d\xi\right)$
$\mathbf{f}_b = \frac{b_x A L}{2} \int_{-1}^{1} \begin{bmatrix} N_1 \\ N_2 \end{bmatrix} \, d\xi$

Let's compute the integrals:
$\int_{-1}^{1} N_1 \, d\xi = \int_{-1}^{1} \frac{1-\xi}{2} \, d\xi = \frac{1}{2} \left[ \xi - \frac{\xi^2}{2} \right]_{-1}^{1} = \frac{1}{2} \left[ (1 - \frac{1}{2}) - (-1 - \frac{1}{2}) \right] = \frac{1}{2} \left[ \frac{1}{2} - (-\frac{3}{2}) \right] = \frac{1}{2} \left[ 2 \right] = 1$

$\int_{-1}^{1} N_2 \, d\xi = \int_{-1}^{1} \frac{1+\xi}{2} \, d\xi = \frac{1}{2} \left[ \xi + \frac{\xi^2}{2} \right]_{-1}^{1} = \frac{1}{2} \left[ (1 + \frac{1}{2}) - (-1 + \frac{1}{2}) \right] = \frac{1}{2} \left[ \frac{3}{2} - (-\frac{1}{2}) \right] = \frac{1}{2} \left[ 2 \right] = 1$

So, $\mathbf{f}_b = \frac{b_x A L}{2} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \frac{\text{Total Body Force}}{2} \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.
This means the total body force is equally distributed to the two nodes.

**Textbook Reference:** Reddy (Chapter 3), Cook (Chapter 3), Bhavikatti (Chapter 3), Fish & Belytschko (Chapter 3).

---

#### 2.2. Surface Forces (e.g., Pressure)

Surface forces act on the boundary or surface of an element. Pressure is a common example.

**Description:** Let $\mathbf{t}$ be the traction vector (force per unit area) acting on a surface $S_e$ of the element.

**Derivation:**
Similar to body forces, the equivalent nodal force vector $\mathbf{f}_t$ is obtained by considering the work done by the surface forces.
$\delta W_t = \int_{S_e} \mathbf{t} \cdot \delta \mathbf{u}_e \, dS = \int_{S_e} \mathbf{t} \cdot \delta (\mathbf{N} \mathbf{d}_e) \, dS$
$\delta W_t = \left( \int_{S_e} \mathbf{N}^T \mathbf{t} \, dS \right)^T \delta \mathbf{d}_e$

Therefore, the consistent nodal force vector is:
$\mathbf{f}_t = \int_{S_e} \mathbf{N}^T \mathbf{t} \, dS$

**Example (1D Bar Element with Pressure):**
Consider a 1D bar element with cross-sectional area $A$ and length $L$. Let a pressure $p$ act perpendicular to the surface at the free end (say, at $x=L$). In a 1D context, this is usually treated as a force acting on the end face. If it's a distributed axial force $q(x)$ per unit length, we use the integral formula. If it's a force on the end face, it's a point force at the node. Let's consider distributed pressure load.

If a uniform pressure $p$ acts perpendicular to the cross-section of a 1D bar, this is usually an external load on the structure, not directly a consistent load applied *on the element surface* in the same way as a 2D or 3D element.

Let's consider a **2D plane element** with pressure $p$ acting on one of its edges.
Consider a **line element** (1D in its own coordinate system) of length $2$ in natural coordinates, with nodes at $\xi=-1$ and $\xi=1$. Let a distributed load $q$ (force per unit length) act along this line element.

Shape functions: $N_1(\xi) = \frac{1-\xi}{2}$, $N_2(\xi) = \frac{1+\xi}{2}$.
The relationship between the distributed load $q$ and the shape functions is:
$\mathbf{f}_q = \int_{-1}^{1} \mathbf{N}^T q \, d\xi$ (assuming unit width or area for integration)

If $q$ is a constant:
$\mathbf{f}_q = q \int_{-1}^{1} \begin{bmatrix} N_1 \\ N_2 \end{bmatrix} \, d\xi = q \begin{bmatrix} 1 \\ 1 \end{bmatrix}$
This means a uniformly distributed load is split equally between the two nodes.

If $q$ varies linearly, say $q(\xi) = q_1 \frac{1-\xi}{2} + q_2 \frac{1+\xi}{2}$, where $q_1$ and $q_2$ are loads at the respective ends.
$\mathbf{f}_q = \int_{-1}^{1} \begin{bmatrix} N_1 \\ N_2 \end{bmatrix} \left( q_1 N_1 + q_2 N_2 \right) \, d\xi$
$\mathbf{f}_q = \int_{-1}^{1} \begin{bmatrix} N_1^2 & N_1 N_2 \\ N_2 N_1 & N_2^2 \end{bmatrix} \begin{bmatrix} q_1 \\ q_2 \end{bmatrix} \, d\xi$
This integral leads to a more complex load vector and is related to the consistent load vector for distributed loads.

For a **beam element** with a distributed load $q(x)$, the nodal forces and moments are calculated.
For a beam element of length $L$, with shape functions $N_i(x)$ and distributed load $w(x)$ (force per unit length):
The equivalent nodal force at node $i$ is $F_i = \int_0^L w(x) N_i(x) dx$.
The equivalent nodal moment at node $i$ is $M_i = \int_0^L w(x) \theta_i(x) dx$, where $\theta_i(x)$ is the slope shape function.

**Example: Uniformly distributed load $w$ on a beam element.**
For beam elements, the displacement field and thus shape functions are different (e.g., Hermite polynomials).
Consider a beam element with nodes at 0 and L, and degrees of freedom $v_1, \theta_1, v_2, \theta_2$.
The shape functions for displacement $v(x)$ are:
$N_{v1}(x) = 1 - 3(\frac{x}{L})^2 + 2(\frac{x}{L})^3$
$N_{\theta1}(x) = x - 2\frac{x^2}{L} + \frac{x^3}{L^2}$
$N_{v2}(x) = 3(\frac{x}{L})^2 - 2(\frac{x}{L})^3$
$N_{\theta2}(x) = \frac{x^2}{L} - \frac{x^3}{L^2}$

For a uniformly distributed load $w$ (force per unit length):
Equivalent nodal force at node 1: $F_1 = \int_0^L w N_{v1}(x) dx = w \int_0^L (1 - 3(\frac{x}{L})^2 + 2(\frac{x}{L})^3) dx = w L \int_0^1 (1 - 3\xi^2 + 2\xi^3) d\xi = wL [ \xi - \xi^3 + \frac{1}{2}\xi^4 ]_0^1 = wL (1 - 1 + \frac{1}{2}) = \frac{wL}{2}$
Equivalent nodal force at node 2: $F_2 = \int_0^L w N_{v2}(x) dx = w L \int_0^1 (3\xi^2 - 2\xi^3) d\xi = wL [ \xi^3 - \frac{1}{2}\xi^4 ]_0^1 = wL (1 - \frac{1}{2}) = \frac{wL}{2}$
Equivalent nodal moment at node 1: $M_1 = \int_0^L w N_{\theta1}(x) dx = w \int_0^L (x - 2\frac{x^2}{L} + \frac{x^3}{L^2}) dx = wL^2 \int_0^1 (\xi - 2\xi^2 + \xi^3) d\xi = wL^2 [\frac{1}{2}\xi^2 - \frac{2}{3}\xi^3 + \frac{1}{4}\xi^4]_0^1 = wL^2 (\frac{1}{2} - \frac{2}{3} + \frac{1}{4}) = wL^2 (\frac{6-8+3}{12}) = \frac{wL^2}{12}$
Equivalent nodal moment at node 2: $M_2 = \int_0^L w N_{\theta2}(x) dx = w \int_0^L (\frac{x^2}{L} - \frac{x^3}{L^2}) dx = wL^2 \int_0^1 (\xi^2 - \xi^3) d\xi = wL^2 [\frac{1}{3}\xi^3 - \frac{1}{4}\xi^4]_0^1 = wL^2 (\frac{1}{3} - \frac{1}{4}) = \frac{wL^2}{12}$

So, for a uniform distributed load $w$ on a beam element of length $L$, the consistent loads are:
$\mathbf{f}_e = \begin{bmatrix} F_1 \\ M_1 \\ F_2 \\ M_2 \end{bmatrix} = \begin{bmatrix} wL/2 \\ wL^2/12 \\ wL/2 \\ -wL^2/12 \end{bmatrix}$
Note the negative sign for $M_2$, which depends on the convention of moment direction.

**Textbook Reference:** Reddy (Chapter 3), Cook (Chapter 3), Bhavikatti (Chapter 3), Fish & Belytschko (Chapter 3).

---

#### 2.3. Point Loads

Point loads applied at nodes are already considered nodal forces and do not require conversion. However, if a point load is applied *within* an element (not at a node), it should be ideally represented as a consistent load at the nearest node or distributed using shape functions. However, in practice, loads are usually applied at nodes.

**Description:** A concentrated force $\mathbf{P}$ applied at a specific point within an element.

**Derivation:**
If a point load $\mathbf{P}$ is applied at a point $x_0$ within the element, its contribution to the nodal force vector $\mathbf{f}_p$ can be represented using the shape functions. The load is considered as a Dirac delta function $\mathbf{P} \delta(x-x_0)$.

$\mathbf{f}_p = \int_{V_e} \mathbf{N}^T (\mathbf{P} \delta(x-x_0)) \, dV$

If the load is applied at a specific point where the shape functions are defined, the integral simplifies significantly. For example, if $\mathbf{P}$ is applied at node $j$ (where $N_j=1$ and $N_i=0$ for $i \neq j$), then $\mathbf{f}_p = \mathbf{P}$ at the $j$-th degree of freedom.

If the point load $\mathbf{P}$ is applied at a location $x_0$ within the element, the equivalent nodal forces are given by:
$f_{i} = P \cdot N_i(x_0)$ for each nodal degree of freedom $i$.

**Example (1D Bar Element):**
Consider a 1D bar element of length $L$ with a point load $P$ applied at its midpoint ($x=L/2$).
Shape functions: $N_1(x) = 1 - x/L$, $N_2(x) = x/L$.
At the midpoint $x_0 = L/2$:
$N_1(L/2) = 1 - (L/2)/L = 1/2$
$N_2(L/2) = (L/2)/L = 1/2$

The consistent nodal forces are:
$f_1 = P \cdot N_1(L/2) = P/2$
$f_2 = P \cdot N_2(L/2) = P/2$
The point load $P$ at the midpoint is split equally between the two nodes.

**Important Note:** If a load is applied directly at a node, it is already a nodal load and is directly added to the global nodal force vector. The concept of consistent loads is for loads applied *over a domain* or *on a surface*.

**Textbook Reference:** Reddy (Chapter 3), Cook (Chapter 3), Bhavikatti (Chapter 3), Fish & Belytschko (Chapter 3).

---

#### 2.4. Prescribed Displacements (Boundary Conditions)

Prescribed displacements at nodes represent boundary conditions. These are often handled separately in FEM by modifying the system of equations. However, the concept of consistent loads can be extended to represent the forces required to maintain these prescribed displacements.

**Description:** When displacements are fixed at certain nodes (e.g., clamped ends), these represent boundary conditions. The forces that develop at these nodes to maintain these displacements are implicitly determined by the stiffness matrix and the prescribed displacements.

**Derivation/Handling:**
The primary FEM equation is $[K]\{d\} = \{F\}$, where $[K]$ is the global stiffness matrix, $\{d\}$ is the global displacement vector, and $\{F\}$ is the global force vector.

If a displacement $d_i$ is prescribed at node $i$:
1.  **Direct Elimination/Modification:** One common method is to modify the global stiffness matrix and force vector.
    *   For a displacement constraint $d_i = \bar{d}_i$, row $i$ of the system of equations is modified. All terms $K_{ij}$ in row $i$ (except $K_{ii}$) are set to zero, and the force $F_i$ is replaced by $F_i' = F_i - \sum_{j \neq i} K_{ij} \bar{d}_j$. The diagonal term $K_{ii}$ is often set to a very large number or 1, and the corresponding $F_i'$ is adjusted accordingly to ensure $d_i = \bar{d}_i$.
    *   Alternatively, the $i$-th column (corresponding to $d_i$) is multiplied by a large number, and the $i$-th row is modified such that $d_i$ is forced to $\bar{d}_i$.

2.  **Penalty Method:** A large stiffness value (penalty) $P$ is added to the diagonal term $K_{ii}$ corresponding to the constrained degree of freedom. The force vector is adjusted accordingly.
    $K_{ii}' = K_{ii} + P$
    $F_i' = F_i + P \bar{d}_i$
    This effectively imposes the constraint by making it very costly (high force) to deviate from $\bar{d}_i$.

**Example:**
Consider a simple 1D bar element with fixed ends.
Element stiffness matrix: $[k] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
If node 1 is fixed ($d_1 = 0$) and node 2 is free.
The system for this element would be:
$\frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} d_1 \\ d_2 \end{bmatrix} = \begin{bmatrix} F_1 \\ F_2 \end{bmatrix}$

Applying $d_1 = 0$:
The first row becomes: $\frac{AE}{L} (1 \cdot d_1 - 1 \cdot d_2) = F_1$. With $d_1=0$, this is $-\frac{AE}{L} d_2 = F_1$.
The second row is: $\frac{AE}{L} (-1 \cdot d_1 + 1 \cdot d_2) = F_2$. With $d_1=0$, this is $\frac{AE}{L} d_2 = F_2$.

If we are calculating the nodal forces *due to* the prescribed displacement, we use the force vector computed from the modified stiffness matrix.
For instance, if we apply a displacement $d_2 = \delta$ at node 2 (with node 1 fixed), the forces at the nodes would be $F_1 = -\frac{AE}{L} \delta$ and $F_2 = \frac{AE}{L} \delta$. These are the "reaction forces" or consistent loads that maintain this displacement.

**Textbook Reference:** Reddy (Chapter 3), Cook (Chapter 3), Bhavikatti (Chapter 3), Fish & Belytschko (Chapter 3).

---

### 3. Consistent Load Vectors for Common Element Types

#### 3.1. 1D Bar Element

For a bar element of length $L$ with cross-sectional area $A$ and Young's modulus $E$.
-   **Body force per unit volume:** $\mathbf{b} = [b_x]$
    $\mathbf{f}_b = \int_{V_e} \mathbf{N}^T \mathbf{b} \, dV = \int_0^L \begin{bmatrix} N_1(x) \\ N_2(x) \end{bmatrix} b_x A \, dx$
    If $b_x$ is constant: $\mathbf{f}_b = \frac{b_x A L}{2} \begin{bmatrix} 1 \\ 1 \end{bmatrix}$
-   **Distributed axial force per unit length:** $p(x)$
    $\mathbf{f}_p = \int_0^L \mathbf{N}^T p(x) A \, dx$
    If $p(x)$ is constant $p$: $\mathbf{f}_p = \frac{p A L}{2} \begin{bmatrix} 1 \\ 1 \end{bmatrix}$
-   **Pressure on the cross-section (axial force):** If a pressure $p$ is applied to the free end of a bar. This is a point load at a node.

#### 3.2. 2D Plane Stress/Strain Elements (Triangular, Quadrilateral)

For 2D elements, loads can be body forces, surface tractions, or point loads.
-   **Body force per unit volume:** $\mathbf{b} = [b_x, b_y]^T$
    The displacement field is $\mathbf{u}_e(x,y) = [N_1, 0, N_2, 0, ..., N_n, 0] \mathbf{d}_e$, where $n$ is the number of nodes.
    $\mathbf{f}_b = \int_{A_e} \mathbf{N}^T \mathbf{b} \, dA$
    Here, $\mathbf{N}$ would be a matrix where each row is $\begin{bmatrix} N_i & 0 \end{bmatrix}$ or $\begin{bmatrix} 0 & N_i \end{bmatrix}$ depending on the degree of freedom.

-   **Surface traction (pressure) $\mathbf{t} = [t_x, t_y]^T$ on an edge of length $S_e$:**
    $\mathbf{f}_t = \int_{S_e} \mathbf{N}^T \mathbf{t} \, dS$
    For a triangular element with nodes 1, 2, 3, and pressure $\mathbf{t}$ acting on edge 1-2:
    $\mathbf{f}_t = \int_{S_{12}} \begin{bmatrix} N_1 & 0 & N_2 & 0 \\ 0 & N_1 & 0 & N_2 \end{bmatrix}^T \begin{bmatrix} t_x \\ t_y \end{bmatrix} \, dS$
    where $N_1$ and $N_2$ are the shape functions along the edge. For a linear edge, these are linear functions of the natural coordinate along the edge.

#### 3.3. 3D Solid Elements

-   **Body force per unit volume:** $\mathbf{b} = [b_x, b_y, b_z]^T$
    $\mathbf{f}_b = \int_{V_e} \mathbf{N}^T \mathbf{b} \, dV$
-   **Surface traction on a face:** $\mathbf{t} = [t_x, t_y, t_z]^T$ on a surface $S_e$.
    $\mathbf{f}_t = \int_{S_e} \mathbf{N}^T \mathbf{t} \, dS$

---

### 4. Examples and Practice Questions

**Question 1:**
A uniform distributed load $w$ (force per unit length) acts on a 2-node beam element of length $L$. Calculate the consistent nodal forces and moments.

**Answer:**
The consistent nodal forces and moments are:
$F_1 = \frac{wL}{2}$
$M_1 = \frac{wL^2}{12}$
$F_2 = \frac{wL}{2}$
$M_2 = -\frac{wL^2}{12}$

(Refer to section 2.2 for derivation details).

---

**Question 2:**
A 1D bar element of length $L$ is subjected to a triangularly distributed axial load $p(x) = p_0 (x/L)$, where $p_0$ is the maximum load per unit length at $x=L$. Calculate the consistent nodal forces. Assume cross-sectional area $A$ is constant.

**Answer:**
The shape functions for a 1D bar element are $N_1(x) = 1 - x/L$ and $N_2(x) = x/L$.
The consistent nodal forces are given by:
$\mathbf{f}_p = \int_0^L \begin{bmatrix} N_1(x) \\ N_2(x) \end{bmatrix} p(x) A \, dx = A \int_0^L \begin{bmatrix} (1 - x/L) \\ (x/L) \end{bmatrix} p_0 (x/L) \, dx$

$f_1 = A p_0 \int_0^L (1 - x/L)(x/L) \, dx = A p_0 \int_0^L (x/L - x^2/L^2) \, dx$
$f_1 = A p_0 L \int_0^1 (\xi - \xi^2) \, d\xi = A p_0 L \left[ \frac{\xi^2}{2} - \frac{\xi^3}{3} \right]_0^1 = A p_0 L (\frac{1}{2} - \frac{1}{3}) = \frac{A p_0 L}{6}$

$f_2 = A p_0 \int_0^L (x/L)(x/L) \, dx = A p_0 \int_0^L (x^2/L^2) \, dx$
$f_2 = A p_0 L \int_0^1 \xi^2 \, d\xi = A p_0 L \left[ \frac{\xi^3}{3} \right]_0^1 = \frac{A p_0 L}{3}$

So, the consistent nodal forces are $\mathbf{f}_p = \begin{bmatrix} A p_0 L / 6 \\ A p_0 L / 3 \end{bmatrix}$.

---

**Question 3:**
Consider a 2D triangular element with nodes 1, 2, and 3. A uniform pressure $p$ acts perpendicular to the edge connecting nodes 1 and 2. The edge has length $S$. The shape functions for a linear triangular element are $N_i = \frac{1}{2A_e}(a_i + b_i x + c_i y)$, where $A_e$ is the area of the element. For an edge, the shape functions are linear. Let the edge 1-2 lie on the x-axis from $x=0$ to $x=S$.
The shape functions along the edge 1-2 can be approximated as $N_1 = 1 - s/S$ and $N_2 = s/S$, where $s$ is the coordinate along the edge ($0 \le s \le S$).
The traction vector is $\mathbf{t} = [0, p]^T$ acting on this edge (e.g., pressure in the y-direction).
Calculate the consistent nodal force vector for nodes 1 and 2.

**Answer:**
The force is applied as traction $\mathbf{t}$ on the edge $S_{12}$. The nodal force is given by $\mathbf{f}_t = \int_{S_{12}} \mathbf{N}^T \mathbf{t} \, dS$.
The displacement field along the edge is $u(s) = N_1(s) u_1 + N_2(s) u_2$.
The force is $\mathbf{t} = [0, p]$. For a 2D element, the degrees of freedom are $u_x, u_y$. So, for nodes 1 and 2, the relevant shape function matrix for the edge is:
$\mathbf{N}^T = \begin{bmatrix} N_1 & 0 & N_2 & 0 \\ 0 & N_1 & 0 & N_2 \end{bmatrix}$ (if considering nodes 1 and 2, and their x and y displacements).
If the load is acting on the edge, we integrate over the edge.
Let's assume the edge is parameterized by $s$.
$\mathbf{f}_t = \int_0^S \begin{bmatrix} N_1 & 0 & N_2 & 0 \\ 0 & N_1 & 0 & N_2 \end{bmatrix}^T \begin{bmatrix} 0 \\ p \\ 0 \\ 0 \end{bmatrix} \, ds$
This assumes the traction is $\mathbf{t} = [0, p]$ along the edge in the direction of the y-axis.

$f_{1x} = \int_0^S (N_1 \cdot 0 + N_2 \cdot 0) \, ds = 0$ (x-force at node 1)
$f_{1y} = \int_0^S (N_1 \cdot p) \, ds = p \int_0^S (1 - s/S) \, ds = p \left[ s - \frac{s^2}{2S} \right]_0^S = p (S - \frac{S^2}{2S}) = \frac{pS}{2}$ (y-force at node 1)
$f_{2x} = \int_0^S (N_1 \cdot 0 + N_2 \cdot 0) \, ds = 0$ (x-force at node 2)
$f_{2y} = \int_0^S (N_1 \cdot 0 + N_2 \cdot p) \, ds = p \int_0^S (s/S) \, ds = p \left[ \frac{s^2}{2S} \right]_0^S = p \frac{S^2}{2S} = \frac{pS}{2}$ (y-force at node 2)

So, the consistent nodal force vector is $\mathbf{f}_t = \begin{bmatrix} 0 \\ pS/2 \\ 0 \\ pS/2 \end{bmatrix}$ (for nodes 1 and 2, considering their y-displacements).

---

### 5. Important Points to Remember

*   **Consistency:** The key principle is to represent distributed or surface loads as equivalent nodal forces in a manner consistent with the assumed displacement field within the element (i.e., using shape functions).
*   **Work Principle:** The derivation of consistent loads is based on the principle of virtual work or the principle of equivalent nodal forces for assumed displacement fields.
*   **Integration:** Consistent loads are calculated by integrating the product of shape functions and the applied load over the element's domain (volume, area, or edge length).
*   **Shape Functions:** The same shape functions used to interpolate displacements within an element are used to distribute the applied loads to the nodes.
*   **Types of Loads:** Body forces, surface tractions (pressure), and concentrated forces applied within an element are the main types of loads that need conversion to consistent nodal forces.
*   **Beam Elements:** Beam elements have more complex shape functions (Hermite polynomials) and thus more complex consistent load calculations involving both forces and moments.
*   **Boundary Conditions:** Prescribed displacements are handled by modifying the global system of equations, not by creating a load vector in the same way as external forces.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 6. Textbooks and Reference Books Consultation

For deeper understanding and more examples, refer to:

*   **Reddy, J. N. (2009).** *An Introduction to the Finite Element Method*. McGraw-Hill Education. (Chapter 3 covers loads and boundary conditions).
*   **Cook, R. D. (2008).** *Concepts and Applications of Finite Element Analysis*. Wiley. (Chapter 3 discusses loads and boundary conditions).
*   **Bhavikatti, S. S. (2008).** *Finite Element Analysis*. New Age Publishers. (Look for chapters on load vectors and boundary conditions).
*   **Fish, J., & Belytschko, T. (2007).** *A First Course in Finite Elements*. John Wiley & Sons. (Chapters on weak form and loads will be relevant).
*   **Segerlind, L. J. (2010).** *Applied Finite Element Analysis*. John Wiley & Sons.
*   **Ramamurthi, G. (2010).** *Applied Finite Element Analysis*. I K International Publishing House Pvt. Ltd.
*   **Hutton, D. V. (2009).** *Fundamentals of Finite Element Methods*. McGraw-Hill Education.

These books provide detailed derivations and examples for various element types and loading conditions, crucial for mastering this topic.