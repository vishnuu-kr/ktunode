---
title: "Steady state error and static error coefficients."
subject: "CONTROL SYSTEMS"
module: "Module 2: Time Domain Analysis of Control Systems:  Standard Test signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe954"
status: "completed"
scrapedAt: "2026-05-23T17:54:41.034Z"
---
# Control Systems: Module 2 - Time Domain Analysis of Control Systems: Standard Test Signals

## Topic: Steady-State Error and Static Error Coefficients

This topic focuses on understanding how well a control system performs in the long run (steady-state) and how different system configurations affect this performance. We will explore the concept of steady-state error and introduce static error coefficients as a measure of this error for different types of inputs.

### Learning Outcomes Covered:

*   **Analyze the performance of a closed-loop control system in the time domain.** (Directly related to understanding steady-state error)
*   **Evaluate the steady-state error of a system for standard test inputs.** (Core focus of this topic)
*   **Relate the system's type and input signal to the steady-state error.** (Key concept covered through static error coefficients)

### Course Outcomes Alignment:

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)**
    *   We will use the open-loop transfer function to derive the steady-state error and static error coefficients, requiring an understanding of transfer functions.
*   **CO2: Perform time domain analysis and steady state analysis of systems (Knowledge Level: K2)**
    *   This entire topic is dedicated to steady-state analysis and its implications in the time domain.

---

### 1. Introduction to Steady-State Error

The **steady-state error ($e_{ss}$)** is the difference between the desired output (or reference input) and the actual output as time approaches infinity. It represents the system's ability to accurately track a reference input in the long run.

*   **Definition:** $e_{ss} = \lim_{t \to \infty} e(t) = \lim_{t \to \infty} (r(t) - c(t))$, where $r(t)$ is the reference input and $c(t)$ is the system output.
*   **Ideal System:** An ideal control system should have zero steady-state error for all types of inputs.
*   **Practical Systems:** In practice, most control systems exhibit some non-zero steady-state error, especially for certain types of inputs. This error is often a compromise between performance (e.g., speed of response) and accuracy.

**How to calculate steady-state error?**

We use the **Final Value Theorem** from Laplace transforms, provided that all poles of $sE(s)$ lie in the left-half of the s-plane.
$e_{ss} = \lim_{s \to 0} sE(s)$

Where $E(s)$ is the Laplace transform of the error signal $e(t)$.
For a typical unity feedback system, the error signal is given by:
$E(s) = \frac{R(s)}{1 + G(s)H(s)}$

Therefore,
$e_{ss} = \lim_{s \to 0} s \frac{R(s)}{1 + G(s)H(s)}$

*   **Key Insight:** The steady-state error depends on the nature of the **reference input $R(s)$** and the **open-loop transfer function $G(s)H(s)$**.

---

### 2. Types of Control Systems and Steady-State Error

The steady-state error is significantly influenced by the number of **integrators** in the **open-loop transfer function** $G(s)H(s)$. The number of integrators determines the **type** of the system.

Let the open-loop transfer function be $G(s)H(s) = \frac{K \prod_{i=1}^{m}(s+z_i)}{s^N \prod_{j=1}^{n}(s+p_j)}$.
Here, $N$ is the number of poles at the origin, which defines the system type.

**System Types:**

*   **Type 0 System:** $N=0$. The open-loop transfer function has no poles at the origin. $G(s)H(s)$ does not contain $s$ in the denominator.
*   **Type 1 System:** $N=1$. The open-loop transfer function has one pole at the origin. $G(s)H(s)$ contains a single $s$ term in the denominator.
*   **Type 2 System:** $N=2$. The open-loop transfer function has two poles at the origin. $G(s)H(s)$ contains an $s^2$ term in the denominator.
*   And so on for Type 3, Type 4, etc.

---

### 3. Static Error Coefficients

Static error coefficients are parameters that quantify the steady-state error for specific standard test signals (step, ramp, parabolic). They are defined based on the open-loop transfer function.

Let the open-loop transfer function of a unity feedback system be $G(s)$. The closed-loop transfer function is $\frac{C(s)}{R(s)} = \frac{G(s)}{1+G(s)}$.
The error signal is $E(s) = R(s) - C(s) = R(s) - \frac{G(s)}{1+G(s)} R(s) = \frac{R(s)}{1+G(s)}$.

#### 3.1. Step Input (Position Error Coefficient)

*   **Reference Input:** Unit Step function, $r(t) = u(t)$.
*   **Laplace Transform:** $R(s) = \frac{1}{s}$.
*   **Steady-State Error Calculation:**
    $e_{ss} = \lim_{s \to 0} s E(s) = \lim_{s \to 0} s \frac{R(s)}{1+G(s)} = \lim_{s \to 0} s \frac{1/s}{1+G(s)} = \lim_{s \to 0} \frac{1}{1+G(s)}$

*   **Position Error Coefficient ($K_p$):**
    $K_p = \lim_{s \to 0} G(s)$

*   **Relation to Steady-State Error:**
    $e_{ss} = \frac{1}{1+K_p}$

*   **Analysis based on System Type (for Unity Feedback):**
    *   **Type 0 System:** $G(s) = \frac{K \prod (s+z_i)}{\prod (s+p_j)}$ (no poles at origin).
        $K_p = \lim_{s \to 0} G(s) = K'$ (a finite non-zero constant).
        $e_{ss} = \frac{1}{1+K_p}$ (non-zero, finite). The system has a constant steady-state error.
    *   **Type 1 System:** $G(s) = \frac{K \prod (s+z_i)}{s \prod (s+p_j)}$.
        $K_p = \lim_{s \to 0} G(s) = \infty$.
        $e_{ss} = \frac{1}{1+\infty} = 0$. The steady-state error is zero for a step input.
    *   **Type 2 and higher Systems:** $K_p = \infty$.
        $e_{ss} = 0$. The steady-state error is zero for a step input.

**Important Point:** For a step input, the system type must be at least 1 to achieve zero steady-state error.

#### 3.2. Ramp Input (Velocity Error Coefficient)

*   **Reference Input:** Unit Ramp function, $r(t) = tu(t)$.
*   **Laplace Transform:** $R(s) = \frac{1}{s^2}$.
*   **Steady-State Error Calculation:**
    $e_{ss} = \lim_{s \to 0} s E(s) = \lim_{s \to 0} s \frac{R(s)}{1+G(s)} = \lim_{s \to 0} s \frac{1/s^2}{1+G(s)} = \lim_{s \to 0} \frac{1}{s(1+G(s))}$

*   **Velocity Error Coefficient ($K_v$):**
    $K_v = \lim_{s \to 0} sG(s)$

*   **Relation to Steady-State Error:**
    $e_{ss} = \frac{1}{K_v}$

*   **Analysis based on System Type (for Unity Feedback):**
    *   **Type 0 System:** $G(s) = \frac{K \prod (s+z_i)}{\prod (s+p_j)}$.
        $K_v = \lim_{s \to 0} sG(s) = 0$.
        $e_{ss} = \frac{1}{0} = \infty$. The system cannot track a ramp input.
    *   **Type 1 System:** $G(s) = \frac{K \prod (s+z_i)}{s \prod (s+p_j)}$.
        $K_v = \lim_{s \to 0} s \frac{K \prod (s+z_i)}{s \prod (s+p_j)} = \frac{K \prod z_i}{\prod p_j} = K''$ (a finite non-zero constant).
        $e_{ss} = \frac{1}{K_v}$ (non-zero, finite). The system has a constant steady-state error, representing a constant difference in velocity.
    *   **Type 2 System:** $G(s) = \frac{K \prod (s+z_i)}{s^2 \prod (s+p_j)}$.
        $K_v = \lim_{s \to 0} sG(s) = \infty$.
        $e_{ss} = \frac{1}{\infty} = 0$. The steady-state error is zero for a ramp input.
    *   **Type 3 and higher Systems:** $K_v = \infty$.
        $e_{ss} = 0$. The steady-state error is zero for a ramp input.

**Important Point:** For a ramp input, the system type must be at least 2 to achieve zero steady-state error.

#### 3.3. Parabolic Input (Acceleration Error Coefficient)

*   **Reference Input:** Unit Parabolic function, $r(t) = \frac{1}{2}t^2 u(t)$.
*   **Laplace Transform:** $R(s) = \frac{1}{s^3}$.
*   **Steady-State Error Calculation:**
    $e_{ss} = \lim_{s \to 0} s E(s) = \lim_{s \to 0} s \frac{R(s)}{1+G(s)} = \lim_{s \to 0} s \frac{1/s^3}{1+G(s)} = \lim_{s \to 0} \frac{1}{s^2(1+G(s))}$

*   **Acceleration Error Coefficient ($K_a$):**
    $K_a = \lim_{s \to 0} s^2 G(s)$

*   **Relation to Steady-State Error:**
    $e_{ss} = \frac{1}{K_a}$

*   **Analysis based on System Type (for Unity Feedback):**
    *   **Type 0 System:** $K_a = \lim_{s \to 0} s^2 G(s) = 0$.
        $e_{ss} = \frac{1}{0} = \infty$. The system cannot track a parabolic input.
    *   **Type 1 System:** $K_a = \lim_{s \to 0} s^2 \frac{K \prod (s+z_i)}{s \prod (s+p_j)} = 0$.
        $e_{ss} = \frac{1}{0} = \infty$. The system cannot track a parabolic input.
    *   **Type 2 System:** $G(s) = \frac{K \prod (s+z_i)}{s^2 \prod (s+p_j)}$.
        $K_a = \lim_{s \to 0} s^2 \frac{K \prod (s+z_i)}{s^2 \prod (s+p_j)} = \frac{K \prod z_i}{\prod p_j} = K'''$ (a finite non-zero constant).
        $e_{ss} = \frac{1}{K_a}$ (non-zero, finite). The system has a constant steady-state error.
    *   **Type 3 System:** $K_a = \lim_{s \to 0} s^2 G(s) = \infty$.
        $e_{ss} = \frac{1}{\infty} = 0$. The steady-state error is zero for a parabolic input.
    *   **Type 4 and higher Systems:** $K_a = \infty$.
        $e_{ss} = 0$. The steady-state error is zero for a parabolic input.

**Important Point:** For a parabolic input, the system type must be at least 3 to achieve zero steady-state error.

---

### 4. Summary Table of Steady-State Error for Unity Feedback Systems

| Input Signal ($r(t)$) | $R(s)$   | System Type | $K_p$                     | $K_v$                      | $K_a$                       | $e_{ss}$ (Step)         | $e_{ss}$ (Ramp)   | $e_{ss}$ (Parabolic) |
| :-------------------- | :------- | :---------- | :------------------------ | :------------------------- | :-------------------------- | :---------------------- | :---------------- | :------------------- |
| Unit Step ($u(t)$)    | $1/s$    | 0           | Finite, non-zero ($K_p$)  | 0                          | 0                           | $1/(1+K_p)$             | $\infty$          | $\infty$             |
|                       |          | $\geq 1$    | $\infty$                  | 0                          | 0                           | 0                       | $\infty$          | $\infty$             |
| Unit Ramp ($tu(t)$)   | $1/s^2$  | 0           | Finite, non-zero ($K_p$)  | 0                          | 0                           | $1/(1+K_p)$             | $\infty$          | $\infty$             |
|                       |          | 1           | $\infty$                  | Finite, non-zero ($K_v$)   | 0                           | 0                       | $1/K_v$           | $\infty$             |
|                       |          | $\geq 2$    | $\infty$                  | $\infty$                   | 0                           | 0                       | 0                 | $\infty$             |
| Unit Parabolic ($\frac{1}{2}t^2 u(t)$) | $1/s^3$ | 0, 1        | Finite, non-zero ($K_p$)  | 0                          | 0                           | $1/(1+K_p)$             | $\infty$          | $\infty$             |
|                       |          | 2           | $\infty$                  | Finite, non-zero ($K_v$)   | Finite, non-zero ($K_a$)    | 0                       | $1/K_v$           | $1/K_a$              |
|                       |          | $\geq 3$    | $\infty$                  | $\infty$                   | Finite, non-zero ($K_a$)    | 0                       | 0                 | $1/K_a$              |

**Note:** The static error coefficients ($K_p, K_v, K_a$) are defined for the specific input type for which they are relevant. For example, $K_p$ is defined using $\lim_{s \to 0} G(s)$, $K_v$ using $\lim_{s \to 0} sG(s)$, and $K_a$ using $\lim_{s \to 0} s^2 G(s)$. The values of these limits depend on the system type.

---

### 5. Non-Unity Feedback Systems

For a system with a feedback transfer function $H(s)$, the error signal is:
$E(s) = R(s) - C(s) = R(s) - G(s)E(s)H(s) = R(s) - G(s)H(s)E(s)$
$E(s) = \frac{R(s)}{1 + G(s)H(s)}$

The steady-state error is calculated as:
$e_{ss} = \lim_{s \to 0} sE(s) = \lim_{s \to 0} s \frac{R(s)}{1 + G(s)H(s)}$

The static error coefficients are defined as:
*   **Position Error Coefficient ($K_p$):** $K_p = \lim_{s \to 0} G(s)H(s)$
*   **Velocity Error Coefficient ($K_v$):** $K_v = \lim_{s \to 0} s G(s)H(s)$
*   **Acceleration Error Coefficient ($K_a$):** $K_a = \lim_{s \to 0} s^2 G(s)H(s)$

The interpretation of system type and its effect on steady-state error remains the same, but it's now based on the number of poles at the origin in the **open-loop transfer function $G(s)H(s)$**.

---

### 6. Significance of Steady-State Error and Static Error Coefficients

*   **Performance Metric:** Steady-state error is a crucial metric for evaluating the **accuracy** of a control system. A lower steady-state error indicates better tracking performance.
*   **Design Guidance:** Static error coefficients provide a way to characterize and improve system accuracy. By increasing the system type (adding integrators) or increasing the gain $K$ in the open-loop transfer function, we can reduce the steady-state error for specific inputs.
*   **Trade-offs:** While reducing steady-state error is desirable, increasing the system type or gain can sometimes lead to other undesirable effects, such as reduced stability margins or slower transient response. These are trade-offs that must be considered during system design.
    *   **Adding integrators** generally improves steady-state accuracy but can reduce system stability margins and increase the order of the system, potentially leading to more complex dynamics.
    *   **Increasing gain** can reduce steady-state error but can also lead to instability if the system is already operating close to its stability limits.

---

### 7. Examples

**Example 1: Unity Feedback System**

Consider a unity feedback system with the open-loop transfer function:
$G(s) = \frac{10}{s(s+1)}$

This is a **Type 1** system (due to the 's' in the denominator).

Let's analyze the steady-state error for different inputs:

*   **Unit Step Input ($r(t) = u(t), R(s) = 1/s$):**
    *   $K_p = \lim_{s \to 0} G(s) = \lim_{s \to 0} \frac{10}{s(s+1)} = \infty$
    *   $e_{ss} = \frac{1}{1+K_p} = \frac{1}{1+\infty} = 0$.
    *   *Conclusion: Zero steady-state error for a step input.*

*   **Unit Ramp Input ($r(t) = tu(t), R(s) = 1/s^2$):**
    *   $K_v = \lim_{s \to 0} sG(s) = \lim_{s \to 0} s \frac{10}{s(s+1)} = \lim_{s \to 0} \frac{10}{s+1} = 10$
    *   $e_{ss} = \frac{1}{K_v} = \frac{1}{10} = 0.1$.
    *   *Conclusion: A finite steady-state error of 0.1 for a ramp input.*

*   **Unit Parabolic Input ($r(t) = \frac{1}{2}t^2 u(t), R(s) = 1/s^3$):**
    *   $K_a = \lim_{s \to 0} s^2 G(s) = \lim_{s \to 0} s^2 \frac{10}{s(s+1)} = \lim_{s \to 0} \frac{10s}{s+1} = 0$
    *   $e_{ss} = \frac{1}{K_a} = \frac{1}{0} = \infty$.
    *   *Conclusion: Infinite steady-state error for a parabolic input.*

**Example 2: Type 0 System Modification**

Consider a Type 0 system with $G(s) = \frac{K}{s+a}$. Let's say $K=5, a=2$, so $G(s) = \frac{5}{s+2}$.

*   **Unit Step Input:**
    *   $K_p = \lim_{s \to 0} \frac{5}{s+2} = \frac{5}{2} = 2.5$
    *   $e_{ss} = \frac{1}{1+K_p} = \frac{1}{1+2.5} = \frac{1}{3.5} \approx 0.286$

Now, let's add an integrator to make it Type 1: $G(s) = \frac{K}{s(s+a)}$. Let $K=10, a=2$, so $G(s) = \frac{10}{s(s+2)}$.

*   **Unit Step Input (Type 1 system):**
    *   $K_p = \lim_{s \to 0} \frac{10}{s(s+2)} = \infty$
    *   $e_{ss} = \frac{1}{1+K_p} = 0$.
    *   *Observation: Adding an integrator eliminated the steady-state error for the step input.*

*   **Unit Ramp Input (Type 1 system):**
    *   $K_v = \lim_{s \to 0} s \frac{10}{s(s+2)} = \lim_{s \to 0} \frac{10}{s+2} = 5$
    *   $e_{ss} = \frac{1}{K_v} = \frac{1}{5} = 0.2$.
    *   *Conclusion: The Type 1 system now tracks the ramp with a finite error.*

---

### 8. Practice Questions

**Question 1:**
For a unity feedback system with the open-loop transfer function $G(s) = \frac{20(s+1)}{s^2(s+5)}$, what is the steady-state error for a unit ramp input?
(a) 0
(b) 1/5
(c) 1/4
(d) $\infty$

**Question 2:**
A system has an open-loop transfer function $G(s)H(s) = \frac{100}{s+10}$. For a unit step input, what is the steady-state error?
(a) 0
(b) 1/11
(c) 1/10
(d) 1/101

**Question 3:**
Which static error coefficient is relevant for determining the steady-state error of a system when subjected to a parabolic input?
(a) Position Error Coefficient ($K_p$)
(b) Velocity Error Coefficient ($K_v$)
(c) Acceleration Error Coefficient ($K_a$)
(d) None of the above

**Question 4:**
Consider a unity feedback system with $G(s) = \frac{K}{s}$.
(a) Calculate $K_p$, $K_v$, and $K_a$.
(b) Determine the steady-state error for unit step, unit ramp, and unit parabolic inputs.

---

### 9. Answers to Practice Questions

**Answer 1:**
The open-loop transfer function is $G(s) = \frac{20(s+1)}{s^2(s+5)}$. This is a **Type 2** system.
For a unit ramp input, we need to calculate $K_v$.
$K_v = \lim_{s \to 0} sG(s) = \lim_{s \to 0} s \frac{20(s+1)}{s^2(s+5)} = \lim_{s \to 0} \frac{20(s+1)}{s(s+5)}$
As $s \to 0$, the denominator $s(s+5) \to 0$, and the numerator $20(s+1) \to 20$.
Therefore, $K_v = \infty$.
The steady-state error for a ramp input is $e_{ss} = \frac{1}{K_v} = \frac{1}{\infty} = 0$.
**Correct Answer: (a)**

**Answer 2:**
The open-loop transfer function is $G(s)H(s) = \frac{100}{s+10}$. This is a **Type 0** system.
For a unit step input:
$K_p = \lim_{s \to 0} G(s)H(s) = \lim_{s \to 0} \frac{100}{s+10} = \frac{100}{10} = 10$.
The steady-state error is $e_{ss} = \frac{1}{1+K_p} = \frac{1}{1+10} = \frac{1}{11}$.
**Correct Answer: (b)**

**Answer 3:**
The steady-state error for a parabolic input is determined by the **Acceleration Error Coefficient ($K_a$)**.
**Correct Answer: (c)**

**Answer 4:**
Given $G(s) = \frac{K}{s}$ for a unity feedback system. This is a **Type 1** system.

(a) Static Error Coefficients:
*   $K_p = \lim_{s \to 0} G(s) = \lim_{s \to 0} \frac{K}{s} = \infty$
*   $K_v = \lim_{s \to 0} sG(s) = \lim_{s \to 0} s \frac{K}{s} = K$
*   $K_a = \lim_{s \to 0} s^2 G(s) = \lim_{s \to 0} s^2 \frac{K}{s} = \lim_{s \to 0} sK = 0$

(b) Steady-State Error:
*   **Unit Step Input ($R(s) = 1/s$):**
    $e_{ss} = \frac{1}{1+K_p} = \frac{1}{1+\infty} = 0$.
*   **Unit Ramp Input ($R(s) = 1/s^2$):**
    $e_{ss} = \frac{1}{K_v} = \frac{1}{K}$.
*   **Unit Parabolic Input ($R(s) = 1/s^3$):**
    $e_{ss} = \frac{1}{K_a} = \frac{1}{0} = \infty$.

---

### 10. Important Points to Remember

*   **Steady-State Error ($e_{ss}$):** The difference between the desired and actual output as time approaches infinity.
*   **Final Value Theorem:** $e_{ss} = \lim_{t \to \infty} e(t) = \lim_{s \to 0} sE(s)$.
*   **System Type:** Determined by the number of poles of the open-loop transfer function at the origin ($N$).
*   **Static Error Coefficients ($K_p, K_v, K_a$):** Quantify the system's ability to reject specific inputs (step, ramp, parabolic) in the steady state. They are defined as limits of specific forms of the open-loop transfer function.
*   **Relationship between System Type and $e_{ss}$:** Higher system types generally lead to lower steady-state errors for standard inputs.
    *   Type 0: Finite $e_{ss}$ for step, $\infty$ for ramp and parabolic.
    *   Type 1: Zero $e_{ss}$ for step, finite for ramp, $\infty$ for parabolic.
    *   Type 2: Zero $e_{ss}$ for step and ramp, finite for parabolic.
    *   Type $N \ge N_{input}$: Zero $e_{ss}$ for that input.
*   **Non-unity feedback:** The analysis of steady-state error and static error coefficients extends to non-unity feedback systems by considering the product $G(s)H(s)$ as the open-loop transfer function.
*   **Trade-offs:** While improving steady-state accuracy is important, it often comes at the cost of transient response and stability margins.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### References:

*   **Control Systems Engineering** by I.J. Nagarath, M. Gopal (New Age International Publishers, 7th Edition 2022) - Chapters on Time Domain Analysis and Steady-State Error.
*   **Automatic Control Systems** by Benjamin C. Kuo, Farid Golnaraghi, (Wiley, 10th Edition 2017) - Chapters covering transient and steady-state response.
*   **Modern Control Engineering** by Katsuhiko Ogata (Pearson, Fifth Edition 2015) - Chapters on Time Response and Steady-State Error Analysis.
*   **Nise's Control Systems Engineering** by Norman S. Nise (Wiley India, 8th Edition 2017) - Chapters focusing on Time Domain Performance.

This topic provides a fundamental understanding of how well a control system performs in the long run and how the structure of the system (especially the presence of integrators) dictates its accuracy for different types of commands.