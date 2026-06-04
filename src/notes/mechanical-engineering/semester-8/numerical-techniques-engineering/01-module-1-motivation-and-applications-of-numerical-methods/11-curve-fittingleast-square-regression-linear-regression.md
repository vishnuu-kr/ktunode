---
title: "Curve fitting:Least square regression-Linear regression"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 1: Motivation and Applications of numerical methods"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646a6"
status: "completed"
scrapedAt: "2026-05-20T18:23:05.985Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 1: Motivation and Applications of Numerical Methods

### Topic: Curve Fitting: Least Squares Regression - Linear Regression

---

### 1. Introduction to Curve Fitting and Motivation

*   **What is Curve Fitting?**
    *   Curve fitting is the process of constructing a mathematical function that best represents a set of data points. This function can be used for interpolation (estimating values between data points) or extrapolation (estimating values beyond the data range).
*   **Why do we need Curve Fitting?**
    *   **Data Visualization and Understanding:** To visualize trends and patterns in experimental or observational data.
    *   **Predictive Modeling:** To develop models that can predict future outcomes or behaviors based on existing data.
    *   **Simplification of Complex Relationships:** To represent complex relationships between variables with simpler mathematical functions.
    *   **Data Smoothing:** To reduce noise or errors in data by fitting a smoother curve.
    *   **Basis for Other Numerical Methods:** Curve fitting is a fundamental technique used in various other numerical methods, such as solving differential equations.
*   **Motivation in Engineering:**
    *   **Experimental Data Analysis:** Engineers frequently collect data from experiments (e.g., stress-strain curves, temperature-pressure relationships). Curve fitting helps them understand these relationships and extract meaningful parameters.
    *   **System Modeling:** Representing the behavior of physical systems (e.g., circuits, mechanical structures) with mathematical equations.
    *   **Parameter Estimation:** Determining unknown parameters in physical models from observed data.
    *   **Process Control:** Developing control strategies based on the mathematical models of processes.
    *   **Design Optimization:** Using fitted curves to optimize design parameters.

---

### 2. Least Squares Regression: The Principle

*   **The Problem:** Given a set of data points $(x_0, y_0), (x_1, y_1), ..., (x_n, y_n)$, we want to find a function $f(x)$ that "best" fits these points.
*   **What does "best fit" mean?**
    *   The goal is to minimize the differences between the actual data values ($y_i$) and the values predicted by the function ($f(x_i)$).
*   **The Least Squares Approach:**
    *   We define the **residual** (or error) for each data point as the difference between the observed value and the predicted value:
        $e_i = y_i - f(x_i)$
    *   The **sum of squared errors (SSE)** is defined as:
        $S = \sum_{i=0}^{n} e_i^2 = \sum_{i=0}^{n} (y_i - f(x_i))^2$
    *   The **least squares criterion** states that the "best fit" function is the one that minimizes this sum of squared errors. This approach is favored because it:
        *   Penalizes larger errors more significantly.
        *   Ensures the errors are treated symmetrically (positive and negative errors don't cancel out).
        *   Leads to a mathematically tractable solution using calculus.

---

### 3. Linear Regression

*   **Definition:** Linear regression is a specific type of curve fitting where we assume the relationship between the independent variable ($x$) and the dependent variable ($y$) can be approximated by a straight line.
*   **The Linear Model:**
    *   The equation of a straight line is typically represented as:
        $y = a_0 + a_1 x$
        where:
        *   $y$ is the dependent variable.
        *   $x$ is the independent variable.
        *   $a_0$ is the y-intercept.
        *   $a_1$ is the slope.
*   **The Objective:** To find the values of the coefficients $a_0$ and $a_1$ that minimize the sum of squared errors for the given data points.
*   **Formulating the Sum of Squared Errors for Linear Regression:**
    *   For a linear model, the predicted value for $y_i$ is $f(x_i) = a_0 + a_1 x_i$.
    *   The sum of squared errors becomes:
        $S_a = \sum_{i=0}^{n} (y_i - (a_0 + a_1 x_i))^2$
    *   Our goal is to find $a_0$ and $a_1$ that minimize $S_a$.

---

### 4. Deriving the Coefficients ($a_0$ and $a_1$) using Calculus

*   **Minimization using Partial Derivatives:** To find the minimum of $S_a$ with respect to $a_0$ and $a_1$, we take the partial derivatives of $S_a$ with respect to $a_0$ and $a_1$ and set them to zero.

    1.  **Partial Derivative with respect to $a_0$:**
        $\frac{\partial S_a}{\partial a_0} = \frac{\partial}{\partial a_0} \left[ \sum_{i=0}^{n} (y_i - a_0 - a_1 x_i)^2 \right]$
        $\frac{\partial S_a}{\partial a_0} = \sum_{i=0}^{n} 2 (y_i - a_0 - a_1 x_i) (-1)$
        Setting to zero:
        $\sum_{i=0}^{n} (y_i - a_0 - a_1 x_i) = 0$
        $\sum y_i - \sum a_0 - \sum a_1 x_i = 0$
        $\sum y_i - (n+1)a_0 - a_1 \sum x_i = 0$
        **(Equation 1): $(n+1)a_0 + a_1 \sum x_i = \sum y_i$**
        *Note: Some texts use 'n' for the number of data points if the indexing starts from 1. For indexing from 0 to n, there are (n+1) points. Let's assume N = n+1 for simplicity in notation for the number of points.*
        **(Revised Equation 1): $N a_0 + a_1 \sum x_i = \sum y_i$**

    2.  **Partial Derivative with respect to $a_1$:**
        $\frac{\partial S_a}{\partial a_1} = \frac{\partial}{\partial a_1} \left[ \sum_{i=0}^{n} (y_i - a_0 - a_1 x_i)^2 \right]$
        $\frac{\partial S_a}{\partial a_1} = \sum_{i=0}^{n} 2 (y_i - a_0 - a_1 x_i) (-x_i)$
        Setting to zero:
        $\sum_{i=0}^{n} x_i (y_i - a_0 - a_1 x_i) = 0$
        $\sum x_i y_i - \sum a_0 x_i - \sum a_1 x_i^2 = 0$
        $\sum x_i y_i - a_0 \sum x_i - a_1 \sum x_i^2 = 0$
        **(Equation 2): $a_0 \sum x_i + a_1 \sum x_i^2 = \sum x_i y_i$**

*   **Solving the System of Linear Equations:**
    We now have a system of two linear equations with two unknowns ($a_0$ and $a_1$):
    1.  $N a_0 + (\sum x_i) a_1 = \sum y_i$
    2.  $(\sum x_i) a_0 + (\sum x_i^2) a_1 = \sum x_i y_i$

    These equations are called the **normal equations**. We can solve them using various methods, such as substitution or Cramer's rule.

    *   **Solution for $a_1$:**
        Multiply Equation 1 by $\sum x_i$:
        $N (\sum x_i) a_0 + (\sum x_i)^2 a_1 = (\sum x_i)(\sum y_i)$
        Multiply Equation 2 by $N$:
        $N (\sum x_i) a_0 + N (\sum x_i^2) a_1 = N (\sum x_i y_i)$
        Subtract the first modified equation from the second:
        $(N \sum x_i^2 - (\sum x_i)^2) a_1 = N \sum x_i y_i - (\sum x_i)(\sum y_i)$
        $a_1 = \frac{N \sum x_i y_i - (\sum x_i)(\sum y_i)}{N \sum x_i^2 - (\sum x_i)^2}$

    *   **Solution for $a_0$:**
        From Equation 1:
        $N a_0 = \sum y_i - (\sum x_i) a_1$
        $a_0 = \frac{\sum y_i - (\sum x_i) a_1}{N}$
        An alternative and often more stable formula for $a_0$ is:
        $a_0 = \bar{y} - a_1 \bar{x}$
        where $\bar{y} = \frac{\sum y_i}{N}$ and $\bar{x} = \frac{\sum x_i}{N}$ are the means of $y$ and $x$ respectively. This formula is derived by recognizing that the regression line must pass through the centroid of the data $(\bar{x}, \bar{y})$.

*   **Key Formulas for Linear Regression Coefficients:**
    Let $N$ be the number of data points.
    $a_1 = \frac{N \sum (x_i y_i) - (\sum x_i)(\sum y_i)}{N \sum x_i^2 - (\sum x_i)^2}$
    $a_0 = \bar{y} - a_1 \bar{x} = \frac{\sum y_i}{N} - a_1 \frac{\sum x_i}{N}$

---

### 5. Example Calculation

**Problem:** Fit a straight line to the following data points using the method of least squares:
(1, 2), (2, 4), (3, 5), (4, 4), (5, 5)

**Solution:**

1.  **Identify Data Points:**
    $x = [1, 2, 3, 4, 5]$
    $y = [2, 4, 5, 4, 5]$
    Number of data points, $N = 5$.

2.  **Calculate Necessary Sums:**
    *   $\sum x_i = 1 + 2 + 3 + 4 + 5 = 15$
    *   $\sum y_i = 2 + 4 + 5 + 4 + 5 = 20$
    *   $\sum x_i^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55$
    *   $\sum x_i y_i = (1 \times 2) + (2 \times 4) + (3 \times 5) + (4 \times 4) + (5 \times 5) = 2 + 8 + 15 + 16 + 25 = 66$

3.  **Calculate Coefficients ($a_1$ and $a_0$):**
    *   **Calculate $a_1$:**
        $a_1 = \frac{N \sum (x_i y_i) - (\sum x_i)(\sum y_i)}{N \sum x_i^2 - (\sum x_i)^2}$
        $a_1 = \frac{5 \times 66 - 15 \times 20}{5 \times 55 - (15)^2}$
        $a_1 = \frac{330 - 300}{275 - 225}$
        $a_1 = \frac{30}{50} = 0.6$

    *   **Calculate $a_0$:**
        First, find the means:
        $\bar{x} = \frac{\sum x_i}{N} = \frac{15}{5} = 3$
        $\bar{y} = \frac{\sum y_i}{N} = \frac{20}{5} = 4$
        Now, use the formula $a_0 = \bar{y} - a_1 \bar{x}$:
        $a_0 = 4 - (0.6 \times 3)$
        $a_0 = 4 - 1.8 = 2.2$

4.  **The Linear Regression Equation:**
    The fitted line is:
    $y = 2.2 + 0.6x$

5.  **Verification (Optional):**
    Calculate predicted $y$ values and residuals:
    | $x_i$ | $y_i$ | $f(x_i) = 2.2 + 0.6x_i$ | $e_i = y_i - f(x_i)$ | $e_i^2$ |
    |-------|-------|-------------------------|---------------------|---------|
    | 1     | 2     | $2.2 + 0.6(1) = 2.8$    | $2 - 2.8 = -0.8$    | 0.64    |
    | 2     | 4     | $2.2 + 0.6(2) = 3.4$    | $4 - 3.4 = 0.6$     | 0.36    |
    | 3     | 5     | $2.2 + 0.6(3) = 4.0$    | $5 - 4.0 = 1.0$     | 1.00    |
    | 4     | 4     | $2.2 + 0.6(4) = 4.6$    | $4 - 4.6 = -0.6$    | 0.36    |
    | 5     | 5     | $2.2 + 0.6(5) = 5.2$    | $5 - 5.2 = -0.2$    | 0.04    |
    **Sum of Squared Errors ($S_a$) = 0.64 + 0.36 + 1.00 + 0.36 + 0.04 = 2.40**
    The sum of residuals is close to zero (-0.8 + 0.6 + 1.0 - 0.6 - 0.2 = 0.0), which is expected.

---

### 6. Connection to Course Outcomes (COs)

*   **CO1: Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3)**
    *   Linear regression involves solving a system of linear equations (the normal equations) to find the coefficients $a_0$ and $a_1$. This directly addresses the application of numerical techniques to solve systems of linear equations.
*   **CO2: Implement numerical schemes to fit data (Knowledge Level: K3)**
    *   This entire topic is dedicated to fitting data using a numerical scheme (least squares regression). Students will learn to implement the derived formulas to find the best-fit line for a given dataset.
*   **CO3: Solve differentiation and integration numerically (Knowledge Level: K3)**
    *   While not directly involving numerical differentiation or integration, the derivation of the least squares method relies heavily on the principles of calculus (differentiation to find minima). Understanding how to minimize functions is foundational.
*   **CO4: Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3)**
    *   Curve fitting and regression are often preliminary steps in solving differential equations. For example, experimental data might be fitted to establish initial conditions or boundary conditions for a differential equation model.

---

### 7. Important Points to Remember

*   **Least Squares Minimizes Sum of Squared Errors:** This is the core principle.
*   **Linear Regression Assumes a Straight-Line Relationship:** The method is only appropriate if the data appears to have a linear trend.
*   **The Normal Equations:** These are the system of equations derived from setting partial derivatives to zero, which must be solved for the coefficients.
*   **Mean $\bar{x}$ and $\bar{y}$:** The regression line always passes through the centroid $(\bar{x}, \bar{y})$ of the data.
*   **Formula Recall:** Memorize or know how to derive the formulas for $a_0$ and $a_1$.
*   **Data Requirements:** Sufficient data points are needed for reliable regression.
*   **Limitations:** Linear regression is only suitable for linear relationships. For non-linear relationships, other regression techniques (e.g., polynomial regression, exponential regression) are required.
*   **Correlation vs. Causation:** A strong linear fit does not imply causation between $x$ and $y$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. Referencing Textbooks and Reference Books

*   **Chapra & Canale (6th Edition, 2010):** Chapter on "Linear Regression and Correlation." This book provides a solid foundation on the theory, derivation, and practical application of linear regression, including formulas and examples. It often emphasizes the practical implementation using software.
*   **Gupta S.K. (1995):** Likely covers regression analysis within chapters on statistical methods or curve fitting. Expect clear derivations and examples relevant to engineering contexts.
*   **Balagurusamy (2017):** May present linear regression as an application of matrix methods or as a standalone topic in curve fitting. Focus is often on algorithmic implementation.
*   **Gerald & Wheatly (6th Edition):** A comprehensive reference that will delve into the mathematical underpinnings and may discuss extensions of the least squares method.
*   **Jain, Iyengar & Jain:** Known for their rigorous mathematical treatment. Expect detailed derivations and theoretical aspects of least squares.
*   **Conte & De Boor:** Focuses on numerical analysis principles. The least squares method would be presented from a numerical stability and algorithm perspective.
*   **Krishnamurthy & Sen:** Similar to Jain, Iyengar & Jain, offering a strong theoretical base.
*   **Suli & Mayers:** Introduces numerical analysis concepts. Expect a clear explanation of the method, possibly with connections to other approximation techniques.

*The formulas and derivations presented in these notes are consistent with the standard treatments found in these authoritative textbooks.*

---

### 9. Practice Questions and Exercises

**Exercise 1:**
Fit a straight line to the following data using the method of least squares:
(0, 1), (1, 2), (2, 3), (3, 4)

**Answer 1:**
1.  **Data:** $x = [0, 1, 2, 3]$, $y = [1, 2, 3, 4]$, $N=4$
2.  **Sums:**
    $\sum x_i = 0+1+2+3 = 6$
    $\sum y_i = 1+2+3+4 = 10$
    $\sum x_i^2 = 0^2+1^2+2^2+3^2 = 0+1+4+9 = 14$
    $\sum x_i y_i = (0 \times 1) + (1 \times 2) + (2 \times 3) + (3 \times 4) = 0+2+6+12 = 20$
3.  **Coefficients:**
    $a_1 = \frac{4 \times 20 - 6 \times 10}{4 \times 14 - (6)^2} = \frac{80 - 60}{56 - 36} = \frac{20}{20} = 1$
    $\bar{x} = 6/4 = 1.5$
    $\bar{y} = 10/4 = 2.5$
    $a_0 = \bar{y} - a_1 \bar{x} = 2.5 - 1 \times 1.5 = 2.5 - 1.5 = 1$
4.  **Fitted Line:** $y = 1 + 1x$, or $y = x + 1$. (This makes sense as the data points lie perfectly on this line).

**Exercise 2:**
A study on the relationship between temperature ($T$ in °C) and viscosity ($\mu$ in mPa·s) yielded the following data:

| $T$ | $\mu$ |
|-----|-------|
| 20  | 100   |
| 25  | 80    |
| 30  | 65    |
| 35  | 55    |
| 40  | 48    |

Fit a straight line of the form $\mu = a_0 + a_1 T$ to this data using the method of least squares.

**Answer 2:**
1.  **Data:** $T = [20, 25, 30, 35, 40]$, $\mu = [100, 80, 65, 55, 48]$, $N=5$
2.  **Sums:**
    $\sum T_i = 20+25+30+35+40 = 150$
    $\sum \mu_i = 100+80+65+55+48 = 348$
    $\sum T_i^2 = 20^2+25^2+30^2+35^2+40^2 = 400+625+900+1225+1600 = 4750$
    $\sum T_i \mu_i = (20 \times 100) + (25 \times 80) + (30 \times 65) + (35 \times 55) + (40 \times 48) = 2000+2000+1950+1925+1920 = 9795$
3.  **Coefficients:**
    $a_1 = \frac{5 \times 9795 - 150 \times 348}{5 \times 4750 - (150)^2} = \frac{48975 - 52200}{23750 - 22500} = \frac{-3225}{1250} = -2.58$
    $\bar{T} = 150/5 = 30$
    $\bar{\mu} = 348/5 = 69.6$
    $a_0 = \bar{\mu} - a_1 \bar{T} = 69.6 - (-2.58 \times 30) = 69.6 + 77.4 = 147$
4.  **Fitted Line:** $\mu = 147 - 2.58 T$

---

This concludes the study notes for Linear Regression within the context of Curve Fitting in Numerical Techniques Engineering. Ensure you understand the derivation of the formulas and can apply them to practical problems.