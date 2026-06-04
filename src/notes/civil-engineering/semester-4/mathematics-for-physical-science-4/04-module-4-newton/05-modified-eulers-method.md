---
title: "Modified Euler’s method"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 4: Newton"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81093f"
status: "completed"
scrapedAt: "2026-05-20T18:46:14.710Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 4: Newton

### Topic: Modified Euler's Method

This module delves into numerical methods for solving ordinary differential equations (ODEs), with a focus on approximating solutions when analytical solutions are difficult or impossible to obtain. The Modified Euler's method is an enhancement over the basic Euler's method, offering improved accuracy.

---

### 1. Introduction to Solving ODEs Numerically

#### 1.1 The Problem

Many physical phenomena are described by ordinary differential equations (ODEs) of the form:

$\frac{dy}{dx} = f(x, y)$

with an initial condition $y(x_0) = y_0$. We often need to find the value of $y$ at different points $x = x_1, x_2, \dots, x_n$.

#### 1.2 Why Numerical Methods?

*   **Analytical solutions are not always possible:** For complex functions $f(x, y)$, finding an exact analytical solution might be impossible.
*   **Complex systems:** Real-world physical systems can be described by ODEs that are too complex to solve analytically.
*   **Approximation:** Numerical methods provide approximations to the true solution.

#### 1.3 General Idea of Numerical Methods

Numerical methods typically involve discretizing the independent variable ($x$) into small steps, often of size $h$. Starting from the initial condition $(x_0, y_0)$, we use the ODE to estimate the value of $y$ at the next point $x_1 = x_0 + h$, then $x_2 = x_1 + h$, and so on.

---

### 2. Recap of Euler's Method (The Basic Approach)

Before diving into the Modified Euler's method, it's crucial to understand the fundamental Euler's method.

#### 2.1 Concept

Euler's method approximates the solution curve by a series of straight line segments. At each step, it uses the slope of the solution curve at the beginning of the interval to extrapolate to the end of the interval.

#### 2.2 Formula

Given $\frac{dy}{dx} = f(x, y)$ and $y(x_0) = y_0$, the iterative formula is:

$y_{i+1} = y_i + h \cdot f(x_i, y_i)$

where:
*   $y_{i+1}$ is the approximate value of $y$ at $x_{i+1}$.
*   $y_i$ is the approximate value of $y$ at $x_i$.
*   $h$ is the step size ($x_{i+1} - x_i$).
*   $f(x_i, y_i)$ is the slope of the solution curve at $(x_i, y_i)$.

#### 2.3 Limitations of Euler's Method

Euler's method is a first-order method, meaning its error is proportional to the step size $h$. This can lead to significant accumulation of errors, especially for large step sizes or over many steps. The slope used is only an approximation at the beginning of the interval, and the actual curve might deviate significantly.

---

### 3. The Modified Euler's Method (Heun's Method)

The Modified Euler's method, also known as Heun's method or the improved Euler's method, aims to improve the accuracy of Euler's method by using an average of slopes.

#### 3.1 Concept

Instead of using only the slope at the beginning of the interval $(x_i, y_i)$, the Modified Euler's method estimates the slope at the end of the interval $(x_{i+1}, y_{i+1}^*)$ as well. It then uses the average of these two slopes to step forward. This provides a better approximation of the "average" slope over the interval.

#### 3.2 Steps Involved

The Modified Euler's method is a two-step process:

**Step 1: Predictor Step (Using Basic Euler's Method)**

First, we use the basic Euler's method to predict an intermediate value $y_{i+1}^*$ at $x_{i+1}$:

$y_{i+1}^* = y_i + h \cdot f(x_i, y_i)$

This $y_{i+1}^*$ is an initial estimate of the solution at $x_{i+1}$.

**Step 2: Corrector Step (Using the Average Slope)**

Now, we use this predicted value to estimate the slope at the end of the interval: $f(x_{i+1}, y_{i+1}^*)$. We then average this slope with the slope at the beginning of the interval $f(x_i, y_i)$ to get a more accurate slope for the interval $[x_i, x_{i+1}]$.

The corrected value $y_{i+1}$ is then calculated using this average slope:

$y_{i+1} = y_i + h \cdot \frac{f(x_i, y_i) + f(x_{i+1}, y_{i+1}^*)}{2}$

#### 3.3 Summary of Modified Euler's Method Formula

The iterative formula for the Modified Euler's method is:

1.  **Predictor:** $y_{i+1}^* = y_i + h \cdot f(x_i, y_i)$
2.  **Corrector:** $y_{i+1} = y_i + \frac{h}{2} [f(x_i, y_i) + f(x_{i+1}, y_{i+1}^*)]$

where $x_{i+1} = x_i + h$.

#### 3.4 Order of Accuracy

The Modified Euler's method is a second-order method, meaning its local truncation error is proportional to $h^3$, and its global truncation error is proportional to $h^2$. This makes it significantly more accurate than the basic Euler's method for the same step size.

---

### 4. Examples

Let's illustrate the Modified Euler's method with an example.

**Example 1:**

Solve the ODE $\frac{dy}{dx} = x + y$ with the initial condition $y(0) = 1$ using the Modified Euler's method with a step size $h = 0.2$. Find $y(0.2)$ and $y(0.4)$.

**Given:**
*   $f(x, y) = x + y$
*   $y(0) = 1 \implies x_0 = 0, y_0 = 1$
*   $h = 0.2$

**Calculation for $y(0.2)$ (i.e., finding $y_1$):**

Here, $x_0 = 0$, $y_0 = 1$, $x_1 = x_0 + h = 0 + 0.2 = 0.2$.

**Step 1: Predictor**
Calculate $y_1^*$:
$f(x_0, y_0) = f(0, 1) = 0 + 1 = 1$
$y_1^* = y_0 + h \cdot f(x_0, y_0) = 1 + 0.2 \cdot 1 = 1 + 0.2 = 1.2$

**Step 2: Corrector**
Calculate $y_1$:
$f(x_1, y_1^*) = f(0.2, 1.2) = 0.2 + 1.2 = 1.4$
$y_1 = y_0 + \frac{h}{2} [f(x_0, y_0) + f(x_1, y_1^*)]$
$y_1 = 1 + \frac{0.2}{2} [1 + 1.4]$
$y_1 = 1 + 0.1 [2.4]$
$y_1 = 1 + 0.24 = 1.24$

So, the approximate value of $y(0.2)$ is $1.24$.

**Calculation for $y(0.4)$ (i.e., finding $y_2$):**

Now, $x_1 = 0.2$, $y_1 = 1.24$, $x_2 = x_1 + h = 0.2 + 0.2 = 0.4$.

**Step 1: Predictor**
Calculate $y_2^*$:
$f(x_1, y_1) = f(0.2, 1.24) = 0.2 + 1.24 = 1.44$
$y_2^* = y_1 + h \cdot f(x_1, y_1) = 1.24 + 0.2 \cdot 1.44 = 1.24 + 0.288 = 1.528$

**Step 2: Corrector**
Calculate $y_2$:
$f(x_2, y_2^*) = f(0.4, 1.528) = 0.4 + 1.528 = 1.928$
$y_2 = y_1 + \frac{h}{2} [f(x_1, y_1) + f(x_2, y_2^*)]$
$y_2 = 1.24 + \frac{0.2}{2} [1.44 + 1.928]$
$y_2 = 1.24 + 0.1 [3.368]$
$y_2 = 1.24 + 0.3368 = 1.5768$

So, the approximate value of $y(0.4)$ is $1.5768$.

**Actual Solution (for comparison):**
The exact solution to $\frac{dy}{dx} = x + y$ with $y(0)=1$ is $y(x) = 2e^x - x - 1$.
$y(0.2) = 2e^{0.2} - 0.2 - 1 \approx 2(1.2214) - 1.2 = 2.4428 - 1.2 = 1.2428$
$y(0.4) = 2e^{0.4} - 0.4 - 1 \approx 2(1.4918) - 1.4 = 2.9836 - 1.4 = 1.5836$

Comparing our Modified Euler's method results:
*   $y(0.2)$: $1.24$ (actual: $1.2428$) - Error is about $0.0028$
*   $y(0.4)$: $1.5768$ (actual: $1.5836$) - Error is about $0.0068$

**Comparison with Basic Euler's Method for the same problem:**
Using basic Euler's for $y(0.2)$:
$y_1 = y_0 + h \cdot f(x_0, y_0) = 1 + 0.2 \cdot (0+1) = 1.2$
Error for $y(0.2)$ with Euler: $|1.2 - 1.2428| \approx 0.0428$

Using basic Euler's for $y(0.4)$:
$y_2 = y_1 + h \cdot f(x_1, y_1) = 1.2 + 0.2 \cdot (0.2+1.2) = 1.2 + 0.2 \cdot 1.4 = 1.2 + 0.28 = 1.48$
Error for $y(0.4)$ with Euler: $|1.48 - 1.5836| \approx 0.1036$

As you can see, the Modified Euler's method provides significantly more accurate results.

---

### 5. Practice Questions/Exercises

**Question 1:**

Consider the ODE $\frac{dy}{dx} = y - x^2$. Given the initial condition $y(0) = 1$, use the Modified Euler's method with a step size $h = 0.1$ to approximate $y(0.1)$ and $y(0.2)$.

**Question 2:**

For the ODE $\frac{dy}{dx} = x^2 + y^2$ with $y(0) = 0$, use the Modified Euler's method with $h = 0.05$ to approximate $y(0.1)$.

---

### 6. Answers to Practice Questions

**Answer 1:**

Given: $f(x, y) = y - x^2$, $y(0) = 1$, $h = 0.1$.

**To find $y(0.1)$ (i.e., $y_1$):**
$x_0 = 0, y_0 = 1, x_1 = 0.1$

*   **Predictor:**
    $f(x_0, y_0) = f(0, 1) = 1 - 0^2 = 1$
    $y_1^* = y_0 + h \cdot f(x_0, y_0) = 1 + 0.1 \cdot 1 = 1.1$

*   **Corrector:**
    $f(x_1, y_1^*) = f(0.1, 1.1) = 1.1 - (0.1)^2 = 1.1 - 0.01 = 1.09$
    $y_1 = y_0 + \frac{h}{2} [f(x_0, y_0) + f(x_1, y_1^*)]$
    $y_1 = 1 + \frac{0.1}{2} [1 + 1.09]$
    $y_1 = 1 + 0.05 [2.09]$
    $y_1 = 1 + 0.1045 = 1.1045$

So, $y(0.1) \approx 1.1045$.

**To find $y(0.2)$ (i.e., $y_2$):**
$x_1 = 0.1, y_1 = 1.1045, x_2 = 0.2$

*   **Predictor:**
    $f(x_1, y_1) = f(0.1, 1.1045) = 1.1045 - (0.1)^2 = 1.1045 - 0.01 = 1.0945$
    $y_2^* = y_1 + h \cdot f(x_1, y_1) = 1.1045 + 0.1 \cdot 1.0945 = 1.1045 + 0.10945 = 1.21395$

*   **Corrector:**
    $f(x_2, y_2^*) = f(0.2, 1.21395) = 1.21395 - (0.2)^2 = 1.21395 - 0.04 = 1.17395$
    $y_2 = y_1 + \frac{h}{2} [f(x_1, y_1) + f(x_2, y_2^*)]$
    $y_2 = 1.1045 + \frac{0.1}{2} [1.0945 + 1.17395]$
    $y_2 = 1.1045 + 0.05 [2.26845]$
    $y_2 = 1.1045 + 0.1134225 = 1.2179225$

So, $y(0.2) \approx 1.2179$.

**Answer 2:**

Given: $f(x, y) = x^2 + y^2$, $y(0) = 0$, $h = 0.05$.

**To find $y(0.1)$ (i.e., $y_2$):**
$x_0 = 0, y_0 = 0, x_1 = 0.05, x_2 = 0.1$

**First step (to find $y_1$ at $x=0.05$):**

*   **Predictor:**
    $f(x_0, y_0) = f(0, 0) = 0^2 + 0^2 = 0$
    $y_1^* = y_0 + h \cdot f(x_0, y_0) = 0 + 0.05 \cdot 0 = 0$

*   **Corrector:**
    $f(x_1, y_1^*) = f(0.05, 0) = (0.05)^2 + 0^2 = 0.0025$
    $y_1 = y_0 + \frac{h}{2} [f(x_0, y_0) + f(x_1, y_1^*)]$
    $y_1 = 0 + \frac{0.05}{2} [0 + 0.0025]$
    $y_1 = 0 + 0.025 [0.0025] = 0.0000625$

So, $y(0.05) \approx 0.0000625$.

**Second step (to find $y_2$ at $x=0.1$):**
$x_1 = 0.05, y_1 = 0.0000625, x_2 = 0.1$

*   **Predictor:**
    $f(x_1, y_1) = f(0.05, 0.0000625) = (0.05)^2 + (0.0000625)^2 = 0.0025 + \text{very small number} \approx 0.0025$
    $y_2^* = y_1 + h \cdot f(x_1, y_1) = 0.0000625 + 0.05 \cdot 0.0025 = 0.0000625 + 0.000125 = 0.0001875$

*   **Corrector:**
    $f(x_2, y_2^*) = f(0.1, 0.0001875) = (0.1)^2 + (0.0001875)^2 = 0.01 + \text{very small number} \approx 0.01$
    $y_2 = y_1 + \frac{h}{2} [f(x_1, y_1) + f(x_2, y_2^*)]$
    $y_2 = 0.0000625 + \frac{0.05}{2} [0.0025 + 0.01]$
    $y_2 = 0.0000625 + 0.025 [0.0125]$
    $y_2 = 0.0000625 + 0.0003125 = 0.000375$

So, $y(0.1) \approx 0.000375$.

---

### 7. Important Points to Remember

*   **Modified Euler's method is also known as Heun's method or the improved Euler's method.**
*   **It is a second-order method**, offering better accuracy than the basic Euler's method.
*   The core idea is to **average the slopes** at the beginning and end of the interval.
*   It involves a **predictor-corrector** approach.
*   The predictor step uses the basic Euler's formula.
*   The corrector step uses the predicted value to estimate the slope at the next point and then averages it with the initial slope.
*   **Accuracy increases as the step size ($h$) decreases**, but this also increases computational cost.
*   The method is suitable for ODEs of the form $\frac{dy}{dx} = f(x, y)$.

---
