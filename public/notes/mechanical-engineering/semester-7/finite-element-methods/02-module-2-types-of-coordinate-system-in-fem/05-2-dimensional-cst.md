---
title: "2-Dimensional CST"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464296"
status: "completed"
scrapedAt: "2026-05-20T18:12:57.254Z"
---
# Module 2: Types of Coordinate Systems in FEM

## Topic 2: 2-Dimensional Constant Strain Triangle (CST) Element

### 1. Introduction to 2-D Elements and Coordinate Systems

**1.1 Why 2-D Elements?**

*   Many engineering problems involve structures and components that can be reasonably represented in two dimensions.
*   Examples include:
    *   Thin plates under in-plane loading (e.g., pressure vessels, aircraft wings).
    *   Thin shells.
    *   Stress analysis in plane stress or plane strain conditions.
    *   Heat transfer in 2D domains.
*   Using 2D elements simplifies the analysis compared to full 3D analysis, reducing computational cost while maintaining reasonable accuracy.

**1.2 Types of Coordinate Systems in FEM**

*   **Global (Cartesian) Coordinate System ($\mathbf{x}, \mathbf{y}$):**
    *   A fixed, universal coordinate system for the entire problem domain.
    *   All nodal coordinates and displacements are defined with respect to this system.
    *   Provides a common reference for assembly of element equations.
*   **Local (Element) Coordinate System ($\mathbf{\xi}, \mathbf{\eta}$ or $\mathbf{x}', \mathbf{y}'$):**
    *   A coordinate system defined *specifically* for an individual element.
    *   Often normalized (e.g., ranging from -1 to +1) or based on the element's geometry.
    *   Simplifies the derivation of shape functions and element stiffness matrices, especially for complex element geometries or transformations.
    *   **Key Benefit:** The formulation for a single element is independent of its position and orientation in the global system. This allows for a general element formulation that can be applied to any element in the mesh.

**1.3 Need for Coordinate Transformation:**

*   Element stiffness matrices and load vectors are typically derived in the local coordinate system for simplicity.
*   These element quantities must then be transformed into the global coordinate system for assembly into the global stiffness matrix and load vector.
*   This transformation is crucial for relating local element behavior to the overall system behavior.

### 2. The 2-Dimensional Constant Strain Triangle (CST) Element

**2.1 Definition and Characteristics:**

*   The CST element is a fundamental building block in 2D FEM analysis.
*   It is a **three-node triangular element**.
*   Each node has **two degrees of freedom (DOFs)**: displacement in the global x-direction ($u$) and displacement in the global y-direction ($v$).
*   The element is characterized by its ability to represent **linear variations** in displacement within the element.
*   Crucially, the **strains within a CST element are constant**. This is where the "Constant Strain" name originates.

**2.2 Node and DOF Definition:**

*   Consider a CST element with nodes labeled 1, 2, and 3.
*   At each node $i$, there are two DOFs:
    *   $u_i$: displacement in the x-direction.
    *   $v_i$: displacement in the y-direction.
*   The nodal displacement vector for the CST element is:
    $$ \mathbf{d}_e = \begin{Bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{Bmatrix} $$
    *   The element has $3 \text{ nodes} \times 2 \text{ DOFs/node} = 6$ DOFs.

**2.3 Displacement Interpolation (Shape Functions):**

*   The displacement field within the CST element is interpolated using shape functions (also called interpolation functions or basis functions).
*   The displacement components $u(x, y)$ and $v(x, y)$ at any point $(x, y)$ within the element are given by:
    $$ u(x, y) = \sum_{i=1}^{3} N_i(x, y) u_i $$
    $$ v(x, y) = \sum_{i=1}^{3} N_i(x, y) v_i $$
    where $N_i(x, y)$ are the shape functions for node $i$.
*   **Linear Shape Functions:** For a CST element, these shape functions are linear functions of $x$ and $y$.
*   **Properties of Shape Functions:**
    1.  $\sum_{i=1}^{3} N_i(x, y) = 1$ (completeness property).
    2.  $N_i(x_j, y_j) = \delta_{ij}$ (Kronecker delta), meaning $N_i$ is 1 at node $i$ and 0 at other nodes.
*   **Derivation of Shape Functions for CST:**
    *   The shape functions can be defined using **area coordinates (or barycentric coordinates)**. Let $(x, y)$ be a point within the triangle. The area coordinates $\lambda_1, \lambda_2, \lambda_3$ are defined as the ratios of subtriangle areas to the total triangle area:
        $$ \lambda_1 = \frac{\text{Area of triangle (2,3,P)}}{\text{Area of triangle (1,2,3)}} $$
        $$ \lambda_2 = \frac{\text{Area of triangle (3,1,P)}}{\text{Area of triangle (1,2,3)}} $$
        $$ \lambda_3 = \frac{\text{Area of triangle (1,2,P)}}{\text{Area of triangle (1,2,3)}} $$
        where P is the point $(x, y)$.
    *   The sum of area coordinates is always 1: $\lambda_1 + \lambda_2 + \lambda_3 = 1$.
    *   The shape functions are simply the area coordinates: $N_1 = \lambda_1$, $N_2 = \lambda_2$, $N_3 = \lambda_3$.
    *   The linear interpolation means the displacement is constant along each edge.
*   **Expressing Shape Functions in terms of x and y:**
    *   Let the coordinates of the nodes be $(x_1, y_1)$, $(x_2, y_2)$, and $(x_3, y_3)$.
    *   The area of the triangle with vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$ can be calculated as:
        $$ A = \frac{1}{2} \left| \det \begin{pmatrix} 1 & x_1 & y_1 \\ 1 & x_2 & y_2 \\ 1 & x_3 & y_3 \end{pmatrix} \right| $$
    *   The area coordinates can be expressed as:
        $$ 2A \lambda_1 = \det \begin{pmatrix} 1 & x & y \\ 1 & x_2 & y_2 \\ 1 & x_3 & y_3 \end{pmatrix} = (x_2 y_3 - x_3 y_2) + (y_2 - y_3)x + (x_3 - x_2)y $$
        $$ 2A \lambda_2 = \det \begin{pmatrix} 1 & x_1 & y_1 \\ 1 & x & y \\ 1 & x_3 & y_3 \end{pmatrix} = (x_3 y_1 - x_1 y_3) + (y_3 - y_1)x + (x_1 - x_3)y $$
        $$ 2A \lambda_3 = \det \begin{pmatrix} 1 & x_1 & y_1 \\ 1 & x_2 & y_2 \\ 1 & x & y \end{pmatrix} = (x_1 y_2 - x_2 y_1) + (y_1 - y_2)x + (x_2 - x_1)y $$
    *   Therefore, the shape functions are:
        $$ N_1(x, y) = \frac{1}{2A} [(x_2 y_3 - x_3 y_2) + (y_2 - y_3)x + (x_3 - x_2)y] $$
        $$ N_2(x, y) = \frac{1}{2A} [(x_3 y_1 - x_1 y_3) + (y_3 - y_1)x + (x_1 - x_3)y] $$
        $$ N_3(x, y) = \frac{1}{2A} [(x_1 y_2 - x_2 y_1) + (y_1 - y_2)x + (x_2 - x_1)y] $$
*   **Dispacement Vector in terms of Shape Functions:**
    $$ \mathbf{u}(x, y) = \begin{Bmatrix} u(x,y) \\ v(x,y) \end{Bmatrix} = \sum_{i=1}^{3} \begin{pmatrix} N_i(x,y) & 0 \\ 0 & N_i(x,y) \end{pmatrix} \begin{Bmatrix} u_i \\ v_i \end{Bmatrix} $$
    Let $N_i^{disp}(x, y) = \begin{pmatrix} N_i(x,y) & 0 \\ 0 & N_i(x,y) \end{pmatrix}$. Then $\mathbf{u} = \sum_{i=1}^{3} N_i^{disp} \mathbf{d}_{ei}$, where $\mathbf{d}_{ei} = \begin{Bmatrix} u_i \\ v_i \end{Bmatrix}$.
    Or, in matrix form:
    $$ \begin{Bmatrix} u(x,y) \\ v(x,y) \end{Bmatrix} = \begin{pmatrix} N_1 & 0 & N_2 & 0 & N_3 & 0 \\ 0 & N_1 & 0 & N_2 & 0 & N_3 \end{pmatrix} \begin{Bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{Bmatrix} $$
    This matrix is often denoted as $\mathbf{N}(x,y)$ and is the displacement shape function matrix.
    $$ \mathbf{u}(x,y) = \mathbf{N}(x,y) \mathbf{d}_e $$

**2.4 Strain-Displacement Relationship:**

*   For 2D analysis, the strain vector is typically defined as:
    $$ \mathbf{\epsilon} = \begin{Bmatrix} \epsilon_{xx} \\ \epsilon_{yy} \\ \gamma_{xy} \end{Bmatrix} $$
    where $\epsilon_{xx}$ is normal strain in x-direction, $\epsilon_{yy}$ is normal strain in y-direction, and $\gamma_{xy}$ is shear strain.
*   The strains are related to displacements by the strain-displacement matrix (or operator matrix) $\mathbf{B}$:
    $$ \mathbf{\epsilon} = \mathbf{B} \mathbf{d}_e $$
*   The components of the $\mathbf{B}$ matrix are derived from the derivatives of the displacement shape functions:
    $$ \frac{\partial u}{\partial x} = \sum_{i=1}^{3} \frac{\partial N_i}{\partial x} u_i $$
    $$ \frac{\partial v}{\partial y} = \sum_{i=1}^{3} \frac{\partial N_i}{\partial y} v_i $$
    $$ \frac{\partial u}{\partial y} = \sum_{i=1}^{3} \frac{\partial N_i}{\partial y} u_i $$
    $$ \frac{\partial v}{\partial x} = \sum_{i=1}^{3} \frac{\partial N_i}{\partial x} v_i $$
*   From the expressions of $N_i(x, y)$, we see that $\frac{\partial N_i}{\partial x}$ and $\frac{\partial N_i}{\partial y}$ are constants.
    $$ \frac{\partial N_1}{\partial x} = \frac{1}{2A}(y_2 - y_3) = \text{constant} $$
    $$ \frac{\partial N_1}{\partial y} = \frac{1}{2A}(x_3 - x_2) = \text{constant} $$
    Similarly for $N_2$ and $N_3$.
*   Substituting these into the strain definitions:
    $$ \epsilon_{xx} = \sum_{i=1}^{3} \frac{\partial N_i}{\partial x} u_i $$
    $$ \epsilon_{yy} = \sum_{i=1}^{3} \frac{\partial N_i}{\partial y} v_i $$
    $$ \gamma_{xy} = \sum_{i=1}^{3} \frac{\partial N_i}{\partial y} u_i + \sum_{i=1}^{3} \frac{\partial N_i}{\partial x} v_i $$
*   This can be written in matrix form:
    $$ \mathbf{\epsilon} = \begin{Bmatrix} \epsilon_{xx} \\ \epsilon_{yy} \\ \gamma_{xy} \end{Bmatrix} = \begin{pmatrix} \frac{\partial N_1}{\partial x} & 0 & \frac{\partial N_2}{\partial x} & 0 & \frac{\partial N_3}{\partial x} & 0 \\ 0 & \frac{\partial N_1}{\partial y} & 0 & \frac{\partial N_2}{\partial y} & 0 & \frac{\partial N_3}{\partial y} \\ \frac{\partial N_1}{\partial y} & \frac{\partial N_1}{\partial x} & \frac{\partial N_2}{\partial y} & \frac{\partial N_2}{\partial x} & \frac{\partial N_3}{\partial y} & \frac{\partial N_3}{\partial x} \end{pmatrix} \begin{Bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{Bmatrix} $$
*   The $\mathbf{B}$ matrix for the CST element is:
    $$ \mathbf{B} = \frac{1}{2A} \begin{pmatrix} (y_2 - y_3) & 0 & (y_3 - y_1) & 0 & (y_1 - y_2) & 0 \\ 0 & (x_3 - x_2) & 0 & (x_1 - x_3) & 0 & (x_2 - x_1) \\ (x_3 - x_2) & (y_2 - y_3) & (x_1 - x_3) & (y_3 - y_1) & (x_2 - x_1) & (y_1 - y_2) \end{pmatrix} $$
*   **Constant Strain Property:** Since the derivatives of $N_i$ with respect to $x$ and $y$ are constants, the $\mathbf{B}$ matrix contains only constant values. Therefore, the strains ($\mathbf{\epsilon} = \mathbf{B} \mathbf{d}_e$) are constant throughout the CST element, regardless of the displacement vector $\mathbf{d}_e$.

**2.5 Element Stiffness Matrix ($k_e$):**

*   The element stiffness matrix relates the nodal forces to the nodal displacements: $\mathbf{f}_e = \mathbf{k}_e \mathbf{d}_e$.
*   It is calculated using the principle of virtual work or by minimizing the strain energy.
*   The general formula for the stiffness matrix is:
    $$ \mathbf{k}_e = \int_{V_e} \mathbf{B}^T \mathbf{D} \mathbf{B} \, dV $$
    where $\mathbf{D}$ is the material constitutive matrix.
*   For plane stress, the $\mathbf{D}$ matrix is:
    $$ \mathbf{D}_{\text{plane stress}} = \frac{E}{1-\nu^2} \begin{pmatrix} 1 & \nu & 0 \\ \nu & 1 & 0 \\ 0 & 0 & \frac{1-\nu}{2} \end{pmatrix} $$
    where $E$ is Young's Modulus and $\nu$ is Poisson's Ratio.
*   For plane strain, the $\mathbf{D}$ matrix is:
    $$ \mathbf{D}_{\text{plane strain}} = \frac{E}{(1+\nu)(1-2\nu)} \begin{pmatrix} 1-\nu & \nu & 0 \\ \nu & 1-\nu & 0 \\ 0 & 0 & \frac{1-2\nu}{2} \end{pmatrix} $$
*   **Simplification for CST:** Since $\mathbf{B}$ is constant, the integration over the element volume (or area in 2D) is simplified. Assuming a constant thickness $t$ and integrating over the element area $A$:
    $$ \mathbf{k}_e = \int_{A_e} \mathbf{B}^T \mathbf{D} \mathbf{B} \, t \, dA = t \, A_e \, \mathbf{B}^T \mathbf{D} \mathbf{B} $$
    The term $\mathbf{B}^T \mathbf{D} \mathbf{B}$ becomes a constant matrix.
*   The calculation of $\mathbf{k}_e$ involves matrix multiplication and involves many terms. The final $\mathbf{k}_e$ will be a $6 \times 6$ matrix.

**2.6 Element Load Vector ($f_e$):**

*   The element load vector represents the forces acting on the element, which are converted to nodal forces.
*   **Body Forces:** For a body force per unit volume $\mathbf{f}_b = \begin{Bmatrix} f_{bx} \\ f_{by} \end{Bmatrix}$, the nodal force vector due to body forces is:
    $$ \mathbf{f}_{e, body} = \int_{V_e} \mathbf{N}^T \mathbf{f}_b \, dV $$
    Assuming constant body forces and thickness $t$:
    $$ \mathbf{f}_{e, body} = t \int_{A_e} \mathbf{N}^T \mathbf{f}_b \, dA $$
    For CST, $\mathbf{N}$ contains linear shape functions. The centroid of the triangle is often used for simplification, distributing the body force equally to each node (e.g., $1/3$ of the total force to each node).
    $$ \mathbf{f}_{e, body} = t \cdot A_e \cdot \mathbf{f}_b \cdot \frac{1}{3} \begin{pmatrix} 1 \\ 1 \\ 1 \\ 1 \\ 1 \\ 1 \end{pmatrix} $$
*   **Surface (Traction) Forces:** For a traction force $\mathbf{t} = \begin{Bmatrix} t_x \\ t_y \end{Bmatrix}$ acting on a boundary edge of the element, the nodal force vector is:
    $$ \mathbf{f}_{e, traction} = \int_{S_e} \mathbf{N}^T \mathbf{t} \, dS $$
    This integral is typically performed along the edges where traction is applied. For example, if traction is applied to edge 1-2:
    $$ \mathbf{f}_{e, traction} = \int_{0}^{L_{12}} \begin{pmatrix} N_1 & 0 \\ 0 & N_1 \\ N_2 & 0 \\ 0 & N_2 \\ 0 & 0 \\ 0 & 0 \end{pmatrix} \begin{Bmatrix} t_x \\ t_y \end{Bmatrix} \, ds $$
    where $N_1$ and $N_2$ are evaluated along the edge and $L_{12}$ is the length of the edge. The shape functions along an edge are linear.

### 3. Limitations of the CST Element

*   **Constant Strain:** The primary limitation is that the strains are assumed to be constant throughout the element. This means the strain field is not linearly varying, which is often the case in real physical situations.
*   **Stiffness:** Because of the constant strain assumption, the CST element is considered "too stiff" and can lead to inaccurate results, especially for problems where strain gradients are significant (e.g., bending). It requires a very fine mesh to achieve reasonable accuracy.
*   **Inability to Model Bending:** The CST element cannot accurately capture bending behavior because it assumes linear displacement variations, which doesn't correctly represent the parabolic strain distribution in bending.

### 4. When to Use CST?

*   Despite its limitations, the CST element is important for understanding FEM fundamentals.
*   It is suitable for:
    *   Problems where stresses are relatively uniform.
    *   Problems where a very fine mesh can be afforded.
    *   As a pedagogical tool to introduce FEM concepts before moving to more advanced elements.
*   For more accurate results, elements like the **Linear Strain Triangle (LST)** or quadratic isoparametric elements are preferred, as they can model linear strain variations.

### 5. Practice Questions and Exercises

**Question 1:**
A CST element has nodes at (0,0), (1,0), and (0,1). Calculate the area of the element and the derivatives of the shape functions with respect to $x$ and $y$.

**Answer 1:**
*   **Area (A):**
    The coordinates are $(x_1, y_1) = (0,0)$, $(x_2, y_2) = (1,0)$, $(x_3, y_3) = (0,1)$.
    $$ 2A = \left| \det \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix} \right| = |1(1 \cdot 1 - 0 \cdot 0)| = 1 $$
    So, $A = 0.5$.
*   **Derivatives of Shape Functions:**
    Using the formulas:
    $$ \frac{\partial N_1}{\partial x} = \frac{1}{2A}(y_2 - y_3) = \frac{1}{1}(0 - 1) = -1 $$
    $$ \frac{\partial N_1}{\partial y} = \frac{1}{2A}(x_3 - x_2) = \frac{1}{1}(0 - 1) = -1 $$
    $$ \frac{\partial N_2}{\partial x} = \frac{1}{2A}(y_3 - y_1) = \frac{1}{1}(1 - 0) = 1 $$
    $$ \frac{\partial N_2}{\partial y} = \frac{1}{2A}(x_1 - x_3) = \frac{1}{1}(0 - 0) = 0 $$
    $$ \frac{\partial N_3}{\partial x} = \frac{1}{2A}(y_1 - y_2) = \frac{1}{1}(0 - 0) = 0 $$
    $$ \frac{\partial N_3}{\partial y} = \frac{1}{2A}(x_2 - x_1) = \frac{1}{1}(1 - 0) = 1 $$

**Question 2:**
For the CST element in Question 1, write down the $\mathbf{B}$ matrix. Assume plane stress and the material properties $E$ and $\nu$.

**Answer 2:**
From Question 1, $2A = 1$.
$$ \mathbf{B} = \frac{1}{2A} \begin{pmatrix} (y_2 - y_3) & 0 & (y_3 - y_1) & 0 & (y_1 - y_2) & 0 \\ 0 & (x_3 - x_2) & 0 & (x_1 - x_3) & 0 & (x_2 - x_1) \\ (x_3 - x_2) & (y_2 - y_3) & (x_1 - x_3) & (y_3 - y_1) & (x_2 - x_1) & (y_1 - y_2) \end{pmatrix} $$
Substitute values:
$$ \mathbf{B} = \frac{1}{1} \begin{pmatrix} (0 - 1) & 0 & (1 - 0) & 0 & (0 - 0) & 0 \\ 0 & (0 - 1) & 0 & (0 - 0) & 0 & (1 - 0) \\ (0 - 1) & (0 - 1) & (0 - 0) & (1 - 0) & (1 - 0) & (0 - 0) \end{pmatrix} $$
$$ \mathbf{B} = \begin{pmatrix} -1 & 0 & 1 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 & 0 & 1 \\ -1 & -1 & 0 & 1 & 1 & 0 \end{pmatrix} $$

**Question 3:**
Explain why CST elements are sometimes referred to as "limited" or "ill-conditioned" elements.

**Answer 3:**
CST elements assume a **constant strain** throughout the element. This means the strain field within the element is linear for displacement. However, in many real-world scenarios, especially in bending, strains vary linearly or quadratically. By forcing the strain to be constant, the CST element often provides a stiffer response than the actual behavior, leading to underestimation of deformation and potentially inaccurate stress values, especially with coarser meshes. This "over-stiffness" is a consequence of the limited interpolation capabilities (only linear for displacement) and the resulting constant strain assumption.

### 6. Important Points to Remember

*   **CST Element:** 3-node triangular element, 6 DOFs ($u_1, v_1, u_2, v_2, u_3, v_3$).
*   **Shape Functions:** Linear functions of $x$ and $y$, derived from area coordinates or direct interpolation.
*   **Constant Strain:** The defining characteristic. Strains $\epsilon_{xx}, \epsilon_{yy}, \gamma_{xy}$ are constant within the element.
*   **B Matrix:** Contains constant values, derived from derivatives of shape functions.
*   **Stiffness Matrix ($k_e$):** Calculated as $t \cdot A_e \cdot \mathbf{B}^T \mathbf{D} \mathbf{B}$. $\mathbf{D}$ is the material constitutive matrix (plane stress or plane strain).
*   **Limitations:** Over-stiffness, poor accuracy in bending, requires fine meshes.
*   **Foundation:** Crucial for understanding basic FEM principles.

### 7. Referencing Textbooks and Course Outcomes Alignment

This topic directly supports:

*   **CO2: To apply the coordinate transformation and formulation of shape functions of various element.** (K3) - The CST is a fundamental element for learning shape function formulation and their role in displacement interpolation. The concept of local vs. global coordinates is implicitly used when deriving the $\mathbf{B}$ matrix and assembling the global system.
*   **CO3: Formulate shape functions and element strain displacement matrix of various element** (K4) - This topic heavily involves the formulation of CST shape functions and the derivation of the corresponding $\mathbf{B}$ matrix, which directly relates nodal displacements to strains.

The concepts covered are also foundational for later topics:

*   Understanding the $\mathbf{B}$ matrix and stiffness matrix calculation is essential for **CO4**.
*   The idea of simple elements like CST is a precursor to understanding more complex **isoparametric elements** mentioned in **CO5**.

**Textbook References:**

*   **J.N. Reddy, Third Edition, 2009:** Chapter 4 (Two-Dimensional Finite Elements) likely covers triangular elements, shape functions, strain-displacement relations, and stiffness matrix formulation for CST.
*   **Robert D. Cook, Third Edition, 2008:** Chapter 8 (Triangular Elements) and subsequent chapters on formulation will detail CST element properties, shape functions, and stiffness matrices.
*   **S.S. Bhavikatti, Third Edition, 2008:** Chapter 6 (Two-Dimensional Problems - Triangular Elements) will provide details on CST, including its formulation and limitations.
*   **Jacob Fish & Ted Belytschko, Second Edition, 2007:** Chapters on basic FE formulation and 2D elements would cover CST.

**Reference Book References:**

*   **Larry J. Segerlind, Second Edition, 2010:** Similar to the primary textbooks, likely covers CST in detail in sections on 2D elements.
*   **G. Ramamurthi, Second Edition:** Expect coverage of CST as a basic 2D element.
*   **David V. Hutton, Third Edition, 2009:** Likely provides a clear introduction to CST elements and their derivation.

This detailed study note provides a comprehensive understanding of the 2-Dimensional Constant Strain Triangle (CST) element, its formulation, properties, limitations, and its place within the broader context of Finite Element Methods.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
