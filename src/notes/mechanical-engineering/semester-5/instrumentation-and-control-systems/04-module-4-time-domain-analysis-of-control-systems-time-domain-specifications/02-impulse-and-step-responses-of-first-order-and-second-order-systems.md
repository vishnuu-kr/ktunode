---
title: "Impulse and Step responses of first order and second order systems."
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 4: Time domain analysis of control systems: Time domain specifications"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446367d"
status: "completed"
scrapedAt: "2026-05-20T18:00:45.503Z"
---
# Module 4: Time Domain Analysis of Control Systems: Time Domain Specifications

## 1. Introduction to Time Domain Analysis

**Objective:** To understand how control systems behave over time in response to various inputs, particularly impulse and step inputs. This is crucial for evaluating system performance and stability.

**Key Concepts:**
*   **System Response:** The output of a control system as a function of time.
*   **Input Signals:** Standard signals used to test system behavior (e.g., step, impulse, ramp, sinusoidal).
*   **Transient Response:** The part of the system response that starts at time t=0 and ends when the system reaches its steady state.
*   **Steady-State Response:** The part of the system response that remains after the transient response has died out.

**Relevance to Course Outcomes:**
*   **CO5 (K4):** This module directly addresses the analysis of time domain responses of linear systems.
*   **CO6 (K4):** Understanding transient behavior is fundamental to assessing the stability of a system.

**Textbook References:**
*   Nise N.S., Chapter 4: Time Response Analysis (Control Systems Engineering)
*   Ogata K., Chapter 2: Time Response Analysis of Second-Order and General Linear Systems (Modern Control Engineering)

---

## 2. Time Domain Specifications

**Objective:** To define and understand the key metrics used to quantify the performance of a control system in the time domain. These specifications are derived from the system's response to standard inputs, primarily the step input.

**Key Concepts & Definitions:**

*   **Delay Time ($t_d$):** The time taken for the response to reach 50% of its final value for the first time. (Relevant for overdamped and critically damped systems).
*   **Rise Time ($t_r$):** The time taken for the response to rise from 10% to 90% of its final value. For underdamped systems, it's typically from 0% to 100% of the final value. A shorter rise time indicates a faster system.
*   **Peak Time ($t_p$):** The time taken for the response to reach its first peak (maximum overshoot).
*   **Maximum Overshoot (%OS):** The maximum percentage by which the response exceeds its final steady-state value. It indicates the oscillatory nature of the system.
    *   Formula: $\%OS = \frac{y_{max} - y_{ss}}{y_{ss}} \times 100\%$
*   **Settling Time ($t_s$):** The time taken for the response to settle within a specified tolerance band (usually ±2% or ±5%) of its final steady-state value. It indicates how quickly the system becomes steady.

**Important Points to Remember:**
*   These specifications are most commonly defined for the step response.
*   A system that meets these specifications is generally considered "well-behaved" in the time domain.
*   A trade-off often exists between rise time and overshoot/settling time. Faster systems tend to have higher overshoot.

**Textbook References:**
*   Nise N.S., Section 4.2: Characteristics of Transient Response (Control Systems Engineering)
*   Ogata K., Section 2.4: Steady-state error, Section 2.5: Transient response specifications (Modern Control Engineering)
*   Doebelin E.O., Chapter 9: Dynamic Characteristics of Measurement Systems (Measurement Systems Applications and Design) - Discusses transient response characteristics.

---

## 3. First-Order Systems

**Objective:** To analyze the impulse and step responses of a standard first-order linear time-invariant (LTI) system and relate its parameters to the time domain specifications.

**System Representation:**
The standard transfer function of a first-order system is given by:
$G(s) = \frac{K}{s + a}$
or in a more common form:
$G(s) = \frac{K}{1 + \tau s}$
where:
*   $K$ is the **DC Gain** (steady-state value of the output when the input is a unit step).
*   $\tau$ is the **Time Constant**. It is a measure of the speed of response. A larger $\tau$ means a slower response.

**Relationship between Parameters:**
*   $a = \frac{1}{\tau}$

**3.1. Step Response of a First-Order System**

**Input:** Unit step function, $R(s) = \frac{1}{s}$

**Output in Laplace Domain:** $Y(s) = G(s)R(s) = \frac{K}{1 + \tau s} \cdot \frac{1}{s}$

**Partial Fraction Expansion:**
$Y(s) = \frac{K}{s(1 + \tau s)} = \frac{A}{s} + \frac{B}{1 + \tau s}$
$1 = A(1 + \tau s) + Bs$

Let $s=0 \implies 1 = A(1) \implies A = 1$
Let $s = -1/\tau \implies 1 = B(-1/\tau) \implies B = -\tau$

So, $Y(s) = \frac{1}{s} - \frac{\tau}{1 + \tau s} = \frac{1}{s} - \frac{1}{1/\tau + s}$

**Output in Time Domain:**
Taking the inverse Laplace transform:
$y(t) = \mathcal{L}^{-1}\{Y(s)\} = 1 - e^{-t/\tau}$ for $t \ge 0$.

**Analysis of Step Response:**
*   **Steady-State Value:** As $t \to \infty$, $y(t) \to 1$. If the DC gain $K \ne 1$, then $y_{ss} = K$. So, $y(t) = K(1 - e^{-t/\tau})$. The final value is $K$.
*   **Time Constant ($\tau$):**
    *   At $t = \tau$, $y(\tau) = K(1 - e^{-1}) \approx K(1 - 0.368) = 0.632K$. The output reaches 63.2% of its final value.
    *   At $t = 5\tau$, $y(5\tau) = K(1 - e^{-5}) \approx K(1 - 0.0067) = 0.993K$. The output reaches 99.3% of its final value. This is often considered the settling time for a 2% criterion.

**Time Domain Specifications for Step Response (assuming $K=1$ for simplicity):**
*   **Delay Time ($t_d$):** The response reaches 50% of its final value when $0.5 = 1 - e^{-t_d/\tau} \implies e^{-t_d/\tau} = 0.5 \implies -t_d/\tau = \ln(0.5) = -0.693$.
    $t_d = 0.693\tau$
*   **Rise Time ($t_r$):** The time to go from 10% to 90% of the final value.
    *   $0.1 = 1 - e^{-t_{10\%}/\tau} \implies e^{-t_{10\%}/\tau} = 0.9 \implies t_{10\%} = -\tau \ln(0.9) = 0.105\tau$
    *   $0.9 = 1 - e^{-t_{90\%}/\tau} \implies e^{-t_{90\%}/\tau} = 0.1 \implies t_{90\%} = -\tau \ln(0.1) = 2.303\tau$
    $t_r = t_{90\%} - t_{10\%} = 2.303\tau - 0.105\tau = 2.198\tau \approx 2.2\tau$
*   **Settling Time ($t_s$):**
    *   For a 2% tolerance band: $y(t_s) = 0.98$. $0.98 = 1 - e^{-t_s/\tau} \implies e^{-t_s/\tau} = 0.02 \implies -t_s/\tau = \ln(0.02) = -3.912$.
        $t_s \approx 3.912\tau \approx 4\tau$
    *   For a 5% tolerance band: $y(t_s) = 0.95$. $0.95 = 1 - e^{-t_s/\tau} \implies e^{-t_s/\tau} = 0.05 \implies -t_s/\tau = \ln(0.05) = -2.996$.
        $t_s \approx 2.996\tau \approx 3\tau$
*   **Maximum Overshoot:** For a first-order system, the response is monotonic, so there is **no overshoot**. $\%OS = 0\%$.

**3.2. Impulse Response of a First-Order System**

**Input:** Unit impulse function, $R(s) = 1$

**Output in Laplace Domain:** $Y(s) = G(s)R(s) = \frac{K}{1 + \tau s}$

**Output in Time Domain:**
Taking the inverse Laplace transform:
$y(t) = \mathcal{L}^{-1}\{Y(s)\} = \frac{K}{\tau} e^{-t/\tau}$ for $t \ge 0$.

**Analysis of Impulse Response:**
*   **Initial Value:** $y(0) = K/\tau$.
*   **Steady-State Value:** As $t \to \infty$, $y(t) \to 0$.
*   **Time Constant ($\tau$):** The response decays exponentially. At $t=\tau$, the amplitude is $(K/\tau)e^{-1} \approx 0.368(K/\tau)$.

**Example 1:**
Consider a first-order system with transfer function $G(s) = \frac{5}{2s + 1}$.
Find the time constant, DC gain, and analyze its unit step response.

**Solution:**
Rewrite $G(s)$ in the standard form $\frac{K}{1 + \tau s}$:
$G(s) = \frac{5}{1 + 2s} = \frac{5}{1 + 2s}$
Here, $K = 5$ and $\tau = 2$ seconds.

*   **Time Constant ($\tau$):** 2 seconds.
*   **DC Gain ($K$):** 5.

**Unit Step Response:** $y(t) = K(1 - e^{-t/\tau}) = 5(1 - e^{-t/2})$

*   **Steady-state value:** $y_{ss} = 5$.
*   **Time to reach 63.2% of final value:** $t = \tau = 2$ seconds. $y(2) = 5(1 - e^{-1}) \approx 5 \times 0.632 = 3.16$.
*   **Settling time (approx. 2%):** $t_s \approx 4\tau = 4 \times 2 = 8$ seconds. $y(8) = 5(1 - e^{-8/2}) = 5(1 - e^{-4}) \approx 5(1 - 0.0183) = 4.9085$.
*   **Rise time (approx. 10% to 90%):** $t_r \approx 2.2\tau = 2.2 \times 2 = 4.4$ seconds.

**Course Outcome Alignment:**
*   **CO5 (K4):** Analyzing these responses and calculating specifications demonstrates an understanding of time domain analysis.

**Textbook References:**
*   Nise N.S., Section 4.1: First-Order Systems (Control Systems Engineering)
*   Ogata K., Section 2.1: First-order systems (Modern Control Engineering)
*   Kuo B.C., Chapter 3: Transient response analysis of linear systems (Automatic Control Systems)

---

## 4. Second-Order Systems

**Objective:** To analyze the impulse and step responses of standard second-order LTI systems and understand how parameters like damping ratio and natural frequency affect performance.

**System Representation:**
The standard transfer function of a second-order system is given by:
$G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$
where:
*   $\omega_n$ is the **undamped natural frequency** (in rad/sec). It represents the frequency of oscillation if there were no damping.
*   $\zeta$ is the **damping ratio**. It is a dimensionless parameter that describes how oscillations decay after a disturbance.

**Classification based on Damping Ratio ($\zeta$):**
The nature of the roots of the characteristic equation ($s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$) determines the system's response:

1.  **Undamped System ($\zeta = 0$):**
    *   Roots: $s = \pm j\omega_n$. Purely imaginary.
    *   Response: Sustained oscillations at frequency $\omega_n$.

2.  **Underdamped System ($0 < \zeta < 1$):**
    *   Roots: $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$. Complex conjugate roots.
    *   Response: Oscillatory response that decays over time. This is the most common case studied.

3.  **Critically Damped System ($\zeta = 1$):**
    *   Roots: $s = -\omega_n, -\omega_n$. Repeated real roots.
    *   Response: Fastest possible response without overshoot.

4.  **Overdamped System ($\zeta > 1$):**
    *   Roots: $s = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2-1}$. Distinct real roots.
    *   Response: Slow response with no oscillations.

**Important Parameters for Underdamped Systems ($0 < \zeta < 1$):**

*   **Damped Natural Frequency ($\omega_d$):** The frequency of oscillation in the underdamped response.
    $\omega_d = \omega_n\sqrt{1-\zeta^2}$

**4.1. Step Response of a Second-Order System**

**Input:** Unit step function, $R(s) = \frac{1}{s}$

**Output in Laplace Domain:** $Y(s) = G(s)R(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} \cdot \frac{1}{s}$

**Output in Time Domain (for $0 < \zeta < 1$):**
$y(t) = 1 - \frac{e^{-\zeta\omega_n t}}{\sqrt{1-\zeta^2}} \sin(\omega_d t + \phi)$
where $\phi = \arctan\left(\frac{\sqrt{1-\zeta^2}}{\zeta}\right) = \arccos(\zeta)$.

The response can be written as:
$y(t) = 1 - e^{-\zeta\omega_n t} \left( \cos(\omega_d t) + \frac{\zeta}{\sqrt{1-\zeta^2}} \sin(\omega_d t) \right)$

**Analysis of Step Response and Time Domain Specifications (for $0 < \zeta < 1$):**

*   **Steady-State Value:** As $t \to \infty$, $y(t) \to 1$. (Assuming the DC gain $K=1$). If the transfer function is $G(s) = \frac{K\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$, then $y_{ss} = K$.

*   **Peak Time ($t_p$):** The time at which the first peak occurs is found by setting the derivative of $y(t)$ to zero.
    $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}}$

*   **Maximum Overshoot (%OS):** The maximum value of $y(t)$ occurs at $t_p$.
    $y_{max} = 1 + e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}}$
    $\%OS = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100\%$
    This can also be expressed as: $\%OS = e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} \times 100\%$.
    Alternatively, using the phase angle $\phi$: $y_{max} = 1 + e^{-\zeta\omega_n t_p}$.
    $\%OS = e^{-\zeta\pi/\sqrt{1-\zeta^2}} \times 100\%$.

*   **Rise Time ($t_r$):** The time taken to rise from 0% to 100% of the final value for an underdamped second-order system.
    $t_r = \frac{\pi - \phi}{\omega_d} = \frac{\pi - \arccos(\zeta)}{\omega_n\sqrt{1-\zeta^2}}$
    Approximation: $t_r \approx \frac{1.8}{\omega_n}$ for small $\zeta$.

*   **Settling Time ($t_s$):** The time taken to settle within a tolerance band. The exponential decay term is $e^{-\zeta\omega_n t}$.
    *   For a 2% tolerance band: $e^{-\zeta\omega_n t_s} = 0.02 \implies -\zeta\omega_n t_s = \ln(0.02) \approx -3.912$.
        $t_s \approx \frac{3.912}{\zeta\omega_n} \approx \frac{4}{\zeta\omega_n}$
    *   For a 5% tolerance band: $e^{-\zeta\omega_n t_s} = 0.05 \implies -\zeta\omega_n t_s = \ln(0.05) \approx -2.996$.
        $t_s \approx \frac{2.996}{\zeta\omega_n} \approx \frac{3}{\zeta\omega_n}$

**Summary Table for Step Response Specifications ($0 < \zeta < 1$, $K=1$):**

| Specification     | Formula                                               | Dependence on $\zeta$ and $\omega_n$ |
| :---------------- | :---------------------------------------------------- | :----------------------------------- |
| Peak Time ($t_p$) | $\frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}}$ | Decreases as $\zeta$ increases, Decreases as $\omega_n$ increases |
| Max Overshoot     | $e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} \times 100\%$  | Decreases significantly as $\zeta$ increases, Independent of $\omega_n$ |
| Rise Time ($t_r$) | $\frac{\pi - \arccos(\zeta)}{\omega_n\sqrt{1-\zeta^2}}$ | Decreases as $\zeta$ increases (for small $\zeta$), Decreases as $\omega_n$ increases |
| Settling Time ($t_s$, 2%) | $\frac{4}{\zeta\omega_n}$                               | Increases as $\zeta$ decreases, Decreases as $\omega_n$ increases |
| Settling Time ($t_s$, 5%) | $\frac{3}{\zeta\omega_n}$                               | Increases as $\zeta$ decreases, Decreases as $\omega_n$ increases |

**Impact of $\zeta$ and $\omega_n$:**
*   **$\omega_n$:** Primarily affects the speed of the response. Higher $\omega_n$ leads to faster responses (smaller $t_p, t_r, t_s$).
*   **$\zeta$:** Primarily affects the overshoot and settling time.
    *   As $\zeta$ increases from 0 to 1:
        *   Overshoot decreases.
        *   Settling time decreases (until $\zeta=1$, then it may increase slightly due to slower rise).
        *   Rise time increases.
    *   $\zeta = 0$: Undamped, sustained oscillations.
    *   $\zeta = 1$: Critically damped, fastest response without overshoot.
    *   $\zeta > 1$: Overdamped, slow response without overshoot.

**4.2. Impulse Response of a Second-Order System**

**Input:** Unit impulse function, $R(s) = 1$

**Output in Laplace Domain:** $Y(s) = G(s)R(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$

**Output in Time Domain (for $0 < \zeta < 1$):**
$y(t) = \frac{\omega_n^2}{\omega_d} e^{-\zeta\omega_n t} \sin(\omega_d t)$
$y(t) = \omega_n \frac{e^{-\zeta\omega_n t}}{\sqrt{1-\zeta^2}} \sin(\omega_d t)$

**Analysis of Impulse Response:**
*   **Initial Value:** $y(0) = 0$.
*   **Steady-State Value:** As $t \to \infty$, $y(t) \to 0$.
*   **Oscillation:** The response oscillates with a damped frequency $\omega_d$.

**Example 2:**
Consider a second-order system with transfer function $G(s) = \frac{16}{s^2 + 4s + 16}$.
Determine the damping ratio, natural frequency, and analyze its unit step response.

**Solution:**
The standard form is $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.
Comparing the given transfer function:
$\omega_n^2 = 16 \implies \omega_n = 4$ rad/sec.
$2\zeta\omega_n = 4$
$2\zeta(4) = 4 \implies 8\zeta = 4 \implies \zeta = 0.5$.

Since $0 < \zeta < 1$, the system is underdamped.

*   **$\omega_n$**: 4 rad/sec
*   **$\zeta$**: 0.5

**Analysis of Unit Step Response:**
*   **Steady-State Value:** $K=1$, so $y_{ss} = 1$.
*   **Damped Natural Frequency ($\omega_d$):**
    $\omega_d = \omega_n\sqrt{1-\zeta^2} = 4\sqrt{1 - (0.5)^2} = 4\sqrt{1 - 0.25} = 4\sqrt{0.75} = 4 \frac{\sqrt{3}}{2} = 2\sqrt{3} \approx 3.464$ rad/sec.
*   **Peak Time ($t_p$):**
    $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{2\sqrt{3}} \approx \frac{3.14159}{3.464} \approx 0.9065$ seconds.
*   **Maximum Overshoot (%OS):**
    $\%OS = e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} \times 100\% = e^{-\frac{0.5 \pi}{\sqrt{1-(0.5)^2}}} \times 100\% = e^{-\frac{0.5 \pi}{\sqrt{0.75}}} \times 100\% = e^{-\frac{0.5 \pi}{\sqrt{3}/2}} \times 100\%$
    $\%OS = e^{-\frac{\pi}{\sqrt{3}}} \times 100\% = e^{-1.8138} \times 100\% \approx 0.163 \times 100\% = 16.3\%$.
*   **Rise Time ($t_r$):**
    $t_r = \frac{\pi - \arccos(\zeta)}{\omega_d} = \frac{\pi - \arccos(0.5)}{2\sqrt{3}} = \frac{\pi - \pi/3}{2\sqrt{3}} = \frac{2\pi/3}{2\sqrt{3}} = \frac{\pi}{3\sqrt{3}} \approx \frac{3.14159}{5.196} \approx 0.6046$ seconds.
*   **Settling Time ($t_s$, 2%):**
    $t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{0.5 \times 4} = \frac{4}{2} = 2$ seconds.

**Course Outcome Alignment:**
*   **CO5 (K4):** This analysis directly applies to understanding the impact of system parameters on time domain responses.

**Textbook References:**
*   Nise N.S., Section 4.3: Second-Order Systems (Control Systems Engineering)
*   Ogata K., Section 2.2: Second-order systems (Modern Control Engineering)
*   Patranabis D., Chapter 4: Transient and steady state analysis of linear systems (Principles of Industrial Instrumentation) - Discusses second-order system characteristics.

---

## 5. Practice Questions and Exercises

**Instructions:** Solve the following problems.

**Question 1 (First-Order System):**
A system has the transfer function $G(s) = \frac{10}{s+5}$.
a) Identify the time constant and DC gain.
b) What is the steady-state value of the unit step response?
c) Calculate the delay time ($t_d$), rise time ($t_r$, 10%-90%), and settling time ($t_s$, 2%) for the unit step response.
d) Sketch the unit step response.

**Answer 1:**
a) Time constant $\tau = 1/5 = 0.2$ seconds. DC gain $K = 10$.
b) Steady-state value $y_{ss} = K = 10$.
c)
    *   $t_d = 0.693\tau = 0.693 \times 0.2 = 0.1386$ seconds.
    *   $t_r = 2.2\tau = 2.2 \times 0.2 = 0.44$ seconds.
    *   $t_s = 4\tau = 4 \times 0.2 = 0.8$ seconds.
d) The step response starts at 0, increases exponentially towards 10, reaching 63.2% (6.32) at 0.2s, and settling to 10 around 0.8s. It's a smooth, non-oscillatory curve.

**Question 2 (Second-Order System):**
A second-order system is described by the differential equation: $\frac{d^2y}{dt^2} + 6\frac{dy}{dt} + 100y = 100u$, where $y$ is the output and $u$ is the input.
a) Find the transfer function of the system.
b) Determine the undamped natural frequency ($\omega_n$) and the damping ratio ($\zeta$).
c) Classify the system's response (underdamped, critically damped, etc.).
d) Calculate the peak time ($t_p$), maximum overshoot (%OS), rise time ($t_r$, 0%-100%), and settling time ($t_s$, 2%) for the unit step response.

**Answer 2:**
a) The characteristic equation is $s^2 + 6s + 100 = 0$. The transfer function is $G(s) = \frac{100}{s^2 + 6s + 100}$.
b) Comparing with $\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$:
    $\omega_n^2 = 100 \implies \omega_n = 10$ rad/sec.
    $2\zeta\omega_n = 6 \implies 2\zeta(10) = 6 \implies 20\zeta = 6 \implies \zeta = 0.3$.
c) Since $0 < \zeta = 0.3 < 1$, the system is **underdamped**.
d)
    *   $\omega_d = \omega_n\sqrt{1-\zeta^2} = 10\sqrt{1-(0.3)^2} = 10\sqrt{1-0.09} = 10\sqrt{0.91} \approx 9.539$ rad/sec.
    *   $t_p = \frac{\pi}{\omega_d} = \frac{\pi}{9.539} \approx 0.329$ seconds.
    *   $\%OS = e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} \times 100\% = e^{-\frac{0.3 \pi}{\sqrt{0.91}}} \times 100\% = e^{-1.027} \times 100\% \approx 0.358 \times 100\% = 35.8\%$.
    *   $t_r = \frac{\pi - \arccos(\zeta)}{\omega_d} = \frac{\pi - \arccos(0.3)}{9.539} = \frac{\pi - 1.266}{9.539} \approx \frac{1.8755}{9.539} \approx 0.1966$ seconds.
    *   $t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{0.3 \times 10} = \frac{4}{3} \approx 1.33$ seconds.

**Question 3 (Conceptual):**
How does increasing the damping ratio ($\zeta$) of a second-order system affect its step response in terms of:
a) Rise Time
b) Maximum Overshoot
c) Settling Time

**Answer 3:**
a) **Rise Time:** Increases. A more damped system is slower to reach its final value.
b) **Maximum Overshoot:** Decreases significantly. Damping suppresses oscillations.
c) **Settling Time:** Decreases. Damping helps the system converge to its steady-state value more quickly.

---

## 6. Important Points to Remember

*   **Time Domain Analysis:** Focuses on how system output varies with time in response to specific inputs.
*   **First-Order System:** Characterized by a time constant ($\tau$). Response is exponential, no overshoot.
    *   $y(t) = K(1 - e^{-t/\tau})$ for step input.
    *   $t_d \approx 0.7\tau$, $t_r \approx 2.2\tau$, $t_s \approx 4\tau$ (for 2% settling).
*   **Second-Order System:** Characterized by undamped natural frequency ($\omega_n$) and damping ratio ($\zeta$).
    *   **Underdamped ($0 < \zeta < 1$):** Oscillatory response. Specifications depend on $\omega_n$ and $\zeta$.
        *   $t_p = \pi/\omega_d$, $\%OS = e^{-\zeta\pi/\sqrt{1-\zeta^2}} \times 100\%$, $t_s \approx 4/(\zeta\omega_n)$ (2%).
    *   **Critically Damped ($\zeta = 1$):** Fastest response without overshoot.
    *   **Overdamped ($\zeta > 1$):** Slow, non-oscillatory response.
    *   **Undamped ($\zeta = 0$):** Sustained oscillations.
*   **Trade-offs:** Generally, faster responses (smaller rise time) come at the cost of increased overshoot and settling time, unless $\omega_n$ is increased. Increasing $\zeta$ improves stability and reduces overshoot/settling time, but slows down the response (increases rise time).
*   **Practical Systems:** Most physical systems are at least second-order. Understanding second-order response is fundamental.

---

## 7. Relevance to Course Outcomes

*   **CO5 (K4):** This module is the core of analyzing time domain responses. Students will be able to calculate and interpret transient performance metrics for common system orders.
*   **CO6 (K4):** The parameters $\zeta$ and $\omega_n$ directly inform the stability and transient behavior of a system. Understanding how these affect the response is crucial for stability assessment.
*   **CO1, CO2, CO3, CO4:** While this module is focused on system analysis, the understanding of how inputs affect outputs and how to characterize system behavior is foundational for understanding the role of measurement systems and control blocks. The idealized responses of first and second-order systems serve as building blocks for analyzing more complex industrial instrumentation and control systems.

---
This comprehensive set of notes covers the impulse and step responses of first and second-order systems, aligning with the learning outcomes and referencing the provided textbooks. The inclusion of definitions, formulas, examples, and practice questions aims to facilitate a thorough understanding of the topic.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
