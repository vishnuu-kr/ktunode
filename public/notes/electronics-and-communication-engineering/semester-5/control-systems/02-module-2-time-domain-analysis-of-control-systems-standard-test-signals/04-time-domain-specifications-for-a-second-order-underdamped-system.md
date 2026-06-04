---
title: "Time domain specifications for a second order underdamped system"
subject: "CONTROL SYSTEMS"
module: "Module 2: Time Domain Analysis of Control Systems:  Standard Test signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe953"
status: "completed"
scrapedAt: "2026-05-23T17:54:40.329Z"
---
# Control Systems: Module 2 - Time Domain Analysis of Control Systems: Standard Test Signals

## Topic: Time Domain Specifications for a Second-Order Underdamped System

This topic delves into the transient response characteristics of a second-order system when subjected to standard test signals, focusing on the underdamped case. Understanding these specifications is crucial for analyzing and designing control systems to meet performance requirements.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Define and explain the key time domain specifications for a second-order underdamped system.
*   Derive the mathematical expressions for these specifications in terms of the system's damping ratio ($\zeta$) and natural frequency ($\omega_n$).
*   Analyze how changes in $\zeta$ and $\omega_n$ affect the transient response.
*   Relate these specifications to the system's stability and performance.
*   Apply these concepts to predict and interpret the response of practical control systems.

### 1. Introduction to Second-Order Systems

A second-order system is characterized by a transfer function of the form:

$$
G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}
$$

This is the standard form of the transfer function for a typical second-order system. The key parameters are:

*   $\omega_n$ (Natural Frequency): The frequency of oscillation of the system if there were no damping. It represents the speed of the system response.
*   $\zeta$ (Damping Ratio): A dimensionless parameter that characterizes how oscillations decay after a disturbance. It determines the nature of the system's response (underdamped, critically damped, overdamped, or unstable).

**Underdamped System:** A system is classified as underdamped when $0 < \zeta < 1$. In this case, the system will oscillate before settling to its steady-state value.

**(Refer to: Nagarath & Gopal, Chapter 7; Kuo & Golnaraghi, Chapter 5; Ogata, Chapter 3)**

### 2. Standard Test Signals

Standard test signals are used to excite the system and evaluate its transient response. The most common ones are:

*   **Step Input:** $r(t) = A u(t)$ (where $u(t)$ is the unit step function, $A=1$ for unit step). This is the most widely used test signal as it represents a sudden change in the desired output.
*   **Ramp Input:** $r(t) = At u(t)$. This represents a gradually increasing input.
*   **Impulse Input:** $r(t) = A \delta(t)$ (where $\delta(t)$ is the Dirac delta function, $A=1$ for unit impulse). This represents a sudden, very short-duration disturbance.
*   **Sinusoidal Input:** $r(t) = A \sin(\omega t) u(t)$. This tests the system's response to sinusoidal disturbances at different frequencies.

This topic primarily focuses on the **step response** of an underdamped second-order system, as it reveals most of the important transient characteristics.

**(Refer to: Nagarath & Gopal, Chapter 7; Kuo & Golnaraghi, Chapter 5; Ogata, Chapter 3)**

### 3. Time Domain Specifications for a Second-Order Underdamped System (Under Unit Step Input)

When a unit step input $R(s) = 1/s$ is applied to the standard second-order system, the response $C(s)$ is given by:

$$
C(s) = G(s) R(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} \cdot \frac{1}{s}
$$

The time-domain response $c(t)$ is obtained by taking the inverse Laplace transform of $C(s)$. For an underdamped system ($0 < \zeta < 1$), the response exhibits oscillations. The key specifications that characterize this transient response are:

#### 3.1. Delay Time ($t_d$)

*   **Definition:** The time required for the response to reach 50% of its final steady-state value for the first time.
*   **Mathematical Expression:**
    $$
    t_d = \frac{1 + 0.7\zeta\omega_n}{\omega_n} \approx \frac{1}{\omega_n}
    $$
    The approximate form is often used for simplicity, assuming $\zeta$ is not too close to 1.
*   **Significance:** Indicates how quickly the system starts to respond to the input. A shorter delay time generally means a faster initial response.

**(Refer to: Nagarath & Gopal, Chapter 7; Ogata, Chapter 3)**

#### 3.2. Rise Time ($t_r$)

*   **Definition:** The time required for the response to rise from 10% of its final steady-state value to 90% of its final steady-state value.
*   **Mathematical Expression:**
    $$
    t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_d} = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n \sqrt{1-\zeta^2}}
    $$
    where $\omega_d = \omega_n \sqrt{1-\zeta^2}$ is the damped natural frequency.
*   **Significance:** Indicates how fast the system can reach its final value (or close to it). A shorter rise time implies a faster response.
*   **Dependence:** $t_r$ is inversely proportional to $\omega_n$ and strongly dependent on $\zeta$. As $\zeta$ approaches 1, $t_r$ increases.

**(Refer to: Nagarath & Gopal, Chapter 7; Kuo & Golnaraghi, Chapter 5; Ogata, Chapter 3)**

#### 3.3. Peak Time ($t_p$)

*   **Definition:** The time required for the response to reach its first peak (maximum overshoot).
*   **Mathematical Expression:**
    $$
    t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}}
    $$
*   **Significance:** Represents the time at which the system's output reaches its maximum value during the transient response. It is directly related to the oscillatory behavior.
*   **Dependence:** $t_p$ is inversely proportional to the damped natural frequency $\omega_d$. A smaller $\omega_d$ (i.e., lower $\zeta$) leads to a longer peak time.

**(Refer to: Nagarath & Gopal, Chapter 7; Kuo & Golnaraghi, Chapter 5; Ogata, Chapter 3)**

#### 3.4. Maximum Overshoot ($M_p$)

*   **Definition:** The maximum difference between the peak value of the response and its final steady-state value, expressed as a percentage of the final value.
*   **Mathematical Expression:**
    $$
    M_p = \frac{c_{max} - c(\infty)}{c(\infty)} \times 100\%
    $$
    The peak value $c_{max}$ for a unit step input is $1 + e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}}$.
    Therefore, for a unit step response ($c(\infty) = 1$):
    $$
    M_p = e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} \times 100\%
    $$
*   **Significance:** Indicates how much the system's response exceeds the final steady-state value. A high overshoot can be undesirable in many applications as it can lead to instability or damage.
*   **Dependence:** $M_p$ is solely a function of the damping ratio $\zeta$. As $\zeta$ decreases (approaching 0), the overshoot increases significantly. For $\zeta = 0$, the overshoot is 100%.

**(Refer to: Nagarath & Gopal, Chapter 7; Kuo & Golnaraghi, Chapter 5; Ogata, Chapter 3)**

#### 3.5. Settling Time ($t_s$)

*   **Definition:** The time required for the response to reach and stay within a specified tolerance band (usually $\pm 2\%$ or $\pm 5\%$) of its final steady-state value.
*   **Mathematical Expression:**
    *   **For 2% Tolerance Band:**
        $$
        t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{\sigma}
        $$
        where $\sigma = \zeta\omega_n$ is the real part of the system poles.
    *   **For 5% Tolerance Band:**
        $$
        t_s \approx \frac{3}{\zeta\omega_n} = \frac{3}{\sigma}
        $$
*   **Significance:** Indicates how long it takes for the system's transient response to effectively die out and the output to stabilize. A shorter settling time is generally preferred for faster system operation.
*   **Dependence:** $t_s$ is inversely proportional to the product $\zeta\omega_n$, which represents the position of the dominant poles in the s-plane. A larger $\zeta\omega_n$ results in a shorter settling time.

**(Refer to: Nagarath & Gopal, Chapter 7; Kuo & Golnaraghi, Chapter 5; Ogata, Chapter 3)**

### 4. Relationship Between Specifications and System Parameters ($\zeta$, $\omega_n$)

The following table summarizes how the time-domain specifications are affected by $\zeta$ and $\omega_n$:

| Specification      | Formula                                                                | Dependence on $\zeta$                                      | Dependence on $\omega_n$ |
| :----------------- | :--------------------------------------------------------------------- | :---------------------------------------------------------- | :----------------------- |
| **Delay Time ($t_d$)** | $\frac{1 + 0.7\zeta\omega_n}{\omega_n}$                               | Increases slightly with $\zeta$                            | Decreases with $\omega_n$ |
| **Rise Time ($t_r$)**  | $\frac{\pi - \cos^{-1}(\zeta)}{\omega_n \sqrt{1-\zeta^2}}$           | Increases significantly as $\zeta$ increases (approaching 1) | Decreases with $\omega_n$ |
| **Peak Time ($t_p$)**  | $\frac{\pi}{\omega_n \sqrt{1-\zeta^2}}$                               | Increases as $\zeta$ increases (approaching 1)             | Decreases with $\omega_n$ |
| **Max. Overshoot ($M_p$)** | $e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} \times 100\%$                 | Decreases significantly as $\zeta$ increases                | Independent of $\omega_n$ |
| **Settling Time ($t_s$)** | $\approx \frac{4}{\zeta\omega_n}$ (for 2% tolerance)                   | Decreases as $\zeta$ increases                             | Decreases with $\omega_n$ |

**Key Observations:**

*   **$\omega_n$ primarily affects the speed of the response.** Increasing $\omega_n$ generally decreases $t_d$, $t_r$, $t_p$, and $t_s$, making the system faster.
*   **$\zeta$ primarily affects the damping of the oscillations (overshoot and ringing).**
    *   Increasing $\zeta$ reduces overshoot ($M_p$) and peak time ($t_p$).
    *   However, increasing $\zeta$ also increases the rise time ($t_r$).
    *   For settling time ($t_s$), increasing $\zeta$ generally reduces it (if $\zeta\omega_n$ increases).
*   There is a trade-off between speed of response and damping. To achieve a fast response (low $t_r$, low $t_p$), $\zeta$ needs to be low, but this leads to high overshoot. To reduce overshoot, $\zeta$ needs to be higher, but this slows down the response.

**(Refer to: Nagarath & Gopal, Chapter 7; Kuo & Golnaraghi, Chapter 5; Ogata, Chapter 3)**

### 5. Illustrative Examples and Graphical Representation

Let's consider the unit step response of a second-order system for different values of $\zeta$ while keeping $\omega_n$ constant.

**Example:** Consider a system with $\omega_n = 10$ rad/sec.

*   **Case 1: $\zeta = 0.2$ (Underdamped)**
    *   The response will exhibit significant overshoot and oscillations.
    *   $t_p = \frac{\pi}{10\sqrt{1-0.2^2}} \approx 0.32$ sec
    *   $M_p = e^{-\frac{0.2\pi}{\sqrt{1-0.2^2}}} \times 100\% \approx 52.7\%$
    *   $t_r \approx \frac{\pi - \cos^{-1}(0.2)}{10\sqrt{1-0.2^2}} \approx 0.15$ sec (approx.)
    *   $t_s \approx \frac{4}{0.2 \times 10} = 2$ sec (for 2% tolerance)

*   **Case 2: $\zeta = 0.5$ (Underdamped)**
    *   The response will have less overshoot and fewer oscillations than $\zeta = 0.2$.
    *   $t_p = \frac{\pi}{10\sqrt{1-0.5^2}} \approx 0.36$ sec
    *   $M_p = e^{-\frac{0.5\pi}{\sqrt{1-0.5^2}}} \times 100\% \approx 16.3\%$
    *   $t_r \approx \frac{\pi - \cos^{-1}(0.5)}{10\sqrt{1-0.5^2}} \approx 0.11$ sec (approx.)
    *   $t_s \approx \frac{4}{0.5 \times 10} = 0.8$ sec (for 2% tolerance)

*   **Case 3: $\zeta = 0.8$ (Underdamped)**
    *   The response will have very little overshoot and oscillations.
    *   $t_p = \frac{\pi}{10\sqrt{1-0.8^2}} \approx 0.52$ sec
    *   $M_p = e^{-\frac{0.8\pi}{\sqrt{1-0.8^2}}} \times 100\% \approx 1.5\%$
    *   $t_r \approx \frac{\pi - \cos^{-1}(0.8)}{10\sqrt{1-0.8^2}} \approx 0.07$ sec (approx.)
    *   $t_s \approx \frac{4}{0.8 \times 10} = 0.5$ sec (for 2% tolerance)

**Graphical Representation:**

Plotting the responses for these cases on the same graph clearly shows:
*   As $\zeta$ increases, the overshoot decreases.
*   As $\zeta$ increases, the settling time decreases.
*   The peak time generally increases as $\zeta$ increases (though the effect is less pronounced than the overshoot).
*   The rise time generally decreases as $\zeta$ increases, indicating a faster initial rise.

**(Refer to: Nagarath & Gopal, Chapter 7; Kuo & Golnaraghi, Chapter 5; Ogata, Chapter 3 for typical plots)**

### 6. Importance and Application of Time Domain Specifications

These specifications are critical for:

*   **System Performance Evaluation:** They provide a quantitative measure of how well a system performs under transient conditions.
*   **Controller Design:** Control system designers aim to select controller parameters ($\zeta$ and $\omega_n$) to meet desired transient response specifications. For example, a system requiring fast settling with minimal overshoot would need a higher $\zeta$ value.
*   **System Tuning:** In practical systems, these specifications are used to tune controller parameters to achieve optimal performance.
*   **Comparison of Systems:** They allow for a fair comparison of the transient responses of different control systems.

**(Refer to: Nagarath & Gopal, Chapter 7; Kuo & Golnaraghi, Chapter 5; Ogata, Chapter 3)**

### 7. Alignment with Course Outcomes

*   **CO1 (Analyze using transfer function):** This topic directly uses the transfer function of a second-order system to derive performance metrics, reinforcing the ability to analyze systems using their mathematical models. (Knowledge Level: K3)
*   **CO2 (Perform time domain analysis):** This is the core of the topic, focusing on understanding and quantifying the transient behavior of a system under standard test signals. (Knowledge Level: K2)
*   **CO3 (Determine stability):** While not directly about stability criteria like Routh-Hurwitz, the transient response characteristics (especially overshoot and settling time) are indicators of relative stability. An underdamped system with excessive overshoot or slow settling might indicate a system that is close to instability. (Knowledge Level: K3)

### 8. Practice Questions and Answers

**Question 1:** For a second-order system with the transfer function $G(s) = \frac{16}{s^2 + 4s + 16}$, determine the following time domain specifications under a unit step input:
    a) Natural frequency ($\omega_n$)
    b) Damping ratio ($\zeta$)
    c) Delay time ($t_d$)
    d) Rise time ($t_r$) (approximate)
    e) Peak time ($t_p$)
    f) Maximum overshoot ($M_p$)
    g) Settling time ($t_s$) (for 2% tolerance)

**Answer 1:**
The standard second-order system transfer function is $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.
Comparing with $G(s) = \frac{16}{s^2 + 4s + 16}$:

a) $\omega_n^2 = 16 \implies \omega_n = 4$ rad/sec.
b) $2\zeta\omega_n = 4 \implies 2\zeta(4) = 4 \implies 8\zeta = 4 \implies \zeta = 0.5$.
   Since $0 < \zeta < 1$, the system is underdamped.

c) $t_d = \frac{1 + 0.7\zeta\omega_n}{\omega_n} = \frac{1 + 0.7(0.5)(4)}{4} = \frac{1 + 1.4}{4} = \frac{2.4}{4} = 0.6$ sec.

d) $\omega_d = \omega_n \sqrt{1-\zeta^2} = 4 \sqrt{1-0.5^2} = 4 \sqrt{0.75} = 4 \times 0.866 = 3.464$ rad/sec.
   $t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_d} = \frac{\pi - \cos^{-1}(0.5)}{3.464} = \frac{3.1416 - 1.0472}{3.464} = \frac{2.0944}{3.464} \approx 0.605$ sec.

e) $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{3.464} \approx 0.907$ sec.

f) $M_p = e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} \times 100\% = e^{-\frac{0.5 \pi}{\sqrt{1-0.5^2}}} \times 100\% = e^{-\frac{1.5708}{0.866}} \times 100\% = e^{-1.814} \times 100\% \approx 0.1633 \times 100\% = 16.33\%$.

g) $t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{0.5 \times 4} = \frac{4}{2} = 2$ sec.

**Question 2:** How does doubling the natural frequency ($\omega_n$) of an underdamped second-order system affect its rise time ($t_r$) and maximum overshoot ($M_p$)? Assume $\zeta$ remains constant.

**Answer 2:**
*   **Rise Time ($t_r$):** The formula for rise time is $t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n \sqrt{1-\zeta^2}}$. If $\omega_n$ is doubled, the term $\omega_n$ in the denominator is doubled. Therefore, the rise time ($t_r$) will be halved.
*   **Maximum Overshoot ($M_p$):** The formula for maximum overshoot is $M_p = e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} \times 100\%$. This formula is solely dependent on the damping ratio $\zeta$ and is independent of $\omega_n$. Therefore, doubling $\omega_n$ will not affect the maximum overshoot ($M_p$).

### 9. Important Points to Remember

*   The second-order system is a fundamental building block for understanding the transient behavior of more complex systems.
*   For underdamped systems ($0 < \zeta < 1$), the transient response is oscillatory.
*   The **damping ratio ($\zeta$)** is the primary determinant of the oscillatory behavior (overshoot, peak time) and significantly influences the rise time and settling time.
*   The **natural frequency ($\omega_n$)** is the primary determinant of the speed of the response. A higher $\omega_n$ generally leads to a faster system.
*   There is a trade-off between speed and damping. Reducing overshoot often leads to a slower response, and vice-versa.
*   Settling time is often approximated by $4/(\zeta\omega_n)$ or $3/(\zeta\omega_n)$ depending on the tolerance band. The value $\zeta\omega_n$ represents the real part of the system's dominant poles.
*   These specifications provide a quantitative basis for controller design and system evaluation.

---
**(End of Module 2 Topic: Time Domain Specifications for a Second-Order Underdamped System)**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
