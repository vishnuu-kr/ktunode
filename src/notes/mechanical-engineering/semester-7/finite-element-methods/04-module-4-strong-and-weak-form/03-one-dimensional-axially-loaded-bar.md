---
title: "One dimensional axially loaded bar"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044642a4"
status: "completed"
scrapedAt: "2026-05-20T18:13:05.653Z"
---
# FINITE ELEMENT METHODS - Module 4: Strong and Weak Form

## Topic: One-Dimensional Axially Loaded Bar

This module focuses on understanding the fundamental concepts of strong and weak forms and how they are applied to solve problems involving one-dimensional axially loaded bars using the Finite Element Method (FEM).

---

### **1. Introduction to Strong and Weak Forms**

The Finite Element Method (FEM) is a numerical technique used to find approximate solutions to boundary value problems described by partial differential equations. To apply FEM, we need to transform the governing differential equation into a more amenable form. This is where the concepts of strong and weak forms come in.

**1.1 Governing Equation (Differential Equation)**

For a one-dimensional axially loaded bar, the governing differential equation describes the equilibrium of forces within the bar. This is typically derived from the principle of minimum potential energy or by applying equilibrium conditions to an infinitesimal element.

**Key Concept:** The governing differential equation represents the exact mathematical relationship that must hold true for all points within the domain (the bar) and at its boundaries.

**Example:** Consider a bar of length $L$, with cross-sectional area $A$, Young's modulus $E$, and subjected to an axial force $p(x)$. The governing differential equation for the axial displacement $u(x)$ is:

$$
-\frac{d}{dx}\left(A(x) E(x) \frac{du}{dx}\right) + \text{body force term} = 0
$$

Assuming a uniform bar and no body forces for simplicity:

$$
-AE \frac{d^2u}{dx^2} = 0
$$

**Textbook Reference:** Reddy, Chapter 2: Mathematical Preliminaries; Cook, Chapter 2: Governing Equations.

**Course Outcome Alignment:** CO1 (Knowledge Level: K2) - Understanding the governing equations.

---

### **2. Strong Form (Differential Form)**

The strong form is the original differential equation. It requires that the solution $u(x)$ be twice continuously differentiable, meaning $u''(x)$ must exist and be continuous.

**Key Concept:** The strong form is directly derived from the physical principles and represents the most "powerful" mathematical statement of the problem.

**Requirements for the Strong Form:**

*   The differential equation itself must be satisfied at every point in the domain.
*   The solution must satisfy certain continuity requirements (e.g., $u(x)$ and $u'(x)$ must be continuous).
*   The boundary conditions must be satisfied in their original form.

**Textbook Reference:** Reddy, Chapter 2: Mathematical Preliminaries; Cook, Chapter 2: Governing Equations.

**Course Outcome Alignment:** CO1 (Knowledge Level: K2) - Understanding the governing equations.

---

### **3. Weak Form (Integral Form)**

The weak form is derived from the strong form using a mathematical technique called the **Galerkin method** or other weighted residual methods. The weak form relaxes the continuity requirements on the solution and introduces integral equations.

**Key Concept:** The weak form reduces the continuity requirements of the solution (e.g., only $u(x)$ needs to be continuous, $u'(x)$ can have discontinuities). This makes it more suitable for numerical approximation methods like FEM, where we approximate the solution using piecewise-defined functions.

**Derivation of the Weak Form (using Galerkin's Method):**

1.  **Multiply by a Weight Function:** Multiply the strong form (governing differential equation) by a test function or weight function, denoted as $v(x)$.

    $$
    v(x) \left( - \frac{d}{dx}\left(A(x) E(x) \frac{du}{dx}\right) \right) = 0
    $$

2.  **Integrate over the Domain:** Integrate this weighted equation over the entire domain (the length of the bar, $0$ to $L$).

    $$
    \int_0^L v(x) \left( - \frac{d}{dx}\left(A(x) E(x) \frac{du}{dx}\right) \right) dx = 0
    $$

3.  **Apply Integration by Parts:** Use integration by parts on the term involving the second derivative. The integration by parts formula is: $\int u \, dv = uv - \int v \, du$.
    Let $u = v$ and $dv = -\frac{d}{dx}\left(A(x) E(x) \frac{du}{dx}\right) dx$.
    Then $du = v' \, dx$ and $v = -A(x) E(x) \frac{du}{dx}$.

    $$
    \left[ -v(x) A(x) E(x) \frac{du}{dx} \right]_0^L - \int_0^L \left( -A(x) E(x) \frac{du}{dx} \right) v'(x) dx = 0
    $$

4.  **Rearrange and Apply Boundary Conditions:** Rearrange the terms:

    $$
    \int_0^L A(x) E(x) \frac{du}{dx} \frac{dv}{dx} dx - \left[ v(x) A(x) E(x) \frac{du}{dx} \right]_0^L = 0
    $$

    The boundary term $\left[ v(x) A(x) E(x) \frac{du}{dx} \right]_0^L$ relates to the boundary conditions.
    *   **Natural Boundary Conditions:** These arise from the boundary terms after integration by parts. For an axially loaded bar, these are typically related to forces applied at the boundaries. If a force $P$ is applied at $x=L$, then $A(L)E(L)\frac{du}{dx}|_{x=L} = P$. If the boundary is free, then the term is zero.
    *   **Essential Boundary Conditions:** These are the primary variables (displacement $u$ in this case) specified at the boundaries. For example, $u(0) = u_0$. These are used to select appropriate weight functions.

    The weak form of the equation is:

    $$
    \int_0^L A(x) E(x) \frac{du}{dx} \frac{dv}{dx} dx = \text{Boundary terms related to forces}
    $$

    For a bar with prescribed displacement $u(0)=0$ and a force $P$ at $x=L$, the weak form becomes:

    $$
    \int_0^L AE \frac{du}{dx} \frac{dv}{dx} dx = P v(L) \quad \text{ (assuming } v(0)=0 \text{ due to essential BC)}
    $$

**Key Properties of the Weak Form:**

*   Requires only $u(x)$ to be continuous and $u'(x)$ to be square-integrable.
*   The order of derivatives in the integral is reduced.
*   Boundary conditions related to forces (natural boundary conditions) are naturally incorporated.
*   Boundary conditions related to displacement (essential boundary conditions) are used to select the trial and test functions.

**Textbook Reference:** Reddy, Chapter 3: Variational and Weighted Residual Methods; Cook, Chapter 3: Finite Element Formulation; Fish & Belytschko, Chapter 4: Weighted Residual Methods.

**Course Outcome Alignment:**
*   CO1 (Knowledge Level: K2) - Understanding the governing equations and basis of FEM.
*   CO4 (Knowledge Level: K5) - Study Galekin weight residual formulations.

---

### **4. Application to One-Dimensional Axially Loaded Bar (Element Level Formulation)**

Now, let's apply the concepts of strong and weak forms to discretize the bar into finite elements.

**4.1 Discretization:**

Divide the bar into $N$ finite elements. Each element has a length $l^{(e)}$. Within each element, we approximate the displacement $u(x)$ using shape functions.

**4.2 Shape Functions:**

For a one-dimensional element (bar element), we typically use linear shape functions. Let $u_i$ and $u_{i+1}$ be the displacements at nodes $i$ and $i+1$ of an element. The displacement within the element, $u^{(e)}(x)$, can be approximated as:

$$
u^{(e)}(x) = N_i(x) u_i + N_{i+1}(x) u_{i+1}
$$

where $N_i(x)$ and $N_{i+1}(x)$ are the linear shape functions. For a local coordinate system $\xi$ where $x$ varies from $-1$ to $1$ (or $0$ to $l^{(e)}$), these functions are defined as:

Using $\xi \in [-1, 1]$:
$N_i(\xi) = \frac{1 - \xi}{2}$
$N_{i+1}(\xi) = \frac{1 + \xi}{2}$

Using $x \in [0, l^{(e)}]$:
$N_i(x) = \frac{l^{(e)} - x}{l^{(e)}} = 1 - \frac{x}{l^{(e)}}$
$N_{i+1}(x) = \frac{x}{l^{(e)}}$

**Key Concept:** Shape functions interpolate the unknown variable (displacement) between the nodal values within an element.

**Textbook Reference:** Reddy, Chapter 4: Finite Element Formulation; Cook, Chapter 4: Element Formulation; Bhavikatti, Chapter 3: Shape Functions; Fish & Belytschko, Chapter 3: Finite Element Approximation.

**Course Outcome Alignment:**
*   CO2 (Knowledge Level: K3) - Apply coordinate transformation and formulation of shape functions.
*   CO3 (Knowledge Level: K4) - Formulate shape functions.

**4.3 Element Strain and Stress:**

The axial strain $\epsilon(x)$ within an element is the derivative of the displacement:

$$
\epsilon^{(e)}(x) = \frac{du^{(e)}}{dx}
$$

Using the shape function approximation:

$$
\epsilon^{(e)}(x) = \frac{d}{dx} (N_i(x) u_i + N_{i+1}(x) u_{i+1}) = \left[ \frac{dN_i}{dx} \quad \frac{dN_{i+1}}{dx} \right] \begin{Bmatrix} u_i \\ u_{i+1} \end{Bmatrix}
$$

This can be written in matrix form as:

$$
\epsilon^{(e)} = [B^{(e)}] \{u^{(e)}\}
$$

where $[B^{(e)}]$ is the **element strain-displacement matrix**. For linear shape functions in terms of global coordinate $x$ and element length $l^{(e)}$:

$$
\frac{dN_i}{dx} = -\frac{1}{l^{(e)}} \quad \text{ and } \quad \frac{dN_{i+1}}{dx} = \frac{1}{l^{(e)}}
$$

So, the strain-displacement matrix is:

$$
[B^{(e)}] = \left[ -\frac{1}{l^{(e)}} \quad \frac{1}{l^{(e)}} \right]
$$

The stress $\sigma^{(e)}(x)$ is related to strain by Hooke's Law:

$$
\sigma^{(e)}(x) = E \epsilon^{(e)}(x)
$$

Substituting the strain-displacement relationship:

$$
\sigma^{(e)} = E [B^{(e)}] \{u^{(e)}\}
$$

**Textbook Reference:** Reddy, Chapter 4: Finite Element Formulation; Cook, Chapter 4: Element Formulation; Bhavikatti, Chapter 4: Element Stiffness Matrix; Fish & Belytschko, Chapter 3: Finite Element Approximation.

**Course Outcome Alignment:**
*   CO3 (Knowledge Level: K4) - Formulate element strain displacement matrix.

**4.4 Element Stiffness Matrix ($[k^{(e)}]$):**

The element stiffness matrix relates the nodal forces to the nodal displacements within an element. It is derived from the weak form.

From the weak form: $\int_0^L AE \frac{du}{dx} \frac{dv}{dx} dx = \text{Force terms}$.

Let $u = [N]\{u^{(e)}\}$ and $v = [N]\{v^{(e)}\}$, where $[N] = [N_i(x) \quad N_{i+1}(x)]$ and $\{u^{(e)}\} = \begin{Bmatrix} u_i \\ u_{i+1} \end{Bmatrix}$.
Then $\frac{du}{dx} = [B^{(e)}] \{u^{(e)}\}$ and $\frac{dv}{dx} = [B^{(e)}] \{v^{(e)}\}$.

The term $\int_0^L AE \frac{du}{dx} \frac{dv}{dx} dx$ becomes:

$$
\int_0^L AE ([B^{(e)}] \{u^{(e)}\}) ([B^{(e)}] \{v^{(e)}\})^T dx = \int_0^L AE [B^{(e)}] \{u^{(e)}\} [B^{(e)}]^T \{v^{(e)}\} dx
$$

$$
= \left( \int_0^L AE [B^{(e)}]^T [B^{(e)}] dx \right) \{u^{(e)}\} \{v^{(e)}\}^T
$$

The element stiffness matrix $[k^{(e)}]$ is defined by:

$$
[k^{(e)}] = \int_0^L AE [B^{(e)}]^T [B^{(e)}] dx
$$

For a uniform bar element with properties $A, E, l^{(e)}$:

$$
[B^{(e)}]^T [B^{(e)}] = \begin{Bmatrix} -1/l^{(e)} \\ 1/l^{(e)} \end{Bmatrix} \begin{bmatrix} -1/l^{(e)} & 1/l^{(e)} \end{bmatrix} = \begin{bmatrix} 1/(l^{(e)})^2 & -1/(l^{(e)})^2 \\ -1/(l^{(e)})^2 & 1/(l^{(e)})^2 \end{bmatrix}
$$

Integrating this over the element length $l^{(e)}$:

$$
[k^{(e)}] = \int_0^{l^{(e)}} AE \begin{bmatrix} 1/(l^{(e)})^2 & -1/(l^{(e)})^2 \\ -1/(l^{(e)})^2 & 1/(l^{(e)})^2 \end{bmatrix} dx = AE \begin{bmatrix} 1/l^{(e)} & -1/l^{(e)} \\ -1/l^{(e)} & 1/l^{(e)} \end{bmatrix}
$$

This is the standard stiffness matrix for a 1D bar element.

**Textbook Reference:** Reddy, Chapter 4: Finite Element Formulation; Cook, Chapter 5: Element Stiffness Matrices; Bhavikatti, Chapter 4: Element Stiffness Matrix; Segerlind, Chapter 3: The Stiffness Matrix.

**Course Outcome Alignment:**
*   CO3 (Knowledge Level: K4) - Formulate element stiffness matrix (implicitly through strain-displacement).
*   CO4 (Knowledge Level: K5) - Study Galekin weight residual formulations (used to derive stiffness matrix).

**4.5 Element Load Vector ($ \{f^{(e)}\} $):**

The element load vector accounts for external forces acting on the element. These can be point loads or distributed loads.

*   **Point Loads:** If a concentrated force $P_i$ is applied at node $i$, it directly contributes to the force vector at that node.
*   **Distributed Loads:** If a distributed load $q(x)$ (force per unit length) acts on the element, its effect is distributed to the nodes using the shape functions. This is done by evaluating the integral of the distributed load multiplied by the shape functions.

    $$
    \{f^{(e)}\} = \int_0^{l^{(e)}} [N(x)]^T q(x) dx
    $$

    For linear shape functions $N_i(x) = 1 - x/l^{(e)}$ and $N_{i+1}(x) = x/l^{(e)}$:

    $$
    \{f^{(e)}\} = \int_0^{l^{(e)}} \begin{Bmatrix} N_i(x) \\ N_{i+1}(x) \end{Bmatrix} q(x) dx
    $$

    If the distributed load is uniform, $q(x) = q_0$:

    $$
    f_i = \int_0^{l^{(e)}} (1 - x/l^{(e)}) q_0 dx = q_0 \left[ x - \frac{x^2}{2l^{(e)}} \right]_0^{l^{(e)}} = q_0 \left( l^{(e)} - \frac{(l^{(e)})^2}{2l^{(e)}} \right) = \frac{1}{2} q_0 l^{(e)}
    $$

    $$
    f_{i+1} = \int_0^{l^{(e)}} (x/l^{(e)}) q_0 dx = q_0 \left[ \frac{x^2}{2l^{(e)}} \right]_0^{l^{(e)}} = q_0 \frac{(l^{(e)})^2}{2l^{(e)}} = \frac{1}{2} q_0 l^{(e)}
    $$

    So, for a uniform distributed load $q_0$, each node gets half of the total force on the element ($q_0 l^{(e)}$).

**Textbook Reference:** Reddy, Chapter 4: Finite Element Formulation; Cook, Chapter 5: Element Load Vectors; Bhavikatti, Chapter 4: Load Vector.

**Course Outcome Alignment:**
*   CO1 (Knowledge Level: K2) - Understanding basic procedure of FEM.

---

### **5. Assembly and Solution of Global System**

After formulating the element stiffness matrices and load vectors, they are assembled into a global system of equations.

**5.1 Assembly:**

The element matrices are assembled into global matrices $[K]$ and global load vector $\{F\}$. The process involves placing the element stiffness coefficients into the global stiffness matrix at the locations corresponding to the global nodal numbers. Similarly, element load vectors are added to the global load vector.

$$
[K] \{U\} = \{F\}
$$

where $[K]$ is the global stiffness matrix, $\{U\}$ is the vector of global nodal displacements, and $\{F\}$ is the global load vector.

**5.2 Application of Boundary Conditions:**

Essential boundary conditions (prescribed displacements) are applied by modifying the global system of equations. Common methods include:

*   **Penalty Method:** Adding a large number to the diagonal entry of $[K]$ corresponding to the constrained node and a large force to the load vector.
*   **Direct Elimination Method:** Removing the row and column corresponding to the constrained node.

**5.3 Solution:**

Once boundary conditions are applied, the resulting system of linear algebraic equations is solved for the unknown nodal displacements $\{U\}$.

**5.4 Post-processing:**

After obtaining nodal displacements, element strains and stresses can be calculated using the strain-displacement matrix $[B^{(e)}]$ and Hooke's Law.

$$
\{\epsilon^{(e)}\} = [B^{(e)}] \{u^{(e)}\}
$$

$$
\{\sigma^{(e)}\} = E \{\epsilon^{(e)}\}
$$

**Textbook Reference:** Reddy, Chapter 5: Solution of Finite Element Equations; Cook, Chapter 6: Assembly and Solution; Bhavikatti, Chapter 5: Assembly of Global Stiffness Matrix and Load Vector.

**Course Outcome Alignment:**
*   CO1 (Knowledge Level: K2) - Understanding basic procedure of FEM.

---

### **6. Energy Method and Galekin Weight Residual Formulations (Refresher/Deeper Dive)**

**6.1 Energy Method (Principle of Minimum Potential Energy):**

This method states that for a conservative elastic system, the equilibrium configuration corresponds to the minimum of the total potential energy. The total potential energy $(\Pi)$ is the sum of strain energy $(U)$ and potential energy of applied forces $(V)$.

$$
\Pi = U - V
$$

$$
U = \frac{1}{2} \int_0^L \sigma \epsilon \, dV = \frac{1}{2} \int_0^L (AE) \epsilon^2 \, dx
$$

$$
V = \int_0^L u q(x) \, dx + \sum_i u_i P_i
$$

Minimizing $\Pi$ with respect to displacements leads to the same governing differential equations obtained from equilibrium. In FEM, we discretize the displacement $u$ using shape functions and minimize the potential energy with respect to nodal displacements. This leads to the system of equations $[K]\{U\} = \{F\}$.

**Textbook Reference:** Reddy, Chapter 3: Variational Methods; Cook, Chapter 3: Governing Equations; Fish & Belytschko, Chapter 4: Weighted Residual Methods.

**Course Outcome Alignment:**
*   CO1 (Knowledge Level: K2) - Understanding basic procedure of FEM.
*   CO4 (Knowledge Level: K5) - Evaluate element stress using energy method.

**6.2 Galekin Weight Residual Formulations:**

As discussed earlier, the Galerkin method is a specific type of weighted residual method. The core idea is to ensure that the residual (the error in the differential equation) is orthogonal to a set of test functions (weight functions) over the domain.

Let the governing equation be $L(u) = 0$.
The residual is $R(x) = L(u_{approx})$, where $u_{approx}$ is the approximate solution.
The Galerkin condition is: $\int_\Omega R(x) w(x) \, dx = 0$ for all admissible weight functions $w(x)$.

The choice of weight functions being the same as the shape functions ($w(x) = N_i(x)$) is what defines the Galerkin method for FEM.

**Textbook Reference:** Reddy, Chapter 3: Weighted Residual Methods; Cook, Chapter 3: Finite Element Formulation; Fish & Belytschko, Chapter 4: Weighted Residual Methods.

**Course Outcome Alignment:**
*   CO1 (Knowledge Level: K2) - Understanding basic procedure of FEM.
*   CO4 (Knowledge Level: K5) - Study Galekin weight residual formulations.

---

### **7. Practice Questions and Exercises**

**Question 1:**
Consider a 1D bar of length $L=1000$ mm, Young's modulus $E = 200$ GPa, and cross-sectional area $A = 100$ mm$^2$. The bar is fixed at $x=0$ and subjected to an axial force $P = 100$ kN at $x=1000$ mm.
(a) Write down the strong form of the governing differential equation.
(b) Derive the weak form of the governing differential equation using Galerkin's method.
(c) Calculate the element stiffness matrix for a single element representing the entire bar.
(d) Calculate the displacement at $x=1000$ mm.

**Solution 1:**
(a) **Strong Form:**
For a uniform bar with no body forces, the governing equation is:
$$
-AE \frac{d^2u}{dx^2} = 0
$$
Boundary conditions: $u(0) = 0$ and $AE \frac{du}{dx}|_{x=L} = P$.

(b) **Weak Form:**
Multiply by a weight function $v(x)$ and integrate from 0 to $L$:
$$
\int_0^L v(x) \left( -AE \frac{d^2u}{dx^2} \right) dx = 0
$$
Using integration by parts:
$$
\left[ -v(x) AE \frac{du}{dx} \right]_0^L + \int_0^L AE \frac{du}{dx} \frac{dv}{dx} dx = 0
$$
Apply boundary conditions: $v(0)=0$ (as $u(0)$ is fixed) and $AE \frac{du}{dx}|_{x=L} = P$.
$$
- v(L) P + v(0) (0) + \int_0^L AE \frac{du}{dx} \frac{dv}{dx} dx = 0
$$
$$
\int_0^L AE \frac{du}{dx} \frac{dv}{dx} dx = P v(L)
$$

(c) **Element Stiffness Matrix:**
Using the formula $[k^{(e)}] = \int_0^L AE [B^{(e)}]^T [B^{(e)}] dx$ with $[B^{(e)}] = [ -1/L \quad 1/L ]$:
$A = 100 \, \text{mm}^2 = 100 \times 10^{-6} \, \text{m}^2$
$E = 200 \, \text{GPa} = 200 \times 10^9 \, \text{Pa}$
$L = 1000 \, \text{mm} = 1 \, \text{m}$
$AE = (100 \times 10^{-6}) \times (200 \times 10^9) = 20 \times 10^6 \, \text{N}$

$$
[k^{(e)}] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = \frac{20 \times 10^6}{1} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} = 20 \times 10^6 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \, \text{N/m}
$$

(d) **Displacement:**
The global system with $L=1$:
$$
\begin{bmatrix} k_{11} & k_{12} \\ k_{21} & k_{22} \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix} = \begin{Bmatrix} F_1 \\ F_2 \end{Bmatrix}
$$
The assembled stiffness matrix is $[K] = 20 \times 10^6 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$.
The force vector: $u(0)=0 \implies u_1=0$. The force $P=100$ kN is applied at $x=1000$ mm, so $F_2 = 100 \times 10^3$ N. $F_1=0$.

The system becomes:
$$
\begin{bmatrix} 20 \times 10^6 & -20 \times 10^6 \\ -20 \times 10^6 & 20 \times 10^6 \end{bmatrix} \begin{Bmatrix} 0 \\ u_2 \end{Bmatrix} = \begin{Bmatrix} 0 \\ 100 \times 10^3 \end{Bmatrix}
$$
From the second row:
$-20 \times 10^6 (0) + 20 \times 10^6 u_2 = 100 \times 10^3$
$u_2 = \frac{100 \times 10^3}{20 \times 10^6} = \frac{100}{20000} = 0.005 \, \text{m} = 5 \, \text{mm}$

**Question 2:**
Consider a bar with varying Young's modulus $E(x)$ and cross-sectional area $A(x)$. Explain how the element stiffness matrix would be calculated for a single element of length $l^{(e)}$ in this case, referring to the weak form.

**Solution 2:**
For a bar with varying $A(x)$ and $E(x)$, the weak form is:
$$
\int_0^{l^{(e)}} A(x) E(x) \frac{du}{dx} \frac{dv}{dx} dx = \text{Force terms}
$$
The element stiffness matrix is given by:
$$
[k^{(e)}] = \int_0^{l^{(e)}} [B^{(e)}]^T A(x) E(x) [B^{(e)}] dx
$$
where $[B^{(e)}] = [ -1/l^{(e)} \quad 1/l^{(e)} ]$.

In this case, the integral cannot be solved analytically in a simple closed form for arbitrary $A(x)$ and $E(x)$. Numerical integration techniques, such as Gaussian quadrature, would be required to evaluate the integral. This involves choosing specific points within the element and evaluating the integrand at those points with appropriate weighting factors.

**Question 3:**
What is the primary benefit of using the weak form compared to the strong form in FEM for problems like the axially loaded bar?

**Solution 3:**
The primary benefit of using the weak form is that it **reduces the continuity requirements of the solution**. The strong form requires the solution $u(x)$ to be twice continuously differentiable ($u''(x)$ exists and is continuous), whereas the weak form only requires $u(x)$ to be continuous and $u'(x)$ to be square-integrable. This relaxation of continuity is crucial for FEM because we approximate the solution using piecewise polynomial functions (like linear or quadratic shape functions), which may not be continuously differentiable across element boundaries. The weak form allows us to work with these lower-continuity approximations effectively.

---

### **8. Important Points to Remember**

*   **Strong Form vs. Weak Form:** Strong form is the original differential equation, requiring higher continuity. Weak form is an integral equation, relaxing continuity requirements.
*   **Galerkin Method:** A weighted residual method where weight functions are chosen to be the same as the shape functions.
*   **Shape Functions:** Approximate the displacement within an element and define the interpolation. For 1D bars, linear shape functions are common.
*   **Strain-Displacement Matrix ($[B^{(e)}]$):** Relates nodal displacements to nodal strains. For a bar element, it involves $\pm 1/l^{(e)}$.
*   **Element Stiffness Matrix ($[k^{(e)}]$):** Derived from the weak form by integrating $AE[B^{(e)}]^T[B^{(e)}]$. It characterizes the stiffness of an individual element.
*   **Element Load Vector ($ \{f^{(e)}\} $):** Accounts for external forces, including distributed loads, by distributing them to nodes using shape functions.
*   **Assembly:** Element matrices and vectors are combined to form global system equations.
*   **Boundary Conditions:** Essential (displacement) and natural (force) boundary conditions are handled differently during the FE formulation and solution.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **9. Further Study & References**

*   **Reddy, J. N. (2009). *An Introduction to the Finite Element Method* (3rd ed.). McGrawHillEducation.** - Excellent for foundational concepts, variational methods, and weighted residuals.
*   **Cook, R. D. (2008). *Concepts and Applications of Finite Element Analysis* (3rd ed.). Wiley.** - Practical approach with good explanations of element formulation and assembly.
*   **Bhavikatti, S. S. (2008). *Finite Element Analysis* (3rd ed.). New Age Publisher.** - Clear explanations of stiffness matrices, shape functions, and assembly.
*   **Fish, J., & Belytschko, T. (2007). *A First Course in Finite Elements* (2nd ed.). John Wiley & Sons, Ltd.** - Focuses on modern FEM concepts and robustness.
*   **Segerlind, L. J. (2010). *Applied Finite Element Analysis* (2nd ed.). John Wiley & Sons.** - A classic text with good coverage of element formulation.
*   **Ramamurthi, G. (n.d.). *Applied Finite Element Analysis*. I K International Publishing House Pvt. Ltd.**
*   **Hutton, D. V. (2009). *Fundamentals of Finite Element Methods* (3rd ed.). McGrawHillEducation.**

These resources provide detailed explanations and examples that complement these notes. Pay attention to Chapters related to variational principles, weighted residual methods, element formulation, and stiffness matrix derivation for 1D elements.