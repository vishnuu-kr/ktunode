---
title: "Time domain analysis of control systems"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 2: Performance Analysis of Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366b9"
status: "completed"
scrapedAt: "2026-05-23T16:29:25.268Z"
---
# Module 2: Performance Analysis of Control Systems

## Topic: Time Domain Analysis of Control Systems

This module focuses on understanding how control systems behave over time when subjected to different input signals. Time domain analysis is crucial for predicting and evaluating the transient and steady-state responses of a system.

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of time domain analysis in control systems.
*   Analyze the transient and steady-state responses of linear time-invariant (LTI) systems to standard test signals.
*   Define and calculate key transient response specifications (e.g., delay time, rise time, settling time, peak time, overshoot).
*   Relate system performance to the location of closed-loop poles in the s-plane.
*   Analyze the impact of system type and damping ratio on time-domain performance.
*   Understand the concept of steady-state error and its calculation for different system types.

### Key Concepts and Definitions

**1. Transient Response vs. Steady-State Response**

*   **Transient Response:** The part of the response that goes to zero as time approaches infinity. It describes the behavior of the system from its initial state to its final state.
*   **Steady-State Response:** The part of the response that remains after the transient response has died out. It describes the system's behavior as time becomes very large.

**2. Standard Test Signals**

These are commonly used input signals to evaluate the performance of a control system.

*   **Step Input:** Represents a sudden change in input (e.g., turning on a light).
    *   Mathematically: $r(t) = A u(t)$, where $u(t)$ is the unit step function.
    *   Laplace Transform: $R(s) = A/s$. For a unit step, $A=1$ and $R(s) = 1/s$.
*   **Ramp Input:** Represents a gradually increasing input (e.g., a conveyor belt moving at a constant speed).
    *   Mathematically: $r(t) = At u(t)$.
    *   Laplace Transform: $R(s) = A/s^2$. For a unit ramp, $A=1$ and $R(s) = 1/s^2$.
*   **Impulse Input:** Represents a very short, high-amplitude disturbance (e.g., a hammer blow).
    *   Mathematically: $r(t) = A \delta(t)$, where $\delta(t)$ is the Dirac delta function.
    *   Laplace Transform: $R(s) = A$. For a unit impulse, $A=1$ and $R(s) = 1$.
*   **Parabolic Input:** Represents a quadratically increasing input.
    *   Mathematically: $r(t) = \frac{1}{2}At^2 u(t)$.
    *   Laplace Transform: $R(s) = A/s^3$.

**3. Second-Order System Analysis**

Many control systems can be approximated by a second-order system, characterized by the following standard transfer function:

$$ G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$

where:

*   $\omega_n$: Natural frequency (radians per second). It represents the frequency of oscillation of the system if there were no damping.
*   $\zeta$: Damping ratio. It determines the nature of the transient response (underdamped, critically damped, overdamped, or unstable).

**4. Transient Response Specifications (for a second-order system subjected to a unit step input)**

These parameters quantify how well a system's output tracks the desired input during the transient period.

*   **Delay Time ($t_d$):** The time required for the response to reach 50% of its final value.
    $$ t_d = \frac{1 + 0.7\zeta}{\omega_n} $$
*   **Rise Time ($t_r$):** The time required for the response to rise from 10% to 90% of its final value.
    *   For $0 < \zeta < 1$:
        $$ t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n\sqrt{1 - \zeta^2}} $$
    *   For $\zeta \le 0.707$, $t_r \approx \frac{1.8}{\omega_n}$
    *   For $\zeta \approx 0.5$, $t_r \approx \frac{3.1}{\omega_n}$
*   **Peak Time ($t_p$):** The time required for the response to reach its first peak.
    $$ t_p = \frac{\pi}{\omega_n\sqrt{1 - \zeta^2}} $$
*   **Maximum Overshoot ($M_p$):** The maximum of the response, measured from the final steady-state value.
    $$ M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} $$
    *   Percentage Maximum Overshoot (% $M_p$): $M_p \times 100\%$
*   **Settling Time ($t_s$):** The time required for the response to reach and stay within a specified percentage (usually 2% or 5%) of its final steady-state value.
    *   For 2% criterion: $t_s \approx \frac{4}{\zeta\omega_n}$
    *   For 5% criterion: $t_s \approx \frac{3}{\zeta\omega_n}$

**5. Classification of Second-Order System Responses based on Damping Ratio ($\zeta$)**

*   **Undamped ($\zeta = 0$):** The response oscillates indefinitely.
*   **Underdamped ($0 < \zeta < 1$):** The response oscillates with decreasing amplitude, eventually settling to the steady-state value. This is typically the desired response for many applications.
*   **Critically Damped ($\zeta = 1$):** The response reaches the final value as quickly as possible without any oscillation.
*   **Overdamped ($\zeta > 1$):** The response approaches the final value slowly without oscillation.

**Important Point:** The transient response is primarily determined by the location of the dominant closed-loop poles in the s-plane. For a second-order system, the poles are located at $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$.

*   The real part ($-\zeta\omega_n$) determines the speed of the response (larger magnitude means faster decay).
*   The imaginary part ($\pm\omega_n\sqrt{1-\zeta^2}$) determines the frequency of oscillation.

**6. Steady-State Error**

The difference between the desired output and the actual output as time approaches infinity.

*   **Error Signal ($e(t)$):** $e(t) = r(t) - c(t)$, where $r(t)$ is the input and $c(t)$ is the output.
*   **Steady-State Error ($e_{ss}$):** $e_{ss} = \lim_{t \to \infty} e(t)$.

**7. System Type and Steady-State Error**

The system type is determined by the number of pure integrators (poles at the origin) in the system's open-loop transfer function, $G_{OL}(s) = G(s)H(s)$.

*   **Type 0 System:** No poles at the origin ($s^0$). The open-loop transfer function is $G_{OL}(s) = K$.
    *   **Step Input:** $e_{ss} = \frac{A}{1+K_p}$, where $K_p = \lim_{s \to 0} G_{OL}(s)$ is the position error constant.
    *   **Ramp Input:** $e_{ss} = \infty$.
    *   **Impulse Input:** $e_{ss} = 0$.
*   **Type 1 System:** One pole at the origin ($s^1$). The open-loop transfer function has a factor of $s$ in the denominator.
    *   **Step Input:** $e_{ss} = 0$ (finite and zero if $K_p \to \infty$).
    *   **Ramp Input:** $e_{ss} = \frac{A}{K_v}$, where $K_v = \lim_{s \to 0} s G_{OL}(s)$ is the velocity error constant.
    *   **Impulse Input:** $e_{ss} = 0$.
*   **Type 2 System:** Two poles at the origin ($s^2$). The open-loop transfer function has a factor of $s^2$ in the denominator.
    *   **Step Input:** $e_{ss} = 0$.
    *   **Ramp Input:** $e_{ss} = 0$.
    *   **Impulse Input:** $e_{ss} = 0$.

**Important Point:** For a stable system, as the system type number increases, the steady-state error for ramp and step inputs decreases.

**8. Steady-State Error Analysis using Final Value Theorem**

For a stable system, the steady-state error can be calculated using the Final Value Theorem:

$$ e_{ss} = \lim_{s \to 0} s E(s) $$

where $E(s)$ is the Laplace transform of the error signal, $E(s) = \frac{R(s)}{1+G_{OL}(s)}$.

**Example for Steady-State Error:**

Consider a unity feedback system with an open-loop transfer function:
$G_{OL}(s) = \frac{K}{s(s+a)}$

This is a Type 1 system.

*   **Input: Unit Step ($R(s) = 1/s$)**
    $E(s) = \frac{1/s}{1 + \frac{K}{s(s+a)}} = \frac{1/s}{\frac{s(s+a)+K}{s(s+a)}} = \frac{s+a}{s(s+a)+K}$
    $e_{ss} = \lim_{s \to 0} s E(s) = \lim_{s \to 0} s \frac{s+a}{s(s+a)+K} = \lim_{s \to 0} \frac{s(s+a)}{s(s+a)+K} = \frac{0}{K} = 0$.
    This is expected for a Type 1 system with a step input.

*   **Input: Unit Ramp ($R(s) = 1/s^2$)**
    $E(s) = \frac{1/s^2}{1 + \frac{K}{s(s+a)}} = \frac{1/s^2}{\frac{s(s+a)+K}{s(s+a)}} = \frac{s(s+a)}{s^2(s(s+a)+K)} = \frac{s+a}{s(s(s+a)+K)}$
    $e_{ss} = \lim_{s \to 0} s E(s) = \lim_{s \to 0} s \frac{s+a}{s(s(s+a)+K)} = \lim_{s \to 0} \frac{s+a}{s(s+a)+K} = \frac{a}{K}$.
    Here, $K_v = \lim_{s \to 0} s G_{OL}(s) = \lim_{s \to 0} s \frac{K}{s(s+a)} = \frac{K}{a}$. So, $e_{ss} = A/K_v = 1/(K/a) = a/K$.

### Analysis of System Response to Standard Test Signals

The time-domain response of a system is heavily influenced by the type of input signal applied.

**1. Response to a Unit Step Input**

*   **Undamped System ($\zeta = 0$):** Output oscillates indefinitely with constant amplitude.
*   **Underdamped System ($0 < \zeta < 1$):** Output oscillates with decreasing amplitude, overshoots the final value, and then settles.
*   **Critically Damped System ($\zeta = 1$):** Output reaches the final value quickly and without oscillation.
*   **Overdamped System ($\zeta > 1$):** Output reaches the final value slowly and without oscillation.

**2. Response to a Unit Ramp Input**

*   **Type 0 System:** Steady-state error is infinite. The output continues to increase, lagging behind the input by a constant offset that grows infinitely.
*   **Type 1 System:** Steady-state error is constant and finite (e.g., $A/K_v$). The output grows linearly but lags the input by a constant amount.
*   **Type 2 System:** Steady-state error is zero. The output eventually tracks the input perfectly.

**3. Response to a Unit Impulse Input**

The impulse response is essentially the derivative of the step response. It shows how the system reacts to a sudden "kick." For stable systems, the impulse response eventually decays to zero.

### Relating Time-Domain Performance to Pole Locations

The location of the dominant closed-loop poles in the s-plane directly dictates the system's time-domain behavior.

*   **Pole Location:** $s = -\sigma \pm j\omega_d$
    *   $\sigma = \zeta\omega_n$: Damping factor. Determines the decay rate of oscillations. Larger $\sigma$ means faster decay.
    *   $\omega_d = \omega_n\sqrt{1-\zeta^2}$: Damped frequency. Determines the frequency of oscillations.
    *   $\zeta = \frac{\sigma}{\omega_n} = \frac{\sigma}{\sqrt{\sigma^2 + \omega_d^2}}$: Damping ratio.
    *   $\omega_n = \sqrt{\sigma^2 + \omega_d^2}$: Natural frequency.

*   **Performance Specifications in terms of Pole Locations:**
    *   **Settling Time ($t_s \approx 4/\sigma$):** Determined by the magnitude of the real part of the dominant poles. Poles closer to the jω-axis (smaller $|\text{Re}(s)|$) result in a longer settling time.
    *   **Peak Time ($t_p = \pi/\omega_d$):** Determined by the imaginary part of the dominant poles.
    *   **Maximum Overshoot ($M_p = e^{-\pi \zeta / \sqrt{1-\zeta^2}}$):** Determined by the damping ratio $\zeta$. This can be visualized as the angle $\theta$ between the negative real axis and the pole location: $\zeta = \cos(\theta)$. Higher $\zeta$ (pole closer to the negative real axis) leads to lower overshoot.

**Important Point:** For systems where one pair of complex conjugate poles dominates the response, the transient response can be approximated by the behavior of a second-order system. Non-dominant poles (those further to the left in the s-plane) decay faster and have less impact on the overall transient response.

### Practice Questions

1.  A second-order system has the transfer function $G(s) = \frac{16}{s^2 + 8s + 16}$. Determine the type of damping and calculate the settling time (2% criterion) and rise time for a unit step input.
2.  Consider a unity feedback system with an open-loop transfer function $G_{OL}(s) = \frac{K}{s+1}$.
    *   Determine the system type.
    *   Calculate the steady-state error for a unit step input.
    *   Calculate the steady-state error for a unit ramp input.
3.  For a second-order system with $\zeta = 0.6$ and $\omega_n = 5$ rad/s, calculate:
    *   Delay time ($t_d$)
    *   Rise time ($t_r$)
    *   Peak time ($t_p$)
    *   Maximum overshoot ($M_p$)
    *   Settling time ($t_s$, 2% criterion)
4.  What is the effect of increasing the damping ratio ($\zeta$) on the transient response specifications of a second-order system?
5.  A system has a closed-loop pole at $s = -2 + j4$. Estimate the settling time and peak time of its unit step response.

### Answers to Practice Questions

1.  The characteristic equation is $s^2 + 8s + 16 = 0$. This can be written in the standard form $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$.
    *   Comparing, $\omega_n^2 = 16 \implies \omega_n = 4$ rad/s.
    *   $2\zeta\omega_n = 8 \implies 2\zeta(4) = 8 \implies 8\zeta = 8 \implies \zeta = 1$.
    *   **Damping Type:** Critically damped ($\zeta = 1$).
    *   **Settling Time ($t_s$, 2% criterion):** For $\zeta \ge 1$, the system behaves like a first-order system with time constant $T = 1/\omega_n$ (for $\zeta=1$) or $T = 1/(\zeta\omega_n)$ (for $\zeta>1$ which is not exactly correct for these specs). For $\zeta=1$, the poles are at $s = -\omega_n = -4$. The settling time is approximately $4/\sigma = 4/4 = 1$ second. A more precise formula for $\zeta=1$ is $t_s = 4T$, where $T$ is the time constant of the equivalent first-order system. The transfer function $(s+ \omega_n)^2$ has a pole at $-\omega_n$, so $T = 1/\omega_n = 1/4$. Thus, $t_s = 4 \times (1/4) = 1$ second.
    *   **Rise Time ($t_r$):** For critically damped systems, there is no standard formula for rise time in terms of $\zeta$ and $\omega_n$ as defined for underdamped systems. The response is monotonic. If we consider it as the time to reach the final value, for a critically damped system, the response is $c(t) = 1 - e^{-\omega_n t} - \omega_n t e^{-\omega_n t}$. It reaches its final value asymptotically. If we interpret rise time as the time to reach, say, 90% of the final value, it would be a specific calculation. Generally, for critically damped systems, the rise time is faster than overdamped and slower than some underdamped systems. For the sake of practice, let's consider the time to reach near final value.

2.  $G_{OL}(s) = \frac{K}{s+1}$
    *   **System Type:** This transfer function has no poles at the origin ($s^0$ term). Therefore, it is a **Type 0** system.
    *   **Steady-state error for a unit step input ($r(t) = u(t)$, $R(s) = 1/s$):**
        *   The position error constant is $K_p = \lim_{s \to 0} G_{OL}(s) = \lim_{s \to 0} \frac{K}{s+1} = K$.
        *   $e_{ss} = \frac{A}{1+K_p} = \frac{1}{1+K}$.
    *   **Steady-state error for a unit ramp input ($r(t) = t u(t)$, $R(s) = 1/s^2$):**
        *   For a Type 0 system, the steady-state error to a ramp input is infinite.
        *   The velocity error constant is $K_v = \lim_{s \to 0} s G_{OL}(s) = \lim_{s \to 0} s \frac{K}{s+1} = 0$.
        *   $e_{ss} = \frac{A}{K_v} = \frac{1}{0} = \infty$.

3.  Given $\zeta = 0.6$ and $\omega_n = 5$ rad/s.
    *   **Delay Time ($t_d$):**
        $t_d = \frac{1 + 0.7\zeta}{\omega_n} = \frac{1 + 0.7(0.6)}{5} = \frac{1 + 0.42}{5} = \frac{1.42}{5} = 0.284$ seconds.
    *   **Rise Time ($t_r$):**
        $t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n\sqrt{1 - \zeta^2}} = \frac{\pi - \cos^{-1}(0.6)}{5\sqrt{1 - 0.6^2}} = \frac{\pi - 0.927}{5\sqrt{1 - 0.36}} = \frac{3.141 - 0.927}{5\sqrt{0.64}} = \frac{2.214}{5 \times 0.8} = \frac{2.214}{4} = 0.5535$ seconds.
    *   **Peak Time ($t_p$):**
        $t_p = \frac{\pi}{\omega_n\sqrt{1 - \zeta^2}} = \frac{\pi}{5\sqrt{1 - 0.6^2}} = \frac{\pi}{5 \times 0.8} = \frac{\pi}{4} = 0.7854$ seconds.
    *   **Maximum Overshoot ($M_p$):**
        $M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} = e^{-\frac{0.6\pi}{\sqrt{1-0.6^2}}} = e^{-\frac{0.6\pi}{0.8}} = e^{-0.75\pi} = e^{-2.356} \approx 0.0947$.
        *   Percentage Maximum Overshoot (% $M_p$) = $0.0947 \times 100\% = 9.47\%$.
    *   **Settling Time ($t_s$, 2% criterion):**
        $t_s = \frac{4}{\zeta\omega_n} = \frac{4}{0.6 \times 5} = \frac{4}{3} = 1.333$ seconds.

4.  Increasing the damping ratio ($\zeta$) of a second-order system generally leads to:
    *   **Decreased Maximum Overshoot ($M_p$):** The response becomes less oscillatory.
    *   **Increased Rise Time ($t_r$):** The response takes longer to reach its final value.
    *   **Increased Delay Time ($t_d$):** The initial part of the response is slower.
    *   **Decreased Peak Time ($t_p$):** The first peak occurs earlier (though the peak value is lower).
    *   **Increased Settling Time ($t_s$):** The response takes longer to settle to its final value (unless $\zeta$ becomes very large, leading to overdamped behavior which is also slow). However, for underdamped systems, a higher $\zeta$ generally means a faster decay of oscillations, contributing to a potentially faster settling *if* overshoot is the dominant factor. For a fixed $\omega_n$, $\zeta\omega_n$ increases, so $t_s$ decreases. *Correction*: The term $\zeta\omega_n$ in the denominator of $t_s$ means that as $\zeta$ increases (for fixed $\omega_n$), $\zeta\omega_n$ increases, and thus $t_s$ decreases. This makes the system settle faster.

5.  The closed-loop pole is at $s = -2 + j4$.
    *   From the pole location, we can identify:
        *   Real part ($\sigma$): $\sigma = 2$
        *   Imaginary part ($\omega_d$): $\omega_d = 4$
    *   **Settling Time ($t_s$, 2% criterion):**
        $t_s \approx \frac{4}{\sigma} = \frac{4}{2} = 2$ seconds.
    *   **Peak Time ($t_p$):**
        $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{4} \approx 0.7854$ seconds.
    *   To estimate overshoot, we first need $\zeta$:
        $\omega_n = \sqrt{\sigma^2 + \omega_d^2} = \sqrt{2^2 + 4^2} = \sqrt{4 + 16} = \sqrt{20} \approx 4.472$ rad/s.
        $\zeta = \frac{\sigma}{\omega_n} = \frac{2}{\sqrt{20}} \approx \frac{2}{4.472} \approx 0.447$.
        $M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} = e^{-\frac{0.447\pi}{\sqrt{1-0.447^2}}} = e^{-\frac{1.404}{\sqrt{1-0.199}}} = e^{-\frac{1.404}{\sqrt{0.801}}} = e^{-\frac{1.404}{0.895}} = e^{-1.569} \approx 0.208$.
        Percentage overshoot $\approx 20.8\%$.

### Important Points to Remember

*   Time domain analysis helps understand a system's behavior over time, crucial for performance evaluation.
*   The response to standard test signals (step, ramp, impulse) reveals key performance characteristics.
*   Second-order systems are fundamental and their behavior is characterized by natural frequency ($\omega_n$) and damping ratio ($\zeta$).
*   Transient response specifications (rise time, settling time, overshoot) quantify how well a system tracks the input during the transition.
*   The location of closed-loop poles in the s-plane is the most direct indicator of transient response:
    *   Real part determines speed of response.
    *   Imaginary part determines oscillation frequency.
    *   Damping ratio determines oscillation decay and overshoot.
*   System type (number of integrators in the open-loop transfer function) is critical for determining steady-state error. Higher type systems generally have better steady-state accuracy for step and ramp inputs.
*   The Final Value Theorem is a powerful tool for calculating steady-state error.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Textbook References and Alignment with Course Outcomes

*   **Nise, "Control Systems Engineering" (5th Ed.):** This textbook provides a comprehensive treatment of time-domain analysis, including detailed derivations of transient response specifications and steady-state error analysis for various system types. It aligns well with **CO1** (representing systems) and **CO2** (analyzing time-domain responses and predicting transient parameters).
*   **Nagrath & Gopal, "Control Systems Engineering" (5th Ed.):** Similar to Nise, this book covers the foundational aspects of time-domain analysis, including system classification and the calculation of performance metrics. It also supports **CO1** and **CO2**.
*   **Kuo, "Automatic Control Systems" (9th Ed.):** Kuo's text offers a thorough understanding of the mathematical basis for time-domain analysis and its application in system design. It is relevant for **CO1** and **CO2**.
*   **Gopal, "Control Systems Principles and Design" (4th Ed.):** This reference book emphasizes the practical aspects of analyzing system performance in the time domain, aiding in the understanding of **CO2**.
*   **Dorf & Bishop, "Modern Control Systems" (12th Ed.):** While modern control introduces state-space, the classical time-domain analysis is still fundamental. This text would provide a good overview and connect classical concepts. Supports **CO1** and **CO2**.
*   **Ogata, "Modern Control Engineering" (5th Ed.):** Ogata's book is known for its clear explanations and numerous examples, making it an excellent resource for understanding time-domain responses and their impact on system behavior. It strongly supports **CO1** and **CO2**.

**Alignment with Course Outcomes:**

*   **CO1: To represent continuous time systems in the classical domain.** (Knowledge Level: K2)
    *   This topic directly addresses CO1 by defining transfer functions, system types, and the relationship between system parameters and their time-domain behavior. The understanding of second-order system equations and pole-zero locations is a form of classical representation.
*   **CO2: Analyse the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions.** (Knowledge Level: K2)
    *   This entire topic is dedicated to achieving CO2. It covers the analysis of responses to step, ramp, and impulse inputs and defines/calculates key transient parameters like $t_r, t_p, M_p, t_s$.
*   **CO3: Analyse dynamics systems for their performance and stability using Root locus.** (Knowledge Level: K3)
    *   While root locus is a separate topic, time-domain analysis provides the performance metrics that root locus techniques are used to achieve. Understanding how pole locations (which root locus maps) affect transient specifications is crucial for this outcome.
*   **CO4: Analyse dynamics systems for their performance and stability in frequency domain.** (Knowledge Level: K3)
    *   Time-domain analysis and frequency-domain analysis are complementary methods for understanding system performance. This topic builds the foundation for appreciating why frequency-domain methods are also used.
*   **CO5: To represent continuous time systems in the classical domain.** (Knowledge Level: K2)
    *   This is a repeat of CO1, further emphasizing the importance of classical representations for system analysis.

This comprehensive set of notes covers the essential aspects of time-domain analysis for control systems, drawing upon the core concepts and methodologies found in the specified textbooks.