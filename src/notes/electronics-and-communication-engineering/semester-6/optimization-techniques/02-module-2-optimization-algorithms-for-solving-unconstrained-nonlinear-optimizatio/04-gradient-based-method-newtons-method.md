---
title: "Gradient based method: Newton’s method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Optimization algorithms for solving unconstrained nonlinear optimization problems – Search based techniques"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef34"
status: "completed"
scrapedAt: "2026-05-23T18:02:35.011Z"
---
# OPTIMIZATION TECHNIQUES - Module 2: Search-Based Techniques for Unconstrained Nonlinear Optimization

## Topic: Gradient-Based Methods - Newton's Method

### 1. Introduction

Newton's method, also known as Newton-Raphson method, is a powerful gradient-based technique for finding the roots of a function. In the context of optimization, it's adapted to find the stationary points (minima, maxima, or saddle points) of a function by solving the first-order necessary condition, which is setting the gradient to zero. This method is particularly effective when the function is twice differentiable and its Hessian matrix is positive definite (for minimization).

**Relevance to Course Outcomes:**

*   **CO3: Solve the unconstrained optimization problems using gradient based method. (Knowledge Level: K3)**
    Newton's method is a fundamental gradient-based method for solving unconstrained optimization problems.

**Key Concepts:**

*   **Unconstrained Optimization:** Finding the minimum or maximum of a function without any constraints on the variables.
*   **Stationary Point:** A point where the gradient of the function is zero. For a function $f(x)$, a stationary point $x^*$ satisfies $\nabla f(x^*) = \mathbf{0}$.
*   **Gradient ($\nabla f(x)$):** A vector of partial derivatives of the function with respect to each variable. It points in the direction of the steepest ascent.
*   **Hessian Matrix ($H(x)$ or $\nabla^2 f(x)$):** A square matrix of second-order partial derivatives of the function. For a function $f: \mathbb{R}^n \rightarrow \mathbb{R}$, the Hessian is an $n \times n$ matrix where $H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$.

**Textbook References:**

*   **S.S Rao, "Engineering Optimization, Theory and Practice" (4th Ed., 2012):** Chapter 6 (Minimization of Non-linear Function of Several Variables), Section 6.4 (Newton's Method). Rao provides a thorough treatment of Newton's method, its derivation, and its application to engineering problems.
*   **Xin-She Yang, "Optimization Techniques and Applications with Examples" (2018):** Chapter 3 (Gradient-Based Optimization Methods), Section 3.2 (Newton's Method). Yang's text often presents numerical examples and algorithmic details.
*   **Deb K, "Optimization for Engineering Design Algorithms and Examples" (2000):** Chapter 3 (Unconstrained Optimization), Section 3.3.2 (Newton's Method). Deb's book emphasizes practical application and algorithm implementation.

---

### 2. Derivation of Newton's Method

Newton's method for finding the roots of a function $g(x) = 0$ is derived by approximating the function with its first-order Taylor expansion around a point $x_k$:

$g(x) \approx g(x_k) + \nabla g(x_k)^T (x - x_k)$

Setting this approximation to zero to find the next iterate $x_{k+1}$:

$g(x_k) + \nabla g(x_k)^T (x_{k+1} - x_k) = 0$

$x_{k+1} - x_k = -[\nabla g(x_k)]^{-1} g(x_k)$

$x_{k+1} = x_k - [\nabla g(x_k)]^{-1} g(x_k)$

For optimization, we want to find a stationary point of a function $f(x)$, which means solving $\nabla f(x) = \mathbf{0}$. Let $g(x) = \nabla f(x)$. Then the gradient of $g(x)$ is the Hessian matrix of $f(x)$, i.e., $\nabla g(x) = \nabla (\nabla f(x)) = \nabla^2 f(x) = H(x)$.

Substituting these into the root-finding formula:

$x_{k+1} = x_k - [H(x_k)]^{-1} \nabla f(x_k)$

This is the core update rule for Newton's method in optimization. The term $d_k = -[H(x_k)]^{-1} \nabla f(x_k)$ is called the **Newton step** or **Newton direction**.

**Important Point:** Newton's method uses the second-order derivative information (Hessian) to determine the direction and magnitude of the step. This allows it to converge quadratically under certain conditions.

---

### 3. Algorithm for Newton's Method

Given a function $f(x)$ to minimize, where $x \in \mathbb{R}^n$:

**Initialization:**
1.  Choose an initial guess $x_0$.
2.  Set iteration counter $k = 0$.

**Iteration:**
While the convergence criteria are not met (e.g., $|\nabla f(x_k)| < \epsilon$ or $|x_{k+1} - x_k| < \epsilon$ for a small tolerance $\epsilon$):
1.  Calculate the gradient: $g_k = \nabla f(x_k)$.
2.  Calculate the Hessian matrix: $H_k = \nabla^2 f(x_k)$.
3.  Check if $H_k$ is invertible and positive definite (for minimization). If not, a modified Newton's method might be needed.
4.  Compute the Newton direction: $d_k = -[H_k]^{-1} g_k$.
5.  Update the solution: $x_{k+1} = x_k + \alpha_k d_k$.
    *   In the pure Newton's method, $\alpha_k = 1$.
    *   A line search can be incorporated to find an optimal step size $\alpha_k$, making it **modified Newton's method** or **quasi-Newton method** if an approximation of the Hessian is used.

**Termination:**
Stop when convergence criteria are met.

---

### 4. Characteristics of Newton's Method

**Advantages:**

*   **Fast Convergence:** Exhibits quadratic convergence near the optimum, meaning the number of correct digits roughly doubles with each iteration. This is its most significant advantage. (Rao, Section 6.4)
*   **Uses Second-Order Information:** The Hessian provides curvature information, allowing for more direct steps towards the minimum compared to first-order methods.

**Disadvantages:**

*   **Hessian Calculation:** Requires computing the second partial derivatives, which can be computationally expensive or analytically difficult for complex functions.
*   **Hessian Invertibility:** The Hessian matrix must be invertible. If it's singular (determinant is zero), the method breaks down.
*   **Hessian Positive Definiteness:** For minimization, the Hessian must be positive definite at the optimum. If $H_k$ is not positive definite, the Newton direction might point towards a maximum or saddle point.
*   **Poor Performance Far from Optimum:** If the initial guess is far from the solution, the quadratic approximation may be poor, and the method might diverge or converge slowly.
*   **Computational Cost:** Matrix inversion can be computationally intensive ($O(n^3)$ for an $n \times n$ matrix).

**Important Point:** While the "pure" Newton's method uses $\alpha_k = 1$, in practice, line search is often used to ensure convergence and avoid overshooting the minimum. When $\alpha_k < 1$ is chosen, the method is no longer guaranteed to have quadratic convergence but often retains superlinear convergence.

---

### 5. Examples

Let's consider minimizing the function $f(x_1, x_2) = x_1^2 + x_2^2$.

**1. Gradient and Hessian Calculation:**

*   $\nabla f(x_1, x_2) = \begin{bmatrix} \frac{\partial f}{\partial x_1} \\ \frac{\partial f}{\partial x_2} \end{bmatrix} = \begin{bmatrix} 2x_1 \\ 2x_2 \end{bmatrix}$
*   $\nabla^2 f(x_1, x_2) = \begin{bmatrix} \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} \\ \frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} \end{bmatrix} = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$

**2. Newton's Method Iteration:**

The update rule is:
$x_{k+1} = x_k - [H(x_k)]^{-1} \nabla f(x_k)$

Since the Hessian is constant: $H = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$, its inverse is $H^{-1} = \begin{bmatrix} 1/2 & 0 \\ 0 & 1/2 \end{bmatrix}$.

So, the update rule becomes:
$\begin{bmatrix} x_{1, k+1} \\ x_{2, k+1} \end{bmatrix} = \begin{bmatrix} x_{1, k} \\ x_{2, k} \end{bmatrix} - \begin{bmatrix} 1/2 & 0 \\ 0 & 1/2 \end{bmatrix} \begin{bmatrix} 2x_{1, k} \\ 2x_{2, k} \end{bmatrix} = \begin{bmatrix} x_{1, k} \\ x_{2, k} \end{bmatrix} - \begin{bmatrix} x_{1, k} \\ x_{2, k} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$

This shows that if we start at any point $x_k$, the next iteration $x_{k+1}$ will be $(0,0)$, which is the minimum of $f(x_1, x_2) = x_1^2 + x_2^2$. This is a perfect example of quadratic convergence.

**Example 2: Rosenbrock Function**

Consider the Rosenbrock function: $f(x_1, x_2) = (1-x_1)^2 + 100(x_2 - x_1^2)^2$. The minimum is at $(1,1)$.

*   **Gradient:**
    $\nabla f(x_1, x_2) = \begin{bmatrix} -2(1-x_1) - 400x_1(x_2 - x_1^2) \\ 200(x_2 - x_1^2) \end{bmatrix}$
*   **Hessian:**
    $\nabla^2 f(x_1, x_2) = \begin{bmatrix} 2 + 400(x_2 - x_1^2) + 800x_1^2 & -400x_1 \\ -400x_1 & 200 \end{bmatrix}$

Let's start with $x_0 = (0,0)$:
*   $\nabla f(0,0) = \begin{bmatrix} -2 \\ 0 \end{bmatrix}$
*   $H(0,0) = \begin{bmatrix} 2 & 0 \\ 0 & 200 \end{bmatrix}$
*   $H(0,0)^{-1} = \begin{bmatrix} 1/2 & 0 \\ 0 & 1/200 \end{bmatrix}$
*   $d_0 = -H(0,0)^{-1} \nabla f(0,0) = -\begin{bmatrix} 1/2 & 0 \\ 0 & 1/200 \end{bmatrix} \begin{bmatrix} -2 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
*   $x_1 = x_0 + d_0 = \begin{bmatrix} 0 \\ 0 \end{bmatrix} + \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$

Now, at $x_1 = (1,0)$:
*   $\nabla f(1,0) = \begin{bmatrix} -2(1-1) - 400(1)(0 - 1^2) \\ 200(0 - 1^2) \end{bmatrix} = \begin{bmatrix} 400 \\ -200 \end{bmatrix}$
*   $H(1,0) = \begin{bmatrix} 2 + 400(0 - 1^2) + 800(1)^2 & -400(1) \\ -400(1) & 200 \end{bmatrix} = \begin{bmatrix} 2 - 400 + 800 & -400 \\ -400 & 200 \end{bmatrix} = \begin{bmatrix} 402 & -400 \\ -400 & 200 \end{bmatrix}$
*   Calculate $H(1,0)^{-1}$. Determinant is $(402)(200) - (-400)(-400) = 80400 - 160000 = -79600$. Since the determinant is negative, the Hessian is not positive definite at $(1,0)$. This indicates that $(1,0)$ is not a minimum.
*   $d_1 = -H(1,0)^{-1} \nabla f(1,0)$

If we use a line search with $\alpha=1$, $x_2 = x_1 + d_1$. The exact inverse of H(1,0) would be:
$H(1,0)^{-1} = \frac{1}{-79600}\begin{bmatrix} 200 & 400 \\ 400 & 402 \end{bmatrix}$
$d_1 = -\frac{1}{-79600}\begin{bmatrix} 200 & 400 \\ 400 & 402 \end{bmatrix} \begin{bmatrix} 400 \\ -200 \end{bmatrix} = \frac{1}{79600}\begin{bmatrix} 80000 - 80000 \\ 160000 - 80800 \end{bmatrix} = \frac{1}{79600}\begin{bmatrix} 0 \\ 79200 \end{bmatrix} \approx \begin{bmatrix} 0 \\ 0.9949 \end{bmatrix}$
$x_2 = x_1 + d_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} 0 \\ 0.9949 \end{bmatrix} = \begin{bmatrix} 1 \\ 0.9949 \end{bmatrix}$
This is getting closer to $(1,1)$.

**Reference:** Rao (2012), Chapter 6, provides detailed examples of Newton's method applied to engineering problems.

---

### 6. Modifications and Related Methods

**1. Modified Newton's Method (with Line Search):**

To improve robustness, a line search procedure is often used to find a suitable step size $\alpha_k \in (0, 1]$ such that $f(x_k + \alpha_k d_k) < f(x_k)$. Common line search methods include the Armijo rule or Wolfe conditions. This ensures that progress is made towards a minimum and can help prevent divergence when the initial guess is not ideal.

**2. Damped Newton's Method:**

This is essentially the modified Newton's method with line search. The step size $\alpha_k$ is chosen to be less than or equal to 1, "damping" the step.

**3. Quasi-Newton Methods:**

These methods avoid direct computation of the Hessian. Instead, they build up an approximation of the inverse Hessian (or the Hessian itself) using gradient information from previous iterations. Examples include:
*   **Davidon-Fletcher-Powell (DFP):** Approximates the inverse Hessian.
*   **Broyden-Fletcher-Goldfarb-Shanno (BFGS):** The most popular quasi-Newton method, known for its efficiency and good performance. It also approximates the inverse Hessian.

These methods typically exhibit superlinear convergence, which is faster than steepest descent but slower than Newton's method's quadratic convergence. However, they are often preferred due to the reduced computational cost per iteration.

**Reference:** Rao (2012), Chapter 6, discusses modifications and comparisons with other methods. Yang (2018), Chapter 3, also covers quasi-Newton methods.

---

### 7. Handling Non-Positive Definite Hessians

When the Hessian $H_k$ is not positive definite, the Newton direction $d_k = -H_k^{-1} \nabla f(x_k)$ might not be a descent direction (i.e., $d_k^T \nabla f(x_k) > 0$). Several strategies exist:

*   **Eigenvalue Decomposition:** Decompose $H_k = Q \Lambda Q^T$. If $H_k$ is not positive definite, some eigenvalues in $\Lambda$ will be negative or zero. Modify $\Lambda$ by replacing negative eigenvalues $\lambda_i$ with a small positive value $\delta$, or $\lambda_i^2 / \lambda_i'$ (where $\lambda_i'$ is close to $\lambda_i$) to ensure positive definiteness. Then form a modified Hessian $H_k'$.
*   **Levenberg-Marquardt Algorithm:** This algorithm interpolates between Newton's method and steepest descent. It uses $H_k + \mu I$ instead of $H_k$, where $\mu$ is a parameter that is adjusted. When $\mu$ is large, it resembles steepest descent; when $\mu$ is small, it resembles Newton's method.
*   **Cholesky Decomposition:** Attempt a Cholesky decomposition of $H_k$. If it fails, modify $H_k$ (e.g., add a multiple of the identity matrix) until the decomposition succeeds.

**Important Point:** Ensuring the search direction is a descent direction is crucial for convergence.

**Reference:** Arora (2004), Chapter 5, discusses various methods for handling ill-conditioned or non-positive definite matrices in optimization.

---

### 8. Practice Questions and Exercises

**Question 1:**
For the function $f(x_1, x_2) = x_1^2 - x_1 x_2 + x_2^2$, find the gradient and Hessian. Use Newton's method to find the minimum starting from $x_0 = (2,1)$. Show the first iteration.

**Answer 1:**
*   **Gradient:** $\nabla f(x_1, x_2) = \begin{bmatrix} 2x_1 - x_2 \\ -x_1 + 2x_2 \end{bmatrix}$
*   **Hessian:** $\nabla^2 f(x_1, x_2) = \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix}$

Let's compute the first iteration starting from $x_0 = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$:
*   $\nabla f(2,1) = \begin{bmatrix} 2(2) - 1 \\ -2 + 2(1) \end{bmatrix} = \begin{bmatrix} 3 \\ 0 \end{bmatrix}$
*   $H(2,1) = \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix}$
*   Since the Hessian is constant, its inverse is $H^{-1} = \frac{1}{(2)(2) - (-1)(-1)} \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix} = \frac{1}{3} \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$
*   Newton direction: $d_0 = -H^{-1} \nabla f(x_0) = -\frac{1}{3} \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} 3 \\ 0 \end{bmatrix} = -\frac{1}{3} \begin{bmatrix} 6 \\ 3 \end{bmatrix} = \begin{bmatrix} -2 \\ -1 \end{bmatrix}$
*   Update step (using $\alpha_0 = 1$): $x_1 = x_0 + d_0 = \begin{bmatrix} 2 \\ 1 \end{bmatrix} + \begin{bmatrix} -2 \\ -1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$

The minimum is at $(0,0)$, and Newton's method found it in one step, as expected for a quadratic function.

**Question 2:**
What is the primary advantage of Newton's method over the method of steepest descent?

**Answer 2:**
The primary advantage of Newton's method is its **quadratic convergence rate** near the optimum, provided the Hessian is positive definite. This means it converges much faster than steepest descent (which typically has linear convergence). This is because Newton's method utilizes second-order derivative (Hessian) information, allowing it to take more direct steps towards the minimum, informed by the curvature of the function.

**Question 3:**
When is Newton's method guaranteed to converge to a local minimum?

**Answer 3:**
Newton's method is guaranteed to converge to a local minimum if:
1.  The Hessian matrix $H(x)$ is **positive definite** in the region of interest around the minimum. This ensures that the Newton direction is a descent direction.
2.  The initial guess $x_0$ is "sufficiently close" to the local minimum.
3.  The function is twice continuously differentiable.

If $H(x)$ is not positive definite, the method may converge to a maximum, a saddle point, or diverge. Using line search (modified Newton's method) improves the chances of convergence even from less ideal starting points.

---

### 9. Important Points to Remember

*   **Newton's Method seeks the root of the gradient ($\nabla f(x) = 0$).**
*   **Update Rule:** $x_{k+1} = x_k - [H(x_k)]^{-1} \nabla f(x_k)$.
*   **Quadratic Convergence:** Its main strength is very fast convergence near the optimum.
*   **Hessian Requirement:** Computation and inversion of the Hessian matrix are required, which can be costly.
*   **Positive Definite Hessian:** For minimization, the Hessian must be positive definite for the direction to be a descent direction.
*   **Modified Newton's Method:** Incorporating a line search improves robustness and convergence guarantees.
*   **Quasi-Newton Methods:** Offer a compromise between the speed of Newton's method and the simplicity of gradient descent by approximating the Hessian.

---

### 10. Alignment with Course Outcomes

*   **CO3: Solve the unconstrained optimization problems using gradient based method. (Knowledge Level: K3)**
    This topic directly addresses CO3 by explaining how to use the gradient and Hessian to iteratively find solutions to unconstrained nonlinear optimization problems via Newton's method. The derivation, algorithm, and examples demonstrate the application of this gradient-based technique.

---
This concludes the study notes for Newton's Method in the context of unconstrained nonlinear optimization. Remember to practice the calculations and understand the trade-offs involved in using this powerful technique.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
