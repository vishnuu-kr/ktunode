---
title: "Higher order equations of initial value type by Runge-Kutta method."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 3: Solution of first"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b45"
status: "completed"
scrapedAt: "2026-05-20T18:46:51.085Z"
---
# NUMERICAL METHODS FOR ENGINEERS - Module 3: Solution of First Order Ordinary Differential Equations

## Topic: Higher Order Equations of Initial Value Type by Runge-Kutta Method

---

### **Introduction**

This module focuses on solving initial value problems (IVPs) for ordinary differential equations (ODEs). While simple methods like Euler's method exist, they often suffer from low accuracy. The Runge-Kutta (RK) methods are a family of powerful and widely used techniques that offer significantly improved accuracy by incorporating intermediate derivative evaluations within a single step. This topic specifically deals with applying RK methods to higher-order ODEs, which are first converted into a system of first-order ODEs.

---

### **Learning Outcomes**

By the end of this topic, you will be able to:

1.  **Understand the need for higher-order numerical methods for ODEs.**
2.  **Convert a higher-order ODE into a system of first-order ODEs.**
3.  **Explain the general concept and structure of Runge-Kutta methods.**
4.  **Derive and apply the standard fourth-order Runge-Kutta (RK4) method.**
5.  **Apply the RK4 method to solve higher-order ODEs (after conversion to a system).**
6.  **Discuss the advantages and limitations of the Runge-Kutta methods.**

---

### **1. The Need for Higher-Order Numerical Methods for ODEs**

*   **Accuracy Limitations of Simpler Methods:** Methods like Euler's method (forward or backward) are first-order accurate. This means the local error (error per step) is proportional to $h^2$ and the global error (total error over the interval) is proportional to $h$, where $h$ is the step size. For accurate solutions, very small step sizes are required, leading to computationally expensive calculations.
*   **Convergence:** Higher-order methods achieve better accuracy with larger step sizes, leading to more efficient computations and faster convergence to the true solution.
*   **Complex Systems:** Many real-world engineering problems are described by higher-order ODEs or systems of ODEs. These systems are often too complex or do not have analytical solutions, necessitating numerical approaches.

---

### **2. Converting Higher-Order ODEs into a System of First-Order ODEs**

*   **General Idea:** A $n$-th order ODE can be transformed into a system of $n$ first-order ODEs. This is achieved by introducing new variables representing the derivatives of the solution.
*   **Process:**
    Consider a general $n$-th order ODE:
    $$y^{(n)} = f(x, y, y', y'', \dots, y^{(n-1)})$$
    with initial conditions:
    $$y(x_0) = y_0, \quad y'(x_0) = y'_0, \quad y''(x_0) = y''_0, \quad \dots, \quad y^{(n-1)}(x_0) = y^{(n-1)}_0$$

    Introduce $n$ new variables:
    $$z_1 = y$$
    $$z_2 = y'$$
    $$z_3 = y''$$
    $$\vdots$$
    $$z_n = y^{(n-1)}$$

    Now, we can express the derivatives of these new variables in terms of the variables themselves:
    $$z'_1 = y' = z_2$$
    $$z'_2 = y'' = z_3$$
    $$z'_3 = y''' = z_4$$
    $$\vdots$$
    $$z'_{n-1} = y^{(n-1)} = z_n$$
    $$z'_n = y^{(n)} = f(x, z_1, z_2, z_3, \dots, z_n)$$

    This results in a system of $n$ first-order ODEs:
    $$\mathbf{z}'(x) = \mathbf{f}(x, \mathbf{z})$$
    where $\mathbf{z} = [z_1, z_2, \dots, z_n]^T$ and $\mathbf{f}(x, \mathbf{z}) = [z_2, z_3, \dots, z_n, f(x, z_1, \dots, z_n)]^T$.

    The initial conditions are also transformed:
    $$\mathbf{z}(x_0) = [y_0, y'_0, y''_0, \dots, y^{(n-1)}_0]^T$$

*   **Example: Second-Order ODE**
    Consider the second-order ODE:
    $$y'' + py' + qy = r(x)$$
    with initial conditions $y(x_0) = y_0$ and $y'(x_0) = y'_0$.

    Let $z_1 = y$ and $z_2 = y'$.
    Then, $z'_1 = y' = z_2$.
    And $z'_2 = y'' = r(x) - py' - qy = r(x) - pz_2 - qz_1$.

    The system of first-order ODEs is:
    $$z'_1 = z_2$$
    $$z'_2 = r(x) - pz_2 - qz_1$$
    with initial conditions $z_1(x_0) = y_0$ and $z_2(x_0) = y'_0$.

---

### **3. The General Concept and Structure of Runge-Kutta Methods**

*   **Core Idea:** Runge-Kutta methods approximate the solution of an ODE by evaluating the derivative (slope) at several points within a single step and taking a weighted average of these slopes. This makes them more accurate than methods that only use the slope at the beginning of the interval.
*   **General Form for a System of First-Order ODEs:**
    For a system $\mathbf{z}'(x) = \mathbf{f}(x, \mathbf{z})$, and a step size $h$, the update from $x_k$ to $x_{k+1} = x_k + h$ is given by:
    $$\mathbf{z}_{k+1} = \mathbf{z}_k + \Delta \mathbf{z}$$
    where $\Delta \mathbf{z}$ is an increment calculated using a weighted sum of slope evaluations.

    The general $s$-stage RK method is defined by coefficients $a_{ij}$, $b_i$, and $c_i$ in the Butcher tableau:

    $$
    \begin{array}{c|cccc}
    c_1 & a_{11} & a_{12} & \dots & a_{1s} \\
    c_2 & a_{21} & a_{22} & \dots & a_{2s} \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    c_s & a_{s1} & a_{s2} & \dots & a_{ss} \\
    \hline
    & b_1 & b_2 & \dots & b_s \\
    \end{array}
    $$

    The intermediate slopes $k_i$ are calculated as:
    $$\mathbf{k}_1 = \mathbf{f}(x_k, \mathbf{z}_k)$$
    $$\mathbf{k}_2 = \mathbf{f}(x_k + c_2 h, \mathbf{z}_k + a_{21} h \mathbf{k}_1)$$
    $$\mathbf{k}_3 = \mathbf{f}(x_k + c_3 h, \mathbf{z}_k + a_{31} h \mathbf{k}_1 + a_{32} h \mathbf{k}_2)$$
    $$\vdots$$
    $$\mathbf{k}_s = \mathbf{f}(x_k + c_s h, \mathbf{z}_k + a_{s1} h \mathbf{k}_1 + a_{s2} h \mathbf{k}_2 + \dots + a_{s,s-1} h \mathbf{k}_{s-1})$$

    And the solution is updated as:
    $$\mathbf{z}_{k+1} = \mathbf{z}_k + h \sum_{i=1}^s b_i \mathbf{k}_i$$

*   **Order of Accuracy:** The order of an RK method refers to the power of $h$ in the leading term of the local truncation error. A $p$-th order RK method has a local truncation error of $O(h^{p+1})$ and a global truncation error of $O(h^p)$.

---

### **4. The Standard Fourth-Order Runge-Kutta (RK4) Method**

The RK4 method is a popular and robust 4th-order method. It is widely used in engineering and scientific computations.

*   **Butcher Tableau for RK4:**
    $$
    \begin{array}{c|cccc}
    0 & 0 & 0 & 0 & 0 \\
    1/2 & 1/2 & 0 & 0 & 0 \\
    1/2 & 0 & 1/2 & 0 & 0 \\
    1 & 0 & 0 & 1 & 0 \\
    \hline
    & 1/6 & 1/3 & 1/3 & 1/6 \\
    \end{array}
    $$

*   **Formulas for a Single First-Order ODE ($y' = f(x, y)$):**
    Given $y_k$ at $x_k$, we want to find $y_{k+1}$ at $x_{k+1} = x_k + h$.

    1.  **Calculate $k_1$ (slope at the beginning of the interval):**
        $$k_1 = f(x_k, y_k)$$

    2.  **Calculate $k_2$ (slope at the midpoint, using $k_1$ to estimate $y$):**
        $$k_2 = f\left(x_k + \frac{h}{2}, y_k + \frac{h}{2} k_1\right)$$

    3.  **Calculate $k_3$ (slope at the midpoint, using $k_2$ to estimate $y$):**
        $$k_3 = f\left(x_k + \frac{h}{2}, y_k + \frac{h}{2} k_2\right)$$

    4.  **Calculate $k_4$ (slope at the end of the interval, using $k_3$ to estimate $y$):**
        $$k_4 = f(x_k + h, y_k + h k_3)$$

    5.  **Update the solution:**
        $$y_{k+1} = y_k + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$

*   **Formulas for a System of First-Order ODEs ($\mathbf{z}' = \mathbf{f}(x, \mathbf{z})$):**
    Given $\mathbf{z}_k$ at $x_k$, we want to find $\mathbf{z}_{k+1}$ at $x_{k+1} = x_k + h$.

    1.  **Calculate $\mathbf{k}_1$:**
        $$\mathbf{k}_1 = \mathbf{f}(x_k, \mathbf{z}_k)$$

    2.  **Calculate $\mathbf{k}_2$:**
        $$\mathbf{k}_2 = \mathbf{f}\left(x_k + \frac{h}{2}, \mathbf{z}_k + \frac{h}{2} \mathbf{k}_1\right)$$

    3.  **Calculate $\mathbf{k}_3$:**
        $$\mathbf{k}_3 = \mathbf{f}\left(x_k + \frac{h}{2}, \mathbf{z}_k + \frac{h}{2} \mathbf{k}_2\right)$$

    4.  **Calculate $\mathbf{k}_4$:**
        $$\mathbf{k}_4 = \mathbf{f}(x_k + h, \mathbf{z}_k + h \mathbf{k}_3)$$

    5.  **Update the solution:**
        $$\mathbf{z}_{k+1} = \mathbf{z}_k + \frac{h}{6}(\mathbf{k}_1 + 2\mathbf{k}_2 + 2\mathbf{k}_3 + \mathbf{k}_4)$$

---

### **5. Applying the RK4 Method to Higher-Order ODEs**

The process involves two main steps:

1.  **Convert the higher-order ODE into a system of first-order ODEs.**
2.  **Apply the RK4 method to the resulting system.**

*   **Example: Solve the second-order ODE $y'' = -y$ with initial conditions $y(0) = 1, y'(0) = 0$. Find $y(0.2)$ using RK4 with $h=0.2$.**

    **Step 1: Convert to a system of first-order ODEs.**
    Let $z_1 = y$ and $z_2 = y'$.
    Then $z'_1 = y' = z_2$.
    And $z'_2 = y'' = -y = -z_1$.

    The system is:
    $$z'_1 = z_2$$
    $$z'_2 = -z_1$$
    with initial conditions $z_1(0) = 1$ and $z_2(0) = 0$.
    We are looking for $z_1(0.2)$, which corresponds to $y(0.2)$.

    The function $\mathbf{f}(x, \mathbf{z})$ is:
    $$\mathbf{f}(x, \mathbf{z}) = \begin{bmatrix} z_2 \\ -z_1 \end{bmatrix}$$
    And $\mathbf{z} = \begin{bmatrix} z_1 \\ z_2 \end{bmatrix}$.

    **Step 2: Apply the RK4 method.**
    We start at $x_0 = 0$, $\mathbf{z}_0 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$. We want to find $\mathbf{z}_1$ at $x_1 = 0.2$, with $h=0.2$.

    *   **Calculate $\mathbf{k}_1$:**
        $$\mathbf{k}_1 = \mathbf{f}(x_0, \mathbf{z}_0) = \mathbf{f}(0, \begin{bmatrix} 1 \\ 0 \end{bmatrix}) = \begin{bmatrix} 0 \\ -1 \end{bmatrix}$$

    *   **Calculate $\mathbf{k}_2$:**
        $$x_0 + \frac{h}{2} = 0 + \frac{0.2}{2} = 0.1$$
        $$\mathbf{z}_0 + \frac{h}{2} \mathbf{k}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \frac{0.2}{2} \begin{bmatrix} 0 \\ -1 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 0.1 \begin{bmatrix} 0 \\ -1 \end{bmatrix} = \begin{bmatrix} 1 \\ -0.1 \end{bmatrix}$$
        $$\mathbf{k}_2 = \mathbf{f}(0.1, \begin{bmatrix} 1 \\ -0.1 \end{bmatrix}) = \begin{bmatrix} -0.1 \\ -1 \end{bmatrix}$$

    *   **Calculate $\mathbf{k}_3$:**
        $$x_0 + \frac{h}{2} = 0.1$$
        $$\mathbf{z}_0 + \frac{h}{2} \mathbf{k}_2 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \frac{0.2}{2} \begin{bmatrix} -0.1 \\ -1 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 0.1 \begin{bmatrix} -0.1 \\ -1 \end{bmatrix} = \begin{bmatrix} 1 - 0.01 \\ -0.1 \end{bmatrix} = \begin{bmatrix} 0.99 \\ -0.1 \end{bmatrix}$$
        $$\mathbf{k}_3 = \mathbf{f}(0.1, \begin{bmatrix} 0.99 \\ -0.1 \end{bmatrix}) = \begin{bmatrix} -0.1 \\ -0.99 \end{bmatrix}$$

    *   **Calculate $\mathbf{k}_4$:**
        $$x_0 + h = 0 + 0.2 = 0.2$$
        $$\mathbf{z}_0 + h \mathbf{k}_3 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 0.2 \begin{bmatrix} -0.1 \\ -0.99 \end{bmatrix} = \begin{bmatrix} 1 - 0.02 \\ -0.198 \end{bmatrix} = \begin{bmatrix} 0.98 \\ -0.198 \end{bmatrix}$$
        $$\mathbf{k}_4 = \mathbf{f}(0.2, \begin{bmatrix} 0.98 \\ -0.198 \end{bmatrix}) = \begin{bmatrix} -0.198 \\ -0.98 \end{bmatrix}$$

    *   **Update the solution:**
        $$\mathbf{z}_1 = \mathbf{z}_0 + \frac{h}{6}(\mathbf{k}_1 + 2\mathbf{k}_2 + 2\mathbf{k}_3 + \mathbf{k}_4)$$
        $$\mathbf{z}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \frac{0.2}{6} \left( \begin{bmatrix} 0 \\ -1 \end{bmatrix} + 2 \begin{bmatrix} -0.1 \\ -1 \end{bmatrix} + 2 \begin{bmatrix} -0.1 \\ -0.99 \end{bmatrix} + \begin{bmatrix} -0.198 \\ -0.98 \end{bmatrix} \right)$$
        $$\mathbf{z}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \frac{0.2}{6} \left( \begin{bmatrix} 0 \\ -1 \end{bmatrix} + \begin{bmatrix} -0.2 \\ -2 \end{bmatrix} + \begin{bmatrix} -0.2 \\ -1.98 \end{bmatrix} + \begin{bmatrix} -0.198 \\ -0.98 \end{bmatrix} \right)$$
        $$\mathbf{z}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \frac{0.2}{6} \begin{bmatrix} -0.598 \\ -5.96 \end{bmatrix}$$
        $$\mathbf{z}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} -0.019933 \\ -0.198667 \end{bmatrix}$$
        $$\mathbf{z}_1 = \begin{bmatrix} 0.980067 \\ -0.198667 \end{bmatrix}$$

    Therefore, $y(0.2) = z_1(0.2) \approx 0.980067$.
    *(Analytical solution: $y(x) = \cos(x)$. $y(0.2) = \cos(0.2) \approx 0.980066578$)*

---

### **6. Advantages and Limitations of Runge-Kutta Methods**

*   **Advantages:**
    *   **High Accuracy:** RK4 offers good accuracy for a wide range of problems, often sufficient for many engineering applications.
    *   **Simplicity of Implementation:** The formulas, while involving several evaluations, are straightforward to implement in code.
    *   **No Need for Higher Derivatives:** Unlike Taylor series methods, RK methods do not require explicit calculation of higher-order derivatives of the function $f$, which can be difficult or impossible to find analytically.
    *   **Good Stability Properties:** RK methods generally have better stability characteristics compared to Euler's method.

*   **Limitations:**
    *   **Computational Cost:** RK methods require multiple function evaluations per step, making them more computationally intensive than Euler's method.
    *   **Step Size Selection:** While more accurate than simpler methods, choosing an appropriate step size ($h$) is still crucial. Too large a step size can lead to significant errors, while too small a step size can be computationally prohibitive. Adaptive step-size control can mitigate this.
    *   **Stiff ODEs:** For "stiff" ODEs (where solutions change at vastly different rates), standard RK methods may require extremely small step sizes to maintain stability and accuracy. Implicit Runge-Kutta methods or specialized solvers are better suited for stiff problems.
    *   **Higher-Order RK Methods:** While higher-order RK methods exist (e.g., RK5, RK6, Dormand-Prince), their complexity increases, and the benefit in accuracy might not always justify the increased computational cost for simpler problems.

---

### **Important Points to Remember**

*   **Convert Higher-Order to System:** Always convert a higher-order ODE into a system of first-order ODEs before applying numerical methods.
*   **RK4 is a 4th-Order Method:** It has a local error of $O(h^5)$ and global error of $O(h^4)$.
*   **Four Slope Evaluations:** RK4 requires four evaluations of the function $f$ (or $\mathbf{f}$ for systems) per step.
*   **Weighted Average:** The final step update is a weighted average of these four slopes.
*   **System Application:** Apply the RK4 formulas vectorially when dealing with systems of ODEs. Each component of the $\mathbf{k}_i$ vectors corresponds to the respective ODE in the system.
*   **Step Size:** The choice of step size $h$ is critical for accuracy and efficiency. Smaller $h$ generally means better accuracy but more computation.
*   **Analytical Solution Comparison:** Whenever possible, compare your numerical results with the analytical solution (if available) to assess accuracy.

---

### **Practice Questions/Exercises**

1.  **Convert the following third-order ODE into a system of first-order ODEs:**
    $$y''' - 2y'' + 3y' - 4y = \sin(x)$$
    with initial conditions $y(0)=1$, $y'(0)=0$, $y''(0)=2$.

2.  **Apply the RK4 method to solve the first-order ODE $y' = x + y$ with $y(0)=1$. Find $y(0.1)$ using a step size $h=0.1$.**

3.  **Consider the second-order ODE $y'' = y' - y^2$ with initial conditions $y(0)=1$ and $y'(0)=0$. Use the RK4 method with $h=0.1$ to find $y(0.1)$ and $y'(0.1)$.**

4.  **What is the local and global truncation error for the RK4 method?**

5.  **Explain why converting a higher-order ODE into a system of first-order ODEs is necessary for applying methods like Runge-Kutta.**

---

### **Answers to Practice Questions/Exercises**

1.  Let $z_1 = y$, $z_2 = y'$, $z_3 = y''$.
    Then $z'_1 = y' = z_2$.
    $z'_2 = y'' = z_3$.
    $z'_3 = y''' = 2y'' - 3y' + 4y + \sin(x) = 2z_3 - 3z_2 + 4z_1 + \sin(x)$.

    The system is:
    $$z'_1 = z_2$$
    $$z'_2 = z_3$$
    $$z'_3 = 4z_1 - 3z_2 + 2z_3 + \sin(x)$$
    with initial conditions $z_1(0) = 1$, $z_2(0) = 0$, $z_3(0) = 2$.

2.  $y' = f(x, y) = x + y$. $y(0)=1$, $h=0.1$.
    $x_0=0, y_0=1$.

    *   $k_1 = f(0, 1) = 0 + 1 = 1$.
    *   $k_2 = f(0 + 0.1/2, 1 + 0.1/2 * 1) = f(0.05, 1.05) = 0.05 + 1.05 = 1.10$.
    *   $k_3 = f(0 + 0.1/2, 1 + 0.1/2 * 1.10) = f(0.05, 1.055) = 0.05 + 1.055 = 1.105$.
    *   $k_4 = f(0 + 0.1, 1 + 0.1 * 1.105) = f(0.1, 1.1105) = 0.1 + 1.1105 = 1.2105$.

    $y(0.1) = y_0 + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$
    $y(0.1) = 1 + \frac{0.1}{6}(1 + 2(1.10) + 2(1.105) + 1.2105)$
    $y(0.1) = 1 + \frac{0.1}{6}(1 + 2.20 + 2.21 + 1.2105)$
    $y(0.1) = 1 + \frac{0.1}{6}(6.6205)$
    $y(0.1) = 1 + 0.11034167 \approx 1.11034$.

3.  Let $z_1 = y$, $z_2 = y'$.
    $z'_1 = y' = z_2$
    $z'_2 = y'' = y' - y^2 = z_2 - z_1^2$.

    System: $\mathbf{f}(x, \mathbf{z}) = \begin{bmatrix} z_2 \\ z_2 - z_1^2 \end{bmatrix}$, where $\mathbf{z} = \begin{bmatrix} z_1 \\ z_2 \end{bmatrix}$.
    Initial conditions: $\mathbf{z}(0) = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$. $h=0.1$.

    *   $\mathbf{k}_1 = \mathbf{f}(0, \begin{bmatrix} 1 \\ 0 \end{bmatrix}) = \begin{bmatrix} 0 \\ 0 - 1^2 \end{bmatrix} = \begin{bmatrix} 0 \\ -1 \end{bmatrix}$.
    *   $\mathbf{k}_2 = \mathbf{f}(0 + 0.1/2, \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 0.1/2 \begin{bmatrix} 0 \\ -1 \end{bmatrix}) = \mathbf{f}(0.05, \begin{bmatrix} 1 \\ -0.05 \end{bmatrix})$
        $\mathbf{k}_2 = \begin{bmatrix} -0.05 \\ -0.05 - 1^2 \end{bmatrix} = \begin{bmatrix} -0.05 \\ -0.05 - 1 \end{bmatrix} = \begin{bmatrix} -0.05 \\ -1.05 \end{bmatrix}$.
    *   $\mathbf{k}_3 = \mathbf{f}(0 + 0.1/2, \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 0.1/2 \begin{bmatrix} -0.05 \\ -1.05 \end{bmatrix}) = \mathbf{f}(0.05, \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} -0.0025 \\ -0.0525 \end{bmatrix}) = \mathbf{f}(0.05, \begin{bmatrix} 0.9975 \\ -0.0525 \end{bmatrix})$
        $\mathbf{k}_3 = \begin{bmatrix} -0.0525 \\ -0.0525 - (0.9975)^2 \end{bmatrix} = \begin{bmatrix} -0.0525 \\ -0.0525 - 0.99500625 \end{bmatrix} = \begin{bmatrix} -0.0525 \\ -1.04750625 \end{bmatrix}$.
    *   $\mathbf{k}_4 = \mathbf{f}(0 + 0.1, \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 0.1 \begin{bmatrix} -0.0525 \\ -1.04750625 \end{bmatrix}) = \mathbf{f}(0.1, \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} -0.00525 \\ -0.104750625 \end{bmatrix}) = \mathbf{f}(0.1, \begin{bmatrix} 0.99475 \\ -0.104750625 \end{bmatrix})$
        $\mathbf{k}_4 = \begin{bmatrix} -0.104750625 \\ -0.104750625 - (0.99475)^2 \end{bmatrix} = \begin{bmatrix} -0.104750625 \\ -0.104750625 - 0.9895250625 \end{bmatrix} = \begin{bmatrix} -0.104750625 \\ -1.0942756875 \end{bmatrix}$.

    $\mathbf{z}(0.1) = \mathbf{z}(0) + \frac{h}{6}(\mathbf{k}_1 + 2\mathbf{k}_2 + 2\mathbf{k}_3 + \mathbf{k}_4)$
    $\mathbf{z}(0.1) = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \frac{0.1}{6} \left( \begin{bmatrix} 0 \\ -1 \end{bmatrix} + 2 \begin{bmatrix} -0.05 \\ -1.05 \end{bmatrix} + 2 \begin{bmatrix} -0.0525 \\ -1.04750625 \end{bmatrix} + \begin{bmatrix} -0.104750625 \\ -1.0942756875 \end{bmatrix} \right)$
    $\mathbf{z}(0.1) = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \frac{0.1}{6} \left( \begin{bmatrix} 0 \\ -1 \end{bmatrix} + \begin{bmatrix} -0.1 \\ -2.1 \end{bmatrix} + \begin{bmatrix} -0.105 \\ -2.0950125 \end{bmatrix} + \begin{bmatrix} -0.104750625 \\ -1.0942756875 \end{bmatrix} \right)$
    $\mathbf{z}(0.1) = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \frac{0.1}{6} \begin{bmatrix} -0.309750625 \\ -6.2892881875 \end{bmatrix}$
    $\mathbf{z}(0.1) = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} -0.0051625104 \\ -0.1048214698 \end{bmatrix}$
    $\mathbf{z}(0.1) = \begin{bmatrix} 0.99483749 \\ -0.10482147 \end{bmatrix}$

    So, $y(0.1) \approx 0.994837$ and $y'(0.1) \approx -0.104821$.

4.  The local truncation error for the RK4 method is $O(h^5)$.
    The global truncation error for the RK4 method is $O(h^4)$.

5.  Numerical methods like Euler's method and Runge-Kutta methods are designed to solve *first-order* ODEs. A higher-order ODE, such as $y'' = f(x, y, y')$, cannot be directly fed into these algorithms. By introducing intermediate variables for the derivatives (e.g., $z_1=y$, $z_2=y'$), the higher-order ODE can be rewritten as a system of equivalent first-order ODEs, which can then be solved using these numerical techniques. This transformation is a fundamental step in applying many standard numerical ODE solvers to problems involving higher-order differential equations.

---
