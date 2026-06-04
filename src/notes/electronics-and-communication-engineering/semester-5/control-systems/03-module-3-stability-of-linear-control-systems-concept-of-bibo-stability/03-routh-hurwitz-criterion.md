---
title: "Routh Hurwitz Criterion."
subject: "CONTROL SYSTEMS"
module: "Module 3: Stability of linear control systems : Concept of BIBO stability"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe958"
status: "completed"
scrapedAt: "2026-05-23T17:54:43.157Z"
---
# CONTROL SYSTEMS: Module 3 - Stability of Linear Control Systems

## Topic: Routh-Hurwitz Criterion

### Introduction to Stability

**Definition of Stability:** A linear time-invariant (LTI) system is considered stable if its output remains bounded for all bounded inputs. Conversely, if the output grows unboundedly for even a single bounded input, the system is unstable.

**Concept of BIBO (Bounded-Input, Bounded-Output) Stability:** BIBO stability is a direct consequence of the location of the poles of the system's closed-loop transfer function in the s-plane.

*   **Stable System:** All poles of the closed-loop transfer function lie in the **left-half of the s-plane (LHP)**. This means the real part of all poles is negative.
*   **Unstable System:** At least one pole of the closed-loop transfer function lies in the **right-half of the s-plane (RHP)**. This means at least one pole has a positive real part.
*   **Marginally Stable System:**
    *   The system has at least one pole on the **imaginary axis** (real part is zero) and all other poles are in the LHP.
    *   The poles on the imaginary axis are **simple poles** (not repeated). If poles on the imaginary axis are repeated, the system is unstable.

### The Characteristic Equation

The stability of a linear control system is determined by the roots of its **characteristic equation**. For a system with a transfer function $G(s)$ and a unity feedback loop, the characteristic equation is given by $1 + G(s)H(s) = 0$. If the open-loop transfer function is $G(s)$, and the feedback is unity ($H(s)=1$), then the characteristic equation is $1 + G(s) = 0$.

For a rational transfer function, the characteristic equation is a polynomial in $s$:
$a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0 = 0$

The roots of this polynomial are the **poles** of the closed-loop system.

### Routh-Hurwitz Criterion: A Necessary and Sufficient Condition for Stability

The Routh-Hurwitz criterion is an algebraic method that determines the number of roots of the characteristic equation that lie in the RHP without actually solving for the roots. This is crucial for assessing stability.

**Key Idea:** The criterion provides a direct way to check if all the coefficients of the characteristic polynomial are positive and if there are any sign changes in the first column of the Routh array.

#### The Routh Array Construction

The Routh array (or Routh table) is constructed using the coefficients of the characteristic polynomial:
$P(s) = a_n s^n + a_{n-1} s^{n-1} + a_{n-2} s^{n-2} + \dots + a_1 s + a_0$

**Step 1: Form the first two rows.**
The first row contains the coefficients with odd powers of $s$, starting from $s^n$.
The second row contains the coefficients with even powers of $s$, starting from $s^{n-1}$.

| $s^n$     | $a_n$   | $a_{n-2}$ | $a_{n-4}$ | ... |
| :-------- | :------ | :-------- | :-------- | :-- |
| $s^{n-1}$ | $a_{n-1}$ | $a_{n-3}$ | $a_{n-5}$ | ... |

**Step 2: Calculate the remaining rows.**
The elements of the subsequent rows are calculated using the following determinants:

For the $s^{n-2}$ row:
$b_1 = -\frac{1}{a_{n-1}} \begin{vmatrix} a_n & a_{n-2} \\ a_{n-1} & a_{n-3} \end{vmatrix} = -\frac{(a_n a_{n-3} - a_{n-1} a_{n-2})}{a_{n-1}} = \frac{a_{n-1} a_{n-2} - a_n a_{n-3}}{a_{n-1}}$

$b_2 = -\frac{1}{a_{n-1}} \begin{vmatrix} a_n & a_{n-4} \\ a_{n-1} & a_{n-5} \end{vmatrix} = \frac{a_{n-1} a_{n-4} - a_n a_{n-5}}{a_{n-1}}$

For the $s^{n-3}$ row:
$c_1 = -\frac{1}{b_1} \begin{vmatrix} a_{n-1} & a_{n-3} \\ b_1 & b_2 \end{vmatrix} = \frac{b_1 a_{n-3} - a_{n-1} b_2}{b_1}$

$c_2 = -\frac{1}{b_1} \begin{vmatrix} a_{n-1} & a_{n-5} \\ b_1 & b_3 \end{vmatrix} = \frac{b_1 a_{n-5} - a_{n-1} b_3}{b_1}$

... and so on, until the $s^0$ row is completed.

**General Formula for elements in row $s^{n-k}$:**
Let the coefficients of the $s^{n-k+1}$ row be $p_1, p_2, p_3, \dots$ and the coefficients of the $s^{n-k}$ row be $q_1, q_2, q_3, \dots$.
The coefficients of the $s^{n-k-1}$ row ($r_1, r_2, r_3, \dots$) are calculated as:

$r_1 = \frac{p_1 q_2 - q_1 p_2}{p_1}$
$r_2 = \frac{p_1 q_3 - q_1 p_3}{p_1}$
$r_3 = \frac{p_1 q_4 - q_1 p_4}{p_1}$
...

**Step 3: Interpret the Routh Array for Stability.**

The **Routh-Hurwitz Criterion states:**
A system is BIBO stable if and only if:
1.  **All coefficients ($a_n, a_{n-1}, \dots, a_0$) of the characteristic polynomial are present and have the same sign (usually positive).** If any coefficient is zero or has a different sign, the system is unstable or marginally stable. However, this is a necessary but not sufficient condition for stability. The Routh array provides the sufficient condition.
2.  **All the elements in the first column of the Routh array have the same sign (and are non-zero).**

**Number of roots in the RHP:**
The number of roots of the characteristic equation that lie in the right-half of the s-plane is equal to the number of sign changes in the first column of the Routh array.

---

### **Example 1: Basic Stability Check**

Consider the characteristic equation: $s^3 + 2s^2 + 3s + 4 = 0$

**Step 1: Check coefficients.**
All coefficients (1, 2, 3, 4) are positive and present. This is a necessary condition.

**Step 2: Construct the Routh Array.**
Characteristic polynomial: $a_3=1, a_2=2, a_1=3, a_0=4$

| $s^3$ | 1   | 3   |
| :---- | :-- | :-- |
| $s^2$ | 2   | 4   |
| $s^1$ | $b_1$ | $b_2$ |
| $s^0$ | $c_1$ |     |

Calculate $b_1$:
$b_1 = -\frac{1}{2} \begin{vmatrix} 1 & 3 \\ 2 & 4 \end{vmatrix} = -\frac{(1 \times 4 - 2 \times 3)}{2} = -\frac{(4 - 6)}{2} = -\frac{-2}{2} = 1$

Calculate $b_2$:
$b_2 = -\frac{1}{2} \begin{vmatrix} 1 & 0 \\ 2 & 0 \end{vmatrix} = 0$ (Assuming no further terms beyond $a_0$)

| $s^3$ | 1   | 3   |
| :---- | :-- | :-- |
| $s^2$ | 2   | 4   |
| $s^1$ | 1   | 0   |
| $s^0$ | $c_1$ |     |

Calculate $c_1$:
$c_1 = -\frac{1}{1} \begin{vmatrix} 2 & 4 \\ 1 & 0 \end{vmatrix} = -\frac{(2 \times 0 - 1 \times 4)}{1} = -\frac{(0 - 4)}{1} = 4$

**Routh Array:**

| $s^3$ | 1   | 3   |
| :---- | :-- | :-- |
| $s^2$ | 2   | 4   |
| $s^1$ | 1   | 0   |
| $s^0$ | 4   |     |

**Step 3: Interpret.**
The first column elements are 1, 2, 1, 4. All are positive.
**Conclusion:** There are no sign changes in the first column. Therefore, all the roots of the characteristic equation lie in the LHP. The system is **stable**.

---

### Special Cases in Routh Array

#### Case 1: A Zero in the First Column

If an element in the first column becomes zero, the Routh array cannot be completed. This indicates that the system is **marginally stable or unstable**.

**Solution:** Replace the zero with a small positive number $\epsilon$ and continue the array construction. Analyze the behavior as $\epsilon \to 0^+$.

**Example 2: Zero in the First Column**

Characteristic equation: $s^3 + 2s^2 + s + 2 = 0$

**Routh Array:**

| $s^3$ | 1   | 1   |
| :---- | :-- | :-- |
| $s^2$ | 2   | 2   |
| $s^1$ | $b_1$ | $b_2$ |
| $s^0$ | $c_1$ |     |

Calculate $b_1$:
$b_1 = -\frac{1}{2} \begin{vmatrix} 1 & 1 \\ 2 & 2 \end{vmatrix} = -\frac{(1 \times 2 - 2 \times 1)}{2} = 0$

| $s^3$ | 1   | 1   |
| :---- | :-- | :-- |
| $s^2$ | 2   | 2   |
| $s^1$ | 0   |     |
| $s^0$ | $c_1$ |     |

Since $b_1=0$, we replace it with $\epsilon$.

| $s^3$ | 1   | 1   |
| :---- | :-- | :-- |
| $s^2$ | 2   | 2   |
| $s^1$ | $\epsilon$ | 0   |
| $s^0$ | $c_1$ |     |

Calculate $c_1$:
$c_1 = -\frac{1}{\epsilon} \begin{vmatrix} 2 & 2 \\ \epsilon & 0 \end{vmatrix} = -\frac{(2 \times 0 - \epsilon \times 2)}{\epsilon} = -\frac{-2\epsilon}{\epsilon} = 2$

**Routh Array (with $\epsilon$):**

| $s^3$ | 1   | 1   |
| :---- | :-- | :-- |
| $s^2$ | 2   | 2   |
| $s^1$ | $\epsilon$ | 0   |
| $s^0$ | 2   |     |

**Interpretation as $\epsilon \to 0^+$:**
The first column elements are 1, 2, $\epsilon$, 2.
*   For $\epsilon > 0$, all are positive. No sign changes.
*   As $\epsilon \to 0^+$, the first column becomes 1, 2, 0, 2.
The presence of zero in the first column (when it's not the last element) indicates **marginal stability**.

**Mathematical Insight:**
When a zero appears in the first column of the Routh array, it implies that the polynomial corresponding to the row just above the row with the zero is an auxiliary polynomial. This auxiliary polynomial has roots on the imaginary axis.

In this case, the $s^2$ row coefficients are 2 and 2. The auxiliary polynomial is $2s^2 + 2 = 0$, which gives $s^2 = -1$, so $s = \pm j$. These are roots on the imaginary axis.
The original polynomial $s^3 + 2s^2 + s + 2$ can be factored as $(s+2)(s^2+1) = 0$. The roots are $-2, +j, -j$. One root in LHP, two roots on the imaginary axis. This is a **marginally stable** system.

**Important Point:** If a zero occurs in the first column, and the element below it is non-zero, the system is unstable. If a zero occurs in the first column, and the element below it is also zero, it indicates roots symmetric with respect to the origin.

#### Case 2: An Entire Row of Zeros

If an entire row of the Routh array becomes zero, it indicates that the characteristic equation has roots that are symmetric with respect to the origin. This can happen in two ways:
*   Roots symmetric about the origin (e.g., $\pm \alpha$).
*   Roots occurring in conjugate pairs on the imaginary axis (e.g., $\pm j\omega$).

In both these sub-cases, the system is **marginally stable or unstable**.

**Solution:**
The row of zeros indicates the presence of roots on the imaginary axis. The auxiliary polynomial is formed using the coefficients of the row **just above** the row of zeros. The roots of this auxiliary polynomial are the roots of the characteristic equation that lie on the imaginary axis.

**Example 3: Entire Row of Zeros**

Characteristic equation: $s^4 + s^3 + 2s^2 + 2s + 1 = 0$

**Routh Array:**

| $s^4$ | 1   | 2   | 1   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 2   | 0   |
| $s^2$ | $b_1$ | $b_2$ |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

Calculate $b_1$:
$b_1 = -\frac{1}{1} \begin{vmatrix} 1 & 2 \\ 1 & 2 \end{vmatrix} = -\frac{(1 \times 2 - 1 \times 2)}{1} = 0$

Calculate $b_2$:
$b_2 = -\frac{1}{1} \begin{vmatrix} 1 & 1 \\ 1 & 0 \end{vmatrix} = -\frac{(1 \times 0 - 1 \times 1)}{1} = 1$

| $s^4$ | 1   | 2   | 1   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 2   | 0   |
| $s^2$ | 0   | 1   |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

Since $b_1=0$, we need to check the next element $b_2$. $b_2$ is 1. This means the $s^2$ row is not entirely zero. The zero in $b_1$ indicates a potential issue.

Let's check the case where $b_1$ calculation leads to a zero and the element to its right is also zero.
If $b_2$ was also zero, the entire $s^2$ row would be zero. This happens if the numerator $(a_{n-1} a_{n-4} - a_n a_{n-5})$ is zero for $b_2$.

**Let's re-examine the example for a true entire row of zeros:**

Consider the characteristic equation: $s^4 + s^3 + s^2 + s + 1 = 0$

**Routh Array:**

| $s^4$ | 1   | 1   | 1   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 1   | 0   |
| $s^2$ | $b_1$ | $b_2$ |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

Calculate $b_1$:
$b_1 = -\frac{1}{1} \begin{vmatrix} 1 & 1 \\ 1 & 1 \end{vmatrix} = -\frac{(1 \times 1 - 1 \times 1)}{1} = 0$

Calculate $b_2$:
$b_2 = -\frac{1}{1} \begin{vmatrix} 1 & 1 \\ 1 & 0 \end{vmatrix} = -\frac{(1 \times 0 - 1 \times 1)}{1} = 1$

| $s^4$ | 1   | 1   | 1   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 1   | 0   |
| $s^2$ | 0   | 1   |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

Now, this is not an entire row of zeros in the $s^2$ row.
Let's consider a case that *does* produce an entire row of zeros.

**Example 3 (Revised): An Entire Row of Zeros**

Characteristic equation: $s^4 + 2s^3 + 3s^2 + 4s + 5 = 0$ (This won't produce an entire row of zeros)

Let's consider a system where $s^2+1$ is a factor. For instance, $(s^2+1)(s+1)(s+2) = (s^2+1)(s^2+3s+2) = s^4 + 3s^3 + 2s^2 + s^2 + 3s + 2 = s^4 + 3s^3 + 3s^2 + 3s + 2 = 0$.

**Routh Array for $s^4 + 3s^3 + 3s^2 + 3s + 2 = 0$:**

| $s^4$ | 1   | 3   | 2   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 3   | 3   | 0   |
| $s^2$ | $b_1$ | $b_2$ |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

Calculate $b_1$:
$b_1 = -\frac{1}{3} \begin{vmatrix} 1 & 3 \\ 3 & 3 \end{vmatrix} = -\frac{(1 \times 3 - 3 \times 3)}{3} = -\frac{(3 - 9)}{3} = -\frac{-6}{3} = 2$

Calculate $b_2$:
$b_2 = -\frac{1}{3} \begin{vmatrix} 1 & 2 \\ 3 & 0 \end{vmatrix} = -\frac{(1 \times 0 - 3 \times 2)}{3} = -\frac{-6}{3} = 2$

| $s^4$ | 1   | 3   | 2   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 3   | 3   | 0   |
| $s^2$ | 2   | 2   |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

Calculate $c_1$:
$c_1 = -\frac{1}{2} \begin{vmatrix} 3 & 3 \\ 2 & 2 \end{vmatrix} = -\frac{(3 \times 2 - 2 \times 3)}{2} = 0$

| $s^4$ | 1   | 3   | 2   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 3   | 3   | 0   |
| $s^2$ | 2   | 2   |     |
| $s^1$ | 0   |     |     |
| $s^0$ | $d_1$ |     |     |

Here, $c_1$ is zero. Let's use the $\epsilon$ method.

| $s^4$ | 1   | 3   | 2   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 3   | 3   | 0   |
| $s^2$ | 2   | 2   |     |
| $s^1$ | $\epsilon$ | 0   |     |
| $s^0$ | $d_1$ |     |     |

Calculate $d_1$:
$d_1 = -\frac{1}{\epsilon} \begin{vmatrix} 2 & 2 \\ \epsilon & 0 \end{vmatrix} = -\frac{(2 \times 0 - \epsilon \times 2)}{\epsilon} = 2$

**Routh Array (with $\epsilon$):**

| $s^4$ | 1   | 3   | 2   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 3   | 3   | 0   |
| $s^2$ | 2   | 2   |     |
| $s^1$ | $\epsilon$ | 0   |     |
| $s^0$ | 2   |     |     |

The first column is 1, 3, 2, $\epsilon$, 2.
As $\epsilon \to 0^+$, the first column becomes 1, 3, 2, 0, 2.
The presence of zero in the first column (not the last element) implies marginal stability.

**Auxiliary Polynomial:**
The row *above* the row of zeros ($s^1$ row) is the $s^2$ row. The coefficients are 2 and 2.
The auxiliary polynomial is $A(s) = 2s^2 + 2$.
Setting $A(s) = 0$:
$2s^2 + 2 = 0$
$s^2 = -1$
$s = \pm j$

These are roots on the imaginary axis. The original polynomial was $(s^2+1)(s+1)(s+2) = (s^2+1)(s^2+3s+2) = s^4 + 3s^3 + 3s^2 + 3s + 2$.
The roots are $s = \pm j$ (from $s^2+1=0$) and $s = -1, s = -2$ (from $s^2+3s+2=0$).
The roots are $-1, -2, +j, -j$. One root in RHP (-2), no it's not. All roots in LHP or on the imaginary axis.
Let's recheck the Routh array calculation.

My initial example characteristic equation was $s^4 + s^3 + 2s^2 + 2s + 1 = 0$.
Routh Array:
| $s^4$ | 1   | 2   | 1   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 2   | 0   |
| $s^2$ | $b_1$ | $b_2$ |     |

$b_1 = -\frac{1}{1} \begin{vmatrix} 1 & 2 \\ 1 & 2 \end{vmatrix} = 0$
$b_2 = -\frac{1}{1} \begin{vmatrix} 1 & 1 \\ 1 & 0 \end{vmatrix} = 1$

| $s^4$ | 1   | 2   | 1   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 2   | 0   |
| $s^2$ | 0   | 1   |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

This scenario means the $s^2$ row is actually $0s^2 + 1$.
Auxiliary polynomial from $s^3$ row: $1s^3 + 2s = s(s^2+2) = 0$. Roots are $0, \pm j\sqrt{2}$.
This indicates roots on the imaginary axis.

Let's reconsider the definition of "entire row of zeros." This occurs when all coefficients calculated for a particular row are zero.

Consider $s^4 + s^3 + 4s^2 + 5s + 6 = 0$.

| $s^4$ | 1   | 4   | 6   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 5   | 0   |
| $s^2$ | $b_1$ | $b_2$ |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

$b_1 = -\frac{1}{1} \begin{vmatrix} 1 & 4 \\ 1 & 5 \end{vmatrix} = -(5-4) = -1$
$b_2 = -\frac{1}{1} \begin{vmatrix} 1 & 6 \\ 1 & 0 \end{vmatrix} = -(0-6) = 6$

| $s^4$ | 1   | 4   | 6   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 5   | 0   |
| $s^2$ | -1  | 6   |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

$c_1 = -\frac{1}{-1} \begin{vmatrix} 1 & 5 \\ -1 & 6 \end{vmatrix} = \frac{(1 \times 6 - (-1) \times 5)}{-1} = \frac{6+5}{-1} = -11$

$d_1 = -\frac{1}{-11} \begin{vmatrix} -1 & 6 \\ 0 & 0 \end{vmatrix} = 0$

| $s^4$ | 1   | 4   | 6   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 5   | 0   |
| $s^2$ | -1  | 6   |     |
| $s^1$ | -11 |     |     |
| $s^0$ | 0   |     |     |

Here, $d_1 = 0$. This signifies marginal stability.
The auxiliary polynomial comes from the row above the zero, which is the $s^1$ row with coefficient -11.
This implies a root at $s=0$.

**Let's use the correct example for an entire row of zeros:**
Characteristic Equation: $s^5 + 2s^4 + 2s^3 + 4s^2 + s + 2 = 0$

| $s^5$ | 1   | 2   | 1   |
| :---- | :-- | :-- | :-- |
| $s^4$ | 2   | 4   | 2   |
| $s^3$ | $b_1$ | $b_2$ | $b_3$ |
| $s^2$ | $c_1$ | $c_2$ |     |
| $s^1$ | $d_1$ |     |     |
| $s^0$ | $e_1$ |     |     |

$b_1 = -\frac{1}{2} \begin{vmatrix} 1 & 2 \\ 2 & 4 \end{vmatrix} = -\frac{(4-4)}{2} = 0$
$b_2 = -\frac{1}{2} \begin{vmatrix} 1 & 1 \\ 2 & 2 \end{vmatrix} = -\frac{(2-2)}{2} = 0$
$b_3 = -\frac{1}{2} \begin{vmatrix} 1 & 0 \\ 2 & 0 \end{vmatrix} = 0$

| $s^5$ | 1   | 2   | 1   |
| :---- | :-- | :-- | :-- |
| $s^4$ | 2   | 4   | 2   |
| $s^3$ | 0   | 0   | 0   |  <-- Entire row of zeros!
| $s^2$ | $c_1$ | $c_2$ |     |
| $s^1$ | $d_1$ |     |     |
| $s^0$ | $e_1$ |     |     |

**Interpretation:** The $s^3$ row is all zeros. This indicates roots symmetric about the origin. The auxiliary polynomial is formed from the row *above* the zero row, which is the $s^4$ row.
Auxiliary polynomial: $A(s) = 2s^4 + 4s^2 + 2 = 0$
Divide by 2: $s^4 + 2s^2 + 1 = 0$
This is $(s^2+1)^2 = 0$.
The roots are $s^2 = -1$, so $s = \pm j$. Since it's squared, these are repeated roots on the imaginary axis ($+j, +j, -j, -j$).
If a system has repeated roots on the imaginary axis, it is **unstable**.

**Original polynomial roots:**
The polynomial can be factored. Since $s^3$ row has zeros, $s^4$ row is $2(s^4+2s^2+1)$, the roots of $s^4+2s^2+1=0$ are roots of the original polynomial.
The original polynomial can be written as $(2s^4 + 4s^2 + 2) \times Q(s)$.
This is $(s^4 + 2s^2 + 1) \times 2 \times Q(s)$.
Actually, if the auxiliary polynomial is $A(s)$, then $A(s)$ is a factor of the original polynomial.
So, the original polynomial $s^5 + 2s^4 + 2s^3 + 4s^2 + s + 2 = 0$ has factors $(s^2+1)^2$.
$(s^2+1)^2 = s^4 + 2s^2 + 1$.
Let's try dividing the polynomial by $(s^4 + 2s^2 + 1)$:
$(s^5 + 2s^4 + 2s^3 + 4s^2 + s + 2) / (s^4 + 2s^2 + 1) = s + 2$.
So, the factorization is $(s^4 + 2s^2 + 1)(s+2) = (s^2+1)^2 (s+2) = 0$.
The roots are $s = -2$, and $s = \pm j$ (repeated twice).
The roots are $-2, j, j, -j, -j$.
Since there are repeated roots on the imaginary axis, the system is **unstable**.

**Routh-Hurwitz Criterion for Marginal Stability:**
A system is marginally stable if and only if:
1.  The first column has no sign changes (all entries positive as $\epsilon \to 0^+$).
2.  There is a simple zero in the first column (not an entire row of zeros). In this case, the system has roots on the imaginary axis, and all other roots are in the LHP.
3.  An entire row of zeros occurs, and the auxiliary polynomial has simple roots on the imaginary axis (no repeated roots on the imaginary axis).

**Correction:** My understanding of marginal stability needs refinement based on textbook definitions.
*   If there's a simple zero in the first column (and no sign changes), the system is marginally stable.
*   If there is an entire row of zeros, the auxiliary polynomial has roots on the imaginary axis. If these roots are simple, the system is marginally stable. If these roots are repeated, the system is unstable.

In Example 3 (Revised) with $s^4 + 3s^3 + 3s^2 + 3s + 2 = 0$, the auxiliary polynomial was $2s^2+2=0$, roots $\pm j$. These are simple roots on the imaginary axis. The first column was 1, 3, 2, $\epsilon$, 2. As $\epsilon \to 0^+$, the first column is 1, 3, 2, 0, 2. The presence of a simple zero means marginal stability. This system is indeed marginally stable with roots $-1, -2, +j, -j$.

In the $s^5 + 2s^4 + 2s^3 + 4s^2 + s + 2 = 0$ example, the auxiliary polynomial was $(s^2+1)^2=0$, with roots $\pm j$ repeated. This leads to instability.

---

#### Case 3: A Zero in the First Column, But Not an Entire Row

This was covered in Example 2. When the first element of a row is zero ($b_1=0$), we replace it with $\epsilon$. The calculations proceed. If, after this, the first column contains only positive numbers (as $\epsilon \to 0^+$), and there's a zero in the first column, it implies the presence of roots on the imaginary axis.

*   **Simple zero:** If the zero appears only once in the first column (and no sign changes), it indicates simple roots on the imaginary axis. The system is **marginally stable**.
*   **Repeated zero:** If using $\epsilon$ results in another zero appearing later in the first column, or if an entire row of zeros occurs, it implies roots with positive real parts or repeated roots on the imaginary axis, leading to **instability**.

---

### Practical Considerations and Simplifications

1.  **Multiplying a Row by a Positive Constant:** Multiplying any row of the Routh array by a positive constant does not change the stability of the system. This can be used to simplify calculations by dividing by common factors.
    *   In the $s^3$ row of Example 1, we had coefficients (1, 3) and the $s^2$ row (2, 4).
    *   We could divide the $s^2$ row by 2 to get (1, 2).
    *   The calculation for $b_1$ would then be: $b_1 = -\frac{1}{1} \begin{vmatrix} 1 & 3 \\ 1 & 2 \end{vmatrix} = -(2-3) = 1$. This is the same result.

2.  **The $s^1$ row calculation can be simplified:**
    If the $s^2$ row has coefficients $p_1, p_2$, and the $s^3$ row has $q_1, q_2$, then:
    $b_1 = \frac{q_1 p_2 - p_1 q_2}{p_1}$
    $c_1 = \frac{p_1 b_2 - q_1 b_1}{b_1}$

    If the $s^2$ row elements are $a_{n-2}, a_{n-4}, \dots$ and $s^3$ row elements are $a_{n-1}, a_{n-3}, \dots$.
    $b_1 = \frac{a_{n-1} a_{n-4} - a_n a_{n-3}}{a_{n-1}}$ (This is incorrect. The formula is $b_1 = \frac{a_{n-1} a_{n-2} - a_n a_{n-3}}{a_{n-1}}$ from earlier)
    Let's reconfirm:
    $b_1 = \frac{a_{n-1} a_{n-2} - a_n a_{n-3}}{a_{n-1}}$
    $b_2 = \frac{a_{n-1} a_{n-4} - a_n a_{n-5}}{a_{n-1}}$

    $c_1 = \frac{b_1 a_{n-3} - a_{n-1} b_2}{b_1}$

---

### Special Cases for Determining Stability Without Full Array

#### Case 4: Missing Terms in the Characteristic Polynomial

*   **If any coefficient $a_i$ is zero for $0 \le i \le n$, and all other coefficients are non-zero, the system is unstable.** This is because the product of roots is $(-1)^n \frac{a_0}{a_n}$, and if $a_i=0$, it implies at least one root is zero (if $a_0=0$) or the product of roots is zero. If $a_i=0$ for $0 < i < n$, it implies symmetry about the origin or roots on the imaginary axis.
    *   **Exception:** If $a_0 = 0$, it means there is a root at $s=0$, implying marginal stability if other roots are in LHP. However, if any other coefficient is zero, it implies instability.
    *   **Example:** $s^3 + 2s^2 + 4 = 0$. The $s^1$ term is missing ($a_1=0$). This implies instability. Let's verify with Routh array:
        | $s^3$ | 1   | 0   |
        | :---- | :-- | :-- |
        | $s^2$ | 2   | 4   |
        | $s^1$ | $\epsilon$ | 0   |  ($b_1 = -(0-8)/2 = 4$, oops)
        Let's recompute $b_1$ for $s^3 + 0s^2 + 2s + 4 = 0$
        | $s^3$ | 1   | 2   |
        | :---- | :-- | :-- |
        | $s^2$ | 0   | 4   |
        Use $\epsilon$:
        | $s^3$ | 1   | 2   |
        | :---- | :-- | :-- |
        | $s^2$ | $\epsilon$ | 4   |
        | $s^1$ | $c_1$ |     |
        $c_1 = -\frac{1}{\epsilon} \begin{vmatrix} \epsilon & 4 \\ 1 & 2 \end{vmatrix} = -\frac{(2\epsilon-4)}{\epsilon} = \frac{4-2\epsilon}{\epsilon} \approx \frac{4}{\epsilon}$ (large positive)
        | $s^0$ | $d_1$ |     |
        $d_1 = -\frac{1}{c_1} \begin{vmatrix} \epsilon & 4 \\ c_1 & 0 \end{vmatrix} = -\frac{-\epsilon c_1}{c_1} = \epsilon \approx 0$.
        The first column is 1, $\epsilon$, $4/\epsilon$, $0$.
        As $\epsilon \to 0^+$, the first column is 1, $0^+, \infty, 0$.
        This gives 2 sign changes (from 1 to 0, then from 0 to $\infty$, then from $\infty$ to 0). This implies 2 roots in RHP.

*   **If all coefficients are positive, but some are missing (except $a_n$ and $a_0$), it implies that roots exist in the RHP or on the imaginary axis.** The system is unstable or marginally stable.
    *   **Condition:** For a polynomial to have all its roots in the LHP, it is **necessary** (but not sufficient) that all coefficients $a_i$ are present and have the same sign.
    *   Therefore, if any coefficient $a_i$ (for $0 < i < n$) is zero, the system is **not stable**.

#### Case 5: All Coefficients Positive and Present

*   **If all coefficients $a_n, a_{n-1}, \dots, a_0$ are present and positive, it is only a necessary condition for stability.** It doesn't guarantee stability.
*   **If all coefficients are present and positive, AND all entries in the first column of the Routh array are positive, then the system is stable.**

---

### Routh-Hurwitz Criterion Summary for Stability

1.  **Preliminary Check:** All coefficients of the characteristic polynomial must be present and have the same sign (usually positive). If not, the system is unstable or marginally stable.
    *   If $a_0=0$, there's a root at $s=0$, implying marginal stability.
    *   If any other coefficient $a_i$ ($0<i<n$) is zero, the system is unstable.

2.  **Routh Array Construction:** Construct the Routh array from the coefficients of the characteristic polynomial.

3.  **Interpretation:**
    *   **Stable:** All entries in the first column are non-zero and have the same sign (positive).
    *   **Unstable:**
        *   There is at least one sign change in the first column. The number of sign changes equals the number of roots in the RHP.
        *   A zero appears in the first column, and using $\epsilon$ leads to a sign change in the first column as $\epsilon \to 0^+$.
        *   An entire row of zeros occurs, and the auxiliary polynomial has repeated roots on the imaginary axis or in the RHP.
    *   **Marginally Stable:**
        *   A simple zero appears in the first column (no sign changes before or after it), and the auxiliary polynomial has simple roots on the imaginary axis.
        *   An entire row of zeros occurs, and the auxiliary polynomial has only simple roots on the imaginary axis.
        *   The last entry in the first column is zero, but no other entry is zero (implies root at $s=0$).

---

### Practice Questions

**Question 1:**
Determine the stability of a system whose characteristic equation is $s^4 + 5s^3 + 9s^2 + 15s + 10 = 0$.

**Solution 1:**
Characteristic equation coefficients: $a_4=1, a_3=5, a_2=9, a_1=15, a_0=10$. All are positive and present.

Routh Array:
| $s^4$ | 1   | 9   | 10  |
| :---- | :-- | :-- | :-- |
| $s^3$ | 5   | 15  | 0   |
| $s^2$ | $b_1$ | $b_2$ |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

Simplify $s^3$ row by dividing by 5: (1, 3, 0)

| $s^4$ | 1   | 9   | 10  |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 3   | 0   |
| $s^2$ | $b_1$ | $b_2$ |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

$b_1 = -\frac{1}{1} \begin{vmatrix} 1 & 9 \\ 1 & 3 \end{vmatrix} = -(3-9) = 6$
$b_2 = -\frac{1}{1} \begin{vmatrix} 1 & 10 \\ 1 & 0 \end{vmatrix} = -(0-10) = 10$

| $s^4$ | 1   | 9   | 10  |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 3   | 0   |
| $s^2$ | 6   | 10  |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

$c_1 = -\frac{1}{6} \begin{vmatrix} 1 & 3 \\ 6 & 10 \end{vmatrix} = -\frac{(10-18)}{6} = -\frac{-8}{6} = \frac{4}{3}$

$d_1 = -\frac{1}{4/3} \begin{vmatrix} 6 & 10 \\ 4/3 & 0 \end{vmatrix} = -\frac{3}{4} (0 - \frac{40}{3}) = -\frac{3}{4} (-\frac{40}{3}) = 10$

Final Routh Array:
| $s^4$ | 1   | 9   | 10  |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 3   | 0   |
| $s^2$ | 6   | 10  |     |
| $s^1$ | 4/3 |     |     |
| $s^0$ | 10  |     |     |

The first column elements are 1, 1, 6, 4/3, 10. All are positive.
**Answer:** The system is **stable**.

---

**Question 2:**
Determine the stability of a system with characteristic equation: $s^3 + s^2 + 2s + 4 = 0$.

**Solution 2:**
Characteristic equation coefficients: $a_3=1, a_2=1, a_1=2, a_0=4$. All positive and present.

Routh Array:
| $s^3$ | 1   | 2   |
| :---- | :-- | :-- |
| $s^2$ | 1   | 4   |
| $s^1$ | $b_1$ |     |
| $s^0$ | $c_1$ |     |

$b_1 = -\frac{1}{1} \begin{vmatrix} 1 & 2 \\ 1 & 4 \end{vmatrix} = -(4-2) = -2$

| $s^3$ | 1   | 2   |
| :---- | :-- | :-- |
| $s^2$ | 1   | 4   |
| $s^1$ | -2  |     |
| $s^0$ | $c_1$ |     |

$c_1 = -\frac{1}{-2} \begin{vmatrix} 1 & 4 \\ -2 & 0 \end{vmatrix} = \frac{1}{2} (0 - (-8)) = \frac{8}{2} = 4$

Final Routh Array:
| $s^3$ | 1   | 2   |
| :---- | :-- | :-- |
| $s^2$ | 1   | 4   |
| $s^1$ | -2  |     |
| $s^0$ | 4   |     |

The first column elements are 1, 1, -2, 4. There is one sign change (from 1 to -2).
**Answer:** The system is **unstable**, with one root in the RHP.

---

**Question 3:**
A system has the characteristic equation $s^4 + 2s^3 + s^2 + 4s + 4 = 0$. Determine its stability.

**Solution 3:**
Characteristic equation coefficients: $a_4=1, a_3=2, a_2=1, a_1=4, a_0=4$. All positive and present.

Routh Array:
| $s^4$ | 1   | 1   | 4   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 2   | 4   | 0   |
| $s^2$ | $b_1$ | $b_2$ |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

Simplify $s^3$ row by dividing by 2: (1, 2, 0)

| $s^4$ | 1   | 1   | 4   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 2   | 0   |
| $s^2$ | $b_1$ | $b_2$ |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

$b_1 = -\frac{1}{1} \begin{vmatrix} 1 & 1 \\ 1 & 2 \end{vmatrix} = -(2-1) = -1$
$b_2 = -\frac{1}{1} \begin{vmatrix} 1 & 4 \\ 1 & 0 \end{vmatrix} = -(0-4) = 4$

| $s^4$ | 1   | 1   | 4   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 2   | 0   |
| $s^2$ | -1  | 4   |     |
| $s^1$ | $c_1$ |     |     |
| $s^0$ | $d_1$ |     |     |

$c_1 = -\frac{1}{-1} \begin{vmatrix} 1 & 2 \\ -1 & 4 \end{vmatrix} = \frac{(4 - (-2))}{-1} = \frac{6}{-1} = -6$

$d_1 = -\frac{1}{-6} \begin{vmatrix} -1 & 4 \\ -6 & 0 \end{vmatrix} = \frac{1}{6} (0 - (-24)) = \frac{24}{6} = 4$

Final Routh Array:
| $s^4$ | 1   | 1   | 4   |
| :---- | :-- | :-- | :-- |
| $s^3$ | 1   | 2   | 0   |
| $s^2$ | -1  | 4   |     |
| $s^1$ | -6  |     |     |
| $s^0$ | 4   |     |     |

The first column elements are 1, 1, -1, -6, 4.
Sign changes:
1 to -1 (1st change)
-1 to -6 (no change)
-6 to 4 (2nd change)
There are two sign changes in the first column.
**Answer:** The system is **unstable**, with two roots in the RHP.

---

**Question 4:**
Determine the stability of a system with characteristic equation: $s^3 + 2s^2 + s + 2 = 0$. (Refer to Example 2).

**Solution 4:**
Routh Array (from Example 2):
| $s^3$ | 1   | 1   |
| :---- | :-- | :-- |
| $s^2$ | 2   | 2   |
| $s^1$ | $\epsilon$ | 0   |
| $s^0$ | 2   |     |

As $\epsilon \to 0^+$, the first column is 1, 2, 0, 2.
The presence of a zero in the first column (not the last entry) indicates marginal stability.
The auxiliary polynomial from the $s^2$ row (2, 2) is $2s^2 + 2 = 0$, giving roots $s = \pm j$. These are simple roots on the imaginary axis.
**Answer:** The system is **marginally stable**.

---

**Question 5:**
For what range of $K$ is the system with characteristic equation $s^3 + 6s^2 + 12s + K = 0$ stable?

**Solution 5:**
Characteristic equation coefficients: $a_3=1, a_2=6, a_1=12, a_0=K$.
For stability, all coefficients must be positive. So, $K > 0$.

Routh Array:
| $s^3$ | 1   | 12  |
| :---- | :-- | :-- |
| $s^2$ | 6   | K   |
| $s^1$ | $b_1$ |     |
| $s^0$ | $c_1$ |     |

$b_1 = -\frac{1}{6} \begin{vmatrix} 1 & 12 \\ 6 & K \end{vmatrix} = -\frac{(K - 72)}{6} = \frac{72-K}{6}$

$c_1 = -\frac{1}{b_1} \begin{vmatrix} 6 & K \\ b_1 & 0 \end{vmatrix} = -\frac{-b_1 K}{b_1} = K$

Final Routh Array:
| $s^3$ | 1   | 12  |
| :---- | :-- | :-- |
| $s^2$ | 6   | K   |
| $s^1$ | $\frac{72-K}{6}$ |     |
| $s^0$ | K   |     |

For stability, all elements in the first column must be positive:
1.  $1 > 0$ (always true)
2.  $6 > 0$ (always true)
3.  $\frac{72-K}{6} > 0 \implies 72-K > 0 \implies K < 72$
4.  $K > 0$ (from preliminary check)

Combining these conditions, we get $0 < K < 72$.
**Answer:** The system is stable for $0 < K < 72$.

---

### Important Points to Remember

*   The Routh-Hurwitz criterion is applicable to linear, time-invariant (LTI) systems.
*   It determines the number of roots in the RHP, LHP, and on the imaginary axis without explicitly solving for the roots.
*   The preliminary check (all coefficients present and same sign) is a necessary but not sufficient condition.
*   Zeros in the first column require special handling using $\epsilon$ or the auxiliary polynomial.
*   An entire row of zeros indicates roots symmetric about the origin, necessitating the auxiliary polynomial.
*   Repeated roots on the imaginary axis lead to instability. Simple roots on the imaginary axis lead to marginal stability.

---

### Alignment with Course Outcomes (COs)

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)**
    *   The Routh-Hurwitz criterion is applied to the characteristic equation derived from the closed-loop transfer function, thus directly contributing to the analysis of systems via their transfer functions.

*   **CO3: Determine the absolute stability and relative stability of a system using Routh Hurwitz Criterion and root locus (Knowledge Level: K3)**
    *   This topic directly addresses the determination of absolute stability (stable, unstable) and provides insights into relative stability by indicating the presence of roots in the RHP. The number of sign changes in the first column quantifies the number of unstable poles.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References

*   **Control Systems Engineering by I.J. Nagarath, M. Gopal:** Provides a foundational understanding and step-by-step guide to constructing and interpreting the Routh array. (Chapter 4 covers stability, including Routh-Hurwitz).
*   **Automatic Control Systems by Benjamin C. Kuo, Farid Golnaraghi:** Offers detailed explanations of the Routh criterion, its special cases, and graphical interpretations in the s-plane. (Chapter 6 discusses stability criteria).
*   **Modern Control Engineering by Katsuhiko Ogata:** Presents the Routh-Hurwitz criterion as a tool for absolute stability analysis, with clear examples and derivations. (Chapter 6 also covers stability analysis).
*   **Nise's Control Systems Engineering by Norman S. Nise:** This textbook is highly recommended for its clarity and comprehensive coverage of control system concepts, including robust explanations of the Routh-Hurwitz criterion and its edge cases. (Chapter 4 on stability, including Routh-Hurwitz).

---