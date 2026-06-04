---
title: "Newton Raphson method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 3: Single variable optimization methods"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641d3"
status: "completed"
scrapedAt: "2026-05-20T18:16:00.877Z"
---
## OPTIMIZATION TECHNIQUES - Module 3: Single Variable Optimization Methods

### Topic: Newton-Raphson Method

---

**Course Outcomes Addressed:**

*   **CO3:** Find solutions for Nonlinear unconstrained optimization problems (Knowledge Level: K3) - *The Newton-Raphson method is a direct application of finding optima for nonlinear functions.*
*   **CO4:** Apply modern methods of optimization for solving optimization problems. (Knowledge Level: K3) - *The Newton-Raphson method is a fundamental and widely used modern optimization technique.*

**Learning Outcomes Covered:**

*   Understanding the principle of the Newton-Raphson method for finding roots of equations.
*   Deriving the Newton-Raphson iterative formula.
*   Applying the Newton-Raphson method to find stationary points (minima, maxima, or saddle points) of a single-variable function.
*   Analyzing the convergence properties of the Newton-Raphson method.
*   Understanding the advantages and disadvantages of the Newton-Raphson method.

---

### 1. Introduction to Single Variable Optimization

Single variable optimization deals with finding the minimum or maximum value of a function of a single independent variable. For an unconstrained optimization problem, we are looking for a value of $x$ that minimizes (or maximizes) a function $f(x)$.

**Key Concepts:**

*   **Stationary Point:** A point $x^*$ where the derivative of the function is zero, i.e., $f'(x^*) = 0$. Stationary points are candidates for local minima, maxima, or saddle points.
*   **Local Minimum:** A point $x_{min}$ such that $f(x_{min}) \le f(x)$ for all $x$ in a neighborhood around $x_{min}$.
*   **Local Maximum:** A point $x_{max}$ such that $f(x_{max}) \ge f(x)$ for all $x$ in a neighborhood around $x_{max}$.
*   **Second-Order Conditions:**
    *   If $f'(x^*) = 0$ and $f''(x^*) > 0$, then $x^*$ is a local minimum.
    *   If $f'(x^*) = 0$ and $f''(x^*) < 0$, then $x^*$ is a local maximum.
    *   If $f'(x^*) = 0$ and $f''(x^*) = 0$, the test is inconclusive.

---

### 2. The Newton-Raphson Method for Finding Roots

While the Newton-Raphson method is primarily known for finding roots of equations ($f(x) = 0$), its core principle is highly adaptable to optimization.

**Principle:** The method uses the tangent line to the function at a given point to approximate the location of the root.

**Derivation of the Iterative Formula:**

Consider a function $f(x)$ for which we want to find a root. Let $x_i$ be the current approximation of the root. We can approximate $f(x)$ around $x_i$ using its Taylor series expansion:

$f(x) = f(x_i) + f'(x_i)(x - x_i) + \frac{f''(x_i)}{2!}(x - x_i)^2 + \dots$

To find the next approximation, $x_{i+1}$, we set $f(x) = 0$ and retain only the first two terms (linear approximation):

$0 \approx f(x_i) + f'(x_i)(x_{i+1} - x_i)$

Solving for $x_{i+1}$:

$f'(x_i)(x_{i+1} - x_i) \approx -f(x_i)$

$x_{i+1} - x_i \approx -\frac{f(x_i)}{f'(x_i)}$

$x_{i+1} = x_i - \frac{f(x_i)}{f'(x_i)}$

This is the **Newton-Raphson iterative formula for finding roots**.

---

### 3. Applying Newton-Raphson Method to Optimization

To find the stationary points of a function $f(x)$, we need to find the roots of its first derivative, $f'(x)$. So, we apply the Newton-Raphson method to the function $g(x) = f'(x)$.

Let $g(x) = f'(x)$. Then $g'(x) = f''(x)$.
Applying the Newton-Raphson formula to $g(x)$:

$x_{i+1} = x_i - \frac{g(x_i)}{g'(x_i)}$

Substituting $g(x) = f'(x)$ and $g'(x) = f''(x)$:

$$x_{i+1} = x_i - \frac{f'(x_i)}{f''(x_i)}$$

This is the **Newton-Raphson method for optimization**. It iteratively refines an initial guess $x_0$ to find a stationary point of $f(x)$.

---

### 4. Algorithm for Newton-Raphson Optimization

1.  **Define the objective function:** $f(x)$.
2.  **Calculate its first derivative:** $f'(x)$.
3.  **Calculate its second derivative:** $f''(x)$.
4.  **Choose an initial guess:** $x_0$.
5.  **Set a tolerance:** $\epsilon$ (e.g., a small positive number for stopping criterion).
6.  **Iterate:** For $i = 0, 1, 2, \dots$
    *   Calculate $x_{i+1} = x_i - \frac{f'(x_i)}{f''(x_i)}$.
    *   **Check for convergence:** If $|x_{i+1} - x_i| < \epsilon$, stop and $x_{i+1}$ is the approximate stationary point.
    *   **Check for zero second derivative:** If $f''(x_i) \approx 0$, the method might fail or diverge. This indicates a potential inflection point or a very flat region.

---

### 5. Convergence Properties

The Newton-Raphson method exhibits **quadratic convergence** when it converges. This means that the number of correct decimal places roughly doubles with each iteration, provided the initial guess is sufficiently close to the root and certain conditions are met.

**Conditions for Quadratic Convergence:**

*   The function $f(x)$ must be twice continuously differentiable in the neighborhood of the root.
*   The initial guess $x_0$ must be "close enough" to the actual stationary point.
*   The second derivative at the stationary point must be non-zero, i.e., $f''(x^*) \neq 0$.

**When Convergence Fails:**

*   **$f''(x_i) = 0$:** The denominator becomes zero, leading to division by zero. This often happens near inflection points.
*   **Poor initial guess:** If $x_0$ is far from the stationary point, the method might converge to a different root, oscillate, or diverge.
*   **Oscillation:** The iterates might bounce back and forth around the root.
*   **Divergence:** The iterates move further away from the root.

---

### 6. Advantages and Disadvantages

**Advantages:**

*   **Fast Convergence:** Quadratic convergence makes it very efficient when it works.
*   **Direct Method:** It does not require an initial interval containing the minimum (unlike methods like bisection).
*   **Handles Inflection Points:** Can identify saddle points where $f'(x^*) = 0$ and $f''(x^*) = 0$.

**Disadvantages:**

*   **Requires Second Derivative:** The calculation and evaluation of the second derivative can be complex or computationally expensive for some functions.
*   **Sensitivity to Initial Guess:** A poor initial guess can lead to slow convergence, convergence to a wrong root, or divergence.
*   **Fails at $f''(x_i) = 0$:** The method breaks down if the second derivative is zero at any iteration point.
*   **May find maxima or saddle points:** The method finds stationary points, which could be minima, maxima, or saddle points. Additional checks (like the second derivative test) are needed to classify them.

---

### 7. Examples

**Example 1: Finding the Minimum of $f(x) = x^2 - 4x + 5$**

1.  **Objective Function:** $f(x) = x^2 - 4x + 5$
2.  **First Derivative:** $f'(x) = 2x - 4$
3.  **Second Derivative:** $f''(x) = 2$
4.  **Newton-Raphson Formula:** $x_{i+1} = x_i - \frac{2x_i - 4}{2} = x_i - (x_i - 2) = 2$

Let's choose an initial guess $x_0 = 0$.

*   **Iteration 1:**
    $x_1 = 0 - \frac{2(0) - 4}{2} = 0 - \frac{-4}{2} = 0 - (-2) = 2$

Since the formula directly gives $x=2$, and $f''(x) = 2 > 0$, this is a minimum. The method converges in one step.

**Example 2: Finding the Minimum of $f(x) = x^4 - 14x^3 + 60x^2 - 70x$**

1.  **Objective Function:** $f(x) = x^4 - 14x^3 + 60x^2 - 70x$
2.  **First Derivative:** $f'(x) = 4x^3 - 42x^2 + 120x - 70$
3.  **Second Derivative:** $f''(x) = 12x^2 - 84x + 120$
4.  **Newton-Raphson Formula:** $x_{i+1} = x_i - \frac{4x_i^3 - 42x_i^2 + 120x_i - 70}{12x_i^2 - 84x_i + 120}$

Let's choose an initial guess $x_0 = 1$.

*   **Iteration 1:**
    $f'(1) = 4(1)^3 - 42(1)^2 + 120(1) - 70 = 4 - 42 + 120 - 70 = 12$
    $f''(1) = 12(1)^2 - 84(1) + 120 = 12 - 84 + 120 = 48$
    $x_1 = 1 - \frac{12}{48} = 1 - 0.25 = 0.75$

*   **Iteration 2:**
    $f'(0.75) = 4(0.75)^3 - 42(0.75)^2 + 120(0.75) - 70 \approx 1.6875 - 23.625 + 90 - 70 \approx -1.9375$
    $f''(0.75) = 12(0.75)^2 - 84(0.75) + 120 \approx 6.75 - 63 + 120 \approx 63.75$
    $x_2 = 0.75 - \frac{-1.9375}{63.75} \approx 0.75 + 0.03037 \approx 0.78037$

*   **Iteration 3:**
    $f'(0.78037) \approx 4(0.78037)^3 - 42(0.78037)^2 + 120(0.78037) - 70 \approx 1.892 - 25.73 + 93.64 - 70 \approx -0.188$
    $f''(0.78037) \approx 12(0.78037)^2 - 84(0.78037) + 120 \approx 7.31 - 65.55 + 120 \approx 61.76$
    $x_3 = 0.78037 - \frac{-0.188}{61.76} \approx 0.78037 + 0.00304 \approx 0.78341$

The process continues until the desired tolerance is met. The actual minimum is approximately at $x \approx 0.7834$.

---

### 8. Practice Questions and Exercises

**Question 1:**
Find the stationary point of the function $f(x) = x^2 - 5x + 6$ using the Newton-Raphson method. Choose an initial guess of $x_0 = 0$.

**Answer 1:**
*   $f(x) = x^2 - 5x + 6$
*   $f'(x) = 2x - 5$
*   $f''(x) = 2$
*   Newton-Raphson formula: $x_{i+1} = x_i - \frac{2x_i - 5}{2}$

Let $x_0 = 0$:
$x_1 = 0 - \frac{2(0) - 5}{2} = 0 - \frac{-5}{2} = 2.5$

Since $f''(x) = 2 > 0$ for all $x$, $x=2.5$ is a minimum. The method converges in one step.

**Question 2:**
Consider the function $f(x) = \cos(x) - x^2$. Use the Newton-Raphson method to find a stationary point, starting with $x_0 = 0.5$. Set a tolerance of $\epsilon = 0.0001$.

**Answer 2:**
*   $f(x) = \cos(x) - x^2$
*   $f'(x) = -\sin(x) - 2x$
*   $f''(x) = -\cos(x) - 2$
*   Newton-Raphson formula: $x_{i+1} = x_i - \frac{-\sin(x_i) - 2x_i}{-\cos(x_i) - 2} = x_i + \frac{\sin(x_i) + 2x_i}{\cos(x_i) + 2}$

Let $x_0 = 0.5$.
*   **Iteration 1:**
    $x_1 = 0.5 + \frac{\sin(0.5) + 2(0.5)}{\cos(0.5) + 2} \approx 0.5 + \frac{0.4794 + 1.0}{0.8776 + 2} \approx 0.5 + \frac{1.4794}{2.8776} \approx 0.5 + 0.5140 \approx 1.0140$

*   **Iteration 2:**
    $x_2 = 1.0140 + \frac{\sin(1.0140) + 2(1.0140)}{\cos(1.0140) + 2} \approx 1.0140 + \frac{0.8480 + 2.0280}{-0.5290 + 2} \approx 1.0140 + \frac{2.8760}{1.4710} \approx 1.0140 + 1.9551 \approx 2.9691$

    *Wait, something is wrong. Let's recheck the derivatives and calculation.*
    $f'(x) = -\sin(x) - 2x$
    $f''(x) = -\cos(x) - 2$

    Let's use a calculator carefully:
    $x_0 = 0.5$
    $f'(0.5) = -\sin(0.5) - 2(0.5) = -0.4794255 - 1 = -1.4794255$
    $f''(0.5) = -\cos(0.5) - 2 = -0.8775826 - 2 = -2.8775826$
    $x_1 = 0.5 - \frac{-1.4794255}{-2.8775826} = 0.5 - 0.514059 \approx 0.014059$

*   **Iteration 2:**
    $x_0 = 0.014059$
    $f'(0.014059) = -\sin(0.014059) - 2(0.014059) \approx -0.0140585 - 0.028118 = -0.0421765$
    $f''(0.014059) = -\cos(0.014059) - 2 \approx -0.999900 - 2 = -2.999900$
    $x_2 = 0.014059 - \frac{-0.0421765}{-2.999900} = 0.014059 - 0.014059 \approx 0.000000$

The stationary point is close to 0. Let's verify the second derivative at $x=0$: $f''(0) = -\cos(0) - 2 = -1 - 2 = -3$. Since $f''(0) < 0$, $x=0$ is a local maximum.
*Note: The problem asked for a stationary point, not necessarily a minimum. The initial guess was crucial here.*

**Question 3:**
Discuss a scenario where the Newton-Raphson method for optimization might fail.

**Answer 3:**
The Newton-Raphson method fails if, at any iteration, the second derivative $f''(x_i)$ is zero or very close to zero. This can happen if the function is very flat around the stationary point (close to an inflection point), or if the initial guess is near such a point. For example, consider $f(x) = x^4$. The stationary point is at $x=0$. $f'(x) = 4x^3$, $f''(x) = 12x^2$. If we choose $x_0=0$, $f''(0)=0$, and the method fails. If we choose $x_0$ close to 0, say $x_0=0.1$, $x_1 = 0.1 - \frac{4(0.1)^3}{12(0.1)^2} = 0.1 - \frac{0.004}{0.12} = 0.1 - 0.0333 = 0.0667$. This converges, but if $f''(x_i)$ becomes very small, the update step can be very large, potentially leading to divergence.

---

### 9. Important Points to Remember

*   **The Goal:** Find $x^*$ such that $f'(x^*) = 0$.
*   **The Method:** Apply Newton-Raphson to $f'(x)$.
*   **The Formula:** $x_{i+1} = x_i - \frac{f'(x_i)}{f''(x_i)}$.
*   **Convergence:** Quadratic convergence is the best, but only if the initial guess is good and $f''(x^*) \neq 0$.
*   **Second Derivative:** Essential for the method and for classifying the stationary point (min/max).
*   **Potential Problems:** Division by zero ($f''(x_i)=0$), poor initial guess, oscillations, or divergence.
*   **Classification:** After finding a stationary point $x^*$, use the second derivative test:
    *   $f''(x^*) > 0 \implies$ Local Minimum
    *   $f''(x^*) < 0 \implies$ Local Maximum
    *   $f''(x^*) = 0 \implies$ Inconclusive

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 10. References and Further Reading

*   **S.S. Rao, *Engineering Optimization: Theory and Practice***: Provides a thorough treatment of optimization algorithms, including Newton-Raphson, with theoretical underpinnings and practical examples. Look for chapters on unconstrained optimization.
*   **Kalynamoy Deb, *Optimization for Engineering Design—Algorithms and Examples***: Offers detailed explanations and algorithms for various optimization techniques, with a focus on engineering applications. The Newton-Raphson method will be covered in its sections on single-variable optimization.
*   **H.A. Taha, *Operations Research***: While broader in scope, Taha's book often covers foundational numerical methods used in operations research, which may include discussions on iterative methods like Newton-Raphson for solving equations arising in optimization.
*   **Kanti Swarup, P.K.Gupta and Man Mohan, *Operations Research***: Similar to Taha, this book may touch upon numerical techniques for optimization as part of its coverage of related topics.
*   **A. Ravindran, D. T. Phillips, J. J. Solberg, *Operations Research – Principles and Practice***: Expect discussions on optimization algorithms and their practical implementation.

---