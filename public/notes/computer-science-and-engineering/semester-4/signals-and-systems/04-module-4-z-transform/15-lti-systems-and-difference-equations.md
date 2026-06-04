---
title: "LTI systems and difference equations"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b176"
status: "completed"
scrapedAt: "2026-05-20T16:16:07.043Z"
---
## Signals and Systems: Module 4 - Z-Transform: LTI Systems and Difference Equations

These notes cover the topic of LTI (Linear Time-Invariant) systems and difference equations within the context of the Z-transform.

**Learning Outcomes:**

*   Understand the representation of LTI systems using difference equations.
*   Determine the transfer function of an LTI system from its difference equation.
*   Analyze the stability of LTI systems using the Z-transform and the Region of Convergence (ROC).
*   Solve difference equations using the Z-transform.
*   Understand the relationship between the impulse response, transfer function, and frequency response of an LTI system.

**1. Difference Equations and LTI Systems**

*   **Definition:** A difference equation expresses the output of a discrete-time system at a given time *n* as a function of past and present inputs and past outputs. It's the discrete-time equivalent of a differential equation.
*   **General Form:**
    ```
    y[n] = b0*x[n] + b1*x[n-1] + ... + bM*x[n-M] - a1*y[n-1] - a2*y[n-2] - ... - aN*y[n-N]
    ```
    where:
        *   `y[n]` is the output at time *n*
        *   `x[n]` is the input at time *n*
        *   `a1, a2, ..., aN` are the feedback coefficients
        *   `b0, b1, ..., bM` are the feedforward coefficients
*   **LTI Systems and Difference Equations:**  LTI systems can be described by linear constant-coefficient difference equations (LCCDEs).  This is a crucial link.  If a system is described by an LCCDE, it is guaranteed to be LTI.
*   **Causality:**  For a causal system, the output *y[n]* depends only on present and past inputs, *x[n], x[n-1], x[n-2], ...* and past outputs *y[n-1], y[n-2], ...*.
*   **Initial Conditions:** To uniquely determine the output *y[n]* for *n >= 0*, initial conditions *y[-1], y[-2], ..., y[-N]* are needed.  These represent the system's "memory."

**2. The Transfer Function H(z)**

*   **Definition:** The transfer function H(z) of an LTI system is the Z-transform of the impulse response h[n].  It also represents the ratio of the Z-transform of the output Y(z) to the Z-transform of the input X(z) *under zero initial conditions*.
    ```
    H(z) = Y(z) / X(z)  (with zero initial conditions)
    ```
*   **Deriving H(z) from the Difference Equation:**
    1.  Take the Z-transform of both sides of the difference equation.  Use the time-shifting property: `Z{x[n-k]} = z^-k * X(z)`.
    2.  Rearrange the equation to express Y(z) in terms of X(z).
    3.  The transfer function is then: `H(z) = Y(z) / X(z)`.
*   **General Form of H(z):** From the general difference equation:

    ```
    H(z) = (b0 + b1*z^-1 + b2*z^-2 + ... + bM*z^-M) / (1 + a1*z^-1 + a2*z^-2 + ... + aN*z^-N)
    ```
    Multiplying numerator and denominator by z<sup>N</sup> gives:
    ```
    H(z) = (b0*z^N + b1*z^(N-1) + b2*z^(N-2) + ... + bM*z^(N-M)*z^(N-M)) / (z^N + a1*z^(N-1) + a2*z^(N-2) + ... + aN)
    ```
    If N > M: `H(z) = (b0*z^N + b1*z^(N-1) + b2*z^(N-2) + ... + bM*z^(N-M)) / (z^N + a1*z^(N-1) + a2*z^(N-2) + ... + aN)`
    If M > N: `H(z) = (b0*z^M + b1*z^(M-1) + b2*z^(M-2) + ... + bM) / (z^M + a1*z^(M-1) + a2*z^(M-2) + ... + aN*z^(M-N))`
*   **Poles and Zeros:**
    *   **Poles:** The values of *z* for which the denominator of H(z) equals zero. These determine the stability of the system.  Poles are roots of the *characteristic equation*.
    *   **Zeros:** The values of *z* for which the numerator of H(z) equals zero.
*   **Important Point:** Knowing the poles and zeros (and a scaling factor) completely specifies H(z).

**3. Stability of LTI Systems**

*   **Definition of Stability (BIBO):** A system is Bounded-Input Bounded-Output (BIBO) stable if every bounded input produces a bounded output. In other words, if |x[n]| < B for all n, then |y[n]| < C for all n, where B and C are finite constants.
*   **Stability Condition in the Z-Domain:**  An LTI system is BIBO stable if and only if the Region of Convergence (ROC) of its transfer function H(z) includes the unit circle (|z| = 1).
*   **Causality and Stability:** If an LTI system is *causal*, then its ROC is outside the outermost pole.  Therefore, for a causal LTI system to be stable, *all poles of H(z) must lie inside the unit circle* (|z| < 1).
*   **Non-Causal Systems:** Systems can be stable even if some poles are outside the unit circle, *if* the ROC includes the unit circle. This implies a non-causal system.
*   **Example:**
    *   `H(z) = 1 / (1 - 0.5z^-1)`  Pole at z = 0.5 (inside the unit circle). If the system is causal (ROC: |z| > 0.5), it is stable.
    *   `H(z) = 1 / (1 - 2z^-1)`  Pole at z = 2 (outside the unit circle). If the system is causal (ROC: |z| > 2), it is unstable. However, if the ROC is |z| < 2, then the system is anti-causal and *could* be stable (though rarely useful).

**4. Solving Difference Equations using the Z-Transform**

*   **Steps:**
    1.  Take the Z-transform of both sides of the difference equation, including the initial conditions. Use the time-shifting property and the Z-transform properties.
    2.  Solve for Y(z), expressing it as a function of X(z) and the initial conditions.
    3.  Perform partial fraction expansion on Y(z). This allows you to decompose it into simpler terms whose inverse Z-transforms you know.
    4.  Take the inverse Z-transform of each term to obtain the solution y[n].  Remember to consider the ROC for each term to ensure correct inverse transformation.
*   **Zero-Input Response:** The response of the system due only to initial conditions (x[n] = 0).
*   **Zero-State Response:** The response of the system due only to the input signal (all initial conditions are zero).

**5. Impulse Response, Transfer Function, and Frequency Response**

*   **Impulse Response h[n]:** The output of the system when the input is a unit impulse, δ[n].
*   **Transfer Function H(z):** The Z-transform of the impulse response h[n]:  `H(z) = Z{h[n]}`.
*   **Frequency Response H(e<sup>jω</sup>):** Obtained by evaluating the transfer function H(z) on the unit circle (z = e<sup>jω</sup>): `H(e<sup>jω</sup>) = H(z)|z=e<sup>jω</sup>`. The magnitude |H(e<sup>jω</sup>)| represents the gain of the system at frequency ω, and the phase angle ∠H(e<sup>jω</sup>) represents the phase shift.
*   **Relationship:**
    *   `h[n] <-> H(z) <-> H(e<sup>jω</sup>)` (under the unit circle ROC condition)
    *   Knowing h[n] allows you to determine H(z) and H(e<sup>jω</sup>).
    *   Knowing H(z) allows you to determine h[n] (via inverse Z-transform) and H(e<sup>jω</sup>).

**6. Example Problems and Solutions**

**Example 1: Finding the Transfer Function**

Given the difference equation: `y[n] - 0.5y[n-1] = x[n] + 0.25x[n-1]`

1.  **Z-transform:**  `Y(z) - 0.5z^-1Y(z) = X(z) + 0.25z^-1X(z)`
2.  **Rearrange:** `Y(z)(1 - 0.5z^-1) = X(z)(1 + 0.25z^-1)`
3.  **Transfer Function:** `H(z) = Y(z) / X(z) = (1 + 0.25z^-1) / (1 - 0.5z^-1)`  or `H(z) = (z + 0.25) / (z - 0.5)`

**Example 2: Stability Analysis**

For the system in Example 1, is it stable if it is causal?

*   The pole is at z = 0.5.  Since |0.5| < 1, the pole is inside the unit circle.
*   If the system is causal, the ROC is |z| > 0.5, which includes the unit circle.
*   Therefore, the system is stable.

**Example 3: Solving a Difference Equation**

Solve the difference equation: `y[n] - 0.7y[n-1] = x[n]` for x[n] = u[n] (unit step) and initial condition y[-1] = 1.

1.  **Z-transform:**  `Y(z) - 0.7[z^-1Y(z) + y[-1]] = X(z)`   Since X(z) = z/(z-1)
    `Y(z) - 0.7z^-1Y(z) - 0.7 = z/(z-1)`
2.  **Solve for Y(z):**
    `Y(z)(1 - 0.7z^-1) = z/(z-1) + 0.7`
    `Y(z) = [z/(z-1) + 0.7] / (1 - 0.7z^-1)`
    `Y(z) = [z + 0.7(z-1)] / [(z-1)(z - 0.7)] = (1.7z - 0.7) / [(z-1)(z - 0.7)]`

3.  **Partial Fraction Expansion:** `Y(z)/z = (1.7 - 0.7/z) / [(z-1)(z - 0.7)/z] = (1.7 - 0.7/z) / [(z-1)(1 - 0.7/z)] = A/(z-1) + B/(z-0.7)`
    `1.7z - 0.7 = A(z - 0.7) + B(z - 1)`
    Setting z = 1: `1 = A(0.3)`  => A = 10/3
    Setting z = 0.7: `1.19 - 0.7 = B(-0.3)` => B = -4.9/3 /-0.3 = -49/9 = -1.63333333
    `Y(z) = (10/3) * z/(z-1) - (49/9) * z/(z-0.7)`

4.  **Inverse Z-transform:** Assuming causality (ROC: |z| > 1 and |z| > 0.7):
    `y[n] = (10/3)u[n] - (49/9)(0.7)^n u[n]`

**7. Practice Questions/Exercises**

1.  **Given the difference equation `y[n] + 0.6y[n-1] - 0.16y[n-2] = x[n] + x[n-1]`. Find the transfer function H(z).**
    *   **Answer:**  `H(z) = (z^2 + z) / (z^2 + 0.6z - 0.16)`

2.  **For the system in question 1, determine the poles.  Is the system stable if it is causal?**
    *   **Answer:** Poles at z = 0.2 and z = -0.8.  Since both poles lie inside the unit circle and the system is causal, the ROC is |z| > 0.8, which includes the unit circle. Therefore, the system is stable.

3.  **Determine the impulse response h[n] for a system with the transfer function `H(z) = z / (z - 0.8)` if the system is causal.**
    *   **Answer:**  h[n] = (0.8)^n u[n]

4. **Find the transfer function of a system described by the difference equation:**
   **`y[n] - (3/4)y[n-1] + (1/8)y[n-2] = x[n] + (1/2)x[n-1]`**

    * **Answer:** H(z) = (1 + (1/2)z<sup>-1</sup>) / (1 - (3/4)z<sup>-1</sup> + (1/8)z<sup>-2</sup>)  or H(z) = (z<sup>2</sup> + (1/2)z) / (z<sup>2</sup> - (3/4)z + (1/8))

**8. Important Points to Remember**

*   Difference equations are the discrete-time equivalent of differential equations.
*   LTI systems can be completely described by LCCDEs.
*   The transfer function H(z) is a powerful tool for analyzing LTI systems.
*   The location of the poles of H(z) and the ROC determine the stability of the system.  For causal systems, poles *must* be inside the unit circle for stability.
*   The Z-transform is useful for solving difference equations, especially with initial conditions.
*   The impulse response, transfer function, and frequency response are all related and provide different perspectives on the system's behavior.

These notes provide a comprehensive overview of LTI systems and difference equations in the context of the Z-transform.  Practice the examples and exercises to solidify your understanding. Good luck!
