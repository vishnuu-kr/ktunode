---
title: "Representation of discrete time signals- (Graphical representation, Functional representation, Sequence representation)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b132"
status: "completed"
scrapedAt: "2026-05-20T16:15:21.782Z"
---
## SIGNALS AND SYSTEMS - Module 1: 1D Signals - Representation of Discrete-Time Signals

**Topic:** Representation of Discrete-Time Signals (Graphical, Functional, Sequence)

**Learning Outcomes:**

*   Understand the concept of discrete-time signals.
*   Represent discrete-time signals graphically.
*   Represent discrete-time signals functionally.
*   Represent discrete-time signals using sequence notation.
*   Convert between different representations of discrete-time signals.

**1. Introduction to Discrete-Time Signals**

*   **Definition:** A discrete-time signal is a function of an integer variable *n*, denoted as x[n], where *n* represents a discrete instance in time (e.g., sample number).  The signal is defined only for integer values of *n*.
*   **Contrast with Continuous-Time Signals:**  Continuous-time signals, denoted as x(t), are defined for all values of time *t*. Discrete-time signals are sampled versions of continuous-time signals or can be inherently discrete.
*   **Sampling:**  Discrete-time signals often arise from sampling continuous-time signals.  The sampling process takes the value of the continuous-time signal at specific, usually equally spaced, time intervals.
*   **Importance:**  Discrete-time signals are crucial in digital signal processing (DSP), digital communications, and other areas where signals are processed by computers.

**2. Graphical Representation**

*   **Concept:** The graphical representation plots the signal's amplitude (x[n]) against the discrete-time index (n).  Each sample is represented by a point or a stem.
*   **Axes:**
    *   Horizontal axis (x-axis): Represents the discrete-time index *n* (integers only).
    *   Vertical axis (y-axis): Represents the signal amplitude, x[n].
*   **Stems or Dots:** Each sample x[n] is typically shown as a vertical line (stem) originating from the n-axis, ending at the amplitude x[n]. Sometimes dots are used instead of stems.
*   **Example:**
    ```
    x[n] = {1, 2, 3, 4, 5} for n = 0, 1, 2, 3, 4 respectively
    ```

    The graphical representation would have stems at n=0, n=1, n=2, n=3, and n=4 with heights of 1, 2, 3, 4, and 5, respectively.

    ```
    Amplitude
    ^
    |     *
    |    *
    |   *
    |  *
    | *
    |---------------------> n
    0  1  2  3  4
    ```

*   **Advantages:** Provides a visual understanding of the signal's behavior over time.
*   **Disadvantages:** Can be cumbersome for long signals and doesn't directly provide the exact amplitude values.

**3. Functional Representation**

*   **Concept:**  The functional representation expresses the signal as a mathematical function of the discrete-time index *n*.
*   **Expression:**  x[n] = f(n), where f(n) is a mathematical expression involving *n*.
*   **Examples:**
    *   x[n] = n^2 for n >= 0
    *   x[n] = cos(0.2 * pi * n) for all n
    *   x[n] = {1, for n=0; 0, otherwise} (Unit impulse function - see below)
*   **Advantages:**  Precise and compact representation, allows for mathematical analysis and manipulation.
*   **Disadvantages:**  May not be intuitive for complex signals.  Can be difficult to visualize directly.

**4. Sequence Representation**

*   **Concept:**  Represents the signal as an ordered sequence of amplitude values.
*   **Notation:**  x[n] = {..., x[-1], x[0], x[1], x[2], ...}
*   **Zero Index:** The value at n=0 is usually indicated with an arrow (↑) below the value or by underlining the value. This indicates the origin.  If no arrow or underline is present, it is often assumed that the sequence starts at n=0.
*   **Examples:**
    *   x[n] = {1, 2, 3, 4, 5} (assuming starts at n=0) means x[0]=1, x[1]=2, x[2]=3, x[3]=4, x[4]=5, and x[n] = 0 for n < 0 and n > 4.
    *   x[n] = {..., 1, 2, 3, ↑4, 5, ...} means x[0]=4, x[1]=5, x[-1]=3, x[-2]=2, x[-3]=1, and the sequence extends indefinitely in both directions.  The arrow indicates that the sample '4' is at time index n=0.

*   **Advantages:**  Easy to understand and manipulate digitally, direct mapping to data storage.
*   **Disadvantages:** Can be lengthy for long signals and does not explicitly show the functional relationship.

**5. Special Discrete-Time Signals**

*   **Unit Impulse (Delta Function):**
    *   Functional Representation:  δ[n] = { 1, for n=0; 0, otherwise }
    *   Sequence Representation: δ[n] = {..., 0, ↑1, 0, ...}
    *   Graphical Representation: A single stem of height 1 at n=0.
    *   Importance: Used as a building block for constructing other signals and analyzing system responses.

*   **Unit Step Function:**
    *   Functional Representation:  u[n] = { 1, for n>=0; 0, otherwise }
    *   Sequence Representation: u[n] = {..., 0, ↑1, 1, 1, ...}
    *   Graphical Representation: Zero for n<0, and one for n>=0.
    *   Importance: Represents a signal that switches on at n=0 and remains on.

*   **Real Exponential Signal:**
    *   Functional Representation: x[n] = a^n, where a is a real number.
    *   Sequence Representation: depends on the value of a and the range of n considered.

*   **Sinusoidal Signal:**
    *   Functional Representation:  x[n] = A * cos(ωn + φ), where A is amplitude, ω is digital frequency (in radians/sample), and φ is the phase.
    *   Important Note: The digital frequency ω is dimensionless (radians/sample) and is related to the analog frequency f (in Hz) by ω = 2πfT, where T is the sampling period.

**6. Conversion Between Representations**

*   **Functional to Graphical/Sequence:** Evaluate the function x[n] for various values of *n* to obtain the amplitude values. Then, plot these values graphically or write them in sequence form.
*   **Graphical to Functional/Sequence:** Observe the pattern in the graph and try to express it as a mathematical function. Alternatively, directly read the amplitude values at each *n* and write them in sequence form. This may be difficult if the graph doesn't clearly represent a simple, defined function.
*   **Sequence to Graphical/Functional:** Plot the amplitude values in the sequence on a graph.  This is usually straightforward. Expressing as a function might be possible if a pattern is apparent in the sequence.

**7. Practice Questions & Exercises**

1.  **Given the discrete-time signal x[n] = n^2 for n = -2, -1, 0, 1, 2, represent it graphically and as a sequence.**

    *   **Answer:**
        *   Graphical: Plot points (-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4) with stems.
        *   Sequence: x[n] = {4, 1, ↑0, 1, 4}

2.  **Represent the sequence x[n] = {2, 4, 6, 8, 10} graphically and functionally (assuming it starts at n=0).**

    *   **Answer:**
        *   Graphical: Plot stems at n=0, 1, 2, 3, 4 with heights 2, 4, 6, 8, 10 respectively.
        *   Functional: x[n] = 2(n+1) for n = 0, 1, 2, 3, 4 and 0 otherwise

3.  **Draw the graphical representation of the discrete time signal  x[n] = cos(πn/4) for n = 0, 1, 2, 3, 4, 5, 6, 7.**

    *   **Answer:**  Calculate the values of x[n] for each n:
        *   x[0] = cos(0) = 1
        *   x[1] = cos(π/4) = 0.707
        *   x[2] = cos(π/2) = 0
        *   x[3] = cos(3π/4) = -0.707
        *   x[4] = cos(π) = -1
        *   x[5] = cos(5π/4) = -0.707
        *   x[6] = cos(3π/2) = 0
        *   x[7] = cos(7π/4) = 0.707

        Plot these values with stems in a graph.

4.  **Write the sequence representation of the unit step function u[n] starting from n=-3 to n=3.**

    *   **Answer:**  u[n] = {0, 0, 0, ↑1, 1, 1, 1}

5.  **A discrete-time signal is defined as x[n] = 5 for -2 ≤ n ≤ 2 and 0 otherwise. Represent it graphically, functionally, and as a sequence.**

    *   **Answer:**
        *   Graphical:  Stems of height 5 at n=-2, -1, 0, 1, 2.
        *   Functional:  x[n] = { 5, for -2 ≤ n ≤ 2; 0, otherwise }
        *   Sequence: x[n] = {5, 5, ↑5, 5, 5}

**8. Important Points to Remember**

*   Discrete-time signals are defined only at integer values of *n*.
*   The graphical representation provides a visual understanding of the signal.
*   The functional representation is a concise mathematical expression of the signal.
*   The sequence representation is useful for digital manipulation and storage.
*   The position of n=0 (the origin) is crucial in sequence representation and should be clearly indicated with an arrow or underline.
*   Understanding the unit impulse and unit step functions is fundamental.
*   Digital frequency is in radians per sample (ω), unlike analog frequency in Hz (f).  They are related by ω = 2πfT.
