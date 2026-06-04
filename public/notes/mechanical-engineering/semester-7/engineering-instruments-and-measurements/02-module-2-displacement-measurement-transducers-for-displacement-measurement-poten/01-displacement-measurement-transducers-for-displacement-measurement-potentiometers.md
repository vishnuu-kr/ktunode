---
title: "Displacement measurement: Transducers for displacement measurement – Potentiometers"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 2: Displacement measurement: Transducers for displacement measurement – Potentiometers"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464304"
status: "completed"
scrapedAt: "2026-05-20T18:11:29.206Z"
---
# Engineering Instruments and Measurements: Module 2 - Displacement Measurement: Transducers - Potentiometers

## Module Introduction

This module focuses on the fundamental principles and applications of displacement measurement, a critical parameter in various engineering disciplines. We will explore different transducers used for this purpose, with a particular emphasis on **Potentiometers**. Understanding how to accurately measure displacement is essential for system calibration, control, and monitoring, directly impacting the quality and performance of engineered systems.

---

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the basic principle of operation of a potentiometer as a displacement transducer.
*   Describe the different types of potentiometric displacement sensors.
*   Explain the advantages and disadvantages of using potentiometers for displacement measurement.
*   Analyze the factors affecting the accuracy and performance of potentiometric sensors.
*   Identify common applications of potentiometers in engineering.
*   Discuss the electrical circuit configurations for potentiometric displacement measurement.

---

## Course Outcomes Addressed by this Module

*   **CO1 (K2):** To identify and classify different measuring instruments and their static and dynamic characteristics, ensuring proper selection and usage for various engineering applications.
    *   *This module introduces potentiometers as a classification of displacement transducers and will touch upon their static characteristics like linearity and resolution.*
*   **CO2 (K3):** To measure and analyse displacement, strain and surface characteristics using appropriate techniques and devices, ensuring quality control and performance optimization in manufacturing and engineering processes.
    *   *This module directly addresses the measurement of displacement using potentiometers, enabling analysis for quality control and performance optimization.*
*   **CO5 (K3):** To select measurement system for engineering applications.
    *   *By understanding the characteristics, advantages, and limitations of potentiometers, you will be able to make informed decisions about their suitability for specific engineering applications.*

---

## 1. Displacement Measurement: An Overview

**Definition:** Displacement is the change in position of an object from its original reference point. It is a vector quantity, meaning it has both magnitude and direction.

**Importance in Engineering:**
*   **Monitoring and Control:** Displacement is a key variable for controlling the position of machinery, actuators, and robotic arms.
*   **Performance Evaluation:** Measuring displacement helps assess the performance of structures under load (deflection), the movement of components in mechanical systems, and the accuracy of manufacturing processes.
*   **Safety:** Monitoring displacement can prevent catastrophic failures by detecting excessive movement or deformation.

**Types of Displacement:**
*   **Linear Displacement:** Movement along a straight line.
*   **Angular Displacement:** Rotation around an axis.

---

## 2. Transducers for Displacement Measurement

**Definition:** A transducer is a device that converts one form of energy into another. In the context of measurement, it converts a physical phenomenon (like displacement) into an electrical signal that can be processed, displayed, or recorded.

**Classification of Displacement Transducers:**
Transducers for displacement measurement can be broadly classified based on their operating principles:

*   **Electrical Transducers:**
    *   Potentiometric Transducers
    *   Inductive Transducers (LVDTs, RVDTs)
    *   Capacitive Transducers
    *   Piezoelectric Transducers
    *   Strain Gauge Transducers
    *   Hall Effect Sensors
*   **Optical Transducers:**
    *   Optical Encoders (Absolute, Incremental)
    *   Laser Interferometers
*   **Pneumatic Transducers:**
    *   Pneumatic Gauges

**Focus of this Module: Potentiometric Transducers**

---

## 3. Potentiometers as Displacement Transducers

**3.1. Principle of Operation**

A potentiometer is essentially a variable resistor. When used as a displacement transducer, it converts mechanical position (linear or angular) into a corresponding change in electrical resistance or voltage.

*   **Construction:** A potentiometer consists of a resistive element (track) and a movable contact (wiper) that slides along this track.
*   **Operation:** A constant voltage is applied across the ends of the resistive track. As the wiper moves along the track, it changes the resistance between the wiper and one of the ends. This change in resistance is proportional to the position of the wiper.

**Key Components:**

*   **Resistive Element (Track):** Typically made of resistive wire (e.g., nichrome, stainless steel) wound on a former or a resistive film (e.g., carbon, cermet, conductive plastic) deposited on an insulating substrate.
*   **Wiper:** A conductive contact that slides along the resistive track, making electrical connection.
*   **Actuating Mechanism:** Connects the object whose displacement is to be measured to the wiper. This can be a lever, shaft, or threaded rod.
*   **Terminals:** At least three terminals are present: two at the ends of the resistive track and one at the wiper.

**3.2. Types of Potentiometric Displacement Transducers**

Based on the type of motion they measure:

*   **Linear Potentiometers (Position Sensors):**
    *   **Description:** The wiper moves in a straight line along the resistive element. The displacement of the wiper is directly related to the linear displacement of the actuating mechanism.
    *   **Construction:** Resistive element is a straight rod or strip. The wiper is attached to a slider that moves linearly.
    *   **Output:** The resistance between the wiper and one end terminal changes linearly with the slider's position.

    *   **Example:** Used in throttle position sensors in vehicles, joystick controls, linear actuators feedback.

*   **Rotary Potentiometers (Angle Sensors):**
    *   **Description:** The wiper rotates along a circular or arc-shaped resistive element. The angular displacement of the shaft is directly related to the angular displacement of the wiper.
    *   **Construction:** Resistive element is a curved track. The wiper is attached to a rotating shaft.
    *   **Output:** The resistance between the wiper and one end terminal changes linearly with the angle of rotation.

    *   **Example:** Used in volume controls, steering angle sensors, flap position indicators.

**3.3. Electrical Circuit Configurations and Output Signals**

Potentiometers can be used in two primary electrical configurations to measure displacement:

*   **As a Rheostat (Two-Terminal Configuration):**
    *   **Circuit:** Only one end terminal of the resistive track and the wiper terminal are used. The resistance between these two points is measured.
    *   **Output:** Resistance ($R_{out}$) changes with displacement.
    *   **Formula:**
        *   If $R_{total}$ is the total resistance of the track and $L$ is the total length of travel (for linear) or angle (for rotary).
        *   For linear potentiometer: $R_{out} = R_{total} \times \frac{x}{L}$, where $x$ is the distance of the wiper from the starting end.
        *   For rotary potentiometer: $R_{out} = R_{total} \times \frac{\theta}{\theta_{max}}$, where $\theta$ is the angle of rotation and $\theta_{max}$ is the maximum angle of travel.
    *   **Limitations:** Measuring resistance directly can be prone to errors due to contact resistance and lead resistance. It also requires a separate circuit to convert resistance to a voltage.

*   **As a Voltage Divider (Three-Terminal Configuration):**
    *   **Circuit:** A constant excitation voltage ($V_{in}$) is applied across the two end terminals of the resistive track. The output voltage ($V_{out}$) is taken between the wiper terminal and one of the end terminals.
    *   **Output:** Voltage ($V_{out}$) changes with displacement. This is the most common and preferred method.
    *   **Formula:**
        *   For linear potentiometer: $V_{out} = V_{in} \times \frac{x}{L}$
        *   For rotary potentiometer: $V_{out} = V_{in} \times \frac{\theta}{\theta_{max}}$
    *   **Advantages:** The output is a voltage signal, which is easier to process and measure with standard electronic instruments (e.g., voltmeters, ADCs). It also minimizes the effect of lead resistance.

**Important Note:** For linear operation, the wiper movement should be confined to a specific range where the resistance change is linear with displacement. Total angle of rotation for rotary potentiometers is typically 270° to 360° for continuous rotation.

**Example Scenario (Voltage Divider):**
Imagine a linear potentiometer with a total resistance of 10 kΩ and a travel of 100 mm. A 5V DC supply is connected across the ends. If the wiper is positioned 50 mm from the starting end, the output voltage will be:
$V_{out} = 5V \times \frac{50 \text{ mm}}{100 \text{ mm}} = 2.5V$.

---

## 4. Characteristics of Potentiometric Transducers

**4.1. Static Characteristics:**

*   **Sensitivity:** The ratio of the change in output signal (voltage or resistance) to the change in displacement.
    *   For voltage output: Sensitivity = $\frac{\Delta V_{out}}{\Delta x}$ or $\frac{\Delta V_{out}}{\Delta \theta}$. This is constant for an ideal linear potentiometer.
    *   Units: V/mm or V/degree.
*   **Linearity:** The degree to which the output signal is directly proportional to the input displacement.
    *   **Ideal Potentiometer:** Output is perfectly linear.
    *   **Non-Linearity:** Deviations from the ideal linear relationship. Often expressed as a percentage of the full-scale output.
        *   *Reference: Dobelin, Chapter 4, discusses linearity and its importance in measurement systems.*
*   **Resolution:** The smallest change in displacement that can be detected by the transducer.
    *   **Wire-wound potentiometers:** Have discrete steps due to winding of resistive wire, leading to finite resolution. The resolution is determined by the number of turns.
    *   **Film-type potentiometers (conductive plastic, cermet):** Offer continuous resolution, limited by electrical noise and the characteristics of the measuring instrument.
*   **Hysteresis:** The difference in output reading for the same input displacement when approached from opposite directions. Can be caused by mechanical looseness, friction, or electrical contact issues.
*   **Dead Zone:** A range of displacement over which the output does not change, often due to mechanical looseness or insufficient wiper contact.
*   **Resistance Taper:** Refers to the relationship between resistance and position along the track. Most displacement potentiometers have a linear taper. Non-linear tapers (e.g., logarithmic, sinusoidal) are available for specific applications but are not typically used for direct displacement measurement without signal conditioning.

**4.2. Dynamic Characteristics:**

*   **Frequency Response:** The range of frequencies over which the transducer can accurately measure dynamic changes in displacement. Limited by the mechanical inertia of the wiper and the electrical time constant of the resistive element.
*   **Response Time:** The time taken for the output to settle to its final value after a sudden change in input displacement.

---

## 5. Advantages and Disadvantages of Potentiometric Transducers

**5.1. Advantages:**

*   **Simplicity:** Relatively simple in construction and principle of operation.
*   **Low Cost:** Generally less expensive compared to other displacement transducers like LVDTs or optical encoders.
*   **Direct Voltage Output:** Easily provides a voltage output proportional to displacement when used as a voltage divider, simplifying signal conditioning.
*   **High Sensitivity:** Can offer good sensitivity, especially with high-resolution resistive elements.
*   **Versatility:** Available in both linear and rotary forms, with various stroke lengths and resistance values.

**5.2. Disadvantages:**

*   **Contacting Mechanism:** The wiper makes physical contact with the resistive element, leading to:
    *   **Wear and Tear:** Friction causes wear, limiting the lifespan and reliability, especially in high-cycle applications.
    *   **Mechanical Noise:** Vibration or looseness can cause output noise.
    *   **Finite Resolution (Wire-wound):** Steps in output due to wire windings.
*   **Limited Bandwidth:** Not suitable for very high-frequency dynamic measurements due to inertia and electrical time constants.
*   **Susceptibility to Environment:** Can be affected by dust, dirt, and moisture, which can interfere with the wiper contact and increase resistance.
*   **Loading Effects:** The output impedance of the potentiometer and the input impedance of the measuring device can affect the accuracy of the voltage division, especially if the load is not high enough.
*   **Non-Linearity:** While designed for linearity, manufacturing tolerances and wiper contact pressure can introduce non-linearities.

*   *Reference: Nakra & Chaudhry, Chapter 3, discusses the merits and demerits of various transducers, including potentiometers.*
*   *Reference: Sawhney & Sawhney, Chapter 14, provides a detailed comparison of different displacement sensors.*

---

## 6. Applications of Potentiometric Transducers

Potentiometers are widely used in various engineering applications due to their cost-effectiveness and simplicity, especially where high accuracy or very high-speed measurements are not critical.

*   **Robotics and Automation:**
    *   Feedback for joint positions in robotic arms.
    *   Position sensing in automated machinery.
*   **Automotive Industry:**
    *   Throttle position sensors (TPS).
    *   Brake pedal position sensors.
    *   Seat position adjustments.
    *   Steering wheel angle sensors.
*   **Industrial Controls:**
    *   Position feedback in hydraulic and pneumatic cylinders.
    *   Control valve position monitoring.
    *   Level measurement in tanks (using a float attached to a rotary potentiometer).
*   **Test and Measurement Equipment:**
    *   Joysticks for controlling equipment.
    *   Setting values on control panels.
    *   Measuring deflection in structural testing.
*   **Consumer Electronics:**
    *   Volume and tone controls in audio equipment.
    *   Adjustments on scientific instruments.

---

## 7. Selection Criteria for Potentiometric Transducers

When selecting a potentiometric transducer for a specific application, consider the following:

*   **Type of Motion:** Linear or Rotary.
*   **Range of Measurement:** Required stroke length (linear) or angle of rotation (rotary).
*   **Required Accuracy and Linearity:** What level of non-linearity is acceptable?
*   **Resolution Requirements:** Does the application demand continuous resolution or are steps acceptable?
*   **Operating Environment:** Temperature, humidity, dust, vibration.
*   **Lifespan and Reliability:** Number of cycles expected.
*   **Electrical Characteristics:** Input voltage, required output signal, impedance matching.
*   **Cost:** Budget constraints.
*   **Mounting and Integration:** Ease of installation and connection to the mechanical system.

*   *Reference: Kumar, Chapter 5, discusses selection criteria for instrumentation devices based on application requirements.*
*   *Reference: Rajput, Chapter 7, covers factors influencing the choice of transducers for mechanical measurements.*

---

## 8. Practice Questions and Exercises

**Multiple Choice Questions:**

1.  What is the primary principle of operation for a potentiometric displacement transducer?
    a) Electromagnetic induction
    b) Capacitive variation
    c) Variable resistance
    d) Piezoelectric effect

2.  In a voltage divider configuration of a potentiometer, the output voltage is proportional to:
    a) The total resistance of the track
    b) The excitation voltage
    c) The ratio of the wiper position to the total track length/angle
    d) The contact resistance between the wiper and the track

3.  Which of the following is a disadvantage of potentiometric displacement transducers?
    a) High cost
    b) Limited lifespan due to wear
    c) No contact with the resistive element
    d) Very high bandwidth

4.  For a linear potentiometer with a travel of 50 mm and a total resistance of 5 kΩ, if the wiper is at 25 mm, what is the output resistance if connected as a rheostat?
    a) 2.5 kΩ
    b) 5 kΩ
    c) 0 kΩ
    d) 1 kΩ

**Short Answer Questions:**

5.  Describe the two main types of potentiometric displacement transducers based on motion.
6.  Explain the difference between using a potentiometer as a rheostat and as a voltage divider for displacement measurement.
7.  What is meant by the "resolution" of a potentiometric transducer, and how does it differ between wire-wound and conductive plastic types?
8.  List three common engineering applications where potentiometric sensors are used.

**Problem Solving:**

9.  A rotary potentiometer has a total resistance of 10 kΩ and a maximum angle of travel of 270°. If it is excited by a 10V DC supply, calculate the output voltage when the shaft is rotated by 90° from its starting position.
10. A linear potentiometer with a stroke of 200 mm provides an output voltage that varies from 0V to 5V. If the measured output voltage is 3.5V, what is the measured displacement?

---

## 9. Answers to Practice Questions

**Multiple Choice Questions:**

1.  **c) Variable resistance**
2.  **c) The ratio of the wiper position to the total track length/angle**
3.  **b) Limited lifespan due to wear**
4.  **a) 2.5 kΩ** (Resistance is proportional to position: $5 \text{ kΩ} \times \frac{25 \text{ mm}}{50 \text{ mm}} = 2.5 \text{ kΩ}$)

**Short Answer Questions:**

5.  **Linear Potentiometers:** Measure displacement along a straight line. The wiper moves linearly along a straight resistive element.
    **Rotary Potentiometers:** Measure angular displacement. The wiper moves along a curved resistive element, driven by a rotating shaft.
6.  **Rheostat:** Only two terminals (one end and wiper) are used. The output is a variable resistance. This method is less common due to difficulties in accurately measuring resistance and potential errors from lead resistance.
    **Voltage Divider:** Three terminals are used (both ends and wiper). A constant voltage is applied across the ends, and the output voltage is taken from the wiper. This provides a direct voltage output proportional to displacement and is less affected by lead resistance.
7.  **Resolution** is the smallest change in displacement that the transducer can detect.
    *   **Wire-wound:** Has finite resolution because the resistive element is made of discrete turns of wire. The resolution is determined by the number of turns per unit length/angle.
    *   **Conductive Plastic/Cermet:** Offer continuous resolution, theoretically limited only by electrical noise and the precision of the measurement instrument, as the resistive track is a continuous film.
8.  Three common applications:
    *   Robotics (joint position feedback)
    *   Automotive (throttle position sensors)
    *   Industrial controls (actuator position feedback)
    *(Other valid answers include joysticks, control valve monitoring, level measurement, etc.)*

**Problem Solving:**

9.  **Calculation:**
    Total resistance = 10 kΩ
    Maximum angle = 270°
    Excitation voltage ($V_{in}$) = 10V
    Given angle ($\theta$) = 90°

    Using the voltage divider formula for rotary potentiometers:
    $V_{out} = V_{in} \times \frac{\theta}{\theta_{max}}$
    $V_{out} = 10V \times \frac{90°}{270°}$
    $V_{out} = 10V \times \frac{1}{3}$
    $V_{out} = 3.33V$

    **Answer:** The output voltage is 3.33V.

10. **Calculation:**
    Stroke length ($L$) = 200 mm
    Output voltage range ($V_{in}$) = 5V (from 0V to 5V)
    Measured output voltage ($V_{out}$) = 3.5V

    Using the voltage divider formula for linear potentiometers:
    $V_{out} = V_{in} \times \frac{x}{L}$
    Rearranging to find displacement ($x$):
    $x = L \times \frac{V_{out}}{V_{in}}$
    $x = 200 \text{ mm} \times \frac{3.5V}{5V}$
    $x = 200 \text{ mm} \times 0.7$
    $x = 140 \text{ mm}$

    **Answer:** The measured displacement is 140 mm.

---

## 10. Important Points to Remember

*   Potentiometers are **variable resistors** that convert mechanical position into an electrical signal.
*   They are most commonly used in a **voltage divider configuration** for a direct voltage output.
*   The output voltage is **linearly proportional to the wiper position** for ideal linear potentiometers.
*   **Wear and limited lifespan** are significant disadvantages due to the mechanical contact between the wiper and the resistive track.
*   **Resolution** is a key characteristic, being finite for wire-wound types and continuous for film types.
*   **Loading effects** can impact accuracy if the measuring instrument's input impedance is not significantly higher than the potentiometer's output impedance.
*   Despite their limitations, their **low cost and simplicity** make them suitable for many applications where extreme accuracy or dynamic performance is not required.

---

This concludes the study notes for Potentiometric Transducers in Displacement Measurement. Remember to consult the provided textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
