---
title: "Review of basic calculus concepts –Stationary points"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Engineering application of Optimization – Statement of an Optimization problem–Classification"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef28"
status: "completed"
scrapedAt: "2026-05-23T18:02:25.523Z"
---
# OPTIMIZATION TECHNIQUES

## Module 1: Engineering Application of Optimization – Statement of an Optimization Problem – Classification

### Topic: Review of Basic Calculus Concepts – Stationary Points

---

### 1. Introduction to Optimization in Engineering

Optimization is a fundamental concept in engineering that involves finding the best possible solution for a given problem under certain constraints. This often translates to minimizing costs, maximizing efficiency, or improving performance. This module begins by revisiting essential calculus concepts that form the bedrock of many optimization techniques.

---

### 2. Key Calculus Concepts for Optimization

To effectively solve optimization problems, a solid understanding of basic calculus is crucial. This section reviews the concepts most relevant to identifying optimal points.

#### 2.1 Functions and Variables

*   **Independent Variable:** A variable whose value is not determined by other variables in the function.
*   **Dependent Variable:** A variable whose value depends on the independent variable(s).
*   **Function:** A relationship between one or more independent variables and a dependent variable. In optimization, we often seek to optimize a **objective function**, which represents the quantity we want to minimize or maximize.

#### 2.2 Derivatives

Derivatives measure the rate of change of a function with respect to its variable. They are the primary tool for identifying where a function's slope is zero, a key indicator of potential optima.

*   **First Derivative (f'(x) or df/dx):** Represents the slope of the tangent line to the function at a given point.
    *   If $f'(x) > 0$, the function is increasing.
    *   If $f'(x) < 0$, the function is decreasing.
    *   If $f'(x) = 0$, the function is neither increasing nor decreasing at that point.
*   **Second Derivative (f''(x) or d²f/dx²):** Represents the rate of change of the first derivative. It tells us about the concavity of the function.
    *   If $f''(x) > 0$, the function is concave up (like a U-shape).
    *   If $f''(x) < 0$, the function is concave down (like an inverted U-shape).
    *   If $f''(x) = 0$, the point may be an inflection point.

**Referencing Textbooks:**
*   S.S. Rao's "Engineering Optimization, Theory and Practice" provides a thorough review of differential calculus in Chapter 2, emphasizing its role in finding optima.

---

### 3. Stationary Points

Stationary points are points on a function where the first derivative is zero. These points are candidates for local minima, local maxima, or saddle points.

#### 3.1 Definition of Stationary Points

A point $x^*$ is a stationary point of a function $f(x)$ if its first derivative at that point is zero:
$f'(x^*) = 0$

**For a function of multiple variables, $f(x_1, x_2, ..., x_n)$:**
A point $x^* = (x_1^*, x_2^*, ..., x_n^*)$ is a stationary point if all its partial derivatives are zero:
$\frac{\partial f}{\partial x_1}(x^*) = 0, \frac{\partial f}{\partial x_2}(x^*) = 0, ..., \frac{\partial f}{\partial x_n}(x^*) = 0$

#### 3.2 Classification of Stationary Points

The nature of a stationary point is determined by the second derivative (for single-variable functions) or the Hessian matrix (for multi-variable functions).

##### 3.2.1 For Single-Variable Functions (f(x))

Let $x^*$ be a stationary point, i.e., $f'(x^*) = 0$.

*   **Local Minimum:** If $f''(x^*) > 0$, then $x^*$ is a **local minimum**. The function is concave up at this point.
*   **Local Maximum:** If $f''(x^*) < 0$, then $x^*$ is a **local maximum**. The function is concave down at this point.
*   **Inconclusive (Potential Inflection Point):** If $f''(x^*) = 0$, the second derivative test is inconclusive. We need to examine higher-order derivatives or the behavior of the function around $x^*$. If the sign of $f'(x)$ does not change around $x^*$, it might be an inflection point.

##### 3.2.2 For Multi-Variable Functions (f(x₁, x₂, ..., xn))

Let $x^*$ be a stationary point where all partial derivatives are zero. The **Hessian matrix** $H(x^*)$ is used for classification. The Hessian matrix is a square matrix of second-order partial derivatives:

$H(x^*) = \begin{bmatrix}
\frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\
\frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \cdots & \frac{\partial^2 f}{\partial x_2 \partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial^2 f}{\partial x_n \partial x_1} & \frac{\partial^2 f}{\partial x_n \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_n^2}
\end{bmatrix}_{x=x^*}$

For most practical functions, the mixed partial derivatives are equal ($\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}$).

**Classification using the Hessian Matrix:**

*   **Local Minimum:** If all the **leading principal minors** of $H(x^*)$ are positive.
    *   For $n=2$, this means $\frac{\partial^2 f}{\partial x_1^2} > 0$ and $\det(H) = \frac{\partial^2 f}{\partial x_1^2}\frac{\partial^2 f}{\partial x_2^2} - \left(\frac{\partial^2 f}{\partial x_1 \partial x_2}\right)^2 > 0$.
*   **Local Maximum:** If the leading principal minors alternate in sign, starting with negative: $(-1)^1 \frac{\partial^2 f}{\partial x_1^2} < 0$, $(-1)^2 \det(H) > 0$, etc.
    *   For $n=2$, this means $\frac{\partial^2 f}{\partial x_1^2} < 0$ and $\det(H) > 0$.
*   **Saddle Point:** If neither of the above conditions is met (e.g., for $n=2$, if $\det(H) < 0$). A saddle point is neither a local minimum nor a local maximum.
*   **Inconclusive:** If any of the leading principal minors are zero. Higher-order tests or further analysis is required.

**Referencing Textbooks:**
*   Chapter 3 of S.S. Rao's book delves into "Classification of Critical Points," explaining the second-order derivative test and the Hessian matrix in detail.
*   Xin-She Yang's "Optimization Techniques and Applications with Examples" likely covers these fundamental calculus concepts in its introductory chapters as well.

---

### 4. Examples

Let's illustrate these concepts with examples.

#### 4.1 Single-Variable Function Example

**Problem:** Find and classify the stationary points of the function $f(x) = x^3 - 6x^2 + 5$.

**Solution:**

1.  **Find the first derivative:**
    $f'(x) = 3x^2 - 12x$

2.  **Find stationary points by setting $f'(x) = 0$:**
    $3x^2 - 12x = 0$
    $3x(x - 4) = 0$
    This gives stationary points at $x = 0$ and $x = 4$.

3.  **Find the second derivative:**
    $f''(x) = 6x - 12$

4.  **Classify the stationary points using the second derivative test:**
    *   **At $x = 0$:**
        $f''(0) = 6(0) - 12 = -12$.
        Since $f''(0) < 0$, $x = 0$ is a **local maximum**.
        The value of the function at this point is $f(0) = 0^3 - 6(0)^2 + 5 = 5$.
    *   **At $x = 4$:**
        $f''(4) = 6(4) - 12 = 24 - 12 = 12$.
        Since $f''(4) > 0$, $x = 4$ is a **local minimum**.
        The value of the function at this point is $f(4) = 4^3 - 6(4)^2 + 5 = 64 - 6(16) + 5 = 64 - 96 + 5 = -27$.

**Graphical Representation:** The function increases up to $x=0$, decreases from $x=0$ to $x=4$, and then increases again from $x=4$ onwards.

#### 4.2 Two-Variable Function Example

**Problem:** Find and classify the stationary points of the function $f(x_1, x_2) = x_1^2 + x_2^2$.

**Solution:**

1.  **Find the first partial derivatives:**
    $\frac{\partial f}{\partial x_1} = 2x_1$
    $\frac{\partial f}{\partial x_2} = 2x_2$

2.  **Find stationary points by setting partial derivatives to zero:**
    $2x_1 = 0 \implies x_1 = 0$
    $2x_2 = 0 \implies x_2 = 0$
    The only stationary point is $(0, 0)$.

3.  **Find the second partial derivatives:**
    $\frac{\partial^2 f}{\partial x_1^2} = 2$
    $\frac{\partial^2 f}{\partial x_2^2} = 2$
    $\frac{\partial^2 f}{\partial x_1 \partial x_2} = 0$
    $\frac{\partial^2 f}{\partial x_2 \partial x_1} = 0$

4.  **Form the Hessian matrix at $(0,0)$:**
    $H(0,0) = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$

5.  **Classify the stationary point:**
    *   The first leading principal minor is $\frac{\partial^2 f}{\partial x_1^2} = 2$. Since $2 > 0$.
    *   The determinant of the Hessian is $\det(H) = (2)(2) - (0)(0) = 4$. Since $4 > 0$.
    Both conditions for a local minimum are met. Therefore, $(0, 0)$ is a **local minimum**.
    The function value at this point is $f(0,0) = 0^2 + 0^2 = 0$. This is also the global minimum.

#### 4.3 Two-Variable Function Example (Saddle Point)

**Problem:** Find and classify the stationary points of the function $f(x_1, x_2) = x_1^2 - x_2^2$.

**Solution:**

1.  **Find the first partial derivatives:**
    $\frac{\partial f}{\partial x_1} = 2x_1$
    $\frac{\partial f}{\partial x_2} = -2x_2$

2.  **Find stationary points:**
    $2x_1 = 0 \implies x_1 = 0$
    $-2x_2 = 0 \implies x_2 = 0$
    The only stationary point is $(0, 0)$.

3.  **Find the second partial derivatives:**
    $\frac{\partial^2 f}{\partial x_1^2} = 2$
    $\frac{\partial^2 f}{\partial x_2^2} = -2$
    $\frac{\partial^2 f}{\partial x_1 \partial x_2} = 0$

4.  **Form the Hessian matrix at $(0,0)$:**
    $H(0,0) = \begin{bmatrix} 2 & 0 \\ 0 & -2 \end{bmatrix}$

5.  **Classify the stationary point:**
    *   The first leading principal minor is $\frac{\partial^2 f}{\partial x_1^2} = 2 > 0$.
    *   The determinant of the Hessian is $\det(H) = (2)(-2) - (0)(0) = -4$.
    Since $\det(H) < 0$, the stationary point $(0, 0)$ is a **saddle point**.

---

### 5. Important Points to Remember

*   **Stationary points are necessary but not sufficient conditions for optima.** They are candidates where the function's slope is zero.
*   **The second derivative test (or Hessian matrix test) is crucial for classifying stationary points.**
*   For a **local minimum**, the function must be concave up at the stationary point.
*   For a **local maximum**, the function must be concave down at the stationary point.
*   A **saddle point** is a stationary point that is neither a local minimum nor a local maximum.
*   In optimization, we are often interested in **global optima**, not just local ones. Finding global optima can be significantly more challenging and may require different techniques, especially for non-convex functions.
*   The concepts reviewed here are fundamental for **CO1: Formulate an optimization problem to optimize an engineering application using the principles of basic calculus.**

---

### 6. Practice Questions and Exercises

**Instructions:** For each problem, find all stationary points and classify them.

**Question 1:**
Find and classify the stationary points of the function $f(x) = x^4 - 2x^2 + 1$.

**Question 2:**
Find and classify the stationary points of the function $g(x) = \sin(x)$ for $x \in [0, 2\pi]$.

**Question 3:**
Find and classify the stationary points of the function $h(x_1, x_2) = x_1^2 + 2x_2^2 - 4x_1 + 8x_2$.

**Question 4:**
Find and classify the stationary points of the function $k(x_1, x_2) = x_1^3 + x_2^3 - 3x_1 - 3x_2$.

---

### 7. Answers to Practice Questions

**Answer 1:**
*   $f'(x) = 4x^3 - 4x$
*   Setting $f'(x) = 0$: $4x(x^2 - 1) = 0 \implies x = 0, x = 1, x = -1$.
*   $f''(x) = 12x^2 - 4$.
    *   At $x=0$: $f''(0) = -4 < 0$. Local maximum at $(0, 1)$.
    *   At $x=1$: $f''(1) = 12 - 4 = 8 > 0$. Local minimum at $(1, 0)$.
    *   At $x=-1$: $f''(-1) = 12 - 4 = 8 > 0$. Local minimum at $(-1, 0)$.

**Answer 2:**
*   $g'(x) = \cos(x)$.
*   Setting $g'(x) = 0$: $\cos(x) = 0 \implies x = \frac{\pi}{2}, x = \frac{3\pi}{2}$ within the interval $[0, 2\pi]$.
*   $g''(x) = -\sin(x)$.
    *   At $x=\frac{\pi}{2}$: $g''(\frac{\pi}{2}) = -\sin(\frac{\pi}{2}) = -1 < 0$. Local maximum at $(\frac{\pi}{2}, 1)$.
    *   At $x=\frac{3\pi}{2}$: $g''(\frac{3\pi}{2}) = -\sin(\frac{3\pi}{2}) = -(-1) = 1 > 0$. Local minimum at $(\frac{3\pi}{2}, -1)$.

**Answer 3:**
*   $\frac{\partial h}{\partial x_1} = 2x_1 - 4$. Setting to 0 gives $x_1 = 2$.
*   $\frac{\partial h}{\partial x_2} = 4x_2 + 8$. Setting to 0 gives $x_2 = -2$.
*   The stationary point is $(2, -2)$.
*   Second partial derivatives:
    *   $\frac{\partial^2 h}{\partial x_1^2} = 2$
    *   $\frac{\partial^2 h}{\partial x_2^2} = 4$
    *   $\frac{\partial^2 h}{\partial x_1 \partial x_2} = 0$
*   Hessian: $H = \begin{bmatrix} 2 & 0 \\ 0 & 4 \end{bmatrix}$.
*   Leading principal minors: $2 > 0$ and $\det(H) = 8 > 0$.
*   The stationary point $(2, -2)$ is a **local minimum**.

**Answer 4:**
*   $\frac{\partial k}{\partial x_1} = 3x_1^2 - 3$. Setting to 0 gives $x_1^2 = 1 \implies x_1 = \pm 1$.
*   $\frac{\partial k}{\partial x_2} = 3x_2^2 - 3$. Setting to 0 gives $x_2^2 = 1 \implies x_2 = \pm 1$.
*   Stationary points are $(1, 1), (1, -1), (-1, 1), (-1, -1)$.
*   Second partial derivatives:
    *   $\frac{\partial^2 k}{\partial x_1^2} = 6x_1$
    *   $\frac{\partial^2 k}{\partial x_2^2} = 6x_2$
    *   $\frac{\partial^2 k}{\partial x_1 \partial x_2} = 0$
*   Hessian at $(x_1, x_2)$: $H = \begin{bmatrix} 6x_1 & 0 \\ 0 & 6x_2 \end{bmatrix}$.
    *   At $(1, 1)$: $H = \begin{bmatrix} 6 & 0 \\ 0 & 6 \end{bmatrix}$. $\det(H) = 36 > 0$. $6 > 0$. **Local minimum**.
    *   At $(1, -1)$: $H = \begin{bmatrix} 6 & 0 \\ 0 & -6 \end{bmatrix}$. $\det(H) = -36 < 0$. **Saddle point**.
    *   At $(-1, 1)$: $H = \begin{bmatrix} -6 & 0 \\ 0 & 6 \end{bmatrix}$. $\det(H) = -36 < 0$. **Saddle point**.
    *   At $(-1, -1)$: $H = \begin{bmatrix} -6 & 0 \\ 0 & -6 \end{bmatrix}$. $\det(H) = 36 > 0$. $-6 < 0$. **Local maximum**.

---

This review of basic calculus concepts, particularly stationary points, is fundamental for understanding how to approach optimization problems in engineering and for fulfilling **CO1**. The subsequent modules will build upon these foundations to explore various optimization techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
