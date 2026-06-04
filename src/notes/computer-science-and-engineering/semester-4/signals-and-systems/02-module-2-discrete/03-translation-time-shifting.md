---
title: "Translation (Time Shifting)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b14a"
status: "completed"
scrapedAt: "2026-05-20T16:15:37.114Z"
---
# SIGNALS AND SYSTEMS - Module 2: Discrete - Topic: Translation (Time Shifting)

## Learning Outcomes:

*   Understand the concept of time shifting (translation) in discrete-time signals.
*   Be able to mathematically represent time-shifted discrete-time signals.
*   Determine the time-shifted version of a given discrete-time signal.
*   Sketch or plot time-shifted discrete-time signals.
*   Apply time shifting to solve problems involving discrete-time systems.

## 1. Key Concepts and Definitions:

*   **Discrete-Time Signal:** A signal defined only at discrete points in time, represented as  `x[n]`, where `n` is an integer.

*   **Time Shifting (Translation):**  A transformation of a discrete-time signal that shifts its position in time without altering its shape.  This means the signal `x[n]` is either delayed or advanced in time.

*   **Time Delay:** Shifting the signal to the right.  For a delay of `k` samples, the delayed signal is `x[n-k]`.  If `k > 0`, the signal is delayed by `k` samples.

*   **Time Advance:** Shifting the signal to the left.  For an advance of `k` samples, the advanced signal is `x[n+k]`.  If `k > 0`, the signal is advanced by `k` samples.

*   **Mathematical Representation:**

    *   Delay by `k` samples:  `y[n] = x[n - k]`
    *   Advance by `k` samples: `y[n] = x[n + k]`

## 2.  Mathematical Representation and Interpretation

*   The expression `x[n - k]` represents the signal `x[n]` shifted by `k` samples.

    *   If `k` is positive, the signal is shifted to the *right* (delayed).  The value of the new signal at time `n` is the value of the original signal at time `n - k`.
    *   If `k` is negative, the signal is shifted to the *left* (advanced). The value of the new signal at time `n` is the value of the original signal at time `n - k`.

*   **Example:** Let `x[n]` be a signal.

    *   `x[n - 2]` represents `x[n]` delayed by 2 samples.  The value of `x[n - 2]` at `n = 3` is equal to the value of `x[n]` at `n = 3 - 2 = 1`.
    *   `x[n + 1]` represents `x[n]` advanced by 1 sample. The value of `x[n + 1]` at `n = 0` is equal to the value of `x[n]` at `n = 0 + 1 = 1`.

## 3.  Determining and Sketching Time-Shifted Signals:

*   **Steps:**

    1.  **Identify the original signal `x[n]`**. Understand its values at different time indices.
    2.  **Determine the shift value `k`**.  If `k > 0`, it's a delay; if `k < 0`, it's an advance.
    3.  **Create a new time axis for the shifted signal `y[n]`**.
    4.  **For each time index `n` in the shifted signal, determine the corresponding time index in the original signal using the time shift equation ( `n-k` or `n+k`).**
    5.  **Assign the value of the original signal at the determined time index to the corresponding time index in the shifted signal.**  If the time index falls outside the defined range of `x[n]`, assume the value is zero (or as defined in the problem statement).
    6.  **Sketch the shifted signal `y[n]`**.

*   **Example 1: Delay**

    Let `x[n] = {1, 2, 3, 4}` for `n = {0, 1, 2, 3}` respectively (values are listed in order of increasing n).  Find and sketch `y[n] = x[n - 2]`.

    *   `k = 2` (delay of 2 samples)
    *   `y[n] = x[n - 2]`

    | n (y[n]) | n - 2 (x[n-2]) | x[n-2] | y[n] |
    |---|---|---|---|
    | -1 | -3 | 0 | 0 |
    | 0 | -2 | 0 | 0 |
    | 1 | -1 | 0 | 0 |
    | 2 | 0 | 1 | 1 |
    | 3 | 1 | 2 | 2 |
    | 4 | 2 | 3 | 3 |
    | 5 | 3 | 4 | 4 |

    Therefore, `y[n] = {0, 0, 1, 2, 3, 4}` for `n = {2, 3, 4, 5}`. Notice how the signal has been shifted to the right.

*   **Example 2: Advance**

    Let `x[n] = {1, 2, 3, 4}` for `n = {0, 1, 2, 3}` respectively.  Find and sketch `y[n] = x[n + 1]`.

    *   `k = -1` (advance of 1 sample)
    *   `y[n] = x[n + 1]`

    | n (y[n]) | n + 1 (x[n+1]) | x[n+1] | y[n] |
    |---|---|---|---|
    | -1 | 0 | 1 | 1 |
    | 0 | 1 | 2 | 2 |
    | 1 | 2 | 3 | 3 |
    | 2 | 3 | 4 | 4 |
    | 3 | 4 | 0 | 0 |

    Therefore, `y[n] = {1, 2, 3, 4, 0}` for `n = {-1, 0, 1, 2, 3}`. Notice how the signal has been shifted to the left.

## 4. Application of Time Shifting in Discrete-Time Systems

*   Time shifting is a fundamental operation in analyzing and designing discrete-time systems.  Many systems exhibit properties related to time invariance, meaning their behavior doesn't change based on when the input is applied (only the *timing* of the output changes).

*   **Time-Invariant Systems:** A system is time-invariant if a time shift in the input signal results in the same time shift in the output signal.

    *   If `x[n]` produces `y[n]`, then `x[n - k]` must produce `y[n - k]` for all `k`.

*   **Example:**  Consider a system where the output is the running average of the last 3 input samples: `y[n] = (x[n] + x[n-1] + x[n-2]) / 3`. This is a time-invariant system. If the input is delayed by 'k' samples i.e., x[n-k] then the output will be y[n-k] = (x[n-k] + x[n-k-1] + x[n-k-2]) / 3

## 5. Practice Questions/Exercises:

**Question 1:**

Let `x[n] = {2, 1, -1, 0, 3}` for `n = {0, 1, 2, 3, 4}` respectively.  Find `y[n] = x[n - 1]` and specify the values of `n` for which `y[n]` is defined. Sketch both signals.

**Answer 1:**

*   `y[n] = x[n - 1]` (delay of 1 sample)

    | n (y[n]) | n - 1 (x[n-1]) | x[n-1] | y[n] |
    |---|---|---|---|
    | -1 | -1 | 0 | 0 |
    | 0 | -0 | 2 | 2 |
    | 1 | 0 | 1 | 1 |
    | 2 | 1 | -1 | -1 |
    | 3 | 2 | 0 | 0 |
    | 4 | 3 | 3 | 3 |

    Therefore, `y[n] = {0, 2, 1, -1, 0, 3}` for `n = {1, 2, 3, 4}`.  Sketching would involve plotting these points on a graph with `n` on the x-axis and `y[n]` or `x[n]` on the y-axis.

**Question 2:**

Let `x[n] = u[n]`, where `u[n]` is the unit step function (u[n] = 1 for n >= 0, and u[n] = 0 for n < 0).  Find and sketch `y[n] = x[n + 2]`.

**Answer 2:**

*   `y[n] = x[n + 2]` (advance of 2 samples)

    `y[n] = u[n + 2]`
    `y[n] = 1 for n + 2 >= 0  =>  n >= -2`
    `y[n] = 0 for n + 2 < 0   =>  n < -2`

    Therefore, `y[n]` is a unit step function shifted to the left by 2 samples.  It's 1 for `n >= -2` and 0 for `n < -2`.

**Question 3:**

Suppose a discrete-time system is defined by `y[n] = x[n] - x[n-1]`.  If the input `x[n] = {1, 2, 3, 4}` for `n = {0, 1, 2, 3}` respectively, determine the output `y[n]`.

**Answer 3:**

`y[n] = x[n] - x[n-1]`

* n = 0:  y[0] = x[0] - x[-1] = 1 - 0 = 1
* n = 1:  y[1] = x[1] - x[0] = 2 - 1 = 1
* n = 2:  y[2] = x[2] - x[1] = 3 - 2 = 1
* n = 3:  y[3] = x[3] - x[2] = 4 - 3 = 1

Therefore, `y[n] = {1, 1, 1, 1}` for `n = {0, 1, 2, 3}`.

## 6. Important Points to Remember:

*   Time shifting only affects the *position* of the signal in time, not its amplitude or shape.
*   A positive shift `k` in `x[n - k]` represents a *delay*.
*   A negative shift `k` in `x[n + k]` (which can be written as `x[n - (-k)]` where `-k` is a positive number) represents an *advance*.
*   When sketching, carefully track the indices of the shifted signal relative to the original signal.
*   Time shifting is a key concept in understanding time-invariant systems.
*   Remember to handle cases where the shifted index falls outside the defined range of the original signal (often by assuming a value of 0).
