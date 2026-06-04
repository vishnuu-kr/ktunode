---
title: "Time response of first order systems (unit impulse, step and ramp inputs) and second order systems (step input only)."
subject: "CONTROL SYSTEMS"
module: "Module 2: Time Domain Analysis of Control Systems:  Standard Test signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe951"
status: "completed"
scrapedAt: "2026-05-23T17:54:38.921Z"
---
# Module 2: Time Domain Analysis of Control Systems: Standard Test Signals

## Topic: Time Response of First and Second Order Systems

---

### Learning Outcomes (LOs)

Upon successful completion of this topic, students will be able to:

*   **LO1:** Understand the concept of transient and steady-state response of control systems.
*   **LO2:** Analyze the time response of first-order systems to standard test signals (unit impulse, step, and ramp).
*   **LO3:** Analyze the time response of second-order systems to a unit step input.
*   **LO4:** Define and calculate time-domain performance metrics for second-order systems.
*   **LO5:** Understand the effect of system parameters (damping ratio and natural frequency) on the time response of second-order systems.

---

### Course Outcomes (COs) Addressed

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)**
    *   This topic directly involves deriving and understanding the time-domain response from the system's transfer function.
*   **CO2: Perform time domain analysis and steady state analysis of systems (Knowledge Level: K2)**
    *   The core of this topic is performing time-domain analysis by examining system behavior over time and understanding steady-state behavior.

---

### 1. Introduction to Time Domain Analysis

**Key Concepts:**

*   **Time Response:** The output of a control system as a function of time, when subjected to a specific input.
*   **Standard Test Signals:** A set of inputs used to evaluate the performance of a control system. Common test signals include:
    *   Step Signal
    *   Ramp Signal
    *   Impulse Signal
    *   Sinusoidal Signal
*   **Transient Response:** The part of the system response that goes to zero as time approaches infinity. It describes how the system behaves immediately after the input is applied.
*   **Steady-State Response:** The part of the system response that remains after the transient response has died out. It describes the system's behavior as time becomes very large.
*   **Total Response:** Transient Response + Steady-State Response.

**Importance:**

Time domain analysis is crucial for understanding how a system behaves in real-time and for predicting its performance under various operating conditions. It helps in determining the speed of response, the amount of overshoot, and the settling time.

---

### 2. Time Response of First-Order Systems

A first-order system is characterized by a single energy storage element, resulting in a first-order differential equation describing its behavior. The standard form of a first-order system's transfer function is:

$$ G(s) = \frac{K}{sT + 1} $$

Where:
*   $K$ is the **DC gain** or **static gain** of the system. It represents the ratio of the steady-state output to the steady-state input.
*   $T$ is the **time constant**. It is a measure of the speed of response. A smaller time constant indicates a faster response. $T = 1/\tau$, where $\tau$ is the pole location.

**Relationship to Textbooks:**

*   **Nagarath & Gopal:** Chapter 4 discusses first-order systems and their response to standard inputs. They emphasize the significance of the time constant.
*   **Kuo & Golnaraghi:** Chapter 4 covers the time response of systems, including first-order systems, and their characteristic equation.
*   **Ogata:** Chapter 2 introduces the modeling of dynamic systems, including first-order systems, and their response to standard inputs.

#### 2.1. Response to Unit Step Input

**Input:** $r(t) = u(t)$ (Unit step function)
**Laplace Transform of Input:** $R(s) = 1/s$

The output $C(s)$ in the Laplace domain is:

$$ C(s) = R(s)G(s) = \frac{1}{s} \cdot \frac{K}{sT + 1} $$

Using partial fraction expansion:

$$ C(s) = \frac{A}{s} + \frac{B}{s + 1/T} $$

Solving for A and B:
$A = K$
$B = -KT$

Therefore,
$$ C(s) = \frac{K}{s} - \frac{KT}{s + 1/T} $$

Taking the inverse Laplace transform:

$$ c(t) = K(1 - e^{-t/T}) $$

**Time Domain Analysis:**

*   **Initial Value:** $c(0) = K(1 - e^0) = K(1 - 1) = 0$. The output starts from zero.
*   **Steady-State Value:** As $t \to \infty$, $e^{-t/T} \to 0$.
    $$ c(\infty) = K(1 - 0) = K $$
    The steady-state output is equal to the DC gain $K$.
*   **Time Constant (T):** At $t = T$, the output is $c(T) = K(1 - e^{-T/T}) = K(1 - e^{-1}) \approx K(1 - 0.368) = 0.632K$.
    **Definition:** The time constant $T$ is the time required for the response to reach 63.2% of its final steady-state value.
*   **Rise Time ($t_r$):** The time taken for the response to rise from 0% to 90% of its final value.
    $$ 0.90K = K(1 - e^{-t_r/T}) $$
    $$ 0.90 = 1 - e^{-t_r/T} $$
    $$ e^{-t_r/T} = 0.10 $$
    $$ -\frac{t_r}{T} = \ln(0.10) \approx -2.3026 $$
    $$ t_r \approx 2.3026T $$
*   **Settling Time ($t_s$):** The time required for the response to settle within a certain percentage (typically 2% or 5%) of its final value.
    *   **For 2% criterion:** $c(t_s) = 0.98K = K(1 - e^{-t_s/T})$
        $$ 0.98 = 1 - e^{-t_s/T} $$
        $$ e^{-t_s/T} = 0.02 $$
        $$ -\frac{t_s}{T} = \ln(0.02) \approx -3.912 $$
        $$ t_s \approx 3.912T $$
    *   **For 5% criterion:** $c(t_s) = 0.95K = K(1 - e^{-t_s/T})$
        $$ 0.95 = 1 - e^{-t_s/T} $$
        $$ e^{-t_s/T} = 0.05 $$
        $$ -\frac{t_s}{T} = \ln(0.05) \approx -2.9957 $$
        $$ t_s \approx 2.9957T \approx 3T $$
    **General Rule:** The settling time is often approximated as $t_s \approx 4T$.

**Example:**
Consider a first-order system with $G(s) = \frac{5}{2s + 1}$.
Here, $K = 5$ and $T = 2$.
For a unit step input:
The response is $c(t) = 5(1 - e^{-t/2})$.
Steady-state value is 5.
Time constant is $T=2$ seconds.
At $t=2s$, $c(2) = 5(1 - e^{-1}) \approx 5 \times 0.632 = 3.16$.
Rise time ($90\%$) $\approx 2.3 \times 2 = 4.6$ seconds.
Settling time ($2\%$) $\approx 3.9 \times 2 = 7.8$ seconds.

**Highlight:** The time constant $T$ is the most critical parameter for a first-order system's time response. Smaller $T$ means faster response.

#### 2.2. Response to Unit Ramp Input

**Input:** $r(t) = tu(t)$ (Unit ramp function)
**Laplace Transform of Input:** $R(s) = 1/s^2$

The output $C(s)$ in the Laplace domain is:

$$ C(s) = R(s)G(s) = \frac{1}{s^2} \cdot \frac{K}{sT + 1} $$

Using partial fraction expansion:

$$ C(s) = \frac{A}{s} + \frac{B}{s^2} + \frac{C}{s + 1/T} $$

Solving for A, B, and C:
$B = K$
$C = -KT^2$
$A = KT$

Therefore,
$$ C(s) = \frac{KT}{s} + \frac{K}{s^2} - \frac{KT^2}{s + 1/T} $$

Taking the inverse Laplace transform:

$$ c(t) = KT + Kt - KT^2 e^{-t/T} $$

**Time Domain Analysis:**

*   **Initial Value:** $c(0) = 0$.
*   **Steady-State Behavior:** As $t \to \infty$, the term $KT^2 e^{-t/T} \to 0$.
    $$ c(t) \approx KT + Kt $$
    The response $c(t)$ grows linearly with time, similar to the input $r(t)=t$, but with a time delay and a constant offset.
*   **Steady-State Error ($e_{ss}$):** The difference between the input and the output in the steady state.
    $$ e(t) = r(t) - c(t) = t - (KT + Kt - KT^2 e^{-t/T}) $$
    $$ e(t) = t - KT - Kt + KT^2 e^{-t/T} $$
    In the steady-state (as $t \to \infty$):
    $$ e_{ss} = \lim_{t \to \infty} e(t) = \lim_{t \to \infty} (t - KT - Kt) $$
    This doesn't seem right. Let's analyze the error term directly:
    $$ e(s) = R(s) - C(s) = R(s) [1 - G(s)] $$
    $$ e(s) = \frac{1}{s^2} \left[ 1 - \frac{K}{sT + 1} \right] = \frac{1}{s^2} \left[ \frac{sT + 1 - K}{sT + 1} \right] $$
    The steady-state error for a ramp input is given by the limit:
    $$ e_{ss} = \lim_{s \to 0} s e(s) = \lim_{s \to 0} s \cdot \frac{1}{s^2} \left[ \frac{sT + 1 - K}{sT + 1} \right] $$
    $$ e_{ss} = \lim_{s \to 0} \frac{1}{s} \left[ \frac{sT + 1 - K}{sT + 1} \right] $$
    This limit goes to infinity if $1-K \neq 0$. This indicates that the system cannot perfectly track a ramp input unless $K=1$.
    Let's re-evaluate the definition of steady-state error for a ramp input. It's usually defined as the difference between the ramp input and the system's output when both are following the ramp.
    $r(t) = t$
    $c(t) = Kt + KT - KT^2 e^{-t/T}$
    In steady-state, $c(t) \approx Kt + KT$.
    The error $e(t) = r(t) - c(t) = t - (Kt + KT) = (1-K)t - KT$.
    This still shows an error that grows with time if $K \neq 1$.
    **Correction:** The steady-state error for a ramp input is typically defined using the **Velocity Error Coefficient ($K_v$)**. For a system $G(s) = \frac{K}{sT+1}$, the velocity error coefficient is:
    $$ K_v = \lim_{s \to 0} s G(s) = \lim_{s \to 0} s \frac{K}{sT+1} = 0 $$
    For a unity feedback system, the steady-state error for a ramp input is $e_{ss} = 1/K_v$. Since $K_v=0$, this suggests an infinite error, which is consistent with the output growing linearly but at a different rate than the input if $K \neq 1$.

    If the system has a pole at the origin (e.g., a Type 1 system), $K_v$ will be finite. For our first-order system with $G(s) = \frac{K}{sT+1}$, it's a Type 0 system.

    **Let's use the formula from textbooks:** For a unity feedback system with input $r(t) = At$ and transfer function $G(s)$, the steady-state error is $e_{ss} = A/K_v$.
    Here, $A=1$.
    $K_v = \lim_{s \to 0} s \cdot G(s) = \lim_{s \to 0} s \cdot \frac{K}{sT+1} = 0$.
    Therefore, $e_{ss} = 1/0 = \infty$. This means a first-order system (Type 0) cannot track a ramp input without an ever-increasing error.

    The output $c(t) = KT + Kt - KT^2 e^{-t/T}$ shows that the output grows linearly with slope $K$. The input grows with slope 1. The difference in slopes is $1-K$. If $K \neq 1$, the error will grow linearly.

**Example:**
Consider $G(s) = \frac{1}{2s + 1}$. ($K=1, T=2$)
For a unit ramp input:
$c(t) = 1(2) + 1t - 1(2^2)e^{-t/2} = 2 + t - 4e^{-t/2}$.
Steady-state behavior: $c(t) \approx t+2$.
The output is a ramp with slope 1, but it lags the input by a constant offset of 2 units.
$e(t) = r(t) - c(t) = t - (t+2) = -2$.
This is incorrect. Let's trace the math again:
$c(t) = KT + Kt - KT^2 e^{-t/T}$
With $K=1, T=2$:
$c(t) = 1(2) + 1(t) - 1(2^2)e^{-t/2} = 2 + t - 4e^{-t/2}$.
The steady-state part of the output is $t+2$.
The input is $r(t) = t$.
Steady-state error $e_{ss} = r(\infty) - c_{ss}(\infty) = \infty - \infty$, which is indeterminate.
The *error function* in the steady state is the difference between the input ramp and the output ramp:
$e_{ss}(t) = r(t) - c_{ss}(t) = t - (t+2) = -2$.
This implies a constant offset error. Let's check the $K_v$ calculation again.
$K_v = \lim_{s \to 0} s G(s) = \lim_{s \to 0} s \frac{1}{2s+1} = 0$.
The formula $e_{ss} = A/K_v$ implies an infinite error for $A=1$.
The discrepancy arises from how "steady-state error" is defined for ramp inputs. If the system can track the ramp with a constant offset, the error is constant. If the slopes differ, the error grows.
For $G(s) = \frac{K}{sT+1}$ and input $r(t)=t$:
$c(t) = Kt + KT - KT^2 e^{-t/T}$.
$c_{ss}(t) = Kt + KT$.
$e_{ss}(t) = r(t) - c_{ss}(t) = t - (Kt + KT) = (1-K)t - KT$.
If $K=1$, $e_{ss}(t) = -T$. This is a constant offset.
If $K \neq 1$, the error grows linearly with time.

**Highlight:** A first-order Type 0 system cannot perfectly track a ramp input. If $K=1$, it tracks with a constant offset. If $K \neq 1$, the error grows linearly.

#### 2.3. Response to Unit Impulse Input

**Input:** $r(t) = \delta(t)$ (Unit impulse function)
**Laplace Transform of Input:** $R(s) = 1$

The output $C(s)$ in the Laplace domain is:

$$ C(s) = R(s)G(s) = 1 \cdot \frac{K}{sT + 1} $$

$$ C(s) = \frac{K}{s + 1/T} $$

Taking the inverse Laplace transform:

$$ c(t) = K e^{-t/T} $$

**Time Domain Analysis:**

*   **Initial Value:** $c(0) = K e^0 = K$. The output starts at $K$.
*   **Steady-State Value:** As $t \to \infty$, $e^{-t/T} \to 0$.
    $$ c(\infty) = 0 $$
    The output decays to zero.
*   **Time Constant (T):** At $t = T$, the output is $c(T) = K e^{-T/T} = K e^{-1} \approx 0.368K$.
    The time constant $T$ represents the time required for the response to decay to 36.8% of its initial value.

**Example:**
Consider $G(s) = \frac{3}{4s + 1}$. ($K=3, T=4$)
For a unit impulse input:
$c(t) = 3e^{-t/4}$.
At $t=0$, $c(0)=3$.
At $t=4$, $c(4) = 3e^{-1} \approx 3 \times 0.368 = 1.104$.
The response decays to zero.

**Highlight:** The impulse response of a first-order system is a decaying exponential, governed by the time constant $T$.

---

### 3. Time Response of Second-Order Systems (Unit Step Input Only)

A second-order system is characterized by two energy storage elements. The standard form of a second-order system's transfer function is:

$$ G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$

Where:
*   $\omega_n$ is the **natural frequency** (in rad/s). It represents the frequency of oscillation of the system if there were no damping. A higher $\omega_n$ means a faster response.
*   $\zeta$ is the **damping ratio**. It is a dimensionless parameter that describes how oscillations decay after a disturbance.
    *   $\zeta < 0$: Unstable system.
    *   $\zeta = 0$: Undamped system (oscillations continue indefinitely).
    *   $0 < \zeta < 1$: Underdamped system (oscillations decay, transient response with overshoot).
    *   $\zeta = 1$: Critically damped system (fastest response without overshoot).
    *   $\zeta > 1$: Overdamped system (slow response, no overshoot, roots are real and distinct).

**Relationship to Textbooks:**

*   **Nagarath & Gopal:** Chapter 4 provides a detailed analysis of second-order systems, categorizing responses based on the damping ratio.
*   **Kuo & Golnaraghi:** Chapter 4 dedicates a significant portion to second-order systems, defining performance metrics and analyzing the effect of $\zeta$ and $\omega_n$.
*   **Ogata:** Chapter 2 analyzes standard second-order systems and their transient response characteristics.

**The characteristic equation of a second-order system is:**
$$ s^2 + 2\zeta\omega_n s + \omega_n^2 = 0 $$
The poles of the system are given by:
$$ s = \frac{-2\zeta\omega_n \pm \sqrt{(2\zeta\omega_n)^2 - 4\omega_n^2}}{2} = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2} $$
Let $\omega_d = \omega_n\sqrt{1-\zeta^2}$, where $\omega_d$ is the **damped natural frequency**.
So, the poles are $s = -\zeta\omega_n \pm j\omega_d$.

#### 3.1. Response to Unit Step Input ($R(s) = 1/s$)

For a standard second-order system with unity feedback and transfer function $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$, the output $C(s)$ is:

$$ C(s) = R(s)G(s) = \frac{1}{s} \cdot \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$

The response $c(t)$ depends on the value of $\zeta$.

**Case 1: Underdamped System ($0 < \zeta < 1$)**

The poles are complex conjugates: $s = -\zeta\omega_n \pm j\omega_d$.
The output response is:

$$ c(t) = 1 - \frac{e^{-\zeta\omega_n t}}{\sqrt{1-\zeta^2}} \sin(\omega_d t + \phi) $$

Where $\phi = \arctan\left(\frac{\sqrt{1-\zeta^2}}{\zeta}\right)$.

This response is oscillatory with an amplitude that decays exponentially.

**Time-Domain Performance Metrics for Underdamped Systems:**

*   **Delay Time ($t_d$):** The time taken for the response to reach 50% of its final value (which is 1 for a unit step).
    $$ t_d = \frac{1 + 0.7\zeta}{\omega_n} $$

*   **Rise Time ($t_r$):** The time taken for the response to rise from 10% to 90% of its final value. For a standard second-order system, it's often approximated as the time to reach the first peak.
    The first peak occurs when $\omega_d t = \pi$, so $t = \pi/\omega_d$.
    $$ t_r = \frac{\pi - \phi}{\omega_d} = \frac{\pi - \arctan\left(\frac{\sqrt{1-\zeta^2}}{\zeta}\right)}{\omega_n\sqrt{1-\zeta^2}} $$
    A more common approximation, especially when $\phi$ is close to $\pi/2$, is:
    $$ t_r \approx \frac{\pi}{\omega_n} $$
    *Note: The exact definition of rise time (10%-90%) is more complex and depends on $\zeta$. The $\pi/\omega_n$ approximation is useful for general comparison.*

*   **Peak Time ($t_p$):** The time taken to reach the first peak overshoot. This occurs when the derivative of $c(t)$ is zero.
    $$ t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}} $$

*   **Maximum Overshoot ($M_p$):** The maximum difference between the peak value of the response and the steady-state value, expressed as a percentage of the steady-state value.
    The peak value is $c(t_p) = 1 + M_p$.
    $$ M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} $$
    The peak overshoot is often expressed as:
    $$ \% M_p = M_p \times 100\% = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100\% $$

*   **Settling Time ($t_s$):** The time required for the response to settle within a specified tolerance band (e.g., 2% or 5%) of the final steady-state value.
    The term that decays is $e^{-\zeta\omega_n t}$.
    *   **For 2% criterion:** We need $e^{-\zeta\omega_n t_s} = 0.02$.
        $$ -\zeta\omega_n t_s = \ln(0.02) \approx -3.912 $$
        $$ t_s \approx \frac{3.912}{\zeta\omega_n} \approx \frac{4}{\zeta\omega_n} $$
    *   **For 5% criterion:** We need $e^{-\zeta\omega_n t_s} = 0.05$.
        $$ -\zeta\omega_n t_s = \ln(0.05) \approx -2.9957 $$
        $$ t_s \approx \frac{2.9957}{\zeta\omega_n} \approx \frac{3}{\zeta\omega_n} $$
    **General Approximation:** $t_s \approx \frac{4}{\zeta\omega_n}$.

**Effect of $\zeta$ and $\omega_n$ on Underdamped Response:**

*   **Increasing $\omega_n$ (for constant $\zeta$):** Speeds up the response. $t_r, t_p, t_s$ decrease. $M_p$ remains the same.
*   **Increasing $\zeta$ (for constant $\omega_n$):**
    *   Decreases overshoot ($M_p$).
    *   Increases settling time ($t_s$) and delay time ($t_d$).
    *   Decreases rise time ($t_r$) initially, but then increases it after a certain point. Critically, it makes the response less oscillatory.

**Case 2: Critically Damped System ($\zeta = 1$)**

The poles are real and identical: $s = -\omega_n$.
The transfer function becomes:
$$ G(s) = \frac{\omega_n^2}{s^2 + 2\omega_n s + \omega_n^2} = \frac{\omega_n^2}{(s + \omega_n)^2} $$
For a unit step input:
$$ C(s) = \frac{1}{s} \cdot \frac{\omega_n^2}{(s + \omega_n)^2} $$
Using partial fractions, the response is:
$$ c(t) = 1 - e^{-\omega_n t} - \omega_n t e^{-\omega_n t} $$

**Characteristics:**
*   Fastest response without any overshoot.
*   $t_r \approx 1.5/\omega_n$.
*   $t_s \approx 4/\omega_n$ (for 2% criterion).

**Case 3: Overdamped System ($\zeta > 1$)**

The poles are real and distinct: $s = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2-1}$.
The response is a sum of two decaying exponentials. It is slower than critically damped and has no overshoot.
$$ c(t) = 1 - \frac{1}{\sqrt{\zeta^2-1}} \left( e^{(-\zeta\omega_n + \omega_n\sqrt{\zeta^2-1})t} - e^{(-\zeta\omega_n - \omega_n\sqrt{\zeta^2-1})t} \right) $$

**Characteristics:**
*   Slow response.
*   No overshoot.
*   Longer settling time compared to critically damped systems.

**Case 4: Undamped System ($\zeta = 0$)**

The poles are purely imaginary: $s = \pm j\omega_n$.
The transfer function is $G(s) = \frac{\omega_n^2}{s^2 + \omega_n^2}$.
For a unit step input:
$$ C(s) = \frac{1}{s} \cdot \frac{\omega_n^2}{s^2 + \omega_n^2} = \frac{1}{s} - \frac{s}{s^2 + \omega_n^2} $$
$$ c(t) = 1 - \cos(\omega_n t) $$

**Characteristics:**
*   Oscillatory response with constant amplitude.
*   Infinite overshoot.
*   Infinite settling time.

**Case 5: Unstable System ($\zeta < 0$)**

The poles have positive real parts, leading to an exponentially growing response. The system is unstable and the output will grow unbounded.

**Summary of Second-Order System Responses to Unit Step:**

| Damping Ratio ($\zeta$) | Nature of Response   | Overshoot ($M_p$) | Rise Time ($t_r$) | Settling Time ($t_s$) |
| :----------------------- | :------------------- | :---------------- | :---------------- | :-------------------- |
| $\zeta < 0$              | Unstable             | Unbounded         | N/A               | N/A                   |
| $\zeta = 0$              | Undamped (Oscillatory)| Infinite          | Minimum           | Infinite              |
| $0 < \zeta < 1$          | Underdamped          | $> 0$, decays     | Increases with $\zeta$ | Increases with $\zeta$  |
| $\zeta = 1$              | Critically Damped    | 0                 | Faster than $\zeta>1$ | Faster than $\zeta>1$ |
| $\zeta > 1$              | Overdamped           | 0                 | Slowest           | Slowest               |

**Highlight:** The damping ratio $\zeta$ is the primary factor determining the quality of the transient response (overshoot and oscillation). The natural frequency $\omega_n$ primarily affects the speed of the response.

---

### 4. Practice Questions and Answers

**Question 1 (First-Order System):**
A first-order system has the transfer function $G(s) = \frac{10}{3s + 1}$.
(a) Identify the DC gain ($K$) and the time constant ($T$).
(b) If a unit step input is applied, what is the steady-state output?
(c) Calculate the time required for the output to reach 63.2% of its steady-state value.
(d) Estimate the settling time (2% criterion).

**Answer 1:**
(a) $G(s) = \frac{10}{3s + 1} = \frac{10/1}{(3/1)s + 1}$. Comparing with $\frac{K}{sT + 1}$, we get $K = 10$ and $T = 3$.
(b) The steady-state output for a unit step input is equal to the DC gain, so $c_{ss} = K = 10$.
(c) The time required to reach 63.2% of the steady-state value is the time constant, $T = 3$ seconds.
(d) The settling time (2% criterion) is approximately $t_s \approx 4T = 4 \times 3 = 12$ seconds.

---

**Question 2 (First-Order System):**
For a first-order system $G(s) = \frac{1}{s+1}$ subjected to a unit ramp input $r(t)=t$.
(a) Determine the system's steady-state output response $c_{ss}(t)$.
(b) Calculate the steady-state error $e_{ss}(t)$ (constant offset, if any).

**Answer 2:**
The system has $K=1$ and $T=1$.
The response to a unit ramp input is $c(t) = KT + Kt - KT^2 e^{-t/T}$.
Substituting $K=1, T=1$:
$c(t) = 1(1) + 1(t) - 1(1^2)e^{-t/1} = 1 + t - e^{-t}$.
(a) The steady-state output is $c_{ss}(t) = 1 + t$.
(b) The input is $r(t) = t$.
The steady-state error is $e_{ss}(t) = r(t) - c_{ss}(t) = t - (1+t) = -1$.
This is a constant steady-state error of -1.

---

**Question 3 (Second-Order System):**
A second-order system has the transfer function $G(s) = \frac{16}{s^2 + 8s + 16}$. Determine the nature of the system and calculate the time-domain performance metrics: rise time ($t_r$), peak time ($t_p$), and maximum overshoot ($M_p$). Assume a unit step input.

**Answer 3:**
The characteristic equation is $s^2 + 8s + 16 = 0$.
Comparing with $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$:
$\omega_n^2 = 16 \implies \omega_n = 4$ rad/s.
$2\zeta\omega_n = 8 \implies 2\zeta(4) = 8 \implies 8\zeta = 8 \implies \zeta = 1$.
The system is **critically damped**.

For critically damped systems:
*   **Rise Time ($t_r$):** There isn't a simple formula like the underdamped case. However, the response is the fastest without overshoot. A common approximation for the time to reach the final value is related to $1/\omega_n$.
*   **Peak Time ($t_p$):** Not applicable as there is no overshoot.
*   **Maximum Overshoot ($M_p$):** 0%.

Let's calculate the response for $c(t) = 1 - e^{-\omega_n t} - \omega_n t e^{-\omega_n t}$ with $\omega_n=4$:
$c(t) = 1 - e^{-4t} - 4t e^{-4t}$.
The response reaches its final value of 1. Let's find the time to reach, say, 90% of the final value.
$0.9 = 1 - e^{-4t} - 4t e^{-4t}$
$e^{-4t} (1 + 4t) = 0.1$.
By trial and error or numerical methods, $t \approx 0.55$ seconds for 90%. This can be considered an approximation for rise time.

---

**Question 4 (Second-Order System):**
A second-order system has the transfer function $G(s) = \frac{9}{s^2 + 4s + 9}$. If a unit step input is applied:
(a) Calculate the natural frequency ($\omega_n$) and damping ratio ($\zeta$).
(b) Determine the nature of the system's response.
(c) Calculate the peak time ($t_p$), maximum overshoot ($M_p$), and settling time ($t_s$ for 2% criterion).

**Answer 4:**
Comparing $G(s) = \frac{9}{s^2 + 4s + 9}$ with the standard form $\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$:
(a) $\omega_n^2 = 9 \implies \omega_n = 3$ rad/s.
$2\zeta\omega_n = 4 \implies 2\zeta(3) = 4 \implies 6\zeta = 4 \implies \zeta = 4/6 = 2/3 \approx 0.667$.

(b) Since $0 < \zeta < 1$, the system is **underdamped**.

(c)
*   **Damped natural frequency:** $\omega_d = \omega_n\sqrt{1-\zeta^2} = 3\sqrt{1 - (2/3)^2} = 3\sqrt{1 - 4/9} = 3\sqrt{5/9} = 3 \frac{\sqrt{5}}{3} = \sqrt{5}$ rad/s.
*   **Peak time ($t_p$):** $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\sqrt{5}} \approx \frac{3.14159}{2.236} \approx 1.405$ seconds.
*   **Maximum Overshoot ($M_p$):**
    $M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} = e^{-\frac{(2/3)\pi}{\sqrt{5}/3}} = e^{-\frac{2\pi}{\sqrt{5}}} \approx e^{-2.8099} \approx 0.0603$.
    $\% M_p = 0.0603 \times 100\% = 6.03\%$.
*   **Settling Time ($t_s$ for 2% criterion):** $t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{(2/3) \times 3} = \frac{4}{2} = 2$ seconds.

---

### 5. Important Points to Remember

*   **First-Order System:** Characterized by a time constant $T$. Response is governed by $e^{-t/T}$. Faster response for smaller $T$.
*   **Second-Order System:** Characterized by $\omega_n$ (speed) and $\zeta$ (damping/quality of response).
    *   $0 < \zeta < 1$: Underdamped (oscillations, overshoot). Performance metrics: $t_r, t_p, M_p, t_s$.
    *   $\zeta = 1$: Critically damped (fastest response without overshoot).
    *   $\zeta > 1$: Overdamped (slow, no overshoot).
    *   $\zeta = 0$: Undamped (sustained oscillations).
    *   $\zeta < 0$: Unstable.
*   **Performance Metrics:** Understand how $t_r, t_p, M_p, t_s$ are defined and calculated for second-order systems.
*   **Parameter Effects:** Know how changes in $\omega_n$ and $\zeta$ affect the time-domain performance of second-order systems. Increasing $\omega_n$ speeds up response; increasing $\zeta$ reduces overshoot but slows down the response and increases settling time.

---
This concludes the study notes for the time response of first and second-order systems. Ensure you can derive these responses and understand the impact of system parameters on performance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
