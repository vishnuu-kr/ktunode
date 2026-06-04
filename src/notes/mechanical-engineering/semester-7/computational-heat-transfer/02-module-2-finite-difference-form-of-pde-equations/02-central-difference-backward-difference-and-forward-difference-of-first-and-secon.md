---
title: "Central difference, backward difference, and forward difference of first and second order derivatives."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 2: Finite difference form of PDE equations"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464374"
status: "completed"
scrapedAt: "2026-05-20T18:10:36.539Z"
---
# Computational Heat Transfer: Module 2 - Finite Difference Form of PDE Equations

## Topic: Finite Difference Approximations of Derivatives

This module introduces the fundamental concept of approximating partial differential equations (PDEs) with algebraic equations using finite difference methods. This is a crucial step in solving heat transfer problems computationally, as it transforms continuous mathematical descriptions into a form that can be solved by computers.

---

### 1. Introduction to Finite Difference Method (FDM)

The Finite Difference Method (FDM) is a numerical technique used to approximate solutions to differential equations. It involves discretizing the domain of the problem into a grid of points (nodes) and then approximating the derivatives in the differential equations using algebraic expressions involving the function values at these grid points.

**Key Concepts:**

*   **Discretization:** Dividing the continuous domain into discrete points.
*   **Grid/Mesh:** The collection of these discrete points.
*   **Nodes:** The points within the grid where the solution is sought.
*   **Grid Spacing/Step Size (Δx, Δt, etc.):** The distance between adjacent nodes in each dimension.
*   **Approximation:** Replacing derivatives with algebraic expressions based on function values at neighboring nodes.

**Alignment with Course Outcomes:**

*   **CO3 (Familiarize with numerical techniques like FDM):** This section directly addresses this outcome by introducing FDM as a core numerical technique. (Knowledge Level: K1)

**Reference:**

*   **Patankar (2017), Chapter 2:** Discusses the basic principles of discretization and the need for approximating derivatives.
*   **Sastry (2012), Chapter 11:** Covers foundational concepts of numerical differentiation and approximation.

---

### 2. Approximating First-Order Derivatives

First-order derivatives represent the rate of change of a quantity with respect to a variable (e.g., temperature with respect to distance or time). We will explore three primary methods for approximating these derivatives using values at discrete points.

Let $f(x)$ be a function of $x$. Consider a uniform grid with spacing $\Delta x$. We denote the function value at node $i$ as $f_i = f(x_i)$, where $x_i = x_0 + i \Delta x$.

#### 2.1 Forward Difference Approximation

The forward difference approximation uses the function value at the current node ($i$) and the next node ($i+1$).

**Formula:**
$$ \frac{df}{dx}\bigg|_{x_i} \approx \frac{f_{i+1} - f_i}{\Delta x} $$

**Derivation (using Taylor series expansion):**
The Taylor series expansion of $f(x_{i+1})$ around $x_i$ is:
$$ f(x_{i+1}) = f(x_i) + (x_{i+1} - x_i) \frac{df}{dx}\bigg|_{x_i} + \frac{(x_{i+1} - x_i)^2}{2!} \frac{d^2f}{dx^2}\bigg|_{x_i} + \dots $$
Since $x_{i+1} - x_i = \Delta x$, we have:
$$ f_{i+1} = f_i + \Delta x \frac{df}{dx}\bigg|_{x_i} + \frac{(\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} + \dots $$
Rearranging to solve for the derivative:
$$ \frac{df}{dx}\bigg|_{x_i} = \frac{f_{i+1} - f_i}{\Delta x} - \frac{\Delta x}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} - \dots $$
The approximation is obtained by neglecting the higher-order terms.

**Order of Accuracy (Truncation Error):**
The truncation error is the leading term neglected in the Taylor series expansion.
$$ \text{Error} = O(\Delta x) $$
This is a **first-order accurate** approximation.

**Usage:** Typically used for time derivatives in unsteady problems or for spatial derivatives at boundaries where there is no point "behind" the current node.

**Example:** For a temperature distribution $T(x)$, the forward difference approximation of $\frac{dT}{dx}$ at $x_i$ is $\frac{T_{i+1} - T_i}{\Delta x}$.

#### 2.2 Backward Difference Approximation

The backward difference approximation uses the function value at the current node ($i$) and the previous node ($i-1$).

**Formula:**
$$ \frac{df}{dx}\bigg|_{x_i} \approx \frac{f_i - f_{i-1}}{\Delta x} $$

**Derivation (using Taylor series expansion):**
The Taylor series expansion of $f(x_{i-1})$ around $x_i$ is:
$$ f(x_{i-1}) = f(x_i) + (x_{i-1} - x_i) \frac{df}{dx}\bigg|_{x_i} + \frac{(x_{i-1} - x_i)^2}{2!} \frac{d^2f}{dx^2}\bigg|_{x_i} + \dots $$
Since $x_{i-1} - x_i = -\Delta x$, we have:
$$ f_{i-1} = f_i - \Delta x \frac{df}{dx}\bigg|_{x_i} + \frac{(-\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} + \dots $$
$$ f_{i-1} = f_i - \Delta x \frac{df}{dx}\bigg|_{x_i} + \frac{(\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} - \dots $$
Rearranging to solve for the derivative:
$$ \frac{df}{dx}\bigg|_{x_i} = \frac{f_i - f_{i-1}}{\Delta x} + \frac{\Delta x}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} - \dots $$
The approximation is obtained by neglecting the higher-order terms.

**Order of Accuracy (Truncation Error):**
$$ \text{Error} = O(\Delta x) $$
This is also a **first-order accurate** approximation.

**Usage:** Similar to forward difference, often used at boundaries where there is no point "ahead" of the current node.

**Example:** For a velocity profile $u(x)$, the backward difference approximation of $\frac{du}{dx}$ at $x_i$ is $\frac{u_i - u_{i-1}}{\Delta x}$.

#### 2.3 Central Difference Approximation

The central difference approximation uses function values at nodes symmetrically around the point of interest ($i-1$ and $i+1$). This generally leads to a more accurate approximation than forward or backward differences.

**Formula:**
$$ \frac{df}{dx}\bigg|_{x_i} \approx \frac{f_{i+1} - f_{i-1}}{2 \Delta x} $$

**Derivation (using Taylor series expansion):**
We use the Taylor expansions for $f(x_{i+1})$ and $f(x_{i-1})$ around $x_i$:
$$ f(x_{i+1}) = f_i + \Delta x \frac{df}{dx}\bigg|_{x_i} + \frac{(\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} + \frac{(\Delta x)^3}{6} \frac{d^3f}{dx^3}\bigg|_{x_i} + \dots $$
$$ f(x_{i-1}) = f_i - \Delta x \frac{df}{dx}\bigg|_{x_i} + \frac{(-\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} + \frac{(-\Delta x)^3}{6} \frac{d^3f}{dx^3}\bigg|_{x_i} + \dots $$
$$ f(x_{i-1}) = f_i - \Delta x \frac{df}{dx}\bigg|_{x_i} + \frac{(\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} - \frac{(\Delta x)^3}{6} \frac{d^3f}{dx^3}\bigg|_{x_i} + \dots $$
Subtracting the second from the first:
$$ f_{i+1} - f_{i-1} = \left( f_i + \Delta x \frac{df}{dx}\bigg|_{x_i} + \frac{(\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} + \frac{(\Delta x)^3}{6} \frac{d^3f}{dx^3}\bigg|_{x_i} + \dots \right) - \left( f_i - \Delta x \frac{df}{dx}\bigg|_{x_i} + \frac{(\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} - \frac{(\Delta x)^3}{6} \frac{d^3f}{dx^3}\bigg|_{x_i} + \dots \right) $$
$$ f_{i+1} - f_{i-1} = 2 \Delta x \frac{df}{dx}\bigg|_{x_i} + 2 \frac{(\Delta x)^3}{6} \frac{d^3f}{dx^3}\bigg|_{x_i} + \dots $$
Rearranging to solve for the derivative:
$$ \frac{df}{dx}\bigg|_{x_i} = \frac{f_{i+1} - f_{i-1}}{2 \Delta x} - \frac{(\Delta x)^2}{6} \frac{d^3f}{dx^3}\bigg|_{x_i} - \dots $$
The approximation is obtained by neglecting the higher-order terms.

**Order of Accuracy (Truncation Error):**
$$ \text{Error} = O((\Delta x)^2) $$
This is a **second-order accurate** approximation.

**Usage:** Preferred for interior nodes due to its higher accuracy. It requires values from both sides of the node.

**Example:** For a pressure gradient $\frac{dP}{dx}$ at $x_i$, the central difference approximation is $\frac{P_{i+1} - P_{i-1}}{2 \Delta x}$.

**Important Point to Remember:** Central difference approximations are generally more accurate than forward or backward differences of the same order because they are second-order accurate, while forward and backward differences are first-order accurate.

**Reference:**

*   **Sastry (2012), Chapter 11:** Provides detailed derivations of these approximations.
*   **Patankar (2017), Chapter 2:** Explains the concept of truncation error and accuracy order.
*   **Anderson & Wendt (1995), Chapter 3:** Discusses finite difference approximations in the context of fluid dynamics.

---

### 3. Approximating Second-Order Derivatives

Second-order derivatives represent the rate of change of the first derivative. In heat transfer, the second spatial derivative of temperature often appears in the conduction term of the heat equation (e.g., $\frac{\partial^2 T}{\partial x^2}$).

Consider a uniform grid with spacing $\Delta x$ and function values $f_{i-1}$, $f_i$, and $f_{i+1}$ at nodes $i-1$, $i$, and $i+1$ respectively.

#### 3.1 Central Difference Approximation for Second Derivative

The central difference approximation is the most common and accurate method for approximating the second derivative.

**Formula:**
$$ \frac{d^2f}{dx^2}\bigg|_{x_i} \approx \frac{f_{i+1} - 2f_i + f_{i-1}}{(\Delta x)^2} $$

**Derivation (using Taylor series expansion):**
We use the Taylor expansions for $f(x_{i+1})$ and $f(x_{i-1})$ around $x_i$:
$$ f(x_{i+1}) = f_i + \Delta x \frac{df}{dx}\bigg|_{x_i} + \frac{(\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} + \frac{(\Delta x)^3}{6} \frac{d^3f}{dx^3}\bigg|_{x_i} + \frac{(\Delta x)^4}{24} \frac{d^4f}{dx^4}\bigg|_{x_i} + \dots $$
$$ f(x_{i-1}) = f_i - \Delta x \frac{df}{dx}\bigg|_{x_i} + \frac{(-\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} + \frac{(-\Delta x)^3}{6} \frac{d^3f}{dx^3}\bigg|_{x_i} + \frac{(-\Delta x)^4}{24} \frac{d^4f}{dx^4}\bigg|_{x_i} + \dots $$
$$ f(x_{i-1}) = f_i - \Delta x \frac{df}{dx}\bigg|_{x_i} + \frac{(\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} - \frac{(\Delta x)^3}{6} \frac{d^3f}{dx^3}\bigg|_{x_i} + \frac{(\Delta x)^4}{24} \frac{d^4f}{dx^4}\bigg|_{x_i} - \dots $$
Adding the two expansions:
$$ f_{i+1} + f_{i-1} = 2f_i + 2 \frac{(\Delta x)^2}{2} \frac{d^2f}{dx^2}\bigg|_{x_i} + 2 \frac{(\Delta x)^4}{24} \frac{d^4f}{dx^4}\bigg|_{x_i} + \dots $$
$$ f_{i+1} + f_{i-1} = 2f_i + (\Delta x)^2 \frac{d^2f}{dx^2}\bigg|_{x_i} + \frac{(\Delta x)^4}{12} \frac{d^4f}{dx^4}\bigg|_{x_i} + \dots $$
Rearranging to solve for the second derivative:
$$ \frac{d^2f}{dx^2}\bigg|_{x_i} = \frac{f_{i+1} - 2f_i + f_{i-1}}{(\Delta x)^2} - \frac{(\Delta x)^2}{12} \frac{d^4f}{dx^4}\bigg|_{x_i} - \dots $$
The approximation is obtained by neglecting the higher-order terms.

**Order of Accuracy (Truncation Error):**
$$ \text{Error} = O((\Delta x)^2) $$
This is a **second-order accurate** approximation.

**Usage:** Essential for discretizing the diffusion/conduction term in heat transfer equations.

**Example:** For a temperature distribution $T(x)$, the central difference approximation of $\frac{d^2T}{dx^2}$ at $x_i$ is $\frac{T_{i+1} - 2T_i + T_{i-1}}{(\Delta x)^2}$.

**Note:** Unlike the first derivative, there isn't a common, simple, and accurate central difference approximation for the second derivative that uses forward or backward points. The central difference form is inherently based on symmetric stencil points. To approximate the second derivative at a boundary where symmetry is broken, one would typically need to use one-sided approximations of higher order or employ specific boundary treatments. However, for interior points, the central difference is the standard.

**Reference:**

*   **Sastry (2012), Chapter 11:** Provides the derivation and application.
*   **Patankar (2017), Chapter 2:** Explains the stencil for the second derivative.
*   **Veeraseteg & Malalasekra (2008), Chapter 3:** Discusses discretization of diffusion terms.

---

### 4. Finite Difference Approximations for Unsteady Problems (Time Derivatives)

In unsteady heat transfer problems, we also need to approximate the time derivative, usually $\frac{\partial T}{\partial t}$.

Let $T_i^n$ denote the temperature at spatial node $i$ and time step $n$, where $t_n = t_0 + n \Delta t$.

#### 4.1 Forward Difference Approximation for Time Derivative (Euler Forward)

This is the simplest explicit method.

**Formula:**
$$ \frac{\partial T}{\partial t}\bigg|_{x_i, t_n} \approx \frac{T_i^{n+1} - T_i^n}{\Delta t} $$

**Order of Accuracy:** $O(\Delta t)$ (first-order accurate in time).

**Usage:** Used in explicit time-marching schemes.

**Example:** In an unsteady heat conduction equation like $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$, the forward difference approximation for the time derivative would be $\frac{T_i^{n+1} - T_i^n}{\Delta t}$.

#### 4.2 Backward Difference Approximation for Time Derivative (Euler Backward)

This is an implicit method.

**Formula:**
$$ \frac{\partial T}{\partial t}\bigg|_{x_i, t_n} \approx \frac{T_i^n - T_i^{n-1}}{\Delta t} $$
Alternatively, and more commonly used for implicit schemes that solve for the next time step:
$$ \frac{\partial T}{\partial t}\bigg|_{x_i, t_n} \approx \frac{T_i^{n+1} - T_i^n}{\Delta t} $$
where the approximation is evaluated at time $t_{n+1}$ (implicitly).

**Order of Accuracy:** $O(\Delta t)$ (first-order accurate in time).

**Usage:** Used in implicit time-marching schemes. It leads to a system of equations to be solved at each time step.

**Example:** Discretizing $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$ using backward difference in time (implicit): $\frac{T_i^{n+1} - T_i^n}{\Delta t} = \alpha \frac{T_{i+1}^{n+1} - 2T_i^{n+1} + T_{i-1}^{n+1}}{(\Delta x)^2}$.

#### 4.3 Central Difference Approximation for Time Derivative (Crank-Nicolson Method)

While central difference is generally preferred for spatial derivatives, for time derivatives, a common scheme that provides higher accuracy is the Crank-Nicolson method, which averages the spatial derivative at the current and next time steps. A central difference in time would typically look like $\frac{T_i^{n+1} - T_i^{n-1}}{2\Delta t}$, but this is often not preferred due to its potential for instability or complexity in implementation for implicit schemes. The Crank-Nicolson method uses a central difference approximation for the time derivative but applies it to the average of the spatial derivative at $t_n$ and $t_{n+1}$.

The Crank-Nicolson approach discretizes the PDE $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$ as:
$$ \frac{T_i^{n+1} - T_i^n}{\Delta t} = \alpha \frac{1}{2} \left( \frac{\partial^2 T}{\partial x^2}\bigg|_{x_i, t_{n+1}} + \frac{\partial^2 T}{\partial x^2}\bigg|_{x_i, t_n} \right) $$
Applying the central difference for the spatial derivative at both time levels:
$$ \frac{T_i^{n+1} - T_i^n}{\Delta t} = \frac{\alpha}{2} \left( \frac{T_{i+1}^{n+1} - 2T_i^{n+1} + T_{i-1}^{n+1}}{(\Delta x)^2} + \frac{T_{i+1}^n - 2T_i^n + T_{i-1}^n}{(\Delta x)^2} \right) $$

**Order of Accuracy:** $O((\Delta t)^2)$ (second-order accurate in time).

**Usage:** Preferred for its higher accuracy and stability in many unsteady heat transfer problems. It also leads to an implicit system of equations.

**Reference:**

*   **Patankar (2017), Chapter 6:** Covers unsteady heat conduction and discretization methods like Crank-Nicolson.
*   **Sastry (2012), Chapter 11:** Discusses time discretization methods.

---

### 5. Summary of Finite Difference Approximations

| Derivative      | Approximation                                    | Stencil Points | Order of Accuracy | Method Type              |
| :-------------- | :----------------------------------------------- | :------------- | :---------------- | :----------------------- |
| $\frac{df}{dx}$ | $\frac{f_{i+1} - f_i}{\Delta x}$                 | $i, i+1$       | $O(\Delta x)$     | Forward Difference       |
| $\frac{df}{dx}$ | $\frac{f_i - f_{i-1}}{\Delta x}$                 | $i-1, i$       | $O(\Delta x)$     | Backward Difference      |
| $\frac{df}{dx}$ | $\frac{f_{i+1} - f_{i-1}}{2 \Delta x}$           | $i-1, i, i+1$  | $O((\Delta x)^2)$ | Central Difference       |
| $\frac{d^2f}{dx^2}$| $\frac{f_{i+1} - 2f_i + f_{i-1}}{(\Delta x)^2}$ | $i-1, i, i+1$  | $O((\Delta x)^2)$ | Central Difference       |
| $\frac{\partial T}{\partial t}$ | $\frac{T_i^{n+1} - T_i^n}{\Delta t}$ | $n, n+1$       | $O(\Delta t)$     | Forward Difference (Explicit) |
| $\frac{\partial T}{\partial t}$ | $\frac{T_i^{n+1} - T_i^n}{\Delta t}$ | $n, n+1$       | $O(\Delta t)$     | Backward Difference (Implicit) |

**Important Point to Remember:** The choice of approximation method (forward, backward, or central difference) impacts the accuracy of the solution and the stability of the numerical scheme. Central differences are generally preferred for spatial derivatives due to higher accuracy, while time discretization choices (explicit vs. implicit) affect stability and computational effort.

**Alignment with Course Outcomes:**

*   **CO1 (Basics of governing equations):** Understanding these approximations is key to discretizing governing equations of heat transfer (e.g., Fourier's Law, Conduction Equation).
*   **CO2 (PDE equations and classification):** This topic directly helps in converting PDEs into a solvable numerical form.
*   **CO5 (Solve simple problems):** These finite difference forms are the building blocks for solving conduction problems.

---

### 6. Practice Questions and Answers

**Question 1:**
Given a function $f(x) = x^3$, find the central difference approximation for the first derivative of $f(x)$ at $x=2$ with $\Delta x = 0.1$. Compare it with the exact value.

**Solution 1:**
*   **Exact Derivative:** $\frac{df}{dx} = 3x^2$. At $x=2$, the exact derivative is $3(2^2) = 12$.
*   **Function Values:**
    *   $x_i = 2$, $f_i = f(2) = 2^3 = 8$.
    *   $x_{i+1} = 2 + 0.1 = 2.1$, $f_{i+1} = f(2.1) = (2.1)^3 = 9.261$.
    *   $x_{i-1} = 2 - 0.1 = 1.9$, $f_{i-1} = f(1.9) = (1.9)^3 = 6.859$.
*   **Central Difference Approximation:**
    $$ \frac{df}{dx}\bigg|_{x=2} \approx \frac{f_{i+1} - f_{i-1}}{2 \Delta x} = \frac{9.261 - 6.859}{2 \times 0.1} = \frac{2.402}{0.2} = 12.01 $$
*   **Comparison:** The approximation (12.01) is very close to the exact value (12). The error is $12.01 - 12 = 0.01$.

**Question 2:**
Approximate the second derivative of $f(x) = x^4$ at $x=3$ using the central difference method with $\Delta x = 0.2$.

**Solution 2:**
*   **Exact Second Derivative:** $\frac{d^2f}{dx^2} = \frac{d}{dx}(4x^3) = 12x^2$. At $x=3$, the exact second derivative is $12(3^2) = 12 \times 9 = 108$.
*   **Function Values:**
    *   $x_i = 3$, $f_i = f(3) = 3^4 = 81$.
    *   $x_{i+1} = 3 + 0.2 = 3.2$, $f_{i+1} = f(3.2) = (3.2)^4 = 104.8576$.
    *   $x_{i-1} = 3 - 0.2 = 2.8$, $f_{i-1} = f(2.8) = (2.8)^4 = 61.4656$.
*   **Central Difference Approximation:**
    $$ \frac{d^2f}{dx^2}\bigg|_{x=3} \approx \frac{f_{i+1} - 2f_i + f_{i-1}}{(\Delta x)^2} = \frac{104.8576 - 2(81) + 61.4656}{(0.2)^2} $$
    $$ = \frac{104.8576 - 162 + 61.4656}{0.04} = \frac{4.3232}{0.04} = 108.08 $$
*   **Comparison:** The approximation (108.08) is very close to the exact value (108). The error is $108.08 - 108 = 0.08$.

**Question 3:**
For an unsteady problem, you are using the forward difference method for the time derivative. If $T_i^n = 50^\circ C$ and $T_i^{n+1} = 55^\circ C$ with $\Delta t = 0.1$ seconds, what is the approximate rate of change of temperature with respect to time?

**Solution 3:**
Using the forward difference approximation for $\frac{\partial T}{\partial t}$:
$$ \frac{\partial T}{\partial t}\bigg|_{x_i, t_n} \approx \frac{T_i^{n+1} - T_i^n}{\Delta t} = \frac{55^\circ C - 50^\circ C}{0.1 \, s} = \frac{5^\circ C}{0.1 \, s} = 50^\circ C/s $$
The approximate rate of change of temperature is $50^\circ C/s$.

---

### 7. Key Points to Remember

*   **Accuracy vs. Computational Cost:** Higher-order approximations generally yield more accurate results but require more neighboring points (larger stencil), potentially increasing computational cost.
*   **Boundary Conditions:** Forward and backward differences are often necessary at boundaries where the full stencil of central differences cannot be applied.
*   **Stability:** For unsteady problems, the choice of time discretization (explicit vs. implicit) significantly affects numerical stability. Explicit methods often have stability constraints on $\Delta t$, while implicit methods are generally more stable but computationally more intensive per time step.
*   **Truncation Error:** Understanding the order of truncation error helps in selecting appropriate approximations for a desired level of accuracy.
*   **Stencil:** The set of grid points used in a finite difference approximation is called its stencil. The size and arrangement of the stencil are critical.

---

This module lays the groundwork for discretizing various heat transfer PDEs. The ability to accurately approximate derivatives using finite differences is fundamental to solving these equations numerically. The next steps will involve applying these approximations to actual heat transfer equations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
