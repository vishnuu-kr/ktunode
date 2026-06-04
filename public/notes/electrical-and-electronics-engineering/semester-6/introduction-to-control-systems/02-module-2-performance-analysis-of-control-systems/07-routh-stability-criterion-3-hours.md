---
title: "Routh stability criterion. (3 hours)"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 2: Performance Analysis of Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366be"
status: "completed"
scrapedAt: "2026-05-23T16:29:31.913Z"
---
# Introduction to Control Systems - Module 2: Performance Analysis of Control Systems

## Topic: Routh Stability Criterion (3 Hours)

---

### 1. Introduction & Motivation

The stability of a control system is a fundamental requirement. An unstable system can exhibit unbounded output responses, leading to system failure or damage. While the location of closed-loop poles in the s-plane determines stability, finding these poles directly can be computationally intensive, especially for higher-order systems. The Routh Stability Criterion provides a systematic algebraic method to determine the stability of a linear, time-invariant (LTI) system without actually solving for the roots of the characteristic equation.

**Learning Outcome Alignment:** This section introduces the need for stability analysis, aligning with **CO2** (predict and diagnose transient response parameters, which inherently includes stability) and **CO3** (analyse for stability).

**Reference:** This topic is a core concept covered in all standard control systems textbooks. Nise (5th Ed, Ch 4.1) and Ogata (5th Ed, Ch 6.1) provide excellent foundational coverage.

---

### 2. The Characteristic Equation

The stability of a closed-loop system is determined by the roots of its characteristic equation. For a system with a transfer function $T(s) = \frac{Y(s)}{R(s)} = \frac{G(s)}{1 + G(s)H(s)}$, the characteristic equation is given by:

$$1 + G(s)H(s) = 0$$

If $G(s)H(s)$ is a rational function, say $G(s)H(s) = \frac{N(s)}{D(s)}$, then the characteristic equation becomes $D(s) + N(s) = 0$. This polynomial equation, often denoted as $a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0 = 0$, is crucial for stability analysis.

**Key Concept:** **Characteristic Equation:** The polynomial equation obtained by setting the denominator of the closed-loop transfer function to zero. The roots of this equation are the closed-loop poles of the system.

**Key Concept:** **Stability:** A system is considered stable if all its closed-loop poles lie in the left half of the s-plane (i.e., have negative real parts).

**Learning Outcome Alignment:** Understanding the characteristic equation is essential for **CO1** (representing systems) and forming the basis for stability analysis in **CO2** and **CO3**.

**Reference:** Nise (5th Ed, Ch 4.1), Nagrath & Gopal (5th Ed, Ch 7.1).

---

### 3. The Routh Stability Criterion

The Routh Stability Criterion establishes a condition on the coefficients of the characteristic polynomial that guarantees all roots lie in the left half of the s-plane.

**Routh's Theorem:** For a polynomial $P(s) = a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0$, where $a_n > 0$, a necessary and sufficient condition for all roots to lie in the left half of the s-plane is that all coefficients $a_0, a_1, \dots, a_n$ are positive AND that all elements in the first column of the Routh array are positive.

**Learning Outcome Alignment:** This is the core of the topic, directly addressing **CO2** and **CO3** in terms of stability analysis.

**Reference:** Nise (5th Ed, Ch 4.1), Ogata (5th Ed, Ch 6.1), Kuo (9th Ed, Ch 4.2).

---

### 4. Constructing the Routh Array

The Routh array is a tabular method used to apply Routh's Theorem.

**Steps to Construct the Routh Array:**

1.  **Characteristic Equation:** Start with the characteristic equation: $a_n s^n + a_{n-1} s^{n-1} + a_{n-2} s^{n-2} + \dots + a_1 s + a_0 = 0$, where $a_n > 0$.

2.  **First Two Rows:** The first two rows of the array are formed by the coefficients of the characteristic polynomial:

    | Row $s^n$   | $a_n$ | $a_{n-2}$ | $a_{n-4}$ | ... |
    | :---------- | :---- | :-------- | :-------- | :-- |
    | Row $s^{n-1}$ | $a_{n-1}$ | $a_{n-3}$ | $a_{n-5}$ | ... |

3.  **Subsequent Rows:** The elements in the subsequent rows are calculated using the following formula:

    For row $s^{n-k}$ (where $k \ge 2$):

    $b_i = -\frac{\begin{vmatrix} a_n & a_{n-2(i-1)} \\ a_{n-1} & a_{n-3(i-1)} \end{vmatrix}}{a_{n-1}}$

    More generally, for elements in row $s^{m}$:

    Let the elements of the $(m+2)^{th}$ row be $c_1, c_2, c_3, \dots$
    Let the elements of the $(m+1)^{th}$ row be $b_1, b_2, b_3, \dots$
    Let the elements of the $m^{th}$ row be $a_1, a_2, a_3, \dots$

    Then, the elements of the $(m+2)^{th}$ row are calculated as:

    $c_1 = -\frac{\begin{vmatrix} a_n & a_{n-2} \\ a_{n-1} & a_{n-3} \end{vmatrix}}{a_{n-1}}$
    $c_2 = -\frac{\begin{vmatrix} a_n & a_{n-4} \\ a_{n-1} & a_{n-5} \end{vmatrix}}{a_{n-1}}$
    and so on.

    The calculation continues until the $s^0$ row is completed.

**Important Note on First Column Calculation:**

A more practical way to remember the calculation for the first column elements (which are the most critical for stability):

Let the first two rows be:
$s^n$: $a_n, a_{n-2}, a_{n-4}, \dots$
$s^{n-1}$: $a_{n-1}, a_{n-3}, a_{n-5}, \dots$

The first element of the $s^{n-2}$ row is:
$b_1 = \frac{a_{n-1}a_{n-2} - a_n a_{n-3}}{a_{n-1}} = a_{n-2} - \frac{a_n a_{n-3}}{a_{n-1}}$

The first element of the $s^{n-3}$ row is:
$c_1 = \frac{b_1 a_{n-3} - a_{n-1} b_2}{b_1}$ (where $b_2$ is the second element of the $s^{n-1}$ row)

**Example:**

Consider the characteristic equation: $s^3 + 6s^2 + 11s + 6 = 0$

*   $n=3$, $a_3 = 1$, $a_2 = 6$, $a_1 = 11$, $a_0 = 6$.
*   All coefficients are positive.

**Routh Array Construction:**

| Row     | $s^3$ | 1   | 11  |
| :------ | :---- | :-- | :-- |
| $s^2$   | 6     | 6   | 0   |
| $s^1$   | $b_1$ | $b_2$ |     |
| $s^0$   | $c_1$ |     |     |

**Calculation of $b_1$:**
$b_1 = \frac{(6)(11) - (1)(6)}{6} = \frac{66 - 6}{6} = \frac{60}{6} = 10$

**Calculation of $b_2$:**
$b_2 = \frac{(6)(0) - (1)(0)}{6} = 0$

| Row     | $s^3$ | 1   | 11  |
| :------ | :---- | :-- | :-- |
| $s^2$   | 6     | 6   | 0   |
| $s^1$   | 10    | 0   |     |
| $s^0$   | $c_1$ |     |     |

**Calculation of $c_1$:**
$c_1 = \frac{(10)(6) - (6)(0)}{10} = \frac{60 - 0}{10} = 6$

**Completed Routh Array:**

| Row     | $s^3$ | 1   | 11  |
| :------ | :---- | :-- | :-- |
| $s^2$   | 6     | 6   | 0   |
| $s^1$   | 10    | 0   |     |
| $s^0$   | 6     |     |     |

**Learning Outcome Alignment:** This section provides the practical procedure for applying the criterion, crucial for **CO2** and **CO3**.

**Reference:** Nise (5th Ed, Ch 4.1), Nagrath & Gopal (5th Ed, Ch 7.1), Ogata (5th Ed, Ch 6.1).

---

### 5. Interpretation of the Routh Array for Stability

The Routh Stability Criterion states that:

1.  **Condition 1 (Necessary):** For the system to be stable, all the coefficients of the characteristic polynomial ($a_0, a_1, \dots, a_n$) must be present and have the same sign (usually positive, assuming $a_n > 0$). If any coefficient is zero or has a different sign, the system is unstable.
2.  **Condition 2 (Necessary and Sufficient):** For the system to be stable, all the elements in the **first column** of the Routh array must have the same sign (and be non-zero). If $a_n > 0$, then all first column elements must be positive.

**Number of Roots in the Right Half-Plane:**

The number of sign changes in the first column of the Routh array is equal to the number of roots of the characteristic equation that lie in the right half of the s-plane.

**Learning Outcome Alignment:** This is the core interpretation of the Routh criterion, directly related to **CO2** and **CO3**.

**Reference:** Nise (5th Ed, Ch 4.1), Ogata (5th Ed, Ch 6.1).

---

### 6. Special Cases in Routh Array Construction

There are a few special cases that require specific handling:

#### Case 1: A Zero in the First Column

If an element in the first column of the Routh array is zero, while other elements in the same row are non-zero, the criterion cannot be directly applied.

**Procedure:** Replace the zero with a small positive number $\epsilon$ and continue the array construction. Then, analyze the limit as $\epsilon \to 0^+$.

**Example:**

Characteristic equation: $s^3 + 2s^2 + s + 2 = 0$

| Row     | $s^3$ | 1   | 1   |
| :------ | :---- | :-- | :-- |
| $s^2$   | 2     | 2   | 0   |
| $s^1$   | $b_1$ | $b_2$ |     |
| $s^0$   | $c_1$ |     |     |

$b_1 = \frac{(2)(1) - (1)(2)}{2} = 0$

**Routh Array with $\epsilon$:**

| Row     | $s^3$ | 1   | 1   |
| :------ | :---- | :-- | :-- |
| $s^2$   | 2     | 2   | 0   |
| $s^1$   | $\epsilon$ | 0   |     |
| $s^0$   | $c_1$ |     |     |

Calculate $c_1$:
$c_1 = \frac{(\epsilon)(2) - (2)(0)}{\epsilon} = \frac{2\epsilon}{\epsilon} = 2$

**Analysis as $\epsilon \to 0^+$:**
The first column is: $1, 2, \epsilon, 2$.
As $\epsilon \to 0^+$, the first column becomes: $1, 2, 0^+, 2$.
All elements are positive. However, the presence of a zero indicates a potential issue.

Let's re-examine the original polynomial: $s^3 + 2s^2 + s + 2 = s^2(s+2) + 1(s+2) = (s^2+1)(s+2) = 0$.
The roots are $s = -2$, $s = j$, $s = -j$.
There are roots on the imaginary axis ($s = \pm j$). This is considered **marginally stable** or **unstable** depending on the definition used.

**Alternative Procedure for Zero in the First Column:**
If a zero appears in the first column, the row immediately above it corresponds to a polynomial where the roots are located symmetrically with respect to the origin in the s-plane.
In the example above, the $s^2$ row had elements [2, 2]. This corresponds to the auxiliary polynomial: $2s^2 + 2 = 0$, or $s^2 + 1 = 0$. The roots of this are $s = \pm j$.

**When to use $\epsilon$ vs. Auxiliary Polynomial:**
*   The $\epsilon$ method helps determine the number of RHP roots. If the sign changes in the first column with $\epsilon \to 0^+$, there are RHP roots.
*   The auxiliary polynomial method is better for identifying roots on the imaginary axis. If the auxiliary polynomial yields imaginary roots, they lie on the jw-axis.

**Important Point to Remember:** If a zero appears in the first column, the system is not strictly stable. It might be marginally stable (if the roots are on the jw-axis) or unstable (if there are RHP roots).

**Learning Outcome Alignment:** This handles a critical scenario in stability analysis, crucial for **CO2** and **CO3**.

**Reference:** Nise (5th Ed, Ch 4.1.2), Ogata (5th Ed, Ch 6.1), Kuo (9th Ed, Ch 4.2).

#### Case 2: An Entire Row of Zeros

If an entire row of the Routh array consists of zeros, it indicates that there are roots that are symmetric with respect to the origin in the s-plane. These roots could be:
*   Purely imaginary (leading to marginal stability).
*   Located symmetrically in the left and right half-planes (e.g., $s = \pm a$).
*   Located symmetrically in the upper and lower half-planes (complex conjugate pairs on the jw-axis).

**Procedure:**
1.  Form an **auxiliary polynomial**, $A(s)$, using the coefficients from the row **immediately above** the row of zeros. The powers of $s$ in the auxiliary polynomial are in decreasing even or odd order, corresponding to the row number.
    *   If the row of zeros is at $s^k$, the auxiliary polynomial uses coefficients from the $s^{k+1}$ row, starting with $s^{k+1}$, then $s^{k-1}$, $s^{k-3}$, etc.
2.  Differentiate the auxiliary polynomial with respect to $s$: $\frac{dA(s)}{ds}$.
3.  Replace the row of zeros with the coefficients of $\frac{dA(s)}{ds}$ (after dividing by a suitable constant to simplify).
4.  Continue constructing the Routh array.

**The roots of the auxiliary polynomial are roots of the original characteristic equation.**

**Example:**

Characteristic equation: $s^4 + 2s^3 + 3s^2 + 4s + 5 = 0$

| Row     | $s^4$ | 1   | 3   | 5   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 2     | 4   | 0   |     |
| $s^2$   | $b_1$ | $b_2$ |     |     |
| $s^1$   | $c_1$ |     |     |     |
| $s^0$   | $d_1$ |     |     |     |

$b_1 = \frac{(2)(3) - (1)(4)}{2} = \frac{6-4}{2} = 1$
$b_2 = \frac{(2)(5) - (1)(0)}{2} = \frac{10}{2} = 5$

| Row     | $s^4$ | 1   | 3   | 5   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 2     | 4   | 0   |     |
| $s^2$   | 1     | 5   | 0   |     |
| $s^1$   | $c_1$ |     |     |     |
| $s^0$   | $d_1$ |     |     |     |

$c_1 = \frac{(1)(4) - (2)(5)}{1} = \frac{4-10}{1} = -6$

| Row     | $s^4$ | 1   | 3   | 5   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 2     | 4   | 0   |     |
| $s^2$   | 1     | 5   | 0   |     |
| $s^1$   | -6    | 0   |     |     |
| $s^0$   | $d_1$ |     |     |     |

$d_1 = \frac{(-6)(5) - (1)(0)}{-6} = \frac{-30}{-6} = 5$

**Completed Routh Array (Initial):**

| Row     | $s^4$ | 1   | 3   | 5   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 2     | 4   | 0   |     |
| $s^2$   | 1     | 5   | 0   |     |
| $s^1$   | -6    | 0   |     |     |
| $s^0$   | 5     |     |     |     |

First column: [1, 2, 1, -6, 5]. There is a sign change from 1 to -6 and from -6 to 5. This indicates **two** roots in the right half-plane. The system is unstable.

**Now, let's consider a case with an entire row of zeros:**

Characteristic equation: $s^4 + s^3 + 2s^2 + 2s + 4 = 0$

| Row     | $s^4$ | 1   | 2   | 4   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 1     | 2   | 0   |     |
| $s^2$   | $b_1$ | $b_2$ |     |     |
| $s^1$   | $c_1$ |     |     |     |
| $s^0$   | $d_1$ |     |     |     |

$b_1 = \frac{(1)(2) - (1)(2)}{1} = 0$
$b_2 = \frac{(1)(4) - (1)(0)}{1} = 4$

| Row     | $s^4$ | 1   | 2   | 4   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 1     | 2   | 0   |     |
| $s^2$   | 0     | 4   | 0   |     |
| $s^1$   | $c_1$ |     |     |     |
| $s^0$   | $d_1$ |     |     |     |

Here, the $s^2$ row is all zeros. This is the special case.
The row above is $s^3$ with coefficients [1, 2].
The auxiliary polynomial is $A(s) = 1s^3 + 2s^1 = s^3 + 2s$.

Differentiate $A(s)$: $\frac{dA(s)}{ds} = 3s^2 + 2$.
The coefficients of the derivative are [3, 2]. These replace the row of zeros ($s^2$).

**Modified Routh Array:**

| Row     | $s^4$ | 1   | 2   | 4   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 1     | 2   | 0   |     |
| $s^2$   | 3     | 2   | 0   |     | (Replaced row of zeros)
| $s^1$   | $c_1$ |     |     |     |
| $s^0$   | $d_1$ |     |     |     |

Now, calculate $c_1$:
$c_1 = \frac{(3)(2) - (1)(2)}{3} = \frac{6-2}{3} = \frac{4}{3}$

| Row     | $s^4$ | 1   | 2   | 4   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 1     | 2   | 0   |     |
| $s^2$   | 3     | 2   | 0   |     |
| $s^1$   | 4/3   | 0   |     |     |
| $s^0$   | $d_1$ |     |     |     |

Calculate $d_1$:
$d_1 = \frac{(4/3)(2) - (3)(0)}{4/3} = \frac{8/3}{4/3} = 2$

**Final Routh Array:**

| Row     | $s^4$ | 1   | 2   | 4   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 1     | 2   | 0   |     |
| $s^2$   | 3     | 2   | 0   |     |
| $s^1$   | 4/3   | 0   |     |     |
| $s^0$   | 2     |     |     |     |

First column: [1, 1, 3, 4/3, 2]. All are positive.
The auxiliary polynomial was $s^3 + 2s = s(s^2+2) = 0$.
Its roots are $s=0$ and $s = \pm j\sqrt{2}$. These are roots of the original characteristic equation.
Since $s=0$ is a root, the system is **marginally stable**. (Note: Strictly speaking, a root at $s=0$ makes it unstable if it's a simple pole of the closed-loop system. The standard definition of stability requires poles to be in the LHP, excluding the jw-axis unless they are simple poles and the input is bounded. For Routh, roots on jw-axis mean unstable).

**Important Point to Remember:** If an entire row of zeros occurs, it signifies symmetry of roots about the origin. The auxiliary polynomial gives you these roots. The system is not strictly stable.

**Learning Outcome Alignment:** This section addresses complex scenarios and helps accurately determine stability boundaries, reinforcing **CO2** and **CO3**.

**Reference:** Nise (5th Ed, Ch 4.1.3), Ogata (5th Ed, Ch 6.1), Kuo (9th Ed, Ch 4.2).

---

### 7. Using the Routh Criterion to Determine Range of Parameters

The Routh criterion is particularly useful for determining the range of parameter values (e.g., gain $K$) that ensure system stability.

**Procedure:**

1.  Form the characteristic equation, which will typically involve the parameter (e.g., $K$).
2.  Construct the Routh array.
3.  Identify the rows where the parameter $K$ appears.
4.  For stability, all elements in the first column must be positive. Set up inequalities based on these first-column elements.
5.  Also, ensure that any coefficients in the original characteristic polynomial are positive.

**Example:**

Consider a system with characteristic equation: $s^3 + 6s^2 + 12s + K = 0$

| Row     | $s^3$ | 1   | 12  |
| :------ | :---- | :-- | :-- |
| $s^2$   | 6     | K   | 0   |
| $s^1$   | $b_1$ | $b_2$ |     |
| $s^0$   | $c_1$ |     |     |

$b_1 = \frac{(6)(12) - (1)(K)}{6} = \frac{72 - K}{6}$
$b_2 = \frac{(6)(0) - (1)(0)}{6} = 0$

| Row     | $s^3$ | 1   | 12  |
| :------ | :---- | :-- | :-- |
| $s^2$   | 6     | K   | 0   |
| $s^1$   | $\frac{72-K}{6}$ | 0   |     |
| $s^0$   | $c_1$ |     |     |

$c_1 = \frac{(\frac{72-K}{6})(K) - (6)(0)}{\frac{72-K}{6}} = K$

**Completed Routh Array:**

| Row     | $s^3$ | 1   | 12  |
| :------ | :---- | :-- | :-- |
| $s^2$   | 6     | K   | 0   |
| $s^1$   | $\frac{72-K}{6}$ | 0   |     |
| $s^0$   | K     |     |     |

For stability, all elements in the first column must be positive:
1.  $1 > 0$ (Always true)
2.  $6 > 0$ (Always true)
3.  $\frac{72-K}{6} > 0 \implies 72 - K > 0 \implies K < 72$
4.  $K > 0$ (From $a_0 = K$)

Combining these conditions, for stability, $0 < K < 72$.

**Marginal Stability:**
The system becomes marginally stable when the first column has a zero element, leading to a row of zeros or when the last element of the first column becomes zero.
*   $\frac{72-K}{6} = 0 \implies K = 72$. When $K=72$, the $s^1$ row is all zeros. The auxiliary polynomial comes from the $s^2$ row: $6s^2 + 72 = 0 \implies s^2 + 12 = 0 \implies s = \pm j\sqrt{12}$. Roots on the imaginary axis.
*   $K = 0$. When $K=0$, the characteristic equation is $s^3 + 6s^2 + 12s = s(s^2 + 6s + 12) = 0$. One root is at $s=0$, making the system unstable.

Therefore, the range of $K$ for stability is $0 < K < 72$.

**Learning Outcome Alignment:** This directly addresses the application of the Routh criterion for design and analysis, aligning with **CO3** and **CO5**.

**Reference:** Nise (5th Ed, Ch 4.1), Nagrath & Gopal (5th Ed, Ch 7.1), Ogata (5th Ed, Ch 6.1).

---

### 8. Summary of Routh Stability Criterion

*   **Purpose:** To determine the stability of an LTI system by examining the coefficients of its characteristic polynomial.
*   **Core Idea:** All roots of the characteristic equation must lie in the left half of the s-plane.
*   **Routh Array:** A systematic way to arrange coefficients and calculate intermediate values.
*   **Conditions for Stability:**
    1.  All coefficients of the characteristic polynomial must be present and have the same sign.
    2.  All elements in the first column of the Routh array must be positive.
*   **Sign Changes in First Column:** Indicate the number of roots in the right half-plane.
*   **Special Cases:**
    *   **Zero in First Column:** Replace with $\epsilon$ or use the auxiliary polynomial from the row above.
    *   **Entire Row of Zeros:** Indicates symmetry of roots about the origin; use the auxiliary polynomial from the row above.
*   **Applications:** Determining stability and finding ranges of parameters for stability.

**Important Points to Remember:**

*   The Routh criterion only tells you if the system is stable, marginally stable, or unstable. It does not directly provide the transient response characteristics (like settling time or overshoot) which are typically found using root locus or pole-zero placement.
*   The criterion is for linear, time-invariant systems with polynomial characteristic equations.
*   The criterion requires the leading coefficient ($a_n$) to be positive. If it's negative, multiply the entire characteristic equation by -1.
*   If there's a missing coefficient (and it's not a special case where the missing coefficient is implicitly zero), the system is unstable.
*   Roots on the imaginary axis ($s = \pm j\omega$) lead to marginal stability. For practical control systems, this is often considered undesirable and hence unstable.

**Learning Outcome Alignment:** This section consolidates the understanding of the Routh criterion, reinforcing **CO2** and **CO3**.

---

### 9. Practice Questions & Exercises

**Question 1:**
Determine if the following system is stable using the Routh stability criterion.
Characteristic equation: $s^3 + 2s^2 + 3s + 4 = 0$

**Answer:**
Routh Array:
| Row     | $s^3$ | 1   | 3   |
| :------ | :---- | :-- | :-- |
| $s^2$   | 2     | 4   | 0   |
| $s^1$   | 1     | 0   |     |
| $s^0$   | 4     |     |     |

First column: [1, 2, 1, 4]. All are positive.
The system is **stable**.

---

**Question 2:**
For the system with characteristic equation $s^4 + s^3 + 2s^2 + 2s + 1 = 0$, determine the number of roots in the right half-plane.

**Answer:**
Routh Array:
| Row     | $s^4$ | 1   | 2   | 1   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 1     | 2   | 0   |     |
| $s^2$   | $b_1$ | $b_2$ |     |     |
| $s^1$   | $c_1$ |     |     |     |
| $s^0$   | $d_1$ |     |     |     |

$b_1 = \frac{(1)(2) - (1)(2)}{1} = 0$
$b_2 = \frac{(1)(1) - (1)(0)}{1} = 1$

| Row     | $s^4$ | 1   | 2   | 1   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 1     | 2   | 0   |     |
| $s^2$   | 0     | 1   | 0   |     |
| $s^1$   | $c_1$ |     |     |     |
| $s^0$   | $d_1$ |     |     |     |

Special Case: Zero in the first column ($s^2$ row).
Auxiliary polynomial from $s^3$ row: $A(s) = 1s^3 + 2s = s(s^2+2)$.
$\frac{dA(s)}{ds} = 3s^2 + 2$. Coefficients: [3, 2].
Replace the $s^2$ row with [3, 2].

| Row     | $s^4$ | 1   | 2   | 1   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 1     | 2   | 0   |     |
| $s^2$   | 3     | 2   | 0   |     |
| $s^1$   | $c_1$ |     |     |     |
| $s^0$   | $d_1$ |     |     |     |

$c_1 = \frac{(3)(2) - (1)(2)}{3} = \frac{6-2}{3} = \frac{4}{3}$
$d_1 = \frac{(4/3)(2) - (3)(0)}{4/3} = 2$

Final Routh Array:
| Row     | $s^4$ | 1   | 2   | 1   |
| :------ | :---- | :-- | :-- | :-- |
| $s^3$   | 1     | 2   | 0   |     |
| $s^2$   | 3     | 2   | 0   |     |
| $s^1$   | 4/3   | 0   |     |     |
| $s^0$   | 2     |     |     |     |

First column: [1, 1, 3, 4/3, 2]. All are positive.
The auxiliary polynomial was $s(s^2+2)$, roots are $0, \pm j\sqrt{2}$. These are roots on the jw-axis and origin.
Since there are no sign changes in the first column *after* handling the zero row, there are **zero roots in the right half-plane**. The system is marginally stable.

---

**Question 3:**
For the system with characteristic equation $s^3 + Ks^2 + 3s + 2K = 0$, find the range of $K$ for stability.

**Answer:**
Routh Array:
| Row     | $s^3$ | 1   | 3   |
| :------ | :---- | :-- | :-- |
| $s^2$   | K     | 2K  | 0   |
| $s^1$   | $b_1$ | $b_2$ |     |
| $s^0$   | $c_1$ |     |     |

$b_1 = \frac{(K)(3) - (1)(2K)}{K} = \frac{3K - 2K}{K} = \frac{K}{K} = 1$ (assuming $K \ne 0$)
$b_2 = \frac{(K)(0) - (1)(0)}{K} = 0$

| Row     | $s^3$ | 1   | 3   |
| :------ | :---- | :-- | :-- |
| $s^2$   | K     | 2K  | 0   |
| $s^1$   | 1     | 0   |     |
| $s^0$   | $c_1$ |     |     |

$c_1 = \frac{(1)(2K) - (K)(0)}{1} = 2K$

**Completed Routh Array:**
| Row     | $s^3$ | 1   | 3   |
| :------ | :---- | :-- | :-- |
| $s^2$   | K     | 2K  | 0   |
| $s^1$   | 1     | 0   |     |
| $s^0$   | 2K    |     |     |

For stability, all elements in the first column must be positive:
1.  $1 > 0$ (Always true)
2.  $K > 0$
3.  $2K > 0 \implies K > 0$

The range of $K$ for stability is $K > 0$.

---

### 10. Alignment with Course Outcomes

*   **CO1: To represent continuous time systems in the classical domain.** (Knowledge Level: K2)
    *   The Routh criterion operates on the characteristic equation, which is derived from the system's transfer function represented in the classical s-domain.
*   **CO2: Analyse the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions.** (Knowledge Level: K2)
    *   Stability is the most fundamental aspect of transient response. The Routh criterion directly diagnoses stability without computing the response, which is a key prediction.
*   **CO3: Analyse dynamics systems for their performance and stability using Root locus.** (Knowledge Level: K3)
    *   The Routh criterion is an alternative (and often complementary) method to root locus for stability analysis. It provides a direct algebraic check for stability without plotting. It can be used to find ranges of parameters for stability, which is essential for performance tuning.
*   **CO5: To represent continuous time systems in the classical domain.** (Knowledge Level: K2)
    *   Similar to CO1, the Routh criterion is firmly rooted in the s-domain representation of systems.

This topic directly supports the analysis of system stability, a critical component of performance analysis. It provides a computational tool to achieve the K2 and K3 knowledge levels for stability assessment.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
