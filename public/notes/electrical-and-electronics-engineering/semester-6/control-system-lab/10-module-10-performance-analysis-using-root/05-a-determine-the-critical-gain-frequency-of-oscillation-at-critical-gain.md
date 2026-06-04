---
title: "a. Determine the critical gain, frequency of oscillation at critical gain."
subject: "CONTROL SYSTEM LAB"
module: "Module 10: Performance Analysis using Root"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3677c"
status: "completed"
scrapedAt: "2026-05-23T16:25:26.375Z"
---
# CONTROL SYSTEM LAB: Module 10 - Performance Analysis using Root Locus

## Topic: a. Determine the Critical Gain and Frequency of Oscillation at Critical Gain

### 1. Introduction and Objective

This module focuses on analyzing the performance of a control system by examining its behavior at the boundary of stability. Specifically, we will investigate how to determine the **critical gain ($K_{crit}$)** and the corresponding **frequency of oscillation ($\omega_{osc}$)** at which the system becomes marginally stable. This is a crucial step in understanding the limits of a system's performance and designing appropriate controllers.

**Learning Outcomes Covered:**

*   **LO1: Understand the concept of critical gain and its significance in system stability.**
*   **LO2: Learn methods to analytically determine the critical gain and frequency of oscillation.**
*   **LO3: Relate the critical gain and frequency of oscillation to the system's characteristic equation.**
*   **LO4: Apply these concepts to practical control system scenarios.**

**Course Outcomes Alignment:**

*   **CO1 (K3):** While not directly about parameter identification, understanding critical gain helps in analyzing the stability of a system whose parameters are identified.
*   **CO2 (K3):** Determining critical gain is a key step in characterizing system performance specifications related to stability margins.
*   **CO3 (K3):** This topic directly involves analyzing a linear continuous-time system model by examining its poles as gain varies.
*   **CO4 (K5):** Knowledge of critical gain is essential for designing controllers that ensure robust stability, preventing the system from operating at or beyond this point.

### 2. Key Concepts and Definitions

#### 2.1. Stability in Control Systems

A control system is considered **stable** if its output remains bounded for all bounded inputs. Instability occurs when the output grows unbounded, often leading to oscillations or saturation.

#### 2.2. Characteristic Equation

The behavior of a linear time-invariant (LTI) control system is governed by its **characteristic equation**, which is obtained by setting the denominator of the closed-loop transfer function to zero:

$1 + G(s)H(s) = 0$

where:
*   $G(s)$ is the forward path transfer function.
*   $H(s)$ is the feedback path transfer function.

The roots of the characteristic equation are the **closed-loop poles** of the system. The system is stable if all closed-loop poles lie in the left half of the s-plane (i.e., have negative real parts).

#### 2.3. Marginal Stability

A system is **marginally stable** if its characteristic equation has at least one pair of complex conjugate poles on the imaginary axis, and all other poles are in the left half of the s-plane. In this state, the system's output will oscillate with a constant amplitude when subjected to an initial condition.

#### 2.4. Critical Gain ($K_{crit}$)

The **critical gain ($K_{crit}$)** is the value of the system's proportional gain (or a parameter that can be varied) at which the system transitions from being stable to unstable. At this gain, the system becomes marginally stable.

#### 2.5. Frequency of Oscillation at Critical Gain ($\omega_{osc}$)

The **frequency of oscillation at critical gain ($\omega_{osc}$)** is the frequency at which the system oscillates when it is marginally stable (i.e., at $K_{crit}$). This frequency corresponds to the imaginary part of the poles that lie on the imaginary axis.

### 3. Methods for Determining Critical Gain and Frequency of Oscillation

The most common analytical method to determine $K_{crit}$ and $\omega_{osc}$ is by using the **Routh-Hurwitz stability criterion** or by directly analyzing the characteristic equation when poles are on the imaginary axis.

#### 3.1. Using the Routh-Hurwitz Criterion

The Routh-Hurwitz criterion provides a systematic way to determine the stability of a system without explicitly finding the roots of the characteristic equation. It involves constructing a Routh array.

**Procedure:**

1.  **Formulate the Characteristic Equation:** Obtain the characteristic equation $1 + G(s)H(s) = 0$.
2.  **Construct the Routh Array:** Arrange the coefficients of the characteristic polynomial in the Routh array.
3.  **Identify the Critical Row:** The critical row is the row where all elements are zero. This occurs when a pair of imaginary roots appears. This typically happens when an entire row of the Routh array becomes zero.
4.  **Form the Auxiliary Equation:** From the row *above* the row of zeros, form the **auxiliary equation ($A(s)$)**. The auxiliary equation is a polynomial whose coefficients are taken from the elements of the critical row. The general form of the auxiliary equation is:
    $A(s) = a_n s^n + a_{n-2} s^{n-2} + a_{n-4} s^{n-4} + \dots = 0$
    where $a_i$ are the coefficients from the row above the zero row.
5.  **Find the Critical Gain and Frequency of Oscillation:**
    *   Set the auxiliary equation to zero and solve for $s$. Since the roots are on the imaginary axis, they will be of the form $s = \pm j\omega$.
    *   The value of $\omega$ obtained from solving $A(s) = 0$ is the **frequency of oscillation ($\omega_{osc}$)**.
    *   Substitute $s = j\omega_{osc}$ back into the characteristic equation and solve for the gain $K$. This value of $K$ is the **critical gain ($K_{crit}$)**.

**Important Notes on Routh Array:**

*   If the first column of the Routh array has sign changes, the system is unstable.
*   If the first column has a zero element, replace it with a small positive number $\epsilon$ and proceed. If any sign changes occur with $\epsilon$, the system is unstable.
*   If an entire row becomes zero, it indicates the presence of roots on the imaginary axis (marginal stability) or symmetrically located roots.

#### 3.2. Direct Substitution into the Characteristic Equation

This method is often simpler when the characteristic equation is a polynomial of manageable degree and the gain $K$ is directly present.

**Procedure:**

1.  **Formulate the Characteristic Equation:** Obtain $1 + G(s)H(s) = 0$.
2.  **Substitute $s = j\omega$:** Replace $s$ with $j\omega$ in the characteristic equation. This separates the equation into real and imaginary parts.
    $1 + G(j\omega)H(j\omega) = 0$
3.  **Equate Real and Imaginary Parts to Zero:** For the system to be on the verge of instability (marginally stable), the real part of the characteristic equation must be zero, and the imaginary part must also be zero.
    *   $Real\{1 + G(j\omega)H(j\omega)\} = 0$
    *   $Imag\{1 + G(j\omega)H(j\omega)\} = 0$
4.  **Solve for $K$ and $\omega$:** Solve the two equations obtained in step 3 simultaneously for $K$ and $\omega$. The value of $\omega$ that satisfies both equations is the **frequency of oscillation ($\omega_{osc}$)**, and the corresponding value of $K$ is the **critical gain ($K_{crit}$)**.

**Example (from Ogata, Chapter 6):**

Consider a system with the open-loop transfer function $G(s)H(s) = \frac{K}{s(s+1)(s+2)}$.

**Step 1: Formulate the Characteristic Equation:**
Closed-loop transfer function: $\frac{G(s)}{1 + G(s)H(s)}$
Characteristic equation: $1 + \frac{K}{s(s+1)(s+2)} = 0$
$s(s+1)(s+2) + K = 0$
$s(s^2 + 3s + 2) + K = 0$
$s^3 + 3s^2 + 2s + K = 0$

**Method 1: Routh-Hurwitz Criterion**

*   **Routh Array:**
    | $s^3$ | 1   | 2   |
    | :---- | :-- | :-- |
    | $s^2$ | 3   | K   |
    | $s^1$ | $\frac{3 \cdot 2 - 1 \cdot K}{3} = 2 - \frac{K}{3}$ | 0   |
    | $s^0$ | K   | 0   |

*   **Identify Critical Row:** For the system to be marginally stable, the $s^1$ row must be zero.
    $2 - \frac{K}{3} = 0$
    $2 = \frac{K}{3}$
    $K = 6$
    So, $K_{crit} = 6$.

*   **Form Auxiliary Equation:** The row above the zero row is the $s^2$ row:
    $A(s) = 3s^2 + K = 0$

*   **Find Frequency of Oscillation:** Substitute $K_{crit} = 6$ into the auxiliary equation:
    $3s^2 + 6 = 0$
    $s^2 = -2$
    $s = \pm j\sqrt{2}$
    Therefore, $\omega_{osc} = \sqrt{2}$ rad/sec.

**Method 2: Direct Substitution**

*   **Characteristic Equation:** $s^3 + 3s^2 + 2s + K = 0$
*   **Substitute $s = j\omega$:**
    $(j\omega)^3 + 3(j\omega)^2 + 2(j\omega) + K = 0$
    $-j\omega^3 - 3\omega^2 + j2\omega + K = 0$
*   **Equate Real and Imaginary Parts to Zero:**
    *   Real part: $-3\omega^2 + K = 0 \quad \implies K = 3\omega^2$
    *   Imaginary part: $-\omega^3 + 2\omega = 0$
*   **Solve for $K$ and $\omega$:**
    From the imaginary part: $\omega(-\omega^2 + 2) = 0$.
    Since $\omega=0$ corresponds to a system that is already unstable at $K=0$, we consider the non-zero solution:
    $-\omega^2 + 2 = 0$
    $\omega^2 = 2$
    $\omega_{osc} = \sqrt{2}$ rad/sec.

    Now, substitute $\omega^2 = 2$ into the real part equation:
    $K_{crit} = 3\omega^2 = 3(2) = 6$.

**Conclusion for Example:** The critical gain is $K_{crit} = 6$, and the frequency of oscillation at this gain is $\omega_{osc} = \sqrt{2}$ rad/sec.

### 4. Connection to Root Locus

The concept of critical gain and frequency of oscillation is directly related to the root locus plot.

*   **Root Locus:** The root locus shows the paths of the closed-loop poles as the gain $K$ varies from 0 to $\infty$.
*   **Crossing the Imaginary Axis:** The point where the root locus crosses the imaginary axis represents the condition of marginal stability. At this crossing point, the real part of the poles is zero, and the imaginary part corresponds to the frequency of oscillation.
*   **Critical Gain:** The gain value $K$ at the point where the root locus crosses the imaginary axis is the critical gain ($K_{crit}$).

**(Reference: Nise, Chapter 6 - Root Locus Techniques)**
Nise's book extensively covers how to sketch root locus plots. Identifying the intersection with the imaginary axis is a standard step in root locus analysis. The gain at this intersection is $K_{crit}$.

### 5. Practical Significance and Applications

*   **Stability Margin:** $K_{crit}$ provides an absolute limit on the gain before the system becomes unstable. This helps in defining a suitable operating range for the gain.
*   **Controller Design:** Understanding $K_{crit}$ is crucial for designing controllers. For instance, when using proportional-integral-derivative (PID) controllers, the proportional gain ($K_p$) can be related to the system's stability limit.
*   **Performance Tuning:** In many systems, increasing the gain improves the transient response (e.g., reduces settling time or steady-state error). However, increasing it too much can lead to instability. $K_{crit}$ indicates this limit.
*   **Oscillation Detection:** If a system starts to oscillate with a constant amplitude, it might be operating at or near its critical gain. Measuring this oscillation frequency can help identify the system's parameters or potential issues.

### 6. Practice Questions and Exercises

**Question 1:**
For a system with the open-loop transfer function $G(s)H(s) = \frac{K(s+1)}{s^2(s+5)}$, determine the critical gain $K_{crit}$ and the frequency of oscillation $\omega_{osc}$.

**Solution 1:**

*   **Characteristic Equation:**
    $1 + \frac{K(s+1)}{s^2(s+5)} = 0$
    $s^2(s+5) + K(s+1) = 0$
    $s^3 + 5s^2 + Ks + K = 0$

*   **Using Routh-Hurwitz:**
    | $s^3$ | 1   | K   |
    | :---- | :-- | :-- |
    | $s^2$ | 5   | K   |
    | $s^1$ | $\frac{5K - 1K}{5} = \frac{4K}{5}$ | 0   |
    | $s^0$ | K   | 0   |

    For marginal stability, the $s^1$ row must be zero.
    $\frac{4K}{5} = 0 \implies K = 0$. This indicates that there are roots on the imaginary axis at $K=0$. Let's re-examine.

    Ah, the characteristic equation is $s^3 + 5s^2 + Ks + K = 0$.
    Let's restart the Routh array with the correct coefficients.

    | $s^3$ | 1   | K   |
    | :---- | :-- | :-- |
    | $s^2$ | 5   | K   |
    | $s^1$ | $\frac{5K - 1 \cdot K}{5} = \frac{4K}{5}$ | 0   |
    | $s^0$ | K   | 0   |

    The condition for stability is that all elements in the first column are positive. For marginal stability, an element in the first column must be zero.
    If $K=0$, the $s^0$ row is zero. This implies a root at $s=0$.
    If $\frac{4K}{5} = 0$, then $K=0$.

    Let's use the direct substitution method, which might be clearer here.

*   **Using Direct Substitution:**
    Substitute $s = j\omega$:
    $(j\omega)^3 + 5(j\omega)^2 + K(j\omega) + K = 0$
    $-j\omega^3 - 5\omega^2 + jK\omega + K = 0$

    *   Real part: $-5\omega^2 + K = 0 \implies K = 5\omega^2$
    *   Imaginary part: $-\omega^3 + K\omega = 0$

    From the imaginary part: $\omega(-\omega^2 + K) = 0$.
    For non-zero oscillation, $\omega \neq 0$.
    $-\omega^2 + K = 0 \implies K = \omega^2$.

    Now we have two expressions for K:
    $K = 5\omega^2$
    $K = \omega^2$

    This implies $5\omega^2 = \omega^2$, which means $4\omega^2 = 0$, so $\omega = 0$. This suggests that the system is not stable and then becomes unstable at $K=0$ (due to the $s^2$ term in the denominator of G(s)H(s)).

    Let's re-examine the Routh array for the characteristic equation $s^3 + 5s^2 + Ks + K = 0$:
    For stability, we need $1 > 0$, $5 > 0$, $K > 0$, and $\frac{4K}{5} > 0$.
    This means for stability, $K > 0$.

    The $s^1$ row is the critical row if it becomes zero.
    $\frac{4K}{5} = 0 \implies K = 0$.
    When $K=0$, the characteristic equation becomes $s^3 + 5s^2 = 0$, which is $s^2(s+5)=0$. The roots are $s=0$ (repeated) and $s=-5$. Having roots at $s=0$ means marginal stability.

    The auxiliary equation from the row above ($s^2$ row) is $5s^2 + K = 0$.
    If we set the $s^1$ row to zero, $K=0$.
    Substituting $K=0$ into the auxiliary equation:
    $5s^2 + 0 = 0 \implies s^2 = 0 \implies s = 0$.

    This indicates that the system has roots on the imaginary axis at $s=0$ when $K=0$.
    Therefore, $K_{crit} = 0$ and $\omega_{osc} = 0$. This system is unstable for any $K>0$ due to the presence of poles at the origin in the open-loop transfer function.

**Question 2:**
Consider a unity feedback system with an open-loop transfer function $G(s) = \frac{K}{s(s+2)(s+4)}$. Determine the value of $K$ that will cause the system to oscillate, and the frequency of oscillation.

**Solution 2:**

*   **Characteristic Equation:**
    $1 + G(s) = 0$ (since H(s) = 1 for unity feedback)
    $1 + \frac{K}{s(s+2)(s+4)} = 0$
    $s(s+2)(s+4) + K = 0$
    $s(s^2 + 6s + 8) + K = 0$
    $s^3 + 6s^2 + 8s + K = 0$

*   **Using Routh-Hurwitz:**
    | $s^3$ | 1   | 8   |
    | :---- | :-- | :-- |
    | $s^2$ | 6   | K   |
    | $s^1$ | $\frac{6 \cdot 8 - 1 \cdot K}{6} = \frac{48 - K}{6}$ | 0   |
    | $s^0$ | K   | 0   |

    For stability, all elements in the first column must be positive.
    $1 > 0$
    $6 > 0$
    $\frac{48 - K}{6} > 0 \implies 48 - K > 0 \implies K < 48$
    $K > 0$

    For marginal stability, the $s^1$ row must be zero.
    $\frac{48 - K}{6} = 0$
    $48 - K = 0$
    $K = 48$
    So, $K_{crit} = 48$.

*   **Form Auxiliary Equation:**
    The row above the $s^1$ row is the $s^2$ row:
    $A(s) = 6s^2 + K = 0$

*   **Find Frequency of Oscillation:**
    Substitute $K_{crit} = 48$ into the auxiliary equation:
    $6s^2 + 48 = 0$
    $s^2 = -\frac{48}{6} = -8$
    $s = \pm j\sqrt{8} = \pm j2\sqrt{2}$

    Therefore, $\omega_{osc} = 2\sqrt{2}$ rad/sec.

**Answer:** The critical gain is $K_{crit} = 48$, and the frequency of oscillation is $\omega_{osc} = 2\sqrt{2}$ rad/sec.

### 7. Important Points to Remember

*   Critical gain ($K_{crit}$) is the gain at which the system becomes marginally stable.
*   At $K_{crit}$, the closed-loop system has at least one pair of purely imaginary roots.
*   The frequency of oscillation ($\omega_{osc}$) is the imaginary part of these purely imaginary roots.
*   The Routh-Hurwitz criterion or direct substitution into the characteristic equation (with $s=j\omega$) are the primary analytical methods.
*   The point where the root locus crosses the imaginary axis corresponds to the critical gain and frequency of oscillation.
*   The system is stable for gains below $K_{crit}$ (assuming the root locus crosses from LHP to RHP) and unstable for gains above $K_{crit}$.
*   When poles are on the imaginary axis, the output oscillates with constant amplitude and at the frequency $\omega_{osc}$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. References

*   **Modern Control Engineering by Katsuhiko Ogata (Pearson, 5th edition, 2009):** Chapter 6, "Stability of Linear Control Systems," provides a thorough treatment of the Routh-Hurwitz criterion and its application to find the range of stability and marginal stability conditions.
*   **Control Systems Engineering by Norman S. Nise (Wiley, 5th edition, 2009):** Chapter 6, "Root Locus Techniques," discusses how the root locus can be used to determine stability and identify the gain and frequency at which the locus crosses the imaginary axis. Chapter 4, "Stability," also covers the Routh-Hurwitz criterion.
*   **Control Systems Engineering by I. J. Nagrath, M. Gopal (New Age, 5th edition, 2009):** Chapter 4, "Stability of Control Systems," details the Routh-Hurwitz criterion. Chapter 5, "Root Locus Technique," explains how to find the intersection of the root locus with the imaginary axis.

This concludes Module 10, Topic a. Understanding and calculating the critical gain and frequency of oscillation are fundamental to assessing and ensuring the stability of control systems.