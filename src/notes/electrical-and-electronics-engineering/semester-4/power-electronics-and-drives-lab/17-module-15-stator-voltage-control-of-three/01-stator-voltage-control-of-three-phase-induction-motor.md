---
title: "Stator Voltage control of Three-Phase Induction Motor"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 15: Stator Voltage control of Three"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36151"
status: "completed"
scrapedAt: "2026-05-23T16:18:13.006Z"
---
# Power Electronics and Drives Lab: Module 15 - Stator Voltage Control of Three-Phase Induction Motor

## 1. Introduction to Stator Voltage Control

The stator voltage control is one of the simplest and most widely used methods for controlling the speed of a three-phase induction motor. It operates on the principle that the torque developed by an induction motor is proportional to the square of the applied stator voltage. By varying the stator voltage, we can effectively control the motor's speed.

**Key Concepts:**

*   **Torque-Speed Characteristics:** An induction motor's torque-speed curve shows the relationship between the motor's torque and its speed. The slip is the difference between the synchronous speed and the rotor speed, expressed as a percentage of synchronous speed.
*   **Effect of Voltage on Torque:** Torque ($T$) is approximately proportional to the square of the applied stator voltage ($V_s$):
    $T \propto V_s^2$
*   **Speed Control:** Reducing the stator voltage shifts the torque-speed curve downwards, resulting in a lower operating speed for a given load torque.

**Learning Outcomes Covered:**

*   Understanding the basic principles of adjustable speed drives for induction motors (CO5: K4).
*   Understanding the need for improved load waveforms and utility interface (CO4: K3).

**References:**

*   **L. Umanand, "Power Electronics- Essentials and Applications" (2009):** Chapter on AC Voltage Controllers and their application in motor speed control.
*   **Ned Mohan, Undeland, Robbins, "Power Electronics- Converters, Applications and Design, 3e" (2022):** Discusses voltage control strategies for AC drives.
*   **Muhammad H. Rashid, "Power Electronics- Devices, Circuits and Applications" (2014):** Provides a foundational understanding of AC voltage controllers.

---

## 2. Methods for Stator Voltage Control

The most common method for achieving variable stator voltage for an induction motor is using **AC Voltage Controllers**, often implemented with **Thyristors (SCRs)** or **TRIACs**.

### 2.1. AC Voltage Controllers (Static AC Switches)

These are semiconductor devices that can switch AC power to the load. They are used to control the RMS value of the AC voltage applied to the motor.

#### 2.1.1. Thyristor-Based AC Voltage Controller (Phase Control)

This method uses pairs of anti-parallel connected SCRs to control the voltage applied to each phase of the three-phase motor.

**Circuit Configuration:**

*   For a three-phase motor, three such anti-parallel SCR pairs are connected in series with each phase winding of the motor.
*   The firing angle ($\alpha$) of the SCRs determines the amount of voltage delivered to the motor.

**Operation:**

*   By controlling the firing angle, a portion of each half-cycle of the AC voltage waveform is blocked, effectively reducing the RMS voltage applied to the motor.
*   A larger firing angle results in a lower RMS voltage.

**Key Concepts:**

*   **Firing Angle ($\alpha$):** The delay angle after the voltage waveform crosses zero before the SCR is triggered.
*   **Phase Control:** The process of controlling the firing angle of SCRs to regulate the output voltage.
*   **RMS Voltage Control:** The output is a chopped waveform, and its RMS value is controlled by $\alpha$.

**Mathematical Relation:**

The RMS output voltage per phase ($V_{o,rms}$) for a sinusoidal input voltage ($V_{peak}$) with firing angle $\alpha$ is given by:

$V_{o,rms} = V_{peak} \sqrt{\frac{1}{\pi} \int_{\alpha}^{\pi} (\sin \theta)^2 d\theta}$
$V_{o,rms} = V_{peak} \sqrt{\frac{1}{\pi} \left( \frac{\pi - \alpha}{2} + \frac{\sin(2\alpha)}{4} \right)}$

For a three-phase system with line-to-line RMS voltage $V_L$, the peak phase voltage is $V_{peak} = V_L / \sqrt{3}$.

**Example:**

If the input line voltage is $400V$ RMS, then $V_{peak} = 400/\sqrt{3} \approx 230.9V$. If the firing angle $\alpha = 90^\circ = \pi/2$ radians, the RMS voltage per phase would be:

$V_{o,rms} = 230.9 \sqrt{\frac{1}{\pi} \left( \frac{\pi - \pi/2}{2} + \frac{\sin(\pi)}{4} \right)} = 230.9 \sqrt{\frac{1}{\pi} \left( \frac{\pi}{4} \right)} = 230.9 \sqrt{\frac{1}{4}} = 230.9 \times 0.5 = 115.45V$

**Important Points to Remember:**

*   Stator voltage control is effective for speed reduction, but not for increasing speed above the base speed.
*   As voltage is reduced, the motor torque decreases significantly ( $T \propto V_s^2$). This can lead to stalling under heavy loads at low speeds.
*   Phase control introduces harmonics into the motor current and voltage waveforms, which can lead to increased motor losses and reduced power factor.
*   The minimum controllable voltage is limited by the commutation of the SCRs and the motor's ability to produce sufficient torque.

**Learning Outcomes Covered:**

*   Understanding the features of AC voltage controllers and analyzing their operation (CO2: K4).
*   Understanding the need for improved load waveforms (harmonics) and utility interface (power factor) (CO4: K3).
*   Understanding the basic drive schemes for Induction Motors (CO5: K4).

**References:**

*   **Jai P Agrawal, "Power Electronic Systems- Theory and Design" (2006):** Chapters on SCRs and AC voltage controllers.
*   **Joseph Vithayathil, "Power electronics: principles and applications" (2010):** Detailed explanation of phase control with SCRs.
*   **D.W. Hart, "Power Electronics" (2010):** Covers the application of thyristors for voltage control.
*   **Philip T Krein, "Elements of Power Electronics" (2017):** Provides a theoretical basis for AC voltage controllers.

#### 2.1.2. TRIAC-Based AC Voltage Controller

TRIACs are semiconductor devices that can conduct in both directions, making them suitable for AC voltage control without needing anti-parallel SCRs.

**Circuit Configuration:**

*   A TRIAC can be connected in series with each phase of the motor.
*   The gate control circuit is more complex to ensure proper triggering in both half-cycles.

**Operation:**

*   Similar to SCRs, the firing angle of the TRIAC controls the portion of each half-cycle that is allowed to pass to the motor.

**Advantages over SCRs:**

*   Simpler circuit configuration (one device per phase instead of two).
*   Potentially lower cost.

**Disadvantages:**

*   TRIACs generally have lower power handling capabilities compared to SCRs.
*   Commutation can be more challenging for inductive loads like induction motors.
*   The firing angle control is limited, and the voltage waveform quality might be poorer.

**Important Points to Remember:**

*   TRIACs are typically used for lower power applications.
*   Careful design of the gate control circuit is essential for reliable operation.

**References:**

*   **Muhammad H. Rashid, "Power Electronics- Devices, Circuits and Applications" (2014):** Discusses TRIAC characteristics and applications.
*   **Cyril W Lander, "Power Electronics" (1993):** Provides information on TRIAC based control.

### 2.2. Soft Starters (A subset of Stator Voltage Control)

Soft starters are a specific application of stator voltage control, primarily used to provide a smooth start to induction motors. They gradually increase the stator voltage from a low value to the full line voltage, reducing the high starting current and mechanical shock.

**How they work:**

*   They typically use SCRs or TRIACs to control the voltage applied to the motor during the starting phase.
*   The voltage is ramped up over a set period, allowing the motor to accelerate smoothly.

**Benefits:**

*   Reduced starting current.
*   Reduced mechanical stress on the motor and driven equipment.
*   Improved power factor during starting.

**Learning Outcomes Covered:**

*   Understanding the features of adjustable speed drives (including starting methods) for induction motors (CO5: K4).

**References:**

*   **Ned Mohan, Siddharth Raju, "Power Electronics- A first course: Simulations and Laboratory Implementations" (2023):** May contain examples or simulations related to soft starters.
*   **Weidong Xiao, "Power Electronics Step by Step- Design, Modeling, Simulation and Control" (2021):** Might offer insights into the design and control of soft starters.

---

## 3. Performance Characteristics of Stator Voltage Control

### 3.1. Speed-Torque Characteristics

*   **Reduced Voltage:** When the stator voltage is reduced, the maximum torque capability of the motor also reduces significantly (approximately by the square of the voltage). The entire torque-speed curve is scaled down.
*   **Operating Speed:** For a given load torque, the motor will operate at a lower speed.
*   **Starting Torque:** The starting torque is also reduced, which limits the application of this method to loads that do not require high starting torque.

**Example:** If the motor is designed to deliver 100 Nm of starting torque at full voltage, reducing the voltage to 50% will reduce the starting torque to approximately $100 \times (0.5)^2 = 25$ Nm.

### 3.2. Power Factor

*   **Lagging Power Factor:** Induction motors inherently operate with a lagging power factor, especially at light loads.
*   **Effect of Voltage Control:** Phase control introduces harmonics and can further degrade the power factor, particularly at reduced voltage levels and higher firing angles. This is due to the chopped voltage waveform and the non-sinusoidal current drawn by the motor.

### 3.3. Efficiency

*   **Reduced Efficiency:** Stator voltage control is generally less efficient than other methods like variable frequency control.
*   **Harmonic Losses:** The harmonic content in the voltage and current waveforms leads to increased losses in the motor (e.g., iron losses, copper losses).
*   **Reduced Output Power:** At reduced voltages, the motor's output power is also reduced.

### 3.4. Harmonics

*   **Generation of Harmonics:** The switching action of the SCRs or TRIACs introduces significant harmonic distortion in the voltage and current waveforms applied to the motor.
*   **Impact of Harmonics:**
    *   **Increased Motor Losses:** Harmonics can cause extra heating in the stator windings and core.
    *   **Reduced Torque Quality:** The pulsating torque due to harmonics can lead to vibrations.
    *   **Reduced Power Factor:** Harmonics contribute to the overall reactive power consumption.
    *   **Audible Noise:** Motors can produce more audible noise.

**Learning Outcomes Covered:**

*   Understanding the need for improved efficiency and load waveforms (CO4: K3).
*   Understanding the features of AC voltage controllers and analyzing their operation (CO2: K4).

**References:**

*   **L. Umanand, "Power Electronics- Essentials and Applications" (2009):** Discusses the performance implications of phase control.
*   **Ned Mohan, Undeland, Robbins, "Power Electronics- Converters, Applications and Design, 3e" (2022):** Analyzes the harmonic content and efficiency of voltage controllers.

---

## 4. Applications of Stator Voltage Control

*   **Fans and Pumps:** Where the load torque is approximately proportional to the square of the speed, stator voltage control is a suitable and cost-effective method for speed adjustment.
*   **Cranes and Hoists:** For lifting and lowering loads, controlled acceleration and deceleration can be achieved.
*   **Conveyor Belts:** Adjusting the speed of conveyor systems.
*   **Soft Starters:** As mentioned earlier, for smooth starting of larger induction motors to limit inrush currents.

**Limitations:**

*   Not suitable for loads requiring high starting torque.
*   Not suitable for operation above the rated speed.
*   Efficiency is lower compared to V/f control or vector control.
*   Significant harmonic generation.

**Learning Outcomes Covered:**

*   Understanding the features of adjustable speed drives and analyzing basic drive schemes for Induction Motors (CO5: K4).

**References:**

*   **Jai P Agrawal, "Power Electronic Systems- Theory and Design" (2006):** Discusses application areas for AC voltage controllers.
*   **Joseph Vithayathil, "Power electronics: principles and applications" (2010):** Provides practical examples of AC voltage controller applications.

---

## 5. Laboratory Implementation and Considerations

### 5.1. Hardware Setup

*   **Three-Phase Induction Motor:** The motor to be controlled.
*   **AC Voltage Controller Unit:** Typically consists of a power circuit with anti-parallel SCRs (or TRIACs) for each phase, along with gate drive and firing control circuits.
*   **Firing Pulse Generator:** Generates the trigger pulses for the SCRs/TRIACs based on a control signal (e.g., from a potentiometer or microcontroller).
*   **Load:** Mechanical load for the motor, or a brake if available.
*   **Measurement Instruments:**
    *   Ammeter (for line current)
    *   Voltmeter (for line/phase voltage)
    *   Wattmeter (for power measurement)
    *   Tachometer (for speed measurement)
    *   Oscilloscope (to observe voltage and current waveforms, and firing pulses)

### 5.2. Control Circuit

*   **Potentiometer-Based Control:** A simple method where a potentiometer is used to vary the firing angle. This provides manual control.
*   **Microcontroller-Based Control:** For more sophisticated control, a microcontroller can be used to implement PID control for speed regulation or to generate precise firing sequences.

### 5.3. Safety Precautions

*   **High Voltages:** Always work with extreme caution when dealing with high AC voltages.
*   **Grounding:** Ensure all equipment is properly grounded.
*   **Emergency Stop:** Familiarize yourself with the emergency stop procedures.
*   **Power Components:** Be aware of the heat generated by power semiconductor devices and ensure adequate heatsinking.
*   **Gate Drive Circuits:** Ensure proper isolation and drive signal integrity for the power switches.

**Learning Outcomes Covered:**

*   Understanding the operation of modern power semiconductor devices and designing suitable gate driver circuits & heatsinks (CO1: K5).
*   Understanding the features of AC voltage Controllers and analyzing operation (CO2: K4).

**References:**

*   **Power Electronics- A first course: Simulations and Laboratory Implementations by Ned Mohan, Siddharth Raju (2023):** This reference is particularly valuable for practical lab implementation and simulation aspects.
*   **Power Electronics by D.W. Hart (2010):** Provides insights into the design of gate drive circuits.
*   **Power Electronics- Devices, Circuits and Applications by Muhammad H. Rashid, (2014):** Covers the practical aspects of power electronic circuit design.

---

## 6. Practice Questions and Answers

**Q1. What is the fundamental principle behind stator voltage control of a three-phase induction motor?**
**A1:** The principle is that the torque developed by an induction motor is approximately proportional to the square of the applied stator voltage ($T \propto V_s^2$). By reducing the stator voltage, the torque capability of the motor is reduced, leading to a lower operating speed.

**Q2. What are the primary semiconductor devices used in stator voltage controllers for AC induction motors?**
**A2:** Thyristors (SCRs) in anti-parallel configurations for each phase, or TRIACs.

**Q3. Explain the role of the firing angle ($\alpha$) in a thyristor-based AC voltage controller.**
**A3:** The firing angle determines the delay from the zero-crossing of the AC voltage waveform before the thyristor is triggered. By varying $\alpha$, a portion of each half-cycle is blocked, thus controlling the RMS output voltage delivered to the motor. A larger $\alpha$ results in a lower output voltage.

**Q4. What are the main drawbacks of stator voltage control for induction motor speed control?**
**A4:**
    *   Reduced starting torque, limiting application to loads that don't require high starting torque.
    *   Introduction of harmonics into the voltage and current waveforms, leading to increased motor losses, reduced power factor, and potential noise.
    *   Lower efficiency compared to other methods like V/f control.
    *   Speed cannot be increased above the rated speed.

**Q5. For a three-phase induction motor connected to a line voltage of 415V RMS, what is the approximate RMS phase voltage? If the stator voltage controller is set to reduce the RMS phase voltage to 70% of its full value, what would be the new RMS phase voltage?**
**A5:**
    *   Full RMS phase voltage ($V_{phase,rms}$) = $V_{line,rms} / \sqrt{3} = 415V / \sqrt{3} \approx 239.6V$ RMS.
    *   New RMS phase voltage = $0.70 \times 239.6V \approx 167.7V$ RMS.

**Q6. Why is stator voltage control generally not suitable for loads requiring precise speed regulation under varying torque conditions?**
**A6:** Because the torque capability of the motor is significantly reduced at lower voltages. If the load torque varies, the motor's speed will deviate more significantly from the desired setpoint due to the reduced torque margin, especially at lower voltage settings.

---

## 7. Summary and Key Takeaways

*   **Stator Voltage Control** is a simple method to reduce the speed of three-phase induction motors by varying the RMS voltage applied to the stator windings.
*   **AC Voltage Controllers** (using SCRs or TRIACs) are the primary power electronic converters used for this purpose.
*   **Torque is proportional to the square of the voltage**, meaning that reducing voltage significantly reduces torque capability.
*   **Limitations:** Reduced starting torque, harmonic generation, poor power factor, and lower efficiency.
*   **Applications:** Primarily for fans, pumps, and as soft starters where these limitations are acceptable.
*   **Laboratory Implementation:** Requires understanding of SCR/TRIAC triggering, gate drive circuits, and proper measurement techniques using oscilloscopes and other instruments.

**Knowledge Check (Aligning with COs):**

*   Can you explain how varying the firing angle of SCRs affects the motor speed? (CO2, CO5)
*   What are the primary reasons for the reduced efficiency and power factor in this method? (CO4)
*   How would you set up a basic experiment to demonstrate stator voltage control in the lab? (CO1, CO2)
*   Can you contrast the starting torque characteristics of a motor started with full voltage versus stator voltage control? (CO5)
*   What specific harmonic frequencies are expected to be present in the motor current when using phase control? (CO4)
