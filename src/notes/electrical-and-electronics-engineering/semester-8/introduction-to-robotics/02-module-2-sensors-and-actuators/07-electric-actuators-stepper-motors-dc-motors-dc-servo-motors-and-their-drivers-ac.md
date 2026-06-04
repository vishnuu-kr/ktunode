---
title: "Electric actuators- Stepper motors, DC motors, DC servo motors and their drivers, AC motors, Linear actuators, selection of motors"
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 2: Sensors and Actuators"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c4c"
status: "completed"
scrapedAt: "2026-05-23T16:41:32.692Z"
---
# INTRODUCTION TO ROBOTICS - Module 2: Sensors and Actuators

## Topic: Electric Actuators

---

### **Learning Outcomes Covered in this Topic:**

*   Understand the fundamental principles of various electric actuators used in robotics.
*   Differentiate between stepper motors, DC motors, DC servo motors, AC motors, and linear actuators.
*   Explain the working principles and characteristics of motor drivers.
*   Identify factors for selecting appropriate motors for specific robotic applications.
*   Relate the selection of actuators to the overall robot configuration and gripper design (CO2, CO3).

---

### **1. Introduction to Electric Actuators**

*   **Definition:** Electric actuators are devices that convert electrical energy into mechanical energy to produce motion. They are the "muscles" of a robot, enabling it to move its joints, end-effectors, and navigate.
*   **Importance in Robotics:**
    *   Provide precise and controlled motion.
    *   Offer a wide range of power, speed, and torque capabilities.
    *   Can be easily interfaced with robotic control systems.
    *   Offer good energy efficiency.
*   **Classification of Electric Motors for Robotics:**
    *   DC Motors (Brushed and Brushless)
    *   Stepper Motors
    *   Servo Motors (DC and AC)
    *   AC Motors (Induction, Synchronous)

---

### **2. DC Motors**

#### **2.1 Brushed DC Motors**

*   **Princ of Operation:** Based on the Lorentz force law, where a current-carrying conductor in a magnetic field experiences a force. A commutator and brushes are used to reverse the current direction in the rotor windings, ensuring continuous rotation.
    *   **Stator:** Contains permanent magnets or electromagnets to create a stationary magnetic field.
    *   **Rotor (Armature):** Contains windings connected to the DC power supply via a commutator and brushes.
    *   **Commutator:** A rotating switch that reverses the polarity of the current in the armature windings as the rotor turns, ensuring continuous torque in one direction.
    *   **Brushes:** Stationary contacts that rub against the commutator segments to transfer electrical power.
*   **Characteristics:**
    *   **Simple construction and control:** Easy to implement with basic electronics.
    *   **Good starting torque:** Suitable for applications requiring initial force.
    *   **Speed is proportional to voltage:** Allows for easy speed control.
    *   **Torque is proportional to current:** Allows for easy torque control.
    *   **Limited lifespan:** Brushes and commutator wear out over time, requiring maintenance.
    *   **Electrical noise:** Arcing at the brushes can generate electromagnetic interference (EMI).
    *   **Lower efficiency** compared to brushless DC motors due to friction and sparking.
*   **Applications in Robotics:**
    *   Simple robotic arms with less stringent precision requirements.
    *   Mobile robot wheels.
    *   Conveyor belts.
    *   End-effector manipulation (e.g., opening/closing grippers).
*   **Referencing Textbooks:**
    *   *Introduction to Robotics* by S. K. Saha: Discusses DC motor basics in the context of actuation.
    *   *Robotics and Control* by R. K. Mittal and I. J. Nagrath: Provides detailed electro-mechanical principles of DC motors.

#### **2.2 Brushless DC (BLDC) Motors**

*   **Princ of Operation:** Eliminates brushes and commutator, using electronic commutation. A sensor (e.g., Hall effect sensors) detects the rotor's position, and an electronic controller energizes the stator windings in sequence to produce rotation.
    *   **Stator:** Contains permanent magnets.
    *   **Rotor:** Contains windings.
    *   **Electronic Commutation:** Uses an electronic circuit (often with a microcontroller) to switch the current in the stator windings based on rotor position feedback.
*   **Characteristics:**
    *   **Higher efficiency:** No friction from brushes, leading to better energy conversion.
    *   **Longer lifespan and reliability:** No wearing parts like brushes.
    *   **Less electrical noise:** No sparking.
    *   **Higher speed capabilities.**
    *   **More complex control:** Requires electronic commutation circuit and position sensing.
    *   **Higher cost** compared to brushed DC motors.
*   **Applications in Robotics:**
    *   High-performance robotic arms requiring precise and dynamic movements.
    *   Mobile robots where reliability and efficiency are critical.
    *   Camera stabilization systems.
    *   Drones.
*   **Referencing Textbooks:**
    *   *Introduction to Robotics: Mechanics and Control* by John J. Craig: Discusses advanced motor control techniques, including BLDC motors.
    *   *Robotics-Fundamental Concepts and Analysis* by Ashitava Ghosal: Covers the theory and application of BLDC motors in robotic systems.

---

### **3. Stepper Motors**

*   **Princ of Operation:** A synchronous DC motor that divides a full rotation into a number of equal steps. The rotor moves in discrete steps in response to a sequence of electrical pulses applied to the stator windings.
    *   **Stator:** Has multiple windings arranged in phases.
    *   **Rotor:** Typically a permanent magnet or a toothed iron structure.
    *   **Operation:** By energizing the stator phases in a specific sequence, the rotor is pulled to align with the magnetic field created by the energized coils, resulting in incremental rotation.
*   **Types:**
    *   **Permanent Magnet (PM) Stepper Motors:** Rotor is a permanent magnet.
    *   **Variable Reluctance (VR) Stepper Motors:** Rotor is made of soft iron and has teeth.
    *   **Hybrid Stepper Motors:** Combine features of PM and VR types, offering higher torque and resolution. Most common in robotics.
*   **Characteristics:**
    *   **Precise positioning:** Can move to a specific angular position without feedback (open-loop control).
    *   **Excellent holding torque:** Can hold their position even when stationary.
    *   **Repeatable accuracy:** Steps are precise and repeatable.
    *   **Good low-speed torque.**
    *   **Limited high-speed performance:** Torque drops significantly at higher speeds.
    *   **Can lose steps** if overloaded or driven too fast (open-loop limitation).
    *   **Lower efficiency** compared to DC motors.
    *   **Can get hot** if continuously energized.
*   **Control Modes:**
    *   **Full Step:** Maximum torque, maximum vibration.
    *   **Half Step:** Smoother operation, double the resolution.
    *   **Microstepping:** Divides each full step into smaller microsteps, providing very smooth motion and higher resolution, but at the cost of slightly reduced torque and linearity.
*   **Applications in Robotics:**
    *   Precise positioning of robotic manipulators (e.g., camera pan/tilt).
    *   3D printers.
    *   CNC machines.
    *   Robotic grippers requiring precise jaw positioning.
*   **Referencing Textbooks:**
    *   *Fundamentals of Robotics – Analysis and Control* by Robert J. Schilling: Provides an in-depth analysis of stepper motor control and performance.
    *   *Robotics Technology and Flexible Automation* by S. R. Deb: Discusses stepper motors as actuators for precise motion control in automated systems.

---

### **4. DC Servo Motors**

*   **Definition:** A DC motor combined with a position sensor (encoder) and a control circuit. This closed-loop system allows for precise control of both position and speed.
*   **Princ of Operation:**
    1.  A **DC motor** provides the rotational output.
    2.  A **position sensor (encoder)** on the motor shaft continuously measures the actual angular position.
    3.  A **controller** compares the desired position/speed with the actual position/speed.
    4.  If there's an error, the controller adjusts the motor's voltage or current to reduce the error and drive the motor to the desired state.
*   **Components:**
    *   **DC Motor:** Usually a brushed or BLDC motor.
    *   **Encoder:** Optical or magnetic sensor that generates pulses indicating rotation and direction.
        *   **Incremental Encoder:** Generates pulses relative to a starting position.
        *   **Absolute Encoder:** Provides a unique digital code for each shaft position, even after power loss.
    *   **Controller (Servo Amplifier/Driver):** Processes the desired command and encoder feedback to generate appropriate motor drive signals.
*   **Characteristics:**
    *   **High precision and accuracy:** Closed-loop control eliminates lost steps.
    *   **High dynamic response:** Can quickly change speed and direction.
    *   **Good speed and torque control.**
    *   **Can achieve very precise positioning.**
    *   **More complex and expensive** than simple DC motors or stepper motors.
    *   **Requires tuning** of the control loop (PID controller parameters).
*   **Applications in Robotics:**
    *   Joints of robotic manipulators requiring high accuracy and speed (e.g., industrial robots).
    *   Robots needing to follow complex trajectories.
    *   Robotic cameras and tracking systems.
*   **Referencing Textbooks:**
    *   *Introduction to Robotics* by S. K. Saha: Provides details on servo control mechanisms and their implementation in robotic joints.
    *   *Introduction to Robotics: Mechanics and Control* by John J. Craig: Explains servo systems and their role in achieving desired manipulator movements.

---

### **5. Motor Drivers**

*   **Definition:** Electronic circuits that interface between the low-power control signals from a microcontroller or computer and the high-power requirements of electric motors. They act as amplifiers and switches.
*   **Purpose:**
    *   Amplify control signals to drive motors.
    *   Switch motor power on/off or vary voltage/current.
    *   Control motor direction.
    *   Provide protection for the control electronics and the motor.
*   **Common Driver Types:**
    *   **H-Bridge:** A circuit configuration that allows a DC motor to be driven in either direction and also to be braked. It consists of four switches (transistors like MOSFETs or BJTs).
        *   **Forward:** Switch 1 and 4 ON, 2 and 3 OFF.
        *   **Reverse:** Switch 2 and 3 ON, 1 and 4 OFF.
        *   **Brake (Short Circuit):** Switch 1 and 2 ON (or 3 and 4 ON).
        *   **Coast (Open):** All switches OFF.
    *   **Stepper Motor Drivers:** Designed to sequentially energize the motor windings. They often incorporate current control (chopping) for efficient operation and microstepping.
    *   **Servo Drivers:** More complex, incorporating feedback processing and PID control for servo motors.
*   **Key Features of Drivers:**
    *   **Voltage and Current Rating:** Must match the motor's requirements.
    *   **Control Interface:** PWM (Pulse Width Modulation) for speed control, direction pins, step/direction pins for steppers.
    *   **Protection Features:** Over-current, over-voltage, thermal shutdown.
    *   **Communication Interface:** (e.g., I2C, SPI, CAN bus) for advanced control.
*   **Referencing Textbooks:**
    *   *Robotics and Control* by R. K. Mittal and I. J. Nagrath: Covers the electronic implementation of motor control circuits.
    *   *Introduction to Robotics* by S. K. Saha: Discusses the power electronics necessary for motor actuation.

---

### **6. AC Motors**

*   **Princ of Operation:** Convert electrical energy from an AC power supply into mechanical energy. The stator windings, when supplied with AC voltage, create a rotating magnetic field, which induces a current in the rotor, causing it to rotate.
*   **Types:**
    *   **Induction Motors (Asynchronous Motors):** Most common type. The rotor speed is slightly less than the synchronous speed of the rotating magnetic field.
        *   **Squirrel Cage:** Rotor has conducting bars shorted at the ends. Simple, robust, low cost.
        *   **Wound Rotor:** Rotor has windings connected to slip rings, allowing external resistance to be added for starting torque and speed control.
    *   **Synchronous Motors:** Rotor speed is exactly synchronized with the rotating magnetic field. Often used for applications requiring constant speed or power factor correction.
*   **Characteristics:**
    *   **Robust and reliable:** Especially induction motors.
    *   **Low maintenance:** No brushes in most common types.
    *   **High power-to-weight ratio.**
    *   **Starting torque varies** by type.
    *   **Speed control is more complex** compared to DC motors, often requiring Variable Frequency Drives (VFDs).
    *   **Require AC power supply.**
*   **Applications in Robotics:**
    *   Industrial robots with high power requirements.
    *   Large-scale automation systems.
    *   Robots requiring very consistent and high-speed operation.
*   **Referencing Textbooks:**
    *   *Introduction to Robotics* by S. K. Saha: Briefly touches upon AC motor types used in industrial automation.
    *   *Robotics Technology and Flexible Automation* by S. R. Deb: Discusses AC motors in the context of industrial automation and servo drives.

---

### **7. Linear Actuators**

*   **Definition:** Convert rotational motion from a motor (typically DC or stepper) into linear motion.
*   **Princ of Operation:** Usually employ a screw mechanism.
    *   **Lead Screw/Ball Screw Actuators:** A rotating screw drives a threaded nut, which moves linearly.
        *   **Lead Screw:** Simple, lower efficiency, prone to back-driving.
        *   **Ball Screw:** Uses recirculating ball bearings between the screw and nut for much higher efficiency, lower friction, and higher load capacity.
    *   **Rack and Pinion Actuators:** A rotating pinion gear drives a linear rack.
    *   **Solenoids:** Electromagnetically driven, typically for short, fast strokes, often used as simple on/off valves or locks.
*   **Advantages:**
    *   Direct linear motion without complex linkages.
    *   Can achieve high forces.
    *   Precise positioning is possible with appropriate motor and control.
*   **Disadvantages:**
    *   Can be slower than rotary actuators.
    *   Screw mechanisms can be susceptible to backlash.
    *   Ball screws can be expensive.
*   **Applications in Robotics:**
    *   Opening and closing gripper jaws.
    *   Linear slides for robotic arms.
    *   Actuating pneumatic or hydraulic valves in hybrid systems.
    *   Adjusting arm reach or positioning.
*   **Referencing Textbooks:**
    *   *Introduction to Robotics* by S. K. Saha: Discusses various types of actuators, including linear ones, for robotic mechanisms.
    *   *Robotics-Fundamental Concepts and Analysis* by Ashitava Ghosal: Explains the mechanical principles behind linear actuators.

---

### **8. Selection of Motors for Robotic Applications**

*   **Key Considerations:**
    *   **Torque:** The rotational force required to move the load at a given speed.
        *   **Static Torque (Holding Torque):** Torque needed to hold a position against gravity or external forces.
        *   **Dynamic Torque:** Torque needed to accelerate and move the load.
    *   **Speed:** The desired rate of rotation or linear movement.
    *   **Accuracy and Precision:** How close the actual position is to the commanded position, and the repeatability of movements.
    *   **Cost:** Budget constraints often influence motor choice.
    *   **Power Consumption and Efficiency:** Important for battery-powered or energy-conscious robots.
    *   **Size and Weight:** Critical for mobile robots or robots with payload limitations.
    *   **Environment:** Temperature, dust, moisture can affect motor choice and protection.
    *   **Control Complexity:** Open-loop vs. closed-loop control requirements.
    *   **Lifespan and Maintenance:** Reliability needs.
    *   **Noise Levels:** Important for human-interaction robots.
*   **Matching Motor to Application:**
    *   **For precise, repeatable open-loop positioning:** Stepper motors are often suitable.
    *   **For high-speed, dynamic, and accurate closed-loop control:** DC servo motors (especially BLDC servos) are preferred.
    *   **For simple, cost-effective motion with moderate precision:** Brushed DC motors can be used.
    *   **For high-power, continuous operation in industrial settings:** AC motors might be considered.
    *   **For direct linear motion:** Linear actuators are the choice.
*   **Relating to Course Outcomes:**
    *   **CO2 (Choose appropriate sensors and actuators):** This section directly addresses how to select the right actuator based on performance requirements.
    *   **CO3 (Choose appropriate robotic configuration and gripper):** The choice of actuator directly influences the type of robotic configuration (e.g., required degrees of freedom, torque at joints) and the design of grippers (e.g., precision of jaw movement). For instance, a delicate object might require a precise stepper or servo-driven gripper, while a heavy object might need a high-torque DC or AC motor.

*   **Referencing Textbooks:**
    *   All textbooks provide insights. *Introduction to Robotics* by S. K. Saha and *Fundamentals of Robotics – Analysis and Control* by Robert J. Schilling are particularly good for systematically evaluating motor selection criteria.

---

### **Practice Questions**

1.  **What is the primary difference between a brushed DC motor and a brushless DC (BLDC) motor in terms of their operation and components?**
    *   **Answer:** Brushed DC motors use mechanical brushes and a commutator to switch current direction in the rotor windings, leading to wear and electrical noise. BLDC motors use electronic commutation, requiring sensors and a controller, resulting in higher efficiency, longer lifespan, and less noise.

2.  **A robotic arm needs to move to a precise angular position and hold it there accurately, even if a small external force is applied. Which type of motor would you primarily consider and why?**
    *   **Answer:** A Stepper Motor. Stepper motors provide precise, incremental movements and excellent holding torque in an open-loop system, making them ideal for accurate positioning and holding without requiring complex feedback mechanisms. A DC servo motor could also achieve this with closed-loop control but is generally more complex and expensive for this specific requirement if open-loop precision suffices.

3.  **You are designing a mobile robot for a harsh environment where reliability and low maintenance are crucial. Which type of DC motor would you choose and what is the reason?**
    *   **Answer:** A Brushless DC (BLDC) motor. BLDC motors have no brushes or commutators, which are prone to wear and failure in harsh conditions. They offer higher efficiency, longer lifespan, and are less susceptible to environmental factors like dust or moisture that can degrade brush performance.

4.  **Explain the function of an H-bridge circuit in controlling a DC motor.**
    *   **Answer:** An H-bridge is a circuit that allows a DC motor to be driven in both forward and reverse directions. It uses four switching elements (transistors) arranged in an 'H' configuration. By controlling which switches are turned on, the direction of current flow through the motor can be reversed, thus reversing the motor's direction of rotation. It also allows for braking by shorting the motor terminals.

5.  **What is the main advantage of a DC servo motor over a standard DC motor or a stepper motor in terms of motion control?**
    *   **Answer:** The main advantage of a DC servo motor is its **closed-loop control**. This allows for precise regulation of both position and speed by using feedback from an encoder. It can correct for errors due to load changes or disturbances, leading to higher accuracy and dynamic response compared to open-loop stepper motors or standard DC motors.

6.  **List at least three factors to consider when selecting an actuator for a specific robotic application.**
    *   **Answer:**
        *   Torque requirements (static and dynamic).
        *   Required speed of operation.
        *   Accuracy and precision needed.
        *   Cost and budget.
        *   Size and weight constraints.
        *   Power consumption and efficiency.
        *   Operating environment.

---

### **Important Points to Remember:**

*   **Actuators are the "muscles" of a robot**, converting electrical energy to mechanical motion.
*   **DC motors** offer simplicity (brushed) or efficiency/reliability (brushless).
*   **Stepper motors** excel at precise open-loop positioning and holding torque.
*   **DC servo motors** provide high-accuracy, dynamic closed-loop control.
*   **Motor drivers** are essential for interfacing motors with control systems.
*   **AC motors** are typically used for high-power industrial applications.
*   **Linear actuators** provide direct linear motion.
*   **Motor selection is critical** and depends on a trade-off between performance requirements (torque, speed, accuracy), cost, size, and reliability.
*   **Understanding the principles of operation and characteristics of each actuator type is crucial** for fulfilling CO2 and CO3.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
