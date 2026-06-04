---
title: "Study and preparation of program, simulation and exercise on CNC milling machine: -
surface milling, pocket milling, contour milling etc."
subject: "MANUFACTURING TECHNOLOGY LAB"
module: "Module 1: Exercises on lathe: "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1451d0cf4804463360"
status: "completed"
scrapedAt: "2026-05-20T17:54:27.092Z"
---
# Manufacturing Technology Lab - Module 1: Exercises on CNC Milling Machine

This module focuses on understanding and operating CNC milling machines for various manufacturing operations. We will cover programming, simulation, and practical execution of common milling techniques.

**Course Outcomes Addressed:**

*   **CO1:** Operate CNC milling machines with understanding of work holders and principles to produce desired part features. (K3)
*   **CO3:** Program and manufacture complex profiles in CNC machines with high precision. (K3)

**Learning Outcomes:**

*   Study and preparation of CNC milling machine programs.
*   Simulation of CNC milling machine programs.
*   Execution of exercises on CNC milling machine for surface milling.
*   Execution of exercises on CNC milling machine for pocket milling.
*   Execution of exercises on CNC milling machine for contour milling.

---

## 1. Introduction to CNC Milling Machines

CNC (Computer Numerical Control) milling machines are automated machine tools that use computer instructions to control the movement of cutting tools and the workpiece. They offer high precision, repeatability, and efficiency in manufacturing.

**Key Concepts:**

*   **CNC:** Control of machine tools by pre-programmed computer commands.
*   **Milling:** A machining process that creates flat surfaces, slots, holes, and complex shapes by removing material with a rotating cutting tool.
*   **Axis of Movement:** CNC machines typically have multiple axes (X, Y, Z) that allow for complex toolpath generation.
    *   **X-axis:** Left-to-right movement.
    *   **Y-axis:** Front-to-back movement.
    *   **Z-axis:** Up-and-down movement (tool depth).
*   **Spindle:** The rotating component that holds the cutting tool.
*   **Cutting Tool:** A tool with cutting edges that removes material from the workpiece.
*   **Workpiece:** The material being machined.
*   **Work Holder:** Fixtures or vises used to securely hold the workpiece on the machine table.

**Textbook References:**

*   **HMT Production Technology (2017):** Provides a good overview of machining principles, including milling.
*   **Yoram Koren Numerical Control of Machine Tools (2014):** A comprehensive resource for understanding CNC programming and operation.

---

## 2. CNC Milling Machine Programming

CNC programming involves creating a set of instructions (G-code and M-code) that the CNC machine controller interprets to perform the machining operations.

**Key Concepts:**

*   **G-code (Preparatory Commands):** Commands that prepare the machine for a specific operation (e.g., movement, tool change, spindle speed).
*   **M-code (Miscellaneous Commands):** Commands that control machine functions (e.g., spindle start/stop, coolant on/off, program stop).
*   **Coordinate System:** Defines the position of the tool and workpiece. Most CNC machines use a Cartesian coordinate system (X, Y, Z).
*   **Work Coordinate System (WCS):** The user-defined origin (zero point) on the workpiece.
*   **Program Structure:**
    *   **Program Number:** Identifies the program (e.g., `O1234`).
    *   **Block:** A line of code containing one or more commands.
    *   **Word:** A command with an address letter (e.g., `G01`, `X10.0`).
    *   **End of Block (EOB):** Typically represented by a newline character.
    *   **Program End:** `M02` or `M30`.

**Common G-codes and M-codes:**

| Code  | Function                               | Example           | Description                                                    |
| :---- | :------------------------------------- | :---------------- | :------------------------------------------------------------- |
| **G-codes** |                                        |                   |                                                                |
| G00   | Rapid Traverse (non-cutting movement)  | `G00 X10 Y20`     | Moves the tool at the maximum rapid traverse speed.            |
| G01   | Linear Interpolation (cutting movement)| `G01 X30 Y40 F100`| Moves the tool linearly at a specified feed rate (F).        |
| G02   | Circular Interpolation CW (cutting)    | `G02 X50 Y50 I10 J0 R20` | Moves in a clockwise circular path.                            |
| G03   | Circular Interpolation CCW (cutting)   | `G03 X50 Y50 I10 J0 R20` | Moves in a counter-clockwise circular path.                    |
| G04   | Dwell                                  | `G04 P1.0`        | Pauses the machine for a specified time (P in seconds).      |
| G17   | XY Plane Selection                     | `G17`             | Selects the XY plane for circular interpolation.               |
| G20   | Inch Input                             | `G20`             | Sets units to inches.                                          |
| G21   | Metric Input                           | `G21`             | Sets units to millimeters.                                     |
| G40   | Cutter Compensation Cancel             | `G40`             | Cancels cutter radius compensation.                            |
| G41   | Cutter Compensation Left               | `G41 X... Y... D...` | Activates cutter compensation to the left of the toolpath.     |
| G42   | Cutter Compensation Right              | `G42 X... Y... D...` | Activates cutter compensation to the right of the toolpath.    |
| G43   | Tool Length Compensation On (Positive) | `G43 H... Z...`   | Activates tool length compensation (using H value).          |
| G49   | Tool Length Compensation Cancel        | `G49`             | Cancels tool length compensation.                              |
| G54-G59 | Work Coordinate System Selection       | `G54`             | Selects a predefined work coordinate system.                   |
| G80   | Canned Cycle Cancel                    | `G80`             | Cancels any active canned cycle.                               |
| G81   | Simple Drilling Canned Cycle           | `G81 Z... R... Q... F...` | Performs a simple drilling operation.                        |
| G83   | Peck Drilling Canned Cycle             | `G83 Z... R... Q... F...` | Performs drilling with chip breaking pauses.                 |
| **M-codes** |                                        |                   |                                                                |
| M00   | Program Stop                           | `M00`             | Unconditional program stop.                                    |
| M01   | Optional Program Stop                  | `M01`             | Program stops only if the optional stop switch is activated. |
| M02   | Program End (Rewind)                   | `M02`             | Ends the program and rewinds to the beginning.                 |
| M03   | Spindle On (Clockwise)                 | `M03 S1500`       | Starts the spindle rotating clockwise at a given speed (S).    |
| M04   | Spindle On (Counter-Clockwise)         | `M04 S1500`       | Starts the spindle rotating counter-clockwise.                 |
| M05   | Spindle Off                            | `M05`             | Stops the spindle.                                             |
| M06   | Tool Change                            | `M06 T01`         | Executes an automatic tool change to tool number 1 (T).        |
| M08   | Coolant On                             | `M08`             | Turns on the coolant supply.                                   |
| M09   | Coolant Off                            | `M09`             | Turns off the coolant supply.                                  |
| M30   | Program End and Rewind                 | `M30`             | Ends the program, rewinds, and resets.                         |

**Example CNC Program Snippet:**

```gcode
O1001 (SAMPLE MILLING PROGRAM)
N10 G21 G90 G40 G49 G80  (Metric, Absolute, Cancel Comp, Cancel Len Comp, Cancel Canned Cycles)
N20 G17                 (XY Plane Selection)
N30 M06 T01             (Tool Change to Tool 1)
N40 G43 H01 Z50.0       (Activate Tool Length Comp for Tool 1, move Z to 50mm above workpiece)
N50 G54                 (Select Work Coordinate System 1)
N60 M03 S2000           (Spindle On CW at 2000 RPM)
N70 G00 X10.0 Y10.0     (Rapid move to start position)
N80 G01 Z-5.0 F100      (Plunge into workpiece at 5mm depth with feed of 100 mm/min)
N90 G01 X50.0 F200      (Linear move to X50.0 at feed of 200 mm/min)
N100 G03 X60.0 Y20.0 I10.0 J0.0 F200 (Clockwise arc to X60 Y20)
N110 G00 Z50.0          (Rapid retract to Z50.0)
N120 M05                (Spindle Off)
N130 M30                (Program End)
```

**Preparation Steps:**

1.  **Understanding the Part:** Analyze the drawing and identify the features to be machined.
2.  **Tool Selection:** Choose appropriate cutting tools (end mills, drills, etc.) based on material, operation, and desired surface finish.
3.  **Workpiece Material and Dimensions:** Know the material and its initial size.
4.  **Fixture/Work Holder Selection:** Choose a suitable method to clamp the workpiece securely.
5.  **Determining Cutting Parameters:** Select spindle speed (RPM), feed rate (mm/min or ipm), and depth of cut (DOC) based on material, tool, and machine capabilities.
    *   **Spindle Speed (N):** `N = (1000 * Vc) / (π * D)` where `Vc` is cutting speed (m/min) and `D` is tool diameter (mm). (Reference: HMT Production Technology)
    *   **Feed Rate (F):** Typically specified in mm/min or ipm. It's often related to chip load (`fz` - feed per tooth) and the number of teeth (`z`) on the tool: `F = fz * z * N`.
    *   **Depth of Cut (DOC):** The depth the tool penetrates the material.

---

## 3. Simulation of CNC Milling Machine Programs

Simulation is a crucial step to verify the programmed toolpath, detect potential collisions, and optimize the machining process before running it on the actual machine.

**Key Concepts:**

*   **CAM Software:** Computer-Aided Manufacturing software used to generate CNC programs, often including simulation capabilities. Examples include Mastercam, SolidCAM, Fusion 360, etc.
*   **Toolpath Simulation:** Visual representation of the cutting tool's movement across the workpiece.
*   **Collision Detection:** Identifying clashes between the tool, workpiece, fixtures, or machine components.
*   **Material Removal Simulation:** Showing the material being removed from the workpiece as the tool progresses.
*   **Verification:** Ensuring the simulated output matches the intended machining operation.

**Steps in Simulation:**

1.  **Load the Program:** Import the G-code program into the simulation software.
2.  **Define Machine Parameters:** Configure the CNC machine's capabilities, axes, and limits.
3.  **Define Tool Library:** Select the tools used in the program with their correct dimensions and flute numbers.
4.  **Define Workpiece and Fixture:** Create a virtual representation of the workpiece and how it's held.
5.  **Set Work Coordinate System (WCS):** Establish the origin of the part in the simulation environment.
6.  **Run Simulation:** Execute the program and observe the toolpath.
7.  **Analyze Results:** Check for errors, collisions, and efficiency. Make necessary corrections to the program.

**Benefits of Simulation:**

*   **Reduces Machine Time:** Avoids costly crashes and setup errors.
*   **Improves Program Accuracy:** Catches programming mistakes before production.
*   **Optimizes Machining Strategy:** Allows for testing different cutting parameters.
*   **Enhances Safety:** Identifies potential hazards.

---

## 4. Exercises on CNC Milling Machine

We will perform practical exercises on the CNC milling machine, focusing on common operations.

### 4.1. Surface Milling (Facing)

**Objective:** To create a flat and smooth surface on the top of the workpiece.

**Key Concepts:**

*   **Facing:** Removing material from the entire top surface of a workpiece to achieve a desired thickness or flatness.
*   **End Mill:** Typically used for facing operations.
*   **Raster Milling:** A common strategy where the end mill moves back and forth across the surface in a pattern.
*   **Stepover:** The distance the cutting tool moves sideways in each pass. A smaller stepover results in a smoother surface finish but takes longer.

**Procedure:**

1.  **Program Preparation:**
    *   Define the workpiece dimensions and desired finished surface.
    *   Select an appropriate end mill (e.g., 10mm diameter).
    *   Set spindle speed (e.g., 2000 RPM) and feed rate (e.g., 300 mm/min).
    *   Determine the depth of cut for each pass (e.g., 1 mm).
    *   Program the toolpath to cover the entire surface with a suitable stepover (e.g., 8 mm).
    *   Include rapid moves for approach and retract, and linear moves for cutting.
    *   Ensure appropriate G-codes for linear interpolation (G01), spindle start (M03), coolant (M08), and tool retraction (G00).
2.  **Setup:**
    *   Securely clamp the workpiece in a vise or fixture.
    *   Install the selected end mill in the spindle collet.
    *   Set the WCS (origin) on the workpiece, often at a corner or the center of the top surface.
    *   Set the Z-zero to the top surface of the workpiece before machining.
3.  **Execution:**
    *   Load and simulate the program.
    *   Run the program on the CNC milling machine.
    *   Monitor the operation for any anomalies.
4.  **Verification:**
    *   Check the flatness and surface finish of the machined surface using a dial indicator or surface plate.
    *   Measure the final dimensions.

**Example Program Snippet (Surface Milling):**

```gcode
O2001 (SURFACE MILLING)
N10 G21 G90 G40 G49 G80
N20 G17
N30 M06 T01            (Using a 10mm end mill)
N40 G43 H01 Z50.0
N50 G54 M03 S2000 M08  (Spindle ON CW, Coolant ON)
N60 G00 X-10.0 Y-10.0  (Rapid to starting point outside workpiece)
N70 G01 Z-1.0 F150     (Plunge 1mm DOC)
N80 G01 X80.0 F300     (Move across the width)
N90 G00 Y-2.0          (Rapid move to next path)
N100 G01 X-10.0 F300   (Move back across)
N110 G00 Y-12.0        (Rapid move to next path)
N120 G01 X80.0 F300
... (Repeat for full coverage with stepover)
Nxxx G00 Z50.0         (Rapid retract)
Nxxx M05 M09
Nxxx M30
```

**Important Point:** Ensure the stepover is less than the tool diameter for complete surface coverage. For a smoother finish, reduce the stepover.

### 4.2. Pocket Milling

**Objective:** To create a recessed area (pocket) in the workpiece with specific dimensions and depth.

**Key Concepts:**

*   **Pocket:** A cavity or recess machined into the workpiece.
*   **Climb Milling:** Cutting direction is the same as the rotation of the cutter. Generally preferred for better surface finish and tool life.
*   **Conventional Milling:** Cutting direction is opposite to the rotation of the cutter.
*   **Stepdown:** The amount of material removed in the Z-axis for each pass within the pocket.
*   **Pocketing Strategies:**
    *   **2D Pocketing:** Machining a pocket with a constant depth.
    *   **3D Pocketing:** Machining a pocket with varying depths or contoured walls.

**Procedure:**

1.  **Program Preparation:**
    *   Define the pocket shape (rectangle, circle, arbitrary polygon) and dimensions.
    *   Select an appropriate end mill (diameter is critical for corner radii).
    *   Set spindle speed and feed rate.
    *   Determine the pocket depth and stepdown.
    *   Program the toolpath to rough out the pocket, taking into account cutter radius compensation (G41/G42) if precise corner radii are needed, or leaving a small amount of material for a finishing pass.
    *   Use G01 for cutting moves within the pocket.
    *   Consider a finishing pass with a smaller stepover for better surface finish.
2.  **Setup:**
    *   Clamp the workpiece securely.
    *   Install the end mill.
    *   Set WCS and Z-zero.
3.  **Execution:**
    *   Load and simulate the program.
    *   Run the program on the CNC machine.
4.  **Verification:**
    *   Check the pocket dimensions, depth, and corner radii.
    *   Inspect the surface finish.

**Example Program Snippet (Rectangular Pocket):**

```gcode
O3001 (POCKET MILLING)
N10 G21 G90 G40 G49 G80
N20 G17
N30 M06 T02            (Using a 6mm end mill for a 10mm pocket)
N40 G43 H02 Z50.0
N50 G54 M03 S2500 M08
N60 G00 X0.0 Y0.0      (Rapid to pocket corner start)
N70 G01 Z-1.0 F150     (Plunge 1mm DOC)
N80 G01 X10.0 F250     (Move along pocket edge)
N90 G01 Y20.0          (Move to next pocket edge)
N100 G01 X0.0          (Move to next pocket edge)
N110 G00 Y0.0          (Rapid to start)
N120 G00 Z50.0         (Rapid retract)
... (Repeat for multiple passes if pocket depth > stepdown)
Nxxx G00 Z50.0
Nxxx M05 M09
Nxxx M30
```

**Important Point:** If the pocket width is only slightly larger than the end mill diameter, the corners will be rounded. To achieve sharp internal corners, a smaller end mill or a different machining strategy might be needed. For features smaller than twice the cutter diameter, you may need to use a smaller cutter for a finishing pass.

### 4.3. Contour Milling

**Objective:** To machine the external or internal profile (outline) of a part.

**Key Concepts:**

*   **Contour:** The outline or boundary of a part.
*   **Profiling:** Machining along the perimeter of a workpiece.
*   **Climb Milling vs. Conventional Milling:** Choice depends on desired surface finish, tool life, and stability. Climb milling is generally preferred.
*   **Cutter Radius Compensation (CRC):** Using G41 or G42 to automatically adjust the toolpath to account for the cutter's radius, ensuring the part is machined to the exact specified dimensions.

**Procedure:**

1.  **Program Preparation:**
    *   Define the contour path (a series of lines and arcs).
    *   Select an appropriate end mill.
    *   Set spindle speed and feed rate.
    *   Determine the depth of cut.
    *   Program the toolpath following the contour.
    *   For precise profiling, use G41 (cutter compensation left) or G42 (cutter compensation right) along with a D-code specifying the cutter offset register. The toolpath is programmed to the center of the cutter.
    *   A small lead-in and lead-out move is recommended for smooth entry and exit.
2.  **Setup:**
    *   Clamp the workpiece securely.
    *   Install the end mill.
    *   Set WCS and Z-zero.
3.  **Execution:**
    *   Load and simulate the program.
    *   Run the program on the CNC machine.
4.  **Verification:**
    *   Measure the dimensions of the contoured features.
    *   Check the surface finish.

**Example Program Snippet (External Contour Milling):**

```gcode
O4001 (CONTOUR MILLING)
N10 G21 G90 G40 G49 G80
N20 G17
N30 M06 T03            (Using an 8mm end mill)
N40 G43 H03 Z50.0
N50 G54 M03 S1800 M08
N60 G00 X-10.0 Y0.0    (Rapid to lead-in point)
N70 G01 Z-1.0 F100     (Plunge)
N80 G41 D01 X0.0 Y0.0 F200 (Lead-in move with CRC Left, D01 = 8mm cutter offset)
N90 G01 X50.0 Y0.0     (Follow contour)
N100 G01 X50.0 Y30.0
N110 G01 X0.0 Y30.0
N120 G01 X0.0 Y0.0
N130 G40 X-10.0 Y0.0   (Lead-out move, cancel CRC)
N140 G00 Z50.0         (Rapid retract)
N150 M05 M09
N160 M30
```

**Important Point:** When using cutter radius compensation, the program specifies the path for the *center* of the cutter. The machine controller then offsets this path by the cutter radius (defined in the D-code) to ensure the cutter's edge follows the desired contour. Choose G41 or G42 correctly based on whether you are machining an internal or external profile relative to the tool's approach.

---

## 5. Practice Questions and Answers

**Q1. What is the primary function of G00 in CNC programming?**
    *   **Answer:** G00 is used for rapid traverse, which is a non-cutting movement of the tool at the machine's maximum speed. It's used for positioning the tool quickly between cutting operations.

**Q2. Explain the difference between G01 and G02/G03.**
    *   **Answer:** G01 is used for linear interpolation (straight-line cutting movements) at a specified feed rate. G02 and G03 are used for circular interpolation (cutting arcs) in clockwise (G02) and counter-clockwise (G03) directions, respectively.

**Q3. Why is simulation essential before running a CNC program on the machine?**
    *   **Answer:** Simulation is crucial to verify the toolpath, detect potential collisions between the tool and workpiece/fixtures, identify programming errors, and optimize the machining process. This prevents damage to the machine and tooling, saves time, and ensures accuracy.

**Q4. In contour milling, what is the purpose of G41 and G42 codes?**
    *   **Answer:** G41 and G42 codes are used for cutter radius compensation. They automatically adjust the programmed toolpath to account for the cutter's radius, allowing the operator to program the toolpath to the center of the cutter while the machine ensures the cutter's edge follows the exact specified contour, whether internal or external.

**Q5. A CNC milling machine is programmed to perform surface milling. If the programmed feed rate is 400 mm/min and the spindle speed is 2500 RPM, what are the likely factors to consider for optimizing the cut?**
    *   **Answer:**
        *   **Depth of Cut (DOC):** A shallower DOC will result in a better surface finish and less tool wear, but will take more passes. A deeper DOC will be faster but might lead to poor finish or tool breakage.
        *   **Stepover:** A smaller stepover will lead to a smoother surface finish but requires more passes and takes longer. A larger stepover will be faster but may leave visible cusp marks.
        *   **Tool Material and Geometry:** The type of end mill (e.g., high-speed steel vs. carbide, number of flutes) will influence the optimal cutting parameters.
        *   **Workpiece Material:** Different materials have different cutting speed requirements.
        *   **Coolant:** Using coolant can improve tool life and surface finish.

---

## 6. Important Points to Remember

*   **Safety First:** Always wear safety glasses and be aware of the machine's operation. Ensure guards are in place.
*   **Accurate Setup:** Proper workpiece clamping and WCS setting are critical for dimensional accuracy.
*   **Tool Selection:** Choose the right tool for the job. The tool diameter significantly impacts pocket milling and contouring.
*   **Cutting Parameters:** Understand the relationship between spindle speed, feed rate, and depth of cut for optimal machining and tool life.
*   **Simulation is Mandatory:** Never skip the simulation step to avoid costly errors.
*   **Refer to Manuals:** Always consult the specific CNC machine and controller manuals for detailed information on codes and operations.
*   **Chip Evacuation:** Ensure chips are effectively removed from the cutting zone, either by coolant or by programmed chip breaking moves.

---

This module provides a foundational understanding of CNC milling. Mastering these techniques will enable you to produce precise components with various features, directly contributing to CO1 and CO3.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
