---
title: "b. Comparison of the delay time, rise time, peak overshoot and settling time with the experimental values for 0<ξ <1."
subject: "CONTROL SYSTEM LAB"
module: "Module 9: Step response and frequency response of a second order system using simulation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36774"
status: "completed"
scrapedAt: "2026-05-23T16:25:21.076Z"
---
# CONTROL SYSTEM LAB - Module 9: Step Response and Frequency Response of a Second-Order System using Simulation

## Topic: b. Comparison of the Delay Time, Rise Time, Peak Overshoot, and Settling Time with Experimental Values for 0 < ξ < 1

---

### Introduction

This module focuses on understanding the transient response characteristics of a second-order system and comparing simulated results with experimental data. A second-order system is a fundamental building block in control systems analysis and design. Its behavior is primarily dictated by its damping ratio ($\xi$) and natural frequency ($\omega_n$). When subjected to a unit step input, the system's response exhibits several key performance metrics: delay time ($t_d$), rise time ($t_r$), peak overshoot ($M_p$), and settling time ($t_s$). This section delves into the comparison of these parameters between simulation and experimental results for underdamped systems (0 < $\xi$ < 1).

---

### 1. Learning Outcomes Covered

By the end of this topic, you should be able to:

*   **Understand the characteristics of a second-order system's step response for 0 < ξ < 1.**
*   **Define and identify key transient response parameters: delay time, rise time, peak overshoot, and settling time.**
*   **Simulate the step response of a second-order system using common simulation tools (e.g., MATLAB/Simulink).**
*   **Extract experimental step response data from physical systems.**
*   **Compare and analyze the simulated and experimental values of delay time, rise time, peak overshoot, and settling time.**
*   **Discuss potential reasons for discrepancies between simulated and experimental results.**
*   **Relate these transient response parameters to the damping ratio ($\xi$) and natural frequency ($\omega_n$).**

---

### 2. Key Concepts and Definitions

#### 2.1. Second-Order System

A standard second-order system is typically represented by its transfer function:

$G(s) = \frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}$

where:
*   $\omega_n$: Natural frequency (radians per second) - determines the speed of response if damping were zero.
*   $\xi$: Damping ratio - indicates the level of damping in the system.

#### 2.2. Transient Response Parameters (for 0 < ξ < 1 - Underdamped Systems)

When a second-order system is subjected to a unit step input, its response $c(t)$ can be characterized by the following parameters:

*   **Delay Time ($t_d$)**: The time required for the response to reach 50% of its final steady-state value for the first time.
    *   Formula: $t_d = \frac{1 + 0.7\xi}{\omega_n}$
    *   **Key Concept:** A measure of how quickly the system starts to respond.

*   **Rise Time ($t_r$)**: The time required for the response to rise from 10% to 90% of its final steady-state value. For an underdamped system, this is often defined as the time to go from 0% to 100% of the final value, or from the first time it crosses the final value to the time it reaches the final value again after the overshoot. The most common definition for second-order systems is:
    *   Formula: $t_r = \frac{\pi - \cos^{-1}(\xi)}{\omega_n\sqrt{1 - \xi^2}}$
    *   **Key Concept:** How quickly the system reaches its final value (or a significant portion of it).

*   **Peak Overshoot ($M_p$)**: The maximum amount that the response exceeds its final steady-state value, usually expressed as a percentage of the final value.
    *   Formula: $M_p = e^{\left(-\frac{\xi\pi}{\sqrt{1 - \xi^2}}\right)} \times 100\%$
    *   **Key Concept:** Indicates the extent of oscillation beyond the final value.

*   **Settling Time ($t_s$)**: The time required for the response to reach and stay within a certain percentage (typically 2% or 5%) of its final steady-state value.
    *   For 2% criterion: $t_s \approx \frac{4}{\xi\omega_n}$
    *   For 5% criterion: $t_s \approx \frac{3}{\xi\omega_n}$
    *   **Key Concept:** A measure of how long it takes for the system to stabilize.

#### 2.3. Undamped Natural Frequency ($\omega_n$)

*   Represents the frequency of oscillation if there were no damping ($\xi=0$).

#### 2.4. Damping Ratio ($\xi$)

*   **$\xi < 0$**: Unstable system.
*   **$\xi = 0$**: Undamped system (sustained oscillations).
*   **$0 < \xi < 1$**: Underdamped system (oscillatory response that decays over time). This is the focus of this topic.
*   **$\xi = 1$**: Critically damped system (fastest response without overshoot).
*   **$\xi > 1$**: Overdamped system (slow response without overshoot).

---

### 3. Simulation of Second-Order System Step Response

#### 3.1. Using MATLAB/Simulink

**Objective:** To generate the step response plot and extract the transient parameters from the simulation.

**Steps:**

1.  **Define System Parameters:** Choose values for $\omega_n$ and $\xi$ (e.g., $\omega_n = 5$ rad/s, $\xi = 0.4$).
2.  **Create Transfer Function:** In MATLAB, define the transfer function using the `tf` command.
    ```matlab
    num = [wn^2];
    den = [1, 2*xi*wn, wn^2];
    sys = tf(num, den);
    ```
3.  **Apply Step Input:** Use the `step` command in MATLAB or the Step Input block in Simulink.
    ```matlab
    [y, t] = step(sys); % y: output response, t: time vector
    ```
4.  **Plot the Response:** Plot `y` versus `t`.
    ```matlab
    plot(t, y);
    xlabel('Time (s)');
    ylabel('Amplitude');
    title('Step Response of Second-Order System');
    grid on;
    ```
5.  **Extract Transient Parameters (MATLAB's `stepinfo`):** MATLAB's `stepinfo` function is a powerful tool for automatically calculating these parameters.
    ```matlab
    info = stepinfo(sys);
    td_sim = info.DelayTime;
    tr_sim = info.RiseTime;
    Mp_sim = info.Overshoot;
    ts_sim = info.SettlingTime;
    ```
6.  **Alternatively, extract from plot:** You can manually identify these values from the plotted graph or by inspecting the `y` and `t` vectors in MATLAB.

**Simulink Approach:**

1.  Create a new Simulink model.
2.  Add a "Step" block, a "Transfer Fcn" block, and a "Scope" block.
3.  Connect the output of the "Step" block to the input of the "Transfer Fcn" block.
4.  Connect the output of the "Transfer Fcn" block to the input of the "Scope" block.
5.  Double-click the "Transfer Fcn" block and enter the transfer function parameters: `num = [wn^2]` and `den = [1 2*xi*wn wn^2]`.
6.  Run the simulation.
7.  Open the "Scope" block to view the response.
8.  To get parameters, you can:
    *   Use the "Simulation Data Inspector" (requires configuring the Scope to log data).
    *   Add a "To Workspace" block and then use MATLAB commands to analyze the logged data.
    *   For automatic parameter extraction, you might need to use specific blocks or scripting in conjunction with Simulink.

---

### 4. Experimental Setup and Data Acquisition

**Objective:** To obtain real-world step response data from a physical system and compare it with simulation.

**Typical Experimental Setup:**

*   **Physical System:** This could be an electromechanical system (e.g., DC motor position control, mass-spring-damper system), an electronic circuit (e.g., RLC circuit), or a simulated physical system within the lab environment.
*   **Signal Generator:** To provide a step input signal to the system.
*   **Sensors:** To measure the system's output.
*   **Data Acquisition (DAQ) Device/Oscilloscope:** To record the input and output signals over time.
*   **Controller/System Interface:** To connect the signal generator, sensors, and DAQ.

**Data Acquisition Process:**

1.  **Model Identification (CO1):** Before applying a step input, you might need to identify the system's parameters ($\omega_n$, $\xi$) from other experiments or by analyzing its structure.
2.  **Apply Step Input:** Set the signal generator to produce a unit step input. Ensure the amplitude and duration are appropriate for the system.
3.  **Record Signals:** Use the DAQ device or oscilloscope to simultaneously record the input step signal and the output response signal.
4.  **Save Data:** Save the recorded data in a format that can be imported into MATLAB or other analysis software (e.g., `.csv`, `.txt`).

**Extracting Experimental Transient Parameters (CO2):**

1.  **Import Data:** Load the recorded data into MATLAB.
    ```matlab
    exp_data = readtable('experimental_step_response.csv');
    time_exp = exp_data.Time;
    input_exp = exp_data.Input;
    output_exp = exp_data.Output;
    ```
2.  **Normalize Output:** Ensure the experimental output is normalized to a steady-state value of 1 (if the input was a unit step). If the steady-state value is $V_{ss}$, divide the output by $V_{ss}$.
    ```matlab
    % Find steady-state value (average of the last few points)
    steady_state_val = mean(output_exp(end-50:end));
    normalized_output_exp = output_exp / steady_state_val;
    ```
3.  **Manual Identification (Less precise):**
    *   **Final Value:** Identify the steady-state output value.
    *   **Delay Time ($t_d$):** Find the time when `normalized_output_exp` first reaches 0.5.
    *   **Rise Time ($t_r$):** Find the time when `normalized_output_exp` first reaches 0.1 and 0.9, and calculate the difference.
    *   **Peak Overshoot ($M_p$):** Find the maximum value of `normalized_output_exp` and calculate its percentage above the final value.
    *   **Settling Time ($t_s$):** Find the time when `normalized_output_exp` first enters and stays within the $\pm 2\%$ (or 5%) band around the final value.

4.  **Using MATLAB Functions (More precise):** You can adapt the `stepinfo` function or write custom scripts to analyze the experimental data, similar to how it's done for simulated data. You might need to interpolate data for precise measurements.

---

### 5. Comparison of Simulated and Experimental Values (0 < ξ < 1)

**Objective:** To quantitatively and qualitatively compare the calculated parameters.

**Procedure:**

1.  **Run Simulation:** Obtain simulated values for $t_d$, $t_r$, $M_p$, and $t_s$ for a known set of $\omega_n$ and $\xi$.
2.  **Acquire Experimental Data:** Perform the experiment and obtain the output response for a similar step input.
3.  **Calculate Experimental Parameters:** Analyze the experimental data to extract $t_d$, $t_r$, $M_p$, and $t_s$.
4.  **Create a Comparison Table:**

    | Parameter          | Simulated Value | Experimental Value | Percentage Error (%) |
    | :----------------- | :-------------- | :----------------- | :------------------- |
    | Delay Time ($t_d$) |                 |                    |                      |
    | Rise Time ($t_r$)  |                 |                    |                      |
    | Peak Overshoot ($M_p$) |                 |                    |                      |
    | Settling Time ($t_s$) |                 |                    |                      |

    *   **Percentage Error Calculation:**
        $Error (\%) = \left| \frac{Experimental - Simulated}{Simulated} \right| \times 100\%$

5.  **Plotting:** Overlay the simulated step response with the experimental step response on the same graph for visual comparison.

#### 5.1. Example Scenario

Let's assume the system transfer function is approximately $G(s) = \frac{25}{s^2 + 6s + 25}$.
Here, $\omega_n = 5$ rad/s and $2\xi\omega_n = 6 \Rightarrow \xi = \frac{6}{2 \times 5} = 0.6$.
Since $0 < 0.6 < 1$, it's an underdamped system.

**Simulated Values (using formulas):**

*   $t_d = \frac{1 + 0.7 \times 0.6}{5} = \frac{1 + 0.42}{5} = \frac{1.42}{5} = 0.284$ s
*   $t_r = \frac{\pi - \cos^{-1}(0.6)}{5\sqrt{1 - 0.6^2}} = \frac{\pi - 0.927}{5\sqrt{1 - 0.36}} = \frac{3.141 - 0.927}{5\sqrt{0.64}} = \frac{2.214}{5 \times 0.8} = \frac{2.214}{4} = 0.5535$ s
*   $M_p = e^{\left(-\frac{0.6\pi}{\sqrt{1 - 0.6^2}}\right)} \times 100\% = e^{\left(-\frac{1.885}{0.8}\right)} \times 100\% = e^{-2.356} \times 100\% \approx 0.0948 \times 100\% \approx 9.48\%$
*   $t_s$ (2% criterion) = $\frac{4}{0.6 \times 5} = \frac{4}{3} \approx 1.333$ s

**Experimental Results (hypothetical):**

Suppose after running an experiment and analyzing the data, you get:

*   $t_d = 0.30$ s
*   $t_r = 0.60$ s
*   $M_p = 10.5\%$
*   $t_s = 1.45$ s

**Comparison Table:**

| Parameter          | Simulated Value | Experimental Value | Percentage Error (%) |
| :----------------- | :-------------- | :----------------- | :------------------- |
| Delay Time ($t_d$) | 0.284 s         | 0.30 s             | $|(0.30-0.284)/0.284| \times 100\% \approx 5.63\%$ |
| Rise Time ($t_r$)  | 0.5535 s        | 0.60 s             | $|(0.60-0.5535)/0.5535| \times 100\% \approx 8.40\%$ |
| Peak Overshoot ($M_p$) | 9.48 %          | 10.5 %             | $|(10.5-9.48)/9.48| \times 100\% \approx 10.76\%$ |
| Settling Time ($t_s$) | 1.333 s         | 1.45 s             | $|(1.45-1.333)/1.333| \times 100\% \approx 8.78\%$ |

---

### 6. Reasons for Discrepancies Between Simulated and Experimental Values

It is highly unlikely for simulated and experimental results to match perfectly. Common reasons for discrepancies include:

*   **Modeling Errors (CO1):**
    *   **Assumption of Ideal Components:** Simulations often assume ideal components (e.g., no internal resistance, linear behavior), whereas real components have non-linearities.
    *   **Ignored Dynamics:** Higher-order dynamics or parasitic effects in the physical system might not be included in the simplified second-order model.
    *   **Parameter Uncertainty:** The values of $\omega_n$ and $\xi$ used in the simulation might not be perfectly accurate representations of the physical system.

*   **Experimental Conditions:**
    *   **Noise:** Electrical noise in sensors, wiring, or DAQ systems can distort the output signal.
    *   **Drift:** Sensor drift or changes in environmental conditions (temperature) can affect measurements.
    *   **Non-Ideal Input:** The input signal might not be a perfect step (e.g., finite rise time).
    *   **Quantization Errors:** Analog-to-digital conversion in DAQ systems introduces quantization errors.

*   **Measurement Limitations:**
    *   **Sensor Accuracy:** The accuracy and resolution of the sensors used.
    *   **DAQ Sampling Rate:** If the sampling rate is too low, it might miss fast transient details.

*   **System Nonlinearities:** Real systems often exhibit nonlinear behavior (e.g., saturation, friction, dead zones) that are not captured by a linear second-order model.

*   **Tuning and Calibration:** The experimental setup might not be perfectly tuned or calibrated.

---

### 7. Relationship with Course Outcomes

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system.**
    *   This topic directly applies by requiring students to obtain experimental data. Understanding the physical system and potentially identifying its parameters ($\omega_n, \xi$) is crucial before simulation and comparison.
*   **CO2: Conduct suitable experiments and determine the performance specifications.**
    *   The core of this topic is to determine the performance specifications (delay time, rise time, overshoot, settling time) from experimental data.
*   **CO3: Analyse a linear continuous time system model using simulation tools.**
    *   This topic necessitates the simulation of a linear continuous-time second-order system and the analysis of its step response.
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.**
    *   While not directly designing controllers here, understanding the transient response and its dependence on $\xi$ and $\omega_n$ is the foundation for controller design. If simulated and experimental results show a deviation from desired performance, this knowledge informs how to adjust controller parameters.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. Textbooks and Reference Material Relevance

*   **Ogata, Katsuhiko. *Modern Control Engineering***: Provides comprehensive theoretical background on second-order systems, their characteristic equation, damping ratio, natural frequency, and derivations of transient response formulas. Chapters on transient response analysis and time-domain specifications are highly relevant.
*   **Nise, Norman S. *Control Systems Engineering***: Offers detailed explanations of transient and steady-state response, performance specifications, and the impact of pole locations. It also discusses modeling of physical systems, which is essential for experimental aspects. Chapters on transient response and modeling are key.
*   **Nagrath, I. J., & Gopal, M. *Control Systems Engineering***: Similar to the above, this book covers the fundamentals of second-order systems and their time-domain analysis. It emphasizes the practical aspects of control systems, including experimental validation.

These textbooks provide the theoretical underpinnings for the formulas used to calculate $t_d$, $t_r$, $M_p$, and $t_s$, and explain the behavior of second-order systems under step input.

---

### 9. Important Points to Remember

*   **The damping ratio ($\xi$) is the primary determinant of the oscillatory nature of the step response.** For $0 < \xi < 1$, the system will overshoot and oscillate.
*   **Higher $\xi$ leads to less overshoot and longer settling time but may increase rise time.**
*   **Higher $\omega_n$ generally leads to a faster response (smaller $t_d$ and $t_r$) and a quicker decay of oscillations.**
*   **Simulations provide an idealized view.** Real-world experiments will always have deviations due to unmodeled dynamics, noise, and component imperfections.
*   **Accurate experimental data acquisition and signal processing are critical for meaningful comparison.**
*   **The `stepinfo` function in MATLAB is a valuable tool for automating parameter extraction from simulated or experimental data.**
*   **Understanding the sources of error is as important as the comparison itself.**

---

### 10. Practice Questions and Exercises

**Question 1:**
A second-order system has a transfer function $G(s) = \frac{9}{s^2 + 3s + 9}$. Calculate the delay time, rise time (10%-90%), peak overshoot, and settling time (2% criterion) for a unit step input. What is the damping ratio and natural frequency of this system?

**Answer 1:**
First, compare the given transfer function with the standard form $G(s) = \frac{\omega_n^2}{s^2 + 2\xi\omega_n s + \omega_n^2}$.
$\omega_n^2 = 9 \Rightarrow \omega_n = 3$ rad/s.
$2\xi\omega_n = 3 \Rightarrow 2\xi(3) = 3 \Rightarrow 6\xi = 3 \Rightarrow \xi = 0.5$.
Since $0 < 0.5 < 1$, the system is underdamped.

*   **Delay Time ($t_d$):**
    $t_d = \frac{1 + 0.7\xi}{\omega_n} = \frac{1 + 0.7(0.5)}{3} = \frac{1 + 0.35}{3} = \frac{1.35}{3} = \boxed{0.45 \text{ s}}$
*   **Rise Time ($t_r$):**
    $t_r = \frac{\pi - \cos^{-1}(\xi)}{\omega_n\sqrt{1 - \xi^2}} = \frac{\pi - \cos^{-1}(0.5)}{3\sqrt{1 - 0.5^2}} = \frac{\pi - 1.047}{3\sqrt{1 - 0.25}} = \frac{3.141 - 1.047}{3\sqrt{0.75}} = \frac{2.094}{3 \times 0.866} = \frac{2.094}{2.598} \approx \boxed{0.806 \text{ s}}$
*   **Peak Overshoot ($M_p$):**
    $M_p = e^{\left(-\frac{\xi\pi}{\sqrt{1 - \xi^2}}\right)} \times 100\% = e^{\left(-\frac{0.5\pi}{\sqrt{1 - 0.5^2}}\right)} \times 100\% = e^{\left(-\frac{1.5705}{0.866}\right)} \times 100\% = e^{-1.813} \times 100\% \approx 0.163 \times 100\% = \boxed{16.3\%}$
*   **Settling Time ($t_s$, 2% criterion):**
    $t_s = \frac{4}{\xi\omega_n} = \frac{4}{0.5 \times 3} = \frac{4}{1.5} = \boxed{2.67 \text{ s}}$

**Question 2:**
Imagine you performed an experiment with a physical system and obtained the following step response data. You know the system is approximately second-order. You used a unit step input, and the steady-state output was measured to be 0.95 V.

| Time (s) | Output (V) |
| :------- | :--------- |
| 0        | 0          |
| 0.1      | 0.4        |
| 0.2      | 0.8        |
| 0.3      | 1.1        |
| 0.4      | 1.25       |
| 0.5      | 1.2        |
| 0.6      | 1.05       |
| 0.7      | 0.98       |
| 0.8      | 0.96       |
| 0.9      | 0.955      |
| 1.0      | 0.95       |

Estimate the delay time, rise time, peak overshoot, and settling time from this data. What could be the reason if these values are significantly different from a simulation of $G(s) = \frac{9}{s^2 + 3s + 9}$?

**Answer 2:**
First, normalize the experimental output by dividing by the steady-state value (0.95 V).

| Time (s) | Normalized Output |
| :------- | :---------------- |
| 0        | 0                 |
| 0.1      | 0.421             |
| 0.2      | 0.842             |
| 0.3      | 1.158             |
| 0.4      | 1.316             |
| 0.5      | 1.263             |
| 0.6      | 1.105             |
| 0.7      | 1.032             |
| 0.8      | 1.011             |
| 0.9      | 1.005             |
| 1.0      | 1.000             |

*   **Delay Time ($t_d$):** Time to reach 0.5 (50% of final value). Between 0.1 s (0.421) and 0.2 s (0.842). Approximating linearly: $t_d \approx 0.1 + (0.5 - 0.421) / (0.842 - 0.421) \times (0.2 - 0.1) = 0.1 + 0.079 / 0.421 \times 0.1 \approx 0.1188$ s. Let's estimate $\approx \boxed{0.12 \text{ s}}$.
*   **Rise Time ($t_r$):** Time to go from 0.1 (10%) to 0.9 (90%).
    *   10% is reached at approx. $t=0.1$ s (0.421).
    *   90% is reached at approx. $t=0.7$ s (1.032).
    *   $t_r \approx 0.7 - 0.1 = \boxed{0.6 \text{ s}}$. (Note: Precise 10% and 90% points require interpolation if not exactly met).
*   **Peak Overshoot ($M_p$):** Maximum normalized output is 1.316 V at 0.4 s.
    *   $M_p = (1.316 - 1) \times 100\% = \boxed{31.6\%}$.
*   **Settling Time ($t_s$, 2% criterion):** Time when normalized output stays within $1 \pm 0.02$. The output is 1.011 at 0.8 s and 1.005 at 0.9 s, and 1.000 at 1.0 s. It appears to settle around 0.8 s. Let's be conservative and say it's between 0.8s and 0.9s. Estimate $\approx \boxed{0.85 \text{ s}}$.

**Comparison with Simulation ($G(s) = \frac{9}{s^2 + 3s + 9}$):**
Simulated: $t_d=0.45$ s, $t_r=0.806$ s, $M_p=16.3\%$, $t_s=2.67$ s.

**Reasons for Discrepancies:**
The experimental values ($t_d=0.12$ s, $t_r=0.6$ s, $M_p=31.6\%$, $t_s=0.85$ s) are significantly different from the simulation ($t_d=0.45$ s, $t_r=0.806$ s, $M_p=16.3\%$, $t_s=2.67$ s).

*   **System Order:** The physical system might not be truly a second-order system. It could have higher-order dynamics or a much lower damping ratio (more oscillatory) than assumed.
*   **Incorrect Parameter Estimation:** The assumed parameters $\omega_n=3$ and $\xi=0.5$ might be incorrect for the physical system. The experimental response suggests a system that is faster and has more overshoot, possibly indicating a lower $\xi$ or higher $\omega_n$, or both.
*   **System Nonlinearities:** Phenomena like stiction, backlash, or saturation in mechanical systems, or non-ideal component behavior in electronic systems, could cause these differences.
*   **Measurement Noise/Errors:** The experimental data might be affected by noise or inaccurate measurements, especially around the peak and settling region. The settling time estimate is particularly sensitive to the precision of the data.

---

This module provides a critical bridge between theoretical understanding and practical application, highlighting the importance of validating simulation models with real-world experimental data.