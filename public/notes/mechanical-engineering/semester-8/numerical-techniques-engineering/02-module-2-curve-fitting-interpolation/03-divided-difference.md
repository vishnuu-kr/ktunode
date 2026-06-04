---
title: "divided difference"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 2: Curve fitting: Interpolation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646ac"
status: "completed"
scrapedAt: "2026-05-20T18:23:09.378Z"
---
# NUMERICAL TECHNIQUES ENGINEERING: Module 2 - Curve Fitting: Interpolation

## Topic: Divided Differences

**Knowledge Level:** K3 (Apply)

### Learning Outcomes Covered:

*   **Understand the concept of divided differences** and their role in constructing interpolating polynomials.
*   **Compute divided differences** for a given set of data points.
*   **Formulate Newton's divided difference interpolating polynomial.**
*   **Apply Newton's divided difference method** to interpolate values for new data points.
*   **Analyze the advantages and disadvantages** of divided differences compared to other interpolation methods.
*   **Relate the concept of divided differences to the construction of Lagrange interpolating polynomials** (though the focus here is on the divided difference formulation).

### Course Outcomes Alignment:

*   **CO2: Implement numerical schemes to fit data.** Divided differences provide a systematic way to construct interpolating polynomials, which are a primary method for fitting data. (Knowledge Level: K3)

### 1. Introduction to Interpolation and the Need for Divided Differences

**Interpolation** is the process of finding a function that passes through a given set of data points. When we have discrete data points, we often need to estimate values between these points. Polynomial interpolation is a common technique to achieve this.

**Why Divided Differences?**

While Lagrange interpolation provides a direct formula for the interpolating polynomial, it can be computationally cumbersome, especially when adding new data points. Each time a new point is added, the entire Lagrange polynomial needs to be recomputed.

Newton's divided difference method offers an **incremental approach** to polynomial interpolation. It allows for the efficient addition of new data points to an existing interpolating polynomial without recomputing the entire polynomial from scratch. This makes it particularly useful when dealing with a growing dataset or when the degree of the interpolating polynomial is not fixed beforehand.

**Key Concepts:**

*   **Data Points:** A set of (x, y) pairs, often denoted as $(x_0, y_0), (x_1, y_1), ..., (x_n, y_n)$.
*   **Interpolating Polynomial:** A polynomial that passes through all the given data points.

---

### 2. Divided Differences: Definition and Calculation

Divided differences are a sequence of coefficients that are used in Newton's divided difference interpolating polynomial. They are defined recursively.

**Definition of Divided Differences:**

Given a set of $n+1$ data points $(x_0, y_0), (x_1, y_1), ..., (x_n, y_n)$, the $k$-th order divided difference is denoted by $f[x_0, x_1, ..., x_k]$.

*   **Zeroth Order Divided Difference:**
    This is simply the function value itself.
    $$f[x_i] = y_i$$

*   **First Order Divided Difference:**
    This is the slope of the line segment connecting two adjacent points.
    $$f[x_0, x_1] = \frac{f(x_1) - f(x_0)}{x_1 - x_0} = \frac{y_1 - y_0}{x_1 - x_0}$$
    In general:
    $$f[x_i, x_{i+1}] = \frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i} = \frac{y_{i+1} - y_i}{x_{i+1} - x_i}$$

*   **Second Order Divided Difference:**
    This is the difference between two first-order divided differences, divided by the difference between the first and last x-values involved.
    $$f[x_0, x_1, x_2] = \frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0}$$

*   **k-th Order Divided Difference (General Formula):**
    The $k$-th order divided difference can be computed from the $(k-1)$-th order divided differences as follows:
    $$f[x_0, x_1, ..., x_k] = \frac{f[x_1, x_2, ..., x_k] - f[x_0, x_1, ..., x_{k-1}]}{x_k - x_0}$$

**Important Note:** The divided difference is independent of the order of the points $x_0, x_1, ..., x_k$. That is, $f[x_0, x_1, ..., x_k] = f[x_{i_0}, x_{i_1}, ..., x_{i_k}]$ for any permutation $(i_0, i_1, ..., i_k)$ of $(0, 1, ..., k)$.

---

### 3. Construction of Divided Difference Tables

A systematic way to organize the calculation of divided differences is by using a divided difference table.

**Example:** Fit a polynomial to the following data points: $(0, 1), (1, 3), (2, 8), (3, 15)$.

| $x_i$ | $f[x_i]$        | First Divided Differences | Second Divided Differences | Third Divided Differences |
| :---- | :-------------- | :------------------------ | :------------------------- | :------------------------ |
| 0     | 1               |                           |                            |                           |
|       |                 | $f[x_0, x_1] = \frac{3-1}{1-0} = 2$ |                            |                           |
| 1     | 3               |                           | $f[x_0, x_1, x_2] = \frac{5-2}{2-0} = 1.5$ |                           |
|       |                 | $f[x_1, x_2] = \frac{8-3}{2-1} = 5$ |                            | $f[x_0, x_1, x_2, x_3] = \frac{3.5-1.5}{3-0} = \frac{2}{3}$ |
| 2     | 8               |                           | $f[x_1, x_2, x_3] = \frac{7-5}{3-1} = 1$   |                           |
|       |                 | $f[x_2, x_3] = \frac{15-8}{3-2} = 7$ |                            |                           |
| 3     | 15              |                           |                            |                           |

**Explanation of the Table Construction:**

1.  **Column 1:** List the $x_i$ values in increasing order.
2.  **Column 2:** List the corresponding $f(x_i)$ (or $y_i$) values. These are the zeroth-order divided differences.
3.  **Column 3:** Calculate the first-order divided differences using adjacent pairs from Column 2 and Column 1. For example, $f[x_0, x_1] = (y_1 - y_0) / (x_1 - x_0)$.
4.  **Column 4:** Calculate the second-order divided differences using adjacent pairs from Column 3 and the appropriate $x_i$ values. For example, $f[x_0, x_1, x_2] = (f[x_1, x_2] - f[x_0, x_1]) / (x_2 - x_0)$.
5.  **Continue:** Repeat this process for higher-order divided differences until you reach the highest possible order (which is $n$ for $n+1$ data points).

**Key Observations from the Table:**

*   The entries on the diagonals are the divided differences needed for Newton's polynomial.
*   For $n+1$ data points, the highest order divided difference will be of order $n$.

---

### 4. Newton's Divided Difference Interpolating Polynomial

The interpolating polynomial $P(x)$ that passes through the $n+1$ data points $(x_0, y_0), ..., (x_n, y_n)$ can be expressed in terms of divided differences as:

$$P_n(x) = f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + ... + f[x_0, x_1, ..., x_n](x - x_0)(x - x_1)...(x - x_{n-1})$$

This can be written more compactly using summation notation:

$$P_n(x) = \sum_{k=0}^{n} f[x_0, x_1, ..., x_k] \prod_{i=0}^{k-1} (x - x_i)$$

where $\prod_{i=0}^{-1} (x - x_i)$ is defined as 1.

**Using the Example Data:**

From the table above, the required divided differences are:
*   $f[x_0] = 1$
*   $f[x_0, x_1] = 2$
*   $f[x_0, x_1, x_2] = 1.5$
*   $f[x_0, x_1, x_2, x_3] = \frac{2}{3}$

So, the Newton's divided difference interpolating polynomial for this data is:

$$P_3(x) = 1 + 2(x - 0) + 1.5(x - 0)(x - 1) + \frac{2}{3}(x - 0)(x - 1)(x - 2)$$

**Simplifying the Polynomial:**

$$P_3(x) = 1 + 2x + 1.5x(x - 1) + \frac{2}{3}x(x^2 - 3x + 2)$$
$$P_3(x) = 1 + 2x + 1.5x^2 - 1.5x + \frac{2}{3}(x^3 - 3x^2 + 2x)$$
$$P_3(x) = 1 + 0.5x + 1.5x^2 + \frac{2}{3}x^3 - 2x^2 + \frac{4}{3}x$$
$$P_3(x) = \frac{2}{3}x^3 + (1.5 - 2)x^2 + (0.5 + \frac{4}{3})x + 1$$
$$P_3(x) = \frac{2}{3}x^3 - 0.5x^2 + (\frac{1}{2} + \frac{4}{3})x + 1$$
$$P_3(x) = \frac{2}{3}x^3 - 0.5x^2 + (\frac{3+8}{6})x + 1$$
$$P_3(x) = \frac{2}{3}x^3 - 0.5x^2 + \frac{11}{6}x + 1$$

**Verification:**
Let's check if this polynomial passes through the given points:
*   $P_3(0) = \frac{2}{3}(0)^3 - 0.5(0)^2 + \frac{11}{6}(0) + 1 = 1$ (Correct)
*   $P_3(1) = \frac{2}{3}(1)^3 - 0.5(1)^2 + \frac{11}{6}(1) + 1 = \frac{2}{3} - \frac{1}{2} + \frac{11}{6} + 1 = \frac{4 - 3 + 11}{6} + 1 = \frac{12}{6} + 1 = 2 + 1 = 3$ (Correct)
*   $P_3(2) = \frac{2}{3}(2)^3 - 0.5(2)^2 + \frac{11}{6}(2) + 1 = \frac{2}{3}(8) - 0.5(4) + \frac{11}{3} + 1 = \frac{16}{3} - 2 + \frac{11}{3} + 1 = \frac{27}{3} - 1 = 9 - 1 = 8$ (Correct)
*   $P_3(3) = \frac{2}{3}(3)^3 - 0.5(3)^2 + \frac{11}{6}(3) + 1 = \frac{2}{3}(27) - 0.5(9) + \frac{11}{2} + 1 = 18 - 4.5 + 5.5 + 1 = 13.5 + 5.5 + 1 = 19 + 1 = 20$.
    *Wait, there seems to be a calculation error in the manual simplification.* Let's re-verify the polynomial using the incremental form directly.

**Re-evaluating $P_3(3)$ with the Incremental Form:**
$$P_3(x) = 1 + 2x + 1.5x(x - 1) + \frac{2}{3}x(x - 1)(x - 2)$$
$$P_3(3) = 1 + 2(3) + 1.5(3)(3 - 1) + \frac{2}{3}(3)(3 - 1)(3 - 2)$$
$$P_3(3) = 1 + 6 + 1.5(3)(2) + \frac{2}{3}(3)(2)(1)$$
$$P_3(3) = 1 + 6 + 9 + 4 = 20$$

*Let's recheck the divided difference table calculation for the third order:*
$f[x_1, x_2, x_3] = \frac{f[x_2, x_3] - f[x_1, x_2]}{x_3 - x_1} = \frac{7 - 5}{3 - 1} = \frac{2}{2} = 1$ (Correct)
$f[x_0, x_1, x_2, x_3] = \frac{f[x_1, x_2, x_3] - f[x_0, x_1, x_2]}{x_3 - x_0} = \frac{1 - 1.5}{3 - 0} = \frac{-0.5}{3} = -\frac{1}{6}$

**CORRECTION NEEDED IN THE DIVIDED DIFFERENCE TABLE AND SUBSEQUENT POLYNOMIAL:**

Let's reconstruct the table with correct calculation for the third order:

| $x_i$ | $f[x_i]$ | First DD | Second DD | Third DD |
| :---- | :------- | :------- | :-------- | :------- |
| 0     | 1        |          |           |          |
|       |          | 2        |           |          |
| 1     | 3        |          | 1.5       |          |
|       |          | 5        |           | **-1/6** |
| 2     | 8        |          | **1**     |          |
|       |          | **7**    |           |          |
| 3     | 15       |          |           |          |

**Correct Newton's Divided Difference Polynomial:**

$$P_3(x) = f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + f[x_0, x_1, x_2, x_3](x - x_0)(x - x_1)(x - x_2)$$
$$P_3(x) = 1 + 2(x - 0) + 1.5(x - 0)(x - 1) - \frac{1}{6}(x - 0)(x - 1)(x - 2)$$
$$P_3(x) = 1 + 2x + 1.5x(x - 1) - \frac{1}{6}x(x - 1)(x - 2)$$

**Let's verify this corrected polynomial at $x=3$:**
$$P_3(3) = 1 + 2(3) + 1.5(3)(3-1) - \frac{1}{6}(3)(3-1)(3-2)$$
$$P_3(3) = 1 + 6 + 1.5(3)(2) - \frac{1}{6}(3)(2)(1)$$
$$P_3(3) = 1 + 6 + 9 - 1$$
$$P_3(3) = 15$$ (Correct)

This highlights the importance of careful calculation in divided differences.

---

### 5. Advantages of Divided Differences

*   **Incremental Nature:** New data points can be added to the interpolating polynomial easily without recomputing all previous coefficients. If we have $P_{n-1}(x)$ and want to find $P_n(x)$ with an additional point $(x_n, y_n)$, we only need to compute the new divided differences involving $x_n$.
    $$P_n(x) = P_{n-1}(x) + f[x_0, ..., x_n](x - x_0)...(x - x_{n-1})$$
*   **Efficiency for Sequential Data:** Well-suited for situations where data is collected sequentially.
*   **Flexibility:** The degree of the polynomial can be easily increased as more data becomes available.
*   **No Repeated X-values Required:** Unlike some other methods, $x_i$ values do not need to be equally spaced.

---

### 6. Disadvantages of Divided Differences

*   **Calculation Complexity:** For a large number of data points, constructing the divided difference table can be tedious and prone to arithmetic errors.
*   **Computational Cost:** While incremental, computing the coefficients themselves can still involve division, which can be computationally expensive compared to methods that only use addition and multiplication if the polynomial is already known.

---

### 7. Relationship to Other Interpolation Methods

**Relationship to Lagrange Interpolation:**
Newton's divided difference polynomial and the Lagrange interpolating polynomial for the same set of data points will yield the same polynomial. The divided differences are essentially the coefficients that arise when the Newton form of the interpolating polynomial is expanded.

Consider $P_2(x)$ for points $(x_0, y_0), (x_1, y_1), (x_2, y_2)$:
Lagrange: $L(x) = y_0 L_0(x) + y_1 L_1(x) + y_2 L_2(x)$
Newton: $P_2(x) = f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1)$

The coefficients of the Newton form ($f[x_0]$, $f[x_0, x_1]$, etc.) can be shown to be related to the coefficients of the Lagrange form. For example, the leading coefficient of the Newton polynomial, $f[x_0, x_1, ..., x_n]$, is equal to the leading coefficient of the Lagrange polynomial.

**Textbook References:**

*   **Chapra & Canale (6th Ed):** Chapter 17 discusses interpolation. Divided differences are introduced as a method for constructing interpolating polynomials, emphasizing their computational advantages for adding new data points. They present the divided difference table and the Newton's divided difference form.
*   **Gupta S.K. (1995):** Likely covers interpolation methods, including divided differences, in detail.
*   **Balagurusamy (2017):** Similar to Chapra & Canale, Balagurusamy's textbook provides a thorough treatment of polynomial interpolation, including the construction and application of Newton's divided difference formula.

**Reference Books for Deeper Understanding:**

*   **Gerald & Wheatly:** Offer a comprehensive treatment of numerical analysis, including the theory and algorithms for interpolation using divided differences.
*   **Jain, Iyengar & Jain:** Provides rigorous mathematical foundations for numerical methods, including the derivation and properties of divided differences.
*   **Conte & De Boor:** This classic text delves into the theoretical aspects of approximation theory and splines, where divided differences play a crucial role.

---

### 8. Applications

*   **Data Analysis:** Fitting curves to experimental data where new data points are continuously added.
*   **Function Approximation:** Approximating complex functions with simpler polynomials.
*   **Numerical Differentiation and Integration:** Divided differences can be used to derive formulas for numerical differentiation and integration.

---

### 9. Practice Questions and Exercises

**Question 1:**
Construct a divided difference table for the following data and find the Newton's divided difference interpolating polynomial.
Data: (1, 2), (3, 8), (4, 15), (6, 30)

**Answer 1:**

Divided Difference Table:

| $x_i$ | $f[x_i]$ | First DD | Second DD | Third DD |
| :---- | :------- | :------- | :-------- | :------- |
| 1     | 2        |          |           |          |
|       |          | 3        |           |          |
| 3     | 8        |          | 1         |          |
|       |          | 7        |           | **0**    |
| 4     | 15       |          | **1**     |          |
|       |          | 7.5      |           |          |
| 6     | 30       |          |           |          |

*   $f[x_0] = 2$
*   $f[x_0, x_1] = \frac{8-2}{3-1} = \frac{6}{2} = 3$
*   $f[x_1, x_2] = \frac{15-8}{4-3} = \frac{7}{1} = 7$
*   $f[x_2, x_3] = \frac{30-15}{6-4} = \frac{15}{2} = 7.5$
*   $f[x_0, x_1, x_2] = \frac{7-3}{4-1} = \frac{4}{3}$
*   $f[x_1, x_2, x_3] = \frac{7.5-7}{6-3} = \frac{0.5}{3} = \frac{1}{6}$
*   $f[x_0, x_1, x_2, x_3] = \frac{1/6 - 4/3}{6-1} = \frac{1/6 - 8/6}{5} = \frac{-7/6}{5} = -\frac{7}{30}$

**Newton's Divided Difference Polynomial:**
$P_3(x) = f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + f[x_0, x_1, x_2, x_3](x - x_0)(x - x_1)(x - x_2)$
$P_3(x) = 2 + 3(x - 1) + \frac{4}{3}(x - 1)(x - 3) - \frac{7}{30}(x - 1)(x - 3)(x - 4)$

**Question 2:**
Given the polynomial $P(x) = x^3 - 2x^2 + 3x - 4$, find the divided differences $f[x_0, x_1, x_2]$ and $f[x_0, x_1, x_2, x_3]$ where $x_0=1, x_1=2, x_2=3, x_3=4$.

**Answer 2:**
For a polynomial of degree $n$, the $n$-th order divided differences are constant, and any divided difference of order higher than $n$ is zero. In this case, the polynomial is of degree 3.

*   $f[x_0, x_1, x_2, x_3]$ will be the constant third-order divided difference.
    The leading coefficient of $P(x)$ is 1.
    The third-order divided difference of a polynomial $ax^3 + ...$ is $a$.
    So, $f[x_0, x_1, x_2, x_3] = 1$.

*   For $f[x_0, x_1, x_2]$:
    $x_0=1, f(1) = 1 - 2 + 3 - 4 = -2$
    $x_1=2, f(2) = 8 - 8 + 6 - 4 = 2$
    $x_2=3, f(3) = 27 - 18 + 9 - 4 = 14$

    $f[x_0, x_1] = \frac{2 - (-2)}{2 - 1} = \frac{4}{1} = 4$
    $f[x_1, x_2] = \frac{14 - 2}{3 - 2} = \frac{12}{1} = 12$
    $f[x_0, x_1, x_2] = \frac{12 - 4}{3 - 1} = \frac{8}{2} = 4$

    Alternatively, since it's a cubic, the second-order divided difference will be linear.
    $f[x_0, x_1, x_2] = ax_0 + b$ or $a(x_0+x_1+x_2)/3 + b$? No, this isn't a simple form.

    Let's check if the third-order is consistent:
    $x_3=4, f(4) = 64 - 32 + 12 - 4 = 40$
    $f[x_2, x_3] = \frac{40-14}{4-3} = 26$
    $f[x_1, x_2, x_3] = \frac{26-12}{4-2} = \frac{14}{2} = 7$
    $f[x_0, x_1, x_2, x_3] = \frac{7-4}{4-1} = \frac{3}{3} = 1$. This matches the leading coefficient, as expected.

    So, $f[x_0, x_1, x_2] = 4$.

**Question 3:**
Suppose you have the interpolating polynomial $P_2(x)$ for points $(x_0, y_0), (x_1, y_1), (x_2, y_2)$. If a new data point $(x_3, y_3)$ is added, how can you efficiently obtain the new interpolating polynomial $P_3(x)$ using Newton's divided difference method?

**Answer 3:**
Using the incremental property of Newton's divided difference method, the new polynomial $P_3(x)$ can be expressed as:

$P_3(x) = P_2(x) + f[x_0, x_1, x_2, x_3](x - x_0)(x - x_1)(x - x_2)$

To obtain $P_3(x)$:
1.  **Calculate the new highest-order divided difference:** $f[x_0, x_1, x_2, x_3]$. This requires computing the first-order divided difference $f[x_2, x_3]$, then the second-order $f[x_1, x_2, x_3]$, and finally the third-order $f[x_0, x_1, x_2, x_3]$ using the new point $(x_3, y_3)$ and the previous points.
2.  **Add the new term:** The new term is the product of the newly calculated divided difference coefficient and the corresponding polynomial basis function $(x - x_0)(x - x_1)(x - x_2)$.
3.  **Combine:** Add this new term to the existing $P_2(x)$ to get $P_3(x)$.

This avoids recomputing the coefficients for $P_2(x)$, making it efficient.

---

### 10. Important Points to Remember

*   **Divided differences are coefficients** in Newton's interpolating polynomial.
*   The **order of points does not affect the value** of a divided difference, but it does affect the calculation steps if not organized in a table.
*   **Divided difference tables** are crucial for systematic calculation.
*   The **highest order divided difference is equal to the leading coefficient** of the interpolating polynomial.
*   For a polynomial of degree $n$, all divided differences of order greater than $n$ are **zero**.
*   The **incremental nature** is a key advantage over Lagrange interpolation when adding data points.
*   Ensure **accuracy in calculations**, as errors can propagate.

---

This concludes the notes on Divided Differences. Remember to practice constructing the tables and applying the formulas to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
