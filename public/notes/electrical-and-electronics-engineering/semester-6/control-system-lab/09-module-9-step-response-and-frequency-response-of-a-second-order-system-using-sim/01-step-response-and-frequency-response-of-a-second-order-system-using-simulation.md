---
title: "Step response and frequency response of a second order system using simulation"
subject: "CONTROL SYSTEM LAB"
module: "Module 9: Step response and frequency response of a second order system using simulation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36771"
status: "completed"
scrapedAt: "2026-05-23T16:25:18.918Z"
---
# CONTROL SYSTEM LAB: Module 9 - Step Response and Frequency Response of a Second-Order System Using Simulation

## Introduction

This module focuses on understanding the behavior of second-order control systems through simulation. We will explore the crucial aspects of their response to a standard input signal (step input) and their behavior across different frequencies. This simulation-based approach allows us to analyze system parameters, predict performance, and gain practical insights without the need for physical hardware.

**Target Audience:** Undergraduate students of Electrical Engineering, Electronics Engineering, Instrumentation Engineering, and related fields.

**Prerequisites:** Basic understanding of control systems, Laplace transforms, and familiarity with a simulation software (e.g., MATLAB/Simulink, Python with SciPy/Control).

---

## 1. Understanding Second-Order Systems

Second-order systems are fundamental building blocks in control system analysis and design. They are characterized by a second-order differential equation and a transfer function with a denominator of degree two.

### 1.1 General Form of a Second-Order Transfer Function

The standard form of a second-order transfer function in the Laplace domain is given by:

$G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$

Where:
*   **$\omega_n$ (Undamped Natural Frequency):** The frequency at which the system would oscillate if there were no damping. It represents the inherent oscillatory tendency of the system. Units: rad/s.
*   **$\zeta$ (Damping Ratio):** A dimensionless parameter that describes how oscillations in a system decay after a disturbance. It dictates the type of response:
    *   $\zeta = 0$: Undamped (continuous oscillations)
    *   $0 < \zeta < 1$: Underdamped (oscillations decay over time)
    *   $\zeta = 1$: Critically damped (fastest response without overshoot)
    *   $\zeta > 1$: Overdamped (slow, no oscillations)
*   **$\omega_d$ (Damped Natural Frequency):** The frequency of oscillation in an underdamped system. $\omega_d = \omega_n \sqrt{1 - \zeta^2}$.

**Textbook Reference:**
*   **Ogata, 5th Ed., Chapter 2 & 5:** Discusses modeling of physical systems and the standard second-order transfer function.
*   **Nise, 5th Ed., Chapter 4:** Covers transient response analysis and the standard second-order model.

### 1.2 Key Performance Specifications for Second-Order Systems

Understanding the performance of a second-order system is crucial for effective control design. These specifications are typically evaluated from the system's step response.

*   **Rise Time ($t_r$):** The time taken for the output to rise from 10% to 90% of its final steady-state value.
*   **Peak Time ($t_p$):** The time taken for the output to reach its first peak.
*   **Maximum Overshoot ($M_p$):** The maximum percentage by which the output exceeds its final steady-state value.
    $M_p = e^{-\frac{\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100\%$
*   **Settling Time ($t_s$):** The time required for the output to settle within a specified tolerance band (usually 2% or 5%) of its final steady-state value.
    *   For $\zeta < 0.7$, $t_s \approx \frac{4}{\zeta\omega_n}$ (for 2% tolerance)
    *   For $\zeta < 0.7$, $t_s \approx \frac{3}{\zeta\omega_n}$ (for 5% tolerance)
*   **Steady-State Error ($e_{ss}$):** The difference between the final steady-state value of the output and the desired input value.

**Textbook Reference:**
*   **Nise, 5th Ed., Chapter 4:** Provides detailed derivations and formulas for these performance specifications.
*   **Nagrath & Gopal, 5th Ed., Chapter 5:** Explains transient response characteristics and their relation to system parameters.

---

## 2. Step Response Analysis Using Simulation

The step response is a fundamental tool to characterize the transient behavior of a control system. By simulating the response of a second-order system to a unit step input, we can observe how changes in $\zeta$ and $\omega_n$ affect performance.

### 2.1 Simulating the Unit Step Response

A unit step input is defined as $u(t) = 1$ for $t \ge 0$ and $u(t) = 0$ for $t < 0$. In the Laplace domain, its transform is $U(s) = 1/s$.

The output $Y(s)$ of the system is given by $Y(s) = G(s)U(s)$.

**Simulation Steps (Conceptual - specific to software):**

1.  **Define the System Transfer Function:** Input the parameters $\zeta$ and $\omega_n$ to construct the transfer function $G(s)$.
2.  **Define the Input Signal:** Specify a unit step input.
3.  **Simulate:** Use the simulation tool to compute the output response $y(t)$ over a specified time duration.
4.  **Analyze the Output:** Plot $y(t)$ and extract the performance specifications (rise time, peak time, overshoot, settling time, steady-state error).

**Example Scenario:**
Let's consider a second-order system with:
*   $\omega_n = 5 \text{ rad/s}$
*   $\zeta = 0.5$ (Underdamped)

The transfer function is:
$G(s) = \frac{5^2}{s^2 + 2(0.5)(5)s + 5^2} = \frac{25}{s^2 + 5s + 25}$

By simulating the step response of this system, we would observe an output that initially rises, overshoots its final value, oscillates with decreasing amplitude, and eventually settles to a steady-state value (which is 1 for a unit step input with a stable system).

**Learning Outcome Alignment:**
*   **CO1:** By varying $\zeta$ and $\omega_n$ and observing the response, we can infer how these parameters affect system behavior, indirectly aiding in identifying parameters to model a physical system that exhibits similar characteristics. (K3)
*   **CO2:** The simulation directly allows us to "determine the performance specifications" (rise time, overshoot, settling time) of the simulated system. (K3)
*   **CO3:** This entire process of simulating and analyzing the step response of a linear continuous-time system is a direct application of analyzing such systems using simulation tools. (K3)

**Textbook Reference:**
*   **Ogata, 5th Ed., Chapter 5:** Details the analytical solutions for the step response of second-order systems, which simulations are based on.
*   **Nise, 5th Ed., Chapter 4:** Provides methods for calculating performance indices from the time-domain response.

---

## 3. Frequency Response Analysis Using Simulation

Frequency response analysis describes how a system responds to sinusoidal inputs of varying frequencies. It's particularly useful for understanding stability and designing controllers.

### 3.1 Key Concepts in Frequency Response

*   **Sinusoidal Input:** $u(t) = A \sin(\omega t + \phi)$
*   **System Output:** For a stable linear time-invariant (LTI) system, the steady-state output to a sinusoidal input is also a sinusoid of the same frequency but with potentially different amplitude and phase.
    $y_{ss}(t) = |G(j\omega)| A \sin(\omega t + \phi + \angle G(j\omega))$
*   **Frequency Response Function $G(j\omega)$:** Obtained by substituting $s = j\omega$ into the transfer function.
    $G(j\omega) = \text{Magnitude} \times e^{j \text{Phase}}$
    *   **Magnitude $|G(j\omega)|$:** The ratio of the output amplitude to the input amplitude.
    *   **Phase $\angle G(j\omega)$:** The phase shift between the output and the input sinusoid.

### 3.2 Plotting Frequency Response: Bode Plots

Bode plots are a standard graphical representation of the frequency response, consisting of two plots:
1.  **Magnitude Plot:** $|G(j\omega)|$ (in dB) vs. $\omega$ (logarithmic scale).
2.  **Phase Plot:** $\angle G(j\omega)$ (in degrees or radians) vs. $\omega$ (logarithmic scale).

### 3.3 Simulating Frequency Response

Simulation tools can directly compute and plot the frequency response of a system. This often involves using functions that analyze the system's transfer function at various frequencies.

**Simulation Steps (Conceptual):**

1.  **Define the System Transfer Function:** As before, input $\zeta$ and $\omega_n$.
2.  **Compute Frequency Response:** Use the simulation tool's frequency response analysis functions (e.g., `bode` in MATLAB/Simulink, `control.bode_plot` in Python).
3.  **Analyze Bode Plots:**
    *   **Gain Crossover Frequency ($\omega_{gc}$):** The frequency at which the magnitude plot crosses the 0 dB line.
    *   **Phase Crossover Frequency ($\omega_{pc}$):** The frequency at which the phase plot crosses the -180° line.
    *   **Gain Margin (GM):** The amount of gain that can be added to the system before it becomes unstable. It is the negative of the magnitude (in dB) at the phase crossover frequency.
    *   **Phase Margin (PM):** The amount of additional phase lag that can be added to the system before it becomes unstable. It is the difference between -180° and the phase angle at the gain crossover frequency.

**Example Scenario:**
Consider the same system: $G(s) = \frac{25}{s^2 + 5s + 25}$ with $\omega_n = 5 \text{ rad/s}$ and $\zeta = 0.5$.

By simulating the frequency response and plotting the Bode diagram:
*   We can see how the gain attenuates at higher frequencies.
*   The phase lag increases with frequency.
*   We can extract the gain and phase margins, which are critical indicators of system stability. For an underdamped system, we would expect a positive phase margin, indicating stability.

**Learning Outcome Alignment:**
*   **CO1:** Understanding how $\zeta$ and $\omega_n$ influence the shape of the Bode plots (e.g., the peak in the magnitude plot for underdamped systems) helps in relating physical system characteristics to their frequency response. (K3)
*   **CO2:** Key frequency domain performance specifications like Gain Margin and Phase Margin can be directly determined from the simulated Bode plots. (K3)
*   **CO3:** This section directly addresses the analysis of a linear continuous-time system model using simulation tools by examining its frequency response. (K3)

**Textbook Reference:**
*   **Ogata, 5th Ed., Chapter 9:** Provides a comprehensive treatment of frequency response analysis, including Bode plots and stability criteria.
*   **Nise, 5th Ed., Chapter 7:** Details frequency response methods, Bode plots, and their relationship to transient response and stability.
*   **Gopal, 5th Ed., Chapter 8:** Covers frequency domain analysis and the interpretation of Bode plots.

---

## 4. Connecting Step and Frequency Responses

A fundamental aspect of control theory is the relationship between a system's time-domain (step) and frequency-domain (frequency) responses.

*   **Underdamped Systems:**
    *   **Step Response:** Exhibit overshoot and oscillations.
    *   **Frequency Response:** Characterized by a peak in the magnitude plot near the damped natural frequency ($\omega_d$). A larger peak generally corresponds to greater overshoot in the step response. The phase margin is also related to the oscillatory nature.
*   **Critically Damped and Overdamped Systems:**
    *   **Step Response:** No overshoot, settle relatively quickly (critically damped) or slowly (overdamped).
    *   **Frequency Response:** Magnitude plot tends to roll off smoothly without significant peaks.

**Example:**
Consider two systems:
1.  $G_1(s) = \frac{25}{s^2 + 5s + 25}$ ($\zeta = 0.5, \omega_n = 5$)
2.  $G_2(s) = \frac{25}{s^2 + 10s + 25}$ ($\zeta = 1.0, \omega_n = 5$)

Simulating the step response: $G_1$ will show overshoot, while $G_2$ will be critically damped.
Simulating the frequency response: $G_1$ will likely have a noticeable peak in its magnitude plot around $\omega_d = 5 \sqrt{1 - 0.5^2} \approx 4.33$ rad/s, whereas $G_2$ will not have such a peak.

**Important Point:** The bandwidth of a system (related to the gain crossover frequency) is a measure of the range of frequencies the system can effectively respond to. A wider bandwidth generally implies a faster system with quicker transient response.

**Textbook Reference:**
*   **Ogata, 5th Ed., Chapter 5 & 9:** Discusses the correlation between time and frequency domain characteristics.
*   **Nise, 5th Ed., Chapter 4 & 7:** Reinforces the connection between transient and frequency responses.

---

## 5. Designing Controllers Using Simulation (Brief Overview for Context)

While the primary focus of this module is analysis, understanding the performance specifications derived from step and frequency responses is critical for controller design.

*   **Proportional (P) Controller:** Increases the system's speed of response but can reduce stability margins.
*   **Proportional-Integral (PI) Controller:** Eliminates steady-state error but can degrade transient response.
*   **Proportional-Derivative (PD) Controller:** Improves transient response (reduces overshoot, increases speed) by adding damping.
*   **Proportional-Integral-Derivative (PID) Controller:** Offers the most flexibility in shaping the system's response.

**How simulation helps in design (CO4):**
After simulating the open-loop system's step and frequency responses, we can:
1.  **Identify Performance Deficiencies:** Is the response too slow? Too much overshoot? Poor stability margins?
2.  **Choose a Controller Type:** Based on the deficiencies, decide if a P, PI, PD, or PID controller is appropriate.
3.  **Tune Controller Gains:** Use simulation to iteratively adjust the controller gains ($K_p, K_i, K_d$) to meet desired performance specifications (e.g., settling time, overshoot, phase margin).
4.  **Validate Design:** Simulate the closed-loop system with the designed controller to confirm it meets the requirements.

**Example of Design (CO4):**
Suppose a second-order system has too much overshoot in its step response. A PD controller could be designed. By simulating the closed-loop system with varying $K_p$ and $K_d$ values, we can find the combination that reduces overshoot while maintaining acceptable speed and stability. This involves analyzing the closed-loop system's step response and possibly its frequency response (e.g., checking the phase margin of the closed-loop system).

**Learning Outcome Alignment:**
*   **CO4:** This module provides the foundational knowledge of how to analyze system behavior (through step and frequency response). This analysis is directly used to "Design suitable controllers/compensators to meet the performance requirements using simulation tools." For instance, if the step response shows poor settling time, we know from this module that increasing damping ratio ($\zeta$) is beneficial, which can be achieved with a PD controller whose parameters are tuned via simulation. (K5)

**Textbook Reference:**
*   **Ogata, 5th Ed., Chapter 6 & 7:** Covers classical control system design techniques (root locus, frequency response methods) for controllers.
*   **Nise, 5th Ed., Chapter 8 & 9:** Details controller design methods and their impact on performance specifications.
*   **Gopal, 5th Ed., Chapter 10 & 11:** Discusses design of controllers for achieving desired system characteristics.

---

## 6. Practical Exercises and Questions

**Instructions:** Use a simulation tool (e.g., MATLAB/Simulink, Python with control library) to perform these exercises.

**Exercise 1: Step Response Analysis**

Consider a second-order system with the transfer function:
$G(s) = \frac{9}{s^2 + 3s + 9}$

1.  Identify $\omega_n$ and $\zeta$. Classify the system (underdamped, critically damped, overdamped).
2.  Simulate the unit step response of this system.
3.  Plot the step response and determine:
    *   Rise Time ($t_r$)
    *   Peak Time ($t_p$)
    *   Maximum Overshoot ($M_p$)
    *   Settling Time ($t_s$) (using the 2% criterion)
    *   Steady-State Error ($e_{ss}$)

**Exercise 2: Effect of Damping Ratio on Step Response**

Keep $\omega_n = 5 \text{ rad/s}$ and simulate the unit step response for the following three systems:

*   System A: $\zeta = 0.2$ (e.g., $G_A(s) = \frac{25}{s^2 + 2(0.2)(5)s + 25}$)
*   System B: $\zeta = 0.7$ (e.g., $G_B(s) = \frac{25}{s^2 + 2(0.7)(5)s + 25}$)
*   System C: $\zeta = 1.5$ (e.g., $G_C(s) = \frac{25}{s^2 + 2(1.5)(5)s + 25}$)

1.  Plot all three responses on the same graph.
2.  Compare the overshoot, settling time, and rise time for each system.
3.  Comment on how the damping ratio affects the transient response characteristics.

**Exercise 3: Effect of Undamped Natural Frequency on Step Response**

Keep $\zeta = 0.5$ and simulate the unit step response for the following two systems:

*   System X: $\omega_n = 2 \text{ rad/s}$ (e.g., $G_X(s) = \frac{2^2}{s^2 + 2(0.5)(2)s + 2^2}$)
*   System Y: $\omega_n = 8 \text{ rad/s}$ (e.g., $G_Y(s) = \frac{8^2}{s^2 + 2(0.5)(8)s + 8^2}$)

1.  Plot both responses on the same graph.
2.  Compare the rise time, peak time, and settling time for each system.
3.  Comment on how the undamped natural frequency affects the transient response characteristics.

**Exercise 4: Frequency Response Analysis (Bode Plots)**

Consider the system from Exercise 1: $G(s) = \frac{9}{s^2 + 3s + 9}$

1.  Generate the Bode plot (magnitude and phase) for this system.
2.  From the Bode plot, estimate:
    *   The bandwidth (approximately the frequency where the magnitude drops by 3 dB from its DC value).
    *   The gain margin.
    *   The phase margin.
3.  Comment on the stability of the system based on the gain and phase margins.

**Exercise 5: Connecting Step and Frequency Responses**

Consider two systems:

*   System P: $\omega_n = 5$, $\zeta = 0.3$
*   System Q: $\omega_n = 5$, $\zeta = 0.8$

1.  Simulate the unit step responses for both systems and observe the overshoot and settling time.
2.  Generate the Bode plots for both systems.
3.  Observe the peak in the magnitude plot for each system. Which system shows a higher peak?
4.  Relate the presence and height of the peak in the magnitude plot to the overshoot observed in the step response.

---

**Answers to Exercises (Conceptual/Expected Outcomes):**

**Exercise 1:**
1.  $\omega_n = 3 \text{ rad/s}$, $\zeta = 0.5$. The system is **underdamped**.
2.  Simulation will show an oscillatory response settling to 1.
3.  *   $t_r$: Expected to be in the range of 0.5-1.0 seconds.
    *   $t_p$: Expected to be around 1-1.5 seconds.
    *   $M_p$: Expected to be around 10-20%.
    *   $t_s$: Expected to be around 2-3 seconds (using 2% criterion).
    *   $e_{ss}$: 0 (for a Type 0 system with a step input).

**Exercise 2:**
*   **System A ($\zeta=0.2$):** Highest overshoot, longest settling time, slowest rise time.
*   **System B ($\zeta=0.7$):** Moderate overshoot, fastest settling time, faster rise time.
*   **System C ($\zeta=1.5$):** No overshoot, very slow response, no oscillations.
*   **Comment:** Increasing $\zeta$ reduces overshoot and settling time (up to $\zeta=1$), making the response faster but more sluggish for $\zeta > 1$.

**Exercise 3:**
*   **System X ($\omega_n=2$):** Slower response overall (longer rise time, peak time, settling time), but same relative overshoot as $\zeta$ is the same.
*   **System Y ($\omega_n=8$):** Faster response overall (shorter rise time, peak time, settling time), with the same relative overshoot.
*   **Comment:** Increasing $\omega_n$ speeds up the response without affecting the relative overshoot or settling time (for a given $\zeta$).

**Exercise 4:**
1.  Bode plot generation.
2.  *   Bandwidth: Likely around 4-5 rad/s.
    *   Gain Margin: Positive (e.g., > 10 dB).
    *   Phase Margin: Positive (e.g., > 45 degrees).
3.  The positive gain and phase margins confirm the system is stable.

**Exercise 5:**
1.  System P ($\zeta=0.3$) will have significantly higher overshoot and a longer settling time than System Q ($\zeta=0.8$).
2.  Bode plots will be generated.
3.  System P will have a much more pronounced peak in its magnitude plot around $\omega_d \approx 4.58$ rad/s compared to System Q, which will have a smaller or no discernible peak.
4.  **Relation:** A higher peak in the magnitude plot of the frequency response directly correlates to a larger overshoot in the step response. The frequency at which this peak occurs is related to the damped natural frequency ($\omega_d$).

---

## 7. Important Points to Remember

*   **Second-order systems are fundamental:** Their behavior with different $\zeta$ and $\omega_n$ forms the basis for understanding more complex systems.
*   **Step response:** Provides direct insight into transient performance (overshoot, speed, settling).
*   **Frequency response (Bode plots):** Offers information on stability (margins) and bandwidth, crucial for system design and robustness.
*   **Simulation is key:** It allows for hands-on exploration of system dynamics without physical hardware.
*   **Correlation exists:** Time-domain performance (e.g., overshoot) is directly linked to frequency-domain characteristics (e.g., peak in magnitude plot).
*   **Controller Design relies on Analysis:** Understanding these responses is a prerequisite for designing effective controllers to meet specific performance requirements.

---

This concludes the study notes for Module 9. By working through these concepts and exercises, you should gain a solid understanding of second-order system behavior through simulation, which is essential for your journey in control system analysis and design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
