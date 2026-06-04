---
title: "Stability Analysis: Concept of stability— Routh's stability criterion"
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 4: Time domain analysis of control systems: Time domain specifications"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446367f"
status: "completed"
scrapedAt: "2026-05-20T18:00:46.901Z"
---
# INSTRUMENTATION AND CONTROL SYSTEMS
## Module 4: Time Domain Analysis of Control Systems: Time Domain Specifications
### Topic: Stability Analysis: Concept of Stability— Routh's Stability Criterion

---

### **1. Introduction to Stability**

**Learning Outcome:** Understand the fundamental concept of stability in control systems.
**Course Outcome:** CO6: Analyse the stability of the given LTI system (Knowledge Level: K4)

**1.1 What is Stability?**

In the context of control systems, stability refers to the system's ability to return to its equilibrium state after being subjected to a disturbance. A stable system will settle down to a steady state, while an unstable system will exhibit unbounded oscillations or grow uncontrollably.

**1.2 Types of Stability:**

*   **Absolute Stability:** A system is absolutely stable if it remains stable for all possible variations in its parameters within their defined limits.
*   **Marginal Stability:** A system is marginally stable if its response oscillates with a constant amplitude after a disturbance. This is often considered a borderline case of stability.
*   **Instability:** A system is unstable if its output grows without bound in response to a bounded input or disturbance.

**1.3 Why is Stability Important?**

Stability is a crucial performance requirement for any control system.
*   **Safety:** Unstable systems can lead to dangerous and destructive behavior (e.g., runaway processes, mechanical failures).
*   **Performance:** An unstable system cannot perform its intended function.
*   **Reliability:** Stable systems are more predictable and reliable.

**1.4 Types of Stability based on Response:**

*   **Stable:** The system's response eventually decays to zero or a steady-state value after a disturbance.
*   **Unstable:** The system's response grows without bound.
*   **Marginally Stable:** The system's response oscillates with constant amplitude.

**Example:**
Consider a simple system where you are trying to balance a broomstick on your hand.
*   **Stable:** If you make small corrections to keep the broomstick upright, it's stable.
*   **Unstable:** If you don't make any corrections, the broomstick will fall over.
*   **Marginally Stable:** If you were able to perfectly counteract gravity with a constant upward force, and the broomstick remained at a fixed angle without falling, it would be marginally stable (though this is an idealized scenario).

**Important Point:** The stability of a linear time-invariant (LTI) system is determined by the location of its **poles** in the complex plane.

---

### **2. The Role of Poles in Stability**

**Learning Outcome:** Understand how the location of system poles dictates stability.
**Course Outcome:** CO6: Analyse the stability of the given LTI system (Knowledge Level: K4)

**2.1 Characteristic Equation:**

The behavior of an LTI system is described by its **transfer function**, $G(s) = \frac{Y(s)}{U(s)}$, where $Y(s)$ is the output and $U(s)$ is the input in the Laplace domain. The transfer function is typically expressed as a ratio of polynomials in $s$:

$G(s) = \frac{B(s)}{A(s)} = \frac{b_m s^m + b_{m-1} s^{m-1} + \dots + b_0}{a_n s^n + a_{n-1} s^{n-1} + \dots + a_0}$

The **characteristic equation** of the system is given by the denominator polynomial of the closed-loop transfer function, or for an open-loop system, the denominator of the open-loop transfer function:

**Characteristic Equation: $A(s) = a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0 = 0$**

**2.2 Poles of the System:**

The **poles** of a system are the roots of its characteristic equation. These roots are the values of $s$ for which the denominator of the transfer function is zero.

**2.3 Relationship between Pole Location and Stability:**

The location of the poles in the complex $s$-plane determines the stability of the system:

*   **Stable System:** All poles lie in the **left-half of the $s$-plane** (i.e., the real part of all poles is negative: $\text{Re}(p_i) < 0$).
*   **Unstable System:** At least one pole lies in the **right-half of the $s$-plane** (i.e., the real part of at least one pole is positive: $\text{Re}(p_i) > 0$).
*   **Marginally Stable System:**
    *   All poles have non-positive real parts ($\text{Re}(p_i) \le 0$).
    *   At least one pole lies on the **imaginary axis** ($\text{Re}(p_i) = 0$).
    *   If there are poles on the imaginary axis, they must be **simple poles** (not repeated). Repeated poles on the imaginary axis lead to instability.

**Visual Representation (s-plane):**

```
       ^ Im(s)
       |
       |   / \
       |  /   \  (Right-Half Plane - Unstable)
-------|------------> Re(s)
      /| \   /
     / |  \ /  (Left-Half Plane - Stable)
    /  |   .
       |
       |   (Imaginary Axis)
```

**Textbook Reference:**
*   Nise N.S., "Control Systems Engineering," 6/e, Chapter 4: Stability Analysis - discusses the relationship between pole location and time-domain response characteristics.
*   Ogata K., "Modern Control Engineering," 5/e, Chapter 2: Second-Order and s-Plane Analysis - elaborates on the s-plane and pole locations.

---

### **3. Routh's Stability Criterion**

**Learning Outcome:** Apply Routh's stability criterion to determine the stability of a system from its characteristic equation.
**Course Outcome:** CO6: Analyse the stability of the given LTI system (Knowledge Level: K4)

**3.1 Introduction to Routh's Criterion:**

Routh's stability criterion is an analytical method that determines the absolute stability of an LTI system without actually calculating the roots of the characteristic equation. It requires only the coefficients of the characteristic polynomial.

**3.2 The Routh Array:**

The Routh array is a tabular method used to apply Routh's stability criterion. For a characteristic equation of the form:

$A(s) = a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0 = 0$

where $a_n > 0$ (if $a_n < 0$, we can multiply the entire equation by -1 without changing the roots), the Routh array is constructed as follows:

**Steps to Construct the Routh Array:**

1.  **Row $s^n$:** Write the coefficients of the characteristic equation starting from $a_n$, alternating by skipping one coefficient.
    *   $a_n \quad a_{n-2} \quad a_{n-4} \dots$

2.  **Row $s^{n-1}$:** Write the remaining coefficients starting from $a_{n-1}$, alternating by skipping one coefficient.
    *   $a_{n-1} \quad a_{n-3} \quad a_{n-5} \dots$

3.  **Subsequent Rows ($s^{n-2}, s^{n-3}, \dots, s^0$):** The elements of the subsequent rows are calculated using a specific formula based on the elements of the two preceding rows.

    For an element in row $s^k$ (let's call it $b_1$), which is in the first column, and the elements in row $s^{k+1}$ (let's call them $c_1, c_2, \dots$) and $s^{k+2}$ (let's call them $d_1, d_2, \dots$), the calculation is:

    $b_1 = -\frac{\begin{vmatrix} a_n & a_{n-2} \\ a_{n-1} & a_{n-3} \end{vmatrix}}{a_{n-1}} = \frac{a_{n-1} a_{n-2} - a_n a_{n-3}}{a_{n-1}}$

    In general, for an element in row $k$, column $j$, denoted as $R_{k,j}$, based on rows $k-1$ and $k-2$:

    $R_{k,1} = -\frac{\begin{vmatrix} R_{k-1,1} & R_{k-1, j+1} \\ R_{k-2,1} & R_{k-2, j+1} \end{vmatrix}}{R_{k-1,1}} = \frac{R_{k-1,1} R_{k-2, j+1} - R_{k-2,1} R_{k-1, j+1}}{R_{k-1,1}}$

    Here, $j$ refers to the column index, starting from $j=1$. The elements in the first column are the most important for stability.

**Example Routh Array Structure:**

| Row     | Column 1 | Column 2 | Column 3 | ... |
| :------ | :------- | :------- | :------- | :-- |
| $s^n$   | $a_n$    | $a_{n-2}$  | $a_{n-4}$  | ... |
| $s^{n-1}$ | $a_{n-1}$  | $a_{n-3}$  | $a_{n-5}$  | ... |
| $s^{n-2}$ | $b_1$    | $b_2$    | $b_3$    | ... |
| $s^{n-3}$ | $c_1$    | $c_2$    | $c_3$    | ... |
| ...     | ...      | ...      | ...      | ... |
| $s^0$   | $e_1$    |          |          |     |

**3.3 Routh's Stability Criterion Statement:**

The number of roots of the characteristic equation that lie in the right-half of the $s$-plane is equal to the number of sign changes in the first column of the Routh array.

**Conditions for Stability:**

For a system to be stable, all roots of the characteristic equation must lie in the left-half of the $s$-plane. This means:

1.  **All coefficients of the characteristic polynomial must be present and positive.** If any coefficient is zero or negative (assuming $a_n > 0$), the system is either unstable or marginally stable. This is a necessary but not sufficient condition.
2.  **All elements in the first column of the Routh array must be positive.**

**3.4 Special Cases in Routh's Criterion:**

**Case 1: Zero in the First Column**

If the first element of any row in the first column is zero, the criterion cannot be applied directly.

*   **Solution:** Replace the zero with a small positive number, denoted by $\epsilon$, and continue the array construction. Then, analyze the signs in the first column by taking the limit as $\epsilon \to 0^+$.
*   **Example:** If the first column has elements $2, 0, 3, 4$, then replace 0 with $\epsilon$. The signs would be $+, \epsilon, +, +$. As $\epsilon \to 0^+$, the signs become $+, +, +, +$, indicating no sign changes (if no other issues). If the first column was $2, -1, 0, 4$, it becomes $+, -, \epsilon, +$. As $\epsilon \to 0^+$, the signs become $+, -, +, +$. There is a sign change from $-$ to $+$, indicating instability.

**Case 2: Entire Row of Zeros**

If an entire row of the Routh array becomes zero, it indicates that the system has **poles on the imaginary axis** or **poles that are symmetric with respect to the origin**. The system is either marginally stable or unstable.

*   **Solution:** The row of zeros signifies that the roots are symmetrically located with respect to the imaginary axis. To find these roots, form an **auxiliary polynomial** from the coefficients of the row *above* the row of zeros. Differentiate the auxiliary polynomial and replace the row of zeros with the coefficients of the differentiated polynomial.
*   **Auxiliary Polynomial ($A(s)$):** The auxiliary polynomial is formed using the elements of the row *just before* the row of zeros, starting from the $s^k$ column, where $k$ is the power corresponding to that row. For example, if row $s^3$ is all zeros, the auxiliary polynomial is formed from the row $s^4$ as $A(s) = R_{4,1}s^4 + R_{4,2}s^2 + R_{4,3}s^0$.
*   **Marginal Stability:** If the auxiliary polynomial has roots on the imaginary axis (e.g., $s = \pm j\omega$), and these are the only roots not in the LHP, the system is marginally stable.
*   **Instability:** If the auxiliary polynomial has roots in the RHP, the system is unstable. If the auxiliary polynomial has repeated roots on the imaginary axis, the system is unstable.

**Case 3: Zero in the First Column but Not the Entire Row**

This is handled by the $\epsilon$ method as described in Case 1.

**Example of Routh Array Construction:**

**Problem:** Determine the stability of a system with the characteristic equation: $s^3 + 6s^2 + 11s + 6 = 0$.

1.  **Characteristic Equation:** $a_3=1, a_2=6, a_1=11, a_0=6$. All coefficients are present and positive.

2.  **Construct Routh Array:**

    | Row     | Column 1 | Column 2 |
    | :------ | :------- | :------- |
    | $s^3$   | 1        | 11       |
    | $s^2$   | 6        | 6        |
    | $s^1$   | $b_1$    | $b_2$    |
    | $s^0$   | $c_1$    |          |

3.  **Calculate $b_1$:**
    $b_1 = \frac{(6 \times 11) - (1 \times 6)}{6} = \frac{66 - 6}{6} = \frac{60}{6} = 10$

4.  **Calculate $b_2$:**
    $b_2 = \frac{(6 \times 6) - (1 \times 0)}{6} = \frac{36 - 0}{6} = 6$ (Assuming the next coefficient in the $s^3$ row is 0)

    | Row     | Column 1 | Column 2 |
    | :------ | :------- | :------- |
    | $s^3$   | 1        | 11       |
    | $s^2$   | 6        | 6        |
    | $s^1$   | 10       | 0        |
    | $s^0$   | $c_1$    |          |

5.  **Calculate $c_1$:**
    $c_1 = \frac{(10 \times 6) - (6 \times 0)}{10} = \frac{60 - 0}{10} = 6$

    | Row     | Column 1 | Column 2 |
    | :------ | :------- | :------- |
    | $s^3$   | 1        | 11       |
    | $s^2$   | 6        | 6        |
    | $s^1$   | 10       | 0        |
    | $s^0$   | 6        |          |

6.  **Analyze First Column:** The elements in the first column are 1, 6, 10, 6. All are positive.

7.  **Conclusion:** Since there are no sign changes in the first column, all roots of the characteristic equation lie in the left-half of the $s$-plane. Therefore, the system is **stable**.

**Example of Case 2 (Entire Row of Zeros):**

**Problem:** Determine the stability of a system with the characteristic equation: $s^4 + s^3 + 2s^2 + 2s + 1 = 0$.

1.  **Characteristic Equation:** $a_4=1, a_3=1, a_2=2, a_1=2, a_0=1$. All coefficients are present and positive.

2.  **Construct Routh Array:**

    | Row     | Column 1 | Column 2 | Column 3 |
    | :------ | :------- | :------- | :------- |
    | $s^4$   | 1        | 2        | 1        |
    | $s^3$   | 1        | 2        | 0        |
    | $s^2$   | $b_1$    | $b_2$    |          |
    | $s^1$   | $c_1$    |          |          |
    | $s^0$   | $d_1$    |          |          |

3.  **Calculate $b_1$:**
    $b_1 = \frac{(1 \times 2) - (1 \times 2)}{1} = \frac{2 - 2}{1} = 0$

4.  **Calculate $b_2$:**
    $b_2 = \frac{(1 \times 1) - (1 \times 0)}{1} = \frac{1 - 0}{1} = 1$

    | Row     | Column 1 | Column 2 | Column 3 |
    | :------ | :------- | :------- | :------- |
    | $s^4$   | 1        | 2        | 1        |
    | $s^3$   | 1        | 2        | 0        |
    | $s^2$   | 0        | 1        |          |
    | $s^1$   | $c_1$    |          |          |
    | $s^0$   | $d_1$    |          |          |

    We have a zero in the first column of the $s^2$ row. This indicates the special case of an entire row becoming zero if we continue with $\epsilon$. Let's see if the $s^1$ row becomes all zeros.

5.  **Using $\epsilon$ for $s^2$ row:**
    Replace the zero with $\epsilon$:

    | Row     | Column 1 | Column 2 | Column 3 |
    | :------ | :------- | :------- | :------- |
    | $s^4$   | 1        | 2        | 1        |
    | $s^3$   | 1        | 2        | 0        |
    | $s^2$   | $\epsilon$ | 1        |          |
    | $s^1$   | $c_1$    |          |          |
    | $s^0$   | $d_1$    |          |          |

6.  **Calculate $c_1$:**
    $c_1 = \frac{(\epsilon \times 2) - (1 \times 1)}{\epsilon} = \frac{2\epsilon - 1}{\epsilon} = 2 - \frac{1}{\epsilon}$

7.  **Calculate $d_1$:**
    $d_1 = \frac{(c_1 \times 1) - (\epsilon \times 0)}{c_1} = 1$

    | Row     | Column 1   | Column 2 | Column 3 |
    | :------ | :--------- | :------- | :------- |
    | $s^4$   | 1          | 2        | 1        |
    | $s^3$   | 1          | 2        | 0        |
    | $s^2$   | $\epsilon$   | 1        |          |
    | $s^1$   | $2 - 1/\epsilon$ | 0        |          |
    | $s^0$   | 1          |          |          |

8.  **Analyze First Column (with $\epsilon \to 0^+$):**
    *   $s^4: 1 (+)$
    *   $s^3: 1 (+)$
    *   $s^2: \epsilon (+)$ as $\epsilon \to 0^+$
    *   $s^1: 2 - 1/\epsilon \approx -1/\epsilon (-)$ as $\epsilon \to 0^+$
    *   $s^0: 1 (+)$

    The signs in the first column are: $+, +, +, -, +$.
    There are **two sign changes** (from + to - between $s^2$ and $s^1$, and from - to + between $s^1$ and $s^0$).

9.  **Conclusion (using $\epsilon$):** The presence of two sign changes indicates that there are two roots in the right-half of the $s$-plane. Therefore, the system is **unstable**.

**Alternative Analysis for Case 2 (Entire Row of Zeros):**

When the $s^2$ row yields zeros, it means that the coefficients of the $s^2$ row should have formed an auxiliary polynomial.

1.  **Auxiliary Polynomial $A(s)$ from the row above $s^2$ (which is $s^3$):**
    The row $s^3$ has coefficients 1 and 2. Form the auxiliary polynomial using the powers corresponding to the $s^3$ row:
    $A(s) = 1 \cdot s^3 + 2 \cdot s^1 = s^3 + 2s = 0$

2.  **Find roots of the Auxiliary Polynomial:**
    $s(s^2 + 2) = 0$
    Roots are $s=0$ and $s^2 = -2 \implies s = \pm j\sqrt{2}$.

    *Wait, this is incorrect. The auxiliary polynomial is formed from the row *above* the row that would have been all zeros if we didn't use epsilon.*

Let's re-evaluate Case 2 properly. The zero in the first column of the $s^2$ row means we should consider the row *above* it (the $s^3$ row) to form the auxiliary polynomial.

**Corrected Example of Case 2 (Entire Row of Zeros):**

**Problem:** Determine the stability of a system with the characteristic equation: $s^4 + s^3 + 2s^2 + 2s + 1 = 0$.

*   We found that the $s^2$ row yields $b_1 = 0$. This indicates an auxiliary polynomial.
*   The auxiliary polynomial is formed from the coefficients of the row *above* the row that would have been all zeros (which is the $s^3$ row).
*   **Auxiliary Polynomial from $s^3$ row:** The coefficients of the $s^3$ row are 1 and 2. The powers corresponding to these coefficients in the auxiliary polynomial are $s^{3}$ and $s^{1}$ (because the next coefficient in that row would be for $s^{-1}$ which is zero).
    **Auxiliary Polynomial $A(s) = 1 \cdot s^3 + 2 \cdot s^1 = s^3 + 2s = 0$.**

*   **Find roots of the Auxiliary Polynomial:**
    $s(s^2 + 2) = 0$
    Roots are $s=0$ and $s^2 = -2 \implies s = \pm j\sqrt{2}$.

    These are the roots of the auxiliary polynomial, which correspond to the poles of the system that lie on the imaginary axis or are symmetrically placed.

    *The original Routh array construction indicated a zero in the first column for the $s^2$ row.* This means the system is either marginally stable or unstable.

    **If an entire row becomes zero:** This indicates that the auxiliary polynomial has roots on the imaginary axis or are symmetrically placed.
    For $s^4 + s^3 + 2s^2 + 2s + 1 = 0$:
    When the $s^2$ row had 0 in the first column, it implied that the roots of the auxiliary polynomial formed from the $s^3$ row are the ones causing the issue.
    The auxiliary polynomial from the $s^3$ row is $s^3 + 2s = 0$, with roots $0, +j\sqrt{2}, -j\sqrt{2}$.

    Let's re-examine the construction using the rule: "If an entire row becomes zero, form the auxiliary polynomial from the coefficients of the row above the row of zeros. Differentiate the auxiliary polynomial and replace the row of zeros with the coefficients of the differentiated polynomial."

    | Row     | Column 1 | Column 2 | Column 3 |
    | :------ | :------- | :------- | :------- |
    | $s^4$   | 1        | 2        | 1        |
    | $s^3$   | 1        | 2        | 0        |
    | $s^2$   | 0        | 1        |          |  <-- This row would be all zeros if we used $\epsilon$ in the first column and a calculation resulted in 0 for the second column element too.

    In our example, only the first element of the $s^2$ row became zero. This implies the system is NOT marginally stable due to a row of zeros. Instead, we should stick with the $\epsilon$ method.

    **Revisit the $\epsilon$ analysis:**
    The first column signs were: $+, +, +, -, +$.
    Two sign changes. This indicates instability with two RHP roots.

**Let's try a classic example of Marginal Stability (Case 2):**

**Problem:** Determine the stability of a system with the characteristic equation: $s^3 + 2s^2 + 3s + 6 = 0$.

1.  **Characteristic Equation:** $a_3=1, a_2=2, a_1=3, a_0=6$. All coefficients are present and positive.

2.  **Construct Routh Array:**

    | Row     | Column 1 | Column 2 |
    | :------ | :------- | :------- |
    | $s^3$   | 1        | 3        |
    | $s^2$   | 2        | 6        |
    | $s^1$   | $b_1$    | $b_2$    |
    | $s^0$   | $c_1$    |          |

3.  **Calculate $b_1$:**
    $b_1 = \frac{(2 \times 3) - (1 \times 6)}{2} = \frac{6 - 6}{2} = 0$

4.  **Calculate $b_2$:**
    $b_2 = \frac{(2 \times 6) - (1 \times 0)}{2} = \frac{12 - 0}{2} = 6$

    | Row     | Column 1 | Column 2 |
    | :------ | :------- | :------- |
    | $s^3$   | 1        | 3        |
    | $s^2$   | 2        | 6        |
    | $s^1$   | 0        | 6        |
    | $s^0$   | $c_1$    |          |

    We have a zero in the first column of the $s^1$ row. We need to use the $\epsilon$ method here.

5.  **Using $\epsilon$ for $s^1$ row:**
    Replace the zero with $\epsilon$:

    | Row     | Column 1 | Column 2 |
    | :------ | :------- | :------- |
    | $s^3$   | 1        | 3        |
    | $s^2$   | 2        | 6        |
    | $s^1$   | $\epsilon$ | 6        |
    | $s^0$   | $c_1$    |          |

6.  **Calculate $c_1$:**
    $c_1 = \frac{(\epsilon \times 6) - (2 \times 6)}{\epsilon} = \frac{6\epsilon - 12}{\epsilon} = 6 - \frac{12}{\epsilon}$

    | Row     | Column 1   | Column 2 |
    | :------ | :--------- | :------- |
    | $s^3$   | 1          | 3        |
    | $s^2$   | 2          | 6        |
    | $s^1$   | $\epsilon$   | 6        |
    | $s^0$   | $6 - 12/\epsilon$ |          |

7.  **Analyze First Column (with $\epsilon \to 0^+$):**
    *   $s^3: 1 (+)$
    *   $s^2: 2 (+)$
    *   $s^1: \epsilon (+)$ as $\epsilon \to 0^+$
    *   $s^0: 6 - 12/\epsilon \approx -12/\epsilon (-)$ as $\epsilon \to 0^+$

    The signs in the first column are: $+, +, +, -$.
    There is **one sign change** (from + to - between $s^1$ and $s^0$). This indicates one root in the RHP, so the system is unstable.

**Let's try the correct scenario for Marginal Stability (Auxiliary Polynomial):**

**Problem:** Determine the stability of a system with the characteristic equation: $s^3 + s^2 + 2s + 2 = 0$.

1.  **Characteristic Equation:** $a_3=1, a_2=1, a_1=2, a_0=2$. All coefficients are present and positive.

2.  **Construct Routh Array:**

    | Row     | Column 1 | Column 2 |
    | :------ | :------- | :------- |
    | $s^3$   | 1        | 2        |
    | $s^2$   | 1        | 2        |
    | $s^1$   | $b_1$    | $b_2$    |
    | $s^0$   | $c_1$    |          |

3.  **Calculate $b_1$:**
    $b_1 = \frac{(1 \times 2) - (1 \times 2)}{1} = \frac{2 - 2}{1} = 0$

4.  **Calculate $b_2$:**
    $b_2 = \frac{(1 \times 2) - (1 \times 0)}{1} = \frac{2 - 0}{1} = 2$

    | Row     | Column 1 | Column 2 |
    | :------ | :------- | :------- |
    | $s^3$   | 1        | 2        |
    | $s^2$   | 1        | 2        |
    | $s^1$   | 0        | 2        |
    | $s^0$   | $c_1$    |          |

    Here, the $s^1$ row starts with a zero. This signals that the auxiliary polynomial is formed from the $s^2$ row.

5.  **Auxiliary Polynomial ($A(s)$) from the $s^2$ row:**
    The coefficients of the $s^2$ row are 1 and 2.
    The auxiliary polynomial is formed using powers $s^2$ and $s^0$:
    $A(s) = 1 \cdot s^2 + 2 \cdot s^0 = s^2 + 2 = 0$.

6.  **Find roots of the Auxiliary Polynomial:**
    $s^2 + 2 = 0 \implies s^2 = -2 \implies s = \pm j\sqrt{2}$.

7.  **Interpret Auxiliary Polynomial Roots:** The roots of the auxiliary polynomial lie on the imaginary axis ($s = \pm j\sqrt{2}$). This means the system has poles on the imaginary axis.

8.  **Continue Routh Array to verify:**
    Using the $\epsilon$ method for the $s^1$ row:

    | Row     | Column 1 | Column 2 |
    | :------ | :------- | :------- |
    | $s^3$   | 1        | 2        |
    | $s^2$   | 1        | 2        |
    | $s^1$   | $\epsilon$ | 2        |
    | $s^0$   | $c_1$    |          |

    **Calculate $c_1$:**
    $c_1 = \frac{(\epsilon \times 2) - (1 \times 2)}{\epsilon} = \frac{2\epsilon - 2}{\epsilon} = 2 - \frac{2}{\epsilon}$

    | Row     | Column 1   | Column 2 |
    | :------ | :--------- | :------- |
    | $s^3$   | 1          | 2        |
    | $s^2$   | 1          | 2        |
    | $s^1$   | $\epsilon$   | 2        |
    | $s^0$   | $2 - 2/\epsilon$ |          |

9.  **Analyze First Column (with $\epsilon \to 0^+$):**
    *   $s^3: 1 (+)$
    *   $s^2: 1 (+)$
    *   $s^1: \epsilon (+)$ as $\epsilon \to 0^+$
    *   $s^0: 2 - 2/\epsilon \approx -2/\epsilon (-)$ as $\epsilon \to 0^+$

    The signs in the first column are: $+, +, +, -$.
    There is **one sign change**. This indicates one RHP root, and therefore instability.

    *This is still not the correct example for marginal stability via the auxiliary polynomial rule.*

**Let's re-state the rule for "Entire Row of Zeros":**

If an entire row (except the first element) becomes zero, it indicates that the roots of the characteristic equation are symmetrically located with respect to the origin.
*   If the row of zeros is the $s^1$ row, the auxiliary polynomial has roots on the imaginary axis ($ \pm j\omega$). If these are the *only* roots not in the LHP, the system is marginally stable.
*   If the row of zeros is the $s^0$ row, it means $a_0=0$, which is not usually a concern for stability itself but indicates a system that doesn't return

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
