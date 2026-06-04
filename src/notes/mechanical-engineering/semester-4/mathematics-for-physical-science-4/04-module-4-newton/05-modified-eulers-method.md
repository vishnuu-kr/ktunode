---
title: "Modified Euler’s method"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 4: Newton"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ed5"
status: "completed"
scrapedAt: "2026-05-20T17:54:53.868Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 4: Newton

### Topic: Modified Euler’s Method

---

### 1. Introduction and Motivation

**Context:** This topic is a part of numerical methods for solving Ordinary Differential Equations (ODEs). In physical sciences, many phenomena are described by ODEs, and often analytical solutions are not feasible or available. Numerical methods provide approximate solutions.

**Recall:**
*   **Euler's Method:** The simplest numerical method for solving ODEs of the form $dy/dx = f(x, y)$ with an initial condition $y(x_0) = y_0$. It approximates the solution at the next step using the slope at the current point.
    *   $y_{i+1} = y_i + h f(x_i, y_i)$
    *   $x_{i+1} = x_i + h$
    *   **Limitation:** Euler's method is a first-order method, meaning its accuracy is limited, especially for larger step sizes ($h$). The error accumulates significantly.

**Need for Improvement:** To achieve better accuracy for the same step size or to use larger step sizes while maintaining accuracy, we need more sophisticated methods. The Modified Euler's Method is a step towards this.

**Alignment with Course Outcomes:** This topic directly addresses **CO4: Apply numerical methods to find solutions of linear system of equations, ordinary differential equations and Laplace equations.** Specifically, it focuses on solving ODEs. The Knowledge Level is K3 (Apply), meaning students should be able to understand and use the method to solve problems.

---

### 2. Key Concepts and Definitions

**Modified Euler’s Method (also known as Heun’s Method or Improved Euler’s Method):**
This is a second-order numerical method that improves upon Euler's method by using an average of slopes to estimate the solution at the next step. It's a predictor-corrector method.

**Core Idea:**
Instead of using just the slope at the beginning of the interval $(x_i, y_i)$, the Modified Euler's method first predicts a value for $y_{i+1}$ using the standard Euler's method (predictor step). Then, it uses this predicted value to calculate a more accurate slope at the end of the interval. Finally, it averages the initial slope and the slope at the predicted endpoint to get a better estimate for the increment in $y$.

**Steps:**

1.  **Predictor Step:** Estimate $y_{i+1}$ using the standard Euler's method.
    *   Let $y_{i+1}^*$ be the predicted value.
    *   $y_{i+1}^* = y_i + h f(x_i, y_i)$

2.  **Corrector Step:** Calculate the slope at the predicted point $(x_{i+1}, y_{i+1}^*)$.
    *   Slope at $(x_i, y_i)$: $f_i = f(x_i, y_i)$
    *   Slope at $(x_{i+1}, y_{i+1}^*)$: $f_{i+1}^* = f(x_{i+1}, y_{i+1}^*)$

3.  **Average Slope:** Compute the average of the initial slope and the predicted endpoint slope.
    *   Average Slope = $\frac{f_i + f_{i+1}^*}{2}$

4.  **Corrector Formula:** Use the average slope to correct the prediction and find the final value of $y_{i+1}$.
    *   $y_{i+1} = y_i + h \left( \frac{f_i + f_{i+1}^*}{2} \right)$

**Combining the steps:**
$y_{i+1} = y_i + \frac{h}{2} [f(x_i, y_i) + f(x_i + h, y_i + h f(x_i, y_i))]$

**Order of Accuracy:** The Modified Euler's method is a second-order method, meaning its local truncation error is of the order $O(h^3)$ and its global truncation error is of the order $O(h^2)$. This is a significant improvement over the first-order Euler's method. (Reference: Sastry, S. S., "Introductory Methods of Numerical Analysis", Chapter 6).

---

### 3. Derivation (Conceptual)

The Modified Euler's method is essentially applying the Trapezoidal Rule to approximate the integral of $f(x, y)$ with respect to $x$.
Recall that for an ODE $dy/dx = f(x, y)$, we have:
$y(x_{i+1}) - y(x_i) = \int_{x_i}^{x_{i+1}} f(x, y(x)) dx$

If we approximate the integral using the Trapezoidal Rule:
$\int_{x_i}^{x_{i+1}} f(x, y(x)) dx \approx \frac{h}{2} [f(x_i, y(x_i)) + f(x_{i+1}, y(x_{i+1}))]$

This gives:
$y_{i+1} \approx y_i + \frac{h}{2} [f(x_i, y_i) + f(x_{i+1}, y_{i+1})]$

The issue here is that $y_{i+1}$ on the right-hand side is unknown. This is where the predictor-corrector nature comes in.

*   **Predictor:** We first estimate $y_{i+1}$ using a simpler method (like Euler's method): $y_{i+1}^* \approx y_i + h f(x_i, y_i)$.
*   **Corrector:** We then use this predicted value $y_{i+1}^*$ to approximate $f(x_{i+1}, y_{i+1})$ as $f(x_{i+1}, y_{i+1}^*)$:
    $y_{i+1} \approx y_i + \frac{h}{2} [f(x_i, y_i) + f(x_{i+1}, y_{i+1}^*)]$

This is exactly the Modified Euler's method formula.

---

### 4. Algorithm and Implementation

**Algorithm:**

Given an ODE $dy/dx = f(x, y)$ with initial condition $y(x_0) = y_0$, and a step size $h$, to find the solution at $x_n = x_0 + nh$.

For $i = 0, 1, 2, \dots, n-1$:

1.  **Calculate the slope at the current point:**
    $k_1 = f(x_i, y_i)$

2.  **Predict the next value of y:**
    $y_{i+1}^* = y_i + h \cdot k_1$

3.  **Calculate the slope at the predicted next point:**
    $k_2 = f(x_{i+1}, y_{i+1}^*)$, where $x_{i+1} = x_i + h$.

4.  **Calculate the average slope:**
    Average slope = $\frac{k_1 + k_2}{2}$

5.  **Calculate the corrected next value of y:**
    $y_{i+1} = y_i + h \cdot (\text{Average slope})$
    or
    $y_{i+1} = y_i + \frac{h}{2} (k_1 + k_2)$

6.  **Update x:**
    $x_{i+1} = x_i + h$

**Important Note:** The Modified Euler's method is often implemented as a single-step corrector method. However, it can also be iterated. If we iterate the corrector step using the newly computed $y_{i+1}$ to re-calculate the slope at the endpoint, we can potentially achieve even higher accuracy within that step. This iterated version is sometimes referred to as the "improved" Euler's method. For this course, we focus on the single-step application.

---

### 5. Examples

**Example 1:**
Solve the ODE $\frac{dy}{dx} = x + y$ with $y(0) = 1$ using the Modified Euler's method. Find $y(0.2)$ using $h=0.2$.

**Solution:**
Here, $f(x, y) = x + y$, $x_0 = 0$, $y_0 = 1$, and $h = 0.2$. We want to find $y_1$ at $x_1 = x_0 + h = 0 + 0.2 = 0.2$.

1.  **Predictor Step:**
    $k_1 = f(x_0, y_0) = f(0, 1) = 0 + 1 = 1$
    $y_1^* = y_0 + h \cdot k_1 = 1 + (0.2)(1) = 1 + 0.2 = 1.2$

2.  **Corrector Step:**
    $x_1 = 0.2$
    $k_2 = f(x_1, y_1^*) = f(0.2, 1.2) = 0.2 + 1.2 = 1.4$

3.  **Average Slope and Final Step:**
    $y_1 = y_0 + \frac{h}{2} (k_1 + k_2) = 1 + \frac{0.2}{2} (1 + 1.4) = 1 + 0.1 (2.4) = 1 + 0.24 = 1.24$

So, the approximate value of $y(0.2)$ is $1.24$.

**Comparison with Euler's Method:**
Using Euler's method: $y_1 = y_0 + h f(x_0, y_0) = 1 + 0.2(1) = 1.2$.
The Modified Euler's method gives a more accurate result. The exact solution is $y = 2e^x - x - 1$.
$y(0.2) = 2e^{0.2} - 0.2 - 1 \approx 2(1.2214) - 1.2 \approx 2.4428 - 1.2 \approx 1.2428$.
The Modified Euler's result (1.24) is closer to the exact solution than the Euler's result (1.2).

**Example 2:**
Solve the ODE $\frac{dy}{dx} = y - x$ with $y(0) = 2$ using the Modified Euler's method. Find $y(0.1)$ and $y(0.2)$ using $h=0.1$.

**Solution:**
Here, $f(x, y) = y - x$, $x_0 = 0$, $y_0 = 2$, $h = 0.1$.

**Step 1: Find y(0.1)** ($x_1 = 0.1$)

1.  **Predictor:**
    $k_1 = f(x_0, y_0) = f(0, 2) = 2 - 0 = 2$
    $y_1^* = y_0 + h \cdot k_1 = 2 + (0.1)(2) = 2 + 0.2 = 2.2$

2.  **Corrector:**
    $x_1 = 0.1$
    $k_2 = f(x_1, y_1^*) = f(0.1, 2.2) = 2.2 - 0.1 = 2.1$

3.  **Final Step:**
    $y_1 = y_0 + \frac{h}{2} (k_1 + k_2) = 2 + \frac{0.1}{2} (2 + 2.1) = 2 + 0.05 (4.1) = 2 + 0.205 = 2.205$

So, $y(0.1) \approx 2.205$.

**Step 2: Find y(0.2)** ($x_2 = 0.2$)
Now we use $x_1 = 0.1$ and $y_1 = 2.205$ as the starting point.

1.  **Predictor:**
    $k_1 = f(x_1, y_1) = f(0.1, 2.205) = 2.205 - 0.1 = 2.105$
    $y_2^* = y_1 + h \cdot k_1 = 2.205 + (0.1)(2.105) = 2.205 + 0.2105 = 2.4155$

2.  **Corrector:**
    $x_2 = 0.2$
    $k_2 = f(x_2, y_2^*) = f(0.2, 2.4155) = 2.4155 - 0.2 = 2.2155$

3.  **Final Step:**
    $y_2 = y_1 + \frac{h}{2} (k_1 + k_2) = 2.205 + \frac{0.1}{2} (2.105 + 2.2155) = 2.205 + 0.05 (4.3205) = 2.205 + 0.216025 = 2.421025$

So, $y(0.2) \approx 2.421025$.

**Exact Solution Check:**
The exact solution for $\frac{dy}{dx} = y - x$ with $y(0) = 2$ is $y = x + 1 + e^x$.
$y(0.1) = 0.1 + 1 + e^{0.1} \approx 1.1 + 1.10517 \approx 2.20517$.
$y(0.2) = 0.2 + 1 + e^{0.2} \approx 1.2 + 1.22140 \approx 2.42140$.
The Modified Euler's method provides good approximations.

---

### 6. Advantages and Disadvantages

**Advantages:**

*   **Improved Accuracy:** It is a second-order method, offering significantly better accuracy than the first-order Euler's method for the same step size.
*   **Simplicity:** Compared to higher-order methods like Runge-Kutta methods, it is relatively straightforward to understand and implement.
*   **Predictor-Corrector Nature:** This iterative approach helps in improving the accuracy of the prediction.

**Disadvantages:**

*   **Computational Cost:** It requires evaluating the function $f(x, y)$ twice per step, whereas Euler's method requires only one evaluation. This increases the computational effort.
*   **Still an Approximation:** It is still a numerical approximation and not an exact solution. Errors will still accumulate, albeit at a slower rate than Euler's method.
*   **Limited Accuracy for Stiff ODEs:** Like many other single-step methods, it may not perform well for "stiff" differential equations, where solutions change rapidly over small intervals.

---

### 7. Relation to Other Numerical Methods

*   **Euler's Method:** Modified Euler's method is an improvement over Euler's method.
*   **Runge-Kutta Methods:** This method is a precursor to the more powerful Runge-Kutta methods. The classic fourth-order Runge-Kutta (RK4) method is a widely used and highly accurate method that involves calculating four slopes within each step. The Modified Euler's method can be seen as a simple two-stage Runge-Kutta method.

---

### 8. Practice Questions / Exercises

**Question 1:**
Solve the ODE $\frac{dy}{dx} = x^2 + y$ with the initial condition $y(0) = 1$. Use the Modified Euler's method to find $y(0.1)$ with a step size $h=0.1$.

**Question 2:**
Given the ODE $\frac{dy}{dx} = y \cdot e^{-x}$ with $y(0) = 1$. Use the Modified Euler's method to approximate $y(0.2)$ by taking two steps of size $h=0.1$.

**Question 3:**
Compare the accuracy of the Modified Euler's method with the standard Euler's method for the ODE $\frac{dy}{dx} = y$ with $y(0) = 1$. Calculate $y(0.2)$ using both methods with $h=0.2$. (The exact solution is $y(x) = e^x$).

---

### 9. Answers to Practice Questions

**Answer 1:**
Given $f(x, y) = x^2 + y$, $x_0 = 0$, $y_0 = 1$, $h = 0.1$. We want to find $y_1$ at $x_1 = 0.1$.

1.  **Predictor:**
    $k_1 = f(x_0, y_0) = f(0, 1) = 0^2 + 1 = 1$
    $y_1^* = y_0 + h \cdot k_1 = 1 + (0.1)(1) = 1 + 0.1 = 1.1$

2.  **Corrector:**
    $x_1 = 0.1$
    $k_2 = f(x_1, y_1^*) = f(0.1, 1.1) = (0.1)^2 + 1.1 = 0.01 + 1.1 = 1.11$

3.  **Final Step:**
    $y_1 = y_0 + \frac{h}{2} (k_1 + k_2) = 1 + \frac{0.1}{2} (1 + 1.11) = 1 + 0.05 (2.11) = 1 + 0.1055 = 1.1055$

So, $y(0.1) \approx 1.1055$.

**Answer 2:**
Given $f(x, y) = y \cdot e^{-x}$, $x_0 = 0$, $y_0 = 1$, $h = 0.1$.

**Step 1: Find y(0.1)** ($x_1 = 0.1$)

1.  **Predictor:**
    $k_1 = f(x_0, y_0) = f(0, 1) = 1 \cdot e^{-0} = 1 \cdot 1 = 1$
    $y_1^* = y_0 + h \cdot k_1 = 1 + (0.1)(1) = 1.1$

2.  **Corrector:**
    $x_1 = 0.1$
    $k_2 = f(x_1, y_1^*) = f(0.1, 1.1) = 1.1 \cdot e^{-0.1} \approx 1.1 \cdot 0.904837 \approx 0.99532$

3.  **Final Step:**
    $y_1 = y_0 + \frac{h}{2} (k_1 + k_2) = 1 + \frac{0.1}{2} (1 + 0.99532) = 1 + 0.05 (1.99532) = 1 + 0.099766 = 1.099766$

So, $y(0.1) \approx 1.099766$.

**Step 2: Find y(0.2)** ($x_2 = 0.2$)
Starting with $x_1 = 0.1$ and $y_1 = 1.099766$.

1.  **Predictor:**
    $k_1 = f(x_1, y_1) = f(0.1, 1.099766) = 1.099766 \cdot e^{-0.1} \approx 1.099766 \cdot 0.904837 \approx 0.99511$
    $y_2^* = y_1 + h \cdot k_1 = 1.099766 + (0.1)(0.99511) = 1.099766 + 0.099511 = 1.199277$

2.  **Corrector:**
    $x_2 = 0.2$
    $k_2 = f(x_2, y_2^*) = f(0.2, 1.199277) = 1.199277 \cdot e^{-0.2} \approx 1.199277 \cdot 0.818731 \approx 0.98172$

3.  **Final Step:**
    $y_2 = y_1 + \frac{h}{2} (k_1 + k_2) = 1.099766 + \frac{0.1}{2} (0.99511 + 0.98172) = 1.099766 + 0.05 (1.97683) = 1.099766 + 0.0988415 = 1.1986075$

So, $y(0.2) \approx 1.198608$.

**Answer 3:**
Given $f(x, y) = y$, $x_0 = 0$, $y_0 = 1$, $h = 0.2$.

**Standard Euler's Method:**
$y_1 = y_0 + h f(x_0, y_0) = 1 + 0.2 (1) = 1.2$
Exact solution: $y(0.2) = e^{0.2} \approx 1.22140$
Error (Euler) = $|1.22140 - 1.2| = 0.02140$

**Modified Euler's Method:**

1.  **Predictor:**
    $k_1 = f(x_0, y_0) = f(0, 1) = 1$
    $y_1^* = y_0 + h \cdot k_1 = 1 + (0.2)(1) = 1.2$

2.  **Corrector:**
    $x_1 = 0.2$
    $k_2 = f(x_1, y_1^*) = f(0.2, 1.2) = 1.2$

3.  **Final Step:**
    $y_1 = y_0 + \frac{h}{2} (k_1 + k_2) = 1 + \frac{0.2}{2} (1 + 1.2) = 1 + 0.1 (2.2) = 1 + 0.22 = 1.22$
Error (Modified Euler) = $|1.22140 - 1.22| = 0.00140$

**Comparison:** The Modified Euler's method (error $0.00140$) is significantly more accurate than the standard Euler's method (error $0.02140$) for this problem with $h=0.2$.

---

### 10. Important Points to Remember

*   **Predictor-Corrector:** Modified Euler's method uses a two-step process: predict the next value, then use that prediction to refine the slope and correct the value.
*   **Average Slope:** The core idea is to use the average of the slope at the beginning of the interval and the slope at the predicted end of the interval.
*   **Second-Order Accuracy:** This method provides a significant accuracy improvement over the standard Euler's method.
*   **Function Evaluations:** Be mindful that this method requires two evaluations of the function $f(x, y)$ per step, increasing computational cost.
*   **Iterative Refinement:** While not covered in detail for this course, the corrector step can be iterated for potentially higher accuracy.
*   **Generalization:** The principle of averaging slopes or using weighted averages of slopes is fundamental to the development of higher-order numerical methods for ODEs, like Runge-Kutta methods.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### 11. Textbook and Reference Material Support

This topic is a fundamental numerical method for ODEs, commonly found in standard texts on numerical analysis.

*   **Sastry, S. S., "Introductory Methods of Numerical Analysis" (5th edition, 2012):** Chapter 6 on Numerical Solution of Ordinary Differential Equations would detail the Modified Euler's method, its derivation, and applications. This is a primary reference for this topic.
*   **Chapra, S. C., & Canale, R. P., "Numerical Methods for Engineers" (8th edition, 2021):** This book also provides comprehensive coverage of numerical methods for ODEs, including predictor-corrector methods like the Improved Euler's method. It often includes practical examples and programming aspects, which can be useful for understanding implementation.

While Devore and Papoulis/Ross focus on Probability and Statistics, the numerical methods aspect is best covered by Sastry and Chapra. The understanding of differential equations is foundational for applying these numerical methods, a skill expected in a "Mathematics for Physical Science" course.

---