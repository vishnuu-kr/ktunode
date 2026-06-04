---
title: "Taylor’s method"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 3: Numerical solution of ordinary differential equations"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646b9"
status: "completed"
scrapedAt: "2026-05-20T18:23:18.250Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - Module 3: Numerical Solution of Ordinary Differential Equations

## Topic: Taylor's Method

This module focuses on numerically solving Ordinary Differential Equations (ODEs). Taylor's method is a foundational technique that uses Taylor series expansions to approximate the solution of ODEs.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of Taylor series expansion and its application to ODEs.
*   Derive and apply Taylor's methods of different orders for solving ODEs.
*   Analyze the accuracy and limitations of Taylor's methods.
*   Compare Taylor's method with other numerical methods for solving ODEs.

### Course Outcomes Addressed

This topic directly contributes to:

*   **CO4: Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3)**

### Introduction to Ordinary Differential Equations (ODEs)

An Ordinary Differential Equation (ODE) is an equation that involves an unknown function and its derivatives with respect to a single independent variable. A common form of a first-order ODE is:

$$ \frac{dy}{dx} = f(x, y) $$

with an initial condition $y(x_0) = y_0$.

Numerical methods are used to approximate the solution $y(x)$ at discrete points $x_0, x_1, x_2, \ldots$, where $x_{i+1} = x_i + h$ and $h$ is the step size.

### Taylor's Method for Solving ODEs

Taylor's method is a direct application of the Taylor series expansion to approximate the value of the solution at the next step.

**Key Concept: Taylor Series Expansion**

The Taylor series expansion of a function $y(x)$ around a point $x_i$ is given by:

$$ y(x_{i+1}) = y(x_i) + \frac{h}{1!} y'(x_i) + \frac{h^2}{2!} y''(x_i) + \frac{h^3}{3!} y'''(x_i) + \cdots + \frac{h^n}{n!} y^{(n)}(x_i) + R_n(x_{i+1}) $$

where $h = x_{i+1} - x_i$, $y'(x_i) = \frac{dy}{dx}\Big|_{x_i}$, $y''(x_i)$ is the second derivative, and so on. $R_n(x_{i+1})$ is the remainder term.

To apply this to ODEs, we need to express the derivatives of $y$ in terms of $x$ and $y$.

#### Taylor's Method of Order 1 (Euler's Method)

If we truncate the Taylor series after the first derivative term, we get:

$$ y_{i+1} \approx y_i + h y'_i $$

Since $y'(x) = f(x, y)$, we have:

$$ y_{i+1} \approx y_i + h f(x_i, y_i) $$

This is known as **Euler's method**, which is the first-order Taylor's method.

**Example 1: Euler's Method**

Solve $\frac{dy}{dx} = -2y + 6x$ with $y(0) = 1$ from $x=0$ to $x=2$ using Euler's method with a step size $h=0.2$.

Here, $f(x, y) = -2y + 6x$, $x_0 = 0$, $y_0 = 1$, $h = 0.2$.

*   **Step 1 (i=0):** $x_0 = 0, y_0 = 1$
    $y_1 \approx y_0 + h f(x_0, y_0) = 1 + 0.2 (-2(1) + 6(0)) = 1 + 0.2(-2) = 1 - 0.4 = 0.6$
    $x_1 = x_0 + h = 0 + 0.2 = 0.2$

*   **Step 2 (i=1):** $x_1 = 0.2, y_1 = 0.6$
    $y_2 \approx y_1 + h f(x_1, y_1) = 0.6 + 0.2 (-2(0.6) + 6(0.2)) = 0.6 + 0.2 (-1.2 + 1.2) = 0.6 + 0.2(0) = 0.6$
    $x_2 = x_1 + h = 0.2 + 0.2 = 0.4$

*   **Step 3 (i=2):** $x_2 = 0.4, y_2 = 0.6$
    $y_3 \approx y_2 + h f(x_2, y_2) = 0.6 + 0.2 (-2(0.6) + 6(0.4)) = 0.6 + 0.2 (-1.2 + 2.4) = 0.6 + 0.2(1.2) = 0.6 + 0.24 = 0.84$
    $x_3 = x_2 + h = 0.4 + 0.2 = 0.6$

**(Reference: Chapra & Canale, Chapter 26; Gupta, Chapter 15)**

#### Taylor's Method of Order 2

To achieve higher accuracy, we need to include higher-order derivative terms. For Taylor's method of order 2, we use up to the second derivative:

$$ y_{i+1} \approx y_i + h y'_i + \frac{h^2}{2!} y''_i $$

We need to find expressions for $y''$ in terms of $x$ and $y$. Differentiating the ODE $\frac{dy}{dx} = f(x, y)$ with respect to $x$:

$$ y''(x) = \frac{d}{dx} f(x, y) $$

Using the chain rule:

$$ y''(x) = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} \frac{dy}{dx} = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} f(x, y) $$

So, the Taylor's method of order 2 is:

$$ y_{i+1} \approx y_i + h f(x_i, y_i) + \frac{h^2}{2} \left( \frac{\partial f}{\partial x} \Big|_{x_i, y_i} + \frac{\partial f}{\partial y} \Big|_{x_i, y_i} f(x_i, y_i) \right) $$

**Example 2: Taylor's Method of Order 2**

Solve $\frac{dy}{dx} = x + y$ with $y(0) = 1$ from $x=0$ to $x=0.2$ using Taylor's method of order 2 with $h=0.2$.

Here, $f(x, y) = x + y$, $x_0 = 0$, $y_0 = 1$, $h = 0.2$.

First, find the second derivative:
$\frac{\partial f}{\partial x} = 1$
$\frac{\partial f}{\partial y} = 1$
$y''(x) = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} f(x, y) = 1 + (1)(x+y) = 1 + x + y$

Now, apply the formula:
$y_{i+1} \approx y_i + h f(x_i, y_i) + \frac{h^2}{2} (1 + x_i + y_i)$

*   **Step 1 (i=0):** $x_0 = 0, y_0 = 1$
    $f(x_0, y_0) = 0 + 1 = 1$
    $y_1 \approx y_0 + h f(x_0, y_0) + \frac{h^2}{2} (1 + x_0 + y_0)$
    $y_1 \approx 1 + 0.2(1) + \frac{(0.2)^2}{2} (1 + 0 + 1)$
    $y_1 \approx 1 + 0.2 + \frac{0.04}{2} (2)$
    $y_1 \approx 1 + 0.2 + 0.02(2) = 1 + 0.2 + 0.04 = 1.24$
    $x_1 = 0.2$

The exact solution is $y(x) = 2e^x - x - 1$.
$y(0.2) = 2e^{0.2} - 0.2 - 1 \approx 2(1.2214) - 1.2 = 2.4428 - 1.2 = 1.2428$.
The Taylor's method of order 2 gives a much closer approximation.

**(Reference: Chapra & Canale, Chapter 26; Balagurusamy, Chapter 12)**

#### Taylor's Method of Higher Orders

In general, Taylor's method of order $n$ is given by:

$$ y_{i+1} = y_i + h y'_i + \frac{h^2}{2!} y''_i + \frac{h^3}{3!} y'''_i + \cdots + \frac{h^n}{n!} y^{(n)}_i $$

To implement this, we need to compute the successive derivatives of $y$ using the chain rule repeatedly on $f(x, y)$.

For Taylor's method of order $n$, the global error is proportional to $h^n$. The local error (error introduced in a single step) is proportional to $h^{n+1}$.

#### Handling Higher-Order ODEs

A $k$-th order ODE can be converted into a system of $k$ first-order ODEs. For example, a second-order ODE:

$$ \frac{d^2y}{dx^2} = g(x, y, \frac{dy}{dx}) $$

Let $z = \frac{dy}{dx}$. Then $\frac{dz}{dx} = g(x, y, z)$. We now have a system of two first-order ODEs:

1.  $\frac{dy}{dx} = z$
2.  $\frac{dz}{dx} = g(x, y, z)$

Taylor's method can then be applied to each equation in the system simultaneously.

**Example 3: Second-Order ODE**

Solve $\frac{d^2y}{dx^2} = -y$ with $y(0) = 0$ and $y'(0) = 1$ from $x=0$ to $x=\pi/2$ with $h=\pi/4$.

Let $y_1 = y$ and $y_2 = y'$. Then the system of first-order ODEs is:
1.  $\frac{dy_1}{dx} = y_2$
2.  $\frac{dy_2}{dx} = -y_1$

Initial conditions: $y_1(0) = 0$, $y_2(0) = 1$.

Here, $f_1(x, y_1, y_2) = y_2$ and $f_2(x, y_1, y_2) = -y_1$.

Let's use Taylor's method of order 2 (which involves first and second derivatives of $y$).
We need $y''(x)$ and $y'''(x)$.
$y'(x) = y_2$
$y''(x) = \frac{dy_2}{dx} = -y_1$
$y'''(x) = \frac{d}{dx}(-y_1) = -\frac{dy_1}{dx} = -y_2$

Taylor's method of order 2 for $y(x)$:
$y_{i+1} \approx y_i + h y'_i + \frac{h^2}{2} y''_i$
$y_{i+1} \approx y_i + h y_{2,i} + \frac{h^2}{2} (-y_{1,i})$

Taylor's method of order 2 for $y'(x)$:
$y'_{i+1} \approx y'_i + h y''_i + \frac{h^2}{2} y'''_i$
$y_{2,i+1} \approx y_{2,i} + h (-y_{1,i}) + \frac{h^2}{2} (-y_{2,i})$

$h = \pi/4 \approx 0.7854$

*   **Step 1 (i=0):** $x_0 = 0, y_{1,0} = 0, y_{2,0} = 1$
    $y_{1,1} \approx y_{1,0} + h y_{2,0} + \frac{h^2}{2} (-y_{1,0})$
    $y_{1,1} \approx 0 + (\pi/4)(1) + \frac{(\pi/4)^2}{2} (0) = \pi/4 \approx 0.7854$

    $y_{2,1} \approx y_{2,0} + h (-y_{1,0}) + \frac{h^2}{2} (-y_{2,0})$
    $y_{2,1} \approx 1 + (\pi/4)(0) + \frac{(\pi/4)^2}{2} (-1) = 1 - \frac{(\pi/4)^2}{2} \approx 1 - \frac{(0.7854)^2}{2} \approx 1 - \frac{0.6168}{2} \approx 1 - 0.3084 = 0.6916$

    $x_1 = \pi/4$

The exact solution is $y(x) = \sin(x)$.
$y(\pi/4) = \sin(\pi/4) = \frac{\sqrt{2}}{2} \approx 0.7071$.
The approximation $0.7854$ is not very close with this step size. Higher order Taylor methods would be needed, or a smaller step size.

**(Reference: Jain, Iyengar, & Jain, Chapter 3; Gerald & Wheatly, Chapter 9)**

### Accuracy and Limitations of Taylor's Method

**Accuracy:**

*   The accuracy of Taylor's method depends on the order of the method and the step size $h$.
*   Higher-order Taylor methods (using more derivative terms) generally provide better accuracy for a given step size.
*   The truncation error in Taylor's method of order $n$ is proportional to $h^{n+1}$. This means if you halve the step size, the error reduces by a factor of $2^{n+1}$.

**Limitations:**

*   **Derivatives:** Calculating higher-order derivatives of $f(x, y)$ can be complex and computationally intensive, especially for complicated functions.
*   **Computational Cost:** As the order of the method increases, the number of derivatives to compute and evaluate increases significantly, leading to higher computational cost.
*   **Round-off Error:** With very high-order methods and small step sizes, the accumulation of round-off errors can become a significant issue.
*   **Not Self-Starting for Higher-Order ODEs:** To start a higher-order method for an ODE of order $m$, you need the first $m-1$ derivatives of the solution at the initial point, which might not always be readily available.

**Important Point:** Taylor's method is conceptually important as it forms the basis for many other, more efficient, numerical methods for solving ODEs (like Runge-Kutta methods), which approximate the higher-order derivatives without explicitly computing them.

### Comparison with Other Methods

*   **Euler's Method (Taylor Order 1):** Simple but least accurate. The error per step is $O(h^2)$.
*   **Taylor Methods of Higher Orders:** More accurate than Euler's method, but require explicit computation of derivatives.
*   **Runge-Kutta Methods:** These methods achieve similar accuracy to Taylor's methods of the same order but avoid explicit calculation of higher-order derivatives by using judiciously chosen intermediate steps. For example, the classic fourth-order Runge-Kutta method is often preferred over Taylor's method of order 4 due to its simpler implementation (no need to compute $y^{(4)}$).

**(Reference: Chapra & Canale, Chapter 26)**

### Practice Questions/Exercises

1.  **Question:** Solve the ODE $\frac{dy}{dx} = x^2 + y$ with $y(0) = 1$ from $x=0$ to $x=0.2$ using Taylor's method of order 2 with a step size of $h=0.2$.
    **Answer:**
    $f(x,y) = x^2 + y$
    $\frac{\partial f}{\partial x} = 2x$
    $\frac{\partial f}{\partial y} = 1$
    $y'' = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} f = 2x + 1(x^2 + y) = 2x + x^2 + y$

    Taylor's method of order 2: $y_{i+1} = y_i + h f(x_i, y_i) + \frac{h^2}{2} (2x_i + x_i^2 + y_i)$

    *   **Step 1 (i=0):** $x_0 = 0, y_0 = 1, h=0.2$
        $f(x_0, y_0) = 0^2 + 1 = 1$
        $y_1 = 1 + 0.2(1) + \frac{(0.2)^2}{2} (2(0) + 0^2 + 1)$
        $y_1 = 1 + 0.2 + \frac{0.04}{2} (1)$
        $y_1 = 1 + 0.2 + 0.02 = 1.22$
        $x_1 = 0.2$

2.  **Question:** Consider the ODE $\frac{dy}{dx} = y - x^2$. Use Taylor's method of order 3 to find $y(0.2)$, given $y(0) = 2$ and $h=0.2$.
    **Answer:**
    $f(x,y) = y - x^2$
    $y' = y - x^2$
    $y'' = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} f = 0 + 1(y - x^2) = y - x^2$
    $y''' = \frac{d}{dx}(y - x^2) = \frac{dy}{dx} - 2x = (y - x^2) - 2x$

    Taylor's method of order 3: $y_{i+1} = y_i + h y'_i + \frac{h^2}{2} y''_i + \frac{h^3}{6} y'''_i$
    $y_{i+1} = y_i + h(y_i - x_i^2) + \frac{h^2}{2}(y_i - x_i^2) + \frac{h^3}{6}(y_i - x_i^2 - 2x_i)$

    *   **Step 1 (i=0):** $x_0 = 0, y_0 = 2, h=0.2$
        $y'_0 = y_0 - x_0^2 = 2 - 0^2 = 2$
        $y''_0 = y_0 - x_0^2 = 2 - 0^2 = 2$
        $y'''_0 = y_0 - x_0^2 - 2x_0 = 2 - 0^2 - 2(0) = 2$

        $y_1 = y_0 + h y'_0 + \frac{h^2}{2} y''_0 + \frac{h^3}{6} y'''_0$
        $y_1 = 2 + 0.2(2) + \frac{(0.2)^2}{2}(2) + \frac{(0.2)^3}{6}(2)$
        $y_1 = 2 + 0.4 + \frac{0.04}{2}(2) + \frac{0.008}{6}(2)$
        $y_1 = 2 + 0.4 + 0.04 + 0.002667$
        $y_1 = 2.442667$
        $x_1 = 0.2$

3.  **Question:** For the ODE $\frac{dy}{dx} = y$, use Taylor's method of order 2 to approximate $y(0.2)$ starting from $y(0) = 1$. Use $h=0.1$.
    **Answer:**
    $f(x,y) = y$
    $y' = y$
    $y'' = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} f = 0 + 1(y) = y$

    Taylor's method of order 2: $y_{i+1} = y_i + h y_i + \frac{h^2}{2} y_i = y_i (1 + h + \frac{h^2}{2})$

    *   **Step 1 (i=0):** $x_0 = 0, y_0 = 1, h=0.1$
        $y_1 = 1 (1 + 0.1 + \frac{(0.1)^2}{2}) = 1 (1 + 0.1 + 0.005) = 1.105$
        $x_1 = 0.1$

    *   **Step 2 (i=1):** $x_1 = 0.1, y_1 = 1.105, h=0.1$
        $y_2 = 1.105 (1 + 0.1 + \frac{(0.1)^2}{2}) = 1.105 (1.105) = 1.221025$
        $x_2 = 0.2$

    The exact solution is $y(x) = e^x$. $y(0.2) = e^{0.2} \approx 1.221403$. The approximation is quite good.

### Summary and Key Takeaways

*   **Taylor's method** approximates the solution of an ODE by using Taylor series expansion.
*   **Order of Taylor's method** ($n$) dictates the number of derivative terms used in the expansion. Higher order means higher accuracy for a given step size.
*   The local truncation error for Taylor's method of order $n$ is $O(h^{n+1})$, and the global error is $O(h^n)$.
*   **Advantages:** Conceptually straightforward, forms the basis for other methods.
*   **Disadvantages:** Requires explicit computation of higher-order derivatives, which can be cumbersome and computationally expensive.
*   Higher-order ODEs can be solved by converting them into a system of first-order ODEs and applying Taylor's method to each equation.
*   While powerful, **Runge-Kutta methods** are generally preferred in practice for their efficiency in achieving accuracy without explicit derivative computations.

This topic provides a strong foundation for understanding the principles of numerical ODE solvers.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
