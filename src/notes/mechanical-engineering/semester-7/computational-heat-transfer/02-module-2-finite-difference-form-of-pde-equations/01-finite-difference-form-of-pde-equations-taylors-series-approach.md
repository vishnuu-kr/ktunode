---
title: "Finite difference form of PDE equations-Taylor’s series approach."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 2: Finite difference form of PDE equations"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464373"
status: "completed"
scrapedAt: "2026-05-20T18:10:35.843Z"
---
# Computational Heat Transfer - Module 2: Finite Difference Form of PDE Equations

## Topic: Finite Difference Form of PDE Equations - Taylor's Series Approach

This module introduces the fundamental concepts of converting Partial Differential Equations (PDEs) into a form suitable for numerical solution. We will focus on the Finite Difference Method (FDM) and its derivation using Taylor's series expansion. This forms the bedrock for solving heat transfer and fluid flow problems computationally.

### 1. Learning Outcomes Covered

By the end of this topic, you will be able to:

*   Understand how PDEs describing heat transfer phenomena can be discretized into algebraic equations.
*   Derive finite difference approximations for derivatives using Taylor's series.
*   Understand the concept of truncation error and its relation to the order of approximation.
*   Apply finite difference approximations to common PDEs in heat transfer (e.g., heat conduction).

### 2. Key Concepts and Definitions

#### 2.1 Partial Differential Equations (PDEs) in Heat Transfer (CO1, CO2)

PDEs are mathematical equations that involve unknown functions of two or more independent variables and their partial derivatives. In heat transfer, these equations typically describe how temperature ($T$) changes with time ($t$) and spatial coordinates ($x$, $y$, $z$).

**Examples:**

*   **Heat Conduction Equation (1D Steady State):**
    $\frac{d^2T}{dx^2} = 0$
    (Described by CO1, CO2)

*   **Heat Conduction Equation (1D Unsteady State):**
    $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$
    where $\alpha$ is the thermal diffusivity.
    (Described by CO1, CO2)

*   **Heat Conduction Equation (2D Unsteady State):**
    $\frac{\partial T}{\partial t} = \alpha \left( \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} \right)$
    (Described by CO1, CO2)

#### 2.2 Numerical Solution of PDEs (CO3)

Direct analytical solutions to PDEs are often difficult or impossible to obtain for complex geometries or boundary conditions. Numerical methods approximate the continuous solution domain by a discrete set of points and replace the differential operators with algebraic approximations. The Finite Difference Method (FDM) is one such technique.

**Finite Difference Method (FDM):** A numerical method that approximates derivatives in PDEs by differences between function values at discrete points in the domain.

#### 2.3 Discretization of the Domain

To apply FDM, the continuous physical domain is divided into a grid of discrete points, often referred to as nodes. These nodes are spaced at regular intervals.

*   **Grid Spacing:** The distance between adjacent nodes is called the grid spacing, denoted by $\Delta x$ in the x-direction, $\Delta y$ in the y-direction, and $\Delta t$ in the time direction.

#### 2.4 Taylor's Series Expansion (Core of the Method)

Taylor's series is a fundamental tool used to derive finite difference approximations for derivatives. It allows us to express the value of a function at a point near a reference point as an infinite series of terms involving the function's derivatives at the reference point.

For a function $f(x)$ that is sufficiently differentiable, the Taylor series expansion of $f(x+h)$ around a point $x$ is given by:

$f(x+h) = f(x) + h \frac{f'(x)}{1!} + \frac{h^2}{2!} f''(x) + \frac{h^3}{3!} f'''(x) + \dots$

**Important Note:** The accuracy of the finite difference approximation depends on how many terms of the Taylor series we retain. The neglected terms constitute the **truncation error**.

### 3. Finite Difference Approximations for Derivatives

Using Taylor's series, we can derive various approximations for the first and second derivatives of a function.

#### 3.1 First Derivative Approximations

Let $f(x)$ be a function defined at discrete points $x_i$. We denote $f(x_i) = f_i$.
Consider the Taylor series expansion of $f(x_{i+1})$ around $x_i$, where $x_{i+1} = x_i + \Delta x$.
Let $h = \Delta x$.

$f(x_i + \Delta x) = f(x_i) + \Delta x f'(x_i) + \frac{(\Delta x)^2}{2!} f''(x_i) + \frac{(\Delta x)^3}{3!} f'''(x_i) + \dots$

$f_{i+1} = f_i + \Delta x f'_i + \frac{(\Delta x)^2}{2} f''_i + \mathcal{O}((\Delta x)^3)$

Rearranging to find $f'_i$:

$f'_i = \frac{f_{i+1} - f_i}{\Delta x} - \frac{\Delta x}{2} f''_i - \mathcal{O}((\Delta x)^2)$

The term $\frac{f_{i+1} - f_i}{\Delta x}$ is the **forward difference** approximation for the first derivative. The error term is of order $\mathcal{O}(\Delta x)$.

**Forward Difference Approximation:**
$f'_i \approx \frac{f_{i+1} - f_i}{\Delta x}$
**Truncation Error:** $\mathcal{O}(\Delta x)$

Now, consider the Taylor series expansion of $f(x_{i-1})$ around $x_i$, where $x_{i-1} = x_i - \Delta x$.
Let $h = -\Delta x$.

$f(x_i - \Delta x) = f(x_i) + (-\Delta x) f'(x_i) + \frac{(-\Delta x)^2}{2!} f''(x_i) + \frac{(-\Delta x)^3}{3!} f'''(x_i) + \dots$

$f_{i-1} = f_i - \Delta x f'_i + \frac{(\Delta x)^2}{2} f''_i - \frac{(\Delta x)^3}{6} f'''_i + \mathcal{O}((\Delta x)^4)$

Rearranging to find $f'_i$:

$f'_i = \frac{f_i - f_{i-1}}{\Delta x} + \frac{\Delta x}{2} f''_i - \mathcal{O}((\Delta x)^2)$

The term $\frac{f_i - f_{i-1}}{\Delta x}$ is the **backward difference** approximation for the first derivative. The error term is of order $\mathcal{O}(\Delta x)$.

**Backward Difference Approximation:**
$f'_i \approx \frac{f_i - f_{i-1}}{\Delta x}$
**Truncation Error:** $\mathcal{O}(\Delta x)$

To achieve a higher order of accuracy, we can subtract the Taylor series for $f(x_{i-1})$ from the Taylor series for $f(x_{i+1})$:

$f(x_{i+1}) = f_i + \Delta x f'_i + \frac{(\Delta x)^2}{2} f''_i + \frac{(\Delta x)^3}{6} f'''_i + \dots$
$f(x_{i-1}) = f_i - \Delta x f'_i + \frac{(\Delta x)^2}{2} f''_i - \frac{(\Delta x)^3}{6} f'''_i + \dots$

Subtracting the second from the first:
$f_{i+1} - f_{i-1} = 2 \Delta x f'_i + 2 \frac{(\Delta x)^3}{6} f'''_i + \dots$

Rearranging to find $f'_i$:

$f'_i = \frac{f_{i+1} - f_{i-1}}{2 \Delta x} - \frac{(\Delta x)^2}{6} f'''_i - \mathcal{O}((\Delta x)^3)$

The term $\frac{f_{i+1} - f_{i-1}}{2 \Delta x}$ is the **central difference** approximation for the first derivative. The error term is of order $\mathcal{O}((\Delta x)^2)$. This is more accurate than the forward or backward differences.

**Central Difference Approximation:**
$f'_i \approx \frac{f_{i+1} - f_{i-1}}{2 \Delta x}$
**Truncation Error:** $\mathcal{O}((\Delta x)^2)$

#### 3.2 Second Derivative Approximations

To approximate the second derivative, we can consider the Taylor series expansions for $f(x_{i+1})$ and $f(x_{i-1})$ and add them:

$f(x_{i+1}) = f_i + \Delta x f'_i + \frac{(\Delta x)^2}{2} f''_i + \frac{(\Delta x)^3}{6} f'''_i + \frac{(\Delta x)^4}{24} f^{(4)}_i + \dots$
$f(x_{i-1}) = f_i - \Delta x f'_i + \frac{(\Delta x)^2}{2} f''_i - \frac{(\Delta x)^3}{6} f'''_i + \frac{(\Delta x)^4}{24} f^{(4)}_i - \dots$

Adding the two equations:
$f_{i+1} + f_{i-1} = 2 f_i + 2 \frac{(\Delta x)^2}{2} f''_i + 2 \frac{(\Delta x)^4}{24} f^{(4)}_i + \dots$

$f_{i+1} + f_{i-1} = 2 f_i + (\Delta x)^2 f''_i + \frac{(\Delta x)^4}{12} f^{(4)}_i + \dots$

Rearranging to find $f''_i$:

$f''_i = \frac{f_{i+1} - 2 f_i + f_{i-1}}{(\Delta x)^2} - \frac{(\Delta x)^2}{12} f^{(4)}_i - \mathcal{O}((\Delta x)^3)$

The term $\frac{f_{i+1} - 2 f_i + f_{i-1}}{(\Delta x)^2}$ is the **central difference** approximation for the second derivative. The error term is of order $\mathcal{O}((\Delta x)^2)$.

**Central Difference Approximation for Second Derivative:**
$f''(x_i) \approx \frac{f_{i+1} - 2 f_i + f_{i-1}}{(\Delta x)^2}$
**Truncation Error:** $\mathcal{O}((\Delta x)^2)$

### 4. Applying Finite Differences to PDEs

Let's apply these approximations to the heat conduction equations.

#### 4.1 1D Steady-State Heat Conduction

The governing equation is $\frac{d^2T}{dx^2} = 0$.
Using the central difference approximation for the second derivative at an interior node $i$:

$\frac{T_{i+1} - 2 T_i + T_{i-1}}{(\Delta x)^2} = 0$

This is already an algebraic equation. Since the right-hand side is zero, the $(\Delta x)^2$ term does not affect the solution.

$T_{i+1} - 2 T_i + T_{i-1} = 0$

This equation relates the temperature at node $i$ to its neighbors ($i-1$ and $i+1$). By applying this for all interior nodes, we obtain a system of linear algebraic equations that can be solved for the unknown temperatures. (Relates to CO5, K3)

#### 4.2 1D Unsteady-State Heat Conduction

The governing equation is $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$.

We need to discretize both the time and space derivatives.

*   **Spatial Discretization:** Use the central difference approximation for $\frac{\partial^2 T}{\partial x^2}$ at time step $n$:
    $\left(\frac{\partial^2 T}{\partial x^2}\right)_{i}^{n} \approx \frac{T_{i+1}^{n} - 2 T_{i}^{n} + T_{i-1}^{n}}{(\Delta x)^2}$

*   **Temporal Discretization:** We can use either forward or backward difference for $\frac{\partial T}{\partial t}$.

    *   **Forward Difference (Explicit Method):** This approximates the time derivative at time step $n$.
        $\left(\frac{\partial T}{\partial t}\right)_{i}^{n} \approx \frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t}$

    Combining these for the forward difference in time (often called the **Explicit Euler method**):

    $\frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t} = \alpha \frac{T_{i+1}^{n} - 2 T_{i}^{n} + T_{i-1}^{n}}{(\Delta x)^2}$

    Rearranging to solve for the unknown temperature at the next time step, $T_{i}^{n+1}$:

    $T_{i}^{n+1} = T_{i}^{n} + \alpha \Delta t \frac{T_{i+1}^{n} - 2 T_{i}^{n} + T_{i-1}^{n}}{(\Delta x)^2}$

    $T_{i}^{n+1} = T_{i}^{n} + r (T_{i+1}^{n} - 2 T_{i}^{n} + T_{i-1}^{n})$, where $r = \alpha \Delta t / (\Delta x)^2$

    This method is explicit because the temperature at the new time step ($n+1$) is directly calculated from known values at the previous time step ($n$). The main challenge with explicit methods is stability, which often imposes a constraint on the time step size (e.g., $r \le 0.5$ for this scheme). (Relates to CO5, K3)

    *   **Backward Difference (Implicit Method):** This approximates the time derivative at time step $n+1$.
        $\left(\frac{\partial T}{\partial t}\right)_{i}^{n+1} \approx \frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t}$

    Combining these for the backward difference in time (often called the **Backward Euler method**):

    $\frac{T_{i}^{n+1} - T_{i}^{n}}{\Delta t} = \alpha \frac{T_{i+1}^{n+1} - 2 T_{i}^{n+1} + T_{i-1}^{n+1}}{(\Delta x)^2}$

    This method is implicit because the unknown temperatures at the new time step ($T_{i+1}^{n+1}$, $T_{i}^{n+1}$, $T_{i-1}^{n+1}$) appear on both sides of the equation. To solve for $T_{i}^{n+1}$, we need to solve a system of linear equations at each time step. Implicit methods are generally more stable and allow for larger time steps. (Relates to CO4, K2; CO5, K3)

**Textbook References:**

*   **Sastry (2012):** Chapter 12 (Finite Differences) provides a good introduction to Taylor series and deriving finite difference approximations for derivatives.
*   **Patankar (2017):** Chapter 3 (Finite Difference Method) discusses the conversion of differential equations to finite difference forms and the concept of discretization.
*   **Anderson & Wendt (1995):** Chapter 4 (Finite Difference Approximations) is a core resource for understanding Taylor series derivations and their application to PDEs.

### 5. Truncation Error and Order of Approximation

When we truncate a Taylor series, we introduce an error. This is called the **truncation error**.

*   **Forward Difference:** $f'_i = \frac{f_{i+1} - f_i}{\Delta x} - \frac{\Delta x}{2} f''_i - \dots$
    Truncation Error (TE) is of order $\mathcal{O}(\Delta x)$.

*   **Backward Difference:** $f'_i = \frac{f_i - f_{i-1}}{\Delta x} + \frac{\Delta x}{2} f''_i - \dots$
    Truncation Error (TE) is of order $\mathcal{O}(\Delta x)$.

*   **Central Difference (1st Derivative):** $f'_i = \frac{f_{i+1} - f_{i-1}}{2 \Delta x} - \frac{(\Delta x)^2}{6} f'''_i - \dots$
    Truncation Error (TE) is of order $\mathcal{O}((\Delta x)^2)$.

*   **Central Difference (2nd Derivative):** $f''_i = \frac{f_{i+1} - 2 f_i + f_{i-1}}{(\Delta x)^2} - \frac{(\Delta x)^2}{12} f^{(4)}_i - \dots$
    Truncation Error (TE) is of order $\mathcal{O}((\Delta x)^2)$.

**Impact of Truncation Error:**
As the grid spacing ($\Delta x$) or time step ($\Delta t$) is reduced, the truncation error decreases, and the finite difference approximation gets closer to the true derivative. The **order of approximation** indicates how quickly the error decreases with decreasing grid size. A higher order of approximation is generally preferred for better accuracy.

### 6. Important Points to Remember

*   **Taylor's Series is the key:** It is the tool to derive finite difference approximations for derivatives.
*   **Discretization:** Convert continuous PDEs into algebraic equations by replacing derivatives with finite difference approximations at discrete grid points.
*   **Types of Approximations:** Forward, backward, and central differences for the first derivative; central difference for the second derivative.
*   **Accuracy:** Central differences are generally more accurate (higher order of approximation) than forward or backward differences.
*   **Truncation Error:** This is the error introduced by truncating the Taylor series. Its order determines how the error behaves with grid size.
*   **Explicit vs. Implicit Methods:** For unsteady problems, explicit methods allow direct calculation, while implicit methods require solving a system of equations. Explicit methods are simpler but often have stability constraints; implicit methods are more stable but computationally more involved.

### 7. Practice Questions/Exercises

**Question 1:**
Using Taylor's series expansion, derive the central difference approximation for the first derivative, $f'(x_i)$. What is its order of truncation error?

**Answer 1:**
We expand $f(x_{i+1})$ and $f(x_{i-1})$ around $x_i$:
$f(x_{i+1}) = f(x_i) + \Delta x f'(x_i) + \frac{(\Delta x)^2}{2} f''(x_i) + \frac{(\Delta x)^3}{6} f'''(x_i) + \dots$
$f(x_{i-1}) = f(x_i) - \Delta x f'(x_i) + \frac{(\Delta x)^2}{2} f''(x_i) - \frac{(\Delta x)^3}{6} f'''(x_i) + \dots$

Subtracting the second equation from the first:
$f(x_{i+1}) - f(x_{i-1}) = 2 \Delta x f'(x_i) + 2 \frac{(\Delta x)^3}{6} f'''(x_i) + \dots$

Rearranging for $f'(x_i)$:
$f'(x_i) = \frac{f(x_{i+1}) - f(x_{i-1})}{2 \Delta x} - \frac{(\Delta x)^2}{6} f'''(x_i) - \dots$

The central difference approximation is:
$f'(x_i) \approx \frac{f_{i+1} - f_{i-1}}{2 \Delta x}$

The order of truncation error is $\mathcal{O}((\Delta x)^2)$ because the first neglected term is proportional to $(\Delta x)^2$.

**Question 2:**
Consider the 1D unsteady heat conduction equation: $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$.
Write down the finite difference form of this equation using the **explicit finite difference scheme** (forward in time, central in space).

**Answer 2:**
The explicit finite difference scheme uses a forward difference for the time derivative and a central difference for the spatial second derivative.

For the time derivative at node $i$ and time step $n$:
$\frac{\partial T}{\partial t} \approx \frac{T_i^{n+1} - T_i^n}{\Delta t}$

For the spatial derivative at node $i$ and time step $n$:
$\frac{\partial^2 T}{\partial x^2} \approx \frac{T_{i+1}^n - 2T_i^n + T_{i-1}^n}{(\Delta x)^2}$

Substituting these into the PDE:
$\frac{T_i^{n+1} - T_i^n}{\Delta t} = \alpha \frac{T_{i+1}^n - 2T_i^n + T_{i-1}^n}{(\Delta x)^2}$

Rearranging to solve for $T_i^{n+1}$:
$T_i^{n+1} = T_i^n + \alpha \frac{\Delta t}{(\Delta x)^2} (T_{i+1}^n - 2T_i^n + T_{i-1}^n)$

This is the explicit finite difference form.

**Question 3:**
Which finite difference approximation for the first derivative is generally more accurate, and why?

**Answer 3:**
The **central difference approximation** for the first derivative is generally more accurate. This is because its truncation error is of the order $\mathcal{O}((\Delta x)^2)$, whereas the truncation error for the forward and backward difference approximations is of the order $\mathcal{O}(\Delta x)$. This means that as the grid spacing $\Delta x$ is reduced, the central difference approximation converges to the true derivative much faster.

---

This concludes the notes for Topic: Finite difference form of PDE equations - Taylor's series approach. This foundation is crucial for understanding the subsequent topics in computational heat transfer.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
