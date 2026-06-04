---
title: "Digital to Analogue Converter"
subject: "MECHATRONIC SYSTEMS AND CONTROL"
module: "Module 2: Actuators and mechanisms: Mechanical Actuation System"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200882b85456187f36cc4"
status: "completed"
scrapedAt: "2026-05-23T16:43:34.835Z"
---
# MECHATRONIC SYSTEMS AND CONTROL

## Module 2: Actuators and Mechanisms: Mechanical Actuation System

### Topic: Digital to Analogue Converter (DAC)

---

### **1. Introduction to Digital to Analogue Converters (DACs)**

*   **Definition:** A Digital to Analogue Converter (DAC) is an electronic device that converts a digital signal (represented by binary numbers) into an analogue signal (a continuous voltage or current). This is a crucial component in mechatronic systems where microcontrollers (which operate digitally) need to control analogue actuators.

*   **Importance in Mechatronics (CO1, CO2):**
    *   Microcontrollers and digital processors generate discrete digital control signals.
    *   Many actuators in mechatronic systems, such as motors, servo motors, and hydraulic/pneumatic valves, require analogue signals (e.g., varying voltage or current) to control their output speed, position, or flow rate.
    *   DACs bridge this gap, allowing digital controllers to command and precisely control analogue actuators.
    *   This directly relates to **CO1** (importance of actuators) and **CO2** (signal conditioning processes for actuators).

*   **Reference:**
    *   Bolton, W. (2010) emphasizes the need for interfaces between digital control and analogue actuators.
    *   Histand & Alciatore (2003) discuss the role of DACs in closed-loop control systems where digital controllers interact with physical systems.

### **2. Working Principle of DACs**

*   **Core Concept:** DACs work by summing weighted contributions from each digital input bit. The output analogue voltage or current is proportional to the digital input value.

*   **Key Components:**
    *   **Digital Input Register:** Stores the digital binary code.
    *   **Weighted Resistor Network (or equivalent:** The heart of the DAC, where each bit's weight is represented by a resistor (or current source).
    *   **Summing Amplifier (often an operational amplifier):** Combines the weighted outputs.
    *   **Reference Voltage/Current:** A stable analogue voltage or current that sets the full-scale output.

*   **How it Works (Simplified):**
    *   Each bit in the digital input word controls a switch.
    *   The switch connects a weighted current or voltage source to a common summing point.
    *   The most significant bit (MSB) contributes the largest weighted value, while the least significant bit (LSB) contributes the smallest.
    *   The summing amplifier integrates these weighted contributions to produce a continuous analogue output.

*   **Reference:**
    *   Shetty & Kolk (2010) provide detailed circuit diagrams and explanations of various DAC architectures, including the weighted-resistor and R-2R ladder networks.
    *   Bishop (2017) explains the fundamental principles of signal conversion.

### **3. Types of DACs**

*   **Common Architectures:**

    *   **a) Weighted Resistor DAC:**
        *   **Description:** Uses a network of resistors with values that are binary-weighted (R, 2R, 4R, 8R, etc.). Each bit controls a switch that connects its corresponding weighted resistor to the summing amplifier.
        *   **Pros:** Simple design.
        *   **Cons:** Requires a wide range of resistor values, which can be difficult to manufacture accurately and can lead to non-linearity. The resistance values can become very large for higher resolution DACs.
        *   **Example:** A 3-bit DAC might have resistors R, 2R, and 4R for the LSB, middle bit, and MSB respectively.

    *   **b) R-2R Ladder DAC:**
        *   **Description:** Uses a ladder network of only two resistor values: R and 2R. This significantly simplifies manufacturing and improves accuracy compared to the weighted resistor DAC. Each bit controls a switch that connects either to ground or to the ladder's input, effectively toggling the bit's contribution.
        *   **Pros:** Easier to fabricate accurate resistors, more compact, better linearity.
        *   **Cons:** Requires more components than the weighted resistor DAC for the same number of bits.
        *   **Example:** A common structure where switches are connected to either ground or a reference voltage, and the ladder network sums the currents.

    *   **c) Switched Capacitor DAC:**
        *   **Description:** Uses capacitors and switches to store and transfer charge in proportion to the digital input.
        *   **Pros:** Can achieve high speeds, good linearity, and can be integrated into ICs.
        *   **Cons:** Accuracy depends on capacitor matching and charge leakage.

    *   **d) String DAC (or Thermometer Code DAC):**
        *   **Description:** Uses a string of identical resistors connected in series. Each bit controls a switch that taps into a specific point on the resistor string, effectively creating a voltage divider.
        *   **Pros:** Excellent linearity and speed, especially for lower resolutions.
        *   **Cons:** Requires a large number of resistors and switches for higher resolutions (2^N - 1 resistors and switches for an N-bit DAC).

*   **Reference:**
    *   Histand & Alciatore (2003) and Shetty & Kolk (2010) provide detailed circuit diagrams and analysis of R-2R ladders and string DACs.

### **4. DAC Specifications and Performance Metrics**

*   **Resolution:**
    *   **Definition:** The smallest change in analogue output that can be produced for a given change in digital input. It's determined by the number of bits (N) in the digital input.
    *   **Formula:** Resolution = (Full-scale output voltage) / (2^N)
    *   **Significance:** Higher resolution means finer control over the analogue output. An 8-bit DAC has 2^8 = 256 discrete output levels, while a 12-bit DAC has 2^12 = 4096 levels.
    *   **Example:** For a 0-5V DAC with 8 bits, the LSB step is 5V / 256 ≈ 0.0195V.

*   **Accuracy:**
    *   **Definition:** How closely the actual analogue output matches the ideal analogue output for a given digital input.
    *   **Types of Errors:**
        *   **Offset Error:** The output voltage when the digital input is zero.
        *   **Gain Error (Scale Error):** The difference between the actual full-scale output and the ideal full-scale output.
        *   **Linearity Error (Integral Non-Linearity - INL):** The maximum deviation of the actual DAC output from the ideal straight-line transfer function, measured across the entire output range.
        *   **Differential Non-Linearity (DNL):** The maximum deviation of the step size between adjacent digital codes from the ideal step size. A DAC has DNL errors if adjacent codes do not change by exactly one LSB. A DAC can be non-monotonic if DNL is greater than 1 LSB.

*   **Conversion Speed:**
    *   **Definition:** The time it takes for the DAC to settle to its final analogue output value after a change in the digital input.
    *   **Factors:** Settling time is influenced by the DAC architecture, internal circuitry, and the load connected to the output.

*   **Monotonicity:**
    *   **Definition:** A DAC is monotonic if its output never decreases as the digital input increases. This is guaranteed if the DNL is less than or equal to 1 LSB.
    *   **Importance:** Crucial for control applications to ensure predictable behaviour.

*   **Reference:**
    *   Histand & Alciatore (2003) and Bishop (2017) discuss these specifications in the context of selecting components for mechatronic systems.
    *   Merzouki et al. (2003) might discuss the impact of DAC accuracy and speed on system performance and control loop stability.

### **5. Practical Applications in Mechatronics**

*   **Motor Speed Control:** A microcontroller outputs a digital speed command, which is converted by a DAC into an analogue voltage to control the speed of a DC motor or the torque of an AC motor via a Variable Frequency Drive (VFD). (CO1, CO2)
    *   **Example:** In a robotic arm, the microcontroller determines the required speed of a joint motor. The DAC converts this digital speed command into an analogue voltage for the motor driver.

*   **Servo Motor Positioning:** Digital position commands from a microcontroller are converted by a DAC to generate the analogue control signal (e.g., PWM duty cycle or voltage) for a servo motor. (CO1, CO2)
    *   **Example:** Controlling the angle of a robotic gripper using a servo motor.

*   **Hydraulic/Pneumatic Valve Control:** Digital signals from a controller are converted by a DAC to provide the analogue current or voltage to proportionally control hydraulic or pneumatic valves, regulating fluid flow and pressure. (CO1, CO2)
    *   **Example:** In an industrial robot's pneumatic system, a DAC controls the amount of air pressure supplied to an actuator.

*   **Audio Systems:** While not always directly mechanical, DACs are fundamental in converting digital audio data from microcontrollers or processors into analogue signals for speakers.

*   **Reference:**
    *   Bolton (2010) extensively covers motor control and actuator interfaces.
    *   Histand & Alciatore (2003) illustrate examples of feedback control loops where DACs play a vital role.

### **6. Microcontroller Interfacing with DACs**

*   **Parallel Interface:** Older or simpler DACs might have a parallel interface where each digital input bit is connected to a separate output pin on the microcontroller. This is fast but requires many pins.

*   **Serial Interface (SPI, I²C):** Most modern microcontrollers use serial communication protocols like SPI (Serial Peripheral Interface) or I²C (Inter-Integrated Circuit) to communicate with DACs. This conserves microcontroller pins.
    *   **SPI:** Typically uses 4 wires (MOSI, MISO, SCK, SS).
    *   **I²C:** Typically uses 2 wires (SDA, SCL).
    *   **Process:** The microcontroller sends the digital code to the DAC over the serial bus, and the DAC converts it to an analogue output.

*   **DAC ICs:** DACs are often available as integrated circuits (ICs) with various features, resolutions, and interface types. Common examples include the MCP4725 (I²C, 12-bit) or AD5310 (SPI, 10-bit).

*   **Reference:**
    *   Bishop (2017) and Shetty & Kolk (2010) discuss microcontroller peripheral interfaces and common communication protocols.
    *   **CO3:** Understanding these interfaces is crucial for selecting and implementing microcontrollers in mechatronic systems.

### **7. Important Points to Remember**

*   **Digital to Analogue Conversion is essential for controlling physical systems using digital logic.**
*   **The resolution of a DAC determines the fineness of control.**
*   **Linearity and accuracy are critical for precise actuator control.**
*   **R-2R ladder DACs are a common and practical choice due to their accuracy and ease of implementation.**
*   **Serial interfaces (SPI, I²C) are preferred for microcontroller interfacing due to pin efficiency.**
*   **Always consider the required resolution, accuracy, speed, and interface type when selecting a DAC for a mechatronic system.**

---

### **Practice Questions and Exercises**

**Question 1:**
A DC motor in a mechatronic system needs to be controlled by a microcontroller to run at varying speeds. The microcontroller outputs a digital value representing the desired speed. If the microcontroller is connected to a DAC with a full-scale output voltage of 10V and a resolution of 8 bits, what is the smallest change in voltage the DAC can produce? If the microcontroller sends the digital value `1000 0000` (binary), what will be the analogue output voltage?

**Question 2:**
Explain the main difference between a weighted resistor DAC and an R-2R ladder DAC, and discuss why the R-2R ladder is often preferred in mechatronic applications. (Relates to CO2)

**Question 3:**
Identify two mechatronic applications where a DAC is indispensable for controlling an actuator. For each application, briefly describe the role of the DAC in translating digital commands into analogue control signals. (Relates to CO1)

**Question 4:**
What are the key performance metrics of a DAC, and why is it important for a mechatronic system designer to consider these metrics? (Relates to CO2)

**Question 5:**
If a microcontroller needs to control 4 different actuators, each requiring a separate analogue output, and the microcontroller has limited output pins, which type of interface (parallel or serial) would likely be more suitable for connecting multiple DACs, and why? (Relates to CO3)

---

### **Answers to Practice Questions**

**Answer 1:**
*   **Smallest change in voltage (LSB step):**
    *   Number of bits (N) = 8
    *   Number of discrete levels = 2^N = 2^8 = 256
    *   Full-scale output voltage = 10V
    *   Smallest change (LSB step) = Full-scale output voltage / Number of discrete levels
    *   LSB step = 10V / 256 ≈ **0.039V**

*   **Analogue output voltage for `1000 0000`:**
    *   The digital value `1000 0000` binary is equivalent to 128 in decimal.
    *   This represents the middle step (since the MSB is 1 and all others are 0).
    *   Analogue output voltage = (Decimal value / (2^N)) * Full-scale output voltage
    *   Analogue output voltage = (128 / 256) * 10V = 0.5 * 10V = **5V**
    *   Alternatively, it's half the full-scale output, so 10V / 2 = 5V.

**Answer 2:**
*   **Weighted Resistor DAC:** Uses resistors with binary-weighted values (R, 2R, 4R, etc.). For an N-bit DAC, it requires resistors with values spread over a ratio of 2^(N-1).
*   **R-2R Ladder DAC:** Uses only two resistor values, R and 2R, arranged in a ladder network.
*   **Preference for R-2R:**
    *   **Accuracy:** It's much easier to manufacture a set of resistors with only two values (R and 2R) to tight tolerances than to manufacture resistors with a wide range of binary-weighted values. This leads to better linearity and accuracy.
    *   **Simplicity:** While it uses more resistors than a weighted resistor DAC of the same resolution, the limited number of resistor values simplifies the manufacturing process and reduces component cost and complexity.

**Answer 3:**
*   **Application 1: Robotic Arm Joint Control (Servo Motor)**
    *   **Role of DAC:** A microcontroller calculates the desired angular position or speed for a robot arm's joint. This digital command is converted by a DAC into an analogue voltage (or a suitable signal like PWM, which is often generated from a DAC output). This analogue signal is then fed to the servo motor driver to set the motor's position or speed, allowing the arm to move precisely.

*   **Application 2: Variable Speed Drive (VSD) for an Industrial Fan**
    *   **Role of DAC:** A building management system (BMS) or an industrial controller sends a digital command to adjust the fan speed based on environmental conditions (e.g., temperature, airflow). The DAC converts this digital speed command into an analogue voltage (e.g., 0-10V) which is used by the VSD to control the frequency and voltage supplied to the AC motor driving the fan, thereby regulating its speed.

**Answer 4:**
The key performance metrics of a DAC are:
*   **Resolution:** Determines the smallest controllable step in the analogue output. Crucial for fine-tuning actuator performance (e.g., precise motor speed or valve opening).
*   **Accuracy (Offset, Gain, Linearity Errors):** Dictates how closely the analogue output matches the intended value. Inaccurate DACs can lead to incorrect actuator commands, causing performance deviations, instability, or even damage.
*   **Conversion Speed (Settling Time):** Affects how quickly the DAC can respond to changes in digital input. Important in systems requiring fast dynamic responses or rapid changes in actuator behaviour.
*   **Monotonicity:** Ensures that the output always increases or stays the same as the digital input increases. Essential for predictable and stable control, preventing erratic actuator behaviour.

Designers must consider these metrics to ensure the DAC can meet the specific control requirements of the mechatronic system, matching the actuator's capabilities and the system's response needs.

**Answer 5:**
A **serial interface** (like SPI or I²C) would be more suitable.
*   **Reasoning:**
    *   **Pin Efficiency:** A parallel interface would require 4 data pins per DAC (assuming 4-bit DACs for simplicity, 8-bit would be 8 pins per DAC). For 4 actuators, this would mean 16 data pins plus control pins.
    *   Serial interfaces like SPI (usually 4 wires: MOSI, MISO, SCK, SS) or I²C (usually 2 wires: SDA, SCL) allow multiple devices to share the same communication lines (with unique addresses for I²C or chip select signals for SPI).
    *   This significantly reduces the number of pins required on the microcontroller, allowing it to interface with more components or use smaller packages. For example, with SPI, 4 DACs might only require 5-6 pins in total (data lines + individual chip selects).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
