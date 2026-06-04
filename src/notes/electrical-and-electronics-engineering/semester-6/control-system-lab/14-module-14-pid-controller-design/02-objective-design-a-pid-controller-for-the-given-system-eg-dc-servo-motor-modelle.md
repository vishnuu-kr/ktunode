---
title: "Objective: Design a PID controller for the given system (eg. DC Servo motor modelled in experiment no. 1 for position control) using SIMULINK/ MATLAB based tool boxes."
subject: "CONTROL SYSTEM LAB"
module: "Module 14: PID Controller Design"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36793"
status: "completed"
scrapedAt: "2026-05-23T16:25:40.727Z"
---
# Control System Lab: Module 14 - PID Controller Design

## Objective: Design a PID Controller for Position Control of a DC Servo Motor using MATLAB/Simulink

This module focuses on the practical design of Proportional-Integral-Derivative (PID) controllers for a DC servo motor system, specifically for position control, using MATLAB and its associated toolboxes. We will leverage the understanding gained from previous experiments (likely modeling the DC servo motor) to tune and implement a PID controller to achieve desired performance specifications.

---

### 1. Introduction to PID Control

PID control is one of the most widely used control strategies in industrial applications due to its simplicity, effectiveness, and robustness. It generates a control signal based on three terms:

*   **Proportional (P) Term:** Proportional to the current error.
*   **Integral (I) Term:** Proportional to the integral of the error over time.
*   **Derivative (D) Term:** Proportional to the rate of change of the error.

**Key Concepts:**

*   **Error ($e(t)$):** The difference between the desired setpoint ($r(t)$) and the actual output ($y(t)$).
    $e(t) = r(t) - y(t)$
*   **Control Signal ($u(t)$):** The output of the PID controller.
    $u(t) = K_p e(t) + K_i \int_{0}^{t} e(\tau) d\tau + K_d \frac{de(t)}{dt}$
    *   $K_p$: Proportional gain
    *   $K_i$: Integral gain
    *   $K_d$: Derivative gain

**Impact of Each Term (Ogata, 5th ed., Chapter 7):**

*   **Proportional Control ($K_p$):**
    *   Reduces rise time.
    *   Reduces, but does not eliminate, steady-state error.
    *   Can cause overshoot and instability if $K_p$ is too high.
*   **Integral Control ($K_i$):**
    *   Eliminates steady-state error by accumulating past errors.
    *   Can cause overshoot, oscillations, and instability if $K_i$ is too high.
    *   Slows down the response.
*   **Derivative Control ($K_d$):**
    *   Predicts future error based on the current rate of change.
    *   Reduces overshoot and improves transient response (damping).
    *   Can amplify noise in the system if $K_d$ is too high.
    *   Does not affect steady-state error.

**Transfer Function of a PID Controller:**

$C(s) = K_p + \frac{K_i}{s} + K_d s = \frac{K_d s^2 + K_p s + K_i}{s}$

---

### 2. DC Servo Motor Model for Position Control

**(Referencing Experiment No. 1)**

Recall the model of the DC servo motor obtained from Experiment No. 1. This typically involves identifying the system's transfer function, which relates the motor's angular position (output) to the applied voltage (input). A common representation for a DC motor is a second-order system.

**Example Model (Hypothetical):**

Let's assume the DC servo motor, when modeled for position control, resulted in a transfer function like:

$G(s) = \frac{K_m}{(Js+b)(Ls+R) + K_m K_t}$

Where:
*   $K_m$: Motor torque constant
*   $J$: Rotor inertia
*   $b$: Viscous friction coefficient
*   $L$: Armature inductance
*   $R$: Armature resistance
*   $K_t$: Torque constant

For simplicity in controller design, this might be approximated by a second-order system or a simplified first-order system with a delay, depending on the dominant dynamics.

**Example Simplified Model:**

Let's assume the DC servo motor's position control can be approximated by the following transfer function (after linearization and simplification, as might be derived from experiment data):

$G(s) = \frac{K}{(s+a)}$  (First-order system)

Or

$G(s) = \frac{K}{(s+a)(s+b)}$ (Second-order system)

For this module, let's use a **first-order system with a time delay** as a representative model that might arise from experimental identification:

$G(s) = \frac{K}{s+a} e^{- \tau s}$

Where:
*   $K$: Gain
*   $a$: Pole location
*   $\tau$: Time delay

**Let's assume the DC servo motor model derived from Experiment 1 is approximately:**

$G(s) = \frac{10}{s+2}$

This represents a system with a DC gain of 5 and a time constant of 0.5 seconds.

---

### 3. PID Controller Design using MATLAB/Simulink

The objective is to design a PID controller $C(s)$ such that the closed-loop system achieves desired performance specifications such as:

*   **Rise Time ($T_r$):** Time taken to go from 10% to 90% of the final value.
*   **Settling Time ($T_s$):** Time taken for the response to settle within a certain percentage (e.g., 2% or 5%) of the final value.
*   **Overshoot ($M_p$):** The maximum percentage by which the response exceeds the final value.
*   **Steady-State Error ($e_{ss}$):** The difference between the final output and the setpoint.

**Tools in MATLAB/Simulink:**

*   **Control System Toolbox:** Provides functions for analyzing and designing control systems.
*   **PID Tuner App:** An interactive tool for tuning PID controllers.
*   **Simulink:** A graphical environment for modeling, simulating, and analyzing dynamic systems.

---

#### 3.1 Manual Tuning (Conceptual)

While we will focus on automated tuning, understanding manual tuning helps grasp the impact of gains.

1.  **Start with P-control ($K_i=0, K_d=0$):** Increase $K_p$ until the system exhibits acceptable oscillations or is on the verge of instability. This typically gives a fast but potentially oscillatory response with steady-state error.
2.  **Add I-control ($K_i > 0$):** Increase $K_i$ to eliminate steady-state error. Be cautious as this can increase overshoot and oscillations.
3.  **Add D-control ($K_d > 0$):** Increase $K_d$ to reduce overshoot and improve settling time. This counteracts the oscillatory tendencies introduced by P and I control.

**(Nise, 5th ed., Chapter 9 provides detailed manual tuning methods like Ziegler-Nichols.)**

---

#### 3.2 PID Tuner App (Recommended Approach)

The PID Tuner app in MATLAB is a powerful and intuitive tool for designing PID controllers for SISO (Single-Input, Single-Output) systems.

**Steps:**

1.  **Define the System Model:**
    *   Load your DC servo motor transfer function into MATLAB.
    *   `G = tf(10, [1 2]);`

2.  **Open the PID Tuner App:**
    *   In the MATLAB command window, type: `pidTuner(G)`

3.  **Set Design Goals:**
    *   Once the app opens, you'll see a step response of the system with an initial PID controller.
    *   Use the "Design Goal" dropdown to select performance criteria like:
        *   **Speed:** Fastest, Balanced, Slowest
        *   **Response:** Aggressive, Moderate, Robust
    *   You can also directly adjust sliders for:
        *   **Response Time:** Controls the overall speed of the response.
        *   **Transient Behavior:** Controls overshoot and settling time.
        *   **Integral Gain:** If you are tuning PI or PID.
        *   **Derivative Gain:** If you are tuning PD or PID.

4.  **Observe and Tune:**
    *   As you adjust the sliders or select design goals, the PID Tuner automatically updates the controller parameters ($K_p, K_i, K_d$) and displays the resulting step response and Bode plot.
    *   **Important Observation:** The PID Tuner might present different types of controllers (P, PI, PID, PIDD, etc.). For position control, a PID controller is typically desired. If the tuner defaults to PD or PI, ensure you select 'PID' from the Type dropdown.

5.  **Export Controller Parameters:**
    *   Once satisfied with the response, click "Export" to get the controller parameters. You can either:
        *   **Export to Workspace:** Saves the controller as a `pid` object or the gains directly.
        *   **Export to Simulink:** Automatically creates a PID block in your Simulink model with the tuned parameters.

**Example Walkthrough:**

Let's design a PID controller for $G(s) = \frac{10}{s+2}$.

*   In MATLAB command window: `G = tf(10, [1 2]);`
*   `pidTuner(G)`
*   In the PID Tuner app, set "Design Goal" to "Fastest" and "Response" to "Aggressive."
*   Observe the step response. You'll likely see significant overshoot and a fast rise time.
*   Adjust the "Transient Behavior" slider to reduce overshoot. Notice how $K_d$ increases as you reduce overshoot.
*   Adjust the "Response Time" slider to fine-tune the speed. Notice how $K_p$ and $K_i$ might change.
*   **Let's assume we achieve satisfactory performance with the following parameters (obtained by tuning in the app):**
    *   $K_p = 20$
    *   $K_i = 50$
    *   $K_d = 2$
    *   The tuned controller is $C(s) = 20 + \frac{50}{s} + 2s$.

---

#### 3.3 Simulink Implementation

1.  **Create a New Simulink Model:**
    *   Open MATLAB and click the "New" button, then select "Simulink Model."

2.  **Build the Plant:**
    *   Drag and drop a "Transfer Function" block from the "Continuous" library onto the canvas.
    *   Double-click the block and enter the numerator and denominator coefficients of your DC servo motor model. For $G(s) = \frac{10}{s+2}$, enter:
        *   Numerator: `10`
        *   Denominator: `[1 2]`

3.  **Add a PID Controller:**
    *   Drag and drop a "PID Controller" block from the "Continuous" library.
    *   Double-click the PID block.
        *   Set **Controller** to **PID**.
        *   Enter the tuned **Proportional (P)**, **Integral (I)**, and **Derivative (D)** gains obtained from the PID Tuner app.
        *   Example: $P=20, I=50, D=2$.
        *   Ensure **Filter coefficient (N)** is set to a reasonable value (e.g., 100 or higher) if the PID tuner suggests derivative filtering, or leave it at the default if not explicitly tuned. The PID block in Simulink has a derivative filter by default.

4.  **Create the Closed-Loop System:**
    *   **Summing Junction:** Add a "Sum" block from the "Common" library. Configure it to `|+ -|`. The first input is the reference signal, and the second input is the feedback signal.
    *   **Reference Signal:** Add a "Step Input" block from the "Sources" library to provide the desired position setpoint. Configure its "Step time" (e.g., 0) and "Final value" (e.g., 1 for 1 radian position).
    *   **Feedback Path:** Connect the output of the "Transfer Function" block (motor position) to the negative input of the "Sum" block.
    *   **Controller Connection:** Connect the output of the "Sum" block to the input of the "PID Controller" block. Connect the output of the "PID Controller" block to the input of the "Transfer Function" block.

5.  **Add a Scope:**
    *   Drag and drop a "Scope" block from the "Sinks" library.
    *   Connect the output of the "Transfer Function" block (motor position) to the Scope. You might also want to connect the reference signal to see both.

6.  **Set Simulation Time:**
    *   Set the simulation stop time (e.g., 5 seconds) in the Simulink toolbar.

7.  **Run the Simulation:**
    *   Click the "Run" button.

8.  **Analyze Results:**
    *   Double-click the Scope to view the step response. Compare it against the desired performance specifications.

**Simulink Block Diagram Structure:**

```
       +--------+       +-------------+       +-----------+       +---------+
       | Step   |------>| Sum (+ -)   |------>| PID       |------>| Transfer|------> Output (to Scope)
       | Input  |       +-------------+       | Controller|       | Function|
       +--------+              ^              +-------------+       | G(s)    |
                               |                                    +---------+
                               | Feedback Signal
                               +------------------------------------------+
```

---

#### 3.4 Advanced Tuning & Considerations

*   **PID with Derivative Filter:** The derivative term ($K_d s$) can amplify high-frequency noise. A common practice is to use a filtered derivative term: $\frac{K_d s}{\frac{s}{N} + 1}$, where $N$ is the filter coefficient (e.g., 10-100). The PID block in Simulink implements this. The PID Tuner app allows you to set this filter.
*   **Integral Windup:** If the controller output saturates (e.g., due to actuator limits), the integral term can accumulate large errors, leading to poor performance when saturation is removed. Techniques like anti-windup are often implemented in practical PID controllers, and the Simulink PID block has options for this.
*   **Discrete-Time PID:** For digital implementation, the PID controller needs to be discretized. MATLAB's `c2d` function can be used to convert a continuous-time PID controller to a discrete-time equivalent.
*   **Tuning for Specific Requirements:** If specific requirements like very low overshoot or fast disturbance rejection are critical, you might need to use more advanced tuning methods or iterate on the PID Tuner settings.
*   **System Identification from Experiment (CO1 & CO2):** The accuracy of the PID controller heavily relies on the accuracy of the system model obtained from Experiment 1. Ensure the identification process was thorough. Performance specifications (rise time, settling time, etc.) were likely determined in previous experiments as well, and now you are designing a controller to meet them.

---

### 4. Relating to Course Outcomes

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system.**
    *   This module assumes you have already performed experiments to obtain the DC servo motor model (e.g., its transfer function $G(s)$). The accuracy of the controller design directly depends on the accuracy of this identified model.
*   **CO2: Conduct suitable experiments and determine the performance specifications.**
    *   The goal of PID design is to meet pre-defined performance specifications (e.g., $T_r$, $T_s$, $M_p$). You will be analyzing the step response in Simulink to verify if these specifications are met.
*   **CO3: Analyse a linear continuous time system model using simulation tools.**
    *   By simulating the closed-loop system in Simulink with the designed PID controller, you are analyzing the behavior of the overall system under control. You observe how the system responds to a step input.
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.**
    *   This module directly addresses CO4. We are designing a PID controller (a type of controller) using MATLAB/Simulink to meet specific performance requirements for the DC servo motor's position control.

---

### 5. Practice Questions and Exercises

**Question 1:**
Given the DC servo motor model $G(s) = \frac{5}{s+1}$. Design a PID controller using the PID Tuner app in MATLAB to achieve:
*   Rise Time ($T_r$) < 0.5 seconds
*   Overshoot ($M_p$) < 10%
*   Settling Time ($T_s$, 2% criterion) < 2 seconds
Simulate the closed-loop system in Simulink with the designed PID controller and verify if the specifications are met. Report the tuned PID parameters ($K_p, K_i, K_d$) and the simulated step response.

**Answer 1:**
*(This answer will be approximate, as the PID tuner is interactive. The exact values might vary slightly depending on the tuning choices.)*

1.  **MATLAB:**
    ```matlab
    G = tf(5, [1 1]);
    pidTuner(G);
    ```
2.  **Tuning:** Open the PID Tuner. Set "Design Goal" to "Balanced" and adjust "Transient Behavior" to reduce overshoot, and "Response Time" to meet $T_r$ and $T_s$.
3.  **Example Tuned Parameters (may vary):**
    *   $K_p = 2.0$
    *   $K_i = 3.0$
    *   $K_d = 0.2$
    *   The tuned controller is $C(s) = 2.0 + \frac{3.0}{s} + 0.2s$.
4.  **Simulink:**
    *   Create a model with a Step Input, Sum block, PID Controller (with the tuned parameters), Transfer Function $G(s) = \frac{5}{s+1}$, and a Scope.
    *   Connect them in a closed-loop configuration.
    *   Set Simulation stop time to 5 seconds.
5.  **Verification:**
    *   Run the simulation. Observe the Scope.
    *   You would measure $T_r$, $M_p$, and $T_s$ from the Scope plot and confirm they meet the specified values. For example, a well-tuned system might show $T_r \approx 0.4s$, $M_p \approx 8\%$, $T_s \approx 1.8s$.

**Question 2:**
What is the primary role of the integral term in a PID controller, and what is a common problem associated with it?

**Answer 2:**
*   **Primary Role:** The integral term ($K_i \int e(t) dt$) is responsible for eliminating steady-state error. It continuously accumulates the error over time, and as long as there is an error, the integral term will continue to adjust the control output to drive the error towards zero.
*   **Common Problem:** Integral windup. This occurs when the controller output saturates (hits its maximum or minimum limit) for an extended period. During saturation, the integral term continues to increase (or decrease), accumulating a large internal "error." When the system output eventually starts to move towards the setpoint and leaves saturation, this accumulated integral term can cause a large overshoot and slow down the recovery.

**Question 3:**
How can you mitigate the effect of noise on the derivative term of a PID controller?

**Answer 3:**
The derivative term ($K_d \frac{de(t)}{dt}$) is sensitive to high-frequency noise because it amplifies the rate of change of the error. To mitigate this:
1.  **Reduce $K_d$:** While this reduces sensitivity to noise, it also reduces the damping effect of the derivative term.
2.  **Use a Filtered Derivative:** This is the most common and effective method. Instead of $\frac{de(t)}{dt}$, use a filtered version like $\frac{K_d s}{\tau_f s + 1}$ or $\frac{K_d s}{(\tau_f s + 1)^n}$. The term $\tau_f$ represents the filter time constant. A larger $\tau_f$ (or a smaller $N$ in the $\frac{s}{N}+1$ form) means more filtering. Both MATLAB's PID Tuner and the Simulink PID block incorporate a derivative filter.
3.  **Implement Anti-Aliasing Filter:** If the system is digital, an analog anti-aliasing filter can be placed before the analog-to-digital converter (ADC) to remove high-frequency components from the signal before they are sampled.

---

### 6. Important Points to Remember

*   **Model Accuracy:** The success of PID controller design heavily depends on having an accurate model of the system. Ensure your system identification from Experiment 1 was robust.
*   **Performance Trade-offs:** There are inherent trade-offs between different performance metrics (e.g., speed vs. overshoot). Tuning involves finding a balance that meets the most critical requirements.
*   **PID Tuner is a starting point:** While powerful, the PID Tuner provides an initial design. Fine-tuning might be necessary by adjusting the gains manually or iterating with the app based on specific requirements.
*   **Derivative Filter:** Always consider using a derivative filter for practical applications to avoid amplifying noise.
*   **Integral Windup:** Be aware of integral windup and its effects, especially in systems with actuator saturation.
*   **Simulink is your laboratory:** Use Simulink to simulate, analyze, and visualize the performance of your designed controller before implementing it on the physical system.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. References

*   **Ogata, K. (2009). *Modern Control Engineering* (5th ed.). Pearson.** (Chapter 7: PID Controllers)
*   **Nise, N. S. (2009). *Control Systems Engineering* (5th ed.). Wiley.** (Chapter 9: Tuning and Calibration)
*   **Nagrath, I. J., & Gopal, M. (2009). *Control Systems Engineering* (5th ed.). New Age.** (Relevant chapters on controller design)

This module provides a hands-on approach to PID controller design, directly applying theoretical knowledge to a practical system using powerful simulation tools. By mastering this, you'll be well-equipped to tackle more complex control problems.