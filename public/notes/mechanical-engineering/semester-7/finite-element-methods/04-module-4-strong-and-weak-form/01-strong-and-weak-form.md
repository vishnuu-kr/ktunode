---
title: "Strong and Weak form"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044642a2"
status: "completed"
scrapedAt: "2026-05-20T18:13:04.243Z"
---
# FINITE ELEMENT METHODS - Module 4: Strong and Weak Form

## Introduction

This module delves into the fundamental concepts of the **Strong Form** and **Weak Form** of governing differential equations, which are crucial for understanding and applying the Finite Element Method (FEM). We will explore how these forms are derived and their significance in solving various physical problems.

**Course Outcomes Addressed:**

*   **CO1:** To understand the governing equations of various physical phenomena and basic procedure of FEM. (Knowledge Level: K2)

**Learning Outcomes Covered:**

*   Understanding the concept of Strong and Weak form of governing differential equations.

## 1. Governing Differential Equations (PDEs) - The Strong Form

Most physical phenomena in engineering and science are described by Partial Differential Equations (PDEs). The FEM aims to find approximate solutions to these PDEs over a given domain.

**Definition: Strong Form**

The **Strong Form** of a differential equation is the equation as it is originally stated. It requires the solution to be sufficiently differentiable to satisfy the equation in a classical sense. For a PDE, this means the derivatives present in the equation must exist and be continuous within the domain.

**Key Characteristics of the Strong Form:**

*   **Classical Solution:** Requires a solution that is differentiable up to the order of the highest derivative in the equation.
*   **Direct Satisfaction:** The equation must be satisfied point-wise (or almost everywhere) within the domain.

**Examples of Governing Equations (Strong Form):**

Let's consider some common examples from mechanics and heat transfer:

**1. One-Dimensional Heat Conduction (Steady State):**

*   **Equation:**
    $$-\frac{d}{dx}\left(k(x)\frac{du}{dx}\right) + q(x) = 0, \quad 0 < x < L$$
    where:
    *   $u(x)$ is the temperature at position $x$.
    *   $k(x)$ is the thermal conductivity (can be a function of $x$).
    *   $q(x)$ is the heat source term.
    *   $L$ is the length of the domain.

*   **Requirements for Strong Solution:** For a strong solution, $u(x)$ must be continuous, and its first derivative $\frac{du}{dx}$ must be continuous and differentiable such that $\frac{d}{dx}\left(k(x)\frac{du}{dx}\right)$ exists.

**2. One-Dimensional Elastic Bar (Axial Deformation):**

*   **Equation:**
    $$-\frac{d}{dx}\left(E(x)A(x)\frac{du}{dx}\right) + f(x) = 0, \quad 0 < x < L$$
    where:
    *   $u(x)$ is the displacement at position $x$.
    *   $E(x)$ is the Young's modulus.
    *   $A(x)$ is the cross-sectional area.
    *   $f(x)$ is the distributed axial force.

*   **Requirements for Strong Solution:** Similar to the heat conduction problem, a strong solution requires $u(x)$ to be continuous and its first derivative to be continuous and differentiable.

**3. Two-Dimensional Potential Flow:**

*   **Equation (Laplace's Equation):**
    $$\nabla^2 \phi = \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0, \quad (x, y) \in \Omega$$
    where:
    *   $\phi(x, y)$ is the potential function.
    *   $\Omega$ is the 2D domain.

*   **Requirements for Strong Solution:** The strong solution requires the second partial derivatives of $\phi$ to exist and be continuous within the domain $\Omega$.

**Boundary Conditions Associated with the Strong Form:**

The strong form of a PDE is usually accompanied by boundary conditions, which specify the behavior of the solution or its derivatives at the boundaries of the domain.

*   **Essential (Dirichlet) Boundary Conditions:** Specify the value of the unknown variable itself at the boundary.
    *   Example (Heat Conduction): $u(0) = T_0$ (prescribed temperature at $x=0$).
    *   Example (Elastic Bar): $u(0) = u_0$ (prescribed displacement at $x=0$).

*   **Natural Boundary Conditions (Neumann):** Specify the derivative of the unknown variable (or a quantity related to it) at the boundary. These arise from the flux or force terms in the original equation.
    *   Example (Heat Conduction): $-k(0)\frac{du}{dx}(0) = q_0$ (prescribed heat flux at $x=0$).
    *   Example (Elastic Bar): $-E(0)A(0)\frac{du}{dx}(0) = P_0$ (prescribed force at $x=0$).

**Difficulty in Solving the Strong Form Directly:**

Finding solutions that satisfy the strong form precisely is often very difficult, especially for complex geometries, material properties, and boundary conditions. This is where the concept of the weak form becomes essential for FEM.

## 2. The Weak Form of Differential Equations

The **Weak Form** is derived from the strong form using variational principles or weighted residual methods. It relaxes the differentiability requirements on the solution, making it more amenable to numerical approximation techniques like FEM.

**Why "Weak"?**

The term "weak" refers to the fact that the solution is not required to be as "smooth" (differentiable) as in the strong form. The derivatives are effectively "shifted" to the weighting functions, which are assumed to be sufficiently differentiable.

**Derivation of the Weak Form - Weighted Residual Method**

One of the most common methods to derive the weak form is the **Weighted Residual Method**. The core idea is to find an approximate solution that minimizes the error (residual) of the strong form equation, not necessarily at every point, but in an average sense.

Let the strong form of a differential equation be:
$$L(u) = g$$
where $L$ is a differential operator and $g$ is a source term.

The residual, $R(x)$, is the error when an approximate solution $u_{approx}$ is substituted into the strong form:
$$R(x) = L(u_{approx}) - g$$

The weighted residual statement requires that the weighted integral of the residual over the domain $\Omega$ is zero:
$$\int_{\Omega} W(x) R(x) dx = 0$$
where $W(x)$ is a **weighting function** (or test function).

**Relating to the Strong Form:**

The choice of weighting function $W(x)$ is crucial. For the strong form, $W(x)$ would be a Dirac delta function $\delta(x-x_0)$, forcing the residual to be zero at a specific point $x_0$. For the weak form, $W(x)$ is a continuous and differentiable function.

**Integration by Parts: The Key to Weakening**

The process of deriving the weak form from the weighted residual statement typically involves **integration by parts**. This technique allows us to reduce the order of the derivatives acting on the unknown variable ($u$) and transfer them to the weighting function ($W$).

**Example: Derivation of the Weak Form for 1D Heat Conduction**

Consider the strong form:
$$-\frac{d}{dx}\left(k(x)\frac{du}{dx}\right) + q(x) = 0, \quad 0 < x < L$$
With essential boundary condition: $u(0) = u_0$.

The weighted residual statement is:
$$\int_{0}^{L} W(x) \left(-\frac{d}{dx}\left(k(x)\frac{du}{dx}\right) + q(x)\right) dx = 0$$

Now, apply integration by parts to the first term:
$$\int_{0}^{L} W(x) \left(-\frac{d}{dx}\left(k(x)\frac{du}{dx}\right)\right) dx = - \left[ W(x) k(x) \frac{du}{dx} \right]_{0}^{L} + \int_{0}^{L} \frac{dW}{dx} k(x) \frac{du}{dx} dx$$

Substituting this back into the weighted residual statement:
$$- \left[ W(x) k(x) \frac{du}{dx} \right]_{0}^{L} + \int_{0}^{L} \frac{dW}{dx} k(x) \frac{du}{dx} dx + \int_{0}^{L} W(x) q(x) dx = 0$$

Rearranging the terms:
$$\int_{0}^{L} k(x) \frac{dW}{dx} \frac{du}{dx} dx - \left[ W(x) k(x) \frac{du}{dx} \right]_{0}^{L} + \int_{0}^{L} W(x) q(x) dx = 0$$

**Addressing Boundary Conditions in the Weak Form:**

1.  **Essential Boundary Conditions:** These must be imposed directly on the approximate solution $u$. In the FEM context, this means that the nodal values corresponding to the essential boundary conditions are prescribed. The weighting function $W(x)$ is implicitly set to zero at these boundaries where the essential boundary condition is applied.
    *   Since $u(0) = u_0$, we must choose $W(0) = 0$.

2.  **Natural Boundary Conditions:** These arise naturally from the integration by parts at the boundaries. The terms evaluated at the boundaries in the integration by parts formula are interpreted as natural boundary conditions.
    *   From the term $\left[ W(x) k(x) \frac{du}{dx} \right]_{0}^{L}$, we evaluate it at the upper and lower limits.
    *   At $x=L$: $-W(L) k(L) \frac{du}{dx}(L)$
    *   At $x=0$: $+W(0) k(0) \frac{du}{dx}(0)$

    Since we require $W(0)=0$ due to the essential boundary condition at $x=0$, the term at $x=0$ vanishes.
    The term at $x=L$ becomes: $-W(L) k(L) \frac{du}{dx}(L)$.

    The complete weak form is:
    $$\int_{0}^{L} k(x) \frac{dW}{dx} \frac{du}{dx} dx + \int_{0}^{L} W(x) q(x) dx = W(L) k(L) \frac{du}{dx}(L)$$

    The term $k(L) \frac{du}{dx}(L)$ is related to the flux at $x=L$. If we have a natural boundary condition at $x=L$, say $k(L) \frac{du}{dx}(L) = Q_L$, then the weak form becomes:
    $$\int_{0}^{L} k(x) \frac{dW}{dx} \frac{du}{dx} dx + \int_{0}^{L} W(x) q(x) dx = W(L) Q_L$$

    If there is no specified flux at $x=L$, it's often considered a **free boundary condition**, and $W(L)$ can be arbitrary. However, for the weak form to be well-defined, this term should ideally be zero. This implies that either $W(L)=0$ (which is often chosen if the problem has essential BCs on both sides) or $k(L) \frac{du}{dx}(L)=0$ (natural boundary condition of zero flux).

**Summary of the Weak Form (1D Heat Conduction):**

Find $u$ such that $u(0) = u_0$ and for all admissible weighting functions $W(x)$ (i.e., $W(0)=0$ and $W$ is differentiable), the following holds:

$$\int_{0}^{L} k(x) \frac{dW}{dx} \frac{du}{dx} dx + \int_{0}^{L} W(x) q(x) dx = W(L) Q_L$$

where $Q_L$ is the flux at $x=L$.

**Key Benefits of the Weak Form for FEM:**

*   **Reduced Differentiability Requirements:** The solution $u$ only needs to be square-integrable and have a first derivative that is square-integrable (belonging to the Sobolev space $H^1$). This significantly broadens the class of possible solutions.
*   **Boundary Conditions are Naturally Handled:** Essential boundary conditions are imposed directly, while natural boundary conditions arise from the integration by parts. This simplifies the formulation.
*   **Basis for Finite Element Discretization:** The weak form allows us to approximate the solution $u$ using piecewise polynomial functions (shape functions) over a mesh of finite elements. The weighted integral is then applied to these approximate functions.

**References and Content from Textbooks:**

*   **Reddy (2009):** Chapter 3 extensively discusses variational principles and weighted residual methods, leading to the weak form formulation. He emphasizes the relationship between strong and weak forms and the role of integration by parts.
*   **Cook (2008):** Chapter 2 introduces the concept of deriving equations from physical principles, which often leads to variational formulations. The weak form is presented as a generalization of these principles, essential for FEM.
*   **Bhavikatti (2008):** Chapter 5 details the "Variational Method" and "Galerkin Method," which are methods for deriving the weak form. He provides clear examples for beam bending and heat transfer.
*   **Fish & Belytschko (2007):** Chapter 2 covers the mathematical basis of FEM, including the role of Hilbert spaces and the formulation of weak forms through variational principles or weighted residuals.

## 3. Other Forms of Weak Form Derivation

While the weighted residual method with integration by parts is common, other approaches also lead to the weak form:

**a) Variational Methods (Principle of Minimum Potential Energy)**

For many problems in solid mechanics, the governing PDEs can be derived from a minimization principle, such as the **Principle of Minimum Potential Energy**. The weak form is essentially the condition for this minimum.

*   **Potential Energy Functional ($\Pi$):** This functional typically includes strain energy ($U$) and potential of external forces ($V$).
    $$\Pi = U - V$$
*   **Condition for Equilibrium:** Equilibrium is achieved when the potential energy is minimized with respect to variations in the displacement field.
    $$\delta \Pi = 0$$
*   **Relationship to Weak Form:** When the variation $\delta u$ is introduced into $\delta \Pi = 0$, and integrated by parts, it directly yields the weak form of the governing equations.

**Example (1D Elastic Bar - Principle of Minimum Potential Energy):**

*   **Strain Energy ($U$):**
    $$U = \int_{0}^{L} \frac{1}{2} E(x) A(x) \left(\frac{du}{dx}\right)^2 dx$$
*   **Potential of External Forces ($V$):**
    $$V = -\int_{0}^{L} f(x) u(x) dx - P_L u(L)$$ (where $P_L$ is a point force at $x=L$)
*   **Total Potential Energy ($\Pi$):**
    $$\Pi = \int_{0}^{L} \frac{1}{2} E(x) A(x) \left(\frac{du}{dx}\right)^2 dx - \int_{0}^{L} f(x) u(x) dx - P_L u(L)$$
*   **Minimization Condition ($\delta \Pi = 0$):**
    $$\delta \Pi = \int_{0}^{L} E(x) A(x) \frac{du}{dx} \frac{d(\delta u)}{dx} dx - \int_{0}^{L} f(x) \delta u(x) dx - P_L \delta u(L) = 0$$

    Now, consider $u(0) = u_0$ (essential boundary condition). This implies $\delta u(0) = 0$.
    We integrate the first term by parts:
    $$\int_{0}^{L} E(x) A(x) \frac{du}{dx} \frac{d(\delta u)}{dx} dx = \left[ E(x) A(x) \frac{du}{dx} \delta u \right]_{0}^{L} - \int_{0}^{L} \frac{d}{dx} \left( E(x) A(x) \frac{du}{dx} \right) \delta u \, dx$$

    Substituting back and noting $\delta u(0) = 0$:
    $$\left[ E(x) A(x) \frac{du}{dx} \delta u \right]_{0}^{L} = E(L) A(L) \frac{du}{dx}(L) \delta u(L)$$

    So, the condition becomes:
    $$E(L) A(L) \frac{du}{dx}(L) \delta u(L) - \int_{0}^{L} \frac{d}{dx} \left( E(x) A(x) \frac{du}{dx} \right) \delta u \, dx - \int_{0}^{L} f(x) \delta u(x) dx - P_L \delta u(L) = 0$$

    Rearranging:
    $$-\int_{0}^{L} \frac{d}{dx} \left( E(x) A(x) \frac{du}{dx} \right) \delta u \, dx + \left( E(L) A(L) \frac{du}{dx}(L) - P_L \right) \delta u(L) = 0$$

    Since $\delta u$ is an arbitrary variation (except for $\delta u(0)=0$), for this equation to hold, the terms multiplying $\delta u$ must be zero.
    *   The integral term gives: $-\int_{0}^{L} \frac{d}{dx} \left( E(x) A(x) \frac{du}{dx} \right) \delta u \, dx = 0$, which implies $-\frac{d}{dx} \left( E(x) A(x) \frac{du}{dx} \right) = 0$ in the weak sense.
    *   The boundary term gives: $E(L) A(L) \frac{du}{dx}(L) - P_L = 0$, which means $E(L) A(L) \frac{du}{dx}(L) = P_L$. This is the natural boundary condition at $x=L$.

    The weak form derived from the variational principle is consistent with the weighted residual method.

**b) Galerkin Method**

The **Galerkin Method** is a specific type of weighted residual method where the weighting functions are chosen from the same space as the approximate solution.

*   Let the approximate solution be $u_h(x) = \sum_{j=1}^N u_j \phi_j(x)$, where $\phi_j(x)$ are the basis functions (shape functions) and $u_j$ are the unknown nodal values.
*   In the Galerkin method, the weighting functions $W(x)$ are also chosen to be the basis functions $\phi_i(x)$, i.e., $W_i(x) = \phi_i(x)$.

Applying this to the weak form of the heat conduction problem:
$$\int_{0}^{L} k(x) \frac{d\phi_i}{dx} \frac{du_h}{dx} dx + \int_{0}^{L} \phi_i(x) q(x) dx = \phi_i(L) Q_L$$

Substituting $u_h(x) = \sum_{j=1}^N u_j \phi_j(x)$ and $\frac{du_h}{dx} = \sum_{j=1}^N u_j \frac{d\phi_j}{dx}$:
$$\sum_{j=1}^N u_j \int_{0}^{L} k(x) \frac{d\phi_i}{dx} \frac{d\phi_j}{dx} dx + \int_{0}^{L} \phi_i(x) q(x) dx = \phi_i(L) Q_L$$

This results in a system of linear algebraic equations in the form $[K]\{u\} = \{F\}$, where:
*   $[K]_{ij} = \int_{0}^{L} k(x) \frac{d\phi_i}{dx} \frac{d\phi_j}{dx} dx$ (Stiffness matrix)
*   $\{u\}_j = u_j$ (Vector of nodal unknowns)
*   $\{F\}_i = -\int_{0}^{L} \phi_i(x) q(x) dx + \phi_i(L) Q_L$ (Force vector, including boundary terms)

**Course Outcomes Addressed by Weak Form Concepts:**

*   **CO1:** To understand the governing equations of various physical phenomena and basic procedure of FEM. (Knowledge Level: K2) - The weak form is the bridge between governing equations and FEM procedure.
*   **CO4:** Evaluate element stress using energy method and study Galekin weight residual formulations (Knowledge Level: K5) - The weak form is directly used in the Galerkin method and energy methods to derive system equations.

## 4. Strong vs. Weak Form: A Comparison

| Feature                | Strong Form                                       | Weak Form                                            |
| :--------------------- | :------------------------------------------------ | :--------------------------------------------------- |
| **Differentiability**  | High (classical solution)                         | Low (Sobolev space $H^1$)                            |
| **Equation Satisfaction**| Point-wise                                        | Integral sense (weighted average)                    |
| **Derivation**         | As is, from physical laws                         | Via weighted residual methods or variational principles |
| **Boundary Conditions**| Essential (Dirichlet) specified directly. Natural (Neumann) are part of the equation. | Essential are imposed on the solution. Natural arise from integration by parts. |
| **FEM Applicability**  | Difficult to approximate directly                 | Directly applicable for discretization using shape functions |
*   **Cook (2008):** Chapter 2 highlights that FEM operates on the weak form, allowing for approximations with less smooth functions.
*   **Segerlind (2010):** Chapter 2 contrasts strong and weak formulations, emphasizing that the weak form is necessary for FEM to handle complexities.

**Important Point to Remember:**

The weak form is not a loss of accuracy; it's a reformulation of the problem that allows for approximate solutions. The accuracy of the FEM solution depends on the choice of discretization (mesh refinement) and the order of shape functions, not on solving the strong form directly.

## 5. Practice Questions and Exercises

**Question 1:**
For the one-dimensional heat conduction equation:
$$-\frac{d}{dx}\left(k\frac{du}{dx}\right) + q = 0, \quad 0 < x < L$$
with boundary conditions $u(0) = T_0$ and $k\frac{du}{dx}\Big|_{x=L} = Q_L$.
Derive the weak form of this problem. Identify the essential and natural boundary conditions.

**Answer 1:**
The strong form is: $-\frac{d}{dx}\left(k\frac{du}{dx}\right) + q = 0$.
The essential boundary condition is $u(0) = T_0$.
The natural boundary condition is $k\frac{du}{dx}\Big|_{x=L} = Q_L$.

To derive the weak form, we use the weighted residual method. Let $W(x)$ be a weighting function.
$$\int_{0}^{L} W(x) \left(-\frac{d}{dx}\left(k\frac{du}{dx}\right) + q\right) dx = 0$$
Apply integration by parts to the first term:
$$-\int_{0}^{L} \frac{d}{dx}\left(k\frac{du}{dx}\right) W(x) dx = -\left[W(x) k\frac{du}{dx}\right]_{0}^{L} + \int_{0}^{L} k\frac{dW}{dx}\frac{du}{dx} dx$$
Substitute back:
$$-\left[W(x) k\frac{du}{dx}\right]_{0}^{L} + \int_{0}^{L} k\frac{dW}{dx}\frac{du}{dx} dx + \int_{0}^{L} W(x) q dx = 0$$
Rearrange:
$$\int_{0}^{L} k\frac{dW}{dx}\frac{du}{dx} dx + \int_{0}^{L} W(x) q dx = \left[W(x) k\frac{du}{dx}\right]_{0}^{L}$$

Now, apply boundary conditions. Since $u(0) = T_0$ is essential, we require $W(0) = 0$.
The boundary term at $x=0$ becomes $W(0)k\frac{du}{dx}(0) = 0$.
The boundary term at $x=L$ is $W(L)k\frac{du}{dx}(L)$.
We know $k\frac{du}{dx}\Big|_{x=L} = Q_L$. So, the term becomes $W(L)Q_L$.

The weak form is:
$$\int_{0}^{L} k\frac{dW}{dx}\frac{du}{dx} dx + \int_{0}^{L} W(x) q dx = W(L) Q_L$$
This must hold for all admissible weighting functions $W(x)$ such that $W(0)=0$.

**Question 2:**
Explain why the weak form is preferred over the strong form in the Finite Element Method.

**Answer 2:**
The weak form is preferred over the strong form in FEM for several key reasons:

1.  **Reduced Differentiability Requirements:** The strong form requires the solution to be continuously differentiable up to the order of the highest derivative in the equation. This is often difficult to satisfy, especially for complex problems. The weak form, by using integration by parts, reduces the differentiability requirement on the solution to just the first derivative. This allows for the use of simpler, piecewise polynomial approximating functions (shape functions) that are common in FEM.

2.  **Natural Handling of Boundary Conditions:** Natural (Neumann) boundary conditions emerge naturally from the integration by parts process during the derivation of the weak form. This contrasts with the strong form where they are explicitly part of the equation and require careful treatment. Essential (Dirichlet) boundary conditions are directly imposed on the approximation, making the overall boundary condition treatment systematic.

3.  **Amenability to Discretization:** The integral nature of the weak form is perfectly suited for discretization into finite elements. By approximating the solution within each element using shape functions and performing numerical integration, we can derive a system of algebraic equations that can be solved computationally. The strong form, being a differential equation, is not as directly conducive to this type of discretization.

4.  **Broader Class of Solutions:** The weak form allows for solutions that may not be continuously differentiable everywhere, which is often the case in problems with singularities or discontinuities in material properties. This broader class of solutions is more general and practical for many engineering applications.

**Question 3:**
Consider a simple 1D problem where the governing equation is $u''(x) = -f(x)$ for $0 < x < 1$, with $u(0)=0$ and $u(1)=0$.
a) State the strong form of the problem.
b) Derive the weak form using integration by parts.
c) If we choose the Galerkin method with linear shape functions $\phi_1(x)=1-x$ and $\phi_2(x)=x$ over the entire domain (as a single element), set up the system of equations $[K]\{u\} = \{F\}$. (Assume $f(x)=2$ for simplicity).

**Answer 3:**
a) **Strong Form:**
$u''(x) = -2$ for $0 < x < 1$.
Essential boundary conditions: $u(0) = 0$, $u(1) = 0$.

b) **Weak Form Derivation:**
Let $W(x)$ be a weighting function.
$\int_{0}^{1} W(x) (u''(x) + 2) dx = 0$
$\int_{0}^{1} W(x) u''(x) dx + \int_{0}^{1} W(x) 2 dx = 0$

Integrate the first term by parts:
$\int_{0}^{1} W(x) u''(x) dx = [W(x) u'(x)]_{0}^{1} - \int_{0}^{1} W'(x) u'(x) dx$

Substitute back:
$[W(x) u'(x)]_{0}^{1} - \int_{0}^{1} W'(x) u'(x) dx + \int_{0}^{1} W(x) 2 dx = 0$

Rearrange:
$-\int_{0}^{1} W'(x) u'(x) dx + [W(x) u'(x)]_{0}^{1} + \int_{0}^{1} W(x) 2 dx = 0$

Since $u(0)=0$ and $u(1)=0$, we require $W(0)=0$ and $W(1)=0$. This means the boundary term $[W(x) u'(x)]_{0}^{1} = W(1)u'(1) - W(0)u'(0) = 0$.

The weak form becomes:
$-\int_{0}^{1} W'(x) u'(x) dx + \int_{0}^{1} W(x) 2 dx = 0$
This must hold for all admissible weighting functions $W(x)$ with $W(0)=0$ and $W(1)=0$.

c) **Galerkin Method with Linear Shape Functions:**
Approximate solution: $u_h(x) = u_1 \phi_1(x) + u_2 \phi_2(x) = u_1(1-x) + u_2(x)$.
The shape functions are $\phi_1(x) = 1-x$ and $\phi_2(x) = x$.
Their derivatives are $\phi_1'(x) = -1$ and $\phi_2'(x) = 1$.

For the Galerkin method, we choose weighting functions $W_1(x) = \phi_1(x)$ and $W_2(x) = \phi_2(x)$.

**Element Stiffness Matrix [k] and Force Vector {f}:**
The system of equations will be for $i=1, 2$ and $j=1, 2$:
$k_{ij} = -\int_{0}^{1} \phi_i'(x) \phi_j'(x) dx$
$f_i = -\int_{0}^{1} \phi_i(x) 2 dx$

**For $i=1$:**
$k_{11} = -\int_{0}^{1} \phi_1'(x) \phi_1'(x) dx = -\int_{0}^{1} (-1)(-1) dx = -\int_{0}^{1} 1 dx = -1$
$k_{12} = -\int_{0}^{1} \phi_1'(x) \phi_2'(x) dx = -\int_{0}^{1} (-1)(1) dx = -\int_{0}^{1} -1 dx = 1$
$f_1 = -\int_{0}^{1} \phi_1(x) 2 dx = -\int_{0}^{1} (1-x) 2 dx = -2 \left[x - \frac{x^2}{2}\right]_0^1 = -2 \left(1 - \frac{1}{2}\right) = -2 \left(\frac{1}{2}\right) = -1$

**For $i=2$:**
$k_{21} = -\int_{0}^{1} \phi_2'(x) \phi_1'(x) dx = -\int_{0}^{1} (1)(-1) dx = -\int_{0}^{1} -1 dx = 1$
$k_{22} = -\int_{0}^{1} \phi_2'(x) \phi_2'(x) dx = -\int_{0}^{1} (1)(1) dx = -\int_{0}^{1} 1 dx = -1$
$f_2 = -\int_{0}^{1} \phi_2(x) 2 dx = -\int_{0}^{1} x 2 dx = -2 \left[\frac{x^2}{2}\right]_0^1 = -2 \left(\frac{1}{2}\right) = -1$

The system of equations is:
$$
\begin{bmatrix}
-1 & 1 \\
1 & -1
\end{bmatrix}
\begin{Bmatrix}
u_1 \\
u_2
\end{Bmatrix}
=
\begin{Bmatrix}
-1 \\
-1
\end{Bmatrix}
$$

This matrix is singular, which is expected in a global formulation without proper handling of essential boundary conditions on the shape functions themselves. In a typical FEM approach, the essential boundary conditions would be enforced by modifying the matrix (e.g., setting the row/column corresponding to the fixed node to identity and zeroing out others, or by subtracting contributions from known nodal values).

*   **Correction for Essential Boundary Conditions:** Since $u(0)=0$, this means $u_1$ (the coefficient of $\phi_1(x)$, which is $1-x$, evaluated at $x=0$ gives $u_1$) must be 0. Similarly, $u(1)=0$, so $u_2$ must be 0.
    If we were to solve this, we would set $u_1 = 0$ and $u_2 = 0$.
    The "solution" would be $u(x) = 0(1-x) + 0(x) = 0$, which satisfies the boundary conditions.
    Let's check the equation: $u''(x) = 0$, but the RHS is $-2$. So $u(x)=0$ is not the correct solution to the strong form.

    The issue is that the shape functions $\phi_1=1-x$ and $\phi_2=x$ are global and implicitly enforce the boundary conditions where they are zero. For $u_h(x) = u_1 \phi_1(x) + u_2 \phi_2(x)$ to satisfy $u_h(0)=0$, we need $u_1 \phi_1(0) + u_2 \phi_2(0) = u_1(1) + u_2(0) = u_1 = 0$. For $u_h(1)=0$, we need $u_1 \phi_1(1) + u_2 \phi_2(1) = u_1(0) + u_2(1) = u_2 = 0$.

    A common way to handle essential BCs is to reduce the system. If $u_1=0$, the equations become:
    $1 \cdot u_2 = -1 \implies u_2 = -1$
    $-1 \cdot u_2 = -1 \implies u_2 = 1$
    This still shows an inconsistency. The correct approach for the Galerkin method is to only use the non-fixed degrees of freedom. Since $u_1$ and $u_2$ are both fixed to 0 by the boundary conditions, there are no unknown nodal values. This implies that for a single element formulation using these specific linear shape functions, we would have to use different shape functions or a different discretization.

    Let's consider the weak form: $-\int_{0}^{1} W'(x) u'(x) dx + \int_{0}^{1} W(x) 2 dx = 0$.
    If $u(x) = x(1-x) = x - x^2$, then $u'(x) = 1 - 2x$ and $u''(x) = -2$. This is the correct solution.
    $u'(x)$ for $u_h(x) = u_1(1-x) + u_2(x)$ is $u_h'(x) = -u_1 + u_2$.
    $k_{11} = -\int (-1)(-1) dx = -1$
    $k_{12} = -\int (-1)(1) dx = 1$
    $k_{21} = -\int (1)(-1) dx = 1$
    $k_{22} = -\int (1)(1) dx = -1$
    $f_1 = -\int (1-x)2 dx = -1$
    $f_2 = -\int x 2 dx = -1$

    The matrix equation is indeed:
    $$
    \begin{bmatrix}
    -1 & 1 \\
    1 & -1
    \end{bmatrix}
    \begin{Bmatrix}
    u_1 \\
    u_2
    \end{Bmatrix}
    =
    \begin{Bmatrix}
    -1 \\
    -1
    \end{bmatrix}
    $$
    As noted, $u_1=0$ and $u_2=0$ due to BCs. If we try to solve this, it indicates the problem setup for a full global system with fixed boundary nodes needs careful reduction. For instance, if $u_1=0$:
    $1 \cdot u_2 = -1 \implies u_2 = -1$.
    This is still inconsistent. The core issue here is that with $u_1$ and $u_2$ both fixed to 0, there are no degrees of freedom to solve for using this formulation.

    A better approach for this specific problem with linear basis functions over a single element is to use only one degree of freedom, for example, the midpoint displacement. Or, if using these two DOFs, the assembly process must correctly enforce the essential BCs before solving. For example, by eliminating rows/columns corresponding to fixed DOFs. If we set $u_1=0$ and $u_2=0$, then $\{u\} = \{0, 0\}^T$, and the right side should yield $\{0, 0\}^T$.

    Let's reconsider the boundary term. If the boundary conditions are $u(0)=0, u(1)=0$, the shape functions $\phi_1=1-x$ and $\phi_2=x$ automatically satisfy these if $u_1$ and $u_2$ are interpreted as nodal displacements. So $u_1=0$ and $u_2=0$. The system is:
    $$
    \begin{bmatrix}
    -1 & 1 \\
    1 & -1
    \end{bmatrix}
    \begin{Bmatrix}
    0 \\
    0
    \end{Bmatrix}
    =
    \begin{Bmatrix}
    0 \\
    0
    \end{Bmatrix}
    $$
    This means our force vector $\{f\}$ must also be zero. This implies that the source term $q$ must be handled correctly. The force vector comes from $-\int \phi_i q dx$. If $q=2$, the force vector is $\{-1, -1\}$, which is not zero.

    The proper way to handle essential BCs is to assemble the full system and then modify it. For $u_1=0$:
    Original:
    $-u_1 + u_2 = -1$
    $u_1 - u_2 = -1$
    Substitute $u_1=0$:
    $u_2 = -1$
    $-u_2 = -1 \implies u_2 = 1$.
    This inconsistency arises when the system has no free variables. If we were to solve this with a typical FEM solver, we'd enforce $u_1=0$. The system might be reduced to a single equation for $u_2$:
    From the first row: $u_2 = -1$.
    This would give $u(x) = 0(1-x) + (-1)x = -x$.
    Check: $u''(x) = 0$, not $-2$.

    The correct solution to $u''(x) = -2$ with $u(0)=0, u(1)=0$ is $u(x) = -x^2 + x$.
    The displacement at $x=0$ is 0. The displacement at $x=1$ is 0.

    Let's try with a different set of shape functions that don't enforce BCs intrinsically. This is usually done at the element level. For a single element, this example is tricky because the linear shape functions naturally map to nodal values at the boundary. The problem highlights the importance of assembly and BC enforcement procedures in FEM.

## 6. Important Points to Remember

*   The **Strong Form** requires high differentiability and point-wise satisfaction of the governing equation.
*   The **Weak Form** relaxes differentiability requirements and satisfies the equation in an integral sense, making it suitable for FEM.
*   **Integration by Parts** is the mathematical tool used to transform the strong form into the weak form, shifting derivatives from the unknown variable to the weighting function.
*   **Essential Boundary Conditions (Dirichlet)** are imposed directly on the solution and require weighting functions to be zero at these locations.
*   **Natural Boundary Conditions (Neumann)** arise from the boundary terms generated during integration by parts.
*   The **Galerkin Method** is a weighted residual method where weighting functions are chosen from the same basis as the approximation.
*   Variational principles (like minimum potential energy) also lead to the weak form, particularly in structural mechanics.
*   The weak form is the foundation for discretizing a continuous problem into a system of algebraic equations in FEM.

This module lays the groundwork for understanding how FEM approximates solutions by reformulating the problem into a weaker, more tractable form.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
