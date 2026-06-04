---
title: "Initial and Final Value Theorems"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b174"
status: "completed"
scrapedAt: "2026-05-20T16:16:05.385Z"
---
## Signals and Systems - Module 4: Z-Transform - Initial and Final Value Theorems

**Module Goal:** To understand the Initial and Final Value Theorems of the Z-Transform and apply them to determine the initial and final values of a discrete-time signal.

**Learning Outcomes:**

*   Understand the Initial Value Theorem.
*   Apply the Initial Value Theorem to find the initial value of a signal.
*   Understand the Final Value Theorem.
*   Apply the Final Value Theorem to find the final value of a signal.
*   Recognize the conditions under which the Final Value Theorem is valid.

---

### 1. Key Concepts and Definitions

*   **Z-Transform:** A mathematical tool used to transform a discrete-time signal, x[n], from the time domain to the complex frequency domain (z-domain).  It's defined as:

    `X(z) = Σ (from n=-∞ to ∞) x[n] * z^-n`

*   **Initial Value:** The value of the discrete-time signal x[n] at time n = 0, denoted as x[0].

*   **Final Value:** The value that the discrete-time signal x[n] approaches as n approaches infinity, denoted as x[∞].

*   **Region of Convergence (ROC):**  The region in the z-plane for which the Z-transform converges.  It's crucial for the existence and uniqueness of the inverse Z-transform.

*   **Poles:** The values of *z* for which the magnitude of X(z) becomes infinite. They are the roots of the denominator polynomial of X(z).

### 2. Initial Value Theorem

*   **Statement:** If x[n] is a causal sequence (i.e., x[n] = 0 for n < 0) and X(z) is its Z-transform, then the initial value x[0] can be found using the following formula:

    `x[0] = lim (z→∞) X(z)`

*   **Derivation (Informal):** Consider the unilateral Z-transform of a causal sequence:

    `X(z) = x[0] + x[1]z⁻¹ + x[2]z⁻² + x[3]z⁻³ + ...`

    As `z` approaches infinity, `z⁻¹, z⁻², z⁻³, ...` all approach zero.  Therefore, all terms after `x[0]` vanish, leaving us with the Initial Value Theorem.

*   **Conditions:**
    *   The sequence must be causal (x[n] = 0 for n < 0).
    *   `lim (z→∞) X(z)` must exist and be finite.

*   **Application:**  The Initial Value Theorem allows us to directly calculate the first sample of a sequence from its Z-transform without performing the inverse Z-transform.

*   **Example:**

    Let `X(z) = (z² + 2z + 1) / (z² + z + 0.25)`, ROC |z| > 0.5

    `x[0] = lim (z→∞) X(z) = lim (z→∞) (z² + 2z + 1) / (z² + z + 0.25) = lim (z→∞) (1 + 2/z + 1/z²) / (1 + 1/z + 0.25/z²) = 1`

    Therefore, `x[0] = 1`.

### 3. Final Value Theorem

*   **Statement:** If x[n] is a discrete-time signal with Z-transform X(z), and if `(z-1)X(z)` is analytic (i.e., has no poles) on and outside the unit circle (|z| ≥ 1), then the final value x[∞] can be found using the following formula:

    `x[∞] = lim (z→1) (z - 1)X(z)`

*   **Derivation (Informal):**

    The derivation relies on the properties of the Z-transform and the shifting property. It's more complex and often omitted in introductory courses.

*   **Conditions (Critical):**

    *   **`x[n]` must have a final value.**  This is the most important condition. If the sequence oscillates indefinitely or grows unboundedly, a final value doesn't exist.
    *   **`(z-1)X(z)` must be analytic on and outside the unit circle (|z| ≥ 1).**  This means all the poles of `(z-1)X(z)` must lie strictly *inside* the unit circle (|z| < 1).  This ensures that the system is stable and approaches a steady state.  The presence of poles on or outside the unit circle implies instability and a final value may not exist.  This often relates to a stable system.

*   **Application:** The Final Value Theorem allows us to determine the steady-state value of a signal directly from its Z-transform, avoiding the need for inverse Z-transformation.

*   **Example 1 (Valid):**

    Let `X(z) = z / (z - 0.5)`, ROC |z| > 0.5.  This is a decaying exponential.

    `(z - 1)X(z) = (z - 1) * (z / (z - 0.5)) = z(z - 1) / (z - 0.5)`

    The pole of `(z-1)X(z)` is at z = 0.5, which lies inside the unit circle.  The condition is met.

    `x[∞] = lim (z→1) (z - 1)X(z) = lim (z→1) z(z - 1) / (z - 0.5) = 1(1 - 1) / (1 - 0.5) = 0 / 0.5 = 0`

    Therefore, `x[∞] = 0`.

*   **Example 2 (Invalid):**

    Let `X(z) = z / (z - 1)`, ROC |z| > 1.  This is the Z-transform of the unit step function, u[n].

    `(z - 1)X(z) = (z - 1) * (z / (z - 1)) = z`

    `(z-1)X(z)` has no poles. However, the *original* X(z) has a pole at z = 1, which is *on* the unit circle. This means that the final value theorem does not hold, and we cannot apply the final value theorem.
    Intuitively, u[n] approaches 1, so x[∞] = 1.

    If we incorrectly apply the Final Value Theorem:

    `x[∞] = lim (z→1) (z - 1)X(z) = lim (z→1) z = 1`. While it gives the correct result, the condition was not met.

*   **Example 3 (Invalid):**

    Let `X(z) = z / (z - 2)`, ROC |z| > 2.  This represents an unstable system (growing exponential).

    `(z - 1)X(z) = (z - 1) * (z / (z - 2)) = z(z - 1) / (z - 2)`

    The pole of `(z - 1)X(z)` is at z = 2, which lies *outside* the unit circle.  The condition is NOT met.  The final value theorem cannot be used.

    Intuitively, the sequence grows unbounded, so x[∞] is undefined.  Applying the Final Value Theorem would give a finite number, which is incorrect.

### 4. Important Points to Remember

*   The **Initial Value Theorem** is generally simpler to apply as it doesn't involve checking for pole locations.
*   The **Final Value Theorem** has crucial conditions that *must* be verified before applying it.  Failing to do so can lead to incorrect results.
*   The ROC of X(z) is critical in determining the validity of the Final Value Theorem.  The *poles* of `(z-1)X(z)` are what matter.
*   If the conditions for the Final Value Theorem are not met, it implies that the signal does not settle to a finite value as n approaches infinity. It could oscillate, grow unboundedly, or exhibit other behaviors.
*   These theorems provide a shortcut to finding x[0] and x[∞] without computing the inverse Z-transform.

### 5. Practice Questions/Exercises

**Question 1:**

Find the initial value of the signal with Z-transform:

`X(z) = (3z² + 2z + 1) / (z² - z + 0.5)`, ROC |z| > √0.5

**Answer:**

`x[0] = lim (z→∞) X(z) = lim (z→∞) (3z² + 2z + 1) / (z² - z + 0.5) = lim (z→∞) (3 + 2/z + 1/z²) / (1 - 1/z + 0.5/z²) = 3`

Therefore, `x[0] = 3`.

**Question 2:**

Find the final value of the signal with Z-transform:

`X(z) = (0.5z) / (z² - 1.5z + 0.5)`, ROC |z| > 1.  Note that `z² - 1.5z + 0.5 = (z-1)(z-0.5)`

**Answer:**

First, check the poles of `(z - 1)X(z)`.

`(z - 1)X(z) = (z - 1) * (0.5z) / ((z - 1)(z - 0.5)) = (0.5z) / (z - 0.5)`

The pole of `(z-1)X(z)` is at z = 0.5, which lies *inside* the unit circle.  The condition is met.

`x[∞] = lim (z→1) (z - 1)X(z) = lim (z→1) (0.5z) / (z - 0.5) = (0.5 * 1) / (1 - 0.5) = 0.5 / 0.5 = 1`

Therefore, `x[∞] = 1`.

**Question 3:**

Find the final value of the signal with Z-transform:

`X(z) = z / (z² - 2z + 1)`, ROC |z| > 1.

**Answer:**

`X(z) = z / (z-1)²`

`(z-1)X(z) = (z-1) * z / (z-1)² = z / (z-1)`

The pole of `(z-1)X(z)` is at z=1 which lies *on* the unit circle. Therefore, the final value theorem *cannot* be applied.  The system is marginally stable. Also, not that the pole order of X(z) at z=1 is 2.

**Question 4:**

Given `X(z) = (z^2 + 1)/(z^2 - 1.5z + 0.5)` , ROC |z| > 1. Determine the final value of x[n].

**Answer:**

*   First check if the Final Value Theorem can be applied.

    `X(z) = (z^2 + 1)/((z - 1)(z - 0.5))`

    Multiply by (z-1):

    `(z-1)X(z) = (z^2 + 1)/(z - 0.5)`

    The pole of `(z-1)X(z)` is at z = 0.5, which lies strictly inside the unit circle. Therefore, the Final Value Theorem can be used.

    `x[∞] = lim z->1 (z-1)X(z)`

    `x[∞] = lim z->1 (z^2 + 1)/(z - 0.5)`

    `x[∞] = (1^2 + 1)/(1 - 0.5) = 2 / 0.5 = 4`

    Therefore, the final value is 4.

---

These notes provide a detailed overview of the Initial and Final Value Theorems of the Z-transform, covering the necessary concepts, examples, and practice problems to master this topic. Remember to always carefully check the conditions before applying the Final Value Theorem to avoid incorrect results.
