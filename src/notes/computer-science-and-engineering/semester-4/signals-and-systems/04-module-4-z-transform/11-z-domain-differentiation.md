---
title: "z- Domain Differentiation"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b172"
status: "completed"
scrapedAt: "2026-05-20T16:16:03.968Z"
---
# SIGNALS AND SYSTEMS - Module 4: Z-Transform - z-Domain Differentiation

## Topic: z-Domain Differentiation

**Introduction:**

This section explores a crucial property of the Z-transform known as z-Domain Differentiation. This property allows us to find the Z-transform of sequences multiplied by *n* (or its powers) by differentiating the Z-transform of the original sequence.  This is extremely useful when dealing with sequences like `n*x[n]`, `n^2*x[n]`, etc.

**Learning Outcomes:**

*   Understand the z-Domain Differentiation property.
*   Apply the z-Domain Differentiation property to find the Z-transform of sequences multiplied by *n*.
*   Use the property to find the inverse Z-transform.
*   Determine the Region of Convergence (ROC) after applying z-Domain Differentiation.

**1. Key Concepts and Definitions:**

*   **Z-Transform:** The Z-transform of a discrete-time signal x[n] is defined as:

    X(z) = Σ<sub>n=-∞</sub><sup>∞</sup> x[n]z<sup>-n</sup>

*   **Region of Convergence (ROC):** The range of values of z for which the Z-transform converges (i.e., the summation is finite).  The ROC is crucial for uniquely determining the sequence x[n] from its Z-transform X(z).

*   **z-Domain Differentiation Property:**

    If  X(z) is the Z-transform of x[n], then the Z-transform of  `n*x[n]` is given by:

    Z{n*x[n]} = -z * d/dz [X(z)]

    More generally:

    Z{n<sup>k</sup>x[n]} = (-z d/dz)<sup>k</sup> X(z)

    This means we apply the operator `(-z d/dz)` *k* times. For example:

    Z{n<sup>2</sup>x[n]} = (-z d/dz) (-z d/dz) X(z) =  (-z d/dz) [ -z * d/dz(X(z)) ]
*   **Important Note about the ROC:** z-Domain differentiation *generally* does not change the ROC of the Z-transform. However, poles at z=0 or z=∞ may be added or removed. Therefore, it's crucial to re-examine the ROC after differentiation, especially if the original ROC included or excluded z=0 or z=∞.

**2. Derivation of the z-Domain Differentiation Property:**

Starting with the definition of the Z-transform:

X(z) = Σ<sub>n=-∞</sub><sup>∞</sup> x[n]z<sup>-n</sup>

Differentiate both sides with respect to *z*:

d/dz [X(z)] = d/dz [Σ<sub>n=-∞</sub><sup>∞</sup> x[n]z<sup>-n</sup>]

Assuming we can interchange the derivative and the summation (which is usually valid within the ROC):

d/dz [X(z)] = Σ<sub>n=-∞</sub><sup>∞</sup> x[n] d/dz [z<sup>-n</sup>]

d/dz [X(z)] = Σ<sub>n=-∞</sub><sup>∞</sup> x[n] (-n)z<sup>-n-1</sup>

d/dz [X(z)] =  Σ<sub>n=-∞</sub><sup>∞</sup> (-n) x[n] z<sup>-n-1</sup>

Multiply both sides by -z:

-z * d/dz [X(z)] = Σ<sub>n=-∞</sub><sup>∞</sup> n x[n] z<sup>-n</sup>

The right-hand side is precisely the Z-transform of n*x[n]:

-z * d/dz [X(z)] = Z{n*x[n]}

**3. Applications and Examples:**

**Example 1:  Find the Z-transform of `n*a^n*u[n]`**

*   **Step 1: Find the Z-transform of `x[n] = a^n*u[n]`**

    X(z) = Z{a<sup>n</sup>u[n]} =  z / (z - a),   ROC: |z| > |a|

*   **Step 2: Apply z-Domain Differentiation:**

    Z{n*a<sup>n</sup>u[n]} = -z * d/dz [X(z)] = -z * d/dz [z / (z - a)]

*   **Step 3: Differentiate:**

    d/dz [z / (z - a)] = [(z-a)(1) - z(1)] / (z-a)<sup>2</sup> = -a / (z - a)<sup>2</sup>

*   **Step 4: Multiply by -z:**

    Z{n*a<sup>n</sup>u[n]} = -z * [-a / (z - a)<sup>2</sup>] = az / (z - a)<sup>2</sup>

*   **Step 5: Determine the ROC:**

    The ROC remains essentially the same as the original, except we should explicitly check z=a.  Since  az/(z-a)^2 is defined for |z|>|a|, the ROC is |z| > |a|.

**Example 2: Find the Z-transform of `n^2*u[n]`**

*   **Step 1: Find the Z-transform of `x[n] = u[n]`**

    X(z) = Z{u[n]} = z / (z - 1),   ROC: |z| > 1

*   **Step 2: Apply z-Domain Differentiation to find Z{n*u[n]}**

    Z{n*u[n]} = -z * d/dz [z / (z - 1)] = -z * [(z-1)(1) - z(1)] / (z-1)<sup>2</sup> = z / (z - 1)<sup>2</sup>,  ROC: |z| > 1

*   **Step 3: Apply z-Domain Differentiation again to find Z{n^2*u[n]} = Z{n * (n*u[n])}**

    Z{n<sup>2</sup>u[n]} = -z * d/dz [z / (z - 1)<sup>2</sup>]

*   **Step 4: Differentiate:**

    d/dz [z / (z - 1)<sup>2</sup>] = [(z-1)<sup>2</sup>(1) - z(2(z-1))] / (z-1)<sup>4</sup> = [(z-1)<sup>2</sup> - 2z(z-1)] / (z-1)<sup>4</sup>  =  (z-1)(z-1 - 2z) / (z-1)<sup>4</sup> = (-z-1)/(z-1)<sup>3</sup>

*   **Step 5: Multiply by -z:**

    Z{n<sup>2</sup>u[n]} = -z * [(-z-1)/(z-1)<sup>3</sup>] = z(z+1) / (z-1)<sup>3</sup>

*   **Step 6: Determine the ROC:**

     The ROC remains |z| > 1.

**4. Using z-Domain Differentiation to Find the Inverse Z-transform:**

Sometimes, the Z-transform we want to invert has a form that resembles the result of z-Domain Differentiation. In these cases, we can reverse the process.

**Example 3: Find the inverse Z-transform of X(z) = z / (z - 2)<sup>2</sup> , ROC: |z| > 2**

*   **Step 1: Recognize the Form:**

    Notice that X(z) resembles the result of differentiating something with the form z/(z-a).  In fact, it resembles the Z-transform of `n*x[n]`.

*   **Step 2:  Relate to the Differentiation Property:**

    X(z) = z / (z - 2)<sup>2</sup> = (-1/2) * [-z * d/dz (z/(z-2))]

*   **Step 3: Identify the Original Z-transform:**

    Let Y(z) = z / (z - 2).  Then, X(z) = (-1/2) * [-z * d/dz (Y(z))]

*   **Step 4: Find the Inverse Z-transform of Y(z):**

    y[n] = Z<sup>-1</sup>{Y(z)} = Z<sup>-1</sup>{z / (z - 2)} = 2<sup>n</sup>u[n]

*   **Step 5: Apply the Inverse of the Differentiation Property:**

    Since X(z) = (-1/2)*Z{n*y[n]}, then x[n] = (-1/2) * n * y[n]

*   **Step 6: Substitute:**

    x[n] = (-1/2) * n * 2<sup>n</sup>u[n] = -n * 2<sup>n-1</sup>u[n]

**5. Important Points to Remember:**

*   z-Domain Differentiation is a powerful tool for finding Z-transforms of sequences multiplied by *n*.
*   The ROC *usually* remains the same, but always verify after differentiation, especially if the original ROC bordered z=0 or z=∞.
*   Be careful with the signs and constants when applying and reversing the differentiation property. The factor of `-z` must be accounted for.
*   Multiple differentiations may be needed for sequences like `n^2*x[n]`, `n^3*x[n]`, etc.
*   This property can be used in conjunction with other Z-transform properties for solving more complex problems.

**6. Practice Questions/Exercises:**

1.  **Find the Z-transform of `n*cos(ωn)*u[n]`**.  *Hint:  Use Euler's formula to express cos(ωn) in terms of complex exponentials.  Then, use the z-Domain Differentiation property.*

2.  **Find the Z-transform of `n^2 * a^n * u[n]`**

3.  **Find the inverse Z-transform of X(z) =  2z / (z-1)^3, |z| > 1.**

**7. Answers to Practice Questions/Exercises:**

1.  **Z-transform of `n*cos(ωn)*u[n]`:**

    *   cos(ωn) = (e<sup>jωn</sup> + e<sup>-jωn</sup>) / 2
    *   n*cos(ωn)*u[n] = n*(e<sup>jωn</sup> + e<sup>-jωn</sup>) / 2 * u[n]
    *   Z{n*cos(ωn)*u[n]} = (1/2) * [Z{n*e<sup>jωn</sup>u[n]} + Z{n*e<sup>-jωn</sup>u[n]}]
    *   Z{n*e<sup>jωn</sup>u[n]} = -z * d/dz [z / (z - e<sup>jω</sup>)] = z e<sup>jω</sup> / (z - e<sup>jω</sup>)<sup>2</sup>
    *   Z{n*e<sup>-jωn</sup>u[n]} = -z * d/dz [z / (z - e<sup>-jω</sup>)] = z e<sup>-jω</sup> / (z - e<sup>-jω</sup>)<sup>2</sup>
    *   Z{n*cos(ωn)*u[n]} = (1/2) * [z e<sup>jω</sup> / (z - e<sup>jω</sup>)<sup>2</sup> + z e<sup>-jω</sup> / (z - e<sup>-jω</sup>)<sup>2</sup>]
    *   After simplification:  **Z{n*cos(ωn)*u[n]} = (z(z*cos(ω) - 1)) / (z<sup>2</sup> - 2z*cos(ω) + 1)<sup>2</sup>, ROC: |z| > 1**

2.  **Z-transform of `n^2 * a^n * u[n]`**

    *  We already found Z{n*a^n*u[n]} = az / (z - a)^2
    *  Z{n^2 * a^n * u[n]} = -z * d/dz [az / (z-a)^2]
    *  d/dz [az/(z-a)^2] = a[(z-a)^2 - z*2(z-a)] / (z-a)^4 = a[z^2 -2az + a^2 - 2z^2 +2az]/(z-a)^4 = a[-z^2 + a^2]/(z-a)^4 = a(a^2-z^2)/(z-a)^4
    *  Therefore: Z{n^2 * a^n * u[n]} = -za(a^2-z^2) / (z-a)^4 = **za(z+a)/(z-a)^3, ROC:|z|>|a|**

3.  **Inverse Z-transform of X(z) =  2z / (z-1)^3, |z| > 1.**

    *   Let's manipulate X(z) to match the form of the second derivative from Example 2.
    *   From example 2, Z{n^2*u[n]} = z(z+1)/(z-1)^3.  Notice that X(z) is related to Z{n^2u[n]}
    *   X(z) = 2z / (z-1)^3.  Let's find a constant C such that C * Z{n^2*u[n]} = X(z)
    *   C * z(z+1) / (z-1)^3 = 2z/(z-1)^3 => C * (z+1) = 2 => C = 2/(z+1). This approach will not work as "C" contains 'z'
    * We know that  Z{n*u[n]} = z / (z - 1)^2.  So, let's apply differentiation to this.
    *  Z{n*(n*u[n])} = -z * d/dz{z/(z-1)^2} = z(z+1)/(z-1)^3
    *  The question however asks us for the inverse of  2z/(z-1)^3.
    * Recall the time shifting property of Z transforms: if Z{x[n]} = X(z) then Z{x[n-1]} = z^-1 *X(z).
    *Also recall, if X(z)= z/(z-1)   then  x[n] = u[n].  Then if we differentiate this result twice with respect to 'z' and use Z domain differnetiation then the question can be resolved.
    * After working through these steps, the final answer is **x[n] = (n(n-1))u[n].**
