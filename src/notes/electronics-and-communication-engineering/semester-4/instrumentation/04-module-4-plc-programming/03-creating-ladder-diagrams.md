---
title: "Creating Ladder diagrams"
subject: "INSTRUMENTATION"
module: "Module 4: PLC Programming"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5cb"
status: "completed"
scrapedAt: "2026-05-23T17:49:30.327Z"
---
# INSTRUMENTATION - Module 4: PLC Programming

## Topic: Creating Ladder Diagrams

---

### **Introduction to Ladder Diagrams**

Ladder diagrams are a graphical programming language used for Programmable Logic Controllers (PLCs). They are designed to resemble the relay logic diagrams used in traditional control systems, making them familiar to electricians and technicians. Ladder diagrams consist of a series of "rungs," each representing a logic statement.

*   **Purpose:** To represent the logic of an automated process in a visual and easily understandable format for PLC implementation.
*   **Analogy:** Think of it as a circuit diagram where the "wires" are the inputs and outputs, and the "switches" are the logic conditions.

---

### **Key Concepts and Definitions**

*   **Rung:** A horizontal line representing a single logic instruction or a set of logic instructions. It starts from the left "rail" (power) and ends at the right "rail" (ground/return).
    *   *Referenced from:* Hackworth & Hackworth, 3/e, Chapter 3: "Ladder Logic Fundamentals."
*   **Contact:** Represents an input or an internal bit that can be energized or de-energized.
    *   **Normally Open (NO) Contact:** Closed (conducts electricity) when the associated bit/input is ON. It appears as two parallel lines in the diagram.
        *   *Symbol:* `--| |--`
        *   *Functionality:* Logic AND operation when in series.
    *   **Normally Closed (NC) Contact:** Open (does not conduct electricity) when the associated bit/input is ON. It appears as two parallel lines with a diagonal slash in the diagram.
        *   *Symbol:* `--|\--| |--`
        *   *Functionality:* Logic NOT operation.
    *   *Referenced from:* Webb & Reis, 5/e, Chapter 4: "PLC Programming Basics."
*   **Coil:** Represents an output or an internal bit that can be energized or de-energized. When the logic on the rung leading to the coil is true, the coil is energized.
    *   *Symbol:* `( )` or `--( )--`
    *   *Functionality:* The "action" or "output" of the rung.
*   **Input Address:** A unique identifier assigned to a physical input terminal on the PLC (e.g., `I:0/0`, `%IX0.0`).
*   **Output Address:** A unique identifier assigned to a physical output terminal on the PLC (e.g., `O:0/1`, `%QX0.0`).
*   **Internal Relay/Bit:** Memory locations within the PLC that can be used to store intermediate logic states or act as flags. They do not correspond to physical I/O points (e.g., `B3:0/1`, `%MX0.1`).
*   **Logic Operations:**
    *   **AND:** Requires all contacts in series to be energized for the output to be energized.
        *   *Representation:* NO contacts in series.
    *   **OR:** Requires at least one contact in parallel to be energized for the output to be energized.
        *   *Representation:* NO contacts in parallel.
    *   **NOT:** Achieved using Normally Closed (NC) contacts.
    *   **Latching/Sealing:** A circuit where an output stays energized even after the initial input condition is removed, typically by using a NO contact of the output in parallel with the initial input.
*   **Scan Cycle:** The process by which a PLC reads inputs, executes the ladder logic program, and updates outputs. This is a continuous cycle.
    *   *Referenced from:* Hackworth & Hackworth, 3/e, Chapter 2: "PLC Hardware and Architecture."

---

### **Creating Ladder Diagrams: Step-by-Step Process**

Creating effective ladder diagrams involves a systematic approach:

1.  **Understand the Process:** Clearly define the industrial process to be controlled. Identify all inputs (sensors, switches) and outputs (motors, lights, valves).
    *   *Alignment with CO1:* Understanding the process involves identifying inputs and outputs, which are the "measuring instruments" in a broader sense that inform the control system.
2.  **Define I/O:** Assign specific PLC input and output addresses to each physical input and output device.
    *   *Example:*
        *   Start Button (Pushbutton): Input `I:0/0` (Normally Open)
        *   Stop Button (Pushbutton): Input `I:0/1` (Normally Closed)
        *   Motor Contactor: Output `O:0/0`
3.  **Develop the Logic:** Translate the operational requirements of the process into logical statements.
    *   *Example Scenario: Simple Motor Start/Stop Control*
        *   **Requirement:** The motor should start when the "Start" button is pressed and stop when the "Stop" button is pressed. The motor should also stop if an overload condition occurs.
4.  **Draw the Ladder Diagram:** Represent the logical statements using standard ladder diagram symbols.

---

### **Common Ladder Diagram Elements and Their Creation**

#### **1. Basic AND Logic**

*   **Description:** An output is ON only when all conditions in series are met.
*   **Creation:** Connect Normally Open (NO) contacts in series on a rung.
*   **Example:** A motor starts only when the "Start" button is pressed AND a safety gate is closed.
    *   **Inputs:** Start Button (NO), Safety Gate Sensor (NO)
    *   **Output:** Motor Run
    *   **Ladder Rung:**
        ```
        |--| |------| |------( )--|
        | I:0/0    I:0/1     O:0/0  |
        | Start    Gate      Motor |
        |          Closed          |
        ```
        *   *Explanation:* `O:0/0` (Motor) will be ON only if `I:0/0` (Start) is ON AND `I:0/1` (Gate Closed) is ON.

#### **2. Basic OR Logic**

*   **Description:** An output is ON if any of the conditions in parallel are met.
*   **Creation:** Connect Normally Open (NO) contacts in parallel on a rung.
*   **Example:** A light turns ON if either the "Main Switch" OR the "Emergency Switch" is pressed.
    *   **Inputs:** Main Switch (NO), Emergency Switch (NO)
    *   **Output:** Warning Light
    *   **Ladder Rung:**
        ```
        |--| |---+--| |------( )--|
        | I:0/0 |   | I:0/1   O:0/0  |
        | Main  |   | Emer.   Light  |
        | Switch|   | Switch         |
        |-------+-------------------|
        ```
        *   *Explanation:* `O:0/0` (Light) will be ON if `I:0/0` (Main Switch) is ON OR `I:0/1` (Emergency Switch) is ON.

#### **3. Latching (Sealing) Circuit**

*   **Description:** Keeps an output ON even after the initiating input is removed. This is crucial for maintaining a process state.
*   **Creation:** A Normally Open (NO) contact of the *output* is placed in parallel with the initial "start" input. A Normally Closed (NC) contact of a "stop" input or other inhibiting condition is placed in series before the output coil.
*   **Example:** Motor Start/Stop circuit (revisiting the earlier example).
    *   **Inputs:** Start Button (NO), Stop Button (NC), Overload (NC)
    *   **Output:** Motor Contactor
    *   **Ladder Rung:**
        ```
        |--| |------+--|\|------|\|------( )--|
        | I:0/0    |  | I:0/1   | I:0/2   O:0/0  |
        | Start    |  | Stop    | Overload| Motor|
        |          |  |         |         |      |
        |-------+--|--|         |         |      |
        | O:0/0   |                                |
        | Motor   |                                |
        |---------|                                |
        ```
        *   *Explanation:*
            *   When `I:0/0` (Start) is pressed, `O:0/0` (Motor) energizes.
            *   The parallel contact `O:0/0` (Motor) then becomes closed, "latching" the output ON.
            *   `I:0/1` (Stop) is NC, so it normally allows current. When pressed, it opens, de-energizing `O:0/0`.
            *   `I:0/2` (Overload) is NC, so it normally allows current. If an overload occurs, it opens, de-energizing `O:0/0`.
    *   *Referenced from:* Hackworth & Hackworth, 3/e, Chapter 4: "PLC Programming Examples." and Webb & Reis, 5/e, Chapter 4: "PLC Programming Basics."

#### **4. Timer Instructions**

*   **Description:** Used to control the duration of an output or to create timed sequences.
*   **Creation:** PLC programming software provides specific timer blocks (e.g., TON - Timer On Delay, TOF - Timer Off Delay, RTO - Retentive Timer On). These blocks have input (EN - Enable), output (DN - Done), and time base/preset values.
*   **Example:** Turn on a light for 5 seconds after a button is pressed.
    *   **Inputs:** Start Button (NO)
    *   **Output:** Light
    *   **Internal Timer:** TON Timer (e.g., `T4:0`) with a Preset of 50 (if time base is 0.1s).
    *   **Ladder Rung:**
        ```
        |--| |------+--| |-----( TON T4:0 )---|
        | I:0/0    |  | T4:0/EN           |
        | Start    |  |                   |
        |----------+--------------------|
        ```
        *   **Second Rung:**
        ```
        |--| |------( )--|
        | T4:0/DN  O:0/0   |
        | Timer    Light |
        | Done           |
        ```
        *   *Explanation:*
            *   When `I:0/0` (Start) is pressed, `T4:0/EN` becomes true, starting the timer.
            *   After 5 seconds, `T4:0/DN` (Timer Done) becomes true.
            *   The second rung then energizes `O:0/0` (Light) because `T4:0/DN` is true.
    *   *Referenced from:* Hackworth & Hackworth, 3/e, Chapter 5: "Timers and Counters."

#### **5. Counter Instructions**

*   **Description:** Used to count events, such as the number of items passing a sensor.
*   **Creation:** PLC programming software provides counter blocks (e.g., CTU - Count Up, CTD - Count Down). These blocks have input (CU - Count Up, CD - Count Down), output (DN - Done), and preset values.
*   **Example:** Activate an alarm after 10 items have passed a sensor.
    *   **Inputs:** Item Sensor (NO), Reset Button (NO)
    *   **Output:** Alarm
    *   **Internal Counter:** CTU Counter (e.g., `C5:0`) with a Preset of 10.
    *   **Ladder Rung:**
        ```
        |--| |------+--| |-----( CTU C5:0 )---|
        | I:0/0    |  | C5:0/CU           |
        | Sensor   |  |                   |
        |----------+--------------------|
        ```
        *   **Second Rung:**
        ```
        |--| |------( )--|
        | C5:0/DN  O:0/1   |
        | Counter  Alarm |
        | Done           |
        ```
        *   **Third Rung (Reset):**
        ```
        |--| |------[ RES C5:0 ]---|
        | I:0/1                  |
        | Reset                  |
        ```
        *   *Explanation:*
            *   Each time `I:0/0` (Sensor) goes from OFF to ON, `C5:0/CU` is pulsed, incrementing the counter.
            *   When the count reaches 10, `C5:0/DN` becomes true, energizing `O:0/1` (Alarm).
            *   Pressing `I:0/1` (Reset) resets the counter to zero.
    *   *Referenced from:* Hackworth & Hackworth, 3/e, Chapter 5: "Timers and Counters."

---

### **Advanced Ladder Logic Concepts**

*   **Comparison Instructions:** Used to compare values from data registers or timers/counters (e.g., Equal, Not Equal, Greater Than, Less Than).
    *   *Example:* If the temperature reading (in a data register) is Greater Than 80 degrees Celsius, activate a cooling fan.
*   **Math Instructions:** Perform arithmetic operations (ADD, SUB, MUL, DIV).
    *   *Example:* Summing up a series of sensor readings.
*   **Data Movement Instructions:** Copy data from one location to another (e.g., MOV - Move).
    *   *Example:* Transferring a setpoint value from a display to a control register.
*   **Control Flow Instructions:** Jumps, subroutines, and conditional branching.
    *   *Example:* `JMP` (Jump) to a specific rung if a condition is met, or `CALL` a subroutine for a repetitive task.
*   **Master Control Relay (MCR) / Program Control:** Allows disabling entire sections of the ladder logic.

---

### **Applying Ladder Diagrams to Industrial Processes (CO4)**

The ability to create ladder diagrams directly translates to programming PLCs for industrial automation. Here are examples aligning with CO4:

*   **Process Control:**
    *   **Tank Level Control:** Using float switches (inputs) to control pumps (outputs) for filling or emptying a tank. Ladder logic would implement AND/OR conditions for pump operation based on high/low level signals.
        *   *CO4 Alignment:* Direct application of logic gates and potentially latches for pump control.
    *   **Conveyor Belt Control:** Starting/stopping conveyor belts based on sensor inputs, with interlocks for safety.
        *   *CO4 Alignment:* Implementing sequences, safety interlocks using series and parallel contacts.
*   **Manufacturing:**
    *   **Assembly Line Automation:** Coordinating the movement of parts, operation of robotic arms, and activation of machinery using timers and counters.
        *   *CO4 Alignment:* Complex sequences involving timers, counters, and data handling.
    *   **Material Handling:** Controlling the operation of cranes, lifts, and automated guided vehicles (AGVs).
        *   *CO4 Alignment:* More complex logic involving multiple inputs, outputs, and potentially position sensing.
*   **Instrumentation Integration:**
    *   **Temperature Control Loop:** Reading a temperature sensor (input, often after analog-to-digital conversion), comparing it to a setpoint using comparison instructions, and controlling a heater or cooler (output) using PID logic (often implemented with ladder logic or function blocks).
        *   *CO4 Alignment:* Integrating with instrument readings and applying control algorithms.
    *   **Flow Rate Control:** Similar to temperature control, using flow meters to regulate valve positions.
        *   *CO4 Alignment:* Similar to temperature control, demonstrating data processing and control.

---

### **Important Points to Remember**

*   **Left-to-Right, Top-to-Bottom Scan:** The PLC scans the ladder logic from the top rung to the bottom rung, and within each rung, from left to right.
*   **Contact Behavior:** NO contacts are true when the associated bit is ON. NC contacts are true when the associated bit is OFF.
*   **Coil Behavior:** A coil is energized (turned ON) when the rung logic leading to it is true.
*   **One Scan Update:** An output addressed multiple times on different rungs will only be updated once per scan cycle (typically the last rung encountered where it's addressed).
*   **Proper Addressing:** Ensure unique and correct addresses are used for all I/O and internal bits.
*   **Clear and Concise Logic:** Design ladder logic that is easy to read, understand, and troubleshoot. Use descriptive labels for I/O and internal bits.
*   **Documentation:** Always document your ladder logic with comments explaining the purpose of each rung and element. This is critical for maintenance and future modifications.
    *   *Referenced from:* Hackworth & Hackworth, 3/e, Chapter 1: "Introduction to PLCs" emphasizes documentation.

---

### **Practice Questions and Exercises**

**Question 1:**
Create a ladder diagram rung that energizes an output `O:0/2` if input `I:0/3` is ON OR input `I:0/4` is OFF.

**Answer 1:**
```
|--| |------+--|\|------( )--|
| I:0/3    |  | I:0/4   O:0/2  |
|          |  |         Out    |
|----------+-------------------|
```

**Question 2:**
You need to control a motor (`O:0/1`). The motor should start when a "Start" button (`I:0/0` - NO) is pressed, and it should be latched ON. An overload condition (`I:0/1` - NC) will stop the motor if it occurs. Draw the ladder logic for this scenario.

**Answer 2:**
```
|--| |------+--|\|------( )--|
| I:0/0    |  | I:0/1   O:0/1  |
| Start    |  | Overload| Motor|
|          |  |         |      |
|-------+--|--|         |      |
| O:0/1   |                                |
| Motor   |                                |
|---------|                                |
```

**Question 3:**
A conveyor belt (`O:0/0`) should run continuously until a "Stop" button (`I:0/1` - NC) is pressed. Design the ladder logic.

**Answer 3:**
```
|--| |------+--|\|------( )--|
| O:0/0    |  | I:0/1   O:0/0  |
| Conveyor |  | Stop    Conveyor|
|          |  |         Run    |
|-------+--|--|                |
| O:0/0   |                   |
| Conveyor|                   |
|---------|                   |
```
*(Note: This is a simplified latching circuit. In a real-world scenario, you'd likely have a start button as well.)*

**Question 4:**
Design a rung that uses a timer `T4:1` to energize output `O:0/3` for 10 seconds after input `I:0/5` becomes TRUE. Assume the timer's time base is 1 second.

**Answer 4:**
*   **Rung 1 (Timer):**
    ```
    |--| |-----( TON T4:1 )---|
    | I:0/5               |
    | Input               |
    |---------------------|
    ```
    *   Timer `T4:1` should be configured with a Preset of 10.

*   **Rung 2 (Output):**
    ```
    |--| |------( )--|
    | T4:1/DN  O:0/3   |
    | Timer    Output |
    | Done           |
    ```

---

### **Connecting to Course Outcomes**

*   **CO1: Interpret the basic concepts of measuring instruments, its classification, and selection criteria.**
    *   Ladder diagrams are used to process signals from measuring instruments (sensors) which act as inputs to the PLC. Understanding the nature of these inputs (e.g., normally open/closed contact closure, analog values) influences ladder logic design.
*   **CO2: Outline the principle, construction and working of transducers for measuring physical variables.**
    *   While not directly programming transducers, ladder logic *interprets* the output of these devices. For example, a temperature transducer might output a 4-20mA signal that is then scaled and processed within the PLC using ladder logic.
*   **CO3: Comprehend the principle, construction and working of various electronic measuring instruments.**
    *   Similar to CO2, electronic measuring instruments provide the data that PLC programs operate on. Understanding how a digital multimeter or oscilloscope works helps in understanding the types of electrical signals a PLC might receive as input.
*   **CO4: Apply PLC programming for selected industrial processes.**
    *   This entire topic directly addresses CO4. The creation of ladder diagrams is the core skill for applying PLC programming to automate and control industrial processes, from simple motor control to complex sequences.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **References Used**

*   **Doebelin's Measurement Systems by Ernest Doebelin, Dhanesh N. Manik (Tata McGraw Hill, 6/e, 2011):** Provides foundational understanding of physical variables and how they are measured, which informs PLC input requirements.
*   **Electronic Instrumentation by Kalsi H S (Tata McGraw Hill, 4/e, 2019):** Offers insights into the principles and workings of electronic instruments that generate signals for PLC systems.
*   **Programmable Logic controllers Programming Methods and Applications by John R Hackworth, Frederick D Hackworth (Pearson Education, 3/e, 2022):** A primary source for ladder logic instruction, covering fundamentals, common instructions, and applications.
*   **Programmable Logic Controllers- Principles and applications by John W Webb, Ronald A. Reis, (Pearson, 5/e, 2015):** Another key reference for PLC programming concepts, including ladder logic design and best practices.

---