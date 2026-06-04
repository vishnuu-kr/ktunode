---
title: "Search based techniques: Direct search: Fibonacci and golden section search"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Optimization algorithms for solving unconstrained nonlinear optimization problems"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff55f"
status: "completed"
scrapedAt: "2026-05-23T18:08:41.300Z"
---
# OPTIMIZATION TECHNIQUES

## Module 2: Optimization Algorithms for Unconstrained Nonlinear Optimization Problems

### Topic: Search-Based Techniques: Direct Search: Fibonacci and Golden Section Search

---

### 1. Introduction to Search-Based Techniques and Direct Search

**1.1 What are Search-Based Techniques?**

Search-based techniques are a class of optimization algorithms that iteratively search for the optimal solution by evaluating the objective function at different points in the search space. They are particularly useful for unconstrained nonlinear optimization problems where the derivative information might be difficult or impossible to obtain.

**1.2 What is Direct Search?**

Direct search methods are a subset of search-based techniques that do not require the gradient (derivative) of the objective function. Instead, they rely solely on the function values themselves to guide the search. These methods are often simpler to implement than gradient-based methods and can be more robust when dealing with noisy or discontinuous objective functions.

**1.3 Why Use Direct Search for Unconstrained Nonlinear Optimization?**

*   **No Gradient Information Required:** This is the primary advantage. Many real-world problems have objective functions that are complex, piecewise, or have singularities where derivatives are undefined.
*   **Simplicity of Implementation:** Direct search algorithms are generally easier to understand and code compared to gradient-based methods.
*   **Robustness:** They can be more robust to noise in the objective function evaluation.
*   **Applicability to Non-Differentiable Functions:** They can handle functions that are not differentiable at certain points.

**1.4 Course Outcome Alignment:**

*   **CO3 (Knowledge Level K3):** This topic directly addresses the application of techniques to solve unconstrained optimization problems, which aligns with CO3. While not gradient-based, it's a fundamental method for unconstrained optimization.

**1.5 Textbook References:**

*   **S.S Rao (4th Ed.):** Chapter 11 (Direct Search Methods) will provide a foundational understanding of these techniques.
*   **Xin-She Yang (2018):** Chapter 2 (One-Dimensional Optimization) will likely cover these methods as foundational for multi-dimensional search.
*   **Deb K (2000):** Chapter 4 (One-Dimensional Search Methods) will offer practical examples and further insights.

---

### 2. One-Dimensional Minimization

Both Fibonacci and Golden Section Search are primarily techniques for finding the minimum of a **unimodal function** within a given interval.

**2.1 Unimodal Function:**

A function $f(x)$ is unimodal in an interval $[a, b]$ if it has a single minimum in that interval. This means that there exists a point $x^*$ such that $f(x)$ is strictly decreasing for $x \in [a, x^*]$ and strictly increasing for $x \in [x^*, b]$.

**2.2 The Goal:**

The objective is to reduce the interval $[a, b]$ in such a way that the minimum of the function $f(x)$ is always contained within the shrinking interval, until a desired level of accuracy is achieved.

**2.3 Search Interval Reduction:**

Both methods work by evaluating the objective function at strategically chosen interior points within the current interval $[a, b]$ and then discarding a portion of the interval based on these function values. The key is to do this efficiently, minimizing the number of function evaluations required.

---

### 3. Fibonacci Search

**3.1 Key Concept:**

Fibonacci search uses the Fibonacci sequence to determine the interior points for function evaluation. The number of function evaluations required is fixed for a given initial interval and desired accuracy. It is optimal in the sense that it minimizes the number of function evaluations for a given number of iterations.

**3.2 Fibonacci Sequence:**

The Fibonacci sequence is defined as:
$F_0 = 0, F_1 = 1, F_n = F_{n-1} + F_{n-2}$ for $n \ge 2$.
The sequence starts: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

**3.3 Algorithm Steps:**

1.  **Determine the number of iterations (n):** Given an initial interval $[a, b]$ and a desired final interval width $\Delta$, find the smallest integer $n$ such that $L_n / F_{n+1} \le \Delta$, where $L_n = b - a$ is the length of the initial interval. (Note: Some texts use $L_n/F_n \le \Delta$ or $L_n/F_{n-1} \le \Delta$. It's crucial to be consistent with the definition of the Fibonacci numbers used for interval division).
    *   **Common approach:** The total number of evaluations (including endpoints) is $n+1$. The number of interior points evaluated is $n-1$. The number of intervals created by $n+1$ points is $n$. The length of each interval is $(b-a)/F_{n+1}$. The final interval will have a length of $(b-a)/F_{n+1}$.
2.  **Calculate the positions of the interior points:** Let the initial interval be $[a_k, b_k]$ at iteration $k$. The first two interior points, $x_1$ and $x_2$, are calculated as:
    *   $x_1 = b_k - \frac{F_{n-k}}{F_{n+1-k}} (b_k - a_k)$
    *   $x_2 = a_k + \frac{F_{n-k}}{F_{n+1-k}} (b_k - a_k)$
    (This formula ensures that the number of remaining evaluations is kept track of).
    *   **Simpler approach (for understanding):** At iteration $k$ (starting with $k=0$, $n$ total iterations), with interval $[a, b]$:
        *   $x_1 = b - \frac{F_{n-1}}{F_n}(b-a)$
        *   $x_2 = a + \frac{F_{n-1}}{F_n}(b-a)$
    *   **Correction for $n$:** For $N$ total evaluations, we need $N-2$ interior points. Let's say we want to achieve a final interval length of $L_f$. The initial length is $L_0 = b-a$. After $k$ iterations (evaluating $k+1$ points), the interval length is $L_k = L_0 / F_{k+2}$. So we need $F_{k+2} \ge L_0 / L_f$.
    *   **Let's stick to a common formulation:**
        Let the initial interval be $[a, b]$. We want to perform $N$ evaluations in total. This means we will have $N-2$ interior points. The interval will be divided into $N-1$ segments. The length of each segment will be $(b-a)/F_N$.
        The points are typically placed symmetrically with respect to the center. For $n$ iterations, we need $n+1$ points, dividing the interval into $n$ sections of length $(b-a)/F_{n+1}$.
        Let the interval be $[a_0, b_0]$.
        The first two interior points are:
        $x_1 = a_0 + \frac{F_{n-1}}{F_{n+1}}(b_0 - a_0)$
        $x_2 = b_0 - \frac{F_{n-1}}{F_{n+1}}(b_0 - a_0)$

3.  **Evaluate the function:** Calculate $f(x_1)$ and $f(x_2)$.
4.  **Reduce the interval:**
    *   If $f(x_1) < f(x_2)$: The minimum lies in $[a_k, x_2]$. The new interval becomes $[a_{k+1}, b_{k+1}] = [a_k, x_2]$. The next evaluation point $x_1'$ will be the same as $x_2$ from the previous step (re-using function evaluations).
    *   If $f(x_1) > f(x_2)$: The minimum lies in $[x_1, b_k]$. The new interval becomes $[a_{k+1}, b_{k+1}] = [x_1, b_k]$. The next evaluation point $x_2'$ will be the same as $x_1$ from the previous step.
    *   If $f(x_1) = f(x_2)$: The minimum can be in $[x_1, x_2]$. A common practice is to discard either $[a_k, x_1]$ or $[x_2, b_k]$. For example, choose $[a_{k+1}, b_{k+1}] = [x_1, x_2]$.
5.  **Repeat:** Continue until the desired interval width is achieved.

**3.4 Important Point:**

The key advantage of Fibonacci search is that in each iteration (after the first), only *one* new function evaluation is required because one of the previously evaluated points becomes an interior point for the new interval.

**3.5 Example (Conceptual):**

Minimize $f(x) = x^2$ in $[-5, 5]$. We want a final interval of width less than 1.
Initial interval length $L_0 = 10$.
We need $F_{n+1} \ge 10/1 = 10$.
Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, ...
$F_7 = 13$. So, $n+1 = 7$, which means $n=6$ iterations. This implies $n+1=7$ total evaluations.

*   **Iteration 0:** Interval $[-5, 5]$. $n=6$.
    *   $x_1 = -5 + \frac{F_5}{F_7}(-5 - 5) = -5 + \frac{5}{13}(10) \approx -1.15$
    *   $x_2 = 5 - \frac{F_5}{F_7}(5 - (-5)) = 5 - \frac{5}{13}(10) \approx 1.15$
    *   $f(x_1) = (-1.15)^2 \approx 1.32$
    *   $f(x_2) = (1.15)^2 \approx 1.32$
    *   Assume $f(x_1) \le f(x_2)$. New interval $[-5, 1.15]$.
*   **Iteration 1:** Interval $[-5, 1.15]$. $n=5$ (remaining iterations).
    *   $x_1' = -5 + \frac{F_4}{F_6}(-5 - 1.15) = -5 + \frac{3}{8}(6.15) \approx -2.68$
    *   $x_2'$ (this is the previous $x_1$) = -1.15
    *   $f(x_1') = (-2.68)^2 \approx 7.18$
    *   $f(x_2') = (-1.15)^2 \approx 1.32$
    *   Since $f(x_1') > f(x_2')$, new interval $[-1.15, 1.15]$.

This process continues until the interval width is less than 1.

**3.6 Textbook References for Fibonacci Search:**

*   **S.S Rao (4th Ed.):** Section 11.1.1 (Fibonacci Search Method).
*   **Deb K (2000):** Section 4.2.1 (Fibonacci Search).
*   **Xin-She Yang (2018):** Section 2.2 (Golden Section Search and Fibonacci Search).

---

### 4. Golden Section Search

**4.1 Key Concept:**

Golden Section Search is similar to Fibonacci Search but uses the golden ratio to determine the interior points. It is a sequential search method, meaning that the number of iterations is not fixed in advance but depends on the stopping criterion. It is more flexible than Fibonacci search as it doesn't require knowing the number of iterations beforehand.

**4.2 Golden Ratio:**

The golden ratio, denoted by $\phi$, is approximately 1.618. It is defined by the equation $\phi^2 = \phi + 1$.
The reciprocal of the golden ratio is $1/\phi \approx 0.618$.
Often, a parameter $\delta = 2 - \phi \approx 0.382$ is used, such that $1-\delta = \phi - 1 \approx 0.618$.
The two interior points are typically placed symmetrically such that the ratio of the segment lengths is the golden ratio.

**4.3 Algorithm Steps:**

1.  **Initialization:** Start with an interval $[a, b]$. Define a tolerance $\epsilon$ for the final interval width.
2.  **Calculate interior points:**
    *   Let $\delta = 2 - \phi \approx 0.381966$.
    *   $x_1 = b - \delta(b-a)$
    *   $x_2 = a + \delta(b-a)$
    (Note: The distance from the endpoints is $\delta(b-a)$ and $1-\delta = 1/\phi \approx 0.618$ for the other point).
    Or, more commonly to ensure symmetry and re-use:
    Let $x_1 = a + (1-\delta)(b-a)$
    Let $x_2 = b - (1-\delta)(b-a)$
    So, $x_1 = a + \frac{1}{\phi}(b-a)$ and $x_2 = b - \frac{1}{\phi}(b-a)$.
    Or, using $\rho = \frac{\sqrt{5}-1}{2} \approx 0.618$:
    $x_1 = b - \rho(b-a)$
    $x_2 = a + \rho(b-a)$
    For the next iteration, one of these points becomes the new interior point. Let's use $x_{new}$ and $x_{old}$ for clarity:
    If current interval is $[a, b]$:
    $x_{old} = x_{new}$
    $x_{new} = b - \rho(b-a)$ (or $a + \rho(b-a)$ depending on which side is discarded)

3.  **Evaluate function:** Calculate $f(x_1)$ and $f(x_2)$.
4.  **Reduce the interval:**
    *   If $f(x_1) < f(x_2)$: The minimum lies in $[a, x_2]$. The new interval is $[a, x_2]$. The new $x_1$ (let's call it $x_1'$) becomes the previous $x_2$. A new $x_2'$ is calculated:
        $x_1' = x_2$
        $f(x_1') = f(x_2)$
        $x_2' = a + \rho(x_2 - a)$ (or $x_2' = b - (1-\rho)(x_2-a)$)
        Evaluate $f(x_2')$.
    *   If $f(x_1) > f(x_2)$: The minimum lies in $[x_1, b]$. The new interval is $[x_1, b]$. The new $x_2$ (let's call it $x_2'$) becomes the previous $x_1$. A new $x_1'$ is calculated:
        $x_2' = x_1$
        $f(x_2') = f(x_1)$
        $x_1' = b - \rho(b - x_1)$ (or $x_1' = x_1 + (1-\rho)(b-x_1)$)
        Evaluate $f(x_1')$.
    *   If $f(x_1) = f(x_2)$: The minimum can be in $[x_1, x_2]$. Update the interval to $[x_1, x_2]$.

5.  **Check stopping criterion:** If $(b-a) < \epsilon$, stop. Otherwise, go to step 2 (or step 3, re-using the function evaluation).

**4.4 Important Point:**

Similar to Fibonacci Search, Golden Section Search re-uses one of the function evaluations from the previous iteration. This makes it efficient, requiring only one new function evaluation per iteration after the first.

**4.5 Comparison with Fibonacci Search:**

*   **Fibonacci Search:** Requires a pre-determined number of iterations. Optimal in terms of function evaluations for a fixed number of iterations. Less flexible if the number of iterations is not known beforehand.
*   **Golden Section Search:** Does not require a pre-determined number of iterations. Uses the golden ratio, which is close to the optimal ratios for Fibonacci search. It's more flexible for an arbitrary stopping criterion. The interval reduction factor is constant $(1/\phi \approx 0.618)$.

**4.6 Example (Conceptual):**

Minimize $f(x) = (x-2)^2$ in $[0, 5]$. Tolerance $\epsilon = 0.1$.
Golden ratio $\rho = (\sqrt{5}-1)/2 \approx 0.618$.
$1-\rho = 1/\phi \approx 0.382$.

*   **Iteration 1:** Interval $[0, 5]$. $L = 5$.
    *   $x_1 = 5 - 0.618(5) = 1.91$
    *   $x_2 = 0 + 0.618(5) = 3.09$
    *   $f(x_1) = (1.91 - 2)^2 = (-0.09)^2 = 0.0081$
    *   $f(x_2) = (3.09 - 2)^2 = (1.09)^2 = 1.1881$
    *   Since $f(x_1) < f(x_2)$, the minimum is in $[0, 3.09]$. New interval $[a, b] = [0, 3.09]$.
*   **Iteration 2:** Interval $[0, 3.09]$. $L = 3.09$.
    *   $x_{old} = x_1 = 1.91$, $f(x_{old}) = 0.0081$.
    *   $x_{new} = b - \rho(b-a) = 3.09 - 0.618(3.09) = 3.09 - 1.91 = 1.18$.
    *   $x_1' = x_{new} = 1.18$
    *   $x_2' = x_{old} = 1.91$ (re-using $f(1.91)$).
    *   $f(x_1') = (1.18 - 2)^2 = (-0.82)^2 = 0.6724$
    *   $f(x_2') = f(1.91) = 0.0081$
    *   Since $f(x_1') > f(x_2')$, the minimum is in $[1.18, 3.09]$. New interval $[a, b] = [1.18, 3.09]$.
*   **Iteration 3:** Interval $[1.18, 3.09]$. $L = 3.09 - 1.18 = 1.91$.
    *   $x_{old} = x_2 = 1.91$, $f(x_{old}) = 0.0081$.
    *   $x_{new} = b - \rho(b-a) = 3.09 - 0.618(1.91) = 3.09 - 1.18 = 1.91$. Wait, this is not correct.

Let's redo the point calculation for Golden Section Search carefully with the re-use:

**Corrected Golden Section Search Example:**
Minimize $f(x) = (x-2)^2$ in $[0, 5]$. Tolerance $\epsilon = 0.1$.
Golden ratio $\rho = (\sqrt{5}-1)/2 \approx 0.618$.
$1-\rho = 1/\phi \approx 0.382$.

*   **Iteration 1:**
    *   Interval $[a, b] = [0, 5]$. Length $L = 5$.
    *   $x_1 = b - \rho L = 5 - 0.618(5) = 1.91$.
    *   $x_2 = a + \rho L = 0 + 0.618(5) = 3.09$.
    *   $f(x_1) = f(1.91) = (1.91 - 2)^2 = 0.0081$.
    *   $f(x_2) = f(3.09) = (3.09 - 2)^2 = 1.1881$.
    *   Since $f(x_1) < f(x_2)$, minimum is in $[a, x_2] = [0, 3.09]$.
    *   New interval: $[a', b'] = [0, 3.09]$. Length $L' = 3.09$.
    *   The new interior points for this interval are $x_1'$ and $x_2'$.
    *   $x_1'$ is the old $x_1$ because it's the closer interior point to the new upper bound: $x_1' = x_1 = 1.91$. (Wait, this is incorrect. The closer point to the *discarded* end is kept.)
    *   The discarded end was $x_2=3.09$. The interval is $[0, 3.09]$. The point that needs to be evaluated is the one closer to the new endpoint $b'=3.09$. This is $x_1=1.91$.
    *   Let's redefine the points as $x_{left}$ and $x_{right}$ within the current interval $[a, b]$.
    *   Initial: $[a, b] = [0, 5]$. $x_{left} = 1.91$, $x_{right} = 3.09$. $f(1.91)=0.0081$, $f(3.09)=1.1881$.
    *   $f(x_{left}) < f(x_{right})$. New interval $[a, x_{right}] = [0, 3.09]$.
    *   For this new interval, the point $x_{left}$ is kept. So, the new $x_{left}$ is the old $x_{left}$'s position relative to the new interval.
    *   New interval $[a', b'] = [0, 3.09]$.
    *   The point to be re-used is $x_{left}' = x_{left} = 1.91$.
    *   The *new* interior point to calculate is $x_{right}' = a' + \rho(b'-a') = 0 + 0.618(3.09) \approx 1.91$. This is not right.

Let's use the standard formulation for Golden Section Search, which aims to maintain the same relative distances:
Let the interval be $[a, b]$.
The two internal points are $x_1$ and $x_2$ such that $a < x_1 < x_2 < b$.
The conditions are:
$b - x_2 = x_1 - a = \rho (b-a)$
$x_2 - x_1 = (1 - 2\rho)(b-a)$

Using $\rho = (\sqrt{5}-1)/2 \approx 0.618$:
$x_1 = a + (1-\rho)(b-a)$
$x_2 = b - (1-\rho)(b-a)$

*   **Iteration 1:**
    *   $[a, b] = [0, 5]$. $L=5$.
    *   $x_1 = 0 + (1-0.618)(5) = 0 + 0.382(5) = 1.91$.
    *   $x_2 = 5 - (1-0.618)(5) = 5 - 0.382(5) = 3.09$.
    *   $f(x_1) = f(1.91) = 0.0081$.
    *   $f(x_2) = f(3.09) = 1.1881$.
    *   Since $f(x_1) < f(x_2)$, minimum is in $[a, x_2] = [0, 3.09]$.
    *   New interval $[a', b'] = [0, 3.09]$. Length $L' = 3.09$.
    *   The point $x_1$ is now the "outer" point in the new interval relative to the eliminated segment.
    *   The point to be re-used is $x_1$.
    *   The new $x_1$ will be the old $x_1$. The new $x_2$ needs to be calculated.
    *   New $x_1 = x_1 = 1.91$. This is the point closer to the new endpoint $b'=3.09$.
    *   New $x_2 = a' + (1-\rho)(b'-a') = 0 + 0.382(3.09) = 1.18$.
    *   This still doesn't feel right. The re-use logic is: if $[a, x_2]$ is chosen, then the new $x_1$ is the old $x_2$, and the new $x_2$ is calculated from the new interval.
    *   Let's be crystal clear:
        Current interval $[a, b]$.
        Points $x_1, x_2$. $x_1 = a + \alpha(b-a)$, $x_2 = b - \alpha(b-a)$ where $\alpha = 1-\rho$.
        Evaluate $f(x_1)$ and $f(x_2)$.
        If $f(x_1) < f(x_2)$: New interval $[a, x_2]$. The old $x_1$ is now the new $x_2$. The new $x_1$ is calculated as $a + \alpha(x_2 - a)$.
        If $f(x_1) > f(x_2)$: New interval $[x_1, b]$. The old $x_2$ is now the new $x_1$. The new $x_2$ is calculated as $b - \alpha(b - x_1)$.

*   **Iteration 1 (Re-attempt):**
    *   $[a, b] = [0, 5]$. $L=5$. $\alpha = 0.382$.
    *   $x_1 = 0 + 0.382(5) = 1.91$.
    *   $x_2 = 5 - 0.382(5) = 3.09$.
    *   $f(x_1) = f(1.91) = 0.0081$.
    *   $f(x_2) = f(3.09) = 1.1881$.
    *   $f(x_1) < f(x_2)$. New interval $[a', b'] = [a, x_2] = [0, 3.09]$. $L'=3.09$.
    *   The old $x_1$ becomes the new $x_2$. So, $x_2' = x_1 = 1.91$.
    *   The new $x_1'$ is calculated for the new interval: $x_1' = a' + \alpha(b' - a') = 0 + 0.382(3.09) \approx 1.18$.
    *   We now have $x_1' = 1.18$ and $x_2' = 1.91$. We need to evaluate $f(x_1')$. $f(x_2')$ is already known as $f(1.91) = 0.0081$.
*   **Iteration 2:**
    *   $[a', b'] = [0, 3.09]$. $L'=3.09$.
    *   $x_1' = 1.18$.
    *   $x_2' = 1.91$ (re-used $f(1.91) = 0.0081$).
    *   $f(x_1') = f(1.18) = (1.18 - 2)^2 = (-0.82)^2 = 0.6724$.
    *   $f(x_2') = 0.0081$.
    *   Since $f(x_1') > f(x_2')$, minimum is in $[x_1', b'] = [1.18, 3.09]$.
    *   New interval $[a'', b''] = [1.18, 3.09]$. $L'' = 1.91$.
    *   The old $x_2'$ becomes the new $x_1''$. So, $x_1'' = x_2' = 1.91$.
    *   The new $x_2''$ is calculated for the new interval: $x_2'' = b'' - \alpha(b'' - a'') = 3.09 - 0.382(1.91) \approx 3.09 - 0.73 = 2.36$.
    *   We now have $x_1'' = 1.91$ and $x_2'' = 2.36$. We need to evaluate $f(x_2'')$. $f(x_1'')$ is already known as $f(1.91) = 0.0081$.
*   **Iteration 3:**
    *   $[a'', b''] = [1.18, 3.09]$. $L''=1.91$.
    *   $x_1'' = 1.91$ (re-used $f(1.91) = 0.0081$).
    *   $x_2'' = 2.36$.
    *   $f(x_2'') = f(2.36) = (2.36 - 2)^2 = (0.36)^2 = 0.1296$.
    *   $f(x_1'') = 0.0081$.
    *   Since $f(x_1'') < f(x_2'')$, minimum is in $[a'', x_2''] = [1.18, 2.36]$.
    *   New interval $[a''', b'''] = [1.18, 2.36]$. $L''' = 1.18$.
    *   Interval width $1.18 > 0.1$, so continue.
    *   The old $x_1''$ becomes the new $x_2'''$. $x_2''' = x_1'' = 1.91$.
    *   The new $x_1'''$ is calculated: $x_1''' = a''' + \alpha(b''' - a''') = 1.18 + 0.382(1.18) \approx 1.18 + 0.45 = 1.63$.
    *   We need to evaluate $f(x_1''')$. $f(x_2''')$ is known ($f(1.91) = 0.0081$).

The process continues. The minimum is at $x=2$, and the interval is shrinking around it.

**4.7 Textbook References for Golden Section Search:**

*   **S.S Rao (4th Ed.):** Section 11.1.2 (Golden Section Search Method).
*   **Deb K (2000):** Section 4.2.2 (Golden Section Search).
*   **Xin-She Yang (2018):** Section 2.2 (Golden Section Search and Fibonacci Search).
*   **Chong & Hak (4th Ed.):** Chapter 4 (One-Dimensional Optimization) might cover these methods.

---

### 5. Connection to Other Optimization Techniques

*   **Initial Interval Selection:** Before applying Fibonacci or Golden Section Search, an initial interval $[a, b]$ that is guaranteed to contain the minimum must be found. Techniques like the "ternary search" or simply trying wider intervals and observing function behavior can be used for this.
*   **Multi-dimensional Optimization:** These one-dimensional search techniques are often used as sub-routines in multi-dimensional optimization methods like **Pattern Search** or **Conjugate Gradient Methods** (for the line search step).
*   **Course Outcome Alignment:**
    *   **CO1 (K2):** Understanding unimodal functions is key to applying these techniques, which relates to the principles of calculus used in optimization problem formulation.
    *   **CO3 (K3):** These are direct methods for solving unconstrained optimization, complementing gradient-based methods.
    *   **CO5 (K2):** While not metaheuristics themselves, understanding these fundamental search strategies provides a basis for appreciating how metaheuristics explore the search space.

---

### 6. Important Points to Remember

*   **Unimodality:** Both Fibonacci and Golden Section Search require the objective function to be unimodal within the initial search interval. If the function is not unimodal, these methods may converge to a local minimum or fail to converge.
*   **Interval Reduction:** The core idea is to systematically reduce the search interval while ensuring the minimum remains within it.
*   **Efficiency:** Both methods are efficient in terms of function evaluations because they re-use one evaluation from the previous step.
*   **Fibonacci vs. Golden Section:**
    *   Fibonacci: Fixed number of iterations, optimal for a fixed budget of evaluations.
    *   Golden Section: Flexible stopping criterion, always uses the golden ratio, slightly less efficient than Fibonacci for a very large, fixed number of iterations but more practical for most applications.
*   **Stopping Criteria:** The search stops when the interval width is smaller than a predefined tolerance ($\epsilon$) or when the maximum number of iterations is reached.
*   **Practical Implementation:** When implementing, careful attention to the indices and interval updates is crucial to correctly re-use function evaluations.

---

### 7. Practice Questions and Exercises

**Question 1:**
A function $f(x) = x^2 - 4x + 5$ is to be minimized in the interval $[0, 5]$ using the Fibonacci search method. Determine the number of iterations required if the final interval width should be less than 0.5. (Use $F_1=1, F_2=1, F_3=2, F_4=3, F_5=5, F_6=8, F_7=13$).

**Answer 1:**
Initial interval length $L_0 = 5 - 0 = 5$.
Desired final interval width $\Delta = 0.5$.
We need to find the smallest $n$ such that $L_0 / F_{n+1} \le \Delta$.
$5 / F_{n+1} \le 0.5$
$F_{n+1} \ge 5 / 0.5 = 10$.
Looking at the Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, ...
$F_6 = 8$ (not enough)
$F_7 = 13$ (sufficient).
So, $n+1 = 7$, which means $n=6$ iterations. This requires $n+1=7$ total function evaluations.

**Question 2:**
Consider minimizing $f(x) = e^{-x} - x$ in the interval $[0, 2]$ using the Golden Section Search method.
Let $\rho = (\sqrt{5}-1)/2 \approx 0.618$ and $\alpha = 1 - \rho \approx 0.382$.
Perform two iterations and determine the new interval and the required function evaluations.

**Answer 2:**
*   **Iteration 1:**
    *   Interval $[a, b] = [0, 2]$. Length $L = 2$.
    *   $x_1 = a + \alpha(b-a) = 0 + 0.382(2) = 0.764$.
    *   $x_2 = b - \alpha(b-a) = 2 - 0.382(2) = 1.236$.
    *   $f(x_1) = f(0.764) = e^{-0.764} - 0.764 \approx 0.466 - 0.764 = -0.298$.
    *   $f(x_2) = f(1.236) = e^{-1.236} - 1.236 \approx 0.290 - 1.236 = -0.946$.
    *   Since $f(x_1) > f(x_2)$, the minimum is in $[x_1, b] = [0.764, 2]$.
    *   New interval $[a', b'] = [0.764, 2]$. Length $L' = 2 - 0.764 = 1.236$.
    *   The old $x_2$ becomes the new $x_1$. So, $x_1' = x_2 = 1.236$. $f(x_1')$ is known ($f(1.236) = -0.946$).
    *   The new $x_2'$ is calculated: $x_2' = b' - \alpha(b' - a') = 2 - 0.382(1.236) \approx 2 - 0.472 = 1.528$.
    *   We need to evaluate $f(x_2') = f(1.528)$.
*   **Iteration 2:**
    *   Interval $[a', b'] = [0.764, 2]$. Length $L' = 1.236$.
    *   $x_1' = 1.236$ (re-used $f(1.236) = -0.946$).
    *   $x_2' = 1.528$.
    *   $f(x_2') = f(1.528) = e^{-1.528} - 1.528 \approx 0.217 - 1.528 = -1.311$.
    *   $f(x_1') = -0.946$.
    *   Since $f(x_1') > f(x_2')$, the minimum is in $[x_1', b'] = [1.236, 2]$.
    *   New interval $[a'', b''] = [1.236, 2]$. Length $L'' = 2 - 1.236 = 0.764$.
    *   The old $x_2'$ becomes the new $x_1''$. So, $x_1'' = x_2' = 1.528$. $f(x_1'')$ is known ($f(1.528) = -1.311$).
    *   The new $x_2''$ is calculated: $x_2'' = b'' - \alpha(b'' - a'') = 2 - 0.382(0.764) \approx 2 - 0.292 = 1.708$.
    *   We need to evaluate $f(x_2'') = f(1.708)$.
    *   Required function evaluations so far: $f(x_1), f(x_2), f(x_2')$. Total 3 new evaluations.

**Question 3:**
What is the primary assumption required for Fibonacci and Golden Section Search to be effective?

**Answer 3:**
The primary assumption is that the objective function is **unimodal** within the given search interval. This means it has only one minimum in that interval.

---

This concludes the study notes for Fibonacci and Golden Section Search. Remember to consult the specified textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
