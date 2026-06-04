---
title: "Stability analysis of closed-loop system in the z-plane"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 1: Analysis of Sampled Data Systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368c9"
status: "completed"
scrapedAt: "2026-05-23T16:36:01.166Z"
---
# DISCRETE TIME CONTROL SYSTEMS - Module 1: Analysis of Sampled Data Systems

## Topic: Stability Analysis of Closed-Loop System in the z-plane

---

### **Introduction**

The stability of a closed-loop sampled-data system is a crucial aspect of its design and operation. In discrete-time control systems, stability is fundamentally determined by the location of the **poles** of the system's **closed-loop transfer function** in the z-plane. This module focuses on understanding and analyzing this relationship to ensure the desired performance and prevent undesirable oscillations or unbounded outputs.

---

### **1. Core Concepts and Definitions**

#### 1.1 Sampled Data Systems

*   **Definition:** A sampled-data system is a system that contains one or more signals that are sampled periodically by an analog-to-digital converter (ADC) before being processed by a digital controller.
*   **Key Components:** Sampler, Digital Controller, Digital-to-Analog Converter (DAC), Continuous-time Plant.
*   **Importance of Sampling:** Sampling converts continuous-time signals into discrete-time sequences, which can be processed by digital controllers. The sampling frequency ($f_s$) and sampling period ($T = 1/f_s$) are critical parameters.

#### 1.2 Discrete-Time Transfer Function (Pulse Transfer Function)

*   **Definition:** The pulse transfer function represents the input-output relationship of a discrete-time system in the z-domain. It is the ratio of the z-transform of the output sequence to the z-transform of the input sequence, assuming zero initial conditions.
*   **General Form:** $G(z) = \frac{Y(z)}{U(z)} = \frac{b_0 z^m + b_1 z^{m-1} + \dots + b_m}{a_0 z^n + a_1 z^{n-1} + \dots + a_n}$
*   **Characteristic Equation:** For a linear time-invariant (LTI) discrete-time system, the characteristic equation is the denominator polynomial of its pulse transfer function set to zero: $a_0 z^n + a_1 z^{n-1} + \dots + a_n = 0$.

#### 1.3 Closed-Loop System in Discrete Time

*   **Block Diagram:** Consider a standard feedback control system with a digital controller $C(z)$ and a discrete-time equivalent of the plant $G(z)$.
    *   Input: $R(z)$ (Reference Signal)
    *   Error Signal: $E(z) = R(z) - Y(z)$ (assuming unity feedback)
    *   Controller Output: $U(z) = C(z)E(z)$
    *   Plant Output: $Y(z) = G(z)U(z)$
*   **Closed-Loop Transfer Function (CLTF):**
    $T(z) = \frac{Y(z)}{R(z)} = \frac{C(z)G(z)}{1 + C(z)G(z)}$
*   **The denominator of the CLTF, $1 + C(z)G(z)$, is crucial for stability analysis.**

#### 1.4 Stability in the z-plane

*   **Definition:** A discrete-time system is considered **stable** if its output remains bounded for all bounded inputs. For a Linear Time-Invariant (LTI) system, stability is determined by the location of the **poles** of its transfer function.
*   **z-plane:** The complex plane used to represent the z-transforms of discrete-time signals and systems. The horizontal axis represents the real part of $z$, and the vertical axis represents the imaginary part of $z$.
*   **Pole Locations and Stability:**
    *   **Stable:** All poles of the closed-loop transfer function lie **inside the unit circle** ($|z| < 1$). This means the magnitude of the poles is less than 1.
    *   **Marginally Stable:** At least one pole lies **on the unit circle** ($|z| = 1$) and all other poles lie inside the unit circle. If a pole is at $z=1$, the system might exhibit a constant error for a step input. If a pole is at $z=-1$, it might exhibit sustained oscillations. Repeated poles on the unit circle lead to instability.
    *   **Unstable:** At least one pole lies **outside the unit circle** ($|z| > 1$).

---

### **2. Stability Analysis of Closed-Loop Systems**

The primary task is to determine the roots of the characteristic equation $1 + C(z)G(z) = 0$. Let the closed-loop transfer function be $T(z) = \frac{Y(z)}{R(z)} = \frac{N(z)}{D(z)}$, where $D(z) = 1 + C(z)G(z)$ is the characteristic polynomial. The roots of $D(z) = 0$ are the closed-loop poles.

#### 2.1 Methods for Stability Analysis

Two main approaches are used to determine if the roots of the characteristic polynomial lie inside the unit circle without explicitly calculating them:

1.  **Jury Stability Test (or Jury's Stability Criterion):** This is a direct method that uses the coefficients of the characteristic polynomial to determine stability. It is analogous to the Routh-Hurwitz criterion for continuous-time systems.
2.  **Bilinear Transformation and Routh-Hurwitz Criterion:** This method transforms the problem from the z-plane to the s-plane, where the well-established Routh-Hurwitz criterion can be applied.

---

### **3. Jury Stability Test**

The Jury stability test is a set of necessary and sufficient conditions for the roots of a polynomial to lie inside the unit circle.

Let the characteristic polynomial be:
$P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$

**Conditions for Stability (All roots inside the unit circle):**

1.  **$P(1) > 0$**
    *   $a_n + a_{n-1} + \dots + a_1 + a_0 > 0$
    *   This is equivalent to checking the system's response to a unit step input in the long run (steady state).
2.  **$(-1)^n P(-1) > 0$**
    *   $a_0 - a_1 + a_2 - \dots + (-1)^n a_n > 0$
    *   This relates to the alternating sign sum of coefficients and checks for oscillatory behavior.
3.  **$|a_0| < |a_n|$**
    *   The magnitude of the constant term must be less than the magnitude of the leading coefficient. This ensures that if $z$ is very small, the polynomial's magnitude is dominated by the constant term, and if $z$ is very large, it's dominated by the leading term.

4.  **Interlacing Conditions (for $n \ge 2$):**
    These conditions involve constructing a sequence of lower-order polynomials using a determinant-based formula. For a polynomial of degree $n$, we construct $n-1$ auxiliary polynomials of degrees $n-1, n-2, \dots, 1$.

    Let $P_k(z) = a_{k,0} z^k + a_{k,1} z^{k-1} + \dots + a_{k,k-1} z + a_{k,k}$ be the $k$-th order polynomial in the sequence.
    We start with $P_0(z) = P(z)$.

    The coefficients of the next polynomial $P_1(z)$ (degree $n-1$) are computed as follows:
    $a_{1,j} = a_{0,0} a_{0,n-j} - a_{0,n} a_{0,j}$ for $j = 0, 1, \dots, n-1$.
    Note: This definition can be confusing. A more common and less error-prone method uses a table or a specific formula.

    **Alternative Jury Table Method:**

    Let $P(z) = a_0 z^n + a_1 z^{n-1} + \dots + a_{n-1} z + a_n$. (Note the reversal of coefficients compared to some sources; here $a_0$ is the leading coefficient). For stability, we need roots inside the unit circle. Let's stick to the standard notation where $a_n$ is the leading coefficient of $z^n$.

    Let $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$.
    For stability, we need all roots to satisfy $|z| < 1$.

    **The conditions are:**

    *   **Condition 1:** $P(1) > 0 \implies a_n + a_{n-1} + \dots + a_1 + a_0 > 0$
    *   **Condition 2:** $(-1)^n P(-1) > 0 \implies a_0 - a_1 + a_2 - \dots + (-1)^n a_n > 0$
    *   **Condition 3:** $|a_0| < |a_n|$

    For $n \ge 2$, construct the following table:

    | Row | $z^n$       | $z^{n-1}$   | $z^{n-2}$   | ... | $z^1$       | $z^0$       |
    | :-- | :---------- | :---------- | :---------- | :-- | :---------- | :---------- |
    | 0   | $a_n$       | $a_{n-1}$   | $a_{n-2}$   | ... | $a_1$       | $a_0$       |
    | 1   | $a_0$       | $a_1$       | $a_2$       | ... | $a_{n-1}$   | $a_n$       |

    Now, calculate the coefficients for the next row (row 2, degree $n-1$) using the formula for $b_k$:
    $b_k = a_{n} a_k - a_0 a_{n-k}$ for $k = 0, 1, \dots, n-1$.
    Note: This formula is for the row coefficients. The polynomial coefficients for row 1 are $a_0, a_1, \dots, a_n$ which are the coefficients of $P(z)$ reversed. So, $a_{0,j}$ refers to the coefficient of $z^j$ in the $j$-th row polynomial.

    Let's redefine the table setup for clarity using the notation from Ogata.
    Let the characteristic polynomial be $P(z) = a_0 z^n + a_1 z^{n-1} + \dots + a_{n-1} z + a_n$.
    For stability, all roots must lie inside the unit circle.

    **Jury's Stability Criterion Conditions:**

    1.  $P(1) > 0 \implies a_0 + a_1 + \dots + a_n > 0$
    2.  $(-1)^n P(-1) > 0 \implies a_n - a_{n-1} + \dots + (-1)^{n-1}a_1 + (-1)^n a_0 > 0$
    3.  $|a_n| < |a_0|$
    4.  For $k = 1, 2, \dots, n-1$:
        $\begin{vmatrix} a_0 & a_n \\ a_1 & a_{n-1} \end{vmatrix} > 0$
        $\begin{vmatrix} a_0 & a_n & a_{n-1} \\ a_1 & a_{n-1} & a_{n-2} \\ a_2 & a_{n-2} & a_{n-3} \end{vmatrix} > 0$
        ...
        And so on, until we have a polynomial of degree 1.

    **A more structured approach using the Jury Array (as in Ogata):**

    Let $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$.
    **Conditions:**
    1.  $P(1) > 0$
    2.  $(-1)^n P(-1) > 0$
    3.  $|a_0| < |a_n|$

    For $n \ge 2$, we form a sequence of polynomials of decreasing degree: $p_n(z) = P(z)$, $p_{n-1}(z)$, ..., $p_1(z)$.
    Let $p_k(z) = \sum_{i=0}^k c_{k,i} z^i$.

    **Construction of the Jury Array:**

    | $k$ | $c_{k,0}$   | $c_{k,1}$   | $c_{k,2}$   | ... | $c_{k,k-1}$ | $c_{k,k}$   |
    | :-- | :---------- | :---------- | :---------- | :-- | :---------- | :---------- |
    | $n$ | $a_n$       | $a_{n-1}$   | $a_{n-2}$   | ... | $a_1$       | $a_0$       |
    | $n-1$| $a_0$       | $a_1$       | $a_2$       | ... | $a_{n-1}$   | $a_n$       |

    The coefficients of the next row ($k=n-1$) are calculated as:
    $c_{n-1, i} = \frac{c_{n,0} c_{n, k-i} - c_{n, k} c_{n, i}}{c_{n,0} - c_{n,k}}$ (where $k=n$ for row $n$, and $i$ goes from $0$ to $n-1$).
    Let's re-write the generation of the next row's coefficients:
    Let row $k$ have coefficients $[c_{k,0}, c_{k,1}, \dots, c_{k,k}]$.
    The next row ($k-1$) coefficients $[c_{k-1,0}, c_{k-1,1}, \dots, c_{k-1,k-1}]$ are calculated by:
    $c_{k-1, i} = c_{k,0} - \frac{c_{k,k} - c_{k,0}}{c_{k,k} - c_{k,0}} c_{k,i} = c_{k,0} - \frac{c_{k,k}-c_{k,0}}{c_{k,k}-c_{k,0}} c_{k,i}$  This is incorrect.

    **Correct Coefficient Calculation for Jury Array (as in Ogata, Chapter 4):**

    Let $p_k(z) = \sum_{j=0}^k c_{k,j} z^j$.
    Row $k$ is obtained from row $k+1$ as follows:
    $c_{k,j} = \frac{c_{k+1,0} c_{k+1,j} - c_{k+1,k+1} c_{k+1,k-j}}{c_{k+1,0} - c_{k+1,k+1}}$ for $j = 0, 1, \dots, k$.
    The condition to check for stability at each step is that $c_{k,0} > |c_{k,k}|$.

    **Jury Stability Criterion (Consolidated):**
    Let $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$.

    **Necessary Conditions:**
    1.  $P(1) > 0$
    2.  $(-1)^n P(-1) > 0$
    3.  $|a_0| < |a_n|$

    **Sufficient Conditions (for $n \ge 2$):**
    For $k = 1, 2, \dots, n-1$, form the auxiliary polynomials $p_{k}(z)$ whose coefficients are derived from the previous polynomial $p_{k+1}(z)$ using the relation:
    Let $p_{k+1}(z) = c_{k+1,0} z^{k+1} + c_{k+1,1} z^k + \dots + c_{k+1,k} z + c_{k+1,k+1}$.
    Then, $p_k(z) = \sum_{j=0}^k c_{k,j} z^j$, where
    $c_{k,j} = \frac{c_{k+1,0} c_{k+1,j} - c_{k+1,k+1} c_{k+1,k-j}}{c_{k+1,0} - c_{k+1,k+1}}$ for $j=0, 1, \dots, k$.

    The stability condition that must hold for each auxiliary polynomial $p_k(z)$ is:
    $c_{k,0} > |c_{k,k}|$

    **Summary of Jury Test Steps:**
    1.  Obtain the characteristic polynomial $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_0$.
    2.  Check $P(1) > 0$.
    3.  Check $(-1)^n P(-1) > 0$.
    4.  Check $|a_0| < |a_n|$.
    5.  If $n \ge 2$, construct the Jury array.
        *   Row $n$: $[a_n, a_{n-1}, \dots, a_1, a_0]$
        *   Row $n-1$: $[a_0, a_1, \dots, a_{n-1}, a_n]$
        *   For $k = n-1$ down to 1: Calculate the coefficients of row $k$ from row $k+1$ using the formula.
        *   For each row $k$ (from $n-1$ down to 1), check if the first coefficient ($c_{k,0}$) is strictly greater than the absolute value of the last coefficient ($c_{k,k}$).
    6.  If all these conditions are met, the system is stable.

**Example:**
Consider the closed-loop characteristic polynomial $1 + C(z)G(z) = z^2 - 0.5z + 0.2$.
Here, $n=2$, $a_2 = 1$, $a_1 = -0.5$, $a_0 = 0.2$.

1.  **$P(1) > 0$**: $P(1) = 1 - 0.5 + 0.2 = 0.7 > 0$. (Satisfied)
2.  **$(-1)^2 P(-1) > 0$**: $P(-1) = (-1)^2 - 0.5(-1) + 0.2 = 1 + 0.5 + 0.2 = 1.7 > 0$. (Satisfied)
3.  **$|a_0| < |a_n|$**: $|0.2| < |1| \implies 0.2 < 1$. (Satisfied)
4.  **Auxiliary Polynomial (Jury Array):**
    *   Row 2 (n=2): $[a_2, a_1, a_0] = [1, -0.5, 0.2]$
    *   Row 1 (k=1): Coefficients $c_{1,0}$ and $c_{1,1}$.
        Using the formula: $c_{1,j} = \frac{c_{2,0} c_{2,j} - c_{2,2} c_{2,1-j}}{c_{2,0} - c_{2,2}}$ for $j=0, 1$.
        $c_{2,0} = 1$, $c_{2,1} = -0.5$, $c_{2,2} = 0.2$.
        $c_{1,0} = \frac{c_{2,0} c_{2,0} - c_{2,2} c_{2,2}}{c_{2,0} - c_{2,2}} = \frac{(1)(1) - (0.2)(0.2)}{1 - 0.2} = \frac{1 - 0.04}{0.8} = \frac{0.96}{0.8} = 1.2$
        $c_{1,1} = \frac{c_{2,0} c_{2,1} - c_{2,2} c_{2,0}}{c_{2,0} - c_{2,2}} = \frac{(1)(-0.5) - (0.2)(1)}{1 - 0.2} = \frac{-0.5 - 0.2}{0.8} = \frac{-0.7}{0.8} = -0.875$
    *   Check $c_{1,0} > |c_{1,1}|$: $1.2 > |-0.875| \implies 1.2 > 0.875$. (Satisfied)

    Since all conditions are satisfied, the system is stable. The roots of $z^2 - 0.5z + 0.2 = 0$ are approximately $0.25 \pm j 0.645$, which lie inside the unit circle.

---

### **4. Bilinear Transformation and Routh-Hurwitz Criterion**

This method leverages the well-understood Routh-Hurwitz criterion for continuous-time systems by transforming the characteristic polynomial from the z-plane to the s-plane.

#### 4.1 Bilinear Transformation

The bilinear transformation is given by:
$z = \frac{1 + sT_b}{1 - sT_b}$
or, more commonly in stability analysis:
$z = \frac{1 + s}{1 - s}$ (with $T_b = 1$, which is sufficient for stability analysis as it preserves the relative location of poles with respect to the unit circle).

The inverse transformation is:
$s = \frac{z - 1}{z + 1}$

#### 4.2 Transformation of the Characteristic Polynomial

Let the characteristic polynomial in the z-plane be $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$.
Substitute $z = \frac{1+s}{1-s}$ into $P(z)$:
$P\left(\frac{1+s}{1-s}\right) = a_n \left(\frac{1+s}{1-s}\right)^n + a_{n-1} \left(\frac{1+s}{1-s}\right)^{n-1} + \dots + a_1 \left(\frac{1+s}{1-s}\right) + a_0 = 0$.

To apply the Routh-Hurwitz criterion, we need a polynomial in $s$ with positive coefficients. Multiply the entire equation by $(1-s)^n$ to clear the denominators:
$a_n (1+s)^n + a_{n-1} (1+s)^{n-1}(1-s) + \dots + a_1 (1+s)(1-s)^{n-1} + a_0 (1-s)^n = 0$.

Let this transformed polynomial be $Q(s) = A_m s^m + A_{m-1} s^{m-1} + \dots + A_1 s + A_0$.
The degree of the transformed polynomial $Q(s)$ is the same as the degree of $P(z)$, which is $n$.

#### 4.3 Routh-Hurwitz Criterion

The Routh-Hurwitz criterion states that for a polynomial $Q(s) = A_n s^n + A_{n-1} s^{n-1} + \dots + A_1 s + A_0$, all roots lie in the left-half of the s-plane (i.e., $\text{Re}(s) < 0$) if and only if:

1.  **All coefficients $A_i$ are positive.** (Necessary condition). If any coefficient is zero or negative, the system is unstable.
2.  **All elements in the first column of the Routh array are positive.**

**Routh Array Construction:**

The Routh array is constructed from the coefficients of $Q(s)$:

| $s^n$     | $A_n$     | $A_{n-2}$   | $A_{n-4}$   | ... |
| :-------- | :-------- | :---------- | :---------- | :-- |
| $s^{n-1}$ | $A_{n-1}$ | $A_{n-3}$   | $A_{n-5}$   | ... |
| $s^{n-2}$ | $b_1$     | $b_2$       | $b_3$       | ... |
| $s^{n-3}$ | $c_1$     | $c_2$       | $c_3$       | ... |
| ...       | ...       | ...         | ...         | ... |
| $s^0$     | $D_1$     |             |             |     |

The elements $b_i, c_i, \dots$ are calculated as follows:
$b_1 = -\frac{\begin{vmatrix} A_n & A_{n-2} \\ A_{n-1} & A_{n-3} \end{vmatrix}}{A_{n-1}} = \frac{A_{n-1}A_{n-2} - A_n A_{n-3}}{A_{n-1}}$
$b_2 = -\frac{\begin{vmatrix} A_n & A_{n-4} \\ A_{n-1} & A_{n-5} \end{vmatrix}}{A_{n-1}} = \frac{A_{n-1}A_{n-4} - A_n A_{n-5}}{A_{n-1}}$
And so on for $b_3, b_4, \dots$.

The next row is calculated similarly:
$c_1 = -\frac{\begin{vmatrix} A_{n-1} & A_{n-3} \\ b_1 & b_2 \end{vmatrix}}{b_1} = \frac{b_1 A_{n-3} - A_{n-1} b_2}{b_1}$
$c_2 = -\frac{\begin{vmatrix} A_{n-1} & A_{n-5} \\ b_1 & b_3 \end{vmatrix}}{b_1} = \frac{b_1 A_{n-5} - A_{n-1} b_3}{b_1}$

The process continues until the $s^0$ row is reached.

**Interpretation:**
If there are no sign changes in the first column of the Routh array, all roots are in the left-half plane, and the system is stable.
The number of sign changes in the first column of the Routh array equals the number of roots in the right-half s-plane (i.e., outside the unit circle in the z-plane).

**Special Cases for Routh-Hurwitz:**
*   **Zero in the first column:** Replace it with a small positive number $\epsilon$ and proceed.
*   **Entire row of zeros:** This indicates roots symmetrically located around the origin or on the unit circle ($z=1$ or $z=-1$ in the z-plane). The auxiliary polynomial formed by the coefficients of the row above the row of zeros corresponds to the roots on the unit circle.

**Example (using the same characteristic polynomial):**
$P(z) = z^2 - 0.5z + 0.2$.
Substitute $z = \frac{1+s}{1-s}$:
$\left(\frac{1+s}{1-s}\right)^2 - 0.5\left(\frac{1+s}{1-s}\right) + 0.2 = 0$.
Multiply by $(1-s)^2$:
$(1+s)^2 - 0.5(1+s)(1-s) + 0.2(1-s)^2 = 0$.
Expand:
$(1 + 2s + s^2) - 0.5(1 - s^2) + 0.2(1 - 2s + s^2) = 0$.
$1 + 2s + s^2 - 0.5 + 0.5s^2 + 0.2 - 0.4s + 0.2s^2 = 0$.
Group terms by powers of $s$:
$(1 + 0.5 + 0.2)s^2 + (2 - 0.4)s + (1 - 0.5 + 0.2) = 0$.
$1.7s^2 + 1.6s + 0.7 = 0$.

Now, apply the Routh-Hurwitz criterion to $Q(s) = 1.7s^2 + 1.6s + 0.7$.
$A_2 = 1.7$, $A_1 = 1.6$, $A_0 = 0.7$.

1.  **All coefficients positive?** Yes, 1.7, 1.6, 0.7 are all positive.
2.  **Routh Array:**
    | $s^2$ | 1.7 | 0.7 |
    | :---- | :---- | :---- |
    | $s^1$ | 1.6 | 0   |
    | $s^0$ | 0.7 |     |

    The first column elements are 1.7, 1.6, 0.7. All are positive.

Since both conditions are satisfied, the system is stable. This matches the result from the Jury test.

#### 4.4 Mapping Between z-plane and s-plane

The bilinear transformation maps the:
*   **Left-half s-plane** ($\text{Re}(s) < 0$) to the **interior of the unit circle** ($|z| < 1$).
*   **Right-half s-plane** ($\text{Re}(s) > 0$) to the **exterior of the unit circle** ($|z| > 1$).
*   **Imaginary axis of the s-plane** ($\text{Re}(s) = 0$) to the **unit circle** ($|z| = 1$).

This mapping ensures that stability analysis in the s-plane using Routh-Hurwitz is directly equivalent to stability analysis in the z-plane.

---

### **5. Mapping of Stability Regions**

*   **Unit Circle in z-plane $\leftrightarrow$ Imaginary Axis in s-plane:**
    If $z = e^{j\omega T}$, then $s = \sigma + j\omega'$.
    Substituting $z = e^{j\theta}$ (for $|z|=1$) into $s = \frac{z-1}{z+1}$:
    $s = \frac{e^{j\theta}-1}{e^{j\theta}+1} = \frac{e^{j\theta/2}(e^{j\theta/2}-e^{-j\theta/2})}{e^{j\theta/2}(e^{j\theta/2}+e^{-j\theta/2})} = \frac{2j \sin(\theta/2)}{2 \cos(\theta/2)} = j \tan(\theta/2)$.
    This shows that points on the unit circle in the z-plane map to the imaginary axis in the s-plane.

*   **Interior of Unit Circle in z-plane $\leftrightarrow$ Left-half s-plane:**
    If $|z| < 1$, let $z = re^{j\theta}$ with $r < 1$.
    $s = \frac{re^{j\theta}-1}{re^{j\theta}+1}$.
    The real part of $s$ can be shown to be negative, mapping to the left-half s-plane.

*   **Exterior of Unit Circle in z-plane $\leftrightarrow$ Right-half s-plane:**
    If $|z| > 1$, let $z = re^{j\theta}$ with $r > 1$.
    $s = \frac{re^{j\theta}-1}{re^{j\theta}+1}$.
    The real part of $s$ can be shown to be positive, mapping to the right-half s-plane.

---

### **6. Course Outcome Alignment**

*   **CO1: Model and analyse discrete-time system using pulse transfer function approach.**
    This topic directly addresses the analysis part of CO1. By forming the closed-loop pulse transfer function and examining its poles (either directly through Jury test or indirectly via bilinear transformation), we analyze the stability of the system.

*   **CO2: Design digital compensators for linear systems.**
    Understanding stability is a prerequisite for designing digital compensators. A compensator is designed to place the closed-loop poles in desirable locations to achieve stability and meet performance specifications. If a designed compensator leads to a characteristic polynomial with roots outside the unit circle, the system will be unstable.

*   **CO3: Model and analyse discrete-time system using state space approach.**
    While this topic primarily uses the transfer function approach, the concept of stability is also analyzed in state-space. For discrete-time state-space systems, stability is determined by the eigenvalues of the state transition matrix $\Phi$, where all eigenvalues must have a magnitude less than 1. The transfer function approach is a direct way to analyze stability for systems where the plant and controller transfer functions are known.

*   **CO4: Design discrete-time state feedback controllers and observers for a linear system.**
    Similar to CO2, stability is a fundamental consideration in designing state feedback controllers and observers. The placement of closed-loop poles (eigenvalues of $I - BK$ for controllers, or $I - KC$ for observers) within the unit circle is essential for stable operation.

---

### **7. Important Points to Remember**

*   **Stability is determined by pole locations relative to the unit circle in the z-plane.**
*   **Stable:** All poles inside the unit circle ($|z| < 1$).
*   **Marginally Stable:** Poles on the unit circle ($|z|=1$) with no poles outside, and no repeated poles on the unit circle.
*   **Unstable:** At least one pole outside the unit circle ($|z| > 1$).
*   **Characteristic Equation:** $1 + C(z)G(z) = 0$. The roots of this equation are the closed-loop poles.
*   **Jury Stability Test:** A direct method using polynomial coefficients. It checks conditions at $z=1$, $z=-1$, and uses a recursive construction for auxiliary polynomials.
*   **Bilinear Transformation:** Transforms the problem to the s-plane using $z = \frac{1+s}{1-s}$, allowing the use of the Routh-Hurwitz criterion.
*   **Mapping:** Left-half s-plane $\leftrightarrow$ Interior of unit circle z-plane. Imaginary axis s-plane $\leftrightarrow$ Unit circle z-plane.
*   **Routh-Hurwitz Criterion:** Checks for roots in the left-half s-plane by examining coefficients and the first column of the Routh array.

---

### **8. Practice Questions**

**Question 1:**
Determine if the discrete-time closed-loop system with the characteristic equation $P(z) = z^3 - 0.2z^2 - 0.6z + 0.1 = 0$ is stable using the Jury stability test.

**Question 2:**
Use the bilinear transformation and Routh-Hurwitz criterion to assess the stability of the system with the characteristic equation $P(z) = z^3 - 1.2z^2 + 0.44z - 0.08 = 0$.

**Question 3:**
A closed-loop sampled-data system has a characteristic polynomial $P(z) = z^3 - 0.7z^2 + 0.1z + 0.1 = 0$. Determine if this system is stable.

---

### **9. Answers to Practice Questions**

**Answer 1:**
$P(z) = z^3 - 0.2z^2 - 0.6z + 0.1 = 0$.
$n=3$, $a_3=1$, $a_2=-0.2$, $a_1=-0.6$, $a_0=0.1$.

1.  **$P(1) > 0$**: $1 - 0.2 - 0.6 + 0.1 = 0.3 > 0$. (Satisfied)
2.  **$(-1)^3 P(-1) > 0$**: $-P(-1) = -( (-1)^3 - 0.2(-1)^2 - 0.6(-1) + 0.1 ) = -( -1 - 0.2 + 0.6 + 0.1 ) = -(-0.5) = 0.5 > 0$. (Satisfied)
3.  **$|a_0| < |a_3|$**: $|0.1| < |1| \implies 0.1 < 1$. (Satisfied)

4.  **Jury Array:**
    *   Row 3 (n=3): $[1, -0.2, -0.6, 0.1]$
    *   Row 2 (k=2): Coefficients $[c_{2,0}, c_{2,1}, c_{2,2}]$
        $c_{2,0} = \frac{c_{3,0}c_{3,0} - c_{3,3}c_{3,3}}{c_{3,0}-c_{3,3}} = \frac{(1)(1) - (0.1)(0.1)}{1 - 0.1} = \frac{1 - 0.01}{0.9} = \frac{0.99}{0.9} = 1.1$
        $c_{2,1} = \frac{c_{3,0}c_{3,1} - c_{3,3}c_{3,2}}{c_{3,0}-c_{3,3}} = \frac{(1)(-0.2) - (0.1)(-0.6)}{1 - 0.1} = \frac{-0.2 + 0.06}{0.9} = \frac{-0.14}{0.9} \approx -0.1556$
        $c_{2,2} = \frac{c_{3,0}c_{3,2} - c_{3,3}c_{3,1}}{c_{3,0}-c_{3,3}} = \frac{(1)(-0.6) - (0.1)(-0.2)}{1 - 0.1} = \frac{-0.6 + 0.02}{0.9} = \frac{-0.58}{0.9} \approx -0.6444$
        Check: $c_{2,0} > |c_{2,2}|$? $1.1 > |-0.6444| \implies 1.1 > 0.6444$. (Satisfied)
        Row 2 coefficients: $[1.1, -0.1556, -0.6444]$

    *   Row 1 (k=1): Coefficients $[c_{1,0}]$
        $c_{1,0} = \frac{c_{2,0}c_{2,0} - c_{2,2}c_{2,2}}{c_{2,0}-c_{2,2}} = \frac{(1.1)(1.1) - (-0.6444)(-0.6444)}{1.1 - (-0.6444)} = \frac{1.21 - 0.4152}{1.7444} = \frac{0.7948}{1.7444} \approx 0.4556$
        Check: $c_{1,0} > |c_{1,1}|$? (There's only one coefficient, $c_{1,0}$, which corresponds to $c_{k,0}$ and $c_{k,k}$ when $k=1$. The condition $c_{k,0} > |c_{k,k}|$ is applied using $c_{1,0}$ as the first coefficient and it's understood that for degree 1 polynomial, this condition is simply $c_{1,0} > 0$). So, $0.4556 > 0$. (Satisfied)

    **Conclusion:** All conditions are satisfied. The system is **stable**.

**Answer 2:**
$P(z) = z^3 - 1.2z^2 + 0.44z - 0.08 = 0$.
Bilinear transformation: $z = \frac{1+s}{1-s}$.
Substitute and multiply by $(1-s)^3$:
$(1+s)^3 - 1.2(1+s)^2(1-s) + 0.44(1+s)(1-s)^2 - 0.08(1-s)^3 = 0$.

Expand:
$(1 + 3s + 3s^2 + s^3) - 1.2(1 + 2s + s^2)(1-s) + 0.44(1+s)(1 - 2s + s^2) - 0.08(1 - 3s + 3s^2 - s^3) = 0$.

$(1 + 3s + 3s^2 + s^3) - 1.2(1 + 2s + s^2 - s - 2s^2 - s^3) + 0.44(1 - 2s + s^2 + s - 2s^2 + s^3) - 0.08(1 - 3s + 3s^2 - s^3) = 0$.

$(1 + 3s + 3s^2 + s^3) - 1.2(1 + s - s^2 - s^3) + 0.44(1 - s - s^2 + s^3) - 0.08(1 - 3s + 3s^2 - s^3) = 0$.

$(1 + 3s + 3s^2 + s^3) - (1.2 + 1.2s - 1.2s^2 - 1.2s^3) + (0.44 - 0.44s - 0.44s^2 + 0.44s^3) - (0.08 - 0.24s + 0.24s^2 - 0.08s^3) = 0$.

Collect terms for $s^3, s^2, s^1, s^0$:
$s^3: (1 + 1.2 + 0.44 + 0.08) = 2.72$
$s^2: (3 - 1.2(-1) - 0.44 - 0.24) = (3 + 1.2 - 0.44 - 0.24) = 3.52$
$s^1: (3 - 1.2(1) + 0.44(-1) - 0.08(-3)) = (3 - 1.2 - 0.44 + 0.24) = 1.6$
$s^0: (1 - 1.2(1) + 0.44(1) - 0.08(1)) = (1 - 1.2 + 0.44 - 0.08) = 0.16$

Correcting the calculation for coefficients $A_i$:
$z = \frac{1+s}{1-s}$
$(1+s)^3 - 1.2(1+s)^2(1-s) + 0.44(1+s)(1-s)^2 - 0.08(1-s)^3 = 0$
$(1+3s+3s^2+s^3) - 1.2(1+s)(1-s^2) + 0.44(1+s)(1-2s+s^2) - 0.08(1-3s+3s^2-s^3) = 0$
$(1+3s+3s^2+s^3) - 1.2(1+s-s^2-s^3) + 0.44(1-2s+s^2+s-2s^2+s^3) - 0.08(1-3s+3s^2-s^3) = 0$
$(1+3s+3s^2+s^3) - 1.2(1+s-s^2-s^3) + 0.44(1-s-s^2+s^3) - 0.08(1-3s+3s^2-s^3) = 0$

Let's expand and collect again carefully:
$s^3$: $1 \cdot s^3$ from first term; $-1.2 \cdot (-s^3)$ from second term; $0.44 \cdot s^3$ from third term; $-0.08 \cdot (-s^3)$ from fourth term.
$A_3 = 1 + 1.2 + 0.44 + 0.08 = 2.72$

$s^2$: $3s^2$ from first term; $-1.2 \cdot (-s^2)$ from second term; $0.44 \cdot (-s^2)$ from third term; $-0.08 \cdot (3s^2)$ from fourth term.
$A_2 = 3 + 1.2 - 0.44 - 0.24 = 3.52$

$s^1$: $3s$ from first term; $-1.2 \cdot s$ from second term; $0.44 \cdot (-s)$ from third term; $-0.08 \cdot (-3s)$ from fourth term.
$A_1 = 3 - 1.2 - 0.44 + 0.24 = 1.6$

$s^0$: $1$ from first term; $-1.2 \cdot 1$ from second term; $0.44 \cdot 1$ from third term; $-0.08 \cdot 1$ from fourth term.
$A_0 = 1 - 1.2 + 0.44 - 0.08 = 0.16$

So, $Q(s) = 2.72s^3 + 3.52s^2 + 1.6s + 0.16 = 0$.

**Routh-Hurwitz Criterion:**
1.  **Coefficients positive?** Yes, 2.72, 3.52, 1.6, 0.16 are all positive.

2.  **Routh Array:**
    | $s^3$ | 2.72 | 1.6  |
    | :---- | :---- | :---- |
    | $s^2$ | 3.52 | 0.16 |
    | $s^1$ | $b_1$ | 0    |
    | $s^0$ | $c_1$ |      |

    $b_1 = \frac{(3.52)(1.6) - (2.72)(0.16)}{3.52} = \frac{5.632 - 0.4352}{3.52} = \frac{5.1968}{3.52} \approx 1.4764$
    $c_1 = \frac{(b_1)(0.16) - (3.52)(0)}{b_1} = 0.16$

    First column: [2.72, 3.52, 1.4764, 0.16]. All elements are positive.

**Conclusion:** All conditions satisfied. The system is **stable**.

**Answer 3:**
$P(z) = z^3 - 0.7z^2 + 0.1z + 0.1 = 0$.
$n=3$, $a_3=1$, $a_2=-0.7$, $a_1=0.1$, $a_0=0.1$.

1.  **$P(1) > 0$**: $1 - 0.7 + 0.1 + 0.1 = 0.5 > 0$. (Satisfied)
2.  **$(-1)^3 P(-1) > 0$**: $-P(-1) = -( (-1)^3 - 0.7(-1)^2 + 0.1(-1) + 0.1 ) = -( -1 - 0.7 - 0.1 + 0.1 ) = -(-1.7) = 1.7 > 0$. (Satisfied)
3.  **$|a_0| < |a_3|$**: $|0.1| < |1| \implies 0.1 < 1$. (Satisfied)

4.  **Jury Array:**
    *   Row 3 (n=3): $[1, -0.7, 0.1, 0.1]$
    *   Row 2 (k=2): Coefficients $[c_{2,0}, c_{2,1}, c_{2,2}]$
        $c_{2,0} = \frac{c_{3,0}c_{3,0} - c_{3,3}c_{3,3}}{c_{3,0}-c_{3,3}} = \frac{(1)(1) - (0.1)(0.1)}{1 - 0.1} = \frac{1 - 0.01}{0.9} = \frac{0.99}{0.9} = 1.1$
        $c_{2,1} = \frac{c_{3,0}c_{3,1} - c_{3,3}c_{3,2}}{c_{3,0}-c_{3,3}} = \frac{(1)(-0.7) - (0.1)(0.1)}{1 - 0.1} = \frac{-0.7 - 0.01}{0.9} = \frac{-0.71}{0.9} \approx -0.7889$
        $c_{2,2} = \frac{c_{3,0}c_{3,2} - c_{3,3}c_{3,1}}{c_{3,0}-c_{3,3}} = \frac{(1)(0.1) - (0.1)(-0.7)}{1 - 0.1} = \frac{0.1 + 0.07}{0.9} = \frac{0.17}{0.9} \approx 0.1889$
        Check: $c_{2,0} > |c_{2,2}|$? $1.1 > |0.1889| \implies 1.1 > 0.1889$. (Satisfied)
        Row 2 coefficients: $[1.1, -0.7889, 0.1889]$

    *   Row 1 (k=1): Coefficients $[c_{1,0}]$
        $c_{1,0} = \frac{c_{2,0}c_{2,0} - c_{2,2}c_{2,2}}{c_{2,0}-c_{2,2}} = \frac{(1.1)(1.1) - (0.1889)(0.1889)}{1.1 - 0.1889} = \frac{1.21 - 0.0357}{1.0211} = \frac{1.1743}{1.0211} \approx 1.1500$
        Check: $c_{1,0} > 0$? $1.1500 > 0$. (Satisfied)

    **Conclusion:** All conditions are satisfied. The system is **stable**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **References Used**

*   **Digital control system analysis and design by Philips and Nagle (Prentice Hall, 1984)** - Provides a good foundation for understanding discrete-time systems and their analysis methods.
*   **Discrete Time Control Systems by K. Ogata (PHI Learning Private Limited, New Delhi, 2009.)** - This book is a primary reference, particularly for the detailed explanation and structured approach to the Jury Stability Test (Chapter 4).
*   **Digital control and State Variable methods by M. Gopal (Tata McGraw –Hill, 1997)** - Offers alternative perspectives and examples for system analysis.
*   **Digital Control Systems by B C Kuo (Oxford University Press, 2nd Ed., 1992)** - A widely cited textbook that covers stability criteria thoroughly.

---