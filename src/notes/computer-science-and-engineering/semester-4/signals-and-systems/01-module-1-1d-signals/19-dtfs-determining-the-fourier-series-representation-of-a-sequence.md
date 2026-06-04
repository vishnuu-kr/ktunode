---
title: "DTFS - Determining the Fourier-Series Representation of a Sequence"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b13c"
status: "completed"
scrapedAt: "2026-05-20T16:15:28.820Z"
---
## Signals and Systems: Module 1 - 1D Signals

### Topic: DTFS - Determining the Fourier-Series Representation of a Sequence

**Description:** Determining the Fourier-Series Representation of a Discrete-Time Periodic Sequence.

**Learning Outcomes:**

*   Understand the definition of a Discrete-Time Fourier Series (DTFS).
*   Determine if a sequence is periodic and find its fundamental period.
*   Compute the DTFS coefficients (analysis equation) for a given periodic sequence.
*   Synthesize a periodic sequence from its DTFS coefficients (synthesis equation).
*   Apply the DTFS to analyze and represent discrete-time signals.
*   Understand the properties of the DTFS.

---

**1. Key Concepts and Definitions:**

*   **Discrete-Time Signal:** A signal defined only at discrete points in time. Denoted as `x[n]`, where `n` is an integer.

*   **Periodic Sequence:** A sequence `x[n]` is periodic with period `N` if `x[n] = x[n + N]` for all integers `n`. The smallest positive integer `N` for which this holds is called the *fundamental period*.

*   **Fundamental Frequency:**  For a discrete-time signal with period *N*, the fundamental frequency is `ω₀ = 2π/N`.  Note this is in units of radians per sample.

*   **Harmonically Related Complex Exponentials:** A set of complex exponentials of the form `e^(jω₀kn)` where `k` is an integer, and `ω₀ = 2π/N`.  These are the building blocks of the DTFS.

*   **Discrete-Time Fourier Series (DTFS):** A representation of a *periodic* discrete-time sequence `x[n]` as a weighted sum of harmonically related complex exponentials. Since `x[n]` is periodic with period `N`, the DTFS coefficients are also periodic with period `N`.

**2. DTFS Equations:**

*   **Analysis Equation (Finding Coefficients):**
    ```
    a[k] = (1/N) * Σ[n=0 to N-1] x[n] * e^(-j(2π/N)kn)  for k = 0, 1, ..., N-1
    ```
    Where:
    *   `a[k]` are the DTFS coefficients.  Also often written as `X[k]`.
    *   `N` is the fundamental period of `x[n]`.
    *   `x[n]` is the periodic sequence.
    *   `k` is the harmonic number (integer).
    *   The summation is over one period of the sequence.

*   **Synthesis Equation (Reconstructing the Sequence):**
    ```
    x[n] = Σ[k=0 to N-1] a[k] * e^(j(2π/N)kn)  for all n
    ```
    Where:
    *   `x[n]` is the periodic sequence.
    *   `a[k]` are the DTFS coefficients.
    *   `N` is the fundamental period of `x[n]`.
    *   `k` is the harmonic number (integer).

**3. Determining Periodicity and Fundamental Period:**

*   **Procedure:** To determine if a discrete-time sequence `x[n]` is periodic:

    1.  Find a value `N` such that `x[n] = x[n + N]` for all `n`.
    2.  If such an `N` exists, the sequence is periodic.
    3.  The smallest positive integer `N` satisfying the above condition is the fundamental period.

*   **Example 1:**  `x[n] = cos(0.2πn)`

    *   `x[n + N] = cos(0.2π(n + N)) = cos(0.2πn + 0.2πN)`
    *   For periodicity, `0.2πN` must be an integer multiple of `2π`.
    *   `0.2πN = 2πm` (where `m` is an integer)
    *   `N = 10m`
    *   The smallest positive integer value for `N` is `N = 10` (when `m = 1`).  Therefore, the fundamental period is 10.

*   **Example 2:** `x[n] = cos(n)`

    *   `x[n + N] = cos(n + N)`
    *   For periodicity, `N` must be an integer multiple of `2π`.
    *   `N = 2πm` (where `m` is an integer)
    *   Since `2π` is irrational, *no* integer multiple of `2π` will equal an integer. Therefore, this sequence is *not* periodic.

**4. Computing the DTFS Coefficients (Analysis Equation):**

*   **Procedure:**

    1.  Determine if the sequence is periodic and find its fundamental period `N`.
    2.  Apply the analysis equation:  `a[k] = (1/N) * Σ[n=0 to N-1] x[n] * e^(-j(2π/N)kn)`
    3.  Evaluate the summation for each value of `k` from `0` to `N-1`.

*   **Example:**  `x[n] = {1, 2, 1, 0}` and is periodic with `N = 4`.

    *   `ω₀ = 2π/4 = π/2`
    *   `a[k] = (1/4) * Σ[n=0 to 3] x[n] * e^(-j(π/2)kn)`

    *   **For k = 0:**
        ```
        a[0] = (1/4) * (1*e^(0) + 2*e^(0) + 1*e^(0) + 0*e^(0)) = (1/4) * (1 + 2 + 1 + 0) = 1
        ```
    *   **For k = 1:**
        ```
        a[1] = (1/4) * (1*e^(0) + 2*e^(-jπ/2) + 1*e^(-jπ) + 0*e^(-j3π/2))
             = (1/4) * (1 + 2*(-j) + 1*(-1) + 0)
             = (1/4) * (1 - 2j - 1) = -j/2
        ```
    *   **For k = 2:**
        ```
        a[2] = (1/4) * (1*e^(0) + 2*e^(-jπ) + 1*e^(-j2π) + 0*e^(-j3π))
             = (1/4) * (1 + 2*(-1) + 1*(1) + 0)
             = (1/4) * (1 - 2 + 1) = 0
        ```
    *   **For k = 3:**
        ```
        a[3] = (1/4) * (1*e^(0) + 2*e^(-j3π/2) + 1*e^(-j3π) + 0*e^(-j9π/2))
             = (1/4) * (1 + 2*(j) + 1*(-1) + 0)
             = (1/4) * (1 + 2j - 1) = j/2
        ```
    *   Therefore, `a[k] = {1, -j/2, 0, j/2}`

**5. Synthesizing the Sequence (Synthesis Equation):**

*   **Procedure:**

    1.  Given the DTFS coefficients `a[k]` and the period `N`.
    2.  Apply the synthesis equation:  `x[n] = Σ[k=0 to N-1] a[k] * e^(j(2π/N)kn)`
    3.  Evaluate the summation for each value of `n`.  Since `x[n]` is periodic with `N`, you only need to calculate for `n = 0` to `N-1`.  `x[n]` for other values of `n` can be found using `x[n] = x[n mod N]`.

*   **Example:**  Using the DTFS coefficients calculated in the previous example: `a[k] = {1, -j/2, 0, j/2}` and `N = 4`.

    *   `ω₀ = 2π/4 = π/2`
    *   `x[n] = Σ[k=0 to 3] a[k] * e^(j(π/2)kn)`

    *   **For n = 0:**
        ```
        x[0] = 1*e^(0) + (-j/2)*e^(0) + 0*e^(0) + (j/2)*e^(0) = 1 - j/2 + 0 + j/2 = 1
        ```
    *   **For n = 1:**
        ```
        x[1] = 1*e^(0) + (-j/2)*e^(jπ/2) + 0*e^(jπ) + (j/2)*e^(j3π/2)
             = 1 + (-j/2)*(j) + 0 + (j/2)*(-j)
             = 1 + 1/2 + 0 + 1/2 = 2
        ```
    *   **For n = 2:**
        ```
        x[2] = 1*e^(0) + (-j/2)*e^(jπ) + 0*e^(j2π) + (j/2)*e^(j3π)
             = 1 + (-j/2)*(-1) + 0 + (j/2)*(-1)
             = 1 + j/2 + 0 - j/2 = 1
        ```
    *   **For n = 3:**
        ```
        x[3] = 1*e^(0) + (-j/2)*e^(j3π/2) + 0*e^(j3π) + (j/2)*e^(j9π/2)
             = 1 + (-j/2)*(-j) + 0 + (j/2)*(j)
             = 1 - 1/2 + 0 - 1/2 = 0
        ```

    *   Therefore, `x[n] = {1, 2, 1, 0}`, which matches the original sequence.

**6. Properties of the DTFS:**

*   **Linearity:** If `x[n]` has DTFS coefficients `a[k]` and `y[n]` has DTFS coefficients `b[k]`, then `αx[n] + βy[n]` has DTFS coefficients `αa[k] + βb[k]`.
*   **Time Shifting:** If `x[n]` has DTFS coefficients `a[k]`, then `x[n - n₀]` has DTFS coefficients `a[k] * e^(-j(2π/N)kn₀)`.
*   **Frequency Shifting:** If `x[n]` has DTFS coefficients `a[k]`, then `x[n] * e^(j(2π/N)m n)` has DTFS coefficients `a[k - m]`.
*   **Conjugation:** If `x[n]` has DTFS coefficients `a[k]`, then `x*[n]` (complex conjugate of x[n]) has DTFS coefficients `a*[-k]` (complex conjugate of a[-k]).  Note the index is `[-k]`, which is equivalent to `[N-k]` since `a[k]` is periodic with period `N`.
*   **Time Reversal:** If `x[n]` has DTFS coefficients `a[k]`, then `x[-n]` has DTFS coefficients `a[-k]`. Note that the index `[-k]` is equivalent to `[N-k]`, since `a[k]` is periodic with period `N`.
*   **Convolution:** If `x[n]` has DTFS coefficients `a[k]` and `y[n]` has DTFS coefficients `b[k]`, then the *periodic* convolution of `x[n]` and `y[n]`  (`Σ[m=0 to N-1] x[m]y[n-m]`) has DTFS coefficients `N * a[k] * b[k]`.
*   **Multiplication:** If `x[n]` has DTFS coefficients `a[k]` and `y[n]` has DTFS coefficients `b[k]`, then `x[n] * y[n]` has DTFS coefficients `(1/N) * Σ[m=0 to N-1] a[m] * b[k-m]` (periodic convolution of `a[k]` and `b[k]`).
*   **Parseval's Relation:** `Σ[n=0 to N-1] |x[n]|^2  = N * Σ[k=0 to N-1] |a[k]|^2`.  This relates the energy of the signal in the time domain to the energy of its DTFS coefficients in the frequency domain.

**7. Important Points to Remember:**

*   The DTFS is only applicable to *periodic* discrete-time sequences.
*   The DTFS coefficients `a[k]` are also periodic with the same period `N` as the sequence `x[n]`.  Therefore, `a[k] = a[k+N]`.
*   The summation in both the analysis and synthesis equations is performed over one period of the signal.
*   The index `k` in `a[k]` represents the harmonic number or the frequency component.  `k = 0` corresponds to the DC component (average value).
*   When working with complex exponentials, remember Euler's formula: `e^(jθ) = cos(θ) + j sin(θ)`.

**8. Practice Questions/Exercises:**

1.  **Determine if the following sequences are periodic. If periodic, find the fundamental period:**
    *   (a) `x[n] = sin(πn/4)`
    *   (b) `x[n] = cos(2n)`
    *   (c) `x[n] = e^(jπn/6)`
    *   (d) `x[n] = cos(n/8)cos(πn)`

2.  **Find the DTFS coefficients for the following sequences:**
    *   (a) `x[n] = {1, 0, -1, 0}` periodic with N = 4.
    *   (b) `x[n] = {1, 1, 1}` periodic with N = 3.
    *   (c) `x[n] = δ[n]` for n = 0, 1, 2, and zero elsewhere, periodic with N=3.

3.  **Given the DTFS coefficients `a[k] = {1, 2, 1}` for k = 0, 1, 2, with N = 3, reconstruct the sequence `x[n]` using the synthesis equation.**

**Answers:**

1.  *   (a) Periodic, N = 8
    *   (b) Not Periodic
    *   (c) Periodic, N = 12
    *   (d) Not Periodic

2.  *   (a) `a[k] = {0, 0.5j, 0, -0.5j}`
    *   (b) `a[k] = {1, 0, 0}`
    *   (c) `a[k] = {1/3, 1/3, 1/3}`

3.  `x[n] = {4, -1+1.732j, -1-1.732j} / 3 = {4/3, (-1+j√3)/3, (-1-j√3)/3}`
    or approximately `x[n] = {1.333, -0.333+j0.577, -0.333-j0.577}`

These notes provide a detailed overview of the DTFS, covering the essential definitions, equations, and properties. The examples and practice questions are designed to help you understand and apply the concepts. Remember to practice and work through different examples to solidify your understanding. Good luck!
