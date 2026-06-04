---
title: "Dynamic response of systems"
subject: "MECHATRONIC SYSTEMS AND CONTROL"
module: "Module 3: Microprocessors and microcontrollers: Digital circuits"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200882b85456187f36ccd"
status: "completed"
scrapedAt: "2026-05-23T16:43:48.426Z"
---
# MECHATRONIC SYSTEMS AND CONTROL

## Module 3: Microprocessors and Microcontrollers: Digital Circuits

### Topic: Dynamic Response of Systems

---

### 1. Introduction to Dynamic Response

The **dynamic response** of a system describes how its output changes over time when subjected to a change in input or a disturbance. In mechatronic systems, understanding dynamic response is crucial for designing controllers that ensure stability, performance, and safety. This involves analyzing how systems react to inputs like step changes, ramps, impulses, and sinusoidal signals.

**Key Concepts:**

*   **System:** Any process or device that transforms an input into an output.
*   **Input:** The signal or force applied to the system.
*   **Output:** The system's response or the measured variable.
*   **Transient Response:** The behavior of the system during the transition period from its initial state to its steady-state.
*   **Steady-State Response:** The behavior of the system after the transient effects have died out and it has settled to a constant value or a steady oscillation.
*   **Time Domain Analysis:** Analyzing system behavior as a function of time.
*   **Frequency Domain Analysis:** Analyzing system behavior in terms of its response to sinusoidal inputs of different frequencies.

**Importance in Mechatronics (CO1, CO4):**

Mechatronic systems often involve dynamic processes. For example:
*   An electric motor's speed when its voltage is suddenly increased.
*   The position of a robotic arm when a new command is issued.
*   The temperature of a heating element when power is applied.

Understanding the dynamic response helps us:
*   Predict how a system will behave.
*   Design controllers to achieve desired performance (e.g., faster response, reduced overshoot).
*   Ensure system stability.
*   Avoid undesirable oscillations or instability.

**Textbook References:**

*   **Bolton, W. (2010).** *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering.* (Chapter 4: Dynamic response of systems)
*   **Histand, M. B., & Alciatore, D. G. (2003).** *Introduction to Mechatronics and Measurement Systems.* (Chapter 6: Dynamic Response of Systems)

---

### 2. System Order and Differential Equations

Many mechatronic systems can be modeled using linear differential equations. The **order** of a system is determined by the highest derivative of the output variable in its governing differential equation.

**First-Order Systems:**

*   **Definition:** Characterized by a first-order linear differential equation:
    $ \tau \frac{dy(t)}{dt} + y(t) = K x(t) $
    where:
    *   $y(t)$ is the output
    *   $x(t)$ is the input
    *   $\tau$ is the **time constant** (measures how quickly the system responds)
    *   $K$ is the **gain** (ratio of steady-state output to input)

*   **Time Constant ($\tau$):**
    *   Represents the time it takes for the system's output to reach approximately 63.2% of its final steady-state value when subjected to a step input.
    *   A smaller time constant indicates a faster response.

*   **Examples:**
    *   **RC Circuit (Voltage Response):** The voltage across a capacitor in a series RC circuit when a step voltage is applied.
        $ V_{out}(t) = V_{in} (1 - e^{-t/\tau}) $ where $\tau = RC$.
    *   **Thermal System:** The temperature of a small object heating up in a constant ambient temperature.
        $ m c \frac{dT(t)}{dt} = P_{in} - h A (T(t) - T_{amb}) $
        Rearranging into the first-order form:
        $ \tau \frac{dT(t)}{dt} + T(t) = K P_{in} + T_{amb} $ where $\tau = \frac{mc}{hA}$ and $K = \frac{1}{hA}$.

**Second-Order Systems:**

*   **Definition:** Characterized by a second-order linear differential equation:
    $ a \frac{d^2y(t)}{dt^2} + b \frac{dy(t)}{dt} + c y(t) = K x(t) $
    A more common standard form is:
    $ \frac{1}{\omega_n^2} \frac{d^2y(t)}{dt^2} + \frac{2\zeta}{\omega_n} \frac{dy(t)}{dt} + y(t) = K x(t) $
    where:
    *   $\omega_n$ is the **natural frequency** (the frequency at which the system would oscillate if there were no damping).
    *   $\zeta$ is the **damping ratio** (determines how oscillations decay).
    *   $K$ is the **gain**.

*   **Damping Ratio ($\zeta$):**
    *   **Underdamped ($\zeta < 1$):** System oscillates before settling to steady-state.
    *   **Critically Damped ($\zeta = 1$):** Fastest response without overshoot.
    *   **Overdamped ($\zeta > 1$):** Slow response with no oscillation.
    *   **Undamped ($\zeta = 0$):** System oscillates indefinitely (ideal case, rarely occurs in real systems).

*   **Examples:**
    *   **Mass-Spring-Damper System:** The position of a mass attached to a spring and a damper when a force is applied.
        $ m \frac{d^2x(t)}{dt^2} + c \frac{dx(t)}{dt} + k x(t) = F(t) $
        Dividing by $k$ and normalizing:
        $ \frac{m}{k} \frac{d^2x(t)}{dt^2} + \frac{c}{k} \frac{dx(t)}{dt} + x(t) = \frac{1}{k} F(t) $
        Comparing with the standard form, $\omega_n = \sqrt{k/m}$ and $\zeta = \frac{c}{2\sqrt{mk}}$.
    *   **DC Motor Speed Control:** The speed of a DC motor can often be approximated by a second-order system.

**Textbook References:**

*   **Shetty, D., & Kolk, R. A. (2010).** *Mechatronics System Design.* (Chapter 7: Dynamic response)
*   **Bishop, R. H. (2017).** *Mechatronics: an introduction.* (Chapter 8: System dynamics and control)

---

### 3. Transient Response Characteristics

The transient response of a system is often characterized by several key parameters, especially for second-order systems:

**For First-Order Systems:**

*   **Time Constant ($\tau$):** As defined earlier, a measure of speed.
*   **Rise Time ($T_r$):** The time taken for the output to rise from 10% to 90% of its final value. For a first-order system with a step input, $T_r \approx 2.2 \tau$.
*   **Settling Time ($T_s$):** The time it takes for the output to settle within a specified tolerance band (e.g., ±2% or ±5%) of its final value. For a first-order system, $T_s \approx 4\tau$ (for 2% tolerance) or $T_s \approx 3\tau$ (for 5% tolerance).
*   **Steady-State Value:** The final value the output reaches.

**For Second-Order Systems (Underdamped):**

*   **Rise Time ($T_r$):** Time to go from 10% to 90% of the final value.
    $ T_r = \frac{\pi - \cos^{-1}(\zeta)}{\omega_d} $ where $\omega_d = \omega_n \sqrt{1-\zeta^2}$ is the damped frequency.
*   **Peak Time ($T_p$):** Time to reach the first peak of the oscillation.
    $ T_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}} $
*   **Maximum Overshoot ($M_p$):** The maximum percentage deviation of the output from its steady-state value.
    $ M_p = e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} \times 100\% $
*   **Settling Time ($T_s$):** Time to settle within a tolerance band.
    *   For 2% tolerance: $ T_s = \frac{4}{\zeta \omega_n} $
    *   For 5% tolerance: $ T_s = \frac{3}{\zeta \omega_n} $

**Important Points to Remember:**

*   **Overshoot:** Indicates how much the response exceeds the final value. High overshoot can be undesirable in many mechatronic applications (e.g., positioning a robot arm too far).
*   **Settling Time:** Crucial for control systems as it determines how quickly the system can be commanded to a new state.
*   **Damping Ratio ($\zeta$):** A key parameter for second-order systems, dictating the nature of the transient response. Critically damped ($\zeta=1$) provides a fast response without overshoot, which is often the desired behavior.

**Textbook References:**

*   **Histand, M. B., & Alciatore, D. G. (2003).** *Introduction to Mechatronics and Measurement Systems.* (Chapter 6: Dynamic Response Characteristics)
*   **Bolton, W. (2010).** *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering.* (Chapter 4: Transient Response)

---

### 4. Steady-State Response

The **steady-state response** is the part of the system's output that remains after the transient response has decayed. For a stable system subjected to a constant input (step input), the steady-state response is the final constant value. For sinusoidal inputs, the steady-state response is a sinusoid of the same frequency but with a different amplitude and phase.

**Steady-State Error:**

*   **Definition:** The difference between the desired steady-state output and the actual steady-state output of a system.
*   **Causes:** Imperfect system models, disturbances, non-linearity, and the nature of the controller.
*   **Control System Design Goal:** To minimize or eliminate steady-state error, especially for tracking desired setpoints.

**Methods to Reduce Steady-State Error:**

*   **Increasing System Gain (K):** For many systems, increasing the DC gain can reduce steady-state error for step inputs. However, this can also lead to instability.
*   **Using Integral Control:** Incorporating an integrator in the controller design forces the steady-state error to zero for step inputs. This is a fundamental concept in PID control.
*   **System Type:** The "type" of a system (determined by the number of pure integrators in its open-loop transfer function) dictates its steady-state error to different types of inputs (step, ramp, parabolic).

**Textbook References:**

*   **Merzouki, R. et al. (2003).** *Intelligent Mechatronic Systems: Modeling, Control and Diagnosis.* (Chapter 5: System Modeling and Analysis - can touch upon steady-state behavior in system identification)
*   **Shetty, D., & Kolk, R. A. (2010).** *Mechatronics System Design.* (Chapter 7: Steady-state error analysis)

---

### 5. System Identification and Modeling for Dynamic Response

Understanding the dynamic response of a mechatronic system relies on creating an accurate model of that system. **System identification** is the process of building mathematical models of dynamical systems based on observed input-output data.

**Steps in Modeling:**

1.  **Identify System Components:** Break down the mechatronic system into its constituent parts (e.g., motor, gears, sensors, mechanical structure).
2.  **Apply Physical Laws:** Use fundamental physics principles (Newton's laws, Kirchhoff's laws, Ohm's law, etc.) to derive differential equations describing the behavior of each component.
3.  **Combine Component Models:** Integrate the models of individual components to form a complete system model.
4.  **Parameter Estimation:** If the exact physical parameters are unknown, use experimental data (input-output records) to estimate these parameters (e.g., mass, damping coefficient, resistance, capacitance, time constants, natural frequencies). Techniques include:
    *   **Input-Output Data Fitting:** Directly fitting the observed data to a proposed model structure.
    *   **Frequency Response Analysis:** Exciting the system with sinusoidal inputs of varying frequencies and measuring the output amplitude and phase to infer system dynamics.

**Microcontrollers and System Identification (CO3, CO4):**

Microcontrollers play a vital role in dynamic response analysis and control:
*   **Data Acquisition:** They acquire sensor data representing the system's output and inputs.
*   **Signal Conditioning:** They process raw sensor data to make it suitable for analysis or control.
*   **Controller Implementation:** They execute control algorithms (e.g., PID) to manipulate system inputs and achieve desired dynamic responses.
*   **On-line Identification:** In advanced systems, microcontrollers can perform real-time system identification to adapt control parameters as system dynamics change.

**Textbook References:**

*   **Histand, M. B., & Alciatore, D. G. (2003).** *Introduction to Mechatronics and Measurement Systems.* (Chapter 3: Modeling and Simulation - covers basic modeling principles applicable to dynamic response)
*   **Bishop, R. H. (2017).** *Mechatronics: an introduction.* (Chapter 7: System identification)

---

### 6. Practice Questions and Exercises

**Question 1 (First-Order System):**
A temperature sensor in a mechatronic system can be modeled as a first-order system with a time constant $\tau = 5$ seconds and a gain $K = 1$. If the sensor is initially at $20^\circ\text{C}$ and is suddenly exposed to a constant ambient temperature of $100^\circ\text{C}$, what will be the sensor's temperature after 10 seconds?

**Solution 1:**
The governing equation for a first-order system with a step input is $y(t) = y_{initial} + (y_{final} - y_{initial})(1 - e^{-t/\tau})$.
Here, $y(t)$ is the temperature, $y_{initial} = 20^\circ\text{C}$, $y_{final} = 100^\circ\text{C}$, $\tau = 5$ s, and $t = 10$ s.
$T(10) = 20 + (100 - 20)(1 - e^{-10/5})$
$T(10) = 20 + 80(1 - e^{-2})$
$T(10) = 20 + 80(1 - 0.1353)$
$T(10) = 20 + 80(0.8647)$
$T(10) = 20 + 69.176$
$T(10) \approx 89.18^\circ\text{C}$

**Question 2 (Second-Order System Characteristics):**
A second-order system has the following parameters: natural frequency $\omega_n = 10$ rad/s and damping ratio $\zeta = 0.5$. Calculate the following:
a) The damped frequency ($\omega_d$).
b) The peak time ($T_p$).
c) The maximum overshoot ($M_p$).
d) The settling time ($T_s$) for a 2% tolerance.

**Solution 2:**
a) Damped frequency:
$\omega_d = \omega_n \sqrt{1-\zeta^2} = 10 \sqrt{1 - 0.5^2} = 10 \sqrt{1 - 0.25} = 10 \sqrt{0.75} \approx 10 \times 0.866 = 8.66$ rad/s.

b) Peak time:
$T_p = \frac{\pi}{\omega_d} = \frac{\pi}{8.66} \approx \frac{3.14159}{8.66} \approx 0.363$ seconds.

c) Maximum overshoot:
$M_p = e^{-\frac{\zeta \pi}{\sqrt{1-\zeta^2}}} \times 100\% = e^{-\frac{0.5 \pi}{\sqrt{1-0.5^2}}} \times 100\% = e^{-\frac{0.5 \pi}{0.866}} \times 100\%$
$M_p = e^{-\frac{1.5708}{0.866}} \times 100\% = e^{-1.814} \times 100\% \approx 0.163 \times 100\% = 16.3\%$.

d) Settling time (2% tolerance):
$T_s = \frac{4}{\zeta \omega_n} = \frac{4}{0.5 \times 10} = \frac{4}{5} = 0.8$ seconds.

**Question 3 (Steady-State Error):**
Consider a simple proportional controller ($K_p$) controlling a first-order process.
If the process gain $K=2$, time constant $\tau=3$ s, and the controller gain $K_p=5$, what is the steady-state error for a unit step input?

**Solution 3:**
For a first-order system with a proportional controller, the steady-state error ($e_{ss}$) to a unit step input is given by:
$e_{ss} = \frac{1}{1 + K_{open-loop}}$
In this case, the open-loop gain is $K_p \times K = 5 \times 2 = 10$.
$e_{ss} = \frac{1}{1 + 10} = \frac{1}{11} \approx 0.0909$

**Exercise 1:**
A robotic arm actuator system can be approximated by a second-order model. If the system has $\omega_n = 5$ rad/s and $\zeta = 0.2$, what are the transient response characteristics (rise time, peak time, maximum overshoot, settling time for 2% tolerance)? How would increasing the damping ratio to $\zeta = 0.8$ affect these characteristics?

**Exercise 2:**
Explain how a microcontroller could be used to measure the time constant of a first-order system by analyzing its response to a step input. (Relates to CO3, CO4)

---

### 7. Important Points to Remember

*   **System Order:** The order of a system (determined by its differential equation) dictates its complexity and the nature of its dynamic response. First-order systems are characterized by a single time constant, while second-order systems are characterized by natural frequency and damping ratio.
*   **Time Constant ($\tau$):** A fundamental parameter for first-order systems, representing the speed of response (smaller $\tau$ = faster).
*   **Damping Ratio ($\zeta$):** Crucial for second-order systems, controlling the oscillatory behavior (underdamped, critically damped, overdamped). Critically damped ($\zeta=1$) is often desired for fast, stable response without overshoot.
*   **Overshoot and Settling Time:** Key metrics for evaluating transient performance. Minimizing settling time is crucial for systems that need to respond quickly to new commands.
*   **Steady-State Error:** The difference between desired and actual final output. Integral control is a common method to eliminate it.
*   **Modeling is Key:** Accurate system models are essential for predicting and controlling dynamic response. System identification techniques help in obtaining these models.
*   **Microcontrollers:** Act as the brain of mechatronic systems, enabling data acquisition, processing, and control to manage dynamic behavior.

---

This study material provides a foundational understanding of the dynamic response of systems, crucial for designing and analyzing mechatronic systems. The concepts are applicable to a wide range of mechatronic applications and are directly relevant to achieving the course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
