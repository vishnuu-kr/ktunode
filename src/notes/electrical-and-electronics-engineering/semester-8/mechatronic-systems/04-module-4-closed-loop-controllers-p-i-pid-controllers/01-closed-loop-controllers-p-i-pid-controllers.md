---
title: "Closed loop controllers:  P, I, PID Controllers"
subject: "MECHATRONIC SYSTEMS"
module: "Module 4: Closed loop controllers:  P, I, PID Controllers"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bb1"
status: "completed"
scrapedAt: "2026-05-23T16:42:47.957Z"
---
# MECHATRONIC SYSTEMS: Module 4 - Closed-Loop Controllers: P, I, PID Controllers

This module delves into the fundamental building blocks of mechatronic system control: closed-loop controllers. We will explore the principles and applications of Proportional (P), Integral (I), and Proportional-Integral-Derivative (PID) controllers, which are ubiquitous in achieving accurate and stable system performance.

---

## 1. Introduction to Closed-Loop Control Systems

### 1.1 What is a Closed-Loop Control System?

A **closed-loop control system**, also known as a **feedback control system**, is a system where the output of the system is measured and fed back to the input to influence the system's behavior. This feedback mechanism allows the system to compare the actual output with the desired output (setpoint) and make adjustments to reduce any error.

**Key Concepts:**

*   **Setpoint (Desired Value, Reference Input):** The target value that the system aims to achieve.
*   **Process Variable (Measured Value, Output):** The actual output of the system being controlled.
*   **Error Signal:** The difference between the setpoint and the process variable ($e(t) = Setpoint - Process Variable$).
*   **Controller:** The component that processes the error signal and generates a control signal.
*   **Actuator:** The component that receives the control signal and manipulates the physical process.
*   **Sensor:** The component that measures the process variable.

**Importance in Mechatronics:**

Closed-loop control is crucial for mechatronic systems because it enables:

*   **Accuracy:** Minimizing the difference between the desired and actual output.
*   **Stability:** Preventing oscillations and ensuring the system settles to a steady state.
*   **Robustness:** Maintaining performance despite external disturbances or variations in system parameters.
*   **Automation:** Allowing systems to operate autonomously without constant human intervention.

*(Refer to Bolton, Ch. 7: Feedback Control Systems)*

### 1.2 Block Diagram of a Closed-Loop System

A typical closed-loop system can be represented by a block diagram:

```
        +-----------+     +----------+     +---------+     +-----------+
Input ->|   Summing |---->| Controller |---->| Actuator|---->|  Process  |------> Output
(Setpoint) |   Point   |     |          |     |         |     |           |
        +-----+-----+     +----------+     +---------+     +-----+-----+
              ^                                                   |
              |                                                   |
              +---------------------------------------------------+
                                   (Feedback)
                                  +---------+
                                  | Sensor  |
                                  +---------+
```

**Explanation of Blocks:**

*   **Setpoint:** The desired value for the system.
*   **Summing Point:** Calculates the error signal ($Error = Setpoint - Feedback$).
*   **Controller:** Processes the error signal and generates a control output.
*   **Actuator:** Converts the controller's output into a physical action that affects the process.
*   **Process:** The system or device being controlled (e.g., motor, heater, robot arm).
*   **Sensor:** Measures the output of the process and feeds it back.

*(Refer to Histand & Alciatore, Ch. 8: Feedback Control Systems)*

---

## 2. The Proportional (P) Controller

### 2.1 Principle of Proportional Control

A **Proportional (P) controller** generates a control output that is directly proportional to the current error signal. The larger the error, the larger the control output.

**Mathematical Representation:**

$u(t) = K_p \cdot e(t)$

Where:

*   $u(t)$: Control output signal
*   $K_p$: Proportional gain (tuning parameter)
*   $e(t)$: Error signal ($e(t) = Setpoint - Process Variable$)

**Effect of Proportional Gain ($K_p$):**

*   **Increasing $K_p$:**
    *   Increases the controller's responsiveness to error.
    *   Reduces the steady-state error (the persistent error that remains after the system has settled).
    *   Can lead to overshoot and oscillations if too high.
*   **Decreasing $K_p$:**
    *   Decreases responsiveness.
    *   Increases steady-state error.
    *   Makes the system more stable.

### 2.2 Characteristics and Limitations of P Control

**Advantages:**

*   Simple to implement.
*   Provides a basic level of control.
*   Can significantly reduce steady-state error compared to no control.

**Disadvantages:**

*   **Steady-State Error (Offset):** A pure P controller often cannot eliminate steady-state error entirely. To achieve zero steady-state error, an infinitely high proportional gain would be required, which is impractical due to stability issues.
*   **Sensitivity to Disturbances:** While it responds to error, it may not fully compensate for constant disturbances.
*   **Overshoot and Oscillations:** High proportional gains can cause the system to overshoot the setpoint and oscillate.

### 2.3 Example: P Control in a Thermostat

Consider a room heating system.

*   **Setpoint:** Desired room temperature (e.g., 22°C).
*   **Process Variable:** Actual room temperature measured by a sensor.
*   **Error:** $22^\circ C - \text{Actual Temperature}$.
*   **Controller Output (Power to Heater):** $u(t) = K_p \cdot (22^\circ C - \text{Actual Temperature})$.

If the room temperature is 20°C, the error is 2°C. The heater receives a proportional amount of power. If the temperature drops to 18°C, the error is 4°C, and the heater receives twice the power.

**Limitation:** Even with a high $K_p$, if there's a continuous heat loss (e.g., due to a cold outside, open window), the heater might not be able to maintain the exact 22°C, resulting in a slight but persistent temperature drop (steady-state error).

*(Refer to Shetty & Kolk, Ch. 9: Control Systems)*
*(Refer to Bishop, Ch. 4: Feedback Control)*

---

## 3. The Integral (I) Controller

### 3.1 Principle of Integral Control

An **Integral (I) controller** generates a control output that is proportional to the *integral* of the error signal over time. This means that as long as there is an error, the controller will continue to accumulate it and increase its output.

**Mathematical Representation:**

$u(t) = K_i \int e(t) dt$

Where:

*   $u(t)$: Control output signal
*   $K_i$: Integral gain (tuning parameter)
*   $e(t)$: Error signal

**Effect of Integral Gain ($K_i$):**

*   **Increasing $K_i$:**
    *   Increases the rate at which the controller eliminates steady-state error.
    *   Can cause overshoot and oscillations, especially if the integral term accumulates too quickly.
*   **Decreasing $K_i$:**
    *   Slows down the elimination of steady-state error.
    *   Reduces the risk of overshoot.

### 3.2 Characteristics and Limitations of I Control

**Advantages:**

*   **Eliminates Steady-State Error:** The integral term will continue to increase or decrease until the error becomes zero, making it very effective at removing offset.

**Disadvantages:**

*   **Slow Response:** Integral control alone can be slow to react to changes.
*   **Overshoot and Instability:** If the integral term accumulates too much error before the error is reduced, it can cause significant overshoot and even instability. This is often referred to as "integral windup."
*   **Poor Disturbance Rejection:** While it corrects for steady-state error, it might not respond quickly enough to transient disturbances.

### 3.3 Example: I Control in a Flow Rate Regulator

Imagine a system controlling the flow rate of water into a tank.

*   **Setpoint:** Desired flow rate (e.g., 5 liters/minute).
*   **Process Variable:** Measured flow rate.
*   **Controller Output:** Adjustment to the valve position.

If the measured flow rate is consistently 4.8 liters/minute, the error is 0.2 liters/minute. The integral controller will keep increasing the valve opening proportionally to the accumulated error (0.2 + previous errors). Eventually, the valve will open enough to achieve the desired 5 liters/minute, eliminating the steady-state error.

**Limitation:** If the flow rate fluctuates rapidly, the integral term might lag behind, leading to oscillations around the setpoint.

*(Refer to Bolton, Ch. 7: Feedback Control Systems)*
*(Refer to Histand & Alciatore, Ch. 8: Feedback Control Systems)*

---

## 4. The Proportional-Integral (PI) Controller

### 4.1 Principle of PI Control

A **Proportional-Integral (PI) controller** combines the characteristics of both P and I control. It provides proportional control to respond quickly to the current error and integral control to eliminate steady-state error.

**Mathematical Representation:**

$u(t) = K_p \cdot e(t) + K_i \int e(t) dt$

Or, in terms of time constant $T_i = K_p / K_i$:

$u(t) = K_p \left( e(t) + \frac{1}{T_i} \int e(t) dt \right)$

Where:

*   $K_p$: Proportional gain
*   $K_i$: Integral gain
*   $T_i$: Integral time constant (reciprocal of integral gain if $K_p=1$)

**Tuning:**

*   **Proportional Gain ($K_p$):** Determines the initial response speed and damping.
*   **Integral Gain ($K_i$) or Integral Time ($T_i$):** Determines how quickly steady-state error is eliminated. A smaller $T_i$ (or larger $K_i$) means faster elimination but higher risk of overshoot.

### 4.2 Characteristics and Limitations of PI Control

**Advantages:**

*   **Combines Benefits:** Offers a good balance between fast response and steady-state error elimination.
*   **Widely Used:** One of the most common controller types due to its effectiveness and relative simplicity.
*   **Good for Many Applications:** Effective for systems where precise steady-state accuracy is required without excessive oscillations.

**Disadvantages:**

*   **Overshoot:** Can still exhibit overshoot, especially if the integral gain is too high or the proportional gain is too low.
*   **Integral Windup:** Can occur if the actuator saturates (reaches its limit) while the error is still present. The integral term can continue to accumulate, leading to a delayed and potentially unstable response when the error eventually changes sign.
*   **Not Optimal for Fast Dynamics:** May not be sufficient for systems requiring very fast transient responses or that are highly sensitive to overshoot.

### 4.3 Example: PI Control in a Motor Speed Regulator

Consider a DC motor whose speed needs to be maintained at a constant level.

*   **Setpoint:** Desired motor speed (e.g., 1000 RPM).
*   **Process Variable:** Measured motor speed (e.g., using an encoder).
*   **Controller Output:** Voltage applied to the motor.

If the motor slows down due to an increased load, the error increases.

1.  **Proportional Term:** Immediately increases the voltage to counteract the speed drop.
2.  **Integral Term:** Continuously increases the voltage as long as the speed is below the setpoint, ensuring that eventually, the speed reaches the target.

This combination allows for a quick response to load changes and the elimination of any sustained speed difference.

*(Refer to Bolton, Ch. 7: Feedback Control Systems)*
*(Refer to Bishop, Ch. 4: Feedback Control)*

---

## 5. The Proportional-Integral-Derivative (PID) Controller

### 5.1 Principle of PID Control

A **Proportional-Integral-Derivative (PID) controller** is a control loop feedback mechanism that is widely used in industrial control systems. It calculates an error value as the difference between a measured process variable and a desired setpoint and applies a correction based on proportional, integral, and derivative terms.

**Mathematical Representation:**

$u(t) = K_p \cdot e(t) + K_i \int e(t) dt + K_d \frac{de(t)}{dt}$

Where:

*   $u(t)$: Control output signal
*   $K_p$: Proportional gain
*   $K_i$: Integral gain
*   $K_d$: Derivative gain
*   $e(t)$: Error signal
*   $\frac{de(t)}{dt}$: Derivative of the error signal (rate of change of error)

**Role of Each Term:**

*   **Proportional (P):** Responds to the magnitude of the current error. Higher $K_p$ leads to faster response but can cause overshoot.
*   **Integral (I):** Responds to the accumulation of past errors. Eliminates steady-state error but can cause overshoot and slow down the response.
*   **Derivative (D):** Responds to the rate of change of the error. It anticipates future error and provides a damping effect, reducing overshoot and oscillations.

**Tuning:**

Tuning a PID controller involves adjusting $K_p$, $K_i$, and $K_d$ to achieve the desired system performance (e.g., fast response, minimal overshoot, quick settling time, zero steady-state error). Common tuning methods include:

*   **Ziegler-Nichols Method:** Empirical tuning methods.
*   **Trial and Error:** Adjusting parameters based on observed system response.
*   **Software-based tuning:** Using algorithms to automatically find optimal parameters.

### 5.2 Characteristics and Limitations of PID Control

**Advantages:**

*   **Versatile:** Can be tuned to provide excellent performance for a wide range of systems.
*   **Eliminates Steady-State Error:** The integral term ensures zero offset.
*   **Reduces Overshoot and Improves Stability:** The derivative term helps to dampen oscillations and improve transient response.
*   **Handles Disturbances:** Effective at rejecting external disturbances.

**Disadvantages:**

*   **Tuning Complexity:** Finding the optimal PID parameters can be challenging and time-consuming.
*   **Sensitivity to Noise:** The derivative term is sensitive to noise in the measured signal, which can lead to erratic control output. Filtering is often required.
*   **Integral Windup:** Still susceptible to integral windup if not handled properly (e.g., using anti-windup strategies).
*   **Not Always Optimal:** For systems with highly non-linear dynamics or complex behaviors, PID control might not be sufficient, and more advanced control strategies may be needed.

### 5.3 Example: PID Control in a Robot Arm Position Control

Consider a robotic arm that needs to move to a specific position accurately and smoothly.

*   **Setpoint:** Desired position of the robot arm.
*   **Process Variable:** Actual measured position of the robot arm (e.g., from encoders).
*   **Controller Output:** Signal to the motor driving the arm joint.

1.  **P Term:** If the arm is far from the target, a large voltage is applied to move it quickly. As it gets closer, the voltage reduces.
2.  **I Term:** If the arm slightly undershoots the target and stays there, the integral term will continue to increase the voltage until the arm reaches the exact position.
3.  **D Term:** As the arm approaches the target, if it's moving too fast, the derivative term will detect the rapid decrease in error and momentarily reduce the motor voltage, preventing overshoot. If the arm is moving too slowly to the target, the derivative term might slightly increase the voltage to speed it up.

This combined action allows the robot arm to reach its target quickly, accurately, and with minimal oscillation or overshoot.

*(Refer to Bolton, Ch. 7: Feedback Control Systems)*
*(Refer to Histand & Alciatore, Ch. 8: Feedback Control Systems)*
*(Refer to Merzouki et al., Ch. 3: Feedback Control Systems)*

---

## 6. Practical Considerations and Implementation

### 6.1 Controller Tuning

*   **Purpose:** To achieve desired performance characteristics (e.g., stability, speed, accuracy).
*   **Common Tuning Methods:**
    *   **Trial and Error:** Adjusting $K_p$, $K_i$, $K_d$ incrementally while observing the system response.
    *   **Ziegler-Nichols Methods:**
        *   **Closed-Loop Method:** Increase $K_p$ until sustained oscillations occur (ultimate gain $K_u$), then use $K_u$ and the oscillation period $T_u$ to calculate PID gains.
        *   **Open-Loop Method (Reaction Curve):** Based on the system's response to a step input without feedback.
    *   **Auto-tuning:** Many industrial controllers have built-in auto-tuning features.
*   **Key Performance Indicators (KPIs) during Tuning:**
    *   **Rise Time:** Time to reach the desired value (often to 90% of the setpoint).
    *   **Overshoot:** The amount by which the output exceeds the setpoint before settling.
    *   **Settling Time:** The time it takes for the output to settle within a specified tolerance band around the setpoint.
    *   **Steady-State Error:** The difference between the setpoint and the final steady-state output.

### 6.2 Integral Windup and Anti-Windup Strategies

**Integral Windup:**

*   Occurs when the controller's output saturates (reaches its maximum or minimum limit) while there is still a significant error.
*   The integral term continues to accumulate the error, leading to a large integral term that takes a long time to "unwind" when the error eventually decreases, causing large overshoot and slow recovery.

**Anti-Windup Strategies:**

*   **Clamping:** When the controller output saturates, the integration is stopped.
*   **Back-Calculation:** A portion of the controller output that is "out of saturation" is fed back to subtract from the integral term.
*   **Conditional Integration:** The integral term is only updated when the controller output is not saturated.

### 6.3 Derivative Filtering

*   The derivative term is sensitive to high-frequency noise.
*   **Low-Pass Filtering:** A low-pass filter is often applied to the error signal *before* differentiation or to the derivative output itself to reduce the impact of noise.
*   This can slightly delay the derivative action, which might introduce a small lag.

### 6.4 Digital Implementation

In mechatronic systems, controllers are often implemented digitally using microcontrollers or PLCs.

*   **Discrete-Time Representation:** The continuous-time PID equation is converted into a discrete-time form.
    *   **Proportional Term:** $K_p \cdot e[k]$
    *   **Integral Term (Backward Difference):** $K_i \cdot T_s \sum_{i=0}^{k} e[i]$ (where $T_s$ is the sampling period)
    *   **Derivative Term (Backward Difference):** $K_d \cdot \frac{e[k] - e[k-1]}{T_s}$
*   **Sampling Period ($T_s$):** The choice of $T_s$ is critical. It must be fast enough to capture the system dynamics but not so fast that it leads to excessive computational load or noise amplification. Generally, $T_s$ should be at least 5-10 times faster than the dominant dynamics of the system.

*(Refer to Histand & Alciatore, Ch. 8: Feedback Control Systems)*
*(Refer to Shetty & Kolk, Ch. 9: Control Systems)*

---

## 7. Practice Questions and Exercises

**Question 1:**
A system has a desired output of 50 units. The current measured output is 48 units. What is the error signal if the system uses a Proportional controller with a gain of $K_p = 2$? What would be the control output?

**Question 2:**
Why does a pure Proportional (P) controller typically exhibit steady-state error? How does the Integral (I) component of a PI controller address this issue?

**Question 3:**
Explain the role of the Derivative (D) term in a PID controller. What are the potential drawbacks of using a high derivative gain?

**Question 4:**
Describe the phenomenon of "integral windup" and suggest one method to mitigate it.

**Question 5:**
Consider a system where the sensor provides noisy measurements. Which component of a PID controller would be most affected by this noise, and what technique could be used to improve the controller's performance?

---

## 8. Answers to Practice Questions

**Answer 1:**
*   **Error Signal:** $e(t) = \text{Setpoint} - \text{Measured Value} = 50 - 48 = 2$ units.
*   **Control Output:** $u(t) = K_p \cdot e(t) = 2 \cdot 2 = 4$ units.

**Answer 2:**
A pure P controller exhibits steady-state error because to eliminate it completely, the proportional gain would need to be infinitely large, which would destabilize the system. The integral component addresses this by accumulating the error over time. As long as an error exists, the integral term will continue to increase or decrease the controller output, eventually driving the error to zero.

**Answer 3:**
The Derivative (D) term responds to the rate of change of the error. Its role is to anticipate future errors and provide damping. By increasing the control output when the error is decreasing rapidly (approaching the setpoint too quickly) and decreasing the output when the error is increasing rapidly, it helps to reduce overshoot and oscillations, leading to a more stable and faster settling time. However, a high derivative gain can make the controller overly sensitive to measurement noise, potentially causing erratic behavior.

**Answer 4:**
Integral windup occurs when the controller's output saturates (e.g., a heater is already at maximum output) but the error persists. The integral term continues to accumulate the error, building up a large integral value. When the error eventually reduces or changes sign, this large accumulated value causes a delayed and excessive response (overshoot).
**Mitigation Method:** Clamping. When the controller output reaches its saturation limits, the integration process is temporarily halted until the controller output is within its limits again.

**Answer 5:**
The **Derivative (D) term** would be most affected by noisy measurements. The derivative calculates the rate of change of the error, and even small fluctuations in a noisy signal can result in large and rapid changes in the derivative output.
**Technique to improve performance:** **Derivative filtering** (e.g., applying a low-pass filter to the error signal before differentiation or to the derivative output) can smooth out the noise and provide a more stable derivative signal.

---

## 9. Important Points to Remember

*   **Closed-loop control is essential for achieving accuracy, stability, and robustness in mechatronic systems.**
*   **P control:** Proportional to current error; reduces error but usually leaves offset.
*   **I control:** Proportional to accumulated error; eliminates steady-state error but can be slow and cause overshoot.
*   **PI control:** Combines P and I; good balance of response and steady-state accuracy; common choice.
*   **PID control:** Combines P, I, and D; offers excellent performance by addressing current error (P), past errors (I), and future trends (D); widely used but requires careful tuning.
*   **Tuning parameters ($K_p, K_i, K_d$) are critical for optimal performance.**
*   **Integral windup** is a common issue with I and PID controllers when the actuator saturates, and anti-windup strategies are important.
*   **Derivative filtering** is necessary to mitigate the sensitivity of the D term to noise.
*   **Digital implementation** requires discretizing the controller equations and carefully selecting the sampling period.

---

**Course Outcome Alignment:**

*   **CO1 (Sensors and Actuators):** Understanding how sensors provide feedback (Process Variable) and how actuators respond to controller signals is fundamental to appreciating closed-loop control. (K2)
*   **CO2 (Actuator Mechanisms and Signal Conditioning):** The output of the controllers ($u(t)$) is the input to actuators. Signal conditioning might be needed for the actuator to interpret the controller's output correctly. (K2)
*   **CO3 (Microprocessors and Microcontrollers):** Digital implementation of PID controllers relies heavily on microprocessors and microcontrollers for computation and real-time execution. (K2)
*   **CO4 (Models and Responses):** Understanding the behavior of P, I, and PID controllers involves analyzing their impact on system response (e.g., rise time, overshoot, settling time) which requires knowledge of system models. (K3)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
