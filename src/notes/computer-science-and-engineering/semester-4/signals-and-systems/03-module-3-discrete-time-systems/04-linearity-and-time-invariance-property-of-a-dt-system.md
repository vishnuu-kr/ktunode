---
title: "Linearity and time invariance property of a DT system."
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b15d"
status: "completed"
scrapedAt: "2026-05-20T16:15:49.783Z"
---
## Signals and Systems: Module 3 - Discrete-Time Systems: Linearity and Time Invariance

**Introduction:**

This module delves into two crucial properties of discrete-time (DT) systems: Linearity and Time Invariance. Understanding these properties is essential for analyzing, designing, and predicting the behavior of DT systems.  Linear Time-Invariant (LTI) systems are particularly important because they can be completely characterized by their impulse response, allowing for simplified analysis using techniques like convolution.

**Learning Outcomes:**

By the end of this module, you should be able to:

*   Define linearity and time invariance for DT systems.
*   Determine if a given DT system is linear.
*   Determine if a given DT system is time-invariant.
*   Determine if a given DT system is both linear and time-invariant (LTI).
*   Apply the properties of linearity and time invariance to analyze DT systems.

**1. Key Concepts and Definitions:**

*   **Discrete-Time System:** A system that operates on a discrete-time input signal, `x[n]`, and produces a discrete-time output signal, `y[n]`. We can represent the system as `y[n] = T{x[n]}`, where `T{}` denotes the transformation performed by the system.

*   **Linearity:** A system is linear if it satisfies two properties:

    *   **Superposition:** If `x1[n]` produces `y1[n]` and `x2[n]` produces `y2[n]`, then `x1[n] + x2[n]` must produce `y1[n] + y2[n]`.  Mathematically:

        If `y1[n] = T{x1[n]}` and `y2[n] = T{x2[n]}`, then `T{x1[n] + x2[n]} = y1[n] + y2[n]`.

    *   **Homogeneity (Scaling):** If `x[n]` produces `y[n]`, then `a * x[n]` must produce `a * y[n]` for any constant `a`. Mathematically:

        If `y[n] = T{x[n]}`, then `T{a * x[n]} = a * y[n]`.

    *   A system is linear *if and only if* it satisfies both superposition and homogeneity.  We can combine these into a single test:

        If `y1[n] = T{x1[n]}` and `y2[n] = T{x2[n]}`, then `T{a * x1[n] + b * x2[n]} = a * y1[n] + b * y2[n]` for any constants `a` and `b`.

*   **Time Invariance:** A system is time-invariant (or shift-invariant) if a time shift in the input signal results in an identical time shift in the output signal.  Mathematically:

    If `y[n] = T{x[n]}`, then `y[n - n0] = T{x[n - n0]}` for any integer `n0`.  In other words, delaying the input by `n0` samples should delay the output by the same amount.

*   **Linear Time-Invariant (LTI) System:**  A system that is both linear and time-invariant.  LTI systems are fundamental in signal processing.

**2. Determining Linearity:**

*   **Method:**  Apply the combined linearity test.
    1.  Assume inputs `x1[n]` and `x2[n]` and their corresponding outputs `y1[n] = T{x1[n]}` and `y2[n] = T{x2[n]}`.
    2.  Compute the output for the input `a * x1[n] + b * x2[n]`: `T{a * x1[n] + b * x2[n]}`.
    3.  Compute `a * y1[n] + b * y2[n]`.
    4.  Compare the results of steps 2 and 3. If they are equal, the system is linear. If they are not equal, the system is non-linear.
*   **Key Points:**
    *   Terms that don't depend on the input (e.g., adding a constant) usually cause non-linearity.
    *   Non-linear operations (e.g., squaring, absolute value, trigonometric functions) generally make the system non-linear.

**Example 1: Linear System**

`y[n] = 2 * x[n] + x[n-1]`

1.  `y1[n] = 2 * x1[n] + x1[n-1]`
2.  `y2[n] = 2 * x2[n] + x2[n-1]`
3.  `T{a * x1[n] + b * x2[n]} = 2 * (a * x1[n] + b * x2[n]) + (a * x1[n-1] + b * x2[n-1])`
     `= 2a * x1[n] + 2b * x2[n] + a * x1[n-1] + b * x2[n-1]`
4.  `a * y1[n] + b * y2[n] = a * (2 * x1[n] + x1[n-1]) + b * (2 * x2[n] + x2[n-1])`
     `= 2a * x1[n] + a * x1[n-1] + 2b * x2[n] + b * x2[n-1]`

Since step 3 and 4 are equal, the system is linear.

**Example 2: Non-Linear System**

`y[n] = x[n]^2`

1. `y1[n] = x1[n]^2`
2. `y2[n] = x2[n]^2`
3. `T{a*x1[n] + b*x2[n]} = (a*x1[n] + b*x2[n])^2 = a^2 * x1[n]^2 + 2ab * x1[n] * x2[n] + b^2 * x2[n]^2`
4. `a*y1[n] + b*y2[n] = a*x1[n]^2 + b*x2[n]^2`

Since step 3 and 4 are not equal, the system is non-linear. (The cross-term `2ab * x1[n] * x2[n]` is the key difference.)

**Example 3: Non-Linear System (due to a constant term)**

`y[n] = 2 * x[n] + 3`

1. `y1[n] = 2*x1[n] + 3`
2. `y2[n] = 2*x2[n] + 3`
3. `T{a*x1[n] + b*x2[n]} = 2*(a*x1[n] + b*x2[n]) + 3 = 2a*x1[n] + 2b*x2[n] + 3`
4. `a*y1[n] + b*y2[n] = a*(2*x1[n] + 3) + b*(2*x2[n] + 3) = 2a*x1[n] + 3a + 2b*x2[n] + 3b`

Since step 3 and 4 are not equal, the system is non-linear.

**3. Determining Time Invariance:**

*   **Method:**

    1.  Find the output `y[n]` for an arbitrary input `x[n]`: `y[n] = T{x[n]}`.
    2.  Delay the input by `n0` and find the corresponding output: `T{x[n - n0]}`.
    3.  Delay the output `y[n]` by `n0`: `y[n - n0]`.
    4.  Compare `T{x[n - n0]}` and `y[n - n0]`. If they are equal, the system is time-invariant. If they are not equal, the system is time-varying.

*   **Key Points:**
    *   Coefficients that depend on `n` usually cause time-variance.
    *   Operations that alter the time index (e.g., `x[2n]`, `x[-n]`) generally make the system time-varying.

**Example 1: Time-Invariant System**

`y[n] = x[n] - x[n-1]`

1. `y[n] = x[n] - x[n-1]`
2. `T{x[n-n0]} = x[n-n0] - x[n-n0-1]`
3. `y[n-n0] = x[n-n0] - x[n-n0-1]`

Since step 2 and 3 are equal, the system is time-invariant.

**Example 2: Time-Varying System**

`y[n] = n * x[n]`

1. `y[n] = n * x[n]`
2. `T{x[n-n0]} = n * x[n-n0]`
3. `y[n-n0] = (n - n0) * x[n-n0]`

Since step 2 and 3 are not equal, the system is time-varying.

**Example 3: Time-Varying System**

`y[n] = x[-n]`

1. `y[n] = x[-n]`
2. `T{x[n - n0]} = x[-(n - n0)] = x[-n + n0]`
3. `y[n - n0] = x[-(n - n0)] = x[-n + n0]`  <- This appears correct but is misleading. You have to directly substitue (n - n0) into the _definition_ of y[n].  So,  y[n-n0] becomes x[-(n-n0)] = x[-n+n0].

Let's look at what *should* happen if the system were time-invariant.  If x[n] produces y[n], then x[n - 1] should produce y[n-1].

Let's say x[n] = u[n], the unit step. Then y[n] = x[-n] = u[-n].
Now let's delay the input: x[n - 1] = u[n - 1].
Then the output of the system to this delayed input is T{x[n - 1]} = x[-(n - 1)] = u[-n + 1].
Now, if the system is time-invariant, this should equal y[n - 1], i.e., u[-(n - 1)] = u[-n + 1].

However, if we delay the *output* by 1, we get: y[n - 1] = u[-n - 1]

Therefore, since x[-n + n0] !=  x[-n] delayed by n0, this system is time-varying.  The time-reversal operation flips the signal around the origin, and delaying and flipping are not commutative operations.

**4. Determining if a DT system is LTI:**

A system must be both linear AND time-invariant to be considered an LTI system. If either property is not met, the system is not LTI.

**Example:**

`y[n] = 3 * x[n] + 2`

*   **Linearity:**  We already determined this system is non-linear in previous example.
*   **Time-Invariance:** Let's check this.
    1. `y[n] = 3*x[n] + 2`
    2. `T{x[n - n0]} = 3*x[n - n0] + 2`
    3. `y[n - n0] = 3*x[n - n0] + 2`
    Since step 2 and 3 are equal, the system is time-invariant.

However, because the system is *not linear*, it is *not LTI*.

**5. Applications of Linearity and Time Invariance:**

*   **Simplified Analysis:** LTI systems can be completely characterized by their impulse response `h[n]`. The output to any arbitrary input can be found using convolution: `y[n] = x[n] * h[n]`.
*   **System Design:** Understanding linearity and time invariance helps in designing systems with predictable and desirable behavior.
*   **Filter Design:**  Many filters are designed to be LTI systems.

**6. Practice Questions:**

Determine whether the following systems are linear, time-invariant, both, or neither.

1.  `y[n] = x[n] + n * x[n-1]`
2.  `y[n] = x[n] * cos(ωn)`
3.  `y[n] = max(x[n], 0)` (also known as a rectifier)
4.  `y[n] = x[n - 2]`
5.  `y[n] = x[n] + x[-n]`

**Answers:**

1.  **Linear, Time-Varying:** Linear can be confirmed by applying superposition and homogeneity.  Time-varying because the coefficient `n` depends on time.

2.  **Linear, Time-Varying:** Linear. Time-varying because of `cos(ωn)`, which is a time-dependent coefficient multiplying the input. Note that `ω` is constant, it's `n` that is causing the time variance.

3.  **Non-Linear, Time-Invariant:** The `max()` function makes the system non-linear. If `x[n]` results in `y[n] = max(x[n], 0)`, and `2x[n]` results in `y2[n] = max(2x[n], 0) = 2 max(x[n], 0) = 2y[n]`. But, if `x1[n] = 1` and `x2[n] = -1`, then `max(x1[n], 0) = 1` and `max(x2[n], 0) = 0`. However, `max(x1[n] + x2[n], 0) = max(0, 0) = 0`, which does not equal `1 + 0 = 1`. It is time-invariant because delaying the input simply delays the output.

4.  **Linear, Time-Invariant (LTI):**  Linear and time-invariant because it's just a simple delay.

5.  **Linear, Time-Varying:** Linear can be confirmed via superposition and homogenity.  If x[n] produces y[n] = x[n] + x[-n], then x[n - n0] produces y[n - n0] = x[n - n0] + x[-(n - n0)] = x[n - n0] + x[-n + n0]. But y[n-n0] = x[n - n0] + x[-(n - n0)]. This is *incorrect*, because it only delays the _result_. It is not operating the same *function* on a delayed signal.  Thus the system is time-varying.  Consider x[n] = u[n], the unit step.  Then y[n] = u[n] + u[-n].  Now consider x[n - 1] = u[n - 1].  The output of T{} applied to that delayed signal is u[n - 1] + u[-(n-1)] = u[n - 1] + u[-n + 1].   If the system was time-invariant, that would have to equal y[n - 1], which is u[n - 1] + u[-(n - 1)].  Since in general, u[-n + 1] != u[-n + 1], the system is time-varying.

**7. Important Points to Remember:**

*   Linearity requires both superposition and homogeneity.
*   Time invariance means that delaying the input results in an identical delay in the output.
*   LTI systems are completely characterized by their impulse response.
*   Be careful when applying linearity and time-invariance tests – ensure you're rigorously applying the definitions.
*   Terms independent of the input signal, as well as non-linear operations, are prime suspects for causing non-linearity.
*   Coefficients that depend on the index 'n', and operations that manipulate the time index within the input signal, often result in time variance.
