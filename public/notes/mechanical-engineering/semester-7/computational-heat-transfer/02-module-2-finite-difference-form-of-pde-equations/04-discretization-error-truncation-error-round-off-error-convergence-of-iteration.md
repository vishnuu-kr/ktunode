---
title: "Discretization error, truncation error, round off error, Convergence of iteration."
subject: "COMPUTATIONAL HEAT TRANSFER"
module: "Module 2: Finite difference form of PDE equations"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464376"
status: "completed"
scrapedAt: "2026-05-20T18:10:37.964Z"
---
# COMPUTATIONAL HEAT TRANSFER

## Module 2: Finite Difference Form of PDE Equations

### Topic: Discretization Error, Truncation Error, Round-off Error, Convergence of Iteration

---

### 1. Introduction to Discretization and Error Analysis

Computational Heat Transfer (CHT) relies on solving Partial Differential Equations (PDEs) that describe physical phenomena like heat transfer. Since analytical solutions are often impossible for complex geometries and boundary conditions, we resort to numerical methods. These methods approximate continuous variables with discrete values and derivatives with finite differences. This approximation process inevitably introduces errors. Understanding these errors and their impact on the solution's accuracy and reliability is crucial.

**Learning Outcomes Covered:**
*   **Understanding of PDE equations and their classification (CO2 - K2):** While this topic doesn't delve into classification, it's the foundation for transforming PDEs into a solvable format.
*   **Familiarity with numerical techniques like FDM (CO3 - K1):** This topic is directly about the errors introduced by FDM.

**Key Concepts:**
*   **Discretization:** The process of converting continuous variables and their derivatives into discrete values and finite difference approximations.
*   **Error:** The difference between the true solution and the approximate solution obtained by a numerical method.

---

### 2. Discretization Error (Truncation Error)

Discretization error, often referred to as **truncation error**, arises from approximating infinite series representations of functions (like Taylor series) with a finite number of terms. When we replace continuous derivatives with finite difference formulas, we are essentially truncating the Taylor series expansion.

**Key Concepts & Definitions:**
*   **Taylor Series Expansion:** A fundamental tool for approximating functions. For a function $f(x)$ around a point $x_0$, the Taylor series is:
    $f(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + \frac{f'''(x_0)}{3!}(x-x_0)^3 + ...$
*   **Finite Difference Approximations:** These are derived by strategically selecting points in the Taylor series expansion.
    *   **Forward Difference (First Derivative):**
        Approximation: $\frac{\partial f}{\partial x} \approx \frac{f(x+\Delta x) - f(x)}{\Delta x}$
        Taylor Series for $f(x+\Delta x)$: $f(x+\Delta x) = f(x) + f'(x)\Delta x + \frac{f''(x)}{2!}(\Delta x)^2 + ...$
        Rearranging to solve for $f'(x)$: $f'(x) = \frac{f(x+\Delta x) - f(x)}{\Delta x} - \frac{f''(x)}{2!}\Delta x - ...$
        **Truncation Error:** $O(\Delta x)$ (order of $\Delta x$). This means the error is proportional to the grid spacing.
    *   **Backward Difference (First Derivative):**
        Approximation: $\frac{\partial f}{\partial x} \approx \frac{f(x) - f(x-\Delta x)}{\Delta x}$
        Taylor Series for $f(x-\Delta x)$: $f(x-\Delta x) = f(x) - f'(x)\Delta x + \frac{f''(x)}{2!}(\Delta x)^2 - ...$
        Rearranging: $f'(x) = \frac{f(x) - f(x-\Delta x)}{\Delta x} + \frac{f''(x)}{2!}\Delta x - ...$
        **Truncation Error:** $O(\Delta x)$.
    *   **Central Difference (First Derivative):**
        Approximation: $\frac{\partial f}{\partial x} \approx \frac{f(x+\Delta x) - f(x-\Delta x)}{2\Delta x}$
        Taylor Series:
        $f(x+\Delta x) = f(x) + f'(x)\Delta x + \frac{f''(x)}{2!}(\Delta x)^2 + \frac{f'''(x)}{3!}(\Delta x)^3 + ...$
        $f(x-\Delta x) = f(x) - f'(x)\Delta x + \frac{f''(x)}{2!}(\Delta x)^2 - \frac{f'''(x)}{3!}(\Delta x)^3 + ...$
        Subtracting the second from the first: $f(x+\Delta x) - f(x-\Delta x) = 2f'(x)\Delta x + 2\frac{f'''(x)}{3!}(\Delta x)^3 + ...$
        Rearranging: $f'(x) = \frac{f(x+\Delta x) - f(x-\Delta x)}{2\Delta x} - \frac{f'''(x)}{3!}(\Delta x)^2 - ...$
        **Truncation Error:** $O((\Delta x)^2)$. This is more accurate than forward or backward differences.
    *   **Central Difference (Second Derivative):**
        Approximation: $\frac{\partial^2 f}{\partial x^2} \approx \frac{f(x+\Delta x) - 2f(x) + f(x-\Delta x)}{(\Delta x)^2}$
        Adding the Taylor series expansions for $f(x+\Delta x)$ and $f(x-\Delta x)$:
        $f(x+\Delta x) + f(x-\Delta x) = 2f(x) + 2\frac{f''(x)}{2!}(\Delta x)^2 + 2\frac{f^{(4)}(x)}{4!}(\Delta x)^4 + ...$
        Rearranging: $f''(x) = \frac{f(x+\Delta x) - 2f(x) + f(x-\Delta x)}{(\Delta x)^2} - \frac{f^{(4)}(x)}{12}(\Delta x)^2 - ...$
        **Truncation Error:** $O((\Delta x)^2)$.

**Impact of Grid Spacing ($\Delta x$):**
*   Decreasing $\Delta x$ (making the grid finer) generally reduces the truncation error.
*   The order of accuracy ($O(\Delta x)$ or $O((\Delta x)^2)$) indicates how quickly the error decreases as $\Delta x$ is reduced. A higher order of accuracy means faster convergence.

**Textbook References:**
*   **Sastry (2012):** Chapter 1 and 2 discuss Taylor series expansions and finite differences. Chapter 4 on solutions of ODEs will also cover these concepts in the context of time derivatives.
*   **Patankar (2017):** Chapter 3 on "Finite Difference Formulation" extensively covers the derivation of finite difference schemes and their truncation errors for various derivatives relevant to heat transfer.

**Example:**
Consider the steady-state one-dimensional heat conduction equation:
$\frac{d^2 T}{dx^2} = 0$
Using the central difference approximation for the second derivative at node $i$:
$\frac{T_{i+1} - 2T_i + T_{i-1}}{(\Delta x)^2} = 0$
The exact solution to $\frac{d^2 T}{dx^2} = 0$ is $T(x) = Ax + B$ (a linear profile).
The finite difference approximation introduces a truncation error of $O((\Delta x)^2)$ because the second derivative of $T(x) = Ax+B$ is zero. However, if the actual temperature profile is not linear, say $T(x) = x^3$, then $\frac{d^2 T}{dx^2} = 6x$. The finite difference approximation would still be applied, and the error would depend on the deviation from the linear profile and the grid size.

**Important Point to Remember:**
Truncation error is inherent in the method of approximation. It is independent of the computer's arithmetic capabilities.

---

### 3. Round-off Error

Round-off error occurs due to the finite precision with which computers represent numbers. Every arithmetic operation (addition, subtraction, multiplication, division) can introduce a small error when the result cannot be represented exactly.

**Key Concepts & Definitions:**
*   **Finite Precision Arithmetic:** Computers store numbers using a limited number of bits, leading to approximations.
*   **Sources of Round-off Error:**
    *   **Representation Error:** When a decimal number is converted to its binary representation, small errors can occur.
    *   **Arithmetic Operation Error:** The result of an arithmetic operation may not be exactly representable in the computer's format, leading to rounding.
*   **Accumulation of Round-off Error:** In iterative methods or when solving large systems of equations, these small errors can accumulate and potentially grow.

**Impact of Grid Spacing ($\Delta x$) and Arithmetic Precision:**
*   **Finer Grids:** While reducing truncation error, finer grids lead to more arithmetic operations and thus a greater potential for round-off error accumulation.
*   **Floating-point Arithmetic:** Using single-precision floating-point numbers can lead to larger round-off errors compared to double-precision numbers.

**Textbook References:**
*   **Sastry (2012):** Chapter 1 provides a foundational understanding of number representation and basic errors.
*   **Patankar (2017):** Discusses computational aspects, implicitly acknowledging the role of round-off error, especially when dealing with large systems of equations that are solved iteratively.

**Example:**
Consider the operation $1 - \cos(\Delta x)$ for a very small $\Delta x$.
Using Taylor series: $\cos(\Delta x) = 1 - \frac{(\Delta x)^2}{2!} + \frac{(\Delta x)^4}{4!} - ...$
So, $1 - \cos(\Delta x) = \frac{(\Delta x)^2}{2!} - \frac{(\Delta x)^4}{4!} + ...$
If $\Delta x$ is very small, $\cos(\Delta x)$ is very close to 1. In single-precision floating-point arithmetic, $1 - \cos(\Delta x)$ might be computed as $1 - 1.0 = 0$, completely losing the small value. If computed as $\frac{(\Delta x)^2}{2}$, this might also be too small to represent accurately. A more stable way to compute this would be using the identity $1 - \cos(\Delta x) = 2 \sin^2(\frac{\Delta x}{2})$.

**Important Point to Remember:**
Round-off error is a consequence of the computer's hardware. It is more pronounced in algorithms that involve many subtractions of nearly equal numbers or operations on very small numbers.

---

### 4. Total Error

The total error in a numerical solution is the sum of the truncation error and the round-off error.

**Key Concepts & Definitions:**
*   **Total Error = Truncation Error + Round-off Error**

**Impact of Grid Spacing ($\Delta x$):**
*   **Large $\Delta x$:** Truncation error dominates.
*   **Small $\Delta x$:** Round-off error becomes more significant as it accumulates.

There exists an **optimal $\Delta x$** that minimizes the total error. This is the $\Delta x$ where the decreasing truncation error is balanced by the increasing round-off error.

**Visual Representation:**
(Imagine a graph with $\Delta x$ on the x-axis and Error on the y-axis)
*   Truncation Error: Starts high at large $\Delta x$ and decreases as $\Delta x$ decreases.
*   Round-off Error: Starts low at large $\Delta x$ and increases as $\Delta x$ decreases.
*   Total Error: Has a U-shaped curve, with a minimum at some intermediate $\Delta x$.

**Textbook References:**
*   **Sastry (2012):** Discusses the interplay of different error types in numerical methods.
*   **Patankar (2017):** Implicitly addresses this by showing how finer grids improve accuracy until computational limitations become apparent.

**Important Point to Remember:**
Simply reducing $\Delta x$ indefinitely does not guarantee an improvement in accuracy.

---

### 5. Convergence of Iteration

Many numerical methods for solving systems of algebraic equations derived from discretized PDEs are iterative. This means they start with an initial guess and repeatedly refine the solution until it converges to a stable value. Convergence refers to the process where the iterative solution approaches the true solution.

**Key Concepts & Definitions:**
*   **Iteration:** A process of repeating a set of instructions to achieve a desired outcome.
*   **Convergence:** The property of an iterative method where the sequence of approximations generated by the method approaches the exact solution of the problem.
*   **Divergence:** The opposite of convergence, where the iterative solution moves away from the true solution.
*   **Stopping Criteria:** Conditions used to terminate an iterative process, usually based on the magnitude of the change between successive iterations or the residual of the equations.
*   **Residual:** A measure of how well a proposed solution satisfies the governing equations.

**Types of Iterative Methods (Relevant to CHT):**
*   **Gauss-Seidel Method:** Uses the most recently computed values of variables in the iteration.
*   **Jacobi Method:** Uses values from the previous iteration to compute values for the current iteration.
*   **Successive Over-Relaxation (SOR):** An acceleration technique that modifies the Gauss-Seidel update.

**Conditions for Convergence:**
The convergence of iterative methods is often analyzed using matrix properties. For a system of linear equations $Ax = b$, if we decompose $A = D - L - U$ (where D is diagonal, L is lower triangular, U is upper triangular), the Jacobi and Gauss-Seidel iteration matrices are:
*   **Jacobi:** $x^{(k+1)} = D^{-1}(b - (L+U)x^{(k)})$
*   **Gauss-Seidel:** $x^{(k+1)} = (D-L)^{-1}(b - Ux^{(k)})$

A common criterion for convergence is that the **spectral radius** ($\rho$) of the iteration matrix must be less than 1 ($\rho < 1$). The spectral radius is the maximum absolute value of the eigenvalues of the iteration matrix.

**Practical Convergence Criteria:**
In practice, we monitor the change in the solution between iterations.
*   **Absolute Change:** $|x_i^{(k+1)} - x_i^{(k)}| < \epsilon_{abs}$ for all $i$.
*   **Relative Change:** $\frac{|x_i^{(k+1)} - x_i^{(k)}|}{|x_i^{(k+1)}|} < \epsilon_{rel}$ for all $i$ (where $x_i^{(k+1)} \neq 0$).
*   **Residual Check:** $\|Ax^{(k)} - b\| < \epsilon_{res}$ (checking if the current solution approximately satisfies the original equation).

**Factors Affecting Convergence:**
*   **Initial Guess:** A good initial guess can significantly speed up convergence.
*   **Grid Size:** For some problems, finer grids can lead to systems of equations that are harder to converge.
*   **Physical Properties:** Properties like high thermal conductivity or high Peclet numbers (in convection-dominated flows) can make convergence more challenging.
*   **Numerical Scheme:** The choice of finite difference scheme can impact convergence.
*   **Acceleration Techniques:** Methods like SOR can improve convergence rates.

**Textbook References:**
*   **Sastry (2012):** Chapter 9 on "Iterative Methods" provides a thorough mathematical treatment of convergence criteria for various iterative techniques applied to systems of linear equations.
*   **Patankar (2017):** Chapter 5 on "Iterative Methods" discusses the practical aspects of iterative solvers, convergence monitoring, and techniques for accelerating convergence in the context of fluid flow and heat transfer problems.
*   **Anderson & Wendt (1995):** Chapter 7 on "Iterative Solutions" covers the fundamentals and practical application of iterative solvers for CFD.

**Example:**
Consider solving the 1D steady heat conduction equation with convection on a uniform grid. The discretized equation for an interior node $i$ might look like:
$A_i T_i = B_i T_{i-1} + C_i T_{i+1} + D_i$
where $T_{i-1}, T_i, T_{i+1}$ are temperatures at adjacent nodes, and $A_i, B_i, C_i, D_i$ are coefficients.

If we rearrange this to solve for $T_i$ in an iterative manner (e.g., Gauss-Seidel):
$T_i^{(k+1)} = \frac{B_i T_{i-1}^{(k+1)} + C_i T_{i+1}^{(k)} + D_i}{A_i}$
If the coefficient $A_i$ is sufficiently larger than $B_i + C_i$ (diagonally dominant system), the method is likely to converge.

**Important Point to Remember:**
Convergence is essential for obtaining a meaningful numerical solution from an iterative process. Always monitor convergence using appropriate criteria.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the order of the truncation error for the central difference approximation of the second derivative?
a) $O(\Delta x)$
b) $O((\Delta x)^2)$
c) $O((\Delta x)^3)$
d) $O(1)$

**Question 2:**
Which of the following statements is true regarding truncation error and round-off error?
a) Truncation error increases as the grid spacing decreases.
b) Round-off error decreases as the number of arithmetic operations increases.
c) Truncation error is inherent in the approximation, while round-off error is due to computer hardware limitations.
d) Round-off error dominates when the grid spacing is very large.

**Question 3:**
Consider the function $f(x) = e^x$. Using Taylor series expansion around $x=0$, approximate $f(0.1)$ using the first two non-zero terms. What is the truncation error of this approximation?
(Hint: $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + ...$)

**Question 4:**
Describe a scenario where round-off error might be particularly problematic in a heat transfer simulation.

**Question 5:**
What is the primary criterion for the convergence of iterative methods for solving linear systems?

---

### 7. Answers to Practice Questions

**Answer 1:**
The correct answer is **b) $O((\Delta x)^2)$**.
As derived using Taylor series, the central difference approximation for the second derivative has an error proportional to $(\Delta x)^2$.

**Answer 2:**
The correct answer is **c) Truncation error is inherent in the approximation, while round-off error is due to computer hardware limitations.**
*   a) is false: Truncation error *decreases* as grid spacing decreases.
*   b) is false: Round-off error *accumulates* with more operations.
*   d) is false: Round-off error becomes more significant when the grid spacing is very small, due to the increased number of operations.

**Answer 3:**
The Taylor series for $e^x$ around $x=0$ is $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + ...$
Using the first two non-zero terms: $f(0.1) \approx 1 + 0.1 = 1.1$.
The approximation used is $1+x$. The Taylor series for $e^x$ is $1 + x + \frac{x^2}{2} + \frac{x^3}{6} + ...$
The truncation error comes from neglecting the terms from $\frac{x^2}{2!}$ onwards. The leading term of the truncation error is $\frac{x^2}{2!}$.
For $x=0.1$: Truncation Error $\approx \frac{(0.1)^2}{2} = \frac{0.01}{2} = 0.005$.
The exact value of $e^{0.1}$ is approximately $1.10517$. The approximation gives $1.1$. The error is $1.10517 - 1.1 = 0.00517$, which is close to the estimated truncation error.

**Answer 4:**
Round-off error can be particularly problematic when:
*   **Solving a system of equations with a very fine grid:** This leads to a large number of variables and a huge number of arithmetic operations, allowing small errors to accumulate significantly.
*   **Dealing with near-cancellations:** For example, calculating the difference between two very close numbers. In heat transfer, this could happen when calculating heat flux at boundaries where the temperature gradient is very small, or when using schemes like $1-\cos(\Delta x)$ for small $\Delta x$ as discussed earlier, especially with single-precision floating-point numbers.
*   **Iterative methods that converge slowly:** If an iterative method requires a very large number of iterations, round-off errors from each iteration can add up.

**Answer 5:**
The primary criterion for the convergence of iterative methods for solving linear systems is that the **spectral radius ($\rho$) of the iteration matrix must be less than 1 ($\rho < 1$)**. This is a theoretical condition. In practice, convergence is monitored by observing when the change in the solution between successive iterations falls below a predefined tolerance (absolute or relative error).

---

### 8. Alignment with Course Outcomes

*   **CO1 (K2):** While not directly about governing equations, understanding error sources is essential for interpreting the results of numerical solutions derived from these equations.
*   **CO2 (K2):** This topic is foundational for converting PDEs into a form solvable by numerical methods (like FDM). Understanding truncation error is directly tied to the finite difference approximations of derivatives in PDEs.
*   **CO3 (K1):** This entire topic is dedicated to understanding the errors introduced by FDM.
*   **CO4 (K2):** Convergence of iteration is a key aspect of solving the systems of linear algebraic equations that arise from discretization using FDM.
*   **CO5 (K3):** When solving conduction problems, the accuracy and convergence of the numerical method (which are discussed here) directly impact the ability to correctly predict temperature distributions.

---

### 9. Key Takeaways and Important Points to Remember

*   **Approximation is Key:** Numerical methods transform continuous problems into discrete ones, requiring approximations that introduce errors.
*   **Truncation Error:** Arises from approximating derivatives with finite differences (truncated Taylor series). It is reduced by decreasing the grid size ($\Delta x$) or using higher-order schemes.
*   **Round-off Error:** Arises from the finite precision of computer arithmetic. It can accumulate, especially with many operations or fine grids.
*   **Total Error:** A combination of truncation and round-off error. There's an optimal $\Delta x$ to minimize it.
*   **Convergence:** Iterative methods must converge to a stable solution. This is guaranteed theoretically by the spectral radius of the iteration matrix being less than 1.
*   **Practical Convergence:** Monitored by checking the change between successive iterations against a tolerance.
*   **Balanced Approach:** Choose grid sizes and numerical schemes that balance the need to reduce truncation error with the limitations imposed by round-off error and computational cost.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
