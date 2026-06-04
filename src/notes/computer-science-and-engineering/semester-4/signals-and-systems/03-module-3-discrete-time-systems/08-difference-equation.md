---
title: "Difference equation"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b161"
status: "completed"
scrapedAt: "2026-05-20T16:15:52.613Z"
---
## Signals and Systems: Module 3 - Discrete-Time Systems: Difference Equations

### Introduction

This module delves into the world of discrete-time systems, focusing specifically on difference equations. Difference equations are the discrete-time equivalent of differential equations, serving as a powerful tool for modeling and analyzing a wide range of systems operating on discrete data. This set of notes will cover the key concepts, definitions, and techniques related to difference equations, enabling you to understand and apply them effectively.

### Learning Outcomes:

By the end of this section, you will be able to:

*   Define a difference equation and its order.
*   Understand the concepts of linearity, time-invariance, and causality for systems described by difference equations.
*   Solve linear constant-coefficient difference equations using classical (homogeneous and particular) methods.
*   Determine the initial conditions required to solve a difference equation.
*   Analyze the stability of systems represented by difference equations.
*   Apply difference equations to model real-world discrete-time systems.

### 1. Definition and Order of a Difference Equation

*   **Definition:** A difference equation expresses a relationship between the input signal *x[n]*, the output signal *y[n]*, and past values of the input and output signals. It's a discrete-time recurrence relation.

*   **General Form:** A general *N*-th order difference equation can be expressed as:

    ```
    y[n] + a₁y[n-1] + a₂y[n-2] + ... + aₙy[n-N] = b₀x[n] + b₁x[n-1] + b₂x[n-2] + ... + bₘx[n-M]
    ```

    Where:
    *   *y[n]* is the output signal at time *n*.
    *   *x[n]* is the input signal at time *n*.
    *   *aᵢ* and *bᵢ* are constant coefficients.
    *   *N* is the order of the difference equation (determined by the largest delay of the output, y[n-N]).
    *   *M* is the largest delay of the input x[n-M].

*   **Order:** The order of the difference equation is determined by the *largest delay* of the *output* signal, *y[n]*.  In the general form above, the order is *N*.  It's crucial to identify the order accurately as it dictates the number of initial conditions required for a unique solution.

*   **Recursive vs. Non-Recursive:**
    *   **Recursive (IIR - Infinite Impulse Response):**  When at least one of the *aᵢ* coefficients (for *i* > 0) is non-zero, the system is recursive. The current output *y[n]* depends on past outputs, creating feedback.
    *   **Non-Recursive (FIR - Finite Impulse Response):**  If all *aᵢ* coefficients (for *i* > 0) are zero, the system is non-recursive. The current output *y[n]* depends only on the current and past inputs. In this case, the difference equation simplifies to:

        ```
        y[n] = b₀x[n] + b₁x[n-1] + b₂x[n-2] + ... + bₘx[n-M]
        ```

**Example 1:**

```
y[n] = 0.5y[n-1] + x[n]  (Order: 1, Recursive)
```

**Example 2:**

```
y[n] = x[n] + 2x[n-1] - x[n-2] (Order: 0, Non-Recursive)
```

**Example 3:**

```
y[n] + 3y[n-1] + 2y[n-2] = x[n] + x[n-1] (Order: 2, Recursive)
```

### 2. Linearity, Time-Invariance, and Causality

Understanding these properties helps categorize and analyze discrete-time systems represented by difference equations.

*   **Linearity:** A system is linear if it satisfies the superposition principle:

    *   **Homogeneity:** If *x[n]* produces *y[n]*, then *ax[n]* produces *ay[n]* (where *a* is a constant).
    *   **Additivity:** If *x₁[n]* produces *y₁[n]* and *x₂[n]* produces *y₂[n]*, then *x₁[n] + x₂[n]* produces *y₁[n] + y₂[n]*.

    **Important Note:** Difference equations with *constant coefficients* are generally linear *if the initial conditions are zero*. Non-zero initial conditions can violate linearity.

*   **Time-Invariance:** A system is time-invariant (or shift-invariant) if a time shift in the input results in the same time shift in the output. If *x[n]* produces *y[n]*, then *x[n-k]* produces *y[n-k]* (where *k* is an integer).

    **Important Note:** Difference equations with *constant coefficients* are generally time-invariant.  Time-varying coefficients would violate time-invariance.

*   **Causality:** A system is causal if the output *y[n]* at any time *n* depends only on the present and past values of the input *x[n]* and past values of the output.  In other words, the system cannot predict the future.

    **Important Note:**  Difference equations in the form described above are generally causal. If an equation involves *x[n+k]* where *k* > 0, it is *non-causal*.
    *   Recursive systems can be causal as they rely on past outputs (feedback).
    *   Non-recursive (FIR) systems are always causal as they only use present and past inputs.

**Example: Determining Linearity**

Consider the system described by:  `y[n] = n*x[n]`

*   **Linearity:**
    *   Let `x1[n]` produce `y1[n] = n*x1[n]`
    *   Let `x2[n]` produce `y2[n] = n*x2[n]`
    *   Now consider `x3[n] = a*x1[n] + b*x2[n]`
    *   Then the output `y3[n] = n*x3[n] = n*(a*x1[n] + b*x2[n]) = a*n*x1[n] + b*n*x2[n] = a*y1[n] + b*y2[n]`

    Therefore, the system is linear.

**Example: Determining Time-Invariance**

Consider the system described by: `y[n] = x[n]^2`

*   **Time-Invariance:**
    *   Let `x1[n]` produce `y1[n] = x1[n]^2`
    *   Now consider the input `x2[n] = x1[n-k]`
    *   The output `y2[n] = x2[n]^2 = x1[n-k]^2`
    *   But `y1[n-k] = x1[n-k]^2`
    *   Since `y2[n] = y1[n-k]`, the system is time-invariant.

### 3. Solving Linear Constant-Coefficient Difference Equations

The general approach mirrors that used for solving differential equations:

1.  **Homogeneous Solution (y_h[n]):**  Find the solution to the homogeneous equation (set *x[n]* = 0).
2.  **Particular Solution (y_p[n]):**  Find a particular solution that satisfies the non-homogeneous equation (with the input *x[n]*).
3.  **Complete Solution (y[n]):**  The complete solution is the sum of the homogeneous and particular solutions: *y[n] = y_h[n] + y_p[n]*.
4.  **Apply Initial Conditions:** Use the given initial conditions to determine the values of the unknown constants in the homogeneous solution.

**3.1 Homogeneous Solution (y_h[n])**

*   **Characteristic Equation:** Start by assuming a solution of the form *y[n] = λⁿ* (lambda to the power of n), where λ is a constant. Substitute this into the homogeneous equation and solve for λ.
    For example, consider `y[n] + a₁y[n-1] + a₂y[n-2] = 0`.  Substituting *y[n] = λⁿ*:

    ```
    λⁿ + a₁λⁿ⁻¹ + a₂λⁿ⁻² = 0
    λⁿ⁻²(λ² + a₁λ + a₂) = 0
    λ² + a₁λ + a₂ = 0  (Characteristic Equation)
    ```

*   **Roots of the Characteristic Equation:** The roots of the characteristic equation, denoted as λ₁, λ₂, ..., λₙ, determine the form of the homogeneous solution.  There are three cases:

    *   **Distinct Real Roots:** If the roots are real and distinct, the homogeneous solution is:

        ```
        y_h[n] = C₁λ₁ⁿ + C₂λ₂ⁿ + ... + Cₙλₙⁿ
        ```

        where *Cᵢ* are constants to be determined using initial conditions.

    *   **Repeated Real Roots:** If a root λ₁ is repeated *k* times, the corresponding part of the homogeneous solution is:

        ```
        (C₁ + C₂n + C₃n² + ... + Cₖnᵏ⁻¹)λ₁ⁿ
        ```

        where *Cᵢ* are constants to be determined using initial conditions.

    *   **Complex Conjugate Roots:** If the roots are complex conjugates, λ₁ = α + jβ and λ₂ = α - jβ, it's often convenient to express them in polar form: λ₁ = re^(jθ) and λ₂ = re^(-jθ), where r = √(α² + β²) and θ = arctan(β/α). The homogeneous solution can then be written as:

        ```
        y_h[n] = rⁿ(A cos(nθ) + B sin(nθ))
        ```

        where *A* and *B* are constants to be determined using initial conditions.

**3.2 Particular Solution (y_p[n])**

The form of the particular solution depends on the form of the input *x[n]*. Here are some common cases:

| Input x[n]        | Assumed Particular Solution y_p[n]   |
| ------------------- | --------------------------------------- |
| Constant (C)       | K                                     |
| aⁿ                 | K aⁿ (if a is not a root of CE)        |
| n                  | K₁n + K₂                                |
| cos(ωn) or sin(ωn) | K₁cos(ωn) + K₂sin(ωn)                     |
| polynomial of n (degree 'm') | K₀ + K₁n + K₂n² +...+ Kₘnᵐ            |

*   **Method:** Substitute the assumed particular solution *y_p[n]* into the *non-homogeneous* difference equation and solve for the unknown coefficients (K, K₁, K₂, etc.).

*   **Important Note: Modification Rule:** If the assumed particular solution *y_p[n]* is the same as (or contains terms that are the same as) a term in the homogeneous solution *y_h[n]*, then you must multiply your assumed *y_p[n]* by *nᵏ*, where *k* is the smallest positive integer such that no term in the modified *y_p[n]* is present in the *y_h[n]*.

**3.3 Complete Solution (y[n])**

*   Add the homogeneous and particular solutions: *y[n] = y_h[n] + y_p[n]*.

**3.4 Apply Initial Conditions**

*   Use the given initial conditions (e.g., y[-1], y[-2], etc.) to solve for the unknown constants (C₁, C₂, A, B, etc.) in the complete solution.  The number of initial conditions required is equal to the order of the difference equation.  Substitute the known values of *n* and *y[n]* from the initial conditions into the complete solution, creating a system of equations. Solve this system to find the values of the constants.

**Example 4:** Solve the difference equation `y[n] - (3/2)y[n-1] + (1/2)y[n-2] = x[n]` with `x[n] = (1/4)ⁿ u[n]`, `y[-1] = 4` and `y[-2] = 10`.

1.  **Homogeneous Solution:**
    *   Homogeneous Equation: `y[n] - (3/2)y[n-1] + (1/2)y[n-2] = 0`
    *   Assume `y[n] = λⁿ`
    *   Characteristic Equation: `λ² - (3/2)λ + (1/2) = 0`
    *   Roots: `λ₁ = 1`, `λ₂ = 1/2`
    *   Homogeneous Solution: `y_h[n] = C₁ (1)ⁿ + C₂ (1/2)ⁿ = C₁ + C₂ (1/2)ⁿ`

2.  **Particular Solution:**
    *   Input: `x[n] = (1/4)ⁿ u[n]`
    *   Assume `y_p[n] = K (1/4)ⁿ` (since 1/4 is not a root of the characteristic equation)
    *   Substitute into the non-homogeneous equation:

        `K(1/4)ⁿ - (3/2)K(1/4)ⁿ⁻¹ + (1/2)K(1/4)ⁿ⁻² = (1/4)ⁿ`
        `K - (3/2)K(4) + (1/2)K(16) = 1`
        `K - 6K + 8K = 1`
        `3K = 1`
        `K = 1/3`
    *   Particular Solution: `y_p[n] = (1/3) (1/4)ⁿ`

3.  **Complete Solution:**

    `y[n] = y_h[n] + y_p[n] = C₁ + C₂ (1/2)ⁿ + (1/3) (1/4)ⁿ`

4.  **Apply Initial Conditions:**
    *   `y[-1] = 4 = C₁ + C₂(1/2)⁻¹ + (1/3)(1/4)⁻¹ = C₁ + 2C₂ + (4/3)`
    *   `y[-2] = 10 = C₁ + C₂(1/2)⁻² + (1/3)(1/4)⁻² = C₁ + 4C₂ + (16/3)`

    Now we have a system of two equations:
    *   `C₁ + 2C₂ = 4 - (4/3) = 8/3`
    *   `C₁ + 4C₂ = 10 - (16/3) = 14/3`

    Subtract the first equation from the second:
    *   `2C₂ = (14/3) - (8/3) = 6/3 = 2`
    *   `C₂ = 1`
    *   `C₁ = (8/3) - 2C₂ = (8/3) - 2 = 2/3`

5.  **Final Solution:**

    `y[n] = (2/3) + (1) (1/2)ⁿ + (1/3) (1/4)ⁿ` for `n ≥ 0` and will be `0` otherwise.

### 4. Initial Conditions

*   **Importance:**  Initial conditions are essential for obtaining a unique solution to a difference equation.  They provide specific values of the output signal at past time instances, allowing you to determine the constants in the homogeneous solution.

*   **Number Required:**  The number of initial conditions required is equal to the order of the difference equation.  For an *N*-th order difference equation, you typically need *N* initial conditions, such as *y[-1], y[-2], ..., y[-N]*.

*   **Practical Interpretation:**  Initial conditions represent the state of the system before the input is applied.  They capture the system's "memory" or past behavior.

**Example:** For a second-order difference equation like `y[n] + a₁y[n-1] + a₂y[n-2] = x[n]`, you need two initial conditions, typically given as `y[-1]` and `y[-2]`.

### 5. Stability of Systems Represented by Difference Equations

*   **Definition:** A system is considered Bounded-Input Bounded-Output (BIBO) stable if every bounded input produces a bounded output.  In simpler terms, a small input doesn't lead to an infinitely large output.

*   **Stability Condition:** For a system described by a linear constant-coefficient difference equation, BIBO stability depends on the *roots* of the characteristic equation (λ₁, λ₂, ..., λₙ). The system is stable if and only if *all* the roots lie *inside the unit circle* in the complex plane. This means:

    *   `|λᵢ| < 1` for all *i* = 1, 2, ..., *N*.

*   **Instability:** If at least one root lies *outside* the unit circle (`|λᵢ| > 1`), the system is unstable. The output will grow without bound, even for bounded inputs.  If a root lies *on* the unit circle (|λᵢ| = 1), the system is marginally stable (oscillations may persist).

*   **Intuition:**  A root *inside* the unit circle corresponds to a decaying exponential term in the homogeneous solution, which eventually goes to zero as *n* increases. A root *outside* the unit circle corresponds to a growing exponential term, leading to instability.

**Example 5:** Consider a system with a characteristic equation `λ² - 0.5λ - 0.25 = 0`. The roots are `λ₁ = 1` and `λ₂ = -0.5`. Since one of the roots is equal to one and another one satisfies `|λ₂| < 1`, the system is marginally stable.

**Example 6:** Consider a system with a characteristic equation `λ - 2 = 0`.  The root is `λ = 2`. Since `|2| > 1`, the system is unstable.

### 6. Applying Difference Equations to Model Real-World Discrete-Time Systems

Difference equations are used to model a wide variety of discrete-time systems, including:

*   **Digital Filters:**  Difference equations are the foundation for designing and implementing digital filters for signal processing.  FIR and IIR filters are directly described by difference equations.

*   **Control Systems:**  Discrete-time control systems, such as those used in robotics, automation, and aerospace, are often modeled using difference equations.

*   **Financial Modeling:**  Difference equations can be used to model economic systems, stock prices, and other financial data.

*   **Population Dynamics:**  Difference equations can describe how populations change over discrete time intervals (e.g., the number of individuals in a population in each generation).

*   **Queueing Systems:** Difference equations can be used to model how the number of customers waiting in a queue evolves over time.

**Example: Modeling a Savings Account**

Consider a savings account with an initial balance of *y[0]*. Each month, you deposit *x[n]* dollars and the account earns interest at a monthly rate of *r*. The balance at the end of month *n*, *y[n]*, can be modeled by the following difference equation:

```
y[n] = (1 + r)y[n-1] + x[n]
```

This equation states that the balance at the end of month *n* is equal to the previous month's balance plus the interest earned, plus the deposit made in that month.

### Practice Questions/Exercises with Answers

**Question 1:** Determine the order of the following difference equation:

`y[n] + 2y[n-1] - 3y[n-2] = x[n] - x[n-3]`

**Answer:** The order is 2, determined by the largest delay in the output, *y[n-2]*.

**Question 2:** Is the following system linear?

`y[n] = x[n] + 5`

**Answer:** No. This is not linear because it doesn't satisfy the homogeneity property. If *x[n]* produces *y[n]*, then *ax[n]* produces *ax[n] + 5*, which is not equal to *ay[n] = a(x[n] + 5)*.  The '+5' term violates linearity.

**Question 3:** Determine the stability of the system described by the difference equation:

`y[n] = 0.25y[n-1] + x[n]`

**Answer:** The characteristic equation is `λ - 0.25 = 0`, so the root is `λ = 0.25`. Since `|0.25| < 1`, the system is stable.

**Question 4:** Find the homogeneous solution of the difference equation:

`y[n] - (5/6)y[n-1] + (1/6)y[n-2] = 0`

**Answer:**

*   Characteristic equation: `λ² - (5/6)λ + (1/6) = 0`
*   Roots: `λ₁ = 1/2`, `λ₂ = 1/3`
*   Homogeneous solution: `y_h[n] = C₁(1/2)ⁿ + C₂(1/3)ⁿ`

**Question 5:** For the following difference equation, `y[n] - 0.5y[n-1] = x[n]` and input `x[n] = u[n]`, find the particular solution.

**Answer:**

* Since the input is a unit step, assume a solution of the form `y_p[n] = K`.
* Substitute into the difference equation: `K - 0.5K = 1`
* Solve for K: `0.5K = 1  => K = 2`
* Therefore, `y_p[n] = 2`

### Important Points to Remember

*   The order of a difference equation is determined by the largest delay of the *output* signal.
*   Linearity requires both homogeneity and additivity, and is typically satisfied for constant coefficient difference equations *with zero initial conditions*.
*   Time-invariance requires constant coefficients.
*   Causality means the output depends only on present and past inputs and past outputs.
*   For stability, all roots of the characteristic equation must lie *inside* the unit circle (`|λᵢ| < 1`).
*   The number of initial conditions required is equal to the order of the difference equation.
*   Always check for the Modification Rule when forming your particular solution.
