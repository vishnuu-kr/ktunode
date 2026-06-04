---
title: "Working principles of encoders and resolvers."
subject: "ROBOTICS AND AUTOMATION"
module: "Module 3: Actuation and Feedback Mechanisms"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff19b"
status: "completed"
scrapedAt: "2026-05-23T18:09:53.308Z"
---
# ROBOTICS AND AUTOMATION

## Module 3: Actuation and Feedback Mechanisms

### Topic: Working Principles of Encoders and Resolvers

This topic focuses on understanding how encoders and resolvers, crucial feedback mechanisms in robotics, operate to provide positional and velocity information. This knowledge is essential for precise robot control and aligns with **CO1** (describing basic components), **CO4** (identifying and comparing sensors), and is foundational for **CO2** (applying kinematics) and **CO3** (implementing controllers).

---

### 1. Introduction to Feedback Mechanisms in Robotics

**Key Concept:** Feedback mechanisms are essential for robots to know their current state (position, velocity, orientation) and compare it to the desired state. This comparison allows for error correction and precise movement control.

*   **Why Feedback is Crucial:**
    *   **Accuracy:** Ensures the robot reaches the intended position or follows the desired trajectory.
    *   **Precision:** Allows for repeatable movements.
    *   **Stability:** Helps maintain control even in the presence of disturbances (e.g., load variations, friction).
    *   **Closed-Loop Control:** Enables sophisticated control strategies like PID control.

*   **Types of Feedback:**
    *   **Positional Feedback:** Determines the angle or linear displacement of a robot joint or end-effector.
    *   **Velocity Feedback:** Measures the rate of change of position.
    *   **Force/Torque Feedback:** Senses the forces or torques applied by or to the robot.

*   **Role in Robot Architecture:** Feedback sensors are typically integrated with actuators (motors) to provide closed-loop control of each joint.

---

### 2. Encoders: Principles and Types

**Key Concept:** Encoders are digital or analog sensors that convert rotary or linear motion into an electrical signal (typically pulses or a digital code) representing position and/or velocity.

**(Referenced from: Groover MP, "Industrial Robotics", Chapter 5 - Manipulator Components)**

#### 2.1. Incremental Encoders

**Key Concept:** Incremental encoders generate a series of pulses as the shaft rotates. The number of pulses corresponds to the amount of rotation, and the sequence of pulses on multiple channels can indicate the direction of rotation.

*   **Working Principle:**
    *   Consist of a disc with evenly spaced markings (slots or lines) and an optical sensor (light emitter and detector).
    *   As the disc rotates, the light beam is interrupted, generating pulses.
    *   **Quadrature Encoding:** Two tracks (Channel A and Channel B) with markings slightly offset are used. This offset allows the controller to determine the direction of rotation based on which channel leads the other.
        *   **Channel A leads B:** Clockwise rotation (or one direction).
        *   **Channel B leads A:** Counter-clockwise rotation (or the opposite direction).
    *   **Index (Z) Pulse:** An additional pulse is generated once per revolution, providing a reference or home position.

*   **Output:**
    *   **Quadrature Signals (A, B):** Square wave pulses.
    *   **Direction:** Derived from the phase relationship between A and B.
    *   **Count:** The total number of pulses counted since a known starting point gives the relative position.

*   **Types of Incremental Encoders:**
    *   **Optical:** Most common, uses light.
    *   **Magnetic:** Uses magnetic fields and Hall effect sensors or magnetoresistive sensors.
    *   **Capacitive:** Uses changes in capacitance.

*   **Resolution:** Defined by the number of pulses per revolution (PPR) or the number of lines/slots on the disc. Higher PPR means higher resolution.

*   **Velocity Calculation:** Velocity can be calculated by counting pulses over a specific time interval.
    *   $Velocity = (Number of pulses / Time interval) * Resolution \times Conversion Factor$

*   **Example:** A robot arm joint controlled by a motor with an incremental encoder. As the motor rotates, the encoder generates A and B pulses. The controller counts these pulses to track the joint's angle. If the encoder has 1000 PPR, and the motor is geared down by 100:1, the effective resolution at the joint is $1000 \times 100 = 100,000$ pulses per revolution of the joint.

**(Referenced from: Spong, Hutchinson, Vidyasagar, "Robot Modeling and Control", Chapter 4 - Robot Kinematics)** - While not directly on encoders, this chapter emphasizes the need for accurate joint angle measurements, which encoders provide.

#### 2.2. Absolute Encoders

**Key Concept:** Absolute encoders provide a unique digital code for each specific position of the shaft, even after power loss.

*   **Working Principle:**
    *   Consist of a disc with multiple concentric tracks, each with a unique pattern of opaque and transparent regions.
    *   Each track is read by a separate sensor.
    *   The combination of sensor outputs across all tracks forms a unique binary code representing the absolute position.
    *   **Gray Code:** Often used to ensure that only one bit changes at a time when moving between adjacent positions, minimizing errors.

*   **Output:** A unique digital word (binary or Gray code) representing the absolute angular or linear position.

*   **Advantages over Incremental Encoders:**
    *   No need for homing after power cycling, as the position is known immediately.
    *   Less susceptible to counting errors due to noise or power interruptions.

*   **Disadvantages:**
    *   More complex and expensive.
    *   Lower resolution for a given number of bits compared to incremental encoders (e.g., a 10-bit absolute encoder provides 1024 positions, whereas a 1000 PPR incremental encoder can provide much finer positional information if counted properly).

*   **Types:**
    *   **Optical:** Similar principle to incremental but with multiple tracks.
    *   **Magnetic:** Uses magnetic patterns.

*   **Example:** A robot's base rotation. An absolute encoder ensures that even after the robot is powered off and on, the controller knows the exact orientation of the base without needing to perform a "homing" procedure.

**(Referenced from: Craig, "Introduction to Robotics: Mechanics and Control", Chapter 3 - Kinematics)** - Discusses joint variables and their measurement, highlighting the need for reliable position sensing.

---

### 3. Resolvers: Principles and Types

**Key Concept:** Resolvers are analog rotary sensors that provide continuous, high-resolution measurements of angular position and velocity by using electromagnetic principles. They are known for their ruggedness and reliability in harsh environments.

**(Referenced from: Groover MP, "Industrial Robotics", Chapter 5 - Manipulator Components)**

*   **Working Principle:**
    *   Consist of a stator (stationary part) and a rotor (rotating part).
    *   **Stator:** Has two windings located 90 degrees apart electrically (e.g., sine and cosine windings).
    *   **Rotor:** Has a single winding, or two windings physically offset by 90 degrees, which acts as a transformer.
    *   An AC excitation voltage is applied to the rotor winding (or a reference winding on the stator).
    *   As the rotor rotates, the magnetic coupling between the rotor and the stator windings changes.
    *   The output voltages from the stator windings are modulated by the sine and cosine of the rotor's angle ($\theta$).
        *   $V_{sine} = V_{ref} \cdot \sin(\theta) \cdot \cos(\omega t)$
        *   $V_{cosine} = V_{ref} \cdot \cos(\theta) \cdot \cos(\omega t)$
        Where $V_{ref}$ is the excitation voltage and $\omega$ is the excitation frequency.

*   **How Position is Determined:**
    *   A **Resolver-to-Digital Converter (RDC)** is used to process the analog sine and cosine outputs.
    *   The RDC typically uses trigonometric identities and signal processing to calculate the angle. A common method involves a phase-shift detection or a tracking loop.
    *   The output of the RDC is a digital representation of the angle.

*   **Velocity Sensing:** Velocity information can be derived from the rate of change of the resolver's output angle or by using specialized velocity resolver outputs.

*   **Types of Resolvers:**
    *   **Sinusoidal Resolvers:** Produce pure sine and cosine outputs.
    *   **Cosinusoidal Resolvers:** Similar to sinusoidal but with different winding configurations.
    *   **Brushless Resolvers:** Eliminate the need for brushes, improving reliability and reducing maintenance.

*   **Advantages:**
    *   **Robustness:** Highly resistant to shock, vibration, extreme temperatures, and contaminants (oil, dirt), making them suitable for harsh industrial environments.
    *   **High Resolution:** Can achieve very fine angular resolution with appropriate RDCs.
    *   **Continuous Output:** Provides analog signals that can be directly processed for both position and velocity.
    *   **No inherent ambiguity:** Unlike incremental encoders, resolvers don't have a "count" that can be lost.

*   **Disadvantages:**
    *   **Analog Output:** Requires an RDC for digital processing, adding complexity and cost.
    *   **Lower Bandwidth:** Generally have lower bandwidth than optical encoders.
    *   **Bulky:** Can be larger than encoders.

*   **Example:** A robotic welding arm operating in a dirty, hot environment. A resolver on its joints would be preferred over an optical encoder due to its superior durability and resistance to environmental factors.

**(Referenced from: Craig, "Introduction to Robotics: Mechanics and Control", Chapter 3 - Kinematics)** - Again, highlights the importance of accurate joint angle measurement for kinematic calculations.

---

### 4. Comparison: Encoders vs. Resolvers

**Key Concept:** Choosing between encoders and resolvers depends on the specific application requirements, considering factors like accuracy, cost, environment, and need for homing.

| Feature          | Incremental Encoder                               | Absolute Encoder                                 | Resolver                                                               |
| :--------------- | :------------------------------------------------ | :----------------------------------------------- | :--------------------------------------------------------------------- |
| **Output**       | Digital pulses (A, B, Z)                          | Digital code (unique for each position)          | Analog sine/cosine voltage signals                                     |
| **Position Data**| Relative (requires homing)                        | Absolute (known upon power-up)                   | Absolute (known upon power-up, after RDC conversion)                   |
| **Homing**       | Required after power loss                         | Not required                                     | Not required                                                           |
| **Complexity**   | Simple to interface (counts pulses)               | Simple to interface (reads digital word)         | Requires Resolver-to-Digital Converter (RDC) for digital processing    |
| **Cost**         | Generally lower                                   | Moderate to high                                 | Moderate to high (encoder + RDC)                                       |
| **Resolution**   | High (dependent on PPR)                           | Moderate (dependent on bits)                     | High (dependent on RDC)                                                |
| **Velocity**     | Calculated from pulse frequency                   | Calculated from position changes                 | Derived from analog signals or specialized outputs                     |
| **Environment**  | Sensitive to dirt, shock, vibration (optical)     | More robust than incremental, but still sensitive | Highly robust to shock, vibration, temperature, dirt                   |
| **Data Loss**    | Susceptible to pulse count errors                 | Not susceptible to count errors                  | No inherent data loss issues (as position is continuously derived)     |
| **Bandwidth**    | Generally higher                                  | Moderate                                         | Generally lower                                                        |
| **Typical Use**  | General robotics, machine tools, printers         | Robotics requiring no homing, automation         | Harsh industrial environments, aerospace, high-performance servos      |

**(Referenced from: Groover MP, "Industrial Robotics", Chapter 5 - Manipulator Components)** - Groover's text provides a practical overview of component selection for industrial robots.

---

### 5. Application in Robotics

*   **Robot Joint Control:** Both encoders and resolvers are used to measure the angular position of robot joints, enabling precise control of each actuator. This directly supports **CO1** and **CO4**.
*   **End-Effector Position:** By combining joint angle information from these sensors, forward kinematics can be used to determine the position and orientation of the robot's end-effector, crucial for **CO2**.
*   **Velocity Control:** Feedback on joint velocities, obtained from encoders (pulse frequency) or resolvers, is essential for implementing smooth and dynamic motion control strategies, supporting **CO3**.
*   **Path Following:** Accurate position feedback allows the robot to follow predefined trajectories with high fidelity.
*   **Force Control:** While not directly providing force feedback, precise positional control is a prerequisite for many force control strategies.

---

### 6. Important Points to Remember

*   **Incremental encoders provide relative position and require homing.**
*   **Absolute encoders provide absolute position and do not require homing.**
*   **Resolvers provide absolute analog position and velocity information and are very robust.**
*   **The choice between encoder and resolver depends heavily on the operating environment and cost constraints.**
*   **Resolver output requires a dedicated RDC for conversion to digital data.**
*   **Higher resolution in encoders is achieved through more pulses per revolution (PPR) or finer track patterns.**
*   **Quadrature encoding (A/B channels) is key for direction sensing in incremental encoders.**

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary difference between an incremental encoder and an absolute encoder regarding position information after a power interruption?
**Answer:** An absolute encoder retains its position information after a power interruption, whereas an incremental encoder loses its relative position count and requires a homing routine to re-establish a known reference point.

**Question 2:**
A robot arm joint uses a motor with an incremental encoder that has 500 PPR. The motor is connected to the joint via a gearbox with a ratio of 50:1 (motor:joint). What is the effective resolution in pulses per degree of the joint?
**Answer:**
*   Resolution at motor shaft = 500 PPR
*   Gearbox ratio = 50:1
*   Effective resolution at joint = 500 PPR * 50 = 25,000 pulses per revolution of the joint.
*   Revolutions per degree = 1 degree / 360 degrees/revolution = 1/360 revolutions.
*   Effective resolution in pulses per degree = 25,000 pulses/revolution * (1/360) revolutions/degree
*   Effective resolution ≈ 69.44 pulses/degree.

**Question 3:**
Under what environmental conditions would a resolver be preferred over an optical encoder for a robot's joint sensor?
**Answer:** A resolver would be preferred in harsh environments characterized by high temperatures, shock, vibration, dirt, oil, or other contaminants that could degrade the performance or damage an optical encoder.

**Question 4:**
Explain how a Resolver-to-Digital Converter (RDC) typically processes resolver signals to determine angular position.
**Answer:** An RDC receives the analog sine and cosine voltage outputs from the resolver. It uses signal processing techniques, often involving trigonometric calculations or a tracking loop, to extract the angle $\theta$ from the modulated signals. For example, the ratio of the two signals ($V_{sine} / V_{cosine}$) can be used to compute the tangent of the angle, from which the angle itself is derived using the arctangent function.

**Question 5:**
An application requires a robot to start up and immediately know its precise orientation without any manual intervention. Which type of encoder would be most suitable, and why?
**Answer:** An absolute encoder would be most suitable. This is because absolute encoders provide a unique digital code for each shaft position, meaning the controller knows the exact orientation of the joint as soon as power is applied, eliminating the need for a homing sequence.

---

This set of notes covers the working principles of encoders and resolvers, their types, advantages, disadvantages, and applications in robotics, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
