---
title: "Programming for 2 and 3 axis control systems"
subject: "ADVANCED NUMERICAL CONTROL IN MANUFACTURING"
module: "Module 3: NC Part Programming"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446451d"
status: "completed"
scrapedAt: "2026-05-20T18:19:19.663Z"
---
# ADVANCED NUMERICAL CONTROL IN MANUFACTURING

## Module 3: NC Part Programming

## Topic: Programming for 2 and 3 Axis Control Systems

This module focuses on the fundamental principles of creating part programs for Numerical Control (NC) and Computer Numerical Control (CNC) machines, specifically for 2-axis and 3-axis systems. Understanding these concepts is crucial for translating a manufactured part's design into machine instructions.

**Course Outcomes Alignment:**

*   **CO1 (K2): Understand the working of NC and CNC systems:** This topic directly contributes by explaining how part programs guide the machine's operation.
*   **CO3 (K6): Create programming code in CNC:** This is the core outcome of this topic, as it delves into the syntax and logic of writing NC part programs.
*   **CO4 (K2): Understand the construction details of CNC machines:** While not directly about construction, understanding axis control informs how different machine configurations are programmed.

---

### 1. Introduction to NC Part Programming

NC part programming is the process of creating a set of instructions that a machine tool controller can interpret to perform a specific manufacturing operation. These instructions dictate the tool's movement, speed, and other parameters.

**Key Concepts:**

*   **Part Program:** The complete set of instructions for a specific part.
*   **NC Controller:** The "brain" of the NC machine that reads and interprets the part program.
*   **Machine Tool:** The physical equipment (e.g., lathe, milling machine) that performs the cutting operation.
*   **Axis:** A direction of motion for the machine tool. In 2-axis and 3-axis systems, these typically correspond to the Cartesian coordinates (X, Y, Z).

**Historical Context (Referencing Wilson, 1963):**

Early NC systems, as described by Frank W. Wilson in "Numerical Controls in Manufacturing," were heavily reliant on punched paper tape. Part programming was often a manual process, requiring a deep understanding of the machine's capabilities and the geometry of the part. The focus was on point-to-point or straight-line motion.

---

### 2. Understanding Axis Control Systems

The number of axes determines the complexity of the shapes that can be machined.

#### 2.1. 2-Axis Control Systems

*   **Definition:** In 2-axis control, the machine tool can move in two perpendicular linear directions.
*   **Typical Axes:** X and Y.
*   **Common Applications:**
    *   **Lathes:** Primarily use X (diameter) and Z (length) axes for turning operations.
    *   **2D Milling/Profiling:** Cutting 2D shapes on a workpiece.
    *   **Flame Cutting/Plasma Cutting:** Following a 2D profile.
*   **Motion:** Linear interpolation (straight lines) and circular interpolation (arcs and circles) within the X-Y plane.

**Example (Lathe - 2 Axis):**

Imagine turning a cylindrical shaft. The X-axis would control the depth of cut (moving the tool towards or away from the center), and the Z-axis would control the longitudinal feed along the shaft.

#### 2.2. 3-Axis Control Systems

*   **Definition:** In 3-axis control, the machine tool can move in three mutually perpendicular linear directions.
*   **Typical Axes:** X, Y, and Z.
*   **Common Applications:**
    *   **Milling Machines:** Machining complex 2.5D shapes and simple 3D forms.
    *   **Drilling Machines:** Precisely positioning holes.
    *   **Grinding Machines:** Achieving high-precision surfaces.
*   **Motion:** Linear interpolation (straight lines) and circular interpolation (arcs and circles) in 3D space.

**Example (Milling Machine - 3 Axis):**

Machining a pocket in a block of aluminum.
*   **X-axis:** Moves the tool left/right.
*   **Y-axis:** Moves the tool forward/backward.
*   **Z-axis:** Moves the tool up/down (controlling the depth of cut).

**Important Point:** While 3-axis systems move in three linear directions, they typically don't *rotate* around these axes to achieve additional tool orientations. This is the domain of more advanced multi-axis machines.

---

### 3. NC Part Programming Codes (G-Codes and M-Codes)

Part programs are constructed using a standardized set of codes.

#### 3.1. G-Codes (Preparatory Codes)

*   **Definition:** G-codes prepare the machine for a specific type of action or motion. They are often referred to as "preparatory codes."
*   **Function:** Dictate *what* the machine should do (e.g., move in a straight line, cut a circle, change units).
*   **Format:** Start with the letter 'G' followed by a two-digit number (e.g., G01, G02).

**Key G-Codes for 2 & 3 Axis Programming:**

| G-Code | Description                     | Example Usage (Conceptual)                                 |
| :----- | :------------------------------ | :--------------------------------------------------------- |
| **G00** | Rapid Traverse (Non-cutting)    | `G00 X10.0 Y5.0` - Move the tool to coordinate (10, 5) at the maximum travel speed. |
| **G01** | Linear Interpolation (Cutting)  | `G01 X20.0 Y15.0 F100` - Move the tool linearly to (20, 15) at a feed rate of 100 units/min. |
| **G02** | Circular Interpolation CW       | `G02 X0.0 Y0.0 I-10.0 J0.0 R10.0` - Cut a clockwise arc to (0,0) with center at (X-10, Y0) and radius 10. |
| **G03** | Circular Interpolation CCW      | `G03 X50.0 Y50.0 I25.0 J25.0` - Cut a counter-clockwise arc to (50,50) with center at (25,25). |
| **G04** | Dwell                           | `G04 P2.0` - Pause for 2 seconds.                           |
| **G17** | XY Plane Selection              | `G17` - Selects the XY plane for circular interpolation (default on many mills). |
| **G18** | XZ Plane Selection              | `G18` - Selects the XZ plane for circular interpolation (often used on lathes). |
| **G19** | YZ Plane Selection              | `G19` - Selects the YZ plane for circular interpolation.   |
| **G20** | Inch Input                      | `G20` - Set dimensions to inches.                          |
| **G21** | Metric Input                    | `G21` - Set dimensions to millimeters.                     |
| **G40** | Cutter Radius Compensation Off  | `G40` - Turns off cutter compensation.                     |
| **G41** | Cutter Radius Compensation Left | `G41 D1` - Activates cutter compensation to the left of the path, using tool diameter offset 1. |
| **G42** | Cutter Radius Compensation Right| `G42 D1` - Activates cutter compensation to the right of the path, using tool diameter offset 1. |
| **G71** | Inch Coordinate System          | (Older systems)                                            |
| **G72** | Metric Coordinate System        | (Older systems)                                            |
| **G90** | Absolute Programming            | `G90 G01 X50.0 Y30.0` - Move to absolute position (50, 30). |
| **G91** | Incremental Programming         | `G91 G01 X10.0 Y5.0` - Move 10 units in X and 5 units in Y from the current position. |
| **G94** | Feed per Minute                 | `G94 F200` - Set feed rate to 200 units per minute.        |
| **G95** | Feed per Revolution             | `G95 F0.1` - Set feed rate to 0.1 units per revolution (common on lathes). |
| **G96** | Constant Surface Speed (CSS)    | `G96 S500` - Maintain a surface speed of 500 units/min (spindle speed adjusts). |
| **G97** | Constant Spindle Speed          | `G97 S1500` - Set spindle speed to 1500 RPM.               |

**Referencing Kishel (1969):**

Chester Joseph Kishel's "Introduction to Numerical Control in Manufacturing" would have detailed the early evolution of these codes, emphasizing their role in automating manufacturing processes that were previously manual. The focus would have been on logical sequencing of operations.

#### 3.2. M-Codes (Miscellaneous Codes)

*   **Definition:** M-codes control machine functions that are not directly related to motion. They are often referred to as "miscellaneous codes" or "machine codes."
*   **Function:** Dictate *how* the machine should operate (e.g., turn spindle on/off, change tools, coolant on/off).
*   **Format:** Start with the letter 'M' followed by a two-digit number (e.g., M03, M05).

**Key M-Codes for 2 & 3 Axis Programming:**

| M-Code | Description                   | Example Usage (Conceptual)                   |
| :----- | :---------------------------- | :------------------------------------------- |
| **M00**| Program Stop                  | `M00` - Unconditional program stop.          |
| **M01**| Optional Program Stop         | `M01` - Stops if the operator enables it.    |
| **M02**| Program End                   | `M02` - End of program execution.            |
| **M03**| Spindle On (Clockwise)        | `M03 S1200` - Turn spindle on clockwise at 1200 RPM. |
| **M04**| Spindle On (Counter-clockwise)| `M04 S1200` - Turn spindle on counter-clockwise at 1200 RPM. |
| **M05**| Spindle Stop                  | `M05` - Stop the spindle.                    |
| **M06**| Tool Change                   | `M06 T01` - Change to tool number 1.         |
| **M07**| Coolant On (Mist)             | `M07` - Turn on mist coolant.                |
| **M08**| Coolant On (Flood)            | `M08` - Turn on flood coolant.               |
| **M09**| Coolant Off                   | `M09` - Turn off all coolant.                |
| **M30**| Program End and Rewind        | `M30` - End of program and rewind tape (older systems). |

---

### 4. Structure of an NC Part Program

A typical NC part program follows a structured format, although specific machine manufacturers might have minor variations.

**Common Program Structure:**

1.  **Program Number (O-Number):** Identifies the part program (e.g., `O1234`).
2.  **Program Description/Header:** Comments about the part, material, tooling, etc.
3.  **Safety Block:** Essential codes for safe machine startup and operation (e.g., `G21 G40 G49 G80 G90`).
4.  **Tool Changes and Setup:** Spindle speed, feed rate, tool selection, coolant activation.
5.  **Machining Operations:** Sequence of cutting moves (G00, G01, G02, G03) with coordinate data and feed rates.
6.  **Other Operations:** Drilling cycles, tapping cycles, etc.
7.  **Program End:** Turning off spindle/coolant, returning to a safe position, program end code.

**Example of a Simple 2-Axis Lathe Program Block (Conceptual):**

```nc
N100 G21 G97 G40
N110 M03 S1000 ; Start spindle clockwise at 1000 RPM
N120 G00 X5.0 Z1.0 ; Rapid move to a safe approach position
N130 G01 X0.0 F0.2 ; Linear move to the center, feeding at 0.2 mm/rev (start of facing)
N140 G00 X5.0     ; Rapid retract
N150 M05         ; Stop spindle
N160 M30         ; Program end
```

**Example of a Simple 3-Axis Milling Program Block (Conceptual):**

```nc
O1234 (SQUARE POCKET)
N10 G21 G17 G40 G80 G90 ; Safety block: Metric, XY plane, comp off, canned cycle off, absolute
N20 T1 M6             ; Tool change to tool 1
N30 G43 H1 Z5.0       ; Tool length compensation on, move to Z=5 (above workpiece)
N40 M03 S2000         ; Spindle on clockwise at 2000 RPM
N50 M08               ; Coolant on
N60 G00 X10.0 Y10.0   ; Rapid move to start position (X10, Y10)
N70 G01 Z-5.0 F100    ; Linear move down into workpiece (Z-5) at 100 mm/min
N80 G01 X20.0 F200    ; Linear move along X (F=200 mm/min)
N90 G01 Y20.0         ; Linear move along Y
N100 G01 X10.0        ; Linear move back along X
N110 G01 Y10.0        ; Linear move back along Y to start
N120 G00 Z5.0         ; Rapid retract to Z=5
N130 M05              ; Spindle stop
N140 M09              ; Coolant off
N150 G00 X0.0 Y0.0    ; Rapid move to home position
N160 M30              ; Program end
```

---

### 5. Coordinate Systems and Tool Length Compensation

*   **Absolute vs. Incremental Programming:**
    *   **Absolute (G90):** All coordinate values are relative to the program's zero point (origin). This is generally preferred for clarity.
    *   **Incremental (G91):** Coordinate values represent the distance and direction from the *current* tool position.
*   **Workpiece Coordinate Systems:**
    *   **Program Zero (G54-G59):** These codes allow defining multiple zero points for different setups or parts on the same machine. G54 is typically the first defined zero point.
*   **Tool Length Compensation (G43/G49):**
    *   **G43 H<offset number>:** Activates tool length compensation. The machine adds the value stored in the corresponding offset register (H-number) to the Z-axis command. This allows different tools to be used without reprogramming Z-depths.
    *   **G49:** Cancels tool length compensation.

**Referencing Koren (Computer Control of Manufacturing Systems):**

Yoram Koren's work would likely discuss the underlying control algorithms that interpret these coordinate systems and compensation values, highlighting the role of the CNC controller in managing these parameters for accurate machining.

---

### 6. Practice Questions and Exercises

**Question 1:**
Write an NC program segment for a 3-axis milling machine to create a square hole of 20mm x 20mm at position X=30, Y=40. The tool should plunge 5mm into the material at Z=-2mm from a safe height of Z=5mm. Assume you are using tool 3, and the spindle speed is 1500 RPM with flood coolant. Use absolute programming (G90) and metric units (G21).

**Solution 1:**

```nc
N10 G21 G17 G40 G80 G90
N20 T3 M6          ; Tool change to tool 3
N30 G43 H3 Z5.0    ; Activate tool length comp. with offset H3, move to safe Z
N40 M03 S1500      ; Spindle on CW at 1500 RPM
N50 M08            ; Coolant on
N60 G00 X30.0 Y40.0 ; Rapid move to pocket center
N70 G01 Z-2.0 F150 ; Plunge into material (F=150 mm/min)
N80 G01 X20.0      ; Move to corner 1 (assuming tool tip is centered on pocket)
N90 G01 Y50.0      ; Move to corner 2
N100 G01 X40.0     ; Move to corner 3
N110 G01 Y40.0     ; Move to corner 4
N120 G01 X30.0     ; Move back to center
N130 G00 Z5.0      ; Rapid retract to safe Z
N140 M05           ; Spindle off
N150 M09           ; Coolant off
N160 G00 X0.0 Y0.0 ; Rapid move to home
```
*(Note: The exact corner coordinates and the initial move into the pocket depend on the tool diameter and whether cutter compensation is used. This example assumes the tool tip path is programmed directly for simplicity, implying the hole will be smaller or larger depending on tool diameter).*

**Question 2:**
Explain the difference between G01 and G02/G03 codes. Provide a conceptual NC block for each.

**Solution 2:**

*   **G01 (Linear Interpolation):** This code commands the machine to move the tool in a straight line from its current position to a specified coordinate. It requires a feed rate (F) to control the cutting speed.
    *   **Conceptual NC Block:** `G01 X50.0 Y30.0 F200` (Move linearly to X50, Y30 at 200 mm/min).
*   **G02/G03 (Circular Interpolation):** These codes command the machine to move the tool in a circular arc.
    *   **G02:** Clockwise (CW) circular interpolation.
    *   **G03:** Counter-clockwise (CCW) circular interpolation.
    *   These codes require the end point of the arc and information about the arc's center (using I, J, K) or radius (using R).
    *   **Conceptual NC Block (G02):** `G02 X10.0 Y0.0 I-5.0 J0.0 F100` (Cut a clockwise arc from current position to X10, Y0. The center of the arc is 5 units to the left of the current X position, i.e., X=current_X-5, Y=current_Y. The feed rate is 100 mm/min).

**Question 3:**
What is the purpose of M03 and M05 in an NC program?

**Solution 3:**
*   **M03:** Turns the machine spindle ON in a clockwise (CW) direction. It is often accompanied by a spindle speed command (S).
*   **M05:** Turns the machine spindle OFF.

---

### 7. Important Points to Remember

*   **Machine Specifics:** Always refer to the specific CNC machine's programming manual. G-codes and M-codes can have slight variations or additional functions depending on the controller (e.g., Fanuc, Siemens, Haas).
*   **Coordinate System Consistency:** Ensure your program consistently uses either absolute (G90) or incremental (G91) programming within a logical block.
*   **Feed Rate (F):** Never forget to specify the feed rate (F) for cutting moves (G01, G02, G03). Failure to do so will result in the machine attempting to use the last specified feed rate or defaulting to a rapid traverse.
*   **Tool Path vs. Part Geometry:** Understand that the programmed tool path is often offset from the actual part geometry to account for the tool's radius. Cutter radius compensation (G41, G42) is used for this.
*   **Safety First:** Always start with a safety block, include rapid traverse moves to clear obstacles, and use appropriate dwell times for stability.
*   **Comments:** Use parentheses `()` to include comments in your program for better understanding and debugging.

---

### 8. Connecting to Course Outcomes

*   **CO1 (K2): Understanding NC/CNC Working:** This topic directly shows how part programs, composed of G and M codes, are the instructions that guide the NC/CNC machine's movements and operations, demonstrating its fundamental working.
*   **CO3 (K6): Creating CNC Programming Code:** This is the primary focus. You are learning the syntax and logic required to construct these part programs for 2 and 3 axis systems.
*   **CO4 (K2): Understanding CNC Machine Construction:** By understanding axis control (X, Y, Z), you gain insight into the mechanical degrees of freedom and how these relate to the machine's physical design and capabilities.

This module provides the foundational knowledge for all subsequent NC/CNC programming tasks. Mastery of these basic codes and programming concepts is essential for advancing to more complex multi-axis machining.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
