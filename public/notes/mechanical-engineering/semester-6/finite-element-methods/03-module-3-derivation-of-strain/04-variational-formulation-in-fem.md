---
title: "Variational formulation in FEM"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463851"
status: "completed"
scrapedAt: "2026-05-20T18:04:04.035Z"
---
# Finite Element Methods: Module 3 - Derivation of Strain

## Topic: Variational Formulation in FEM

This module delves into the variational formulation of the Finite Element Method (FEM), a powerful technique for solving boundary value problems in engineering and physics. We will explore how the principle of minimum potential energy and other variational principles are used to derive the governing equations of FEM. This forms the foundation for discretizing complex problems into simpler finite elements.

### Learning Outcomes:

*   **Understand the fundamental principles of variational calculus and its application in formulating FEM.** (K2 - Knowledge Level)
*   **Derive weak forms of governing differential equations using variational principles.** (K3 - Knowledge Level)
*   **Relate variational formulations to physical concepts like energy minimization.** (K3 - Knowledge Level)
*   **Understand the connection between variational formulations and the discretization process in FEM.** (K2 - Knowledge Level)

---

### Course Outcomes Alignment:

*   **CO1: To understand the governing equations of various physical phenomena and basic procedure of FEM. (Knowledge Level: K2)**
    *   This topic directly addresses CO1 by explaining how variational principles are used to derive the fundamental equations that govern physical phenomena (e.g., elasticity, heat transfer). It also introduces a core concept in the basic procedure of FEM.
*   **CO3: Formulate shape functions and element strain displacement matrix of various element (Knowledge Level: K4)**
    *   While this topic primarily focuses on the formulation of the *global* equations, the underlying principles of variational formulation are essential for understanding how element-level stiffness matrices and load vectors are derived, which are direct precursors to deriving strain-displacement matrices.
*   **CO4: Evaluate element stress using energy method and study Galekin weight residual formulations (Knowledge Level: K5)**
    *   Variational formulations, particularly the principle of minimum potential energy, are directly linked to the energy method for evaluating element stresses. This topic sets the stage for understanding how energy principles are applied. It also provides a contrast to other methods like weighted residual methods, which will be covered later.

---

### 1. Introduction to Variational Formulation

Many physical phenomena are described by differential equations, often called "strong forms." For example, in elasticity, the equilibrium equations are a strong form. However, directly solving these strong forms can be challenging, especially for complex geometries and boundary conditions.

Variational formulations offer an alternative approach. Instead of directly solving differential equations, they reformulate the problem in terms of minimizing or extremizing a certain functional (often representing energy). This leads to a "weak form" of the problem, which is generally easier to handle in a numerical context.

**Key Concepts:**

*   **Differential Equation (Strong Form):** An equation involving derivatives that must hold true at every point in the domain.
*   **Functional:** A quantity that maps a function to a scalar value. For example, an integral of a function of another function.
*   **Variational Calculus:** A branch of mathematics concerned with finding functions that optimize (minimize or maximize) functionals.
*   **Weak Form:** A reformulated version of a differential equation that is less restrictive on the solution space, typically allowing for less smooth functions.

**Textbook References:**

*   **Reddy (2009):** Chapter 2 introduces the concept of variational principles and their application to boundary value problems.
*   **Cook (2008):** Chapter 2 provides a good overview of the mathematical basis for FEM, including variational principles.
*   **Bhavikatti (2008):** Chapter 2 discusses the variational approach and the principle of minimum potential energy.

---

### 2. The Principle of Minimum Potential Energy (PMPE)

The Principle of Minimum Potential Energy is a cornerstone variational principle widely used in FEM for structural mechanics problems. It states that for an elastic body in equilibrium under applied loads, the potential energy is at a minimum.

**Potential Energy (Π) consists of two parts:**

1.  **Strain Energy (U):** The energy stored within the material due to deformation.
2.  **Potential of External Forces (V):** The negative of the work done by external forces (body forces and surface tractions).

**Mathematically:**

$\Pi = U - V$

The principle states that the equilibrium state is achieved when the potential energy is minimized with respect to displacements:

$\delta \Pi = 0$

where $\delta$ denotes a variation.

**Derivation of Strong Form from PMPE:**

Let's consider a 1D elastic bar under axial load. The strain energy density is $u = \frac{1}{2} \sigma \epsilon$, and the stress is related to strain by $\sigma = E \epsilon$. The strain is $\epsilon = \frac{du}{dx}$.
The total strain energy is $U = \int_0^L \frac{1}{2} E \left(\frac{du}{dx}\right)^2 dx$.

For external forces, let's consider a distributed load $f(x)$ and a surface traction $P$ at $x=L$. The potential of external forces is $V = -\int_0^L f(x) u(x) dx - P u(L)$.

The total potential energy is $\Pi(u) = \int_0^L \frac{1}{2} E \left(\frac{du}{dx}\right)^2 dx - \int_0^L f(x) u(x) dx - P u(L)$.

To find the minimum, we set the variation of $\Pi$ to zero: $\delta \Pi = 0$.

$\delta \Pi = \int_0^L E \frac{du}{dx} \frac{d(\delta u)}{dx} dx - \int_0^L f(x) \delta u(x) dx - P \delta u(L) = 0$

Using integration by parts on the first term:
$\int_0^L E \frac{du}{dx} \frac{d(\delta u)}{dx} dx = \left[ E \frac{du}{dx} \delta u \right]_0^L - \int_0^L \frac{d}{dx}\left(E \frac{du}{dx}\right) \delta u(x) dx$

Substituting this back into the $\delta \Pi$ equation:
$\left[ E \frac{du}{dx} \delta u \right]_0^L - \int_0^L \frac{d}{dx}\left(E \frac{du}{dx}\right) \delta u(x) dx - \int_0^L f(x) \delta u(x) dx - P \delta u(L) = 0$

$\left[ \sigma \delta u \right]_0^L - \int_0^L \left( \frac{d}{dx}\left(E \frac{du}{dx}\right) + f(x) \right) \delta u(x) dx - P \delta u(L) = 0$

Now, consider the boundary conditions:

*   **Essential Boundary Conditions (Displacement Boundary Conditions):** If $u(0)$ is specified (e.g., $u(0)=0$ for a fixed end), then $\delta u(0) = 0$. In this case, the boundary term at $x=0$ vanishes.
*   **Natural Boundary Conditions (Force Boundary Conditions):** If the boundary is free (traction-free), then $\delta u(L)$ is arbitrary. For the equation to hold for any $\delta u(L)$, the coefficient of $\delta u(L)$ must be zero.
    $E \frac{du}{dx}\Big|_{x=L} - P = 0$
    $\sigma(L) - P = 0$

For the volume integral term, since $\delta u(x)$ is arbitrary within the domain, its coefficient must be zero for the integral to be zero:

$\frac{d}{dx}\left(E \frac{du}{dx}\right) + f(x) = 0$

This is the governing differential equation for the 1D elastic bar. The PMPE successfully recovers the strong form and defines the natural boundary conditions.

**Textbook References:**

*   **Reddy (2009):** Chapter 2.4, "The Principle of Minimum Potential Energy," provides a detailed derivation for various problems.
*   **Cook (2008):** Chapter 3, "Stiffness Matrices," shows how PMPE is used to develop element stiffness matrices.
*   **Bhavikatti (2008):** Chapter 2, "Variational Methods," explains PMPE and its application to beams and frames.
*   **Fish & Belytschko (2007):** Chapter 4, "Variational Methods," offers a rigorous treatment of PMPE and related principles.

---

### 3. Weak Formulation

The weak formulation is derived from the variational principle by relaxing the differentiability requirements on the solution. This is crucial for FEM because we approximate the solution using piecewise polynomial functions (shape functions), which are not always differentiable everywhere.

**General Procedure for Obtaining Weak Form:**

1.  **Start with the strong form (governing differential equation).**
2.  **Multiply the differential equation by a suitable "weight function" (or "test function").**
3.  **Integrate the weighted equation over the entire domain.**
4.  **Use integration by parts to reduce the order of derivatives on the unknown solution and increase the order of derivatives on the weight function.**
5.  **Rearrange the terms to obtain the weak form, which involves integrals of the solution and its derivatives multiplied by the weight function.**

**Example: 1D Bar (again) using Weak Formulation (without explicitly using PMPE first):**

Strong Form: $-\frac{d}{dx}\left(E A \frac{du}{dx}\right) = f(x)$, for $0 < x < L$.
Boundary Conditions: $u(0) = \bar{u}$ (essential), $-E A \frac{du}{dx} = \bar{t}$ at $x=L$ (natural). Assume $\bar{t}=0$ for simplicity.

1.  **Weight Function:** Let $w(x)$ be a smooth, arbitrary weight function such that $w(0) = 0$ (to satisfy the essential BC for the variation).
2.  **Multiply and Integrate:**
    $\int_0^L w(x) \left[ -\frac{d}{dx}\left(E A \frac{du}{dx}\right) - f(x) \right] dx = 0$
    $-\int_0^L w(x) \frac{d}{dx}\left(E A \frac{du}{dx}\right) dx - \int_0^L w(x) f(x) dx = 0$
3.  **Integration by Parts:** Apply integration by parts to the first term.
    $-\left[ w(x) EA \frac{du}{dx} \right]_0^L + \int_0^L \frac{dw}{dx} \left(E A \frac{du}{dx}\right) dx - \int_0^L w(x) f(x) dx = 0$
4.  **Weak Form:**
    $\left[ w(x) EA \frac{du}{dx} \right]_0^L = w(L) EA \frac{du}{dx}\Big|_{x=L} - w(0) EA \frac{du}{dx}\Big|_{x=0}$
    Since $w(0)=0$, the first term is $w(L) (- \bar{t})$.
    If the traction at $x=L$ is zero ($\bar{t}=0$), this boundary term vanishes.
    The weak form becomes:
    $\int_0^L \left(E A \frac{dw}{dx}\right) \frac{du}{dx} dx - \int_0^L w(x) f(x) dx = 0$

This is the weak form. Notice that the highest derivative of $u$ is now the first derivative, and the highest derivative of $w$ is also the first derivative. This is a significant reduction from the second derivative in the strong form.

**Connection to PMPE:**

The weak form derived from PMPE (using $\delta u$ as the weight function) is often identical or directly related to the weak form obtained by multiplying the strong form by a weight function and integrating. This highlights the consistency of the variational approach.

**Textbook References:**

*   **Reddy (2009):** Chapter 3, "Variational and Weak Forms," thoroughly explains the process for various problems.
*   **Cook (2008):** Chapter 2, "The Basis of the Finite Element Method," covers the transition from strong to weak forms.
*   **Segerlind (2010):** Chapter 3, "Variational Methods," details the formulation of weak forms.

---

### 4. Galerkin Method and Discretization

The Galerkin method is a specific type of weighted residual method that is closely related to variational formulations. In the Galerkin method, the weight functions are chosen from the same set of basis functions used to approximate the solution.

**Steps in FEM using Variational Formulation (e.g., PMPE):**

1.  **Discretize the Domain:** Divide the continuous domain $\Omega$ into a finite number of elements $\Omega_e$.
2.  **Approximate the Solution:** Within each element, approximate the unknown variable (e.g., displacement $u$) using shape functions ($N_i$) and nodal values ($u_i$):
    $u(x) \approx \hat{u}(x) = \sum_{i=1}^n N_i(x) u_i$
3.  **Substitute Approximation into Variational Principle:** Substitute the approximated solution $\hat{u}(x)$ into the functional $\Pi$.
4.  **Apply Variational Principle:** Set the variation of the functional with respect to each nodal unknown to zero:
    $\frac{\partial \Pi}{\partial u_j} = 0$ for $j = 1, 2, ..., N$ (where N is the total number of nodal unknowns).
5.  **Form the System of Equations:** This leads to a system of linear algebraic equations in the form:
    $[K] \{u\} = \{F\}$
    where $[K]$ is the global stiffness matrix and $\{F\}$ is the global force vector.

**How the Galerkin Method fits in:**

When we apply the $\delta \Pi = 0$ condition, we are essentially requiring the residual of the Euler-Lagrange equations (derived from the variational principle) to be zero in a weighted average sense. The weight functions are derived from the variations of the nodal displacements. If we choose the weight functions to be the same as the shape functions, we are essentially applying the Galerkin method.

**Example: 1D Bar Discretization**

Consider a 1D bar discretized into $m$ elements. Within each element $e$, we approximate $u^{(e)}(x)$ as:
$u^{(e)}(x) \approx \hat{u}^{(e)}(x) = N_1^{(e)}(x) u_1^{(e)} + N_2^{(e)}(x) u_2^{(e)}$

The global displacement is then assembled from these element approximations.

When we apply $\frac{\partial \Pi}{\partial u_j} = 0$, for a specific nodal displacement $u_j$, the variation $\delta u_j$ corresponds to a variation of the global solution $\hat{u}$ where only the $j$-th nodal degree of freedom is varied. This implicit choice of variations aligns with the Galerkin approach.

**Textbook References:**

*   **Reddy (2009):** Chapter 3.6, "The Galerkin Method," links variational methods to weighted residual techniques.
*   **Cook (2008):** Chapter 3, "Stiffness Matrices," demonstrates the assembly of the global stiffness matrix from element stiffness matrices derived via PMPE, inherently using a Galerkin-like approach.
*   **Fish & Belytschko (2007):** Chapter 4 provides a comprehensive explanation of the Galerkin method and its connection to variational principles.

---

### 5. Advantages of Variational Formulation

*   **Systematic Derivation:** Provides a structured way to derive governing equations for complex problems.
*   **Handles Complex Geometries and Boundary Conditions:** Weak forms are more amenable to numerical discretization, allowing for irregular shapes and various boundary conditions.
*   **Connection to Energy Principles:** Offers physical insight into the behavior of the system (e.g., stability, equilibrium).
*   **Foundation for FEM:** Directly leads to the assembly of stiffness matrices and load vectors, the core of FEM.
*   **Error Estimation:** Can be used to develop bounds on errors and guide mesh refinement.

---

### 6. Other Variational Principles (Brief Mention)

While PMPE is common for solid mechanics, other variational principles exist for different physical phenomena:

*   **Principle of Virtual Work (PVW):** A broader principle that can be applied to systems not necessarily in equilibrium, but where forces and displacements are related. For elastic bodies in equilibrium, PVW is equivalent to PMPE.
*   **Principle of Minimum Complementary Energy:** Useful for problems where stresses are the primary unknowns.
*   **Hamilton's Principle:** Used in dynamics and continuum mechanics to derive equations of motion.

**Textbook References:**

*   **Reddy (2009):** Chapter 2 discusses various variational principles.
*   **Cook (2008):** Chapter 2 briefly mentions other principles as extensions.
*   **Segerlind (2010):** Chapter 3 covers virtual work and its relation to PMPE.

---

### 7. Summary and Key Points to Remember

*   **Variational Formulation:** Reformulates differential equations into an equivalent problem of minimizing or extremizing a functional.
*   **Principle of Minimum Potential Energy (PMPE):** A key variational principle for structural mechanics. Equilibrium is achieved when potential energy ($\Pi = U - V$) is minimized ($\delta \Pi = 0$).
*   **Weak Form:** A less restrictive form of the governing equation, obtained by multiplying by a weight function and integrating by parts. It reduces the order of derivatives required.
*   **FEM Process:** Involves discretizing the domain, approximating the solution with shape functions, substituting into the variational formulation, and solving the resulting system of algebraic equations.
*   **Galerkin Method:** A weighted residual method where weight functions are chosen from the same set as the approximation functions, closely aligning with variational approaches.
*   **Advantages:** Systematic derivation, handling complexity, physical insight, and direct FEM implementation.

---

### Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain the difference between a "strong form" and a "weak form" of a differential equation. Why is the weak form preferred in FEM?

**Answer:**
A strong form requires the differential equation to hold true at every point in the domain and has higher differentiability requirements for the solution. A weak form relaxes these requirements, typically reducing the order of derivatives and allowing for less smooth, approximated solutions, which are suitable for piecewise polynomial basis functions used in FEM.

---

**Question 2 (Derivation - 1D Bar):**
Consider a 1D elastic bar of length $L$ with Young's modulus $E$ and cross-sectional area $A$. The bar is subjected to a uniformly distributed load $f(x)$ along its length. Assume the left end ($x=0$) is fixed ($u(0)=0$) and the right end ($x=L$) is free.
Derive the weak form of the governing differential equation using the Principle of Minimum Potential Energy.

**Answer:**
The potential energy is $\Pi(u) = \int_0^L \frac{1}{2} E A \left(\frac{du}{dx}\right)^2 dx - \int_0^L f(x) u(x) dx$.
The boundary condition is $u(0) = 0$.

Setting $\delta \Pi = 0$:
$\delta \Pi = \int_0^L E A \frac{du}{dx} \frac{d(\delta u)}{dx} dx - \int_0^L f(x) \delta u(x) dx = 0$

Using integration by parts on the first term:
$\left[ EA \frac{du}{dx} \delta u \right]_0^L - \int_0^L \frac{d}{dx}\left(E A \frac{du}{dx}\right) \delta u(x) dx - \int_0^L f(x) \delta u(x) dx = 0$

Since $u(0)=0$, $\delta u(0)=0$. The boundary term at $x=0$ vanishes.
The boundary term at $x=L$ is $EA \frac{du}{dx}\Big|_{x=L} \delta u(L)$. Since the end is free, the traction is zero, $EA \frac{du}{dx}\Big|_{x=L} = 0$. Thus, this term is also zero.

The weak form is:
$\int_0^L E A \frac{d(\delta u)}{dx} \frac{du}{dx} dx - \int_0^L f(x) \delta u(x) dx = 0$

Or, written using the convention where the test function ($w$) is used instead of the variation ($\delta u$):
$\int_0^L E A \frac{dw}{dx} \frac{du}{dx} dx = \int_0^L f(x) w(x) dx$

---

**Question 3 (FEM Procedure):**
Outline the steps involved in applying the FEM using a variational formulation, starting from the governing differential equation.

**Answer:**
1.  **Problem Definition:** Identify the physical problem, governing differential equation (strong form), and boundary conditions.
2.  **Variational Formulation:** Derive the weak form or the functional to be minimized using a variational principle (e.g., PMPE).
3.  **Domain Discretization:** Divide the physical domain into a mesh of finite elements.
4.  **Element-Level Approximation:** Define shape functions for each element to approximate the unknown variable (e.g., displacement).
5.  **Element Formulation:** Substitute the approximated solution into the weak form or functional and derive element stiffness matrices and load vectors.
6.  **Assembly:** Assemble the element matrices and vectors into global system matrices and vectors based on the connectivity of the elements.
7.  **Apply Boundary Conditions:** Modify the global system to incorporate essential boundary conditions.
8.  **Solution:** Solve the global system of linear algebraic equations ($[K]\{u\} = \{F\}$) for the unknown nodal values.
9.  **Post-processing:** Calculate strains, stresses, or other derived quantities using the nodal solution.

---

This concludes the study notes for Variational Formulation in FEM. Remember that this is a fundamental concept that underpins most FEM implementations. Understanding it thoroughly will greatly aid in comprehending subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
