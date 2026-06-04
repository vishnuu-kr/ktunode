---
title: "Structure of CNC part program"
subject: "ADVANCED NUMERICAL CONTROL IN MANUFACTURING"
module: "Module 3: NC Part Programming"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446451b"
status: "completed"
scrapedAt: "2026-05-20T18:19:18.252Z"
---
# ADVANCED NUMERICAL CONTROL IN MANUFACTURING

## Module 3: NC Part Programming

### Topic: Structure of CNC Part Program

---

**Learning Outcomes:**

*   Understand the basic structure of a CNC part program.
*   Identify and explain the different types of blocks within a CNC program.
*   Recognize and interpret common preparatory (G-codes) and miscellaneous (M-codes) commands.
*   Understand the role of address words and data in CNC programming.
*   Differentiate between absolute and incremental programming.

---

**Course Outcomes Alignment:**

*   **CO1 (K2):** Understand the working of NC and CNC systems. (This topic lays the foundation for understanding how CNC machines are instructed, a crucial aspect of their working.)
*   **CO3 (K6):** Create programming code in CNC. (This topic directly addresses the foundational elements required for creating CNC programs.)

---

### 1. Introduction to CNC Part Programs

A CNC (Computer Numerical Control) part program is a set of instructions that a CNC machine tool controller reads and executes to manufacture a specific part. It essentially translates the geometric design of a part into a sequence of machine movements and operations.

*   **Purpose:** To automate the manufacturing process by providing precise instructions for tool path generation, spindle speed, coolant control, and other machine functions.
*   **Evolution:** Early NC programming relied heavily on punched tape, while modern CNC programming uses computer files.
*   **Key Information Contained:**
    *   Tool path (geometry of the cut)
    *   Cutting speed and feed rate
    *   Spindle operation (on/off, direction, speed)
    *   Coolant operation (on/off)
    *   Tool changes
    *   Fixture clamping and unclamping
    *   Program end and reset

---

### 2. Structure of a CNC Part Program

A CNC part program is typically structured as a series of **blocks**. Each block contains one or more **words**, which are combinations of an **address letter** and **numerical data**.

#### 2.1. Blocks

A block represents a single instruction or a set of related instructions to the machine. It is typically a line of code in the program.

*   **Types of Blocks:**
    *   **Sequence Number Block:** Identifies the block's order in the program (e.g., N10, N20). This is crucial for program organization, editing, and troubleshooting.
    *   **Preparatory Function Block:** Contains G-codes that specify the type of movement or operation (e.g., G00 for rapid traverse, G01 for linear interpolation).
    *   **Linear Interpolation Block:** Defines a straight-line path between two points.
    *   **Circular Interpolation Block:** Defines a curved path (arc or circle).
    *   **Tool Function Block:** Controls tool changes, tool offsets, etc.
    *   **Spindle Function Block:** Controls spindle speed and direction.
    *   **Feed Function Block:** Controls the rate of tool movement.
    *   **Miscellaneous Function Block:** Contains M-codes for auxiliary operations like coolant on/off, program stop, etc.
    *   **Comment Block:** Used for programmer's notes and explanations, typically enclosed in parentheses (e.g., (THIS IS A TEST BLOCK)). These are ignored by the controller.

*   **End of Block (EOB):** Signals the end of a block and is usually a carriage return/line feed character.

#### 2.2. Words

A word consists of an address letter followed by numerical data.

*   **Address Letters:** Single alphabetic characters that identify the type of command or data. Common address letters include:
    *   **N:** Sequence Number
    *   **G:** Preparatory Function (Geometric command)
    *   **X, Y, Z:** Coordinate Axis Commands (for linear position)
    *   **I, J, K:** Arc Center or Vector Commands (for circular interpolation)
    *   **F:** Feed Rate
    *   **S:** Spindle Speed
    *   **T:** Tool Number
    *   **M:** Miscellaneous Function
    *   **D:** Cutter Diameter Compensation
    *   **H:** Cutter Length Compensation
    *   **P:** Parameter or Subprogram Call

*   **Numerical Data:** The digits that follow the address letter, representing the specific value for that command. This can include decimal points.

#### 2.3. Program Format (Example)

```
N10 G20 G17 G40 G80 G90 G94 ; Block 1: Program Setup
N20 T1 M6           ; Block 2: Tool Change to Tool 1
N30 G00 G54 X10 Y20 ; Block 3: Rapid Traverse to Starting Position
N40 S1500 M03       ; Block 4: Spindle On, Clockwise at 1500 RPM
N50 G43 H1 Z5       ; Block 5: Tool Length Compensation On
N60 M08             ; Block 6: Coolant On
N70 G01 Z-2 F100    ; Block 7: Linear Move Down to Z-2 at Feed 100
N80 G01 X50 Y30 F200; Block 8: Linear Move to X50 Y30 at Feed 200
N90 G00 Z10         ; Block 9: Rapid Traverse Up to Z10
N100 M09            ; Block 10: Coolant Off
N110 M05            ; Block 11: Spindle Off
N120 M30            ; Block 12: Program End and Reset
```

---

### 3. Key Commands and Functions

#### 3.1. Preparatory Functions (G-Codes)

G-codes define the mode of operation or the type of geometric path the machine will follow. They are often modal, meaning they remain active until a different G-code of the same group is commanded.

*   **NC/CNC Programming Guide (Wilson, 1963) & Kishel (1969) often detail foundational G-codes.**

*   **Common G-Codes:**
    *   **G00: Rapid Traverse:** Fastest possible movement for positioning. Used for non-cutting moves.
        *   *Example:* `G00 X100 Y50` (Move to X100, Y50 at maximum speed)
    *   **G01: Linear Interpolation:** Straight-line cutting move at a specified feed rate.
        *   *Example:* `G01 X75 Y25 F150` (Move to X75, Y25 at a feed rate of 150 units/minute)
    *   **G02: Circular Interpolation - Clockwise:** Cuts a clockwise arc. Requires endpoint (X, Y, Z) and radius information (either I, J, K for center or R for radius).
        *   *Example:* `G02 X30 Y40 I10 J0 F100` (Cut a clockwise arc from current position to X30, Y40, with center at I10, J0 relative to current X,Y, at feed 100)
    *   **G03: Circular Interpolation - Counter-Clockwise:** Cuts a counter-clockwise arc.
        *   *Example:* `G03 X30 Y40 I10 J0 F100` (Cut a counter-clockwise arc...)
    *   **G04: Dwell:** Pauses the machine for a specified time.
        *   *Example:* `G04 P2000` (Dwell for 2000 milliseconds or 2 seconds)
    *   **G17, G18, G19:** Plane Selection (XY, XZ, YZ respectively). Often selected at the beginning of the program.
    *   **G20/G21:** Inch/Metric Input (Unit System).
    *   **G28: Return to Home Position:** Moves the machine axes to their home or reference position.
        *   *Example:* `G28 G91 Z0` (Return Z axis to home in incremental mode from current position)
    *   **G40: Cancel Cutter Compensation:** Turns off cutter radius compensation.
    *   **G41/G42: Cutter Compensation Left/Right:** Activates cutter radius compensation.
    *   **G43/G44: Cutter Length Compensation:** Activates tool length compensation. `G43` is typically used with `H` address.
        *   *Example:* `G43 H1 Z5` (Apply tool length offset from register 1 to the Z axis, move to Z5)
    *   **G54-G59:** Coordinate System Selection (Work Offsets). Used to define the origin of the workpiece.
    *   **G80: Cancel Canned Cycle:** Turns off any active canned cycle.
    *   **G81, G82, G83, etc.: Canned Cycles:** Predefined sequences of operations for common machining tasks like drilling, tapping, boring.
        *   *G81 Drill Cycle:* `G81 X10 Y20 Z-5 R2 F100` (Drill at X10, Y20 to Z-5, retract to R2 plane, feed 100)
    *   **G90: Absolute Programming:** All coordinates are referenced from the program zero (workpiece origin).
    *   **G91: Incremental Programming:** All coordinates are referenced from the previous position.
    *   **G94: Feed per Minute:** Feed rate is specified in units per minute.
    *   **G95: Feed per Revolution:** Feed rate is specified in units per revolution.

#### 3.2. Miscellaneous Functions (M-Codes)

M-codes control auxiliary machine functions, such as spindle operation, coolant, tool changes, and program flow. They are usually non-modal and only active for the block they are in.

*   **Referenced in:** Textbooks often cover these as crucial machine control elements.

*   **Common M-Codes:**
    *   **M00: Program Stop:** Unconditional program stop. The operator must manually restart the program.
    *   **M01: Optional Program Stop:** Program stops only if the optional stop switch is enabled on the control panel.
    *   **M02: Program End:** Marks the end of the program. Controller may not reset.
    *   **M03: Spindle On - Clockwise:** Starts the spindle rotating clockwise.
    *   **M04: Spindle On - Counter-Clockwise:** Starts the spindle rotating counter-clockwise.
    *   **M05: Spindle Off:** Stops the spindle rotation.
    *   **M06: Tool Change:** Initiates an automatic tool change sequence.
    *   **M08: Coolant On:** Turns on the coolant system.
    *   **M09: Coolant Off:** Turns off the coolant system.
    *   **M30: Program End and Reset:** Marks the end of the program and resets the program pointer to the beginning.

#### 3.3. Address Words and Data

*   **Coordinate Axes (X, Y, Z, A, B, C):** Specify the position of the cutting tool or the workpiece.
    *   *Example:* `X50.0` (Move to X-coordinate of 50.0)
*   **Feed Rate (F):** Defines the speed of the cutting tool's movement.
    *   *Example:* `F200` (Feed rate of 200 units per minute, if G94 is active)
*   **Spindle Speed (S):** Defines the rotational speed of the spindle.
    *   *Example:* `S1500` (Spindle speed of 1500 RPM)
*   **Tool Number (T):** Specifies which tool to select for a tool change.
    *   *Example:* `T1 M6` (Select Tool 1 and perform a tool change)
*   **Offset Registers (H, D):** Used for tool length and cutter radius compensation, respectively.
    *   *Example:* `H1` (Use the tool length offset value stored in register 1)

---

### 4. Absolute vs. Incremental Programming

The choice between absolute (G90) and incremental (G91) programming significantly impacts how coordinates are interpreted.

#### 4.1. Absolute Programming (G90)

*   **Definition:** All coordinate values are measured from a fixed origin point (program zero or workpiece origin).
*   **Advantages:**
    *   Easier to visualize and understand for simple geometries.
    *   Less prone to accumulated errors if a move is missed.
*   **Disadvantages:**
    *   Can lead to very long programs for complex shapes with many points.
    *   Modifying a point requires recalculating all subsequent absolute positions.

*   **Example:**
    *   Assume Program Zero is at X0, Y0.
    *   `N10 G00 X10 Y0`
    *   `N20 G01 X20 Y10 F100` (Move to X20, Y10 from X0, Y0)
    *   `N30 G01 X30 Y0 F100` (Move to X30, Y0 from X0, Y0)

#### 4.2. Incremental Programming (G91)

*   **Definition:** All coordinate values are measured from the *previous* position of the tool.
*   **Advantages:**
    *   More compact programs for complex shapes, especially when repeating patterns.
    *   Easier to modify specific moves without affecting the entire program.
*   **Disadvantages:**
    *   Can be more challenging to visualize.
    *   Errors in one move can propagate and affect all subsequent moves.

*   **Example (Equivalent to above, using G91):**
    *   Assume starting position is X0, Y0.
    *   `N10 G91 G00 X10 Y0` (Move 10 units in X and 0 in Y from current position)
    *   `N20 G01 X10 Y10 F100` (Move 10 units in X and 10 units in Y from previous position X10, Y0)
    *   `N30 G01 X10 Y-10 F100` (Move 10 units in X and -10 units in Y from previous position X20, Y10)

**Important Note:** Most CNC programs will switch between G90 and G91 as needed. For instance, a rapid move to a start point might be absolute, while a series of complex cutting moves might be incremental for efficiency. It's common to end with `G90` and a return to a known position.

---

### 5. Important Points to Remember

*   **Program Zero:** Establishing a consistent and accurate program zero (workpiece origin) is paramount for correct machining.
*   **Modal vs. Non-Modal Codes:** Understand which codes remain active and which are single-use.
*   **G-Code Groups:** Be aware that some G-codes are mutually exclusive within their groups (e.g., you can't have both G01 and G02 active simultaneously).
*   **M-Code Functionality:** Ensure you understand the specific M-codes supported by your CNC machine, as they can vary slightly between manufacturers.
*   **Safety First:** Always program cautiously, especially with rapid traverse moves. Use program simulation tools if available.
*   **Comments:** Use comments liberally to explain your code for future reference and collaboration.
*   **Tool Compensation:** Properly utilize G41/G42 and G43/G44 for accurate machining and easy adjustments.

---

### 6. Practice Questions and Exercises

**Question 1:**
Identify the type of block and the main function of the following CNC program line:
`N50 G01 X30.5 Y25.2 F180`

**Answer 1:**
*   **Block Type:** Linear Interpolation Block
*   **Main Function:** To move the tool in a straight line to coordinates X=30.5, Y=25.2 at a feed rate of 180 units per minute.

**Question 2:**
What is the difference between `G00` and `G01`? When would you typically use each?

**Answer 2:**
*   `G00` is for **Rapid Traverse**, meaning the machine moves at its maximum speed to a specified position. It's used for non-cutting operations like moving the tool to a starting point or retracting.
*   `G01` is for **Linear Interpolation**, meaning the machine moves in a straight line at a controlled **feed rate**. It's used for actual cutting operations where precise speed control is necessary.

**Question 3:**
Explain the purpose of `M03` and `M05`.

**Answer 3:**
*   `M03` commands the **spindle to start rotating clockwise**.
*   `M05` commands the **spindle to stop rotating**.

**Question 4:**
Write a CNC program block that moves the tool to X15, Y20, Z-3 using absolute programming (G90), with a feed rate of 120 units/minute.

**Answer 4:**
Assuming the current position is not relevant for absolute moves and that a linear move is intended:
`NXX G90 G01 X15 Y20 Z-3 F120`
(Note: The 'NXX' would be the sequence number, e.g., N60. The 'G01' assumes this is a cutting move; if it were just positioning, `G00` would be used, but feed rate wouldn't be specified with `G00`.)

**Question 5:**
If the current tool position is X10 Y10, write a CNC program block to move the tool incrementally by 5 units in the X direction and 10 units in the Y direction.

**Answer 5:**
`NXX G91 G00 X5 Y10`
(Note: `G00` is used as no feed rate is specified, implying a rapid traverse move.)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. References and Further Reading

*   **Numerical Controls in Manufacturing by Frank W Wilson (McGraw-Hill, 1963):** Provides early foundational concepts of NC programming, including basic block structure and early G/M codes. Understanding this text helps appreciate the evolution of the field.
*   **Introduction to Numerical Control in Manufacturing by American Society of Tool and Manufacturing Engineers, Chester Joseph Kishel (American Society of Tool and Manufacturing Engineers,, 1969):** Offers a practical introduction to NC, often with detailed explanations of programming commands and their applications in manufacturing.
*   **Computer Control of Manufacturing Systems by Yoram Koren (McGraw-Hill Inc.,US):** While more focused on broader manufacturing systems, this reference would cover the role of CNC programming within a computer-controlled environment and may discuss more advanced programming aspects and their integration.

---