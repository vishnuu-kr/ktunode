---
title: "Error analysis: Steady state error analysis - static error coefficients of type 0,1,2 systems."
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 4: Time domain analysis of control systems: Time domain specifications"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446367e"
status: "completed"
scrapedAt: "2026-05-20T18:00:46.200Z"
---
# Module 4: Time Domain Analysis of Control Systems: Time Domain Specifications

## Topic: Error Analysis: Steady State Error Analysis - Static Error Coefficients of Type 0, 1, 2 Systems

### 1. Introduction to Error Analysis in Control Systems

**What is Error?**

In a closed-loop control system, the **error signal** is the difference between the desired input signal (reference input) and the actual output signal (or a signal proportional to the output). It is the driving force for the controller to adjust its output to minimize the discrepancy between the desired and actual output.

**Importance of Error Analysis:**

*   **Performance Evaluation:** The error signal is a crucial indicator of the system's performance. A smaller error generally implies a more accurate and effective system.
*   **System Design:** Understanding error behavior helps in designing controllers that can achieve desired accuracy levels.
*   **Troubleshooting:** Analyzing error patterns can help identify potential problems in the system, such as sensor inaccuracies, actuator limitations, or external disturbances.

**Types of Errors:**

*   **Transient Error:** The error that exists during the transition period from the initial state to the steady state. It depends on the transient response characteristics (e.g., rise time, settling time).
*   **Steady-State Error:** The error that persists as time approaches infinity. Ideally, for most control systems, the steady-state error should be zero.

This module focuses on **Steady-State Error Analysis**, which is a fundamental aspect of time-domain analysis.

*(Referenced from: Nise N.S., "Control Systems Engineering", 6/e, Chapter 4; Ogata K., "Modern Control Engineering", 5/e, Chapter 5)*

### 2. Steady-State Error Analysis

The steady-state error is the difference between the input and output of the system as time $t \to \infty$. It is a measure of how well the system can track a reference input in the long run.

**Definition:**

$$e_{ss} = \lim_{t \to \infty} e(t)$$

where $e(t)$ is the error signal.

**Methods for Calculating Steady-State Error:**

The steady-state error can be calculated using the **Final Value Theorem** from Laplace Transforms. For a stable system, if the Laplace transform of the error signal is $E(s)$, then:

$$e_{ss} = \lim_{s \to 0} sE(s)$$

For a typical unity feedback system, the error signal is related to the reference input $R(s)$ and the system's transfer function $G(s)$ as follows:

$$E(s) = \frac{R(s)}{1 + G(s)}$$

Therefore, the steady-state error is:

$$e_{ss} = \lim_{s \to 0} s \frac{R(s)}{1 + G(s)}$$

*(Referenced from: Nise N.S., "Control Systems Engineering", 6/e, Chapter 4; Ogata K., "Modern Control Engineering", 5/e, Chapter 5)*

### 3. Static Error Coefficients

Static error coefficients are constants that characterize the steady-state error of a system for specific types of inputs (step, ramp, parabolic). They provide a direct measure of the system's steady-state error performance. The values of these coefficients depend on the **system type**, which is determined by the number of pure integrators in the **open-loop transfer function**.

**System Type:**

The **type of a system** is defined as the number of open-loop poles at the origin of the s-plane. This is equivalent to the number of pure integrators in the open-loop transfer function.

Let the open-loop transfer function of a system be $G(s)H(s)$. The system type is determined by the power of $s$ in the denominator of $G(s)H(s)$ when it is expressed in the form:

$$G(s)H(s) = \frac{K \prod_{i=1}^{m} (s+z_i)}{s^N \prod_{j=1}^{p} (s+p_j)}$$

where:
*   $K$ is the open-loop gain.
*   $z_i$ are the zeros of the open-loop transfer function.
*   $p_j$ are the non-zero poles of the open-loop transfer function.
*   $N$ is the system type.

**Input Signals:**

We will analyze the steady-state error for three standard test input signals:

1.  **Step Input:** $r(t) = A u(t) \implies R(s) = \frac{A}{s}$
2.  **Ramp Input:** $r(t) = At u(t) \implies R(s) = \frac{A}{s^2}$
3.  **Parabolic Input:** $r(t) = \frac{1}{2}At^2 u(t) \implies R(s) = \frac{A}{s^3}$

*(Referenced from: Nise N.S., "Control Systems Engineering", 6/e, Chapter 4; Ogata K., "Modern Control Engineering", 5/e, Chapter 5)*

### 4. Static Error Coefficients for Different System Types

We will consider a **unity feedback system**, where $H(s) = 1$. The open-loop transfer function is $G(s)$.

The general formula for steady-state error is:

$$e_{ss} = \lim_{s \to 0} s \frac{R(s)}{1 + G(s)}$$

Let's analyze for each system type (N = 0, 1, 2).

---

#### 4.1 Type 0 System (N = 0)

For a Type 0 system, the open-loop transfer function $G(s)$ does not have any poles at the origin.

$$G(s) = \frac{K \prod (s+z_i)}{\prod (s+p_j)}, \quad \text{where } p_j \neq 0$$

The term $G(0) = \frac{K \prod z_i}{\prod p_j}$ is finite and non-zero.

**a) Step Input ($R(s) = A/s$)**

$$e_{ss} = \lim_{s \to 0} s \frac{A/s}{1 + G(s)} = \lim_{s \to 0} \frac{A}{1 + G(s)} = \frac{A}{1 + G(0)}$$

*   **Static Position Error Coefficient ($K_p$)**:

    $$K_p = \lim_{s \to 0} G(s) = G(0)$$

*   **Steady-State Error for Step Input**:

    $$e_{ss} = \frac{A}{1 + K_p}$$

    If $K_p$ is finite, the steady-state error for a step input is finite.
    *   If $K_p \to \infty$, $e_{ss} \to 0$.
    *   If $K_p$ is finite, $e_{ss}$ is finite.
    *   If $K_p = 0$, $e_{ss} \to A$.

**b) Ramp Input ($R(s) = A/s^2$)**

$$e_{ss} = \lim_{s \to 0} s \frac{A/s^2}{1 + G(s)} = \lim_{s \to 0} \frac{A/s}{1 + G(s)}$$

Since $G(0)$ is finite and non-zero, as $s \to 0$, $G(s)$ approaches a finite non-zero value. The term $A/s$ in the numerator approaches infinity.

$$e_{ss} = \lim_{s \to 0} \frac{A}{s(1 + G(s))} = \infty$$

*   **Static Velocity Error Coefficient ($K_v$)**:

    $$K_v = \lim_{s \to 0} sG(s)$$

    For a Type 0 system, $K_v = 0 \times G(0) = 0$.

*   **Steady-State Error for Ramp Input**:

    $$e_{ss} = \frac{A}{K_v} = \frac{A}{0} = \infty$$

    The system cannot track a ramp input.

**c) Parabolic Input ($R(s) = A/s^3$)**

$$e_{ss} = \lim_{s \to 0} s \frac{A/s^3}{1 + G(s)} = \lim_{s \to 0} \frac{A/s^2}{1 + G(s)}$$

As $s \to 0$, $G(s) \to G(0)$ (finite non-zero). The term $A/s^2$ in the numerator approaches infinity.

$$e_{ss} = \lim_{s \to 0} \frac{A}{s^2(1 + G(s))} = \infty$$

*   **Static Acceleration Error Coefficient ($K_a$)**:

    $$K_a = \lim_{s \to 0} s^2G(s)$$

    For a Type 0 system, $K_a = 0^2 \times G(0) = 0$.

*   **Steady-State Error for Parabolic Input**:

    $$e_{ss} = \frac{A}{K_a} = \frac{A}{0} = \infty$$

    The system cannot track a parabolic input.

**Summary for Type 0 System:**

| Input Signal    | $R(s)$      | Static Error Coefficient | Value for Type 0 System | Steady-State Error ($e_{ss}$) | Interpretation                                  |
| :-------------- | :---------- | :----------------------- | :------------------------ | :---------------------------- | :---------------------------------------------- |
| Step ($A$)      | $A/s$       | $K_p = \lim_{s \to 0} G(s)$   | Finite & Non-zero ($G(0)$) | $A / (1 + K_p)$               | Finite error if $K_p$ is finite.              |
| Ramp ($At$)     | $A/s^2$     | $K_v = \lim_{s \to 0} sG(s)$  | $0$                       | $\infty$                      | System cannot track ramp input.               |
| Parabolic ($At^2/2$) | $A/s^3$     | $K_a = \lim_{s \to 0} s^2G(s)$ | $0$                       | $\infty$                      | System cannot track parabolic input.          |

*(Referenced from: Nise N.S., "Control Systems Engineering", 6/e, Chapter 4; Ogata K., "Modern Control Engineering", 5/e, Chapter 5)*

---

#### 4.2 Type 1 System (N = 1)

For a Type 1 system, the open-loop transfer function $G(s)$ has exactly one pole at the origin.

$$G(s) = \frac{K \prod (s+z_i)}{s \prod (s+p_j)}, \quad \text{where } p_j \neq 0$$

The term $\lim_{s \to 0} G(s) = 0$.
The term $\lim_{s \to 0} sG(s)$ is finite and non-zero.

**a) Step Input ($R(s) = A/s$)**

$$e_{ss} = \lim_{s \to 0} s \frac{A/s}{1 + G(s)} = \lim_{s \to 0} \frac{A}{1 + G(s)} = \frac{A}{1 + G(0)}$$

Since $G(0) = 0$ for a Type 1 system:

$$e_{ss} = \frac{A}{1 + 0} = A$$

*   **Static Position Error Coefficient ($K_p$)**:

    $$K_p = \lim_{s \to 0} G(s) = 0$$

*   **Steady-State Error for Step Input**:

    $$e_{ss} = \frac{A}{1 + K_p} = \frac{A}{1 + 0} = A$$

    The system has a finite, non-zero steady-state error for a step input. This means the output will lag the input by a constant amount.

**b) Ramp Input ($R(s) = A/s^2$)**

$$e_{ss} = \lim_{s \to 0} s \frac{A/s^2}{1 + G(s)} = \lim_{s \to 0} \frac{A/s}{1 + G(s)}$$

As $s \to 0$, $G(s) \to 0$. So, $1 + G(s) \to 1$.

$$e_{ss} = \lim_{s \to 0} \frac{A}{s} = \infty$$

Let's look at the velocity error coefficient:

*   **Static Velocity Error Coefficient ($K_v$)**:

    $$K_v = \lim_{s \to 0} sG(s)$$

    For a Type 1 system:
    $$K_v = \lim_{s \to 0} s \left( \frac{K \prod (s+z_i)}{s \prod (s+p_j)} \right) = \frac{K \prod z_i}{\prod p_j}$$
    This value is finite and non-zero.

*   **Steady-State Error for Ramp Input**:

    $$e_{ss} = \frac{A}{K_v}$$

    If $K_v$ is finite and non-zero, the steady-state error for a ramp input is finite.
    *   If $K_v \to \infty$, $e_{ss} \to 0$.
    *   If $K_v$ is finite, $e_{ss}$ is finite.
    *   If $K_v = 0$, $e_{ss} \to \infty$.

**c) Parabolic Input ($R(s) = A/s^3$)**

$$e_{ss} = \lim_{s \to 0} s \frac{A/s^3}{1 + G(s)} = \lim_{s \to 0} \frac{A/s^2}{1 + G(s)}$$

As $s \to 0$, $G(s) \to 0$. So, $1 + G(s) \to 1$.

$$e_{ss} = \lim_{s \to 0} \frac{A}{s^2} = \infty$$

*   **Static Acceleration Error Coefficient ($K_a$)**:

    $$K_a = \lim_{s \to 0} s^2G(s)$$

    For a Type 1 system:
    $$K_a = \lim_{s \to 0} s^2 \left( \frac{K \prod (s+z_i)}{s \prod (s+p_j)} \right) = \lim_{s \to 0} s \frac{K \prod (s+z_i)}{\prod (s+p_j)}$$
    Since $s \to 0$, $K_a = 0 \times \frac{K \prod z_i}{\prod p_j} = 0$.

*   **Steady-State Error for Parabolic Input**:

    $$e_{ss} = \frac{A}{K_a} = \frac{A}{0} = \infty$$

    The system cannot track a parabolic input.

**Summary for Type 1 System:**

| Input Signal    | $R(s)$      | Static Error Coefficient | Value for Type 1 System | Steady-State Error ($e_{ss}$) | Interpretation                                      |
| :-------------- | :---------- | :----------------------- | :------------------------ | :---------------------------- | :-------------------------------------------------- |
| Step ($A$)      | $A/s$       | $K_p = \lim_{s \to 0} G(s)$   | $0$                       | $A$                           | Finite, non-zero error (output lags input).     |
| Ramp ($At$)     | $A/s^2$     | $K_v = \lim_{s \to 0} sG(s)$  | Finite & Non-zero         | $A / K_v$                     | Finite error if $K_v$ is finite.                  |
| Parabolic ($At^2/2$) | $A/s^3$     | $K_a = \lim_{s \to 0} s^2G(s)$ | $0$                       | $\infty$                      | System cannot track parabolic input.              |

*(Referenced from: Nise N.S., "Control Systems Engineering", 6/e, Chapter 4; Ogata K., "Modern Control Engineering", 5/e, Chapter 5)*

---

#### 4.3 Type 2 System (N = 2)

For a Type 2 system, the open-loop transfer function $G(s)$ has exactly two poles at the origin.

$$G(s) = \frac{K \prod (s+z_i)}{s^2 \prod (s+p_j)}, \quad \text{where } p_j \neq 0$$

The terms $\lim_{s \to 0} G(s) = \infty$ and $\lim_{s \to 0} sG(s) = 0$.
The term $\lim_{s \to 0} s^2G(s)$ is finite and non-zero.

**a) Step Input ($R(s) = A/s$)**

$$e_{ss} = \lim_{s \to 0} s \frac{A/s}{1 + G(s)} = \lim_{s \to 0} \frac{A}{1 + G(s)}$$

Since $G(0) \to \infty$ for a Type 2 system:

$$e_{ss} = \frac{A}{1 + \infty} = 0$$

*   **Static Position Error Coefficient ($K_p$)**:

    $$K_p = \lim_{s \to 0} G(s) = \infty$$

*   **Steady-State Error for Step Input**:

    $$e_{ss} = \frac{A}{1 + K_p} = \frac{A}{1 + \infty} = 0$$

    The system has zero steady-state error for a step input, meaning it can track a step input perfectly in the steady state.

**b) Ramp Input ($R(s) = A/s^2$)**

$$e_{ss} = \lim_{s \to 0} s \frac{A/s^2}{1 + G(s)} = \lim_{s \to 0} \frac{A/s}{1 + G(s)}$$

As $s \to 0$, $G(s) \to \infty$. So, $1 + G(s) \to \infty$.

$$e_{ss} = \lim_{s \to 0} \frac{A/s}{\infty} = 0$$

Let's look at the velocity error coefficient:

*   **Static Velocity Error Coefficient ($K_v$)**:

    $$K_v = \lim_{s \to 0} sG(s)$$

    For a Type 2 system:
    $$K_v = \lim_{s \to 0} s \left( \frac{K \prod (s+z_i)}{s^2 \prod (s+p_j)} \right) = \lim_{s \to 0} \frac{K \prod (s+z_i)}{s \prod (s+p_j)}$$
    Since the denominator has an 's' term, $K_v = \infty$.

*   **Steady-State Error for Ramp Input**:

    $$e_{ss} = \frac{A}{K_v} = \frac{A}{\infty} = 0$$

    The system has zero steady-state error for a ramp input. It can track a ramp input perfectly in the steady state.

**c) Parabolic Input ($R(s) = A/s^3$)**

$$e_{ss} = \lim_{s \to 0} s \frac{A/s^3}{1 + G(s)} = \lim_{s \to 0} \frac{A/s^2}{1 + G(s)}$$

As $s \to 0$, $G(s) \to \infty$. So, $1 + G(s) \to \infty$.

$$e_{ss} = \lim_{s \to 0} \frac{A/s^2}{\infty} = 0$$

*   **Static Acceleration Error Coefficient ($K_a$)**:

    $$K_a = \lim_{s \to 0} s^2G(s)$$

    For a Type 2 system:
    $$K_a = \lim_{s \to 0} s^2 \left( \frac{K \prod (s+z_i)}{s^2 \prod (s+p_j)} \right) = \frac{K \prod z_i}{\prod p_j}$$
    This value is finite and non-zero.

*   **Steady-State Error for Parabolic Input**:

    $$e_{ss} = \frac{A}{K_a}$$

    If $K_a$ is finite and non-zero, the steady-state error for a parabolic input is finite.
    *   If $K_a \to \infty$, $e_{ss} \to 0$.
    *   If $K_a$ is finite, $e_{ss}$ is finite.
    *   If $K_a = 0$, $e_{ss} \to \infty$.

**Summary for Type 2 System:**

| Input Signal    | $R(s)$      | Static Error Coefficient | Value for Type 2 System | Steady-State Error ($e_{ss}$) | Interpretation                                             |
| :-------------- | :---------- | :----------------------- | :------------------------ | :---------------------------- | :--------------------------------------------------------- |
| Step ($A$)      | $A/s$       | $K_p = \lim_{s \to 0} G(s)$   | $\infty$                  | $0$                           | Perfect tracking of step input.                            |
| Ramp ($At$)     | $A/s^2$     | $K_v = \lim_{s \to 0} sG(s)$  | $\infty$                  | $0$                           | Perfect tracking of ramp input.                            |
| Parabolic ($At^2/2$) | $A/s^3$     | $K_a = \lim_{s \to 0} s^2G(s)$ | Finite & Non-zero         | $A / K_a$                     | Finite error if $K_a$ is finite.                           |

*(Referenced from: Nise N.S., "Control Systems Engineering", 6/e, Chapter 4; Ogata K., "Modern Control Engineering", 5/e, Chapter 5)*

---

### 5. Generalized Steady-State Error Formula

For any system, the steady-state error for a given input $R(s)$ can be calculated as:

$$e_{ss} = \lim_{s \to 0} \frac{s R(s)}{1 + G(s)}$$

If the system is stable, we can use the static error coefficients:

*   **For Step Input ($R(s) = A/s$)**: $e_{ss} = \frac{A}{1 + K_p}$
*   **For Ramp Input ($R(s) = A/s^2$)**: $e_{ss} = \frac{A}{K_v}$
*   **For Parabolic Input ($R(s) = A/s^3$)**: $e_{ss} = \frac{A}{K_a}$

**Important Relationship between System Type and Steady-State Error:**

*   **Type 0 System:**
    *   Step Input: Finite Error
    *   Ramp Input: Infinite Error
    *   Parabolic Input: Infinite Error

*   **Type 1 System:**
    *   Step Input: Zero Error
    *   Ramp Input: Finite Error
    *   Parabolic Input: Infinite Error

*   **Type 2 System:**
    *   Step Input: Zero Error
    *   Ramp Input: Zero Error
    *   Parabolic Input: Finite Error

**Generalization for Higher Order Inputs or System Types:**

For a system of Type N and an input of the form $R(s) = A/s^{k+1}$, the steady-state error is:

$$e_{ss} = \lim_{s \to 0} s \frac{A/s^{k+1}}{1 + G(s)} = \lim_{s \to 0} \frac{A}{s^k(1 + G(s))}$$

The static error coefficient corresponding to this input is $K_k = \lim_{s \to 0} s^k G(s)$.

*   If $k < N$, then $K_k \to \infty$, so $e_{ss} \to 0$. The system can track this input perfectly.
*   If $k = N$, then $K_k$ is finite and non-zero, so $e_{ss} = A/K_k$ (finite error).
*   If $k > N$, then $K_k = 0$, so $e_{ss} \to \infty$. The system cannot track this input.

This generalized view clearly shows how the system type dictates its ability to track inputs of increasing complexity.

*(Referenced from: Nise N.S., "Control Systems Engineering", 6/e, Chapter 4; Ogata K., "Modern Control Engineering", 5/e, Chapter 5; Doebelin E.O., "Measurement Systems: Applications and Design", 1990, Chapter 11)*

### 6. Impact of Disturbances and Setpoint Changes

The analysis above assumed no disturbances. In practice, external disturbances can affect the system output. For a unity feedback system, a disturbance $D(s)$ entering at the output can be modeled as:

The closed-loop transfer function from disturbance to output is $Y(s)/D(s) = -G(s)/(1 + G(s))$.
The steady-state error due to a disturbance can be analyzed similarly. If a disturbance is a step input, $d(t) = D_0 u(t)$, then the steady-state output due to disturbance is $y_{d,ss} = -D_0 G(0)/(1+G(0))$. For Type 1 or higher systems, $G(0) = \infty$, so $y_{d,ss} = 0$. This indicates that integrators in the forward path are effective in rejecting constant disturbances.

*(Referenced from: Nise N.S., "Control Systems Engineering", 6/e, Chapter 4)*

### 7. Practical Considerations and Examples

**Example 1: Type 0 System**

Consider a unity feedback system with the open-loop transfer function:
$$G(s) = \frac{10}{s+2}$$

This is a Type 0 system ($N=0$).
The open-loop gain is $K = 10$.

*   **Static Error Coefficients:**
    *   $K_p = \lim_{s \to 0} G(s) = \frac{10}{0+2} = 5$
    *   $K_v = \lim_{s \to 0} sG(s) = \lim_{s \to 0} \frac{10s}{s+2} = 0$
    *   $K_a = \lim_{s \to 0} s^2G(s) = \lim_{s \to 0} \frac{10s^2}{s+2} = 0$

*   **Steady-State Error Analysis:**
    *   **Step Input ($A=1$):** $e_{ss} = \frac{A}{1+K_p} = \frac{1}{1+5} = \frac{1}{6}$. The output will lag the input by $1/6$ unit.
    *   **Ramp Input ($A=1$):** $e_{ss} = \frac{A}{K_v} = \frac{1}{0} = \infty$. The system cannot track a ramp input.
    *   **Parabolic Input ($A=1$):** $e_{ss} = \frac{A}{K_a} = \frac{1}{0} = \infty$. The system cannot track a parabolic input.

*(This example demonstrates the properties of a Type 0 system.)*

**Example 2: Type 1 System**

Consider a unity feedback system with the open-loop transfer function:
$$G(s) = \frac{10}{s(s+2)}$$

This is a Type 1 system ($N=1$).
The open-loop gain is $K = 10$.

*   **Static Error Coefficients:**
    *   $K_p = \lim_{s \to 0} G(s) = \lim_{s \to 0} \frac{10}{s(s+2)} = \infty$
    *   $K_v = \lim_{s \to 0} sG(s) = \lim_{s \to 0} s \frac{10}{s(s+2)} = \frac{10}{0+2} = 5$
    *   $K_a = \lim_{s \to 0} s^2G(s) = \lim_{s \to 0} s^2 \frac{10}{s(s+2)} = \lim_{s \to 0} \frac{10s}{s+2} = 0$

*   **Steady-State Error Analysis:**
    *   **Step Input ($A=1$):** $e_{ss} = \frac{A}{1+K_p} = \frac{1}{1+\infty} = 0$. The system perfectly tracks a step input.
    *   **Ramp Input ($A=1$):** $e_{ss} = \frac{A}{K_v} = \frac{1}{5} = 0.2$. The output will lag the input by $0.2$ units.
    *   **Parabolic Input ($A=1$):** $e_{ss} = \frac{A}{K_a} = \frac{1}{0} = \infty$. The system cannot track a parabolic input.

*(This example highlights the improved tracking capabilities of a Type 1 system compared to a Type 0 system.)*

**Example 3: Type 2 System**

Consider a unity feedback system with the open-loop transfer function:
$$G(s) = \frac{10}{s^2(s+2)}$$

This is a Type 2 system ($N=2$).
The open-loop gain is $K = 10$.

*   **Static Error Coefficients:**
    *   $K_p = \lim_{s \to 0} G(s) = \lim_{s \to 0} \frac{10}{s^2(s+2)} = \infty$
    *   $K_v = \lim_{s \to 0} sG(s) = \lim_{s \to 0} s \frac{10}{s^2(s+2)} = \lim_{s \to 0} \frac{10}{s(s+2)} = \infty$
    *   $K_a = \lim_{s \to 0} s^2G(s) = \lim_{s \to 0} s^2 \frac{10}{s^2(s+2)} = \frac{10}{0+2} = 5$

*   **Steady-State Error Analysis:**
    *   **Step Input ($A=1$):** $e_{ss} = \frac{A}{1+K_p} = \frac{1}{1+\infty} = 0$. Perfect tracking.
    *   **Ramp Input ($A=1$):** $e_{ss} = \frac{A}{K_v} = \frac{1}{\infty} = 0$. Perfect tracking.
    *   **Parabolic Input ($A=1$):** $e_{ss} = \frac{A}{K_a} = \frac{1}{5} = 0.2$. The output will lag the input by $0.2$ units.

*(This example shows that Type 2 systems offer even better steady-state tracking performance.)*

*(Referenced from: Nise N.S., "Control Systems Engineering", 6/e, Chapter 4; Ogata K., "Modern Control Engineering", 5/e, Chapter 5)*

### 8. Summary Table of Static Error Coefficients

| System Type | $K_p = \lim_{s \to 0} G(s)$ | $K_v = \lim_{s \to 0} sG(s)$ | $K_a = \lim_{s \to 0} s^2G(s)$ |
| :---------- | :-------------------------- | :-------------------------- | :-------------------------- |
| Type 0      | Finite & Non-zero           | $0$                         | $0$                         |
| Type 1      | $\infty$                    | Finite & Non-zero           | $0$                         |
| Type 2      | $\infty$                    | $\infty$                    | Finite & Non-zero           |
| Type N      | $\infty$ (for N>0)          | $\infty$ (for N>1)          | $\infty$ (for N>2)          |

### 9. Practice Questions

**Question 1:**
For a unity feedback system with open-loop transfer function $G(s) = \frac{5(s+2)}{s(s+1)(s+3)}$, determine the steady-state error for a unit step input and a unit ramp input. Identify the system type.

**Answer 1:**
1.  **System Type:** The open-loop transfer function has one pole at the origin ($s$). Thus, it is a **Type 1** system.
2.  **Static Error Coefficients:**
    *   $K_p = \lim_{s \to 0} G(s) = \lim_{s \to 0} \frac{5(s+2)}{s(s+1)(s+3)} = \frac{5(2)}{0(1)(3)} = \infty$
    *   $K_v = \lim_{s \to 0} sG(s) = \lim_{s \to 0} s \frac{5(s+2)}{s(s+1)(s+3)} = \lim_{s \to 0} \frac{5(s+2)}{(s+1)(s+3)} = \frac{5(2)}{(1)(3)} = \frac{10}{3}$
    *   $K_a = \lim_{s \to 0} s^2G(s) = \lim_{s \to 0} s^2 \frac{5(s+2)}{s(s+1)(s+3)} = \lim_{s \to 0} \frac{5s(s+2)}{(s+1)(s+3)} = \frac{5(0)(2)}{(1)(3)} = 0$
3.  **Steady-State Error:**
    *   For a unit step input ($A=1$): $e_{ss} = \frac{A}{1+K_p} = \frac{1}{1+\infty} = 0$.
    *   For a unit ramp input ($A=1$): $e_{ss} = \frac{A}{K_v} = \frac{1}{10/3} = \frac{3}{10} = 0.3$.

**Question 2:**
A system has the open-loop transfer function $G(s)H(s) = \frac{20}{(s+1)(s+5)}$. What is the steady-state error for a parabolic input of magnitude 2, i.e., $r(t) = 2 \frac{t^2}{2} u(t)$? Assume unity feedback.

**Answer 2:**
1.  **System Type:** The open-loop transfer function has no poles at the origin. Thus, it is a **Type 0** system.
2.  **Static Error Coefficients:**
    *   $K_p = \lim_{s \to 0} G(s)H(s) = \lim_{s \to 0} \frac{20}{(s+1)(s+5)} = \frac{20}{(1)(5)} = 4$
    *   $K_v = \lim_{s \to 0} sG(s)H(s) = \lim_{s \to 0} s \frac{20}{(s+1)(s+5)} = 0$
    *   $K_a = \lim_{s \to 0} s^2G(s)H(s) = \lim_{s \to 0} s^2 \frac{20}{(s+1)(s+5)} = 0$
3.  **Steady-State Error for Parabolic Input:** The input is $r(t) = t^2 u(t)$, which corresponds to $A=2$ in the standard form $A t^2/2 u(t)$. The Laplace transform is $R(s) = \frac{2}{s^3}$.
    The steady-state error is given by $e_{ss} = \frac{A}{K_a}$.
    $e_{ss} = \frac{2}{0} = \infty$.
    The system cannot track a parabolic input.

**Question 3:**
A unity feedback control system has an open-loop transfer function $G(s) = \frac{k}{(s+a)(s+b)}$. What should be the value of $k$ to ensure zero steady-state error for a ramp input?

**Answer 3:**
1.  **System Type:** The open-loop transfer function has no poles at the origin. This is a **Type 0** system.
2.  **Steady-State Error for Ramp Input:** For a Type 0 system, the steady-state error for a ramp input is always infinite, regardless of the gain $k$ or pole locations $a, b$ (as long as they are stable, i.e., $a, b > 0$).
    $K_v = \lim_{s \to 0} sG(s) = \lim_{s \to 0} s \frac{k}{(s+a)(s+b)} = 0$.
    $e_{ss} = A/K_v = A/0 = \infty$.
    **Conclusion:** It is impossible to achieve zero steady-state error for a ramp input with a Type 0 system. To track a ramp input with zero steady-state error, the system needs at least one integrator, making it a Type 1 system.

### 10. Key Points to Remember

*   **Steady-state error ($e_{ss}$)** is the difference between the input and output as $t \to \infty$.
*   **System type** is determined by the number of pure integrators in the open-loop transfer function.
*   **Static error coefficients ($K_p, K_v, K_a$)** quantify the system's steady-state error performance for step, ramp, and parabolic inputs, respectively.
*   For a **unity feedback system**:
    *   $K_p = \lim_{s \to 0} G(s)$
    *   $K_v = \lim_{s \to 0} sG(s)$
    *   $K_a = \lim_{s \to 0} s^2G(s)$
*   **Steady-state error formulas**:
    *   Step Input ($A$): $e_{ss} = A / (1 + K_p)$
    *   Ramp Input ($A$): $e_{ss} = A / K_v$
    *   Parabolic Input ($A$): $e_{ss} = A / K_a$
*   **Key relationships between system type and error**:
    *   Type 0: Finite error for step, infinite for ramp/parabolic.
    *   Type 1: Zero error for step, finite error for ramp, infinite for parabolic.
    *   Type 2: Zero error for step/ramp, finite error for parabolic.
*   The presence of **integrators in the forward path** is crucial for reducing steady-state error.

### 11. Alignment with Course Outcomes

*   **CO1 (K2):** This module provides foundational knowledge about the error in control systems, which is a basic element in understanding system behavior.
*   **CO2 (K4):** While not directly about sensors/transducers, understanding error analysis is vital for evaluating the performance of measurement systems that form part of a control loop.
*   **CO3 (K4):** Signal conditioning circuits (amplifiers, filters) influence the system's transfer function, which in turn affects steady-state error. This knowledge is essential for designing effective measurement systems.
*   **CO4 (K3):** Analyzing steady-state error helps describe the role of controller components (like integrators) in achieving desired output accuracy, a key aspect of control blocks.
*   **CO5 (K4):** Steady-state error is a primary time-domain specification. Analyzing it directly contributes to assessing system performance and applying techniques for improvement.
*   **CO6 (K4):** While stability is a separate topic, the ability of a system to reach a steady state depends on its stability. This analysis assumes system stability.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 12. References

*   **Nise N.S., "Control Systems Engineering", 6/e (Wiley Eastern):** Chapter 4 on Time Response provides detailed coverage of steady-state error analysis and static error coefficients.
*   **Ogata K., "Modern Control Engineering", 5/e (Prentice Hall of India):** Chapter 5 also covers transient and steady-state response, including the calculation of steady-state error.
*   **Doebelin E.O., "Measurement Systems: Applications and Design", 1990 (McGraw-Hill):** Chapter 11 discusses dynamic response and error analysis, relating it to measurement system performance.
*   **Krishnaswamy K., "Industrial Instrumentation", 2003 (New Age International Publishers):** Provides context for how instrumentation systems are part of feedback loops where error analysis is critical.
*   **Patranabis D., "Principles of Industrial Instrumentation", 3rd Edition, 2017 (McGraw-Hill Education):** Offers insights into how instrumentation contributes to control and the importance of minimizing errors.

---