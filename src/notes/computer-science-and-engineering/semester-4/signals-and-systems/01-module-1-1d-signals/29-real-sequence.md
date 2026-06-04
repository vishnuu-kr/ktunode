---
title: "Real sequence."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b146"
status: "completed"
scrapedAt: "2026-05-20T16:15:34.994Z"
---
## Signals and Systems: Module 1 - 1D Signals: Real Sequences

**Topic:** Real Sequences

**Learning Outcomes:** Upon completion of this topic, you should be able to:

*   Define a real sequence.
*   Identify different types of real sequences (e.g., finite, infinite, periodic, aperiodic, bounded, unbounded).
*   Perform basic operations on real sequences (e.g., addition, subtraction, scaling, multiplication).
*   Understand the concept of energy and power of a real sequence.
*   Determine if a sequence is energy or power signal.
*   Represent a sequence graphically.

---

**1. Definition of a Real Sequence**

*   A **real sequence** is a function that maps a discrete set of integers (usually non-negative integers, but not always) to the set of real numbers.

*   Mathematically, a real sequence, often denoted as *x[n]*, is represented as:
    *   *x[n]*:  ℤ → ℝ
    *   Where ℤ represents the set of integers, and ℝ represents the set of real numbers.
    *   *n* is the independent variable (index) and represents a discrete-time index.
    *   *x[n]* is the value of the sequence at time *n*.  It's a real number.

*   **Key takeaway:**  A real sequence is a discrete-time signal where the values are always real numbers.

**2. Types of Real Sequences**

*   **Finite Length Sequence:**
    *   A sequence that has a defined start and end point. It exists only for a finite number of samples.
    *   *x[n] = 0* for *n < N1* and *n > N2*, where *N1* and *N2* are integers. The length of the sequence is *N2 - N1 + 1*.
    *   **Example:** *x[n] = {1, 2, 3, 4, 5}* for *0 ≤ n ≤ 4*, and *x[n] = 0* elsewhere.

*   **Infinite Length Sequence:**
    *   A sequence that extends indefinitely in one or both directions.
    *   **Example:**  *x[n] = u[n]* (unit step sequence) extends from *n = 0* to infinity. *x[n] = a<sup>n</sup>*, for all n, is an infinite length sequence.

*   **Periodic Sequence:**
    *   A sequence that repeats itself after a fixed interval called the period (*N*).
    *   *x[n] = x[n + N]* for all *n*, where *N* is a positive integer representing the fundamental period.
    *   **Example:** *x[n] = cos(ωn)* is periodic if *ω* is a rational multiple of 2π.  Specifically, *ω = (2πk)/N*, where *k* and *N* are integers.

*   **Aperiodic Sequence:**
    *   A sequence that does *not* repeat itself after a fixed interval.  It is not periodic.
    *   **Example:** *x[n] = n* is aperiodic. The unit step sequence *u[n]* is also aperiodic.

*   **Bounded Sequence:**
    *   A sequence whose amplitude is limited between a minimum and a maximum value.  There exists a finite constant *M* such that *|x[n]| ≤ M* for all *n*.
    *   **Example:** *x[n] = sin(n)* is bounded since *|sin(n)| ≤ 1*.  *x[n] = e<sup>-n</sup>* for *n ≥ 0* is also bounded.

*   **Unbounded Sequence:**
    *   A sequence whose amplitude can grow without limit.  There is no finite constant *M* such that *|x[n]| ≤ M* for all *n*.
    *   **Example:** *x[n] = n<sup>2</sup>* is unbounded.

**3. Basic Operations on Real Sequences**

*   **Addition:**  Given two sequences *x[n]* and *y[n]*, their sum is *z[n] = x[n] + y[n]*.
    *   **Example:** If *x[n] = {1, 2, 3}* and *y[n] = {4, 5, 6}*, then *z[n] = {5, 7, 9}*.

*   **Subtraction:**  Given two sequences *x[n]* and *y[n]*, their difference is *z[n] = x[n] - y[n]*.
    *   **Example:** If *x[n] = {1, 2, 3}* and *y[n] = {4, 5, 6}*, then *z[n] = {-3, -3, -3}*.

*   **Scaling (Multiplication by a Constant):**  Given a sequence *x[n]* and a constant *a*, the scaled sequence is *y[n] = a * x[n]*.
    *   **Example:** If *x[n] = {1, 2, 3}* and *a = 2*, then *y[n] = {2, 4, 6}*.

*   **Multiplication:** Given two sequences *x[n]* and *y[n]*, their product is *z[n] = x[n] * y[n]*.
    *   **Example:** If *x[n] = {1, 2, 3}* and *y[n] = {4, 5, 6}*, then *z[n] = {4, 10, 18}*.

*   **Time Shifting:** A shift of a sequence by *k* units is represented as *y[n] = x[n - k]*.
    *   If *k > 0*, the sequence is shifted to the *right* (delayed).
    *   If *k < 0*, the sequence is shifted to the *left* (advanced).
    *   **Example:** If *x[n] = {1, 2, 3, 4}* and *k = 2*, then *y[n] = x[n - 2] = {0, 0, 1, 2, 3, 4}* (assuming *x[n] = 0* for *n < 0*).

*   **Time Reversal (Folding):** Reversing a sequence in time is represented as *y[n] = x[-n]*.
    *   **Example:** If *x[n] = {1, 2, 3, 4}* for *n = 0, 1, 2, 3*, then *y[n] = x[-n] = {4, 3, 2, 1}* for *n = 0, -1, -2, -3*.

**4. Energy and Power of a Real Sequence**

*   **Energy of a Sequence (E):** The energy of a sequence *x[n]* is defined as the sum of the squared magnitudes of all its samples:

    *   *E = Σ |x[n]|<sup>2</sup>* (summation over all *n*).

*   **Power of a Sequence (P):** The average power of a sequence *x[n]* is defined as:

    *   *P = lim<sub>N→∞</sub> (1/(2N+1)) Σ |x[n]|<sup>2</sup>* (summation from *n = -N* to *n = N*). This is for infinite length sequences.

    *   For periodic sequences with period *N*, the power can be simplified to:
        *   *P = (1/N) Σ |x[n]|<sup>2</sup>* (summation from *n = 0* to *n = N-1*).

*   **Energy Signal:** A signal is considered an energy signal if its total energy *E* is finite (0 < *E* < ∞). For energy signals, the average power *P* is typically zero.

*   **Power Signal:** A signal is considered a power signal if its average power *P* is finite and non-zero (0 < *P* < ∞).  For power signals, the total energy *E* is typically infinite.

*   **Important Notes:**
    *   A signal cannot be both an energy signal and a power signal.
    *   A signal can be neither an energy signal nor a power signal (e.g., a sequence that grows faster than *n<sup>1/2</sup>*).

**5. Graphical Representation of Sequences**

*   Sequences are typically represented graphically in two ways:

    *   **Stem Plot:** A stem plot represents the sequence as a series of stems, each representing the value of the sequence at a particular index. The horizontal axis represents the time index (*n*), and the vertical axis represents the value of the sequence (*x[n]*).

    *   **Discrete Plot:**  Similar to the stem plot, but instead of stems, each point is marked with a circle or a dot.

**6. Examples**

*   **Example 1: Unit Impulse Sequence**
    *   *δ[n] = 1* for *n = 0*
    *   *δ[n] = 0* for *n ≠ 0*
    *   This is a *finite* length sequence.
    *   Energy: *E = 1* (energy signal)
    *   Power: *P = 0*

*   **Example 2: Unit Step Sequence**
    *   *u[n] = 1* for *n ≥ 0*
    *   *u[n] = 0* for *n < 0*
    *   This is an *infinite* length sequence.
    *   Energy: *E = ∞*
    *   Power: *P = 1* (power signal)

*   **Example 3: Exponential Sequence**
    *   *x[n] = a<sup>n</sup>u[n]*, where *a* is a constant.
    *   This is an *infinite* length sequence.
    *   If *|a| < 1*:
        *   *E = 1/(1 - a<sup>2</sup>)* (energy signal)
        *   *P = 0*
    *   If *|a| = 1*:
        *   *E = ∞*
        *   *P = 1* (power signal)
    *   If *|a| > 1*:
        *   *E = ∞*
        *   *P = ∞* (neither energy nor power signal)

**7. Practice Questions and Exercises**

1.  **Question:** Is the sequence *x[n] = sin(πn/4)* periodic? If so, what is its fundamental period?
    *   **Answer:** Yes.  The sequence is periodic. The period *N* must satisfy *πN/4 = 2πk*, where *k* is an integer. Thus, *N = 8k*. The fundamental period (smallest positive *N*) is *N = 8*.

2.  **Question:**  Determine whether the sequence *x[n] = n u[n]* is an energy signal, a power signal, or neither.
    *   **Answer:**  *x[n] = n u[n]* implies *x[n] = n* for *n ≥ 0* and *x[n] = 0* for *n < 0*.  The energy *E = Σ n<sup>2</sup>* from *n=0* to infinity, which is infinite.  The power *P = lim<sub>N→∞</sub> (1/(2N+1)) Σ n<sup>2</sup>* from *n=0* to *N*, which is also infinite.  Therefore, the signal is neither an energy signal nor a power signal.

3.  **Question:**  Given *x[n] = {1, 2, 3, 4}* for *n = 0, 1, 2, 3*, and *y[n] = x[n-1]*.  Find *y[n]*.
    *   **Answer:** *y[n] = x[n-1] = {0, 1, 2, 3, 4}* for *n = 0, 1, 2, 3, 4* (assuming *x[n] = 0* for *n < 0*).

4.  **Question:** Calculate the energy of the sequence *x[n] = (1/2)<sup>n</sup>u[n]*.
    *   **Answer:** *E = Σ |x[n]|<sup>2</sup> = Σ (1/2)<sup>2n</sup>* from *n=0* to infinity. This is a geometric series with a ratio of (1/4). Thus, *E = 1 / (1 - 1/4) = 1 / (3/4) = 4/3*.

5.  **Question:**  Sketch the stem plot of the sequence *x[n] = {2, -1, 0, 3, -2}* for *n = -2, -1, 0, 1, 2*.

    *   **Answer:** You would draw a stem plot with the x-axis representing *n* from -2 to 2 and the y-axis representing *x[n]*.  At each integer value of *n*, draw a vertical line (stem) of length equal to *x[n]*. For example, at *n = -2*, the stem will have a height of 2; at *n = -1*, the stem will have a height of -1, and so on.

**8. Important Points to Remember**

*   Real sequences are discrete-time signals with real-valued amplitudes.
*   Understanding the types of sequences (finite, infinite, periodic, aperiodic, bounded, unbounded) is crucial for analyzing signals.
*   Energy and power are fundamental concepts for characterizing signals.  Know how to calculate them and distinguish between energy and power signals.
*   Graphical representation is essential for visualizing and understanding sequences.
*   Pay attention to the limits of summations when calculating energy and power.
*   Be careful with time shifting.  A positive shift means a delay. A negative shift means an advance.

This comprehensive set of notes provides a thorough grounding in the concept of real sequences, covering the key learning outcomes, definitions, examples, and practice questions. It should serve as a valuable resource for studying Signals and Systems. Good luck!
