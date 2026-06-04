---
title: "backward and divided difference method"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 2: Curve fitting: Interpolation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646b1"
status: "completed"
scrapedAt: "2026-05-20T18:23:13.304Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 2: Curve Fitting: Interpolation

### Topic: Backward and Divided Difference Methods

---

### **1. Introduction to Interpolation**

**Objective:** To approximate a function between known data points.

**Key Concept:** Interpolation is a method of constructing new data points within the range of a discrete set of known data points. It assumes that the underlying function can be represented by a polynomial passing through these points.

**Relevance to Course Outcomes:**
*   **CO1 (Apply numerical methods to solve linear and nonlinear equations):** Interpolation methods often involve solving systems of linear equations to determine polynomial coefficients.
*   **CO2 (Implement numerical schemes to fit data):** This topic directly addresses fitting data using interpolation polynomials.

**Textbook References:**
*   Chapra & Canale, 6th Ed., Chapter 17 (Interpolation and Regression) - Provides a strong foundation in interpolation concepts.
*   Balagurusamy, 2017 Ed., Chapter 5 (Interpolation and Extrapolation) - Offers clear explanations and examples of various interpolation techniques.

---

### **2. Newton's Divided Difference Interpolation**

**Key Concept:** Newton's Divided Difference interpolation is a powerful method that allows for the addition of new data points without recomputing all previous coefficients. It constructs a polynomial in a form that is more computationally efficient for incremental data.

**Formula:**
The interpolating polynomial is given by:
$P(x) = f(x_0) + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \dots + f[x_0, x_1, \dots, x_n](x - x_0)(x - x_1)\dots(x - x_{n-1})$

Where:
*   $f[x_0, x_1, \dots, x_k]$ are the divided differences.

**Divided Differences Calculation:**

*   **Zeroth Divided Difference:** $f[x_i] = f(x_i)$ (The function values themselves)

*   **First Divided Difference:**
    $f[x_i, x_{i+1}] = \frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i}$

*   **Second Divided Difference:**
    $f[x_i, x_{i+1}, x_{i+2}] = \frac{f[x_{i+1}, x_{i+2}] - f[x_i, x_{i+1}]}{x_{i+2} - x_i}$

*   **k-th Divided Difference:**
    $f[x_0, x_1, \dots, x_k] = \frac{f[x_1, \dots, x_k] - f[x_0, \dots, x_{k-1}]}{x_k - x_0}$

**Newton's Divided Difference Table:**
A table is typically used to organize the calculation of divided differences.

| $x_i$ | $f(x_i)$ | 1st Divided Diff. | 2nd Divided Diff. | 3rd Divided Diff. |
| :---- | :------- | :---------------- | :---------------- | :---------------- |
| $x_0$ | $f(x_0)$ | $f[x_0, x_1]$     | $f[x_0, x_1, x_2]$| $f[x_0, x_1, x_2, x_3]$ |
| $x_1$ | $f(x_1)$ | $f[x_1, x_2]$     | $f[x_1, x_2, x_3]$|                   |
| $x_2$ | $f(x_2)$ | $f[x_2, x_3]$     |                   |                   |
| $x_3$ | $f(x_3)$ |                   |                   |                   |

**Example (Chapra & Canale):**
Given the data points: (0, 1), (1, 2), (2, 7), (3, 22)
Construct a Newton's Divided Difference polynomial.

**Table Construction:**

| $x_i$ | $f(x_i)$ | 1st Divided Diff. | 2nd Divided Diff. | 3rd Divided Diff. |
| :---- | :------- | :---------------- | :---------------- | :---------------- |
| 0     | 1        |                   |                   |                   |
|       |          | $\frac{2-1}{1-0} = 1$ |                   |                   |
| 1     | 2        |                   | $\frac{5-1}{2-0} = 2$ |                   |
|       |          | $\frac{7-2}{2-1} = 5$ |                   | $\frac{6-2}{3-0} = \frac{4}{3}$ |
| 2     | 7        |                   | $\frac{15-5}{3-1} = 5$ |                   |
|       |          | $\frac{22-7}{3-2} = 15$ |                   |                   |
| 3     | 22       |                   |                   |                   |

**Interpolating Polynomial:**
$P(x) = f(x_0) + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + f[x_0, x_1, x_2, x_3](x - x_0)(x - x_1)(x - x_2)$
$P(x) = 1 + 1(x - 0) + 2(x - 0)(x - 1) + \frac{4}{3}(x - 0)(x - 1)(x - 2)$
$P(x) = 1 + x + 2x(x - 1) + \frac{4}{3}x(x - 1)(x - 2)$

**Usefulness:**
*   Allows for easy addition of new data points.
*   The coefficients represent the rate of change of the function at successive intervals.

**Reference Books:**
*   Jain, Iyengar & Jain, Chapter 3 (Interpolation) - Provides rigorous mathematical treatment.
*   Gerald & Wheatly, 6th Ed., Chapter 3 (Interpolation) - Offers a comprehensive overview.

---

### **3. Backward Difference Formula (Newton's Backward Interpolation Formula)**

**Objective:** To interpolate for values near the end of a dataset, especially when the step size is uniform.

**Key Concept:** The backward difference formula uses differences calculated from the end of the data points. It's particularly useful when you want to estimate a value for $x$ that is slightly less than the last data point ($x_n$).

**Prerequisites:**
*   **Uniform Step Size ($h$):** The difference between consecutive $x$ values must be constant ($x_{i+1} - x_i = h$).
*   **Backward Differences ($\nabla$):**
    *   $\nabla f(x_i) = f(x_i) - f(x_{i-1})$
    *   $\nabla^2 f(x_i) = \nabla f(x_i) - \nabla f(x_{i-1})$
    *   And so on.

**Formula:**
The Newton's Backward Interpolation Formula is given by:
$P(x) = f(x_n) + s\nabla f(x_n) + \frac{s(s+1)}{2!}\nabla^2 f(x_n) + \frac{s(s+1)(s+2)}{3!}\nabla^3 f(x_n) + \dots + \frac{s(s+1)\dots(s+n-1)}{n!}\nabla^n f(x_n)$

Where:
*   $x$ is the point where we want to interpolate.
*   $x_n$ is the last data point.
*   $h = x_i - x_{i-1}$ (uniform step size).
*   $s = \frac{x - x_n}{h}$
*   $\nabla^k f(x_n)$ are the backward differences evaluated at $x_n$.

**Newton's Backward Difference Table:**

| $x_i$ | $f(x_i)$ | $\nabla f(x_i)$ | $\nabla^2 f(x_i)$ | $\nabla^3 f(x_i)$ |
| :---- | :------- | :-------------- | :---------------- | :---------------- |
| $x_0$ | $f(x_0)$ |                 |                   |                   |
|       |          | $\nabla f(x_1)$ |                   |                   |
| $x_1$ | $f(x_1)$ |                 | $\nabla^2 f(x_2)$ |                   |
|       |          | $\nabla f(x_2)$ |                   | $\nabla^3 f(x_3)$ |
| $x_2$ | $f(x_2)$ |                 | $\nabla^2 f(x_3)$ |                   |
|       |          | $\nabla f(x_3)$ |                   |                   |
| $x_3$ | $f(x_3)$ |                 |                   |                   |

**Important:** For the backward formula, we use the differences along the *last* diagonal of the table. The indices are crucial here. We evaluate the differences at $x_n$.

**Example:**
Consider the data: (0, 1), (1, 3), (2, 7), (3, 13)
We want to estimate $f(2.5)$.

**Data:**
$x_0=0, f(x_0)=1$
$x_1=1, f(x_1)=3$
$x_2=2, f(x_2)=7$
$x_3=3, f(x_3)=13$

Here, $n=3$, $x_n = x_3 = 3$.
Step size $h = 1$.
We want to interpolate at $x = 2.5$.

Calculate $s$:
$s = \frac{x - x_n}{h} = \frac{2.5 - 3}{1} = -0.5$

**Backward Difference Table:**

| $x_i$ | $f(x_i)$ | $\nabla f(x_i)$ | $\nabla^2 f(x_i)$ | $\nabla^3 f(x_i)$ |
| :---- | :------- | :-------------- | :---------------- | :---------------- |
| 0     | 1        |                 |                   |                   |
|       |          | $3-1=2$         |                   |                   |
| 1     | 3        |                 | $4-2=2$           |                   |
|       |          | $7-3=4$         |                   | $2-2=0$           |
| 2     | 7        |                 | $6-4=2$           |                   |
|       |          | $13-7=6$        |                   |                   |
| 3     | 13       |                 |                   |                   |

Now, extract the differences at $x_n = x_3 = 3$:
$\nabla f(x_3) = 6$
$\nabla^2 f(x_3) = 2$
$\nabla^3 f(x_3) = 0$

Substitute into the formula:
$P(2.5) = f(x_3) + s\nabla f(x_3) + \frac{s(s+1)}{2!}\nabla^2 f(x_3) + \frac{s(s+1)(s+2)}{3!}\nabla^3 f(x_3)$
$P(2.5) = 13 + (-0.5)(6) + \frac{(-0.5)(-0.5+1)}{2}(2) + \frac{(-0.5)(-0.5+1)(-0.5+2)}{6}(0)$
$P(2.5) = 13 - 3 + \frac{(-0.5)(0.5)}{2}(2) + 0$
$P(2.5) = 10 + (-0.25)(2)$
$P(2.5) = 10 - 0.5 = 9.5$

**Comparison with Actual Function (if known):**
Let's assume the actual function is $f(x) = x^2 + x + 1$.
$f(0) = 1$
$f(1) = 1+1+1 = 3$
$f(2) = 4+2+1 = 7$
$f(3) = 9+3+1 = 13$
$f(2.5) = (2.5)^2 + 2.5 + 1 = 6.25 + 2.5 + 1 = 9.75$
The interpolated value $9.5$ is close to the actual value $9.75$.

**Important Note:** The backward difference formula is most accurate for interpolating values near the end of the dataset. Using it for values near the beginning might lead to less accurate results compared to the forward difference formula.

**Textbook References:**
*   Gupta S.K., 1995 Ed., Chapter 4 (Interpolation) - Explains backward differences and formulas.
*   Balagurusamy, 2017 Ed., Chapter 5 (Interpolation and Extrapolation) - Includes Newton's backward formula with examples.

---

### **4. Backward vs. Divided Differences: A Comparative View**

| Feature          | Newton's Divided Differences                         | Newton's Backward Differences                  |
| :--------------- | :--------------------------------------------------- | :--------------------------------------------- |
| **Data Spacing** | Can handle non-uniform spacing.                      | Requires uniform spacing.                      |
| **Structure**    | Polynomial in the form $\sum c_i \prod (x-x_j)$.    | Polynomial in terms of differences and $s$.    |
| **Efficiency**   | Efficient for adding new data points.              | Efficient for interpolating near the end.      |
| **Table Use**    | Uses a divided difference table.                     | Uses a backward difference table.              |
| **Coefficients** | Divided differences $f[x_0, \dots, x_k]$.             | Backward differences $\nabla^k f(x_n)$.       |
| **Accuracy**     | Generally good for interpolating anywhere in the data. | Best for interpolating near the highest $x$ value. |

**When to Use Which:**

*   **Newton's Divided Differences:** Use when data points are not equally spaced, or when you anticipate adding new data points frequently and want to avoid recomputing the entire polynomial.
*   **Newton's Backward Differences:** Use when data points are equally spaced, and you need to interpolate values close to the last data point.

**Relevance to Course Outcomes:**
*   **CO1, CO2:** Both methods are direct applications of numerical schemes to fit data and solve underlying equations.

**Reference Books:**
*   Conte & De Boor, Chapter 1 (Introduction to Interpolation) - Provides a theoretical basis for polynomial interpolation.
*   Krishnamurthy & Sen, Chapter 3 (Interpolation) - Discusses the derivation and application of these formulas.

---

### **5. Practice Questions and Exercises**

**Question 1 (Divided Differences):**
Given the following data points:
(1, 2), (3, 4), (4, 5), (6, 12)

a) Construct a Newton's Divided Difference table.
b) Determine the interpolating polynomial.
c) Estimate the value of $f(3.5)$.

**Solution 1:**

a) **Divided Difference Table:**

| $x_i$ | $f(x_i)$ | 1st Divided Diff. | 2nd Divided Diff. | 3rd Divided Diff. |
| :---- | :------- | :---------------- | :---------------- | :---------------- |
| 1     | 2        |                   |                   |                   |
|       |          | $\frac{4-2}{3-1} = 1$ |                   |                   |
| 3     | 4        |                   | $\frac{1-1}{4-1} = 0$ |                   |
|       |          | $\frac{5-4}{4-3} = 1$ |                   | $\frac{2-0}{6-1} = \frac{2}{5}$ |
| 4     | 5        |                   | $\frac{7-1}{6-3} = 2$ |                   |
|       |          | $\frac{12-5}{6-4} = 3.5$ |                   |                   |
| 6     | 12       |                   |                   |                   |

b) **Interpolating Polynomial:**
$P(x) = f(x_0) + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + f[x_0, x_1, x_2, x_3](x - x_0)(x - x_1)(x - x_2)$
$P(x) = 2 + 1(x - 1) + 0(x - 1)(x - 3) + \frac{2}{5}(x - 1)(x - 3)(x - 4)$
$P(x) = 2 + (x - 1) + \frac{2}{5}(x - 1)(x - 3)(x - 4)$

c) **Estimate $f(3.5)$:**
$P(3.5) = 2 + (3.5 - 1) + \frac{2}{5}(3.5 - 1)(3.5 - 3)(3.5 - 4)$
$P(3.5) = 2 + 2.5 + \frac{2}{5}(2.5)(0.5)(-0.5)$
$P(3.5) = 4.5 + \frac{2}{5}(-0.625)$
$P(3.5) = 4.5 - 0.25$
$P(3.5) = 4.25$

---

**Question 2 (Backward Differences):**
Given the following equally spaced data:
$x$: 0, 2, 4, 6
$f(x)$: 5, 9, 17, 37

a) Construct a backward difference table.
b) Estimate $f(5)$ using Newton's backward interpolation formula.

**Solution 2:**

a) **Backward Difference Table:**

| $x_i$ | $f(x_i)$ | $\nabla f(x_i)$ | $\nabla^2 f(x_i)$ | $\nabla^3 f(x_i)$ |
| :---- | :------- | :-------------- | :---------------- | :---------------- |
| 0     | 5        |                 |                   |                   |
|       |          | $9-5=4$         |                   |                   |
| 2     | 9        |                 | $8-4=4$           |                   |
|       |          | $17-9=8$        |                   | $6-4=2$           |
| 4     | 17       |                 | $20-8=12$         |                   |
|       |          | $37-17=20$      |                   |                   |
| 6     | 37       |                 |                   |                   |

Here, $n=3$, $x_n = x_3 = 6$.
Step size $h = 2$.
We want to interpolate at $x = 5$.

Calculate $s$:
$s = \frac{x - x_n}{h} = \frac{5 - 6}{2} = \frac{-1}{2} = -0.5$

Differences at $x_n = x_3 = 6$:
$\nabla f(x_3) = 20$
$\nabla^2 f(x_3) = 12$
$\nabla^3 f(x_3) = 2$

b) **Estimate $f(5)$:**
$P(x) = f(x_n) + s\nabla f(x_n) + \frac{s(s+1)}{2!}\nabla^2 f(x_n) + \frac{s(s+1)(s+2)}{3!}\nabla^3 f(x_n)$
$P(5) = 37 + (-0.5)(20) + \frac{(-0.5)(-0.5+1)}{2}(12) + \frac{(-0.5)(-0.5+1)(-0.5+2)}{6}(2)$
$P(5) = 37 - 10 + \frac{(-0.5)(0.5)}{2}(12) + \frac{(-0.5)(0.5)(1.5)}{6}(2)$
$P(5) = 27 + (-0.125)(12) + \frac{-0.375}{3}$
$P(5) = 27 - 1.5 - 0.125$
$P(5) = 25.375$

---

### **6. Important Points to Remember**

*   **Interpolation vs. Extrapolation:** Interpolation occurs *within* the range of data points, while extrapolation occurs *outside* this range. These methods are primarily for interpolation.
*   **Degree of Polynomial:** For $n+1$ data points, the interpolating polynomial will be of degree at most $n$.
*   **Newton's Divided Differences:** Superior for non-uniform data spacing and when the dataset might grow. The coefficients $f[x_0, \dots, x_k]$ are independent of the order of the $x_i$ values chosen for the calculation.
*   **Newton's Backward Differences:** Requires uniform spacing. Most accurate when interpolating near the last data point. The value of $s$ will be negative for interpolation to the left of $x_n$.
*   **Accuracy:** The accuracy of interpolation depends on the smoothness of the underlying function and the distribution of data points. Higher-degree polynomials can sometimes lead to oscillations (Runge's phenomenon).

---

### **7. Alignment with Course Outcomes**

*   **CO1 (Apply numerical methods to solve linear and nonlinear equations):**
    *   Newton's Divided Difference polynomial can be expanded into a standard polynomial form $a_0 + a_1x + a_2x^2 + \dots$, which might require solving a system of linear equations if not constructed iteratively.
    *   The calculation of divided differences itself involves basic arithmetic operations.
    *   **Knowledge Level (K3):** Apply. Students can apply the formulas to calculate coefficients and evaluate the polynomial.

*   **CO2 (Implement numerical schemes to fit data):**
    *   Both methods are prime examples of numerical schemes used for data fitting through polynomial interpolation.
    *   Students can implement these schemes to approximate function values between known data points.
    *   **Knowledge Level (K3):** Implement. Students can implement the algorithms for constructing the tables and evaluating the polynomials.

*   **CO3 (Solve differentiation and integration numerically):** While not the primary focus, interpolating polynomials can be differentiated and integrated analytically to approximate the derivative and integral of the underlying function. This connects to CO3.
    *   **Knowledge Level (K3):** Apply. Students can apply the derived interpolating polynomial to approximate derivatives and integrals.

*   **CO4 (Execute numerical procedures to solve ordinary and partial differential equations):** Interpolation can be a building block in numerical methods for ODEs/PDEs, for instance, when interpolating values to apply finite difference schemes.
    *   **Knowledge Level (K3):** Execute. Students can execute interpolation procedures as part of a larger numerical scheme.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
