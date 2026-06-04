---
title: "Electrical system model"
subject: "MECHATRONIC SYSTEMS AND CONTROL"
module: "Module 3: Microprocessors and microcontrollers: Digital circuits"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200882b85456187f36ccb"
status: "completed"
scrapedAt: "2026-05-23T16:43:45.166Z"
---
# MECHATRONIC SYSTEMS AND CONTROL

## Module 3: Microprocessors and Microcontrollers: Digital Circuits

### Topic: Electrical System Model

---

## 1. Introduction to Electrical System Modeling in Mechatronics

Mechatronic systems integrate mechanical, electrical, and software engineering. To design, analyze, and control these systems effectively, we need to understand and model their individual components and how they interact. This topic focuses on the electrical system model, specifically within the context of microprocessors and microcontrollers.

**Learning Outcome:** Understand the principles of modeling electrical systems relevant to mechatronic applications.

**Course Outcome Alignment:** This topic directly contributes to **CO4: Analyse the models and responses of different systems (Knowledge Level: K3)** by providing the foundational understanding of how electrical subsystems can be modeled.

---

### 1.1 Why Model Electrical Systems?

Modeling electrical systems in mechatronics is crucial for several reasons:

*   **Understanding System Behavior:** To predict how an electrical circuit will respond to various inputs and conditions.
*   **Design and Simulation:** To test and refine circuit designs virtually before physical implementation, saving time and resources.
*   **Control System Design:** To develop accurate control algorithms that interface with and manage the electrical components of a mechatronic system.
*   **Troubleshooting and Diagnosis:** To identify the root cause of faults or unexpected behavior in the electrical subsystem.
*   **Optimization:** To fine-tune the performance of electrical circuits for efficiency, speed, and accuracy.

---

### 1.2 Fundamental Electrical Components and Their Models

Microprocessor and microcontroller-based mechatronic systems rely on various electrical components. Understanding their simplified models is key to system analysis.

#### 1.2.1 Resistors (R)

*   **Definition:** A passive component that opposes the flow of electric current.
*   **Model:** The relationship between voltage (V), current (I), and resistance (R) is described by **Ohm's Law**:
    *   $V = I \times R$
    *   $I = V / R$
    *   $R = V / I$
*   **Behavior:** Dissipates energy as heat.
*   **Textbook Reference:** Bolton (4th Ed.) Chapter 2, Histand & Al-ciatore Chapter 2.

**Example:** A 1kΩ resistor connected to a 5V supply. The current flowing through it would be $I = 5V / 1000Ω = 5mA$.

#### 1.2.2 Capacitors (C)

*   **Definition:** A passive component that stores electrical energy in an electric field.
*   **Model:**
    *   The relationship between charge (Q), capacitance (C), and voltage (V) is: $Q = C \times V$
    *   Current (I) through a capacitor is the rate of change of charge: $I = dQ/dt = C \times dV/dt$
    *   Voltage across a capacitor is the integral of current: $V(t) = (1/C) \int I(t) dt$
*   **Behavior:** Opposes changes in voltage. Stores energy electrostatically.
*   **Textbook Reference:** Bolton (4th Ed.) Chapter 2, Histand & Al-ciatore Chapter 2.

**Example:** Charging a capacitor through a resistor (RC circuit). The voltage across the capacitor rises exponentially towards the supply voltage. This is fundamental to timing circuits and filters.

#### 1.2.3 Inductors (L)

*   **Definition:** A passive component that stores energy in a magnetic field when electric current flows through it.
*   **Model:**
    *   The relationship between voltage (V) across an inductor and the rate of change of current (I) through it is: $V = L \times dI/dt$
    *   Current through an inductor is the integral of voltage: $I(t) = (1/L) \int V(t) dt$
*   **Behavior:** Opposes changes in current. Stores energy electromagnetically.
*   **Textbook Reference:** Bolton (4th Ed.) Chapter 2, Histand & Al-ciatore Chapter 2.

**Example:** Inductors are often found in switching power supplies and motor control circuits where they help to smooth current or store energy.

---

### 1.3 Simple Electrical Circuit Models

Combining these fundamental components allows us to model more complex electrical circuits.

#### 1.3.1 Series Circuits

*   **Description:** Components are connected end-to-end, so the same current flows through all of them.
*   **Total Resistance ($R_{total}$):** $R_{total} = R_1 + R_2 + ... + R_n$
*   **Total Voltage ($V_{total}$):** $V_{total} = V_1 + V_2 + ... + V_n$ (Kirchhoff's Voltage Law)
*   **Example:** A simple voltage divider, commonly used to scale down a voltage signal for input to a microcontroller's Analog-to-Digital Converter (ADC).

#### 1.3.2 Parallel Circuits

*   **Description:** Components are connected across the same two points, so the same voltage is applied across all of them.
*   **Total Resistance ($R_{total}$):** $1/R_{total} = 1/R_1 + 1/R_2 + ... + 1/R_n$
*   **Total Current ($I_{total}$):** $I_{total} = I_1 + I_2 + ... + I_n$ (Kirchhoff's Current Law)
*   **Example:** Multiple LEDs connected in parallel, each with its own current-limiting resistor.

#### 1.3.3 RC Circuits (First-Order Systems)

*   **Description:** Circuits containing resistors and capacitors. They are often used for filtering and timing.
*   **Series RC Circuit:**
    *   When driven by a voltage source, the capacitor charges/discharges exponentially.
    *   The time constant ($\tau$) is given by $\tau = R \times C$. This dictates how quickly the capacitor voltage changes.
    *   **Low-pass filter:** If the output voltage is taken across the capacitor, it allows low-frequency signals to pass through while attenuating high-frequency signals.
    *   **High-pass filter:** If the output voltage is taken across the resistor, it allows high-frequency signals to pass through while attenuating low-frequency signals.
*   **Textbook Reference:** Bolton (4th Ed.) Chapter 2, Histand & Al-ciatore Chapter 2.

**Example:** A button press detection circuit. A pull-up resistor and a capacitor to ground can create a debouncing effect, preventing multiple readings from a single button press.

#### 1.3.4 RL Circuits (First-Order Systems)

*   **Description:** Circuits containing resistors and inductors.
*   **Series RL Circuit:**
    *   When driven by a voltage source, the inductor current changes exponentially.
    *   The time constant ($\tau$) is given by $\tau = L / R$.
    *   **Low-pass filter:** If the output voltage is taken across the resistor, it acts as a low-pass filter.
    *   **High-pass filter:** If the output voltage is taken across the inductor, it acts as a high-pass filter.
*   **Textbook Reference:** Bolton (4th Ed.) Chapter 2.

**Example:** Inductors are used in motor drive circuits to smooth the current and prevent rapid changes that could damage the motor or drive electronics.

#### 1.3.5 RLC Circuits (Second-Order Systems)

*   **Description:** Circuits containing resistors, inductors, and capacitors. They exhibit more complex behavior, including oscillations.
*   **Model:** The behavior is described by a second-order differential equation.
*   **Behavior:** Can be underdamped (oscillatory), critically damped (fastest response without overshoot), or overdamped (slow response without overshoot).
*   **Textbook Reference:** Bolton (4th Ed.) Chapter 2.

**Example:** Tuning circuits in radio receivers or oscillatory behavior in power converters.

---

### 1.4 Modeling for Microcontroller Interfacing

Microcontrollers interact with the physical world through input and output interfaces, which are often electrical in nature.

#### 1.4.1 Input Modeling (Sensors)

*   **Analog Input:** Sensors often produce analog signals (varying voltage).
    *   **Voltage Dividers:** Used to scale sensor outputs to match the microcontroller's ADC input range (e.g., 0-5V).
    *   **Signal Conditioning:** Amplification, filtering, and linearization may be required using operational amplifiers (op-amps) and passive components.
*   **Digital Input:** Sensors that provide a binary output (high/low, on/off).
    *   **Pull-up/Pull-down Resistors:** Ensure a defined digital state when a sensor is not actively driving the line (e.g., for buttons, switches).
*   **Course Outcome Alignment:** This relates to **CO1: Comprehend the importance of sensors and actuators with application to mechatronic systems (Knowledge Level: K2)** by explaining how sensor signals are conditioned for microcontroller input.

**Example:** A thermistor (temperature sensor) whose resistance changes with temperature. It can be used in a voltage divider circuit to provide a voltage output proportional to temperature, which is then read by the microcontroller's ADC.

#### 1.4.2 Output Modeling (Actuators)

*   **Driving Loads:** Microcontrollers typically have limited output current capability.
    *   **Transistors (BJT, MOSFET):** Used as switches to control higher current loads like motors, solenoids, or relays.
    *   **Relays:** Electromechanical switches that allow a low-power microcontroller signal to control a high-power circuit.
    *   **Motor Drivers:** Integrated circuits designed to interface microcontrollers with motors, providing current amplification and protection.
*   **Pulse Width Modulation (PWM):** A technique used by microcontrollers to control the effective voltage supplied to an actuator (e.g., motor speed, LED brightness) by rapidly switching the output on and off.
*   **Course Outcome Alignment:** This relates to **CO2: Identify actuator mechanisms and signal conditioning processes (Knowledge Level: K2)** by showing how microcontrollers drive actuators.

**Example:** Using a MOSFET to control a DC motor. The microcontroller sends a PWM signal to the MOSFET's gate, turning the motor on and off at high frequency. Varying the duty cycle of the PWM signal controls the average voltage to the motor, thus controlling its speed.

#### 1.4.3 Power Supply Considerations

*   **Voltage Regulation:** Ensuring stable voltage levels for the microcontroller and other components.
*   **Decoupling Capacitors:** Placed near the microcontroller's power pins to filter out noise and provide a local charge reservoir during switching transients.
*   **Textbook Reference:** Shetty & Kolk (2010) Chapter 2, Bishop (2017) Chapter 3.

---

### 1.5 Mathematical Representation of Electrical Systems

Electrical systems can be represented using mathematical tools, enabling analysis and simulation.

#### 1.5.1 Differential Equations

*   **Description:** The fundamental behavior of capacitors and inductors involves rates of change, leading to differential equations.
*   **Example (Series RC circuit with a step input voltage $V_{in}$):**
    $R \frac{di(t)}{dt} + \frac{1}{C} \int i(t) dt = V_{in}$
    Or in terms of voltage across the capacitor $V_C(t)$:
    $RC \frac{dV_C(t)}{dt} + V_C(t) = V_{in}$
    This is a first-order linear differential equation.

#### 1.5.2 Transfer Functions (Laplace Domain)

*   **Description:** A powerful tool for analyzing linear time-invariant (LTI) systems. It represents the ratio of the Laplace transform of the output to the Laplace transform of the input, assuming zero initial conditions.
*   **Process:** Convert differential equations into algebraic equations in the Laplace domain (using 's' as the Laplace variable).
*   **Example (Series RC circuit as a low-pass filter):**
    The transfer function $H(s) = V_{out}(s) / V_{in}(s)$, where $V_{out}$ is across the capacitor, is:
    $H(s) = \frac{1/sC}{R + 1/sC} = \frac{1}{1 + sRC}$
    The pole of this system is at $s = -1/(RC)$, which is related to the time constant.
*   **Course Outcome Alignment:** This is directly relevant to **CO4: Analyse the models and responses of different systems (Knowledge Level: K3)**, as transfer functions are used to analyze system dynamics and stability.
*   **Textbook Reference:** Histand & Al-ciatore Chapter 8, Merzouki et al. (2003) Chapter 3.

#### 1.5.3 State-Space Representation

*   **Description:** A more general method for modeling dynamic systems, capable of handling multiple inputs and outputs, and non-linear systems. It uses a set of first-order differential equations to describe the system's internal state.
*   **Form:**
    $\dot{x}(t) = Ax(t) + Bu(t)$ (State equation)
    $y(t) = Cx(t) + Du(t)$ (Output equation)
    Where:
    *   $x(t)$ is the state vector (e.g., voltage across capacitor, current through inductor).
    *   $u(t)$ is the input vector.
    *   $y(t)$ is the output vector.
    *   A, B, C, D are matrices.
*   **Course Outcome Alignment:** Also relevant to **CO4: Analyse the models and responses of different systems (Knowledge Level: K3)**, providing a framework for analyzing system dynamics.
*   **Textbook Reference:** Merzouki et al. (2003) Chapter 3.

---

### 1.6 Practical Considerations and Model Simplification

*   **Component Tolerances:** Real components have manufacturing variations, which can affect circuit performance. Models often assume ideal components.
*   **Parasitic Effects:** Unintended capacitance, inductance, and resistance in circuit layouts and components can influence behavior, especially at high frequencies.
*   **Non-linearity:** Some components (e.g., diodes, transistors) exhibit non-linear behavior that might require more complex models or piecewise linear approximations.
*   **Simplification for Analysis:** For initial design and analysis, it's common to use simplified models (e.g., ignoring parasitic effects or treating components as ideal) to gain a basic understanding of the system. More complex models are used for detailed simulation and optimization.
*   **Textbook Reference:** Shetty & Kolk (2010) Chapter 2, Bishop (2017) Chapter 3.

---

## 2. Key Concepts and Definitions

*   **Ohm's Law:** The relationship between voltage, current, and resistance ($V=IR$).
*   **Capacitance:** The ability of a component to store electric charge ($Q=CV$).
*   **Inductance:** The property of a conductor to oppose changes in electric current ($V=L \frac{dI}{dt}$).
*   **Time Constant ($\tau$):** A measure of the time it takes for a first-order system (like RC or RL circuits) to reach approximately 63.2% of its final value during charging or discharging. $\tau = RC$ for RC circuits, $\tau = L/R$ for RL circuits.
*   **Kirchhoff's Voltage Law (KVL):** The sum of voltages around any closed loop in a circuit is zero.
*   **Kirchhoff's Current Law (KCL):** The sum of currents entering a node is equal to the sum of currents leaving the node.
*   **Transfer Function:** The ratio of the Laplace transform of the output to the Laplace transform of the input, used to characterize the behavior of LTI systems.
*   **State-Space Representation:** A method to model dynamic systems using first-order differential equations, representing the system's internal state.
*   **PWM (Pulse Width Modulation):** A technique to control the average output voltage of a digital signal by varying the pulse width.
*   **Pull-up/Pull-down Resistor:** Used to ensure a digital input has a defined logic level when no active signal is present.

---

## 3. Examples and Applications

*   **Voltage Divider:** Scaling sensor outputs for microcontroller ADC input.
*   **RC Filters:** Smoothing noisy sensor signals (low-pass) or differentiating signals (high-pass).
*   **PWM Control:** Controlling motor speed, servo position, LED brightness.
*   **Transistor Switching:** Driving relays, solenoids, and motors from microcontroller outputs.
*   **Debouncing Circuits:** Using RC networks to clean up noisy switch inputs.

---

## 4. Practice Questions and Exercises

**Question 1:**
A resistor of 10 kΩ is connected in series with a capacitor of 1 µF. This series RC circuit is connected to a 5V DC power supply.
a) Calculate the time constant ($\tau$) of this circuit.
b) If the capacitor is initially uncharged, what will be the voltage across the capacitor after one time constant ($\tau$)?
c) What will be the voltage across the capacitor as time approaches infinity?
d) If this circuit is used as a low-pass filter with the output taken across the capacitor, describe its behavior for a high-frequency input signal compared to a low-frequency input signal.

**Answer 1:**
a) $\tau = R \times C = 10 \times 10^3 \Omega \times 1 \times 10^{-6} F = 0.01$ seconds (or 10 ms).
b) After one time constant, the capacitor voltage will have reached approximately 63.2% of its final value. So, $V_C(\tau) \approx 0.632 \times 5V \approx 3.16V$.
c) As time approaches infinity, the capacitor will be fully charged, and the voltage across it will be equal to the supply voltage, i.e., 5V.
d) As a low-pass filter, for a high-frequency input signal, the capacitor will not have enough time to charge significantly during each cycle, acting like a short circuit to AC. This will attenuate the high-frequency signal. For a low-frequency input signal, the capacitor will have ample time to charge and discharge, allowing the signal to pass through with minimal attenuation.

**Question 2:**
You need to control a 12V DC motor that draws a maximum current of 500 mA. The microcontroller you are using operates at 3.3V and has a digital output pin capable of sourcing/sinking a maximum of 20 mA.
a) Explain why you cannot directly connect the microcontroller's output pin to the motor.
b) What type of electronic component can be used to interface the microcontroller to the motor, and how would it be configured?
c) Briefly describe how Pulse Width Modulation (PWM) could be used by the microcontroller to control the speed of the motor.

**Answer 2:**
a) The microcontroller's output pin cannot directly power the motor because the motor requires a higher voltage (12V vs 3.3V) and a much larger current (500 mA vs 20 mA). Directly connecting would damage the microcontroller.
b) A **transistor** (specifically a MOSFET or BJT) can be used. The microcontroller's output pin would be connected to the **gate** (for MOSFET) or **base** (for BJT) of the transistor, acting as a switch. The motor would be connected in series with the transistor and the 12V power supply, typically connected between the drain/collector and ground. A flyback diode should be placed across the motor to protect the transistor from voltage spikes when the motor is switched off.
c) The microcontroller can generate a PWM signal. This signal is a series of pulses with a fixed frequency but a variable duty cycle (the percentage of time the signal is "on" within one period). By varying the duty cycle, the average voltage supplied to the motor can be controlled, thus controlling its speed. A higher duty cycle means more average voltage and therefore higher speed.

---

## 5. Important Points to Remember

*   **Models are Simplifications:** Real-world electrical components have complexities (parasitics, non-linearities) that are often ignored in basic models for easier analysis.
*   **Time Constants:** Crucial for understanding the transient response of RC and RL circuits.
*   **Microcontroller Limitations:** Always be aware of the voltage and current limitations of microcontroller I/O pins when interfacing with external components.
*   **Interfacing Components:** Transistors, relays, and motor drivers are essential for bridging the gap between low-power microcontroller signals and higher-power actuators.
*   **Transfer Functions:** A powerful mathematical tool for analyzing the frequency response and stability of linear systems.
*   **PWM:** The primary method for analog-like control of digital outputs in mechatronic systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 6. References

*   **Bolton, W. (2010). *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering* (4th Ed.). Pearson Education.** (Chapters on basic circuit analysis, passive components, transient response).
*   **Histand, M. B., & Al-ciatore, D. G. (2003). *Introduction to Mechatronics and Measurement Systems*. McGraw-Hill Series in Mechanical Engineering.** (Chapters on electrical circuit analysis, fundamental electrical components, system modeling).
*   **Shetty, D., & Kolk, R. A. (2010). *Mechatronics system design*. CL-Engineering.** (Chapters on electrical subsystem design, interfacing, power electronics).
*   **Bishop, R. H. (2017). *Mechatronics: an introduction*. CRC Press.** (Chapters on electrical circuits, sensor/actuator interfacing).
*   **Merzouki, R., Samantaray, A. K., Pathak, P. M., & Bouamama, B. O. (2003). *Intelligent Mechatronic Systems: Modeling, Control and Diagnosis*. Springer, London.** (Chapters on system modeling, state-space representation).

---