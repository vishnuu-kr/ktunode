---
title: "Bounded Sequences."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b138"
status: "completed"
scrapedAt: "2026-05-20T16:15:25.978Z"
---
## Signals and Systems: Module 1 - 1D Signals: Bounded Sequences

**Introduction:** This module introduces the fundamental concept of bounded sequences, which is crucial for understanding the behavior and stability of discrete-time signals in signals and systems.  We will define what a bounded sequence is, explore different types of bounds, and see examples of bounded and unbounded sequences.

**Learning Outcomes:**

*   Understand the definition of a bounded sequence.
*   Identify the upper and lower bounds of a sequence, if they exist.
*   Determine if a given sequence is bounded or unbounded.
*   Apply the concept of boundedness to analyze the behavior of discrete-time signals.
*   Provide examples of real-world sequences that exhibit bounded or unbounded behavior.

**1. Key Concepts and Definitions:**

*   **Sequence:** A sequence is an ordered list of numbers, often indexed by integers. We can represent a sequence as x[n], where 'n' is an integer (usually representing discrete time), and x[n] is the value of the sequence at time 'n'.

*   **Bounded Sequence:** A sequence x[n] is said to be *bounded* if there exists a finite positive real number M such that:

    `|x[n]| ≤ M`  for all n.

    In simpler terms, a sequence is bounded if all its elements are within a certain range [-M, M].  M is called the **bound** of the sequence.

*   **Upper Bound:** A sequence x[n] is bounded above if there exists a finite real number U such that:

    `x[n] ≤ U` for all n.

    U is called an **upper bound**.

*   **Lower Bound:** A sequence x[n] is bounded below if there exists a finite real number L such that:

    `x[n] ≥ L` for all n.

    L is called a **lower bound**.

*   **Unbounded Sequence:** A sequence is said to be *unbounded* if it is not bounded. This means that no finite number M exists such that  `|x[n]| ≤ M` for all n. In other words, the sequence values increase (or decrease) without limit as 'n' increases.

**2. Identifying Bounds and Determining Boundedness:**

To determine if a sequence is bounded, follow these steps:

1.  **Analyze the sequence:**  Examine the mathematical expression or values of the sequence x[n] as 'n' varies.
2.  **Look for an upper bound:** Try to find a finite number U such that x[n] ≤ U for all 'n'.
3.  **Look for a lower bound:** Try to find a finite number L such that x[n] ≥ L for all 'n'.
4.  **Check for boundedness:** If both an upper bound U and a lower bound L exist, the sequence is bounded. The bound M can be chosen as `M = max(|U|, |L|)`.
5.  **If either upper or lower bound cannot be found:** The sequence is unbounded.
6.  **Using the absolute value definition:** Find the maximum absolute value that `|x[n]|` can attain. If that maximum value is finite, the sequence is bounded and the maximum value is a bound M.

**3. Examples:**

*   **Example 1: Bounded Sequence**

    `x[n] = cos(n)` for all n.

    *   Analysis: The cosine function oscillates between -1 and 1.
    *   Upper Bound: U = 1
    *   Lower Bound: L = -1
    *   Bounded: Yes, since both upper and lower bounds exist. `M = max(|1|, |-1|) = 1`

*   **Example 2: Bounded Sequence**

    `x[n] = 5 * (0.8)^n` for n ≥ 0

    *   Analysis:  This is a decaying exponential sequence. As n increases, x[n] approaches 0.
    *   Upper Bound: U = 5 (at n=0)
    *   Lower Bound: L = 0
    *   Bounded: Yes, since both upper and lower bounds exist. `M = max(|5|, |0|) = 5`

*   **Example 3: Unbounded Sequence**

    `x[n] = n` for all n.

    *   Analysis: This sequence increases linearly with 'n'.
    *   Upper Bound: No finite upper bound exists. As n increases, x[n] increases without limit.
    *   Lower Bound: No
    *   Bounded: No, the sequence is unbounded.

*   **Example 4: Unbounded Sequence**

    `x[n] = (-1)^n * n` for all n.

    *   Analysis: This sequence oscillates between positive and negative values, with the magnitude increasing linearly with 'n'.
    *   Upper Bound: No finite upper bound exists.
    *   Lower Bound: No finite lower bound exists.
    *   Bounded: No, the sequence is unbounded.

*   **Example 5: Bounded Sequence**

    `x[n] = sin(n) / n` for n > 0

    *   Analysis: As n approaches infinity, x[n] approaches 0. The largest magnitude occurs near n=1.
    *   Upper Bound:  Since |sin(n)| is always less than or equal to 1, then `|x[n]| <= 1/n`. The maximum of 1/n for n>0 is at n=1. Therefore, the upper bound could be 1.
    *   Lower Bound: L = -1
    *   Bounded: Yes. M = 1.

**4. Importance of Boundedness:**

*   **Stability:** Boundedness is closely related to the concept of stability in systems.  For example, in Linear Time-Invariant (LTI) systems, if a bounded input always produces a bounded output (BIBO stability), the system is considered stable.
*   **Convergence:** Boundedness is a necessary (but not sufficient) condition for the convergence of a sequence.  A convergent sequence *must* be bounded.
*   **Signal Representation:** In digital signal processing, bounded signals are easier to represent and process because they can be stored using a finite number of bits.
*   **Avoiding Overflow:** In practical applications, dealing with unbounded signals can lead to overflow issues in hardware and software implementations.

**5. Real-World Examples:**

*   **Bounded:**
    *   Audio signals representing speech or music (amplitude is limited by the physical constraints of the recording device).
    *   Sensor readings from a temperature sensor (temperature cannot reach infinity).
    *   Digital images (pixel values are within a certain range, e.g., 0-255).
*   **Unbounded (Idealized):**
    *   Theoretical models of population growth that don't consider resource limitations.
    *   Mathematical models of certain physical phenomena that ignore damping or saturation effects.

**6. Practice Questions/Exercises:**

1.  **Determine if the following sequences are bounded or unbounded. If bounded, find a bound M.**
    *   (a) `x[n] = 2^n * u[n]`, where u[n] is the unit step function (u[n] = 1 for n ≥ 0, u[n] = 0 for n < 0).
    *   (b) `x[n] = (-1)^n * 0.5^n` for n ≥ 0
    *   (c) `x[n] = n / (n + 1)` for n ≥ 0
    *   (d) `x[n] = e^(-n) * cos(2πn)` for n ≥ 0

2.  **Give an example of a bounded sequence that is not convergent.**

3.  **Give an example of an unbounded sequence that is not monotonically increasing or decreasing.**

**7. Answers to Practice Questions/Exercises:**

1.  *   (a) **Unbounded.** As n increases, 2^n increases without bound.
    *   (b) **Bounded.** `M = 1`.
    *   (c) **Bounded.**  `M = 1`. The sequence approaches 1 as n approaches infinity.
    *   (d) **Bounded.**  `M = 1`.  The exponential decays the sequence and `cos(2πn)` varies between -1 and 1.

2.  `x[n] = (-1)^n`. This sequence is bounded (M = 1), but it oscillates between -1 and 1 and does not converge to a single value.

3.  `x[n] = n * cos(n)`. This sequence is unbounded because the `n` factor causes the magnitude to increase without bound. It's not monotonic because the `cos(n)` factor causes it to oscillate between positive and negative values.

**8. Important Points to Remember:**

*   A sequence must have *both* a finite upper and lower bound to be considered bounded.
*   If a sequence is unbounded, it means that its values are not contained within a finite range.
*   Boundedness is a crucial property for analyzing the stability and behavior of discrete-time systems.
*   A convergent sequence *must* be bounded, but a bounded sequence is not necessarily convergent.  Convergence implies that the sequence approaches a limit as n approaches infinity.
*   Understanding boundedness helps in practical signal processing applications to avoid overflow errors and ensure proper system operation.
