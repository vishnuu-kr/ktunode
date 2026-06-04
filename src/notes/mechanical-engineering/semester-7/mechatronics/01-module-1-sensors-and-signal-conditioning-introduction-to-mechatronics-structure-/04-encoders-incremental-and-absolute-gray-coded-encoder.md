---
title: "Encoders: incremental and absolute, gray coded encoder."
subject: "MECHATRONICS"
module: "Module 1: Sensors and signal conditioning : Introduction to Mechatronics: Structure of Mechatronics system."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f01"
status: "completed"
scrapedAt: "2026-05-20T18:14:33.260Z"
---
# MECHATRONICS - Module 1: Sensors and Signal Conditioning

## Topic: Encoders: Incremental and Absolute, Gray Coded Encoder

---

### 1. Introduction to Mechatronics and Structure of a Mechatronics System

**1.1 What is Mechatronics?**

Mechatronics is an interdisciplinary field that integrates mechanical engineering, electrical engineering, electronics, computer engineering, and control engineering. It focuses on the synergistic design and implementation of intelligent systems that combine these disciplines to achieve enhanced functionality and performance.

**Key Characteristics:**

*   **Integration:** Blending of different engineering fields.
*   **Intelligence:** Incorporation of sensing, processing, and actuation capabilities.
*   **Automation:** Design for automated operation and control.
*   **System-Level Design:** Emphasis on the overall system rather than individual components.

**1.2 Structure of a Mechatronics System**

A typical mechatronics system can be conceptually divided into the following interconnected blocks:

*   **Mechanical System:** The physical embodiment of the system, comprising mechanical components like gears, levers, actuators, and the task it performs.
*   **Sensors:** Devices that measure physical quantities (e.g., position, velocity, temperature) and convert them into electrical signals. These provide feedback to the control system.
*   **Signal Conditioning:** Electronic circuits that process the raw sensor signals to make them suitable for input to the controller. This includes amplification, filtering, linearization, and analog-to-digital conversion (ADC).
*   **Controller:** The "brain" of the system, typically a microcontroller, PLC, or computer. It receives processed sensor data, executes control algorithms, and generates output signals.
*   **Actuators:** Devices that convert electrical signals from the controller into physical actions (e.g., motion, force). Examples include motors, solenoids, and hydraulic/pneumatic cylinders.
*   **Human-Machine Interface (HMI):** Devices that allow users to interact with the system (e.g., displays, buttons, touchscreens).

**Example:** A Robotic Arm

*   **Mechanical System:** The arm structure, joints, end-effector.
*   **Sensors:** Encoders on motor shafts (for position feedback), force sensors.
*   **Signal Conditioning:** Amplifiers for motor drivers, ADCs for force sensors.
*   **Controller:** Microcontroller calculating joint angles and motor commands.
*   **Actuators:** Servo motors driving the joints.
*   **HMI:** Joystick for manual control, display showing arm position.

**(Reference: Bolton, Chapter 1; Onwubolu, Chapter 1; Shetty & Kolk, Chapter 1)**

---

### 2. Encoders: Position Sensing

**2.1 What is an Encoder?**

An encoder is a sensor that converts angular or linear position into a coded electrical signal. They are crucial for providing feedback on the position of rotating shafts or the linear displacement of moving parts in mechatronic systems.

**2.2 Types of Encoders**

Encoders are broadly categorized into two main types:

1.  **Incremental Encoders**
2.  **Absolute Encoders**

---

### 3. Incremental Encoders

**3.1 Principle of Operation**

Incremental encoders measure *changes* in position from a known starting point. They generate a sequence of pulses that are counted by a controller to determine the displacement. They do not inherently know their absolute position.

**3.2 Construction**

*   **Disc/Strip:** A disc (for rotary) or strip (for linear) with a pattern of equally spaced opaque and transparent lines or slots.
*   **Light Source (LED):** Emits light.
*   **Photodetectors (Photodiodes/Phototransistors):** Detect light passing through the pattern.
*   **Code Wheel/Grating:** The patterned disc or strip.

**3.3 Output Signals**

Incremental encoders typically produce three output signals:

*   **Channel A:** A series of pulses representing movement.
*   **Channel B:** Identical to Channel A but phase-shifted by 90 electrical degrees. This phase shift allows the direction of rotation to be determined.
*   **Index (Z) or Home Channel:** A single pulse per revolution (for rotary encoders) or at a specific reference point (for linear encoders). This is used to establish a reference or home position.

**3.4 Direction Sensing**

By observing the sequence of pulses from Channels A and B, the controller can determine the direction of movement:

*   If A leads B, it indicates rotation in one direction (e.g., clockwise).
*   If B leads A, it indicates rotation in the opposite direction (e.g., counter-clockwise).

**3.5 Resolution**

The resolution of an incremental encoder is determined by the number of pulses per revolution (PPR) for rotary encoders or the number of pulses per unit length for linear encoders. Higher PPR means finer position detection.

**3.6 Advantages:**

*   Simpler and less expensive than absolute encoders.
*   High resolution is achievable.
*   High speed operation is possible.

**3.7 Disadvantages:**

*   Lose position information upon power loss. They require homing or referencing to re-establish a known position.
*   Susceptible to noise that can cause false pulse counts.

**3.8 Applications:**

*   Motor speed control.
*   Position feedback in servo systems (when used with homing).
*   Measuring linear displacement in conveyors or actuators.

**(Reference: Rajput, Chapter 5; Bolton, Chapter 3)**

---

### 4. Absolute Encoders

**4.1 Principle of Operation**

Absolute encoders provide a unique digital code for each distinct position of the shaft or slider. They do not require a reference point and retain their position information even after power loss.

**4.2 Construction**

*   **Disc/Strip:** Contains multiple concentric tracks or parallel strips, each with a unique binary or Gray code pattern.
*   **Light Source (LED):** Emits light.
*   **Photodetectors (Photodiodes/Phototransistors):** Multiple detectors are arranged to read the patterns on each track.
*   **Code Wheel/Grating:** The patterned disc or strip.

**4.3 Output Signals**

Absolute encoders output a binary or Gray code word, where each bit corresponds to a specific track on the disc/strip. The number of bits determines the resolution (2<sup>n</sup> positions for an n-bit encoder).

**4.4 Advantages:**

*   Retains position information even after power interruption.
*   No need for homing.
*   High immunity to noise.

**4.5 Disadvantages:**

*   More complex and expensive than incremental encoders.
*   Lower maximum speed compared to incremental encoders due to the complexity of reading multiple tracks.
*   The output data bus can be large for high resolutions.

**4.6 Types of Absolute Encoders:**

*   **Single-Turn Absolute Encoders:** Measure position within a single 360-degree rotation.
*   **Multi-Turn Absolute Encoders:** Measure position across multiple rotations using a mechanical counter or a second set of tracks.

**4.7 Applications:**

*   Robotic arms where continuous position tracking is critical.
*   CNC machines for precise tool positioning.
*   Automotive steering systems.
*   Industrial automation requiring non-volatile position data.

**(Reference: Rajput, Chapter 5; Bolton, Chapter 3)**

---

### 5. Gray Coded Encoder

**5.1 What is Gray Code?**

Gray code (also known as Reflected Binary Code) is a binary numeral system where two successive values differ in only one bit. This property is highly advantageous for encoders.

**5.2 Why Gray Code for Encoders?**

*   **Reduced Errors:** When a standard binary encoder transitions from one state to the next, multiple bits might change simultaneously. If there's a slight misalignment or timing issue, the controller might read an incorrect intermediate value. Gray code's single-bit change property minimizes this risk, as even if the transition occurs between two valid codes, the intermediate state will still be a valid Gray code with only one bit flipped.
*   **Improved Reliability:** This reduces the likelihood of misinterpretation of position data, especially in environments with electrical noise or vibration.

**5.3 Example: 3-bit Gray Code vs. Standard Binary**

| Decimal | Standard Binary | Gray Code |
| :------ | :-------------- | :-------- |
| 0       | 000             | 000       |
| 1       | 001             | 001       |
| 2       | 010             | 011       |
| 3       | 011             | 010       |
| 4       | 100             | 110       |
| 5       | 101             | 111       |
| 6       | 110             | 101       |
| 7       | 111             | 100       |

Notice how in Gray code, each successive number differs by only one bit. In standard binary, transitioning from 001 to 010 requires two bits to change.

**5.4 Application in Encoders:**

*   **Absolute Encoders:** Often use Gray code for their tracks to ensure the accuracy of position readings.
*   **Incremental Encoders:** While incremental encoders primarily use phase-shifted square waves (A, B, Z), the underlying logic or the interpretation of these signals by the controller is often designed to handle transitions reliably, indirectly benefiting from the principles of minimal change.

**(Reference: Rajput, Chapter 5; Bolton, Chapter 3)**

---

### 6. Alignment with Course Outcomes

*   **CO1: Understand the characteristics and working of sensors and choose the optimal one based on the application (Knowledge Level: K2)**
    *   This module directly addresses CO1 by explaining the working principles, characteristics (resolution, accuracy, data retention), advantages, and disadvantages of incremental and absolute encoders, enabling students to understand when to choose one over the other.
*   **CO7: Understand the use of mechatronic concepts in modern applications. (Knowledge Level: K2)**
    *   By discussing encoders and their role in feedback, this section lays the groundwork for understanding how sensors are integral to mechatronic systems and their applications in automation, robotics, and manufacturing.

---

### 7. Key Concepts and Definitions to Remember

*   **Encoder:** A sensor that converts physical position into an electrical signal.
*   **Incremental Encoder:** Measures relative changes in position, outputs pulses. Requires homing.
*   **Absolute Encoder:** Provides a unique code for each position. Retains position information.
*   **Resolution:** The smallest change in position that an encoder can detect.
*   **Channels A, B, Z:** Output signals of an incremental encoder (position, direction, index).
*   **Gray Code:** A binary code where successive values differ by only one bit, improving reliability.
*   **Homing/Referencing:** The process of moving an incremental system to a known starting position.

---

### 8. Practice Questions and Exercises

**Question 1 (CO1):**
An automated manufacturing system requires a sensor to track the precise position of a robotic arm end-effector. The system must maintain its position accurately even if the power is temporarily lost. Which type of encoder would be most suitable, and why?

**Answer 1:**
An **absolute encoder** would be most suitable. Unlike incremental encoders, absolute encoders provide a unique digital code for each position, meaning they retain their position information even after power loss. This eliminates the need for a homing sequence upon power restoration, which is critical for applications demanding continuous and immediate accurate positioning.

**Question 2 (CO1):**
Describe the primary difference in the output signals between an incremental encoder and an absolute encoder.

**Answer 2:**
*   **Incremental Encoder:** Outputs a series of pulses (e.g., on channels A and B) that represent changes in position. The total number of pulses and their phase relationship indicates the displacement and direction from a starting point. It does not inherently know its absolute position.
*   **Absolute Encoder:** Outputs a unique binary or Gray code word for each specific position. This code directly represents the absolute position of the encoder's shaft or slider, and this value is maintained even without continuous power.

**Question 3 (CO1):**
What is the main advantage of using Gray coding in absolute encoders compared to standard binary coding?

**Answer 3:**
The main advantage of Gray coding is that **only one bit changes** between successive output codes. This significantly reduces the risk of reading an incorrect intermediate position due to slight timing inaccuracies or electrical noise during a transition, leading to higher reliability and accuracy.

**Question 4 (CO1):**
A motor is driven by a system using an incremental encoder. The encoder has 1000 pulses per revolution (PPR). If the motor shaft rotates 180 degrees, how many pulses would be detected on channel A (assuming a simple count)?

**Answer 4:**
A full revolution is 360 degrees. An encoder with 1000 PPR provides 1000 pulses for a 360-degree rotation.
For 180 degrees (half a revolution):
Number of pulses = (180 degrees / 360 degrees) * 1000 pulses = 0.5 * 1000 = **500 pulses**.

**Question 5 (CO1):**
List two applications where an incremental encoder would be preferred over an absolute encoder, and explain why.

**Answer 5:**
1.  **Motor Speed Measurement:** Incremental encoders are excellent for speed measurement because their pulse output can be easily counted over time to determine rotational speed. Absolute encoders are more complex and their primary benefit (absolute position) is not needed for speed calculation.
2.  **Simple Linear Actuator Position Feedback (with homing):** If an application has a clear and reliable homing routine (e.g., moving to a limit switch at startup), an incremental encoder can be a cost-effective solution for tracking position within that working range. The lower cost and higher speed capability of incremental encoders can be advantageous here.

---

### 9. Important Points to Remember

*   **Encoder Selection is Application-Driven:** Choose between incremental and absolute based on cost, required accuracy, need for homing, and tolerance to power loss.
*   **Incremental = Relative Motion, Absolute = Fixed Position.**
*   **Gray Code = Single Bit Change = Reliability.**
*   **Resolution is Key:** Understand PPR for incremental and number of bits for absolute.
*   **Direction is crucial:** Channel B in incremental encoders provides direction information.
*   **Homing is essential for incremental systems** to establish a reference point.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
