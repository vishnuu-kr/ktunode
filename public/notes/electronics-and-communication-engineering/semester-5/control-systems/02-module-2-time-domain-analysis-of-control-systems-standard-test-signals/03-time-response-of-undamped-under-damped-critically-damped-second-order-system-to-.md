---
title: "Time response of undamped, under damped, critically damped second order system to unit step signal"
subject: "CONTROL SYSTEMS"
module: "Module 2: Time Domain Analysis of Control Systems:  Standard Test signals"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe952"
status: "completed"
scrapedAt: "2026-05-23T17:54:39.624Z"
---
# Control Systems: Module 2 - Time Domain Analysis of Control Systems: Standard Test Signals

## Topic: Time Response of Second-Order Systems to Unit Step Input

**Course Outcomes Addressed:**
*   **CO1:** Analyze the systems using transfer function approach (Knowledge Level: K3)
*   **CO2:** Perform time domain analysis and steady state analysis of systems (Knowledge Level: K2)

---

### 1. Introduction to Second-Order Systems

Second-order systems are fundamental in control systems as they represent a wide range of physical systems (e.g., mechanical, electrical, hydraulic) and are often used as approximations for higher-order systems. Their behavior is characterized by two poles in the s-plane.

**Key Concept:** The standard form of a second-order system's transfer function is crucial for analyzing its time-domain response.

**Standard Second-Order Transfer Function:**

$$ G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$

Where:
*   $\omega_n$: **Natural Undamped Frequency** (radians/sec) - The frequency at which the system would oscillate if there were no damping. It dictates the speed of response.
*   $\zeta$: **Damping Ratio** - A dimensionless parameter that characterizes how oscillations decay after a disturbance. It determines the nature of the system's response (underdamped, critically damped, overdamped).

**Relationship to Characteristic Equation:**

The denominator of the transfer function is the characteristic equation:
$$ s^2 + 2\zeta\omega_n s + \omega_n^2 = 0 $$

The roots of this equation, the system poles, are given by:
$$ s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2} $$

---

### 2. Standard Test Signals: Unit Step Input

A unit step signal is a standard input used to evaluate the performance of a control system. It represents a sudden change from zero to one at time $t=0$.

**Definition:** The unit step function, denoted by $u(t)$, is defined as:
$$ u(t) = \begin{cases} 0 & \text{for } t < 0 \\ 1 & \text{for } t \ge 0 \end{cases} $$

Its Laplace transform is:
$$ \mathcal{L}\{u(t)\} = U(s) = \frac{1}{s} $$

**Importance:** The unit step response reveals key performance characteristics such as transient response (overshoot, settling time, rise time) and steady-state error.

---

### 3. Classification of Second-Order Systems Based on Damping Ratio ($\zeta$)

The behavior of a second-order system to a unit step input depends critically on the value of the damping ratio $\zeta$.

**Important Point to Remember:** The damping ratio ($\zeta$) is the primary factor determining the nature of the second-order system's response.

*   **$\zeta = 0$ (Undamped System):**
    *   Poles: $s = \pm j\omega_n$ (purely imaginary)
    *   Response: Oscillatory with constant amplitude. The system will oscillate indefinitely around the steady-state value.

*   **$0 < \zeta < 1$ (Underdamped System):**
    *   Poles: $s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$ (complex conjugate poles in the left-half s-plane)
    *   Response: Oscillatory with decaying amplitude. The system overshoots the final value and oscillates before settling down.

*   **$\zeta = 1$ (Critically Damped System):**
    *   Poles: $s = -\omega_n, -\omega_n$ (real and equal poles)
    *   Response: Fastest possible response without overshoot. The system reaches the steady-state value as quickly as possible without any oscillations.

*   **$\zeta > 1$ (Overdamped System):**
    *   Poles: $s = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2-1}$ (real and distinct poles in the left-half s-plane)
    *   Response: Non-oscillatory. The system returns to the steady-state value slowly without any overshoot. (This case is not explicitly asked for in the topic but is important for completeness and understanding the spectrum of responses).

---

### 4. Time Response Analysis to Unit Step Input

For a unit step input $R(s) = 1/s$, the output $C(s)$ of the standard second-order system is:

$$ C(s) = G(s)R(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} \cdot \frac{1}{s} $$

This can be expressed as:
$$ C(s) = \frac{\omega_n^2}{s(s^2 + 2\zeta\omega_n s + \omega_n^2)} $$

By using partial fraction expansion and inverse Laplace transforms, the time-domain response $c(t)$ can be derived for each damping case.

#### 4.1. Undamped System ($\zeta = 0$)

*   **Transfer Function:** $G(s) = \frac{\omega_n^2}{s^2 + \omega_n^2}$
*   **Laplace Transform of Output:** $C(s) = \frac{\omega_n^2}{s(s^2 + \omega_n^2)}$
*   **Partial Fraction Expansion:**
    $$ C(s) = \frac{A}{s} + \frac{Bs + C}{s^2 + \omega_n^2} $$
    Solving for coefficients gives: $A = 1$, $B = -1$, $C = 0$.
    $$ C(s) = \frac{1}{s} - \frac{s}{s^2 + \omega_n^2} $$
*   **Time-Domain Response:**
    $$ c(t) = 1 - \cos(\omega_n t) $$

**Characteristics of Undamped Response:**
*   **Oscillatory:** The response is a pure sinusoid.
*   **Constant Amplitude:** The oscillations do not decay.
*   **Overshoot:** $100\%$ (since $c(t)$ oscillates between 0 and 2).
*   **Settling Time:** Infinite (it never settles).

**Reference:** Kuo & Golnaraghi (10th Ed.), Chapter 4, "Transient Response Analysis of Second-Order Systems." Nagarath & Gopal (7th Ed.), Chapter 6, "Time Response Analysis."

---

#### 4.2. Underdamped System ($0 < \zeta < 1$)

*   **Transfer Function:** $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$
*   **Laplace Transform of Output:** $C(s) = \frac{\omega_n^2}{s(s^2 + 2\zeta\omega_n s + \omega_n^2)}$
*   **Partial Fraction Expansion:**
    $$ C(s) = \frac{A}{s} + \frac{Bs + C}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$
    Solving for coefficients gives: $A = 1$, $B = -2\zeta/\omega_n$, $C = 1$.
    $$ C(s) = \frac{1}{s} - \frac{2\zeta/\omega_n \cdot s + 1}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$
    To facilitate inverse transform, rewrite the second term:
    $$ C(s) = \frac{1}{s} - \frac{2\zeta/\omega_n (s + \zeta\omega_n) + (1 - 2\zeta^2)}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$
    We know that $\omega_d = \omega_n\sqrt{1-\zeta^2}$, so $\omega_n^2 = \omega_d^2 + (\zeta\omega_n)^2$.
    $$ C(s) = \frac{1}{s} - \frac{2\zeta}{\omega_n} \frac{s + \zeta\omega_n}{s^2 + 2\zeta\omega_n s + \omega_n^2} - \frac{1 - 2\zeta^2}{\omega_n\sqrt{1-\zeta^2}} \frac{\omega_n\sqrt{1-\zeta^2}}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$
    Using standard inverse Laplace transforms:
    $\mathcal{L}^{-1}\{\frac{s+a}{(s+a)^2+b^2}\} = e^{-at}\cos(bt)$
    $\mathcal{L}^{-1}\{\frac{b}{(s+a)^2+b^2}\} = e^{-at}\sin(bt)$
    Where $a = \zeta\omega_n$ and $b = \omega_d = \omega_n\sqrt{1-\zeta^2}$.
    $$ c(t) = 1 - e^{-\zeta\omega_n t} \left(\cos(\omega_d t) + \frac{\zeta}{\sqrt{1-\zeta^2}} \sin(\omega_d t)\right) $$
    This can be further simplified using trigonometric identities into the form:
    $$ c(t) = 1 - \frac{e^{-\zeta\omega_n t}}{\sqrt{1-\zeta^2}} \sin(\omega_d t + \phi) $$
    where $\phi = \arctan\left(\frac{\sqrt{1-\zeta^2}}{\zeta}\right)$.
    A more commonly used form is:
    $$ c(t) = 1 - e^{-\zeta\omega_n t} \left(\cos(\omega_d t) + \frac{\zeta}{\sqrt{1-\zeta^2}} \sin(\omega_d t)\right) $$
    Or, rewriting the term in the parenthesis:
    $$ c(t) = 1 - e^{-\zeta\omega_n t} \left( \cos(\omega_d t) + \frac{\zeta}{\sqrt{1-\zeta^2}} \sin(\omega_d t) \right) $$
    This can also be written as:
    $$ c(t) = 1 - \frac{1}{\sqrt{1-\zeta^2}} e^{-\zeta\omega_n t} \sin(\omega_d t + \alpha) $$
    where $\alpha = \arccos(\zeta)$.

**Key Performance Metrics for Underdamped Systems:**

*   **Peak Overshoot ($M_p$):** The maximum deviation of the response from the final value, expressed as a percentage of the final value.
    $$ M_p = e^{\frac{-\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100\% $$
    This occurs at $t_p = \frac{\pi}{\omega_d}$.

*   **Time to Peak ($t_p$):** The time at which the first peak occurs.
    $$ t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}} $$

*   **Settling Time ($t_s$):** The time required for the response to settle within a specified tolerance band (usually $\pm 2\%$ or $\pm 5\%$) of the final value.
    *   For $\pm 2\%$ tolerance: $t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{\sigma}$, where $\sigma = \zeta\omega_n$ is the real part of the poles.
    *   For $\pm 5\%$ tolerance: $t_s \approx \frac{3}{\zeta\omega_n} = \frac{3}{\sigma}$.

*   **Rise Time ($t_r$):** The time taken for the response to rise from $10\%$ to $90\%$ of its final value.
    $$ t_r \approx \frac{\pi - \arctan\left(\frac{2\zeta}{\sqrt{1-\zeta^2}}\right)}{\omega_d} $$
    A common approximation for $t_r$ is:
    $$ t_r \approx \frac{1.8}{\omega_n} $$ (This approximation is valid for a range of $\zeta$ values).

**Important Point to Remember:** The damping ratio $\zeta$ controls the oscillations and speed of settling, while the natural frequency $\omega_n$ controls the overall speed of the response.

**Reference:** Ogata (5th Ed.), Chapter 2, "Time Response Analysis." Nise (8th Ed.), Chapter 4, "Time Response Analysis."

---

#### 4.3. Critically Damped System ($\zeta = 1$)

*   **Transfer Function:** $G(s) = \frac{\omega_n^2}{s^2 + 2\omega_n s + \omega_n^2} = \frac{\omega_n^2}{(s+\omega_n)^2}$
*   **Laplace Transform of Output:** $C(s) = \frac{\omega_n^2}{s(s+\omega_n)^2}$
*   **Partial Fraction Expansion:**
    $$ C(s) = \frac{A}{s} + \frac{B}{s+\omega_n} + \frac{C}{(s+\omega_n)^2} $$
    Solving for coefficients gives: $A = 1$, $B = -1$, $C = \omega_n$.
    $$ C(s) = \frac{1}{s} - \frac{1}{s+\omega_n} + \frac{\omega_n}{(s+\omega_n)^2} $$
*   **Time-Domain Response:**
    $$ c(t) = 1 - e^{-\omega_n t} - \omega_n t e^{-\omega_n t} $$
    $$ c(t) = 1 - e^{-\omega_n t}(1 + \omega_n t) $$

**Characteristics of Critically Damped Response:**
*   **No Overshoot:** The response reaches the final value without exceeding it.
*   **Fastest Non-Oscillatory Response:** It is the fastest response possible without oscillations.
*   **Settling Time:** For $\zeta=1$, the settling time is approximated as $t_s \approx \frac{4}{\omega_n}$ (using the $4/\sigma$ rule where $\sigma = \omega_n$).

**Reference:** DiStefano, Stubberud, & Williams (3rd Ed.), Chapter 4, "Transient Analysis."

---

### 5. Summary of Time Domain Specifications

These specifications are crucial for evaluating the performance of a control system.

| Specification           | Symbol   | Undamped ($\zeta=0$) | Underdamped ($0<\zeta<1$)             | Critically Damped ($\zeta=1$) | Overdamped ($\zeta>1$) |
| :---------------------- | :------- | :------------------- | :------------------------------------ | :---------------------------- | :--------------------- |
| **Peak Overshoot**      | $M_p$    | $100\%$              | $e^{\frac{-\zeta\pi}{\sqrt{1-\zeta^2}}}$ | $0\%$                         | $0\%$                  |
| **Time to Peak**        | $t_p$    | $\pi/\omega_n$       | $\pi/\omega_d$                        | N/A                           | N/A                    |
| **Settling Time ($\pm 2\%$)** | $t_s$    | $\infty$             | $\approx 4/(\zeta\omega_n)$           | $\approx 4/\omega_n$          | Slow but non-oscillatory |
| **Rise Time ($10\%-90\%$)** | $t_r$    | $\pi/(2\omega_n)$    | $\approx \frac{\pi - \arctan(\frac{2\zeta}{\sqrt{1-\zeta^2}})}{\omega_d}$ or $\approx 1.8/\omega_n$ | Fastest non-oscillatory | Slow but non-oscillatory |
| **Steady-State Value**  | -        | $1$                  | $1$                                   | $1$                           | $1$                    |
| **Steady-State Error**  | $e_{ss}$ | $0$                  | $0$                                   | $0$                           | $0$                    |

**Important Note on Steady-State Error:** For a Type 0 system (like the standard second-order form $\frac{K}{s^2 + as + b}$ without an $s$ in the denominator of $G(s)$), the steady-state error to a unit step input is $0$. This is because the final value theorem states $e_{ss} = \lim_{s \to 0} s E(s) = \lim_{s \to 0} s \frac{R(s)}{1+G(s)}$. For $R(s)=1/s$, $e_{ss} = \frac{1}{1+G(0)}$. If $G(0)$ is finite (as it is for the standard second-order system), $e_{ss}=0$.

---

### 6. Examples and Practice Questions

**Example 1:**
Consider a second-order system with the transfer function:
$$ G(s) = \frac{9}{s^2 + 4s + 9} $$
Determine the values of $\zeta$ and $\omega_n$. Sketch the unit step response and state the nature of the response.

**Solution:**
The standard form is $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.
Comparing the given $G(s)$ with the standard form:
$\omega_n^2 = 9 \implies \omega_n = 3$ rad/sec.
$2\zeta\omega_n = 4$
$2\zeta(3) = 4$
$6\zeta = 4 \implies \zeta = 4/6 = 2/3$.

Since $0 < \zeta = 2/3 < 1$, the system is **underdamped**.

The response will be oscillatory with overshoot and will eventually settle to the final value of 1.

**Example 2:**
For the system in Example 1, calculate:
a) Peak Overshoot ($M_p$)
b) Time to Peak ($t_p$)
c) Settling Time ($t_s$ for $\pm 2\%$ tolerance)
d) Rise Time ($t_r$)

**Solution:**
Given $\zeta = 2/3$ and $\omega_n = 3$ rad/sec.
$\omega_d = \omega_n\sqrt{1-\zeta^2} = 3\sqrt{1-(2/3)^2} = 3\sqrt{1-4/9} = 3\sqrt{5/9} = 3 \frac{\sqrt{5}}{3} = \sqrt{5}$ rad/sec.

a) Peak Overshoot ($M_p$):
$$ M_p = e^{\frac{-\zeta\pi}{\sqrt{1-\zeta^2}}} = e^{\frac{-(2/3)\pi}{\sqrt{5}/3}} = e^{\frac{-2\pi}{\sqrt{5}}} $$
$$ M_p \approx e^{-2.81} \approx 0.059 $$
So, $M_p \approx 5.9\%$.

b) Time to Peak ($t_p$):
$$ t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\sqrt{5}} \approx \frac{3.14159}{2.236} \approx 1.405 \text{ seconds} $$

c) Settling Time ($t_s$ for $\pm 2\%$):
$$ t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{(2/3)(3)} = \frac{4}{2} = 2 \text{ seconds} $$

d) Rise Time ($t_r$):
Using the approximation:
$$ t_r \approx \frac{1.8}{\omega_n} = \frac{1.8}{3} = 0.6 \text{ seconds} $$

**Practice Question 1:**
A second-order system has the transfer function $G(s) = \frac{100}{s^2 + 10s + 100}$. If a unit step input is applied, determine if the system is underdamped, critically damped, or overdamped. Calculate its $\omega_n$, $\zeta$, $M_p$, $t_p$, and $t_s$ (for 2% tolerance).

**Answer:**
Standard form: $G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$.
$\omega_n^2 = 100 \implies \omega_n = 10$ rad/sec.
$2\zeta\omega_n = 10 \implies 2\zeta(10) = 10 \implies 20\zeta = 10 \implies \zeta = 0.5$.
Since $0 < \zeta < 1$, the system is **underdamped**.

$\omega_d = \omega_n\sqrt{1-\zeta^2} = 10\sqrt{1-(0.5)^2} = 10\sqrt{1-0.25} = 10\sqrt{0.75} = 10 \frac{\sqrt{3}}{2} = 5\sqrt{3}$ rad/sec.

$M_p = e^{\frac{-\zeta\pi}{\sqrt{1-\zeta^2}}} = e^{\frac{-0.5\pi}{\sqrt{0.75}}} = e^{\frac{-0.5\pi}{\sqrt{3}/2}} = e^{\frac{-\pi}{\sqrt{3}}} \approx e^{-1.813} \approx 0.163 = 16.3\%$.

$t_p = \frac{\pi}{\omega_d} = \frac{\pi}{5\sqrt{3}} \approx \frac{3.14159}{8.66} \approx 0.363$ seconds.

$t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{0.5 \times 10} = \frac{4}{5} = 0.8$ seconds.

**Practice Question 2:**
What are the characteristics of the time response of a second-order system when $\zeta = 0$?

**Answer:**
When $\zeta = 0$, the system is **undamped**. The time response to a unit step input is given by $c(t) = 1 - \cos(\omega_n t)$. This response is oscillatory with a constant amplitude. It overshoots by 100% and never settles to the final value (infinite settling time).

---

### 7. Visual Representation of Responses

**(Imagine graphs here showing the time response c(t) vs. time t for a unit step input for each case. The y-axis would be the output c(t) and the x-axis would be time t. The steady-state value is 1).**

*   **Undamped ($\zeta=0$):** A cosine wave oscillating between 0 and 2, centered around y=1.
*   **Underdamped ($0<\zeta<1$):** Starts at 0, rises to a peak above 1 (overshoot), then oscillates with decreasing amplitude, eventually settling at 1. The smaller $\zeta$ is, the larger the overshoot and the longer the oscillations persist.
*   **Critically Damped ($\zeta=1$):** Rises from 0 to 1 as quickly as possible without any overshoot. It reaches the final value and stays there.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Analyze using transfer function approach):** This entire topic is based on analyzing the system's behavior using its transfer function and understanding how the parameters $\zeta$ and $\omega_n$ within the transfer function dictate the response. (Knowledge Level: K3 - Analysis)
*   **CO2 (Perform time domain analysis):** This topic directly covers the time-domain analysis of second-order systems by deriving and interpreting the unit step response. The calculation of performance metrics like $M_p$, $t_p$, $t_s$, and $t_r$ are core components of time-domain analysis. (Knowledge Level: K2 - Understanding & Applying basic techniques)

---

This detailed study note covers the essential aspects of the time response of second-order systems to a unit step signal, focusing on the different damping cases. Understanding these concepts is foundational for analyzing and designing control systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
