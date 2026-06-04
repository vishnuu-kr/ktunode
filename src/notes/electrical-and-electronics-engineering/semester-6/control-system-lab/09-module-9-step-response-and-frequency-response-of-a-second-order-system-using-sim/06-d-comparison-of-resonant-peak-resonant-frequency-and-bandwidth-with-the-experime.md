---
title: "d. Comparison of resonant peak, resonant frequency and bandwidth with the experimental values for 0<ξ <1."
subject: "CONTROL SYSTEM LAB"
module: "Module 9: Step response and frequency response of a second order system using simulation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36776"
status: "completed"
scrapedAt: "2026-05-23T16:25:22.582Z"
---
# Control System Lab: Module 9 - Step Response and Frequency Response of a Second-Order System using Simulation

**Topic: d. Comparison of resonant peak, resonant frequency and bandwidth with the experimental values for 0 < ξ < 1**

## 1. Introduction

This module focuses on understanding the transient and steady-state behavior of a second-order control system. Specifically, we will explore how the damping ratio ($\xi$) influences the system's response to a unit step input and its frequency response characteristics. A critical aspect of this module is the comparison between simulated and experimentally obtained values for key performance metrics like the resonant peak, resonant frequency, and bandwidth, particularly for underdamped systems (0 < $\xi$ < 1).

## 2. Learning Outcomes Covered

*   **LO 1: Analyze the transient response characteristics of a second-order system for various damping ratios using simulation.**
*   **LO 2: Analyze the frequency response characteristics of a second-order system for various damping ratios using simulation.**
*   **LO 3: Compare the simulated resonant peak, resonant frequency, and bandwidth with experimental values for underdamped systems (0 < ξ < 1).**
*   **LO 4: Evaluate the impact of damping ratio on the performance specifications of a second-order system.**

## 3. Course Outcomes Alignment

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system. (K3)** - While this topic primarily uses simulation, the comparison with experimental values implies understanding how experimental data is obtained and what parameters are measured.
*   **CO2: Conduct suitable experiments and determine the performance specifications. (K3)** - This LO directly relates to the comparison aspect of the topic, requiring the determination of experimental performance specifications.
*   **CO3: Analyze a linear continuous time system model using simulation tools. (K3)** - This is the core LO for this topic, focusing on analyzing simulated step and frequency responses.
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (K5)** - Understanding the relationship between $\xi$ and performance metrics is foundational for designing controllers to achieve desired responses.

## 4. Key Concepts and Definitions

### 4.1. Second-Order System Transfer Function

A standard form of a second-order system's transfer function is given by:

$$
G(s) = \frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}
$$

Where:
*   $\omega_n$: Natural frequency (rad/s) - the frequency of oscillation if there were no damping.
*   $\xi$: Damping ratio - a dimensionless parameter that describes how oscillations decay after a disturbance.

### 4.2. Damping Ratio ($\xi$) and System Classification

The damping ratio determines the system's behavior:

*   **$\xi = 0$**: Undamped (sustained oscillations).
*   **$0 < \xi < 1$**: Underdamped (oscillatory decay). This is the focus of this topic.
*   **$\xi = 1$**: Critically damped (fastest response without overshoot).
*   **$\xi > 1$**: Overdamped (slow, non-oscillatory response).

### 4.3. Step Response Characteristics (for $0 < \xi < 1$)

When a unit step input ($u(t) = 1$ for $t \ge 0$) is applied to an underdamped second-order system, its response exhibits several characteristics:

*   **Peak Time ($t_p$)**: The time at which the response first reaches its maximum value.
    $$
    t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\xi^2}}
    $$
*   **Maximum Overshoot ($M_p$)**: The maximum deviation of the response from its steady-state value, expressed as a percentage.
    $$
    M_p = e^{-\frac{\xi\pi}{\sqrt{1-\xi^2}}} \times 100\%
    $$
*   **Rise Time ($t_r$)**: The time it takes for the response to go from 10% to 90% of its final value.
    $$
    t_r \approx \frac{1.8\omega_n + 0.6\xi\omega_n}{\omega_n^2} \approx \frac{1.8}{\omega_n} \text{ (for } \xi \le 0.5)
    $$
*   **Settling Time ($t_s$)**: The time it takes for the response to stay within a specified tolerance band (usually 2% or 5%) of its final value.
    *   2% criterion: $t_s \approx \frac{4.0\xi}{\omega_n} = \frac{4}{\zeta \omega_n}$
    *   5% criterion: $t_s \approx \frac{3.0\xi}{\omega_n} = \frac{3}{\zeta \omega_n}$

**Key Relationship:** As $\xi$ increases (approaching 1), $t_p$ increases, $M_p$ decreases, and $t_s$ decreases. Conversely, as $\xi$ decreases (approaching 0), $t_p$ decreases, $M_p$ increases, and $t_s$ increases.

### 4.4. Frequency Response Characteristics (for $0 < \xi < 1$)

The frequency response describes how a system's output varies with the frequency of the input sinusoid. For a second-order system $G(s)$, the frequency response is obtained by substituting $s = j\omega$:

$$
G(j\omega) = \frac{\omega_n^2}{(j\omega)^2 + 2\xi\omega_n (j\omega) + \omega_n^2} = \frac{\omega_n^2}{-\omega^2 + j2\xi\omega_n\omega + \omega_n^2}
$$

$$
G(j\omega) = \frac{\omega_n^2}{\omega_n^2 - \omega^2 + j2\xi\omega_n\omega}
$$

The magnitude and phase of $G(j\omega)$ are:

*   **Magnitude $|G(j\omega)|$**:
    $$
    |G(j\omega)| = \frac{\omega_n^2}{\sqrt{(\omega_n^2 - \omega^2)^2 + (2\xi\omega_n\omega)^2}}
    $$
*   **Phase $\angle G(j\omega)$**:
    $$
    \angle G(j\omega) = -\arctan\left(\frac{2\xi\omega_n\omega}{\omega_n^2 - \omega^2}\right)
    $$

#### 4.4.1. Resonant Peak ($M_r$)

The resonant peak is the maximum magnitude of the frequency response. It occurs at the resonant frequency.

*   **Resonant Frequency ($\omega_r$)**: The frequency at which the maximum magnitude occurs. For $0 \le \xi < \frac{1}{\sqrt{2}}$:
    $$
    \omega_r = \omega_n \sqrt{1 - 2\xi^2}
    $$
    *Note: If $\xi \ge \frac{1}{\sqrt{2}}$, there is no distinct resonant peak (magnitude never exceeds the DC gain), and $\omega_r$ is not defined by this formula.*

*   **Resonant Peak Magnitude ($M_r$)**: The value of $|G(j\omega)|$ at $\omega_r$.
    $$
    M_r = |G(j\omega_r)| = \frac{1}{2\xi\sqrt{1-\xi^2}} \quad \text{for } 0 \le \xi < \frac{1}{\sqrt{2}}
    $$
    *Note: $M_r$ is typically measured relative to the DC gain (which is 1 for our standard transfer function).*

#### 4.4.2. Bandwidth (BW)

The bandwidth is the range of frequencies over which the system's magnitude response is within -3 dB (or $1/\sqrt{2}$) of its DC gain. For a second-order system, it is approximated by the frequency $\omega_b$ where $|G(j\omega_b)| = \frac{1}{\sqrt{2}}|G(0)|$.

$$
BW \approx \omega_n (1 - \sqrt{1-2\xi^2} + \sqrt{2 - 2\xi^2 - 2\sqrt{1-\xi^2}})
$$

A more common and simpler approximation for bandwidth is:

$$
BW \approx \omega_n (1.02 + 0.97\xi) \quad \text{(for } \xi < 0.6)
$$

or more generally:

$$
BW \approx \omega_n
$$

for $\xi$ values that are not too close to 1.

**Key Relationship:**
*   As $\xi$ increases (approaching $\frac{1}{\sqrt{2}}$), $\omega_r$ decreases, $M_r$ decreases, and BW generally increases slightly (or stays relatively constant depending on the approximation used).
*   As $\xi$ decreases (approaching 0), $\omega_r$ approaches $\omega_n$, $M_r$ increases significantly, and BW decreases (approaching 0).

## 5. Simulation Procedure

This topic requires simulating the step and frequency response of a second-order system for various damping ratios ($\xi$) while keeping the natural frequency ($\omega_n$) constant.

**Tools:** MATLAB/Simulink, Python (with SciPy/NumPy), or similar simulation software.

**Steps:**

1.  **Define the System:** Choose a constant natural frequency $\omega_n$. Select a range of damping ratios $\xi$ such that $0 < \xi < 1$ (e.g., 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9).
2.  **Simulate Step Response:**
    *   Implement the second-order transfer function $G(s) = \frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}$ in your simulation environment.
    *   Apply a unit step input to the system.
    *   Record the output response.
    *   From the simulated step response plot, measure/calculate:
        *   Peak Time ($t_p$)
        *   Maximum Overshoot ($M_p$)
        *   Settling Time ($t_s$)
3.  **Simulate Frequency Response:**
    *   Use the same transfer function $G(s)$.
    *   Generate the Bode plot (Magnitude and Phase vs. Frequency).
    *   From the Bode plot, identify/calculate:
        *   Resonant Frequency ($\omega_r$)
        *   Resonant Peak Magnitude ($M_r$)
        *   Bandwidth (BW) (where magnitude drops to -3 dB from DC gain).

## 6. Comparison of Simulated and Experimental Values ($0 < \xi < 1$)

The core of this topic is to compare the values obtained from simulation with values obtained from a physical experiment.

### 6.1. Experimental Setup and Data Acquisition

*   **Physical System:** A physical second-order system is required. This could be an RLC circuit, a mass-spring-damper system, an active filter, etc.
*   **Parameter Identification:** The parameters $\omega_n$ and $\xi$ of the physical system must be identified. This is typically done by analyzing the system's step response or frequency response from experimental measurements.
    *   **From Step Response:** Measure $t_p$, $M_p$, and $t_s$ from an experimental step response. Use the formulas for $t_p$ and $M_p$ to solve for $\xi$ and $\omega_n$.
    *   **From Frequency Response:** Measure the magnitude and phase response of the physical system across a range of frequencies. Identify $\omega_r$, $M_r$, and BW from these experimental curves.
*   **Data Recording:** The experimental measurements are recorded.

### 6.2. Comparison Method

For each chosen damping ratio $\xi$ (and constant $\omega_n$):

1.  **Simulated Values:** Obtain $M_r$, $\omega_r$, and BW from the simulation.
2.  **Experimental Values:** Obtain $M_r$, $\omega_r$, and BW from the experimental data for a system with a similar $\xi$ and $\omega_n$. If a physical system with precisely the desired $\xi$ isn't available, use experimental data from systems with $\xi$ values in the specified range ($0 < \xi < 1$).
3.  **Calculate Percent Error:** For each parameter ($M_r$, $\omega_r$, BW), calculate the percent error between the simulated and experimental values:

    $$
    \text{Percent Error} = \frac{|\text{Simulated Value} - \text{Experimental Value}|}{|\text{Experimental Value}|} \times 100\%
    $$

### 6.3. Expected Trends in Comparison

*   **Resonant Peak ($M_r$) and Resonant Frequency ($\omega_r$):**
    *   **Simulated:** As $\xi$ increases, $M_r$ decreases, and $\omega_r$ decreases.
    *   **Experimental:** Similar trends are expected. However, real-world systems may have nonlinearities or unmodeled dynamics that cause deviations. Higher-order effects can flatten the resonant peak and shift the resonant frequency.
*   **Bandwidth (BW):**
    *   **Simulated:** BW generally increases as $\xi$ increases (up to a point), approaching $\omega_n$.
    *   **Experimental:** Similar trends are expected. Factors like sensor limitations or actuator dynamics can affect the measured bandwidth.

### 6.4. Factors Causing Discrepancies

*   **Modeling Errors:** The chosen second-order model might not perfectly represent the physical system. Unmodeled dynamics (e.g., higher-order poles, delays, saturation) can cause significant differences.
*   **Parameter Uncertainty:** The identified values of $\omega_n$ and $\xi$ for both the simulated and experimental systems may not be perfectly accurate.
*   **Nonlinearities:** Real physical systems often exhibit nonlinearities (e.g., friction, saturation, hysteresis) that are not captured by linear models.
*   **Measurement Noise:** Experimental data is always subject to noise, which can affect the accuracy of extracted parameters.
*   **Instrumentation Limitations:** The performance of sensors, actuators, and data acquisition systems can introduce errors.

## 7. Examples and Applications

Let's consider a system with $\omega_n = 10$ rad/s and compare simulated vs. expected/experimental trends for $\xi = 0.2$ and $\xi = 0.7$.

**Case 1: $\xi = 0.2$ (Strongly Underdamped)**

*   **Simulated Step Response:** High overshoot ($M_p = e^{-\frac{0.2\pi}{\sqrt{1-0.04}}} \approx 44.3\%$), relatively fast rise time, longer settling time.
*   **Simulated Frequency Response:**
    *   $\omega_r = 10 \sqrt{1 - 2(0.2)^2} = 10 \sqrt{1 - 0.08} = 10 \sqrt{0.92} \approx 9.59$ rad/s.
    *   $M_r = \frac{1}{2(0.2)\sqrt{1-(0.2)^2}} = \frac{1}{0.4\sqrt{0.96}} \approx \frac{1}{0.392} \approx 2.55$ (Magnitude).
    *   BW $\approx 10(1.02 + 0.97 \times 0.2) = 10(1.02 + 0.194) = 10(1.214) \approx 12.14$ rad/s.

**Case 2: $\xi = 0.7$ (Weakly Underdamped)**

*   **Simulated Step Response:** Lower overshoot ($M_p = e^{-\frac{0.7\pi}{\sqrt{1-0.49}}} = e^{-\frac{0.7\pi}{\sqrt{0.51}}} \approx e^{-2.17} \approx 11.3\%$), slower rise time, shorter settling time.
*   **Simulated Frequency Response:**
    *   $\omega_r = 10 \sqrt{1 - 2(0.7)^2} = 10 \sqrt{1 - 0.98} = 10 \sqrt{0.02} \approx 1.41$ rad/s. (Note: $\xi=0.7$ is close to $1/\sqrt{2} \approx 0.707$. If $\xi > 1/\sqrt{2}$, $\omega_r$ is not defined by this formula.)
    *   $M_r = \frac{1}{2(0.7)\sqrt{1-(0.7)^2}} = \frac{1}{1.4\sqrt{0.51}} \approx \frac{1}{1.4 \times 0.714} \approx \frac{1}{1} \approx 1$ (Magnitude).
    *   BW $\approx 10(1.02 + 0.97 \times 0.7) = 10(1.02 + 0.679) = 10(1.699) \approx 17.0$ rad/s.

**Observation:** As $\xi$ increases from 0.2 to 0.7:
*   Overshoot ($M_p$) decreases.
*   Settling time ($t_s$) decreases.
*   Resonant peak magnitude ($M_r$) decreases.
*   Resonant frequency ($\omega_r$) decreases (until $\xi \ge 1/\sqrt{2}$, where it's undefined by the formula).
*   Bandwidth (BW) increases.

This aligns with the theoretical predictions and forms the basis of comparison with experimental data.

## 8. Practice Questions and Answers

**Question 1:**
For a second-order system with $\omega_n = 5$ rad/s and $\xi = 0.3$, calculate the resonant frequency ($\omega_r$) and the resonant peak magnitude ($M_r$).

**Answer 1:**
The system is underdamped since $0 < \xi < 1$.
Given: $\omega_n = 5$ rad/s, $\xi = 0.3$.
Since $\xi = 0.3 < 1/\sqrt{2} \approx 0.707$, we can use the formulas for $\omega_r$ and $M_r$.

Resonant Frequency:
$$
\omega_r = \omega_n \sqrt{1 - 2\xi^2} = 5 \sqrt{1 - 2(0.3)^2} = 5 \sqrt{1 - 2(0.09)} = 5 \sqrt{1 - 0.18} = 5 \sqrt{0.82}
$$
$$
\omega_r \approx 5 \times 0.9055 \approx 4.53 \text{ rad/s}
$$

Resonant Peak Magnitude:
$$
M_r = \frac{1}{2\xi\sqrt{1-\xi^2}} = \frac{1}{2(0.3)\sqrt{1-(0.3)^2}} = \frac{1}{0.6\sqrt{1-0.09}} = \frac{1}{0.6\sqrt{0.91}}
$$
$$
M_r \approx \frac{1}{0.6 \times 0.9539} \approx \frac{1}{0.5723} \approx 1.75 \text{ (Magnitude)}
$$

**Question 2:**
If a physical system with $\omega_n = 5$ rad/s and $\xi = 0.3$ is tested, and the experimental measurements yield $M_r = 1.82$ and $\omega_r = 4.65$ rad/s, what is the percent error in $M_r$ and $\omega_r$ compared to the theoretical simulated values?

**Answer 2:**
Theoretical Simulated Values: $M_r = 1.75$, $\omega_r = 4.53$ rad/s.
Experimental Values: $M_r = 1.82$, $\omega_r = 4.65$ rad/s.

Percent Error in $M_r$:
$$
\text{Percent Error}_{M_r} = \frac{|1.75 - 1.82|}{|1.82|} \times 100\% = \frac{0.07}{1.82} \times 100\% \approx 3.85\%
$$

Percent Error in $\omega_r$:
$$
\text{Percent Error}_{\omega_r} = \frac{|4.53 - 4.65|}{|4.65|} \times 100\% = \frac{0.12}{4.65} \times 100\% \approx 2.58\%
$$

**Question 3:**
What happens to the resonant peak magnitude ($M_r$) and resonant frequency ($\omega_r$) as the damping ratio $\xi$ increases from 0.1 to 0.8 for a second-order system with a constant natural frequency $\omega_n$?

**Answer 3:**
As $\xi$ increases from 0.1 to 0.8:
*   **Resonant Peak Magnitude ($M_r$)**: $M_r$ will **decrease**. This is because the formula $M_r = \frac{1}{2\xi\sqrt{1-\xi^2}}$ has $\xi$ in the denominator, so a larger $\xi$ leads to a smaller $M_r$.
*   **Resonant Frequency ($\omega_r$)**: $\omega_r = \omega_n \sqrt{1 - 2\xi^2}$. As $\xi$ increases, $2\xi^2$ increases, $1-2\xi^2$ decreases, and thus $\omega_r$ will **decrease**. However, it's important to note that this formula is only valid for $\xi < 1/\sqrt{2}$. For $\xi \ge 1/\sqrt{2}$, there is no resonant peak in the typical sense, and $\omega_r$ is not defined by this formula (the maximum magnitude occurs at $\omega=0$ or the peak is very flat).

**Question 4:**
For a second-order system, how does the bandwidth typically change as the damping ratio $\xi$ increases for $0 < \xi < 1$?

**Answer 4:**
For $0 < \xi < 1$, the bandwidth (BW) of a second-order system generally **increases** as the damping ratio $\xi$ increases. This is because a higher damping ratio leads to a response that is less oscillatory and closer to the desired steady-state value across a wider range of frequencies.

## 9. Important Points to Remember

*   **Underdamped Region ($0 < \xi < 1$):** This is where resonant phenomena and significant overshoot occur.
*   **Resonant Peak ($M_r$) and Frequency ($\omega_r$):** These are key frequency-domain indicators of oscillatory behavior. $M_r$ indicates how much the system's gain is amplified at a specific frequency, and $\omega_r$ is the frequency at which this amplification occurs.
*   **Bandwidth (BW):** This represents the range of frequencies that the system can effectively pass. A larger bandwidth generally implies a faster system response but can also mean more susceptibility to noise.
*   **Theoretical vs. Experimental:** Expect discrepancies between simulated and experimental results due to modeling limitations, parameter inaccuracies, and real-world system nonlinearities.
*   **Formula Validity:** Be mindful of the conditions under which formulas for $\omega_r$ and $M_r$ are valid (i.e., $0 \le \xi < 1/\sqrt{2}$).
*   **Impact of $\xi$:** As $\xi$ increases in the underdamped region, the system becomes "less oscillatory." This translates to:
    *   Decreased overshoot ($M_p$).
    *   Decreased resonant peak magnitude ($M_r$).
    *   Decreased resonant frequency ($\omega_r$).
    *   Decreased settling time ($t_s$).
    *   Increased bandwidth (BW).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 10. References

*   **Ogata, K. (2009). *Modern Control Engineering* (5th ed.). Pearson.**
    *   Chapters related to second-order systems, transient response, and frequency response analysis. Ogata provides detailed derivations and examples.
*   **Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley.**
    *   Similar coverage to Ogata, focusing on performance specifications and their relation to system parameters. Nise often provides clear graphical interpretations.
*   **Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering* (5th ed.). New Age.**
    *   Offers a comprehensive treatment of classical control theory, including second-order system analysis.

This module's practical objective is to bridge the gap between theoretical understanding of second-order systems and their real-world behavior, highlighting the importance of accurate modeling and the limitations of linear approximations.

---
**End of Module 9 Notes**