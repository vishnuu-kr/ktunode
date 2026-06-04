---
title: "discretization-convergence behavior"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446383f"
status: "completed"
scrapedAt: "2026-05-20T18:03:52.617Z"
---
# FINITE ELEMENT METHODS

## Module 1: Introduction FEM

### Topic: Discretization - Convergence Behavior

---

This topic explores how the Finite Element Method (FEM) breaks down a continuous problem into smaller, manageable pieces (discretization) and how the accuracy of the solution improves as these pieces become finer (convergence).

---

### Learning Outcomes:

*   **Understanding the basic procedure of FEM:** This section will introduce the fundamental steps of FEM, emphasizing discretization as a core component. (Aligns with CO1: K2)
*   **Appreciating the role of discretization in FEM:** How dividing the domain impacts the solution process and its accuracy.
*   **Defining and explaining convergence in FEM:** Understanding what it means for an FEM solution to converge to the true solution.
*   **Identifying factors influencing convergence:** What makes a discretization "good" or "bad" in terms of convergence.
*   **Understanding the relationship between element size, shape, and convergence:** How the characteristics of the individual elements affect the overall accuracy.

---

### 1. Introduction to Discretization in FEM

#### 1.1 What is Discretization?

Discretization is the process of dividing a continuous physical domain (the problem area) into a finite number of smaller, simpler subdomains called **finite elements**. These elements are connected at specific points called **nodes**.

**Key Concepts:**

*   **Domain ($\Omega$):** The physical region where the problem is defined (e.g., a beam, a plate, a fluid flow region).
*   **Finite Element:** A small, geometrically simple subdomain within the larger domain. Common shapes include triangles, quadrilaterals, tetrahedrons, and hexahedrons.
*   **Nodes:** Points at which elements are connected and where the unknown primary variable (e.g., displacement, temperature) is approximated.
*   **Mesh:** The collection of all finite elements and nodes that discretize the domain.

**Why Discretize?**

*   **Analytic Solutions are Rare:** Most real-world engineering problems cannot be solved analytically (with exact mathematical formulas) due to complex geometries, boundary conditions, and material properties.
*   **FEM Works with Approximations:** FEM provides a systematic way to obtain approximate solutions by simplifying the problem into a set of algebraic equations.
*   **Computational Tractability:** Computers can solve large systems of algebraic equations, but not continuous differential equations directly over complex domains.

**Example (Reddy, Chapter 1):**
Consider a simple one-dimensional bar under tension. An analytical solution might be straightforward. However, if the bar has a varying cross-section or complex loading, FEM would discretize the bar into smaller segments (1D elements). The displacement at each node along the bar would be the unknown variable.

#### 1.2 The FEM Procedure (Overview relevant to Discretization)

1.  **Discretization:** Divide the domain into finite elements.
2.  **Element Formulation:** Define the mathematical relationships (e.g., strain-displacement, stress-strain) within each element using approximation functions (shape functions).
3.  **Assembly:** Combine the element formulations into a global system of equations that represents the entire domain.
4.  **Application of Boundary Conditions:** Incorporate known values of the primary variable or its derivatives at the boundaries.
5.  **Solution:** Solve the system of algebraic equations to find the nodal values of the primary variable.
6.  **Post-processing:** Calculate other quantities of interest (e.g., stresses, strains) from the nodal solution.

**Focus on Discretization:** The quality of the mesh (how elements are shaped and sized) directly impacts the accuracy of the solution obtained in step 5 and subsequently in step 6.

---

### 2. Convergence Behavior

#### 2.1 What is Convergence?

In FEM, convergence refers to the process by which the approximate solution obtained from the finite element method approaches the true (exact) solution of the governing differential equation as the mesh is refined.

**Key Concepts:**

*   **Refinement:** Making the finite elements smaller or improving their quality (e.g., using higher-order shape functions).
*   **Mesh Refinement:** Typically achieved by reducing the characteristic element size (e.g., average element edge length, maximum element edge length).
*   **Convergence Criteria:** Mathematical conditions that must be satisfied for the FEM solution to converge to the true solution.

#### 2.2 Essential Ingredients for Convergence

For an FEM solution to converge, the discretization and the approximation (shape functions) must satisfy certain conditions. These are often summarized by the **patch test** and theoretical requirements related to completeness and continuity.

**1. Completeness:**

*   The approximation functions (shape functions) within each element must be able to represent **rigid body motion** and **uniform strain/stress** states.
*   For a polynomial approximation of degree $p$, the element must be able to represent any polynomial of degree up to $p$. This ensures that constant gradients can be captured accurately.
*   **Why it matters:** If an element cannot represent uniform stress, for example, it will introduce artificial strains and errors, preventing convergence.

**(Bhavikatti, Chapter 2):** Discusses the importance of completeness for low-order polynomial approximations. For instance, linear shape functions can represent constant strain.

**2. Continuity (Conformity):**

*   The assembled solution across the entire domain must be **continuous** in the primary variable and satisfy certain continuity requirements for its derivatives.
*   **C0 continuity:** The primary variable (e.g., displacement, temperature) must be continuous across element boundaries. This is essential for most structural and heat transfer problems.
*   **C1 continuity:** The first derivative of the primary variable must be continuous. This is required for problems involving bending (e.g., Kirchhoff plate elements).
*   **Why it matters:** Discontinuities in the solution or its derivatives represent errors and prevent the FEM solution from approaching the true, continuous solution.

**(Reddy, Chapter 3; Fish & Belytschko, Chapter 4):** Elaborate on different types of continuity requirements (e.g., for beam and plate elements) and how they are achieved through the choice of shape functions.

**3. Completeness of the Mesh:**

*   As the mesh is refined, the maximum dimension of any element should tend to zero. This ensures that the entire domain is eventually represented by infinitesimally small elements.

#### 2.3 Convergence Criteria (Theoretical Basis)

For a convergent FEM formulation, the error in the approximate solution decreases as the mesh is refined. The error is typically measured as the difference between the true solution ($u$) and the FEM solution ($u_h$).

*   **$L_2$ norm error:** $\|u - u_h\|_{L_2(\Omega)} \le C h^{p+1}$
*   **$H_1$ norm error:** $\|u - u_h\|_{H_1(\Omega)} \le C h^{p}$

Where:
*   $h$ is a measure of the element size (e.g., maximum element diameter).
*   $p$ is the order of the polynomial used in the shape functions.
*   $C$ is a constant independent of $h$.

**Interpretation:**
*   The error decreases as $h \to 0$.
*   Higher-order polynomials ($p$) lead to faster convergence (the error decreases more rapidly as $h$ decreases).

**(Segerlind, Chapter 5; Hutton, Chapter 4):** Provide more detailed mathematical derivations of these error bounds and their implications for element selection and mesh refinement.

#### 2.4 The Patch Test

The patch test is a crucial practical test to ensure that an element formulation is convergent. It checks if an element can reproduce the exact solution for a patch of elements subjected to a constant strain or stress field.

**Procedure:**

1.  Create a patch of identical finite elements (typically 2x2 or 3x3).
2.  Apply boundary conditions corresponding to a known simple solution (e.g., linear displacement field, constant stress field).
3.  Run the FEM analysis on this patch.
4.  Compare the FEM results with the exact solution.

**Pass:** If the FEM solution exactly matches the analytical solution within the patch, the element formulation is considered convergent.
**Fail:** If there are significant errors, the element formulation is likely not convergent.

**Why it works:** This test verifies the element's ability to capture rigid body motion and uniform strain states, which are fundamental for convergence.

**(Cook, Chapter 7; Bhavikatti, Chapter 2):** Explain the concept and importance of the patch test, often demonstrating how ill-posed elements fail it.

#### 2.5 Factors Affecting Convergence

*   **Element Size ($h$):** Smaller elements generally lead to better accuracy. The error decreases with powers of $h$ (as seen in the convergence criteria).
*   **Element Shape:**
    *   **Aspect Ratio:** Highly distorted or "skewed" elements (with large aspect ratios) can significantly reduce accuracy and lead to slower convergence. Equilateral or regular shapes are generally preferred.
    *   **Curvature:** For problems with curved boundaries or stress concentrations, curved elements (isoparametric elements) often provide better results with fewer elements compared to linear elements.
*   **Element Order (Degree of Shape Functions):** Higher-order polynomial approximations generally lead to faster convergence but increase computational cost per element.
*   **Mesh Density:** A higher density of elements (finer mesh) usually leads to better accuracy.
*   **Boundary Conditions:** Accurately representing boundary conditions is crucial. Singularities (sharp corners, point loads) might require mesh refinement in those specific areas.
*   **Nature of the Solution:** Problems with steep gradients in the solution (e.g., near stress concentrations) require finer meshes in those regions to capture the behavior accurately.

#### 2.6 Convergence Behavior with Mesh Refinement

*   **h-refinement:** Reducing the size of elements (keeping the polynomial order the same). This is the most common method.
*   **p-refinement:** Increasing the polynomial order of the shape functions within elements (keeping element size the same).
*   **hp-refinement:** Combining both h-refinement and p-refinement.

**Observation:**
As the mesh is refined (h decreases), the error in the FEM solution decreases. The rate of decrease depends on the order of the polynomial used in the shape functions.

**Example:**
Imagine analyzing a beam with a uniform load.
*   **Mesh 1 (Coarse):** A few large elements. The predicted deflection might be significantly off.
*   **Mesh 2 (Finer):** More, smaller elements. The deflection prediction improves.
*   **Mesh 3 (Very Fine):** Even smaller elements. The deflection prediction gets closer to the analytical solution.

**(Reddy, Chapter 1; Fish & Belytschko, Chapter 3):** Illustrate these concepts with numerical examples and convergence plots.

---

### 3. Practical Considerations and Examples

#### 3.1 Mesh Quality

Good mesh quality is essential for reliable results. Tools and techniques exist to assess and improve mesh quality, such as:

*   **Aspect Ratio:** Ratio of the longest edge to the shortest edge of an element. Aim for ratios close to 1.
*   **Skewness:** Measures how far an element deviates from being "ideal" (e.g., equilateral for triangles).
*   **Jacobian Ratio:** For isoparametric elements, the ratio of the maximum to minimum singular values of the Jacobian matrix.

**(Cook, Chapter 7):** Provides practical advice on mesh generation and quality checks.

#### 3.2 Convergence Studies

A crucial step in FEM analysis is to perform a convergence study. This involves:

1.  Starting with a relatively coarse mesh.
2.  Performing the analysis and obtaining a solution.
3.  Refining the mesh (e.g., doubling the number of elements or halving the element size).
4.  Performing the analysis again and obtaining a new solution.
5.  Comparing the results (e.g., maximum stress, maximum displacement).
6.  Repeating steps 3-5 until the solution converges (i.e., further refinement causes only negligible changes in the results).

**Example:** A cantilever beam with a point load at the free end.
*   Analyze with a mesh of 10 elements. Note the tip deflection.
*   Analyze with a mesh of 20 elements. Compare the tip deflection.
*   Analyze with a mesh of 40 elements. Observe how the tip deflection stabilizes.

**Why it's important:** Ensures that the results are not overly dependent on the initial mesh and are approaching a stable, accurate solution.

#### 3.3 Element Types and Convergence

*   **Linear Elements (e.g., 2-node truss, 3-node triangle):** Simpler to formulate but require finer meshes for accuracy, especially for bending or problems with high gradients.
*   **Quadratic Elements (e.g., 3-node truss, 6-node triangle):** Higher order, capture behavior more accurately with fewer elements, leading to faster convergence.
*   **Isoparametric Elements:** Can represent curved boundaries and complex geometries, improving accuracy and efficiency.

**(Fish & Belytschko, Chapter 4; Reddy, Chapter 3):** Discuss the characteristics and convergence properties of various element types, including isoparametric elements.

---

### 4. Important Points to Remember

*   **Discretization is fundamental:** It's how FEM tackles continuous problems.
*   **Convergence is key:** Ensures the FEM solution is reliable and approaches the true solution.
*   **Completeness and Continuity:** Essential theoretical requirements for convergent elements.
*   **Patch Test:** A practical tool to verify element convergence.
*   **Mesh Refinement:** Reducing element size (h-refinement) or increasing polynomial order (p-refinement) improves accuracy.
*   **Convergence Studies:** Always perform them to validate your FEM results.
*   **Element Quality Matters:** Avoid highly distorted elements.
*   **Higher-order elements:** Generally converge faster but are computationally more expensive per element.

---

### 5. Practice Questions/Exercises

**Question 1:**
What are the two main theoretical requirements that an element formulation must satisfy to ensure convergence in FEM? Briefly explain each.

**Answer:**
1.  **Completeness:** The element's shape functions must be able to represent rigid body motion and uniform strain/stress states. This means if the true solution has a constant gradient, the element must be able to capture it exactly.
2.  **Continuity (Conformity):** The assembled solution must be continuous across element boundaries. For many problems (like structural analysis), this means the primary variable (e.g., displacement) must be continuous across interfaces.

**Question 2:**
Describe the process of performing a convergence study for a static structural analysis problem. Why is it important?

**Answer:**
A convergence study involves:
1.  Solving the problem with an initial coarse mesh.
2.  Refining the mesh (e.g., by halving the element size or increasing element density).
3.  Solving the problem again with the refined mesh.
4.  Comparing key results (e.g., maximum displacement, maximum stress) between the analyses.
5.  Repeating steps 2-4 until the results stabilize (further refinement produces negligible changes).

It is important because it ensures that the obtained FEM solution is not overly sensitive to the initial mesh discretization and that it has converged to a reliable, accurate approximation of the true solution. It validates the mesh and the element formulation used.

**Question 3:**
Consider a 1D bar element with linear shape functions. What is the highest order of polynomial strain this element can accurately represent? (Hint: Strain is related to the first derivative of displacement).

**Answer:**
Linear shape functions for a 1D bar element approximate displacement $u(x)$ as a linear polynomial: $u(x) = ax + b$.
Strain ($\epsilon$) is proportional to the derivative of displacement: $\epsilon \propto \frac{du}{dx}$.
Taking the derivative: $\frac{du}{dx} = a$, which is a constant.
Therefore, a 1D bar element with linear shape functions can accurately represent a **constant strain** state (a polynomial of degree 0).

**Question 4:**
Explain why distorted elements (e.g., with a high aspect ratio) can lead to slower convergence or reduced accuracy in FEM.

**Answer:**
Distorted elements can:
*   **Poorly approximate the geometry:** If the element shape deviates significantly from an "ideal" shape (like equilateral), it might not accurately represent the underlying physical behavior within that element.
*   **Introduce artificial stiffness or flexibility:** The mathematical formulation of the element might behave as if it's stiffer or more flexible than it should be, leading to errors in calculated strains and stresses.
*   **Violate completeness conditions implicitly:** While the shape functions might be complete mathematically, their application within a severely distorted geometry might not effectively capture uniform states of stress or strain, hindering convergence.
*   **Require finer meshes:** To achieve the same level of accuracy as with well-shaped elements, a significantly finer mesh with distorted elements would be needed, increasing computational cost.

**Question 5:**
If you are analyzing a problem with a stress concentration, where would you primarily focus your mesh refinement efforts to achieve efficient convergence?

**Answer:**
Mesh refinement should be concentrated in the region of the **stress concentration**. This area typically exhibits steep gradients in stress and strain. By using smaller elements in these critical regions, the FEM can more accurately capture the localized behavior and prevent errors from propagating throughout the domain.

---

This concludes the notes on Discretization and Convergence Behavior. This foundational understanding is crucial for applying FEM effectively and interpreting its results accurately.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
