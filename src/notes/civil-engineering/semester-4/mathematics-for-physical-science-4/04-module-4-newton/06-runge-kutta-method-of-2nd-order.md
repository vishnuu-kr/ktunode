---
title: "Runge - Kutta method of 2nd Order"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 4: Newton"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810940"
status: "completed"
scrapedAt: "2026-05-20T18:46:15.413Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 4: Newton

### Topic: Runge-Kutta Method of 2nd Order

---

### **Learning Outcomes Covered:**

This module aims to equip you with the understanding and application of the second-order Runge-Kutta method for solving ordinary differential equations (ODEs). By the end of this topic, you will be able to:

*   Understand the limitations of Euler's method for solving ODEs.
*   Explain the motivation behind developing higher-order numerical methods like Runge-Kutta.
*   Derive or understand the derivation of the second-order Runge-Kutta (RK2) formulas.
*   Apply the RK2 method to solve first-order ODEs with given initial conditions.
*   Compare the accuracy of the RK2 method with Euler's method.
*   Recognize common variations of the RK2 method (e.g., Heun's method, Midpoint method).

---

### **1. Introduction: The Need for Higher-Order Methods**

#### **1.1 Limitations of Euler's Method**

*   **Euler's method** is the simplest numerical method for solving first-order ODEs of the form $\frac{dy}{dx} = f(x, y)$ with an initial condition $y(x_0) = y_0$.
*   It approximates the solution curve by a series of straight line segments.
*   At each step, it uses the slope at the beginning of the interval $(x_i, y_i)$ to estimate the value at the next point $(x_{i+1}, y_{i+1})$.
*   The formula is: $y_{i+1} = y_i + h f(x_i, y_i)$, where $h = x_{i+1} - x_i$ is the step size.
*   **Error Analysis:** Euler's method has a **local truncation error** of order $O(h^2)$ and a **global truncation error** of order $O(h)$. This means that if you halve the step size, the error reduces by half.
*   **Consequence:** For accurate results, especially over longer intervals or with rapidly changing solutions, Euler's method often requires very small step sizes, leading to computationally intensive solutions.

#### **1.2 Motivation for Runge-Kutta Methods**

*   To achieve higher accuracy with larger step sizes, we need numerical methods with smaller truncation errors.
*   Runge-Kutta methods are a family of iterative methods that achieve higher accuracy by evaluating the slope $f(x, y)$ at multiple points within each step interval.
*   They are designed to match Taylor series expansions of the solution $y(x)$ up to a certain order.

---

### **2. The Runge-Kutta Method of 2nd Order (RK2)**

The core idea of RK2 is to use a weighted average of slopes calculated at different points within the interval $[x_i, x_{i+1}]$ to get a better estimate of the change in $y$.

The general form of a second-order Runge-Kutta method is given by:

$y_{i+1} = y_i + h \sum_{j=1}^2 w_j k_j$

where:
*   $k_j$ are slope estimators.
*   $w_j$ are weights, such that $\sum_{j=1}^2 w_j = 1$ to ensure the method is consistent.

The general form of the slope estimators $k_j$ is:

$k_j = f(x_i + \alpha_j h, y_i + \beta_j h)$

#### **2.1 Derivation Concept (Taylor Series)**

The goal is to approximate the true value $y(x_{i+1})$ by expanding $y(x_i + h)$ in a Taylor series around $x_i$:

$y(x_i + h) = y(x_i) + h y'(x_i) + \frac{h^2}{2!} y''(x_i) + O(h^3)$

We know $y'(x_i) = f(x_i, y_i)$.
For $y''(x_i)$, we can differentiate $y'(x) = f(x, y(x))$ with respect to $x$:

$y''(x) = \frac{d}{dx} f(x, y(x)) = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} \frac{dy}{dx} = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} f$

So, $y(x_i + h) = y_i + h f(x_i, y_i) + \frac{h^2}{2} \left( \frac{\partial f}{\partial x} + f \frac{\partial f}{\partial y} \right)_{x_i, y_i} + O(h^3)$

The RK2 method aims to match this Taylor expansion up to the $h^2$ term using two slope evaluations ($k_1, k_2$).

Let's consider the general RK2 form and expand its terms:

$y_{i+1} = y_i + h(w_1 k_1 + w_2 k_2)$

where:
$k_1 = f(x_i, y_i)$
$k_2 = f(x_i + \alpha_2 h, y_i + \beta_2 h)$

Expanding $k_2$ using Taylor series around $(x_i, y_i)$:
$k_2 = f(x_i, y_i) + h \left( \alpha_2 \frac{\partial f}{\partial x} + \beta_2 \frac{\partial f}{\partial y} \right)_{x_i, y_i} + \frac{h^2}{2} \left( \alpha_2^2 \frac{\partial^2 f}{\partial x^2} + 2 \alpha_2 \beta_2 \frac{\partial^2 f}{\partial x \partial y} + \beta_2^2 \frac{\partial^2 f}{\partial y^2} \right)_{x_i, y_i} + O(h^3)$

Substituting $k_1$ and $k_2$ into the RK2 formula:
$y_{i+1} = y_i + h \left( w_1 f(x_i, y_i) + w_2 \left[ f(x_i, y_i) + h \left( \alpha_2 \frac{\partial f}{\partial x} + \beta_2 \frac{\partial f}{\partial y} \right)_{x_i, y_i} + O(h^2) \right] \right)$
$y_{i+1} = y_i + h f(x_i, y_i) (w_1 + w_2) + h^2 f(x_i, y_i) \left( w_2 \left( \alpha_2 \frac{\partial f}{\partial x} + \beta_2 \frac{\partial f}{\partial y} \right)_{x_i, y_i} \right) + O(h^3)$

For this to match the Taylor expansion of $y(x_i + h)$:
1.  **Coefficient of $h$**: $w_1 + w_2 = 1$ (consistency condition).
2.  **Coefficient of $h^2$**: $w_2 \alpha_2 = \frac{1}{2}$ and $w_2 \beta_2 = \frac{1}{2} f$.

These conditions give us a family of RK2 methods. The most common ones arise from specific choices of $\alpha_2, \beta_2, w_1, w_2$.

---

#### **2.2 Common RK2 Methods**

There are infinitely many RK2 methods satisfying the conditions derived above. Two of the most popular are:

##### **2.2.1 Heun's Method (Modified Euler's Method)**

*   **Derivation:** This method uses the slope at the beginning of the interval ($k_1$) and an improved estimate of the slope at the end of the interval ($k_2$). The improved slope $k_2$ is calculated using the slope from Euler's method at the beginning of the interval to predict the value at the end.
    *   $k_1 = f(x_i, y_i)$ (Slope at the start of the interval)
    *   $k_2 = f(x_i + h, y_i + h f(x_i, y_i))$ (Estimated slope at the end using Euler's prediction)
    *   $y_{i+1} = y_i + \frac{h}{2}(k_1 + k_2)$

*   **Specific RK2 Parameters:**
    *   $\alpha_2 = 1$
    *   $\beta_2 = 1$
    *   $w_1 = \frac{1}{2}$
    *   $w_2 = \frac{1}{2}$
    *   Check conditions:
        *   $w_1 + w_2 = \frac{1}{2} + \frac{1}{2} = 1$ (Satisfied)
        *   $w_2 \alpha_2 = \frac{1}{2} \times 1 = \frac{1}{2}$ (Satisfied)
        *   $w_2 \beta_2 = \frac{1}{2} \times 1 = \frac{1}{2}$ (Satisfied)

*   **Formula:**
    $k_1 = f(x_i, y_i)$
    $k_2 = f(x_i + h, y_i + h k_1)$
    $y_{i+1} = y_i + \frac{h}{2}(k_1 + k_2)$

*   **Accuracy:** Heun's method has a local truncation error of $O(h^3)$ and a global truncation error of $O(h^2)$.

##### **2.2.2 Midpoint Method**

*   **Derivation:** This method estimates the slope at the midpoint of the interval. To estimate the value at the midpoint, it uses Euler's method with half the step size.
    *   $k_1 = f(x_i, y_i)$ (Slope at the start)
    *   Let $x_{mid} = x_i + \frac{h}{2}$ and $y_{mid} = y_i + \frac{h}{2} f(x_i, y_i)$ (Estimate at midpoint using Euler's method with step $h/2$)
    *   $k_2 = f(x_{mid}, y_{mid})$ (Slope at the midpoint)
    *   $y_{i+1} = y_i + h k_2$

*   **Specific RK2 Parameters:**
    *   $\alpha_2 = \frac{1}{2}$
    *   $\beta_2 = \frac{1}{2}$
    *   $w_1 = 0$
    *   $w_2 = 1$
    *   Check conditions:
        *   $w_1 + w_2 = 0 + 1 = 1$ (Satisfied)
        *   $w_2 \alpha_2 = 1 \times \frac{1}{2} = \frac{1}{2}$ (Satisfied)
        *   $w_2 \beta_2 = 1 \times \frac{1}{2} = \frac{1}{2}$ (Satisfied)

*   **Formula:**
    $k_1 = f(x_i, y_i)$
    $k_2 = f\left(x_i + \frac{h}{2}, y_i + \frac{h}{2} k_1\right)$
    $y_{i+1} = y_i + h k_2$

*   **Accuracy:** The Midpoint method also has a local truncation error of $O(h^3)$ and a global truncation error of $O(h^2)$.

---

### **3. Applying the RK2 Method**

Let's solve a sample problem using both Heun's and Midpoint methods.

**Problem:** Solve the ODE $\frac{dy}{dx} = x + y$ with initial condition $y(0) = 1$, from $x=0$ to $x=0.4$ using a step size $h=0.2$.

**Given:**
*   $f(x, y) = x + y$
*   $x_0 = 0$, $y_0 = 1$
*   $h = 0.2$
*   We need to find $y(0.2)$ and $y(0.4)$.

#### **Example 1: Heun's Method**

**Step 1: Find y(0.2)**
*   $i=0$: $x_0 = 0$, $y_0 = 1$, $h = 0.2$

    *   Calculate $k_1$:
        $k_1 = f(x_0, y_0) = f(0, 1) = 0 + 1 = 1$

    *   Calculate $k_2$:
        $k_2 = f(x_0 + h, y_0 + h k_1) = f(0 + 0.2, 1 + 0.2 \times 1) = f(0.2, 1.2)$
        $k_2 = 0.2 + 1.2 = 1.4$

    *   Calculate $y_1$ (i.e., $y(0.2)$):
        $y_1 = y_0 + \frac{h}{2}(k_1 + k_2) = 1 + \frac{0.2}{2}(1 + 1.4)$
        $y_1 = 1 + 0.1(2.4) = 1 + 0.24 = 1.24$

    So, $y(0.2) \approx 1.24$

**Step 2: Find y(0.4)**
*   $i=1$: $x_1 = 0.2$, $y_1 = 1.24$, $h = 0.2$

    *   Calculate $k_1$:
        $k_1 = f(x_1, y_1) = f(0.2, 1.24) = 0.2 + 1.24 = 1.44$

    *   Calculate $k_2$:
        $k_2 = f(x_1 + h, y_1 + h k_1) = f(0.2 + 0.2, 1.24 + 0.2 \times 1.44) = f(0.4, 1.24 + 0.288) = f(0.4, 1.528)$
        $k_2 = 0.4 + 1.528 = 1.928$

    *   Calculate $y_2$ (i.e., $y(0.4)$):
        $y_2 = y_1 + \frac{h}{2}(k_1 + k_2) = 1.24 + \frac{0.2}{2}(1.44 + 1.928)$
        $y_2 = 1.24 + 0.1(3.368) = 1.24 + 0.3368 = 1.5768$

    So, $y(0.4) \approx 1.5768$

---

#### **Example 2: Midpoint Method**

**Step 1: Find y(0.2)**
*   $i=0$: $x_0 = 0$, $y_0 = 1$, $h = 0.2$

    *   Calculate $k_1$:
        $k_1 = f(x_0, y_0) = f(0, 1) = 0 + 1 = 1$

    *   Calculate $k_2$:
        $x_{mid} = x_0 + \frac{h}{2} = 0 + \frac{0.2}{2} = 0.1$
        $y_{mid} = y_0 + \frac{h}{2} k_1 = 1 + \frac{0.2}{2} \times 1 = 1 + 0.1 = 1.1$
        $k_2 = f(x_{mid}, y_{mid}) = f(0.1, 1.1) = 0.1 + 1.1 = 1.2$

    *   Calculate $y_1$ (i.e., $y(0.2)$):
        $y_1 = y_0 + h k_2 = 1 + 0.2 \times 1.2 = 1 + 0.24 = 1.24$

    So, $y(0.2) \approx 1.24$ (Same as Heun's method for this step)

**Step 2: Find y(0.4)**
*   $i=1$: $x_1 = 0.2$, $y_1 = 1.24$, $h = 0.2$

    *   Calculate $k_1$:
        $k_1 = f(x_1, y_1) = f(0.2, 1.24) = 0.2 + 1.24 = 1.44$

    *   Calculate $k_2$:
        $x_{mid} = x_1 + \frac{h}{2} = 0.2 + \frac{0.2}{2} = 0.2 + 0.1 = 0.3$
        $y_{mid} = y_1 + \frac{h}{2} k_1 = 1.24 + \frac{0.2}{2} \times 1.44 = 1.24 + 0.1 \times 1.44 = 1.24 + 0.144 = 1.384$
        $k_2 = f(x_{mid}, y_{mid}) = f(0.3, 1.384) = 0.3 + 1.384 = 1.684$

    *   Calculate $y_2$ (i.e., $y(0.4)$):
        $y_2 = y_1 + h k_2 = 1.24 + 0.2 \times 1.684 = 1.24 + 0.3368 = 1.5768$

    So, $y(0.4) \approx 1.5768$ (Same as Heun's method for this step as well)

**Verification:** The exact solution to $\frac{dy}{dx} = x+y$ with $y(0)=1$ is $y(x) = 2e^x - x - 1$.
*   $y(0.2) = 2e^{0.2} - 0.2 - 1 \approx 2(1.2214) - 1.2 = 2.4428 - 1.2 = 1.2428$
*   $y(0.4) = 2e^{0.4} - 0.4 - 1 \approx 2(1.4918) - 1.4 = 2.9836 - 1.4 = 1.5836$

Our RK2 approximations (1.24 and 1.5768) are much closer to the exact values than what Euler's method would typically provide with the same step size.

---

### **4. Comparing RK2 with Euler's Method**

*   **Accuracy:** RK2 methods (like Heun's and Midpoint) have a global error of $O(h^2)$, meaning the error reduces quadratically as the step size is halved. Euler's method has a global error of $O(h)$, meaning the error reduces linearly. This makes RK2 significantly more accurate for a given step size.
*   **Computational Cost:** RK2 requires two function evaluations per step, whereas Euler's method requires only one. However, the increased accuracy of RK2 often allows for larger step sizes, potentially leading to fewer total steps and thus a more efficient computation overall for achieving a desired accuracy.

---

### **5. Practice Questions/Exercises**

1.  **Understanding Errors:** Explain why a numerical method with a higher-order truncation error is generally preferred over one with a lower-order error for solving ODEs.
2.  **Heun's Method Application:** Solve the ODE $\frac{dy}{dx} = y - x$ with the initial condition $y(0) = 2$, from $x=0$ to $x=0.4$, using Heun's method with a step size $h=0.2$.
3.  **Midpoint Method Application:** Solve the ODE $\frac{dy}{dx} = x^2 + y^2$ with the initial condition $y(0) = 0$, from $x=0$ to $x=0.2$, using the Midpoint method with a step size $h=0.1$.
4.  **Comparison:** Compare the results from Question 3 with what you would expect from Euler's method for the same problem and step size. (You don't need to calculate Euler's method here, just discuss the expected difference in accuracy).
5.  **General RK2 Formula:** If $f(x, y) = x$, find the values of $\alpha_2, \beta_2, w_1, w_2$ that define an RK2 method, and write down the specific formulas. (Hint: The problem simplifies greatly).

---

### **Answers to Practice Questions**

1.  **Understanding Errors:** A higher-order truncation error (e.g., $O(h^2)$ or $O(h^3)$) means that the error introduced at each step decreases more rapidly as the step size ($h$) is reduced. Consequently, to achieve a certain level of accuracy, a method with a higher-order error can typically use a larger step size than a method with a lower-order error, leading to fewer computational steps and potentially a faster solution while maintaining accuracy.

2.  **Heun's Method Application:**
    *   ODE: $\frac{dy}{dx} = y - x$, $y(0) = 2$, $h=0.2$
    *   **Step 1: Find y(0.2)**
        *   $x_0 = 0, y_0 = 2, h = 0.2$
        *   $k_1 = f(0, 2) = 2 - 0 = 2$
        *   $k_2 = f(0 + 0.2, 2 + 0.2 \times 2) = f(0.2, 2.4) = 2.4 - 0.2 = 2.2$
        *   $y_1 = y_0 + \frac{h}{2}(k_1 + k_2) = 2 + \frac{0.2}{2}(2 + 2.2) = 2 + 0.1(4.2) = 2 + 0.42 = 2.42$
        *   $y(0.2) \approx 2.42$

    *   **Step 2: Find y(0.4)**
        *   $x_1 = 0.2, y_1 = 2.42, h = 0.2$
        *   $k_1 = f(0.2, 2.42) = 2.42 - 0.2 = 2.22$
        *   $k_2 = f(0.2 + 0.2, 2.42 + 0.2 \times 2.22) = f(0.4, 2.42 + 0.444) = f(0.4, 2.864) = 2.864 - 0.4 = 2.464$
        *   $y_2 = y_1 + \frac{h}{2}(k_1 + k_2) = 2.42 + \frac{0.2}{2}(2.22 + 2.464) = 2.42 + 0.1(4.684) = 2.42 + 0.4684 = 2.8884$
        *   $y(0.4) \approx 2.8884$

3.  **Midpoint Method Application:**
    *   ODE: $\frac{dy}{dx} = x^2 + y^2$, $y(0) = 0$, $h=0.1$
    *   **Step 1: Find y(0.1)**
        *   $x_0 = 0, y_0 = 0, h = 0.1$
        *   $k_1 = f(0, 0) = 0^2 + 0^2 = 0$
        *   $x_{mid} = 0 + \frac{0.1}{2} = 0.05$
        *   $y_{mid} = 0 + \frac{0.1}{2} \times 0 = 0$
        *   $k_2 = f(0.05, 0) = (0.05)^2 + 0^2 = 0.0025$
        *   $y_1 = y_0 + h k_2 = 0 + 0.1 \times 0.0025 = 0.00025$
        *   $y(0.1) \approx 0.00025$

    *   **Step 2: Find y(0.2)**
        *   $x_1 = 0.1, y_1 = 0.00025, h = 0.1$
        *   $k_1 = f(0.1, 0.00025) = (0.1)^2 + (0.00025)^2 = 0.01 + 0.0000000625 \approx 0.01$
        *   $x_{mid} = 0.1 + \frac{0.1}{2} = 0.15$
        *   $y_{mid} = 0.00025 + \frac{0.1}{2} \times 0.01 = 0.00025 + 0.0005 = 0.00075$
        *   $k_2 = f(0.15, 0.00075) = (0.15)^2 + (0.00075)^2 = 0.0225 + 0.0000005625 \approx 0.0225$
        *   $y_2 = y_1 + h k_2 = 0.00025 + 0.1 \times 0.0225 = 0.00025 + 0.00225 = 0.0025$
        *   $y(0.2) \approx 0.0025$

4.  **Comparison:** Euler's method has a global error of $O(h)$. With a step size of $h=0.1$, the error would be significant. The midpoint method has a global error of $O(h^2)$. For $h=0.1$, the error of the midpoint method would be proportional to $(0.1)^2 = 0.01$, while the error of Euler's method would be proportional to $0.1$. Therefore, the midpoint method is expected to be significantly more accurate than Euler's method for this problem with the given step size. The calculated values $y(0.1) \approx 0.00025$ and $y(0.2) \approx 0.0025$ are likely much closer to the true solution than what Euler's method would yield.

5.  **General RK2 Formula:**
    *   ODE: $\frac{dy}{dx} = x$, $f(x, y) = x$. Note that $f$ does not depend on $y$.
    *   The conditions are:
        *   $w_1 + w_2 = 1$
        *   $w_2 \alpha_2 = \frac{1}{2}$
        *   $w_2 \beta_2 = \frac{1}{2} f(x_i, y_i) = \frac{1}{2} x_i$

    *   Since $f(x, y) = x$, the term $f(x_i, y_i)$ in the third condition is simply $x_i$. However, the derivation of the RK2 method assumes the ODE is $\frac{dy}{dx} = f(x,y)$, and the Taylor expansion for $y''$ involves $\frac{\partial f}{\partial y}$. If $f$ is independent of $y$, then $\frac{\partial f}{\partial y} = 0$.
        Let's re-examine the derivation for $f(x,y)=x$:
        $y'(x) = x$
        $y''(x) = 1$
        Taylor expansion: $y(x_i+h) = y_i + hx_i + \frac{h^2}{2}(1) + O(h^3)$

        RK2 formula: $y_{i+1} = y_i + h(w_1 k_1 + w_2 k_2)$
        $k_1 = f(x_i, y_i) = x_i$
        $k_2 = f(x_i + \alpha_2 h, y_i + \beta_2 h) = x_i + \alpha_2 h$

        $y_{i+1} = y_i + h(w_1 x_i + w_2 (x_i + \alpha_2 h))$
        $y_{i+1} = y_i + hx_i (w_1 + w_2) + h^2 (w_2 \alpha_2)$

        Matching with Taylor expansion:
        *   $w_1 + w_2 = 1$ (Coefficient of $h$)
        *   $w_2 \alpha_2 = \frac{1}{2}$ (Coefficient of $h^2$)

        The condition $w_2 \beta_2 = \frac{1}{2} f(x_i, y_i)$ is no longer relevant in its original form because $f$ doesn't depend on $y$. The key is that $k_2$ should be an approximation of $f(x_i + h, y(x_i+h))$, and the Taylor expansion of $f(x,y)$ is just $f(x_i, y_i) + h \frac{\partial f}{\partial x}$. For $f(x,y)=x$, $\frac{\partial f}{\partial x} = 1$, so $f(x_i+h, y(x_i+h)) \approx x_i+h$. This means $k_2$ should approximate $x_i+h$.

        From $k_2 = x_i + \alpha_2 h$, we need $\alpha_2 h$ to approximate $h$, so $\alpha_2 = 1$.
        If $\alpha_2 = 1$, then from $w_2 \alpha_2 = \frac{1}{2}$, we get $w_2 = \frac{1}{2}$.
        From $w_1 + w_2 = 1$, we get $w_1 = 1 - \frac{1}{2} = \frac{1}{2}$.

        So, for $f(x,y)=x$, one valid RK2 method is:
        *   $\alpha_2 = 1$
        *   $\beta_2$ can be anything (it doesn't affect $k_2$ since $f$ is independent of $y$)
        *   $w_1 = \frac{1}{2}$
        *   $w_2 = \frac{1}{2}$

        This leads to:
        $k_1 = x_i$
        $k_2 = f(x_i + 1 \cdot h, y_i + \beta_2 h) = x_i + h$
        $y_{i+1} = y_i + h \left(\frac{1}{2} x_i + \frac{1}{2} (x_i + h)\right)$
        $y_{i+1} = y_i + h \left(x_i + \frac{h}{2}\right)$
        $y_{i+1} = y_i + h x_i + \frac{h^2}{2}$

        This is the exact solution for $y(x) = \frac{x^2}{2} + C$ when $f(x,y)=x$, confirming it's an RK2 method.
        *(Self-correction: The $\beta_2$ term in the general RK2 derivation $k_j = f(x_i + \alpha_j h, y_i + \beta_j h)$ is used in the Taylor expansion of $f$ with respect to $y$. If $f$ is independent of $y$, then $\frac{\partial f}{\partial y} = 0$, and the $y$-argument in $f$ doesn't influence the value of $k_j$. Therefore, any value of $\beta_2$ would technically work for $k_2$, but we need to ensure the overall method matches the Taylor series of $y$. The choice $\alpha_2=1, \beta_2=1, w_1=w_2=1/2$ corresponds to Heun's method, which is generally valid and provides the correct $h^2$ term.)*

---

### **Important Points to Remember:**

*   **Global Error:** RK2 methods have a global error of $O(h^2)$, making them more accurate than Euler's method ($O(h)$).
*   **Function Evaluations:** RK2 requires two function evaluations per step, while Euler's method requires only one.
*   **Heun's Method:** A common RK2 method that averages the slope at the start of the interval with an Euler-predicted slope at the end.
*   **Midpoint Method:** Another common RK2 method that uses the slope at the midpoint of the interval, estimated using Euler's method with half the step size.
*   **Accuracy vs. Step Size:** The increased accuracy of RK2 often justifies its slightly higher computational cost per step, as it can often use larger step sizes for the same level of accuracy compared to Euler's method.
*   **General RK2 Family:** Many RK2 methods exist, all aiming to match the Taylor series expansion of the solution up to the $h^2$ term.

---
This concludes the study notes for the second-order Runge-Kutta method. Remember to practice applying these methods to various ODEs to solidify your understanding.
