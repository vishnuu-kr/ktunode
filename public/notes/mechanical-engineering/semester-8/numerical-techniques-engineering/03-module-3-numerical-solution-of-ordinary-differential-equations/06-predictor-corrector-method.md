---
title: "Predictor corrector method"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 3: Numerical solution of ordinary differential equations"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646bd"
status: "completed"
scrapedAt: "2026-05-20T18:23:20.936Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 3: Numerical Solution of Ordinary Differential Equations

### Topic: Predictor-Corrector Methods

This module explores numerical techniques for approximating solutions to Ordinary Differential Equations (ODEs). Predictor-Corrector methods are a class of techniques that improve the accuracy of one-step methods by using a predictor step to estimate the solution at the next time step, followed by a corrector step to refine this estimate.

---

### Learning Outcomes Covered:

*   **Understanding the concept of predictor-corrector methods:** How they work and why they are used.
*   **Derivation and application of common predictor-corrector methods:** Such as the Heun's method, Midpoint method, and Adams-Bashforth-Moulton methods.
*   **Comparison of predictor-corrector methods with single-step methods:** Advantages and disadvantages.
*   **Analysis of stability and accuracy of predictor-corrector methods.**

---

### Key Concepts and Definitions:

*   **Ordinary Differential Equation (ODE):** An equation involving an unknown function of one independent variable and its derivatives. The general form is $y' = f(x, y)$.
*   **Initial Value Problem (IVP):** An ODE where the value of the unknown function is known at a specific point, e.g., $y(x_0) = y_0$.
*   **Numerical Solution:** Approximating the solution to an ODE at discrete points in the domain.
*   **Step Size (h):** The increment in the independent variable between successive calculated points. $x_{i+1} = x_i + h$.
*   **Local Truncation Error:** The error introduced in a single step of the numerical method.
*   **Global Truncation Error:** The accumulation of local truncation errors over the entire solution interval.
*   **One-Step Methods:** Methods that use only information from the previous point ($x_i, y_i$) to estimate the solution at the next point ($x_{i+1}, y_{i+1}$). Examples include Euler's method, improved Euler's method, and Runge-Kutta methods.
*   **Multistep Methods:** Methods that use information from several previous points to estimate the solution at the next point.
*   **Predictor-Corrector Methods:** A class of multistep methods that employ a two-step process:
    *   **Predictor Step:** An initial estimate of $y_{i+1}$ is computed using a suitable method (often an open-formula multistep method like Adams-Bashforth).
    *   **Corrector Step:** The initial prediction is then used in a closed-formula method (like Adams-Moulton) to refine the estimate of $y_{i+1}$.

---

### Why Predictor-Corrector Methods?

Predictor-corrector methods are often used to achieve higher accuracy than one-step methods of comparable computational effort. By using a predictor to get a rough estimate and then a corrector to refine it, they can achieve higher-order accuracy.

---

### Common Predictor-Corrector Methods:

#### 1. Heun's Method (Improved Euler's Method)

Heun's method is a second-order predictor-corrector method.

**a) Predictor (Euler's Method):**
Predict $y_{i+1}$ using Euler's forward method:
$y_{i+1}^* = y_i + h f(x_i, y_i)$

**b) Corrector (Trapezoidal Rule):**
Use the predicted value $y_{i+1}^*$ in the trapezoidal rule to correct the estimate:
$y_{i+1} = y_i + \frac{h}{2} [f(x_i, y_i) + f(x_{i+1}, y_{i+1}^*)]$

*   **Source Reference:** Chapra & Canale (6th Ed., Chapter 26.3), Gupta (Chapter 10.3)

**Example:**
Solve the ODE $y' = x + y$ with $y(0) = 1$ from $x=0$ to $x=0.4$ using Heun's method with $h=0.2$.

**Step 1: Calculate $y_1$ (from $x_0=0, y_0=1$ to $x_1=0.2$)**
*   **Predictor:**
    $y_1^* = y_0 + h f(x_0, y_0)$
    $y_1^* = 1 + 0.2 (0 + 1) = 1 + 0.2(1) = 1.2$
*   **Corrector:**
    $y_1 = y_0 + \frac{h}{2} [f(x_0, y_0) + f(x_1, y_1^*)]$
    $y_1 = 1 + \frac{0.2}{2} [ (0+1) + (0.2 + 1.2) ]$
    $y_1 = 1 + 0.1 [ 1 + 1.4 ] = 1 + 0.1 [2.4] = 1 + 0.24 = 1.24$

**Step 2: Calculate $y_2$ (from $x_1=0.2, y_1=1.24$ to $x_2=0.4$)**
*   **Predictor:**
    $y_2^* = y_1 + h f(x_1, y_1)$
    $y_2^* = 1.24 + 0.2 (0.2 + 1.24) = 1.24 + 0.2 (1.44) = 1.24 + 0.288 = 1.528$
*   **Corrector:**
    $y_2 = y_1 + \frac{h}{2} [f(x_1, y_1) + f(x_2, y_2^*)]$
    $y_2 = 1.24 + \frac{0.2}{2} [ (0.2 + 1.24) + (0.4 + 1.528) ]$
    $y_2 = 1.24 + 0.1 [ 1.44 + 1.928 ] = 1.24 + 0.1 [3.368] = 1.24 + 0.3368 = 1.5768$

---

#### 2. Midpoint Method (Classical Fourth-Order Runge-Kutta variant)

While not typically classified as a predictor-corrector *method* in the same vein as Adams methods, the Midpoint Method (or sometimes called the Modified Euler method) can be seen as a simple predictor-corrector approach. It's a second-order method.

**a) Predictor (Euler's method on the midpoint):**
Estimate the slope at the midpoint of the interval $[x_i, x_{i+1}]$ using Euler's method.
First, predict $y$ at the midpoint: $y_{i+1/2}^* = y_i + \frac{h}{2} f(x_i, y_i)$
Then, estimate the slope at the midpoint: $f_{mid} = f(x_i + \frac{h}{2}, y_{i+1/2}^*)$

**b) Corrector (Euler's method using midpoint slope):**
Use the estimated midpoint slope to advance from $x_i$ to $x_{i+1}$:
$y_{i+1} = y_i + h f_{mid}$
$y_{i+1} = y_i + h f(x_i + \frac{h}{2}, y_i + \frac{h}{2} f(x_i, y_i))$

*   **Source Reference:** Balagurusamy (Chapter 7.5, although he calls it Modified Euler method)

**Example:**
Solve $y' = y - x^2 + 1$ with $y(0) = 0.5$ from $x=0$ to $x=0.2$ using the Midpoint Method with $h=0.2$.

**Step 1: Calculate $y_1$ (from $x_0=0, y_0=0.5$ to $x_1=0.2$)**
*   **Predictor (for midpoint):**
    $y_{0.1}^* = y_0 + \frac{h}{2} f(x_0, y_0)$
    $y_{0.1}^* = 0.5 + \frac{0.2}{2} (0.5 - 0^2 + 1) = 0.5 + 0.1 (1.5) = 0.5 + 0.15 = 0.65$
*   **Corrector:**
    $y_1 = y_0 + h f(x_0 + \frac{h}{2}, y_{0.1}^*)$
    $y_1 = 0.5 + 0.2 ( (0.5 + \frac{0.2}{2}) + 0.65 - (0.5 + \frac{0.2}{2})^2 + 1 )$
    $y_1 = 0.5 + 0.2 ( 0.6 + 0.65 - (0.6)^2 + 1 )$
    $y_1 = 0.5 + 0.2 ( 0.6 + 0.65 - 0.36 + 1 )$
    $y_1 = 0.5 + 0.2 ( 1.89 ) = 0.5 + 0.378 = 0.878$

---

#### 3. Adams-Bashforth-Moulton Methods

These are popular explicit-implicit linear multistep methods. They use past values of $f(x, y)$ to predict and correct the solution.

*   **General Form:**
    *   **Predictor (Adams-Bashforth - open formula):**
        $y_{i+1}^* = y_i + h \sum_{j=0}^{k-1} \beta_j^* \nabla^j f_i$
    *   **Corrector (Adams-Moulton - closed formula):**
        $y_{i+1} = y_i + h \sum_{j=0}^{k} \beta_j \nabla^j f_{i+1}^*$

    where $\nabla$ is the backward difference operator, and $\beta_j, \beta_j^*$ are coefficients.

*   **Source Reference:** Chapra & Canale (Chapter 26.4), Jain, Iyengar & Jain (Chapter 6.3)

**a) Adams-Bashforth 2-Step Predictor:**
Requires $y_i$ and $y_{i-1}$ (and their derivatives $f_i$ and $f_{i-1}$).
$y_{i+1}^* = y_i + h \left( \frac{3}{2} f_i - \frac{1}{2} f_{i-1} \right)$

**b) Adams-Moulton 2-Step Corrector:**
Uses the predicted $y_{i+1}^*$ to calculate $f_{i+1}^* = f(x_{i+1}, y_{i+1}^*)$.
$y_{i+1} = y_i + h \left( \frac{5}{12} f_{i+1}^* + \frac{8}{12} f_i - \frac{1}{12} f_{i-1} \right)$

**Initial Values:**
Adams-Bashforth-Moulton methods require starting values. Since they are multistep methods, they need a certain number of initial values to begin. These are usually obtained using a one-step method like Runge-Kutta. For a 2-step method, we need $(x_0, y_0)$ and $(x_1, y_1)$.

**Example:**
Solve $y' = y - x^2 + 1$ with $y(0) = 0.5$ from $x=0$ to $x=0.4$ using the Adams-Bashforth-Moulton 2-step method with $h=0.2$.
We'll assume we have already computed $y_1=0.878$ using the Midpoint method from the previous example.

**Given:**
*   $(x_0, y_0) = (0, 0.5)$
*   $(x_1, y_1) = (0.2, 0.878)$

**Calculate $f_0$ and $f_1$:**
*   $f_0 = f(x_0, y_0) = 0.5 - 0^2 + 1 = 1.5$
*   $f_1 = f(x_1, y_1) = 0.878 - (0.2)^2 + 1 = 0.878 - 0.04 + 1 = 1.838$

**Step 1: Calculate $y_2$ (from $x_1=0.2, y_1=0.878$ to $x_2=0.4$)**
*   **Predictor (Adams-Bashforth 2-step):**
    $y_2^* = y_1 + h \left( \frac{3}{2} f_1 - \frac{1}{2} f_0 \right)$
    $y_2^* = 0.878 + 0.2 \left( \frac{3}{2} (1.838) - \frac{1}{2} (1.5) \right)$
    $y_2^* = 0.878 + 0.2 \left( 2.757 - 0.75 \right)$
    $y_2^* = 0.878 + 0.2 \left( 2.007 \right) = 0.878 + 0.4014 = 1.2794$

*   **Calculate $f_2^*$:**
    $f_2^* = f(x_2, y_2^*) = f(0.4, 1.2794)$
    $f_2^* = 1.2794 - (0.4)^2 + 1 = 1.2794 - 0.16 + 1 = 2.1194$

*   **Corrector (Adams-Moulton 2-step):**
    $y_2 = y_1 + h \left( \frac{5}{12} f_2^* + \frac{8}{12} f_1 - \frac{1}{12} f_0 \right)$
    $y_2 = 0.878 + 0.2 \left( \frac{5}{12} (2.1194) + \frac{8}{12} (1.838) - \frac{1}{12} (1.5) \right)$
    $y_2 = 0.878 + 0.2 \left( 0.8831 + 1.2253 - 0.125 \right)$
    $y_2 = 0.878 + 0.2 \left( 1.9834 \right) = 0.878 + 0.39668 = 1.27468$

---

### Iterative Correction

For higher accuracy, the corrector step can be applied iteratively. The output of the corrector ($y_{i+1}$) is used as the new input for the predictor, and this process is repeated until the desired convergence is achieved.

$y_{i+1}^{(k+1)} = y_i + h \left( \frac{5}{12} f(x_{i+1}, y_{i+1}^{(k)}) + \frac{8}{12} f_i - \frac{1}{12} f_{i-1} \right)$

The iteration starts with $y_{i+1}^{(0)} = y_{i+1}^*$.

---

### Advantages of Predictor-Corrector Methods:

*   **Higher Accuracy:** Can achieve higher order accuracy than simple one-step methods like Euler's for the same computational effort per step.
*   **Efficiency:** When combined with iterative correction, they can be more efficient than higher-order single-step methods (like RK4) for achieving a target accuracy.
*   **Error Estimation:** The difference between the predicted and corrected values can be used to estimate the local truncation error, allowing for adaptive step-size control.

---

### Disadvantages of Predictor-Corrector Methods:

*   **Need for Starting Values:** Require initial values from a one-step method, adding complexity to the implementation.
*   **Complexity:** More complex to implement than simple one-step methods.
*   **Stability:** Stability properties can be more complex to analyze than single-step methods.

---

### Stability and Accuracy:

*   **Order of Accuracy:** The order of Adams-Bashforth-Moulton methods depends on the number of terms used. The 2-step predictor-corrector pair has an order of 2. Higher-order versions exist.
*   **Stability:** Adams-Bashforth methods are generally explicit and can have limitations on step size for stability. Adams-Moulton methods are implicit and tend to have better stability. The predictor-corrector combination inherits the stability characteristics of both, with the implicit corrector often dominating.

---

### Important Points to Remember:

*   **Predictor-Corrector Principle:** Predict the value, then use that prediction to correct it.
*   **Starting Values are Crucial:** Multistep methods, including predictor-corrector, need initial values generated by a single-step method.
*   **Adams-Bashforth (Predictor):** Explicit formula, uses past $f$ values.
*   **Adams-Moulton (Corrector):** Implicit formula, uses the predicted $f$ value at the next step.
*   **Iterative Correction:** Can be used to improve accuracy.
*   **Error Estimation:** The difference between predicted and corrected values provides an error estimate.

---

### Practice Questions/Exercises:

1.  **Heun's Method:** Solve the ODE $y' = x - y$ with $y(0) = 2$ from $x=0$ to $x=0.4$ using Heun's method with a step size $h=0.2$. Compare your results with the exact solution $y(x) = x - 1 + 3e^{-x}$.
    *   **Answer:**
        *   $y_1 \approx 1.64$
        *   $y_2 \approx 1.35$
        *   Exact $y(0.2) \approx 1.6703$, Exact $y(0.4) \approx 1.3878$

2.  **Adams-Bashforth-Moulton:** Solve the ODE $y' = x + y$ with $y(0) = 1$ from $x=0$ to $x=0.4$ using the 2-step Adams-Bashforth-Moulton method with $h=0.2$. You will need to use a one-step method (e.g., Euler or Midpoint) to find the first step $y_1$. Let's use the result from the example: $y_1 = 1.24$ (using Heun's method from the first example).
    *   **Answer:**
        *   $f_0 = f(0, 1) = 1$
        *   $f_1 = f(0.2, 1.24) = 0.2 + 1.24 = 1.44$
        *   Predictor ($y_2^*$) = $1.24 + 0.2 (\frac{3}{2}(1.44) - \frac{1}{2}(1)) = 1.24 + 0.2 (2.16 - 0.5) = 1.24 + 0.2(1.66) = 1.24 + 0.332 = 1.572$
        *   $f_2^* = f(0.4, 1.572) = 0.4 + 1.572 = 1.972$
        *   Corrector ($y_2$) = $1.24 + 0.2 (\frac{5}{12}(1.972) + \frac{8}{12}(1.44) - \frac{1}{12}(1))$
        *   $y_2 = 1.24 + 0.2 (0.8217 + 0.96 - 0.0833) = 1.24 + 0.2 (1.6984) = 1.24 + 0.33968 \approx 1.5797$

3.  **Error Estimation:** For the Adams-Bashforth-Moulton calculation in question 2, what is the estimated local error for $y_2$?
    *   **Answer:**
        *   Error $\approx \frac{C h^3}{24} (f_{i+1} - f_{i+1}^*)$. For ABM2, the error in the corrector is approximately $\frac{14}{12} h f_2 - \frac{14}{12} h f_2^* = \frac{14}{12} h (f_2 - f_2^*)$.
        *   However, a more common approximation for the error of the predictor-corrector method (for ABM2) is $|y_{i+1} - y_{i+1}^*| \times \frac{h}{24}$.
        *   $|y_2 - y_2^*| = |1.5797 - 1.572| = 0.0077$
        *   Estimated Error $\approx \frac{14}{720} h^3 f'''(\xi)$ (based on error formula for ABM2)
        *   A simpler approach is to use the difference between predictor and corrector as an estimate: $y_2 - y_2^* \approx 1.5797 - 1.572 = 0.0077$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### Textbooks and Reference Books Referenced:

*   **Numerical Methods for Engineers by Steven C Chapra, Reymond P Canale (Mc Graw Hill, 6th Edition, 2010):** Provides a clear introduction to predictor-corrector methods, particularly Adams-Bashforth-Moulton, and their applications.
*   **Numerical Methods for Engineers by Gupta S.K. (New Age International, 1995):** Covers similar concepts, likely with a slightly different algorithmic presentation.
*   **Numerical methods by E Balagurusamy (Mc Graw Hill Education, 2017):** Offers good explanations, particularly for simpler predictor-corrector schemes like the modified Euler (Midpoint) method.
*   **Numerical Methods for Scientific and Engineering Computation by Jain, M. K., Iyengar, S. R. K. and Jain, R. K.:** A comprehensive reference for multistep and predictor-corrector methods, including detailed derivations and error analysis.
*   **Applied Numerical Analysis by Gerald, C. F. and Wheatly P O (Wesley, 6th Edition):** A well-regarded text that provides theoretical underpinnings and practical examples.
*   **Elementary Numerical Analysis by Conte, S. D. and De Boor, C.:** Offers a rigorous approach to numerical methods, including ODE solvers.

---

### Alignment with Course Outcomes:

*   **CO1 (Apply numerical methods to solve linear and nonlinear equations):** While not directly solving algebraic equations, predictor-corrector methods involve evaluating $f(x, y)$ which can be linear or nonlinear. The iterative correction process itself can be seen as a form of iterative root-finding applied to finding $y_{i+1}$. (K3)
*   **CO2 (Implement numerical schemes to fit data):** Not directly applicable.
*   **CO3 (Solve differentiation and integration numerically):** The corrector step in predictor-corrector methods often relies on numerical integration formulas (like the trapezoidal rule for Heun's, or specific quadrature rules for Adams-Moulton). (K3)
*   **CO4 (Execute numerical procedures to solve ordinary and partial differential equations):** This is the core outcome addressed by this module. Predictor-corrector methods are a direct application of numerical procedures to solve ODEs. (K3)