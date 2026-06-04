---
title: "Transfer function and frequency response"
subject: "MECHATRONIC SYSTEMS"
module: "Module 3: Microprocessors and microcontrollers: Digital circuits"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36baf"
status: "completed"
scrapedAt: "2026-05-23T16:42:46.458Z"
---
# MECHATRONIC SYSTEMS - Module 3: Microprocessors and Microcontrollers: Digital Circuits

## Topic: Transfer Function and Frequency Response

This module delves into the fundamental concepts of system modeling, specifically focusing on how mechatronic systems respond to different inputs over time and at various frequencies. Understanding the transfer function and frequency response is crucial for analyzing, designing, and controlling these complex systems.

---

### **1. Introduction to System Modeling**

*   **What is System Modeling?**
    *   Creating a mathematical representation of a physical system to predict its behavior.
    *   Essential for understanding system dynamics, designing controllers, and simulating performance.
    *   (Bolton, 4th Ed., Chapter 5: System Modelling)
*   **Why is Modeling Important in Mechatronics?**
    *   Mechatronic systems integrate mechanical, electrical, electronic, and software components.
    *   Modeling helps in understanding the interplay between these domains.
    *   Facilitates controller design for achieving desired performance (e.g., speed, accuracy, stability).
    *   (Histand & Alciatore, 2003, Chapter 3: System Modeling)
    *   Crucial for achieving Course Outcome CO4: Analyze the models and responses of different systems (Knowledge Level: K3).

---

### **2. The Transfer Function**

*   **Definition:**
    *   The transfer function, denoted as $G(s)$, of a Linear Time-Invariant (LTI) system is the ratio of the Laplace transform of the output signal to the Laplace transform of the input signal, assuming zero initial conditions.
    *   $G(s) = \frac{Y(s)}{U(s)}$
        *   Where $Y(s)$ is the Laplace transform of the output signal $y(t)$.
        *   And $U(s)$ is the Laplace transform of the input signal $u(t)$.
    *   (Bolton, 4th Ed., Chapter 5: System Modelling - Transfer Functions)
*   **Laplace Transform:**
    *   A mathematical tool used to convert differential equations (which describe system dynamics) into algebraic equations, making them easier to manipulate.
    *   Key properties: Linearity, time-shifting, differentiation, integration.
    *   (Histand & Alciatore, 2003, Chapter 3: System Modeling - Laplace Transforms)
*   **Why use the Laplace Domain?**
    *   Transforms complex differential equations into simpler algebraic equations.
    *   Allows for the analysis of transient (time-domain) and steady-state (frequency-domain) responses.
    *   Enables the use of powerful analytical tools for stability and performance analysis.
*   **Deriving Transfer Functions:**
    *   **Steps:**
        1.  Write the differential equation governing the system.
        2.  Take the Laplace transform of the differential equation, assuming zero initial conditions.
        3.  Rearrange the transformed equation to solve for the ratio of the output's Laplace transform to the input's Laplace transform.
    *   **Examples:**
        *   **First-Order System (e.g., RC Circuit):**
            *   Differential Equation: $RC \frac{dv_o(t)}{dt} + v_o(t) = v_i(t)$
            *   Laplace Transform: $RCsV_o(s) + V_o(s) = V_i(s)$
            *   Transfer Function: $G(s) = \frac{V_o(s)}{V_i(s)} = \frac{1}{RCs + 1}$
            *   (Bolton, 4th Ed., Chapter 5: Examples of Transfer Functions)
        *   **Second-Order System (e.g., Mass-Spring-Damper System):**
            *   Differential Equation: $m\frac{d^2x(t)}{dt^2} + c\frac{dx(t)}{dt} + kx(t) = F(t)$
            *   Laplace Transform: $ms^2X(s) + c sX(s) + kX(s) = F(s)$
            *   Transfer Function: $G(s) = \frac{X(s)}{F(s)} = \frac{1}{ms^2 + cs + k}$
            *   (Histand & Alciatore, 2003, Chapter 3: Second-Order Systems)
        *   **Microcontroller Context (CO3):**
            *   A microcontroller can be seen as a part of a larger mechatronic system. Its output (e.g., a PWM signal) acts as an input to another component (e.g., a motor driver). The transfer function of the microcontroller's output stage, combined with the actuator, defines a portion of the overall system.
            *   (Shetty & Kolk, 2010, Chapter 7: System Components - Microcontrollers as System Elements)

---

### **3. Poles and Zeros**

*   **Definition of Poles:**
    *   The roots of the denominator polynomial of the transfer function.
    *   $G(s) = \frac{N(s)}{D(s)}$, poles are the values of $s$ where $D(s) = 0$.
    *   Poles determine the system's stability and the nature of its transient response (e.g., oscillatory, exponential decay).
*   **Definition of Zeros:**
    *   The roots of the numerator polynomial of the transfer function.
    *   Zeros are the values of $s$ where $N(s) = 0$.
    *   Zeros influence the shape of the transient response and the system's gain at specific frequencies.
*   **Pole-Zero Plot:**
    *   A graphical representation of the poles (marked with 'x') and zeros (marked with 'o') in the complex s-plane.
    *   Crucial for visualizing system behavior.
    *   **Stability:** A system is stable if all its poles lie in the left half of the s-plane (i.e., have negative real parts).
    *   (Bolton, 4th Ed., Chapter 5: Pole-Zero Analysis)
    *   (Histand & Alciatore, 2003, Chapter 3: Pole and Zero Locations)
*   **Example:**
    *   For $G(s) = \frac{s+1}{s^2 + 3s + 2}$,
        *   Zeros: $s = -1$
        *   Poles: $s^2 + 3s + 2 = (s+1)(s+2) = 0 \implies s = -1, s = -2$.
    *   **Interpretation:** This system has a zero at $s=-1$ and poles at $s=-1$ and $s=-2$. Since all poles have negative real parts, the system is stable. The repeated pole at $s=-1$ indicates a potentially slower response compared to distinct poles.

---

### **4. Frequency Response**

*   **Definition:**
    *   The frequency response describes how a system's output amplitude and phase vary as the frequency of a sinusoidal input signal changes.
    *   It is obtained by substituting $s = j\omega$ into the transfer function, where $\omega$ is the angular frequency (radians/second) and $j$ is the imaginary unit ($\sqrt{-1}$).
    *   $G(j\omega) = |G(j\omega)| e^{j\angle G(j\omega)}$
        *   $|G(j\omega)|$ is the **magnitude response** (gain) at frequency $\omega$.
        *   $\angle G(j\omega)$ is the **phase response** (phase shift) at frequency $\omega$.
    *   (Bolton, 4th Ed., Chapter 13: Frequency Response)
    *   (Histand & Alciatore, 2003, Chapter 7: Frequency Response)
*   **Key Concepts:**
    *   **Gain:** The ratio of the output amplitude to the input amplitude. A gain of 1 means the output amplitude is the same as the input. A gain of 0.5 means the output amplitude is half the input amplitude.
    *   **Phase Shift:** The difference in phase between the output and input sinusoidal signals. Can be leading (positive angle) or lagging (negative angle).
*   **Bode Plots:**
    *   **What are they?** Graphical representations of the frequency response.
        *   **Magnitude Plot:** Plots $|G(j\omega)|$ (usually in decibels, $20 \log_{10} |G(j\omega)|$) against frequency $\omega$ (on a logarithmic scale).
        *   **Phase Plot:** Plots $\angle G(j\omega)$ (in degrees or radians) against frequency $\omega$ (on a logarithmic scale).
    *   **Why use them?**
        *   Provide a quick and intuitive understanding of system behavior across a wide range of frequencies.
        *   Useful for analyzing system stability, bandwidth, and resonance.
        *   Facilitate controller design by allowing for graphical manipulation of system characteristics.
    *   (Bolton, 4th Ed., Chapter 13: Bode Diagrams)
    *   (Histand & Alciatore, 2003, Chapter 7: Bode Plots)
    *   (Bishop, 2017, Chapter 6: Frequency Domain Analysis)
*   **Example (RC Circuit):**
    *   $G(s) = \frac{1}{RCs + 1}$
    *   Substitute $s = j\omega$: $G(j\omega) = \frac{1}{j\omega RC + 1}$
    *   **Magnitude:**
        *   $|G(j\omega)| = \left|\frac{1}{1 + j\omega RC}\right| = \frac{1}{\sqrt{1^2 + (\omega RC)^2}} = \frac{1}{\sqrt{1 + (\omega/\omega_c)^2}}$
        *   Where $\omega_c = \frac{1}{RC}$ is the **corner frequency** (or cut-off frequency for a low-pass filter).
    *   **Phase:**
        *   $\angle G(j\omega) = \angle \left(\frac{1}{1 + j\omega RC}\right) = -\arctan(\omega RC) = -\arctan(\omega/\omega_c)$
    *   **Bode Plot Interpretation:**
        *   **Magnitude:** At low frequencies ($\omega \ll \omega_c$), gain is approximately 1 (0 dB). At high frequencies ($\omega \gg \omega_c$), gain decreases at a rate of -20 dB per decade. At $\omega = \omega_c$, the gain is $1/\sqrt{2}$ or approximately -3 dB.
        *   **Phase:** At low frequencies, phase shift is 0 degrees. At high frequencies, phase shift approaches -90 degrees. At $\omega = \omega_c$, the phase shift is -45 degrees.
    *   This example demonstrates a **low-pass filter** characteristic, which is common in signal conditioning for mechatronic systems (CO2).
    *   (Bolton, 4th Ed., Chapter 13: Low-Pass Filter Example)

---

### **5. Types of Frequency Responses and System Behavior**

*   **Low-Pass Filter:** Allows low frequencies to pass through with minimal attenuation while attenuating high frequencies. (e.g., RC circuit, smoothing sensor noise).
    *   (Bolton, 4th Ed., Chapter 13)
    *   (Histand & Alciatore, 2003, Chapter 7)
*   **High-Pass Filter:** Allows high frequencies to pass through while attenuating low frequencies. (e.g., blocking DC offset from a sensor).
    *   (Bolton, 4th Ed., Chapter 13)
*   **Band-Pass Filter:** Allows a specific range of frequencies to pass through while attenuating frequencies outside this range. (e.g., tuning to a specific sensor's operating frequency).
    *   (Histand & Alciatore, 2003, Chapter 7)
*   **Band-Stop Filter (Notch Filter):** Attenuates a specific band of frequencies while allowing others to pass. (e.g., removing unwanted vibration frequencies).
    *   (Histand & Alciatore, 2003, Chapter 7)
*   **Resonance:** For second-order systems, if the damping is low, the system can exhibit resonance, where the output amplitude becomes very large at a specific frequency (the resonant frequency). This can be undesirable and lead to system instability or damage.
    *   (Histand & Alciatore, 2003, Chapter 3: Second-Order Systems - Resonance)
    *   (Merzouki et al., 2003, Chapter 4: System Dynamics and Resonance)

---

### **6. Transfer Functions in Mechatronic Systems**

*   **Sensors (CO1):**
    *   A sensor converts a physical quantity into an electrical signal. Its internal dynamics can be described by a transfer function. For example, the thermal lag of a thermocouple can be modeled as a first-order system.
    *   (Bolton, 4th Ed., Chapter 4: Sensors)
*   **Actuators (CO2):**
    *   Actuators convert electrical signals into mechanical motion or force. Their response characteristics (e.g., motor speed vs. voltage, valve opening vs. pressure) can often be modeled using transfer functions.
    *   **DC Motor Example:** A DC motor's speed can be approximated by a first-order transfer function relating applied voltage to output speed, especially for simpler models.
        *   $G(s) = \frac{\Omega(s)}{V_a(s)} = \frac{K}{(Js+b)(Ls+R) + K_e K_t}$ (Simplified for analysis, often approximated as a first-order system for control design)
        *   (Histand & Alciatore, 2003, Chapter 5: Electric Motors - Modeling)
        *   (Bolton, 4th Ed., Chapter 6: Actuators)
*   **Microcontrollers (CO3):**
    *   While microcontrollers themselves are digital, their interaction with the physical world through Digital-to-Analog Converters (DACs), Analog-to-Digital Converters (ADCs), and Pulse Width Modulation (PWM) can be integrated into system transfer function models.
    *   For instance, a PWM output to a motor driver has a transfer characteristic that needs to be considered.
    *   (Shetty & Kolk, 2010, Chapter 7: System Components - Microcontrollers as System Elements)
*   **System Integration:**
    *   The overall transfer function of a mechatronic system is formed by cascading the transfer functions of its individual components (sensor, controller, actuator, mechanical load).
    *   $G_{total}(s) = G_{sensor}(s) \times G_{controller}(s) \times G_{actuator}(s) \times G_{load}(s)$
    *   Understanding the frequency response of the overall system is crucial for designing effective controllers (CO4).
    *   (Merzouki et al., 2003, Chapter 4: System Decomposition and Cascade Connection)

---

### **7. Importance for Control Design**

*   **Stability Analysis:** Bode plots (and other frequency-domain tools like Nyquist plots) provide direct measures of stability margins (gain margin and phase margin).
    *   (Bolton, 4th Ed., Chapter 13: Stability Analysis using Bode Plots)
    *   (Histand & Alciatore, 2003, Chapter 7: Stability Criteria)
*   **Controller Tuning:** Understanding the frequency response of the plant (the system to be controlled) helps in designing appropriate controllers (like PID controllers).
    *   For example, to reject high-frequency noise from a sensor, a low-pass filter characteristic is needed. If the system is too sluggish at low frequencies, a proportional controller might be needed.
    *   (Bolton, 4th Ed., Chapter 14: Control System Design - PID Control)
*   **Bandwidth:** The bandwidth of a system (often related to the cut-off frequency of its frequency response) indicates the range of frequencies the system can effectively respond to. A higher bandwidth generally means a faster response.
    *   (Histand & Alciatore, 2003, Chapter 7: Bandwidth)

---

### **Important Points to Remember**

*   The **transfer function** is a fundamental tool for modeling LTI systems in the Laplace domain.
*   **Poles** dictate system stability and transient response characteristics.
*   **Zeros** influence the shape of the transient response and system gain.
*   **Frequency response** describes how a system reacts to sinusoidal inputs of varying frequencies.
*   **Bode plots** are essential for visualizing frequency response and analyzing system behavior (gain, phase, bandwidth, stability).
*   Transfer functions and frequency response analysis are critical for **selecting components** (sensors, actuators) and **designing controllers** in mechatronic systems.
*   Understanding these concepts is key for **CO4: Analyze the models and responses of different systems**.

---

### **Practice Questions**

**Question 1:**
A simple mechatronic system, like a motor speed controller, can often be approximated by a first-order system. If the transfer function is given by $G(s) = \frac{10}{0.5s + 1}$, where the input is the control voltage and the output is the motor speed in RPM, what is the corner frequency of this system? What does this corner frequency represent in terms of the system's response?

**Question 2:**
Consider a second-order system with the transfer function $G(s) = \frac{25}{s^2 + 5s + 25}$.
a) What are the poles of this system?
b) Is the system stable? Justify your answer.
c) If a sinusoidal input $u(t) = \sin(5t)$ is applied, what will be the steady-state output? (Hint: Substitute $s = j5$ into $G(s)$).

**Question 3:**
Describe how the frequency response of a sensor is important for its application in a mechatronic system. Provide an example related to signal conditioning. (Relates to CO1 and CO2).

**Question 4:**
Explain the significance of poles and zeros in the context of mechatronic system design and control. How do they help in analyzing system behavior? (Relates to CO4).

---

### **Answers to Practice Questions**

**Answer 1:**
The transfer function is in the form $G(s) = \frac{K}{\tau s + 1}$, where $\tau$ is the time constant.
In this case, $G(s) = \frac{10}{0.5s + 1}$. So, the time constant $\tau = 0.5$ seconds.
The corner frequency is given by $\omega_c = \frac{1}{\tau}$.
$\omega_c = \frac{1}{0.5} = 2$ radians per second.
The corner frequency represents the frequency at which the magnitude of the system's response drops to approximately 70.7% of its low-frequency value (or -3 dB). It signifies the system's bandwidth and gives an indication of how fast the system can respond to changes in its input.

**Answer 2:**
a) To find the poles, we set the denominator to zero: $s^2 + 5s + 25 = 0$.
Using the quadratic formula $s = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$s = \frac{-5 \pm \sqrt{5^2 - 4(1)(25)}}{2(1)}$
$s = \frac{-5 \pm \sqrt{25 - 100}}{2}$
$s = \frac{-5 \pm \sqrt{-75}}{2}$
$s = \frac{-5 \pm j\sqrt{75}}{2}$
$s = \frac{-5 \pm j5\sqrt{3}}{2}$
The poles are $s_1 = -2.5 + j\frac{5\sqrt{3}}{2}$ and $s_2 = -2.5 - j\frac{5\sqrt{3}}{2}$.

b) Yes, the system is stable. Both poles have negative real parts (-2.5). For a system to be stable, all its poles must lie in the left half of the s-plane.

c) We need to evaluate $G(j\omega)$ at $\omega = 5$.
$G(j5) = \frac{25}{(j5)^2 + 5(j5) + 25}$
$G(j5) = \frac{25}{-25 + j25 + 25}$
$G(j5) = \frac{25}{j25}$
$G(j5) = \frac{1}{j} = -j$
The steady-state output will have a magnitude of $|G(j5)| = |-j| = 1$.
The phase shift is $\angle G(j5) = \angle(-j) = -90^\circ$ or $-\frac{\pi}{2}$ radians.
Since the input was $u(t) = \sin(5t)$, the steady-state output $y(t)$ will be $1 \cdot \sin(5t - \frac{\pi}{2}) = -\cos(5t)$.

**Answer 3:**
The frequency response of a sensor is crucial because it defines how accurately and quickly it can measure changes in the physical phenomenon it's sensing.
*   **Bandwidth:** A sensor with a wider bandwidth can track faster changes. For example, if a mechatronic system involves rapid vibrations, a sensor with a limited bandwidth might not be able to accurately capture these high-frequency signals.
*   **Filtering Characteristics:** Many sensors exhibit low-pass or high-pass characteristics due to their inherent physical properties (e.g., inertia, thermal mass, capacitance). Understanding this helps in signal conditioning. For example, a temperature sensor might have a thermal lag, acting as a low-pass filter. If the temperature fluctuates rapidly, this lag will smooth out the variations, making it difficult to detect fast changes. To mitigate this, if the system requires fast temperature readings, a sensor with a faster response (higher corner frequency) would be chosen, or appropriate filtering might be applied in the signal conditioning stage to try and "undo" some of the sensor's filtering effect. This relates to **CO1** (sensors) and **CO2** (signal conditioning).

**Answer 4:**
Poles and zeros are critical to understanding the behavior of mechatronic systems as they directly influence the system's response to inputs.
*   **Poles:** Located in the denominator of the transfer function.
    *   **Stability:** If all poles have negative real parts, the system is stable. Poles on the imaginary axis or in the right-half plane indicate instability. This is vital for ensuring a mechatronic system operates safely and predictably.
    *   **Transient Response:** The location of poles determines how the system settles after a disturbance or input change. Poles further to the left in the s-plane generally lead to faster responses, while poles closer to the imaginary axis lead to slower responses. Repeated poles can also affect the response (e.g., overshoot).
*   **Zeros:** Located in the numerator of the transfer function.
    *   **Response Shaping:** Zeros can affect the speed of the response and can introduce or cancel oscillations. They can also lead to initial overshoots or undershoots in the response.
    *   **Gain at Specific Frequencies:** Zeros can influence the gain of the system at certain frequencies.
By analyzing the pole-zero configuration, engineers can predict how a system will behave under various conditions, such as how quickly a robot arm will reach its target position or how a sensor's output will change with varying input frequencies. This understanding is fundamental for **CO4: Analyze the models and responses of different systems** and is crucial for designing effective controllers and selecting appropriate components.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
