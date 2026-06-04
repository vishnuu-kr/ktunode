---
title: "Derivation of shape functions using polynomial of One-Dimensional bar"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463848"
status: "completed"
scrapedAt: "2026-05-20T18:03:58.093Z"
---
# FINITE ELEMENT METHODS - Module 2: Types of Coordinate System in FEM

## Topic: Derivation of Shape Functions using Polynomials for a One-Dimensional Bar

### 1. Introduction to Shape Functions

**Key Concept:** Shape functions, also known as interpolation functions or basis functions, are the cornerstone of the Finite Element Method (FEM). They are mathematical expressions that describe how a field variable (e.g., displacement, temperature) varies within an element. Crucially, they allow us to approximate the unknown continuous function within an element using a set of discrete nodal values.

**Importance:**
*   **Discretization:** Shape functions enable the conversion of a continuous problem into a discrete one, suitable for numerical solution.
*   **Interpolation:** They interpolate the solution within an element based on the known nodal values.
*   **Element Formulation:** They are essential for deriving the element stiffness matrices and load vectors, which are the building blocks of the global system of equations in FEM.

**Reference:** Reddy, J.N. (2009). *An Introduction to Finite Element Method* (3rd ed.). McGrawHill Education. Chapter 4 emphasizes the role of shape functions in approximating solutions. Cook, R.D. (2008). *Concept and Application of Finite Element Method* (3rd ed.). Wiley. Chapter 7 provides a detailed explanation of interpolation functions.

---

### 2. The One-Dimensional Bar Element

**Key Concept:** A one-dimensional (1D) bar element is the simplest type of element in FEM, used to model structures that are long and slender, such as rods, beams, and shafts. For stress analysis, the primary field variable is displacement.

**Assumptions for a 1D Bar Element (under axial load):**
*   The bar is prismatic (constant cross-sectional area and material properties along its length).
*   The material is linear elastic, isotropic, and homogeneous.
*   Deformation is small.
*   Only axial displacement is considered.
*   Stress is uniform across the cross-section.

**Description:** Consider a 1D bar of length $L$. This bar is discretized into one or more finite elements. For this topic, we focus on a single 1D bar element with two nodes, one at each end. Let the nodes be denoted by $i$ and $j$, located at positions $x_i$ and $x_j$ respectively. The length of the element is $L = x_j - x_i$.

---

### 3. Derivation of Shape Functions using Polynomials

**General Approach:**
The derivation of shape functions relies on the fundamental principle that the assumed displacement within an element must satisfy certain conditions:
1.  **Continuity:** The displacement should be continuous within the element.
2.  **Uniqueness:** For any set of nodal values, there should be a unique displacement within the element.
3.  **Completeness:** The assumed polynomial must be able to represent rigid body motion and constant strain.
4.  **Compatibility:** The assumed displacement must be able to approximate the actual displacement as closely as possible.

**Polynomial Approximation:**
For a 1D element, we can represent the displacement field $u(x)$ within the element as a polynomial. The degree of the polynomial depends on the number of nodes and the desired accuracy.

#### 3.1. Linear Shape Functions (2-Node 1D Bar Element)

**Concept:** For a 2-node 1D bar element, we need two nodal values of displacement, say $u_i$ at node $i$ and $u_j$ at node $j$. To uniquely define the displacement field, we need at least a linear polynomial (degree 1).

**Polynomial Form:**
Let the displacement $u(x)$ within the element be represented by a linear polynomial:
$u(x) = c_0 + c_1 x$
where $c_0$ and $c_1$ are constants.

**Applying Nodal Conditions:**
We have two unknowns ($c_0, c_1$), so we need two conditions. These conditions are the nodal displacements at the ends of the element.
Let the element extend from $x=a$ to $x=b$. For simplicity, we often use a local coordinate system.

**Using Local Coordinate System (Natural Coordinate System):**
It is often convenient to use a normalized local coordinate system, $\xi$, defined as:
$\xi = \frac{x - x_i}{L}$, where $x_i$ is the coordinate of the first node and $L$ is the element length.
In this system, the element extends from $\xi = -1$ to $\xi = +1$ (or from $\xi = 0$ to $\xi = 1$, depending on the convention used). Let's use the $\xi \in [-1, 1]$ convention.

So, $x = x_i + \frac{L}{2} (\xi + 1)$. (This mapping is used for mapping from [-1, 1] to [x_i, x_j]).
If we define $\xi = \frac{x-x_i}{L}$, then $x = x_i + \xi L$.
At node $i$, $x = x_i \implies \xi = 0$.
At node $j$, $x = x_j \implies \xi = 1$.

Let's use the $\xi \in [0, 1]$ convention for simplicity in derivation here, as it directly relates to the nodal positions.
$\xi = \frac{x-x_i}{L}$
$x = x_i + \xi L$

The displacement within the element can be written as:
$u(\xi) = c_0 + c_1 \xi$

**Nodal Conditions:**
1.  At node $i$: $x = x_i \implies \xi = 0$. The displacement is $u(x_i) = u_i$.
    $u_i = c_0 + c_1 (0) \implies u_i = c_0$
2.  At node $j$: $x = x_j \implies \xi = 1$. The displacement is $u(x_j) = u_j$.
    $u_j = c_0 + c_1 (1) \implies u_j = c_0 + c_1$

**Solving for Constants:**
From condition 1, $c_0 = u_i$.
Substitute $c_0$ into condition 2: $u_j = u_i + c_1 \implies c_1 = u_j - u_i$.

**Substituting back into the polynomial:**
$u(\xi) = u_i + (u_j - u_i) \xi$
$u(\xi) = u_i (1 - \xi) + u_j \xi$

**Expressing in terms of Shape Functions:**
We want to express the displacement as a linear combination of nodal displacements, where the coefficients are the shape functions:
$u(\xi) = N_i(\xi) u_i + N_j(\xi) u_j$

Comparing this with the derived expression, we get the shape functions:
$N_i(\xi) = 1 - \xi$
$N_j(\xi) = \xi$

**Properties of Shape Functions (for 2-node 1D element):**
*   **Summation to 1:** $N_i(\xi) + N_j(\xi) = (1 - \xi) + \xi = 1$. This ensures that if all nodal displacements are the same (rigid body motion), the displacement within the element is also that same value.
*   **Kronecker Delta Property:**
    *   $N_i(\xi = 0) = 1$ and $N_j(\xi = 0) = 0$. This means at node $i$, the displacement is solely dependent on $u_i$.
    *   $N_i(\xi = 1) = 0$ and $N_j(\xi = 1) = 1$. This means at node $j$, the displacement is solely dependent on $u_j$.
*   **Linear variation:** The shape functions are linear, meaning the displacement variation within the element is linear.

**Reference:** Bhavikatti, S. S. (2008). *Finite Element Analysis* (3rd ed.). New Age Publisher. Chapter 4 discusses linear elements and their shape functions. Fish, J., & Belytschko, T. (2007). *A First Course in Finite Elements* (2nd ed.). John Wiley & Sons, Ltd. Chapter 3 covers the basics of interpolation and shape functions.

#### 3.2. Quadratic Shape Functions (3-Node 1D Bar Element)

**Concept:** To achieve a more accurate representation of the displacement, especially when the deformation is non-linear, we can use a higher-order polynomial. For a 3-node 1D bar element, we have three nodal displacements: $u_i, u_k, u_j$ at nodes $i, k, j$ respectively. To uniquely define the displacement, we need a quadratic polynomial (degree 2).

**Polynomial Form:**
$u(x) = c_0 + c_1 x + c_2 x^2$

**Using Local Coordinate System ($\xi \in [0, 1]$):**
Let the three nodes be at $x_i, x_k, x_j$, and their corresponding $\xi$ values are 0, 0.5, and 1 respectively.
The displacement within the element can be written as:
$u(\xi) = c_0 + c_1 \xi + c_2 \xi^2$

**Nodal Conditions:**
1.  At node $i$: $x = x_i \implies \xi = 0$. Displacement $u(x_i) = u_i$.
    $u_i = c_0 + c_1 (0) + c_2 (0)^2 \implies u_i = c_0$
2.  At node $k$: $x = x_k \implies \xi = 0.5$. Displacement $u(x_k) = u_k$.
    $u_k = c_0 + c_1 (0.5) + c_2 (0.5)^2 \implies u_k = c_0 + 0.5 c_1 + 0.25 c_2$
3.  At node $j$: $x = x_j \implies \xi = 1$. Displacement $u(x_j) = u_j$.
    $u_j = c_0 + c_1 (1) + c_2 (1)^2 \implies u_j = c_0 + c_1 + c_2$

**Solving for Constants:**
From condition 1, $c_0 = u_i$.
Substitute $c_0$ into condition 2: $u_k = u_i + 0.5 c_1 + 0.25 c_2$
$u_k - u_i = 0.5 c_1 + 0.25 c_2 \quad (*)$

Substitute $c_0$ into condition 3: $u_j = u_i + c_1 + c_2$
$u_j - u_i = c_1 + c_2 \quad (**)$

From $(**)$, $c_1 = (u_j - u_i) - c_2$.
Substitute $c_1$ into $(*)$:
$u_k - u_i = 0.5 [(u_j - u_i) - c_2] + 0.25 c_2$
$u_k - u_i = 0.5 (u_j - u_i) - 0.5 c_2 + 0.25 c_2$
$u_k - u_i = 0.5 (u_j - u_i) - 0.25 c_2$
$0.25 c_2 = 0.5 (u_j - u_i) - (u_k - u_i)$
$c_2 = 2 (u_j - u_i) - 4 (u_k - u_i)$
$c_2 = 2 u_j - 2 u_i - 4 u_k + 4 u_i$
$c_2 = 2 u_j - 4 u_k + 2 u_i$

Now find $c_1$:
$c_1 = (u_j - u_i) - c_2$
$c_1 = (u_j - u_i) - (2 u_j - 4 u_k + 2 u_i)$
$c_1 = u_j - u_i - 2 u_j + 4 u_k - 2 u_i$
$c_1 = -3 u_i + 4 u_k - u_j$

**Substituting back into the polynomial:**
$u(\xi) = u_i + (-3 u_i + 4 u_k - u_j) \xi + (2 u_j - 4 u_k + 2 u_i) \xi^2$

**Expressing in terms of Shape Functions:**
$u(\xi) = N_i(\xi) u_i + N_k(\xi) u_k + N_j(\xi) u_j$

We need to group terms by $u_i, u_k, u_j$:
$u(\xi) = u_i [1 - 3\xi + 2\xi^2] + u_k [4\xi - 4\xi^2] + u_j [- \xi + 2\xi^2]$

Therefore, the quadratic shape functions for a 3-node 1D bar element are:
$N_i(\xi) = 1 - 3\xi + 2\xi^2$
$N_k(\xi) = 4\xi - 4\xi^2$
$N_j(\xi) = - \xi + 2\xi^2$

**Properties of Quadratic Shape Functions:**
*   **Summation to 1:** $N_i(\xi) + N_k(\xi) + N_j(\xi) = (1 - 3\xi + 2\xi^2) + (4\xi - 4\xi^2) + (-\xi + 2\xi^2) = 1 + (-3+4-1)\xi + (2-4+2)\xi^2 = 1$.
*   **Kronecker Delta Property:**
    *   At $\xi=0$ (node $i$): $N_i(0)=1$, $N_k(0)=0$, $N_j(0)=0$.
    *   At $\xi=0.5$ (node $k$): $N_i(0.5)=1 - 3(0.5) + 2(0.5)^2 = 1 - 1.5 + 2(0.25) = 1 - 1.5 + 0.5 = 0$.
        $N_k(0.5)=4(0.5) - 4(0.5)^2 = 2 - 4(0.25) = 2 - 1 = 1$.
        $N_j(0.5)=-0.5 + 2(0.5)^2 = -0.5 + 2(0.25) = -0.5 + 0.5 = 0$.
    *   At $\xi=1$ (node $j$): $N_i(1)=1 - 3(1) + 2(1)^2 = 1 - 3 + 2 = 0$.
        $N_k(1)=4(1) - 4(1)^2 = 4 - 4 = 0$.
        $N_j(1)=-1 + 2(1)^2 = -1 + 2 = 1$.
*   **Quadratic variation:** The displacement variation within the element is quadratic, allowing for a better approximation of curved displacement fields.

**Alternative Derivation using Lagrange Polynomials:**
Lagrange polynomials provide a more systematic way to derive shape functions for any number of nodes. For $n+1$ nodes and a polynomial of degree $n$, the Lagrange polynomial is given by:
$L_i(x) = \prod_{j=0, j\neq i}^{n} \frac{x - x_j}{x_i - x_j}$

The displacement is then $u(x) = \sum_{i=0}^{n} L_i(x) u_i$.
The shape functions are $N_i(x) = L_i(x)$.

**Example using Lagrange Polynomials for a 2-node element ($\xi \in [0, 1]$):**
Nodes at $\xi_1=0, \xi_2=1$.
$N_1(\xi) = \frac{\xi - \xi_2}{\xi_1 - \xi_2} = \frac{\xi - 1}{0 - 1} = \frac{\xi - 1}{-1} = 1 - \xi$
$N_2(\xi) = \frac{\xi - \xi_1}{\xi_2 - \xi_1} = \frac{\xi - 0}{1 - 0} = \frac{\xi}{1} = \xi$
These match the previously derived linear shape functions.

**Example using Lagrange Polynomials for a 3-node element ($\xi \in [0, 1]$):**
Nodes at $\xi_1=0, \xi_2=0.5, \xi_3=1$.
$N_1(\xi) = \frac{(\xi - \xi_2)(\xi - \xi_3)}{(\xi_1 - \xi_2)(\xi_1 - \xi_3)} = \frac{(\xi - 0.5)(\xi - 1)}{(0 - 0.5)(0 - 1)} = \frac{(\xi - 0.5)(\xi - 1)}{(-0.5)(-1)} = \frac{\xi^2 - 1.5\xi + 0.5}{0.5} = 2\xi^2 - 3\xi + 1$
$N_2(\xi) = \frac{(\xi - \xi_1)(\xi - \xi_3)}{(\xi_2 - \xi_1)(\xi_2 - \xi_3)} = \frac{(\xi - 0)(\xi - 1)}{(0.5 - 0)(0.5 - 1)} = \frac{\xi(\xi - 1)}{(0.5)(-0.5)} = \frac{\xi^2 - \xi}{-0.25} = -4\xi^2 + 4\xi$
$N_3(\xi) = \frac{(\xi - \xi_1)(\xi - \xi_2)}{(\xi_3 - \xi_1)(\xi_3 - \xi_2)} = \frac{(\xi - 0)(\xi - 0.5)}{(1 - 0)(1 - 0.5)} = \frac{\xi(\xi - 0.5)}{(1)(0.5)} = \frac{\xi^2 - 0.5\xi}{0.5} = 2\xi^2 - \xi$
These also match the previously derived quadratic shape functions.

**Reference:** Segerlind, L. J. (2010). *Applied Finite Element Analysis* (2nd ed.). John Wiley & Sons. Chapter 5 covers interpolation functions and Lagrange polynomials. Hutton, D. V. (2009). *Fundamentals of Finite Element Methods* (3rd ed.). McGrawHill Education. Chapter 7 discusses polynomial interpolation.

---

### 4. Learning Outcomes Coverage

*   **LO1: Understand the governing equations of various physical phenomena and basic procedure of FEM.**
    *   The derivation of shape functions is a fundamental step in the FEM procedure. Understanding them is crucial for grasping how FEM approximates solutions to physical phenomena.

*   **LO2: Apply the coordinate transformation and formulation of shape functions of various element.**
    *   This entire topic directly addresses the formulation of shape functions for 1D bar elements. The use of the local coordinate system ($\xi$) is a key aspect of coordinate transformation in FEM.

*   **LO3: Formulate shape functions and element strain displacement matrix of various element.**
    *   This topic covers the formulation of shape functions. The next logical step would be to derive the strain-displacement matrix (B-matrix) using these shape functions, which relates nodal displacements to strains within the element. For a 1D bar, strain $\epsilon = \frac{du}{dx}$. Using the chain rule with $\xi$, $\frac{du}{dx} = \frac{du}{d\xi} \frac{d\xi}{dx}$. Since $\xi = \frac{x-x_i}{L}$, $\frac{d\xi}{dx} = \frac{1}{L}$. So, $\epsilon = \frac{1}{L} \frac{du}{d\xi}$.
    *   For $u(\xi) = N_i(\xi) u_i + N_j(\xi) u_j$, $\frac{du}{d\xi} = \frac{dN_i}{d\xi} u_i + \frac{dN_j}{d\xi} u_j$.
    *   The B-matrix would be $[\frac{dN_i}{d\xi}, \frac{dN_j}{d\xi}] \frac{1}{L}$.

*   **LO4: Evaluate element stress using energy method and study Galekin weight residual formulations.**
    *   Shape functions are the basis for calculating strains, which in turn are used to calculate stresses (using Hooke's Law: $\sigma = E \epsilon$). These are prerequisites for energy methods (like the principle of virtual work) and weighted residual methods (like Galerkin).

*   **LO5: Study the concept of iso parametric elements and analyze iso parametric formulations.**
    *   While this topic focuses on simpler, 'isoparametric' (where the order of interpolation for displacement is the same as the order of mapping for geometry), understanding these basic shape functions is a prerequisite to understanding more complex isoparametric elements used in higher dimensions and for curved geometries.

---

### 5. Alignment with Course Outcomes

*   **CO1 (K2):** Understanding shape functions contributes to the foundational knowledge of FEM procedures.
*   **CO2 (K3):** Direct application of coordinate transformation (local vs. global) and formulation of shape functions.
*   **CO3 (K4):** Formulation of shape functions is explicitly covered. Deriving the B-matrix is the next step from this.
*   **LO4/LO5 (K5/K4):** The derived shape functions are the building blocks for subsequent analysis methods like stress calculation and isoparametric formulations.

---

### 6. Key Points to Remember

*   **Purpose of Shape Functions:** To interpolate the unknown field variable within an element based on nodal values.
*   **Polynomial Order:** The degree of the polynomial used for shape functions depends on the number of nodes and the desired accuracy.
*   **Local Coordinate System ($\xi$):** Simplifies the derivation of shape functions and makes them applicable to elements of any length and position. $\xi \in [0, 1]$ or $\xi \in [-1, 1]$ are common conventions.
*   **Properties of Shape Functions:** Summation to unity and the Kronecker delta property are crucial for ensuring correct behavior (rigid body motion, capturing nodal values).
*   **Lagrange Polynomials:** A systematic method for deriving shape functions for elements with any number of nodes.
*   **Linear vs. Quadratic:** Linear shape functions (2-node element) assume linear displacement variation, while quadratic shape functions (3-node element) assume quadratic variation, offering higher accuracy.

---

### 7. Practice Questions and Exercises

**Question 1:**
Derive the linear shape functions for a 1D bar element of length $L$ using a local coordinate system $\xi \in [-1, 1]$.

**Answer 1:**
Let the element span from $x=-L/2$ to $x=L/2$. The local coordinate $\xi = \frac{x}{L/2} = \frac{2x}{L}$.
At node $i$ (say at $x=-L/2$), $\xi = -1$. At node $j$ (say at $x=L/2$), $\xi = 1$.
The displacement is $u(\xi) = c_0 + c_1 \xi$.

Nodal conditions:
1.  At $\xi = -1$: $u(-1) = u_i \implies u_i = c_0 - c_1$
2.  At $\xi = 1$: $u(1) = u_j \implies u_j = c_0 + c_1$

Solving for $c_0, c_1$:
Adding (1) and (2): $u_i + u_j = 2c_0 \implies c_0 = \frac{u_i + u_j}{2}$
Subtracting (1) from (2): $u_j - u_i = 2c_1 \implies c_1 = \frac{u_j - u_i}{2}$

Substituting back:
$u(\xi) = \frac{u_i + u_j}{2} + \frac{u_j - u_i}{2} \xi$
$u(\xi) = u_i \left(\frac{1}{2} - \frac{\xi}{2}\right) + u_j \left(\frac{1}{2} + \frac{\xi}{2}\right)$
$u(\xi) = u_i \left(\frac{1-\xi}{2}\right) + u_j \left(\frac{1+\xi}{2}\right)$

So the shape functions are:
$N_i(\xi) = \frac{1-\xi}{2}$
$N_j(\xi) = \frac{1+\xi}{2}$

*(Note: This is a common convention for $\xi \in [-1, 1]$ which is often preferred in FEA for symmetry reasons, especially when integrating over the element.)*

**Question 2:**
For a 3-node 1D bar element with nodes at $\xi=0, 0.5, 1$, verify the Kronecker delta property for the derived quadratic shape functions: $N_i(\xi) = 1 - 3\xi + 2\xi^2$, $N_k(\xi) = 4\xi - 4\xi^2$, $N_j(\xi) = -\xi + 2\xi^2$.

**Answer 2:**
We need to check the values of $N_i, N_k, N_j$ at $\xi=0, 0.5, 1$.

*   **At $\xi = 0$ (Node $i$):**
    $N_i(0) = 1 - 3(0) + 2(0)^2 = 1$
    $N_k(0) = 4(0) - 4(0)^2 = 0$
    $N_j(0) = -(0) + 2(0)^2 = 0$
    (Correct: $N_i(0)=1, N_k(0)=0, N_j(0)=0$)

*   **At $\xi = 0.5$ (Node $k$):**
    $N_i(0.5) = 1 - 3(0.5) + 2(0.5)^2 = 1 - 1.5 + 2(0.25) = 1 - 1.5 + 0.5 = 0$
    $N_k(0.5) = 4(0.5) - 4(0.5)^2 = 2 - 4(0.25) = 2 - 1 = 1$
    $N_j(0.5) = -(0.5) + 2(0.5)^2 = -0.5 + 2(0.25) = -0.5 + 0.5 = 0$
    (Correct: $N_i(0.5)=0, N_k(0.5)=1, N_j(0.5)=0$)

*   **At $\xi = 1$ (Node $j$):**
    $N_i(1) = 1 - 3(1) + 2(1)^2 = 1 - 3 + 2 = 0$
    $N_k(1) = 4(1) - 4(1)^2 = 4 - 4 = 0$
    $N_j(1) = -(1) + 2(1)^2 = -1 + 2 = 1$
    (Correct: $N_i(1)=0, N_k(1)=0, N_j(1)=1$)

The Kronecker delta property is verified.

**Question 3:**
Consider a 1D bar element with nodes at $x_1=0$ and $x_2=10$. The nodal displacements are $u_1=0.1$ mm and $u_2=0.5$ mm.
a) Derive the linear shape functions for this element using the $\xi \in [0, 1]$ convention.
b) Calculate the displacement at $x=3$ using the derived shape functions.

**Answer 3:**
a) Using $\xi = \frac{x-x_1}{x_2-x_1} = \frac{x-0}{10-0} = \frac{x}{10}$.
The shape functions are $N_1(\xi) = 1 - \xi$ and $N_2(\xi) = \xi$.
Substituting $\xi = x/10$:
$N_1(x) = 1 - \frac{x}{10}$
$N_2(x) = \frac{x}{10}$

b) At $x=3$, $\xi = \frac{3}{10} = 0.3$.
The displacement is $u(x) = N_1(x) u_1 + N_2(x) u_2$.
$u(3) = N_1(3) u_1 + N_2(3) u_2$
$N_1(3) = 1 - \frac{3}{10} = 0.7$
$N_2(3) = \frac{3}{10} = 0.3$

$u(3) = (0.7)(0.1 \text{ mm}) + (0.3)(0.5 \text{ mm})$
$u(3) = 0.07 \text{ mm} + 0.15 \text{ mm}$
$u(3) = 0.22 \text{ mm}$

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
