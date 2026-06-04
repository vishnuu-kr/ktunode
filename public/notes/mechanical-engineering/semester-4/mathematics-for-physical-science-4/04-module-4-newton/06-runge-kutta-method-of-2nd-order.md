---
title: "Runge - Kutta method of 2nd Order"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 4: Newton"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ed6"
status: "completed"
scrapedAt: "2026-05-20T17:54:54.584Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 4: Newton

### Topic: Runge-Kutta Methods of 2nd Order

---

### 1. Introduction and Motivation

This topic delves into a specific class of numerical methods for solving ordinary differential equations (ODEs), known as **Runge-Kutta methods**. Specifically, we will focus on the **second-order Runge-Kutta (RK2) methods**.

**Why do we need numerical methods for ODEs?**

Many physical phenomena are described by ODEs. While some ODEs can be solved analytically (i.e., finding an exact formula for the solution), many cannot. In such cases, numerical methods are essential to approximate the solution at discrete points.

**Relevance to Physical Science:**

*   **Classical Mechanics:** Describing the motion of objects under forces (e.g., projectile motion, planetary orbits).
*   **Thermodynamics:** Modeling heat transfer and temperature changes.
*   **Electrical Engineering:** Analyzing circuits with RLC components.
*   **Chemical Kinetics:** Studying reaction rates and concentrations.

**Connection to Course Outcomes:**

This topic directly addresses **CO4: Apply numerical methods to find solutions of ordinary differential equations**. The RK2 methods provide a practical approach to approximating solutions to ODEs, which is a fundamental skill in applying mathematical models to physical science problems. The knowledge level (K3) indicates the ability to apply this concept.

**Textbook References:**

*   **Sastry, S. S. (2012). *Introductory Methods of Numerical Analysis*.** This book is a primary resource for numerical methods and will provide detailed explanations and derivations of Runge-Kutta methods.
*   **Chapra, S. C., & Canale, R. P. (2021). *Numerical methods for Engineers*.** This reference offers practical applications and engineering perspectives on numerical methods for solving ODEs.

---

### 2. Review of First-Order Methods (Euler's Method)

Before diving into RK2, it's useful to recall the simplest numerical method for solving ODEs: **Euler's Method**.

**Problem Statement:**

We aim to solve an initial value problem (IVP) of the form:
$$ \frac{dy}{dx} = f(x, y), \quad y(x_0) = y_0 $$
where we want to find the value of $y$ at subsequent points $x_1, x_2, \dots, x_n$.

**Euler's Method Formula:**

Starting from $(x_0, y_0)$, we take steps of size $h = x_{i+1} - x_i$. The next approximate value $y_{i+1}$ is calculated as:
$$ y_{i+1} = y_i + h \cdot f(x_i, y_i) $$

**Geometric Interpretation:**

Euler's method approximates the solution curve by a series of short line segments, where each segment's slope is determined by the derivative at the beginning of the segment.

**Limitations of Euler's Method:**

*   **Low Accuracy:** The error per step is proportional to $h^2$, making it less accurate for larger step sizes or when high precision is required.
*   **Accumulated Error:** Errors from each step can accumulate, leading to significant deviations from the true solution over many steps.

**Example (Euler's Method):**

Solve $\frac{dy}{dx} = x + y$, with $y(0) = 1$, using Euler's method with $h = 0.1$. Find $y(0.2)$.

*   **Step 1:**
    $x_0 = 0, y_0 = 1$
    $y_1 = y_0 + h \cdot f(x_0, y_0) = 1 + 0.1 \cdot (0 + 1) = 1 + 0.1 = 1.1$
    So, $y(0.1) \approx 1.1$.

*   **Step 2:**
    $x_1 = 0.1, y_1 = 1.1$
    $y_2 = y_1 + h \cdot f(x_1, y_1) = 1.1 + 0.1 \cdot (0.1 + 1.1) = 1.1 + 0.1 \cdot (1.2) = 1.1 + 0.12 = 1.22$
    So, $y(0.2) \approx 1.22$.

---

### 3. The Need for Higher-Order Methods

To overcome the limitations of Euler's method, we need methods that use more information about the function $f(x,y)$ within each step interval. Higher-order methods achieve better accuracy by incorporating the derivative at intermediate points or by using a more sophisticated approximation of the curve.

**Taylor Series Expansion:**

Consider the Taylor series expansion of $y(x+h)$ around $x$:
$$ y(x+h) = y(x) + h y'(x) + \frac{h^2}{2!} y''(x) + \frac{h^3}{3!} y'''(x) + \dots $$
We know that $y'(x) = f(x, y)$. We can find $y''(x)$ by differentiating $f(x, y)$ with respect to $x$:
$$ y''(x) = \frac{d}{dx} f(x, y(x)) = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} \frac{dy}{dx} = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} f $$
Substituting this into the Taylor series:
$$ y(x+h) = y(x) + h f(x, y) + \frac{h^2}{2} \left( \frac{\partial f}{\partial x} + f \frac{\partial f}{\partial y} \right) + O(h^3) $$
This equation suggests that if we can approximate the terms involving $h^2$ and higher, we can achieve better accuracy.

---

### 4. Runge-Kutta Methods of 2nd Order (RK2)

RK2 methods are a family of methods that use two evaluations of the function $f(x, y)$ per step to achieve a local truncation error of $O(h^3)$ and a global truncation error of $O(h^2)$. This is a significant improvement over Euler's method, which has a local truncation error of $O(h^2)$ and a global error of $O(h)$.

**General Form of a Two-Stage RK Method:**

A two-stage RK method calculates $y_{i+1}$ using $y_i$ and two evaluations of $f$ at intermediate points. The general form is:
$$ y_{i+1} = y_i + w_1 k_1 + w_2 k_2 $$
where $k_1$ and $k_2$ are approximations to the slope, and $w_1, w_2$ are weights.

*   $k_1 = f(x_i, y_i)$ (This is the same as the slope in Euler's method).
*   $k_2 = f(x_i + p h, y_i + q h k_1)$

The coefficients $w_1, w_2, p, q$ determine the specific RK2 method. For the method to be of second order, these coefficients must satisfy certain conditions derived from matching the RK method's expansion to the Taylor series of $y(x+h)$.

**Derivation of Coefficients for RK2 (General Idea):**

To match the Taylor series expansion:
$y(x+h) = y(x) + h y'(x) + \frac{h^2}{2} y''(x) + O(h^3)$
$y(x+h) = y(x) + h f(x, y) + \frac{h^2}{2} \left( \frac{\partial f}{\partial x} + f \frac{\partial f}{\partial y} \right) + O(h^3)$

The RK2 expansion is:
$y_{i+1} = y_i + w_1 k_1 + w_2 k_2$
$k_1 = f(x_i, y_i)$
$k_2 = f(x_i + ph, y_i + qh f(x_i, y_i))$

Using Taylor expansion for $k_2$:
$k_2 \approx f(x_i, y_i) + (ph) \frac{\partial f}{\partial x}(x_i, y_i) + (qh f(x_i, y_i)) \frac{\partial f}{\partial y}(x_i, y_i)$
$k_2 \approx f + ph \frac{\partial f}{\partial x} + qh f \frac{\partial f}{\partial y}$

Substituting $k_1$ and $k_2$ into the RK2 formula:
$y_{i+1} \approx y_i + w_1 f + w_2 (f + ph \frac{\partial f}{\partial x} + qh f \frac{\partial f}{\partial y})$
$y_{i+1} \approx y_i + (w_1 + w_2) f + w_2 ph \frac{\partial f}{\partial x} + w_2 qh f \frac{\partial f}{\partial y}$

Comparing this to the Taylor series expansion of $y(x+h)$:
1.  Coefficient of $f$: $w_1 + w_2 = 1$
2.  Coefficient of $h \frac{\partial f}{\partial x}$: $w_2 p = \frac{1}{2}$
3.  Coefficient of $h f \frac{\partial f}{\partial y}$: $w_2 q = \frac{1}{2}$

These three equations have four unknowns ($w_1, w_2, p, q$). This means there are infinitely many RK2 methods. We need to choose values for three coefficients and determine the fourth.

---

### 5. Common RK2 Methods

Two of the most widely used RK2 methods are:

#### 5.1. The Midpoint Method (or Modified Euler Method)

This method uses the slope at the midpoint of the interval $(x_i, x_{i+1})$ to estimate the value at $x_{i+1}$.

*   **Coefficients:** $p = 1/2$, $q = 1/2$.
*   **Derivation of weights:**
    *   $w_1 + w_2 = 1$
    *   $w_2 (1/2) = 1/2 \implies w_2 = 1$
    *   $w_1 + 1 = 1 \implies w_1 = 0$

This suggests that the midpoint method might only require one evaluation, but this is incorrect because the slope at the midpoint is *estimated*.

Let's re-evaluate the $k_2$ term for the midpoint method. The midpoint is $x_i + h/2$. The value of $y$ at the midpoint is estimated using Euler's method with half the step size: $y_i + (h/2) f(x_i, y_i)$.
So, the slope at the midpoint is estimated by $k_2 = f(x_i + h/2, y_i + (h/2) f(x_i, y_i))$.

The midpoint method formula is:
$$ y_{i+1} = y_i + k_2 $$
where:
*   $k_1 = f(x_i, y_i)$
*   $k_2 = f(x_i + h/2, y_i + (h/2) k_1)$

This is a form of RK2, but it doesn't quite match the general form with two weighted terms for $k_1$ and $k_2$ adding up to $y_{i+1}$.

**A More Standard View of Midpoint Method in RK Context:**

If we strictly follow the $y_{i+1} = y_i + w_1 k_1 + w_2 k_2$ form:
Let $k_1 = f(x_i, y_i)$
Let $k_2 = f(x_i + \frac{1}{2}h, y_i + \frac{1}{2}h k_1)$

To get a second-order method, we need:
$w_1 + w_2 = 1$
$w_2 \cdot \frac{1}{2} = \frac{1}{2} \implies w_2 = 1$
$w_1 + w_2 \cdot \frac{1}{2} = \frac{1}{2}$ (This condition arises from the $h^2$ term in Taylor expansion of $k_2$ itself, not directly in the $y_{i+1}$ expansion)

The actual standard Midpoint Method formula is:
$$ y_{i+1} = y_i + h \cdot f(x_i + h/2, y_i + (h/2) f(x_i, y_i)) $$
This formula uses one explicit evaluation of $f$ at an intermediate point.

**The most common RK2 implementation for physical sciences is often presented with two evaluations:**

*   $k_1 = f(x_i, y_i)$
*   $k_2 = f(x_i + h, y_i + h k_1)$ (This is actually Euler's method applied over the full step with the slope at the start)

This isn't RK2. Let's stick to a recognized RK2 form.

#### 5.2. Heun's Method (Improved Euler Method)

This method uses the average of the slope at the beginning of the interval and the slope at the end of the interval (estimated using Euler's method).

*   **Coefficients:** $p = 1$, $q = 1$.
*   **Derivation of weights:**
    *   $w_1 + w_2 = 1$
    *   $w_2 (1) = 1/2 \implies w_2 = 1/2$
    *   $w_1 + w_2 (1) = 1/2 \implies w_1 + 1/2 = 1/2 \implies w_1 = 0$
    This derivation leads to $w_1=0, w_2=1$, which is not Heun's method.

Let's use the correct formulation for Heun's method (also known as the Trapezoidal Rule for ODEs, or the Modified Euler Method).

Heun's method is given by:
$$ y_{i+1} = y_i + \frac{h}{2} [k_1 + k_2] $$
where:
*   $k_1 = f(x_i, y_i)$ (Slope at the beginning of the interval)
*   $k_2 = f(x_i + h, y_i + h k_1)$ (Slope at the end of the interval, estimated using Euler's method)

**Verification of Heun's Method:**

Let's check the coefficients for Heun's method in the general RK2 form:
$y_{i+1} = y_i + w_1 k_1 + w_2 k_2$
where $k_1 = f(x_i, y_i)$ and $k_2 = f(x_i + ph, y_i + qh k_1)$.

For Heun's method:
$y_{i+1} = y_i + \frac{h}{2} f(x_i, y_i) + \frac{h}{2} f(x_i + h, y_i + h f(x_i, y_i))$

Comparing to the general form:
$y_{i+1} = y_i + \frac{1}{2} k_1 + \frac{1}{2} k_2$
So, $w_1 = 1/2$ and $w_2 = 1/2$.
And $k_2 = f(x_i + h, y_i + h k_1)$ implies $p=1$ and $q=1$.

Now, let's check if these satisfy the second-order conditions:
1.  $w_1 + w_2 = 1/2 + 1/2 = 1$ (Satisfied)
2.  $w_2 p = (1/2)(1) = 1/2$ (Satisfied)
3.  $w_2 q = (1/2)(1) = 1/2$ (Satisfied)

Therefore, Heun's method is a valid RK2 method.

**Heun's Method Formula:**
$$ y_{i+1} = y_i + \frac{h}{2} [f(x_i, y_i) + f(x_i + h, y_i + h f(x_i, y_i))] $$

**Important Point:** Heun's method is often preferred because it involves a predictor-corrector-like structure. $k_1$ is a predictor of the slope. $y_i + h k_1$ is a predictor for $y(x_i+h)$. Then $k_2$ is the slope at the predicted endpoint. Finally, the average slope is used to update $y_i$.

#### 5.3. Another Common RK2 Method (Ralston's Method, or a variant)

There are other RK2 methods. One common variant that arises from the conditions is:
*   $p = 2/3$, $q = 2/3$
*   $w_1 + w_2 = 1$
*   $w_2 (2/3) = 1/2 \implies w_2 = 3/4$
*   $w_1 + w_2 (2/3) = 1/2 \implies w_1 + (3/4)(2/3) = 1/2 \implies w_1 + 1/2 = 1/2 \implies w_1 = 0$
This leads to $w_1=0, w_2=1$, which implies only one effective slope is used in the update, which is not correct.

The condition $w_2 q = 1/2$ comes from the coefficient of the $h^2 \frac{\partial f}{\partial y}$ term.

Let's re-examine the conditions and some common choices of $p$.
If we choose $p = 1/2$ (midpoint idea):
*   $w_1 + w_2 = 1$
*   $w_2 (1/2) = 1/2 \implies w_2 = 1$
*   $w_1 + w_2 (1/2) = 1/2 \implies w_1 + 1(1/2) = 1/2 \implies w_1 = 0$.
This combination $(p=1/2, q=1/2, w_1=0, w_2=1)$ would give $y_{i+1} = y_i + k_2$, which requires $k_2 = f(x_i + h/2, y_i + h/2 k_1)$. This is the midpoint method.

If we choose $p=1$:
*   $w_1 + w_2 = 1$
*   $w_2 (1) = 1/2 \implies w_2 = 1/2$
*   $w_1 + w_2 (1) = 1/2 \implies w_1 + 1/2 = 1/2 \implies w_1 = 0$.
This combination $(p=1, q=1, w_1=0, w_2=1)$ would mean $y_{i+1} = y_i + k_2$, where $k_2 = f(x_i+h, y_i+h k_1)$. This is precisely Euler's method applied again!

**There's a subtlety in how $k_2$ is defined.**
The general RK(2,2) form (2 stages, order 2) is:
$$ y_{i+1} = y_i + w_1 k_1 + w_2 k_2 $$
where
$k_1 = f(x_i, y_i)$
$k_2 = f(x_i + p_2 h, y_i + q_{21} h k_1)$

To achieve order 2, we require:
1.  $w_1 + w_2 = 1$
2.  $w_2 p_2 = 1/2$
3.  $w_2 q_{21} = 1/2$

From these: $p_2 = q_{21}$. So, the second evaluation point must be at the same relative position in $x$ and $y$.

Let's check Heun's Method again with this precise form:
Heun's Method: $y_{i+1} = y_i + \frac{h}{2}[f(x_i, y_i) + f(x_i+h, y_i+h f(x_i, y_i))]$
$k_1 = f(x_i, y_i)$
$k_2 = f(x_i+h, y_i+h f(x_i, y_i))$

In the general form: $y_{i+1} = y_i + w_1 k_1 + w_2 k_2$.
Here, $w_1 = 1/2$, $w_2 = 1/2$.
And $k_2 = f(x_i + 1 \cdot h, y_i + 1 \cdot h k_1)$.
So $p_2 = 1$, $q_{21} = 1$.

Checking the conditions:
1.  $w_1 + w_2 = 1/2 + 1/2 = 1$. (OK)
2.  $w_2 p_2 = (1/2) \cdot 1 = 1/2$. (OK)
3.  $w_2 q_{21} = (1/2) \cdot 1 = 1/2$. (OK)

So, Heun's method is indeed an RK2 method.

Let's consider the Midpoint method in this general form:
Midpoint Method: $y_{i+1} = y_i + h f(x_i + h/2, y_i + (h/2) f(x_i, y_i))$
Here, $y_{i+1} = y_i + 1 \cdot k_2$, where $k_2 = f(x_i + h/2, y_i + (h/2) k_1)$.
This implies $w_1 = 0$, $w_2 = 1$.
And $p_2 = 1/2$, $q_{21} = 1/2$.

Checking the conditions:
1.  $w_1 + w_2 = 0 + 1 = 1$. (OK)
2.  $w_2 p_2 = 1 \cdot (1/2) = 1/2$. (OK)
3.  $w_2 q_{21} = 1 \cdot (1/2) = 1/2$. (OK)

So, the Midpoint method is also an RK2 method. It's often written directly, without the $w_1 k_1$ term because $w_1=0$.

**Summary of Common RK2 Methods:**

1.  **Heun's Method (Improved Euler):**
    $k_1 = f(x_i, y_i)$
    $k_2 = f(x_i + h, y_i + h k_1)$
    $y_{i+1} = y_i + \frac{1}{2} (k_1 + k_2) h$

2.  **Midpoint Method:**
    $k_1 = f(x_i, y_i)$
    $k_2 = f(x_i + \frac{h}{2}, y_i + \frac{h}{2} k_1)$
    $y_{i+1} = y_i + h k_2$

**Note on the order of arguments in $f$ for $k_2$:**
The argument for $f$ is $(x_{evaluation}, y_{evaluation})$.
For $k_2$:
*   $x_{evaluation} = x_i + p h$
*   $y_{evaluation} = y_i + q h k_1$

---

### 6. Worked Example using Heun's Method

**Problem:** Solve $\frac{dy}{dx} = x + y$, with $y(0) = 1$, using Heun's method with $h = 0.1$. Find $y(0.2)$.

**Given:**
$f(x, y) = x + y$
$x_0 = 0$, $y_0 = 1$
$h = 0.1$

**Step 1: Calculate $y(0.1)$**

*   $i = 0$
*   $x_0 = 0, y_0 = 1$

*   **Calculate $k_1$:**
    $k_1 = f(x_0, y_0) = f(0, 1) = 0 + 1 = 1$

*   **Calculate $k_2$:**
    $k_2 = f(x_0 + h, y_0 + h k_1) = f(0 + 0.1, 1 + 0.1 \cdot 1) = f(0.1, 1.1)$
    $k_2 = 0.1 + 1.1 = 1.2$

*   **Calculate $y_1$:**
    $y_1 = y_0 + \frac{h}{2} (k_1 + k_2) = 1 + \frac{0.1}{2} (1 + 1.2) = 1 + 0.05 (2.2) = 1 + 0.11 = 1.11$
    So, $y(0.1) \approx 1.11$.

**Step 2: Calculate $y(0.2)$**

*   $i = 1$
*   $x_1 = 0.1, y_1 = 1.11$

*   **Calculate $k_1$:**
    $k_1 = f(x_1, y_1) = f(0.1, 1.11) = 0.1 + 1.11 = 1.21$

*   **Calculate $k_2$:**
    $k_2 = f(x_1 + h, y_1 + h k_1) = f(0.1 + 0.1, 1.11 + 0.1 \cdot 1.21) = f(0.2, 1.11 + 0.121) = f(0.2, 1.231)$
    $k_2 = 0.2 + 1.231 = 1.431$

*   **Calculate $y_2$:**
    $y_2 = y_1 + \frac{h}{2} (k_1 + k_2) = 1.11 + \frac{0.1}{2} (1.21 + 1.431) = 1.11 + 0.05 (2.641) = 1.11 + 0.13205 = 1.24205$
    So, $y(0.2) \approx 1.24205$.

**Comparison with Euler's Method:**
Euler's method gave $y(0.2) \approx 1.22$. Heun's method gives $y(0.2) \approx 1.24205$. The exact solution for $y(x) = 2e^x - x - 1$ is $y(0.2) = 2e^{0.2} - 0.2 - 1 \approx 2(1.2214) - 1.2 = 2.4428 - 1.2 = 1.2428$. Heun's method is much closer to the exact solution.

---

### 7. Worked Example using Midpoint Method

**Problem:** Solve $\frac{dy}{dx} = x + y$, with $y(0) = 1$, using the Midpoint method with $h = 0.1$. Find $y(0.2)$.

**Given:**
$f(x, y) = x + y$
$x_0 = 0$, $y_0 = 1$
$h = 0.1$

**Step 1: Calculate $y(0.1)$**

*   $i = 0$
*   $x_0 = 0, y_0 = 1$

*   **Calculate $k_1$ (same as in Heun's):**
    $k_1 = f(x_0, y_0) = f(0, 1) = 0 + 1 = 1$

*   **Calculate $k_2$ (midpoint estimate):**
    $k_2 = f(x_0 + \frac{h}{2}, y_0 + \frac{h}{2} k_1) = f(0 + \frac{0.1}{2}, 1 + \frac{0.1}{2} \cdot 1) = f(0.05, 1 + 0.05) = f(0.05, 1.05)$
    $k_2 = 0.05 + 1.05 = 1.10$

*   **Calculate $y_1$:**
    $y_1 = y_0 + h k_2 = 1 + 0.1 \cdot 1.10 = 1 + 0.11 = 1.11$
    So, $y(0.1) \approx 1.11$. (Interestingly, same as Heun's for this step)

**Step 2: Calculate $y(0.2)$**

*   $i = 1$
*   $x_1 = 0.1, y_1 = 1.11$

*   **Calculate $k_1$:**
    $k_1 = f(x_1, y_1) = f(0.1, 1.11) = 0.1 + 1.11 = 1.21$

*   **Calculate $k_2$ (midpoint estimate):**
    $k_2 = f(x_1 + \frac{h}{2}, y_1 + \frac{h}{2} k_1) = f(0.1 + \frac{0.1}{2}, 1.11 + \frac{0.1}{2} \cdot 1.21) = f(0.15, 1.11 + 0.05 \cdot 1.21) = f(0.15, 1.11 + 0.0605) = f(0.15, 1.1705)$
    $k_2 = 0.15 + 1.1705 = 1.3205$

*   **Calculate $y_2$:**
    $y_2 = y_1 + h k_2 = 1.11 + 0.1 \cdot 1.3205 = 1.11 + 0.13205 = 1.24205$
    So, $y(0.2) \approx 1.24205$.

**Result:** Both Heun's method and the Midpoint method give the same result ($1.24205$) for $y(0.2)$ in this specific example, and both are close to the exact solution.

---

### 8. Error Analysis for RK2 Methods

*   **Local Truncation Error:** The error introduced in a single step. For RK2 methods, the local truncation error is $O(h^3)$. This means if we use a step size $h$, the error in that step is proportional to $h^3$.
*   **Global Truncation Error:** The total error accumulated over all steps to reach a certain point $x$. For RK2 methods, the global truncation error is $O(h^2)$. This means if we halve the step size, the error is reduced by a factor of four.

This is a significant improvement over Euler's method (global error $O(h)$).

**How to estimate the error?**
One common technique is to run the simulation with two different step sizes, say $h$ and $h/2$. If the RK2 method has a global error of $O(h^2)$, then the difference between the two solutions can give an estimate of the error.

Let $Y(x; h)$ be the solution obtained with step size $h$.
The true solution $y(x)$ can be approximated as:
$y(x) \approx Y(x; h) + C h^2$ (for small $h$)
$y(x) \approx Y(x; h/2) + C (h/2)^2 = Y(x; h/2) + C \frac{h^2}{4}$

Subtracting the second from the first:
$0 \approx Y(x; h) - Y(x; h/2) + \frac{3}{4} C h^2$
$C h^2 \approx \frac{4}{3} [Y(x; h/2) - Y(x; h)]$

The error in the solution with step size $h$ is $E_h \approx C h^2$.
So, $E_h \approx \frac{4}{3} [Y(x; h/2) - Y(x; h)]$.

This method is known as **Richardson Extrapolation** (though this is a simplified application).

---

### 9. Practice Questions and Exercises

**Instructions:** Use the provided methods to solve the following problems. Show all intermediate steps.

**Question 1:**
Solve the differential equation $\frac{dy}{dx} = -2y + x$, with $y(0) = 1$.
Use **Heun's method** to find $y(0.2)$ with a step size $h = 0.1$.
*(Hint: The exact solution is $y(x) = \frac{1}{2}x - \frac{1}{4} + \frac{5}{4}e^{-2x}$)*

**Question 2:**
Solve the differential equation $\frac{dy}{dx} = y - x^2$, with $y(0) = 1$.
Use the **Midpoint method** to find $y(0.2)$ with a step size $h = 0.1$.

**Question 3:**
For the differential equation $\frac{dy}{dx} = y - x^2$, with $y(0) = 1$.
Use **Heun's method** with $h=0.2$ to find $y(0.2)$.
Then, use **Heun's method** with $h=0.1$ to find $y(0.2)$ (i.e., find $y(0.1)$ first, then $y(0.2)$).
Use the results to estimate the error in the solution obtained with $h=0.2$.

---

### 10. Answers to Practice Questions

**Answer 1 (Heun's Method):**

Given: $f(x, y) = -2y + x$, $y(0) = 1$, $h = 0.1$.

**Step 1: Find $y(0.1)$**
*   $x_0 = 0, y_0 = 1$
*   $k_1 = f(0, 1) = -2(1) + 0 = -2$
*   $k_2 = f(0 + 0.1, 1 + 0.1 \cdot (-2)) = f(0.1, 1 - 0.2) = f(0.1, 0.8)$
    $k_2 = -2(0.8) + 0.1 = -1.6 + 0.1 = -1.5$
*   $y_1 = y_0 + \frac{h}{2}(k_1 + k_2) = 1 + \frac{0.1}{2}(-2 + (-1.5)) = 1 + 0.05(-3.5) = 1 - 0.175 = 0.825$
    So, $y(0.1) \approx 0.825$.

**Step 2: Find $y(0.2)$**
*   $x_1 = 0.1, y_1 = 0.825$
*   $k_1 = f(0.1, 0.825) = -2(0.825) + 0.1 = -1.65 + 0.1 = -1.55$
*   $k_2 = f(0.1 + 0.1, 0.825 + 0.1 \cdot (-1.55)) = f(0.2, 0.825 - 0.155) = f(0.2, 0.670)$
    $k_2 = -2(0.670) + 0.2 = -1.340 + 0.2 = -1.140$
*   $y_2 = y_1 + \frac{h}{2}(k_1 + k_2) = 0.825 + \frac{0.1}{2}(-1.55 + (-1.140)) = 0.825 + 0.05(-2.690) = 0.825 - 0.1345 = 0.6905$
    So, $y(0.2) \approx 0.6905$.

**Exact Solution Check:**
$y(0.2) = \frac{1}{2}(0.2) - \frac{1}{4} + \frac{5}{4}e^{-2(0.2)} = 0.1 - 0.25 + 1.25e^{-0.4} \approx -0.15 + 1.25(0.6703) \approx -0.15 + 0.8379 = 0.6879$.
Heun's method result $0.6905$ is close to the exact $0.6879$.

**Answer 2 (Midpoint Method):**

Given: $f(x, y) = y - x^2$, $y(0) = 1$, $h = 0.1$.

**Step 1: Find $y(0.1)$**
*   $x_0 = 0, y_0 = 1$
*   $k_1 = f(0, 1) = 1 - 0^2 = 1$
*   $k_2 = f(0 + \frac{0.1}{2}, 1 + \frac{0.1}{2} \cdot 1) = f(0.05, 1.05)$
    $k_2 = 1.05 - (0.05)^2 = 1.05 - 0.0025 = 1.0475$
*   $y_1 = y_0 + h k_2 = 1 + 0.1 \cdot 1.0475 = 1 + 0.10475 = 1.10475$
    So, $y(0.1) \approx 1.10475$.

**Step 2: Find $y(0.2)$**
*   $x_1 = 0.1, y_1 = 1.10475$
*   $k_1 = f(0.1, 1.10475) = 1.10475 - (0.1)^2 = 1.10475 - 0.01 = 1.09475$
*   $k_2 = f(0.1 + \frac{0.1}{2}, 1.10475 + \frac{0.1}{2} \cdot 1.09475) = f(0.15, 1.10475 + 0.05 \cdot 1.09475)$
    $k_2 = f(0.15, 1.10475 + 0.0547375) = f(0.15, 1.1594875)$
    $k_2 = 1.1594875 - (0.15)^2 = 1.1594875 - 0.0225 = 1.1369875$
*   $y_2 = y_1 + h k_2 = 1.10475 + 0.1 \cdot 1.1369875 = 1.10475 + 0.11369875 = 1.21844875$
    So, $y(0.2) \approx 1.21845$.

**Answer 3 (Error Estimation):**

Given: $f(x, y) = y - x^2$, $y(0) = 1$.

**Using $h = 0.2$ (Heun's Method):**
*   $x_0 = 0, y_0 = 1$
*   $k_1 = f(0, 1) = 1 - 0^2 = 1$
*   $k_2 = f(0 + 0.2, 1 + 0.2 \cdot 1) = f(0.2, 1.2)$
    $k_2 = 1.2 - (0.2)^2 = 1.2 - 0.04 = 1.16$
*   $y(0.2)_{h=0.2} = y_0 + \frac{h}{2}(k_1 + k_2) = 1 + \frac{0.2}{2}(1 + 1.16) = 1 + 0.1(2.16) = 1 + 0.216 = 1.216$

**Using $h = 0.1$ (Heun's Method):**
From Answer 2 (using Heun's method for $y-x^2$ instead of midpoint):
*   $y(0.1) \approx 1.10475$ (using Heun's method for $y-x^2$)
*   $x_1 = 0.1, y_1 = 1.10475$
*   $k_1 = f(0.1, 1.10475) = 1.10475 - (0.1)^2 = 1.09475$
*   $k_2 = f(0.1 + 0.1, 1.10475 + 0.1 \cdot 1.09475) = f(0.2, 1.10475 + 0.109475) = f(0.2, 1.214225)$
    $k_2 = 1.214225 - (0.2)^2 = 1.214225 - 0.04 = 1.174225$
*   $y(0.2)_{h=0.1} = y_1 + \frac{h}{2}(k_1 + k_2) = 1.10475 + \frac{0.1}{2}(1.09475 + 1.174225) = 1.10475 + 0.05(2.268975) = 1.10475 + 0.11344875 = 1.21819875$
    So, $y(0.2)_{h=0.1} \approx 1.21820$.

**Error Estimation:**
Let $Y(x; h)$ be the solution with step size $h$.
Global error $E_h = Y(x; h/2) - Y(x; h)$.
$E_{0.2} \approx \frac{4}{3} [Y(0.2; 0.1) - Y(0.2; 0.2)]$
$E_{0.2} \approx \frac{4}{3} [1.21820 - 1.216] = \frac{4}{3} [0.00220] \approx 0.00293$.
The error in the solution with $h=0.2$ is approximately $0.00293$.

---

### 11. Important Points to Remember

*   **RK2 Methods Improve Accuracy:** They offer better accuracy ($O(h^2)$ global error) than Euler's method ($O(h)$ global error) by using two evaluations of $f$ per step.
*   **Heun's Method (Improved Euler):** Averages the slopes at the beginning and the (Euler-predicted) end of the interval.
    $k_1 = f(x_i, y_i)$
    $k_2 = f(x_i + h, y_i + h k_1)$
    $y_{i+1} = y_i + \frac{h}{2}(k_1 + k_2)$
*   **Midpoint Method:** Uses the slope at the midpoint of the interval, estimated with an Euler step of $h/2$.
    $k_1 = f(x_i, y_i)$
    $k_2 = f(x_i + \frac{h}{2}, y_i + \frac{h}{2} k_1)$
    $y_{i+1} = y_i + h k_2$
*   **Flexibility of RK2:** There are multiple RK2 methods depending on the choice of coefficients ($p, q, w_1, w_2$).
*   **Error Estimation:** Comparing solutions from different step sizes ($h$ and $h/2$) can estimate the global error.
*   **Application:** Crucial for solving ODEs in physics and engineering when analytical solutions are not feasible.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 12. References and Further Reading

*   **Sastry, S. S. (2012). *Introductory Methods of Numerical Analysis*.** Chapter 5 (Numerical Solution of Ordinary Differential Equations) will have detailed derivations and more RK methods.
*   **Chapra, S. C., & Canale, R. P. (2021). *Numerical methods for Engineers*.** Look for chapters on ODE solvers, which will provide practical examples and computational aspects.
*   **Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences*.** While this book focuses on probability and statistics, it might provide context on how differential equations model phenomena that are then analyzed statistically.

---
**(End of Study Notes)**