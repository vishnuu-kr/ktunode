---
title: "Effect of positive feedback systems on Root locus.  (5 hours)"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 3: Root Locus Analysis and Controllers"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366c3"
status: "completed"
scrapedAt: "2026-05-23T16:29:39.016Z"
---
# Introduction to Control Systems - Module 3: Root Locus Analysis and Controllers

## Topic: Effect of Positive Feedback Systems on Root Locus (5 hours)

---

### 1. Introduction and Recap

This module delves into the powerful technique of Root Locus analysis, a graphical method to understand the stability and transient response of a closed-loop system as a parameter (typically the open-loop gain, $K$) varies. We've previously discussed the fundamental rules for sketching root locus plots for **negative feedback** systems. Today, we focus on a crucial variation: **positive feedback systems**.

**Key Concepts Recap:**

*   **Closed-Loop Transfer Function (CLTF):** For a standard negative feedback system, $T(s) = \frac{G(s)}{1 + G(s)H(s)}$. The poles of the CLTF are the roots of the characteristic equation $1 + G(s)H(s) = 0$.
*   **Open-Loop Transfer Function (OLTF):** $G_{OL}(s) = G(s)H(s)$.
*   **Root Locus:** The locus of the roots of the characteristic equation as the gain $K$ varies from $0$ to $\infty$.
*   **Stability:** Determined by the location of the closed-loop poles. If all poles are in the Left Half Plane (LHP), the system is stable. Poles in the Right Half Plane (RHP) indicate instability.

**Course Outcomes Addressed:**

*   **CO1 (K2):** We're building upon the foundation of representing systems.
*   **CO2 (K2):** Understanding how pole locations (revealed by root locus) affect transient response is crucial.
*   **CO3 (K3):** This entire topic is about analyzing system dynamics and stability using Root Locus.

---

### 2. Understanding Positive Feedback

In a standard negative feedback system, the feedback signal is subtracted from the input signal. In a positive feedback system, the feedback signal is **added** to the input signal.

**Block Diagram Comparison:**

*   **Negative Feedback:**
    ```
        R(s) +-------+   +-------+      +-------+
             |       |-->|   G(s)  |----->|       | Y(s)
             |       |   +-------+      |       |
             +--(-)---------------------|   H(s)  |
                                        |       |
                                        +-------+
    ```
    Characteristic Equation: $1 + G(s)H(s) = 0$

*   **Positive Feedback:**
    ```
        R(s) +-------+   +-------+      +-------+
             |       |-->|   G(s)  |----->|       | Y(s)
             |       |   +-------+      |       |
             +--(+)----------------------|   H(s)  |
                                        |       |
                                        +-------+
    ```
    Characteristic Equation: $1 - G(s)H(s) = 0$

**Impact on Characteristic Equation:**

The fundamental difference lies in the sign of the OLTF term in the characteristic equation.
*   Negative Feedback: $1 + G_{OL}(s) = 0$
*   Positive Feedback: $1 - G_{OL}(s) = 0 \implies G_{OL}(s) = 1$

This seemingly small change has profound implications for the root locus.

---

### 3. Root Locus Rules for Positive Feedback Systems

The general procedure for sketching root locus plots is similar, but the test for points on the locus and the sign of $K$ are affected. For a positive feedback system with OLTF $G_{OL}(s) = K G'(s)H'(s)$, the characteristic equation is $1 - K G'(s)H'(s) = 0$, or $K G'(s)H'(s) = 1$.

**Key Modifications to Root Locus Rules:**

1.  **Definition of the Locus:** The roots of the characteristic equation $1 - K G(s)H(s) = 0$ are the points in the s-plane where $K G(s)H(s) = 1$.

2.  **Test for Points on the Locus:** A point $s$ on the s-plane lies on the root locus if the magnitude of $K G(s)H(s)$ is equal to 1.
    *   $|K G(s)H(s)| = 1 \implies |K| |G(s)H(s)| = 1$
    *   Therefore, $K = \frac{1}{|G(s)H(s)|}$. This means the gain $K$ required for a point $s$ to be a root is the reciprocal of the magnitude of the OLTF evaluated at $s$.

3.  **Angle Condition:** The angle of $K G(s)H(s)$ must be $0^\circ$ or $360^\circ$ (and multiples thereof) for the equation $K G(s)H(s) = 1$ to hold.
    *   $\angle K G(s)H(s) = 0^\circ, \pm 360^\circ, \pm 720^\circ, \ldots$
    *   Since $K$ is a positive real number, $\angle K = 0^\circ$.
    *   Thus, $\angle G(s)H(s) = 0^\circ$ or $180^\circ$ (and multiples thereof). This is the **same angle condition** as for negative feedback!

4.  **Gain Calculation:** The value of $K$ at any point $s$ on the locus is $K = \frac{1}{|G(s)H(s)|}$.

5.  **Asymptotes:** The number of asymptotes is the same (number of OLTF poles minus number of OLTF zeros). The centroid calculation is also the same. However, the **directions** of the asymptotes will differ because the starting points for angles are different ( $0^\circ$ vs $180^\circ$).

6.  **Breakaway and Break-in Points:** The method for finding breakaway and break-in points remains the same:
    *   Differentiate the characteristic equation with respect to $s$: $\frac{d}{ds}[1 - G(s)H(s)] = 0$.
    *   Solve for $s$. These $s$ values are potential breakaway or break-in points.
    *   Verify that these points lie on the root locus by checking the angle condition (which is $0^\circ$ for positive feedback).

7.  **Imaginary Axis Crossing:** The method remains the same using the Routh-Hurwitz criterion on the characteristic equation $1 - K G(s)H(s) = 0$. The gain $K$ at the imaginary axis crossing will be different due to the reciprocal magnitude condition.

**Important Note:** While the angle condition remains the same, the gain condition ($|KG(s)H(s)|=1$) drastically alters the resulting root locus.

---

### 4. Effect of Positive Feedback on Stability

**The primary effect of positive feedback is a significant reduction in stability margins and a tendency towards instability.**

*   **Negative Feedback:** Tends to "pull" the closed-loop poles towards the LHP, increasing stability.
*   **Positive Feedback:** Tends to "push" the closed-loop poles towards the RHP, decreasing stability.

**Example Illustration:**

Consider a simple system with OLTF $G_{OL}(s) = \frac{K}{s(s+1)}$.

*   **Negative Feedback:**
    *   Characteristic Equation: $1 + \frac{K}{s(s+1)} = 0 \implies s^2 + s + K = 0$.
    *   Roots: $s = \frac{-1 \pm \sqrt{1-4K}}{2}$.
    *   For $K=0.25$, roots are $s = -0.5, -0.5$ (critically damped).
    *   For $K > 0.25$, roots are complex and in LHP ($s = -0.5 \pm j\sqrt{K-0.25}$).
    *   Stability is maintained for all $K > 0$.

*   **Positive Feedback:**
    *   Characteristic Equation: $1 - \frac{K}{s(s+1)} = 0 \implies s^2 + s - K = 0$.
    *   Roots: $s = \frac{-1 \pm \sqrt{1+4K}}{2}$.
    *   For $K > 0$, one root is $s_1 = \frac{-1 + \sqrt{1+4K}}{2}$, which is always in the RHP.
    *   This system is **inherently unstable** for any $K > 0$.

**This illustrates a critical point: For many system configurations, positive feedback leads to inherent instability, even for simple systems.**

*(Reference: Nise, 5th Ed., Chapter 6 on Root Locus, focusing on the characteristic equation manipulation for positive feedback. Nagrath & Gopal, 5th Ed., Chapter 7 on Stability, often discusses the impact of feedback sign.)*

---

### 5. Sketching Root Locus for Positive Feedback Systems: A Step-by-Step Approach

Let's use the standard root locus rules, adapted for positive feedback.

**System:** OLTF $G_{OL}(s) = K G'(s)H'(s)$

**Characteristic Equation:** $1 - K G'(s)H'(s) = 0$

**Modified Rules:**

1.  **Poles and Zeros:** Identify the poles and zeros of $G'(s)H'(s)$. These are the same as for negative feedback.
2.  **Real Axis Locus:** Segments of the real axis are part of the locus if, to their right, there is an **even** number of OLTF poles and zeros (including the $K$ term as a pole at the origin).
    *   **Crucial Difference:** For negative feedback, it's an odd number. For positive feedback, it's an **even** number. This means the starting points of the locus (at $K=0$) will differ significantly on the real axis.
3.  **Asymptotes:**
    *   Number of asymptotes = (Number of poles of $G'(s)H'(s)$) - (Number of zeros of $G'(s)H'(s)$) = $p - z$.
    *   Centroid: $\sigma_a = \frac{\sum \text{poles} - \sum \text{zeros}}{p-z}$. This remains the same.
    *   Angles: $\theta_a = \frac{(2n+1)180^\circ}{p-z}$ for negative feedback.
    *   **Positive Feedback Angles:** $\theta_a = \frac{2n \cdot 180^\circ}{p-z}$ for $n = 0, 1, 2, \ldots, p-z-1$. This means asymptotes are along the **real axis** at $0^\circ$ and $180^\circ$, if $p-z \ge 2$. This can lead to loci moving along the real axis.
4.  **Breakaway/Break-in Points:** Solve $\frac{d}{ds}[G'(s)H'(s)] = 0$ and check if these points satisfy the angle condition $\angle G'(s)H'(s) = 0^\circ$ (for positive feedback).
5.  **Imaginary Axis Crossing:** Use Routh-Hurwitz on $1 - K G'(s)H'(s) = 0$. The gain $K$ at crossing is $K = \frac{1}{|G(j\omega)H(j\omega)|}$.
6.  **Gain Calculation:** $K = \frac{1}{|G(s)H(s)|}$ at any point $s$ on the locus.

**Example:** Sketch the root locus for the positive feedback system with OLTF $G_{OL}(s) = \frac{K}{s(s+2)}$.

*   OLTF: $G'(s)H'(s) = \frac{1}{s(s+2)}$. Poles at $s=0, s=-2$. Zero at infinity.
*   Characteristic Equation: $1 - \frac{K}{s(s+2)} = 0 \implies s(s+2) - K = 0 \implies s^2 + 2s - K = 0$.

**Applying Modified Rules:**

1.  **Poles & Zeros:** Poles at $s=0, s=-2$. One finite zero at infinity.
2.  **Real Axis Locus:**
    *   Interval $(-\infty, -2)$: Even number of OLTF poles/zeros to the right (0). Locus exists.
    *   Interval $(-2, 0)$: Odd number of OLTF poles/zeros to the right (1). Locus does not exist.
    *   Interval $(0, \infty)$: Even number of OLTF poles/zeros to the right (2). Locus exists.
    *   **Conclusion:** Locus exists on $(-\infty, -2]$ and $[0, \infty)$ on the real axis.
3.  **Asymptotes:**
    *   $p=2$, $z=0$. Number of asymptotes = $2 - 0 = 2$.
    *   Centroid: $\sigma_a = \frac{0 + (-2) - 0}{2} = -1$.
    *   Angles: $\theta_a = \frac{2n \cdot 180^\circ}{2}$ for $n=0, 1$.
        *   $n=0: \theta_a = \frac{0 \cdot 180^\circ}{2} = 0^\circ$.
        *   $n=1: \theta_a = \frac{2 \cdot 180^\circ}{2} = 180^\circ$.
    *   **Conclusion:** Asymptotes are along the positive and negative real axes, originating from the centroid at $s=-1$. This means the loci will break away from the real axis at some points and tend towards infinity along the real axis.
4.  **Breakaway Points:**
    *   Characteristic equation: $s^2 + 2s - K = 0 \implies K = s^2 + 2s$.
    *   Differentiate with respect to $s$: $\frac{dK}{ds} = 2s + 2$.
    *   Set to zero: $2s + 2 = 0 \implies s = -1$.
    *   Check if $s=-1$ is on the locus: Angle condition $\angle \frac{1}{s(s+2)} = 0^\circ$.
        *   At $s=-1$: $\frac{1}{(-1)(-1+2)} = \frac{1}{-1} = -1$. Angle is $180^\circ$.
        *   **Wait!** The angle condition for positive feedback is $0^\circ$. The point $s=-1$ gives an angle of $180^\circ$, so it's *not* a breakaway point.
    *   **Rethink Breakaway for Positive Feedback:** The root locus will start on the real axis at $s=0$ and $s=-2$. Since the asymptotes are along the real axis, the loci will move away from the real axis. The calculation $K = s^2 + 2s$ indicates that for positive $K$, the roots are $s = \frac{-2 \pm \sqrt{4+4K}}{2} = -1 \pm \sqrt{1+K}$.
        *   For $K>0$, one root is $-1+\sqrt{1+K}$ (always positive RHP). The other root is $-1-\sqrt{1+K}$ (always negative LHP).
        *   This means the locus starting at $s=0$ moves into the RHP along the positive real axis. The locus starting at $s=-2$ moves into the LHP along the negative real axis.
        *   **This system is unstable for all $K>0$.**

**Key Takeaway from Example:** The asymptotes along the real axis and the gain condition are critical. For this simple example, positive feedback leads to immediate instability.

*(Reference: Nise, 5th Ed., Chapter 6, Section 6.6, "Root Locus for Positive Feedback Systems" explicitly covers these modified rules and provides examples. Ogata, 5th Ed., Chapter 4 on Stability, may discuss the general principles of positive feedback's destabilizing effect.)*

---

### 6. Controller Design with Positive Feedback

In most practical control systems, positive feedback is avoided due to its destabilizing nature. However, understanding its effects is crucial for:

*   **Identifying potential issues:** Recognizing when a system might accidentally have positive feedback (e.g., due to wiring errors or component failures) and its consequences.
*   **Specialized applications:** In some niche applications (e.g., oscillators, regenerative circuits), controlled positive feedback is used to achieve specific behaviors. In such cases, careful analysis of the root locus, considering the modified rules, is essential to ensure stability within the desired operating range.

**When positive feedback is *unintentionally* present, it significantly alters the system's stability.**

**Example Scenario: Accidental Positive Feedback in a Motor Control System**

Suppose you have a motor system controlled by a controller $G_c(s)$ and a plant $G_p(s)$, typically in a negative feedback loop with a tachometer $H_t(s)$.
OLTF = $G_c(s)G_p(s)H_t(s)$.
If the tachometer wiring is reversed, the feedback becomes positive.
New OLTF = $-G_c(s)G_p(s)H_t(s)$.
The characteristic equation changes from $1 + G_{OL}(s) = 0$ to $1 - (-G_{OL}(s)) = 0$, which is $1 + G_{OL}(s) = 0$.
This looks the same! However, the *gain* term in the positive feedback formulation is the magnitude of this new OLTF.
Let the OLTF of the original negative feedback system be $K G'(s)H'(s)$.
If the tachometer is reversed, the OLTF for positive feedback is $K_{PF}(s) = -K G'(s)H'(s)$.
The characteristic equation becomes $1 - K_{PF}(s) = 0 \implies 1 - (-K G'(s)H'(s)) = 0 \implies 1 + K G'(s)H'(s) = 0$.
Wait, this is the *same* characteristic equation as the negative feedback case.
**This is a common point of confusion.**

Let's re-evaluate the definition of $G_{OL}(s)$ and $K$.
Standard negative feedback: $G_{OL}(s) = G(s)H(s)$. Characteristic equation: $1+G_{OL}(s)=0$.
If $H(s)$ becomes $-H(s)$ due to wiring: $G_{OL_{new}}(s) = G(s)(-H(s)) = -G_{OL}(s)$.
Characteristic equation: $1+G_{OL_{new}}(s) = 0 \implies 1 - G_{OL}(s) = 0$.
This is indeed the characteristic equation for a *positive* feedback system where the OLTF is $G_{OL}(s)$.

So, if a system originally designed for negative feedback is implemented with a feedback sensor wired in reverse, the *roots of the characteristic equation* are found by solving $1 - G_{OL}(s) = 0$, where $G_{OL}(s)$ is the open-loop transfer function with the *original* feedback element.

**Let's take the example $G(s) = \frac{K}{s(s+1)}$ and $H(s) = 1$.**
Negative feedback: $1 + \frac{K}{s(s+1)} = 0 \implies s^2 + s + K = 0$.
Roots: $s = \frac{-1 \pm \sqrt{1-4K}}{2}$. Stable for all $K>0$.

If $H(s)$ is reversed to $-1$:
The new OLTF is $G(s)H_{new}(s) = \frac{K}{s(s+1)} (-1) = -\frac{K}{s(s+1)}$.
The characteristic equation for a *positive feedback system* with OLTF $\frac{K}{s(s+1)}$ is $1 - \frac{K}{s(s+1)} = 0$, which we saw leads to $s^2+s-K=0$.
Roots: $s = \frac{-1 \pm \sqrt{1+4K}}{2}$. Unstable for all $K>0$.

This demonstrates that reversing the feedback sensor in a negative feedback configuration *effectively* turns it into a positive feedback system with the original OLTF, leading to instability.

*(Reference: Nise, 5th Ed., Chapter 6.6, discussing how the sign change in the feedback path affects the characteristic equation and thus the root locus.)*

---

### 7. Important Points to Remember

*   **Characteristic Equation:** For positive feedback, it's $1 - G_{OL}(s) = 0$.
*   **Gain Condition:** $K = \frac{1}{|G(s)H(s)|}$. This is the reciprocal of the magnitude condition for negative feedback.
*   **Angle Condition:** $\angle G(s)H(s) = 0^\circ$ or $180^\circ$ (even multiples of $180^\circ$). This is the same as for negative feedback.
*   **Real Axis Locus:** Segments are on the locus if there is an **even** number of OLTF poles and zeros to the right.
*   **Asymptote Angles:** $\theta_a = \frac{2n \cdot 180^\circ}{p-z}$. This can lead to asymptotes lying on the real axis.
*   **Stability:** Positive feedback generally reduces stability margins and often leads to instability, pushing roots into the RHP.
*   **Accidental Positive Feedback:** A reversed feedback sensor in a negative feedback system *behaves* like a positive feedback system, leading to potential instability.

---

### 8. Practice Questions and Exercises

**Question 1:**
Consider a system with positive feedback and an open-loop transfer function $G_{OL}(s) = \frac{K}{s(s+4)}$. Sketch the root locus plot and determine the value of $K$ for which the system crosses the imaginary axis.

**Answer 1:**
*   OLTF: $G'(s)H'(s) = \frac{1}{s(s+4)}$. Poles at $s=0, s=-4$.
*   Characteristic Equation: $1 - \frac{K}{s(s+4)} = 0 \implies s^2 + 4s - K = 0$.
*   **Real Axis Locus:**
    *   $(-\infty, -4]$: Even number of poles/zeros to the right (0). Locus exists.
    *   $(-4, 0)$: Odd number of poles/zeros to the right (1). Locus does not exist.
    *   $[0, \infty)$: Even number of poles/zeros to the right (2). Locus exists.
*   **Asymptotes:**
    *   $p=2, z=0 \implies 2$ asymptotes.
    *   Centroid: $\sigma_a = \frac{0 + (-4)}{2} = -2$.
    *   Angles: $\theta_a = \frac{2n \cdot 180^\circ}{2}$ for $n=0, 1$. $\implies 0^\circ, 180^\circ$. Asymptotes are along the real axes originating from $s=-2$.
*   **Breakaway Point:** $K = s(s+4) = s^2 + 4s$. $\frac{dK}{ds} = 2s + 4 = 0 \implies s = -2$.
    *   Check if $s=-2$ is on the locus: $\angle \frac{1}{s(s+4)}$ at $s=-2$ is $\angle \frac{1}{(-2)(-2+4)} = \angle \frac{1}{-4} = 180^\circ$. This violates the $0^\circ$ condition. The locus will move along the real axis until it breaks away. Since the asymptotes are on the real axis, the locus will tend towards infinity along the real axis from the points $s=0$ and $s=-4$. The system is unstable for all $K>0$.
*   **Imaginary Axis Crossing:** Use Routh-Hurwitz on $s^2 + 4s - K = 0$.
    *   Row $s^2$: 1 | -K
    *   Row $s^1$: 4 | 0
    *   For stability, all elements must have the same sign. The $s^2$ coefficient is positive. The $s^1$ coefficient (4) is positive. However, the $s^0$ coefficient is $-K$. For stability, $-K$ must be positive, which means $K$ must be negative. But for positive feedback, $K$ is typically assumed positive.
    *   If we consider $K$ as a parameter that can change sign in the characteristic equation $s^2 + 4s - K = 0$, we need to find $K$ when the $s^0$ term causes a sign change.
    *   Let's consider the auxiliary polynomial $s^2 + 4s = 0$. This gives $s(s+4)=0$, so $s=0$ and $s=-4$.
    *   To find the crossing point, we set the characteristic equation to $j\omega$: $(j\omega)^2 + 4(j\omega) - K = 0 \implies -\omega^2 + j4\omega - K = 0$.
    *   Equating real and imaginary parts to zero:
        *   Imaginary: $4\omega = 0 \implies \omega = 0$.
        *   Real: $-\omega^2 - K = 0$. Substituting $\omega=0$: $-0 - K = 0 \implies K = 0$.
    *   This indicates that the system is on the imaginary axis (at $s=0$) when $K=0$. For any $K > 0$, the real root $\frac{-4+\sqrt{16+4K}}{2}$ is always positive (in the RHP).
    *   **Conclusion:** The system is unstable for all $K>0$.

**Question 2:**
For a positive feedback system with OLTF $G_{OL}(s) = \frac{K}{(s+1)(s+3)}$, what is the value of $K$ at the breakaway point and the angle of the asymptotes?

**Answer 2:**
*   OLTF: $G'(s)H'(s) = \frac{1}{(s+1)(s+3)}$. Poles at $s=-1, s=-3$.
*   Characteristic Equation: $1 - \frac{K}{(s+1)(s+3)} = 0 \implies (s+1)(s+3) - K = 0 \implies s^2 + 4s + 3 - K = 0$.
*   **Real Axis Locus:**
    *   $(-\infty, -3]$: Even number of poles/zeros to the right (0). Locus exists.
    *   $(-3, -1)$: Odd number of poles/zeros to the right (1). Locus does not exist.
    *   $(-1, \infty)$: Even number of poles/zeros to the right (2). Locus exists.
*   **Asymptotes:**
    *   $p=2, z=0 \implies 2$ asymptotes.
    *   Centroid: $\sigma_a = \frac{-1 + (-3)}{2} = -2$.
    *   Angles: $\theta_a = \frac{2n \cdot 180^\circ}{2}$ for $n=0, 1$. $\implies 0^\circ, 180^\circ$. Asymptotes are along the real axes originating from $s=-2$.
*   **Breakaway Point:** $K = (s+1)(s+3) = s^2 + 4s + 3$.
    *   $\frac{dK}{ds} = 2s + 4 = 0 \implies s = -2$.
    *   Check if $s=-2$ is on the locus: Angle condition $\angle \frac{1}{(s+1)(s+3)} = 0^\circ$.
        *   At $s=-2$: $\angle \frac{1}{(-2+1)(-2+3)} = \angle \frac{1}{(-1)(1)} = \angle -1 = 180^\circ$.
        *   **This violates the $0^\circ$ condition.** The calculation of $s=-2$ for the breakaway point assumed the standard derivative method applies directly, but we must check the angle condition. Since the asymptotes are on the real axis, the loci starting from $s=-1$ and $s=-3$ will move towards the real axes. However, the characteristic equation $s^2+4s+(3-K)=0$ has roots $s = \frac{-4 \pm \sqrt{16 - 4(3-K)}}{2} = \frac{-4 \pm \sqrt{16-12+4K}}{2} = \frac{-4 \pm \sqrt{4+4K}}{2} = -2 \pm \sqrt{1+K}$.
        *   For $K>0$, one root is $-2 + \sqrt{1+K}$ and the other is $-2 - \sqrt{1+K}$.
        *   The root $-2 - \sqrt{1+K}$ is always in the LHP and moves further left as $K$ increases.
        *   The root $-2 + \sqrt{1+K}$ starts at $s=-1$ when $K=0$ and moves to the right. It crosses the imaginary axis when $-2 + \sqrt{1+K} = 0 \implies \sqrt{1+K} = 2 \implies 1+K = 4 \implies K=3$.
        *   At $K=3$, the roots are $s = -2 \pm \sqrt{1+3} = -2 \pm 2$, which are $s=0$ and $s=-4$.
        *   So, the system is stable for $0 < K < 3$, and unstable for $K > 3$.
    *   **Value of K at breakaway (imaginary axis crossing for this specific case):** $K = 3$.
    *   **Angle of asymptotes:** $0^\circ$ and $180^\circ$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. Conclusion and Further Reading

This topic has highlighted the critical and often destabilizing impact of positive feedback in control systems. While negative feedback is the norm for stability, understanding the principles of positive feedback root locus is vital for diagnosing problems and for the rare applications where it's intentionally employed.

**Key Takeaways:**

*   Positive feedback fundamentally alters the characteristic equation and the rules for root locus sketching.
*   It significantly reduces stability, pushing poles towards the RHP.
*   Accidental positive feedback (e.g., reversed sensor wiring) can render a previously stable system unstable.

**Further Reading:**

*   **Nise, 5th Ed.:** Chapter 6, especially Section 6.6 on positive feedback.
*   **Nagrath & Gopal, 5th Ed.:** Chapters on Stability and Root Locus. Look for discussions on the sign of the feedback.
*   **Ogata, 5th Ed.:** Chapters on transient and steady-state response, and stability criteria, will provide the underlying principles.

This module provides a solid foundation for analyzing and understanding the behavior of various control systems. The ability to interpret root locus plots for both negative and positive feedback configurations is a crucial skill for any control engineer.