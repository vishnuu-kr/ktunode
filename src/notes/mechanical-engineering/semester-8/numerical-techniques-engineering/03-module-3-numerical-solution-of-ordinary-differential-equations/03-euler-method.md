---
title: "Euler method"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 3: Numerical solution of ordinary differential equations"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646ba"
status: "completed"
scrapedAt: "2026-05-20T18:23:18.894Z"
---
# NUMERICAL TECHNIQUES ENGINEERING - Module 3: Numerical Solution of Ordinary Differential Equations

## Topic: Euler Method

This module focuses on approximating solutions to Ordinary Differential Equations (ODEs) using numerical techniques. We will begin with the foundational Euler method, a simple yet crucial technique for understanding ODE solvers.

---

### 1. Introduction to Ordinary Differential Equations (ODEs)

*   **Definition:** An ODE is an equation that relates an unknown function to its derivatives. It involves only one independent variable.
*   **General Form:** A first-order ODE can be expressed as:
    $$ \frac{dy}{dx} = f(x, y) $$
    where $y$ is the dependent variable, $x$ is the independent variable, and $f(x, y)$ is a known function.
*   **Initial Value Problem (IVP):** To obtain a unique solution to an ODE, we need an initial condition. An IVP consists of:
    *   The ODE: $\frac{dy}{dx} = f(x, y)$
    *   An initial condition: $y(x_0) = y_0$

**Course Outcome Alignment:** This section introduces the fundamental concept of ODEs, which is essential for the application of numerical methods to solve them (CO4). The knowledge level is foundational (K1).

---

### 2. The Euler Method: The Forward Euler Method

The Euler method is the simplest numerical method for solving first-order ODEs. It approximates the solution by assuming that the derivative $f(x, y)$ remains constant over a small interval, effectively using the tangent line at a point to predict the value at the next point.

#### 2.1 The Concept

*   **Graphical Interpretation:** Imagine you have a point $(x_i, y_i)$ on the solution curve. The slope of the solution curve at this point is given by $\frac{dy}{dx}|_{(x_i, y_i)} = f(x_i, y_i)$. The Euler method approximates the solution curve over a small step size $h$ by following this tangent line.
*   **Taylor Series Expansion:** The method can be derived from the Taylor series expansion of $y(x)$ around $x_i$:
    $$ y(x_{i+1}) = y(x_i) + h \frac{dy}{dx}|_{(x_i, y_i)} + \frac{h^2}{2!} \frac{d^2y}{dx^2}|_{(x_i, y_i)} + \dots $$
    The Euler method truncates this series after the first derivative term:
    $$ y(x_{i+1}) \approx y(x_i) + h f(x_i, y_i) $$
    This is the core of the Euler method.

#### 2.2 The Algorithm

Given an initial value problem: $\frac{dy}{dx} = f(x, y)$ with $y(x_0) = y_0$.
We want to find the solution $y(x)$ at various points $x_1, x_2, \dots, x_n$.

1.  **Define the step size:** $h = x_{i+1} - x_i$.
2.  **Iterative Formula:** The solution at the next step, $y_{i+1}$, is approximated using the current solution $y_i$ and the derivative at $(x_i, y_i)$:
    $$ y_{i+1} = y_i + h \cdot f(x_i, y_i) $$
3.  **Update the independent variable:**
    $$ x_{i+1} = x_i + h $$
4.  **Repeat:** Continue this process for the desired number of steps or until the target $x$ value is reached.

#### 2.3 Error Analysis

*   **Truncation Error:** The error introduced at each step due to truncating the Taylor series. For the Euler method, the local truncation error is proportional to $h^2$ (i.e., $O(h^2)$).
*   **Global Truncation Error:** The cumulative error over all steps. For the Euler method, the global truncation error is proportional to $h$ (i.e., $O(h)$). This means that if you halve the step size, the global error is roughly halved.
*   **Limitations:** The Euler method is a first-order method, meaning its accuracy is limited, especially for larger step sizes or when the rate of change of the function is high.

**Textbook Reference:**
*   **Chapra & Canale (6th Ed.):** Chapter 27, "Ordinary Differential Equations". The Euler method is introduced as the most basic method, explaining its derivation from Taylor series and its iterative nature. They emphasize its simplicity and its $O(h)$ global error.
*   **Gupta (1995):** Chapter 14, "Numerical Solution of Ordinary Differential Equations". Gupta likely presents the Euler method with similar explanations regarding its formulation and limitations.
*   **Balagurusamy (2017):** Chapter 11, "Numerical Solution of Ordinary Differential Equations". Balagurusamy will also cover the Euler method, likely providing algorithmic steps and simple examples.

**Course Outcome Alignment:** This section directly addresses the core of solving ODEs numerically (CO4). The understanding of the algorithm and its limitations relates to applying numerical schemes (CO2) and solving differential equations (CO3). The knowledge level is K3.

---

### 3. Example: Solving an ODE using the Euler Method

**Problem:** Solve the following initial value problem using the Euler method with a step size $h=0.1$:
$$ \frac{dy}{dx} = x + y $$
with the initial condition $y(0) = 1$.
Find the solution at $x=0.3$.

**Solution:**

Here, $f(x, y) = x + y$, $x_0 = 0$, and $y_0 = 1$. The step size is $h = 0.1$. We need to find $y(0.3)$.

**Step 1: Calculate for $i=0$ (from $x_0$ to $x_1$)**

*   $x_0 = 0$, $y_0 = 1$
*   $f(x_0, y_0) = f(0, 1) = 0 + 1 = 1$
*   $x_1 = x_0 + h = 0 + 0.1 = 0.1$
*   $y_1 = y_0 + h \cdot f(x_0, y_0) = 1 + 0.1 \cdot (1) = 1 + 0.1 = 1.1$
    So, $y(0.1) \approx 1.1$

**Step 2: Calculate for $i=1$ (from $x_1$ to $x_2$)**

*   $x_1 = 0.1$, $y_1 = 1.1$
*   $f(x_1, y_1) = f(0.1, 1.1) = 0.1 + 1.1 = 1.2$
*   $x_2 = x_1 + h = 0.1 + 0.1 = 0.2$
*   $y_2 = y_1 + h \cdot f(x_1, y_1) = 1.1 + 0.1 \cdot (1.2) = 1.1 + 0.12 = 1.22$
    So, $y(0.2) \approx 1.22$

**Step 3: Calculate for $i=2$ (from $x_2$ to $x_3$)**

*   $x_2 = 0.2$, $y_2 = 1.22$
*   $f(x_2, y_2) = f(0.2, 1.22) = 0.2 + 1.22 = 1.42$
*   $x_3 = x_2 + h = 0.2 + 0.1 = 0.3$
*   $y_3 = y_2 + h \cdot f(x_2, y_2) = 1.22 + 0.1 \cdot (1.42) = 1.22 + 0.142 = 1.362$
    So, $y(0.3) \approx 1.362$

**Result:** The approximate solution at $x=0.3$ using the Euler method with $h=0.1$ is $1.362$.

**(Optional: Analytical Solution for Comparison)**
The analytical solution to $\frac{dy}{dx} = x + y$ with $y(0)=1$ is $y(x) = 2e^x - x - 1$.
$y(0.3) = 2e^{0.3} - 0.3 - 1 \approx 2(1.34986) - 1.3 \approx 2.69972 - 1.3 \approx 1.39972$.
The Euler method result $1.362$ is reasonably close to the analytical solution $1.39972$, demonstrating its approximate nature.

**Course Outcome Alignment:** This example demonstrates the practical application of the Euler method to solve a specific ODE (CO4) and showcases the implementation of a numerical scheme (CO2). The comparison with the analytical solution helps understand the accuracy aspect (CO3). The knowledge level is K3.

---

### 4. Implementation Considerations

*   **Step Size ($h$):**
    *   **Smaller $h$:** Generally leads to higher accuracy but requires more computational effort (more steps).
    *   **Larger $h$:** Leads to lower accuracy and can result in significant errors, potentially causing the solution to diverge from the true solution.
*   **Choosing $h$:** Often determined by a trade-off between accuracy requirements and computational resources. Sometimes, a step size is chosen to reach a specific target $x$ value, or a fixed number of steps are performed.
*   **Algorithm Implementation:** The Euler method is straightforward to implement in programming languages like Python, MATLAB, C++, etc. It typically involves a loop that iterates through the steps.

**Important Point to Remember:** The Euler method is a *first-order* method. This means its accuracy is directly related to the step size $h$. To improve accuracy, you generally need to decrease $h$.

**Reference:**
*   **Gerald & Wheatly (6th Ed.):** Applied Numerical Analysis. This textbook would likely discuss the practical aspects of choosing step sizes and the computational implications of different numerical methods.
*   **Jain, Iyengar & Jain:** Numerical Methods for Scientific and Engineering Computation. These authors would provide detailed analysis of error propagation and stability considerations, which are crucial for practical implementation.

**Course Outcome Alignment:** This section discusses the practical aspects of using numerical methods, tying into implementing schemes (CO2) and solving ODEs (CO4). The knowledge level is K3.

---

### 5. Practice Questions and Exercises

**Question 1:**
Solve the following IVP using the Euler method with $h = 0.2$:
$$ \frac{dy}{dx} = 2x + y $$
with $y(0) = 1$.
Find the approximate value of $y(0.6)$.

**Answer:**
*   $x_0 = 0, y_0 = 1, h = 0.2$
*   **Step 1:** $x_1 = 0.2$
    $f(0, 1) = 2(0) + 1 = 1$
    $y_1 = 1 + 0.2(1) = 1.2$
*   **Step 2:** $x_2 = 0.4$
    $f(0.2, 1.2) = 2(0.2) + 1.2 = 0.4 + 1.2 = 1.6$
    $y_2 = 1.2 + 0.2(1.6) = 1.2 + 0.32 = 1.52$
*   **Step 3:** $x_3 = 0.6$
    $f(0.4, 1.52) = 2(0.4) + 1.52 = 0.8 + 1.52 = 2.32$
    $y_3 = 1.52 + 0.2(2.32) = 1.52 + 0.464 = 1.984$
    So, $y(0.6) \approx 1.984$.

**Question 2:**
Consider the ODE $\frac{dy}{dx} = -y$ with $y(0) = 1$.
(a) Solve this IVP using the Euler method with $h=0.5$ to find $y(1)$.
(b) Find the analytical solution and compare it with the Euler method result at $x=1$.

**Answer:**
(a) $f(x,y) = -y$, $x_0=0, y_0=1, h=0.5$
*   **Step 1:** $x_1 = 0.5$
    $f(0, 1) = -1$
    $y_1 = 1 + 0.5(-1) = 0.5$
*   **Step 2:** $x_2 = 1.0$
    $f(0.5, 0.5) = -0.5$
    $y_2 = 0.5 + 0.5(-0.5) = 0.5 - 0.25 = 0.25$
    So, $y(1) \approx 0.25$.

(b) Analytical solution: $\frac{dy}{y} = -dx \implies \ln|y| = -x + C$.
$y(0)=1 \implies 1 = e^C \implies C=0$. So, $y(x) = e^{-x}$.
$y(1) = e^{-1} \approx 0.36788$.
The Euler method result $0.25$ is significantly different from the analytical result $0.36788$ due to the large step size ($h=0.5$).

**Course Outcome Alignment:** These questions directly test the application of the Euler method algorithm (CO4) and the ability to implement numerical schemes (CO2). The comparison in Question 2 also touches upon understanding accuracy (CO3). The knowledge level is K3.

---

### 6. Important Points to Remember

*   The Euler method is a *first-order* numerical method for solving ODEs.
*   Its core formula is $y_{i+1} = y_i + h \cdot f(x_i, y_i)$.
*   The global error of the Euler method is proportional to the step size $h$ (i.e., $O(h)$).
*   To improve accuracy, one must decrease the step size $h$.
*   The Euler method is simple to understand and implement but can be inaccurate for larger step sizes or complex ODEs.
*   It serves as a fundamental building block for understanding more advanced ODE solvers.

---

### 7. Linking to Course Outcomes

*   **CO1: Apply numerical methods to solve linear and nonlinear equations:** While not directly solving algebraic equations, the Euler method's iterative nature and reliance on function evaluation are building blocks for more complex numerical methods that do. Understanding $f(x,y)$ is key, which might be derived from linear or nonlinear algebraic relationships.
*   **CO2: Implement numerical schemes to fit data:** The Euler method is a prime example of a numerical scheme. Its implementation involves iterative steps, parameter management (like $h$), and calculation based on a defined algorithm.
*   **CO3: Solve differentiation and integration numerically:** The Euler method is derived from approximations of derivatives (tangent line approximation) and indirectly relates to numerical integration (e.g., as a rectangle rule in integral form). Understanding its error is tied to the concepts of numerical approximation of calculus operations.
*   **CO4: Execute numerical procedures to solve ordinary and partial differential equations:** This is the primary outcome addressed. The Euler method is the first step in learning how to numerically solve ODEs by following a defined procedure over discrete steps.

---

### 8. Conclusion

The Euler method is a foundational technique in the numerical solution of ODEs. While simple, its understanding is crucial for grasping the principles behind more sophisticated methods. Its iterative nature, dependency on step size for accuracy, and straightforward implementation make it an excellent starting point for anyone learning numerical techniques for differential equations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
