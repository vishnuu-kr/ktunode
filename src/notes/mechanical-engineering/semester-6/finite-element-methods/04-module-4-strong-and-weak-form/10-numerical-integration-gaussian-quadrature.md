---
title: "Numerical integration: Gaussian quadrature"
subject: "FINITE ELEMENT METHODS"
module: "Module 4: Strong and Weak form"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446385e"
status: "completed"
scrapedAt: "2026-05-20T18:04:12.479Z"
---
## FINITE ELEMENT METHODS - Module 4: Strong and Weak Form

### Topic: Numerical Integration: Gaussian Quadrature

**Introduction:**

In the Finite Element Method (FEM), we often need to evaluate integrals that arise from the weak form of the governing differential equations. These integrals can be complex and may not have closed-form analytical solutions, especially when dealing with complex geometries or material properties. Numerical integration techniques are employed to approximate these integrals. Gaussian Quadrature is a powerful and widely used numerical integration method in FEM due to its accuracy and efficiency.

**Learning Outcomes Addressed:**

*   **Understanding the need for numerical integration:** While not explicitly stated as a learning outcome for *this specific topic*, understanding numerical integration is fundamental to the practical application of FEM, which is indirectly related to CO1.
*   **Application of numerical integration in FEM:** Gaussian quadrature is a core technique used in the evaluation of element matrices (stiffness, mass, force vectors), which is essential for CO3, CO4, and CO5.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Understanding the basic procedure of FEM involves recognizing the need to evaluate integrals. This topic contributes to that understanding by introducing a key tool for that evaluation.
*   **CO3 (K4):** Formulating shape functions and element strain-displacement matrices involves integrating terms derived from these functions. Gaussian quadrature is the standard method for performing these integrations accurately.
*   **CO4 (K5):** Evaluating element stress using energy methods and studying Galerkin weighted residual formulations involve complex integrals, often requiring Gaussian quadrature for their computation.
*   **CO5 (K4):** Analyzing isoparametric formulations inherently involves integrating functions defined on a parent domain, making Gaussian quadrature indispensable.

---

### 1. The Need for Numerical Integration in FEM

The weak form of the governing differential equations in FEM leads to the assembly of element matrices (e.g., stiffness matrix $k^e$, mass matrix $m^e$, force vector $f^e$). These matrices are typically computed by integrating over the element domain. The general form of these integrals is:

$$
I = \int_{\Omega_e} f(x, y, z, \phi, \psi, \dots) d\Omega
$$

where:
*   $\Omega_e$ is the element domain.
*   $f$ is the integrand, which can be a complex function involving basis functions ($\phi$, $\psi$, etc.), their derivatives, material properties, and the spatial coordinates.

**Challenges in Analytical Integration:**

1.  **Complex Integrands:** The integrands often involve products of shape functions, their derivatives, and sometimes the Jacobian of the coordinate transformation, making analytical integration difficult or impossible.
2.  **Non-Polynomial Integrands:** While shape functions are typically polynomial, the Jacobian or material properties might introduce non-polynomial terms.
3.  **Coordinate Transformations:** For elements in a global coordinate system, we often map them to a simpler parent (or reference) domain (e.g., a square or a triangle) for integration. This transformation involves the Jacobian determinant, further complicating the integrand.

**Example:** Consider the stiffness matrix for a 1D bar element with varying cross-sectional area $A(x)$ and Young's modulus $E(x)$:

$$
k^e = \int_{0}^{L} E(x) A(x) \left( \frac{dN_i}{dx} \right) \left( \frac{dN_j}{dx} \right) dx
$$

If $E(x)$ or $A(x)$ are not simple constants, this integral can become analytically challenging.

---

### 2. Numerical Integration: Newton-Cotes Quadrature (Brief Overview)

Newton-Cotes quadrature rules approximate an integral by evaluating the integrand at equally spaced points. They are simple but can be less efficient for achieving high accuracy.

**Types:**

*   **Midpoint Rule:** Integrates the function at the midpoint of an interval.
*   **Trapezoidal Rule:** Approximates the area under the curve by a trapezoid.
*   **Simpson's Rule:** Uses a quadratic approximation of the integrand.

**Limitation:** Newton-Cotes rules require equally spaced points, which might not be the optimal locations for accuracy. Furthermore, for high-order polynomial approximations, these rules require a large number of points, leading to increased computational cost.

---

### 3. Gaussian Quadrature: The Key to Efficiency and Accuracy

Gaussian Quadrature offers a more efficient and accurate way to approximate definite integrals. The core idea is to choose the **abscissas (evaluation points)** and **weights** optimally, rather than fixing them at equally spaced intervals.

**The Fundamental Principle:**

A Gaussian quadrature rule for an integral of the form $\int_{-1}^{1} f(x) dx$ is given by:

$$
\int_{-1}^{1} f(x) dx \approx \sum_{i=1}^{n} w_i f(x_i)
$$

where:
*   $n$ is the number of **Gaussian points** (or nodes).
*   $w_i$ are the **weights** associated with each point.
*   $x_i$ are the **abscissas** (evaluation points or roots of Legendre polynomials).

**Key Advantages of Gaussian Quadrature:**

*   **Accuracy:** For a given number of evaluation points ($n$), Gaussian quadrature is significantly more accurate than Newton-Cotes rules. It can integrate polynomials of degree up to $2n-1$ exactly.
*   **Efficiency:** Achieves high accuracy with fewer points compared to Newton-Cotes methods. This is crucial for reducing computational cost in FEM, especially for complex 3D elements.

---

### 4. The Parent Domain and Coordinate Transformation

In FEM, we typically work with a **parent domain** or **reference element** which has simple coordinates, usually ranging from -1 to 1 in each dimension. Integration is performed on this parent domain, and the results are then mapped back to the physical element.

**1D Parent Domain:** $[-1, 1]$
**2D Parent Domain:** $[-1, 1] \times [-1, 1]$ (a square)
**3D Parent Domain:** $[-1, 1] \times [-1, 1] \times [-1, 1]$ (a cube)

To integrate over a physical element $\Omega_e$, we use a coordinate transformation from the parent domain $\xi \in [-1, 1]$ to the physical domain $x$.

**1D Transformation:**
$$
x = x_a + \frac{x_b - x_a}{2} \xi
$$
where $x_a$ and $x_b$ are the coordinates of the element's endpoints. The differential is:
$$
dx = \frac{x_b - x_a}{2} d\xi
$$

The integral in the physical domain becomes:
$$
\int_{x_a}^{x_b} f(x) dx = \int_{-1}^{1} f\left(x(\xi)\right) \frac{x_b - x_a}{2} d\xi
$$

The term $\frac{x_b - x_a}{2}$ is the **Jacobian determinant** for the 1D case, often denoted as $J$ or $|J|$.

**2D Transformation (Isoparametric Mapping):**
In 2D, the transformation from parent coordinates $(\xi, \eta)$ to physical coordinates $(x, y)$ is typically done using shape functions:
$$
x = \sum_{k=1}^{n_{nodes}} N_k(\xi, \eta) x_k
$$
$$
y = \sum_{k=1}^{n_{nodes}} N_k(\xi, \eta) y_k
$$
where $x_k, y_k$ are the global coordinates of the element's nodes.

The integral in the physical domain is related to the integral in the parent domain by the Jacobian determinant $J$:
$$
\int_{\Omega_e} f(x, y) dx dy = \int_{-1}^{1} \int_{-1}^{1} f(x(\xi, \eta), y(\xi, \eta)) |J| d\xi d\eta
$$
where $|J|$ is the determinant of the Jacobian matrix:
$$
J = \det \begin{bmatrix} \frac{\partial x}{\partial \xi} & \frac{\partial x}{\partial \eta} \\ \frac{\partial y}{\partial \xi} & \frac{\partial y}{\partial \eta} \end{bmatrix}
$$

**Gaussian Quadrature on the Parent Domain:**

The integral on the parent domain is then approximated using Gaussian quadrature:

$$
\int_{-1}^{1} \int_{-1}^{1} f(x(\xi, \eta), y(\xi, \eta)) |J| d\xi d\eta \approx \sum_{i=1}^{n} \sum_{j=1}^{m} w_i w_j f(x(\xi_i, \eta_j), y(\xi_i, \eta_j)) |J|_{\xi_i, \eta_j}
$$

For square parent domains and achieving the same order of accuracy in both directions, we typically use $n=m$.

---

### 5. Legendre Polynomials and Gaussian Quadrature Points

The abscissas ($x_i$) for Gaussian quadrature are the roots of the **Legendre polynomials**. Legendre polynomials $P_n(x)$ are a sequence of orthogonal polynomials.

*   $P_0(x) = 1$
*   $P_1(x) = x$
*   $P_2(x) = \frac{1}{2}(3x^2 - 1)$
*   $P_3(x) = \frac{1}{2}(5x^3 - 3x)$
*   $P_4(x) = \frac{1}{8}(35x^4 - 30x^2 + 3)$

**Properties Relevant to Gaussian Quadrature:**

*   $P_n(x)$ has $n$ distinct real roots in the interval $[-1, 1]$.
*   The roots of $P_n(x)$ are the abscissas for an $n$-point Gaussian quadrature rule.
*   These roots are symmetrically distributed around zero.

**Weights:** The weights ($w_i$) are also derived from the Legendre polynomials and are related to the integral of the associated Lagrange interpolation polynomials.

---

### 6. Common Gaussian Quadrature Rules

Here are some commonly used Gaussian quadrature rules for the interval $[-1, 1]$:

**1. One-Point Gaussian Quadrature (n=1):**
*   Integrates polynomials of degree up to $2(1)-1 = 1$ exactly.
*   Abscissa: $x_1 = 0$
*   Weight: $w_1 = 2$
*   Approximation: $\int_{-1}^{1} f(x) dx \approx 2 f(0)$

**2. Two-Point Gaussian Quadrature (n=2):**
*   Integrates polynomials of degree up to $2(2)-1 = 3$ exactly.
*   Abscissas: $x_1 = -1/\sqrt{3} \approx -0.577$, $x_2 = 1/\sqrt{3} \approx 0.577$
*   Weights: $w_1 = 1$, $w_2 = 1$
*   Approximation: $\int_{-1}^{1} f(x) dx \approx f(-1/\sqrt{3}) + f(1/\sqrt{3})$

**3. Three-Point Gaussian Quadrature (n=3):**
*   Integrates polynomials of degree up to $2(3)-1 = 5$ exacty.
*   Abscissas: $x_1 = -\sqrt{3/5} \approx -0.775$, $x_2 = 0$, $x_3 = \sqrt{3/5} \approx 0.775$
*   Weights: $w_1 = 5/9$, $w_2 = 8/9$, $w_3 = 5/9$
*   Approximation: $\int_{-1}^{1} f(x) dx \approx \frac{5}{9} f(-\sqrt{3/5}) + \frac{8}{9} f(0) + \frac{5}{9} f(\sqrt{3/5})$

**Table of Gaussian Quadrature Points and Weights (Commonly Used):**

| n (Number of Points) | Abscissas ($x_i$)      | Weights ($w_i$)       | Max Polynomial Degree Integrated Exactly |
| :------------------- | :--------------------- | :-------------------- | :--------------------------------------- |
| 1                    | 0                      | 2                     | 1                                        |
| 2                    | $\pm 0.57735$          | 1                     | 3                                        |
| 3                    | $0, \pm 0.77460$       | $8/9, 5/9$            | 5                                        |
| 4                    | $\pm 0.33998, \pm 0.86114$ | $0.65215, 0.34785$    | 7                                        |

*Note: The values are approximate for higher-order rules.*

**2D Gaussian Quadrature (Square Domain):**
For a 2D integral $\int_{-1}^{1} \int_{-1}^{1} f(\xi, \eta) d\xi d\eta$:

*   **Two-Point Quadrature (2x2):** Uses 4 points.
    $$
    \sum_{i=1}^{2} \sum_{j=1}^{2} w_i w_j f(\xi_i, \eta_j)
    $$
    The points are $(\pm 1/\sqrt{3}, \pm 1/\sqrt{3})$. Since weights are 1, it becomes:
    $$
    f(-1/\sqrt{3}, -1/\sqrt{3}) + f(1/\sqrt{3}, -1/\sqrt{3}) + f(-1/\sqrt{3}, 1/\sqrt{3}) + f(1/\sqrt{3}, 1/\sqrt{3})
    $$
    This rule integrates polynomials of degree up to $2(2)-1 + 2(2)-1 = 3+3 = 6$ exactly if $f$ is separable, and up to degree 3 in each variable. If $f$ is a general function of $\xi$ and $\eta$, it integrates terms like $\xi^a \eta^b$ exactly if $a+b \le 3$.

*   **Three-Point Quadrature (3x3):** Uses 9 points.
    $$
    \sum_{i=1}^{3} \sum_{j=1}^{3} w_i w_j f(\xi_i, \eta_j)
    $$
    This rule integrates polynomials of degree up to 5 in each variable.

---

### 7. Choosing the Number of Gaussian Points

The choice of the number of Gaussian points ($n$) depends on:

*   **Accuracy Requirements:** Higher accuracy requires more points.
*   **Polynomial Order of the Integrand:** If the integrand is a polynomial of degree $k$, using an $n$-point rule where $2n-1 \ge k$ guarantees exact integration.
*   **Element Type and Order:** Higher-order elements or complex mappings might require more points.
*   **Computational Cost:** More points mean more evaluations and thus higher computational cost.

**General Rule of Thumb:**

*   For linear elements (linear shape functions), 2-point Gaussian quadrature is usually sufficient.
*   For quadratic elements (quadratic shape functions), 3-point Gaussian quadrature is generally required.
*   For higher-order elements, the required number of points increases.

**Reference (Cook, Chapter 10.3.3):** Cook discusses the selection of quadrature rules based on the polynomial order of the integrand. For a $p$-node element, the shape functions are of order $p$. The terms in the stiffness matrix often involve products of shape functions and their derivatives. For instance, the derivative of a quadratic shape function is linear. The product of two linear terms would be quadratic. If the Jacobian is also linear, the overall integrand could be cubic. Thus, a 2-point rule might be sufficient for linear elements, while a 3-point rule is often needed for quadratic elements to ensure exact integration of polynomial terms.

**Reference (Reddy, Chapter 5.5):** Reddy emphasizes that the minimum number of points needed for exact integration depends on the maximum degree of the polynomial in the integrand. He suggests that for an $n$-node element, $n$ integration points are often sufficient, but this is a heuristic. The exact requirement comes from the polynomial degree.

**Important Note:** In isoparametric formulations, the Jacobian determinant $|J|$ can be a polynomial in $\xi$ and $\eta$. If the shape functions are of order $p$, the components of the Jacobian can be of order $p-1$ or higher. The integrand can therefore have a higher polynomial degree than just the product of shape functions.

---

### 8. Application in FEM: Calculating Element Matrices

Let's consider calculating the stiffness matrix for a 2D quadrilateral element using isoparametric mapping and Gaussian quadrature.

The stiffness matrix for an element is given by:
$$
k^e = \int_{\Omega_e} B^T D B \, dx dy
$$
where:
*   $B$ is the strain-displacement matrix, which depends on the derivatives of shape functions with respect to $x$ and $y$.
*   $D$ is the material constitutive matrix.

Using the isoparametric transformation and Gaussian quadrature:
$$
k^e \approx \sum_{i=1}^{n} \sum_{j=1}^{m} w_i w_j B^T(x(\xi_i, \eta_j), y(\xi_i, \eta_j)) D B(x(\xi_i, \eta_j), y(\xi_i, \eta_j)) |J|_{\xi_i, \eta_j}
$$

**Steps involved:**

1.  **Choose element type and order:** e.g., 4-node quadrilateral (bilinear) or 8-node quadrilateral (quadratic).
2.  **Choose number of Gaussian points:** e.g., 2x2 for 4-node, 3x3 for 8-node.
3.  **Define shape functions $N_k(\xi, \eta)$** for the parent domain.
4.  **Establish the mapping:**
    $x = \sum N_k x_k$, $y = \sum N_k y_k$.
5.  **Calculate the Jacobian matrix and its determinant $|J|$:**
    $\frac{\partial x}{\partial \xi}, \frac{\partial x}{\partial \eta}, \frac{\partial y}{\partial \xi}, \frac{\partial y}{\partial \eta}$.
    $|J| = \frac{\partial x}{\partial \xi} \frac{\partial y}{\partial \eta} - \frac{\partial x}{\partial \eta} \frac{\partial y}{\partial \xi}$.
6.  **Calculate the derivatives with respect to $x$ and $y$:**
    $\frac{\partial N_k}{\partial x} = \frac{1}{|J|} \left( \frac{\partial N_k}{\partial \xi} \frac{\partial y}{\partial \eta} - \frac{\partial N_k}{\partial \eta} \frac{\partial x}{\partial \eta} \right)$
    $\frac{\partial N_k}{\partial y} = \frac{1}{|J|} \left( \frac{\partial N_k}{\partial \eta} \frac{\partial x}{\partial \xi} - \frac{\partial N_k}{\partial \xi} \frac{\partial x}{\partial \xi} \right)$
7.  **Form the $B$ matrix:**
    $B = \begin{bmatrix} \frac{\partial N_1}{\partial x} & \frac{\partial N_2}{\partial x} & \dots \\ \frac{\partial N_1}{\partial y} & \frac{\partial N_2}{\partial y} & \dots \\ \frac{\partial N_1}{\partial y} + \frac{\partial N_1}{\partial x} & \frac{\partial N_2}{\partial y} + \frac{\partial N_2}{\partial x} & \dots \end{bmatrix}$
8.  **Define the $D$ matrix** based on material properties and the stress/strain state.
9.  **For each Gaussian integration point $(\xi_i, \eta_j)$:**
    *   Calculate $N_k$, $\frac{\partial N_k}{\partial \xi}$, $\frac{\partial N_k}{\partial \eta}$ at $(\xi_i, \eta_j)$.
    *   Calculate $x(\xi_i, \eta_j)$, $y(\xi_i, \eta_j)$.
    *   Calculate $|J|$ at $(\xi_i, \eta_j)$.
    *   Calculate $\frac{\partial N_k}{\partial x}$, $\frac{\partial N_k}{\partial y}$ at $(\xi_i, \eta_j)$ using $|J|$.
    *   Form the $B$ matrix at $(\xi_i, \eta_j)$.
    *   Calculate the integrand: $B^T D B$ at $(\xi_i, \eta_j)$.
    *   Multiply by the weight $w_i w_j$ and $|J|$ at $(\xi_i, \eta_j)$.
10. **Sum up the contributions** from all integration points to get the element matrix.

---

### 9. Practice Questions and Exercises

**Question 1:**
Evaluate the integral $\int_{-1}^{1} (x^3 + 2x^2 - x + 5) dx$ using:
a) One-point Gaussian quadrature.
b) Two-point Gaussian quadrature.
c) Three-point Gaussian quadrature.
d) Compare the results with the exact analytical solution.

**Solution 1:**

The integral is $I = \int_{-1}^{1} (x^3 + 2x^2 - x + 5) dx$.
The exact analytical solution is:
$I = [\frac{x^4}{4} + \frac{2x^3}{3} - \frac{x^2}{2} + 5x]_{-1}^{1}$
$I = (\frac{1}{4} + \frac{2}{3} - \frac{1}{2} + 5) - (\frac{1}{4} - \frac{2}{3} - \frac{1}{2} - 5)$
$I = \frac{2}{3} + 5 - (-\frac{2}{3} - 5) = \frac{4}{3} + 10 = \frac{34}{3} \approx 11.333$

Let $f(x) = x^3 + 2x^2 - x + 5$.

**a) One-point Gaussian quadrature (n=1):**
*   Abscissa: $x_1 = 0$
*   Weight: $w_1 = 2$
*   Approximation: $I \approx w_1 f(x_1) = 2 f(0)$
    $f(0) = 0^3 + 2(0)^2 - 0 + 5 = 5$
    $I \approx 2 \times 5 = 10$

**b) Two-point Gaussian quadrature (n=2):**
*   Abscissas: $x_1 = -1/\sqrt{3}$, $x_2 = 1/\sqrt{3}$
*   Weights: $w_1 = 1$, $w_2 = 1$
*   Approximation: $I \approx w_1 f(x_1) + w_2 f(x_2) = f(-1/\sqrt{3}) + f(1/\sqrt{3})$
    $f(1/\sqrt{3}) = (1/\sqrt{3})^3 + 2(1/\sqrt{3})^2 - (1/\sqrt{3}) + 5 = \frac{1}{3\sqrt{3}} + \frac{2}{3} - \frac{1}{\sqrt{3}} + 5 = \frac{1+2\sqrt{3}}{9} + \frac{17}{3}$
    $f(-1/\sqrt{3}) = (-1/\sqrt{3})^3 + 2(-1/\sqrt{3})^2 - (-1/\sqrt{3}) + 5 = -\frac{1}{3\sqrt{3}} + \frac{2}{3} + \frac{1}{\sqrt{3}} + 5 = \frac{-1+2\sqrt{3}}{9} + \frac{17}{3}$
    $I \approx (\frac{1+2\sqrt{3}}{9} + \frac{17}{3}) + (\frac{-1+2\sqrt{3}}{9} + \frac{17}{3})$
    $I \approx \frac{1+2\sqrt{3}-1+2\sqrt{3}}{9} + \frac{34}{3} = \frac{4\sqrt{3}}{9} + \frac{34}{3} \approx 1.333 + 11.333 = 12.666$

    *Correction: The weights $w_i$ are such that $w_1=1, w_2=1$ for the interval $[-1,1]$ and specific roots. Let's re-evaluate carefully.*

    $f(1/\sqrt{3}) = (1/\sqrt{3})^3 + 2(1/\sqrt{3})^2 - 1/\sqrt{3} + 5 = \frac{1}{3\sqrt{3}} + \frac{2}{3} - \frac{1}{\sqrt{3}} + 5 = \frac{1+2-3}{3\sqrt{3}} + \frac{17}{3} = 0 + \frac{17}{3} = \frac{17}{3}$
    $f(-1/\sqrt{3}) = (-1/\sqrt{3})^3 + 2(-1/\sqrt{3})^2 - (-1/\sqrt{3}) + 5 = -\frac{1}{3\sqrt{3}} + \frac{2}{3} + \frac{1}{\sqrt{3}} + 5 = \frac{-1+3}{3\sqrt{3}} + \frac{17}{3} = \frac{2}{3\sqrt{3}} + \frac{17}{3}$
    $I \approx f(-1/\sqrt{3}) + f(1/\sqrt{3}) = (\frac{2}{3\sqrt{3}} + \frac{17}{3}) + (\frac{17}{3}) = \frac{2}{3\sqrt{3}} + \frac{34}{3} \approx 0.385 + 11.333 = 11.718$

    *Let's re-verify the exact integration for the terms:*
    $\int_{-1}^{1} x^3 dx = 0$
    $\int_{-1}^{1} x^2 dx = [\frac{x^3}{3}]_{-1}^{1} = \frac{1}{3} - (-\frac{1}{3}) = \frac{2}{3}$
    $\int_{-1}^{1} x dx = 0$
    $\int_{-1}^{1} 5 dx = [5x]_{-1}^{1} = 5 - (-5) = 10$
    Exact sum = $0 + 2(\frac{2}{3}) + 0 + 10 = \frac{4}{3} + 10 = \frac{34}{3} \approx 11.333$.

    *Back to Gaussian quadrature calculation for 2-point:*
    $f(x) = x^3 + 2x^2 - x + 5$.
    $f(1/\sqrt{3}) = (1/\sqrt{3})^3 + 2(1/\sqrt{3})^2 - 1/\sqrt{3} + 5 = \frac{1}{3\sqrt{3}} + \frac{2}{3} - \frac{1}{\sqrt{3}} + 5 = (\frac{1}{3\sqrt{3}} - \frac{3}{3\sqrt{3}}) + \frac{2}{3} + 5 = -\frac{2}{3\sqrt{3}} + \frac{17}{3}$
    $f(-1/\sqrt{3}) = (-1/\sqrt{3})^3 + 2(-1/\sqrt{3})^2 - (-1/\sqrt{3}) + 5 = -\frac{1}{3\sqrt{3}} + \frac{2}{3} + \frac{1}{\sqrt{3}} + 5 = (\frac{-1}{3\sqrt{3}} + \frac{3}{3\sqrt{3}}) + \frac{2}{3} + 5 = \frac{2}{3\sqrt{3}} + \frac{17}{3}$
    $I \approx f(-1/\sqrt{3}) + f(1/\sqrt{3}) = (\frac{2}{3\sqrt{3}} + \frac{17}{3}) + (-\frac{2}{3\sqrt{3}} + \frac{17}{3}) = \frac{34}{3} \approx 11.333$.
    *The 2-point rule integrates polynomials up to degree 3 exactly, and this polynomial is degree 3, so it should be exact.*

**c) Three-point Gaussian quadrature (n=3):**
*   Abscissas: $x_1 = -\sqrt{3/5}$, $x_2 = 0$, $x_3 = \sqrt{3/5}$
*   Weights: $w_1 = 5/9$, $w_2 = 8/9$, $w_3 = 5/9$
*   Approximation: $I \approx w_1 f(x_1) + w_2 f(x_2) + w_3 f(x_3)$
    $f(0) = 5$
    $f(\sqrt{3/5}) = (\sqrt{3/5})^3 + 2(\sqrt{3/5})^2 - \sqrt{3/5} + 5 = \frac{3\sqrt{3}}{5\sqrt{5}} + 2\frac{3}{5} - \sqrt{\frac{3}{5}} + 5 = \frac{3\sqrt{3/5}}{5} + \frac{6}{5} - \sqrt{\frac{3}{5}} + 5 = (\frac{3}{5}-1)\sqrt{\frac{3}{5}} + \frac{36}{5} = -\frac{2}{5}\sqrt{\frac{3}{5}} + \frac{36}{5}$
    $f(-\sqrt{3/5}) = (-\sqrt{3/5})^3 + 2(-\sqrt{3/5})^2 - (-\sqrt{3/5}) + 5 = -\frac{3\sqrt{3}}{5\sqrt{5}} + 2\frac{3}{5} + \sqrt{\frac{3}{5}} + 5 = -\frac{3\sqrt{3/5}}{5} + \frac{6}{5} + \sqrt{\frac{3}{5}} + 5 = (-\frac{3}{5}+1)\sqrt{\frac{3}{5}} + \frac{36}{5} = \frac{2}{5}\sqrt{\frac{3}{5}} + \frac{36}{5}$
    $I \approx \frac{5}{9}(-\frac{2}{5}\sqrt{\frac{3}{5}} + \frac{36}{5}) + \frac{8}{9}(5) + \frac{5}{9}(\frac{2}{5}\sqrt{\frac{3}{5}} + \frac{36}{5})$
    $I \approx \frac{5}{9}(\frac{2}{5}\sqrt{\frac{3}{5}} + \frac{36}{5}) + \frac{40}{9} + \frac{5}{9}(-\frac{2}{5}\sqrt{\frac{3}{5}} + \frac{36}{5})$  (Mistake in calculation of f(sqrt(3/5)))

    *Let's use the property that 3-point rule integrates up to degree 5 exactly. Our polynomial is degree 3, so it should be exact.*
    $f(\sqrt{3/5}) = (\frac{3}{5})\sqrt{\frac{3}{5}} + \frac{6}{5} - \sqrt{\frac{3}{5}} + 5 = \frac{3}{5}\sqrt{\frac{3}{5}} + \frac{6}{5} - \frac{5}{5}\sqrt{\frac{3}{5}} + \frac{25}{5} = -\frac{2}{5}\sqrt{\frac{3}{5}} + \frac{31}{5}$
    $f(-\sqrt{3/5}) = (-\frac{3}{5})\sqrt{\frac{3}{5}} + \frac{6}{5} + \sqrt{\frac{3}{5}} + 5 = -\frac{3}{5}\sqrt{\frac{3}{5}} + \frac{6}{5} + \frac{5}{5}\sqrt{\frac{3}{5}} + \frac{25}{5} = \frac{2}{5}\sqrt{\frac{3}{5}} + \frac{31}{5}$
    $I \approx \frac{5}{9}(-\frac{2}{5}\sqrt{\frac{3}{5}} + \frac{31}{5}) + \frac{8}{9}(5) + \frac{5}{9}(\frac{2}{5}\sqrt{\frac{3}{5}} + \frac{31}{5})$
    $I \approx -\frac{2}{9}\sqrt{\frac{3}{5}} + \frac{31}{9} + \frac{40}{9} + \frac{2}{9}\sqrt{\frac{3}{5}} + \frac{31}{9} = \frac{31+40+31}{9} = \frac{102}{9} = \frac{34}{3} \approx 11.333$.

**d) Comparison:**
*   Exact: 11.333
*   1-point GQ: 10 (Error: 1.333)
*   2-point GQ: 11.333 (Exact - as expected for degree 3 polynomial)
*   3-point GQ: 11.333 (Exact - as expected for degree 5 polynomial)

**Conclusion:** Higher order Gaussian quadrature rules provide more accurate results. For polynomials of degree up to $2n-1$, the $n$-point rule is exact.

---

**Question 2:**
Consider a 1D bar element of length $L$. The stiffness is given by $k^e = \int_{0}^{L} E A (\frac{dN}{dx})^2 dx$. If $E$ and $A$ are constant, and the shape functions are linear, how would you apply Gaussian quadrature to compute $k^e$?

**Solution 2:**
1.  **Transformation to parent domain:**
    Let $x$ be the global coordinate and $\xi$ be the parent coordinate, where $\xi \in [-1, 1]$.
    $x = \frac{L}{2}(1+\xi)$.
    $dx = \frac{L}{2} d\xi$.
    The integral becomes:
    $k^e = \int_{-1}^{1} E A \left(\frac{dN}{dx}\right)^2 \frac{L}{2} d\xi$.

2.  **Shape functions and their derivatives:**
    For a 2-node linear element:
    $N_1(\xi) = \frac{1}{2}(1-\xi)$, $N_2(\xi) = \frac{1}{2}(1+\xi)$.
    $\frac{dN_1}{dx} = \frac{dN_1}{d\xi} \frac{d\xi}{dx} = \frac{1}{2}(-1) \frac{2}{L} = -\frac{1}{L}$.
    $\frac{dN_2}{dx} = \frac{dN_2}{d\xi} \frac{d\xi}{dx} = \frac{1}{2}(1) \frac{2}{L} = \frac{1}{L}$.

    The derivative of a shape function with respect to $x$ is constant for linear elements. For example, $(\frac{dN_1}{dx})^2 = (-\frac{1}{L})^2 = \frac{1}{L^2}$.

3.  **The integrand:**
    The integrand is $E A (\frac{dN}{dx})^2$, which is $E A \frac{1}{L^2}$ for the term involving $N_1$ and $N_1$, and $E A \frac{1}{L^2}$ for $N_2$ and $N_2$. If we are calculating $k_{11}^e = \int_{0}^{L} E A (\frac{dN_1}{dx})^2 dx$, the integrand is $E A \frac{1}{L^2}$.

4.  **Applying Gaussian Quadrature (e.g., 2-point):**
    Let the integrand be $f(\xi) = E A (\frac{dN_i}{dx})(\frac{dN_j}{dx}) \frac{L}{2}$.
    For $k_{11}^e$: $f(\xi) = E A (-\frac{1}{L})(-\frac{1}{L}) \frac{L}{2} = E A \frac{1}{L^2} \frac{L}{2} = \frac{EA}{2L}$.
    Using 2-point Gaussian quadrature:
    $k_{11}^e \approx w_1 f(\xi_1) + w_2 f(\xi_2)$
    $k_{11}^e \approx 1 \times (\frac{EA}{2L}) + 1 \times (\frac{EA}{2L}) = \frac{EA}{L}$.
    This is the correct stiffness for a 1D bar element.

    For $k_{12}^e = \int_{0}^{L} E A (\frac{dN_1}{dx})(\frac{dN_2}{dx}) dx$:
    Integrand in terms of $\xi$: $E A (-\frac{1}{L})(\frac{1}{L}) \frac{L}{2} = - \frac{EA}{2L}$.
    $k_{12}^e \approx 1 \times (-\frac{EA}{2L}) + 1 \times (-\frac{EA}{2L}) = -\frac{EA}{L}$.

    Similarly, $k_{21}^e = -\frac{EA}{L}$ and $k_{22}^e = \frac{EA}{L}$.
    The element stiffness matrix is $\frac{EA}{L} \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}$.

    This example shows that for linear elements and constant material properties, even a 2-point rule on the parent domain yields the exact result analytically because the integrand (after transformation and multiplication by Jacobian) becomes constant. However, if $E$ or $A$ were functions of $x$ (and thus $\xi$), numerical integration would be essential.

---

### 10. Important Points to Remember

*   **Why Numerical Integration:** Analytical integration of integrals arising from FEM weak forms can be intractable due to complex integrands (shape functions, derivatives, Jacobians, material properties).
*   **Gaussian Quadrature Advantage:** Achieves higher accuracy with fewer points compared to Newton-Cotes methods by optimally selecting evaluation points (abscissas) as roots of Legendre polynomials and their corresponding weights.
*   **Max Polynomial Degree:** An $n$-point Gaussian quadrature rule can integrate polynomials of degree up to $2n-1$ exactly.
*   **Parent Domain:** Integration is performed on a standardized parent domain (e.g., $\xi \in [-1, 1]$) using coordinate transformations and the Jacobian determinant.
*   **Choosing $n$:** The number of Gaussian points ($n$) depends on the polynomial order of the integrand, which is influenced by the element type (linear, quadratic, etc.) and material properties. For $p$-order elements, $p+1$ points are often recommended as a safe bet for accurate integration of the element matrices.
*   **Isoparametric Elements:** Gaussian quadrature is fundamental to the analysis and formulation of isoparametric elements, where shape functions are used for both geometry and field variable approximation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 11. References and Further Reading

*   **An introduction to Finite Element Method by J N Reddy (McGrawHill Education, Third Edition, 2009):** Chapter 5 (Numerical Integration) provides a thorough explanation of Gaussian quadrature, including its mathematical basis and application in FEM.
*   **Concept and application of Finite Element method by Robert D Cook (Wiley, Third Edition, 2008):** Chapter 10 discusses numerical integration and its role in evaluating element matrices, with examples for quadrilateral elements.
*   **Finite Element Analysis by S SBhavikatti (New Age Publisher, Third edition,2008):** Chapter 4 (Numerical Integration) covers the theory and application of Gaussian quadrature for various element types.
*   **A First Course in Finite Elements by Jacob Fish Rensselaer ,Ted Belytschko (John Wiley & Sons, Ltd, Second edition,2007):** Chapter 4 (Numerical Integration) provides a clear exposition on Gaussian quadrature and its implementation in FEM.
*   **Applied Finite Element Analysis by Larry J Segerlind (Johny Wiley and sons, Second Edition,2010):** Chapter 7 (Numerical Integration) discusses the concept and implementation of Gaussian quadrature for finite element computations.
*   **Applied Finite element Analysis by G Ramamurthi (I K International Publishing House Pvt. Ltd, Second Edition):** Discusses numerical integration techniques within the context of element formulation.
*   **Fundamentals of Finite Element Methods by David V Hutton (McGrawHillEducation, Third Edition,2009):** Chapter 6 (Numerical Integration) provides insights into Gaussian quadrature for numerical integration.

---