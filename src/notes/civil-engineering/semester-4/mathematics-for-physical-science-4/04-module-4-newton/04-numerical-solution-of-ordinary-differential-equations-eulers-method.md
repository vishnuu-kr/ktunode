---
title: "Numerical solution of ordinary differential equations-Euler’s method"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 4: Newton"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81093e"
status: "completed"
scrapedAt: "2026-05-20T18:46:14.070Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4: Newton

## Module 4: Newton

### Topic: Numerical Solution of Ordinary Differential Equations – Euler's Method

---

### Learning Outcomes

Upon successful completion of this topic, you should be able to:

*   Understand the need for numerical methods to solve ordinary differential equations (ODEs).
*   Explain the fundamental concept behind Euler's method.
*   Derive the iterative formula for Euler's method.
*   Apply Euler's method to solve first-order ODEs with a given initial condition.
*   Analyze the accuracy and limitations of Euler's method.
*   Compare Euler's method with the analytical solution (where possible) to understand its approximation nature.

---

### 1. Introduction: The Need for Numerical Solutions to ODEs

Many physical phenomena are described by ordinary differential equations (ODEs). While analytical solutions (exact mathematical formulas) exist for some simpler ODEs, many ODEs encountered in physical science are too complex to solve analytically.

**Key Concept:** **Analytical Solution**
An analytical solution provides an exact, closed-form expression for the dependent variable as a function of the independent variable.

**Why Numerical Methods?**
When analytical solutions are unavailable or impractical, numerical methods are employed to approximate the solution. These methods break down the problem into smaller, manageable steps, allowing us to calculate approximate values of the solution at discrete points.

**Example Scenario:**
Consider a projectile motion problem where air resistance is proportional to velocity. The governing ODE might be:
$\frac{dv}{dt} = g - kv$
where $v$ is velocity, $t$ is time, $g$ is acceleration due to gravity, and $k$ is a constant related to air resistance. While this specific ODE can be solved analytically, many real-world systems (e.g., complex circuits, multi-particle systems, fluid dynamics) lead to ODEs that do not have simple analytical solutions.

---

### 2. Euler's Method: The Fundamental Concept

Euler's method is the simplest and most fundamental numerical method for solving first-order ODEs of the form:

$\frac{dy}{dx} = f(x, y)$

with an initial condition $y(x_0) = y_0$.

**Fundamental Concept:**
Euler's method approximates the solution curve of the ODE by a sequence of short, straight line segments. At each step, it uses the slope of the solution curve at the current point to estimate the value at the next point.

**Geometric Interpretation:**
Imagine you are at a point $(x_n, y_n)$ on the solution curve. The ODE tells you the slope of the curve at this point is $f(x_n, y_n)$. Euler's method assumes that this slope remains constant over a small interval $\Delta x$ (or $h$). This allows us to draw a straight line segment with this slope from $(x_n, y_n)$ to the next point $(x_{n+1}, y_{n+1})$.

---

### 3. Deriving the Iterative Formula for Euler's Method

We start with the definition of the derivative:

$\frac{dy}{dx} \approx \frac{\Delta y}{\Delta x}$

Rearranging this, we get:

$\Delta y \approx \frac{dy}{dx} \Delta x$

From the ODE, we know that $\frac{dy}{dx} = f(x, y)$. So, at a point $(x_n, y_n)$, the slope is $f(x_n, y_n)$.
We want to find the value of $y$ at the next point, $x_{n+1} = x_n + h$, where $h$ is the step size ($\Delta x$).

The change in $y$, $\Delta y$, can be approximated as:

$\Delta y \approx f(x_n, y_n) \cdot h$

The next value of $y$, denoted by $y_{n+1}$, is then the current value $y_n$ plus the estimated change $\Delta y$:

$y_{n+1} = y_n + \Delta y$
$y_{n+1} = y_n + h \cdot f(x_n, y_n)$

This is the core iterative formula for Euler's method.

**Iterative Formula:**
Given an initial condition $(x_0, y_0)$ and a step size $h$, the solution at subsequent points $x_n = x_0 + n \cdot h$ is approximated by:

$x_{n+1} = x_n + h$
$y_{n+1} = y_n + h \cdot f(x_n, y_n)$

---

### 4. Applying Euler's Method: Step-by-Step Example

Let's solve the ODE $\frac{dy}{dx} = x + y$ with the initial condition $y(0) = 1$, using Euler's method with a step size $h = 0.1$. We want to find the approximate value of $y(0.3)$.

Here, $f(x, y) = x + y$, $x_0 = 0$, $y_0 = 1$, and $h = 0.1$.

**Step 1: Initial values**
$x_0 = 0$, $y_0 = 1$

**Step 2: Calculate $y_1$ (at $x_1 = x_0 + h = 0 + 0.1 = 0.1$)**
Using the formula: $y_1 = y_0 + h \cdot f(x_0, y_0)$
$f(x_0, y_0) = f(0, 1) = 0 + 1 = 1$
$y_1 = 1 + 0.1 \cdot (1) = 1 + 0.1 = 1.1$
So, the approximate solution at $x = 0.1$ is $y(0.1) \approx 1.1$.

**Step 3: Calculate $y_2$ (at $x_2 = x_1 + h = 0.1 + 0.1 = 0.2$)**
Now, our new starting point is $(x_1, y_1) = (0.1, 1.1)$.
Using the formula: $y_2 = y_1 + h \cdot f(x_1, y_1)$
$f(x_1, y_1) = f(0.1, 1.1) = 0.1 + 1.1 = 1.2$
$y_2 = 1.1 + 0.1 \cdot (1.2) = 1.1 + 0.12 = 1.22$
So, the approximate solution at $x = 0.2$ is $y(0.2) \approx 1.22$.

**Step 4: Calculate $y_3$ (at $x_3 = x_2 + h = 0.2 + 0.1 = 0.3$)**
Our new starting point is $(x_2, y_2) = (0.2, 1.22)$.
Using the formula: $y_3 = y_2 + h \cdot f(x_2, y_2)$
$f(x_2, y_2) = f(0.2, 1.22) = 0.2 + 1.22 = 1.42$
$y_3 = 1.22 + 0.1 \cdot (1.42) = 1.22 + 0.142 = 1.362$
So, the approximate solution at $x = 0.3$ is $y(0.3) \approx 1.362$.

**Summary of results:**
*   $y(0) = 1$ (given)
*   $y(0.1) \approx 1.1$
*   $y(0.2) \approx 1.22$
*   $y(0.3) \approx 1.362$

---

### 5. Accuracy and Limitations of Euler's Method

Euler's method is a first-order method, meaning its accuracy is directly proportional to the step size $h$.

**Sources of Error:**
1.  **Truncation Error:** This is the error introduced at each step due to approximating the derivative with a constant slope. The Taylor series expansion of $y(x+h)$ is:
    $y(x+h) = y(x) + h y'(x) + \frac{h^2}{2!} y''(x) + \frac{h^3}{3!} y'''(x) + \dots$
    Euler's method uses $y(x+h) \approx y(x) + h y'(x)$, which is $y(x+h) \approx y(x) + h f(x,y)$.
    The truncation error at each step is approximately $O(h^2)$ (the next term in the Taylor series).

2.  **Round-off Error:** This is due to the finite precision of calculations, especially when performing many steps with small $h$.

**Global Error:**
The global error is the cumulative effect of truncation errors over all steps. For Euler's method, the global error is $O(h)$. This means that if you halve the step size, you can expect to reduce the global error by approximately half.

**Limitations:**
*   **Low Accuracy:** For a given step size, Euler's method is generally less accurate than higher-order methods (e.g., Runge-Kutta methods).
*   **Large Step Sizes:** If the step size $h$ is too large, the approximation of the curve by straight line segments becomes poor, leading to significant errors.
*   **Stiff ODEs:** For "stiff" ODEs (where different components of the solution change at very different rates), Euler's method might require extremely small step sizes to maintain stability and accuracy, making it computationally inefficient.

**Improving Accuracy:**
*   **Reduce Step Size ($h$):** Smaller $h$ leads to smaller truncation errors, but increases the number of computations and potential for round-off error.
*   **Use Higher-Order Methods:** Methods like the Improved Euler method or Runge-Kutta methods offer better accuracy for a given step size.

---

### 6. Comparison with Analytical Solution (Where Possible)

Let's revisit the ODE $\frac{dy}{dx} = x + y$ with $y(0) = 1$.
The analytical solution to this ODE is $y(x) = 2e^x - x - 1$.

Let's calculate the exact value at $x = 0.3$:
$y(0.3) = 2e^{0.3} - 0.3 - 1$
$y(0.3) = 2(1.3498588) - 0.3 - 1$
$y(0.3) = 2.6997176 - 1.3$
$y(0.3) = 1.3997176$

**Comparison:**

| $x$ | Euler's Method ($h=0.1$) | Analytical Solution | Absolute Error $|y_{Euler} - y_{exact}|$ |
| :-- | :------------------------ | :------------------ | :----------------------------------- |
| 0.0 | 1.0000                    | 1.0000              | 0.0000                               |
| 0.1 | 1.1000                    | $2e^{0.1}-0.1-1 \approx 1.10517$ | 0.00517                              |
| 0.2 | 1.2200                    | $2e^{0.2}-0.2-1 \approx 1.22140$ | 0.00140                              |
| 0.3 | 1.3620                    | $2e^{0.3}-0.3-1 \approx 1.39972$ | 0.03772                              |

**Observation:**
As we can see, Euler's method provides an approximation. The error increases as we move further from the initial point. The absolute error at $x=0.3$ is about 0.03772.

**What if we use a smaller step size, say $h = 0.05$?**

*   $x_0 = 0, y_0 = 1$
*   $x_1 = 0.05, y_1 = 1 + 0.05 \cdot (0+1) = 1.05$
*   $x_2 = 0.10, y_2 = 1.05 + 0.05 \cdot (0.05+1.05) = 1.05 + 0.05 \cdot (1.10) = 1.05 + 0.055 = 1.105$
*   $x_3 = 0.15, y_3 = 1.105 + 0.05 \cdot (0.10+1.105) = 1.105 + 0.05 \cdot (1.205) = 1.105 + 0.06025 = 1.16525$
*   $x_4 = 0.20, y_4 = 1.16525 + 0.05 \cdot (0.15+1.16525) = 1.16525 + 0.05 \cdot (1.31525) = 1.16525 + 0.0657625 = 1.2310125$
*   $x_5 = 0.25, y_5 = 1.2310125 + 0.05 \cdot (0.20+1.2310125) = 1.2310125 + 0.05 \cdot (1.4310125) = 1.2310125 + 0.071550625 = 1.302563125$
*   $x_6 = 0.30, y_6 = 1.302563125 + 0.05 \cdot (0.25+1.302563125) = 1.302563125 + 0.05 \cdot (1.552563125) = 1.302563125 + 0.07762815625 = 1.38019128125$

**New Comparison:**

| $x$ | Euler's Method ($h=0.05$) | Euler's Method ($h=0.1$) | Analytical Solution | Absolute Error (h=0.05) |
| :-- | :------------------------ | :------------------------ | :------------------ | :---------------------- |
| 0.3 | 1.3802                    | 1.3620                    | 1.3997              | 0.0195                  |

**Observation:**
Reducing the step size from $0.1$ to $0.05$ has reduced the absolute error at $x=0.3$ from approximately $0.0377$ to $0.0195$, demonstrating the $O(h)$ global error behavior.

---

### 7. Practice Questions and Exercises

**Question 1:**
Consider the ODE $\frac{dy}{dx} = y - x^2$ with initial condition $y(0) = 1$.
Use Euler's method with a step size of $h = 0.2$ to approximate $y(0.6)$.

**Question 2:**
For the ODE $\frac{dy}{dx} = 2x + y$ with $y(1) = 2$, use Euler's method with $h = 0.1$ to find $y(1.3)$.

**Question 3:**
Explain in your own words why reducing the step size $h$ generally improves the accuracy of Euler's method. What are the drawbacks of using a very small step size?

**Question 4:**
(Conceptual) If you are solving an ODE where the function $f(x,y)$ is very large, how might this affect the accuracy of Euler's method for a fixed step size?

---

### Answers to Practice Questions

**Answer 1:**
We want to approximate $y(0.6)$ for $\frac{dy}{dx} = y - x^2$, with $y(0) = 1$ and $h = 0.2$.
$f(x, y) = y - x^2$
$x_0 = 0, y_0 = 1$

*   **Step 1 ($x_1 = 0.2$):**
    $f(0, 1) = 1 - 0^2 = 1$
    $y_1 = y_0 + h \cdot f(x_0, y_0) = 1 + 0.2 \cdot (1) = 1.2$
    $(x_1, y_1) = (0.2, 1.2)$

*   **Step 2 ($x_2 = 0.4$):**
    $f(0.2, 1.2) = 1.2 - (0.2)^2 = 1.2 - 0.04 = 1.16$
    $y_2 = y_1 + h \cdot f(x_1, y_1) = 1.2 + 0.2 \cdot (1.16) = 1.2 + 0.232 = 1.432$
    $(x_2, y_2) = (0.4, 1.432)$

*   **Step 3 ($x_3 = 0.6$):**
    $f(0.4, 1.432) = 1.432 - (0.4)^2 = 1.432 - 0.16 = 1.272$
    $y_3 = y_2 + h \cdot f(x_2, y_2) = 1.432 + 0.2 \cdot (1.272) = 1.432 + 0.2544 = 1.6864$

So, the approximate value of $y(0.6)$ is **1.6864**.

**Answer 2:**
We want to approximate $y(1.3)$ for $\frac{dy}{dx} = 2x + y$, with $y(1) = 2$ and $h = 0.1$.
$f(x, y) = 2x + y$
$x_0 = 1, y_0 = 2$

*   **Step 1 ($x_1 = 1.1$):**
    $f(1, 2) = 2(1) + 2 = 4$
    $y_1 = y_0 + h \cdot f(x_0, y_0) = 2 + 0.1 \cdot (4) = 2 + 0.4 = 2.4$
    $(x_1, y_1) = (1.1, 2.4)$

*   **Step 2 ($x_2 = 1.2$):**
    $f(1.1, 2.4) = 2(1.1) + 2.4 = 2.2 + 2.4 = 4.6$
    $y_2 = y_1 + h \cdot f(x_1, y_1) = 2.4 + 0.1 \cdot (4.6) = 2.4 + 0.46 = 2.86$
    $(x_2, y_2) = (1.2, 2.86)$

*   **Step 3 ($x_3 = 1.3$):**
    $f(1.2, 2.86) = 2(1.2) + 2.86 = 2.4 + 2.86 = 5.26$
    $y_3 = y_2 + h \cdot f(x_2, y_2) = 2.86 + 0.1 \cdot (5.26) = 2.86 + 0.526 = 3.386$

So, the approximate value of $y(1.3)$ is **3.386**.

**Answer 3:**
Reducing the step size $h$ improves accuracy because Euler's method approximates the solution curve with straight line segments. A smaller step size means these segments are shorter, and thus a better approximation of the actual curve. The error introduced at each step (truncation error) is proportional to $h^2$. By reducing $h$, we reduce this per-step error. Since the global error is the accumulation of these per-step errors, reducing $h$ reduces the total accumulated error, making the overall approximation more accurate.

The drawbacks of using a very small step size include:
1.  **Increased Computation Time:** More steps are required to reach the desired $x$ value, leading to longer computation times.
2.  **Increased Round-off Error:** Performing a large number of arithmetic operations can lead to the accumulation of small errors due to the finite precision of computer arithmetic.
3.  **Diminishing Returns:** At some point, the reduction in truncation error might be offset by the increase in round-off error, or the computational cost might become prohibitive for the gain in accuracy.

**Answer 4:**
If $f(x, y)$ is very large, it means the slope of the solution curve is very steep. When Euler's method uses a constant slope over an interval $h$, if that slope is large, the straight line segment can deviate significantly from the actual curve, especially if the slope itself changes rapidly within that interval. For a fixed step size $h$, a larger magnitude of $f(x, y)$ will generally lead to a larger truncation error, as the straight line approximation will diverge more quickly from the true solution. This might necessitate a smaller step size than if $f(x, y)$ were smaller.

---

### Important Points to Remember

*   **Euler's method is an iterative numerical technique for approximating solutions to first-order ODEs.**
*   **The core idea is to use the slope at the current point to linearly extrapolate to the next point.**
*   **The iterative formulas are $x_{n+1} = x_n + h$ and $y_{n+1} = y_n + h \cdot f(x_n, y_n)$.**
*   **The accuracy of Euler's method is $O(h)$ (global error).** Reducing $h$ generally improves accuracy but increases computational cost.
*   **Errors in Euler's method arise from truncation (approximation of curve by line) and round-off.**
*   **Euler's method is simple but often not accurate enough for complex problems; higher-order methods are usually preferred.**
