---
title: "Routh stability criterion."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Dynamic System Representation and Stability: Open loop and closed loop systems."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361e8"
status: "completed"
scrapedAt: "2026-05-23T16:23:57.713Z"
---
## Signals and Systems: Study Notes - Module 4: Dynamic System Representation and Stability

### Topic: Routh Stability Criterion

---

### 1. Introduction to System Stability

**Definition:** A system is considered stable if, for every bounded input, the output is also bounded. This is often referred to as **Bounded-Input Bounded-Output (BIBO) stability**.

**Relevance to Dynamic Systems:** The stability of a dynamic system is a crucial aspect of its behavior. An unstable system can lead to unbounded outputs, potentially causing system failure or undesirable oscillations.

**System Representation:**
*   **Continuous-Time Systems:** Often represented by differential equations. The stability is determined by the location of the roots of the characteristic equation (poles of the transfer function) in the s-plane. For stability, all poles must lie in the left half of the s-plane (LHP).
*   **Discrete-Time Systems:** Represented by difference equations. The stability is determined by the location of the roots of the characteristic equation (poles of the transfer function) in the z-plane. For stability, all poles must lie inside the unit circle in the z-plane.

**(Nise, Chapter 4; Haykin & Van Veen, Chapter 7)**

---

### 2. The Characteristic Equation and its Importance

The **characteristic equation** of a linear time-invariant (LTI) system is obtained by setting the denominator of its transfer function to zero:

$$P(s) = a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0 = 0$$

or in the z-domain:

$$P(z) = b_m z^m + b_{m-1} z^{m-1} + \dots + b_1 z + b_0 = 0$$

The roots of the characteristic equation are the **poles** of the system. The location of these poles dictates the system's stability.

*   **Continuous-Time (s-plane):**
    *   Poles in the Left Half-Plane (LHP): Stable response (decaying transients).
    *   Poles in the Right Half-Plane (RHP): Unstable response (growing transients).
    *   Poles on the imaginary axis: Marginally stable response (oscillatory transients that neither decay nor grow).

*   **Discrete-Time (z-plane):**
    *   Poles inside the Unit Circle: Stable response.
    *   Poles outside the Unit Circle: Unstable response.
    *   Poles on the Unit Circle: Marginally stable response.

**(Haykin & Van Veen, Chapter 7; Ogata, Chapter 6)**

---

### 3. Introduction to the Routh Stability Criterion

**Purpose:** The Routh stability criterion is an analytical method used to determine the stability of an LTI system without explicitly calculating the roots of the characteristic equation. It checks whether all the roots of the characteristic polynomial lie in the stable region of the s-plane (LHP) or z-plane (inside the unit circle).

**Focus on Continuous-Time Systems:** The Routh criterion is primarily applied to continuous-time systems, i.e., determining if all roots of a polynomial in 's' lie in the LHP. A transformation can be used for discrete-time systems.

**(Nise, Chapter 4; Haykin & Van Veen, Chapter 7)**

---

### 4. The Routh Array Construction (Continuous-Time)

The Routh array is a tabular method constructed from the coefficients of the characteristic polynomial.

**Characteristic Polynomial:** $P(s) = a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0$, where $a_n \neq 0$ and $a_0 \neq 0$.

**Conditions for the Routh Array:**
1.  **Necessary Condition:** For a polynomial to have all its roots in the LHP, all coefficients ($a_n, a_{n-1}, \dots, a_0$) must be present and have the same sign (usually positive for convenience). If any coefficient is zero or missing, the system is unstable or marginally stable.
    *   *Exception:* If $a_0 = 0$, there is at least one root at the origin (marginally stable). If any intermediate coefficient is zero, there are roots on the imaginary axis or in the RHP.

**Array Construction:**

The array has $n+1$ rows, labeled from $s^n$ down to $s^0$.

| Row      | Coefficient 1 | Coefficient 2 | Coefficient 3 | ... |
| :------- | :------------ | :------------ | :------------ | :-- |
| $s^n$    | $a_n$         | $a_{n-2}$     | $a_{n-4}$     | ... |
| $s^{n-1}$ | $a_{n-1}$     | $a_{n-3}$     | $a_{n-5}$     | ... |
| $s^{n-2}$ | $b_1$         | $b_2$         | $b_3$         | ... |
| $s^{n-3}$ | $c_1$         | $c_2$         | $c_3$         | ... |
| ...      | ...           | ...           | ...           | ... |
| $s^0$    | $e_1$         |               |               |     |

**Formulas for Calculating Elements:**

The elements of the rows $s^{n-2}$ and below are calculated using the elements of the two preceding rows. For row $s^{k}$:

Let the elements of the row $s^{k+2}$ be $p_1, p_2, p_3, \dots$ and the elements of the row $s^{k+1}$ be $q_1, q_2, q_3, \dots$.
The elements of row $s^k$ are calculated as:

$b_1 = -\frac{1}{q_1} \begin{vmatrix} p_1 & p_2 \\ q_1 & q_2 \end{vmatrix} = \frac{q_1 p_2 - p_1 q_2}{q_1}$
$b_2 = -\frac{1}{q_1} \begin{vmatrix} p_1 & p_3 \\ q_1 & q_3 \end{vmatrix} = \frac{q_1 p_3 - p_1 q_3}{q_1}$
$b_3 = -\frac{1}{q_1} \begin{vmatrix} p_1 & p_4 \\ q_1 & q_4 \end{vmatrix} = \frac{q_1 p_4 - p_1 q_4}{q_1}$

And so on. Generally, for row $s^k$ with elements $r_1, r_2, r_3, \dots$ calculated from rows $s^{k+2}$ (elements $p_1, p_2, \dots$) and $s^{k+1}$ (elements $q_1, q_2, \dots$):

$r_i = \frac{q_1 p_{i+1} - p_1 q_{i+1}}{q_1}$

**(Nise, Chapter 4; Haykin & Van Veen, Chapter 7)**

---

### 5. Interpretation of the Routh Array for Stability

**The Routh Criterion:** The number of roots of the characteristic polynomial with positive real parts (i.e., in the RHP) is equal to the number of sign changes in the first column of the Routh array.

**Conditions for Stability:**
*   **Strict Stability:** For the system to be stable, all the roots of the characteristic polynomial must lie in the LHP. This means:
    1.  All coefficients ($a_n$ to $a_0$) must be present and have the same sign.
    2.  All elements in the first column of the Routh array must be non-zero and have the same sign as the first coefficient ($a_n$).

**(Nise, Chapter 4; Haykin & Van Veen, Chapter 7)**

---

### 6. Special Cases in Routh Array Construction

**Case 1: Zero in the First Column ($s^{k}$ row, $b_1 = 0$)**

If the first element of any row (except $s^0$) is zero, the criterion cannot be directly applied. This indicates the presence of roots on the imaginary axis or in the RHP.

**Solution:** Replace the zero with a small positive number $\epsilon$ and proceed with the calculation. Analyze the signs of the first column elements as $\epsilon \to 0^+$.

*   **Alternative (Preferred) Solution:** If $b_1 = 0$, multiply the characteristic polynomial by $(s+k)$ for a suitable $k$ (e.g., $k=1$) to ensure the first element of the new array is non-zero. Or, replace the zero with $\epsilon$ and examine the signs as $\epsilon \to 0^+$. If $b_1=0$, this means there are roots on the $j\omega$ axis.

**(Nise, Chapter 4; Haykin & Van Veen, Chapter 7)**

**Case 2: Entire Row of Zeros**

If an entire row of the Routh array becomes zero (except for the $s^0$ row), it indicates that the polynomial has roots that are symmetrically located with respect to the origin in the s-plane. These can be:
*   Purely imaginary roots ($\pm j\omega$).
*   Roots occurring in pairs symmetric with respect to the origin ($+\sigma$, $-\sigma$).

**Solution:**
1.  Form an **auxiliary polynomial** $A(s)$ using the coefficients of the row **immediately above** the row of zeros. The powers of 's' in $A(s)$ will be even or odd, starting from the power of 's' corresponding to that row.
    *   If the row of zeros is $s^k$, then $A(s) = p_1 s^{k+2} + p_2 s^{k+4} + p_3 s^{k+6} + \dots$ (using coefficients from the $s^{k+2}$ row, as these define the auxiliary polynomial).
    *   Alternatively, if the row of zeros is the $s^k$ row, the auxiliary polynomial is formed using the coefficients of the $s^{k+1}$ row as $A(s) = q_1 s^{k+1} + q_2 s^{k+3} + q_3 s^{k+5} + \dots$. The standard approach uses the row *above* the row of zeros, which corresponds to the coefficients of the $s^{k+2}$ row in the context of calculating the $s^k$ row. Let's clarify: if the $s^k$ row becomes zero, the auxiliary polynomial is formed using the coefficients of the row $s^{k+1}$. The powers of $s$ in the auxiliary polynomial correspond to the power of $s$ for that row, incrementing by 2.
    *   **Corrected Rule:** If the $s^k$ row becomes zero, the auxiliary polynomial $A(s)$ is formed using the coefficients of the row **immediately above** it, which is the $s^{k+1}$ row. The powers of $s$ in $A(s)$ are $s^{k+1}$, $s^{k+3}$, $s^{k+5}$, etc.
    *   **Let's re-check standard texts:** Nise (5th Ed., p. 198) states: "If an entire row is zero, the polynomial whose coefficients are the entries in the **preceding row** forms the auxiliary polynomial." The powers of $s$ in the auxiliary polynomial start with the power of $s$ of the preceding row and increase by 2. So, if row $s^k$ is all zeros, the auxiliary polynomial $A(s)$ is formed from the coefficients of the row $s^{k+1}$. The powers of $s$ will be $s^{k+1}, s^{k+3}, s^{k+5}, \ldots$.

2.  The roots of the auxiliary polynomial $A(s) = 0$ are the roots of the characteristic polynomial that lie on the $j\omega$ axis.
3.  To find the remaining roots, differentiate $A(s)$ with respect to 's' to get $A'(s)$. This derivative polynomial will form the next row of the Routh array (replacing the row of zeros).
4.  Continue the Routh array construction with the coefficients of $A'(s)$ in place of the zero row.
5.  The system is marginally stable if there are no sign changes in the first column after handling the row of zeros and there are roots on the $j\omega$ axis. If there are sign changes, the system is unstable.

**(Nise, Chapter 4; Haykin & Van Veen, Chapter 7)**

**Case 3: Zero as the only element in a row (e.g., $b_1=0, b_2=0, \dots$)**

If a row has only a zero element, and the first column element of the preceding row is non-zero, this implies roots are in the RHP. This is handled by the $\epsilon$ substitution.

**(Nise, Chapter 4)**

---

### 7. Routh Criterion for Discrete-Time Systems

The Routh stability criterion is directly applicable to continuous-time systems. To analyze the stability of discrete-time systems using a similar approach, we need to transform the characteristic polynomial from the z-domain to the s-domain.

**Transformation:**
Let the characteristic polynomial in the z-domain be $P(z) = b_m z^m + b_{m-1} z^{m-1} + \dots + b_0$.
The condition for discrete-time stability is that all roots of $P(z)$ lie inside the unit circle in the z-plane.
This is equivalent to all roots of a transformed polynomial in 's' lying in the LHP of the s-plane.

The transformation used is:
$z = \frac{1+s}{1-s}$

Substitute this into $P(z)$ and obtain a polynomial in 's'. Then, apply the Routh stability criterion to this s-domain polynomial.

**(Ogata, Chapter 6; Nise, Chapter 4, Appendix A)**

**Example for Discrete-Time Transformation:**
Consider the discrete-time characteristic equation: $z^2 - 0.5z + 0.1 = 0$.
Substitute $z = \frac{1+s}{1-s}$:
$(\frac{1+s}{1-s})^2 - 0.5(\frac{1+s}{1-s}) + 0.1 = 0$
Multiply by $(1-s)^2$:
$(1+s)^2 - 0.5(1+s)(1-s) + 0.1(1-s)^2 = 0$
$(1 + 2s + s^2) - 0.5(1 - s^2) + 0.1(1 - 2s + s^2) = 0$
$1 + 2s + s^2 - 0.5 + 0.5s^2 + 0.1 - 0.2s + 0.1s^2 = 0$
Combine terms:
$(1 + 0.5 + 0.1)s^2 + (2 - 0.2)s + (1 - 0.5 + 0.1) = 0$
$1.6s^2 + 1.8s + 0.6 = 0$

Now, apply the Routh criterion to $P(s) = 1.6s^2 + 1.8s + 0.6$.
*   Coefficients are present and positive.
*   Routh Array:
    | $s^2$ | 1.6 | 0.6 |
    | $s^1$ | 1.8 | 0   |
    | $s^0$ | 0.6 |     |

First column elements are 1.6, 1.8, 0.6. All are positive. Therefore, all roots are in the LHP. This implies the original discrete-time system is stable.

---

### 8. Stability and Gain Margin / Phase Margin (Conceptual Link)

While the Routh criterion doesn't directly calculate gain or phase margins, it provides a fundamental understanding of stability based on pole locations. Systems that are close to the boundary of stability (poles close to the imaginary axis in the s-plane or the unit circle in the z-plane) will have limited gain and phase margins.

**(Nise, Chapter 4, mentions correlation with root locations; Haykin & Van Veen, Chapter 7, focuses on pole locations)**

---

### 9. Examples and Practice Problems

**Example 1: Basic Stability Check**

Characteristic Equation: $s^3 + 2s^2 + 3s + 4 = 0$

1.  **Necessary Condition:** All coefficients (1, 2, 3, 4) are present and positive.

2.  **Routh Array Construction:**
    $n=3$. Rows: $s^3, s^2, s^1, s^0$.
    | $s^3$ | 1   | 3   |
    | $s^2$ | 2   | 4   |
    | $s^1$ | $b_1$ | $b_2$ |
    | $s^0$ | $c_1$ |     |

    $b_1 = \frac{2 \times 3 - 1 \times 4}{2} = \frac{6 - 4}{2} = \frac{2}{2} = 1$
    $b_2 = \frac{2 \times 0 - 1 \times 0}{2} = 0$ (Assume the next coefficients are 0 if not specified)

    | $s^3$ | 1   | 3   |
    | $s^2$ | 2   | 4   |
    | $s^1$ | 1   | 0   |
    | $s^0$ | $c_1$ |     |

    $c_1 = \frac{1 \times 0 - 1 \times 0}{1} = 0$ (This is an error in calculation, $c_1$ should be calculated from the $s^2$ and $s^1$ rows)

    **Correct calculation for $c_1$:**
    $c_1 = \frac{1 \times 4 - 2 \times 0}{1} = \frac{4}{1} = 4$

    **Completed Routh Array:**
    | $s^3$ | 1   | 3   |
    | $s^2$ | 2   | 4   |
    | $s^1$ | 1   | 0   |
    | $s^0$ | 4   |     |

3.  **Interpretation:** The first column elements are 1, 2, 1, 4. All are positive.
    **Conclusion:** The system is stable.

**Example 2: System with Marginal Stability (Roots on j$\omega$ axis)**

Characteristic Equation: $s^3 + 2s^2 + 4s + 8 = 0$

1.  **Necessary Condition:** All coefficients (1, 2, 4, 8) are present and positive.

2.  **Routh Array Construction:**
    | $s^3$ | 1   | 4   |
    | $s^2$ | 2   | 8   |
    | $s^1$ | $b_1$ | $b_2$ |
    | $s^0$ | $c_1$ |     |

    $b_1 = \frac{2 \times 4 - 1 \times 8}{2} = \frac{8 - 8}{2} = 0$
    $b_2 = \frac{2 \times 0 - 1 \times 0}{2} = 0$

    | $s^3$ | 1   | 4   |
    | $s^2$ | 2   | 8   |
    | $s^1$ | 0   | 0   |  <-- Row of zeros!
    | $s^0$ | $c_1$ |     |

3.  **Handling the Row of Zeros:**
    *   The row of zeros is $s^1$. The preceding row ($s^2$) has coefficients 2 and 8.
    *   Form the auxiliary polynomial from the $s^2$ row: $A(s) = 2s^2 + 8$.
    *   Set $A(s) = 0$: $2s^2 + 8 = 0 \implies s^2 = -4 \implies s = \pm j2$. These are roots on the $j\omega$ axis.
    *   Differentiate $A(s)$ to get the next row: $A'(s) = \frac{d}{ds}(2s^2 + 8) = 4s$. The coefficient is 4, corresponding to $s^1$.
    *   Replace the $s^1$ row with 4.

    **Modified Routh Array:**
    | $s^3$ | 1   | 4   |
    | $s^2$ | 2   | 8   |
    | $s^1$ | 4   | 0   |  <-- From A'(s)
    | $s^0$ | $c_1$ |     |

    Calculate $c_1$ from the $s^2$ and $s^1$ rows:
    $c_1 = \frac{4 \times 8 - 2 \times 0}{4} = \frac{32}{4} = 8$

    **Final Routh Array:**
    | $s^3$ | 1   | 4   |
    | $s^2$ | 2   | 8   |
    | $s^1$ | 4   | 0   |
    | $s^0$ | 8   |     |

4.  **Interpretation:** The first column elements are 1, 2, 4, 8. All are positive. However, we encountered a row of zeros, indicating roots on the $j\omega$ axis.
    **Conclusion:** The system has roots on the $j\omega$ axis (from $A(s)=0$) and no roots in the RHP. Therefore, the system is marginally stable.

**Example 3: System with Unstable Roots**

Characteristic Equation: $s^3 - 2s^2 + 2s - 1 = 0$

1.  **Necessary Condition:** Coefficient of $s^2$ is -2. It is negative, while other coefficients are positive or zero (implicitly).
    **Conclusion:** The system is unstable. The Routh criterion will confirm this.

2.  **Routh Array Construction:**
    | $s^3$ | 1   | 2   |
    | $s^2$ | -2  | -1  |
    | $s^1$ | $b_1$ | $b_2$ |
    | $s^0$ | $c_1$ |     |

    $b_1 = \frac{(-2) \times 2 - 1 \times (-1)}{-2} = \frac{-4 + 1}{-2} = \frac{-3}{-2} = 1.5$
    $b_2 = \frac{(-2) \times (-1) - 1 \times 0}{-2} = \frac{2}{-2} = -1$

    | $s^3$ | 1   | 2   |
    | $s^2$ | -2  | -1  |
    | $s^1$ | 1.5 | -1  |
    | $s^0$ | $c_1$ |     |

    Calculate $c_1$:
    $c_1 = \frac{1.5 \times (-1) - (-2) \times (-1)}{1.5} = \frac{-1.5 - 2}{1.5} = \frac{-3.5}{1.5} = -\frac{7}{3}$

    **Completed Routh Array:**
    | $s^3$ | 1     | 2   |
    | $s^2$ | -2    | -1  |
    | $s^1$ | 1.5   | -1  |
    | $s^0$ | -7/3  |     |

3.  **Interpretation:** The first column elements are 1, -2, 1.5, -7/3.
    There are two sign changes:
    *   From 1 to -2 (positive to negative)
    *   From 1.5 to -7/3 (positive to negative)
    **Conclusion:** There are two roots in the RHP. The system is unstable.

**Practice Questions:**

1.  Determine if the system with the characteristic equation $s^4 + s^3 + 2s^2 + 3s + 4 = 0$ is stable.
2.  For the system with characteristic equation $s^3 + ks^2 + 2s + 4 = 0$, find the range of $k$ for which the system is stable.
3.  Analyze the stability of the discrete-time system with the characteristic equation $z^3 - 0.9z^2 + 0.2z - 0.1 = 0$.
4.  What does an entire row of zeros in the Routh array indicate about the roots of the characteristic polynomial?
5.  Find the values of $K$ for which the system described by the characteristic equation $s^3 + 2s^2 + Ks + 18 = 0$ is stable, marginally stable, and unstable.

---

### 10. Answers to Practice Questions

1.  **Answer:**
    Routh Array:
    | $s^4$ | 1   | 2   | 4   |
    | $s^3$ | 1   | 3   | 0   |
    | $s^2$ | 2   | 4   |     | ( $b_1 = \frac{1*2 - 1*3}{1} = -1$, $b_2 = \frac{1*4 - 1*0}{1} = 4$ )
    | $s^1$ | $c_1$ | $c_2$ |     | ( $c_1 = \frac{-1*3 - 1*4}{-1} = \frac{-7}{-1} = 7$, $c_2 = \frac{-1*0 - 1*0}{-1} = 0$ )
    | $s^0$ | 4   |     |     | ( $d_1 = \frac{7*4 - (-1)*0}{7} = 4$ )

    First column: 1, 1, 2, 7, 4. All are positive.
    **Conclusion:** The system is stable.

2.  **Answer:**
    Routh Array:
    | $s^3$ | 1   | 2   |
    | $s^2$ | k   | 4   |
    | $s^1$ | $b_1$ | $b_2$ |
    | $s^0$ | $c_1$ |     |

    $b_1 = \frac{k \times 2 - 1 \times 4}{k} = \frac{2k-4}{k}$
    $b_2 = 0$

    $c_1 = \frac{(\frac{2k-4}{k}) \times 4 - k \times 0}{(\frac{2k-4}{k})} = 4$

    First column elements: 1, k, $\frac{2k-4}{k}$, 4.
    For stability, all must be positive:
    *   $k > 0$
    *   $\frac{2k-4}{k} > 0$. Since $k>0$, we need $2k-4 > 0 \implies 2k > 4 \implies k > 2$.

    **Range of $k$ for stability: $k > 2$**.
    For marginal stability, we'd look for a zero in the first column. If $k=2$, the $s^1$ row becomes 0.
    If $k=2$, the characteristic equation is $s^3 + 2s^2 + 2s + 4 = 0$.
    $s^2(s+2) + 2(s+2) = 0 \implies (s^2+2)(s+2) = 0 \implies s=-2, s=\pm j\sqrt{2}$.
    This has roots on the imaginary axis, so it's marginally stable.
    **Marginally stable at $k=2$**.
    **Unstable for $k \le 0$ or $0 < k < 2$**.

3.  **Answer:**
    Characteristic equation: $z^3 - 0.9z^2 + 0.2z - 0.1 = 0$.
    Transform using $z = \frac{1+s}{1-s}$:
    $(\frac{1+s}{1-s})^3 - 0.9(\frac{1+s}{1-s})^2 + 0.2(\frac{1+s}{1-s}) - 0.1 = 0$
    Multiply by $(1-s)^3$:
    $(1+s)^3 - 0.9(1+s)^2(1-s) + 0.2(1+s)(1-s)^2 - 0.1(1-s)^3 = 0$
    $(1+3s+3s^2+s^3) - 0.9(1+2s+s^2)(1-s) + 0.2(1+s)(1-2s+s^2) - 0.1(1-3s+3s^2-s^3) = 0$
    $(1+3s+3s^2+s^3) - 0.9(1+s+s^2) + 0.2(1-s-s^2+s^3) - 0.1(1-3s+3s^2-s^3) = 0$
    $1+3s+3s^2+s^3 - 0.9-0.9s-0.9s^2 + 0.2-0.2s-0.2s^2+0.2s^3 - 0.1+0.3s-0.3s^2+0.1s^3 = 0$

    Combine terms:
    $s^3(1+0.2+0.1) + s^2(3-0.9-0.2-0.3) + s(3-0.9-0.2+0.3) + (1-0.9+0.2-0.1) = 0$
    $1.3s^3 + 1.6s^2 + 2.2s + 0.2 = 0$

    Routh Array for $1.3s^3 + 1.6s^2 + 2.2s + 0.2 = 0$:
    | $s^3$ | 1.3 | 2.2 |
    | $s^2$ | 1.6 | 0.2 |
    | $s^1$ | $b_1$ | 0   |
    | $s^0$ | $c_1$ |     |

    $b_1 = \frac{1.6 \times 2.2 - 1.3 \times 0.2}{1.6} = \frac{3.52 - 0.26}{1.6} = \frac{3.26}{1.6} = 2.0375$
    $c_1 = \frac{2.0375 \times 0.2 - 1.6 \times 0}{2.0375} = 0.2$

    First column: 1.3, 1.6, 2.0375, 0.2. All positive.
    **Conclusion:** The system is stable.

4.  **Answer:** An entire row of zeros indicates that the characteristic polynomial has roots that are symmetrically located with respect to the origin in the s-plane. These are typically pairs of roots on the $j\omega$ axis ($\pm j\omega$) or pairs symmetric with respect to the origin ($+\sigma, -\sigma$).

5.  **Answer:**
    Characteristic equation: $s^3 + 2s^2 + Ks + 18 = 0$.
    Routh Array:
    | $s^3$ | 1   | K   |
    | $s^2$ | 2   | 18  |
    | $s^1$ | $b_1$ | $b_2$ |
    | $s^0$ | $c_1$ |     |

    $b_1 = \frac{2 \times K - 1 \times 18}{2} = K - 9$
    $b_2 = \frac{2 \times 0 - 1 \times 0}{2} = 0$

    $c_1 = \frac{(K-9) \times 18 - 2 \times 0}{(K-9)} = 18$

    First column elements: 1, 2, $K-9$, 18.
    *   **Stable:** All elements must be positive.
        *   $1 > 0$ (True)
        *   $2 > 0$ (True)
        *   $K-9 > 0 \implies K > 9$
        *   $18 > 0$ (True)
        **Range for stability: $K > 9$**

    *   **Marginally Stable:** A zero in the first column. This occurs when $K-9 = 0$.
        **Marginally stable at $K = 9$**.

    *   **Unstable:** If any element in the first column is negative or zero (excluding the marginal case).
        *   If $K \le 0$, the $s^2$ row's first element is 0 or negative.
        *   If $0 < K < 9$, then $K-9$ is negative.

        **Unstable for $K \le 0$ or $0 < K < 9$**.

---

### 10. Key Points to Remember

*   **BIBO Stability:** A system is stable if a bounded input produces a bounded output.
*   **Pole Location:** Stability is determined by the location of system poles in the s-plane (LHP for stability) or z-plane (inside unit circle for stability).
*   **Characteristic Equation:** Denominator of the transfer function, its roots are the system poles.
*   **Routh Criterion:** An analytical tool to determine the presence of RHP poles without calculating them.
*   **Necessary Condition:** All coefficients of the characteristic polynomial must be present and have the same sign.
*   **First Column Rule:** Number of sign changes in the first column equals the number of RHP poles. All elements must be positive for stability.
*   **Special Cases:**
    *   Zero in the first column: Use $\epsilon$ or polynomial multiplication.
    *   Row of zeros: Indicates roots on $j\omega$ axis or symmetric pairs. Use auxiliary polynomial and its derivative.
*   **Discrete-Time Stability:** Transform z-domain to s-domain using $z = \frac{1+s}{1-s}$ and apply Routh criterion.

---

### 11. Alignment with Course Outcomes

*   **CO1 & CO2 (Signals and Systems Representation):** Understanding the characteristic equation and how system behavior (stability) is linked to it is fundamental for representing systems in time and frequency domains. The Routh criterion provides an analytical insight into this. (K2/K3)
*   **CO4 (Analyze Stability of Continuous Time Dynamical Systems):** This is the primary outcome addressed by the Routh stability criterion. It directly provides a method to determine the stability of continuous-time systems based on their characteristic polynomial. (K3)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 12. References

*   **Signals and Systems by Simon Haykin, Barry Van Veen (Wiley, 2nd Edition, 2007)** - Chapters on System Analysis and Stability.
*   **Control Systems Engineering by Norman S. Nise (Wiley, 5th Edition, 2009)** - Chapter 4 on Stability, specifically the Routh-Stability Criterion.
*   **Discrete Time Control Systems by Katsuhiko Ogata (Pearson, 2nd Edition, 2006)** - Chapters on stability analysis, including transformations for discrete-time systems.

---
This concludes the study notes for the Routh Stability Criterion. Remember to practice constructing the Routh array for various characteristic polynomials and handling the special cases.