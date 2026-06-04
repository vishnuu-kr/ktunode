---
title: "Functions of single and two variables"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 1: Engineering application of Optimization – Statement of an Optimization problem–Classification"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff555"
status: "completed"
scrapedAt: "2026-05-23T18:08:33.923Z"
---
# OPTIMIZATION TECHNIQUES - Module 1: Engineering Application of Optimization

## Topic: Functions of Single and Two Variables

### Learning Outcomes:

*   Understand the role of functions in optimization problems.
*   Identify and analyze functions of a single variable for optimization.
*   Identify and analyze functions of two variables for optimization.
*   Relate the concepts of functions of single and two variables to engineering applications.

### Course Outcomes Alignment:

*   **CO1: Formulate an optimization problem to optimize an engineering application using the principles of basic calculus.** (K2 - Knowledge) - This topic is foundational for CO1 as it introduces the mathematical objects (functions) that are optimized in engineering problems.
*   **CO3: Solve the unconstrained optimization problems using gradient based method.** (K3 - Application) - Understanding functions of single and two variables is crucial for applying gradient-based methods, which rely on derivatives of these functions.

---

## 1. Introduction to Optimization and Functions

Optimization is the process of finding the best possible solution from a set of feasible solutions. In engineering, optimization is used to improve designs, processes, and performance by minimizing costs, maximizing efficiency, or achieving other desired objectives.

**Key Concept:** The "best" solution is typically determined by a **objective function**, which quantifies the performance of a system or design. This objective function is often a mathematical function of one or more variables.

### 1.1. Objective Function

*   **Definition:** An objective function, denoted by $f(\mathbf{x})$, is a mathematical expression that defines the quantity to be minimized or maximized. It represents the goal of the optimization problem.
*   $\mathbf{x}$ is a vector of decision variables, which are the parameters that can be adjusted to achieve the objective.

**Example:**
Consider designing a cylindrical can to hold a fixed volume of liquid, say 1 liter (1000 cm³). We want to minimize the amount of material used, which is directly related to the surface area of the can.

*   **Decision Variables:** Radius ($r$) and height ($h$) of the cylinder.
*   **Objective Function (Surface Area):** $f(r, h) = 2\pi r^2 + 2\pi rh$ (Minimize this).

---

## 2. Functions of a Single Variable

A function of a single variable, $f(x)$, takes a single input variable $x$ and produces a single output value $f(x)$. In optimization, we often seek the value of $x$ that minimizes or maximizes $f(x)$.

### 2.1. Analyzing Functions of a Single Variable

*   **Graphical Representation:** The graph of $y = f(x)$ provides a visual understanding of the function's behavior, including its peaks and valleys (extrema).
*   **Calculus Tools:**
    *   **First Derivative ($f'(x)$ or $\frac{df}{dx}$):** Indicates the rate of change of the function.
        *   $f'(x) > 0$: Function is increasing.
        *   $f'(x) < 0$: Function is decreasing.
        *   $f'(x) = 0$: Potential location of a local extremum (maximum or minimum).
    *   **Second Derivative ($f''(x)$ or $\frac{d^2f}{dx^2}$):** Indicates the concavity of the function and helps classify critical points.
        *   If $f'(c) = 0$ and $f''(c) > 0$, then $f(x)$ has a **local minimum** at $x=c$.
        *   If $f'(c) = 0$ and $f''(c) < 0$, then $f(x)$ has a **local maximum** at $x=c$.
        *   If $f'(c) = 0$ and $f''(c) = 0$, the test is inconclusive, and other methods are needed.

**Reference:** S.S. Rao's "Engineering Optimization, Theory and Practice" extensively covers the use of derivatives for finding extrema of single-variable functions in Chapters 2 and 3.

### 2.2. Types of Extrema for Single-Variable Functions

*   **Local Minimum/Maximum:** A point where the function's value is less/greater than at all nearby points.
*   **Global Minimum/Maximum:** The smallest/largest value the function takes over its entire domain. For convex functions, a local minimum is also a global minimum.
*   **Inflection Point:** A point where the concavity of the function changes.

### 2.3. Example: Minimizing Cost of a Road

Suppose the cost $C(x)$ of building a road of length $L$ and width $w$ is given by $C(x) = ax + bx^2$, where $x$ is some design parameter (e.g., material thickness) and $a, b$ are constants.

To find the minimum cost, we would:
1.  Find the first derivative: $C'(x) = a + 2bx$.
2.  Set the first derivative to zero to find critical points: $a + 2bx = 0 \implies x = -\frac{a}{2b}$.
3.  Find the second derivative: $C''(x) = 2b$.
4.  If $b > 0$, then $C''(x) > 0$, indicating a local minimum at $x = -\frac{a}{2b}$.

**Important Point:** The domain of $x$ in engineering applications is often restricted (e.g., $x \ge 0$). We must consider these constraints when finding the optimal value.

---

## 3. Functions of Two Variables

A function of two variables, $f(x_1, x_2)$, takes two input variables $x_1$ and $x_2$ and produces a single output value $f(x_1, x_2)$. Optimization problems often involve functions of multiple variables.

### 3.1. Analyzing Functions of Two Variables

*   **Graphical Representation:** The graph of $z = f(x_1, x_2)$ is a surface in 3D space.
*   **Calculus Tools (Partial Derivatives):**
    *   **First Partial Derivatives:**
        *   $\frac{\partial f}{\partial x_1}$: Rate of change of $f$ with respect to $x_1$, holding $x_2$ constant.
        *   $\frac{\partial f}{\partial x_2}$: Rate of change of $f$ with respect to $x_2$, holding $x_1$ constant.
    *   **Critical Points:** For an unconstrained optimization problem, a point $(x_1^*, x_2^*)$ is a critical point if:
        $\frac{\partial f}{\partial x_1}(x_1^*, x_2^*) = 0$
        $\frac{\partial f}{\partial x_2}(x_1^*, x_2^*) = 0$
    *   **Second Partial Derivatives (Hessian Matrix):** These are used to classify critical points.
        *   $f_{11} = \frac{\partial^2 f}{\partial x_1^2}$
        *   $f_{22} = \frac{\partial^2 f}{\partial x_2^2}$
        *   $f_{12} = f_{21} = \frac{\partial^2 f}{\partial x_1 \partial x_2} = \frac{\partial^2 f}{\partial x_2 \partial x_1}$ (Schwarz's Theorem: mixed partials are equal if continuous)

    *   **Second Derivative Test for Two Variables:** At a critical point $(x_1^*, x_2^*)$:
        Let $D = (f_{11})(f_{22}) - (f_{12})^2$.
        *   If $D > 0$ and $f_{11} > 0$, then $f$ has a **local minimum** at $(x_1^*, x_2^*)$.
        *   If $D > 0$ and $f_{11} < 0$, then $f$ has a **local maximum** at $(x_1^*, x_2^*)$.
        *   If $D < 0$, then $f$ has a **saddle point** at $(x_1^*, x_2^*)$.
        *   If $D = 0$, the test is inconclusive.

**Reference:** Chapter 2 of S.S. Rao's book provides a thorough explanation of partial derivatives and the second derivative test for functions of multiple variables. Xin-She Yang's "Optimization Techniques and Applications with Examples" also covers these fundamentals.

### 3.2. Example: Optimizing Production

A company's profit $P(x, y)$ from producing $x$ units of product A and $y$ units of product B is given by:
$P(x, y) = -x^2 + 10x - 2y^2 + 20y - 50$

To find the production levels that maximize profit:

1.  **Find first partial derivatives:**
    $\frac{\partial P}{\partial x} = -2x + 10$
    $\frac{\partial P}{\partial y} = -4y + 20$

2.  **Set derivatives to zero to find critical points:**
    $-2x + 10 = 0 \implies x = 5$
    $-4y + 20 = 0 \implies y = 5$
    The critical point is $(5, 5)$.

3.  **Find second partial derivatives:**
    $P_{xx} = \frac{\partial^2 P}{\partial x^2} = -2$
    $P_{yy} = \frac{\partial^2 P}{\partial y^2} = -4$
    $P_{xy} = \frac{\partial^2 P}{\partial x \partial y} = 0$

4.  **Calculate the discriminant D:**
    $D = (P_{xx})(P_{yy}) - (P_{xy})^2 = (-2)(-4) - (0)^2 = 8$

5.  **Apply the second derivative test:**
    Since $D = 8 > 0$ and $P_{xx} = -2 < 0$, the function $P(x, y)$ has a **local maximum** at $(5, 5)$.
    The maximum profit is $P(5, 5) = -(5)^2 + 10(5) - 2(5)^2 + 20(5) - 50 = -25 + 50 - 50 + 100 - 50 = 25$.

**Important Point:** In real-world engineering, the variables ($x_1, x_2$) often have physical constraints (e.g., $x_1 \ge 0, x_2 \ge 0$). If the critical point lies outside the feasible region, the optimum will be on the boundary of the feasible region. This leads to the study of constrained optimization.

---

## 4. Engineering Applications of Functions in Optimization

Functions of single and two variables are fundamental building blocks for formulating and solving a wide range of engineering optimization problems.

### 4.1. Examples

*   **Single Variable Optimization:**
    *   **Material Science:** Finding the optimal temperature for heat treatment of a material to achieve maximum strength. The strength can be a function of temperature.
    *   **Structural Engineering:** Determining the optimal cross-sectional area of a beam to minimize weight while satisfying deflection constraints. The weight can be a function of area.
    *   **Chemical Engineering:** Optimizing the flow rate of a reactant to maximize product yield. Yield can be a function of flow rate.

*   **Two Variable Optimization:**
    *   **Mechanical Design:** Optimizing the dimensions (e.g., length and width) of a component to minimize material cost while maximizing load-bearing capacity. Cost and capacity can be functions of multiple dimensions.
    *   **Electrical Engineering:** Designing an electronic circuit to minimize power consumption and maximize signal-to-noise ratio, where these metrics are functions of component values.
    *   **Aerospace Engineering:** Optimizing the wing shape (e.g., airfoil thickness and camber) to minimize drag and maximize lift. Drag and lift are functions of these geometric parameters.

**Reference:** S.S. Rao's book (Chapter 1) provides numerous examples of how optimization problems are formulated in various engineering disciplines, often starting with functions of single or multiple variables.

---

## 5. Practice Questions

1.  **Single Variable Function Optimization:**
    Consider the function $f(x) = x^3 - 6x^2 + 5$. Find the local minima and maxima of this function.
    *(Hint: Use first and second derivative tests).*

2.  **Two Variable Function Optimization:**
    Find the critical points of the function $f(x, y) = x^2 + y^2 - 4x + 6y + 13$ and classify them (local minimum, maximum, or saddle point).
    *(Hint: Use partial derivatives and the second derivative test).*

3.  **Engineering Application Formulation:**
    A company wants to manufacture a rectangular box with an open top. The volume of the box must be 32 cubic meters. The cost of the material for the base is $10 per square meter, and the cost of the material for the sides is $5 per square meter. Express the total cost $C$ as a function of the length $x$ and width $y$ of the base. Then, if the base is a square ($x=y$), express the cost as a function of a single variable and find the dimensions that minimize the cost.
    *(Hint: Let the height be $h$. Volume $V=xyh$. Express $h$ in terms of $x$ and $y$. Calculate base area and side areas. Formulate cost function $C(x, y)$. Then, for $x=y$, find $C(x)$ and optimize).*

---

## 6. Answers to Practice Questions

1.  **Single Variable Function Optimization:**
    $f(x) = x^3 - 6x^2 + 5$
    $f'(x) = 3x^2 - 12x$
    Set $f'(x) = 0$: $3x(x - 4) = 0 \implies x = 0$ or $x = 4$.
    $f''(x) = 6x - 12$
    *   At $x=0$: $f''(0) = 6(0) - 12 = -12 < 0$. Thus, there is a **local maximum** at $x=0$. $f(0) = 5$.
    *   At $x=4$: $f''(4) = 6(4) - 12 = 24 - 12 = 12 > 0$. Thus, there is a **local minimum** at $x=4$. $f(4) = 4^3 - 6(4^2) + 5 = 64 - 96 + 5 = -27$.

2.  **Two Variable Function Optimization:**
    $f(x, y) = x^2 + y^2 - 4x + 6y + 13$
    $\frac{\partial f}{\partial x} = 2x - 4$
    $\frac{\partial f}{\partial y} = 2y + 6$
    Set derivatives to zero:
    $2x - 4 = 0 \implies x = 2$
    $2y + 6 = 0 \implies y = -3$
    Critical point is $(2, -3)$.
    Second partial derivatives:
    $f_{xx} = 2$
    $f_{yy} = 2$
    $f_{xy} = 0$
    Discriminant $D = (f_{xx})(f_{yy}) - (f_{xy})^2 = (2)(2) - (0)^2 = 4$.
    Since $D = 4 > 0$ and $f_{xx} = 2 > 0$, the function has a **local minimum** at $(2, -3)$.
    $f(2, -3) = (2)^2 + (-3)^2 - 4(2) + 6(-3) + 13 = 4 + 9 - 8 - 18 + 13 = 0$.

3.  **Engineering Application Formulation:**
    Let the dimensions of the box be length $x$, width $y$, and height $h$.
    Volume $V = xyh = 32$. So, $h = \frac{32}{xy}$.
    Cost of the base = $10 \times (\text{Area of base}) = 10xy$.
    Area of the sides = $2(xh) + 2(yh)$.
    Cost of the sides = $5 \times (\text{Area of sides}) = 5 \times (2xh + 2yh) = 10xh + 10yh$.
    Total Cost $C(x, y) = 10xy + 10xh + 10yh$.
    Substitute $h = \frac{32}{xy}$:
    $C(x, y) = 10xy + 10x\left(\frac{32}{xy}\right) + 10y\left(\frac{32}{xy}\right)$
    $C(x, y) = 10xy + \frac{320}{y} + \frac{320}{x}$.

    Now, consider the case where the base is a square, so $x=y$.
    $C(x, x) = 10x(x) + \frac{320}{x} + \frac{320}{x}$
    $C(x) = 10x^2 + \frac{640}{x}$.

    To minimize $C(x)$:
    $C'(x) = 20x - \frac{640}{x^2}$.
    Set $C'(x) = 0$:
    $20x - \frac{640}{x^2} = 0$
    $20x = \frac{640}{x^2}$
    $20x^3 = 640$
    $x^3 = \frac{640}{20} = 32$
    $x = \sqrt[3]{32} = 2\sqrt[3]{4}$ meters.

    Since $x=y$, $y = 2\sqrt[3]{4}$ meters.
    To check if this is a minimum, find the second derivative:
    $C''(x) = 20 + \frac{1280}{x^3}$.
    For $x = 2\sqrt[3]{4} > 0$, $C''(x)$ will be positive, indicating a minimum.
    The dimensions that minimize the cost for a square base are approximately $x=y \approx 3.175$ meters.

---

## 7. Important Points to Remember

*   **Objective Function:** The core of an optimization problem; it's what you want to minimize or maximize.
*   **Decision Variables:** The parameters you can control to influence the objective function.
*   **Calculus for Extrema:** First derivatives (critical points) and second derivatives (classification of extrema) are essential tools for unconstrained optimization.
*   **Single vs. Multiple Variables:** The techniques extend from single-variable calculus (derivatives) to multivariable calculus (partial derivatives and the Hessian matrix).
*   **Engineering Relevance:** Functions of single and two variables are the mathematical representation of engineering performance metrics (cost, strength, efficiency, etc.) that are to be optimized by adjusting design parameters.
*   **Constraints:** While this topic focuses on the functions themselves, real-world problems almost always involve constraints that limit the feasible values of the decision variables, leading to constrained optimization.

---
This concludes the study notes for Functions of Single and Two Variables in Module 1. These concepts are foundational for understanding and applying various optimization techniques covered in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
