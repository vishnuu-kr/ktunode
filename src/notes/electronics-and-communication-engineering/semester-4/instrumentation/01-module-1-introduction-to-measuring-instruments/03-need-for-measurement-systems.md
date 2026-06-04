---
title: "Need for Measurement Systems"
subject: "INSTRUMENTATION"
module: "Module 1: Introduction to measuring instruments"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5b7"
status: "completed"
scrapedAt: "2026-05-23T17:49:18.092Z"
---
# INSTRUMENTATION: Module 1: Introduction to Measuring Instruments

## Topic: Need for Measurement Systems

---

### 1. Introduction to Measurement Systems

Measurement is a fundamental process that underpins scientific inquiry, engineering design, and industrial operations. A measurement system is a combination of instruments and devices that are used to determine the magnitude of a physical quantity. Understanding the need for these systems is crucial for comprehending the role of instrumentation in various fields.

---

### 2. Why Do We Need Measurement Systems? (The Core Need)

Measurement systems are essential for a multitude of reasons, primarily revolving around **understanding, controlling, and optimizing processes and phenomena.**

**Key reasons include:**

*   **Understanding Physical Phenomena:**
    *   To quantify and characterize physical quantities (e.g., temperature, pressure, flow rate, voltage, current, speed, position).
    *   To gather data for scientific research, enabling the formulation and validation of theories and laws.
    *   **Example:** Measuring the temperature of a chemical reaction to understand its kinetics.
    *   *(Reference: Doebelin's Measurement Systems, Chapter 1)*

*   **Process Control and Automation:**
    *   To monitor the state of a process in real-time.
    *   To provide feedback signals for controllers (e.g., PID controllers) to maintain desired operating conditions.
    *   To ensure product quality and consistency.
    *   **Example:** Measuring the level of liquid in a tank and using that measurement to automatically switch on or off a pump to maintain a set level. This directly relates to CO4 (PLC Programming) where sensors provide input for control logic.
    *   *(Reference: Kalsi H S, Electronic Instrumentation, Chapter 1; Hackworth & Hackworth, Programmable Logic Controllers, Chapter 1)*

*   **Design and Development:**
    *   To verify that designs meet specifications and performance requirements.
    *   To identify potential flaws or areas for improvement in prototypes.
    *   **Example:** Measuring the stress on a bridge component during a load test to ensure it can withstand expected forces.
    *   *(Reference: Doebelin's Measurement Systems, Chapter 1)*

*   **Economic and Efficiency Improvements:**
    *   To optimize resource utilization (e.g., energy, raw materials).
    *   To identify inefficiencies in processes.
    *   **Example:** Measuring energy consumption in a factory to identify areas where energy savings can be achieved.
    *   *(Reference: Doebelin's Measurement Systems, Chapter 1)*

*   **Safety and Reliability:**
    *   To monitor critical parameters that could lead to hazardous situations if they deviate from safe limits.
    *   To ensure the reliable operation of equipment and systems.
    *   **Example:** Measuring the pressure in a boiler and shutting it down if the pressure exceeds a critical limit.
    *   *(Reference: Kalsi H S, Electronic Instrumentation, Chapter 1)*

*   **Calibration and Verification:**
    *   To calibrate other instruments against known standards.
    *   To ensure the accuracy and reliability of measuring equipment over time.
    *   **Example:** Using a calibrated pressure gauge to check the accuracy of a pressure sensor in a system.
    *   *(Reference: Sawhney AK, Electrical and Electronics Measurements and Instrumentation, Chapter 2)*

*   **Information Gathering and Decision Making:**
    *   To collect data for analysis, reporting, and strategic decision-making.
    *   **Example:** Measuring customer preferences through surveys (though this is a different domain, the principle of data collection for decision making applies). In engineering, measuring output of a manufacturing process to decide on production adjustments.
    *   *(Reference: Doebelin's Measurement Systems, Chapter 1)*

---

### 3. Key Concepts and Definitions

*   **Measurement:** The process of assigning a numerical value to a physical quantity according to a specified rule.
*   **Measuring Instrument:** A device used to measure a physical quantity.
*   **Measurand:** The physical quantity being measured (e.g., temperature, pressure, length).
*   **Standard:** A physical realization of a unit of measurement, to which other quantities are compared.
*   **Accuracy:** The closeness of a measurement to the true value of the measurand.
*   **Precision:** The degree of agreement among several measurements of the same quantity.
*   **Sensitivity:** The ratio of the change in the output of a measuring instrument to the change in the input that caused it.
*   **Resolution:** The smallest detectable change in the measurand.
*   **Calibration:** The process of comparing the readings of a measuring instrument with those of a standard instrument to determine and correct any deviations.
    *   *(Reference: Doebelin's Measurement Systems, Chapter 2)*
    *   *(Reference: Sawhney AK, Electrical and Electronics Measurements and Instrumentation, Chapter 1)*

---

### 4. Types of Measurement Systems (Brief Overview - Will be elaborated in later topics)

While the focus of this topic is the *need*, it's important to acknowledge that measurement systems can be broadly categorized:

*   **Mechanical Measurement Systems:** Rely on mechanical principles for measurement (e.g., dial calipers, spring scales).
*   **Electrical/Electronic Measurement Systems:** Utilize electrical or electronic properties of components (e.g., voltmeters, oscilloscopes, pressure transducers converting pressure to voltage).
    *   *(Reference: Kalsi H S, Electronic Instrumentation, Chapter 1)*
*   **Optical Measurement Systems:** Employ light for measurement (e.g., laser interferometers, optical pyrometers).
*   **Thermal Measurement Systems:** Measure thermal quantities (e.g., thermometers, thermocouples).

---

### 5. Learning Outcome Alignment

This topic directly addresses the need for measurement systems, which is foundational to all other learning outcomes in Module 1.

*   **CO1: Interpret the basic concepts of measuring instruments, its classification, and selection criteria.**
    *   **Alignment:** Understanding the *need* for measurement systems dictates *why* we classify them and the criteria for selecting the appropriate instrument for a given task. The emphasis on control, safety, and understanding phenomena directly informs selection criteria.
*   **CO2: Outline the principle, construction and working of transducers for measuring physical variables.**
    *   **Alignment:** The need for measurement systems creates the demand for transducers. Transducers are the essential interface that converts a physical variable (the measurand) into a signal that a measurement system can process. The reasons for measurement (e.g., process control) drive the development of specific transducers.
*   **CO3: Comprehend the principle, construction and working of various electronic measuring instruments.**
    *   **Alignment:** Electronic instruments are widely used due to their accuracy, speed, and ability to interface with control systems. The need for precise and rapid measurement in modern industrial and scientific applications necessitates the development and understanding of these instruments.
*   **CO4: Apply PLC programming for selected industrial processes.**
    *   **Alignment:** PLCs are control devices. They rely on input signals from sensors (transducers) that measure process variables. The "need for measurement systems" is the direct precursor to applying PLCs, as PLCs require measured data to make control decisions. Without measurement, there's nothing to control.

---

### 6. Examples Illustrating the Need for Measurement Systems

| Industry/Field       | Physical Quantity Measured | Why Measurement is Needed                                                                          |
| :------------------- | :------------------------- | :------------------------------------------------------------------------------------------------- |
| **Manufacturing**    | Temperature                | To ensure product quality (e.g., baking, heat treatment), process stability, and energy efficiency. |
|                      | Pressure                   | To control processes (e.g., hydraulics, pneumatics), ensure safety (e.g., boilers), and optimize efficiency. |
|                      | Flow Rate                  | To control chemical reactions, manage fluid distribution, and ensure accurate dispensing of materials. |
| **Automotive**       | Engine Speed (RPM)         | To optimize fuel injection, monitor engine performance, and provide feedback for cruise control.        |
|                      | Tire Pressure              | For safety, fuel efficiency, and optimal tire wear.                                              |
| **Aerospace**        | Altitude                   | For navigation, flight control, and ensuring safe operation.                                       |
|                      | Airspeed                   | For flight control, performance monitoring, and stall prevention.                                  |
| **Medical**          | Blood Pressure             | For diagnosis, monitoring patient health, and guiding treatment.                                   |
|                      | Body Temperature           | For detecting illness and monitoring treatment effectiveness.                                      |
| **Environmental**    | Air Quality (e.g., CO2)    | To monitor pollution levels, assess environmental impact, and inform policy decisions.              |
|                      | Water Quality (e.g., pH)   | To ensure water potability, monitor aquatic health, and manage industrial discharge.               |

---

### 7. Important Points to Remember

*   **Measurement is not an end in itself; it's a means to an end.** The "end" is usually to understand, control, optimize, or ensure safety.
*   **The need for measurement dictates the choice of instrument and system.** What you need to measure and why you need to measure it are the primary drivers for system design.
*   **Accuracy and precision are critical for effective measurement**, especially in applications where safety or critical process control is involved.
*   **Modern industrial processes heavily rely on automated measurement systems** for efficient and reliable operation. This directly links to the application of PLCs.

---

### 8. Practice Questions and Exercises

**Short Answer Questions:**

1.  State any three primary reasons why measurement systems are essential in engineering and industry.
    *   **Answer:** 1. Understanding physical phenomena, 2. Process control and automation, 3. Safety and reliability. (Other valid answers include design verification, economic improvement, information gathering).
2.  What is the fundamental role of a transducer in a measurement system?
    *   **Answer:** A transducer converts a physical quantity (measurand) into an electrical signal that can be processed or displayed by other components of the measurement system.
3.  Give an example of a situation where accurate measurement is crucial for safety.
    *   **Answer:** Measuring the pressure in a high-pressure vessel (like a boiler or gas cylinder) to prevent catastrophic failure due to overpressure.
4.  How does measurement contribute to the economic efficiency of a process?
    *   **Answer:** By allowing for optimization of resource usage (e.g., energy, materials), identification of inefficiencies, and reduction of waste.

**Conceptual Questions:**

5.  Explain how the "need for measurement" influences the "selection criteria" for a measuring instrument.
    *   **Answer:** The selection criteria are driven by the need. For example, if the need is for precise process control, an instrument with high accuracy, good resolution, and fast response time will be selected. If the need is for general monitoring, a less precise but more robust or cost-effective instrument might suffice. The environment of measurement (temperature, vibration, etc.) also dictates selection based on the need for reliability.
6.  Consider a manufacturing process where the temperature of a product must be maintained within a narrow range (e.g., for heat treatment). Discuss how a measurement system would be used in this context, highlighting the role of feedback.
    *   **Answer:** A temperature sensor (transducer) would measure the product's temperature. This measured value would be sent to a controller (potentially a PLC). If the temperature is below the setpoint, the controller signals a heating element to increase heat. If it's above, it signals the heater to reduce or turn off. This feedback loop, enabled by measurement, ensures the temperature stays within the desired range, fulfilling the need for product quality. This directly relates to CO4.

**Application-Based Questions:**

7.  Imagine you are designing a system to monitor the water level in a large industrial storage tank. What are the key reasons you would need a measurement system for this task?
    *   **Answer:**
        *   **Process Control:** To automatically start/stop pumps to maintain a desired level, preventing overflow or running dry. (CO4 relevance)
        *   **Inventory Management:** To know how much water is available.
        *   **Safety:** To prevent tank overflow, which could be a safety hazard or cause environmental issues.
        *   **Efficiency:** To ensure that the tank is neither overfilled (wasting capacity) nor underfilled (potentially disrupting downstream processes).
8.  A PLC is to be programmed to control the speed of a conveyor belt based on the weight of items placed on it. What role does a measurement system play in this scenario?
    *   **Answer:** A load cell or a weighing system would act as a transducer, measuring the weight of the item. This measurement would be converted into an electrical signal and fed as input to the PLC. The PLC, based on the measured weight and its programmed logic, would then adjust the speed of the conveyor motor. The need for accurate weight measurement is critical for the PLC's control action to be effective. (CO4 relevance)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References & Further Reading

*   **Doebelin's Measurement Systems** by Ernest Doebelin, Dhanesh N. Manik (Tata McGraw Hill, 6/e, 2011) - Chapter 1: Introduction to Measurement Systems, Chapter 2: Performance Characteristics of Measurement Systems.
*   **Electronic Instrumentation** by Kalsi H S (Tata McGraw Hill, 4/e, 2019) - Chapter 1: Introduction to Electronic Instruments.
*   **Programmable Logic Controllers Programming Methods and Applications** by John R Hackworth, Frederick D Hackworth (Pearson Education, 3/e, 2022) - Chapter 1: Introduction to PLCs (sets the context for why measurements are needed in control).
*   **Electrical and Electronics Measurements and Instrumentation** by Sawhney AK (Dhanpat Rai and Sons, 2023) - Chapter 1: Introduction to Electrical Measurements, Chapter 2: Measurement Standards and Calibration.
*   **Programmable Logic Controllers- Principles and applications** by John W Webb, Ronald A. Reis, (Pearson, 5/e, 2015) - Chapter 1: Introduction to PLCs.

---