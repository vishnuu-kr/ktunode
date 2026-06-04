---
title: "Steady state error analysis and static error constants (5 hours)"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 2: Performance Analysis of Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366bc"
status: "completed"
scrapedAt: "2026-05-23T16:29:29.117Z"
---
# Introduction to Control Systems - Module 2: Performance Analysis of Control Systems

## Topic: Steady State Error Analysis and Static Error Constants (5 Hours)

This module delves into understanding how well a control system performs after the transient behavior has settled. Specifically, we will focus on **steady-state error**, which is the difference between the desired output and the actual output as time approaches infinity. We will also introduce **static error constants**, which are crucial parameters used to quantify and improve this steady-state error.

---

### Learning Outcomes (LO) Addressed in this Topic:

*   **LO1:** Understand the concept of steady-state error and its significance in control system performance.
*   **LO2:** Analyze the steady-state error for different standard input signals (step, ramp, parabolic).
*   **LO3:** Define and derive static error constants (Position, Velocity, Acceleration).
*   **LO4:** Relate static error constants to the system's open-loop transfer function and its type.
*   **LO5:** Predict the steady-state error based on the system type and input signal.
*   **LO6:** Understand how to improve steady-state error by modifying the system.

---

### Course Outcomes (CO) Alignment:

*   **CO1 (K2):** Representing systems in the classical domain is foundational for analyzing transfer functions, which is essential for steady-state error analysis.
*   **CO2 (K2):** Analyzing time-domain responses directly involves understanding what happens as time goes to infinity, which is the essence of steady-state error. Predicting steady-state error for standard inputs directly addresses this CO.
*   **CO3 (K3) & CO4 (K3):** While this topic focuses on steady-state, understanding the system's open-loop structure (transfer function) and its type, which is derived from the poles at the origin, is a precursor to root locus and frequency domain analysis for stability and performance.

---

### Key Concepts and Definitions:

1.  **Steady-State Error ($e_{ss}$):**
    *   **Definition:** The difference between the desired (reference) input and the actual output of the system as time approaches infinity.
    *   **Mathematical Representation:**
        $e_{ss} = \lim_{t \to \infty} e(t)$
        where $e(t) = r(t) - c(t)$ (difference between reference $r(t)$ and output $c(t)$).
    *   **Significance:** A small steady-state error indicates that the system accurately tracks the desired input. A large or infinite steady-state error implies poor performance.

2.  **Ideal vs. Actual System:**
    *   An ideal system would have zero steady-state error for any type of input.
    *   Real-world systems often exhibit non-zero steady-state errors due to factors like disturbances, noise, and system imperfections.

3.  **Standard Input Signals:**
    *   **Unit Step Input:** $r(t) = u(t)$, $R(s) = \frac{1}{s}$
    *   **Unit Ramp Input:** $r(t) = tu(t)$, $R(s) = \frac{1}{s^2}$
    *   **Unit Parabolic Input:** $r(t) = \frac{t^2}{2}u(t)$, $R(s) = \frac{1}{s^3}$

4.  **Closed-Loop Transfer Function ($T(s)$):**
    *   For a typical unity feedback system with forward path transfer function $G(s)H(s)$ (where $H(s)=1$ for unity feedback), the closed-loop transfer function is:
        $T(s) = \frac{C(s)}{R(s)} = \frac{G(s)}{1 + G(s)}$
    *   The error signal $E(s)$ in the Laplace domain is related to the reference input $R(s)$ and the open-loop transfer function $G(s)H(s)$:
        $E(s) = R(s) - C(s) = R(s) - T(s)R(s) = R(s) \left( 1 - T(s) \right)$
        Substituting $T(s)$:
        $E(s) = R(s) \left( 1 - \frac{G(s)}{1 + G(s)} \right) = R(s) \left( \frac{1 + G(s) - G(s)}{1 + G(s)} \right) = \frac{R(s)}{1 + G(s)}$
        *(Note: For non-unity feedback systems with $H(s) \neq 1$, the error signal is $E(s) = R(s) - B(s) = R(s) - H(s)C(s)$. The relationship $E(s) = R(s) / (1 + G(s)H(s))$ still holds where $G(s)H(s)$ is the overall open-loop transfer function.)*

5.  **System Type:**
    *   The **type** of a control system is defined by the **number of pure integrators (poles at the origin)** in the **open-loop transfer function $G(s)H(s)$**.
    *   **Type 0 System:** $G(s)H(s)$ has no poles at the origin. The denominator polynomial has no factor of $s$.
    *   **Type 1 System:** $G(s)H(s)$ has one pole at the origin (one factor of $s$ in the denominator).
    *   **Type 2 System:** $G(s)H(s)$ has two poles at the origin (two factors of $s$ in the denominator).
    *   And so on...

---

### Steady State Error Analysis using Standard Inputs:

We will analyze the steady-state error for a **unity feedback system** with a forward path transfer function $G(s)$. The error signal is given by:
$E(s) = \frac{R(s)}{1 + G(s)}$

The steady-state error is calculated using the **Final Value Theorem (FVT)**:
$e_{ss} = \lim_{t \to \infty} e(t) = \lim_{s \to 0} sE(s) = \lim_{s \to 0} s \left( \frac{R(s)}{1 + G(s)} \right)$

**Important Note:** The Final Value Theorem is applicable only if all the poles of $sE(s)$ lie in the left-half of the s-plane (i.e., the closed-loop system is stable). If the system is unstable, the steady-state error is undefined or infinite.

Let's analyze the steady-state error for different input signals and system types:

**Case 1: Step Input ($r(t) = A u(t)$ or $R(s) = A/s$)**

$e_{ss} = \lim_{s \to 0} s \left( \frac{A/s}{1 + G(s)} \right) = \lim_{s \to 0} \frac{A}{1 + G(s)}$

Let $G(s) = K \frac{(s+z_1)(s+z_2)...}{(s+p_1)(s+p_2)...s^N}$, where $N$ is the system type and $K$ is the system gain.

*   **Type 0 System (N=0):** $G(s)$ has no poles at the origin.
    $G(0) = K'$, a finite non-zero constant.
    $e_{ss} = \frac{A}{1 + G(0)} = \frac{A}{1 + K'}$
    The steady-state error is finite and non-zero.

*   **Type 1 System (N=1):** $G(s)$ has one pole at the origin.
    $G(s) = \frac{K'(s+z_1)...}{s(s+p_1)...}$
    $\lim_{s \to 0} G(s) = \infty$
    $e_{ss} = \frac{A}{1 + \lim_{s \to 0} G(s)} = \frac{A}{1 + \infty} = 0$
    The steady-state error is zero.

*   **Type 2 or higher (N ≥ 2):**
    $\lim_{s \to 0} G(s) = \infty$
    $e_{ss} = \frac{A}{1 + \infty} = 0$
    The steady-state error is zero.

**Summary for Step Input:**
| System Type | $G(0)$ Value | $e_{ss}$ for Unit Step Input (A=1) |
| :---------- | :----------- | :---------------------------------- |
| Type 0      | Finite, Non-zero | $\frac{1}{1+G(0)}$                |
| Type 1      | $\infty$     | 0                                   |
| Type 2+     | $\infty$     | 0                                   |

**Case 2: Ramp Input ($r(t) = At u(t)$ or $R(s) = A/s^2$)**

$e_{ss} = \lim_{s \to 0} s \left( \frac{A/s^2}{1 + G(s)} \right) = \lim_{s \to 0} \frac{A}{s(1 + G(s))}$

Let's analyze $G(s)$ again: $G(s) = K \frac{(s+z_1)(s+z_2)...}{(s+p_1)(s+p_2)...s^N}$

*   **Type 0 System (N=0):**
    $s(1 + G(s)) = s(1 + \frac{K' (poly)}{ (poly) s^0 }) = s + s G(s)$
    $\lim_{s \to 0} s(1 + G(s)) = 0 + 0 \times G(0) = 0$
    $e_{ss} = \frac{A}{0} = \infty$
    The steady-state error is infinite.

*   **Type 1 System (N=1):** $G(s) = \frac{K'(s+z_1)...}{s(s+p_1)...}$
    $s(1 + G(s)) = s \left( 1 + \frac{K'(s+z_1)...}{s(s+p_1)...} \right) = s + \frac{K'(s+z_1)...}{(s+p_1)...}$
    $\lim_{s \to 0} s(1 + G(s)) = 0 + \frac{K'(z_1)...}{(p_1)...} = \frac{K' z_1 ...}{p_1 ...}$
    This is a finite, non-zero value. Let's call it $K_v$.
    $e_{ss} = \frac{A}{K_v}$
    The steady-state error is finite and non-zero.

*   **Type 2 System (N=2):** $G(s) = \frac{K'(s+z_1)...}{s^2(s+p_1)...}$
    $s(1 + G(s)) = s \left( 1 + \frac{K'(s+z_1)...}{s^2(s+p_1)...} \right) = s + \frac{K'(s+z_1)...}{s(s+p_1)...}$
    $\lim_{s \to 0} s(1 + G(s)) = 0 + \lim_{s \to 0} \frac{K'(s+z_1)...}{s(s+p_1)...} = \infty$
    $e_{ss} = \frac{A}{\infty} = 0$
    The steady-state error is zero.

*   **Type 3 or higher (N ≥ 3):**
    $\lim_{s \to 0} s(1 + G(s)) = \infty$
    $e_{ss} = \frac{A}{\infty} = 0$
    The steady-state error is zero.

**Summary for Ramp Input:**
| System Type | $G(0)$ Value | $e_{ss}$ for Unit Ramp Input (A=1) |
| :---------- | :----------- | :----------------------------------- |
| Type 0      | Finite, Non-zero | $\infty$                             |
| Type 1      | $\infty$     | $\frac{1}{\lim_{s \to 0} s G(s)}$    |
| Type 2      | $\infty$     | 0                                    |
| Type 3+     | $\infty$     | 0                                    |

**Case 3: Parabolic Input ($r(t) = \frac{A}{2} t^2 u(t)$ or $R(s) = A/s^3$)**

$e_{ss} = \lim_{s \to 0} s \left( \frac{A/s^3}{1 + G(s)} \right) = \lim_{s \to 0} \frac{A}{s^2(1 + G(s))}$

Let's analyze $G(s)$ again: $G(s) = K \frac{(s+z_1)(s+z_2)...}{(s+p_1)(s+p_2)...s^N}$

*   **Type 0 System (N=0):**
    $\lim_{s \to 0} s^2(1 + G(s)) = 0$
    $e_{ss} = \frac{A}{0} = \infty$
    The steady-state error is infinite.

*   **Type 1 System (N=1):**
    $\lim_{s \to 0} s^2(1 + G(s)) = 0$
    $e_{ss} = \frac{A}{0} = \infty$
    The steady-state error is infinite.

*   **Type 2 System (N=2):** $G(s) = \frac{K'(s+z_1)...}{s^2(s+p_1)...}$
    $s^2(1 + G(s)) = s^2 \left( 1 + \frac{K'(s+z_1)...}{s^2(s+p_1)...} \right) = s^2 + \frac{K'(s+z_1)...}{(s+p_1)...}$
    $\lim_{s \to 0} s^2(1 + G(s)) = 0 + \frac{K'(z_1)...}{(p_1)...}$
    This is a finite, non-zero value. Let's call it $K_a$.
    $e_{ss} = \frac{A}{K_a}$
    The steady-state error is finite and non-zero.

*   **Type 3 or higher (N ≥ 3):**
    $\lim_{s \to 0} s^2(1 + G(s)) = \infty$
    $e_{ss} = \frac{A}{\infty} = 0$
    The steady-state error is zero.

**Summary for Parabolic Input:**
| System Type | $G(0)$ Value | $e_{ss}$ for Unit Parabolic Input (A=1) |
| :---------- | :----------- | :--------------------------------------- |
| Type 0      | Finite, Non-zero | $\infty$                                 |
| Type 1      | $\infty$     | $\infty$                                 |
| Type 2      | $\infty$     | $\frac{1}{\lim_{s \to 0} s^2 G(s)}$      |
| Type 3+     | $\infty$     | 0                                        |

---

### Static Error Constants:

Static error constants are parameters derived from the open-loop transfer function $G(s)H(s)$ that quantify the system's ability to reduce steady-state errors for specific input types. They are defined for systems with at least the required number of integrators.

Let $G(s)H(s)$ be the open-loop transfer function.

1.  **Position Error Constant ($K_p$)**:
    *   **Definition:** Related to the steady-state error for a **step input**.
    *   **Formula:** $K_p = \lim_{s \to 0} G(s)H(s)$
    *   **Relation to $e_{ss}$ for Step Input:**
        If the system is Type 0 ($N=0$), $G(0)H(0) = K_p$ is finite and non-zero.
        $e_{ss} = \frac{A}{1 + K_p}$
        For a **unit step input** ($A=1$), $e_{ss} = \frac{1}{1 + K_p}$.
    *   **System Type Requirement:** Defined for Type 0 or higher systems.
    *   **Interpretation:** A higher $K_p$ leads to a lower steady-state error for a step input. An infinite $K_p$ (for Type 1+) means zero steady-state error for a step input.

2.  **Velocity Error Constant ($K_v$)**:
    *   **Definition:** Related to the steady-state error for a **ramp input**.
    *   **Formula:** $K_v = \lim_{s \to 0} s G(s)H(s)$
    *   **Relation to $e_{ss}$ for Ramp Input:**
        If the system is Type 1 ($N=1$), $\lim_{s \to 0} s G(s)H(s) = K_v$ is finite and non-zero.
        $e_{ss} = \frac{A}{K_v}$
        For a **unit ramp input** ($A=1$), $e_{ss} = \frac{1}{K_v}$.
    *   **System Type Requirement:** Defined for Type 1 or higher systems. For Type 0, $K_v = 0$ and $e_{ss} = \infty$. For Type 2+, $K_v = \infty$ and $e_{ss} = 0$.
    *   **Interpretation:** A higher $K_v$ leads to a lower steady-state error for a ramp input.

3.  **Acceleration Error Constant ($K_a$)**:
    *   **Definition:** Related to the steady-state error for a **parabolic input**.
    *   **Formula:** $K_a = \lim_{s \to 0} s^2 G(s)H(s)$
    *   **Relation to $e_{ss}$ for Parabolic Input:**
        If the system is Type 2 ($N=2$), $\lim_{s \to 0} s^2 G(s)H(s) = K_a$ is finite and non-zero.
        $e_{ss} = \frac{A}{K_a}$
        For a **unit parabolic input** ($A=1$), $e_{ss} = \frac{1}{K_a}$.
    *   **System Type Requirement:** Defined for Type 2 or higher systems. For Type 0 or Type 1, $K_a = 0$ and $e_{ss} = \infty$. For Type 3+, $K_a = \infty$ and $e_{ss} = 0$.
    *   **Interpretation:** A higher $K_a$ leads to a lower steady-state error for a parabolic input.

---

### Summary Table of Steady-State Error and Static Error Constants:

Let $G(s)H(s)$ be the open-loop transfer function.
$K_p = \lim_{s \to 0} G(s)H(s)$
$K_v = \lim_{s \to 0} s G(s)H(s)$
$K_a = \lim_{s \to 0} s^2 G(s)H(s)$

| Input Type     | System Type | $K_p$ Value       | $K_v$ Value       | $K_a$ Value       | Steady State Error ($e_{ss}$) |
| :------------- | :---------- | :---------------- | :---------------- | :---------------- | :---------------------------- |
| **Step** ($A$) | Type 0      | Finite, Non-zero  | 0                 | 0                 | $\frac{A}{1+K_p}$             |
|              | Type 1+     | $\infty$          | $\infty$          | $\infty$          | 0                             |
| **Ramp** ($At$) | Type 0      | Finite, Non-zero  | 0                 | 0                 | $\infty$                      |
|              | Type 1      | $\infty$          | Finite, Non-zero  | 0                 | $\frac{A}{K_v}$               |
|              | Type 2+     | $\infty$          | $\infty$          | $\infty$          | 0                             |
| **Parabolic** ($\frac{A}{2}t^2$) | Type 0      | Finite, Non-zero  | 0                 | 0                 | $\infty$                      |
|              | Type 1      | $\infty$          | Finite, Non-zero  | 0                 | $\infty$                      |
|              | Type 2      | $\infty$          | $\infty$          | Finite, Non-zero  | $\frac{A}{K_a}$               |
|              | Type 3+     | $\infty$          | $\infty$          | $\infty$          | 0                             |

**Important Observation:**
*   A Type 0 system has finite $K_p$, but $K_v = K_a = 0$.
*   A Type 1 system has $K_p = \infty$, finite $K_v$, but $K_a = 0$.
*   A Type 2 system has $K_p = \infty$, $K_v = \infty$, and finite $K_a$.
*   A Type $N$ system has finite $K_p, K_v, K_a$ corresponding to inputs with order up to $N$. For inputs of order higher than $N$, the respective constant will be infinite, leading to zero steady-state error.

---

### Improving Steady State Error:

The primary way to reduce steady-state error is to **increase the system type**. This is typically achieved by adding integrators to the forward path of the control system.

*   **Adding an Integrator:** If a system is Type 0 and exhibits a significant steady-state error for a step input, adding an integrator to the forward path (making it Type 1) will reduce the steady-state error to zero.
*   **Controller Design:** Controllers like Proportional-Integral (PI) controllers introduce an integrator into the system, thus increasing its type and reducing steady-state error.

**Example (Nise, 5th Ed., Chapter 7):**

Consider a unity feedback system with open-loop transfer function:
$G(s) = \frac{10}{s(s+1)}$

This is a **Type 1 system** (one pole at the origin).

Let's analyze the steady-state error for standard inputs:

1.  **Unit Step Input:** $R(s) = 1/s$
    *   Static Error Constants:
        $K_p = \lim_{s \to 0} G(s) = \lim_{s \to 0} \frac{10}{s(s+1)} = \infty$
    *   Steady-State Error:
        $e_{ss} = \frac{1}{1 + K_p} = \frac{1}{1 + \infty} = 0$

2.  **Unit Ramp Input:** $R(s) = 1/s^2$
    *   Static Error Constants:
        $K_v = \lim_{s \to 0} s G(s) = \lim_{s \to 0} s \left( \frac{10}{s(s+1)} \right) = \lim_{s \to 0} \frac{10}{s+1} = 10$
    *   Steady-State Error:
        $e_{ss} = \frac{1}{K_v} = \frac{1}{10} = 0.1$

3.  **Unit Parabolic Input:** $R(s) = 1/s^3$
    *   Static Error Constants:
        $K_a = \lim_{s \to 0} s^2 G(s) = \lim_{s \to 0} s^2 \left( \frac{10}{s(s+1)} \right) = \lim_{s \to 0} \frac{10s}{s+1} = 0$
    *   Steady-State Error:
        Since $K_a = 0$, $e_{ss} = \infty$.

**Conclusion for this example:**
This Type 1 system has zero steady-state error for step inputs, a finite steady-state error of 0.1 for ramp inputs, and infinite steady-state error for parabolic inputs. To achieve zero steady-state error for ramp inputs, the system type needs to be increased to Type 2 by adding another integrator.

---

### Important Points to Remember:

*   **Stability is Paramount:** The Final Value Theorem for calculating steady-state error is only valid if the closed-loop system is stable. Analyze stability first.
*   **Open-Loop Transfer Function is Key:** Steady-state error analysis and static error constants are determined from the **open-loop transfer function** $G(s)H(s)$.
*   **System Type Dictates Behavior:** The number of integrators in the open-loop transfer function (system type) is the primary determinant of steady-state error for different input types.
*   **Static Error Constants Quantify Performance:** $K_p$, $K_v$, and $K_a$ provide specific metrics for steady-state error reduction. Higher values are generally better.
*   **Trade-offs:** While increasing system type improves steady-state error, it can sometimes lead to reduced stability margins or increased transient response overshoot. This highlights the need for a balance in control system design.
*   **Non-unity Feedback:** For non-unity feedback systems, always use the overall open-loop transfer function $G(s)H(s)$ in the error calculations. The error signal is $E(s) = R(s) / (1 + G(s)H(s))$.

---

### Practice Questions/Exercises:

**Question 1:**
A unity feedback control system has an open-loop transfer function $G(s)H(s) = \frac{K}{s+a}$.
Determine the static error constants $K_p$, $K_v$, and $K_a$ for this system.
Calculate the steady-state error for a unit step input, a unit ramp input, and a unit parabolic input.

**Answer 1:**
This is a **Type 0 system** ($N=0$).

*   **Position Error Constant ($K_p$):**
    $K_p = \lim_{s \to 0} G(s)H(s) = \lim_{s \to 0} \frac{K}{s+a} = \frac{K}{a}$
*   **Velocity Error Constant ($K_v$):**
    $K_v = \lim_{s \to 0} s G(s)H(s) = \lim_{s \to 0} s \left( \frac{K}{s+a} \right) = \lim_{s \to 0} \frac{sK}{s+a} = \frac{0 \cdot K}{0+a} = 0$
*   **Acceleration Error Constant ($K_a$):**
    $K_a = \lim_{s \to 0} s^2 G(s)H(s) = \lim_{s \to 0} s^2 \left( \frac{K}{s+a} \right) = \lim_{s \to 0} \frac{s^2 K}{s+a} = \frac{0^2 \cdot K}{0+a} = 0$

**Steady-State Error:**
*   **Unit Step Input ($A=1$):**
    $e_{ss} = \frac{1}{1 + K_p} = \frac{1}{1 + \frac{K}{a}} = \frac{a}{a+K}$
*   **Unit Ramp Input ($A=1$):**
    Since $K_v = 0$, $e_{ss} = \infty$.
*   **Unit Parabolic Input ($A=1$):**
    Since $K_a = 0$, $e_{ss} = \infty$.

---

**Question 2:**
Consider a unity feedback system with the open-loop transfer function $G(s)H(s) = \frac{20(s+1)}{s^2(s+5)}$.
Is this system stable in the closed loop? (Assume for now that $1+G(s)H(s)$ has stable roots).
Calculate the static error constants $K_p$, $K_v$, and $K_a$.
Determine the steady-state error for a step input of magnitude 5 and a ramp input of magnitude 3.

**Answer 2:**
This is a **Type 2 system** ($N=2$) because there are two poles at the origin in $G(s)H(s)$.

*   **Static Error Constants:**
    *   **Position Error Constant ($K_p$):**
        $K_p = \lim_{s \to 0} G(s)H(s) = \lim_{s \to 0} \frac{20(s+1)}{s^2(s+5)} = \frac{20(1)}{0^2(5)} = \infty$
    *   **Velocity Error Constant ($K_v$):**
        $K_v = \lim_{s \to 0} s G(s)H(s) = \lim_{s \to 0} s \left( \frac{20(s+1)}{s^2(s+5)} \right) = \lim_{s \to 0} \frac{20(s+1)}{s(s+5)} = \frac{20(1)}{0(5)} = \infty$
    *   **Acceleration Error Constant ($K_a$):**
        $K_a = \lim_{s \to 0} s^2 G(s)H(s) = \lim_{s \to 0} s^2 \left( \frac{20(s+1)}{s^2(s+5)} \right) = \lim_{s \to 0} \frac{20(s+1)}{s+5} = \frac{20(1)}{5} = 4$

*   **Steady-State Error:**
    *   **Step Input of magnitude 5 ($A=5$):**
        Since $K_p = \infty$ (because it's a Type 2 system), the steady-state error for a step input is 0.
        $e_{ss} = \frac{A}{1+K_p} = \frac{5}{1+\infty} = 0$
    *   **Ramp Input of magnitude 3 ($A=3$):**
        Since $K_v = \infty$ (because it's a Type 2 system), the steady-state error for a ramp input is 0.
        $e_{ss} = \frac{A}{K_v} = \frac{3}{\infty} = 0$

*(Note on stability: The question states to assume stability. In a real scenario, you would need to find the roots of $1 + G(s)H(s) = 0$ or use stability criteria like Routh-Hurwitz.)*

---

**Question 3:**
A system has the following open-loop transfer function: $G(s)H(s) = \frac{10(s+2)}{(s+1)(s+3)}$.
What is the steady-state error for a unit ramp input? What type of system is this? What modification would you suggest to reduce the steady-state error to zero for this input?

**Answer 3:**
This is a **Type 0 system** ($N=0$) as there are no poles at the origin.

*   **Steady-State Error for Unit Ramp Input:**
    For a Type 0 system and a ramp input, the steady-state error is always infinite.
    Let's verify with $K_v$:
    $K_v = \lim_{s \to 0} s G(s)H(s) = \lim_{s \to 0} s \left( \frac{10(s+2)}{(s+1)(s+3)} \right) = \frac{0 \cdot 10(2)}{(1)(3)} = 0$.
    $e_{ss} = \frac{A}{K_v} = \frac{1}{0} = \infty$.

*   **Modification to reduce steady-state error to zero:**
    To achieve zero steady-state error for a ramp input, the system needs to be at least Type 1. This can be done by introducing an integrator in the forward path. For example, we could change the system to have $G'(s)H(s) = \frac{10(s+2)}{s(s+1)(s+3)}$. This new system is Type 1, and its $K_v$ would be finite and non-zero, resulting in zero steady-state error for ramp inputs.

---

This concludes the study notes for steady-state error analysis and static error constants. These concepts are fundamental to understanding and improving the tracking performance of control systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
