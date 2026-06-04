---
title: "Programming of Microcontrollers Model-ing and system response: Mechanical system model"
subject: "MECHATRONIC SYSTEMS AND CONTROL"
module: "Module 3: Microprocessors and microcontrollers: Digital circuits"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200882b85456187f36cca"
status: "completed"
scrapedAt: "2026-05-23T16:43:43.677Z"
---
# MECHATRONIC SYSTEMS AND CONTROL

## Module 3: Microprocessors and Microcontrollers: Digital Circuits

### Topic: Programming of Microcontrollers - Modeling and System Response: Mechanical System Model

---

### 1. Introduction to Microcontroller Programming and System Modeling

*   **What is a Microcontroller?**
    *   A self-contained microcomputer on a single chip.
    *   Contains a CPU, memory (RAM and ROM/Flash), and I/O peripherals (timers, ADCs, PWM, UART, etc.).
    *   Designed for embedded applications requiring control and automation.
    *   (Bolton, Ch 5.1)
*   **Why Program Microcontrollers?**
    *   To enable them to interact with the physical world through sensors and actuators.
    *   To implement control algorithms for specific system behaviors.
    *   To process sensor data and make decisions.
*   **Modeling and System Response:**
    *   **System Modeling:** Creating a mathematical representation of a physical system (e.g., mechanical, electrical, thermal) to understand its behavior.
    *   **System Response:** How a system reacts to inputs or disturbances. This can be in terms of its output variable's change over time.
    *   Understanding system models is crucial for designing effective control strategies, which are then implemented on microcontrollers. (Histand & Alciatore, Ch 1)
*   **Relevance to Course Outcomes:**
    *   **CO1 (K2):** Understanding how microcontrollers interact with sensors and actuators is fundamental. Modeling helps predict and achieve desired interactions.
    *   **CO2 (K2):** Actuator mechanisms and signal conditioning are the "outputs" of the microcontroller's control. Modeling helps determine the required signals.
    *   **CO3 (K2):** Selecting the right microcontroller depends on the computational and I/O demands of the control algorithms, which are derived from system models.
    *   **CO4 (K3):** This topic directly addresses the analysis of system models and their responses.

---

### 2. Mechanical System Models for Mechatronics

*   **Purpose of Mechanical Models:**
    *   To predict the behavior of mechanical components (e.g., motors, linkages, springs, dampers) when subjected to forces or control signals.
    *   To design controllers that achieve desired performance characteristics (e.g., speed, position, force).
    *   To simulate system behavior before physical implementation. (Shetty & Kolk, Ch 2)
*   **Key Mechanical Elements and their Mathematical Representation:**
    *   **Mass (m):** Resists acceleration.
        *   **Newton's Second Law:**  $F = ma$
        *   **Mechanical Model:** Inertia. Represents how much force is needed to change its velocity.
        *   Example: The mass of a robotic arm.
    *   **Spring (k):** Stores potential energy and exerts a restoring force proportional to displacement.
        *   **Hooke's Law:** $F_s = kx$ (where $x$ is displacement from equilibrium)
        *   **Mechanical Model:** Stiffness. Represents how much force is needed to deform it.
        *   Example: A suspension spring in a vehicle.
    *   **Damper (b):** Dissipates energy, providing a force proportional to velocity.
        *   **Damping Force:** $F_d = bv$ (where $v$ is velocity)
        *   **Mechanical Model:** Damping coefficient. Represents resistance to motion, converting kinetic energy into heat.
        *   Example: A shock absorber.
*   **Combining Elements: Equations of Motion**
    *   By applying Newton's laws and the principles of force summation, we can derive differential equations that describe the system's dynamic behavior.
    *   **General form for a simple second-order system:**
        $m\frac{d^2x}{dt^2} + b\frac{dx}{dt} + kx = F(t)$
        *   $m$: Mass
        *   $b$: Damping coefficient
        *   $k$: Spring constant
        *   $x$: Displacement
        *   $F(t)$: Applied force as a function of time
*   **Examples of Mechanical Systems and their Models:**
    *   **Mass-Spring-Damper System:**
        *   This is a fundamental model for many mechatronic systems, including vibration analysis, suspension systems, and basic robotic joints.
        *   The equation of motion directly describes how the position ($x$) changes over time due to forces.
    *   **DC Motor Model (Simplified):**
        *   A common actuator. Its rotational motion can be modeled.
        *   **Rotational Inertia (J):** Analogous to mass.
        *   **Damping (b):** Friction in bearings and air resistance.
        *   **Torque ($\tau$):** Applied by the motor.
        *   **Angular Position ($\theta$) or Velocity ($\omega$):** The outputs.
        *   Equation of motion: $J\frac{d^2\theta}{dt^2} + b\frac{d\theta}{dt} = \tau(t)$
        *   (Bolton, Ch 8.2)
        *   **Electrical Input:** The torque $\tau$ is often proportional to the armature current ($i_a$), which in turn is related to the applied voltage ($v_a$) and back-EMF ($e_b = k_b \omega$).
            $\tau = k_t i_a$
            $v_a = R_a i_a + L_a \frac{di_a}{dt} + e_b$
            $e_b = k_b \omega = k_b \frac{d\theta}{dt}$
        *   Combining these can lead to a system description that relates applied voltage to angular output.
    *   **Linear Actuator (e.g., Ball Screw):**
        *   Translates rotational motion into linear motion.
        *   Similar principles apply: inertia of the moving mass, damping due to friction.
        *   Forces involved in linear motion are $F = ma$, $F_d = bv$, $F_s = kx$.

---

### 3. System Response Analysis

*   **What is System Response?**
    *   How the output of a system changes over time in reaction to an input or a disturbance.
    *   Key characteristics include: rise time, settling time, overshoot, steady-state error, oscillation frequency.
*   **Types of Inputs:**
    *   **Step Input:** A sudden change from zero to a constant value (e.g., turning on a motor to a set speed). Very common in control system testing.
    *   **Impulse Input:** A very short duration input with a large magnitude, representing a sudden "kick" or disturbance.
    *   **Ramp Input:** A linearly increasing input (e.g., a constant acceleration).
    *   **Sinusoidal Input:** An input that varies sinusoidally over time.
*   **Analyzing the Response of Mechanical Models:**
    *   **Transient Response:** The behavior of the system before it settles to its steady-state value.
        *   **Rise Time:** Time taken for the output to go from 10% to 90% of its final value.
        *   **Settling Time:** Time taken for the output to stay within a certain percentage (e.g., 2% or 5%) of its final value.
        *   **Overshoot:** The maximum amount the output exceeds its final steady-state value.
        *   **Damping Ratio ($\zeta$):** A key parameter that dictates the nature of the transient response in second-order systems.
            *   $\zeta < 0$: Unstable system.
            *   $\zeta = 0$: Undamped oscillation.
            *   $0 < \zeta < 1$: Underdamped (oscillatory decay).
            *   $\zeta = 1$: Critically damped (fastest response without overshoot).
            *   $\zeta > 1$: Overdamped (slow response without overshoot).
            *   (Histand & Alciatore, Ch 4)
    *   **Steady-State Response:** The behavior of the system after the transient effects have died out.
        *   **Steady-State Value:** The final value the output approaches.
        *   **Steady-State Error:** The difference between the desired output and the actual steady-state output.
*   **Example: Response of a Mass-Spring-Damper System to a Step Input**
    *   Consider a mass on a spring with damping, and a constant force $F_0$ is applied.
    *   The equation of motion is $m\ddot{x} + b\dot{x} + kx = F_0$.
    *   The response $x(t)$ will depend on the values of $m$, $b$, and $k$.
    *   **Underdamped ($0 < \zeta < 1$):** The mass will oscillate as it approaches its final position. The oscillations will gradually decrease in amplitude due to damping.
    *   **Critically Damped ($\zeta = 1$):** The mass will move to its final position as quickly as possible without oscillating.
    *   **Overdamped ($\zeta > 1$):** The mass will move slowly to its final position without oscillating.
    *   (Bishop, Ch 3)
*   **Transfer Functions:**
    *   A powerful tool for analyzing linear time-invariant (LTI) systems.
    *   Represents the relationship between the Laplace transform of the output and the Laplace transform of the input, assuming zero initial conditions.
    *   $G(s) = \frac{Y(s)}{U(s)}$ where $Y(s)$ is the Laplace transform of the output $y(t)$ and $U(s)$ is the Laplace transform of the input $u(t)$.
    *   For the mass-spring-damper system with input force $F(t)$ and output displacement $x(t)$:
        $ms^2X(s) + bsX(s) + kX(s) = F(s)$
        $X(s)(ms^2 + bs + k) = F(s)$
        $G(s) = \frac{X(s)}{F(s)} = \frac{1}{ms^2 + bs + k}$
    *   The denominator of the transfer function (the characteristic equation) determines the system's stability and response characteristics. Poles of the transfer function are the roots of the characteristic equation.
    *   (Histand & Alciatore, Ch 4)

---

### 4. Microcontroller Programming for System Control

*   **Bridging the Model and the Physical System:**
    *   Microcontrollers execute control algorithms that take sensor readings (measuring the actual system state) and generate actuator commands (influencing the system).
    *   The mechanical system model guides the design of these algorithms.
*   **Types of Control Algorithms:**
    *   **On/Off Control (Bang-Bang):** Simple, but can lead to oscillations. e.g., controlling a heater. If temperature is below setpoint, turn heater on; if above, turn off.
    *   **Proportional (P) Control:** Output is proportional to the error (difference between setpoint and actual value).
        *   $Output = K_p \times Error$
        *   $Error = Setpoint - MeasuredValue$
        *   Reduces steady-state error but can increase overshoot.
    *   **Proportional-Integral (PI) Control:** Adds an integral term to eliminate steady-state error.
        *   $Output = K_p \times Error + K_i \int Error \, dt$
        *   Can introduce instability if $K_i$ is too high.
    *   **Proportional-Integral-Derivative (PID) Control:** Adds a derivative term to anticipate future error, improving transient response and reducing overshoot.
        *   $Output = K_p \times Error + K_i \int Error \, dt + K_d \frac{dError}{dt}$
        *   (Bolton, Ch 11.2)
        *   (Merzouki et al., Ch 5) - Discusses advanced control strategies often built upon PID.
*   **Implementing Control in Microcontrollers:**
    *   **Sampling:** Microcontrollers operate digitally. They read sensor values at discrete time intervals (sampling period).
    *   **Discretization of Control Laws:** Continuous-time control laws (like PID) are converted into discrete-time algorithms suitable for microcontroller execution.
        *   Integral term approximated by summation: $\int Error \, dt \approx \sum Error \times \Delta t$
        *   Derivative term approximated by difference: $\frac{dError}{dt} \approx \frac{Error(k) - Error(k-1)}{\Delta t}$
    *   **Actuator Command Generation:**
        *   **Pulse Width Modulation (PWM):** A common technique to control the average voltage supplied to an actuator (like a DC motor). The microcontroller generates a square wave where the *width* of the pulse is varied. Wider pulses mean higher average voltage.
        *   **Digital-to-Analog Converters (DACs):** For analog control signals.
    *   **Microcontroller Architecture and Control:**
        *   **Timers:** Used to schedule control loop execution (sampling period) and generate PWM signals.
        *   **Analog-to-Digital Converters (ADCs):** To read sensor values.
        *   **General Purpose Input/Output (GPIO):** For basic digital signals.
        *   **Interrupts:** Can be used for time-critical tasks like sensor readings or PWM updates.
*   **Example: Controlling a DC Motor Speed using PID**
    1.  **Model:** Get the motor's mechanical (inertia, damping) and electrical (resistance, inductance, back-EMF constants) parameters. Use these to derive a transfer function relating voltage to speed.
    2.  **Control Goal:** Maintain a constant motor speed, even with varying loads.
    3.  **Algorithm:** Implement a discrete-time PID controller.
    4.  **Microcontroller Implementation:**
        *   Read motor speed (e.g., from an encoder) using an ADC or timer input capture.
        *   Calculate the error between desired speed and actual speed.
        *   Apply the PID algorithm to calculate the required control output (e.g., voltage duty cycle).
        *   Generate a PWM signal with the calculated duty cycle to drive the motor.
        *   Repeat periodically using a timer interrupt.
    *   (Histand & Alciatore, Ch 7 - discusses PID control implementation)
    *   (Bolton, Ch 5.3 - discusses microcontroller peripherals like timers and ADCs used in control)

---

### 5. Key Concepts and Definitions Recap

*   **Microcontroller:** CPU, memory, peripherals on a chip for embedded control.
*   **Mechanical System Model:** Mathematical description of a physical mechanical system's behavior.
*   **Mass (m):** Inertia.
*   **Spring (k):** Stiffness.
*   **Damper (b):** Damping coefficient.
*   **Equation of Motion:** Differential equation describing system dynamics (e.g., $m\ddot{x} + b\dot{x} + kx = F(t)$).
*   **System Response:** How a system's output changes over time due to inputs.
*   **Transient Response:** Initial behavior of the system. Includes rise time, settling time, overshoot.
*   **Steady-State Response:** Final behavior of the system.
*   **Damping Ratio ($\zeta$):** Parameter indicating oscillatory behavior of second-order systems.
*   **Transfer Function:** $G(s) = Y(s)/U(s)$ relating Laplace transforms of output and input.
*   **Control Algorithm:** Rules followed by a microcontroller to adjust actuator outputs based on sensor inputs (e.g., PID).
*   **PWM (Pulse Width Modulation):** Technique to generate analog-like output signals using digital pulses.
*   **Sampling Period:** Time interval between consecutive readings of sensor values and updates of actuator commands.

---

### 6. Important Points to Remember

*   **Modeling is the foundation:** Understanding the mechanical system's physics is essential before implementing control on a microcontroller.
*   **Discrete vs. Continuous:** Microcontrollers work with discrete-time signals, so continuous-time models and control laws need to be adapted (discretized) for implementation.
*   **Microcontroller Peripherals are Key:** Timers (for sampling, PWM), ADCs (for sensors), and DACs (for actuators) are critical hardware components that enable microcontroller control.
*   **Trade-offs in Control:** No single controller is perfect. PID parameters need tuning to balance speed, overshoot, and stability.
*   **System Identification:** In practice, getting accurate model parameters (m, b, k, etc.) can be challenging. Techniques called "system identification" are used to estimate these parameters from experimental data. (Histand & Alciatore, Ch 1)
*   **Computational Load:** The complexity of the control algorithm and the required sampling rate determine the necessary processing power of the microcontroller.

---

### 7. Practice Questions

1.  **Question:** A simple mass ($m=1$ kg) is attached to a spring ($k=100$ N/m) and a damper ($b=5$ Ns/m).
    *   a) Write down the equation of motion for this system if a constant force $F(t) = 50$ N is applied.
    *   b) Calculate the damping ratio ($\zeta$) for this system. (Hint: For a system $m\ddot{x} + b\dot{x} + kx = F$, the natural frequency $\omega_n = \sqrt{k/m}$ and damping ratio $\zeta = b/(2\sqrt{mk})$).
    *   c) Based on the damping ratio, describe the expected transient response to a step input.

2.  **Question:** Explain why Pulse Width Modulation (PWM) is a common technique used by microcontrollers to control the speed of a DC motor.

3.  **Question:** A microcontroller is used to control the position of a robotic arm.
    *   a) What type of sensor would likely be used to measure the arm's position? (Refer to CO1).
    *   b) What type of actuator might be used to move the arm? (Refer to CO2).
    *   c) If the control algorithm requires calculating the rate of change of the arm's position error, which component of a PID controller would be responsible for this?

4.  **Question:** What is the primary advantage of using a PI controller over a P controller for a system with a constant external load?

---

### 8. Answers to Practice Questions

1.  **Answer:**
    *   a) The equation of motion is $1\frac{d^2x}{dt^2} + 5\frac{dx}{dt} + 100x = 50$.
    *   b) Natural frequency $\omega_n = \sqrt{100/1} = 10$ rad/s.
        Damping ratio $\zeta = \frac{5}{2\sqrt{1 \times 100}} = \frac{5}{2 \times 10} = \frac{5}{20} = 0.25$.
    *   c) Since $\zeta = 0.25$ (which is between 0 and 1), the system is **underdamped**. This means the arm will likely overshoot its target position and oscillate several times before settling.

2.  **Answer:** DC motors are typically driven by varying voltage. Microcontrollers provide digital outputs (ON/OFF). PWM allows the microcontroller to simulate an analog voltage by rapidly switching the digital output ON and OFF. The *ratio* of ON time to OFF time (duty cycle) determines the average voltage supplied to the motor, thus controlling its speed. A higher duty cycle means a higher average voltage and thus higher speed.

3.  **Answer:**
    *   a) A **rotary encoder** (or potentiometer for simpler systems) would likely be used to measure the arm's angular position.
    *   b) A **DC motor** or a **servo motor** might be used to move the arm.
    *   c) The **Derivative (D) component** of a PID controller is responsible for calculating the rate of change of the error.

4.  **Answer:** The primary advantage of a PI controller over a P controller is its ability to **eliminate steady-state error**. The integral term continuously accumulates the error over time. If a steady-state error exists, this accumulation will continue, and the integral term will keep increasing (or decreasing) the output until the error becomes zero. A P controller alone will have a steady-state error if there is a constant load or disturbance.

---

This concludes the study notes for "Programming of Microcontrollers - Modeling and System Response: Mechanical System Model." Remember to review the relevant chapters in your textbooks for further details and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
