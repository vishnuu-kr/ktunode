---
title: "Relationship Between z Transform and Discrete-Time Fourier Transform"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b169"
status: "completed"
scrapedAt: "2026-05-20T16:15:57.575Z"
---
## Signals and Systems: Module 4 - Z Transform

### Topic: Relationship Between Z Transform and Discrete-Time Fourier Transform (DTFT)

**Learning Outcomes:**

*   Understand the connection between the z-transform and the DTFT.
*   Determine the DTFT from the z-transform.
*   Identify the Region of Convergence (ROC) and its significance in relating the z-transform and DTFT.
*   Understand the conditions under which the DTFT exists based on the ROC.
*   Apply the relationship to analyze the frequency response of discrete-time systems.

**1. Key Concepts and Definitions**

*   **Z-Transform:** A transformation that converts a discrete-time signal,  `x[n]`, into a complex-frequency representation, `X(z)`.  It is defined as:

    `X(z) = ∑_(n=-∞)^∞ x[n]z^(-n)`

    where `z` is a complex variable, `z = re^(jω)` (r is magnitude and ω is frequency).

*   **Discrete-Time Fourier Transform (DTFT):** A transformation that converts a discrete-time signal, `x[n]`, into its frequency domain representation, `X(e^(jω))`.  It is defined as:

    `X(e^(jω)) = ∑_(n=-∞)^∞ x[n]e^(-jωn)`

    where `ω` is the normalized frequency (radians/sample).

*   **Region of Convergence (ROC):**  The set of values of `z` for which the z-transform `X(z)` converges (i.e., the summation is finite). The ROC is crucial for uniqueness and stability.

*   **Unit Circle:** The circle in the complex z-plane with radius 1, defined by `|z| = 1`. It's represented by `z = e^(jω)`.

**2. The Relationship Between Z Transform and DTFT**

The DTFT is a special case of the Z-transform.  Specifically:

*   If the Region of Convergence (ROC) of the Z-transform `X(z)` includes the unit circle (`|z| = 1`), then the DTFT `X(e^(jω))` exists.
*   The DTFT can be obtained by evaluating the Z-transform on the unit circle:

    `X(e^(jω)) = X(z)|_(z=e^(jω)`

    In other words, substitute `z = e^(jω)` into the Z-transform expression.

*   **Visualizing the Relationship:** The DTFT effectively samples the z-transform around the unit circle.

**3. Significance of the ROC**

*   The ROC determines if the DTFT exists.  If the unit circle lies within the ROC, the DTFT exists and can be obtained directly from the Z-transform.
*   If the unit circle is *not* in the ROC, then the DTFT does *not* exist.  This means the signal's frequency content is not absolutely summable.
*   The ROC is crucial for defining a unique inverse Z-transform. The same algebraic expression for `X(z)` can have different inverse transforms depending on the ROC.
*   **Causality and Stability:**
    *   A system is causal if its impulse response `h[n]` is zero for `n < 0`. For a causal system, the ROC is outside a circle (i.e., |z| > R for some R).
    *   A system is stable if its impulse response `h[n]` is absolutely summable (i.e., `∑_(n=-∞)^∞ |h[n]| < ∞`).  A system is stable if and only if the ROC of its Z-transform includes the unit circle.
    *   **Important:**  For a *causal* and *stable* system, the ROC must be outside a circle *and* include the unit circle. Therefore, all poles must lie inside the unit circle.

**4. Determining the DTFT from the Z-Transform**

*   **Step 1:**  Find the Z-transform `X(z)` of the discrete-time signal `x[n]`.
*   **Step 2:** Determine the ROC of `X(z)`.
*   **Step 3:** Check if the unit circle (`|z| = 1`) is within the ROC.
    *   **If Yes:** Substitute `z = e^(jω)` into `X(z)` to obtain the DTFT: `X(e^(jω)) = X(z)|_(z=e^(jω)`.
    *   **If No:** The DTFT does not exist.

**5. Examples**

**Example 1: Finite Duration Sequence**

Let  `x[n] = {1, 2, 1}` for `n = 0, 1, 2`, and `0` otherwise.

*   **Z-Transform:** `X(z) = 1 + 2z^(-1) + z^(-2)`
*   **ROC:** Since `x[n]` is finite duration, the ROC is the entire z-plane, except possibly at `z=0` or `z=∞` (in this case, it's all z).
*   **DTFT:**  Since the ROC includes the unit circle, the DTFT exists:
    `X(e^(jω)) = 1 + 2e^(-jω) + e^(-j2ω)`

**Example 2: Unit Step Function**

Let `x[n] = u[n]` (the unit step function).

*   **Z-Transform:** `X(z) = 1 / (1 - z^(-1))  = z / (z - 1)`
*   **ROC:** `|z| > 1` (The ROC is outside the circle with radius 1)
*   **DTFT:** Since the ROC `|z| > 1` includes the unit circle `|z| = 1`, the DTFT exists:
    `X(e^(jω)) = 1 / (1 - e^(-jω))`

**Example 3:  x[n] = a^n u[n], where |a| > 1**

Let `x[n] = a^n u[n]`, where `|a| > 1`.

*   **Z-Transform:** `X(z) = 1 / (1 - az^(-1)) = z / (z - a)`
*   **ROC:** `|z| > |a|`
*   **DTFT:** Since `|a| > 1`, the ROC `|z| > |a|` *does not* include the unit circle `|z| = 1`. Therefore, the DTFT does not exist. This indicates that the signal's frequency content diverges.

**Example 4: System Stability**

A system has a transfer function `H(z) = (z - 0.5) / (z^2 - 0.25)`. Determine if the system is stable.

*   **Poles:**  Factor the denominator: `z^2 - 0.25 = (z - 0.5)(z + 0.5)`.  The poles are at `z = 0.5` and `z = -0.5`.
*   **ROC:**  Since the system is causal (assuming it's causal unless stated otherwise), the ROC is outside the outermost pole, i.e., `|z| > 0.5`.
*   **Stability:** Since the poles are inside the unit circle (`|0.5| < 1` and `|-0.5| < 1`) and the ROC includes the unit circle, the system is stable.

**6. Applying the Relationship to Analyze Frequency Response**

*   **Frequency Response:** The DTFT, `H(e^(jω))`, of the impulse response `h[n]` represents the system's frequency response.  It describes how the system responds to different frequencies.
*   **Magnitude and Phase Response:**  The frequency response is a complex function and can be expressed in terms of magnitude and phase:

    `H(e^(jω)) = |H(e^(jω))| * e^(j∠H(e^(jω)))`

    where:
        *   `|H(e^(jω))|` is the magnitude response, which indicates the gain at each frequency `ω`.
        *   `∠H(e^(jω))` is the phase response, which indicates the phase shift introduced by the system at each frequency `ω`.
*   **System Analysis:** By analyzing the magnitude and phase response, we can understand how the system filters different frequency components of the input signal.

**7. Important Points to Remember**

*   The DTFT is the Z-transform evaluated on the unit circle *only if* the ROC includes the unit circle.
*   The ROC is crucial for determining if the DTFT exists and for uniquely defining the inverse Z-transform.
*   For a system to be stable, the ROC of its Z-transform must include the unit circle.  For a causal and stable system, all poles must lie inside the unit circle.
*   The DTFT (or frequency response) helps analyze how a system modifies different frequency components of a signal.

**8. Practice Questions/Exercises**

**Question 1:**

Find the DTFT of `x[n] = (1/2)^n u[n]`.

**Answer:**

1.  **Z-Transform:** `X(z) = 1 / (1 - (1/2)z^(-1)) = z / (z - 1/2)`
2.  **ROC:** `|z| > 1/2`
3.  **DTFT:** Since the ROC `|z| > 1/2` includes the unit circle `|z| = 1`, the DTFT exists:
    `X(e^(jω)) = 1 / (1 - (1/2)e^(-jω))`

**Question 2:**

A system has a transfer function `H(z) = (z + 1) / (z - 2)`. Is this system stable?

**Answer:**

1.  **Pole:** The system has a pole at `z = 2`.
2.  **ROC:** Assuming causality, the ROC is `|z| > 2`.
3.  **Stability:** The ROC `|z| > 2` does *not* include the unit circle `|z| = 1`. Therefore, the system is *not* stable.  Alternatively, the pole lies outside the unit circle, thus unstable.

**Question 3:**

For what values of 'a' does the DTFT of `x[n] = a^n u[n]` exist?

**Answer:**

The Z-transform is `X(z) = 1 / (1 - az^(-1))` with ROC `|z| > |a|`.  For the DTFT to exist, the unit circle `|z| = 1` must be in the ROC.  Therefore, `|1| > |a|` which implies `|a| < 1`.

**Question 4:**

If `x[n]` is a finite length sequence that is non-zero only for `0 <= n <= N-1`, what is the ROC of its Z-transform?  Does its DTFT always exist?

**Answer:**

The Z-transform of a finite length sequence is a polynomial in `z^-1`. The ROC is the entire z-plane except possibly z=0 and z=infinity. This ROC always includes the unit circle. Therefore, the DTFT always exists.

This comprehensive guide covers the relationship between the Z-transform and the DTFT, emphasizing key concepts, definitions, and practical applications. Remember to practice with more examples to solidify your understanding.
