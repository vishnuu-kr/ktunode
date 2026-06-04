---
title: "Computer aided NC Programming in APT language"
subject: "ADVANCED NUMERICAL CONTROL IN MANUFACTURING"
module: "Module 4: Computer aided part programming"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464527"
status: "completed"
scrapedAt: "2026-05-20T18:19:25.929Z"
---
# Advanced Numerical Control in Manufacturing

## Module 4: Computer Aided Part Programming

### Topic: Computer Aided NC Programming in APT Language

---

### **1. Introduction to Computer-Aided Part Programming**

*   **Definition:** Computer-Aided Part Programming (CAPP) is a method of generating NC part programs using computer software. It simplifies the process of translating a part's geometry and machining operations into a machine-readable format.
*   **Motivation for CAPP:**
    *   **Complexity of Manual Programming:** Manual programming (e.g., EIA/ISO code) for complex geometries and operations is tedious, error-prone, and time-consuming.
    *   **Increased Productivity:** CAPP systems automate repetitive tasks, allowing for faster program generation and reduced programming time.
    *   **Improved Accuracy:** CAPP systems reduce human errors by ensuring geometric consistency and correct toolpath calculations.
    *   **Geometric Modeling:** CAPP systems can directly use CAD models of the part, eliminating the need for manual digitization of geometry.
    *   **Visualization and Simulation:** Many CAPP systems offer graphical simulation of toolpaths, allowing for verification before actual machining.
*   **Evolution of CAPP:** Initially, systems like APT (Automatically Programmed Tools) were developed to bridge the gap between manual coding and sophisticated CAD/CAM. Modern CAPP systems are integrated within comprehensive CAD/CAM suites.

---

### **2. APT Language: A Pioneering CAPP System**

*   **Historical Context:** APT (Automatically Programmed Tools) was one of the earliest and most influential computer-aided programming languages for NC machining. Developed in the late 1950s, it significantly advanced the state of NC programming.
    *   *Referencing Wilson (1963):* Wilson's work highlights the early challenges of manual NC programming and the emerging need for automated solutions like APT. APT was designed to provide a more natural and symbolic way to describe machining operations.
*   **Core Principles of APT:**
    *   **Problem-Oriented Language:** APT uses English-like statements to describe the part geometry, tool movements, and machining operations.
    *   **Geometric Definitions:** It allows for the definition of points, lines, circles, planes, and surfaces in a symbolic manner.
    *   **Motion Commands:** APT provides commands to control the cutting tool's movement (linear, circular, parabolic interpolation).
    *   **Machining Operations:** It includes statements for defining cutter radius compensation, speed and feed rate control, and tool changes.
    *   **Post-Processing:** The APT source code is processed by an APT processor to generate machine-specific G-code.

*   **Structure of an APT Program:**
    1.  **Identification Statements:** Program name, part number, etc.
    2.  **Setup Statements:** Machine tool configuration, coordinate system definition, coolant control.
    3.  **Geometry Statements:** Defining points, lines, circles, planes, surfaces, and their relationships.
    4.  **Machining Statements:** Specifying tool selection, cutting speeds, feed rates, and machining operations (e.g., contouring, drilling).
    5.  **Motion Statements:** Directing the tool along the defined geometry.
    6.  **Control Statements:** Conditional statements, loops, subroutines.
    7.  **Termination Statements:** Ending the program.

---

### **3. Key APT Statements and Concepts**

*   **Geometry Statements:**
    *   **Points:**
        *   `PNT/X, Y, Z` (Defining a point with absolute coordinates)
        *   `PNT/POINTNAME` (Referencing a previously defined point)
        *   **Example:** `P1 = PNT/1.0, 2.0, 0.0`
    *   **Lines:**
        *   `LINE/X, Y, Z, PARTOF, SURFACE` (Line tangent to a surface at a point)
        *   `LINE/POINT, DIRECTION` (Line through a point in a specified direction)
        *   `LINE/POINT1, POINT2` (Line through two points)
        *   **Example:** `L1 = LINE/P1, P2` (Line passing through points P1 and P2)
        *   **Example:** `L2 = LINE/X, Y, 0, 1, PARTOF, L1` (Line parallel to L1 passing through a point on L1)
    *   **Circles:**
        *   `CIRCLE/CENTER, POINT, RADIUS, VALUE`
        *   `CIRCLE/CENTER, POINT, NORMAL, VECTOR, RADIUS, VALUE`
        *   **Example:** `C1 = CIRCLE/CENTER, P1, RADIUS, 0.5`
    *   **Surfaces:**
        *   `PLANE/POINT, NORMALVECTOR` (Defining a plane)
        *   `SPHERE/CENTER, POINT, RADIUS, VALUE`
        *   *Referencing Wilson (1963) and Kishel (1969):* These texts emphasize the importance of defining geometric primitives as the foundation for toolpath generation. APT extended this by allowing for more complex surface definitions, crucial for contour machining.

*   **Machining Statements:**
    *   **Tool Definition:**
        *   `TOOL/NUMBER, SIZE, GEOMETRY, OFFSET`
        *   **Example:** `TOOL/1, 0.25, TCYL, 0.125` (Tool 1, diameter 0.25, cylindrical, cutter radius offset 0.125)
    *   **Spindle and Feed Control:**
        *   `SPINDL/SPEED, UNITS` (e.g., `SPINDL/1000, RPM`)
        *   `FEDRAT/RATE, UNITS` (e.g., `FEDRAT/10, IPM`)
    *   **Part Programming:**
        *   `PARTNO/PROGRAMNAME`
        *   `PUNCH` (Specifies output format, usually punched tape initially)

*   **Motion Statements:**
    *   **FROM:** Sets the starting point for the cutter.
        *   **Example:** `FROM/P0` (Where P0 is a predefined starting point)
    *   **GOTO:** Moves the cutter to a specified point.
        *   **Example:** `GOTO/P1`
    *   **GO:** Moves the cutter to a point, activating feed.
        *   **Example:** `GO/TO, P1`
    *   **GEXP:** Moves the cutter along an exponential curve.
    *   **GLUL:** Moves the cutter along a linear path (equivalent to G01 in EIA/ISO).
        *   **Example:** `GLUL/TO, P2`
    *   **GCIRLE:** Moves the cutter along a circular path (equivalent to G02/G03 in EIA/ISO).
        *   **Syntax:** `GCIRLE/CENTER, POINT, DIRECTION, ARC` (ARC specifies the portion of the circle)
        *   **Example:** `GCIRLE/CENTER, C1, RADIUS, 0.25, GO/LEFT, XLARGE` (Move along circle C1 with cutter radius 0.25, to the left of the line, large arc)
    *   **Contouring Commands:** These are fundamental to APT. They allow the tool to follow a defined geometric path, considering the cutter's radius.
        *   `FROM/P0`
        *   `TOOL/1, 0.25, TCYL, 0.125`
        *   `SPINDL/1000, RPM`
        *   `FEDRAT/10, IPM`
        *   `PARTNO/EXAMPLE`
        *   `CLPRNT/YES` (For cutter location printout)
        *   `LOADTL/1`
        *   `PUP/0` (Part up for tool change)
        *   `PDOWN/0` (Part down for operation)
        *   `DOLP/ON` (Digital output for coolant on)
        *   `GO/Z-0.1` (Move down to cutting depth)
        *   `GO/TO, P1`
        *   `GO/PAST, L1, RIGHT, 0.1` (Move to a point on L1, offset to the right by 0.1)
        *   `GO/LEFT, L2, ON` (Move along L2, keeping cutter to the left of L2)
        *   `GOCIRC/RIGHT, C1, ON` (Move along circle C1, keeping cutter to the right of C1)
        *   `GO/PAST, L3, LEFT, 0.05`
        *   `GO/TO, P2`
        *   `RAPID/TO, P0` (Rapid move back to starting point)
        *   `PUP/0`
        *   `DOLP/OFF`
        *   `END`

*   **Helper Statements:**
    *   **`CLPRINT`:** Prints the cutter location data.
    *   **`PARTVAL`:** Specifies parameters for part programming.
    *   **`FINISH`:** Marks the end of a machining operation.
    *   **`END`:** Terminates the APT program.

---

### **4. Cutter Radius Compensation (CRC) in APT**

*   **Concept:** APT's ability to handle Cutter Radius Compensation (CRC) was a significant advancement. It means the programmer defines the part geometry, and APT automatically offsets the toolpath to account for the cutter's radius, allowing for easier programming of contours and reducing the need for pre-calculated offsets.
    *   *Referencing Wilson (1963):* Wilson discusses the geometric complexities of toolpath generation and how CRC simplifies this by allowing the programmer to focus on the part shape rather than intricate offset calculations.
*   **APT CRC Modes:**
    *   **`GO/LEFT, LINE, ON`:** Moves the cutter to be tangent to the line on the left side of the line's direction.
    *   **`GO/RIGHT, LINE, ON`:** Moves the cutter to be tangent to the line on the right side of the line's direction.
    *   **`GOCIRC/LEFT, CIRCLE, ON`:** Moves the cutter along the circle, keeping it on the left side.
    *   **`GOCIRC/RIGHT, CIRCLE, ON`:** Moves the cutter along the circle, keeping it on the right side.
*   **How it Works:** When a motion command like `GO/LEFT, L1, ON` is used, APT calculates the toolpath such that the center of the cutter follows a path offset from `L1` by the cutter's radius in the specified direction.

---

### **5. APT Processor and Post-Processing**

*   **APT Processor:** This is the software that reads the APT source code, interprets the geometry and motion commands, performs calculations (including CRC), and generates a Cutter Location (CL) data file. The CL file contains a series of points and tool vectors representing the desired toolpath.
*   **Post-Processor:** The CL data file is then processed by a post-processor. The post-processor is machine-specific and translates the CL data into the specific G-code and M-code format required by a particular NC machine tool.
    *   *Referencing Koren (1983):* Koren's work on Computer Control of Manufacturing Systems elaborates on the crucial role of post-processors in adapting generic toolpath data (like CL data) to the specific controllers and kinematics of various CNC machines.
    *   **Key Functions of a Post-Processor:**
        *   Converting APT commands to machine-specific codes (G, M, S, F codes).
        *   Handling coordinate system transformations.
        *   Managing tool changes.
        *   Implementing spindle and feed rate controls.
        *   Generating codes for auxiliary functions (coolant, clamping, etc.).
        *   Formatting the output for the specific NC controller.

---

### **6. Benefits and Limitations of APT**

*   **Benefits:**
    *   **Ease of Programming:** More intuitive and less error-prone than manual coding for complex shapes.
    *   **Geometric Flexibility:** Capable of defining and machining complex curves and surfaces.
    *   **Cutter Radius Compensation:** Significantly simplifies programming of contours.
    *   **Reduced Programming Time:** Automation of many calculations.
    *   **Foundation for modern CAM:** Paved the way for current CAD/CAM systems.
*   **Limitations:**
    *   **Computational Intensity:** Early APT systems required significant computing power, which was limited at the time.
    *   **Limited Surface Machining:** While capable, APT's surface machining capabilities were less advanced compared to modern CAD/CAM systems.
    *   **Requires specialized knowledge:** Still demanded a good understanding of NC principles and APT syntax.
    *   **Evolution of CAD/CAM:** Largely superseded by integrated CAD/CAM systems that offer graphical interfaces and more advanced features.

---

### **7. Alignment with Course Outcomes**

*   **CO1: Understand the working of NC and CNC systems (Knowledge Level: K2)**
    *   APT programming demonstrates how part geometry and machining operations are translated into machine instructions, illustrating a key aspect of NC system operation.
*   **CO2: Understand feedback mechanisms in CNC machines (Knowledge Level: K2)**
    *   While APT itself doesn't directly describe feedback mechanisms (which are inherent to the CNC controller), the generated G-code, processed by the APT system, is what drives the machine that utilizes feedback for closed-loop control.
*   **CO3: Create programming code in CNC (Knowledge Level: K6)**
    *   Understanding APT statements and syntax directly contributes to the ability to *conceptually* create NC programs, even if modern practice involves graphical interfaces. APT's logical structure teaches the underlying principles of toolpath programming.
*   **CO4: Understand the construction details of CNC machines (Knowledge Level: K2)**
    *   APT programming is driven by the capabilities of the machine tool (e.g., interpolation types, axis movements). Understanding APT helps appreciate what capabilities are required from a CNC machine to execute such programs.

---

### **8. Practice Questions and Answers**

**Question 1:** What was the primary advantage of APT over manual NC programming?
**Answer:** The primary advantage of APT was its ability to use English-like statements to describe geometry and machining operations, making programming more intuitive, less error-prone, and faster, especially for complex parts. It also incorporated Cutter Radius Compensation.

**Question 2:** Explain the role of the post-processor in the APT system.
**Answer:** The post-processor takes the generic Cutter Location (CL) data generated by the APT processor and converts it into the specific G-code and M-code format required by a particular NC machine tool and its controller. It handles machine-specific functions, formatting, and translations.

**Question 3:** Define the APT statements `GO/LEFT, L1, ON` and `GO/RIGHT, C1, ON`. What geometric concept do they represent?
**Answer:**
*   `GO/LEFT, L1, ON`: This statement instructs the tool to move along line `L1` while keeping the cutter to the left of the line's direction. The cutter's radius is automatically accounted for.
*   `GO/RIGHT, C1, ON`: This statement instructs the tool to move along the circle `C1` while keeping the cutter to the right of the circle's path. The cutter's radius is automatically accounted for.
These statements represent **Cutter Radius Compensation (CRC)**.

**Question 4:** Write a basic APT program snippet to cut a 1-inch diameter circle with a 0.25-inch diameter end mill, centered at (3,4) on the XY plane. Assume the tool starts at P0 (0,0) and moves to the circle.
**Answer:**
```apt
PARTNO/CIRCLE_CUT
TOOL/1, 0.25, TCYL, 0.125  // Tool 1, diameter 0.25, cutter radius offset 0.125
SPINDL/1200, RPM
FEDRAT/12, IPM
FROM/P0                     // Start at P0 (0,0)
PUP/0
PDOWN/0
DOLP/ON                     // Coolant ON
GO/Z-0.1                    // Move to cutting depth
C1 = CIRCLE/CENTER, PNT/3.0, 4.0, 0.0, RADIUS, 0.5 // Define circle C1, radius 0.5 (diameter 1.0)
GO/TO, PNT/3.0, 4.0         // Move to the center of the circle
GOCIRC/RIGHT, C1, ON        // Cut the circle, keeping cutter to the right of C1
GO/TO, PNT/3.0, 4.0         // Return to the center
GO/Z0                       // Retract tool
PUP/0
DOLP/OFF
END
```
*(Note: This is a simplified example. A full APT program would include more setup and termination statements.)*

---

### **9. Important Points to Remember**

*   APT was a pioneering language that significantly advanced NC programming by introducing symbolic description and automatic cutter radius compensation.
*   APT programs consist of geometry, machining, and motion statements.
*   The `GO/LEFT` and `GO/RIGHT` (and similar for circles) commands are crucial for implementing Cutter Radius Compensation.
*   The APT processor generates CL data, which is then translated into machine-specific G-code by a post-processor.
*   While largely replaced by integrated CAD/CAM, understanding APT provides valuable insight into the fundamental principles of automated toolpath generation.
*   Modern CAM systems build upon the concepts pioneered by APT, offering graphical interfaces and more advanced capabilities.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
