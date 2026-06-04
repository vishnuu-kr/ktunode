---
title: "Region of Convergence for the z Transform."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b16a"
status: "completed"
scrapedAt: "2026-05-20T16:15:58.284Z"
---
# Signals and Systems: Module 4 - Z-Transform - Region of Convergence (ROC)

## Introduction

This module focuses on the Region of Convergence (ROC) for the Z-transform, a crucial concept for understanding and utilizing the Z-transform effectively. The ROC defines the range of values of 'z' for which the Z-transform of a signal converges. Knowing the ROC is essential for determining the uniqueness of the inverse Z-transform and the stability of Linear Time-Invariant (LTI) systems.

## Learning Outcomes

Upon completion of this module, you should be able to:

1.  **Define the Region of Convergence (ROC) for the Z-transform.**
2.  **Determine the ROC for various types of signals (finite-duration, right-sided, left-sided, two-sided).**
3.  **Understand the properties of the ROC.**
4.  **Relate the ROC to the stability and causality of LTI systems.**
5.  **Find the Z-transform and ROC for a given sequence.**

## 1. Definition of the Region of Convergence (ROC)

*   The **Region of Convergence (ROC)** is the set of all values of *z* in the complex z-plane for which the Z-transform converges.  In other words, it's the set of *z* values that make the Z-transform sum absolutely summable.

*   Formally, for a discrete-time signal *x[n]*, the Z-transform is defined as:

    ```
    X(z) = Σ x[n] * z^-n  (sum from n = -∞ to ∞)
    ```

*   The ROC is defined as the set of *z* values for which the magnitude of *X(z)* is finite:

    ```
    ROC = { z ∈ ℂ : |X(z)| < ∞ }
    ```

*   **Why is ROC important?** Different signals can have the same Z-transform expression but different ROCs. The ROC is crucial for determining the *unique* inverse Z-transform and, therefore, identifying the original signal *x[n]*. It also helps to understand the stability and causality of LTI systems.

## 2. ROC for Various Types of Signals

The shape and location of the ROC depend on the characteristics of the signal *x[n]*. Let's examine some common signal types:

*   **2.1 Finite-Duration Signals:**

    *   A finite-duration signal is non-zero only over a finite interval: *x[n] = 0* for *n < N1* and *n > N2*.
    *   **ROC:** The ROC for a finite-duration signal is the entire z-plane, *except possibly z = 0 and/or z = ∞*.

    *   **Example:**  Consider the sequence *x[n] = {1, 2, 3, 2, 1}* for *n = 0, 1, 2, 3, 4* and 0 otherwise.

        *   *X(z) = 1 + 2z<sup>-1</sup> + 3z<sup>-2</sup> + 2z<sup>-3</sup> + z<sup>-4</sup>*
        *   Since the Z-transform is a finite polynomial in *z<sup>-1</sup>*, it converges for all *z* except *z = 0* (due to the negative powers).  If the signal also has terms with positive powers of z (e.g. *x[-1] = 1*), then the ROC excludes *z = ∞*.

        *   **ROC:** Entire z-plane except z = 0.

*   **2.2 Right-Sided Signals (Causal Signals):**

    *   A right-sided signal is zero for *n < N1*: *x[n] = 0* for *n < N1*.  A causal signal is a special case where *N1 = 0*.
    *   **ROC:** The ROC is the exterior of a circle centered at the origin in the z-plane: *|z| > r*, where *r* is the radius of convergence. *r* is the magnitude of the pole furthest from the origin.

    *   **Example:** Consider the signal *x[n] = a<sup>n</sup>u[n]*, where *u[n]* is the unit step function.

        *   *X(z) = Σ a<sup>n</sup>z<sup>-n</sup> (sum from n = 0 to ∞) = Σ (a/z)<sup>n</sup> (sum from n = 0 to ∞)*
        *   This is a geometric series which converges if *|(a/z)| < 1*, which implies *|z| > |a|*.

        *   **ROC:** *|z| > |a|* (exterior of a circle with radius |a|).

*   **2.3 Left-Sided Signals (Anti-Causal Signals):**

    *   A left-sided signal is zero for *n > N2*: *x[n] = 0* for *n > N2*.
    *   **ROC:** The ROC is the interior of a circle centered at the origin in the z-plane: *|z| < r*, where *r* is the radius of convergence. *r* is the magnitude of the pole closest to the origin.

    *   **Example:** Consider the signal *x[n] = -a<sup>n</sup>u[-n-1]*.

        *   *X(z) = -Σ a<sup>n</sup>z<sup>-n</sup> (sum from n = -∞ to -1)*
        *   Let m = -n, then *X(z) = -Σ a<sup>-m</sup>z<sup>m</sup> (sum from m = 1 to ∞) = -Σ (z/a)<sup>m</sup> (sum from m = 1 to ∞)*
        *   This converges if *|(z/a)| < 1*, which implies *|z| < |a|*.

        *   **ROC:** *|z| < |a|* (interior of a circle with radius |a|).

*   **2.4 Two-Sided Signals (Non-Causal, Non-Anti-Causal):**

    *   A two-sided signal is non-zero for both positive and negative values of *n*.
    *   **ROC:** The ROC is an annulus (a ring-shaped region) centered at the origin in the z-plane: *r1 < |z| < r2*, where *r1* and *r2* are the radii of the inner and outer circles, respectively.  Poles determine r1 and r2.

    *   **Example:** Consider the signal *x[n] = a<sup>n</sup>u[n] - b<sup>n</sup>u[-n-1]*, where *|a| < |b|*.

        *   *X(z) = Σ a<sup>n</sup>z<sup>-n</sup> (sum from n = 0 to ∞) - Σ b<sup>n</sup>z<sup>-n</sup> (sum from n = -∞ to -1)*
        *   *X(z) = Σ (a/z)<sup>n</sup> (sum from n = 0 to ∞) - Σ (b/z)<sup>n</sup> (sum from n = -∞ to -1)*
        *   *X(z) = Z{a<sup>n</sup>u[n]} + Z{-b<sup>n</sup>u[-n-1]} =  1/(1 - az<sup>-1</sup>) + 1/(1 - bz<sup>-1</sup>)  = z/(z-a) - z/(z-b)*
        *   The ROC of *a<sup>n</sup>u[n]* is *|z| > |a|*, and the ROC of *-b<sup>n</sup>u[-n-1]* is *|z| < |b|*.
        *   For *X(z)* to converge, both individual Z-transforms must converge. Therefore, the ROC is the intersection of the individual ROCs.

        *   **ROC:** *|a| < |z| < |b|* (annulus between radii |a| and |b|).

## 3. Properties of the ROC

*   **Property 1: The ROC is a ring or disk centered at the origin in the z-plane.** (Already discussed in previous sections).

*   **Property 2: The ROC does not contain any poles.**  A pole is a value of z where the Z-transform *X(z)* becomes infinite.  Since the Z-transform must converge within the ROC, it cannot contain poles.

*   **Property 3: If *x[n]* is a finite-duration sequence, the ROC is the entire z-plane, except possibly at *z = 0* and/or *z = ∞*.** (Already discussed in previous sections).

*   **Property 4: If *x[n]* is a right-sided sequence and *|z| = r* is in the ROC, then all values of *z* for which *|z| > r* will also be in the ROC.**  (Already discussed in previous sections).

*   **Property 5: If *x[n]* is a left-sided sequence and *|z| = r* is in the ROC, then all values of *z* for which *|z| < r* will also be in the ROC.** (Already discussed in previous sections).

*   **Property 6: If *X(z)* is rational (a ratio of polynomials in *z* or *z<sup>-1</sup>*), then the ROC is bounded by poles or extends to infinity.** This is a direct consequence of Property 2.

*   **Property 7: If *x[n]* is absolutely summable, i.e., Σ |x[n]| < ∞, then the ROC includes the unit circle *|z| = 1*.**  This is because if *|z| = 1*, then *|z<sup>-n</sup>| = 1* for all *n*, and the Z-transform sum becomes equal to the sum of absolute values of *x[n]*, which is finite.

## 4. ROC, Stability and Causality of LTI Systems

*   **4.1 Stability:**

    *   An LTI system is **stable** if and only if its impulse response *h[n]* is absolutely summable, i.e., Σ |h[n]| < ∞.
    *   In terms of the Z-transform *H(z)* of the impulse response *h[n]*, the system is stable if and only if the ROC of *H(z)* **includes the unit circle (|z| = 1)**.

*   **4.2 Causality:**

    *   An LTI system is **causal** if and only if its impulse response *h[n] = 0* for *n < 0* (i.e., it's a right-sided sequence).
    *   In terms of the Z-transform *H(z)* of the impulse response *h[n]*, the system is causal if and only if the ROC of *H(z)* is the **exterior of a circle, including infinity (|z| > r).**  This means all the poles of *H(z)* must lie *inside* the circle of radius *r*.

*   **Causality and Stability Combined:**

    *   For a causal and stable LTI system, all poles of *H(z)* must lie *inside* the unit circle (*|z| < 1*).

## 5. Finding the Z-Transform and ROC: Examples

Here are some examples demonstrating how to find the Z-transform and its ROC:

*   **Example 1:** *x[n] = (1/2)<sup>n</sup> u[n] + (1/3)<sup>n</sup> u[n]*

    *   *X(z) = Z{(1/2)<sup>n</sup> u[n]} + Z{(1/3)<sup>n</sup> u[n]}*
    *   *X(z) = 1/(1 - (1/2)z<sup>-1</sup>) + 1/(1 - (1/3)z<sup>-1</sup>) =  (2 - (5/6)z<sup>-1</sup>) / ((1 - (1/2)z<sup>-1</sup>)(1 - (1/3)z<sup>-1</sup>))*
    *   *X(z) = (2z^2 - (5/6)z) / ((z - 1/2)(z - 1/3)) = (2z(z - 5/12)) / ((z - 1/2)(z - 1/3))*
    *   Poles are at *z = 1/2* and *z = 1/3*. Both are causal terms.

    *   ROC for (1/2)<sup>n</sup> u[n]: *|z| > 1/2*
    *   ROC for (1/3)<sup>n</sup> u[n]: *|z| > 1/3*

    *   **Overall ROC:  |z| > 1/2** (intersection of the individual ROCs). The ROC is exterior to a circle with radius 1/2.

*   **Example 2:** *x[n] = (1/4)<sup>n</sup> u[n] - (1/2)<sup>n</sup> u[-n-1]*

    *   *X(z) = Z{(1/4)<sup>n</sup> u[n]} - Z{(1/2)<sup>n</sup> u[-n-1]}*
    *   *X(z) = 1/(1 - (1/4)z<sup>-1</sup>) - (-1/(1 - (1/2)z<sup>-1</sup>))  = 1/(1 - (1/4)z<sup>-1</sup>) + 1/(1 - (1/2)z<sup>-1</sup>)*
    *   *X(z) = (2 - (3/4)z<sup>-1</sup>) / ((1 - (1/4)z<sup>-1</sup>)(1 - (1/2)z<sup>-1</sup>))*
    *   *X(z) = (2z^2 - (3/4)z) / ((z - 1/4)(z - 1/2)) = (2z(z-3/8)) / ((z - 1/4)(z - 1/2))*
    *   Poles are at *z = 1/4* and *z = 1/2*.

    *   ROC for (1/4)<sup>n</sup> u[n]: *|z| > 1/4*
    *   ROC for -(1/2)<sup>n</sup> u[-n-1]: *|z| < 1/2*

    *   **Overall ROC: 1/4 < |z| < 1/2** (intersection of individual ROCs). The ROC is an annulus between radii 1/4 and 1/2.

*   **Example 3:** *x[n] = δ[n-2]* (delayed unit impulse)

    *   *X(z) = z<sup>-2</sup>*
    *   Since there are only negative powers of z,  X(z) converges for all *z* except *z=0*.

    *   **ROC: Entire z-plane, except z = 0.**

*   **Example 4:** *x[n] = δ[n+2]* (advanced unit impulse)

    *   *X(z) = z<sup>2</sup>*
    *   Since there are only positive powers of z, X(z) converges for all *z* except *z=∞*.

    *   **ROC: Entire z-plane, except z = ∞.**

## 6. Practice Questions/Exercises

1.  Find the Z-transform and ROC of *x[n] = 2<sup>n</sup>u[-n]*.

    *   **Answer:**  *X(z) = -z/(z-2)*, ROC: *|z| < 2* (left-sided sequence)

2.  Find the Z-transform and ROC of *x[n] = (1/3)<sup>n</sup>u[n] + 3<sup>n</sup>u[-n-1]*.

    *   **Answer:** *X(z) = (1/(1-(1/3)z<sup>-1</sup>)) - (1/(1-3z<sup>-1</sup>)) = (z(8/3)) / ((z-1/3)(z-3))*, ROC: *1/3 < |z| < 3* (two-sided sequence)

3.  An LTI system has a transfer function *H(z) = (z - 0.5) / (z - 0.8)*. Is the system stable if the ROC is *|z| > 0.8*? Is it causal?

    *   **Answer:** Stable: Yes, because the ROC *|z| > 0.8* includes the unit circle (|z|=1). Causal: Yes, because the ROC is the exterior of a circle.

4.  An LTI system has a transfer function *H(z) = (z - 0.5) / (z - 2)*. Is the system stable if the ROC is *|z| > 2*? Is it causal?

    *   **Answer:** Stable: No, because the ROC *|z| > 2* does not include the unit circle (|z|=1). Causal: Yes, because the ROC is the exterior of a circle.

5.  An LTI system has a transfer function *H(z) = (z - 0.5) / (z - 2)*. Is the system stable if the ROC is *|z| < 2*? Is it causal?

    *   **Answer:** Stable: Yes, because the ROC *|z| < 2* includes the unit circle (|z|=1). Causal: No, because the ROC is the interior of a circle.

## 7. Important Points to Remember

*   The ROC is an integral part of the Z-transform and is essential for uniquely determining the original signal.
*   The ROC depends on the type of signal (finite-duration, right-sided, left-sided, two-sided).
*   The ROC is always a ring or disk centered at the origin in the z-plane.
*   The ROC cannot contain any poles.
*   Stability of an LTI system requires the ROC of its transfer function to include the unit circle.
*   Causality of an LTI system requires the ROC of its transfer function to be the exterior of a circle (including infinity).

This module provides a comprehensive overview of the Region of Convergence for the Z-transform. Understanding the ROC is crucial for analyzing and designing discrete-time systems. Make sure to practice with different signals and examples to solidify your understanding.
