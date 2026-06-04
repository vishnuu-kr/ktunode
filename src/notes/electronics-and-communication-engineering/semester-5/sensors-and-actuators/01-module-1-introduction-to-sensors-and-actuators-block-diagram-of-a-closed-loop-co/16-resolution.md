---
title: "Resolution."
subject: "SENSORS AND ACTUATORS"
module: "Module 1: Introduction to Sensors and actuators : Block diagram of a closed loop control System"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea6a"
status: "completed"
scrapedAt: "2026-05-23T17:57:49.300Z"
---
# SENSORS AND ACTUATORS: Module 1 - Introduction to Sensors and Actuators

## Topic: Resolution

---

### 1. Introduction to Resolution

**1.1 What is Resolution?**

Resolution, in the context of sensors and actuators, refers to the **smallest change in the measured physical quantity that a sensor can detect and accurately represent as a distinct change in its output signal.** It is a measure of a sensor's sensitivity to fine variations.

For actuators, resolution relates to the **smallest incremental change in the actuator's output (e.g., position, force, speed) that can be commanded and achieved.**

**1.2 Importance of Resolution**

*   **Precision:** Higher resolution allows for more precise measurements and finer control over processes.
*   **Accuracy:** While not directly the same as accuracy, poor resolution can limit the achievable accuracy of a system.
*   **System Performance:** The resolution of a sensor directly impacts the minimum step size in a control loop.

---

### 2. Resolution in Sensors

**2.1 Definition of Sensor Resolution**

Sensor resolution is the **minimum detectable change in the input physical quantity that produces a discernible change in the sensor's output.**

**2.2 Factors Affecting Sensor Resolution**

*   **Quantization:** This is a primary factor in digital sensors. The analog output of a sensor is converted into a digital signal, which is inherently discrete. The number of bits used in the analog-to-digital converter (ADC) determines the quantization levels and thus the resolution.
    *   **Formula:** If an ADC has $N$ bits, it can represent $2^N$ distinct output levels. If the sensor's input range is $R$, then the resolution can be approximated as $R / 2^N$.
*   **Noise:** Electrical noise (thermal noise, shot noise, etc.) within the sensor and its associated electronics can mask small changes in the input signal. If a change is smaller than the noise level, it cannot be reliably detected.
*   **Drift:** Changes in sensor output over time or due to environmental factors (temperature, pressure) can obscure small variations in the measured quantity.
*   **Linearity and Hysteresis:** Non-linearities and hysteresis in the sensor's response can affect the perceived resolution.
*   **Sensor Design and Construction:** The physical properties of the sensing element and the manufacturing tolerances play a crucial role.

**2.3 Quantifying Sensor Resolution**

*   **Digital Sensors (ADC-based):**
    *   **Least Significant Bit (LSB):** The smallest increment in the digital output. For an $N$-bit ADC with a full-scale range $V_{FS}$ and reference voltage $V_{ref}$, the LSB voltage is typically $V_{ref} / 2^N$.
    *   **Input Quantization Step:** The smallest change in input quantity that corresponds to one LSB of output. For a sensor with a transfer function $V_{out} = m \times V_{in} + c$, where $m$ is the sensitivity, the input resolution is approximately $LSB_{voltage} / m$.
*   **Analog Sensors:**
    *   Often specified as the smallest change in the input quantity that causes a noticeable change in the output, or the smallest increment in the output signal (e.g., voltage, current). This can be limited by the sensitivity of the sensor and the precision of the measurement instrument.

**2.4 Examples of Sensor Resolution**

*   **Digital Thermometer with 0.1°C Resolution:** This means it can display temperature changes of at least 0.1°C. A change from 25.3°C to 25.4°C would be registered as a distinct value.
*   **Rotary Encoder with 1000 Pulses per Revolution:** This provides a resolution of $360^\circ / 1000 = 0.36^\circ$ for angular position.
*   **Load Cell with a 16-bit ADC:** If the load cell can measure up to 100 kg and has a 16-bit ADC, its theoretical digital resolution is approximately $100 \text{ kg} / 2^{16} \approx 1.5 \text{ grams}$.

**2.5 Key Takeaways for Sensor Resolution:**

*   It's the smallest detectable input change.
*   Digital sensors are limited by the number of bits in their ADC.
*   Noise and drift are critical limiting factors.

---

### 3. Resolution in Actuators

**3.1 Definition of Actuator Resolution**

Actuator resolution is the **smallest incremental change in the actuator's output (e.g., position, speed, force) that can be commanded or achieved and reliably controlled.**

**3.2 Types of Actuators and Resolution**

*   **Stepper Motors:** Have inherent discrete steps. Their resolution is determined by the number of steps per revolution and any micro-stepping capability.
    *   *Example:* A stepper motor with 200 steps per revolution, without micro-stepping, has a resolution of $360^\circ / 200 = 1.8^\circ$ per step. With 1/10 micro-stepping, the resolution becomes $0.18^\circ$ per step.
*   **Servo Motors:** Resolution depends on the encoder feedback (if used) and the motor's internal gearing. The control system's ability to command fine movements also plays a role.
*   **Hydraulic/Pneumatic Cylinders:** Resolution is often limited by the precision of the control valve and the fluid flow characteristics. Small movements might be difficult to achieve precisely due to valve deadband, leakage, or the discrete nature of solenoid actuation.
    *   *Reference:* Andrew Parr's "Hydraulics and Pneumatics" would detail factors like valve orifice size and response time affecting precise small movements.
*   **Linear Actuators (e.g., Lead Screw):** Resolution is determined by the lead of the screw (distance moved per revolution of the motor) and the motor's step resolution (if a stepper or servo motor is used).
    *   *Example:* A lead screw with a pitch of 2 mm (moves 2 mm per revolution) driven by a stepper motor with 200 steps/revolution has a linear resolution of $2 \text{ mm} / 200 \text{ steps} = 0.01 \text{ mm}$ per step.
*   **Solenoids:** Typically have limited resolution, often being an "on/off" device. For proportional solenoids, resolution is related to the controllability of the current driving them.

**3.3 Factors Affecting Actuator Resolution:**

*   **Control System Resolution:** The controller's ability to generate fine control signals (e.g., PWM duty cycle, current levels).
*   **Mechanical Design:** Gearing ratios, backlash in gears, lead screw pitch, valve characteristics, and friction.
*   **Feedback Mechanisms:** The resolution of any feedback sensor (encoder, position sensor) used to monitor the actuator's state.
*   **Driving Electronics:** Precision of current or voltage control.

**3.4 Key Takeaways for Actuator Resolution:**

*   It's the smallest controllable output change.
*   Often determined by the motor's steps/resolution and mechanical linkages.
*   Control system precision is crucial.

---

### 4. Resolution in the Context of a Closed-Loop Control System

**4.1 Interaction of Sensor and Actuator Resolution**

In a closed-loop system, the resolution of the entire system is often limited by the **lowest resolution component**, typically the sensor.

*   **Sensor's Role:** The sensor measures the process variable. If its resolution is poor, it cannot detect small deviations from the setpoint.
*   **Controller's Role:** The controller receives the sensor's output and decides on an action. Its decision-making is based on the resolution of the sensor.
*   **Actuator's Role:** The actuator executes the controller's command. If the actuator's resolution is lower than the controller's command increments (which are based on sensor resolution), it cannot accurately implement the desired change.

**4.2 Example Scenario:**

Consider a temperature control system:

*   **Setpoint:** 25.0°C
*   **Sensor:** Thermistor with a non-linear response, and an ADC that outputs discrete values. Let's say the sensor + ADC can only reliably distinguish between 24.9°C and 25.1°C (resolution of 0.2°C).
*   **Controller:** A PID controller.
*   **Actuator:** A heater controlled by a Solid State Relay (SSR) switching it on/off.

If the actual temperature is 24.95°C, the sensor might report 24.9°C or 25.0°C depending on its exact measurement. If it reports 24.9°C, the controller might turn the heater on. If it reports 25.0°C, it might do nothing. The controller cannot "see" the 0.05°C difference. The actuator's resolution (on/off) is much coarser than the desired control, but the sensor's resolution is the primary bottleneck in detecting the small error.

**4.3 Impact on System Performance:**

*   **Control Precision:** Poor overall resolution leads to imprecise control, where the system might oscillate around the setpoint or fail to reach it accurately.
*   **System Stability:** In some cases, insufficient resolution can lead to instability if the controller overreacts to perceived small errors that are actually below the system's resolution.

**4.4 Textual References:**

*   **Jacob Fraden's "Handbook of Modern Sensors" (Chapter on Sensor Characteristics):** Likely discusses resolution as a key performance parameter, detailing how noise and quantization limit it. Fraden would emphasize the fundamental limits imposed by the physics of sensing and electronics.
*   **K. Krishnaswamy's "Process Control" (Chapter on Control System Components):** Would explain how sensor and actuator characteristics, including resolution, affect the overall performance and tuning of a control loop. Krishnaswamy would likely use examples from process industries.
*   **Robert H. Bishop's "Mechatronic Systems, Sensors and Actuators Fundamentals and Modelling":** Would provide a consolidated view, explaining how sensor resolution directly influences the control signal sent to the actuator and thus the actuator's achievable output resolution.

---

### 5. Learning Outcome Coverage

*   **CO1: Describe Sensor Fundamentals (Knowledge Level: K2)**
    *   This section covered the fundamental definition of resolution as a key sensor characteristic.
*   **CO2: Explain the basic principles and concepts of commonly used different types of sensors, including their purpose, how they work, and the various types of sensors available. (Knowledge Level: K2)**
    *   While not detailing specific sensor types, the principles of resolution (quantization, noise) apply to many sensor types discussed in this course. The explanation of digital sensor resolution directly relates to ADCs.
*   **CO3: Illustrate the working principles of smart sensors (Knowledge Level: K2)**
    *   Smart sensors often incorporate higher-resolution ADCs and digital processing, making resolution a critical aspect of their improved performance.
*   **CO4: Explain the working principle of different types of actuators. (Knowledge Level: K2)**
    *   This section directly addressed actuator resolution, explaining how it's determined by mechanical design, motor stepping, and control systems.

---

### 6. Important Points to Remember

*   **Resolution vs. Accuracy:** Resolution is the smallest *detectable* change; accuracy is how close the measurement is to the *true* value. A system can have high resolution but poor accuracy.
*   **Resolution is a Limitation:** It defines the finest detail a system component can "see" or "do."
*   **Digital Limitation:** For digital sensors, the number of bits in the ADC is a primary determinant of resolution.
*   **System Bottleneck:** In a closed-loop system, the component with the lowest resolution often dictates the overall system resolution.
*   **Actuator Control:** Actuator resolution is tied to both its inherent stepping/increment and the precision of the control signals it receives.

---

### 7. Practice Questions

**Question 1:**
A digital temperature sensor uses an 8-bit Analog-to-Digital Converter (ADC) to measure temperatures from 0°C to 100°C. What is the theoretical resolution of this sensor in °C?

**Answer 1:**
The ADC has 8 bits, meaning it can represent $2^8 = 256$ distinct levels.
The total measurement range is 100°C.
Theoretical Resolution = Range / Number of Levels
Theoretical Resolution = 100°C / 256
Theoretical Resolution ≈ 0.39°C

**Question 2:**
A stepper motor with a step angle of 1.8° is used to drive a linear actuator with a lead screw pitch of 4 mm. If the system uses full steps only, what is the linear resolution of the actuator in mm per step?

**Answer 2:**
The stepper motor moves 1.8° per step.
One full revolution of the motor is 360°.
Number of steps per revolution = 360° / 1.8° = 200 steps/revolution.
The lead screw moves 4 mm per revolution.
Linear Resolution = (Distance per Revolution) / (Steps per Revolution)
Linear Resolution = 4 mm / 200 steps
Linear Resolution = 0.02 mm/step

**Question 3:**
In a closed-loop control system, if the sensor has a resolution of 0.1 unit and the actuator has a resolution of 0.05 unit, what is the effective resolution of the system for control adjustments? Explain why.

**Answer 3:**
The effective resolution of the system is limited by the component with the *poorer* (larger) resolution, which is the sensor in this case. Therefore, the effective resolution of the system is **0.1 unit**.

**Explanation:** The controller bases its decisions on the information received from the sensor. If the sensor cannot detect changes smaller than 0.1 unit, the controller will never know if a change smaller than 0.1 unit has occurred. Even though the actuator can make finer adjustments (0.05 unit), the system cannot command these finer adjustments reliably because the sensor cannot provide the necessary feedback to initiate them. The system's ability to respond to changes is bottlenecked by the sensor's resolution.

---
This concludes the study notes on Resolution for Module 1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
