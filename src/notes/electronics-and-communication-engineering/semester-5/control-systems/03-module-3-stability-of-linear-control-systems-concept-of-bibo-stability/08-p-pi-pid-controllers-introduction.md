---
title: "P, PI & PID controllers : Introduction."
subject: "CONTROL SYSTEMS"
module: "Module 3: Stability of linear control systems : Concept of BIBO stability"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe95d"
status: "completed"
scrapedAt: "2026-05-23T17:54:46.729Z"
---
# CONTROL SYSTEMS: MODULE 3 - STABILITY OF LINEAR CONTROL SYSTEMS

## Topic: P, PI & PID Controllers: Introduction

### Learning Outcomes Covered:
*   **Understanding the role of controllers in achieving desired system performance:** This topic introduces the fundamental building blocks of many control strategies.
*   **Introduction to the concepts of Proportional (P), Proportional-Integral (PI), and Proportional-Integral-Derivative (PID) control actions:** This is the core focus of this section.
*   **Understanding how these controllers influence system stability and transient response:** While the module focuses on BIBO stability, controllers are the tools used to *achieve* stability and desired performance, which inherently involves transient response characteristics.

### Course Outcomes Aligned:
*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3):** Controllers are represented by transfer functions, and their impact on the overall closed-loop system transfer function is analyzed.
*   **CO2: Perform time domain analysis and steady state analysis of systems (Knowledge Level: K2):** P, PI, and PID controllers directly affect how a system responds in the time domain (e.g., rise time, settling time, overshoot) and its steady-state error.

---

## 1. Introduction to Feedback Control and the Need for Controllers

### 1.1 The Goal of Control Systems
The primary objective of a control system is to make a plant (the system to be controlled) behave in a desired manner. This typically involves:
*   **Achieving and maintaining a specific output:** e.g., maintaining a constant temperature in an oven, keeping a robot arm at a specific position.
*   **Responding quickly and accurately to changes in setpoint (desired value):** e.g., speeding up a motor to a new RPM.
*   **Minimizing the effects of disturbances:** e.g., compensating for changes in load on a motor, or external forces on a robotic arm.
*   **Ensuring stability:** The system's output should not grow unbounded.

### 1.2 The Role of Feedback
Feedback control systems measure the actual output of the plant, compare it to the desired output (setpoint), and use the difference (error) to generate a control signal for the plant. This is crucial because:
*   It allows the system to automatically correct for deviations.
*   It reduces sensitivity to parameter variations in the plant.
*   It can improve performance and stability.

*(Refer to Nagarath & Gopal, Chapter 1: Introduction to Control Systems)*

### 1.3 The Need for Controllers
In many cases, a simple feedback loop with just an error signal applied directly to the plant is insufficient to achieve the desired performance. The plant itself might have undesirable characteristics, such as slow response, large overshoot, or inability to eliminate steady-state errors.

**Controllers are introduced into the feedback loop to modify the error signal and produce a more effective control signal that drives the plant towards the desired output with improved performance and stability.**

---

## 2. Understanding Basic Control Actions

Controllers generate a control signal, $u(t)$, based on the error signal, $e(t)$. The simplest and most common control actions are:

*   **Proportional (P) Control:** The control signal is proportional to the error.
*   **Integral (I) Control:** The control signal is proportional to the integral of the error.
*   **Derivative (D) Control:** The control signal is proportional to the derivative of the error.

These actions are often combined to create more sophisticated controllers.

---

## 3. Proportional (P) Controller

### 3.1 Concept
A proportional controller produces a control output that is directly proportional to the current error signal.

*   **Mathematical Representation:**
    $u(t) = K_p \cdot e(t)$

    Where:
    *   $u(t)$ is the control output at time $t$.
    *   $e(t)$ is the error signal at time $t$ ($e(t) = r(t) - y(t)$, where $r(t)$ is the reference input and $y(t)$ is the system output).
    *   $K_p$ is the proportional gain (a constant).

*   **Transfer Function:**
    $G_p(s) = \frac{U(s)}{E(s)} = K_p$

### 3.2 Effect on System Performance
*   **Speed of Response:** Increasing $K_p$ generally speeds up the system's response (reduces rise time).
*   **Steady-State Error:** A P-controller can reduce steady-state error, but it **cannot eliminate** it for systems with non-zero steady-state error in response to a step input (e.g., Type 0 systems). This is because for the error to be non-zero, the control output will also be non-zero. If the plant requires a non-zero input to maintain a non-zero output, and the P-controller output is directly proportional to error, a permanent error is needed to sustain the required control output.
*   **Stability and Overshoot:** Increasing $K_p$ too much can lead to oscillations and instability (overshoot and settling time increase).

*(Refer to Kuo & Golnaraghi, Chapter 8: Basic Control Systems)*
*(Refer to Ogata, Chapter 7: Stability, Time Response, and Performance of Linear Control Systems - indirectly, as P controllers affect these)*

### 3.3 Example
Consider a simple system where the plant output is directly the integral of the control input, with some disturbance. A P-controller might be used to maintain a desired level. If the setpoint is 5 units and the current output is 4 units, the error is 1 unit. The P-controller output would be $K_p \cdot 1$. If $K_p=10$, the output is 10. This increased control effort will try to raise the system output. However, to maintain an output of 5, a specific control effort is required. If this effort is, say, 7 units, and the P-controller only provides 5 units (when the error is 0.5), a steady-state error of 0.5 will persist.

---

## 4. Proportional-Integral (PI) Controller

### 4.1 Concept
A PI controller combines proportional control with integral control. The integral action aims to eliminate the steady-state error that a P-controller often leaves.

*   **Mathematical Representation:**
    $u(t) = K_p \cdot e(t) + K_i \int e(t) dt$

    Where:
    *   $K_p$ is the proportional gain.
    *   $K_i$ is the integral gain.

*   **Transfer Function:**
    $G_{PI}(s) = \frac{U(s)}{E(s)} = K_p + \frac{K_i}{s} = K_p \left(1 + \frac{1}{T_i s}\right) = K_p \frac{T_i s + 1}{T_i s}$

    Where $T_i = \frac{K_p}{K_i}$ is the integral time constant.

### 4.2 Effect on System Performance
*   **Steady-State Error:** The integral term $K_i \int e(t) dt$ will continue to increase or decrease as long as an error persists. This allows the controller to drive the error to zero in the steady state, thereby **eliminating steady-state error** for step inputs. This is particularly effective for Type 0 systems.
*   **Speed of Response:** The proportional term still contributes to the speed of response.
*   **Stability and Overshoot:** The integral action can make the system more sluggish and increase overshoot and settling time if not properly tuned, as it can cause the control signal to lag or overshoot its target value. It can also reduce the system's phase margin, potentially impacting stability.

*(Refer to Nagarath & Gopal, Chapter 12: Controllers and Compensation Techniques)*
*(Refer to DiStefano, Stubberud, & Williams, Chapter 5: Controllers)*

### 4.3 Example
Consider the same system where a P-controller left a steady-state error of 0.5 units. With a PI controller, the integral term starts accumulating the error: $\int 0.5 dt = 0.5t$. This accumulating error will cause the integral term in the controller output to increase over time, providing a larger control signal that eventually forces the system output to match the setpoint, making the error zero.

---

## 5. Proportional-Integral-Derivative (PID) Controller

### 5.1 Concept
A PID controller combines proportional, integral, and derivative control actions. The derivative term is added to predict future error and improve the transient response.

*   **Mathematical Representation:**
    $u(t) = K_p \cdot e(t) + K_i \int e(t) dt + K_d \frac{de(t)}{dt}$

    Where:
    *   $K_p$ is the proportional gain.
    *   $K_i$ is the integral gain.
    *   $K_d$ is the derivative gain.

*   **Transfer Function:**
    $G_{PID}(s) = \frac{U(s)}{E(s)} = K_p + \frac{K_i}{s} + K_d s = K_d \left(s + \frac{K_p}{K_d} + \frac{K_i}{K_d s}\right)$
    $G_{PID}(s) = K_d \frac{s^2 + \frac{K_p}{K_d} s + \frac{K_i}{K_d}}{s}$

    This can also be written in a standard form:
    $G_{PID}(s) = K_P \left(1 + \frac{1}{T_i s} + T_d s\right)$

    Where $T_i = K_p/K_i$ (integral time) and $T_d = K_d/K_p$ (derivative time).

### 5.2 Effect on System Performance
*   **Steady-State Error:** The integral term $K_i \int e(t) dt$ eliminates steady-state error.
*   **Speed of Response:** The proportional term $K_p \cdot e(t)$ increases the speed of response.
*   **Transient Response (Overshoot and Settling Time):** The derivative term $K_d \frac{de(t)}{dt}$ provides a control action that is proportional to the rate of change of the error.
    *   If the error is decreasing rapidly towards zero, the derivative term will be negative, opposing the motion and helping to dampen oscillations and reduce overshoot.
    *   If the error is increasing rapidly, the derivative term will be positive, contributing to a faster response.
    *   The derivative term acts like a "look-ahead" mechanism.
*   **Sensitivity to Noise:** The derivative term is sensitive to noise in the error signal, as noise often manifests as rapid fluctuations. This can amplify noise in the control output. Practical implementations often use a filtered derivative.
*   **Stability:** The derivative term can improve stability by increasing the phase margin of the system. However, if $K_d$ is too large, it can lead to jerky control action and excessive noise amplification.

*(Refer to Nagarath & Gopal, Chapter 12: Controllers and Compensation Techniques)*
*(Refer to Ogata, Chapter 8: PID Controllers)*
*(Refer to Nise, Chapter 9: State-Space Analysis and Design Techniques - implicitly related to control design for stability and performance)*

### 5.3 Example
Consider a system with a lot of overshoot. Adding a derivative term to the controller can sense when the output is rapidly approaching the setpoint (error decreasing rapidly). The derivative action will then provide a counteracting force to slow down the approach, reducing the overshoot and allowing the system to settle faster.

---

## 6. Practical Considerations and Tuning

### 6.1 PID Controller Structure
The PID controller is the most widely used controller in industry due to its versatility and effectiveness.

### 6.2 Tuning
The performance of a PID controller heavily relies on the correct values of $K_p$, $K_i$, and $K_d$. Tuning is the process of finding these optimal values. Common tuning methods include:
*   **Manual Tuning:** Adjusting gains based on observed system response (trial and error).
*   **Ziegler-Nichols Methods:** Empirical methods based on system step response or ultimate gain and period.
*   **Auto-tuning algorithms:** Modern controllers often have built-in auto-tuning features.

### 6.3 Common Implementations
*   **Ideal PID:** The mathematical representation is used as a basis.
*   **Practical PID:** Often includes filtering for the derivative term to mitigate noise sensitivity.
    $u(t) = K_p e(t) + K_i \int e(t) dt + \frac{K_d T_f}{T_f s + 1} \frac{de(t)}{dt}$ (where $T_f$ is the filter time constant)

*(Refer to Nagarath & Gopal, Chapter 12: Controllers and Compensation Techniques)*
*(Refer to Kuo & Golnaraghi, Chapter 8: Basic Control Systems)*

---

## 7. Relationship to BIBO Stability (Module 3 Context)

While this topic introduces the controllers themselves, their ultimate purpose in a control system is to ensure stable operation and desired performance.
*   **Closed-Loop Transfer Function:** The introduction of a controller (P, PI, or PID) changes the overall transfer function of the closed-loop system.
*   **Pole Placement:** The gains ($K_p, K_i, K_d$) of the controller can be used to influence the location of the closed-loop poles. By placing the poles in the left-half of the s-plane, BIBO stability is achieved.
*   **System Response:** Different combinations of gains affect the system's response to inputs (transient and steady-state), which are directly related to the location of the closed-loop poles and therefore, stability.

*(This topic sets the stage for Module 3's primary focus on stability. Understanding these controllers is essential for later analyzing their impact on the characteristic equation and pole locations).*

---

## 8. Summary of Controller Actions

| Controller Type | Control Action                                  | Transfer Function                           | Key Effect                                                                    | Limitations                                                                |
| :-------------- | :---------------------------------------------- | :------------------------------------------ | :---------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| **P**           | Proportional to error ($K_p \cdot e(t)$)        | $K_p$                                       | Speeds up response.                                                           | Cannot eliminate steady-state error for Type 0 systems. Can cause overshoot. |
| **PI**          | Proportional + Integral ($K_p e(t) + K_i \int e dt$) | $K_p + \frac{K_i}{s}$                         | Eliminates steady-state error.                                                | Can increase overshoot and settling time. May reduce phase margin.         |
| **PID**         | Proportional + Integral + Derivative ($K_p e(t) + K_i \int e dt + K_d \frac{de}{dt}$) | $K_p + \frac{K_i}{s} + K_d s$                 | Eliminates steady-state error, speeds up response, improves transient response. | Sensitive to noise. Requires careful tuning.                               |

---

## 9. Practice Questions

**Question 1:**
What is the primary goal of introducing a controller in a feedback control system?
(a) To increase the plant's order.
(b) To modify the error signal to achieve desired system performance and stability.
(c) To reduce the number of sensors required.
(d) To only increase the speed of response.

**Question 2:**
A proportional controller has a transfer function of $G_p(s) = 5$. If the error signal is $e(t) = 2 \sin(t)$, what is the control output $u(t)$?

**Question 3:**
Which type of controller action is responsible for eliminating steady-state error in a feedback system?
(a) Proportional (P)
(b) Derivative (D)
(c) Integral (I)
(d) Proportional-Integral (PI)

**Question 4:**
The derivative term in a PID controller ($K_d \frac{de(t)}{dt}$) primarily helps to:
(a) Eliminate steady-state error.
(b) Increase the system's gain at low frequencies.
(c) Dampen oscillations and reduce overshoot.
(d) Make the system response slower.

**Question 5:**
Write down the transfer function of a PID controller.

---

## 10. Answers to Practice Questions

**Answer 1:**
(b) To modify the error signal to achieve desired system performance and stability.
*   *Explanation:* Controllers are essential for shaping the system's response and ensuring it operates stably.

**Answer 2:**
$u(t) = K_p \cdot e(t) = 5 \cdot (2 \sin(t)) = 10 \sin(t)$.
*   *Explanation:* The output of a proportional controller is simply the proportional gain multiplied by the error signal.

**Answer 3:**
(c) Integral (I)
*   *Explanation:* The integral term accumulates past errors, and as long as an error exists, the integral term will continue to change, providing a corrective action that eventually drives the error to zero.

**Answer 4:**
(c) Dampen oscillations and reduce overshoot.
*   *Explanation:* The derivative term reacts to the rate of change of error. If the error is decreasing rapidly (approaching zero), the derivative term provides a counteracting signal that slows down the system, thus reducing overshoot and oscillations.

**Answer 5:**
$G_{PID}(s) = K_p + \frac{K_i}{s} + K_d s$
or
$G_{PID}(s) = K_p \left(1 + \frac{1}{T_i s} + T_d s\right)$

---

## Important Points to Remember:

*   **Controllers are essential for improving system performance and stability.**
*   **P Controller:** Proportional to error. Speeds up response but cannot eliminate steady-state error.
*   **PI Controller:** Proportional + Integral. Eliminates steady-state error but can increase overshoot.
*   **PID Controller:** Proportional + Integral + Derivative. Offers comprehensive control for speed, steady-state error, and transient response.
*   **Derivative action is sensitive to noise.**
*   **Tuning is critical** for optimal PID controller performance.
*   These controllers are foundational for designing systems that meet stability requirements (BIBO stability) and performance specifications.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
