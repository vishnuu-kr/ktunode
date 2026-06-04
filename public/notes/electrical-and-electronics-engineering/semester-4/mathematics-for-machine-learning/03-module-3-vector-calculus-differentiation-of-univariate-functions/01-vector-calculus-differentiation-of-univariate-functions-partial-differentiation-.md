---
title: "VECTOR CALCULUS: Differentiation of Univariate Functions - Partial Differentiation and Gradients, Gradients of Vector Valued Functions, Gradients of Matrices, Useful Identities for Computing Gradients."
subject: "MATHEMATICS FOR MACHINE LEARNING"
module: "Module 3: VECTOR CALCULUS: Differentiation of Univariate Functions "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35ef0"
status: "completed"
scrapedAt: "2026-05-23T16:17:20.386Z"
---
## Mathematics for Machine Learning: Module 3 - Vector Calculus: Differentiation of Univariate Functions

This module delves into the fundamental concepts of differentiation as applied to functions relevant to Machine Learning. We will explore how to differentiate functions of multiple variables and introduce the powerful concept of gradients, which are crucial for optimization algorithms in ML.

### 1. Partial Differentiation and Gradients

**Key Concepts:**

*   **Scalar-valued function of multiple variables:** A function $f: \mathbb{R}^n \to \mathbb{R}$ that takes a vector input and produces a single scalar output. Examples include loss functions like Mean Squared Error.
*   **Partial Derivative:** The rate of change of a multivariable function with respect to one of its variables, while holding all other variables constant. It's denoted by $\frac{\partial f}{\partial x_i}$.

**Definition:**

Given a scalar-valued function $f(x_1, x_2, \dots, x_n)$, the partial derivative of $f$ with respect to $x_i$ is:

$$ \frac{\partial f}{\partial x_i} = \lim_{h \to 0} \frac{f(x_1, \dots, x_i + h, \dots, x_n) - f(x_1, \dots, x_i, \dots, x_n)}{h} $$

**Gradient:**

The gradient of a scalar-valued function $f(\mathbf{x})$ where $\mathbf{x} \in \mathbb{R}^n$ is a vector containing all the partial derivatives of $f$ with respect to each component of $\mathbf{x}$. It points in the direction of the steepest ascent of the function.

**Definition:**

$$ \nabla f(\mathbf{x}) = \begin{pmatrix} \frac{\partial f}{\partial x_1} \\ \frac{\partial f}{\partial x_2} \\ \vdots \\ \frac{\partial f}{\partial x_n} \end{pmatrix} $$

**Notation:**

*   $\nabla$ (nabla or del operator) is used to denote the gradient.
*   If $f$ is a function of a vector $\mathbf{x} = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}$, then $\nabla f(\mathbf{x})$ is also a vector in $\mathbb{R}^n$.

**Example:**

Let $f(x, y) = x^2y + \sin(y)$.

*   Partial derivative with respect to $x$: $\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(x^2y + \sin(y)) = 2xy$
*   Partial derivative with respect to $y$: $\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2y + \sin(y)) = x^2 + \cos(y)$

The gradient of $f(x, y)$ is:

$$ \nabla f(x, y) = \begin{pmatrix} \frac{\partial f}{\partial x} \\ \frac{\partial f}{\partial y} \end{pmatrix} = \begin{pmatrix} 2xy \\ x^2 + \cos(y) \end{pmatrix} $$

**Relevance to Machine Learning:**

Gradients are fundamental for **gradient descent**, a ubiquitous optimization algorithm used to minimize loss functions in ML models. By moving in the opposite direction of the gradient (steepest descent), we can iteratively find the parameters that minimize the error.

**Alignment with Course Outcomes:**

*   **CO2:** Perform calculus operations on functions of several variables and matrices, including partial derivatives and gradients. (Knowledge Level: K3)

**Textbook References:**

*   **Mathematics for Machine Learning (Deisenroth, Faisal, Ong):** Chapter 4 provides a thorough introduction to multivariate calculus, including partial derivatives and gradients.
*   **Introduction to Applied Linear Algebra (Boyd, Vandenberghe):** Chapter 5 discusses derivatives and gradients, particularly in the context of optimization.

---

### 2. Gradients of Vector-Valued Functions

**Key Concepts:**

*   **Vector-valued function:** A function $f: \mathbb{R}^n \to \mathbb{R}^m$ that takes a vector input and produces a vector output.

**Definition:**

A vector-valued function can be represented by its component functions:

$$ f(\mathbf{x}) = \begin{pmatrix} f_1(\mathbf{x}) \\ f_2(\mathbf{x}) \\ \vdots \\ f_m(\mathbf{x}) \end{pmatrix} $$

where each $f_i: \mathbb{R}^n \to \mathbb{R}$ is a scalar-valued function.

**Gradient of a Vector-Valued Function (Jacobian Matrix):**

The "gradient" of a vector-valued function is typically represented by its **Jacobian matrix**. The Jacobian matrix is an $m \times n$ matrix where the $(i, j)$-th entry is the partial derivative of the $i$-th component function $f_i$ with respect to the $j$-th input variable $x_j$.

**Definition:**

The Jacobian matrix of $f(\mathbf{x})$ is denoted by $J_f(\mathbf{x})$ or $\nabla_\mathbf{x} f(\mathbf{x})$ and is defined as:

$$ J_f(\mathbf{x}) = \nabla_\mathbf{x} f(\mathbf{x}) = \begin{pmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\ \vdots & \vdots & \ddots & \vdots \\ \frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n} \end{pmatrix} $$

**Example:**

Let $f: \mathbb{R}^2 \to \mathbb{R}^3$ be defined by:

$$ f(x, y) = \begin{pmatrix} x^2 + y \\ xy \\ \sin(x) \end{pmatrix} $$

Here, $f_1(x, y) = x^2 + y$, $f_2(x, y) = xy$, and $f_3(x, y) = \sin(x)$.

Let's compute the partial derivatives:
*   $\frac{\partial f_1}{\partial x} = 2x$, $\frac{\partial f_1}{\partial y} = 1$
*   $\frac{\partial f_2}{\partial x} = y$, $\frac{\partial f_2}{\partial y} = x$
*   $\frac{\partial f_3}{\partial x} = \cos(x)$, $\frac{\partial f_3}{\partial y} = 0$

The Jacobian matrix is:

$$ J_f(x, y) = \begin{pmatrix} 2x & 1 \\ y & x \\ \cos(x) & 0 \end{pmatrix} $$

**Important Note:** While "gradient" is commonly associated with scalar-valued functions, in the context of vector-valued functions, the Jacobian matrix is the generalization. Some texts might use $\nabla f(\mathbf{x})$ to represent the Jacobian if the context is clear.

**Relevance to Machine Learning:**

The Jacobian matrix is important in understanding how a function's output changes with respect to its input when the output is also a vector. This is relevant in:

*   **Backpropagation:** In neural networks, the Jacobian matrix is implicitly used to compute gradients of the loss with respect to the weights and activations.
*   **Sensitivity Analysis:** Understanding how changes in input variables affect the output vector.

**Alignment with Course Outcomes:**

*   **CO2:** Perform calculus operations on functions of several variables and matrices, including partial derivatives and gradients. (Knowledge Level: K3)

**Textbook References:**

*   **Mathematics for Machine Learning (Deisenroth, Faisal, Ong):** Chapter 4 covers Jacobians.
*   **Introduction to Applied Linear Algebra (Boyd, Vandenberghe):** Chapter 5 touches on derivatives of vector functions.

---

### 3. Gradients of Matrices

**Key Concepts:**

*   **Scalar-valued function of a matrix:** A function $f: \mathbb{R}^{m \times n} \to \mathbb{R}$ that takes a matrix as input and produces a single scalar output.
*   **Gradient with respect to a matrix:** Analogous to the gradient with respect to a vector, but now we are considering the partial derivatives with respect to each element of the matrix.

**Definition:**

Let $f(\mathbf{X})$ be a scalar-valued function of an $m \times n$ matrix $\mathbf{X}$. The gradient of $f$ with respect to $\mathbf{X}$ is an $m \times n$ matrix where the $(i, j)$-th entry is the partial derivative of $f$ with respect to $X_{ij}$.

$$ \nabla_\mathbf{X} f(\mathbf{X}) = \begin{pmatrix} \frac{\partial f}{\partial X_{11}} & \frac{\partial f}{\partial X_{12}} & \cdots & \frac{\partial f}{\partial X_{1n}} \\ \frac{\partial f}{\partial X_{21}} & \frac{\partial f}{\partial X_{22}} & \cdots & \frac{\partial f}{\partial X_{2n}} \\ \vdots & \vdots & \ddots & \vdots \\ \frac{\partial f}{\partial X_{m1}} & \frac{\partial f}{\partial X_{m2}} & \cdots & \frac{\partial f}{\partial X_{mn}} \end{pmatrix} $$

**Alternative Notation:**

Some texts use $\frac{\partial f}{\partial \mathbf{X}}$ to denote the gradient of a scalar-valued function with respect to a matrix.

**Example:**

Let $f(\mathbf{X}) = \text{Tr}(\mathbf{X}^T \mathbf{A} \mathbf{X})$, where $\mathbf{X} \in \mathbb{R}^{n \times m}$ and $\mathbf{A} \in \mathbb{R}^{m \times m}$ is a symmetric matrix. We want to find $\nabla_\mathbf{X} f(\mathbf{X})$.

We can rewrite $f(\mathbf{X})$ using trace properties and element-wise derivatives.
Consider a single element $X_{ij}$.
$\text{Tr}(\mathbf{X}^T \mathbf{A} \mathbf{X}) = \sum_{k=1}^m \sum_{l=1}^n (\mathbf{X}^T \mathbf{A} \mathbf{X})_{kl}$

A more direct approach involves using known matrix calculus identities (see Section 4). For this specific case:
$$ \nabla_\mathbf{X} \text{Tr}(\mathbf{X}^T \mathbf{A} \mathbf{X}) = 2 \mathbf{A} \mathbf{X} $$
(assuming $\mathbf{A}$ is symmetric). If $\mathbf{A}$ is not symmetric, the gradient is $\mathbf{A}^T \mathbf{X} + \mathbf{A} \mathbf{X}$.

**Relevance to Machine Learning:**

Matrix gradients are essential for:

*   **Linear Regression:** Deriving the closed-form solution for the weight vector involves finding the gradient of the Mean Squared Error with respect to the weight matrix.
*   **Neural Networks:** Calculating gradients for weight matrices in layers.
*   **Matrix Factorization Techniques:** Optimizing objectives involving matrix operations.

**Alignment with Course Outcomes:**

*   **CO2:** Perform calculus operations on functions of several variables and matrices, including partial derivatives and gradients. (Knowledge Level: K3)
*   **CO4:** Train Machine Learning Models using unconstrained and constrained optimization methods. (Knowledge Level: K3) - Gradient calculations are fundamental for optimization.

**Textbook References:**

*   **Mathematics for Machine Learning (Deisenroth, Faisal, Ong):** Chapter 4.5 covers gradients with respect to matrices.
*   **Introduction to Applied Linear Algebra (Boyd, Vandenberghe):** Chapter 5 discusses differentiation with respect to matrix variables.

---

### 4. Useful Identities for Computing Gradients

Matrix calculus provides a set of identities that greatly simplify the computation of gradients. These are invaluable for deriving ML algorithms.

**Key Concepts & Identities:**

Let $\mathbf{x}$ be a vector, $\mathbf{y}$ be a vector, $\mathbf{A}$ be a matrix, and $f$ be a scalar-valued function.

1.  **Gradient of a linear function:**
    *   $f(\mathbf{x}) = \mathbf{a}^T \mathbf{x}$ for some vector $\mathbf{a}$.
        $$ \nabla_\mathbf{x} (\mathbf{a}^T \mathbf{x}) = \mathbf{a} $$
    *   $f(\mathbf{x}) = \mathbf{x}^T \mathbf{a}$ (same as above).
        $$ \nabla_\mathbf{x} (\mathbf{x}^T \mathbf{a}) = \mathbf{a} $$

2.  **Gradient of a quadratic function:**
    *   $f(\mathbf{x}) = \mathbf{x}^T \mathbf{A} \mathbf{x}$ for some matrix $\mathbf{A}$.
        $$ \nabla_\mathbf{x} (\mathbf{x}^T \mathbf{A} \mathbf{x}) = (\mathbf{A} + \mathbf{A}^T) \mathbf{x} $$
    *   **Special case: If $\mathbf{A}$ is symmetric ($\mathbf{A} = \mathbf{A}^T$):**
        $$ \nabla_\mathbf{x} (\mathbf{x}^T \mathbf{A} \mathbf{x}) = 2 \mathbf{A} \mathbf{x} $$

3.  **Gradient of the trace of a matrix product:**
    *   $f(\mathbf{X}) = \text{Tr}(\mathbf{A}^T \mathbf{X})$ for matrices $\mathbf{A}, \mathbf{X}$.
        $$ \nabla_\mathbf{X} \text{Tr}(\mathbf{A}^T \mathbf{X}) = \mathbf{A} $$
    *   $f(\mathbf{X}) = \text{Tr}(\mathbf{X}^T \mathbf{A})$ for matrices $\mathbf{A}, \mathbf{X}$.
        $$ \nabla_\mathbf{X} \text{Tr}(\mathbf{X}^T \mathbf{A}) = \mathbf{A} $$
        (Since $\text{Tr}(\mathbf{X}^T \mathbf{A}) = \text{Tr}(\mathbf{A}^T \mathbf{X})$).
    *   $f(\mathbf{X}) = \text{Tr}(\mathbf{X} \mathbf{A})$ for matrices $\mathbf{A}, \mathbf{X}$.
        $$ \nabla_\mathbf{X} \text{Tr}(\mathbf{X} \mathbf{A}) = \mathbf{A}^T $$
    *   $f(\mathbf{X}) = \text{Tr}(\mathbf{A} \mathbf{X})$ for matrices $\mathbf{A}, \mathbf{X}$.
        $$ \nabla_\mathbf{X} \text{Tr}(\mathbf{A} \mathbf{X}) = \mathbf{A}^T $$
        (Since $\text{Tr}(\mathbf{A} \mathbf{X}) = \text{Tr}(\mathbf{X} \mathbf{A})$).

4.  **Gradient of the trace of $\mathbf{X}$:**
    *   $f(\mathbf{X}) = \text{Tr}(\mathbf{X})$
        $$ \nabla_\mathbf{X} \text{Tr}(\mathbf{X}) = \mathbf{I} $$
        where $\mathbf{I}$ is the identity matrix of the same dimensions as $\mathbf{X}$.

5.  **Gradient of the determinant of a matrix:**
    *   $f(\mathbf{X}) = \det(\mathbf{X})$
        $$ \nabla_\mathbf{X} \det(\mathbf{X}) = \det(\mathbf{X}) (\mathbf{X}^{-1})^T $$
    *   **If $\mathbf{X}$ is symmetric:**
        $$ \nabla_\mathbf{X} \det(\mathbf{X}) = \det(\mathbf{X}) \mathbf{X}^{-1} $$

6.  **Chain Rule for Matrix Calculus:**
    If $y = f(u)$ and $u = g(\mathbf{x})$, then:
    $$ \nabla_\mathbf{x} y = \left(\frac{df}{du}\right) \nabla_\mathbf{x} u $$
    If $z = f(\mathbf{y})$ and $\mathbf{y} = \mathbf{g}(\mathbf{x})$, then:
    $$ \nabla_\mathbf{x} z = (\nabla_\mathbf{y} f(\mathbf{y}))^T J_g(\mathbf{x}) $$
    where $\nabla_\mathbf{y} f$ is a row vector of partial derivatives of $f$ with respect to components of $\mathbf{y}$, and $J_g(\mathbf{x})$ is the Jacobian of $\mathbf{g}$.

**Example of using Identities:**

Consider the loss function for linear regression: $L(\mathbf{w}) = \frac{1}{2n} \| \mathbf{y} - \mathbf{X} \mathbf{w} \|_2^2$.
We want to find $\nabla_\mathbf{w} L(\mathbf{w})$.

$$ L(\mathbf{w}) = \frac{1}{2n} (\mathbf{y} - \mathbf{X} \mathbf{w})^T (\mathbf{y} - \mathbf{X} \mathbf{w}) $$
$$ L(\mathbf{w}) = \frac{1}{2n} (\mathbf{y}^T - \mathbf{w}^T \mathbf{X}^T) (\mathbf{y} - \mathbf{X} \mathbf{w}) $$
$$ L(\mathbf{w}) = \frac{1}{2n} (\mathbf{y}^T \mathbf{y} - \mathbf{y}^T \mathbf{X} \mathbf{w} - \mathbf{w}^T \mathbf{X}^T \mathbf{y} + \mathbf{w}^T \mathbf{X}^T \mathbf{X} \mathbf{w}) $$

Using the identities:
*   $\nabla_\mathbf{w} (\mathbf{y}^T \mathbf{y}) = \mathbf{0}$ (constant with respect to $\mathbf{w}$)
*   $\nabla_\mathbf{w} (\mathbf{y}^T \mathbf{X} \mathbf{w}) = (\mathbf{y}^T \mathbf{X})^T = \mathbf{X}^T \mathbf{y}$
*   $\nabla_\mathbf{w} (\mathbf{w}^T \mathbf{X}^T \mathbf{y}) = \mathbf{X}^T \mathbf{y}$
*   $\nabla_\mathbf{w} (\mathbf{w}^T \mathbf{X}^T \mathbf{X} \mathbf{w}) = (\mathbf{X}^T \mathbf{X} + (\mathbf{X}^T \mathbf{X})^T) \mathbf{w} = 2 \mathbf{X}^T \mathbf{X} \mathbf{w}$ (since $\mathbf{X}^T \mathbf{X}$ is symmetric)

So,
$$ \nabla_\mathbf{w} L(\mathbf{w}) = \frac{1}{2n} (\mathbf{0} - \mathbf{X}^T \mathbf{y} - \mathbf{X}^T \mathbf{y} + 2 \mathbf{X}^T \mathbf{X} \mathbf{w}) $$
$$ \nabla_\mathbf{w} L(\mathbf{w}) = \frac{1}{2n} (-2 \mathbf{X}^T \mathbf{y} + 2 \mathbf{X}^T \mathbf{X} \mathbf{w}) $$
$$ \nabla_\mathbf{w} L(\mathbf{w}) = \frac{1}{n} (\mathbf{X}^T \mathbf{X} \mathbf{w} - \mathbf{X}^T \mathbf{y}) $$

This result is crucial for finding the minimum of the loss function by setting the gradient to zero.

**Relevance to Machine Learning:**

These identities are the backbone of deriving analytical solutions and implementing gradient-based optimization for various ML models. They allow us to efficiently compute gradients without resorting to symbolic differentiation for every problem.

**Alignment with Course Outcomes:**

*   **CO2:** Perform calculus operations on functions of several variables and matrices, including partial derivatives and gradients. (Knowledge Level: K3)
*   **CO4:** Train Machine Learning Models using unconstrained and constrained optimization methods. (Knowledge Level: K3)

**Textbook References:**

*   **Mathematics for Machine Learning (Deisenroth, Faisal, Ong):** Chapter 4.5 and Appendix C provide extensive lists of useful matrix calculus identities.
*   **Introduction to Applied Linear Algebra (Boyd, Vandenberghe):** Chapter 5 includes many practical derivatives.
*   **Convex Optimization (Boyd, Vandenberghe):** Appendix A provides a comprehensive overview of matrix calculus.

---

### Practice Questions and Exercises

**Question 1 (Partial Derivatives):**
Given the function $f(x, y, z) = e^{xy} \cos(z) + x^2y^3z$.
Calculate:
a) $\frac{\partial f}{\partial x}$
b) $\frac{\partial f}{\partial y}$
c) $\frac{\partial f}{\partial z}$
d) $\nabla f(1, 2, \pi/2)$

**Answer 1:**
a) $\frac{\partial f}{\partial x} = ye^{xy} \cos(z) + 2xy^2z$
b) $\frac{\partial f}{\partial y} = xe^{xy} \cos(z) + 3x^2y^2z$
c) $\frac{\partial f}{\partial z} = -e^{xy} \sin(z) + x^2y^3$
d) $\nabla f(1, 2, \pi/2) = \begin{pmatrix} 2e^2 \cos(\pi/2) + 2(1)(2^2)(\pi/2) \\ 1e^2 \cos(\pi/2) + 3(1^2)(2^2)(\pi/2) \\ -e^2 \sin(\pi/2) + 1^2(2^3) \end{pmatrix} = \begin{pmatrix} 0 + 2\pi \\ 0 + 6\pi \\ -e^2 + 8 \end{pmatrix} = \begin{pmatrix} 2\pi \\ 6\pi \\ 8 - e^2 \end{pmatrix}$

**Question 2 (Jacobian Matrix):**
Let $\mathbf{g}(\mathbf{x}) = \begin{pmatrix} x_1^2 + x_2 \\ x_1 x_2^2 \end{pmatrix}$, where $\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}$.
Compute the Jacobian matrix of $\mathbf{g}(\mathbf{x})$.

**Answer 2:**
The component functions are $g_1(x_1, x_2) = x_1^2 + x_2$ and $g_2(x_1, x_2) = x_1 x_2^2$.
Partial derivatives:
$\frac{\partial g_1}{\partial x_1} = 2x_1$
$\frac{\partial g_1}{\partial x_2} = 1$
$\frac{\partial g_2}{\partial x_1} = x_2^2$
$\frac{\partial g_2}{\partial x_2} = 2x_1 x_2$

The Jacobian matrix is:
$$ J_{\mathbf{g}}(\mathbf{x}) = \begin{pmatrix} 2x_1 & 1 \\ x_2^2 & 2x_1 x_2 \end{pmatrix} $$

**Question 3 (Matrix Gradients using Identities):**
Let $f(\mathbf{X}) = \text{Tr}(\mathbf{A} \mathbf{X}^T \mathbf{B})$, where $\mathbf{X}, \mathbf{A}, \mathbf{B}$ are appropriately sized matrices.
Find $\nabla_\mathbf{X} f(\mathbf{X})$.

**Answer 3:**
We can use the property $\text{Tr}(\mathbf{M}) = \text{Tr}(\mathbf{M}^T)$.
$f(\mathbf{X}) = \text{Tr}((\mathbf{A} \mathbf{X}^T \mathbf{B})^T) = \text{Tr}(\mathbf{B}^T \mathbf{X} \mathbf{A}^T)$.
Using the identity $\nabla_\mathbf{X} \text{Tr}(\mathbf{B}^T \mathbf{X} \mathbf{A}^T) = (\mathbf{B}^T)^T (\mathbf{A}^T)^T = \mathbf{B} \mathbf{A}$.
Alternatively, using $\text{Tr}(\mathbf{A X}^T \mathbf{B}) = \text{Tr}(\mathbf{B A X}^T)$, then $\nabla_\mathbf{X} \text{Tr}(\mathbf{B A X}^T) = \mathbf{B A}$. (This is a specific case of the product rule for traces).

So, $\nabla_\mathbf{X} f(\mathbf{X}) = \mathbf{B} \mathbf{A}$.

**Question 4 (Gradient of a Quadratic Form):**
Let $f(\mathbf{x}) = (\mathbf{x} - \mathbf{b})^T \mathbf{Q} (\mathbf{x} - \mathbf{b})$, where $\mathbf{Q}$ is a symmetric positive definite matrix.
Find $\nabla_\mathbf{x} f(\mathbf{x})$.

**Answer 4:**
Let $\mathbf{y} = \mathbf{x} - \mathbf{b}$. Then $f(\mathbf{x}) = \mathbf{y}^T \mathbf{Q} \mathbf{y}$.
Using the chain rule: $\nabla_\mathbf{x} f(\mathbf{x}) = \frac{df}{d\mathbf{y}} \frac{d\mathbf{y}}{d\mathbf{x}}$.
We know $\frac{df}{d\mathbf{y}} = 2 \mathbf{Q} \mathbf{y}$ (since $\mathbf{Q}$ is symmetric).
And $\frac{d\mathbf{y}}{d\mathbf{x}} = \nabla_\mathbf{x} (\mathbf{x} - \mathbf{b}) = \mathbf{I}$ (the identity matrix).
So, $\nabla_\mathbf{x} f(\mathbf{x}) = (2 \mathbf{Q} \mathbf{y})^T \mathbf{I} = 2 \mathbf{y}^T \mathbf{Q}^T$. This is not right dimensionally.

Let's re-apply the identity directly:
$\nabla_\mathbf{x} (\mathbf{x}^T \mathbf{A} \mathbf{x}) = (\mathbf{A} + \mathbf{A}^T) \mathbf{x}$.
In our case, $\mathbf{A} = \mathbf{Q}$.
So, $\nabla_\mathbf{x} (\mathbf{x}^T \mathbf{Q} \mathbf{x}) = (\mathbf{Q} + \mathbf{Q}^T) \mathbf{x} = 2 \mathbf{Q} \mathbf{x}$ (since $\mathbf{Q}$ is symmetric).

Now consider $f(\mathbf{x}) = (\mathbf{x} - \mathbf{b})^T \mathbf{Q} (\mathbf{x} - \mathbf{b})$.
Let $\mathbf{z} = \mathbf{x} - \mathbf{b}$.
$f(\mathbf{x}) = \mathbf{z}^T \mathbf{Q} \mathbf{z}$.
We need $\nabla_\mathbf{x} f(\mathbf{x})$.
Using the chain rule for vector calculus: $\nabla_\mathbf{x} f(\mathbf{x}) = \nabla_\mathbf{z} (\mathbf{z}^T \mathbf{Q} \mathbf{z}) \cdot \nabla_\mathbf{x} \mathbf{z}$.
$\nabla_\mathbf{z} (\mathbf{z}^T \mathbf{Q} \mathbf{z}) = 2 \mathbf{Q} \mathbf{z}$.
$\nabla_\mathbf{x} \mathbf{z} = \nabla_\mathbf{x} (\mathbf{x} - \mathbf{b}) = \mathbf{I}$.
So, $\nabla_\mathbf{x} f(\mathbf{x}) = (2 \mathbf{Q} \mathbf{z})^T \mathbf{I}$. This is still dimensionally incorrect.

Let's expand and differentiate:
$f(\mathbf{x}) = (\mathbf{x}^T - \mathbf{b}^T) \mathbf{Q} (\mathbf{x} - \mathbf{b})$
$f(\mathbf{x}) = \mathbf{x}^T \mathbf{Q} \mathbf{x} - \mathbf{x}^T \mathbf{Q} \mathbf{b} - \mathbf{b}^T \mathbf{Q} \mathbf{x} + \mathbf{b}^T \mathbf{Q} \mathbf{b}$

$\nabla_\mathbf{x} f(\mathbf{x}) = \nabla_\mathbf{x}(\mathbf{x}^T \mathbf{Q} \mathbf{x}) - \nabla_\mathbf{x}(\mathbf{x}^T \mathbf{Q} \mathbf{b}) - \nabla_\mathbf{x}(\mathbf{b}^T \mathbf{Q} \mathbf{x}) + \nabla_\mathbf{x}(\mathbf{b}^T \mathbf{Q} \mathbf{b})$
Using identities:
$\nabla_\mathbf{x}(\mathbf{x}^T \mathbf{Q} \mathbf{x}) = 2 \mathbf{Q} \mathbf{x}$ (since $\mathbf{Q}$ is symmetric)
$\nabla_\mathbf{x}(\mathbf{x}^T \mathbf{Q} \mathbf{b}) = (\mathbf{Q} \mathbf{b})$
$\nabla_\mathbf{x}(\mathbf{b}^T \mathbf{Q} \mathbf{x}) = (\mathbf{b}^T \mathbf{Q})^T = \mathbf{Q}^T \mathbf{b}$
$\nabla_\mathbf{x}(\mathbf{b}^T \mathbf{Q} \mathbf{b}) = \mathbf{0}$

So, $\nabla_\mathbf{x} f(\mathbf{x}) = 2 \mathbf{Q} \mathbf{x} - \mathbf{Q} \mathbf{b} - \mathbf{Q}^T \mathbf{b}$.
Since $\mathbf{Q}$ is symmetric, $\mathbf{Q}^T = \mathbf{Q}$.
$\nabla_\mathbf{x} f(\mathbf{x}) = 2 \mathbf{Q} \mathbf{x} - 2 \mathbf{Q} \mathbf{b} = 2 (\mathbf{Q} \mathbf{x} - \mathbf{Q} \mathbf{b}) = 2 \mathbf{Q} (\mathbf{x} - \mathbf{b})$.
This matches the gradient of $2\mathbf{Q}\mathbf{y}$ where $\mathbf{y}=\mathbf{x}-\mathbf{b}$.

Final Answer: $2 \mathbf{Q} (\mathbf{x} - \mathbf{b})$

---

### Important Points to Remember

*   **Gradient points to steepest ascent.** To minimize a function, we move in the negative gradient direction.
*   **Jacobian matrix generalizes the gradient** for vector-valued functions. Its columns are the gradients of the component functions.
*   **Matrix calculus identities** are crucial for efficiency. Always try to use them.
*   **Symmetry** of matrices ($\mathbf{A} = \mathbf{A}^T$) often simplifies gradient formulas (e.g., $\mathbf{x}^T \mathbf{A} \mathbf{x}$).
*   **Trace properties** (like $\text{Tr}(\mathbf{A}) = \text{Tr}(\mathbf{A}^T)$) are very useful for manipulating expressions before differentiation.
*   The **chain rule** is a fundamental tool for differentiating composite functions, including those involving vector and matrix operations.

---

### Alignment with Course Outcomes

This module directly addresses the following Course Outcomes:

*   **CO1:** Make use of the concepts, rules and results about linear equations, matrix algebra, vector spaces, eigenvalues & eigenvectors and orthogonality & diagonalization to solve computational problems.
    *   While not the primary focus of *this specific topic*, understanding vectors and matrices (from Linear Algebra) is a prerequisite for vector calculus. Operations like $\mathbf{a}^T \mathbf{x}$ and $\mathbf{x}^T \mathbf{A} \mathbf{x}$ are core to these concepts.
*   **CO2:** Perform calculus operations on functions of several variables and matrices, including partial derivatives and gradients.
    *   This is the **central outcome** of this topic. We've covered partial derivatives, gradients of scalar-valued functions, Jacobians of vector-valued functions, and gradients of matrices.
*   **CO3:** Utilize the concepts, rules and results about probability, random variables, additive & multiplicative rules, conditional probability, probability distributions and Bayes’ theorem to find solutions of computational problems.
    *   Probability and calculus often intersect in ML, especially in areas like maximum likelihood estimation and Bayesian inference where we often need to differentiate probability density functions or likelihood functions.
*   **CO4:** Train Machine Learning Models using unconstrained and constrained optimization methods.
    *   The ability to compute gradients (as covered in this module) is **fundamental for unconstrained optimization methods** like gradient descent, which are used to train many ML models. Without gradients, optimization would be significantly harder.

This module provides the essential calculus tools required to understand and implement the optimization techniques that underpin Machine Learning model training.
