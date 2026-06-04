---
title: "Potential energy and equilibrium"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446429c"
status: "completed"
scrapedAt: "2026-05-20T18:13:00.665Z"
---
# Finite Element Methods - Module 3: Derivation of Strain

## Topic: Potential Energy and Equilibrium

This module delves into the fundamental principles of deriving strain and understanding the behavior of structures under load using the concept of potential energy and equilibrium. We will explore how these principles are foundational to the Finite Element Method (FEM).

---

### 1. Learning Outcomes Covered

This section outlines the learning outcomes directly addressed by this topic:

*   **Understand the governing equations of various physical phenomena and basic procedure of FEM (CO1 - K2):** This topic contributes by explaining the underlying physical principles (equilibrium) that govern how structures respond to loads, which are then translated into mathematical equations solved by FEM.
*   **Evaluate element stress using energy method and study Galekin weight residual formulations (CO4 - K5):** The principle of minimum potential energy is directly an energy method used to determine equilibrium configurations and subsequently stresses. This topic lays the groundwork for understanding how energy principles are used to calculate stresses within finite elements.

---

### 2. Key Concepts and Definitions

This section introduces the core concepts and defines important terms relevant to potential energy and equilibrium.

#### 2.1. Equilibrium

*   **Definition:** Equilibrium in mechanics refers to a state where a system is at rest or moving with constant velocity. For structural mechanics, it means that the sum of all forces and moments acting on a body (or a part of it) is zero.
*   **Static Equilibrium:** The most common scenario in structural analysis where the structure is subjected to static loads and remains stationary.
*   **Conditions for Equilibrium:**
    *   Sum of forces in any direction = 0 ($\sum F_x = 0$, $\sum F_y = 0$, $\sum F_z = 0$)
    *   Sum of moments about any point = 0 ($\sum M_x = 0$, $\sum M_y = 0$, $\sum M_z = 0$)
*   **Relevance to FEM:** FEM aims to find a solution that satisfies equilibrium conditions at all points within the structure, or at least approximately so, by discretizing the structure into finite elements.

#### 2.2. Potential Energy

*   **Definition:** Potential energy is the energy stored within a system by virtue of the position or configuration of its components. In structural mechanics, it is primarily associated with the deformation of the material.
*   **Types of Potential Energy:**
    *   **Strain Energy ($U$):** The energy stored within a deformable body due to the work done by applied forces in deforming it. It represents the elastic potential energy of the deformed material.
        *   For a one-dimensional bar under axial load, $U = \int_0^L \frac{1}{2} \sigma \epsilon \, dV = \int_0^L \frac{1}{2} E A \epsilon^2 \, dx = \int_0^L \frac{1}{2} \frac{P^2}{A E} \, dx$.
        *   *Reference: Reddy, Chapter 3; Cook, Chapter 5; Bhavikatti, Chapter 3.*
    *   **Potential Energy of Applied Forces ($V$):** The energy associated with the applied forces. For conservative forces (like gravity or applied loads acting through a displacement), this is often expressed as the negative of the work done by these forces.
        *   For a concentrated force $P$ acting over a displacement $\delta$, $V = -P \delta$.
        *   For distributed loads $q(x)$ over a displacement $w(x)$, $V = -\int q(x) w(x) \, dx$.
        *   *Reference: Reddy, Chapter 3; Segerlind, Chapter 3.*

*   **Total Potential Energy ($\Pi$):** The sum of the strain energy and the potential energy of applied forces.
    *   $\Pi = U + V$
    *   *Reference: Reddy, Chapter 3; Bhavikatti, Chapter 3.*

#### 2.3. Principle of Minimum Potential Energy (PMPE)

*   **Statement:** For a conservative elastic system in equilibrium, the total potential energy is at a minimum. This means that if we consider all possible compatible deformations, the actual deformation that the system settles into will correspond to the configuration that minimizes the total potential energy.
*   **Mathematical Formulation:** For equilibrium, the first variation of the total potential energy with respect to the displacements is zero.
    *   $\delta \Pi = \delta U + \delta V = 0$
*   **Significance in FEM:** This principle is a powerful tool for deriving the governing equations of FEM. By minimizing the total potential energy with respect to nodal displacements, we obtain a system of algebraic equations that represent the equilibrium conditions of the discretized structure.
    *   $\frac{\partial \Pi}{\partial \{u\}} = 0$, where $\{u\}$ is the vector of nodal displacements.
    *   *Reference: Reddy, Chapter 3; Cook, Chapter 5; Bhavikatti, Chapter 3; Fish & Belytschko, Chapter 2.*

#### 2.4. Relationship between Stress, Strain, and Potential Energy

*   **Strain-Displacement Relations:** Strain ($\epsilon$) is directly related to the displacement ($u$). For a 1D bar, $\epsilon = \frac{du}{dx}$.
*   **Stress-Strain Relations (Hooke's Law):** Stress ($\sigma$) is related to strain through material properties (e.g., Young's Modulus, $E$). For a 1D bar, $\sigma = E \epsilon$.
*   **Strain Energy Density:** The energy stored per unit volume. For a linear elastic material, strain energy density is $\frac{1}{2} \sigma \epsilon = \frac{1}{2} E \epsilon^2 = \frac{1}{2} \frac{\sigma^2}{E}$.
*   **Deriving Equilibrium Equations from PMPE:**
    1.  Express displacements in terms of nodal displacements using shape functions: $\{u\} = [N] \{\delta\}$.
    2.  Calculate strains in terms of nodal displacements: $\{\epsilon\} = [B] \{\delta\}$, where $[B] = \frac{d[N]}{dx}$.
    3.  Calculate stresses using material constitutive relations: $\{\sigma\} = [D] \{\epsilon\} = [D] [B] \{\delta\}$.
    4.  Calculate strain energy: $U = \int_V \frac{1}{2} \{\sigma\}^T \{\epsilon\} \, dV = \int_V \frac{1}{2} \{\delta\}^T [B]^T [D] [B] \{\delta\} \, dV = \frac{1}{2} \{\delta\}^T [k_e] \{\delta\}$, where $[k_e] = \int_V [B]^T [D] [B] \, dV$ is the element stiffness matrix.
    5.  Calculate potential energy of applied forces. For nodal forces $\{F\}$, $V = -\{\delta\}^T \{F\}$.
    6.  Formulate the total potential energy: $\Pi = \frac{1}{2} \{\delta\}^T [k_e] \{\delta\} - \{\delta\}^T \{F\}$.
    7.  Minimize $\Pi$ with respect to $\{\delta\}$: $\frac{\partial \Pi}{\partial \{\delta\}} = [k_e] \{\delta\} - \{F\} = \{0\}$. This yields the element equilibrium equation: $[k_e] \{\delta\} = \{F\}$.
    *   *Reference: Reddy, Chapter 3; Cook, Chapter 5; Bhavikatti, Chapter 3; Segerlind, Chapter 3.*

---

### 3. Examples

#### Example 3.1: Bar Element under Axial Load

Consider a uniform elastic bar of length $L$, cross-sectional area $A$, and Young's modulus $E$, subjected to an axial force $P$ at its free end and fixed at the other end. We want to find the displacement at the free end using the Principle of Minimum Potential Energy.

*   **Assumptions:**
    *   The bar is prismatic (uniform $A$ and $E$).
    *   The material is linear elastic and isotropic.
    *   The applied force is axial and static.
    *   Displacements are small.

*   **Steps:**
    1.  **Displacement Field:** Assume a linear displacement field along the bar. Let $u(x)$ be the displacement at position $x$. We can represent this using two nodes, at $x=0$ and $x=L$. Let $u_1$ be the displacement at $x=0$ and $u_2$ be the displacement at $x=L$.
        Using linear shape functions:
        $u(x) = N_1(x) u_1 + N_2(x) u_2$
        $N_1(x) = 1 - \frac{x}{L}$, $N_2(x) = \frac{x}{L}$
        So, $u(x) = (1 - \frac{x}{L}) u_1 + (\frac{x}{L}) u_2$.

    2.  **Strain:** $\epsilon(x) = \frac{du}{dx} = \frac{d}{dx} [(1 - \frac{x}{L}) u_1 + (\frac{x}{L}) u_2] = -\frac{1}{L} u_1 + \frac{1}{L} u_2$.
        In matrix form: $\epsilon = [B] \{\delta\}$, where $\{\delta\} = \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$ and $[B] = [-\frac{1}{L} \quad \frac{1}{L}]$.

    3.  **Stress:** $\sigma(x) = E \epsilon(x) = E (-\frac{1}{L} u_1 + \frac{1}{L} u_2)$.
        In matrix form: $\{\sigma\} = [D] \{\epsilon\}$, where $[D] = [E]$.

    4.  **Strain Energy ($U$):**
        $U = \int_0^L \frac{1}{2} \sigma \epsilon \, dx = \int_0^L \frac{1}{2} E \epsilon^2 \, dx$
        $U = \int_0^L \frac{1}{2} E \left(-\frac{1}{L} u_1 + \frac{1}{L} u_2\right)^2 \, dx$
        $U = \frac{1}{2} E \left(\frac{1}{L^2}\right) \int_0^L (u_2 - u_1)^2 \, dx$
        $U = \frac{1}{2} E \frac{(u_2 - u_1)^2}{L^2} [x]_0^L = \frac{1}{2} E \frac{(u_2 - u_1)^2}{L^2} (L) = \frac{1}{2} \frac{AE}{L} (u_2 - u_1)^2$.
        In matrix form: $U = \frac{1}{2} \{\delta\}^T [k_e] \{\delta\}$, where $[k_e] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$.

    5.  **Potential Energy of Applied Forces ($V$):**
        The force $P$ is applied at $x=L$, so it acts over displacement $u_2$. The force is acting downwards (if $P>0$ means pulling downwards) or upwards (if $P>0$ means pulling upwards). Let's assume $P$ is an external force at node 2. The potential energy of the force is $-P u_2$.
        $V = -P u_2$.
        In matrix form: $V = -\{\delta\}^T \{F\}$, where $\{F\} = \begin{Bmatrix} 0 \\ P \end{Bmatrix}$.

    6.  **Total Potential Energy ($\Pi$):**
        $\Pi = U + V = \frac{1}{2} \frac{AE}{L} (u_2 - u_1)^2 - P u_2$
        $\Pi = \frac{1}{2} \frac{AE}{L} (u_2^2 - 2 u_1 u_2 + u_1^2) - P u_2$.

    7.  **Boundary Conditions:** The bar is fixed at $x=0$, so $u_1 = 0$.
        $\Pi = \frac{1}{2} \frac{AE}{L} u_2^2 - P u_2$.

    8.  **Minimization:** Differentiate $\Pi$ with respect to $u_2$ and set to zero:
        $\frac{\partial \Pi}{\partial u_2} = \frac{AE}{L} u_2 - P = 0$
        $\frac{AE}{L} u_2 = P$
        $u_2 = \frac{PL}{AE}$.

*   **Result:** This matches the classical solution for the displacement of a bar under axial load.

#### Example 3.2: Cantilever Beam

Consider a cantilever beam of length $L$, Young's modulus $E$, and moment of inertia $I$, subjected to a concentrated load $P$ at its free end.

*   **Assumptions:**
    *   Beam theory (Euler-Bernoulli) applies.
    *   Small displacements and rotations.
    *   Linear elastic material.

*   **Steps (Simplified using PMPE concept):**
    1.  **Discretization:** A cantilever beam can be discretized into one or more beam elements. For simplicity, let's consider a single beam element of length $L$ with nodes at the fixed end (node 1) and the free end (node 2).
    2.  **Nodal Degrees of Freedom:** Each node has a vertical displacement ($v$) and a rotation ($\theta$). So, the nodal displacement vector is $\{\delta\} = \begin{Bmatrix} v_1 & \theta_1 & v_2 & \theta_2 \end{Bmatrix}^T$.
    3.  **Shape Functions for Beam Element:** For a cubic Hermite shape functions are used for beam elements to capture bending behavior.
        $v(x) = N_{v1}(x) v_1 + N_{\theta 1}(x) \theta_1 + N_{v2}(x) v_2 + N_{\theta 2}(x) \theta_2$
        $N_{v1}(x) = 2(\frac{x}{L})^3 - 3(\frac{x}{L})^2 + 1$
        $N_{\theta 1}(x) = (\frac{x}{L})^3 - 2(\frac{x}{L})^2 + \frac{x}{L}$
        $N_{v2}(x) = -2(\frac{x}{L})^3 + 3(\frac{x}{L})^2$
        $N_{\theta 2}(x) = (\frac{x}{L})^3 - (\frac{x}{L})^2 + \frac{x}{L}$
    4.  **Strain (Curvature for Beam Bending):** For Euler-Bernoulli beam theory, the curvature $\kappa = \frac{d^2v}{dx^2}$.
        $\kappa(x) = \frac{d^2v}{dx^2} = \sum_{i=1}^{4} \frac{d^2N_i(x)}{dx^2} \delta_i$.
        Let $[B]$ be the curvature matrix, where $\kappa = [B] \{\delta\}$.
    5.  **Stress (Bending Stress):** For beam bending, stress is related to curvature by $\sigma = E y \kappa$, where $y$ is the distance from the neutral axis.
        For FEM formulation, we consider stress in the form $\{\sigma\} = [D] \{\epsilon\}$, where $\{\epsilon\}$ here represents curvature and $[D]$ would be $E y$. However, for the stiffness matrix derivation, it's more common to work with the relationship directly in terms of the stiffness matrix derivation.
    6.  **Strain Energy ($U$):**
        $U = \int_0^L \frac{1}{2} EI \kappa^2 \, dx = \int_0^L \frac{1}{2} EI \left(\frac{d^2v}{dx^2}\right)^2 \, dx$
        Substituting the shape functions and performing the integration yields the element stiffness matrix for a beam element:
        $[k_e] = \frac{EI}{L^3} \begin{bmatrix} 12 & 6L & -12 & 6L \\ 6L & 4L^2 & -6L & 2L^2 \\ -12 & -6L & 12 & -6L \\ 6L & 2L^2 & -6L & 4L^2 \end{bmatrix}$.
    7.  **Potential Energy of Applied Forces ($V$):**
        A downward force $P$ at the free end ($x=L$) corresponds to displacement $v_2$. The potential energy is $V = -P v_2$.
        The force vector at the nodes would be $\{F\} = \begin{Bmatrix} 0 & 0 & P & 0 \end{Bmatrix}^T$ (assuming $P$ acts downwards).
    8.  **Total Potential Energy ($\Pi$):**
        $\Pi = U + V = \frac{1}{2} \{\delta\}^T [k_e] \{\delta\} - \{F\}^T \{\delta\}$.
    9.  **Boundary Conditions:** For a cantilever beam fixed at $x=0$, we have $v_1 = 0$ and $\theta_1 = 0$. This means the first two degrees of freedom are known.
    10. **Minimization:** Apply the boundary conditions and solve the resulting system of equations for the unknown displacements and rotations. The vertical displacement at the free end $v_2$ can be found. (This requires assembling the global stiffness matrix and solving, which goes beyond just the concept of potential energy but demonstrates its application.)

*   **Result (Classical):** The vertical displacement at the free end of a cantilever beam under a tip load $P$ is $v_2 = \frac{PL^3}{3EI}$. FEM, using the PMPE, will approximate this value.

---

### 4. Practice Questions or Exercises

**Question 4.1 (CO1, CO4):**
State the Principle of Minimum Potential Energy. How is it used to derive the equilibrium equations in Finite Element Analysis?

**Question 4.2 (CO4):**
For a one-dimensional bar element with Young's modulus $E$, area $A$, and length $L$, the element stiffness matrix is given by $[k_e] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$. If the nodal displacement vector is $\{\delta\} = \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$, derive the strain energy stored in the element using the formula $U = \frac{1}{2} \{\delta\}^T [k_e] \{\delta\}$.

**Question 4.3 (CO4):**
Consider a spring with stiffness $k$. If a force $F$ is applied and causes a displacement $\delta$, derive the total potential energy of the system and use the Principle of Minimum Potential Energy to find the equilibrium displacement $\delta$.

**Question 4.4 (CO4):**
A beam element has the following element stiffness matrix:
$[k_e] = \frac{EI}{L^3} \begin{bmatrix} 12 & 6L & -12 & 6L \\ 6L & 4L^2 & -6L & 2L^2 \\ -12 & -6L & 12 & -6L \\ 6L & 2L^2 & -6L & 4L^2 \end{bmatrix}$
The nodal degrees of freedom are $\{\delta\} = \begin{Bmatrix} v_1 & \theta_1 & v_2 & \theta_2 \end{Bmatrix}^T$. If a transverse force $F$ is applied at node 2 ($v_2$), write down the total potential energy of the element in terms of $\{\delta\}$. What boundary conditions would be applied for a cantilever beam, and how would you minimize the potential energy to find the nodal displacements?

---

### 5. Answers to Practice Questions

**Answer 4.1:**
The Principle of Minimum Potential Energy states that for a conservative elastic system in equilibrium, the total potential energy is at a minimum.
In FEM, we discretize the structure and express the total potential energy ($\Pi$) as a function of nodal displacements. $\Pi = U + V$, where $U$ is the strain energy and $V$ is the potential energy of applied forces. By setting the first variation of $\Pi$ with respect to each nodal displacement to zero ($\frac{\partial \Pi}{\partial \{\delta\}} = 0$), we obtain a system of linear algebraic equations $[K] \{\Delta\} = \{F\}$, where $[K]$ is the global stiffness matrix, $\{\Delta\}$ is the global displacement vector, and $\{F\}$ is the global force vector. This system of equations ensures that the equilibrium conditions are met for the discretized structure.

**Answer 4.2:**
Given: $[k_e] = \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$ and $\{\delta\} = \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$.
The strain energy $U$ is given by:
$U = \frac{1}{2} \{\delta\}^T [k_e] \{\delta\}$
$U = \frac{1}{2} \begin{bmatrix} u_1 & u_2 \end{bmatrix} \left( \frac{AE}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \right) \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$
$U = \frac{1}{2} \frac{AE}{L} \begin{bmatrix} u_1 & u_2 \end{bmatrix} \begin{Bmatrix} u_1 - u_2 \\ -u_1 + u_2 \end{Bmatrix}$
$U = \frac{1}{2} \frac{AE}{L} [u_1(u_1 - u_2) + u_2(-u_1 + u_2)]$
$U = \frac{1}{2} \frac{AE}{L} [u_1^2 - u_1 u_2 - u_1 u_2 + u_2^2]$
$U = \frac{1}{2} \frac{AE}{L} (u_1^2 - 2u_1 u_2 + u_2^2)$
This can also be written as $U = \frac{1}{2} \frac{AE}{L} (u_2 - u_1)^2$, which is consistent with the strain energy formula $U = \frac{1}{2} k \delta^2$ for a bar, where $k = \frac{AE}{L}$ and $\delta = u_2 - u_1$.

**Answer 4.3:**
For a spring with stiffness $k$, let the applied force be $F$ and the displacement be $\delta$.
*   **Strain Energy ($U$):** $U = \frac{1}{2} k \delta^2$.
*   **Potential Energy of Applied Force ($V$):** The work done by the force $F$ is $-F\delta$ (since the force opposes the displacement in terms of energy formulation, or we consider the potential of the force as $-F\delta$ if $F$ is acting in the positive direction of displacement).
    $V = -F \delta$.
*   **Total Potential Energy ($\Pi$):** $\Pi = U + V = \frac{1}{2} k \delta^2 - F \delta$.
*   **Minimization:** To find the equilibrium displacement, we minimize $\Pi$ with respect to $\delta$:
    $\frac{\partial \Pi}{\partial \delta} = \frac{\partial}{\partial \delta} (\frac{1}{2} k \delta^2 - F \delta) = 0$
    $k \delta - F = 0$
    $k \delta = F$
    $\delta = \frac{F}{k}$.
    This confirms the basic spring equation.

**Answer 4.4:**
Given the beam element stiffness matrix $[k_e]$ and nodal displacement vector $\{\delta\} = \begin{Bmatrix} v_1 & \theta_1 & v_2 & \theta_2 \end{Bmatrix}^T$.
*   **Strain Energy ($U$):**
    $U = \frac{1}{2} \{\delta\}^T [k_e] \{\delta\}$
    $U = \frac{1}{2} \begin{bmatrix} v_1 & \theta_1 & v_2 & \theta_2 \end{bmatrix} \left( \frac{EI}{L^3} \begin{bmatrix} 12 & 6L & -12 & 6L \\ 6L & 4L^2 & -6L & 2L^2 \\ -12 & -6L & 12 & -6L \\ 6L & 2L^2 & -6L & 4L^2 \end{bmatrix} \right) \begin{Bmatrix} v_1 \\ \theta_1 \\ v_2 \\ \theta_2 \end{Bmatrix}$
    *(The full expanded form is lengthy, but this is the correct representation of strain energy.)*

*   **Potential Energy of Applied Forces ($V$):**
    If a transverse force $F$ is applied at node 2, the potential energy of this force is $V = -F v_2$.
    The force vector is $\{F\} = \begin{Bmatrix} 0 \\ 0 \\ F \\ 0 \end{Bmatrix}$ (assuming $F$ acts downwards, and positive $v$ is upwards).
    Then $V = -\{F\}^T \{\delta\} = - \begin{bmatrix} 0 & 0 & F & 0 \end{bmatrix} \begin{Bmatrix} v_1 \\ \theta_1 \\ v_2 \\ \theta_2 \end{Bmatrix} = -F v_2$.

*   **Total Potential Energy ($\Pi$):**
    $\Pi = U + V = \frac{1}{2} \{\delta\}^T [k_e] \{\delta\} - F v_2$.

*   **Boundary Conditions for a Cantilever Beam:**
    The beam is fixed at node 1 ($x=0$). Therefore, the displacement and rotation at node 1 are zero:
    $v_1 = 0$
    $\theta_1 = 0$

*   **Minimization:**
    To minimize $\Pi$, we would set the partial derivative of $\Pi$ with respect to the *unknown* nodal displacements ($v_2$ and $\theta_2$) to zero. After applying the boundary conditions ($v_1=0, \theta_1=0$), the total potential energy becomes a function of $v_2$ and $\theta_2$.
    $\frac{\partial \Pi}{\partial v_2} = 0$
    $\frac{\partial \Pi}{\partial \theta_2} = 0$
    These equations, when expanded, will result in the element equilibrium equations relating $v_2$ and $\theta_2$ to the applied force $F$.

---

### 6. Important Points to Remember

*   **Equilibrium** is the fundamental physical principle underlying structural analysis. All equilibrium methods seek to satisfy the conditions $\sum F = 0$ and $\sum M = 0$.
*   The **Principle of Minimum Potential Energy (PMPE)** is a variational principle that states the system will deform into a configuration that minimizes its total potential energy.
*   **Total Potential Energy ($\Pi$)** is the sum of **strain energy ($U$)** and the **potential energy of applied forces ($V$)**.
*   PMPE is a powerful tool for deriving the governing **stiffness matrices** and **force vectors** in FEM.
*   Minimizing $\Pi$ with respect to nodal displacements leads to the **element equilibrium equations**: $[k_e] \{\delta\} = \{F\}$.
*   Understanding strain energy ($U = \int \frac{1}{2} \sigma \epsilon \, dV$) is crucial for calculating stiffness and stresses.
*   The potential energy of applied loads is typically negative of the work done by those loads.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. References and Further Reading

*   **Reddy, J. N. (2009).** *An Introduction to the Finite Element Method* (3rd ed.). McGraw-Hill Education. (Chapter 3)
*   **Cook, R. D. (2008).** *Concepts and Applications of Finite Element Analysis* (3rd ed.). Wiley. (Chapter 5)
*   **Bhavikatti, S. S. (2008).** *Finite Element Analysis* (3rd ed.). New Age Publisher. (Chapter 3)
*   **Fish, J., & Belytschko, T. (2007).** *A First Course in Finite Elements* (2nd ed.). John Wiley & Sons, Ltd. (Chapter 2)
*   **Segerlind, L. J. (2010).** *Applied Finite Element Analysis* (2nd ed.). John Wiley and Sons. (Chapter 3)

---

This concludes the notes for the topic "Potential Energy and Equilibrium" within Module 3. Remember that this topic forms the bedrock for many subsequent FEM formulations, particularly those based on variational principles.