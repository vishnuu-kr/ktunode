---
title: "Numerical solution of ordinary differential equations-Initial value and boundary value problems"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 3: Numerical solution of ordinary differential equations"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646b8"
status: "completed"
scrapedAt: "2026-05-20T18:23:17.549Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - Module 3: Numerical Solution of Ordinary Differential Equations

## Topic: Numerical Solution of Ordinary Differential Equations: Initial Value and Boundary Value Problems

**Course Outcomes Addressed:**
*   **CO4:** Execute numerical procedures to solve ordinary and partial differential equations (Knowledge Level: K3)

**Learning Outcomes:**
*   Understand the difference between Initial Value Problems (IVPs) and Boundary Value Problems (BVPs).
*   Explain the underlying principles of numerical methods for solving ODEs.
*   Apply and implement Euler's method (forward and backward) for IVPs.
*   Apply and implement the Heun's method (improved Euler) for IVPs.
*   Apply and implement the Runge-Kutta methods (second and fourth order) for IVPs.
*   Understand the concept of error in numerical solutions and its implications.
*   Explain the basic principles of finite difference methods for solving BVPs.
*   Apply finite difference methods to solve second-order linear BVPs.

---

### 1. Introduction to Ordinary Differential Equations (ODEs)

*   **Definition:** An ordinary differential equation (ODE) is an equation that involves an unknown function of one independent variable and its derivatives.
    *   Example: $ \frac{dy}{dx} = f(x, y) $
*   **Order of an ODE:** The order of an ODE is the order of the highest derivative present in the equation.
    *   Example: $ \frac{d^2y}{dx^2} + 3\frac{dy}{dx} + 2y = x $ is a second-order ODE.
*   **Linear vs. Nonlinear ODEs:**
    *   **Linear:** The dependent variable and its derivatives appear only to the first power and are not multiplied together. The coefficients can depend on the independent variable.
    *   **Nonlinear:** If an ODE is not linear, it is nonlinear.
*   **Classification of ODE Problems:**
    *   **Initial Value Problems (IVPs):** All the conditions (initial conditions) are specified at a single value of the independent variable.
        *   Form: $ \frac{dy}{dx} = f(x, y) $, with $ y(x_0) = y_0 $
        *   Here, $ x $ is the independent variable, $ y $ is the dependent variable, and $ x_0 $ is the initial point. The value $ y_0 $ is the initial condition.
        *   **Example:** $ \frac{dy}{dx} = -2y + e^x $, with $ y(0) = 2 $. We need to find $ y(x) $ for $ x > 0 $.
    *   **Boundary Value Problems (BVPs):** The conditions are specified at two or more different values of the independent variable.
        *   Form: $ \frac{d^2y}{dx^2} = f(x, y, \frac{dy}{dx}) $, with boundary conditions like $ y(a) = y_a $ and $ y(b) = y_b $.
        *   Here, $ a $ and $ b $ are the boundaries, and $ y_a $ and $ y_b $ are the boundary conditions.
        *   **Example:** $ \frac{d^2y}{dx^2} + y = 0 $, with $ y(0) = 0 $ and $ y(\pi/2) = 1 $. We need to find $ y(x) $ for $ 0 \leq x \leq \pi/2 $.

---

### 2. Numerical Solution of Initial Value Problems (IVPs)

**Key Concept:** In numerical solutions for IVPs, we approximate the solution at discrete points along the independent variable. We start from the initial condition and march forward to find the solution at subsequent points.

*   **Discretization:** We divide the domain of the independent variable (e.g., $ x $) into small intervals of width $ h $. Let the points be $ x_0, x_1, x_2, \dots, x_n $, where $ x_i = x_0 + i \cdot h $. We aim to find the approximate values $ y_0, y_1, y_2, \dots, y_n $ corresponding to these $ x $ values.

#### 2.1. Euler's Method (Forward Euler)

*   **Principle:** Euler's method is the simplest method. It approximates the derivative $ \frac{dy}{dx} $ at $ x_i $ as the slope of the tangent line at $ (x_i, y_i) $. We then use this slope to predict the value of $ y $ at $ x_{i+1} $.
*   **Derivation:** From the definition of the derivative: $ \frac{dy}{dx} \approx \frac{y_{i+1} - y_i}{x_{i+1} - x_i} $.
    Since $ x_{i+1} - x_i = h $, we have $ \frac{dy}{dx} \approx \frac{y_{i+1} - y_i}{h} $.
    Substituting this into the ODE $ \frac{dy}{dx} = f(x, y) $, we get $ \frac{y_{i+1} - y_i}{h} \approx f(x_i, y_i) $.
*   **Formula:** $ y_{i+1} = y_i + h \cdot f(x_i, y_i) $
    *   This formula allows us to calculate the next value $ y_{i+1} $ using the current value $ y_i $ and the function $ f $ evaluated at $ (x_i, y_i) $.
*   **Example:** Solve $ \frac{dy}{dx} = x + y $, with $ y(0) = 1 $ using Euler's method with $ h = 0.1 $ to find $ y(0.2) $.
    *   $ x_0 = 0, y_0 = 1, h = 0.1 $
    *   **Step 1 (i=0):**
        $ x_1 = x_0 + h = 0 + 0.1 = 0.1 $
        $ y_1 = y_0 + h \cdot f(x_0, y_0) = 1 + 0.1 \cdot (0 + 1) = 1 + 0.1 \cdot (1) = 1.1 $
    *   **Step 2 (i=1):**
        $ x_2 = x_1 + h = 0.1 + 0.1 = 0.2 $
        $ y_2 = y_1 + h \cdot f(x_1, y_1) = 1.1 + 0.1 \cdot (0.1 + 1.1) = 1.1 + 0.1 \cdot (1.2) = 1.1 + 0.12 = 1.22 $
    *   So, $ y(0.2) \approx 1.22 $.

*   **Error:** Euler's method has a local truncation error of order $ O(h^2) $ and a global truncation error of order $ O(h) $. This means the error accumulates linearly with the number of steps.
*   **Chapra & Canale (6th Ed.):** Chapter 28 discusses Euler's method and its limitations for accuracy.

#### 2.2. Euler's Method (Backward Euler)

*   **Principle:** Instead of using the slope at the beginning of the interval, the backward Euler method uses the slope at the end of the interval to estimate the solution.
*   **Formula:** $ y_{i+1} = y_i + h \cdot f(x_{i+1}, y_{i+1}) $
*   **Challenge:** This method is implicit because $ y_{i+1} $ appears on both sides of the equation. It requires solving an equation (often nonlinear) for $ y_{i+1} $ at each step.
*   **Application:** While more stable for certain types of ODEs (stiff ODEs), it's computationally more expensive.

#### 2.3. Heun's Method (Improved Euler or Predictor-Corrector Method)

*   **Principle:** This method improves the accuracy of Euler's method by using an average of the slopes at the beginning and end of the interval. It's a predictor-corrector method.
    1.  **Predictor Step:** Use the forward Euler method to get a preliminary estimate of $ y_{i+1} $ (let's call it $ y_{i+1}^p $).
        $ y_{i+1}^p = y_i + h \cdot f(x_i, y_i) $
    2.  **Corrector Step:** Use the average of the slope at $ (x_i, y_i) $ and the slope at $ (x_{i+1}, y_{i+1}^p) $ to get a more accurate estimate of $ y_{i+1} $.
        $ y_{i+1} = y_i + h \cdot \frac{f(x_i, y_i) + f(x_{i+1}, y_{i+1}^p)}{2} $
*   **Example:** Solve $ \frac{dy}{dx} = x + y $, with $ y(0) = 1 $ using Heun's method with $ h = 0.1 $ to find $ y(0.2) $.
    *   $ x_0 = 0, y_0 = 1, h = 0.1 $
    *   **Step 1 (i=0):**
        *   **Predictor:**
            $ x_1 = 0.1 $
            $ y_1^p = y_0 + h \cdot f(x_0, y_0) = 1 + 0.1 \cdot (0 + 1) = 1.1 $
        *   **Corrector:**
            $ y_1 = y_0 + h \cdot \frac{f(x_0, y_0) + f(x_1, y_1^p)}{2} $
            $ y_1 = 1 + 0.1 \cdot \frac{(0 + 1) + (0.1 + 1.1)}{2} = 1 + 0.1 \cdot \frac{1 + 1.2}{2} = 1 + 0.1 \cdot \frac{2.2}{2} = 1 + 0.1 \cdot (1.1) = 1.11 $
    *   **Step 2 (i=1):**
        *   **Predictor:**
            $ x_2 = 0.2 $
            $ y_2^p = y_1 + h \cdot f(x_1, y_1) = 1.11 + 0.1 \cdot (0.1 + 1.11) = 1.11 + 0.1 \cdot (1.21) = 1.11 + 0.121 = 1.231 $
        *   **Corrector:**
            $ y_2 = y_1 + h \cdot \frac{f(x_1, y_1) + f(x_2, y_2^p)}{2} $
            $ y_2 = 1.11 + 0.1 \cdot \frac{(0.1 + 1.11) + (0.2 + 1.231)}{2} = 1.11 + 0.1 \cdot \frac{1.21 + 1.431}{2} $
            $ y_2 = 1.11 + 0.1 \cdot \frac{2.641}{2} = 1.11 + 0.1 \cdot (1.3205) = 1.11 + 0.13205 = 1.24205 $
    *   So, $ y(0.2) \approx 1.24205 $.

*   **Error:** Heun's method has a local truncation error of order $ O(h^3) $ and a global truncation error of order $ O(h^2) $. This makes it more accurate than Euler's method for the same step size.

#### 2.4. Runge-Kutta Methods

*   **Principle:** Runge-Kutta (RK) methods are a family of iterative methods for approximating solutions of ODEs. They achieve higher accuracy by evaluating the derivative function at multiple points within an interval. The most common ones are second-order and fourth-order.
*   **General Idea:** They involve calculating weighted averages of slopes at different points within the interval $ [x_i, x_{i+1}] $.

##### 2.4.1. Second-Order Runge-Kutta (RK2)

*   **Heun's Method is a form of RK2.**
*   Another common RK2 method is the **Midpoint Method:**
    1.  Calculate the slope at the midpoint of the interval.
        $ k_1 = f(x_i, y_i) $
        $ k_2 = f(x_i + h/2, y_i + (h/2)k_1) $
    2.  Use this midpoint slope to advance.
        $ y_{i+1} = y_i + h \cdot k_2 $
*   **Error:** Local truncation error is $ O(h^3) $, global is $ O(h^2) $.

##### 2.4.2. Fourth-Order Runge-Kutta (RK4)

*   **Principle:** RK4 is widely used due to its good balance of accuracy and computational cost. It uses four evaluations of the function per step.
*   **Formulas:**
    $ k_1 = f(x_i, y_i) $
    $ k_2 = f(x_i + h/2, y_i + (h/2)k_1) $
    $ k_3 = f(x_i + h/2, y_i + (h/2)k_2) $
    $ k_4 = f(x_i + h, y_i + h k_3) $
    $ y_{i+1} = y_i + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4) $
*   **Error:** Local truncation error is $ O(h^5) $, global truncation error is $ O(h^4) $. This is significantly more accurate than Euler's or Heun's methods for the same step size.
*   **Chapra & Canale (6th Ed.):** Chapter 28 provides a detailed explanation and example of RK4.
*   **Example:** Solve $ \frac{dy}{dx} = x + y $, with $ y(0) = 1 $ using RK4 with $ h = 0.1 $ to find $ y(0.2) $.
    *   $ x_0 = 0, y_0 = 1, h = 0.1 $
    *   **Step 1 (i=0) to find y(0.1):**
        $ k_1 = f(0, 1) = 0 + 1 = 1 $
        $ k_2 = f(0 + 0.1/2, 1 + (0.1/2) \cdot 1) = f(0.05, 1.05) = 0.05 + 1.05 = 1.1 $
        $ k_3 = f(0 + 0.1/2, 1 + (0.1/2) \cdot 1.1) = f(0.05, 1.055) = 0.05 + 1.055 = 1.105 $
        $ k_4 = f(0 + 0.1, 1 + 0.1 \cdot 1.105) = f(0.1, 1.1105) = 0.1 + 1.1105 = 1.2105 $
        $ y_1 = y_0 + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4) = 1 + \frac{0.1}{6}(1 + 2(1.1) + 2(1.105) + 1.2105) $
        $ y_1 = 1 + \frac{0.1}{6}(1 + 2.2 + 2.21 + 1.2105) = 1 + \frac{0.1}{6}(6.6205) = 1 + 0.11034167 \approx 1.11034 $
    *   **Step 2 (i=1) to find y(0.2):** (using $ y_1 = 1.11034 $)
        $ k_1 = f(0.1, 1.11034) = 0.1 + 1.11034 = 1.21034 $
        $ k_2 = f(0.1 + 0.05, 1.11034 + 0.05 \cdot 1.21034) = f(0.15, 1.170857) = 0.15 + 1.170857 = 1.320857 $
        $ k_3 = f(0.1 + 0.05, 1.11034 + 0.05 \cdot 1.320857) = f(0.15, 1.176383) = 0.15 + 1.176383 = 1.326383 $
        $ k_4 = f(0.1 + 0.1, 1.11034 + 0.1 \cdot 1.326383) = f(0.2, 1.242978) = 0.2 + 1.242978 = 1.442978 $
        $ y_2 = y_1 + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4) = 1.11034 + \frac{0.1}{6}(1.21034 + 2(1.320857) + 2(1.326383) + 1.442978) $
        $ y_2 = 1.11034 + \frac{0.1}{6}(1.21034 + 2.641714 + 2.652766 + 1.442978) = 1.11034 + \frac{0.1}{6}(7.9478) = 1.11034 + 0.132463 \approx 1.24280 $
    *   So, $ y(0.2) \approx 1.24280 $.

#### 2.5. Solving Systems of ODEs

*   **Principle:** Methods like RK4 can be extended to solve systems of first-order ODEs.
*   **Example:** For a system $ \frac{dy}{dx} = f_1(x, y, z) $ and $ \frac{dz}{dx} = f_2(x, y, z) $, we would apply the RK4 formulas separately to $ y $ and $ z $ at each step.
    $ k_{1,y} = f_1(x_i, y_i, z_i) $
    $ k_{1,z} = f_2(x_i, y_i, z_i) $
    $ k_{2,y} = f_1(x_i + h/2, y_i + (h/2)k_{1,y}, z_i + (h/2)k_{1,z}) $
    $ k_{2,z} = f_2(x_i + h/2, y_i + (h/2)k_{1,y}, z_i + (h/2)k_{1,z}) $
    ... and so on for $ k_3 $ and $ k_4 $ for both $ y $ and $ z $.
    $ y_{i+1} = y_i + \frac{h}{6}(k_{1,y} + 2k_{2,y} + 2k_{3,y} + k_{4,y}) $
    $ z_{i+1} = z_i + \frac{h}{6}(k_{1,z} + 2k_{2,z} + 2k_{3,z} + k_{4,z}) $

#### 2.6. Higher-Order ODEs

*   **Principle:** An $ n^{th} $-order ODE can be converted into a system of $ n $ first-order ODEs.
*   **Example:** $ \frac{d^2y}{dx^2} + 2\frac{dy}{dx} + y = 0 $
    Let $ y_1 = y $ and $ y_2 = \frac{dy}{dx} $.
    Then $ \frac{dy_1}{dx} = y_2 $
    And $ \frac{dy_2}{dx} = -2\frac{dy}{dx} - y = -2y_2 - y_1 $.
    This is now a system of two first-order ODEs:
    $ \frac{dy_1}{dx} = f_1(x, y_1, y_2) = y_2 $
    $ \frac{dy_2}{dx} = f_2(x, y_1, y_2) = -2y_2 - y_1 $
    This system can then be solved using methods like RK4.

---

### 3. Numerical Solution of Boundary Value Problems (BVPs)

**Key Concept:** For BVPs, we cannot simply march forward from an initial condition. The conditions are spread out. We need methods that can handle these distributed conditions.

#### 3.1. Finite Difference Method (FDM)

*   **Principle:** FDM approximates derivatives using finite differences, converting the ODE into a system of algebraic equations.
*   **Discretization:** The domain $ [a, b] $ is divided into $ N $ subintervals of equal width $ h = (b-a)/N $. This creates $ N+1 $ grid points $ x_0, x_1, \dots, x_N $, where $ x_0 = a $ and $ x_N = b $. We denote the approximate solution at $ x_i $ as $ y_i $.
*   **Approximating Derivatives:**
    *   **First Derivative:**
        *   Forward difference: $ \frac{dy}{dx} \approx \frac{y_{i+1} - y_i}{h} $
        *   Backward difference: $ \frac{dy}{dx} \approx \frac{y_i - y_{i-1}}{h} $
        *   Central difference: $ \frac{dy}{dx} \approx \frac{y_{i+1} - y_{i-1}}{2h} $ (more accurate, $ O(h^2) $)
    *   **Second Derivative:**
        *   Central difference: $ \frac{d^2y}{dx^2} \approx \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} $ (most common, $ O(h^2) $)
*   **Applying FDM to a Second-Order BVP:**
    Consider the linear BVP: $ \frac{d^2y}{dx^2} + p(x)\frac{dy}{dx} + q(x)y = r(x) $, with $ y(a) = y_a $ and $ y(b) = y_b $.

    Substitute the finite difference approximations into the ODE at each interior grid point $ x_i $ (where $ i = 1, 2, \dots, N-1 $):
    $ \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} + p(x_i) \frac{y_{i+1} - y_{i-1}}{2h} + q(x_i)y_i = r(x_i) $

    Rearrange the terms to group $ y_{i-1}, y_i, $ and $ y_{i+1} $:
    $ (1 - \frac{h}{2}p(x_i))y_{i-1} + (-2 + h^2q(x_i))y_i + (1 + \frac{h}{2}p(x_i))y_{i+1} = h^2r(x_i) $

    This equation applies for $ i = 1, 2, \dots, N-1 $.

*   **System of Linear Equations:**
    The boundary conditions provide the first and last equations:
    *   $ y_0 = y_a $
    *   $ y_N = y_b $

    For $ i=1 $:
    $ (1 - \frac{h}{2}p(x_1))y_0 + (-2 + h^2q(x_1))y_1 + (1 + \frac{h}{2}p(x_1))y_2 = h^2r(x_1) $
    Since $ y_0 $ is known, this becomes:
    $ (-2 + h^2q(x_1))y_1 + (1 + \frac{h}{2}p(x_1))y_2 = h^2r(x_1) - (1 - \frac{h}{2}p(x_1))y_a $

    For $ i=N-1 $:
    $ (1 - \frac{h}{2}p(x_{N-1}))y_{N-2} + (-2 + h^2q(x_{N-1}))y_{N-1} + (1 + \frac{h}{2}p(x_{N-1}))y_N = h^2r(x_{N-1}) $
    Since $ y_N $ is known, this becomes:
    $ (1 - \frac{h}{2}p(x_{N-1}))y_{N-2} + (-2 + h^2q(x_{N-1}))y_{N-1} = h^2r(x_{N-1}) - (1 + \frac{h}{2}p(x_{N-1}))y_b $

    The equations for $ i = 2, \dots, N-2 $ are similar in form, involving $ y_{i-1}, y_i, y_{i+1} $.
    This results in a system of $ N-1 $ linear algebraic equations for the $ N-1 $ unknown $ y_i $ values ($ y_1, y_2, \dots, y_{N-1} $).
    This system is often tridiagonal, which can be solved efficiently using methods like the Thomas algorithm.

*   **Example:** Solve $ \frac{d^2y}{dx^2} + y = 0 $ with $ y(0) = 0 $ and $ y(\pi/2) = 1 $ using FDM with $ N=4 $.
    *   Domain $ [0, \pi/2] $. $ N=4 $. $ h = (\pi/2 - 0)/4 = \pi/8 $.
    *   Grid points: $ x_0 = 0, x_1 = \pi/8, x_2 = 2\pi/8 = \pi/4, x_3 = 3\pi/8, x_4 = \pi/2 $.
    *   Boundary conditions: $ y_0 = 0, y_4 = 1 $.
    *   The ODE is $ \frac{d^2y}{dx^2} + 0 \cdot \frac{dy}{dx} + 1 \cdot y = 0 $. So $ p(x)=0, q(x)=1, r(x)=0 $.
    *   The general finite difference equation becomes:
        $ \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} + 1 \cdot y_i = 0 $
        $ y_{i-1} + (-2 + h^2)y_i + y_{i+1} = 0 $

    *   **For i=1:** ($ x_1 = \pi/8 $)
        $ y_0 + (-2 + h^2)y_1 + y_2 = 0 $
        $ 0 + (-2 + (\pi/8)^2)y_1 + y_2 = 0 $
        $ (-2 + \pi^2/64)y_1 + y_2 = 0 $

    *   **For i=2:** ($ x_2 = \pi/4 $)
        $ y_1 + (-2 + h^2)y_2 + y_3 = 0 $
        $ y_1 + (-2 + \pi^2/64)y_2 + y_3 = 0 $

    *   **For i=3:** ($ x_3 = 3\pi/8 $)
        $ y_2 + (-2 + h^2)y_3 + y_4 = 0 $
        $ y_2 + (-2 + \pi^2/64)y_3 + 1 = 0 $
        $ y_2 + (-2 + \pi^2/64)y_3 = -1 $

    *   Let $ \alpha = -2 + \pi^2/64 $. The system is:
        1.  $ \alpha y_1 + y_2 = 0 $
        2.  $ y_1 + \alpha y_2 + y_3 = 0 $
        3.  $ y_2 + \alpha y_3 = -1 $

    *   From (1): $ y_2 = -\alpha y_1 $.
    *   Substitute into (2): $ y_1 + \alpha (-\alpha y_1) + y_3 = 0 \implies y_1 - \alpha^2 y_1 + y_3 = 0 \implies y_3 = (\alpha^2 - 1) y_1 $.
    *   Substitute into (3): $ (-\alpha y_1) + \alpha ((\alpha^2 - 1) y_1) = -1 $
        $ -\alpha y_1 + (\alpha^3 - \alpha) y_1 = -1 $
        $ (\alpha^3 - 2\alpha) y_1 = -1 $
        $ y_1 = \frac{-1}{\alpha^3 - 2\alpha} $

    *   Using $ \pi \approx 3.14159 $, $ \pi^2 \approx 9.8696 $.
        $ h^2 = (\pi/8)^2 \approx (0.3927)^2 \approx 0.1542 $.
        $ \alpha = -2 + 0.1542 = -1.8458 $.
        $ y_1 = \frac{-1}{(-1.8458)^3 - 2(-1.8458)} = \frac{-1}{-6.2875 + 3.6916} = \frac{-1}{-2.5959} \approx 0.3852 $
        $ y_2 = -\alpha y_1 = -(-1.8458)(0.3852) \approx 0.7110 $
        $ y_3 = (\alpha^2 - 1) y_1 = ((-1.8458)^2 - 1)(0.3852) = (3.4069 - 1)(0.3852) = (2.4069)(0.3852) \approx 0.9271 $

    *   Approximate solution: $ y(0)=0, y(\pi/8) \approx 0.3852, y(\pi/4) \approx 0.7110, y(3\pi/8) \approx 0.9271, y(\pi/2) \approx 1 $.
    *   The exact solution is $ y(x) = \sin(x) $. Let's check:
        $ \sin(0) = 0 $
        $ \sin(\pi/8) \approx \sin(0.3927) \approx 0.3827 $
        $ \sin(\pi/4) \approx \sin(0.7854) \approx 0.7071 $
        $ \sin(3\pi/8) \approx \sin(1.1781) \approx 0.9239 $
        $ \sin(\pi/2) = 1 $
    *   The results are reasonably close, demonstrating the FDM approach.

*   **Balagurusamy (2017) & Gupta (1995):** These textbooks often cover finite difference methods for BVPs in their ODE chapters.
*   **Gerald & Wheatly (6th Ed.) & Jain et al.:** Reference books provide more in-depth theoretical treatment of FDM.

#### 3.2. Other Methods for BVPs (Brief Mention)

*   **Shooting Method:** Converts a BVP into a series of IVP problems. It involves guessing initial derivatives and iterating until the boundary conditions are met. This is often used when FDM is not ideal or for nonlinear BVPs.
*   **Finite Element Method (FEM):** A more advanced technique that uses piecewise polynomial approximations over smaller elements. It's very versatile for complex geometries and boundary conditions.

---

### 4. Error Analysis and Considerations

*   **Truncation Error:** The error introduced by approximating derivatives or using a finite number of terms in a series.
    *   **Local Truncation Error:** The error made in a single step.
    *   **Global Truncation Error:** The accumulated error over all steps.
*   **Round-off Error:** The error introduced by the finite precision of computer arithmetic.
*   **Step Size ($h$):**
    *   **Smaller $h$:** Generally leads to higher accuracy (lower truncation error) but requires more computational effort (more steps, higher round-off error accumulation).
    *   **Larger $h$:** Leads to lower accuracy (higher truncation error) but requires less computation.
*   **Stability:** A numerical method is stable if errors do not grow uncontrollably as the computation proceeds. Euler's method can be unstable for certain ODEs. Higher-order methods like RK4 are generally more stable.
*   **Stiff ODEs:** ODEs where solutions change very rapidly for some components and very slowly for others. Special methods (e.g., implicit methods, adaptive step size methods) are needed for stiff ODEs.

---

### 5. Important Points to Remember

*   **IVPs vs. BVPs:** Understand the fundamental difference in how conditions are specified.
*   **Marching vs. Solving Systems:** IVPs are solved by "marching" from an initial point, while BVPs typically result in solving a system of algebraic equations (e.g., using FDM).
*   **Accuracy Hierarchy:** For a given step size $h$, RK4 > Heun's Method > Euler's Method in terms of accuracy.
*   **Error vs. Step Size:** There's a trade-off between accuracy and computational cost when choosing the step size $h$.
*   **Higher-Order ODEs:** Can be converted into systems of first-order ODEs.
*   **FDM for BVPs:** Relies on approximating derivatives and solving the resulting system of linear equations.

---

### 6. Practice Questions and Exercises

**Question 1 (IVP):**
Solve the initial value problem $ \frac{dy}{dx} = x^2 + y $, with $ y(0) = 1 $, using:
a) Euler's method with $ h = 0.2 $ to find $ y(0.4) $.
b) Heun's method with $ h = 0.2 $ to find $ y(0.4) $.
c) RK4 method with $ h = 0.2 $ to find $ y(0.4) $.

**Answer 1:**
Given ODE: $ f(x, y) = x^2 + y $, $ y(0) = 1 $, $ h = 0.2 $. We need $ y(0.4) $. This requires two steps: from $ x=0 $ to $ x=0.2 $ (finding $ y_1 $) and then from $ x=0.2 $ to $ x=0.4 $ (finding $ y_2 $).

**a) Euler's Method:**
*   **Step 1 (i=0):** $ x_0 = 0, y_0 = 1 $
    $ x_1 = 0.2 $
    $ y_1 = y_0 + h \cdot f(x_0, y_0) = 1 + 0.2 \cdot (0^2 + 1) = 1 + 0.2 \cdot (1) = 1.2 $
*   **Step 2 (i=1):** $ x_1 = 0.2, y_1 = 1.2 $
    $ x_2 = 0.4 $
    $ y_2 = y_1 + h \cdot f(x_1, y_1) = 1.2 + 0.2 \cdot (0.2^2 + 1.2) = 1.2 + 0.2 \cdot (0.04 + 1.2) = 1.2 + 0.2 \cdot (1.24) = 1.2 + 0.248 = 1.448 $
    So, $ y(0.4) \approx 1.448 $.

**b) Heun's Method:**
*   **Step 1 (i=0):** $ x_0 = 0, y_0 = 1 $
    *   **Predictor:** $ x_1 = 0.2 $
        $ y_1^p = y_0 + h \cdot f(x_0, y_0) = 1 + 0.2 \cdot (0^2 + 1) = 1.2 $
    *   **Corrector:**
        $ y_1 = y_0 + \frac{h}{2} [f(x_0, y_0) + f(x_1, y_1^p)] = 1 + \frac{0.2}{2} [(0^2 + 1) + (0.2^2 + 1.2)] $
        $ y_1 = 1 + 0.1 [1 + (0.04 + 1.2)] = 1 + 0.1 [1 + 1.24] = 1 + 0.1 [2.24] = 1 + 0.224 = 1.224 $
*   **Step 2 (i=1):** $ x_1 = 0.2, y_1 = 1.224 $
    *   **Predictor:** $ x_2 = 0.4 $
        $ y_2^p = y_1 + h \cdot f(x_1, y_1) = 1.224 + 0.2 \cdot (0.2^2 + 1.224) = 1.224 + 0.2 \cdot (0.04 + 1.224) = 1.224 + 0.2 \cdot (1.264) = 1.224 + 0.2528 = 1.4768 $
    *   **Corrector:**
        $ y_2 = y_1 + \frac{h}{2} [f(x_1, y_1) + f(x_2, y_2^p)] = 1.224 + \frac{0.2}{2} [(0.2^2 + 1.224) + (0.4^2 + 1.4768)] $
        $ y_2 = 1.224 + 0.1 [(0.04 + 1.224) + (0.16 + 1.4768)] = 1.224 + 0.1 [1.264 + 1.6368] $
        $ y_2 = 1.224 + 0.1 [2.9008] = 1.224 + 0.29008 = 1.51408 $
    So, $ y(0.4) \approx 1.51408 $.

**c) RK4 Method:**
*   **Step 1 (i=0):** $ x_0 = 0, y_0 = 1, h = 0.2 $
    $ k_1 = f(0, 1) = 0^2 + 1 = 1 $
    $ k_2 = f(0 + 0.2/2, 1 + (0.2/2) \cdot 1) = f(0.1, 1.1) = 0.1^2 + 1.1 = 0.01 + 1.1 = 1.11 $
    $ k_3 = f(0 + 0.2/2, 1 + (0.2/2) \cdot 1.11) = f(0.1, 1.11) = 0.1^2 + 1.11 = 0.01 + 1.11 = 1.12 $ (Note: typo in calculation for k3, should be f(0.1, 1 + 0.1*1.11) = f(0.1, 1.111) = 0.1^2 + 1.111 = 0.01 + 1.111 = 1.121)
    Corrected $k_3 = f(0.1, 1 + 0.1 \cdot 1.11) = f(0.1, 1.111) = (0.1)^2 + 1.111 = 0.01 + 1.111 = 1.121$.
    $ k_4 = f(0 + 0.2, 1 + 0.2 \cdot 1.121) = f(0.2, 1.2242) = 0.2^2 + 1.2242 = 0.04 + 1.2242 = 1.2642 $
    $ y_1 = y_0 + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4) = 1 + \frac{0.2}{6}(1 + 2(1.11) + 2(1.121) + 1.2642) $
    $ y_1 = 1 + \frac{0.2}{6}(1 + 2.22 + 2.242 + 1.2642) = 1 + \frac{0.2}{6}(6.7262) = 1 + 0.224206 \approx 1.2242 $

*   **Step 2 (i=1):** $ x_1 = 0.2, y_1 = 1.2242, h = 0.2 $
    $ k_1 = f(0.2, 1.2242) = 0.2^2 + 1.2242 = 0.04 + 1.2242 = 1.2642 $
    $ k_2 = f(0.2 + 0.2/2, 1.2242 + (0.2/2) \cdot 1.2642) = f(0.3, 1.2242 + 0.1 \cdot 1.2642) = f(0.3, 1.35062) = 0.3^2 + 1.35062 = 0.09 + 1.35062 = 1.44062 $
    $ k_3 = f(0.2 + 0.2/2, 1.2242 + (0.2/2) \cdot 1.44062) = f(0.3, 1.2242 + 0.1 \cdot 1.44062) = f(0.3, 1.36828) = 0.3^2 + 1.36828 = 0.09 + 1.36828 = 1.45828 $
    $ k_4 = f(0.2 + 0.2, 1.2242 + 0.2 \cdot 1.45828) = f(0.4, 1.2242 + 0.291656) = f(0.4, 1.515856) = 0.4^2 + 1.515856 = 0.16 + 1.515856 = 1.675856 $
    $ y_2 = y_1 + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4) = 1.2242 + \frac{0.2}{6}(1.2642 + 2(1.44062) + 2(1.45828) + 1.675856) $
    $ y_2 = 1.2242 + \frac{0.2}{6}(1.2642 + 2.88124 + 2.91656 + 1.675856) = 1.2242 + \frac{0.2}{6}(8.737856) = 1.2242 + 0.29126 \approx 1.51546 $
    So, $ y(0.4) \approx 1.51546 $.

*(Note: The exact solution to $ y' = x^2 + y $ with $ y(0)=1 $ is $ y(x) = 2e^x - x^2 - 2x - 2 $. So $ y(0.4) = 2e^{0.4} - (0.4)^2 - 2(0.4) - 2 \approx 2(1.4918) - 0.16 - 0.8 - 2 \approx 2.9836 - 2.96 = 1.5157 $. The RK4 result is very close.)*

---

**Question 2 (BVP):**
Consider the boundary value problem $ \frac{d^2y}{dx^2} - y = 0 $ with boundary conditions $ y(0) = 0 $ and $ y(2) = 5 $. Use the finite difference method with $ N=4 $ to approximate the solution at the interior points.

**Answer 2:**
Domain $ [0, 2] $, $ N=4 $. $ h = (2-0)/4 = 0.5 $.
Grid points: $ x_0=0, x_1=0.5, x_2=1.0, x_3=1.5, x_4=2.0 $.
Boundary conditions: $ y_0 = 0, y_4 = 5 $.
ODE: $ \frac{d^2y}{dx^2} - y = 0 $. Here $ p(x)=0, q(x)=-1, r(x)=0 $.

The finite difference approximation for the second derivative is $ \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} $.
Substituting into the ODE: $ \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} - y_i = 0 $.
$ y_{i+1} - 2y_i + y_{i-1} - h^2 y_i = 0 $
$ y_{i-1} + (-2 - h^2)y_i + y_{i+1} = 0 $.

With $ h=0.5 $, $ h^2 = 0.25 $.
$ y_{i-1} + (-2 - 0.25)y_i + y_{i+1} = 0 $
$ y_{i-1} - 2.25 y_i + y_{i+1} = 0 $.

We need to apply this for interior points $ i = 1, 2, 3 $.

*   **For i=1:** ($ x_1 = 0.5 $)
    $ y_0 - 2.25 y_1 + y_2 = 0 $
    Since $ y_0 = 0 $: $ 0 - 2.25 y_1 + y_2 = 0 \implies -2.25 y_1 + y_2 = 0 $ (Eq 1)

*   **For i=2:** ($ x_2 = 1.0 $)
    $ y_1 - 2.25 y_2 + y_3 = 0 $ (Eq 2)

*   **For i=3:** ($ x_3 = 1.5 $)
    $ y_2 - 2.25 y_3 + y_4 = 0 $
    Since $ y_4 = 5 $: $ y_2 - 2.25 y_3 + 5 = 0 \implies y_2 - 2.25 y_3 = -5 $ (Eq 3)

Now we solve this system of 3 linear equations for $ y_1, y_2, y_3 $.
From Eq 1: $ y_2 = 2.25 y_1 $.
Substitute into Eq 2: $ y_1 - 2.25 (2.25 y_1) + y_3 = 0 $
$ y_1 - 5.0625 y_1 + y_3 = 0 \implies -4.0625 y_1 + y_3 = 0 \implies y_3 = 4.0625 y_1 $.
Substitute $ y_2 $ and $ y_3 $ into Eq 3:
$ (2.25 y_1) - 2.25 (4.0625 y_1) = -5 $
$ 2.25 y_1 - 9.140625 y_1 = -5 $
$ -6.890625 y_1 = -5 $
$ y_1 = \frac{-5}{-6.890625} \approx 0.7256 $

Now find $ y_2 $ and $ y_3 $:
$ y_2 = 2.25 y_1 = 2.25 \times 0.7256 \approx 1.6326 $
$ y_3 = 4.0625 y_1 = 4.0625 \times 0.7256 \approx 2.9488 $

Approximate solution: $ y(0) = 0 $, $ y(0.5) \approx 0.7256 $, $ y(1.0) \approx 1.6326 $, $ y(1.5) \approx 2.9488 $, $ y(2.0) = 5 $.

*(The exact solution is $ y(x) = A \sinh(x) + B \cosh(x) $. Applying BCs: $ y(0)=0 \implies B=0 $. $ y(2)=5 \implies A \sinh(2) = 5 \implies A = 5/\sinh(2) $. So $ y(x) = \frac{5}{\sinh(2)} \sinh(x) $. $ \sinh(2) \approx 3.62686 $. $ A \approx 1.3789 $. $ y(x) \approx 1.3789 \sinh(x) $.
$ y(0.5) \approx 1.3789 \sinh(0.5) \approx 1.3789 \times 0.5211 \approx 0.7187 $
$ y(1.0) \approx 1.3789 \sinh(1.0) \approx 1.3789 \times 1.1752 \approx 1.6234 $
$ y(1.5) \approx 1.3789 \sinh(1.5) \approx 1.3789 \times 2.1292 \approx 2.9392 $
The FDM results are close to the exact solution.)*

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
