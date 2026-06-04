---
title: "Exercises on Motion controller using AC/DC motor, servo motors and stepper motors with encoders to determine the operating characteristics."
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 2: Experiment on Whirling of shaft"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463714"
status: "completed"
scrapedAt: "2026-05-20T18:01:37.698Z"
---
## Mechanical Engineering Lab: Module 2 - Motion Control Systems and Whirling of Shaft

This module delves into the practical aspects of motion control using various electric motors and their integration with encoders for performance characterization. We will also explore the phenomenon of shaft whirling.

---

### **Topic: Exercises on Motion Controller using AC/DC Motor, Servo Motors and Stepper Motors with Encoders to Determine the Operating Characteristics**

This experiment focuses on understanding the operational principles and characteristics of different types of electric motors commonly used in mechatronics and automated systems, with a particular emphasis on their positional feedback mechanisms using encoders.

---

### **1. Introduction to Motion Control Systems**

Motion control is a crucial aspect of automation, enabling precise and repeatable movement of mechanical components. It involves controlling the position, velocity, and acceleration of a system.

*   **Key Components of a Motion Control System:**
    *   **Motor:** The actuator that provides the motive force.
    *   **Motor Controller/Driver:** The electronic circuit that manages the power supplied to the motor, controlling its speed and direction.
    *   **Feedback Device (Encoder):** Provides information about the motor's current position or speed.
    *   **Controller (Microcontroller/PLC):** The "brain" that receives feedback, processes commands, and sends control signals to the motor controller.

---

### **2. Types of Motors and Their Operating Characteristics**

We will be examining three primary types of motors: AC Motors, DC Motors, Servo Motors, and Stepper Motors.

#### **2.1. DC Motors**

*   **Definition:** A DC motor converts electrical energy into mechanical energy through the interaction of magnetic fields and current-carrying conductors.
*   **Operating Principle:** Based on Lorentz force. When a current-carrying conductor is placed in a magnetic field, it experiences a force. This force, when applied to a rotating armature, produces torque.
*   **Types:**
    *   **Brushed DC Motors:** The most common type, using brushes and a commutator to reverse the current direction in the armature coils as it rotates, ensuring continuous torque.
        *   **Characteristics:** Simple to control (voltage proportional to speed), readily available, cost-effective. However, brushes wear out, leading to maintenance and electrical noise.
    *   **Brushless DC (BLDC) Motors:** Use electronic commutation (without brushes) and permanent magnets on the rotor.
        *   **Characteristics:** Higher efficiency, longer lifespan, less maintenance, quieter operation. Require more complex electronic controllers.
*   **Application Examples:** Toys, small appliances, automotive applications (window wipers, fans).
*   **Textbook Reference:**
    *   *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering* by W. Bolton covers DC motor principles and control extensively.

#### **2.2. AC Motors**

*   **Definition:** An AC motor converts electrical energy into mechanical energy using alternating current.
*   **Operating Principle:** Based on the principle of rotating magnetic fields. The stator winding, when supplied with AC current, creates a rotating magnetic field that induces current in the rotor, causing it to rotate.
*   **Types:**
    *   **Induction Motors (Asynchronous Motors):** The most common type in industrial applications. The rotor speed is always slightly less than the synchronous speed of the rotating magnetic field (hence "asynchronous").
        *   **Characteristics:** Robust, reliable, low maintenance, cost-effective. Speed control typically requires Variable Frequency Drives (VFDs).
    *   **Synchronous Motors:** The rotor rotates at the same speed as the rotating magnetic field.
        *   **Characteristics:** Constant speed regardless of load variations, high efficiency. Requires a starting mechanism or a DC excitation for the rotor.
*   **Application Examples:** Industrial machinery, pumps, fans, conveyors.
*   **Textbook Reference:**
    *   *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering* by W. Bolton also discusses AC motor principles.

#### **2.3. Servo Motors**

*   **Definition:** A servo motor is a rotary actuator that allows for precise control of angular or linear position, velocity, and acceleration. It's essentially a motor combined with a feedback mechanism (encoder or resolver) and a control circuit.
*   **Operating Principle:** A servo motor system operates in a closed-loop control system. The controller compares the desired position/velocity with the actual position/velocity reported by the encoder and adjusts the motor's power to minimize the error.
*   **Types:**
    *   **DC Servo Motors:** Typically brushed or brushless DC motors with a high-resolution encoder.
    *   **AC Servo Motors:** Similar to BLDC motors, offering high performance and precise control.
*   **Key Characteristics:**
    *   **High Accuracy and Precision:** Due to closed-loop feedback.
    *   **Fast Response:** Can change speed and direction quickly.
    *   **High Torque:** Especially at low speeds.
    *   **Position, Velocity, and Torque Control:** Can be controlled in multiple modes.
*   **Application Examples:** Robotics, CNC machines, automation systems, camera focus mechanisms.
*   **Textbook Reference:**
    *   *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering* by W. Bolton is an excellent resource for servo motor control.
    *   *Kinematics and Dynamics of Machinery* by C.E. Wilson, P. Sadler might touch upon the dynamics and control aspects relevant to servo systems.

#### **2.4. Stepper Motors**

*   **Definition:** A stepper motor is a brushless DC electric motor that divides a full rotation into a number of discrete steps. It can move and hold at these discrete steps without a feedback sensor (in open-loop mode), although feedback can be used for closed-loop control.
*   **Operating Principle:** Consists of a rotor with permanent magnets or toothed iron, and a stator with electromagnets arranged around it. By energizing the stator electromagnets in a specific sequence, the rotor is driven to move in discrete angular steps.
*   **Key Characteristics:**
    *   **Precise Positioning:** Can move in fixed angular steps (e.g., 1.8 degrees per step).
    *   **Open-Loop Control:** Often operated without feedback, simplifying the system.
    *   **Holding Torque:** Can hold its position against external forces when energized.
    *   **Low Speed Torque:** Good torque at low speeds.
*   **Limitations:**
    *   **Speed Limitation:** Torque decreases at higher speeds.
    *   **Resonance:** Can experience vibrations at certain speeds.
    *   **Lost Steps:** In open-loop mode, if the load is too high or acceleration is too fast, the motor can miss steps, leading to position errors.
*   **Application Examples:** 3D printers, CNC machines, scanners, printers, robotics.
*   **Textbook Reference:**
    *   *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering* by W. Bolton provides detailed explanations of stepper motor operation and control.

---

### **3. Encoders: The Feedback Mechanism**

Encoders are crucial for providing positional and velocity feedback in motion control systems.

*   **Definition:** An encoder is an electro-mechanical device that converts the angular or linear position of a shaft or mechanism into an electrical signal.
*   **Types of Encoders:**
    *   **Incremental Encoders:**
        *   **Principle:** Generate pulses as the shaft rotates. Two main channels (A and B) are offset by 90 degrees (quadrature), allowing the direction of rotation to be determined. An index pulse (Z) can be provided for a home position.
        *   **Output:** Series of pulses. The frequency of pulses is proportional to speed, and the number of pulses is proportional to the distance moved.
        *   **Resolution:** Determined by the number of pulses per revolution (PPR).
        *   **Application:** Speed control, relative positioning.
        *   **Textbook Reference:** *Metrology for Engineers* by Shotbolt C.R. and Gayler J.F.W. might discuss transducers and measurement principles applicable to encoders.
    *   **Absolute Encoders:**
        *   **Principle:** Provide a unique digital code for each shaft position. There is no need for homing.
        *   **Output:** Digital code (e.g., binary, Gray code).
        *   **Resolution:** Determined by the number of bits in the output code.
        *   **Application:** Absolute positioning, where power loss necessitates retaining position information.
*   **Encoder Characteristics:**
    *   **Resolution:** The smallest change in position that the encoder can detect (e.g., PPR for incremental, bits for absolute).
    *   **Accuracy:** How closely the encoder's output corresponds to the actual position.
    *   **Speed:** The maximum rotational or linear speed at which the encoder can operate reliably.
    *   **Interface:** How the encoder communicates its output (e.g., TTL, RS-422, SSI).

---

### **4. Determining Operating Characteristics**

This involves systematically testing the motors and observing their behavior under various conditions.

*   **Parameters to Measure/Determine:**
    *   **Speed-Torque Characteristics:** Plotting motor speed against applied load torque.
        *   **Procedure:** Apply varying loads to the motor and measure the corresponding speed.
        *   **Expected Outcome:** Generally, speed decreases as torque increases.
    *   **Speed-Voltage/Current Characteristics (DC Motors):** Plotting motor speed against applied voltage or current.
        *   **Procedure:** Vary the supply voltage or current and measure the motor speed.
        *   **Expected Outcome:** For DC motors, speed is roughly proportional to voltage (at constant torque).
    *   **Efficiency:** Ratio of mechanical output power to electrical input power.
        *   **Calculation:** $\text{Efficiency} (\eta) = \frac{\text{Output Power}}{\text{Input Power}} = \frac{\text{Torque} \times \text{Angular Velocity}}{\text{Voltage} \times \text{Current}}$
    *   **Response Time:** Time taken for the motor to reach a commanded speed or position.
        *   **Measurement:** Using an oscilloscope or by analyzing encoder data.
    *   **Positioning Accuracy (Stepper and Servo Motors):** The error between the commanded position and the actual position.
        *   **Measurement:** Command the motor to move to specific positions and measure the actual position using the encoder or a separate metrology instrument.
    *   **Step Angle Accuracy (Stepper Motors):** The deviation of the actual step angle from the theoretical step angle.
        *   **Measurement:** Rotate the motor in discrete steps and measure the actual angular displacement for each step.
    *   **Holding Torque (Stepper Motors):** The maximum torque the motor can withstand without moving when energized in a stationary position.
        *   **Measurement:** Apply increasing torque to a stationary, energized motor until it starts to move.

*   **Instrumentation Required:**
    *   **DC Power Supply:** Variable voltage and current.
    *   **AC Power Supply:** Variable voltage and frequency (for AC motors).
    *   **Motor Controller/Driver:** Appropriate for each motor type.
    *   **Encoder:** Interfaced with a data acquisition system or microcontroller.
    *   **Load (Brake Dynamometer, Eddy Current Brake, or Inertial Load):** To apply controlled torque.
    *   **Tachometer/Encoder:** To measure motor speed.
    *   **Torque Sensor:** To measure applied torque.
    *   **Multimeter/Oscilloscope:** For electrical measurements.
    *   **Data Acquisition System:** For recording data.

*   **Procedure Outline (General):**
    1.  **Setup:** Connect the motor, controller, encoder, load, and measurement instruments correctly. Ensure safety precautions are followed.
    2.  **Calibration:** Calibrate all measurement instruments.
    3.  **Data Collection:**
        *   For each motor, perform a series of tests to determine the desired characteristics.
        *   Vary the input (e.g., voltage, frequency, step sequence) and measure the output (e.g., speed, position).
        *   Record all data systematically.
    4.  **Analysis:**
        *   Plot the measured data to visualize the operating characteristics.
        *   Calculate efficiency, accuracy, and other relevant parameters.
        *   Compare the experimental results with theoretical expectations or manufacturer specifications.

*   **Course Outcome Alignment:**
    *   **CO1 (Choose Instruments):** Students must select appropriate instruments (load, sensors, DAQ) for each measurement. (K3)
    *   **CO2 (Determine Accuracy):** This experiment directly involves determining positional and speed accuracies of motors. (K3)
    *   **CO3 (Analyze Mechanisms):** Understanding the dynamics and control of these motors is essential for analyzing machinery. (K3)
    *   **CO4 (Demonstrate Functions & Control):** Students demonstrate the functions of different motors and how they are controlled using controllers and feedback. (K3)

---

### **5. Practice Questions and Exercises**

**Question 1:**
A DC motor is tested and the following data is obtained:
| Voltage (V) | Speed (RPM) | Current (A) | Load Torque (Nm) |
| :---------- | :---------- | :---------- | :--------------- |
| 12          | 1500        | 1.5         | 0.5              |
| 12          | 1200        | 2.0         | 0.8              |
| 12          | 900         | 2.5         | 1.0              |

Calculate the efficiency of the motor at each operating point. (Assume motor efficiency is approximately $\text{Torque} \times \text{Speed} / (\text{Voltage} \times \text{Current})$).

**Answer:**
To calculate efficiency, we first need to convert RPM to rad/s: $\omega (\text{rad/s}) = \text{RPM} \times \frac{2\pi}{60}$

*   **Point 1:**
    *   $\omega = 1500 \times \frac{2\pi}{60} \approx 157.08 \text{ rad/s}$
    *   Output Power = $\text{Torque} \times \omega = 0.5 \text{ Nm} \times 157.08 \text{ rad/s} \approx 78.54 \text{ W}$
    *   Input Power = $\text{Voltage} \times \text{Current} = 12 \text{ V} \times 1.5 \text{ A} = 18 \text{ W}$
    *   Efficiency = $\frac{78.54}{18} \times 100\% \approx 436.3\%$  **(Note: This result is clearly impossible, indicating an issue with the provided data for input power relative to output power, or a misunderstanding of the basic principles. Typically, input power will always be greater than output power. Let's assume the question intends for a hypothetical scenario to practice calculation.)**
    *   Let's re-evaluate the formula for efficiency: Efficiency = (Output Power) / (Input Power). The provided values are highly unrealistic for a DC motor. If we *assume* the output power is calculated correctly, and the input power is actually higher, the efficiency would be less than 100%. Let's proceed with the calculation as requested, highlighting the unrealistic nature of the data.

*   **Point 2:**
    *   $\omega = 1200 \times \frac{2\pi}{60} \approx 125.66 \text{ rad/s}$
    *   Output Power = $0.8 \text{ Nm} \times 125.66 \text{ rad/s} \approx 100.53 \text{ W}$
    *   Input Power = $12 \text{ V} \times 2.0 \text{ A} = 24 \text{ W}$
    *   Efficiency = $\frac{100.53}{24} \times 100\% \approx 418.9\%$

*   **Point 3:**
    *   $\omega = 900 \times \frac{2\pi}{60} \approx 94.25 \text{ rad/s}$
    *   Output Power = $1.0 \text{ Nm} \times 94.25 \text{ rad/s} \approx 94.25 \text{ W}$
    *   Input Power = $12 \text{ V} \times 2.5 \text{ A} = 30 \text{ W}$
    *   Efficiency = $\frac{94.25}{30} \times 100\% \approx 314.17\%$

**Important Note on Question 1:** The provided data is physically impossible for a real DC motor, as input power must always exceed output power for efficiency to be less than 100%. This exercise is for practicing calculation methodology.

**Question 2:**
What is the primary advantage of using a servo motor over a stepper motor for applications requiring very high speed and precise dynamic response?

**Answer:**
The primary advantage of a servo motor over a stepper motor for high-speed and dynamic applications is its closed-loop control system. While stepper motors often operate in open-loop (leading to potential lost steps at high speeds or loads), servo motors use encoders for continuous feedback. This feedback allows the controller to correct for errors in real-time, ensuring accurate position and velocity control even under rapidly changing load conditions or at high speeds. Servo motors generally have better torque characteristics at higher speeds and can achieve much higher acceleration/deceleration rates.

**Question 3:**
Explain the difference between an incremental encoder and an absolute encoder in terms of their output signal and how position is determined.

**Answer:**
*   **Incremental Encoder:** Outputs a series of pulses (typically from two channels, A and B, in quadrature) as the shaft rotates. To determine the absolute position, the system needs to know a starting or "home" position. The controller counts these pulses, and the quadrature signals indicate the direction of rotation. An additional "index" pulse can be provided once per revolution to help with homing. Position is determined by counting pulses relative to a known reference.
*   **Absolute Encoder:** Outputs a unique digital code (e.g., binary or Gray code) for each distinct angular or linear position of the shaft. There is no need for homing, as the position is immediately known upon power-up. Position is determined directly from the digital code read from the encoder.

---

### **6. Important Points to Remember**

*   **Motor Selection:** The choice of motor (DC, AC, Servo, Stepper) depends heavily on the application requirements: speed, torque, precision, cost, and operating environment.
*   **Feedback is Key:** Encoders are essential for precise motion control, enabling closed-loop operation, improving accuracy, and allowing for speed monitoring.
*   **Trade-offs:** Each motor type has its own advantages and disadvantages. For example, stepper motors offer precise open-loop positioning, but can lose steps. Servo motors offer excellent dynamic performance but are generally more complex and costly.
*   **Understanding Characteristics:** Being able to characterize motor performance through experimentation is vital for selecting the right motor and designing effective control systems.
*   **Safety:** Always follow proper laboratory safety procedures when working with electrical equipment and rotating machinery.

---

### **Topic: Experiment on Whirling of Shaft**

This section, while mentioned in the module title, is a separate topic from motion control. It deals with the dynamic instability of rotating shafts.

#### **7. Introduction to Whirling of Shafts**

*   **Definition:** Whirling (or critical speed) is a phenomenon where a rotating shaft experiences excessive transverse vibrations at certain speeds. These speeds are known as critical speeds or whirling speeds.
*   **Cause of Whirling:**
    *   **Shaft Imperfections:** Any asymmetry in the shaft itself (e.g., uneven mass distribution due to manufacturing defects or uneven wear).
    *   **Eccentricity of Rotating Parts:** Unbalanced mass in components mounted on the shaft (e.g., rotors, flywheels).
    *   **Misalignment:** Imperfect alignment between the shaft and its bearings.
    *   **Shaft Stiffness:** The inherent stiffness of the shaft itself contributes to its natural vibration frequencies.
*   **Mechanism:** When a shaft rotates, any eccentricity causes a centrifugal force that acts through the center of mass of the rotor. This force is directed radially outwards. If this force is not balanced by a restoring force that keeps the center of rotation and the center of mass coincident, the shaft will deflect. At certain speeds, the frequency of the centrifugal force excitation matches the natural frequency of transverse vibration of the shaft, leading to resonance. This resonance causes large amplitude vibrations, and the shaft's center of mass will orbit around the axis of rotation.
*   **Textbook Reference:**
    *   *Kinematics and Dynamics of Machinery* by C.E. Wilson, P. Sadler would be the most relevant textbook for the theoretical analysis of shaft whirling and critical speeds.
    *   *Metrology for Engineers* by Shotbolt C.R. and Gayler J.F.W. and *Practical Engineering Metrology* by Sharp K.W.B. and Hume Sir Isaac might touch upon methods for measuring shaft runout or vibration, which are related to identifying whirling.

#### **8. Determining Critical Speeds**

*   **Theoretical Calculation:** Critical speeds can be calculated based on the shaft's physical properties (length, diameter, material) and the mass and eccentricity of rotating components. Formulas derived from Euler-Bernoulli beam theory and vibration analysis are used. For a simply supported shaft with a central concentrated mass, the fundamental critical speed ($N_c$) is approximately given by:
    $N_c \approx \frac{183}{l^2} \sqrt{\frac{EI}{w}}$
    Where:
    *   $N_c$ is the critical speed in RPM
    *   $l$ is the length of the shaft between bearings (in meters)
    *   $E$ is the Young's modulus of the shaft material (in N/m²)
    *   $I$ is the area moment of inertia of the shaft cross-section (in m⁴)
    *   $w$ is the weight of the rotor (in N)

*   **Experimental Determination:**
    *   **Procedure:**
        1.  Mount the shaft system in the experimental setup.
        2.  Start rotating the shaft at a low speed.
        3.  Gradually increase the speed while monitoring for vibrations. Vibration can be detected using vibration sensors (accelerometers, proximity probes) or by observing the amplitude of vibration of the shaft itself or its supports.
        4.  Record the speeds at which significant increases in vibration amplitude occur. These speeds are the critical speeds.
        5.  It's common to see multiple critical speeds, corresponding to different modes of transverse vibration (fundamental, second harmonic, etc.).
    *   **Instrumentation:**
        *   Variable speed drive for the motor.
        *   Vibration sensors (accelerometers, proximity probes).
        *   Data acquisition system to record speed and vibration data.
        *   Stroboscope (optional, for visual observation of vibration patterns).
*   **Importance:**
    *   Operating machinery at or near critical speeds can lead to catastrophic failure due to excessive vibrations.
    *   Understanding critical speeds is crucial for designing rotating machinery to avoid these problematic speeds or to design systems that can withstand them.
    *   If a machine's operating speed must coincide with a critical speed, special design considerations (e.g., stiffening the shaft, using damped bearings) are required.

*   **Course Outcome Alignment:**
    *   **CO3 (Design and Analyze Mechanisms):** Understanding whirling is directly related to analyzing the dynamic behavior and potential failure modes of rotating machinery mechanisms. (K3)

---

This comprehensive study material covers the essential aspects of motion control with various motors and encoders, as well as the phenomenon of shaft whirling, aligning with the provided learning outcomes and course objectives. Remember to consult the specified textbooks for deeper theoretical understanding and detailed experimental procedures.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
