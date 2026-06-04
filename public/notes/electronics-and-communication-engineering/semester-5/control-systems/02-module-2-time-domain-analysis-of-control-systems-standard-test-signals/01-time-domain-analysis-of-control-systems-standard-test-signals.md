---
title: "Time Domain Analysis of Control Systems:  Standard Test signals"
subject: "CONTROL SYSTEMS"
module: "Module 2: Time Domain Analysis of Control Systems:  Standard Test signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe950"
status: "completed"
scrapedAt: "2026-05-23T17:54:38.211Z"
---
# CONTROL SYSTEMS: Module 2 - Time Domain Analysis of Control Systems: Standard Test Signals

## Module Introduction

This module delves into the crucial aspect of **Time Domain Analysis** of control systems. Understanding how a system responds to various inputs over time is fundamental to evaluating its performance, stability, and overall effectiveness. We will focus on the behavior of systems when subjected to **standard test signals**, which are commonly used to excite and characterize control system dynamics. This analysis helps us determine key performance metrics like transient response and steady-state error, aligning with **Course Outcome CO2: Perform time domain analysis and steady state analysis of systems (Knowledge Level: K2)**.

## 2.1 Introduction to Time Domain Analysis

Time domain analysis involves examining the system's output signal as a function of time when a specific input signal is applied. This approach directly addresses how the system behaves in real-world scenarios where inputs are rarely instantaneous and often change over time.

*   **Key Concept:** The time response of a control system is the output of the system as a function of time.
*   **Importance:**
    *   Provides a direct measure of system performance.
    *   Helps in understanding transient behavior (how the system settles down).
    *   Crucial for evaluating steady-state error (the difference between the desired and actual output as time approaches infinity).
    *   Essential for designing controllers to meet specific performance requirements.
*   **Reference:** This foundational concept is discussed extensively in **Chapter 4 of "Automatic Control Systems" by Kuo & Golnaraghi** and **Chapter 5 of "Control Systems Engineering" by Nagrath & Gopal**.

## 2.2 Standard Test Signals

Standard test signals are well-defined input signals used to analyze the performance of control systems. They represent common types of inputs encountered in real-world applications and provide a standardized method for comparison.

### 2.2.1 Step Input

A step input is a sudden change in the input signal from one constant level to another, most commonly from 0 to a constant value 'A' at time t=0.

*   **Mathematical Representation:**
    *   $r(t) = A u(t)$
    *   Where:
        *   $r(t)$ is the input signal.
        *   $A$ is the amplitude of the step.
        *   $u(t)$ is the unit step function:
            *   $u(t) = 0$ for $t < 0$
            *   $u(t) = 1$ for $t \ge 0$
*   **Laplace Transform:** $R(s) = \frac{A}{s}$ (For unit step, $A=1$, $R(s) = \frac{1}{s}$)
*   **Typical Application:** Represents sudden changes in demand or position control. For example, turning on a light switch or moving a robotic arm to a new position.
*   **System Response:** The response to a step input (step response) is a crucial indicator of how quickly and smoothly a system can reach and maintain a new steady state.
*   **Reference:** Discussed in **Chapter 4 of "Automatic Control Systems" by Kuo & Golnaraghi** and **Chapter 5 of "Control Systems Engineering" by Nagrath & Gopal**.

### 2.2.2 Ramp Input

A ramp input is a signal that increases linearly with time, starting from zero.

*   **Mathematical Representation:**
    *   $r(t) = At$ for $t \ge 0$
    *   $r(t) = 0$ for $t < 0$
    *   Where $A$ is the slope of the ramp.
*   **Laplace Transform:** $R(s) = \frac{A}{s^2}$ (For unit ramp, $A=1$, $R(s) = \frac{1}{s^2}$)
*   **Typical Application:** Represents inputs that change at a constant velocity, such as tracking a moving target or controlling the speed of a motor.
*   **System Response:** The response to a ramp input indicates the system's ability to track a linearly changing command. The steady-state error for a ramp input is particularly important for velocity-controlled systems.
*   **Reference:** Covered in **Chapter 4 of "Automatic Control Systems" by Kuo & Golnaraghi** and **Chapter 5 of "Control Systems Engineering" by Nagrath & Gopal**.

### 2.2.3 Parabolic Input

A parabolic input is a signal that increases with the square of time.

*   **Mathematical Representation:**
    *   $r(t) = \frac{1}{2}At^2$ for $t \ge 0$
    *   $r(t) = 0$ for $t < 0$
    *   Where $A$ is related to the acceleration.
*   **Laplace Transform:** $R(s) = \frac{A}{s^3}$ (For unit parabolic, $A=1$, $R(s) = \frac{1}{s^3}$)
*   **Typical Application:** Represents inputs with constant acceleration, such as the trajectory of a projectile or the movement of an elevator.
*   **System Response:** The response to a parabolic input is important for systems that experience constant acceleration.
*   **Reference:** Discussed in **Chapter 4 of "Automatic Control Systems" by Kuo & Golnaraghi** and **Chapter 5 of "Control Systems Engineering" by Nagrath & Gopal**.

### 2.2.4 Impulse Input

An impulse input is a signal that has an infinitely large amplitude and an infinitesimally small duration at $t=0$, such that its integral over time is unity. It represents a sudden, instantaneous disturbance or excitation.

*   **Mathematical Representation:**
    *   $r(t) = \delta(t)$
    *   Where $\delta(t)$ is the Dirac delta function:
        *   $\delta(t) = \infty$ for $t = 0$
        *   $\delta(t) = 0$ for $t \ne 0$
        *   $\int_{-\infty}^{\infty} \delta(t) dt = 1$
*   **Laplace Transform:** $R(s) = 1$
*   **Typical Application:** Represents a very short-duration shock or a precise, instantaneous command. The impulse response is also directly related to the system's transfer function.
*   **System Response:** The impulse response is the output of the system when subjected to a unit impulse input. It is identical to the system's impulse response $h(t)$, which is the inverse Laplace transform of the system's transfer function $G(s)$. This means the impulse response completely characterizes the system's dynamics.
*   **Reference:** Covered in **Chapter 4 of "Automatic Control Systems" by Kuo & Golnaraghi** and **Chapter 5 of "Control Systems Engineering" by Nagrath & Gopal**. **Nise's Control Systems Engineering (8th Ed.) Chapter 4** also provides a good overview.

## 2.3 Analyzing System Response to Standard Test Signals

The response of a system to these test signals is analyzed in terms of various time-domain specifications. These specifications help quantify the system's performance.

### 2.3.1 Transient Response Specifications

These describe the system's behavior before it settles down to its steady-state value. They are particularly relevant for second-order systems.

*   **Delay Time ($t_d$):** The time required for the response to reach 50% of its final value.
*   **Rise Time ($t_r$):** The time required for the response to rise from 10% to 90% of its final value.
*   **Peak Time ($t_p$):** The time required for the response to reach its first peak.
*   **Maximum Overshoot ($M_p$):** The maximum deviation of the response from its final value, expressed as a percentage of the final value.
    *   $M_p = \frac{y_{peak} - y_{final}}{y_{final}} \times 100\%$
*   **Settling Time ($t_s$):** The time required for the response to reach and stay within a specified tolerance band (usually 2% or 5%) of its final value.

**Important Note:** These transient specifications are most commonly discussed and derived for **second-order systems** because their behavior is generalizable and they form the basis for approximating higher-order systems.

### 2.3.2 Steady-State Response Specifications

This describes the system's behavior as time approaches infinity.

*   **Steady-State Error ($e_{ss}$):** The difference between the desired output and the actual output as time approaches infinity.
    *   $e_{ss} = \lim_{t \to \infty} (r(t) - y(t))$

This is a critical parameter for evaluating system accuracy.

## 2.4 Transfer Function Approach to Time Domain Analysis

The transfer function of a system, represented as $G(s)$, is a powerful tool for analyzing its time-domain response. By taking the Laplace transform of the input signal $R(s)$ and multiplying it by the transfer function $G(s)$, we get the Laplace transform of the output signal $Y(s)$:

$Y(s) = G(s) R(s)$

To find the time-domain output $y(t)$, we perform the inverse Laplace transform of $Y(s)$. This often involves partial fraction expansion.

*   **Example:** Consider a unity feedback system with an open-loop transfer function $G(s) = \frac{10}{s(s+2)}$. Let's analyze its response to a unit step input.
    *   Input: Unit step, $r(t) = u(t)$, so $R(s) = \frac{1}{s}$.
    *   Closed-loop Transfer Function: $T(s) = \frac{G(s)}{1 + G(s)} = \frac{\frac{10}{s(s+2)}}{1 + \frac{10}{s(s+2)}} = \frac{10}{s(s+2) + 10} = \frac{10}{s^2 + 2s + 10}$
    *   Output in Laplace domain: $Y(s) = T(s)R(s) = \frac{10}{s^2 + 2s + 10} \times \frac{1}{s} = \frac{10}{s(s^2 + 2s + 10)}$
    *   To find $y(t)$, we would perform a partial fraction expansion and then take the inverse Laplace transform. This process allows us to obtain the time-domain output, from which we can extract transient and steady-state characteristics.

*   **Alignment with CO1:** This process directly uses the transfer function approach to analyze the system's behavior, fulfilling **Course Outcome CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)**.

## 2.5 Steady-State Error Analysis

The steady-state error is a crucial performance metric, especially for step and ramp inputs. It indicates how well the system can track the desired input in the long run.

*   **Final Value Theorem:** The steady-state error can be calculated directly using the Laplace domain expression for the error signal $E(s)$:
    *   $e_{ss} = \lim_{t \to \infty} e(t) = \lim_{s \to 0} sE(s)$
*   **Error Signal in a Unity Feedback System:** $E(s) = R(s) - Y(s) = R(s) - G(s)E(s)$
    *   $E(s) = \frac{1}{1 + G(s)} R(s)$
*   **Steady-State Error for Different Input Types:**
    *   **Step Input ($R(s) = \frac{1}{s}$):**
        *   $e_{ss} = \lim_{s \to 0} s \left( \frac{1}{1 + G(s)} \frac{1}{s} \right) = \lim_{s \to 0} \frac{1}{1 + G(s)}$
        *   This limit depends on the **position error constant** $K_p = \lim_{s \to 0} G(s)$.
        *   $e_{ss} = \frac{1}{1 + K_p}$
    *   **Ramp Input ($R(s) = \frac{A}{s^2}$):**
        *   $e_{ss} = \lim_{s \to 0} s \left( \frac{1}{1 + G(s)} \frac{A}{s^2} \right) = \lim_{s \to 0} \frac{A}{s(1 + G(s))} = \frac{A}{\lim_{s \to 0} sG(s)}$
        *   This limit depends on the **velocity error constant** $K_v = \lim_{s \to 0} sG(s)$.
        *   $e_{ss} = \frac{A}{K_v}$
    *   **Parabolic Input ($R(s) = \frac{A}{s^3}$):**
        *   $e_{ss} = \lim_{s \to 0} s \left( \frac{1}{1 + G(s)} \frac{A}{s^3} \right) = \lim_{s \to 0} \frac{A}{s^2(1 + G(s))} = \frac{A}{\lim_{s \to 0} s^2G(s)}$
        *   This limit depends on the **acceleration error constant** $K_a = \lim_{s \to 0} s^2G(s)$.
        *   $e_{ss} = \frac{A}{K_a}$

*   **System Type:** The number of pure integrators (poles at the origin) in the open-loop transfer function $G(s)$ determines the **type of the system**.
    *   **Type 0 System:** $G(s)$ has no poles at $s=0$.
        *   $K_p$ is finite and non-zero.
        *   $K_v = 0$, $K_a = 0$.
        *   $e_{ss}$ for step input is finite and non-zero.
        *   $e_{ss}$ for ramp and parabolic inputs is infinite.
    *   **Type 1 System:** $G(s)$ has one pole at $s=0$.
        *   $K_p = \infty$.
        *   $K_v$ is finite and non-zero.
        *   $K_a = 0$.
        *   $e_{ss}$ for step input is zero.
        *   $e_{ss}$ for ramp input is finite and non-zero.
        *   $e_{ss}$ for parabolic input is infinite.
    *   **Type 2 System:** $G(s)$ has two poles at $s=0$.
        *   $K_p = \infty$, $K_v = \infty$.
        *   $K_a$ is finite and non-zero.
        *   $e_{ss}$ for step input is zero.
        *   $e_{ss}$ for ramp input is zero.
        *   $e_{ss}$ for parabolic input is finite and non-zero.

*   **Reference:** This analysis is a cornerstone of time-domain analysis, thoroughly covered in **Chapter 5 of "Control Systems Engineering" by Nagrath & Gopal** and **Chapter 6 of "Modern Control Engineering" by Ogata**.

## 2.6 Key Concepts and Definitions Summary

*   **Time Domain Analysis:** Evaluating system behavior as a function of time.
*   **Standard Test Signals:** Step, Ramp, Parabolic, Impulse – used for system characterization.
*   **Transient Response:** How a system behaves before settling (rise time, peak time, overshoot, settling time).
*   **Steady-State Response:** How a system behaves as time approaches infinity (steady-state error).
*   **Transfer Function:** A mathematical model relating the Laplace transform of the output to the Laplace transform of the input.
*   **Steady-State Error Constants:** $K_p$ (Position), $K_v$ (Velocity), $K_a$ (Acceleration) – define steady-state error for different inputs.
*   **System Type:** Determined by the number of integrators in the open-loop transfer function, directly influencing steady-state error.

## 2.7 Important Points to Remember

*   The **impulse response** of a system completely characterizes its dynamics.
*   **Second-order systems** are fundamental in understanding transient response specifications as they provide a general behavior that can be extended to higher-order systems.
*   **System type** is a critical factor in determining steady-state error. Higher system types generally lead to lower (or zero) steady-state errors for specific input types.
*   The **Final Value Theorem** is a powerful tool for directly calculating steady-state error without needing to compute the inverse Laplace transform.
*   A Type 0 system has a finite steady-state error for a step input but an infinite error for ramp and parabolic inputs.
*   A Type 1 system has zero steady-state error for a step input, a finite error for a ramp input, and an infinite error for a parabolic input.
*   A Type 2 system has zero steady-state error for both step and ramp inputs, and a finite error for a parabolic input.
*   Understanding the trade-offs between transient response (e.g., speed vs. overshoot) and steady-state error is vital for control system design.

## 2.8 Practice Questions and Exercises

**Question 1:**
A unity feedback system has an open-loop transfer function $G(s) = \frac{20}{s(s+5)}$. Determine the steady-state error for a unit step input and a unit ramp input.

**Answer 1:**
*   For a unit step input ($R(s) = \frac{1}{s}$):
    *   The system is Type 1 ($G(s)$ has one pole at $s=0$).
    *   $K_p = \lim_{s \to 0} G(s) = \lim_{s \to 0} \frac{20}{s(s+5)} = \infty$
    *   $e_{ss\_step} = \frac{1}{1 + K_p} = \frac{1}{1 + \infty} = 0$
*   For a unit ramp input ($R(s) = \frac{1}{s^2}$):
    *   $K_v = \lim_{s \to 0} sG(s) = \lim_{s \to 0} s \frac{20}{s(s+5)} = \lim_{s \to 0} \frac{20}{s+5} = \frac{20}{5} = 4$
    *   $e_{ss\_ramp} = \frac{A}{K_v} = \frac{1}{4} = 0.25$

**Question 2:**
Consider a system with transfer function $G(s) = \frac{10}{s^2 + 2s + 10}$. What is the nature of the input that would result in a finite, non-zero steady-state error? Briefly explain why.

**Answer 2:**
The system $G(s) = \frac{10}{s^2 + 2s + 10}$ is a Type 0 system because it has no poles at the origin ($s=0$).
*   For a **step input** ($R(s) = \frac{1}{s}$), the steady-state error is $e_{ss\_step} = \frac{1}{1 + K_p}$.
    *   $K_p = \lim_{s \to 0} G(s) = \lim_{s \to 0} \frac{10}{s^2 + 2s + 10} = \frac{10}{10} = 1$.
    *   $e_{ss\_step} = \frac{1}{1 + 1} = 0.5$. This is a finite, non-zero error.
*   For a **ramp input** ($R(s) = \frac{A}{s^2}$), $K_v = \lim_{s \to 0} sG(s) = \lim_{s \to 0} s \frac{10}{s^2 + 2s + 10} = 0$.
    *   $e_{ss\_ramp} = \frac{A}{K_v} = \frac{A}{0} = \infty$.
*   For a **parabolic input** ($R(s) = \frac{A}{s^3}$), $K_a = \lim_{s \to 0} s^2G(s) = \lim_{s \to 0} s^2 \frac{10}{s^2 + 2s + 10} = 0$.
    *   $e_{ss\_parabolic} = \frac{A}{K_a} = \frac{A}{0} = \infty$.

Therefore, a **step input** to this Type 0 system will result in a finite, non-zero steady-state error.

**Question 3:**
What is the significance of the impulse response $h(t)$ of a Linear Time-Invariant (LTI) system?

**Answer 3:**
The impulse response $h(t)$ of an LTI system is the output of the system when the input is a unit impulse $\delta(t)$. Crucially, the impulse response completely characterizes the system. This means that if you know $h(t)$, you can determine the system's response to *any* arbitrary input signal. The output $y(t)$ for any input $r(t)$ can be found using the convolution integral: $y(t) = r(t) * h(t) = \int_{0}^{t} r(\tau)h(t-\tau)d\tau$. In the Laplace domain, this is simply $Y(s) = R(s)H(s)$, where $H(s)$ is the system's transfer function.

## 2.9 Alignment with Course Outcomes

This module directly contributes to:

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3):** We learn how to use $G(s)$ to predict time-domain behavior.
*   **CO2: Perform time domain analysis and steady state analysis of systems (Knowledge Level: K2):** This module is the core of this outcome, focusing on interpreting system responses and calculating steady-state errors for standard inputs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 2.10 Further Reading

For a deeper understanding of these concepts, refer to:

*   **Chapter 5: Time Domain Analysis** in "Control Systems Engineering" by I.J. Nagrath and M. Gopal.
*   **Chapter 4: Transient Response Analysis** and **Chapter 6: Steady-State Error Analysis** in "Automatic Control Systems" by Benjamin C. Kuo and Farid Golnaraghi.
*   **Chapter 5: Time Domain Analysis** and **Chapter 6: Steady-State Error** in "Modern Control Engineering" by Katsuhiko Ogata.
*   **Chapter 4: Transient Response Analysis** in "Nise's Control Systems Engineering" by Norman S. Nise.

This concludes Module 2's coverage of Standard Test Signals in Time Domain Analysis. The ability to analyze system responses to these signals is foundational for further control system design and evaluation.