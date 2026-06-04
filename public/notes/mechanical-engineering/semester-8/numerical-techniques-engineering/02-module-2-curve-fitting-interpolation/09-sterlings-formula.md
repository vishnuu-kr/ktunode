---
title: "Sterling’s formula"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 2: Curve fitting: Interpolation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646b2"
status: "completed"
scrapedAt: "2026-05-20T18:23:14.002Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - MODULE 2: CURVE FITTING: INTERPOLATION

## Topic: Stirling's Formula

---

### 1. Introduction to Interpolation

**Definition:** Interpolation is the process of finding a function that passes through a given set of data points. It is used to estimate values between known data points.

**Purpose in Engineering:**
*   Estimating physical properties at intermediate temperatures or pressures.
*   Analyzing experimental data where measurements are taken at discrete intervals.
*   Creating smooth curves from discrete data for visualization or further analysis.

**Common Interpolation Techniques:**
*   **Newton's Divided Difference Interpolation:** Builds a polynomial sequentially, adding new terms for each data point.
*   **Lagrange's Interpolation:** Uses a weighted sum of the data points, where weights are polynomials that evaluate to 1 at the desired point and 0 at others.
*   **Spline Interpolation:** Uses piecewise polynomials to avoid the oscillations often associated with high-degree single polynomials.

---

### 2. Stirling's Formula: An Overview

Stirling's formula is a central difference interpolation formula. It is particularly useful for interpolating values near the **middle** of a tabulated set of equally spaced data points.

**When to Use Stirling's Formula:**
*   When the data points are equally spaced.
*   When the point of interpolation ($x$) is closer to the central points of the data.
*   When you need a more accurate interpolation than Newton's forward or backward formulas for central points.

**Underlying Principle:** Stirling's formula averages Newton's forward and backward difference formulas. This averaging helps to reduce the error associated with interpolating near the center of the data range.

**Textbook References:**
*   **Gupta S.K., "Numerical Methods for Engineers" (1995):** This textbook typically covers central difference formulas like Stirling's, often in the context of comparing their performance against forward and backward methods.
*   **Chapra & Canale, "Numerical Methods for Engineers" (6th Edition, 2010):** Chapra's text provides a good foundation in interpolation techniques, including central difference formulas, and emphasizes their applicability in engineering problem-solving.

---

### 3. Derivation and Formula Structure

Stirling's formula is derived by averaging Newton's forward and backward difference formulas.

Let the equally spaced data points be $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$, where $x_i = x_0 + i h$.

We define a parameter $p$ (or $u$) as:
$p = \frac{x - x_0}{h}$

Where:
*   $x$ is the point at which we want to interpolate.
*   $x_0$ is the central reference point (often the middle of the data range).
*   $h$ is the constant spacing between data points.

**Newton's Forward Difference Formula:**
$y(x) = y_0 + p \Delta y_0 + \frac{p(p-1)}{2!} \Delta^2 y_0 + \frac{p(p-1)(p-2)}{3!} \Delta^3 y_0 + \dots$

**Newton's Backward Difference Formula:**
$y(x) = y_n + q \nabla y_n + \frac{q(q+1)}{2!} \nabla^2 y_n + \frac{q(q+1)(q+2)}{3!} \nabla^3 y_n + \dots$
where $q = \frac{x - x_n}{h}$. If we express this in terms of $p$ and a central reference point $x_0$, and let $x_0$ be our reference, it becomes more complex to directly average.

**Stirling's Formula (Centered around $x_0$):**

Stirling's formula is most commonly expressed by averaging the terms of Newton's forward and backward difference formulas when they are appropriately centered. A common form is:

$y(x) = y_0 + p \left( \frac{\Delta y_{-1} + \Delta y_0}{2} \right) + \frac{p^2}{2!} \Delta^2 y_{-1} + \frac{p(p^2-1^2)}{3!} \left( \frac{\Delta^3 y_{-2} + \Delta^3 y_{-1}}{2} \right) + \frac{p^2(p^2-1^2)}{4!} \Delta^4 y_{-2} + \dots$

**Key Components:**
*   **$y_0$**: The function value at the central reference point $x_0$.
*   **$p$**: The normalized difference between $x$ and $x_0$.
*   **Averaged First Differences:** $\left( \frac{\Delta y_{-1} + \Delta y_0}{2} \right)$. This uses the forward difference just before $y_0$ and the forward difference just after $y_0$.
*   **Second Difference:** $\Delta^2 y_{-1}$. This is a central second difference.
*   **Averaged Third Differences:** $\left( \frac{\Delta^3 y_{-2} + \Delta^3 y_{-1}}{2} \right)$.
*   **Fourth Difference:** $\Delta^4 y_{-2}$. This is a central fourth difference.

**Simplified Form (More commonly presented for practical use):**

Often, Stirling's formula is presented in a more compact form using central difference notation $(\delta)$:

*   $\delta y_{i+1/2} = y_{i+1} - y_i$
*   $\delta^2 y_i = \delta y_{i+1/2} - \delta y_{i-1/2} = y_{i+1} - 2y_i + y_{i-1}$
*   $\delta^3 y_{i+1/2} = \delta^2 y_{i+1} - \delta^2 y_i$
*   $\delta^4 y_i = \delta^3 y_{i+1/2} - \delta^3 y_{i-1/2}$

When centered around $x_0$, and with $p = \frac{x - x_0}{h}$:

$y(x) = y_0 + p \frac{\delta y_{1/2} + \delta y_{-1/2}}{2} + \frac{p^2}{2!} \delta^2 y_0 + \frac{p(p^2-1^2)}{3!} \frac{\delta^3 y_{1/2} + \delta^3 y_{-1/2}}{2} + \frac{p^2(p^2-1^2)}{4!} \delta^4 y_0 + \dots$

This can be further simplified in terms of $y$ values and their differences around $x_0$.

Let's consider a common, practical form often presented for implementation:

$y(x) = y_0 + p \mu \delta y_0 + \frac{p^2}{2!} \delta^2 y_0 + \frac{p(p^2-1^2)}{3!} \mu \delta^3 y_0 + \frac{p^2(p^2-1^2)}{4!} \delta^4 y_0 + \dots$

Where:
*   $\mu \delta y_0 = \frac{\delta y_{1/2} + \delta y_{-1/2}}{2} = \frac{y_1 - y_{-1}}{2}$ (Average of first differences straddling $y_0$)
*   $\delta^2 y_0 = y_1 - 2y_0 + y_{-1}$ (Central second difference)
*   $\mu \delta^3 y_0 = \frac{\delta^3 y_{1/2} + \delta^3 y_{-1/2}}{2}$ (Average of central third differences)
*   $\delta^4 y_0 = \delta^2 y_1 - 2\delta^2 y_0 + \delta^2 y_{-1}$ (Central fourth difference)

**Important Convention:** The terms in Stirling's formula alternate between even-order central differences ($\delta^2 y_0, \delta^4 y_0, \dots$) and averaged odd-order differences ($\mu \delta y_0, \mu \delta^3 y_0, \dots$).

**Key Points to Remember:**
*   Stirling's formula is best for $p$ values between -0.5 and 0.5.
*   It requires an odd number of data points ($n+1$) to have a clear central point $x_0$.
*   It uses central differences, which are more stable for interpolation near the middle of the data.

---

### 4. Constructing a Difference Table for Stirling's Formula

To use Stirling's formula, you first need to construct a difference table.

**Steps:**
1.  **List Data:** Arrange your data points $(x_i, y_i)$ in ascending order of $x_i$. Ensure $x_i$ are equally spaced.
2.  **Calculate First Differences:** Calculate $\Delta y_i = y_{i+1} - y_i$.
3.  **Calculate Second Differences:** Calculate $\Delta^2 y_i = \Delta y_{i+1} - \Delta y_i$.
4.  **Continue for Higher Differences:** Continue calculating differences until the desired order.
5.  **Identify Central Values:** Choose the central data point $(x_0, y_0)$. The row corresponding to $y_0$ is your reference row.
6.  **Extract Required Differences:** For Stirling's formula, you will need:
    *   $y_0$
    *   The average of the first differences straddling $y_0$: $\mu \delta y_0 = \frac{\Delta y_{-1} + \Delta y_0}{2}$ (using $\Delta y_0$ as the difference between $y_1$ and $y_0$, and $\Delta y_{-1}$ as the difference between $y_0$ and $y_{-1}$)
    *   The central second difference: $\delta^2 y_0 = \Delta^2 y_{-1}$ (This is the second difference in the row of $y_0$).
    *   The average of the third differences straddling $y_0$: $\mu \delta^3 y_0 = \frac{\Delta^3 y_{-2} + \Delta^3 y_{-1}}{2}$.
    *   The central fourth difference: $\delta^4 y_0 = \Delta^4 y_{-2}$.
    *   And so on...

**Example Difference Table Structure (Centered around $y_0$):**

| $x$   | $y$   | $\Delta y$ | $\Delta^2 y$ | $\Delta^3 y$ | $\Delta^4 y$ |
| :---- | :---- | :--------- | :----------- | :----------- | :----------- |
| $x_{-2}$ | $y_{-2}$ |            |              |              |              |
|       |       | $\Delta y_{-2}$ |              |              |              |
| $x_{-1}$ | $y_{-1}$ |            | $\Delta^2 y_{-2}$ |              |              |
|       |       | $\Delta y_{-1}$ |              | $\Delta^3 y_{-2}$ |              |
| **$x_0$** | **$y_0$** |            | **$\Delta^2 y_{-1}$** |              | **$\Delta^4 y_{-2}$** |
|       |       | **$\Delta y_0$** |              | **$\Delta^3 y_{-1}$** |              |
| $x_1$   | $y_1$   |            | $\Delta^2 y_0$   |              |              |
|       |       | $\Delta y_1$ |              | $\Delta^3 y_0$   |              |
| $x_2$   | $y_2$   |            | $\Delta^2 y_1$   |              |              |
|       |       | $\Delta y_2$ |              |              |              |
| $x_3$   | $y_3$   |            |              |              |              |

**Important:** For Stirling's formula in the form $y(x) = y_0 + p \mu \delta y_0 + \frac{p^2}{2!} \delta^2 y_0 + \dots$:
*   $\mu \delta y_0$ uses $\Delta y_{-1}$ and $\Delta y_0$.
*   $\delta^2 y_0$ uses $\Delta^2 y_{-1}$.
*   $\mu \delta^3 y_0$ uses $\Delta^3 y_{-2}$ and $\Delta^3 y_{-1}$.
*   $\delta^4 y_0$ uses $\Delta^4 y_{-2}$.

This means you need data points symmetrically around $x_0$. For example, to use up to the second difference, you need $x_{-1}, x_0, x_1$. To use up to the fourth difference, you need $x_{-2}, x_{-1}, x_0, x_1, x_2$.

---

### 5. Applying Stirling's Formula: Worked Example

**Problem:**
Given the following data, estimate the value of $y$ when $x = 2.1$ using Stirling's formula.

| $x$ | $y$    |
| :-- | :----- |
| 1   | 0.539 |
| 2   | 0.852 |
| 3   | 1.109 |
| 4   | 1.313 |
| 5   | 1.477 |

**Solution:**

1.  **Check Spacing:** The $x$ values are equally spaced with $h = 1$.
2.  **Identify Central Point:** We want to interpolate at $x = 2.1$. The closest central data point is $x_0 = 2$.
3.  **Calculate $p$:**
    $p = \frac{x - x_0}{h} = \frac{2.1 - 2}{1} = 0.1$
    Since $p=0.1$, which is between -0.5 and 0.5, Stirling's formula is appropriate.

4.  **Construct Difference Table (Centered around $x_0=2$):**

    | $x$ | $y$   | $\Delta y$ | $\Delta^2 y$ | $\Delta^3 y$ | $\Delta^4 y$ |
    | :-- | :---- | :--------- | :----------- | :----------- | :----------- |
    | 1   | 0.539 |            |              |              |              |
    |     |       | 0.313      |              |              |              |
    | **2** | **0.852** |            | **-0.060**   |              |              |
    |     |       | **0.257**  |              | **0.004**    |              |
    | 3   | 1.109 |            | **-0.056**   |              | **-0.002**   |
    |     |       | 0.203      |              | **0.002**    |              |
    | 4   | 1.313 |            | -0.054       |              |              |
    |     |       | 0.164      |              |              |              |
    | 5   | 1.477 |            |              |              |              |

    **Extracting values needed for the table structure:**
    *   $y_0 = 0.852$ (at $x_0=2$)
    *   $\Delta y_{-1} = 0.313$ (difference between $y_0$ and $y_{-1}$)
    *   $\Delta y_0 = 0.257$ (difference between $y_1$ and $y_0$)
    *   $\Delta^2 y_{-1} = -0.060$ (second difference in the row of $y_{-1}$)
    *   $\Delta^2 y_0 = -0.056$ (second difference in the row of $y_0$)
    *   $\Delta^3 y_{-2} = 0.004$ (third difference in the row of $y_{-2}$)
    *   $\Delta^3 y_{-1} = 0.002$ (third difference in the row of $y_{-1}$)
    *   $\Delta^4 y_{-2} = -0.002$ (fourth difference in the row of $y_{-2}$)

5.  **Calculate Central Differences:**
    *   $\mu \delta y_0 = \frac{\Delta y_{-1} + \Delta y_0}{2} = \frac{0.313 + 0.257}{2} = \frac{0.570}{2} = 0.285$
    *   $\delta^2 y_0 = \Delta^2 y_{-1} = -0.060$
    *   $\mu \delta^3 y_0 = \frac{\Delta^3 y_{-2} + \Delta^3 y_{-1}}{2} = \frac{0.004 + 0.002}{2} = \frac{0.006}{2} = 0.003$
    *   $\delta^4 y_0 = \Delta^4 y_{-2} = -0.002$

6.  **Apply Stirling's Formula:**
    Using the formula up to the fourth difference:
    $y(x) = y_0 + p \mu \delta y_0 + \frac{p^2}{2!} \delta^2 y_0 + \frac{p(p^2-1^2)}{3!} \mu \delta^3 y_0 + \frac{p^2(p^2-1^2)}{4!} \delta^4 y_0$

    Substitute the values:
    $y(2.1) = 0.852 + (0.1)(0.285) + \frac{(0.1)^2}{2}(-0.060) + \frac{(0.1)((0.1)^2-1^2)}{6}(0.003) + \frac{(0.1)^2((0.1)^2-1^2)}{24}(-0.002)$

    Calculate each term:
    *   Term 1: $0.852$
    *   Term 2: $(0.1)(0.285) = 0.0285$
    *   Term 3: $\frac{0.01}{2}(-0.060) = 0.005(-0.060) = -0.0003$
    *   Term 4: $\frac{0.1(0.01-1)}{6}(0.003) = \frac{0.1(-0.99)}{6}(0.003) = \frac{-0.099}{6}(0.003) = -0.0165(0.003) = -0.0000495$
    *   Term 5: $\frac{0.01(0.01-1)}{24}(-0.002) = \frac{0.01(-0.99)}{24}(-0.002) = \frac{-0.0099}{24}(-0.002) = -0.0004125(-0.002) = 0.000000825$

    Summing the terms:
    $y(2.1) \approx 0.852 + 0.0285 - 0.0003 - 0.0000495 + 0.000000825$
    $y(2.1) \approx 0.880150825$

    Rounding to a suitable number of decimal places (e.g., 3 or 4, consistent with input data):
    $y(2.1) \approx 0.8802$

**Verification (Optional but good practice):**
If the data represents $e^x$, then $y(2.1) = e^{2.1} \approx 8.166$. Our interpolated value is $0.8802$. This is likely a demonstration of a generic function and not $e^x$. The value looks plausible given the input data. Let's check the trend: $y(2)=0.852$, $y(3)=1.109$. $x=2.1$ is close to $x=2$, so the interpolated value should be slightly higher than $0.852$. $0.8802$ fits this expectation.

---

### 6. Advantages and Disadvantages of Stirling's Formula

**Advantages:**
*   **Accuracy near the center:** Provides better accuracy than Newton's forward or backward formulas for interpolation points close to the middle of the tabulated data.
*   **Symmetry:** Uses terms symmetrically around the central point, leading to a more balanced approximation.
*   **Stability:** Central difference formulas are generally more stable than forward/backward formulas for interpolation in the middle of a range, reducing the risk of oscillations.

**Disadvantages:**
*   **Requires Equally Spaced Data:** Like Newton's formulas, it's only applicable when the $x$ values are uniformly spaced.
*   **Less Effective at Extremes:** Becomes less accurate as the interpolation point ($x$) moves away from the central point ($x_0$) towards the ends of the data range. In such cases, Newton's forward (for the beginning) or backward (for the end) formulas are preferred.
*   **Requires a Central Point:** Needs an odd number of data points to define a clear central point. If an even number of points are available, a compromise or a different formula (like Bessel's) might be needed.
*   **Computational Complexity:** Can involve more terms and calculations than simpler linear or quadratic interpolation methods.

**Reference:**
*   **Gupta S.K., "Numerical Methods for Engineers" (1995):** Discusses the trade-offs and suitable regions of application for various interpolation methods, including Stirling's.

---

### 7. Relationship to Course Outcomes

*   **CO1: Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3)**
    *   While Stirling's formula is not directly for solving equations, the underlying process of building and evaluating polynomials is a fundamental numerical technique. Understanding interpolation helps in approximating solutions that might arise from solving equations implicitly.
*   **CO2: Implement numerical schemes to fit data (Knowledge Level: K3)**
    *   **Directly applicable.** Stirling's formula is a prime example of a numerical scheme used to fit data and estimate values between known points. The ability to construct difference tables and apply the formula demonstrates this outcome.
*   **CO3: Solve differentiation and integration numerically (Knowledge Level: K3)**
    *   **Indirectly applicable.** The differences calculated for interpolation are the basis for numerical differentiation and integration formulas (e.g., Newton-Cotes formulas can be derived from finite differences). Understanding how to manipulate and utilize these differences for interpolation provides a foundation for these related tasks.
*   **CO4: Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3)**
    *   **Indirectly applicable.** Many numerical methods for ODEs and PDEs involve discretizing the problem and then interpolating or extrapolating values at different grid points. Familiarity with interpolation techniques like Stirling's contributes to the understanding of these more advanced methods.

---

### 8. Practice Questions and Exercises

**Question 1:**
Given the following data points, estimate the value of $y$ at $x=3.5$ using Stirling's formula.

| $x$ | $y$    |
| :-- | :----- |
| 1   | 2.44   |
| 2   | 5.99   |
| 3   | 10.02  |
| 4   | 15.11  |
| 5   | 20.50  |

**Answer:**
1.  **Central Point:** $x_0 = 3$
2.  **Spacing:** $h = 1$
3.  **$p$:** $p = \frac{3.5 - 3}{1} = 0.5$
4.  **Difference Table:**

    | $x$ | $y$    | $\Delta y$ | $\Delta^2 y$ | $\Delta^3 y$ | $\Delta^4 y$ |
    | :-- | :----- | :--------- | :----------- | :----------- | :----------- |
    | 1   | 2.44   |            |              |              |              |
    |     |        | 3.55       |              |              |              |
    | **2** | **5.99** |            | **0.48**     |              |              |
    |     |        | **4.03**   |              | **-0.05**    |              |
    | **3** | **10.02**|            | **0.43**     |              | **0.03**     |
    |     |        | **5.09**   |              | **-0.02**    |              |
    | 4   | 15.11  |            | 0.41         |              |              |
    |     |        | 5.39       |              |              |              |
    | 5   | 20.50  |            |              |              |              |

    *   $y_0 = 10.02$
    *   $\Delta y_{-1} = 4.03$, $\Delta y_0 = 5.09$
    *   $\Delta^2 y_{-1} = 0.48$, $\Delta^2 y_0 = 0.43$
    *   $\Delta^3 y_{-2} = -0.05$, $\Delta^3 y_{-1} = -0.02$
    *   $\Delta^4 y_{-2} = 0.03$

5.  **Central Differences:**
    *   $\mu \delta y_0 = \frac{4.03 + 5.09}{2} = 4.56$
    *   $\delta^2 y_0 = \Delta^2 y_{-1} = 0.48$
    *   $\mu \delta^3 y_0 = \frac{-0.05 + (-0.02)}{2} = -0.035$
    *   $\delta^4 y_0 = \Delta^4 y_{-2} = 0.03$

6.  **Apply Stirling's Formula:**
    $y(3.5) = y_0 + p \mu \delta y_0 + \frac{p^2}{2!} \delta^2 y_0 + \frac{p(p^2-1^2)}{3!} \mu \delta^3 y_0 + \frac{p^2(p^2-1^2)}{4!} \delta^4 y_0$
    $y(3.5) = 10.02 + (0.5)(4.56) + \frac{(0.5)^2}{2}(0.48) + \frac{(0.5)((0.5)^2-1^2)}{6}(-0.035) + \frac{(0.5)^2((0.5)^2-1^2)}{24}(0.03)$
    $y(3.5) = 10.02 + 2.28 + \frac{0.25}{2}(0.48) + \frac{0.5(0.25-1)}{6}(-0.035) + \frac{0.25(0.25-1)}{24}(0.03)$
    $y(3.5) = 10.02 + 2.28 + 0.06 - \frac{0.5(0.75)}{6}(0.035) + \frac{0.25(-0.75)}{24}(0.03)$
    $y(3.5) = 12.36 - \frac{0.375}{6}(0.035) + \frac{-0.1875}{24}(0.03)$
    $y(3.5) = 12.36 - (0.0625)(0.035) - (0.0078125)(0.03)$
    $y(3.5) = 12.36 - 0.0021875 - 0.000234375$
    $y(3.5) = 12.357578125$

    Rounded: $y(3.5) \approx 12.358$

**Question 2:**
Explain why Stirling's formula is preferred for interpolation near the center of a data set compared to Newton's forward difference formula.

**Answer:**
Stirling's formula averages the forward and backward difference formulas. When interpolating near the center, both forward and backward differences contribute significantly to the approximation. By averaging these, Stirling's formula balances the influence of data points from both the "forward" and "backward" directions relative to the central point. This averaging tends to cancel out some of the errors that can arise from using only forward or only backward differences, especially those related to the truncation error of the polynomial approximation. Newton's forward difference formula, for example, relies heavily on differences originating from the starting point of the data. As you move away from this start point towards the center, the later terms (with higher differences of $p$) can become large and unstable, leading to reduced accuracy. Stirling's formula, by incorporating central differences and averaging, provides a more stable and accurate approximation in this intermediate region.

---

### 9. Important Points to Remember

*   **Central Difference Formula:** Stirling's is a central difference formula.
*   **Equally Spaced Data:** Crucial requirement for its application.
*   **Optimal Region:** Best suited for interpolating points $x$ where $\left| \frac{x-x_0}{h} \right| \leq 0.5$.
*   **Averaging:** Key feature is averaging odd-order differences ($\mu\delta y_0$, $\mu\delta^3 y_0$, etc.) to improve accuracy at the center.
*   **Symmetric Terms:** Formula terms are symmetric around the central point $x_0$.
*   **Difference Table:** Careful construction of the difference table is essential, correctly identifying the required central differences and averaged differences.
*   **Choice of $x_0$:** Select $x_0$ to be the data point closest to the point of interpolation $x$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
