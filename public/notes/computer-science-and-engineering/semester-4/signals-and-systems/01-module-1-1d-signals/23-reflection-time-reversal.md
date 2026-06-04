---
title: "Reflection (Time Reversal)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b140"
status: "completed"
scrapedAt: "2026-05-20T16:15:30.950Z"
---
## Signals and Systems: Module 1 - 1D Signals: Reflection (Time Reversal)

**Learning Outcomes:**

*   Understand the concept of time reversal (reflection) of a 1D signal.
*   Be able to mathematically represent the time-reversed signal.
*   Be able to sketch or plot the time-reversed version of a given signal.
*   Understand the effect of time reversal on various types of signals (e.g., periodic, aperiodic, even, odd).
*   Apply time reversal in the context of system analysis (e.g., checking for time-invariance).

---

**1. Key Concepts and Definitions:**

*   **Time Reversal (Reflection):**  Time reversal, also known as reflection or folding, is a transformation applied to a signal x(t) or x[n] that effectively flips the signal around the vertical axis (t=0 or n=0).  In essence, it's like looking at the signal in a mirror placed at the origin.

*   **Mathematical Representation:**
    *   **Continuous-Time Signal:** If x(t) is a continuous-time signal, its time-reversed version is denoted as y(t) and defined as:
        *   `y(t) = x(-t)`

    *   **Discrete-Time Signal:** If x[n] is a discrete-time signal, its time-reversed version is denoted as y[n] and defined as:
        *   `y[n] = x[-n]`

*   **Graphical Interpretation:** To obtain the time-reversed signal, simply replace 't' with '-t' (continuous-time) or 'n' with '-n' (discrete-time) in the signal's expression. Graphically, this means flipping the signal horizontally about the vertical axis (t=0 or n=0).

---

**2. Understanding the Transformation:**

*   The process essentially maps positive time values to negative time values and vice-versa.  The amplitude at t=a becomes the amplitude at t=-a (and similarly for discrete time, n=a becomes n=-a).
*   The amplitude of the signal at t=0 (or n=0) remains unchanged during time reversal since `-0 = 0`.

---

**3. Effects of Time Reversal on Signal Properties:**

*   **Even Signals:** An even signal is defined as `x(t) = x(-t)` (continuous-time) or `x[n] = x[-n]` (discrete-time).  Therefore, *time reversal has no effect on even signals*. They remain unchanged after reflection.

*   **Odd Signals:** An odd signal is defined as `x(t) = -x(-t)` (continuous-time) or `x[n] = -x[-n]` (discrete-time).  Therefore, time reversal effectively *multiplies an odd signal by -1*. `y(t) = x(-t) = -x(t)` and `y[n] = x[-n] = -x[n]`.

*   **Periodic Signals:** If a signal x(t) or x[n] is periodic with period T or N respectively (i.e., `x(t) = x(t+T)` or `x[n] = x[n+N]`), then its time-reversed version y(t) = x(-t) or y[n] = x[-n] is also periodic with the same period. This is because `y(t+T) = x(-(t+T)) = x(-t - T) = x(-t) = y(t)` (and similarly for discrete time).

*   **Aperiodic Signals:** Time reversal of an aperiodic signal generally results in another aperiodic signal.

---

**4. Examples:**

*   **Example 1: Continuous-Time Signal**

    Let `x(t) = e^(-t)u(t)`, where u(t) is the unit step function (u(t) = 1 for t >= 0, u(t) = 0 for t < 0).

    To find y(t) = x(-t), we substitute -t for t:

    `y(t) = e^(-(-t))u(-t) = e^(t)u(-t)`

    This means y(t) = e^(t) for t <= 0 and y(t) = 0 for t > 0.  Sketching x(t) and y(t) visually confirms the reflection.

*   **Example 2: Discrete-Time Signal**

    Let `x[n] = {1, 2, 3, 4, 5}`, for n = {0, 1, 2, 3, 4} respectively.  (Representing a finite-length sequence)

    Then `y[n] = x[-n] = {5, 4, 3, 2, 1}`, for n = {-4, -3, -2, -1, 0} respectively.  Note how the indices are reversed as well as the order of the values.  When graphing, you should align the new sequence to start at the new minimum n value and end at the new maximum n value.

*   **Example 3: Even Signal**

    Let `x(t) = cos(ωt)`.  Since cosine is an even function, `x(-t) = cos(-ωt) = cos(ωt) = x(t)`. Time reversal has no effect.

*   **Example 4: Odd Signal**

    Let `x(t) = sin(ωt)`.  Since sine is an odd function, `x(-t) = sin(-ωt) = -sin(ωt) = -x(t)`. Time reversal changes the sign of the signal.

---

**5. Application in System Analysis:**

*   **Time-Invariance:** Time reversal can be used to check for time-invariance in a system.  A system is time-invariant if a time shift in the input results in the same time shift in the output.  Consider a system T{.} where y(t) = T{x(t)}.  If `T{x(t - t0)} = y(t - t0)`, then the system is time-invariant. To test for time invariance involving time reversal, if `y(t) = T{x(t)}`, then `y(-t) = T{x(-t)}` for a time-invariant system.  If this condition does not hold, the system is time-variant.

---

**6. Practice Questions/Exercises:**

1.  **Question:** Given the signal `x(t) = t * u(t)`, determine and sketch the time-reversed signal `y(t) = x(-t)`.

    **Answer:**
    `y(t) = x(-t) = (-t) * u(-t)`. This means `y(t) = -t` for `t <= 0` and `y(t) = 0` for `t > 0`.  The sketch would show a line with a slope of -1 for negative t-values and zero for positive t-values.

2.  **Question:**  A discrete-time signal is defined as `x[n] = n` for `-2 <= n <= 2` and `x[n] = 0` otherwise.  Find and sketch `y[n] = x[-n]`.

    **Answer:**
    `y[n] = x[-n] = -n` for `-2 <= -n <= 2` which simplifies to `-2 <= n <= 2`.  Therefore, `y[n] = -n` for `-2 <= n <= 2` and `y[n] = 0` otherwise.
    The values would be:
    n = -2: y[-2] = -(-2) = 2
    n = -1: y[-1] = -(-1) = 1
    n = 0: y[0] = -(0) = 0
    n = 1: y[1] = -(1) = -1
    n = 2: y[2] = -(2) = -2

3.  **Question:** If `x(t)` is an odd signal, what is the relationship between `x(t)` and `x(-t)`?

    **Answer:** `x(t) = -x(-t)` or, equivalently, `x(-t) = -x(t)`.

4.  **Question:** Is the time reversal of a periodic signal always periodic? If so, with what period?

    **Answer:** Yes, the time reversal of a periodic signal is always periodic with the *same* period as the original signal.

5.  **Question:**  Consider the system `y(t) = x(t) + x(-t)`.  Is this system time-invariant? Explain.

    **Answer:** Yes, this system is time-invariant. Let's check:

    * Original System: `y(t) = x(t) + x(-t)`
    * Time-Shifted Input:  Let `x'(t) = x(t - t0)`. Then, `y'(t) = x'(t) + x'(-t) = x(t - t0) + x(-t - t0)`
    * Time-Shifted Output: `y(t - t0) = x(t - t0) + x(-(t - t0)) = x(t - t0) + x(-t + t0)`

    Since `y'(t)` (output due to time-shifted input) is not equal to `y(t - t0)`(time-shifted version of the original output), the system is *not* time invariant.

---

**7. Important Points to Remember:**

*   Time reversal flips the signal horizontally around the vertical axis.
*   Even signals are unchanged by time reversal.
*   Odd signals have their sign changed by time reversal.
*   The periodicity of a signal is preserved under time reversal.
*   Time reversal is a fundamental operation in signal processing and system analysis, particularly when investigating system properties like time-invariance.
