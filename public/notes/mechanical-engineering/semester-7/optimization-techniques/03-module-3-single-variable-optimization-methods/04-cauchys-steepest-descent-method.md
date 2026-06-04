---
title: "Cauchy’s (steepest descent) method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 3: Single variable optimization methods"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641d5"
status: "completed"
scrapedAt: "2026-05-20T18:16:02.352Z"
---
# OPTIMIZATION TECHNIQUES

## Module 3: Single Variable Optimization Methods

### Topic: Cauchy's (Steepest Descent) Method

---

### 1. Introduction and Motivation

**Goal:** To find the minimum of a single-variable objective function $f(x)$.

**Context:** This method is a foundational algorithm for unconstrained optimization problems. While primarily discussed for single-variable functions, the underlying principle of moving in the direction of the steepest descent is crucial for understanding multi-variable optimization methods like the general Steepest Descent method.

**Intuition:** Imagine standing on a hill and wanting to reach the lowest point. You would look around and take a step in the direction where the ground slopes downwards most steeply. Cauchy's method applies this intuition to finding the minimum of a function.

**Relevance to Course Outcomes:**
*   **CO3: Find solutions for Nonlinear unconstrained optimization problems (Knowledge Level: K3)** - Cauchy's method is a direct application of finding minima for nonlinear unconstrained functions.
*   **CO4: Apply modern methods of optimization for solving optimization problems (Knowledge Level: K3)** - Understanding Cauchy's method provides the basis for more advanced optimization techniques.

---

### 2. Key Concepts and Definitions

**Objective Function:** A function $f(x)$ that we want to minimize.

**Unconstrained Optimization:** Finding the minimum of a function without any constraints on the variable $x$.

**Local Minimum:** A point $x^*$ such that $f(x^*) \le f(x)$ for all $x$ in a neighborhood around $x^*$.

**Global Minimum:** A point $x^*$ such that $f(x^*) \le f(x)$ for all $x$ in the entire domain of $f$.

**Steepest Descent Direction:** The direction in which the function decreases most rapidly at a given point. For a single-variable function $f(x)$, this direction is opposite to the sign of its derivative $f'(x)$.

**Step Size (or Step Length):** The magnitude of the step taken in the direction of steepest descent. This is a crucial parameter that needs to be determined.

**Iterative Method:** A method that generates a sequence of approximate solutions, with each iteration getting closer to the true solution.

---

### 3. The Algorithm: Cauchy's Method (Single Variable)

Cauchy's method, in its simplest single-variable form, aims to find the minimum of $f(x)$ by repeatedly moving in the direction of the steepest descent.

**The core idea is to find a point $x_{i+1}$ from the current point $x_i$ by:**

1.  **Determining the direction of steepest descent:** This is given by $-f'(x_i)$.
2.  **Choosing a step size $\alpha_i$:** This determines how far we move in the direction of steepest descent.
3.  **Updating the position:** $x_{i+1} = x_i + \alpha_i (-f'(x_i))$.

Since we are dealing with a single variable, the "direction" is simply along the x-axis. If $f'(x_i) > 0$, the function is increasing, so we move in the negative direction. If $f'(x_i) < 0$, the function is decreasing, so we move in the positive direction. Therefore, the update rule simplifies to:

$x_{i+1} = x_i - \alpha_i f'(x_i)$

where $\alpha_i > 0$ is the step size.

**The main challenge is to determine the optimal step size $\alpha_i$.** A common approach is to perform a **line search** to find the $\alpha_i$ that minimizes $f(x_{i+1})$, i.e., minimize $f(x_i - \alpha_i f'(x_i))$ with respect to $\alpha_i$.

#### Detailed Steps:

**Initialization:**
*   Choose an initial guess $x_0$.
*   Choose a tolerance value $\epsilon > 0$ for stopping the iteration.

**Iteration (i = 0, 1, 2, ...):**

1.  **Calculate the gradient (derivative):** Compute $f'(x_i)$.
2.  **Check for convergence:** If $|f'(x_i)| < \epsilon$, stop the iteration. The current $x_i$ is considered the approximate minimum.
3.  **Determine the search direction:** The direction is $d_i = -f'(x_i)$.
4.  **Perform a line search to find the optimal step size $\alpha_i$:**
    *   Find $\alpha_i > 0$ that minimizes the function $g(\alpha) = f(x_i + \alpha d_i) = f(x_i - \alpha f'(x_i))$.
    *   This is a one-dimensional minimization problem itself, and various techniques like the golden section search, Fibonacci search, or even Newton's method can be used here.
5.  **Update the position:** $x_{i+1} = x_i + \alpha_i d_i = x_i - \alpha_i f'(x_i)$.

**Termination:** The process stops when the magnitude of the derivative at $x_i$ is close to zero (indicating a stationary point, ideally a minimum) or when a maximum number of iterations is reached.

---

### 4. Line Search Techniques (for finding $\alpha_i$)

The effectiveness of Cauchy's method heavily relies on finding a suitable step size $\alpha_i$.

#### 4.1. Exact Line Search (Ideal but often impractical)

In an exact line search, we find the value of $\alpha$ that minimizes $f(x_i - \alpha f'(x_i))$ exactly. This often involves solving the equation:

$\frac{d}{d\alpha} f(x_i - \alpha f'(x_i)) = 0$

Using the chain rule:
$-f'(x_i - \alpha f'(x_i)) \cdot f'(x_i) = 0$

If $f'(x_i) \neq 0$, then we need to find $\alpha$ such that $f'(x_i - \alpha f'(x_i)) = 0$. This means finding a root of the derivative of $f$ at the new point. This might require another iterative method (like Newton-Raphson) if the derivative is complex.

#### 4.2. Inexact Line Search (Practical Approach)

Inexact line search methods aim to find a step size $\alpha$ that satisfies certain conditions ensuring sufficient decrease in the function value, without necessarily finding the exact minimum. Common conditions include:

*   **Armijo Rule (or Sufficient Decrease Condition):**
    $f(x_i + \alpha d_i) \le f(x_i) + c_1 \alpha f'(x_i)^T d_i$
    For a minimization problem, $f'(x_i)^T d_i$ is negative. So, $f(x_i + \alpha d_i) \le f(x_i) - c_1 \alpha |f'(x_i)|$, where $0 < c_1 < 1$. This ensures a significant reduction in the function value.

*   **Wolfe Conditions:** The Armijo rule alone might lead to very small steps. Wolfe conditions add a second condition to ensure the step is not too small:
    1.  **Armijo Condition:** $f(x_i + \alpha d_i) \le f(x_i) + c_1 \alpha f'(x_i)^T d_i$
    2.  **Curvature Condition:** $|f'(x_i + \alpha d_i)^T d_i| \le c_2 |f'(x_i)^T d_i|$
        For single variable and $d_i = -f'(x_i)$:
        $|f'(x_i - \alpha f'(x_i)) f'(x_i)| \le c_2 |f'(x_i)|$
        $|f'(x_i - \alpha f'(x_i))| \le c_2$
        where $0 < c_1 < c_2 < 1$. This ensures that the derivative at the new point is not too far from zero.

**Practical Implementation of Line Search:**
One common approach for inexact line search is to start with an initial guess for $\alpha$ (e.g., $\alpha_0 = 1$) and then reduce it iteratively (e.g., by a factor of $\beta$, where $0 < \beta < 1$) until the Armijo condition is satisfied.

---

### 5. Example

**Problem:** Minimize $f(x) = x^2 - 4x + 5$.

**Solution:**

1.  **Find the derivative:** $f'(x) = 2x - 4$.
2.  **Set up the iteration:** We need to find $x_{i+1} = x_i - \alpha_i f'(x_i) = x_i - \alpha_i (2x_i - 4)$.
3.  **Choose initial guess and tolerance:** Let $x_0 = 0$, $\epsilon = 0.01$.

**Iteration 0:**
*   $x_0 = 0$.
*   $f'(x_0) = 2(0) - 4 = -4$.
*   Since $|f'(x_0)| = |-4| = 4 \ge \epsilon$, we continue.
*   Search direction: $d_0 = -f'(x_0) = -(-4) = 4$.
*   We need to minimize $g(\alpha) = f(x_0 - \alpha f'(x_0)) = f(0 - \alpha(-4)) = f(4\alpha) = (4\alpha)^2 - 4(4\alpha) + 5 = 16\alpha^2 - 16\alpha + 5$.
*   To find the minimum of $g(\alpha)$, we set its derivative with respect to $\alpha$ to zero:
    $g'(\alpha) = 32\alpha - 16 = 0 \implies \alpha = 16/32 = 0.5$.
    This is an exact line search. So, $\alpha_0 = 0.5$.
*   Update $x$: $x_1 = x_0 - \alpha_0 f'(x_0) = 0 - 0.5(-4) = 0 + 2 = 2$.

**Iteration 1:**
*   $x_1 = 2$.
*   $f'(x_1) = 2(2) - 4 = 4 - 4 = 0$.
*   Since $|f'(x_1)| = |0| = 0 < \epsilon$, we stop.

The minimum is found at $x^* = 2$.
Let's check the actual minimum of $f(x) = x^2 - 4x + 5$.
$f'(x) = 2x - 4 = 0 \implies x = 2$.
$f''(x) = 2 > 0$, so $x=2$ is a minimum.
$f(2) = 2^2 - 4(2) + 5 = 4 - 8 + 5 = 1$.

**Example with Inexact Line Search (Conceptual):**

Let's say we used an inexact line search with $c_1 = 0.1$ and started with $\alpha=1$.
At $x_0=0$, $f'(x_0)=-4$.
$f(x_0) = f(0) = 5$.
$f'(x_0)d_0 = (-4)(4) = -16$.

Try $\alpha = 1$:
$x_{new} = x_0 + \alpha d_0 = 0 + 1(4) = 4$.
$f(x_{new}) = f(4) = 4^2 - 4(4) + 5 = 16 - 16 + 5 = 5$.
Armijo condition: $f(x_{new}) \le f(x_0) + c_1 \alpha f'(x_0)d_0$
$5 \le 5 + 0.1(1)(-16)$
$5 \le 5 - 1.6$
$5 \le 3.4$ (False). The step is too large.

Reduce $\alpha$ by a factor of 0.5. Try $\alpha = 0.5$:
$x_{new} = x_0 + \alpha d_0 = 0 + 0.5(4) = 2$.
$f(x_{new}) = f(2) = 2^2 - 4(2) + 5 = 4 - 8 + 5 = 1$.
Armijo condition: $f(x_{new}) \le f(x_0) + c_1 \alpha f'(x_0)d_0$
$1 \le 5 + 0.1(0.5)(-16)$
$1 \le 5 - 0.8$
$1 \le 4.2$ (True). The Armijo condition is satisfied.
So, we take $\alpha_0 = 0.5$ and $x_1 = 2$.

---

### 6. Properties and Considerations

**Convergence:**
*   Cauchy's method (with a proper line search) is guaranteed to converge to a local minimum for a strictly convex function.
*   For non-convex functions, it can converge to any stationary point (local minimum, local maximum, or saddle point), depending on the starting point.

**Rate of Convergence:**
*   With an **exact line search**, Cauchy's method exhibits **linear convergence**. This means that the error in each iteration is reduced by a roughly constant factor.
*   With an **inexact line search** (like Wolfe conditions), linear convergence is also generally maintained.

**Advantages:**
*   **Simplicity:** The concept is easy to understand and implement.
*   **Robustness:** It generally makes steady progress towards a minimum.
*   **Foundation for Multivariable Methods:** The core idea of moving in the direction opposite to the gradient is fundamental to the Steepest Descent method in multiple dimensions.

**Disadvantages:**
*   **Slow Convergence:** Can be very slow, especially near the minimum, or for functions with narrow valleys (ill-conditioned problems).
*   **Sensitivity to Starting Point:** For non-convex functions, the starting point significantly influences the final solution.
*   **Line Search Cost:** Performing a precise line search can be computationally expensive.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. Relation to Textbooks and References

*   **S.S. Rao (Engineering Optimization):** Rao's textbook is an excellent source for detailed explanations of unconstrained optimization methods. Chapter 6, "Unconstrained Optimization Techniques," is highly relevant. Rao covers the steepest descent method and its application, including line search strategies. He emphasizes the basic algorithm and its properties.

*   **H.A. Taha (Operations Research):** Taha's book, while covering a broader scope of OR, often includes fundamental optimization algorithms. You'll likely find discussions on iterative methods for optimization in chapters related to nonlinear programming or numerical methods.

*   **Kalynamoy Deb (Optimization for Engineering Design):** Deb's book provides a good balance of theory and practical examples for engineering applications. He would likely cover gradient-based methods like Steepest Descent with practical considerations for their implementation in design optimization.

*   **Kanti Swarup, P.K. Gupta, Man Mohan (Operations Research):** Similar to Taha, these authors cover various optimization techniques. Their treatment of unconstrained optimization would include gradient-based approaches.

*   **A. Ravindran, D. T. Phillips, J. J. Solberg (Operations Research):** This text would also offer foundational knowledge on optimization algorithms, likely including steepest descent as a precursor to more advanced techniques.

**Key Takeaway from References:** These texts consistently present Cauchy's method as a fundamental, albeit sometimes slow, algorithm for finding minima of functions. They highlight the importance of the line search step for determining the efficiency and convergence of the method.

---

### 8. Important Points to Remember

*   **The direction of steepest descent for $f(x)$ is $-f'(x)$.**
*   The iterative update is $x_{i+1} = x_i - \alpha_i f'(x_i)$, where $\alpha_i > 0$.
*   The **step size $\alpha_i$ is crucial** and can be determined by exact or inexact line search.
*   **Armijo and Wolfe conditions** are common criteria for inexact line search.
*   Cauchy's method is generally **robust but can be slow**, especially for ill-conditioned problems.
*   It's a **first-order method**, meaning it only uses the first derivative.
*   For multi-variable optimization, the concept extends to the gradient vector.

---

### 9. Practice Questions and Exercises

**Question 1:**
Consider the function $f(x) = x^4 - 12x^3 + 47x^2 - 60x + 25$.
Find the minimum of this function using Cauchy's method starting with $x_0 = 0$. Assume you can find the exact line search.

**Question 2:**
Explain the role of line search in Cauchy's method. What are the advantages of using an inexact line search over an exact line search in practice?

**Question 3:**
For the function $f(x) = e^x - x$, use Cauchy's method with an initial guess $x_0 = 1$ and $\epsilon = 0.01$. Assume you can perform an exact line search. Show the first iteration.

---

### 10. Answers to Practice Questions

**Answer 1:**
$f(x) = x^4 - 12x^3 + 47x^2 - 60x + 25$
$f'(x) = 4x^3 - 36x^2 + 94x - 60$

**Iteration 0:**
*   $x_0 = 0$
*   $f'(x_0) = 4(0)^3 - 36(0)^2 + 94(0) - 60 = -60$
*   $|f'(x_0)| = 60 \ge 0.01$. Continue.
*   Search direction $d_0 = -f'(x_0) = 60$.
*   We need to minimize $g(\alpha) = f(x_0 - \alpha f'(x_0)) = f(0 - \alpha(-60)) = f(60\alpha)$.
    $g(\alpha) = (60\alpha)^4 - 12(60\alpha)^3 + 47(60\alpha)^2 - 60(60\alpha) + 25$
    $g(\alpha) = 12960000\alpha^4 - 2592000\alpha^3 + 169200\alpha^2 - 3600\alpha + 25$
*   To find the exact line search, set $g'(\alpha) = 0$:
    $g'(\alpha) = 4 \cdot 12960000\alpha^3 - 3 \cdot 2592000\alpha^2 + 2 \cdot 169200\alpha - 3600 = 0$
    $51840000\alpha^3 - 7776000\alpha^2 + 338400\alpha - 3600 = 0$
    This cubic equation is difficult to solve analytically. In a real scenario, you would use a numerical solver or an inexact line search.

    Let's analyze the actual minimum of $f(x)$:
    $f'(x) = 4x^3 - 36x^2 + 94x - 60 = 0$
    Factoring $f'(x)$ reveals roots at $x=3/2$, $x=2$, and $x=5$.
    Let's check these:
    $f(3/2) = (3/2)^4 - 12(3/2)^3 + 47(3/2)^2 - 60(3/2) + 25 = 5.0625 - 40.5 + 105.75 - 90 + 25 = -4.6875$
    $f(2) = 2^4 - 12(2)^3 + 47(2)^2 - 60(2) + 25 = 16 - 96 + 188 - 120 + 25 = 13$
    $f(5) = 5^4 - 12(5)^3 + 47(5)^2 - 60(5) + 25 = 625 - 1500 + 1175 - 300 + 25 = 25$

    The minimum is at $x = 3/2 = 1.5$.
    If we were to solve $51840000\alpha^3 - 7776000\alpha^2 + 338400\alpha - 3600 = 0$ for $\alpha$ when $x_0=0$, the root that corresponds to the minimum at $x=1.5$ would be found.
    $x_{i+1} = x_i - \alpha_i f'(x_i)$
    $1.5 = 0 - \alpha_0 (-60)$
    $1.5 = 60 \alpha_0 \implies \alpha_0 = 1.5 / 60 = 0.025$.
    Let's check if $\alpha = 0.025$ is a root of the cubic equation for $g'(\alpha)$.
    $51840000(0.025)^3 - 7776000(0.025)^2 + 338400(0.025) - 3600$
    $= 51840000(0.000015625) - 7776000(0.000625) + 8460 - 3600$
    $= 810 - 4860 + 8460 - 3600 = 0$.
    So, $\alpha_0 = 0.025$ is the exact line search step.
*   Update $x$: $x_1 = x_0 - \alpha_0 f'(x_0) = 0 - 0.025(-60) = 1.5$.
*   $f'(x_1) = f'(1.5) = 0$. The algorithm converges in one step because the initial guess was such that the first step landed on the minimum.

**Answer 2:**
The role of line search is to determine the step size $\alpha_i$ in the direction $d_i$ such that $f(x_i + \alpha_i d_i)$ is minimized (or sufficiently decreased). This step size selection is critical for the efficiency and convergence of the optimization algorithm.

**Advantages of Inexact Line Search over Exact Line Search:**
1.  **Computational Cost:** Performing an exact line search can be computationally very expensive, often requiring solving an equation for $\alpha$, which itself might need iterative methods. Inexact line search methods (like those using Armijo or Wolfe conditions) are generally faster to implement as they involve function evaluations and comparisons rather than solving for roots.
2.  **Practicality:** For complex functions, finding an exact line search solution might be analytically impossible or numerically unstable. Inexact methods guarantee sufficient progress without the need for absolute precision in the step size.
3.  **Efficiency:** Sometimes, a step size that provides a significant but not maximal decrease in the function value can lead to faster overall convergence in terms of total computational effort, especially when combined with the fact that inexact line searches are faster per iteration.

**Answer 3:**
$f(x) = e^x - x$
$f'(x) = e^x - 1$

**Iteration 0:**
*   $x_0 = 1$
*   $f'(x_0) = e^1 - 1 = e - 1 \approx 1.718$.
*   $|f'(x_0)| \approx 1.718 \ge 0.01$. Continue.
*   Search direction $d_0 = -f'(x_0) = -(e - 1) = 1 - e \approx -1.718$.
*   We need to minimize $g(\alpha) = f(x_0 - \alpha f'(x_0)) = f(1 - \alpha(e-1))$.
    $g(\alpha) = e^{1 - \alpha(e-1)} - (1 - \alpha(e-1))$.
*   For exact line search, we set $\frac{d}{d\alpha} g(\alpha) = 0$:
    $\frac{d}{d\alpha} g(\alpha) = e^{1 - \alpha(e-1)} \cdot (-(e-1)) - (-(e-1))$
    $= -(e-1)e^{1 - \alpha(e-1)} + (e-1)$
    Set to zero: $-(e-1)e^{1 - \alpha(e-1)} + (e-1) = 0$
    Assuming $e-1 \neq 0$, we can divide by $(e-1)$:
    $-e^{1 - \alpha(e-1)} + 1 = 0$
    $e^{1 - \alpha(e-1)} = 1$
    Taking the natural logarithm of both sides:
    $1 - \alpha(e-1) = \ln(1)$
    $1 - \alpha(e-1) = 0$
    $\alpha(e-1) = 1$
    $\alpha_0 = \frac{1}{e-1} \approx \frac{1}{1.718} \approx 0.5819$.
*   Update $x$: $x_1 = x_0 - \alpha_0 f'(x_0) = 1 - \frac{1}{e-1}(e-1) = 1 - 1 = 0$.

**First Iteration Result:**
$x_1 = 0$.
Let's check the derivative at $x_1=0$: $f'(0) = e^0 - 1 = 1 - 1 = 0$.
The minimum is indeed at $x=0$. The algorithm converges in one step.

---
This concludes the study notes for Cauchy's (Steepest Descent) Method for single-variable optimization. Remember to refer to the provided textbooks for more in-depth explanations and additional examples.