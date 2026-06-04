---
title: "Roots of nonlinear equations-Bisection method"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 1: Motivation and Applications of numerical methods"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646a0"
status: "completed"
scrapedAt: "2026-05-20T18:23:01.794Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 1: Motivation and Applications of Numerical Methods

### Topic: Roots of Nonlinear Equations - The Bisection Method

---

### 1. Introduction to Roots of Nonlinear Equations

**What is a "root" of an equation?**
A root of an equation $f(x) = 0$ is a value of $x$ that satisfies the equation. In simpler terms, it's where the graph of the function $f(x)$ crosses or touches the x-axis.

**Why are we interested in roots of nonlinear equations?**
Many real-world problems in engineering and science are modeled using nonlinear equations. Finding the roots of these equations is crucial for understanding system behavior, optimizing designs, and making predictions.

**Examples:**

*   **Engineering:**
    *   **Fluid Dynamics:** Determining flow velocities, pressure distributions.
    *   **Structural Engineering:** Analyzing stresses and strains in beams and structures.
    *   **Thermodynamics:** Calculating equilibrium conditions, heat transfer rates.
    *   **Control Systems:** Finding eigenvalues and stability criteria.
*   **Science:**
    *   **Physics:** Solving motion equations, finding energy levels.
    *   **Chemistry:** Determining reaction rates, equilibrium concentrations.
    *   **Biology:** Modeling population growth, drug diffusion.

**Challenges with Nonlinear Equations:**
Unlike linear equations (e.g., $ax + b = 0$), nonlinear equations can have:
*   No real roots.
*   One real root.
*   Multiple real roots.
*   Roots that are difficult or impossible to find analytically (i.e., using algebraic manipulation).

This is where **numerical methods** come into play. They provide systematic ways to approximate these roots.

---

### 2. Motivation for Numerical Methods

**When analytical solutions are not feasible:**
Many nonlinear equations derived from physical phenomena do not have simple, closed-form analytical solutions. For instance, equations involving trigonometric functions, exponentials, or complex polynomial terms often defy direct algebraic solutions.

**Need for approximations:**
Numerical methods provide a way to obtain approximate solutions to these equations within a desired level of accuracy. This is perfectly acceptable and often more practical for engineering applications where exact solutions might be theoretical rather than practically measurable.

**Efficiency and Automation:**
Numerical methods are well-suited for computer implementation, allowing for rapid calculation of roots and enabling automated analysis of complex systems.

**Connecting to Course Outcomes:**

*   **CO1: Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3)**
    This topic directly addresses the application of a numerical method (Bisection Method) to solve nonlinear equations. Understanding the motivation behind using numerical methods helps in appreciating *why* and *when* to apply them, fulfilling the "apply" aspect of CO1.

---

### 3. The Bisection Method: Concept and Theory

**What is the Bisection Method?**
The Bisection Method is a simple, robust, and reliable numerical technique for finding a real root of a continuous function within a given interval. It is also known as the **interval halving method** or **binary search method**.

**Underlying Principle:**
The Bisection Method relies on the **Intermediate Value Theorem (IVT)**.

**Intermediate Value Theorem (IVT):**
If a function $f(x)$ is continuous on a closed interval $[a, b]$, and $f(a)$ and $f(b)$ have opposite signs (i.e., $f(a) \cdot f(b) < 0$), then there must exist at least one root $c$ in the open interval $(a, b)$ such that $f(c) = 0$.

**How the Bisection Method Works:**

1.  **Initial Interval Selection:** Choose an interval $[a, b]$ such that $f(a)$ and $f(b)$ have opposite signs. This guarantees, by IVT, that at least one root lies within this interval.
2.  **Midpoint Calculation:** Calculate the midpoint of the interval:
    $c = \frac{a + b}{2}$
3.  **Function Evaluation at Midpoint:** Evaluate the function at the midpoint, $f(c)$.
4.  **Interval Reduction:**
    *   If $f(c) = 0$, then $c$ is the exact root, and the process stops.
    *   If $f(a) \cdot f(c) < 0$, then the root must lie in the left half of the interval, $[a, c]$. The new interval becomes $[a, c]$.
    *   If $f(c) \cdot f(b) < 0$, then the root must lie in the right half of the interval, $[c, b]$. The new interval becomes $[c, b]$.
5.  **Iteration:** Repeat steps 2-4 with the new, smaller interval until the desired level of accuracy is achieved.

**Stopping Criteria:**
The iteration stops when one of the following conditions is met:

*   **Small Interval Width:** The width of the interval $(b - a)$ becomes smaller than a specified tolerance ($\epsilon$).
    $b - a < \epsilon$
*   **Small Function Value:** The absolute value of the function at the midpoint $|f(c)|$ is close to zero, within a specified tolerance ($\epsilon$).
    $|f(c)| < \epsilon$
*   **Maximum Number of Iterations:** A predefined maximum number of iterations is reached to prevent infinite loops.

**Accuracy and Convergence:**
The Bisection Method guarantees convergence to a root if a suitable initial interval is found. Each iteration reduces the interval width by half, ensuring that the error is halved with each step.

**Error Bound:**
After $n$ iterations, the maximum error (the difference between the true root and the midpoint of the current interval) is given by:
$Error \leq \frac{b_0 - a_0}{2^n}$
where $[a_0, b_0]$ is the initial interval.

**Referencing Textbooks:**

*   **Chapra & Canale (6th Ed., 2010):** Chapter 5, "Roots of Equations: Non-Graphical Methods," specifically covers the Bisection Method in detail, emphasizing its graphical interpretation and algorithmic structure. They often introduce it as a fundamental method for finding roots.
*   **Gupta (1995):** Likely covers basic root-finding methods, including the Bisection Method, in its initial chapters on numerical solutions of algebraic and transcendental equations.
*   **Balagurusamy (2017):** Provides a straightforward explanation and implementation of the Bisection Method, often with examples in C or C++.

---

### 4. Algorithm and Implementation of the Bisection Method

**Algorithm Steps:**

1.  Define the function $f(x)$.
2.  Choose an initial interval $[a, b]$ such that $f(a) \cdot f(b) < 0$.
3.  Choose a desired tolerance ($\epsilon$) for accuracy.
4.  Choose a maximum number of iterations ($N_{max}$) to prevent infinite loops.
5.  Initialize the iteration counter $i = 1$.
6.  **Loop:** While $i \le N_{max}$:
    a.  Calculate the midpoint: $c = \frac{a + b}{2}$
    b.  Evaluate the function at the midpoint: $f(c)$
    c.  **Check for convergence:**
        *   If $f(c) = 0$ or $(b - a)/2 < \epsilon$ (or $|f(c)| < \epsilon$), then $c$ is the approximate root. Terminate the loop.
    d.  **Update the interval:**
        *   If $f(a) \cdot f(c) < 0$, set $b = c$.
        *   Else (if $f(c) \cdot f(b) < 0$), set $a = c$.
    e.  Increment the iteration counter: $i = i + 1$.
7.  If the loop finishes without finding a root (i.e., $i > N_{max}$), report that the method failed to converge within the specified iterations.

**Example Implementation (Pseudocode):**

```pseudocode
function bisection_method(f, a, b, tolerance, max_iterations):
  if f(a) * f(b) >= 0:
    print("Error: Initial interval does not bracket a root.")
    return None

  for i from 1 to max_iterations:
    c = (a + b) / 2
    f_c = f(c)

    if f_c == 0 or (b - a) / 2 < tolerance:
      return c  // Found a root

    if f(a) * f_c < 0:
      b = c
    else:
      a = c

  print("Warning: Method did not converge within maximum iterations.")
  return (a + b) / 2 // Return the last midpoint as an approximation
```

**Connecting to Course Outcomes:**

*   **CO1: Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3)**
    Implementing the Bisection Method (even in pseudocode) directly shows how to apply a numerical technique to find a root of a nonlinear equation. This reinforces the "apply" aspect of CO1.

---

### 5. Worked Example

**Problem:** Find a root of the equation $f(x) = x^3 - x - 1 = 0$ within the interval $[1, 2]$ using the Bisection Method, with a tolerance of 0.01.

**Solution:**

1.  **Function:** $f(x) = x^3 - x - 1$
2.  **Initial Interval:** $[a_0, b_0] = [1, 2]$
3.  **Check signs:**
    *   $f(1) = 1^3 - 1 - 1 = -1$
    *   $f(2) = 2^3 - 2 - 1 = 8 - 2 - 1 = 5$
    *   Since $f(1)$ is negative and $f(2)$ is positive, $f(1) \cdot f(2) < 0$. The interval brackets a root.
4.  **Tolerance:** $\epsilon = 0.01$
5.  **Maximum Iterations:** Let's aim for a few iterations to demonstrate.

**Iteration 1:**
*   $a_0 = 1, b_0 = 2$
*   $c_1 = \frac{1 + 2}{2} = 1.5$
*   $f(c_1) = f(1.5) = (1.5)^3 - 1.5 - 1 = 3.375 - 1.5 - 1 = 0.875$
*   $f(a_0) \cdot f(c_1) = (-1) \cdot (0.875) < 0$. So, the new interval is $[a_1, b_1] = [1, 1.5]$.
*   Interval width: $b_1 - a_1 = 0.5$. Error bound: $0.5/2 = 0.25$.

**Iteration 2:**
*   $a_1 = 1, b_1 = 1.5$
*   $c_2 = \frac{1 + 1.5}{2} = 1.25$
*   $f(c_2) = f(1.25) = (1.25)^3 - 1.25 - 1 = 1.953125 - 1.25 - 1 = -0.296875$
*   $f(c_2) \cdot f(b_1) = (-0.296875) \cdot (0.875) < 0$. So, the new interval is $[a_2, b_2] = [1.25, 1.5]$.
*   Interval width: $b_2 - a_2 = 0.25$. Error bound: $0.25/2 = 0.125$.

**Iteration 3:**
*   $a_2 = 1.25, b_2 = 1.5$
*   $c_3 = \frac{1.25 + 1.5}{2} = 1.375$
*   $f(c_3) = f(1.375) = (1.375)^3 - 1.375 - 1 = 2.599609375 - 1.375 - 1 = 0.224609375$
*   $f(a_2) \cdot f(c_3) = (-0.296875) \cdot (0.224609375) < 0$. So, the new interval is $[a_3, b_3] = [1.25, 1.375]$.
*   Interval width: $b_3 - a_3 = 0.125$. Error bound: $0.125/2 = 0.0625$.

**Iteration 4:**
*   $a_3 = 1.25, b_3 = 1.375$
*   $c_4 = \frac{1.25 + 1.375}{2} = 1.3125$
*   $f(c_4) = f(1.3125) = (1.3125)^3 - 1.3125 - 1 = 2.257568359375 - 1.3125 - 1 = -0.054931640625$
*   $f(c_4) \cdot f(b_3) = (-0.054931640625) \cdot (0.224609375) < 0$. So, the new interval is $[a_4, b_4] = [1.3125, 1.375]$.
*   Interval width: $b_4 - a_4 = 0.0625$. Error bound: $0.0625/2 = 0.03125$.

**Iteration 5:**
*   $a_4 = 1.3125, b_4 = 1.375$
*   $c_5 = \frac{1.3125 + 1.375}{2} = 1.34375$
*   $f(c_5) = f(1.34375) = (1.34375)^3 - 1.34375 - 1 = 2.42340087890625 - 1.34375 - 1 = 0.07965087890625$
*   $f(a_4) \cdot f(c_5) = (-0.054931640625) \cdot (0.07965087890625) < 0$. So, the new interval is $[a_5, b_5] = [1.3125, 1.34375]$.
*   Interval width: $b_5 - a_5 = 0.03125$. Error bound: $0.03125/2 = 0.015625$.

**Iteration 6:**
*   $a_5 = 1.3125, b_5 = 1.34375$
*   $c_6 = \frac{1.3125 + 1.34375}{2} = 1.328125$
*   $f(c_6) = f(1.328125) = (1.328125)^3 - 1.328125 - 1 = 2.3401573181152344 - 1.328125 - 1 = 0.012032318115234375$
*   $f(a_5) \cdot f(c_6) = (-0.054931640625) \cdot (0.012032318115234375) < 0$. So, the new interval is $[a_6, b_6] = [1.3125, 1.328125]$.
*   Interval width: $b_6 - a_6 = 0.015625$. Error bound: $0.015625/2 = 0.0078125$.

The current interval width is $0.015625$, which is less than the tolerance of $0.01$. However, the error bound at the midpoint $c_6$ is $0.0078125$, which is also less than the tolerance. Thus, we can stop here.

**Approximate Root:** $c_6 = 1.328125$

**Check:** $f(1.328125) \approx 0.01203$. This is close to zero.

**Using the stopping criterion based on interval width:**
The interval after iteration 5 was $[1.3125, 1.34375]$ with a width of $0.03125$.
The interval after iteration 6 was $[1.3125, 1.328125]$ with a width of $0.015625$.
The interval after iteration 7 would be $c_7 = \frac{1.3125 + 1.328125}{2} = 1.3203125$.
The new interval would be $[1.3125, 1.3203125]$ with a width of $0.0078125$.
Since $0.0078125 < 0.01$, we would stop here. The root would be approximately $1.3203125$.

*Note: The exact root is approximately 1.3247. The bisection method converges to this value.*

**Referencing Textbooks:**

*   **Chapra & Canale (6th Ed., 2010):** Provide similar step-by-step examples, often using tables to track the iterations, which is very helpful for understanding the process.
*   **Balagurusamy (2017):** Usually includes solved examples with code snippets to illustrate the calculations.

---

### 6. Advantages and Disadvantages of the Bisection Method

**Advantages:**

*   **Guaranteed Convergence:** If an initial interval bracketing a root is found, the method is guaranteed to converge to a root. This is a major strength.
*   **Simplicity:** The algorithm is straightforward to understand and implement.
*   **Robustness:** It is less sensitive to the initial guess compared to some other methods (like Newton-Raphson, which we will cover later) and is not prone to divergence if the derivative is zero or undefined.
*   **Error Control:** The error bound is predictable and decreases linearly with each iteration, making it easy to determine the number of iterations needed for a specific accuracy.

**Disadvantages:**

*   **Slow Convergence:** Compared to other methods like Newton-Raphson, the Bisection Method converges relatively slowly. It halves the interval size in each step, leading to linear convergence.
*   **Requires Bracketing Interval:** A significant disadvantage is the need to find an initial interval $[a, b]$ where $f(a)$ and $f(b)$ have opposite signs. This might be difficult or impossible for certain functions or if only one root exists within a very large interval.
*   **Cannot Find Multiple Roots:** If there are multiple roots within the initial interval, the Bisection Method will converge to only one of them.
*   **Cannot Find Roots of Even Multiplicity:** If a function has a root where it touches the x-axis without crossing (e.g., $f(x) = x^2$), the condition $f(a) \cdot f(b) < 0$ will not be met for an interval around that root. The method is primarily for simple roots where the function changes sign.
*   **Inefficiency for Closely Spaced Roots:** If the desired root is very close to one of the endpoints of the initial interval, the method might take many iterations to narrow down.

**Important Points to Remember:**

*   The Bisection Method requires the function to be **continuous** within the initial interval.
*   The initial interval **must bracket a root**, meaning $f(a)$ and $f(b)$ must have opposite signs.
*   The convergence rate is **linear**.
*   The method is **robust** but **slow**.

**Connecting to Course Outcomes:**

*   **CO1: Apply numerical methods to solve linear and nonlinear equations (Knowledge Level: K3)**
    Understanding the advantages and disadvantages helps in choosing the appropriate numerical method for a given problem, contributing to the effective application aspect of CO1.

---

### 7. Practice Questions and Exercises

**Question 1:**
Find a root of the equation $f(x) = x^2 - 4$ in the interval $[0, 3]$ using the Bisection Method. Perform at least 4 iterations and state your approximate root.

**Question 2:**
A company is designing a spherical tank to store water. The volume of water $V$ in a partially filled spherical tank of radius $R$ and liquid depth $h$ is given by:
$V = \frac{\pi h^2}{3}(3R - h)$
If the tank radius $R = 2$ meters and the desired volume is $V = 10$ cubic meters, find the liquid depth $h$ using the Bisection Method. Use an initial interval of $[0, 4]$ and a tolerance of $0.001$.
(Hint: Rearrange the equation to $f(h) = \frac{\pi h^2}{3}(3R - h) - V = 0$).

**Question 3:**
Discuss the limitations of the Bisection Method regarding finding roots of even multiplicity.

---

### 8. Answers to Practice Questions

**Answer 1:**
$f(x) = x^2 - 4$
Interval: $[0, 3]$
$f(0) = 0^2 - 4 = -4$
$f(3) = 3^2 - 4 = 9 - 4 = 5$
$f(0) \cdot f(3) < 0$, so a root exists.

*   **Iteration 1:**
    *   $a=0, b=3$
    *   $c = (0+3)/2 = 1.5$
    *   $f(1.5) = (1.5)^2 - 4 = 2.25 - 4 = -1.75$
    *   $f(1.5) \cdot f(3) < 0$. New interval: $[1.5, 3]$
*   **Iteration 2:**
    *   $a=1.5, b=3$
    *   $c = (1.5+3)/2 = 2.25$
    *   $f(2.25) = (2.25)^2 - 4 = 5.0625 - 4 = 1.0625$
    *   $f(1.5) \cdot f(2.25) < 0$. New interval: $[1.5, 2.25]$
*   **Iteration 3:**
    *   $a=1.5, b=2.25$
    *   $c = (1.5+2.25)/2 = 1.875$
    *   $f(1.875) = (1.875)^2 - 4 = 3.515625 - 4 = -0.484375$
    *   $f(1.875) \cdot f(2.25) < 0$. New interval: $[1.875, 2.25]$
*   **Iteration 4:**
    *   $a=1.875, b=2.25$
    *   $c = (1.875+2.25)/2 = 2.0625$
    *   $f(2.0625) = (2.0625)^2 - 4 = 4.25390625 - 4 = 0.25390625$
    *   $f(1.875) \cdot f(2.0625) < 0$. New interval: $[1.875, 2.0625]$

Approximate root after 4 iterations: **2.0625** (The true root is 2).

**Answer 2:**
The equation to solve is $f(h) = \frac{\pi h^2}{3}(6 - h) - 10 = 0$ in the interval $[0, 4]$.
$R=2$, $V=10$.

*   **Iteration 1:**
    *   $a=0, b=4$
    *   $c = (0+4)/2 = 2$
    *   $f(2) = \frac{\pi (2)^2}{3}(6 - 2) - 10 = \frac{4\pi}{3}(4) - 10 = \frac{16\pi}{3} - 10 \approx 16.755 - 10 = 6.755$
    *   $f(0) = -10$. $f(0) \cdot f(2) < 0$. New interval: $[0, 2]$
*   **Iteration 2:**
    *   $a=0, b=2$
    *   $c = (0+2)/2 = 1$
    *   $f(1) = \frac{\pi (1)^2}{3}(6 - 1) - 10 = \frac{5\pi}{3} - 10 \approx 5.236 - 10 = -4.764$
    *   $f(1) \cdot f(2) < 0$. New interval: $[1, 2]$
*   **Iteration 3:**
    *   $a=1, b=2$
    *   $c = (1+2)/2 = 1.5$
    *   $f(1.5) = \frac{\pi (1.5)^2}{3}(6 - 1.5) - 10 = \frac{2.25\pi}{3}(4.5) - 10 = 1.5\pi(1.5) - 10 = 1.5\pi \times 1.5 - 10 \approx 7.069 - 10 = -2.931$
    *   $f(1.5) \cdot f(2) < 0$. New interval: $[1.5, 2]$
*   **Iteration 4:**
    *   $a=1.5, b=2$
    *   $c = (1.5+2)/2 = 1.75$
    *   $f(1.75) = \frac{\pi (1.75)^2}{3}(6 - 1.75) - 10 = \frac{3.0625\pi}{3}(4.25) - 10 \approx 13.261 - 10 = 3.261$
    *   $f(1.5) \cdot f(1.75) < 0$. New interval: $[1.5, 1.75]$
*   **Iteration 5:**
    *   $a=1.5, b=1.75$
    *   $c = (1.5+1.75)/2 = 1.625$
    *   $f(1.625) = \frac{\pi (1.625)^2}{3}(6 - 1.625) - 10 = \frac{2.640625\pi}{3}(4.375) - 10 \approx 11.527 - 10 = 1.527$
    *   $f(1.5) \cdot f(1.625) < 0$. New interval: $[1.5, 1.625]$
*   **Iteration 6:**
    *   $a=1.5, b=1.625$
    *   $c = (1.5+1.625)/2 = 1.5625$
    *   $f(1.5625) = \frac{\pi (1.5625)^2}{3}(6 - 1.5625) - 10 = \frac{2.44140625\pi}{3}(4.4375) - 10 \approx 10.726 - 10 = 0.726$
    *   $f(1.5) \cdot f(1.5625) < 0$. New interval: $[1.5, 1.5625]$
*   **Iteration 7:**
    *   $a=1.5, b=1.5625$
    *   $c = (1.5+1.5625)/2 = 1.53125$
    *   $f(1.53125) = \frac{\pi (1.53125)^2}{3}(6 - 1.53125) - 10 = \frac{2.34453125\pi}{3}(4.46875) - 10 \approx 10.217 - 10 = 0.217$
    *   $f(1.5) \cdot f(1.53125) < 0$. New interval: $[1.5, 1.53125]$
*   **Iteration 8:**
    *   $a=1.5, b=1.53125$
    *   $c = (1.5+1.53125)/2 = 1.515625$
    *   $f(1.515625) = \frac{\pi (1.515625)^2}{3}(6 - 1.515625) - 10 = \frac{2.29736328125\pi}{3}(4.484375) - 10 \approx 9.948 - 10 = -0.052$
    *   $f(1.515625) \cdot f(1.53125) < 0$. New interval: $[1.515625, 1.53125]$
*   **Iteration 9:**
    *   $a=1.515625, b=1.53125$
    *   $c = (1.515625+1.53125)/2 = 1.5234375$
    *   $f(1.5234375) = \frac{\pi (1.5234375)^2}{3}(6 - 1.5234375) - 10 \approx 10.082 - 10 = 0.082$
    *   $f(1.515625) \cdot f(1.5234375) < 0$. New interval: $[1.515625, 1.5234375]$
*   **Iteration 10:**
    *   $a=1.515625, b=1.5234375$
    *   $c = (1.515625+1.5234375)/2 = 1.51953125$
    *   $f(1.51953125) = \frac{\pi (1.51953125)^2}{3}(6 - 1.51953125) - 10 \approx 10.014 - 10 = 0.014$
    *   $f(1.515625) \cdot f(1.51953125) < 0$. New interval: $[1.515625, 1.51953125]$
*   **Iteration 11:**
    *   $a=1.515625, b=1.51953125$
    *   $c = (1.515625+1.51953125)/2 = 1.517578125$
    *   $f(1.517578125) = \frac{\pi (1.517578125)^2}{3}(6 - 1.517578125) - 10 \approx 9.981 - 10 = -0.019$
    *   $f(1.517578125) \cdot f(1.51953125) < 0$. New interval: $[1.517578125, 1.51953125]$
*   **Iteration 12:**
    *   $a=1.517578125, b=1.51953125$
    *   $c = (1.517578125+1.51953125)/2 = 1.5185546875$
    *   $f(1.5185546875) = \frac{\pi (1.5185546875)^2}{3}(6 - 1.5185546875) - 10 \approx 9.997 - 10 = -0.003$
    *   $f(1.5185546875) \cdot f(1.51953125) < 0$. New interval: $[1.5185546875, 1.51953125]$
*   **Iteration 13:**
    *   $a=1.5185546875, b=1.51953125$
    *   $c = (1.5185546875+1.51953125)/2 = 1.51904296875$
    *   $f(1.51904296875) \approx 10.005 - 10 = 0.005$
    *   Interval width: $1.51953125 - 1.5185546875 = 0.0009765625$.
    *   Since the interval width $0.0009765625$ is less than the tolerance $0.001$, we stop.

Approximate liquid depth $h \approx 1.519$ meters.

**Answer 3:**
The Bisection Method relies on the function changing sign within the interval. If a root has an even multiplicity (e.g., $f(x) = x^2$ at $x=0$ or $f(x) = (x-a)^2 g(x)$ where $g(a) \neq 0$), the function *touches* the x-axis at the root but does not cross it. In such cases, for an interval $[a, b]$ containing this root, $f(a)$ and $f(b)$ will have the same sign, and thus the condition $f(a) \cdot f(b) < 0$ will not be met. Consequently, the Bisection Method cannot bracket or find roots of even multiplicity. It is best suited for simple roots where the function changes sign.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 9. Further Reading and References

*   **Chapra, S. C., & Canale, R. P. (2010). *Numerical Methods for Engineers* (6th ed.). McGraw-Hill.** (Highly recommended for clear explanations and practical examples.)
*   **Gupta, S. K. (1995). *Numerical Methods for Engineers*. New Age International.**
*   **Balagurusamy, E. (2017). *Numerical Methods*. McGraw-Hill Education.**
*   **Gerald, C. F., & Wheatly, P. O. (2002). *Applied Numerical Analysis* (6th ed.). Addison Wesley.** (Provides a more theoretical treatment.)
*   **Jain, M. K., Iyengar, S. R. K., & Jain, R. K. (2012). *Numerical Methods for Scientific and Engineering Computation* (6th ed.). New Age International.** (Comprehensive coverage with advanced topics.)

---
This concludes the notes for the Bisection Method. The next steps would typically involve discussing other root-finding methods like the False Position Method, Secant Method, and Newton-Raphson Method, building upon the foundational understanding provided by the Bisection Method.