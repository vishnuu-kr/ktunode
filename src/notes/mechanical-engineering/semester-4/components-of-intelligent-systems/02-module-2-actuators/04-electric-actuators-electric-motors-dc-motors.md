---
title: "Electric Actuators:  Electric motors - DC motors"
subject: "COMPONENTS OF INTELLIGENT SYSTEMS"
module: "Module 2: Actuators"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463112"
status: "completed"
scrapedAt: "2026-05-20T17:51:45.896Z"
---
# Components of Intelligent Systems: Module 2 - Actuators

## Topic: Electric Actuators: Electric Motors - DC Motors

This module focuses on **Actuators**, which are the components responsible for converting electrical energy into mechanical motion, enabling intelligent systems to interact with their physical environment. Within this module, we delve into **Electric Actuators**, with a specific emphasis on **DC Motors**.

### 1. Introduction to DC Motors

DC (Direct Current) motors are fundamental electric actuators widely used in intelligent systems due to their simplicity, controllability, and versatility. They convert electrical energy from a DC power source into mechanical rotational motion.

**Key Concepts & Definitions:**

*   **Actuator:** A component of an intelligent system that performs physical actions, such as moving an arm, opening a valve, or rotating a wheel. (Saha, 2008; SciTech Publishing, 2011)
*   **Electric Actuator:** An actuator that uses electrical energy to produce mechanical motion.
*   **DC Motor:** An electric motor that converts direct current electrical energy into mechanical rotational energy.
*   **Torque:** The rotational force produced by the motor. Measured in Newton-meters (Nm).
*   **Speed (RPM):** The rate at which the motor shaft rotates, typically measured in revolutions per minute.
*   **Armature:** The rotating part of the motor, usually containing coils of wire.
*   **Stator:** The stationary part of the motor, typically containing magnets or electromagnets that create a magnetic field.
*   **Commutator:** A mechanical switch that reverses the direction of current in the armature coils, ensuring continuous rotation.
*   **Brushes:** Stationary electrical contacts that transfer current from the power source to the rotating commutator.

**How DC Motors Work (General Principle):**

The operation of a DC motor is based on the principle of **Lorentz Force**: when a current-carrying conductor is placed in a magnetic field, it experiences a force. This force creates a torque that rotates the armature.

1.  **Magnetic Field Creation:** Magnets (permanent or electromagnets) in the stator create a stationary magnetic field.
2.  **Current Flow in Armature:** Current flows through coils of wire wound around the armature.
3.  **Force Generation:** The interaction between the magnetic field and the current-carrying armature coils generates a force.
4.  **Torque Production:** This force, applied at a distance from the axis of rotation, creates a torque that makes the armature spin.
5.  **Commutation:** As the armature rotates, the commutator and brushes ensure that the direction of current in the armature coils is reversed at the appropriate moment. This continuous reversal of current maintains the torque in the same direction, resulting in continuous rotation.

**(Refer to Saha, 2008, Chapter 5 for a detailed explanation of motor principles.)**

### 2. Types of DC Motors

DC motors can be broadly categorized based on how their stator and armature windings are connected:

#### 2.1 Brushed DC Motors

These are the most common types of DC motors. They utilize a mechanical commutator and brushes to switch the current direction in the armature coils.

*   **Brushed DC Motor Components:**
    *   **Stator:** Contains permanent magnets or field windings.
    *   **Rotor (Armature):** Contains armature windings, commutator, and shaft.
    *   **Brushes:** Made of carbon or graphite, they make contact with the commutator.
    *   **Commutator:** A segmented metal cylinder attached to the armature shaft.

*   **Types of Brushed DC Motors (based on field winding connection):**

    *   **Permanent Magnet DC (PMDC) Motor:**
        *   **Description:** The stator field is created by permanent magnets. This is the simplest and most common type of brushed DC motor.
        *   **Advantages:** High efficiency, good starting torque, simple construction.
        *   **Disadvantages:** Limited torque capability compared to wound field motors, magnetic field strength can degrade over time.
        *   **Applications:** Toys, small appliances, robotic actuators (e.g., servo motors, hobby DC motors).
        *   **(Refer to Saha, 2008, Section 5.2.1 for details on PMDC motors.)**

    *   **Shunt Wound DC Motor:**
        *   **Description:** The field winding is connected in parallel (shunt) with the armature winding.
        *   **Characteristics:** Relatively constant speed operation, good speed regulation.
        *   **Applications:** Applications requiring stable speed, like machine tools.
        *   **(Refer to Saha, 2008, Section 5.2.2 for shunt wound motors.)**

    *   **Series Wound DC Motor:**
        *   **Description:** The field winding is connected in series with the armature winding.
        *   **Characteristics:** Very high starting torque, speed varies significantly with load. **Caution: Must not be run without a load as it can overspeed and damage itself.**
        *   **Applications:** Traction motors (electric vehicles), cranes, elevators where high starting torque is critical.
        *   **(Refer to Saha, 2008, Section 5.2.3 for series wound motors.)**

    *   **Compound Wound DC Motor:**
        *   **Description:** Combines both series and shunt field windings.
        *   **Characteristics:** Offers a combination of the characteristics of shunt and series motors, providing better starting torque than shunt motors and better speed regulation than series motors.
        *   **Applications:** Applications needing good starting torque and relatively stable speed, like presses and rolling mills.
        *   **(Refer to Saha, 2008, Section 5.2.4 for compound wound motors.)**

#### 2.2 Brushless DC (BLDC) Motors

BLDC motors eliminate brushes and commutators by using electronic commutation.

*   **Description:** The stator contains windings, and the rotor contains permanent magnets. Electronic control circuitry (often using Hall-effect sensors or sensorless techniques) switches the current in the stator windings to create a rotating magnetic field that pulls the rotor along.
*   **Advantages:** Higher efficiency, longer lifespan (no brush wear), less noise, better speed control, higher power density.
*   **Disadvantages:** More complex control circuitry required, higher initial cost.
*   **Applications:** Drones, computer fans, electric vehicles, high-performance robotics.
*   **(Refer to SciTech Publishing, 2011, Chapter 5 for a discussion on BLDC motors and their control.)**

### 3. Performance Characteristics of DC Motors

Understanding the performance characteristics is crucial for selecting and controlling DC motors in intelligent systems.

*   **Torque-Speed Characteristic:**
    *   **Description:** A graph showing the relationship between the motor's torque output and its rotational speed.
    *   **Brushed DC Motors:** Generally exhibit a roughly linear inverse relationship between torque and speed. As torque increases, speed decreases, and vice-versa.
    *   **PMDC Motors:** Tend to have a steeper slope in their torque-speed curve, indicating that speed drops more rapidly with increasing load.
    *   **(Refer to Saha, 2008, Figure 5.5 for typical torque-speed curves.)**

*   **Torque-Current Characteristic:**
    *   **Description:** Shows the relationship between the motor's torque and the current drawn by the armature.
    *   **Brushed DC Motors:** Torque is directly proportional to armature current, assuming a constant magnetic field.
    *   `Torque (τ) ∝ Armature Current (Ia)`

*   **Speed-Voltage Characteristic:**
    *   **Description:** Relates the motor's speed to the applied voltage.
    *   **Brushed DC Motors:** Speed is approximately proportional to the applied armature voltage, assuming a constant load.
    *   `Speed (ω) ∝ Applied Voltage (Va)`

*   **Back EMF (Electromotive Force):**
    *   **Description:** As the armature rotates within the magnetic field, it generates a voltage that opposes the applied voltage. This is called back EMF.
    *   **Importance:** Back EMF plays a crucial role in regulating motor speed and limiting armature current.
    *   `Back EMF (Eb) ∝ Speed (ω)`
    *   At steady-state, `Va = Eb + Ia * Ra`, where `Ra` is armature resistance.

### 4. Control of DC Motors

Controlling DC motors in intelligent systems involves manipulating their speed and direction.

#### 4.1 Speed Control

*   **Methods:**
    *   **Varying Armature Voltage:** The most common method. Increasing the applied voltage increases speed; decreasing it decreases speed. This can be achieved using:
        *   **Variable Resistors (Rheostats):** Inefficient as they dissipate power as heat.
        *   **Pulse Width Modulation (PWM):** The most efficient and widely used method in embedded systems.
            *   **Description:** The voltage is switched on and off rapidly. The *duty cycle* (the percentage of time the voltage is "on") determines the average voltage applied to the motor, thus controlling its speed.
            *   **Example:** A 50% duty cycle means the motor receives half the full voltage on average.
            *   **(Refer to McRoberts, 2011, Chapter 7 for PWM implementation with Arduino.)**
            *   **(Refer to Das, 2012, Chapter 4 for PWM control in embedded systems.)**
    *   **Varying Field Flux (for wound field motors):**
        *   **Increasing field flux:** Decreases speed.
        *   **Decreasing field flux:** Increases speed. (Less common for speed control compared to voltage variation).

#### 4.2 Direction Control

*   **Method:**
    *   **Reversing Armature Current Polarity:** The direction of rotation is determined by the direction of current flow through the armature relative to the magnetic field. Reversing the polarity of the voltage applied to the armature reverses the motor's direction.
    *   **H-Bridge Configuration:** A common circuit used to achieve bidirectional control of DC motors. It consists of four switches (typically transistors or MOSFETs) arranged in an 'H' pattern. By controlling which switches are turned on, the direction of current through the motor can be reversed.
    *   **(Refer to McRoberts, 2011, Chapter 7 for H-bridge motor control with Arduino.)**
    *   **(Refer to Das, 2012, Chapter 5 for implementing motor drivers using transistors.)**

### 5. DC Motors in Intelligent Systems

DC motors are integral to the functionality of many intelligent systems.

*   **Examples:**
    *   **Robotics:** Actuating robotic arms, controlling wheel movement in mobile robots, operating grippers.
    *   **Automation:** Controlling conveyor belts, operating valves, positioning components in manufacturing.
    *   **Consumer Electronics:** Opening/closing disk drives, controlling fans, adjusting camera focus.
    *   **Drones:** Propeller propulsion.
    *   **Prosthetics:** Controlling movement of artificial limbs.

**(Refer to Saha, 2008, Chapter 5 for applications of DC motors in robotics.)**
**(Refer to SciTech Publishing, 2011, Chapter 5 for DC motor applications in various systems.)**

### 6. Important Points to Remember

*   DC motors convert electrical energy into mechanical rotational motion.
*   The working principle is based on the Lorentz force.
*   Brushed DC motors use mechanical commutators and brushes, while BLDC motors use electronic commutation.
*   PMDC motors are common for their simplicity and efficiency.
*   Series wound motors have high starting torque but must be loaded.
*   PWM is the most efficient method for speed control of DC motors.
*   An H-bridge is used to control the direction of DC motors.
*   Back EMF is generated and opposes the applied voltage, regulating motor speed.
*   Torque is proportional to armature current, and speed is proportional to applied voltage (under typical operating conditions).

---

### Practice Questions & Exercises

**Multiple Choice Questions:**

1.  Which of the following is NOT a primary component of a brushed DC motor?
    a) Stator
    b) Rotor (Armature)
    c) Electronic Commutator
    d) Brushes

    **Answer: c) Electronic Commutator** (This is a feature of BLDC motors)

2.  In a DC motor, torque produced is directly proportional to:
    a) Applied Voltage
    b) Armature Current
    c) Back EMF
    d) Armature Resistance

    **Answer: b) Armature Current**

3.  Which type of DC motor is known for its very high starting torque and the requirement of being operated with a load?
    a) Shunt Wound DC Motor
    b) Series Wound DC Motor
    c) PMDC Motor
    d) Compound Wound DC Motor

    **Answer: b) Series Wound DC Motor**

4.  PWM (Pulse Width Modulation) is primarily used for:
    a) Reversing motor direction
    b) Controlling motor speed
    c) Increasing motor torque
    d) Reducing motor noise

    **Answer: b) Controlling motor speed**

**Short Answer Questions:**

5.  Explain the role of the commutator and brushes in a brushed DC motor.
    **Answer:** The commutator, attached to the armature shaft, is a segmented conductor. Brushes are stationary contacts that press against the commutator. As the armature rotates, the commutator segments move under the brushes, effectively reversing the direction of current in the armature coils at specific points in the rotation. This continuous reversal ensures that the torque on the armature is always in the same direction, leading to continuous rotation.

6.  What is back EMF and why is it important in DC motor operation?
    **Answer:** Back EMF (Electromotive Force) is a voltage generated in the armature windings as they rotate within the magnetic field. This generated voltage opposes the applied voltage. It is important because it helps to limit the armature current and regulate the motor's speed. At steady state, the applied voltage is balanced by the back EMF and the voltage drop across the armature resistance.

7.  List two advantages of Brushless DC (BLDC) motors over brushed DC motors.
    **Answer:**
    *   Higher efficiency (no power loss due to friction and sparking of brushes).
    *   Longer lifespan (no brush wear).
    *   Less electrical noise and electromagnetic interference.
    *   Higher power-to-weight ratio.
    *   Better speed control capabilities.

**Practical Exercise (Conceptual):**

8.  Describe how you would use an Arduino microcontroller and an L298N motor driver (an H-bridge IC) to make a small DC hobby motor rotate forward at half speed, then backward at full speed.
    **Answer:**
    *   **Connection:** Connect the DC motor's terminals to the output terminals of the L298N motor driver. Connect the L298N's input control pins to digital output pins on the Arduino. Power the L298N and the motor appropriately.
    *   **Forward at Half Speed:**
        *   Set the direction control pins on the L298N to achieve forward rotation.
        *   Use an Arduino PWM-capable digital pin to control the speed input of the L298N.
        *   Use `analogWrite()` function on this PWM pin with a value of 128 (out of 255, representing 50% duty cycle) to achieve half speed.
    *   **Backward at Full Speed:**
        *   Change the direction control pins on the L298N to achieve backward rotation.
        *   Use `analogWrite()` function on the same PWM pin with a value of 255 (100% duty cycle) to achieve full speed.

---

### Learning Outcome Alignment Check:

*   **CO1: Explain the working of sensors and transducers (Knowledge Level: K2)**
    *   While this module focuses on actuators, understanding the interaction between sensors (providing input) and actuators (providing output) is implicit in intelligent systems. This module lays the groundwork for how actuators translate sensed information into action. (Referred to in the general introduction of the module and the broader context of intelligent systems).
*   **CO2: Describe the operation of actuators for intelligent systems (Knowledge Level: K2)**
    *   This entire module is dedicated to describing the operation of electric actuators, specifically DC motors, covering their principles, types, and characteristics.
*   **CO3: Develop the hardware and software for microcontroller based systems for actuation (Knowledge Level: K3)**
    *   The sections on control (PWM, H-bridge) and practical examples (conceptual exercise) directly address the hardware and software aspects needed to interface microcontrollers with DC motors. McRoberts (2011) and Das (2012) are explicitly referenced for these practical aspects.
*   **CO4: Outline the basic concepts of Embedded Systems and IoT (Knowledge Level: K2)**
    *   The context of DC motors as components within intelligent systems and embedded systems (as highlighted in application examples and textbook references like Das, 2012) aligns with understanding their role in broader embedded systems and IoT applications.

---

This comprehensive study note provides a detailed overview of DC motors, covering their fundamental principles, types, control methods, and applications within intelligent systems, directly addressing the learning outcomes of Module 2: Actuators.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
