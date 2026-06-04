---
title: "Bisection method, Newton raphson method, Secant method, Cubic search method"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Motivation and introduction to optimization in engineering practice"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36690"
status: "completed"
scrapedAt: "2026-05-23T16:30:21.231Z"
---
# OPTIMIZATION TECHNIQUES - Module 1: Motivation and Introduction to Optimization in Engineering Practice

## Topic: Root-Finding Methods for Optimization (Single Variable)

### Learning Outcomes Covered:
*   **LO1:** To evaluate the optimality criteria and methods for functions with single variable (Knowledge Level: K4)
*   **LO2:** To evaluate the optimality criteria and methods for functions with several variables (Knowledge Level: K4) - *While these methods are primarily for single variable, understanding their principles lays the groundwork for multi-variable optimization.*
*   **LO5:** To explore search techniques and applications in optimization (Knowledge Level: K3) - *These methods are foundational search techniques for finding optimal points.*

### Course Outcomes Alignment:
*   **CO1 (K4):** These methods are directly applicable to finding roots of the derivative of a single-variable function, which is a crucial step in identifying critical points (potential optima).
*   **CO5 (K3):** These methods represent early forms of iterative search algorithms used to locate specific values of a function.

---

### 1. Introduction to Optimization and Root-Finding

Optimization in engineering involves finding the best possible solution (minimum or maximum) for a given problem, subject to certain constraints. For functions of a single variable, $f(x)$, a common approach to finding an optimum involves finding the **critical points**, which are the points where the **first derivative** of the function is zero, i.e., $f'(x) = 0$.

Finding the roots of the derivative $f'(x)$ is therefore a critical sub-problem in optimization. The methods discussed in this topic are primarily designed for finding these roots.

**Key Concept: Derivative and Optimality**
For a differentiable function $f(x)$:
*   A local minimum or maximum can occur where $f'(x) = 0$.
*   The **second derivative test** helps distinguish between minima and maxima:
    *   If $f''(x) > 0$ at a critical point, it's a local minimum.
    *   If $f''(x) < 0$ at a critical point, it's a local maximum.
    *   If $f''(x) = 0$, the test is inconclusive.

---

### 2. Bisection Method (for Root Finding)

The Bisection Method is a simple and robust iterative method for finding a root of a continuous function $f(x)$ within a given interval $[a, b]$ where $f(a)$ and $f(b)$ have opposite signs. This guarantees at least one root exists within the interval by the **Intermediate Value Theorem**.

**Algorithm:**
1.  Choose an interval $[a, b]$ such that $f(a) \cdot f(b) < 0$.
2.  Calculate the midpoint: $c = \frac{a+b}{2}$.
3.  Evaluate $f(c)$.
4.  If $f(c) = 0$, then $c$ is the root.
5.  If $f(a) \cdot f(c) < 0$, the root lies in $[a, c]$. Set $b = c$ for the next iteration.
6.  If $f(c) \cdot f(b) < 0$, the root lies in $[c, b]$. Set $a = c$ for the next iteration.
7.  Repeat steps 2-6 until the interval $[a, b]$ is sufficiently small (i.e., $|b-a|$ is less than a predefined tolerance $\epsilon$).

**Key Concepts:**
*   **Convergence:** Guaranteed, but slow (linear convergence).
*   **Robustness:** Will always find a root if one exists in the initial interval and the function is continuous.
*   **Initial Interval:** Requires an initial bracket $[a, b]$ where the function changes sign.

**Example Application in Optimization:**
Suppose we want to minimize $f(x) = x^2 - 4x + 3$.
First, find the derivative: $f'(x) = 2x - 4$.
To find critical points, we need to solve $f'(x) = 0$, which means $2x - 4 = 0$.
Let's use the bisection method to find the root of $g(x) = 2x - 4$.
Choose an interval, say $[0, 5]$.
$g(0) = 2(0) - 4 = -4$
$g(5) = 2(5) - 4 = 6$
Since $g(0)$ and $g(5)$ have opposite signs, a root exists in $[0, 5]$.

**Iteration 1:**
*   $a=0, b=5$
*   $c = (0+5)/2 = 2.5$
*   $g(2.5) = 2(2.5) - 4 = 5 - 4 = 1$
*   Since $g(0) \cdot g(2.5) = (-4) \cdot (1) < 0$, the root is in $[0, 2.5]$. Set $b = 2.5$.

**Iteration 2:**
*   $a=0, b=2.5$
*   $c = (0+2.5)/2 = 1.25$
*   $g(1.25) = 2(1.25) - 4 = 2.5 - 4 = -1.5$
*   Since $g(1.25) \cdot g(2.5) = (-1.5) \cdot (1) < 0$, the root is in $[1.25, 2.5]$. Set $a = 1.25$.

Continue until the interval is small enough. The root is expected to be at $x=2$.

---

### 3. Newton-Raphson Method (for Root Finding)

The Newton-Raphson method is an iterative technique that uses the tangent line to a function to approximate its root. It generally converges much faster than the bisection method, but it requires the derivative of the function.

**Algorithm:**
1.  Choose an initial guess $x_0$.
2.  Calculate the next approximation using the formula:
    $x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}$
3.  Repeat step 2 until the change in $x$ ($|x_{k+1} - x_k|$) or the value of $f(x_{k+1})$ is within a predefined tolerance $\epsilon$.

**Key Concepts:**
*   **Convergence:** Quadratic convergence (if the initial guess is sufficiently close to the root and $f'(x_{root}) \neq 0$).
*   **Requires Derivative:** Needs $f'(x)$.
*   **Initial Guess:** Sensitive to the initial guess. A poor guess can lead to divergence or convergence to a different root.
*   **Potential Problems:**
    *   Division by zero if $f'(x_k) = 0$.
    *   Oscillation if the derivative is small.
    *   Divergence if the initial guess is too far from the root.

**Example Application in Optimization:**
To minimize $f(x) = x^2 - 4x + 3$, we again work with $g(x) = f'(x) = 2x - 4$.
We also need the second derivative, $g'(x) = f''(x) = 2$.
Let's find the root of $g(x) = 2x - 4$ using Newton-Raphson.
Choose an initial guess, say $x_0 = 0$.

**Iteration 1:**
*   $x_0 = 0$
*   $g(0) = 2(0) - 4 = -4$
*   $g'(0) = 2$
*   $x_1 = x_0 - \frac{g(x_0)}{g'(x_0)} = 0 - \frac{-4}{2} = 0 - (-2) = 2$

**Iteration 2:**
*   $x_1 = 2$
*   $g(2) = 2(2) - 4 = 0$
*   Since $g(2) = 0$, we have found the root. The optimal point is $x=2$.

**Important Note:** In optimization context, when applying Newton-Raphson to find a minimum/maximum of $f(x)$, we are finding the root of $f'(x)$. The update formula becomes:
$x_{k+1} = x_k - \frac{f'(x_k)}{f''(x_k)}$

---

### 4. Secant Method (for Root Finding)

The Secant Method is similar to the Newton-Raphson method but approximates the derivative using a secant line through two previous points. This avoids the need to explicitly calculate the derivative.

**Algorithm:**
1.  Choose two initial guesses, $x_0$ and $x_1$.
2.  Calculate the next approximation using the formula:
    $x_{k+1} = x_k - f(x_k) \frac{x_k - x_{k-1}}{f(x_k) - f(x_{k-1})}$
3.  Repeat step 2 until the change in $x$ ($|x_{k+1} - x_k|$) or the value of $f(x_{k+1})$ is within a predefined tolerance $\epsilon$.

**Key Concepts:**
*   **Convergence:** Superlinear convergence (typically around 1.618, slower than Newton-Raphson but faster than Bisection).
*   **No Derivative Required:** Uses function values only.
*   **Two Initial Guesses:** Requires two starting points.
*   **Potential Problems:** Can still diverge with poor initial guesses or certain function behaviors.

**Example Application in Optimization:**
Again, to minimize $f(x) = x^2 - 4x + 3$, we find the root of $g(x) = f'(x) = 2x - 4$.
Choose two initial guesses, say $x_0 = 0$ and $x_1 = 1$.

**Iteration 1:**
*   $x_0 = 0, x_1 = 1$
*   $g(x_0) = g(0) = -4$
*   $g(x_1) = g(1) = 2(1) - 4 = -2$
*   $x_2 = x_1 - g(x_1) \frac{x_1 - x_0}{g(x_1) - g(x_0)} = 1 - (-2) \frac{1 - 0}{-2 - (-4)} = 1 - (-2) \frac{1}{2} = 1 - (-1) = 2$

**Iteration 2:**
*   $x_1 = 1, x_2 = 2$
*   $g(x_1) = g(1) = -2$
*   $g(x_2) = g(2) = 2(2) - 4 = 0$
*   Since $g(2) = 0$, we have found the root. The optimal point is $x=2$.

---

### 5. Cubic Search Method (for Minimization)

Unlike the previous methods which are root-finding techniques for the derivative, the Cubic Search Method (also known as Cubic Interpolation) is a **direct search method for finding the minimum (or maximum) of a unimodal function** within an interval. It directly approximates the function itself using a cubic polynomial.

A **unimodal function** is a function that has a single minimum or maximum within a given interval.

**Algorithm:**
The goal is to find $x^*$ that minimizes $f(x)$ in an interval $[a, b]$.
1.  Choose an interval $[a, b]$ known to contain a minimum.
2.  Choose two interior points, $x_1$ and $x_2$, such that $a < x_1 < x_2 < b$.
3.  Evaluate $f(x_1)$ and $f(x_2)$.
4.  Fit a cubic polynomial $P(x) = Ax^3 + Bx^2 + Cx + D$ that passes through four points: $(a, f(a)), (b, f(b)), (x_1, f(x_1)), (x_2, f(x_2))$.
5.  Find the minimum of the cubic polynomial $P(x)$ by setting its derivative $P'(x) = 3Ax^2 + 2Bx + C$ to zero and solving for $x$.
6.  The minimum of $P(x)$ will be within the interval $[a, b]$. If this minimum is $x_m$:
    *   If $f(x_m)$ is lower than $f(x_1)$ and $f(x_2)$, the new interval for the next iteration can be adjusted.
    *   If $f(x_m)$ is not lower, the interval is updated based on which of $f(x_1)$ or $f(x_2)$ is lower.
7.  The process is repeated until the interval $[a, b]$ is sufficiently small.

**Simplified Cubic Interpolation (Fitting through 3 points and a derivative):**
A more common implementation for optimization involves fitting a cubic polynomial using three points and a derivative value at one of the points.
Let's say we want to minimize $f(x)$ and we have two points $x_0, x_1$ and their function values $f(x_0), f(x_1)$. We can also use information from the derivative, e.g., $f'(x_0)$.

We define a cubic polynomial: $P(x) = ax^3 + bx^2 + cx + d$.
This polynomial needs to satisfy four conditions to uniquely determine $a, b, c, d$. Common conditions are:
*   $P(x_0) = f(x_0)$
*   $P(x_1) = f(x_1)$
*   $P'(x_0) = f'(x_0)$
*   $P'(x_1) = f'(x_1)$ (This leads to a quintic, not cubic, if using both derivatives)

A more practical approach for cubic search often involves **fitting a cubic interpolating polynomial through three points** and using the function values. Suppose we have $x_0, x_1, x_2$ and $f(x_0), f(x_1), f(x_2)$. We can then find a cubic polynomial $P(x)$ passing through these points. To find the minimum of $f(x)$, we can find the minimum of $P(x)$.

**Alternative Cubic Search using two points and derivative:**
Suppose we want to minimize $f(x)$ and have two points $x_0, x_1$ and $f(x_0), f(x_1)$. We also might have $f'(x_0)$. We can define a cubic polynomial $P(x)$ such that:
*   $P(x_0) = f(x_0)$
*   $P'(x_0) = f'(x_0)$ (This is crucial for optimization methods)
*   $P(x_1) = f(x_1)$
*   $P'(x_1) = 0$ (Assuming $x_1$ is potentially the minimum we are seeking or to define the cubic behavior)

The general form of a cubic is $P(x) = ax^3 + bx^2 + cx + d$.
$P'(x) = 3ax^2 + 2bx + c$.

Let's assume we are trying to find the minimum of $f(x)$ within an interval $[a, b]$ and we pick two interior points $x_1$ and $x_2$. The common strategy is to use these points to narrow down the interval.

**Key Aspects of Cubic Search (as a minimization method):**
*   **Direct Minimization:** Directly finds the minimum of $f(x)$, not the root of $f'(x)$.
*   **Unimodal Function Assumption:** Works best for unimodal functions.
*   **Cubic Interpolation:** Fits a cubic polynomial to guide the search.
*   **Convergence:** Generally faster than line search methods like Golden Section Search, but more complex.
*   **Requires Derivative:** Often requires derivative information to set up the cubic polynomial effectively for minimization.

**Example (Conceptual):**
Suppose we want to minimize $f(x) = x^2$ in $[-2, 2]$. $f'(x) = 2x$, minimum is at $x=0$.
Let's say we pick $x_1 = -1, x_2 = 1$.
$f(x_1) = f(-1) = (-1)^2 = 1$
$f(x_2) = f(1) = (1)^2 = 1$
We need to fit a cubic. If we were to use $f'(x_0) = f'(-2) = -4$ and $f'(x_1) = f'(1) = 2$ along with function values, we could define the cubic.

A common variant for **line search** using cubic interpolation involves:
1.  Start with an interval $[a, b]$ and two interior points $x_1, x_2$.
2.  Fit a cubic $P(x)$ using points $(a, f(a)), (x_1, f(x_1)), (x_2, f(x_2))$, and perhaps $f'(a)$ or $f'(x_1)$.
3.  Find the minimum of this cubic $P(x)$. Let this be $x_m$.
4.  Compare $f(x_m)$ with $f(x_1)$ and $f(x_2)$ to update the search interval $[a, b]$. For example, if $f(x_m) < f(x_1)$ and $f(x_m) < f(x_2)$, the new interval might be $[a, x_2]$ or $[x_1, b]$ depending on where $x_m$ lies.

**Reference to Textbooks:**
*   **Ravindran, Ragsdell, Reklaitis (2006):** This textbook is a primary source for optimization methods. Chapter 4, "One-Dimensional Minimization Methods," would cover these techniques, including interpolation methods like cubic search. They discuss fitting polynomials for minimization.
*   **Bertsimas, Tsitsiklis (1997):** While focused on linear optimization, the foundational concepts of optimality criteria and search strategies are relevant.

---

### 6. Comparison and When to Use Which Method

| Method           | Type                  | Requires Derivative | Convergence Rate | Robustness    | Initial Guess | Best For                                      |
| :--------------- | :-------------------- | :------------------ | :--------------- | :------------ | :------------ | :-------------------------------------------- |
| **Bisection**    | Root-finding          | No                | Linear           | High          | Interval      | Finding roots reliably, slow convergence      |
| **Newton-Raphson** | Root-finding          | Yes               | Quadratic        | Moderate      | Point         | Fast convergence near root, requires $f''(x)$ |
| **Secant**       | Root-finding          | No (approximated) | Superlinear      | Moderate      | Two Points    | Faster than Bisection, no explicit derivative |
| **Cubic Search** | Direct Minimization   | Yes (often)       | Fast             | Moderate      | Interval      | Finding minimum of unimodal functions directly |

**Important Points to Remember:**
*   **Root-Finding vs. Minimization:** Bisection, Newton-Raphson, and Secant find roots of $f'(x)=0$. Cubic search directly finds the minimum of $f(x)$.
*   **Unimodality:** Direct search methods like Cubic Search rely on the function being unimodal in the search interval.
*   **Computational Cost:** Methods requiring derivatives are more computationally expensive per iteration but can converge faster overall.
*   **Robustness:** Bisection is the most robust but slowest. Newton-Raphson is fast but sensitive to initial guesses.
*   **Application in Optimization:**
    *   To find optima of $f(x)$: find roots of $f'(x)$ using Bisection, Newton-Raphson, or Secant.
    *   To directly find minima/maxima of $f(x)$: use direct search methods like Cubic Search.

---

### 7. Practice Questions and Exercises

**Question 1:**
Consider the function $f(x) = x^3 - x - 1$. Find the root of $f(x)$ using the Bisection method in the interval $[1, 2]$. Perform three iterations.

**Answer 1:**
$f(1) = 1^3 - 1 - 1 = -1$
$f(2) = 2^3 - 2 - 1 = 8 - 2 - 1 = 5$
Interval $[1, 2]$.

*   **Iteration 1:**
    *   $a=1, b=2$
    *   $c = (1+2)/2 = 1.5$
    *   $f(1.5) = (1.5)^3 - 1.5 - 1 = 3.375 - 1.5 - 1 = 0.875$
    *   Since $f(1) \cdot f(1.5) = (-1) \cdot (0.875) < 0$, the root is in $[1, 1.5]$. New interval: $[1, 1.5]$.

*   **Iteration 2:**
    *   $a=1, b=1.5$
    *   $c = (1+1.5)/2 = 1.25$
    *   $f(1.25) = (1.25)^3 - 1.25 - 1 = 1.953125 - 1.25 - 1 = -0.296875$
    *   Since $f(1.25) \cdot f(1.5) = (-0.296875) \cdot (0.875) < 0$, the root is in $[1.25, 1.5]$. New interval: $[1.25, 1.5]$.

*   **Iteration 3:**
    *   $a=1.25, b=1.5$
    *   $c = (1.25+1.5)/2 = 1.375$
    *   $f(1.375) = (1.375)^3 - 1.375 - 1 = 2.599609375 - 1.375 - 1 = 0.224609375$
    *   Since $f(1.25) \cdot f(1.375) = (-0.296875) \cdot (0.224609375) < 0$, the root is in $[1.25, 1.375]$. New interval: $[1.25, 1.375]$.

After 3 iterations, the root is approximated to be in the interval $[1.25, 1.375]$.

**Question 2:**
Find the minimum of the function $f(x) = x^2 - 4x + 3$ using the Newton-Raphson method, starting with an initial guess $x_0 = 0$.

**Answer 2:**
We need to find the root of $f'(x)$.
$f'(x) = 2x - 4$
$f''(x) = 2$

The Newton-Raphson update formula for finding roots of $f'(x)$ is:
$x_{k+1} = x_k - \frac{f'(x_k)}{f''(x_k)}$

*   **Iteration 1:**
    *   $x_0 = 0$
    *   $f'(0) = 2(0) - 4 = -4$
    *   $f''(0) = 2$
    *   $x_1 = 0 - \frac{-4}{2} = 0 - (-2) = 2$

*   **Iteration 2:**
    *   $x_1 = 2$
    *   $f'(2) = 2(2) - 4 = 0$
    *   Since $f'(2) = 0$, we have found the critical point. The minimum is at $x=2$.

**Question 3:**
Consider the function $g(x) = e^x - x^2$. Use the Secant method to find a root of $g(x)$ starting with $x_0 = 0$ and $x_1 = 1$. Perform two iterations.

**Answer 3:**
$g(x) = e^x - x^2$

*   **Iteration 1:**
    *   $x_0 = 0, x_1 = 1$
    *   $g(x_0) = g(0) = e^0 - 0^2 = 1 - 0 = 1$
    *   $g(x_1) = g(1) = e^1 - 1^2 = e - 1 \approx 2.718 - 1 = 1.718$
    *   $x_2 = x_1 - g(x_1) \frac{x_1 - x_0}{g(x_1) - g(x_0)}$
    *   $x_2 = 1 - 1.718 \frac{1 - 0}{1.718 - 1} = 1 - 1.718 \frac{1}{0.718} = 1 - 1.718 \times 1.393 = 1 - 2.393 = -1.393$ (Approximately)

*   **Iteration 2:**
    *   $x_1 = 1, x_2 = -1.393$
    *   $g(x_1) = g(1) = 1.718$
    *   $g(x_2) = g(-1.393) = e^{-1.393} - (-1.393)^2 \approx 0.248 - 1.940 = -1.692$ (Approximately)
    *   $x_3 = x_2 - g(x_2) \frac{x_2 - x_1}{g(x_2) - g(x_1)}$
    *   $x_3 = -1.393 - (-1.692) \frac{-1.393 - 1}{-1.692 - 1.718} = -1.393 - (-1.692) \frac{-2.393}{-3.410}$
    *   $x_3 = -1.393 - (-1.692) \times 0.702 = -1.393 + 1.187 = -0.206$ (Approximately)

After two iterations, a root is approximated around $x = -0.206$. (Note: The roots are approximately at -0.703, 0.641, and 1.528. The initial guesses dictate which root is approached.)

---

This concludes Module 1's introduction to these fundamental optimization and root-finding techniques. Understanding these building blocks is essential for tackling more complex optimization problems in engineering.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
