---
title: "-Optimization of function of multiple variables subject to equality constraints"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 3: Optimization algorithms for solving constrained optimization problems– direct methods – penalty function methods, barrier method"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef37"
status: "completed"
scrapedAt: "2026-05-23T18:02:36.723Z"
---
# OPTIMIZATION TECHNIQUES: Module 3 - Constrained Optimization Algorithms

## Module 3: Optimization algorithms for solving constrained optimization problems – direct methods – penalty function methods, barrier method

### Topic: Optimization of Function of Multiple Variables Subject to Equality Constraints

---

### **1. Introduction to Constrained Optimization**

Constrained optimization problems involve finding the minimum or maximum of an objective function subject to certain conditions or limitations, known as constraints. These constraints can be equalities or inequalities.

**Key Concepts:**

*   **Objective Function ($f(\mathbf{x})$):** The function we aim to minimize or maximize. Here, $\mathbf{x}$ is a vector of decision variables, $\mathbf{x} = [x_1, x_2, \dots, x_n]^T$.
*   **Equality Constraints ($h_j(\mathbf{x}) = 0$):** Conditions that must be satisfied exactly. We denote them as $h_j(\mathbf{x}) = 0$ for $j = 1, 2, \dots, m$.
*   **Feasible Region:** The set of all $\mathbf{x}$ values that satisfy all constraints.
*   **Optimal Solution:** A feasible point that yields the best objective function value.

**Problem Formulation:**

Minimize $f(\mathbf{x})$
Subject to:
$h_j(\mathbf{x}) = 0$, for $j = 1, 2, \dots, m$

**Learning Outcome Alignment:**

*   **CO1 (K2):** Formulating optimization problems, which is fundamental to understanding constrained optimization.
*   **CO4 (K3):** Applying techniques to solve constrained problems. This module directly addresses this.

**Textbook/Reference:**

*   S.S. Rao, Chapter 9: "Optimization of functions of several variables subject to equality constraints."
*   Xin-She Yang, Chapter 5: "Constrained Optimization Methods."
*   Deb K, Chapter 4: "Introduction to Nonlinear Programming."

---

### **2. Direct Methods for Equality Constraints**

Direct methods aim to directly reduce the number of variables in the problem by using the equality constraints to express some variables in terms of others.

#### 2.1. Elimination of Variables

This is the most straightforward direct method. If the equality constraints can be algebraically solved for some variables, they can be substituted into the objective function.

**Procedure:**

1.  From the $m$ equality constraints, express $m$ variables (dependent variables) in terms of the remaining $n-m$ variables (independent variables).
2.  Substitute these expressions into the objective function.
3.  The problem is transformed into an unconstrained optimization problem with $n-m$ variables.

**Example:**

Minimize $f(x_1, x_2, x_3) = x_1^2 + x_2^2 + x_3^2$
Subject to:
$h_1(x_1, x_2, x_3) = x_1 + x_2 + x_3 - 3 = 0$

**Solution:**

From the constraint, we can express $x_3$ as $x_3 = 3 - x_1 - x_2$.
Substitute this into the objective function:
$f(x_1, x_2) = x_1^2 + x_2^2 + (3 - x_1 - x_2)^2$

Now, we have an unconstrained problem in $x_1$ and $x_2$. We can solve this using gradient-based methods for unconstrained problems.

*   $\frac{\partial f}{\partial x_1} = 2x_1 + 2(3 - x_1 - x_2)(-1) = 2x_1 - 6 + 2x_1 + 2x_2 = 4x_1 + 2x_2 - 6$
*   $\frac{\partial f}{\partial x_2} = 2x_2 + 2(3 - x_1 - x_2)(-1) = 2x_2 - 6 + 2x_1 + 2x_2 = 2x_1 + 4x_2 - 6$

Setting the gradients to zero:
1.  $4x_1 + 2x_2 - 6 = 0 \Rightarrow 2x_1 + x_2 = 3$
2.  $2x_1 + 4x_2 - 6 = 0 \Rightarrow x_1 + 2x_2 = 3$

Solving these equations:
From (1), $x_2 = 3 - 2x_1$. Substitute into (2):
$x_1 + 2(3 - 2x_1) = 3$
$x_1 + 6 - 4x_1 = 3$
$-3x_1 = -3 \Rightarrow x_1 = 1$

Then, $x_2 = 3 - 2(1) = 1$.
Finally, $x_3 = 3 - x_1 - x_2 = 3 - 1 - 1 = 1$.

The optimal solution is $(1, 1, 1)$.

**Limitations of Variable Elimination:**

*   **Difficulty in algebraic manipulation:** Solving constraints for some variables can be extremely difficult or impossible for complex functions.
*   **Increased complexity:** The transformed objective function can become very complex.
*   **Not suitable for inequality constraints:** This method is strictly for equality constraints.

**Important Point to Remember:**

Variable elimination is effective when equality constraints are simple and can be easily solved for some variables.

**Textbook/Reference:**

*   S.S. Rao, Section 9.1: "Elimination of variables."
*   Deb K, Section 4.3: "Elimination of Variables."

---

### **3. Methods for Equality Constraints: Lagrange Multipliers**

While not strictly a "direct method" in the sense of variable elimination, the method of Lagrange multipliers is a fundamental technique for handling equality constraints and is often the starting point for understanding more advanced methods. It transforms a constrained problem into an unconstrained problem by introducing new variables called Lagrange multipliers.

**Principle:**

The gradient of the objective function at the optimum is a linear combination of the gradients of the active constraints.

**Lagrangian Function:**

The Lagrangian function $L(\mathbf{x}, \boldsymbol{\lambda})$ is defined as:
$L(\mathbf{x}, \boldsymbol{\lambda}) = f(\mathbf{x}) + \sum_{j=1}^m \lambda_j h_j(\mathbf{x})$
where $\boldsymbol{\lambda} = [\lambda_1, \lambda_2, \dots, \lambda_m]^T$ are the Lagrange multipliers.

**Optimality Conditions (First-Order Necessary Conditions):**

To find the stationary points of the Lagrangian, we set its gradient with respect to $\mathbf{x}$ and $\boldsymbol{\lambda}$ to zero:

1.  $\frac{\partial L}{\partial x_i} = \frac{\partial f}{\partial x_i} + \sum_{j=1}^m \lambda_j \frac{\partial h_j}{\partial x_i} = 0$, for $i = 1, \dots, n$
2.  $\frac{\partial L}{\partial \lambda_j} = h_j(\mathbf{x}) = 0$, for $j = 1, \dots, m$

These $n+m$ equations are solved simultaneously for the $n+m$ unknowns ($\mathbf{x}$ and $\boldsymbol{\lambda}$).

**Example (revisited):**

Minimize $f(x_1, x_2, x_3) = x_1^2 + x_2^2 + x_3^2$
Subject to:
$h_1(x_1, x_2, x_3) = x_1 + x_2 + x_3 - 3 = 0$

**Lagrangian:**
$L(x_1, x_2, x_3, \lambda_1) = x_1^2 + x_2^2 + x_3^2 + \lambda_1(x_1 + x_2 + x_3 - 3)$

**Gradient conditions:**

1.  $\frac{\partial L}{\partial x_1} = 2x_1 + \lambda_1 = 0 \Rightarrow x_1 = -\frac{\lambda_1}{2}$
2.  $\frac{\partial L}{\partial x_2} = 2x_2 + \lambda_1 = 0 \Rightarrow x_2 = -\frac{\lambda_1}{2}$
3.  $\frac{\partial L}{\partial x_3} = 2x_3 + \lambda_1 = 0 \Rightarrow x_3 = -\frac{\lambda_1}{2}$
4.  $\frac{\partial L}{\partial \lambda_1} = x_1 + x_2 + x_3 - 3 = 0$

Substitute (1), (2), and (3) into (4):
$(-\frac{\lambda_1}{2}) + (-\frac{\lambda_1}{2}) + (-\frac{\lambda_1}{2}) - 3 = 0$
$-\frac{3\lambda_1}{2} = 3 \Rightarrow \lambda_1 = -2$

Now, find $x_1, x_2, x_3$:
$x_1 = -\frac{-2}{2} = 1$
$x_2 = -\frac{-2}{2} = 1$
$x_3 = -\frac{-2}{2} = 1$

The optimal solution is $(1, 1, 1)$.

**Interpretation of Lagrange Multipliers:**

The Lagrange multiplier $\lambda_j$ represents the rate of change of the optimal objective function value with respect to a small change in the constraint $h_j(\mathbf{x})$. In other words, $\lambda_j \approx \frac{\partial f_{opt}}{\partial c_j}$, where $c_j$ is the right-hand side of the constraint $h_j(\mathbf{x}) = c_j$.

**Important Point to Remember:**

Lagrange multipliers provide necessary conditions for optimality. For convex problems, they can also be sufficient.

**Textbook/Reference:**

*   S.S. Rao, Section 9.2: "Lagrange multiplier method."
*   Xin-She Yang, Chapter 5.1: "Lagrangian Multiplier Method."
*   Deb K, Chapter 4.2: "Lagrange Multiplier Method."
*   Chong & Hak, Chapter 7: "Lagrangian Optimality Conditions."

---

### **4. Penalty Function Methods**

Penalty function methods transform a constrained optimization problem into a sequence of unconstrained optimization problems by adding a penalty term to the objective function. This penalty increases as the solution moves away from the feasible region.

#### 4.1. Exterior Penalty Function Method

In this method, the penalty is applied for violating the constraints. For minimization problems, a positive penalty is added for constraint violation.

**General Form for Equality Constraints:**

The original problem:
Minimize $f(\mathbf{x})$
Subject to: $h_j(\mathbf{x}) = 0$, for $j = 1, \dots, m$

The penalty function problem becomes:
Minimize $P_r(\mathbf{x}, \mathbf{R}) = f(\mathbf{x}) + R \sum_{j=1}^m [h_j(\mathbf{x})]^2$
where $R$ is a large positive penalty parameter, and $R \to \infty$.

The term $R \sum_{j=1}^m [h_j(\mathbf{x})]^2$ is the penalty term. It is zero if all constraints are satisfied and positive otherwise. As $R$ increases, the penalty for violating the constraints becomes more severe, pushing the solution towards the feasible region.

**Algorithm:**

1.  Start with a small positive value of $R$ (e.g., $R_1$).
2.  Solve the unconstrained penalty function problem: Minimize $P_{R_k}(\mathbf{x}) = f(\mathbf{x}) + R_k \sum_{j=1}^m [h_j(\mathbf{x})]^2$. Let the solution be $\mathbf{x}_k^*$.
3.  If the solution $\mathbf{x}_k^*$ is sufficiently close to satisfying the constraints (i.e., $\sum_{j=1}^m [h_j(\mathbf{x}_k^*)]^2$ is small), stop.
4.  Otherwise, increase the penalty parameter (e.g., $R_{k+1} = \beta R_k$, where $\beta > 1$).
5.  Go to step 2.

**Example:**

Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
Subject to: $h_1(x_1, x_2) = x_1 + x_2 - 1 = 0$

Penalty function problem:
Minimize $P_R(x_1, x_2) = x_1^2 + x_2^2 + R(x_1 + x_2 - 1)^2$

Let's find the unconstrained minimum for a given $R$.
$\frac{\partial P_R}{\partial x_1} = 2x_1 + 2R(x_1 + x_2 - 1)(1) = 0$
$\frac{\partial P_R}{\partial x_2} = 2x_2 + 2R(x_1 + x_2 - 1)(1) = 0$

From these equations:
$x_1 + R(x_1 + x_2 - 1) = 0 \Rightarrow (1+R)x_1 + Rx_2 - R = 0$
$x_2 + R(x_1 + x_2 - 1) = 0 \Rightarrow Rx_1 + (1+R)x_2 - R = 0$

Subtracting the second equation from the first:
$(1+R-R)x_1 + (R-(1+R))x_2 = 0$
$x_1 - x_2 = 0 \Rightarrow x_1 = x_2$

Substitute $x_1 = x_2$ into the first equation:
$(1+R)x_1 + Rx_1 - R = 0$
$(1+2R)x_1 = R$
$x_1 = \frac{R}{1+2R}$

So, $x_1^* = x_2^* = \frac{R}{1+2R}$.

As $R \to \infty$, $x_1^* \to \frac{R}{2R} = \frac{1}{2}$ and $x_2^* \to \frac{R}{2R} = \frac{1}{2}$.
This matches the solution obtained using Lagrange multipliers:
Lagrangian: $L = x_1^2 + x_2^2 + \lambda(x_1 + x_2 - 1)$
$\frac{\partial L}{\partial x_1} = 2x_1 + \lambda = 0$
$\frac{\partial L}{\partial x_2} = 2x_2 + \lambda = 0$
$\frac{\partial L}{\partial \lambda} = x_1 + x_2 - 1 = 0$
From the first two, $x_1 = x_2$. From the third, $2x_1 = 1 \Rightarrow x_1 = 1/2$. So $x_2 = 1/2$.

**Advantages:**

*   Transforms a constrained problem into a series of unconstrained problems, which can be solved using standard methods.
*   Relatively easy to implement.

**Disadvantages:**

*   **Ill-conditioning:** As $R$ becomes very large, the Hessian matrix of the penalty function becomes ill-conditioned, making the unconstrained optimization more difficult.
*   **Convergence:** Requires a sequence of unconstrained optimizations with increasing $R$.
*   **Optimal $\mathbf{x}^*$ is not necessarily the optimal for finite $R$:** The true optimum is approached as $R \to \infty$.

**Textbook/Reference:**

*   S.S. Rao, Section 9.3: "Penalty function methods."
*   Xin-She Yang, Section 5.2.1: "Exterior Penalty Functions."
*   Deb K, Section 4.6: "Penalty Function Methods."

---

#### 4.2. Interior Penalty Function Method (Barrier Method)

The interior penalty function method is primarily used for inequality constraints. However, a concept related to it can be adapted for equality constraints by converting them into two inequality constraints.

**Conversion of Equality to Inequality Constraints:**

An equality constraint $h(\mathbf{x}) = 0$ can be replaced by two inequality constraints:
$h(\mathbf{x}) \le \epsilon$
$-h(\mathbf{x}) \le \epsilon$
where $\epsilon$ is a small positive number.

As $\epsilon \to 0$, these two inequalities converge to the original equality constraint.

**The Barrier Method for Equality Constraints (Conceptual Adaptation):**

While not the typical application, one can conceptualize a barrier approach. The barrier method is characterized by a penalty that becomes infinite as the solution approaches the boundary of the feasible region. For equality constraints, one might think of a penalty that grows very rapidly as the solution deviates from the constraint surface.

A more direct approach for equality constraints is to use methods like Augmented Lagrangian Methods, which combine Lagrange multipliers with penalty terms. However, focusing on the "barrier method" as it's usually understood (for inequalities), its direct application to equality constraints is less common and often involves converting them to inequalities.

**Let's consider a standard Barrier method applied to a problem that *includes* equality constraints that were converted to inequalities.**

Suppose we want to minimize $f(\mathbf{x})$ subject to $h_1(\mathbf{x}) = 0$.
This is converted to: $h_1(\mathbf{x}) \le \epsilon$ and $-h_1(\mathbf{x}) \le \epsilon$.

The barrier function approach for inequality constraints $g_i(\mathbf{x}) \le 0$ is typically of the form:
Minimize $B_r(\mathbf{x}) = f(\mathbf{x}) - r \sum_{i=1}^p \ln(-g_i(\mathbf{x}))$
where $r \to 0^+$.

Applying this to our converted inequalities:
Let $g_1(\mathbf{x}) = h_1(\mathbf{x}) - \epsilon \le 0$ and $g_2(\mathbf{x}) = -h_1(\mathbf{x}) - \epsilon \le 0$.

The barrier function would be:
Minimize $B_r(\mathbf{x}) = f(\mathbf{x}) - r \ln(-(h_1(\mathbf{x}) - \epsilon)) - r \ln(-(-h_1(\mathbf{x}) - \epsilon))$
$B_r(\mathbf{x}) = f(\mathbf{x}) - r \ln(\epsilon - h_1(\mathbf{x})) - r \ln(\epsilon + h_1(\mathbf{x}))$

This approach is more suited when $\epsilon$ is maintained and $r \to 0^+$. The original concept of the barrier method is to stay strictly within the feasible region.

**Algorithm (Conceptual for Equality using Barrier Idea):**

1.  Convert $h_j(\mathbf{x})=0$ into $h_j(\mathbf{x}) \le \epsilon$ and $-h_j(\mathbf{x}) \le \epsilon$.
2.  Start with a large value of $\epsilon$.
3.  Solve the barrier problem: Minimize $B_{r_k}(\mathbf{x}) = f(\mathbf{x}) - r_k \sum_{j=1}^m [\ln(\epsilon - h_j(\mathbf{x})) + \ln(\epsilon + h_j(\mathbf{x}))]$.
4.  If $\epsilon$ is sufficiently small and the solution is satisfactory, stop.
5.  Reduce $\epsilon$ (e.g., $\epsilon_{k+1} = \gamma \epsilon_k$, where $0 < \gamma < 1$) and possibly adjust $r_k$ (e.g., $r_{k+1} = \delta r_k$, where $0 < \delta < 1$).
6.  Go to step 3.

**Important Point to Remember:**

The true barrier method is designed to keep solutions strictly *inside* the feasible region. Its direct application to equality constraints involves converting them to inequalities, which is less direct than penalty methods or Lagrange multipliers. The "barrier" aspect is the $\ln$ term which goes to $-\infty$ as the argument approaches zero.

**Textbook/Reference:**

*   S.S. Rao, Section 9.4: "Interior penalty function methods" (primarily for inequalities).
*   Xin-She Yang, Section 5.2.2: "Interior Penalty Functions (Barrier Methods)."

---

### **5. Other Methods and Extensions**

#### 5.1. Augmented Lagrangian Methods (Method of Multipliers)

These methods combine the features of Lagrange multipliers and penalty functions to overcome some of their individual limitations. They modify the Lagrangian function by adding a penalty term based on the constraint violation.

**Augmented Lagrangian for Equality Constraints:**

Minimize $\Phi_k(\mathbf{x}) = f(\mathbf{x}) + \sum_{j=1}^m \left[ \lambda_j^k h_j(\mathbf{x}) + \frac{R_k}{2} [h_j(\mathbf{x})]^2 \right]$

**Algorithm:**

1.  Initialize $\boldsymbol{\lambda}^1$, $R_1$.
2.  Solve the unconstrained problem: Minimize $\Phi_k(\mathbf{x})$. Let the solution be $\mathbf{x}_{k+1}^*$.
3.  Update the Lagrange multipliers: $\lambda_j^{k+1} = \lambda_j^k + R_k h_j(\mathbf{x}_{k+1}^*)$.
4.  Update the penalty parameter: If convergence is slow, increase $R_{k+1} = \beta R_k$ ($\beta > 1$). Otherwise, keep $R_{k+1} = R_k$.
5.  Check for convergence. If not converged, go to step 2.

**Advantages:**

*   Avoids the ill-conditioning of pure penalty methods.
*   Can achieve convergence with a finite value of $R_k$, unlike pure penalty methods where $R \to \infty$.

**Textbook/Reference:**

*   S.S. Rao, Section 9.5: "Augmented Lagrangian methods."
*   Xin-She Yang, Section 5.3: "Augmented Lagrangian Methods."

---

### **6. Summary and Comparison**

| Method                       | Core Idea                                                                                              | Strengths                                                                  | Weaknesses                                                                        | Best Suited For                                                                 |
| :--------------------------- | :----------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| **Variable Elimination**     | Algebraically eliminate variables using constraints.                                                   | Simple for easily solvable constraints; reduces to unconstrained problem. | Not generally applicable; complex algebraic manipulation; fails for inequalities. | Problems with simple, linear equality constraints.                              |
| **Lagrange Multipliers**     | Introduce multipliers to form Lagrangian; solve system of first-order conditions.                      | Provides necessary (and often sufficient) conditions; mathematically rigorous. | Solving the system of $n+m$ equations can be difficult; no direct algorithm.    | Problems where optimality conditions can be easily solved analytically.         |
| **Exterior Penalty Method**  | Add a penalty for constraint violation to the objective; increase penalty parameter $R \to \infty$.     | Transforms to unconstrained problems; relatively easy to implement.        | Ill-conditioning; requires sequence of optimizations; theoretical $R \to \infty$. | Problems where constraints can be violated during search without severe penalty. |
| **Interior Penalty (Barrier)** | Add a penalty that grows infinitely as constraints are approached from inside (primarily for inequalities). | Keeps solutions within the feasible region.                                | Primarily for inequalities; direct application to equalities requires conversion. | Problems with inequality constraints where staying feasible is critical.        |
| **Augmented Lagrangian**     | Combines Lagrange multipliers and penalty terms.                                                       | Avoids ill-conditioning; convergence with finite $R$.                      | More complex than pure methods.                                                   | Robust method for various constrained optimization problems.                  |

**Important Point to Remember:**

The choice of method depends on the nature of the objective function and constraints. For simple equality constraints, variable elimination or Lagrange multipliers might be sufficient. For more complex problems, penalty or augmented Lagrangian methods are often preferred.

---

### **7. Practice Questions and Exercises**

**Question 1 (CO4 - K3):**
Minimize $f(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2$
Subject to: $h_1(x_1, x_2) = x_1 - x_2 + 1 = 0$

(a) Solve this problem using the method of Lagrange multipliers.
(b) Solve this problem using the exterior penalty function method with $R=100$.

**Answer 1:**

**(a) Lagrange Multipliers:**
Lagrangian: $L(x_1, x_2, \lambda_1) = (x_1 - 2)^2 + (x_2 - 3)^2 + \lambda_1(x_1 - x_2 + 1)$
Gradient conditions:
$\frac{\partial L}{\partial x_1} = 2(x_1 - 2) + \lambda_1 = 0 \Rightarrow x_1 - 2 = -\frac{\lambda_1}{2} \Rightarrow x_1 = 2 - \frac{\lambda_1}{2}$
$\frac{\partial L}{\partial x_2} = 2(x_2 - 3) - \lambda_1 = 0 \Rightarrow x_2 - 3 = \frac{\lambda_1}{2} \Rightarrow x_2 = 3 + \frac{\lambda_1}{2}$
$\frac{\partial L}{\partial \lambda_1} = x_1 - x_2 + 1 = 0$

Substitute $x_1$ and $x_2$ into the constraint:
$(2 - \frac{\lambda_1}{2}) - (3 + \frac{\lambda_1}{2}) + 1 = 0$
$2 - \frac{\lambda_1}{2} - 3 - \frac{\lambda_1}{2} + 1 = 0$
$- \lambda_1 = 0 \Rightarrow \lambda_1 = 0$

Now find $x_1, x_2$:
$x_1 = 2 - \frac{0}{2} = 2$
$x_2 = 3 + \frac{0}{2} = 3$
Optimal solution: $(2, 3)$.

**(b) Exterior Penalty Function ($R=100$):**
Penalty function: $P_{100}(x_1, x_2) = (x_1 - 2)^2 + (x_2 - 3)^2 + 100(x_1 - x_2 + 1)^2$
Find unconstrained minimum:
$\frac{\partial P_{100}}{\partial x_1} = 2(x_1 - 2) + 200(x_1 - x_2 + 1)(1) = 0$
$\frac{\partial P_{100}}{\partial x_2} = 2(x_2 - 3) + 200(x_1 - x_2 + 1)(-1) = 0$

Simplify:
$x_1 - 2 + 100(x_1 - x_2 + 1) = 0 \Rightarrow 101x_1 - 100x_2 + 98 = 0$
$x_2 - 3 - 100(x_1 - x_2 + 1) = 0 \Rightarrow -100x_1 + 101x_2 - 103 = 0$

From the first equation: $100x_2 = 101x_1 + 98 \Rightarrow x_2 = 1.01x_1 + 0.98$
Substitute into the second equation:
$-100x_1 + 101(1.01x_1 + 0.98) - 103 = 0$
$-100x_1 + 102.01x_1 + 98.98 - 103 = 0$
$2.01x_1 - 4.02 = 0$
$x_1 = \frac{4.02}{2.01} = 2$

Now find $x_2$:
$x_2 = 1.01(2) + 0.98 = 2.02 + 0.98 = 3$
Approximate solution for $R=100$: $(2, 3)$.

---

**Question 2 (CO4 - K3):**
Consider the problem:
Minimize $f(x_1, x_2) = x_1^2 + x_2^2$
Subject to: $h_1(x_1, x_2) = x_1 + x_2 - 2 = 0$

(a) Explain how you would use the method of Lagrange multipliers to solve this problem.
(b) Formulate the exterior penalty function for this problem.

**Answer 2:**

**(a) Lagrange Multipliers:**
The Lagrangian function would be $L(x_1, x_2, \lambda_1) = x_1^2 + x_2^2 + \lambda_1(x_1 + x_2 - 2)$.
To find the stationary points, we would set the partial derivatives with respect to $x_1$, $x_2$, and $\lambda_1$ to zero:
$\frac{\partial L}{\partial x_1} = 2x_1 + \lambda_1 = 0$
$\frac{\partial L}{\partial x_2} = 2x_2 + \lambda_1 = 0$
$\frac{\partial L}{\partial \lambda_1} = x_1 + x_2 - 2 = 0$
Solving these three equations simultaneously would give the optimal values for $x_1$, $x_2$, and $\lambda_1$.

**(b) Exterior Penalty Function:**
The exterior penalty function for this problem would be:
$P_R(x_1, x_2) = x_1^2 + x_2^2 + R(x_1 + x_2 - 2)^2$
where $R$ is a large positive penalty parameter.

---

### **8. Key Points to Remember**

*   **Equality constraints** must be satisfied exactly.
*   **Variable elimination** is direct but limited by algebraic complexity.
*   **Lagrange multipliers** provide optimality conditions by transforming the problem via the Lagrangian function.
*   **Penalty function methods** convert constrained problems into a sequence of unconstrained ones by adding penalties for constraint violation.
*   **Exterior penalty methods** penalize constraint violation. As the penalty parameter $R$ increases, the solution approaches the feasible region. A drawback is potential ill-conditioning for large $R$.
*   **Interior penalty (barrier) methods** are primarily for inequalities and keep solutions within the feasible region by introducing a penalty that becomes infinite at the boundary.
*   **Augmented Lagrangian methods** combine the benefits of Lagrange multipliers and penalty methods, offering more robust convergence.
*   The choice of method depends on the problem structure, complexity of constraints, and desired accuracy.

---

### **9. Learning Outcomes Covered**

*   **CO1 (K2):** Formulating optimization problems, which is the basis of understanding constrained optimization. (Addressed in introduction and problem formulations).
*   **CO4 (K3):** Applying various optimization techniques to solve constrained optimization problems. (Directly addressed by explaining and exemplifying Lagrange Multipliers, Penalty Methods, and mentioning Augmented Lagrangian Methods).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **10. Relevant Textbooks and References**

*   **Engineering Optimization, Theory and Practice by S.S RAO (4th Edition ,2012):** Essential for detailed explanations of Lagrange multipliers, penalty functions, and augmented Lagrangian methods (Chapters 9).
*   **Optimization Techniques and Applications with Examples by Xin-She Yang (2018):** Provides broader context and applications.
*   **Optimization for Engineering Design Algorithms and Examples by Deb K (2000):** Offers practical algorithmic details.
*   **An introduction to optimization by Edwin KP Chong, Stanislaw, H Hak (Fourth Edition, 2013):** Good for theoretical underpinnings of optimality conditions.

---