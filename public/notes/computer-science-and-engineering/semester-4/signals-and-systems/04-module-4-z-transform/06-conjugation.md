---
title: "Conjugation"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b16d"
status: "completed"
scrapedAt: "2026-05-20T16:16:00.406Z"
---
## Signals and Systems: Module 4 - Z-Transform: Conjugation

These notes cover the concept of conjugation in the context of the Z-transform.

**Learning Outcomes:**

*   Understand the conjugation property of the Z-transform.
*   Apply the conjugation property to find the Z-transform of complex conjugate signals.
*   Determine the Region of Convergence (ROC) after applying the conjugation property.
*   Solve problems involving the conjugation property of the Z-transform.

**1. Key Concepts and Definitions:**

*   **Z-Transform:** The Z-transform of a discrete-time signal x[n] is defined as:

    ```
    X(z) = Σ x[n]z⁻ⁿ  , where the summation is from n = -∞ to ∞
    ```

    where 'z' is a complex variable.

*   **Region of Convergence (ROC):** The ROC is the set of values of 'z' for which the Z-transform converges (i.e., the summation converges to a finite value). The ROC is crucial for uniquely determining x[n] from X(z).

*   **Conjugate of a Complex Number:** If z = a + jb, where 'a' and 'b' are real numbers and 'j' is the imaginary unit (√-1), then the conjugate of z, denoted as z*, is z* = a - jb.

*   **Conjugate of a Signal:** If x[n] is a complex-valued signal, its complex conjugate, denoted as x*[n], is obtained by taking the complex conjugate of each sample value of x[n].
    If x[n] = a[n] + jb[n], then x*[n] = a[n] - jb[n], where a[n] and b[n] are real-valued signals.

**2. Conjugation Property of the Z-Transform:**

*   **Statement:** If  X(z) is the Z-transform of x[n] with a Region of Convergence ROC, then the Z-transform of x*[n] (complex conjugate of x[n]) is X*(z*) with the same Region of Convergence ROC.

    Mathematically:

    ```
    If  x[n]  ↔  X(z) , ROC = R
    Then x*[n] ↔ X*(z*), ROC = R
    ```

*   **Proof:**
    Starting from the definition of the Z-transform:

    ```
    Z{x*[n]} = Σ x*[n]z⁻ⁿ ,  summation from n = -∞ to ∞
    ```
    Taking the conjugate of the entire expression:

    ```
    (Z{x*[n]})* = (Σ x*[n]z⁻ⁿ)*, summation from n = -∞ to ∞
    ```
    Since the conjugate of a sum is the sum of the conjugates and the conjugate of a product is the product of the conjugates:

    ```
    (Z{x*[n]})* = Σ (x*[n])*(z⁻ⁿ)*, summation from n = -∞ to ∞
    (Z{x*[n]})* = Σ x[n](z*)-ⁿ, summation from n = -∞ to ∞
    (Z{x*[n]})* = X(z*)
    ```

    Taking the conjugate of both sides:

    ```
     Z{x*[n]} = (X(z*))* = X*(z*)
    ```

    The ROC of X*(z*) remains the same as the ROC of X(z) because convergence depends on the magnitude of 'z', which remains unchanged when taking the conjugate. |z| = |z*|.

**3. Applying the Conjugation Property:**

*   **Step 1:** Determine the Z-transform X(z) of the original signal x[n].
*   **Step 2:** Determine the Region of Convergence (ROC) of X(z).
*   **Step 3:** Replace 'z' with 'z*' in X(z) to obtain X(z*).
*   **Step 4:** Take the complex conjugate of X(z*) to obtain X*(z*).  This is the Z-transform of x*[n].
*   **Step 5:** The ROC of X*(z*) is the same as the ROC of X(z).

**4. Examples:**

**Example 1:**

Let x[n] = (j/2)ⁿ u[n], where u[n] is the unit step function.

*   **Step 1:** Find X(z).  We know that aⁿu[n] ↔ z/(z-a), |z| > |a|.  Therefore,

    ```
    X(z) = z / (z - j/2), |z| > |j/2| = 1/2
    ```

*   **Step 2:**  ROC: |z| > 1/2

*   **Step 3:**  X(z*) = z* / (z* - j/2)

*   **Step 4:**  X*(z*) = (z*)* / (z* - j/2)* = z / (z* + j/2)

*   **Step 5:**  The Z-transform of x*[n] is X*(z*) = z / (z* + j/2) with ROC |z| > 1/2.

Therefore, if x[n] = (j/2)ⁿ u[n], then x*[n] = (-j/2)ⁿ u[n] ↔ z/(z* + j/2), |z| > 1/2.

**Example 2:**

Let x[n] = e^(jω₀n)u[n], where ω₀ is a real constant.

*   **Step 1:** Find X(z).  We know that aⁿu[n] ↔ z/(z-a), |z| > |a|.  Therefore,

    ```
    X(z) = z / (z - e^(jω₀)), |z| > |e^(jω₀)| = 1
    ```

*   **Step 2:** ROC: |z| > 1

*   **Step 3:** X(z*) = z* / (z* - e^(jω₀))

*   **Step 4:** X*(z*) = (z*)* / (z* - e^(jω₀))* = z / (z* - e^(-jω₀))

*   **Step 5:** The Z-transform of x*[n] is X*(z*) = z / (z* - e^(-jω₀)) with ROC |z| > 1.

Therefore, if x[n] = e^(jω₀n)u[n], then x*[n] = e^(-jω₀n)u[n] ↔ z / (z* - e^(-jω₀)), |z| > 1.

**5. Practice Questions/Exercises:**

**Question 1:**

Given that x[n] ↔ X(z) = 1 / (1 - 0.5z⁻¹) with ROC |z| > 0.5, find the Z-transform of x*[n] and its ROC.

**Answer:**

*   X(z*) = 1 / (1 - 0.5(z*)⁻¹)
*   X*(z*) = 1 / (1 - 0.5(z*)⁻¹)* = 1 / (1 - 0.5*(z)⁻¹)
*   ROC remains the same: |z| > 0.5

Therefore, the Z-transform of x*[n] is 1 / (1 - 0.5*(z)⁻¹) with ROC |z| > 0.5.

**Question 2:**

If x[n] = (0.8e^(jπ/4))^n u[n], determine the Z-transform of x*[n] and its ROC.

**Answer:**

*  X(z) = z / (z - 0.8e^(jπ/4)), |z| > 0.8
*  X(z*) = z* / (z* - 0.8e^(jπ/4))
*  X*(z*) = z / (z* - 0.8e^(-jπ/4))
*  ROC remains the same: |z| > 0.8

Therefore, the Z-transform of x*[n] is z / (z* - 0.8e^(-jπ/4)) with ROC |z| > 0.8.

**Question 3:**

Suppose x[n] is a sequence whose Z-transform is X(z) = z/(z-0.5) with |z| > 0.5.  Find the Z-transform and ROC of y[n] = Re{x[n]}.  (Hint: Re{x[n]} = (x[n] + x*[n])/2)

**Answer:**

We know Re{x[n]} = (x[n] + x*[n])/2.  Using linearity and the conjugation property:

Y(z) = (1/2) * [X(z) + X*(z*)]

Y(z) = (1/2) * [z/(z-0.5) + (z/(z*-0.5)) ]

Y(z) = (1/2) * [z(z*-0.5) + z(z-0.5)] / [(z-0.5)(z*-0.5)]

Y(z) = (1/2) * [z*z -0.5z + zz - 0.5z ] / [z*z - 0.5z - 0.5z* + 0.25]

Since z*z = |z|^2  and -0.5z - 0.5z* = -Re{z}, we have:

Y(z) = (|z|^2  - 0.5z +  z^2 - 0.5z) / (2(|z|^2 - Re{z} + 0.25) )

The ROC is the same as the ROC of both X(z) and X*(z*), which is |z| > 0.5

**6. Important Points to Remember:**

*   The conjugation property simplifies finding the Z-transform of complex conjugate signals.
*   The Region of Convergence (ROC) remains unchanged after applying the conjugation property. |z| = |z*| so convergence characteristics are identical.
*   Understanding the complex conjugate operation is crucial for applying the property correctly.
*   The conjugation property can be combined with other Z-transform properties (e.g., linearity) to solve more complex problems.
*   Be careful when dealing with complex variables and conjugates in the context of Z-transforms. Make sure you correctly take conjugates of both the variable 'z' and any complex constants in the expression.
