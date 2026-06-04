---
title: "Do loops"
subject: "ADVANCED NUMERICAL CONTROL IN MANUFACTURING"
module: "Module 3: NC Part Programming"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464521"
status: "completed"
scrapedAt: "2026-05-20T18:19:22.410Z"
---
# ADVANCED NUMERICAL CONTROL IN MANUFACTURING

## Module 3: NC Part Programming

### Topic: Do Loops

---

### 1. Introduction to Do Loops in NC Part Programming

**Purpose:**
Do loops are a fundamental programming construct in NC (Numerical Control) part programming that allow for the repetition of a block of code multiple times. This significantly reduces the amount of programming required for tasks that involve repetitive geometric features, such as drilling patterns, milling of identical slots, or cutting multiple identical parts. By using Do loops, programmers can create more efficient, readable, and maintainable NC programs.

**Alignment with Course Outcomes:**
*   **CO3: Create programming code in CNC (Knowledge Level: K6)** - Understanding and implementing Do loops directly contributes to the ability to create complex CNC programs.
*   **CO1: Understand the working of NC and CNC systems (Knowledge Level: K2)** - Understanding how Do loops are processed by the CNC controller is essential for comprehending the overall system operation.

**Key Concepts & Definitions:**
*   **Loop:** A sequence of instructions that is repeated until a certain condition is met.
*   **Iteration:** A single execution of the instructions within a loop.
*   **Loop Counter:** A variable that keeps track of the number of times the loop has been executed.
*   **Loop Body:** The block of NC code that is to be repeated.
*   **Loop Termination Condition:** The condition that, when met, causes the loop to exit.

---

### 2. Types of Do Loops in NC Programming

While the specific syntax and keywords can vary slightly between different CNC controllers and programming languages (e.g., G-code dialects like Fanuc, Haas, Siemens), the underlying concept of Do loops remains consistent. The most common type of Do loop found in advanced NC programming is the **fixed-repetition Do loop**.

**2.1. Fixed-Repetition Do Loops**

This is the most prevalent type of Do loop in NC programming. It allows the programmer to specify a fixed number of times a block of code should be executed.

**General Syntax (Conceptual):**

```
DO <loop_counter_variable> = <start_value> TO <end_value> [STEP <increment_value>]
  (Block of NC code to be repeated)
END <loop_counter_variable>
```

**Explanation of Components:**

*   **DO:** Keyword that initiates the Do loop.
*   **`<loop_counter_variable>`:** A variable (often designated by a letter like 'I', 'J', or a specific system variable) that will be incremented or decremented with each iteration.
*   **`=`:** Assignment operator.
*   **`<start_value>`:** The initial value of the loop counter.
*   **`TO`:** Keyword indicating the upper limit of the loop.
*   **`<end_value>`:** The value the loop counter must reach or exceed (or fall below, depending on the direction) for the loop to terminate.
*   **`[STEP <increment_value>]`:** An optional parameter. If omitted, the default increment is usually 1. `<increment_value>` specifies the amount by which the loop counter changes in each iteration. This can be positive or negative.
*   **`(Block of NC code to be repeated)`:** The actual NC commands that will be executed in each iteration of the loop. This can include movement commands (G00, G01, G02, G03), spindle commands (S, M03, M04), tool changes (T, M06), etc.
*   **`END`:** Keyword that marks the end of the Do loop and signals the controller to evaluate the loop condition and proceed to the next iteration or exit the loop.
*   **`<loop_counter_variable>` (after END):** In some systems, repeating the loop counter variable after END is a requirement for clarity or proper parsing.

**Reference from Textbooks:**
*   While "Numerical Controls in Manufacturing" by Frank W. Wilson (1963) and "Introduction to Numerical Control in Manufacturing" by American Society of Tool and Manufacturing Engineers (1969) might not use the term "Do loop" as explicitly as modern programming, they discuss concepts of **subroutines** and **repetitive cycles** which are the predecessors and conceptual basis for modern Do loops. These early texts emphasize the need for efficient programming to overcome the limitations of punch tape and manual input. The idea of repeating a sequence of motions is central to optimizing NC code.
*   "Computer Control of Manufacturing Systems" by Yoram Koren (1983) would likely provide a more direct discussion of programming constructs like loops in the context of computer-controlled systems, bridging the gap between manual NC and modern CNC.

**Example:**

Let's say we need to drill four holes with a spacing of 10mm along the X-axis, starting at X=20, Y=30. The drilling operation involves a G81 cycle.

**Without Do Loop:**

```ncdi
N10 G90 G21 G40 G49 G80
N20 T1 M06
N30 S5000 M03
N40 G54 G00 X20.0 Y30.0
N50 G43 H1 Z10.0
N60 G81 Z-5.0 R2.0 F100.0
N70 X30.0
N80 X40.0
N90 X50.0
N100 G80
N110 M05
N120 G91 G28 Z0
N130 M30
```

**With Do Loop (Conceptual G-code):**

Assume the drilling cycle (G81) is already set up from N50 onwards. The repetitive part is the X-coordinate change.

```ncdi
N10 G90 G21 G40 G49 G80
N20 T1 M06
N30 S5000 M03
N40 G54 G00 X20.0 Y30.0
N50 G43 H1 Z10.0
N60 G81 Z-5.0 R2.0 F100.0   (Initial drilling command)
N70 DO I = 1 TO 3 STEP 1      (Loop for 3 additional holes)
N80 X+10.0                  (Move 10mm in X relative to previous position)
N90 END I                   (End of loop, execute next iteration if I <= 3)
N100 G80                    (Cancel canned cycle)
N110 M05
N120 G91 G28 Z0
N130 M30
```

**Important Note on G-code Dialects:**
The exact syntax for `DO` loops can vary significantly. Some controllers might use a specific `L` parameter within certain canned cycles (like G81, G82, G83) for repetition. For example:

*   **Fanuc:** Might use `L` parameter with canned cycles or specific `WHILE` loops in advanced programming.
*   **Haas:** Uses `DO`...`END` syntax, often with a loop counter variable.
*   **Mazak:** Might have its own macro language with loop constructs.

For the purpose of this module, we will focus on the common `DO...END` structure as a representation of the concept.

---

### 3. Applications of Do Loops in Manufacturing

Do loops are incredibly versatile and can be applied to a wide range of manufacturing operations:

**3.1. Pattern Drilling/Milling:**
*   Creating arrays of holes on a workpiece.
*   Milling multiple identical slots or pockets with precise spacing.
*   Drilling bolt hole circles.

**Example: Bolt Hole Circle**
Drilling 5 holes equally spaced on a 50mm diameter circle centered at X=50, Y=50.

```ncdi
N10 G90 G21 G40 G49 G80
N20 T1 M06
N30 S5000 M03
N40 G54 G00 X50.0 Y50.0
N50 G43 H1 Z10.0
N60 G81 Z-5.0 R2.0 F100.0 (Drilling cycle setup)

REM *** Calculate angular increment ***
REM Angle for 5 holes = 360 degrees. Angle between holes = 360/5 = 72 degrees.
REM For G17 (XY plane), angle in radians = 72 * (PI/180) = 1.2566 radians.
REM For simple G01 motion, we need X and Y increments.
REM X increment = radius * cos(angle)
REM Y increment = radius * sin(angle)
REM Let's assume a programming system that allows trigonometric functions or pre-calculated values.
REM If we assume a simpler system where we increment X and Y using calculated coordinates.

N70 X50.0 Y100.0 (First hole on the top of the circle)

N80 DO I = 1 TO 4 STEP 1  (Loop for the remaining 4 holes)
  REM Calculate coordinates for each hole.
  REM This often requires using variables and calculations within the CNC program,
  REM or pre-calculating all coordinates if trig functions aren't available.
  REM Assuming we pre-calculated the coordinates for simplicity in this example:
  N90 IF [I EQ 1] THEN G01 X50.0 Y100.0  (Already done before loop)
  N95 IF [I EQ 2] THEN G01 X77.07 Y77.07 (Approximate coordinates)
  N100 IF [I EQ 3] THEN G01 X50.0 Y50.0
  N105 IF [I EQ 4] THEN G01 X22.93 Y77.07 (Approximate coordinates)
  N110 IF [I EQ 5] THEN G01 X22.93 Y22.93 (Approximate coordinates)

  REM In a more advanced system with macros, you might have:
  REM LET ANGLE = 72 * I
  REM LET X_COORD = 50 + 50 * COS(ANGLE)
  REM LET Y_COORD = 50 + 50 * SIN(ANGLE)
  REM G01 X[X_COORD] Y[Y_COORD]

  REM For a basic G-code loop that calls a fixed location:
  REM You would have separate X,Y lines for each hole before the loop,
  REM or within the loop if using relative moves that build up to the circle.

  REM A common approach is to use a canned cycle with a repeat count (L parameter)
  REM If G81 has an L parameter, it would look like:
  REM N60 G81 X50.0 Y100.0 Z-5.0 R2.0 F100.0 L4  (Drill 4 more holes from the first position)

  REM Let's illustrate with explicit moves for clarity, assuming calculated X,Y:
  REM The following are example coordinates for the 5 holes:
  REM Hole 1: X50 Y100
  REM Hole 2: X77.07 Y77.07
  REM Hole 3: X50 Y50
  REM Hole 4: X22.93 Y77.07
  REM Hole 5: X22.93 Y22.93

  REM Re-writing the loop to be more representative of a common G-code implementation
  REM where the loop might re-invoke a canned cycle at different X,Y positions.

N70 G00 X50.0 Y100.0   (Position for 1st hole)
N75 G81 Z-5.0 R2.0 F100.0 (Drill 1st hole)
N80 DO I = 2 TO 5 STEP 1   (Loop for holes 2 through 5)
  REM Pre-calculate or define the coordinates for subsequent holes:
  REM N85 X77.07 Y77.07 (for I=2)
  REM N86 X50.0 Y50.0   (for I=3)
  REM N87 X22.93 Y77.07 (for I=4)
  REM N88 X22.93 Y22.93 (for I=5)
  REM This example assumes the controller can interpret these as positions for the canned cycle.
  REM On many controllers, you'd simply list the X, Y coordinates sequentially.
  REM A true DO loop would involve a variable controlling the X,Y positions.
  REM Let's assume a controller that supports variable X,Y in canned cycles with a loop.
  REM A more direct conceptual representation would be:
  REM N80 DO I = 2 TO 5
  REM   G81 X[X_COORD_for_I] Y[Y_COORD_for_I] ...
  REM END I

  REM **Simplified Example using explicit positioning for each iteration:**
  IF [I EQ 2] THEN G01 X77.07 Y77.07
  IF [I EQ 3] THEN G01 X50.0 Y50.0
  IF [I EQ 4] THEN G01 X22.93 Y77.07
  IF [I EQ 5] THEN G01 X22.93 Y22.93
  G81 Z-5.0 R2.0 F100.0  (Drill the current hole)
N90 END I

N100 G80                   (Cancel canned cycle)
N110 M05
N120 G91 G28 Z0
N130 M30
```
*This bolt hole circle example highlights that achieving complex geometric patterns often requires a combination of Do loops and the ability to calculate or store coordinates within the CNC program, possibly using macro variables or subprograms.*

**3.2. Mirror Imaging:**
While not a direct loop function, understanding repetitive patterns helps in conceptualizing mirroring. For example, milling a feature and then looping to mill its mirror image.

**3.3. Machining Multiple Parts:**
If a machine can hold multiple identical workpieces, Do loops can be used to repeat the machining sequence for each part. This is especially relevant for high-volume production.

**3.4. Feature Repetition:**
Milling a series of identical bosses, slots, or chamfers along an edge.

---

### 4. Advanced Considerations and Best Practices

**4.1. Nesting Loops:**
Do loops can be nested within other Do loops to create more complex patterns, such as drilling a grid of holes where each row is defined by an outer loop and each column by an inner loop.

**Example: Nested Loop for a Grid**
Drilling holes

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
