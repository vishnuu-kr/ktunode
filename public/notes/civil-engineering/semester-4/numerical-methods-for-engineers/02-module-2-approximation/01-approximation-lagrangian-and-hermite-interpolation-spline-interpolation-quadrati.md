---
title: "Approximation - Lagrangian and Hermite interpolation, Spline interpolation - Quadratic and Cubic splines (example of equal intervals)."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 2: Approximation "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b40"
status: "completed"
scrapedAt: "2026-05-20T18:46:48.318Z"
---
# NUMERICAL METHODS FOR ENGINEERS - Module 2: Approximation

## Topic: Approximation - Lagrangian and Hermite Interpolation, Spline Interpolation (Quadratic and Cubic Splines with Equal Intervals)

---

### 1. Introduction to Approximation

*   **What is Approximation?**
    *   In engineering and science, we often deal with data that is collected from experiments or observations. This data may not always be represented by a simple mathematical function.
    *   Approximation techniques allow us to find a simpler function that closely represents the behavior of the given data.
    *   This is useful for tasks like:
        *   Estimating values between known data points (interpolation).
        *   Estimating values outside the range of known data points (extrapolation).
        *   Smoothing noisy data.
        *   Simplifying complex functions.

*   **Why Interpolation?**
    *   Interpolation is a specific type of approximation where we find a function that passes *exactly* through a given set of data points.
    *   The goal is to estimate values *between* these known data points.

---

### 2. Lagrangian Interpolation

*   **Key Concept:** The Lagrangian interpolating polynomial is a unique polynomial of degree at most $n-1$ that passes through $n$ given data points $(x_0, y_0), (x_1, y_1), ..., (x_{n-1}, y_{n-1})$.

*   **The Lagrangian Polynomial Formula:**
    $P(x) = \sum_{i=0}^{n-1} y_i L_i(x)$

    where $L_i(x)$ are the **Lagrangian basis polynomials**, defined as:
    $L_i(x) = \prod_{j=0, j \neq i}^{n-1} \frac{x - x_j}{x_i - x_j}$

*   **Explanation of $L_i(x)$:**
    *   For a specific $i$, $L_i(x_i) = 1$.
    *   For any $j \neq i$, $L_i(x_j) = 0$.
    *   This structure ensures that when we sum $y_i L_i(x)$, at $x = x_k$, only the term $y_k L_k(x_k)$ will be non-zero, and since $L_k(x_k) = 1$, the polynomial passes through $(x_k, y_k)$.

*   **Example:** Find the Lagrangian interpolating polynomial for the data points (1, 2), (2, 3), (4, 5).

    *   We have $n=3$ data points. The polynomial will be of degree at most $n-1 = 2$.
    *   $(x_0, y_0) = (1, 2)$
    *   $(x_1, y_1) = (2, 3)$
    *   $(x_2, y_2) = (4, 5)$

    *   Calculate $L_0(x)$:
        $L_0(x) = \frac{x - x_1}{x_0 - x_1} \cdot \frac{x - x_2}{x_0 - x_2} = \frac{x - 2}{1 - 2} \cdot \frac{x - 4}{1 - 4} = \frac{x - 2}{-1} \cdot \frac{x - 4}{-3} = \frac{(x-2)(x-4)}{3}$

    *   Calculate $L_1(x)$:
        $L_1(x) = \frac{x - x_0}{x_1 - x_0} \cdot \frac{x - x_2}{x_1 - x_2} = \frac{x - 1}{2 - 1} \cdot \frac{x - 4}{2 - 4} = \frac{x - 1}{1} \cdot \frac{x - 4}{-2} = \frac{(x-1)(x-4)}{-2}$

    *   Calculate $L_2(x)$:
        $L_2(x) = \frac{x - x_0}{x_2 - x_0} \cdot \frac{x - x_1}{x_2 - x_1} = \frac{x - 1}{4 - 1} \cdot \frac{x - 2}{4 - 2} = \frac{x - 1}{3} \cdot \frac{x - 2}{2} = \frac{(x-1)(x-2)}{6}$

    *   Construct the polynomial:
        $P(x) = y_0 L_0(x) + y_1 L_1(x) + y_2 L_2(x)$
        $P(x) = 2 \cdot \frac{(x-2)(x-4)}{3} + 3 \cdot \frac{(x-1)(x-4)}{-2} + 5 \cdot \frac{(x-1)(x-2)}{6}$
        $P(x) = \frac{2(x^2 - 6x + 8)}{3} - \frac{3(x^2 - 5x + 4)}{2} + \frac{5(x^2 - 3x + 2)}{6}$
        $P(x) = \frac{4(x^2 - 6x + 8) - 9(x^2 - 5x + 4) + 5(x^2 - 3x + 2)}{6}$
        $P(x) = \frac{(4x^2 - 24x + 32) - (9x^2 - 45x + 36) + (5x^2 - 15x + 10)}{6}$
        $P(x) = \frac{(4 - 9 + 5)x^2 + (-24 + 45 - 15)x + (32 - 36 + 10)}{6}$
        $P(x) = \frac{0x^2 + 6x + 6}{6}$
        $P(x) = x + 1$

    *   **Verification:**
        *   $P(1) = 1 + 1 = 2$ (Correct)
        *   $P(2) = 2 + 1 = 3$ (Correct)
        *   $P(4) = 4 + 1 = 5$ (Correct)

*   **Advantages of Lagrangian Interpolation:**
    *   Conceptually simple.
    *   Easy to implement.
    *   Provides a unique interpolating polynomial.

*   **Disadvantages of Lagrangian Interpolation:**
    *   If you add a new data point, the entire polynomial needs to be recomputed.
    *   Can be computationally expensive for a large number of data points.
    *   Can exhibit oscillations (Runge's phenomenon) for high-degree polynomials and certain data distributions.

---

### 3. Hermite Interpolation

*   **Key Concept:** Hermite interpolation not only matches the function values at given points but also matches their derivatives. This provides a "smoother" fit.

*   **Problem Statement:** Given $n$ data points $(x_0, y_0), (x_1, y_1), ..., (x_{n-1}, y_{n-1})$ and their corresponding derivative values $y'_0, y'_1, ..., y'_{n-1}$. We want to find a polynomial that satisfies $P(x_i) = y_i$ and $P'(x_i) = y'_i$ for all $i$.

*   **Degree of the Polynomial:** If we have $n$ points and need to match function values and first derivatives at each point, we have $2n$ conditions. Thus, the Hermite interpolating polynomial will have a degree of at most $2n-1$.

*   **General Form of Hermite Interpolating Polynomial:**
    $H(x) = \sum_{i=0}^{n-1} y_i H_i(x) + \sum_{i=0}^{n-1} y'_i \hat{H}_i(x)$

    where $H_i(x)$ and $\hat{H}_i(x)$ are **Hermite basis polynomials**. These basis polynomials have specific properties:
    *   $H_i(x_j) = \delta_{ij}$ (Kronecker delta: 1 if i=j, 0 if i!=j)
    *   $H'_i(x_j) = 0$ for all $j$
    *   $\hat{H}_i(x_j) = 0$ for all $j$
    *   $\hat{H}'_i(x_j) = \delta_{ij}$

*   **Formulas for Hermite Basis Polynomials (for $n$ points):**
    Let $L_i(x)$ be the $i$-th Lagrangian basis polynomial for the $n$ data points.

    $H_i(x) = [1 - 2(x - x_i) L'_i(x_i)] [L_i(x)]^2$
    $\hat{H}_i(x) = (x - x_i) [L_i(x)]^2$

    where $L'_i(x_i)$ is the derivative of the $i$-th Lagrangian basis polynomial evaluated at $x_i$.

*   **Calculating $L'_i(x_i)$:**
    $L'_i(x_i) = \sum_{j=0, j \neq i}^{n-1} \frac{1}{x_i - x_j}$

*   **Example:** Construct the Hermite interpolating polynomial for two points $(x_0, y_0)$ and $(x_1, y_1)$ with derivative values $y'_0$ and $y'_1$.
    *   Here $n=2$. The polynomial degree is at most $2n-1 = 3$.
    *   $(x_0, y_0)$ and $(x_1, y_1)$.
    *   Lagrangian basis polynomials for these two points:
        $L_0(x) = \frac{x - x_1}{x_0 - x_1}$
        $L_1(x) = \frac{x - x_0}{x_1 - x_0}$
    *   Derivatives of Lagrangian basis polynomials:
        $L'_0(x) = \frac{1}{x_0 - x_1}$
        $L'_1(x) = \frac{1}{x_1 - x_0}$
    *   Evaluate derivatives at the points:
        $L'_0(x_0) = \frac{1}{x_0 - x_1}$
        $L'_1(x_1) = \frac{1}{x_1 - x_0}$
    *   Hermite basis polynomials:
        $H_0(x) = [1 - 2(x - x_0) L'_0(x_0)] [L_0(x)]^2 = [1 - 2\frac{x - x_0}{x_0 - x_1}] \left(\frac{x - x_1}{x_0 - x_1}\right)^2$
        $\hat{H}_0(x) = (x - x_0) [L_0(x)]^2 = (x - x_0) \left(\frac{x - x_1}{x_0 - x_1}\right)^2$
        $H_1(x) = [1 - 2(x - x_1) L'_1(x_1)] [L_1(x)]^2 = [1 - 2\frac{x - x_1}{x_1 - x_0}] \left(\frac{x - x_0}{x_1 - x_0}\right)^2$
        $\hat{H}_1(x) = (x - x_1) [L_1(x)]^2 = (x - x_1) \left(\frac{x - x_0}{x_1 - x_0}\right)^2$
    *   The Hermite polynomial is:
        $H(x) = y_0 H_0(x) + y_1 H_1(x) + y'_0 \hat{H}_0(x) + y'_1 \hat{H}_1(x)$

*   **Advantages of Hermite Interpolation:**
    *   Provides a smoother approximation by matching derivatives.
    *   Can be more accurate than Lagrangian interpolation if derivative information is available.

*   **Disadvantages of Hermite Interpolation:**
    *   Requires derivative values, which may not always be known or easy to compute.
    *   More complex to construct than Lagrangian interpolation.
    *   Similar issues with adding new data points and potential oscillations.

---

### 4. Spline Interpolation

*   **Motivation:**
    *   High-degree polynomial interpolation (like Lagrangian or Hermite) can lead to undesirable oscillations, especially with equally spaced data points (Runge's phenomenon).
    *   Spline interpolation uses a piecewise polynomial function, where each piece is a low-degree polynomial defined over a subinterval.
    *   These piecewise polynomials are joined together at specific points called "knots" or "joints."
    *   Continuity conditions are imposed at the joints to ensure a smooth overall curve.

*   **Key Concept:** A spline of degree $m$ is a piecewise polynomial function of degree at most $m$ that is continuous, along with its first $m-1$ derivatives, at the interior knots.

*   **Common Types of Splines:**
    *   Linear Spline (degree 1): Piecewise linear, continuous at joints.
    *   Quadratic Spline (degree 2): Piecewise quadratic, continuous function and first derivative at joints.
    *   Cubic Spline (degree 3): Piecewise cubic, continuous function, first, and second derivatives at joints. Cubic splines are very popular in engineering due to their good balance of smoothness and computational efficiency.

---

### 4.1. Quadratic Spline Interpolation (Equal Intervals)

*   **Setup:** We have $n+1$ data points $(x_0, y_0), (x_1, y_1), ..., (x_n, y_n)$. Assume these points are equally spaced, so $x_{i+1} - x_i = h$ for all $i$.
*   We want to find $n$ quadratic polynomials, $S_i(x)$, such that $S_i(x)$ interpolates the data points $(x_i, y_i)$ and $(x_{i+1}, y_{i+1})$ for $i = 0, 1, ..., n-1$.
*   The general form of a quadratic polynomial is $S_i(x) = a_i x^2 + b_i x + c_i$.

*   **Conditions for Quadratic Spline:**
    1.  **Interpolation conditions:**
        *   $S_i(x_i) = y_i$ for $i = 0, ..., n-1$
        *   $S_i(x_{i+1}) = y_{i+1}$ for $i = 0, ..., n-1$
        This gives $2n$ conditions.

    2.  **Continuity of the first derivative at interior knots:**
        *   $S'_i(x_i) = S'_{i-1}(x_i)$ for $i = 1, ..., n-1$
        This gives $n-1$ conditions.

*   **Total conditions:** $2n + (n-1) = 3n-1$.
*   **Total number of unknown coefficients:** We have $n$ polynomials, each with 3 coefficients ($a_i, b_i, c_i$), so $3n$ unknowns.
*   **The "missing" condition:** We need one more condition to uniquely determine the spline. This is often achieved by specifying the second derivative at the endpoints (e.g., "clamped" or "natural" splines), but for simplicity in this context, we'll see how the equal interval assumption helps.

*   **Simplified Approach for Equal Intervals:**
    Let's define the spline piece over the interval $[x_i, x_{i+1}]$ as:
    $S_i(x) = A_i (x-x_i)^2 + B_i (x-x_i) + C_i$
    (This form is often easier for deriving conditions.)

    *   **Interpolation at $x_i$:**
        $S_i(x_i) = A_i (0)^2 + B_i (0) + C_i = C_i$
        So, $C_i = y_i$.

    *   **Interpolation at $x_{i+1}$:**
        $S_i(x_{i+1}) = A_i (x_{i+1}-x_i)^2 + B_i (x_{i+1}-x_i) + C_i$
        $S_i(x_{i+1}) = A_i h^2 + B_i h + y_i$
        Since $S_i(x_{i+1}) = y_{i+1}$, we get:
        $y_{i+1} = A_i h^2 + B_i h + y_i$
        $y_{i+1} - y_i = A_i h^2 + B_i h$  (Equation 1)

    *   **Derivative:**
        $S'_i(x) = 2A_i (x-x_i) + B_i$

    *   **Continuity of First Derivative at $x_i$ (for $i=1, ..., n-1$):**
        $S'_i(x_i) = 2A_i (x_i - x_i) + B_i = B_i$
        $S'_{i-1}(x_i) = 2A_{i-1} (x_i - x_{i-1}) + B_{i-1} = 2A_{i-1} h + B_{i-1}$
        So, $B_i = 2A_{i-1} h + B_{i-1}$ for $i = 1, ..., n-1$. (Equation 2)

*   **Determining Coefficients:**
    We have $n$ pieces, each with 3 coefficients, so $3n$ unknowns ($A_i, B_i, C_i$ for $i=0, ..., n-1$).
    *   $C_i = y_i$ (n unknowns determined directly).
    *   We have $n$ equations from Equation 1 ($y_{i+1} - y_i = A_i h^2 + B_i h$).
    *   We have $n-1$ equations from Equation 2 ($B_i = 2A_{i-1} h + B_{i-1}$).
    *   This leaves us with $n + (n-1) = 2n-1$ equations and $2n$ unknowns ($A_i, B_i$ for $i=0, ..., n-1$). We are still missing one condition.

    *   **The common approach for quadratic splines (often derived differently but leading to a similar system):**
        Let $m_i = S'_i(x_i)$ be the slope at point $x_i$.
        From $S_i(x) = A_i (x-x_i)^2 + B_i (x-x_i) + C_i$:
        $C_i = y_i$
        $S'_i(x) = 2A_i(x-x_i) + B_i$. So, $B_i = S'_i(x_i) = m_i$.
        $S_i(x_{i+1}) = A_i h^2 + m_i h + y_i = y_{i+1}$
        $A_i = \frac{y_{i+1} - y_i - m_i h}{h^2}$

        The continuity condition $S'_i(x_i) = S'_{i-1}(x_i)$ implies $m_i = m_i$. This is trivial.
        The condition $S'_i(x_i) = S'_{i-1}(x_i)$ doesn't seem right here.
        Let's re-evaluate the derivative continuity: $S'_i(x_i)$ from the definition on $[x_{i-1}, x_i]$ must match $S'_i(x_i)$ from the definition on $[x_i, x_{i+1}]$.

        Let $S_i(x) = a_i x^2 + b_i x + c_i$.
        $a_i x_i^2 + b_i x_i + c_i = y_i$ (1)
        $a_i x_{i+1}^2 + b_i x_{i+1} + c_i = y_{i+1}$ (2)
        $S'_i(x) = 2a_i x + b_i$.
        $2a_i x_i + b_i = 2a_{i-1} x_i + b_{i-1}$ for $i=1, ..., n-1$ (3)

        From (1) and (2):
        $a_i(x_{i+1}^2 - x_i^2) + b_i(x_{i+1} - x_i) = y_{i+1} - y_i$
        $a_i(x_{i+1}-x_i)(x_{i+1}+x_i) + b_i(x_{i+1}-x_i) = y_{i+1} - y_i$
        Assuming $x_{i+1} \neq x_i$:
        $a_i(x_{i+1}+x_i) + b_i = \frac{y_{i+1} - y_i}{x_{i+1}-x_i}$

        For equal intervals, $x_{i+1}+x_i = 2x_i + h$.
        $a_i(2x_i + h) + b_i = \frac{y_{i+1} - y_i}{h}$ (4)

        From (3): $b_i = 2a_{i-1} x_i + b_{i-1} - 2a_i x_i$
        Substitute $b_i$ into (4):
        $a_i(2x_i + h) + (2a_{i-1} x_i + b_{i-1} - 2a_i x_i) = \frac{y_{i+1} - y_i}{h}$
        $2a_i x_i + a_i h + 2a_{i-1} x_i + b_{i-1} - 2a_i x_i = \frac{y_{i+1} - y_i}{h}$
        $a_i h + 2a_{i-1} x_i + b_{i-1} = \frac{y_{i+1} - y_i}{h}$

        This is getting complicated. Let's use the slope definition again with equal intervals.
        Let $m_i = S'_i(x_i)$ for the spline on $[x_{i-1}, x_i]$.
        Let $m'_i = S'_i(x_i)$ for the spline on $[x_i, x_{i+1}]$.
        We require $m_i = m'_i$.

        Consider $S_i(x)$ on $[x_i, x_{i+1}]$.
        $S_i(x_i) = y_i$, $S_i(x_{i+1}) = y_{i+1}$.
        Let $S'_i(x_i) = m_i$ and $S'_i(x_{i+1}) = m_{i+1}$.
        We are seeking $m_0, m_1, ..., m_n$.
        These $n+1$ slopes are the unknowns.

        For a quadratic spline on $[x_i, x_{i+1}]$, the slope changes linearly.
        $S'_i(x) = S'_i(x_i) + \frac{S'_i(x_{i+1}) - S'_i(x_i)}{x_{i+1} - x_i} (x - x_i)$
        $S'_i(x) = m_i + \frac{m_{i+1} - m_i}{h} (x - x_i)$

        Now integrate $S'_i(x)$ to get $S_i(x)$:
        $S_i(x) = \int \left(m_i + \frac{m_{i+1} - m_i}{h} (x - x_i)\right) dx$
        $S_i(x) = m_i x + \frac{m_{i+1} - m_i}{h} \frac{(x - x_i)^2}{2} + K$
        $S_i(x) = \frac{m_{i+1} - m_i}{2h} (x - x_i)^2 + m_i (x - x_i) + K'$ (using $x-x_i$)

        Let's use the form $S_i(x) = A_i (x-x_i)^2 + B_i (x-x_i) + C_i$ again.
        $C_i = y_i$.
        $S'_i(x) = 2A_i (x-x_i) + B_i$.
        $S'_i(x_i) = B_i$. So $m_i = B_i$.
        $S'_i(x_{i+1}) = 2A_i h + B_i$. So $m_{i+1} = 2A_i h + m_i$.
        $A_i = \frac{m_{i+1} - m_i}{2h}$.

        Now use $S_i(x_{i+1}) = y_{i+1}$:
        $A_i h^2 + B_i h + C_i = y_{i+1}$
        $\left(\frac{m_{i+1} - m_i}{2h}\right) h^2 + m_i h + y_i = y_{i+1}$
        $\frac{(m_{i+1} - m_i)h}{2} + m_i h = y_{i+1} - y_i$
        Multiply by 2:
        $(m_{i+1} - m_i)h + 2m_i h = 2(y_{i+1} - y_i)$
        $m_{i+1} h - m_i h + 2m_i h = 2(y_{i+1} - y_i)$
        $m_{i+1} h + m_i h = 2(y_{i+1} - y_i)$
        $m_i + m_{i+1} = \frac{2}{h}(y_{i+1} - y_i)$ for $i = 0, ..., n-1$.

        This gives $n$ equations relating the slopes. We have $n+1$ slopes ($m_0, ..., m_n$).
        We still need one more condition.
        Common boundary conditions:
        *   **Natural Cubic Spline:** $S''_0(x_0) = 0$ and $S''_n(x_n) = 0$.
            For quadratic splines, $S''(x) = 2A_i$.
            So, $2A_0 = 0 \implies A_0 = 0$.
            And $2A_{n-1} = 0 \implies A_{n-1} = 0$.
            If $A_0=0$, then $\frac{m_1 - m_0}{2h} = 0 \implies m_1 = m_0$.
            If $A_{n-1}=0$, then $\frac{m_n - m_{n-1}}{2h} = 0 \implies m_n = m_{n-1}$.

        *   **Clamped Spline:** $S'_0(x_0) = y'_0$ (given) and $S'_n(x_n) = y'_n$ (given).
            This means $m_0 = y'_0$ and $m_n = y'_n$.

*   **Example of Quadratic Spline (Natural Boundary Condition):**
    Data points: (0, 1), (1, 2), (2, 4). Equal intervals, $h=1$.
    $n=2$. We need $S_0(x)$ on $[0, 1]$ and $S_1(x)$ on $[1, 2]$.
    We need slopes $m_0, m_1, m_2$.
    Boundary condition: Natural spline $\implies m_0 = m_1$ and $m_1 = m_2$.
    Thus, $m_0 = m_1 = m_2$. Let this common slope be $m$.

    Using the relation $m_i + m_{i+1} = \frac{2}{h}(y_{i+1} - y_i)$:
    *   For $i=0$: $m_0 + m_1 = \frac{2}{1}(y_1 - y_0) = 2(2 - 1) = 2$.
        Since $m_0 = m_1 = m$, this becomes $m + m = 2 \implies 2m = 2 \implies m = 1$.
        So, $m_0 = 1, m_1 = 1$.
    *   For $i=1$: $m_1 + m_2 = \frac{2}{1}(y_2 - y_1) = 2(4 - 2) = 4$.
        Since $m_1 = 1$ and $m_2 = m_1 = 1$ (from natural condition), this becomes $1 + 1 = 4$, which is $2=4$. This is a contradiction.

    **What went wrong?** The natural boundary condition for quadratic splines implies $S''_0(x_0)=0$ AND $S''_n(x_n)=0$.
    For $S_0(x) = A_0(x-x_0)^2 + B_0(x-x_0) + C_0$, $S''_0(x) = 2A_0$.
    $C_0 = y_0$.
    $B_0 = m_0$.
    $A_0 = \frac{m_1 - m_0}{2h}$.
    Natural condition at $x_0$: $A_0 = 0 \implies m_1 = m_0$.
    Natural condition at $x_n$: $A_{n-1} = 0 \implies m_n = m_{n-1}$.

    Let's use the slope relation: $m_i + m_{i+1} = \frac{2}{h}(y_{i+1} - y_i)$.
    With $m_0=m_1$ and $m_{n-1}=m_n$.
    For $n=2$, points (0,1), (1,2), (2,4), $h=1$.
    We need $m_0, m_1, m_2$.
    Conditions:
    1. $m_0 = m_1$ (from natural condition $A_0=0$)
    2. $m_1 = m_2$ (from natural condition $A_1=0$)
    3. $m_0 + m_1 = 2(y_1-y_0) = 2(2-1) = 2$
    4. $m_1 + m_2 = 2(y_2-y_1) = 2(4-2) = 4$

    From (1) and (3): $m_0 + m_0 = 2 \implies 2m_0 = 2 \implies m_0 = 1$.
    So $m_1 = 1$.
    From (2): $m_2 = m_1 = 1$.
    Substitute into (4): $m_1 + m_2 = 1 + 1 = 2$.
    But equation (4) requires $m_1 + m_2 = 4$.
    This inconsistency implies that a natural quadratic spline might not exist for arbitrary data, or there's a misunderstanding of the problem setup for quadratic splines.

    **Revisit the structure:** A quadratic spline $S(x)$ consists of $n$ quadratic segments $S_i(x)$ for $i=0, \dots, n-1$, where $S_i(x)$ interpolates $[x_i, y_i]$ and $[x_{i+1}, y_{i+1}]$.
    $S_i(x) = a_i x^2 + b_i x + c_i$.
    $S_i(x_i) = y_i$
    $S_i(x_{i+1}) = y_{i+1}$
    $S'_i(x_i) = S'_{i-1}(x_i)$ for $i=1, \dots, n-1$.

    Consider the interval $[x_i, x_{i+1}]$. The unique quadratic polynomial passing through $(x_i, y_i)$ and $(x_{i+1}, y_{i+1})$ is NOT enough to satisfy the derivative continuity.
    We need an extra condition for each segment.
    A common approach for quadratic splines is to specify the value of the derivative at *one* interior knot, or to use an end condition.

    Let's assume the problem intends a simpler method often presented, which is not the standard "natural" or "clamped" quadratic spline definition.
    **Alternative Quadratic Spline Construction (often taught for simplicity):**
    We define $n$ quadratic polynomials $S_i(x)$ for $i=0, \dots, n-1$, where $S_i(x)$ interpolates $(x_i, y_i)$ and $(x_{i+1}, y_{i+1})$.
    Let $S_i(x) = ax^2 + bx + c$.
    We need $S_i(x_i) = y_i$, $S_i(x_{i+1}) = y_{i+1}$. This gives 2 conditions per segment.
    We still need to ensure continuity of the derivative at the interior knots: $S'_i(x_i) = S'_{i-1}(x_i)$ for $i=1, \dots, n-1$. This gives $n-1$ conditions.
    This leaves $2n + (n-1) = 3n-1$ conditions for $3n$ unknowns.

    **Consider the example again: (0, 1), (1, 2), (2, 4), h=1.**
    $S_0(x)$ interpolates (0,1) and (1,2).
    $S_1(x)$ interpolates (1,2) and (2,4).
    We need $S'_0(1) = S'_1(1)$.

    Let's try to define $S_0(x)$ and $S_1(x)$ using properties that lead to a solvable system.
    A common construction for quadratic splines is to define them using a specific derivative value at each point.
    Suppose we define the derivative at $x_i$ to be $m_i$.
    Then on $[x_i, x_{i+1}]$, the spline $S_i(x)$ must satisfy:
    $S_i(x_i) = y_i$
    $S_i(x_{i+1}) = y_{i+1}$
    $S'_i(x_i) = m_i$

    Using the Newton form or Lagrange form, it's possible to construct this, but it gets complex.

    **A simpler way for quadratic splines with equal intervals often involves finding the slopes:**
    Let $m_i = S'(x_i)$ be the slope at $x_i$.
    For interval $[x_i, x_{i+1}]$, the quadratic spline $S_i(x)$ can be written as:
    $S_i(x) = y_i \frac{(x-x_{i+1})^2}{(x_i-x_{i+1})^2} + y_{i+1} \frac{(x-x_i)^2}{(x_{i+1}-x_i)^2} + m_i \frac{(x-x_{i+1})(x-x_i)}{(x_i-x_{i+1})}$.
    This formulation ensures $S_i(x_i)=y_i$, $S_i(x_{i+1})=y_{i+1}$, and $S'_i(x_i)=m_i$.
    For equal intervals ($x_{i+1}-x_i = h$):
    $S_i(x) = y_i \frac{(x-x_{i+1})^2}{h^2} + y_{i+1} \frac{(x-x_i)^2}{h^2} + m_i \frac{(x-x_{i+1})(x-x_i)}{-h}$.

    Now, apply the continuity of slope at $x_i$: $S'_i(x_i)$ must equal $S'_{i-1}(x_i)$.
    $S'_i(x) = y_i \frac{2(x-x_{i+1})}{h^2} + y_{i+1} \frac{2(x-x_i)}{h^2} + m_i \frac{(x-x_i) + (x-x_{i+1})}{-h}$.
    $S'_i(x_i) = y_i \frac{2(x_i-x_{i+1})}{h^2} + y_{i+1} \frac{2(x_i-x_i)}{h^2} + m_i \frac{(x_i-x_i) + (x_i-x_{i+1})}{-h}$.
    $S'_i(x_i) = y_i \frac{2(-h)}{h^2} + 0 + m_i \frac{0 + (-h)}{-h} = -\frac{2y_i}{h} + m_i$.

    So, we need: $-\frac{2y_i}{h} + m_i = -\frac{2y_{i-1}}{h} + m_{i-1}$ for $i=1, \dots, n-1$.
    $m_i = m_{i-1} + \frac{2}{h}(y_i - y_{i-1})$ for $i=1, \dots, n-1$.

    This sets up a recursive formula for the slopes. We need an initial slope $m_0$.
    *   If we use a clamped condition at $x_0$, $m_0 = y'_0$.
    *   If we use a natural condition $S''_0(x_0)=0$, it implies $A_0=0$, which means $m_1 = m_0$.

    **Example using this recursive slope definition (clamped at x0):**
    Data: (0, 1), (1, 2), (2, 4). $h=1$.
    Assume $S'_0(0) = 1$ (clamped condition). So $m_0 = 1$.

    Calculate slopes:
    *   $i=1$: $m_1 = m_0 + \frac{2}{h}(y_1 - y_0) = 1 + \frac{2}{1}(2 - 1) = 1 + 2 = 3$.
    *   $i=2$: $m_2 = m_1 + \frac{2}{h}(y_2 - y_1) = 3 + \frac{2}{1}(4 - 2) = 3 + 4 = 7$.

    So, $m_0 = 1, m_1 = 3, m_2 = 7$.

    Now construct the splines using $S_i(x) = \frac{m_{i+1} - m_i}{2h} (x - x_i)^2 + m_i (x - x_i) + y_i$.

    *   **For $i=0$ (interval [0, 1]):**
        $S_0(x) = \frac{m_1 - m_0}{2h} (x - x_0)^2 + m_0 (x - x_0) + y_0$
        $S_0(x) = \frac{3 - 1}{2(1)} (x - 0)^2 + 1 (x - 0) + 1$
        $S_0(x) = 1 x^2 + x + 1 = x^2 + x + 1$

        Check conditions:
        $S_0(0) = 0^2 + 0 + 1 = 1$ (correct)
        $S_0(1) = 1^2 + 1 + 1 = 3$ (Incorrect, should be 2)

    **There seems to be a misunderstanding in applying the standard formulas or the provided example data might be tricky for quadratic splines with these simple boundary conditions.**

    **Let's use the definition from a standard text:** A quadratic spline $S(x)$ on $[x_0, x_n]$ is a sequence of quadratic polynomials $S_i(x)$ on $[x_i, x_{i+1}]$ ($i=0, \dots, n-1$) such that:
    1. $S_i(x_i) = y_i$, $S_i(x_{i+1}) = y_{i+1}$.
    2. $S'_i(x_{i+1}) = S'_{i+1}(x_{i+1})$ for $i=0, \dots, n-2$. (Continuity of slope at interior knots).
    3. An end condition (e.g., $S'_0(x_0)=y'_0$ or $S''_0(x_0)=0$).

    Let $S_i(x) = a_i(x-x_i)^2 + b_i(x-x_i) + c_i$.
    $c_i = y_i$.
    $S_i(x_{i+1}) = a_i h^2 + b_i h + y_i = y_{i+1} \implies a_i h^2 + b_i h = y_{i+1} - y_i$.
    $S'_i(x) = 2a_i(x-x_i) + b_i$.
    $S'_i(x_i) = b_i$.
    $S'_i(x_{i+1}) = 2a_i h + b_i$.

    Continuity at $x_{i+1}$: $S'_i(x_{i+1}) = S'_{i+1}(x_{i+1})$.
    $2a_i h + b_i = b_{i+1}$ for $i=0, \dots, n-2$.

    We have $n$ segments, $3n$ unknowns ($a_i, b_i, c_i$).
    $c_i$ are known ($y_i$). So $2n$ unknowns ($a_i, b_i$).
    Conditions:
    *   $a_i h^2 + b_i h = y_{i+1} - y_i$ (n equations).
    *   $2a_i h + b_i = b_{i+1}$ (n-1 equations).

    Total conditions: $2n + n - 1 = 3n - 1$.
    We still need one more condition.

    **Example with (0, 1), (1, 2), (2, 4), h=1.**
    $n=2$. $S_0$ on [0,1], $S_1$ on [1,2].
    $S_0(x) = a_0(x)^2 + b_0(x) + 1$.
    $S_1(x) = a_1(x-1)^2 + b_1(x-1) + 2$.

    $i=0$:
    $a_0 h^2 + b_0 h = y_1 - y_0 \implies a_0 (1)^2 + b_0 (1) = 2 - 1 = 1 \implies a_0 + b_0 = 1$. (Eq A)
    $S'_0(x) = 2a_0 x + b_0$.
    $S'_0(1) = 2a_0 + b_0$.

    $i=1$:
    $a_1 h^2 + b_1 h = y_2 - y_1 \implies a_1 (1)^2 + b_1 (1) = 4 - 2 = 2 \implies a_1 + b_1 = 2$. (Eq B)
    $S'_1(x) = 2a_1 (x-1) + b_1$.
    $S'_1(1) = b_1$.

    Continuity at $x=1$: $S'_0(1) = S'_1(1)$
    $2a_0 + b_0 = b_1$. (Eq C)

    We have 3 equations (A, B, C) and 4 unknowns ($a_0, b_0, a_1, b_1$).
    We need an end condition.
    Let's use a clamped condition: $S'_0(0) = 1$ (given derivative).
    $S'_0(0) = b_0$. So $b_0 = 1$.

    From (A): $a_0 + 1 = 1 \implies a_0 = 0$.
    From (C): $2(0) + 1 = b_1 \implies b_1 = 1$.
    From (B): $a_1 + 1 = 2 \implies a_1 = 1$.

    So, the quadratic spline is:
    $S_0(x) = 0(x)^2 + 1(x) + 1 = x + 1$.
    $S_1(x) = 1(x-1)^2 + 1(x-1) + 2 = (x^2 - 2x + 1) + (x - 1) + 2 = x^2 - x + 2$.

    Let's verify:
    $S_0(0) = 0 + 1 = 1$ (correct)
    $S_0(1) = 1 + 1 = 2$ (correct)
    $S'_0(x) = 1$. $S'_0(0) = 1$ (correct, clamped condition).
    $S'_0(1) = 1$.

    $S_1(1) = 1^2 - 1 + 2 = 2$ (correct)
    $S_1(2) = 2^2 - 2 + 2 = 4$ (correct)
    $S'_1(x) = 2x - 1$.
    $S'_1(1) = 2(1) - 1 = 1$.
    Continuity $S'_0(1) = S'_1(1) = 1$ is satisfied.

    So, the quadratic spline is:
    $S(x) = \begin{cases} x+1 & 0 \le x \le 1 \\ x^2 - x + 2 & 1 \le x \le 2 \end{cases}$

---

### 4.2. Cubic Spline Interpolation (Equal Intervals)

*   **Key Concept:** A cubic spline is a piecewise cubic polynomial that interpolates a set of data points and ensures continuity of the function, its first derivative, and its second derivative at the interior knots.

*   **Setup:** $n+1$ data points $(x_0, y_0), (x_1, y_1), ..., (x_n, y_n)$ with equal intervals $h = x_{i+1} - x_i$.
*   We need $n$ cubic polynomials, $S_i(x)$, for $i = 0, 1, ..., n-1$.
*   $S_i(x)$ interpolates $(x_i, y_i)$ and $(x_{i+1}, y_{i+1})$.
*   The general form of a cubic polynomial is $S_i(x) = a_i x^3 + b_i x^2 + c_i x + d_i$.

*   **Conditions for Cubic Spline:**
    1.  **Interpolation conditions:**
        *   $S_i(x_i) = y_i$ for $i = 0, ..., n-1$
        *   $S_i(x_{i+1}) = y_{i+1}$ for $i = 0, ..., n-1$
        This gives $2n$ conditions.

    2.  **Continuity of the first derivative at interior knots:**
        *   $S'_i(x_i) = S'_{i-1}(x_i)$ for $i = 1, ..., n-1$
        This gives $n-1$ conditions.

    3.  **Continuity of the second derivative at interior knots:**
        *   $S''_i(x_i) = S''_{i-1}(x_i)$ for $i = 1, ..., n-1$
        This gives $n-1$ conditions.

*   **Total conditions:** $2n + (n-1) + (n-1) = 4n-2$.
*   **Total number of unknown coefficients:** We have $n$ cubic polynomials, each with 4 coefficients ($a_i, b_i, c_i, d_i$), so $4n$ unknowns.
*   **The "missing" conditions:** We need 2 more conditions to uniquely determine the spline. These are typically the end conditions.

*   **Simplified form for Cubic Spline with Equal Intervals:**
    It's often easier to work with a form that directly incorporates continuity.
    Let $S_i(x)$ be the cubic spline on $[x_i, x_{i+1}]$.
    $S_i(x) = a_i(x-x_i)^3 + b_i(x-x_i)^2 + c_i(x-x_i) + d_i$.

    *   $S_i(x_i) = d_i = y_i$.
    *   $S'_i(x) = 3a_i(x-x_i)^2 + 2b_i(x-x_i) + c_i$.
    *   $S'_i(x_i) = c_i$. Let $m_i = S'_i(x_i)$ be the slope at $x_i$. So, $c_i = m_i$.
    *   $S''_i(x) = 6a_i(x-x_i) + 2b_i$.
    *   $S''_i(x_i) = 2b_i$. Let $M_i = S''_i(x_i)$ be the second derivative at $x_i$. So, $b_i = M_i/2$.

    Now, use the conditions at $x_{i+1}$:
    *   $S_i(x_{i+1}) = y_{i+1}$:
        $a_i h^3 + b_i h^2 + c_i h + d_i = y_{i+1}$
        $a_i h^3 + \frac{M_i}{2} h^2 + m_i h + y_i = y_{i+1}$
        $a_i h^3 = y_{i+1} - y_i - m_i h - \frac{M_i h^2}{2}$
        $a_i = \frac{y_{i+1} - y_i}{h^3} - \frac{m_i}{h^2} - \frac{M_i}{2h}$

    *   $S'_i(x_{i+1}) = m_{i+1}$:
        $3a_i h^2 + 2b_i h + c_i = m_{i+1}$
        $3a_i h^2 + 2(\frac{M_i}{2}) h + m_i = m_{i+1}$
        $3a_i h^2 + M_i h + m_i = m_{i+1}$
        $3a_i h^2 = m_{i+1} - m_i - M_i h$
        $a_i = \frac{m_{i+1} - m_i - M_i h}{3h^2}$

    *   $S''_i(x_{i+1}) = M_{i+1}$:
        $6a_i h + 2b_i = M_{i+1}$
        $6a_i h + 2(\frac{M_i}{2}) = M_{i+1}$
        $6a_i h + M_i = M_{i+1}$
        $a_i = \frac{M_{i+1} - M_i}{6h}$

    Equating the expressions for $a_i$:
    1.  $\frac{M_{i+1} - M_i}{6h} = \frac{y_{i+1} - y_i}{h^3} - \frac{m_i}{h^2} - \frac{M_i}{2h}$
        Multiply by $6h^3$:
        $h^2 (M_{i+1} - M_i) = 6(y_{i+1} - y_i) - 6h m_i - 3h^2 M_i$
        $h^2 M_{i+1} - h^2 M_i = 6(y_{i+1} - y_i) - 6h m_i - 3h^2 M_i$
        $h^2 M_{i+1} + 2h^2 M_i = 6(y_{i+1} - y_i) - 6h m_i$
        $M_{i+1} + 2M_i = \frac{6}{h^2}(y_{i+1} - y_i) - \frac{6}{h} m_i$ (Relates M_i, M_{i+1}, m_i, m_{i+1})

    2.  $\frac{M_{i+1} - M_i}{6h} = \frac{m_{i+1} - m_i - M_i h}{3h^2}$
        Multiply by $6h^2$:
        $h(M_{i+1} - M_i) = 2(m_{i+1} - m_i - M_i h)$
        $h M_{i+1} - h M_i = 2m_{i+1} - 2m_i - 2h M_i$
        $h M_{i+1} + h M_i = 2m_{i+1} - 2m_i$
        $M_{i+1} + M_i = \frac{2}{h}(m_{i+1} - m_i)$ (Relates M_i, M_{i+1}, m_i, m_{i+1})

    We have $n+1$ slopes $m_i$ and $n+1$ second derivatives $M_i$ as unknowns.
    From continuity conditions:
    *   $M_{i+1} + M_i = \frac{2}{h}(m_{i+1} - m_i)$ (n equations)
    *   $M_{i+1} + 2M_i = \frac{6}{h^2}(y_{i+1} - y_i) - \frac{6}{h} m_i$ (n equations)

    We have $2n$ equations and $2(n+1) = 2n+2$ unknowns ($m_0, ..., m_n, M_0, ..., M_n$).
    We need 2 end conditions.

    *   **Common End Conditions:**
        *   **Natural Cubic Spline:** $S''_0(x_0) = M_0 = 0$ and $S''_n(x_n) = M_n = 0$.
        *   **Clamped Cubic Spline:** $S'_0(x_0) = m_0$ (given) and $S'_n(x_n) = m_n$ (given).

*   **Solving for $m_i$ and $M_i$ (using Natural Cubic Spline boundary conditions):**
    Set $M_0 = 0$ and $M_n = 0$.
    The equations become:
    For $i = 1, ..., n-1$:
    (1) $M_{i+1} + M_i = \frac{2}{h}(m_{i+1} - m_i)$
    (2) $M_{i+1} + 2M_i = \frac{6}{h^2}(y_{i+1} - y_i) - \frac{6}{h} m_i$

    We can eliminate $M_{i+1}$ by subtracting (1) from (2):
    $M_i = \frac{6}{h^2}(y_{i+1} - y_i) - \frac{6}{h} m_i - \frac{2}{h}(m_{i+1} - m_i)$
    $M_i = \frac{6}{h^2}(y_{i+1} - y_i) - \frac{6}{h} m_i - \frac{2}{h} m_{i+1} + \frac{2}{h} m_i$
    $M_i = \frac{6}{h^2}(y_{i+1} - y_i) - \frac{4}{h} m_i - \frac{2}{h} m_{i+1}$

    Now, we need to use the boundary condition $M_0 = 0$.
    For $i=0$:
    $M_0 = \frac{6}{h^2}(y_1 - y_0) - \frac{4}{h} m_0 - \frac{2}{h} m_1$.
    Since $M_0 = 0$:
    $0 = \frac{6}{h^2}(y_1 - y_0) - \frac{4}{h} m_0 - \frac{2}{h} m_1$
    Multiply by $h^2$:
    $0 = 6(y_1 - y_0) - 4h m_0 - 2h m_1$
    $2h m_1 + 4h m_0 = 6(y_1 - y_0)$
    $h m_1 + 2h m_0 = 3(y_1 - y_0)$ (Equation $\alpha$)

    And use the boundary condition $M_n = 0$.
    For $i=n-1$:
    $M_n = \frac{6}{h^2}(y_n - y_{n-1}) - \frac{4}{h} m_{n-1} - \frac{2}{h} m_n$.
    Since $M_n = 0$:
    $0 = \frac{6}{h^2}(y_n - y_{n-1}) - \frac{4}{h} m_{n-1} - \frac{2}{h} m_n$
    Multiply by $h^2$:
    $0 = 6(y_n - y_{n-1}) - 4h m_{n-1} - 2h m_n$
    $2h m_n + 4h m_{n-1} = 6(y_n - y_{n-1})$
    $h m_n + 2h m_{n-1} = 3(y_n - y_{n-1})$ (Equation $\beta$)

    The equations for $i=1, \dots, n-2$ relate $m_{i-1}, m_i, m_{i+1}$ and $M_i, M_{i+1}$.
    Let's go back to the equation $M_{i+1} + M_i = \frac{2}{h}(m_{i+1} - m_i)$ and $M_{i+1} + 2M_i = \frac{6}{h^2}(y_{i+1} - y_i) - \frac{6}{h} m_i$.

    From $M_i = \frac{6}{h^2}(y_{i+1} - y_i) - \frac{4}{h} m_i - \frac{2}{h} m_{i+1}$, we can write $M_{i+1}$ in terms of $m_{i+1}, m_{i+2}$:
    $M_{i+1} = \frac{6}{h^2}(y_{i+2} - y_{i+1}) - \frac{4}{h} m_{i+1} - \frac{2}{h} m_{i+2}$.

    Substitute $M_i$ and $M_{i+1}$ into $M_{i+1} + M_i = \frac{2}{h}(m_{i+1} - m_i)$:
    $[\frac{6}{h^2}(y_{i+2} - y_{i+1}) - \frac{4}{h} m_{i+1} - \frac{2}{h} m_{i+2}] + [\frac{6}{h^2}(y_{i+1} - y_i) - \frac{4}{h} m_i - \frac{2}{h} m_{i+1}] = \frac{2}{h}(m_{i+1} - m_i)$

    Combine terms for the same $y$:
    $\frac{6}{h^2}(y_{i+2} - y_{i+1} + y_{i+1} - y_i) - \frac{6}{h} m_{i+1} - \frac{6}{h} m_i = \frac{2}{h}(m_{i+1} - m_i)$
    $\frac{6}{h^2}(y_{i+2} - y_i) - \frac{6}{h} m_{i+1} - \frac{6}{h} m_i = \frac{2}{h} m_{i+1} - \frac{2}{h} m_i$

    Multiply by $h^2$:
    $6(y_{i+2} - y_i) - 6h m_{i+1} - 6h m_i = 2h m_{i+1} - 2h m_i$
    $6(y_{i+2} - y_i) = 8h m_{i+1} + 4h m_i$
    $3(y_{i+2} - y_i) = 4h m_{i+1} + 2h m_i$ (for $i = 0, ..., n-2$)

    This gives a system of $n-1$ linear equations for $n+1$ slopes $m_0, ..., m_n$.
    The system is:
    *   $2h m_0 + h m_1 = 3(y_1 - y_0)$ (This is for $i=0$, but using $M_0=0$)
    *   $2h m_i + 4h m_{i+1} + 2h m_{i+2} = 3(y_{i+2} - y_i)$ for $i=0, ..., n-2$.
        Let's re-index. The equation derived from $M_{i+1} + M_i$ is for $i=1, ..., n-1$.
        The correct form is:
        $h m_{i-1} + 4h m_i + h m_{i+1} = 3(y_{i+1} - y_{i-1})$ for $i=1, ..., n-1$.
        This is a tridiagonal system of linear equations.

        Boundary conditions $M_0=0$ and $M_n=0$ need to be incorporated.
        The first equation ($i=1$) involves $m_0, m_1, m_2$ and $M_1, M_2$.
        $M_1 + M_0 = \frac{2}{h}(m_1 - m_0) \implies M_1 = \frac{2}{h}(m_1 - m_0)$ (since $M_0=0$)
        $M_1 + 2M_0 = \frac{6}{h^2}(y_1 - y_0) - \frac{6}{h} m_0 \implies M_1 = \frac{6}{h^2}(y_1 - y_0) - \frac{6}{h} m_0$ (since $M_0=0$)
        Equating these for $M_1$:
        $\frac{2}{h}(m_1 - m_0) = \frac{6}{h^2}(y_1 - y_0) - \frac{6}{h} m_0$
        $2h(m_1 - m_0) = 6(y_1 - y_0) - 6h m_0$
        $2h m_1 - 2h m_0 = 6(y_1 - y_0) - 6h m_0$
        $2h m_1 + 4h m_0 = 6(y_1 - y_0)$
        $h m_1 + 2h m_0 = 3(y_1 - y_0)$. This is the first equation in the system for slopes.

        The last equation ($i=n-1$) relates $m_{n-2}, m_{n-1}, m_n$ and $M_{n-1}, M_n$.
        $M_n + M_{n-1} = \frac{2}{h}(m_n - m_{n-1})$. Since $M_n=0$, $M_{n-1} = \frac{2}{h}(m_n - m_{n-1})$.
        $M_n + 2M_{n-1} = \frac{6}{h^2}(y_n - y_{n-1}) - \frac{6}{h} m_{n-1}$. Since $M_n=0$, $2M_{n-1} = \frac{6}{h^2}(y_n - y_{n-1}) - \frac{6}{h} m_{n-1}$.
        Equating for $M_{n-1}$:
        $\frac{2}{h}(m_n - m_{n-1}) = \frac{6}{h^2}(y_n - y_{n-1}) - \frac{6}{h} m_{n-1}$.
        $2h(m_n - m_{n-1}) = 6(y_n - y_{n-1}) - 6h m_{n-1}$
        $2h m_n - 2h m_{n-1} = 6(y_n - y_{n-1}) - 6h m_{n-1}$
        $2h m_n + 4h m_{n-1} = 6(y_n - y_{n-1})$
        $h m_n + 2h m_{n-1} = 3(y_n - y_{n-1})$. This is the last equation in the system for slopes.

    The system for slopes $m_i$ is:
    $h m_0 + 2h m_1 = 3(y_1 - y_0)$
    $h m_{i-1} + 4h m_i + h m_{i+1} = 3(y_{i+1} - y_{i-1})$ for $i=2, ..., n-1$
    $2h m_{n-1} + h m_n = 3(y_n - y_{n-1})$

    This is a system of $n+1$ equations for $n+1$ unknowns ($m_0, ..., m_n$). This system can be solved efficiently using Gaussian elimination or Thomas algorithm (for tridiagonal systems).

*   **Example of Cubic Spline (Natural Boundary Condition):**
    Data points: (0, 1), (1, 2), (2, 4). Equal intervals, $h=1$.
    $n=2$. We need $S_0(x)$ on [0,1] and $S_1(x)$ on [1,2].
    We need slopes $m_0, m_1, m_2$ and second derivatives $M_0, M_1, M_2$.
    Natural boundary conditions: $M_0=0$, $M_2=0$.

    Using the system of equations for slopes:
    $n=2$, so indices for $i$ go up to $n-1=1$.
    Equation 1: $h m_0 + 2h m_1 = 3(y_1 - y_0)$
    Equation 2: $2h m_1 + h m_2 = 3(y_2 - y_1)$

    Substitute values: $h=1, y_0=1, y_1=2, y_2=4$.
    1. $1 m_0 + 2(1) m_1 = 3(2 - 1) \implies m_0 + 2m_1 = 3$.
    2. $2(1) m_1 + 1 m_2 = 3(4 - 2) \implies 2m_1 + m_2 = 6$.

    We still need to use the internal equation relating slopes and derivatives.
    The general relation for $i=1, \dots, n-1$ is $h m_{i-1} + 4h m_i + h m_{i+1} = 3(y_{i+1} - y_{i-1})$.
    For $n=2$, this equation is for $i=1$:
    $h m_0 + 4h m_1 + h m_2 = 3(y_2 - y_0)$.
    $1 m_0 + 4(1) m_1 + 1 m_2 = 3(4 - 0) = 12$.
    $m_0 + 4m_1 + m_2 = 12$.

    So we have a system of 3 equations for $m_0, m_1, m_2$:
    (A) $m_0 + 2m_1 = 3$
    (B) $2m_1 + m_2 = 6$
    (C) $m_0 + 4m_1 + m_2 = 12$

    From (A), $m_0 = 3 - 2m_1$.
    From (B), $m_2 = 6 - 2m_1$.
    Substitute $m_0$ and $m_2$ into (C):
    $(3 - 2m_1) + 4m_1 + (6 - 2m_1) = 12$
    $3 - 2m_1 + 4m_1 + 6 - 2m_1 = 12$
    $9 = 12$. This is a contradiction.

    **Let's re-check the system derivation for slopes.**
    The system $h m_{i-1} + 4h m_i + h m_{i+1} = 3(y_{i+1} - y_{i-1})$ is for $i=1, \dots, n-1$.
    And the end conditions $M_0=0$ leads to $2h m_0 + h m_1 = 3(y_1 - y_0)$, and $M_n=0$ leads to $2h m_{n-1} + h m_n = 3(y_n - y_{n-1})$.

    For $n=2$:
    $i=1$: $h m_0 + 4h m_1 + h m_2 = 3(y_2 - y_0)$.
    The end condition for $M_0=0$ gives: $2h m_0 + h m_1 = 3(y_1 - y_0)$.
    The end condition for $M_2=0$ gives: $2h m_1 + h m_2 = 3(y_2 - y_1)$.

    Let's use these three equations.
    Data: (0, 1), (1, 2), (2, 4). $h=1$.
    (1) $2m_0 + m_1 = 3(2 - 1) = 3$.
    (2) $2m_1 + m_2 = 3(4 - 2) = 6$.
    (3) $m_0 + 4m_1 + m_2 = 3(4 - 0) = 12$.

    From (1), $m_1 = 3 - 2m_0$.
    From (2), $m_2 = 6 - 2m_1 = 6 - 2(3 - 2m_0) = 6 - 6 + 4m_0 = 4m_0$.
    Substitute $m_1$ and $m_2$ into (3):
    $m_0 + 4(3 - 2m_0) + 4m_0 = 12$
    $m_0 + 12 - 8m_0 + 4m_0 = 12$
    $m_0 - 4m_0 + 12 = 12$
    $-3m_0 = 0 \implies m_0 = 0$.

    Now find $m_1$ and $m_2$:
    $m_1 = 3 - 2(0) = 3$.
    $m_2 = 4(0) = 0$.

    So, slopes are $m_0 = 0, m_1 = 3, m_2 = 0$.

    Now we need to find the second derivatives $M_i$.
    We used $M_0=0, M_2=0$.
    From $M_1 + 2M_0 = \frac{6}{h^2}(y_1 - y_0) - \frac{6}{h} m_0$:
    $M_1 + 2(0) = \frac{6}{1^2}(2 - 1) - \frac{6}{1} (0)$
    $M_1 = 6(1) - 0 = 6$.

    So, $M_0 = 0, M_1 = 6, M_2 = 0$.

    Now we can construct the spline segments $S_i(x) = a_i(x-x_i)^3 + b_i(x-x_i)^2 + c_i(x-x_i) + d_i$:
    $d_i = y_i$, $c_i = m_i$, $b_i = M_i/2$.
    $a_i = \frac{M_{i+1} - M_i}{6h}$.

    *   **For $i=0$ (interval [0, 1]):**
        $x_0=0, y_0=1, m_0=0, M_0=0$. $x_1=1, y_1=2, m_1=3, M_1=6$. $h=1$.
        $d_0 = y_0 = 1$.
        $c_0 = m_0 = 0$.
        $b_0 = M_0/2 = 0/2 = 0$.
        $a_0 = \frac{M_1 - M_0}{6h} = \frac{6 - 0}{6(1)} = 1$.

        $S_0(x) = 1(x-0)^3 + 0(x-0)^2 + 0(x-0) + 1 = x^3 + 1$.

        Check:
        $S_0(0) = 0^3 + 1 = 1$ (correct)
        $S_0(1) = 1^3 + 1 = 2$ (correct)
        $S'_0(x) = 3x^2$. $S'_0(0) = 0$ (correct, $m_0$)
        $S'_0(1) = 3(1)^2 = 3$ (correct, $m_1$)
        $S''_0(x) = 6x$. $S''_0(0) = 0$ (correct, $M_0$)
        $S''_0(1) = 6(1) = 6$ (correct, $M_1$)

    *   **For $i=1$ (interval [1, 2]):**
        $x_1=1, y_1=2, m_1=3, M_1=6$. $x_2=2, y_2=4, m_2=0, M_2=0$. $h=1$.
        $d_1 = y_1 = 2$.
        $c_1 = m_1 = 3$.
        $b_1 = M_1/2 = 6/2 = 3$.
        $a_1 = \frac{M_2 - M_1}{6h} = \frac{0 - 6}{6(1)} = -1$.

        $S_1(x) = -1(x-1)^3 + 3(x-1)^2 + 3(x-1) + 2$.

        Check:
        $S_1(1) = -1(0)^3 + 3(0)^2 + 3(0) + 2 = 2$ (correct)
        $S_1(2) = -1(2-1)^3 + 3(2-1)^2 + 3(2-1) + 2 = -1(1)^3 + 3(1)^2 + 3(1) + 2 = -1 + 3 + 3 + 2 = 7$. (Incorrect, should be 4).

    **There must be an error in my system of equations or their derivation.**

    Let's use the standard form of cubic spline equations derived from $S_i(x) = a_i x^3 + b_i x^2 + c_i x + d_i$.
    We have $n$ segments, $3n$ unknowns if we don't use the $M_i$ formulation.
    Let $S_i(x)$ be the spline on $[x_i, x_{i+1}]$.
    $S_i(x_i) = y_i$
    $S_i(x_{i+1}) = y_{i+1}$
    $S'_i(x_i) = S'_{i-1}(x_i)$ for $i=1, \dots, n-1$
    $S''_i(x_i) = S''_{i-1}(x_i)$ for $i=1, \dots, n-1$

    With equal intervals $h$, the system of equations for the second derivatives $M_i = S''(x_i)$ for $i=1, \dots, n-1$ is:
    $\frac{h}{6} M_{i-1} + \frac{4h}{6} M_i + \frac{h}{6} M_{i+1} = \frac{y_{i+1} - y_i}{h} - \frac{y_i - y_{i-1}}{h}$
    Multiply by $6/h$:
    $M_{i-1} + 4M_i + M_{i+1} = \frac{6}{h^2}(y_{i+1} - 2y_i + y_{i-1})$.
    This is for $i=1, \dots, n-1$.

    Let's use this for $n=2$.
    $i=1$: $M_0 + 4M_1 + M_2 = \frac{6}{h^2}(y_2 - 2y_1 + y_0)$.

    Data: (0, 1), (1, 2), (2, 4). $h=1$.
    $M_0 + 4M_1 + M_2 = \frac{6}{1^2}(4 - 2(2) + 1) = 6(4 - 4 + 1) = 6$.

    With natural boundary conditions $M_0 = 0, M_2 = 0$:
    $0 + 4M_1 + 0 = 6 \implies 4M_1 = 6 \implies M_1 = 1.5$.

    Now construct the splines $S_i(x)$.
    A common way is to use $S_i(x) = \alpha_i(x-x_i)^3 + \beta_i(x-x_i)^2 + \gamma_i(x-x_i) + \delta_i$.
    $\delta_i = y_i$
    $\gamma_i = \frac{y_{i+1}-y_i}{h} - \frac{h}{6}(2M_i + M_{i+1})$
    $\beta_i = \frac{M_i}{2}$
    $\alpha_i = \frac{M_{i+1}-M_i}{6h}$

    *   **For $i=0$ (interval [0, 1]):**
        $x_0=0, y_0=1$. $x_1=1, y_1=2$. $h=1$. $M_0=0, M_1=1.5$.
        $\delta_0 = y_0 = 1$.
        $\gamma_0 = \frac{y_1-y_0}{h} - \frac{h}{6}(2M_0 + M_1) = \frac{2-1}{1} - \frac{1}{6}(2(0) + 1.5) = 1 - \frac{1.5}{6} = 1 - 0.25 = 0.75$.
        $\beta_0 = \frac{M_0}{2} = \frac{0}{2} = 0$.
        $\alpha_0 = \frac{M_1-M_0}{6h} = \frac{1.5-0}{6(1)} = 0.25$.

        $S_0(x) = 0.25 x^3 + 0 x^2 + 0.75 x + 1 = 0.25x^3 + 0.75x + 1$.

        Check:
        $S_0(0) = 1$ (correct)
        $S_0(1) = 0.25 + 0.75 + 1 = 2$ (correct)
        $S'_0(x) = 0.75x^2 + 0.75$. $S'_0(0) = 0.75$.
        $S''_0(x) = 1.5x$. $S''_0(0) = 0$ (correct, $M_0$).
        $S''_0(1) = 1.5$.

    *   **For $i=1$ (interval [1, 2]):**
        $x_1=1, y_1=2$. $x_2=2, y_2=4$. $h=1$. $M_1=1.5, M_2=0$.
        $\delta_1 = y_1 = 2$.
        $\gamma_1 = \frac{y_2-y_1}{h} - \frac{h}{6}(2M_1 + M_2) = \frac{4-2}{1} - \frac{1}{6}(2(1.5) + 0) = 2 - \frac{3}{6} = 2 - 0.5 = 1.5$.
        $\beta_1 = \frac{M_1}{2} = \frac{1.5}{2} = 0.75$.
        $\alpha_1 = \frac{M_2-M_1}{6h} = \frac{0-1.5}{6(1)} = -0.25$.

        $S_1(x) = -0.25(x-1)^3 + 0.75(x-1)^2 + 1.5(x-1) + 2$.

        Check:
        $S_1(1) = 2$ (correct)
        $S_1(2) = -0.25(1)^3 + 0.75(1)^2 + 1.5(1) + 2 = -0.25 + 0.75 + 1.5 + 2 = 0.5 + 3.5 = 4$ (correct).
        $S'_1(x) = -0.75(x-1)^2 + 1.5(x-1) + 1.5$.
        $S'_1(1) = 1.5$.
        $S''_1(x) = -1.5(x-1) + 1.5$.
        $S''_1(1) = 1.5$ (correct, continuity of $S''$ at $x=1$).
        $S''_1(2) = -1.5(1) + 1.5 = 0$ (correct, $M_2$).

    So the natural cubic spline is:
    $S(x) = \begin{cases} 0.25x^3 + 0.75x + 1 & 0 \le x \le 1 \\ -0.25(x-1)^3 + 0.75(x-1)^2 + 1.5(x-1) + 2 & 1 \le x \le 2 \end{cases}$

*   **Advantages of Cubic Splines:**
    *   Provide a smooth interpolation (continuous up to the second derivative).
    *   Avoid the oscillations seen in high-degree polynomial interpolation.
    *   Local influence: changing one data point only affects nearby spline segments.
    *   Widely used in graphics, CAD, and numerical analysis.

*   **Disadvantages of Cubic Splines:**
    *   More complex to implement than Lagrangian interpolation.
    *   Requires solving a system of linear equations (often tridiagonal).

---

### 5. Practice Questions and Exercises

**1. Lagrangian Interpolation:**
Given the data points (0, 1), (2, 5), (3, 10). Find the Lagrangian interpolating polynomial and use it to estimate the value at $x=1$.

**2. Hermite Interpolation:**
Construct the Hermite interpolating polynomial for the data points $(0, 1)$ and $(1, 3)$ with derivative values $f'(0) = 2$ and $f'(1) = 1$.

**3. Quadratic Spline Interpolation:**
Fit a natural quadratic spline to the data points (0, 0), (1, 1), (2, 0). (Assume equal intervals, $h=1$). Use the clamped condition $S'(0)=1$.
*   Calculate the slopes $m_0, m_1, m_2$.
*   Determine the quadratic spline segments $S_0(x)$ and $S_1(x)$.

**4. Cubic Spline Interpolation:**
Fit a natural cubic spline to the data points (0, 0), (1, 1), (2, 0).
*   Calculate the second derivatives $M_0, M_1, M_2$.
*   Determine the cubic spline segments $S_0(x)$ and $S_1(x)$.

---

### 6. Answers to Practice Questions

**1. Lagrangian Interpolation:**
*   Points: $(x_0, y_0) = (0, 1), (x_1, y_1) = (2, 5), (x_2, y_2) = (3, 10)$.
*   $L_0(x) = \frac{(x-2)(x-3)}{(0-2)(0-3)} = \frac{(x-2)(x-3)}{6}$
*   $L_1(x) = \frac{(x-0)(x-3)}{(2-0)(2-3)} = \frac{x(x-3)}{-2}$
*   $L_2(x) = \frac{(x-0)(x-2)}{(3-0)(3-2)} = \frac{x(x-2)}{3}$
*   $P(x) = y_0 L_0(x) + y_1 L_1(x) + y_2 L_2(x)$
    $P(x) = 1 \cdot \frac{(x-2)(x-3)}{6} + 5 \cdot \frac{x(x-3)}{-2} + 10 \cdot \frac{x(x-2)}{3}$
    $P(x) = \frac{x^2 - 5x + 6}{6} - \frac{5(x^2 - 3x)}{2} + \frac{10(x^2 - 2x)}{3}$
    $P(x) = \frac{(x^2 - 5x + 6) - 15(x^2 - 3x) + 20(x^2 - 2x)}{6}$
    $P(x) = \frac{x^2 - 5x + 6 - 15x^2 + 45x + 20x^2 - 40x}{6}$
    $P(x) = \frac{(1 - 15 + 20)x^2 + (-5 + 45 - 40)x + 6}{6}$
    $P(x) = \frac{6x^2 + 0x + 6}{6} = x^2 + 1$.
*   Estimate at $x=1$: $P(1) = 1^2 + 1 = 2$.

**2. Hermite Interpolation:**
*   Points: $(x_0, y_0) = (0, 1), (x_1, y_1) = (1, 3)$. $y'_0 = 2, y'_1 = 1$.
*   $n=2$. Polynomial degree at most $2n-1 = 3$.
*   $L_0(x) = \frac{x-1}{0-1} = 1-x$. $L_0'(x) = -1$. $L_0'(x_0) = -1$.
*   $L_1(x) = \frac{x-0}{1-0} = x$. $L_1'(x) = 1$. $L_1'(x_1) = 1$.
*   $H_0(x) = [1 - 2(x - x_0) L'_0(x_0)] [L_0(x)]^2 = [1 - 2(x - 0) (-1)] (1-x)^2 = (1 + 2x)(1-x)^2$.
*   $\hat{H}_0(x) = (x - x_0) [L_0(x)]^2 = x (1-x)^2$.
*   $H_1(x) = [1 - 2(x - x_1) L'_1(x_1)] [L_1(x)]^2 = [1 - 2(x - 1) (1)] x^2 = (1 - 2x + 2) x^2 = (3 - 2x)x^2$.
*   $\hat{H}_1(x) = (x - x_1) [L_1(x)]^2 = (x - 1) x^2$.
*   $H(x) = y_0 H_0(x) + y_1 H_1(x) + y'_0 \hat{H}_0(x) + y'_1 \hat{H}_1(x)$
    $H(x) = 1 \cdot (1 + 2x)(1-x)^2 + 3 \cdot (3 - 2x)x^2 + 2 \cdot x(1-x)^2 + 1 \cdot (x - 1)x^2$
    $H(x) = (1+2x)(1-2x+x^2) + (9-6x)x^2 + 2x(1-2x+x^2) + (x^3-x^2)$
    $H(x) = (1 - 2x + x^2 + 2x - 4x^2 + 2x^3) + (9x^2 - 6x^3) + (2x - 4x^2 + 2x^3) + (x^3 - x^2)$
    $H(x) = (1 - 3x^2 + 2x^3) + (9x^2 - 6x^3) + (2x - 4x^2 + 2x^3) + (x^3 - x^2)$
    $H(x) = (2 - 6 + 2 + 1)x^3 + (-3 + 9 - 4 - 1)x^2 + (2)x + 1$
    $H(x) = -3x^3 + 1x^2 + 2x + 1$.

**3. Quadratic Spline Interpolation (Clamped at $S'(0)=1$):**
*   Data: (0, 0), (1, 1), (2, 0). $h=1$. $y_0=0, y_1=1, y_2=0$. Clamped $S'(0)=1 \implies m_0=1$.
*   Using the recursive slope calculation: $m_i = m_{i-1} + \frac{2}{h}(y_i - y_{i-1})$
    *   $m_1 = m_0 + \frac{2}{1}(y_1 - y_0) = 1 + 2(1 - 0) = 1 + 2 = 3$.
    *   $m_2 = m_1 + \frac{2}{1}(y_2 - y_1) = 3 + 2(0 - 1) = 3 - 2 = 1$.
*   Slopes: $m_0 = 1, m_1 = 3, m_2 = 1$.
*   Using $S_i(x) = a_i(x-x_i)^2 + b_i(x-x_i) + c_i$:
    $c_i = y_i$. $b_i = m_i$. $a_i = \frac{m_{i+1} - m_i}{2h}$.

    *   **$S_0(x)$ on [0, 1]:**
        $x_0=0, y_0=0, m_0=1$. $x_1=1, y_1=1, m_1=3$. $h=1$.
        $c_0 = y_0 = 0$.
        $b_0 = m_0 = 1$.
        $a_0 = \frac{m_1 - m_0}{2h} = \frac{3 - 1}{2(1)} = 1$.
        $S_0(x) = 1 x^2 + 1 x + 0 = x^2 + x$.

    *   **$S_1(x)$ on [1, 2]:**
        $x_1=1, y_1=1, m_1=3$. $x_2=2, y_2=0, m_2=1$. $h=1$.
        $c_1 = y_1 = 1$.
        $b_1 = m_1 = 3$.
        $a_1 = \frac{m_2 - m_1}{2h} = \frac{1 - 3}{2(1)} = -1$.
        $S_1(x) = -1(x-1)^2 + 3(x-1) + 1 = -(x^2 - 2x + 1) + 3x - 3 + 1 = -x^2 + 2x - 1 + 3x - 2 = -x^2 + 5x - 3$.

    *   Quadratic Spline: $S(x) = \begin{cases} x^2 + x & 0 \le x \le 1 \\ -x^2 + 5x - 3 & 1 \le x \le 2 \end{cases}$

**4. Cubic Spline Interpolation (Natural):**
*   Data: (0, 0), (1, 1), (2, 0). $h=1$. $y_0=0, y_1=1, y_2=0$.
*   Natural boundary conditions: $M_0 = 0, M_2 = 0$.
*   Equation for $M_i$: $M_{i-1} + 4M_i + M_{i+1} = \frac{6}{h^2}(y_{i+1} - 2y_i + y_{i-1})$.
*   For $n=2$, we only have the $i=1$ equation:
    $M_0 + 4M_1 + M_2 = \frac{6}{1^2}(y_2 - 2y_1 + y_0)$
    $0 + 4M_1 + 0 = 6(0 - 2(1) + 0) = 6(-2) = -12$.
    $4M_1 = -12 \implies M_1 = -3$.
*   Second Derivatives: $M_0 = 0, M_1 = -3, M_2 = 0$.
*   Using $S_i(x) = \alpha_i(x-x_i)^3 + \beta_i(x-x_i)^2 + \gamma_i(x-x_i) + \delta_i$:
    $\delta_i = y_i$
    $\beta_i = \frac{M_i}{2}$
    $\alpha_i = \frac{M_{i+1}-M_i}{6h}$
    $\gamma_i = \frac{y_{i+1}-y_i}{h} - \frac{h}{6}(2M_i + M_{i+1})$

    *   **$S_0(x)$ on [0, 1]:**
        $x_0=0, y_0=0$. $x_1=1, y_1=1$. $h=1$. $M_0=0, M_1=-3$.
        $\delta_0 = 0$.
        $\beta_0 = \frac{0}{2} = 0$.
        $\alpha_0 = \frac{-3 - 0}{6(1)} = -0.5$.
        $\gamma_0 = \frac{1-0}{1} - \frac{1}{6}(2(0) + (-3)) = 1 - \frac{-3}{6} = 1 + 0.5 = 1.5$.
        $S_0(x) = -0.5 x^3 + 0 x^2 + 1.5 x + 0 = -0.5x^3 + 1.5x$.

    *   **$S_1(x)$ on [1, 2]:**
        $x_1=1, y_1=1$. $x_2=2, y_2=0$. $h=1$. $M_1=-3, M_2=0$.
        $\delta_1 = 1$.
        $\beta_1 = \frac{-3}{2} = -1.5$.
        $\alpha_1 = \frac{0 - (-3)}{6(1)} = 0.5$.
        $\gamma_1 = \frac{0-1}{1} - \frac{1}{6}(2(-3) + 0) = -1 - \frac{-6}{6} = -1 + 1 = 0$.
        $S_1(x) = 0.5(x-1)^3 - 1.5(x-1)^2 + 0(x-1) + 1 = 0.5(x-1)^3 - 1.5(x-1)^2 + 1$.

    *   Natural Cubic Spline: $S(x) = \begin{cases} -0.5x^3 + 1.5x & 0 \le x \le 1 \\ 0.5(x-1)^3 - 1.5(x-1)^2 + 1 & 1 \le x \le 2 \end{cases}$

---

### 7. Important Points to Remember

*   **Lagrangian Interpolation:** Simple, unique polynomial, but sensitive to added data points and can oscillate.
*   **Hermite Interpolation:** Matches function values and derivatives, leading to smoother fits. Requires derivative information.
*   **Spline Interpolation:** Uses piecewise polynomials for better local control and to avoid global oscillations.
    *   **Quadratic Splines:** Piecewise quadratic, continuous function and first derivative. Requires an end condition to solve.
    *   **Cubic Splines:** Piecewise cubic, continuous function, first, and second derivatives. Most common for smooth interpolation. Requires two end conditions.
*   **Equal Intervals:** Simplifies the derivation of spline coefficients and the system of equations.
*   **Natural Cubic Spline:** Boundary condition $S''(x_0)=0$ and $S''(x_n)=0$.
*   **Clamped Cubic Spline:** Boundary conditions $S'(x_0)=y'_0$ and $S'(x_n)=y'_n$.
*   The degree of the interpolating polynomial increases with the number of data points in Lagrangian/Hermite, potentially causing oscillations. Splines use low-degree polynomials on subintervals.
