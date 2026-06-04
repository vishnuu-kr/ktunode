---
title: "Simpson’s three-eight rule"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 2: Curve fitting: Interpolation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646b5"
status: "completed"
scrapedAt: "2026-05-20T18:23:16.106Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 2: Curve Fitting: Interpolation

### Topic: Simpson's Three-Eighths Rule

---

**Introduction:**

Simpson's Three-Eighths Rule is a composite numerical integration technique used to approximate the definite integral of a function. It is a more accurate method than the trapezoidal rule or Simpson's One-Third Rule when the function being integrated can be well-represented by a cubic polynomial. This rule is particularly useful when dealing with applications in engineering where precise integration is crucial for analyzing physical phenomena.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the theoretical basis of Simpson's Three-Eighths Rule.
*   Derive the formula for Simpson's Three-Eighths Rule.
*   Apply Simpson's Three-Eighths Rule to approximate definite integrals.
*   Determine the error associated with Simpson's Three-Eighths Rule.
*   Compare the accuracy of Simpson's Three-Eighths Rule with other numerical integration methods.
*   Implement Simpson's Three-Eighths Rule in practical engineering problems.

---

### Key Concepts and Definitions:

*   **Numerical Integration:** The process of approximating the value of a definite integral using numerical methods. Also known as quadrature.
*   **Definite Integral:** An integral that evaluates between two limits, representing the area under the curve of a function between those limits.
*   **Interpolation:** The process of estimating the value of a function at an intermediate point, given a set of known points. Simpson's rules are derived using polynomial interpolation.
*   **Polynomial Interpolation:** Constructing a polynomial that passes through a given set of data points.
*   **Newton's Divided Difference Polynomial:** A form of interpolating polynomial that is particularly useful for unequally spaced data points.
*   **Lagrange Interpolating Polynomial:** Another form of interpolating polynomial, often used for its direct formulaic representation.
*   **Order of Accuracy:** A measure of how quickly the error in a numerical method decreases as the step size is reduced. Simpson's Three-Eighths Rule has a higher order of accuracy than the trapezoidal rule.
*   **Composite Rule:** A numerical integration rule applied over multiple subintervals to improve accuracy.

---

### Theoretical Basis:

Simpson's Three-Eighths Rule is derived by fitting a cubic polynomial through four equally spaced points of the function to be integrated. The integral of this cubic polynomial is then used as an approximation of the integral of the original function over that interval.

Consider a function $f(x)$ that we want to integrate over the interval $[a, b]$. We divide this interval into $n$ equal subintervals, where $n$ must be a multiple of 3. The width of each subinterval is $h = \frac{b-a}{n}$. The points are $x_0, x_1, x_2, \dots, x_n$, where $x_i = a + i h$.

We can group these subintervals into segments of three, i.e., $x_0, x_1, x_2, x_3$; $x_3, x_4, x_5, x_6$; and so on.

#### Derivation of the Basic Simpson's Three-Eighths Rule (for 3 intervals):

Consider the interval $[x_0, x_3]$. We fit a cubic polynomial, $P_3(x)$, through the four points $(x_0, f(x_0))$, $(x_1, f(x_1))$, $(x_2, f(x_2))$, and $(x_3, f(x_3))$.

Using Newton's Divided Difference Polynomial:
$P_3(x) = f(x_0) + f[x_0, x_1](x-x_0) + f[x_0, x_1, x_2](x-x_0)(x-x_1) + f[x_0, x_1, x_2, x_3](x-x_0)(x-x_1)(x-x_2)$

Alternatively, we can use a change of variable to simplify the integration. Let $x = x_0 + uh$. Then $dx = h \, du$. When $x=x_0$, $u=0$. When $x=x_3$, $u=3$.
The integral becomes:
$\int_{x_0}^{x_3} f(x) \, dx \approx \int_{0}^{3} P_3(x_0 + uh) \, h \, du$

By performing the integration of the cubic polynomial (which is a standard exercise in calculus, often found in textbooks like Chapra & Canale, and Balagurusamy), we arrive at the formula for the integral over one segment of three intervals:

$\int_{x_0}^{x_3} f(x) \, dx \approx \frac{3h}{8} [f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)]$

This is the basic Simpson's Three-Eighths Rule for a single segment of three subintervals.

#### Composite Simpson's Three-Eighths Rule:

To apply this rule to a larger interval $[a, b]$, we divide the interval into $n$ equal subintervals, where $n$ must be a multiple of 3. Let $n = 3m$.

The integral is then approximated by summing the integrals over each segment of three subintervals:

$\int_{a}^{b} f(x) \, dx \approx \sum_{k=0}^{m-1} \int_{x_{3k}}^{x_{3(k+1)}} f(x) \, dx$

Applying the basic rule to each segment:

$\int_{a}^{b} f(x) \, dx \approx \sum_{k=0}^{m-1} \frac{3h}{8} [f(x_{3k}) + 3f(x_{3k+1}) + 3f(x_{3k+2}) + f(x_{3(k+1)})]$

This can be expanded as:

$\int_{a}^{b} f(x) \, dx \approx \frac{3h}{8} [f(x_0) + 3f(x_1) + 3f(x_2) + 2f(x_3) + 3f(x_4) + 3f(x_5) + 2f(x_6) + \dots + 2f(x_{n-3}) + 3f(x_{n-2}) + 3f(x_{n-1}) + f(x_n)]$

Notice the pattern of coefficients: 1, 3, 3, 2, 3, 3, 2, ..., 2, 3, 3, 1. The coefficients at the interior points that are multiples of 3 (i.e., $x_3, x_6, \dots, x_{n-3}$) are multiplied by 2, while other interior points are multiplied by 3. The endpoints have coefficients of 1.

**Important Note:** The number of subintervals, $n$, *must* be a multiple of 3 for Simpson's Three-Eighths Rule to be applicable.

---

### Application and Examples:

**Example 1: Single Segment**

Approximate $\int_{0}^{3} x^3 \, dx$ using Simpson's Three-Eighths Rule.

Here, $a=0$, $b=3$. We can use a single segment with $n=3$ subintervals.
$h = \frac{3-0}{3} = 1$.
The points are $x_0=0, x_1=1, x_2=2, x_3=3$.
The function values are:
$f(x_0) = f(0) = 0^3 = 0$
$f(x_1) = f(1) = 1^3 = 1$
$f(x_2) = f(2) = 2^3 = 8$
$f(x_3) = f(3) = 3^3 = 27$

Using Simpson's Three-Eighths Rule:
$\int_{0}^{3} x^3 \, dx \approx \frac{3h}{8} [f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)]$
$\int_{0}^{3} x^3 \, dx \approx \frac{3(1)}{8} [0 + 3(1) + 3(8) + 27]$
$\int_{0}^{3} x^3 \, dx \approx \frac{3}{8} [0 + 3 + 24 + 27]$
$\int_{0}^{3} x^3 \, dx \approx \frac{3}{8} [54]$
$\int_{0}^{3} x^3 \, dx \approx \frac{162}{8} = 20.25$

The exact value is $\int_{0}^{3} x^3 \, dx = \left[ \frac{x^4}{4} \right]_{0}^{3} = \frac{3^4}{4} - \frac{0^4}{4} = \frac{81}{4} = 20.25$.
In this case, since the function is a cubic polynomial, Simpson's Three-Eighths Rule gives the exact answer. This is a crucial property.

**Example 2: Composite Segment**

Approximate $\int_{0}^{6} x^3 \, dx$ using Simpson's Three-Eighths Rule.

Here, $a=0$, $b=6$. We need $n$ to be a multiple of 3. Let's choose $n=6$.
$h = \frac{6-0}{6} = 1$.
The points are $x_0=0, x_1=1, x_2=2, x_3=3, x_4=4, x_5=5, x_6=6$.
The function values are:
$f(0) = 0^3 = 0$
$f(1) = 1^3 = 1$
$f(2) = 2^3 = 8$
$f(3) = 3^3 = 27$
$f(4) = 4^3 = 64$
$f(5) = 5^3 = 125$
$f(6) = 6^3 = 216$

Using the Composite Simpson's Three-Eighths Rule:
$\int_{0}^{6} x^3 \, dx \approx \frac{3h}{8} [f(x_0) + 3f(x_1) + 3f(x_2) + 2f(x_3) + 3f(x_4) + 3f(x_5) + f(x_6)]$
$\int_{0}^{6} x^3 \, dx \approx \frac{3(1)}{8} [0 + 3(1) + 3(8) + 2(27) + 3(64) + 3(125) + 216]$
$\int_{0}^{6} x^3 \, dx \approx \frac{3}{8} [0 + 3 + 24 + 54 + 192 + 375 + 216]$
$\int_{0}^{6} x^3 \, dx \approx \frac{3}{8} [864]$
$\int_{0}^{6} x^3 \, dx \approx 3 \times 108 = 324$

The exact value is $\int_{0}^{6} x^3 \, dx = \left[ \frac{x^4}{4} \right]_{0}^{6} = \frac{6^4}{4} - \frac{0^4}{4} = \frac{1296}{4} = 324$.
Again, Simpson's Three-Eighths Rule provides the exact answer for a cubic function.

**Example 3: Approximating a non-cubic function**

Approximate $\int_{0}^{3} e^{-x} \, dx$ using Simpson's Three-Eighths Rule with $n=3$.

Here, $a=0$, $b=3$. $n=3$.
$h = \frac{3-0}{3} = 1$.
Points: $x_0=0, x_1=1, x_2=2, x_3=3$.
Function values:
$f(x_0) = f(0) = e^0 = 1$
$f(x_1) = f(1) = e^{-1} \approx 0.36788$
$f(x_2) = f(2) = e^{-2} \approx 0.13534$
$f(x_3) = f(3) = e^{-3} \approx 0.04979$

Using Simpson's Three-Eighths Rule:
$\int_{0}^{3} e^{-x} \, dx \approx \frac{3h}{8} [f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)]$
$\int_{0}^{3} e^{-x} \, dx \approx \frac{3(1)}{8} [1 + 3(0.36788) + 3(0.13534) + 0.04979]$
$\int_{0}^{3} e^{-x} \, dx \approx \frac{3}{8} [1 + 1.10364 + 0.40602 + 0.04979]$
$\int_{0}^{3} e^{-x} \, dx \approx \frac{3}{8} [2.55945]$
$\int_{0}^{3} e^{-x} \, dx \approx 0.95979$

The exact value is $\int_{0}^{3} e^{-x} \, dx = \left[ -e^{-x} \right]_{0}^{3} = -e^{-3} - (-e^0) = 1 - e^{-3} \approx 1 - 0.04979 = 0.95021$.

The approximation is quite close, demonstrating the effectiveness of the rule.

---

### Error Analysis:

The theoretical error for Simpson's Three-Eighths Rule over a single segment of length $3h$ is given by:

$E_{S3/8} = -\frac{h^4 (b-a)}{80} f^{(4)}(\xi)$

where $\xi$ is some value within the interval of integration $[a, b]$, and $f^{(4)}(\xi)$ is the fourth derivative of the function evaluated at $\xi$.

For the composite rule with $n$ subintervals (where $n=3m$), the total error is the sum of errors over $m$ segments. The error in each segment is proportional to $h^4$. Since there are $m = n/3$ segments, the total error for the composite rule is approximately:

$E_{composite} \approx m \times (-\frac{h^4 (3h)}{80} f^{(4)}(\xi))$
$E_{composite} \approx \frac{n}{3} \times (-\frac{3h^5}{80} f^{(4)}(\xi))$
$E_{composite} \approx -\frac{n h^5}{80} f^{(4)}(\xi)$

Substituting $h = \frac{b-a}{n}$, we get $h^5 = \frac{(b-a)^5}{n^5}$.
$E_{composite} \approx -\frac{n}{80} \frac{(b-a)^5}{n^5} f^{(4)}(\xi)$
$E_{composite} \approx -\frac{(b-a)^5}{80 n^4} f^{(4)}(\xi)$

**Key Takeaway:** The error of Simpson's Three-Eighths Rule is proportional to $h^4$ for a single segment and $h^5$ for the composite rule, or equivalently, it is proportional to $1/n^4$ for the composite rule. This indicates a higher order of accuracy than the trapezoidal rule ($O(h^2)$ or $O(1/n^2)$) and Simpson's One-Third Rule ($O(h^4)$ or $O(1/n^4)$ for even $n$).

**Important Note on Error:** While the general error formula for Simpson's Three-Eighths Rule involves the fourth derivative, it is exact for polynomials up to degree 3. This means if $f(x)$ is a cubic polynomial, the error is zero.

---

### Comparison with Other Methods:

*   **Trapezoidal Rule:** Approximates the area using trapezoids. Lower accuracy ($O(h^2)$ for composite).
*   **Simpson's One-Third Rule:** Approximates the area using parabolic segments. Requires an even number of subintervals. Accuracy is $O(h^4)$ for composite.
*   **Simpson's Three-Eighths Rule:** Approximates the area using cubic segments. Requires the number of subintervals to be a multiple of 3. Accuracy is $O(h^4)$ for composite (similar to Simpson's One-Third Rule in terms of $h$, but derived from a cubic fit).

**When to use which:**
*   If $n$ is even and small, Simpson's One-Third Rule is often preferred.
*   If $n$ is a multiple of 3 and small, Simpson's Three-Eighths Rule is a good choice.
*   For very high accuracy or when $n$ cannot be easily adjusted to meet the requirements of the Simpson rules, one might combine rules or use higher-order methods.

**Chapra & Canale (6th Ed, 2010), Chapter 21:** Discusses various numerical integration techniques. They present Simpson's rules as methods derived from fitting polynomials. The Three-Eighths rule is shown to have an error term proportional to $f^{(4)}(\xi)$, indicating cubic accuracy.

**Balagurusamy (2017), Chapter 15:** Typically covers numerical integration and highlights the derivation and application of various methods including Simpson's rules. The emphasis is on their practical use in solving engineering problems.

**Gupta S.K. (1995), Chapter 9:** Likely provides a detailed derivation and error analysis of Simpson's rules, emphasizing their mathematical underpinnings and applicability.

---

### Important Points to Remember:

*   **Number of Subintervals:** The number of subintervals ($n$) *must* be a multiple of 3 for Simpson's Three-Eighths Rule.
*   **Equal Spacing:** The subintervals must be of equal width ($h$).
*   **Accuracy:** It is an accurate method, particularly for functions that can be well-approximated by cubic polynomials. It is exact for cubic polynomials.
*   **Error Term:** The error is related to the fourth derivative of the function.
*   **Composite Rule Coefficients:** Be careful with the pattern of coefficients: 1, 3, 3, 2, 3, 3, 2, ..., 2, 3, 3, 1.

---

### Practice Questions/Exercises:

**Question 1:**
Approximate the definite integral $\int_{1}^{4} x^2 \, dx$ using Simpson's Three-Eighths Rule with $n=3$ subintervals.

**Answer 1:**
Here, $a=1$, $b=4$, and $n=3$.
$h = \frac{4-1}{3} = \frac{3}{3} = 1$.
The points are $x_0=1, x_1=2, x_2=3, x_3=4$.
The function is $f(x) = x^2$.
$f(x_0) = f(1) = 1^2 = 1$
$f(x_1) = f(2) = 2^2 = 4$
$f(x_2) = f(3) = 3^2 = 9$
$f(x_3) = f(4) = 4^2 = 16$

Using Simpson's Three-Eighths Rule:
$\int_{1}^{4} x^2 \, dx \approx \frac{3h}{8} [f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)]$
$\int_{1}^{4} x^2 \, dx \approx \frac{3(1)}{8} [1 + 3(4) + 3(9) + 16]$
$\int_{1}^{4} x^2 \, dx \approx \frac{3}{8} [1 + 12 + 27 + 16]$
$\int_{1}^{4} x^2 \, dx \approx \frac{3}{8} [56]$
$\int_{1}^{4} x^2 \, dx \approx 3 \times 7 = 21$

The exact value is $\int_{1}^{4} x^2 \, dx = \left[ \frac{x^3}{3} \right]_{1}^{4} = \frac{4^3}{3} - \frac{1^3}{3} = \frac{64}{3} - \frac{1}{3} = \frac{63}{3} = 21$.
Since $x^2$ is a quadratic polynomial, and Simpson's Three-Eighths Rule is exact for cubics, it is also exact for quadratics.

**Question 2:**
Approximate the integral $\int_{0}^{0.6} \sin(x) \, dx$ using Simpson's Three-Eighths Rule with $n=6$ subintervals.

**Answer 2:**
Here, $a=0$, $b=0.6$, and $n=6$. $n$ is a multiple of 3.
$h = \frac{0.6-0}{6} = 0.1$.
The points are $x_0=0.0, x_1=0.1, x_2=0.2, x_3=0.3, x_4=0.4, x_5=0.5, x_6=0.6$.
The function is $f(x) = \sin(x)$.

Function values (approximate):
$f(x_0) = \sin(0.0) = 0.00000$
$f(x_1) = \sin(0.1) = 0.09983$
$f(x_2) = \sin(0.2) = 0.19867$
$f(x_3) = \sin(0.3) = 0.29552$
$f(x_4) = \sin(0.4) = 0.38942$
$f(x_5) = \sin(0.5) = 0.47943$
$f(x_6) = \sin(0.6) = 0.56464$

Using the Composite Simpson's Three-Eighths Rule:
$\int_{0}^{0.6} \sin(x) \, dx \approx \frac{3h}{8} [f(x_0) + 3f(x_1) + 3f(x_2) + 2f(x_3) + 3f(x_4) + 3f(x_5) + f(x_6)]$
$\int_{0}^{0.6} \sin(x) \, dx \approx \frac{3(0.1)}{8} [0.00000 + 3(0.09983) + 3(0.19867) + 2(0.29552) + 3(0.38942) + 3(0.47943) + 0.56464]$
$\int_{0}^{0.6} \sin(x) \, dx \approx \frac{0.3}{8} [0.00000 + 0.29949 + 0.59601 + 0.59104 + 1.16826 + 1.43829 + 0.56464]$
$\int_{0}^{0.6} \sin(x) \, dx \approx \frac{0.3}{8} [4.65773]$
$\int_{0}^{0.6} \sin(x) \, dx \approx 0.174665$

The exact value is $\int_{0}^{0.6} \sin(x) \, dx = [-\cos(x)]_{0}^{0.6} = -\cos(0.6) - (-\cos(0)) = 1 - \cos(0.6) \approx 1 - 0.82534 = 0.17466$.
The approximation is very close.

**Question 3:**
Consider the integral $\int_{0}^{3} x^4 \, dx$.
a) Approximate the integral using Simpson's Three-Eighths Rule with $n=3$.
b) Calculate the exact value of the integral.
c) Determine the error in the approximation.

**Answer 3:**
a) For $n=3$, $h=1$. Points are 0, 1, 2, 3. $f(x) = x^4$.
$f(0)=0$, $f(1)=1$, $f(2)=16$, $f(3)=81$.
Approximation: $\frac{3(1)}{8} [0 + 3(1) + 3(16) + 81] = \frac{3}{8} [0 + 3 + 48 + 81] = \frac{3}{8} [132] = \frac{396}{8} = 49.5$.

b) Exact value: $\int_{0}^{3} x^4 \, dx = \left[\frac{x^5}{5}\right]_{0}^{3} = \frac{3^5}{5} - 0 = \frac{243}{5} = 48.6$.

c) Error = Exact Value - Approximation = $48.6 - 49.5 = -0.9$.

**Check the error formula:**
$f(x) = x^4$, $f'(x) = 4x^3$, $f''(x) = 12x^2$, $f'''(x) = 24x$, $f^{(4)}(x) = 24$.
The error formula for a single segment is $E = -\frac{h^4 (b-a)}{80} f^{(4)}(\xi)$.
$E = -\frac{(1)^4 (3-0)}{80} (24) = -\frac{3 \times 24}{80} = -\frac{72}{80} = -0.9$.
The theoretical error matches the calculated error, as expected.

---

### Relevance to Course Outcomes:

*   **CO1: Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3)**
    While this topic directly addresses integration, the underlying interpolation techniques (like Newton's Divided Differences) are fundamental to solving equations and are related to curve fitting. Understanding these building blocks supports CO1.
*   **CO2: Implement numerical schemes to fit data (Knowledge Level: K3)**
    Simpson's rules are derived from fitting polynomials to data points. This topic directly demonstrates how interpolation (fitting a cubic polynomial) is used to approximate a function and its integral, aligning with fitting data.
*   **CO3: Solve differentiation and integration numerically (Knowledge Level: K3)**
    This is the primary focus of Simpson's Three-Eighths Rule. It provides a concrete numerical method to approximate definite integrals, fulfilling this course outcome directly.
*   **CO4: Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3)**
    Numerical integration is a core component in solving differential equations, particularly ODEs. Many numerical solution methods for ODEs (e.g., Runge-Kutta methods) involve integration steps. Therefore, mastering Simpson's rule contributes to the ability to solve differential equations.

---

### Conclusion:

Simpson's Three-Eighths Rule is a powerful and accurate numerical integration technique, especially when the number of subintervals is a multiple of three. Its ability to perfectly integrate cubic polynomials makes it a valuable tool in various engineering applications, from calculating areas and volumes to solving differential equations. Understanding its derivation, application, and error characteristics is crucial for any student of numerical methods in engineering.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
