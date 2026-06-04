---
title: "Properties of z transform - Translation (Time Shifting)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b16b"
status: "completed"
scrapedAt: "2026-05-20T16:15:58.990Z"
---
## Signals and Systems: Module 4 - Z Transform - Properties: Translation (Time Shifting)

**Subject:** Signals and Systems
**Module:** Module 4: Z Transform
**Topic:** Properties of Z Transform - Translation (Time Shifting)

**Learning Outcomes:**

*   Understand the Time Shifting (Translation) property of the Z-transform.
*   Apply the Time Shifting property to find the Z-transform of shifted sequences.
*   Analyze the Region of Convergence (ROC) implications of the Time Shifting property.
*   Solve problems involving the Time Shifting property in conjunction with other Z-transform properties.

---

### 1. Introduction to the Time Shifting (Translation) Property

The Time Shifting property, also known as the Translation property, describes how a shift in the time domain affects the Z-transform of a sequence. It is a fundamental property that simplifies the analysis of delayed or advanced sequences.

**Key Idea:** Shifting a sequence in time corresponds to multiplication by a power of *z* in the Z-domain.

### 2. Definition of the Time Shifting Property

If  `x[n]`  has a Z-transform  `X(z)`  with Region of Convergence (ROC)  `R`, then the Z-transform of  `x[n - k]`  (a sequence shifted by *k* units) is given by:

*   **For Right Shift (Delay):** `Z{x[n - k]} = z⁻ᵏ X(z)`, ROC:  `R`  (except possibly at z = 0, if *k* > 0)

*   **For Left Shift (Advance):** `Z{x[n + k]} = zᵏ X(z)`, ROC: `R` (except possibly at z = ∞, if *k* > 0)

**Explanation:**

*   `x[n - k]` represents a sequence *x[n]* delayed by *k* samples (shifted to the right).
*   `x[n + k]` represents a sequence *x[n]* advanced by *k* samples (shifted to the left).
*   `z⁻ᵏ` represents a multiplication by *z* raised to the power of *-k* in the Z-domain, corresponding to a delay of *k* samples.
*   `zᵏ` represents a multiplication by *z* raised to the power of *k* in the Z-domain, corresponding to an advance of *k* samples.
*   The ROC generally remains the same but may change at z = 0 or z = ∞ depending on the value of *k*.

### 3. Proof of the Time Shifting Property (Right Shift)

Let `y[n] = x[n - k]`. The Z-transform of `y[n]` is:

`Y(z) = Σ y[n] z⁻ⁿ  (summation from n = -∞ to ∞)`

`Y(z) = Σ x[n - k] z⁻ⁿ  (summation from n = -∞ to ∞)`

Let `m = n - k`, so `n = m + k`.

`Y(z) = Σ x[m] z⁻⁽ᵐ⁺ᵏ⁾  (summation from m = -∞ to ∞)`

`Y(z) = Σ x[m] z⁻ᵐ z⁻ᵏ  (summation from m = -∞ to ∞)`

`Y(z) = z⁻ᵏ Σ x[m] z⁻ᵐ  (summation from m = -∞ to ∞)`

`Y(z) = z⁻ᵏ X(z)`

Therefore, `Z{x[n - k]} = z⁻ᵏ X(z)`.

### 4. Implications of the ROC

The Region of Convergence (ROC) is crucial for determining the uniqueness of the inverse Z-transform. The time shifting property generally preserves the ROC, *except* possibly at `z = 0` and `z = ∞`.

*   **Right Shift (Delay):** `Z{x[n - k]} = z⁻ᵏ X(z)`

    *   If *k* > 0, the term `z⁻ᵏ` introduces *k* poles at `z = 0`. The ROC may exclude `z = 0`. If the original ROC included `z=0`, the shifted sequence ROC will NOT include `z=0`.

*   **Left Shift (Advance):** `Z{x[n + k]} = zᵏ X(z)`

    *   If *k* > 0, the term `zᵏ` introduces *k* poles at `z = ∞`.  The ROC may exclude `z = ∞`.  If the original ROC included `z=infinity`, the shifted sequence ROC will NOT include `z=infinity`.

### 5. Examples

**Example 1: Right Shift (Delay)**

Let `x[n] = u[n]` (unit step sequence). The Z-transform of `x[n]` is:

`X(z) = z / (z - 1),  |z| > 1`

Now, consider `y[n] = x[n - 2] = u[n - 2]`.  Applying the time shifting property:

`Y(z) = Z{u[n - 2]} = z⁻² X(z) = z⁻² * (z / (z - 1)) = 1 / (z(z - 1))`

The ROC is `|z| > 1`.  Note that z=0 is a pole now that was not there originally.  Since our original ROC did include zero it now does not.

**Example 2: Left Shift (Advance)**

Let `x[n] = aⁿ u[n]`, where `|a| < 1`. The Z-transform of `x[n]` is:

`X(z) = z / (z - a),  |z| > |a|`

Now, consider `y[n] = x[n + 1] = aⁿ⁺¹ u[n + 1]`. Applying the time shifting property:

`Y(z) = Z{aⁿ⁺¹ u[n + 1]} = z¹ X(z) = z * (z / (z - a)) = z² / (z - a)`

The ROC is `|z| > |a|`. Note that z=infinity is a pole now that was not there originally.  Since our original ROC did include infinity it now does not.

**Example 3: Combining Shifts and Other Properties**

Let `x[n]` have Z-transform `X(z) = 1 / (1 - 0.5z⁻¹)` for `|z| > 0.5`. Find the Z-transform of `y[n] = 2x[n - 1] + x[n + 1]`.

`Y(z) = Z{2x[n - 1] + x[n + 1]}`

`Y(z) = 2Z{x[n - 1]} + Z{x[n + 1]}` (Linearity Property)

`Y(z) = 2z⁻¹X(z) + z¹X(z)` (Time Shifting Property)

`Y(z) = 2z⁻¹(1 / (1 - 0.5z⁻¹)) + z(1 / (1 - 0.5z⁻¹))`

`Y(z) = (2z⁻¹ + z) / (1 - 0.5z⁻¹)`

`Y(z) = (2 + z²) / (z - 0.5)`

The ROC is `|z| > 0.5`.

### 6. Important Points to Remember

*   The Time Shifting property is a powerful tool for analyzing delayed and advanced sequences.
*   Always consider the ROC and how it might be affected by the shift, especially at `z = 0` and `z = ∞`.
*   The Time Shifting property can be combined with other Z-transform properties (Linearity, Scaling, etc.) to solve complex problems.
*   Pay close attention to whether the sequence is delayed (right shift) or advanced (left shift) to apply the correct formula.

### 7. Practice Questions

**Question 1:**

Find the Z-transform of `x[n] = δ[n - 3]`, where `δ[n]` is the unit impulse sequence. What is the ROC?

**Answer:**

*   The Z-transform of `δ[n]` is `1` for all `z`.
*   Applying the Time Shifting property, `Z{δ[n - 3]} = z⁻³ * 1 = z⁻³`.
*   The ROC is all `z` except `z = 0` (since we have a pole at z=0).

**Question 2:**

If `x[n]` has Z-transform `X(z) = (z + 1) / (z - 0.8)` with ROC `|z| > 0.8`, find the Z-transform and ROC of `y[n] = x[n + 2]`.

**Answer:**

*   `Y(z) = Z{x[n + 2]} = z² X(z) = z² * (z + 1) / (z - 0.8) = z²(z+1)/(z-0.8)`
*   The ROC is `|z| > 0.8`.

**Question 3:**

Find the Z-transform of `x[n] = (0.5)ⁿ u[n-2]` and specify the ROC.

**Answer:**

1.  We know `Z{(0.5)ⁿ u[n]} = z/(z - 0.5)` with ROC `|z| > 0.5`.
2.  Using the time-shifting property, `Z{(0.5)ⁿ u[n-2]} = z⁻² [z/(z-0.5)] = 1/(z(z-0.5))`.
3.  The ROC is `|z| > 0.5`.  Additionally, ROC must exclude the pole introduced at `z=0`.

**Question 4:**

Given `x[n]` with Z-transform `X(z)`, find the Z-transform of `y[n] = x[n-1] - 2x[n+1]` in terms of `X(z)`.

**Answer:**

`Y(z) = Z{x[n-1] - 2x[n+1]} = Z{x[n-1]} - 2Z{x[n+1]}`

`Y(z) = z⁻¹X(z) - 2zX(z)`

`Y(z) = (z⁻¹ - 2z)X(z)`

---

This comprehensive set of notes covers the Time Shifting (Translation) property of the Z-transform, including its definition, proof, ROC implications, examples, important points to remember, and practice questions to solidify understanding. Remember to practice more problems to gain proficiency with the Time Shifting property and its applications.
