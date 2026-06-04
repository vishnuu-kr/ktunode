---
title: "Characteristic equation of Closed loop systems."
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 3: System Modeling"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463679"
status: "completed"
scrapedAt: "2026-05-20T18:00:43.396Z"
---
# Module 3: System Modeling - Characteristic Equation of Closed-Loop Systems

This module delves into the fundamental concept of the characteristic equation in closed-loop control systems. Understanding this equation is crucial for analyzing system behavior, stability, and performance.

**Relevant Course Outcomes:**

*   **CO5:** To analyze the time domain responses of the linear systems and apply Root locus technique to assess the performance. (Knowledge Level: K4)
*   **CO6:** Analyze the stability of the given LTI system (Knowledge Level: K4)

---

## 1. Introduction to Closed-Loop Systems

**Definition:** A closed-loop control system (also known as a feedback control system) is one where the output of the system is measured and compared to the desired input (setpoint). The difference (error signal) is then used to adjust the input to the system to bring the output closer to the setpoint.

**Key Components of a Closed-Loop System:**

*   **Input/Setpoint (R(s))**: The desired value of the output.
*   **Error Detector/Comparator**: Calculates the difference between the input and the feedback signal.
*   **Controller (G_c(s))**: Processes the error signal and generates a control output.
*   **Actuator**: The component that applies the control signal to the plant.
*   **Plant/Process (G_p(s))**: The system being controlled.
*   **Output (Y(s))**: The actual measured value of the system variable.
*   **Sensor/Feedback Element (H(s))**: Measures the output and feeds it back.

**Block Diagram Representation:**

```
      +-----+     +-------+     +-------+     +-------+
R(s) -->|     |-->| Gc(s) |-->| Gu(s) |-->| Gp(s) |--> Y(s)
      |  +  |     +-------+     +-------+     +-------+
      |  ^  |                     (Actuator)   (Plant)
      |  |  |
      |  -  |     +-------+
      +-----+     | H(s)  |
        Error      +-------+
                   Feedback
```

---

## 2. Deriving the Transfer Function of a Closed-Loop System

The transfer function of a closed-loop system describes the relationship between the output and the input in the Laplace domain.

**Steps:**

1.  **Identify signals:** Define signals at various points in the block diagram (e.g., R(s), E(s), U(s), Y(s)).
2.  **Write equations for each block:**
    *   $E(s) = R(s) - B(s)$ (Error signal)
    *   $U(s) = G_c(s)E(s)$ (Controller output)
    *   $Y(s) = G_p(s)U(s)$ (Plant output)
    *   $B(s) = H(s)Y(s)$ (Feedback signal)
3.  **Substitute and simplify:** Substitute equations to express $Y(s)$ in terms of $R(s)$.

    *   $Y(s) = G_p(s) [G_c(s)E(s)]$
    *   $Y(s) = G_p(s) G_c(s) [R(s) - B(s)]$
    *   $Y(s) = G_p(s) G_c(s) [R(s) - H(s)Y(s)]$
    *   $Y(s) = G_c(s)G_p(s)R(s) - G_c(s)G_p(s)H(s)Y(s)$
    *   $Y(s) + G_c(s)G_p(s)H(s)Y(s) = G_c(s)G_p(s)R(s)$
    *   $Y(s) [1 + G_c(s)G_p(s)H(s)] = G_c(s)G_p(s)R(s)$

4.  **Closed-Loop Transfer Function (T(s))**:
    $$T(s) = \frac{Y(s)}{R(s)} = \frac{G_c(s)G_p(s)}{1 + G_c(s)G_p(s)H(s)}$$

**Important Note:** For a unity feedback system, $H(s) = 1$.
$$T(s) = \frac{G_c(s)G_p(s)}{1 + G_c(s)G_p(s)}$$

---

## 3. The Characteristic Equation

The characteristic equation of a closed-loop system is fundamental to understanding its dynamic behavior and stability.

**Definition:** The characteristic equation is obtained by setting the denominator of the closed-loop transfer function to zero.

$$1 + G(s)H(s) = 0$$

Where:
*   $G(s)$ is the forward path transfer function (often $G_c(s)G_p(s)$).
*   $H(s)$ is the feedback path transfer function.

**Significance of the Characteristic Equation:**

*   **Poles of the Closed-Loop System:** The roots of the characteristic equation are the poles of the closed-loop system. These poles determine the system's transient response (how it behaves over time).
*   **Stability:** The location of the poles in the s-plane dictates the stability of the system.
    *   Poles in the left-half of the s-plane (real part is negative) lead to stable systems.
    *   Poles in the right-half of the s-plane (real part is positive) lead to unstable systems.
    *   Poles on the imaginary axis (real part is zero) lead to marginally stable systems or oscillations.
*   **System Response:** The roots of the characteristic equation directly influence the system's response to different inputs, such as step, impulse, or sinusoidal inputs. They determine parameters like settling time, rise time, overshoot, and damping ratio.

**General Form of the Characteristic Equation:**

If $G(s) = \frac{N_G(s)}{D_G(s)}$ and $H(s) = \frac{N_H(s)}{D_H(s)}$, then:

$1 + \frac{N_G(s)}{D_G(s)} \frac{N_H(s)}{D_H(s)} = 0$

Multiply by $D_G(s)D_H(s)$:

$D_G(s)D_H(s) + N_G(s)N_H(s) = 0$

This equation will be a polynomial in 's'. For example, if the open-loop transfer function $G(s)H(s)$ is a rational function:

$G(s)H(s) = \frac{b_m s^m + \dots + b_0}{a_n s^n + \dots + a_0}$

Then the characteristic equation is:

$1 + \frac{b_m s^m + \dots + b_0}{a_n s^n + \dots + a_0} = 0$

$a_n s^n + \dots + a_0 + b_m s^m + \dots + b_0 = 0$

This is a polynomial equation in 's'.

---

## 4. Examples of Characteristic Equations

Let's consider some common system configurations.

**Example 1: Unity Feedback System with a First-Order Plant**

*   Open-loop transfer function: $G(s)H(s) = G(s) = \frac{K}{Ts + 1}$
*   Characteristic Equation:
    $1 + \frac{K}{Ts + 1} = 0$
    $(Ts + 1) + K = 0$
    $Ts + (1+K) = 0$

The root (pole) is $s = -\frac{1+K}{T}$. For stability, $1+K$ must be positive, which is generally true for positive gain $K$.

**Example 2: Unity Feedback System with a Second-Order Plant**

*   Open-loop transfer function: $G(s)H(s) = G(s) = \frac{K}{s(s+a)}$
*   Characteristic Equation:
    $1 + \frac{K}{s(s+a)} = 0$
    $s(s+a) + K = 0$
    $s^2 + as + K = 0$

This is a quadratic equation. The roots (poles) are given by the quadratic formula: $s = \frac{-a \pm \sqrt{a^2 - 4K}}{2}$. The nature of the response (overdamped, critically damped, underdamped) depends on the value of $K$ relative to $a^2$.

**Example 3: Non-Unity Feedback System**

*   Forward Path Transfer Function: $G(s) = \frac{K}{s+a}$
*   Feedback Path Transfer Function: $H(s) = \frac{1}{s+b}$
*   Characteristic Equation:
    $1 + G(s)H(s) = 0$
    $1 + \frac{K}{(s+a)} \frac{1}{(s+b)} = 0$
    $1 + \frac{K}{(s+a)(s+b)} = 0$
    $(s+a)(s+b) + K = 0$
    $s^2 + (a+b)s + ab + K = 0$

This again results in a quadratic characteristic equation.

---

## 5. Relating Characteristic Equation to System Performance (CO5)

The roots of the characteristic equation, also known as the **poles of the closed-loop system**, are critical for analyzing system performance.

**Standard Second-Order System:**
A common form to compare system responses is the standard second-order system:
$$\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$$

The characteristic equation for this standard form is:
$$s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$$

By matching the derived characteristic equation of a given system to this standard form (after manipulation), we can identify key performance parameters:

*   **Natural Frequency ($\omega_n$)**: The frequency of oscillation of the system if there were no damping. It influences the speed of the response.
*   **Damping Ratio ($\zeta$)**: A dimensionless parameter that describes how oscillations decay after a disturbance.
    *   $\zeta < 0$: Unstable system.
    *   $\zeta = 0$: Undamped system (oscillates forever).
    *   $0 < \zeta < 1$: Underdamped system (oscillates with decaying amplitude).
    *   $\zeta = 1$: Critically damped system (fastest response without overshoot).
    *   $\zeta > 1$: Overdamped system (slow response with no overshoot).

**Relationship to Time Domain Specifications:**

The location of the closed-loop poles in the s-plane directly relates to these specifications:

*   **Settling Time ($T_s$)**: Approximately $4/\text{Re}(p)$ for poles in the left-half plane, where $\text{Re}(p)$ is the real part of the dominant pole. A more negative real part leads to a faster settling time.
*   **Rise Time ($T_r$)**: Inversely proportional to the imaginary part of the dominant complex conjugate poles. Larger imaginary parts lead to faster rise times.
*   **Peak Overshoot ($M_p$)**: For underdamped systems, it is related to the damping ratio $\zeta$. $M_p = e^{-\frac{\pi\zeta}{\sqrt{1-\zeta^2}}}$. Lower damping ratio ($\zeta$) leads to higher overshoot.
*   **Peak Time ($T_p$)**: Related to the imaginary part of the dominant complex conjugate poles: $T_p = \frac{\pi}{\omega_d}$, where $\omega_d = \omega_n\sqrt{1-\zeta^2}$ is the damped natural frequency.

**Root Locus Technique (CO5):** The root locus is a graphical method that shows how the closed-loop poles move as a system parameter (typically gain K) varies. It's a powerful tool for understanding how changes in gain affect system stability and performance. The characteristic equation is the foundation upon which the root locus is constructed.

---

## 6. Stability Analysis using the Characteristic Equation (CO6)

The location of the roots of the characteristic equation is the most direct way to determine the stability of a linear time-invariant (LTI) system.

*   **Stable System:** All roots of the characteristic equation lie in the Left-Half Plane (LHP) of the s-plane (i.e., all real parts are negative).
*   **Unstable System:** At least one root lies in the Right-Half Plane (RHP) of the s-plane (i.e., at least one real part is positive).
*   **Marginally Stable System:** Roots lie on the imaginary axis, with no roots in the RHP. If there are repeated roots on the imaginary axis, the system is unstable. If the roots are distinct, it's marginally stable, leading to sustained oscillations.

**Methods for Stability Analysis based on the Characteristic Equation:**

1.  **Directly Finding the Roots:** For low-order systems (e.g., first or second order), the characteristic equation can be solved directly to find the roots.
2.  **Routh-Hurwitz Stability Criterion:** This is an algebraic method that determines the number of roots in the RHP without actually solving for them. It involves constructing a Routh array from the coefficients of the characteristic polynomial. The criterion states that for stability, all coefficients of the characteristic polynomial must be present and have the same sign, and all elements in the first column of the Routh array must be positive.
3.  **Root Locus:** As mentioned, the root locus directly shows how poles move in the s-plane with changes in gain, indicating when they cross into the RHP, thus indicating the onset of instability.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## 7. Textbooks and References Summary

This topic is extensively covered in standard control systems textbooks. Key concepts like deriving the closed-loop transfer function and identifying the characteristic equation are foundational.

*   **Nise N.S. (Control Systems Engineering):** Provides a comprehensive treatment of feedback systems, deriving transfer functions, and extensively discusses the concept of poles and their relation to stability and transient response. Chapter 4 (Time Response) and Chapter 6 (Stability) are highly relevant.
*   **Ogata K (Modern Control Engineering):** Similar to Nise, Ogata covers the fundamental block diagram manipulation and the derivation of the characteristic equation. He also delves into the relationship between pole locations and transient response characteristics. Chapters 2 (Differential Equations and Transfer Functions) and 5 (Stability) are pertinent.
*   **Doebelin E.O. (Measurement Systems: Application and Design):** While focused on measurement systems, Doebelin touches upon system dynamics and feedback principles, which implicitly involve the concepts of transfer functions and stability.
*   **Krishnaswamy K. (Industrial Instrumentation):** Might cover basic feedback loop concepts and how system dynamics are represented, leading to the characteristic equation.
*   **Patranabis D. (Principles of Industrial Instrumentation):** Offers insights into instrumentation aspects of control systems, where understanding system dynamics through characteristic equations is vital for performance analysis.

---

## 8. Practice Questions

**Question 1:**
For the unity feedback system with the open-loop transfer function $G(s) = \frac{10}{s(s+2)}$, what is the characteristic equation of the closed-loop system?

**Question 2:**
Consider a closed-loop system with the following open-loop transfer function: $G(s)H(s) = \frac{5(s+1)}{s^2(s+3)}$. Derive the characteristic equation of the closed-loop system.

**Question 3:**
A closed-loop system has the characteristic equation $s^3 + 2s^2 + 3s + 4 = 0$.
a) Is this system stable? Justify your answer.
b) If this equation represented a standard second-order system $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$, what would be the values of $\zeta$ and $\omega_n$? (Note: This question implies a simplification or a specific scenario, as it's a third-order polynomial).

**Question 4:**
The closed-loop transfer function of a system is given by $T(s) = \frac{s+5}{s^2 + 6s + 13}$.
a) What is the characteristic equation of this system?
b) What are the poles of the closed-loop system?
c) Is the system stable? Describe the nature of its response (e.g., underdamped, overdamped).

---

## 9. Answers to Practice Questions

**Answer 1:**
The characteristic equation for a unity feedback system is $1 + G(s) = 0$.
$1 + \frac{10}{s(s+2)} = 0$
$s(s+2) + 10 = 0$
$s^2 + 2s + 10 = 0$

**Answer 2:**
The characteristic equation is $1 + G(s)H(s) = 0$.
$1 + \frac{5(s+1)}{s^2(s+3)} = 0$
$s^2(s+3) + 5(s+1) = 0$
$s^3 + 3s^2 + 5s + 5 = 0$

**Answer 3:**
a) Using the Routh-Hurwitz criterion (or by observation of coefficients):
The coefficients are 1, 2, 3, 4. All are positive.
Routh Array:
| s³ | 1   | 3   |
|----|-----|-----|
| s² | 2   | 4   |
| s¹ | b₁  | 0   |
| s⁰ | c₁  | 0   |

$b_1 = \frac{(2 \times 3) - (1 \times 4)}{2} = \frac{6-4}{2} = \frac{2}{2} = 1$
$c_1 = \frac{(1 \times 0) - (b_1 \times 0)}{b_1} = 0$

Routh Array continues:
| s³ | 1   | 3   |
|----|-----|-----|
| s² | 2   | 4   |
| s¹ | 1   | 0   |
| s⁰ | 4   | 0   |

All elements in the first column (1, 2, 1, 4) are positive. Therefore, all roots lie in the left-half plane, and the system is **stable**.

b) The question implies we should compare the third-order polynomial to a standard second-order form. This is generally not a direct comparison unless the system is approximated or has specific properties. If the intent was a second-order system, the characteristic equation would be quadratic. However, if we are forced to try and interpret, it's not a direct mapping. For a true second-order system, you would match $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$. A third-order system will have three poles, not two.

**Answer 4:**
a) The characteristic equation is the denominator of the closed-loop transfer function set to zero.
$s^2 + 6s + 13 = 0$

b) To find the poles, we solve the characteristic equation:
$s = \frac{-6 \pm \sqrt{6^2 - 4(1)(13)}}{2(1)}$
$s = \frac{-6 \pm \sqrt{36 - 52}}{2}$
$s = \frac{-6 \pm \sqrt{-16}}{2}$
$s = \frac{-6 \pm j4}{2}$
The poles are $s_1 = -3 + j2$ and $s_2 = -3 - j2$.

c) Since both poles have negative real parts (-3), the system is **stable**. The poles are complex conjugates, indicating an **underdamped** response. The system will exhibit oscillatory behavior with decaying amplitude.

---

## 10. Important Points to Remember

*   The **characteristic equation** of a closed-loop system is always given by $1 + G(s)H(s) = 0$.
*   The **roots of the characteristic equation** are the **poles of the closed-loop system**.
*   The **location of the poles** in the s-plane determines the **stability** and the **transient response characteristics** of the system.
*   Poles in the LHP $\implies$ Stable.
*   Poles in the RHP $\implies$ Unstable.
*   Poles on the imaginary axis $\implies$ Marginally stable (or unstable if repeated).
*   The **Routh-Hurwitz criterion** is a powerful tool to check stability without solving for the roots.
*   The **root locus technique** graphically illustrates how the closed-loop poles change with system gain, providing insights into stability and performance trade-offs.
*   For a second-order system, the parameters $\zeta$ and $\omega_n$ in the characteristic equation $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$ directly relate to performance metrics like overshoot, settling time, and rise time.