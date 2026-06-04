---
title: "Convergence requirement of shape functions"
subject: "FINITE ELEMENT METHODS"
module: "Module 2: Types of coordinate system in FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464297"
status: "completed"
scrapedAt: "2026-05-20T18:12:57.951Z"
---
# Finite Element Methods: Module 2 - Types of Coordinate Systems in FEM

## Topic: Convergence Requirement of Shape Functions

**Course Outcomes Addressed:**

*   **CO2:** To apply the coordinate transformation and formulation of shape functions of various element. (Knowledge Level: K3)
*   **CO3:** Formulate shape functions and element strain displacement matrix of various element (Knowledge Level: K4)

**Learning Outcomes Covered:**

*   Understanding the concept of convergence in FEM.
*   Identifying and explaining the conditions that shape functions must satisfy for convergence.
*   Relating shape function properties to the accuracy and stability of FEM solutions.

---

### 1. Introduction to Convergence in FEM

**Key Concept:** Convergence in the Finite Element Method (FEM) refers to the ability of the approximate solution obtained by FEM to approach the exact solution of the governing differential equation as the mesh is refined (i.e., the element size decreases).

**Why is Convergence Important?**

*   **Accuracy:** As the mesh is refined, the FEM solution should ideally converge to the true physical behavior of the system.
*   **Reliability:** Ensuring convergence guarantees that the FEM results are meaningful and not artifacts of the discretization process.
*   **Predictability:** Understanding convergence helps in selecting appropriate elements and mesh densities to achieve desired accuracy.

---

### 2. The Mathematical Foundation: Convergence Theorems

**Key Concept:** The convergence of FEM solutions is formally established through mathematical theorems. The most significant is the **Babuška-Lax Theorem**.

**Babuška-Lax Theorem (Simplified Explanation):** This theorem states that for a convergent FEM scheme, the solution obtained from the FEM approximation must satisfy two fundamental properties:

1.  **Consistency:** The FEM formulation must be consistent with the original differential equation. This means that as the element size approaches zero, the FEM formulation should accurately represent the governing physics.
2.  **Stability:** The FEM solution must be stable, meaning that small perturbations in the input data or discretization should not lead to unbounded errors in the solution.

**Reference:** Reddy, J. N. (2009). *An Introduction to Finite Element Method* (3rd ed.). McGrawHillEducation. (Chapter 5 discusses convergence and error estimation).
Cook, R. D. (2008). *Concepts and Applications of Finite Element Method* (3rd ed.). Wiley. (Chapter 7 covers convergence criteria).

---

### 3. Essential Requirements for Shape Functions for Convergence

**Key Concept:** For the FEM solution to converge to the exact solution, the shape functions (also known as basis functions or interpolation functions) used to approximate the displacement, temperature, or other field variables within an element must satisfy certain conditions. These conditions ensure both consistency and stability.

These requirements are often referred to as the **"patch test"** conditions when applied implicitly.

#### 3.1. Completeness

**Definition:** A set of shape functions is considered **complete** if they can represent any polynomial of degree up to *p* within the element.

**Why is it Important?**

*   **Consistency:** If the exact solution is a polynomial of degree *p*, complete shape functions can represent it exactly within an element. This is crucial for consistency, as it allows the FEM formulation to accurately capture the behavior of simpler solution forms.
*   **Local Accuracy:** Completeness ensures that the local behavior within each element can be represented accurately.

**Requirements for Completeness:**

*   **For 1D elements:** The shape functions should be able to represent any linear polynomial (i.e., $a + bx$). This requires at least two nodes, and the shape functions should be linear.
*   **For 2D elements (e.g., triangles, quadrilaterals):**
    *   **Linear elements (e.g., constant strain triangles):** Shape functions should be able to represent linear polynomials ($a + bx + cy$).
    *   **Quadratic elements (e.g., serendipity quadrilaterals):** Shape functions should be able to represent quadratic polynomials ($a + bx + cy + dx^2 + exy + fy^2$).
*   **For 3D elements:** Similar polynomial completeness requirements apply.

**Example:**

Consider a 1D linear element with nodes at $x_1$ and $x_2$. The linear shape functions are:
$N_1(x) = \frac{x - x_2}{x_1 - x_2}$
$N_2(x) = \frac{x - x_1}{x_2 - x_1}$

These functions are linear and can represent any polynomial of degree 1 ($a + bx$). Thus, they satisfy completeness for linear polynomials.

**Reference:** Bhavikatti, S. S. (2008). *Finite Element Analysis* (3rd ed.). New Age Publisher. (Chapter 4 discusses completeness of shape functions).

#### 3.2. Continuity (Conformity)

**Definition:** Continuity refers to the smoothness of the approximation across element boundaries. For convergence, the overall solution must be continuous across the interfaces of adjacent elements.

**Types of Continuity:**

*   **C⁰ Continuity:** The displacement field (or the primary variable) is continuous across element boundaries. This means that at the shared nodes between elements, the displacements from both elements must be the same. This is the minimum requirement for most structural and solid mechanics problems.
*   **C¹ Continuity:** The first derivatives of the displacement field (e.g., slope or rotation) are also continuous across element boundaries. This is required for elements that involve shear deformation or bending, where higher-order continuity is needed to avoid spurious results.

**Why is it Important?**

*   **Physical Realism:** In many physical problems, the primary variable (like displacement) cannot have arbitrary jumps across material interfaces. C⁰ continuity ensures this physical realism.
*   **Stability:** Discontinuous solutions can lead to numerical instabilities.
*   **Accuracy:** For problems involving gradients of the primary variable (like stress or strain), higher continuity can lead to more accurate results.

**How is it Achieved?**

*   **Continuity of Primary Variable (C⁰):** This is typically achieved by ensuring that the shape functions have the same value at shared nodes between adjacent elements. This is naturally satisfied when using nodal degrees of freedom (DOFs) that represent the primary variable directly.
*   **Continuity of Derivatives (C¹):** This is more challenging and often requires using higher-order polynomials and/or specific element formulations (e.g., Hermite polynomials, spline-based elements, or specific beam/plate elements).

**Example:**

Consider two 1D elements sharing a node at $x_i$.
Element 1: Approximation $u^{(1)}(x) = \sum_{j} N_j^{(1)}(x) d_j$
Element 2: Approximation $u^{(2)}(x) = \sum_{k} N_k^{(2)}(x) d_k$

For C⁰ continuity at $x_i$, we require $u^{(1)}(x_i) = u^{(2)}(x_i)$. If $d_i$ is a DOF associated with node $x_i$ shared by both elements, and $N_i^{(1)}(x_i) = 1$ and $N_i^{(2)}(x_i) = 1$ (and other shape functions at $x_i$ are zero for their respective elements), then continuity is satisfied.

**Reference:** Fish, J., & Belytschko, T. (2007). *A First Course in Finite Elements* (2nd ed.). John Wiley & Sons, Ltd. (Chapter 3 discusses continuity requirements for different element types).
Segerlind, L. J. (2010). *Applied Finite Element Analysis* (2nd ed.). John Wiley and Sons. (Chapter 4 delves into shape function continuity).

#### 3.3. Sub-parametric, Isoparametric, and Super-parametric (Relating to Coordinate Systems)

**Key Concept:** The term "parametric" refers to how the element geometry and the field variable within the element are represented using nodal values and shape functions.

*   **Sub-parametric:** The shape functions used to approximate the geometry are of a lower order than those used to approximate the field variable.
*   **Isoparametric:** The shape functions used to approximate the geometry and the field variable are of the *same* order. This is the most common approach in modern FEM.
*   **Super-parametric:** The shape functions used to approximate the geometry are of a higher order than those used to approximate the field variable.

**Why is this Relevant to Convergence?**

*   **Geometric Accuracy:** Isoparametric elements allow for the representation of curved boundaries using the same set of shape functions that interpolate the field variable. This is crucial for accurately modeling complex geometries, which is a prerequisite for achieving accurate solutions.
*   **Consistency and Stability:** The choice of parametric formulation can influence the completeness and continuity properties of the overall element formulation, impacting convergence. For example, higher-order isoparametric elements can achieve higher polynomial completeness.

**Example:**

Consider a 2D isoparametric quadrilateral element.
*   **Geometry:** The coordinates $(x, y)$ within the element are interpolated using the same shape functions $N_i$ and nodal coordinates $(x_i, y_i)$:
    $x(\xi, \eta) = \sum_{i=1}^n N_i(\xi, \eta) x_i$
    $y(\xi, \eta) = \sum_{i=1}^n N_i(\xi, \eta) y_i$
*   **Field Variable:** The displacement component $u$ is also interpolated using the same shape functions $N_i$ and nodal displacements $u_i$:
    $u(\xi, \eta) = \sum_{i=1}^n N_i(\xi, \eta) u_i$

Here, $n$ is the number of nodes, and $(\xi, \eta)$ are the natural (or parent) coordinates.

**Reference:** Ramamurthi, G. (2009). *Applied Finite Element Analysis* (2nd ed.). I K International Publishing House Pvt. Ltd. (Chapter 7 discusses isoparametric concepts and their relation to accuracy).
Hutton, D. V. (2009). *Fundamentals of Finite Element Methods* (3rd ed.). McGrawHillEducation. (Chapter 6 covers isoparametric formulations).

---

### 4. The Patch Test: A Practical Check for Convergence

**Key Concept:** The patch test is a crucial practical criterion used to verify if an element formulation is likely to converge. It tests whether an element can accurately reproduce a constant strain/stress state, which is a simple but important solution to many governing differential equations.

**How it Works:**

1.  A "patch" of elements (typically 9 elements forming a $3 \times 3$ grid) is created.
2.  A simple loading condition is applied that should ideally result in a constant strain or stress state within the patch (e.g., uniaxial tension, pure shear).
3.  The FEM solution is computed for this patch.
4.  **Pass:** If the FEM solution within each element of the patch reproduces this constant strain/stress state exactly, the element formulation is considered to have passed the patch test.
5.  **Fail:** If the FEM solution contains non-constant strains/stresses within the elements, the element formulation fails the patch test.

**Why is the Patch Test Important?**

*   **Detects Spurious Errors:** Elements that fail the patch test often introduce artificial stiffness or zero-energy modes, leading to inaccurate or unstable solutions.
*   **Guarantees Convergence (for linear problems):** If an element passes the patch test, it is guaranteed to converge to the correct solution for linear problems as the mesh is refined.

**Types of Patch Tests:**

*   **Constant Strain Test:** Checks if linear elements can reproduce a constant strain state.
*   **Constant Stress Test:** Checks if higher-order elements can reproduce a constant stress state.

**Reference:** Reddy, J. N. (2009). *An Introduction to Finite Element Method* (3rd ed.). McGrawHillEducation. (Chapter 5 provides a detailed explanation of the patch test).
Cook, R. D. (2008). *Concepts and Applications of Finite Element Method* (3rd ed.). Wiley. (Chapter 7 discusses the patch test in the context of convergence).

---

### 5. Summary of Shape Function Requirements for Convergence

To ensure that a Finite Element Method formulation leads to a convergent solution, the shape functions must generally satisfy:

*   **Completeness:** The ability to represent polynomial variations of the solution up to a certain degree.
*   **Continuity:** Ensuring that the solution (and sometimes its derivatives) is continuous across element boundaries. At a minimum, C⁰ continuity is required for most problems.
*   **Conformity:** In addition to continuity, conformity refers to satisfying boundary conditions. Shape functions should be able to accurately represent the behavior on the boundaries of the domain.
*   **Support for Isoparametric Mapping:** For complex geometries, isoparametric formulations are essential for accurately mapping the element geometry.

---

### 6. Important Points to Remember

*   **Convergence is Key:** Without convergence, FEM results are unreliable.
*   **Completeness and Continuity are Fundamental:** These are the core mathematical requirements for shape functions.
*   **Patch Test is a Practical Indicator:** Passing the patch test is a strong indicator of potential convergence, especially for linear problems.
*   **Element Order Matters:** Higher-order elements generally offer better completeness and can achieve higher accuracy with fewer elements, but they come with increased computational cost.
*   **Problem Type Dictates Requirements:** The specific physics of the problem (e.g., elasticity, heat transfer, fluid dynamics) and the nature of the governing equations dictate the required level of continuity and completeness. For instance, bending problems often require C¹ continuity.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain why completeness of shape functions is a necessary condition for convergence in FEM. Provide an example of a shape function set that is complete for linear polynomials in 1D.

**Answer:**
Completeness ensures that the FEM formulation can accurately represent polynomial solutions up to a certain degree. This is crucial for consistency, as it allows the FEM approximation to match the behavior of simple exact solutions. For example, if the exact solution is a linear function, complete linear shape functions can represent it exactly within an element. A set of complete linear shape functions in 1D are the linear interpolation functions for a 2-node element: $N_1(x) = (1-x/L)$ and $N_2(x) = x/L$, where $L$ is the element length.

**Question 2:**
What is the difference between C⁰ and C¹ continuity for shape functions? In which types of problems is C¹ continuity typically required?

**Answer:**
C⁰ continuity means that the primary variable (e.g., displacement) is continuous across element boundaries. C¹ continuity means that both the primary variable and its first derivative (e.g., slope) are continuous. C¹ continuity is typically required for problems involving bending or shear, such as plate bending or beam analysis, where the behavior of the slope or curvature significantly influences the solution.

**Question 3:**
Describe the patch test. Why is it considered a practical way to assess the convergence of an element formulation?

**Answer:**
The patch test involves discretizing a region with multiple elements and applying a simple load case that should result in a uniform strain or stress field. If the FEM solution accurately reproduces this uniform field across all elements in the patch, the element formulation passes the test. It's practical because passing the patch test is a strong indicator that the element will converge to the correct solution for linear problems, as it verifies the element's ability to capture basic deformation modes without introducing spurious errors.

**Question 4:**
Consider a 4-node quadrilateral element. What is the implication if this element is formulated as isoparametric? What if it were sub-parametric?

**Answer:**
If a 4-node quadrilateral element is formulated as isoparametric, the same linear shape functions used to interpolate the displacement field are also used to define the element's geometry (its corners and sides). This allows for the representation of curved sides. If it were sub-parametric, the geometry would be interpolated using lower-order shape functions (e.g., linear), while the displacement would still be interpolated using linear shape functions. This would mean that even with linear shape functions for displacement, the element could not accurately represent curved boundaries, limiting its geometric accuracy.

**Question 5:**
List the key requirements for shape functions to ensure convergence in FEM.

**Answer:**
The key requirements for shape functions to ensure convergence are:
1.  **Completeness:** Ability to represent polynomials of degree $p$.
2.  **Continuity (Conformity):** Continuity of the primary variable (C⁰) and sometimes its derivatives (C¹, C², etc.) across element boundaries.
3.  **Correct Degree of Freedom:** The number and type of DOFs must be sufficient for the problem.
4.  **Support for Geometric Mapping:** Especially in isoparametric formulations, the shape functions must accurately map the element geometry.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
