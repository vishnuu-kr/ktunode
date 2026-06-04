---
title: "approximation of surface and volume integrals"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 4: Introduction to finite element analysis"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463518"
status: "completed"
scrapedAt: "2026-05-20T17:59:08.207Z"
---
## COMPUTER AIDED DESIGN AND ANALYSIS

### Module 4: Introduction to Finite Element Analysis

#### Topic: Approximation of Surface and Volume Integrals

---

**Course Outcomes Addressed:**

*   **CO4: Understand finite element analysis (FEA) and finite volume methods (FVM) including discretization, formulation, and boundary condition implementation for simple structural and fluid flow problems. (Knowledge Level: K2)**

This topic directly contributes to CO4 by explaining the fundamental mathematical operations (integration) that are approximated within FEA and FVM to solve complex problems. Understanding these approximations is crucial for grasping how differential equations are transformed into a solvable algebraic system.

---

### 1. Introduction to Integration in FEA and FVM

Finite Element Analysis (FEA) and Finite Volume Methods (FVM) are numerical techniques used to solve complex engineering problems that are often governed by partial differential equations (PDEs). Many of these PDEs, when formulated in their weak or integral form, require the evaluation of integrals over surfaces and volumes of the domain.

**Key Concepts:**

*   **Weak Form of Governing Equations:** Many PDEs are transformed into an integral form, often referred to as the "weak form." This form allows for the use of less smooth trial functions, which are more amenable to approximation using finite elements or volumes.
*   **Integral Formulations:** Problems in solid mechanics (e.g., stress analysis) and fluid dynamics (e.g., fluid flow) are often expressed in terms of work-energy principles or conservation laws, which inherently involve integrals over the domain.
*   **Numerical Integration:** Direct analytical evaluation of these integrals is often impossible due to complex geometries and material properties. Therefore, numerical integration techniques are employed to approximate their values.

**Why are Surface and Volume Integrals Important?**

*   **Structural Mechanics:** In FEA for structural analysis, integrals are used to calculate stiffness matrices, load vectors, and energy terms (e.g., strain energy). These integrals often involve dot products of stress and strain tensors, material properties, and shape functions over the volume of elements.
*   **Fluid Dynamics (FVM):** In FVM for fluid flow, integrals are used to express conservation laws (mass, momentum, energy) over discrete control volumes. These integrals typically involve fluxes across the faces (surfaces) of these volumes and source terms within the volume.

---

### 2. Approximation of Volume Integrals

Volume integrals are essential for calculating quantities distributed throughout the volume of an element or domain.

**Key Concepts:**

*   **Discretization:** The continuous domain is divided into a finite number of smaller elements (FEA) or control volumes (FVM).
*   **Shape Functions (FEA):** In FEA, the unknown field variable (e.g., displacement, temperature) within an element is approximated using a set of shape functions ($N_i$) and nodal values ($\phi_i$):
    $\phi(x,y,z) \approx \sum_{i=1}^{n} N_i(x,y,z) \phi_i$
    where $n$ is the number of nodes in the element.
*   **Quadrature Rules (Numerical Integration):** These are methods for approximating definite integrals by summing weighted values of the integrand at specific points (called quadrature points or Gauss points) within the integration domain.

**Commonly Used Quadrature Rules:**

*   **Newton-Cotes Formulas:** These rules use equally spaced points within the integration interval. Examples include the Trapezoidal Rule and Simpson's Rule.
    *   **Trapezoidal Rule (1D):** $\int_{a}^{b} f(x) dx \approx \frac{b-a}{2} [f(a) + f(b)]$
    *   **Simpson's Rule (1D):** $\int_{a}^{b} f(x) dx \approx \frac{b-a}{6} [f(a) + 4f(\frac{a+b}{2}) + f(b)]$
    *   **Limitations:** Newton-Cotes rules can be less accurate for higher-order approximations and can be sensitive to the behavior of the integrand.

*   **Gauss Quadrature:** This is a more powerful and widely used method in FEA. It uses strategically chosen, unequally spaced points (Gauss points) and associated weights to achieve higher accuracy for polynomial integrands.
    *   **General Form (1D):** $\int_{a}^{b} f(x) dx \approx \sum_{i=1}^{N} w_i f(x_i)$
        where $w_i$ are the weights and $x_i$ are the Gauss points.
    *   **Mapping to Standard Interval:** Integrals over arbitrary intervals $[a, b]$ are typically mapped to a standard interval, usually $[-1, 1]$, for application of Gauss quadrature.
        Let $x = \frac{b-a}{2} \xi + \frac{a+b}{2}$, then $dx = \frac{b-a}{2} d\xi$.
        $\int_{a}^{b} f(x) dx = \int_{-1}^{1} f(\frac{b-a}{2} \xi + \frac{a+b}{2}) \frac{b-a}{2} d\xi$
    *   **Example: Two-Point Gauss Quadrature (1D):**
        The integral $\int_{-1}^{1} f(\xi) d\xi$ is approximated as:
        $f(-1/\sqrt{3}) \cdot 1 + f(1/\sqrt{3}) \cdot 1$
    *   **Higher Dimensions:** Gauss quadrature is extended to multiple dimensions by multiplying the 1D rules. For a 2D integral over a square domain $[-1, 1] \times [-1, 1]$ with $N \times M$ points:
        $\int_{-1}^{1} \int_{-1}^{1} f(\xi, \eta) d\xi d\eta \approx \sum_{i=1}^{N} \sum_{j=1}^{M} w_i w_j f(\xi_i, \eta_j)$
    *   **Application in FEA:** Volume integrals within an element (e.g., for stiffness matrix calculation) are typically computed using Gauss quadrature. The integrand would involve products of shape functions, their derivatives, material property matrices, and the Jacobian determinant (to account for the mapping from the parent element to the physical element).

**Volume Integral Example (FEA - Stiffness Matrix):**

For a structural mechanics problem, a typical term in the stiffness matrix $[k]_{el}$ might be:
$[k]_{el} = \int_{V_{el}} [B]^T [D] [B] dV$
where:
*   $[B]$ is the strain-displacement matrix (involves derivatives of shape functions).
*   $[D]$ is the material constitutive matrix (e.g., elasticity matrix).
*   $dV$ is the volume element.

This integral is evaluated numerically using Gauss quadrature over the parent element, typically mapped to a standard cube or tetrahedron in isoparametric coordinates.

**Reference:** *Introduction to Finite Elements in Engineering* by Chandrupatla and Belagundu (Chapter 5, Numerical Integration) provides a detailed explanation of Gauss quadrature and its application in FEA.

---

### 3. Approximation of Surface Integrals

Surface integrals are used to calculate quantities that are distributed over the boundary or surfaces of elements, such as forces, fluxes, or boundary conditions.

**Key Concepts:**

*   **Surface Area Element:** In 3D, a surface integral involves integrating over a 2D surface. The surface area element $dS$ is related to the Jacobian of the mapping from a parameter space to the surface.
*   **Parametrization of Surfaces:** Surfaces can be defined by parameters (e.g., $u, v$). The surface normal and the area element can be calculated using the cross product of the partial derivatives with respect to these parameters.
*   **Gauss Quadrature for Surfaces:** Similar to volume integrals, surface integrals are approximated using Gauss quadrature on the parameterized surface.

**Surface Integral Example (FEA - Load Vector):**

For a problem with distributed surface traction $\mathbf{t}$ acting on a surface $S$, the corresponding force vector $\{\mathbf{F}\}_{el}$ for an element can be calculated as:
$\{\mathbf{F}\}_{el} = \int_{S_{el}} [N]^T \mathbf{t} dS$
where:
*   $[N]$ is the matrix of shape functions.
*   $\mathbf{t}$ is the traction vector.
*   $dS$ is the surface area element.

This integral is computed numerically using Gauss quadrature on the faces (surfaces) of the element. For a 3D element, a face might be a 2D surface, and a 2D Gauss quadrature rule would be applied. The integrand would involve shape functions, the traction vector, and the Jacobian determinant for the surface mapping.

**Surface Integral Example (FVM):**

In FVM, the flux of a conserved quantity across the boundary of a control volume is crucial. For a face $\Gamma_f$ separating two control volumes, the flux is calculated as:
$\int_{\Gamma_f} \mathbf{F} \cdot \mathbf{n} dS$
where:
*   $\mathbf{F}$ is the flux vector.
*   $\mathbf{n}$ is the outward normal vector to the surface.
*   $dS$ is the surface area element.

This integral is approximated at discrete points on the face (e.g., face center or Gauss points on the face) using numerical quadrature.

**Reference:** *A First course in Finite Element Method* by Daryl Logan (Chapter 6, Numerical Integration) discusses surface integration and its applications in FEA.

---

### 4. Isoparametric Mapping and Jacobian Determinant

A key technique used in conjunction with numerical integration in FEA is **isoparametric mapping**.

**Key Concepts:**

*   **Parent Element:** A standard, simple element (e.g., a unit square in 2D, a unit cube in 3D) with coordinates usually ranging from -1 to 1.
*   **Physical Element:** The actual element in the problem domain, which can have arbitrary shape and size.
*   **Isoparametric Mapping:** The same shape functions used to approximate the field variable are also used to define the geometry (coordinates) of the physical element from the parent element.
    *   $x(\xi, \eta, \zeta) = \sum_{i=1}^{n} N_i(\xi, \eta, \zeta) x_i$
    *   $y(\xi, \eta, \zeta) = \sum_{i=1}^{n} N_i(\xi, \eta, \zeta) y_i$
    *   $z(\xi, \eta, \zeta) = \sum_{i=1}^{n} N_i(\xi, \eta, \zeta) z_i$
    where $(x_i, y_i, z_i)$ are the nodal coordinates of the physical element, and $N_i$ are the shape functions evaluated in the parent coordinate system $(\xi, \eta, \zeta)$.

*   **Jacobian Determinant:** When transforming integrals from the physical element to the parent element (for integration), the differential volume or area element changes. This change is accounted for by the Jacobian determinant, denoted by $|J|$.
    *   **In 3D:** $dV = |J| d\xi d\eta d\zeta$, where $J$ is the Jacobian matrix:
        $J = \begin{bmatrix} \frac{\partial x}{\partial \xi} & \frac{\partial y}{\partial \xi} & \frac{\partial z}{\partial \xi} \\ \frac{\partial x}{\partial \eta} & \frac{\partial y}{\partial \eta} & \frac{\partial z}{\partial \eta} \\ \frac{\partial x}{\partial \zeta} & \frac{\partial y}{\partial \zeta} & \frac{\partial z}{\partial \zeta} \end{bmatrix}$
    *   **In 2D:** $dA = |J| d\xi d\eta$, where $J = \det \begin{bmatrix} \frac{\partial x}{\partial \xi} & \frac{\partial y}{\partial \xi} \\ \frac{\partial x}{\partial \eta} & \frac{\partial y}{\partial \eta} \end{bmatrix}$
    *   **On a Surface:** $dS = |J| du dv$, where $J$ is related to the cross product of partial derivatives of the surface mapping.

**How it Works:**

The integral over the physical element is transformed into an integral over the parent element using the isoparametric mapping and the Jacobian determinant. Numerical integration (Gauss quadrature) is then applied to this transformed integral over the parent element.

**Example:** The volume integral for the stiffness matrix term becomes:
$[k]_{el} = \int_{-1}^{1} \int_{-1}^{1} \int_{-1}^{1} [B(\xi,\eta,\zeta)]^T [D] [B(\xi,\eta,\zeta)] |J(\xi,\eta,\zeta)| d\xi d\eta d\zeta$

**Important Point:** The Jacobian determinant is generally not constant within an element, especially for higher-order or distorted elements. This makes numerical integration essential.

**Reference:** *CAD/CAM Computer Aided Design and Manufacturing* by Groover and Zimmers (Chapter 16, Finite Element Analysis) and *Introduction to Finite Elements in Engineering* by Chandrupatla and Belagundu (Chapter 5) cover isoparametric elements and the Jacobian.

---

### 5. Integration in CAD vs. FEA/FVM

While CAD software uses integration extensively for geometric calculations (e.g., surface area, volume, centroid of complex shapes), the *context* and *methods* differ from FEA/FVM.

**CAD Integration:**

*   **Purpose:** Primarily for geometric property computation, volume/surface rendering, and slicing for manufacturing.
*   **Methods:** Often uses symbolic integration or adaptive numerical integration techniques tailored for well-defined geometric primitives. CAD systems rely on robust geometric kernels that can handle complex surface representations (e.g., NURBS).
*   **Example:** Calculating the volume of a complex car body surface defined by Bezier or B-spline patches.

**FEA/FVM Integration:**

*   **Purpose:** To approximate solutions to differential equations governing physical phenomena.
*   **Methods:** Relies on numerical integration techniques like Gauss quadrature applied over discretized elements, using shape functions derived from the discretization.
*   **Example:** Calculating the stress distribution in a mechanical part under load.

**Connection:** CAD systems are used to *create* the geometry that is then analyzed using FEA/FVM. The finite element mesh, often generated from CAD models, defines the elements over which integrals are approximated.

**Reference:** *CAD/CAM : Theory and Practice* by Zeid and Sivasubramanian (Chapters on Geometric Modeling) and *Computer Graphics with open GL* by Hearn, Baker, and Carithers provide insights into geometric computations in CAD.

---

### 6. Learning Outcome Alignment

This topic directly supports **CO4**. By understanding the approximation of surface and volume integrals, students learn the foundational numerical techniques that enable FEA and FVM solvers to transform continuous physical problems into discrete, solvable algebraic systems. This is crucial for understanding how discretization leads to formulation and how boundary conditions (often expressed as surface integrals of fluxes or forces) are implemented.

---

### 7. Important Points to Remember

*   **Numerical integration is essential** in FEA and FVM due to complex geometries and integrands.
*   **Gauss quadrature** is the preferred method for its accuracy and efficiency, especially with isoparametric elements.
*   **Isoparametric mapping** allows the use of simple parent element integration schemes for complex physical element shapes.
*   The **Jacobian determinant** is crucial for correctly transforming integrals between the physical and parent element domains.
*   **Surface integrals** are used for boundary conditions and fluxes, while **volume integrals** are used for internal quantities and stiffness calculations.
*   FEA and FVM approximations of integrals are fundamental to solving PDEs numerically.

---

### 8. Practice Questions and Exercises

**Question 1:**
Explain why numerical integration is necessary in Finite Element Analysis.
*Answer:* Analytical integration of the stiffness matrices, load vectors, and energy terms is often impossible in FEA due to:
    *   Complex element geometries (especially with isoparametric mappings).
    *   Non-uniform material properties.
    *   Complex boundary conditions and applied loads.
    *   The use of higher-order shape functions.
Numerical integration techniques like Gauss quadrature provide an accurate and systematic way to evaluate these integrals over finite elements.

**Question 2:**
What is the role of the Jacobian determinant in numerical integration of isoparametric elements?
*Answer:* The Jacobian determinant $|J|$ accounts for the change in volume (or area) element when transforming an integral from the physical element domain to the parent element domain during isoparametric mapping. The relationship is $dV_{physical} = |J| dV_{parent}$. Without it, the integral evaluation would be incorrect, leading to inaccurate results.

**Question 3:**
Consider a 1D bar element with length $L$. The stiffness matrix term involves an integral of the form $\int_{0}^{L} E A \left(\frac{dN}{dx}\right)^T \left(\frac{dN}{dx}\right) dx$.
If linear shape functions $N_1 = (1-\frac{x}{L})$ and $N_2 = \frac{x}{L}$ are used, and $E$ and $A$ are constant, explain how you would use 2-point Gauss Quadrature to approximate this integral after mapping to the parent domain $[-1, 1]$.
*Solution:*
1.  **Map to Parent Domain:** Let $x = \frac{L}{2} \xi + \frac{L}{2}$. Then $dx = \frac{L}{2} d\xi$. The integral becomes:
    $\int_{-1}^{1} E A \left(\frac{dN}{dx}\right)^T \left(\frac{dN}{dx}\right) \frac{L}{2} d\xi$
2.  **Calculate Derivatives:**
    $\frac{dN_1}{dx} = -\frac{1}{L}$
    $\frac{dN_2}{dx} = \frac{1}{L}$
    In terms of $\xi$: $\frac{dN}{dx} = \frac{dN}{d\xi} \frac{d\xi}{dx} = \frac{dN}{d\xi} \frac{2}{L}$.
    $\frac{dN_1}{d\xi} = -\frac{1}{2}$, $\frac{dN_2}{d\xi} = \frac{1}{2}$
    So, $\frac{dN_1}{dx} = -\frac{1}{2} \cdot \frac{2}{L} = -\frac{1}{L}$ and $\frac{dN_2}{dx} = \frac{1}{2} \cdot \frac{2}{L} = \frac{1}{L}$.
3.  **Form the Integrand:**
    $\left(\frac{dN}{dx}\right)^T \left(\frac{dN}{dx}\right) = \begin{bmatrix} -1/L \\ 1/L \end{bmatrix} \begin{bmatrix} -1/L & 1/L \end{bmatrix} = \begin{bmatrix} 1/L^2 & -1/L^2 \\ -1/L^2 & 1/L^2 \end{bmatrix}$
    The integrand is $E A \begin{bmatrix} 1/L^2 & -1/L^2 \\ -1/L^2 & 1/L^2 \end{bmatrix} \frac{L}{2}$.
4.  **Apply 2-Point Gauss Quadrature:** The points are $\xi_1 = -1/\sqrt{3}$ and $\xi_2 = 1/\sqrt{3}$, with weights $w_1 = 1$ and $w_2 = 1$.
    The integral approximation is:
    $EA \left( \frac{1}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \frac{L}{2} \right) \cdot w_1 + EA \left( \frac{1}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \frac{L}{2} \right) \cdot w_2$
    Since the integrand is constant with respect to $\xi$, the evaluation at the Gauss points yields the same matrix.
    Approximate Integral $= EA \frac{1}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \frac{L}{2} \cdot (1) + EA \frac{1}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \frac{L}{2} \cdot (1)$
    Approximate Integral $= EA \frac{L}{2L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} + EA \frac{L}{2L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
    Approximate Integral $= \frac{EA}{2L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} + \frac{EA}{2L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$
    This matches the exact stiffness matrix for a 1D bar element. This demonstrates the power of Gauss Quadrature.

**Question 4:**
Briefly describe how surface integrals are approximated in FEA for applying distributed loads.
*Answer:* To approximate a surface integral for applying distributed loads on an element face, a numerical integration scheme (like Gauss Quadrature) is used. The surface of the element face is parameterized, and the shape functions associated with the nodes on that face are used. The load (traction vector) is evaluated at the Gauss points on the surface. The integral is approximated by summing the product of the shape function transpose, the load at the Gauss point, and the surface area element (which includes the Jacobian determinant for the surface mapping) multiplied by the Gauss quadrature weights. This summation contributes to the nodal force vector.

---
This concludes the study notes on the approximation of surface and volume integrals for Module 4. Remember that mastering these numerical techniques is fundamental to understanding how FEA and FVM solve complex engineering problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
