---
title: "Even/Odd symmetry"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b145"
status: "completed"
scrapedAt: "2026-05-20T16:15:34.285Z"
---
# Signals and Systems - Module 1: 1D Signals - Even/Odd Symmetry

## Learning Outcomes:

*   Understand the definitions of even and odd signals.
*   Determine if a given signal is even, odd, or neither.
*   Decompose a signal into its even and odd components.
*   Recognize and utilize properties of even and odd signals.

## 1. Key Concepts and Definitions:

*   **Signal:** A function that conveys information, often representing a physical quantity varying over time.
*   **1D Signal:** A signal that depends on a single independent variable, typically time (t).
*   **Even Signal:** A signal `x(t)` is even if it is symmetric about the vertical axis (t=0). Mathematically:
    `x(t) = x(-t)` for all `t`.
*   **Odd Signal:** A signal `x(t)` is odd if it is anti-symmetric about the vertical axis (t=0). Mathematically:
    `x(t) = -x(-t)` for all `t`.  This also implies that `x(0) = 0` for odd signals (except in distributions like the Dirac delta function).
*   **Symmetry:**  The property of being identical on both sides of a central point or axis.  In the context of signals, it refers to the signal's behavior about the time origin.
*   **Anti-Symmetry:** The property of being inverted on both sides of a central point or axis.

## 2. Even Signal Characteristics:

*   Symmetric about the y-axis (time origin).
*   Examples:
    *   Cosine function: `cos(t)`
    *   `t^2`
    *   Absolute value function: `|t|`
    *   A constant function: `x(t) = C` (where C is a constant)

## 3. Odd Signal Characteristics:

*   Anti-symmetric about the y-axis (time origin).
*   Passes through the origin (x(0) = 0).
*   Examples:
    *   Sine function: `sin(t)`
    *   `t^3`
    *   `t`
*   Note:  A Dirac delta function, *δ(t)* is technically even but the shifted delta function, *δ(t-a)*, (a != 0) is neither even nor odd.

## 4. Determining Even/Odd Symmetry:

To determine if a signal `x(t)` is even, odd, or neither, follow these steps:

1.  **Calculate `x(-t)`:** Replace `t` with `-t` in the signal's expression.
2.  **Compare `x(-t)` with `x(t)`:**
    *   If `x(-t) = x(t)`, the signal is even.
    *   If `x(-t) = -x(t)`, the signal is odd.
    *   If neither of the above conditions is met, the signal is neither even nor odd.

## 5. Decomposing a Signal into Even and Odd Components:

Any signal `x(t)` can be decomposed into the sum of its even component `xe(t)` and its odd component `xo(t)`:

`x(t) = xe(t) + xo(t)`

Where:

*   **Even Component:** `xe(t) = (1/2) * [x(t) + x(-t)]`
*   **Odd Component:** `xo(t) = (1/2) * [x(t) - x(-t)]`

## 6. Properties of Even and Odd Signals:

*   **Multiplication:**
    *   even * even = even
    *   odd * odd = even
    *   even * odd = odd
*   **Integration:**
    *   The integral of an odd signal over a symmetric interval (-T to T) is always zero:  ∫[-T, T] xo(t) dt = 0
    *   The integral of an even signal over a symmetric interval (-T to T) is twice the integral over the positive interval (0 to T): ∫[-T, T] xe(t) dt = 2 * ∫[0, T] xe(t) dt
*   **Differentiation:**
    *   The derivative of an even signal is odd.
    *   The derivative of an odd signal is even.
*   **Convolution:** The convolution of two even signals is even. The convolution of two odd signals is even. The convolution of an even and odd signal is odd.
*   **Fourier Transform:** The Fourier Transform of an even real signal is real and even. The Fourier Transform of an odd real signal is imaginary and odd.

## 7. Examples:

**Example 1:  `x(t) = t^2`**

1.  `x(-t) = (-t)^2 = t^2`
2.  `x(-t) = x(t)`

Therefore, `x(t) = t^2` is an **even** signal.

**Example 2: `x(t) = t^3`**

1.  `x(-t) = (-t)^3 = -t^3`
2.  `x(-t) = -x(t)`

Therefore, `x(t) = t^3` is an **odd** signal.

**Example 3: `x(t) = e^t`**

1.  `x(-t) = e^(-t)`
2.  `x(-t) != x(t)` and `x(-t) != -x(t)`

Therefore, `x(t) = e^t` is **neither** even nor odd.

**Example 4: Decomposition of `x(t) = e^t`**

*   `xe(t) = (1/2) * [e^t + e^(-t)] = cosh(t)` (Hyperbolic cosine - Even)
*   `xo(t) = (1/2) * [e^t - e^(-t)] = sinh(t)` (Hyperbolic sine - Odd)
*   `x(t) = cosh(t) + sinh(t) = e^t`

## 8. Practice Questions/Exercises:

**Question 1:** Determine if the following signal is even, odd, or neither: `x(t) = t * cos(t)`

**Answer:**

1.  `x(-t) = (-t) * cos(-t) = -t * cos(t)` (since cosine is even)
2.  `x(-t) = -x(t)`

Therefore, `x(t) = t * cos(t)` is an **odd** signal.

**Question 2:** Determine if the following signal is even, odd, or neither: `x(t) = t^2 + t`

**Answer:**

1.  `x(-t) = (-t)^2 + (-t) = t^2 - t`
2.  `x(-t) != x(t)` and `x(-t) != -x(t)`

Therefore, `x(t) = t^2 + t` is **neither** even nor odd.

**Question 3:**  Find the even and odd components of `x(t) = u(t)` (the unit step function).

**Answer:**

*   `xe(t) = (1/2) * [u(t) + u(-t)] = (1/2) * [1 + 1] = 1/2  for t > 0` and  `(1/2) * [0 + 0] = 0 for t < 0` which corresponds to 1/2 for all t except at t = 0 where it is also 1/2 by definition.  This is sometimes written as 1/2.
*   `xo(t) = (1/2) * [u(t) - u(-t)]` = 1/2 for t > 0, -1/2 for t < 0, and 0 at t=0. This can be written as (1/2)sign(t).

**Question 4:** If x(t) is even and y(t) is odd, what is the symmetry of z(t) = x(t) * y(t)?

**Answer:**

z(t) will be odd since even * odd = odd.

**Question 5:** If x(t) is an odd signal, what is the value of the integral of x(t) from -5 to 5?

**Answer:**

The integral will be zero.

## 9. Important Points to Remember:

*   A signal can be even, odd, or neither.
*   Any signal can be decomposed into the sum of its even and odd components.
*   Understanding the properties of even and odd signals can simplify signal processing tasks.
*   Pay attention to the definitions when determining symmetry.
*   Remember the key properties of even and odd signals related to multiplication, integration, differentiation, and Fourier Transforms.
