---
title: "Unit impulse, step and ramp sequences"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b131"
status: "completed"
scrapedAt: "2026-05-20T16:15:21.072Z"
---
## SIGNALS AND SYSTEMS - Module 1: 1D Signals - Unit Impulse, Step, and Ramp Sequences

**Learning Outcomes:**

*   Understand the definition and properties of the unit impulse, unit step, and ramp sequences.
*   Represent these sequences mathematically and graphically.
*   Perform basic operations (scaling, shifting) on these sequences.
*   Understand the relationship between these sequences (integration/summation and differentiation/difference).
*   Apply these sequences to represent other discrete-time signals.

**1. Key Concepts and Definitions:**

*   **Sequence:** A sequence is a discrete-time signal represented as a function of an integer variable 'n', denoted as x[n]. It's a series of values at discrete points in time.

*   **Unit Impulse Sequence (Delta Sequence) - δ[n]:**
    *   **Definition:** The unit impulse sequence is defined as:
        ```
        δ[n] = { 1,  n = 0
                { 0,  n ≠ 0
        ```
    *   **Interpretation:** It's a sequence that has a value of 1 at n = 0 and 0 everywhere else.
    *   **Graphical Representation:**  A vertical arrow of height 1 at n=0.
    *   **Importance:** It serves as a building block for representing other discrete-time signals. It's the discrete-time equivalent of the Dirac delta function.

*   **Unit Step Sequence - u[n]:**
    *   **Definition:** The unit step sequence is defined as:
        ```
        u[n] = { 1,  n ≥ 0
                { 0,  n < 0
        ```
    *   **Interpretation:** It's a sequence that is 0 for n < 0 and 1 for n ≥ 0.  It represents the "turning on" of a signal at time n = 0.
    *   **Graphical Representation:** A horizontal line at y=0 for n < 0, then a jump to y=1 at n=0, and a horizontal line at y=1 for n ≥ 0.
    *   **Importance:** Used to represent signals that start at a specific time and to construct other signals.

*   **Ramp Sequence - r[n]:**
    *   **Definition:** The ramp sequence is defined as:
        ```
        r[n] = { n,  n ≥ 0
                { 0,  n < 0
        ```
    *   **Interpretation:**  It's a sequence whose value increases linearly with 'n' for n ≥ 0 and is 0 for n < 0.
    *   **Graphical Representation:**  A horizontal line at y=0 for n < 0, then a line with a slope of 1 starting at (0,0) and increasing linearly for n ≥ 0.
    *   **Importance:** Represents signals that increase linearly over time and can be used in control systems analysis.

**2. Mathematical Representation and Properties:**

*   **Unit Impulse:**
    *   **Sifting Property:**  For any sequence x[n]:
        ```
        x[n] * δ[n] = x[0]
        x[n] * δ[n - k] = x[k]  (Convolution Property)
        ```
        Where '*' denotes convolution.  This property is crucial for signal decomposition and analysis.

*   **Unit Step:**
    *   **Relationship to Impulse:**
        ```
        u[n] = Σ  δ[k]  (from k = -∞ to n)  //  u[n] is the running sum (accumulation) of the impulse sequence.
        ```
        This means the unit step is the cumulative sum of the unit impulse sequence.

*   **Ramp:**
    *   **Relationship to Step:**
        ```
        r[n] = Σ u[k]  (from k = -∞ to n)  // r[n] is the running sum of the step sequence.
        ```
        The ramp sequence is the cumulative sum of the unit step sequence.

    *   **Relationship to Impulse (indirectly):**
        ```
        r[n] = Σ (Σ δ[l]) (from k=-inf to n, from l=-inf to k)
        ```

**3. Operations on Sequences:**

*   **Scaling:**  Multiplying a sequence by a constant 'A':  y[n] = A * x[n]

    *   Example:  y[n] = 2 * u[n] doubles the amplitude of the unit step.

*   **Shifting:** Shifting a sequence in time by 'k' samples: y[n] = x[n - k]

    *   If k > 0, the sequence is shifted to the *right* (delayed).
    *   If k < 0, the sequence is shifted to the *left* (advanced).

    *   Example: u[n - 3] is a unit step that starts at n = 3.

*   **Time Reversal (Folding):** y[n] = x[-n]

    *   Example: If x[n] = {1, 2, 3, 4} for n = {0, 1, 2, 3}, then x[-n] = {4, 3, 2, 1} for n = {-3, -2, -1, 0}.

*   **Summation:** Adding two sequences: y[n] = x1[n] + x2[n]

    *   Example:  y[n] = u[n] + δ[n] results in y[0] = 2, and y[n] = 1 for n > 0, y[n] = 0 for n < 0.

**4. Relationship Between Sequences (Integration/Summation and Differentiation/Difference):**

*   **Summation (Discrete-Time Integration):**  As shown above, the unit step is the summation of the unit impulse, and the ramp is the summation of the unit step. This is analogous to integration in continuous-time signals.

*   **Difference (Discrete-Time Differentiation):**
    *   The first difference of a sequence x[n] is defined as:  Δx[n] = x[n] - x[n-1]

    *   **Relationship to Impulse:** The first difference of the unit step sequence is the unit impulse sequence:

        ```
        Δu[n] = u[n] - u[n-1] = δ[n]
        ```

    *   **Relationship to Step:**  The first difference of the ramp is the unit step, except at n=0 (care must be taken when defining r[-1], often taken as 0):

        ```
        Δr[n] = r[n] - r[n-1] = u[n]
        ```
        For n > 0: r[n] - r[n-1] = n - (n-1) = 1
        For n = 0: r[0] - r[-1] = 0 - 0 = 0  if r[-1] is defined as 0. However, Δr[0] should result in u[0] = 1. Some sources handle this subtlety explicitly.

**5. Representing Other Discrete-Time Signals:**

Any discrete-time signal can be represented as a sum of scaled and shifted unit impulses.  This is fundamental to signal decomposition and analysis.

*   **Example:**  Let x[n] = {2, 4, 1, 3} for n = {0, 1, 2, 3}.

    *   x[n] = 2δ[n] + 4δ[n-1] + 1δ[n-2] + 3δ[n-3]

**6. Examples:**

*   **Example 1: Plot y[n] = 3u[n-2] - 2u[n+1]**

    *   `3u[n-2]` is a step of height 3 starting at n=2.
    *   `-2u[n+1]` is a step of height -2 starting at n=-1.
    *   For n < -1: y[n] = 0 - 2 = -2
    *   For n = -1: y[n] = 0 - 2 = -2
    *   For n = 0: y[n] = 0 - 2 = -2
    *   For n = 1: y[n] = 0 - 2 = -2
    *   For n = 2: y[n] = 3 - 2 = 1
    *   For n > 2: y[n] = 3 - 2 = 1

*   **Example 2:  Express x[n] = {1, -2, 3, -4, 0} for n = {0, 1, 2, 3, 4} in terms of unit impulses.**

    *   x[n] = δ[n] - 2δ[n-1] + 3δ[n-2] - 4δ[n-3] + 0δ[n-4]
    *   x[n] = δ[n] - 2δ[n-1] + 3δ[n-2] - 4δ[n-3]

**7. Practice Questions/Exercises:**

1.  **Sketch the sequence y[n] = u[n] - u[n-4]. What does this sequence represent?**

    *   **Answer:**  `y[n]` is 1 for 0 <= n <= 3, and 0 otherwise.  It's a rectangular pulse of length 4.  It can also be represented as:  `y[n] = {1, 1, 1, 1}` for `n = {0, 1, 2, 3}`.

2.  **Express the sequence x[n] = {0, 1, 2, 3, 2, 1, 0} for n = {0, 1, 2, 3, 4, 5, 6} in terms of unit impulses.**

    *   **Answer:** x[n] = δ[n-1] + 2δ[n-2] + 3δ[n-3] + 2δ[n-4] + δ[n-5]

3.  **What is the first difference of r[n-2]?**

    *   **Answer:**  Δr[n-2] = r[n-2] - r[n-3] = u[n-2] (a step function starting at n=2)

4.  **Simplify the expression: ∑ δ[n-k] from k=0 to 5. Express in a simpler form using u[n].**

    *   **Answer:** This is the summation of a delayed impulse sequence. It evaluates to: δ[n] + δ[n-1] + δ[n-2] + δ[n-3] + δ[n-4] + δ[n-5].  This sequence can be expressed as u[n] - u[n-6].  It's a rectangular pulse from n=0 to n=5.

5.  **Plot the sequence y[n] = δ[n+1] + δ[n] + δ[n-1]**

    *   **Answer:** The sequence has a value of 1 at n = -1, 0, and 1, and 0 everywhere else.

**8. Important Points to Remember:**

*   The unit impulse is the fundamental building block for representing discrete-time signals.
*   The unit step is the running sum (accumulation) of the unit impulse.
*   The ramp is the running sum of the unit step.
*   Understanding the relationships between these sequences simplifies signal analysis and representation.
*   Be careful when dealing with shifts; a shift of 'k' to the *right* corresponds to x[n - k].
*   The sifting property of the unit impulse is a powerful tool.
*   Discrete-time integration is represented by summation, and differentiation by the difference operator.
