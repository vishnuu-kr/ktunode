---
title: "support of sequences"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b137"
status: "completed"
scrapedAt: "2026-05-20T16:15:25.271Z"
---
## SIGNALS AND SYSTEMS - Module 1: 1D Signals - Support of Sequences

**Learning Outcomes:**

*   Understand the concept of the support of a sequence.
*   Determine the support of various discrete-time sequences.
*   Apply the concept of support in signal processing operations.

**1. Introduction to Sequences (Discrete-Time Signals)**

*   A **sequence** (or discrete-time signal) is a function of a discrete variable, typically an integer *n*.
*   We represent a sequence as *x[n]*, where *n* is the index representing the sample number.  *n* can take integer values from -∞ to +∞.
*   Sequences are fundamental to digital signal processing.
*   Examples of Sequences:
    *   Unit Impulse Sequence: δ[n]
    *   Unit Step Sequence: u[n]
    *   Sinusoidal Sequence:  A*sin(ωn + φ)
    *   Exponential Sequence: α<sup>n</sup>

**2. Definition of Support of a Sequence**

*   The **support of a sequence *x[n]*** is the set of integer indices *n* for which *x[n]* is non-zero.  In other words, it's where the signal "exists."
*   Mathematically: Support(x[n]) = {n ∈ ℤ | x[n] ≠ 0}  where ℤ represents the set of integers.
*   The support helps characterize the duration and location of a signal.
*   A sequence is said to be **finite-duration** if its support is a finite set. Otherwise, it's **infinite-duration**.

**3. Determining the Support of a Sequence**

*   **Step 1: Identify the sequence *x[n]***.  This might be given as a formula, a table of values, or a description.
*   **Step 2: Find the values of *n* for which *x[n] ≠ 0***.  This might involve solving an inequality or directly examining the values of *x[n]*.
*   **Step 3: Express the support as a set of integers.**

**4. Examples of Support Determination**

*   **Example 1: Unit Impulse Sequence (δ[n])**

    *   Definition:  δ[n] = 1 for n = 0, and δ[n] = 0 for n ≠ 0.
    *   Support(δ[n]) = {0}  (Only non-zero at n=0)
    *   Finite-duration sequence.

*   **Example 2: Unit Step Sequence (u[n])**

    *   Definition: u[n] = 1 for n ≥ 0, and u[n] = 0 for n < 0.
    *   Support(u[n]) = {n ∈ ℤ | n ≥ 0}  or {0, 1, 2, 3, ...}
    *   Infinite-duration sequence (starts at n=0 and goes to infinity).

*   **Example 3: Exponential Sequence x[n] = (0.5)<sup>n</sup>u[n]**

    *   Definition: x[n] = (0.5)<sup>n</sup> for n ≥ 0, and x[n] = 0 for n < 0.
    *   Support(x[n]) = {n ∈ ℤ | n ≥ 0}  or {0, 1, 2, 3, ...}
    *   Although the amplitude decreases with *n*, the sequence never actually reaches zero for n >=0. Hence, it's an infinite-duration sequence.

*   **Example 4: Finite-Duration Sequence  x[n] = {2, 1, -1, 3, 0, 4} for -1 ≤ n ≤ 4 and 0 otherwise.**

    *   This sequence is explicitly defined for a limited range of *n*.  Note that the index *n* is explicitly given.
    *   Support(x[n]) = {-1, 0, 1, 2, 3, 4}
    *   Finite-duration sequence.

*   **Example 5:  x[n] = sin(πn/4) for 0 ≤ n ≤ 7 and 0 otherwise.**

    *   x[0] = sin(0) = 0
    *   x[1] = sin(π/4) = 0.707
    *   x[2] = sin(π/2) = 1
    *   x[3] = sin(3π/4) = 0.707
    *   x[4] = sin(π) = 0
    *   x[5] = sin(5π/4) = -0.707
    *   x[6] = sin(3π/2) = -1
    *   x[7] = sin(7π/4) = -0.707
    *   Support(x[n]) = {1, 2, 3, 5, 6, 7}
    *   Finite-duration sequence. Note that x[0] and x[4] are zero within the defined range, so 0 and 4 are NOT in the support.

**5. Application of Support in Signal Processing**

*   **Convolution:**  The support of the convolution of two sequences is related to the supports of the individual sequences.  If *x[n]* has support *S<sub>x</sub>* and *y[n]* has support *S<sub>y</sub>*, then the convolution *(x * y)[n]* has support *S<sub>x</sub> + S<sub>y</sub>* = {m + n | m ∈ S<sub>x</sub>, n ∈ S<sub>y</sub>}. This is important for determining the duration of the convolved signal.
*   **Correlation:**  Similar to convolution, the support of the correlation of two sequences is also related to their individual supports.
*   **Filtering:** Understanding the support of a filter's impulse response is crucial for determining the duration and characteristics of the filtered signal.
*   **Efficient Computation:** Knowing the support of a sequence allows for efficient computation in signal processing algorithms by avoiding unnecessary calculations for indices where the signal is zero.

**6. Important Points to Remember**

*   The support only includes indices where the sequence is *strictly* non-zero.
*   The support can be finite or infinite.
*   The support helps to characterize the duration and location of a sequence.
*   Understanding the support of sequences is essential for analyzing and manipulating signals in various signal processing applications.

**7. Practice Questions/Exercises**

**Question 1:** Find the support of the sequence *x[n] = n* for 0 ≤ *n* ≤ 5 and *x[n] = 0* otherwise.

**Answer:** Support(x[n]) = {1, 2, 3, 4, 5}  (Note: x[0] = 0, therefore 0 is not included in the support).

**Question 2:** Determine if the sequence *x[n] = (0.9)<sup>|n|</sup>* is finite-duration or infinite-duration. What is the support?

**Answer:** Infinite-duration. Support(x[n]) = {n ∈ ℤ}. The sequence is non-zero for all integer values of n, although its magnitude approaches zero as |n| increases.

**Question 3:**  A sequence *x[n]* is defined as follows:  *x[n] = 1* for -2 ≤ *n* ≤ 2 and *x[n] = 0* otherwise.  Determine the support of *x[n]*.

**Answer:** Support(x[n]) = {-2, -1, 0, 1, 2}

**Question 4:** What is the support of the sequence x[n] = u[n] - u[n-5]?

**Answer:** This is a rectangle function.  u[n] is 1 for n >= 0. u[n-5] is 1 for n-5 >= 0, or n >= 5. So, x[n] = 1 for 0 <= n < 5, and 0 otherwise.  Therefore, Support(x[n]) = {0, 1, 2, 3, 4}

**Question 5:**  Two sequences, *x[n]* and *y[n]*, have supports *S<sub>x</sub>* = {0, 1, 2} and *S<sub>y</sub>* = {1, 2, 3, 4} respectively.  What is the support of their convolution, *(x * y)[n]*?

**Answer:** S<sub>x</sub> + S<sub>y</sub> = {0+1, 0+2, 0+3, 0+4, 1+1, 1+2, 1+3, 1+4, 2+1, 2+2, 2+3, 2+4} = {1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6} = {1, 2, 3, 4, 5, 6}
Therefore, Support((x * y)[n]) = {1, 2, 3, 4, 5, 6}

This comprehensive guide should help you understand the concept of the support of sequences, how to determine it, and its importance in signal processing. Remember to practice with different sequences to solidify your understanding.
