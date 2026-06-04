---
title: "Newton-Raphson Method"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 4: Newton"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ed1"
status: "completed"
scrapedAt: "2026-05-20T17:54:51.080Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 4: Newton

### Topic: Newton-Raphson Method

**Course Outcomes Alignment:** This topic primarily contributes to **CO4: Apply numerical methods to find solutions of linear system of equations, ordinary differential equations and Laplace equations.** While the Newton-Raphson method itself doesn't directly solve these, it's a fundamental tool for finding roots of equations, which is often a prerequisite for solving differential equations (e.g., finding equilibrium points) or solving systems of equations that arise in various scientific applications. The knowledge level is **K3 (Application)** as students will be expected to apply this method to solve real-world problems.

**Learning Outcomes:**

*   Understand the principle behind the Newton-Raphson method for finding roots of equations.
*   Derive the iterative formula for the Newton-Raphson method.
*   Apply the Newton-Raphson method to find approximate solutions to equations.
*   Analyze the convergence properties of the Newton-Raphson method.
*   Identify potential pitfalls and limitations of the Newton-Raphson method.

### 1. Introduction: The Need for Numerical Root Finding

In many physical science applications, we encounter equations that are difficult or impossible to solve analytically (i.e., finding an exact symbolic solution). These equations often arise from:

*   **Modeling physical phenomena:** Differential equations, transcendental equations (e.g., involving trigonometric, exponential, or logarithmic functions).
*   **Optimization problems:** Finding critical points where the derivative of a function is zero.
*   **Solving systems of non-linear equations.**

When analytical solutions are elusive, numerical methods provide a powerful way to find approximate solutions to these equations. The Newton-Raphson method is one of the most widely used and efficient numerical techniques for finding the roots of a single-variable equation.

### 2. The Principle of the Newton-Raphson Method

The Newton-Raphson method is an iterative approach that starts with an initial guess for the root and refines it in successive steps to get closer and closer to the actual root. The core idea is to approximate the function by its tangent line at the current estimate of the root and then find where this tangent line intersects the x-axis. This intersection point serves as the next, hopefully better, estimate of the root.

**Key Concept:** Linear approximation using tangent lines.

### 3. Derivation of the Iterative Formula

Consider an equation $f(x) = 0$ for which we want to find a root.

Let $x_n$ be the current approximation of the root.
We want to find a better approximation, $x_{n+1}$.

Using a Taylor series expansion of $f(x)$ around $x_n$:
$f(x) = f(x_n) + f'(x_n)(x - x_n) + \frac{f''(x_n)}{2!}(x - x_n)^2 + \dots$

If we truncate the Taylor series after the first derivative term, we get a linear approximation of $f(x)$ around $x_n$:
$f(x) \approx f(x_n) + f'(x_n)(x - x_n)$

We are looking for the root, so we set $f(x) = 0$. The next approximation, $x_{n+1}$, is the value of $x$ where this linear approximation equals zero:
$0 = f(x_n) + f'(x_n)(x_{n+1} - x_n)$

Now, we rearrange to solve for $x_{n+1}$:
$-f(x_n) = f'(x_n)(x_{n+1} - x_n)$

Assuming $f'(x_n) \neq 0$:
$\frac{-f(x_n)}{f'(x_n)} = x_{n+1} - x_n$

$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$

This is the **Newton-Raphson iterative formula**.

**Important Point:** The Newton-Raphson method requires the derivative of the function $f(x)$, denoted as $f'(x)$.

### 4. Algorithm for the Newton-Raphson Method

1.  **Define the function:** Clearly state the function $f(x)$ for which you want to find the root.
2.  **Calculate the derivative:** Find the derivative of the function, $f'(x)$.
3.  **Choose an initial guess:** Select an initial approximation for the root, $x_0$. This guess should ideally be "close enough" to the actual root for the method to converge.
4.  **Iterate:** Apply the Newton-Raphson formula repeatedly:
    $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$
5.  **Convergence Criteria:** Stop iterating when one of the following conditions is met:
    *   **Small function value:** $|f(x_n)| < \epsilon_1$, where $\epsilon_1$ is a small tolerance.
    *   **Small change in estimate:** $|x_{n+1} - x_n| < \epsilon_2$, where $\epsilon_2$ is a small tolerance.
    *   **Maximum number of iterations reached:** To prevent infinite loops.

**Reference:** Sastry, S. S. (2012). *Introductory Methods of Numerical Analysis.* (5th ed.). PHI Learning Pvt Limited. Chapter 2, "Solution of Algebraic and Transcendental Equations," discusses methods like the Newton-Raphson method in detail.

### 5. Examples

**Example 1: Finding the root of $f(x) = x^2 - 4$**

We want to find the roots of $x^2 - 4 = 0$. We know the roots are $x = 2$ and $x = -2$. Let's use Newton-Raphson to find the positive root.

1.  **Function:** $f(x) = x^2 - 4$
2.  **Derivative:** $f'(x) = 2x$
3.  **Initial Guess:** Let's choose $x_0 = 3$.
4.  **Iteration 1:**
    $x_1 = x_0 - \frac{f(x_0)}{f'(x_0)} = 3 - \frac{f(3)}{f'(3)} = 3 - \frac{3^2 - 4}{2 \times 3} = 3 - \frac{9 - 4}{6} = 3 - \frac{5}{6} = 3 - 0.8333 = 2.1667$
5.  **Iteration 2:**
    $x_2 = x_1 - \frac{f(x_1)}{f'(x_1)} = 2.1667 - \frac{(2.1667)^2 - 4}{2 \times 2.1667} = 2.1667 - \frac{4.6944 - 4}{4.3334} = 2.1667 - \frac{0.6944}{4.3334} = 2.1667 - 0.1603 = 2.0064$
6.  **Iteration 3:**
    $x_3 = x_2 - \frac{f(x_2)}{f'(x_2)} = 2.0064 - \frac{(2.0064)^2 - 4}{2 \times 2.0064} = 2.0064 - \frac{4.0256 - 4}{4.0128} = 2.0064 - \frac{0.0256}{4.0128} = 2.0064 - 0.0064 = 2.0000$

The method quickly converges to the root $x = 2$.

**Example 2: Finding the square root of a number (e.g., $\sqrt{5}$)**

To find $\sqrt{5}$, we need to solve the equation $x = \sqrt{5}$, which can be rewritten as $x^2 = 5$, or $f(x) = x^2 - 5 = 0$.

1.  **Function:** $f(x) = x^2 - 5$
2.  **Derivative:** $f'(x) = 2x$
3.  **Initial Guess:** We know $\sqrt{5}$ is between 2 and 3. Let's choose $x_0 = 2$.
4.  **Iteration 1:**
    $x_1 = 2 - \frac{2^2 - 5}{2 \times 2} = 2 - \frac{4 - 5}{4} = 2 - \frac{-1}{4} = 2 + 0.25 = 2.25$
5.  **Iteration 2:**
    $x_2 = 2.25 - \frac{(2.25)^2 - 5}{2 \times 2.25} = 2.25 - \frac{5.0625 - 5}{4.5} = 2.25 - \frac{0.0625}{4.5} = 2.25 - 0.01389 = 2.23611$
6.  **Iteration 3:**
    $x_3 = 2.23611 - \frac{(2.23611)^2 - 5}{2 \times 2.23611} = 2.23611 - \frac{5.000019 - 5}{4.47222} = 2.23611 - \frac{0.000019}{4.47222} \approx 2.23611 - 0.000004 = 2.23607$

The true value of $\sqrt{5}$ is approximately $2.236067977$. The method converges very rapidly.

**Example 3: Solving a transcendental equation ($f(x) = \cos(x) - x$)**

We want to find the root of $\cos(x) - x = 0$.

1.  **Function:** $f(x) = \cos(x) - x$
2.  **Derivative:** $f'(x) = -\sin(x) - 1$
3.  **Initial Guess:** From a graph or rough estimation, the root appears to be around 0.7 radians. Let's choose $x_0 = 0.5$.
4.  **Iteration 1:**
    $x_1 = 0.5 - \frac{\cos(0.5) - 0.5}{-\sin(0.5) - 1} = 0.5 - \frac{0.87758 - 0.5}{-0.47943 - 1} = 0.5 - \frac{0.37758}{-1.47943} = 0.5 - (-0.25522) = 0.75522$
5.  **Iteration 2:**
    $x_2 = 0.75522 - \frac{\cos(0.75522) - 0.75522}{-\sin(0.75522) - 1} = 0.75522 - \frac{0.72795 - 0.75522}{-0.68189 - 1} = 0.75522 - \frac{-0.02727}{-1.68189} = 0.75522 - 0.01621 = 0.73901$
6.  **Iteration 3:**
    $x_3 = 0.73901 - \frac{\cos(0.73901) - 0.73901}{-\sin(0.73901) - 1} = 0.73901 - \frac{0.73909 - 0.73901}{-0.67198 - 1} = 0.73901 - \frac{0.00008}{-1.67198} \approx 0.73901 - (-0.000048) \approx 0.739058$

The root is approximately $0.739085$.

### 6. Convergence of the Newton-Raphson Method

The speed at which the Newton-Raphson method approaches the root is a crucial aspect.

**Key Concept:** Quadratic Convergence.

Under certain conditions, the Newton-Raphson method exhibits **quadratic convergence**. This means that the error in each iteration is roughly proportional to the square of the error in the previous iteration. If the error at step $n$ is $e_n = x_n - r$ (where $r$ is the true root), then $e_{n+1} \approx K e_n^2$ for some constant $K$. This leads to very rapid convergence when close to the root.

**Conditions for Quadratic Convergence:**

1.  $f'(r) \neq 0$ (the derivative at the root is not zero).
2.  $f''(x)$ is continuous in an interval around $r$.
3.  The initial guess $x_0$ is sufficiently close to the root $r$.

**Reference:** Chapra and Canale (2021) in *Numerical methods for Engineers* discuss the convergence analysis of iterative methods, including Newton-Raphson, in detail.

### 7. Potential Pitfalls and Limitations

While powerful, the Newton-Raphson method is not foolproof and can fail or perform poorly under certain circumstances.

*   **Division by Zero or Near-Zero Derivative ($f'(x_n) \approx 0$):**
    If the derivative of the function is zero or very close to zero at an iteration point, the next estimate $x_{n+1}$ can become very large (or go to infinity), leading to divergence. This occurs at horizontal tangents or inflection points where the tangent line is nearly horizontal.
    *   **Example:** Finding the root of $f(x) = x^3$ at $x=0$. $f'(x) = 3x^2$. If $x_0 = 0$, $f'(0) = 0$, and the method fails. If $x_0$ is very close to 0, convergence will be slow.

*   **Poor Initial Guess ($x_0$):**
    If the initial guess is too far from the actual root, the method may converge to a different root, diverge, or oscillate. The convergence behavior is highly dependent on the initial guess.
    *   **Example:** For $f(x) = x^3 - 2x + 2$, the roots are approximately -1.769, 0.784 + 0.978i, and 0.784 - 0.978i. If we start with $x_0 = 0$, $f'(x) = 3x^2 - 2$. $x_1 = 0 - (2)/(-2) = 1$. $x_2 = 1 - (1-2+2)/(3-2) = 1 - 1/1 = 0$. The method oscillates between 0 and 1 and does not converge to the real root.

*   **Oscillation:**
    The iterates might oscillate back and forth without approaching a root.

*   **Divergence:**
    The iterates might move further away from the root. This is often due to a poor initial guess or a function with unfavorable characteristics (e.g., steep slopes causing overshooting).

*   **Finding Complex Roots:**
    The standard Newton-Raphson method is for real roots. Extensions exist for finding complex roots.

*   **Multiple Roots:**
    If $f(r) = 0$ and $f'(r) = 0$, then $r$ is a multiple root. The convergence of Newton-Raphson deteriorates to linear convergence in such cases, making it slower.

**Reference:** Devore (2016) in *Probability and Statistics for Engineering and the Sciences* might not directly cover numerical methods in detail, but the underlying mathematical principles of function behavior are relevant. Chapra and Canale (2021) provide excellent graphical illustrations and explanations of these pitfalls.

### 8. Enhancements and Variations

*   **Secant Method:** If computing the derivative is difficult or expensive, the secant method can be used. It approximates the derivative using a finite difference of the function values at the two previous points.
    $x_{n+1} = x_n - f(x_n) \frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$
    The secant method has superlinear convergence (between linear and quadratic).

*   **Modified Newton-Raphson for Multiple Roots:** When dealing with multiple roots where $f'(r) = 0$, a modification can restore quadratic convergence. For a root of multiplicity $m$, the modified formula is:
    $x_{n+1} = x_n - m \frac{f(x_n)}{f'(x_n)}$

### 9. Applications in Physical Science

The Newton-Raphson method is a versatile tool with applications across physical sciences:

*   **Astrophysics:** Calculating orbital elements, solving Kepler's equation.
*   **Quantum Mechanics:** Finding energy levels of atoms and molecules by solving characteristic equations.
*   **Thermodynamics:** Determining phase equilibrium conditions, solving equations of state.
*   **Fluid Dynamics:** Finding flow regimes or critical parameters.
*   **Solid State Physics:** Calculating band structures or defect properties.
*   **Signal Processing:** Finding frequencies or parameters of models.
*   **Optimization:** Finding minima or maxima by finding roots of the derivative.

### 10. Practice Questions and Exercises

**Instructions:** For each question, clearly state your chosen initial guess and show at least 3-4 iterations. Use a calculator for computations.

**Exercise 1:**
Find a root of the equation $f(x) = x^3 - x - 1 = 0$ using the Newton-Raphson method. Choose an initial guess $x_0 = 1$.

**Exercise 2:**
Find the positive root of $f(x) = e^x - 2x - 1 = 0$ using the Newton-Raphson method. Choose an initial guess $x_0 = 1$.

**Exercise 3:**
Estimate $\sqrt{10}$ using the Newton-Raphson method by solving $f(x) = x^2 - 10 = 0$. Choose an initial guess $x_0 = 3$.

**Exercise 4:**
Find a root of the equation $f(x) = \sin(x) - \frac{x}{2} = 0$ using the Newton-Raphson method. Choose an initial guess $x_0 = 2$. (Hint: Ensure your calculator is in radian mode).

**Exercise 5 (Conceptual):**
For the function $f(x) = x^{1/3}$, what happens if you try to use the Newton-Raphson method to find its root at $x=0$? Explain why.

---

### Answers to Practice Questions

**Answer to Exercise 1:**
$f(x) = x^3 - x - 1$
$f'(x) = 3x^2 - 1$
$x_0 = 1$

*   **Iteration 1:**
    $x_1 = 1 - \frac{1^3 - 1 - 1}{3(1)^2 - 1} = 1 - \frac{-1}{2} = 1 + 0.5 = 1.5$
*   **Iteration 2:**
    $x_2 = 1.5 - \frac{(1.5)^3 - 1.5 - 1}{3(1.5)^2 - 1} = 1.5 - \frac{3.375 - 1.5 - 1}{3(2.25) - 1} = 1.5 - \frac{0.875}{6.75 - 1} = 1.5 - \frac{0.875}{5.75} \approx 1.5 - 0.15217 = 1.34783$
*   **Iteration 3:**
    $x_3 = 1.34783 - \frac{(1.34783)^3 - 1.34783 - 1}{3(1.34783)^2 - 1} = 1.34783 - \frac{2.4469 - 1.34783 - 1}{3(1.8166) - 1} = 1.34783 - \frac{0.09907}{5.4498 - 1} = 1.34783 - \frac{0.09907}{4.4498} \approx 1.34783 - 0.02226 = 1.32557$
*   **Iteration 4:**
    $x_4 = 1.32557 - \frac{(1.32557)^3 - 1.32557 - 1}{3(1.32557)^2 - 1} = 1.32557 - \frac{2.3292 - 1.32557 - 1}{3(1.7571) - 1} = 1.32557 - \frac{0.00363}{5.2713 - 1} = 1.32557 - \frac{0.00363}{4.2713} \approx 1.32557 - 0.00085 = 1.32472$

The root is approximately $1.3247$.

**Answer to Exercise 2:**
$f(x) = e^x - 2x - 1$
$f'(x) = e^x - 2$
$x_0 = 1$

*   **Iteration 1:**
    $x_1 = 1 - \frac{e^1 - 2(1) - 1}{e^1 - 2} = 1 - \frac{2.71828 - 2 - 1}{2.71828 - 2} = 1 - \frac{-0.28172}{0.71828} \approx 1 - (-0.3922) = 1.3922$
*   **Iteration 2:**
    $x_2 = 1.3922 - \frac{e^{1.3922} - 2(1.3922) - 1}{e^{1.3922} - 2} = 1.3922 - \frac{4.0239 - 2.7844 - 1}{4.0239 - 2} = 1.3922 - \frac{0.2395}{2.0239} \approx 1.3922 - 0.1183 = 1.2739$
*   **Iteration 3:**
    $x_3 = 1.2739 - \frac{e^{1.2739} - 2(1.2739) - 1}{e^{1.2739} - 2} = 1.2739 - \frac{3.5745 - 2.5478 - 1}{3.5745 - 2} = 1.2739 - \frac{0.0267}{1.5745} \approx 1.2739 - 0.01696 = 1.25694$
*   **Iteration 4:**
    $x_4 = 1.25694 - \frac{e^{1.25694} - 2(1.25694) - 1}{e^{1.25694} - 2} = 1.25694 - \frac{3.5135 - 2.51388 - 1}{3.5135 - 2} = 1.25694 - \frac{-0.00038}{1.5135} \approx 1.25694 - (-0.00025) \approx 1.25719$

The positive root is approximately $1.2564$. (Note: There's also a root at $x=0$).

**Answer to Exercise 3:**
$f(x) = x^2 - 10$
$f'(x) = 2x$
$x_0 = 3$

*   **Iteration 1:**
    $x_1 = 3 - \frac{3^2 - 10}{2(3)} = 3 - \frac{9 - 10}{6} = 3 - \frac{-1}{6} = 3 + 0.16667 = 3.16667$
*   **Iteration 2:**
    $x_2 = 3.16667 - \frac{(3.16667)^2 - 10}{2(3.16667)} = 3.16667 - \frac{10.02778 - 10}{6.33334} = 3.16667 - \frac{0.02778}{6.33334} \approx 3.16667 - 0.00438 = 3.16229$
*   **Iteration 3:**
    $x_3 = 3.16229 - \frac{(3.16229)^2 - 10}{2(3.16229)} = 3.16229 - \frac{9.99999 - 10}{6.32458} = 3.16229 - \frac{-0.00001}{6.32458} \approx 3.16229 - (-0.0000016) \approx 3.16229$

The root is approximately $3.16228$ ($\sqrt{10}$).

**Answer to Exercise 4:**
$f(x) = \sin(x) - \frac{x}{2}$
$f'(x) = \cos(x) - \frac{1}{2}$
$x_0 = 2$

*   **Iteration 1:**
    $x_1 = 2 - \frac{\sin(2) - 2/2}{\cos(2) - 1/2} = 2 - \frac{0.90930 - 1}{-0.41615 - 0.5} = 2 - \frac{-0.09070}{-0.91615} \approx 2 - 0.09900 = 1.90100$
*   **Iteration 2:**
    $x_2 = 1.90100 - \frac{\sin(1.90100) - 1.90100/2}{\cos(1.90100) - 1/2} = 1.90100 - \frac{0.94469 - 0.95050}{-0.32850 - 0.5} = 1.90100 - \frac{-0.00581}{-0.82850} \approx 1.90100 - 0.00701 = 1.89399$
*   **Iteration 3:**
    $x_3 = 1.89399 - \frac{\sin(1.89399) - 1.89399/2}{\cos(1.89399) - 1/2} = 1.89399 - \frac{0.94768 - 0.946995}{-0.31926 - 0.5} = 1.89399 - \frac{0.000685}{-0.81926} \approx 1.89399 - (-0.000836) \approx 1.89483$

The root is approximately $1.895$.

**Answer to Exercise 5:**
For $f(x) = x^{1/3}$, we have $f(0) = 0$, so $x=0$ is the root.
The derivative is $f'(x) = \frac{1}{3}x^{-2/3} = \frac{1}{3x^{2/3}}$.
If we try to use the Newton-Raphson method starting with any initial guess $x_0$, at the point where $x=0$, the derivative $f'(0)$ is undefined (division by zero). This means the tangent line is vertical at the root, and the method fails because it cannot find an x-intercept for the tangent. Even if the initial guess is not 0, as it approaches 0, $f'(x)$ approaches infinity, making the correction term $\frac{f(x)}{f'(x)}$ very small, leading to slow convergence.

### 11. Important Points to Remember

*   **Iterative Method:** Newton-Raphson is an iterative process that refines an initial guess.
*   **Derivative Required:** The method requires the calculation of the function's derivative.
*   **Quadratic Convergence:** Exhibits rapid convergence when close to the root.
*   **Initial Guess is Crucial:** A good initial guess is vital for convergence and accuracy.
*   **Potential for Divergence:** Can diverge or oscillate if the initial guess is poor or if the derivative is zero/near-zero.
*   **Handle Division by Zero:** Always check if $f'(x_n)$ is close to zero before proceeding with an iteration.
*   **Stop Criteria:** Use appropriate convergence criteria (e.g., small function value or small change in $x$).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
