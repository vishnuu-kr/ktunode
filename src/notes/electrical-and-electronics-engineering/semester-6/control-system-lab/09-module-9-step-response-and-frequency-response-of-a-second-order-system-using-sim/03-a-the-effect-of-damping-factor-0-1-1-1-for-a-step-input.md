---
title: "a. The effect of damping factor (0<ξ <1, ξ = 1, ξ > 1) for a  step input ."
subject: "CONTROL SYSTEM LAB"
module: "Module 9: Step response and frequency response of a second order system using simulation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36773"
status: "completed"
scrapedAt: "2026-05-23T16:25:20.325Z"
---
# CONTROL SYSTEM LAB - Module 9: Step Response and Frequency Response of a Second-Order System using Simulation

## Topic: a. The Effect of Damping Factor ($\xi$) for a Step Input

---

### Introduction

This module explores the behavior of second-order control systems under a step input, focusing on the crucial role of the damping factor ($\xi$). Understanding the impact of $\xi$ is fundamental to designing stable and performant control systems. We will use simulation tools to visualize and analyze these effects.

---

### Key Concepts and Definitions

*   **Second-Order System:** A system whose behavior is described by a second-order differential equation. Its transfer function typically has the form:
    $G(s) = \frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}$
    where:
    *   $\omega_n$ is the **undamped natural frequency** (radians/second): The frequency at which the system would oscillate if there were no damping.
    *   $\xi$ is the **damping ratio** (dimensionless): A parameter that quantifies how oscillations in a system decay after a disturbance.

*   **Step Input:** A standard test signal that abruptly changes from zero to a constant value (typically 1 or unit value) at time $t=0$. It represents a sudden change in the desired output.

*   **Step Response:** The output of a system when subjected to a step input. Key characteristics of the step response include:
    *   **Rise Time ($T_r$):** The time taken for the response to rise from 10% to 90% of its final value.
    *   **Peak Time ($T_p$):** The time taken for the response to reach its first peak.
    *   **Maximum Overshoot ($M_p$):** The maximum deviation of the response from its final value, expressed as a percentage.
    *   **Settling Time ($T_s$):** The time taken for the response to settle within a specified tolerance band (e.g., 2% or 5%) of its final value.
    *   **Steady-State Error ($e_{ss}$):** The difference between the final value of the response and the desired final value of the input.

---

### The Role of the Damping Factor ($\xi$)

The damping factor ($\xi$) dictates the nature of the system's response to a disturbance or input. For a standard second-order system, the behavior is categorized based on the value of $\xi$:

#### 1. Underdamped System ($0 < \xi < 1$)

*   **Characteristics:**
    *   The system oscillates before settling to its steady-state value.
    *   The oscillations gradually decay over time due to damping.
    *   The response exhibits **overshoot** ($M_p > 0$).
    *   The **peak time** ($T_p$) and **rise time** ($T_r$) are influenced by $\xi$. Smaller $\xi$ leads to longer settling times and higher overshoot, but potentially faster initial rise.
    *   **Settling time** is generally longer for lower damping ratios.

*   **Mathematical Expressions (for a unit step input):**
    *   Peak Time: $T_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\xi^2}}$
    *   Maximum Overshoot: $M_p = e^{-\frac{\xi\pi}{\sqrt{1-\xi^2}}} \times 100\%$
    *   Settling Time (2% criterion): $T_s \approx \frac{4}{\xi\omega_n}$
    *   Settling Time (5% criterion): $T_s \approx \frac{3}{\xi\omega_n}$

*   **Textbook References:**
    *   Ogata, 5th ed., Chapter 2 (Basic Concepts of Feedback Control Systems) and Chapter 6 (Time-Response Analysis of Feedback Control Systems). Ogata discusses the general form of the step response and derives these equations.
    *   Nise, 5th ed., Chapter 2 (Second-Order Systems) and Chapter 4 (Time Response). Nise provides a thorough analysis of the impact of $\xi$ on various performance metrics.

*   **Example:** A system with $\xi = 0.5$ and $\omega_n = 10$ rad/s. The response will oscillate significantly before settling.

#### 2. Critically Damped System ($\xi = 1$)

*   **Characteristics:**
    *   The system returns to its steady-state value as quickly as possible without any oscillation.
    *   It represents the boundary between oscillatory and non-oscillatory responses.
    *   **No overshoot** ($M_p = 0$).
    *   The response is fast and well-behaved.
    *   The **settling time** is minimized for a given $\omega_n$.

*   **Mathematical Expressions (for a unit step input):**
    *   The system's poles are at $s = -\omega_n$.
    *   The response equation is: $c(t) = 1 - e^{-\omega_n t} - \omega_n t e^{-\omega_n t}$
    *   Settling Time (2% criterion): $T_s \approx \frac{4}{\omega_n}$ (Note: the $\xi$ term disappears as $\xi=1$)

*   **Textbook References:**
    *   Ogata, 5th ed., Chapter 6. Ogata explains how $\xi=1$ leads to a non-oscillatory response.
    *   Nise, 5th ed., Chapter 2. Nise highlights that critical damping provides the fastest possible response without overshoot.

*   **Example:** A system with $\xi = 1$ and $\omega_n = 10$ rad/s. The response will rise quickly and settle without any oscillations.

#### 3. Overdamped System ($\xi > 1$)

*   **Characteristics:**
    *   The system returns to its steady-state value without any oscillation.
    *   The response is slower than the critically damped case.
    *   **No overshoot** ($M_p = 0$).
    *   The **rise time** is longer than the critically damped case.
    *   The system effectively behaves like two first-order systems.

*   **Mathematical Expressions (for a unit step input):**
    *   The system's poles are real and distinct: $s = -\omega_n(\xi \pm \sqrt{\xi^2-1})$.
    *   The response equation is: $c(t) = 1 - \frac{\xi+\sqrt{\xi^2-1}}{2\sqrt{\xi^2-1}}e^{-(\xi-\sqrt{\xi^2-1})\omega_n t} + \frac{\xi-\sqrt{\xi^2-1}}{2\sqrt{\xi^2-1}}e^{-(\xi+\sqrt{\xi^2-1})\omega_n t}$
    *   Settling Time (2% criterion): The response slows down as $\xi$ increases, meaning $T_s$ increases. It's roughly proportional to $\xi/\omega_n$.

*   **Textbook References:**
    *   Ogata, 5th ed., Chapter 6. Ogata describes the slower, non-oscillatory response for $\xi > 1$.
    *   Nise, 5th ed., Chapter 2. Nise illustrates the sluggish nature of overdamped systems.

*   **Example:** A system with $\xi = 2$ and $\omega_n = 10$ rad/s. The response will be slow but stable, without any overshoot.

---

### Simulation Exercise

**Objective:** To observe and analyze the step response of a second-order system with varying damping factors ($\xi$) using a simulation tool (e.g., MATLAB/Simulink, Python with SciPy/Matplotlib).

**Procedure:**

1.  **Define the Transfer Function:**
    Consider a standard second-order transfer function:
    $G(s) = \frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}$

2.  **Choose Parameters:**
    Let $\omega_n = 5$ rad/s.
    Select three different values for $\xi$:
    *   $\xi_1 = 0.2$ (Underdamped)
    *   $\xi_2 = 1.0$ (Critically Damped)
    *   $\xi_3 = 2.0$ (Overdamped)

3.  **Simulate the Step Response:**
    For each chosen $\xi$ value, simulate the system's response to a unit step input.

4.  **Plot the Results:**
    Plot all three step responses on the same graph. Label the curves clearly with their respective $\xi$ values.

5.  **Analyze the Plots:**
    Observe and compare the following for each response:
    *   Presence/absence of oscillations.
    *   Amount of overshoot.
    *   Speed of response (rise time, settling time).
    *   Steady-state value.

#### **Example Simulation Code (Python with SciPy)**

```python
import numpy as np
from scipy import signal
import matplotlib.pyplot as plt

# System parameters
wn = 5.0  # Undamped natural frequency in rad/s

# Damping factors
xi_values = [0.2, 1.0, 2.0]

# Time vector
t = np.linspace(0, 5, 500)

plt.figure(figsize=(10, 6))

for xi in xi_values:
    # Coefficients for the denominator of the transfer function
    # s^2 + 2*xi*wn*s + wn^2
    denominator = [1, 2 * xi * wn, wn**2]
    # Numerator is wn^2
    numerator = [wn**2]

    # Create the transfer function
    system = signal.TransferFunction(numerator, denominator)

    # Simulate the step response
    t_out, y_out, x_out = signal.lsim(system, U=1.0, T=t) # Unit step input U=1.0

    # Plot the response
    plt.plot(t_out, y_out, label=f'ξ = {xi}')

plt.title('Step Response of a Second-Order System for Different Damping Factors')
plt.xlabel('Time (seconds)')
plt.ylabel('Output')
plt.grid(True)
plt.legend()
plt.axhline(1.0, color='r', linestyle='--', label='Final Value (1.0)') # Plot the final value
plt.show()
```

---

### Practice Questions and Answers

**Question 1:**
For a second-order system with the transfer function $G(s) = \frac{16}{s^2 + 4s + 16}$, determine its damping ratio ($\xi$) and undamped natural frequency ($\omega_n$). Describe the expected step response based on the damping ratio.

**Answer 1:**
The standard form of a second-order transfer function is $G(s) = \frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}$.
Comparing the given transfer function $G(s) = \frac{16}{s^2 + 4s + 16}$ with the standard form:
*   $\omega_n^2 = 16 \implies \omega_n = \sqrt{16} = 4$ rad/s.
*   $2\xi\omega_n = 4$. Substituting $\omega_n = 4$: $2\xi(4) = 4 \implies 8\xi = 4 \implies \xi = \frac{4}{8} = 0.5$.

Since $\xi = 0.5$, which is between 0 and 1 ($0 < \xi < 1$), the system is **underdamped**.
The expected step response will be **oscillatory**, with **overshoot** and a finite **peak time**, before settling to its final value.

---

**Question 2:**
A second-order system has a damping ratio $\xi = 1$. What is the characteristic of its step response? How does its settling time generally compare to an underdamped system with the same $\omega_n$?

**Answer 2:**
When the damping ratio $\xi = 1$, the system is **critically damped**. Its step response is characterized by reaching the steady-state value as quickly as possible **without any oscillation or overshoot**.

Compared to an underdamped system with the same $\omega_n$, the critically damped system will have a **shorter settling time** because it avoids oscillations, and its response is designed to be the fastest possible without overshoot.

---

**Question 3:**
If a second-order system's step response shows no overshoot and is quite sluggish, which damping factor range is it likely to be in? What is the trade-off in this scenario?

**Answer 3:**
If a second-order system's step response shows no overshoot and is quite sluggish, it is likely to be in the **overdamped** range, meaning $\xi > 1$.

The trade-off in this scenario is **speed vs. damping**. While the overdamped system provides good stability and no overshoot, it sacrifices speed. The response takes longer to reach its steady-state value (longer rise time and settling time) compared to a critically damped system.

---

### Important Points to Remember

*   The damping factor ($\xi$) is the most critical parameter in determining the nature of a second-order system's response.
*   Underdamped systems ($0 < \xi < 1$) oscillate. Higher $\xi$ in this range reduces overshoot and settling time but can also increase rise time slightly.
*   Critically damped systems ($\xi = 1$) offer the fastest response without oscillations.
*   Overdamped systems ($\xi > 1$) are sluggish and do not oscillate, but they are slower than critically damped systems.
*   The simulation allows for direct visualization of these theoretical concepts.

---

### Alignment with Course Outcomes

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system.** (K3)
    While this topic focuses on simulation, understanding the impact of $\xi$ is crucial for *identifying* the parameters needed to model a physical system's transient response based on its observed behavior. For example, observing overshoot might indicate an underdamped system, guiding the estimation of $\xi$ and $\omega_n$.

*   **CO2: Conduct suitable experiments and determine the performance specifications.** (K3)
    This module directly relates to determining performance specifications like overshoot, settling time, and rise time by observing the step response under different $\xi$ values. The simulation acts as an "experiment."

*   **CO3: Analyse a linear continuous time system model using simulation tools.** (K3)
    This is the core of this module. We are analyzing the behavior of a linear second-order system model using simulation tools and observing how a parameter ($\xi$) affects its performance.

*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.** (K5)
    Understanding the effect of $\xi$ is foundational for controller design. If a system's inherent damping is not satisfactory, a controller can be designed to modify the closed-loop system's $\xi$ and $\omega_n$ to achieve desired performance (e.g., reducing overshoot or speeding up response), which is a design task.

---

This concludes the study notes for Module 9, Topic a. Remember to apply these concepts during your lab sessions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
