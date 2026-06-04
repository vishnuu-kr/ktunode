---
title: "Functions of single and two variables"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Engineering application of Optimization – Statement of an Optimization problem–Classification"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef29"
status: "completed"
scrapedAt: "2026-05-23T18:02:26.331Z"
---
This document provides comprehensive study notes for the topic "Functions of Single and Two Variables" within Module 1: Engineering Application of Optimization – Statement of an Optimization Problem – Classification, for the course OPTIMIZATION TECHNIQUES.

---

# Module 1: Engineering Application of Optimization – Statement of an Optimization Problem – Classification

## Topic: Functions of Single and Two Variables

### 1. Introduction to Optimization and Functions

**Optimization** is the process of finding the best solution from among a set of available alternatives, considering certain criteria or objectives. In engineering, this often translates to finding the minimum cost, maximum efficiency, minimum weight, or maximum strength of a system or design.

**Functions** are the mathematical backbone of optimization problems. They represent the relationship between variables and the quantity that needs to be optimized (objective function) or the constraints that limit the design choices (constraint functions).

**Key Concept:** Understanding the behavior of functions, especially how their values change with respect to their variables, is fundamental to identifying optimal solutions.

---

### 2. Functions of a Single Variable

A function of a single variable expresses a relationship between an independent variable (often denoted by $x$) and a dependent variable (often denoted by $f(x)$ or $y$).

**Definition:** A function $f(x)$ maps each input value $x$ from its domain to a unique output value $f(x)$.

**Engineering Applications:**
*   **Material Science:** Stress-strain curves ($f(\sigma) = \epsilon$, where $\sigma$ is stress and $\epsilon$ is strain).
*   **Thermodynamics:** Efficiency of a heat engine as a function of temperature difference ($f(T) = \eta$).
*   **Mechanical Engineering:** Deflection of a beam as a function of applied load ($f(P) = \delta$).

**Mathematical Properties:**
*   **Domain and Range:** The set of all possible input values ($x$) and output values ($f(x)$).
*   **Continuity:** A function is continuous if its graph can be drawn without lifting the pen.
*   **Differentiability:** A function is differentiable if its derivative exists at every point in its domain. Derivatives are crucial for finding minima and maxima.

**Finding Extrema (Minima and Maxima) for Single Variable Functions:**

To find the extreme values of a differentiable function $f(x)$, we use the concept of derivatives.

*   **First-Order Necessary Condition:** A necessary condition for a point $x^*$ to be a local minimum or maximum of a differentiable function $f(x)$ is that the first derivative of $f(x)$ at $x^*$ is zero, i.e., $f'(x^*) = 0$. These points are called **critical points**.

*   **Second-Order Sufficient Condition:**
    *   If $f''(x^*) > 0$, then $x^*$ is a **local minimum**.
    *   If $f''(x^*) < 0$, then $x^*$ is a **local maximum**.
    *   If $f''(x^*) = 0$, the test is inconclusive, and higher-order derivatives may be needed.

**Example:** Find the minimum value of the function $f(x) = x^2 - 4x + 5$.

1.  **Find the first derivative:**
    $f'(x) = 2x - 4$

2.  **Set the first derivative to zero to find critical points:**
    $2x - 4 = 0$
    $2x = 4$
    $x = 2$

3.  **Find the second derivative:**
    $f''(x) = 2$

4.  **Evaluate the second derivative at the critical point:**
    $f''(2) = 2$

5.  **Interpret the result:** Since $f''(2) > 0$, the function has a local minimum at $x = 2$.
    The minimum value is $f(2) = (2)^2 - 4(2) + 5 = 4 - 8 + 5 = 1$.

**Reference:** Chapter 4 of S.S. Rao's "Engineering Optimization, Theory and Practice" (4th Ed.) covers single variable optimization methods, including the use of derivatives.

**Learning Outcome Alignment:** This section directly supports **CO1: Formulate an optimization problem to optimize an engineering application using the principles of basic calculus.**

---

### 3. Functions of Two Variables

A function of two variables expresses a relationship between two independent variables (e.g., $x_1$ and $x_2$, or $x$ and $y$) and a dependent variable ($f(x_1, x_2)$ or $f(x, y)$). These functions represent surfaces in three-dimensional space.

**Definition:** A function $f(x_1, x_2)$ maps each pair of input values $(x_1, x_2)$ from its domain to a unique output value $f(x_1, x_2)$.

**Engineering Applications:**
*   **Structural Engineering:** Deflection of a rectangular plate under load ($f(a, b)$, where $a$ and $b$ are dimensions).
*   **Manufacturing:** Production cost as a function of labor hours and machine time ($f(L, M)$).
*   **Aerospace Engineering:** Lift and drag coefficients as functions of angle of attack and Mach number ($f(\alpha, M)$).

**Mathematical Properties:**
*   **Partial Derivatives:** For a function of two variables, we use partial derivatives to understand how the function changes with respect to one variable while holding the other constant.
    *   $\frac{\partial f}{\partial x_1}$: Partial derivative of $f$ with respect to $x_1$.
    *   $\frac{\partial f}{\partial x_2}$: Partial derivative of $f$ with respect to $x_2$.

**Finding Extrema (Minima and Maxima) for Two Variable Functions:**

Similar to single variable functions, we use derivatives to find extrema.

*   **First-Order Necessary Condition:** A necessary condition for a point $(x_1^*, x_2^*)$ to be a local minimum or maximum of a differentiable function $f(x_1, x_2)$ is that both partial derivatives are zero at that point:
    $\frac{\partial f}{\partial x_1}(x_1^*, x_2^*) = 0$
    $\frac{\partial f}{\partial x_2}(x_1^*, x_2^*) = 0$
    These points are called **critical points**.

*   **Second-Order Sufficient Condition (using the Hessian Matrix):**
    We use the **Hessian matrix**, which contains the second-order partial derivatives:
    $H = \begin{bmatrix} \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} \\ \frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} \end{bmatrix}$

    Let $f_{11} = \frac{\partial^2 f}{\partial x_1^2}$, $f_{22} = \frac{\partial^2 f}{\partial x_2^2}$, and $f_{12} = \frac{\partial^2 f}{\partial x_1 \partial x_2}$. (Note: $f_{12} = f_{21}$ for continuous second derivatives).

    We evaluate these second-order partial derivatives at the critical point $(x_1^*, x_2^*)$.

    *   Let $D_1 = f_{11}(x_1^*, x_2^*)$
    *   Let $D_2 = \det(H) = f_{11}(x_1^*, x_2^*) f_{22}(x_1^*, x_2^*) - [f_{12}(x_1^*, x_2^*)]^2$

    The classification of the critical point is as follows:
    *   If $D_1 > 0$ and $D_2 > 0$, then $(x_1^*, x_2^*)$ is a **local minimum**.
    *   If $D_1 < 0$ and $D_2 > 0$, then $(x_1^*, x_2^*)$ is a **local maximum**.
    *   If $D_2 < 0$, then $(x_1^*, x_2^*)$ is a **saddle point**.
    *   If $D_2 = 0$, the test is inconclusive.

**Example:** Find the local extrema of the function $f(x, y) = x^2 + y^2 - 2x - 4y + 10$.

1.  **Find the first-order partial derivatives:**
    $\frac{\partial f}{\partial x} = 2x - 2$
    $\frac{\partial f}{\partial y} = 2y - 4$

2.  **Set the partial derivatives to zero to find critical points:**
    $2x - 2 = 0 \implies x = 1$
    $2y - 4 = 0 \implies y = 2$
    The critical point is $(1, 2)$.

3.  **Find the second-order partial derivatives:**
    $\frac{\partial^2 f}{\partial x^2} = 2$ ($f_{xx}$)
    $\frac{\partial^2 f}{\partial y^2} = 2$ ($f_{yy}$)
    $\frac{\partial^2 f}{\partial x \partial y} = 0$ ($f_{xy}$)

4.  **Evaluate the second-order derivatives at the critical point $(1, 2)$:**
    $f_{xx}(1, 2) = 2$
    $f_{yy}(1, 2) = 2$
    $f_{xy}(1, 2) = 0$

5.  **Calculate the determinants:**
    $D_1 = f_{xx}(1, 2) = 2$
    $D_2 = f_{xx}(1, 2) f_{yy}(1, 2) - [f_{xy}(1, 2)]^2 = (2)(2) - (0)^2 = 4$

6.  **Interpret the results:**
    Since $D_1 = 2 > 0$ and $D_2 = 4 > 0$, the critical point $(1, 2)$ is a **local minimum**.
    The minimum value is $f(1, 2) = (1)^2 + (2)^2 - 2(1) - 4(2) + 10 = 1 + 4 - 2 - 8 + 10 = 5$.

**Reference:** Chapter 4 of S.S. Rao's "Engineering Optimization, Theory and Practice" (4th Ed.) also covers two variable optimization and the use of Hessian matrix. Chapter 5 of "Optimization for Engineering Design: Algorithms and Examples" by Deb K. provides further insights into calculus-based optimization for functions of multiple variables.

**Learning Outcome Alignment:** This section reinforces **CO1: Formulate an optimization problem to optimize an engineering application using the principles of basic calculus.**

---

### 4. Practice Questions and Exercises

**Question 1 (Single Variable):**
Find the minimum value of the function $f(x) = 3x^4 - 4x^3 + 5$ for $x \in \mathbb{R}$.

**Answer 1:**
1.  $f'(x) = 12x^3 - 12x^2 = 12x^2(x - 1)$
2.  Setting $f'(x) = 0$: $12x^2(x - 1) = 0 \implies x = 0$ or $x = 1$. Critical points are $x=0$ and $x=1$.
3.  $f''(x) = 36x^2 - 24x$
4.  $f''(0) = 36(0)^2 - 24(0) = 0$. The second derivative test is inconclusive at $x=0$.
    $f''(1) = 36(1)^2 - 24(1) = 36 - 24 = 12$. Since $f''(1) > 0$, $x=1$ is a local minimum.
5.  To check $x=0$: We can look at the third derivative or analyze the sign of $f'(x)$ around $x=0$.
    $f'''(x) = 72x - 24$, $f'''(0) = -24 \neq 0$. Since the third derivative is non-zero and the second derivative is zero, $x=0$ is an inflection point.
    Alternatively, for $x$ slightly less than 0 (e.g., -0.1), $f'(x) = 12(-0.1)^2(-0.1 - 1) = 12(0.01)(-1.1) < 0$.
    For $x$ slightly greater than 0 (e.g., 0.1), $f'(x) = 12(0.1)^2(0.1 - 1) = 12(0.01)(-0.9) < 0$.
    Since $f'(x)$ does not change sign around $x=0$, it is not a local extremum.
6.  The minimum occurs at $x=1$. The minimum value is $f(1) = 3(1)^4 - 4(1)^3 + 5 = 3 - 4 + 5 = 4$.

**Question 2 (Two Variables):**
Find the local extrema of the function $f(x, y) = x^3 + y^3 - 3xy$.

**Answer 2:**
1.  $\frac{\partial f}{\partial x} = 3x^2 - 3y$
    $\frac{\partial f}{\partial y} = 3y^2 - 3x$
2.  Setting partial derivatives to zero:
    $3x^2 - 3y = 0 \implies y = x^2$ (Equation 1)
    $3y^2 - 3x = 0 \implies y^2 = x$ (Equation 2)
    Substitute Equation 1 into Equation 2: $(x^2)^2 = x \implies x^4 = x \implies x^4 - x = 0 \implies x(x^3 - 1) = 0$.
    This gives $x=0$ or $x^3=1 \implies x=1$.
    *   If $x=0$, from $y=x^2$, $y=0$. Critical point: $(0, 0)$.
    *   If $x=1$, from $y=x^2$, $y=1$. Critical point: $(1, 1)$.
3.  Second-order partial derivatives:
    $f_{xx} = 6x$
    $f_{yy} = 6y$
    $f_{xy} = -3$
4.  Evaluate at critical points:
    *   **At (0, 0):**
        $f_{xx}(0, 0) = 0$
        $f_{yy}(0, 0) = 0$
        $f_{xy}(0, 0) = -3$
        $D_1 = f_{xx} = 0$
        $D_2 = f_{xx}f_{yy} - (f_{xy})^2 = (0)(0) - (-3)^2 = -9$.
        Since $D_2 < 0$, $(0, 0)$ is a **saddle point**.
    *   **At (1, 1):**
        $f_{xx}(1, 1) = 6(1) = 6$
        $f_{yy}(1, 1) = 6(1) = 6$
        $f_{xy}(1, 1) = -3$
        $D_1 = f_{xx} = 6$
        $D_2 = f_{xx}f_{yy} - (f_{xy})^2 = (6)(6) - (-3)^2 = 36 - 9 = 27$.
        Since $D_1 > 0$ and $D_2 > 0$, $(1, 1)$ is a **local minimum**.
    The minimum value is $f(1, 1) = 1^3 + 1^3 - 3(1)(1) = 1 + 1 - 3 = -1$.

---

### 5. Important Points to Remember

*   **Calculus is foundational:** Derivatives (first and second order) are essential tools for locating potential minimum and maximum points.
*   **Critical points are candidates:** Points where the first derivative (or all partial derivatives) is zero are candidates for extrema.
*   **Second derivative test is crucial:** It helps distinguish between minima, maxima, and saddle points for functions of two variables. For single-variable functions, it helps classify critical points.
*   **Inconclusive tests:** Be prepared for situations where the second derivative test is inconclusive ($f''(x^*) = 0$ or $D_2 = 0$). Higher-order derivative tests or other methods might be needed.
*   **Local vs. Global Extrema:** The calculus-based methods primarily find *local* extrema. Finding the *global* extremum often requires examining the behavior of the function over the entire domain and comparing values at local extrema and boundary points.
*   **Engineering context matters:** Always relate the mathematical findings back to the physical or engineering problem to ensure the solution is meaningful.

---

### 6. Connection to Course Outcomes

*   **CO1: Formulate an optimization problem to optimize an engineering application using the principles of basic calculus.**
    *   This topic directly addresses this by demonstrating how engineering quantities can be represented by functions of single or multiple variables and how calculus is used to analyze these functions for optimization. The examples provided show how real-world problems are translated into mathematical functions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. Further Reading and Reference Material

*   **S.S. Rao:** Chapter 4, "Unconstrained Optimization: One-Dimensional Search Methods," and Chapter 5, "Unconstrained Optimization: Newton's Methods," in "Engineering Optimization, Theory and Practice" (4th Ed.). While Chapter 4 focuses on search methods, the underlying principles of function analysis using derivatives are covered. Chapter 5 introduces Newton's method, which is an extension of the calculus-based approach.
*   **Deb K.:** Chapter 5, "Unconstrained Optimization," in "Optimization for Engineering Design: Algorithms and Examples." This chapter offers practical examples and algorithmic approaches for finding extrema of functions.
*   **Chong & Hak:** Chapters 3 and 4 in "An Introduction to Optimization" (Fourth Edition) provide a rigorous mathematical treatment of multivariate calculus and optimization, including necessary and sufficient conditions for optimality.

---