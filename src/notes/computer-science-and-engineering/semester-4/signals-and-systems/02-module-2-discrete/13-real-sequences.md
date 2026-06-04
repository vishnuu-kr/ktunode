---
title: "real sequences)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b154"
status: "completed"
scrapedAt: "2026-05-20T16:15:44.106Z"
---
## SIGNALS AND SYSTEMS - Module 2: Discrete - Real Sequences

**Module Overview:** This module introduces discrete-time signals and systems, focusing on their mathematical representation and fundamental properties. This section specifically covers real sequences, a foundational concept.

**Learning Outcomes:** Upon completion of this section, you will be able to:

*   **Define** what a real sequence is and provide examples.
*   **Represent** real sequences mathematically using various notations.
*   **Identify** and **classify** common types of real sequences (e.g., unit impulse, unit step, exponential).
*   **Perform basic operations** on real sequences (e.g., scaling, shifting, addition, multiplication).
*   **Calculate** energy and power of real sequences.
*   **Determine** if a real sequence is periodic.

---

### 1. Introduction to Real Sequences

*   **Definition:** A real sequence, denoted as *x[n]*, is a function that maps integers (*n*) to real numbers.  In simpler terms, it's an ordered list of real numbers indexed by integers.  Think of it as sampling a continuous-time signal at discrete time intervals or originating entirely in discrete time.

*   **Notation:**
    *   *x[n]*:  Represents the value of the sequence at index *n*.
    *   {..., x[-2], x[-1], x[0], x[1], x[2], ...}:  Explicitly lists the values of the sequence.
    *   x = {x[n]}: Abbreviated notation representing the entire sequence.
    *   x[n] = f(n): The sequence defined by a function f(n), where n is an integer.

*   **Key Concepts:**
    *   *n*: Represents the discrete-time index, always an integer.
    *   *x[n] ∈ ℝ*: The value of the sequence *x[n]* is a real number.
    *   *Discrete-Time*:  The independent variable *n* takes on only integer values.
    *   *Real*: The values of the sequence *x[n]* are real numbers.

*   **Examples:**
    *   x[n] = {..., 2, 4, 6, 8, ...}  (Even numbers)
    *   x[n] = {..., 1, 1, 2, 3, 5, 8, ...} (Fibonacci sequence -  a special type of real sequence where each element is the sum of the two preceding ones)
    *   x[n] = cos(0.1πn) for all integers *n*.

---

### 2. Common Types of Real Sequences

*   **Unit Impulse Sequence (δ[n]):**
    *   Definition: δ[n] = 1 for n = 0, and δ[n] = 0 for n ≠ 0
    *   Mathematical Representation:

       ```
       δ[n] = {
           1,  n = 0
           0,  n ≠ 0
       }
       ```
    *   Importance: Used as a building block for representing arbitrary sequences and analyzing system behavior (Impulse Response).

*   **Unit Step Sequence (u[n]):**
    *   Definition: u[n] = 1 for n ≥ 0, and u[n] = 0 for n < 0
    *   Mathematical Representation:

       ```
       u[n] = {
           1,  n ≥ 0
           0,  n < 0
       }
       ```
    *   Relationship to Unit Impulse: u[n] = Σ<sub>k=-∞</sub><sup>n</sup> δ[k]
    *   Importance:  Represents a signal that switches on at n = 0.

*   **Exponential Sequence (a<sup>n</sup>):**
    *   Definition: x[n] = a<sup>n</sup>, where *a* is a real number.
    *   Characteristics:
        *   If |a| > 1:  Sequence grows exponentially.
        *   If |a| < 1:  Sequence decays exponentially.
        *   If a = 1: x[n] = 1 for all n (Constant sequence).
        *   If a = -1:  Sequence alternates between 1 and -1.

*   **Sinusoidal Sequence:**
    *   Definition: x[n] = Acos(ωn + φ), where:
        *   A: Amplitude
        *   ω: Discrete-time frequency (in radians per sample)
        *   φ: Phase (in radians)
    *   Periodicity: A discrete-time sinusoidal sequence is periodic if and only if  ω/2π is a rational number (i.e., can be expressed as p/q where p and q are integers).

---

### 3. Operations on Real Sequences

*   **Scaling:** Multiplying a sequence by a constant *A*.
    *   y[n] = A * x[n]

*   **Shifting (Time Delay/Advance):**  Shifting the sequence in time.
    *   y[n] = x[n - k]:  Delay (shift to the right) by *k* samples (if *k* is positive).
    *   y[n] = x[n + k]:  Advance (shift to the left) by *k* samples (if *k* is positive).

*   **Addition:**  Adding two sequences point-wise.
    *   y[n] = x<sub>1</sub>[n] + x<sub>2</sub>[n]

*   **Multiplication:** Multiplying two sequences point-wise.
    *   y[n] = x<sub>1</sub>[n] * x<sub>2</sub>[n]

*   **Folding (Time Reversal):** Reversing the sequence in time.
    *   y[n] = x[-n]

*   **Downsampling (Decimation):** Taking only every Mth sample (reducing the sampling rate).
    *   y[n] = x[Mn]

*   **Upsampling (Interpolation):** Inserting zeros between samples (increasing the sampling rate).
    *   y[n] = x[n/L], n = 0, ±L, ±2L, ...  (zero otherwise)

---

### 4. Energy and Power of Real Sequences

*   **Energy (E):**  A measure of the total magnitude of the sequence.
    *   Formula:  E = Σ<sub>n=-∞</sub><sup>∞</sup> |x[n]|<sup>2</sup>
    *   Finite Energy Sequence: A sequence with finite energy (E < ∞).  These are also called energy signals.

*   **Power (P):**  A measure of the average magnitude of the sequence.
    *   Formula: P = lim<sub>N→∞</sub> (1/(2N+1)) Σ<sub>n=-N</sub><sup>N</sup> |x[n]|<sup>2</sup>
    *   Periodic Sequences:  For periodic sequences with period *N*, the power can be simplified to: P = (1/N) Σ<sub>n=0</sub><sup>N-1</sup> |x[n]|<sup>2</sup>
    *   Finite Power Sequence: A sequence with finite power (0 < P < ∞). These are also called power signals.

*   **Important Points:**
    *   A sequence can be an energy signal, a power signal, or neither.
    *   A finite-duration sequence (non-zero for only a finite number of samples) is always an energy signal.
    *   A periodic sequence is typically a power signal.

---

### 5. Periodicity of Real Sequences

*   **Definition:** A sequence *x[n]* is periodic with period *N* if *x[n + N] = x[n]* for all integers *n*. *N* must be a positive integer. The smallest such *N* is called the *fundamental period*.

*   **Determining Periodicity:**  For a sequence defined by a mathematical expression, you need to find an integer *N* such that the defining expression satisfies the periodicity condition.

*   **Example:  Sinusoidal Sequence:**  As mentioned earlier,  x[n] = Acos(ωn + φ) is periodic *if and only if* ω/2π = p/q, where p and q are integers. In that case, the period *N* is the smallest integer such that *N = q/GCD(p,q)*.  (GCD is the greatest common divisor)

*   **Aperiodic Sequence:**  A sequence that is not periodic.

---

### Practice Questions and Exercises

**1.  Sequence Representation:**

    Represent the following sequence using explicit notation:
    x[n] = {1, 3, 5, 7, 9} for n = 0, 1, 2, 3, 4  (and 0 otherwise)

    **Answer:** x[n] = {..., 0, 1, 3, 5, 7, 9, 0, ...}

**2.  Sequence Operations:**

    Given x[n] = {1, 2, 3, 4} and y[n] = {5, 6, 7, 8}, both defined for n = 0, 1, 2, 3:
    a)  Find z[n] = x[n] + y[n]
    b)  Find w[n] = 2 * x[n]
    c) Find v[n] = x[n-1]
    **Answer:**
    a) z[n] = {6, 8, 10, 12}
    b) w[n] = {2, 4, 6, 8}
    c) v[n] = {0, 1, 2, 3}

**3.  Energy Calculation:**

    Calculate the energy of the sequence x[n] = {1, 2, 1, -1} for n = 0, 1, 2, 3 (and 0 otherwise).

    **Answer:** E = 1<sup>2</sup> + 2<sup>2</sup> + 1<sup>2</sup> + (-1)<sup>2</sup> = 1 + 4 + 1 + 1 = 7

**4.  Power Calculation:**

    Calculate the average power of the sequence x[n] = A, for all n, where A is a constant.

    **Answer:** P = lim<sub>N→∞</sub> (1/(2N+1)) Σ<sub>n=-N</sub><sup>N</sup> |A|<sup>2</sup> = lim<sub>N→∞</sub> (1/(2N+1)) * (2N+1) * A<sup>2</sup> = A<sup>2</sup>

**5. Periodicity Determination:**

    Is the sequence x[n] = cos(πn/4) periodic? If so, what is its fundamental period?

    **Answer:** Yes, it is periodic.  ω/2π = (π/4) / 2π = 1/8. Since this is rational, the sequence is periodic.  The period N = 8.

**6. Sequence Type Identification:**

    Identify the type of sequence for each of the following:
        a) x[n] = 5 for all n
        b) x[n] = 0 for n < 0 and x[n] = n for n >= 0
        c) x[n] = (0.5)^n u[n]

    **Answer:**
        a) Constant Sequence
        b) Ramp Sequence (for n >= 0 and zero for n < 0)
        c) Exponentially decaying sequence multiplied by the unit step.

---

### Important Points to Remember

*   Discrete-time signals are defined only for integer values of the independent variable *n*.
*   Understanding basic sequences like the unit impulse and unit step is crucial.
*   Periodicity of sinusoidal sequences depends on the rationality of ω/2π.
*   The energy and power calculations help characterize the magnitude of a sequence.
*   Practice performing operations on sequences to gain a solid understanding.
