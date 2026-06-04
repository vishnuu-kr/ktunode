---
title: "Operations on Signals  - Time shifting (Translation)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b139"
status: "completed"
scrapedAt: "2026-05-20T16:15:26.683Z"
---
# SIGNALS AND SYSTEMS - Module 1: 1D Signals - Operations on Signals: Time Shifting (Translation)

## 1. Introduction

These notes cover the operation of **time shifting (translation)** performed on one-dimensional (1D) signals. Time shifting is a fundamental signal manipulation technique used extensively in signal processing applications. We will explore its definition, effect on signals, mathematical representation, and examples.

## 2. Learning Outcomes

By the end of this module, you should be able to:

*   Define time shifting (translation) of a signal.
*   Determine the effect of time shifting on continuous-time and discrete-time signals.
*   Mathematically represent time shifting.
*   Apply time shifting to given signals.
*   Distinguish between time advance and time delay.
*   Sketch the time-shifted version of a given signal.

## 3. Key Concepts and Definitions

### 3.1 Definition of Time Shifting (Translation)

Time shifting, also known as translation, refers to shifting a signal along the time axis, either to the left (time advance) or to the right (time delay).  It represents the signal occurring earlier or later in time compared to its original form.

### 3.2 Mathematical Representation

*   **Continuous-Time Signals:**

    If `x(t)` is a continuous-time signal, then its time-shifted version `y(t)` is given by:

    `y(t) = x(t - t₀)`

    *   If `t₀ > 0`, the signal is **delayed** by `t₀` units of time (shifted to the right).  This means the signal occurs *later* than it originally did.
    *   If `t₀ < 0`, the signal is **advanced** by `|t₀|` units of time (shifted to the left). This means the signal occurs *earlier* than it originally did.

*   **Discrete-Time Signals:**

    If `x[n]` is a discrete-time signal, then its time-shifted version `y[n]` is given by:

    `y[n] = x[n - n₀]`

    *   If `n₀ > 0`, the signal is **delayed** by `n₀` units of time (shifted to the right).
    *   If `n₀ < 0`, the signal is **advanced** by `|n₀|` units of time (shifted to the left).

### 3.3 Time Delay vs. Time Advance

*   **Time Delay:**  The signal occurs *later* in time.  This is represented by `t₀ > 0` for continuous-time and `n₀ > 0` for discrete-time signals.  The signal is shifted to the *right*.

*   **Time Advance:** The signal occurs *earlier* in time. This is represented by `t₀ < 0` for continuous-time and `n₀ < 0` for discrete-time signals.  The signal is shifted to the *left*.

## 4. Examples

### 4.1 Continuous-Time Signal Example

Let `x(t) = u(t)` (the unit step function)

1.  **Time Delay by 2:** `y(t) = x(t - 2) = u(t - 2)`. This is a unit step function that starts at t = 2 instead of t = 0.

2.  **Time Advance by 1:** `y(t) = x(t + 1) = u(t + 1)`. This is a unit step function that starts at t = -1 instead of t = 0.

### 4.2 Discrete-Time Signal Example

Let `x[n] = {1, 2, 3, 4}` where the origin (n=0) is at the first element (1).  We can represent this as `x[n] = δ[n] + 2δ[n-1] + 3δ[n-2] + 4δ[n-3]`.

1.  **Time Delay by 1:** `y[n] = x[n - 1] = {0, 1, 2, 3, 4}` where the origin is at the second element (1).

2.  **Time Advance by 2:** `y[n] = x[n + 2] = {3, 4, 0, 0}`  where the origin is at the first element (3), assuming values outside the original defined range are zero. Remember, `x[n+2]` means we're looking at the values of `x` two positions *before* their current index in `y`.

## 5. Applying Time Shifting

To apply time shifting:

1.  **Identify the original signal:**  `x(t)` or `x[n]`.
2.  **Determine the shift amount:** `t₀` (continuous) or `n₀` (discrete). Note the sign: positive for delay, negative for advance.
3.  **Substitute:** Replace `t` with `t - t₀` in `x(t)` or `n` with `n - n₀` in `x[n]`.
4.  **Sketch the new signal:** This will visually represent the shift. Pay attention to the starting and ending points of the signal.

## 6. Important Points to Remember

*   **Sign Convention:**  `x(t - t₀)` delays if `t₀ > 0` and advances if `t₀ < 0`.  Same principle applies to discrete-time signals.
*   **Effect on Signal Shape:** Time shifting only changes the signal's position on the time axis; it does *not* alter the shape of the signal.  The amplitude and duration remain the same.
*   **Causality:** A time-advanced signal is non-causal because its output depends on future values of the input. A time-delayed signal is causal.
*   **Visualizing the Shift:**  Imagine sliding the entire signal left (advance) or right (delay) along the time axis.

## 7. Practice Questions and Exercises

**Question 1:**

A continuous-time signal is defined as:

`x(t) =  { t,  0 <= t <= 2`
`        { 0,  otherwise`

Determine and sketch `y(t) = x(t - 1)` and `z(t) = x(t + 0.5)`.

**Answer 1:**

*   `y(t) = x(t - 1)`:  Delay by 1.

    `y(t) =  { t - 1,  1 <= t <= 3`
    `        { 0,  otherwise`

    The signal `y(t)` is a ramp that starts at t=1 and ends at t=3.

*   `z(t) = x(t + 0.5)`: Advance by 0.5

    `z(t) =  { t + 0.5,  -0.5 <= t <= 1.5`
    `        { 0,  otherwise`

    The signal `z(t)` is a ramp that starts at t=-0.5 and ends at t=1.5.

**Question 2:**

A discrete-time signal is defined as: `x[n] = {2, 1, -1, 3}` where the origin is at n=0 (at value 2). Find and sketch `y[n] = x[n + 2]` and `z[n] = x[n - 1]`.

**Answer 2:**

*   `y[n] = x[n + 2]`: Advance by 2.  This means shift the signal 2 units to the left.

    `y[n] = {-1, 3, 0, 0}` where the origin is at n=0 (at value -1).  We assume zeros for values outside the original range of `x[n]`.

*   `z[n] = x[n - 1]`: Delay by 1.  This means shift the signal 1 unit to the right.

    `z[n] = {0, 2, 1, -1, 3}` where the origin is at n=1 (at value 2).  We assume a zero for values outside the original range of `x[n]`.

**Question 3:**

If a system has the following input-output relationship: `y(t) = x(t - 3)`, is this system causal?

**Answer 3:**

Yes, the system is causal. The output `y(t)` at time `t` depends only on the input `x(t)` at time `t-3`, which is a past value.  Therefore, the system is causal.

## 8. Conclusion

Understanding time shifting is crucial for analyzing and manipulating signals in various signal processing applications. By mastering the concepts and practicing with examples, you will be well-equipped to apply time shifting effectively. Remember the sign conventions and the importance of visualizing the shift to avoid errors.
