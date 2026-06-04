---
title: "Time domain analysis of control systems: Time domain specifications"
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 4: Time domain analysis of control systems: Time domain specifications"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446367c"
status: "completed"
scrapedAt: "2026-05-20T18:00:44.805Z"
---
# Module 4: Time Domain Analysis of Control Systems: Time Domain Specifications

This module focuses on understanding how control systems respond to input signals over time. We will analyze the transient and steady-state behavior of systems and define key performance metrics known as time domain specifications. This knowledge is crucial for designing and evaluating the performance of control systems in various industrial applications.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the concept of time domain analysis for control systems.
*   Define and explain various time domain specifications used to characterize system performance.
*   Relate these specifications to the system's transient and steady-state responses.
*   Analyze the impact of system parameters on these specifications.
*   Apply these specifications to evaluate and compare different control system designs.

## Course Outcomes Alignment

This module directly contributes to the following Course Outcomes:

*   **CO5: To analyse the time domain responses of the linear systems and apply Root locus technique to assess the performance. (Knowledge Level: K4)** - Understanding time domain specifications is fundamental to analyzing system responses and forms the basis for applying techniques like root locus to achieve desired performance.
*   **CO6: Analyse the stability of the given LTI system (Knowledge Level: K4)** - Time domain specifications are often directly linked to stability. For example, overshoot can indicate potential instability, and settling time is a measure of how quickly a system reaches its stable state.

## Introduction to Time Domain Analysis

Time domain analysis involves studying the behavior of a system's output as a function of time when subjected to a specific input. For control systems, this means observing how the system's output signal changes from its initial state to its final steady-state value in response to a standard test input. The most common test input signals are:

*   **Step Input:** A sudden change from zero to a constant value.
*   **Ramp Input:** An input that increases linearly with time.
*   **Impulse Input:** A very short-duration pulse of unit area.
*   **Parabolic Input:** An input that increases quadratically with time.

**(Refer to Nise N.S., Chapter 4 for a detailed discussion on standard test inputs.)**

The response of a linear time-invariant (LTI) control system to these inputs can be broadly categorized into two parts:

1.  **Transient Response:** The part of the response that goes to zero as time becomes large. It describes how the system behaves immediately after the input is applied until it settles down.
2.  **Steady-State Response:** The part of the response that remains after the transient response has decayed. It indicates the system's behavior at the end of the transient period.

## Time Domain Specifications

Time domain specifications are quantitative measures used to describe the performance of a control system based on its transient and steady-state responses to a step input. The step input is widely used because it represents a common scenario in control applications (e.g., suddenly changing a desired setpoint).

For a **second-order system** subjected to a **unit step input**, the typical transient response exhibits the following characteristics:

*   **Rise Time ($T_r$):** The time taken for the response to rise from 10% of its final value to 90% of its final value.
*   **Peak Overshoot ($M_p$):** The maximum value of the response curve measured from the final steady-state value. It indicates how much the response exceeds the desired final value. It is often expressed as a percentage of the final value.
*   **Peak Time ($T_p$):** The time taken to reach the peak overshoot.
*   **Settling Time ($T_s$):** The time taken for the response to settle within a specified tolerance band (usually ±2% or ±5%) of its final steady-state value.

The **steady-state response** is characterized by:

*   **Steady-State Error ($e_{ss}$):** The difference between the desired final value and the actual final value of the output.

Let's delve into each of these specifications in detail.

### 1. Rise Time ($T_r$)

*   **Definition:** The time it takes for the system's output to go from 10% to 90% of its final steady-state value.
*   **Significance:** A shorter rise time indicates a faster response.
*   **For a second-order system:**
    The transfer function of a standard second-order system is given by:
    $$G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$$
    where:
    *   $\omega_n$ is the natural frequency (radians/sec).
    *   $\zeta$ is the damping ratio.

    The rise time $T_r$ is given by:
    $$T_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_d}$$
    where $\omega_d = \omega_n \sqrt{1-\zeta^2}$ is the damped frequency.

    An approximate formula for rise time, valid for $0 < \zeta < 1$, is:
    $$T_r \approx \frac{1.8}{\omega_n}$$

*   **Impact of Parameters:**
    *   Higher $\omega_n$ leads to a faster rise time (smaller $T_r$).
    *   Damping ratio $\zeta$ also affects rise time; as $\zeta$ increases, $T_r$ increases.

### 2. Peak Overshoot ($M_p$)

*   **Definition:** The maximum error between the output and the steady-state value during the transient period. It's usually expressed as a percentage of the steady-state value.
*   **Formula:**
    $$M_p = \frac{y_{peak} - y_{ss}}{y_{ss}} \times 100\%$$
    where $y_{peak}$ is the peak value of the output and $y_{ss}$ is the final steady-state value.
*   **For a second-order system (unit step input):**
    $$M_p = e^{-\frac{\pi\zeta}{\sqrt{1-\zeta^2}}} \times 100\%$$
*   **Significance:** A large overshoot can be undesirable as it may cause actuator saturation or damage to the system. A well-designed system usually has a moderate overshoot.
*   **Impact of Parameters:**
    *   Overshoot is highly sensitive to the damping ratio $\zeta$. As $\zeta$ increases (system becomes more damped), the overshoot decreases.
    *   For $\zeta \ge 1$ (overdamped or critically damped), the overshoot is 0%.

**(Refer to Ogata K, Chapter 6 for detailed derivations and plots of overshoot vs. damping ratio.)**

### 3. Peak Time ($T_p$)

*   **Definition:** The time taken for the response to reach its first peak.
*   **For a second-order system (unit step input):**
    $$T_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}}$$
*   **Significance:** Indicates how quickly the system reaches its peak deviation from the steady-state value.
*   **Impact of Parameters:**
    *   Higher $\omega_n$ leads to a shorter peak time (faster peaking).
    *   As $\zeta$ increases, the peak time increases.

### 4. Settling Time ($T_s$)

*   **Definition:** The time required for the system's response to permanently stay within a specified tolerance band around the steady-state value. Common tolerance bands are ±2% or ±5%.
*   **For a second-order system (unit step input):**
    *   **For 2% tolerance:**
        $$T_s \approx \frac{4}{\zeta\omega_n}$$
    *   **For 5% tolerance:**
        $$T_s \approx \frac{3}{\zeta\omega_n}$$
*   **Significance:** Settling time is a crucial measure of how quickly the system stabilizes. A shorter settling time is generally preferred.
*   **Impact of Parameters:**
    *   Settling time is inversely proportional to the product $\zeta\omega_n$, which is related to the location of the dominant closed-loop poles.
    *   A larger $\zeta\omega_n$ (i.e., poles further to the left in the s-plane) results in a shorter settling time.
    *   Increasing $\zeta$ or $\omega_n$ individually will decrease settling time.

**(Refer to Doebelin E.O., Chapter 10 for discussion on transient response and steady-state error.)**

### 5. Steady-State Error ($e_{ss}$)

*   **Definition:** The difference between the desired final value (reference input) and the actual final value of the output as time approaches infinity.
*   **Formula:**
    $$e_{ss} = \lim_{t \to \infty} (r(t) - c(t))$$
    where $r(t)$ is the reference input and $c(t)$ is the system output.
*   **In the Laplace domain:**
    $$e_{ss} = \lim_{s \to 0} s E(s) = \lim_{s \to 0} s [R(s) - C(s)]$$
    where $E(s) = R(s) - C(s)$ is the Laplace transform of the error signal.
*   **Relation to System Type:** The steady-state error depends on the input signal and the **system type**, which is determined by the number of pure integrators in the **open-loop transfer function**.

    *   **Type 0 System:** Has no pure integrators in the open-loop transfer function.
        *   Step Input: Non-zero $e_{ss}$.
        *   Ramp Input: Infinite $e_{ss}$.
        *   Impulse Input: Non-zero $e_{ss}$.
    *   **Type 1 System:** Has one pure integrator in the open-loop transfer function.
        *   Step Input: Zero $e_{ss}$.
        *   Ramp Input: Non-zero $e_{ss}$.
        *   Impulse Input: Zero $e_{ss}$.
    *   **Type 2 System:** Has two pure integrators in the open-loop transfer function.
        *   Step Input: Zero $e_{ss}$.
        *   Ramp Input: Zero $e_{ss}$.
        *   Impulse Input: Zero $e_{ss}$.

*   **Position, Velocity, and Acceleration Error Coefficients:**
    *   **Position Error Constant ($K_p$):** For a unit step input, $e_{ss} = \frac{1}{1+K_p}$, where $K_p = \lim_{s \to 0} G(s)H(s)$.
    *   **Velocity Error Constant ($K_v$):** For a unit ramp input, $e_{ss} = \frac{1}{K_v}$, where $K_v = \lim_{s \to 0} sG(s)H(s)$.
    *   **Acceleration Error Constant ($K_a$):** For a unit parabolic input, $e_{ss} = \frac{1}{K_a}$, where $K_a = \lim_{s \to 0} s^2G(s)H(s)$.
    *(Note: $G(s)H(s)$ is the open-loop transfer function)*

**(Refer to Varmah K.R., Chapter 5 for a detailed explanation of steady-state error and system types.)**

## Time Domain Specifications for Higher-Order Systems

While the specifications defined above are most rigorously derived for second-order systems, they are also used to characterize the performance of higher-order systems. For higher-order systems, the response might not exhibit a single overshoot and peak time. In such cases, the specifications are interpreted based on the dominant poles of the system, which are the poles closest to the imaginary axis.

**(Refer to Nise N.S., Chapter 4 for discussion on dominant poles and approximating higher-order systems.)**

## Graphical Representation and Trade-offs

The time domain specifications are interconnected and often involve trade-offs. For example:

*   **Speed of Response vs. Overshoot:** To achieve a faster response (smaller $T_r$), $\omega_n$ needs to be increased. However, increasing $\omega_n$ without adjusting $\zeta$ will also increase overshoot. To reduce overshoot, $\zeta$ needs to be increased, which in turn increases the rise time and settling time.
*   **Overshoot vs. Settling Time:** Increasing $\zeta$ reduces overshoot but increases settling time. Conversely, decreasing $\zeta$ reduces settling time but increases overshoot.

A typical acceptable range for damping ratio $\zeta$ for many practical systems is between 0.4 and 0.8.

**(Refer to Krishnaswamy K., Chapter 7 for practical considerations in control system design and trade-offs.)**

## Example 1: Second-Order System Analysis

Consider a unity feedback system with the following open-loop transfer function:
$$G(s) = \frac{16}{s(s+8)}$$

The closed-loop transfer function is:
$$T(s) = \frac{G(s)}{1+G(s)} = \frac{16}{s(s+8) + 16} = \frac{16}{s^2 + 8s + 16}$$

Compare this to the standard second-order form: $\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.

By comparing the denominator, we have:
$\omega_n^2 = 16 \implies \omega_n = 4$ rad/sec
$2\zeta\omega_n = 8 \implies 2\zeta(4) = 8 \implies 8\zeta = 8 \implies \zeta = 1$

Since $\zeta = 1$, this is a critically damped system.

**Calculate time domain specifications:**

*   **Rise Time ($T_r$):** For $\zeta \ge 1$, the system does not have overshoot, so we consider the time to reach 90% of the final value (which is 1 in this case).
    The output response is $c(t) = 1 - e^{-4t} - 4te^{-4t}$.
    We need to find $t$ such that $c(t) = 0.9$.
    $0.9 = 1 - e^{-4t}(1+4t)$
    $e^{-4t}(1+4t) = 0.1$
    By numerical approximation, $t \approx 0.43$ seconds.

    *(Using the approximate formula for $0 < \zeta < 1$, $T_r \approx 1.8/\omega_n = 1.8/4 = 0.45$ sec, which is close.)*

*   **Peak Overshoot ($M_p$):** For $\zeta = 1$, $M_p = 0\%$.
*   **Peak Time ($T_p$):** For $\zeta = 1$, $T_p = 0$ seconds (as there is no overshoot).
*   **Settling Time ($T_s$, 2%):** $T_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{1 \times 4} = 1$ second.
*   **Steady-State Error ($e_{ss}$):** This is a Type 1 system (due to the 's' in the denominator of $G(s)$). For a step input, $e_{ss} = 0$.
    $K_p = \lim_{s \to 0} G(s) = \lim_{s \to 0} \frac{16}{s(s+8)} = \infty$.
    $e_{ss} = \frac{1}{1+K_p} = \frac{1}{1+\infty} = 0$.

## Example 2: Underdamped System

Consider a unity feedback system with the open-loop transfer function:
$$G(s) = \frac{25}{s(s+10)}$$

The closed-loop transfer function is:
$$T(s) = \frac{25}{s(s+10) + 25} = \frac{25}{s^2 + 10s + 25}$$

Comparing to the standard second-order form:
$\omega_n^2 = 25 \implies \omega_n = 5$ rad/sec
$2\zeta\omega_n = 10 \implies 2\zeta(5) = 10 \implies 10\zeta = 10 \implies \zeta = 1$

This is also critically damped. Let's modify the system to be underdamped.

Consider:
$$G(s) = \frac{9}{s(s+6)}$$

Closed-loop transfer function:
$$T(s) = \frac{9}{s(s+6) + 9} = \frac{9}{s^2 + 6s + 9}$$

Comparing to the standard second-order form:
$\omega_n^2 = 9 \implies \omega_n = 3$ rad/sec
$2\zeta\omega_n = 6 \implies 2\zeta(3) = 6 \implies 6\zeta = 6 \implies \zeta = 1$. Still critically damped.

Let's try:
$$G(s) = \frac{9}{s(s+4)}$$

Closed-loop transfer function:
$$T(s) = \frac{9}{s(s+4) + 9} = \frac{9}{s^2 + 4s + 9}$$

Comparing to the standard second-order form:
$\omega_n^2 = 9 \implies \omega_n = 3$ rad/sec
$2\zeta\omega_n = 4 \implies 2\zeta(3) = 4 \implies 6\zeta = 4 \implies \zeta = 4/6 = 2/3 \approx 0.667$

This is an underdamped system ($\zeta < 1$).

**Calculate time domain specifications for $T(s) = \frac{9}{s^2 + 4s + 9}$ (unit step input):**

*   **Rise Time ($T_r$):**
    $T_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_d}$
    $\omega_d = \omega_n \sqrt{1-\zeta^2} = 3 \sqrt{1 - (2/3)^2} = 3 \sqrt{1 - 4/9} = 3 \sqrt{5/9} = 3 \frac{\sqrt{5}}{3} = \sqrt{5} \approx 2.236$ rad/sec
    $\cos^{-1}(2/3) \approx 0.841$ radians
    $T_r = \frac{\pi - 0.841}{2.236} = \frac{3.1416 - 0.841}{2.236} = \frac{2.3006}{2.236} \approx 1.03$ seconds.

*   **Peak Overshoot ($M_p$):**
    $M_p = e^{-\frac{\pi\zeta}{\sqrt{1-\zeta^2}}} \times 100\% = e^{-\frac{\pi(2/3)}{\sqrt{1-(2/3)^2}}} \times 100\% = e^{-\frac{2\pi/3}{\sqrt{5}/3}} \times 100\% = e^{-\frac{2\pi}{\sqrt{5}}} \times 100\%$
    $M_p = e^{-\frac{6.283}{2.236}} \times 100\% = e^{-2.809} \times 100\% \approx 0.0603 \times 100\% = 6.03\%$

*   **Peak Time ($T_p$):**
    $T_p = \frac{\pi}{\omega_d} = \frac{\pi}{\sqrt{5}} \approx \frac{3.1416}{2.236} \approx 1.40$ seconds.

*   **Settling Time ($T_s$, 2%):**
    $T_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{(2/3) \times 3} = \frac{4}{2} = 2$ seconds.

*   **Steady-State Error ($e_{ss}$):**
    This is a Type 1 system. For a step input, $e_{ss} = 0$.
    $K_p = \lim_{s \to 0} G(s) = \lim_{s \to 0} \frac{9}{s(s+4)} = \infty$.
    $e_{ss} = \frac{1}{1+K_p} = 0$.

## Important Points to Remember

*   **Time Domain Specifications are crucial for performance evaluation.** They provide a quantitative understanding of how a system reacts to inputs.
*   **Second-order systems serve as a benchmark.** The formulas derived for second-order systems are widely used as approximations for higher-order systems when the response is dominated by a pair of complex conjugate poles.
*   **Damping ratio ($\zeta$) is a key parameter.** It dictates the nature of the transient response (underdamped, critically damped, overdamped) and significantly influences overshoot and settling time.
*   **Natural frequency ($\omega_n$) affects speed.** A higher $\omega_n$ generally leads to a faster system response.
*   **System type determines steady-state error.** Type 0 systems have steady-state errors for step inputs, while Type 1 and higher systems have zero steady-state error for step inputs.
*   **Trade-offs exist.** Improving one specification might degrade another (e.g., speed vs. overshoot). Control design often involves finding a balance.
*   **Root Locus Technique (covered in later modules) helps visualize pole locations, which directly relate to these time domain specifications.**

## Practice Questions

1.  A second-order system has a damping ratio $\zeta = 0.5$ and a natural frequency $\omega_n = 10$ rad/sec. Calculate the rise time ($T_r$), peak time ($T_p$), maximum overshoot ($M_p$), and settling time ($T_s$ for 2% tolerance) for a unit step input.
2.  Explain the difference between transient response and steady-state response.
3.  For a unity feedback system with open-loop transfer function $G(s) = \frac{20}{s(s+5)}$, determine the time domain specifications (rise time, peak time, peak overshoot, settling time) for a unit step input. Is this system overdamped, underdamped, or critically damped? What is its steady-state error for a unit step input?
4.  What is the primary characteristic that distinguishes a Type 0, Type 1, and Type 2 system in terms of steady-state error?
5.  Discuss the trade-off between the speed of response and the overshoot of a control system.

## Answers to Practice Questions

1.  **Given:** $\zeta = 0.5$, $\omega_n = 10$ rad/sec.
    *   $\omega_d = \omega_n \sqrt{1-\zeta^2} = 10 \sqrt{1 - 0.5^2} = 10 \sqrt{1 - 0.25} = 10 \sqrt{0.75} = 10 \times 0.866 = 8.66$ rad/sec.
    *   **Rise Time ($T_r$):**
        $T_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_d} = \frac{\pi - \cos^{-1}(0.5)}{8.66} = \frac{\pi - \pi/3}{8.66} = \frac{2\pi/3}{8.66} = \frac{2.0944}{8.66} \approx 0.242$ seconds.
    *   **Peak Time ($T_p$):**
        $T_p = \frac{\pi}{\omega_d} = \frac{\pi}{8.66} \approx \frac{3.1416}{8.66} \approx 0.363$ seconds.
    *   **Maximum Overshoot ($M_p$):**
        $M_p = e^{-\frac{\pi\zeta}{\sqrt{1-\zeta^2}}} \times 100\% = e^{-\frac{\pi \times 0.5}{0.866}} \times 100\% = e^{-\frac{1.5708}{0.866}} \times 100\% = e^{-1.813} \times 100\% \approx 0.163 \times 100\% = 16.3\%$.
    *   **Settling Time ($T_s$, 2%):**
        $T_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{0.5 \times 10} = \frac{4}{5} = 0.8$ seconds.

2.  **Transient Response:** The part of the system's output that changes with time and eventually decays to zero as time approaches infinity. It describes the system's behavior immediately after a disturbance or input change.
    **Steady-State Response:** The part of the system's output that remains after the transient response has decayed. It represents the system's final behavior.

3.  **Given:** $G(s) = \frac{20}{s(s+5)}$. Closed-loop transfer function $T(s) = \frac{20}{s(s+5) + 20} = \frac{20}{s^2 + 5s + 20}$.
    Comparing to $\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$:
    $\omega_n^2 = 20 \implies \omega_n = \sqrt{20} = 2\sqrt{5} \approx 4.47$ rad/sec.
    $2\zeta\omega_n = 5 \implies 2\zeta(4.47) = 5 \implies 8.94\zeta = 5 \implies \zeta = \frac{5}{8.94} \approx 0.56$.
    Since $\zeta < 1$, the system is **underdamped**.

    *   $\omega_d = \omega_n \sqrt{1-\zeta^2} = 4.47 \sqrt{1 - 0.56^2} = 4.47 \sqrt{1 - 0.3136} = 4.47 \sqrt{0.6864} \approx 4.47 \times 0.8285 \approx 3.70$ rad/sec.
    *   **Rise Time ($T_r$):**
        $T_r = \frac{\pi - \cos^{-1}(0.56)}{3.70} = \frac{3.1416 - 0.976}{3.70} = \frac{2.1656}{3.70} \approx 0.585$ seconds.
    *   **Peak Time ($T_p$):**
        $T_p = \frac{\pi}{\omega_d} = \frac{\pi}{3.70} \approx \frac{3.1416}{3.70} \approx 0.85$ seconds.
    *   **Maximum Overshoot ($M_p$):**
        $M_p = e^{-\frac{\pi \times 0.56}{0.8285}} \times 100\% = e^{-\frac{1.759}{0.8285}} \times 100\% = e^{-2.123} \times 100\% \approx 0.119 \times 100\% = 11.9\%$.
    *   **Settling Time ($T_s$, 2%):**
        $T_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{5} = 0.8$ seconds.

    *   **Steady-State Error ($e_{ss}$):** The open-loop transfer function $G(s) = \frac{20}{s(s+5)}$ has one integrator (the 's' in the denominator). Therefore, it is a **Type 1 system**. For a unit step input, the steady-state error is zero.
        $K_p = \lim_{s \to 0} G(s) = \lim_{s \to 0} \frac{20}{s(s+5)} = \infty$.
        $e_{ss} = \frac{1}{1+K_p} = 0$.

4.  *   **Type 0 System:** Has no pure integrators in the open-loop transfer function. It will have a non-zero steady-state error for a step input and an infinite steady-state error for a ramp input.
    *   **Type 1 System:** Has one pure integrator in the open-loop transfer function. It will have zero steady-state error for a step input and a non-zero steady-state error for a ramp input.
    *   **Type 2 System:** Has two pure integrators in the open-loop transfer function. It will have zero steady-state error for both step and ramp inputs.

5.  **Trade-off between Speed of Response and Overshoot:**
    The speed of response is often characterized by the rise time ($T_r$) or settling time ($T_s$). A faster response generally implies a smaller $T_r$ and $T_s$.
    *   To achieve a faster response, we typically need to increase the natural frequency ($\omega_n$) and/or the damping ratio ($\zeta$).
    *   However, increasing $\omega_n$ without adjusting $\zeta$ tends to increase overshoot.
    *   Increasing the damping ratio ($\zeta$) helps to reduce overshoot. But, increasing $\zeta$ also increases the rise time and settling time, making the system slower.
    Therefore, there is an inherent trade-off: making a system respond faster often leads to more overshoot, and reducing overshoot makes the system slower. Control system design involves finding a compromise that meets the performance requirements, balancing speed with stability and acceptable overshoot.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
