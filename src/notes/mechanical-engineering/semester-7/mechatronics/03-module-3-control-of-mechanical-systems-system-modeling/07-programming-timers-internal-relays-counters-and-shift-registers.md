---
title: "Programming: Timers, Internal Relays, Counters and Shift registers."
subject: "MECHATRONICS"
module: "Module 3: Control of mechanical systems : System modeling "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f1c"
status: "completed"
scrapedAt: "2026-05-20T18:14:51.166Z"
---
## MECHATRONICS: Module 3 - Control of Mechanical Systems: System Modeling

### Topic: Programming: Timers, Internal Relays, Counters, and Shift Registers

This module focuses on the fundamental programming elements used in Programmable Logic Controllers (PLCs) and other control systems to manage and sequence mechanical operations. Understanding these building blocks is crucial for developing effective automation solutions.

---

### 1. Introduction to PLC Programming Elements

PLCs are the workhorses of industrial automation. They receive input signals from sensors, process them based on programmed logic, and then send output signals to actuators. Timers, relays, counters, and shift registers are essential software components within a PLC that enable complex control sequences.

**Key Concept:** PLC programming typically uses **Ladder Logic**, a graphical programming language that resembles electrical relay circuits. This makes it familiar to electricians and technicians.

**Textbook Reference:**
*   **Bolton, W. (7th).** *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering.* This textbook provides a strong foundation on the principles of control systems, including the role of PLCs and their programming. It will likely cover the basic functionalities of timers, counters, and relays in the context of controlling mechanical systems.

---

### 2. Timers

Timers are used to introduce delays into control sequences or to measure elapsed time. They are fundamental for controlling the duration of operations, such as actuating a motor for a specific time or delaying a response from a sensor.

**Key Concepts & Definitions:**

*   **Timer:** A PLC instruction that starts counting when a condition becomes true and performs an action after a preset time delay.
*   **Preset Time (PT):** The programmed time value that the timer needs to reach.
*   **Accumulated Time (ACC):** The current time that has elapsed since the timer started counting.
*   **Timer Types:**
    *   **On-Delay Timer (TON):** The output is delayed until the preset time has elapsed after the input condition becomes true. The output remains true as long as the input is true and the PT is reached.
        *   *Example:* Turning on a conveyor belt 5 seconds after a start button is pressed.
    *   **Off-Delay Timer (TOF):** The output is energized immediately when the input condition becomes true, but the output de-energizes after a delay when the input condition becomes false.
        *   *Example:* Keeping a cooling fan on for 30 seconds after a machine stops.
    *   **Retentive Timer (RTO):** Similar to an On-Delay timer, but it remembers the accumulated time even if the input condition becomes false. The timer resumes counting from where it left off when the input condition becomes true again.
        *   *Example:* Tracking the total operating hours of a machine.
    *   **Timer with Enable (TMR/CTU with time base):** Many PLCs offer timers that can be enabled or disabled. The timing may also be linked to a specific time base (e.g., milliseconds, seconds).

**Ladder Logic Representation (Conceptual):**

```
+-----[ TON Timer_01, PT=5s ]-----+
|                                 |
|--[ Start_Button ]---------------|------( Timer_Output )
```

**Examples:**

*   **Automatic Door:** An on-delay timer can be used to keep a door open for a set duration after a person passes through.
*   **Batch Processing:** Timers control the sequence of filling, mixing, and emptying in a batch process.
*   **Motor Control:** Timers can prevent rapid starting and stopping of motors, which can cause damage.

**Learning Outcome Alignment:**
*   **CO3 (K2):** Understand the basics of mathematical modeling of the given real systems and to predict its behaviour. Timers are fundamental in modeling time-dependent behavior of mechanical systems.
*   **CO4 (K3):** Understand the use of PLC for industrial and product automation and to create ladder programs for applications. Timers are core to creating sequences and controlling process durations.

**Important Points to Remember:**
*   Timers consume PLC scan time. Use them efficiently.
*   Understand the time base of the timer (e.g., 0.1s, 1s) to set the correct Preset Time.
*   Retentive timers are useful for accumulating operational time, but they need a reset mechanism.

---

### 3. Internal Relays (Bits, Flags, Markers)

Internal relays are memory locations within the PLC that can be energized (ON) or de-energized (OFF) based on logic conditions. They act as internal "switches" to control other operations or to store the state of a particular condition without directly controlling an output device.

**Key Concepts & Definitions:**

*   **Internal Relay (IR):** A bit in the PLC's memory that can be set or reset. It's like a physical relay coil and contact, but it exists purely in software.
*   **Coil (Output):** Represents the internal relay being energized.
*   **Contact (Input):** Represents the state of the internal relay. A normally open (NO) contact is true when the relay is energized, and a normally closed (NC) contact is true when the relay is de-energized.
*   **Purpose:**
    *   **Memory:** To remember a state or condition.
    *   **Interlocking:** To prevent conflicting operations.
    *   **Logic Branching:** To create complex decision-making pathways.
    *   **Signal Conditioning:** To modify or combine signals before further processing.

**Ladder Logic Representation (Conceptual):**

```
+-----[ Start_Button ]-----------------|------( IR_001 )
|                                       |
+-----[ IR_001 ]------------------------|------( Motor_Run_Output )
```

**Examples:**

*   **Lockout/Tagout:** An internal relay can be used to lock out a machine from operation, ensuring safety procedures are followed.
*   **Process State:** An internal relay might indicate that a particular stage of a process is complete (e.g., `Tank_Filled_Flag`).
*   **Alarm System:** An internal relay can be set when an abnormal condition is detected, triggering an alarm output.

**Learning Outcome Alignment:**
*   **CO4 (K3):** Understand the use of PLC for industrial and product automation and to create ladder programs for applications. Internal relays are fundamental for building complex logic and memory functions in PLC programs.

**Important Points to Remember:**
*   Internal relays are software-based and consume memory but not physical I/O points.
*   Use descriptive naming conventions for internal relays to improve program readability.
*   Be mindful of how internal relays are set and reset to avoid unintended behavior.

---

### 4. Counters

Counters are used to count events or pulses. They are essential for applications requiring a specific number of cycles or operations to be completed.

**Key Concepts & Definitions:**

*   **Counter:** A PLC instruction that increments (or decrements) its accumulated value when a specific input event occurs.
*   **Preset Count (PC):** The programmed number of events the counter needs to reach.
*   **Accumulated Count (AC):** The current count of events.
*   **Counter Types:**
    *   **Up Counter (CTU):** Increments its count when the count input transitions from OFF to ON.
        *   *Example:* Counting the number of parts passing on a conveyor belt.
    *   **Down Counter (CTD):** Decrements its count when the count input transitions from OFF to ON. Often used in conjunction with an up counter for batching or precise positioning.
        *   *Example:* Dispensing a specific number of items into a package.
    *   **Up/Down Counter (CTUD):** Can count both up and down based on separate count inputs.
        *   *Example:* Controlling the position of a linear actuator by counting pulses from an encoder (one direction for up, another for down).
    *   **Retentive Counter:** Similar to retentive timers, these counters retain their accumulated value even if the PLC loses power or the counter input is momentarily lost.

**Ladder Logic Representation (Conceptual):**

```
+-----[ CTU Counter_01, PC=10 ]-----+
|                                   |
|--[ Part_Detected_Sensor ]---------|------( Counter_Done_Output )
```

**Examples:**

*   **Production Counting:** Tracking the number of units produced on an assembly line.
*   **Batching:** Counting a specific number of items before initiating a packaging or filling operation.
*   **Cycle Counting:** Monitoring the number of times a machine cycle has been completed for maintenance scheduling.
*   **Positioning:** Using an encoder and an up/down counter to control the precise movement of a robotic arm or linear actuator.

**Learning Outcome Alignment:**
*   **CO3 (K2):** Understand the basics of mathematical modeling of the given real systems and to predict its behaviour. Counters model discrete event sequences and frequency of operations.
*   **CO4 (K3):** Understand the use of PLC for industrial and product automation and to create ladder programs for applications. Counters are vital for managing quantities and ensuring a specific number of operations occur.

**Important Points to Remember:**
*   Counters require a reset mechanism to start counting again.
*   The count input transition (e.g., rising edge) is crucial for proper counting.
*   Retentive counters are essential if counts need to persist across power cycles.

---

### 5. Shift Registers

Shift registers are sequential logic circuits that allow data to be shifted from one storage location to another, one bit at a time, in response to a clock signal. In PLCs, they are used for serial data manipulation, creating sequences, and managing data arrays.

**Key Concepts & Definitions:**

*   **Shift Register:** A series of memory bits where data is moved sequentially from one bit to the next with each clock pulse.
*   **Serial Input (SI):** The data bit entering the shift register.
*   **Serial Output (SO):** The data bit exiting the shift register.
*   **Parallel Input:** All bits of the shift register can be loaded simultaneously from an external source.
*   **Parallel Output:** All bits of the shift register can be read simultaneously.
*   **Clock Signal:** A pulse that triggers the shifting of data.
*   **Purpose:**
    *   **Serial-to-Parallel Conversion:** Taking serial data (e.g., from a communication interface) and making it available in parallel.
    *   **Parallel-to-Serial Conversion:** Taking parallel data and sending it out serially.
    *   **Sequencing:** Creating delayed signals or moving a "marker" through a sequence of operations.
    *   **Data Manipulation:** Shifting bits for specific data processing tasks.

**Ladder Logic Representation (Conceptual - varies by PLC manufacturer):**

Many PLCs have dedicated shift register instructions. A common pattern involves:
1.  **Load Instruction:** Puts data into the register.
2.  **Shift Instruction:** Moves data along.
3.  **Output:** Accessing individual bits or the whole register.

A conceptual example for a simple shift might look like this:

```
+-----[ Shift_Register_Instruction, Source_Bit=A, Destination_Register=SR0 ]-----+
|                                                                                |
|--[ Clock_Pulse ]----------------------------------------------------------------|
```

**Examples:**

*   **Sequential Lighting:** A shift register can be used to create a "chaser" light effect, where lights turn on and off in sequence.
*   **Conveyor Belt Tracking:** Each position on a conveyor belt could be represented by a bit in a shift register. As the conveyor moves, the register shifts, tracking the position of items.
*   **Data Acquisition:** Receiving data from sensors that transmit serially (e.g., RFID readers) and then making that data available to the PLC in a parallel format.
*   **Alarm Prioritization:** A shift register can prioritize alarms based on their position within the register.

**Learning Outcome Alignment:**
*   **CO4 (K3):** Understand the use of PLC for industrial and product automation and to create ladder programs for applications. Shift registers enable advanced data handling and complex sequential control not easily achieved with basic timers and counters.
*   **CO5 (K3):** Understand the use and characteristics of microcontrollers and choose the appropriate one based on the given application. While this topic focuses on PLCs, the principles of shift registers are also fundamental in microcontroller programming for managing serial communication and data processing.

**Important Points to Remember:**
*   The specific instructions for shift registers vary significantly between PLC manufacturers (e.g., Allen-Bradley's SPL, SHR, PIO; Siemens' Shift instructions). Consult your PLC's programming manual.
*   Understand the concept of clocking and how it controls the data movement.
*   Shift registers can be used to implement complex state machines.

---

### 6. Practice Questions and Exercises

**Question 1 (Timers):**
A conveyor belt should start 3 seconds after a "Start" button is pressed, and it should stop automatically after running for 10 seconds. Write a conceptual ladder logic rung using an On-Delay timer and another timer to control the conveyor.

**Answer 1:**

```
// Conveyor Start Sequence
+-----[ TON Timer_StartDelay, PT=3s ]-----+
|                                        |
|--[ Start_Button ]----------------------|------( IR_Conveyor_Ready )

+-----[ TON Timer_RunTime, PT=10s ]-----+
|                                       |
|--[ IR_Conveyor_Ready ]-----------------|------( Conveyor_Motor_Output )
|--[ IR_Conveyor_Ready ]-----------------|------( Timer_RunTime_Enable ) // To enable the run timer
```
*Explanation:* The `Start_Button` energizes `Timer_StartDelay`. When its 3-second PT is reached, `IR_Conveyor_Ready` is set. This `IR_Conveyor_Ready` also enables `Timer_RunTime` and turns on the `Conveyor_Motor_Output`. `Timer_RunTime` then starts counting. When `Timer_RunTime` reaches its 10-second PT, it would typically be used to de-energize `IR_Conveyor_Ready` (or a related bit), stopping the conveyor.

**Question 2 (Counters):**
An automated filling machine needs to dispense exactly 50 liters of liquid into a container. A flow meter generates a pulse for every 0.1 liter dispensed. Design a ladder logic sequence to control the filling process.

**Answer 2:**

```
// Liquid Filling Process
+-----[ CTU Counter_Fill, PC=500 ]-----+  // PC = 50 (liters) / 0.1 (liter/pulse) = 500 pulses
|                                       |
|--[ Flow_Meter_Pulse ]-----------------|------( Counter_Fill_Done )

+-----[ Start_Fill_Command ]-----------------|------( Valve_Open_Output )
|                                            |
|--[ Counter_Fill_Done ]---------------------|------( Valve_Close_Output ) // Or interrupt the start command
```
*Explanation:* The `Flow_Meter_Pulse` increments `Counter_Fill`. When the `Counter_Fill` reaches its preset of 500, `Counter_Fill_Done` becomes true. This signal is used to stop the filling process, typically by closing the dispense valve. The `Start_Fill_Command` would initiate the process by opening the valve.

**Question 3 (Internal Relays & Timers):**
Design a simple safety interlock for a machine. The machine should only start if a safety guard is closed. If the safety guard opens while the machine is running, the machine should immediately stop, and an alarm light should turn on and stay on until the guard is closed again and the system is reset.

**Answer 3:**

```
// Safety Interlock
+-----[ Safety_Guard_Closed_Sensor ]-----+------( IR_Guard_Safe )

+-----[ Start_Button ]-----+------( IR_Interlock_Active )
|                          |
|--[ IR_Guard_Safe ]-------|

+-----[ IR_Interlock_Active ]-----+------( Machine_Motor_Output )
|                                |
|--[ Off_Delay_Timer_Alarm, PT=5s ]--|------( Alarm_Light_Output ) // For a brief alarm on stop

// Reset/Re-enable Logic (conceptual)
+-----[ Guard_Closed_Sensor ]-----+------( Reset_Alarm_State ) // Assuming a reset button or logic
```
*Explanation:*
1.  `Safety_Guard_Closed_Sensor` energizes `IR_Guard_Safe`.
2.  The `Start_Button` is interlocked with `IR_Guard_Safe`. The machine can only start if both are true, energizing `IR_Interlock_Active`.
3.  `IR_Interlock_Active` controls the `Machine_Motor_Output`.
4.  If the `Safety_Guard_Closed_Sensor` goes OFF, `IR_Guard_Safe` de-energizes. This, in turn, de-energizes `IR_Interlock_Active`, stopping the motor.
5.  An Off-Delay timer is used to keep the `Alarm_Light_Output` ON for 5 seconds after the motor stops due to the guard opening. A more robust system would use a latched internal relay for the alarm that only resets when the guard is closed and a reset condition is met.

---

### 7. Advanced Concepts and Textbooks

**Textbook References:**

*   **Onwubolu, G. C.** *Mechatronics: Principles and Applications.* This book likely delves deeper into control strategies, which often employ these PLC programming elements. It might provide specific examples of how timers and counters are used in complex mechatronic systems like robots or automated manufacturing lines.
*   **Shetty, D., & Kolk, R.** *Mechatronics System Design.* This textbook will focus on the system integration aspect. You'll find how these programming elements are crucial for the overall design and operation of mechatronic systems, connecting sensors, actuators, and controllers. It may discuss real-time constraints and how timers are used to manage them.
*   **Rajput, R. K.** *A Text Book of Mechatronics.* This reference could offer supplementary examples and alternative perspectives on using these PLC functions in various mechatronic applications. It might cover specific PLC hardware and their instruction sets.

**Learning Outcome Alignment:**
*   **CO1 (K2), CO2 (K2), CO6 (K2), CO7 (K2):** While this topic directly addresses programming, the ultimate goal is to control mechanical systems. Understanding timers, counters, and registers is essential for applying sensors, actuators, and MEMS devices effectively in mechatronic applications. For instance, a counter might track the cycles of a MEMS-based actuator, or a timer could control the activation of a sensor's sampling rate.

---

### 8. Key Takeaways for Mechatronics Applications

*   **Sequencing:** Timers and counters are the building blocks for creating timed sequences and counting operations, which are prevalent in almost all automated mechanical systems.
*   **Interlocking and Safety:** Internal relays are vital for implementing safety interlocks, preventing dangerous combinations of operations, and ensuring that mechanical systems operate in a controlled and safe manner.
*   **Data Handling:** Shift registers are powerful tools for managing sequential data, which is increasingly important with the rise of serial communication protocols and embedded systems in mechatronics.
*   **Integration:** These PLC programming elements are the software interface that connects the mechanical components (driven by actuators and sensed by sensors) to the intelligence of the control system.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
