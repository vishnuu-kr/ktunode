---
title: "stiffness matrices"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044642aa"
status: "completed"
scrapedAt: "2026-05-20T18:13:09.874Z"
---
# Finite Element Methods: Module 4 - Strong and Weak Form: Stiffness Matrices

## Introduction to Stiffness Matrices

This module delves into the fundamental concept of stiffness matrices within the Finite Element Method (FEM). Stiffness matrices are the core building blocks that relate nodal forces to nodal displacements in a structural or physical system discretized into finite elements. We will explore how these matrices are derived from both the strong and weak forms of governing differential equations, and how they are assembled to represent the behavior of the entire structure.

**Knowledge Level Alignment:**
*   **CO1 (K2):** Understanding the basic procedure of FEM, which fundamentally relies on stiffness matrices.
*   **CO3 (K4):** Formulating the element stiffness matrix, a key part of calculating the element strain-displacement matrix.

**Key Textbooks for Reference:**
*   **Reddy, J.N. (2009).** *An Introduction to Finite Element Method.* (Third Edition). McGrawHillEducation. (Chapters focusing on elasticity and formulation of stiffness matrices)
*   **Cook, R.D. (2008).** *Concepts and Applications of Finite Element Method.* (Third Edition). Wiley. (Excellent for conceptual understanding and practical examples)
*   **Bhavikatti, S.S. (2008).** *Finite Element Analysis.* (Third Edition). New Age Publisher. (Clear explanations and step-by-step derivations)
*   **Fish, J., & Belytschko, T. (2007).** *A First Course in Finite Elements.* (Second Edition). John Wiley & Sons, Ltd. (Provides a solid theoretical foundation)

---

## 1. The Role of Stiffness Matrices in FEM

Stiffness matrices are the **tangible representation of a system's resistance to deformation under applied loads**. They are the cornerstone of structural analysis and are fundamental to solving a wide range of physical problems using FEM.

*   **Definition:** A stiffness matrix, often denoted by $[\mathbf{k}]$, is a square matrix that relates the vector of nodal forces $[\mathbf{f}]$ to the vector of nodal displacements $[\mathbf{u}]$ for an element or the entire system.
    $$[\mathbf{f}] = [\mathbf{k}][\mathbf{u}]$$
*   **Physical Interpretation:**
    *   Each diagonal entry $k_{ii}$ represents the force required at node $i$ to produce a unit displacement at node $i$, while all other nodes are held fixed.
    *   Each off-diagonal entry $k_{ij}$ represents the force required at node $i$ to produce a unit displacement at node $j$, while all other nodes are held fixed.
*   **System Behavior:** The assembly of element stiffness matrices results in a global stiffness matrix for the entire structure or domain. This global matrix, along with the global force and displacement vectors, forms the system of linear algebraic equations that are solved to determine the unknown nodal displacements.

---

## 2. Derivation of Stiffness Matrices from the Strong Form

The strong form of a differential equation is the original differential equation itself, which must be satisfied exactly over the entire domain. While conceptually direct, deriving stiffness matrices from the strong form can be challenging for complex problems and often leads to complex integration.

**General Approach (for elasticity problems):**

1.  **Governing Differential Equation:** For a one-dimensional elastic bar under axial load, the strong form is:
    $$-\frac{d}{dx}\left(A E \frac{du}{dx}\right) + q(x) = 0$$
    where:
    *   $A$ is the cross-sectional area.
    *   $E$ is the Young's modulus.
    *   $u(x)$ is the displacement at position $x$.
    *   $q(x)$ is a distributed load.
    *   $AE$ is the axial rigidity.

2.  **Element Representation:** Consider a single finite element with two nodes, $i$ and $j$, at positions $x_i$ and $x_j$. The displacement within the element $u(x)$ is approximated using shape functions:
    $$u(x) = N_i(x) u_i + N_j(x) u_j = [\mathbf{N}(x)][\mathbf{u}_e]$$
    where:
    *   $N_i(x)$ and $N_j(x)$ are the shape functions for nodes $i$ and $j$.
    *   $[\mathbf{u}_e]^T = [u_i, u_j]$ is the vector of nodal displacements for the element.

3.  **Strain-Displacement Relation:** The strain $\epsilon(x)$ within the element is related to the displacement by:
    $$\epsilon(x) = \frac{du}{dx} = \frac{d}{dx} ([N_i(x) N_j(x)][\mathbf{u}_e]) = [B(x)][\mathbf{u}_e]$$
    where $[B(x)]$ is the strain-displacement matrix:
    $$[B(x)] = \left[\frac{dN_i}{dx} \quad \frac{dN_j}{dx}\right]$$

4.  **Stress-Strain Relation (Constitutive Law):** For a linear elastic material, stress $\sigma(x)$ is related to strain by:
    $$\sigma(x) = E \epsilon(x) = E [B(x)][\mathbf{u}_e] = [D(x)][\mathbf{u}_e]$$
    where $[D(x)]$ is the material property matrix (in this 1D case, $[D(x)] = [E]$).

5.  **Force-Displacement Relation for an Element:** The element nodal forces $[\mathbf{f}_e]^T = [f_i, f_j]$ are related to stress by integrating the stress over the cross-sectional area. For a 1D bar, this involves integrating the stress along the element length. However, a more direct approach is to relate nodal forces to stresses through the divergence theorem, which links the strong form to the weak form.

**Important Note:** While this outlines the process, directly deriving the stiffness matrix from the strong form often involves substituting the assumed displacement field back into the differential equation and then using some form of minimization or balancing principle to obtain the nodal force-displacement relationship. The **weak form provides a more systematic and generalized approach** for deriving stiffness matrices, especially for complex geometries and boundary conditions.

---

## 3. Derivation of Stiffness Matrices from the Weak Form (Galerkin Method)

The weak form (or variational form) of a differential equation is obtained by multiplying the differential equation by a *weight function* (or test function) and integrating over the domain. This process reduces the order of the derivatives required and allows for less restrictive continuity conditions on the solution. The Galerkin method is a common and powerful technique for deriving stiffness matrices from the weak form.

**Steps for Deriving Stiffness Matrices using the Galerkin Method:**

1.  **Start with the Strong Form:**
    Consider a general second-order differential equation of the form:
    $$-\frac{d}{dx}(P(x)\frac{du}{dx}) + Q(x)u(x) = f(x), \quad a < x < b$$
    with boundary conditions at $x=a$ and $x=b$.

2.  **Introduce a Weight Function:**
    Multiply the equation by an arbitrary weight function $w(x)$ (which vanishes at essential boundary conditions) and integrate over the domain $[a, b]$:
    $$\int_a^b \left[-\frac{d}{dx}(P(x)\frac{du}{dx}) + Q(x)u(x)\right] w(x) dx = \int_a^b f(x) w(x) dx$$

3.  **Apply Integration by Parts:**
    Integrate the first term by parts to reduce the derivative on the displacement term and introduce boundary terms:
    $$-\left[P(x)\frac{du}{dx} w(x)\right]_a^b + \int_a^b P(x)\frac{du}{dx}\frac{dw}{dx} dx + \int_a^b Q(x)u(x)w(x) dx = \int_a^b f(x) w(x) dx$$

4.  **Incorporate Boundary Conditions:**
    *   **Essential Boundary Conditions (Dirichlet BCs):** These specify the value of the unknown variable (e.g., displacement). The weight function $w(x)$ is zero at these boundaries, so the boundary terms vanish.
    *   **Natural Boundary Conditions (Neumann BCs):** These typically involve derivatives of the unknown variable (e.g., force or flux). The boundary terms in the integrated equation often represent these natural boundary conditions. For example, if $u(b)$ is not specified (a free end), then $P(b) \frac{du}{dx}$ might represent the force at $x=b$.

    Assuming essential boundary conditions at $x=a$ and $x=b$, the equation becomes:
    $$\int_a^b \left[P(x)\frac{du}{dx}\frac{dw}{dx} + Q(x)u(x)w(x)\right] dx = \int_a^b f(x) w(x) dx$$
    This is the weak form of the differential equation.

5.  **Approximate the Solution using Shape Functions:**
    Within an element $e$ with length $L_e$, approximate the displacement $u(x)$ and the weight function $w(x)$ using the same set of shape functions $\{\mathbf{N}(x)\}$ and nodal values:
    $$u(x) \approx [\mathbf{N}(x)][\mathbf{u}_e]$$
    $$w(x) \approx [\mathbf{N}(x)][\mathbf{w}_e]$$
    where $[\mathbf{u}_e]$ is the vector of nodal displacements and $[\mathbf{w}_e]$ is the vector of arbitrary nodal values for the weight function.

6.  **Substitute Approximations into the Weak Form:**
    Substitute these approximations into the weak form:
    $$\int_{x_i}^{x_j} \left[P(x) \frac{d}{dx}([\mathbf{N}(x)][\mathbf{u}_e]) \frac{d}{dx}([\mathbf{N}(x)][\mathbf{w}_e]) + Q(x) ([\mathbf{N}(x)][\mathbf{u}_e]) ([\mathbf{N}(x)][\mathbf{w}_e])\right] dx = \int_{x_i}^{x_j} f(x) [\mathbf{N}(x)][\mathbf{w}_e] dx$$

7.  **Relate Nodal Forces to Nodal Displacements:**
    We can rewrite the equation as:
    $$[\mathbf{w}_e]^T \int_{x_i}^{x_j} \left[ \left(\frac{d[\mathbf{N}]^T}{dx} P(x) \frac{d[\mathbf{N}]}{dx} + [\mathbf{N}]^T Q(x) [\mathbf{N}]\right) [\mathbf{u}_e] - [\mathbf{N}]^T f(x) \right] dx = 0$$
    Since $[\mathbf{w}_e]$ is an arbitrary vector, the term multiplying it must be zero:
    $$\int_{x_i}^{x_j} \left(\frac{d[\mathbf{N}]^T}{dx} P(x) \frac{d[\mathbf{N}]}{dx} + [\mathbf{N}]^T Q(x) [\mathbf{N}]\right) dx [\mathbf{u}_e] = \int_{x_i}^{x_j} [\mathbf{N}]^T f(x) dx$$
    This equation is in the form:
    $$[\mathbf{k}_e][\mathbf{u}_e] = [\mathbf{f}_e^{load}]$$

8.  **Define the Element Stiffness Matrix and Load Vector:**
    The element stiffness matrix is:
    $$[\mathbf{k}_e] = \int_{x_i}^{x_j} \left(\frac{d[\mathbf{N}]^T}{dx} P(x) \frac{d[\mathbf{N}]}{dx} + [\mathbf{N}]^T Q(x) [\mathbf{N}]\right) dx$$
    The element nodal force vector due to distributed load is:
    $$[\mathbf{f}_e^{load}] = \int_{x_i}^{x_j} [\mathbf{N}]^T f(x) dx$$

**Important Point:** The formulation of the element stiffness matrix $[\mathbf{k}_e]$ is directly related to the **strain-displacement matrix** $[\mathbf{B}]$ and the **material property matrix** $[\mathbf{D}]$ for elasticity problems. For a 1D bar element, the derivation from the weak form leads to:
$$[\mathbf{k}_e] = \int_{0}^{L_e} [B(x)]^T [D(x)] [B(x)] dx$$
where $[D(x)] = [E]$ and $[B(x)] = \frac{d[\mathbf{N}]}{dx}$. This aligns with **CO3 (K4)**.

---

## 4. Example: 1D Bar Element Stiffness Matrix

Let's derive the stiffness matrix for a 1D bar element with two nodes, $i$ and $j$, with nodal displacements $u_i$ and $u_j$. The element has length $L$.

**Problem Statement:** Consider a uniform bar element with cross-sectional area $A$ and Young's modulus $E$. The governing equation is:
$$-\frac{d}{dx}\left(AE \frac{du}{dx}\right) = 0$$
(Assuming no distributed load $q(x)$ for simplicity in this derivation).

**1. Shape Functions (Linear):**
For a 1D bar element, linear shape functions are typically used:
$$N_i(x) = 1 - \frac{x}{L}$$
$$N_j(x) = \frac{x}{L}$$
where $x$ is the local coordinate along the element, with $x=0$ at node $i$ and $x=L$ at node $j$.

The displacement approximation is:
$$u(x) = N_i(x) u_i + N_j(x) u_j = \begin{bmatrix} 1 - \frac{x}{L} & \frac{x}{L} \end{bmatrix} \begin{bmatrix} u_i \\ u_j \end{bmatrix} = [\mathbf{N}(x)][\mathbf{u}_e]$$

**2. Strain-Displacement Matrix:**
The strain $\epsilon(x)$ is:
$$\epsilon(x) = \frac{du}{dx} = \frac{d}{dx}\left(\left[\begin{bmatrix} 1 - \frac{x}{L} & \frac{x}{L} \end{bmatrix}\right]\right) [\mathbf{u}_e] = \frac{1}{L} \begin{bmatrix} -1 & 1 \end{bmatrix} [\mathbf{u}_e] = [B(x)][\mathbf{u}_e]$$
So, $[B(x)] = \frac{1}{L} \begin{bmatrix} -1 & 1 \end{bmatrix}$.

**3. Material Property Matrix:**
For a 1D bar, the material property matrix $[D(x)]$ is simply the Young's modulus $E$:
$$[D(x)] = [E]$$

**4. Element Stiffness Matrix Calculation:**
Using the weak form derivation result:
$$[\mathbf{k}_e] = \int_{0}^{L} [B(x)]^T [D(x)] [B(x)] dx$$
$$[\mathbf{k}_e] = \int_{0}^{L} \left(\frac{1}{L} \begin{bmatrix} -1 \\ 1 \end{bmatrix}\right) [E] \left(\frac{1}{L} \begin{bmatrix} -1 & 1 \end{bmatrix}\right) dx$$
$$[\mathbf{k}_e] = \int_{0}^{L} \frac{E}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} dx$$
$$[\mathbf{k}_e] = \frac{E}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \int_{0}^{L} dx$$
$$[\mathbf{k}_e] = \frac{E}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} [x]_0^L$$
$$[\mathbf{k}_e] = \frac{E}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} L$$
$$[\mathbf{k}_e] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$$

**(Note: I've multiplied by 'A' here assuming uniform cross-sectional area. If 'A' varies, it would be inside the integral.)**

**Interpretation of the 1D Bar Stiffness Matrix:**
*   $\frac{AE}{L}$ is the stiffness of the element.
*   The diagonal terms ($k_{ii}$, $k_{jj}$) represent the force required at a node to create a unit displacement at that same node, with the other node fixed.
*   The off-diagonal terms ($k_{ij}$, $k_{ji}$) represent the force required at node $i$ to create a unit displacement at node $j$, with node $i$ fixed. These are negative, indicating that if node $j$ is pulled to the right, node $i$ is pushed to the left (which is consistent with axial force).

**Textbook Reference:** Reddy (2009), Chapter 4 (Formulation of Finite Elements) and Chapter 6 (Two-Dimensional Elements) often present detailed derivations of stiffness matrices for various elements. Cook (2008) provides many practical examples and interpretations of these matrices.

---

## 5. Practice Questions and Exercises

**Question 1:**
The element stiffness matrix for a 1D bar element is given by $[\mathbf{k}_e] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$. If $A = 100 \text{ mm}^2$, $E = 200 \text{ GPa}$, and $L = 2 \text{ m}$, calculate the element stiffness matrix.

**Answer 1:**
First, ensure consistent units. Convert $E$ to $\text{N/mm}^2$ and $L$ to $\text{mm}$.
$E = 200 \text{ GPa} = 200 \times 10^3 \text{ N/mm}^2$
$L = 2 \text{ m} = 2000 \text{ mm}$
$A = 100 \text{ mm}^2$

Stiffness value: $\frac{AE}{L} = \frac{(100 \text{ mm}^2)(200 \times 10^3 \text{ N/mm}^2)}{2000 \text{ mm}} = \frac{20000 \times 10^3}{2000} \text{ N/mm} = 10 \times 10^3 \text{ N/mm} = 10 \text{ kN/mm}$

$$[\mathbf{k}_e] = 10 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \text{ kN/mm}$$

**Question 2:**
Consider a simply supported beam element under bending. What is the general form of the stiffness matrix for a beam element and what do the entries represent? (Referencing concepts from **Bhavikatti (2008)**).

**Answer 2:**
For a beam element in bending, the degrees of freedom at each node are typically displacement (vertical deflection, $v$) and slope ($\theta = dv/dx$). Thus, a beam element has 4 nodal degrees of freedom: $v_i, \theta_i, v_j, \theta_j$. The element stiffness matrix $[\mathbf{k}_e]$ for a beam element is therefore a $4 \times 4$ matrix.

The general form of the element stiffness matrix for a uniform beam element of length $L$, Young's modulus $E$, and area moment of inertia $I$ is derived from the weak form of the Euler-Bernoulli beam theory.

$$[\mathbf{k}_e] = \frac{EI}{L^3} \begin{bmatrix}
12 & 6L & -12 & 6L \\
6L & 4L^2 & -6L & 2L^2 \\
-12 & -6L & 12 & -6L \\
6L & 2L^2 & -6L & 4L^2
\end{bmatrix}$$

**Interpretation of entries:**
*   $k_{11} = 12EI/L^3$: Force required at node $i$ (vertical direction) to produce unit vertical displacement at node $i$, with all other DOFs zero.
*   $k_{12} = 6EI/L^2$: Force required at node $i$ (vertical direction) to produce unit slope at node $i$, with all other DOFs zero.
*   $k_{13} = -12EI/L^3$: Force required at node $i$ (vertical direction) to produce unit vertical displacement at node $j$, with all other DOFs zero.
*   And so on for all 16 entries.

**Question 3:**
Explain the relationship between the strong form and the weak form in deriving stiffness matrices, highlighting why the weak form is preferred in FEM. (Relate to **Fish & Belytschko (2007)**).

**Answer 3:**
The **strong form** of a differential equation requires the equation to be satisfied exactly over the entire domain. This implies a higher degree of differentiability for the solution. When deriving stiffness matrices directly from the strong form, it can be algebraically intensive and might require specific solution techniques not universally applicable.

The **weak form**, obtained by multiplying the strong form by a weight function and integrating over the domain (often with integration by parts), relaxes the differentiability requirements on the solution. This is crucial for FEM because we approximate the solution using piecewise polynomials (shape functions), which are typically only continuous and have derivatives that are piecewise constant or linear. Integration by parts in the weak form moves the derivatives from the unknown solution to the known shape functions, making the derivation of the integral form of the stiffness matrix feasible.

The weak form is preferred in FEM because:
1.  **Lower Continuity Requirements:** It allows for the use of simpler, piecewise polynomial shape functions.
2.  **Systematic Derivation:** It provides a consistent mathematical framework (like the Galerkin method) to derive the integral expressions for stiffness matrices.
3.  **Handles Boundary Conditions Naturally:** Natural boundary conditions arise directly from the boundary terms produced during integration by parts, simplifying the imposition of certain boundary conditions.
4.  **Generalizability:** The weak form approach is readily extendable to more complex problems (e.g., different physical phenomena, higher dimensions, non-linearities).

**Question 4:**
How does the concept of "element stiffness matrix" contribute to the overall "global stiffness matrix" of a structure? (Referencing **Segerlind (2010)**)

**Answer 4:**
The global stiffness matrix represents the stiffness of the entire structure. It is assembled by combining the element stiffness matrices of all the individual finite elements that discretize the structure. This assembly process is based on the connectivity of the elements and the compatibility of displacements at the shared nodes.

The process involves:
1.  **Mapping Element DOFs to Global DOFs:** Each element's local degrees of freedom (DOFs) are mapped to the global DOFs of the structure.
2.  **Direct Stiffness Assembly:** The entries of the element stiffness matrix are added to the corresponding positions in the global stiffness matrix. For example, if element $e$ has nodes $i$ and $j$, and its local stiffness matrix $k_{11}^e$ relates force at node $i$ to displacement at node $i$, then this value is added to the global stiffness matrix entry $K_{ii}$ (where $i$ is the global node number corresponding to the local node $i$).
3.  **Handling Shared Nodes:** When elements share a node, their stiffness contributions to that node are summed in the global stiffness matrix.
4.  **Boundary Conditions:** Essential boundary conditions (prescribed displacements) are imposed on the global system of equations.

This assembly process ensures that the equilibrium equations ($[\mathbf{F}] = [\mathbf{K}][\mathbf{U}]$) are satisfied for the entire structure, where $[\mathbf{F}]$ is the global force vector, $[\mathbf{K}]$ is the global stiffness matrix, and $[\mathbf{U}]$ is the global displacement vector.

---

## 6. Important Points to Remember

*   **Stiffness matrices are the link between forces and displacements.**
*   The weak form is the preferred method for deriving stiffness matrices in FEM due to its ability to handle complex equations and lower-continuity approximations.
*   The **Galerkin method** is a common technique for obtaining the weak form and subsequently the stiffness matrices.
*   For elasticity problems, the element stiffness matrix is fundamentally related to the integral of the product of the strain-displacement matrix $[\mathbf{B}]$, the material property matrix $[\mathbf{D}]$, and the transpose of the strain-displacement matrix $[\mathbf{B}]^T$: $[\mathbf{k}_e] = \int_{V} [\mathbf{B}]^T [\mathbf{D}] [\mathbf{B}] dV$.
*   **Shape functions** play a critical role in defining the $[\mathbf{B}]$ matrix and, consequently, the stiffness matrix.
*   The **assembly process** of element stiffness matrices into a global stiffness matrix is crucial for solving the entire system.
*   The properties of the stiffness matrix (e.g., symmetry, positive definiteness for physical systems) are important for numerical stability and convergence.

---

## 7. Alignment with Course Outcomes

*   **CO1 (K2):** Understanding the basic procedure of FEM. Stiffness matrices are central to this procedure as they form the system of equations to be solved.
*   **CO3 (K4):** Formulate shape functions and element strain displacement matrix of various elements. The derivation of stiffness matrices directly uses the strain-displacement matrix derived from shape functions.
*   **(Implied connection to CO4 - K5):** Evaluating element stress using energy methods is closely tied to the calculated nodal forces, which are obtained using the stiffness matrix and displacements. The weak form derivation naturally leads to energy formulations.

---

This concludes Module 4's focus on stiffness matrices. The understanding gained here is fundamental for all subsequent FEM applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
