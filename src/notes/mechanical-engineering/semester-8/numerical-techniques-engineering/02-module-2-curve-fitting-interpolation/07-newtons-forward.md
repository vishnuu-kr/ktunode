---
title: "Newton’s forward"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 2: Curve fitting: Interpolation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646b0"
status: "completed"
scrapedAt: "2026-05-20T18:23:12.606Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - MODULE 2: CURVE FITTING: INTERPOLATION

## Topic: Newton's Forward Interpolation

### 1. Introduction to Interpolation

**Definition:** Interpolation is a process of estimating values between known data points. When we have a set of data points $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$, interpolation aims to find a function that passes through all these points.

**Purpose:**
*   To estimate values for independent variables that are not explicitly present in the dataset.
*   To smooth out noisy data by fitting a continuous function.
*   To approximate functions where analytical expressions are difficult or impossible to obtain.

**Types of Interpolation:**
*   **Polynomial Interpolation:** Fits a polynomial to the data points.
*   **Spline Interpolation:** Uses piecewise polynomial functions.

This module focuses on polynomial interpolation, and specifically Newton's forward difference interpolation formula.

### 2. Newton's Forward Difference Interpolation Formula

Newton's forward difference formula is a method of polynomial interpolation that is particularly useful when you need to interpolate at points close to the beginning of a tabulated dataset. It utilizes forward differences, which are calculated from data points that are equally spaced.

**Key Concepts:**

*   **Equally Spaced Data:** This method requires the independent variable ($x$) values to be equally spaced. Let the spacing be $h$, so $x_i = x_0 + i \cdot h$.
*   **Forward Differences:** These are differences between consecutive values of the dependent variable ($y$).
    *   **First Forward Difference ($\Delta y_i$):** $\Delta y_i = y_{i+1} - y_i$
    *   **Second Forward Difference ($\Delta^2 y_i$):** $\Delta^2 y_i = \Delta y_{i+1} - \Delta y_i$
    *   **k-th Forward Difference ($\Delta^k y_i$):** $\Delta^k y_i = \Delta^{k-1} y_{i+1} - \Delta^{k-1} y_i$

**Newton's Forward Difference Interpolation Formula:**

The formula for Newton's forward interpolation is given by:

$P_n(x) = y_0 + s \Delta y_0 + \frac{s(s-1)}{2!} \Delta^2 y_0 + \frac{s(s-1)(s-2)}{3!} \Delta^3 y_0 + \dots + \frac{s(s-1)\dots(s-n+1)}{n!} \Delta^n y_0$

where:
*   $P_n(x)$ is the interpolating polynomial of degree $n$.
*   $x_0$ is the first value of the independent variable in the dataset.
*   $h$ is the constant spacing between $x$ values.
*   $s = \frac{x - x_0}{h}$ is the normalized variable, representing how far $x$ is from $x_0$ in terms of $h$.
*   $y_0$ is the value of the dependent variable corresponding to $x_0$.
*   $\Delta^k y_0$ represents the k-th forward difference of $y$ at $x_0$.

**Derivation/Construction of Difference Table (Key Insight from Chapra & Canale):**
Newton's forward difference formula is derived from the relationship between the shift operator ($E$) and the forward difference operator ($\Delta$), where $E f(x) = f(x+h)$. We know that $\Delta = E - I$ (where $I$ is the identity operator). Thus, $E = I + \Delta$.
The interpolating polynomial $P(x)$ can be thought of as $P(x) = E^s y_0$, where $s = (x-x_0)/h$.
So, $P(x) = (I + \Delta)^s y_0$.
Using the generalized binomial theorem, $(1+z)^s = 1 + sz + \frac{s(s-1)}{2!}z^2 + \dots$.
Applying this with $z = \Delta$, we get:
$P(x) = \left(1 + s\Delta + \frac{s(s-1)}{2!}\Delta^2 + \dots\right) y_0$
$P(x) = y_0 + s\Delta y_0 + \frac{s(s-1)}{2!}\Delta^2 y_0 + \dots$

**Difference Table Construction:**

A difference table helps organize the calculation of forward differences.

| $x$   | $y$   | $\Delta y$          | $\Delta^2 y$        | $\Delta^3 y$        | ... |
| :---- | :---- | :------------------ | :------------------ | :------------------ | :-- |
| $x_0$ | $y_0$ | $\Delta y_0 = y_1 - y_0$ | $\Delta^2 y_0 = \Delta y_1 - \Delta y_0$ | $\Delta^3 y_0 = \Delta^2 y_1 - \Delta^2 y_0$ | ... |
| $x_1$ | $y_1$ | $\Delta y_1 = y_2 - y_1$ | $\Delta^2 y_1 = \Delta y_2 - \Delta y_1$ | $\Delta^3 y_1 = \Delta^2 y_2 - \Delta^2 y_1$ | ... |
| $x_2$ | $y_2$ | $\Delta y_2 = y_3 - y_2$ | $\Delta^2 y_2 = \Delta y_3 - \Delta y_2$ | ... | ... |
| $x_3$ | $y_3$ | $\Delta y_3 = y_4 - y_3$ | ...                 | ...                 | ... |
| ...   | ...   | ...                 | ...                 | ...                 | ... |

**Important Note:** For Newton's forward formula, we use the differences starting from the top row of the table ($\Delta y_0, \Delta^2 y_0, \Delta^3 y_0, \dots$).

### 3. Steps to Apply Newton's Forward Interpolation

1.  **Verify Equally Spaced Data:** Ensure that the $x$ values in the given data are equally spaced. If not, Newton's forward difference formula cannot be directly applied.
2.  **Construct a Difference Table:** Calculate the first, second, third, and subsequent forward differences for the $y$ values.
3.  **Identify Required Values:**
    *   $x_0$: The first $x$ value in your dataset.
    *   $y_0$: The $y$ value corresponding to $x_0$.
    *   $h$: The constant spacing between $x$ values.
    *   $x$: The value at which you want to interpolate.
    *   $\Delta y_0, \Delta^2 y_0, \Delta^3 y_0, \dots$: The first differences from the top row of the difference table.
4.  **Calculate `s`:** Use the formula $s = \frac{x - x_0}{h}$.
5.  **Apply the Formula:** Substitute the values of $y_0, s,$ and the forward differences into Newton's forward interpolation formula.
6.  **Calculate the Result:** Evaluate the polynomial to find the interpolated value $P_n(x)$.

**Choice of `n` (Degree of Polynomial):**
The degree of the polynomial used depends on the number of data points available and the required accuracy.
*   If you use $n+1$ data points, you are essentially fitting a polynomial of degree $n$.
*   In practice, you often use a lower-degree polynomial than $n$ if the higher-order differences become very small, indicating that the polynomial has converged.

### 4. Example

**Problem:** Using Newton's forward interpolation formula, find the value of $y$ when $x=2.5$ from the following data:

| $x$ | $y$ |
| :-- | :-- |
| 2   | 10  |
| 3   | 13  |
| 4   | 18  |
| 5   | 25  |

**Solution:**

1.  **Verify Equally Spaced Data:** The $x$ values are 2, 3, 4, 5. The spacing $h = 3 - 2 = 1$. The data is equally spaced.
2.  **Construct a Difference Table:**

    | $x$ | $y$ | $\Delta y$ | $\Delta^2 y$ | $\Delta^3 y$ |
    | :-- | :-- | :--------- | :----------- | :----------- |
    | 2   | 10  |            |              |              |
    |     |     | $13 - 10 = 3$ |              |              |
    | 3   | 13  |            | $5 - 3 = 2$  |              |
    |     |     | $18 - 13 = 5$ |              | $2 - 2 = 0$  |
    | 4   | 18  |            | $7 - 5 = 2$  |              |
    |     |     | $25 - 18 = 7$ |              |              |
    | 5   | 25  |            |              |              |

3.  **Identify Required Values:**
    *   $x_0 = 2$
    *   $y_0 = 10$
    *   $h = 1$
    *   $x = 2.5$
    *   $\Delta y_0 = 3$
    *   $\Delta^2 y_0 = 2$
    *   $\Delta^3 y_0 = 0$

4.  **Calculate `s`:**
    $s = \frac{x - x_0}{h} = \frac{2.5 - 2}{1} = \frac{0.5}{1} = 0.5$

5.  **Apply the Formula:**
    We'll use a polynomial up to degree 3 (since we have $\Delta^3 y_0$). The formula is:
    $P_3(x) = y_0 + s \Delta y_0 + \frac{s(s-1)}{2!} \Delta^2 y_0 + \frac{s(s-1)(s-2)}{3!} \Delta^3 y_0$

    Substitute the values:
    $P_3(2.5) = 10 + (0.5)(3) + \frac{(0.5)(0.5 - 1)}{2!} (2) + \frac{(0.5)(0.5 - 1)(0.5 - 2)}{3!} (0)$

6.  **Calculate the Result:**
    $P_3(2.5) = 10 + 1.5 + \frac{(0.5)(-0.5)}{2} (2) + \frac{(0.5)(-0.5)(-1.5)}{6} (0)$
    $P_3(2.5) = 10 + 1.5 + \frac{-0.25}{2} (2) + 0$
    $P_3(2.5) = 10 + 1.5 + (-0.125)(2)$
    $P_3(2.5) = 10 + 1.5 - 0.25$
    $P_3(2.5) = 11.25$

**Therefore, the interpolated value of $y$ at $x=2.5$ is 11.25.**

*(This example aligns with the methods described in Chapra & Canale, and Balagurusamy.)*

### 5. Important Points to Remember

*   **Equally Spaced Data is Crucial:** Newton's forward difference formula is strictly for data with uniform spacing in the independent variable.
*   **Choice of `x_0`:** For Newton's forward formula, $x_0$ should be the **first** data point in the table. This is because the formula uses differences starting from the top of the table.
*   **Interpolating Near the Beginning:** Newton's forward formula is most accurate when interpolating values near the beginning of the dataset. For values near the end, Newton's backward difference formula or other methods might be more suitable.
*   **Degree of Polynomial:** The degree of the polynomial to use can be determined by the number of data points or by observing when the higher-order differences become negligible. Using a higher degree polynomial can lead to oscillations (Runge's phenomenon) if not careful.
*   **Difference Table Accuracy:** Ensure careful calculation of differences. An error in one difference will propagate to subsequent differences.

### 6. Relation to Course Outcomes (COs)

*   **CO1: Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3)**
    *   While not directly solving equations, interpolation itself can be used to find roots (where $y=0$) of functions represented by data points. If you set $P_n(x) = 0$, you are essentially solving a polynomial equation.
*   **CO2: Implement numerical schemes to fit data (Knowledge Level: K3)**
    *   This topic directly addresses fitting data with a polynomial. Newton's forward formula is a scheme that fits a polynomial through a given set of data points. Understanding this method is a core part of fitting data.
*   **CO3: Solve differentiation and integration numerically (Knowledge Level: K3)**
    *   Once an interpolating polynomial $P_n(x)$ is obtained, it can be easily differentiated or integrated analytically. This provides a way to approximate the derivative or integral of the underlying function represented by the data. For example, $y'(x) \approx P_n'(x)$ and $\int y(x) dx \approx \int P_n(x) dx$.

### 7. Practice Questions/Exercises

**Question 1:**
Given the following data, use Newton's forward interpolation formula to estimate $y$ at $x=0.25$.

| $x$ | $y$ |
| :-- | :-- |
| 0   | 1   |
| 1   | 7   |
| 2   | 25  |
| 3   | 61  |

**Question 2:**
A company's profit for the first five years is given in the table below. Estimate the profit in the 1.5th year using Newton's forward interpolation.

| Year ($x$) | Profit ($y$ in thousands) |
| :--------- | :------------------------ |
| 1          | 10                        |
| 2          | 15                        |
| 3          | 23                        |
| 4          | 35                        |
| 5          | 50                        |

**Question 3:**
Find the polynomial of degree 3 which passes through the points (0, 1), (1, 3), (2, 7), (3, 13). Use this polynomial to estimate the value of $y$ at $x = 1.5$.

---

### Answers to Practice Questions

**Answer 1:**

1.  **Difference Table:**
    | $x$ | $y$ | $\Delta y$ | $\Delta^2 y$ | $\Delta^3 y$ |
    | :-- | :-- | :--------- | :----------- | :----------- |
    | 0   | 1   |            |              |              |
    |     |     | 6          |              |              |
    | 1   | 7   |            | 11           |              |
    |     |     | 18         |              | 7            |
    | 2   | 25  |            | 18           |              |
    |     |     | 36         |              |              |
    | 3   | 61  |            |              |              |

2.  **Identify Values:**
    *   $x_0 = 0$
    *   $y_0 = 1$
    *   $h = 1$
    *   $x = 0.25$
    *   $\Delta y_0 = 6$
    *   $\Delta^2 y_0 = 11$
    *   $\Delta^3 y_0 = 7$

3.  **Calculate `s`:**
    $s = \frac{0.25 - 0}{1} = 0.25$

4.  **Apply Formula:**
    $P_3(x) = y_0 + s \Delta y_0 + \frac{s(s-1)}{2!} \Delta^2 y_0 + \frac{s(s-1)(s-2)}{3!} \Delta^3 y_0$
    $P_3(0.25) = 1 + (0.25)(6) + \frac{(0.25)(0.25-1)}{2} (11) + \frac{(0.25)(0.25-1)(0.25-2)}{6} (7)$
    $P_3(0.25) = 1 + 1.5 + \frac{(0.25)(-0.75)}{2} (11) + \frac{(0.25)(-0.75)(-1.75)}{6} (7)$
    $P_3(0.25) = 2.5 + \frac{-0.1875}{2} (11) + \frac{0.328125}{6} (7)$
    $P_3(0.25) = 2.5 + (-0.09375)(11) + (0.0546875)(7)$
    $P_3(0.25) = 2.5 - 1.03125 + 0.3828125$
    $P_3(0.25) = 1.8515625$

**Estimated profit in the 0.25th year is approximately 1.85 (thousand).**

**Answer 2:**

1.  **Difference Table:**
    | $x$ | $y$ | $\Delta y$ | $\Delta^2 y$ | $\Delta^3 y$ |
    | :-- | :-- | :--------- | :----------- | :----------- |
    | 1   | 10  |            |              |              |
    |     |     | 5          |              |              |
    | 2   | 15  |            | 3            |              |
    |     |     | 8          |              | 2            |
    | 3   | 23  |            | 5            |              |
    |     |     | 12         |              | 0            |
    | 4   | 35  |            | 5            |              |
    |     |     | 15         |              |              |
    | 5   | 50  |            |              |              |

2.  **Identify Values:**
    *   $x_0 = 1$
    *   $y_0 = 10$
    *   $h = 1$
    *   $x = 1.5$
    *   $\Delta y_0 = 5$
    *   $\Delta^2 y_0 = 3$
    *   $\Delta^3 y_0 = 2$

3.  **Calculate `s`:**
    $s = \frac{1.5 - 1}{1} = 0.5$

4.  **Apply Formula:**
    $P_3(x) = y_0 + s \Delta y_0 + \frac{s(s-1)}{2!} \Delta^2 y_0 + \frac{s(s-1)(s-2)}{3!} \Delta^3 y_0$
    $P_3(1.5) = 10 + (0.5)(5) + \frac{(0.5)(0.5-1)}{2} (3) + \frac{(0.5)(0.5-1)(0.5-2)}{6} (2)$
    $P_3(1.5) = 10 + 2.5 + \frac{(0.5)(-0.5)}{2} (3) + \frac{(0.5)(-0.5)(-1.5)}{6} (2)$
    $P_3(1.5) = 12.5 + \frac{-0.25}{2} (3) + \frac{0.375}{6} (2)$
    $P_3(1.5) = 12.5 + (-0.125)(3) + (0.0625)(2)$
    $P_3(1.5) = 12.5 - 0.375 + 0.125$
    $P_3(1.5) = 12.25$

**Estimated profit in the 1.5th year is 12.25 (thousand).**

**Answer 3:**

1.  **Difference Table:**
    | $x$ | $y$ | $\Delta y$ | $\Delta^2 y$ | $\Delta^3 y$ |
    | :-- | :-- | :--------- | :----------- | :----------- |
    | 0   | 1   |            |              |              |
    |     |     | 2          |              |              |
    | 1   | 3   |            | 2            |              |
    |     |     | 4          |              | 2            |
    | 2   | 7   |            | 4            |              |
    |     |     | 6          |              |              |
    | 3   | 13  |            |              |              |

2.  **Identify Values:**
    *   $x_0 = 0$
    *   $y_0 = 1$
    *   $h = 1$
    *   $x = 1.5$
    *   $\Delta y_0 = 2$
    *   $\Delta^2 y_0 = 2$
    *   $\Delta^3 y_0 = 2$

3.  **Calculate `s`:**
    $s = \frac{1.5 - 0}{1} = 1.5$

4.  **Apply Formula:**
    $P_3(x) = y_0 + s \Delta y_0 + \frac{s(s-1)}{2!} \Delta^2 y_0 + \frac{s(s-1)(s-2)}{3!} \Delta^3 y_0$
    $P_3(1.5) = 1 + (1.5)(2) + \frac{(1.5)(1.5-1)}{2} (2) + \frac{(1.5)(1.5-1)(1.5-2)}{6} (2)$
    $P_3(1.5) = 1 + 3 + \frac{(1.5)(0.5)}{2} (2) + \frac{(1.5)(0.5)(-0.5)}{6} (2)$
    $P_3(1.5) = 4 + (0.75)(1) + \frac{-0.375}{6} (2)$
    $P_3(1.5) = 4 + 0.75 - 0.0625 \times 2$
    $P_3(1.5) = 4.75 - 0.125$
    $P_3(1.5) = 4.625$

**The polynomial of degree 3 is $P_3(x) = 1 + 2x + x(x-1) + \frac{x(x-1)(x-2)}{6}$.**
(To find the polynomial form: $P_3(x) = 1 + 2x + x^2 - x + \frac{1}{6}(x^3 - 3x^2 + 2x) = 1 + x + x^2 + \frac{1}{6}x^3 - \frac{1}{2}x^2 + \frac{1}{3}x = \frac{1}{6}x^3 + \frac{1}{2}x^2 + \frac{4}{3}x + 1$)
**The estimated value of $y$ at $x = 1.5$ is 4.625.**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
