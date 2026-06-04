---
title: "point-by-point and line-by-line method of solution"
subject: "COMPUTATIONAL FLUID DYNAMICS"
module: "Module 3: Introduction to finite volume method."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446343c"
status: "completed"
scrapedAt: "2026-05-20T17:58:19.539Z"
---
# Module 3: Introduction to Finite Volume Method

## Topic: Point-by-Point and Line-by-Line Methods of Solution

This module introduces the Finite Volume Method (FVM) and specifically focuses on two common iterative solution techniques for the discretized equations: the Point-by-Point (or Jacobi/Gauss-Seidel) method and the Line-by-Line (or ADI-like) method. These methods are crucial for solving the systems of algebraic equations that arise from the FVM discretization of fluid flow and heat transfer problems.

---

### 1. Recap of Finite Volume Method (FVM) Basics

Before diving into solution techniques, let's briefly recap the core principles of FVM as covered in previous sections (assuming prior knowledge from earlier in Module 3).

*   **Control Volume:** The domain is divided into discrete control volumes (CVs).
*   **Integration:** Governing equations are integrated over each CV.
*   **Flux Balance:** The conservation of a physical quantity (mass, momentum, energy) is expressed as a balance between fluxes across the CV faces and source terms within the CV.
*   **Discretization:** Values are typically assumed to be constant or vary in a prescribed manner within a CV, and fluxes across faces are approximated using these values. This leads to a system of algebraic equations.

**Important:** The FVM typically results in a sparse, banded system of linear algebraic equations of the form:
$A \phi = b$
where $\phi$ is the vector of unknown nodal values, $A$ is the coefficient matrix, and $b$ is the source/boundary condition vector.

---

### 2. Solution Techniques for Algebraic Systems

The solution of the algebraic system $A \phi = b$ is a critical step in CFD. For large systems, direct solvers are often computationally prohibitive. Therefore, iterative methods are widely used. We will explore two classes of iterative methods:

#### 2.1. Point-by-Point Methods (Iterative Methods)

These methods update the value of a single unknown at a time, based on the values of other unknowns from the current or previous iteration.

**Key Idea:** Rearrange the algebraic equation for a specific unknown $\phi_p$ to express it in terms of other unknowns.

Consider a generic algebraic equation for an interior node $p$:

$a_p \phi_p = \sum_{nb} a_{nb} \phi_{nb} + b_p$

where:
*   $a_p$ is the coefficient of the unknown $\phi_p$.
*   $a_{nb}$ are the coefficients of the neighboring unknowns $\phi_{nb}$.
*   $b_p$ is the source/boundary term.
*   $\sum_{nb}$ denotes summation over all neighboring nodes.

**Rearrangement:**

$\phi_p = \frac{1}{a_p} \left( \sum_{nb} a_{nb} \phi_{nb} + b_p \right)$

This equation forms the basis for iterative updates.

##### 2.1.1. Jacobi Method (Simultaneous Displacement)

*   **Principle:** All unknowns are updated simultaneously using values from the *previous* iteration.
*   **Update Formula:**
    $\phi_p^{(k+1)} = \frac{1}{a_p} \left( \sum_{nb} a_{nb} \phi_{nb}^{(k)} + b_p \right)$
    where the superscript $(k)$ denotes the iteration number.
*   **Process:**
    1.  Initialize all $\phi$ values (e.g., to zero or a guess).
    2.  For each node $p$, calculate $\phi_p^{(k+1)}$ using the $\phi_{nb}^{(k)}$ values from all neighbors.
    3.  Once all $\phi_p^{(k+1)}$ are computed, the iteration count is incremented.
    4.  Repeat until convergence is achieved (e.g., the change in $\phi$ between iterations is below a certain tolerance).
*   **Advantages:** Simple to implement, conceptually straightforward.
*   **Disadvantages:** Can converge slowly, especially for problems with strong coupling or convection. It requires storing values from the previous iteration.

**Example (1D Heat Conduction - Simple):**
Consider a 1D rod discretized into $N$ control volumes. The discretized equation for an interior node $p$ might look like:
$a_p \phi_p = a_{E} \phi_{E} + a_{W} \phi_{W} + b_p$
Jacobi iteration:
$\phi_p^{(k+1)} = \frac{1}{a_p} (a_{E} \phi_{E}^{(k)} + a_{W} \phi_{W}^{(k)} + b_p)$

##### 2.1.2. Gauss-Seidel Method (Successive Displacement)

*   **Principle:** Updates are made sequentially, and the most recently computed values are used immediately.
*   **Update Formula:**
    $\phi_p^{(k+1)} = \frac{1}{a_p} \left( \sum_{nb \text{ already updated in iter } k+1} a_{nb} \phi_{nb}^{(k+1)} + \sum_{nb \text{ not yet updated in iter } k+1} a_{nb} \phi_{nb}^{(k)} + b_p \right)$
*   **Process:**
    1.  Initialize all $\phi$ values.
    2.  Iterate through the nodes (e.g., from left to right, top to bottom).
    3.  When updating $\phi_p$, use the latest available values for its neighbors. If a neighbor has already been updated in the current iteration $(k+1)$, use its $\phi^{(k+1)}$ value. Otherwise, use its value from the previous iteration $\phi^{(k)}$.
    4.  Repeat the sweep through all nodes until convergence.
*   **Advantages:** Generally converges faster than Jacobi because it uses updated information sooner.
*   **Disadvantages:** Can be slightly more complex to implement due to the dependency on the order of updates.

**Example (1D Heat Conduction - Simple):**
For a sweep from left to right:
$\phi_p^{(k+1)} = \frac{1}{a_p} (a_{E} \phi_{E}^{(k)} + a_{W} \phi_{W}^{(k+1)} + b_p)$
(Here, $\phi_W$ is already updated in the current iteration $k+1$, while $\phi_E$ is from the previous iteration $k$).

**Convergence Criteria:**
Both Jacobi and Gauss-Seidel require a stopping criterion. Common criteria include:
*   **Maximum Iterations:** Stop after a predefined number of iterations.
*   **Residual Norm:** Monitor the sum of absolute differences between the left-hand side and right-hand side of the discretized equations for all nodes:
    $R^{(k)} = \sum_p | a_p \phi_p^{(k)} - (\sum_{nb} a_{nb} \phi_{nb}^{(k)} + b_p) |$
    Stop when $R^{(k)}$ is below a tolerance.
*   **Change in Solution:** Monitor the maximum absolute change of any $\phi_p$ between iterations:
    $\Delta \phi_{\text{max}}^{(k)} = \max_p | \phi_p^{(k+1)} - \phi_p^{(k)} |$
    Stop when $\Delta \phi_{\text{max}}^{(k)}$ is below a tolerance.

**Relevance to Textbooks:**
*   **Anderson Jr. (2012):** Discusses iterative methods for solving linear systems arising from finite difference and finite volume discretizations in Chapter 5. Explains the concept of relaxation to improve convergence.
*   **Patankar (2017):** Emphasizes the importance of iterative solution techniques in Chapter 7 for handling coupled equations in fluid mechanics. Introduces concepts like the TDMA (Tridiagonal Matrix Algorithm) and its role in more advanced line-based solvers.
*   **Versteeg & Malalasekera (2008):** Covers basic iterative methods like Jacobi and Gauss-Seidel in Chapter 8 as precursors to more efficient techniques like TDMA and iterative TDMA (SIMPLE algorithm).

#### 2.2. Line-by-Line Methods

These methods solve for a group of unknowns that lie on a line (or curve) simultaneously. This is particularly effective for problems where the discretization is structured, such as in 2D and 3D problems. The most common line-by-line method is based on the Tridiagonal Matrix Algorithm (TDMA).

**Key Idea:** Group unknowns along a specific direction (e.g., a row or column in a 2D grid) and solve the system of equations along that line.

##### 2.2.1. Tridiagonal Matrix Algorithm (TDMA) - Thomas Algorithm

*   **Principle:** When discretizing a problem in one dimension, the resulting system of equations for the unknown values along that dimension is tridiagonal. The TDMA is an efficient direct method for solving such systems.
*   **Application in FVM:** For 2D or 3D problems, we can apply TDMA in a sweeping manner. For example, in a 2D problem, we can fix one coordinate (say, $y$) and solve for all unknowns along lines of constant $y$ (i.e., along the $x$-direction).
*   **The Problem:** Consider solving for $\phi$ along a line of nodes. The discretized equations for these nodes will involve $\phi$ values to their immediate left, right, and themselves. This often results in a tridiagonal system.
    For a set of nodes $1, 2, ..., N$ along a line:
    $c_1 \phi_1 = d_1 \phi_2 + b_1$
    $c_i \phi_i = e_i \phi_{i+1} + d_i \phi_{i-1} + b_i$ for $i = 2, ..., N-1$
    $c_N \phi_N = d_N \phi_{N-1} + b_N$
*   **TDMA Transformation:** The goal is to transform this system into a form where $\phi_i$ can be directly related to $\phi_{i-1}$:
    $\phi_i = \alpha_i \phi_{i+1} + \beta_i$
    This is achieved through a two-pass process:
    1.  **Forward Elimination:** Calculate $\alpha_i$ and $\beta_i$ from $i=1$ to $N$.
        $\alpha_1 = \frac{e_1}{c_1}$
        $\beta_1 = \frac{b_1}{c_1}$
        For $i = 2, ..., N-1$:
        $\alpha_i = \frac{e_i}{c_i - d_i \alpha_{i-1}}$
        $\beta_i = \frac{b_i - d_i \beta_{i-1}}{c_i - d_i \alpha_{i-1}}$
        (Boundary condition at $N$ is used to determine $c_N, d_N, b_N$).
    2.  **Backward Substitution:** Calculate $\phi_i$ starting from $N$ down to 1.
        $\phi_N = \beta_N$ (assuming appropriate boundary condition at $N$ leads to this form, or calculated using the transformed equation with $\phi_{N+1}$)
        For $i = N-1, ..., 1$:
        $\phi_i = \alpha_i \phi_{i+1} + \beta_i$
*   **Advantages:** Very efficient for solving tridiagonal systems. When applied iteratively across lines, it often converges much faster than point-by-point methods.
*   **Disadvantages:** Only directly applicable to systems that decompose into tridiagonal forms along a line. Requires structured grids.

##### 2.2.2. Alternating Direction Implicit (ADI) Method - General Concept

While not always strictly "line-by-line" in the TDMA sense, the ADI method is a powerful implicit technique for solving multidimensional problems that involves splitting the problem into implicit sweeps along different directions.

*   **Principle:** In each iteration, the scheme is implicit in one spatial direction and explicit in the others. The roles of the directions are alternated in successive iterations.
*   **Application to 2D:** For a 2D problem, one iteration might be implicit in the x-direction (solving tridiagonal systems along lines parallel to x) and explicit in the y-direction. The next iteration would be implicit in the y-direction and explicit in the x-direction.
*   **How it works:** The discretized equations are rewritten such that all terms involving unknowns in one direction are grouped on one side, forming a tridiagonal or banded system, while terms in other directions are treated as known from the previous iteration or time step.
*   **Advantages:** Can handle implicit schemes efficiently, leading to good stability and convergence for parabolic and elliptic problems.
*   **Disadvantages:** More complex to implement than point-by-point methods. Requires careful formulation to maintain accuracy.

**Relevance to Textbooks:**
*   **Patankar (2017):** This is a key reference for line-by-line solutions. Chapter 7 thoroughly explains the TDMA and its application to solve coupled equations for velocity and pressure. The concept of SIMPLE (Semi-Implicit Method for Pressure Linked Equations) algorithm, which heavily relies on TDMA, is central.
*   **Versteeg & Malalasekera (2008):** Chapter 8 dedicates significant attention to the TDMA and its application in 2D. They discuss how to handle non-tridiagonal systems that arise when coupling exists between different directions (e.g., due to convection) and how to adapt the TDMA (e.g., through iterative sweeps or approximation).

---

### 3. Point-by-Point vs. Line-by-Line Methods

| Feature             | Point-by-Point Methods (Jacobi, Gauss-Seidel)                               | Line-by-Line Methods (TDMA-based)                                                |
| :------------------ | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **Update Strategy** | Updates individual nodal values sequentially or simultaneously.             | Solves for a group of nodal values along a line (or curve) simultaneously.       |
| **Convergence**     | Generally slower, especially for convection-dominated or strongly coupled flows. | Generally faster, exploiting the structure of the discretized equations.         |
| **Implementation**  | Simpler conceptually.                                                       | More complex, especially for 2D/3D and when coupling requires approximations.    |
| **Storage**         | May require storing values from the previous iteration (Jacobi).            | TDMA itself has modest storage requirements, but overall system might need more. |
| **Application**     | Suitable for 1D problems or as a building block for more complex solvers.   | Excellent for 2D and 3D structured grids where tridiagonal systems can be formed. |
| **Example Use**     | Simple diffusion problems, initial guesses for other methods.               | Solving discretized Navier-Stokes equations (e.g., SIMPLE algorithm).           |

**Important Point:** In FVM, the coefficients $a_p$ and $a_{nb}$ are derived from the discretization of fluxes and source terms. The nature of these coefficients (e.g., dominance of diagonal terms vs. off-diagonal terms) strongly influences the convergence rate of iterative solvers. Schemes that accurately handle convection (like Upwind or Hybrid schemes) tend to produce more diagonally dominant matrices, which are favorable for iterative solvers.

---

### 4. Practical Considerations and Extensions

*   **Under-Relaxation:** To improve convergence and stability of point-by-point methods, a relaxation factor ($\omega$) is often used:
    $\phi_p^{(k+1)} = \omega \left( \frac{1}{a_p} \sum_{nb} a_{nb} \phi_{nb}^{(k)} + \frac{b_p}{a_p} \right) + (1 - \omega) \phi_p^{(k)}$
    For convergence, $0 < \omega \le 1$. For stability, $0 < \omega < 2$. Values of $\omega$ between 0.5 and 1 are common. This smooths out oscillations.
*   **Preconditioning:** Techniques to transform the original system into one that is better conditioned for iterative solvers.
*   **Multigrid Methods:** Very advanced techniques that use a hierarchy of grids to accelerate convergence, often achieving near-optimal computational complexity.
*   **Handling Unstructured Grids:** For unstructured grids, line-by-line methods are not directly applicable in their pure TDMA form. Instead, more general iterative methods (like Conjugate Gradient for symmetric systems, or GMRES for non-symmetric systems) or approximate line solvers are used.

**Relevance to Course Outcomes:**
*   **CO4 (Understand solution techniques for convection diffusion equation):** This topic directly addresses how to solve the algebraic systems arising from the discretization of convection-diffusion equations, which are fundamental in fluid flow. Point-by-point and line-by-line methods are key techniques.
*   **CO3 (Demonstrate use of FVM for simple 1D/2D problems):** To actually *use* FVM for 1D/2D problems, one needs a solver. These iterative methods are the practical means to obtain solutions.
*   **CO1 (Understand governing equations):** Understanding the governing equations is necessary to appreciate the structure of the discretized equations that these methods solve.

---

### 5. Practice Questions and Exercises

**Question 1:**
Describe the fundamental difference between the Jacobi and Gauss-Seidel iterative methods for solving a system of linear algebraic equations. What is the primary advantage of Gauss-Seidel over Jacobi?

**Answer 1:**
The Jacobi method updates all unknowns simultaneously using values from the previous iteration. The Gauss-Seidel method updates unknowns sequentially, immediately using the most recently calculated values for neighbors within the same iteration. The primary advantage of Gauss-Seidel is its faster convergence rate, as it incorporates updated information more promptly.

**Question 2:**
A one-dimensional diffusion problem is discretized using FVM, resulting in the following linear system for an interior node $p$:
$10 \phi_p = 3 \phi_{p-1} + 4 \phi_{p+1} + 5$
Write down the update equations for $\phi_p$ using (a) the Jacobi method and (b) the Gauss-Seidel method (assuming a sweep from left to right, so $p-1$ is updated before $p$).

**Answer 2:**
The equation can be rewritten as:
$10 \phi_p - 3 \phi_{p-1} - 4 \phi_{p+1} = 5$

(a) Jacobi Method:
$\phi_p^{(k+1)} = \frac{1}{10} (3 \phi_{p-1}^{(k)} + 4 \phi_{p+1}^{(k)} + 5)$

(b) Gauss-Seidel Method (sweep left to right):
When calculating $\phi_p^{(k+1)}$, $\phi_{p-1}$ would have already been updated in the current iteration. $\phi_{p+1}$ is from the previous iteration.
$\phi_p^{(k+1)} = \frac{1}{10} (3 \phi_{p-1}^{(k+1)} + 4 \phi_{p+1}^{(k)} + 5)$

**Question 3:**
Explain the concept of a tridiagonal system of equations and how the Tridiagonal Matrix Algorithm (TDMA) works to solve it efficiently. Why is TDMA particularly useful in 2D FVM problems?

**Answer 3:**
A tridiagonal system of equations is a system where each equation only involves three variables: the variable at the current node and its immediate neighbors. This typically arises from discretizing 1D problems or one-dimensional sweeps of multi-dimensional problems. The TDMA is a two-pass algorithm (forward elimination and backward substitution) that efficiently solves such systems by transforming them into a sequential update form.

In 2D FVM problems on structured grids, we can group unknowns along lines (e.g., rows or columns). The discretization of fluxes across faces along these lines often leads to a tridiagonal system for the unknowns on that line. By applying TDMA along each line and iterating across the other direction, we can efficiently solve the full 2D problem.

**Question 4:**
For a diffusion-dominated 2D problem, which method would you generally expect to converge faster: Jacobi or line-by-line using TDMA? Briefly justify your answer.

**Answer 4:**
Line-by-line using TDMA would generally be expected to converge faster. This is because the TDMA efficiently solves a coupled set of equations along a line, capturing the dependencies more effectively than point-by-point methods, which update each point in isolation or with only immediately available information. For diffusion-dominated problems, the matrix is typically diagonally dominant, but the line-by-line approach leverages the full band structure for better performance.

**Question 5 (Application to FVM):**
Consider a 1D FVM discretization of the steady-state convection-diffusion equation:
$-\frac{d}{dx}(\Gamma \frac{d\phi}{dx}) + \rho u \frac{d\phi}{dx} = S$
where $\Gamma$ is diffusion coefficient, $\rho$ is density, $u$ is velocity, and $S$ is a source term.
Assume a Central Differencing Scheme for both diffusion and convection terms and a uniform grid with spacing $\Delta x$. For an interior node $p$, write down the discretized equation and then express the update rule for $\phi_p$ using the Gauss-Seidel method.

**Answer 5:**
The discretized equation using Central Differencing for both diffusion and convection (for a steady-state, 1D, uniform grid) at node $p$ is:
$(\frac{\Gamma_e}{\Delta x}) (\phi_{p+1} - \phi_p) - (\frac{\Gamma_w}{\Delta x}) (\phi_p - \phi_{p-1}) + (\frac{\rho u}{2}) (\phi_{p+1} - \phi_{p-1}) = S_p$

Let $\Gamma_e = \Gamma_w = \Gamma$ and $\rho u = J$ (flux).
$\frac{\Gamma}{\Delta x} (\phi_{p+1} - \phi_p) - \frac{\Gamma}{\Delta x} (\phi_p - \phi_{p-1}) + \frac{J}{2} (\phi_{p+1} - \phi_{p-1}) = S_p$

Rearranging to solve for $\phi_p$:
$\phi_p (\frac{\Gamma}{\Delta x} + \frac{\Gamma}{\Delta x}) = \phi_{p-1} (\frac{\Gamma}{\Delta x} - \frac{J}{2}) + \phi_{p+1} (\frac{\Gamma}{\Delta x} + \frac{J}{2}) + S_p$
$2 \frac{\Gamma}{\Delta x} \phi_p = (\frac{\Gamma}{\Delta x} - \frac{J}{2}) \phi_{p-1} + (\frac{\Gamma}{\Delta x} + \frac{J}{2}) \phi_{p+1} + S_p$

Let $a_p = 2 \frac{\Gamma}{\Delta x}$, $a_{p-1} = (\frac{\Gamma}{\Delta x} - \frac{J}{2})$, $a_{p+1} = (\frac{\Gamma}{\Delta x} + \frac{J}{2})$.
$a_p \phi_p = a_{p-1} \phi_{p-1} + a_{p+1} \phi_{p+1} + S_p$

Gauss-Seidel update rule (sweep left to right, so $\phi_{p-1}$ is from $k+1$ iteration, $\phi_{p+1}$ from $k$ iteration):
$\phi_p^{(k+1)} = \frac{1}{a_p} (a_{p-1} \phi_{p-1}^{(k+1)} + a_{p+1} \phi_{p+1}^{(k)} + S_p)$
$\phi_p^{(k+1)} = \frac{1}{2 \frac{\Gamma}{\Delta x}} \left[ (\frac{\Gamma}{\Delta x} - \frac{J}{2}) \phi_{p-1}^{(k+1)} + (\frac{\Gamma}{\Delta x} + \frac{J}{2}) \phi_{p+1}^{(k)} + S_p \right]$

**Important Note:** For convection-dominated flows ($J \gg \Gamma/\Delta x$), the coefficients $a_{p-1}$ can become negative, which can lead to instability with Central Differencing. This highlights the need for robust discretization schemes (like Upwind) when convection is significant, and also influences the choice and performance of iterative solvers.

---

### 6. Key Points to Remember

*   **Iterative vs. Direct Solvers:** For large CFD problems, iterative methods are often preferred over direct methods due to computational cost and memory requirements.
*   **Point-by-Point:** Jacobi and Gauss-Seidel update individual nodes. Gauss-Seidel generally converges faster.
*   **Line-by-Line:** Solves for groups of nodes along lines, typically using TDMA. Much more efficient for structured grids.
*   **TDMA:** Essential for solving tridiagonal systems, which arise frequently in 1D or in sweeps of multi-dimensional problems.
*   **Convergence:** Iterative methods require careful monitoring of convergence criteria (residuals, solution change).
*   **Under-Relaxation:** A technique to improve stability and convergence of point-by-point methods.
*   **Discretization Choice:** The chosen discretization scheme (e.g., Central Differencing vs. Upwind) significantly impacts the structure and properties of the coefficient matrix, thereby affecting the performance of the solution methods.

---
This concludes the notes on Point-by-Point and Line-by-Line methods of solution. Understanding these iterative techniques is fundamental to solving the discretized equations generated by the Finite Volume Method in CFD.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
