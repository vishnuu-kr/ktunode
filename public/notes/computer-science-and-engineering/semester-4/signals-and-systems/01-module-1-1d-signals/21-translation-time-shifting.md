---
title: "Translation (Time Shifting)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b13e"
status: "completed"
scrapedAt: "2026-05-20T16:15:29.526Z"
---
# Signals and Systems - Module 1: 1D Signals - Topic: Translation (Time Shifting)

These notes cover the topic of Time Shifting (Translation) within the context of 1D signals in Signals and Systems.

**Learning Outcomes:**

*   Understand the concept of time shifting for continuous-time and discrete-time signals.
*   Be able to graphically represent time-shifted signals.
*   Determine the equation of a time-shifted signal given the original signal and the time shift value.
*   Understand how time shifting affects the signal's representation.
*   Solve problems involving time shifting.

**1. Key Concepts and Definitions:**

*   **Signal:** A function that conveys information. In this context, we're focusing on 1-Dimensional (1D) signals, meaning they are functions of a single independent variable (typically time, denoted by 't' for continuous-time signals and 'n' for discrete-time signals).

*   **Time Shifting (Translation):**  Modifying a signal by shifting its waveform along the time axis (either to the left or to the right). It essentially delays or advances the signal in time.

    *   **Continuous-Time Signal:**  A signal defined for all values of time *t*. Represented as *x(t)*.
    *   **Discrete-Time Signal:** A signal defined only at discrete values of time *n*. Represented as *x[n]*.

*   **Delay:** Shifting the signal to the right on the time axis (positive time shift).

*   **Advance:** Shifting the signal to the left on the time axis (negative time shift).

**2. Time Shifting in Continuous-Time Signals:**

*   **Original Signal:** *x(t)*

*   **Time-Shifted Signal:** *x(t - t₀)*

    *   *t₀ > 0*:  Delay by *t₀* units. The signal is shifted to the right by *t₀*.
    *   *t₀ < 0*:  Advance by *|t₀|* units. The signal is shifted to the left by *|t₀|*.

*   **Explanation:**  To obtain the time-shifted signal *x(t - t₀)*, replace every instance of 't' in the original signal *x(t)* with '(t - t₀)'.

**Example (Continuous-Time):**

Let *x(t) = u(t)* (the unit step function, which is 0 for t < 0 and 1 for t ≥ 0).

*   **Delay by 2 units (t₀ = 2):**  *x(t - 2) = u(t - 2)*.  This means the step function is now 0 for t < 2 and 1 for t ≥ 2.

*   **Advance by 1 unit (t₀ = -1):** *x(t - (-1)) = x(t + 1) = u(t + 1)*.  This means the step function is now 0 for t < -1 and 1 for t ≥ -1.

**Graphical Representation (Continuous-Time):**

Imagine the graph of *x(t)*.

*   **Delay:**  Slide the entire graph to the *right* by *t₀* units.
*   **Advance:** Slide the entire graph to the *left* by *|t₀|* units.

**3. Time Shifting in Discrete-Time Signals:**

*   **Original Signal:** *x[n]*

*   **Time-Shifted Signal:** *x[n - n₀]*

    *   *n₀ > 0*:  Delay by *n₀* units. The signal is shifted to the right by *n₀*.
    *   *n₀ < 0*:  Advance by *|n₀|* units. The signal is shifted to the left by *|n₀|*.

*   **Explanation:**  To obtain the time-shifted signal *x[n - n₀]*, replace every instance of 'n' in the original signal *x[n]* with '(n - n₀)'.

**Example (Discrete-Time):**

Let *x[n] = u[n]* (the discrete-time unit step function, which is 0 for n < 0 and 1 for n ≥ 0).

*   **Delay by 3 units (n₀ = 3):**  *x[n - 3] = u[n - 3]* This means the step function is now 0 for n < 3 and 1 for n ≥ 3.

*   **Advance by 2 units (n₀ = -2):** *x[n - (-2)] = x[n + 2] = u[n + 2]* This means the step function is now 0 for n < -2 and 1 for n ≥ -2.

**Graphical Representation (Discrete-Time):**

Imagine the graph of *x[n]* as a set of impulses or dots at integer values of *n*.

*   **Delay:**  Shift each impulse/dot to the *right* by *n₀* units.
*   **Advance:** Shift each impulse/dot to the *left* by *|n₀|* units.

**4. How Time Shifting Affects Signal Representation:**

*   Time shifting only changes the *position* of the signal along the time axis.  It does *not* change the signal's *shape* or *amplitude*.
*   It's a fundamental operation used in many signal processing applications, such as:
    *   Delaying a signal to synchronize it with another.
    *   Compensating for propagation delays.
    *   Implementing digital filters.

**5. Important Points to Remember:**

*   Pay close attention to the sign of the time shift value (*t₀* or *n₀*).  A positive value represents a delay (shift to the right), and a negative value represents an advance (shift to the left).
*   When dealing with complex signals or equations, carefully substitute `(t - t₀)` or `(n - n₀)` for `t` or `n`, respectively.
*   Practice sketching time-shifted signals to develop a strong intuitive understanding.
*   Time Shifting is a *linear* operation.  This means that if you have a sum of signals, time shifting each individual signal and then summing them will produce the same result as summing the signals first and then time shifting the result.

**6. Practice Questions/Exercises:**

**Continuous-Time:**

1.  **Question:** Given *x(t) = e^(-t)u(t)*, find *x(t - 1)* and *x(t + 2)* and sketch them.

    **Answer:**
    *   *x(t - 1) = e^-(t-1)u(t-1)*.  This is an exponentially decaying signal that starts at t=1.
    *   *x(t + 2) = e^-(t+2)u(t+2)*.  This is an exponentially decaying signal that starts at t=-2.  (Remember, the exponential will only be active where u(t+2) = 1).

2.  **Question:**  A signal *x(t)* is defined as:

    *   *x(t) = t,  0 ≤ t ≤ 1*
    *   *x(t) = 0,  otherwise*

    Find and sketch *x(t - 0.5)*.

    **Answer:**
    *   *x(t - 0.5) = (t - 0.5), 0 ≤ (t - 0.5) ≤ 1*  This simplifies to *0.5 ≤ t ≤ 1.5*
    *   *x(t - 0.5) = 0, otherwise*
    *   The resulting signal is a ramp function from 0.5 to 1.5, with a value of 0 at t=0.5 and a value of 1 at t=1.5.

**Discrete-Time:**

1.  **Question:** Given *x[n] = {1, 2, 3, 4, 5}*, where the value 3 is at *n = 0*, find and sketch *x[n - 2]* and *x[n + 1]*.  (Express the sequence explicitly.)

    **Answer:**

    *   *x[n] = {1, 2, 3, 4, 5}* with the arrow (reference point) under the 3 indicating its location at n = 0.
    *   *x[n - 2] = {1, 2, 3, 4, 5}* with the arrow under the 1 now because 3 is now at n=2, so we have shifted right.  Written out: x[n-2] = {..., 0, 0, 1, 2, 3, 4, 5, 0, ...} arrow is under the `1`
    *   *x[n + 1] = {1, 2, 3, 4, 5}* with the arrow under the 4 because 3 is now at n=-1, so we have shifted left. Written out: x[n+1] = {..., 0, 1, 2, 3, 4, 5, 0, ...} arrow is under the `4`

2.  **Question:**  Let *x[n] = δ[n]* (the discrete-time unit impulse function, which is 1 for n = 0 and 0 otherwise). Find and sketch *x[n - 5]*.

    **Answer:**  *x[n - 5] = δ[n - 5]*. This is an impulse function that is 1 at n = 5 and 0 otherwise.

**7.  Advanced Considerations (Optional):**

*   **Time Shifting and System Properties:** How does time shifting interact with system properties like linearity, time-invariance, causality, and stability?  (This is usually covered in later modules, but it's good to start thinking about it.)
*   **Applications in Communication Systems:** How is time shifting used in communication systems for synchronization and equalization?

These notes provide a solid foundation for understanding time shifting in the context of 1D signals.  Practice the examples and exercises to solidify your understanding.  Good luck!
