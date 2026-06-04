---
title: "Solving Difference Equations Using the Unilateral z Transform"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b179"
status: "completed"
scrapedAt: "2026-05-20T16:16:09.188Z"
---
## SIGNALS AND SYSTEMS - Module 4: Z Transform - Solving Difference Equations Using the Unilateral z Transform

**Introduction:** This module focuses on solving difference equations using the unilateral Z-transform. The unilateral Z-transform is particularly useful for analyzing causal systems with initial conditions.  Difference equations describe the relationship between the input and output of a discrete-time system. The Z-transform allows us to convert these difference equations into algebraic equations, which are easier to solve.

**Learning Outcomes:**

*   Understand the concept of the unilateral Z-transform.
*   Apply the unilateral Z-transform to solve linear constant-coefficient difference equations.
*   Incorporate initial conditions when solving difference equations.
*   Determine the output of a system given its difference equation, input, and initial conditions.

**1. Key Concepts and Definitions**

*   **Difference Equation:** A mathematical equation that relates the output of a discrete-time system to its past and present inputs.  A general form is:

    `y[n] + a1 y[n-1] + a2 y[n-2] + ... + aN y[n-N] = b0 x[n] + b1 x[n-1] + ... + bM x[n-M]`

    where:
    *   `y[n]` is the output at time `n`
    *   `x[n]` is the input at time `n`
    *   `a1, a2, ..., aN` and `b0, b1, ..., bM` are constant coefficients.

*   **Unilateral Z-transform:**  The unilateral Z-transform, also called the one-sided Z-transform, is defined as:

    `X(z) = Z{x[n]} = Σ[n=0 to ∞] x[n]z^(-n)`

    *   **Key Difference from Bilateral Z-transform:**  The unilateral Z-transform only considers values of `x[n]` for `n >= 0`. This is crucial for incorporating initial conditions.

*   **Initial Conditions:** The values of the output signal `y[n]` at times prior to the starting point (`n=0`).  For example, `y[-1]`, `y[-2]`, etc. These values are essential for finding the unique solution of the difference equation.

**2. Properties of the Unilateral Z-transform (Crucial for solving difference equations)**

*   **Linearity:** `Z{a x[n] + b y[n]} = a X(z) + b Y(z)` where a and b are constants.

*   **Time-Shifting (Delay) Property (Most Important):**  This property accounts for the initial conditions.

    *   `Z{y[n-1]} = z^(-1) Y(z) + y[-1]`
    *   `Z{y[n-2]} = z^(-2) Y(z) + z^(-1) y[-1] + y[-2]`
    *   In general: `Z{y[n-k]} = z^(-k) Y(z) + Σ[i=1 to k] y[-i] z^(-(k-i))`

    **Important Note:** These are the key properties that make the unilateral Z-transform suitable for solving difference equations with initial conditions.  The bilateral Z-transform does *not* directly incorporate initial conditions in this convenient manner.

*   **Advance Property (Less commonly used in this context, but included for completeness):**
    *   `Z{y[n+1]} = z Y(z) - z y[0]`
    *   `Z{y[n+2]} = z^2 Y(z) - z^2 y[0] - z y[1]`

**3. Solving Difference Equations Using the Unilateral Z-transform: Step-by-Step**

1.  **Take the Unilateral Z-transform of both sides of the difference equation:** Apply the linearity and time-shifting properties.  Remember to carefully incorporate the initial conditions using the delay property.

2.  **Algebraically solve for Y(z):** Rearrange the equation to isolate `Y(z)` on one side. This will result in an expression for `Y(z)` in terms of `X(z)`, `z`, and the initial conditions.

3.  **Perform Partial Fraction Expansion (if necessary):**  Decompose `Y(z)` into simpler terms. This is usually required to make it easier to find the inverse Z-transform.  The form of the partial fraction expansion depends on the poles of `Y(z)`.

4.  **Take the Inverse Unilateral Z-transform of Y(z):**  Find the discrete-time signal `y[n]` corresponding to `Y(z)`.  Use a Z-transform table and the linearity property. The result `y[n]` represents the solution to the difference equation for `n >= 0`.

**4. Example 1**

Solve the difference equation: `y[n] - (1/2) y[n-1] = x[n]`

Given:
*   `x[n] = u[n]` (unit step function)
*   `y[-1] = 1`

**Solution:**

1.  **Take the Z-transform:**

    `Z{y[n] - (1/2) y[n-1]} = Z{x[n]}`

    `Y(z) - (1/2) [z^(-1) Y(z) + y[-1]] = X(z)`

    `Y(z) - (1/2) z^(-1) Y(z) - (1/2) y[-1] = X(z)`

2.  **Substitute values and solve for Y(z):**

    `X(z) = Z{u[n]} = z / (z - 1)`

    `Y(z) - (1/2) z^(-1) Y(z) - (1/2) (1) = z / (z - 1)`

    `Y(z) [1 - (1/2) z^(-1)] = z / (z - 1) + (1/2)`

    `Y(z) = [z / (z - 1) + (1/2)] / [1 - (1/2) z^(-1)]`

    `Y(z) = [z / (z - 1) + (1/2)] * [z / (z - (1/2))]`

    `Y(z) = [z^2 / ((z - 1)(z - (1/2))) ] + [ (1/2)z / (z - (1/2))]`
    `Y(z) = [z^2 / ((z - 1)(z - (1/2))) ] + [ (1/2)z / (z - (1/2))]`
3.  **Partial Fraction Expansion:** Consider just the first term : `z^2 / ((z - 1)(z - (1/2))) =  A z/(z-1) + B z/(z-1/2)` or `z / ((z - 1)(z - (1/2))) = A /(z-1) + B /(z-1/2)`

    `z = A(z-1/2) + B(z-1)`

    `If z = 1: 1 = A(1-1/2) -> A = 2`

    `If z = 1/2: 1/2 = B(1/2 - 1) -> B = -1`

    Therefore `z^2 / ((z - 1)(z - (1/2))) = 2 z/(z-1) - z/(z-1/2)`

    Now `Y(z) = 2 z/(z-1) - z/(z-1/2) + (1/2)z/(z-1/2) = 2z/(z-1) - (1/2)z/(z-1/2)`

4.  **Inverse Z-transform:**

    `y[n] = Z^(-1){2z/(z-1) - (1/2)z/(z-1/2)}`

    `y[n] = 2 u[n] - (1/2) (1/2)^n u[n]`

    `y[n] = [2 - (1/2)^(n+1)] u[n]`

**5. Example 2**

Solve the difference equation: `y[n] + y[n-1] - 6y[n-2] = x[n]`

Given:
*   `x[n] = δ[n]` (unit impulse function)
*   `y[-1] = 1`
*   `y[-2] = -1`

**Solution:**

1.  **Take the Z-transform:**

    `Z{y[n] + y[n-1] - 6y[n-2]} = Z{x[n]}`

    `Y(z) + [z^(-1)Y(z) + y[-1]] - 6[z^(-2)Y(z) + z^(-1)y[-1] + y[-2]] = X(z)`

2.  **Substitute values and solve for Y(z):**

    `X(z) = Z{δ[n]} = 1`

    `Y(z) + z^(-1)Y(z) + 1 - 6z^(-2)Y(z) - 6z^(-1)(1) - 6(-1) = 1`

    `Y(z)[1 + z^(-1) - 6z^(-2)] + 1 - 6z^(-1) + 6 = 1`

    `Y(z)[1 + z^(-1) - 6z^(-2)] = 6z^(-1) - 6`

    `Y(z) = (6z^(-1) - 6) / (1 + z^(-1) - 6z^(-2))`

    `Y(z) = (6z - 6z^2) / (z^2 + z - 6)`
    `Y(z) = (-6z(z-1)) / ((z+3)(z-2))`

3.  **Partial Fraction Expansion:**
    `-6z(z-1)/((z+3)(z-2)) = A z/(z+3) + B z/(z-2)`
    or `-6(z-1)/((z+3)(z-2)) = A /(z+3) + B/(z-2)`

    `-6(z-1) = A(z-2) + B(z+3)`

    `If z = -3: -6(-4) = A(-5) -> A = -24/5`

    `If z = 2: -6(1) = B(5) -> B = -6/5`

    `-6z(z-1)/((z+3)(z-2)) = (-24/5) z/(z+3) + (-6/5) z/(z-2)`

4.  **Inverse Z-transform:**

    `y[n] = Z^(-1){(-24/5)z/(z+3) + (-6/5)z/(z-2)}`

    `y[n] = (-24/5) (-3)^n u[n] + (-6/5) (2)^n u[n]`

    `y[n] = [(-24/5) (-3)^n + (-6/5) (2)^n] u[n]`

**6. Practice Questions/Exercises**

1.  Solve the difference equation `y[n] - 0.6y[n-1] - 0.16y[n-2] = x[n]` given `x[n] = u[n]`, `y[-1] = 0`, and `y[-2] = 1`.

    **Answer:**  `y[n] = [25/32 + (7/8)(0.8)^n - (1/32)(-0.2)^n]u[n]`

2.  Determine the output `y[n]` for a system described by `y[n] + 0.5y[n-1] = x[n]`, where `x[n] = (1/4)^n u[n]` and `y[-1] = 1`.

    **Answer:** `y[n] = [(-2/3)(-1/2)^n + (8/3)(1/4)^n]u[n]`

3. A system is described by the equation  y[n] - (3/4)y[n-1] + (1/8)y[n-2] = x[n] + x[n-1]. Find the zero-state response if x[n] = u[n]. The Zero state response implies y[-1] = 0, and y[-2] = 0.

   **Answer**: y[n] = [8 u[n] - 4 (1/2)^n u[n] - 3(1/4)^n u[n]]

**7. Important Points to Remember**

*   Always use the **unilateral** Z-transform when dealing with initial conditions.
*   The time-shifting property of the unilateral Z-transform is crucial for incorporating initial conditions correctly.  Double-check your application of this property!
*   Remember to include the unit step function `u[n]` in your final answer, as the solution is only valid for `n >= 0`. This emphasizes the causality of the system.
*   Partial fraction expansion is often necessary to simplify `Y(z)` and find the inverse Z-transform.
*   Practice, practice, practice! The more you work through examples, the more comfortable you will become with this method.
*   Be careful with algebraic manipulations. A small error in the algebra can lead to a completely incorrect solution.
*   Always check your answer, if possible, by substituting a few values of `n` into the difference equation and the obtained solution to see if they match.

This comprehensive guide should provide you with a strong foundation for solving difference equations using the unilateral Z-transform. Good luck with your studies!
