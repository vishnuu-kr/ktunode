---
title: "Internal sensors-Position sensors, velocity sensors, acceleration sensors, Force sensors"
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 2: Sensors and Actuators"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c48"
status: "completed"
scrapedAt: "2026-05-23T16:41:25.929Z"
---
# Introduction to Robotics: Module 2: Sensors and Actuators

## Topic: Internal Sensors - Position, Velocity, Acceleration, and Force Sensors

---

### 1. Introduction to Internal Sensors

Internal sensors, also known as proprioceptive sensors, provide information about the robot's own state. This includes the configuration of its joints, the speed at which they are moving, and the forces being exerted. This internal state information is crucial for controlling the robot's movement accurately, ensuring safety, and enabling complex tasks.

**Key Concepts:**

*   **Proprioception:** The sense of the relative position of one's own parts of the body and strength of effort being employed in movement. In robotics, this refers to sensors that provide information about the robot's internal configuration and motion.
*   **Closed-loop control:** A control system that uses feedback from sensors to adjust the robot's output and achieve a desired state. Internal sensors are fundamental to closed-loop control.

**Relevance to Course Outcomes:**

*   **CO1 (K2): Familiarise with anatomy, specifications and applications of Robots.** Understanding internal sensors is part of understanding a robot's anatomy and how its specifications are achieved through sensing capabilities.
*   **CO2 (K2): Choose the appropriate sensors and actuators for robots.** This module directly addresses sensor selection by detailing the types and functions of internal sensors, enabling informed choices.
*   **CO4 (K3): Obtain kinematic model of robotic manipulators.** Position sensors are critical inputs for kinematic modeling, as they directly provide joint angles or positions.
*   **CO6 (K3): Develop dynamic model and design the controller for robotic manipulators.** Velocity, acceleration, and force sensors are essential inputs for dynamic modeling and controller design, enabling the robot to respond to its environment and internal states.

---

### 2. Position Sensors

Position sensors measure the angular or linear displacement of a robot's joints or end-effector. They are fundamental for determining the robot's configuration and are essential for kinematics and trajectory tracking.

**2.1 Types of Position Sensors:**

*   **Potentiometers (Variable Resistors):**
    *   **Description:** A simple analog sensor where a wiper moves along a resistive track, changing the resistance and thus the voltage output proportionally to the position.
    *   **How it works:** Resistance varies linearly with the wiper's position.
    *   **Pros:** Inexpensive, simple to implement, direct angle measurement.
    *   **Cons:** Limited resolution, prone to wear and tear (contacting wiper), non-linearities can occur, susceptible to electrical noise.
    *   **Applications:** Rotary joints in less critical applications, linear actuators.
    *   **Textbook Reference:** Saha, Chapter 4; Schilling, Chapter 4; Craig, Chapter 4.
*   **Encoders (Optical and Magnetic):**
    *   **Absolute Encoders:**
        *   **Description:** Provide a unique digital code for each distinct position of the shaft. The position is known immediately upon powering up.
        *   **How it works:** Uses a coded disc (optical or magnetic) with unique patterns for each position.
        *   **Pros:** Retains position even after power loss, high accuracy, no need for homing.
        *   **Cons:** More complex and expensive than incremental encoders, requires more complex electronics to read.
        *   **Applications:** Critical joints requiring immediate position knowledge, applications where power cycling is frequent.
        *   **Textbook Reference:** Saha, Chapter 4; Mittal & Nagrath, Chapter 5; Craig, Chapter 4.
    *   **Incremental Encoders:**
        *   **Description:** Produce pulses as the shaft rotates. The total displacement is calculated by counting these pulses. Often includes an index pulse for a reference point.
        *   **How it works:** Uses a disc with evenly spaced slots and a light source/detector (optical) or magnetic poles and sensors (magnetic). Two channels (A and B) out of phase detect direction.
        *   **Pros:** High resolution, relatively inexpensive, simple output (pulses).
        *   **Cons:** Loses position information upon power loss (requires homing), susceptible to losing counts due to electrical noise or high speeds.
        *   **Applications:** Most common for joint position feedback in industrial robots.
        *   **Textbook Reference:** Saha, Chapter 4; Schilling, Chapter 4; Mittal & Nagrath, Chapter 5; Craig, Chapter 4.
*   **Resolvers:**
    *   **Description:** Analog electromechanical devices that provide a sine and cosine output proportional to the shaft angle.
    *   **How it works:** Consists of a stator and a rotor. The rotor is excited with an AC voltage, and the stator windings induce voltages that vary sinusoidally with the rotor's angle.
    *   **Pros:** Robust, reliable in harsh environments (temperature, vibration, dirt), high resolution possible with signal processing.
    *   **Cons:** Requires specialized signal conditioning (resolver-to-digital converter), analog output.
    *   **Applications:** Industrial robots, aerospace, military applications where robustness is key.
    *   **Textbook Reference:** Saha, Chapter 4; Craig, Chapter 4.
*   **Linear Variable Differential Transformers (LVDTs):**
    *   **Description:** A type of transformer used for measuring linear displacement. It consists of a primary coil and two secondary coils. A movable core changes the magnetic flux linkage, producing a differential voltage output proportional to displacement.
    *   **How it works:** AC excitation of the primary coil induces voltages in the secondary coils. The core's position determines the phase and amplitude of the output signal.
    *   **Pros:** Non-contact, highly accurate, robust, can measure over long strokes.
    *   **Cons:** Relatively expensive, requires AC excitation and signal conditioning.
    *   **Applications:** Measuring linear extension of robotic arms, position feedback in hydraulic or pneumatic actuators.
    *   **Textbook Reference:** Saha, Chapter 4; Schilling, Chapter 4.

**2.2 Measuring Joint Angles:**

*   For rotary joints, encoders and resolvers are directly mounted on the joint shaft.
*   For linear joints (e.g., prismatic joints), LVDTs or linear encoders can be used.
*   **Kinematic Chain:** The position of each joint, when known, allows for the calculation of the end-effector's position and orientation using forward kinematics.

**Important Points to Remember:**

*   **Resolution:** The smallest change in position that the sensor can detect.
*   **Accuracy:** How close the measured position is to the true position.
*   **Repeatability:** The ability of the sensor to return to the same position measurement under the same conditions.
*   **Bandwidth:** The frequency range over which the sensor can accurately provide measurements.

---

### 3. Velocity Sensors

Velocity sensors measure the rate of change of position. They are crucial for controlling the robot's speed, preventing overshoot, and implementing advanced control strategies.

**3.1 Types of Velocity Sensors:**

*   **Tachometers:**
    *   **Description:** Typically a DC generator where rotation of the shaft drives a voltage output proportional to the angular velocity.
    *   **How it works:** Generates a DC voltage whose magnitude is proportional to the speed of rotation. Direction can be inferred from the polarity of the voltage.
    *   **Pros:** Simple, direct velocity measurement.
    *   **Cons:** Can be noisy, some wear on brushes (in DC tachometers), limited frequency response.
    *   **Applications:** Older robotic systems, speed control of motors.
    *   **Textbook Reference:** Saha, Chapter 4; Schilling, Chapter 4.
*   **Derivative of Position Sensors:**
    *   **Description:** Instead of a dedicated velocity sensor, the velocity can be calculated by numerically differentiating the output of a high-resolution position sensor (like an encoder).
    *   **How it works:** `Velocity = (Change in Position) / (Change in Time)`. For digital signals, this involves counting encoder pulses over a fixed time interval or calculating the time between successive pulses.
    *   **Pros:** Utilizes existing position sensing, can achieve high accuracy if the position sensor has high resolution and is sampled frequently.
    *   **Cons:** Can be very sensitive to noise, leading to amplified errors in velocity estimation. Requires sophisticated filtering.
    *   **Applications:** Modern robots utilizing encoders for both position and velocity feedback.
    *   **Textbook Reference:** Saha, Chapter 4; Craig, Chapter 4.
*   **Hall Effect Sensors (for specific applications):**
    *   **Description:** While primarily used for presence detection or direction, a series of precisely spaced Hall effect sensors can be used to measure speed by timing the passage of magnetic poles.
    *   **How it works:** Detects magnetic fields. By counting how many sensors are triggered per unit time, velocity can be inferred.
    *   **Applications:** Wheel speed sensing in mobile robots.

**3.2 Measuring Joint Velocity:**

*   For rotary joints, tachometers or calculated velocity from encoders are common.
*   For linear motion, linear tachometers or derived velocity from linear position sensors.

**Important Points to Remember:**

*   **Derivative Noise:** Calculating velocity from position is susceptible to noise. Filtering is crucial.
*   **Sampling Rate:** A higher sampling rate for position sensors improves the accuracy of derived velocity.

---

### 4. Acceleration Sensors

Acceleration sensors measure the rate of change of velocity. They are important for:

*   **Dynamic Control:** Understanding the forces acting on the robot for more precise motion control.
*   **Vibration Analysis:** Detecting and mitigating unwanted vibrations.
*   **Inertial Measurement Units (IMUs):** Combining accelerometer and gyroscope data to estimate orientation and motion in 3D space.

**4.1 Types of Acceleration Sensors:**

*   **Accelerometers (MEMS Accelerometers):**
    *   **Description:** Micro-Electro-Mechanical Systems (MEMS) accelerometers are the most common type. They typically work based on the principle of measuring the displacement of a proof mass under acceleration.
    *   **How it works:** A proof mass is suspended by springs. When acceleration occurs, the proof mass shifts. This displacement is measured by changes in capacitance (capacitive accelerometer) or piezoresistance (piezoresistive accelerometer).
        *   **Capacitive:** The proof mass acts as one plate of a capacitor, and fixed electrodes are the other. Acceleration changes the distance between them, altering capacitance.
        *   **Piezoresistive:** The proof mass is attached to a material that changes its resistance when deformed by acceleration.
    *   **Pros:** Small, lightweight, low power consumption, can measure static acceleration (gravity), relatively inexpensive.
    *   **Cons:** Sensitive to temperature, can be noisy, require calibration.
    *   **Applications:** Inertial navigation, platform stabilization, vibration sensing, mobile robot orientation estimation.
    *   **Textbook Reference:** Ghosal, Chapter 3 (as part of Inertial Sensing); Craig, Chapter 4 (briefly under sensors).
*   **Other Types (less common in typical robot joints):**
    *   **Piezoelectric Accelerometers:** Utilize the piezoelectric effect, where certain materials generate an electric charge when subjected to mechanical stress. Good for dynamic measurements but not static acceleration.
    *   **Servo Accelerometers:** Use a force-feedback mechanism to keep the proof mass centered, providing higher accuracy.

**4.2 Measuring Acceleration in Robots:**

*   Often integrated into IMUs mounted on the robot's base or end-effector.
*   Can be used to monitor accelerations along specific axes of robot links.

**Important Points to Remember:**

*   **Noise Sensitivity:** Accelerometers are prone to noise. Filtering is essential.
*   **Integration Errors:** Double integration of acceleration to get position is highly prone to drift and error accumulation.

---

### 5. Force Sensors

Force sensors measure the interaction forces and torques between the robot and its environment, or within the robot's structure. They are vital for:

*   **Force Control:** Enabling robots to interact safely and adaptively with objects.
*   **Compliance:** Making robot movements smooth and compliant.
*   **Assembly Tasks:** Detecting contact and applying appropriate forces.
*   **Detecting Collisions:** Triggering safety stops or evasive maneuvers.

**5.1 Types of Force Sensors:**

*   **Strain Gauges:**
    *   **Description:** Resistive sensors that change their electrical resistance when deformed. They are bonded to a flexible substrate that is attached to a force-sensing element (e.g., a metal beam or diaphragm).
    *   **How it works:** When a force is applied, the sensing element deforms, stretching or compressing the strain gauge, which changes its resistance. These changes are typically measured using a Wheatstone bridge circuit.
    *   **Pros:** High sensitivity, can measure both tension and compression, relatively inexpensive.
    *   **Cons:** Sensitive to temperature changes, require careful installation and calibration, can drift.
    *   **Applications:** Load cells, force/torque sensors in robot wrists and joints.
    *   **Textbook Reference:** Saha, Chapter 4; Schilling, Chapter 4; Mittal & Nagrath, Chapter 5; Craig, Chapter 4; Ghosal, Chapter 3.
*   **Piezoelectric Force Sensors:**
    *   **Description:** Utilize the piezoelectric effect to convert mechanical stress into an electrical charge.
    *   **How it works:** When a force is applied, the piezoelectric material generates a proportional electric charge.
    *   **Pros:** High frequency response, good for dynamic force measurements, self-generating (no external power needed for the sensing element itself).
    *   **Cons:** Cannot measure static forces (charge dissipates over time), can be sensitive to temperature, require charge amplifiers.
    *   **Applications:** Impact detection, dynamic force monitoring.
    *   **Textbook Reference:** Saha, Chapter 4; Ghosal, Chapter 3.
*   **Capacitive Force Sensors:**
    *   **Description:** Measure force by detecting changes in capacitance due to deformation.
    *   **How it works:** Similar to capacitive accelerometers, force deforms a structure that changes the distance between capacitor plates.
    *   **Pros:** Can measure static forces, good linearity, low drift.
    *   **Cons:** Require signal conditioning electronics, can be sensitive to environmental factors.
    *   **Applications:** Force control in delicate operations.

**5.2 Force/Torque Sensors:**

*   **Description:** These are specialized sensors, often located at the robot's wrist, that measure forces and torques along multiple axes (typically 6-DOF: 3 forces, 3 torques).
*   **Construction:** Usually consist of a "star" or "web" structure made of metal, with strain gauges mounted at strategic locations. The deformation of this structure under external forces/torques is measured by the strain gauges.
*   **Applications:** Precision assembly, polishing, grinding, force-controlled manipulation.
*   **Textbook Reference:** Saha, Chapter 4; Mittal & Nagrath, Chapter 5; Craig, Chapter 4; Ghosal, Chapter 3.

**Important Points to Remember:**

*   **Force vs. Torque:** Force sensors measure linear forces, while torque sensors measure rotational forces. Many robotic applications require both.
*   **Calibration:** Force sensors require rigorous calibration to ensure accurate readings.
*   **Drift:** Some force sensors can exhibit drift over time, requiring recalibration.

---

### 6. Practice Questions and Exercises

**Multiple Choice Questions:**

1.  Which of the following sensors provides a unique digital code for each distinct position, even after power loss?
    a) Incremental Encoder
    b) Potentiometer
    c) Absolute Encoder
    d) Tachometer

    **Answer:** c) Absolute Encoder
    **Explanation:** Absolute encoders store position information uniquely for each shaft position and retain it even when power is removed.

2.  Which sensor is most suitable for measuring static acceleration?
    a) Piezoelectric Accelerometer
    b) MEMS Accelerometer (Capacitive)
    c) Resolver
    d) Strain Gauge

    **Answer:** b) MEMS Accelerometer (Capacitive)
    **Explanation:** MEMS capacitive accelerometers can measure DC acceleration (like gravity) because the change in capacitance due to displacement is a stable measure of static acceleration. Piezoelectric sensors are good for dynamic acceleration only.

3.  Calculating velocity by differentiating encoder readings is prone to:
    a) Quantization error
    b) Noise amplification
    c) Hysteresis
    d) Dead zones

    **Answer:** b) Noise amplification
    **Explanation:** When you take the derivative of a signal that has even small amounts of noise, the noise gets amplified significantly, making the calculated velocity unreliable without proper filtering.

4.  A strain gauge measures force by detecting changes in:
    a) Voltage
    b) Capacitance
    c) Resistance
    d) Magnetic field

    **Answer:** c) Resistance
    **Explanation:** Strain gauges are resistive sensors whose electrical resistance changes when they are deformed by applied forces.

**Short Answer Questions:**

1.  Differentiate between absolute and incremental encoders. (Relates to CO2)
    **Answer:** Absolute encoders provide a unique digital code for each shaft position, retaining this information even after power loss. Incremental encoders generate pulses corresponding to rotation and require counting these pulses to determine position, often needing a homing sequence after power loss.

2.  Explain the working principle of an LVDT. (Relates to CO2)
    **Answer:** An LVDT uses a primary and two secondary coils with a movable magnetic core. AC voltage applied to the primary induces voltages in the secondaries. The core's position changes the magnetic coupling, resulting in a differential AC output voltage proportional to the displacement from the null position.

3.  Why are force sensors important in robotics, particularly for tasks like assembly? (Relates to CO1, CO2)
    **Answer:** Force sensors are crucial for assembly tasks to ensure proper contact, detect when parts are correctly seated, apply the right amount of force to avoid damage, and provide feedback for compliant motions. They enable robots to "feel" their environment.

4.  What is the primary advantage of using resolvers in harsh environments compared to optical encoders? (Relates to CO2)
    **Answer:** Resolvers are more robust and resistant to contaminants like dirt, oil, and vibration, making them more reliable in harsh industrial environments where optical encoders might fail due to dirt on the sensing elements.

**Practical Exercise/Problem:**

A robotic joint is driven by a motor with an attached incremental encoder. The encoder has 1000 pulses per revolution. The joint is moving at a constant angular velocity of 60 RPM.

*   Calculate the number of pulses the encoder generates per second.
*   If the sampling rate of the encoder reading is 100 Hz, what is the minimum time between encoder pulses that the system can detect?
*   If the position sensor reading is sampled at 100 Hz, and the encoder shows a change of 500 pulses between two consecutive samples, what is the angular velocity in radians per second? (Assume 1 revolution = 2π radians and 1000 pulses/revolution).

**Solution:**

*   **Pulses per second:**
    Angular velocity = 60 RPM = 1 revolution/second
    Pulses per revolution = 1000
    Pulses per second = 1000 pulses/revolution * 1 revolution/second = 1000 pulses/sec.

*   **Minimum time between pulses:**
    Sampling rate = 100 Hz means samples are taken every 1/100 seconds = 0.01 seconds.
    The system can resolve events that occur at least every 0.01 seconds.

*   **Angular velocity from encoder readings:**
    Change in pulses = 500 pulses
    Time interval between samples = 0.01 seconds
    Change in position (revolutions) = 500 pulses / 1000 pulses/revolution = 0.5 revolutions
    Angular velocity (revolutions/sec) = Change in position / Time interval = 0.5 revolutions / 0.01 sec = 50 revolutions/sec.
    Angular velocity (radians/sec) = 50 rev/sec * 2π radians/rev = 100π radians/sec ≈ 314.16 radians/sec.

---

### 7. Key Takeaways and Summary

*   **Internal sensors are the robot's "senses" of itself.** They are critical for accurate control, kinematics, and dynamics.
*   **Position sensors** (potentiometers, encoders, resolvers, LVDTs) are fundamental for knowing the robot's configuration. Absolute encoders are preferred when position memory after power loss is crucial.
*   **Velocity sensors** (tachometers, derived from position) enable speed control and smooth motion. Noise amplification is a key challenge when deriving velocity from position.
*   **Acceleration sensors** (MEMS accelerometers) provide information about the robot's dynamic state and are used in IMUs for orientation.
*   **Force sensors** (strain gauges, piezoelectric) allow robots to interact with their environment, providing force feedback for compliance and safety.
*   The choice of sensor depends on factors like required accuracy, resolution, cost, speed, and environmental conditions.
*   Understanding these sensors is the first step towards building and controlling robotic systems effectively.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
