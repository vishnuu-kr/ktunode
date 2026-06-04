---
title: "stiffness matrices"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446385d"
status: "completed"
scrapedAt: "2026-05-20T18:04:11.779Z"
---
# Finite Element Methods: Module 4 - Strong and Weak Form

## Topic: Stiffness Matrices

### 1. Introduction to Stiffness Matrices (CO1, K2)

The stiffness matrix is a fundamental component of the Finite Element Method (FEM). It mathematically represents the relationship between the forces and displacements within an element. In essence, it describes how "stiff" an element is and how it resists deformation under applied loads.

**Key Concepts:**

*   **Element Stiffness Matrix ($[k]^e$):** For a single finite element, this matrix relates the nodal force vector $\{\text{f}\}^e$ to the nodal displacement vector $\{\text{d}\}^e$ through the equation:
    $$\{\text{f}\}^e = [k]^e \{\text{d}\}^e$$
*   **Global Stiffness Matrix ($[K]$):** Assembled from the individual element stiffness matrices, this matrix represents the stiffness of the entire discretized domain. It relates the global nodal force vector $\{\text{F}\}$ to the global nodal displacement vector $\{\text{D}\}$:
    $$\{\text{F}\} = [K] \{\text{D}\}$$

**Importance:**

*   The stiffness matrix is crucial for solving structural mechanics problems, heat transfer, fluid dynamics, and many other physical phenomena that can be formulated using FEM.
*   It forms the basis of the system of linear equations that are solved to determine the nodal displacements, which in turn allow for the calculation of strains and stresses.

**Referenced Textbooks:**

*   **Reddy, J. N. (2009).** Discusses the derivation of stiffness matrices from the governing differential equations (strong form) and variational principles (weak form) in chapters related to structural mechanics.
*   **Cook, R. D. (2008).** Provides a clear explanation of element stiffness matrices and their assembly into the global stiffness matrix, often with detailed examples of truss and beam elements.
*   **Bhavikatti, S. S. (2008).** Introduces the concept of stiffness matrices in the context of bar, beam, and other structural elements, emphasizing their role in the equilibrium equations.
*   **Fish, J., & Belytschko, T. (2007).** Explores the mathematical underpinnings of stiffness matrices, particularly in relation to variational formulations and continuum mechanics.

### 2. Derivation of Stiffness Matrices from Strong Form (CO1, K2; CO4, K5)

The strong form of a differential equation represents the governing physics without any integration or differentiation of the solution itself. For stiffness matrices, this typically involves directly applying equilibrium conditions and constitutive relations.

**General Procedure (Structural Mechanics Example):**

1.  **Governing Differential Equation:** For a 1D bar element under axial load, the governing equation is:
    $$\frac{d}{dx}\left(A E \frac{du}{dx}\right) + b(x) = 0$$
    where $A$ is the cross-sectional area, $E$ is the Young's modulus, $u(x)$ is the axial displacement, and $b(x)$ is the distributed load.

2.  **Element Discretization:** Divide the element into nodes (e.g., two nodes for a 1D bar).

3.  **Kinematic Relations (Strain-Displacement):** Relate the strain ($\epsilon$) to the displacement gradient. For a 1D bar:
    $$\epsilon = \frac{du}{dx}$$

4.  **Constitutive Relations (Stress-Strain):** Relate stress ($\sigma$) to strain using material properties. For linear elasticity:
    $$\sigma = E \epsilon$$

5.  **Force-Displacement Relation:** Combine the above to get a force-displacement relationship. For a 1D bar, the force $f$ at a point is related to the stress at that point:
    $$f = A \sigma$$

6.  **Shape Functions:** Approximate the displacement field within the element using shape functions:
    $$u(x) = \sum_{i=1}^n N_i(x) d_i$$
    where $N_i(x)$ are the shape functions and $d_i$ are the nodal displacements.

7.  **Element Stiffness Matrix Derivation:** Substitute the shape functions into the constitutive and kinematic relations to derive the stiffness matrix. For a 1D bar element with nodes at $x_1$ and $x_2$:
    *   Displacement: $u(x) = N_1(x) d_1 + N_2(x) d_2 = [\text{N}] \{\text{d}\}^e$
    *   Strain: $\epsilon(x) = \frac{du}{dx} = \frac{d[\text{N}]}{dx} \{\text{d}\}^e = [B] \{\text{d}\}^e$, where $[B] = \frac{d[\text{N}]}{dx}$ is the strain-displacement matrix.
    *   Stress: $\sigma(x) = E \epsilon(x) = E [B] \{\text{d}\}^e$
    *   Force: $\{f\}^e = \int_{V} [B]^T \{\sigma\} dV$. For a 1D bar, this simplifies to $f(x) = A \sigma(x)$.
    *   Substituting stress: $\{f\}^e = \int_{V} [B]^T E [B] \{\text{d}\}^e dV$
    *   The element stiffness matrix is then:
        $$[k]^e = \int_{V} [B]^T E [B] dV$$
        For a uniform 1D bar of length $L$, cross-sectional area $A$, and modulus $E$:
        $$[k]^e = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$$

**Referenced Textbooks:**

*   **Bhavikatti, S. S. (2008).** Chapters on bar elements and beam elements will detail this direct derivation process.
*   **Segerlind, L. J. (2010).** Provides a systematic approach to deriving element stiffness matrices from the strong form, often focusing on elasticity problems.

### 3. Derivation of Stiffness Matrices from Weak Form (CO1, K2; CO4, K5)

The weak form of a differential equation is obtained by applying a weighted residual method, most commonly the Galerkin method. This involves multiplying the differential equation by a weight function and integrating over the domain. This process relaxes the strict differentiability requirements of the strong form.

**Galerkin Method for Stiffness Matrices:**

1.  **Governing Equation (Strong Form):** Consider the 1D bar equation again:
    $$\frac{d}{dx}\left(A E \frac{du}{dx}\right) + b(x) = 0$$

2.  **Weighted Residual Statement:** Multiply by a weight function $w(x)$ and integrate over the element domain $V^e$:
    $$\int_{V^e} w(x) \left(\frac{d}{dx}\left(A E \frac{du}{dx}\right) + b(x)\right) dV = 0$$

3.  **Integration by Parts:** Apply integration by parts to the term with the second derivative. This moves the differentiation from the solution ($u$) to the weight function ($w$), thus creating the weak form.
    $$\int_{V^e} \frac{d w}{dx} \left(A E \frac{du}{dx}\right) dV - \left[w \left(A E \frac{du}{dx}\right)\right]_{\partial V^e} + \int_{V^e} w(x) b(x) dV = 0$$
    The term in the square brackets represents the boundary terms, which often relate to applied forces or fluxes at the element boundaries.

4.  **Galerkin Approximation:** For the Galerkin method, the weight functions $w(x)$ are chosen to be the same as the shape functions $N_i(x)$.
    $$\int_{V^e} \frac{d N_j}{dx} \left(A E \frac{du}{dx}\right) dV - \left[N_j \left(A E \frac{du}{dx}\right)\right]_{\partial V^e} + \int_{V^e} N_j(x) b(x) dV = 0$$
    where $j$ is the node number.

5.  **Substitute Displacement Approximation:** Substitute $u(x) = \sum_{i=1}^n N_i(x) d_i = [N] \{\text{d}\}^e$ and $\frac{du}{dx} = [B] \{\text{d}\}^e$:
    $$\int_{V^e} \frac{d N_j}{dx} \left(A E \frac{d N_i}{dx} d_i\right) dV - \left[N_j \left(A E \frac{d N_i}{dx} d_i\right)\right]_{\partial V^e} + \int_{V^e} N_j(x) b(x) dV = 0$$

6.  **Matrix Form:** Rearrange the equation into matrix form:
    $$\sum_{i=1}^n \left(\int_{V^e} \frac{d N_j}{dx} A E \frac{d N_i}{dx} dV\right) d_i = \left[N_j \left(A E \frac{du}{dx}\right)\right]_{\partial V^e} - \int_{V^e} N_j(x) b(x) dV$$
    The term in the parenthesis is the element stiffness matrix component:
    $$k_{ji}^e = \int_{V^e} \frac{d N_j}{dx} A E \frac{d N_i}{dx} dV = \int_{V^e} [B_j]^T E [B_i] dV$$
    where $[B_j]$ is the $j$-th column of the $[B]$ matrix. This is the same form as derived from the strong form:
    $$[k]^e = \int_{V^e} [B]^T E [B] dV$$
    The right-hand side of the equation becomes the element force vector $\{\text{f}\}^e$.

**Referenced Textbooks:**

*   **Reddy, J. N. (2009).** Dedicates significant portions to variational methods and weighted residual techniques, showing how they lead to the same stiffness matrices.
*   **Fish, J., & Belytschko, T. (2007).** Explores the mathematical foundations of weak forms and their advantages in deriving FEM formulations, particularly for complex geometries and boundary conditions.
*   **Hutton, D. V. (2009).** Provides a solid introduction to weighted residual methods, including Galerkin, and their application to deriving element matrices.

### 4. Formulation of Shape Functions and Strain-Displacement Matrix (CO2, K3; CO3, K4)

The stiffness matrix is directly dependent on the choice of shape functions and the resulting strain-displacement matrix.

#### 4.1 Shape Functions

**Definition:** Shape functions, denoted by $N_i(x)$, approximate the displacement or field variable within an element based on the nodal values. They have the property that $N_i(x_j) = \delta_{ij}$, where $\delta_{ij}$ is the Kronecker delta (1 if $i=j$, 0 if $i \neq j$).

**Types of Shape Functions:**

*   **Linear (1D Bar Element):** For a 2-node element with nodes at $x_1$ and $x_2$:
    *   $N_1(x) = \frac{x_2 - x}{L}$
    *   $N_2(x) = \frac{x - x_1}{L}$
    where $L = x_2 - x_1$.
    In matrix form: $[N] = \left[\frac{x_2 - x}{L} \quad \frac{x - x_1}{L}\right]$

*   **Quadratic (1D Bar Element):** For a 3-node element with nodes at $x_1, x_2, x_3$ (where $x_2$ is at the midpoint):
    *   $N_1(\xi) = \frac{1}{2}\xi(\xi-1)$
    *   $N_2(\xi) = (1-\xi)(1+\xi)$
    *   $N_3(\xi) = \frac{1}{2}\xi(\xi+1)$
    where $\xi = \frac{2x - (x_1+x_3)}{x_3-x_1}$ is the natural coordinate, ranging from -1 to 1.

*   **Higher-Order Polynomials:** For more complex problems or improved accuracy, higher-order polynomials (cubic, etc.) can be used.

*   **2D Elements (e.g., Triangular, Quadrilateral):** Shape functions are formulated in terms of natural coordinates (e.g., $\xi, \eta$).
    *   **Linear Triangular Element (3 nodes):** Area coordinates or barycentric coordinates are often used.
        *   $N_1 = \frac{1}{2A}(x_2y_3 - x_3y_2 + (y_2-y_3)x + (x_3-x_2)y)$
        *   $N_2 = \frac{1}{2A}(x_3y_1 - x_1y_3 + (y_3-y_1)x + (x_1-x_3)y)$
        *   $N_3 = \frac{1}{2A}(x_1y_2 - x_2y_1 + (y_1-y_2)x + (x_2-x_1)y)$
        where $A$ is the area of the triangle.

**Referenced Textbooks:**

*   **Cook, R. D. (2008).** Provides detailed derivations of shape functions for various 1D and 2D elements.
*   **Fish, J., & Belytschko, T. (2007).** Discusses the theory behind interpolation using shape functions and their properties.
*   **Bhavikatti, S. S. (2008).** Offers numerous examples of shape function formulations for different element types.

#### 4.2 Strain-Displacement Matrix ([B])

**Definition:** The strain-displacement matrix relates the nodal displacements of an element to the strains within the element.

**Derivation:**
For a 1D bar element, assuming linear displacement:
$u(x) = N_1(x) d_1 + N_2(x) d_2 = [N] \{\text{d}\}^e$
Strain: $\epsilon(x) = \frac{du}{dx} = \frac{d}{dx} ([N] \{\text{d}\}^e) = \left[\frac{dN_1}{dx} \quad \frac{dN_2}{dx}\right] \{\text{d}\}^e$
So, the strain-displacement matrix $[B]$ is:
$$[B] = \left[\frac{dN_1}{dx} \quad \frac{dN_2}{dx}\right]$$

**Example: 1D Bar Element (Linear)**
*   $N_1(x) = \frac{x_2 - x}{L}$
*   $N_2(x) = \frac{x - x_1}{L}$
*   $\frac{dN_1}{dx} = -\frac{1}{L}$
*   $\frac{dN_2}{dx} = \frac{1}{L}$
*   $$[B] = \left[-\frac{1}{L} \quad \frac{1}{L}\right]$$

**Example: 2D Plane Stress/Strain Element (Linear Triangular)**
For a 2D element, strain components are $\epsilon_x = \frac{\partial u}{\partial x}$, $\epsilon_y = \frac{\partial v}{\partial y}$, and $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$.
Assuming $u(x,y) = \sum N_i u_i$ and $v(x,y) = \sum N_i v_i$, where $(u_i, v_i)$ are nodal displacements.
The nodal displacement vector is $\{\text{d}\}^e = [u_1, v_1, u_2, v_2, u_3, v_3]^T$.
The strain vector is $\{\epsilon\}^e = [\epsilon_x, \epsilon_y, \gamma_{xy}]^T$.
The relation is $\{\epsilon\}^e = [B] \{\text{d}\}^e$.
The $[B]$ matrix for a linear triangular element is:
$$[B] = \frac{1}{2A} \begin{bmatrix} (y_2-y_3) & 0 & (y_3-y_1) & 0 & (y_1-y_2) & 0 \\ 0 & (x_3-x_2) & 0 & (x_1-x_3) & 0 & (x_2-x_1) \\ (x_3-x_2) & (y_2-y_3) & (x_1-x_3) & (y_3-y_1) & (x_2-x_1) & (y_1-y_2) \end{bmatrix}$$

**Referenced Textbooks:**

*   **Bhavikatti, S. S. (2008).** Provides thorough derivations of the $[B]$ matrix for various 2D and 3D elements.
*   **Cook, R. D. (2008).** Offers practical examples and explanations of the physical meaning of the $[B]$ matrix.
*   **Segerlind, L. J. (2010).** Covers the formulation of the strain-displacement matrix for elasticity problems.

### 5. Evaluation of Element Stiffness Matrix for Specific Elements (CO3, K4; CO4, K5)

The general formula for the element stiffness matrix is $[k]^e = \int_{V^e} [B]^T E [B] dV$. The specific form depends on the element type, material properties, and integration domain.

#### 5.1 1D Bar Element (Axial Load)

*   **Shape Functions:** Linear, $N_1(x) = \frac{x_2 - x}{L}, N_2(x) = \frac{x - x_1}{L}$.
*   **[B] Matrix:** $[B] = [-\frac{1}{L} \quad \frac{1}{L}]$.
*   **Material Property Matrix [E]:** For 1D axial deformation, $E$ is a scalar (Young's Modulus).
*   **Stiffness Matrix Calculation:**
    $$[k]^e = \int_0^L \begin{bmatrix} -1/L \\ 1/L \end{bmatrix} E \begin{bmatrix} -1/L & 1/L \end{bmatrix} dx$$
    $$[k]^e = \frac{E}{L^2} \int_0^L \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} dx$$
    $$[k]^e = \frac{E}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} [x]_0^L$$
    $$[k]^e = \frac{E}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} L$$
    $$[k]^e = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \quad \text{(assuming uniform A and E)}$$
    This is the stiffness matrix for a single 1D bar element.

#### 5.2 2D CST (Constant Strain Triangle) Element

*   **Shape Functions:** Linear in $x$ and $y$.
*   **[B] Matrix:** As derived in Section 4.2.
*   **Material Property Matrix [E]:** For plane stress/strain, $[E]$ is a $3 \times 3$ matrix containing material properties like $E$ and $\nu$.
    *   **Plane Stress:**
        $$[E] = \frac{E}{1-\nu^2} \begin{bmatrix} 1 & \nu & 0 \\ \nu & 1 & 0 \\ 0 & 0 & \frac{1-\nu}{2} \end{bmatrix}$$
    *   **Plane Strain:**
        $$[E] = \frac{E}{(1+\nu)(1-2\nu)} \begin{bmatrix} 1-\nu & \nu & 0 \\ \nu & 1-\nu & 0 \\ 0 & 0 & \frac{1-2\nu}{2} \end{bmatrix}$$
*   **Stiffness Matrix Calculation:**
    $$[k]^e = \int_{V^e} [B]^T [E] [B] dV$$
    For a CST, the $[B]$ matrix is constant within the element. Therefore, the integration simplifies.
    $$[k]^e = [B]^T [E] [B] \int_{V^e} dV = [B]^T [E] [B] A$$
    where $A$ is the area of the triangle.

**Referenced Textbooks:**

*   **Cook, R. D. (2008).** Presents detailed derivations for CST and other common elements, including their $[k]^e$.
*   **Bhavikatti, S. S. (2008).** Offers step-by-step calculations for element stiffness matrices.
*   **Segerlind, L. J. (2010).** Provides theoretical background and examples for elasticity elements.

### 6. Assembly of Global Stiffness Matrix (CO1, K2)

Once individual element stiffness matrices $[k]^e$ are computed, they are assembled into a global stiffness matrix $[K]$ for the entire structure.

**Procedure:**

1.  **Global Node Numbering:** Assign unique global numbers to all nodes in the discretized domain.
2.  **Element Connectivity:** Determine how elements are connected to nodes.
3.  **Global Degree of Freedom (DOF) Vector:** The global displacement vector $\{\text{D}\}$ contains all nodal displacements for the entire structure.
4.  **Assembly Process:** The element stiffness matrix $[k]^e$ contributes to specific locations in the global stiffness matrix $[K]$. For an element connecting nodes $i$ and $j$, the $k_{pq}^e$ component of the element stiffness matrix contributes to the $K_{IJ}$ component of the global stiffness matrix, where $I$ and $J$ correspond to the global degrees of freedom of the nodes $p$ and $q$ within that element.

**Example: Two 1D Bar Elements**

*   **Element 1:** Nodes 1 and 2. $[k]^e_1 = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
*   **Element 2:** Nodes 2 and 3. $[k]^e_2 = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$

Assume $AE/L = c$.
*   Global DOF: $\{\text{D}\} = [d_1, d_2, d_3]^T$
*   Global Force: $\{\text{F}\} = [F_1, F_2, F_3]^T$

Assembly:
*   Element 1 contributes to the top-left $2 \times 2$ submatrix of $[K]$ corresponding to nodes 1 and 2.
*   Element 2 contributes to the bottom-right $2 \times 2$ submatrix of $[K]$ corresponding to nodes 2 and 3.

$$[K] = \begin{bmatrix} k_{11}^1 & k_{12}^1 & 0 \\ k_{21}^1 & k_{22}^1 + k_{11}^2 & k_{12}^2 \\ 0 & k_{21}^2 & k_{22}^2 \end{bmatrix}$$
Substituting values:
$$[K] = \begin{bmatrix} c & -c & 0 \\ -c & c+c & -c \\ 0 & -c & c \end{bmatrix} = \begin{bmatrix} c & -c & 0 \\ -c & 2c & -c \\ 0 & -c & c \end{bmatrix}$$

**Referenced Textbooks:**

*   **Cook, R. D. (2008).** Dedicates a chapter to the assembly process with clear examples.
*   **Bhavikatti, S. S. (2008).** Explains the concept of direct stiffness method for assembly.
*   **Hutton, D. V. (2009).** Illustrates the mapping between element and global matrices during assembly.

### 7. Practice Questions and Exercises

**Question 1:**
For a 1D bar element with nodes at $x_1$ and $x_2$ and length $L$, with linear shape functions, derive the strain-displacement matrix $[B]$.

**Answer 1:**
The displacement is $u(x) = N_1(x)d_1 + N_2(x)d_2$.
$N_1(x) = \frac{x_2 - x}{L}$ and $N_2(x) = \frac{x - x_1}{L}$.
Strain is $\epsilon = \frac{du}{dx}$.
$\frac{dN_1}{dx} = -\frac{1}{L}$ and $\frac{dN_2}{dx} = \frac{1}{L}$.
So, $[B] = \left[-\frac{1}{L} \quad \frac{1}{L}\right]$.

**Question 2:**
Derive the element stiffness matrix $[k]^e$ for a 1D bar element with uniform cross-sectional area $A$ and Young's modulus $E$ and length $L$, using the formula $[k]^e = \int_0^L [B]^T E [B] dx$.

**Answer 2:**
Using $[B] = [-\frac{1}{L} \quad \frac{1}{L}]$:
$[k]^e = \int_0^L \begin{bmatrix} -1/L \\ 1/L \end{bmatrix} E \begin{bmatrix} -1/L & 1/L \end{bmatrix} dx$
$[k]^e = \frac{E}{L^2} \int_0^L \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} dx = \frac{E}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} [x]_0^L = \frac{E}{L^2} L \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ (assuming E and A are uniform).

**Question 3:**
Consider two 1D bar elements connected in series, each with stiffness $c = AE/L$. Assemble the global stiffness matrix $[K]$ for the system.

**Answer 3:**
Element 1 (nodes 1, 2): $[k]^e_1 = \begin{bmatrix} c & -c \\ -c & c \end{bmatrix}$
Element 2 (nodes 2, 3): $[k]^e_2 = \begin{bmatrix} c & -c \\ -c & c \end{bmatrix}$
Global DOF: $d_1, d_2, d_3$.
$[K] = \begin{bmatrix} k_{11}^1 & k_{12}^1 & 0 \\ k_{21}^1 & k_{22}^1 + k_{11}^2 & k_{12}^2 \\ 0 & k_{21}^2 & k_{22}^2 \end{bmatrix} = \begin{bmatrix} c & -c & 0 \\ -c & c+c & -c \\ 0 & -c & c \end{bmatrix} = \begin{bmatrix} c & -c & 0 \\ -c & 2c & -c \\ 0 & -c & c \end{bmatrix}$.

**Question 4:**
For a 2D CST element, what is the relationship between the element stiffness matrix $[k]^e$, the strain-displacement matrix $[B]$, the material property matrix $[E]$, and the element area $A$?

**Answer 4:**
For a CST element, the $[B]$ matrix is constant within the element. Therefore, the element stiffness matrix is given by:
$[k]^e = [B]^T [E] [B] A$.

### 8. Important Points to Remember

*   **Stiffness Matrix ($[k]^e$):** Relates nodal forces to nodal displacements for a single element.
*   **Global Stiffness Matrix ($[K]$):** Relates global nodal forces to global nodal displacements for the entire structure.
*   **Derivation Methods:** Stiffness matrices can be derived from both the strong form (direct application of equilibrium) and the weak form (weighted residuals, e.g., Galerkin). Both methods yield the same result for consistent formulations.
*   **Key Formula:** $[k]^e = \int_{V^e} [B]^T [E] [B] dV$ is the fundamental equation for deriving stiffness matrices.
*   **Shape Functions ($[N]$):** Approximate the field variable within an element and are crucial for defining the $[B]$ matrix.
*   **Strain-Displacement Matrix ($[B]$):** Relates nodal displacements to strains within the element.
*   **Material Property Matrix ($[E]$):** Encapsulates the material's elastic behavior.
*   **Assembly:** The process of combining element stiffness matrices into a global stiffness matrix is done based on element connectivity and nodal numbering.
*   **Isoparametric Elements (Introduction):** While not the focus of this section, it's worth noting that for complex geometries, isoparametric elements (where shape functions used for geometry are the same as those used for field variables) are essential, and their stiffness matrix derivation involves Jacobians and transformations. (Related to CO5).

### 9. Alignment with Course Outcomes

*   **CO1 (Understand governing equations and basic procedure of FEM):** This topic directly addresses the foundational elements of FEM (stiffness matrices) which are derived from governing equations and are central to the overall procedure.
*   **CO2 (Apply coordinate transformation and formulation of shape functions):** Understanding shape functions is a prerequisite for forming the stiffness matrix. While explicit coordinate transformations for isoparametric elements are not detailed here, the principle of shape function formulation is covered.
*   **CO3 (Formulate shape functions and element strain displacement matrix):** The derivation of the $[B]$ matrix is a core part of this topic, directly dependent on shape function formulation.
*   **CO4 (Evaluate element stress using energy method and study Galekin weight residual formulations):** The derivation of stiffness matrices from both strong and weak (Galerkin) forms is covered. While the "energy method" (principle of minimum potential energy) is another route to stiffness matrices, it leads to the same formulation as the weak form for linear elastic problems and is implicitly linked.
*   **CO5 (Study the concept of iso parametric elements and analyze iso parametric formulations):** While this topic focuses on the core stiffness matrix derivation, it lays the groundwork for understanding isoparametric elements. The general formula for $[k]^e$ can be extended to isoparametric elements where integration is performed in a natural coordinate system using a Jacobian.

This comprehensive set of notes provides a detailed understanding of stiffness matrices within the context of Finite Element Methods, covering their derivation, formulation, and assembly, as required by the learning outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
