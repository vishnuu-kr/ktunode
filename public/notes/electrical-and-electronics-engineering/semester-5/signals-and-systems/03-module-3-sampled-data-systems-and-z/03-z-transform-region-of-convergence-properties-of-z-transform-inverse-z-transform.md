---
title: "Z-Transform:  Region of convergence- Properties of Z-Transform Inverse Z-Transform."
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampled Data Systems and Z"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361dd"
status: "completed"
scrapedAt: "2026-05-23T16:23:50.501Z"
---
# Signals and Systems: Module 3 - Sampled Data Systems and Z-Transform

This module delves into the fundamental concepts of the Z-transform, a powerful tool for analyzing discrete-time signals and systems. We will explore its definition, the crucial concept of the Region of Convergence (ROC), its essential properties, and how to perform the inverse Z-transform. This knowledge is vital for understanding and manipulating discrete-time systems, directly contributing to Course Outcome CO3: "To represent discrete time signals and systems in Z-domain."

## 3.1 The Z-Transform: Definition

The Z-transform is the discrete-time analog of the Laplace transform for continuous-time signals. It transforms a discrete-time signal $x[n]$ into a function of a complex variable $z$.

### 3.1.1 Unilateral Z-Transform

The unilateral Z-transform of a discrete-time signal $x[n]$ is defined as:

$X(z) = \sum_{n=0}^{\infty} x[n] z^{-n}$

This form is particularly useful for analyzing causal systems with initial conditions or for signals that are non-zero only for $n \ge 0$.

### 3.1.2 Bilateral Z-Transform

The bilateral Z-transform of a discrete-time signal $x[n]$ is defined as:

$X(z) = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$

This is the more general form and is used for signals that can be non-zero for both positive and negative values of $n$. Unless otherwise specified, "Z-transform" usually refers to the bilateral Z-transform.

**Key Concept:** The Z-transform converts a discrete-time sequence into a function of the complex variable $z$. This transformation often simplifies analysis, especially for difference equations.

**Textbook Reference:**
*   **Haykin & Van Veen:** Chapter 7 introduces the Z-transform as a tool for analyzing discrete-time systems, emphasizing its role in converting difference equations into algebraic equations.
*   **Ogata:** Chapter 1 defines the Z-transform and its inverse, highlighting its application in solving linear difference equations.

## 3.2 Region of Convergence (ROC)

The Region of Convergence (ROC) of a Z-transform is the set of all values of $z$ for which the Z-transform converges. The ROC is crucial because different sequences can have the same Z-transform expression but different ROCs, indicating different time-domain behaviors.

### 3.2.1 Definition of ROC

For the bilateral Z-transform, convergence requires that the sum $\sum_{n=-\infty}^{\infty} |x[n] z^{-n}|$ converges.

### 3.2.2 ROC for Common Signal Types

The shape and location of the ROC provide significant information about the characteristics of the discrete-time signal $x[n]$ and the system it represents.

*   **Causal Sequences:** If $x[n]$ is a causal sequence (i.e., $x[n] = 0$ for $n < 0$), its Z-transform is of the form $X(z) = \sum_{n=0}^{\infty} x[n] z^{-n}$. The ROC is typically an **outside region** of a circle in the $z$-plane, including or excluding a circle at some radius.
    *   **Example:** For a causal exponential sequence $x[n] = a^n u[n]$ (where $u[n]$ is the unit step function), the Z-transform is $X(z) = \frac{1}{1 - az^{-1}} = \frac{z}{z-a}$. The ROC is $|z| > |a|$. This means the ROC is the region outside the circle of radius $|a|$.

*   **Anti-causal Sequences:** If $x[n]$ is an anti-causal sequence (i.e., $x[n] = 0$ for $n \ge 0$), its Z-transform is of the form $X(z) = \sum_{n=-\infty}^{-1} x[n] z^{-n}$. The ROC is typically an **inside region** of a circle in the $z$-plane.
    *   **Example:** For an anti-causal exponential sequence $x[n] = -a^n u[-n-1]$ (where $u[n]$ is the unit step function), the Z-transform is $X(z) = \frac{1}{1 - az^{-1}} = \frac{z}{z-a}$. The ROC is $|z| < |a|$. This means the ROC is the region inside the circle of radius $|a|$.

*   **Finite Duration Sequences:** For finite duration sequences, the ROC is the entire $z$-plane except possibly $z=0$ or $z=\infty$.

### 3.2.3 Properties of ROC

1.  **ROC is an annulus:** The ROC is always an annulus (a ring-shaped region) in the $z$-plane, centered at the origin. It can be a disk (including or excluding the boundary) or the entire $z$-plane except for the origin or infinity.
2.  **The origin (z=0):** The ROC may or may not include $z=0$.
3.  **Infinity ($\text{z}=\infty$):** The ROC may or may not include $z=\infty$.
4.  **Poles and ROC:** The ROC does not contain any poles of $X(z)$.
5.  **Connectivity:** If $X(z)$ converges for some $z_0$, then it converges for all $z$ with $|z| = |z_0|$. This implies the ROC is a connected region.
6.  **ROC and Causality:**
    *   If $x[n]$ is causal, the ROC is of the form $|z| > r$ (outside a circle).
    *   If $x[n]$ is anti-causal, the ROC is of the form $|z| < r$ (inside a circle).
    *   If $x[n]$ is finite duration, the ROC is the entire $z$-plane except possibly $z=0$ or $z=\infty$.
7.  **ROC and Stability:** A system is Bounded-Input Bounded-Output (BIBO) stable if and only if the ROC of its impulse response $h[n]$ includes the unit circle ($|z|=1$).

**Important Point to Remember:** The ROC is determined by the impulse response of the system, not just the algebraic form of its Z-transform.

**Textbook Reference:**
*   **Haykin & Van Veen:** Section 7.3 elaborates on the ROC, detailing its properties and how it's determined for various types of sequences, including its relation to system stability.
*   **Ogata:** Section 1.3 discusses the ROC and its significance in determining the causality and stability of discrete-time systems.

## 3.3 Properties of the Z-Transform

The Z-transform possesses several useful properties that simplify the analysis of discrete-time signals and systems.

| Property              | Time Domain $x[n]$     | Z-Domain $X(z)$        | ROC of $X(z)$                               | Notes                                         |
| :-------------------- | :--------------------- | :--------------------- | :------------------------------------------ | :-------------------------------------------- |
| **Linearity**         | $ax[n] + by[n]$        | $aX(z) + bY(z)$        | Intersection of ROCs of $X(z)$ and $Y(z)$ | Valid for all $z$.                            |
| **Time Shifting**     | $x[n-k]$               | $z^{-k} X(z)$          | Same ROC as $X(z)$ (possibly excluding $z=0$ or $z=\infty$ if $k \ne 0$) | For $k>0$, right shift; for $k<0$, left shift. |
| **Multiplication by $a^n$** | $a^n x[n]$             | $X(z/a)$               | $|z/a|$ is in ROC of $X(z)$, so $|z|$ is in ROC of $X(z/a)$ | Scales the ROC.                             |
| **Multiplication by $n$** | $n x[n]$               | $-z \frac{dX(z)}{dz}$  | Same ROC as $X(z)$ (possibly excluding poles/zeros at $z=0$) | Requires differentiation.                       |
| **Convolution**       | $x[n] * y[n]$          | $X(z) Y(z)$            | Intersection of ROCs of $X(z)$ and $Y(z)$ | Crucial for system analysis (output = input \* impulse response). |
| **Conjugation**       | $x^*[n]$               | $X^*(z^*)$             | Same ROC as $X(z)$                          |                                               |
| **Time Reversal**     | $x[-n]$                | $X(1/z)$               | $1/|z|$ is in ROC of $X(z)$, so $|z|$ is in ROC of $X(1/z)$ | Scales ROC by $1/|z|$.                      |
| **Summation**         | $\sum_{k=-\infty}^{n} x[k]$ | $\frac{1}{1-z^{-1}} X(z)$ | Intersection of ROC of $X(z)$ and $|z|>1$   |                                               |

**Examples of Properties:**

1.  **Linearity:** If $x_1[n] \leftrightarrow X_1(z)$ and $x_2[n] \leftrightarrow X_2(z)$, then $a x_1[n] + b x_2[n] \leftrightarrow a X_1(z) + b X_2(z)$.
2.  **Time Shifting:** If $x[n] \leftrightarrow X(z)$, then $x[n-2] \leftrightarrow z^{-2} X(z)$.
3.  **Multiplication by $n$:** If $x[n] \leftrightarrow X(z)$, then $n x[n] \leftrightarrow -z \frac{dX(z)}{dz}$.
    *   Consider $x[n] = u[n]$. $X(z) = \frac{1}{1-z^{-1}}$.
    *   Then $n u[n] \leftrightarrow -z \frac{d}{dz} \left( \frac{1}{1-z^{-1}} \right) = -z \frac{d}{dz} \left( \frac{z}{z-1} \right) = -z \frac{(z-1)(1) - z(1)}{(z-1)^2} = -z \frac{-1}{(z-1)^2} = \frac{z}{(z-1)^2}$.
4.  **Convolution:** If $y[n] = x[n] * h[n]$, then $Y(z) = X(z) H(z)$. This is the discrete-time equivalent of the Laplace transform's convolution property.

**Textbook Reference:**
*   **Haykin & Van Veen:** Section 7.4 details these properties, providing derivations and examples of their application in simplifying complex calculations.
*   **Ogata:** Chapter 1, Section 1.2, covers the fundamental properties of the Z-transform, emphasizing their utility in transforming difference equations into algebraic equations.
*   **Nise:** While primarily focused on continuous-time systems, Nise's text (Chapter 4 on Laplace Transforms) covers analogous properties that can be conceptually mapped to the Z-transform, highlighting the universality of these mathematical tools in system analysis.

**Course Outcome Alignment:** This section directly supports CO3 by demonstrating how the Z-transform simplifies operations on discrete-time signals and systems, which are represented in the Z-domain.

## 3.4 Inverse Z-Transform

The inverse Z-transform converts a Z-domain function $X(z)$ back into its corresponding time-domain sequence $x[n]$. This is essential for determining the output of a system given its transfer function and input, or for finding the impulse response.

There are several methods for computing the inverse Z-transform:

### 3.4.1 Power Series Expansion (Long Division)

This method involves performing long division of the numerator of $X(z)$ by its denominator in powers of $z^{-1}$. The coefficients of the resulting power series directly correspond to the sequence $x[n]$.

*   **Procedure:**
    1.  Ensure $X(z)$ is expressed as a ratio of polynomials in $z^{-1}$.
    2.  Divide the numerator by the denominator in ascending powers of $z^{-1}$.
    3.  The coefficient of $(z^{-1})^n$ in the resulting series is $x[n]$.

*   **Example:**
    Find the inverse Z-transform of $X(z) = \frac{1}{1 - \frac{1}{2}z^{-1}}$ with ROC $|z| > \frac{1}{2}$.
    Using long division:
    ```
          1
    1 - 0.5z^-1 | 1
                - 1 + 0.5z^-1
                -------------
                      0.5z^-1
    ```
    This is incorrect. We should continue the division.
    ```
          1 + 0.5z^-1 + 0.25z^-2 + ...
    1 - 0.5z^-1 | 1
                - (1 - 0.5z^-1)
                -------------
                      0.5z^-1
                    - (0.5z^-1 - 0.25z^-2)
                    -------------
                          0.25z^-2
    ```
    The series is $1 + 0.5z^{-1} + 0.25z^{-2} + \dots$.
    So, $x[n] = (\frac{1}{2})^n u[n]$.

*   **Important:** This method is straightforward for causal sequences. For anti-causal sequences, you would expand in descending powers of $z$.

### 3.4.2 Partial Fraction Expansion

This method is applicable when $X(z)$ can be expressed as a ratio of polynomials in $z$.

*   **Procedure:**
    1.  Express $X(z)/z$ as a sum of simpler fractions. This is typically done by factoring the denominator of $X(z)/z$.
    2.  Multiply by $z$ to get $X(z)$.
    3.  Use the known Z-transform pairs and properties to find the inverse transform of each term.

*   **Example:**
    Find the inverse Z-transform of $X(z) = \frac{z}{(z-0.5)(z-0.2)}$ with ROC $|z| > 0.5$.
    Consider $X(z)/z$:
    $\frac{X(z)}{z} = \frac{1}{(z-0.5)(z-0.2)}$
    Using partial fraction expansion:
    $\frac{1}{(z-0.5)(z-0.2)} = \frac{A}{z-0.5} + \frac{B}{z-0.2}$
    $1 = A(z-0.2) + B(z-0.5)$
    Let $z=0.5$: $1 = A(0.5-0.2) \implies 1 = 0.3A \implies A = \frac{1}{0.3} = \frac{10}{3}$.
    Let $z=0.2$: $1 = B(0.2-0.5) \implies 1 = -0.3B \implies B = -\frac{1}{0.3} = -\frac{10}{3}$.
    So, $\frac{X(z)}{z} = \frac{10/3}{z-0.5} - \frac{10/3}{z-0.2}$.
    $X(z) = \frac{10}{3} \frac{z}{z-0.5} - \frac{10}{3} \frac{z}{z-0.2}$.
    Using the pair $a^n u[n] \leftrightarrow \frac{z}{z-a}$ and the ROC information (ROC $|z|>0.5$ indicates causal sequences):
    $x[n] = \frac{10}{3} (0.5)^n u[n] - \frac{10}{3} (0.2)^n u[n]$.

*   **Important:** The choice of ROC is critical for partial fraction expansion. If the ROC was $|z| < 0.2$, the sequence would be anti-causal, and we would use the pair $-a^n u[-n-1] \leftrightarrow \frac{z}{z-a}$ for $|z|<|a|$.

### 3.4.3 Contour Integration (Complex Analysis)

This is the most general method, based on Cauchy's residue theorem from complex analysis.

*   **Formula:**
    $x[n] = \frac{1}{2\pi j} \oint_{C} X(z) z^{n-1} dz$
    where $C$ is a closed contour in the ROC that encircles the origin.

*   **Procedure:**
    1.  Identify the poles of $X(z) z^{n-1}$ within the ROC.
    2.  Calculate the residues of $X(z) z^{n-1}$ at these poles.
    3.  Sum the residues and multiply by $1/(2\pi j)$.

*   **Example:**
    For a simple pole at $z=p$, the residue is $\lim_{z \to p} (z-p) [X(z) z^{n-1}]$.

*   **Textbook Reference:**
    *   **Haykin & Van Veen:** Section 7.7 explains contour integration for the inverse Z-transform, providing detailed examples of its application, especially for complex ROCs.
    *   **Oppenheim, Willsky & Nawab:** Chapter 10 provides a thorough treatment of the inverse Z-transform using contour integration, emphasizing its theoretical underpinnings.

**Important Point to Remember:** The ROC is essential for uniquely determining the time-domain sequence from its Z-transform. Different ROCs correspond to different time-domain signals, even if the algebraic expression for $X(z)$ is the same.

**Course Outcome Alignment:** This section is fundamental to CO3, as it provides the methods to translate system representations back from the Z-domain to the time domain.

## Practice Questions and Answers

**Question 1:**
Find the Z-transform and its ROC for the sequence $x[n] = 2^n u[n-1]$.

**Solution:**
We can write $x[n]$ as $2^n u[n-1] = 2 \cdot 2^{n-1} u[n-1]$.
Let $y[n] = 2^n u[n]$. Then $Y(z) = \frac{z}{z-2}$ with ROC $|z|>2$.
The sequence $x[n]$ is a right shift of $y[n]$ by 1.
Using the time-shifting property: $x[n] = y[n-1] \leftrightarrow z^{-1} Y(z)$.
$X(z) = z^{-1} \left(\frac{z}{z-2}\right) = \frac{1}{z-2}$.
The ROC is the same as $Y(z)$, which is $|z|>2$.

**Answer:** $X(z) = \frac{1}{z-2}$, ROC: $|z|>2$.

**Question 2:**
For a system with impulse response $h[n] = a^n u[n]$, show that the Z-transform of $h[n]$ is $H(z) = \frac{z}{z-a}$ and determine its ROC. Is the system BIBO stable?

**Solution:**
$h[n] = a^n u[n] = a^0 u[0] + a^1 u[1] + a^2 u[2] + \dots$
$H(z) = \sum_{n=0}^{\infty} h[n] z^{-n} = \sum_{n=0}^{\infty} a^n z^{-n} = \sum_{n=0}^{\infty} (az^{-1})^n$
This is a geometric series. It converges if $|az^{-1}| < 1$, which means $|z| > |a|$.
The sum of an infinite geometric series $1 + r + r^2 + \dots$ is $\frac{1}{1-r}$ for $|r|<1$.
So, $H(z) = \frac{1}{1 - az^{-1}} = \frac{z}{z-a}$.
The ROC is $|z| > |a|$.

For BIBO stability, the ROC must include the unit circle, i.e., $|z|=1$.
This condition is met if $|a| < 1$.

**Answer:** $H(z) = \frac{z}{z-a}$, ROC: $|z| > |a|$. The system is BIBO stable if $|a| < 1$.

**Question 3:**
Find the inverse Z-transform of $X(z) = \frac{1}{1-z^{-1}}$ with ROC $|z|>1$.

**Solution:**
Using power series expansion (long division):
$X(z) = \frac{1}{1-z^{-1}} = 1 + z^{-1} + z^{-2} + z^{-3} + \dots$
The coefficient of $z^{-n}$ is $x[n]$.
Thus, $x[n] = 1$ for $n \ge 0$, and $x[n] = 0$ for $n < 0$.
This is the unit step sequence $u[n]$.

Alternatively, using known pairs:
The form $\frac{1}{1-az^{-1}}$ with ROC $|z|>|a|$ corresponds to $a^n u[n]$.
Here $a=1$. So $x[n] = 1^n u[n] = u[n]$.

**Answer:** $x[n] = u[n]$.

**Question 4:**
Find the inverse Z-transform of $X(z) = \frac{z}{z^2 - 3z + 2}$ with ROC $|z|>2$.

**Solution:**
Factor the denominator: $z^2 - 3z + 2 = (z-1)(z-2)$.
So, $X(z) = \frac{z}{(z-1)(z-2)}$.
Consider $X(z)/z$: $\frac{X(z)}{z} = \frac{1}{(z-1)(z-2)}$.
Partial Fraction Expansion:
$\frac{1}{(z-1)(z-2)} = \frac{A}{z-1} + \frac{B}{z-2}$
$1 = A(z-2) + B(z-1)$
Let $z=1$: $1 = A(1-2) \implies 1 = -A \implies A = -1$.
Let $z=2$: $1 = B(2-1) \implies 1 = B \implies B = 1$.
So, $\frac{X(z)}{z} = \frac{-1}{z-1} + \frac{1}{z-2}$.
$X(z) = \frac{-z}{z-1} + \frac{z}{z-2}$.
Since the ROC is $|z|>2$, both sequences are causal.
Using the pair $a^n u[n] \leftrightarrow \frac{z}{z-a}$:
$x[n] = -1^n u[n] + 2^n u[n] = -u[n] + 2^n u[n] = (2^n - 1) u[n]$.

**Answer:** $x[n] = (2^n - 1) u[n]$.

## Key Takeaways and Summary

*   **Z-Transform:** A mathematical tool to analyze discrete-time signals and systems by transforming them from the time domain to the complex $z$-domain.
*   **ROC:** Crucial for defining the uniqueness of the Z-transform. It indicates the values of $z$ for which the transform converges and provides information about the causality and stability of the system.
    *   ROC is an annulus.
    *   ROC does not contain poles.
    *   ROC includes the unit circle ($|z|=1$) for BIBO stable systems.
*   **Properties:** Linearity, time shifting, multiplication by $a^n$, multiplication by $n$, and convolution are essential properties that simplify analysis. The convolution property is particularly important for system analysis ($Y(z) = X(z)H(z)$).
*   **Inverse Z-Transform:** Methods like power series expansion, partial fraction expansion, and contour integration are used to revert from the $z$-domain to the time domain. The ROC guides the choice of the correct inverse transform.

Understanding the Z-transform, its ROC, properties, and inverse transform is fundamental for representing and analyzing discrete-time signals and systems, directly supporting CO3. This module lays the groundwork for further topics in digital signal processing and control systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
