---
title: "Convolution"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b171"
status: "completed"
scrapedAt: "2026-05-20T16:16:03.257Z"
---
## Signals and Systems: Module 4 - Z-Transform: Convolution

**Overview:** This module focuses on the convolution operation in the context of the Z-transform.  We'll explore how convolution in the time domain translates to the Z-domain and its implications for analyzing Linear Time-Invariant (LTI) systems.

**Learning Outcomes:**

*   Understand the definition of convolution for discrete-time signals.
*   Learn how convolution in the time domain is related to multiplication in the Z-domain.
*   Apply the Z-transform to solve convolution problems.
*   Analyze the Region of Convergence (ROC) of the convolution of two sequences.
*   Utilize convolution to determine the output of an LTI system given its impulse response and input.

**1. Introduction to Convolution:**

*   **Definition:** Convolution is a mathematical operation that combines two signals (or functions) to produce a third signal that expresses how the shape of one is modified by the other.  For discrete-time signals, it represents the weighted sum of one signal with a time-reversed and shifted version of the other.

*   **Discrete-Time Convolution Sum:**  The convolution of two discrete-time signals, `x[n]` and `h[n]`, is defined as:

    `y[n] = x[n] * h[n] = Σ (x[k] * h[n-k))  (where the summation is over all k, typically from -∞ to ∞)`

    *   `x[n]` is often the input signal.
    *   `h[n]` is often the impulse response of an LTI system.
    *   `y[n]` is the output signal.

*   **Graphical Interpretation:** Convolution can be visualized as:

    1.  **Time-Reversal:** Flip one of the signals (e.g., `h[n]` becomes `h[-n]`).
    2.  **Shifting:** Shift the time-reversed signal by `n` samples (e.g., `h[-n]` becomes `h[n-k]` or `h[-(k-n)]`).
    3.  **Multiplication:** Multiply the shifted signal with the other signal (e.g., `x[k] * h[n-k]`).
    4.  **Summation:** Sum all the products obtained in step 3 over all values of `k`. This sum gives you the value of `y[n]` for that particular `n`.
    5.  **Repeat:** Repeat steps 2-4 for all values of `n` to obtain the entire output signal `y[n]`.

**2. Convolution Theorem (Z-Transform):**

*   **Key Concept:**  The convolution theorem is fundamental. It states that the Z-transform of the convolution of two signals is equal to the product of their individual Z-transforms.

*   **Mathematical Representation:**
    *   If  `x[n]  <->  X(z)` and `h[n] <-> H(z)`, then
    *   `x[n] * h[n]  <->  X(z) * H(z)`

*   **Importance:** This theorem simplifies the process of finding the output of an LTI system. Instead of performing the time-domain convolution, you can:

    1.  Take the Z-transform of the input signal `x[n]` to get `X(z)`.
    2.  Take the Z-transform of the impulse response `h[n]` to get `H(z)`.  `H(z)` is also the **transfer function** of the system.
    3.  Multiply `X(z)` and `H(z)` to get `Y(z)`, the Z-transform of the output.
    4.  Take the inverse Z-transform of `Y(z)` to obtain the output signal `y[n]`.

**3. Region of Convergence (ROC) of Convolution:**

*   **Understanding ROC:** The Region of Convergence (ROC) is the set of values of `z` for which the Z-transform converges. It's crucial for uniquely defining the inverse Z-transform.

*   **ROC of Convolution:**  If `x[n] <-> X(z)` with ROC `Rx` and `h[n] <-> H(z)` with ROC `Rh`, then `y[n] = x[n] * h[n] <-> Y(z) = X(z) * H(z)` with ROC `Ry`.

    *   **The ROC of the convolution, Ry, is at least the intersection of the individual ROCs, Rx and Rh:** `Ry ⊇ Rx ∩ Rh`.
    *   It's possible for the ROC of the convolution to be *larger* than the intersection of the individual ROCs if pole-zero cancellations occur in the product `X(z) * H(z)`.  This is rare but important to consider.

*   **Importance of ROC:** The ROC helps determine the stability and causality of the system.  For example:
    *   **Causal system:** ROC is outside a circle.
    *   **Stable system:** ROC includes the unit circle (|z|=1).

**4. Applying Convolution to LTI System Analysis:**

*   **LTI System Representation:** An LTI system is completely characterized by its impulse response, `h[n]`.

*   **Output Calculation:** Given an input `x[n]` and the impulse response `h[n]`, the output `y[n]` of the LTI system is:

    `y[n] = x[n] * h[n]`

*   **Using Z-Transform:** We can use the Z-transform to find `y[n]` as explained in Section 2.  This is often easier than directly calculating the convolution sum, especially for complex signals.

**5. Examples:**

**Example 1:  Basic Convolution using Z-Transform**

Let's say `x[n] = u[n]` (unit step sequence) and `h[n] = a^n u[n]` where |a| < 1. Find `y[n] = x[n] * h[n]`.

1.  **Z-Transforms:**
    *   `X(z) = z/(z-1)`,  ROC: |z| > 1
    *   `H(z) = z/(z-a)`,  ROC: |z| > |a|

2.  **Multiply:**
    *   `Y(z) = X(z) * H(z) = (z/(z-1)) * (z/(z-a)) = z^2 / ((z-1)(z-a))`
    *   ROC: |z| > 1  (Since |z| > 1 implies |z| > |a|)

3.  **Partial Fraction Expansion:**  Express `Y(z)/z` for easier inverse Z-transform:
    *   `Y(z)/z = z / ((z-1)(z-a)) = A/(z-1) + B/(z-a)`
    *   Solving for A and B: `A = 1/(1-a)`,  `B = -a/(1-a)`
    *   Therefore, `Y(z) = (1/(1-a)) * (z/(z-1)) - (a/(1-a)) * (z/(z-a))`

4.  **Inverse Z-Transform:**
    *   `y[n] = (1/(1-a)) * u[n] - (a/(1-a)) * a^n u[n]`
    *   `y[n] = (1/(1-a)) * (1 - a^(n+1)) * u[n]`

**Example 2: Determining Output of an LTI System**

Suppose an LTI system has an impulse response `h[n] = δ[n] - δ[n-1]`.  Find the output `y[n]` when the input is `x[n] = u[n]`.

1.  **Z-Transforms:**
    *   `X(z) = z/(z-1)`, ROC: |z| > 1
    *   `H(z) = 1 - z^(-1) = (z-1)/z`, ROC: z ≠ 0

2.  **Multiply:**
    *   `Y(z) = X(z) * H(z) = (z/(z-1)) * ((z-1)/z) = 1`
    *   ROC: |z| > 1 (AND) z != 0 -> |z| > 1

3.  **Inverse Z-Transform:**
    *   `y[n] = δ[n]`  (The inverse Z-transform of 1 is the unit impulse function)

**Example 3: ROC Calculation**

Let `x[n] = (1/2)^n u[n]` and `h[n] = (1/3)^n u[n]`.  Find `Y(z)` and its ROC.

1.  **Z-Transforms:**
    *   `X(z) = z/(z - 1/2)`,  ROC: |z| > 1/2
    *   `H(z) = z/(z - 1/3)`,  ROC: |z| > 1/3

2.  **Multiply:**
    *   `Y(z) = X(z) * H(z) = z^2 / ((z - 1/2)(z - 1/3))`

3.  **ROC:**  The ROC of `Y(z)` is the intersection of the individual ROCs:  `|z| > 1/2  ∩  |z| > 1/3`. This means the ROC is `|z| > 1/2`.

**6. Practice Questions/Exercises:**

1.  **Convolution Sum:** Calculate the convolution sum `y[n] = x[n] * h[n]` directly for the following signals:
    *   `x[n] = {1, 2, 1}` for `0 <= n <= 2`, and `x[n] = 0` otherwise.
    *   `h[n] = {1, 1, 1}` for `0 <= n <= 2`, and `h[n] = 0` otherwise.
    **(Answer: y[n] = {1, 3, 4, 3, 1})**

2.  **Z-Transform Convolution:**  Given `x[n] = (1/4)^n u[n]` and `h[n] = u[n]`, find `Y(z)` using the Z-transform convolution theorem.  Then find `y[n]` by taking the inverse Z-transform of `Y(z)`.
    **(Answer: Y(z) = z^2 / ((z - 1)(z - 1/4)),  y[n] = (4/3)u[n] - (1/3)(1/4)^n u[n] )**

3.  **LTI System Output:** An LTI system has an impulse response `h[n] = (0.5)^n u[n]`. Find the output `y[n]` when the input is `x[n] = δ[n] - δ[n-1]`.
     **(Answer:  Y(z) = (z-1)/(z-0.5) = 1-0.5z^(-1)/(1-0.5z^(-1)), y[n] = (0.5)^n u[n] - (0.5)^(n-1)u[n-1] =  δ[n] -0.5(0.5)^(n-1)u[n-1]  = δ[n] - (0.5)^n u[n-1] )**

4.  **ROC Determination:**  If `X(z)` has an ROC of `|z| > 2` and `H(z)` has an ROC of `|z| < 3`, what is the ROC of `Y(z) = X(z) * H(z)`?
    **(Answer: 2 < |z| < 3)**

**7. Important Points to Remember:**

*   **Convolution in Time Domain = Multiplication in Z-Domain.**  This is a core concept.
*   **ROC is Critical:** The ROC is essential for a unique inverse Z-transform and for determining system properties (stability, causality).
*   **LTI System Analysis:** Convolution (via Z-transform) is a powerful tool for analyzing LTI systems. `Y(z) = H(z)X(z)`, where `H(z)` is the system's transfer function.
*   **Causality and Stability:** Understand how the ROC relates to causality and stability.
*   **Graphical Convolution:** Don't forget the graphical method for visualizing and understanding convolution.  While less efficient for calculation, it aids in conceptual understanding.
*   **Partial Fraction Expansion:**  You'll often need to use partial fraction expansion to find the inverse Z-transform after multiplying in the Z-domain.  Practice this!
