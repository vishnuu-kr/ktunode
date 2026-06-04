---
title: "Variational approach and weighted residual approach"
subject: "FINITE ELEMENT METHOD"
module: "Module 3: Formulation techniques"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116d8"
status: "completed"
scrapedAt: "2026-05-20T18:58:59.477Z"
---
# Finite Element Method: Module 3 - Formulation Techniques

## Topic: Variational Approach and Weighted Residual Approach

---

### **Introduction**

This module delves into the fundamental formulation techniques used in the Finite Element Method (FEM). We will explore two primary approaches: the **Variational Approach** and the **Weighted Residual Approach**. These methods provide systematic ways to derive the governing equations and ultimately the element stiffness matrices and load vectors required for solving complex engineering problems.

---

### **Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   Understand the underlying principles of the variational approach and its connection to energy minimization.
*   Formulate the weak form of differential equations for various boundary value problems.
*   Understand the principles of the weighted residual approach.
*   Derive the weighted residual forms for differential equations using different types of residuals.
*   Relate the variational and weighted residual approaches and understand when each is more suitable.
*   Apply these formulation techniques to simple one-dimensional problems.

---

### **1. Variational Approach**

The variational approach is based on the principle of **energy minimization**. Many physical phenomena in engineering, such as structural mechanics and heat transfer, can be described by minimizing a certain energy functional. The FEM transforms the problem of solving a differential equation into the problem of finding a function that minimizes this functional.

#### **1.1 Key Concepts and Definitions**

*   **Differential Equation:** A mathematical equation that relates a function with its derivatives. In FEM, we often deal with second-order ordinary differential equations (ODEs) or partial differential equations (PDEs).
*   **Boundary Value Problem (BVP):** A differential equation defined over a domain with specified conditions (boundary conditions) at the boundaries of the domain.
*   **Functional:** A function that maps a function to a scalar value. For example, in structural mechanics, the potential energy functional represents the total energy of the system.
*   **Calculus of Variations:** A branch of mathematics that deals with finding functions that optimize (minimize or maximize) functionals.
*   **Euler-Lagrange Equation:** A necessary condition for a function to be an extremum (minimum or maximum) of a functional. It provides a way to derive the original differential equation from the functional.
*   **Weak Form:** A reformulated version of a differential equation where the continuity requirements on the solution are relaxed, typically by reducing the order of derivatives. This is crucial for FEM as we approximate the solution using piecewise polynomial functions, which might not be sufficiently smooth to satisfy the original strong form.
*   **Virtual Work/Energy:** Concepts used in mechanics to represent energy associated with virtual displacements or strains.

#### **1.2 Principle of Minimum Potential Energy (for structural mechanics)**

A fundamental principle in structural mechanics states that for an elastic system in equilibrium, the total potential energy is minimized. The total potential energy ($\Pi$) is the sum of the strain energy ($U$) and the potential energy of applied loads ($V$):

$\Pi = U - V$

*   **Strain Energy ($U$):** The energy stored in the deformed body due to internal stresses. For a simple 1D bar under axial load, $U = \frac{1}{2} \int_{0}^{L} EA (\frac{du}{dx})^2 dx$, where $E$ is Young's modulus, $A$ is the cross-sectional area, and $u(x)$ is the displacement.
*   **Potential Energy of Loads ($V$):** The negative of the work done by external forces. For a distributed load $f(x)$ and point loads $P_i$, $V = -\int_{0}^{L} f(x) u(x) dx - \sum P_i u(x_i)$.

The condition for equilibrium is that the first variation of the potential energy with respect to the displacement field $u$ is zero:

$\delta \Pi = 0$

This leads to the Euler-Lagrange equation, which is the governing differential equation of the system.

#### **1.3 Deriving the Weak Form using Variational Approach**

The process of deriving the weak form from the variational principle involves the following steps:

1.  **Identify the Functional:** Define the appropriate energy functional for the problem (e.g., potential energy for structural problems, complementary energy for problems with prescribed forces).
2.  **Apply the Principle of Minimum Energy:** Set the first variation of the functional to zero ($\delta \Pi = 0$).
3.  **Introduce a Variation:** Consider a small variation $\delta u$ in the displacement field (or solution variable). The condition becomes $\delta \Pi(u) = \Pi(u + \delta u) - \Pi(u) = 0$.
4.  **Expand and Simplify:** Expand the functional and retain terms up to the first order of $\delta u$.
5.  **Integrate by Parts:** Use integration by parts to reduce the order of derivatives acting on the trial solution $u$. This is where the weak form emerges. The boundary terms resulting from integration by parts are crucial for incorporating boundary conditions.
6.  **Test Function:** The variation $\delta u$ acts as a *test function* (or *weighting function*). It is assumed to be zero at the essential (Dirichlet) boundary conditions, allowing the boundary terms to vanish on those boundaries.

#### **1.4 Example: 1D Bar under Axial Load (Variational Approach)**

Consider a 1D elastic bar of length $L$, cross-sectional area $A$, and Young's modulus $E$. The bar is subjected to a distributed axial load $f(x)$. The boundary conditions are:

*   Fixed at $x=0$: $u(0) = 0$ (essential boundary condition)
*   Free at $x=L$: Traction $T = EA \frac{du}{dx} = 0$ at $x=L$ (natural boundary condition)

The governing differential equation is:

$-\frac{d}{dx} \left( EA \frac{du}{dx} \right) + f(x) = 0$ for $0 < x < L$

The potential energy functional is:

$\Pi(u) = \int_{0}^{L} \frac{1}{2} EA \left(\frac{du}{dx}\right)^2 dx - \int_{0}^{L} f(x) u(x) dx$

Let's derive the weak form using the variational approach:

1.  **Introduce a variation:** Consider a variation $\delta u(x)$. Since $u(0) = 0$, $\delta u(0) = 0$.
2.  **First variation of $\Pi$**:
    $\delta \Pi = \frac{d\Pi}{du} \delta u$ (for linear functionals, but more formally using $\Pi(u+\delta u) - \Pi(u)$)
    Let's use the latter for generality:
    $\Pi(u+\delta u) = \int_{0}^{L} \frac{1}{2} EA \left(\frac{d(u+\delta u)}{dx}\right)^2 dx - \int_{0}^{L} f(x) (u+\delta u)(x) dx$
    $\Pi(u+\delta u) = \int_{0}^{L} \frac{1}{2} EA \left(\frac{du}{dx} + \frac{d(\delta u)}{dx}\right)^2 dx - \int_{0}^{L} f(x) u(x) dx - \int_{0}^{L} f(x) \delta u(x) dx$
    $\Pi(u+\delta u) = \int_{0}^{L} \frac{1}{2} EA \left(\left(\frac{du}{dx}\right)^2 + 2 \frac{du}{dx} \frac{d(\delta u)}{dx} + \left(\frac{d(\delta u)}{dx}\right)^2\right) dx - \int_{0}^{L} f(x) u(x) dx - \int_{0}^{L} f(x) \delta u(x) dx$

    $\delta \Pi = \Pi(u+\delta u) - \Pi(u) = \int_{0}^{L} EA \frac{du}{dx} \frac{d(\delta u)}{dx} dx - \int_{0}^{L} f(x) \delta u(x) dx$ (ignoring second order terms in $\delta u$)

3.  **Integrate by parts:** Apply integration by parts to the first term: $\int_{0}^{L} EA \frac{du}{dx} \frac{d(\delta u)}{dx} dx = \left[ EA \frac{du}{dx} \delta u \right]_{0}^{L} - \int_{0}^{L} \frac{d}{dx} \left( EA \frac{du}{dx} \right) \delta u(x) dx$

4.  **Substitute and set to zero:**
    $\delta \Pi = \left[ EA \frac{du}{dx} \delta u \right]_{0}^{L} - \int_{0}^{L} \frac{d}{dx} \left( EA \frac{du}{dx} \right) \delta u(x) dx - \int_{0}^{L} f(x) \delta u(x) dx = 0$

5.  **Apply boundary conditions:**
    *   At $x=0$: $\delta u(0) = 0$, so the first term at the lower limit is zero.
    *   At $x=L$: The boundary condition is $EA \frac{du}{dx} = 0$. This is a natural boundary condition. The term $\left[ EA \frac{du}{dx} \delta u \right]_{L}$ becomes $(0) \delta u(L) = 0$.

    The equation simplifies to:
    $-\int_{0}^{L} \frac{d}{dx} \left( EA \frac{du}{dx} \right) \delta u(x) dx - \int_{0}^{L} f(x) \delta u(x) dx = 0$

    Combine the integrals:
    $\int_{0}^{L} \left[ -\frac{d}{dx} \left( EA \frac{du}{dx} \right) - f(x) \right] \delta u(x) dx = 0$

This equation must hold for all admissible variations $\delta u(x)$ (where $\delta u(0)=0$). The only way this integral can be zero for arbitrary $\delta u(x)$ is if the term in the square brackets is zero:

$-\frac{d}{dx} \left( EA \frac{du}{dx} \right) - f(x) = 0$

This is the original differential equation. The *weak form* is the integral equation:

$\int_{0}^{L} EA \frac{du}{dx} \frac{d(\delta u)}{dx} dx = \int_{0}^{L} f(x) \delta u(x) dx$

**Key Observation:** The original differential equation had second derivatives ($\frac{d^2u}{dx^2}$ implicitly). The weak form has only first derivatives ($\frac{du}{dx}$ and $\frac{d(\delta u)}{dx}$). This reduces the smoothness requirement on the solution $u$ and test function $\delta u$.

---

### **2. Weighted Residual Approach**

The weighted residual approach directly tackles the differential equation by requiring that the *residual* (the error when the approximate solution is substituted into the differential equation) is zero in a weighted average sense over the domain.

#### **2.1 Key Concepts and Definitions**

*   **Residual ($R$):** The difference between the left-hand side and right-hand side of a differential equation when an approximate solution $u_h$ is substituted. For a general differential equation of the form $L(u) = f$, the residual is $R = L(u_h) - f$.
*   **Approximate Solution ($u_h$):** A piecewise polynomial function that approximates the true solution $u$.
*   **Test Function/Weighting Function ($w$):** An arbitrary function used to weight the residual. The choice of weighting function determines the type of weighted residual method.
*   **Weighted Residual Statement:** The requirement that the integral of the residual multiplied by a weighting function is zero over the domain: $\int_{\Omega} R \cdot w \, d\Omega = 0$.

#### **2.2 Types of Weighted Residual Methods**

The specific choice of the weighting function $w$ leads to different methods:

1.  **Galerkin Method:** The weighting functions are chosen from the same set of basis functions used to approximate the solution. If $u_h = \sum_{j=1}^n u_j \phi_j(x)$, then the weighting functions are $w_i = \phi_i(x)$. This is a very common and powerful method.

2.  **Collocation Method:** The weighting functions are Dirac delta functions, $\delta(x-x_i)$, located at specific points (collocation points) within the domain. This method forces the residual to be zero exactly at these points.

3.  **Subdomain Method:** The domain is divided into subdomains, and the weighting functions are piecewise constants (often unity within each subdomain and zero outside). The residual is enforced to be zero over each subdomain.

4.  **Least Squares Method:** The objective is to minimize the integral of the square of the residual, $\int_{\Omega} R^2 \, d\Omega$. The weighting function is chosen as $w = R$.

#### **2.3 Deriving the Weak Form using Weighted Residual Approach**

The process of deriving the weak form using the weighted residual approach involves:

1.  **Write the Differential Equation:** Start with the strong form of the differential equation.
2.  **Introduce an Approximate Solution:** Assume an approximate solution $u_h$.
3.  **Define the Residual:** Calculate the residual $R = L(u_h) - f$.
4.  **Weight the Residual:** Multiply the residual by a test function $w$.
5.  **Integrate over the Domain:** Integrate the product of the residual and test function over the domain $\Omega$.
6.  **Integrate by Parts:** Use integration by parts to reduce the order of derivatives on $u_h$. This will introduce boundary terms.
7.  **Satisfy Boundary Conditions:** Apply the boundary conditions. For essential boundary conditions, the test function $w$ is set to zero. For natural boundary conditions, they appear directly in the integrated boundary terms and are often satisfied by the choice of test function or are incorporated into the boundary conditions of the weak form.
8.  **Weak Form:** The resulting integral equation is the weak form.

#### **2.4 Example: 1D Bar under Axial Load (Weighted Residual Approach - Galerkin)**

Consider the same 1D bar problem:

Differential Equation: $-\frac{d}{dx} \left( EA \frac{du}{dx} \right) + f(x) = 0$ for $0 < x < L$
Boundary Conditions: $u(0) = 0$, $EA \frac{du}{dx}|_{x=L} = 0$

1.  **Approximate Solution:** Assume $u_h(x) = \sum_{j=1}^n u_j \phi_j(x)$, where $\phi_j(x)$ are basis functions and $u_j$ are nodal values.

2.  **Residual:**
    $R(x) = -\frac{d}{dx} \left( EA \frac{du_h}{dx} \right) + f(x)$

3.  **Weighting Functions (Galerkin):** Choose $w_i(x) = \phi_i(x)$ for $i = 1, \dots, n$.

4.  **Weighted Residual Statement:**
    $\int_{0}^{L} R(x) \phi_i(x) dx = 0$
    $\int_{0}^{L} \left[ -\frac{d}{dx} \left( EA \frac{du_h}{dx} \right) + f(x) \right] \phi_i(x) dx = 0$

5.  **Integrate by Parts:** Apply integration by parts to the first term:
    $\int_{0}^{L} -\frac{d}{dx} \left( EA \frac{du_h}{dx} \right) \phi_i(x) dx = \left[ -EA \frac{du_h}{dx} \phi_i(x) \right]_{0}^{L} - \int_{0}^{L} EA \frac{du_h}{dx} \frac{d\phi_i}{dx} dx$

6.  **Apply Boundary Conditions:**
    *   At $x=0$: Since $u(0)=0$, the basis functions must satisfy $\phi_i(0) = 0$ (unless $i=1$ is a prescribed boundary node, which is typically handled by setting $u_1=0$). Assuming $\phi_i(0)=0$ for all $i$, the boundary term at $x=0$ is zero.
    *   At $x=L$: The natural boundary condition is $EA \frac{du_h}{dx}|_{x=L} = 0$. So, the boundary term at $x=L$ becomes $-(0) \phi_i(L) = 0$.

    The equation simplifies to:
    $-\int_{0}^{L} EA \frac{du_h}{dx} \frac{d\phi_i}{dx} dx + \int_{0}^{L} f(x) \phi_i(x) dx = 0$

7.  **Weak Form:**
    $\int_{0}^{L} EA \frac{du_h}{dx} \frac{d\phi_i}{dx} dx = \int_{0}^{L} f(x) \phi_i(x) dx$

This is the same weak form derived using the variational approach.

---

### **3. Relationship Between Variational and Weighted Residual Approaches**

*   **Connection:** For many problems, particularly those derived from variational principles (like minimization of potential energy), the Galerkin weighted residual method naturally leads to the same weak form as the variational approach.
*   **Generality:** The weighted residual approach is more general. It can be applied to problems that do not have a clear variational formulation or where the functional is not readily available. Examples include problems with non-symmetric operators or mixed boundary conditions.
*   **Mathematical Equivalence:** If a functional exists, setting its first variation to zero is equivalent to the Galerkin weighted residual method applied to the Euler-Lagrange equation derived from that functional.
*   **Choice:**
    *   **Variational Approach:** Preferred when a suitable energy functional is known, as it provides a strong physical basis (energy minimization).
    *   **Weighted Residual Approach (Galerkin):** Preferred for its generality and when a functional is not easily identifiable. It's a robust method for a wide range of problems.

---

### **4. Formulation Techniques for FEM**

Both variational and weighted residual approaches are used to transform a continuous problem (governed by a differential equation) into a system of algebraic equations suitable for numerical solution by FEM.

The general process after obtaining the weak form is:

1.  **Discretization:** Divide the domain into finite elements.
2.  **Elementwise Formulation:** For each element, approximate the solution $u_h$ using shape functions and nodal values: $u_h^e(x) = \sum_{i=1}^{m} N_i(x) u_i^e$, where $N_i$ are shape functions and $u_i^e$ are nodal values within the element.
3.  **Derive Element Stiffness Matrix and Load Vector:** Substitute the element approximation into the weak form. This results in a system of equations for each element: $[k^e] \{u^e\} = \{f^e\}$.
    *   $[k^e] = \int_{V_e} [B]^T [D] [B] dV$ (for structural mechanics, where $[B]$ relates strain to nodal displacements and $[D]$ is the constitutive matrix) or equivalent integral for other physics.
    *   $\{f^e\} = \int_{V_e} \{N\}^T \{q\} dV + \sum \{N\}^T P$ (where $\{q\}$ is distributed load and $P$ are point loads).
4.  **Assembly:** Assemble the element matrices and vectors into a global system of equations: $[K] \{U\} = \{F\}$.
5.  **Apply Boundary Conditions:** Impose the essential boundary conditions on the global system.
6.  **Solve:** Solve the system of linear algebraic equations for the unknown nodal values $\{U\}$.

---

### **5. Practice Questions and Exercises**

**Question 1:**
For the 1D steady-state heat conduction problem with a constant thermal conductivity $k$, cross-sectional area $A$, and a heat source $q(x)$, the governing equation is:
$-\frac{d}{dx} \left( kA \frac{dT}{dx} \right) + q(x) = 0$ for $0 < x < L$.
Assume boundary conditions: $T(0) = T_0$ (fixed temperature) and $kA \frac{dT}{dx}|_{x=L} = Q_L$ (prescribed heat flux).

Derive the weak form of this problem using the **variational approach**, assuming the functional is:
$\Pi(T) = \int_{0}^{L} \frac{1}{2} kA \left(\frac{dT}{dx}\right)^2 dx - \int_{0}^{L} q(x) T(x) dx - Q_L T(L)$

**Answer 1:**
The potential energy functional is $\Pi(T) = \int_{0}^{L} \frac{1}{2} kA \left(\frac{dT}{dx}\right)^2 dx - \int_{0}^{L} q(x) T(x) dx - Q_L T(L)$.
We need to find the first variation $\delta \Pi = 0$.
Let $T = T + \delta T$, where $\delta T(0) = 0$ (since $T(0)$ is fixed).
$\delta \Pi = \frac{d\Pi}{dT}\delta T$ is not directly applicable to the $Q_L T(L)$ term.
Let's use $\Pi(T+\delta T) - \Pi(T)$:
$\Pi(T+\delta T) = \int_{0}^{L} \frac{1}{2} kA \left(\frac{d(T+\delta T)}{dx}\right)^2 dx - \int_{0}^{L} q(x) (T+\delta T)(x) dx - Q_L (T(L)+\delta T(L))$
$\delta \Pi = \Pi(T+\delta T) - \Pi(T) = \int_{0}^{L} kA \frac{dT}{dx} \frac{d(\delta T)}{dx} dx - \int_{0}^{L} q(x) \delta T(x) dx - Q_L \delta T(L)$

Integrate by parts the first term:
$\int_{0}^{L} kA \frac{dT}{dx} \frac{d(\delta T)}{dx} dx = \left[ kA \frac{dT}{dx} \delta T \right]_{0}^{L} - \int_{0}^{L} \frac{d}{dx} \left( kA \frac{dT}{dx} \right) \delta T(x) dx$

Substitute back into $\delta \Pi$:
$\delta \Pi = \left[ kA \frac{dT}{dx} \delta T \right]_{0}^{L} - \int_{0}^{L} \frac{d}{dx} \left( kA \frac{dT}{dx} \right) \delta T(x) dx - \int_{0}^{L} q(x) \delta T(x) dx - Q_L \delta T(L) = 0$

Apply boundary conditions:
*   At $x=0$: $\delta T(0) = 0$, so $\left[ kA \frac{dT}{dx} \delta T \right]_{0} = 0$.
*   At $x=L$: The boundary term is $\left[ kA \frac{dT}{dx} \delta T \right]_{L} = kA \frac{dT}{dx}|_{x=L} \delta T(L)$. We are given $kA \frac{dT}{dx}|_{x=L} = Q_L$.
    So, the term is $Q_L \delta T(L)$.

The equation becomes:
$Q_L \delta T(L) - \int_{0}^{L} \frac{d}{dx} \left( kA \frac{dT}{dx} \right) \delta T(x) dx - \int_{0}^{L} q(x) \delta T(x) dx - Q_L \delta T(L) = 0$

The $Q_L \delta T(L)$ terms cancel out.
$-\int_{0}^{L} \frac{d}{dx} \left( kA \frac{dT}{dx} \right) \delta T(x) dx - \int_{0}^{L} q(x) \delta T(x) dx = 0$

Rearranging and combining integrals:
$\int_{0}^{L} \left[ -\frac{d}{dx} \left( kA \frac{dT}{dx} \right) - q(x) \right] \delta T(x) dx = 0$

Since this must hold for all admissible $\delta T$ (where $\delta T(0)=0$), the term in the bracket must be zero, which recovers the original differential equation.

The weak form is:
$\int_{0}^{L} kA \frac{dT}{dx} \frac{d(\delta T)}{dx} dx = \int_{0}^{L} q(x) \delta T(x) dx + Q_L \delta T(L)$

**Question 2:**
Consider the same heat conduction problem as in Question 1. Derive the weak form using the **Galerkin weighted residual approach**.

**Answer 2:**
The governing equation is: $-\frac{d}{dx} \left( kA \frac{dT}{dx} \right) + q(x) = 0$.
Boundary conditions: $T(0) = T_0$ (essential) and $kA \frac{dT}{dx}|_{x=L} = Q_L$ (natural).

1.  **Approximate Solution:** $T_h(x) = \sum_{j=1}^n T_j \phi_j(x)$. Note that $\phi_j(0)$ must be 0 for all $j$ if $T(0)$ is fixed, or $T_1$ is set to $T_0$. Let's assume $T_h(x) = T_0 \phi_0(x) + \sum_{j=1}^n T_j \phi_j(x)$ where $\phi_0(0)=1$ and $\phi_j(0)=0$ for $j>0$. For simplicity in the weak form derivation, we can consider $T_h(x)$ as a trial solution with specified essential boundary condition.

2.  **Residual:** $R(x) = -\frac{d}{dx} \left( kA \frac{dT_h}{dx} \right) + q(x)$.

3.  **Weighting Functions (Galerkin):** $w_i(x) = \phi_i(x)$ for $i = 1, \dots, n$.

4.  **Weighted Residual Statement:**
    $\int_{0}^{L} R(x) \phi_i(x) dx = 0$
    $\int_{0}^{L} \left[ -\frac{d}{dx} \left( kA \frac{dT_h}{dx} \right) + q(x) \right] \phi_i(x) dx = 0$

5.  **Integrate by Parts:**
    $\int_{0}^{L} -\frac{d}{dx} \left( kA \frac{dT_h}{dx} \right) \phi_i(x) dx = \left[ -kA \frac{dT_h}{dx} \phi_i(x) \right]_{0}^{L} - \int_{0}^{L} kA \frac{dT_h}{dx} \frac{d\phi_i}{dx} dx$

6.  **Apply Boundary Conditions:**
    *   At $x=0$: Since $T(0) = T_0$, the basis functions associated with unknown nodal values satisfy $\phi_i(0) = 0$ for $i \ge 1$. So, $\left[ -kA \frac{dT_h}{dx} \phi_i(x) \right]_{0} = 0$.
    *   At $x=L$: The natural boundary condition is $kA \frac{dT_h}{dx}|_{x=L} = Q_L$. So, $\left[ -kA \frac{dT_h}{dx} \phi_i(x) \right]_{L} = -Q_L \phi_i(L)$.

    The equation becomes:
    $-Q_L \phi_i(L) - \int_{0}^{L} kA \frac{dT_h}{dx} \frac{d\phi_i}{dx} dx + \int_{0}^{L} q(x) \phi_i(x) dx = 0$

7.  **Weak Form:**
    $\int_{0}^{L} kA \frac{dT_h}{dx} \frac{d\phi_i}{dx} dx = \int_{0}^{L} q(x) \phi_i(x) dx + Q_L \phi_i(L)$

This weak form is equivalent to the one obtained from the variational approach. The $\phi_i(L)$ term arises from the natural boundary condition at $x=L$.

---

### **6. Important Points to Remember**

*   **Variational Approach:** Based on energy minimization. Leads to a weak form by taking the first variation of the energy functional and integrating by parts. Requires a known functional.
*   **Weighted Residual Approach:** Directly addresses the residual of the differential equation. Forces the weighted average of the residual to be zero. More general than the variational approach.
*   **Galerkin Method:** A specific type of weighted residual method where test functions match shape functions. It often yields the same results as the variational approach.
*   **Weak Form:** Reduces the order of derivatives, allowing for the use of lower-order polynomial approximations (shape functions) in FEM.
*   **Boundary Conditions:**
    *   **Essential (Dirichlet) Boundary Conditions:** Directly imposed on the solution (e.g., prescribed displacement, temperature). These affect the choice of shape functions or are directly applied to nodal values. Test functions are zero at these boundaries.
    *   **Natural Boundary Conditions:** Arise from the integration by parts during the weak form derivation. They appear in the boundary integral terms. If they are prescribed, they are incorporated into the equations. If not prescribed, they are often zero (e.g., free end).
*   The formulation techniques are the bridge between the physical problem (differential equation) and the numerical solution process (system of algebraic equations).

---
