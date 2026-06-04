---
title: "Characterizing LTI systems using z transform"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b177"
status: "completed"
scrapedAt: "2026-05-20T16:16:07.758Z"
---
# Signals and Systems - Module 4: Z-Transform - Characterizing LTI Systems

## Learning Outcomes:

Upon completion of this module, you will be able to:

*   Understand the concept of system function (transfer function) H(z) for LTI systems.
*   Determine the stability of an LTI system from its system function and Region of Convergence (ROC).
*   Analyze the frequency response of LTI systems using the z-transform.
*   Determine the impulse response h[n] from the system function H(z).
*   Determine the difference equation representation of an LTI system from H(z) and vice-versa.
*   Solve for the output y[n] of an LTI system given its input x[n] and system function H(z) using the z-transform.

## 1. Introduction to the System Function H(z)

*   **Definition:** The system function H(z) (also called the transfer function) of an LTI system is the z-transform of the system's impulse response h[n].

    *   `H(z) = Z{h[n]} = ∑[n=-∞ to ∞] h[n]z⁻ⁿ`

*   **Significance:**  H(z) completely characterizes the LTI system.  Knowing H(z) allows you to:

    *   Determine the system's stability.
    *   Calculate the output for any given input.
    *   Find the frequency response.
    *   Derive the difference equation representing the system.

*   **Relationship between Input, Output, and System Function:** If x[n] is the input to an LTI system and y[n] is the output, then in the z-domain:

    *   `Y(z) = H(z)X(z)`

    Where:
        *   `Y(z)` is the z-transform of the output signal y[n].
        *   `X(z)` is the z-transform of the input signal x[n].
        *   `H(z)` is the system function.

*   **Important Point:** The Region of Convergence (ROC) of H(z) is crucial for determining the system's stability and uniqueness of h[n].

## 2. Stability of LTI Systems from H(z)

*   **Definition of Stability:** An LTI system is Bounded-Input Bounded-Output (BIBO) stable if every bounded input produces a bounded output.  Mathematically:

    *   If `|x[n]| ≤ B₁` for all n, then `|y[n]| ≤ B₂` for all n, where B₁ and B₂ are finite constants.

*   **Stability Criterion in the z-domain:**  An LTI system is BIBO stable if and only if the ROC of its system function H(z) *includes* the unit circle (`|z| = 1`).

*   **Poles and Stability:** The location of the poles of H(z) (the roots of the denominator of H(z)) plays a critical role in determining stability.

    *   For a causal LTI system to be stable, all poles of H(z) must lie *inside* the unit circle (i.e., `|z| < 1` for all poles).

    *   For an anti-causal LTI system to be stable, all poles of H(z) must lie *outside* the unit circle (i.e., `|z| > 1` for all poles).

    *   For a general (non-causal) LTI system to be stable, the ROC must include the unit circle. This means there cannot be any poles on the unit circle, and the ROC is an annulus containing |z| = 1.

*   **Example 1:**

    *   `H(z) = 1 / (1 - 0.5z⁻¹)` , ROC: `|z| > 0.5`.  Pole at z = 0.5. Since `|0.5| < 1` and the system is causal (ROC `|z| > 0.5`), the system is stable.

*   **Example 2:**

    *   `H(z) = 1 / (1 - 2z⁻¹)` , ROC: `|z| > 2`. Pole at z = 2. Since `|2| > 1` and the system is causal (ROC `|z| > 2`), the system is unstable.

*   **Example 3:**

    *   `H(z) = 1 / (1 - 0.5z⁻¹)  - 1 / (1 - 2z⁻¹)` , ROC: `0.5 < |z| < 2`. Poles at z = 0.5 and z = 2. Since the unit circle (`|z| = 1`) lies within the ROC, the system is stable.

## 3. Frequency Response of LTI Systems from H(z)

*   **Frequency Response Definition:** The frequency response H(e<sup>jω</sup>) of an LTI system describes how the system responds to different frequency components of the input signal.

*   **Relationship to H(z):**  The frequency response H(e<sup>jω</sup>) is obtained by evaluating the system function H(z) on the unit circle, i.e., substituting `z = e<sup>jω</sup>` into H(z).

    *   `H(e<sup>jω</sup>) = H(z)|<sub>z=e<sup>jω</sup></sub>`

*   **Magnitude and Phase Response:** The frequency response H(e<sup>jω</sup>) is generally a complex-valued function.  It can be expressed in terms of its magnitude and phase:

    *   `H(e<sup>jω</sup>) = |H(e<sup>jω</sup>)|e<sup>j∠H(e<sup>jω</sup>)</sup>`

        *   `|H(e<sup>jω</sup>)|` is the magnitude response, representing the gain of the system at frequency ω.
        *   `∠H(e<sup>jω</sup>)` is the phase response, representing the phase shift introduced by the system at frequency ω.

*   **Important Point:**  The ROC of H(z) *must* include the unit circle for the frequency response to exist.  If the unit circle is not in the ROC, the frequency response is not defined.

*   **Example:**

    *   `H(z) = 1 / (1 - 0.5z⁻¹)` , ROC: `|z| > 0.5` (stable and causal).
    *   `H(e<sup>jω</sup>) = 1 / (1 - 0.5e⁻<sup>jω</sup>)`
    *   The magnitude and phase responses can be plotted to analyze the system's frequency characteristics (e.g., whether it is a low-pass, high-pass, or band-pass filter).

## 4. Determining the Impulse Response h[n] from H(z)

*   **Inverse Z-Transform:** The impulse response h[n] can be obtained by taking the inverse z-transform of the system function H(z).

    *   `h[n] = Z⁻¹{H(z)}`

*   **Methods for Finding the Inverse Z-Transform:**

    *   **Partial Fraction Expansion:** Decompose H(z) into simpler fractions whose inverse z-transforms are known. This is the most common and versatile method.

    *   **Power Series Expansion:** Express H(z) as a power series in z⁻¹ (or z depending on the ROC). The coefficients of the power series represent the values of h[n].

    *   **Lookup Tables:** Use tables of known z-transform pairs.

    *   **Contour Integration:**  A more advanced method involving complex analysis.

*   **Importance of ROC:** The ROC of H(z) is *essential* for determining the correct inverse z-transform. Different ROCs lead to different sequences h[n].

*   **Example:**

    *   `H(z) = 1 / (1 - 0.5z⁻¹)` , ROC: `|z| > 0.5` (causal system).
    *   Using the z-transform pair: `aⁿu[n] ↔ 1 / (1 - az⁻¹) , |z| > |a|`
    *   We can directly find: `h[n] = (0.5)ⁿu[n]`

## 5. Difference Equation Representation from H(z) and Vice-Versa

*   **Difference Equation:** A difference equation is a recursive formula that relates the current output sample y[n] to past and present input samples x[n] and past output samples y[n-k].

*   **Relationship between H(z) and Difference Equations:**  H(z) can be directly obtained from the difference equation and vice versa.

*   **Deriving H(z) from the Difference Equation:**

    1.  Take the z-transform of both sides of the difference equation, using the time-shifting property: `Z{y[n-k]} = z⁻ᵏY(z)`.
    2.  Solve for `H(z) = Y(z) / X(z)`.

*   **Deriving the Difference Equation from H(z):**

    1.  Express H(z) as `H(z) = Y(z) / X(z)`.
    2.  Cross-multiply to obtain an equation relating `Y(z)` and `X(z)`.
    3.  Take the inverse z-transform of both sides of the equation.  This will result in the difference equation.

*   **General Form of H(z) and Corresponding Difference Equation:**

    *   Let `H(z) = (b₀ + b₁z⁻¹ + b₂z⁻² + ... + bₘz⁻ᵐ) / (a₀ + a₁z⁻¹ + a₂z⁻² + ... + aₙz⁻ⁿ)`

    *   Then the corresponding difference equation is:

        *   `a₀y[n] + a₁y[n-1] + a₂y[n-2] + ... + aₙy[n-n] = b₀x[n] + b₁x[n-1] + b₂x[n-2] + ... + bₘx[n-m]`

    *   Typically, we normalize the equation by dividing both sides by a₀, so the coefficient of y[n] becomes 1.

*   **Example:**

    *   Difference Equation: `y[n] - 0.5y[n-1] = x[n]`

    *   Taking the z-transform: `Y(z) - 0.5z⁻¹Y(z) = X(z)`

    *   Solving for H(z): `H(z) = Y(z) / X(z) = 1 / (1 - 0.5z⁻¹)`

*   **Reverse Example:**

    *   `H(z) = (1 + z⁻¹) / (1 - 0.25z⁻¹)`

    *   `Y(z) / X(z) = (1 + z⁻¹) / (1 - 0.25z⁻¹)`

    *   `Y(z) (1 - 0.25z⁻¹) = X(z) (1 + z⁻¹)`

    *   `Y(z) - 0.25z⁻¹Y(z) = X(z) + z⁻¹X(z)`

    *   Taking the inverse z-transform: `y[n] - 0.25y[n-1] = x[n] + x[n-1]`

## 6. Solving for the Output y[n] using the Z-Transform

*   **Procedure:**

    1.  Find the z-transform of the input signal x[n], denoted as X(z).
    2.  Determine the system function H(z).
    3.  Multiply X(z) and H(z) to obtain the z-transform of the output signal: `Y(z) = H(z)X(z)`.
    4.  Find the inverse z-transform of Y(z) to obtain the output signal y[n]: `y[n] = Z⁻¹{Y(z)}`.

*   **Example:**

    *   Input: `x[n] = u[n]` (unit step function)
    *   System Function: `H(z) = 1 / (1 - 0.5z⁻¹)` , ROC: `|z| > 0.5` (stable and causal)

    1.  `X(z) = 1 / (1 - z⁻¹)` , ROC: `|z| > 1`

    2.  `Y(z) = H(z)X(z) = [1 / (1 - 0.5z⁻¹)] * [1 / (1 - z⁻¹)] = 1 / [(1 - 0.5z⁻¹)(1 - z⁻¹)]`

    3.  Partial Fraction Expansion: `Y(z) = 2 / (1 - z⁻¹) - 1 / (1 - 0.5z⁻¹)`

    4.  Inverse Z-Transform: `y[n] = 2u[n] - (0.5)ⁿu[n]`

## 7. Practice Questions

**Question 1:**

An LTI system has a system function `H(z) = (z + 0.2) / (z² - 0.5z + 0.06)`.

(a) Determine the poles and zeros of H(z).
(b) Specify the ROC of H(z) if the system is causal.
(c) Is the causal system stable? Justify your answer.
(d) Determine the impulse response h[n] for the causal system.

**Solution 1:**

(a) `H(z) = (z + 0.2) / (z² - 0.5z + 0.06) = (z + 0.2) / ((z - 0.2)(z - 0.3))`

*   Poles: z = 0.2, z = 0.3
*   Zero: z = -0.2

(b) For a causal system, the ROC is outside the outermost pole: `|z| > 0.3`

(c) Yes, the causal system is stable. Both poles lie inside the unit circle (`|0.2| < 1` and `|0.3| < 1`), and the ROC `|z| > 0.3` includes the unit circle.

(d) Partial Fraction Expansion: `H(z)/z = (z + 0.2) / (z(z - 0.2)(z - 0.3)) = A/z + B/(z-0.2) + C/(z-0.3)`
Solving gives: A = -33.33, B = 40, C = -6.666
`H(z) = -33.33 + 40z/(z-0.2) - 6.666z/(z-0.3)`
Converting to z⁻¹ terms:
`H(z) = -33.33 + 40/(1 - 0.2z⁻¹) - 6.666/(1 - 0.3z⁻¹)`

h[n] = -33.33δ[n] + 40(0.2)ⁿu[n] - 6.666(0.3)ⁿu[n]

**Question 2:**

An LTI system is described by the difference equation: `y[n] - 0.7y[n-1] + 0.1y[n-2] = x[n] - x[n-1]`.

(a) Find the system function H(z).
(b) Determine the ROC for a causal system.
(c) Determine if the causal system is stable.

**Solution 2:**

(a) Taking the z-transform of the difference equation:
`Y(z) - 0.7z⁻¹Y(z) + 0.1z⁻²Y(z) = X(z) - z⁻¹X(z)`
`H(z) = Y(z) / X(z) = (1 - z⁻¹) / (1 - 0.7z⁻¹ + 0.1z⁻²) = (1 - z⁻¹) / ((1 - 0.2z⁻¹)(1 - 0.5z⁻¹))`
`H(z) = z(z-1)/((z-0.2)(z-0.5))`

(b) Poles: z = 0.2, z = 0.5. For a causal system, the ROC is `|z| > 0.5`.

(c) Yes, the causal system is stable because both poles are inside the unit circle, and the ROC includes the unit circle.

**Question 3:**

An LTI system has the system function `H(z) = 1 / (1 - 0.8z⁻¹)` and the input is `x[n] = δ[n] + 2δ[n-1]`. Determine the output y[n]. Assume the system is causal.

**Solution 3:**

1. `X(z) = Z{δ[n] + 2δ[n-1]} = 1 + 2z⁻¹`
2. `H(z) = 1 / (1 - 0.8z⁻¹)`
3. `Y(z) = H(z)X(z) = (1 + 2z⁻¹) / (1 - 0.8z⁻¹) = (1 - 0.8z⁻¹ + 2.8z⁻¹)/(1 - 0.8z⁻¹) = 1 + (2.8z⁻¹)/(1 - 0.8z⁻¹)`
  `= 1 + 2.8z⁻¹ ∑(0.8z⁻¹)^n`
  `= 1 + 2.8 ∑(0.8)^(n)(z^(-1))^(n+1) `
  `= 1 + 2.8 ∑(0.8)^(n-1)(z^(-1))^(n) `
4. `y[n] = δ[n] + 2.8(0.8)^(n-1)u[n-1]`

## 8. Important Points to Remember

*   The system function H(z) is the z-transform of the impulse response h[n].
*   The ROC of H(z) is crucial for determining stability and the correct inverse z-transform.
*   An LTI system is stable if the ROC of H(z) includes the unit circle. For causal stable systems, all poles must lie inside the unit circle.
*   The frequency response H(e<sup>jω</sup>) is obtained by evaluating H(z) on the unit circle (z = e<sup>jω</sup>).
*   Partial fraction expansion is a key technique for finding the inverse z-transform and solving for the output.
*   Understand the relationship between the system function H(z) and the difference equation representation of the LTI system.

This comprehensive guide should provide a strong foundation for understanding how to characterize LTI systems using the z-transform. Good luck with your studies!
