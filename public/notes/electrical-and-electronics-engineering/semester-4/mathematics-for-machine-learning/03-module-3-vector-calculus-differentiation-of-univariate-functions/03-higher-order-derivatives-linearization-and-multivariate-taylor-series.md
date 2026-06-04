---
title: "Higher Order Derivatives- Linearization and Multivariate Taylor Series."
subject: "MATHEMATICS FOR MACHINE LEARNING"
module: "Module 3: VECTOR CALCULUS: Differentiation of Univariate Functions "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35ef2"
status: "completed"
scrapedAt: "2026-05-23T16:17:21.861Z"
---
# Mathematics for Machine Learning: Module 3 - Vector Calculus: Differentiation of Univariate Functions

## Topic: Higher Order Derivatives - Linearization and Multivariate Taylor Series

### Learning Outcomes:

*   Understand the concept of higher-order derivatives for univariate functions.
*   Apply the concept of linearization to approximate functions using first-order derivatives.
*   Extend the Taylor series expansion to functions of multiple variables (multivariate Taylor series).
*   Utilize the multivariate Taylor series for approximation and understanding local behavior of functions.

### 1. Higher Order Derivatives of Univariate Functions

While Module 3 primarily focuses on differentiation of univariate functions, understanding higher-order derivatives is crucial for deeper analysis and applications like Taylor series expansions.

**Key Concepts:**

*   **First Derivative (f'(x) or dy/dx):** Represents the instantaneous rate of change of a function $f(x)$ with respect to $x$. Geometrically, it's the slope of the tangent line to the curve $y = f(x)$ at a given point.
*   **Second Derivative (f''(x) or d²y/dx²):** Represents the rate of change of the first derivative. It tells us about the curvature of the function.
    *   If $f''(x) > 0$, the function is concave up (like a smiley face).
    *   If $f''(x) < 0$, the function is concave down (like a frowny face).
    *   If $f''(x) = 0$, the point might be an inflection point, where the concavity changes.
*   **Third Derivative (f'''(x) or d³y/dx³):** Represents the rate of change of the second derivative. It relates to the "jerk" in physics, describing how the acceleration changes.
*   **nth Derivative (fⁿ(x) or dⁿy/dxⁿ):** The $n$-th derivative is obtained by differentiating the $(n-1)$-th derivative $n$ times.

**Notation:**

*   $f'(x)$
*   $f''(x)$
*   $f'''(x)$
*   $f^{(n)}(x)$ or $\frac{d^n f}{dx^n}$

**Example:**

Let $f(x) = x^3 - 6x^2 + 5x + 10$

*   **First Derivative:** $f'(x) = 3x^2 - 12x + 5$ (Rate of change, slope of tangent)
*   **Second Derivative:** $f''(x) = 6x - 12$ (Curvature, concavity)
    *   $f''(x) > 0$ for $x > 2$ (concave up)
    *   $f''(x) < 0$ for $x < 2$ (concave down)
    *   $f''(2) = 0$, indicating a potential inflection point at $x=2$.
*   **Third Derivative:** $f'''(x) = 6$ (Rate of change of concavity)
*   **Fourth Derivative:** $f^{(4)}(x) = 0$

**Reference:**
While not explicitly detailed in this specific section of "Mathematics for Machine Learning," the concept of differentiation is foundational. Refer to Chapter 4 of "Mathematics for Machine Learning" for foundational differentiation rules.

---

### 2. Linearization (First-Order Approximation)

Linearization uses the tangent line to approximate the value of a function near a specific point. This is a direct application of the first derivative.

**Key Concept:**

The **tangent line** to the graph of $y = f(x)$ at $x = a$ is given by the equation:

$L(x) = f(a) + f'(a)(x - a)$

This line $L(x)$ serves as a linear approximation of $f(x)$ for values of $x$ close to $a$.

**Why is it important in Machine Learning?**

*   **Optimization:** Many optimization algorithms rely on the gradient (first derivative) to find minima or maxima of objective functions. Linearization helps understand the local direction of steepest ascent or descent.
*   **Sensitivity Analysis:** It helps understand how sensitive the output of a function is to small changes in its input around a specific operating point.
*   **Model Simplification:** In complex systems, linearizing around an operating point can simplify analysis and prediction.

**Example:**

Approximate $f(x) = \sqrt{x}$ near $x = 4$.

1.  **Choose a point 'a':** We are given $x = 4$.
2.  **Calculate f(a):** $f(4) = \sqrt{4} = 2$.
3.  **Calculate f'(x):** $f'(x) = \frac{1}{2\sqrt{x}}$.
4.  **Calculate f'(a):** $f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{2 \times 2} = \frac{1}{4}$.
5.  **Formulate the linearization L(x):**
    $L(x) = f(4) + f'(4)(x - 4)$
    $L(x) = 2 + \frac{1}{4}(x - 4)$

Now, let's approximate $\sqrt{4.04}$ using this linearization:

$L(4.04) = 2 + \frac{1}{4}(4.04 - 4) = 2 + \frac{1}{4}(0.04) = 2 + 0.01 = 2.01$

The actual value is $\sqrt{4.04} \approx 2.009975$, so the linearization gives a good approximation.

**Connection to Taylor Series:**
Linearization is simply the first two terms of the Taylor series expansion of $f(x)$ around $a$.

**Reference:**
"Mathematics for Machine Learning," Chapter 4, likely covers univariate differentiation and its applications, which forms the basis for linearization.

---

### 3. Taylor Series Expansion (Univariate)

The Taylor series provides a way to represent a function as an infinite sum of its derivatives evaluated at a single point. This is a powerful tool for approximating functions, especially when direct computation is difficult.

**Key Concept:**

The **Taylor series** of a function $f(x)$ expanded around a point $a$ is given by:

$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$

$f(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots$

*   **Maclaurin Series:** A special case of the Taylor series where $a = 0$.
    $f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \dots$

**Taylor Polynomials:**
Truncating the Taylor series after a finite number of terms gives a Taylor polynomial, which is a polynomial approximation of the function.

*   **Zeroth-order Taylor polynomial (constant approximation):** $P_0(x) = f(a)$
*   **First-order Taylor polynomial (linear approximation/linearization):** $P_1(x) = f(a) + f'(a)(x-a)$
*   **Second-order Taylor polynomial (quadratic approximation):** $P_2(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2$

**Example:**

Find the Taylor series of $f(x) = e^x$ around $a = 0$ (Maclaurin series).

1.  **Derivatives:**
    $f(x) = e^x \implies f(0) = e^0 = 1$
    $f'(x) = e^x \implies f'(0) = e^0 = 1$
    $f''(x) = e^x \implies f''(0) = e^0 = 1$
    $f^{(n)}(x) = e^x \implies f^{(n)}(0) = 1$ for all $n$.

2.  **Taylor Series:**
    $e^x = \sum_{n=0}^{\infty} \frac{1}{n!}x^n = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$

**Why is it important in Machine Learning?**

*   **Approximation of Complex Functions:** Many machine learning models involve complex non-linear functions. Taylor series allow us to approximate these functions locally with simpler polynomials, which can be easier to work with, analyze, and optimize.
*   **Understanding Local Behavior:** The higher-order terms capture more subtle behaviors of the function, like concavity, which can be important for understanding model behavior.
*   **Optimization Algorithms:** Second-order derivatives (Hessian matrix in multivariate case) are used in optimization algorithms like Newton's method for faster convergence. The Taylor series provides the theoretical basis for these methods.
*   **Bayesian Methods:** In Bayesian machine learning, approximating posterior distributions often involves Taylor expansions of log-posterior densities.

**Reference:**
Again, "Mathematics for Machine Learning" will cover univariate differentiation. For Taylor series specifically, you might find it discussed as an application of differentiation or in relation to approximations.

---

### 4. Multivariate Taylor Series

This extends the concept of Taylor series to functions of multiple variables. This is crucial for understanding and optimizing functions that are ubiquitous in machine learning, which often involve many parameters.

**Key Concepts:**

Let $f: \mathbb{R}^d \to \mathbb{R}$ be a function of $d$ variables, i.e., $f(\mathbf{x})$ where $\mathbf{x} = (x_1, x_2, \dots, x_d)^T$. We want to expand $f(\mathbf{x})$ around a point $\mathbf{a} = (a_1, a_2, \dots, a_d)^T$.

To express this, we need the concepts of:

*   **Multi-index:** A vector $\boldsymbol{\alpha} = (\alpha_1, \dots, \alpha_d)$ where each $\alpha_i$ is a non-negative integer.
*   **Factorial of a multi-index:** $\boldsymbol{\alpha}! = \alpha_1! \alpha_2! \dots \alpha_d!$
*   **Partial Derivative of order $|\boldsymbol{\alpha}| = \sum_{i=1}^d \alpha_i$:**
    $D^{\boldsymbol{\alpha}}f(\mathbf{x}) = \frac{\partial^{|\boldsymbol{\alpha}|} f}{\partial x_1^{\alpha_1} \partial x_2^{\alpha_2} \dots \partial x_d^{\alpha_d}}$
*   **Increment vector:** $(\mathbf{x} - \mathbf{a})^{\boldsymbol{\alpha}} = (x_1 - a_1)^{\alpha_1} (x_2 - a_2)^{\alpha_2} \dots (x_d - a_d)^{\alpha_d}$

**Multivariate Taylor Series Expansion:**

The Taylor series expansion of $f(\mathbf{x})$ around $\mathbf{a}$ is:

$f(\mathbf{x}) = \sum_{\boldsymbol{\alpha} \in \mathbb{N}_0^d} \frac{D^{\boldsymbol{\alpha}}f(\mathbf{a})}{\boldsymbol{\alpha}!}(\mathbf{x} - \mathbf{a})^{\boldsymbol{\alpha}}$

$f(\mathbf{x}) = f(\mathbf{a}) + \sum_{i=1}^d \frac{\partial f}{\partial x_i}(\mathbf{a})(x_i - a_i) + \frac{1}{2!} \sum_{i=1}^d \sum_{j=1}^d \frac{\partial^2 f}{\partial x_i \partial x_j}(\mathbf{a})(x_i - a_i)(x_j - a_j) + \dots$

**Notation using Gradient and Hessian:**

Let $\nabla f(\mathbf{a})$ be the gradient of $f$ at $\mathbf{a}$, and $\mathbf{H}_f(\mathbf{a})$ be the Hessian matrix of $f$ at $\mathbf{a}$.

*   **Zeroth-order Taylor polynomial (constant approximation):** $P_0(\mathbf{x}) = f(\mathbf{a})$
*   **First-order Taylor polynomial (linear approximation):**
    $P_1(\mathbf{x}) = f(\mathbf{a}) + \nabla f(\mathbf{a})^T (\mathbf{x} - \mathbf{a})$
    This is the equation of the tangent hyperplane to the surface $z = f(\mathbf{x})$ at $\mathbf{a}$.
*   **Second-order Taylor polynomial (quadratic approximation):**
    $P_2(\mathbf{x}) = f(\mathbf{a}) + \nabla f(\mathbf{a})^T (\mathbf{x} - \mathbf{a}) + \frac{1}{2} (\mathbf{x} - \mathbf{a})^T \mathbf{H}_f(\mathbf{a}) (\mathbf{x} - \mathbf{a})$

**Example:**

Find the second-order Taylor expansion of $f(x, y) = e^{x+y}$ around $\mathbf{a} = (0, 0)$.

1.  **Function and Point:** $f(x, y) = e^{x+y}$, $\mathbf{a} = (0, 0)$.
2.  **Calculate function value at 'a':**
    $f(0, 0) = e^{0+0} = e^0 = 1$.
3.  **Calculate first partial derivatives:**
    $\frac{\partial f}{\partial x} = e^{x+y}$
    $\frac{\partial f}{\partial y} = e^{x+y}$
    Evaluate at $\mathbf{a}=(0,0)$:
    $\frac{\partial f}{\partial x}(0,0) = e^0 = 1$
    $\frac{\partial f}{\partial y}(0,0) = e^0 = 1$
    Gradient: $\nabla f(0,0) = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

4.  **Calculate second partial derivatives:**
    $\frac{\partial^2 f}{\partial x^2} = e^{x+y}$
    $\frac{\partial^2 f}{\partial y^2} = e^{x+y}$
    $\frac{\partial^2 f}{\partial x \partial y} = e^{x+y}$
    $\frac{\partial^2 f}{\partial y \partial x} = e^{x+y}$
    Evaluate at $\mathbf{a}=(0,0)$:
    $\frac{\partial^2 f}{\partial x^2}(0,0) = 1$
    $\frac{\partial^2 f}{\partial y^2}(0,0) = 1$
    $\frac{\partial^2 f}{\partial x \partial y}(0,0) = 1$
    $\frac{\partial^2 f}{\partial y \partial x}(0,0) = 1$

5.  **Formulate the Hessian matrix at 'a':**
    $\mathbf{H}_f(0,0) = \begin{pmatrix} \frac{\partial^2 f}{\partial x^2}(0,0) & \frac{\partial^2 f}{\partial x \partial y}(0,0) \\ \frac{\partial^2 f}{\partial y \partial x}(0,0) & \frac{\partial^2 f}{\partial y^2}(0,0) \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$

6.  **Construct the second-order Taylor polynomial:**
    Let $\mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix}$. Then $\mathbf{x} - \mathbf{a} = \begin{pmatrix} x \\ y \end{pmatrix}$.

    $P_2(x, y) = f(0,0) + \nabla f(0,0)^T (\mathbf{x} - \mathbf{a}) + \frac{1}{2} (\mathbf{x} - \mathbf{a})^T \mathbf{H}_f(0,0) (\mathbf{x} - \mathbf{a})$

    $P_2(x, y) = 1 + \begin{pmatrix} 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} + \frac{1}{2} \begin{pmatrix} x & y \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}$

    $P_2(x, y) = 1 + (x + y) + \frac{1}{2} \begin{pmatrix} x & y \end{pmatrix} \begin{pmatrix} x + y \\ x + y \end{pmatrix}$

    $P_2(x, y) = 1 + x + y + \frac{1}{2} (x(x+y) + y(x+y))$

    $P_2(x, y) = 1 + x + y + \frac{1}{2} (x^2 + xy + xy + y^2)$

    $P_2(x, y) = 1 + x + y + \frac{1}{2} x^2 + xy + \frac{1}{2} y^2$

**Why is it important in Machine Learning?**

*   **Optimization (Newton's Method):** The second-order Taylor expansion is the foundation of Newton's method for optimization. By approximating the objective function with a quadratic, Newton's method can efficiently find the minimum. The quadratic approximation is given by $P_2(\mathbf{x})$.
*   **Understanding Local Landscape:** The Hessian matrix, which appears in the second-order term, describes the local curvature of the function. This is crucial for understanding whether a critical point is a minimum, maximum, or saddle point.
*   **Model Analysis and Regularization:** Second-order information can be used in regularization techniques or to analyze the stability and behavior of machine learning models.
*   **Approximation of Loss Functions:** Many complex loss functions can be approximated by their Taylor series, making them easier to analyze or optimize.
*   **Sensitivity Analysis:** The gradient and Hessian provide information about how the function's output changes with respect to small changes in the input variables.

**Connection to Course Outcomes:**

*   **CO2 (Perform calculus operations on functions of several variables and matrices, including partial derivatives and gradients):** This topic directly uses partial derivatives and gradients to construct the Taylor series.
*   **CO4 (Train Machine Learning Models using unconstrained and constrained optimization methods):** Understanding the Taylor series is fundamental for optimization methods like Newton's method.

**Reference Books:**

*   **"Mathematics for Machine Learning" by Deisenroth, Faisal, Ong:** This book is the primary reference. While it might not have a dedicated chapter titled "Multivariate Taylor Series," the concepts of partial derivatives and gradients (covered in Chapter 4 or similar) are the building blocks. You'll find applications of these concepts in optimization chapters.
*   **"Introduction to Applied Linear Algebra" by Boyd and Vandenberghe:** This book covers vector and matrix operations extensively. The quadratic term in the multivariate Taylor series $(\mathbf{x} - \mathbf{a})^T \mathbf{H}_f(\mathbf{a}) (\mathbf{x} - \mathbf{a})$ heavily relies on matrix algebra and is crucial for understanding the Hessian.
*   **"Convex Optimization" by Boyd and Vandenberghe:** This book extensively uses second-order derivatives (Hessian) for analyzing and optimizing convex functions, directly applying the principles of multivariate Taylor expansions.

**Important Points to Remember:**

*   **Local Approximation:** Taylor series provide a good approximation *locally* around the expansion point. The accuracy decreases as you move further away from the point.
*   **Differentiability:** For a Taylor series to exist, the function must be sufficiently differentiable at the expansion point.
*   **Hessian Matrix:** The Hessian matrix is symmetric for sufficiently smooth functions and plays a critical role in the second-order Taylor expansion. Its eigenvalues are related to the curvature.
*   **Computational Cost:** Computing higher-order derivatives can be computationally expensive, especially for functions with many variables.

---

### Practice Questions

**Question 1 (Linearization):**
Approximate $f(x) = \ln(x)$ near $x=e$ using linearization. Then, use your approximation to estimate $\ln(2.7)$.

**Question 2 (Univariate Taylor Series):**
Find the first three terms of the Maclaurin series (Taylor series around $a=0$) for the function $f(x) = \sin(x)$.

**Question 3 (Multivariate Taylor Series - Linear Approximation):**
Let $f(x, y) = x^2y + 3x - y^2$. Find the linear approximation of $f(x, y)$ at the point $(1, 2)$.

**Question 4 (Multivariate Taylor Series - Quadratic Approximation):**
Find the quadratic approximation of $f(x, y) = x e^y$ at the point $(0, 0)$.

---

### Answers to Practice Questions

**Answer 1:**
1.  **Choose a point 'a':** $a = e$.
2.  **Calculate f(a):** $f(e) = \ln(e) = 1$.
3.  **Calculate f'(x):** $f'(x) = \frac{1}{x}$.
4.  **Calculate f'(a):** $f'(e) = \frac{1}{e}$.
5.  **Linearization L(x):**
    $L(x) = f(e) + f'(e)(x - e)$
    $L(x) = 1 + \frac{1}{e}(x - e)$

    To estimate $\ln(2.7)$:
    $L(2.7) = 1 + \frac{1}{e}(2.7 - e)$
    Using $e \approx 2.718$:
    $L(2.7) \approx 1 + \frac{1}{2.718}(2.7 - 2.718)$
    $L(2.7) \approx 1 + \frac{1}{2.718}(-0.018)$
    $L(2.7) \approx 1 - 0.006624 \approx 0.993376$
    (Actual $\ln(2.7) \approx 0.99325$)

**Answer 2:**
1.  **Function:** $f(x) = \sin(x)$.
2.  **Derivatives at $a=0$:**
    $f(x) = \sin(x) \implies f(0) = \sin(0) = 0$
    $f'(x) = \cos(x) \implies f'(0) = \cos(0) = 1$
    $f''(x) = -\sin(x) \implies f''(0) = -\sin(0) = 0$
    $f'''(x) = -\cos(x) \implies f'''(0) = -\cos(0) = -1$
3.  **Taylor Series (first three terms):**
    $f(x) \approx f(0) + f'(0)x + \frac{f''(0)}{2!}x^2$
    $\sin(x) \approx 0 + 1 \cdot x + \frac{0}{2}x^2$
    $\sin(x) \approx x$
    *Note: If "first three non-zero terms" was implied, it would be $x - \frac{x^3}{3!} + \frac{x^5}{5!}$*
    Based on "first three terms" meaning up to $x^2$:
    $\sin(x) \approx x$

**Answer 3:**
1.  **Function:** $f(x, y) = x^2y + 3x - y^2$.
2.  **Point:** $(1, 2)$.
3.  **f(1, 2):** $f(1, 2) = (1)^2(2) + 3(1) - (2)^2 = 2 + 3 - 4 = 1$.
4.  **Partial Derivatives:**
    $\frac{\partial f}{\partial x} = 2xy + 3$
    $\frac{\partial f}{\partial y} = x^2 - 2y$
5.  **Evaluate at (1, 2):**
    $\frac{\partial f}{\partial x}(1, 2) = 2(1)(2) + 3 = 4 + 3 = 7$.
    $\frac{\partial f}{\partial y}(1, 2) = (1)^2 - 2(2) = 1 - 4 = -3$.
    Gradient: $\nabla f(1, 2) = \begin{pmatrix} 7 \\ -3 \end{pmatrix}$.
6.  **Linear Approximation $P_1(x, y)$:**
    $P_1(x, y) = f(1, 2) + \nabla f(1, 2)^T (x-1, y-2)$
    $P_1(x, y) = 1 + \begin{pmatrix} 7 & -3 \end{pmatrix} \begin{pmatrix} x-1 \\ y-2 \end{pmatrix}$
    $P_1(x, y) = 1 + 7(x-1) - 3(y-2)$
    $P_1(x, y) = 1 + 7x - 7 - 3y + 6$
    $P_1(x, y) = 7x - 3y$

**Answer 4:**
1.  **Function:** $f(x, y) = x e^y$.
2.  **Point:** $(0, 0)$.
3.  **f(0, 0):** $f(0, 0) = 0 \cdot e^0 = 0$.
4.  **First Partial Derivatives:**
    $\frac{\partial f}{\partial x} = e^y$
    $\frac{\partial f}{\partial y} = x e^y$
    Evaluate at (0, 0):
    $\frac{\partial f}{\partial x}(0, 0) = e^0 = 1$.
    $\frac{\partial f}{\partial y}(0, 0) = 0 \cdot e^0 = 0$.
    Gradient: $\nabla f(0,0) = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
5.  **Second Partial Derivatives:**
    $\frac{\partial^2 f}{\partial x^2} = 0$
    $\frac{\partial^2 f}{\partial y^2} = x e^y$
    $\frac{\partial^2 f}{\partial x \partial y} = e^y$
    $\frac{\partial^2 f}{\partial y \partial x} = e^y$
    Evaluate at (0, 0):
    $\frac{\partial^2 f}{\partial x^2}(0, 0) = 0$.
    $\frac{\partial^2 f}{\partial y^2}(0, 0) = 0 \cdot e^0 = 0$.
    $\frac{\partial^2 f}{\partial x \partial y}(0, 0) = e^0 = 1$.
    $\frac{\partial^2 f}{\partial y \partial x}(0, 0) = e^0 = 1$.
6.  **Hessian Matrix at (0, 0):**
    $\mathbf{H}_f(0,0) = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
7.  **Quadratic Approximation $P_2(x, y)$:**
    Let $\mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix}$. Then $\mathbf{x} - \mathbf{a} = \begin{pmatrix} x \\ y \end{pmatrix}$.
    $P_2(x, y) = f(0,0) + \nabla f(0,0)^T (\mathbf{x} - \mathbf{a}) + \frac{1}{2} (\mathbf{x} - \mathbf{a})^T \mathbf{H}_f(0,0) (\mathbf{x} - \mathbf{a})$
    $P_2(x, y) = 0 + \begin{pmatrix} 1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} + \frac{1}{2} \begin{pmatrix} x & y \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}$
    $P_2(x, y) = x + \frac{1}{2} \begin{pmatrix} x & y \end{pmatrix} \begin{pmatrix} y \\ x \end{pmatrix}$
    $P_2(x, y) = x + \frac{1}{2} (xy + yx)$
    $P_2(x, y) = x + xy$.
