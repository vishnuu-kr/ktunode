---
title: "Characterizing LTI Systems and Convolution - Impulse  response of an LTI system"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b160"
status: "completed"
scrapedAt: "2026-05-20T16:15:51.901Z"
---
# Signals and Systems - Module 3: Discrete-Time Systems
## Topic: Characterizing LTI Systems and Convolution - Impulse Response of an LTI System

**Learning Outcomes:**

*   Understand the concept of an LTI (Linear Time-Invariant) system.
*   Define the impulse response of a discrete-time system.
*   Explain how the impulse response completely characterizes an LTI system.
*   Determine the output of an LTI system given its impulse response and input signal.
*   Apply the convolution sum to calculate the output of an LTI system.
*   Understand and apply properties of the convolution sum.

---

### 1. Introduction to LTI Systems

*   **Definition of a System:** A system is an entity that processes an input signal to produce an output signal.  We denote this operation as: `y[n] = T{x[n]}` where `x[n]` is the input, `y[n]` is the output, and `T` represents the system's transformation.

*   **Linear System:** A system is linear if it satisfies the superposition principle. This principle consists of two properties:
    *   **Additivity:** If `x1[n] -> y1[n]` and `x2[n] -> y2[n]`, then `x1[n] + x2[n] -> y1[n] + y2[n]`.
    *   **Homogeneity (Scaling):** If `x[n] -> y[n]`, then `a*x[n] -> a*y[n]`, where `a` is a constant.

*   **Time-Invariant System:** A system is time-invariant if a time shift in the input signal results in an equivalent time shift in the output signal. If `x[n] -> y[n]`, then `x[n-k] -> y[n-k]` for any integer `k`.

*   **LTI System:** A system that is both linear and time-invariant. LTI systems are fundamentally important in signal processing because they are easily characterized and analyzed.

    *   **Importance:** LTI systems are important because their behavior can be entirely described by their impulse response. This simplifies the analysis and design of signal processing systems.

### 2. The Discrete-Time Unit Impulse Function

*   **Definition:** The discrete-time unit impulse function, denoted as `δ[n]`, is defined as:

    ```
    δ[n] = { 1,  n = 0
           { 0,  n ≠ 0
    ```

*   **Properties:**

    *   **Sifting Property:**  `x[n] * δ[n - k] = x[k]`. This means multiplying `x[n]` by `δ[n-k]` isolates the value of `x[n]` at `n=k`.
    *   **Representation of signals:**  Any arbitrary discrete-time signal `x[n]` can be represented as a sum of scaled and shifted impulses:

        ```
        x[n] =  Σ x[k] * δ[n - k]  (summation from k = -∞ to ∞)
        ```

### 3. Impulse Response of a Discrete-Time LTI System

*   **Definition:** The impulse response of a discrete-time system, denoted as `h[n]`, is the output of the system when the input is the unit impulse function `δ[n]`.
    *   Mathematically: `h[n] = T{δ[n]}`.

*   **Importance:** The impulse response `h[n]` *completely characterizes* the LTI system.  Knowing `h[n]` allows you to determine the output for *any* input `x[n]`.

*   **Intuition:**  `h[n]` tells you how the system responds to a single impulse at time 0. Since any input can be expressed as a sum of scaled and shifted impulses, and the system is LTI, we can determine the output by knowing `h[n]`.

### 4. Convolution Sum

*   **Derivation:**  Consider an LTI system with impulse response `h[n]`.  Let the input be `x[n]`. As we saw above, `x[n]` can be expressed as a sum of impulses: `x[n] = Σ x[k] * δ[n - k]`.  Due to the linearity of the system, the output `y[n]` is:

    `y[n] = T{x[n]} = T{Σ x[k] * δ[n - k]}`

    Due to linearity: `y[n] = Σ x[k] * T{δ[n - k]}`

    Due to time-invariance: `y[n] = Σ x[k] * h[n - k]`

*   **Convolution Sum Formula:** The output `y[n]` of an LTI system with impulse response `h[n]` and input `x[n]` is given by the convolution sum:

    ```
    y[n] = Σ x[k] * h[n - k]   (summation from k = -∞ to ∞)
    ```

    This is often written as:  `y[n] = x[n] * h[n]`  (where `*` denotes convolution).

*   **Interpretation:**  The convolution sum is a mathematical operation that combines two signals (`x[n]` and `h[n]`) to produce a third signal (`y[n]`). It involves:

    1.  **Time Reversal:**  Reversing `h[k]` to get `h[-k]`.
    2.  **Shifting:** Shifting `h[-k]` by `n` to get `h[n-k]`.
    3.  **Multiplication:** Multiplying `x[k]` and `h[n-k]` for each value of `k`.
    4.  **Summation:** Summing the product `x[k] * h[n-k]` over all values of `k`.

### 5. Properties of Convolution Sum

*   **Commutative Property:** `x[n] * h[n] = h[n] * x[n]`
    *   Implication:  The order in which you convolve the input and impulse response does not matter.

*   **Associative Property:** `(x[n] * h1[n]) * h2[n] = x[n] * (h1[n] * h2[n])`
    *   Implication:  Useful when cascading LTI systems.  The overall impulse response of cascaded LTI systems is the convolution of their individual impulse responses.

*   **Distributive Property:** `x[n] * (h1[n] + h2[n]) = x[n] * h1[n] + x[n] * h2[n]`
    *   Implication:  Useful when systems are in parallel.

*   **Convolution with an Impulse:** `x[n] * δ[n] = x[n]`
    *   Implication: Convolving any signal with the unit impulse leaves the signal unchanged. Also, `x[n] * δ[n-k] = x[n-k]`

### 6. Example: Convolution Sum Calculation

Let's say we have the following signals:

*   `x[n] = {1, 2, 1}` for `n = 0, 1, 2` (and 0 elsewhere)
*   `h[n] = {1, 1, 1}` for `n = 0, 1, 2` (and 0 elsewhere)

We want to find `y[n] = x[n] * h[n]`.

**Steps:**

1.  **Tabular Method:** This is often the easiest method for short signals.

    | n    | x[n] | h[0-n] | h[1-n] | h[2-n] | y[n] |
    |------|------|--------|--------|--------|------|
    | -2   | 0    | 0      | 0      | 0      | 0    |
    | -1   | 0    | 0      | 0      | 0      | 0    |
    | 0    | 1    | 1      | 0      | 0      | 1    |
    | 1    | 2    | 1      | 1      | 0      | 3    |
    | 2    | 1    | 1      | 1      | 1      | 4    |
    | 3    | 0    | 0      | 1      | 1      | 2    |
    | 4    | 0    | 0      | 0      | 1      | 1    |
    | 5    | 0    | 0      | 0      | 0      | 0    |

Therefore, `y[n] = {1, 3, 4, 2, 1}` for `n = 0, 1, 2, 3, 4` (and 0 elsewhere).

2.  **Formula Method:**  Calculate `y[n]` using the convolution sum formula: `y[n] = Σ x[k] * h[n - k]`

    *   `y[0] = x[0]h[0] + x[1]h[-1] + x[2]h[-2] = (1)(1) + (2)(0) + (1)(0) = 1`
    *   `y[1] = x[0]h[1] + x[1]h[0] + x[2]h[-1] = (1)(1) + (2)(1) + (1)(0) = 3`
    *   `y[2] = x[0]h[2] + x[1]h[1] + x[2]h[0] = (1)(1) + (2)(1) + (1)(1) = 4`
    *   `y[3] = x[0]h[3] + x[1]h[2] + x[2]h[1] = (1)(0) + (2)(1) + (1)(1) = 3` This appears to be incorrect, correcting calculation: `y[3] = x[1]h[2] + x[2]h[1] + x[3]h[0] = 2*1+1*1 + 0 = 3` (Still incorrect!) Correction: `y[3] = x[1]h[2] + x[2]h[1] = 2*1 + 1*1 = 3` This is not correct, the formula is not being properly used. Correction:  `y[3] =  Σ x[k] * h[3 - k]` .  This means `y[3] = x[0]h[3] + x[1]h[2] + x[2]h[1] +x[3]h[0]`. Hence, y[3] = 0+2*1+1*1 + 0= 3. This is still wrong!! The problem is the tabular method output looks incorrect!

       Let's go back to the tabular method and be systematic:

       | n    | x[n] | h[0-n] | h[1-n] | h[2-n] | y[n] = sum(x[k]h[n-k])|
       |------|------|--------|--------|--------|------|
       | -2   | 0    | 0      | 0      | 0      | 0    |
       | -1   | 0    | 0      | 0      | 0      | 0    |
       | 0    | 1    | 1      | 0      | 0      | 1*1+0+0 = 1  |
       | 1    | 2    | 1      | 1      | 0      | 1*1+2*1+0 = 3 |
       | 2    | 1    | 1      | 1      | 1      | 1*1+2*1+1*1=4    |
       | 3    | 0    | 0      | 1      | 1      |  0+2*1+1*1=3   |
       | 4    | 0    | 0      | 0      | 1      | 0+0+1*1=1  |
       | 5    | 0    | 0      | 0      | 0      | 0    |

        So `y[3]` should be 2, and `y[4]` should be 1, corrected table:
       | 3    | 0    | 0      | 1      | 1      | 2 |
       | 4    | 0    | 0      | 0      | 1      | 1 |

*Correction and explanation:*

The mistake was in not fully calculating the convolution. `y[n]` is the sum of the *product* of `x[k]` and the shifted, reversed `h[n-k]` for each `n`.

`y[n] = {1, 3, 4, 3, 1}`

### 7. Practice Questions and Exercises

1.  **LTI System Identification:** An LTI system produces the output `y[n] = {1, 2, 1}` when the input is `x[n] = {1, 0, 0}` (i.e., the unit impulse). What is the impulse response `h[n]` of this system?

    *   **Answer:** Since the input is a unit impulse, the output *is* the impulse response.  Therefore, `h[n] = {1, 2, 1}`.

2.  **Convolution Calculation:** An LTI system has an impulse response `h[n] = {1, -1}` for `n = 0, 1`.  The input is `x[n] = {2, 1, 0}` for `n = 0, 1, 2`.  Calculate the output `y[n] = x[n] * h[n]`.

    *   **Answer:**

        Tabular Method:

        | n    | x[n] | h[0-n] | h[1-n] | y[n] |
        |------|------|--------|--------|------|
        | -1   | 0    | 0      | 0      | 0    |
        | 0    | 2    | 1      | 0      | 2    |
        | 1    | 1    | -1     | 1      | -1+2 =1    |
        | 2    | 0    | 0      | -1     | -1     |
        | 3    | 0    | 0      | 0      | 0     |

    Therefore, `y[n] = {2, 1, -1}` for `n = 0, 1, 2`.

3.  **System Properties:** An LTI system has an impulse response `h[n] = u[n]` (the unit step function). What is the output `y[n]` when the input is `x[n] = δ[n]`?  What does this tell you about the system?

    *   **Answer:**

        Since `x[n] = δ[n]`, the output `y[n] = x[n] * h[n] = δ[n] * u[n] = u[n]`.

        This tells us that the unit step function, `u[n]`, is the *step response* of the system. That is, the output of the system is u[n] when the input is δ[n] (unit impulse)

4.  **Conceptual Understanding:** Explain in your own words why the impulse response is so crucial for characterizing LTI systems.

    *   **Answer:** Because any input signal can be represented as a sum of scaled and shifted impulses. Since the system is linear and time-invariant, the output can be found by summing the system's responses to each of those scaled and shifted impulses. The impulse response *is* that response to a single impulse. This allows us to calculate the response to *any* input.

### 8. Important Points to Remember

*   **LTI systems are fully characterized by their impulse response.**
*   **Convolution is a fundamental operation for analyzing LTI systems.**
*   **Understand the properties of convolution (commutative, associative, distributive).**
*   **Be comfortable calculating convolution sums, both graphically and analytically.**
*   **The impulse response is the output of the system when the input is a unit impulse.**
