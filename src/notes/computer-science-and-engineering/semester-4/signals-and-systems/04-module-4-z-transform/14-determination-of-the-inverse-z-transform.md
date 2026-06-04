---
title: "Determination of the Inverse z Transform"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b175"
status: "completed"
scrapedAt: "2026-05-20T16:16:06.328Z"
---
# SIGNALS AND SYSTEMS - Module 4: Z Transform - Inverse Z Transform

## Introduction

This module focuses on the inverse Z-transform, a crucial tool for converting a Z-transform back into a discrete-time signal. Understanding the inverse Z-transform allows us to analyze and synthesize discrete-time systems effectively.

## Learning Outcomes

*   Understand the need for inverse Z-transform.
*   Learn different methods for computing the inverse Z-transform:
    *   Partial Fraction Expansion Method
    *   Power Series Expansion Method (Long Division)
    *   Contour Integration (Residue Method) - *brief overview due to complexity*
*   Be able to apply appropriate methods for specific Z-transforms.
*   Determine the region of convergence (ROC) of the Z-transform is essential for a unique inverse.

## Key Concepts and Definitions

*   **Z-Transform:**  A mathematical transformation that converts a discrete-time signal, which is a sequence of real or complex numbers, into a frequency-domain representation.  It is defined as:

    X(z) = Σ<sub>n=-∞</sub><sup>∞</sup> x[n]z<sup>-n</sup>

    where x[n] is the discrete-time signal and z is a complex variable.

*   **Region of Convergence (ROC):** The set of values of 'z' for which the Z-transform converges (i.e., the summation results in a finite value).  The ROC is crucial because it determines the uniqueness of the inverse Z-transform.

*   **Inverse Z-Transform:** The process of obtaining the original discrete-time signal x[n] from its Z-transform X(z).  It is denoted as:

    x[n] = Z<sup>-1</sup>{X(z)}

*   **Partial Fraction Expansion (PFE):**  A technique used to decompose a complex rational function into simpler fractions.  It's widely used in inverting Z-transforms.

*   **Power Series Expansion (Long Division):**  A method to express X(z) as a power series in z<sup>-1</sup>.  The coefficients of the series directly correspond to the signal samples x[n].

*   **Residue:**  A complex number that characterizes the behavior of a complex function near a singularity (pole).  Residue theorem is used in contour integration for inverting the Z-transform.

## Methods for Computing the Inverse Z-Transform

### 1. Partial Fraction Expansion Method

**Description:** This method is particularly effective when X(z) is a rational function (a ratio of polynomials in z<sup>-1</sup> or z).  The key idea is to decompose X(z) into simpler fractions whose inverse Z-transforms are known.

**Steps:**

1.  **Ensure X(z) is a proper fraction:** If the degree of the numerator polynomial is greater than or equal to the degree of the denominator, perform long division to obtain a polynomial plus a proper fraction.

2.  **Factorize the denominator:** Find the roots (poles) of the denominator polynomial.

3.  **Perform Partial Fraction Expansion:** Express X(z) as a sum of simpler fractions based on the nature of the roots:
    *   **Distinct Roots:**  If the roots are distinct (z<sub>1</sub>, z<sub>2</sub>, ..., z<sub>N</sub>), then:

        X(z) = A<sub>1</sub>/(1 - z<sub>1</sub>z<sup>-1</sup>) + A<sub>2</sub>/(1 - z<sub>2</sub>z<sup>-1</sup>) + ... + A<sub>N</sub>/(1 - z<sub>N</sub>z<sup>-1</sup>)

        where A<sub>i</sub> can be found using the formula:

        A<sub>i</sub> = lim<sub>z→z<sub>i</sub></sub> (1 - z<sub>i</sub>z<sup>-1</sup>) X(z)

        *Alternative Method (Using the variable 'z'):*

         If you choose to represent X(z) as a function of 'z' rather than 'z<sup>-1</sup>', the partial fraction expansion will look like this:

        X(z)/z = A<sub>1</sub>/(z - z<sub>1</sub>) + A<sub>2</sub>/(z - z<sub>2</sub>) + ... + A<sub>N</sub>/(z - z<sub>N</sub>)

        A<sub>i</sub> = lim<sub>z→z<sub>i</sub></sub> (z - z<sub>i</sub>) X(z)/z

    *   **Repeated Roots:** If a root z<sub>i</sub> is repeated 'm' times, then:

        X(z) =  A<sub>1</sub>/(1 - z<sub>i</sub>z<sup>-1</sup>) + A<sub>2</sub>/(1 - z<sub>i</sub>z<sup>-1</sup>)<sup>2</sup> + ... + A<sub>m</sub>/(1 - z<sub>i</sub>z<sup>-1</sup>)<sup>m</sup> +  (terms for other roots)

        A<sub>m</sub> = lim<sub>z→z<sub>i</sub></sub> (1 - z<sub>i</sub>z<sup>-1</sup>)<sup>m</sup> X(z)
        A<sub>m-1</sub> =  lim<sub>z→z<sub>i</sub></sub> d/dz [ (1 - z<sub>i</sub>z<sup>-1</sup>)<sup>m</sup> X(z)]
        ... and so on.  (Derivatives are required for coefficients of repeated terms).

        *Alternative Method (Using the variable 'z'):*

        X(z)/z = A<sub>1</sub>/(z - z<sub>i</sub>) + A<sub>2</sub>/(z - z<sub>i</sub>)<sup>2</sup> + ... + A<sub>m</sub>/(z - z<sub>i</sub>)<sup>m</sup> +  (terms for other roots)

        A<sub>m</sub> = lim<sub>z→z<sub>i</sub></sub> (z - z<sub>i</sub>)<sup>m</sup> X(z)/z
        A<sub>m-1</sub> =  lim<sub>z→z<sub>i</sub></sub> d/dz [ (z - z<sub>i</sub>)<sup>m</sup> X(z)/z]

4.  **Find the Inverse Z-transform of each term:** Use known Z-transform pairs and the ROC to determine the inverse of each simpler fraction. Common pairs include:
    *   Z<sup>-1</sup>{1/(1 - az<sup>-1</sup>)} = a<sup>n</sup>u[n]   (ROC: |z| > |a|) (Right-sided sequence)
    *   Z<sup>-1</sup>{1/(1 - az<sup>-1</sup>)} = -a<sup>n</sup>u[-n-1] (ROC: |z| < |a|) (Left-sided sequence)
    *   Z<sup>-1</sup>{z/(z-a)} = a<sup>n</sup>u[n]   (ROC: |z| > |a|) (Right-sided sequence)
    *   Z<sup>-1</sup>{z/(z-a)} = -a<sup>n</sup>u[-n-1] (ROC: |z| < |a|) (Left-sided sequence)
    *   Z<sup>-1</sup>{z<sup>-k</sup> X(z)} = x[n-k]  (Time shifting property)
    *   Z<sup>-1</sup>{1/(1 - az<sup>-1</sup>)<sup>2</sup>} = (n+1)a<sup>n</sup>u[n] (ROC: |z|>|a|)

5.  **Combine the results:** Sum the individual inverse Z-transforms to obtain the complete inverse Z-transform x[n].

**Example:**

Find the inverse Z-transform of X(z) = (3z<sup>-1</sup>)/(1 - (3/2)z<sup>-1</sup> + (1/2)z<sup>-2</sup>)  with ROC |z| > 1.

1.  X(z) is a proper fraction.

2.  Factor the denominator: 1 - (3/2)z<sup>-1</sup> + (1/2)z<sup>-2</sup> = (1 - z<sup>-1</sup>)(1 - (1/2)z<sup>-1</sup>)

3.  Partial Fraction Expansion:  X(z) = A/(1 - z<sup>-1</sup>) + B/(1 - (1/2)z<sup>-1</sup>)
    *   A = lim<sub>z→1</sub> (1 - z<sup>-1</sup>) (3z<sup>-1</sup>)/((1 - z<sup>-1</sup>)(1 - (1/2)z<sup>-1</sup>)) = lim<sub>z→1</sub> (3z<sup>-1</sup>)/(1 - (1/2)z<sup>-1</sup>) = 6
    *   B = lim<sub>z→1/2</sub> (1 - (1/2)z<sup>-1</sup>) (3z<sup>-1</sup>)/((1 - z<sup>-1</sup>)(1 - (1/2)z<sup>-1</sup>)) = lim<sub>z→1/2</sub> (3z<sup>-1</sup>)/(1 - z<sup>-1</sup>) = -3

    Therefore, X(z) = 6/(1 - z<sup>-1</sup>) - 3/(1 - (1/2)z<sup>-1</sup>)

4.  Inverse Z-transform of each term:
    *   Z<sup>-1</sup>{6/(1 - z<sup>-1</sup>)} = 6(1)<sup>n</sup>u[n] = 6u[n] (since ROC |z|>1)
    *   Z<sup>-1</sup>{-3/(1 - (1/2)z<sup>-1</sup>)} = -3(1/2)<sup>n</sup>u[n] (since ROC |z|>1/2)

5.  Combine: x[n] = 6u[n] - 3(1/2)<sup>n</sup>u[n] = (6 - 3(1/2)<sup>n</sup>)u[n]

**Important Points:**

*   The ROC is critical for determining whether to use a right-sided or left-sided sequence in the inverse transform.
*   The roots of the denominator determine the "building blocks" of the signal x[n].
*   Partial Fraction Expansion simplifies the inversion process significantly.

### 2. Power Series Expansion Method (Long Division)

**Description:** This method involves expanding X(z) into a power series in z<sup>-1</sup>.  The coefficients of the series directly correspond to the values of the discrete-time signal x[n].

**Steps:**

1.  **Express X(z) as a ratio of polynomials in z<sup>-1</sup>:** Rewrite X(z) in terms of z<sup>-1</sup>.

2.  **Perform Long Division:** Divide the numerator by the denominator.  The quotient will be a power series in z<sup>-1</sup>.

3.  **Identify the Coefficients:** The coefficients of the terms z<sup>-n</sup> in the quotient represent the values of x[n].

4.  **Determine the range for n:** From ROC of X(z), find the range for n.

**Example:**

Find the inverse Z-transform of X(z) = 1/(1 - az<sup>-1</sup>) using long division, ROC |z| > |a|.

1.  X(z) is already in the desired form.

2.  Long Division:

    ```
         1 + az^-1 + a^2z^-2 + a^3z^-3 + ...
      1-az^-1 | 1
              -(1 - az^-1)
              ----------
                 az^-1
                 -(az^-1 - a^2z^-2)
                 -------------
                    a^2z^-2
                    -(a^2z^-2 - a^3z^-3)
                    --------------
                       a^3z^-3
                       ...
    ```

    Therefore, X(z) = 1 + az<sup>-1</sup> + a<sup>2</sup>z<sup>-2</sup> + a<sup>3</sup>z<sup>-3</sup> + ...

3.  Identify Coefficients: x[0] = 1, x[1] = a, x[2] = a<sup>2</sup>, x[3] = a<sup>3</sup>, ...

4.  Determine range: Since ROC is |z| > |a|, x[n] is a causal signal, thus x[n] = 0 for n < 0.

5.  Result: x[n] = a<sup>n</sup>u[n]

**Important Points:**

*   Long division provides a direct way to obtain the signal samples.
*   The ROC is essential for determining the range of 'n' for which the signal is non-zero (causality, anti-causality).
*   This method is especially useful when PFE is difficult or impossible.
*   This method may not give a closed form, but it is useful for finding initial values of x[n].

### 3. Contour Integration (Residue Method)

**Description:**  This is the most general method for finding the inverse Z-transform, based on the inverse Z-transform integral:

x[n] = (1/2πj) ∮<sub>C</sub> X(z) z<sup>n-1</sup> dz

where C is a closed contour in the ROC of X(z) encircling the origin.

**Steps:**

1.  **Identify the poles of X(z)z<sup>n-1</sup>:** Find the values of z for which the denominator of X(z)z<sup>n-1</sup> is zero.

2.  **Choose a contour C:** Select a closed contour within the ROC of X(z) that encloses all the poles.  A circle centered at the origin is a common choice.

3.  **Calculate the residues at each pole:** The residue of a function f(z) at a pole z<sub>i</sub> of order m is given by:

    Res(f(z), z<sub>i</sub>) = (1/(m-1)!) lim<sub>z→z<sub>i</sub></sub> d<sup>m-1</sup>/dz<sup>m-1</sup> [ (z - z<sub>i</sub>)<sup>m</sup> f(z)]

    If z<sub>i</sub> is a simple pole (order 1):

    Res(f(z), z<sub>i</sub>) = lim<sub>z→z<sub>i</sub></sub> (z - z<sub>i</sub>) f(z)

4.  **Apply the Residue Theorem:** The inverse Z-transform is the sum of the residues multiplied by 2πj and divided by 2πj (so just the sum of the residues):

    x[n] = Σ Res(X(z)z<sup>n-1</sup>, z<sub>i</sub>)  (summed over all poles z<sub>i</sub> inside the contour C)

**Example:** (*Brief - Full calculation is involved*)

Find the inverse Z-transform of X(z) = z/(z - a) with ROC |z| > |a|.

1.  Pole: z = a

2.  Contour:  Circle |z| = r, where r > |a|

3.  Residue: Res(X(z)z<sup>n-1</sup>, a) = lim<sub>z→a</sub> (z - a) (z/(z - a))z<sup>n-1</sup> = a<sup>n</sup>

4.  x[n] = a<sup>n</sup>

**Important Points:**

*   This is the most general method but requires complex analysis knowledge.
*   The ROC is critical for choosing the appropriate contour.
*   The Residue Theorem provides a powerful tool for calculating the inverse Z-transform.
*   This method is usually used when PFE and long division is complex.

## Examples

**Example 1: Right-sided sequence**

Find the inverse Z-transform of  X(z) = z/(z-0.5) with ROC |z|>0.5 using PFE

1. This is already a proper fraction.
2. The pole is at z = 0.5
3. Using partial fraction expansion: X(z) = z/(z-0.5) = A/(z-0.5), where A = lim (z-0.5)[z/(z-0.5)] = 1
Therefore X(z) = 1/(z-0.5)
4.  Multiply by z/z to make the form the same as standard transform pair:
   X(z) = z<sup>-1</sup> * (z<sup>2</sup>/(z-0.5))
5. Using the Z transform table, the inverse transform of  z/(z-0.5) = (0.5)<sup>n</sup>u[n]
6. Applying the time delay property (since X(z) is multiplied by z<sup>-1</sup>):   (0.5)<sup>n-1</sup>u[n-1]

**Example 2: Left-sided sequence**

Find the inverse Z-transform of X(z) = 1/(1-2z<sup>-1</sup>) with ROC |z|<2 using PFE.

1. This is already a proper fraction.
2. The pole is at z = 2
3. Inverse z-transform: -2<sup>n</sup>u[-n-1]

## Practice Questions / Exercises

1.  Find the inverse Z-transform of X(z) = (z<sup>2</sup> + z)/(z<sup>2</sup> - 3z + 2) with ROC |z| > 2 using PFE.
    *   **Answer:**  x[n] = 5(2)<sup>n</sup>u[n] - 4u[n]

2.  Find the inverse Z-transform of X(z) = 1/(1 - 0.8z<sup>-1</sup>) using long division with ROC |z| > 0.8.
    *   **Answer:**  x[n] = (0.8)<sup>n</sup>u[n]

3.  Find the inverse Z-transform of X(z) = z/(z-0.5) with ROC |z| < 0.5 using PFE.
    *   **Answer:** x[n] = -(0.5)<sup>n</sup>u[-n-1]

4. Find the inverse Z-transform of X(z) = 1/(1 - 0.5z<sup>-1</sup>)<sup>2</sup> using the standard inverse pairs with ROC |z| > 0.5
    *   **Answer:** x[n] = (n+1)(0.5)<sup>n</sup>u[n]

## Important Points to Remember

*   The ROC is crucial for determining the uniqueness of the inverse Z-transform.  Different ROCs for the same X(z) will lead to different x[n].
*   Partial Fraction Expansion and Long Division are common and practical methods.
*   Contour Integration (Residue Method) is the most general but requires complex analysis.
*   Familiarize yourself with common Z-transform pairs to speed up the inversion process.
*   Practice different examples to gain proficiency in applying these methods.  Pay close attention to the ROC and its implications.
