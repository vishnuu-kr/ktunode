---
title: "Study and preparation of program, simulation and exercise on CNC lathe:-turning, step
turning, taper turning, thread cutting, ball and cup turning etc."
subject: "MANUFACTURING TECHNOLOGY LAB"
module: "Module 1: Exercises on lathe: "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1451d0cf480446335f"
status: "completed"
scrapedAt: "2026-05-20T17:54:26.373Z"
---
# MANUFACTURING TECHNOLOGY LAB

## Module 1: Exercises on Lathe

### Topic: Study and Preparation of Program, Simulation and Exercise on CNC Lathe: Turning, Step Turning, Taper Turning, Thread Cutting, Ball and Cup Turning etc.

---

### **1. Introduction to CNC Lathe**

#### **1.1 What is a CNC Lathe?**

*   **CNC (Computer Numerical Control)** lathes are advanced machine tools that use computer programming to control the movement of the cutting tool and workpiece. This automation allows for precise, repeatable, and complex machining operations.
*   Unlike manual lathes where the operator directly controls the machine, CNC lathes rely on coded instructions (G-code and M-code) to perform operations.

#### **1.2 Advantages of CNC Lathes**

*   **High Precision and Accuracy:** Computer control eliminates human error, leading to very precise dimensions and surface finishes. (Relates to CO3)
*   **Repeatability:** The same program can be run multiple times to produce identical parts.
*   **Complex Geometries:** Enables machining of intricate shapes and profiles that are difficult or impossible on manual lathes. (Relates to CO3)
*   **Reduced Setup Time:** Once programmed, the machine can quickly switch between different operations.
*   **Increased Productivity:** Automation allows for higher machining speeds and continuous operation.
*   **Improved Surface Finish:** Precise tool path control leads to better surface quality.

#### **1.3 Key Components of a CNC Lathe**

*   **Bed:** The base of the machine that provides stability.
*   **Headstock:** Houses the spindle, chuck, and gearbox. The workpiece is held and rotated by the spindle.
*   **Tailstock:** Supports the free end of the workpiece for longer operations or as a guide for drills and reamers.
*   **Carriage:** Moves along the bed to control the longitudinal (Z-axis) movement of the cutting tool.
*   **Cross Slide:** Moves perpendicular to the bed (X-axis) to control the radial movement of the cutting tool.
*   **Tool Post:** Holds the cutting tools. In CNC lathes, this is often a turret that can hold multiple tools.
*   **Ballscrews and Servo Motors:** Convert rotational motion into linear motion for precise axis control.
*   **CNC Controller:** The "brain" of the machine, which reads the program and sends signals to the motors.
*   **Operator Panel/Interface:** Where the program is entered, edited, and the machine is controlled.

#### **1.4 Axes of Motion**

*   **X-axis:** Typically represents the radial movement of the tool (towards or away from the workpiece axis). Positive X is usually away from the centerline.
*   **Z-axis:** Typically represents the longitudinal movement of the tool along the workpiece axis. Positive Z is usually away from the headstock.
*   (Optional: C-axis for spindle rotation control, Y-axis for cross-slide movement on some machines).

#### **1.5 Coordinate System**

*   **Absolute Programming:** Coordinates are referenced from a fixed origin point (usually the workpiece zero or machine zero).
*   **Incremental Programming:** Coordinates are referenced from the previous tool position.

---

### **2. CNC Programming (G-code and M-code)**

#### **2.1 Introduction to G-code and M-code**

*   **G-codes (Preparatory Codes):** Define the type of operation to be performed (e.g., linear interpolation, circular interpolation, turning, threading).
*   **M-codes (Miscellaneous Codes):** Control machine functions (e.g., spindle on/off, coolant on/off, tool change).

#### **2.2 Common G-codes for Lathe Operations**

| G-Code | Description                                      | Example Usage                                  |
| :----- | :----------------------------------------------- | :--------------------------------------------- |
| **G00**| Rapid Traverse (non-cutting move)                | `G00 X10.0 Z5.0;` (Move rapidly to X10, Z5)   |
| **G01**| Linear Interpolation (feed move)                 | `G01 X20.0 Z-10.0 F0.2;` (Feed to X20, Z-10 at 0.2 mm/rev) |
| **G02**| Circular Interpolation, Clockwise (CW)           | `G02 X30.0 Z-15.0 R5.0 F0.15;` (CW arc to X30, Z-15 with radius 5) |
| **G03**| Circular Interpolation, Counter-Clockwise (CCW)  | `G03 X40.0 Z-20.0 I10.0 J0.0 F0.15;` (CCW arc to X40, Z-20 using center offsets I, J) |
| **G04**| Dwell (Pause)                                    | `G04 P2.0;` (Pause for 2 seconds)              |
| **G17, G18, G19** | Plane Selection (Not typically used on lathes) |                                                |
| **G20**| Inch Input                                       |                                                |
| **G21**| Metric Input                                     | `G21;` (Sets units to millimeters)             |
| **G22**| Lock Axis                                        |                                                |
| **G23**| Unlock Axis                                      |                                                |
| **G24**| Feed Rate Mode (per minute)                      |                                                |
| **G25**| Feed Rate Mode (per revolution)                  |                                                |
| **G28**| Return to Home Position                          | `G28 U0 W0;` (Return to home via intermediate point) |
| **G40**| Tool Radius Compensation Cancel                  | `G40;`                                         |
| **G41**| Tool Radius Compensation Left                    | `G41 X25.0 Z5.0 D1 F0.2;` (Compensate left, tool offset 1) |
| **G42**| Tool Radius Compensation Right                   | `G42 X30.0 Z5.0 D1 F0.2;` (Compensate right, tool offset 1) |
| **G50**| Maximum Spindle Speed Set / Coordinate System Set | `G50 S1500;` (Set max spindle speed to 1500 RPM) |
| **G54-G59** | Work Coordinate System Selection               | `G54;` (Select Work Coordinate System 1)       |
| **G70**| Inch Programming                                 |                                                |
| **G71**| Metric Programming                               |                                                |
| **G71**| Stock Removal Cycle (OD/ID Turning)              | `G71 U1.0 W0.5 F0.2; G71 P10 Q20 U0.5 W0.5;` (See Section 3.1) |
| **G72**| Stock Removal Cycle (Face Turning)               | `G72 W1.0 R0.5 F0.2; G72 P10 Q20 U0.5 W0.5;` (See Section 3.1) |
| **G73**| High Speed Peck Drilling Cycle                   |                                                |
| **G74**| Left Hand Tapping Cycle                          |                                                |
| **G75**| Grooving Cycle                                   | `G75 R0.5; G75 X30.0 Z-15.0 P2.0 Q3.0 F0.1;` (See Section 3.4) |
| **G76**| Thread Cutting Cycle                             | `G76 P010060 Q100 R0.02; G76 X25.0 Z-20.0 P1000 Q150 R0.05 F1.5;` (See Section 3.3) |
| **G90**| Absolute Programming                             | `G90;`                                         |
| **G91**| Incremental Programming                          | `G91;`                                         |
| **G92**| Thread Cutting Cycle (Older) / Position Preset   | `G92 X25.0 Z-20.0 F1.5;` (Older method for threading) |
| **G94**| Feed Per Minute                                  | `G94;`                                         |
| **G95**| Feed Per Revolution                              | `G95;`                                         |
| **G96**| Constant Surface Speed                           | `G96 S150;` (Maintain 150 SFM)                   |
| **G97**| Constant Spindle Speed (RPM)                     | `G97 S1000;` (Maintain 1000 RPM)                |
| **G98**| Return to Initial Point (in canned cycles)     |                                                |
| **G99**| Return to R-Point (in canned cycles)           |                                                |

#### **2.3 Common M-codes for Lathe Operations**

| M-Code | Description              | Example Usage      |
| :----- | :----------------------- | :----------------- |
| **M00**| Program Stop             | `M00;`             |
| **M01**| Optional Program Stop    | `M01;`             |
| **M02**| Program End              | `M02;`             |
| **M03**| Spindle On (CW)          | `M03 S1000;`       |
| **M04**| Spindle On (CCW)         | `M04 S1000;`       |
| **M05**| Spindle Stop             | `M05;`             |
| **M06**| Tool Change              | `T0101 M06;` (Tool 1, offset 1, change) |
| **M07**| Coolant On (Mist)        | `M07;`             |
| **M08**| Coolant On (Flood)       | `M08;`             |
| **M09**| Coolant Off              | `M09;`             |
| **M10**| Chuck Open               | `M10;`             |
| **M11**| Chuck Close              | `M11;`             |
| **M30**| Program End and Rewind   | `M30;`             |

#### **2.4 Important Considerations in Programming**

*   **Tool Compensation (D & H Codes):**
    *   `D` code: Specifies the tool nose radius compensation value from the offset register.
    *   `H` code: Specifies the length compensation value from the offset register.
    *   Example: `T0101` (Tool 1 in turret, offset register 1). `G41 D1` uses the radius from offset 1 for left compensation.
*   **Feed Rate (F):** Can be specified as feed per revolution (`G95`) or feed per minute (`G94`). `F` value is usually in mm/rev or inches/rev.
*   **Spindle Speed (S):** Can be constant RPM (`G97`) or constant surface speed (`G96`).
*   **Workpiece Zero Point (G54-G59):** Sets the origin of the workpiece coordinate system.
*   **Tool Nose Radius:** Crucial for accurate contouring and thread cutting.

---

### **3. Common CNC Lathe Operations and Programming Examples**

#### **3.1 Turning and Step Turning**

*   **Turning:** Machining the outer diameter of a cylindrical workpiece.
*   **Step Turning:** Machining multiple diameters on a single workpiece.

**Programming Strategy:**
1.  **N-block:** Sequence number (e.g., N010).
2.  **G-code:** Type of movement (e.g., G00, G01).
3.  **X, Z coordinates:** Destination of the tool.
4.  **F-code:** Feed rate.
5.  **S-code:** Spindle speed.
6.  **M-code:** Machine functions.

**Example: Turning a Shaft with Steps**

*   **Workpiece:** Solid bar, Diameter 30mm, Length 100mm.
*   **Desired Output:** Shaft with steps at 25mm diameter (length 40mm) and 20mm diameter (length 80mm).
*   **Tool:** OD Turning Tool (T0101)
*   **Material:** Mild Steel
*   **Cutting Parameters:** SFM = 150, Feed = 0.2 mm/rev, Depth of Cut = 2 mm.

```gcode
%
O0001 (SHAFT WITH STEPS)
N010 G21 G99 G97 G40 G80 G49 (Metric, Feed/Rev, Constant Spindle Speed, Cancel Comp, Canned cycles off, Cancel tool length comp)
N020 T0101 M06 (Select Tool 1, Offset 1, Tool Change)
N030 G00 X32.0 Z5.0 (Rapid to safe position above workpiece)
N040 G96 S150 (Constant Surface Speed = 150 SFM. Convert to RPM based on current diameter)
N050 M03 (Spindle ON CW)
N060 M08 (Coolant ON)

(--- First Step: OD Turning to 25mm ---)
N070 G00 X27.0 Z1.0 (Rapid to position above the first step)
N080 G01 Z0.0 F0.2 (Face to Z0.0)
N090 G01 X25.0 (Turn to 25mm diameter)
N100 G01 Z-40.0 (Turn to length -40mm)
N110 G00 X27.0 (Rapid up to clear)

(--- Second Step: OD Turning to 20mm ---)
N120 G00 X22.0 Z-40.0 (Rapid to position above the second step)
N130 G01 X20.0 F0.2 (Turn to 20mm diameter)
N140 G01 Z-80.0 (Turn to length -80mm)
N150 G00 X22.0 (Rapid up to clear)

(--- Back to original safe position ---)
N160 G00 X32.0 Z5.0 (Rapid to safe position)
N170 M05 (Spindle OFF)
N180 M09 (Coolant OFF)
N190 G00 X0.0 Z0.0 (Rapid to Machine Home or specific position)
N200 M30 (Program End)
%
```

**Using Canned Cycle G71 for Stock Removal (More Efficient)**

*   **G71 U P Q F:**
    *   `U`: Depth of cut in X (radial), in microns or mm (e.g., U1.0 for 1mm DOC). Sign indicates direction.
    *   `P`: Block number of the start of the roughing profile.
    *   `Q`: Block number of the end of the roughing profile.
    *   `F`: Feed rate.
*   **G71 U d W d:**
    *   `d`: Allowance in X (radial) to be left for finishing.
    *   `d`: Allowance in Z for finishing.

**Example with G71:**

```gcode
%
O0002 (SHAFT WITH STEPS USING G71)
N010 G21 G99 G97 G40 G80 G49 (Metric, Feed/Rev, Constant Spindle Speed, Cancel Comp, Canned cycles off, Cancel tool length comp)
N020 T0101 M06 (Select Tool 1, Offset 1, Tool Change)
N030 G00 X32.0 Z5.0 (Rapid to safe position)
N040 G96 S150 (Constant Surface Speed)
N050 M03 (Spindle ON CW)
N060 M08 (Coolant ON)

(--- Define Roughing Profile ---)
N070 G00 X27.0 Z1.0 (Rapid to start of profile)
N080 G71 U1.0 W0.5 F0.2 (Depth of cut 1mm, allowance 0.5mm in X and Z. Feed 0.2)
N090 G71 P100 Q150 U0.5 W0.2 (Start profile block 100, End profile block 150. Leave 0.5mm X, 0.2mm Z for finishing)

(--- Roughing Profile Starts Here ---)
N100 (Start of Profile)
N110 G00 X25.0 (Move to first step diameter)
N120 G01 Z-40.0 (Turn to length -40mm)
N130 G01 X20.0 (Turn to second step diameter)
N140 G01 Z-80.0 (Turn to length -80mm)
N150 (End of Profile)

(--- Finishing Pass ---)
N160 G01 X25.0 Z-40.0 F0.1 (Finish pass to 25mm diameter at -40mm)
N170 G01 Z-80.0 (Finish pass to 20mm diameter at -80mm)

(--- Back to safe position ---)
N180 G00 X32.0 Z5.0 (Rapid to safe position)
N190 M05 (Spindle OFF)
N200 M09 (Coolant OFF)
N210 G00 X0.0 Z0.0 (Rapid to Home)
N220 M30 (Program End)
%
```

*   **Important Point:** When using G71, the profile description must start with a move to the first cutting point in X and Z, and the last line of the profile must be the final Z-depth. The tool must always move towards the spindle axis (increasing X) or away from the headstock (increasing Z) in the profile definition for G71.

#### **3.2 Taper Turning**

*   **Taper Turning:** Machining a conical surface.
*   **Methods:**
    1.  **Compound Rest Setting:** Manually swivel the compound rest to the desired taper angle.
    2.  **Taper Attachment:** Use a mechanical taper attachment.
    3.  **CNC Programming (G02/G03):** Use circular interpolation with appropriate X and Z coordinates.

**Programming with G02/G03:**
The key is to calculate the X and Z coordinates of the end of the taper and use circular interpolation to achieve the taper.

**Example: Taper Turning**
*   **Workpiece:** Diameter 30mm, Length 50mm.
*   **Desired Output:** Taper from 30mm diameter at Z0 to 20mm diameter at Z50.
*   **Tool:** OD Turning Tool (T0101)
*   **Cutting Parameters:** SFM = 120, Feed = 0.15 mm/rev, Depth of Cut = 1 mm.

```gcode
%
O0003 (TAPER TURNING)
N010 G21 G99 G97 G40 G80 G49
N020 T0101 M06
N030 G00 X32.0 Z5.0
N040 G96 S120
N050 M03
N060 M08

(--- Rough Taper ---)
N070 G00 X32.0 Z5.0 (Rapid to safe position)
N080 G01 X30.0 (Turn to starting diameter)
N090 G01 Z0.0 (Face to Z0)
N100 G01 X20.0 Z-50.0 F0.15 (Directly cut taper with G01 - not ideal for accuracy)

(--- Taper Turning using G02/G03 ---)
(Calculate end point: X=20.0, Z=-50.0)
N110 G00 X32.0 Z5.0 (Rapid to safe position)
N120 G00 X26.0 Z5.0 (Rapid to start of taper)
N130 G01 Z0.0 F0.15 (Face to Z0)
N140 G01 X24.0 (Turn to diameter just before taper start)
N150 G02 X20.0 Z-50.0 F0.1 (Cut taper using CW circular interpolation. X=20, Z=-50. Center is implicitly calculated)
(Alternatively, can use I, J for center offset. For a taper, this is tricky.)

(A more common G01 approach with intermediate steps for roughing)
N150 G00 X26.0 Z5.0
N160 G01 Z0.0 F0.15
N170 G01 X24.0
N180 G01 Z-50.0 F0.15

(--- Finishing Taper ---)
N190 G00 X26.0 Z5.0 (Rapid to start of taper)
N200 G01 X24.0 (Approach)
N210 G02 X20.0 Z-50.0 F0.1 (Finish pass using G02)
(Or use G03 if the taper profile requires it)

(--- Back to safe position ---)
N220 G00 X32.0 Z5.0
N230 M05
N240 M09
N250 G00 X0.0 Z0.0
N260 M30
%
```

**Using Taper Programming Function (If available on machine):**
Some controllers have specific taper functions. Consult your machine's manual.

**Calculating Taper Parameters:**
*   **Taper Angle (α):** The angle of the taper with respect to the workpiece axis.
*   **Taper per Unit Length:** (Large Dia - Small Dia) / Length of Taper.
*   **Taper per Inch/100mm:** Used in taper attachments.

#### **3.3 Thread Cutting**

*   **Thread Cutting:** Creating helical grooves on the workpiece surface.
*   **Methods:**
    1.  **Manual:** Using a thread chasing dial.
    2.  **CNC Programming (G76 or G92):** Using specialized canned cycles for precision.

**G76 Thread Cutting Cycle (Preferred)**

*   `G76 P[m][r][a] Q[dmin] R[d]:`
    *   `P`: First pass depth (`m`), Number of finishing passes (`r`), Angle of tool tip (`a`).
        *   `m`: Usually 01 (1st pass).
        *   `r`: Number of finishing passes (e.g., 0 for roughing only, 2 for 2 finishing passes).
        *   `a`: Tool tip angle (e.g., 60 for Metric/Unified, 55 for Whitworth).
    *   `Q`: Minimum cutting depth (in microns).
    *   `R`: Finishing allowance in X (radial).
*   `G76 X Z P Q R F:`
    *   `X`: Final major diameter of the thread.
    *   `Z`: Final Z-depth of the thread.
    *   `P`: Thread height (half the thread depth) in microns (e.g., for M10x1.5, pitch is 1.5mm, thread height is 1.5/2 = 0.75mm -> 750 microns).
    *   `Q`: Initial cutting depth (in microns).
    *   `R`: Finishing allowance in Z (usually 0).
    *   `F`: Lead of the thread (pitch) (e.g., F1.5 for M10x1.5).

**Example: M10 x 1.5 Thread**
*   **Workpiece:** OD 10mm, length to be threaded 20mm.
*   **Thread:** M10 x 1.5 (Metric thread, Major Diameter 10mm, Pitch 1.5mm).
*   **Tool:** Threading Tool (T0202) with 60° tip angle.
*   **Cutting Parameters:** SFM = 80, Feed = 0.1 mm/rev (controlled by F in G76).

```gcode
%
O0004 (M10 X 1.5 THREAD)
N010 G21 G99 G97 G40 G80 G49
N020 T0202 M06 (Select Threading Tool)
N030 G00 X12.0 Z5.0 (Rapid to safe position above workpiece)
N040 G96 S80 (Constant Surface Speed)
N050 M03 (Spindle ON CW)
N060 M08 (Coolant ON)

(--- Thread Cutting ---)
N070 G00 X10.5 Z1.0 (Rapid approach to starting position for threading)
N080 G76 P010060 Q100 R0.02 (1st pass, 0 finishing passes, 60 deg tip angle. Min depth 0.1mm, Finish allowance 0.02mm in X)
N090 G76 X9.25 Z-20.0 P750 Q150 R0.0 (Final major dia X=9.25 (slightly less than 10mm for clearance), Final Z=-20.0. Thread height P=0.75mm (0.75*2=1.5mm depth), Initial depth Q=0.15mm)

(--- After threading, retract tool ---)
N100 G00 X12.0 Z5.0 (Rapid to safe position)
N110 M05 (Spindle OFF)
N120 M09 (Coolant OFF)
N130 G00 X0.0 Z0.0
N140 M30
%
```

*   **Important:**
    *   The `X` value in G76 should be slightly less than the nominal major diameter to account for tool wear and ensuring clearance.
    *   The `P` value in the second G76 block is half the thread depth (e.g., for a standard thread, thread depth is roughly 0.65 * pitch).
    *   The `Q` value is the initial depth of cut, and subsequent passes will increase depth according to the G76 parameters.
    *   Ensure the threading tool is correctly oriented and its tip radius is accounted for.

#### **3.4 Ball and Cup Turning (Form Turning)**

*   **Ball Turning:** Creating a spherical shape.
*   **Cup Turning:** Creating a concave spherical shape.
*   **Methods:**
    1.  **Specialized Form Tools:** Using form tools that match the desired radius.
    2.  **CNC Programming (Circular Interpolation - G02/G03):** Machining the contour using arcs.

**Programming with G02/G03 for Ball Turning:**
This is achieved by defining a series of arcs that form a hemisphere.

**Example: Ball Turning (Hemisphere)**
*   **Workpiece:** Diameter 30mm.
*   **Desired Output:** Hemisphere with a radius of 15mm.
*   **Tool:** OD Turning Tool (T0101).
*   **Cutting Parameters:** SFM = 100, Feed = 0.1 mm/rev.

```gcode
%
O0005 (BALL TURNING)
N010 G21 G99 G97 G40 G80 G49
N020 T0101 M06
N030 G00 X32.0 Z5.0
N040 G96 S100
N050 M03
N060 M08

(--- Roughing and Finishing for Ball ---)
(Start from the center of the sphere and move outwards)
N070 G00 X0.0 Z0.0 (Rapid to workpiece center)
N080 G00 X0.0 Z5.0 (Rapid to a safe Z position above the center)

(Roughing passes - typically multiple arcs)
N090 G01 Z0.0 F0.1 (Move to Z=0, the apex of the hemisphere)
N100 G02 X10.0 Z-10.0 F0.1 (Arc to diameter 10mm at length -10mm. Center is X=0, Z=0)
N110 G02 X20.0 Z-20.0 F0.1 (Arc to diameter 20mm at length -20mm)
N120 G02 X30.0 Z-30.0 F0.1 (Arc to diameter 30mm at length -30mm - full hemisphere)

(Finishing Pass - can be done with a finer feed or a dedicated finishing tool)
N130 G00 X0.0 Z5.0 (Rapid to safe position)
N140 G00 X10.0 Z-10.0 (Approach to the start of the finishing arc)
N150 G03 X30.0 Z-30.0 F0.05 (Finish pass using CCW arc to 30mm diameter at Z-30)

(--- Back to safe position ---)
N160 G00 X32.0 Z5.0
N170 M05
N180 M09
N190 G00 X0.0 Z0.0
N200 M30
%
```

**Cup Turning (Concave Radius):**
Similar to ball turning, but the arcs will be defined to create a concave shape. This often involves using G03.

**Using Grooving Cycle (G75):**
If the "cup" is a groove with a specific radius, G75 can be used.

*   `G75 R d:` Retract distance after grooving.
*   `G75 X Z P Q F:`
    *   `X`: Final X coordinate.
    *   `Z`: Final Z coordinate.
    *   `P`: Width of the groove in X direction (diameter).
    *   `Q`: Depth of the groove in Z direction.
    *   `F`: Feed rate.

**Example: Grooving with G75**
*   **Workpiece:** OD 40mm, Length 50mm.
*   **Desired Output:** A groove at Z-20mm, width 5mm, depth 3mm.
*   **Tool:** Grooving Tool (T0303).

```gcode
%
O0006 (GROOVING WITH G75)
N010 G21 G99 G97 G40 G80 G49
N020 T0303 M06
N030 G00 X42.0 Z5.0
N040 G96 S80
N050 M03
N060 M08

(--- Grooving ---)
N070 G00 X38.0 Z-15.0 (Rapid to position above groove start)
N080 G75 R0.5 (Retract 0.5mm after each pass)
N090 G75 X35.0 Z-20.0 P5.0 Q3.0 F0.1 (Groove to Z-20, width 5mm in X, depth 3mm in Z. Feed 0.1)
(G75 usually moves incrementally across the Z-axis for the specified width in X, then steps down in Z. Check machine manual for exact G75 behavior)

(--- A more controlled approach for specific groove shape ---)
(Let's assume a simple radial groove at Z-20, width 5mm, depth 3mm)
N070 G00 X42.0 Z-20.0 (Approach to groove location)
N080 G01 X38.0 F0.1 (Move to OD of groove)
N090 G01 Z-25.0 (Move to end of groove width)
N100 G01 X35.0 (Move to ID of groove)
N110 G01 Z-20.0 (Move to start of groove width)
N120 G01 X38.0 (Return to OD)

(--- Finishing ---)
N130 G00 X42.0 Z5.0
N140 M05
N150 M09
N160 G00 X0.0 Z0.0
N170 M30
%
```

---

### **4. Simulation**

#### **4.1 Purpose of Simulation**

*   **Error Detection:** Identify programming errors, incorrect tool paths, and potential collisions before running on the actual machine.
*   **Process Optimization:** Visualize the machining process to optimize cutting parameters, tool paths, and cycle times.
*   **Operator Training:** Familiarize operators with the machining sequence and potential hazards.
*   **Toolpath Verification:** Ensure the tool follows the intended path and creates the desired geometry.

#### **4.2 Simulation Software**

*   Many CNC controllers have built-in simulation capabilities.
*   Standalone CAM (Computer-Aided Manufacturing) software often includes advanced simulation modules (e.g., Mastercam, Fusion 360, SolidWorks CAM, GibbsCAM).
*   Specialized G-code simulators are also available.

#### **4.3 Steps in Simulation**

1.  **Load/Input Program:** Enter or load the G-code program into the simulator.
2.  **Define Machine Environment:** Select the correct CNC machine, tooling, workpiece material, and fixtures.
3.  **Set Workpiece Origin:** Define the workpiece zero point (WCS).
4.  **Define Tool Offsets:** Input tool lengths and radii.
5.  **Run Simulation:** Execute the program step-by-step or continuously.
6.  **Analyze Results:**
    *   **Visual Verification:** Check if the generated shape matches the design.
    *   **Collision Detection:** Look for any clashes between the tool, workpiece, chuck, or machine components.
    *   **Toolpath Review:** Examine the feed and rapid movements.
    *   **Material Removal:** Observe how material is removed.

#### **4.4 Important Points for Simulation**

*   **Accuracy:** The simulation accuracy depends on the quality of the machine's post-processor and the simulator itself.
*   **Completeness:** Ensure all necessary codes (tool changes, coolant, etc.) are included.
*   **Initial Setup:** Incorrect setup (e.g., wrong tool length) will lead to inaccurate simulations.

---

### **5. Practical Exercises and Study Questions**

#### **Practice Question 1: Step Turning**

**Objective:** Program and simulate the machining of a stepped shaft as described below.

*   **Workpiece:** Mild Steel bar, 30mm diameter, 70mm length.
*   **Desired Output:**
    *   Step 1: 25mm diameter, 30mm length.
    *   Step 2: 20mm diameter, 60mm length.
    *   The remaining portion is the original 30mm diameter, 10mm length.
*   **Tool:** OD Turning Tool (T0101).
*   **Cutting Parameters:** SFM = 150, Feed = 0.2 mm/rev, Depth of Cut = 2 mm.

**Task:**
1.  Write the CNC program for this operation using G71 canned cycle for roughing and G01 for finishing.
2.  Simulate the program on a CNC lathe simulator.
3.  Identify any potential issues.

---

#### **Practice Question 2: Thread Cutting**

**Objective:** Program and simulate the threading operation.

*   **Workpiece:** Mild Steel bar, 12mm diameter, 30mm length.
*   **Desired Output:** M10 x 1.5 thread for a length of 15mm, starting at Z0.0. The major diameter should be finished to 9.8mm for clearance.
*   **Tool:** Threading Tool (T0202) with 60° tip angle.
*   **Cutting Parameters:** SFM = 80, Feed = 0.1 mm/rev.

**Task:**
1.  Write the CNC program for this threading operation using the G76 canned cycle.
2.  Simulate the program.
3.  Ensure the thread height and initial depth of cut are correctly specified.

---

#### **Practice Question 3: Taper Turning**

**Objective:** Program and simulate taper turning.

*   **Workpiece:** Mild Steel bar, 40mm diameter, 60mm length.
*   **Desired Output:** A taper from 40mm diameter at Z0 to 30mm diameter at Z60.
*   **Tool:** OD Turning Tool (T0101).
*   **Cutting Parameters:** SFM = 120, Feed = 0.15 mm/rev, Depth of Cut = 1.5 mm.

**Task:**
1.  Write the CNC program to machine this taper using G01 for roughing and G02/G03 for finishing.
2.  Simulate the program.
3.  Verify the taper angle and dimensions.

---

#### **Answers to Practice Questions (Conceptual Outline)**

**Answer 1: Step Turning**

*   **Program Structure:**
    *   Initializations (G21, G99, G97, G40, T0101, G96 S150, M03, M08).
    *   Approach to the first step (e.g., X27.0 Z1.0).
    *   G71 cycle definition (U, P, Q, F - specify allowances and profile block numbers).
    *   Profile definition (G00 X25.0, G01 Z-30.0, G01 X20.0 Z-60.0).
    *   Finishing passes (G01 X25.0 Z-30.0 F0.1, G01 Z-60.0 F0.1).
    *   Retraction to safe position, spindle off, coolant off, program end.
*   **Simulation:** Observe the G71 roughing passes removing material layer by layer, followed by the finishing passes creating the final steps. Check for collisions.

**Answer 2: Thread Cutting**

*   **Program Structure:**
    *   Initializations (G21, G99, G97, G40, T0202, G96 S80, M03, M08).
    *   Approach to the thread start (e.g., X10.5 Z1.0).
    *   G76 cycle parameters: P010060 (1st pass, 0 finishing, 60 deg), Q100 (min depth 0.1mm), R0.02 (finish allowance X).
    *   Second G76 line: X9.8 (final dia), Z-15.0 (final length), P750 (thread height for 1.5 pitch), Q150 (initial depth), R0.0 (finish allowance Z).
    *   Retract, spindle off, coolant off, program end.
*   **Simulation:** Observe the tool making multiple passes, progressively cutting deeper, to form the thread helix. Check the final thread form and dimensions.

**Answer 3: Taper Turning**

*   **Program Structure:**
    *   Initializations (G21, G99, G97, G40, T0101, G96 S120, M03, M08).
    *   Approach to the start of the taper (e.g., X42.0 Z5.0).
    *   Roughing: Face to Z0 (G01 Z0.0), then turn towards the taper start diameter (G01 X40.0), then cut the taper roughly using G01 (G01 X30.0 Z-60.0). Or use G71 for roughing if the taper is part of a larger profile.
    *   Finishing: Approach again, then use G02 (or G03 depending on direction) to machine the taper from X40.0 Z0.0 to X30.0 Z-60.0 with a specified feed.
    *   Retract, spindle off, coolant off, program end.
*   **Simulation:** Visualize the tool cutting the conical surface. Ensure the start and end points of the taper are correct and the surface is smooth.

---

### **6. Key Points to Remember**

*   **Understand the Coordinate System:** Differentiate between X (radial) and Z (longitudinal) axes.
*   **G-codes vs. M-codes:** G-codes define motion and geometry; M-codes control machine functions.
*   **Canned Cycles:** Utilize G71, G76, G75, etc., for efficient and accurate machining of standard features.
*   **Tool Compensation:** Use D and H codes correctly to account for tool nose radius and length.
*   **Simulation is Crucial:** Always simulate your program before running on the actual machine to prevent crashes and errors.
*   **Cutting Parameters:** Select appropriate SFM, feed rate, and depth of cut based on material, tool, and desired finish.
*   **Workpiece Zero:** Correctly set the workpiece zero point (G54-G59).
*   **Safety First:** Always follow safety procedures in the lab.
*   **Textbook References:** Refer to HMT's "Production Technology" and Yoram Koren's "Numerical Control of Machine Tools" for detailed explanations of G-codes, M-codes, and CNC principles. Chapman's "Workshop Technology" provides foundational manual lathe knowledge, which is essential context.

---

This comprehensive study guide covers the essential aspects of CNC lathe operations, programming, and simulation, aligning with the provided course outcomes. Remember to practice writing and simulating programs to build proficiency.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
