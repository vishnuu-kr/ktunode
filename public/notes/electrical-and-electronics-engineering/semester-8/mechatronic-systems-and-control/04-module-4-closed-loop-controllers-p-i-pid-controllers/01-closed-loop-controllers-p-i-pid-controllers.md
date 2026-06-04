---
title: "Closed loop controllers:  P, I, PID Controllers"
subject: "MECHATRONIC SYSTEMS AND CONTROL"
module: "Module 4: Closed loop controllers:  P, I, PID Controllers"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200882b85456187f36cd0"
status: "completed"
scrapedAt: "2026-05-23T16:43:52.232Z"
---
# MECHATRONIC SYSTEMS AND CONTROL

## Module 4: Closed Loop Controllers: P, I, PID Controllers

This module delves into the fundamental principles and practical applications of closed-loop control, focusing on Proportional (P), Integral (I), and Proportional-Integral-Derivative (PID) controllers. These controllers are the backbone of many mechatronic systems, enabling precise and stable operation by continuously adjusting system outputs based on feedback.

---

### 1. Introduction to Closed-Loop Control Systems

**Key Concept:** A closed-loop control system (also known as a feedback control system) utilizes the measured output of a system to adjust its input, aiming to maintain the output at a desired setpoint. This contrasts with open-loop systems, where the input is independent of the output.

**Definition:**
*   **Setpoint (Desired Value):** The target value for the system's output.
*   **Process Variable (PV):** The actual measured value of the system's output.
*   **Error (e):** The difference between the setpoint and the process variable ($e = \text{Setpoint} - \text{PV}$). The controller's primary goal is to minimize this error.
*   **Controller:** The component that processes the error signal and generates a control output.
*   **Actuator:** The device that receives the control output and manipulates the system's input.
*   **Plant/Process:** The system being controlled.
*   **Sensor:** The device that measures the process variable and provides feedback to the controller.

**How it Works (General Block Diagram):**

```
      +-----------------+      +------------+      +----------+      +----------+
      |     Setpoint    |----->|   Summing  |----->| Controller |----->| Actuator |----->+
      +-----------------+      |   Junction |      +------------+      +----------+      |
                               +------^-----+                          +----------+      |
                                      |                                     |          |
                                      | Error (e)                           | Control  |
                                      |                                     | Output   |
                                      |                                     |          |
                                      |                                     v          |
                                      |                                +----------+      |
                                      +--------------------------------|   Plant  |------+
                                                                       +----------+
                                                                             |
                                                                             | Process Variable (PV)
                                                                             |
                                                                             v
                                                                       +----------+
                                                                       |  Sensor  |
                                                                       +----------+
```

**Importance of Closed-Loop Control in Mechatronics:**
*   **Accuracy:** Maintains the system output close to the desired setpoint despite disturbances. (Relates to CO1, CO2, CO4)
*   **Stability:** Prevents oscillations or runaway behavior in the system.
*   **Disturbance Rejection:** Compensates for external factors that might affect the system's output.
*   **Robustness:** Makes the system less sensitive to variations in its own parameters.
*   **Automation:** Enables automatic operation and control of complex processes.

**Textbook References:**
*   Bolton, W. (2010) - Chapter 8: Feedback control systems.
*   Histand, M. B., & Alciatore, D. G. (2003) - Chapter 11: Control System Concepts.

---

### 2. Proportional (P) Controller

**Key Concept:** A P controller generates a control output that is directly proportional to the current error signal.

**Definition:**
The control output ($u(t)$) is given by the equation:
$u(t) = K_p \cdot e(t)$

Where:
*   $u(t)$: Control output at time $t$.
*   $K_p$: Proportional gain (a tuning parameter).
*   $e(t)$: Error at time $t$ ($\text{Setpoint} - \text{PV}(t)$).

**Characteristics:**
*   **Response:** The control action is immediate and proportional to the error. Larger error means larger control output.
*   **Advantages:**
    *   Simple to implement.
    *   Provides a stabilizing effect.
    *   Reduces the magnitude of the error.
*   **Disadvantages:**
    *   **Steady-State Error (Offset):** A P controller alone often cannot eliminate the error entirely, especially in systems with friction or constant external forces. To maintain a non-zero control output, there must be a non-zero error.
    *   **Sensitivity to Gain ($K_p$):**
        *   **Low $K_p$:** Small response to error, slow convergence, minimal overshoot but significant steady-state error.
        *   **High $K_p$:** Larger response, faster convergence, but can lead to oscillations and instability.

**Example:**
Consider a simple electric heater with a thermostat that uses a P controller. If the desired temperature is 25°C and the current temperature is 20°C (error = 5°C), the P controller might output a certain power level. If the temperature rises to 23°C (error = 2°C), the controller reduces the power output proportionally. However, to keep the heater on at a reduced level to counteract heat loss, there will likely be a small but persistent difference between the setpoint and the actual temperature (e.g., 24.5°C).

**Textbook References:**
*   Bolton, W. (2010) - Chapter 8.3: Proportional control.
*   Histand, M. B., & Alciatore, D. G. (2003) - Section 11.2: Proportional control.

**Learning Outcome Alignment:**
*   CO4: Analyze the models and responses of different systems (understanding the response characteristic of a P controller).

---

### 3. Integral (I) Controller

**Key Concept:** An I controller generates a control output that is proportional to the integral of the error over time.

**Definition:**
The control output ($u(t)$) is given by the equation:
$u(t) = K_i \int_{0}^{t} e(\tau) d\tau$

Where:
*   $u(t)$: Control output at time $t$.
*   $K_i$: Integral gain (a tuning parameter).
*   $e(\tau)$: Error at time $\tau$.
*   $\int_{0}^{t} e(\tau) d\tau$: The integral of the error from time 0 to time $t$.

**Characteristics:**
*   **Response:** The control action accumulates over time. Even a small persistent error will eventually lead to a significant control output.
*   **Advantages:**
    *   **Eliminates Steady-State Error:** This is the primary advantage of an I controller. As long as there is any error, the integral term will continue to grow, driving the control output until the error is zero.
*   **Disadvantages:**
    *   **Sluggish Response:** The integral term needs time to build up, making the initial response slower.
    *   **Overshoot and Oscillations:** Can introduce overshoot and oscillations, especially if the integral gain ($K_i$) is too high. This is because the controller may overcompensate once the error starts to diminish.
    *   **Integral Windup:** If the actuator saturates (reaches its maximum or minimum output limit) while there is still a significant error, the integral term can accumulate to very large values. When the error finally reduces, this large accumulated value can cause excessive overshoot and slow down the response.

**Example:**
In the electric heater example, an I controller would look at the accumulated time the temperature was below the setpoint. Even if the temperature was only slightly below (small error), if it remained there for a long time, the integral term would grow, eventually increasing the heater power enough to reach the setpoint.

**Textbook References:**
*   Bolton, W. (2010) - Chapter 8.4: Integral control.
*   Histand, M. B., & Alciatore, D. G. (2003) - Section 11.3: Integral control.

**Learning Outcome Alignment:**
*   CO4: Analyze the models and responses of different systems (understanding the response characteristic of an I controller).

---

### 4. Proportional-Integral (PI) Controller

**Key Concept:** A PI controller combines the advantages of both P and I control, using the current error (P) and the accumulated error (I) to generate a control output.

**Definition:**
The control output ($u(t)$) is given by the equation:
$u(t) = K_p \cdot e(t) + K_i \int_{0}^{t} e(\tau) d\tau$

Alternatively, in terms of proportional gain ($K_p$) and integral time constant ($T_i$):
$u(t) = K_p \cdot e(t) + \frac{K_p}{T_i} \int_{0}^{t} e(\tau) d\tau$
Where $T_i = K_p / K_i$. $T_i$ represents the time constant for the integral action. A smaller $T_i$ means faster integral action.

**Characteristics:**
*   **Response:** Aims to provide a fast response with reduced steady-state error. The P term provides immediate action, while the I term eliminates the offset.
*   **Advantages:**
    *   Eliminates steady-state error (due to the I term).
    *   Provides a faster response than an I-only controller (due to the P term).
    *   More stable than a P-only controller with a very high gain.
*   **Disadvantages:**
    *   Can still exhibit overshoot and oscillations, though generally less than an I-only controller.
    *   Can be susceptible to integral windup.
    *   Response may not be optimal for systems with significant delays or complex dynamics.

**Tuning:**
*   **Increasing $K_p$:** Increases speed of response, reduces steady-state error, but can increase overshoot and reduce stability.
*   **Increasing $K_i$ (or decreasing $T_i$):** Eliminates steady-state error faster, but can increase overshoot and oscillations.

**Example:**
A motor speed control system often benefits from PI control. The P term provides an immediate response to speed errors, while the I term ensures that the motor eventually reaches and maintains the exact target speed, compensating for any friction or load variations.

**Textbook References:**
*   Bolton, W. (2010) - Chapter 8.5: Proportional-integral (PI) control.
*   Histand, M. B., & Alciatore, D. G. (2003) - Section 11.4: PI control.
*   Shetty, D., & Kolk, R. A. (2010) - Chapter 9: Control Systems (discusses PID controllers, including PI).

**Learning Outcome Alignment:**
*   CO4: Analyze the models and responses of different systems (understanding how P and I actions combine).

---

### 5. Proportional-Integral-Derivative (PID) Controller

**Key Concept:** A PID controller combines P, I, and Derivative (D) control actions to provide robust and precise control, often achieving optimal system performance.

**Definition:**
The control output ($u(t)$) is given by the equation:
$u(t) = K_p \cdot e(t) + K_i \int_{0}^{t} e(\tau) d\tau + K_d \frac{de(t)}{dt}$

Where:
*   $u(t)$: Control output at time $t$.
*   $K_p$: Proportional gain.
*   $K_i$: Integral gain.
*   $K_d$: Derivative gain.
*   $e(t)$: Error at time $t$.
*   $\int_{0}^{t} e(\tau) d\tau$: Integral of the error.
*   $\frac{de(t)}{dt}$: Derivative of the error with respect to time.

**Alternatively, in terms of $K_p$, $T_i$, and $T_d$:**
$u(t) = K_p \cdot e(t) + \frac{K_p}{T_i} \int_{0}^{t} e(\tau) d\tau + K_p T_d \frac{de(t)}{dt}$
Where:
*   $T_i$: Integral time constant.
*   $T_d$: Derivative time constant.

**Role of Each Term:**
*   **Proportional (P):** Responds to the current error. Provides the primary control action. Faster response, but leads to steady-state error.
*   **Integral (I):** Responds to the accumulated error over time. Eliminates steady-state error. Can introduce overshoot and instability if too aggressive.
*   **Derivative (D):** Responds to the rate of change of the error.
    *   **Anticipates future error:** If the error is decreasing rapidly, the D term will reduce the control output, preventing overshoot.
    *   **Dampens oscillations:** Acts as a damper, improving system stability and settling time.
    *   **Sensitive to noise:** High-frequency noise in the sensor signal can be amplified by the derivative term, leading to erratic control output. Often, a filtered derivative or a derivative-on-measurement is used in practice.

**Characteristics:**
*   **Response:** Can achieve fast response, zero steady-state error, and good transient response (minimal overshoot and quick settling).
*   **Advantages:**
    *   Comprehensive control action addresses current error, past error, and future trend of error.
    *   Can provide near-optimal performance for many systems.
    *   Can significantly improve stability and reduce oscillations compared to P or PI controllers.
*   **Disadvantages:**
    *   More complex to tune due to three parameters ($K_p$, $K_i$, $K_d$).
    *   The derivative term can amplify noise in the sensor signal, requiring filtering.
    *   Can be sensitive to changes in the system dynamics.

**Tuning:**
Tuning PID controllers is a crucial aspect of control system design. Common methods include:
1.  **Manual Tuning:** Adjusting parameters based on observing the system response.
2.  **Ziegler-Nichols Methods:** Empirical methods for determining initial PID parameters.
3.  **Software-based Tuning:** Auto-tuning features in modern controllers.

**Example:**
Robotic arm position control. A PID controller can ensure the arm moves to the desired position quickly, accurately, and without excessive shaking or overshoot, even when loads change or disturbances occur. The P term drives it towards the target, the I term corrects for any final positioning errors, and the D term smooths the motion, preventing jerky movements as it approaches the target.

**Textbook References:**
*   Bolton, W. (2010) - Chapter 8.6: Proportional-integral-derivative (PID) control.
*   Histand, M. B., & Alciatore, D. G. (2003) - Section 11.5: PID control.
*   Shetty, D., & Kolk, R. A. (2010) - Chapter 9: Control Systems.
*   Bishop, R. H. (2017) - Chapter 7: PID Control.
*   Merzouki, R. et al. (2003) - Chapter 3: Control strategies for mechatronic systems (may cover PID in context).

**Learning Outcome Alignment:**
*   CO1: Comprehend the importance of sensors and actuators (feedback from sensors to PID controller, control output to actuators).
*   CO2: Identify actuator mechanisms and signal conditioning processes (PID output drives actuators).
*   CO4: Analyze the models and responses of different systems (understanding the contribution of each PID term to system response).

---

### 6. Practical Considerations and Implementation

**Key Concepts:**
*   **Controller Type Selection:** Choosing P, PI, or PID depends on the system requirements (speed, accuracy, disturbance rejection) and its inherent dynamics.
    *   P: For systems where some steady-state error is acceptable, or as a starting point for tuning.
    *   PI: For systems requiring zero steady-state error and a reasonably fast response. Common in many industrial applications.
    *   PID: For systems requiring fast response, zero steady-state error, and good transient response (e.g., precise positioning, fast speed control).
*   **Integral Windup:**
    *   **Problem:** When the actuator saturates, the integral term continues to accumulate, leading to sluggish response and overshoot when the error eventually reduces.
    *   **Solutions:**
        *   **Anti-windup:** Temporarily disable or reduce the integral action when the actuator is saturated.
        *   **Conditional Integration:** Only integrate the error if the control output is not saturated.
*   **Derivative Noise Filtering:**
    *   **Problem:** The derivative term amplifies high-frequency noise.
    *   **Solutions:**
        *   **Low-pass filtering:** Filter the error signal before it's used by the derivative term.
        *   **Derivative-on-measurement:** Calculate the derivative of the measured process variable instead of the error. This is often preferred because the setpoint can change abruptly, causing a large derivative of the error, while the measured variable usually changes more smoothly.
        $u(t) = K_p \cdot e(t) + K_i \int_{0}^{t} e(\tau) d\tau - K_d \frac{dP V(t)}{dt}$
*   **Controller Discretization:** In digital systems (using microcontrollers), the continuous-time PID algorithm must be converted into a discrete-time equivalent. Common methods include:
    *   **Forward Euler:** $ \frac{de(t)}{dt} \approx \frac{e(k) - e(k-1)}{T} $ and $ \int_{0}^{t} e(\tau) d\tau \approx \sum_{j=0}^{k} e(j)T $
    *   **Backward Euler:** Used for derivative.
    *   **Trapezoidal Rule:** More accurate for integration.
*   **Tuning Methods:** Ziegler-Nichols, Cohen-Coon, Internal Model Control (IMC), and auto-tuning are techniques used to find optimal controller gains.

**Textbook References:**
*   Bolton, W. (2010) - Chapter 8.7: Practical aspects of PID control.
*   Histand, M. B., & Alciatore, D. G. (2003) - Chapter 11: Control System Concepts (discusses practical implementation).
*   Bishop, R. H. (2017) - Chapter 7: PID Control (discusses practical considerations and tuning).
*   Shetty, D., & Kolk, R. A. (2010) - Chapter 9: Control Systems (discusses practical implementation and tuning).

**Learning Outcome Alignment:**
*   CO1: Comprehend the importance of sensors and actuators (practical use of sensors and actuators in feedback loops).
*   CO2: Identify actuator mechanisms and signal conditioning processes (signal conditioning for noise reduction).
*   CO3: Select microprocessors and microcontrollers for the implementation in mechatronic system (digital implementation of controllers).
*   CO4: Analyze the models and responses of different systems (understanding how practical issues affect system response).

---

### 7. Practice Questions and Exercises

**Question 1:**
A system has a desired speed of 100 RPM. The current speed is measured as 95 RPM. What is the error signal for this system? If a proportional controller has a gain $K_p = 0.5$, what would be the initial control output?
**Answer:**
Error ($e$) = Setpoint - Process Variable = 100 RPM - 95 RPM = 5 RPM.
Control Output ($u(t)$) = $K_p \cdot e(t) = 0.5 \cdot 5 = 2.5$ (units depend on the system).

**Question 2:**
What is the primary advantage of using an Integral (I) controller compared to a Proportional (P) controller in a closed-loop system?
**Answer:**
The primary advantage of an I controller is its ability to eliminate steady-state error (offset). A P controller, while reducing error, often cannot drive the error to exactly zero.

**Question 3:**
Consider a PID controller. Describe the role of the Derivative (D) term in controlling a system's response. What is a potential drawback of using the D term and how can it be mitigated?
**Answer:**
The D term anticipates future error by looking at the rate of change of the error. It helps to dampen oscillations and reduce overshoot, leading to faster settling. A potential drawback is its sensitivity to noise in the sensor signal. This can be mitigated by filtering the error signal or using derivative-on-measurement.

**Question 4:**
A system is experiencing integral windup. Explain what integral windup is and suggest one method to prevent it.
**Answer:**
Integral windup occurs when the actuator is saturated (at its limit) while a significant error persists. The integral term continues to accumulate, causing excessive overshoot when the error eventually decreases. A method to prevent it is **anti-windup**, where the integral action is temporarily disabled or reduced when saturation occurs.

**Question 5:**
For a temperature control system where precise and stable temperature is critical, which controller type (P, PI, or PID) would you likely choose and why?
**Answer:**
A PID controller would likely be the best choice. The P term provides a fast initial response. The I term ensures that the exact setpoint temperature is reached and maintained (zero steady-state error). The D term helps to dampen any oscillations that might occur as the temperature approaches the setpoint, providing a stable and accurate final temperature.

---

### 8. Important Points to Remember

*   **Feedback is Key:** Closed-loop control relies on measuring the output (Process Variable) and comparing it to the desired output (Setpoint) to generate an error signal.
*   **Error Minimization:** The goal of any controller is to minimize the error signal.
*   **P Controller:** Responds to current error, fast but can have steady-state error.
*   **I Controller:** Responds to accumulated error, eliminates steady-state error but can be slow and oscillatory.
*   **PI Controller:** Combines P and I, offering a balance of speed and accuracy (eliminates steady-state error).
*   **PID Controller:** The most comprehensive, combining P, I, and D for potentially optimal performance: fast response, zero steady-state error, and good transient behavior.
*   **Tuning:** Proper tuning of controller gains ($K_p, K_i, K_d$) is crucial for effective control.
*   **Practical Issues:** Be mindful of integral windup and derivative noise when implementing controllers, especially in digital systems.

---
**End of Module 4 Notes**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
