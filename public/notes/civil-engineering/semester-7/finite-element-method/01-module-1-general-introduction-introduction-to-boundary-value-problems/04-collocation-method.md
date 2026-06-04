---
title: "collocation method"
subject: "FINITE ELEMENT METHOD"
module: "Module 1: General Introduction –introduction to boundary value problems"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116c8"
status: "completed"
scrapedAt: "2026-05-20T18:58:48.741Z"
---
# FINITE ELEMENT METHOD: Module 1 - General Introduction: Introduction to Boundary Value Problems

## Topic: The Collocation Method

### 1. Introduction to Boundary Value Problems (BVPs)

Boundary Value Problems (BVPs) are a class of differential equations where the solution is sought over a domain, and conditions are specified on the boundaries of that domain. These problems are fundamental in many scientific and engineering disciplines.

**Key Concepts:**

*   **Differential Equation:** An equation involving an unknown function and its derivatives.
*   **Domain:** The region over which the unknown function is defined and the differential equation is to be solved.
*   **Boundary Conditions (BCs):** Specific values or relationships that the unknown function or its derivatives must satisfy at the boundaries of the domain. These conditions provide the "boundary" aspect of the problem.

**Types of Boundary Conditions:**

*   **Dirichlet Boundary Conditions (Essential BCs):** Specify the value of the unknown function itself on the boundary.
    *   *Example:* $u(x) = u_0$ at $x=a$ (where $u$ is the unknown function and $u_0$ is a known value).
*   **Neumann Boundary Conditions (Natural BCs):** Specify the value of the derivative of the unknown function on the boundary.
    *   *Example:* $\frac{du}{dx}(x) = v_0$ at $x=b$ (where $v_0$ is a known value).
*   **Robin Boundary Conditions (Mixed BCs):** Specify a linear combination of the function and its derivative on the boundary.
    *   *Example:* $\alpha u(x) + \beta \frac{du}{dx}(x) = \gamma$ at $x=c$.

**Why are BVPs important?**

BVPs describe a vast array of physical phenomena, including:

*   **Heat Transfer:** Temperature distribution in a solid (e.g., a rod with specified temperatures at its ends).
*   **Structural Mechanics:** Deflection of a beam under load (e.g., a beam supported at its ends).
*   **Fluid Mechanics:** Velocity distribution in a flow.
*   **Electromagnetism:** Electric and magnetic field distributions.

**Example of a simple BVP:**

Consider a one-dimensional steady-state heat conduction problem in a rod of length $L$. The governing differential equation is:

$$ \frac{d}{dx} \left( k(x) \frac{du}{dx} \right) + q(x) = 0 $$

where:
*   $u(x)$ is the temperature at position $x$.
*   $k(x)$ is the thermal conductivity of the material (can be a function of position).
*   $q(x)$ is the heat generation rate per unit volume (can be a function of position).

The boundary conditions might be:

*   Dirichlet BC at one end: $u(0) = T_1$ (fixed temperature at $x=0$).
*   Neumann BC at the other end: $-k(L) \frac{du}{dx}(L) = Q_0$ (specified heat flux at $x=L$).

### 2. Introduction to the Collocation Method

The Collocation method is a **weighted residual method** used to approximate the solution of differential equations. The core idea is to choose an approximate solution in a specific form and then enforce that this approximate solution satisfies the differential equation at a discrete set of points within the domain, called **collocation points**.

**Key Concepts:**

*   **Approximate Solution (Trial Function):** A function, usually expressed in terms of a set of unknown coefficients and known basis functions, that is assumed to represent the true solution.
    *   Typically, the approximate solution is assumed to be a linear combination of basis functions that satisfy the essential boundary conditions.
    *   Let the approximate solution be denoted by $u_a(x)$.
*   **Residual:** The error that results when the approximate solution is substituted into the differential equation.
    *   If the differential equation is of the form $L(u) = f(x)$, then the residual is $R(x) = L(u_a(x)) - f(x)$.
*   **Collocation Points:** A discrete set of points $x_1, x_2, \dots, x_N$ within the domain where the residual is forced to be zero (or minimized).
*   **Basis Functions:** A set of known functions that are used to construct the approximate solution. These functions should ideally satisfy the essential boundary conditions.

**The Principle of Collocation:**

The collocation method aims to make the residual equal to zero at a specific set of points:

$$ R(x_i) = 0 \quad \text{for } i = 1, 2, \dots, N $$

where $x_i$ are the chosen collocation points.

**Steps Involved in the Collocation Method:**

1.  **Define the Domain and BVP:** Clearly state the differential equation and its boundary conditions.
2.  **Choose an Approximate Solution:** Select a trial function $u_a(x)$ that satisfies the essential boundary conditions. This function is usually expressed as:
    $$ u_a(x) = \sum_{j=1}^{M} c_j \phi_j(x) $$
    where $c_j$ are unknown coefficients and $\phi_j(x)$ are chosen basis functions.
    *   **Important:** The basis functions $\phi_j(x)$ must be chosen such that $u_a(x)$ automatically satisfies the Dirichlet boundary conditions. For example, if $u(0) = u_0$, then $\phi_j(0) = 0$ for all $j$. If $u(L) = u_L$, then $\phi_j(L) = 0$ for all $j$.
3.  **Calculate the Residual:** Substitute $u_a(x)$ into the differential equation to obtain the residual $R(x)$.
4.  **Choose Collocation Points:** Select $N$ discrete points $x_1, x_2, \dots, x_N$ within the domain. The number of collocation points, $N$, should ideally be equal to the number of unknown coefficients, $M$.
5.  **Enforce the Collocation Condition:** Set the residual to zero at each collocation point:
    $$ R(x_i) = 0 \quad \text{for } i = 1, 2, \dots, N $$
    This will result in a system of $N$ algebraic equations.
6.  **Solve the System of Equations:** Solve the system of algebraic equations to determine the unknown coefficients $c_j$.
7.  **Obtain the Approximate Solution:** Substitute the determined coefficients back into the approximate solution $u_a(x)$.

**Number of Collocation Points vs. Number of Unknowns:**

*   To obtain a unique solution for the coefficients, the number of collocation points ($N$) should be equal to the number of unknown coefficients ($M$).
*   If $N > M$, the system is overdetermined, and one might need to employ a method like least squares to find the "best" fit.
*   If $N < M$, the system is underdetermined, and there will be infinitely many solutions.

### 3. Example: Collocation Method for a Simple BVP

**Problem:** Find an approximate solution to the following BVP:

$$ \frac{d^2 u}{dx^2} + u(x) = -x, \quad 0 < x < 1 $$

with boundary conditions:

$$ u(0) = 0 $$
$$ u(1) = 1 $$

**Solution:**

1.  **Domain and BVP:**
    *   Differential Equation: $u''(x) + u(x) = -x$
    *   Domain: $0 < x < 1$
    *   Boundary Conditions: $u(0) = 0$, $u(1) = 1$

2.  **Choose Approximate Solution:**
    We need a function $u_a(x)$ that satisfies $u_a(0) = 0$ and $u_a(1) = 1$.
    Let's choose a polynomial form. A simple cubic polynomial can satisfy these conditions:
    $$ u_a(x) = c_1 x + c_2 x^2 + c_3 x^3 $$
    This form satisfies $u_a(0) = 0$. For $u_a(1) = 1$:
    $$ c_1 (1) + c_2 (1)^2 + c_3 (1)^3 = 1 \implies c_1 + c_2 + c_3 = 1 $$
    This means we have one constraint on our coefficients. To have a solvable system with the collocation method, we typically aim for the number of unknown coefficients to match the number of collocation points.

    Let's consider a simpler form with a specified structure to satisfy the boundary conditions:
    $$ u_a(x) = A \sin(\pi x) + B \cos(\pi x) + C x + D x^2 $$
    This form is overly complex for this example. A better approach is to construct a solution that *inherently* satisfies the boundary conditions.

    Let's try a simpler approach for the approximate solution. We can express the solution as the sum of a particular solution satisfying the BCs and a homogeneous part with unknown coefficients.

    A simpler approach is to define a trial function that *automatically* satisfies the essential boundary conditions.
    Let $u_a(x) = \phi_1(x) + c \phi_2(x)$. However, this requires prior knowledge of a particular solution.

    A more direct way for polynomial approximations:
    Let's assume an approximate solution of the form:
    $$ u_a(x) = x + c_1 x(1-x) + c_2 x^2(1-x) $$
    This function automatically satisfies $u_a(0) = 0$ and $u_a(1) = 1$.
    The unknown coefficients are $c_1$ and $c_2$. We will need two collocation points.

    Let's calculate the derivatives:
    $u_a'(x) = 1 + c_1 (1-2x) + c_2 (2x - 3x^2)$
    $u_a''(x) = c_1 (-2) + c_2 (2 - 6x) = -2c_1 + c_2(2 - 6x)$

3.  **Calculate the Residual:**
    Substitute $u_a(x)$ and $u_a''(x)$ into the differential equation $u''(x) + u(x) = -x$:
    $R(x) = (-2c_1 + c_2(2 - 6x)) + (x + c_1 x(1-x) + c_2 x^2(1-x)) - (-x) = 0$
    $R(x) = -2c_1 + 2c_2 - 6xc_2 + x + c_1(x - x^2) + c_2(x^2 - x^3) + x = 0$
    $R(x) = (-2c_1 + 2c_2) + x(-6c_2 + 1 + c_1 + c_1x + c_2x - c_2x^2) + x = 0$
    $R(x) = (-2c_1 + 2c_2) + x(1 + c_1) + x^2(-c_1 + c_2) + x^3(-c_2) + 2x = 0$
    Rearranging by powers of $x$:
    $R(x) = (-2c_1 + 2c_2) + (1 + c_1 + 2)x + (-c_1 + c_2)x^2 + (-c_2)x^3 = 0$
    $R(x) = (-2c_1 + 2c_2) + (3 + c_1)x + (-c_1 + c_2)x^2 - c_2 x^3 = 0$

4.  **Choose Collocation Points:**
    We have two unknown coefficients ($c_1, c_2$), so we need two collocation points. Let's choose:
    $x_1 = 0.5$
    $x_2 = 0.25$ (arbitrary choice, can be other points)

5.  **Enforce Collocation Condition:**
    Set $R(x_i) = 0$ for $i=1, 2$.

    For $x_1 = 0.5$:
    $R(0.5) = (-2c_1 + 2c_2) + (3 + c_1)(0.5) + (-c_1 + c_2)(0.5)^2 - c_2 (0.5)^3 = 0$
    $-2c_1 + 2c_2 + 1.5 + 0.5c_1 + 0.25(-c_1 + c_2) - 0.125c_2 = 0$
    $(-2 + 0.5 - 0.25)c_1 + (2 + 0.25 - 0.125)c_2 + 1.5 = 0$
    $-1.75c_1 + 2.125c_2 + 1.5 = 0$  (Equation 1)

    For $x_2 = 0.25$:
    $R(0.25) = (-2c_1 + 2c_2) + (3 + c_1)(0.25) + (-c_1 + c_2)(0.25)^2 - c_2 (0.25)^3 = 0$
    $-2c_1 + 2c_2 + 0.75 + 0.25c_1 + 0.0625(-c_1 + c_2) - 0.015625c_2 = 0$
    $(-2 + 0.25 - 0.0625)c_1 + (2 + 0.0625 - 0.015625)c_2 + 0.75 = 0$
    $-1.8125c_1 + 2.046875c_2 + 0.75 = 0$  (Equation 2)

6.  **Solve the System of Equations:**
    We have a system of two linear equations with two unknowns:
    1) $-1.75c_1 + 2.125c_2 = -1.5$
    2) $-1.8125c_1 + 2.046875c_2 = -0.75$

    Solving this system (e.g., using substitution or matrix methods), we get:
    $c_1 \approx -0.4186$
    $c_2 \approx -0.3023$

7.  **Obtain the Approximate Solution:**
    Substitute the values of $c_1$ and $c_2$ back into $u_a(x)$:
    $u_a(x) = x + (-0.4186) x(1-x) + (-0.3023) x^2(1-x)$

### 4. Advantages and Disadvantages of the Collocation Method

**Advantages:**

*   **Simplicity:** Conceptually straightforward and relatively easy to implement for simple problems.
*   **No Integration Required:** Unlike Galerkin or other weighted residual methods, collocation does not require explicit integration to form the system of equations, which can be advantageous when integrals are difficult to evaluate.
*   **Direct Satisfaction of DE:** Directly enforces the differential equation at specific points, making it intuitive.

**Disadvantages:**

*   **Choice of Collocation Points:** The accuracy of the solution can be sensitive to the choice of collocation points. Poorly chosen points can lead to inaccurate results.
*   **Basis Function Selection:** The choice of basis functions is crucial. They must satisfy the essential boundary conditions.
*   **Approximation Errors:** The method inherently relies on approximation. The accuracy depends on the form of the trial function and the number and distribution of collocation points.
*   **Less Efficient for Complex Problems:** For complex geometries or highly non-linear problems, finding suitable basis functions and appropriate collocation points can be challenging. The system of equations can also become ill-conditioned.
*   **No Guarantee of Global Accuracy:** While the residual is zero at the collocation points, it may not be zero (or small) elsewhere in the domain.
*   **Derivatives in Residual:** If the differential equation involves higher-order derivatives, the approximate solution and its derivatives must be sufficiently smooth, which can be difficult to achieve with certain basis functions.

### 5. Learning Outcomes Covered

This topic covers the following learning outcomes:

*   **Understanding of Boundary Value Problems (BVPs):** The introduction defines BVPs, their components (differential equations, domains, boundary conditions), and their importance in modeling physical phenomena.
*   **Introduction to the Collocation Method:** The core principles of the collocation method are explained, including the concept of an approximate solution, residual, and collocation points.
*   **Procedure for Applying the Collocation Method:** The step-by-step process for solving a BVP using collocation is outlined.
*   **Example Application:** A practical example demonstrates how to apply the collocation method to a sample BVP.
*   **Advantages and Disadvantages:** A balanced view of the strengths and weaknesses of the collocation method is provided.

### 6. Practice Questions and Exercises

**Question 1:**

Consider the BVP:
$$ \frac{d^2 u}{dx^2} - u(x) = -x, \quad 0 < x < 1 $$
with boundary conditions:
$$ u(0) = 0 $$
$$ u(1) = 0 $$

Using the collocation method with an approximate solution of the form:
$$ u_a(x) = c_1 x(1-x) + c_2 x^2(1-x) $$
and choosing two collocation points $x_1 = 0.25$ and $x_2 = 0.75$, set up the system of linear equations for $c_1$ and $c_2$. (You do not need to solve the system).

**Question 2:**

Explain the significance of choosing basis functions that satisfy the essential boundary conditions in the collocation method.

**Question 3:**

What is the primary goal of the collocation method in solving differential equations?

**Question 4:**

List two advantages and two disadvantages of the collocation method.

### Answers to Practice Questions

**Answer 1:**

1.  **Approximate Solution:**
    $$ u_a(x) = c_1 x(1-x) + c_2 x^2(1-x) = c_1(x-x^2) + c_2(x^2-x^3) $$
    This form automatically satisfies $u_a(0) = 0$ and $u_a(1) = 0$.

2.  **Derivatives:**
    $u_a'(x) = c_1(1-2x) + c_2(2x-3x^2)$
    $u_a''(x) = c_1(-2) + c_2(2-6x)$

3.  **Residual:**
    Substitute $u_a(x)$ and $u_a''(x)$ into $u''(x) - u(x) = -x$:
    $R(x) = [c_1(-2) + c_2(2-6x)] - [c_1(x-x^2) + c_2(x^2-x^3)] - (-x) = 0$
    $R(x) = -2c_1 + 2c_2 - 6xc_2 - c_1x + c_1x^2 - c_2x^2 + c_2x^3 + x = 0$
    $R(x) = (-2c_1 + 2c_2) + x(-6c_2 - c_1 + 1) + x^2(c_1 - c_2) + x^3(c_2) = 0$

4.  **Collocation Points:** $x_1 = 0.25$, $x_2 = 0.75$

5.  **Enforce Collocation Condition:**

    For $x_1 = 0.25$:
    $R(0.25) = (-2c_1 + 2c_2) + 0.25(-6c_2 - c_1 + 1) + (0.25)^2(c_1 - c_2) + (0.25)^3(c_2) = 0$
    $-2c_1 + 2c_2 - 1.5c_2 - 0.25c_1 + 0.25 + 0.0625(c_1 - c_2) + 0.015625c_2 = 0$
    $(-2 - 0.25 + 0.0625)c_1 + (2 - 1.5 - 0.0625 + 0.015625)c_2 + 0.25 = 0$
    $-2.1875c_1 + 0.453125c_2 + 0.25 = 0$  (Equation 1)

    For $x_2 = 0.75$:
    $R(0.75) = (-2c_1 + 2c_2) + 0.75(-6c_2 - c_1 + 1) + (0.75)^2(c_1 - c_2) + (0.75)^3(c_2) = 0$
    $-2c_1 + 2c_2 - 4.5c_2 - 0.75c_1 + 0.75 + 0.5625(c_1 - c_2) + 0.421875c_2 = 0$
    $(-2 - 0.75 + 0.5625)c_1 + (2 - 4.5 - 0.5625 + 0.421875)c_2 + 0.75 = 0$
    $-2.1875c_1 - 2.640625c_2 + 0.75 = 0$  (Equation 2)

    The system of equations is:
    1) $-2.1875c_1 + 0.453125c_2 = -0.25$
    2) $-2.1875c_1 - 2.640625c_2 = -0.75$

**Answer 2:**

Choosing basis functions that satisfy the essential (Dirichlet) boundary conditions simplifies the construction of the approximate solution. Instead of needing to explicitly impose these conditions on the final approximate solution, the chosen form inherently meets them. This reduces the number of unknowns to be determined and avoids the need for additional equations or adjustments to satisfy these critical boundary constraints.

**Answer 3:**

The primary goal of the collocation method is to find an approximate solution to a differential equation by enforcing that the residual (the error when the approximate solution is substituted into the differential equation) is zero at a discrete set of points within the domain, known as collocation points.

**Answer 4:**

**Advantages:**
*   Simplicity of implementation, especially for linear problems.
*   Avoids the need for integration, which can be complex or impossible analytically.

**Disadvantages:**
*   Solution accuracy can be sensitive to the choice and distribution of collocation points.
*   May not provide good accuracy globally if the basis functions or collocation points are not well-chosen.

### 7. Important Points to Remember

*   **Collocation = Residual = 0 at specific points.**
*   The approximate solution **must** satisfy the essential (Dirichlet) boundary conditions.
*   The number of collocation points typically equals the number of unknown coefficients in the approximate solution.
*   The choice of basis functions and collocation points significantly impacts the accuracy.
*   Collocation is a member of the broader class of weighted residual methods.
*   While simple, it might not be the most accurate or robust method for all problems compared to methods like Galerkin.
