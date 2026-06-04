---
title: "Modified Euler method"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 3: Numerical solution of ordinary differential equations"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646bb"
status: "completed"
scrapedAt: "2026-05-20T18:23:19.536Z"
---
# NUMERICAL TECHNIQUES ENGINEERING: Module 3 - Numerical Solution of Ordinary Differential Equations

## Topic: Modified Euler Method

### 1. Introduction and Motivation

Ordinary Differential Equations (ODEs) are fundamental in modeling various phenomena in engineering and science. Often, analytical solutions to ODEs are not possible, necessitating the use of numerical methods. The Euler method (forward and backward) provides a foundational approach, but its accuracy can be limited, especially for larger step sizes. The **Modified Euler Method**, also known as the **Improved Euler Method** or **Heun's Method**, offers a significant improvement in accuracy over the simple Euler method.

**Key Concept:** The Modified Euler method is a **predictor-corrector** method. It first predicts a value using the simple Euler method and then uses this predicted value to correct the estimate.

**Alignment with Course Outcomes:**
*   **CO4 (Execute numerical procedures to solve ordinary and partial differential equations) (K3):** This topic directly addresses the execution of numerical procedures to solve ODEs.

### 2. The Problem Statement

We consider the initial value problem (IVP) of the form:

$$
\frac{dy}{dx} = f(x, y)
$$

with the initial condition $y(x_0) = y_0$. Our goal is to find the approximate values of $y$ at discrete points $x_0, x_1, x_2, \dots, x_n, \dots$, where $x_{i+1} = x_i + h$, and $h$ is the step size.

### 3. Derivation of the Modified Euler Method

The Modified Euler method is derived by approximating the integral of $f(x, y)$ over an interval $[x_i, x_{i+1}]$ using a more accurate numerical integration technique than the simple rectangular rule used in the forward Euler method.

**Recall: Forward Euler Method**

The forward Euler method approximates the solution at $x_{i+1}$ as:

$$
y_{i+1} = y_i + h f(x_i, y_i)
$$

This method uses the slope at the beginning of the interval.

**Modified Euler Method Steps:**

The Modified Euler method follows a two-step process:

**Step 1: Predictor (using Forward Euler)**

First, we predict an intermediate value of $y$ at $x_{i+1}$, denoted as $y_{i+1}^{(0)}$, using the forward Euler method:

$$
y_{i+1}^{(0)} = y_i + h f(x_i, y_i)
$$

This predicted value $y_{i+1}^{(0)}$ is an approximation of $y(x_{i+1})$.

**Step 2: Corrector (using the average of slopes)**

Now, we use this predicted value to estimate the slope at the end of the interval, $f(x_{i+1}, y_{i+1}^{(0)})$. The Modified Euler method then refines the estimate of $y_{i+1}$ by using the **average of the slope at the beginning of the interval and the predicted slope at the end of the interval**:

$$
y_{i+1} = y_i + \frac{h}{2} [f(x_i, y_i) + f(x_{i+1}, y_{i+1}^{(0)})]
$$

**Summary of the Modified Euler Method Formula:**

Given $y_i$ at $x_i$:

1.  **Predictor:** $y_{i+1}^{(0)} = y_i + h f(x_i, y_i)$
2.  **Corrector:** $y_{i+1} = y_i + \frac{h}{2} [f(x_i, y_i) + f(x_{i+1}, y_{i+1}^{(0)})]$

**Note:** Sometimes the predictor value is directly substituted into the corrector step without the superscript $(0)$, but it's good practice to understand the predictor-corrector nature.

### 4. Accuracy and Order of the Method

The Modified Euler method is a **second-order method**. This means its local truncation error is proportional to $h^3$, and its global truncation error is proportional to $h^2$.

**Truncation Error:**

*   **Local Truncation Error (LTE):** The error introduced in a single step. For the Modified Euler method, $\text{LTE} = O(h^3)$.
*   **Global Truncation Error (GTE):** The accumulated error over all steps. For the Modified Euler method, $\text{GTE} = O(h^2)$.

This is a significant improvement over the forward Euler method, which is a first-order method (LTE $= O(h^2)$, GTE $= O(h)$).

**Reference:**
*   **Chapra & Canale (6th Ed., 2010):** Discusses the development and accuracy of predictor-corrector methods, including the Modified Euler method, highlighting its second-order nature.
*   **Gupta (1995):** Provides a detailed mathematical analysis of the order of accuracy for various numerical methods for ODEs.
*   **Balagurusamy (2017):** Explains the concept of order of accuracy and how it relates to step size reduction.

### 5. Algorithm for Modified Euler Method

1.  **Define the function** $f(x, y)$.
2.  **Specify the initial condition:** $y_0$ at $x_0$.
3.  **Choose a step size** $h$.
4.  **Determine the end point** $x_{final}$.
5.  **Calculate the number of steps** $n = (x_{final} - x_0) / h$.
6.  **Initialize** $x = x_0$, $y = y_0$.
7.  **Iterate from i = 0 to n-1:**
    *   Calculate the slope at the current point: $m_1 = f(x_i, y_i)$.
    *   **Predictor step:** Calculate the intermediate value: $y_{i+1}^{(0)} = y_i + h \cdot m_1$.
    *   Calculate the slope at the predicted next point: $m_2 = f(x_{i+1}, y_{i+1}^{(0)})$.
    *   **Corrector step:** Calculate the improved value: $y_{i+1} = y_i + \frac{h}{2} (m_1 + m_2)$.
    *   Update $x$: $x_{i+1} = x_i + h$.
    *   Update $y$: $y_{i+1}$ becomes the new $y_i$ for the next iteration.
8.  **The values** $(x_{i+1}, y_{i+1})$ **are the approximate solutions.**

### 6. Example: Applying the Modified Euler Method

**Problem:** Solve the ODE $\frac{dy}{dx} = x + y$ with $y(0) = 1$ using the Modified Euler method with a step size of $h = 0.2$. Find $y(0.4)$.

**Solution:**

Here, $f(x, y) = x + y$, $x_0 = 0$, $y_0 = 1$, and $h = 0.2$. We want to find $y(0.4)$.

**Step 1: Calculate $y(0.2)$**

*   $x_0 = 0$, $y_0 = 1$
*   $f(x_0, y_0) = f(0, 1) = 0 + 1 = 1$

*   **Predictor:**
    $y_1^{(0)} = y_0 + h f(x_0, y_0) = 1 + 0.2 \cdot 1 = 1.2$

*   **Corrector:**
    $x_1 = x_0 + h = 0 + 0.2 = 0.2$
    $f(x_1, y_1^{(0)}) = f(0.2, 1.2) = 0.2 + 1.2 = 1.4$
    $y_1 = y_0 + \frac{h}{2} [f(x_0, y_0) + f(x_1, y_1^{(0)})] = 1 + \frac{0.2}{2} [1 + 1.4] = 1 + 0.1 [2.4] = 1 + 0.24 = 1.24$

So, the approximate value of $y(0.2)$ is $1.24$.

**Step 2: Calculate $y(0.4)$**

*   $x_1 = 0.2$, $y_1 = 1.24$
*   $f(x_1, y_1) = f(0.2, 1.24) = 0.2 + 1.24 = 1.44$

*   **Predictor:**
    $y_2^{(0)} = y_1 + h f(x_1, y_1) = 1.24 + 0.2 \cdot 1.44 = 1.24 + 0.288 = 1.528$

*   **Corrector:**
    $x_2 = x_1 + h = 0.2 + 0.2 = 0.4$
    $f(x_2, y_2^{(0)}) = f(0.4, 1.528) = 0.4 + 1.528 = 1.928$
    $y_2 = y_1 + \frac{h}{2} [f(x_1, y_1) + f(x_2, y_2^{(0)})] = 1.24 + \frac{0.2}{2} [1.44 + 1.928] = 1.24 + 0.1 [3.368] = 1.24 + 0.3368 = 1.5768$

So, the approximate value of $y(0.4)$ is $1.5768$.

**Analytical Solution for Comparison:**
The analytical solution to $\frac{dy}{dx} = x + y$ with $y(0) = 1$ is $y(x) = 2e^x - x - 1$.
$y(0.2) = 2e^{0.2} - 0.2 - 1 \approx 2(1.2214) - 1.2 = 2.4428 - 1.2 = 1.2428$
$y(0.4) = 2e^{0.4} - 0.4 - 1 \approx 2(1.4918) - 1.4 = 2.9836 - 1.4 = 1.5836$

**Observation:** The Modified Euler method ($y(0.2)=1.24$, $y(0.4)=1.5768$) is closer to the analytical solution ($y(0.2)=1.2428$, $y(0.4)=1.5836$) than the simple Euler method would be.

### 7. Advantages and Disadvantages

**Advantages:**

*   **Improved Accuracy:** Significantly more accurate than the simple Euler method for the same step size due to its second-order nature.
*   **Relative Simplicity:** While a predictor-corrector method, it is still relatively straightforward to implement compared to higher-order methods like Runge-Kutta.
*   **Good Balance:** Offers a good balance between accuracy and computational effort for many problems.

**Disadvantages:**

*   **Requires Two Function Evaluations per Step:** Unlike the simple Euler method, it requires evaluating $f(x, y)$ twice for each step (once for prediction, once for correction), increasing computational cost.
*   **Still Limited Accuracy for Large Step Sizes:** While better than Euler, its accuracy can still degrade for very large step sizes or stiff ODEs.
*   **Not Self-Starting:** Like most multistep methods, it requires an initial step calculated by a different method (though the first step can be calculated using forward Euler or a more accurate method if needed).

### 8. Comparison with Other Methods

*   **vs. Simple Euler Method:** Modified Euler is more accurate ($O(h^2)$ vs. $O(h)$ global error) but requires more computations per step.
*   **vs. Higher-Order Runge-Kutta Methods (e.g., RK4):** RK4 is generally more accurate ($O(h^4)$ global error) but requires four function evaluations per step. Modified Euler can be a good choice when RK4 is computationally too expensive.
*   **vs. Adams-Bashforth/Adams-Moulton (Multistep Methods):** These are also predictor-corrector methods, but they use previous computed values (not just the current one) to predict and correct. They can achieve higher orders but require starting values from a one-step method.

**Reference:**
*   **Gerald & Wheatly (6th Ed.):** Provides detailed comparisons of different numerical methods for ODEs, discussing their orders, errors, and computational costs.
*   **Jain, Iyengar, & Jain:** Offers in-depth analysis of the theoretical underpinnings and practical performance of various ODE solvers.

### 9. Practice Questions and Exercises

**Question 1:**
Solve the ODE $\frac{dy}{dx} = -2y + e^x$ with $y(0) = 1$ using the Modified Euler method with $h = 0.1$. Compute $y(0.2)$.

**Answer:**
*   $x_0 = 0$, $y_0 = 1$, $h = 0.1$, $f(x, y) = -2y + e^x$

*   **Step 1: Compute $y(0.1)$**
    *   $f(x_0, y_0) = f(0, 1) = -2(1) + e^0 = -2 + 1 = -1$
    *   **Predictor:** $y_1^{(0)} = y_0 + h f(x_0, y_0) = 1 + 0.1(-1) = 1 - 0.1 = 0.9$
    *   $x_1 = 0.1$
    *   $f(x_1, y_1^{(0)}) = f(0.1, 0.9) = -2(0.9) + e^{0.1} = -1.8 + 1.10517 = -0.69483$
    *   **Corrector:** $y_1 = y_0 + \frac{h}{2} [f(x_0, y_0) + f(x_1, y_1^{(0)})] = 1 + \frac{0.1}{2} [-1 + (-0.69483)] = 1 + 0.05 [-1.69483] = 1 - 0.0847415 = 0.9152585$
    So, $y(0.1) \approx 0.9153$

*   **Step 2: Compute $y(0.2)$**
    *   $x_1 = 0.1$, $y_1 = 0.9152585$
    *   $f(x_1, y_1) = f(0.1, 0.9152585) = -2(0.9152585) + e^{0.1} = -1.830517 + 1.10517 = -0.725347$
    *   **Predictor:** $y_2^{(0)} = y_1 + h f(x_1, y_1) = 0.9152585 + 0.1(-0.725347) = 0.9152585 - 0.0725347 = 0.8427238$
    *   $x_2 = 0.2$
    *   $f(x_2, y_2^{(0)}) = f(0.2, 0.8427238) = -2(0.8427238) + e^{0.2} = -1.6854476 + 1.2214028 = -0.4640448$
    *   **Corrector:** $y_2 = y_1 + \frac{h}{2} [f(x_1, y_1) + f(x_2, y_2^{(0)})] = 0.9152585 + \frac{0.1}{2} [-0.725347 + (-0.4640448)] = 0.9152585 + 0.05 [-1.1893918] = 0.9152585 - 0.05946959 = 0.8557889$
    So, $y(0.2) \approx 0.8558$

**Question 2:**
Consider the ODE $\frac{dy}{dx} = y - x^2 + 1$ with $y(0) = 0.5$. Use the Modified Euler method with $h = 0.1$ to estimate $y(0.1)$.

**Answer:**
*   $x_0 = 0$, $y_0 = 0.5$, $h = 0.1$, $f(x, y) = y - x^2 + 1$

*   **Step 1: Compute $y(0.1)$**
    *   $f(x_0, y_0) = f(0, 0.5) = 0.5 - 0^2 + 1 = 1.5$
    *   **Predictor:** $y_1^{(0)} = y_0 + h f(x_0, y_0) = 0.5 + 0.1(1.5) = 0.5 + 0.15 = 0.65$
    *   $x_1 = 0.1$
    *   $f(x_1, y_1^{(0)}) = f(0.1, 0.65) = 0.65 - (0.1)^2 + 1 = 0.65 - 0.01 + 1 = 1.64$
    *   **Corrector:** $y_1 = y_0 + \frac{h}{2} [f(x_0, y_0) + f(x_1, y_1^{(0)})] = 0.5 + \frac{0.1}{2} [1.5 + 1.64] = 0.5 + 0.05 [3.14] = 0.5 + 0.157 = 0.657$
    So, $y(0.1) \approx 0.657$

### 10. Important Points to Remember

*   The Modified Euler method is a **predictor-corrector** method.
*   It is a **second-order method**, meaning its global error is $O(h^2)$.
*   It requires **two function evaluations per step**.
*   The formula involves predicting a value using forward Euler and then using the average of slopes to correct.
*   It's a good compromise between the simplicity/accuracy of the basic Euler method and the higher accuracy/complexity of methods like RK4.
*   **Always double-check your calculations**, especially when dealing with multiple steps and function evaluations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 11. Further Reading and References

*   **Chapra, S. C., & Canale, R. P. (2010).** *Numerical Methods for Engineers* (6th ed.). McGraw-Hill. (Chapter 27: Ordinary Differential Equations)
*   **Gupta, S. K. (1995).** *Numerical Methods for Engineers*. New Age International.
*   **Balagurusamy, E. (2017).** *Numerical methods*. McGraw-Hill Education.
*   **Gerald, C. F., & Wheatly, P. O. (6th Ed.).** *Applied Numerical Analysis*. Wesley.
*   **Jain, M. K., Iyengar, S. R. K., & Jain, R. K.** *Numerical Methods for Scientific and Engineering Computation*. New Age Pvt. Pub.
*   **Conte, S. D., & De Boor, C.** *Elementary Numerical Analysis*. McGraw-Hill.
*   **Krishnamurthy, E. V., & Sen, S. K.** *Applied Numerical Analysis*. East West Publication.
*   **Suli, E., & Mayers, D. (2003).** *An introduction to numerical analysis*. Cambridge University Press.

These resources provide more in-depth mathematical treatments, additional examples, and discussions on the theoretical foundations of the Modified Euler method and other numerical techniques for solving ODEs.