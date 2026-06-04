---
title: "Properties of DT Signals  - Even and Odd"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b133"
status: "completed"
scrapedAt: "2026-05-20T16:15:22.499Z"
---
## SIGNALS AND SYSTEMS - Module 1: 1D Signals - Properties of DT Signals: Even and Odd

**Learning Outcomes:**

*   Define even and odd signals in the context of discrete-time signals.
*   Determine whether a given discrete-time signal is even, odd, or neither.
*   Decompose any discrete-time signal into its even and odd components.
*   Understand the properties of even and odd signals in terms of symmetry.
*   Apply the concepts of even and odd signals in signal processing applications.

**1. Introduction to Even and Odd Signals**

*   Discrete-time signals are sequences of numbers, often denoted as x[n], where n is an integer representing the discrete time index.
*   Similar to continuous-time signals, discrete-time signals can be classified based on their symmetry properties, specifically as even, odd, or neither.
*   Understanding even and odd properties is crucial for simplifying signal analysis and processing.

**2. Definition of Even Signals**

*   **Definition:** A discrete-time signal x[n] is said to be **even** if it satisfies the following condition:
    *   `x[n] = x[-n]` for all n.

*   **Symmetry:**  Even signals exhibit symmetry about the vertical axis (n=0). The value of the signal at any positive time index is equal to the value at the corresponding negative time index.

*   **Examples:**
    *   `x[n] = n^2` (truncated to have finite length, e.g. for n between -5 and 5).  `x[1] = 1, x[-1] = 1; x[2] = 4, x[-2] = 4`, and so on.
    *   `x[n] = cos(ωn)` for any ω.

**3. Definition of Odd Signals**

*   **Definition:** A discrete-time signal x[n] is said to be **odd** if it satisfies the following condition:
    *   `x[n] = -x[-n]` for all n.

*   **Symmetry:** Odd signals exhibit symmetry about the origin.  The value of the signal at any positive time index is the negative of the value at the corresponding negative time index.

*   **Important Note:** For an odd signal, `x[0]` must be equal to 0, since `x[0] = -x[-0] = -x[0]`, implying `2x[0] = 0`, hence `x[0] = 0`.

*   **Examples:**
    *   `x[n] = n` (truncated to have finite length, e.g. for n between -5 and 5). `x[1] = 1, x[-1] = -1; x[2] = 2, x[-2] = -2`, and so on.
    *   `x[n] = sin(ωn)` for any ω.

**4. Determining Even or Odd Signal Properties**

*   **Algorithm:**
    1.  Calculate `x[-n]` for all values of n.
    2.  Compare `x[n]` and `x[-n]`.
        *   If `x[n] = x[-n]` for all n, the signal is even.
        *   If `x[n] = -x[-n]` for all n, the signal is odd.
        *   If neither of the above conditions holds, the signal is neither even nor odd.

**5. Decomposition of a Signal into Even and Odd Components**

*   **Any** discrete-time signal x[n] can be expressed as the sum of an even signal `x_e[n]` and an odd signal `x_o[n]`:
    *   `x[n] = x_e[n] + x_o[n]`

*   **Formulas for Even and Odd Components:**
    *   `x_e[n] = (1/2) * (x[n] + x[-n])`
    *   `x_o[n] = (1/2) * (x[n] - x[-n])`

*   **Verification:**  If you compute `x_e[n]` and `x_o[n]` as above, you should be able to verify that `x_e[n] = x_e[-n]` and `x_o[n] = -x_o[-n]`. Also verify that the sum of these two components is your original signal x[n].

**6. Properties and Operations**

*   **Sum of Even Signals:** The sum of two even signals is always an even signal.
*   **Sum of Odd Signals:** The sum of two odd signals is always an odd signal.
*   **Product of Two Even Signals:** The product of two even signals is always an even signal.
*   **Product of Two Odd Signals:** The product of two odd signals is always an even signal.
*   **Product of an Even and an Odd Signal:** The product of an even and an odd signal is always an odd signal.
*   **Convolution:** If x[n] and h[n] are both even, then their convolution y[n] is even. If x[n] is even and h[n] is odd, then y[n] is odd.

**7. Applications**

*   **Signal Analysis:** Even and odd decomposition can simplify the analysis of signals, especially in frequency domain analysis using Discrete Fourier Transform (DFT).
*   **Filter Design:** Understanding even and odd symmetry is crucial in designing linear-phase filters. Linear phase filters can be designed such that they have either even or odd symmetry.
*   **Image Processing:** Concepts extend to 2D signals (images) where symmetry properties are important in image analysis and compression.

**8. Practice Questions/Exercises**

1.  **Determine whether the following signals are even, odd, or neither:**

    *   a) `x[n] = u[n]`, where `u[n]` is the unit step function.
    *   b) `x[n] = n * u[n]`
    *   c) `x[n] = n^3` for -5 <= n <= 5, zero otherwise.
    *   d) `x[n] = δ[n]`, where `δ[n]` is the unit impulse function.
    *   e)  `x[n] = {1, 2, 3, 2, 1}` for n = {-2, -1, 0, 1, 2} respectively, zero otherwise.

2.  **Decompose the signal `x[n] = {1, 2, 3, 4, 5}` for n = {0, 1, 2, 3, 4} respectively, zero otherwise into its even and odd components.** Remember to define the signal values at negative values of n for the decomposition to work correctly.

**Answers:**

1.  *   a) Neither.  `u[n] = 1` for n >= 0, and `u[n] = 0` for n < 0. Thus `u[-n] = 1` for n <= 0, and 0 otherwise. The signal is not equal to `u[-n]` nor `-u[-n]` for all n.
    *   b) Neither. `x[n] = n` for n>=0, zero otherwise. x[-n] = -n for n <= 0, zero otherwise.  Thus `x[n]` does not equal x[-n] or -x[-n] for all n.
    *   c) Odd.  `x[n] = n^3`, and `x[-n] = (-n)^3 = -n^3 = -x[n]`
    *   d) Even. `δ[n] = 1` for n = 0, and 0 otherwise.  Thus, `δ[n] = δ[-n]`.
    *   e) Even. x[-2] = 1, x[-1] = 2, x[0] = 3, x[1] = 2, x[2] = 1.

2.  *   To decompose, we need values for negative n. Assume `x[n] = 0` for n < 0 and n > 4 (i.e., a finite length signal). Then we need to define `x[-n]`.
    *   Given x[n] = {1, 2, 3, 4, 5} for n = {0, 1, 2, 3, 4}, and 0 elsewhere:
    *   We can create x[-n] = {5, 4, 3, 2, 1} for n = {-4, -3, -2, -1, 0} respectively, and zero elsewhere.
    *   `x_e[n] = (1/2) * (x[n] + x[-n])`:
        *   `x_e[0] = (1/2) * (1 + 1) = 1`
        *   `x_e[1] = (1/2) * (2 + 0) = 1` and `x_e[-1] = (1/2) * (0 + 2) = 1`
        *   `x_e[2] = (1/2) * (3 + 0) = 1.5` and `x_e[-2] = (1/2) * (0 + 3) = 1.5`
        *   `x_e[3] = (1/2) * (4 + 0) = 2` and `x_e[-3] = (1/2) * (0 + 4) = 2`
        *   `x_e[4] = (1/2) * (5 + 0) = 2.5` and `x_e[-4] = (1/2) * (0 + 5) = 2.5`

    *   `x_o[n] = (1/2) * (x[n] - x[-n])`:
        *   `x_o[0] = (1/2) * (1 - 1) = 0`
        *   `x_o[1] = (1/2) * (2 - 0) = 1` and `x_o[-1] = (1/2) * (0 - 2) = -1`
        *   `x_o[2] = (1/2) * (3 - 0) = 1.5` and `x_o[-2] = (1/2) * (0 - 3) = -1.5`
        *   `x_o[3] = (1/2) * (4 - 0) = 2` and `x_o[-3] = (1/2) * (0 - 4) = -2`
        *   `x_o[4] = (1/2) * (5 - 0) = 2.5` and `x_o[-4] = (1/2) * (0 - 5) = -2.5`

    *    Check: x_e[n] + x_o[n] should equal the original signal:
         *  n=0: 1 + 0 = 1 (correct)
         *  n=1: 1 + 1 = 2 (correct)
         *  n=2: 1.5 + 1.5 = 3 (correct)
         *  n=3: 2 + 2 = 4 (correct)
         *  n=4: 2.5 + 2.5 = 5 (correct)
         * for n < 0, we will get x_e[n] + x_o[n] = 0 which is also consistent with the definition of x[n].

**9. Important Points to Remember**

*   An even signal is symmetric around n = 0.
*   An odd signal is symmetric around the origin, and always has a value of 0 at n = 0.
*   Any signal can be decomposed into even and odd components.
*   The formulas for even and odd components are: `x_e[n] = (1/2) * (x[n] + x[-n])` and `x_o[n] = (1/2) * (x[n] - x[-n])`
*   Pay attention to how the signal is defined. A signal might be defined for a restricted range of *n* only.  If decomposing into even and odd signals, be sure to define the signal for *all* n, or at least the relevant symmetric range (e.g., if decomposing from -N to N).
