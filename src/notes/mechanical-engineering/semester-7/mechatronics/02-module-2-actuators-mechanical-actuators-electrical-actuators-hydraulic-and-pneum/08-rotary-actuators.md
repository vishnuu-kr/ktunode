---
title: "Rotary actuators."
subject: "MECHATRONICS"
module: "Module 2: Actuators: Mechanical actuators, Electrical actuators, Hydraulic and Pneumatic actuators."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f12"
status: "completed"
scrapedAt: "2026-05-20T18:14:44.818Z"
---
# Mechatronics: Module 2 - Actuators: Rotary Actuators

## 1. Introduction to Actuators

**Definition:** Actuators are the components of a mechatronic system that convert electrical, hydraulic, or pneumatic energy into mechanical motion. They are the "muscle" of the system, responsible for performing physical actions.

**Role in Mechatronics:** Actuators are crucial for translating control signals into physical outputs, enabling a mechatronic system to interact with its environment.

**Course Outcome Alignment:**
*   **CO2:** Understand the characteristics and working of actuators and choose the optimal one based on the application (Knowledge Level: K2) - This section provides the foundational understanding of actuators.

**Key Concepts:**
*   **Energy Conversion:** Actuators transform one form of energy into mechanical energy.
*   **Control Signal:** Actuators respond to input signals from a controller (e.g., microcontroller, PLC).
*   **Mechanical Output:** The output is typically linear or rotary motion.

**From Textbooks:**
*   **Bolton (7th Ed):** Emphasizes actuators as the output stage of a mechatronic system, responsible for creating motion.
*   **Onwubolu:** Highlights the importance of actuators in achieving desired system behavior.
*   **Shetty & Kolk:** Discusses actuators in the context of system design and their impact on performance.

---

## 2. Rotary Actuators: An Overview

**Definition:** Rotary actuators are a type of actuator that produce rotational or angular motion. They are used in applications where a turning force or a continuous rotation is required.

**Key Characteristics:**
*   **Torque:** The rotational force produced by the actuator.
*   **Speed:** The rate at which the actuator rotates.
*   **Angular Displacement:** The angle through which the actuator rotates.
*   **Efficiency:** The ratio of mechanical output power to electrical/fluid input power.
*   **Operating Range:** The limits of torque, speed, and angular displacement.

**Course Outcome Alignment:**
*   **CO2:** Understand the characteristics and working of actuators and choose the optimal one based on the application (Knowledge Level: K2) - This section focuses on the specific characteristics of rotary actuators.

**From Textbooks:**
*   **Rajput:** Defines rotary actuators and their primary function in providing angular motion.
*   **Bolton (7th Ed):** Categorizes actuators and introduces rotary types used in various industrial and consumer applications.

---

## 3. Types of Rotary Actuators

Rotary actuators can be broadly classified based on their power source:

### 3.1. Mechanical Rotary Actuators

These actuators convert linear motion into rotary motion or vice-versa using mechanical linkages.

**Examples:**
*   **Crank-slider mechanisms:** Convert rotary motion into reciprocating linear motion or vice-versa.
*   **Gears and gear trains:** Transmit and modify torque and speed from a rotary input.
*   **Cam mechanisms:** Convert rotary motion into oscillating or reciprocating linear motion.

**Working Principle:** Relies on the physical interaction of mechanical components (levers, gears, cams, linkages) to achieve rotation.

**Advantages:**
*   Simple construction.
*   No external power source required (if driven by another mechanical element).
*   High torque capability in some configurations.

**Disadvantages:**
*   Limited flexibility and control precision.
*   Wear and tear on mechanical parts.
*   Can be noisy and inefficient due to friction.
*   Often require a separate driving motor.

**Course Outcome Alignment:**
*   **CO2:** Understand the characteristics and working of actuators and choose the optimal one based on the application (Knowledge Level: K2) - Understanding mechanical types helps in choosing the right actuator for a given system.

**From Textbooks:**
*   **Shetty & Kolk:** Discusses mechanical linkages and their role in creating rotary motion.

---

### 3.2. Electrical Rotary Actuators

These actuators use electrical energy to produce torque and rotation. This is the most common type in mechatronics.

**Key Components:**
*   **Motor:** The core component that converts electrical energy into mechanical rotational energy.
*   **Gearing (Optional):** Used to reduce speed and increase torque.
*   **Feedback Sensor (Optional):** Provides information about the motor's position or speed.

**Types of Electrical Motors Used as Rotary Actuators:**

#### 3.2.1. DC Motors (Brushed and Brushless)

**Working Principle:** Based on the interaction of magnetic fields and electric currents. A current-carrying conductor in a magnetic field experiences a force (Lorentz force), which produces torque.

**Brushed DC Motors:**
*   **Components:** Stator (permanent magnets), Rotor (armature with windings), Commutator, Brushes.
*   **Operation:** The commutator and brushes switch the direction of current in the armature windings as it rotates, ensuring continuous torque.
*   **Control:** Speed is controlled by varying the applied voltage. Torque is proportional to current.
*   **Advantages:** Simple control, low cost, good starting torque.
*   **Disadvantages:** Brush wear, sparking, EMI, limited lifespan, lower efficiency compared to BLDC.

**Brushless DC (BLDC) Motors:**
*   **Components:** Stator (windings), Rotor (permanent magnets).
*   **Operation:** Electronic commutation is used, where an external controller switches the current in the stator windings based on rotor position (detected by Hall effect sensors or sensorless techniques).
*   **Control:** Requires an electronic speed controller (ESC). Speed and torque are controlled by the ESC.
*   **Advantages:** Higher efficiency, longer lifespan, lower maintenance, less noise, better speed regulation, higher power density.
*   **Disadvantages:** More complex control electronics, higher initial cost.

**Applications:** Robotics, electric vehicles, computer peripherals (fans, hard drives), toys, small appliances.

**Course Outcome Alignment:**
*   **CO2:** Understand the characteristics and working of actuators and choose the optimal one based on the application (Knowledge Level: K2) - Detailed understanding of DC motor types.
*   **CO7:** Understand the use of mechatronic concepts in modern applications. (Knowledge Level: K2) - DC motors are prevalent in modern mechatronic systems.

**From Textbooks:**
*   **Bolton (7th Ed):** Provides a comprehensive overview of DC motors, including brushed and brushless types, their construction, and control methods.
*   **Onwubolu:** Discusses DC motors in the context of electromechanical energy conversion and their use in mechatronic systems.
*   **Rajput:** Explains the fundamental principles of DC motor operation and their applications.

#### 3.2.2. AC Motors (Induction Motors, Synchronous Motors)

**Working Principle:** Based on the creation of a rotating magnetic field in the stator, which induces a current and magnetic field in the rotor, causing it to rotate.

**Induction Motors:**
*   **Components:** Stator (windings), Rotor (squirrel cage or wound rotor).
*   **Operation:** The rotating magnetic field in the stator induces currents in the rotor conductors. The interaction between these induced currents and the stator's magnetic field creates torque. The rotor rotates at a slightly slower speed than the rotating magnetic field (slip).
*   **Control:** Speed control can be achieved using Variable Frequency Drives (VFDs).
*   **Advantages:** Robust, reliable, low maintenance, lower cost for larger power ratings, direct connection to AC mains.
*   **Disadvantages:** Less efficient at low speeds, requires VFD for precise speed control, lower starting torque compared to some DC motors.

**Synchronous Motors:**
*   **Components:** Stator (windings), Rotor (permanent magnets or DC-excited windings).
*   **Operation:** The rotor is magnetized (either by permanent magnets or a DC current) and locks onto the rotating magnetic field of the stator, rotating at synchronous speed.
*   **Control:** Requires a VFD for starting and speed control.
*   **Advantages:** Constant speed operation (independent of load), high efficiency.
*   **Disadvantages:** Requires a DC excitation source for the rotor, generally more expensive and complex than induction motors, needs a VFD for speed control.

**Applications:** Industrial machinery, pumps, fans, compressors, conveyor belts.

**Course Outcome Alignment:**
*   **CO2:** Understand the characteristics and working of actuators and choose the optimal one based on the application (Knowledge Level: K2) - Understanding AC motor types for industrial applications.

**From Textbooks:**
*   **Bolton (7th Ed):** Covers AC motor principles and their application in mechatronic systems.
*   **Onwubolu:** Discusses the use of AC motors in industrial automation.

#### 3.2.3. Stepper Motors

**Working Principle:** Stepper motors divide a full rotation into a number of equal steps. They can be precisely controlled to move to a specific angle (step) without requiring a feedback sensor (open-loop control).

**Types:**
*   **Permanent Magnet (PM) Stepper Motors:** Rotor is made of permanent magnets.
*   **Variable Reluctance (VR) Stepper Motors:** Rotor is made of a soft iron with teeth.
*   **Hybrid Stepper Motors:** Combine features of PM and VR types, offering higher torque and resolution.

**Operation:** The stator windings are energized in a specific sequence, creating magnetic poles that attract the rotor poles, causing it to move to the next step.

**Control:** Requires a stepper motor driver to sequence the excitation of stator windings.

**Advantages:**
*   Precise positional control without feedback (open-loop).
*   Good holding torque.
*   Repeatable and accurate movement.
*   Relatively simple to control.

**Disadvantages:**
*   Can lose steps if overloaded or driven too fast.
*   Lower efficiency and can generate heat.
*   Torque decreases with increasing speed.
*   Resonance issues at certain speeds.

**Applications:** 3D printers, CNC machines, robotics, scanners, plotters, precise positioning systems.

**Course Outcome Alignment:**
*   **CO2:** Understand the characteristics and working of actuators and choose the optimal one based on the application (Knowledge Level: K2) - Stepper motors are key for precise positioning.
*   **CO5:** Understand the use and characteristics of microcontrollers and choose the appropriate one based on the given application (Knowledge Level: K3) - Microcontrollers are often used to drive stepper motors.

**From Textbooks:**
*   **Bolton (7th Ed):** Provides a detailed explanation of stepper motor operation and control.
*   **Onwubolu:** Discusses stepper motors in the context of precision motion control.
*   **Shetty & Kolk:** Covers stepper motors as a choice for incremental motion control.

#### 3.2.4. Servo Motors

**Definition:** A servo motor is a rotary actuator that allows for precise control of angular or linear position, velocity, and acceleration. It typically consists of a motor (DC or AC), a feedback sensor (encoder or potentiometer), and a control circuit.

**Working Principle:**
1.  **Control Signal:** The controller sends a desired position or speed command.
2.  **Feedback:** A sensor (encoder, potentiometer) measures the actual position or speed of the motor shaft.
3.  **Comparison:** The control circuit compares the desired command with the actual feedback signal.
4.  **Error Signal:** If there is a difference (error), the control circuit generates an output signal to the motor.
5.  **Motor Actuation:** The motor drives the shaft to reduce the error until the actual position matches the desired position.

**Types:**
*   **DC Servo Motors:** Typically brushed DC motors with feedback.
*   **AC Servo Motors:** Typically brushless AC motors with feedback, offering higher performance.

**Advantages:**
*   High precision in position, velocity, and acceleration control.
*   Wide speed and torque range.
*   Good dynamic response.
*   Operates in closed-loop, making it robust to load variations.

**Disadvantages:**
*   More complex and expensive than stepper motors.
*   Requires precise tuning of control parameters (PID control).
*   Can exhibit overshoot or oscillations if not tuned properly.

**Applications:** Robotics, CNC machines, automation systems, aircraft control surfaces, camera autofocus.

**Course Outcome Alignment:**
*   **CO1:** Understand the characteristics and working of sensors and choose the optimal one based on the application (Knowledge Level: K2) - Understanding the feedback sensors used with servo motors.
*   **CO2:** Understand the characteristics and working of actuators and choose the optimal one based on the application (Knowledge Level: K2) - Servo motors are a prime example of precise actuators.
*   **CO3:** Understand the basics of mathematical modelling of the given real systems and to predicts its behaviour (Knowledge Level: K2) - Servo systems are often modelled using control theory (e.g., PID).

**From Textbooks:**
*   **Bolton (7th Ed):** Provides a thorough explanation of servo motors, their control loops, and applications.
*   **Onwubolu:** Discusses servo motor control and their role in achieving precise motion.
*   **Shetty & Kolk:** Covers servo motors in detail for advanced motion control applications.

---

### 3.3. Hydraulic Rotary Actuators

These actuators use pressurized hydraulic fluid to generate rotary motion.

**Working Principle:** Hydraulic fluid, pressurized by a pump, is directed to ports in the actuator. This fluid pressure acts on vanes or pistons within the actuator, creating a torque that causes the output shaft to rotate.

**Types:**
*   **Vane-type rotary actuators:** A rotor with vanes rotates within a chamber. Fluid pressure acts on the vanes, creating torque.
*   **Piston-type rotary actuators:** Pistons driven by hydraulic fluid engage a crank or rack-and-pinion mechanism to produce rotation.

**Advantages:**
*   High torque and power density.
*   Can operate at high pressures.
*   Good for heavy-duty applications.
*   Relatively simple construction for basic types.

**Disadvantages:**
*   Requires a hydraulic power unit (pump, reservoir, filters, valves).
*   Potential for leaks, environmental concerns.
*   Lower efficiency due to fluid friction and leakage.
*   More complex system integration.
*   Speed control can be challenging.

**Applications:** Heavy machinery (excavators, loaders), industrial automation, marine applications, aerospace.

**Course Outcome Alignment:**
*   **CO2:** Understand the characteristics and working of actuators and choose the optimal one based on the application (Knowledge Level: K2) - Understanding hydraulic options for high-power needs.

**From Textbooks:**
*   **Bolton (7th Ed):** Covers hydraulic actuators, including rotary types, and their applications.
*   **Onwubolu:** Discusses hydraulic actuators in the context of industrial automation.

---

### 3.4. Pneumatic Rotary Actuators

These actuators use compressed air to generate rotary motion.

**Working Principle:** Compressed air is directed to ports in the actuator, acting on internal mechanisms (vanes, pistons) to produce torque and rotation.

**Types:**
*   **Vane-type pneumatic actuators:** Similar to hydraulic vane types, but driven by compressed air.
*   **Rack-and-pinion pneumatic actuators:** A pneumatic cylinder with a rack that drives a pinion gear.
*   **Rotary vane actuators with springs:** Use air pressure to move vanes against spring force, with springs returning the vanes when pressure is released.

**Advantages:**
*   Low cost and widely available.
*   Simple operation and maintenance.
*   Environmentally clean (air exhaust).
*   Good for applications requiring fast actuation.
*   Inherently safe in hazardous environments (no sparks).

**Disadvantages:**
*   Lower torque and power density compared to hydraulics.
*   Compressibility of air leads to less precise control and "spongy" feel.
*   Requires a compressed air supply.
*   Limited rotational travel in some types.

**Applications:** Automation in light industries, robotics, pick-and-place mechanisms, valve actuation.

**Course Outcome Alignment:**
*   **CO2:** Understand the characteristics and working of actuators and choose the optimal one based on the application (Knowledge Level: K2) - Understanding pneumatic options for speed and cost-effectiveness.

**From Textbooks:**
*   **Bolton (7th Ed):** Discusses pneumatic actuators and their operation.
*   **Onwubolu:** Covers pneumatic systems in automation.

---

## 4. Selection Criteria for Rotary Actuators

Choosing the right rotary actuator depends on several factors:

*   **Required Torque:** The amount of rotational force needed.
*   **Required Speed:** The desired rotational speed.
*   **Angular Displacement:** The range of rotation required (continuous, limited angle).
*   **Precision and Accuracy:** How precisely the position needs to be controlled.
*   **Duty Cycle:** How often and for how long the actuator will operate.
*   **Power Source Availability:** Electricity, hydraulics, pneumatics.
*   **Environmental Conditions:** Temperature, dust, moisture, hazardous areas.
*   **Cost:** Initial cost and ongoing operating costs.
*   **Control Complexity:** Ease of integration with the control system.
*   **Size and Weight:** Space constraints and overall system weight.

**Course Outcome Alignment:**
*   **CO2:** Understand the characteristics and working of actuators and choose the optimal one based on the application (Knowledge Level: K2) - This section directly addresses the selection process.

**From Textbooks:**
*   **Bolton (7th Ed):** Emphasizes the importance of matching actuator specifications to application requirements.
*   **Shetty & Kolk:** Provides systematic approaches to actuator selection in system design.

**Example Scenario:**
Imagine designing a robotic arm joint that needs to rotate precisely to an angle of 90 degrees multiple times per second, with high accuracy.

*   **Considerations:** High precision, speed, and controlled angular displacement.
*   **Potential Choices:**
    *   **Stepper Motor:** Good for precise positioning, but might lack the speed and torque for dynamic movements.
    *   **Servo Motor:** Ideal for precise control of position, velocity, and acceleration, making it a strong candidate.
    *   **Pneumatic/Hydraulic:** Less suitable for precise angular control in this scenario, more for high torque or fast, less precise movements.

---

## 5. Practice Questions and Answers

**Question 1:**
What is the primary function of an actuator in a mechatronic system?
a) To sense environmental conditions.
b) To process data and make decisions.
c) To convert energy into mechanical motion.
d) To provide power to the control system.

**Answer:** c) To convert energy into mechanical motion.
*(Rationale: Actuators are the output components that perform physical actions.)*

**Question 2:**
Which type of electrical rotary actuator is best suited for applications requiring precise positioning without a feedback sensor?
a) Brushed DC Motor
b) BLDC Motor
c) Stepper Motor
d) AC Induction Motor

**Answer:** c) Stepper Motor
*(Rationale: Stepper motors are designed for open-loop positional control by moving in discrete steps.)*

**Question 3:**
A robotic arm lifting a heavy object would likely benefit from which type of rotary actuator due to its high torque capability?
a) Pneumatic Rotary Actuator
b) Servo Motor
c) Stepper Motor
d) Hydraulic Rotary Actuator

**Answer:** d) Hydraulic Rotary Actuator
*(Rationale: Hydraulic actuators offer high power and torque density, suitable for heavy lifting applications.)*

**Question 4:**
Explain the basic working principle of a brushless DC (BLDC) motor.

**Answer:**
A BLDC motor uses permanent magnets on the rotor and electromagnets on the stator. Electronic commutation, controlled by an external circuit (ESC) typically using Hall effect sensors or back-EMF sensing, switches the current in the stator windings sequentially. This creates a rotating magnetic field that interacts with the rotor's magnetic field, producing continuous torque and rotation.

**Question 5:**
List three key parameters to consider when selecting a rotary actuator for a specific application.

**Answer:**
Any three from the following:
*   Required Torque
*   Required Speed
*   Angular Displacement
*   Precision and Accuracy
*   Power Source Availability
*   Cost
*   Environmental Conditions

---

## 6. Important Points to Remember

*   **Actuators are the "movers" of a mechatronic system.** They take control signals and create physical motion.
*   **Rotary actuators produce rotational or angular motion.**
*   **Electrical actuators are the most common in mechatronics** due to their ease of control and integration.
*   **DC motors (especially BLDC) and stepper motors are vital for precise motion control.**
*   **Servo motors combine a motor with feedback for highly accurate position, velocity, and acceleration control.**
*   **Hydraulic and pneumatic actuators are chosen for high power/torque requirements** or specific environmental/safety needs, but often with less precision than electric options.
*   **Selection is application-driven:** Always match actuator capabilities (torque, speed, precision, etc.) to the system's demands.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 7. Textual References and Alignment with Course Outcomes

*   **Bolton (7th Ed):** Provides foundational knowledge on all types of actuators, with a good emphasis on electrical motors and servo systems. This directly supports **CO2**.
*   **Onwubolu:** Focuses on the application of mechatronic principles, including the role of actuators in automation and control. This supports **CO2**, **CO4** (indirectly through understanding system components), and **CO7**.
*   **Shetty & Kolk:** Offers a more in-depth look at actuator selection and system design, including mathematical modeling aspects for control. This supports **CO2**, **CO3**, and **CO5** (in relation to control systems for actuators).
*   **Rajput:** Offers a clear explanation of fundamental actuator principles. This supports **CO2**.

**Alignment Summary:**
*   **CO1 (Sensors):** Relevant when discussing feedback mechanisms in servo motors (Section 3.2.4).
*   **CO2 (Actuators):** This entire note is dedicated to understanding the characteristics and working of rotary actuators and their selection, directly addressing this outcome at a K2 level.
*   **CO3 (Modeling):** Servo motor control (Section 3.2.4) often involves mathematical modeling (e.g., PID controllers), which aligns with K2 understanding.
*   **CO4 (PLCs):** While not directly focused on PLCs, understanding actuators is a prerequisite for programming them for automation.
*   **CO5 (Microcontrollers):** The control of stepper motors and servo motors (Sections 3.2.3 & 3.2.4) heavily relies on microcontrollers, aligning with K3 understanding.
*   **CO6 (MEMS):** Not directly covered in this topic, but some micro-actuators might have rotary elements.
*   **CO7 (Modern Applications):** Examples provided throughout (robotics, 3D printers, EVs) highlight the use of rotary actuators in modern mechatronic applications, aligning with K2 understanding.