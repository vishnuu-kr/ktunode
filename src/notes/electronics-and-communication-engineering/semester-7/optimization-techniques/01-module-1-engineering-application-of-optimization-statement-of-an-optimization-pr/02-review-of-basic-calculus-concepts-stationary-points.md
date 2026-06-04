---
title: "Review of basic calculus concepts –Stationary points"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Engineering application of Optimization – Statement of an Optimization problem–Classification"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff554"
status: "completed"
scrapedAt: "2026-05-23T18:08:33.111Z"
---
# OPTIMIZATION TECHNIQUES - Module 1: Engineering Application of Optimization

## Topic: Review of Basic Calculus Concepts – Stationary Points

**Learning Outcomes:**

*   Understand the fundamental role of calculus in identifying optimal solutions for engineering problems.
*   Recall and apply the concept of derivatives to locate critical points of functions.
*   Differentiate between various types of stationary points (minima, maxima, saddle points).
*   Apply the first and second derivative tests to classify stationary points.

**Course Outcomes Alignment:**

*   **CO1: Formulate an optimization problem to optimize an engineering application using the principles of basic calculus.** (This topic directly supports CO1 by providing the mathematical tools to analyze and find optimal solutions within a formulated problem.)

---

### 1. Introduction to Optimization and the Role of Calculus

Optimization is the process of finding the best possible solution to a problem, usually by maximizing or minimizing a particular quantity. In engineering, this often translates to minimizing cost, minimizing weight, maximizing efficiency, maximizing strength, etc.

**Key Concept:** Calculus provides the fundamental mathematical framework for identifying the points where a function reaches its extreme values (maximum or minimum). These points are often referred to as **optimal points**.

**Reference:**
*   **S.S. Rao (4th Ed.):** Chapter 1 introduces the general concept of optimization in engineering and highlights the use of calculus as a primary tool for solving many optimization problems.
*   **Xin-She Yang (2018):** Likely discusses the importance of analytical methods, including calculus, in the initial stages of optimization problem-solving.

---

### 2. Functions and Their Properties

An optimization problem typically involves finding the extreme values of a function.

**Definition:** A **function**, denoted as $f(x)$ or $f(x_1, x_2, \dots, x_n)$, maps input values (variables) to output values. In optimization, we aim to find the input values that result in the maximum or minimum output value.

*   **Single-Variable Functions:** $f(x)$
*   **Multi-Variable Functions:** $f(\mathbf{x})$, where $\mathbf{x} = [x_1, x_2, \dots, x_n]^T$ is a vector of $n$ variables.

**Example:**
*   Consider the cost of a cylindrical tank as a function of its radius ($r$) and height ($h$): $C(r, h)$. We might want to minimize this cost for a given volume.

---

### 3. Derivatives and Their Significance

Derivatives are the cornerstone of calculus-based optimization. They measure the rate of change of a function.

**Definition:**
*   **First Derivative:** For a single-variable function $f(x)$, the first derivative, denoted as $f'(x)$ or $\frac{df}{dx}$, represents the slope of the tangent line to the function's curve at a given point.
*   **Partial Derivative:** For a multi-variable function $f(\mathbf{x})$, a partial derivative with respect to a specific variable $x_i$, denoted as $\frac{\partial f}{\partial x_i}$, measures the rate of change of the function when only $x_i$ is changed, while all other variables are held constant.
*   **Gradient:** The **gradient** of a multi-variable function $f(\mathbf{x})$ is a vector containing all its partial derivatives:
    $\nabla f(\mathbf{x}) = \left[ \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \dots, \frac{\partial f}{\partial x_n} \right]^T$
    The gradient points in the direction of the steepest ascent of the function.

**Reference:**
*   **S.S. Rao (4th Ed.):** Chapters covering basic calculus and introduction to derivatives and their applications in finding maxima/minima are essential here.
*   **Edwin KP Chong, Stanislaw, H Hak (Fourth Edition):** Chapters on differentiation of multivariable functions and the concept of the gradient will be highly relevant.

---

### 4. Stationary Points

Stationary points are points where the "slope" of the function is zero. These are candidates for local maxima, minima, or inflection points.

**Definition:**
*   **Stationary Point:** A point $\mathbf{x}^*$ is a stationary point of a function $f(\mathbf{x})$ if the gradient of $f$ at $\mathbf{x}^*$ is the zero vector.
    *   For a single-variable function $f(x)$, a stationary point $x^*$ occurs where $f'(x^*) = 0$.
    *   For a multi-variable function $f(\mathbf{x})$, a stationary point $\mathbf{x}^*$ occurs where $\nabla f(\mathbf{x}^*) = \mathbf{0}$ (i.e., $\frac{\partial f}{\partial x_i} = 0$ for all $i=1, \dots, n$).

**Why are they important?** At a local maximum or minimum, the function is momentarily "flat," meaning its rate of change is zero.

**Examples:**

**Single-Variable Function:**
Consider $f(x) = x^2 - 4x + 5$.
1.  Find the first derivative: $f'(x) = 2x - 4$.
2.  Set the derivative to zero to find stationary points: $2x - 4 = 0 \Rightarrow x = 2$.
    The stationary point is at $x=2$.

**Multi-Variable Function:**
Consider $f(x_1, x_2) = x_1^2 + x_2^2$.
1.  Find the partial derivatives:
    $\frac{\partial f}{\partial x_1} = 2x_1$
    $\frac{\partial f}{\partial x_2} = 2x_2$
2.  Set the partial derivatives to zero:
    $2x_1 = 0 \Rightarrow x_1 = 0$
    $2x_2 = 0 \Rightarrow x_2 = 0$
    The stationary point is at $(x_1, x_2) = (0, 0)$.

---

### 5. Classification of Stationary Points

Stationary points are necessary but not sufficient conditions for finding a local optimum. We need to classify them to determine if they are minima, maxima, or something else.

#### 5.1. For Single-Variable Functions

We use the **First Derivative Test** and the **Second Derivative Test**.

**Definition:**
*   **First Derivative Test:** Examines the sign of the first derivative on either side of the stationary point.
    *   If $f'(x)$ changes from positive to negative at $x^*$, then $f(x^*)$ is a local maximum.
    *   If $f'(x)$ changes from negative to positive at $x^*$, then $f(x^*)$ is a local minimum.
    *   If $f'(x)$ does not change sign, then $f(x^*)$ is neither a local maximum nor a local minimum (e.g., an inflection point).

**Example (Continuing $f(x) = x^2 - 4x + 5$):**
*   Stationary point at $x = 2$.
*   First derivative: $f'(x) = 2x - 4$.
    *   For $x < 2$ (e.g., $x=1$), $f'(1) = 2(1) - 4 = -2$ (negative).
    *   For $x > 2$ (e.g., $x=3$), $f'(3) = 2(3) - 4 = 2$ (positive).
*   Since $f'(x)$ changes from negative to positive at $x=2$, $f(2)$ is a local minimum.

**Definition:**
*   **Second Derivative Test:** Uses the second derivative at the stationary point to classify it.
    *   If $f''(x^*) > 0$, then $f(x^*)$ is a local minimum.
    *   If $f''(x^*) < 0$, then $f(x^*)$ is a local maximum.
    *   If $f''(x^*) = 0$, the test is inconclusive; use the first derivative test or higher-order derivatives.

**Example (Continuing $f(x) = x^2 - 4x + 5$):**
*   First derivative: $f'(x) = 2x - 4$.
*   Second derivative: $f''(x) = 2$.
*   At the stationary point $x=2$, $f''(2) = 2$.
*   Since $f''(2) = 2 > 0$, $f(2)$ is a local minimum.

**Important Point to Remember:** The second derivative test is often more convenient than the first derivative test, especially for analytical solutions.

---

#### 5.2. For Multi-Variable Functions

The classification of stationary points for multi-variable functions involves the **Hessian Matrix**.

**Definition:**
*   **Second Partial Derivatives:** For a function $f(x_1, \dots, x_n)$, the second partial derivatives are $\frac{\partial^2 f}{\partial x_i \partial x_j}$.
*   **Hessian Matrix ($H$):** A square matrix of second partial derivatives, where $H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$. For a function of $n$ variables, the Hessian is an $n \times n$ matrix.
    $$
    H(\mathbf{x}) = \begin{bmatrix}
    \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} & \dots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\
    \frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \dots & \frac{\partial^2 f}{\partial x_2 \partial x_n} \\
    \vdots & \vdots & \ddots & \vdots \\
    \frac{\partial^2 f}{\partial x_n \partial x_1} & \frac{\partial^2 f}{\partial x_n \partial x_2} & \dots & \frac{\partial^2 f}{\partial x_n^2}
    \end{bmatrix}
    $$
    For most practical functions in optimization, the mixed partial derivatives are equal ($\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}$), making the Hessian matrix symmetric.

**Reference:**
*   **S.S. Rao (4th Ed.):** Chapter 2 (or similar introductory chapters) will detail the Hessian matrix and its use in classifying stationary points.
*   **Edwin KP Chong, Stanislaw, H Hak (Fourth Edition):** Chapters on optimization of multivariable functions will extensively cover the Hessian and its properties.
*   **Deb K (2000):** Likely provides a clear explanation and examples of the Hessian matrix test.

**Classification using the Hessian Matrix:**

Let $\mathbf{x}^*$ be a stationary point (where $\nabla f(\mathbf{x}^*) = \mathbf{0}$). We evaluate the Hessian matrix $H(\mathbf{x}^*)$ at this point. The classification depends on the **eigenvalues** of $H(\mathbf{x}^*)$ or its **definiteness**.

*   **Local Minimum:** If all eigenvalues of $H(\mathbf{x}^*)$ are positive, OR if $H(\mathbf{x}^*)$ is positive definite.
*   **Local Maximum:** If all eigenvalues of $H(\mathbf{x}^*)$ are negative, OR if $H(\mathbf{x}^*)$ is negative definite.
*   **Saddle Point:** If $H(\mathbf{x}^*)$ has both positive and negative eigenvalues, OR if it is indefinite.
*   **Inconclusive:** If any eigenvalue is zero, or if $H(\mathbf{x}^*)$ is positive or negative semi-definite. Further analysis might be needed.

**For a 2x2 Hessian Matrix:**
Let $H = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, where $a = \frac{\partial^2 f}{\partial x_1^2}$, $d = \frac{\partial^2 f}{\partial x_2^2}$, and $b = c = \frac{\partial^2 f}{\partial x_1 \partial x_2}$. The determinant of the Hessian is $\Delta = ad - b^2$.

*   **Local Minimum:** If $a > 0$ AND $\Delta > 0$.
*   **Local Maximum:** If $a < 0$ AND $\Delta > 0$.
*   **Saddle Point:** If $\Delta < 0$.
*   **Inconclusive:** If $\Delta = 0$.

**Example (Continuing $f(x_1, x_2) = x_1^2 + x_2^2$):**
*   Stationary point: $(x_1, x_2) = (0, 0)$.
*   First partial derivatives: $\frac{\partial f}{\partial x_1} = 2x_1$, $\frac{\partial f}{\partial x_2} = 2x_2$.
*   Second partial derivatives:
    $\frac{\partial^2 f}{\partial x_1^2} = 2$
    $\frac{\partial^2 f}{\partial x_2^2} = 2$
    $\frac{\partial^2 f}{\partial x_1 \partial x_2} = 0$
    $\frac{\partial^2 f}{\partial x_2 \partial x_1} = 0$
*   Hessian Matrix:
    $$
    H(x_1, x_2) = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}
    $$
*   At the stationary point $(0, 0)$:
    $$
    H(0, 0) = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}
    $$
*   Classification using 2x2 rules:
    *   $a = 2$, $b = 0$, $d = 2$.
    *   $\Delta = ad - b^2 = (2)(2) - (0)^2 = 4$.
    *   Since $a = 2 > 0$ and $\Delta = 4 > 0$, the stationary point $(0, 0)$ is a **local minimum**.

**Example 2: Saddle Point**
Consider $f(x_1, x_2) = x_1^2 - x_2^2$.
1.  $\nabla f = [2x_1, -2x_2]^T$. Setting to zero gives the stationary point $(0, 0)$.
2.  Hessian Matrix:
    $\frac{\partial^2 f}{\partial x_1^2} = 2$
    $\frac{\partial^2 f}{\partial x_2^2} = -2$
    $\frac{\partial^2 f}{\partial x_1 \partial x_2} = 0$
    $$
    H(x_1, x_2) = \begin{bmatrix} 2 & 0 \\ 0 & -2 \end{bmatrix}
    $$
3.  At $(0, 0)$:
    $$
    H(0, 0) = \begin{bmatrix} 2 & 0 \\ 0 & -2 \end{bmatrix}
    $$
4.  Classification:
    *   $a = 2$, $b = 0$, $d = -2$.
    *   $\Delta = ad - b^2 = (2)(-2) - (0)^2 = -4$.
    *   Since $\Delta = -4 < 0$, the stationary point $(0, 0)$ is a **saddle point**.

**Important Point to Remember:** For optimization, we are primarily interested in finding local minima (for cost, weight) or local maxima (for efficiency, strength). Saddle points are not optimal points.

---

### 6. Practice Questions

**Question 1 (Single Variable):**
Find and classify the stationary points of the function $f(x) = x^3 - 6x^2 + 5$.

**Question 2 (Multi-Variable - 2x2):**
Find and classify the stationary points of the function $f(x_1, x_2) = 2x_1^3 + x_2^2 - 6x_1 - 12x_2 + 10$.

---

### 7. Answers to Practice Questions

**Answer 1:**
1.  **Find the first derivative:**
    $f'(x) = 3x^2 - 12x$
2.  **Set the derivative to zero:**
    $3x^2 - 12x = 0$
    $3x(x - 4) = 0$
    This gives stationary points at $x = 0$ and $x = 4$.
3.  **Find the second derivative:**
    $f''(x) = 6x - 12$
4.  **Classify using the second derivative test:**
    *   At $x = 0$: $f''(0) = 6(0) - 12 = -12$. Since $f''(0) < 0$, $x = 0$ is a **local maximum**.
    *   At $x = 4$: $f''(4) = 6(4) - 12 = 24 - 12 = 12$. Since $f''(4) > 0$, $x = 4$ is a **local minimum**.

**Answer 2:**
1.  **Find the partial derivatives:**
    $\frac{\partial f}{\partial x_1} = 6x_1^2 - 6$
    $\frac{\partial f}{\partial x_2} = 2x_2 - 12$
2.  **Set partial derivatives to zero:**
    $6x_1^2 - 6 = 0 \Rightarrow x_1^2 = 1 \Rightarrow x_1 = \pm 1$
    $2x_2 - 12 = 0 \Rightarrow x_2 = 6$
    This gives two stationary points: $(1, 6)$ and $(-1, 6)$.
3.  **Find the second partial derivatives:**
    $\frac{\partial^2 f}{\partial x_1^2} = 12x_1$
    $\frac{\partial^2 f}{\partial x_2^2} = 2$
    $\frac{\partial^2 f}{\partial x_1 \partial x_2} = 0$
    $\frac{\partial^2 f}{\partial x_2 \partial x_1} = 0$
4.  **Form the Hessian Matrix:**
    $$
    H(x_1, x_2) = \begin{bmatrix} 12x_1 & 0 \\ 0 & 2 \end{bmatrix}
    $$
5.  **Classify at each stationary point:**

    *   **At (1, 6):**
        $H(1, 6) = \begin{bmatrix} 12(1) & 0 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} 12 & 0 \\ 0 & 2 \end{bmatrix}$
        Here, $a = 12$, $b = 0$, $d = 2$.
        $\Delta = ad - b^2 = (12)(2) - 0^2 = 24$.
        Since $a = 12 > 0$ and $\Delta = 24 > 0$, the point $(1, 6)$ is a **local minimum**.

    *   **At (-1, 6):**
        $H(-1, 6) = \begin{bmatrix} 12(-1) & 0 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} -12 & 0 \\ 0 & 2 \end{bmatrix}$
        Here, $a = -12$, $b = 0$, $d = 2$.
        $\Delta = ad - b^2 = (-12)(2) - 0^2 = -24$.
        Since $\Delta = -24 < 0$, the point $(-1, 6)$ is a **saddle point**.

---

### 8. Important Points to Remember

*   Stationary points are where the first derivative (or gradient) is zero. They are candidates for local extrema.
*   The **First Derivative Test** examines the sign change of $f'(x)$ around a stationary point.
*   The **Second Derivative Test** uses $f''(x^*)$ for single variables or the Hessian matrix for multi-variables to classify stationary points.
*   For multi-variable functions, the definiteness of the Hessian matrix at the stationary point determines if it's a minimum (positive definite), maximum (negative definite), or saddle point (indefinite).
*   The absence of critical points does not mean there are no optima. Optima can also occur at **boundary points** of the feasible region, which will be discussed in later modules.
*   Calculus-based methods are powerful for **unconstrained** optimization problems. For problems with constraints, other techniques are required.

---
This concludes the review of basic calculus concepts related to stationary points, which is foundational for understanding how to find optimal solutions in engineering applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
