---
title: "Newton Raphson method"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 1: Motivation and Applications of numerical methods"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646a1"
status: "completed"
scrapedAt: "2026-05-20T18:23:02.505Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 1: Motivation and Applications of Numerical Methods

### Topic: Newton-Raphson Method

---

**Learning Outcomes Covered:**

*   **LO1:** Understand the iterative nature of numerical methods for solving equations.
*   **LO2:** Recognize the conditions for convergence and potential limitations of the Newton-Raphson method.
*   **LO3:** Apply the Newton-Raphson method to find roots of nonlinear equations.
*   **LO4:** Evaluate the effectiveness of the Newton-Raphson method compared to other root-finding techniques.

**Course Outcomes Addressed:**

*   **CO1: Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3)** - This topic directly addresses CO1 by focusing on a powerful method for solving nonlinear equations.

---

### 1. Introduction to Root Finding

Numerical methods are essential for solving problems that cannot be solved analytically. Finding the roots of an equation, i.e., determining the values of the variable(s) for which the equation equals zero, is a fundamental problem.

*   **Analytical Solution:** Finding an exact closed-form solution.
*   **Numerical Solution:** Finding an approximate solution to a desired level of accuracy.

**Why are numerical methods needed?**

*   Many real-world problems involve complex equations that do not have simple analytical solutions.
*   Even if an analytical solution exists, it might be too complicated to obtain or use.
*   Examples:
    *   Finding the equilibrium points in physical systems.
    *   Determining optimal operating conditions in engineering processes.
    *   Solving transcendental equations (e.g., involving trigonometric, exponential, or logarithmic functions).

---

### 2. The Newton-Raphson Method (Newton's Method)

The Newton-Raphson method is an **iterative** technique for finding successively better approximations to the roots (or zeroes) of a real-valued function. It is a widely used and generally efficient method.

**Key Concept:** The method approximates the function by its tangent line at a given point and finds the root of the tangent line, which serves as the next approximation to the root of the original function.

#### 2.1. Derivation of the Formula

Consider a function $f(x)$ and we want to find a root $r$ such that $f(r) = 0$.

1.  **Start with an initial guess:** Let $x_0$ be an initial guess close to the root.
2.  **Taylor Series Expansion:** Expand $f(x)$ around $x_0$ using a Taylor series:
    $f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2!}(x - x_0)^2 + \dots$
3.  **Linear Approximation:** For a good initial guess, the higher-order terms are small. We can approximate the function with its tangent line at $x_0$:
    $f(x) \approx f(x_0) + f'(x_0)(x - x_0)$
4.  **Find the root of the tangent line:** We want to find the value of $x$ where this linear approximation equals zero. Let this be our next approximation, $x_1$.
    $0 \approx f(x_0) + f'(x_0)(x_1 - x_0)$
5.  **Solve for $x_1$:**
    $-f(x_0) \approx f'(x_0)(x_1 - x_0)$
    $\frac{-f(x_0)}{f'(x_0)} \approx x_1 - x_0$
    $x_1 \approx x_0 - \frac{f(x_0)}{f'(x_0)}$

#### 2.2. The Iterative Formula

Generalizing this to any iteration $i$, the formula for the next approximation $x_{i+1}$ based on the current approximation $x_i$ is:

$$x_{i+1} = x_i - \frac{f(x_i)}{f'(x_i)}$$

where:
*   $x_i$ is the approximation of the root at the $i$-th iteration.
*   $f(x_i)$ is the value of the function at $x_i$.
*   $f'(x_i)$ is the value of the derivative of the function at $x_i$.

**Important Note:** This method requires the derivative of the function $f(x)$.

#### 2.3. Algorithm Steps

1.  **Define the function $f(x)$ and its derivative $f'(x)$.**
2.  **Choose an initial guess $x_0$ that is reasonably close to the actual root.**
3.  **Set a stopping criterion:** This could be:
    *   **Tolerance on the function value:** $|f(x_i)| < \epsilon_1$ (where $\epsilon_1$ is a small positive number).
    *   **Tolerance on the change in approximation:** $|x_{i+1} - x_i| < \epsilon_2$ (where $\epsilon_2$ is a small positive number).
    *   **Maximum number of iterations:** To prevent infinite loops.
4.  **Perform iterations:** For $i = 0, 1, 2, \dots$
    *   Calculate $f(x_i)$ and $f'(x_i)$.
    *   Calculate the next approximation: $x_{i+1} = x_i - \frac{f(x_i)}{f'(x_i)}$.
    *   Check the stopping criterion. If met, stop; $x_{i+1}$ is the approximate root.
    *   If not met, update $x_i = x_{i+1}$ and continue to the next iteration.

---

### 3. Example: Finding the Root of a Nonlinear Equation

**Problem:** Find a root of the equation $f(x) = x^2 - 2$ using the Newton-Raphson method. The actual root is $\sqrt{2} \approx 1.41421356$.

**Steps:**

1.  **Define $f(x)$ and $f'(x)$:**
    *   $f(x) = x^2 - 2$
    *   $f'(x) = 2x$

2.  **Choose an initial guess:** Let $x_0 = 1.5$.

3.  **Set a stopping criterion:** Let's use a tolerance on the change in approximation: $|x_{i+1} - x_i| < 0.0001$.

4.  **Perform iterations:**

    *   **Iteration 1 (i=0):**
        *   $x_0 = 1.5$
        *   $f(x_0) = (1.5)^2 - 2 = 2.25 - 2 = 0.25$
        *   $f'(x_0) = 2 \times 1.5 = 3.0$
        *   $x_1 = x_0 - \frac{f(x_0)}{f'(x_0)} = 1.5 - \frac{0.25}{3.0} = 1.5 - 0.083333 \approx 1.416667$
        *   $|x_1 - x_0| = |1.416667 - 1.5| = 0.083333$ (Not less than 0.0001)

    *   **Iteration 2 (i=1):**
        *   $x_1 = 1.416667$
        *   $f(x_1) = (1.416667)^2 - 2 \approx 2.006945 - 2 = 0.006945$
        *   $f'(x_1) = 2 \times 1.416667 \approx 2.833334$
        *   $x_2 = x_1 - \frac{f(x_1)}{f'(x_1)} = 1.416667 - \frac{0.006945}{2.833334} \approx 1.416667 - 0.002451 \approx 1.414216$
        *   $|x_2 - x_1| = |1.414216 - 1.416667| = 0.002451$ (Not less than 0.0001)

    *   **Iteration 3 (i=2):**
        *   $x_2 = 1.414216$
        *   $f(x_2) = (1.414216)^2 - 2 \approx 2.000007 - 2 = 0.000007$
        *   $f'(x_2) = 2 \times 1.414216 \approx 2.828432$
        *   $x_3 = x_2 - \frac{f(x_2)}{f'(x_2)} = 1.414216 - \frac{0.000007}{2.828432} \approx 1.414216 - 0.0000025 \approx 1.4142135$
        *   $|x_3 - x_2| = |1.4142135 - 1.414216| = 0.0000025$ (Less than 0.0001)

5.  **Result:** The approximation $x_3 \approx 1.4142135$ is close enough. The root of $x^2 - 2 = 0$ is approximately $1.4142135$.

---

### 4. Conditions for Convergence and Limitations

The Newton-Raphson method is powerful, but it's not always guaranteed to converge, and its convergence rate can vary.

#### 4.1. Convergence Conditions

The Newton-Raphson method exhibits **quadratic convergence** when it converges. This means that the number of correct significant figures roughly doubles with each iteration, making it very fast.

**Conditions for quadratic convergence:**

1.  **Initial Guess ($x_0$):** The initial guess must be sufficiently close to the actual root.
2.  **Function Behavior:**
    *   The second derivative $f''(x)$ must be continuous in the interval of interest.
    *   The derivative $f'(x)$ must be non-zero at the root.
    *   The function should be "well-behaved" (i.e., not have sharp turns or plateaus near the root).

**Mathematical Condition for Convergence:**
If $r$ is a root, and $|x_0 - r|$ is small enough, the method converges quadratically. A common sufficient condition for convergence is that if $|x_0 - r| < |f(x_0)/f'(x_0)|$, the next iterate will be closer to the root.

#### 4.2. Potential Issues and Limitations

1.  **Non-convergence:** The method may fail to converge if:
    *   **Initial guess is far from the root:** The tangent line might lead away from the root.
    *   **Derivative is zero or close to zero ($f'(x_i) \approx 0$):** Division by a small number can lead to very large steps, potentially jumping over the root or causing overflow. This occurs at inflection points or local extrema.
    *   **Oscillation:** The iterates might oscillate between two values without converging.
    *   **Divergence:** The iterates might move further away from the root.

2.  **Division by Zero:** If $f'(x_i) = 0$ at any iteration, the method fails. This happens when the tangent is horizontal, meaning it never intersects the x-axis.

3.  **Requires Derivative:** The method requires that the derivative of the function be calculable and that its value be available at each iteration. If the derivative is difficult or impossible to find analytically, other methods (like the Secant Method) might be preferred.

4.  **Multiple Roots:** If the root is a multiple root (i.e., $f(r) = 0$ and $f'(r) = 0$), the convergence slows down to linear, and the method might fail.

#### 4.3. Modifications for Multiple Roots

For a root $r$ with multiplicity $m$ (where $f(r) = f'(r) = \dots = f^{(m-1)}(r) = 0$ and $f^{(m)}(r) \neq 0$), the standard Newton-Raphson method converges linearly. A modified formula for multiple roots is:

$$x_{i+1} = x_i - m \frac{f(x_i)}{f'(x_i)}$$

This modification helps restore quadratic convergence for multiple roots.

---

### 5. Comparison with Other Root-Finding Methods

*   **Bisection Method:**
    *   **Pros:** Guaranteed to converge if an interval containing a root is known. Simple to implement.
    *   **Cons:** Slow convergence (linear). Requires an initial interval where the function changes sign.
*   **Secant Method:**
    *   **Pros:** Does not require the derivative. Generally faster convergence than Bisection (superlinear).
    *   **Cons:** Requires two initial guesses. Does not guarantee convergence.
*   **False Position (Regula Falsi):**
    *   **Pros:** Guaranteed to converge (like Bisection). Keeps one endpoint fixed to maintain the sign change.
    *   **Cons:** Can be slow if one endpoint converges slowly.

**Newton-Raphson vs. Others:**

*   **Speed:** Newton-Raphson is generally the fastest (quadratic convergence) when it converges.
*   **Derivative:** Requires the derivative, which is a disadvantage compared to Secant or Bisection.
*   **Initial Guess:** More sensitive to the initial guess than Bisection.

---

### 6. Applications of Newton-Raphson Method

The Newton-Raphson method is widely applicable in various engineering and scientific disciplines:

*   **Finding roots of polynomials:** Essential for many engineering problems.
*   **Optimization:** Finding the minimum or maximum of a function by finding the roots of its derivative. (This is essentially finding critical points).
*   **Solving systems of nonlinear equations:** Can be extended to multiple variables.
*   **Engineering Design:**
    *   **Chemical Engineering:** Calculating reaction equilibrium constants, phase equilibrium.
    *   **Electrical Engineering:** Solving nonlinear circuit equations.
    *   **Mechanical Engineering:** Determining forces and stresses in complex structures, fluid dynamics calculations.
    *   **Civil Engineering:** Load and stress analysis.
*   **Financial Modeling:** Calculating interest rates, present/future values.
*   **Physics:** Solving equations of motion, quantum mechanics.

---

### 7. Practice Questions and Exercises

**Question 1:**
Find the positive root of $f(x) = x - \cos(x) = 0$ using the Newton-Raphson method. Start with an initial guess of $x_0 = 0.5$. Use a tolerance of $0.0001$ for the change in approximation. Show the first three iterations.

**Solution 1:**
1.  **$f(x) = x - \cos(x)$**
2.  **$f'(x) = 1 - (-\sin(x)) = 1 + \sin(x)$**
3.  **Initial Guess:** $x_0 = 0.5$
4.  **Tolerance:** $|x_{i+1} - x_i| < 0.0001$

    *   **Iteration 1:**
        *   $f(0.5) = 0.5 - \cos(0.5) \approx 0.5 - 0.877583 = -0.377583$
        *   $f'(0.5) = 1 + \sin(0.5) \approx 1 + 0.479426 = 1.479426$
        *   $x_1 = 0.5 - \frac{-0.377583}{1.479426} \approx 0.5 + 0.255213 \approx 0.755213$
        *   $|x_1 - x_0| = |0.755213 - 0.5| = 0.255213$

    *   **Iteration 2:**
        *   $f(0.755213) = 0.755213 - \cos(0.755213) \approx 0.755213 - 0.728348 = 0.026865$
        *   $f'(0.755213) = 1 + \sin(0.755213) \approx 1 + 0.684735 = 1.684735$
        *   $x_2 = 0.755213 - \frac{0.026865}{1.684735} \approx 0.755213 - 0.015946 \approx 0.739267$
        *   $|x_2 - x_1| = |0.739267 - 0.755213| = 0.015946$

    *   **Iteration 3:**
        *   $f(0.739267) = 0.739267 - \cos(0.739267) \approx 0.739267 - 0.738970 = 0.000297$
        *   $f'(0.739267) = 1 + \sin(0.739267) \approx 1 + 0.673748 = 1.673748$
        *   $x_3 = 0.739267 - \frac{0.000297}{1.673748} \approx 0.739267 - 0.000178 \approx 0.739089$
        *   $|x_3 - x_2| = |0.739089 - 0.739267| = 0.000178$ (Still not less than 0.0001, but getting close)

    *   **(Continuing for a few more iterations would yield a result closer to 0.739085)**

**Question 2:**
Consider the function $f(x) = x^3 - 3x + 1$.
a) Find the derivative $f'(x)$.
b) If the initial guess is $x_0 = 0.5$, does the Newton-Raphson method converge or diverge in the first iteration? Explain why.

**Solution 2:**
a) $f'(x) = 3x^2 - 3$

b) Let's check the value of the derivative at $x_0 = 0.5$:
   $f'(0.5) = 3(0.5)^2 - 3 = 3(0.25) - 3 = 0.75 - 3 = -2.25$.
   Since $f'(0.5)$ is not zero, the method can be applied for the first iteration. The formula is $x_1 = x_0 - \frac{f(x_0)}{f'(x_0)}$.
   $f(0.5) = (0.5)^3 - 3(0.5) + 1 = 0.125 - 1.5 + 1 = -0.375$.
   $x_1 = 0.5 - \frac{-0.375}{-2.25} = 0.5 - 0.166667 \approx 0.333333$.
   The method proceeds for the first iteration.

   **Explanation for potential issues:**
   The function has roots near $x=1.532$, $x=0.347$, and $x=-1.879$.
   If the initial guess was $x_0 = 1$ or $x_0 = -1$, then $f'(x_0) = 3(1)^2 - 3 = 0$ or $f'(-1) = 3(-1)^2 - 3 = 0$. In these cases, the method would fail immediately due to division by zero. This highlights the importance of checking the derivative at the initial guess.

**Question 3:**
Explain why the Newton-Raphson method is often preferred over the Bisection method for finding roots when the derivative is readily available.

**Solution 3:**
The Newton-Raphson method typically exhibits **quadratic convergence**, meaning the error is roughly squared in each iteration. This results in a very rapid approach to the root. In contrast, the Bisection method has **linear convergence**, where the error is halved in each iteration. For most problems where an initial guess close to the root is feasible and the derivative is easily computed, the Newton-Raphson method will find the root to a desired accuracy in far fewer iterations than the Bisection method.

---

### 8. Important Points to Remember

*   **Iterative Method:** Newton-Raphson refines an initial guess in steps.
*   **Formula:** $x_{i+1} = x_i - \frac{f(x_i)}{f'(x_i)}$
*   **Requires Derivative:** The calculation of $f'(x)$ is mandatory.
*   **Quadratic Convergence:** Very fast when it converges.
*   **Initial Guess Sensitivity:** A good initial guess is crucial for convergence.
*   **Failure Conditions:** $f'(x) \approx 0$, poor initial guess, oscillation, divergence.
*   **Applications:** Wide range of problems in science and engineering where root finding is needed.
*   **Check for $f'(x_i) \neq 0$:** Always ensure the denominator is not zero before calculating the next iterate.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 9. References and Further Reading

*   **Chapra, S. C., & Canale, R. P. (2010).** *Numerical methods for Engineers* (6th ed.). McGraw-Hill. (Chapter 5)
*   **Gupta, S. K. (1995).** *Numerical Methods for Engineers*. New Age International. (Chapter 4)
*   **Balagurusamy, E. (2017).** *Numerical methods*. McGraw Hill Education. (Chapter 3)
*   **Gerald, C. F., & Wheatly, P. O. (2001).** *Applied Numerical Analysis* (6th ed.). Addison-Wesley.
*   **Jain, M. K., Iyengar, S. R. K., & Jain, R. K.** *Numerical Methods for Scientific and Engineering Computation*. New Age Pvt. Pub.
*   **Conte, S. D., & De Boor, C.** *Elementary Numerical Analysis*. McGraw-Hill.
*   **Krishnamurthy, E. V., & Sen, S. K.** *Applied Numerical Analysis*. East West Publication.
*   **Suli, E., & Mayers, D.** *An Introduction to Numerical Analysis*. Cambridge University Press.

---