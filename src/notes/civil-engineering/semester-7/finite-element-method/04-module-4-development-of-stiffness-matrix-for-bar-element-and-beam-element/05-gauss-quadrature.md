---
title: "Gauss quadrature."
subject: "FINITE ELEMENT METHOD"
module: "Module 4: Development of stiffness matrix for bar element and beam element"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba8116e0"
status: "completed"
scrapedAt: "2026-05-20T18:59:04.763Z"
---
# Finite Element Method: Module 4 - Stiffness Matrix for Bar and Beam Elements

## Topic: Gaussian Quadrature

This module focuses on the development of stiffness matrices for basic structural elements: the bar element and the beam element. Gaussian Quadrature is a numerical integration technique crucial for accurately calculating integrals that arise in the derivation of these stiffness matrices, particularly when dealing with complex material properties or non-uniform cross-sections.

### 1. Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the need for numerical integration in FEM.
*   Explain the concept of Gaussian Quadrature and its advantages.
*   Define Gaussian points and weights.
*   Apply Gaussian Quadrature to approximate definite integrals.
*   Recognize how Gaussian Quadrature is used in the derivation of element stiffness matrices.

### 2. Introduction to Numerical Integration in FEM

In FEM, we often need to evaluate integrals of the form:

$$
\int_a^b f(x) dx
$$

These integrals arise when:

*   Calculating element properties (e.g., area, volume, moment of inertia).
*   Deriving stiffness matrices using the principle of virtual work or minimization of potential energy, which involves integrating over the element domain.
*   Applying non-uniform material properties or boundary conditions.

**Why is numerical integration necessary?**

*   **Analytically Intractable Integrals:** Many integrals encountered in FEM, especially with complex shape functions or material properties, cannot be solved analytically in a closed form.
*   **Computational Efficiency:** Even for analytically solvable integrals, direct analytical integration can be computationally expensive and time-consuming, especially when performed for thousands or millions of elements. Numerical methods offer a faster and more efficient approach.

### 3. What is Gaussian Quadrature?

Gaussian Quadrature is a **composite numerical integration technique** that approximates a definite integral by evaluating a weighted sum of the integrand at specific points within the integration interval. It's particularly effective because it can achieve high accuracy with a small number of evaluation points.

**The Core Idea:**

Instead of using uniformly spaced points (like in the Trapezoidal Rule or Simpson's Rule), Gaussian Quadrature strategically chooses **non-uniform points** (called **Gaussian points** or **abscissas**) and associated **weights** to minimize the error in the approximation.

### 4. The General Formula of Gaussian Quadrature

For an integral over the interval $[-1, 1]$ (which is a standard form, and other intervals can be mapped to this), Gaussian Quadrature approximates the integral as:

$$
\int_{-1}^{1} f(x) dx \approx \sum_{i=1}^{n} w_i f(x_i)
$$

Where:

*   $n$: The **order** of the quadrature (the number of points used).
*   $x_i$: The **Gaussian points** or **abscissas** within the interval $[-1, 1]$.
*   $w_i$: The corresponding **Gaussian weights**.

**Mapping to Other Intervals:**

If we need to integrate over an interval $[a, b]$, we first perform a **change of variables** to map $[a, b]$ to $[-1, 1]$. Let $x$ be the variable in $[a, b]$ and $\xi$ be the variable in $[-1, 1]$. The relationship is:

$$
x = \frac{b-a}{2}\xi + \frac{a+b}{2}
$$

Then, $dx = \frac{b-a}{2} d\xi$. The integral becomes:

$$
\int_a^b f(x) dx = \int_{-1}^{1} f\left(\frac{b-a}{2}\xi + \frac{a+b}{2}\right) \frac{b-a}{2} d\xi
$$

Applying Gaussian Quadrature to this transformed integral:

$$
\int_a^b f(x) dx \approx \sum_{i=1}^{n} w_i f\left(\frac{b-a}{2}\xi_i + \frac{a+b}{2}\right) \frac{b-a}{2}
$$

### 5. Gaussian Points and Weights

The key to Gaussian Quadrature's accuracy lies in the specific selection of $x_i$ and $w_i$. These are determined by requiring the quadrature formula to be exact for polynomial integrands up to a certain degree.

**How are they derived?**

The Gaussian points $x_i$ are the roots of the **Legendre polynomials**, $P_n(x)$, of degree $n$. The weights $w_i$ are derived from these roots.

**Common Orders of Gaussian Quadrature:**

*   **One-Point Gaussian Quadrature (n=1):**
    *   Gaussian point: $x_1 = 0$
    *   Weight: $w_1 = 2$
    *   Approximation: $\int_{-1}^{1} f(x) dx \approx 2 f(0)$
    *   *Exact for linear functions.*

*   **Two-Point Gaussian Quadrature (n=2):**
    *   Gaussian points: $x_1 = -\frac{1}{\sqrt{3}}$, $x_2 = \frac{1}{\sqrt{3}}$
    *   Weights: $w_1 = 1$, $w_2 = 1$
    *   Approximation: $\int_{-1}^{1} f(x) dx \approx 1 \cdot f\left(-\frac{1}{\sqrt{3}}\right) + 1 \cdot f\left(\frac{1}{\sqrt{3}}\right)$
    *   *Exact for polynomials up to degree 3 (cubic).*

*   **Three-Point Gaussian Quadrature (n=3):**
    *   Gaussian points: $x_1 = -\sqrt{\frac{3}{5}}$, $x_2 = 0$, $x_3 = \sqrt{\frac{3}{5}}$
    *   Weights: $w_1 = \frac{5}{9}$, $w_2 = \frac{8}{9}$, $w_3 = \frac{5}{9}$
    *   Approximation: $\int_{-1}^{1} f(x) dx \approx \frac{5}{9} f\left(-\sqrt{\frac{3}{5}}\right) + \frac{8}{9} f(0) + \frac{5}{9} f\left(\sqrt{\frac{3}{5}}\right)$
    *   *Exact for polynomials up to degree 5 (quintic).*

**Table of Gaussian Points and Weights (for interval [-1, 1]):**

| Order (n) | Gaussian Points ($x_i$)                                  | Weights ($w_i$)                                   | Exact for Polynomials up to Degree |
| :-------- | :--------------------------------------------------------- | :------------------------------------------------ | :--------------------------------- |
| 1         | $0$                                                        | $2$                                               | 1                                  |
| 2         | $-\frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}$                  | $1, 1$                                            | 3                                  |
| 3         | $-\sqrt{\frac{3}{5}}, 0, \sqrt{\frac{3}{5}}$               | $\frac{5}{9}, \frac{8}{9}, \frac{5}{9}$           | 5                                  |
| 4         | $\pm\sqrt{\frac{3}{7} \pm \frac{2\sqrt{21}}{7}}$ (approx $\pm 0.340, \pm 0.861$) | $\frac{1}{2}(1 \mp \frac{1}{3}\sqrt{\frac{3}{7}})$ (approx $0.347, 0.653$) | 7                                  |

**Important Note:** For most FEM applications, especially with standard polynomial shape functions for bar and beam elements, **two-point Gaussian Quadrature is usually sufficient** and commonly used. Higher orders might be needed for complex integrands or highly distorted elements.

### 6. Advantages of Gaussian Quadrature

*   **High Accuracy:** Achieves a higher order of accuracy for a given number of integration points compared to other methods like the Trapezoidal rule or Simpson's rule.
*   **Efficiency:** Requires fewer function evaluations for the same accuracy, making it computationally efficient.
*   **Polynomial Exactness:** Guaranteed to be exact for polynomials up to a certain degree, which is beneficial when dealing with polynomial shape functions.

### 7. Application in Stiffness Matrix Development

Let's consider the derivation of the stiffness matrix for a bar element. The stiffness matrix is often derived using the principle of virtual work or by minimizing the potential energy. This involves integrals over the element length.

For a 1D bar element of length $L$, the stiffness matrix $k$ is given by:

$$
k = \int_0^L EA(x) \left(\frac{d\mathbf{N}}{dx}\right)^T \left(\frac{d\mathbf{N}}{dx}\right) dx
$$

Where:
*   $E$ is the Young's modulus.
*   $A(x)$ is the cross-sectional area, which can vary along the length.
*   $\mathbf{N}$ are the shape functions.
*   $\frac{d\mathbf{N}}{dx}$ are the derivatives of the shape functions.

**Example: Uniform Bar Element**

For a uniform bar element (constant $E$ and $A$), the integral becomes:

$$
k = EA \int_0^L \left(\frac{d\mathbf{N}}{dx}\right)^T \left(\frac{d\mathbf{N}}{dx}\right) dx
$$

Using linear shape functions for a bar element $\mathbf{N}(x) = [1 - x/L, x/L]$:
$\frac{d\mathbf{N}}{dx} = [-1/L, 1/L]$

The integral is $\int_0^L \frac{1}{L^2} \begin{bmatrix} -1 \\ 1 \end{bmatrix} \begin{bmatrix} -1 & 1 \end{bmatrix} dx = \frac{1}{L^2} \int_0^L \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} dx$.

This integral is analytically solvable and results in the standard stiffness matrix:
$$
k = \frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}
$$

**Example: Non-Uniform Bar Element (Variable Area A(x))**

If the cross-sectional area $A(x)$ varies along the length (e.g., tapered bar), the integral is:

$$
k = \int_0^L EA(x) \frac{1}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} dx = \frac{E}{L^2} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix} \int_0^L A(x) dx
$$

In this case, we need to evaluate $\int_0^L A(x) dx$. If $A(x)$ is a complex function (e.g., quadratic, exponential), analytical integration might be difficult. This is where Gaussian Quadrature comes in.

**Applying Gaussian Quadrature to the Non-Uniform Bar Example:**

1.  **Map the interval:** $[0, L]$ to $[-1, 1]$ using $x = \frac{L}{2}\xi + \frac{L}{2}$. So $dx = \frac{L}{2}d\xi$.
2.  **Transform the integral:**
    $$
    \int_0^L A(x) dx = \int_{-1}^{1} A\left(\frac{L}{2}\xi + \frac{L}{2}\right) \frac{L}{2} d\xi
    $$
3.  **Apply Gaussian Quadrature (e.g., 2-point):**
    $$
    \int_{-1}^{1} A\left(\frac{L}{2}\xi + \frac{L}{2}\right) \frac{L}{2} d\xi \approx \sum_{i=1}^{2} w_i \left[A\left(\frac{L}{2}\xi_i + \frac{L}{2}\right) \frac{L}{2}\right]
    $$
    With $n=2$, $\xi_1 = -1/\sqrt{3}$, $\xi_2 = 1/\sqrt{3}$, $w_1=1$, $w_2=1$:
    $$
    \approx 1 \cdot \left[A\left(\frac{L}{2}\left(-\frac{1}{\sqrt{3}}\right) + \frac{L}{2}\right) \frac{L}{2}\right] + 1 \cdot \left[A\left(\frac{L}{2}\left(\frac{1}{\sqrt{3}}\right) + \frac{L}{2}\right) \frac{L}{2}\right]
    $$
    This gives an approximate value for $\int_0^L A(x) dx$. This value is then used in the stiffness matrix calculation.

**Beam Elements:**

Beam elements involve more complex shape functions (cubic for displacement and rotation) and integrals of higher-order polynomials, often involving the product of shape function derivatives and the Young's modulus and moment of inertia ($EI(x)$). Gaussian Quadrature is indispensable for accurately evaluating these integrals, especially when $E$ or $I$ are not constant.

For a beam element, terms like $\int_0^L EI(x) \left(\frac{d^2 N_i}{dx^2}\right) \left(\frac{d^2 N_j}{dx^2}\right) dx$ appear in the stiffness matrix. If $EI(x)$ varies, Gaussian Quadrature is used to approximate this integral.

### 8. Practice Questions and Exercises

**Question 1:**
Approximate the integral $\int_{-1}^{1} x^3 dx$ using:
a) One-point Gaussian Quadrature.
b) Two-point Gaussian Quadrature.
c) Compare your results with the exact analytical solution.

**Answer 1:**
Exact solution: $\int_{-1}^{1} x^3 dx = \left[\frac{x^4}{4}\right]_{-1}^{1} = \frac{1^4}{4} - \frac{(-1)^4}{4} = \frac{1}{4} - \frac{1}{4} = 0$.

a) One-point Gaussian Quadrature ($n=1$):
   $x_1 = 0$, $w_1 = 2$
   $\int_{-1}^{1} x^3 dx \approx w_1 f(x_1) = 2 \cdot (0)^3 = 0$.
   *This is exact because the integrand is odd and the interval is symmetric around 0.*

b) Two-point Gaussian Quadrature ($n=2$):
   $x_1 = -1/\sqrt{3}$, $x_2 = 1/\sqrt{3}$, $w_1 = 1$, $w_2 = 1$
   $\int_{-1}^{1} x^3 dx \approx w_1 f(x_1) + w_2 f(x_2) = 1 \cdot (-1/\sqrt{3})^3 + 1 \cdot (1/\sqrt{3})^3$
   $= 1 \cdot (-1/(3\sqrt{3})) + 1 \cdot (1/(3\sqrt{3})) = -\frac{1}{3\sqrt{3}} + \frac{1}{3\sqrt{3}} = 0$.
   *This is exact because two-point Gaussian Quadrature is exact for polynomials up to degree 3.*

**Question 2:**
A bar element has a linearly varying cross-sectional area given by $A(x) = A_0 (1 + \frac{x}{L})$, where $x$ is measured from the left end and $L$ is the element length. Derive the integral term $\int_0^L A(x) dx$ using two-point Gaussian Quadrature.

**Answer 2:**
We need to approximate $\int_0^L A_0 (1 + \frac{x}{L}) dx$.
Map interval $[0, L]$ to $[-1, 1]$: $x = \frac{L}{2}\xi + \frac{L}{2}$, $dx = \frac{L}{2}d\xi$.
The integral becomes: $\int_{-1}^{1} A_0 \left(1 + \frac{\frac{L}{2}\xi + \frac{L}{2}}{L}\right) \frac{L}{2} d\xi$
$= \int_{-1}^{1} A_0 \left(1 + \frac{\xi}{2} + \frac{1}{2}\right) \frac{L}{2} d\xi$
$= \int_{-1}^{1} A_0 \left(\frac{3}{2} + \frac{\xi}{2}\right) \frac{L}{2} d\xi$
$= \frac{A_0 L}{2} \int_{-1}^{1} \left(\frac{3}{2} + \frac{\xi}{2}\right) d\xi$

Using two-point Gaussian Quadrature ($n=2$, $x_1 = -1/\sqrt{3}$, $x_2 = 1/\sqrt{3}$, $w_1 = 1$, $w_2 = 1$):
Approximation $= \frac{A_0 L}{2} \left[ w_1 \left(\frac{3}{2} + \frac{\xi_1}{2}\right) + w_2 \left(\frac{3}{2} + \frac{\xi_2}{2}\right) \right]$
$= \frac{A_0 L}{2} \left[ 1 \cdot \left(\frac{3}{2} + \frac{-1/\sqrt{3}}{2}\right) + 1 \cdot \left(\frac{3}{2} + \frac{1/\sqrt{3}}{2}\right) \right]$
$= \frac{A_0 L}{2} \left[ \frac{3}{2} - \frac{1}{2\sqrt{3}} + \frac{3}{2} + \frac{1}{2\sqrt{3}} \right]$
$= \frac{A_0 L}{2} \left[ 3 \right] = \frac{3}{2} A_0 L$

**Check with exact solution:**
$\int_0^L A_0 (1 + \frac{x}{L}) dx = A_0 \int_0^L (1 + \frac{x}{L}) dx = A_0 \left[ x + \frac{x^2}{2L} \right]_0^L = A_0 \left( L + \frac{L^2}{2L} \right) = A_0 \left( L + \frac{L}{2} \right) = \frac{3}{2} A_0 L$.
*The two-point Gaussian Quadrature gives the exact result because the integrand, after transformation, is a linear function of $\xi$.*

### 9. Important Points to Remember

*   **Numerical Integration is Essential:** Used when analytical integration is difficult or impossible.
*   **Gaussian Quadrature is Efficient:** Provides higher accuracy with fewer points than other methods.
*   **Standard Interval:** Gaussian Quadrature is typically defined for the interval $[-1, 1]$.
*   **Mapping is Key:** Always map your integration interval to $[-1, 1]$ using a change of variables.
*   **Legendre Polynomials:** Gaussian points are roots of Legendre polynomials.
*   **Two-Point Gaussian Quadrature:** Most commonly used in introductory FEM for bar and beam elements as it's exact for cubic polynomials.
*   **Higher Orders:** For complex material properties or shape functions, higher-order Gaussian Quadrature might be necessary.
*   **Impact on Stiffness Matrix:** Gaussian Quadrature's accuracy directly affects the accuracy of the element stiffness matrices and, consequently, the entire FEM solution.
