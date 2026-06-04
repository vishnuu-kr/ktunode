---
title: "PID Controller Design"
subject: "CONTROL SYSTEM LAB"
module: "Module 14: PID Controller Design"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36792"
status: "completed"
scrapedAt: "2026-05-23T16:25:39.968Z"
---
# CONTROL SYSTEM LAB

## Module 14: PID Controller Design

### Topic: PID Controller Design

This module focuses on the practical design and implementation of Proportional-Integral-Derivative (PID) controllers, a fundamental concept in control system engineering. We will explore the theoretical underpinnings of PID control, its benefits, and common tuning methods, with an emphasis on their application in a laboratory setting using simulation tools.

---

### 1. Introduction to PID Control

#### 1.1 What is a PID Controller?

A PID controller is a widely used feedback control loop mechanism that continuously calculates an error value as the difference between a desired setpoint and a measured process variable. It then applies a correction based on proportional, integral, and derivative terms (P, I, and D respectively) to minimize the error.

#### 1.2 PID Control Action

The output of a PID controller, $u(t)$, is a weighted sum of the error signal $e(t)$, its integral, and its derivative:

$$
u(t) = K_p e(t) + K_i \int_{0}^{t} e(\tau) d\tau + K_d \frac{de(t)}{dt}
$$

Where:
*   $e(t) = r(t) - y(t)$ (error, $r(t)$ is the reference/setpoint, $y(t)$ is the system output)
*   $K_p$: Proportional gain
*   $K_i$: Integral gain
*   $K_d$: Derivative gain

#### 1.3 Significance of Each Term

*   **Proportional (P) Term ($K_p e(t)$):**
    *   Provides a control output proportional to the current error.
    *   Reacts immediately to the error.
    *   **Effect:** Reduces steady-state error, but cannot eliminate it entirely for systems with inherent disturbances. Can increase overshoot and reduce stability if set too high.
    *   *Referenced in Ogata (5th ed., Chapter 7.2):* The proportional controller contributes to reducing the steady-state error.

*   **Integral (I) Term ($K_i \int_{0}^{t} e(\tau) d\tau$):**
    *   Accumulates past errors.
    *   Eliminates steady-state error by increasing control effort as long as an error persists.
    *   **Effect:** Eliminates steady-state error. Can cause overshoot and reduce stability if set too high, leading to "integral windup" if not managed.
    *   *Referenced in Nise (5th ed., Chapter 9.3):* The integral action is crucial for eliminating steady-state error.

*   **Derivative (D) Term ($K_d \frac{de(t)}{dt}$):**
    *   Reacts to the rate of change of the error.
    *   Anticipates future error based on the current trend.
    *   **Effect:** Reduces overshoot, improves transient response, and enhances stability by damping oscillations. Sensitive to noise, which can be amplified.
    *   *Referenced in Nagrath & Gopal (5th ed., Chapter 9.4):* The derivative action provides anticipatory control and improves transient response.

---

### 2. PID Controller Implementation and Tuning

#### 2.1 The PID Controller Transfer Function

In the Laplace domain, the PID controller transfer function is:

$$
G_c(s) = K_p + \frac{K_i}{s} + K_d s = \frac{K_d s^2 + K_p s + K_i}{s}
$$

This can also be written in the standard form:

$$
G_c(s) = K_p \left(1 + \frac{1}{T_i s} + T_d s\right)
$$

Where:
*   $T_i = \frac{K_p}{K_i}$ (Integral time)
*   $T_d = \frac{K_d}{K_p}$ (Derivative time)

#### 2.2 PID Controller Modes

*   **P Controller:** $u(t) = K_p e(t)$
*   **PI Controller:** $u(t) = K_p e(t) + K_i \int_{0}^{t} e(\tau) d\tau$
*   **PD Controller:** $u(t) = K_p e(t) + K_d \frac{de(t)}{dt}$
*   **PID Controller:** Combines all three actions.

#### 2.3 Tuning Methods

Tuning a PID controller involves finding the optimal values for $K_p$, $K_i$, and $K_d$ to achieve desired performance specifications.

##### 2.3.1 Manual Tuning

*   **Procedure:** Start with $K_p$, then increase $K_i$ and $K_d$. Observe the system response and adjust gains iteratively.
*   **Pros:** Intuitive, can be done without a model.
*   **Cons:** Time-consuming, subjective, may not yield optimal results.

##### 2.3.2 Ziegler-Nichols Methods

These are empirical methods for tuning PID controllers.

*   **Method 1: Reaction Curve Method (Open-Loop Step Response)**
    1.  Put the system in manual mode and apply a step input.
    2.  Measure the process gain ($K$), time delay ($L$), and time constant ($T$) from the reaction curve.
    3.  Use the Ziegler-Nichols tuning table to find $K_p$, $T_i$, and $T_d$.

    | Controller | $K_p$     | $T_i$   | $T_d$   |
    | :--------- | :-------- | :------ | :------ |
    | P          | $0.5 K_u$ | $\infty$ | 0       |
    | PI         | $0.45 K_u$| $P_u/1.2$| $\infty$ |
    | PID        | $0.6 K_u$ | $P_u/2$ | $P_u/8$ |

    *(Note: $K_u$ and $P_u$ are determined by closed-loop oscillations - see Method 2)*

    *   **Refined Ziegler-Nichols Tuning (Using Reaction Curve Parameters):**
        | Controller | $K_p$      | $T_i$      | $T_d$      |
        | :--------- | :--------- | :--------- | :--------- |
        | P          | $1/K$      | $\infty$   | 0          |
        | PI         | $0.9/K$    | $T/0.3$    | $\infty$   |
        | PID        | $1.2/K$    | $T/0.5$    | $T/0.5$    |

*   **Method 2: Oscillation Method (Closed-Loop Response)**
    1.  Set $K_i = 0$ and $K_d = 0$ (P controller only).
    2.  Increase $K_p$ until the system exhibits sustained, stable oscillations. This is the ultimate gain ($K_u$).
    3.  Measure the period of these oscillations ($P_u$).
    4.  Use the Ziegler-Nichols tuning table (provided above) to calculate PID parameters.

    *   **Pros:** Relatively simple, provides a starting point.
    *   **Cons:** Can lead to aggressive tuning and instability, doesn't account for desired performance criteria directly, sensitive to noise.
    *   *Referenced in Nise (5th ed., Chapter 9.2):* The Ziegler-Nichols oscillation method is a widely used empirical tuning technique.

##### 2.3.3 Cohen-Coon Method

*   Similar to Ziegler-Nichols but uses reaction curve parameters ($K$, $L$, $T$) and offers different tuning formulas tailored for specific response characteristics.
*   **Formula Example (PID):**
    *   $K_p = \frac{1}{K} \left(\frac{4}{3} + \frac{1}{4} \frac{T}{L}\right)$
    *   $T_i = L \left(\frac{32+6(T/L)}{13+8(T/L)}\right)$
    *   $T_d = L \left(\frac{4}{11+2(T/L)}\right)$
*   **Pros:** Can provide better performance than Ziegler-Nichols for certain systems.
*   **Cons:** Still empirical, can be overly aggressive.
*   *Referenced in Kuo & Golnaraghi (9th ed., Chapter 7.3 - analogous to 5th ed. content):* The Cohen-Coon method provides tuning constants based on system parameters.

##### 2.3.4 Software-Based Tuning (e.g., MATLAB/Simulink)

*   **Automatic Tuning:** Many control system design tools (like MATLAB's Control System Designer or Simulink's PID Controller block) offer automatic tuning algorithms. These often use optimization techniques to find PID parameters that satisfy predefined performance criteria (e.g., settling time, overshoot, steady-state error).
*   **Root Locus and Frequency Response Methods:** While not direct PID tuning methods, these analysis techniques can inform PID design. For example, you can shape the root locus or Bode plot by adding PID controller poles and zeros to achieve desired stability margins and transient response.
*   **Pole Placement:** Design a PID controller such that the closed-loop system poles are placed at desired locations, ensuring specific transient characteristics.
*   *This aligns with CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.*
*   *Referenced in Ogata (5th ed., Chapter 7 and Chapter 9):* Ogata discusses controller design using root locus and frequency response methods to shape system behavior.

---

### 3. PID Controller Performance and Analysis

#### 3.1 Performance Specifications

When designing a PID controller, we aim to meet specific performance criteria, often evaluated through a step response:

*   **Rise Time ($t_r$):** Time taken for the output to go from 10% to 90% of its final value.
*   **Peak Overshoot ($M_p\%$):** Maximum overshoot as a percentage of the final value.
*   **Settling Time ($t_s$):** Time taken for the output to settle within a specified tolerance band (e.g., ±2% or ±5%) of its final value.
*   **Steady-State Error ($e_{ss}$):** The difference between the desired setpoint and the actual output after the system has settled.

#### 3.2 Impact of Tuning on Performance

*   **Increasing $K_p$:** Reduces rise time, reduces steady-state error, but increases overshoot and can reduce stability.
*   **Increasing $K_i$:** Eliminates steady-state error, but can increase overshoot and reduce stability.
*   **Increasing $K_d$:** Reduces overshoot, reduces settling time, improves stability, but can amplify noise.

#### 3.3 Integral Windup

*   **Definition:** When the integral term accumulates excessive output due to a sustained large error (e.g., during saturation of the actuator), it can lead to a large overshoot once the error begins to decrease.
*   **Mitigation:**
    *   **Anti-windup:** Implementing strategies to limit the integral term's accumulation when the controller output saturates.
    *   **Conditional Integration:** Only integrate when the controller output is not saturated.
    *   **Clamping:** Limiting the integral term itself.
*   *Referenced in Nise (5th ed., Chapter 9.3.3):* Nise discusses anti-windup strategies.

#### 3.4 Noise Sensitivity

*   The derivative term is highly sensitive to noise in the measured output signal, as differentiation amplifies high-frequency components.
*   **Mitigation:**
    *   **Filtering:** Employing a low-pass filter on the derivative term or the measured output.
    *   **Reducing $K_d$:** If noise is significant.
    *   **Using a PI controller:** If derivative action is not strictly necessary.

#### 3.5 System Modeling for Design (CO1 & CO3)

Before designing a PID controller, understanding the system to be controlled is crucial. This involves:

*   **System Identification:** Conducting experiments (e.g., step tests) to obtain a mathematical model of the system. This could involve identifying system order, time constants, delays, and steady-state gain.
    *   *This directly addresses CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system.*
*   **Simulation Tools:** Using software like MATLAB/Simulink to create simulations of the system model. This allows for analysis and design iterations without physical hardware.
    *   *This directly addresses CO3: Analyse a linear continuous time system model using simulation tools.*

**Example:** For a simple first-order system with delay, a step response might yield parameters for a transfer function like $G(s) = \frac{K e^{-Ls}}{Ts+1}$.

---

### 4. Laboratory Experiments and Simulation

This section outlines how PID controller design is practically applied in a control system lab.

#### 4.1 Experiment Design (CO1, CO2)

*   **Objective:** To model a physical system and determine its performance specifications under various control strategies.
*   **Procedure:**
    1.  **System Identification:** Apply a known input (e.g., a step input) to the physical system without control. Record the output response. From this response, estimate the system's parameters (e.g., gain, time constant, delay).
        *   *Learning Outcome Addressed: CO1*
    2.  **Open-Loop Analysis:** Analyze the step response of the open-loop system to understand its inherent behavior (e.g., rise time, settling time, steady-state value).
    3.  **Closed-Loop Performance Evaluation:** Implement a PID controller (initially tuned by manual or empirical methods) on the physical system or in simulation. Apply a step input and record the closed-loop response.
    4.  **Performance Specification Measurement:** From the recorded closed-loop response, measure key performance metrics like rise time, settling time, overshoot, and steady-state error.
        *   *Learning Outcome Addressed: CO2*

#### 4.2 PID Controller Design and Tuning in Simulation (CO3, CO4)

*   **Objective:** To design and tune a PID controller using simulation tools to meet specified performance requirements.
*   **Tools:** MATLAB/Simulink, Python with Control Systems Library.
*   **Procedure:**
    1.  **Model Creation:** Create a transfer function or state-space model of the system in the simulation environment (e.g., `tf` or `ss` objects in MATLAB).
        *   *Learning Outcome Addressed: CO3*
    2.  **Open-Loop Analysis (Simulation):** Simulate the step response of the open-loop system to verify the identified parameters and initial performance.
    3.  **PID Controller Design:**
        *   **Manual Tuning (Simulation):** Implement a PID controller block (e.g., `pid` object in MATLAB or Simulink block) and iteratively adjust $K_p$, $K_i$, $K_d$ while observing the simulated step response.
        *   **Empirical Tuning (Simulation):** Apply Ziegler-Nichols or Cohen-Coon formulas using the system model parameters to obtain initial PID gains. Simulate the response and refine the gains.
        *   **Automated Tuning (Simulation):** Utilize built-in tuning tools (e.g., MATLAB's `pidTuner` app or Simulink's PID Tuner block) which automatically calculate PID parameters to satisfy user-defined performance criteria (e.g., good transient response, minimal overshoot).
            *   *Learning Outcome Addressed: CO4*
    4.  **Performance Evaluation (Simulation):** Analyze the simulated closed-loop step response for the designed PID controller and compare it against the desired performance specifications. Iterate on the tuning until satisfactory performance is achieved.

---

### 5. Practice Questions and Answers

**Question 1:** A system has a transfer function $G(s) = \frac{10}{2s+1}$. Using the reaction curve method, determine the PID controller parameters if the system exhibits a delay $L=0$ and a time constant $T=2$.
**Answer 1:**
From the reaction curve method for a first-order system:
$K = 10/1 = 10$ (assuming the step input was normalized to 1)
$T = 2$
$L = 0$

Using the refined Ziegler-Nichols tuning for PID:
$K_p = 1.2/K = 1.2/10 = 0.12$
$T_i = T/0.5 = 2/0.5 = 4$
$T_d = T/0.5 = 2/0.5 = 2$

Therefore, the PID controller transfer function is $G_c(s) = 0.12 \left(1 + \frac{1}{4s} + 2s\right)$.

**Question 2:** What is the primary benefit of the integral term in a PID controller? What is a potential drawback?
**Answer 2:**
*   **Primary Benefit:** The integral term eliminates steady-state error.
*   **Potential Drawback:** It can cause overshoot and reduce the system's stability if not tuned properly. It is also susceptible to integral windup.

**Question 3:** A system with a PID controller exhibits oscillatory behavior with a constant amplitude and a period of $P_u = 3$ seconds. If this is the ultimate gain condition ($K_u$), what are the PID parameters according to the Ziegler-Nichols oscillation method?
**Answer 3:**
According to the Ziegler-Nichols oscillation method:
$K_u$ is the ultimate gain (value not given, but $P_u$ is).
$P_u = 3$ seconds.

For a PID controller:
$K_p = 0.6 K_u$
$T_i = P_u / 2 = 3 / 2 = 1.5$ seconds
$T_d = P_u / 8 = 3 / 8 = 0.375$ seconds

**Question 4:** How can you mitigate the issue of noise sensitivity with the derivative term of a PID controller?
**Answer 4:**
The derivative term's sensitivity to noise can be mitigated by:
1.  **Filtering:** Applying a low-pass filter to the derivative term or the measured input signal.
2.  **Reducing $K_d$:** If the noise is significant and filtering is not sufficient.
3.  **Using a PI controller:** If the derivative action is not critical for performance.

**Question 5:** You are tasked with designing a PID controller for a system that needs to have a settling time of less than 5 seconds and an overshoot of less than 10%. Which term ($P$, $I$, or $D$) would you primarily adjust to reduce overshoot? Which term would you adjust to reduce settling time?
**Answer 5:**
*   To **reduce overshoot**, you would primarily adjust the **Derivative (D) term**. Increasing $K_d$ provides damping and reduces oscillations.
*   To **reduce settling time**, you would primarily adjust the **Proportional (P) term**. Increasing $K_p$ generally speeds up the response, thus reducing settling time, although it might increase overshoot. The derivative term also helps reduce settling time by damping oscillations.

---

### 6. Important Points to Remember

*   PID controllers are powerful and versatile but require careful tuning.
*   The P, I, and D terms have distinct effects on system performance (steady-state error, transient response, stability).
*   Empirical tuning methods (Ziegler-Nichols, Cohen-Coon) provide starting points but often require refinement.
*   Software-based tuning and analysis are crucial for efficient and effective PID controller design in modern labs.
*   Understand your system's model (through identification or simulation) before designing a controller.
*   Be aware of phenomena like integral windup and derivative noise sensitivity and employ appropriate mitigation strategies.
*   Always relate PID parameter adjustments back to the desired performance specifications (rise time, overshoot, settling time, steady-state error).
*   For CO4, the ability to use simulation tools to design and tune PID controllers to meet performance requirements is key.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Textbook and Reference Integration Summary

*   **Ogata (5th ed.):** Provides foundational understanding of feedback control systems, controller types (including PID), and methods for analyzing system stability and performance using root locus and frequency response, which inform PID design. Chapter 7 covers PID controllers in detail.
*   **Nise (5th ed.):** Offers comprehensive coverage of PID control, tuning methods (especially Ziegler-Nichols), and practical considerations like integral windup. Chapter 9 is highly relevant.
*   **Nagrath & Gopal (5th ed.):** Discusses control system analysis and design, including the role of proportional, integral, and derivative actions. Chapter 9 covers controller design.
*   **Kuo & Golnaraghi:** Similar to the primary textbooks, these references offer detailed explanations of PID control and tuning methodologies.
*   **Gopal M.:** Provides principles and design aspects of control systems, likely including PID implementation.
*   **Dorf & Bishop:** Likely covers PID control within the broader context of modern control systems, potentially including state-space methods for controller design.

This module bridges theoretical understanding (from textbooks) with practical application (in the lab/simulation), enabling students to design controllers that meet specified performance criteria (CO4), building upon their ability to model systems (CO1) and analyze performance (CO2, CO3).