---
title: "Convergence requirement of shape functions"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446384a"
status: "completed"
scrapedAt: "2026-05-20T18:03:59.672Z"
---
# FINITE ELEMENT METHODS

## Module 2: Types of Coordinate System in FEM

### Topic: Convergence Requirement of Shape Functions

---

**Learning Outcomes:**

*   Understand the conditions that shape functions must satisfy for convergence in the Finite Element Method.
*   Relate the properties of shape functions to the accuracy and stability of FEM solutions.
*   Identify the implications of violating convergence requirements.

---

**Introduction:**

In the Finite Element Method (FEM), the unknown field variable (e.g., displacement, temperature) within an element is approximated by a combination of nodal values and shape functions. For the FEM solution to accurately approximate the true solution of the underlying differential equation, the shape functions must satisfy certain convergence requirements. These requirements ensure that as the mesh is refined (i.e., elements become smaller), the FEM solution converges to the exact solution.

---

### Key Concepts and Definitions

**1. Shape Functions (Nodal Functions, Interpolation Functions):**

*   **Definition:** Shape functions, denoted by $N_i(\xi, \eta, \zeta)$, are functions that define the variation of the field variable within an element in terms of the nodal values of that variable.
*   **Mathematical Form:** For an element with $p$ nodes, the approximation of the field variable $\phi$ within the element is given by:
    $$ \phi^e(x, y, z) = \sum_{i=1}^{p} N_i(x, y, z) \phi_i $$
    where $\phi_i$ is the value of the field variable at node $i$.
*   **Key Property:** Shape functions are typically defined in a local or natural coordinate system (e.g., $\xi, \eta, \zeta$).

**2. Convergence:**

*   **Definition:** Convergence in FEM refers to the phenomenon where the approximate solution obtained using FEM approaches the exact solution of the governing differential equation as the mesh size ($h$) tends to zero.
*   **Conditions for Convergence:** For convergence, a sequence of finite element solutions must satisfy certain necessary conditions. These are known as the convergence requirements or completeness and continuity requirements.

**3. Completeness Requirement:**

*   **Definition:** An element is considered complete if it can represent *at least* a constant strain state. More generally, for a polynomial approximation of degree $n$, the element must be able to represent any polynomial of degree $n$ in the field variable.
*   **Significance:** If an element cannot represent a constant strain (or the lowest order term that leads to non-zero strain in the governing equations), it will not be able to converge to the correct solution, especially in regions where strains are uniform. For structural problems, this implies the element must be able to represent rigid body motion and constant strain states.
*   **Checking Completeness:** This is usually checked by ensuring that the shape functions can reproduce a constant value for the field variable and its relevant derivatives. For example, in a bar element, completeness requires that the shape functions can represent a constant axial displacement, which implies a constant strain.

**4. Compatibility Requirement (Continuity):**

*   **Definition:** Compatibility requires that the approximate solution constructed from the assembly of finite elements must be continuous across element boundaries. This means that the displacement field (or other field variable) should not have jumps when moving from one element to an adjacent one.
*   **Types of Continuity:**
    *   **C0 Continuity:** Continuity of the field variable itself across inter-element boundaries. This is usually achieved by ensuring that nodal values on shared edges or faces are identical for adjacent elements.
    *   **C1 Continuity:** Continuity of the first derivative of the field variable across inter-element boundaries. This is important for problems involving bending or shear, where second-order derivatives of the field variable appear in the governing equations.
*   **Significance:** If elements are not compatible, the continuity of the assumed solution is violated, leading to non-physical behavior and inaccurate results. For example, in beam elements, C1 continuity is required for the slope.

**5. Convergence Criteria (The Patch Test):**

*   **Definition:** The patch test is a necessary condition for convergence that an element must pass. It verifies that a finite element can reproduce the exact solution for a patch of elements subjected to arbitrary boundary conditions that simulate a constant gradient of the field variable.
*   **Purpose:** The patch test ensures that the element is not "too stiff" or "too weak" and can capture the behavior of the governing equations correctly.
*   **How it Works:** A small patch of elements (typically 2x2 or 3x3) is modeled. The field variable is prescribed at the boundary nodes to represent a constant strain or stress state (e.g., linear displacement variation for plane stress). The FEM analysis is performed, and it is checked if the element stresses or strains are constant and consistent with the applied boundary conditions.
*   **Importance:** If an element fails the patch test, it is likely to produce incorrect results, regardless of mesh refinement.

**6. Sufficiency Conditions for Convergence (LBB Condition / Inf-Sup Condition for Mixed Methods):**

*   While completeness and continuity are *necessary* conditions, they are not always *sufficient*. For certain types of problems, particularly those involving mixed formulations or saddle-point problems (e.g., Stokes flow, plate bending with shear), additional conditions are required for convergence.
*   **LBB (Ladyzhenskaya-Babuška-Brezzi) Condition:** This condition, also known as the inf-sup condition, is crucial for the stability and convergence of mixed finite element methods. It relates the approximation spaces for the primary variable and the Lagrange multiplier.

---

### Why are Convergence Requirements Important?

*   **Accuracy:** Satisfying convergence requirements ensures that the FEM solution approaches the true solution as the mesh is refined.
*   **Stability:** Properly formulated elements with compatible shape functions lead to stable numerical solutions, avoiding oscillations or spurious behavior.
*   **Predictability:** Understanding convergence helps in choosing appropriate element types and mesh strategies to achieve reliable results.

---

### Types of Shape Functions and their Convergence Properties

The choice of interpolation (shape) functions significantly impacts whether an element converges. Common types include:

**1. Lagrange Polynomials:**

*   These are the most common type of shape functions. They are constructed to be unity at one node and zero at all other nodes.
*   **Completeness:** Lagrange elements of degree $n$ are complete up to order $n$.
*   **Continuity:** Standard Lagrange elements are C0 continuous.

    *   **Example (1D Linear Bar Element):**
        *   Nodes: 2
        *   Shape Functions: Linear ($N_1(\xi) = \frac{1-\xi}{2}$, $N_2(\xi) = \frac{1+\xi}{2}$), where $\xi$ is the local coordinate ranging from -1 to 1.
        *   Completeness: Can represent linear displacement, thus constant strain. Passes patch test for constant strain.
        *   Continuity: C0 continuous.

    *   **Example (2D Quadratic Quadrilateral Element):**
        *   Nodes: 8 (4 corner nodes, 4 mid-side nodes)
        *   Shape Functions: Quadratic.
        *   Completeness: Can represent quadratic displacement variation, thus linear strain. Passes patch test.
        *   Continuity: C0 continuous.

**2. Hermite Polynomials (for higher-order continuity):**

*   Used when higher-order continuity (e.g., C1) is required, such as in beam and plate elements.
*   These shape functions interpolate both the nodal value and its derivative(s).
*   **Completeness:** Can be designed to be complete.
*   **Continuity:** Can achieve C1 continuity if constructed properly.

    *   **Example (1D Cubic Hermite Beam Element):**
        *   Nodes: 2 (each node has displacement and slope)
        *   Shape Functions: Cubic. For example, at node 1: $N_1(\xi) = \frac{1}{4}(\xi^3 - 3\xi^2 + 2\xi)$, $N'_1(\xi) = \frac{1}{4}(3\xi^2 - 6\xi + 2)$, etc. (Note: The standard form uses $\xi$ in [-1, 1], and the derivatives are with respect to $\xi$).
        *   Completeness: Can represent cubic displacement, which is sufficient for constant bending moment (linear curvature).
        *   Continuity: C1 continuous (slope is continuous).

**3. Serendipity Elements:**

*   These are elements that use fewer nodes than a full Lagrange element of the same order while achieving similar approximation power. They are often used in 2D and 3D analysis.
*   **Completeness:** Similar completeness to corresponding Lagrange elements.
*   **Continuity:** C0 continuous.

---

### Implications of Violating Convergence Requirements

*   **Mesh Dependence:** The solution might change significantly with mesh refinement, indicating a lack of convergence.
*   **Inaccurate Results:** Even with a fine mesh, the solution may not approach the correct one.
*   **Non-Physical Behavior:** Elements that cannot capture rigid body motion or constant strain states can exhibit spurious stresses or displacements.
*   **Failure of the Patch Test:** A direct indicator that the element is likely to fail convergence.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### Practical Considerations and Textual References

*   **Reddy, J. N. (2009):** Emphasizes the importance of completeness for capturing the lowest-order terms of the governing differential equation. Discusses the strain-displacement matrix ($[B]$) and how its properties are linked to element convergence. Completeness ensures that the $[B]$ matrix can represent constant strain states.
*   **Cook, R. D. (2008):** Focuses on the "free" shape functions that result in rigid body motion and constant strain. Highlights that if an element cannot represent these, it cannot converge. Explains the patch test as a practical verification tool.
*   **Bhavikatti, S. S. (2008):** Provides a clear explanation of the conditions for convergence, including completeness (polynomial order) and compatibility (continuity of the solution field). Details how the selection of interpolation polynomials dictates these properties.
*   **Fish & Belytschko (2007):** Delves into the mathematical underpinnings of convergence, relating it to the approximation properties of the chosen basis functions. Discusses the role of the element stiffness matrix and its conditioning as mesh size decreases.

---

### Summary of Requirements for Convergence

For an element to converge to the true solution as the mesh size ($h$) approaches zero, it must generally satisfy:

1.  **Completeness:** The element must be able to represent, at a minimum, the constant strain states relevant to the problem. This means the displacement field within the element must be able to represent rigid body motion and a state of constant strain.
    *   *For elasticity:* The shape functions must allow for zero strain in rigid body motion and constant strain states.
2.  **Continuity (Compatibility):** The assembled finite element solution must be continuous across inter-element boundaries.
    *   *C0 continuity:* Field variable is continuous.
    *   *C1 continuity:* Field variable and its first derivative are continuous (required for bending elements).
3.  **Patch Test:** The element must pass the patch test, ensuring it can reproduce the exact solution for a patch of elements subjected to a constant gradient.

---

### Practice Questions and Exercises

**Question 1:**

What are the two primary requirements for the convergence of a finite element in FEM? Briefly explain the significance of each.

**Answer:**
The two primary requirements for convergence are:
1.  **Completeness:** The element must be able to represent a constant strain state. This ensures that the element can accurately capture the behavior of the governing equations, especially in regions of uniform stress/strain.
2.  **Continuity (Compatibility):** The assembled solution across element boundaries must be continuous. This ensures the physical integrity of the approximated field (e.g., displacement).

---

**Question 2:**

Consider a linear bar element subjected to axial forces. Explain how the shape functions for this element satisfy the completeness requirement.

**Answer:**
A linear bar element uses linear shape functions:
$N_1(\xi) = \frac{1-\xi}{2}$ and $N_2(\xi) = \frac{1+\xi}{2}$, where $\xi$ is the local coordinate.
The displacement within the element is approximated as $u(\xi) = N_1(\xi)u_1 + N_2(\xi)u_2$.
The strain is $\epsilon = \frac{du}{dx}$. Using the chain rule, $\frac{du}{dx} = \frac{du}{d\xi} \frac{d\xi}{dx}$.
Since $x = L\xi/2$, $dx = L d\xi/2$, so $d\xi/dx = 2/L$.
Therefore, $\epsilon = \frac{1}{L}\frac{du}{d\xi}$.
$\frac{du}{d\xi} = N'_1(\xi)u_1 + N'_2(\xi)u_2 = (-\frac{1}{2})u_1 + (\frac{1}{2})u_2$.
This shows that the strain is proportional to $(u_2 - u_1)/L$, which is a constant value. Thus, the linear shape functions allow the element to represent a constant strain state, satisfying the completeness requirement. It also implicitly handles rigid body motion (when $u_1 = u_2$).

---

**Question 3:**

Why is C1 continuity often required for beam elements, and what type of shape functions are typically used to achieve this?

**Answer:**
Beam elements involve bending, and the governing equation for beam bending typically involves the second derivative of displacement (e.g., related to curvature). To accurately represent the bending behavior and ensure convergence, the slope of the displacement must be continuous across element boundaries. This is known as C1 continuity. Standard Lagrange polynomials only provide C0 continuity. To achieve C1 continuity, Hermite polynomial shape functions are typically used. These functions interpolate both nodal displacements and nodal slopes.

---

**Question 4:**

True or False: An element that satisfies completeness and continuity requirements is guaranteed to converge.

**Answer:**
False. While completeness and continuity are necessary conditions, they are not always sufficient. For some problems, especially mixed formulations, additional conditions like the LBB condition are required for convergence. The patch test is a strong indicator, but not an absolute guarantee for all cases.

---

**Question 5:**

Describe the patch test and its significance in ensuring element convergence.

**Answer:**
The patch test is a crucial check for finite element convergence. It involves modeling a small patch of elements (e.g., 2x2 or 3x3) and subjecting them to boundary conditions that represent a state of constant strain or stress (e.g., linear displacement distribution). The FEM analysis is performed, and the results (strains/stresses) are examined.
Significance: If the element can accurately reproduce this constant strain state across all elements in the patch, it is considered to have passed the test. Passing the patch test is a strong indication that the element will converge to the correct solution as the mesh is refined. Failing the patch test suggests that the element may exhibit pathological behavior and will likely not converge properly, regardless of mesh refinement.

---

**Important Points to Remember:**

*   Convergence ensures that FEM solutions approach the exact solution as mesh size decreases.
*   **Completeness** (representing constant strain states) and **Continuity** (no jumps in the field variable) are fundamental requirements.
*   Higher-order polynomials generally provide better completeness but can be more computationally expensive and may require higher-order continuity.
*   Hermite polynomials are used for C1 continuity (e.g., beam elements), while Lagrange polynomials provide C0 continuity.
*   The **patch test** is a practical and essential tool to verify if an element formulation is likely to converge.
*   Failure to meet convergence requirements leads to inaccurate, mesh-dependent, and potentially non-physical results.

---