---
title: "Objective: Obtain the transfer function of AC Servo motor by experiment."
subject: "CONTROL SYSTEM LAB"
module: "Module 2: Transfer function of A.C. Servo motor."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36756"
status: "completed"
scrapedAt: "2026-05-23T16:25:03.745Z"
---
# CONTROL SYSTEM LAB - Module 2: Transfer Function of A.C. Servo Motor

## Topic: Obtain the Transfer Function of AC Servo Motor by Experiment

---

### 1. Introduction to AC Servo Motors

**What is an AC Servo Motor?**

An AC servo motor is a type of electric motor that is used in applications requiring precise control of position, velocity, and acceleration. They are commonly used in robotics, automation, CNC machines, and other industrial applications where accuracy and responsiveness are critical.

**Key Characteristics of AC Servo Motors:**

*   **High Torque at Low Speeds:** Capable of delivering significant torque even when rotating slowly, making them ideal for holding positions.
*   **Precise Position Control:** Achieved through the integration of a feedback mechanism (usually an encoder).
*   **Wide Speed Range:** Can operate efficiently across a broad range of speeds.
*   **Fast Response:** Quickly respond to changes in input commands.
*   **AC Power Operation:** Unlike DC servo motors, they operate directly from AC power sources, often with an AC drive or servo amplifier.

**Types of AC Servo Motors (Brief Overview):**

*   **Synchronous AC Servo Motors:** Rotor rotates at the same speed as the rotating magnetic field.
*   **Induction AC Servo Motors:** Rotor speed lags behind the rotating magnetic field, relying on slip for torque generation. For control applications, permanent magnet synchronous AC servo motors are more common due to their higher efficiency and power density.

---

### 2. Understanding Transfer Functions

**What is a Transfer Function?**

In control systems engineering, a transfer function, denoted by $G(s)$ or $H(s)$, is a mathematical representation of the relationship between the output of a system and its input in the Laplace domain. It describes how a system transforms an input signal into an output signal, assuming zero initial conditions.

**Key Properties:**

*   **Laplace Transform:** The transfer function is derived by taking the Laplace transform of the system's differential equation.
*   **Linear Time-Invariant (LTI) Systems:** Transfer functions are applicable only to LTI systems. AC servo motors, when operated within their linear range, can be approximated as LTI systems.
*   **Poles and Zeros:** The roots of the denominator polynomial are called poles, and the roots of the numerator polynomial are called zeros. These significantly influence the system's dynamic response.
*   **System Order:** The order of the transfer function is determined by the highest power of 's' in the denominator polynomial.

**General Form of a Transfer Function:**

$$ G(s) = \frac{Y(s)}{U(s)} = \frac{b_m s^m + b_{m-1} s^{m-1} + ... + b_1 s + b_0}{a_n s^n + a_{n-1} s^{n-1} + ... + a_1 s + a_0} $$

Where:
*   $Y(s)$ is the Laplace transform of the output.
*   $U(s)$ is the Laplace transform of the input.
*   $m$ is the order of the numerator.
*   $n$ is the order of the denominator.

---

### 3. Modeling an AC Servo Motor

**Physical Components and Their Electrical/Mechanical Equivalents:**

*   **Stator:** Contains windings that create a rotating magnetic field when supplied with AC voltage. The input signal typically controls the magnitude or phase of this voltage.
*   **Rotor:** A permanent magnet or induction rotor that follows the rotating magnetic field.
*   **Feedback Device (Encoder/Resolver):** Provides information about the motor's angular position and/or velocity. This is crucial for closed-loop control.

**Derivation of Transfer Function (Conceptual):**

The transfer function of an AC servo motor is typically derived by considering the electrical and mechanical dynamics of the motor. This involves:

1.  **Electrical Dynamics:** Modeling the voltage-current relationship in the stator windings, considering inductance and resistance.
2.  **Mechanical Dynamics:** Modeling the relationship between torque, inertia, damping, and angular position/velocity using Newton's second law for rotation.
3.  **Electromechanical Coupling:** Relating the electrical input (voltage) to the mechanical output (torque).

**Assumptions for Simplification (Typical for Lab Experiments):**

*   **Linearity:** The motor operates within its linear range (avoiding saturation of magnetic flux and amplifier output).
*   **Constant Parameters:** Motor resistance ($R$), inductance ($L$), inertia ($J$), and viscous friction ($B$) are assumed to be constant.
*   **Negligible Stator Resistance and Inductance:** Often, the electrical time constant of the stator is much smaller than the mechanical time constant, allowing for simplification.
*   **Torque Proportional to Control Voltage:** The generated torque is assumed to be directly proportional to the control voltage applied to the stator.
*   **No Back EMF:** In some simplified models, the effect of back EMF is neglected, especially for small motors.

**Commonly Obtained Transfer Function Form for AC Servo Motors:**

A common representation of an AC servo motor's transfer function, relating angular position ($\theta(s)$) to control voltage ($V_c(s)$), is a **first-order system**. This arises when considering the mechanical inertia and damping, and assuming the electrical dynamics are much faster.

$$ G(s) = \frac{\Theta(s)}{V_c(s)} = \frac{K}{(Js+B)} $$

Where:
*   $K$ is the **Torque Constant** (or motor constant), relating control voltage to torque. Units: $Nm/V$.
*   $J$ is the **Rotor Inertia**. Units: $kg \cdot m^2$.
*   $B$ is the **Viscous Friction Coefficient**. Units: $Nm \cdot s/rad$.

Sometimes, if the electrical dynamics are significant or if we consider torque as an intermediate step, a **second-order system** might emerge, but for experimental determination of the overall motor transfer function, the first-order approximation is often sufficient and easier to identify.

---

### 4. Experimental Objective: Obtain the Transfer Function of AC Servo Motor

**Goal:** To experimentally determine the parameters ($K$, $J$, $B$) of the AC servo motor and thus obtain its transfer function.

**Why Experimentally?**

*   **Real-World System Identification:** Actual motor parameters can vary due to manufacturing tolerances, operating conditions, and aging. Experimental identification provides a more accurate model for control design.
*   **Validation of Theoretical Models:** Comparing experimental results with theoretical derivations helps in understanding the limitations of theoretical models.
*   **Direct Parameter Measurement:** Some parameters like inertia can be difficult to calculate precisely without experimental data.

---

### 5. Experimental Procedures and Techniques

**Key Principle:** To excite the motor with a known input signal and measure its output response. By analyzing this input-output relationship, we can infer the system's parameters.

**Common Input Signals:**

*   **Step Input:** A sudden change in voltage from 0 to a constant value. The response is observed to determine rise time, settling time, and steady-state value.
*   **Impulse Input (Approximation):** A very short duration pulse.
*   **Sinusoidal Input (Frequency Response):** Applying sinusoidal voltages of varying frequencies to observe the motor's response characteristics (gain and phase shift).

**Common Output Measurements:**

*   **Angular Position:** Using an encoder, potentiometer, or resolver.
*   **Angular Velocity:** Derived from the position signal or measured directly by a tachometer.

**Methods for Transfer Function Identification:**

**Method 1: Using Step Response (Time-Domain Identification)**

*   **Concept:** The step response of a first-order system $G(s) = \frac{K}{(Js+B)}$ to a unit step input ($U(s) = 1/s$) is:
    $$ \theta(t) = K/B (1 - e^{-Bt/J}) $$
    This is an exponential rise to a steady-state value of $K/B$. The time constant of the system is $\tau = J/B$.
*   **Procedure:**
    1.  **Setup:** Connect the AC servo motor to a suitable power amplifier and signal generator. Connect an encoder to measure angular position.
    2.  **Apply Step Input:** Apply a step voltage input (e.g., from 0V to 1V) to the motor.
    3.  **Record Output:** Record the angular position ($\theta(t)$) of the motor shaft over time.
    4.  **Analyze Response:**
        *   **Steady-State Value:** Determine the final steady-state angular position ($\theta_{ss}$). From the response, $\theta_{ss} = K/B$.
        *   **Time Constant ($\tau$):** The time it takes for the output to reach approximately 63.2% of its steady-state value. $\tau = J/B$.
        *   **Calculate Parameters:**
            *   $B = K / \theta_{ss}$ (Assuming $K$ is known from motor datasheet or measured separately).
            *   $J = B \tau$.
*   **Challenges:**
    *   **Accurate Measurement of Time Constant:** Can be difficult with noisy data or systems with significant damping.
    *   **Knowing the Input Magnitude:** The exact magnitude of the step input applied to the motor windings must be known.
    *   **Linearity Assumption:** If the input is too large, the motor might operate outside its linear range.

**Method 2: Using Frequency Response (Frequency-Domain Identification)**

*   **Concept:** Applying sinusoidal inputs of various frequencies and measuring the amplitude ratio and phase shift of the output relative to the input. The Bode plot is a common way to visualize this.
*   **Procedure:**
    1.  **Setup:** Same as Method 1.
    2.  **Apply Sinusoidal Input:** Apply sinusoidal voltage inputs of varying frequencies (e.g., 1 Hz, 2 Hz, 5 Hz, 10 Hz, ...).
    3.  **Record Output:** Record the amplitude and phase of the motor's angular position response at each frequency.
    4.  **Plot Bode Diagram:** Plot the magnitude response (in dB) and phase response (in degrees) against frequency (on a log scale).
    5.  **Parameter Estimation:**
        *   For a first-order system $G(s) = \frac{K}{(Js+B)}$, the transfer function in the frequency domain is $G(j\omega) = \frac{K}{(j\omega J+B)}$.
        *   **Magnitude:** $|G(j\omega)| = \frac{K}{\sqrt{(\omega J)^2 + B^2}}$
        *   **Phase:** $\angle G(j\omega) = -\arctan(\frac{\omega J}{B})$
        *   **Low-Frequency Gain:** At $\omega \to 0$, $|G(j\omega)| \to K/B$. This gives the DC gain.
        *   **Corner Frequency ($\omega_c$):** This is the frequency where the magnitude drops by 3 dB from the DC gain, or where the magnitude of the denominator's reactive part equals the real part: $\omega_c J = B$. At this frequency, the phase shift is -45 degrees.
        *   **From Bode Plot:**
            *   **DC Gain:** Obtain the magnitude at very low frequencies (e.g., 0 dB frequency on the magnitude plot). $DC Gain = K/B$.
            *   **Corner Frequency:** Identify the frequency where the phase is -45 degrees, or where the magnitude plot crosses the -20 dB/decade line.
            *   **Calculate Parameters:**
                *   $\omega_c = B/J$.
                *   From DC Gain: $K/B = \text{DC Gain Value}$.
                *   From $\omega_c$: $J = B/\omega_c$.
                *   Substitute $B$ from the DC gain into the $\omega_c$ equation to solve for $K$ and $J$.
*   **Advantages:** More robust than step response for systems with noise or complex dynamics.
*   **Challenges:** Requires a signal generator capable of producing sinusoidal waveforms over a wide frequency range and a method to accurately measure phase shifts.

**Method 3: System Identification Toolbox (MATLAB/Simulink)**

*   **Concept:** Specialized tools in software like MATLAB (System Identification Toolbox) can automatically estimate transfer functions from input-output data.
*   **Procedure:**
    1.  **Data Acquisition:** Collect input-output data (voltage vs. position/velocity) from experimental tests.
    2.  **Import Data:** Load the data into the System Identification Toolbox.
    3.  **Model Estimation:** Choose a model structure (e.g., first-order, second-order) and use the toolbox functions (e.g., `tfest`) to estimate the transfer function parameters.
*   **Advantages:** Automates the process, can handle more complex models, and provides statistical validation of the estimated model.
*   **Challenges:** Requires familiarity with the software and understanding of model structures.

---

### 6. Practical Considerations and Equipment

*   **AC Servo Motor Unit:** The motor itself, often with a gearbox and integrated encoder.
*   **Servo Amplifier/Drive:** Converts the control signal into the appropriate AC voltage for the motor.
*   **Signal Generator:** To provide the input voltage (step, sine waves).
*   **Power Supply:** For the amplifier and other electronic components.
*   **Data Acquisition System (DAQ):** To record the input voltage and output position/velocity signals. This could be an oscilloscope with data logging capabilities, or a dedicated DAQ card connected to a computer.
*   **Software:** For data acquisition, analysis, and potentially simulation (e.g., MATLAB/Simulink).
*   **Load (Optional):** For more realistic testing, a mechanical load (e.g., a flywheel, a mass) can be attached to the motor shaft to alter its inertia.

**Important Notes for Experimentation:**

*   **Safety First:** Always ensure proper wiring and handling of electrical equipment. Be aware of rotating machinery.
*   **Linear Operating Range:** Ensure the input signals and resulting motor speeds are within the motor's and amplifier's linear operating limits to avoid saturation and inaccurate results.
*   **Zero Initial Conditions:** Ideally, the motor should be at rest and at a known position before applying the input.
*   **Noise Reduction:** Electrical noise can significantly affect measurements. Use proper shielding, grounding, and filtering techniques if necessary.
*   **Encoder Resolution:** The resolution of the encoder will affect the accuracy of position and velocity measurements.
*   **Sampling Rate:** For digital data acquisition, choose a sampling rate high enough to capture the dynamics of the motor response accurately.

---

### 7. Examples and Calculations

**Example Scenario:**

Suppose we apply a step input voltage of 2V to an AC servo motor. The measured angular position response is recorded as follows:

| Time (s) | Position ($\theta$) (degrees) |
| :------- | :---------------------------- |
| 0        | 0                             |
| 0.1      | 20                            |
| 0.2      | 35                            |
| 0.3      | 45                            |
| 0.4      | 50                            |
| 0.5      | 53                            |
| 0.6      | 54.5                          |
| 0.7      | 55                            |
| 0.8      | 55                            |

**Analysis using Step Response:**

1.  **Steady-State Value ($\theta_{ss}$):** From the table, $\theta_{ss} \approx 55$ degrees.
2.  **Convert to Radians:** $\theta_{ss} = 55 \text{ degrees} \times \frac{\pi}{180} \text{ rad/degree} \approx 0.96 \text{ radians}$.
3.  **Time Constant ($\tau$):** Let's find when the output reaches 63.2% of $\theta_{ss}$.
    $0.632 \times 0.96 \text{ rad} \approx 0.607 \text{ rad}$.
    In degrees, this is $0.632 \times 55 \text{ degrees} \approx 34.76 \text{ degrees}$.
    From the table, the output reaches approximately 35 degrees at $t=0.2$ s. So, $\tau \approx 0.2$ s.
4.  **Assume Known Torque Constant ($K$):** Let's assume from the motor datasheet or a separate experiment that the torque constant $K = 0.5 \text{ Nm/V}$.
5.  **Calculate Parameters:**
    *   DC Gain: $\theta_{ss} = K/B \times (\text{Input Voltage})$
        $0.96 \text{ rad} = (0.5 \text{ Nm/V}) / B \times (2 \text{ V})$
        $0.96 = 1/B$
        $B = 1 / 0.96 \approx 1.04 \text{ Nm} \cdot \text{s/rad}$
    *   Inertia: $\tau = J/B$
        $0.2 \text{ s} = J / 1.04 \text{ Nm} \cdot \text{s/rad}$
        $J = 0.2 \text{ s} \times 1.04 \text{ Nm} \cdot \text{s/rad} \approx 0.208 \text{ kg} \cdot \text{m}^2$
6.  **Transfer Function:**
    The transfer function relating angular position (in radians) to control voltage is:
    $$ G(s) = \frac{\Theta(s)}{V_c(s)} = \frac{K}{(Js+B)} = \frac{0.5}{(0.208s + 1.04)} $$
    We can also write this by dividing the numerator and denominator by 1.04:
    $$ G(s) = \frac{0.5/1.04}{(0.208/1.04)s + 1} = \frac{0.48}{0.2s + 1} $$
    The time constant $\tau = J/B = 0.208 / 1.04 = 0.2$ s, which matches our observation.

---

### 8. Linking to Learning Outcomes and Course Outcomes

**Learning Outcomes:**

*   **LO1: Identify and conduct suitable experiments to determine the parameters to model a physical system.**
    *   This module directly addresses LO1 by outlining experiments (step response, frequency response) to find $K$, $J$, and $B$ for an AC servo motor.
*   **LO2: Conduct suitable experiments and determine the performance specifications.**
    *   By obtaining the transfer function, we can analytically determine performance specifications like rise time, settling time, and steady-state error for the AC servo motor.
*   **LO3: Analyse a linear continuous time system model using simulation tools.**
    *   Once the transfer function is obtained experimentally, it can be implemented in simulation tools like MATLAB/Simulink to analyze its behavior under various conditions.
*   **LO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools.**
    *   The experimentally derived transfer function serves as the plant model for designing controllers (e.g., PID controllers) in simulation to improve the system's performance.

**Course Outcomes Alignment:**

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system. (Knowledge Level: K3)**
    *   This module provides the practical "how-to" for experiments that yield system parameters ($K$, $J$, $B$) for an AC servo motor, aligning perfectly with K3 (Applying knowledge).
*   **CO2: Conduct suitable experiments and determine the performance specifications. (Knowledge Level: K3)**
    *   The experimental data leading to the transfer function can be directly used to calculate performance metrics like bandwidth, settling time, overshoot, which are key performance specifications. This again falls under K3.
*   **CO3: Analyse a linear continuous time system model using simulation tools. (Knowledge Level: K3)**
    *   The output of this module is the linear continuous-time model (transfer function) of the AC servo motor, ready for analysis in simulation tools. This supports CO3.
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (Knowledge Level: K5)**
    *   This module is a prerequisite for CO4. The transfer function obtained experimentally is the "plant" model that will be used in simulation to design and tune controllers. While the design itself is CO4, this module provides the essential input for it.

---

### 9. Practice Questions and Answers

**Question 1:**
An AC servo motor has the transfer function $G(s) = \frac{10}{(0.5s + 1)}$ relating its angular position (in radians) to a control voltage. If a step input of 1V is applied, what is the steady-state angular position and the time constant of the system?

**Answer 1:**
The transfer function is in the form $G(s) = \frac{K_{overall}}{\tau s + 1}$, where $K_{overall}$ is the DC gain.
Here, $K_{overall} = 10 \text{ rad/V}$ and $\tau = 0.5$ s.
The steady-state angular position is given by $K_{overall} \times (\text{Step Input Voltage})$.
Steady-state position = $10 \text{ rad/V} \times 1 \text{ V} = 10 \text{ radians}$.
The time constant is $\tau = 0.5$ seconds.

**Question 2:**
During an experiment, you apply a step input of 0.5V to an AC servo motor. The motor's angular position rises exponentially and settles at 45 degrees. If the time constant observed from the response is 0.3 seconds, and assuming the motor torque constant $K=0.8$ Nm/V, calculate the viscous friction coefficient ($B$) and the rotor inertia ($J$). (Assume 1 radian = 57.3 degrees).

**Answer 2:**
1.  **Convert steady-state position to radians:**
    $\theta_{ss} = 45 \text{ degrees} \times \frac{\pi \text{ rad}}{180 \text{ degrees}} = \frac{\pi}{4} \text{ radians} \approx 0.785 \text{ radians}$.
2.  **Use the DC gain relationship to find B:**
    The DC gain of the transfer function $G(s) = \frac{K}{(Js+B)}$ is $K/B$.
    The steady-state output is $\theta_{ss} = \frac{K}{B} \times (\text{Input Voltage})$.
    $0.785 \text{ rad} = \frac{0.8 \text{ Nm/V}}{B} \times 0.5 \text{ V}$
    $0.785 = \frac{0.4}{B}$
    $B = \frac{0.4}{0.785} \approx 0.51 \text{ Nm} \cdot \text{s/rad}$.
3.  **Use the time constant to find J:**
    The time constant $\tau = J/B$.
    $0.3 \text{ s} = \frac{J}{0.51 \text{ Nm} \cdot \text{s/rad}}$
    $J = 0.3 \text{ s} \times 0.51 \text{ Nm} \cdot \text{s/rad} \approx 0.153 \text{ kg} \cdot \text{m}^2$.

**Question 3:**
What are the main challenges you might face when experimentally determining the transfer function of an AC servo motor using its step response?

**Answer 3:**
*   **Noise in measurements:** Electrical noise can corrupt the input and output signals, making it difficult to accurately determine the steady-state value and time constant.
*   **Non-linearity:** If the step input is too large, the motor or amplifier may enter saturation, leading to non-linear behavior that deviates from the assumed model.
*   **Accurate estimation of time constant:** The exact moment when the output reaches 63.2% of its final value can be hard to pinpoint, especially with noisy data.
*   **Precise knowledge of input magnitude:** Any error in the applied step input voltage will directly affect the calculated parameters.
*   **System settling time:** If the system has a very long settling time, it might be impractical to record the full response.

---

### 10. Important Points to Remember

*   **The core objective is to find the parameters ($K, J, B$) of the AC servo motor.**
*   **Transfer functions are valid for Linear Time-Invariant (LTI) systems.** Ensure your experiments are conducted within the linear operating region of the motor.
*   **Step response and frequency response are common experimental methods.**
*   **The time constant $\tau = J/B$ is a crucial characteristic.**
*   **DC gain provides a relationship between $K$, $B$, and the input voltage.**
*   **Safety precautions are paramount when working with electrical and mechanical systems.**
*   **Understanding the physical meaning of parameters ($K$, $J$, $B$) is as important as calculating them.**

---

This comprehensive set of study notes provides a strong foundation for understanding the experimental determination of an AC servo motor's transfer function, aligning with the learning and course outcomes. Remember to consult your textbooks for deeper theoretical insights and specific experimental details relevant to your lab setup.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
