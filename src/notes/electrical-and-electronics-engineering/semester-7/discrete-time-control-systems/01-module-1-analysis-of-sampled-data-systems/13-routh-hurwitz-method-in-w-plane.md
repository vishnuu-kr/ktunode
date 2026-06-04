---
title: "Routh-Hurwitz method in w-plane."
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 1: Analysis of Sampled Data Systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368cd"
status: "completed"
scrapedAt: "2026-05-23T16:36:08.471Z"
---
# Discrete Time Control Systems

## Module 1: Analysis of Sampled Data Systems

### Topic: Routh-Hurwitz Method in the w-plane

---

### **1. Introduction to Stability Analysis in Discrete-Time Systems**

Digital control systems operate on discrete-time signals, meaning the system's behavior is analyzed at specific time instants. For a digital control system to be stable, its output must remain bounded for any bounded input and tend to zero as time goes to infinity when there is no input.

*   **Stability Criterion:** A discrete-time system is considered stable if all the poles of its pulse transfer function lie *inside* the unit circle in the z-plane.

*   **Limitations of Direct z-plane Analysis:** While finding the roots of the characteristic equation in the z-plane directly tells us about stability, the root locus method can be complex for higher-order systems, and direct root finding can be computationally intensive.

*   **Need for Alternative Methods:** To overcome these limitations, algebraic methods like the Routh-Hurwitz criterion are adapted for the z-plane. However, the standard Routh-Hurwitz criterion is designed for continuous-time systems in the s-plane.

---

### **2. The Bilinear Transformation: Mapping the z-plane to the w-plane**

The Routh-Hurwitz criterion is applied to polynomials with real coefficients. The characteristic equation of a discrete-time system is in terms of the complex variable 'z'. To apply the Routh-Hurwitz criterion, we need to transform the characteristic equation from the z-plane to a form suitable for analysis, typically in the s-plane. The **bilinear transformation** is the key tool for this mapping.

*   **Bilinear Transformation Formula:**
    $$ z = \frac{1 + \frac{T}{2}s}{1 - \frac{T}{2}s} $$
    where:
    *   'z' is the complex variable in the z-plane.
    *   's' is the complex variable in the s-plane.
    *   'T' is the sampling period.

*   **Purpose of the Transformation:** The bilinear transformation maps the interior of the unit circle in the z-plane to the left-half of the s-plane. This is crucial because the standard Routh-Hurwitz criterion determines stability by checking if all poles are in the left-half of the s-plane.

*   **Transformation of the Unit Circle:**
    *   The unit circle in the z-plane ($|z|=1$) is mapped to the imaginary axis in the s-plane ($Re(s)=0$).
    *   The interior of the unit circle in the z-plane ($|z|<1$) is mapped to the left-half of the s-plane ($Re(s)<0$).
    *   The exterior of the unit circle in the z-plane ($|z|>1$) is mapped to the right-half of the s-plane ($Re(s)>0$).

*   **Simplified Bilinear Transformation (for stability analysis):** Often, for stability analysis, we can use a slightly simplified form of the bilinear transformation by setting $T=2$. This scales the imaginary axis in the s-plane but doesn't change the stability property.
    $$ z = \frac{1 + s}{1 - s} $$
    Let $w = \frac{1+s}{1-s}$. This implies:
    $$ z(1-s) = 1+s $$
    $$ z - zs = 1+s $$
    $$ z - 1 = s(1+z) $$
    $$ s = \frac{z-1}{z+1} $$
    This transformation maps the interior of the unit circle in the z-plane to the left-half of the s-plane. For simplicity in applying the Routh-Hurwitz criterion, we often refer to this transformed plane as the **w-plane**.

*   **Key Property:** If the characteristic equation of a discrete-time system, when transformed using the bilinear transformation ($z = \frac{1+s}{1-s}$ or $s = \frac{z-1}{z+1}$), results in a polynomial in 's', then the stability of the discrete-time system is determined by the location of the roots of this polynomial in the s-plane. The system is stable if and only if all roots lie in the left-half of the s-plane.

---

### **3. Applying the Routh-Hurwitz Criterion in the w-plane (using the s-plane mapping)**

The process involves transforming the discrete-time system's characteristic equation into a polynomial in 's' using the bilinear transformation and then applying the standard Routh-Hurwitz criterion to this polynomial.

**Steps:**

1.  **Obtain the Characteristic Equation:** For a closed-loop discrete-time system with a pulse transfer function $G(z)$ and a controller $C(z)$, the characteristic equation is given by:
    $$ 1 + C(z)G(z) = 0 $$
    or, if the open-loop transfer function is $L(z) = C(z)G(z)$, the characteristic equation is $1 + L(z) = 0$. This equation is typically a polynomial in $z$:
    $$ a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0 = 0 $$

2.  **Apply the Bilinear Transformation:** Substitute $z = \frac{1+s}{1-s}$ into the characteristic equation.
    $$ a_n \left(\frac{1+s}{1-s}\right)^n + a_{n-1} \left(\frac{1+s}{1-s}\right)^{n-1} + \dots + a_1 \left(\frac{1+s}{1-s}\right) + a_0 = 0 $$

3.  **Clear the Denominators:** Multiply the entire equation by $(1-s)^n$ to obtain a polynomial in 's'. This will result in a polynomial of the form:
    $$ b_m s^m + b_{m-1} s^{m-1} + \dots + b_1 s + b_0 = 0 $$
    Note that the degree of the polynomial in 's' will be the same as the degree of the polynomial in 'z'.

4.  **Apply the Standard Routh-Hurwitz Criterion to the Polynomial in 's':**
    *   **Necessary Condition:** For stability, all coefficients $b_i$ of the polynomial in 's' must be present and have the same sign (usually positive, if we ensure the leading coefficient is positive). If any coefficient is zero or negative (assuming the leading coefficient is positive), the system is unstable.
    *   **Construct the Routh Array:** Create the Routh array using the coefficients of the polynomial in 's'.

    | Row | $s^m$     | $b_m$     | $b_{m-2}$ | $b_{m-4}$ | ... |
    | :-- | :-------- | :-------- | :-------- | :-------- | :-- |
    | $s^m$     | $b_m$     | $b_{m-2}$ | $b_{m-4}$ | ... |
    | $s^{m-1}$ | $b_{m-1}$ | $b_{m-3}$ | $b_{m-5}$ | ... |
    | $s^{m-2}$ | $c_1$     | $c_2$     | $c_3$     | ... |
    | $s^{m-3}$ | $d_1$     | $d_2$     | $d_3$     | ... |
    | ... | ...       | ...       | ...       | ... |
    | $s^0$     | $e_1$     | 0         | 0         | ... |

    The elements $c_1, c_2, \dots, d_1, d_2, \dots$ are calculated using the following relations:

    $$ c_1 = \frac{b_{m-1} b_{m-2} - b_m b_{m-3}}{b_{m-1}} $$
    $$ c_2 = \frac{b_{m-1} b_{m-4} - b_m b_{m-5}}{b_{m-1}} $$
    $$ d_1 = \frac{c_1 b_{m-3} - b_{m-1} c_2}{c_1} $$
    and so on.

5.  **Stability Determination:** The number of sign changes in the first column of the Routh array indicates the number of roots of the polynomial in 's' that lie in the right-half of the s-plane.
    *   **For stability:** All the elements in the first column of the Routh array must be positive (assuming the leading coefficient $b_m$ is positive). If there are no sign changes in the first column, the system is stable.

*   **Important Considerations:**
    *   **Special Cases:** The standard special cases of the Routh-Hurwitz criterion (e.g., a zero in the first column or an entire row of zeros) apply to the polynomial in 's'.
    *   **Sampling Period (T):** While $T=2$ is often used for simplicity, if the actual sampling period $T$ is used in the transformation $z = \frac{1 + \frac{T}{2}s}{1 - \frac{T}{2}s}$, the process remains the same. The critical boundary in the s-plane will be the imaginary axis ($Re(s)=0$).

---

### **4. Examples**

Let's illustrate with an example, referencing concepts from textbooks.

**Example 1: Stability Analysis of a Second-Order System**

Consider a closed-loop discrete-time system with the characteristic equation:
$$ z^2 - 0.5z + 0.2 = 0 $$

**Objective:** Determine if the system is stable using the Routh-Hurwitz method in the w-plane.

**Solution:**

1.  **Characteristic Equation:** $z^2 - 0.5z + 0.2 = 0$

2.  **Bilinear Transformation:** Substitute $z = \frac{1+s}{1-s}$.
    $$ \left(\frac{1+s}{1-s}\right)^2 - 0.5\left(\frac{1+s}{1-s}\right) + 0.2 = 0 $$

3.  **Clear Denominators:** Multiply by $(1-s)^2$:
    $$ (1+s)^2 - 0.5(1+s)(1-s) + 0.2(1-s)^2 = 0 $$
    Expand the terms:
    $$ (1 + 2s + s^2) - 0.5(1 - s^2) + 0.2(1 - 2s + s^2) = 0 $$
    $$ 1 + 2s + s^2 - 0.5 + 0.5s^2 + 0.2 - 0.4s + 0.2s^2 = 0 $$
    Combine like terms:
    $$ (1 + 0.5 + 0.2) + (2 - 0.4)s + (1 + 0.5 + 0.2)s^2 = 0 $$
    $$ 1.7s^2 + 1.6s + 1.7 = 0 $$

4.  **Routh-Hurwitz Criterion for the s-polynomial:**
    The polynomial in 's' is $1.7s^2 + 1.6s + 1.7 = 0$.
    *   **Check Necessary Condition:** All coefficients (1.7, 1.6, 1.7) are present and positive. This condition is met.
    *   **Construct Routh Array:**

    | Row   | $s^2$ | $s^0$ |
    | :---- | :---- | :---- |
    | $s^2$ | 1.7   | 1.7   |
    | $s^1$ | 1.6   | 0     |
    | $s^0$ | $e_1$ | 0     |

    Calculate $e_1$:
    $$ e_1 = \frac{1.6 \times 1.7 - 1.7 \times 0}{1.6} = \frac{1.6 \times 1.7}{1.6} = 1.7 $$

    *   **Routh Array:**

    | Row   | $s^2$ | $s^0$ |
    | :---- | :---- | :---- |
    | $s^2$ | 1.7   | 1.7   |
    | $s^1$ | 1.6   | 0     |
    | $s^0$ | 1.7   | 0     |

5.  **Stability Determination:** The elements in the first column are 1.7, 1.6, and 1.7. All are positive, and there are no sign changes. Therefore, all roots of the s-polynomial lie in the left-half of the s-plane.

**Conclusion:** The discrete-time system with the characteristic equation $z^2 - 0.5z + 0.2 = 0$ is **stable**.

*   **Reference:** This example aligns with the principles discussed in Ogata's "Discrete Time Control Systems" and Philips and Nagle's "Digital Control System Analysis and Design," where the bilinear transformation is a standard technique for adapting continuous-time stability criteria.

**Example 2: System with Marginal Stability (Pole on the Unit Circle)**

Consider a system with the characteristic equation:
$$ z^2 - z + 1 = 0 $$

**Solution:**

1.  **Characteristic Equation:** $z^2 - z + 1 = 0$

2.  **Bilinear Transformation:** Substitute $z = \frac{1+s}{1-s}$.
    $$ \left(\frac{1+s}{1-s}\right)^2 - \left(\frac{1+s}{1-s}\right) + 1 = 0 $$

3.  **Clear Denominators:** Multiply by $(1-s)^2$:
    $$ (1+s)^2 - (1+s)(1-s) + (1-s)^2 = 0 $$
    $$ (1 + 2s + s^2) - (1 - s^2) + (1 - 2s + s^2) = 0 $$
    $$ 1 + 2s + s^2 - 1 + s^2 + 1 - 2s + s^2 = 0 $$
    Combine like terms:
    $$ (1 - 1 + 1) + (2 - 2)s + (1 + 1 + 1)s^2 = 0 $$
    $$ 1s^2 + 0s + 1 = 0 $$
    $$ s^2 + 1 = 0 $$

4.  **Routh-Hurwitz Criterion for the s-polynomial:**
    The polynomial in 's' is $s^2 + 1 = 0$.
    *   **Check Necessary Condition:** All coefficients (1, 0, 1) must be present and have the same sign. Here, the coefficient of 's' is zero. This indicates a special case.
    *   **Construct Routh Array:**

    | Row   | $s^2$ | $s^0$ |
    | :---- | :---- | :---- |
    | $s^2$ | 1     | 1     |
    | $s^1$ | 0     | 0     |
    | $s^0$ | $e_1$ | 0     |

    The row of zeros in the $s^1$ row indicates that the roots lie on the imaginary axis (for the s-plane polynomial).

5.  **Stability Determination:**
    When an entire row of zeros occurs in the Routh array, the roots of the polynomial are located symmetrically with respect to the origin of the s-plane. The polynomial corresponding to the row *above* the row of zeros is called the **auxiliary polynomial**.
    The row above the $s^1$ row is the $s^2$ row, with coefficients [1, 1]. The auxiliary polynomial is:
    $$ A(s) = 1 \cdot s^2 + 1 = s^2 + 1 $$
    The roots of the auxiliary polynomial are the roots of the original s-polynomial that lie on the imaginary axis.
    Solving $s^2 + 1 = 0$:
    $$ s^2 = -1 $$
    $$ s = \pm j1 $$
    These roots lie on the imaginary axis in the s-plane ($Re(s)=0$).

**Conclusion:** The presence of roots on the imaginary axis in the s-plane corresponds to roots on the unit circle in the z-plane. This system is **marginally stable**. The roots of $z^2 - z + 1 = 0$ are $z = \frac{1 \pm \sqrt{1-4}}{2} = \frac{1 \pm j\sqrt{3}}{2}$. Their magnitudes are $|\frac{1 \pm j\sqrt{3}}{2}| = \sqrt{(\frac{1}{2})^2 + (\frac{\sqrt{3}}{2})^2} = \sqrt{\frac{1}{4} + \frac{3}{4}} = \sqrt{1} = 1$. These poles lie on the unit circle.

*   **Reference:** This example demonstrates handling special cases, a key aspect covered in all standard texts on digital control systems.

---

### **5. Routh-Hurwitz Criterion for the w-plane (Directly)**

While the common approach is to transform to the s-plane, some sources might refer to a direct application of Routh-Hurwitz in the w-plane. This is conceptually equivalent to the s-plane transformation because the bilinear transformation essentially maps the stability region.

Let's consider the transformation $w = \frac{z-1}{z+1}$. If we want to check stability in the z-plane (i.e., $|z|<1$), we are interested in the condition that the real part of $w$ is negative ($Re(w)<0$). This is because the unit circle $|z|=1$ maps to the imaginary axis $Re(w)=0$, and the interior $|z|<1$ maps to the left-half plane $Re(w)<0$.

The characteristic equation is $P(z) = a_n z^n + \dots + a_0 = 0$.
We need to analyze the roots of this polynomial.

**Alternative Perspective (Less Common for Direct Application but Conceptually Related):**

Instead of transforming $z$ to $s$, one could try to establish conditions directly on the coefficients of the $z$-polynomial for its roots to be inside the unit circle. This leads to the **Jury Stability Criterion**, which is the direct counterpart of Routh-Hurwitz for discrete-time systems. The w-plane approach using the bilinear transformation is a way to *leverage* the well-established Routh-Hurwitz criterion from continuous-time systems.

**Important Note:** The topic statement specifically asks for "Routh-Hurwitz method in w-plane." This strongly implies the use of the bilinear transformation to map the z-plane stability problem to an s-plane stability problem, which is then solved using Routh-Hurwitz. There isn't a "w-plane Routh-Hurwitz" criterion that is distinct from the s-plane one after the bilinear transformation. The 'w-plane' here is essentially the s-plane that the z-plane has been mapped onto.

---

### **6. Alignment with Course Outcomes (COs)**

*   **CO1: Model and analyse discrete-time system using pulse transfer function approach.**
    *   This topic directly addresses the analysis part. By using the characteristic equation derived from the pulse transfer function and applying stability criteria, we fulfill this CO. The Routh-Hurwitz method in the w-plane provides a robust way to check stability without explicitly finding the roots of the characteristic polynomial.

*   **CO2: Design digital compensators for linear systems.**
    *   While this topic is primarily about analysis, understanding the stability boundaries is crucial for compensator design. If a compensator is designed and its characteristic equation results in unstable roots in the z-plane, this method can be used to verify the stability of the closed-loop system after compensation. Design often involves ensuring the closed-loop poles are within the unit circle.

*   **CO3: Model and analyse discrete-time system using state space approach.**
    *   The analysis of discrete-time systems using state-space often involves deriving the characteristic equation from the state matrix ($A$ matrix). The eigenvalues of the $A$ matrix are the poles of the system. The Routh-Hurwitz method in the w-plane can be applied to this characteristic equation, thus linking state-space analysis to pole-zero location analysis.

*   **CO4: Design discrete-time state feedback controllers and observers for a linear system.**
    *   Similar to CO2, stability is a fundamental requirement for controllers and observers. Once a controller or observer is designed, the resulting closed-loop system's characteristic equation can be analyzed using this method to ensure stability.

---

### **7. Key Concepts and Definitions**

*   **Unit Circle:** In the z-plane, the locus of points where $|z|=1$. Stability requires all poles to be strictly inside the unit circle.
*   **Bilinear Transformation:** A mapping $z = \frac{1+s}{1-s}$ or $s = \frac{z-1}{z+1}$ that transforms the unit circle in the z-plane to the imaginary axis in the s-plane and the interior of the unit circle to the left-half of the s-plane.
*   **Routh Array:** A systematic tabulation of coefficients of a polynomial used to determine the number of roots in the right-half of the s-plane.
*   **Auxiliary Polynomial:** In the Routh-Hurwitz criterion, the polynomial formed from the coefficients of the row just above a row of zeros. Its roots indicate the location of roots on the imaginary axis.
*   **Marginal Stability:** A system that is neither stable nor unstable, typically characterized by poles on the imaginary axis in the s-plane or on the unit circle in the z-plane.

---

### **8. Important Points to Remember**

*   **Stability Region:** For discrete-time systems, stability is defined by all poles lying *inside* the unit circle ($|z| < 1$).
*   **Bilinear Transformation Mapping:** The key is that $|z|<1$ maps to $Re(s)<0$.
*   **Polynomial Degree:** The degree of the characteristic polynomial in $z$ is the same as the degree of the polynomial in $s$ obtained after the bilinear transformation.
*   **No Sign Changes:** For the mapped polynomial in $s$, stability is indicated by *no sign changes* in the first column of the Routh array (assuming the leading coefficient is positive).
*   **Special Cases:** Handling zeros in the first column and entire rows of zeros correctly is crucial for accurate stability assessment. A row of zeros implies roots on the stability boundary (imaginary axis in s-plane, unit circle in z-plane).
*   **Sampling Period:** While $T=2$ simplifies the transformation to $z = \frac{1+s}{1-s}$, using the actual sampling period $T$ in $z = \frac{1 + \frac{T}{2}s}{1 - \frac{T}{2}s}$ is also valid and maps the unit circle to the $j\omega$ axis ($Re(s)=0$). The stability criterion remains the same: all roots of the transformed polynomial must be in the left-half of the s-plane.

---

### **9. Practice Questions and Exercises**

**Question 1:**
Determine the stability of a discrete-time system whose characteristic equation is given by:
$z^3 - 1.5z^2 + 0.75z - 0.1 = 0$
using the Routh-Hurwitz method in the w-plane.

**Solution 1:**
1.  **Characteristic Equation:** $z^3 - 1.5z^2 + 0.75z - 0.1 = 0$
2.  **Bilinear Transformation:** Substitute $z = \frac{1+s}{1-s}$.
    $\left(\frac{1+s}{1-s}\right)^3 - 1.5\left(\frac{1+s}{1-s}\right)^2 + 0.75\left(\frac{1+s}{1-s}\right) - 0.1 = 0$
3.  **Clear Denominators:** Multiply by $(1-s)^3$.
    $(1+s)^3 - 1.5(1+s)^2(1-s) + 0.75(1+s)(1-s)^2 - 0.1(1-s)^3 = 0$
    Expand:
    $(1+3s+3s^2+s^3) - 1.5(1+2s+s^2)(1-s) + 0.75(1+s)(1-2s+s^2) - 0.1(1-3s+3s^2-s^3) = 0$
    $(1+3s+3s^2+s^3) - 1.5(1+s-s-s^2+s^2-s^3) + 0.75(1-2s+s^2+s-2s^2+s^3) - 0.1(1-3s+3s^2-s^3) = 0$
    $(1+3s+3s^2+s^3) - 1.5(1-s^3) + 0.75(1-s-s^2+s^3) - 0.1(1-3s+3s^2-s^3) = 0$
    $1+3s+3s^2+s^3 - 1.5+1.5s^3 + 0.75-0.75s-0.75s^2+0.75s^3 - 0.1+0.3s-0.3s^2+0.1s^3 = 0$
    Combine like terms:
    $s^3(1+1.5+0.75+0.1) + s^2(3-0.75-0.3) + s(3+0.75-0.1) + (1-1.5+0.75-0.1) = 0$
    $3.35s^3 + 1.95s^2 + 3.65s + 0.15 = 0$
4.  **Routh Array:**
    | Row   | $s^3$  | $s^1$  |
    | :---- | :----- | :----- |
    | $s^3$ | 3.35   | 3.65   |
    | $s^2$ | 1.95   | 0.15   |
    | $s^1$ | $c_1$  | 0      |
    | $s^0$ | $e_1$  | 0      |

    $c_1 = \frac{1.95 \times 3.65 - 3.35 \times 0.15}{1.95} = \frac{7.1175 - 0.5025}{1.95} = \frac{6.615}{1.95} \approx 3.392$
    $e_1 = \frac{c_1 \times 0.15 - 1.95 \times 0}{c_1} = 0.15$

5.  **Stability Determination:** The first column elements are 3.35, 1.95, 3.392, and 0.15. All are positive, and there are no sign changes.

**Conclusion 1:** The system is **stable**.

**Question 2:**
For what range of $K$ is the closed-loop discrete-time system with characteristic equation $z^2 - (1.2-K)z + 0.5 = 0$ stable?

**Solution 2:**
1.  **Characteristic Equation:** $z^2 - (1.2-K)z + 0.5 = 0$
2.  **Bilinear Transformation:** Substitute $z = \frac{1+s}{1-s}$.
    $\left(\frac{1+s}{1-s}\right)^2 - (1.2-K)\left(\frac{1+s}{1-s}\right) + 0.5 = 0$
3.  **Clear Denominators:** Multiply by $(1-s)^2$.
    $(1+s)^2 - (1.2-K)(1+s)(1-s) + 0.5(1-s)^2 = 0$
    $(1+2s+s^2) - (1.2-K)(1-s^2) + 0.5(1-2s+s^2) = 0$
    $1+2s+s^2 - (1.2-K) + (1.2-K)s^2 + 0.5 - s + 0.5s^2 = 0$
    Combine like terms:
    $s^2(1 + (1.2-K) + 0.5) + s(2 - 1) + (1 - (1.2-K) + 0.5) = 0$
    $s^2(2.7 - K) + s(1) + (1 - 1.2 + K + 0.5) = 0$
    $(2.7 - K)s^2 + 1s + (0.3 + K) = 0$
4.  **Routh Array:**
    | Row   | $s^2$       | $s^0$     |
    | :---- | :---------- | :-------- |
    | $s^2$ | $2.7 - K$   | $0.3 + K$ |
    | $s^1$ | $1$         | $0$       |
    | $s^0$ | $e_1$       | $0$       |

    $e_1 = \frac{1 \times (0.3 + K) - (2.7 - K) \times 0}{1} = 0.3 + K$

5.  **Stability Determination:** For stability, all elements in the first column must be positive.
    *   Coefficient of $s^2$: $2.7 - K > 0 \implies K < 2.7$
    *   Coefficient of $s^1$: $1 > 0$ (always true)
    *   Coefficient of $s^0$ ($e_1$): $0.3 + K > 0 \implies K > -0.3$

    Combining the conditions: $-0.3 < K < 2.7$

**Conclusion 2:** The system is stable for the range **-0.3 < K < 2.7**.

---
This comprehensive set of notes covers the Routh-Hurwitz method in the w-plane, its theoretical basis, practical application with examples, and its relevance to the course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
