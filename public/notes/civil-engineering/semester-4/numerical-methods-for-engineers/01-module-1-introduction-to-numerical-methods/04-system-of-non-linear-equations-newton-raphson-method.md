---
title: "System of non-linear equations – Newton-Raphson method."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 1: Introduction to numerical methods "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b3d"
status: "completed"
scrapedAt: "2026-05-20T18:46:46.872Z"
---
# NUMERICAL METHODS FOR ENGINEERS

## Module 1: Introduction to Numerical Methods

### Topic: System of Non-Linear Equations – Newton-Raphson Method

---

This module introduces the fundamental concepts of numerical methods, focusing on solving systems of non-linear equations. We will delve into the widely used Newton-Raphson method, understanding its principles, derivation, implementation, and limitations.

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the nature of systems of non-linear equations and their challenges in analytical solutions.
*   Derive the Newton-Raphson method for solving a single non-linear equation.
*   Extend the Newton-Raphson method to solve systems of non-linear equations.
*   Apply the Newton-Raphson method to solve practical engineering problems.
*   Recognize the conditions for convergence and potential pitfalls of the Newton-Raphson method.
*   Analyze the advantages and disadvantages of the Newton-Raphson method compared to other iterative techniques.

---

### 2. Key Concepts and Definitions

#### 2.1 Systems of Non-Linear Equations

*   **Definition:** A system of non-linear equations is a set of equations where at least one equation is not linear. This means the variables are not raised to the power of 1 and are not simply multiplied by constants.
*   **General Form:** For $n$ equations with $n$ variables, a system of non-linear equations can be represented as:
    $f_1(x_1, x_2, \dots, x_n) = 0$
    $f_2(x_1, x_2, \dots, x_n) = 0$
    $\vdots$
    $f_n(x_1, x_2, \dots, x_n) = 0$
*   **Challenges:** Unlike linear systems, analytical solutions (finding exact closed-form expressions for the variables) for non-linear systems are often difficult or impossible to obtain. This necessitates the use of numerical methods.

#### 2.2 The Newton-Raphson Method (for a single non-linear equation)

*   **Purpose:** To find the roots (solutions) of a single non-linear equation of the form $f(x) = 0$.
*   **Core Idea:** The method iteratively approximates the root by using the tangent line to the function at the current guess.
*   **Derivation (Taylor Series Expansion):**
    Consider a Taylor series expansion of $f(x)$ around a guess $x_k$:
    $f(x_{k+1}) \approx f(x_k) + f'(x_k)(x_{k+1} - x_k)$
    We want to find the next approximation $x_{k+1}$ such that $f(x_{k+1}) = 0$. So, setting the right-hand side to zero:
    $0 \approx f(x_k) + f'(x_k)(x_{k+1} - x_k)$
    Rearranging to solve for $x_{k+1}$:
    $f'(x_k)(x_{k+1} - x_k) \approx -f(x_k)$
    $x_{k+1} - x_k \approx -\frac{f(x_k)}{f'(x_k)}$
    $x_{k+1} \approx x_k - \frac{f(x_k)}{f'(x_k)}$
*   **Iterative Formula:**
    $x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}$
    where:
    *   $x_k$: The current approximation of the root.
    *   $x_{k+1}$: The next (improved) approximation of the root.
    *   $f(x_k)$: The value of the function at $x_k$.
    *   $f'(x_k)$: The value of the derivative of the function at $x_k$.
*   **Convergence:** The method converges quadratically, meaning the number of correct significant digits roughly doubles with each iteration, provided the initial guess is sufficiently close to the root and the derivative is non-zero at the root.

#### 2.3 The Newton-Raphson Method (for systems of non-linear equations)

*   **Extension:** The single-variable method can be generalized to systems of $n$ non-linear equations with $n$ variables.
*   **Vector Notation:**
    Let $\mathbf{x} = [x_1, x_2, \dots, x_n]^T$ be the vector of variables.
    Let $\mathbf{F}(\mathbf{x}) = [f_1(\mathbf{x}), f_2(\mathbf{x}), \dots, f_n(\mathbf{x})]^T$ be the vector of functions, where each $f_i$ is a function of all variables.
    We want to solve $\mathbf{F}(\mathbf{x}) = \mathbf{0}$.
*   **Jacobian Matrix:**
    The generalization involves the Jacobian matrix, which is the matrix of first-order partial derivatives of the vector function $\mathbf{F}$ with respect to the vector of variables $\mathbf{x}$.
    $J(\mathbf{x}) = \begin{bmatrix}
    \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \dots & \frac{\partial f_1}{\partial x_n} \\
    \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \dots & \frac{\partial f_2}{\partial x_n} \\
    \vdots & \vdots & \ddots & \vdots \\
    \frac{\partial f_n}{\partial x_1} & \frac{\partial f_n}{\partial x_2} & \dots & \frac{\partial f_n}{\partial x_n}
    \end{bmatrix}$
*   **Derivation (Multivariable Taylor Series Expansion):**
    Consider a Taylor series expansion of $\mathbf{F}(\mathbf{x})$ around a guess $\mathbf{x}_k$:
    $\mathbf{F}(\mathbf{x}_{k+1}) \approx \mathbf{F}(\mathbf{x}_k) + J(\mathbf{x}_k)(\mathbf{x}_{k+1} - \mathbf{x}_k)$
    We want to find $\mathbf{x}_{k+1}$ such that $\mathbf{F}(\mathbf{x}_{k+1}) = \mathbf{0}$.
    $0 \approx \mathbf{F}(\mathbf{x}_k) + J(\mathbf{x}_k)(\mathbf{x}_{k+1} - \mathbf{x}_k)$
    Rearranging to solve for $\mathbf{x}_{k+1}$:
    $J(\mathbf{x}_k)(\mathbf{x}_{k+1} - \mathbf{x}_k) \approx -\mathbf{F}(\mathbf{x}_k)$
    To solve for the increment $(\mathbf{x}_{k+1} - \mathbf{x}_k)$, we multiply by the inverse of the Jacobian matrix (if it exists):
    $\mathbf{x}_{k+1} - \mathbf{x}_k \approx -[J(\mathbf{x}_k)]^{-1}\mathbf{F}(\mathbf{x}_k)$
    $\mathbf{x}_{k+1} \approx \mathbf{x}_k - [J(\mathbf{x}_k)]^{-1}\mathbf{F}(\mathbf{x}_k)$
*   **Iterative Formula for Systems:**
    $\mathbf{x}_{k+1} = \mathbf{x}_k - [J(\mathbf{x}_k)]^{-1}\mathbf{F}(\mathbf{x}_k)$
    Alternatively, and often computationally preferred to avoid explicit matrix inversion:
    $J(\mathbf{x}_k) (\mathbf{x}_{k+1} - \mathbf{x}_k) = -\mathbf{F}(\mathbf{x}_k)$
    This is a linear system that needs to be solved for the increment vector $(\mathbf{x}_{k+1} - \mathbf{x}_k)$ at each iteration.
*   **Requirements:**
    1.  An initial guess for the solution vector $\mathbf{x}_0$.
    2.  The ability to compute the functions $f_i(\mathbf{x})$ for all $i$.
    3.  The ability to compute the partial derivatives and form the Jacobian matrix $J(\mathbf{x})$.
    4.  The Jacobian matrix must be non-singular (invertible) at each iteration.

---

### 3. Examples

#### 3.1 Example: Newton-Raphson for a Single Equation

**Problem:** Find a root of the equation $f(x) = x^2 - 2 = 0$ using the Newton-Raphson method, starting with an initial guess $x_0 = 1$.

**Solution:**
1.  **Identify the function and its derivative:**
    $f(x) = x^2 - 2$
    $f'(x) = 2x$

2.  **Apply the iterative formula:** $x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}$
    $x_{k+1} = x_k - \frac{x_k^2 - 2}{2x_k}$

3.  **Perform iterations:**
    *   **Iteration 0:** $x_0 = 1$
        $f(x_0) = 1^2 - 2 = -1$
        $f'(x_0) = 2(1) = 2$
        $x_1 = 1 - \frac{-1}{2} = 1 + 0.5 = 1.5$

    *   **Iteration 1:** $x_1 = 1.5$
        $f(x_1) = (1.5)^2 - 2 = 2.25 - 2 = 0.25$
        $f'(x_1) = 2(1.5) = 3$
        $x_2 = 1.5 - \frac{0.25}{3} = 1.5 - 0.08333 \approx 1.41667$

    *   **Iteration 2:** $x_2 \approx 1.41667$
        $f(x_2) \approx (1.41667)^2 - 2 \approx 2.00694 - 2 = 0.00694$
        $f'(x_2) \approx 2(1.41667) \approx 2.83334$
        $x_3 \approx 1.41667 - \frac{0.00694}{2.83334} \approx 1.41667 - 0.00245 \approx 1.41422$

The root is $\sqrt{2} \approx 1.41421356...$. The method is converging quickly.

#### 3.2 Example: Newton-Raphson for a System of Equations

**Problem:** Find a solution to the following system of non-linear equations using the Newton-Raphson method, starting with $\mathbf{x}_0 = [1, 1]^T$:

$f_1(x_1, x_2) = x_1^2 + x_2^2 - 4 = 0$
$f_2(x_1, x_2) = x_1 - x_2^2 = 0$

**Solution:**
1.  **Define the vector of functions:**
    $\mathbf{F}(\mathbf{x}) = \begin{bmatrix} x_1^2 + x_2^2 - 4 \\ x_1 - x_2^2 \end{bmatrix}$

2.  **Compute the partial derivatives and form the Jacobian matrix:**
    $\frac{\partial f_1}{\partial x_1} = 2x_1$
    $\frac{\partial f_1}{\partial x_2} = 2x_2$
    $\frac{\partial f_2}{\partial x_1} = 1$
    $\frac{\partial f_2}{\partial x_2} = -2x_2$

    $J(\mathbf{x}) = \begin{bmatrix} 2x_1 & 2x_2 \\ 1 & -2x_2 \end{bmatrix}$

3.  **Apply the iterative formula:** $\mathbf{x}_{k+1} = \mathbf{x}_k - [J(\mathbf{x}_k)]^{-1}\mathbf{F}(\mathbf{x}_k)$
    We need to calculate $\mathbf{F}(\mathbf{x}_k)$ and $J(\mathbf{x}_k)$ at each iteration and solve the linear system $J(\mathbf{x}_k) \Delta\mathbf{x}_k = -\mathbf{F}(\mathbf{x}_k)$, where $\Delta\mathbf{x}_k = \mathbf{x}_{k+1} - \mathbf{x}_k$.

4.  **Perform iterations:**
    *   **Iteration 0:** $\mathbf{x}_0 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$
        $\mathbf{F}(\mathbf{x}_0) = \begin{bmatrix} 1^2 + 1^2 - 4 \\ 1 - 1^2 \end{bmatrix} = \begin{bmatrix} -2 \\ 0 \end{bmatrix}$
        $J(\mathbf{x}_0) = \begin{bmatrix} 2(1) & 2(1) \\ 1 & -2(1) \end{bmatrix} = \begin{bmatrix} 2 & 2 \\ 1 & -2 \end{bmatrix}$

        Now, solve the linear system $J(\mathbf{x}_0) \Delta\mathbf{x}_0 = -\mathbf{F}(\mathbf{x}_0)$:
        $\begin{bmatrix} 2 & 2 \\ 1 & -2 \end{bmatrix} \begin{bmatrix} \Delta x_1 \\ \Delta x_2 \end{bmatrix} = -\begin{bmatrix} -2 \\ 0 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \end{bmatrix}$

        From the second row: $1 \cdot \Delta x_1 - 2 \cdot \Delta x_2 = 0 \implies \Delta x_1 = 2 \Delta x_2$.
        Substitute into the first row: $2 \cdot (2 \Delta x_2) + 2 \Delta x_2 = 2$
        $4 \Delta x_2 + 2 \Delta x_2 = 2$
        $6 \Delta x_2 = 2 \implies \Delta x_2 = 1/3$
        $\Delta x_1 = 2 \cdot (1/3) = 2/3$

        So, $\Delta\mathbf{x}_0 = \begin{bmatrix} 2/3 \\ 1/3 \end{bmatrix}$.

        Update the solution: $\mathbf{x}_1 = \mathbf{x}_0 + \Delta\mathbf{x}_0 = \begin{bmatrix} 1 \\ 1 \end{bmatrix} + \begin{bmatrix} 2/3 \\ 1/3 \end{bmatrix} = \begin{bmatrix} 5/3 \\ 4/3 \end{bmatrix} \approx \begin{bmatrix} 1.66667 \\ 1.33333 \end{bmatrix}$

    *   **Iteration 1:** $\mathbf{x}_1 = \begin{bmatrix} 5/3 \\ 4/3 \end{bmatrix}$
        $\mathbf{F}(\mathbf{x}_1) = \begin{bmatrix} (5/3)^2 + (4/3)^2 - 4 \\ (5/3) - (4/3)^2 \end{bmatrix} = \begin{bmatrix} 25/9 + 16/9 - 36/9 \\ 5/3 - 16/9 \end{bmatrix} = \begin{bmatrix} 5/9 \\ 15/9 - 16/9 \end{bmatrix} = \begin{bmatrix} 5/9 \\ -1/9 \end{bmatrix}$
        $J(\mathbf{x}_1) = \begin{bmatrix} 2(5/3) & 2(4/3) \\ 1 & -2(4/3) \end{bmatrix} = \begin{bmatrix} 10/3 & 8/3 \\ 1 & -8/3 \end{bmatrix}$

        Solve $J(\mathbf{x}_1) \Delta\mathbf{x}_1 = -\mathbf{F}(\mathbf{x}_1)$:
        $\begin{bmatrix} 10/3 & 8/3 \\ 1 & -8/3 \end{bmatrix} \begin{bmatrix} \Delta x_1 \\ \Delta x_2 \end{bmatrix} = -\begin{bmatrix} 5/9 \\ -1/9 \end{bmatrix} = \begin{bmatrix} -5/9 \\ 1/9 \end{bmatrix}$

        From the second row: $\Delta x_1 - (8/3) \Delta x_2 = 1/9 \implies \Delta x_1 = 1/9 + (8/3) \Delta x_2$.
        Substitute into the first row: $(10/3) (1/9 + (8/3) \Delta x_2) + (8/3) \Delta x_2 = -5/9$
        $10/27 + (80/9) \Delta x_2 + (8/3) \Delta x_2 = -5/9$
        Multiply by 27: $10 + 240 \Delta x_2 + 72 \Delta x_2 = -15$
        $312 \Delta x_2 = -25 \implies \Delta x_2 = -25/312$

        $\Delta x_1 = 1/9 + (8/3) (-25/312) = 1/9 - 200/936 = 104/936 - 200/936 = -96/936 = -4/39$

        So, $\Delta\mathbf{x}_1 = \begin{bmatrix} -4/39 \\ -25/312 \end{bmatrix}$.

        Update the solution: $\mathbf{x}_2 = \mathbf{x}_1 + \Delta\mathbf{x}_1 = \begin{bmatrix} 5/3 \\ 4/3 \end{bmatrix} + \begin{bmatrix} -4/39 \\ -25/312 \end{bmatrix} = \begin{bmatrix} 65/39 - 4/39 \\ 104/312 - 25/312 \end{bmatrix} = \begin{bmatrix} 61/39 \\ 79/312 \end{bmatrix} \approx \begin{bmatrix} 1.5641 \\ 0.2532 \end{bmatrix}$

The exact solution for this system is approximately $[1.618, 1.272]$ (related to the golden ratio). The second iteration is already showing improvement.

---

### 4. Convergence Conditions and Potential Pitfalls

#### 4.1 Conditions for Convergence

*   **Initial Guess:** The Newton-Raphson method is highly sensitive to the initial guess. A good initial guess, sufficiently close to the actual root, is crucial for convergence.
*   **Function and Derivative Behavior:**
    *   The function $f(x)$ (or $\mathbf{F}(\mathbf{x})$ for systems) should be continuous and have continuous derivatives in the neighborhood of the root.
    *   The derivative $f'(x)$ (or the Jacobian $J(\mathbf{x})$ for systems) must be non-zero at the root. If the derivative is zero, the tangent is horizontal (or the Jacobian is singular), and the method fails.
*   **Second Derivative:** For single equations, if $|f''(x)|$ is large near the root, convergence might be slower or problematic.

#### 4.2 Potential Pitfalls (When the Method Fails)

*   **Division by Zero:** If $f'(x_k) = 0$ (or $J(\mathbf{x}_k)$ is singular), the method fails. This occurs when the tangent is horizontal or the Jacobian is not invertible.
*   **Oscillation:** The iterates might oscillate around the root without converging.
*   **Divergence:** The iterates may move further away from the root, especially with poor initial guesses. This can happen if the initial guess is too far from the root, or if the function has local extrema or inflection points near the guess.
*   **Cycling:** The sequence of iterates might enter a cycle, never reaching the root.
*   **Convergence to an Unwanted Root:** If there are multiple roots, the method may converge to a root different from the one intended, depending on the initial guess.
*   **Computational Cost:** Calculating the Jacobian matrix and solving the linear system at each iteration can be computationally expensive, especially for large systems.

---

### 5. Advantages and Disadvantages

#### 5.1 Advantages

*   **Fast Convergence:** Quadratic convergence makes it very efficient when it converges.
*   **Relatively Simple Concept:** The idea of using tangents is intuitive.
*   **No Direct Formula Needed (for systems):** Unlike some direct methods, it doesn't require finding a closed-form solution.

#### 5.2 Disadvantages

*   **Requires Derivative Information:** Need to compute the derivative of the function(s), which may not always be easy.
*   **Sensitivity to Initial Guess:** A poor initial guess can lead to divergence or convergence to the wrong root.
*   **Can Fail if Derivative is Zero:** Division by zero is a common failure mode.
*   **Computational Cost for Systems:** Computing and inverting (or solving with) the Jacobian can be expensive.

---

### 6. Practice Questions/Exercises

**Question 1:**
Find a root of the equation $f(x) = \sin(x) - x/2 = 0$ using the Newton-Raphson method. Start with an initial guess $x_0 = 2$. Perform three iterations.

**Question 2:**
Consider the system of non-linear equations:
$f_1(x, y) = x^2 + y^2 - 1 = 0$
$f_2(x, y) = e^x - y = 0$
Find a solution using the Newton-Raphson method.
a) Write down the Jacobian matrix for this system.
b) Start with an initial guess $\mathbf{x}_0 = [0, 2]^T$. Perform one iteration to find $\mathbf{x}_1$.

**Question 3:**
Explain the concept of quadratic convergence in the context of the Newton-Raphson method. Why is it considered "quadratic"?

**Question 4:**
What happens if, during an iteration of the Newton-Raphson method for a system of equations, the Jacobian matrix is singular?

---

### 7. Answers to Practice Questions

**Answer 1:**
$f(x) = \sin(x) - x/2$
$f'(x) = \cos(x) - 1/2$

Iterative formula: $x_{k+1} = x_k - \frac{\sin(x_k) - x_k/2}{\cos(x_k) - 1/2}$

*   **Iteration 0:** $x_0 = 2$
    $f(2) = \sin(2) - 2/2 = 0.909297 - 1 = -0.090703$
    $f'(2) = \cos(2) - 1/2 = -0.416147 - 0.5 = -0.916147$
    $x_1 = 2 - \frac{-0.090703}{-0.916147} \approx 2 - 0.099004 \approx 1.900996$

*   **Iteration 1:** $x_1 \approx 1.900996$
    $f(1.900996) = \sin(1.900996) - 1.900996/2 = 0.946044 - 0.950498 \approx -0.004454$
    $f'(1.900996) = \cos(1.900996) - 0.5 = -0.324026 - 0.5 = -0.824026$
    $x_2 = 1.900996 - \frac{-0.004454}{-0.824026} \approx 1.900996 - 0.005405 \approx 1.895591$

*   **Iteration 2:** $x_2 \approx 1.895591$
    $f(1.895591) = \sin(1.895591) - 1.895591/2 = 0.947893 - 0.9477955 \approx 0.0000975$
    $f'(1.895591) = \cos(1.895591) - 0.5 = -0.318403 - 0.5 = -0.818403$
    $x_3 = 1.895591 - \frac{0.0000975}{-0.818403} \approx 1.895591 + 0.000119 \approx 1.895710$

Approximate root after three iterations: $x_3 \approx 1.895710$.

**Answer 2:**
$f_1(x, y) = x^2 + y^2 - 1$
$f_2(x, y) = e^x - y$

a) Jacobian Matrix:
$\frac{\partial f_1}{\partial x} = 2x$
$\frac{\partial f_1}{\partial y} = 2y$
$\frac{\partial f_2}{\partial x} = e^x$
$\frac{\partial f_2}{\partial y} = -1$

$J(x, y) = \begin{bmatrix} 2x & 2y \\ e^x & -1 \end{bmatrix}$

b) $\mathbf{x}_0 = [0, 2]^T$
$\mathbf{F}(\mathbf{x}_0) = \begin{bmatrix} 0^2 + 2^2 - 1 \\ e^0 - 2 \end{bmatrix} = \begin{bmatrix} 3 \\ 1 - 2 \end{bmatrix} = \begin{bmatrix} 3 \\ -1 \end{bmatrix}$
$J(\mathbf{x}_0) = \begin{bmatrix} 2(0) & 2(2) \\ e^0 & -1 \end{bmatrix} = \begin{bmatrix} 0 & 4 \\ 1 & -1 \end{bmatrix}$

Solve $J(\mathbf{x}_0) \Delta\mathbf{x}_0 = -\mathbf{F}(\mathbf{x}_0)$:
$\begin{bmatrix} 0 & 4 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} \Delta x \\ \Delta y \end{bmatrix} = -\begin{bmatrix} 3 \\ -1 \end{bmatrix} = \begin{bmatrix} -3 \\ 1 \end{bmatrix}$

From the first row: $0 \cdot \Delta x + 4 \cdot \Delta y = -3 \implies \Delta y = -3/4$.
From the second row: $1 \cdot \Delta x - 1 \cdot \Delta y = 1 \implies \Delta x - (-3/4) = 1 \implies \Delta x + 3/4 = 1 \implies \Delta x = 1/4$.

So, $\Delta\mathbf{x}_0 = \begin{bmatrix} 1/4 \\ -3/4 \end{bmatrix}$.

$\mathbf{x}_1 = \mathbf{x}_0 + \Delta\mathbf{x}_0 = \begin{bmatrix} 0 \\ 2 \end{bmatrix} + \begin{bmatrix} 1/4 \\ -3/4 \end{bmatrix} = \begin{bmatrix} 1/4 \\ 5/4 \end{bmatrix} = \begin{bmatrix} 0.25 \\ 1.25 \end{bmatrix}$

**Answer 3:**
Quadratic convergence means that the error in each iteration is approximately proportional to the square of the error in the previous iteration. If $\epsilon_k = x_k - x^*$ is the error at iteration $k$ (where $x^*$ is the true root), then for quadratic convergence, $\epsilon_{k+1} \approx C \epsilon_k^2$ for some constant $C$. This leads to a rapid reduction in the error, where the number of correct significant digits roughly doubles with each iteration. This rapid convergence is due to the use of the tangent line (or Jacobian for systems) which provides a very good local approximation of the function.

**Answer 4:**
If the Jacobian matrix $J(\mathbf{x}_k)$ is singular at an iteration $k$, it means the matrix does not have an inverse. In the context of the Newton-Raphson method, this implies that the linear system $J(\mathbf{x}_k) \Delta\mathbf{x}_k = -\mathbf{F}(\mathbf{x}_k)$ either has no solution or infinitely many solutions. Geometrically, for systems of equations, a singular Jacobian indicates that the tangent hyperplane (or a related geometric object) is parallel to the subspace defined by the target value (zero vector), or that the local mapping is degenerate. In practice, this means the Newton-Raphson step cannot be uniquely determined, and the method fails at that iteration.

---

### 8. Important Points to Remember

*   The Newton-Raphson method is an **iterative** technique.
*   It requires an **initial guess**. The quality of the guess significantly impacts convergence.
*   For a single equation, it requires the **first derivative**. For systems, it requires the **Jacobian matrix** (matrix of first-order partial derivatives).
*   The method converges **quadratically** under favorable conditions, making it very fast.
*   Key failure modes include **division by zero** (or singular Jacobian) and **divergence** due to poor initial guesses or problematic function behavior.
*   For systems, solving the linear system $J(\mathbf{x}_k) \Delta\mathbf{x}_k = -\mathbf{F}(\mathbf{x}_k)$ is often preferred over explicit matrix inversion.
*   Always check for convergence by examining the magnitude of the change in the solution vector ($\|\mathbf{x}_{k+1} - \mathbf{x}_k\|$) or the function value ($\|\mathbf{F}(\mathbf{x}_{k+1})\|$) against a predefined tolerance.

---
