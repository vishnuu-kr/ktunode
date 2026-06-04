---
title: "Newton-Raphson Method"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 4: Newton"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81093b"
status: "completed"
scrapedAt: "2026-05-20T18:46:11.981Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 4: Newton
### Topic: Newton-Raphson Method

---

## 1. Introduction to the Newton-Raphson Method

The Newton-Raphson method, also known as Newton's method, is a powerful iterative numerical technique used to find successively better approximations to the roots (or zeroes) of a real-valued function. In essence, it helps us find values of $x$ for which $f(x) = 0$. This method is particularly useful when finding exact analytical solutions is difficult or impossible.

**Key Concept:** The core idea is to start with an initial guess and then iteratively improve that guess by approximating the function with its tangent line at the current guess. The next guess is the point where this tangent line intersects the x-axis.

**Learning Outcome 1:** Understand the geometrical interpretation of the Newton-Raphson method.

*   **Geometric Interpretation:**
    *   Start with an initial guess $x_0$ for the root of $f(x) = 0$.
    *   Find the tangent line to the curve $y = f(x)$ at the point $(x_0, f(x_0))$.
    *   The equation of the tangent line at $x_0$ is given by:
        $y - f(x_0) = f'(x_0)(x - x_0)$
        where $f'(x_0)$ is the derivative of $f(x)$ evaluated at $x_0$.
    *   The next approximation, $x_1$, is the x-intercept of this tangent line. To find the x-intercept, set $y = 0$:
        $0 - f(x_0) = f'(x_0)(x_1 - x_0)$
    *   Solving for $x_1$:
        $-f(x_0) = f'(x_0)x_1 - f'(x_0)x_0$
        $f'(x_0)x_1 = f'(x_0)x_0 - f(x_0)$
        $x_1 = x_0 - \frac{f(x_0)}{f'(x_0)}$

**Learning Outcome 2:** Derive the iterative formula for the Newton-Raphson method.

*   **Derivation of the Iterative Formula:**
    Following the geometric interpretation, the general iterative formula is obtained by replacing $x_0$ with $x_n$ and $x_1$ with $x_{n+1}$:
    $$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$
    This formula allows us to generate a sequence of approximations that, under certain conditions, converge to a root of the function.

**Key Concepts:**

*   **Root of a function:** A value $x$ such that $f(x) = 0$.
*   **Tangent line:** A line that touches a curve at a single point and has the same slope as the curve at that point.
*   **Iterative formula:** A formula that defines a sequence of values, where each value depends on the previous one(s).

---

## 2. Conditions for Convergence and Potential Issues

While powerful, the Newton-Raphson method is not guaranteed to converge for all functions and initial guesses. Understanding its limitations is crucial for its effective application.

**Learning Outcome 3:** Identify the conditions under which the Newton-Raphson method converges.

*   **Conditions for Convergence:**
    *   **Initial Guess Proximity:** The initial guess $x_0$ must be sufficiently close to an actual root.
    *   **Non-zero Derivative:** The derivative $f'(x)$ must be non-zero at the root and in its neighborhood. This ensures the tangent line is not horizontal and has a unique x-intercept.
    *   **Smoothness of the Function:** The function $f(x)$ should be "well-behaved" in the neighborhood of the root, meaning it should be continuous and have a continuous first derivative. Higher-order derivatives can also influence the rate of convergence.

*   **Convergence Rate:** The Newton-Raphson method exhibits **quadratic convergence** when it converges. This means that the number of correct significant digits roughly doubles with each iteration, making it very fast once it gets close to the root.

**Learning Outcome 4:** Discuss potential issues and limitations of the Newton-Raphson method.

*   **Potential Issues and Limitations:**
    *   **Divergence:** If the initial guess is too far from a root, the method might diverge, meaning the approximations move further away from any root.
    *   **Oscillation:** The approximations might oscillate back and forth around a root without converging.
    *   **Zero Derivative:** If $f'(x_n) \approx 0$ at some iteration $n$, the term $\frac{f(x_n)}{f'(x_n)}$ becomes very large, leading to a large jump and potential divergence or inaccurate results. This happens when the tangent line is nearly horizontal.
    *   **Local Minima/Maxima:** If the initial guess is near a local minimum or maximum where $f'(x) = 0$, the method can fail.
    *   **Cyclic Behavior:** In some cases, the sequence of approximations can enter a cycle of values without converging to a root.

**Key Concepts:**

*   **Convergence:** The process where a sequence of approximations gets arbitrarily close to the true value.
*   **Quadratic Convergence:** A rapid convergence where the error is proportional to the square of the previous error.
*   **Divergence:** The process where a sequence of approximations moves further away from the true value.
*   **Oscillation:** Repeatedly moving back and forth around a target value.

---

## 3. Applications of the Newton-Raphson Method

The Newton-Raphson method has wide-ranging applications in various fields of science and engineering.

**Learning Outcome 5:** Apply the Newton-Raphson method to solve problems in physical science.

*   **Examples in Physical Science:**

    *   **Finding roots of transcendental equations:** Many physical phenomena are described by equations that cannot be solved analytically, often involving trigonometric, exponential, or logarithmic functions. The Newton-Raphson method is ideal for finding the roots of such equations.

    *   **Example 1: Finding the root of $\cos(x) - x = 0$**
        This equation arises in various physics problems, such as calculating the equilibrium position of a pendulum.

        Let $f(x) = \cos(x) - x$.
        Then $f'(x) = -\sin(x) - 1$.

        The iterative formula is:
        $x_{n+1} = x_n - \frac{\cos(x_n) - x_n}{-\sin(x_n) - 1}$

        Let's choose an initial guess. Observing the function, $\cos(0) = 1$, so $f(0) = 1$. $\cos(\pi/2) = 0$, so $f(\pi/2) = -\pi/2 \approx -1.57$. The root is likely between 0 and $\pi/2$. Let's try $x_0 = 0.5$ radians.

        *   **Iteration 1:**
            $x_0 = 0.5$
            $f(0.5) = \cos(0.5) - 0.5 \approx 0.87758 - 0.5 = 0.37758$
            $f'(0.5) = -\sin(0.5) - 1 \approx -0.47943 - 1 = -1.47943$
            $x_1 = 0.5 - \frac{0.37758}{-1.47943} \approx 0.5 - (-0.25522) \approx 0.75522$

        *   **Iteration 2:**
            $x_1 = 0.75522$
            $f(0.75522) = \cos(0.75522) - 0.75522 \approx 0.72798 - 0.75522 = -0.02724$
            $f'(0.75522) = -\sin(0.75522) - 1 \approx -0.68416 - 1 = -1.68416$
            $x_2 = 0.75522 - \frac{-0.02724}{-1.68416} \approx 0.75522 - 0.01617 \approx 0.73905$

        *   **Iteration 3:**
            $x_2 = 0.73905$
            $f(0.73905) = \cos(0.73905) - 0.73905 \approx 0.73909 - 0.73905 = 0.00004$
            $f'(0.73905) = -\sin(0.73905) - 1 \approx -0.67362 - 1 = -1.67362$
            $x_3 = 0.73905 - \frac{0.00004}{-1.67362} \approx 0.73905 - (-0.00002) \approx 0.73907$

        The approximations are converging rapidly to a value around 0.739.

    *   **Example 2: Finding the square root of a number $a$**
        To find $\sqrt{a}$, we need to solve $x^2 = a$, or $x^2 - a = 0$.
        Let $f(x) = x^2 - a$.
        Then $f'(x) = 2x$.

        The iterative formula is:
        $x_{n+1} = x_n - \frac{x_n^2 - a}{2x_n}$
        $x_{n+1} = x_n - \frac{x_n}{2} + \frac{a}{2x_n}$
        $x_{n+1} = \frac{1}{2} \left( x_n + \frac{a}{x_n} \right)$

        This is known as the Babylonian method, which is a special case of Newton-Raphson.
        Let's find $\sqrt{2}$. So $a=2$.
        Initial guess: $x_0 = 1$.

        *   **Iteration 1:**
            $x_0 = 1$
            $x_1 = \frac{1}{2} \left( 1 + \frac{2}{1} \right) = \frac{1}{2}(1+2) = 1.5$

        *   **Iteration 2:**
            $x_1 = 1.5$
            $x_2 = \frac{1}{2} \left( 1.5 + \frac{2}{1.5} \right) = \frac{1}{2} \left( 1.5 + 1.3333 \right) = \frac{1}{2}(2.8333) \approx 1.4167$

        *   **Iteration 3:**
            $x_2 = 1.4167$
            $x_3 = \frac{1}{2} \left( 1.4167 + \frac{2}{1.4167} \right) = \frac{1}{2} \left( 1.4167 + 1.4117 \right) = \frac{1}{2}(2.8284) \approx 1.4142$

        This rapidly converges to $\sqrt{2} \approx 1.41421356$.

    *   **Optimization problems:** While primarily for finding roots, it can be adapted to find minima or maxima of a function by finding the roots of its derivative. If we want to find the minimum of $g(x)$, we find the root of $g'(x) = 0$.

**Key Concepts:**

*   **Transcendental equations:** Equations involving non-algebraic functions.
*   **Babylonian method:** A specific application of Newton-Raphson for square root calculation.

---

## 4. Implementing the Newton-Raphson Method

To practically use the Newton-Raphson method, one needs to define the function, its derivative, and the stopping criterion.

**Learning Outcome 6:** Implement the Newton-Raphson method for a given problem.

*   **Steps for Implementation:**
    1.  **Define the function $f(x)$** for which you want to find a root.
    2.  **Calculate the derivative $f'(x)$** of the function.
    3.  **Choose an initial guess $x_0$.** This choice is critical.
    4.  **Set a stopping criterion.** This could be:
        *   **Maximum number of iterations:** Stop after a fixed number of steps.
        *   **Tolerance on the function value:** Stop when $|f(x_n)| < \epsilon$, where $\epsilon$ is a small positive number.
        *   **Tolerance on the step size:** Stop when $|x_{n+1} - x_n| < \delta$, where $\delta$ is a small positive number.
    5.  **Iteratively apply the formula:** $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ until the stopping criterion is met.

*   **Pseudocode:**

    ```
    function NewtonRaphson(f, df, x0, tolerance, max_iterations):
        x = x0
        for i from 0 to max_iterations:
            f_val = f(x)
            df_val = df(x)

            if abs(f_val) < tolerance:
                return x  // Found a root within tolerance

            if df_val == 0:
                print("Error: Derivative is zero. Cannot continue.")
                return None // Or handle error appropriately

            x_new = x - f_val / df_val

            if abs(x_new - x) < tolerance:
                return x_new // Converged within tolerance

            x = x_new
        
        print("Warning: Maximum iterations reached. Result may not be accurate.")
        return x // Return the last approximation
    ```

**Key Concepts:**

*   **Stopping criterion:** A condition used to terminate an iterative process.
*   **Tolerance:** A small value used to define acceptable error margins.
*   **Pseudocode:** A high-level description of an algorithm.

---

## 5. Practice Questions and Exercises

**Question 1:**
Find a root of the equation $f(x) = x^3 - 2x - 5 = 0$ using the Newton-Raphson method. Use an initial guess of $x_0 = 2$. Perform at least three iterations.

**Solution 1:**
$f(x) = x^3 - 2x - 5$
$f'(x) = 3x^2 - 2$

Iterative formula: $x_{n+1} = x_n - \frac{x_n^3 - 2x_n - 5}{3x_n^2 - 2}$

*   **Iteration 1:**
    $x_0 = 2$
    $f(2) = 2^3 - 2(2) - 5 = 8 - 4 - 5 = -1$
    $f'(2) = 3(2^2) - 2 = 3(4) - 2 = 12 - 2 = 10$
    $x_1 = 2 - \frac{-1}{10} = 2 + 0.1 = 2.1$

*   **Iteration 2:**
    $x_1 = 2.1$
    $f(2.1) = (2.1)^3 - 2(2.1) - 5 = 9.261 - 4.2 - 5 = 0.061$
    $f'(2.1) = 3(2.1)^2 - 2 = 3(4.41) - 2 = 13.23 - 2 = 11.23$
    $x_2 = 2.1 - \frac{0.061}{11.23} \approx 2.1 - 0.00543 \approx 2.09457$

*   **Iteration 3:**
    $x_2 = 2.09457$
    $f(2.09457) = (2.09457)^3 - 2(2.09457) - 5 \approx 9.1996 - 4.18914 - 5 \approx 0.01046$
    $f'(2.09457) = 3(2.09457)^2 - 2 \approx 3(4.3872) - 2 \approx 13.1616 - 2 \approx 11.1616$
    $x_3 = 2.09457 - \frac{0.01046}{11.1616} \approx 2.09457 - 0.00094 \approx 2.09363$

The root is approximately 2.09363.

**Question 2:**
Derive the Newton-Raphson formula for finding the cube root of a number $a$.

**Solution 2:**
To find the cube root of $a$, we need to solve $x^3 = a$, which can be written as $f(x) = x^3 - a = 0$.
The derivative of $f(x)$ is $f'(x) = 3x^2$.

Using the Newton-Raphson iterative formula:
$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$
$x_{n+1} = x_n - \frac{x_n^3 - a}{3x_n^2}$
$x_{n+1} = x_n - \left( \frac{x_n^3}{3x_n^2} - \frac{a}{3x_n^2} \right)$
$x_{n+1} = x_n - \left( \frac{x_n}{3} - \frac{a}{3x_n^2} \right)$
$x_{n+1} = x_n - \frac{x_n}{3} + \frac{a}{3x_n^2}$
$x_{n+1} = \frac{3x_n - x_n}{3} + \frac{a}{3x_n^2}$
$x_{n+1} = \frac{2x_n}{3} + \frac{a}{3x_n^2}$
$x_{n+1} = \frac{1}{3} \left( 2x_n + \frac{a}{x_n^2} \right)$

**Question 3:**
Consider the function $f(x) = e^x - x - 2$. Explain why an initial guess of $x_0 = 0$ might lead to issues with the Newton-Raphson method.

**Solution 3:**
$f(x) = e^x - x - 2$
$f'(x) = e^x - 1$

If we choose $x_0 = 0$:
$f'(x_0) = f'(0) = e^0 - 1 = 1 - 1 = 0$.
The Newton-Raphson formula involves dividing by $f'(x_n)$. If $f'(x_n) = 0$, the method fails because the tangent line at that point is horizontal and does not intersect the x-axis (or it's the same as the function if $f(x_n)$ is also 0, which isn't the case here). This prevents the calculation of the next approximation.

**Question 4:**
Apply the Newton-Raphson method to find the minimum of the function $g(x) = x^4 - 3x^2 + 2$. Use an initial guess of $x_0 = 0.5$.

**Solution 4:**
To find the minimum of $g(x)$, we need to find the roots of its derivative, $g'(x)$.
$g(x) = x^4 - 3x^2 + 2$
$g'(x) = 4x^3 - 6x$

Now, we apply the Newton-Raphson method to $f(x) = g'(x) = 4x^3 - 6x$.
The derivative of $f(x)$ is $f'(x) = g''(x) = 12x^2 - 6$.

The iterative formula is:
$x_{n+1} = x_n - \frac{4x_n^3 - 6x_n}{12x_n^2 - 6}$

Initial guess: $x_0 = 0.5$

*   **Iteration 1:**
    $x_0 = 0.5$
    $f(0.5) = 4(0.5)^3 - 6(0.5) = 4(0.125) - 3 = 0.5 - 3 = -2.5$
    $f'(0.5) = 12(0.5)^2 - 6 = 12(0.25) - 6 = 3 - 6 = -3$
    $x_1 = 0.5 - \frac{-2.5}{-3} = 0.5 - \frac{2.5}{3} \approx 0.5 - 0.8333 \approx -0.3333$

*   **Iteration 2:**
    $x_1 = -0.3333$
    $f(-0.3333) = 4(-0.3333)^3 - 6(-0.3333) \approx 4(-0.0370) + 2 \approx -0.148 + 2 \approx 1.852$
    $f'(-0.3333) = 12(-0.3333)^2 - 6 \approx 12(0.1111) - 6 \approx 1.3332 - 6 \approx -4.6668$
    $x_2 = -0.3333 - \frac{1.852}{-4.6668} \approx -0.3333 - (-0.3968) \approx 0.0635$

*   **Iteration 3:**
    $x_2 = 0.0635$
    $f(0.0635) = 4(0.0635)^3 - 6(0.0635) \approx 4(0.000256) - 0.381 \approx 0.001024 - 0.381 \approx -0.379976$
    $f'(0.0635) = 12(0.0635)^2 - 6 \approx 12(0.004032) - 6 \approx 0.048384 - 6 \approx -5.9516$
    $x_3 = 0.0635 - \frac{-0.379976}{-5.9516} \approx 0.0635 - 0.06385 \approx -0.00035$

The approximations are converging towards 0. Let's check the actual roots of $g'(x) = 4x^3 - 6x = 0$:
$2x(2x^2 - 3) = 0$
So, $x=0$ or $2x^2 = 3 \implies x^2 = 3/2 \implies x = \pm \sqrt{3/2} \approx \pm 1.2247$.

The initial guess of $x_0=0.5$ led to oscillations around $x=0$, which is an extremum. Let's re-evaluate the problem: the question asks for the minimum. The roots of $g'(x)$ are critical points, which can be minima, maxima, or inflection points.

If we choose an initial guess closer to one of the other roots, say $x_0 = 1.2$:
*   **Iteration 1:**
    $x_0 = 1.2$
    $f(1.2) = 4(1.2)^3 - 6(1.2) = 4(1.728) - 7.2 = 6.912 - 7.2 = -0.288$
    $f'(1.2) = 12(1.2)^2 - 6 = 12(1.44) - 6 = 17.28 - 6 = 11.28$
    $x_1 = 1.2 - \frac{-0.288}{11.28} \approx 1.2 - (-0.0255) \approx 1.2255$

*   **Iteration 2:**
    $x_1 = 1.2255$
    $f(1.2255) \approx 4(1.8396) - 6(1.2255) \approx 7.3584 - 7.353 \approx 0.0054$
    $f'(1.2255) \approx 12(1.5017) - 6 \approx 18.0204 - 6 \approx 12.0204$
    $x_2 = 1.2255 - \frac{0.0054}{12.0204} \approx 1.2255 - 0.00045 \approx 1.22505$

This converges to $\sqrt{3/2} \approx 1.2247$.
To determine if it's a minimum or maximum, we check the second derivative $g''(x) = 12x^2 - 6$:
*   At $x \approx 1.225$, $g''(1.225) \approx 12(1.225)^2 - 6 \approx 12(1.5006) - 6 \approx 18.007 - 6 \approx 12.007 > 0$, indicating a local minimum.
*   At $x \approx -1.225$, $g''(-1.225) \approx 12(-1.225)^2 - 6 \approx 12(1.5006) - 6 \approx 18.007 - 6 \approx 12.007 > 0$, indicating a local minimum.
*   At $x=0$, $g''(0) = 12(0)^2 - 6 = -6 < 0$, indicating a local maximum.

Therefore, the Newton-Raphson method applied to $g'(x)$ can find minima by locating the roots of $g'(x)$ where $g''(x)>0$. The initial guess $x_0=0.5$ was close to the maximum, causing convergence towards it. A better initial guess (like 1.2 or -1.2) is needed to find the minima.

---

## 6. Important Points to Remember

*   The Newton-Raphson method provides a fast (quadratic) convergence when it works.
*   The formula is $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$.
*   An accurate initial guess is crucial for convergence.
*   The method fails if the derivative $f'(x_n)$ is zero at any step.
*   It can be used to find roots of $f(x)=0$ or to find extrema of $g(x)$ by finding the roots of $g'(x)=0$.
*   Always check for potential issues like division by zero or behavior near extrema.

---
