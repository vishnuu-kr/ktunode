---
title: "Digital Controllers"
subject: "MECHATRONIC SYSTEMS AND CONTROL"
module: "Module 4: Closed loop controllers:  P, I, PID Controllers"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200882b85456187f36cd1"
status: "completed"
scrapedAt: "2026-05-23T16:43:53.818Z"
---
# MECHATRONIC SYSTEMS AND CONTROL: Module 4 - Closed Loop Controllers: P, I, PID Controllers

## Topic: Digital Controllers

---

### 1. Introduction to Digital Control

**1.1 What are Digital Controllers?**

*   **Definition:** Digital controllers are control systems that use digital hardware (microprocessors, microcontrollers) to implement control algorithms. They operate on discrete-time signals, meaning they sample the input, process it, and generate an output at specific intervals.
*   **Contrast with Analog Controllers:** Unlike analog controllers that use continuous-time signals and analog electronic components (op-amps, resistors, capacitors), digital controllers offer greater flexibility, programmability, and precision.
*   **Why Digital Control?**
    *   **Flexibility & Programmability:** Control algorithms can be easily modified or updated by changing software, rather than redesigning hardware.
    *   **Precision & Accuracy:** Digital systems can achieve higher precision due to the nature of digital representation and processing.
    *   **Complexity:** Can implement more complex control algorithms (like advanced PID variations, adaptive control, fuzzy logic) that are difficult or impossible with analog circuits.
    *   **Integration:** Easily integrate with other digital systems, sensors, and communication networks.
    *   **Cost-Effectiveness:** In many cases, microcontrollers are more cost-effective for complex control tasks compared to dedicated analog hardware.
    *   **Noise Immunity:** Digital signals are less susceptible to noise than analog signals.

**1.2 Key Components of a Digital Control System**

A typical digital control system involves the following stages:

*   **Sensors:** Measure the physical variable (e.g., temperature, position, speed) and convert it into an analog electrical signal.
    *   *Referencing:* Bolton (Ch 3 & 4) extensively covers various sensors and their principles. Histand & Alciatore (Ch 2 & 3) also discuss sensor types and signal conditioning.
*   **Signal Conditioning:** Amplifies, filters, or converts the analog sensor signal into a format suitable for the Analog-to-Digital Converter (ADC). This may involve amplification, filtering, or linearization.
    *   *Referencing:* Histand & Alciatore (Ch 3) details signal conditioning circuits.
*   **Analog-to-Digital Converter (ADC):** Converts the conditioned analog sensor signal into a digital representation (a sequence of binary numbers).
    *   **Key Concepts:**
        *   **Sampling:** The process of taking discrete measurements of a continuous signal at regular intervals ($T_s$, the sampling period).
        *   **Quantization:** The process of converting each sampled analog value into one of a finite number of discrete levels.
        *   **Resolution:** The smallest change in the analog signal that can be detected by the ADC (e.g., 8-bit, 10-bit, 12-bit ADC). Higher resolution means more discrete levels.
        *   **Quantization Error:** The difference between the analog value and its quantized digital representation.
    *   *Referencing:* Histand & Alciatore (Ch 3) discusses ADC types (e.g., successive approximation, flash) and their characteristics.
*   **Digital Controller (Microprocessor/Microcontroller):** Executes the control algorithm in software. It takes the digital sensor data, performs calculations based on the control law, and generates a digital control output.
    *   **Microprocessor vs. Microcontroller:**
        *   **Microprocessor:** The CPU itself, requires external memory, I/O peripherals, etc. (e.g., Intel Core i7).
        *   **Microcontroller:** A self-contained system on a chip, including a CPU, memory (RAM, ROM/Flash), and I/O peripherals (ADC, DAC, timers, serial communication). Examples: Arduino Uno (ATmega328P), Raspberry Pi Pico (RP2040).
    *   *Referencing:* Bishop (Ch 2) provides an overview of embedded systems and microcontrollers. Shetty & Kolk (Ch 4 & 5) discuss microcontrollers and their integration into mechatronic systems. CO3 specifically targets selecting these components.
*   **Digital-to-Analog Converter (DAC):** Converts the digital control output from the controller back into an analog voltage or current signal.
    *   **Key Concepts:**
        *   **Reconstruction:** The process of generating a continuous analog signal from discrete digital values.
        *   **Zero-Order Hold (ZOH):** A common method where the DAC output holds the last digital value constant until the next digital value arrives. This can introduce 'steps' in the output.
    *   *Referencing:* Histand & Alciatore (Ch 3) covers DAC types (e.g., R-2R ladder, weighted resistor) and their operation.
*   **Actuators:** Convert the analog control signal into a physical action to control the system (e.g., motor, valve, heater).
    *   *Referencing:* Bolton (Ch 5-8) covers various actuators. Histand & Alciatore (Ch 4) also details actuators. CO1 and CO2 are directly relevant here.
*   **System (Plant):** The physical process being controlled.

---

### 2. Digital PID Control

**2.1 From Continuous to Discrete PID**

The goal is to implement the continuous-time PID control law in a discrete-time environment.

**Continuous-Time PID Control Law:**
$u(t) = K_p e(t) + K_i \int e(t) dt + K_d \frac{de(t)}{dt}$

Where:
*   $u(t)$: Control output
*   $e(t)$: Error signal ($e(t) = r(t) - y(t)$, where $r(t)$ is the reference and $y(t)$ is the system output)
*   $K_p$: Proportional gain
*   $K_i$: Integral gain
*   $K_d$: Derivative gain

**2.2 Discretization Methods**

To implement this digitally, we need to approximate the integral and derivative terms using discrete-time equivalents. This involves using the sampled error signal $e(k)$, where $k$ represents the current sampling instant.

**2.2.1 Proportional Term**

*   The proportional term is straightforward:
    $u_P(k) = K_p e(k)$

**2.2.2 Integral Term**

*   **Forward Euler Approximation (Rectangular Rule):** Approximates the integral as a sum of rectangular areas.
    $\int e(t) dt \approx \sum_{i=0}^{k} e(i) T_s$
    So, the discrete integral term is:
    $u_I(k) = K_i T_s \sum_{i=0}^{k} e(i)$
    This can be implemented recursively: $u_I(k) = u_I(k-1) + K_i T_s e(k)$.
    Let $K_{i\_discrete} = K_i T_s$. Then, $u_I(k) = u_I(k-1) + K_{i\_discrete} e(k)$.
*   **Trapezoidal Rule:** Offers a more accurate approximation by considering the average of the error at the current and previous sampling instants.
    $\int e(t) dt \approx T_s \left( \frac{e(k) + e(k-1)}{2} \right)$
    The discrete integral term becomes:
    $u_I(k) = K_i T_s \sum_{i=0}^{k} \frac{e(i) + e(i-1)}{2}$ (This sum can be complex to implement directly).
    A common recursive implementation for the trapezoidal rule approximation of the integral:
    $u_I(k) = u_I(k-1) + \frac{K_i T_s}{2} (e(k) + e(k-1))$
    Let $K_{i\_discrete} = \frac{K_i T_s}{2}$. Then, $u_I(k) = u_I(k-1) + K_{i\_discrete} (e(k) + e(k-1))$.

**2.2.3 Derivative Term**

*   **Backward Difference Approximation:** Approximates the derivative as the slope between the current and previous error.
    $\frac{de(t)}{dt} \approx \frac{e(k) - e(k-1)}{T_s}$
    So, the discrete derivative term is:
    $u_D(k) = K_d \frac{e(k) - e(k-1)}{T_s}$
    Let $K_{d\_discrete} = \frac{K_d}{T_s}$. Then, $u_D(k) = K_{d\_discrete} (e(k) - e(k-1))$.
*   **Forward Difference Approximation:** Approximates the derivative as the slope between the next and current error. This requires predicting the future error, which is often not practical in real-time systems.
    $\frac{de(t)}{dt} \approx \frac{e(k+1) - e(k)}{T_s}$
    $u_D(k) = K_d \frac{e(k+1) - e(k)}{T_s}$
*   **Central Difference Approximation:** Uses points symmetrical around the current point for better accuracy.
    $\frac{de(t)}{dt} \approx \frac{e(k+1) - e(k-1)}{2T_s}$
    $u_D(k) = K_d \frac{e(k+1) - e(k-1)}{2T_s}$

**Important Note:** The backward difference is the most common and practical method for digital derivative approximation as it only requires past and present samples.

**2.3 Digital PID Algorithm Implementations**

**2.3.1 Position Form (Non-Recursive)**

This form directly implements the discrete approximations of the PID terms.

$u(k) = K_p e(k) + K_i T_s \sum_{i=0}^{k} e(i) + K_d \frac{e(k) - e(k-1)}{T_s}$

This requires storing all past error values for the integral sum, which can be memory-intensive.

**2.3.2 Velocity Form (Recursive)**

This form is more practical for implementation as it only requires the current and previous error and the previous control output (or integral term). It is derived from the position form by looking at the change in control output.

Let's derive the velocity form from the discrete PID equation (using forward Euler for integral and backward difference for derivative):

$u(k) = K_p e(k) + K_i T_s \sum_{i=0}^{k} e(i) + K_d \frac{e(k) - e(k-1)}{T_s}$

$u(k-1) = K_p e(k-1) + K_i T_s \sum_{i=0}^{k-1} e(i) + K_d \frac{e(k-1) - e(k-2)}{T_s}$

Now, consider the change in control output:
$\Delta u(k) = u(k) - u(k-1)$
$\Delta u(k) = K_p (e(k) - e(k-1)) + K_i T_s e(k) + K_d \frac{e(k) - e(k-1) - (e(k-1) - e(k-2))}{T_s}$
$\Delta u(k) = K_p (e(k) - e(k-1)) + K_i T_s e(k) + K_d \frac{e(k) - 2e(k-1) + e(k-2)}{T_s}$

Let's define the coefficients for the velocity form:
$a_0 = K_p + K_i T_s + \frac{K_d}{T_s}$
$a_1 = -K_p - \frac{2K_d}{T_s}$
$a_2 = \frac{K_d}{T_s}$

Then, the control output update is:
$u(k) = u(k-1) + a_0 e(k) + a_1 e(k-1) + a_2 e(k-2)$

This is the **velocity form** of the digital PID controller. It's called the velocity form because $\Delta u(k)$ is proportional to the current and past errors, effectively controlling the "rate of change" of the control signal.

*   **Advantages of Velocity Form:**
    *   Requires less memory (only current and previous two error values are needed).
    *   Avoids "integral wind-up" issues more naturally when implemented correctly (though dedicated anti-windup is still recommended).
    *   Output is a change in control signal, which is often desirable for actuators like motors (e.g., change in PWM duty cycle).

**2.4 PID Tuning for Digital Controllers**

Tuning methods for analog PID controllers (like Ziegler-Nichols, Cohen-Coon) can still be used as a starting point. However, the discrete nature and sampling time ($T_s$) significantly affect the controller's performance.

*   **Sampling Time ($T_s$):**
    *   **Too large $T_s$:** Can lead to poor control, instability, and loss of performance (Nyquist-Shannon sampling theorem implications). The system might appear sluggish or even oscillate.
    *   **Too small $T_s$:** Increases computational load on the microcontroller, might not be achievable in real-time, and can amplify noise, especially for the derivative term.
*   **Tuning Considerations:**
    *   The gains ($K_p, K_i, K_d$) are often adjusted based on the sampling time. For instance, the derivative gain might be scaled by $T_s$ and the integral gain might be scaled by $T_s$ depending on the discretization method.
    *   Software-based tuning methods are often employed where the microcontroller iteratively adjusts gains based on system response.

*   **Referencing:** Bolton (Ch 4) discusses tuning methods. Histand & Alciatore (Ch 6) also touch upon controller tuning.

---

### 3. Practical Implementation Aspects of Digital PID

**3.1 Microcontroller Selection (CO3)**

*   **Processing Power:** Required to execute the PID algorithm, read sensors, and drive actuators within the sampling period.
*   **ADC/DAC Resolution & Speed:** Needs to be sufficient for the measurement and control precision required.
*   **Memory:** Enough RAM for variables and ROM/Flash for the program code.
*   **Peripherals:** Timers for sampling intervals, communication interfaces (UART, SPI, I2C) for debugging or networking.
*   **Cost & Power Consumption:** Important for many mechatronic applications.

**3.2 Sampling Period Selection**

*   **Rule of Thumb:** The sampling frequency should be at least 10 times the closed-loop bandwidth of the system.
*   **Trade-offs:** Balancing responsiveness with computational load and noise sensitivity.

**3.3 Derivative Noise Filtering**

*   The derivative term ($K_d \frac{e(k) - e(k-1)}{T_s}$) is highly sensitive to noise in the error signal.
*   **Methods to Mitigate Noise:**
    *   **Low-Pass Filter:** Apply a low-pass filter to the sensor signal *before* sampling or to the error signal.
    *   **Derivative on Measurement:** Calculate the derivative based on the change in the *measured output* ($y$) rather than the error ($e$). This prevents the derivative term from reacting to setpoint changes.
        $u_D(k) = -K_d \frac{y(k) - y(k-1)}{T_s}$
        The PID law then becomes:
        $u(k) = K_p e(k) + K_i T_s \sum e(i) - K_d \frac{y(k) - y(k-1)}{T_s}$
        This is often preferred in practice.
    *   **Damping:** Introduce a damping factor or a small constant in the denominator.

**3.4 Integral Anti-Windup**

*   **Problem:** When the control output saturates (reaches its maximum or minimum limit), the integral term continues to accumulate error, causing a large overshoot when the system eventually leaves saturation. This is called integral wind-up.
*   **Solutions:**
    *   **Clamping:** Stop integrating when the control output is saturated. If $u(k)$ reaches its limit, then if $e(k)$ has the same sign as the output, do not update the integral term.
    *   **Back-Calculation:** Disconnect the integral term when saturated and use the difference between the desired output and the clamped output to adjust the integral term.
    *   **Conditional Integration:** Integrate only when the control output is not saturated.

**3.5 Implementation Steps on a Microcontroller**

1.  **Initialize:** Set up timers for sampling, ADC for sensor readings, DAC for output, and any necessary communication.
2.  **Loop (executed at sampling interval $T_s$):**
    a.  Read sensor value.
    b.  Perform signal conditioning (if not done in hardware).
    c.  Convert analog sensor reading to digital using ADC.
    d.  Calculate the error: $e(k) = r(k) - y_{digital}(k)$.
    e.  Calculate the PID terms (using the chosen form, e.g., velocity form).
        *   Update integral term (consider anti-windup).
        *   Calculate derivative term (consider filtering/derivative on measurement).
        *   Calculate proportional term.
    f.  Sum the terms to get the control output $u(k)$.
    g.  Apply output clamping if necessary.
    h.  Convert digital control output to analog using DAC.
    i.  Update previous error values for the next iteration.
    j.  Wait for the next sampling interval using the timer.

---

### 4. Examples of Digital PID Control in Mechatronics

*   **Motor Speed Control:** A microcontroller reads the speed from a tachometer (sensor), calculates the error with respect to the desired speed, and uses a digital PID algorithm to control the motor voltage (via PWM through a DAC/PWM output).
    *   *Relates to CO1 (sensors), CO2 (actuators), CO4 (system response analysis).*
*   **Temperature Control:** A thermistor or thermocouple measures temperature, a microcontroller implements PID to adjust a heating element's power output (e.g., via PWM or SSR control).
    *   *Relates to CO1, CO2, CO4.*
*   **Robotic Arm Position Control:** Encoders measure joint angles, a microcontroller calculates errors and applies PID control to motor drivers to achieve precise positioning.
    *   *Relates to CO1, CO2, CO4.*
*   **Automotive Cruise Control:** Speed sensor provides feedback, PID controller adjusts throttle position.

---

### 5. Key Concepts and Definitions to Remember

*   **Digital Controller:** Control system using digital hardware and software.
*   **Sampling:** Discretizing a continuous signal at regular time intervals ($T_s$).
*   **Quantization:** Converting analog values into discrete digital levels.
*   **ADC/DAC:** Analog-to-Digital Converter, Digital-to-Analog Converter.
*   **Discretization:** Approximating continuous-time control laws (like PID) for digital implementation.
*   **Forward Euler, Trapezoidal Rule:** Methods for discretizing the integral term.
*   **Backward Difference:** Common method for discretizing the derivative term.
*   **Position Form PID:** Direct implementation of discrete PID terms, often recursive.
*   **Velocity Form PID:** Expresses the change in control output, more practical for implementation.
*   **Sampling Time ($T_s$):** Crucial parameter affecting performance and stability.
*   **Integral Wind-up:** Accumulation of integral term during output saturation.
*   **Anti-Windup Techniques:** Methods to prevent integral wind-up.
*   **Derivative Noise:** The sensitivity of the derivative term to sensor noise.
*   **Derivative on Measurement:** Technique to reduce derivative noise sensitivity.

---

### 6. Practice Questions and Exercises

**Question 1:**
A system requires a sampling period of $T_s = 0.01$ seconds. A PID controller has been tuned with gains $K_p = 5$, $K_i = 2 \, s^{-1}$, and $K_d = 0.5 \, s$.
Implement the discrete PID controller in the **velocity form** using the backward difference approximation for the derivative and forward Euler for the integral. Calculate the coefficients $a_0, a_1, a_2$.
The control law is: $u(k) = u(k-1) + a_0 e(k) + a_1 e(k-1) + a_2 e(k-2)$.

**Answer 1:**
The continuous PID is: $u(t) = K_p e(t) + K_i \int e(t) dt + K_d \frac{de(t)}{dt}$

Discretizing:
Integral term approximation (Forward Euler): $K_i T_s \sum e(i)$
Derivative term approximation (Backward Difference): $K_d \frac{e(k) - e(k-1)}{T_s}$

Velocity form derivation:
$\Delta u(k) = u(k) - u(k-1)$
$\Delta u(k) = K_p(e(k) - e(k-1)) + K_i T_s e(k) + K_d \frac{e(k) - 2e(k-1) + e(k-2)}{T_s}$

Rearranging to match $u(k) = u(k-1) + a_0 e(k) + a_1 e(k-1) + a_2 e(k-2)$:
$\Delta u(k) = (K_p + K_i T_s + \frac{K_d}{T_s}) e(k) + (-K_p - \frac{2K_d}{T_s}) e(k-1) + (\frac{K_d}{T_s}) e(k-2)$

Given: $K_p = 5$, $K_i = 2 \, s^{-1}$, $K_d = 0.5 \, s$, $T_s = 0.01 \, s$.

$K_i T_s = 2 \times 0.01 = 0.02$
$\frac{K_d}{T_s} = \frac{0.5}{0.01} = 50$

Calculate coefficients:
$a_0 = K_p + K_i T_s + \frac{K_d}{T_s} = 5 + 0.02 + 50 = 55.02$
$a_1 = -K_p - \frac{2K_d}{T_s} = -5 - 2 \times 50 = -5 - 100 = -105$
$a_2 = \frac{K_d}{T_s} = 50$

So, the velocity form is: $u(k) = u(k-1) + 55.02 e(k) - 105 e(k-1) + 50 e(k-2)$.

---

**Question 2:**
Explain two common methods to mitigate the problem of derivative noise in digital PID controllers.

**Answer 2:**
Two common methods to mitigate derivative noise are:

1.  **Low-Pass Filtering:** A low-pass filter can be applied to the analog sensor signal before it is sampled by the ADC, or to the digital error signal after it has been sampled. This filter attenuates high-frequency noise components, which are most problematic for the derivative term. The choice of filter cutoff frequency is critical; it must be low enough to remove noise but high enough not to significantly distort the system's actual dynamics.
2.  **Derivative on Measurement:** Instead of calculating the derivative of the error signal $e(t) = r(t) - y(t)$, the derivative is calculated on the measured output signal $y(t)$ only. The derivative term in the PID controller then becomes $-K_d \frac{y(k) - y(k-1)}{T_s}$. This is beneficial because setpoint changes ($r(t)$) do not directly affect the derivative term, thus preventing large, noisy spikes in the control output when the setpoint is suddenly changed. The controller's proportional term still reacts to setpoint changes.

---

**Question 3 (CO3 Relevance):**
List three important characteristics to consider when selecting a microcontroller for implementing a digital PID controller in a real-time mechatronic system.

**Answer 3:**
Three important characteristics for selecting a microcontroller for digital PID control are:

1.  **Processing Speed/Clock Frequency:** The microcontroller must be fast enough to execute the PID algorithm, read sensor data, and update actuator outputs within the specified sampling period ($T_s$) without missing deadlines.
2.  **Availability and Resolution of ADC/DAC:** For analog sensors and actuators, the microcontroller needs an Analog-to-Digital Converter (ADC) to read sensor values and potentially a Digital-to-Analog Converter (DAC) or Pulse Width Modulation (PWM) capability to control actuators. The resolution and conversion speed of these peripherals are crucial for the precision of the control system.
3.  **Peripherals (Timers, Interrupts):** Reliable timers are essential for generating precise sampling intervals. Interrupt capabilities are also vital for handling time-critical events efficiently and allowing the microcontroller to perform other tasks while waiting for the next sampling period.

---

### 7. Important Points to Remember

*   Digital control offers flexibility but requires careful discretization of analog control laws.
*   The sampling time ($T_s$) is a critical parameter that directly influences the digital controller's performance.
*   Derivative noise is a significant challenge in digital PID implementation and requires mitigation strategies.
*   Integral wind-up must be addressed to prevent overshoot and improve system response when control outputs saturate.
*   The velocity form of the PID controller is generally preferred for practical microcontroller implementation due to its reduced memory requirements and inherent handling of control output changes.
*   Proper microcontroller selection is crucial for meeting the computational and I/O demands of the digital control application.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. References

*   **Bolton, W. (2010).** *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering* (4th ed.). Pearson Education. (Relevant Chapters: Sensors, Actuators, Microcontrollers, Control Systems)
*   **Histand, M. B., & Alciatore, D. G. (2003).** *Introduction to Mechatronics and Measurement Systems*. McGraw-Hill Series in Mechanical Engineering. (Relevant Chapters: Sensors, Signal Conditioning, ADCs/DACs, Control Systems)
*   **Shetty, D., & Kolk, R. A. (2010).** *Mechatronics system design*. CL-Engineering. (Relevant Chapters: Microcontrollers, System Integration, Control)
*   **Bishop, R. H. (2017).** *Mechatronics: an introduction*. CRC Press. (Relevant Chapters: Embedded Systems, Microcontrollers, Control)
*   **Merzouki, R., Samantaray, A. K., Pathak, P. M., & Ould Bouamama, B. (2003).** *Intelligent Mechatronic Systems: Modeling, Control and Diagnosis*. Springer, London. (For advanced concepts or broader context if needed).

---