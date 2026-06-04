---
title: "Performance of a typical process control system"
subject: "CONTROL SYSTEM LAB"
module: "Module 7: Performance of a typical process control system"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3676b"
status: "completed"
scrapedAt: "2026-05-23T16:25:15.925Z"
---
# CONTROL SYSTEM LAB

## Module 7: Performance of a Typical Process Control System

---

### **Topic: Performance of a Typical Process Control System**

This module focuses on understanding and evaluating the performance of a typical process control system through practical experimentation and analysis. We will delve into the key metrics used to assess how well a system responds to changes and disturbances, and how to interpret these performance characteristics.

---

### **Learning Outcomes (LOs)**

By the end of this module, you will be able to:

*   **LO1:** Identify and conduct suitable experiments to determine the parameters to model a physical system.
*   **LO2:** Conduct suitable experiments and determine the performance specifications.
*   **LO3:** Analyze a linear continuous time system model using simulation tools.
*   **LO4:** Design suitable controllers/compensators to meet the performance requirements using simulation tools.

---

### **Course Outcomes (COs) Alignment**

This module directly contributes to the following Course Outcomes:

*   **CO1 (K3):** We will learn how to conduct experiments to gather data necessary for system modeling, which is the first step in understanding system performance.
*   **CO2 (K3):** The core of this module is dedicated to conducting experiments to determine performance specifications.
*   **CO3 (K3):** We will learn how to analyze system models and their behavior using simulation tools, which is crucial for understanding performance.
*   **CO4 (K5):** While not the primary focus, the understanding of performance metrics gained here is foundational for designing controllers to meet performance requirements.

---

### **Key Concepts and Definitions**

#### **1. What is a Process Control System?**

A process control system is a system designed to regulate and manage industrial processes, such as temperature, pressure, flow rate, liquid level, and chemical composition, in a manufacturing or production environment. The goal is to maintain these variables at desired setpoints, ensuring product quality, safety, and efficiency.

*   **Key Components:** Sensor, Controller (e.g., PID), Actuator, Process.
*   **Common Examples:** Temperature control in a chemical reactor, level control in a tank, pressure regulation in a pipeline.

#### **2. Performance Metrics for Process Control Systems**

The performance of a control system is evaluated based on its response to a **step input** or a **disturbance**. Common performance metrics include:

*   **Steady-State Error ($e_{ss}$):** The difference between the desired setpoint and the actual output as time approaches infinity.
    *   **Definition:** $e_{ss} = \lim_{t \to \infty} e(t) = \lim_{t \to \infty} (r(t) - c(t))$
    *   **Significance:** Indicates how accurately the system can track a constant reference.
    *   **Ideal:** $e_{ss} = 0$ for a type 0 system with a step input.

*   **Transient Response Specifications:** These describe the behavior of the system during the transition from its initial state to its steady state.

    *   **Delay Time ($t_d$):** The time required for the response to reach 50% of its final value for the first time.
        *   **Significance:** Measures how quickly the system starts to respond.

    *   **Rise Time ($t_r$):** The time required for the response to rise from 10% to 90% of its final value.
        *   **Significance:** Indicates how fast the system rises to its steady state.
        *   **For second-order systems:** $t_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_n \sqrt{1 - \zeta^2}}$, where $\zeta$ is damping ratio and $\omega_n$ is natural frequency.

    *   **Peak Time ($t_p$):** The time required for the response to reach its first peak.
        *   **Significance:** Indicates the time to reach the maximum overshoot.
        *   **For second-order systems:** $t_p = \frac{\pi}{\omega_n \sqrt{1 - \zeta^2}}$.

    *   **Maximum Overshoot ($M_p$):** The maximum percentage by which the response exceeds its final steady-state value.
        *   **Definition:** $M_p = \frac{c_{max} - c(\infty)}{c(\infty)} \times 100\%$
        *   **Significance:** Indicates the tendency of the system to overshoot its target.
        *   **For second-order systems:** $M_p = e^{-\frac{\pi \zeta}{\sqrt{1 - \zeta^2}}} \times 100\%$.

    *   **Settling Time ($t_s$):** The time required for the response to stay within a specified tolerance band (usually ±2% or ±5%) of the final steady-state value.
        *   **Definition:** The time after which $|e(t)| \le \text{tolerance}$.
        *   **Significance:** Indicates how long it takes for the system to settle down.
        *   **For second-order systems (2% tolerance):** $t_s \approx \frac{4}{\zeta \omega_n}$.

#### **3. Stability**

*   **Definition:** A system is stable if its output remains bounded for all bounded inputs and disturbances. If the output grows without bound, the system is unstable.
*   **Significance:** Stability is the most critical performance attribute. An unstable system is unusable.
*   **Determination:** Can be assessed using the location of the poles of the closed-loop transfer function. Poles in the left-half of the s-plane indicate stability.

#### **4. Types of Process Control System Responses**

*   **Underdamped:** The system oscillates before settling. Characterized by significant overshoot and ringing. (0 < $\zeta$ < 1)
*   **Critically Damped:** The system reaches its steady state as quickly as possible without oscillating. ($\zeta$ = 1)
*   **Overdamped:** The system approaches its steady state slowly without oscillating. ($\zeta$ > 1)
*   **Undamped:** The system oscillates indefinitely without decay. ($\zeta$ = 0) - Unstable in practice.

#### **5. Modeling a Physical System (Connecting to LO1 & CO1)**

Before evaluating performance, we often need to model the system. This can be done through:

*   **First Principles Modeling:** Deriving mathematical equations based on physical laws (e.g., mass balance, energy balance).
*   **System Identification:** Experimentally obtaining input-output data and fitting a model to it. This often involves applying a step input and observing the system's response.

    *   **Experiment (Step Response Test):**
        1.  Apply a step change to the system's input (e.g., setpoint change, controller output change).
        2.  Record the system's output response over time.
        3.  From the recorded response, estimate parameters like time constant, gain, dead time, and potentially order of the system. This is crucial for identifying parameters needed for modeling.

#### **6. Experimental Determination of Performance Specifications (Connecting to LO2 & CO2)**

*   **Procedure:**
    1.  **System Setup:** Ensure the process control system (e.g., PID controller with a physical process like a level tank, temperature bath, or simulated process) is properly set up and instruments are calibrated.
    2.  **Apply a Step Input:** Introduce a step change to the controller's setpoint. A typical step input would be from a lower steady state to a higher steady state.
    3.  **Record the Output:** Continuously record the process variable (e.g., temperature, level) as a function of time.
    4.  **Analyze the Data:** Use the recorded data to measure the transient response specifications ($t_d, t_r, t_p, M_p, t_s$) and the steady-state error ($e_{ss}$).

#### **7. Analysis using Simulation Tools (Connecting to LO3 & CO3)**

Simulation tools (e.g., MATLAB/Simulink, LabVIEW) are invaluable for analyzing system performance without performing physical experiments every time.

*   **Steps:**
    1.  **Obtain System Model:** Develop or obtain a mathematical model of the process (e.g., transfer function). This could be derived from first principles or identified from experimental data (LO1).
    2.  **Simulate Step Response:** In the simulation environment, apply a step input to the system model.
    3.  **Analyze Simulated Response:** Use the simulation tool's plotting and analysis functions to extract performance metrics ($t_d, t_r, t_p, M_p, t_s, e_{ss}$).
    4.  **Compare with Specifications:** Check if the system's performance meets the desired specifications.

*   **Example (MATLAB):**
    ```matlab
    % Define a second-order system
    num = [1];
    den = [1 2 1]; % Example: transfer function 1/(s^2 + 2s + 1)
    sys = tf(num, den);

    % Simulate step response
    [y, t] = step(sys);

    % Plot the response
    figure;
    stepinfo(sys); % This function automatically calculates and displays performance metrics
    step(sys);
    title('Step Response of a Second-Order System');
    xlabel('Time (s)');
    ylabel('Output');
    grid on;
    ```
    The `stepinfo()` function in MATLAB directly provides most of the performance metrics.

#### **8. Controller Design for Performance Improvement (Connecting to LO4 & CO4)**

Once the performance is analyzed, if it's not satisfactory, controllers (like PID) need to be tuned or designed.

*   **PID Controller Tuning:** Adjusting the proportional (Kp), integral (Ki), and derivative (Kd) gains of a PID controller to achieve desired performance.
    *   **Effect of Gains:**
        *   **Kp:** Increases speed of response, can increase overshoot, reduces steady-state error for type 0 systems.
        *   **Ki:** Eliminates steady-state error, can increase overshoot and reduce stability.
        *   **Kd:** Reduces overshoot, improves transient response, increases damping, can be sensitive to noise.
*   **Controller Design Methods:**
    *   **Ziegler-Nichols Tuning:** Empirical methods for tuning PID controllers based on system characteristics.
    *   **Root Locus Design:** Shaping the closed-loop pole locations to meet performance requirements.
    *   **Frequency Response Design:** Using Bode or Nyquist plots to design controllers that satisfy stability and performance criteria.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **Textbook References and Content Incorporation**

*   **Ogata (5th Ed):** Chapters 5 (Time Response of Second-Order Systems) and 7 (Stability Criterion) are directly relevant. Chapter 8 (Root Locus) and Chapter 9 (Frequency Response) cover methods for performance improvement. The concept of transient response specifications and stability is thoroughly explained.
*   **Nise (5th Ed):** Chapters 4 (Time and Frequency Domain Responses of Second-Order Systems) and 5 (Stability) are foundational. Chapter 6 (Time Domain Specification) elaborates on the metrics we discussed. Chapters 7 (PID Controllers) and 9 (Root Locus) offer design strategies.
*   **Nagrath & Gopal (5th Ed):** Chapters 5 (Transient Response Analysis) and 6 (Stability Analysis) provide the core theoretical background. Chapter 9 (PID and Lead-Lag Compensators) discusses controller design for performance.

---

### **Examples**

**Example 1: Analyzing a Simple First-Order System**

Consider a system with the transfer function $G(s) = \frac{K}{\tau s + 1}$, where $K$ is the gain and $\tau$ is the time constant.

*   **Experiment:** Apply a unit step input $R(s) = 1/s$. The output response is $C(s) = \frac{K}{ \tau s + 1} \times \frac{1}{s}$. The time-domain response is $c(t) = K(1 - e^{-t/\tau})$.
*   **Performance Metrics:**
    *   **Steady-State Error ($e_{ss}$):** For a unit step input ($r(t)=1$), $r(\infty) = 1$. $c(\infty) = K$. So, $e_{ss} = r(\infty) - c(\infty) = 1 - K$.
        *   *If $K=1$ (unity gain), $e_{ss}=0$.*
    *   **Delay Time ($t_d$):** When $c(t) = 0.5K$, $0.5K = K(1 - e^{-t_d/\tau}) \Rightarrow 0.5 = 1 - e^{-t_d/\tau} \Rightarrow e^{-t_d/\tau} = 0.5 \Rightarrow t_d = -\tau \ln(0.5) \approx 0.693\tau$.
    *   **Rise Time ($t_r$):** Time to go from 0.1K to 0.9K.
        *   $0.1K = K(1 - e^{-t_1/\tau}) \Rightarrow 0.1 = 1 - e^{-t_1/\tau} \Rightarrow e^{-t_1/\tau} = 0.9 \Rightarrow t_1 = -\tau \ln(0.9) \approx 0.105\tau$.
        *   $0.9K = K(1 - e^{-t_2/\tau}) \Rightarrow 0.9 = 1 - e^{-t_2/\tau} \Rightarrow e^{-t_2/\tau} = 0.1 \Rightarrow t_2 = -\tau \ln(0.1) \approx 2.303\tau$.
        *   $t_r = t_2 - t_1 \approx 2.303\tau - 0.105\tau \approx 2.198\tau$.
    *   **Settling Time ($t_s$):** For a 2% tolerance, we want $|c(t) - K| \le 0.02K$.
        *   $|K(1 - e^{-t/\tau}) - K| \le 0.02K$
        *   $|-K e^{-t/\tau}| \le 0.02K$
        *   $e^{-t/\tau} \le 0.02$
        *   $-t/\tau \le \ln(0.02)$
        *   $t/\tau \ge -\ln(0.02) \approx 3.912$.
        *   $t_s \approx 3.912\tau$.

**Example 2: Simulating a Second-Order System and Analyzing Performance**

Consider a unity feedback system with an open-loop transfer function $G(s) = \frac{10}{s(s+2)}$.

*   **Closed-loop Transfer Function:** $T(s) = \frac{G(s)}{1+G(s)} = \frac{10}{s^2 + 2s + 10}$.
*   **System Type:** This is a type 1 system ($s$ in the denominator of $G(s)$).
*   **Analysis:**
    *   Comparing with the standard second-order form $\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$:
        *   $\omega_n^2 = 10 \Rightarrow \omega_n = \sqrt{10} \approx 3.16 \text{ rad/s}$.
        *   $2\zeta\omega_n = 2 \Rightarrow \zeta = \frac{1}{\omega_n} = \frac{1}{\sqrt{10}} \approx 0.316$.
    *   **Performance Metrics (calculated using formulas):**
        *   **Steady-State Error ($e_{ss}$):** For a unit step input to a type 1 system, $e_{ss}=0$.
        *   **Peak Time ($t_p$):** $t_p = \frac{\pi}{\omega_n \sqrt{1 - \zeta^2}} = \frac{\pi}{3.16 \sqrt{1 - 0.316^2}} \approx \frac{\pi}{3.16 \times 0.948} \approx 1.05 \text{ s}$.
        *   **Maximum Overshoot ($M_p$):** $M_p = e^{-\frac{\pi \zeta}{\sqrt{1 - \zeta^2}}} \times 100\% = e^{-\frac{\pi \times 0.316}{\sqrt{1 - 0.316^2}}} \times 100\% \approx e^{-1.04} \times 100\% \approx 35.3 \%$.
        *   **Settling Time ($t_s$ for 2%):** $t_s \approx \frac{4}{\zeta \omega_n} = \frac{4}{0.316 \times 3.16} \approx \frac{4}{1} = 4 \text{ s}$.

*   **MATLAB Simulation:**
    ```matlab
    num = [10];
    den = [1 2 10];
    sys = tf(num, den);

    figure;
    stepinfo(sys); % Display performance metrics
    step(sys);
    title('Step Response of G(s) = 10 / (s(s+2))');
    xlabel('Time (s)');
    ylabel('Output');
    grid on;
    ```
    The output of `stepinfo(sys)` would match the calculated values, confirming the analysis.

---

### **Practice Questions and Exercises**

**Question 1:** A process control system exhibits the following step response characteristics:
*   Rise time: 2 seconds
*   Peak time: 3 seconds
*   Maximum overshoot: 15%
*   Settling time (2%): 7 seconds
*   Steady-state value: 5 units (for a unit step input)

**Calculate:**
a) The steady-state error.
b) The value of the maximum overshoot in percentage.
c) The approximate damping ratio ($\zeta$) from the overshoot.
d) The approximate natural frequency ($\omega_n$) from the peak time.
e) The approximate settling time from the damping ratio and natural frequency (using the 2% criterion).

**Answer 1:**
a) Steady-state error ($e_{ss}$) = Final value - Steady-state value. If the input was a unit step (final value = 1) and steady-state value is 5, this implies a gain greater than 1. Assuming the steady-state value is the *actual* output for a *unit step input*, then $e_{ss} = 1 - 5 = -4$. *Correction:* Usually, steady-state error is calculated relative to the setpoint. If the setpoint was 1 unit and the output settled to 5 units, the system has a very large steady-state gain or the question implies a setpoint of 5 units and a steady-state error of 0. Let's assume the steady-state value of 5 is the *final output* for some input. If the input was a step of magnitude 'A' and the output settled to 'Yss', then $e_{ss} = A - Yss$. If we assume a unit step input (A=1), and the output settles to 5, this is unusual for a stable system unless there's a significant gain. More typically, the steady-state value is relative to the input step size. Let's rephrase: "for a step input of magnitude 1, the system settles to 0.8 units". Then $e_{ss} = 1 - 0.8 = 0.2$.
    Let's assume the question meant: "for a step input of magnitude 5, the system settles to 4.8 units". Then $e_{ss} = 5 - 4.8 = 0.2$ units.

    *Let's use the standard interpretation for a step input of magnitude 1, where the system output settles to a value 'Yss'. Then $e_{ss} = 1 - Yss$. If the problem implies the steady state *output* is 5, and it's a performance metric, it's likely related to a step input of a certain magnitude that would lead to this steady state. If we assume the steady state value *is* the final output for a unit step input, and the desired setpoint was 1, then $e_{ss} = 1 - 5 = -4$. This is a very large error and suggests an issue with the problem statement or interpretation. A more reasonable interpretation is that the steady-state output is 5 units, and this is the desired value, so the steady-state error is 0, provided the input was set to 5. Let's assume the question implies that for a given step input, the output *should have been* some value, and it settled to 5. Without clarity on the input step size, $e_{ss}$ cannot be definitively calculated.*

    **Assuming the steady-state value refers to the final output for a unit step input, and the desired setpoint was 1:**
    $e_{ss} = \text{Setpoint} - \text{Steady-State Value} = 1 - 5 = -4$. (This is a common scenario for questions where a system's gain is not 1).

b) Maximum overshoot is given as 15%.

c) From $M_p = e^{-\frac{\pi \zeta}{\sqrt{1 - \zeta^2}}} \times 100\%$:
   $0.15 = e^{-\frac{\pi \zeta}{\sqrt{1 - \zeta^2}}}$
   $\ln(0.15) = -\frac{\pi \zeta}{\sqrt{1 - \zeta^2}}$
   $-1.897 = -\frac{\pi \zeta}{\sqrt{1 - \zeta^2}}$
   $1.897 = \frac{\pi \zeta}{\sqrt{1 - \zeta^2}}$
   Squaring both sides: $1.897^2 = \frac{\pi^2 \zeta^2}{1 - \zeta^2}$
   $3.60 = \frac{9.87 \zeta^2}{1 - \zeta^2}$
   $3.60 (1 - \zeta^2) = 9.87 \zeta^2$
   $3.60 - 3.60 \zeta^2 = 9.87 \zeta^2$
   $3.60 = 13.47 \zeta^2$
   $\zeta^2 = \frac{3.60}{13.47} \approx 0.267$
   $\zeta \approx \sqrt{0.267} \approx \mathbf{0.517}$

d) From $t_p = \frac{\pi}{\omega_n \sqrt{1 - \zeta^2}}$:
   $3 = \frac{\pi}{\omega_n \sqrt{1 - 0.517^2}}$
   $3 = \frac{\pi}{\omega_n \sqrt{1 - 0.267}}$
   $3 = \frac{\pi}{\omega_n \sqrt{0.733}}$
   $3 = \frac{\pi}{\omega_n \times 0.856}$
   $\omega_n = \frac{\pi}{3 \times 0.856} \approx \frac{3.141}{2.568} \approx \mathbf{1.22 \text{ rad/s}}$

e) Using the calculated $\zeta \approx 0.517$ and $\omega_n \approx 1.22 \text{ rad/s}$ for the 2% settling time criterion:
   $t_s \approx \frac{4}{\zeta \omega_n} = \frac{4}{0.517 \times 1.22} \approx \frac{4}{0.631} \approx \mathbf{6.34 \text{ seconds}}$.
   (The given settling time was 7 seconds, which is reasonably close, validating our calculations).

**Question 2:** A system has a transfer function $G(s) = \frac{2}{0.5s + 1}$.
a) Identify the type of system (e.g., first-order, second-order).
b) Calculate its steady-state gain.
c) Calculate its time constant.
d) Using MATLAB/Simulink, plot the step response and verify the calculated steady-state value and time constant.
e) If the desired steady-state error for a unit step input is 0, how would you modify the system (e.g., adding a proportional gain)?

**Answer 2:**
a) This is a **first-order system** of the form $\frac{K}{\tau s + 1}$.
b) Steady-state gain ($K$) is **2**. (The gain is the DC gain, found by setting $s=0$, which is $2/1 = 2$).
c) Time constant ($\tau$) is **0.5 seconds**.
d) **MATLAB/Simulink Verification:**
   ```matlab
   num = [2];
   den = [0.5 1];
   sys = tf(num, den);

   [y, t] = step(sys);

   % Verify steady-state value
   fprintf('Steady-state value: %f\n', y(end)); % Should be close to 2

   % Verify time constant (e.g., time to reach 63.2% of final value)
   target_value = 0.632 * 2;
   idx = find(y >= target_value, 1);
   if ~isempty(idx)
       fprintf('Time to reach 63.2%% of final value: %f\n', t(idx)); % Should be close to 0.5
   else
       fprintf('Could not find time to reach 63.2%% of final value.\n');
   end

   step(sys);
   title('Step Response of G(s) = 2 / (0.5s + 1)');
   xlabel('Time (s)');
   ylabel('Output');
   grid on;
   ```
   The simulation will show the output settling to 2. The time to reach approximately 63.2% of 2 (which is 1.264) will be around 0.5 seconds.

e) To achieve a steady-state error of 0 for a unit step input, the steady-state gain of the closed-loop system needs to be infinite (for a type 1 system) or the steady-state gain of the open-loop system for a type 0 system needs to be 1 for the error to be 0 for a step input.
   For this system $G(s) = \frac{2}{0.5s + 1}$, the steady-state gain is 2. If this is the open-loop transfer function in a unity feedback system, the closed-loop transfer function is $T(s) = \frac{G(s)}{1+G(s)} = \frac{2/(0.5s+1)}{1 + 2/(0.5s+1)} = \frac{2}{0.5s+1+2} = \frac{2}{0.5s+3} = \frac{2/3}{0.5s/3+1} = \frac{0.667}{0.167s+1}$.
   The steady-state gain of this closed-loop system is $0.667$. For a unit step input, the steady-state error is $1 - 0.667 = 0.333$.

   To make the steady-state error zero for a unit step input, we need the closed-loop system to be of **type 1**. This can be achieved by placing an integrator (an $1/s$ term) in the open-loop.
   Alternatively, if we are only allowed to add a proportional gain $K_p$ in series with $G(s)$, the new open-loop transfer function would be $K_p G(s) = \frac{2K_p}{0.5s+1}$. The closed-loop transfer function would be $T_{new}(s) = \frac{2K_p/(0.5s+1)}{1 + 2K_p/(0.5s+1)} = \frac{2K_p}{0.5s + 1 + 2K_p}$.
   The steady-state gain is $\frac{2K_p}{1+2K_p}$. For a unit step input, the steady-state error is $1 - \frac{2K_p}{1+2K_p} = \frac{1+2K_p-2K_p}{1+2K_p} = \frac{1}{1+2K_p}$.
   To make this zero, we need $1+2K_p \to \infty$, which means $K_p \to \infty$. A pure proportional controller cannot make the steady-state error zero for a type 0 system unless the inherent gain is 1.

   **However, if the goal is to *track* a setpoint of 2 units, and the system settles to 2 units, the steady-state error is 0.** The question is somewhat ambiguous. If the goal is to track *any* setpoint with zero steady-state error, we need a type 1 system (an integrator).

---

### **Important Points to Remember**

*   **Performance is context-dependent:** The acceptable level of overshoot or settling time depends on the specific application.
*   **Trade-offs:** Often, improving one performance metric can degrade another (e.g., reducing overshoot might increase settling time).
*   **Stability is paramount:** No other performance metric matters if the system is unstable.
*   **System Identification and Modeling (LO1):** Essential for understanding how to test and create models that can predict performance.
*   **Experimental vs. Simulated:** Experiments provide real-world performance, while simulations allow for quick analysis and "what-if" scenarios for controller design.
*   **PID Tuning:** A common method to improve performance by adjusting controller parameters.

---

### **Module Summary**

This module provided a comprehensive overview of how to evaluate the performance of process control systems. We learned about key metrics like steady-state error, rise time, settling time, and overshoot. We explored how to conduct experiments to obtain these metrics and how to use simulation tools to analyze system behavior. Understanding these concepts is crucial for diagnosing system issues and designing controllers that meet specific performance requirements.

---