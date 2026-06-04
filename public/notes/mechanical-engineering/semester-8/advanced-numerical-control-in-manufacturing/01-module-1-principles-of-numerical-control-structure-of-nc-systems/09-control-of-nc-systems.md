---
title: "Control of NC Systems"
subject: "ADVANCED NUMERICAL CONTROL IN MANUFACTURING"
module: "Module 1: Principles of Numerical Control Structure of NC systems"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446450e"
status: "completed"
scrapedAt: "2026-05-20T18:19:10.592Z"
---
# Advanced Numerical Control in Manufacturing

## Module 1: Principles of Numerical Control Structure of NC Systems

### Topic: Control of NC Systems

---

### Introduction to NC System Control

Numerical Control (NC) systems are the backbone of modern automated manufacturing. Their ability to execute complex machining operations with high precision and repeatability is directly tied to their sophisticated control mechanisms. This section delves into the fundamental principles and structures of how NC systems are controlled.

**Key Concept:** The core function of an NC system is to translate digital design data into precise machine tool movements. The control system is the brain of this process, interpreting the instructions and commanding the machine's actuators.

**Learning Outcomes Covered:**
*   **CO1: Understand the working of NC and CNC systems (K2)** - This topic directly addresses the fundamental working principles of NC and CNC control.
*   **CO2: Understand feedback mechanisms in CNC machines (K2)** - Control systems rely heavily on feedback, which will be a central theme.
*   **CO4: Understand the construction details of CNC machines (K2)** - Understanding control is inherently linked to understanding the components it interacts with.

---

### 1. Evolution of NC Control Systems

The evolution of NC control systems mirrors the broader technological advancements, particularly in computing.

*   **Point-to-Point (PTP) Control:**
    *   **Description:** The simplest form of NC control. The machine tool moves from one point to another, and machining occurs only at the designated points. The path between points is not controlled.
    *   **Applications:** Drilling, boring, tapping, punching.
    *   **Example:** A drilling machine moving the spindle to multiple hole locations on a workpiece.
    *   **Reference:** Wilson (1963) highlights the early PTP systems as foundational to NC.

*   **Straight-Cut Control:**
    *   **Description:** Allows the machine tool to move along straight lines parallel to the primary axes of the machine tool (e.g., X, Y, Z). It can also perform simultaneous motion along multiple axes.
    *   **Applications:** Milling operations with only orthogonal movements, cutting rectangular shapes.
    *   **Example:** Milling a slot that is perfectly horizontal or vertical.

*   **Continuous-Path (CP) Control:**
    *   **Description:** The most advanced form of NC control. It allows for simultaneous, coordinated motion of multiple machine axes, enabling the cutting tool to follow a complex, curvilinear path.
    *   **Applications:** Contouring, profiling, sculptured surface machining.
    *   **Example:** Machining a curved surface on a turbine blade or an automotive component.
    *   **Reference:** Kishel (1969) extensively discusses the capabilities of continuous-path control for complex shapes.

---

### 2. Structure of NC Systems

An NC system can be broadly categorized into two main parts: the **NC Controller** and the **Machine Tool**. The controller is responsible for interpreting the part program and generating control signals for the machine tool.

#### 2.1. The NC Controller (The "Brain")

The NC controller is the central unit that processes the NC program and translates it into electrical signals that drive the machine tool. Its primary components include:

*   **Input Device:** Reads the part program.
    *   **Early Systems:** Punched tape readers (paper or Mylar tape).
        *   **Reference:** Wilson (1963) extensively details the role of punched tape as the primary input medium in early NC.
    *   **Modern Systems (CNC):** Floppy disks, USB drives, Ethernet, direct PC connection.

*   **Tape Reader (or equivalent input) / Memory:**
    *   **Function:** Stores the NC program.
    *   **Evolution:** From sequential reading of tape to random access memory (RAM) and hard drives in CNC.

*   **Decoding and Interpretation Unit:**
    *   **Function:** Reads the G-codes and M-codes from the program and translates them into specific machine commands.
    *   **G-codes:** Preparatory functions (e.g., G00 for rapid traverse, G01 for linear interpolation).
    *   **M-codes:** Miscellaneous functions (e.g., M03 for spindle start, M05 for spindle stop, M08 for coolant on).
    *   **Reference:** Both Wilson (1963) and Kishel (1969) discuss the fundamental language of NC programming (G & M codes).

*   **Data Buffer:**
    *   **Function:** Temporarily stores blocks of NC code to ensure continuous flow of commands to the motion control system, even if the input device is slower.

*   **Motion Control System:**
    *   **Function:** Takes the decoded commands and generates the necessary signals to move the machine tool axes. This involves interpolation (calculating intermediate points between programmed points).
    *   **Types of Interpolators:**
        *   **Linear Interpolator:** Generates straight-line movements between points.
        *   **Circular Interpolator:** Generates circular or arc movements.
        *   **Helical Interpolator:** Generates helical movements.
        *   **Cubic Spline Interpolator (in CNC):** Generates smooth, complex curves.
    *   **Reference:** Koren (1996) provides in-depth coverage of motion control algorithms and interpolation techniques in computer-controlled manufacturing systems.

*   **Servo System:**
    *   **Function:** Receives signals from the motion control system and drives the machine tool axes via motors (e.g., DC servo motors, AC servo motors, stepper motors).
    *   **Components:**
        *   **Drive Amplifier:** Amplifies the control signal to power the motor.
        *   **Motor:** Provides the rotational force to drive the axis.
        *   **Feedback Device:** Measures the actual position, velocity, or acceleration of the axis.

*   **Feedback Loop:**
    *   **Function:** Essential for closed-loop control. The feedback device reports the actual state of the axis back to the controller, allowing for error correction.
    *   **Types of Feedback Devices:**
        *   **Encoders (Rotary and Linear):** Measure angular or linear displacement and velocity.
        *   **Resolvers:** Similar to encoders but more robust, often used in harsh environments.
        *   **Synchros:** Used for angular position feedback.
        *   **Laser interferometers:** For extremely high precision positioning.
    *   **Reference:** CO2 specifically targets understanding feedback mechanisms. This section details the "how."

#### 2.2. The Machine Tool

The machine tool comprises the physical elements that perform the manufacturing operation.

*   **Machine Tool Structure:** The rigid framework of the machine (e.g., bed, column, table, saddle).
*   **Drive Mechanisms:** Convert the motor's rotary motion into linear motion for the axes.
    *   **Lead Screws and Nuts:** Common for linear motion, though backlash can be an issue.
    *   **Ball Screws and Nuts:** Offer reduced friction and backlash compared to lead screws, leading to higher precision.
    *   **Rack and Pinion:** Used for longer linear travels.
    *   **Rotary Tables:** For controlling rotational axes (e.g., B, C axes).
*   **Spindle:** Holds and rotates the cutting tool or workpiece.
*   **Cutting Tool/Workpiece Holding:** Chucks, vises, tool holders.
*   **Axis Drives (Actuators):** Motors that drive the motion mechanisms.

---

### 3. Types of NC Control Systems (Based on Loop Structure)

The way feedback is used defines the loop structure of the control system.

*   **Open-Loop Control:**
    *   **Description:** The controller sends commands to the actuator, but there is no feedback mechanism to verify if the command was executed correctly.
    *   **Example:** Stepper motor systems where the controller pulses the motor, assuming each pulse results in a precise increment of movement.
    *   **Advantages:** Simpler, less expensive.
    *   **Disadvantages:** Susceptible to external disturbances (e.g., cutting forces) that can cause missed steps or incorrect positioning. Less accurate.
    *   **Reference:** Early NC systems often employed more open-loop or simpler closed-loop configurations.

*   **Closed-Loop Control:**
    *   **Description:** The controller sends commands, and a feedback device measures the actual output (position, velocity). This feedback is compared to the command, and any error is used to adjust the command to correct the movement.
    *   **Example:** Servo systems using encoders where the encoder's reading is compared to the target position.
    *   **Advantages:** High accuracy, compensation for external disturbances.
    *   **Disadvantages:** More complex, more expensive due to feedback components and more sophisticated controllers.
    *   **Reference:** CO2 focuses on understanding these systems. Modern CNC machines primarily use closed-loop control for precision. Koren (1996) extensively details the theory and implementation of closed-loop control in manufacturing.

#### 3.1. Elements of a Closed-Loop System

*   **Command Signal:** The desired position or velocity from the motion control system.
*   **Controller (Controller Amplifier/Servo Amplifier):** Compares the command signal with the feedback signal and generates an error signal. It then adjusts the output to the motor.
*   **Actuator (Motor):** Converts electrical energy into mechanical motion.
*   **Feedback Device (e.g., Encoder):** Measures the actual position or velocity.
*   **Error Signal:** The difference between the command signal and the feedback signal. The goal of the controller is to minimize this error.

---

### 4. CNC Controllers vs. Traditional NC Controllers

**CNC (Computer Numerical Control)** represents a significant advancement over earlier NC systems.

*   **Traditional NC:**
    *   **Hardware:** Primarily analog circuits, relay logic, and hard-wired logic for control.
    *   **Flexibility:** Limited flexibility in programming and adaptation.
    *   **Input:** Punched tape was dominant.
    *   **Interpolation:** Primarily fixed hardware interpolators.
    *   **Reference:** Wilson (1963) and Kishel (1969) describe these earlier systems in detail.

*   **CNC:**
    *   **Hardware:** Based on microprocessors and minicomputers, allowing for software-based control.
    *   **Flexibility:** High flexibility; programming can be changed and updated via software. Supports sophisticated features like look-ahead, error compensation, and diagnostics.
    *   **Input:** Digital media (floppy disks, USB, network), enabling larger and more complex programs.
    *   **Interpolation:** Software-based interpolators, allowing for more complex path generation (e.g., NURBS).
    *   **User Interface:** Sophisticated graphical user interfaces (GUIs) for programming, monitoring, and diagnostics.
    *   **Integration:** Can integrate with other factory systems (CAD/CAM, SCADA).
    *   **Reference:** Koren (1996) focuses on the "computer control" aspect, which is the defining feature of CNC.

---

### 5. Key Concepts and Definitions

*   **NC System:** A system that uses numerical data to control the movement of machine tools.
*   **CNC System:** A numerical control system that uses a dedicated computer (or microcomputer) to perform control functions.
*   **Part Program:** A set of instructions (codes and numerical data) that describes the desired sequence of operations and movements for a machine tool.
*   **G-code:** Codes that specify geometrical or motion-related commands.
*   **M-code:** Codes that specify miscellaneous or auxiliary functions (e.g., spindle on/off, coolant on/off).
*   **Axis:** A direction of motion for the machine tool (e.g., X, Y, Z).
*   **Actuator:** A device that converts an electrical control signal into mechanical motion (e.g., a motor).
*   **Feedback Device:** A sensor that measures the actual state (position, velocity, etc.) of an axis.
*   **Closed-Loop Control:** A control system where feedback from the output is used to adjust the input, thereby reducing errors.
*   **Open-Loop Control:** A control system that operates without feedback, assuming the commanded action will be performed correctly.
*   **Interpolator:** A circuit or software routine that calculates intermediate points along a defined path (linear, circular, etc.) between programmed end points.
*   **Servo System:** A system consisting of a motor, feedback device, and controller that provides precise control over motion.

---

### 6. Important Points to Remember

*   **Evolution:** NC control has evolved from basic PTP to sophisticated continuous-path CNC, driven by advancements in computing.
*   **Control Loop:** Closed-loop control, utilizing feedback, is crucial for achieving the high accuracy required in modern manufacturing.
*   **CNC vs. NC:** CNC's reliance on computers makes it significantly more flexible, powerful, and capable than traditional NC.
*   **G & M Codes:** These are the fundamental "language" of NC programming, directing both motion and auxiliary functions.
*   **Feedback is Key:** Understanding the role of feedback devices (encoders, resolvers) and their integration into servo systems is vital for comprehending how CNC achieves precision.

---

### 7. Practice Questions and Exercises

**Question 1:**
Differentiate between Point-to-Point (PTP) and Continuous-Path (CP) control in NC systems. Provide an example application for each.
**(K2 - CO1)**

**Question 2:**
Explain the purpose of a feedback mechanism in a CNC system. Name at least two common types of feedback devices used.
**(K2 - CO2)**

**Question 3:**
What is the primary advantage of a CNC system over a traditional NC system, as described by Wilson (1963) and Kishel (1969)?
**(K2 - CO1)**

**Question 4:**
Identify the main components of a closed-loop servo system in an NC machine.
**(K2 - CO4)**

**Question 5:**
Describe the role of G-codes and M-codes in an NC part program.
**(K2 - CO1)**

---

### Answers to Practice Questions

**Answer 1:**
*   **Point-to-Point (PTP) Control:** The machine tool moves from one discrete location to another. The path between these points is not controlled or machined. The machining operation occurs only at the programmed points.
    *   **Example Application:** Drilling holes at specific coordinates on a workpiece.
*   **Continuous-Path (CP) Control:** The machine tool axes move simultaneously and in a coordinated manner to follow a continuous path, which can be straight lines, arcs, or complex curves. Machining occurs continuously along this path.
    *   **Example Application:** Milling a contoured shape, such as a cam profile or a sculpted surface on an engine block.

**Answer 2:**
The purpose of a feedback mechanism in a CNC system is to **measure the actual position or velocity of a machine axis** and report it back to the controller. This allows the controller to compare the actual output with the commanded output. If there's a discrepancy (error), the controller can adjust its commands to the motor to correct the movement and ensure accurate positioning. This is the foundation of closed-loop control.

Common types of feedback devices include:
*   **Encoders (Rotary or Linear)**
*   **Resolvers**

**Answer 3:**
The primary advantage of a CNC system over a traditional NC system is its **flexibility and increased capability**, largely due to the use of computers. This allows for:
*   **Software-based control:** Easier modification, updates, and implementation of complex algorithms.
*   **Sophisticated programming:** Support for more complex motion commands and subroutines.
*   **Better diagnostics and error handling.**
*   **Interactive programming and user interfaces.**
*   **Integration with CAD/CAM software.**

**Answer 4:**
The main components of a closed-loop servo system in an NC machine are:
1.  **Controller (Servo Amplifier):** Compares command and feedback signals to generate an error signal.
2.  **Actuator (Motor - e.g., DC servo motor, AC servo motor):** Converts the electrical signal from the controller into mechanical motion.
3.  **Feedback Device (e.g., Encoder, Resolver):** Measures the actual position or velocity of the axis.
4.  **Drive Mechanism (e.g., Ball screw, Rack and pinion):** Transmits the motor's motion to the machine axis.

**Answer 5:**
*   **G-codes (Preparatory Codes):** These codes initiate specific machine functions, primarily related to motion and positioning. Examples include:
    *   `G00`: Rapid Traverse (move at maximum speed)
    *   `G01`: Linear Interpolation (move in a straight line at a controlled speed)
    *   `G02`/`G03`: Circular Interpolation (move along a circular arc)
    *   `G90`: Absolute Positioning
    *   `G91`: Incremental Positioning
*   **M-codes (Miscellaneous Codes):** These codes control auxiliary functions of the machine that are not directly related to axis motion. Examples include:
    *   `M03`: Spindle On (Clockwise)
    *   `M05`: Spindle Off
    *   `M08`: Coolant On
    *   `M09`: Coolant Off
    *   `M30`: Program End and Rewind

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
