---
title: "Dynamic response of systems"
subject: "MECHATRONIC SYSTEMS"
module: "Module 3: Microprocessors and microcontrollers: Digital circuits"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bae"
status: "completed"
scrapedAt: "2026-05-23T16:42:45.045Z"
---
# MECHATRONIC SYSTEMS - Module 3: Microprocessors and Microcontrollers: Digital Circuits

## Topic: Dynamic Response of Systems

This module delves into how mechatronic systems react to changes in their inputs over time, a critical aspect for controlling and predicting system behavior. We will explore the fundamental concepts of system dynamics, how they are influenced by digital components, and how to analyze and predict their responses.

---

### 1. Introduction to System Dynamics and Dynamic Response

**Key Concepts:**

*   **System:** A collection of interconnected components that interact to achieve a specific function. In mechatronics, this includes mechanical, electrical, and computational elements.
*   **Dynamic Response:** The behavior of a system over time when subjected to an input or disturbance. It describes how the system's output changes in response to changes in its input.
*   **Static Response:** The behavior of a system after it has reached a steady state, where the output is no longer changing with time. This is a snapshot in time, whereas dynamic response is a function of time.

**Why is Dynamic Response Important in Mechatronics?**

*   **Control System Design:** Understanding dynamic response is crucial for designing controllers that can stabilize a system, track desired trajectories, and reject disturbances effectively. (Relates to CO4)
*   **Performance Evaluation:** Dynamic response metrics (e.g., speed of response, overshoot) help evaluate how well a system performs its intended task.
*   **Stability Analysis:** Identifying potential instabilities in the system's response is vital for ensuring safe and reliable operation.
*   **Simulation and Modeling:** Dynamic models are used to predict system behavior before implementation, saving time and resources.

**Textbook Reference:**
*   Bolton, W. (2010). *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering*. Discusses the importance of time-dependent behavior in control systems.
*   Histand & Al-ciatore (2003). *Introduction to Mechatronics and Measurement Systems*. Provides foundational concepts of system modeling and response.

---

### 2. Modeling Dynamic Systems

To understand and predict dynamic response, we need mathematical models. These models represent the relationships between inputs, outputs, and the internal states of a system.

**Types of System Models:**

*   **Differential Equations:** The most common mathematical tool for describing dynamic systems. They relate the rates of change of system variables to the current values of those variables and the inputs.
    *   **Example:** A simple mass-spring-damper system can be modeled by a second-order ordinary differential equation (ODE).
        *   $m\frac{d^2x}{dt^2} + c\frac{dx}{dt} + kx = F(t)$
        where:
        *   $m$ is mass
        *   $c$ is damping coefficient
        *   $k$ is spring stiffness
        *   $x$ is displacement (output)
        *   $F(t)$ is applied force (input)

*   **Transfer Functions (Laplace Domain):** A powerful tool for analyzing linear time-invariant (LTI) systems, especially in control engineering. It represents the ratio of the Laplace transform of the output to the Laplace transform of the input, assuming zero initial conditions.
    *   **Definition:** $G(s) = \frac{Y(s)}{U(s)}$
        where:
        *   $Y(s)$ is the Laplace transform of the output $y(t)$
        *   $U(s)$ is the Laplace transform of the input $u(t)$
        *   $s$ is the Laplace variable
    *   **From Differential Equations:** The transfer function is derived by taking the Laplace transform of the system's differential equation.
        *   For the mass-spring-damper: $G(s) = \frac{1}{ms^2 + cs + k}$

*   **State-Space Representation:** A more general approach that can handle multi-input, multi-output (MIMO) systems and nonlinear systems. It uses a set of first-order differential equations to describe the system's internal state.
    *   **Equations:**
        *   $\dot{\mathbf{x}}(t) = \mathbf{Ax}(t) + \mathbf{Bu}(t)$
        *   $\mathbf{y}(t) = \mathbf{Cx}(t) + \mathbf{Du}(t)$
        where:
        *   $\mathbf{x}(t)$ is the state vector
        *   $\mathbf{u}(t)$ is the input vector
        *   $\mathbf{y}(t)$ is the output vector
        *   $\mathbf{A}, \mathbf{B}, \mathbf{C}, \mathbf{D}$ are matrices representing system dynamics.

**Relating to Microcontrollers/Microprocessors:**

*   Microcontrollers are used to implement digital control algorithms that operate on discretized versions of these continuous-time system models.
*   The process of converting continuous-time models to discrete-time models (e.g., using difference equations) is essential when designing controllers for microcontrollers.

**Textbook Reference:**
*   Histand & Al-ciatore (2003). *Introduction to Mechatronics and Measurement Systems*. Chapter on system modeling and dynamic response analysis.
*   Shetty & Kolk (2010). *Mechatronics system design*. Covers various modeling techniques for mechatronic components.

---

### 3. Standard Test Inputs and System Responses

To characterize a system's dynamic behavior, we often subject it to standard test inputs and observe its output response.

**Common Test Inputs:**

*   **Step Input:** A sudden change in the input from zero to a constant value at time $t=0$. This is a common way to simulate sudden load changes or setpoint changes.
    *   $u(t) = A u_s(t)$, where $u_s(t)$ is the unit step function.

*   **Ramp Input:** An input that increases linearly with time.
    *   $u(t) = At$

*   **Impulse Input:** A very short duration pulse with a large amplitude, such that its integral is a constant. Often approximated by a very narrow pulse.
    *   $u(t) = A \delta(t)$, where $\delta(t)$ is the Dirac delta function.

*   **Sinusoidal Input:** An input that varies sinusoidally with time. Used to analyze frequency response.

**Types of System Responses:**

*   **Transient Response:** The behavior of the system as it changes from its initial state to its final steady-state value. This part of the response is time-dependent and often exhibits oscillations.
*   **Steady-State Response:** The behavior of the system after the transient effects have died out. The output is constant or follows a predictable pattern.

**Key Parameters of Transient Response (for a second-order system subjected to a step input):**

*   **Delay Time ($t_d$):** The time required for the response to reach 50% of its final steady-state value for the first time.
*   **Rise Time ($t_r$):** The time required for the response to rise from 10% to 90% of its final steady-state value.
*   **Peak Time ($t_p$):** The time required for the response to reach its first peak (maximum overshoot).
*   **Maximum Overshoot (%OS):** The peak value of the response, expressed as a percentage of the final steady-state value, minus the steady-state value, all divided by the steady-state value.
    *   $\%OS = \frac{y_{peak} - y_{final}}{y_{final}} \times 100\%$
*   **Settling Time ($t_s$):** The time required for the response to stay within a specified tolerance band (e.g., ±2% or ±5%) of the final steady-state value.

**Relating to Microcontrollers/Microprocessors:**

*   Microcontroller code can be designed to generate specific test input signals or to measure the system's response to these inputs.
*   The observed dynamic response, measured and processed by the microcontroller, can be used to tune control parameters or diagnose system faults. (Relates to CO1, CO2, CO4)

**Textbook Reference:**
*   Bolton (2010). *Mechatronics*. Discusses standard test signals and how to analyze system responses.
*   Histand & Al-ciatore (2003). *Introduction to Mechatronics and Measurement Systems*. Provides detailed explanations of transient response characteristics.

---

### 4. First-Order Systems

**Characteristics:**

*   Typically described by a first-order linear ODE: $a\frac{dy}{dt} + by = ku$
*   Transfer function form: $G(s) = \frac{K}{\tau s + 1}$
    *   $K$: Static Gain (ratio of steady-state output to steady-state input).
    *   $\tau$: Time Constant (a measure of how quickly the system responds. A smaller $\tau$ means a faster response).

**Response to a Step Input:**

*   The output $y(t)$ rises exponentially towards its final steady-state value $K A$ (where $A$ is the amplitude of the step input).
*   After one time constant ($\tau$), the output reaches approximately 63.2% of its final value.
*   After approximately $3\tau$ to $5\tau$, the system is considered to have reached its steady state (within a few percent of the final value).

**Examples in Mechatronics:**

*   **RC Circuits:** The charging and discharging of a capacitor in an electrical circuit.
*   **Thermal Systems:** The heating or cooling of an object where the rate of temperature change is proportional to the temperature difference.
*   **Level Control in Tanks:** The rate of change of liquid level is proportional to the inflow and outflow rates.

**Textbook Reference:**
*   Histand & Al-ciatore (2003). *Introduction to Mechatronics and Measurement Systems*. Detailed analysis of first-order systems.
*   Bishop (2017). *Mechatronics: an introduction*. Provides examples of first-order system behavior in mechatronic applications.

---

### 5. Second-Order Systems

**Characteristics:**

*   Typically described by a second-order linear ODE: $a\frac{d^2y}{dt^2} + b\frac{dy}{dt} + cy = ku$
*   Transfer function form: $G(s) = \frac{K}{\frac{s^2}{\omega_n^2} + \frac{2\zeta s}{\omega_n} + 1}$
    *   $K$: Static Gain.
    *   $\omega_n$: Undamped Natural Frequency (the frequency at which the system would oscillate if there were no damping).
    *   $\zeta$: Damping Ratio (determines the nature of the transient response).

**Classification based on Damping Ratio ($\zeta$):**

*   **Undamped ($\zeta = 0$):** The system oscillates indefinitely at its natural frequency $\omega_n$.
*   **Underdamped ($0 < \zeta < 1$):** The system oscillates with decreasing amplitude until it settles. This is often the desired behavior for a fast but stable response.
    *   The response exhibits overshoot and oscillations.
*   **Critically Damped ($\zeta = 1$):** The system returns to its steady state as quickly as possible without any oscillation.
*   **Overdamped ($\zeta > 1$):** The system returns to its steady state slowly without any oscillation. The response is sluggish.

**Response to a Step Input (Underdamped Case):**

The transient response is characterized by overshoot and ringing. The parameters like rise time, peak time, and settling time are directly related to $\zeta$ and $\omega_n$.

*   **Peak Time ($t_p$):** $t_p = \frac{\pi}{\omega_d}$, where $\omega_d = \omega_n \sqrt{1-\zeta^2}$ is the damped natural frequency.
*   **Maximum Overshoot (%OS):** $\%OS = e^{-\frac{\pi \zeta}{\sqrt{1-\zeta^2}}} \times 100\%$

**Examples in Mechatronics:**

*   **Mechanical Systems:** Mass-spring-damper systems (e.g., vehicle suspension, robot arm joints).
*   **Electrical Systems:** RLC circuits.
*   **Control Systems:** Most physical systems exhibit second-order or higher-order dynamics.

**Textbook Reference:**
*   Bolton (2010). *Mechatronics*. Detailed explanation of second-order system behavior and the role of damping.
*   Histand & Al-ciatore (2003). *Introduction to Mechatronics and Measurement Systems*. Extensive coverage of second-order system analysis.

---

### 6. Dynamic Response of Digital Systems and Microcontrollers

**Key Concepts:**

*   **Digital Control:** Microprocessors and microcontrollers implement control algorithms in discrete time. This involves sampling the system's output, processing it, and generating control signals at discrete time intervals.
*   **Sampling Rate:** The frequency at which the analog input is converted to digital and the digital output is converted back to analog.
    *   **Nyquist-Shannon Sampling Theorem:** To accurately reconstruct a signal, the sampling rate must be at least twice the highest frequency component present in the signal.
    *   **Impact:** An insufficient sampling rate can lead to aliasing (distortion) and poor system performance, affecting the dynamic response.
*   **Quantization Error:** The error introduced when an analog signal is converted to a digital value with finite precision.
*   **Control Loop Delay:** The time taken for the microcontroller to read sensor data, execute the control algorithm, and update actuator commands. This delay can significantly impact the stability and dynamic response of the system.
*   **Discrete-Time Models:** Continuous-time system models (differential equations, transfer functions) are converted into discrete-time models (difference equations, discrete-time transfer functions) for implementation on microcontrollers.

**How Microcontrollers Affect Dynamic Response:**

*   **Finite Precision:** Digital values have finite bits, leading to quantization errors.
*   **Sampling:** The continuous system is observed at discrete points in time, which can alter its perceived dynamics.
*   **Computational Delays:** Processing time within the microcontroller introduces delays in the control loop.
*   **Algorithm Implementation:** The specific control algorithm (e.g., PID controller) implemented affects the dynamic response. Microcontrollers allow for complex algorithms to be implemented.

**Relating to Learning Outcomes:**

*   **CO3:** Selecting appropriate microprocessors/microcontrollers for a mechatronic system involves considering their processing speed, memory, and I/O capabilities, which directly influence the achievable dynamic response due to computational delays and sampling rates.
*   **CO4:** Analyzing the dynamic response of systems with digital control requires understanding the impact of discretization and control loop delays on the continuous-time system behavior.

**Textbook Reference:**
*   Bolton (2010). *Mechatronics*. Discusses digital control and its implications for system dynamics.
*   Histand & Al-ciatore (2003). *Introduction to Mechatronics and Measurement Systems*. Covers digital control systems and sampling.
*   Merzouki et al. (2003). *Intelligent Mechatronic Systems: Modeling, Control and Diagnosis*. Addresses modeling and control in the context of digital implementation.

---

### 7. Practical Considerations and Examples

**Sensors and Actuators in Dynamic Response:**

*   **Sensors:** The dynamic response of sensors (e.g., lag in a temperature sensor) can affect the perceived system state and thus the control action. (Relates to CO1, CO2)
*   **Actuators:** The dynamic limitations of actuators (e.g., motor torque limits, valve opening/closing speed) define the system's capability to respond to control signals. (Relates to CO1, CO2)

**Signal Conditioning:**

*   **Filtering:** Analog filters (e.g., low-pass filters) are often used to remove noise before analog-to-digital conversion, which can smooth out the input to the microcontroller and affect the system's perceived dynamic response. (Relates to CO2)
*   **Amplification:** Amplifying sensor signals may also introduce non-linearities or alter the frequency response.

**System Identification:**

*   The process of building mathematical models of dynamic systems based on experimental data.
*   This is often done by applying known inputs (like step or sine waves) and measuring the system's response using sensors, then using algorithms to estimate model parameters. Microcontrollers can be used to generate test signals and record data for system identification. (Relates to CO4)

**Example Scenario: Cruise Control System**

*   **System:** A vehicle's engine and powertrain.
*   **Goal:** Maintain a constant speed.
*   **Dynamic Response:** How quickly the vehicle accelerates or decelerates to reach and maintain the set speed when encountering hills or changing road conditions.
*   **Microcontroller Role:** Reads the speed sensor, compares it to the set speed, and computes the throttle position command using a control algorithm (e.g., PID).
*   **Factors affecting dynamic response:**
    *   **Vehicle inertia (mass):** Higher inertia leads to slower response (like a higher mass in a second-order system).
    *   **Engine response time:** How quickly the engine can increase or decrease power.
    *   **Sampling rate of the speed sensor:** If too slow, the system might overreact to speed changes.
    *   **Control algorithm tuning:** The parameters of the PID controller directly influence the overshoot, settling time, and stability of the vehicle's speed.

**Textbook Reference:**
*   Shetty & Kolk (2010). *Mechatronics system design*. Discusses system identification and practical implementation.
*   Bishop (2017). *Mechatronics: an introduction*. Offers various case studies.
*   Merzouki et al. (2003). *Intelligent Mechatronic Systems: Modeling, Control and Diagnosis*. Covers practical aspects of control system implementation.

---

### 8. Practice Questions and Answers

**Question 1:**
A first-order system has a transfer function $G(s) = \frac{5}{0.2s + 1}$. What is the time constant and the static gain of this system? If a unit step input is applied, what is the steady-state output?

**Answer 1:**
*   **Time Constant ($\tau$):** Comparing $G(s) = \frac{5}{0.2s + 1}$ to the standard form $G(s) = \frac{K}{\tau s + 1}$, we can see that $\tau = 0.2$ seconds.
*   **Static Gain ($K$):** From the comparison, $K = 5$.
*   **Steady-State Output:** For a unit step input ($u(t)=1$), the steady-state output is $y_{ss} = K \times \text{input amplitude} = 5 \times 1 = 5$.

**Question 2:**
A second-order system is described by the transfer function $G(s) = \frac{10}{s^2 + 2s + 10}$.
a) Identify the values of $K$, $\omega_n$, and $\zeta$.
b) Based on the damping ratio, what type of response can be expected for a step input?
c) Calculate the maximum overshoot if the system is underdamped.

**Answer 2:**
a) The standard form for a second-order system's transfer function is $G(s) = \frac{K}{\frac{s^2}{\omega_n^2} + \frac{2\zeta s}{\omega_n} + 1}$.
We can rewrite the given transfer function as:
$G(s) = \frac{10}{s^2 + 2s + 10} = \frac{10}{\frac{s^2}{10} + \frac{2s}{10} + 1} = \frac{10 \times 10}{10 \times (\frac{s^2}{10} + \frac{2s}{10} + 1)} = \frac{100}{s^2 + 2s + 10}$
This form is not directly matching the standard denominator. Let's compare $s^2 + 2s + 10$ to $s^2 + 2\zeta\omega_n s + \omega_n^2$.
*   $\omega_n^2 = 10 \implies \omega_n = \sqrt{10} \approx 3.16$ rad/s.
*   $2\zeta\omega_n = 2 \implies 2\zeta\sqrt{10} = 2 \implies \zeta\sqrt{10} = 1 \implies \zeta = \frac{1}{\sqrt{10}} \approx 0.316$.
*   The static gain $K$ can be found by setting $s=0$ in the transfer function: $K = \frac{10}{0^2 + 2(0) + 10} = \frac{10}{10} = 1$.

So, $K=1$, $\omega_n \approx 3.16$ rad/s, and $\zeta \approx 0.316$.

b) Since $0 < \zeta < 1$ ($\zeta \approx 0.316$), the system is **underdamped**. This means the response to a step input will exhibit oscillations and overshoot before settling to the steady-state value.

c) For an underdamped system, the maximum overshoot is given by:
$\%OS = e^{-\frac{\pi \zeta}{\sqrt{1-\zeta^2}}} \times 100\%$
$\%OS = e^{-\frac{\pi \times 0.316}{\sqrt{1-(0.316)^2}}} \times 100\%$
$\%OS = e^{-\frac{0.992}{\sqrt{1-0.0998}}} \times 100\%$
$\%OS = e^{-\frac{0.992}{\sqrt{0.9002}}} \times 100\%$
$\%OS = e^{-\frac{0.992}{0.9488}} \times 100\%$
$\%OS = e^{-1.0455} \times 100\%$
$\%OS \approx 0.3513 \times 100\% \approx 35.13\%$

**Question 3:**
What is the primary concern when choosing a sampling rate for a microcontroller-based control system, according to the Nyquist-Shannon Sampling Theorem? What might happen if the sampling rate is too low?

**Answer 3:**
The primary concern is to ensure that the sampling rate is at least twice the highest frequency component of the signal being sampled. This is to avoid aliasing, which is the distortion of a signal when it is sampled at a rate lower than its Nyquist frequency. If the sampling rate is too low, the microcontroller will not be able to accurately represent the continuous-time behavior of the system, leading to incorrect control actions and potentially poor or unstable dynamic response. Information about the high-frequency components of the signal will be lost or misrepresented.

---

### Important Points to Remember:

*   **Dynamic response is crucial for understanding and controlling mechatronic systems.** It dictates how a system behaves over time when inputs change.
*   **Mathematical models (differential equations, transfer functions) are essential for analyzing dynamic response.**
*   **First-order systems are characterized by a time constant ($\tau$), which indicates the speed of response.**
*   **Second-order systems are characterized by the undamped natural frequency ($\omega_n$) and damping ratio ($\zeta$), which determine the oscillatory nature and stability of the response.**
*   **Microcontrollers introduce digital aspects (sampling, quantization, delays) that modify the perceived dynamic response of a system.**
*   **The Nyquist-Shannon Sampling Theorem is critical for digital control to avoid aliasing.**
*   **The performance of sensors and actuators directly impacts the overall dynamic response of the mechatronic system.**

---

This concludes the study notes for the "Dynamic Response of Systems" topic from Module 3. Understanding these concepts is fundamental for designing effective and efficient mechatronic systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
