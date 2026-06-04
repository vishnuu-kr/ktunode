---
title: "Digital to Analogue Converter"
subject: "MECHATRONIC SYSTEMS"
module: "Module 2: Actuators and mechanisms: Mechanical Actuation System"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36ba4"
status: "completed"
scrapedAt: "2026-05-23T16:42:31.403Z"
---
# MECHATRONIC SYSTEMS: Module 2: Actuators and Mechanisms: Mechanical Actuation System

## Topic: Digital to Analogue Converter (DAC)

---

### 1. Introduction to Digital-to-Analogue Conversion

**1.1 What is a Digital-to-Analogue Converter?**

A Digital-to-Analogue Converter (DAC) is an electronic device that converts a digital signal (represented by discrete binary values) into an analogue signal (a continuous voltage or current). In mechatronic systems, DACs are crucial for translating the digital commands from microcontrollers or computers into analogue control signals required by actuators.

**1.2 Why are DACs necessary in Mechatronic Systems?**

*   **Actuator Control:** Many actuators (e.g., motors, hydraulic valves, servo systems) require an analogue voltage or current to control their speed, position, or force. Microcontrollers inherently operate with digital signals. A DAC bridges this gap. (CO1, CO2)
*   **Signal Generation:** DACs can generate specific analogue waveforms (e.g., sine waves, ramps) for testing or controlling complex systems.
*   **Modulation:** In some applications, DACs are used in modulation techniques where digital data is converted into analogue signals for transmission.

**1.3 Relationship to Mechanical Actuation Systems**

DACs are a key component in the **signal conditioning** and **actuation** stages of a mechatronic system. They sit between the digital processing unit (microcontroller) and the analogue actuator.

**Key Concept:** The output of a DAC is proportional to the digital input code.

---

### 2. Principles of Operation and Types of DACs

**2.1 Basic Principle**

A DAC takes a binary input (e.g., a 4-bit number) and produces an analogue output voltage or current. The output is typically a step-wise approximation of the ideal analogue signal.

**2.2 Key Parameters of a DAC**

*   **Resolution:** The smallest change in the analogue output that can be produced by a change in the digital input. It is often expressed in bits. An N-bit DAC can resolve 2^N distinct output levels.
    *   *Example:* An 8-bit DAC can represent 2^8 = 256 different digital values, resulting in 256 distinct analogue output levels.
*   **Quantization Error:** The inherent error introduced by approximating an infinite number of analogue values with a finite number of digital steps. This error is typically +/- half the least significant bit (LSB) step.
*   **Linearity:** The degree to which the actual analogue output deviates from the ideal straight-line relationship between the digital input and analogue output.
    *   **Integral Linearity:** The maximum deviation of the DAC's actual transfer characteristic from a straight line drawn between the endpoints of its range.
    *   **Differential Linearity:** The maximum difference between the actual step size and the ideal step size for adjacent digital input codes.
*   **Settling Time:** The time it takes for the analogue output to settle within a specified tolerance (e.g., +/- 0.5 LSB) after a change in the digital input.
*   **Output Range:** The minimum and maximum analogue output values the DAC can produce.
*   **Output Type:**
    *   **Voltage Output:** Produces an analogue voltage proportional to the digital input.
    *   **Current Output:** Produces an analogue current proportional to the digital input. This current can then be converted to a voltage using a resistor.

**2.3 Common DAC Architectures**

Several architectures are used to implement DACs, each with its advantages and disadvantages in terms of speed, accuracy, and cost.

#### 2.3.1 Weighted-Resistor DAC

*   **Princ:** Uses a set of resistors with values weighted according to their binary significance (e.g., R, 2R, 4R, 8R...). A switch connects each resistor to a reference voltage (Vref) or ground, depending on the corresponding digital input bit. The outputs of these weighted resistors are summed by an operational amplifier (op-amp).
*   **Operation:**
    *   The most significant bit (MSB) is connected to the smallest resistor (R).
    *   The least significant bit (LSB) is connected to the largest resistor (2^(N-1) * R).
    *   The summed current is converted to a voltage by the op-amp.
*   **Formula:** $V_{out} = -V_{ref} \frac{D_{N-1}}{R} \cdot 2^{N-1} + \dots + \frac{D_0}{R} \cdot 2^0$ (where $D_i$ is 1 if the bit is high, 0 if low). The exact formula depends on the summing amplifier configuration and resistor values. A more common implementation uses resistors $R, 2R, 4R, \dots, 2^{N-1}R$.
*   **Advantages:** Simple concept.
*   **Disadvantages:**
    *   Requires a wide range of resistor values, which can be difficult to manufacture with precision, especially for higher resolutions.
    *   The input resistance seen by the digital logic can vary, leading to potential loading issues.
*   **Textbook Reference:** Bolton, Chapter 11, discusses resistor networks for signal conversion. Histand & Alciatore, Chapter 4, covers digital interfaces and DACs.

#### 2.3.2 R-2R Ladder DAC

*   **Princ:** A simpler and more practical implementation compared to the weighted-resistor DAC. It uses only two resistor values: R and 2R. The resistors are arranged in a ladder-like structure.
*   **Operation:**
    *   Each digital bit controls a switch that connects a node in the ladder to either ground or a reference voltage (Vref).
    *   The structure is designed so that each bit contributes a specific fraction of the reference voltage to the output, with the MSB contributing the largest fraction and the LSB the smallest.
    *   The output is typically taken from the end of the ladder and fed to an op-amp buffer.
*   **Advantages:**
    *   Uses only two resistor values, making it easier to manufacture with good accuracy.
    *   More consistent input impedance.
*   **Disadvantages:**
    *   Requires precise matching of R and 2R resistors.
    *   Slower than some other types due to ladder network delays.
*   **Textbook Reference:** Bolton, Chapter 11. Histand & Alciatore, Chapter 4. Shetty & Kolk, Chapter 5, discuss DACs in the context of microcontrollers and actuators.

#### 2.3.3 String DAC (or Thermometer Code DAC)

*   **Princ:** Uses a series of equal resistors or voltage dividers. Each digital bit controls a switch that connects a specific point in the string to the output.
*   **Operation:** For an N-bit DAC, there are 2^N - 1 segments. If the digital input is '101' (3 bits), the first and third switches are closed, connecting the corresponding points in the string to the output.
*   **Advantages:** Very fast conversion, good linearity.
*   **Disadvantages:** Requires a large number of resistors and switches, making it complex and expensive for higher resolutions.
*   **Textbook Reference:** Mentioned in advanced texts on digital electronics and DACs.

#### 2.3.4 Current-Steering DAC

*   **Princ:** Uses switched current sources instead of voltage sources. Digital bits control switches that steer a fixed amount of current to either an output node or a ground node.
*   **Advantages:** Very fast, suitable for high-speed applications.
*   **Disadvantages:** Linearity can be affected by switch characteristics and current source matching.

**Important Point:** The R-2R ladder DAC is the most common type found in general-purpose mechatronic applications due to its balance of performance, cost, and ease of implementation.

---

### 3. Implementing DACs in Mechatronic Systems

**3.1 Microcontroller Interfacing**

Microcontrollers (MCUs) are the brains of most mechatronic systems. They provide digital output ports that can be directly interfaced with DACs.

*   **Parallel Interface:** The digital data bits are presented to the DAC on multiple output pins simultaneously. This is generally faster than serial interfaces.
*   **Serial Interface (e.g., SPI, I2C):** The digital data bits are sent sequentially over a few pins. This is simpler in terms of pin count but can be slower.
*   **Microcontroller's Internal DAC:** Many modern MCUs have integrated DAC peripherals. This simplifies the hardware design by eliminating the need for an external DAC chip.

**3.2 Choosing a DAC**

When selecting a DAC for a mechatronic system, consider:

*   **Required Resolution:** Determines the precision of the analogue control signal.
*   **Speed Requirements (Settling Time):** Critical for high-speed control loops or rapidly changing actuator commands.
*   **Accuracy and Linearity:** Essential for precise control.
*   **Output Type (Voltage/Current):** Must match the actuator's input requirements.
*   **Power Consumption:** Important for battery-powered or energy-constrained systems.
*   **Cost:** A significant factor in product design.
*   **Interface Type:** Compatibility with the chosen microcontroller.

**3.3 DAC as an Actuator Control Component**

*   **Motor Control:** A DAC output can be used to control the speed of a DC motor by varying the voltage applied to the motor driver.
*   **Servo Control:** The position of a servo motor is often controlled by Pulse Width Modulation (PWM). While PWM is digital, the duty cycle can be generated by a DAC's analogue output that is then compared to a triangle wave, or the DAC can directly generate a voltage proportional to the desired position.
*   **Hydraulic/Pneumatic Valve Control:** DACs can provide the analogue current or voltage to control proportional valves, allowing for fine adjustments of fluid flow and pressure.

**Textbook Reference:** Bishop, Chapter 6, covers microcontroller interfacing with external components, including DACs for control. Histand & Alciatore, Chapter 5, provides examples of DAC usage in motor control.

---

### 4. Examples and Applications

**4.1 Example: Controlling a DC Motor Speed with a DAC**

1.  **Digital Input:** A microcontroller determines the desired motor speed and converts it into a digital value (e.g., an 8-bit number from 0 to 255).
2.  **DAC Conversion:** This digital value is sent to an 8-bit DAC. The DAC outputs an analogue voltage proportional to the digital input (e.g., 0V for 0, 5V for 255, with a step size of 5V/255 ≈ 19.6mV).
3.  **Amplification (Optional):** The DAC output voltage might need to be amplified by an op-amp to provide sufficient current or voltage to drive the motor.
4.  **Motor Driver:** The analogue signal is fed into a motor driver circuit (e.g., an H-bridge) which then controls the power delivered to the DC motor. Higher voltage from the DAC results in higher motor speed.

**4.2 Example: Generating a Ramp Signal for a Robotic Arm**

1.  **Path Planning:** A robot's motion control system calculates a desired trajectory for a robotic arm. This trajectory is often represented as a series of desired positions over time.
2.  **Digital Representation:** The microcontroller converts the desired positions into digital data.
3.  **DAC for Smooth Movement:** A DAC takes this digital data and generates a smoothly increasing or decreasing analogue voltage.
4.  **Actuator Input:** This analogue voltage is then used to control the servo motor controlling the arm's joint, ensuring a smooth and controlled movement.

**4.3 Example: Proportional Valve Control in a Hydraulic System**

1.  **System Demands:** A pressure sensor or other feedback mechanism indicates the need to adjust hydraulic pressure.
2.  **Controller Decision:** The microcontroller calculates the required valve opening based on the feedback.
3.  **DAC for Proportional Control:** The digital command is sent to a DAC.
4.  **Valve Actuation:** The DAC's analogue output (voltage or current) is fed to the proportional hydraulic valve. This analogue signal precisely controls the amount of fluid flow through the valve, thereby controlling pressure or actuator speed.

**CO Alignment:** These examples directly demonstrate the application of DACs for controlling mechanical actuators (motors, valves), aligning with CO1 and CO2. They also show how microcontrollers interact with DACs (CO3) to achieve specific system responses (CO4).

---

### 5. Practice Questions and Exercises

**Question 1:**
An 8-bit DAC has a reference voltage of 5V. What is the analogue output voltage if the digital input is `10000000` (binary)? What is the step size (LSB voltage)?

**Question 2:**
Explain why an R-2R ladder DAC is generally preferred over a weighted-resistor DAC in many mechatronic applications.

**Question 3:**
You are designing a system to control a robot's gripper, which requires a precise analogue position signal. Which parameter of a DAC would be most critical for ensuring this precision, and why?

**Question 4:**
A microcontroller needs to control a DC motor's speed using a DAC. The motor driver requires an analogue voltage between 0V and 10V. If the microcontroller has 10-bit PWM output that can be converted to an analogue signal by an external DAC, and the desired speed is set by a 10-bit digital value from the microcontroller, describe the signal flow. If the microcontroller's internal ADC reads a speed feedback value, how would a DAC be used in a closed-loop control system for motor speed?

---

### 6. Answers to Practice Questions

**Answer 1:**
*   The digital input `10000000` binary is equal to 128 in decimal.
*   With an 8-bit DAC, there are 2^8 = 256 possible output levels (from 0 to 255).
*   The step size (LSB voltage) is the reference voltage divided by the total number of steps minus one (or by 2^N if considering the range from 0 to Vref). A common convention is to divide by 2^N.
    *   Step size = Reference Voltage / 2^N = 5V / 2^8 = 5V / 256 ≈ 0.0195V or 19.5mV.
*   The output voltage for `10000000` (128 decimal) is:
    *   Output Voltage = (Digital Value) * (Step Size)
    *   Output Voltage = 128 * (5V / 256) = 128/256 * 5V = 0.5 * 5V = 2.5V.

**Answer 2:**
An R-2R ladder DAC is generally preferred over a weighted-resistor DAC because:
*   **Resistor Precision:** It uses only two resistor values (R and 2R), which are easier to manufacture with high precision and to match compared to the wide range of resistor values (R, 2R, 4R, 8R, ..., 2^(N-1)R) required by the weighted-resistor DAC. This leads to better linearity and accuracy.
*   **Simplicity of Design:** The structure is more uniform and easier to lay out on an integrated circuit.
*   **Input Impedance:** The input impedance is more consistent, reducing potential loading issues with the driving digital logic.

**Answer 3:**
The most critical parameter for ensuring precise analogue control of the gripper position would be the **resolution** of the DAC.
*   **Reasoning:** Higher resolution means the DAC can divide the output range into more discrete steps. This allows for finer control of the actuator, enabling more precise adjustments to the gripper's position. If the DAC has low resolution, small changes in the digital input might not result in any discernible change in the analogue output, limiting the precision of the gripper's movement. **Linearity** is also critical for accuracy, ensuring that each step corresponds to an equal increment in output.

**Answer 4:**
*   **Signal Flow for Open-Loop Control:**
    1.  The desired motor speed is set by a 10-bit digital value within the microcontroller's software.
    2.  This 10-bit digital value is sent to the external 10-bit DAC via a suitable interface (e.g., parallel or serial like SPI).
    3.  The DAC converts this digital value into an analogue voltage between 0V and 10V.
    4.  This analogue voltage is then fed into the motor driver circuit, which amplifies and conditions the signal to control the DC motor's speed.

*   **DAC in Closed-Loop Control:**
    1.  **Feedback:** The microcontroller's internal ADC continuously reads the actual motor speed from a feedback sensor (e.g., an encoder or tachometer).
    2.  **Error Calculation:** The microcontroller compares the desired speed (from user input or trajectory) with the actual speed read by the ADC. The difference is the error signal.
    3.  **Control Algorithm:** Based on the error, the microcontroller's control algorithm (e.g., PID controller) calculates a new digital command to adjust the motor speed.
    4.  **DAC Output:** This new digital command is sent to the DAC.
    5.  **Actuator Adjustment:** The DAC outputs an analogue voltage that adjusts the motor driver, thereby changing the voltage/current to the motor to reduce the error and bring the actual speed closer to the desired speed. The DAC is thus used to translate the digital output of the controller into an analogue signal that can drive the actuator.

---

### 7. Important Points to Remember

*   DACs are essential for translating digital control signals from microcontrollers into analogue signals that actuators can understand.
*   The **resolution** of a DAC determines the fineness of the analogue output.
*   The **R-2R ladder DAC** is a common and practical architecture due to its use of only two resistor values.
*   Key DAC parameters to consider are resolution, linearity, settling time, and output type.
*   DACs are integral to the **actuation subsystem** of mechatronic systems, enabling precise control of various mechanical components.
*   Modern MCUs often include internal DACs, simplifying system design.

---

This comprehensive study note aims to cover the topic of Digital-to-Analogue Converters in the context of Mechatronic Systems, aligning with the specified learning and course outcomes and referencing key concepts from the provided textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
