---
title: "Variational formulation in FEM"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446429e"
status: "completed"
scrapedAt: "2026-05-20T18:13:02.126Z"
---
# Finite Element Methods: Module 3 - Derivation of Strain

## Topic: Variational Formulation in FEM

**Course Outcomes Alignment:**

*   **CO1 (K2):** Understanding governing equations and FEM procedure. (Foundation for variational methods)
*   **CO2 (K3):** Applying coordinate transformation and formulation of shape functions. (Essential for constructing variational formulations)
*   **CO3 (K4):** Formulating shape functions and element strain-displacement matrix. (Directly relates to the implementation of variational principles)
*   **CO4 (K5):** Evaluating element stress using energy methods and Galekin weight residual formulations. (Variational methods are a precursor to energy methods and are conceptually linked to weighted residual methods).

---

### 1. Introduction to Variational Formulation

Variational formulation is a powerful approach in Finite Element Method (FEM) that transforms a given differential equation into an integral form. This integral form, often referred to as a variational principle or a weak form, is generally easier to satisfy and work with in the context of approximating solutions.

**Key Idea:** Instead of directly satisfying the governing differential equation at every point in the domain, we seek a solution that minimizes or satisfies a certain integral quantity (e.g., potential energy, complementary energy).

**Why Variational Formulations?**

*   **Relaxed Continuity Requirements:** Differential equations often require solutions with certain continuity properties (e.g., continuous first derivatives). Variational formulations, by integrating by parts, typically reduce these requirements, allowing for piecewise polynomial approximations (which is the essence of FEM).
*   **Systematic FEM Derivation:** They provide a systematic way to derive the stiffness matrices and load vectors for finite elements.
*   **Foundation for Energy Methods:** Many important FEM techniques, like the principle of minimum potential energy, are rooted in variational principles.

**Reference:**
*   **Reddy, J.N. (2009).** *An Introduction to the Finite Element Method*. McGrawHillEducation. (Chapter 5: Variational Methods)
*   **Cook, R.D. (2008).** *Concepts and Applications of Finite Element Method*. Wiley. (Chapter 2: Variational Principles and Applications)

---

### 2. Governing Differential Equations and their Integral Forms

Many physical phenomena are described by differential equations. FEM often starts by converting these into an integral form.

**Example: One-Dimensional Bar under Axial Load**

Consider a one-dimensional bar of length $L$ with cross-sectional area $A$ and Young's modulus $E$. The governing differential equation for axial displacement $u(x)$ under distributed load $f(x)$ and boundary conditions is:

$$
-\frac{d}{dx}\left(E A \frac{du}{dx}\right) + c u = f(x), \quad 0 < x < L
$$

where $c$ is a coefficient representing damping or other effects, and $u(x)$ satisfies certain boundary conditions at $x=0$ and $x=L$.

**Deriving the Integral Form (Weak Form):**

1.  **Multiply by a "Test Function" (or "Weight Function"), $v(x)$:**
    $$
    v(x) \left[ -\frac{d}{dx}\left(E A \frac{du}{dx}\right) + c u - f(x) \right] = 0
    $$

2.  **Integrate over the domain:**
    $$
    \int_0^L v(x) \left[ -\frac{d}{dx}\left(E A \frac{du}{dx}\right) + c u - f(x) \right] dx = 0
    $$

3.  **Apply Integration by Parts to the highest derivative term:**
    The term $-\frac{d}{dx}\left(E A \frac{du}{dx}\right)$ contains the second derivative of $u$. We want to reduce this to a first derivative.
    Recall the integration by parts formula: $\int_a^b P \frac{dQ}{dx} dx = [PQ]_a^b - \int_a^b Q \frac{dP}{dx} dx$.
    Let $P = v$ and $Q = EA \frac{du}{dx}$. Then $\frac{dP}{dx} = \frac{dv}{dx}$.
    $$
    \int_0^L v(x) \left[ -\frac{d}{dx}\left(E A \frac{du}{dx}\right) \right] dx = -\left[ v(x) EA \frac{du}{dx} \right]_0^L + \int_0^L EA \frac{du}{dx} \frac{dv}{dx} dx
    $$

4.  **Substitute back into the integral equation:**
    $$
    -\left[ v(x) EA \frac{du}{dx} \right]_0^L + \int_0^L EA \frac{du}{dx} \frac{dv}{dx} dx + \int_0^L v(x) c u dx - \int_0^L v(x) f(x) dx = 0
    $$

5.  **Incorporate Boundary Conditions:**
    *   The term $\left[ v(x) EA \frac{du}{dx} \right]_0^L$ involves the derivative of $u$ at the boundaries.
    *   If we have a **prescribed displacement** at the boundary (Dirichlet boundary condition), say $u(0) = \bar{u}$, then we can choose $v(0) = 0$.
    *   If we have a **prescribed force** at the boundary (Neumann boundary condition), say $EA \frac{du}{dx}|_{x=L} = \bar{F}_L$, then the boundary term contributes directly to the force vector.
    *   If we have a **spring force** at the boundary, like $EA \frac{du}{dx}|_{x=L} = k_L u(L)$, then $v(L) EA \frac{du}{dx} = v(L) k_L u(L)$.

    Let's assume for simplicity:
    *   $u(0) = \bar{u}$ (prescribed displacement) $\implies v(0) = 0$.
    *   $EA \frac{du}{dx}|_{x=0} = \bar{F}_0$ (prescribed force).
    *   $EA \frac{du}{dx}|_{x=L} = \bar{F}_L$ (prescribed force).

    The boundary term becomes:
    $$
    -\left( v(L) EA \frac{du}{dx}|_{x=L} - v(0) EA \frac{du}{dx}|_{x=0} \right) = -\left( v(L) \bar{F}_L - v(0) \bar{F}_0 \right)
    $$
    Since $v(0)=0$:
    $$
    -\left( v(L) \bar{F}_L - 0 \right) = -v(L) \bar{F}_L
    $$

6.  **The Weak Form:**
    The integral equation becomes:
    $$
    \int_0^L EA \frac{du}{dx} \frac{dv}{dx} dx + \int_0^L c u v dx = \int_0^L f(x) v dx + v(L) \bar{F}_L
    $$

    This is the **weak form** of the original differential equation. It requires the solution $u$ to be such that its first derivative is continuous (so $EA du/dx$ is well-defined), and the test function $v$ to be continuous. This is a lower order of continuity than the original strong form which required continuous second derivatives of $u$.

---

### 3. Variational Principles and Energy Methods

Many physical problems can be formulated in terms of minimizing a certain energy functional. This forms the basis of the **Principle of Minimum Potential Energy**.

**Concept:** For a system in equilibrium, the total potential energy is minimized.

**Total Potential Energy ($\Pi$):**
$$
\Pi = U - W
$$
where:
*   $U$ is the strain energy stored in the system.
*   $W$ is the potential energy of applied forces (work done by external forces).

**Strain Energy ($U$):**
For a linear elastic material, the strain energy density (energy per unit volume) is:
$$
\sigma_{ij} = C_{ijkl} \epsilon_{kl}
$$
$$
\text{Strain Energy Density} = \frac{1}{2} \sigma_{ij} \epsilon_{ij}
$$
The total strain energy is the integral of strain energy density over the volume:
$$
U = \int_V \frac{1}{2} \sigma_{ij} \epsilon_{ij} dV
$$

**Potential Energy of Forces ($W$):**
This includes potential energy of body forces and surface forces.
*   **Body forces ($f_i$):** $\Delta W_{body} = -\int_V f_i u_i dV$ (negative sign as potential energy decreases when force does work).
*   **Surface forces ($T_i$):** $\Delta W_{surface} = -\int_S T_i u_i dS$

**Total Potential Energy Functional:**
$$
\Pi = \int_V \frac{1}{2} \sigma_{ij} \epsilon_{ij} dV - \int_V f_i u_i dV - \int_S T_i u_i dS
$$

**Minimization of $\Pi$:**
According to the Principle of Minimum Potential Energy, the equilibrium configuration is achieved when the first variation of $\Pi$ is zero:
$$
\delta \Pi = 0
$$

**Connecting to Weak Form:**
If we apply the constitutive relations ($\sigma_{ij} = C_{ijkl} \epsilon_{kl}$) and strain-displacement relations ($\epsilon_{ij} = \frac{1}{2}(\frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i})$) and use integration by parts, we can show that minimizing $\Pi$ leads to the same weak form derived earlier for the equilibrium equations, including the boundary conditions.

**Example (One-Dimensional Bar):**
*   $\sigma = E \frac{du}{dx}$
*   $\epsilon = \frac{du}{dx}$
*   Strain Energy $U = \int_0^L \frac{1}{2} EA \left(\frac{du}{dx}\right)^2 dx$
*   Potential energy of distributed load $f(x)$: $W_{body} = -\int_0^L f(x) u(x) dx$
*   Potential energy of end force $\bar{F}_L$ at $x=L$: $W_{surface} = -\bar{F}_L u(L)$

Total Potential Energy:
$$
\Pi(u) = \int_0^L \frac{1}{2} EA \left(\frac{du}{dx}\right)^2 dx - \int_0^L f(x) u(x) dx - \bar{F}_L u(L)
$$

To find the minimum, we set the first variation with respect to $u$ to zero. Let $u = u_0 + \delta u$, where $u_0$ is the true solution and $\delta u$ is a variation.
$$
\delta \Pi = \frac{d}{d\epsilon} \Pi(u_0 + \epsilon \delta u) \Big|_{\epsilon=0} = 0
$$
This process, after applying integration by parts and considering $\delta u$ to be arbitrary (which leads to $\delta u(0)=0$ if $u(0)$ is prescribed), yields the weak form:
$$
\int_0^L EA \frac{du_0}{dx} \frac{d(\delta u)}{dx} dx - \int_0^L f(x) \delta u dx - \bar{F}_L \delta u(L) = 0
$$
Letting $v = \delta u$ (the test function), this matches the weak form derived earlier.

**Reference:**
*   **Bhavikatti, S.S. (2008).** *Finite Element Analysis*. New Age Publisher. (Chapter 4: Variational Methods)
*   **Fish, J. & Belytschko, T. (2007).** *A First Course in Finite Elements*. John Wiley & Sons, Ltd. (Chapter 3: Variational Methods)

---

### 4. Variational Formulation using Principle of Virtual Work

The Principle of Virtual Work is another fundamental approach that leads to variational formulations. It is closely related to the Principle of Minimum Potential Energy.

**Principle of Virtual Work:** For a structure in equilibrium, the total internal virtual work is equal to the total external virtual work, for any kinematically admissible virtual displacement field.

**Types:**
1.  **Principle of Virtual Displacements (or Kinematically Admissible Displacements):**
    *   Consider a system in equilibrium under actual loads.
    *   Apply a set of virtual displacements ($\delta u_i$) that are kinematically admissible (satisfy geometric boundary conditions).
    *   Internal Virtual Work ($W_{int}$): Work done by internal stresses ($\sigma_{ij}$) acting through virtual strains ($\delta \epsilon_{ij}$).
        $$
        W_{int} = \int_V \sigma_{ij} \delta \epsilon_{ij} dV
        $$
    *   External Virtual Work ($W_{ext}$): Work done by external forces (body forces $f_i$ and surface tractions $T_i$) acting through virtual displacements ($\delta u_i$).
        $$
        W_{ext} = \int_V f_i \delta u_i dV + \int_S T_i \delta u_i dS
        $$
    *   **Principle:** $W_{int} = W_{ext}$
        $$
        \int_V \sigma_{ij} \delta \epsilon_{ij} dV = \int_V f_i \delta u_i dV + \int_S T_i \delta u_i dS
        $$
    *   This formulation directly relates stresses and strains to applied loads, and when expressed in terms of the unknown displacement field $u_i$ and virtual displacement field $\delta u_i$, it leads to the weak form.

2.  **Principle of Virtual Strains (or Statistically Equivalent Stress Fields):**
    *   Consider a system in equilibrium under actual strains.
    *   Apply a set of virtual strains ($\delta \epsilon_{ij}$) that are consistent with a kinematically admissible virtual displacement field ($\delta u_i$).
    *   Internal Virtual Work ($W_{int}$): Work done by virtual stresses ($\delta \sigma_{ij}$) acting through actual strains ($\epsilon_{ij}$).
        $$
        W_{int} = \int_V \delta \sigma_{ij} \epsilon_{ij} dV
        $$
    *   External Virtual Work ($W_{ext}$): Work done by external forces acting through virtual displacements. This is usually formulated such that it represents the work done by the virtual stresses on the external forces.
    *   **Principle:** $W_{int} = W_{ext}$
        $$
        \int_V \delta \sigma_{ij} \epsilon_{ij} dV = -\int_V \delta u_i f_i dV - \int_S \delta u_i T_i dS
        $$
        This is useful for complementary energy methods.

**FEM Application using Principle of Virtual Displacements:**
1.  **Divide Domain:** Discretize the domain into finite elements.
2.  **Approximate Displacements:** Within each element, approximate the displacement field $u_i$ using shape functions and nodal displacements: $u_i = N_{ik} u_{ik}$, where $u_{ik}$ are the nodal displacements and $N_{ik}$ are the shape functions.
3.  **Approximate Strains:** From the displacement approximation, derive the strain-displacement relations: $\epsilon_{ij} = B_{ijm} u_{im}$, where $B_{ijm}$ is the strain-displacement matrix.
4.  **Define Virtual Displacements and Strains:** Similar to the above, $\delta u_i = N_{ik} \delta u_{ik}$ and $\delta \epsilon_{ij} = B_{ijm} \delta u_{im}$.
5.  **Substitute into Principle of Virtual Displacements:**
    $$
    \int_V \sigma_{ij} B_{ijm} \delta u_{im} dV = \int_V f_i N_{im} \delta u_{im} dV + \int_S T_i N_{im} \delta u_{im} dS
    $$
6.  **Apply Constitutive Law:** $\sigma_{ij} = C_{ijkl} \epsilon_{kl} = C_{ijkl} B_{klm} u_{lm}$.
    $$
    \int_V (C_{ijkl} B_{klm} u_{lm}) B_{ijp} \delta u_{ip} dV = \int_V f_i N_{ip} \delta u_{ip} dV + \int_S T_i N_{ip} \delta u_{ip} dS
    $$
7.  **Rearrange into Matrix Form:**
    $$
    \left( \int_V B_{ijm}^T C_{ijkl} B_{klm} dV \right) \{u\} = \int_V N^T \{f\} dV + \int_S N^T \{T\} dS
    $$
    This gives the element stiffness matrix $[k]$ and element load vector $\{f_e\}$:
    $$
    [k]_e = \int_{V_e} B^T C B dV
    $$
    $$
    \{f_e\} = \int_{V_e} N^T \{f\} dV + \int_{S_e} N^T \{T\} dS
    $$
    The equation becomes $[k]_e \{u\}_e = \{f_e\}_e$.

**Reference:**
*   **Segerlind, L.J. (2010).** *Applied Finite Element Analysis*. John Wiley and Sons. (Chapter 3: Variational Principles and Weighted Residuals)
*   **Ramamurthi, G. (2008).** *Applied Finite Element Analysis*. I K International Publishing House Pvt. Ltd. (Chapter 3: Variational Methods)

---

### 5. Applying Variational Formulation to FEM for 1D Bar Element

Let's re-derive the stiffness matrix for a 1D bar element using the variational formulation.

**Problem:** A bar element of length $L_e$, cross-sectional area $A$, and Young's modulus $E$. Subjected to distributed load $f(x)$.

**Governing Equation:** $-\frac{d}{dx}(EA \frac{du}{dx}) = f(x)$

**Weak Form:**
$$
\int_0^{L_e} EA \frac{du}{dx} \frac{dv}{dx} dx = \int_0^{L_e} f(x) v(x) dx
$$
(Assuming no traction boundary conditions at the ends for simplicity here).

**FEM Discretization:**
*   Element displacement field: $u(x) = N_1(x) u_1 + N_2(x) u_2$, where $u_1$ and $u_2$ are displacements at nodes 1 and 2.
*   Element strain: $\epsilon(x) = \frac{du}{dx} = \frac{dN_1}{dx} u_1 + \frac{dN_2}{dx} u_2$.
*   In matrix form: $\epsilon = B u$, where $B = [\frac{dN_1}{dx} \quad \frac{dN_2}{dx}]$ and $u = \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$.
*   The test function $v(x)$ also takes the form $v(x) = N_1(x) v_1 + N_2(x) v_2$, so $\frac{dv}{dx} = [\frac{dN_1}{dx} \quad \frac{dN_2}{dx}] \begin{bmatrix} v_1 \\ v_2 \end{bmatrix} = B v$.

**Substituting into the Weak Form:**
$$
\int_0^{L_e} EA \left( B u \right) \left( B v \right) dx = \int_0^{L_e} f(x) v(x) dx
$$
$$
\int_0^{L_e} EA (B u) (B v) dx = \int_0^{L_e} f(x) v(x) dx
$$
$$
\left( \int_0^{L_e} EA B^T B dx \right) u = \int_0^{L_e} f(x) N^T dx
$$

**Element Stiffness Matrix $[k]_e$:**
$$
[k]_e = \int_0^{L_e} EA B^T B dx
$$
$$
B^T B = \begin{bmatrix} \frac{dN_1}{dx} \\ \frac{dN_2}{dx} \end{bmatrix} \begin{bmatrix} \frac{dN_1}{dx} & \frac{dN_2}{dx} \end{bmatrix} = \begin{bmatrix} (\frac{dN_1}{dx})^2 & \frac{dN_1}{dx}\frac{dN_2}{dx} \\ \frac{dN_2}{dx}\frac{dN_1}{dx} & (\frac{dN_2}{dx})^2 \end{bmatrix}
$$

For a 1D linear bar element, shape functions are $N_1(x) = 1 - \frac{x}{L_e}$ and $N_2(x) = \frac{x}{L_e}$.
Their derivatives are $\frac{dN_1}{dx} = -\frac{1}{L_e}$ and $\frac{dN_2}{dx} = \frac{1}{L_e}$.
So, $B = [-\frac{1}{L_e} \quad \frac{1}{L_e}]$.
$$
B^T B = \begin{bmatrix} \frac{1}{L_e^2} & -\frac{1}{L_e^2} \\ -\frac{1}{L_e^2} & \frac{1}{L_e^2} \end{bmatrix}
$$

Assuming $E$ and $A$ are constant over the element:
$$
[k]_e = EA \int_0^{L_e} \begin{bmatrix} \frac{1}{L_e^2} & -\frac{1}{L_e^2} \\ -\frac{1}{L_e^2} & \frac{1}{L_e^2} \end{bmatrix} dx
$$
$$
[k]_e = EA \frac{1}{L_e^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \int_0^{L_e} dx
$$
$$
[k]_e = EA \frac{1}{L_e^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} [x]_0^{L_e}
$$
$$
[k]_e = EA \frac{1}{L_e^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} L_e
$$
$$
[k]_e = \frac{EA}{L_e} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}
$$
This is the familiar stiffness matrix for a 1D bar element.

**Element Load Vector $\{f_e\}$:**
$$
\{f_e\} = \int_0^{L_e} f(x) \begin{bmatrix} N_1(x) \\ N_2(x) \end{bmatrix} dx
$$
If $f(x)$ is a constant distributed load $f$:
$$
\{f_e\} = \int_0^{L_e} f \begin{bmatrix} 1 - \frac{x}{L_e} \\ \frac{x}{L_e} \end{bmatrix} dx
$$
$$
\{f_e\} = f \begin{bmatrix} \int_0^{L_e} (1 - \frac{x}{L_e}) dx \\ \int_0^{L_e} \frac{x}{L_e} dx \end{bmatrix}
$$
$$
\int_0^{L_e} (1 - \frac{x}{L_e}) dx = [x - \frac{x^2}{2L_e}]_0^{L_e} = L_e - \frac{L_e^2}{2L_e} = L_e - \frac{L_e}{2} = \frac{L_e}{2}
$$
$$
\int_0^{L_e} \frac{x}{L_e} dx = [\frac{x^2}{2L_e}]_0^{L_e} = \frac{L_e^2}{2L_e} = \frac{L_e}{2}
$$
So,
$$
\{f_e\} = f \begin{bmatrix} \frac{L_e}{2} \\ \frac{L_e}{2} \end{bmatrix}
$$
This shows that a uniformly distributed load is equivalent to applying half the load at each node, which is a known result.

**Reference:**
*   **Hutton, D.V. (2009).** *Fundamentals of Finite Element Methods*. McGrawHillEducation. (Chapter 5: Variational Methods)

---

### 6. Relationship to Weighted Residual Methods (Brief Mention)

Variational formulations are closely related to weighted residual methods. The Principle of Virtual Work can be seen as a specific case of the Galerkin method, a popular weighted residual method.

*   **Weighted Residual Method:** Seek a solution $u$ such that $\int_V w_i (L(u) - f) dV = 0$ for a set of weight functions $w_i$.
*   **Galerkin Method:** The weight functions $w_i$ are chosen to be the same as the shape functions used to approximate the solution, i.e., $w_i = N_i$.

When the operator $L(u)$ involves second-order derivatives, integration by parts is used to lower the order of derivatives, transforming the problem into a weak form. This process naturally leads to the same integral forms obtained from variational principles.

**Reference:**
*   **Bhavikatti, S.S. (2008).** *Finite Element Analysis*. New Age Publisher. (Chapter 5: Weighted Residual Methods)

---

### 7. Key Concepts and Definitions

*   **Variational Formulation:** Transforming a differential equation into an equivalent integral form.
*   **Weak Form:** The integral form obtained from a variational formulation, typically requiring lower order continuity.
*   **Test Function (Weight Function):** An arbitrary function used in the integral formulation, typically chosen from the same function space as the solution.
*   **Principle of Minimum Potential Energy:** The equilibrium state of a conservative elastic system corresponds to the minimum value of the total potential energy.
*   **Total Potential Energy ($\Pi$):** Sum of strain energy ($U$) and potential energy of applied forces ($W$). $\Pi = U - W$.
*   **Strain Energy ($U$):** Energy stored in the material due to deformation.
*   **Potential Energy of Forces:** Negative of the work done by external forces.
*   **Variation ($\delta$):** A small change in a function, analogous to a derivative. $\delta \Pi = 0$ for minimization.
*   **Principle of Virtual Displacements:** Equivalence of internal and external virtual work for kinematically admissible virtual displacements.
*   **Internal Virtual Work:** Work done by stresses acting through virtual strains.
*   **External Virtual Work:** Work done by external forces acting through virtual displacements.
*   **Kinematically Admissible:** Satisfying geometric boundary conditions.
*   **Statistically Equivalent:** Consistent with equilibrium equations.

---

### 8. Important Points to Remember

*   Variational formulations are crucial for FEM because they relax continuity requirements on the solution, allowing for piecewise polynomial approximations.
*   They provide a systematic way to derive element matrices (stiffness and load).
*   The Principle of Minimum Potential Energy and the Principle of Virtual Work are fundamental variational principles used in FEM.
*   Integration by parts is a key mathematical tool used in deriving weak forms from differential equations.
*   Boundary conditions play a critical role in the integral form and must be handled correctly.
*   The resulting integral form is then discretized using FEM shape functions.

---

### 9. Practice Questions and Exercises

**Question 1:**
Derive the weak form of the following one-dimensional heat conduction equation with a source term and convection:
$$
-\frac{d}{dx}\left(k \frac{du}{dx}\right) + \alpha u = f(x), \quad 0 < x < L
$$
where $k$ is thermal conductivity, $\alpha$ is convection coefficient, and $f(x)$ is heat source. Assume the boundary conditions are $u(0) = \bar{u}$ and $-k \frac{du}{dx}|_{x=L} = q_L$ (prescribed heat flux).

**Answer 1:**
Let $u$ be the solution and $v$ be the test function.
Multiply by $v$ and integrate over $[0, L]$:
$$
\int_0^L v \left( -\frac{d}{dx}\left(k \frac{du}{dx}\right) + \alpha u - f(x) \right) dx = 0
$$
Apply integration by parts to the first term:
$$
-\left[ v \left( k \frac{du}{dx} \right) \right]_0^L + \int_0^L \left( k \frac{du}{dx} \right) \frac{dv}{dx} dx + \int_0^L \alpha u v dx - \int_0^L f v dx = 0
$$
Consider boundary conditions:
*   $u(0) = \bar{u} \implies v(0) = 0$.
*   $-k \frac{du}{dx}|_{x=L} = q_L \implies k \frac{du}{dx}|_{x=L} = -q_L$.

Substitute boundary conditions into the boundary term:
$$
-\left( v(L) \left( k \frac{du}{dx}|_{x=L} \right) - v(0) \left( k \frac{du}{dx}|_{x=0} \right) \right)
$$
$$
-\left( v(L) (-q_L) - 0 \right) = v(L) q_L
$$
The weak form is:
$$
v(L) q_L + \int_0^L k \frac{du}{dx} \frac{dv}{dx} dx + \int_0^L \alpha u v dx - \int_0^L f v dx = 0
$$
Rearranging:
$$
\int_0^L k \frac{du}{dx} \frac{dv}{dx} dx + \int_0^L \alpha u v dx = \int_0^L f v dx - v(L) q_L
$$

**Question 2:**
For a 1D bar element with shape functions $N_1(x)$ and $N_2(x)$, the strain-displacement matrix is given by $B = [\frac{dN_1}{dx} \quad \frac{dN_2}{dx}]$. If $E$ and $A$ are constant, derive the element stiffness matrix $[k]_e$ for the element.

**Answer 2:**
The stiffness matrix is derived from the variational formulation (or principle of virtual work) as:
$$
[k]_e = \int_0^{L_e} E A B^T B dx
$$
For a linear element, $B = [-\frac{1}{L_e} \quad \frac{1}{L_e}]$.
$$
B^T B = \begin{bmatrix} \frac{1}{L_e^2} & -\frac{1}{L_e^2} \\ -\frac{1}{L_e^2} & \frac{1}{L_e^2} \end{bmatrix}
$$
$$
[k]_e = E A \int_0^{L_e} \begin{bmatrix} \frac{1}{L_e^2} & -\frac{1}{L_e^2} \\ -\frac{1}{L_e^2} & \frac{1}{L_e^2} \end{bmatrix} dx
$$
$$
[k]_e = E A \frac{1}{L_e^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \int_0^{L_e} dx
$$
$$
[k]_e = E A \frac{1}{L_e^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} L_e
$$
$$
[k]_e = \frac{EA}{L_e} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}
$$

**Question 3:**
Explain why variational formulations are preferred over direct satisfaction of differential equations in FEM.

**Answer 3:**
Variational formulations are preferred for the following reasons:
1.  **Reduced Continuity Requirements:** Differential equations often require solutions with higher-order continuity (e.g., continuous first or second derivatives). Variational formulations, via integration by parts, reduce these requirements, allowing the use of simpler, piecewise polynomial approximations that are natural for FEM.
2.  **Systematic Derivation of Element Matrices:** They provide a consistent mathematical framework for deriving the element stiffness matrices and load vectors from the governing physical principles.
3.  **Foundation for Energy Methods:** They form the basis for powerful methods like the Principle of Minimum Potential Energy, which are directly applicable to structural mechanics and other fields.
4.  **Handling of Boundary Conditions:** Boundary conditions, especially Neumann (natural) boundary conditions, are elegantly incorporated into the integral form, often appearing as terms on the right-hand side of the equation.

---

This concludes the study notes for Variational Formulation in FEM. Remember to consult the referenced textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
