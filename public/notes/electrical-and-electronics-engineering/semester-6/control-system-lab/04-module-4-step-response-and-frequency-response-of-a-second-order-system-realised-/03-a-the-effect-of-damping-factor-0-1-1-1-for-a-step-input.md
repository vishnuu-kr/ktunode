---
title: "a. The effect of damping factor (0<ξ <1, ξ = 1, ξ > 1) for a  step input ."
subject: "CONTROL SYSTEM LAB"
module: "Module 4: Step response and frequency response of a second order system realised using passive components"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3675f"
status: "completed"
scrapedAt: "2026-05-23T16:25:09.002Z"
---
# CONTROL SYSTEM LAB

## MODULE 4: STEP RESPONSE AND FREQUENCY RESPONSE OF A SECOND-ORDER SYSTEM REALIZED USING PASSIVE COMPONENTS

### Topic: a. The Effect of Damping Factor ($\xi$) for a Step Input (0 < $\xi$ < 1, $\xi$ = 1, $\xi$ > 1)

---

### 1. Introduction to Second-Order Systems and Damping

#### 1.1 What is a Second-Order System?

A second-order system is a system whose behavior is described by a second-order differential equation. In the context of control systems, the standard form of a second-order linear time-invariant (LTI) system's transfer function is often represented as:

$G(s) = \frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}$

where:
*   $G(s)$ is the transfer function in the Laplace domain.
*   $\omega_n$ is the **natural frequency** of the system (in radians per second). It represents the frequency at which the system would oscillate if there were no damping.
*   $\xi$ is the **damping ratio**. It is a dimensionless parameter that describes how oscillations in a system decay after a disturbance.

**(Reference: Ogata, 5th Ed., Chapter 4; Nise, 5th Ed., Chapter 4)**

#### 1.2 Realizing Second-Order Systems with Passive Components

In a control system lab setting, second-order systems are often realized using passive electrical components like resistors (R), inductors (L), and capacitors (C). A common realization is an RLC circuit. The behavior of these circuits, when subjected to certain inputs (like a step voltage), exhibits characteristics of second-order systems.

**Example:** Consider a series RLC circuit with a voltage source $V(t)$ and output voltage taken across the capacitor $v_C(t)$. The governing differential equation can be manipulated into the standard second-order form, allowing us to identify $\omega_n$ and $\xi$ in terms of R, L, and C values.

**(Reference: Nagrath & Gopal, 5th Ed., Chapter 3; Kuo, Chapter 5)**

#### 1.3 Key Parameters of a Second-Order System's Step Response

When a step input (a sudden change from zero to a constant value) is applied to a second-order system, its transient response is characterized by several performance metrics:

*   **Delay Time ($t_d$):** The time taken for the response to reach 50% of its final (steady-state) value for the first time.
*   **Rise Time ($t_r$):** The time taken for the response to rise from 10% to 90% of its final value.
*   **Peak Time ($t_p$):** The time taken for the response to reach its first peak.
*   **Maximum Overshoot ($M_p$):** The maximum value of the response minus the final steady-state value, expressed as a percentage of the final value.
*   **Settling Time ($t_s$):** The time taken for the response to stay within a specified tolerance band (usually $\pm$2% or $\pm$5%) of its final value.

The damping ratio ($\xi$) significantly influences these performance metrics.

**(Reference: Ogata, 5th Ed., Chapter 4; Nise, 5th Ed., Chapter 4)**

---

### 2. The Effect of Damping Ratio ($\xi$) on Step Response

The damping ratio ($\xi$) categorizes the behavior of a second-order system into three main regions. We will examine the step response characteristics in each of these regions.

#### 2.1 Case 1: Underdamped System (0 < $\xi$ < 1)

*   **Description:** In this case, the damping is insufficient to prevent oscillations. The system will overshoot the final value and oscillate with decreasing amplitude until it settles.
*   **Characteristics:**
    *   The response exhibits **overshoot**.
    *   The system oscillates around the steady-state value.
    *   The oscillations gradually decay due to damping.
    *   The **peak time** ($t_p$) is given by: $t_p = \frac{\pi}{\omega_d}$, where $\omega_d = \omega_n \sqrt{1-\xi^2}$ (the damped natural frequency).
    *   The **maximum overshoot** ($M_p$) is given by: $M_p = e^{-\frac{\xi \pi}{\sqrt{1-\xi^2}}} \times 100\%$.
    *   As $\xi$ increases from 0 towards 1, overshoot and oscillations decrease.
    *   As $\xi$ approaches 0, the overshoot and oscillations increase, and the settling time also tends to increase.
*   **Realization:** Achieved when damping forces are relatively weak compared to the system's tendency to oscillate. In RLC circuits, this typically occurs when resistance is low relative to inductance and capacitance.
*   **Example:** A common example is a pendulum with very little air resistance and friction. If you displace it and release it, it will swing back and forth multiple times, with each swing being shorter than the last, eventually coming to rest.

**(Reference: Ogata, 5th Ed., Chapter 4; Nise, 5th Ed., Chapter 4; Dorf & Bishop, 12th Ed., Chapter 5)**

**Figure (Conceptual):** Imagine a graph of output voltage vs. time. For 0 < $\xi$ < 1, the graph would start at 0, rise above the final value, dip below it, rise again, and so on, with each peak and trough being smaller than the previous one, eventually flattening out at the final value.

---

#### 2.2 Case 2: Critically Damped System ($\xi$ = 1)

*   **Description:** This is the boundary between oscillatory and non-oscillatory behavior. A critically damped system is designed to return to its steady-state value as quickly as possible without any overshoot.
*   **Characteristics:**
    *   The system reaches its steady-state value in the shortest possible time without **overshooting**.
    *   The response is fast and smooth.
    *   The **peak time** is technically undefined as there is no peak beyond the steady-state value.
    *   The **maximum overshoot** is 0%.
    *   The **settling time** is generally the fastest among the three damping cases for a comparable system.
*   **Realization:** Achieved when the damping is just enough to prevent oscillations. In RLC circuits, this corresponds to specific values of R, L, and C where $R = 2\sqrt{\frac{L}{C}}$.
*   **Example:** Think of a well-designed door closer. It closes the door quickly but smoothly, without slamming it shut or swinging back and forth.

**(Reference: Ogata, 5th Ed., Chapter 4; Nise, 5th Ed., Chapter 4; Kuo, Chapter 5)**

**Figure (Conceptual):** The graph would rise smoothly from 0 and reach the final value directly, without exceeding it.

---

#### 2.3 Case 3: Overdamped System ($\xi$ > 1)

*   **Description:** In this case, there is excessive damping. The system returns to its steady-state value slowly without any oscillations.
*   **Characteristics:**
    *   The system is sluggish or slow to respond.
    *   There is **no overshoot**.
    *   The response is smooth but takes longer to reach the final value compared to the critically damped case.
    *   The **peak time** is undefined (no overshoot).
    *   The **maximum overshoot** is 0%.
    *   The **settling time** tends to be longer than the critically damped case.
*   **Realization:** Achieved when damping forces are much stronger than the system's tendency to oscillate. In RLC circuits, this occurs when resistance is high relative to inductance and capacitance.
*   **Example:** Consider a very heavy door with strong hinges and significant friction. Opening or closing it will be slow and deliberate, with no tendency to swing.

**(Reference: Ogata, 5th Ed., Chapter 4; Nise, 5th Ed., Chapter 4; Gopal, Chapter 4)**

**Figure (Conceptual):** The graph would rise very slowly from 0, without exceeding the final value, and take a considerable amount of time to reach it.

---

### 3. Summary Table of Damping Effects on Step Response

| Damping Ratio ($\xi$) | System Behavior | Oscillations? | Overshoot? | Speed of Response | Settling Time |
| :-------------------- | :-------------- | :------------ | :--------- | :---------------- | :------------ |
| 0 < $\xi$ < 1           | Underdamped     | Yes           | Yes        | Fast              | Moderate to Long (depends on $\xi$) |
| $\xi$ = 1             | Critically Damped | No            | No         | Fastest (without overshoot) | Shortest      |
| $\xi$ > 1             | Overdamped      | No            | No         | Slow              | Long          |

**(Reference: Nise, 5th Ed., Chapter 4; Ogata, 5th Ed., Chapter 4)**

---

### 4. Achieving Different Damping Ratios in Practice (Passive Components)

In a lab experiment using passive components (e.g., RLC circuit), the damping ratio $\xi$ is determined by the values of R, L, and C. For a standard second-order system represented by $\frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}$, the characteristic equation is $s^2 + 2\xi\omega_n s + \omega_n^2 = 0$.

Consider a series RLC circuit with a voltage input $v_{in}(t)$ and output voltage $v_{out}(t)$ across the capacitor. The transfer function is:

$G(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{1/LC}{s^2 + (R/L)s + 1/LC}$

Comparing this to the standard form:
*   $\omega_n^2 = \frac{1}{LC} \implies \omega_n = \frac{1}{\sqrt{LC}}$
*   $2\xi\omega_n = \frac{R}{L}$

Substituting $\omega_n$:
$2\xi \frac{1}{\sqrt{LC}} = \frac{R}{L}$
$\xi = \frac{R}{2L} \sqrt{LC} = \frac{R}{2} \sqrt{\frac{C}{L}}$

Therefore, by adjusting the values of R, L, and C, we can achieve different damping ratios:

*   **Underdamped (0 < $\xi$ < 1):** Choose R such that $R < 2\sqrt{\frac{L}{C}}$.
*   **Critically Damped ($\xi$ = 1):** Choose R such that $R = 2\sqrt{\frac{L}{C}}$.
*   **Overdamped ($\xi$ > 1):** Choose R such that $R > 2\sqrt{\frac{L}{C}}$.

**(Reference: Kuo, Chapter 5; Nagrath & Gopal, 5th Ed., Chapter 3)**

---

### 5. Learning Outcomes Addressed

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system. (K3)**
    *   This topic helps in understanding how physical parameters (R, L, C) in an RLC circuit directly influence the damping ratio ($\xi$) and natural frequency ($\omega_n$), which are key parameters for modeling the system. Experiments can be designed to measure these parameters.

*   **CO2: Conduct suitable experiments and determine the performance specifications. (K3)**
    *   The core of this topic is analyzing the step response and its specifications (overshoot, settling time, rise time, peak time) as a function of $\xi$. Experiments would involve applying a step input and measuring these specifications for different component values.

*   **CO3: Analyse a linear continuous time system model using simulation tools. (K3)**
    *   Simulation tools (like MATLAB/Simulink) can be used to model second-order systems with varying $\xi$ and observe their step responses, correlating simulated results with theoretical expectations and experimental observations.

**(Note: The knowledge level K3 implies applying knowledge to practical problems or carrying out experimental procedures. K5 would imply evaluating and critiquing.)**

---

### 6. Important Points to Remember

*   The damping ratio ($\xi$) is a crucial parameter that dictates the transient behavior of a second-order system.
*   **Underdamped (0 < $\xi$ < 1):** Oscillatory response with overshoot.
*   **Critically Damped ($\xi$ = 1):** Fastest response without overshoot. This is often the desired condition for many control systems.
*   **Overdamped ($\xi$ > 1):** Slow, non-oscillatory response.
*   In passive RLC circuits, the damping ratio is directly related to the component values (R, L, C) as $\xi = \frac{R}{2} \sqrt{\frac{C}{L}}$.
*   Lower damping ($\xi$ closer to 0) leads to more oscillation and higher overshoot.
*   Higher damping ($\xi$ further from 1) leads to slower response.

---

### 7. Practice Questions

**Question 1:**
A second-order system has the transfer function $G(s) = \frac{25}{s^2 + 6s + 25}$.
a) Determine the natural frequency ($\omega_n$) and the damping ratio ($\xi$).
b) Classify the system's damping (underdamped, critically damped, or overdamped).
c) Describe the expected step response of this system.

**Answer 1:**
a) The standard form is $G(s) = \frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}$.
Comparing the given transfer function with the standard form:
$\omega_n^2 = 25 \implies \omega_n = 5 \text{ rad/s}$
$2\xi\omega_n = 6$
$2\xi(5) = 6$
$10\xi = 6 \implies \xi = 0.6$

b) Since $0 < \xi < 1$ ($\xi = 0.6$), the system is **underdamped**.

c) The expected step response will exhibit **overshoot** and **oscillations**. The oscillations will decay over time, and the system will eventually settle to its steady-state value. The peak time and maximum overshoot can be calculated using the formulas provided in Section 2.1.

---

**Question 2:**
You are tasked with designing a system to have the fastest possible response without any overshoot. Which damping ratio would you aim for, and what term is associated with this condition?

**Answer 2:**
You would aim for a damping ratio of $\xi = 1$. This condition is known as **critically damped**.

---

**Question 3:**
In a series RLC circuit with $L = 0.1$ H and $C = 10 \mu\text{F}$ ($10 \times 10^{-6}$ F), what value of resistance $R$ would be required to make the system critically damped?

**Answer 3:**
For critical damping, $\xi = 1$. The formula for the damping ratio in a series RLC circuit is $\xi = \frac{R}{2} \sqrt{\frac{C}{L}}$.
We need to find R when $\xi = 1$:
$1 = \frac{R}{2} \sqrt{\frac{10 \times 10^{-6} \text{ F}}{0.1 \text{ H}}}$
$1 = \frac{R}{2} \sqrt{100 \times 10^{-6}}$
$1 = \frac{R}{2} \times 10 \times 10^{-3}$
$1 = R \times 5 \times 10^{-3}$
$R = \frac{1}{5 \times 10^{-3}} = \frac{1000}{5} = 200 \text{ } \Omega$

Thus, a resistance of $200 \text{ } \Omega$ would be required for critical damping.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. Further Reading and References

*   **Modern Control Engineering by Katsuhiko Ogata:** Chapter 4 provides a thorough analysis of transient response of second-order systems and the role of damping.
*   **Control Systems Engineering by Norman S. Nise:** Chapter 4 offers a detailed explanation of time domain specifications and their relationship with system parameters like damping.
*   **Control Systems Engineering by I. J. Nagrath, M. Gopal:** Chapter 3 discusses modeling of physical systems, including RLC circuits, and their transfer function representation.
*   **Automatic Control Systems by Kuo B. C.:** Chapter 5 on transient response analysis would be beneficial.
*   **Control Systems Principles and Design by Gopal M.:** Chapters on transient response and time domain specifications.
*   **Modern Control Systems by Dorf R. C., Bishop R. H:** Chapter 5 typically covers transient response analysis.

This detailed study note covers the effect of the damping factor on the step response of a second-order system, aligning with the learning outcomes and course objectives for Module 4 of the Control System Lab.