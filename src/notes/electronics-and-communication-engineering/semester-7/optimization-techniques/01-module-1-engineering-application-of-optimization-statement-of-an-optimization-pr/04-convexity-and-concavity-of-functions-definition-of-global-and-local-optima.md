---
title: "Convexity and concavity of functions –Definition of Global and Local optima"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Engineering application of Optimization – Statement of an Optimization problem–Classification"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff556"
status: "completed"
scrapedAt: "2026-05-23T18:08:34.727Z"
---
# OPTIMIZATION TECHNIQUES - Module 1: Engineering Application of Optimization

## Topic: Convexity and Concavity of Functions & Definition of Global and Local Optima

---

### 1. Introduction to Optimization in Engineering (Context)

*   **Course Outcome Alignment:** CO1 (Formulate an optimization problem to optimize an engineering application using the principles of basic calculus.)
*   **Knowledge Level:** K2 (Understand)

Optimization is a fundamental process in engineering that aims to find the *best possible solution* to a problem given a set of constraints. This "best" solution typically refers to maximizing a desired outcome (e.g., efficiency, profit) or minimizing an undesirable outcome (e.g., cost, weight, error).

**Key Concepts:**

*   **Objective Function:** The mathematical function that quantifies what needs to be optimized (maximized or minimized).
*   **Decision Variables:** The parameters that can be adjusted to achieve the optimization goal.
*   **Constraints:** Limitations or conditions that must be satisfied by the decision variables.

**Engineering Applications:**

*   **Structural Design:** Minimizing material weight while maintaining strength.
*   **Manufacturing:** Maximizing production output or minimizing production cost.
*   **Control Systems:** Optimizing system performance (e.g., settling time, overshoot).
*   **Financial Engineering:** Maximizing portfolio returns or minimizing risk.

---

### 2. Convexity and Concavity of Functions

*   **Course Outcome Alignment:** CO1 (Formulate an optimization problem to optimize an engineering application using the principles of basic calculus.)
*   **Knowledge Level:** K2 (Understand)

The concepts of convexity and concavity are crucial for understanding the behavior of objective functions and for determining the nature of optima (global vs. local). These concepts are particularly important for single-variable and multi-variable calculus-based optimization methods.

**2.1 Definition of Convex Function (Single Variable)**

A function $f(x)$ is **convex** on an interval if for any two points $x_1$ and $x_2$ in the interval and for any $\lambda \in [0, 1]$:

$f(\lambda x_1 + (1-\lambda) x_2) \le \lambda f(x_1) + (1-\lambda) f(x_2)$

**Geometric Interpretation:** The line segment connecting any two points on the graph of a convex function lies *above or on* the graph.

**2.2 Definition of Concave Function (Single Variable)**

A function $f(x)$ is **concave** on an interval if for any two points $x_1$ and $x_2$ in the interval and for any $\lambda \in [0, 1]$:

$f(\lambda x_1 + (1-\lambda) x_2) \ge \lambda f(x_1) + (1-\lambda) f(x_2)$

**Geometric Interpretation:** The line segment connecting any two points on the graph of a concave function lies *below or on* the graph.

**2.3 Second Derivative Test for Convexity/Concavity (Single Variable)**

Let $f(x)$ be a twice-differentiable function.

*   If $f''(x) \ge 0$ for all $x$ in an interval, then $f(x)$ is **convex** on that interval.
*   If $f''(x) \le 0$ for all $x$ in an interval, then $f(x)$ is **concave** on that interval.

**Important Note:** If $f''(x) > 0$, the function is strictly convex. If $f''(x) < 0$, the function is strictly concave.

**2.4 Convexity and Concavity in Higher Dimensions (Multivariable)**

For a twice-differentiable function $f(\mathbf{x})$ of $n$ variables, convexity/concavity is determined by the **Hessian matrix**, $\mathbf{H}(\mathbf{x})$. The Hessian matrix contains all the second partial derivatives of the function.

*   **Convex Function:** $f(\mathbf{x})$ is convex if its Hessian matrix $\mathbf{H}(\mathbf{x})$ is **positive semi-definite** for all $\mathbf{x}$ in the domain.
    *   A symmetric matrix $\mathbf{A}$ is positive semi-definite if $\mathbf{y}^T \mathbf{A} \mathbf{y} \ge 0$ for all non-zero vectors $\mathbf{y}$.
*   **Concave Function:** $f(\mathbf{x})$ is concave if its Hessian matrix $\mathbf{H}(\mathbf{x})$ is **negative semi-definite** for all $\mathbf{x}$ in the domain.
    *   A symmetric matrix $\mathbf{A}$ is negative semi-definite if $\mathbf{y}^T \mathbf{A} \mathbf{y} \le 0$ for all non-zero vectors $\mathbf{y}$.

**Testing for Positive/Negative Semi-Definiteness:**

*   **Eigenvalues:** A matrix is positive semi-definite if all its eigenvalues are non-negative ($\ge 0$). It's negative semi-definite if all eigenvalues are non-positive ($\le 0$).
*   **Leading Principal Minors (for symmetric matrices):**
    *   Positive Definite: All leading principal minors are positive.
    *   Positive Semi-definite: All leading principal minors are non-negative. (This is a common heuristic but not a definitive test for semi-definiteness without considering all principal minors).
    *   Negative Definite: Leading principal minors alternate in sign, starting with negative ($(-1)^k \Delta_k > 0$ for $k=1,\dots,n$).
    *   Negative Semi-definite: All leading principal minors are non-positive. (Again, a heuristic).

**Reference:** S.S. Rao, "Engineering Optimization, Theory and Practice," Chapter 3 (Introduction to Optimization), discusses the importance of convex functions for finding unique optima.

**Example 1 (Single Variable):**

Consider $f(x) = x^2$.
$f'(x) = 2x$
$f''(x) = 2$
Since $f''(x) = 2 > 0$ for all $x$, $f(x) = x^2$ is a **convex** function.

**Example 2 (Single Variable):**

Consider $f(x) = -x^2$.
$f'(x) = -2x$
$f''(x) = -2$
Since $f''(x) = -2 < 0$ for all $x$, $f(x) = -x^2$ is a **concave** function.

**Example 3 (Multivariable):**

Consider $f(x_1, x_2) = x_1^2 + x_2^2$.
$\frac{\partial f}{\partial x_1} = 2x_1$, $\frac{\partial f}{\partial x_2} = 2x_2$
$\frac{\partial^2 f}{\partial x_1^2} = 2$, $\frac{\partial^2 f}{\partial x_2^2} = 2$, $\frac{\partial^2 f}{\partial x_1 \partial x_2} = 0$

Hessian Matrix $\mathbf{H} = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$
The eigenvalues are 2 and 2 (both positive). Thus, $\mathbf{H}$ is positive definite, and $f(x_1, x_2) = x_1^2 + x_2^2$ is a **strictly convex** function.

**Example 4 (Multivariable):**

Consider $f(x_1, x_2) = -(x_1^2 + x_2^2)$.
Hessian Matrix $\mathbf{H} = \begin{pmatrix} -2 & 0 \\ 0 & -2 \end{pmatrix}$
The eigenvalues are -2 and -2 (both negative). Thus, $\mathbf{H}$ is negative definite, and $f(x_1, x_2) = -(x_1^2 + x_2^2)$ is a **strictly concave** function.

**Key Takeaway:**

*   **Convex functions are "bowl-shaped" upwards.**
*   **Concave functions are "bowl-shaped" downwards.**
*   The property of convexity/concavity simplifies optimization problems significantly. For a convex function over a convex set, any local minimum is also a global minimum. Similarly, for a concave function over a convex set, any local maximum is also a global maximum.

---

### 3. Definition of Global and Local Optima

*   **Course Outcome Alignment:** CO1 (Formulate an optimization problem to optimize an engineering application using the principles of basic calculus.)
*   **Knowledge Level:** K2 (Understand)

Optimization problems aim to find the best possible values for the decision variables. These "best" values can be classified as local or global optima.

**3.1 Local Optima**

*   **Local Minimum:** A point $\mathbf{x}^*$ is a **local minimum** of a function $f(\mathbf{x})$ if there exists a neighborhood (a small region) around $\mathbf{x}^*$ such that $f(\mathbf{x}^*) \le f(\mathbf{x})$ for all $\mathbf{x}$ within that neighborhood.

    *   **Intuition:** It's the lowest point in its immediate vicinity.
    *   **First Derivative Test (Single Variable):** For a differentiable function, a local minimum can occur where $f'(x^*) = 0$ and $f''(x^*) > 0$.
    *   **First Order Necessary Condition (Multivariable):** For a differentiable function, a local minimum can occur where the gradient is zero: $\nabla f(\mathbf{x}^*) = \mathbf{0}$.
    *   **Second Order Sufficient Condition (Multivariable):** If $\nabla f(\mathbf{x}^*) = \mathbf{0}$ and the Hessian matrix $\mathbf{H}(\mathbf{x}^*)$ is positive definite, then $\mathbf{x}^*$ is a strict local minimum.

*   **Local Maximum:** A point $\mathbf{x}^*$ is a **local maximum** of a function $f(\mathbf{x})$ if there exists a neighborhood around $\mathbf{x}^*$ such that $f(\mathbf{x}^*) \ge f(\mathbf{x})$ for all $\mathbf{x}$ within that neighborhood.

    *   **Intuition:** It's the highest point in its immediate vicinity.
    *   **First Derivative Test (Single Variable):** For a differentiable function, a local maximum can occur where $f'(x^*) = 0$ and $f''(x^*) < 0$.
    *   **Second Order Sufficient Condition (Multivariable):** If $\nabla f(\mathbf{x}^*) = \mathbf{0}$ and the Hessian matrix $\mathbf{H}(\mathbf{x}^*)$ is negative definite, then $\mathbf{x}^*$ is a strict local maximum.

**3.2 Global Optima**

*   **Global Minimum:** A point $\mathbf{x}^{**}$ is a **global minimum** of a function $f(\mathbf{x})$ over a domain $D$ if $f(\mathbf{x}^{**}) \le f(\mathbf{x})$ for all $\mathbf{x} \in D$.

    *   **Intuition:** It's the absolute lowest point across the entire domain of interest.
    *   **Important Property:** If a function is convex and the domain is convex, any local minimum is also a global minimum.

*   **Global Maximum:** A point $\mathbf{x}^{**}$ is a **global maximum** of a function $f(\mathbf{x})$ over a domain $D$ if $f(\mathbf{x}^{**}) \ge f(\mathbf{x})$ for all $\mathbf{x} \in D$.

    *   **Intuition:** It's the absolute highest point across the entire domain of interest.
    *   **Important Property:** If a function is concave and the domain is convex, any local maximum is also a global maximum.

**Reference:** Xin-She Yang, "Optimization Techniques and Applications with Examples," Chapter 2 (Basic Concepts of Optimization), clearly defines these terms. Edwin KP Chong and Stanislaw H Hak, "An Introduction to Optimization," also provide rigorous definitions and examples.

**Example 5 (Illustrating Local and Global Optima):**

Consider the function $f(x) = x^4 - 8x^2 + 10$ on the interval $[-3, 3]$.

1.  **Find critical points:**
    $f'(x) = 4x^3 - 16x$
    Set $f'(x) = 0$: $4x(x^2 - 4) = 0 \implies 4x(x-2)(x+2) = 0$
    Critical points are $x = 0, x = 2, x = -2$.

2.  **Second Derivative Test:**
    $f''(x) = 12x^2 - 16$

    *   At $x = 0$: $f''(0) = -16 < 0$. This indicates a **local maximum**.
        $f(0) = 0^4 - 8(0)^2 + 10 = 10$.
    *   At $x = 2$: $f''(2) = 12(2)^2 - 16 = 12(4) - 16 = 48 - 16 = 32 > 0$. This indicates a **local minimum**.
        $f(2) = 2^4 - 8(2)^2 + 10 = 16 - 8(4) + 10 = 16 - 32 + 10 = -6$.
    *   At $x = -2$: $f''(-2) = 12(-2)^2 - 16 = 12(4) - 16 = 48 - 16 = 32 > 0$. This indicates a **local minimum**.
        $f(-2) = (-2)^4 - 8(-2)^2 + 10 = 16 - 8(4) + 10 = 16 - 32 + 10 = -6$.

3.  **Evaluate at endpoints of the interval:**
    *   At $x = 3$: $f(3) = 3^4 - 8(3)^2 + 10 = 81 - 8(9) + 10 = 81 - 72 + 10 = 19$.
    *   At $x = -3$: $f(-3) = (-3)^4 - 8(-3)^2 + 10 = 81 - 8(9) + 10 = 81 - 72 + 10 = 19$.

4.  **Determine Global Optima:**
    *   The function values at the critical points and endpoints are: $10, -6, -6, 19, 19$.
    *   The **global minimum** is $-6$, occurring at $x = 2$ and $x = -2$.
    *   The **global maximum** is $19$, occurring at $x = 3$ and $x = -3$.
    *   The point $x = 0$ is a **local maximum** but not a global maximum.

**Visual Representation:** The graph of $f(x) = x^4 - 8x^2 + 10$ has two valleys (local minima) and a peak (local maximum) between them. The lowest points of the valleys are the global minima.

---

### 4. Practice Questions and Exercises

**Question 1:**
Determine if the function $f(x) = e^{-x^2}$ is convex or concave. Justify your answer using the second derivative test.

**Answer:**
$f'(x) = -2xe^{-x^2}$
$f''(x) = (-2)e^{-x^2} + (-2x)(-2xe^{-x^2})$
$f''(x) = -2e^{-x^2} + 4x^2e^{-x^2}$
$f''(x) = e^{-x^2}(4x^2 - 2)$

To determine convexity/concavity, we examine the sign of $f''(x)$. Since $e^{-x^2}$ is always positive, the sign depends on $(4x^2 - 2)$.
*   If $4x^2 - 2 > 0 \implies x^2 > 1/2 \implies |x| > 1/\sqrt{2}$, then $f''(x) > 0$, and the function is **convex**.
*   If $4x^2 - 2 < 0 \implies x^2 < 1/2 \implies |x| < 1/\sqrt{2}$, then $f''(x) < 0$, and the function is **concave**.
*   At $x = \pm 1/\sqrt{2}$, $f''(x) = 0$.

Therefore, $f(x) = e^{-x^2}$ is neither strictly convex nor strictly concave over its entire domain. It is concave on $(-1/\sqrt{2}, 1/\sqrt{2})$ and convex on $(-\infty, -1/\sqrt{2})$ and $(1/\sqrt{2}, \infty)$.

**Question 2:**
Consider the function $f(x_1, x_2) = x_1^2 - 2x_1x_2 + x_2^2$. Is this function convex, concave, or neither?

**Answer:**
First, find the Hessian matrix:
$\frac{\partial f}{\partial x_1} = 2x_1 - 2x_2$
$\frac{\partial f}{\partial x_2} = -2x_1 + 2x_2$

$\frac{\partial^2 f}{\partial x_1^2} = 2$
$\frac{\partial^2 f}{\partial x_2^2} = 2$
$\frac{\partial^2 f}{\partial x_1 \partial x_2} = -2$
$\frac{\partial^2 f}{\partial x_2 \partial x_1} = -2$

Hessian Matrix $\mathbf{H} = \begin{pmatrix} 2 & -2 \\ -2 & 2 \end{pmatrix}$

To determine semi-definiteness, we can check the eigenvalues or the leading principal minors.
*   Leading Principal Minor $\Delta_1 = 2$.
*   Leading Principal Minor $\Delta_2 = \det(\mathbf{H}) = (2)(2) - (-2)(-2) = 4 - 4 = 0$.

Since $\Delta_1 > 0$ and $\Delta_2 = 0$, the Hessian matrix is **positive semi-definite**. Therefore, the function $f(x_1, x_2) = x_1^2 - 2x_1x_2 + x_2^2$ is **convex**.

*(Note: This function can also be written as $f(x_1, x_2) = (x_1 - x_2)^2$, which is clearly a square and thus always non-negative, indicating convexity).*

**Question 3:**
For the function $f(x) = \sin(x)$, identify any local minima and maxima in the interval $[0, 4\pi]$. Are these global or local?

**Answer:**
$f'(x) = \cos(x)$
$f''(x) = -\sin(x)$

Set $f'(x) = 0$: $\cos(x) = 0$. In the interval $[0, 4\pi]$, solutions are $x = \frac{\pi}{2}, \frac{3\pi}{2}, \frac{5\pi}{2}, \frac{7\pi}{2}$.

Check the second derivative:
*   At $x = \frac{\pi}{2}$: $f''(\frac{\pi}{2}) = -\sin(\frac{\pi}{2}) = -1 < 0$. This is a **local maximum**. $f(\frac{\pi}{2}) = 1$.
*   At $x = \frac{3\pi}{2}$: $f''(\frac{3\pi}{2}) = -\sin(\frac{3\pi}{2}) = -(-1) = 1 > 0$. This is a **local minimum**. $f(\frac{3\pi}{2}) = -1$.
*   At $x = \frac{5\pi}{2}$: $f''(\frac{5\pi}{2}) = -\sin(\frac{5\pi}{2}) = -1 < 0$. This is a **local maximum**. $f(\frac{5\pi}{2}) = 1$.
*   At $x = \frac{7\pi}{2}$: $f''(\frac{7\pi}{2}) = -\sin(\frac{7\pi}{2}) = -(-1) = 1 > 0$. This is a **local minimum**. $f(\frac{7\pi}{2}) = -1$.

To determine if they are global, consider the function's range. The maximum value of $\sin(x)$ is 1, and the minimum value is -1.

*   The local maxima at $x = \frac{\pi}{2}$ and $x = \frac{5\pi}{2}$ are **global maxima** because their value (1) is the highest possible value the function can attain.
*   The local minima at $x = \frac{3\pi}{2}$ and $x = \frac{7\pi}{2}$ are **global minima** because their value (-1) is the lowest possible value the function can attain.

**Question 4:**
A function $f(x)$ has a local minimum at $x=a$. Can $f''(a)$ be negative? Explain.

**Answer:**
No, if $f(x)$ is twice differentiable, $f''(a)$ cannot be negative for a local minimum. According to the second-order sufficient condition, for a strict local minimum at $x=a$, we require $f'(a)=0$ and $f''(a) > 0$. If $f''(a) = 0$, the test is inconclusive. If $f''(a) < 0$, it indicates a local maximum.

---

### 5. Important Points to Remember

*   **Convexity is key:** Convex functions over convex sets simplify optimization by guaranteeing that any local optimum is also a global optimum.
*   **Second Derivative Test:** A powerful tool for determining convexity/concavity for single-variable functions and for identifying types of critical points.
*   **Hessian Matrix:** The generalization of the second derivative for multivariable functions; its positive/negative semi-definiteness dictates convexity/concavity.
*   **Local vs. Global:** Always distinguish between a local optimum (best in its immediate neighborhood) and a global optimum (best over the entire domain).
*   **Convexity guarantees Global Minima:** For convex functions, local minima are global minima.
*   **Concavity guarantees Global Maxima:** For concave functions, local maxima are global maxima.
*   **Non-convex/Non-concave:** Optimization problems involving non-convex functions can have multiple local optima, making it challenging to find the global optimum.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 6. Further Reading & References

*   **S.S. Rao, "Engineering Optimization, Theory and Practice" (4th Ed.):** Provides a solid foundation on the mathematical aspects of optimization, including convexity.
*   **Xin-She Yang, "Optimization Techniques and Applications with Examples":** Offers practical insights and covers various optimization techniques.
*   **Chong E. K. P., Hak S. H. (Stanislaw H.), "An Introduction to Optimization" (Fourth Edition):** A comprehensive text with rigorous mathematical treatments of optimization concepts.
*   **Deb K, "Optimization for Engineering Design Algorithms and Examples":** Focuses on applying optimization techniques to engineering design problems.

---