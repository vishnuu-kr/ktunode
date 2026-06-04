---
title: "sub routines and fixed cycles"
subject: "ADVANCED NUMERICAL CONTROL IN MANUFACTURING"
module: "Module 3: NC Part Programming"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464522"
status: "completed"
scrapedAt: "2026-05-20T18:19:23.113Z"
---
# ADVANCED NUMERICAL CONTROL IN MANUFACTURING

## Module 3: NC Part Programming

### Topic: Subroutines and Fixed Cycles

**Target Audience:** Students of Advanced Numerical Control in Manufacturing

**Learning Outcomes Covered in this Topic:**

*   Understand the purpose and types of subroutines in NC part programming.
*   Learn how to define, call, and manage subroutines in NC programs.
*   Understand the concept and benefits of using fixed cycles for common machining operations.
*   Learn to utilize various fixed cycles for drilling, tapping, boring, etc.
*   Apply knowledge of subroutines and fixed cycles to create efficient and effective NC part programs.

**Alignment with Course Outcomes:**

*   **CO1 (K2): Understand the working of NC and CNC systems:** While this topic focuses on programming, understanding subroutines and fixed cycles inherently demonstrates how programming logic contributes to the overall functionality and efficiency of NC/CNC systems.
*   **CO3 (K6): Create programming code in CNC:** This is the core outcome addressed by this topic. Students will learn the syntax and application of subroutines and fixed cycles, directly enabling them to write CNC programs.

---

### 1. Introduction to Subroutines in NC Part Programming

**Key Concept:** Subroutines are blocks of NC code that can be called and executed multiple times within a main program without having to rewrite the code each time. They are essential for improving program efficiency, reducing redundancy, and simplifying complex machining tasks.

**Importance:**

*   **Program Efficiency:** Eliminates repetitive programming, leading to shorter and more manageable part programs.
*   **Modularity:** Breaks down a complex machining operation into smaller, reusable components.
*   **Reduced Errors:** By programming a sequence once and calling it, the likelihood of introducing errors through repeated typing is significantly reduced.
*   **Flexibility:** Allows for easy modification of a machining operation by editing the subroutine once.

**Types of Subroutines:**

*   **Local Subroutines (or Internal Subroutines):** These are defined within the same program and are typically called by a single program. Their scope is limited to the program in which they are defined.
*   **Global Subroutines (or External Subroutines):** These are stored in a separate file or library and can be called by multiple NC programs. This allows for a centralized repository of commonly used machining sequences.

**Source Reference:**

*   "Numerical Controls in Manufacturing" by Frank W Wilson (McGraw-Hill, 1963) discusses the early adoption and benefits of program segmentation, which is a precursor to modern subroutines, emphasizing efficiency and ease of programming.
*   "Introduction to Numerical Control in Manufacturing" by American Society of Tool and Manufacturing Engineers, Chester Joseph Kishel (1969) also highlights the importance of program organization and the introduction of callable routines to reduce programming effort.

---

### 2. Defining and Calling Subroutines

**Definition of a Subroutine:**

A subroutine is typically defined between specific program blocks that signal the beginning and end of the subroutine. The exact syntax varies between CNC controllers, but common formats include:

*   **Start of Subroutine:** `Oxxxx` (where `xxxx` is a 4-digit subroutine number)
*   **End of Subroutine:** `M99` (often used to denote the end of a main program or a subroutine that returns control)

**Calling a Subroutine:**

A subroutine is called from the main program using a specific command, often preceded by a subroutine call address.

*   **Call Command:** `M98 Pxxxx` (where `Pxxxx` specifies the subroutine number to be called). Some systems might use `L` for the number of calls, like `M98 Pxxxx Lnn` to call subroutine `xxxx` `nn` times.

**Parameters in Subroutines:**

Modern CNC systems allow for passing parameters to subroutines, making them more versatile. This means the same subroutine can perform slightly different operations based on the values passed.

*   **Parameter Passing (using variables):** Variables (e.g., `#1`, `#2`) can be assigned values in the main program and then used within the subroutine.

**Example (Conceptual - syntax may vary):**

**Main Program:**

```
N010 G20
N020 G17
N030 T1 M6  (Tool 1)
N040 M3 S1000 (Spindle On)
N050 G0 X10 Y20 (Rapid to position 1)
N060 #1 = 5.0  (Set parameter 1: depth)
N070 #2 = 1.0  (Set parameter 2: feed rate)
N080 M98 P1000 (Call Subroutine 1000)
N090 G0 X30 Y40 (Rapid to position 2)
N100 #1 = 8.0  (Change parameter 1)
N110 M98 P1000 (Call Subroutine 1000 again with new depth)
N120 M5 (Spindle Off)
N130 M30 (Program End and Reset)
```

**Subroutine 1000 (Defined after the main program or in a separate file):**

```
O1000
N1005 G0 Z5.0 (Rapid to Z above part)
N1010 G1 Z-#1 F#2 (Feed into the part to the depth specified by #1 at feed #2)
N1015 G0 Z5.0 (Rapid retract)
M99 (End of Subroutine - return to main program)
```

**Important Points to Remember:**

*   **Subroutine Numbering:** Use unique subroutine numbers to avoid conflicts.
*   **Return to Main Program:** Ensure the subroutine correctly returns control to the main program.
*   **Tooling and Spindle State:** Subroutines should generally not change tool or spindle status unless explicitly intended and handled carefully.

---

### 3. Fixed Cycles (canned cycles)

**Key Concept:** Fixed cycles are pre-programmed sequences of movements and operations for common machining tasks. They simplify part programming by allowing the programmer to specify the desired operation and its parameters, rather than programming each individual motion.

**Benefits of Fixed Cycles:**

*   **Programming Simplicity:** Reduces the amount of code required for repetitive operations.
*   **Accuracy and Repeatability:** These cycles are precisely defined within the CNC controller, ensuring consistent and accurate machining.
*   **Machine Control Optimization:** Fixed cycles are often optimized by the machine tool builder for maximum efficiency and safety.
*   **Reduced Program Size:** Contributes to shorter and more manageable NC programs.

**Source Reference:**

*   Frank W Wilson (1963) mentions the development of standardized machining sequences and the desire for simplified programming through "pre-packaged" operations.
*   Chester Joseph Kishel (1969) provides early examples and explanations of canned cycles for drilling and other basic operations.
*   Yoram Koren's "Computer Control of Manufacturing Systems" (McGraw-Hill Inc.) discusses advanced control strategies and how fixed cycles fit into the broader automation landscape, emphasizing their role in efficient manufacturing.

**Common Types of Fixed Cycles:**

The specific codes and parameters for fixed cycles vary significantly between CNC manufacturers (e.g., Fanuc, Siemens, Heidenhain). However, the underlying operations are similar.

**3.1 Drilling Cycles:**

Used for drilling holes.

*   **G81 (Simple Drilling Cycle):**
    *   Performs a straight drilling motion to a specified depth at a set feed rate.
    *   Rapid retract to the starting position.
    *   **Parameters:**
        *   `Z`: Final Z depth.
        *   `R`: Retract plane (safe Z position above the part).
        *   `F`: Feed rate.

    **Example (Fanuc Syntax):**
    ```
    N010 G90 G81 Z-10.0 R2.0 F100;
    ```
    *   This drills a hole to Z-10.0, starting the feed at R2.0, with a feed rate of 100.

*   **G82 (Drilling Cycle with Dwell):**
    *   Similar to G81 but includes a dwell at the bottom of the hole.
    *   **Parameters:** `Z`, `R`, `F`, `P` (dwell time in milliseconds or seconds, depending on controller).

    **Example:**
    ```
    N010 G90 G82 Z-15.0 R3.0 F120 P500;
    ```
    *   Drills to Z-15.0, retracts at R3.0, with feed 120 and a 0.5-second dwell at the bottom.

*   **G83 (Peck Drilling Cycle):**
    *   Used for drilling deep holes to clear chips.
    *   The tool drills to a set peck depth, retracts to the R-plane (or a specified retract depth), and then re-engages to drill further.
    *   **Parameters:**
        *   `Z`: Final Z depth.
        *   `Q`: Peck depth (depth of each drilling increment).
        *   `R`: Retract plane.
        *   `F`: Feed rate.
        *   (Optional `K`: Retract amount for peck, often used instead of R for full retract. `I` and `J` might define incremental peck depth and retract.)

    **Example:**
    ```
    N010 G90 G83 Z-20.0 Q2.0 R5.0 F80;
    ```
    *   Drills to Z-20.0 in 2.0 increments, retracting to R5.0 between pecks, at a feed rate of 80.

**3.2 Tapping Cycles:**

Used for cutting internal threads. These cycles are critical for synchronizing spindle rotation with Z-axis feed to achieve accurate thread pitch.

*   **G84 (Rigid Tapping Cycle):**
    *   Requires a rigid tap holder and synchronized spindle/axis motion.
    *   The spindle speed and feed rate must be matched to the thread pitch.
    *   **Parameters:**
        *   `Z`: Final Z depth of the thread.
        *   `R`: Retract plane.
        *   `F`: Feed rate (which must be equivalent to the desired thread pitch, e.g., if threading with a 1/4-20 tap, F=0.050 inches/rev or 1.27 mm/rev).

    **Example:**
    ```
    N010 G90 G84 Z-10.0 R2.0 F0.050;
    ```
    *   Taps a thread to Z-10.0, retracts at R2.0, with a feed rate of 0.050 inches per revolution.

*   **G74 (Reverse Tapping Cycle - less common in modern machines, sometimes used for tapping blind holes):**
    *   In some controllers, this is for tapping from the bottom up or is an alternative to G84.
    *   **Parameters:** Similar to G84.

**3.3 Boring Cycles:**

Used for finishing or enlarging existing holes to precise diameters.

*   **G85 (Straight Boring Cycle):**
    *   Bores to a specified depth at a set feed rate.
    *   Retracts at the feed rate.
    *   **Parameters:** `Z`, `R`, `F`.

    **Example:**
    ```
    N010 G90 G85 Z-5.0 R2.0 F90;
    ```

*   **G86 (Boring Cycle with Spindle Stop):**
    *   Bores to depth, stops the spindle, and rapid retracts. Requires manual repositioning of the spindle to start rotation again or a specific command to restart.
    *   **Parameters:** `Z`, `R`, `F`.

*   **G87 (Boring Cycle with Spindle Stop and Retract):**
    *   Bores to depth, stops the spindle, retracts to the R-plane, and then restarts the spindle for repositioning.

**3.4 Other Common Fixed Cycles:**

*   **G88:** Similar to G86 but may have controller-specific variations.
*   **G89:** Boring cycle with dwell at the bottom.

**Cancelling Fixed Cycles:**

*   **G80:** Cancels any active fixed cycle. It's crucial to use G80 before moving to a different machining operation or to a different XY position for a new fixed cycle.

**Important Points to Remember:**

*   **Coordinate System:** Fixed cycles typically operate in the current coordinate system (e.g., G90 for absolute, G91 for incremental).
*   **R-Plane:** The R-plane is a critical parameter for safety and chip evacuation. It should be set sufficiently above the workpiece to allow for tool changes and clearance.
*   **Feed Rate:** For tapping cycles, the feed rate *must* match the thread pitch for successful threading.
*   **Tool Selection:** Ensure the correct tool is loaded before calling a fixed cycle.
*   **Pre-programmed Holes:** Fixed cycles are generally used after a hole has been initiated (e.g., drilled or milled).

---

### 4. Practice Questions and Exercises

**Question 1:**

What is the primary advantage of using subroutines in NC part programming?

**Answer:** The primary advantage is to reduce programming effort and program size by allowing a block of code to be written once and called multiple times, improving efficiency and reducing redundancy.

**Question 2:**

A programmer needs to drill 5 holes at different XY locations, each to a depth of 15mm. The tool is positioned at X10 Y20 Z5.0 before the first hole. Write a short NC program segment that uses a subroutine to achieve this. Assume a simple drilling cycle (G81).

**Conceptual Program Segment:**

```
...
Nxxx G20 G90 G17
Nxxx T1 M6
Nxxx M3 S1500
Nxxx #1 = 15.0  (Depth)
Nxxx #2 = 0.15  (Feed per revolution)
Nxxx M98 P2000 (Call Drill Subroutine)

Nxxx G0 X30 Y40
Nxxx M98 P2000 (Call Drill Subroutine again)

Nxxx G0 X50 Y20
Nxxx M98 P2000 (Call Drill Subroutine again)

...
Nzzz M5
...

O2000
N2005 G81 Z-#1 R2.0 F#2
N2010 G80 (Cancel cycle)
N2015 G0 Z5.0 (Return to safe height)
M99
```

**Explanation:** The main program sets the depth and feed rate using variables `#1` and `#2` and then calls the subroutine `P2000` for each hole. The subroutine `O2000` contains the G81 drilling cycle and the necessary return commands. Note that the XY positioning would typically be done with G0 commands before each M98 call.

**Question 3:**

Explain the purpose of the 'R' parameter in a G81 drilling cycle.

**Answer:** The 'R' parameter defines the "retract plane" or "clearance plane." The tool rapids to this Z-height above the workpiece before starting the feed motion into the part for drilling, and rapids back up to this plane after completing the drilling operation. It acts as a safe zone to prevent collisions.

**Question 4:**

When programming a G84 rigid tapping cycle for a M10 x 1.5 thread, what feed rate (F) should be specified?

**Answer:** The feed rate (F) should be set to the thread pitch, which is 1.5 mm/revolution. So, `F1.5`.

**Question 5:**

You are about to start a series of drilling operations using G81. What command should you use to ensure that no previous fixed cycle is active?

**Answer:** `G80` should be used to cancel any active fixed cycle before starting a new operation.

---

### 5. Key Takeaways and Summary

*   **Subroutines:** Essential for modularity, efficiency, and reducing redundancy in NC programs. They allow for reusable blocks of code.
*   **Fixed Cycles:** Pre-programmed sequences that simplify common machining operations like drilling, tapping, and boring, leading to shorter programs and improved accuracy.
*   **Parameterization:** Using variables within subroutines and understanding the parameters of fixed cycles (e.g., Z, R, F, Q, P) is crucial for their effective use.
*   **Controller Variations:** Always refer to the specific CNC controller manual for exact syntax and available fixed cycles.
*   **Safety:** Pay close attention to parameters like the R-plane and ensure correct feed rates, especially for tapping, to prevent machine damage or tool breakage.

---

This module provides the foundation for creating more efficient and sophisticated NC programs. By mastering subroutines and fixed cycles, you significantly enhance your ability to program complex parts and optimize machining processes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
