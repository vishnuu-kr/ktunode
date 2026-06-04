---
title: "Solution of first-order ordinary differential equations - stability of solution, Use of Taylor series, Euler’s method, Modified Euler’s method, Fourth order Runge-Kutta method."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 3: Solution of first"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b44"
status: "completed"
scrapedAt: "2026-05-20T18:46:50.392Z"
---
# Module 3: Solution of First-Order Ordinary Differential Equations

## Introduction

This module focuses on numerical methods for solving first-order ordinary differential equations (ODEs) of the form:

$ \frac{dy}{dx} = f(x, y) $

with an initial condition $y(x_0) = y_0$. We will explore techniques to approximate the solution $y(x)$ at discrete points.

---

## 1. Stability of Solutions in Numerical Methods

### 1.1 What is Stability?

In numerical methods for ODEs, stability refers to the behavior of the numerical solution as the step size ($h$) changes. A **stable** method produces a numerical solution that remains close to the true solution, even when subjected to small perturbations or round-off errors. An **unstable** method can lead to solutions that diverge significantly from the true solution, often exhibiting rapid growth of errors.

### 1.2 Sources of Instability

*   **Round-off Errors:** Errors introduced by finite precision arithmetic during calculations.
*   **Truncation Errors:** Errors introduced by approximating an infinite series or integral with a finite one (inherent in the method itself).
*   **Step Size (h):** A crucial factor. Too large a step size can lead to instability, while too small a step size can increase the accumulation of round-off errors and computational cost.

### 1.3 Types of Stability

*   **Absolute Stability:** The region of the complex plane where the numerical method does not amplify errors for a given step size.
*   **Conditional Stability:** The method is stable only for certain ranges of the step size $h$ and/or certain properties of the ODE. Most explicit methods are conditionally stable.
*   **Unconditional Stability:** The method is stable for any step size $h$. Implicit methods are often unconditionally stable.

### 1.4 Importance of Stability

Choosing a stable numerical method is crucial for obtaining reliable and accurate solutions. An unstable method can render the numerical results meaningless.

---

## 2. Use of Taylor Series for ODE Solutions

### 2.1 The Concept

The Taylor series expansion of a function $y(x)$ around a point $x_0$ is given by:

$ y(x_0 + h) = y(x_0) + h y'(x_0) + \frac{h^2}{2!} y''(x_0) + \frac{h^3}{3!} y'''(x_0) + \dots $

If we have an ODE $\frac{dy}{dx} = f(x, y)$, we can use this to approximate $y(x_0 + h)$ based on the value at $x_0$.

### 2.2 Derivation of Higher-Order Derivatives

To use the Taylor series, we need to express higher-order derivatives of $y$ in terms of $f(x, y)$:

*   $y'(x) = f(x, y)$
*   $y''(x) = \frac{d}{dx} y'(x) = \frac{d}{dx} f(x, y) = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} \frac{dy}{dx} = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} f(x, y)$
*   $y'''(x) = \frac{d}{dx} \left(\frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} f(x, y)\right) = \left(\frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial x \partial y} f(x, y)\right) + \left(\frac{\partial^2 f}{\partial y \partial x} f(x, y) + \frac{\partial^2 f}{\partial y^2} f(x, y)^2 + \frac{\partial f}{\partial y} \frac{df}{dx}\right)$
    And so on...

### 2.3 Taylor Series Method

Given $\frac{dy}{dx} = f(x, y)$ and $y(x_0) = y_0$:

$ y_{i+1} \approx y_i + h f(x_i, y_i) + \frac{h^2}{2!} y''(x_i, y_i) + \frac{h^3}{3!} y'''(x_i, y_i) + \dots $

where $y_{i+1} \approx y(x_{i+1})$ and $x_{i+1} = x_i + h$.

### 2.4 Example: Taylor Series Method (First-Order Approximation - Euler's Method)

Consider the ODE $\frac{dy}{dx} = x + y$ with $y(0) = 1$. Let's find $y(0.1)$ using a first-order Taylor series.

$y'(x) = x+y$
$y'(0) = 0 + y(0) = 0 + 1 = 1$

Using the first-order Taylor series (Euler's method):
$y(x_0 + h) \approx y(x_0) + h y'(x_0)$
$y(0.1) \approx y(0) + 0.1 \times y'(0) = 1 + 0.1 \times 1 = 1.1$

### 2.5 Higher-Order Taylor Series Methods

By including more terms in the Taylor series, we can achieve higher accuracy. However, calculating higher-order derivatives can become computationally intensive and complex.

---

## 3. Euler's Method (Forward Euler)

### 3.1 The Concept

Euler's method is the simplest numerical method for solving ODEs. It approximates the solution at the next step by assuming the slope remains constant over the step interval. This is essentially a first-order Taylor series expansion.

### 3.2 Derivation

Starting from the Taylor series:
$y(x_{i+1}) = y(x_i) + h y'(x_i) + \frac{h^2}{2!} y''(x_i) + \dots$

If we truncate the series after the first derivative term:
$y(x_{i+1}) \approx y(x_i) + h y'(x_i)$

Since $\frac{dy}{dx} = f(x, y)$, we have $y'(x_i) = f(x_i, y_i)$.
Therefore, the Euler's method formula is:

$y_{i+1} = y_i + h f(x_i, y_i)$
$x_{i+1} = x_i + h$

### 3.3 Error Analysis

*   **Local Truncation Error:** The error introduced in a single step. For Euler's method, it is $O(h^2)$.
*   **Global Truncation Error:** The accumulated error over the entire interval. For Euler's method, it is $O(h)$. This means if you halve the step size, the global error is roughly halved.

### 3.4 Example: Euler's Method

Consider the ODE $\frac{dy}{dx} = y - x$ with $y(0) = 2$. Find $y(0.2)$ using Euler's method with $h = 0.1$.

**Step 1: Initialization**
$x_0 = 0$, $y_0 = 2$, $h = 0.1$

**Step 2: First step (i=0)**
$x_1 = x_0 + h = 0 + 0.1 = 0.1$
$f(x_0, y_0) = y_0 - x_0 = 2 - 0 = 2$
$y_1 = y_0 + h f(x_0, y_0) = 2 + 0.1 \times 2 = 2 + 0.2 = 2.2$

**Step 3: Second step (i=1)**
$x_2 = x_1 + h = 0.1 + 0.1 = 0.2$
$f(x_1, y_1) = y_1 - x_1 = 2.2 - 0.1 = 2.1$
$y_2 = y_1 + h f(x_1, y_1) = 2.2 + 0.1 \times 2.1 = 2.2 + 0.21 = 2.41$

So, $y(0.2) \approx 2.41$.

### 3.5 Limitations of Euler's Method

*   **Low Accuracy:** Due to its $O(h)$ global error, it requires very small step sizes for good accuracy.
*   **Conditional Stability:** Can become unstable for stiff ODEs or large step sizes.

---

## 4. Modified Euler's Method (Heun's Method / Improved Euler Method)

### 4.1 The Concept

Modified Euler's method is a predictor-corrector method that aims to improve the accuracy of Euler's method. It first predicts a value for $y_{i+1}$ using Euler's method (the predictor step), and then uses this predicted value to calculate a more accurate slope for the corrector step.

### 4.2 Derivation

1.  **Predictor Step (using Euler's method):**
    $y_{i+1}^* = y_i + h f(x_i, y_i)$

2.  **Corrector Step (averaging slopes):**
    The idea is to use the average of the slope at the beginning of the interval $(x_i, y_i)$ and the slope at the estimated end of the interval $(x_{i+1}, y_{i+1}^*)$.
    Slope at the beginning: $k_1 = f(x_i, y_i)$
    Slope at the end (predicted): $k_2 = f(x_{i+1}, y_{i+1}^*)$

    The improved formula uses the average slope:
    $y_{i+1} = y_i + h \frac{k_1 + k_2}{2}$
    $y_{i+1} = y_i + h \frac{f(x_i, y_i) + f(x_{i+1}, y_{i+1}^*)}{2}$

### 4.3 Error Analysis

*   **Local Truncation Error:** $O(h^3)$.
*   **Global Truncation Error:** $O(h^2)$. This means it is significantly more accurate than Euler's method for the same step size.

### 4.4 Example: Modified Euler's Method

Consider the ODE $\frac{dy}{dx} = y - x$ with $y(0) = 2$. Find $y(0.2)$ using the Modified Euler's method with $h = 0.1$.

**Step 1: Initialization**
$x_0 = 0$, $y_0 = 2$, $h = 0.1$

**Step 2: First step (i=0)**
*   **Predictor:**
    $f(x_0, y_0) = y_0 - x_0 = 2 - 0 = 2$
    $y_1^* = y_0 + h f(x_0, y_0) = 2 + 0.1 \times 2 = 2.2$
    $x_1 = x_0 + h = 0 + 0.1 = 0.1$

*   **Corrector:**
    $f(x_1, y_1^*) = y_1^* - x_1 = 2.2 - 0.1 = 2.1$
    $y_1 = y_0 + h \frac{f(x_0, y_0) + f(x_1, y_1^*)}{2} = 2 + 0.1 \frac{2 + 2.1}{2}$
    $y_1 = 2 + 0.1 \frac{4.1}{2} = 2 + 0.1 \times 2.05 = 2 + 0.205 = 2.205$

**Step 3: Second step (i=1)**
*   **Predictor:**
    $f(x_1, y_1) = y_1 - x_1 = 2.205 - 0.1 = 2.105$
    $y_2^* = y_1 + h f(x_1, y_1) = 2.205 + 0.1 \times 2.105 = 2.205 + 0.2105 = 2.4155$
    $x_2 = x_1 + h = 0.1 + 0.1 = 0.2$

*   **Corrector:**
    $f(x_2, y_2^*) = y_2^* - x_2 = 2.4155 - 0.2 = 2.2155$
    $y_2 = y_1 + h \frac{f(x_1, y_1) + f(x_2, y_2^*)}{2} = 2.205 + 0.1 \frac{2.105 + 2.2155}{2}$
    $y_2 = 2.205 + 0.1 \frac{4.3205}{2} = 2.205 + 0.1 \times 2.16025 = 2.205 + 0.216025 = 2.421025$

So, $y(0.2) \approx 2.421025$.

---

## 5. Fourth-Order Runge-Kutta Method (RK4)

### 5.1 The Concept

RK4 is one of the most popular and widely used Runge-Kutta methods. It is a higher-order method that achieves a good balance between accuracy and computational effort. It approximates the solution by evaluating the slope at four different points within each interval.

### 5.2 Derivation (Conceptual)

RK4 is derived by matching the Taylor series expansion of the ODE solution with a weighted average of slopes evaluated at intermediate points. It is designed to achieve a local truncation error of $O(h^5)$ and a global truncation error of $O(h^4)$.

### 5.3 The RK4 Formulas

Given $\frac{dy}{dx} = f(x, y)$ and $y(x_i) = y_i$:

*   **Calculate intermediate slopes (k values):**
    $k_1 = f(x_i, y_i)$
    $k_2 = f(x_i + \frac{h}{2}, y_i + \frac{h}{2} k_1)$
    $k_3 = f(x_i + \frac{h}{2}, y_i + \frac{h}{2} k_2)$
    $k_4 = f(x_i + h, y_i + h k_3)$

*   **Calculate the next value of y:**
    $y_{i+1} = y_i + \frac{h}{6} (k_1 + 2k_2 + 2k_3 + k_4)$
    $x_{i+1} = x_i + h$

### 5.4 Error Analysis

*   **Local Truncation Error:** $O(h^5)$
*   **Global Truncation Error:** $O(h^4)$

This fourth-order accuracy makes RK4 significantly more accurate than Euler's method or Modified Euler's method for the same step size.

### 5.5 Example: RK4

Consider the ODE $\frac{dy}{dx} = y - x$ with $y(0) = 2$. Find $y(0.2)$ using RK4 with $h = 0.2$.

**Step 1: Initialization**
$x_0 = 0$, $y_0 = 2$, $h = 0.2$

**Step 2: Calculate y(0.2) (i=0)**
*   **k1:**
    $k_1 = f(x_0, y_0) = y_0 - x_0 = 2 - 0 = 2$

*   **k2:**
    $x_0 + \frac{h}{2} = 0 + \frac{0.2}{2} = 0.1$
    $y_0 + \frac{h}{2} k_1 = 2 + \frac{0.2}{2} \times 2 = 2 + 0.1 \times 2 = 2.2$
    $k_2 = f(0.1, 2.2) = 2.2 - 0.1 = 2.1$

*   **k3:**
    $x_0 + \frac{h}{2} = 0.1$
    $y_0 + \frac{h}{2} k_2 = 2 + \frac{0.2}{2} \times 2.1 = 2 + 0.1 \times 2.1 = 2.21$
    $k_3 = f(0.1, 2.21) = 2.21 - 0.1 = 2.11$

*   **k4:**
    $x_0 + h = 0 + 0.2 = 0.2$
    $y_0 + h k_3 = 2 + 0.2 \times 2.11 = 2 + 0.422 = 2.422$
    $k_4 = f(0.2, 2.422) = 2.422 - 0.2 = 2.222$

*   **Calculate y1:**
    $y_1 = y_0 + \frac{h}{6} (k_1 + 2k_2 + 2k_3 + k_4)$
    $y_1 = 2 + \frac{0.2}{6} (2 + 2 \times 2.1 + 2 \times 2.11 + 2.222)$
    $y_1 = 2 + \frac{0.2}{6} (2 + 4.2 + 4.22 + 2.222)$
    $y_1 = 2 + \frac{0.2}{6} (12.642)$
    $y_1 = 2 + 0.2 \times 2.107 = 2 + 0.4214 = 2.4214$

So, $y(0.2) \approx 2.4214$.

*(Note: If we were to continue to find y(0.2) using $h=0.1$ with RK4, we would perform two steps.)*

---

## Practice Questions

**Question 1 (Euler's Method):**
Solve the ODE $\frac{dy}{dx} = x^2 - y$ with the initial condition $y(0) = 1$.
Find $y(0.2)$ using Euler's method with a step size of $h = 0.1$.

**Question 2 (Modified Euler's Method):**
Solve the ODE $\frac{dy}{dx} = y - x^2$ with the initial condition $y(0) = 0.5$.
Find $y(0.2)$ using the Modified Euler's method with a step size of $h = 0.1$.

**Question 3 (RK4):**
Solve the ODE $\frac{dy}{dx} = 2x + y$ with the initial condition $y(0) = 1$.
Find $y(0.2)$ using the fourth-order Runge-Kutta method with a step size of $h = 0.2$.

---

## Answers to Practice Questions

**Answer 1 (Euler's Method):**
$x_0 = 0, y_0 = 1, h = 0.1$
$f(x, y) = x^2 - y$

**Step 1 (i=0):**
$x_1 = 0.1$
$f(x_0, y_0) = f(0, 1) = 0^2 - 1 = -1$
$y_1 = y_0 + h f(x_0, y_0) = 1 + 0.1 \times (-1) = 1 - 0.1 = 0.9$

**Step 2 (i=1):**
$x_2 = 0.2$
$f(x_1, y_1) = f(0.1, 0.9) = (0.1)^2 - 0.9 = 0.01 - 0.9 = -0.89$
$y_2 = y_1 + h f(x_1, y_1) = 0.9 + 0.1 \times (-0.89) = 0.9 - 0.089 = 0.811$

So, $y(0.2) \approx 0.811$.

---

**Answer 2 (Modified Euler's Method):**
$x_0 = 0, y_0 = 0.5, h = 0.1$
$f(x, y) = y - x^2$

**Step 1 (i=0):**
*   **Predictor:**
    $f(x_0, y_0) = f(0, 0.5) = 0.5 - 0^2 = 0.5$
    $y_1^* = y_0 + h f(x_0, y_0) = 0.5 + 0.1 \times 0.5 = 0.5 + 0.05 = 0.55$
    $x_1 = 0.1$

*   **Corrector:**
    $f(x_1, y_1^*) = f(0.1, 0.55) = 0.55 - (0.1)^2 = 0.55 - 0.01 = 0.54$
    $y_1 = y_0 + h \frac{f(x_0, y_0) + f(x_1, y_1^*)}{2} = 0.5 + 0.1 \frac{0.5 + 0.54}{2}$
    $y_1 = 0.5 + 0.1 \frac{1.04}{2} = 0.5 + 0.1 \times 0.52 = 0.5 + 0.052 = 0.552$

**Step 2 (i=1):**
*   **Predictor:**
    $f(x_1, y_1) = f(0.1, 0.552) = 0.552 - (0.1)^2 = 0.552 - 0.01 = 0.542$
    $y_2^* = y_1 + h f(x_1, y_1) = 0.552 + 0.1 \times 0.542 = 0.552 + 0.0542 = 0.6062$
    $x_2 = 0.2$

*   **Corrector:**
    $f(x_2, y_2^*) = f(0.2, 0.6062) = 0.6062 - (0.2)^2 = 0.6062 - 0.04 = 0.5662$
    $y_2 = y_1 + h \frac{f(x_1, y_1) + f(x_2, y_2^*)}{2} = 0.552 + 0.1 \frac{0.542 + 0.5662}{2}$
    $y_2 = 0.552 + 0.1 \frac{1.1082}{2} = 0.552 + 0.1 \times 0.5541 = 0.552 + 0.05541 = 0.60741$

So, $y(0.2) \approx 0.60741$.

---

**Answer 3 (RK4):**
$x_0 = 0, y_0 = 1, h = 0.2$
$f(x, y) = 2x + y$

**Calculate y(0.2) (i=0):**
*   **k1:**
    $k_1 = f(x_0, y_0) = f(0, 1) = 2(0) + 1 = 1$

*   **k2:**
    $x_0 + \frac{h}{2} = 0 + \frac{0.2}{2} = 0.1$
    $y_0 + \frac{h}{2} k_1 = 1 + \frac{0.2}{2} \times 1 = 1 + 0.1 \times 1 = 1.1$
    $k_2 = f(0.1, 1.1) = 2(0.1) + 1.1 = 0.2 + 1.1 = 1.3$

*   **k3:**
    $x_0 + \frac{h}{2} = 0.1$
    $y_0 + \frac{h}{2} k_2 = 1 + \frac{0.2}{2} \times 1.3 = 1 + 0.1 \times 1.3 = 1.13$
    $k_3 = f(0.1, 1.13) = 2(0.1) + 1.13 = 0.2 + 1.13 = 1.33$

*   **k4:**
    $x_0 + h = 0 + 0.2 = 0.2$
    $y_0 + h k_3 = 1 + 0.2 \times 1.33 = 1 + 0.266 = 1.266$
    $k_4 = f(0.2, 1.266) = 2(0.2) + 1.266 = 0.4 + 1.266 = 1.666$

*   **Calculate y1:**
    $y_1 = y_0 + \frac{h}{6} (k_1 + 2k_2 + 2k_3 + k_4)$
    $y_1 = 1 + \frac{0.2}{6} (1 + 2 \times 1.3 + 2 \times 1.33 + 1.666)$
    $y_1 = 1 + \frac{0.2}{6} (1 + 2.6 + 2.66 + 1.666)$
    $y_1 = 1 + \frac{0.2}{6} (7.926)$
    $y_1 = 1 + 0.2 \times 1.321 = 1 + 0.2642 = 1.2642$

So, $y(0.2) \approx 1.2642$.

---

## Important Points to Remember

*   **Step Size (h):** Smaller step sizes generally lead to higher accuracy but increase computation time and potential for round-off error accumulation.
*   **Error:** Understand the difference between local and global truncation error and how they relate to the order of the method.
*   **Stability:** Be aware of the conditions under which a method might become unstable, especially with larger step sizes or stiff ODEs.
*   **Taylor Series:** Forms the basis for many numerical methods, but direct application can be computationally expensive due to the need for higher derivatives.
*   **Euler's Method:** Simplest, but least accurate ($O(h)$ global error). Good for understanding the fundamental idea.
*   **Modified Euler's Method:** A predictor-corrector approach, significantly more accurate than Euler ($O(h^2)$ global error).
*   **RK4:** A robust and widely used method, offering good accuracy ($O(h^4)$ global error) with a manageable computational cost. It's often the default choice for many applications.
*   **Choosing a Method:** The choice of method depends on the required accuracy, computational resources, and the nature of the ODE (e.g., stiffness).
