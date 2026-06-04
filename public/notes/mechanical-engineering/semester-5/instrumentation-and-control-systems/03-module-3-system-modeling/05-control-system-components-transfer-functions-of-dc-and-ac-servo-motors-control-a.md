---
title: "Control system components: Transfer functions of DC and AC servo motors– Control applications of Tacho generator and Stepper motor."
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 3: System Modeling"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463678"
status: "completed"
scrapedAt: "2026-05-20T18:00:42.691Z"
---
# Instrumentation and Control Systems - Module 3: System Modeling

## Topic: Control System Components: Transfer Functions of DC and AC Servo Motors – Control Applications of Tacho Generator and Stepper Motor

---

### **Learning Outcomes Covered:**

*   Transfer functions of DC and AC servo motors.
*   Control applications of Tacho generator.
*   Control applications of Stepper motor.

---

### **Course Outcomes Alignment:**

*   **CO1 (K2):** Basic knowledge about industrial measurement systems and elements. (This module introduces fundamental components like motors and tacho-generators.)
*   **CO4 (K3):** Describe the role of various control blocks and components in feedback systems. (Understanding motor transfer functions and tacho-generator applications is crucial for describing their roles.)
*   **CO5 (K4):** Analyze time domain responses and apply Root locus. (Motor models are essential for analyzing system responses and designing controllers.)

---

## 1. Introduction to Control System Components

Control systems rely on various components to sense, process, and actuate. Motors are critical actuators that provide mechanical motion based on electrical signals. Tacho-generators and stepper motors are specialized types of motors used for precise control and positioning.

---

## 2. Transfer Functions of DC and AC Servo Motors

### 2.1. DC Servo Motors

A DC servo motor is a DC electric motor that is used in a feedback control system. It's designed to provide precise control over angular or linear position, velocity, and acceleration.

**Basic Components and Operation:**

*   **Armature:** Rotating part carrying current.
*   **Stator:** Stationary part with field windings (or permanent magnets).
*   **Commutator and Brushes:** Reverse the direction of current in the armature coil as it rotates, ensuring continuous torque in one direction.
*   **Input:** Voltage applied to the armature (or field, depending on configuration).
*   **Output:** Angular position ($\theta$) or angular velocity ($\omega$).

**Mathematical Modeling (Armature Controlled DC Servo Motor):**

Consider a DC servo motor where the field flux is constant, and the armature voltage ($V_a$) is the input.

**Electrical Subsystem:**
The armature circuit is an RL circuit. By applying Kirchhoff's Voltage Law (KVL) to the armature circuit:

$V_a(t) = R_a i_a(t) + L_a \frac{di_a(t)}{dt} + V_b(t)$

Where:
*   $V_a(t)$: Applied armature voltage.
*   $i_a(t)$: Armature current.
*   $R_a$: Armature resistance.
*   $L_a$: Armature inductance.
*   $V_b(t)$: Back EMF (Electromotive Force) generated due to motor rotation.

The back EMF is proportional to the angular velocity ($\omega(t)$) of the motor shaft:

$V_b(t) = K_b \omega(t)$

Where $K_b$ is the back EMF constant.

**Mechanical Subsystem:**
The torque produced by the motor ($T_m(t)$) is proportional to the armature current ($i_a(t)$) and the field flux (which is constant here):

$T_m(t) = K_t i_a(t)$

Where $K_t$ is the motor torque constant.

This motor torque is used to overcome the load torque and inertia. Assuming a load with inertia $J$ and viscous friction $B$:

$T_m(t) = J \frac{d\omega(t)}{dt} + B \omega(t)$

And, angular velocity is the derivative of angular position:

$\omega(t) = \frac{d\theta(t)}{dt}$

**Deriving the Transfer Function:**

1.  **Substitute $V_b$ and $\omega$ in the electrical equation:**
    $V_a(s) = R_a I_a(s) + L_a s I_a(s) + K_b \omega(s)$
    $V_a(s) = (R_a + L_a s) I_a(s) + K_b \omega(s)$

2.  **Express $I_a(s)$ in terms of $\omega(s)$ from the mechanical equation:**
    $T_m(s) = J s \omega(s) + B \omega(s) = (J s + B) \omega(s)$
    Since $T_m(s) = K_t I_a(s)$, we have:
    $I_a(s) = \frac{T_m(s)}{K_t} = \frac{(J s + B) \omega(s)}{K_t}$

3.  **Substitute $I_a(s)$ into the electrical equation:**
    $V_a(s) = (R_a + L_a s) \left[ \frac{(J s + B) \omega(s)}{K_t} \right] + K_b \omega(s)$
    $V_a(s) = \left[ \frac{(R_a + L_a s)(J s + B)}{K_t} + K_b \right] \omega(s)$
    $V_a(s) = \left[ \frac{R_a J s + R_a B + L_a J s^2 + L_a B s}{K_t} + K_b \right] \omega(s)$
    $V_a(s) = \frac{L_a J s^2 + (R_a J + L_a B) s + R_a B + K_t K_b}{K_t} \omega(s)$

4.  **Transfer Function from Voltage to Velocity:**
    $\frac{\omega(s)}{V_a(s)} = \frac{K_t}{L_a J s^2 + (R_a J + L_a B) s + R_a B + K_t K_b}$

5.  **Transfer Function from Voltage to Position:**
    Since $\omega(s) = s \theta(s)$:
    $\frac{\theta(s)}{V_a(s)} = \frac{K_t}{s [L_a J s^2 + (R_a J + L_a B) s + R_a B + K_t K_b]}$

**Simplifications and Assumptions:**

*   **Ignoring Armature Inductance ($L_a$):** In many DC servo motors, $R_a$ is much larger than $L_a s$ (especially at lower frequencies), so $L_a$ can be neglected.
    The transfer function from voltage to velocity becomes:
    $\frac{\omega(s)}{V_a(s)} \approx \frac{K_t}{R_a J s + R_a B + K_t K_b}$
    The denominator is often simplified to $K_m = R_a B + K_t K_b$.
    $\frac{\omega(s)}{V_a(s)} \approx \frac{K_t}{R_a J s + K_m}$

*   **Field Controlled DC Servo Motor:** In this case, the armature voltage is constant, and the field voltage ($V_f$) is the input. The torque is proportional to the field current ($i_f$), which is related to $V_f$.

**Key Takeaway for DC Servo Motor TF:** The transfer function is generally a second-order system (if $L_a$ is considered) or a first-order system (if $L_a$ is neglected) relating the input voltage to the output position or velocity. The parameters like $J$, $B$, $R_a$, $L_a$, $K_t$, and $K_b$ are crucial for characterizing its behavior.

---

### 2.2. AC Servo Motors

AC servo motors are similar to DC servo motors in their application but use AC power. They are typically synchronous motors that require a feedback mechanism for precise control. Common types include 2-phase AC servo motors used in applications requiring high torque and accuracy.

**Basic Components and Operation:**

*   **Stator:** Contains windings for creating a rotating magnetic field.
*   **Rotor:** Can be a squirrel cage or a permanent magnet.
*   **Control Winding:** Receives a variable AC voltage that controls the motor's torque.
*   **Reference Winding:** Receives a constant AC voltage.
*   **Phase Shifter:** Ensures the correct phase relationship between control and reference signals.

**Mathematical Modeling (Simplified):**

The dynamics of AC servo motors are more complex to model due to the rotating magnetic fields and phase relationships. However, for control system analysis, they are often linearized and represented in a similar form to DC servo motors, particularly around an operating point.

A common simplified model for a 2-phase AC servo motor (often approximated as a linear system for small signals) relates the control voltage ($V_c$) to the motor's angular velocity ($\omega$) or position ($\theta$).

The torque produced is generally proportional to the control voltage and the sine of the angle between the magnetic fields. However, for small deviations from the operating point, this relationship can be linearized.

A simplified transfer function can be expressed as a first-order system:

$\frac{\omega(s)}{V_c(s)} = \frac{K_{m1}}{s + a_1}$

Where:
*   $K_{m1}$ is the motor gain constant.
*   $a_1$ is related to the motor's time constant and damping characteristics.

Or, in terms of position:

$\frac{\theta(s)}{V_c(s)} = \frac{K_{m1}}{s(s + a_1)}$

**Important Considerations for AC Servo Motors:**

*   **Torque-Speed Characteristics:** AC servo motors exhibit distinct torque-speed curves.
*   **Phase Angle Control:** The phase relationship between the control and reference windings is critical for torque production.
*   **Complexity:** Their modeling can be more involved, often using d-q transformation techniques for a more accurate representation, especially for large signal analysis.

**Reference Textbooks for Motor Modeling:**

*   **Ogata K, Modern Control Engineering (5/e):** Chapter 2 provides excellent coverage of mechanical system modeling and deriving transfer functions for DC motors.
*   **Nise N.S., Control Systems Engineering (6/e):** Chapter 2 details modeling of mechanical systems, including DC motors.
*   **Doebelin E.O., Measurement Systems Applications and Design (1990):** Provides insights into the physical principles of motors and their characteristics.

---

## 3. Control Applications of Tacho Generator

A **tacho generator** (or tachometer) is an electromechanical device that produces an analog voltage output proportional to the rotational speed of its shaft. It's essentially a small DC generator.

**Princ of Operation:**

When the shaft of the tacho generator is coupled to a rotating machine (like a motor), the rotation causes the generator's rotor to spin within its magnetic field. This induces a voltage across the generator's terminals.

$V_{out}(t) = K_{tg} \omega(t)$

Where:
*   $V_{out}(t)$ is the output voltage.
*   $K_{tg}$ is the tacho generator's voltage constant (in Volts per radian/sec or Volts per RPM).
*   $\omega(t)$ is the angular velocity of the shaft.

**Transfer Function:**

The transfer function of an ideal tacho generator is a simple gain:

$\frac{V_{out}(s)}{ \omega(s)} = K_{tg}$

**Important Considerations:**

*   **Linearity:** Tacho generators are known for their linearity over a wide speed range.
*   **Response Time:** They have a very fast response time, often approximated as instantaneous.
*   **Friction:** The torque required to drive the tacho generator is usually very small and can be neglected in most control system models.
*   **Electrical Time Constant:** In reality, the inductance and resistance of the armature coils introduce a small electrical time constant, making it a first-order system.
    $\frac{V_{out}(s)}{ \omega(s)} = \frac{K_{tg}}{ \tau_e s + 1}$
    However, $\tau_e$ is often very small and neglected.

**Control Applications:**

1.  **Velocity Feedback (Speed Control):**
    *   **Role:** The primary application of tacho generators is to provide a feedback signal for velocity control.
    *   **How it works:** In a closed-loop speed control system, the tacho generator measures the actual motor speed. This measured speed is compared to the desired speed (setpoint). The error signal is then used by a controller (e.g., PID) to adjust the motor's input voltage, thereby correcting any deviation from the setpoint.
    *   **Benefits:** Improves transient response, reduces steady-state error, and increases system stability.

    *Example:* A conveyor belt system needs to maintain a constant speed. A DC motor drives the belt. A tacho generator is attached to the motor shaft. The output voltage of the tacho generator is fed back to a controller, which adjusts the motor's armature voltage to keep the belt speed at the desired level.

2.  **Damping:**
    *   **Role:** Tacho generators can provide damping to systems that tend to oscillate.
    *   **How it works:** By feeding back velocity information, the controller can anticipate future positions and apply counteracting forces or torques, thus reducing overshoot and oscillations. This is particularly useful in systems with high inertia or resonant frequencies.

3.  **Measurement of Speed:**
    *   **Role:** Used directly as a speed measurement instrument.
    *   **How it works:** The analog voltage output can be read by a voltmeter or processed by other instrumentation for display or recording.

**Reference Textbooks for Tacho Generators:**

*   **Krishnaswamy K, Industrial Instrumentation (2003):** Likely discusses DC generators and their applications, including tacho-generators as speed sensors.
*   **Doebelin E.O., Measurement Systems Applications and Design (1990):** Provides a comprehensive overview of transducers, including tachometers.

---

## 4. Control Applications of Stepper Motor

A **stepper motor** is a brushless DC electric motor that divides a full rotation into a number of equal steps. The rotor precisely advances by one step of rotation at a time in response to a sequence of digital pulse inputs.

**Princ of Operation:**

*   **Stator:** Has multiple windings (phases) arranged around the rotor.
*   **Rotor:** Typically a permanent magnet or a toothed iron core.
*   **Operation:** By energizing the stator windings in a specific sequence, a magnetic field is created that rotates, pulling the rotor along. Each pulse applied to the motor causes it to rotate by one discrete step.

**Types of Stepper Motors:**

*   **Variable Reluctance (VR) Motors:** Rotor is made of a toothed ferromagnetic material. Stator poles are energized sequentially.
*   **Permanent Magnet (PM) Motors:** Rotor is a permanent magnet.
*   **Hybrid Motors:** Combine features of VR and PM motors, offering higher torque and resolution.

**Key Features:**

*   **Open-Loop Positioning:** Can achieve precise positioning without the need for a position feedback sensor, as long as the motor does not miss steps.
*   **Holding Torque:** Can hold its position firmly when stationary, provided windings are energized.
*   **Step Angle:** The angle of rotation per step (e.g., 1.8 degrees for 200 steps/revolution).
*   **Maximum Speed and Torque:** Limited by the motor's design and the driver circuit.

**Transfer Function (Conceptual):**

Modeling stepper motors for transfer function analysis is different from continuous rotation motors like servo motors. Their operation is inherently discrete.

*   **Discrete-Time Model:** A stepper motor's response to a pulse input is naturally a discrete event. For control system analysis, it's often modeled in the z-domain or as a discrete-time system.
*   **Continuous-Time Approximation:** For simplified analysis in some contexts, the stepper motor can be viewed as providing a discrete change in position ($\Delta\theta$) for each pulse input ($P$). The rate of pulses dictates the speed.
    *   If the pulse rate is $f_p$ (pulses/sec) and the step angle is $\Delta\theta$ (radians/step), then the angular velocity is approximately:
        $\omega \approx f_p \cdot \Delta\theta$
    *   The position $\theta$ is the integral of velocity, but also directly related to the cumulative number of steps.

**Control Applications:**

1.  **Precise Positioning:**
    *   **Role:** Stepper motors are ideal for applications requiring accurate angular or linear positioning.
    *   **How it works:** By controlling the sequence and number of pulses sent to the motor, one can move the attached load to a specific desired position. This is common in robotics, CNC machines, printers, and automated assembly lines.
    *   **Example:** A 3D printer's print head movement is controlled by stepper motors that precisely position the nozzle based on G-code instructions, which are essentially sequences of step commands.

2.  **Digitally Controlled Motion:**
    *   **Role:** Interface directly with microcontrollers and digital logic for precise motion control.
    *   **How it works:** Microprocessors can generate the required pulse sequences to drive stepper motors, making them suitable for embedded systems and automation.

3.  **Low-Speed High-Torque Applications:**
    *   **Role:** Can provide high torque at low speeds, especially when operated in full-step or half-step modes.
    *   **How it works:** The holding torque also makes them suitable for applications where the load needs to be held in place.

4.  **Indexing and Automation:**
    *   **Role:** Used for precise indexing or as actuators in automated machinery.
    *   **How it works:** In automated manufacturing, stepper motors can control the movement of parts, tools, or stages to specific locations.

**Limitations of Stepper Motors:**

*   **Step Loss:** If the load torque exceeds the motor's torque or if pulses are sent too quickly, the motor can miss steps, leading to position errors. This is why, in demanding applications, a feedback sensor (like an encoder) might still be used to verify position.
*   **Torque Ripple:** Torque output can vary slightly between steps.
*   **Resonance:** Can exhibit resonance at certain speeds, leading to vibrations or jerky motion.
*   **Limited Speed:** Generally not suited for very high-speed continuous rotation applications where servo motors excel.

**Reference Textbooks for Stepper Motors:**

*   **Doebelin E.O., Measurement Systems Applications and Design (1990):** Likely covers different types of actuators, including stepper motors.
*   **Krishnaswamy K, Industrial Instrumentation (2003):** May discuss stepper motors in the context of industrial actuators.

---

## 5. Important Points to Remember

*   **DC Servo Motor Transfer Function:** Typically a first-order or second-order system relating voltage input to angular position/velocity output. Key parameters are $J, B, R_a, L_a, K_t, K_b$.
*   **AC Servo Motor Transfer Function:** Often approximated as a first-order system for control analysis, but actual modeling is more complex.
*   **Tacho Generator:** A speed sensor providing a voltage proportional to speed. Its transfer function is ideally a gain ($K_{tg}$), used for velocity feedback and damping.
*   **Stepper Motor:** Digitally controlled actuator for precise positioning, operating in discrete steps. Primarily used in open-loop positioning systems.
*   **Trade-offs:** DC servo motors offer continuous precise control and good speed/torque characteristics. AC servo motors are robust. Stepper motors provide simple digital positioning.

---

## 6. Practice Questions and Exercises

**Question 1 (DC Servo Motor TF):**
A DC servo motor has the following parameters:
*   Armature resistance, $R_a = 2 \ \Omega$
*   Armature inductance, $L_a = 0.5 \ H$
*   Back EMF constant, $K_b = 0.1 \ V/(rad/s)$
*   Torque constant, $K_t = 0.1 \ Nm/A$
*   Rotor inertia, $J = 0.01 \ kg \cdot m^2$
*   Viscous friction coefficient, $B = 0.002 \ Nm/(rad/s)$

Derive the transfer function relating armature voltage $V_a(s)$ to motor angular velocity $\omega(s)$.

**Answer 1:**
The general transfer function from voltage to velocity is:
$\frac{\omega(s)}{V_a(s)} = \frac{K_t}{L_a J s^2 + (R_a J + L_a B) s + R_a B + K_t K_b}$

Let's substitute the values:
*   $L_a J = 0.5 \times 0.01 = 0.005$
*   $R_a J = 2 \times 0.01 = 0.02$
*   $L_a B = 0.5 \times 0.002 = 0.001$
*   $R_a B = 2 \times 0.002 = 0.004$
*   $K_t K_b = 0.1 \times 0.1 = 0.01$

So, the denominator is:
$0.005 s^2 + (0.02 + 0.001) s + (0.004 + 0.01)$
$0.005 s^2 + 0.021 s + 0.014$

The transfer function is:
$\frac{\omega(s)}{V_a(s)} = \frac{0.1}{0.005 s^2 + 0.021 s + 0.014}$

To simplify, divide numerator and denominator by 0.005:
$\frac{\omega(s)}{V_a(s)} = \frac{20}{s^2 + 4.2 s + 2.8}$

**(If $L_a$ is neglected):**
The simplified TF is $\frac{\omega(s)}{V_a(s)} \approx \frac{K_t}{R_a J s + R_a B + K_t K_b}$
$\frac{\omega(s)}{V_a(s)} \approx \frac{0.1}{2 \times 0.01 s + 0.004 + 0.01}$
$\frac{\omega(s)}{V_a(s)} \approx \frac{0.1}{0.02 s + 0.014}$
$\frac{\omega(s)}{V_a(s)} \approx \frac{0.1}{0.02(s + 0.7)} = \frac{5}{s + 0.7}$

**Question 2 (Tacho Generator Application):**
Explain the role of a tacho generator in a DC motor speed control system. How does it contribute to system stability and performance?

**Answer 2:**
In a DC motor speed control system, the tacho generator acts as a **speed sensor**.
1.  **Feedback:** It measures the actual rotational speed of the motor shaft and converts it into a proportional voltage signal.
2.  **Comparison:** This voltage signal is fed back and compared with a reference voltage representing the desired speed. The difference between the actual and desired speed creates an error signal.
3.  **Controller Action:** A controller (e.g., PID) processes this error signal and generates a control output (e.g., armature voltage) to adjust the motor's speed.
4.  **Stability and Performance:** By providing **negative velocity feedback**, the tacho generator improves system stability by damping oscillations and reducing overshoot. It also enhances performance by reducing steady-state speed errors and improving the motor's response to load disturbances. The fast response of the tacho generator ensures that speed deviations are detected and corrected quickly.

**Question 3 (Stepper Motor Application):**
What is a key advantage of using a stepper motor for positioning tasks compared to a standard DC servo motor? What is a potential drawback?

**Answer 3:**
**Key Advantage:** The primary advantage of a stepper motor for positioning tasks is its ability to achieve **precise open-loop positioning**. By sending a specific number of digital pulses, the motor moves a corresponding number of discrete steps without the need for a separate position feedback sensor (like an encoder), simplifying the system design and reducing cost.

**Potential Drawback:** The main drawback is the risk of **step loss**. If the commanded torque exceeds the motor's capability, or if the motor is driven too fast, it can miss steps. This leads to an accumulated position error that the system will not detect without a feedback mechanism, potentially causing the system to operate at the wrong location.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
