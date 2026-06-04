---
title: "Automatic control systems"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 1: Introduction to Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366ae"
status: "completed"
scrapedAt: "2026-05-23T16:29:09.659Z"
---
# INTRODUCTION TO CONTROL SYSTEMS
## Module 1: Introduction to Control Systems
### Topic: Automatic Control Systems

---

**Course Outcomes Addressed:**

*   **CO1 & CO5:** To represent continuous time systems in the classical domain. (Knowledge Level: K2)
*   **CO2:** Analyse the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions. (Knowledge Level: K2)
*   **CO3:** Analyse dynamics systems for their performance and stability using Root locus. (Knowledge Level: K3)
*   **CO4:** Analyse dynamics systems for their performance and stability in frequency domain. (Knowledge Level: K3)

---

### 1. Introduction to Control Systems

**1.1 What is a Control System?**

A control system is an arrangement of physical components that are interconnected to form a system that can manage, command, direct, or regulate the behavior of other devices or systems. The primary goal is to cause a process or a system to behave in a desired manner.

*   **Key Concept:** The system's output is controlled to achieve a desired output, despite disturbances or changes in the system.

**1.2 Historical Context (Briefly)**

Early control systems were often manual. The development of automatic control systems emerged with the Industrial Revolution and advancements in technology, driven by needs for precision, efficiency, and safety in various applications.

**1.3 Importance of Control Systems**

Control systems are ubiquitous in modern life, playing crucial roles in:

*   **Industrial Automation:** Manufacturing, chemical processes, power generation.
*   **Aerospace:** Aircraft autopilots, missile guidance.
*   **Automotive:** Cruise control, anti-lock braking systems (ABS).
*   **Robotics:** Industrial robots, autonomous vehicles.
*   **Biomedical:** Insulin pumps, pacemakers.
*   **Consumer Electronics:** Thermostats, washing machines.

---

### 2. Automatic Control Systems

**2.1 Definition:**

An automatic control system is a system that operates without continuous human intervention to achieve a desired performance. It uses feedback mechanisms to continuously monitor the system's output and adjust its inputs to maintain the output at a desired level.

*   **Textbook Reference:** Nise, "Control Systems Engineering," Chapter 1 defines control systems and their objective.

**2.2 Components of a Basic Control System:**

A typical automatic control system consists of the following fundamental blocks:

*   **Input/Reference:** The desired output value or signal.
*   **Controller:** The "brain" of the system. It compares the desired output (reference) with the actual output (feedback) and generates a control signal.
*   **Actuator:** A device that converts the control signal from the controller into a physical action (e.g., a motor, a valve, a heater).
*   **Process/Plant:** The system or device being controlled (e.g., an aircraft, a motor, a furnace).
*   **Output:** The actual result of the process.
*   **Sensor/Measuring Device:** Measures the actual output of the process and converts it into a signal that can be used by the controller.
*   **Feedback Path:** The path through which the measured output signal is returned to the controller for comparison with the input.

**2.3 Block Diagram Representation (CO1 & CO5)**

The structure and interconnections of a control system are best represented by a block diagram. Each component is represented by a block, and the signals are represented by arrows.

*   **Key Concept:** Block diagrams simplify the analysis and design of complex control systems. They allow us to visualize the flow of signals and the relationships between different components.

**Example:** Cruise Control System for a Car

*   **Input/Reference:** Desired speed set by the driver.
*   **Controller:** Calculates the difference between the desired speed and the actual speed (error) and generates a throttle signal.
*   **Actuator:** Throttle mechanism (e.g., fuel injection system or electronic throttle body) that adjusts the engine's power.
*   **Process/Plant:** The car itself (engine, drivetrain, wheels).
*   **Output:** Actual speed of the car.
*   **Sensor:** Speedometer that measures the car's speed.
*   **Feedback Path:** The signal from the speedometer is fed back to the controller.

---

### 3. Types of Control Systems

**3.1 Open-Loop Control Systems:**

*   **Definition:** In an open-loop system, the control action is independent of the output. The system operates based on a pre-set input, without any feedback.
*   **Characteristics:**
    *   Simpler to design and less expensive.
    *   Less accurate and susceptible to disturbances.
    *   Performance depends heavily on calibration and system stability.
*   **Block Diagram:**
    ```
    Input --> Controller --> Actuator --> Process --> Output
    ```
*   **Examples:**
    *   **Automatic washing machine:** The cycle runs for a fixed time, regardless of how clean the clothes are.
    *   **Toaster:** The toasting time is set manually, and it doesn't check the toast's brownness.
    *   **Sprinkler system with a timer:** Waters the lawn for a fixed duration at a set time, irrespective of rainfall.
*   **Limitations:** Cannot compensate for external disturbances or variations in the system's characteristics.

**3.2 Closed-Loop (Feedback) Control Systems:**

*   **Definition:** In a closed-loop system, the control action is dependent on the output. The system uses feedback to compare the actual output with the desired output (reference) and adjusts the control signal accordingly.
*   **Characteristics:**
    *   More complex and expensive.
    *   More accurate and robust to disturbances.
    *   Can achieve desired performance even with system variations.
*   **Block Diagram:**
    ```
            +---------+      +---------+      +---------+
    Input -->| Summing |----->|Controller|----->| Actuator|-----> Process ----> Output
             | Junction|      +---------+      +---------+          ^
             +----+----+                                            |
                  |                                                 |
                  | Feedback                                        |
                  |                                                 |
                  +-----------------------------------------------+
                                    Sensor
    ```
    *   **Summing Junction:** Compares the reference input with the feedback signal to generate an error signal ($E(s) = R(s) - B(s)$).
    *   **Error Signal:** The difference between the desired input and the measured output.
*   **Examples:**
    *   **Thermostat controlling room temperature:** Measures room temperature, compares it to the set point, and turns the heater/cooler on or off.
    *   **Cruise control system:** As described above.
    *   **Human body temperature regulation:** The body senses deviations from the normal temperature and initiates mechanisms to correct it.
*   **Advantages:** High accuracy, reduced sensitivity to disturbances, ability to compensate for non-linearities, and improved stability.

**Important Point to Remember:** The defining characteristic of a closed-loop system is the **feedback loop**, which allows for self-correction.

---

### 4. Elements of the Control System (Detailed Look)

**4.1 Controller:**

The controller's role is to process the error signal and generate a control signal to drive the actuator. Common types of controllers include:

*   **On-Off Control:** Simplest form. Activates or deactivates the actuator completely based on whether the error is above or below a threshold. (e.g., simple thermostat). Can lead to oscillations.
*   **Proportional (P) Control:** The control output is proportional to the error signal ($u(t) = K_p e(t)$). Reduces error but may not eliminate it (steady-state error).
*   **Integral (I) Control:** The control output is proportional to the integral of the error signal ($u(t) = K_i \int e(t) dt$). Eliminates steady-state error but can slow down the response and increase oscillations.
*   **Derivative (D) Control:** The control output is proportional to the derivative of the error signal ($u(t) = K_d \frac{de(t)}{dt}$). Anticipates future error based on its rate of change, improving transient response and damping oscillations, but does not affect steady-state error.
*   **PID Control:** Combines P, I, and D control to achieve a balance of fast response, no steady-state error, and good damping. ($u(t) = K_p e(t) + K_i \int e(t) dt + K_d \frac{de(t)}{dt}$)

*   **Textbook Reference:** Nise, Chapters 4 & 5 discuss various controller types and their impact on system performance. Nagrath & Gopal also cover controller design in detail.

**4.2 Actuator:**

The actuator translates the controller's command into a physical action that affects the process.

*   **Examples:** Electric motors, hydraulic cylinders, pneumatic valves, relays, heating elements.
*   **Key Concept:** Actuators are physical devices and often introduce their own dynamic characteristics (e.g., inertia, friction) that need to be considered in the control system design.

**4.3 Process/Plant:**

This is the system or subsystem that is being controlled.

*   **Key Concept:** The dynamic behavior of the process is often described by mathematical models, typically differential equations. The goal of control system design is to manipulate the process's input to achieve a desired output behavior.

**4.4 Sensor:**

Sensors measure the physical output of the process.

*   **Examples:** Thermocouples (temperature), tachometers (speed), pressure sensors, position sensors (encoders, potentiometers).
*   **Key Concept:** Sensors convert physical quantities into electrical signals. They also have their own characteristics like sensitivity, linearity, and response time, which can affect the overall system performance.

---

### 5. Performance Metrics of Control Systems (CO2)

Analyzing the performance of a control system involves understanding how it responds to different inputs, especially standard test signals.

**5.1 Time Domain Analysis:**

This involves observing the system's output as a function of time.

*   **Standard Test Inputs:**
    *   **Step Input:** $u(t) = A u_s(t)$ (sudden change in reference). Represents a sudden change in the desired value.
    *   **Ramp Input:** $u(t) = At u_s(t)$ (constant rate of change). Represents a continuously increasing reference.
    *   **Impulse Input:** $u(t) = A \delta(t)$ (infinite amplitude, zero duration). Used to characterize the system's fundamental response.
    *   **Sinusoidal Input:** $u(t) = A \sin(\omega t)$. Used in frequency domain analysis but its response is also a time-domain characteristic.

*   **Transient Response:** The part of the response that goes from the initial state to the final steady state.
    *   **Delay Time ($t_d$):** Time taken for the response to reach 50% of its final value.
    *   **Rise Time ($t_r$):** Time taken for the response to rise from 10% to 90% of its final value.
    *   **Peak Time ($t_p$):** Time taken for the response to reach its first peak.
    *   **Maximum Overshoot ($M_p$):** The maximum percentage by which the response exceeds the final value. $M_p = \frac{\text{peak value} - \text{final value}}{\text{final value}} \times 100\%$.
    *   **Settling Time ($t_s$):** The time required for the response to stay within a specified tolerance band (e.g., ±2% or ±5%) of the final value.

*   **Steady-State Response:** The behavior of the system after the transient response has died out.
    *   **Steady-State Error ($e_{ss}$):** The difference between the desired value and the actual output as time approaches infinity. Ideally, $e_{ss}$ should be zero for a step input.

*   **Textbook Reference:** Nise, Chapter 2 provides a comprehensive overview of time domain specifications. Nagrath & Gopal also detail time response analysis.

**Example (CO2): Step Response of a Second-Order System**

Consider a standard second-order system with transfer function:
$G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$

where:
*   $\omega_n$ is the natural frequency.
*   $\zeta$ is the damping ratio.

The step response characteristics are directly related to $\zeta$:

*   **$\zeta = 0$ (Undamped):** Oscillates indefinitely.
*   **$0 < \zeta < 1$ (Underdamped):** Oscillates with decreasing amplitude. Exhibits overshoot and ringing.
*   **$\zeta = 1$ (Critically damped):** Fastest response without overshoot.
*   **$\zeta > 1$ (Overdamped):** Slow response, no overshoot.

*   **High $\zeta$:** Long settling time, small overshoot.
*   **Low $\zeta$:** Short settling time, large overshoot.

**5.2 Stability Analysis (CO3 & CO4):**

A system is considered **stable** if its output is bounded for all bounded inputs and disturbances. If the output grows without bound, the system is **unstable**.

*   **Key Concept:** Stability is a fundamental requirement for any control system. An unstable system is not only useless but can also be dangerous.
*   **Roots of the Characteristic Equation:** For a linear time-invariant (LTI) system, stability is determined by the location of the roots of the characteristic equation (the denominator of the closed-loop transfer function) in the s-plane.
    *   **Stable:** All roots have negative real parts (lie in the left half of the s-plane).
    *   **Unstable:** At least one root has a positive real part (lies in the right half of the s-plane).
    *   **Marginally Stable:** Roots on the imaginary axis (and no roots in the RHP). The system oscillates indefinitely or grows linearly.

---

### 6. Representing Systems in the Classical Domain (CO1 & CO5)

The classical domain refers to the methods used to analyze and design control systems using techniques like Laplace transforms and transfer functions.

**6.1 Mathematical Modeling:**

The first step in control system design is to develop a mathematical model of the system (plant, actuators, sensors).

*   **Differential Equations:** Many physical systems are described by differential equations.
    *   **Example:** A simple mass-spring-damper system.
        $m \frac{d^2x}{dt^2} + c \frac{dx}{dt} + kx = f(t)$

*   **Laplace Transform:** A powerful mathematical tool used to convert differential equations in the time domain to algebraic equations in the complex frequency domain (s-domain).
    *   $\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty f(t) e^{-st} dt$
    *   $\mathcal{L}\{\frac{df}{dt}\} = sF(s) - f(0)$
    *   $\mathcal{L}\{\frac{d^2f}{dt^2}\} = s^2F(s) - sf(0) - f'(0)$

**6.2 Transfer Function ($G(s)$):**

*   **Definition:** The transfer function of a linear, time-invariant (LTI) system is defined as the ratio of the Laplace transform of the output to the Laplace transform of the input, with all initial conditions assumed to be zero.
    $G(s) = \frac{Y(s)}{U(s)}$
    where $Y(s)$ is the Laplace transform of the output $y(t)$, and $U(s)$ is the Laplace transform of the input $u(t)$.

*   **Importance:**
    *   Represents the dynamic behavior of the system independent of the input.
    *   Allows for algebraic manipulation of system components (series, parallel, feedback).
    *   Foundation for stability and performance analysis.

*   **Textbook Reference:** Nise, Chapter 2 provides the definition and properties of transfer functions. Nagrath & Gopal also dedicate a chapter to modeling and transfer functions.

**6.3 Block Diagram Algebra:**

*   **Cascaded Systems (Series):** If two systems with transfer functions $G_1(s)$ and $G_2(s)$ are connected in series, the overall transfer function is $G_{total}(s) = G_1(s) G_2(s)$.
*   **Parallel Systems:** If two systems are connected in parallel, the overall transfer function is the sum of individual transfer functions: $G_{total}(s) = G_1(s) + G_2(s)$.
*   **Feedback Systems:** For a standard negative feedback loop with a forward path transfer function $G(s)$ and a feedback path transfer function $H(s)$, the closed-loop transfer function is:
    $T(s) = \frac{G(s)}{1 + G(s)H(s)}$

    *   **Characteristic Equation:** The denominator of the closed-loop transfer function, $1 + G(s)H(s) = 0$, is crucial for stability analysis.

**Example (CO1/CO5): Modeling a Motor Control System**

Consider a DC motor controlled by an armature voltage, driving a load. The motor dynamics can be represented by a transfer function relating angular velocity ($\omega(s)$) to armature voltage ($V_a(s)$).

A simplified model might yield:
$G_m(s) = \frac{\omega(s)}{V_a(s)} = \frac{K}{(Js+b)(Rs+R_{amp})}$  (This is a simplified example, actual models can be more complex)

If this motor is part of a speed control system with a sensor and controller, their transfer functions would be combined using block diagram algebra to find the closed-loop transfer function.

---

### 7. Stability Analysis Techniques (CO3 & CO4)

**7.1 Routh-Hurwitz Stability Criterion (CO3):**

*   **Concept:** A purely algebraic method to determine the number of roots of the characteristic equation that lie in the right half of the s-plane without actually calculating the roots.
*   **Procedure:**
    1.  Form the characteristic equation: $a_n s^n + a_{n-1} s^{n-1} + \dots + a_1 s + a_0 = 0$.
    2.  Construct the Routh array.
    3.  **Conditions for Stability:**
        *   All coefficients ($a_i$) must be present and have the same sign (necessary but not sufficient).
        *   All elements in the first column of the Routh array must be positive (for a stable system).
*   **Special Cases:** Zero in the first column, a row of zeros.
*   **Limitations:** Does not provide information about the *location* of the roots, only whether they are in the RHP.

*   **Textbook Reference:** Nise, Chapter 6 details the Routh-Hurwitz criterion. Nagrath & Gopal also cover this extensively.

**7.2 Root Locus Method (CO3):**

*   **Concept:** A graphical method that shows how the poles of the closed-loop system change as a system parameter (usually gain $K$) is varied from zero to infinity.
*   **Purpose:**
    *   Visualize the effect of gain on system stability.
    *   Determine the gain $K$ for desired transient response characteristics (e.g., desired damping ratio or settling time).
    *   Understand how system poles move and potentially cross the jω-axis (indicating instability).
*   **Key Concepts:**
    *   **Poles:** Roots of the denominator of the open-loop transfer function.
    *   **Zeros:** Roots of the numerator of the open-loop transfer function.
    *   **Characteristic Equation:** $1 + K G(s) H(s) = 0$
    *   **Rules for Sketching:** Specific rules are used to plot the locus of roots as $K$ varies.
*   **Analysis:** By examining the root locus, one can determine the range of $K$ for which the system is stable and identify the gain that yields the desired performance.

*   **Textbook Reference:** Nise, Chapter 7 is dedicated to Root Locus techniques.

**7.3 Frequency Domain Analysis (CO4):**

This approach analyzes the system's response to sinusoidal inputs of varying frequencies.

*   **Nyquist Stability Criterion:**
    *   **Concept:** Relates the stability of a closed-loop system to the properties of the open-loop transfer function plotted on a polar plot (Nyquist plot).
    *   **Procedure:** Plots the open-loop frequency response $G(j\omega)H(j\omega)$ in the complex plane as $\omega$ varies from $-\infty$ to $+\infty$.
    *   **Stability Condition:** Based on the number of encirclements of the point $(-1, 0)$ by the Nyquist plot.
    *   **Advantage:** Can be applied to systems with time delays and is not limited to strictly proper transfer functions.

*   **Bode Plots:**
    *   **Concept:** A graphical representation of the frequency response of a system, consisting of two plots:
        1.  **Magnitude Plot:** Logarithm of the magnitude $|G(j\omega)H(j\omega)|$ (in dB) versus frequency $\omega$ (on a log scale).
        2.  **Phase Plot:** Phase angle $\angle G(j\omega)H(j\omega)$ (in degrees) versus frequency $\omega$ (on a log scale).
    *   **Advantages:** Easy to construct for rational transfer functions using asymptotic approximations. Provides insights into **gain margin** and **phase margin**, which are indicators of relative stability.
    *   **Gain Margin (GM):** The factor by which the gain can be increased before the system becomes unstable. Measured at the phase crossover frequency (where phase is -180°).
    *   **Phase Margin (PM):** The amount of additional phase lag required to bring the system to the brink of instability. Measured at the gain crossover frequency (where magnitude is 0 dB or 1).
    *   **Stability Conclusion from Bode:**
        *   If both GM and PM are positive, the system is generally stable.
        *   A positive PM indicates good damping and transient response.

*   **Nichols Plots:**
    *   **Concept:** A plot of magnitude (in dB) versus phase angle (in degrees). It combines magnitude and phase information in a single plot.
    *   **Advantages:** Can be used to directly determine the closed-loop frequency response and stability margins.

*   **Textbook Reference:** Nise, Chapter 8 covers Frequency Response techniques (Bode, Nyquist). Nagrath & Gopal also provide thorough coverage of these methods.

---

### 8. Practice Questions

**Question 1 (CO1, CO5):**
Draw the block diagram of a closed-loop control system and identify its main components.

**Answer:**
(Refer to Section 2.2 and 2.3 in these notes for the block diagram and component identification.)

**Question 2 (CO1, CO5):**
For a unity feedback system, the open-loop transfer function is $G(s) = \frac{K}{s(s+2)}$. Determine the closed-loop transfer function.

**Answer:**
The closed-loop transfer function for a unity feedback system is $T(s) = \frac{G(s)}{1 + G(s)}$.
$T(s) = \frac{\frac{K}{s(s+2)}}{1 + \frac{K}{s(s+2)}} = \frac{K}{s(s+2) + K} = \frac{K}{s^2 + 2s + K}$

**Question 3 (CO2):**
A second-order system has a step response with the following characteristics:
*   Rise time ($t_r$) = 0.5 seconds
*   Settling time ($t_s$) = 2 seconds (using 2% criterion)
*   Maximum overshoot ($M_p$) = 5%

Estimate the damping ratio ($\zeta$) and natural frequency ($\omega_n$) of the system.

**Answer:**
From the formula relating $t_s$ and $\zeta\omega_n$: $t_s \approx \frac{4}{\zeta\omega_n}$ (for 2% criterion)
$2 \approx \frac{4}{\zeta\omega_n} \implies \zeta\omega_n \approx 2$

From the formula relating $t_r$ and $\zeta\omega_n$: $t_r = \frac{\pi - \arccos(\zeta)}{\omega_n\sqrt{1-\zeta^2}}$
Also, the peak time is $t_p = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}}$.
Maximum overshoot $M_p = e^{-\frac{\pi \zeta}{\sqrt{1-\zeta^2}}}$
$0.05 = e^{-\frac{\pi \zeta}{\sqrt{1-\zeta^2}}}$
$\ln(0.05) = -\frac{\pi \zeta}{\sqrt{1-\zeta^2}}$
$-2.9957 \approx -\frac{\pi \zeta}{\sqrt{1-\zeta^2}}$
$2.9957 \approx \frac{\pi \zeta}{\sqrt{1-\zeta^2}}$
Squaring both sides: $8.974 \approx \frac{\pi^2 \zeta^2}{1-\zeta^2}$
$8.974 (1-\zeta^2) \approx 9.87 \zeta^2$
$8.974 - 8.974 \zeta^2 \approx 9.87 \zeta^2$
$8.974 \approx 18.844 \zeta^2$
$\zeta^2 \approx \frac{8.974}{18.844} \approx 0.476$
$\zeta \approx \sqrt{0.476} \approx 0.69$

Now, using $\zeta\omega_n \approx 2$:
$0.69 \omega_n \approx 2$
$\omega_n \approx \frac{2}{0.69} \approx 2.9$ rad/s

Therefore, $\zeta \approx 0.69$ and $\omega_n \approx 2.9$ rad/s.

**Question 4 (CO3):**
The characteristic equation of a closed-loop system is $s^3 + 2s^2 + 4s + 8 = 0$.
Use the Routh-Hurwitz criterion to determine if the system is stable.

**Answer:**
The characteristic equation is $a_3 s^3 + a_2 s^2 + a_1 s + a_0 = 0$, where $a_3=1, a_2=2, a_1=4, a_0=8$.
All coefficients are positive, so it's necessary to construct the Routh array.

| Row | $s^3$ | $a_3=1$ | $a_1=4$ |
|---|---|---|---|
| $s^2$ | $a_2=2$ | $a_0=8$ | 0 |
| $s^1$ | $b_1$ | $b_2$ | 0 |
| $s^0$ | $c_1$ | 0 | 0 |

Calculate $b_1$:
$b_1 = \frac{a_2 a_1 - a_3 a_0}{a_2} = \frac{(2)(4) - (1)(8)}{2} = \frac{8 - 8}{2} = 0$

Since we have a zero in the $s^1$ row, we need to replace it with a small positive number $\epsilon$ or use the auxiliary polynomial. Let's use $\epsilon$:

| Row | $s^3$ | $1$ | $4$ |
|---|---|---|---|
| $s^2$ | $2$ | $8$ | $0$ |
| $s^1$ | $\epsilon$ | $0$ | $0$ |
| $s^0$ | $c_1$ | $0$ | $0$ |

Calculate $c_1$:
$c_1 = \frac{\epsilon(8) - (2)(0)}{\epsilon} = \frac{8\epsilon}{\epsilon} = 8$

The first column is: $1, 2, \epsilon, 8$.
For stability, all elements in the first column must be positive. As $\epsilon \to 0^+$, all elements are positive.

Alternatively, if there's a zero in the first column, we form an auxiliary polynomial from the row above it ($s^2$ row):
Auxiliary Polynomial: $A(s) = 2s^2 + 8 = 0$
Roots of the auxiliary polynomial are $2s^2 = -8 \implies s^2 = -4 \implies s = \pm j2$.
These are roots on the imaginary axis, indicating marginal stability.

The Routh array with $\epsilon$ indicates that as $\epsilon \to 0^+$, all elements remain positive. However, the zero in the $s^1$ row signals roots on the jω-axis. The auxiliary polynomial method confirms this.

**Conclusion:** The system is **marginally stable** because it has poles on the imaginary axis ($s = \pm j2$). It is not strictly stable.

**Question 5 (CO4):**
For a system with open-loop transfer function $G(j\omega) = \frac{10}{j\omega(j\omega+1)}$. Sketch a Bode plot and comment on the stability if it's in a unity feedback loop.

**Answer:**
**Bode Plot Sketch (Conceptual):**

*   **Low Frequencies ($\omega \ll 1$):**
    *   Magnitude: $\frac{10}{\omega}$ (decreases at -20 dB/decade due to $1/\omega$, plus a constant 10 for the numerator, which starts at +20dB at 1 rad/s). So, starts at +20dB at $\omega=1$ and rolls off.
    *   Phase: $-90^\circ$ (due to $1/j\omega$).

*   **Corner Frequency at $\omega = 1$ rad/s:** Due to $(j\omega+1)$.
    *   Magnitude: Will transition from -20 dB/decade to -40 dB/decade after $\omega=1$.
    *   Phase: Will transition from $-90^\circ$ towards $-180^\circ$. At $\omega=1$, phase is $-90^\circ - 45^\circ = -135^\circ$.

*   **Gain Crossover Frequency ($\omega_{gc}$):** The frequency where magnitude is 0 dB.
    $|\frac{10}{j\omega(j\omega+1)}| = 1$
    $\frac{10}{\omega\sqrt{1+\omega^2}} = 1$
    $100 = \omega^2(1+\omega^2)$
    Let $x = \omega^2$: $100 = x(1+x) = x + x^2$
    $x^2 + x - 100 = 0$
    $x = \frac{-1 \pm \sqrt{1 - 4(1)(-100)}}{2} = \frac{-1 \pm \sqrt{401}}{2}$
    Since $x = \omega^2 > 0$, $x = \frac{-1 + \sqrt{401}}{2} \approx \frac{-1 + 20.02}{2} \approx 9.51$
    $\omega_{gc} = \sqrt{9.51} \approx 3.08$ rad/s.

*   **Phase Crossover Frequency ($\omega_{pc}$):** The frequency where phase is $-180^\circ$.
    Phase = $-90^\circ - \arctan(\omega)$.
    We need $-90^\circ - \arctan(\omega) = -180^\circ$
    $\arctan(\omega) = 90^\circ$
    This occurs as $\omega \to \infty$.

**Stability Comment (Unity Feedback):**

*   **Phase Margin (PM):** At the gain crossover frequency ($\omega_{gc} \approx 3.08$ rad/s), the phase is:
    Phase = $-90^\circ - \arctan(3.08) \approx -90^\circ - 72.0^\circ = -162^\circ$.
    PM = $180^\circ - |-162^\circ| = 180^\circ - 162^\circ = 18^\circ$.
    Since the phase margin is positive ($18^\circ$), the system is stable. A positive phase margin indicates a well-damped response.

*   **Gain Margin (GM):** The phase crossover frequency is at infinity, where the magnitude is 0. The GM is effectively infinite (or very large) in this case because the phase never reaches $-180^\circ$ for finite frequencies.

**Conclusion:** The system is stable in unity feedback with a phase margin of $18^\circ$.

---

### 9. Important Points to Remember

*   **Control System Objective:** To regulate the output of a system to a desired value, minimizing errors and disturbances.
*   **Open-Loop vs. Closed-Loop:** Closed-loop systems use feedback for accuracy and robustness; open-loop systems do not.
*   **Transfer Function:** A powerful tool to model LTI systems in the s-domain, allowing algebraic analysis.
*   **Characteristic Equation:** $1 + G(s)H(s) = 0$ is crucial for stability analysis.
*   **Stability:** Determined by the location of the closed-loop poles. All poles must be in the Left Half of the s-plane for stability.
*   **Time Domain Specs:** Rise time, settling time, peak time, and overshoot characterize the transient response.
*   **Frequency Domain Specs:** Gain margin and phase margin indicate relative stability and are key for robust design.
*   **Routh-Hurwitz:** Algebraic test for stability.
*   **Root Locus:** Graphical method to visualize how poles move with gain variation.
*   **Bode Plots:** Provide gain and phase margins, indicating relative stability and facilitating controller design.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
