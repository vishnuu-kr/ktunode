---
title: "Encoders and interpolators"
subject: "ADVANCED NUMERICAL CONTROL IN MANUFACTURING"
module: "Module 2: Encoders and interpolators"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464512"
status: "completed"
scrapedAt: "2026-05-20T18:19:12.680Z"
---
# ADVANCED NUMERICAL CONTROL IN MANUFACTURING

## Module 2: Encoders and Interpolators

---

### Topic: Encoders and Interpolators

---

**Introduction:**

This module delves into the critical components that enable precise motion control in Numerical Control (NC) and Computer Numerical Control (CNC) systems: **Encoders** and **Interpolators**. These technologies are fundamental to achieving the accuracy and repeatability required in modern manufacturing. Encoders provide essential feedback on the actual position of machine axes, while interpolators translate programmed tool paths into a series of discrete commands for axis drives.

---

### 1. Encoders: The Eyes of the CNC Machine (CO1, CO2, CO4)

Encoders are electro-mechanical devices that convert rotary or linear motion into digital signals. These signals are then interpreted by the CNC controller to determine the precise position, speed, and direction of the machine's axes. They are the primary feedback mechanism in closed-loop NC systems, allowing the controller to compare the commanded position with the actual position and make corrections as needed.

**1.1. What are Encoders?**

*   **Definition:** An encoder is a sensor that generates a series of electrical pulses or a digital code representing the magnitude and direction of movement.
*   **Purpose in CNC:** To provide real-time feedback on the position of machine tool components (e.g., spindle, axes) to the CNC controller. This feedback loop is crucial for achieving closed-loop control.
*   **Importance of Feedback:** As discussed in CO2, feedback mechanisms are vital for compensating for errors, external disturbances, and mechanical inaccuracies inherent in any machine system. Encoders are the backbone of this feedback.

**1.2. Types of Encoders:**

Encoders are broadly classified into two main types:

#### 1.2.1. Incremental Encoders

*   **Working Principle:** Incremental encoders generate a sequence of pulses as their shaft or sensing element moves. The controller counts these pulses to determine the change in position. They do not inherently know their absolute position upon startup; they track movement *from* a known starting point.
*   **Key Components:**
    *   **Code Disc/Strip:** A rotating disc (for rotary encoders) or a linear strip (for linear encoders) with accurately spaced patterns (slots, lines, or magnetic poles).
    *   **Light Source (e.g., LED):** Emits light through or reflects light off the code disc/strip.
    *   **Photodetector/Sensor:** Detects the light passing through or reflecting off the code disc/strip.
    *   **Interrupter/Grating:** The patterned element that creates the pulses.
*   **Pulse Generation:**
    *   **Quadrature Output:** The most common type. They provide two output signals (Channel A and Channel B) that are 90 degrees out of phase. This phase difference allows the controller to determine the *direction* of movement (e.g., clockwise vs. counter-clockwise, forward vs. backward).
        *   *Example:* If Channel A leads Channel B, it signifies movement in one direction; if Channel B leads Channel A, it signifies movement in the opposite direction.
    *   **Index Pulse (Z-channel):** A single pulse generated once per revolution (for rotary) or at a specific reference point (for linear). This is used for homing the machine – establishing a known zero point.
*   **Resolution:** The number of pulses generated per revolution or per unit length. Higher resolution means finer position detection.
*   **Advantages:**
    *   Simpler construction and lower cost compared to absolute encoders.
    *   High speed operation.
*   **Disadvantages:**
    *   Loses position information if power is lost or if there's electrical noise that causes pulse loss. Requires homing after power interruption.
    *   Susceptible to count errors due to vibration or electrical interference.

#### 1.2.2. Absolute Encoders

*   **Working Principle:** Absolute encoders provide a unique digital code for each distinct position of the shaft or sensing element. When power is applied, the controller immediately knows the exact position of the encoder without needing to move.
*   **Key Components:**
    *   **Code Disc/Strip:** A disc or strip with multiple concentric tracks or segments, each representing a binary code for a specific position.
    *   **Multiple Photodetectors:** Each track has a corresponding photodetector.
*   **Output:** Typically a parallel or serial binary code (e.g., Gray code, Binary code) that directly represents the current angular or linear position.
*   **Advantages:**
    *   Retains position information even after power loss. No homing required.
    *   Immune to count errors due to noise or vibration once a position is read.
*   **Disadvantages:**
    *   More complex and expensive than incremental encoders.
    *   Lower maximum speed compared to incremental encoders due to the complexity of reading all tracks simultaneously.
*   **Application:** Often used for critical axes or components where maintaining absolute position is paramount, or where frequent homing is undesirable.

**1.3. Rotary vs. Linear Encoders:**

*   **Rotary Encoders:**
    *   Measure rotational movement.
    *   Typically attached to servo motors or lead screw shafts.
    *   **Example:** Measuring the rotation of a motor driving a ball screw for a machine axis.
*   **Linear Encoders:**
    *   Measure linear movement directly.
    *   Consist of a sensing head that moves along a calibrated scale (glass or magnetic).
    *   **Example:** Mounted directly alongside an X, Y, or Z axis slide to measure its linear travel. They provide more accurate feedback than inferring linear position from rotary encoder feedback via a lead screw, as they bypass lead screw inaccuracies (backlash, pitch error).

**1.4. Important Points about Encoders:**

*   **Resolution is Crucial:** Higher resolution encoders allow for finer control and more precise positioning. Resolution is often specified in counts per revolution (CPR) for rotary or counts per inch/mm for linear.
*   **Accuracy vs. Resolution:** Resolution indicates the smallest increment of movement that can be detected. Accuracy refers to how close the detected position is to the true position.
*   **Environmental Considerations:** Encoders in manufacturing environments need to be robust to withstand dust, oil, vibration, and temperature fluctuations.
*   **Reference (Wilson, 1963):** Wilson's early work on NC systems highlighted the need for accurate position feedback, laying the groundwork for the widespread adoption of encoders. While his book might describe simpler forms of position sensing, the core principle of feedback remains.
*   **Reference (Koren, 1994):** Koren's "Computer Control of Manufacturing Systems" extensively discusses feedback control systems, with encoders being a primary sensor for implementing closed-loop control in CNC machines. He emphasizes their role in servo systems for achieving desired motion profiles.

---

### 2. Interpolators: The Path Planners (CO1, CO3)

Interpolators are the "brains" behind generating smooth, continuous tool paths from discrete programmed points. They take the commanded motion segments (lines, circles, arcs) from the NC program and break them down into a series of small, incremental steps that the machine's servo drives can execute in real-time.

**2.1. What are Interpolators?**

*   **Definition:** A circuit or algorithm within the CNC controller that generates intermediate motion commands (axis position increments) between two programmed points.
*   **Purpose in CNC:** To create smooth, continuous tool paths, especially for curves and complex shapes, by generating a high frequency of small motion commands for the servo drives.
*   **Types of Interpolation:**
    *   **Linear Interpolation:** Generates a straight line path between two points.
    *   **Circular/Arc Interpolation:** Generates a curved path that follows a circular arc.
    *   **Higher-Order Interpolation (e.g., Helical, Parabolic, Cubic Spline):** Used for more complex shapes and smoother transitions.

**2.2. How Interpolators Work (Conceptual):**

Imagine drawing a straight line between point A (X1, Y1) and point B (X2, Y2) on a paper. A human would draw a continuous stroke. An NC machine, however, moves in discrete steps. The interpolator's job is to calculate the X and Y coordinates for thousands of tiny steps along that line, allowing the machine's drives to move in tiny increments, effectively creating the illusion of a continuous line.

**2.3. Linear Interpolation:**

*   **Function:** To generate the intermediate points for a straight line between two commanded positions.
*   **Process:**
    1.  The CNC program provides the start and end coordinates of the line segment (e.g., G01 X100 Y50 F100).
    2.  The interpolator calculates the change in X (ΔX) and change in Y (ΔY) required to reach the end point.
    3.  Based on the feed rate (F), it determines the time interval for each step.
    4.  It then calculates the incremental X and Y movements (dx, dy) for each time step.
    5.  These incremental commands are sent to the respective axis servo drives.
*   **Example:** Moving from (0,0) to (10,10) at a feed rate that requires 100 steps. The interpolator would generate 100 sets of (dx, dy) commands, each representing a small step along the diagonal path.

**2.4. Circular/Arc Interpolation:**

*   **Function:** To generate intermediate points for a circular arc defined by a start point, end point, center, or radius.
*   **G-codes:** Typically uses G02 (clockwise arc) and G03 (counter-clockwise arc) commands, along with parameters like I, J (relative offsets to the center) or R (radius).
*   **Process:**
    1.  The CNC program specifies the start point, end point, center of the circle (or radius), and direction of the arc.
    2.  The interpolator, often using trigonometric functions or iterative methods, calculates the X and Y positions along the arc at small time intervals.
    3.  This involves calculating the sine and cosine of small angular increments.
*   **Example:**
    *   `G02 X10 Y0 I0 J-10 F50`: This command might define a quarter-circle arc. The interpolator would generate a sequence of X and Y coordinates that trace this arc from the current position (e.g., X0 Y10) to the specified end point (X10 Y0), with the center of the circle at (0,0) relative to the start point.
*   **Reference (Wilson, 1963):** Early NC systems, as described by Wilson, relied on simpler forms of interpolation, often performed by mechanical or early electronic circuits. The complexity of interpolators has evolved significantly with the advent of digital computers.

**2.5. Digital vs. Analog Interpolators:**

*   **Analog Interpolators:** Found in older NC systems. They used analog circuits (e.g., operational amplifiers, integrators) to generate continuous motion signals.
*   **Digital Interpolators (Digital Differential Analyzers - DDAs):** Found in modern CNC systems. These are digital circuits that use algorithms to approximate curves by summing small increments. They are more flexible, precise, and easier to implement with microprocessors.

**2.6. Role in CNC Programming (CO3):**

Understanding interpolators is crucial for CNC programmers.
*   **G01:** Used for linear interpolation. Programmers specify the end point and feed rate.
*   **G02/G03:** Used for circular interpolation. Programmers must correctly define the arc parameters (end point, center/radius, direction) for the interpolator to work.
*   **Feed Rate (F):** The interpolator uses the feed rate to determine the speed at which the tool path is executed, influencing the size and frequency of the incremental steps.

**2.7. Important Points about Interpolators:**

*   **Smoothness:** The quality of the surface finish often depends on the interpolator's ability to generate smooth paths with minimal "jerk" or sudden changes in acceleration.
*   **Computational Load:** Complex path geometries and high feed rates place a significant computational load on the CNC controller's interpolator.
*   **Accuracy:** The accuracy of the interpolator's calculations directly impacts the geometric accuracy of the machined part.
*   **Look-ahead Buffering:** Modern CNCs employ look-ahead buffering, where the interpolator and controller process several upcoming motion commands in advance. This helps in smoother acceleration/deceleration and avoiding unnecessary stops, leading to faster cycle times and better surface finish.

---

### 3. Relationship between Encoders and Interpolators (CO1, CO2)

Encoders and interpolators work in tandem to achieve precise motion control:

1.  **Interpolation:** The interpolator calculates the desired incremental movement for each axis.
2.  **Command:** These incremental commands are sent to the machine's servo drives (motors).
3.  **Actual Movement:** The servo drives execute these commands, causing the machine axes to move.
4.  **Feedback:** As the axes move, the encoders attached to them generate pulses indicating the actual position and direction of movement.
5.  **Comparison:** The CNC controller compares the position reported by the encoders with the position commanded by the interpolator.
6.  **Correction:** If there's a discrepancy, the controller adjusts the commands sent to the servo drives to bring the actual position in line with the commanded position. This is the essence of closed-loop control.

This continuous cycle of **Command -> Execute -> Feedback -> Compare -> Correct** ensures that the machine axes follow the programmed path with high accuracy.

---

### 4. Learning Outcome Alignment:

*   **CO1: Understand the working of NC and CNC systems (K2):** This module explains how encoders provide the feedback necessary for NC/CNC systems to function in a closed-loop manner and how interpolators translate programmed paths into executable commands, which are core to system operation.
*   **CO2: Understand feedback mechanisms in CNC machines (K2):** This module is entirely dedicated to encoders as the primary feedback sensors in CNC machines, detailing their types and how they enable closed-loop control.
*   **CO3: Create programming code in CNC (K6):** Understanding linear (G01) and circular (G02/G03) interpolation is fundamental for writing effective CNC programs that define tool paths.
*   **CO4: Understand the construction details of CNC machines (K2):** Understanding how encoders are physically incorporated into machine axes (e.g., attached to motors, scales) and the functional role of interpolators within the CNC controller provides insight into machine construction.

---

### Practice Questions:

1.  **What is the primary function of an encoder in a CNC system?**
    *   a) To generate tool paths
    *   b) To provide feedback on actual axis position
    *   c) To control spindle speed
    *   d) To manage coolant flow
    *   **Answer:** b) To provide feedback on actual axis position

2.  **Which type of encoder loses its position information if power is interrupted and requires homing after startup?**
    *   a) Absolute Encoder
    *   b) Incremental Encoder
    *   c) Linear Encoder
    *   d) Both a and b
    *   **Answer:** b) Incremental Encoder

3.  **What does the 90-degree phase difference between Channel A and Channel B signals in a quadrature incremental encoder indicate?**
    *   a) The speed of rotation
    *   b) The absolute position
    *   c) The direction of movement
    *   d) The encoder's resolution
    *   **Answer:** c) The direction of movement

4.  **What is the role of an interpolator in a CNC system?**
    *   a) To convert digital position data into analog control signals.
    *   b) To generate intermediate motion commands for smooth tool paths between programmed points.
    *   c) To read and decode NC program codes.
    *   d) To physically move the machine axes.
    *   **Answer:** b) To generate intermediate motion commands for smooth tool paths between programmed points.

5.  **Identify the G-code commonly used for linear interpolation.**
    *   **Answer:** G01

6.  **Explain the advantage of using a linear encoder directly on a machine axis compared to inferring linear position from a rotary encoder on a lead screw.**
    *   **Answer:** Linear encoders measure linear movement directly, bypassing potential inaccuracies in the lead screw itself (such as backlash, pitch errors, or bending). This leads to higher overall positioning accuracy.

7.  **Describe the process an interpolator would follow to generate a circular arc path.**
    *   **Answer:** The interpolator receives the start point, end point, and center (or radius) of the arc. It then uses mathematical calculations (often trigonometric) to determine the series of small X and Y coordinate increments that lie on the specified arc, at a frequency dictated by the programmed feed rate.

---

### Key Points to Remember:

*   **Encoders = Feedback:** They are the sensors that tell the CNC controller *where the machine is*.
*   **Incremental vs. Absolute:** Incremental counts movement from a reference; Absolute knows its position immediately.
*   **Quadrature Outputs (A/B):** Essential for determining direction with incremental encoders.
*   **Interpolators = Path Generation:** They break down complex programmed movements into tiny, manageable steps for the machine drives.
*   **Linear (G01) and Circular (G02/G03) Interpolation:** The fundamental types of paths CNC machines create.
*   **Closed-Loop Control:** The synergy between interpolators (command) and encoders (feedback) creates a closed-loop system for precise machining.
*   **Accuracy:** Encoder resolution and interpolator calculation accuracy are critical for part precision.

---

This module provides the foundational understanding of how CNC machines "see" their position and how they translate complex programmed shapes into physical motion, setting the stage for further exploration of advanced NC concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
