---
title: "Periodic and non periodic signal"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b134"
status: "completed"
scrapedAt: "2026-05-20T16:15:23.208Z"
---
## Signals and Systems: Module 1 - 1D Signals: Periodic and Non-Periodic Signals

These notes cover the topic of Periodic and Non-Periodic Signals within the context of 1-Dimensional Signals in Signals and Systems.

**Learning Outcomes:**

*   Define periodicity of a signal.
*   Distinguish between periodic and non-periodic signals.
*   Determine the fundamental period of a periodic signal.
*   Understand the properties and examples of periodic and non-periodic signals in both continuous-time and discrete-time domains.

**1. Key Concepts and Definitions**

*   **Signal:** A function that conveys information, typically a function of time. We will focus on 1-Dimensional signals, meaning they depend on a single independent variable (usually time, *t* for continuous-time signals and *n* for discrete-time signals).

*   **Periodic Signal:** A signal that repeats its values over a regular interval.  A signal *x(t)* (continuous-time) or *x[n]* (discrete-time) is periodic if there exists a positive constant *T* (for continuous-time) or *N* (for discrete-time) such that:

    *   **Continuous-time:**  *x(t) = x(t + T)*  for all *t*
    *   **Discrete-time:** *x[n] = x[n + N]* for all *n*

    where *T* is the **period** of the continuous-time signal and *N* is the **period** of the discrete-time signal.

*   **Fundamental Period (T<sub>0</sub> or N<sub>0</sub>):** The *smallest* positive value of *T* or *N* for which the periodicity condition holds. It's the shortest time/interval it takes for the signal to complete one cycle.

*   **Non-Periodic (Aperiodic) Signal:** A signal that does *not* repeat its values over a regular interval. There is no *T* or *N* that satisfies the periodicity condition.

**2. Continuous-Time Signals**

*   **Definition Revisited:**  A continuous-time signal *x(t)* is periodic if *x(t) = x(t + T)* for all *t*, where *T > 0*.

*   **Examples of Periodic Continuous-Time Signals:**

    *   **Sine wave:** *x(t) = A sin(ωt + φ)*, where *A* is the amplitude, *ω* is the angular frequency, and *φ* is the phase.  The period *T* is related to the angular frequency by *T = 2π/ω*.
    *   **Cosine wave:** *x(t) = A cos(ωt + φ)*.  The period *T* is also *T = 2π/ω*.
    *   **Square wave:** A signal that alternates between two fixed values at regular intervals.
    *   **Triangle wave:** A signal that linearly increases and decreases between two fixed values.

*   **Examples of Non-Periodic Continuous-Time Signals:**

    *   **Exponential decay:** *x(t) = e<sup>-at</sup>u(t)*, where *a > 0* and *u(t)* is the unit step function.
    *   **Ramp function:** *x(t) = t* for *t > 0*, and *x(t) = 0* for *t < 0*.
    *   **Gaussian function:**  *x(t) = e<sup>-t<sup>2</sup></sup>*

**3. Discrete-Time Signals**

*   **Definition Revisited:** A discrete-time signal *x[n]* is periodic if *x[n] = x[n + N]* for all *n*, where *N* is a positive integer. *N* must be an integer value.

*   **Examples of Periodic Discrete-Time Signals:**

    *   **Discrete-time sinusoid:** *x[n] = A sin(ωn + φ)*.  **Important:** For *x[n]* to be periodic, *ω* must satisfy the condition *ω = 2πm/N*, where *m* and *N* are integers. The fundamental period is then *N<sub>0</sub> = N*.
    *   **Discrete-time square wave:** Similar to the continuous-time square wave, but defined only at discrete points.

*   **Examples of Non-Periodic Discrete-Time Signals:**

    *   **Exponential decay:** *x[n] = a<sup>n</sup>u[n]*, where *|a| < 1* and *u[n]* is the discrete-time unit step function.
    *   **Ramp sequence:** *x[n] = n* for *n >= 0*, and *x[n] = 0* for *n < 0*.

*   **Important Note for Discrete-Time Sinusoids:** Not every discrete-time sinusoid is periodic.  The frequency (ω) must be a rational multiple of 2π for periodicity.  If *ω/(2π)* is an irrational number, then the signal is *not* periodic. This is because we need an integer *N* that satisfies the condition *x[n] = x[n+N]*, which is only possible when *ω = 2πm/N*.

**4. Determining the Period of a Signal**

*   **Continuous-Time:**  For signals of the form *x(t) = A sin(ωt + φ)* or *x(t) = A cos(ωt + φ)*, the period *T* is *T = 2π/ω*.  If a signal is a sum of multiple sinusoids, the period of the overall signal is the least common multiple (LCM) of the individual periods.  If the periods are incommensurate (their ratio is irrational), the sum is non-periodic.

*   **Discrete-Time:**
    1.  For signals of the form *x[n] = A sin(ωn + φ)*, check if *ω/(2π)* is a rational number.  If not, the signal is non-periodic.
    2.  If *ω/(2π) = m/N*, where *m* and *N* are integers, then the fundamental period is *N<sub>0</sub> = N*. We generally simplify *m/N* to be irreducible.
    3.   For signals that are the sum of multiple sinusoids (e.g., *x[n] = sin(ω<sub>1</sub>n) + cos(ω<sub>2</sub>n)* ), find the fundamental period of each sinusoid *individually* (N<sub>1</sub>, N<sub>2</sub>, etc.). Then, find the LCM of N<sub>1</sub>, N<sub>2</sub>, etc. to determine the fundamental period of the entire signal.  If the ratio of any two periods is irrational, the overall signal is not periodic.

**5. Properties of Periodic Signals**

*   **Scaling:** If *x(t)* is periodic with period *T*, then *A x(t)*, where *A* is a constant, is also periodic with period *T*.
*   **Time Shifting:** If *x(t)* is periodic with period *T*, then *x(t - t<sub>0</sub>)*, where *t<sub>0</sub>* is a constant, is also periodic with period *T*.  The shape remains the same, just shifted in time.
*   **Time Scaling:** If *x(t)* is periodic with period *T*, then *x(at)* has a period of *T/|a|*. Note that *a* cannot be zero.
*   **Addition/Subtraction:** If *x<sub>1</sub>(t)* and *x<sub>2</sub>(t)* are periodic with periods *T<sub>1</sub>* and *T<sub>2</sub>* respectively, and the ratio *T<sub>1</sub>/T<sub>2</sub>* is a rational number, then *x<sub>1</sub>(t) + x<sub>2</sub>(t)* is periodic.  The period of the sum is the LCM of *T<sub>1</sub>* and *T<sub>2</sub>*. If the ratio is irrational, the sum is aperiodic. The equivalent properties apply to discrete-time signals as well.

**6. Important Points to Remember:**

*   Periodicity is defined by the *repetition* of a signal over a constant interval.
*   The fundamental period is the *smallest* repeating interval.
*   Discrete-time signals require that the period *N* be an *integer*.
*   Not all discrete-time sinusoids are periodic; the frequency must satisfy *ω = 2πm/N*.
*   For sums of periodic signals, the overall signal is only periodic if the ratio of the individual periods is a rational number.

**7. Practice Questions/Exercises**

**Question 1:**

Determine if the following continuous-time signals are periodic. If periodic, find the fundamental period.

*   (a) *x(t) = cos(2πt) + sin(3πt)*
*   (b) *x(t) = e<sup>j5t</sup>*  (where *j* is the imaginary unit, *√-1*)
*   (c) *x(t) = cos(t) + cos(√2t)*

**Solution 1:**

*   (a) *x(t) = cos(2πt) + sin(3πt)*

    *   *cos(2πt)* has a period *T<sub>1</sub> = 2π/(2π) = 1*.
    *   *sin(3πt)* has a period *T<sub>2</sub> = 2π/(3π) = 2/3*.
    *   *T<sub>1</sub>/T<sub>2</sub> = 1 / (2/3) = 3/2*. Since this is a rational number, the signal is periodic.
    *   The LCM of 1 and 2/3 is 2. Therefore, the fundamental period is *T = 2*.

*   (b) *x(t) = e<sup>j5t</sup>*

    *   Using Euler's formula,  *e<sup>j5t</sup> = cos(5t) + j sin(5t)*. This is a complex exponential with a period *T = 2π/5*.  Therefore, it is periodic with a period of *2π/5*.

*   (c) *x(t) = cos(t) + cos(√2t)*

    *   *cos(t)* has a period *T<sub>1</sub> = 2π*.
    *   *cos(√2t)* has a period *T<sub>2</sub> = 2π/√2 = √2π*.
    *   *T<sub>1</sub>/T<sub>2</sub> = 2π / (√2π) = √2*. Since this is an irrational number, the signal is *not* periodic.

**Question 2:**

Determine if the following discrete-time signals are periodic. If periodic, find the fundamental period.

*   (a) *x[n] = sin(πn/4)*
*   (b) *x[n] = cos(n)*
*   (c) *x[n] = cos(πn/3) + sin(πn/4)*

**Solution 2:**

*   (a) *x[n] = sin(πn/4)*

    *   *ω = π/4*.  Therefore, *ω/(2π) = (π/4) / (2π) = 1/8*.  This is a rational number.
    *   *m/N = 1/8*. Therefore, *N = 8*. The fundamental period is *N<sub>0</sub> = 8*.

*   (b) *x[n] = cos(n)*

    *   *ω = 1*. Therefore, *ω/(2π) = 1/(2π)*. This is an irrational number.  Therefore, the signal is *not* periodic.

*   (c) *x[n] = cos(πn/3) + sin(πn/4)*

    *   *cos(πn/3)*: *ω<sub>1</sub> = π/3*.  *ω<sub>1</sub>/(2π) = (π/3)/(2π) = 1/6*. Therefore, *N<sub>1</sub> = 6*.
    *   *sin(πn/4)*: *ω<sub>2</sub> = π/4*.  *ω<sub>2</sub>/(2π) = (π/4)/(2π) = 1/8*. Therefore, *N<sub>2</sub> = 8*.
    *   The LCM of 6 and 8 is 24. Therefore, the fundamental period is *N = 24*.

**Question 3:**

Given the continuous-time signal *x(t) = sin(2t)*, determine if the following signals are periodic and, if so, find the fundamental period:

*   (a) *y(t) = 2x(t)*
*   (b) *z(t) = x(t - π/4)*
*   (c) *w(t) = x(3t)*

**Solution 3:**

*x(t) = sin(2t)* has a period of *T = 2π/2 = π*.

*   (a) *y(t) = 2x(t) = 2sin(2t)*. This is periodic with a period of *π* (scaling doesn't change the period).

*   (b) *z(t) = x(t - π/4) = sin(2(t - π/4)) = sin(2t - π/2)*. This is periodic with a period of *π* (time shifting doesn't change the period).

*   (c) *w(t) = x(3t) = sin(2(3t)) = sin(6t)*. This is periodic with a period of *T = 2π/6 = π/3*.

These notes provide a comprehensive overview of periodic and non-periodic signals, covering key definitions, examples, and methods for determining periodicity.  The practice questions provide further opportunity to solidify your understanding. Remember to pay close attention to the nuances of discrete-time signals and the conditions for periodicity when dealing with sinusoids. Good luck with your studies!
