---
title: "Energy and Power signals."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b135"
status: "completed"
scrapedAt: "2026-05-20T16:15:23.921Z"
---
## Signals and Systems: Module 1 - 1D Signals: Energy and Power Signals

These notes cover energy and power signals, a crucial concept in understanding signal characteristics and classifications.

**1. Introduction to Signal Classification**

Signals can be broadly classified based on their energy and power content. This classification helps in selecting appropriate signal processing techniques and understanding signal behavior.

**2. Learning Outcomes:**

By the end of this section, you should be able to:

*   Define energy and power of a signal.
*   Calculate the energy of an energy signal.
*   Calculate the average power of a power signal.
*   Classify signals as energy signals, power signals, or neither.
*   Understand the relationships between signal type, energy, and power.
*   Apply these concepts to both continuous-time and discrete-time signals.

**3. Key Concepts and Definitions:**

*   **Signal:**  A function that conveys information. It can be a function of time (e.g., audio, voltage) or other variables.

*   **Energy Signal:** A signal with finite energy over its entire duration. The energy of the signal is finite, but its average power is zero.

*   **Power Signal:** A signal with finite average power over its entire duration. The average power of the signal is finite, but its energy is infinite.

*   **Energy of a Signal (E):** A measure of the signal's strength over time. It's related to the square of the signal's amplitude.

*   **Average Power of a Signal (P):**  The average power dissipated by the signal over its duration.

**4. Energy Signals:**

*   **Definition:** A signal *x(t)* (continuous-time) or *x[n]* (discrete-time) is considered an energy signal if its total energy *E* is finite and non-zero.

*   **Continuous-Time Energy:**

    E =  ∫<sub>-∞</sub><sup>∞</sup> |x(t)|<sup>2</sup> dt

    Where:

    *   `E` is the energy of the signal.
    *   `x(t)` is the continuous-time signal.
    *   The integral is taken over the entire duration of the signal (-∞ to ∞).
    *   `|x(t)|` represents the magnitude (absolute value) of the signal at time `t`.
    *   If `x(t)` is complex, use `|x(t)|² = x(t) * x*(t)`, where `x*(t)` is the complex conjugate of `x(t)`.

*   **Discrete-Time Energy:**

    E =  ∑<sub>n=-∞</sub><sup>∞</sup> |x[n]|<sup>2</sup>

    Where:

    *   `E` is the energy of the signal.
    *   `x[n]` is the discrete-time signal.
    *   The summation is taken over the entire duration of the signal (n from -∞ to ∞).
    *   `|x[n]|` represents the magnitude (absolute value) of the signal at sample `n`.
    *   If `x[n]` is complex, use `|x[n]|² = x[n] * x*[n]`, where `x*[n]` is the complex conjugate of `x[n]`.

*   **Characteristics of Energy Signals:**

    *   Finite Energy:  0 < E < ∞
    *   Zero Average Power: P = 0

*   **Example:** A decaying exponential signal like x(t) = e<sup>-at</sup>u(t), where a > 0 and u(t) is the unit step function, is an energy signal.

**5. Power Signals:**

*   **Definition:** A signal *x(t)* (continuous-time) or *x[n]* (discrete-time) is considered a power signal if its average power *P* is finite and non-zero.

*   **Continuous-Time Average Power:**

    P = lim<sub>T→∞</sub> (1/(2T)) ∫<sub>-T</sub><sup>T</sup> |x(t)|<sup>2</sup> dt

    Where:

    *   `P` is the average power of the signal.
    *   `x(t)` is the continuous-time signal.
    *   `T` is a finite time interval.  We take the limit as T approaches infinity to calculate the average power over an infinitely long duration.
    *   `|x(t)|` represents the magnitude (absolute value) of the signal at time `t`.
    *   If `x(t)` is complex, use `|x(t)|² = x(t) * x*(t)`, where `x*(t)` is the complex conjugate of `x(t)`.

*   **Discrete-Time Average Power:**

    P = lim<sub>N→∞</sub> (1/(2N+1)) ∑<sub>n=-N</sub><sup>N</sup> |x[n]|<sup>2</sup>

    Where:

    *   `P` is the average power of the signal.
    *   `x[n]` is the discrete-time signal.
    *   `N` is a finite number of samples.  We take the limit as N approaches infinity to calculate the average power over an infinitely long duration.
    *   `|x[n]|` represents the magnitude (absolute value) of the signal at sample `n`.
    *   If `x[n]` is complex, use `|x[n]|² = x[n] * x*[n]`, where `x*[n]` is the complex conjugate of `x[n]`.  Note that (2N+1) represents the number of samples from -N to N inclusive.

*   **Characteristics of Power Signals:**

    *   Finite Average Power: 0 < P < ∞
    *   Infinite Energy: E = ∞

*   **Examples:**

    *   Periodic signals (e.g., sine waves, square waves) are generally power signals.
    *   The unit step function u(t) is a power signal.

**6.  Relationship Between Energy and Power Signals:**

*   A signal cannot be both an energy signal and a power signal simultaneously.

*   If a signal has finite energy, it cannot have finite average power (its average power is zero).

*   If a signal has finite average power, it cannot have finite energy (its energy is infinite).

*   Signals that are neither energy signals nor power signals: Some signals have neither finite energy nor finite average power.  For example, x(t) = t.

**7.  Examples & Worked Problems:**

**Example 1 (Continuous-Time):**

Determine whether the signal x(t) = e<sup>-2t</sup>u(t) is an energy signal, a power signal, or neither.  If it's an energy or power signal, calculate its energy or power.

*Solution:*

1.  *Calculate Energy:*

    E = ∫<sub>-∞</sub><sup>∞</sup> |x(t)|<sup>2</sup> dt = ∫<sub>-∞</sub><sup>∞</sup> |e<sup>-2t</sup>u(t)|<sup>2</sup> dt = ∫<sub>0</sub><sup>∞</sup> e<sup>-4t</sup> dt (since u(t) = 0 for t<0 and u(t) = 1 for t>=0)

    E = [-e<sup>-4t</sup>/4]<sub>0</sub><sup>∞</sup> = [0 - (-1/4)] = 1/4

2.  *Calculate Power:*
    Since we know that E is finite. P must be zero, so we don't need to calculate it.

3.  *Conclusion:* Since 0 < E < ∞, the signal x(t) = e<sup>-2t</sup>u(t) is an **energy signal** with energy E = 1/4.

**Example 2 (Continuous-Time):**

Determine whether the signal x(t) = cos(ω<sub>0</sub>t) is an energy signal, a power signal, or neither.  If it's an energy or power signal, calculate its energy or power.

*Solution:*

1.  *Calculate Power:*

    P = lim<sub>T→∞</sub> (1/(2T)) ∫<sub>-T</sub><sup>T</sup> |cos(ω<sub>0</sub>t)|<sup>2</sup> dt = lim<sub>T→∞</sub> (1/(2T)) ∫<sub>-T</sub><sup>T</sup> cos<sup>2</sup>(ω<sub>0</sub>t) dt

    Using the trigonometric identity cos<sup>2</sup>(θ) = (1 + cos(2θ))/2:

    P = lim<sub>T→∞</sub> (1/(2T)) ∫<sub>-T</sub><sup>T</sup> (1 + cos(2ω<sub>0</sub>t))/2 dt = lim<sub>T→∞</sub> (1/(4T)) [t + (sin(2ω<sub>0</sub>t))/(2ω<sub>0</sub>)]<sub>-T</sub><sup>T</sup>

    P = lim<sub>T→∞</sub> (1/(4T)) [2T + (sin(2ω<sub>0</sub>T))/(ω<sub>0</sub>)] = lim<sub>T→∞</sub> (1/2 + (sin(2ω<sub>0</sub>T))/(4ω<sub>0</sub>T))

    As T → ∞, the term (sin(2ω<sub>0</sub>T))/(4ω<sub>0</sub>T) approaches 0 because -1 <= sin(x) <= 1.

    Therefore, P = 1/2

2. *Calculate Energy:*
    Since we know that P is finite and non-zero, E must be infinite, so we don't need to calculate it.

3.  *Conclusion:* Since 0 < P < ∞, the signal x(t) = cos(ω<sub>0</sub>t) is a **power signal** with average power P = 1/2.

**Example 3 (Discrete-Time):**

Determine whether the signal x[n] = (1/2)<sup>n</sup> u[n] is an energy signal, a power signal, or neither.  If it's an energy or power signal, calculate its energy or power.

*Solution:*

1.  *Calculate Energy:*

    E = ∑<sub>n=-∞</sub><sup>∞</sup> |x[n]|<sup>2</sup> = ∑<sub>n=-∞</sub><sup>∞</sup> |(1/2)<sup>n</sup> u[n]|<sup>2</sup> = ∑<sub>n=0</sub><sup>∞</sup> (1/4)<sup>n</sup>  (since u[n] = 0 for n<0 and u[n] = 1 for n>=0)

    This is a geometric series with a = 1 and r = 1/4.  Since |r| < 1, the series converges:

    E = a / (1 - r) = 1 / (1 - 1/4) = 1 / (3/4) = 4/3

2.  *Calculate Power:*
    Since we know that E is finite. P must be zero, so we don't need to calculate it.

3.  *Conclusion:* Since 0 < E < ∞, the signal x[n] = (1/2)<sup>n</sup> u[n] is an **energy signal** with energy E = 4/3.

**Example 4 (Discrete-Time):**

Determine whether the signal x[n] = A cos(Ωn) is an energy signal, a power signal, or neither.  If it's an energy or power signal, calculate its energy or power.

*Solution:*

1. *Calculate Power:*

   P = lim<sub>N→∞</sub> (1/(2N+1)) ∑<sub>n=-N</sub><sup>N</sup> |A cos(Ωn)|<sup>2</sup> = lim<sub>N→∞</sub> (A<sup>2</sup>/(2N+1)) ∑<sub>n=-N</sub><sup>N</sup> cos<sup>2</sup>(Ωn)

   Using the identity cos<sup>2</sup>(x) = (1 + cos(2x)) / 2

   P = lim<sub>N→∞</sub> (A<sup>2</sup>/(2N+1)) ∑<sub>n=-N</sub><sup>N</sup> (1 + cos(2Ωn)) / 2
   P = lim<sub>N→∞</sub> (A<sup>2</sup>/(2(2N+1))) [∑<sub>n=-N</sub><sup>N</sup> 1 + ∑<sub>n=-N</sub><sup>N</sup> cos(2Ωn)]

   ∑<sub>n=-N</sub><sup>N</sup> 1 = 2N + 1

   ∑<sub>n=-N</sub><sup>N</sup> cos(2Ωn)  will be between -2N-1 and 2N+1. So  lim<sub>N→∞</sub> (A<sup>2</sup>/(2(2N+1))) ∑<sub>n=-N</sub><sup>N</sup> cos(2Ωn) = 0

   Therefore: P =  A<sup>2</sup> / 2

2. *Calculate Energy:*
    Since we know that P is finite and non-zero, E must be infinite, so we don't need to calculate it.

3. *Conclusion:*  x[n] = A cos(Ωn) is a **power signal** with P = A<sup>2</sup> / 2

**8. Practice Questions:**

1.  Determine whether the signal x(t) = rect(t/2) is an energy signal, a power signal, or neither.  If it's an energy or power signal, calculate its energy or power.  [rect(t) is 1 for |t| < 0.5 and 0 otherwise]

2.  Determine whether the signal x[n] = u[n] - u[n-5] is an energy signal, a power signal, or neither. If it's an energy or power signal, calculate its energy or power.

3.  A signal x(t) has energy E = 10 Joules.  What is the energy of the signal y(t) = 2x(t)?

4. Is x(t) = e<sup>jωt</sup> an energy or power signal?

**Answers:**

1.  **Energy Signal**, E = 2

    *Solution:*  x(t) = rect(t/2) is 1 for |t/2| < 0.5, i.e. for |t| < 1 and 0 elsewhere.
    E = ∫<sub>-∞</sub><sup>∞</sup> |x(t)|<sup>2</sup> dt = ∫<sub>-1</sub><sup>1</sup> 1<sup>2</sup> dt = [t]<sub>-1</sub><sup>1</sup> = 1 - (-1) = 2

2.  **Energy Signal**, E = 5

    *Solution:* x[n] = u[n] - u[n-5] is 1 for n = 0,1,2,3,4 and 0 otherwise.
    E = ∑<sub>n=-∞</sub><sup>∞</sup> |x[n]|<sup>2</sup> =  ∑<sub>n=0</sub><sup>4</sup> 1<sup>2</sup> = 5

3.  E<sub>y</sub> = 40 Joules

    *Solution:* E<sub>y</sub> = ∫<sub>-∞</sub><sup>∞</sup> |2x(t)|<sup>2</sup> dt = 4 ∫<sub>-∞</sub><sup>∞</sup> |x(t)|<sup>2</sup> dt = 4E = 4 * 10 = 40

4. Power Signal
    P=1

**9. Important Points to Remember:**

*   Carefully distinguish between energy and power.
*   Understand the integrals and summations used for calculating energy and power.
*   Practice applying these concepts to a variety of signals.
*   Remember the unit step function, rectangular pulse, and sinusoidal signals.
*   A signal cannot be both an energy signal and a power signal.
*   Understand the limitations of these classifications - some signals are neither.

This concludes the study notes on Energy and Power Signals.  Good luck with your studies!
