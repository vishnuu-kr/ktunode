---
title: "Recursive DT systems and non recursive discrete time systems"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b15b"
status: "completed"
scrapedAt: "2026-05-20T16:15:48.364Z"
---
## Signals and Systems - Module 3: Discrete-Time Systems

### Topic: Recursive and Non-Recursive Discrete-Time Systems

**Learning Outcomes:**

*   Understand the difference between recursive and non-recursive discrete-time systems.
*   Identify whether a given discrete-time system is recursive or non-recursive.
*   Represent recursive systems using difference equations.
*   Determine the impulse response of non-recursive systems.
*   Understand the concept of Finite Impulse Response (FIR) and Infinite Impulse Response (IIR) systems.
*   Analyze the advantages and disadvantages of FIR and IIR systems.
*   Understand the relationship between difference equations and system properties (linearity, time-invariance, causality).

**1. Key Concepts and Definitions:**

*   **Discrete-Time System:** A system that operates on discrete-time signals, producing a discrete-time output signal based on a discrete-time input signal.

*   **Input Signal:** Denoted as x[n], a sequence of numbers sampled at discrete time instances.

*   **Output Signal:** Denoted as y[n], the resulting sequence of numbers after processing the input signal by the system.

*   **Difference Equation:** A mathematical equation that describes the relationship between the input, output, and previous values of the output in a discrete-time system.  It's the equivalent of a differential equation in continuous time.

*   **Impulse Response (h[n]):** The output of a discrete-time system when the input is a unit impulse sequence (δ[n]), where δ[n] = 1 for n=0 and δ[n] = 0 otherwise.

*   **Recursive System:** A discrete-time system where the current output, y[n], depends on the current input, x[n], *and* previous values of the output, y[n-1], y[n-2], etc.  These systems utilize feedback.

*   **Non-Recursive System:** A discrete-time system where the current output, y[n], depends only on the current input, x[n], and previous values of the input, x[n-1], x[n-2], etc. These systems do not utilize feedback.

*   **Finite Impulse Response (FIR) System:** A system whose impulse response, h[n], has a finite duration. It's non-zero for a finite number of samples and zero otherwise. FIR systems are always non-recursive.

*   **Infinite Impulse Response (IIR) System:** A system whose impulse response, h[n], has an infinite duration.  It's non-zero for an infinite number of samples. IIR systems are typically recursive, although non-recursive implementations are theoretically possible (but rarely used due to complexity and instability concerns).

**2. Recursive DT Systems (IIR):**

*   **Definition:**  The output y[n] depends on past output values (y[n-1], y[n-2], …). This creates a feedback loop.

*   **Representation:** Described by a difference equation in the general form:

    ```
    y[n] = b0*x[n] + b1*x[n-1] + ... + bM*x[n-M] - a1*y[n-1] - a2*y[n-2] - ... - aN*y[n-N]
    ```

    Where:

    *   `x[n]` is the input signal.
    *   `y[n]` is the output signal.
    *   `a1, a2, ..., aN` are the feedback coefficients.
    *   `b0, b1, ..., bM` are the feedforward coefficients.
    *   `N` is the order of the system (determined by the highest past output value used).
    *   `M` is the length of feedforward portion.

*   **Example:**  Consider the following difference equation:

    `y[n] = 0.5*y[n-1] + x[n]`

    This is a recursive system because the output `y[n]` depends on the previous output `y[n-1]`.

*   **Advantages:**

    *   **Efficiency:** Can achieve sharp filter characteristics with fewer coefficients than FIR filters.
    *   **Cost Effective:** Lower order IIR filter can achieve the same specification of a higher-order FIR filter.

*   **Disadvantages:**

    *   **Stability:**  Potential for instability if the feedback coefficients are not chosen carefully.
    *   **Non-linear Phase Response:** Often exhibit non-linear phase responses, which can cause distortion in certain applications.
    *   **Complex Design:** Design and analysis can be more complex than FIR filters.

*   **Impulse Response:**  The impulse response is infinite in duration, hence they are IIR systems.  Determining h[n] involves solving the difference equation with the input being δ[n]. This often involves z-transform techniques.

**3. Non-Recursive DT Systems (FIR):**

*   **Definition:** The output y[n] depends only on the current and past input values (x[n], x[n-1], x[n-2], …). No feedback is present.

*   **Representation:** Described by a difference equation in the general form:

    ```
    y[n] = b0*x[n] + b1*x[n-1] + ... + bM*x[n-M]
    ```

    Where:

    *   `x[n]` is the input signal.
    *   `y[n]` is the output signal.
    *   `b0, b1, ..., bM` are the coefficients.
    *   `M` is the order of the system (also the length of the filter minus 1).

*   **Example:** Consider the following difference equation:

    `y[n] = 0.25*x[n] + 0.5*x[n-1] + 0.25*x[n-2]`

    This is a non-recursive system because the output `y[n]` depends only on the input values `x[n]`, `x[n-1]`, and `x[n-2]`.

*   **Advantages:**

    *   **Stability:** Always stable (bounded input, bounded output).
    *   **Linear Phase Response:** Can be designed to have a perfectly linear phase response, preserving the shape of the input signal.
    *   **Easy Design:** Design and implementation are generally simpler than IIR filters.

*   **Disadvantages:**

    *   **Efficiency:** Requires more coefficients to achieve sharp filter characteristics compared to IIR filters.
    *   **High Order:** Can require a high filter order to meet specific performance requirements.
    *   **Computational Complexity:** Computationally more expensive compared to IIR filters for the same filter specifications.

*   **Impulse Response:** The impulse response h[n] is simply the coefficients of the difference equation:

    If  `y[n] = b0*x[n] + b1*x[n-1] + ... + bM*x[n-M]` then `h[n] = {b0, b1, ..., bM}` for `0 <= n <= M` and 0 otherwise. This means the impulse response has a finite duration, hence they are FIR systems.

    To find the impulse response, set `x[n] = δ[n]` (the unit impulse).

**4. FIR vs. IIR Comparison Summary:**

| Feature           | FIR Systems                 | IIR Systems                  |
| ----------------- | ---------------------------- | ----------------------------- |
| Recursion         | No                          | Yes                           |
| Stability         | Always stable               | Potentially unstable          |
| Phase Response    | Can be linear                | Typically non-linear          |
| Impulse Response  | Finite duration              | Infinite duration             |
| Design Complexity | Simpler                      | More complex                  |
| Efficiency        | Less efficient (more coeffs) | More efficient (fewer coeffs) |

**5. System Properties and Difference Equations:**

*   **Linearity:** A system is linear if it satisfies the superposition principle:

    If `x1[n] -> y1[n]` and `x2[n] -> y2[n]`, then `a*x1[n] + b*x2[n] -> a*y1[n] + b*y2[n]` for any constants a and b.  Linearity must hold for all inputs.  Difference equations with coefficients that *do not* depend on the input or output can generally be assumed to represent linear systems.

*   **Time-Invariance:** A system is time-invariant if a time shift in the input results in the same time shift in the output:

    If `x[n] -> y[n]`, then `x[n-k] -> y[n-k]` for any integer k.  Difference equations with coefficients that *do not* depend on time (n) can generally be assumed to represent time-invariant systems.

*   **Causality:** A system is causal if the output at any time `n` depends only on the present and past input values.  In other words, the output `y[n]` cannot depend on future values of the input `x[n+1]`, `x[n+2]`, etc.  All systems described by difference equations in the forms presented above (where the output at time n only depends on inputs at time n or earlier, and past output values) are causal.  Non-causal systems can be implemented if you have access to future input values, such as when processing a recording offline.

**6.  Examples & Practice Questions:**

*   **Example 1: Identify Recursive vs. Non-Recursive:**

    *   `y[n] = x[n] + 2*x[n-1] - x[n-2]`  **Non-Recursive (FIR)**
    *   `y[n] = 0.8*y[n-1] + x[n]`          **Recursive (IIR)**
    *   `y[n] = x[n] + 0.5*y[n-1] - 0.25*y[n-2] + x[n-3]` **Recursive (IIR)**
    *   `y[n] = n*x[n]` **Non-Recursive (FIR)** - Although there is the n component, this is multiplied by x[n] NOT y[n-1] or other past outputs.
    *   `y[n] = x[n] + y[n-1]*x[n]` **Recursive (IIR)** - Note that y[n-1] is being multiplied by the input x[n]. *This is a non-linear system* as the superposition principle will not hold!

*   **Example 2: Finding the Impulse Response of an FIR System:**

    Given the system `y[n] = x[n] - x[n-1] + 2*x[n-2]`:

    1.  Set `x[n] = δ[n]`
    2.  Then `y[n] = h[n] = δ[n] - δ[n-1] + 2*δ[n-2]`
    3.  Therefore, `h[n] = {1, -1, 2}` for n = 0, 1, 2, and 0 otherwise.  The length of the impulse response is 3.

*   **Practice Question 1:**

    A discrete-time system is described by the difference equation: `y[n] = 0.6*y[n-1] - 0.1*y[n-2] + x[n] + 0.2*x[n-1]`.

    a) Is this system recursive or non-recursive?

    b) Is this system FIR or IIR?

    c) Determine the order of the system.

    *   **Answer:**

        a) Recursive (IIR) because the output depends on previous output values.
        b) IIR because it's recursive.
        c) Order 2, determined by the `y[n-2]` term.

*   **Practice Question 2:**

    A discrete-time system has an impulse response `h[n] = {2, 1, -1, 0, 1}` for n = 0, 1, 2, 3, 4, and 0 otherwise.

    a) Is this system recursive or non-recursive?

    b) Is this system FIR or IIR?

    c) Determine the difference equation representing this system.

    *   **Answer:**

        a) Non-recursive (FIR) because the impulse response has finite length.
        b) FIR because the impulse response has finite length.
        c) `y[n] = 2*x[n] + x[n-1] - x[n-2] + 0*x[n-3] + x[n-4] = 2x[n] + x[n-1] - x[n-2] + x[n-4]`

**7. Important Points to Remember:**

*   Recursive systems utilize feedback; non-recursive systems do not.
*   FIR systems are always stable; IIR systems can be unstable.
*   FIR systems can be designed to have linear phase; IIR systems typically have non-linear phase.
*   The impulse response is crucial for characterizing a system.
*   Difference equations provide a mathematical description of discrete-time systems.
*   Linear Time Invariant (LTI) systems are best described and analyzed using techniques like z-transforms and frequency response analysis. Understanding if a system is LTI or not is crucial before applying these tools.

This comprehensive study guide provides a thorough overview of recursive and non-recursive discrete-time systems.  Understanding these concepts is fundamental to analyzing and designing digital filters and other signal processing applications.
