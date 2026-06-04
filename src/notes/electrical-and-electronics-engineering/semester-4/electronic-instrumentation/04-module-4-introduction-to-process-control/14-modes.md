---
title: "modes."
subject: "ELECTRONIC INSTRUMENTATION"
module: "Module 4: Introduction to Process Control "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e94"
status: "completed"
scrapedAt: "2026-05-23T16:16:32.010Z"
---
# Module 4: Introduction to Process Control - Modes

## 1. Introduction to Process Control

Process control is a fundamental aspect of modern automation, aiming to maintain a desired operating condition of a process variable by manipulating one or more input variables. This ensures consistent product quality, efficiency, safety, and economic viability.

**Key Concepts:**

*   **Process Variable (PV):** The quantity or parameter that needs to be controlled (e.g., temperature, pressure, flow rate, level).
*   **Set-Point (SP):** The desired or target value for the process variable.
*   **Manipulated Variable (MV):** The input variable that is adjusted to influence the process variable (e.g., valve position, heater power).
*   **Disturbance:** Unwanted external factors that affect the process variable, causing deviations from the set-point.
*   **Controller:** The "brain" of the control system, which compares the PV to the SP and generates an output signal to the final control element.
*   **Final Control Element (FCE):** The device that directly manipulates the manipulated variable (e.g., control valve, motor starter).
*   **Feedback Loop:** The continuous cycle of measuring the PV, comparing it to the SP, and adjusting the MV.

**Types of Control Systems:**

*   **Open-Loop Control:** The controller's output is independent of the process variable. It relies on the accuracy of the model and absence of disturbances. (Example: A simple toaster with a timer).
*   **Closed-Loop Control (Feedback Control):** The controller's output is dependent on the process variable. It uses the PV measurement to adjust the MV. This is the most common type in process control. (Example: Thermostat controlling room temperature).

**(Referenced from: Sawhney & Gupta, Kalsi, Doebelin)**

## 2. Modes of Control

Control modes determine how the controller responds to the error between the set-point and the process variable. Different modes offer varying levels of performance, complexity, and suitability for different process dynamics.

### 2.1. ON-OFF Control (Two-Position Control)

This is the simplest form of control. The controller has only two output states: fully ON or fully OFF.

**How it works:**

*   When the PV is below the SP (or a lower deadband limit), the controller output turns ON.
*   When the PV rises above the SP (or an upper deadband limit), the controller output turns OFF.

**Key Concepts:**

*   **Deadband (Hysteresis):** A range around the set-point where the controller does not change its output. This prevents rapid switching (chattering) of the FCE, which can cause wear and tear.

**Block Diagram:**

```
      +-----------------+      +-----------------+      +-----------------+
PV ---|   Controller    |----->|  FCE (ON/OFF)   |----->|      Process      |------> PV
      | (ON-OFF Logic)  |      +-----------------+      +-----------------+
      +-------+---------+
              |
              | SP
              V
```

**Advantages:**

*   Simple to implement and understand.
*   Low cost.

**Disadvantages:**

*   **Oscillation:** The process variable tends to oscillate around the set-point. The magnitude of oscillation depends on the deadband width.
*   **Overshoot/Undershoot:** Significant deviation from the set-point can occur.
*   **Wear and Tear:** Frequent switching can damage the FCE.
*   **Not suitable for processes requiring precise control.**

**Examples:**

*   **Home Thermostat:** Turns the heater/cooler ON when the temperature drops below the set-point and OFF when it rises above it.
*   **Level Control in a Tank:** A float switch turns a pump ON to fill the tank when the level is low and OFF when the level is high.

**(Referenced from: Sawhney, Gupta, Kalsi, Doebelin, Bolton)**

### 2.2. Proportional (P) Control

Proportional control adjusts the controller output proportionally to the error between the PV and SP.

**How it works:**

*   The controller output is a linear function of the error.
*   `Controller Output = Kp * Error + Bias`
    *   `Kp`: Proportional Gain (a tuning parameter).
    *   `Error = SP - PV`
    *   `Bias`: A constant value representing the controller output when the error is zero.

**Key Concepts:**

*   **Proportional Gain (Kp):**
    *   A higher `Kp` results in a larger change in controller output for a given error, leading to faster response but potentially instability and oscillation.
    *   A lower `Kp` results in a slower response but better stability.
*   **Offset (Steady-State Error):** A persistent difference between the PV and SP in steady-state. This is an inherent characteristic of P-only control.

**Block Diagram:**

```
      +-----------------+      +-----------------+      +-----------------+
PV ---|   Controller    |----->|   FCE (Analog)  |----->|      Process      |------> PV
      | (Proportional)  |      +-----------------+      +-----------------+
      +-------+---------+
              |
              | SP
              V
```

**Advantages:**

*   Reduces oscillation compared to ON-OFF control.
*   Provides a more stable control action.
*   Faster response than ON-OFF control.

**Disadvantages:**

*   **Offset:** Cannot eliminate offset, especially with changes in load or set-point.
*   Larger offset with smaller `Kp`.
*   Larger oscillation with larger `Kp`.

**Examples:**

*   **Temperature Control in a Reactor:** A control valve adjusts the flow of cooling water based on the reactor temperature. If the temperature is too high, more cooling water is allowed to flow.
*   **Pressure Control in a Vessel:** Adjusting the steam flow to a heat exchanger to maintain a desired pressure.

**Tuning:**

The proportional gain (`Kp`) is tuned to achieve a balance between response speed and offset reduction.

**(Referenced from: Sawhney, Gupta, Kalsi, Doebelin)**

### 2.3. Proportional-Integral (PI) Control

PI control combines proportional action with integral action to eliminate steady-state error (offset).

**How it works:**

*   **Proportional Term:** Responds to the current error.
*   **Integral Term:** Accumulates the error over time. As long as there is an error, the integral term will continue to adjust the controller output, driving the error towards zero.
*   `Controller Output = Kp * Error + Ki * ∫Error dt + Bias`
    *   `Ki`: Integral Gain (or Integral Time, `Ti = Kp/Ki`). A higher `Ki` (or smaller `Ti`) leads to faster elimination of offset but can cause overshoot and instability.

**Key Concepts:**

*   **Integral Action (Reset Action):** Eliminates offset by continuously adjusting the controller output as long as an error exists.
*   **Integral Gain (Ki) or Integral Time (Ti):**
    *   `Ki` is inversely proportional to `Ti`.
    *   Smaller `Ti` (or larger `Ki`) means faster reset action.
*   **Integral Windup:** A phenomenon that occurs when the integral term accumulates excessively when the controller output is saturated (e.g., a valve is fully open or closed) and the error persists. This can lead to large overshoots when the process eventually recovers. Anti-windup strategies are employed to mitigate this.

**Block Diagram:**

```
      +-----------------+      +-----------------+      +-----------------+
PV ---|   Controller    |----->|   FCE (Analog)  |----->|      Process      |------> PV
      | (Proportional + |      +-----------------+      +-----------------+
      |    Integral)    |
      +-------+---------+
              |
              | SP
              V
```

**Advantages:**

*   **Eliminates Offset:** Achieves zero steady-state error.
*   Provides better disturbance rejection than P-only control.

**Disadvantages:**

*   **Slower Response:** The integral action can slow down the response.
*   **Potential for Oscillation and Overshoot:** If integral gain is too high, it can lead to instability.
*   **Integral Windup:** Requires anti-windup measures.

**Examples:**

*   **Level control in a tank with varying inflow and outflow rates.**
*   **Flow control in a pipeline.**

**Tuning:**

Tuning involves adjusting both `Kp` and `Ki` (or `Ti`) to achieve a stable and responsive control.

**(Referenced from: Sawhney, Gupta, Kalsi, Doebelin)**

### 2.4. Proportional-Derivative (PD) Control

PD control combines proportional action with derivative action to improve the transient response of the system by anticipating future errors.

**How it works:**

*   **Proportional Term:** Responds to the current error.
*   **Derivative Term:** Responds to the rate of change of the error. It provides a "damping" effect, reducing overshoot and oscillations.
*   `Controller Output = Kp * Error + Kd * d(Error)/dt + Bias`
    *   `Kd`: Derivative Gain (or Derivative Time, `Td = Kd/Kp`). A higher `Kd` (or larger `Td`) provides stronger damping but can amplify noise.

**Key Concepts:**

*   **Derivative Action (Rate Action):** Predicts future error based on the current rate of change of the error.
*   **Derivative Gain (Kd) or Derivative Time (Td):**
    *   `Kd` is proportional to `Td`.
    *   Larger `Td` (or larger `Kd`) means stronger damping.
*   **Noise Amplification:** Derivative action is sensitive to noise in the PV signal, as noise often has a high rate of change. Filtering is often required.
*   **No Offset Elimination:** PD control alone does not eliminate offset.

**Block Diagram:**

```
      +-----------------+      +-----------------+      +-----------------+
PV ---|   Controller    |----->|   FCE (Analog)  |----->|      Process      |------> PV
      | (Proportional + |      +-----------------+      +-----------------+
      |   Derivative)   |
      +-------+---------+
              |
              | SP
              V
```

**Advantages:**

*   **Reduces Overshoot and Oscillation:** Improves transient response.
*   **Faster Response:** Can lead to faster settling times.

**Disadvantages:**

*   **Does not eliminate offset.**
*   **Sensitive to noise:** Can amplify noise in the PV signal.
*   **Derivative kick:** Sudden changes in the set-point can cause a large, undesirable spike in the controller output. This is often avoided by applying derivative action to the PV only, not the error.

**Examples:**

*   **Position control systems (e.g., robot arms) where smooth movement and minimal overshoot are critical.**
*   **Speed control systems.**

**Tuning:**

Tuning involves adjusting `Kp` and `Kd` (or `Td`).

**(Referenced from: Sawhney, Gupta, Kalsi, Doebelin)**

### 2.5. Proportional-Integral-Derivative (PID) Control

PID control is the most widely used control algorithm in industry. It combines the benefits of proportional, integral, and derivative actions to provide precise and robust control.

**How it works:**

*   The controller output is the sum of proportional, integral, and derivative terms.
*   `Controller Output = Kp * Error + Ki * ∫Error dt + Kd * d(Error)/dt + Bias`
    *   Where `Error = SP - PV`.

**Key Concepts:**

*   **Proportional Term (P):** Provides a control action proportional to the current error.
*   **Integral Term (I):** Eliminates steady-state error (offset).
*   **Derivative Term (D):** Improves transient response by reducing overshoot and oscillations.

**Block Diagram:**

```
      +-----------------+      +-----------------+      +-----------------+
PV ---|   Controller    |----->|   FCE (Analog)  |----->|      Process      |------> PV
      | (PID Controller)|      +-----------------+      +-----------------+
      +-------+---------+
              |
              | SP
              V
```

**Advantages:**

*   **Eliminates Offset.**
*   **Improves Transient Response** (reduces overshoot and oscillation).
*   **Versatile:** Can be tuned for a wide range of process dynamics.
*   **Robust:** Provides good control even with changing process conditions.

**Disadvantages:**

*   **Tuning Complexity:** Tuning three parameters (`Kp`, `Ki`, `Kd`) can be challenging.
*   **Sensitivity to Noise (if D term is not properly implemented).**
*   **Integral Windup (requires anti-windup).**
*   **Derivative Kick (requires careful implementation of D term).**

**Types of PID Implementations:**

*   **Ideal PID:** The derivative term is applied to the error signal. This can cause "derivative kick" on set-point changes.
*   **Standard PID (Series PID):** The derivative term is applied to the error signal, but often with a filter.
*   **Parallel PID (ISA PID):** The derivative term is often applied to the measured variable (PV) only to avoid derivative kick. This is the most common form in modern controllers.
    `Controller Output = Kp * (Error + (1/Ti) * ∫Error dt + Td * d(Error)/dt) + Bias`

**Examples:**

*   **Temperature control in a chemical reactor.**
*   **Pressure control in a steam boiler.**
*   **Flow control in a pipeline.**
*   **Level control in a complex system with fluctuating inputs and outputs.**

**Tuning Methods:**

*   **Ziegler-Nichols Method:** Empirical methods based on controller parameters at the point of sustained oscillation.
*   **Cohen-Coon Method:** Another empirical tuning method.
*   **Internal Model Control (IMC) Tuning:** Model-based approach.
*   **Auto-tuning Features:** Many modern controllers have built-in auto-tuning functions.

**(Referenced from: Sawhney, Gupta, Kalsi, Doebelin, Bolton)**

### 2.6. Other Control Modes (Brief Overview)

While PID is dominant, other modes and strategies exist for specific applications.

*   **Proportional-Integral-Derivative with Derivative Filter:** The derivative term is filtered to reduce the impact of noise.
*   **Derivative on PV (or Negative Derivative Action):** Applied to the PV measurement to avoid derivative kick on set-point changes.
*   **Gain Scheduling:** The controller parameters (`Kp`, `Ki`, `Kd`) are adjusted based on the operating point of the process.
*   **Cascade Control:** Two controllers are used. The primary controller (master) sets the set-point for the secondary controller (slave). This is useful for controlling processes with slow dynamics by using a faster inner loop.
*   **Feedforward Control:** Uses a model of the process and measurements of disturbances to anticipate and counteract their effects before they significantly impact the PV. It's often used in conjunction with feedback control.
*   **Fuzzy Logic Control:** Uses linguistic rules and fuzzy sets to emulate human expert decision-making.
*   **Model Predictive Control (MPC):** Uses a dynamic model of the process to predict future behavior and optimize control actions over a time horizon.

**(Referenced from: Sawhney, Gupta, Kalsi, Doebelin, SCADA by Boyer)**

## 3. Learning Outcomes Alignment

This module directly addresses several learning outcomes:

*   **CO1: Identify the sensors/transducers suitable for industrial applications.** While not explicitly covered in "modes" themselves, understanding control modes necessitates understanding how process variables (measured by sensors) are input into controllers.
*   **CO2: Design the signal conditioning circuits for industrial instrumentation and automation.** The output of controllers (analog or digital) often needs conditioning to drive FCEs, and the input PV signal might need conditioning before entering the controller. The nature of the control mode (e.g., analog vs. digital) influences these design choices.
*   **CO3: Understand the concepts of data transmission methods applicable to electronic instrumentation systems.** Control signals are transmitted. Understanding the control mode helps determine the nature of the data (e.g., ON/OFF signal, analog 4-20mA, digital commands).
*   **CO4: Develop the logic for the process control applications using PLC programming.** PLC programming often involves implementing control modes like ON-OFF, P, PI, PID. Understanding the mathematical basis of these modes is crucial for PLC implementation.
*   **CO5: Analyze the performance of measurement systems using statistical methods.** Control system performance (e.g., overshoot, settling time, steady-state error) can be analyzed using statistical methods.
*   **CO6: Describe the fundamental concepts of DCS and SCADA systems.** Control modes are the fundamental building blocks of automation strategies employed within DCS and SCADA systems. These systems implement and manage various control loops using these modes.

## 4. Practice Questions

1.  **What is the primary advantage of ON-OFF control? What is its main disadvantage?**
    *   **Answer:** Advantage: Simplicity and low cost. Disadvantage: Significant oscillation and offset.

2.  **Explain the concept of "offset" in proportional control. How can it be eliminated?**
    *   **Answer:** Offset is the steady-state error between the set-point and the process variable. It can be eliminated by adding integral action (PI or PID control).

3.  **A control system uses PID control. If the derivative gain (`Kd`) is increased significantly, what effect will it have on the system's response to a sudden disturbance?**
    *   **Answer:** Increasing `Kd` will generally reduce overshoot and oscillations, leading to a faster settling time by damping the response. However, if `Kd` is too high, it can amplify noise and potentially cause instability or "derivative kick" if applied directly to the error on set-point changes.

4.  **Describe the "integral windup" phenomenon in PI/PID controllers and how it can be addressed.**
    *   **Answer:** Integral windup occurs when the integral term accumulates excessively due to saturation of the controller output while the error persists. It can be addressed using anti-windup strategies, such as clamping the integral term when the output is saturated or switching off the integral action under saturation conditions.

5.  **Compare and contrast P, PI, and PD control in terms of their impact on steady-state error and transient response.**
    *   **Answer:**
        *   **P:** Reduces oscillation but results in offset. Faster response than ON-OFF.
        *   **PI:** Eliminates offset but can slow down the response and introduce more overshoot if integral gain is too high.
        *   **PD:** Reduces overshoot and improves settling time but does not eliminate offset and is sensitive to noise.

6.  **In the context of PLC programming for process control, how would you typically implement an ON-OFF control strategy for a temperature regulation task?**
    *   **Answer:** In PLC ladder logic, you would use a comparison instruction (e.g., LESS THAN, GREATER THAN) to compare the analog input representing temperature with the set-point. Based on this comparison, you would energize or de-energize an output coil controlling a heater or cooler. A deadband can be implemented by using two comparison instructions with slightly different set-points.

## 5. Important Points to Remember

*   **Control modes are the algorithms that determine how a controller acts.**
*   **ON-OFF control is simple but leads to oscillations.**
*   **Proportional control reduces oscillation but introduces offset.**
*   **Integral control eliminates offset but can slow response and cause overshoot.**
*   **Derivative control improves transient response (reduces overshoot) but amplifies noise and doesn't eliminate offset.**
*   **PID control combines P, I, and D for optimal performance, but tuning is critical.**
*   **Integral windup and derivative kick are potential problems that need to be managed in PI/PID control.**
*   **The choice of control mode depends on the process dynamics, desired accuracy, and cost considerations.**
*   **Control modes are fundamental to implementing automation in DCS and SCADA systems.**

This comprehensive study of control modes is essential for understanding how electronic instrumentation systems achieve automated process control.
