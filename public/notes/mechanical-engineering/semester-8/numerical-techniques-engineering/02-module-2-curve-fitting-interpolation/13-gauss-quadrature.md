---
title: "Gauss Quadrature"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 2: Curve fitting: Interpolation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646b6"
status: "completed"
scrapedAt: "2026-05-20T18:23:16.837Z"
---
# NUMERICAL TECHNIQUES ENGINEERING: Module 2: Curve Fitting: Interpolation - Gauss Quadrature

## Introduction to Numerical Integration

Numerical integration (or quadrature) is the process of approximating the definite integral of a function. This is crucial when analytical integration is impossible or impractical, or when the integrand is only known at discrete data points.

**Key Concept:** The core idea behind numerical integration is to approximate the area under a curve using simpler shapes, such as rectangles, trapezoids, or higher-order polynomials.

**Relevance to Course Outcomes:**
*   **CO3: Solve differentiation and integration numerically (Knowledge Level: K3)** - Gauss Quadrature is a direct method for numerically solving definite integrals.

## Limitations of Basic Numerical Integration Methods

Basic methods like the Trapezoidal Rule and Simpson's Rule are straightforward but have limitations:

*   **Fixed Points:** They use equally spaced points, which might not be optimal for approximating the integral.
*   **Error Dependency:** The accuracy is heavily dependent on the number of intervals used. More intervals mean higher accuracy but also more computation.

## Gauss Quadrature: A Superior Approach

Gauss Quadrature methods aim to achieve higher accuracy with fewer function evaluations by strategically choosing the points (nodes) at which the function is evaluated and the weights associated with these points.

**Key Concept:** Gauss Quadrature methods are *closed-form* integration rules where the integration interval is transformed to a standard interval (typically [-1, 1]), and the function is evaluated at specific, non-uniformly spaced points called **Gaussian nodes**. These nodes and their corresponding **Gaussian weights** are pre-determined to yield the highest possible polynomial degree of accuracy for a given number of points.

**Textbook Reference:**
*   **Chapra & Canale:** Discusses Gauss Quadrature as a method for achieving higher accuracy with fewer points compared to Newton-Cotes formulas. They emphasize the importance of choosing optimal abscissas and weights.

### The Fundamental Idea of Gauss Quadrature

Instead of forcing the integration nodes to be at fixed, equally spaced points, Gauss Quadrature determines the nodes ($x_i$) and weights ($w_i$) such that the integral of a polynomial of the highest possible degree is evaluated exactly.

**General Form of Gauss Quadrature:**

$$
\int_{a}^{b} f(x) dx \approx \sum_{i=1}^{n} w_i f(x_i)
$$

where:
*   $n$ is the number of points (or terms) in the quadrature formula.
*   $x_i$ are the Gaussian nodes (abscissas).
*   $w_i$ are the Gaussian weights.

**What makes it "Gaussian"?**
The magic of Gauss Quadrature lies in the fact that the nodes ($x_i$) and weights ($w_i$) are specifically chosen to make the formula exact for polynomials up to a certain degree. For $n$ points, a Gauss Quadrature formula is exact for polynomials of degree $2n-1$.

### Standard Gauss-Legendre Quadrature

The most common type of Gauss Quadrature is **Gauss-Legendre Quadrature**, which is designed to integrate functions over the interval $[-1, 1]$.

**Key Concepts:**
*   **Legendre Polynomials:** These are a sequence of orthogonal polynomials that form the basis for Gauss-Legendre Quadrature. The roots of Legendre polynomials are the Gaussian nodes.
*   **Orthogonality:** Legendre polynomials are orthogonal with respect to the weight function $w(x) = 1$ over the interval $[-1, 1]$. This property is crucial for deriving the weights.
*   **Interval Transformation:** To use Gauss-Legendre Quadrature for an arbitrary interval $[a, b]$, a change of variables is required to map the interval $[a, b]$ to $[-1, 1]$.

#### Interval Transformation

Let $x$ be a variable in the interval $[a, b]$, and let $\xi$ be a variable in the interval $[-1, 1]$. The linear transformation is:

$$
x = \frac{b-a}{2} \xi + \frac{a+b}{2}
$$

And its differential is:

$$
dx = \frac{b-a}{2} d\xi
$$

Substituting these into the integral:

$$
\int_{a}^{b} f(x) dx = \int_{-1}^{1} f\left(\frac{b-a}{2} \xi + \frac{a+b}{2}\right) \frac{b-a}{2} d\xi
$$

Now, let $g(\xi) = f\left(\frac{b-a}{2} \xi + \frac{a+b}{2}\right) \frac{b-a}{2}$. The integral becomes:

$$
\int_{a}^{b} f(x) dx = \int_{-1}^{1} g(\xi) d\xi
$$

This transformed integral can now be approximated using the Gauss-Legendre Quadrature formula:

$$
\int_{-1}^{1} g(\xi) d\xi \approx \sum_{i=1}^{n} w_i g(\xi_i)
$$

where $\xi_i$ are the roots of the $n$-th degree Legendre polynomial and $w_i$ are the corresponding weights.

#### Gaussian Nodes ($\xi_i$) and Weights ($w_i$)

The values of $\xi_i$ and $w_i$ are tabulated for different values of $n$.

**Example: Gauss-Legendre Quadrature with $n=2$ points**

For $n=2$, the integral is exact for polynomials of degree $2(2)-1 = 3$.
The nodes are the roots of the Legendre polynomial $P_2(\xi) = \frac{1}{2}(3\xi^2 - 1)$.
The roots are $\xi_1 = -\frac{1}{\sqrt{3}}$ and $\xi_2 = \frac{1}{\sqrt{3}}$.

The weights are $w_1 = 1$ and $w_2 = 1$.

So, for $n=2$:

$$
\int_{-1}^{1} g(\xi) d\xi \approx w_1 g(\xi_1) + w_2 g(\xi_2) = 1 \cdot g\left(-\frac{1}{\sqrt{3}}\right) + 1 \cdot g\left(\frac{1}{\sqrt{3}}\right)
$$

**Example: Gauss-Legendre Quadrature with $n=3$ points**

For $n=3$, the integral is exact for polynomials of degree $2(3)-1 = 5$.
The nodes are the roots of the Legendre polynomial $P_3(\xi) = \frac{1}{2}(5\xi^3 - 3\xi)$.
The roots are $\xi_1 = -\sqrt{\frac{3}{5}}$, $\xi_2 = 0$, and $\xi_3 = \sqrt{\frac{3}{5}}$.

The weights are $w_1 = \frac{5}{9}$, $w_2 = \frac{8}{9}$, and $w_3 = \frac{5}{9}$.

So, for $n=3$:

$$
\int_{-1}^{1} g(\xi) d\xi \approx w_1 g(\xi_1) + w_2 g(\xi_2) + w_3 g(\xi_3) = \frac{5}{9} g\left(-\sqrt{\frac{3}{5}}\right) + \frac{8}{9} g(0) + \frac{5}{9} g\left(\sqrt{\frac{3}{5}}\right)
$$

**Textbook Reference:**
*   **Chapra & Canale:** Provides tables of Gaussian nodes and weights for various values of $n$. They also illustrate the interval transformation process clearly.
*   **Gupta & Gupta:** Likely to cover the derivation of Legendre polynomials and the properties that lead to the choice of nodes and weights.
*   **Balagurusamy:** May present a more simplified explanation of the concept and practical application with examples.

**Reference Book Reference:**
*   **Gerald & Wheatly:** Offer detailed derivations and theoretical underpinnings of orthogonal polynomials and their role in quadrature.
*   **Jain, Iyengar, & Jain:** Likely to present the mathematical rigor behind the method, including proofs of exactness for polynomial degrees.

### Tables of Gaussian Nodes and Weights

| $n$ | Nodes ($\xi_i$)                     | Weights ($w_i$)                     |
| :-- | :---------------------------------- | :---------------------------------- |
| 2   | $\pm \frac{1}{\sqrt{3}} \approx \pm 0.57735$ | $1$                                 |
| 3   | $0, \pm \sqrt{\frac{3}{5}} \approx \pm 0.77460$ | $\frac{5}{9} \approx 0.55556, \frac{8}{9} \approx 0.88889, \frac{5}{9} \approx 0.55556$ |
| 4   | $\pm \sqrt{\frac{3-2\sqrt{2/3}}{5}}, \pm \sqrt{\frac{3+2\sqrt{2/3}}{5}}$ | $\frac{1}{2}(1-\frac{1}{\sqrt{3}}), \frac{1}{2}(1+\frac{1}{\sqrt{3}}), \frac{1}{2}(1+\frac{1}{\sqrt{3}}), \frac{1}{2}(1-\frac{1}{\sqrt{3}})$ |
| 5   | $0, \pm \sqrt{\frac{5-2\sqrt{10/3}}{7}}, \pm \sqrt{\frac{5+2\sqrt{10/3}}{7}}$ | $\frac{4}{45}(2-\sqrt{2/5}), \frac{4}{45}(2+\sqrt{2/5}), \frac{2}{9}, \frac{4}{45}(2+\sqrt{2/5}), \frac{4}{45}(2-\sqrt{2/5})$ |

*(Note: For $n=4$ and $n=5$, the nodes and weights become more complex. Consult textbooks for precise values and derivations.)*

**Important Point to Remember:** The nodes are symmetric about zero, and the weights are also symmetric.

### Example 1: Using Gauss-Legendre Quadrature ($n=2$)

**Problem:** Evaluate $\int_{1}^{2} x^2 dx$ using Gauss-Legendre Quadrature with $n=2$.

**Solution:**

1.  **Interval Transformation:**
    *   $a = 1$, $b = 2$.
    *   $x = \frac{2-1}{2} \xi + \frac{1+2}{2} = \frac{1}{2} \xi + \frac{3}{2}$
    *   $dx = \frac{1}{2} d\xi$
    *   The function becomes $f(x) = x^2$.
    *   $g(\xi) = f\left(\frac{1}{2} \xi + \frac{3}{2}\right) \frac{1}{2} = \left(\frac{1}{2} \xi + \frac{3}{2}\right)^2 \frac{1}{2}$
    *   $g(\xi) = \frac{1}{2} \left(\frac{1}{4}\xi^2 + \frac{3}{2}\xi + \frac{9}{4}\right) = \frac{1}{8}\xi^2 + \frac{3}{4}\xi + \frac{9}{8}$

2.  **Apply Gauss-Legendre Quadrature ($n=2$):**
    *   Nodes: $\xi_1 = -\frac{1}{\sqrt{3}}$, $\xi_2 = \frac{1}{\sqrt{3}}$
    *   Weights: $w_1 = 1$, $w_2 = 1$
    *   Integral $\approx w_1 g(\xi_1) + w_2 g(\xi_2)$

3.  **Evaluate $g(\xi)$ at the nodes:**
    *   $g\left(-\frac{1}{\sqrt{3}}\right) = \frac{1}{8}\left(-\frac{1}{\sqrt{3}}\right)^2 + \frac{3}{4}\left(-\frac{1}{\sqrt{3}}\right) + \frac{9}{8}$
        $= \frac{1}{8}\left(\frac{1}{3}\right) - \frac{3}{4\sqrt{3}} + \frac{9}{8}$
        $= \frac{1}{24} - \frac{\sqrt{3}}{4} + \frac{9}{8} = \frac{1 - 6\sqrt{3} + 27}{24} = \frac{28 - 6\sqrt{3}}{24} = \frac{14 - 3\sqrt{3}}{12}$

    *   $g\left(\frac{1}{\sqrt{3}}\right) = \frac{1}{8}\left(\frac{1}{\sqrt{3}}\right)^2 + \frac{3}{4}\left(\frac{1}{\sqrt{3}}\right) + \frac{9}{8}$
        $= \frac{1}{8}\left(\frac{1}{3}\right) + \frac{3}{4\sqrt{3}} + \frac{9}{8}$
        $= \frac{1}{24} + \frac{\sqrt{3}}{4} + \frac{9}{8} = \frac{1 + 6\sqrt{3} + 27}{24} = \frac{28 + 6\sqrt{3}}{24} = \frac{14 + 3\sqrt{3}}{12}$

4.  **Calculate the integral approximation:**
    *   Integral $\approx 1 \cdot \left(\frac{14 - 3\sqrt{3}}{12}\right) + 1 \cdot \left(\frac{14 + 3\sqrt{3}}{12}\right)$
    *   Integral $\approx \frac{14 - 3\sqrt{3} + 14 + 3\sqrt{3}}{12} = \frac{28}{12} = \frac{7}{3}$

**Analytical Solution:**
$\int_{1}^{2} x^2 dx = \left[\frac{x^3}{3}\right]_1^2 = \frac{2^3}{3} - \frac{1^3}{3} = \frac{8}{3} - \frac{1}{3} = \frac{7}{3}$.

**Conclusion:** For $n=2$, Gauss-Legendre Quadrature yields the exact result for $\int_{1}^{2} x^2 dx$. This is expected because $x^2$ is a polynomial of degree 2, and Gauss-Legendre with $n=2$ is exact for polynomials up to degree 3.

### Example 2: Using Gauss-Legendre Quadrature ($n=3$)

**Problem:** Evaluate $\int_{0}^{1} e^{-x} dx$ using Gauss-Legendre Quadrature with $n=3$.

**Solution:**

1.  **Interval Transformation:**
    *   $a = 0$, $b = 1$.
    *   $x = \frac{1-0}{2} \xi + \frac{0+1}{2} = \frac{1}{2} \xi + \frac{1}{2}$
    *   $dx = \frac{1}{2} d\xi$
    *   The function is $f(x) = e^{-x}$.
    *   $g(\xi) = f\left(\frac{1}{2} \xi + \frac{1}{2}\right) \frac{1}{2} = e^{-\left(\frac{1}{2} \xi + \frac{1}{2}\right)} \frac{1}{2} = \frac{1}{2} e^{-\frac{1}{2}(\xi+1)}$

2.  **Apply Gauss-Legendre Quadrature ($n=3$):**
    *   Nodes: $\xi_1 = -\sqrt{\frac{3}{5}} \approx -0.77460$, $\xi_2 = 0$, $\xi_3 = \sqrt{\frac{3}{5}} \approx 0.77460$
    *   Weights: $w_1 = \frac{5}{9} \approx 0.55556$, $w_2 = \frac{8}{9} \approx 0.88889$, $w_3 = \frac{5}{9} \approx 0.55556$
    *   Integral $\approx w_1 g(\xi_1) + w_2 g(\xi_2) + w_3 g(\xi_3)$

3.  **Evaluate $g(\xi)$ at the nodes:**
    *   $\xi_1 = -\sqrt{\frac{3}{5}}$:
        $g\left(-\sqrt{\frac{3}{5}}\right) = \frac{1}{2} e^{-\frac{1}{2}(-\sqrt{\frac{3}{5}}+1)} = \frac{1}{2} e^{\frac{1}{2}(\sqrt{\frac{3}{5}}-1)}$
        Using $\sqrt{\frac{3}{5}} \approx 0.7746$:
        $g(-0.7746) \approx \frac{1}{2} e^{\frac{1}{2}(0.7746 - 1)} = \frac{1}{2} e^{\frac{1}{2}(-0.2254)} = \frac{1}{2} e^{-0.1127} \approx \frac{1}{2} (0.8933) \approx 0.44665$

    *   $\xi_2 = 0$:
        $g(0) = \frac{1}{2} e^{-\frac{1}{2}(0+1)} = \frac{1}{2} e^{-0.5} \approx \frac{1}{2} (0.60653) \approx 0.30327$

    *   $\xi_3 = \sqrt{\frac{3}{5}}$:
        $g\left(\sqrt{\frac{3}{5}}\right) = \frac{1}{2} e^{-\frac{1}{2}(\sqrt{\frac{3}{5}}+1)} = \frac{1}{2} e^{-\frac{1}{2}(\sqrt{\frac{3}{5}}+1)}$
        Using $\sqrt{\frac{3}{5}} \approx 0.7746$:
        $g(0.7746) \approx \frac{1}{2} e^{-\frac{1}{2}(0.7746 + 1)} = \frac{1}{2} e^{-\frac{1}{2}(1.7746)} = \frac{1}{2} e^{-0.8873} \approx \frac{1}{2} (0.41173) \approx 0.20587$

4.  **Calculate the integral approximation:**
    *   Integral $\approx w_1 g(\xi_1) + w_2 g(\xi_2) + w_3 g(\xi_3)$
    *   Integral $\approx (0.55556 \times 0.44665) + (0.88889 \times 0.30327) + (0.55556 \times 0.20587)$
    *   Integral $\approx 0.24816 + 0.26957 + 0.11443 \approx 0.63216$

**Analytical Solution:**
$\int_{0}^{1} e^{-x} dx = \left[-e^{-x}\right]_0^1 = -e^{-1} - (-e^0) = 1 - e^{-1} \approx 1 - 0.36788 \approx 0.63212$

**Conclusion:** Gauss-Legendre Quadrature with $n=3$ provides a very accurate approximation for $\int_{0}^{1} e^{-x} dx$ with only 3 function evaluations.

### Error Analysis for Gauss Quadrature

The error in Gauss Quadrature is generally much smaller than that of Newton-Cotes formulas for the same number of points. For Gauss-Legendre Quadrature, the error term is often expressed as:

$$
E = \frac{(b-a)^{2n+1} (n!)^2}{(2n+1)! ((2n+1)!!)^2} f^{(2n)}(\eta)
$$

where $\eta$ is some value within the interval $[a, b]$.

**Key Insight:** The error depends on the $(2n)$-th derivative of the function. This explains why Gauss Quadrature is exact for polynomials up to degree $2n-1$, as the $(2n)$-th derivative of such a polynomial is zero.

**Comparison:** For the same number of points ($n$), Gauss Quadrature is exact for polynomials of degree $2n-1$, while Newton-Cotes formulas (like Simpson's Rule) are exact for polynomials of degree at most $2n-1$ (for Simpson's 1/3 rule, $n=3$ points, exact for cubic) or $2n-2$ (for Trapezoidal rule, $n=2$ points, exact for linear).

**Reference Book Reference:**
*   **Conte & De Boor:** Provides in-depth theoretical analysis of error terms for various numerical integration schemes, including Gauss Quadrature.

## Other Gauss Quadrature Variants

While Gauss-Legendre is the most common, other Gauss Quadrature formulas exist for different weight functions and intervals.

*   **Gauss-Hermite Quadrature:** For functions with the weight function $e^{-x^2}$ over the interval $(-\infty, \infty)$. Used for integrals involving the normal distribution.
*   **Gauss-Laguerre Quadrature:** For functions with the weight function $x^k e^{-x}$ over the interval $[0, \infty)$.
*   **Gauss-Chebyshev Quadrature:** For functions with the weight function $\frac{1}{\sqrt{1-x^2}}$ over the interval $[-1, 1]$.

**Relevance to Engineering:** Depending on the physics of the problem, these specialized Gauss Quadratures can be very effective. For instance, in some statistical or signal processing applications, Hermite or Laguerre quadrature might be more suitable.

**Textbook Reference:**
*   **Chapra & Canale:** Might briefly mention these variants or refer the reader to more specialized texts.

## Practical Considerations and Implementation

*   **Tabulated Values:** For practical engineering applications, you will typically use pre-computed tables of Gaussian nodes and weights. Implementing the computation of these nodes (roots of Legendre polynomials) and weights is complex.
*   **Software Libraries:** Most numerical software packages (e.g., MATLAB, SciPy in Python) have built-in functions for Gauss Quadrature, allowing you to specify the number of points and the interval.
*   **Accuracy vs. Effort:** The choice of $n$ depends on the required accuracy and the nature of the integrand. Higher $n$ means higher accuracy but more function evaluations.

**CO Alignment:**
*   **CO2: Implement numerical schemes to fit data (Knowledge Level: K3)** - While Gauss Quadrature is primarily for integration, the concept of using pre-determined nodes and weights is analogous to fitting data with specific basis functions.
*   **CO3: Solve differentiation and integration numerically (Knowledge Level: K3)** - Directly addresses numerical integration.

## Practice Questions

1.  **Concept Check:** What is the main advantage of Gauss Quadrature over Newton-Cotes formulas like the Trapezoidal Rule or Simpson's Rule?
2.  **Calculation:** Evaluate the integral $\int_{0}^{2} x^3 dx$ using Gauss-Legendre Quadrature with $n=2$. Compare your result with the analytical solution.
3.  **Application:** Consider the integral $\int_{-1}^{1} \cos(x) dx$.
    *   a) Calculate the exact value of the integral.
    *   b) Approximate the integral using Gauss-Legendre Quadrature with $n=3$.
    *   c) Calculate the percentage error of your approximation.
4.  **Conceptual:** For a function $f(x)$, when would you choose to use Gauss-Legendre Quadrature with $n=5$ over $n=3$? What are the trade-offs?
5.  **Transformation:** Show the steps required to transform the integral $\int_{a}^{b} f(x) dx$ into the standard form $\int_{-1}^{1} g(\xi) d\xi$.

---

## Answers to Practice Questions

1.  **Concept Check:** The main advantage of Gauss Quadrature is its ability to achieve a higher order of accuracy for a given number of function evaluations by using optimally chosen, non-uniformly spaced nodes and corresponding weights. For $n$ points, it's exact for polynomials of degree $2n-1$, whereas Newton-Cotes rules are exact for much lower degrees for the same number of points.

2.  **Calculation:** Evaluate $\int_{0}^{2} x^3 dx$ using Gauss-Legendre Quadrature with $n=2$.
    *   **Interval Transformation:**
        *   $a = 0$, $b = 2$.
        *   $x = \frac{2-0}{2} \xi + \frac{0+2}{2} = \xi + 1$
        *   $dx = d\xi$
        *   $f(x) = x^3$
        *   $g(\xi) = f(\xi+1) \cdot 1 = (\xi+1)^3 = \xi^3 + 3\xi^2 + 3\xi + 1$
    *   **Gauss-Legendre ($n=2$):**
        *   Nodes: $\xi_1 = -\frac{1}{\sqrt{3}}$, $\xi_2 = \frac{1}{\sqrt{3}}$
        *   Weights: $w_1 = 1$, $w_2 = 1$
        *   Integral $\approx w_1 g(\xi_1) + w_2 g(\xi_2)$
    *   **Evaluate $g(\xi)$:**
        *   $g\left(-\frac{1}{\sqrt{3}}\right) = \left(-\frac{1}{\sqrt{3}}\right)^3 + 3\left(-\frac{1}{\sqrt{3}}\right)^2 + 3\left(-\frac{1}{\sqrt{3}}\right) + 1$
            $= -\frac{1}{3\sqrt{3}} + 3\left(\frac{1}{3}\right) - \frac{3}{\sqrt{3}} + 1$
            $= -\frac{\sqrt{3}}{9} + 1 - \sqrt{3} + 1 = 2 - \frac{10\sqrt{3}}{9}$
        *   $g\left(\frac{1}{\sqrt{3}}\right) = \left(\frac{1}{\sqrt{3}}\right)^3 + 3\left(\frac{1}{\sqrt{3}}\right)^2 + 3\left(\frac{1}{\sqrt{3}}\right) + 1$
            $= \frac{1}{3\sqrt{3}} + 3\left(\frac{1}{3}\right) + \frac{3}{\sqrt{3}} + 1$
            $= \frac{\sqrt{3}}{9} + 1 + \sqrt{3} + 1 = 2 + \frac{10\sqrt{3}}{9}$
    *   **Approximation:**
        *   Integral $\approx 1 \cdot \left(2 - \frac{10\sqrt{3}}{9}\right) + 1 \cdot \left(2 + \frac{10\sqrt{3}}{9}\right) = 4$
    *   **Analytical Solution:**
        *   $\int_{0}^{2} x^3 dx = \left[\frac{x^4}{4}\right]_0^2 = \frac{2^4}{4} - \frac{0^4}{4} = \frac{16}{4} = 4$.
    *   **Result:** Gauss-Legendre Quadrature with $n=2$ gives the exact result. This is expected because $x^3$ is a polynomial of degree 3, and $n=2$ Gauss-Legendre is exact for polynomials up to degree $2(2)-1=3$.

3.  **Application:** $\int_{-1}^{1} \cos(x) dx$.
    *   a) **Exact Value:** $\int_{-1}^{1} \cos(x) dx = [\sin(x)]_{-1}^{1} = \sin(1) - \sin(-1) = \sin(1) - (-\sin(1)) = 2\sin(1)$.
        Using a calculator, $2\sin(1) \approx 2 \times 0.84147 = 1.68294$.
    *   b) **Gauss-Legendre ($n=3$):** The interval is already $[-1, 1]$, so no transformation is needed.
        *   Nodes: $\xi_1 = -\sqrt{\frac{3}{5}}$, $\xi_2 = 0$, $\xi_3 = \sqrt{\frac{3}{5}}$
        *   Weights: $w_1 = \frac{5}{9}$, $w_2 = \frac{8}{9}$, $w_3 = \frac{5}{9}$
        *   Function: $f(x) = \cos(x)$.
        *   Integral $\approx w_1 f(\xi_1) + w_2 f(\xi_2) + w_3 f(\xi_3)$
        *   Integral $\approx \frac{5}{9} \cos\left(-\sqrt{\frac{3}{5}}\right) + \frac{8}{9} \cos(0) + \frac{5}{9} \cos\left(\sqrt{\frac{3}{5}}\right)$
        *   Since $\cos(x)$ is an even function, $\cos(-\sqrt{3/5}) = \cos(\sqrt{3/5})$.
        *   Integral $\approx \frac{5}{9} \cos\left(\sqrt{\frac{3}{5}}\right) + \frac{8}{9} (1) + \frac{5}{9} \cos\left(\sqrt{\frac{3}{5}}\right)$
        *   Integral $\approx \frac{10}{9} \cos\left(\sqrt{\frac{3}{5}}\right) + \frac{8}{9}$
        *   Using $\sqrt{\frac{3}{5}} \approx 0.7746$:
        *   Integral $\approx \frac{10}{9} \cos(0.7746) + \frac{8}{9}$
        *   $\cos(0.7746) \approx 0.71177$
        *   Integral $\approx \frac{10}{9} (0.71177) + \frac{8}{9} \approx 0.78008 + 0.88889 \approx 1.66897$
    *   c) **Percentage Error:**
        *   Error = $| \text{Approximate} - \text{Exact} | = | 1.66897 - 1.68294 | = 0.01397$
        *   Percentage Error = $\frac{\text{Error}}{|\text{Exact}|} \times 100\% = \frac{0.01397}{1.68294} \times 100\% \approx 0.83\%$

4.  **Conceptual:** You would choose $n=5$ over $n=3$ if you need higher accuracy. Gauss-Legendre with $n=5$ is exact for polynomials of degree $2(5)-1 = 9$, while $n=3$ is exact for polynomials of degree $2(3)-1 = 5$. If the integrand is complex (e.g., has high-order derivatives that are significant), or if you need to reduce the approximation error further, increasing $n$ is beneficial. The trade-off is that $n=5$ requires 5 function evaluations, whereas $n=3$ requires only 3. For functions that are well-behaved and can be approximated by low-degree polynomials, $n=3$ might be sufficient and more efficient.

5.  **Transformation:** To transform the integral $\int_{a}^{b} f(x) dx$ into the standard form $\int_{-1}^{1} g(\xi) d\xi$, we use a linear change of variables. Let $\xi$ be the new variable in the interval $[-1, 1]$ and $x$ be the original variable in the interval $[a, b]$. The relationship is:
    *   $x = m \xi + c$
    *   When $\xi = -1$, $x = a \implies a = m(-1) + c \implies a = -m + c$
    *   When $\xi = 1$, $x = b \implies b = m(1) + c \implies b = m + c$
    *   Adding the two equations: $a+b = 2c \implies c = \frac{a+b}{2}$
    *   Subtracting the first from the second: $b-a = 2m \implies m = \frac{b-a}{2}$
    *   So, the transformation for $x$ is: $x = \frac{b-a}{2} \xi + \frac{a+b}{2}$.
    *   To change the differential $dx$, we differentiate with respect to $\xi$:
        $\frac{dx}{d\xi} = \frac{b-a}{2}$
        $dx = \frac{b-a}{2} d\xi$
    *   Now substitute $x$ and $dx$ into the original integral:
        $\int_{a}^{b} f(x) dx = \int_{-1}^{1} f\left(\frac{b-a}{2} \xi + \frac{a+b}{2}\right) \frac{b-a}{2} d\xi$
    *   Define the new integrand $g(\xi) = f\left(\frac{b-a}{2} \xi + \frac{a+b}{2}\right) \frac{b-a}{2}$.
    *   The integral becomes: $\int_{-1}^{1} g(\xi) d\xi$.

---

## Important Points to Remember

*   **Accuracy:** Gauss Quadrature provides higher accuracy for a given number of function evaluations compared to most Newton-Cotes methods.
*   **Optimal Nodes:** The key is that the integration nodes (abscissas) are not fixed in advance but are chosen optimally as roots of orthogonal polynomials (like Legendre polynomials for Gauss-Legendre).
*   **Interval Transformation:** Always transform the integration interval $[a, b]$ to the standard interval $[-1, 1]$ using the derived linear transformation before applying Gauss-Legendre Quadrature.
*   **Tabulated Values:** Rely on pre-computed tables for Gaussian nodes and weights, as their calculation is non-trivial.
*   **Degree of Exactness:** For $n$ points, Gauss Quadrature is exact for polynomials of degree up to $2n-1$.
*   **Error:** The error term involves higher-order derivatives of the function, making it small when the higher-order derivatives are not excessively large.

This comprehensive set of notes covers the theory, application, and practical aspects of Gauss Quadrature within the context of numerical integration in engineering.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
