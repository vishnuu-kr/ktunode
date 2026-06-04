---
title: "(At least one programming exercise must be included in the end -semester"
subject: "ADVANCED MANUFACTURING ENGINEERING"
module: "Module 1: CNC: systems – Principle of operation, components of CNC system, coordinate systems, classification of CNC systems, point"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463380"
status: "completed"
scrapedAt: "2026-05-20T17:57:57.103Z"
---
# ADVANCED MANUFACTURING ENGINEERING
## Module 1: CNC Systems

---

### Topic: CNC Systems – Principle of Operation, Components of CNC System, Coordinate Systems, Classification of CNC Systems, Point-to-Point Motion

---

**Course Outcomes Addressed:**

*   **CO1: CNC programming, select appropriate tooling and parameters. (Knowledge Level: K3)**
    *   This module directly contributes to understanding the fundamental principles and components necessary for effective CNC programming. By grasping the coordinate systems and classifications, students will be better equipped to select appropriate tools and parameters for machining operations.

---

### 1. Principle of Operation of CNC Systems

**Key Concept:** Computer Numerical Control (CNC) is a manufacturing process that automates the control of machine tools and other equipment. It leverages computers to direct the movement of machinery through pre-programmed instructions.

**How it Works:**

1.  **Design & Programming:** A part is designed using CAD (Computer-Aided Design) software. This design is then translated into a set of instructions (G-code and M-code) by CAM (Computer-Aided Manufacturing) software or manually.
2.  **Data Input:** The CNC program is loaded into the CNC controller (the "brain" of the system).
3.  **Controller Interpretation:** The controller reads and interprets the G-code and M-code instructions.
4.  **Signal Generation:** Based on the interpreted code, the controller generates electrical signals.
5.  **Actuator Control:** These signals are sent to the machine's actuators (e.g., servo motors, stepper motors) which drive the machine axes (linear and rotational).
6.  **Tool Movement:** The actuators precisely move the cutting tool or the workpiece along the programmed paths.
7.  **Feedback System (Closed-Loop):** In most modern CNC systems, a feedback mechanism (e.g., encoders, resolvers) continuously monitors the actual position of the machine axes and sends this information back to the controller. This allows the controller to make real-time adjustments to ensure accuracy and compensate for any deviations.
8.  **Machining Operation:** The cutting tool performs the machining operation (cutting, milling, drilling, etc.) as per the programmed instructions.

**Reference:**
*   Koren, Yoram. *Computer Control of Manufacturing Systems*. TMH, 2017. (Chapter 1: Introduction to Numerical Control)

**Highlight:** The core principle of CNC is the translation of digital design data into precise physical motion of a machine tool through a programmed sequence of instructions. The feedback loop is crucial for achieving high accuracy.

---

### 2. Components of a CNC System

A typical CNC system comprises several interconnected components that work in synergy to execute the programmed machining operations.

**Key Components:**

*   **Part Program (Code):**
    *   **Definition:** A series of instructions written in a specific language (typically G-code and M-code) that tells the machine tool what to do, where to move, and when to perform specific functions.
    *   **G-Code (Preparatory Commands):** Commands that prepare the machine for a specific type of operation or motion (e.g., `G00` for rapid traverse, `G01` for linear interpolation, `G02` for circular interpolation).
    *   **M-Code (Miscellaneous Commands):** Commands that control auxiliary machine functions (e.g., `M03` for spindle start, `M05` for spindle stop, `M08` for coolant on, `M30` for program end).
    *   **Example:**
        ```gcode
        N10 G21 G90 G00 X0 Y0 ; Set to metric, absolute positioning, rapid move to origin
        N20 M03 S1000 ; Start spindle at 1000 RPM
        N30 G01 Z-5 F100 ; Linear move to Z-5 at feed rate 100 mm/min
        N40 G01 X10 Y10 ; Linear move to X10 Y10
        N50 M05 ; Stop spindle
        N60 G00 X0 Y0 ; Rapid move back to origin
        N70 M30 ; Program end and rewind
        ```

*   **Machine Tool:**
    *   **Definition:** The actual machinery that performs the material removal or shaping process (e.g., CNC lathe, CNC milling machine, CNC grinder).
    *   **Key Elements:**
        *   **Machine Axes:** Linear (X, Y, Z) and rotational (A, B, C) axes that enable movement of the tool or workpiece.
        *   **Spindle:** Rotates the cutting tool (milling) or workpiece (lathe).
        *   **Tool Holders/Turrets:** Secure and position the cutting tools.
        *   **Workholding Devices:** Fixtures or chucks that hold the workpiece.

*   **CNC Controller:**
    *   **Definition:** The "brain" of the CNC system. It reads the part program, interprets the commands, and generates control signals for the machine's drives.
    *   **Functions:**
        *   Program storage and management.
        *   Decoding of G-codes and M-codes.
        *   Interpolation (generating intermediate path points).
        *   Servo/stepper motor control.
        *   Feedback signal processing.
        *   Monitoring and diagnostics.
    *   **Interface:** Typically includes a display screen, keyboard, and input/output ports.

*   **Drive System (Axis Drives):**
    *   **Definition:** The systems responsible for translating the controller's signals into physical motion of the machine axes.
    *   **Types:**
        *   **DC Servo Motors:** Provide precise and continuous control of position and speed, widely used in high-performance CNC machines. They require feedback devices.
        *   **AC Servo Motors:** Similar to DC servos but use AC power, offering higher power density and reliability.
        *   **Stepper Motors:** Move in discrete steps. Simpler and less expensive than servo motors, suitable for less demanding applications or when high precision isn't paramount.
    *   **Components:** Motors, amplifiers/drivers, ball screws, linear guides.

*   **Feedback System (Position Feedback):**
    *   **Definition:** Devices that measure the actual position of the machine axes and send this information back to the controller. Essential for closed-loop control.
    *   **Types:**
        *   **Optical Encoders (Rotary/Linear):** Convert rotational or linear motion into digital pulses.
        *   **Resolvers:** Analog devices that provide angular position feedback.
        *   **Linear Scales:** Directly measure linear displacement of the machine axes.
    *   **Purpose:** Enables the controller to compare the commanded position with the actual position and make corrections for accuracy.

*   **User Interface (HMI - Human-Machine Interface):**
    *   **Definition:** The means by which the operator interacts with the CNC system.
    *   **Components:** Display screen (CRT/LCD/Touchscreen), keyboard, control panel buttons, joystick for manual control.

**Reference:**
*   Koren, Yoram. *Computer Control of Manufacturing Systems*. TMH, 2017. (Chapter 2: Components of a NC System)
*   Jain, V.K. *Advanced Machining Processes*. Narosa publishers, 2014. (Chapter 1: Introduction to Machining Processes, may discuss basic machine elements).

**Highlight:** A CNC system is a complex integration of hardware and software, where the controller acts as the central processing unit, translating programmed instructions into precise mechanical movements via the drive and feedback systems.

---

### 3. Coordinate Systems in CNC

**Key Concept:** Coordinate systems define the reference frame for all movements and positions within the CNC machine. Understanding these systems is fundamental for programming accurate toolpaths.

**Types of Coordinate Systems:**

*   **Machine Coordinate System (MCS):**
    *   **Definition:** A fixed coordinate system defined by the machine manufacturer. The origin (0,0,0) is typically at a specific point on the machine structure, often the home position or a machine fixed reference point.
    *   **Characteristics:**
        *   Absolute.
        *   Each machine has its own MCS.
        *   The controller uses this system internally for axis positioning.
    *   **Notation:** Often denoted with uppercase letters (X, Y, Z) for linear axes.

*   **Workpiece Coordinate System (WCS):**
    *   **Definition:** A coordinate system established on the workpiece itself. The origin (0,0,0) is typically set at a convenient feature of the part (e.g., a corner, center of a hole, datum point).
    *   **Characteristics:**
        *   User-defined and programmable.
        *   Multiple WCS can be defined on a single workpiece or for different setups of the same workpiece.
        *   The controller translates movements from WCS to MCS for execution.
    *   **Notation:** Typically denoted with uppercase letters (X, Y, Z).
    *   **G-Code Commands:**
        *   `G54` to `G59`: Predefined Workpiece Coordinate System offsets.
        *   `G54.1` and subsequent: Extended Workpiece Coordinate Systems.
        *   Operators set the WCS origin by touching off a tool or probe on the workpiece at the desired reference point.

*   **Tool Coordinate System (TCS):**
    *   **Definition:** This is not a distinct coordinate system in the same sense as MCS and WCS, but rather an understanding of how the tool's geometry (tip radius, length) affects the programmed path. CNC systems account for tool length and cutter radius compensation.
    *   **Tool Length Offset (TLO):** The difference in length between the tool currently in the spindle and a reference tool (often a standard length tool). This is entered as a `H` value (e.g., `H01` for tool 1) and used in conjunction with `G43` (Tool Length Compensation on).
    *   **Cutter Radius Compensation (CRC):** Accounts for the radius of the cutting tool to ensure the machined profile matches the programmed path, regardless of the tool diameter.
        *   `G41`: Cutter Radius Compensation Left (tool path is to the left of the programmed contour).
        *   `G42`: Cutter Radius Compensation Right (tool path is to the right of the programmed contour).
        *   `G40`: Cutter Radius Compensation Cancel.
    *   **Tool Diameter Offset:** Often stored as a `D` value (e.g., `D01` for tool 1) associated with the tool number.

**Coordinate Representation:**

*   **Absolute Positioning (`G90`):** All coordinate values are referenced from the *current* Workpiece Coordinate System origin.
    *   **Example:** `G00 X10.0 Y5.0` moves the tool to the absolute position (10.0, 5.0) within the active WCS.

*   **Incremental Positioning (`G91`):** All coordinate values are referenced from the *previous* tool position.
    *   **Example:** If the tool is at X10.0 Y5.0, `G91 G00 X2.0 Y3.0` moves the tool an *additional* 2.0 units in X and 3.0 units in Y, resulting in a new position of X12.0 Y8.0.

**Reference:**
*   Koren, Yoram. *Computer Control of Manufacturing Systems*. TMH, 2017. (Chapter 4: Coordinate Systems and Data Representation)

**Highlight:** The most common setup involves defining a Workpiece Coordinate System (WCS) on the part, and the CNC controller translates movements from this WCS to the machine's internal Machine Coordinate System (MCS) for execution. Understanding absolute (`G90`) and incremental (`G91`) positioning is crucial for accurate path programming.

---

### 4. Classification of CNC Systems

**Key Concept:** CNC systems can be classified based on various criteria, including the type of motion, the type of machine tool, and the control loop architecture.

**Classification Criteria:**

**A. By Type of Motion/Control:**

*   **Point-to-Point (PTP) Control:**
    *   **Definition:** The machine tool moves the cutting tool from one point to another, and the motion along the path between points is not controlled. Machining occurs only at the designated points.
    *   **Applications:** Drilling, boring, tapping, punching, riveting, spot welding.
    *   **Example:** A drilling operation where the drill bit moves to the hole location, drills, and retracts. The path between holes is rapid, and the controlled part is the X-Y location of the hole.
    *   **Programming:** Typically involves specifying the X and Y coordinates of each hole.

*   **Straight-Cut (or Linear) Control:**
    *   **Definition:** The machine tool can move the cutting tool along straight lines in the X, Y, and Z axes, as well as in combined axes (e.g., diagonal cuts). Linear interpolation (`G01`) is used.
    *   **Applications:** Machining straight edges, slots, pockets with straight sides.
    *   **Example:** Machining a square pocket. The tool moves linearly along the sides of the pocket.

*   **Continuous Path (or Contour) Control:**
    *   **Definition:** The machine tool can move the cutting tool along a continuous path defined by a series of points and interpolation commands (linear and circular). This allows for machining of complex shapes and contours.
    *   **Applications:** Milling complex shapes, turning of contours, engraving, grinding of profiles.
    *   **Example:** Machining a curved profile on a workpiece using G02 (clockwise circular interpolation) or G03 (counter-clockwise circular interpolation).

**B. By Type of Machine Tool:**

*   **CNC Lathes:** Control rotational and linear axes to turn cylindrical parts. Typically have X and Z axes.
*   **CNC Milling Machines:** Control multiple linear axes (X, Y, Z) and often rotational axes (A, B, C) for machining prismatic parts.
*   **CNC Grinding Machines:** Used for high-precision finishing.
*   **CNC EDM (Electrical Discharge Machining) Machines:** Employ electrical discharges to erode material.
*   **CNC Routers:** Similar to milling machines but often used for softer materials like wood, plastic, and aluminum.
*   **CNC Plasma/Laser Cutting Machines:** Use focused energy beams for cutting.
*   **CNC Machining Centers:** Versatile machines that combine milling, drilling, tapping, and often automatic tool changing capabilities.

**C. By Control Loop Architecture:**

*   **Open-Loop System:**
    *   **Definition:** The controller sends commands to the drive system but does not receive feedback on the actual position of the axes.
    *   **Mechanism:** Typically uses stepper motors, where the number of steps is commanded, and it's assumed the motor completes all steps.
    *   **Pros:** Simpler, less expensive.
    *   **Cons:** Less accurate, susceptible to losing steps due to overload or inertia.

*   **Closed-Loop System:**
    *   **Definition:** The controller sends commands to the drive system and receives feedback from position feedback devices (encoders, resolvers) on the actual position of the axes.
    *   **Mechanism:** The controller continuously compares the commanded position with the actual position and makes adjustments to correct any errors.
    *   **Pros:** High accuracy, reliable positioning, can compensate for external forces.
    *   **Cons:** More complex, more expensive.

**Reference:**
*   Koren, Yoram. *Computer Control of Manufacturing Systems*. TMH, 2017. (Chapter 3: Classification of NC Systems)

**Highlight:** The most fundamental classification relates to the type of motion: Point-to-Point (for discrete locations), Straight-Cut (for linear paths), and Continuous Path (for complex contours). Closed-loop systems are preferred for high-accuracy applications.

---

### 5. Point-to-Point (PTP) Motion in CNC

**Key Concept:** Point-to-Point motion is a basic type of CNC control where the emphasis is on moving the tool from one discrete point to another with high speed and accuracy. The path taken between these points is not critical.

**Characteristics of PTP Motion:**

*   **Focus:** Positioning accuracy at specific locations.
*   **Path Control:** Minimal or no control over the path between points. Typically uses rapid traverse (`G00`) for movement.
*   **Interpolation:** Not required for the path between points.
*   **Applications:** Drilling, tapping, reaming, spot welding, component placement.

**How it's Implemented:**

1.  **Programmed Coordinates:** The part program specifies the X, Y, and sometimes Z coordinates of the target points.
2.  **Rapid Traverse (`G00`):** The controller commands the machine axes to move at the maximum possible speed towards the next programmed coordinate.
3.  **Machining at Point:** Once the axes reach the commanded position, the machining operation (e.g., drilling) is performed.
4.  **Feedback:** Position feedback systems (if present) ensure the axes arrive at the target coordinates accurately.
5.  **Next Movement:** The controller then commands the next rapid traverse movement to the subsequent point.

**Example Scenario: Drilling Holes**

Consider drilling three holes at coordinates (X10, Y20), (X30, Y40), and (X50, Y20) on a workpiece.

**CNC Program Snippet:**

```gcode
N10 G21 G90 G00 X0 Y0 ; Setup: Metric, Absolute, Rapid to origin
N20 G43 H01 ; Tool Length Compensation ON (Tool 1)
N30 M03 S1500 ; Spindle ON, Speed 1500 RPM
N40 T01 M06 ; Tool Change to Tool 1

; Drill Hole 1
N50 G00 X10.0 Y20.0 ; Rapid move to the X,Y location of the first hole
N60 Z5.0 ; Move Z to a safe height above the part
N70 G01 Z-2.0 F100 ; Feed move to drilling depth at 100 mm/min
N80 G00 Z5.0 ; Rapid retract to safe Z height
N90 G00 X30.0 Y40.0 ; Rapid move to the X,Y location of the second hole

; Drill Hole 2
N100 G01 Z-2.0 F100 ; Feed move to drilling depth
N110 G00 Z5.0 ; Rapid retract
N120 G00 X50.0 Y20.0 ; Rapid move to the X,Y location of the third hole

; Drill Hole 3
N130 G01 Z-2.0 F100 ; Feed move to drilling depth
N140 G00 Z5.0 ; Rapid retract

N150 M05 ; Spindle OFF
N160 G00 X0 Y0 ; Rapid return to home position
N170 M30 ; Program End
```

**Explanation of the Snippet:**

*   `G00 X10.0 Y20.0`: This command instructs the machine to move the tool rapidly to the point (10.0, 20.0) in the active workpiece coordinate system. The path taken is not controlled, only the destination.
*   `G01 Z-2.0 F100`: This is a controlled feed motion used for the actual drilling operation.
*   The program repeats this pattern for each hole.

**Reference:**
*   Koren, Yoram. *Computer Control of Manufacturing Systems*. TMH, 2017. (Chapter 3: Classification of NC Systems - discusses PTP control)

**Highlight:** PTP control is about getting from point A to point B efficiently and accurately, without concern for the path in between. It's fundamentally for discrete operations at specific locations.

---

### Programming Exercise

**Objective:** Write a CNC program to mill a square pocket with a side length of 20 mm and a depth of 5 mm, centered at X25, Y25 in the workpiece coordinate system. The machine starts at X0 Y0 Z5. Assume you are using a 6 mm diameter end mill.

**Assumptions:**

*   Machine is a 3-axis milling machine.
*   Workpiece Coordinate System origin (0,0) is at the bottom-left corner of the part.
*   Tool is a 6 mm diameter end mill.
*   Initial Z position is 5 mm above the workpiece surface.
*   The pocket is to be milled using a contour milling strategy.
*   Use absolute positioning (`G90`).
*   Use metric units (`G21`).
*   Spindle speed: 2000 RPM.
*   Plunging feed rate: 50 mm/min.
*   Cutting feed rate: 150 mm/min.
*   Rapid traverse for non-cutting moves.

**Part Geometry:**

*   A square pocket of 20mm x 20mm.
*   Depth of cut: 5mm.
*   Center of the pocket: X25, Y25.

**Calculation for pocket milling:**

The pocket will be from X15 to X35 and Y15 to Y35 (20mm side length centered at X25, Y25).

**Considerations for End Mill Milling:**

*   **Center of the pocket:** To mill a pocket, the tool path needs to be offset from the pocket boundary. For a pocket, the tool center will follow a path that is offset inwards by the tool's radius (3 mm).
*   Pocket boundaries (centerline): X=15, X=35, Y=15, Y=35.
*   Tool centerline path for a 20mm square pocket: From X15 to X35, Y15 to Y35.
*   To mill a 20mm square pocket with a 6mm end mill, the tool's center must traverse a 14mm x 14mm square (20mm pocket size - 6mm tool diameter = 14mm). This square will be centered within the pocket.
*   Therefore, the tool centerline path will be from X17 to X33 and Y17 to Y33 (14mm square centered at X25, Y25).

**Programming Exercise:**

Write the G-code program for the above task.

---

**Solution to Programming Exercise:**

```gcode
%
O0001 (POCKET MILLING) ; Program Number and Name

N10 G21 G90 G17 G40 G49 G80 ; Initial Setup: Metric, Absolute, XY Plane, Cancel Comp, Cancel Length Comp, Cancel Cycle

N20 G00 X0 Y0 Z5.0 ; Rapid move to starting position (safe height above origin)
N30 T01 M06 ; Tool Change to Tool 1 (End Mill)
N40 G43 H01 ; Activate Tool Length Compensation for Tool 1
N50 M03 S2000 ; Start Spindle CW at 2000 RPM
N60 M08 ; Coolant ON

; Pocket Milling Operation
; Tool centerline path: 14mm x 14mm square centered at X25, Y25
; Path: X17 to X33, Y17 to Y33

; Move to starting point for pocketing (above the first corner)
N70 G00 X17.0 Y17.0 ; Rapid move to X17 Y17 (first corner of tool path)
N80 G00 Z2.0 ; Rapid move down to 2mm above the final depth
N90 G01 Z-5.0 F50.0 ; Plunge into the workpiece to the final depth at 50 mm/min

; Mill the pocket perimeter in counter-clockwise direction
N100 G01 X33.0 Y17.0 F150.0 ; Move to the second corner (X33, Y17) at cutting feed
N110 G01 X33.0 Y33.0 ; Move to the third corner (X33, Y33)
N120 G01 X17.0 Y33.0 ; Move to the fourth corner (X17, Y33)
N130 G01 X17.0 Y17.0 ; Move back to the starting corner (X17, Y17)

; Retract and finish
N140 G00 Z5.0 ; Rapid retract to safe height (Z5.0)
N150 M09 ; Coolant OFF
N160 M05 ; Spindle OFF
N170 G00 X0 Y0 ; Rapid move back to home position

N180 M30 ; Program End and Rewind
%
```

**Explanation of the Program:**

1.  `%` and `O0001 (POCKET MILLING)`: Standard start of program/program number.
2.  `N10 G21 G90 G17 G40 G49 G80`: Sets up the machine environment:
    *   `G21`: Metric units.
    *   `G90`: Absolute positioning.
    *   `G17`: XY plane selection for circular interpolation (though not used here, it's good practice).
    *   `G40`: Cancels cutter radius compensation (important if it was active).
    *   `G49`: Cancels tool length compensation.
    *   `G80`: Cancels canned cycles.
3.  `N20 G00 X0 Y0 Z5.0`: Moves the tool to the starting position above the workpiece.
4.  `N30 T01 M06`: Selects Tool 1 and performs a tool change.
5.  `N40 G43 H01`: Activates tool length compensation. `H01` is assumed to contain the length offset value for Tool 1 in the machine's offset register.
6.  `N50 M03 S2000`: Starts the spindle rotating clockwise at 2000 RPM.
7.  `N60 M08`: Turns on the coolant.
8.  `N70 G00 X17.0 Y17.0`: Rapid moves the tool to the starting X and Y coordinates for the pocket's centerline.
9.  `N80 G00 Z2.0`: Rapidly moves the tool down to 2 mm above the final desired depth. This is a safe height to begin the plunge feed.
10. `N90 G01 Z-5.0 F50.0`: Commands a linear feed move to the final depth of Z-5.0 mm at a feed rate of 50 mm/min. This is the plunge cut.
11. `N100 G01 X33.0 Y17.0 F150.0`: Moves the tool linearly to the next corner of the pocket centerline (X33, Y17) at the cutting feed rate of 150 mm/min.
12. `N110 G01 X33.0 Y33.0`: Continues the linear path to the third corner.
13. `N120 G01 X17.0 Y33.0`: Continues the linear path to the fourth corner.
14. `N130 G01 X17.0 Y17.0`: Completes the pocket by moving back to the initial corner of the centerline path.
15. `N140 G00 Z5.0`: Rapidly retracts the tool to the safe Z height.
16. `N150 M09`: Turns off the coolant.
17. `N160 M05`: Stops the spindle.
18. `N170 G00 X0 Y0`: Rapidly moves the tool back to the home position.
19. `N180 M30`: Signals the end of the program and rewinds it for the next cycle.

---

### Practice Questions

1.  **Define CNC.** What is the fundamental difference between NC and CNC?
2.  **List and describe the main components of a CNC system.**
3.  **Explain the purpose of a workpiece coordinate system (WCS).** How is its origin typically established on the machine?
4.  **Differentiate between Absolute (`G90`) and Incremental (`G91`) positioning.** Provide a small code example for each.
5.  **Describe the three main classifications of CNC motion control.** Give one application for each.
6.  **What is the primary advantage of a closed-loop CNC system over an open-loop system?**
7.  **What is the function of `G00` and `G01` commands?**
8.  **If a CNC program calls for `G00 X10.0 Y20.0` and then `G91 G01 X5.0 Y-5.0 F100`, what is the final position of the tool after the second command, assuming it started at X10 Y20?**

---

### Answers to Practice Questions

1.  **Definition of CNC:** CNC stands for Computer Numerical Control. It is a manufacturing process that uses a computer to automate the control of machine tools.
    **Difference between NC and CNC:** NC (Numerical Control) systems typically used punched tape or cards for input and had simpler electronic circuits for control. CNC systems use a dedicated computer to interpret the part program, allowing for more complex operations, better accuracy, faster processing, and easier programming and editing.
2.  **Main Components of a CNC System:**
    *   **Part Program:** Instructions in G-code and M-code.
    *   **Machine Tool:** The physical machinery (lathe, mill, etc.) with its axes, spindle, etc.
    *   **CNC Controller:** The computer that interprets the program and sends signals.
    *   **Drive System:** Motors (servo/stepper) and mechanical components (ball screws) that move the machine axes.
    *   **Feedback System:** Devices (encoders, resolvers) that report the actual position back to the controller.
    *   **User Interface (HMI):** Screen, keyboard for operator interaction.
3.  **Purpose of WCS:** The workpiece coordinate system (WCS) defines the reference origin for all programmed movements on the workpiece. It makes programming independent of the machine's home position and allows for easy setup.
    **Establishing WCS Origin:** The operator typically establishes the WCS origin by "touching off" a tool (or probe) onto a designated reference point on the workpiece. This reference point is then defined as (0,0,0) in the WCS.
4.  **Absolute (`G90`) vs. Incremental (`G91`) Positioning:**
    *   **Absolute (`G90`):** All coordinate values are measured from the origin of the current workpiece coordinate system.
        *   Example: `N10 G90 G00 X10.0 Y5.0` moves to the point (10.0, 5.0).
    *   **Incremental (`G91`):** All coordinate values are measured as a distance and direction from the *previous* position of the tool.
        *   Example: If the tool is at (10.0, 5.0), `N20 G91 G00 X2.0 Y3.0` moves the tool by +2.0 in X and +3.0 in Y, resulting in a new position of (12.0, 8.0).
5.  **Three Main Classifications of CNC Motion Control:**
    *   **Point-to-Point (PTP):** Movement between discrete points. Path is not controlled. **Application:** Drilling.
    *   **Straight-Cut (Linear):** Controlled movement along straight lines in principal axes. **Application:** Machining slots.
    *   **Continuous Path (Contour):** Controlled movement along complex curves and contours using interpolation. **Application:** Milling curved profiles.
6.  **Advantage of Closed-Loop:** The primary advantage is **higher accuracy**. The feedback system allows the controller to monitor and correct for deviations, ensuring the machine axes reach and maintain their commanded positions precisely, even under varying loads.
7.  **Function of `G00` and `G01`:**
    *   `G00`: Rapid Traverse. Commands the machine to move the tool at the maximum possible speed between two points. Used for non-cutting moves where precision of path is not important.
    *   `G01`: Linear Interpolation. Commands the machine to move the tool along a straight line at a specified feed rate. Used for cutting operations like facing, slotting, or creating straight edges.
8.  **Final Position Calculation:**
    *   Initial position: X10 Y20.
    *   Second command: `G91 G01 X5.0 Y-5.0 F100`.
    *   `G91` means incremental.
    *   Move by +5.0 in X and -5.0 in Y from the current position.
    *   New X = 10.0 + 5.0 = 15.0
    *   New Y = 20.0 + (-5.0) = 15.0
    *   **Final Position:** X15.0 Y15.0.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
