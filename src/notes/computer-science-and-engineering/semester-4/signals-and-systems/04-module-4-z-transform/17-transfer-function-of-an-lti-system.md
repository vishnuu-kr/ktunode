---
title: "Transfer function of an LTI system."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b178"
status: "completed"
scrapedAt: "2026-05-20T16:16:08.473Z"
---
## SIGNALS AND SYSTEMS - MODULE 4: Z-TRANSFORM - TRANSFER FUNCTION OF AN LTI SYSTEM

**Subject:** Signals and Systems
**Module:** Z-Transform
**Topic:** Transfer Function of an LTI System
**Description:** Analysis of LTI systems using the Z-Transform, focusing on the transfer function.

**Learning Outcomes:**

*   Understand the concept of the transfer function H(z) of an LTI system.
*   Determine the transfer function H(z) from the difference equation describing the system.
*   Find the impulse response h[n] given the transfer function H(z).
*   Analyze system stability based on the location of poles of H(z) (Region of Convergence - ROC).
*   Determine the output of an LTI system in the z-domain given the input and transfer function.
*   Apply the Z-transform to analyze cascade and parallel interconnections of LTI systems.

---

**1. Introduction to the Transfer Function H(z)**

*   **Definition:** The transfer function H(z) of an LTI (Linear Time-Invariant) system is the Z-transform of its impulse response h[n]. Mathematically:

    `H(z) = Z{h[n]} = Σ h[n] * z^(-n)`  (summation from n = -∞ to ∞)

*   **Significance:**  H(z) completely characterizes the input-output behavior of an LTI system in the z-domain. It allows us to easily determine the output of the system given any input.

*   **Input-Output Relationship:** If X(z) is the Z-transform of the input signal x[n] and Y(z) is the Z-transform of the output signal y[n], then:

    `Y(z) = H(z) * X(z)`

    This equation states that the Z-transform of the output is the product of the transfer function and the Z-transform of the input.

**2. Determining H(z) from the Difference Equation**

*   **Difference Equation:** An LTI system is often described by a difference equation of the form:

    `y[n] + a₁y[n-1] + a₂y[n-2] + ... + aₖy[n-k] = b₀x[n] + b₁x[n-1] + b₂x[n-2] + ... + bₗx[n-l]`

*   **Z-Transforming the Difference Equation:**  Apply the Z-transform to both sides of the difference equation, using the time-shifting property: `Z{x[n-k]} = z^(-k)X(z)`.

    `Y(z) + a₁z⁻¹Y(z) + a₂z⁻²Y(z) + ... + aₖz⁻ᵏY(z) = b₀X(z) + b₁z⁻¹X(z) + b₂z⁻²X(z) + ... + bₗz⁻ˡX(z)`

*   **Solving for H(z):** Rearrange the equation to express Y(z) in terms of X(z), and then find H(z) = Y(z) / X(z):

    `H(z) = Y(z) / X(z) = (b₀ + b₁z⁻¹ + b₂z⁻² + ... + bₗz⁻ˡ) / (1 + a₁z⁻¹ + a₂z⁻² + ... + aₖz⁻ᵏ)`

*   **Alternative Form (Positive Powers of z):** Multiplying the numerator and denominator by zᵏ  (assuming k ≥ l) can yield:

    `H(z) = (b₀zᵏ + b₁zᵏ⁻¹ + b₂zᵏ⁻² + ... + bₗzᵏ⁻ˡ) / (zᵏ + a₁zᵏ⁻¹ + a₂zᵏ⁻² + ... + aₖ)`

*   **Poles and Zeros:** The roots of the numerator polynomial are called *zeros* of H(z), and the roots of the denominator polynomial are called *poles* of H(z).  Poles and zeros significantly impact the system's behavior and stability.

**Example:**

Consider the difference equation:  `y[n] - 0.5y[n-1] = x[n] + 0.25x[n-1]`

1.  **Z-transform:** `Y(z) - 0.5z⁻¹Y(z) = X(z) + 0.25z⁻¹X(z)`
2.  **Solve for H(z):**  `H(z) = Y(z) / X(z) = (1 + 0.25z⁻¹) / (1 - 0.5z⁻¹)`
3.  **Alternative Form:** `H(z) = (z + 0.25) / (z - 0.5)`

    *   Zero: z = -0.25
    *   Pole: z = 0.5

**3. Finding the Impulse Response h[n] from H(z)**

*   **Inverse Z-Transform:**  To find the impulse response h[n] from the transfer function H(z), you need to perform the inverse Z-transform:

    `h[n] = Z⁻¹{H(z)}`

*   **Methods for Inverse Z-Transform:**
    *   **Partial Fraction Expansion:**  Express H(z) as a sum of simpler fractions, each of which has a known inverse Z-transform.  This is typically used when H(z) is a rational function (ratio of polynomials).
    *   **Power Series Expansion:** Expand H(z) as a power series in z⁻¹. The coefficients of the power series directly correspond to the values of h[n].
    *   **Using Z-Transform Tables:**  Lookup known transform pairs in a Z-transform table.

**Example (using partial fraction expansion):**

Let `H(z) = z / (z - 0.5)`  and ROC: |z| > 0.5.

1.  `H(z) = 1 / (1 - 0.5z⁻¹)`
2.  Recognize this as the Z-transform of `(0.5)^n u[n]` where u[n] is the unit step function.
3.  Therefore, `h[n] = (0.5)^n u[n]`

**4. Stability Analysis Using the Z-Transform**

*   **Bounded-Input Bounded-Output (BIBO) Stability:** An LTI system is BIBO stable if and only if every bounded input produces a bounded output.

*   **Stability Condition in the Z-Domain:** An LTI system with transfer function H(z) is BIBO stable if and only if the Region of Convergence (ROC) of H(z) includes the unit circle (|z| = 1).

*   **Poles and Stability:**  For a causal LTI system, the ROC is typically outside a circle with radius equal to the magnitude of the largest pole. Therefore, a causal LTI system is stable if and only if all its poles lie *inside* the unit circle (|z| < 1).  If a pole lies on the unit circle, the system is marginally stable; if a pole lies outside the unit circle, the system is unstable.

**Example:**

*   `H(z) = 1 / (1 - 0.5z⁻¹)` has a pole at z = 0.5. Since |0.5| < 1, and assuming the system is causal with ROC |z| > 0.5 (which includes the unit circle), the system is stable.
*   `H(z) = 1 / (1 - 2z⁻¹)` has a pole at z = 2. Since |2| > 1, if the ROC is |z|>2 (causal system), it is *not* stable, as the unit circle is not in the ROC. If the ROC is |z| < 2 (non-causal) then it includes the unit circle and is stable (less common).

**5. Output of an LTI System in the z-Domain**

*   **Convolution in Time Domain, Multiplication in Z-Domain:**  As mentioned earlier, the output Y(z) of an LTI system is simply the product of the transfer function H(z) and the input X(z):

    `Y(z) = H(z) * X(z)`

*   **Finding the Output in the Time Domain:**  To find the output signal y[n] in the time domain, take the inverse Z-transform of Y(z):

    `y[n] = Z⁻¹{Y(z)} = Z⁻¹{H(z) * X(z)}`

**Example:**

Let `H(z) = 1 / (1 - 0.5z⁻¹)` and `x[n] = u[n]` (unit step).

1.  `X(z) = z / (z - 1)`  for |z| > 1.
2.  `Y(z) = H(z) * X(z) = [1 / (1 - 0.5z⁻¹)] * [z / (z - 1)] = z / [(z - 0.5)(z - 1)]`
3.  **Partial Fraction Expansion:** `Y(z)/z = A/(z-0.5) + B/(z-1)` solving gives A = -2 and B = 2.
4. `Y(z) = -2z/(z-0.5) + 2z/(z-1)`
5. `y[n] = -2(0.5)^n u[n] + 2u[n] = 2(1-(0.5)^n)u[n]`

**6. Cascade and Parallel Interconnections of LTI Systems**

*   **Cascade Connection:**  If two LTI systems with transfer functions H₁(z) and H₂(z) are connected in cascade (series), the overall transfer function H(z) is the product of the individual transfer functions:

    `H(z) = H₁(z) * H₂(z)`

*   **Parallel Connection:** If two LTI systems with transfer functions H₁(z) and H₂(z) are connected in parallel, the overall transfer function H(z) is the sum of the individual transfer functions:

    `H(z) = H₁(z) + H₂(z)`

**Example:**

* **Cascade:** Consider a system with H₁(z) = 1/(1-0.25z⁻¹) and H₂(z) = 1/(1-0.5z⁻¹). Then H(z) = H₁(z)H₂(z) = 1/((1-0.25z⁻¹)(1-0.5z⁻¹)).
* **Parallel:**  Consider a system with H₁(z) = 1/(1-0.25z⁻¹) and H₂(z) = 1/(1-0.5z⁻¹). Then H(z) = H₁(z) + H₂(z) = 1/(1-0.25z⁻¹) + 1/(1-0.5z⁻¹) = (2 - 0.75z⁻¹)/((1-0.25z⁻¹)(1-0.5z⁻¹)).

---

**Important Points to Remember:**

*   The transfer function H(z) is a powerful tool for analyzing LTI systems.
*   Poles and zeros of H(z) significantly impact system behavior and stability.
*   The ROC is crucial for determining the impulse response h[n] and system stability.
*   For a causal and stable system, all poles must lie inside the unit circle (|z| < 1).
*   Cascade and parallel interconnections simplify analysis using the transfer function.

---

**Practice Questions/Exercises:**

1.  **Find the transfer function H(z) for the system described by the difference equation:**

    `y[n] - 0.8y[n-1] + 0.15y[n-2] = x[n]`

    **Answer:** `H(z) = 1 / (1 - 0.8z⁻¹ + 0.15z⁻¹) = z² / (z² - 0.8z + 0.15)`

2.  **Determine the stability of a system with the following transfer function and ROC:**

    `H(z) = 1 / (1 - 1.5z⁻¹)` , ROC: |z| > 1.5

    **Answer:** The pole is at z = 1.5. Since |1.5| > 1, the pole lies outside the unit circle. Since the ROC is |z| > 1.5, which does not include the unit circle, the system is unstable.

3.  **A system has a transfer function H(z) = (1 + z⁻¹) / (1 - 0.5z⁻¹).  If the input is x[n] = δ[n] (unit impulse), what is the output y[n]?**

    **Answer:** If x[n] = δ[n], X(z) = 1. Therefore, Y(z) = H(z) * X(z) = H(z) = (1 + z⁻¹) / (1 - 0.5z⁻¹) . We want to find y[n] = Z⁻¹{Y(z)}.
    Write Y(z) = (1 + z⁻¹)/(1-0.5z⁻¹) = A/(1-0.5z⁻¹) + Bz⁻¹. Solving yields A= 3/2, B=1/2. Thus, y[n] = (3/2)(0.5)^n u[n] + (1/2)δ[n-1] .  Alternatively, since this is the impulse response, y[n] = h[n].  Dividing (1 + z⁻¹) by (1 - 0.5z⁻¹) gives 1 + 1.5z⁻¹ + (0.75)z⁻² + ... which has the impulse response: h[0] = 1, h[1] = 1.5, h[2] = 0.75,... Thus, y[n] = 1δ[n] + 1.5δ[n-1] + ... .

4.  **Two systems are connected in cascade.  System 1 has H₁(z) = 1 / (1 - 0.2z⁻¹) and System 2 has H₂(z) = 1 / (1 - 0.8z⁻¹). What is the overall transfer function H(z)?**

    **Answer:** H(z) = H₁(z) * H₂(z) = [1 / (1 - 0.2z⁻¹)] * [1 / (1 - 0.8z⁻¹)] = 1 / [(1 - 0.2z⁻¹)(1 - 0.8z⁻¹)] =  1 / (1 - z⁻¹ + 0.16z⁻²).

5. **Find the poles and zeros of the following transfer function: H(z) = (z-1)(z+0.5) / (z(z-0.75))**

    **Answer:**
    *Zeros:* Find z such that H(z) = 0.  This occurs at z = 1 and z = -0.5.

    *Poles:*  Find z such that the denominator of H(z) is equal to zero.  This occurs at z = 0 and z = 0.75.

    Therefore, the transfer function has zeros at z = 1 and z = -0.5, and poles at z = 0 and z = 0.75.

---
