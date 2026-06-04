---
title: "Aim: To draw the characteristics of the given relay."
subject: "POWER SYSTEM LAB"
module: "Module 14: Relay Testing  –Voltage relay/ Impedance Relay (Electromechanical/Static/Numerical)"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36804"
status: "completed"
scrapedAt: "2026-05-23T16:31:21.483Z"
---
# Power System Lab: Module 14 - Relay Testing (Voltage/Impedance Relays)

## Aim: To Draw the Characteristics of the Given Relay

### 1. Introduction to Relay Characteristics

Relays are crucial protective devices in power systems. Understanding their **characteristics** is fundamental to ensuring proper operation and effective protection. Relay characteristics graphically represent the relationship between the operating quantity (e.g., voltage, current, impedance) and the time taken for the relay to operate. These characteristics dictate when and how quickly a relay will trip for a given fault condition.

This module focuses on drawing the characteristics of **Voltage Relays** and **Impedance Relays**. We will explore these relays across their different technological implementations: **Electromechanical, Static, and Numerical**.

### 2. Course Outcomes Alignment

This experiment directly aligns with the following course outcomes:

*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software. (Knowledge Level: K3)**
    *   While this lab is hands-on, understanding relay characteristics involves analyzing the response of the relay to different power system conditions (faults that manifest as changes in voltage, current, and impedance). This provides practical insight into the mathematical models that describe these relationships. The characteristic curves themselves are graphical representations of these underlying mathematical functions.
*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance. (Knowledge Level: K3)**
    *   The primary objective of this lab is to **conduct tests** on a given relay to draw its characteristics. This directly fulfills the requirement of testing power system components and analyzing their performance based on the obtained characteristic curves.

### 3. Types of Relays and Their Characteristics

#### 3.1. Voltage Relays

Voltage relays operate based on the magnitude of voltage. They are typically used for:

*   **Overvoltage protection:** Tripping when voltage exceeds a set limit.
*   **Undervoltage protection:** Tripping when voltage falls below a set limit.

**Key Concepts:**

*   **Pick-up Voltage:** The minimum voltage at which the relay starts to operate.
*   **Drop-off Voltage:** The maximum voltage at which the relay drops out (resets).
*   **Time-Current/Time-Voltage Characteristic:** For time-delayed voltage relays, this curve shows the operating time as a function of voltage deviation from the pick-up value.

**Types of Voltage Relays and their Characteristics:**

*   **Electromechanical Voltage Relays:**
    *   **Operating Principle:** Based on the magnetic effect of current produced by voltage. A moving part (e.g., disc, armature) moves when the voltage reaches a certain level, closing or opening contacts.
    *   **Characteristic:** Typically exhibit an Inverse-Time characteristic. The higher the voltage deviation (above or below the pick-up value), the faster the relay operates.
    *   **Example:** An overvoltage relay might have a characteristic where at a voltage 10% above the pick-up, it trips in 5 seconds, while at 20% above, it trips in 2 seconds.
*   **Static Voltage Relays:**
    *   **Operating Principle:** Utilize solid-state electronic components like transistors, diodes, and operational amplifiers.
    *   **Characteristic:** Offer more precise and flexible characteristics, including definite-time and inverse-time. They can be programmed for specific applications.
    *   **Example:** A static undervoltage relay can be set with a precise pick-up voltage and a definite time delay, or a time-voltage curve that is more tightly controlled than electromechanical relays.
*   **Numerical Voltage Relays:**
    *   **Operating Principle:** Based on digital signal processing. Voltage is sampled, digitized, and processed by microprocessors.
    *   **Characteristic:** Highly versatile and programmable. Can implement a wide range of characteristics (definite-time, inverse-time, very inverse, extremely inverse) and can be adjusted remotely.
    *   **Example:** A modern numerical overvoltage relay can be configured through software to have multiple stages of overvoltage protection with different time delays, or a characteristic that precisely matches the required grid codes.

#### 3.2. Impedance Relays

Impedance relays are primarily used for **distance protection** in transmission and distribution lines. They operate based on the impedance between the relay location and the fault location.

**Key Concepts:**

*   **Impedance:** $Z = V/I$. For a transmission line, impedance is proportional to its length.
*   **Fault Location:** The impedance seen by the relay is directly related to the distance of the fault from the relay.
*   **Characteristics:**
    *   **Reach:** The maximum impedance (and thus distance) the relay will detect and operate for.
    *   **Operating Characteristic (R-X Plane):** Impedance relays are typically represented in the Resistance-Reactance (R-X) plane. The characteristic is a curve that defines the boundary between the "operate" and "no-operate" zones.
    *   **Zones of Protection:** Impedance relays are often set to provide multiple zones of protection:
        *   **Zone 1:** Instantaneous operation, covering 80-90% of the line's impedance.
        *   **Zone 2:** Delayed operation, covering the remainder of the line and a portion of the next line.
        *   **Zone 3:** Further delayed operation, providing backup protection for faults on adjacent lines or busbars.

**Types of Impedance Relays and their Characteristics:**

*   **Electromechanical Impedance Relays:**
    *   **Operating Principle:** Often based on the Mho circle or Ohm circle principles using induction cup or attracted armature mechanisms.
    *   **Characteristic:**
        *   **Mho Relay:** Operates when impedance falls within a circular characteristic in the R-X plane, with the circle passing through the origin. This is good for detecting faults on the protected line while being less susceptible to power swings.
        *   **Ohm Relay:** Operates when impedance falls within a rectangular or circular characteristic centered on the R-axis. Less selective than Mho relays.
    *   **Example:** An electromechanical Mho relay characteristic would be a circle in the R-X plane, where the relay operates if the fault impedance $Z_{fault}$ lies inside the circle.
*   **Static Impedance Relays:**
    *   **Operating Principle:** Use analog electronic circuits to calculate impedance and compare it with set parameters.
    *   **Characteristic:** Can implement various shapes like Mho, Blinders (offset circles), and quadrilaterals, offering better accuracy and flexibility than electromechanical relays.
    *   **Example:** A static impedance relay can be configured to have a Mho characteristic with adjustable diameter and offset.
*   **Numerical Impedance Relays:**
    *   **Operating Principle:** Utilize digital processing of voltage and current signals to calculate impedance and implement complex protection algorithms.
    *   **Characteristic:** Offer the highest degree of flexibility. Can implement all static relay characteristics and more. They can dynamically adjust their characteristics based on system conditions and feature multiple zones of protection with sophisticated interlocking logic.
    *   **Example:** A numerical distance relay can be programmed with Zone 1 (Mho), Zone 2 (offset Mho), and Zone 3 (quadrilateral) characteristics, all with adjustable time delays and settings.

### 4. Drawing Relay Characteristics: Experimental Procedure

The aim is to experimentally derive the operating characteristic of a given relay. This involves varying the input quantity (voltage or impedance) and observing the relay's response (operate/no-operate or operating time).

**General Steps:**

1.  **Setup:**
    *   Connect the relay to a variable AC voltage/current source and a DC source for the relay's internal logic (if required).
    *   Use appropriate measuring instruments (voltmeter, ammeter, timer).
    *   For impedance relays, a voltage source and current source are needed, and their ratio determines the impedance.
    *   Ensure all connections are made according to the relay's datasheet and the lab manual.

2.  **Varying Input and Recording Data:**

    *   **For Voltage Relays:**
        *   Set the relay for a specific operating mode (e.g., Overvoltage, Undervoltage).
        *   Gradually vary the input voltage from a low value to a high value (or vice-versa) while keeping other parameters constant (e.g., frequency).
        *   Record the voltage at which the relay picks up (starts to operate) and drops off (resets).
        *   If the relay has time delay, for a specific voltage setting, vary the voltage and record the operating time. Plot time vs. voltage.

    *   **For Impedance Relays:**
        *   Set the relay for a specific zone and characteristic (e.g., Mho, Zone 1).
        *   Simulate faults by varying the voltage (V) and current (I) supplied to the relay, ensuring that the impedance ($Z = V/I$) is varied.
        *   It's common to keep the current constant and vary the voltage, or vice-versa, to traverse the R-X plane.
        *   Alternatively, supply a constant voltage and current with a specific phase angle, which represents a point in the R-X plane. Vary these to cover the plane.
        *   For each tested impedance point (magnitude and angle, or R and X values), record whether the relay operated or not.
        *   If testing time characteristics, record the operating time for different impedance values.

3.  **Plotting the Characteristic:**

    *   **For Voltage Relays:**
        *   **Pick-up/Drop-off Voltage:** Plot pick-up voltage vs. setting, and drop-off voltage vs. setting.
        *   **Time-Voltage Characteristic:** Plot operating time on the y-axis and voltage (or percentage voltage deviation) on the x-axis.
    *   **For Impedance Relays:**
        *   Plot the obtained impedance points in the R-X plane. Mark the points where the relay operated ('O') and where it did not operate ('X').
        *   Draw a curve that separates the 'O' and 'X' regions. This curve is the relay's operating characteristic.
        *   If Mho characteristics are being tested, the characteristic will be a circle. You can plot the diameter and center of the circle.

4.  **Verification and Analysis:**

    *   Compare the drawn characteristic with the manufacturer's specified characteristic.
    *   Analyze any discrepancies and their possible causes (e.g., calibration errors, external influences).
    *   Discuss the implications of the drawn characteristic for power system protection.

### 5. Essential Equipment and Materials

*   **Variable AC Voltage Source:** To supply the primary voltage to the relay.
*   **Variable AC Current Source:** To supply the primary current to the relay (essential for impedance relays).
*   **DC Power Supply:** For the relay's internal circuitry if needed.
*   **Relay Under Test:** Voltage relay or Impedance relay (electromechanical, static, or numerical).
*   **Measuring Instruments:**
    *   AC Voltmeter (for primary and secondary voltages)
    *   AC Ammeter (for primary and secondary currents)
    *   Stopwatch/Timer (digital timer is preferable for accurate time measurements)
    *   Phase Angle Meter (optional, for impedance relay characterization)
*   **Protection Lab Trainer/Test Set:** Many labs use specialized test sets that can simulate various fault conditions and accurately measure operating times.
*   **Connecting Wires and Terminals.**
*   **Relay Datasheet/Manual:** Crucial for understanding connections, settings, and expected characteristics.

### 6. Important Points to Remember

*   **Safety First:** Always adhere to safety precautions when working with electrical equipment. Ensure proper grounding.
*   **Relay Settings:** Understand how to set the relay's operating parameters (e.g., pick-up voltage, time multiplier, impedance reach, angle settings). These settings directly influence the characteristic.
*   **Inverse Characteristics:** For inverse-time relays, the operating time decreases as the input quantity deviates further from the pick-up/set value.
*   **R-X Plane:** For impedance relays, visualizing characteristics in the R-X plane is crucial.
*   **Mho Characteristic:** A Mho characteristic in the R-X plane is a circle that passes through the origin. Its diameter and position are determined by the relay's settings.
*   **Calibration:** Ensure measuring instruments are calibrated for accurate results.
*   **Manufacturer's Data:** Always refer to the relay manufacturer's datasheet for correct connections, operational modes, and expected characteristics.
*   **Accuracy:** Pay attention to the accuracy class of the relay and the measuring instruments, as this affects the precision of the drawn characteristic.
*   **Power Swings:** Impedance relays can misoperate during power swings. Mho characteristics are less susceptible than others.
*   **Steady-State vs. Transient:** This experiment typically focuses on steady-state characteristics, but real-world faults involve transients.

### 7. Practice Questions and Exercises

**Question 1:**
A voltage relay is set to operate at 0.9 pu voltage with a definite time delay of 2 seconds. If the voltage drops to 0.7 pu, what would be the expected operating time if the relay had an inverse-time characteristic described by the equation $T = \frac{K}{V - V_{pickup}}$, where K = 0.5 and $V_{pickup}$ = 0.9 pu?
**Answer:**
Given: $V_{pickup} = 0.9$ pu, $V = 0.7$ pu, $K = 0.5$.
Using the inverse-time characteristic equation:
$T = \frac{0.5}{0.7 - 0.9} = \frac{0.5}{-0.2} = -2.5$ seconds.
*Correction:* The formula for inverse-time voltage relays typically uses the deviation from the pick-up value. For an undervoltage relay, a common form might be $T = \frac{K}{V_{pickup} - V}$. Let's assume this form.
$T = \frac{0.5}{0.9 - 0.7} = \frac{0.5}{0.2} = 2.5$ seconds.
*(Note: The exact form of the inverse-time equation can vary between manufacturers. This is a simplified example. A definite-time relay would still operate in 2 seconds at 0.7 pu).*

**Question 2:**
Explain the significance of plotting relay characteristics in the R-X plane for distance relays.
**Answer:**
Plotting relay characteristics in the R-X plane is significant because:
1.  **Visualization of Protection Zones:** It visually represents the area of the transmission line that the relay is designed to protect. The R-X plane directly relates to the impedance of the line, where resistance (R) and reactance (X) are components of the line impedance.
2.  **Fault Location Correlation:** The impedance seen by the relay ($Z_{fault} = V_{fault} / I_{fault}$) is directly proportional to the distance to the fault. By plotting this impedance in the R-X plane, we can see how the relay's operating characteristic corresponds to different fault locations along the line.
3.  **Selectivity:** The characteristic defines the boundaries for different zones of protection, allowing for selective tripping. Zone 1 characteristic covers most of the protected line, Zone 2 covers the next line with a time delay, and so on. The shapes and overlaps of these characteristics ensure that only the faulty line is tripped.
4.  **Comparison with System Impedance:** The impedance of the protected line can be plotted in the R-X plane, and the relay's characteristic can be superimposed to verify proper setting and coverage.
5.  **Understanding Relay Behavior:** It helps in understanding how the relay will behave under different fault conditions (e.g., phase-to-phase faults, ground faults, which have different R/X ratios).

**Question 3:**
An electromechanical impedance relay exhibits a Mho characteristic. If the relay is set to have a maximum impedance reach of 5 Ohms at an angle of 75 degrees, sketch this characteristic in the R-X plane and determine its diameter and center.
**Answer:**
For a Mho relay, the characteristic is a circle passing through the origin. The maximum reach defines the diameter of the circle along the line from the origin at the set angle.
Let the impedance of the line be $Z_{line} = R + jX$.
The relay operates if the fault impedance $Z_{fault}$ falls within the Mho circle.
The equation of a Mho circle passing through the origin with diameter $D$ along an angle $\theta$ is given by:
$Z \cos(\phi - \theta) = D/2$, where $Z$ is the impedance magnitude and $\phi$ is its angle.
Here, $D$ is the diameter, and $D/2$ is the radius. The maximum reach is $Z_{max} = 5$ Ohms at $\theta = 75^\circ$.
So, the diameter of the circle is $D = 5$ Ohms.
The radius of the circle is $R_{circle} = D/2 = 2.5$ Ohms.
The characteristic passes through the origin and has its furthest point at $5 \angle 75^\circ$.
The center of the circle lies on the line from the origin at an angle of $75^\circ$, at a distance equal to the radius (2.5 Ohms) from the origin.
Center $C = (\text{Radius}) \angle (\text{Angle of Reach})$
$C = 2.5 \angle 75^\circ$
In rectangular coordinates:
$C_R = 2.5 \cos(75^\circ) \approx 2.5 \times 0.2588 \approx 0.647$ Ohms
$C_X = 2.5 \sin(75^\circ) \approx 2.5 \times 0.9659 \approx 2.415$ Ohms
So, the center is approximately at $(0.647, 2.415)$ in the R-X plane.
The equation of the Mho circle is $(R - C_R)^2 + (X - C_X)^2 = R_{circle}^2$
$(R - 0.647)^2 + (X - 2.415)^2 = (2.5)^2 = 6.25$

**Sketch:**
Draw the R-axis (horizontal) and X-axis (vertical).
The circle will pass through the origin (0,0).
The circle will be tangent to a line perpendicular to the $75^\circ$ line at a distance of 5 Ohms from the origin. The center of the circle is at $(0.647, 2.415)$. The radius is 2.5 Ohms.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. References

*   **"Power System Protection and Switchgear" by B. Ravindranath and M. Chander.** (Refer to chapters on distance protection and voltage relays for detailed operating principles and characteristics.)
*   **"Protective Relaying: Principles and Applications" by Stanley H. Horowitz and Arun G. Phadke.** (Provides in-depth analysis of relay characteristics, testing procedures, and different types of relays.)
*   **Manufacturer's Manuals:** For specific numerical or static relays, the manufacturer's manual is essential for understanding their particular characteristics and settings.

This comprehensive set of notes should equip you with the necessary knowledge to understand, perform, and analyze the relay testing experiment in your Power System Lab. Remember to always refer to your specific lab manual and instructor for the exact procedures and equipment used in your lab.