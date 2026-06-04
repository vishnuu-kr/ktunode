---
title: "Time Reversal (Reflection)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b13a"
status: "completed"
scrapedAt: "2026-05-20T16:15:27.396Z"
---
# SIGNALS AND SYSTEMS - Module 1: 1D Signals - Time Reversal (Reflection)

**Learning Outcomes:**

*   Understand the time reversal (reflection) operation on a continuous-time and discrete-time signal.
*   Apply time reversal to various signal types (e.g., sinusoids, exponentials, pulse functions).
*   Determine the effect of time reversal on the properties of signals.
*   Be able to graphically represent the time-reversed version of a signal.

## 1. Introduction to Time Reversal (Reflection)

*   **Definition:** Time reversal, also known as reflection, is a signal transformation that flips a signal about the vertical axis (t=0 for continuous-time, n=0 for discrete-time). It effectively reverses the order of the signal in time.

*   **Mathematical Representation:**

    *   **Continuous-Time:**  If x(t) is a continuous-time signal, then its time-reversed version is given by x(-t).

    *   **Discrete-Time:** If x[n] is a discrete-time signal, then its time-reversed version is given by x[-n].

*   **Graphical Interpretation:** Imagine holding a mirror vertically at t=0 (or n=0) and reflecting the signal.  The reflected image is the time-reversed signal.

## 2. Key Concepts and Definitions

*   **Signal:** A function of time (or other independent variable) that conveys information.  We're focusing on one-dimensional signals here.

*   **Continuous-Time Signal:** A signal defined for all values of time, typically denoted by x(t) where 't' is a continuous variable.

*   **Discrete-Time Signal:**  A signal defined only at discrete points in time, typically denoted by x[n] where 'n' is an integer.

*   **Time Axis:**  The horizontal axis in a signal plot representing time (t for continuous-time, n for discrete-time).

*   **Amplitude Axis:** The vertical axis in a signal plot representing the signal's value (amplitude) at a given time.

## 3. Applying Time Reversal to Different Signal Types

*   **Sinusoidal Signals:**

    *   Consider x(t) = sin(ωt).  The time-reversed version is x(-t) = sin(-ωt) = -sin(ωt).  Therefore, time reversal introduces a negative sign (inverts) if the sine function.
    *   Consider x(t) = cos(ωt).  The time-reversed version is x(-t) = cos(-ωt) = cos(ωt).  Therefore, time reversal has *no effect* if the cosine function because cosine is an even function.

*   **Exponential Signals:**

    *   Consider x(t) = e^(at).  The time-reversed version is x(-t) = e^(-at).  A growing exponential becomes a decaying exponential and vice versa.
    *   Consider x[n] = a^n. The time-reversed version is x[-n] = a^(-n) = (1/a)^n.

*   **Pulse Functions:**

    *   Consider a rectangular pulse centered at t=0:  x(t) = 1 for -T/2 < t < T/2 and x(t) = 0 otherwise.  Since it's centered at zero, the time-reversed version, x(-t), is identical to x(t).
    *   Consider a rectangular pulse *not* centered at t=0: x(t) = 1 for a < t < b and x(t) = 0 otherwise.  The time-reversed version, x(-t), will be 1 for a < -t < b, which simplifies to -b < t < -a. The pulse will be reflected about the y-axis.

*   **Step Functions:**

    *   Continuous-Time Unit Step: u(t) = 1 for t >= 0 and u(t) = 0 for t < 0.  The time-reversed version is u(-t) which is 1 for -t >= 0 (or t <= 0) and 0 for -t < 0 (or t > 0). u(-t) is the reverse step function.
    *   Discrete-Time Unit Step: u[n] = 1 for n >= 0 and u[n] = 0 for n < 0.  The time-reversed version is u[-n] which is 1 for -n >= 0 (or n <= 0) and 0 for -n < 0 (or n > 0).

## 4. Effect of Time Reversal on Signal Properties

*   **Even and Odd Signals:**

    *   **Even Signal:** A signal x(t) (or x[n]) is even if x(t) = x(-t) (or x[n] = x[-n]). Time reversal has no effect on even signals.
    *   **Odd Signal:** A signal x(t) (or x[n]) is odd if x(t) = -x(-t) (or x[n] = -x[-n]). Time reversal inverts odd signals.

*   **Energy and Power Signals:**

    *   **Energy of a Signal:** The total energy of a signal is not affected by time reversal.  This is because energy depends on the square of the signal's amplitude, and squaring eliminates the sign change introduced by the reflection.
    *   **Power of a Signal:** Similarly, the average power of a periodic signal is also not affected by time reversal.

*   **Periodicity:**  Time reversal does not affect the periodicity of a periodic signal. If x(t) is periodic with period T, then x(-t) is also periodic with the same period T. Similarly for discrete-time signals.

## 5. Graphical Representation of Time Reversal

*   **Continuous-Time:**
    1.  Draw the original signal x(t).
    2.  Imagine a vertical mirror placed at t=0.
    3.  Reflect each point of the signal across the mirror.  For any point (t, x(t)), the corresponding point on the time-reversed signal is (-t, x(t)).

*   **Discrete-Time:**
    1.  Draw the original signal x[n] as a sequence of points.
    2.  Imagine a vertical mirror placed at n=0.
    3.  Reflect each point of the signal across the mirror. For any point (n, x[n]), the corresponding point on the time-reversed signal is (-n, x[n]).

## 6. Practice Questions/Exercises

**Question 1:**

Given the continuous-time signal x(t) = t * u(t) where u(t) is the unit step function, find and sketch x(-t).

**Answer:**

*   x(t) = t for t >= 0 and x(t) = 0 for t < 0.
*   x(-t) = -t for -t >= 0 (or t <= 0) and x(-t) = 0 for -t < 0 (or t > 0).
*   Therefore, x(-t) is a line with a negative slope extending from negative infinity to zero. The signal is zero for t > 0.

**Question 2:**

Given the discrete-time signal x[n] = {1, 2, 3, 4, 5} for n = {0, 1, 2, 3, 4} respectively (i.e., x[0]=1, x[1]=2, etc.), find and represent x[-n].

**Answer:**

*   x[-n] = {5, 4, 3, 2, 1} for n = {0, -1, -2, -3, -4} respectively. Note how the indices have been reversed.  It's important to understand where n=0 lies in the reversed sequence. x[-n] is the reflection of x[n] about n=0.  Therefore: x[-4] = 1, x[-3] = 2, x[-2] = 3, x[-1] = 4, x[0] = 5.

**Question 3:**

What is the effect of time reversal on the signal  x(t) = t^2 + cos(t)?

**Answer:**

x(t) = t^2 + cos(t). x(-t) = (-t)^2 + cos(-t) = t^2 + cos(t) = x(t).  Therefore, time reversal has *no effect* on this signal.  This is because the signal is an even function (the sum of two even functions is also even).

**Question 4:**

If x[n] is an odd discrete-time signal and x[2] = 5, what is the value of x[-2]?

**Answer:**

Since x[n] is odd, x[n] = -x[-n].  Therefore, x[2] = -x[-2]. Given x[2] = 5, then 5 = -x[-2], so x[-2] = -5.

## 7. Important Points to Remember

*   Time reversal flips the signal around the t=0 (or n=0) axis.
*   Cosine functions are even, so they are unaffected by time reversal.
*   Sine functions are odd, so time reversal inverts them.
*   Energy and power of a signal are not affected by time reversal.
*   Time reversal preserves periodicity.
*   Understanding even and odd signal properties simplifies time reversal analysis.
*   Carefully consider the indices when dealing with time reversal of discrete-time signals. Ensure you correctly identify the n=0 point after the reflection.
