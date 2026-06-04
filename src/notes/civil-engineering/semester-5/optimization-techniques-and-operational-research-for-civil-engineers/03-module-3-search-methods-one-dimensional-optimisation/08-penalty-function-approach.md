---
title: "Penalty function approach."
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 3: Search Methods: One dimensional optimisation"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810faf"
status: "completed"
scrapedAt: "2026-05-20T18:50:47.569Z"
---
# Module 3: Search Methods: One-Dimensional Optimization

## Topic: Penalty Function Approach

This module focuses on one-dimensional optimization techniques, which are used to find the minimum or maximum of a function of a single variable. The penalty function approach is a powerful method for handling constrained optimization problems by transforming them into unconstrained ones.

### 1. Introduction to Constrained Optimization

In Civil Engineering, many optimization problems involve constraints. For example, when designing a beam, there might be constraints on the material strength, allowable deflection, and geometric dimensions.

**Definition:** A constrained optimization problem is one where we want to minimize or maximize an objective function subject to certain constraints (equality or inequality).

**General Form of a Constrained Optimization Problem:**

Minimize $f(x)$
Subject to:
$g_i(x) \le 0$, for $i = 1, 2, ..., m$ (inequality constraints)
$h_j(x) = 0$, for $j = 1, 2, ..., p$ (equality constraints)

where $x$ is the decision variable vector.

For one-dimensional optimization, the problem is:

Minimize $f(x)$
Subject to:
$g_i(x) \le 0$, for $i = 1, 2, ..., m$
$h_j(x) = 0$, for $j = 1, 2, ..., p$

### 2. The Concept of Penalty Functions

The penalty function approach is a technique to convert a constrained optimization problem into an unconstrained one by adding a "penalty" to the objective function whenever a constraint is violated. This penalty increases as the violation of the constraint becomes more severe.

**Key Idea:** By adding a penalty term that grows infinitely large as a constraint is violated, we effectively discourage the optimization process from moving into infeasible regions.

### 3. Types of Penalty Functions

We can categorize penalty functions based on the type of constraints they handle:

#### 3.1 Penalty Functions for Inequality Constraints ($g_i(x) \le 0$)

These functions add a penalty when $g_i(x) > 0$.

*   **Hestenes-Powell-Rockafellar (HPR) Penalty Function (also known as Interior Penalty or Barrier Function):** This type of penalty function is used when we want to stay *within* the feasible region. The penalty approaches infinity as we approach the boundary of the feasible region from the interior.

    **Common Form:**
    $P(x, r) = f(x) + r \sum_{i=1}^{m} \frac{1}{g_i(x)}$

    *   **Explanation:**
        *   $f(x)$: The original objective function.
        *   $r$: A positive penalty parameter, usually starting with a large value and decreasing in subsequent iterations.
        *   $\frac{1}{g_i(x)}$: The penalty term. As $g_i(x)$ approaches 0 from the positive side (meaning we are approaching the boundary of the feasible region), the term $\frac{1}{g_i(x)}$ becomes very large.

    **Note:** This is actually an *exterior* penalty function for the problem formulated as $g_i(x) \ge 0$. For $g_i(x) \le 0$, we typically use barrier functions. Let's clarify the common formulations for one-dimensional problems.

    **Let's re-examine the typical penalty function formulations for one-dimensional problems:**

    *   **Exterior Penalty Functions (for $g_i(x) \le 0$):** These functions penalize violations of the constraint, meaning they are active when $g_i(x) > 0$.
        *   **Quadratic Penalty Function:**
            $P(x, r) = f(x) + r \sum_{i=1}^{m} [\max(0, g_i(x))]^2$
            *   **Explanation:** The penalty term is $r$ times the square of the violation. If $g_i(x)$ is negative (feasible), the term is 0. If $g_i(x)$ is positive (infeasible), the term is $r \cdot (g_i(x))^2$.
        *   **Example:** Minimize $f(x) = x^2$ subject to $x \le 2$ (i.e., $g_1(x) = x - 2 \le 0$).
            The penalty function would be $P(x, r) = x^2 + r[\max(0, x - 2)]^2$.
            If $x = 3$ (infeasible), penalty is $r(3-2)^2 = r$.
            If $x = 1$ (feasible), penalty is $0$.

    *   **Interior Penalty (Barrier) Functions (for $g_i(x) < 0$, or more practically, $g_i(x) \le 0$ with interior behavior):** These functions penalize approaching the boundary from the interior, i.e., when $g_i(x)$ is close to 0 and negative.
        *   **Logarithmic Barrier Function:**
            $P(x, r) = f(x) - r \sum_{i=1}^{m} \log(-g_i(x))$
            *   **Explanation:** As $g_i(x)$ approaches 0 from the negative side, $-g_i(x)$ approaches 0 from the positive side. The term $\log(-g_i(x))$ becomes infinitely negative. Since we are subtracting this term, the penalty term becomes infinitely positive, pushing the solution away from the boundary.
        *   **Example:** Minimize $f(x) = x^2$ subject to $x \le 2$ (i.e., $g_1(x) = x - 2 \le 0$).
            The penalty function would be $P(x, r) = x^2 - r \log(-(x - 2)) = x^2 - r \log(2 - x)$.
            If $x = 1.9$ (close to boundary), penalty is $-r \log(0.1)$, which is a large positive value.
            If $x = 0$, penalty is $0$.

#### 3.2 Penalty Functions for Equality Constraints ($h_j(x) = 0$)

These functions add a penalty when $h_j(x) \ne 0$.

*   **Quadratic Penalty Function (most common):**
    $P(x, r) = f(x) + r \sum_{j=1}^{p} [h_j(x)]^2$

    *   **Explanation:** The penalty term is $r$ times the square of the deviation from the equality constraint. If $h_j(x) = 0$ (satisfied), the penalty is 0. If $h_j(x) \ne 0$ (violated), the penalty is $r \cdot (h_j(x))^2$.

    *   **Example:** Minimize $f(x) = x^2$ subject to $x = 5$ (i.e., $h_1(x) = x - 5 = 0$).
        The penalty function would be $P(x, r) = x^2 + r(x - 5)^2$.
        If $x = 5$, penalty is $0$.
        If $x = 6$, penalty is $r(6-5)^2 = r$.
        If $x = 4$, penalty is $r(4-5)^2 = r$.

### 4. The Penalty Function Method Algorithm

The penalty function method involves solving a sequence of unconstrained optimization problems, where the penalty parameter $r$ is systematically adjusted.

**General Steps:**

1.  **Initialization:** Choose an initial value for the penalty parameter, say $r_1$. Set a counter $k = 1$.
2.  **Formulate the Unconstrained Problem:** Construct the penalty function $P_k(x)$ for the current value of $r_k$.
    *   For inequality constraints $g_i(x) \le 0$, use $P_k(x) = f(x) + r_k \sum [\max(0, g_i(x))]^2$.
    *   For equality constraints $h_j(x) = 0$, use $P_k(x) = f(x) + r_k \sum [h_j(x)]^2$.
3.  **Solve the Unconstrained Problem:** Find the optimal solution $x_k^*$ for the unconstrained problem by minimizing $P_k(x)$. This can be done using any unconstrained optimization method (e.g., golden section search, Fibonacci search, Newton's method).
4.  **Update the Penalty Parameter:** Decrease the penalty parameter $r_{k+1} = \alpha r_k$, where $\alpha$ is a reduction factor ($0 < \alpha < 1$). A common choice for $\alpha$ is 0.1 or 0.5.
5.  **Check for Convergence:** If a convergence criterion is met (e.g., the change in $x^*$ between iterations is small, or the constraint violation is negligible), stop. Otherwise, increment $k$ and go back to step 2.

**Convergence Criteria Examples:**

*   $||x_{k+1}^* - x_k^*|| < \epsilon_1$
*   $|\frac{P_{k+1}(x_{k+1}^*) - P_k(x_k^*)}{P_k(x_k^*)}| < \epsilon_2$
*   Maximum constraint violation $< \epsilon_3$

### 5. Advantages and Disadvantages of the Penalty Function Approach

#### 5.1 Advantages

*   **Simplicity:** Converts a constrained problem into a sequence of unconstrained problems, which are generally easier to solve.
*   **Robustness:** Can handle a wide variety of objective functions and constraints.
*   **Conceptual Clarity:** The idea of penalizing violations is intuitive.

#### 5.2 Disadvantages

*   **Ill-Conditioning:** As $r$ becomes very large, the penalty function can become "ill-conditioned," meaning its Hessian matrix has a very large condition number. This can make the unconstrained optimization steps numerically unstable or slow to converge.
*   **Choosing $r$:** The initial choice of $r$ and the reduction factor $\alpha$ can significantly impact performance. If $r$ is too small, constraints might be violated. If $r$ is too large, the problem can be ill-conditioned.
*   **Suboptimal Solutions:** If $r$ is not increased sufficiently, the method might converge to a point that is feasible but not optimal for the original problem.
*   **Boundary Issues with Barrier Functions:** Barrier functions require starting in the interior of the feasible region.

### 6. Practical Considerations for Civil Engineers

*   **Numerical Stability:** Be mindful of the ill-conditioning issue. Use appropriate algorithms for solving the unconstrained subproblems that are less sensitive to ill-conditioning.
*   **Constraint Handling:** Clearly identify all inequality and equality constraints. Ensure the penalty functions are correctly formulated for each type.
*   **Convergence Monitoring:** Implement robust convergence criteria to ensure the solution is sufficiently accurate and satisfies the constraints.
*   **Computational Cost:** Solving a sequence of unconstrained problems can be computationally expensive, especially if the unconstrained subproblems are difficult to solve.

### 7. Example: Minimizing a Function with an Inequality Constraint

**Problem:** Minimize $f(x) = (x - 3)^2$ subject to $x \le 5$.

**Learning Outcome Covered:** Understanding how to apply penalty functions to inequality constraints.

**1. Formulate the penalty function:**
The constraint is $g_1(x) = x - 5 \le 0$.
We will use the quadratic exterior penalty function:
$P(x, r) = f(x) + r[\max(0, g_1(x))]^2$
$P(x, r) = (x - 3)^2 + r[\max(0, x - 5)]^2$

**2. Algorithm Steps:**

*   **Iteration 1:** Let $r_1 = 10$.
    $P(x, 10) = (x - 3)^2 + 10[\max(0, x - 5)]^2$
    We need to find the minimum of $P(x, 10)$.

    *   **Case 1: $x \le 5$ (feasible region for the constraint)**
        $P(x, 10) = (x - 3)^2$.
        To minimize this, we find the derivative: $P'(x, 10) = 2(x - 3)$.
        Setting $P'(x, 10) = 0$, we get $x = 3$.
        Since $x = 3$ is within the assumed region $x \le 5$, this is a potential minimum.

    *   **Case 2: $x > 5$ (infeasible region for the constraint)**
        $P(x, 10) = (x - 3)^2 + 10(x - 5)^2$.
        Find the derivative: $P'(x, 10) = 2(x - 3) + 20(x - 5)$.
        $P'(x, 10) = 2x - 6 + 20x - 100 = 22x - 106$.
        Setting $P'(x, 10) = 0$, we get $22x = 106 \implies x = \frac{106}{22} = \frac{53}{11} \approx 4.818$.
        However, this solution ($x \approx 4.818$) falls into the region $x \le 5$, which contradicts our assumption for Case 2 ($x > 5$). This means the minimum in the region $x > 5$ is at the boundary $x = 5$.

    Let's analyze the function $P(x, 10)$:
    For $x \le 5$, the minimum is at $x = 3$, with $P(3, 10) = (3-3)^2 = 0$.
    For $x > 5$, $P(x, 10) = (x - 3)^2 + 10(x - 5)^2$.
    At $x=5$, $P(5, 10) = (5-3)^2 + 10(5-5)^2 = 2^2 + 0 = 4$.
    The derivative for $x > 5$ is $22x - 106$. At $x=5$, the derivative is $22(5) - 106 = 110 - 106 = 4$, which is positive. This means the function is increasing for $x > 5$ from $x=5$ onwards.
    Therefore, the minimum of $P(x, 10)$ occurs at $x_1^* = 3$.

*   **Iteration 2:** Decrease $r$. Let $r_2 = 0.1 \cdot r_1 = 1$.
    $P(x, 1) = (x - 3)^2 + 1[\max(0, x - 5)]^2$
    Again, we need to find the minimum.
    *   **Case 1: $x \le 5$**
        $P(x, 1) = (x - 3)^2$. Minimum is at $x = 3$. $P(3, 1) = 0$.
    *   **Case 2: $x > 5$**
        $P(x, 1) = (x - 3)^2 + (x - 5)^2$.
        $P'(x, 1) = 2(x - 3) + 2(x - 5) = 2x - 6 + 2x - 10 = 4x - 16$.
        Setting $P'(x, 1) = 0$, we get $4x = 16 \implies x = 4$.
        This solution ($x = 4$) contradicts the assumption $x > 5$. So, the minimum for $x > 5$ is at the boundary $x = 5$.
        At $x=5$, $P(5, 1) = (5-3)^2 + (5-5)^2 = 2^2 + 0 = 4$.

    The minimum of $P(x, 1)$ occurs at $x_2^* = 3$.

*   **Convergence:** In this simple example, the minimum remains at $x=3$ for both iterations. The original problem's minimum is indeed at $x=3$ (value $f(3)=0$). The constraint $x \le 5$ is satisfied by $x=3$.

**Let's consider a case where the unconstrained minimum violates the constraint:**

**Problem:** Minimize $f(x) = (x - 6)^2$ subject to $x \le 5$.

**1. Formulate the penalty function:**
$g_1(x) = x - 5 \le 0$.
$P(x, r) = (x - 6)^2 + r[\max(0, x - 5)]^2$

**2. Algorithm Steps:**

*   **Iteration 1:** Let $r_1 = 10$.
    $P(x, 10) = (x - 6)^2 + 10[\max(0, x - 5)]^2$

    *   **Case 1: $x \le 5$**
        $P(x, 10) = (x - 6)^2$.
        $P'(x, 10) = 2(x - 6)$.
        Setting $P'(x, 10) = 0 \implies x = 6$.
        This solution ($x=6$) contradicts the assumption $x \le 5$. So the minimum in this region is at the boundary $x=5$.
        At $x=5$, $P(5, 10) = (5-6)^2 + 10[\max(0, 5-5)]^2 = (-1)^2 + 0 = 1$.

    *   **Case 2: $x > 5$**
        $P(x, 10) = (x - 6)^2 + 10(x - 5)^2$.
        $P'(x, 10) = 2(x - 6) + 20(x - 5) = 2x - 12 + 20x - 100 = 22x - 112$.
        Setting $P'(x, 10) = 0 \implies 22x = 112 \implies x = \frac{112}{22} = \frac{56}{11} \approx 5.091$.
        This solution ($x \approx 5.091$) lies in the region $x > 5$, so this is the minimum for this case.
        The minimum value is $P(\frac{56}{11}, 10) = (\frac{56}{11} - 6)^2 + 10(\frac{56}{11} - 5)^2$
        $= (\frac{56 - 66}{11})^2 + 10(\frac{56 - 55}{11})^2 = (\frac{-10}{11})^2 + 10(\frac{1}{11})^2$
        $= \frac{100}{121} + \frac{10}{121} = \frac{110}{121} = \frac{10}{11} \approx 0.909$.

    Comparing the values at the boundaries and within the regions, the minimum of $P(x, 10)$ occurs at $x_1^* = \frac{56}{11}$.

*   **Iteration 2:** Let $r_2 = 0.1 \cdot r_1 = 1$.
    $P(x, 1) = (x - 6)^2 + 1[\max(0, x - 5)]^2$

    *   **Case 1: $x \le 5$**
        $P(x, 1) = (x - 6)^2$. Minimum at $x=6$, but this is outside $x \le 5$. Minimum on the boundary is at $x=5$, $P(5, 1) = (5-6)^2 = 1$.

    *   **Case 2: $x > 5$**
        $P(x, 1) = (x - 6)^2 + (x - 5)^2$.
        $P'(x, 1) = 2(x - 6) + 2(x - 5) = 2x - 12 + 2x - 10 = 4x - 22$.
        Setting $P'(x, 1) = 0 \implies 4x = 22 \implies x = \frac{22}{4} = \frac{11}{2} = 5.5$.
        This solution ($x=5.5$) lies in the region $x > 5$. This is the minimum for this case.
        The minimum value is $P(5.5, 1) = (5.5 - 6)^2 + (5.5 - 5)^2 = (-0.5)^2 + (0.5)^2 = 0.25 + 0.25 = 0.5$.

    Comparing $P(5, 1) = 1$ and $P(5.5, 1) = 0.5$, the minimum of $P(x, 1)$ occurs at $x_2^* = 5.5$.

*   **Iteration 3:** Let $r_3 = 0.1 \cdot r_2 = 0.1$.
    $P(x, 0.1) = (x - 6)^2 + 0.1[\max(0, x - 5)]^2$

    *   **Case 1: $x \le 5$**
        $P(x, 0.1) = (x - 6)^2$. Minimum at $x=6$, outside region. Boundary minimum at $x=5$, $P(5, 0.1) = (5-6)^2 = 1$.

    *   **Case 2: $x > 5$**
        $P(x, 0.1) = (x - 6)^2 + 0.1(x - 5)^2$.
        $P'(x, 0.1) = 2(x - 6) + 0.2(x - 5) = 2x - 12 + 0.2x - 1 = 2.2x - 13$.
        Setting $P'(x, 0.1) = 0 \implies 2.2x = 13 \implies x = \frac{13}{2.2} = \frac{130}{22} = \frac{65}{11} \approx 5.909$.
        This solution ($x \approx 5.909$) lies in the region $x > 5$. This is the minimum for this case.
        The minimum value is $P(\frac{65}{11}, 0.1) = (\frac{65}{11} - 6)^2 + 0.1(\frac{65}{11} - 5)^2$
        $= (\frac{65 - 66}{11})^2 + 0.1(\frac{65 - 55}{11})^2 = (\frac{-1}{11})^2 + 0.1(\frac{10}{11})^2$
        $= \frac{1}{121} + 0.1(\frac{100}{121}) = \frac{1}{121} + \frac{10}{121} = \frac{11}{121} = \frac{1}{11} \approx 0.0909$.

    The minimum of $P(x, 0.1)$ occurs at $x_3^* = \frac{65}{11}$.

**Convergence Check:**
$x_1^* \approx 5.091$
$x_2^* = 5.5$
$x_3^* \approx 5.909$

The values of $x_k^*$ are moving towards the unconstrained minimum of $f(x)=(x-6)^2$, which is $x=6$. However, our constraint is $x \le 5$. As $r$ decreases, the penalty for violating $x \le 5$ becomes less significant. The solutions are approaching the true unconstrained minimum at $x=6$.

**Important Note:** For this specific problem, the optimal solution subject to $x \le 5$ is not the unconstrained minimum of $f(x)$. The original function $f(x)=(x-6)^2$ is minimized at $x=6$. However, due to the constraint $x \le 5$, the feasible region is restricted. The minimum of $f(x)$ within the feasible region $x \le 5$ occurs at $x=5$, where $f(5) = (5-6)^2 = 1$.

The penalty function method, when correctly applied with decreasing $r$, should converge to a solution that satisfies the constraints. Let's re-examine the logic for minimizing the penalty function correctly.

**Correct Minimization of $P(x, r)$:**

For $P(x, r) = (x - 6)^2 + r[\max(0, x - 5)]^2$:

*   If the true minimum of $P(x,r)$ occurs at $x^* \le 5$, then the term $[\max(0, x - 5)]^2$ is 0. So $P(x,r) = (x - 6)^2$. The minimum of this is at $x=6$, which contradicts $x \le 5$. Thus, for $x \le 5$, the minimum of $P(x,r)$ will be at $x=5$. $P(5, r) = (5-6)^2 + r[\max(0, 5-5)]^2 = 1$.

*   If the true minimum of $P(x,r)$ occurs at $x^* > 5$, then $P(x,r) = (x - 6)^2 + r(x - 5)^2$.
    $P'(x,r) = 2(x - 6) + 2r(x - 5) = 2x - 12 + 2rx - 10r = (2+2r)x - (12+10r)$.
    Setting $P'(x,r) = 0$, we get $x = \frac{12+10r}{2+2r} = \frac{6+5r}{1+r}$.
    We need to ensure that this $x$ is indeed $> 5$.
    $\frac{6+5r}{1+r} > 5 \implies 6+5r > 5(1+r) \implies 6+5r > 5+5r \implies 6 > 5$. This is always true for any $r > 0$.
    So, the minimum for $x > 5$ is at $x^* = \frac{6+5r}{1+r}$.

**Summary of minima for $P(x,r)$:**
The minimum value of $P(x,r)$ will be the smaller of $P(5,r)=1$ and $P(x^*,r) = (\frac{6+5r}{1+r} - 6)^2 + r(\frac{6+5r}{1+r} - 5)^2$.
$x^* - 6 = \frac{6+5r}{1+r} - 6 = \frac{6+5r - 6(1+r)}{1+r} = \frac{6+5r-6-6r}{1+r} = \frac{-r}{1+r}$.
$x^* - 5 = \frac{6+5r}{1+r} - 5 = \frac{6+5r - 5(1+r)}{1+r} = \frac{6+5r-5-5r}{1+r} = \frac{1}{1+r}$.
So, $P(x^*,r) = (\frac{-r}{1+r})^2 + r(\frac{1}{1+r})^2 = \frac{r^2}{(1+r)^2} + \frac{r}{(1+r)^2} = \frac{r^2+r}{(1+r)^2} = \frac{r(r+1)}{(1+r)^2} = \frac{r}{1+r}$.

**Now, compare $P(5,r)=1$ and $P(x^*,r) = \frac{r}{1+r}$:**
We need to find when $\frac{r}{1+r} < 1$.
$\frac{r}{1+r} < 1 \implies r < 1+r \implies 0 < 1$, which is always true.
So, for any $r>0$, the minimum value of $P(x,r)$ is $\frac{r}{1+r}$ occurring at $x^* = \frac{6+5r}{1+r}$.

**Iteration 1 ($r_1=10$):** $x_1^* = \frac{6+5(10)}{1+10} = \frac{56}{11} \approx 5.091$. The value of $P(x_1^*, r_1) = \frac{10}{1+10} = \frac{10}{11} \approx 0.909$. This matches our previous calculation.

**Iteration 2 ($r_2=1$):** $x_2^* = \frac{6+5(1)}{1+1} = \frac{11}{2} = 5.5$. The value of $P(x_2^*, r_2) = \frac{1}{1+1} = \frac{1}{2} = 0.5$. This matches our previous calculation.

**Iteration 3 ($r_3=0.1$):** $x_3^* = \frac{6+5(0.1)}{1+0.1} = \frac{6.5}{1.1} = \frac{65}{11} \approx 5.909$. The value of $P(x_3^*, r_3) = \frac{0.1}{1+0.1} = \frac{0.1}{1.1} = \frac{1}{11} \approx 0.0909$. This matches our previous calculation.

As $r$ decreases, $x^* = \frac{6+5r}{1+r}$ approaches 6.
The penalty function method is designed to converge to the *constrained* optimum. In this example, the constraint is $x \le 5$, and the minimum of $f(x)=(x-6)^2$ is at $x=6$. The penalty function method here is driving the solution towards the unconstrained optimum, not the constrained optimum.

**What went wrong in the interpretation or example?**
The penalty function method *transforms* the problem. We are minimizing the penalty function. For the penalty function to correctly lead us to the constrained optimum, the penalty for violating the constraint must be sufficiently high to "pull" the solution back into the feasible region.

Let's reconsider the objective. We want to minimize $f(x) = (x-6)^2$ subject to $x \le 5$. The true constrained minimum is at $x=5$.

Let's analyze $P(x,r) = (x-6)^2 + r[\max(0, x-5)]^2$ again.
The minimum of $P(x,r)$ is either at $x=5$ (if the minimum of the penalty term part occurs outside $x \le 5$) or at $x = \frac{6+5r}{1+r}$ (if the minimum of the unpenalized part occurs inside $x > 5$).

**The penalty function is constructed to discourage violation.**
When $r$ is large, the term $r[\max(0, x - 5)]^2$ dominates.
If $x=5$, $P(5,r) = (5-6)^2 + r(0)^2 = 1$.
If $x=5+\epsilon$ (a small positive $\epsilon$), $P(5+\epsilon, r) = (5+\epsilon-6)^2 + r(5+\epsilon-5)^2 = (-1+\epsilon)^2 + r\epsilon^2 \approx 1 - 2\epsilon + \epsilon^2 + r\epsilon^2$.
For the solution to be at $x=5$, the derivative of $P(x,r)$ at $x=5$ must be non-negative.

Let's look at the derivative of $P(x,r)$ for $x \ge 5$ (where the penalty is active):
$P'(x,r) = 2(x-6) + 2r(x-5)$.
At $x=5$, $P'(5,r) = 2(5-6) + 2r(5-5) = 2(-1) + 0 = -2$.
Since the derivative is negative at $x=5$ for the region $x \ge 5$, the minimum must lie to the right of $x=5$.
This implies that $x^* = \frac{6+5r}{1+r}$ is indeed the minimum of $P(x,r)$.

The problem description states that the penalty function approach converts a constrained problem into an unconstrained one. We solve the unconstrained problem at each iteration. The sequence of solutions $x_k^*$ should converge to the constrained optimum.

**Let's check the original objective function $f(x)=(x-6)^2$ and constraint $x \le 5$.**
The unconstrained minimum of $f(x)$ is at $x=6$.
The feasible region is $x \in (-\infty, 5]$.
Since the unconstrained minimum $x=6$ is outside the feasible region, the minimum of $f(x)$ over the feasible region will occur at the boundary closest to the unconstrained minimum, which is $x=5$.
So the constrained minimum is at $x=5$, with $f(5)=1$.

Why are our $x_k^*$ converging to 6 and not 5?
The penalty method aims to make the unconstrained minimum coincide with the constrained minimum.
When $r$ is very large, the penalty term $r(\max(0, x-5))^2$ is very large for $x>5$. This effectively "pushes" the minimum away from the region $x>5$.

Let's reconsider the comparison of $P(5,r)=1$ and $P(x^*,r) = \frac{r}{1+r}$.
The minimum of $P(x,r)$ is $P_{min} = \min(P(5,r), P(x^*,r))$.
This is not how we find the minimum of $P(x,r)$. We find the minimum of $P(x,r)$ by setting its derivative to zero.

The derivative $P'(x,r) = (2+2r)x - (12+10r)$.
The minimum occurs at $x^* = \frac{12+10r}{2+2r} = \frac{6+5r}{1+r}$.
This assumes that the minimum occurs where the derivative is zero.

**The issue arises from the "max" function.** The function $P(x,r)$ is not differentiable at $x=5$. We need to analyze the behavior around $x=5$.

For $x \le 5$, $P(x,r) = (x-6)^2$. The minimum of this is at $x=6$, but this is outside the region $x \le 5$. So, within $x \le 5$, the minimum occurs at $x=5$, with $P(5,r)=1$.

For $x > 5$, $P(x,r) = (x-6)^2 + r(x-5)^2$. The minimum is at $x^* = \frac{6+5r}{1+r}$.
The value at this minimum is $P(x^*,r) = \frac{r}{1+r}$.

The minimum of $P(x,r)$ is the smaller of these two values.
We compare $1$ and $\frac{r}{1+r}$.
We already established $\frac{r}{1+r} < 1$ for all $r>0$.
Therefore, the minimum of $P(x,r)$ is always at $x^* = \frac{6+5r}{1+r}$ for $r>0$.

The sequence $x_k^*$ converges to 6. This implies that the penalty function approach, with this specific penalty formulation and how we analyze the minimum, doesn't seem to be converging to $x=5$.

**Revisiting Penalty Function Theory:**
The penalty function method seeks to minimize $P(x, r_k)$. The minimum of $P(x, r_k)$ is $x_k^*$. As $r_k \to \infty$, $x_k^* \to x_{opt}$ (the constrained optimum).
This means we should be increasing $r$, not decreasing it. Or, if we decrease $r$, the penalty becomes less effective.

**Let's switch to the standard formulation:** Increase $r$ and check convergence.

**Revised Penalty Function Method Algorithm:**

1.  **Initialization:** Choose an initial penalty parameter $r_1 > 0$. Let $k=1$.
2.  **Formulate Penalty Function:** $P_k(x) = f(x) + r_k \sum [\max(0, g_i(x))]^2$ (for inequality constraints).
3.  **Solve Unconstrained Problem:** Find $x_k^*$ by minimizing $P_k(x)$.
4.  **Check Convergence:** If constraint violation at $x_k^*$ is sufficiently small and the change in $x_k^*$ is small, stop.
5.  **Update Penalty Parameter:** Increase $r_{k+1} = \beta r_k$, where $\beta > 1$ (e.g., $\beta = 10$). Increment $k$ and go to step 2.

**Let's try the example again with increasing $r$:**
Minimize $f(x) = (x - 6)^2$ subject to $x \le 5$. Constrained minimum is at $x=5$.

*   **Iteration 1:** Let $r_1 = 10$.
    $P(x, 10) = (x - 6)^2 + 10[\max(0, x - 5)]^2$.
    As analyzed before, the minimum occurs at $x_1^* = \frac{56}{11} \approx 5.091$.

*   **Iteration 2:** Let $r_2 = 10 \cdot 10 = 100$.
    $P(x, 100) = (x - 6)^2 + 100[\max(0, x - 5)]^2$.
    The minimum of $P(x,r)$ for $x>5$ is at $x^* = \frac{6+5r}{1+r}$.
    For $r=100$, $x_2^* = \frac{6+5(100)}{1+100} = \frac{506}{101} \approx 5.0099$.

*   **Iteration 3:** Let $r_3 = 100 \cdot 10 = 1000$.
    $P(x, 1000) = (x - 6)^2 + 1000[\max(0, x - 5)]^2$.
    For $r=1000$, $x_3^* = \frac{6+5(1000)}{1+1000} = \frac{5006}{1001} \approx 5.000999$.

We can see that $x_k^*$ is converging to 5.
The constraint violation at $x_k^*$ is $x_k^* - 5$.
For $r=10$: $x_1^* - 5 = \frac{56}{11} - 5 = \frac{1}{11} \approx 0.091$.
For $r=100$: $x_2^* - 5 = \frac{506}{101} - 5 = \frac{1}{101} \approx 0.0099$.
For $r=1000$: $x_3^* - 5 = \frac{5006}{1001} - 5 = \frac{1}{1001} \approx 0.000999$.

This revised approach (increasing $r$) demonstrates the penalty function method's effectiveness.

### 8. Practice Questions

**Question 1:**
Minimize $f(x) = x^2 - 4x + 10$ subject to $x \ge 2$.
Use the penalty function approach with an increasing penalty parameter. Start with $r_1 = 5$, and increase $r$ by a factor of 10 for subsequent iterations.

**Answer 1:**
The constraint is $x \ge 2$, which can be rewritten as $-(x - 2) \le 0$, or $g_1(x) = 2 - x \le 0$.
We use the penalty function: $P(x, r) = f(x) + r[\max(0, g_1(x))]^2 = x^2 - 4x + 10 + r[\max(0, 2 - x)]^2$.

*   **Iteration 1:** $r_1 = 5$.
    $P(x, 5) = x^2 - 4x + 10 + 5[\max(0, 2 - x)]^2$.
    *   If $x \le 2$ (feasible region): $P(x, 5) = x^2 - 4x + 10$.
        $P'(x, 5) = 2x - 4$. Setting to 0 gives $x = 2$.
        The minimum in this region is at $x=2$. $P(2, 5) = 2^2 - 4(2) + 10 = 4 - 8 + 10 = 6$.
    *   If $x > 2$ (infeasible region): $P(x, 5) = x^2 - 4x + 10 + 5(2 - x)^2$.
        $P(x, 5) = x^2 - 4x + 10 + 5(4 - 4x + x^2) = x^2 - 4x + 10 + 20 - 20x + 5x^2$.
        $P(x, 5) = 6x^2 - 24x + 30$.
        $P'(x, 5) = 12x - 24$. Setting to 0 gives $12x = 24 \implies x = 2$.
        However, this solution $x=2$ is not strictly greater than 2. The derivative $P'(x, 5) = 12x - 24$ is positive for $x > 2$, meaning the function is increasing in this region from $x=2$ onwards.
    The minimum of $P(x, 5)$ occurs at $x_1^* = 2$.

*   **Iteration 2:** $r_2 = 50$.
    $P(x, 50) = x^2 - 4x + 10 + 50[\max(0, 2 - x)]^2$.
    *   If $x \le 2$: $P(x, 50) = x^2 - 4x + 10$. Minimum at $x=2$. $P(2, 50) = 6$.
    *   If $x > 2$: $P(x, 50) = x^2 - 4x + 10 + 50(2 - x)^2$.
        $P'(x, 50) = 2(x - 2) + 100(2 - x)(-1) = 2x - 4 - 100(2 - x) = 2x - 4 - 200 + 100x$.
        $P'(x, 50) = 102x - 204$. Setting to 0 gives $102x = 204 \implies x = 2$.
        Again, the minimum of this part is at $x=2$.

The unconstrained minimum of $f(x) = x^2 - 4x + 10$ occurs at $x=2$. The constraint is $x \ge 2$. The unconstrained minimum is already at the boundary of the feasible region. The penalty method should confirm this.

Let's use a function where the unconstrained minimum is outside the feasible region.

**Question 2:**
Minimize $f(x) = (x - 4)^2$ subject to $x \le 3$.
Use the penalty function approach with an increasing penalty parameter. Start with $r_1 = 10$, and increase $r$ by a factor of 10 for subsequent iterations.

**Answer 2:**
Constraint: $g_1(x) = x - 3 \le 0$.
Penalty function: $P(x, r) = (x - 4)^2 + r[\max(0, x - 3)]^2$.

*   **Iteration 1:** $r_1 = 10$.
    $P(x, 10) = (x - 4)^2 + 10[\max(0, x - 3)]^2$.
    *   If $x \le 3$ (feasible): $P(x, 10) = (x - 4)^2$. Minimum is at $x=4$, which is outside $x \le 3$. So, on the boundary $x=3$, $P(3, 10) = (3-4)^2 = 1$.
    *   If $x > 3$ (infeasible): $P(x, 10) = (x - 4)^2 + 10(x - 3)^2$.
        $P'(x, 10) = 2(x - 4) + 20(x - 3) = 2x - 8 + 20x - 60 = 22x - 68$.
        Setting $P'(x, 10) = 0 \implies 22x = 68 \implies x = \frac{68}{22} = \frac{34}{11} \approx 3.091$.
        This solution is in the region $x > 3$. So $x_1^* = \frac{34}{11}$.

*   **Iteration 2:** $r_2 = 100$.
    $P(x, 100) = (x - 4)^2 + 100[\max(0, x - 3)]^2$.
    *   If $x \le 3$: $P(x, 100) = (x - 4)^2$. Boundary minimum at $x=3$, $P(3, 100) = 1$.
    *   If $x > 3$: $P(x, 100) = (x - 4)^2 + 100(x - 3)^2$.
        $P'(x, 100) = 2(x - 4) + 200(x - 3) = 2x - 8 + 200x - 600 = 202x - 608$.
        Setting $P'(x, 100) = 0 \implies 202x = 608 \implies x = \frac{608}{202} = \frac{304}{101} \approx 3.0099$.
        So $x_2^* = \frac{304}{101}$.

*   **Iteration 3:** $r_3 = 1000$.
    $P(x, 1000) = (x - 4)^2 + 1000[\max(0, x - 3)]^2$.
    *   If $x \le 3$: $P(x, 1000) = (x - 4)^2$. Boundary minimum at $x=3$, $P(3, 1000) = 1$.
    *   If $x > 3$: $P(x, 1000) = (x - 4)^2 + 1000(x - 3)^2$.
        $P'(x, 1000) = 2(x - 4) + 2000(x - 3) = 2x - 8 + 2000x - 6000 = 2002x - 6008$.
        Setting $P'(x, 1000) = 0 \implies 2002x = 6008 \implies x = \frac{6008}{2002} = \frac{3004}{1001} \approx 3.000999$.
        So $x_3^* = \frac{3004}{1001}$.

The sequence $x_k^*$ is converging to 3, which is the constrained optimum.

### 9. Important Points to Remember

*   **Transforming Constraints:** The penalty function method converts a constrained optimization problem into a sequence of unconstrained optimization problems.
*   **Penalty Parameter:** The effectiveness relies on the penalty parameter ($r$). For exterior penalty methods, $r$ is typically increased to "penalize" constraint violations more severely.
*   **Ill-Conditioning:** Be aware that large penalty parameters can lead to ill-conditioned problems, affecting numerical stability.
*   **Convergence:** The sequence of solutions from the unconstrained subproblems should converge to the constrained optimum.
*   **Penalty Formulation:** The choice of penalty function (quadratic, logarithmic barrier, etc.) depends on the type of constraint and the desired behavior. Exterior penalty functions are generally used for inequality constraints $g_i(x) \le 0$ by penalizing $g_i(x) > 0$.
*   **Civil Engineering Applications:** Useful for structural optimization, resource allocation, and other problems where constraints are critical.

---
