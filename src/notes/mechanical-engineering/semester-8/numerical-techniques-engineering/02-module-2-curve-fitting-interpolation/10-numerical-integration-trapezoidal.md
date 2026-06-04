---
title: "Numerical integration-Trapezoidal"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 2: Curve fitting: Interpolation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646b3"
status: "completed"
scrapedAt: "2026-05-20T18:23:14.709Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - Module 2: Curve Fitting: Interpolation

## Topic: Numerical Integration - Trapezoidal Rule

### 1. Introduction to Numerical Integration

**Objective:** To approximate the value of a definite integral $\int_a^b f(x) dx$ when the analytical solution is difficult or impossible to find, or when the function $f(x)$ is known only at discrete points.

**Relevance to Course Outcomes:**
*   **CO3: Solve differentiation and integration numerically.** This topic directly addresses the numerical integration aspect of this outcome. (Knowledge Level: K3 - Applying numerical methods).

**Key Concepts:**
*   **Definite Integral:** Represents the area under the curve of a function $f(x)$ between the limits $a$ and $b$.
*   **Analytical Integration:** Finding the antiderivative of $f(x)$ and evaluating it at the limits of integration.
*   **Numerical Integration (Quadrature):** Approximating the definite integral using numerical methods.

**Textbook References:**
*   **Chapra & Canale:** Chapter 20, "Integration and Differentiation" (focus on numerical integration techniques).
*   **Gupta:** Chapter 12, "Numerical Integration and Differentiation" (provides a good overview of various methods).
*   **Balagurusamy:** Chapter 15, "Numerical Integration" (introduces fundamental concepts).

### 2. The Trapezoidal Rule: Concept and Derivation

**Concept:** The Trapezoidal Rule approximates the integral by dividing the area under the curve into a series of trapezoids. The area of each trapezoid is calculated and then summed to approximate the total area.

**Derivation (Single Interval):**
Consider the integral $\int_a^b f(x) dx$. We approximate $f(x)$ over the interval $[a, b]$ with a straight line connecting the points $(a, f(a))$ and $(b, f(b))$. This forms a single trapezoid.

The area of a trapezoid is given by:
$Area = \frac{1}{2} \times (sum \ of \ parallel \ sides) \times (height)$

In our case:
*   Parallel sides are the function values at the limits: $f(a)$ and $f(b)$.
*   Height is the width of the interval: $(b - a)$.

Therefore, the area of the single trapezoid is:
$Area \approx \frac{1}{2} [f(a) + f(b)] (b - a)$

This gives the **Single-Segment Trapezoidal Rule:**
$\int_a^b f(x) dx \approx \frac{b-a}{2} [f(a) + f(b)]$

**Textbook References:**
*   **Chapra & Canale:** Section 20.1, "Trapezoidal Rule" (explains the geometrical interpretation and formula).
*   **Gerald & Wheatly:** Chapter 3, "Numerical Differentiation and Integration" (discusses the derivation and application).
*   **Jain, Iyengar & Jain:** Chapter 6, "Numerical Integration" (provides a detailed theoretical background).

**Important Point to Remember:** The Trapezoidal Rule approximates the function with linear segments. Its accuracy depends on the number of segments used and the curvature of the function.

### 3. The Composite Trapezoidal Rule

**Concept:** To improve accuracy, the interval $[a, b]$ is divided into $n$ equal subintervals. The Trapezoidal Rule is then applied to each subinterval, and the results are summed.

**Derivation (Composite Rule):**
Divide the interval $[a, b]$ into $n$ equal subintervals, each of width $h$:
$h = \frac{b-a}{n}$

The points dividing the intervals are $x_0, x_1, x_2, ..., x_n$, where:
$x_0 = a$
$x_1 = a + h$
$x_2 = a + 2h$
...
$x_i = a + ih$
...
$x_n = a + nh = b$

The integral can be written as the sum of integrals over each subinterval:
$\int_a^b f(x) dx = \int_{x_0}^{x_1} f(x) dx + \int_{x_1}^{x_2} f(x) dx + ... + \int_{x_{n-1}}^{x_n} f(x) dx$

Applying the single-segment Trapezoidal Rule to each subinterval $[x_{i-1}, x_i]$:
$\int_{x_{i-1}}^{x_i} f(x) dx \approx \frac{h}{2} [f(x_{i-1}) + f(x_i)]$

Summing these up:
$\int_a^b f(x) dx \approx \frac{h}{2} [f(x_0) + f(x_1)] + \frac{h}{2} [f(x_1) + f(x_2)] + ... + \frac{h}{2} [f(x_{n-1}) + f(x_n)]$

Factoring out $\frac{h}{2}$:
$\int_a^b f(x) dx \approx \frac{h}{2} [f(x_0) + f(x_1) + f(x_1) + f(x_2) + ... + f(x_{n-1}) + f(x_n)]$

Notice that the interior points ($f(x_1), f(x_2), ..., f(x_{n-1})$) are included twice.
The **Composite Trapezoidal Rule** formula is:
$\int_a^b f(x) dx \approx \frac{h}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + ... + 2f(x_{n-1}) + f(x_n)]$

This can be written more compactly as:
$\int_a^b f(x) dx \approx \frac{h}{2} \left[ f(x_0) + f(x_n) + 2 \sum_{i=1}^{n-1} f(x_i) \right]$

**Textbook References:**
*   **Chapra & Canale:** Section 20.1.2, "Composite Trapezoidal Rule" (excellent explanation with diagrams).
*   **Balagurusamy:** Section 15.2, "Trapezoidal rule for multiple intervals" (clarifies the application to multiple segments).
*   **Conte & De Boor:** Chapter 5, "Numerical Quadrature" (discusses the theory of composite rules).

**Important Point to Remember:** The composite rule significantly improves accuracy compared to the single-segment rule, especially for functions with significant curvature.

### 4. Error Analysis of the Trapezoidal Rule

**Concept:** The error in the Trapezoidal Rule is the difference between the true integral value and the approximated value.

**Error Formula for Single-Segment Trapezoidal Rule:**
The error ($E_T$) for the single-segment trapezoidal rule over $[a, b]$ is given by:
$E_T = -\frac{(b-a)^3}{12} f''(\xi)$
where $\xi$ is some value within the interval $[a, b]$.

**Error Formula for Composite Trapezoidal Rule:**
The total error for the composite trapezoidal rule with $n$ subintervals of width $h$ is the sum of the errors in each subinterval. Assuming $f''(\xi)$ is approximately constant over each subinterval, the total error is approximately:
$E_T \approx n \times \left(-\frac{h^3}{12} f''(\xi_{avg})\right)$
Since $n = (b-a)/h$:
$E_T \approx \frac{b-a}{h} \left(-\frac{h^3}{12} f''(\xi_{avg})\right)$
$E_T \approx -\frac{(b-a)h^2}{12} f''(\xi_{avg})$

**Key Observations from Error Formula:**
*   The error is proportional to the **square of the interval width ($h^2$)** for the composite rule. This means that halving the interval width reduces the error by a factor of four.
*   The error is proportional to the **second derivative of the function ($f''(\xi)$)**. If the function is linear ($f''(x) = 0$), the trapezoidal rule is exact. If the second derivative is large (high curvature), the error will be larger.

**Textbook References:**
*   **Chapra & Canale:** Section 20.1.3, "Error of the Trapezoidal Rule" (provides the error bounds and discussion).
*   **Jain, Iyengar & Jain:** Chapter 6, "Error analysis of Trapezoidal Rule" (offers a rigorous mathematical treatment).
*   **Suli & Mayers:** Chapter 7, "Quadrature" (covers error estimation and convergence for numerical integration).

**Important Point to Remember:** The error analysis provides a theoretical basis for understanding how to improve accuracy by increasing the number of subintervals.

### 5. Application and Examples

**Example 1: Single-Segment Trapezoidal Rule**

Approximate the integral $\int_0^2 x^2 dx$ using the single-segment Trapezoidal Rule.

*   $a = 0$, $b = 2$
*   $f(x) = x^2$
*   $f(a) = f(0) = 0^2 = 0$
*   $f(b) = f(2) = 2^2 = 4$

$\int_0^2 x^2 dx \approx \frac{2-0}{2} [f(0) + f(2)] = \frac{2}{2} [0 + 4] = 1 \times 4 = 4$

**Actual Value:** $\int_0^2 x^2 dx = [\frac{x^3}{3}]_0^2 = \frac{2^3}{3} - \frac{0^3}{3} = \frac{8}{3} \approx 2.6667$

**Error:** $|Actual - Approximation| = |\frac{8}{3} - 4| = |-\frac{4}{3}| = \frac{4}{3} \approx 1.3333$

**Example 2: Composite Trapezoidal Rule**

Approximate the integral $\int_0^2 x^2 dx$ using the composite Trapezoidal Rule with $n=4$.

*   $a = 0$, $b = 2$, $n = 4$
*   $h = \frac{b-a}{n} = \frac{2-0}{4} = 0.5$

The points are $x_0=0, x_1=0.5, x_2=1.0, x_3=1.5, x_4=2.0$.
The function values are:
*   $f(x_0) = f(0) = 0^2 = 0$
*   $f(x_1) = f(0.5) = (0.5)^2 = 0.25$
*   $f(x_2) = f(1.0) = (1.0)^2 = 1.0$
*   $f(x_3) = f(1.5) = (1.5)^2 = 2.25$
*   $f(x_4) = f(2.0) = (2.0)^2 = 4.0$

Using the composite formula:
$\int_0^2 x^2 dx \approx \frac{h}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + 2f(x_3) + f(x_4)]$
$\int_0^2 x^2 dx \approx \frac{0.5}{2} [0 + 2(0.25) + 2(1.0) + 2(2.25) + 4.0]$
$\int_0^2 x^2 dx \approx 0.25 [0 + 0.5 + 2.0 + 4.5 + 4.0]$
$\int_0^2 x^2 dx \approx 0.25 [11.0] = 2.75$

**Actual Value:** $\frac{8}{3} \approx 2.6667$

**Error:** $|Actual - Approximation| = |\frac{8}{3} - 2.75| = |2.6667 - 2.75| = |-0.0833| = 0.0833$

**Comparison:** The composite rule with $n=4$ gave a much better approximation (error 0.0833) than the single-segment rule (error 1.3333). This demonstrates the benefit of increasing $n$.

**Example 3: Integration of tabulated data**

Suppose we have the following data for the velocity of a rocket:

| Time (s) | Velocity (m/s) |
| :------- | :------------- |
| 0        | 0              |
| 10       | 15             |
| 20       | 35             |
| 30       | 50             |
| 40       | 70             |
| 50       | 95             |

Estimate the distance traveled by the rocket from $t=0$ to $t=50$ seconds. Distance is the integral of velocity with respect to time: $Distance = \int_{0}^{50} v(t) dt$.

Here, the function $v(t)$ is known only at discrete points, so numerical integration is necessary. We can use the composite Trapezoidal Rule.

*   $a = 0$, $b = 50$
*   The points are equally spaced with $h = 10$.
*   $n = 5$ (number of intervals)
*   $v_0 = 0, v_1 = 15, v_2 = 35, v_3 = 50, v_4 = 70, v_5 = 95$

$\int_0^{50} v(t) dt \approx \frac{h}{2} [v_0 + 2v_1 + 2v_2 + 2v_3 + 2v_4 + v_5]$
$\int_0^{50} v(t) dt \approx \frac{10}{2} [0 + 2(15) + 2(35) + 2(50) + 2(70) + 95]$
$\int_0^{50} v(t) dt \approx 5 [0 + 30 + 70 + 100 + 140 + 95]$
$\int_0^{50} v(t) dt \approx 5 [435]$
$\int_0^{50} v(t) dt \approx 2175$ meters

So, the estimated distance traveled is 2175 meters.

**Textbook References:**
*   **Chapra & Canale:** Chapter 20, provides numerous examples of applying the Trapezoidal Rule to practical engineering problems.
*   **Gupta:** Chapter 12, includes examples related to physics and engineering applications.

### 6. Advantages and Disadvantages of the Trapezoidal Rule

**Advantages:**
*   **Simplicity:** Easy to understand and implement, both manually and computationally.
*   **Good for Smooth Functions:** Performs reasonably well for functions that are not too oscillatory or have high curvature.
*   **Effective for Tabulated Data:** Particularly useful when data points are equally spaced.
*   **Basis for Higher-Order Methods:** The trapezoidal concept is foundational for more advanced quadrature rules.

**Disadvantages:**
*   **Lower Accuracy for High Curvature:** Less accurate than higher-order methods (like Simpson's rule) for functions with significant curvature.
*   **Requires Equally Spaced Intervals (for Composite):** The standard composite formula assumes equally spaced data points. Modifications are needed for unequally spaced data (though such approaches are less common in introductory texts).
*   **Error depends on $f''(\xi)$:** If the second derivative is large, the error can be substantial, requiring a very small $h$ for good accuracy.

**Textbook References:**
*   **Chapra & Canale:** Section 20.2, "Simpson's Rule" (often discusses the Trapezoidal Rule's limitations in comparison).
*   **Balagurusamy:** Discusses the comparison of accuracy between different numerical integration methods.

### 7. Practice Questions and Exercises

**Question 1:**
Evaluate the integral $\int_1^3 x^3 dx$ using the single-segment Trapezoidal Rule. Compare the result with the exact value.

**Answer 1:**
*   $a=1, b=3, f(x) = x^3$
*   $f(1) = 1^3 = 1$
*   $f(3) = 3^3 = 27$
*   Approximation: $\frac{3-1}{2} [f(1) + f(3)] = \frac{2}{2} [1 + 27] = 28$.
*   Exact value: $\int_1^3 x^3 dx = [\frac{x^4}{4}]_1^3 = \frac{3^4}{4} - \frac{1^4}{4} = \frac{81}{4} - \frac{1}{4} = \frac{80}{4} = 20$.
*   Error: $|20 - 28| = 8$.

**Question 2:**
Approximate the integral $\int_0^1 e^{-x^2} dx$ using the composite Trapezoidal Rule with $n=4$.

**Answer 2:**
*   $a=0, b=1, n=4$
*   $h = \frac{1-0}{4} = 0.25$
*   Points: $0, 0.25, 0.5, 0.75, 1.0$
*   $f(x) = e^{-x^2}$
*   $f(0) = e^0 = 1$
*   $f(0.25) = e^{-(0.25)^2} = e^{-0.0625} \approx 0.9394$
*   $f(0.5) = e^{-(0.5)^2} = e^{-0.25} \approx 0.7788$
*   $f(0.75) = e^{-(0.75)^2} = e^{-0.5625} \approx 0.5698$
*   $f(1.0) = e^{-(1.0)^2} = e^{-1} \approx 0.3679$

Approximation: $\frac{0.25}{2} [f(0) + 2f(0.25) + 2f(0.5) + 2f(0.75) + f(1.0)]$
$\approx 0.125 [1 + 2(0.9394) + 2(0.7788) + 2(0.5698) + 0.3679]$
$\approx 0.125 [1 + 1.8788 + 1.5576 + 1.1396 + 0.3679]$
$\approx 0.125 [5.9439]$
$\approx 0.74299$

(Note: The exact value is approximately 0.7468)

**Question 3:**
Given the following experimental data for a heat flux $q$ through a material over time $t$:

| Time (s) | Heat Flux ($q$, W/m²) |
| :------- | :-------------------- |
| 0        | 50                    |
| 5        | 45                    |
| 10       | 40                    |
| 15       | 32                    |
| 20       | 25                    |

Estimate the total energy transferred per unit area, which is the integral of heat flux with respect to time, $\int_0^{20} q(t) dt$, using the composite Trapezoidal Rule.

**Answer 3:**
*   $a=0, b=20, n=4$
*   $h = \frac{20-0}{4} = 5$
*   $q_0=50, q_1=45, q_2=40, q_3=32, q_4=25$

$\int_0^{20} q(t) dt \approx \frac{5}{2} [q_0 + 2q_1 + 2q_2 + 2q_3 + q_4]$
$\approx 2.5 [50 + 2(45) + 2(40) + 2(32) + 25]$
$\approx 2.5 [50 + 90 + 80 + 64 + 25]$
$\approx 2.5 [309]$
$\approx 772.5$ J/m²

### 8. Summary and Key Takeaways

*   **Trapezoidal Rule:** Approximates an integral by dividing the area under a curve into trapezoids.
*   **Single-Segment:** $\int_a^b f(x) dx \approx \frac{b-a}{2} [f(a) + f(b)]$. Simple but often inaccurate.
*   **Composite:** Divides the interval into $n$ subintervals of width $h = (b-a)/n$.
    $\int_a^b f(x) dx \approx \frac{h}{2} \left[ f(x_0) + f(x_n) + 2 \sum_{i=1}^{n-1} f(x_i) \right]$. More accurate.
*   **Accuracy:** Improves with an increase in the number of subintervals ($n$). Error is proportional to $h^2$ and $f''(\xi)$.
*   **Applications:** Useful for smooth functions and for integrating tabulated data, especially when data points are equally spaced.
*   **Limitations:** Less accurate than Simpson's rule for highly curved functions.

This concludes the notes on the Trapezoidal Rule for numerical integration. The next steps in numerical integration might involve exploring Simpson's rules for higher accuracy.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
