---
title: "ADC and DAC circuits."
subject: "MECHATRONICS"
module: "Module 1: Sensors and signal conditioning : Introduction to Mechatronics: Structure of Mechatronics system."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f08"
status: "completed"
scrapedAt: "2026-05-20T18:14:38.279Z"
---
# MECHATRONICS - Module 1: Sensors and Signal Conditioning
## Topic: ADC and DAC Circuits

---

## 1. Introduction

This topic delves into the crucial components of mechatronic systems that bridge the gap between the analog world of physical phenomena and the digital world of microcontrollers and processors. Analog-to-Digital Converters (ADCs) and Digital-to-Analog Converters (DACs) are fundamental for processing sensor data and controlling actuators.

---

## 2. Learning Outcomes Covered

This section directly addresses the following learning outcomes:

*   **Understanding of ADC and DAC circuits:** This entire document is dedicated to explaining their principles, types, and applications.
*   **Connecting sensor data to microcontrollers:** ADCs are essential for converting analog sensor outputs into digital formats that microcontrollers can interpret.
*   **Controlling actuators with digital signals:** DACs convert digital commands from microcontrollers into analog signals required by many actuators.

---

## 3. Course Outcomes Alignment

This topic significantly contributes to the following Course Outcomes (COs):

*   **CO1 (K2): Understand the characteristics and working of sensors and choose the optimal one based on the application.**
    *   ADCs are a direct link between many analog sensors and the digital processing units. Understanding ADC characteristics is crucial for choosing the right sensor and ensuring accurate data acquisition.
*   **CO2 (K2): Understand the characteristics and working of actuators and choose the optimal one based on the application.**
    *   DACs are critical for driving analog actuators like motors (through PWM generated from DAC output), servo motors, and analog valves.
*   **CO5 (K3): Understand the use and characteristics of microcontrollers and choose the appropriate one based on the given application.**
    *   Microcontrollers typically have built-in ADCs and DACs, or interfaces for external converters. Understanding these integrated peripherals is key to selecting and utilizing microcontrollers effectively.

---

## 4. Key Concepts and Definitions

### 4.1 Analog vs. Digital Signals

*   **Analog Signal:** A continuous signal that varies smoothly over time, representing physical quantities like temperature, pressure, or light intensity. It can take any value within a given range.
*   **Digital Signal:** A discrete signal that represents information using binary values (0s and 1s). It can only take specific, quantized values.

### 4.2 The Need for ADCs and DACs

*   **Sensors:** Most physical sensors produce analog output signals.
*   **Microcontrollers/Processors:** These devices operate on digital data.
*   **Actuators:** Many actuators require analog control signals to operate.

Therefore, ADCs are needed to convert analog sensor outputs into digital signals for processing by microcontrollers, and DACs are needed to convert digital commands from microcontrollers into analog signals for controlling actuators.

---

## 5. Analog-to-Digital Converters (ADCs)

An ADC converts an analog input voltage into a digital output code.

### 5.1 ADC Operation Principle

The core idea is to compare the analog input voltage with a series of reference voltages. The ADC then outputs a binary number that represents the closest match to the input voltage.

### 5.2 Key ADC Parameters

*   **Resolution (n):** The number of bits in the digital output. Higher resolution means more discrete output levels, leading to finer quantization of the analog input.
    *   *Example:* An 8-bit ADC has $2^8 = 256$ possible output levels. A 12-bit ADC has $2^{12} = 4096$ levels.
*   **Quantization Error:** The inherent error introduced because an analog signal is approximated by discrete digital values. It's the difference between the actual analog value and the digital representation.
    *   *Formula:* Quantization Error $\approx \frac{V_{ref}}{2^n}$ (where $V_{ref}$ is the reference voltage).
*   **Conversion Time:** The time taken by the ADC to convert an analog input into a digital output. This is critical for real-time applications.
*   **Sampling Rate:** The number of analog samples taken per second. It must be at least twice the highest frequency component of the analog signal (Nyquist-Shannon sampling theorem).
*   **Reference Voltage ($V_{ref}$):** The maximum analog input voltage that the ADC can convert. The output digital code is proportional to the ratio of the input voltage to the reference voltage.
    *   *Formula:* Digital Output Code $\approx \frac{\text{Analog Input Voltage}}{V_{ref}} \times 2^n$
*   **Non-linearity:** Deviation of the actual transfer function from the ideal straight line.

### 5.3 Types of ADCs

#### 5.3.1 Successive Approximation Register (SAR) ADC

*   **Working:** This is the most common type of ADC. It uses a digital-to-analog converter (DAC) and a comparator.
    1.  The SAR ADC starts by setting the most significant bit (MSB) of the digital output to 1 and all other bits to 0.
    2.  This digital value is converted to an analog voltage by the internal DAC.
    3.  The analog voltage is compared with the input analog voltage using a comparator.
    4.  If the DAC output is less than the input voltage, the MSB is kept as 1. Otherwise, it's reset to 0.
    5.  The process repeats for the next significant bit, and so on, until the least significant bit (LSB) is determined.
*   **Advantages:** Moderate speed, good resolution, relatively simple design.
*   **Disadvantages:** Conversion time is fixed and depends on the number of bits.
*   **Textbook Reference:** Bolton, Chapter 4, discusses SAR ADCs in the context of data acquisition systems.

#### 5.3.2 Sigma-Delta ($\Sigma\Delta$) ADC

*   **Working:** These ADCs use oversampling and noise shaping to achieve very high resolution. They typically use a simpler, lower-resolution quantizer and a noise-shaping filter.
    1.  The analog signal is oversampled at a rate much higher than the Nyquist rate.
    2.  A noise-shaping filter pushes the quantization noise to higher frequencies.
    3.  A digital filter then removes the out-of-band noise and decodes the high-rate, low-resolution data into a lower-rate, high-resolution digital output.
*   **Advantages:** Very high resolution, excellent noise immunity.
*   **Disadvantages:** Lower conversion speed compared to SAR ADCs for a given resolution.
*   **Applications:** Audio processing, high-precision measurements.
*   **Textbook Reference:** Onwubolu, Chapter 5, may touch upon advanced ADC architectures like Sigma-Delta in the context of sensor interfacing.

#### 5.3.3 Flash ADC

*   **Working:** Uses a large number of comparators. For an n-bit ADC, it requires $2^n - 1$ comparators. Each comparator compares the input voltage with a different reference voltage. The outputs of the comparators are then encoded by a priority encoder.
*   **Advantages:** Very fast conversion speed (operates in parallel).
*   **Disadvantages:** Requires a large number of components, making it expensive and power-hungry for high resolutions.
*   **Applications:** High-speed signal processing, video systems.

#### 5.3.4 Dual-Slope ADC

*   **Working:** The analog input voltage is integrated for a fixed period. Then, a known reference voltage (opposite polarity) is integrated until the integrator output returns to zero. The time taken for the second integration is proportional to the input voltage.
*   **Advantages:** High accuracy, good noise rejection.
*   **Disadvantages:** Slow conversion speed.
*   **Applications:** Digital multimeters, panel meters.

### 5.4 ADC in Mechatronic Systems (Example)

*   **Temperature Measurement:** A thermistor (an analog sensor) outputs a voltage that changes with temperature. This analog voltage is fed into an ADC, which converts it into a digital value. A microcontroller then reads this digital value, applies a calibration formula, and displays the temperature or uses it for control.
    *   **CO1 & CO5 Alignment:** Understanding how to interface the thermistor (CO1) with the microcontroller's ADC (CO5) for data acquisition.

---

## 6. Digital-to-Analog Converters (DACs)

A DAC converts a digital input code into an analog output voltage or current.

### 6.1 DAC Operation Principle

DACs reconstruct an analog signal from discrete digital values. They typically use weighted resistors or R-2R ladder networks to generate voltages proportional to the digital input bits.

### 6.2 Key DAC Parameters

*   **Resolution (n):** The number of bits the DAC can accept as input. This determines the number of discrete analog output levels.
    *   *Formula:* Number of output levels = $2^n$.
*   **Conversion Time (Settling Time):** The time it takes for the DAC output to settle to its final value after a digital input change.
*   **Monotonicity:** A DAC is monotonic if its output voltage always increases (or stays the same) as the digital input code increases.
*   **Linearity:**
    *   **Integral Linearity:** The maximum deviation of the DAC's transfer function from a straight line between the zero and full-scale points.
    *   **Differential Linearity:** The maximum difference between the actual analog step size and the ideal step size for adjacent digital codes.
*   **Reference Voltage ($V_{ref}$):** The DAC output is typically proportional to $V_{ref}$.
    *   *Formula:* Analog Output Voltage $\approx \frac{\text{Digital Input Code}}{2^n} \times V_{ref}$ (for a binary-weighted DAC)

### 6.3 Types of DACs

#### 6.3.1 Weighted-Resistor DAC

*   **Working:** Uses resistors with different values, weighted according to the significance of the corresponding digital bit. For each bit that is '1', a current (or voltage) proportional to that bit's weight is added to a summing amplifier.
    *   *Example:* For a 3-bit DAC with input $D_2 D_1 D_0$ (MSB $D_2$, LSB $D_0$), the resistors would be $R$, $2R$, $4R$.
*   **Advantages:** Simple concept.
*   **Disadvantages:** Requires a wide range of resistor values, which can lead to accuracy issues and fabrication difficulties for higher resolutions.

#### 6.3.2 R-2R Ladder DAC

*   **Working:** Uses only two resistor values: $R$ and $2R$. The ladder network divides the reference voltage in a binary-weighted fashion. Each digital bit controls a switch that connects a point in the ladder to either ground or the reference voltage. The output is taken from the end of the ladder, summed by an operational amplifier.
*   **Advantages:** Uses only two resistor values, making it easier to fabricate and more accurate for higher resolutions compared to weighted-resistor DACs.
*   **Disadvantages:** Still requires precise resistor matching.
*   **Textbook Reference:** Bolton, Chapter 4, likely covers R-2R DACs as a fundamental component for signal generation.

#### 6.3.3 String DAC (Resistor String DAC)

*   **Working:** A string of equal resistors is used to create equally spaced voltage levels. A decoder circuit then selects the appropriate voltage level based on the digital input.
*   **Advantages:** Good linearity and monotonicity.
*   **Disadvantages:** Large number of resistors and comparators for high resolution.

### 6.4 DAC in Mechatronic Systems (Example)

*   **Motor Speed Control:** A microcontroller receives a desired speed command (digital). It outputs a digital value to a DAC. The DAC converts this digital value into an analog voltage. This analog voltage is then used to control the speed of a DC motor, typically by varying the duty cycle of a Pulse Width Modulation (PWM) signal or directly controlling a voltage-controlled amplifier.
    *   **CO2 & CO5 Alignment:** Understanding how to use a DAC (CO2 application) to interface with a motor (CO2) via commands from a microcontroller (CO5).

---

## 7. Interfacing ADCs and DACs with Microcontrollers

Microcontrollers often have integrated ADCs and DACs. If not, external ICs can be interfaced via digital communication protocols like SPI or I2C.

### 7.1 Integrated Peripherals

*   Many modern microcontrollers (e.g., from Microchip PIC, ARM Cortex-M series) feature built-in SAR ADCs and sometimes DACs.
*   These are accessed by configuring specific microcontroller registers to select the input channel, resolution, conversion mode, and to read the converted digital data.

### 7.2 External Interfaces

*   **SPI (Serial Peripheral Interface):** A synchronous serial communication protocol. Many external ADCs and DACs support SPI, allowing for relatively high-speed data transfer.
*   **I2C (Inter-Integrated Circuit):** A two-wire serial communication protocol. Simpler to implement than SPI but generally slower. Suitable for less speed-critical applications.

---

## 8. Practice Questions and Exercises

**Question 1:**
A mechatronic system uses a sensor that outputs a voltage between 0V and 5V, representing a physical quantity. The system's microcontroller has an 8-bit ADC with a reference voltage of 5V.
a) What is the resolution of this ADC in terms of voltage?
b) If the sensor outputs 2.5V, what is the digital output code of the ADC?

**Answer 1:**
a) The ADC has 8 bits, so there are $2^8 = 256$ possible output levels.
   Resolution (voltage) = $V_{ref} / 2^n = 5V / 256 \approx 0.0195V$ or 19.5mV.
b) Digital Output Code = (Analog Input Voltage / $V_{ref}$) * $2^n$
   Digital Output Code = (2.5V / 5V) * 256 = 0.5 * 256 = 128.
   The digital output code would be 128 (in decimal) or 10000000 (in binary).

**Question 2:**
You need to control the brightness of an LED using a microcontroller and a DAC. The microcontroller will output a digital value from 0 to 255 (8-bit) to the DAC. The DAC has a reference voltage of 3.3V.
a) What is the number of discrete analog output levels the DAC can produce?
b) If the microcontroller sends the digital value 192, what will be the analog output voltage from the DAC?

**Answer 2:**
a) The DAC accepts 8-bit input, so it can produce $2^8 = 256$ discrete analog output levels.
b) Analog Output Voltage = (Digital Input Code / $2^n$) * $V_{ref}$
   Analog Output Voltage = (192 / 256) * 3.3V = 0.75 * 3.3V = 2.475V.

**Question 3:**
Discuss the trade-offs between a Flash ADC and a Successive Approximation Register (SAR) ADC in terms of speed, resolution, and complexity. Which one would you choose for a system requiring very fast analog signal acquisition, and why?

**Answer 3:**
*   **Flash ADC:**
    *   **Speed:** Very high (parallel conversion).
    *   **Resolution:** Typically lower due to complexity.
    *   **Complexity:** Very high (requires $2^n-1$ comparators).
*   **SAR ADC:**
    *   **Speed:** Moderate (sequential conversion).
    *   **Resolution:** Can achieve high resolution.
    *   **Complexity:** Moderate (uses a DAC and comparator).

For a system requiring very fast analog signal acquisition, a **Flash ADC** would be the choice due to its parallel conversion mechanism, enabling it to capture rapid changes in the analog signal. However, this comes at the cost of higher complexity and potentially lower resolution for a given cost.

---

## 9. Important Points to Remember

*   **The bridge between analog and digital:** ADCs convert analog sensor data to digital for microcontrollers, and DACs convert digital control signals to analog for actuators.
*   **Resolution is key:** Higher resolution means finer quantization and more accurate representation of the analog signal.
*   **Sampling Rate and Conversion Time:** Crucial for real-time applications. Ensure the sampling rate meets the Nyquist criterion.
*   **Reference Voltage ($V_{ref}$):** Directly impacts the range and scaling of the ADC/DAC.
*   **R-2R DACs:** The most common and practical type for many mechatronic applications due to their simpler resistor requirements.
*   **SAR ADCs:** The most common ADC architecture found in microcontrollers for general-purpose data acquisition.
*   **Trade-offs:** Always consider the application's requirements (speed, accuracy, cost, power consumption) when choosing an ADC or DAC type.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## 10. References and Further Reading

*   **Bolton, W. (7th ed.). *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering***
    *   Chapter 4 is highly relevant, covering signal conditioning, amplifiers, and data converters (ADCs/DACs).
*   **Onwubolu, G. C. *Mechatronics: Principles and Applications***
    *   Likely discusses sensor interfacing and signal processing, which would include ADCs and DACs.
*   **Shetty, D., & Kolk, R. *Mechatronics System Design***
    *   This book would provide practical insights into integrating sensors, ADCs, DACs, and actuators within a complete mechatronic system design.
*   **Rajput, R. K. (2007). *A Text Book of Mechatronics***
    *   Chapter on sensors and signal conditioning will undoubtedly cover ADCs and DACs.

---

This concludes the study notes for ADC and DAC circuits. Understanding these components is fundamental to successfully designing and implementing mechatronic systems.