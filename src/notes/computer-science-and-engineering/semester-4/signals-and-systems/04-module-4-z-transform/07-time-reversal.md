---
title: "Time Reversal"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b16e"
status: "completed"
scrapedAt: "2026-05-20T16:16:01.112Z"
---
## Signals and Systems: Module 4 - Z-Transform - Time Reversal

**Learning Outcomes:**

*   Understand the definition of the time reversal property of the Z-transform.
*   Apply the time reversal property to find the Z-transform of time-reversed sequences.
*   Determine the Region of Convergence (ROC) for the Z-transform of time-reversed sequences.
*   Analyze how time reversal affects the poles and zeros of the Z-transform.

**1. Introduction to Time Reversal**

*   **Definition:** Time reversal involves reflecting a discrete-time sequence around the time origin (n=0).  If `x[n]` is a discrete-time sequence, its time-reversed version is `x[-n]`.

*   **Intuition:**  Imagine folding a graph of the sequence along the y-axis. The left side becomes the right side, and vice-versa.

*   **Example:**
    *   `x[n] = {1, 2, 3, 4}` for `n = {0, 1, 2, 3}`
    *   `x[-n] = {4, 3, 2, 1}` for `n = {-3, -2, -1, 0}`

**2. The Time Reversal Property of the Z-Transform**

*   **Statement:** If `x[n]` has a Z-transform `X(z)` with a Region of Convergence (ROC) `R`, then the Z-transform of the time-reversed sequence `x[-n]` is `X(z⁻¹)` with an ROC of `1/R`.

*   **Mathematical Representation:**

    If  `x[n]  <--->  X(z)  with ROC = R`

    Then `x[-n]  <--->  X(z⁻¹)  with ROC = 1/R`

    Where:
    *   `X(z) = Σ[n = -∞ to ∞] x[n] * z⁻ⁿ`
    *   `X(z⁻¹) = Σ[n = -∞ to ∞] x[n] * (z⁻¹)⁻ⁿ = Σ[n = -∞ to ∞] x[n] * zⁿ`

*   **Proof:**

    Let `y[n] = x[-n]`.  The Z-transform of `y[n]` is:

    `Y(z) = Σ[n = -∞ to ∞] y[n] * z⁻ⁿ`

    Substituting `y[n] = x[-n]`:

    `Y(z) = Σ[n = -∞ to ∞] x[-n] * z⁻ⁿ`

    Let `m = -n`.  Then `n = -m`, and the limits of summation change to `m = ∞` to `m = -∞`.  Swapping the limits changes the sign of the summation which is then compensated by changing the sign of m.

    `Y(z) = Σ[m = ∞ to -∞] x[m] * zᵐ =  Σ[m = -∞ to ∞] x[m] * zᵐ`

    Since `X(z⁻¹) = Σ[n = -∞ to ∞] x[n] * zⁿ`, we have:

    `Y(z) = X(z⁻¹)`

    Therefore, `x[-n] <---> X(z⁻¹)`

**3. Region of Convergence (ROC) and Time Reversal**

*   **Crucial Impact:** The ROC is significantly affected by time reversal. If the original ROC is `R`, the ROC of the time-reversed sequence's Z-transform becomes `1/R`.

*   **Understanding `1/R`:** If `R` is defined as `r1 < |z| < r2`, then `1/R` is defined as `1/r2 < |z| < 1/r1`. This means the ROC region is *inverted* with respect to the unit circle.

*   **Example:**

    *   If `X(z)` has an ROC of `|z| > 2` (outside the circle of radius 2), then `X(z⁻¹)` has an ROC of `|z| < 1/2` (inside the circle of radius 1/2).
    *   If `X(z)` has an ROC of `|z| < 0.5` (inside the circle of radius 0.5), then `X(z⁻¹)` has an ROC of `|z| > 2` (outside the circle of radius 2).
    *   If `X(z)` has an ROC of `1 < |z| < 2` (an annulus), then `X(z⁻¹)` has an ROC of `1/2 < |z| < 1` (another annulus).

**4. Poles and Zeros and Time Reversal**

*   **Inversion:** Time reversal inverts the locations of the poles and zeros with respect to the unit circle.

*   **Specifically:**

    *   If `X(z)` has a pole at `z = p`, then `X(z⁻¹)` has a pole at `z = 1/p`.
    *   If `X(z)` has a zero at `z = z0`, then `X(z⁻¹)` has a zero at `z = 1/z0`.

*   **Example:**

    *   If `X(z) = (z - 2) / (z - 0.5)`, then `X(z⁻¹) = (z⁻¹ - 2) / (z⁻¹ - 0.5) =  (1 - 2z) / (1 - 0.5z) = -2(z - 0.5) / -0.5(z - 2) = 4(z-0.5)/(z-2)`.
    *   `X(z)` has a zero at `z = 2` and a pole at `z = 0.5`.
    *   `X(z⁻¹)` has a zero at `z = 0.5 = 1/2` and a pole at `z = 2 = 1/0.5`. The pole and zero locations are reciprocals of the original.  Note how algebraic manipulation is helpful to easily identify the pole and zero locations.

**5. Examples**

**Example 1:**

*   Let `x[n] = aⁿ u[n]`, where `|a| < 1` and `u[n]` is the unit step function.
*   `X(z) = z / (z - a)` with ROC: `|z| > |a|`
*   Find the Z-transform of `x[-n] = a⁻ⁿ u[-n]`.

    *   `X(z⁻¹) = (z⁻¹) / (z⁻¹ - a) = 1 / (1 - a*z) = -1/a * (z - 1/a) / z * z/(z-1/a) =  (-1/a) * z/(z-1/a)`
    *   ROC: `|z| < 1/|a|`
    *   Note: `x[-n]` can also be written as `a⁻ⁿ u[-n] = a⁻ⁿ (-u[n-1])`, where `u[-n]` is 1 for n <=0 and 0 otherwise.

**Example 2:**

*   Let `x[n] = δ[n - k]`, where `δ[n]` is the unit impulse function and `k` is a constant.
*   `X(z) = z⁻ᵏ`  with ROC:  All z, except possibly z = 0 or z = ∞ (depending on the sign of `k`)

*   Find the Z-transform of `x[-n] = δ[-n - k] = δ[-(n + k)] = δ[n+k]`.

    *   `X(z⁻¹) = (z⁻¹)^(-k) = zᵏ`
    *   ROC: All z, except possibly z = 0 or z = ∞ (depending on the sign of `k`)

**6. Practice Questions & Exercises**

**Question 1:**

If `x[n]` has a Z-transform `X(z) = (z + 1) / (z - 0.5)` with ROC `|z| > 0.5`, find the Z-transform and ROC of `x[-n]`.

**Answer:**

*   `X(z⁻¹) = (z⁻¹ + 1) / (z⁻¹ - 0.5) = (1 + z) / (1 - 0.5z) = 2(z + 1) / (2 - z) = -2(z + 1)/(z-2)`
*   ROC: `|z| < 2`

**Question 2:**

A sequence `x[n]` has a Z-transform with a pole at `z = 3` and a zero at `z = 0.2`. Where will the pole and zero be located in the Z-transform of `x[-n]`?

**Answer:**

*   Pole at `z = 1/3`
*   Zero at `z = 5`

**Question 3:**

The Z-transform of a sequence `x[n]` is given by `X(z) = 1/(1 - 0.8z⁻¹)` for `|z| > 0.8`. Determine `Y(z)`, the Z-transform of `y[n] = x[-n]`, and specify its ROC.

**Answer:**

*   `Y(z) = X(z⁻¹) = 1/(1 - 0.8z)`
*   ROC: `|z| < 1/0.8 = 1.25`

**Question 4:**

Given  x[n] = {2, 1, 3, 4} for n = {0, 1, 2, 3}. Determine X(z) and then use the time reversal property to find the Z-transform of x[-n] and verify by directly computing the Z-transform of x[-n].

**Answer:**

* X(z) = 2 + z⁻¹ + 3z⁻² + 4z⁻³
* X(z⁻¹) = 2 + z + 3z² + 4z³
* Alternatively, x[-n] = {4, 3, 1, 2} for n = {-3, -2, -1, 0}
*  Z-transform of x[-n] = 4z³ + 3z² + z + 2

**7. Important Points to Remember**

*   Time reversal *flips* the sequence around the time origin (n=0).
*   The Z-transform of `x[-n]` is `X(z⁻¹)`.
*   The ROC of `X(z⁻¹)` is the *inverse* of the ROC of `X(z)` (i.e., `1/R`).
*   Poles and zeros are also *inverted* with respect to the unit circle (if `X(z)` has a pole/zero at `z = p`, then `X(z⁻¹)` has a pole/zero at `z = 1/p`).
*   Be careful with algebraic manipulations when finding `X(z⁻¹)` to correctly identify the new pole and zero locations. It's generally best to get an expression with the numerator and denominator being polynomials in `z` instead of `z⁻¹`.

These detailed notes cover the definition, application, and consequences of the time reversal property in the context of the Z-transform. The examples and practice questions provide a solid foundation for understanding and applying this property in signals and systems analysis.
