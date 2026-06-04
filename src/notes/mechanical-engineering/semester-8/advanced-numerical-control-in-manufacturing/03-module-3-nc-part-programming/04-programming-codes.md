---
title: "Programming codes"
subject: "ADVANCED NUMERICAL CONTROL IN MANUFACTURING"
module: "Module 3: NC Part Programming"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446451c"
status: "completed"
scrapedAt: "2026-05-20T18:19:18.962Z"
---
# ADVANCED NUMERICAL CONTROL IN MANUFACTURING

## Module 3: NC Part Programming

## Topic: Programming Codes

---

### Introduction to NC Programming Codes

NC part programming is the process of creating instructions for a CNC machine to follow to manufacture a desired part. These instructions are conveyed through a series of codes and commands that the CNC controller interprets. Understanding these programming codes is fundamental to creating efficient and accurate machining operations. This module focuses on the building blocks of NC programming: the programming codes themselves.

---

### Learning Outcomes Covered:

*   **Understand the basic structure of an NC block.** (Implicitly covered as codes are organized into blocks)
*   **Identify and explain the function of common preparatory codes (G-codes).**
*   **Identify and explain the function of common preparatory codes (M-codes).**
*   **Understand the role of auxiliary codes (like tool number, spindle speed, feed rate).**
*   **Explain the concept of address letters and their associated words.**
*   **Recognize and interpret basic part programming commands.**

---

### Course Outcomes Alignment:

*   **CO1: Understand the working of NC and CNC systems (Knowledge Level: K2)**
    *   Understanding programming codes is essential to understanding how NC/CNC systems receive and execute commands.
*   **CO3: Create programming code in CNC (Knowledge Level: K6)**
    *   This topic directly contributes to the ability to create CNC programs by explaining the individual components of those programs.

---

### Key Concepts and Definitions

#### 1. NC Block (or Word Address Format)

An NC block is a single line of instruction in an NC program. It typically contains one or more commands that the CNC controller executes sequentially. The "word address" format is the most common, where each piece of information is preceded by an **address letter**.

**Structure of an NC Block:**

```
N__ G__ M__ X__ Y__ Z__ F__ S__ T__ ... ;
```

*   **N:** Sequence Number (identifies the block number)
*   **G:** Preparatory Function (defines the type of motion or operation)
*   **M:** Miscellaneous Function (controls machine functions like spindle on/off, coolant)
*   **X, Y, Z:** Coordinate Commands (define the position of the tool in the three axes)
*   **F:** Feed Rate (controls the speed of tool movement)
*   **S:** Spindle Speed (controls the rotational speed of the spindle)
*   **T:** Tool Number (specifies which tool to use)
*   **; or /**: End of Block character (signals the end of the instruction)

#### 2. Address Letters

Address letters are single letters that precede a numerical value or code, defining the type of command. These are standardized across most CNC systems, though specific codes might vary slightly between manufacturers.

#### 3. Programming Codes

These are the numerical values associated with address letters, specifying the exact action or parameter. They are broadly categorized into:

*   **G-Codes (Preparatory Codes):** Define the *type of action* to be performed, such as motion commands, coordinate system selections, and mode settings.
*   **M-Codes (Miscellaneous Codes):** Control auxiliary machine functions not directly related to motion, such as spindle control, coolant control, and tool changes.
*   **Other Codes:** Including feed rates (F), spindle speeds (S), tool numbers (T), and coordinate values (X, Y, Z, A, B, C).

---

### Common Programming Codes

#### 1. Preparatory Codes (G-Codes)

G-codes prepare the machine for a specific type of operation or motion. They are often modal, meaning they remain active until another G-code from the same group is commanded.

**Common G-Codes:**

*   **G00: Rapid Traverse (Positioning)**
    *   **Description:** Moves the tool at the maximum rapid traverse rate of the machine to a specified coordinate. Used for non-cutting movements, like positioning between features.
    *   **Example Block:** `N10 G00 X50.0 Y30.0 ;` (Move rapidly to X=50, Y=30)
    *   **Reference:** Wilson, "Numerical Controls in Manufacturing" (1963) would have covered early forms of these codes, likely focusing on point-to-point positioning.

*   **G01: Linear Interpolation (Feed)**
    *   **Description:** Moves the tool in a straight line at a specified feed rate to a specified coordinate. Used for cutting straight lines.
    *   **Example Block:** `N20 G01 X70.0 Y40.0 F150.0 ;` (Move linearly to X=70, Y=40 at a feed rate of 150 units/minute)
    *   **Example Block:** `N30 G01 Z-5.0 ;` (Drill to a depth of 5 units with the current feed rate)

*   **G02: Circular Interpolation - Clockwise**
    *   **Description:** Moves the tool in a clockwise circular path at a specified feed rate. Requires specifying the endpoint and the center of the arc or the radius.
    *   **Format:** `G02 X... Y... I... J... F... ;` or `G02 X... Y... R... F... ;`
        *   `I`, `J`: Incremental distances from the current position to the center of the arc.
        *   `R`: Radius of the arc.
    *   **Example Block:** `N40 G02 X50.0 Y60.0 I-10.0 J0.0 F100.0 ;` (Move clockwise to X=50, Y=60 with the center 10 units to the left of the current position, at F100)

*   **G03: Circular Interpolation - Counter-Clockwise**
    *   **Description:** Moves the tool in a counter-clockwise circular path at a specified feed rate.
    *   **Format:** Similar to G02.
    *   **Example Block:** `N50 G03 X30.0 Y40.0 I0.0 J-10.0 F100.0 ;` (Move counter-clockwise to X=30, Y=40 with the center 10 units below the current position, at F100)

*   **G04: Dwell**
    *   **Description:** Pauses machine operation for a specified duration.
    *   **Format:** `G04 P... ;` or `G04 X... ;` or `G04 U... ;` (where P, X, or U specify time in seconds or milliseconds)
    *   **Example Block:** `N60 G04 P2.0 ;` (Dwell for 2 seconds)

*   **G17, G18, G19: Plane Selection**
    *   **Description:** Selects the active machining plane for circular interpolation.
        *   G17: XY plane (default)
        *   G18: XZ plane
        *   G19: YZ plane
    *   **Example Block:** `N70 G17 ;` (Select XY plane for subsequent G02/G03 commands)

*   **G20, G21: Inch/Metric Input**
    *   **Description:** Sets the unit of measurement for coordinate values and feed rates.
        *   G20: Inch
        *   G21: Millimeter
    *   **Example Block:** `N80 G21 ;` (Set input to millimeters)
    *   **Reference:** The early textbooks would likely cover the emergence of these unit selections as machines became more sophisticated.

*   **G28: Return to Home Position**
    *   **Description:** Commands the machine to move to its home (reference) position through an intermediate point (often specified).
    *   **Format:** `G28 X... Y... Z... ;` (Moves to home via the specified intermediate point)
    *   **Example Block:** `N90 G28 X0 Y0 Z0 ;` (Move to home position via the origin)

*   **G40, G41, G42: Cutter Compensation**
    *   **Description:** Controls cutter radius compensation.
        *   G40: Cutter compensation cancel
        *   G41: Cutter compensation left (tool center is to the left of the programmed path)
        *   G42: Cutter compensation right (tool center is to the right of the programmed path)
    *   **Reference:** Wilson's book would discuss the challenges of manually accounting for tool diameter, and G41/G42 were developed to automate this.

*   **G54-G59: Work Coordinate System Selection**
    *   **Description:** Selects one of the six predefined work coordinate systems (WCS). Each WCS defines the origin of the workpiece.
    *   **Example Block:** `N100 G54 ;` (Select Work Coordinate System 1)
    *   **Reference:** Koren's "Computer Control of Manufacturing Systems" (Reference Book) would delve into the importance of coordinate systems in modern automated manufacturing.

*   **G70, G71: Inch/Metric Cycle Selection**
    *   **Description:** Often used in canned cycles for turning operations. G70 for finish turning, G71 for rough turning. (Note: Specific G-codes for cycles can vary significantly by machine manufacturer).

*   **G80-G89: Canned Cycles**
    *   **Description:** Predefined sequences of operations for common machining tasks like drilling, tapping, and boring. They simplify programming by eliminating the need to explicitly program each motion for a cycle.
    *   **Examples:**
        *   **G81:** Drilling Cycle
        *   **G83:** Deep Hole Drilling Cycle (Peck Drilling)
        *   **G84:** Tapping Cycle
    *   **Example Block (Drilling):** `N110 G99 G81 X25.0 Y25.0 Z-10.0 R2.0 F100.0 ;` (Drill to Z=-10, with a retreat plane at R=2, feed rate 100, using G99 mode)
    *   **Reference:** American Society of Tool and Manufacturing Engineers (1969) would have documented early canned cycles as a major advancement in NC programming efficiency.

#### 2. Miscellaneous Codes (M-Codes)

M-codes control auxiliary machine functions. Many M-codes are specific to the machine tool builder, but some are standard.

**Common M-Codes:**

*   **M00: Program Stop**
    *   **Description:** Unconditional program stop. The operator must manually restart the program.
    *   **Example Block:** `N120 M00 ;`

*   **M01: Optional Program Stop**
    *   **Description:** Program stops only if the "Optional Stop" switch on the machine control is activated.
    *   **Example Block:** `N130 M01 ;`

*   **M02: End of Program**
    *   **Description:** Indicates the end of the program. The machine typically stops all operations.
    *   **Example Block:** `N140 M02 ;`

*   **M03: Spindle On - Clockwise**
    *   **Description:** Starts the spindle rotating clockwise.
    *   **Example Block:** `N150 M03 S1000 ;` (Start spindle clockwise at 1000 RPM)

*   **M04: Spindle On - Counter-Clockwise**
    *   **Description:** Starts the spindle rotating counter-clockwise.
    *   **Example Block:** `N160 M04 S1000 ;` (Start spindle counter-clockwise at 1000 RPM)

*   **M05: Spindle Stop**
    *   **Description:** Stops the spindle rotation.
    *   **Example Block:** `N170 M05 ;`

*   **M06: Tool Change**
    *   **Description:** Initiates an automatic tool change. Requires a `T` code in the same block to specify the new tool.
    *   **Example Block:** `N180 T02 M06 ;` (Change to tool number 2)
    *   **Reference:** Wilson (1963) would have described manual tool changes, and M06 represents the automation of this critical process.

*   **M08: Coolant On**
    *   **Description:** Turns on the coolant.
    *   **Example Block:** `N190 M08 ;`

*   **M09: Coolant Off**
    *   **Description:** Turns off the coolant.
    *   **Example Block:** `N200 M09 ;`

*   **M30: Program End and Rewind**
    *   **Description:** Indicates the end of the program and rewinds the tape (or resets the program pointer for electronic storage) to the beginning, allowing for repeat runs.
    *   **Example Block:** `N210 M30 ;`

#### 3. Auxiliary Codes

These codes are essential for defining machining parameters.

*   **F (Feed Rate):**
    *   **Description:** Specifies the rate of cutting tool movement, typically in units per minute (e.g., mm/min or in/min).
    *   **Format:** `F[value]`
    *   **Example:** `F200.0`

*   **S (Spindle Speed):**
    *   **Description:** Specifies the rotational speed of the spindle, typically in revolutions per minute (RPM).
    *   **Format:** `S[value]`
    *   **Example:** `S1500`

*   **T (Tool Number):**
    *   **Description:** Specifies the tool to be used or identifies a tool in the tool changer magazine.
    *   **Format:** `T[number]`
    *   **Example:** `T01`

*   **X, Y, Z, A, B, C (Coordinate Values):**
    *   **Description:** Define the position of the tool in Cartesian (X, Y, Z) or rotary (A, B, C) axes. The number of axes depends on the machine's configuration.
    *   **Format:** `X[value]`, `Y[value]`, `Z[value]`, etc.
    *   **Example:** `X25.5`, `Y-10.2`, `Z0.0`

---

### Important Points to Remember

*   **Modal vs. Non-Modal Codes:** Be aware of whether a G-code is modal (remains active until changed) or non-modal (active only for the block it's in).
*   **Block Structure:** Understand that each line (block) is an instruction, and the order of codes within a block can matter.
*   **Machine Specific Codes:** While many codes are standard, always consult the machine tool builder's manual for specific M-codes, canned cycles, and unique G-codes.
*   **Units:** Ensure consistency in units (inch vs. metric) throughout the program using G20/G21.
*   **Coordinate Systems:** Correctly select and utilize work coordinate systems (G54-G59) for accurate part positioning.
*   **Tool Compensation:** Understand how G41/G42 (and D/H codes for tool length/radius offset) are used to account for tool dimensions, crucial for accuracy.

---

### Practice Questions and Exercises

**Question 1:**
Identify the type of motion and the feed rate specified in the following NC block:
`N50 G01 X45.0 Y60.0 F250.0 ;`

**Answer 1:**
*   **Motion Type:** Linear Interpolation (G01)
*   **Feed Rate:** 250.0 (units per minute, e.g., mm/min or in/min)

---

**Question 2:**
What action does the following block initiate?
`N70 T03 M06 ;`

**Answer 2:**
This block initiates an automatic tool change to tool number 3.

---

**Question 3:**
Write an NC block to move the tool rapidly to the coordinate X=75.2, Y=100.5.

**Answer 3:**
`N80 G00 X75.2 Y100.5 ;`

---

**Question 4:**
Explain the difference between G03 and G02 codes.

**Answer 4:**
G02 commands a clockwise circular interpolation, while G03 commands a counter-clockwise circular interpolation. Both are used for cutting arcs and circles.

---

**Question 5:**
Which G-code is used to select the XY plane for circular interpolation?

**Answer 5:**
G17 is used to select the XY plane.

---

**Question 6:**
What is the purpose of the `S` code in an NC block?

**Answer 6:**
The `S` code specifies the spindle speed, typically in revolutions per minute (RPM).

---

**Question 7:**
What is a canned cycle and why is it used in NC programming? Provide an example.

**Answer 7:**
A canned cycle is a predefined sequence of operations for common machining tasks like drilling or tapping. They are used to simplify programming and reduce the number of lines of code required. For example, G81 is a common drilling canned cycle.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### Connecting to Textbooks and Reference Books:

*   **Wilson (1963) & American Society of Tool and Manufacturing Engineers (1969):** These early texts highlight the foundational concepts of NC programming. They would have detailed the transition from manual punched tape to early computer-controlled systems and the introduction of standardized codes like G00, G01, and basic M-codes for motion and simple machine functions. The development of canned cycles would be a significant topic in these books, representing a major step towards programming efficiency.
*   **Koren (Reference Book):** This book, being a reference for computer control, would likely delve deeper into the role of coordinate systems (G54-G59), cutter compensation (G40-G42), and potentially more advanced cycle programming, reflecting the evolution of CNC technology towards greater automation and precision in manufacturing systems. It would also emphasize the software and control aspects that interpret these codes.

---

### Conclusion

Mastering NC programming codes is the cornerstone of utilizing CNC machines effectively. This module has provided an in-depth overview of the common G-codes, M-codes, and auxiliary codes, enabling a fundamental understanding of how instructions are given to CNC machines. By correctly employing these codes, programmers can direct the machine to perform precise movements and operations, ensuring the successful manufacturing of desired parts. The ongoing learning will involve understanding the nuances of machine-specific codes and applying these fundamental codes in more complex programming scenarios.