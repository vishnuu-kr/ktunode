---
title: "backward"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 2: Curve fitting: Interpolation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646ab"
status: "completed"
scrapedAt: "2026-05-20T18:23:08.680Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 2: Curve Fitting: Interpolation

### Topic: Backward Interpolation

This topic focuses on **backward interpolation**, a technique used to estimate values of a function at points that lie *before* a known data set. This is in contrast to forward interpolation, which estimates values *after* the known data.

**Relevance to Course Outcomes:**

*   **CO1: Apply numerical methods to solve linear and nonlinear equations:** While not directly solving equations, interpolation methods are built upon the underlying principles of approximating functions, which are fundamental to solving equations.
*   **CO2: Implement numerical schemes to fit data:** Backward interpolation is a direct method for fitting data, allowing us to estimate values within a given data range. (Knowledge Level: K3)
*   **CO3: Solve differentiation and integration numerically:** Interpolation forms the basis for many numerical differentiation and integration techniques (e.g., Newton-Cotes formulas).
*   **CO4: Execute numerical procedures to solve ordinary and partial differential equations:** Interpolation is often used to discretize differential equations and approximate solutions at specific grid points.

---

### 1. Key Concepts and Definitions

*   **Interpolation:** The process of finding a function that passes through a given set of data points. The goal is to estimate the value of the function at a point that lies *between* the known data points.
*   **Extrapolation:** The process of estimating the value of a function at a point that lies *outside* the range of the known data points. Backward interpolation is a form of extrapolation when the point of interest is before the first data point.
*   **Data Points:** A set of pairs of independent and dependent variables, $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$, where $y_i = f(x_i)$.
*   **Uniformly Spaced Data:** Data points where the difference between consecutive $x$ values is constant, i.e., $x_{i+1} - x_i = h$ for all $i$.
*   **Backward Difference:** The difference between a function's value at a point and its value at the previous point. For a function $f$, the backward difference operator $\nabla$ is defined as:
    $\nabla f(x) = f(x) - f(x-h)$
    where $h$ is the step size.
*   **Higher-Order Backward Differences:** These are obtained by repeatedly applying the backward difference operator.
    *   Second backward difference: $\nabla^2 y_i = \nabla y_i - \nabla y_{i-1} = (y_i - y_{i-1}) - (y_{i-1} - y_{i-2}) = y_i - 2y_{i-1} + y_{i-2}$
    *   Third backward difference: $\nabla^3 y_i = \nabla^2 y_i - \nabla^2 y_{i-1}$
    And so on.

---

### 2. Why Backward Interpolation?

Backward interpolation is particularly useful when you need to estimate a value:

*   **Near the beginning of a data set:** If your point of interest, $x$, is close to $x_0$ or even before $x_0$.
*   **When using backward differences is computationally efficient:** Certain formulas are derived using backward differences and are best suited for this scenario.

---

### 3. Newton's Backward Difference Interpolation Formula

This is a widely used formula for backward interpolation, especially for uniformly spaced data.

**Formula:**

The Newton's backward difference interpolation formula is given by:

$y(x) = y_n + s \nabla y_n + \frac{s(s+1)}{2!} \nabla^2 y_n + \frac{s(s+1)(s+2)}{3!} \nabla^3 y_n + \dots + \frac{s(s+1)\dots(s+n-1)}{n!} \nabla^n y_n$

Where:

*   $y(x)$ is the interpolated value at point $x$.
*   $y_n$ is the dependent variable value at the last known data point ($x_n$).
*   $s$ is a parameter defined as: $s = \frac{x - x_n}{h}$
    *   $x$ is the point at which we want to interpolate.
    *   $x_n$ is the last (largest) $x$ value in the data set.
    *   $h$ is the uniform spacing between data points ($x_i - x_{i-1}$).
*   $\nabla y_n, \nabla^2 y_n, \nabla^3 y_n, \dots$ are the backward differences of the dependent variable, evaluated at $y_n$.

**Important Note on 's':**
For backward interpolation, the point $x$ is typically less than or equal to $x_n$. This means $s$ will be less than or equal to 0.

---

### 4. Constructing a Backward Difference Table

To use Newton's backward difference formula, we need to construct a difference table.

**Steps:**

1.  **List the data points:** Organize your data in ascending order of $x$.
2.  **Calculate first backward differences:** $\nabla y_i = y_i - y_{i-1}$
3.  **Calculate second backward differences:** $\nabla^2 y_i = \nabla y_i - \nabla y_{i-1}$
4.  **Continue for higher-order differences:** $\nabla^k y_i = \nabla^{k-1} y_i - \nabla^{k-1} y_{i-1}$

**Example Difference Table:**

| $x$   | $y$    | $\nabla y$ | $\nabla^2 y$ | $\nabla^3 y$ |
| :---- | :----- | :--------- | :----------- | :----------- |
| $x_0$ | $y_0$  |            |              |              |
| $x_1$ | $y_1$  | $\nabla y_1 = y_1 - y_0$ |              |              |
| $x_2$ | $y_2$  | $\nabla y_2 = y_2 - y_1$ | $\nabla^2 y_2 = \nabla y_2 - \nabla y_1$ |              |
| $x_3$ | $y_3$  | $\nabla y_3 = y_3 - y_2$ | $\nabla^2 y_3 = \nabla y_3 - \nabla y_2$ | $\nabla^3 y_3 = \nabla^2 y_3 - \nabla^2 y_2$ |
| ...   | ...    | ...        | ...          | ...          |

**Key values for Newton's Backward Formula:**
We use the diagonal of differences starting from the last data point ($y_n$). These are $\nabla y_n, \nabla^2 y_n, \nabla^3 y_n, \dots$

---

### 5. Example: Applying Newton's Backward Interpolation

**Problem:**
Given the following data, estimate the value of $y$ at $x = 4.2$.

| $x$ | $y$ |
| :-- | :-- |
| 1   | 2   |
| 2   | 4   |
| 3   | 8   |
| 4   | 16  |
| 5   | 32  |

**Solution:**

1.  **Identify the last data point and step size:**
    $x_n = x_4 = 5$, $y_n = y_4 = 32$.
    $h = 2-1 = 1$.

2.  **Construct the backward difference table:**

    | $x$ | $y$  | $\nabla y$ | $\nabla^2 y$ | $\nabla^3 y$ | $\nabla^4 y$ |
    | :-- | :--- | :--------- | :----------- | :----------- | :----------- |
    | 1   | 2    |            |              |              |              |
    | 2   | 4    | $4-2=2$    |              |              |              |
    | 3   | 8    | $8-4=4$    | $4-2=2$      |              |              |
    | 4   | 16   | $16-8=8$   | $8-4=4$      | $4-2=2$      |              |
    | 5   | 32   | $32-16=16$ | $16-8=8$     | $8-4=4$      | $4-2=2$      |

    The required differences at $y_n=y_4=32$ are:
    $\nabla y_4 = 16$
    $\nabla^2 y_4 = 8$
    $\nabla^3 y_4 = 4$
    $\nabla^4 y_4 = 2$

3.  **Calculate 's':**
    $x = 4.2$
    $s = \frac{x - x_n}{h} = \frac{4.2 - 5}{1} = -0.8$

4.  **Apply Newton's Backward Interpolation Formula:**

    $y(x) = y_4 + s \nabla y_4 + \frac{s(s+1)}{2!} \nabla^2 y_4 + \frac{s(s+1)(s+2)}{3!} \nabla^3 y_4 + \frac{s(s+1)(s+2)(s+3)}{4!} \nabla^4 y_4$

    $y(4.2) = 32 + (-0.8)(16) + \frac{(-0.8)(-0.8+1)}{2} (8) + \frac{(-0.8)(-0.8+1)(-0.8+2)}{6} (4) + \frac{(-0.8)(-0.8+1)(-0.8+2)(-0.8+3)}{24} (2)$

    $y(4.2) = 32 + (-12.8) + \frac{(-0.8)(0.2)}{2} (8) + \frac{(-0.8)(0.2)(1.2)}{6} (4) + \frac{(-0.8)(0.2)(1.2)(2.2)}{24} (2)$

    $y(4.2) = 32 - 12.8 + (-0.08)(8) + \frac{-0.192}{6} (4) + \frac{-0.4224}{24} (2)$

    $y(4.2) = 32 - 12.8 - 0.64 + (-0.032)(4) + (-0.0176)(2)$

    $y(4.2) = 32 - 12.8 - 0.64 - 0.128 - 0.0352$

    $y(4.2) = 18.4$

    **Verification:** In this specific example, the data follows $y = 2^x$. So, $y(4.2) = 2^{4.2} \approx 18.379$. The interpolated value is very close.

---

### 6. Important Points to Remember

*   **Data Ordering:** Ensure your data points are sorted in ascending order of $x$ for consistent difference table construction and formula application.
*   **Uniform Spacing:** Newton's backward formula is derived assuming uniform spacing ($h$). If data is not uniformly spaced, other interpolation methods like Lagrange interpolation or Neville's algorithm are preferred.
*   **Point of Interpolation:** For backward interpolation, the point $x$ is typically less than or equal to the largest $x_n$. If $x > x_n$, it becomes extrapolation.
*   **Choice of Formula:** Newton's backward formula is most effective when interpolating near the end of the data range. If interpolating near the beginning, Newton's forward difference formula is usually more efficient.
*   **Accuracy:** The accuracy of the interpolation depends on the degree of the polynomial used (i.e., the number of differences included) and the nature of the underlying function. Higher-order differences generally lead to better accuracy, but can also introduce oscillations if the function is not smooth.
*   **Reference Books:**
    *   **Chapra & Canale (6th Ed., 2010):** Chapter 13 (Interpolation and Regression) would cover interpolation techniques. They often emphasize the practical application and error analysis.
    *   **Gupta S.K. (1995):** Likely provides a detailed mathematical derivation of these formulas.
    *   **Balagurusamy (2017):** Often presents numerical methods with a strong focus on implementation in programming languages, which can be helpful for understanding the algorithm.
    *   **Jain, Iyengar & Jain:** This is a comprehensive reference, offering rigorous treatment of numerical analysis concepts, including interpolation.

---

### 7. Practice Questions / Exercises

**Question 1:**
Given the following data points:

| $x$ | $y$ |
| :-- | :-- |
| 10  | 45  |
| 20  | 55  |
| 30  | 70  |
| 40  | 80  |
| 50  | 95  |

Estimate the value of $y$ at $x = 25$ using Newton's backward difference formula.

**Answer 1:**
1.  **Last data point:** $x_n = 50$, $y_n = 95$.
    **Step size:** $h = 10$.
2.  **Difference Table:**

    | $x$ | $y$  | $\nabla y$ | $\nabla^2 y$ | $\nabla^3 y$ | $\nabla^4 y$ |
    | :-- | :--- | :--------- | :----------- | :----------- | :----------- |
    | 10  | 45   |            |              |              |              |
    | 20  | 55   | 10         |              |              |              |
    | 30  | 70   | 15         | 5            |              |              |
    | 40  | 80   | 10         | -5           | -10          |              |
    | 50  | 95   | 15         | 5            | 10           | 20           |

    Required differences at $y_5=95$: $\nabla y_5=15, \nabla^2 y_5=5, \nabla^3 y_5=10, \nabla^4 y_5=20$.
3.  **Calculate 's':**
    $s = \frac{25 - 50}{10} = \frac{-25}{10} = -2.5$
4.  **Apply Formula:**
    $y(25) = y_5 + s \nabla y_5 + \frac{s(s+1)}{2!} \nabla^2 y_5 + \frac{s(s+1)(s+2)}{3!} \nabla^3 y_5 + \frac{s(s+1)(s+2)(s+3)}{4!} \nabla^4 y_5$

    $y(25) = 95 + (-2.5)(15) + \frac{(-2.5)(-1.5)}{2}(5) + \frac{(-2.5)(-1.5)(0.5)}{6}(10) + \frac{(-2.5)(-1.5)(0.5)(1.5)}{24}(20)$

    $y(25) = 95 - 37.5 + \frac{3.75}{2}(5) + \frac{1.875}{6}(10) + \frac{2.8125}{24}(20)$

    $y(25) = 95 - 37.5 + 1.875 \times 2.5 + 0.3125 \times 10 + 0.1171875 \times 20$

    $y(25) = 95 - 37.5 + 4.6875 + 3.125 + 2.34375$

    $y(25) \approx 67.656$

**Question 2:**
Consider the data: $f(1) = 2$, $f(2) = 5$, $f(3) = 10$, $f(4) = 17$. Estimate $f(1.5)$ using Newton's backward difference formula.

**Answer 2:**
1.  **Last data point:** $x_n = 4$, $y_n = 17$.
    **Step size:** $h = 1$.
2.  **Difference Table:**

    | $x$ | $y$  | $\nabla y$ | $\nabla^2 y$ | $\nabla^3 y$ |
    | :-- | :--- | :--------- | :----------- | :----------- |
    | 1   | 2    |            |              |              |
    | 2   | 5    | 3          |              |              |
    | 3   | 10   | 5          | 2            |              |
    | 4   | 17   | 7          | 2            | 0            |

    Required differences at $y_4=17$: $\nabla y_4=7, \nabla^2 y_4=2, \nabla^3 y_4=0$.
3.  **Calculate 's':**
    $s = \frac{1.5 - 4}{1} = -2.5$
4.  **Apply Formula:**
    $y(1.5) = y_4 + s \nabla y_4 + \frac{s(s+1)}{2!} \nabla^2 y_4 + \frac{s(s+1)(s+2)}{3!} \nabla^3 y_4$

    $y(1.5) = 17 + (-2.5)(7) + \frac{(-2.5)(-1.5)}{2}(2) + \frac{(-2.5)(-1.5)(0.5)}{6}(0)$

    $y(1.5) = 17 - 17.5 + \frac{3.75}{2}(2) + 0$

    $y(1.5) = 17 - 17.5 + 3.75$

    $y(1.5) = 3.25$

    **Verification:** The data follows $y = x^2 + 1$. So, $f(1.5) = (1.5)^2 + 1 = 2.25 + 1 = 3.25$. This matches exactly.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
