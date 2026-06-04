---
title: "Gradient based method: Newton’s method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Optimization algorithms for solving unconstrained nonlinear optimization problems"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff561"
status: "completed"
scrapedAt: "2026-05-23T18:08:42.905Z"
---
# OPTIMIZATION TECHNIQUES - Module 2: Optimization algorithms for solving unconstrained nonlinear optimization problems

## Topic: Gradient Based Method: Newton’s Method

---

### **Learning Outcomes Addressed:**

*   **LO1:** Understand the theoretical basis of Newton's method for unconstrained optimization.
*   **LO2:** Formulate the Newton's method update step for a given objective function.
*   **LO3:** Analyze the convergence properties of Newton's method.
*   **LO4:** Identify the advantages and disadvantages of Newton's method compared to other gradient-based methods.
*   **LO5:** Apply Newton's method to solve unconstrained nonlinear optimization problems.

---

### **Course Outcomes Aligned:**

*   **CO3:** Solve the unconstrained optimization problems using gradient based method. (Knowledge Level: K3) - *Newton's method is a fundamental gradient-based method. This module directly contributes to achieving this outcome by teaching students how to apply it.*

---

### **1. Introduction to Unconstrained Nonlinear Optimization**

*   **Objective:** Find the minimum (or maximum) of a nonlinear function $f(\mathbf{x})$ without any constraints on the decision variables $\mathbf{x} \in \mathbb{R}^n$.
*   **Problem Formulation:** Minimize $f(\mathbf{x})$ for $\mathbf{x} \in \mathbb{R}^n$.
*   **Key Requirement:** The objective function $f(\mathbf{x})$ is typically assumed to be continuously differentiable, and often twice continuously differentiable for methods like Newton's.

---

### **2. Gradient-Based Methods**

*   **Core Idea:** These methods utilize the gradient (first-order derivative) of the objective function to determine the direction of steepest descent (for minimization) or steepest ascent (for maximization).
*   **General Iterative Scheme:**
    $\mathbf{x}_{k+1} = \mathbf{x}_k + \alpha_k \mathbf{p}_k$
    where:
    *   $\mathbf{x}_k$: Current point in the search space at iteration $k$.
    *   $\mathbf{p}_k$: Search direction.
    *   $\alpha_k$: Step size or learning rate.

---

### **3. Newton's Method for Unconstrained Optimization**

Newton's method, originally developed for finding roots of equations, can be adapted for optimization. It leverages second-order derivative information to achieve faster convergence.

#### **3.1. Theoretical Basis**

*   **Taylor Series Expansion:** The core idea is to approximate the objective function $f(\mathbf{x})$ around the current point $\mathbf{x}_k$ using a second-order Taylor series expansion:

    $f(\mathbf{x}) \approx f(\mathbf{x}_k) + \nabla f(\mathbf{x}_k)^T (\mathbf{x} - \mathbf{x}_k) + \frac{1}{2} (\mathbf{x} - \mathbf{x}_k)^T \mathbf{H}(\mathbf{x}_k) (\mathbf{x} - \mathbf{x}_k)$

    where:
    *   $\nabla f(\mathbf{x}_k)$: Gradient of $f$ at $\mathbf{x}_k$.
    *   $\mathbf{H}(\mathbf{x}_k)$: Hessian matrix (matrix of second partial derivatives) of $f$ at $\mathbf{x}_k$.

*   **Quadratic Approximation:** This expansion gives us a local quadratic approximation of the objective function. Let $f_q(\mathbf{x})$ be this quadratic approximation.

*   **Minimizing the Quadratic Approximation:** To find the next iterate $\mathbf{x}_{k+1}$, we find the minimum of this quadratic approximation $f_q(\mathbf{x})$. We do this by setting its gradient with respect to $\mathbf{x}$ to zero:

    $\nabla f_q(\mathbf{x}) = \nabla f(\mathbf{x}_k) + \mathbf{H}(\mathbf{x}_k) (\mathbf{x} - \mathbf{x}_k) = \mathbf{0}$

*   **Deriving the Search Direction:** Rearranging the equation above to solve for $(\mathbf{x} - \mathbf{x}_k)$:

    $\mathbf{H}(\mathbf{x}_k) (\mathbf{x} - \mathbf{x}_k) = -\nabla f(\mathbf{x}_k)$

    Let $\mathbf{x} = \mathbf{x}_{k+1}$. Then, the search direction $\mathbf{p}_k = \mathbf{x}_{k+1} - \mathbf{x}_k$ is given by solving the linear system:

    $\mathbf{H}(\mathbf{x}_k) \mathbf{p}_k = -\nabla f(\mathbf{x}_k)$

    If the Hessian $\mathbf{H}(\mathbf{x}_k)$ is invertible, then the search direction is:

    $\mathbf{p}_k = -\mathbf{H}(\mathbf{x}_k)^{-1} \nabla f(\mathbf{x}_k)$

*   **Step Size:** In classical Newton's method, the step size $\alpha_k$ is typically set to 1. This means the update rule becomes:

    $\mathbf{x}_{k+1} = \mathbf{x}_k + \mathbf{p}_k = \mathbf{x}_k - \mathbf{H}(\mathbf{x}_k)^{-1} \nabla f(\mathbf{x}_k)$

#### **3.2. Algorithm Formulation**

**Newton's Method for Minimization:**

1.  **Initialization:** Choose an initial guess $\mathbf{x}_0$ and set iteration counter $k = 0$.
2.  **Calculate Gradient and Hessian:** Compute the gradient $\nabla f(\mathbf{x}_k)$ and the Hessian matrix $\mathbf{H}(\mathbf{x}_k)$ at the current point $\mathbf{x}_k$.
3.  **Check for Convergence:** If $||\nabla f(\mathbf{x}_k)|| < \epsilon$ (where $\epsilon$ is a small tolerance), stop the iteration; $\mathbf{x}_k$ is the approximate minimum.
4.  **Solve for Search Direction:** Solve the linear system $\mathbf{H}(\mathbf{x}_k) \mathbf{p}_k = -\nabla f(\mathbf{x}_k)$ for $\mathbf{p}_k$.
5.  **Update Iteration:** Update the point: $\mathbf{x}_{k+1} = \mathbf{x}_k + \mathbf{p}_k$.
6.  **Increment Counter:** Set $k = k + 1$ and go to step 2.

#### **3.3. Requirements for Newton's Method**

*   The objective function $f(\mathbf{x})$ must be **twice continuously differentiable**.
*   The **Hessian matrix $\mathbf{H}(\mathbf{x}_k)$ must be invertible** at each iteration.
*   For convergence to a minimum, the Hessian matrix $\mathbf{H}(\mathbf{x}_k)$ must be **positive definite** in the vicinity of the minimum.

#### **3.4. Convergence Properties**

*   **Quadratic Convergence:** When Newton's method converges, it exhibits **quadratic convergence**. This means that the error in successive iterations decreases quadratically. If $e_k = ||\mathbf{x}_k - \mathbf{x}^*||$ where $\mathbf{x}^*$ is the minimum, then $e_{k+1} \le C e_k^2$ for some constant $C$. This is significantly faster than linear convergence.
*   **Conditions for Quadratic Convergence:**
    *   The initial guess $\mathbf{x}_0$ must be sufficiently close to the minimum $\mathbf{x}^*$.
    *   The Hessian $\mathbf{H}(\mathbf{x}^*)$ at the minimum must be positive definite.
    *   The first, second, and third partial derivatives of $f(\mathbf{x})$ must be continuous in a neighborhood of $\mathbf{x}^*$.

#### **3.5. Example**

**Problem:** Minimize $f(x_1, x_2) = x_1^2 + x_2^2$.

1.  **Initial Guess:** Let $\mathbf{x}_0 = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$.
2.  **Calculate Gradient:**
    $\nabla f(\mathbf{x}) = \begin{pmatrix} \frac{\partial f}{\partial x_1} \\ \frac{\partial f}{\partial x_2} \end{pmatrix} = \begin{pmatrix} 2x_1 \\ 2x_2 \end{pmatrix}$
    $\nabla f(\mathbf{x}_0) = \begin{pmatrix} 2(2) \\ 2(3) \end{pmatrix} = \begin{pmatrix} 4 \\ 6 \end{pmatrix}$

3.  **Calculate Hessian:**
    $\mathbf{H}(\mathbf{x}) = \begin{pmatrix} \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} \\ \frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$
    $\mathbf{H}(\mathbf{x}_0) = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$

4.  **Check for Convergence:** $||\nabla f(\mathbf{x}_0)|| = \sqrt{4^2 + 6^2} = \sqrt{16+36} = \sqrt{52} > \epsilon$. Continue.

5.  **Solve for Search Direction:**
    $\mathbf{H}(\mathbf{x}_0) \mathbf{p}_0 = -\nabla f(\mathbf{x}_0)$
    $\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} \mathbf{p}_0 = -\begin{pmatrix} 4 \\ 6 \end{pmatrix}$
    $\mathbf{p}_0 = \begin{pmatrix} -2 \\ -3 \end{pmatrix}$

6.  **Update Iteration:**
    $\mathbf{x}_1 = \mathbf{x}_0 + \mathbf{p}_0 = \begin{pmatrix} 2 \\ 3 \end{pmatrix} + \begin{pmatrix} -2 \\ -3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

7.  **Next Iteration (k=1):**
    *   $\mathbf{x}_1 = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
    *   $\nabla f(\mathbf{x}_1) = \begin{pmatrix} 2(0) \\ 2(0) \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
    *   Check for Convergence: $||\nabla f(\mathbf{x}_1)|| = 0 < \epsilon$. Stop.

The minimum is found at $\mathbf{x}^* = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$ in one step. This is because the function is quadratic and the Hessian is constant and positive definite.

#### **3.6. Example (requiring multiple steps or step size adjustment)**

**Problem:** Minimize $f(x) = x^4 - 3x^2 + 2$.

1.  **Initial Guess:** Let $x_0 = 1.5$.

2.  **Calculate Gradient and Hessian:**
    *   $\nabla f(x) = 4x^3 - 6x$
    *   $\mathbf{H}(x) = \frac{d^2 f}{dx^2} = 12x^2 - 6$

3.  **Iteration 1 (k=0):**
    *   $x_0 = 1.5$
    *   $\nabla f(1.5) = 4(1.5)^3 - 6(1.5) = 4(3.375) - 9 = 13.5 - 9 = 4.5$
    *   $\mathbf{H}(1.5) = 12(1.5)^2 - 6 = 12(2.25) - 6 = 27 - 6 = 21$
    *   Convergence check: $|4.5| > \epsilon$. Continue.
    *   Search Direction: $p_0 = -\frac{\nabla f(x_0)}{\mathbf{H}(x_0)} = -\frac{4.5}{21} \approx -0.2143$
    *   Update: $x_1 = x_0 + p_0 = 1.5 - 0.2143 = 1.2857$

4.  **Iteration 2 (k=1):**
    *   $x_1 = 1.2857$
    *   $\nabla f(1.2857) = 4(1.2857)^3 - 6(1.2857) \approx 4(2.125) - 7.714 = 8.5 - 7.714 = 0.786$
    *   $\mathbf{H}(1.2857) = 12(1.2857)^2 - 6 \approx 12(1.653) - 6 = 19.836 - 6 = 13.836$
    *   Convergence check: $|0.786| > \epsilon$. Continue.
    *   Search Direction: $p_1 = -\frac{\nabla f(x_1)}{\mathbf{H}(x_1)} = -\frac{0.786}{13.836} \approx -0.0568$
    *   Update: $x_2 = x_1 + p_1 = 1.2857 - 0.0568 = 1.2289$

The true minima are at $x = \pm \sqrt{3/2} \approx \pm 1.2247$. Notice how the values are converging rapidly.

#### **3.7. Modifications and Related Methods**

*   **Line Search Newton's Method:** To improve robustness, a line search can be incorporated:
    $\mathbf{x}_{k+1} = \mathbf{x}_k + \alpha_k \mathbf{p}_k$
    where $\alpha_k$ is chosen to satisfy certain conditions (e.g., Armijo rule, Wolfe conditions). This is often preferred in practice.

*   **Levenberg-Marquardt Algorithm:** For optimization problems, especially those derived from least squares, this algorithm interpolates between Newton's method and gradient descent. It uses a modified Hessian:
    $\mathbf{H}_{LM}(\mathbf{x}_k) = \mathbf{H}(\mathbf{x}_k) + \lambda_k \mathbf{I}$
    where $\lambda_k$ is a damping parameter. If $\lambda_k$ is small, it behaves like Newton's method. If $\lambda_k$ is large, it behaves like gradient descent.

*   **Quasi-Newton Methods (e.g., BFGS, DFP):** These methods approximate the inverse Hessian or the Hessian itself using first-order information from previous steps, avoiding the explicit computation of the Hessian. They offer a good balance between convergence speed and computational cost.

#### **3.8. Advantages of Newton's Method**

*   **Fast Convergence:** Exhibits quadratic convergence when close to the minimum, leading to rapid solution.
*   **Direct Step:** It doesn't require a line search for basic convergence when $\alpha_k=1$, making it computationally efficient per iteration if the Hessian is easy to compute and invert.

#### **3.9. Disadvantages of Newton's Method**

*   **Hessian Computation:** Requires the computation of second-order derivatives (Hessian matrix), which can be computationally expensive or difficult to derive for complex functions.
*   **Hessian Invertibility:** The Hessian must be invertible at each step. If it's singular or ill-conditioned, the method can fail.
*   **Hessian Positive Definiteness:** For minimization, the Hessian must be positive definite. If it's not, the search direction might not be a descent direction, potentially leading to divergence or convergence to a saddle point or maximum.
*   **Sensitivity to Initial Guess:** Quadratic convergence is guaranteed only if the initial guess is sufficiently close to the minimum. Far from the minimum, the method can oscillate or diverge.

---

### **4. Key Concepts and Definitions**

*   **Gradient ($\nabla f$):** A vector containing the first partial derivatives of the objective function. It points in the direction of the steepest ascent.
*   **Hessian Matrix ($\mathbf{H}$):** A square matrix of second partial derivatives of the objective function. It describes the local curvature of the function.
*   **Positive Definite Matrix:** A symmetric matrix $\mathbf{M}$ is positive definite if $\mathbf{z}^T \mathbf{M} \mathbf{z} > 0$ for all non-zero vectors $\mathbf{z}$. For a Hessian, this implies the function is locally convex.
*   **Quadratic Convergence:** An iterative method where the error in successive iterations decreases by a factor that is squared in each step.
*   **Search Direction:** The direction in which the optimization algorithm moves to find a better solution. For Newton's method, it's $-\mathbf{H}^{-1} \nabla f$.

---

### **5. Practice Questions and Exercises**

**Question 1:**
For the function $f(x_1, x_2) = x_1^2 - x_1 x_2 + x_2^2$,
a) Calculate the gradient and Hessian matrix.
b) Starting from $\mathbf{x}_0 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$, use one step of Newton's method to find the next iterate $\mathbf{x}_1$.

**Answer 1:**
a)
$\nabla f(\mathbf{x}) = \begin{pmatrix} 2x_1 - x_2 \\ -x_1 + 2x_2 \end{pmatrix}$
$\mathbf{H}(\mathbf{x}) = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$

b)
At $\mathbf{x}_0 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$:
$\nabla f(1, 1) = \begin{pmatrix} 2(1) - 1 \\ -1 + 2(1) \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$
$\mathbf{H}(1, 1) = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$

To find the search direction $\mathbf{p}_0$, solve $\mathbf{H}(\mathbf{x}_0) \mathbf{p}_0 = -\nabla f(\mathbf{x}_0)$:
$\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} \mathbf{p}_0 = -\begin{pmatrix} 1 \\ 1 \end{pmatrix}$

We can invert the Hessian: $\mathbf{H}^{-1} = \frac{1}{4-1} \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} = \frac{1}{3} \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.
$\mathbf{p}_0 = -\mathbf{H}^{-1} \nabla f(\mathbf{x}_0) = -\frac{1}{3} \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = -\frac{1}{3} \begin{pmatrix} 3 \\ 3 \end{pmatrix} = \begin{pmatrix} -1 \\ -1 \end{pmatrix}$.

The next iterate is:
$\mathbf{x}_1 = \mathbf{x}_0 + \mathbf{p}_0 = \begin{pmatrix} 1 \\ 1 \end{pmatrix} + \begin{pmatrix} -1 \\ -1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.

**Question 2:**
Consider the Rosenbrock function: $f(x_1, x_2) = (1-x_1)^2 + 100(x_2-x_1^2)^2$. This is a common test function for optimization algorithms.
a) Calculate the gradient of the Rosenbrock function.
b) Calculate the Hessian matrix of the Rosenbrock function.
c) Briefly discuss why computing the Hessian for such functions can be challenging and what alternative approaches exist (mentioning one class of methods).

**Answer 2:**
a)
$\nabla f(x_1, x_2) = \begin{pmatrix} -2(1-x_1) - 400x_1(x_2-x_1^2) \\ 200(x_2-x_1^2) \end{pmatrix}$
$\nabla f(x_1, x_2) = \begin{pmatrix} -2 + 2x_1 - 400x_1x_2 + 400x_1^3 \\ 200x_2 - 200x_1^2 \end{pmatrix}$

b)
$\frac{\partial^2 f}{\partial x_1^2} = 2 - 400x_2 + 1200x_1^2$
$\frac{\partial^2 f}{\partial x_1 \partial x_2} = -400x_1$
$\frac{\partial^2 f}{\partial x_2 \partial x_1} = -400x_1$
$\frac{\partial^2 f}{\partial x_2^2} = 200$

$\mathbf{H}(x_1, x_2) = \begin{pmatrix} 2 - 400x_2 + 1200x_1^2 & -400x_1 \\ -400x_1 & 200 \end{pmatrix}$

c)
Computing the Hessian for functions like the Rosenbrock function involves calculating second partial derivatives, which can become complex and error-prone as the number of variables increases. The expressions for the Hessian can also be large and computationally intensive.

Alternative approaches include **Quasi-Newton methods** (e.g., BFGS, DFP). These methods avoid the direct computation of the Hessian by approximating it (or its inverse) using information from gradients at previous iterations. This often provides a good balance between the rapid convergence of Newton's method and the simplicity of gradient descent.

---

### **6. Important Points to Remember**

*   Newton's method uses **second-order information** (Hessian) to find the minimum.
*   The search direction is $\mathbf{p}_k = -\mathbf{H}(\mathbf{x}_k)^{-1} \nabla f(\mathbf{x}_k)$.
*   It can achieve **quadratic convergence**, which is very fast, but only near the minimum.
*   **Requires the Hessian to be invertible and positive definite** for convergence to a minimum.
*   **Computation of the Hessian can be costly.**
*   **Can be sensitive to the initial guess.**
*   **Line search or damping** can improve robustness.
*   **Quasi-Newton methods** approximate the Hessian to avoid explicit computation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **7. References and Content Incorporation**

*   **S.S. Rao, "Engineering Optimization, Theory and Practice"**: This textbook provides a foundational understanding of optimization algorithms, including Newton's method. Chapter 7 (or similar) would detail the derivation of Newton's method, its convergence properties, and its application to engineering problems. The derivation of the search direction from the Taylor series expansion and the conditions for convergence (Hessian invertibility and positive definiteness) are central themes found in Rao's work.
*   **Xin-She Yang, "Optimization Techniques and Applications with Examples"**: This book offers practical insights and examples. It would likely present Newton's method with clear examples and discuss its implementation nuances, possibly including modifications for robustness.
*   **K. Deb, "Optimization for Engineering Design Algorithms and Examples"**: Deb's book often focuses on practical aspects and algorithm comparisons. It would likely compare Newton's method to other gradient-based methods, highlighting its speed advantages and computational costs, and may feature examples related to engineering design.
*   **J. Arora, "Introduction to Optimization Design"**: Arora's text would also cover the theoretical underpinnings of Newton's method, its formulation for optimization, and its role in engineering design optimization.
*   **Edwin KP Chong, Stanislaw H Hak, "An introduction to optimization"**: This comprehensive text would offer a rigorous mathematical treatment of Newton's method, including detailed proofs of convergence rates and analyses of its behavior under various conditions.

The notes above have synthesized these foundational concepts, covering the derivation, algorithm steps, convergence, advantages, disadvantages, and practical considerations of Newton's method as would be presented in these authoritative texts. The examples illustrate the application of the method.

---