---
title: "use of canned cycles"
subject: "ADVANCED NUMERICAL CONTROL IN MANUFACTURING"
module: "Module 4: Computer aided part programming"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464528"
status: "completed"
scrapedAt: "2026-05-20T18:19:26.569Z"
---
# ADVANCED NUMERICAL CONTROL IN MANUFACTURING

## Module 4: Computer Aided Part Programming

### Topic: Use of Canned Cycles

---

### 1. Introduction to Canned Cycles

**1.1 What are Canned Cycles?**

*   **Definition:** Canned cycles are pre-programmed sequences of NC (Numerical Control) or CNC (Computer Numerical Control) commands that perform a specific, repetitive machining operation. They simplify programming by reducing the number of lines of code required for common tasks.
*   **Purpose:** To automate complex or frequently used machining operations, leading to:
    *   **Reduced Programming Time:** Eliminates the need to write repetitive code for each instance of an operation.
    *   **Increased Programming Accuracy:** Pre-tested cycles minimize the risk of programming errors.
    *   **Improved Machine Utilization:** Faster programming means less downtime between jobs.
    *   **Consistency and Repeatability:** Ensures that operations are performed identically every time.

**1.2 History and Evolution (Referencing Textbooks)**

*   **Early NC:** Frank W. Wilson's "Numerical Controls in Manufacturing" (1963) likely touched upon the early development of basic subroutines, which laid the groundwork for more sophisticated canned cycles. These early systems were often more hardware-dependent.
*   **Advancement with CNC:** The American Society of Tool and Manufacturing Engineers' "Introduction to Numerical Control in Manufacturing" (1969) by Kishel would have documented the growing importance of software-driven capabilities in CNC, including the emergence of more flexible and standardized canned cycles.
*   **Computer Control:** Yoram Koren's "Computer Control of Manufacturing Systems" provides a deeper dive into how computers revolutionized machine control, enabling the sophisticated and integrated canned cycles we use today. The integration of logic and efficient execution of these cycles is a testament to advancements in computer control.

**1.3 Categorization of Canned Cycles**

Canned cycles can be broadly categorized based on the machining operation they perform:

*   **Drilling Cycles:** For creating holes.
*   **Tapping Cycles:** For threading internal holes.
*   **Boring Cycles:** For enlarging existing holes to a precise diameter.
*   **Milling Cycles:** For creating specific geometric features like pockets or slots.
*   **Turning Cycles (for Lathes):** For operations like facing, rough turning, and threading.

---

### 2. Common Canned Cycles and Their Programming

**2.1 Drilling Cycles**

These cycles are used to perform drilling operations, often including chip breaking and retracting to clear chips.

*   **G81 - Simple Drilling Cycle:**
    *   **Description:** Performs a simple drilling operation. The tool drills to a specified depth and then retracts to the initial position.
    *   **Parameters:**
        *   `Z`: Depth of the hole.
        *   `R`: Retract plane (safe height from which the tool starts the feed).
        *   `F`: Feed rate.
    *   **Example:**
        ```gcode
        N10 G90 G00 X10.0 Y20.0 (Rapid to position)
        N20 G81 Z-5.0 R1.0 F100 (Perform drilling cycle)
        N30 G80 (Cancel canned cycle)
        ```
    *   **Important Point:** The `R` plane is crucial for tool clearance and safety.

*   **G83 - Deep Hole Drilling (Peck Drilling) Cycle:**
    *   **Description:** Designed for drilling deep holes. The tool feeds to a certain depth, retracts partially to clear chips, and then resumes drilling. This process repeats until the final depth is reached.
    *   **Parameters:**
        *   `Z`: Final depth of the hole.
        *   `Q`: Peck depth (depth of each drilling increment).
        *   `R`: Retract plane.
        *   `F`: Feed rate.
    *   **Example:**
        ```gcode
        N10 G90 G00 X15.0 Y25.0
        N20 G83 Z-20.0 Q2.0 R2.0 F80 (Deep hole drilling with 2mm pecks)
        N30 G80
        ```
    *   **Important Point:** `Q` parameter is critical for chip evacuation in deep hole drilling.

*   **G84 - Tapping Cycle:**
    *   **Description:** Used for tapping internal threads. It involves drilling to a specific depth, then reversing spindle rotation to withdraw the tap, and finally re-engaging the spindle to return to the start position. Requires synchronized spindle and feed rate.
    *   **Parameters:**
        *   `Z`: Depth of the thread.
        *   `R`: Retract plane.
        *   `F`: Pitch of the thread (feed rate = spindle speed * pitch).
    *   **Example:**
        ```gcode
        N10 G90 G00 X30.0 Y15.0
        N20 G43 H1 Z5.0 (Tool length compensation and approach)
        N30 S500 M3 (Spindle ON clockwise at 500 RPM)
        N40 G84 Z-10.0 R2.0 F1.5 (Tap cycle for M10x1.5 thread)
        N50 G80
        N60 M5 (Spindle OFF)
        ```
    *   **Important Point:** The feed rate (`F`) for tapping must be set to the thread pitch. Spindle direction (`M3`/`M4`) and speed (`S`) are critical.

*   **G85 - Boring Cycle (Non-Resettable Retract):**
    *   **Description:** Used for boring operations. The tool feeds to the boring depth, then retracts at the boring feed rate without retracting to the retract plane.
    *   **Parameters:**
        *   `Z`: Boring depth.
        *   `R`: Retract plane.
        *   `F`: Boring feed rate.
    *   **Example:**
        ```gcode
        N10 G90 G00 X40.0 Y30.0
        N20 G43 H2 Z3.0
        N30 G85 Z-8.0 R1.0 F120
        N40 G80
        ```
    *   **Important Point:** The tool retracts along the boring feed, which might be slower than rapid traverse, impacting cycle time.

*   **G86 - Boring Cycle (Rapid Retract):**
    *   **Description:** Similar to G85, but the tool retracts at rapid traverse speed after reaching the boring depth.
    *   **Parameters:**
        *   `Z`: Boring depth.
        *   `R`: Retract plane.
        *   `F`: Boring feed rate.
    *   **Example:**
        ```gcode
        N10 G90 G00 X45.0 Y35.0
        N20 G43 H2 Z3.0
        N30 G86 Z-8.0 R1.0 F120
        N40 G80
        ```
    *   **Important Point:** This is generally preferred over G85 for faster cycle times when chip evacuation is not a concern during retraction.

*   **G87 - Boring Cycle (Back Boring):**
    *   **Description:** Used for back boring, where the tool performs the boring operation on the way out. The tool moves to the hole, retracts to the back boring position, and then bores while retracting at the boring feed rate.
    *   **Parameters:**
        *   `Z`: Boring depth.
        *   `R`: Retract plane.
        *   `F`: Boring feed rate.
    *   **Important Point:** This cycle is less common but useful for specific machining scenarios.

**2.2 Milling Cycles (Less common as "canned" but foundational)**

While milling often uses contour programming, some basic operations can be considered canned cycles, especially on older machines or for specific functionalities. Modern CNCs integrate these into more complex contouring or pocketing cycles.

*   **G80 - Canned Cycle Cancel:**
    *   **Description:** This code is crucial. It cancels any active canned cycle, returning the machine to normal preparatory function mode.
    *   **Important Point:** Always use G80 after a canned cycle unless you intend to repeat it at a new position.

**2.3 Other Canned Cycles (Brief Mention)**

*   **Turning Cycles (Lathes):**
    *   `G71`: Rough longitudinal turning.
    *   `G72`: Rough facing.
    *   `G73`: High-speed rough drilling (peck drilling).
    *   `G74`: Left-hand tapping.
    *   `G75`: Grooving cycle.
    *   `G76`: Threading cycle.

---

### 3. Programming Considerations for Canned Cycles

**3.1 Coordinate System and Planes:**

*   **Absolute vs. Incremental:** Canned cycles typically work with the currently active coordinate system (G90 for absolute, G91 for incremental).
*   **Tool Positioning:** Before activating a canned cycle, the tool must be positioned at the desired X and Y coordinates for the hole or feature.

**3.2 Safety and Clearances:**

*   **Retract Plane (R):** The `R` value defines the point to which the tool retracts between multiple operations within the same canned cycle or after the cycle is completed before the next rapid traverse move. It's vital for avoiding collisions.
*   **Safe Height (Z):** Ensure the tool starts at a safe Z height before initiating the cycle.

**3.3 Spindle Control:**

*   **Spindle Speed (S):** Must be set before activating cycles like tapping.
*   **Spindle Direction (M3/M4):** Essential for tapping and other rotational operations.

**3.4 Feed Rate Control:**

*   **Feed Rate (F):** Must be appropriate for the material, tool, and operation (drilling, tapping, boring). For tapping, `F` is directly related to thread pitch.

**3.5 Cycle Parameters:**

*   **Depth (Z):** The final depth of the operation. This is typically specified as a negative value for drilling/tapping/boring into the workpiece.
*   **Peck Depth (Q):** For G83, this determines the depth of each peck.
*   **Incremental Values:** In incremental mode (G91), the `Z` value would represent the total depth from the current position.

**3.6 Canceling Canned Cycles:**

*   **G80:** Essential for exiting a canned cycle to prevent unintended operations.

---

### 4. Benefits of Using Canned Cycles

*   **Simplified Programming:** As highlighted in textbooks, the primary benefit is reducing the lines of code needed for common operations.
*   **Improved Consistency:** Ensures that operations are performed identically each time, leading to higher part quality.
*   **Reduced Errors:** Pre-programmed sequences are less prone to human error compared to writing individual command lines for each step.
*   **Faster Setup and Machining:** Shorter programs and optimized sequences contribute to quicker job completion.
*   **Machine Compatibility:** Standardized canned cycles (like ISO codes) ensure greater compatibility between different CNC machines.

---

### 5. Learning Outcomes Alignment

This topic directly addresses the following learning outcomes:

*   **CO1: Understand the working of NC and CNC systems (K2):** By learning how canned cycles automate sequences of operations, students understand how CNC systems execute pre-defined tasks.
*   **CO3: Create programming code in CNC (K6):** This is the core outcome addressed. Students will be able to write CNC programs incorporating canned cycles for common machining operations.
*   **CO2 and CO4 (Indirectly):** Understanding canned cycles implies an understanding of machine movements, spindle control, and feed rate control, which are fundamental to the working and construction of CNC machines.

---

### 6. Practice Questions/Exercises

**Exercise 1: Simple Drilling**

Write a CNC program to drill a hole at X25.0, Y30.0 to a depth of 10mm. The retract plane is 2mm above the workpiece surface. The feed rate should be 0.1mm/rev, and the spindle speed is 1000 RPM.

**Exercise 2: Deep Hole Drilling**

Program a deep hole drilling operation at X50.0, Y40.0. The hole needs to be 30mm deep. Use a peck depth of 3mm and a retract plane of 3mm. The feed rate is 0.08mm/rev, and the spindle speed is 800 RPM.

**Exercise 3: Tapping**

Create a CNC program to tap a hole at X35.0, Y20.0. The hole is M8 x 1.25 and needs to be tapped to a depth of 15mm. The retract plane is 2mm. The spindle speed for tapping should be 600 RPM.

---

### 7. Answers to Practice Questions

**Answer 1:**

```gcode
O0001 (Simple Drill)
N10 G21 G90 G17 (Metric, Absolute, XY Plane)
N20 T1 M6 (Select Tool 1, Change Tool)
N30 G43 H1 Z5.0 (Tool length compensation on, approach to Z5.0)
N40 S1000 M3 (Spindle ON clockwise at 1000 RPM)
N50 G00 X25.0 Y30.0 (Rapid to hole position)
N60 G81 Z-10.0 R2.0 F0.1 (Drilling Cycle)
N70 G80 (Cancel Canned Cycle)
N80 G00 Z5.0 (Retract to safe height)
N90 M5 (Spindle OFF)
N100 M30 (Program End and Reset)
```

**Answer 2:**

```gcode
O0002 (Deep Hole Drill)
N10 G21 G90 G17
N20 T2 M6
N30 G43 H2 Z5.0
N40 S800 M3
N50 G00 X50.0 Y40.0
N60 G83 Z-30.0 Q3.0 R3.0 F0.08 (Deep Hole Drilling Cycle)
N70 G80
N80 G00 Z5.0
N90 M5
N100 M30
```

**Answer 3:**

```gcode
O0003 (Tapping)
N10 G21 G90 G17
N20 T3 M6
N30 G43 H3 Z5.0
N40 S600 M3 (Spindle ON clockwise at 600 RPM)
N50 G00 X35.0 Y20.0
N60 G84 Z-15.0 R2.0 F1.25 (Tapping Cycle for M8x1.25)
N70 G80
N80 G00 Z5.0
N90 M5
N100 M30
```

---

### 8. Important Points to Remember

*   **Always cancel a canned cycle with G80** when you are finished with it.
*   **Ensure correct spindle direction (M3/M4) and feed rate (F)** are set before activating relevant cycles (especially tapping).
*   **Properly set the retract plane (R)** for safe tool movement between operations or before the next rapid traverse.
*   **Understand the difference between peck drilling (G83) and simple drilling (G81).**
*   **For tapping (G84), the feed rate (F) must match the thread pitch.**
*   **Canned cycles simplify programming and improve consistency.** They are a fundamental aspect of efficient CNC part programming.

---

This concludes the study notes on the use of canned cycles in ADVANCED NUMERICAL CONTROL IN MANUFACTURING. These notes are designed to help you understand their purpose, programming, and benefits, aligning with the course and learning outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
