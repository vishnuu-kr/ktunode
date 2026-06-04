---
title: "Development of ladder programs for specific purposes."
subject: "MECHATRONICS"
module: "Module 3: Control of mechanical systems : System modeling "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f1d"
status: "completed"
scrapedAt: "2026-05-20T18:14:51.867Z"
---
# Module 3: Control of Mechanical Systems - System Modeling
## Topic: Development of Ladder Programs for Specific Purposes

This topic delves into the practical application of Programmable Logic Controllers (PLCs) in controlling mechanical systems by developing ladder logic programs. It builds upon the understanding of system modeling and aims to equip students with the ability to translate control strategies into executable PLC code.

### Learning Outcomes:

*   Understand the fundamental principles of ladder logic programming.
*   Develop ladder programs for sequential control tasks.
*   Implement interlock and safety logic in ladder programs.
*   Create ladder programs for timing and counting operations.
*   Troubleshoot and debug ladder logic programs for industrial applications.

### Course Outcomes Alignment:

*   **CO4:** Understand the use of PLC for industrial and product automation and to create ladder programs for applications (Knowledge Level: K3). This topic directly addresses CO4 by focusing on the practical creation of ladder programs for automation.

### Key Concepts and Definitions:

#### 1. Introduction to Programmable Logic Controllers (PLCs)

*   **Definition:** A PLC is a ruggedized industrial computer that performs logic functions for automating a process, such as controlling machinery on a factory assembly line.
*   **Components:**
    *   **Central Processing Unit (CPU):** The "brain" of the PLC that executes the program.
    *   **Input Modules:** Interface between field devices (sensors, switches) and the PLC. They convert external signals into logic levels the CPU can understand.
    *   **Output Modules:** Interface between the PLC and field devices (actuators, lights, motors). They convert logic signals from the CPU into signals that can drive external devices.
    *   **Power Supply:** Provides the necessary voltage and current for the PLC and its modules.
    *   **Programming Device:** A computer or dedicated programming terminal used to create, edit, and download ladder logic programs.
*   **Advantages of PLCs over Traditional Relay Logic:**
    *   **Flexibility:** Easy to change logic without rewiring.
    *   **Reliability:** Solid-state components are more reliable than mechanical relays.
    *   **Cost-Effectiveness:** For complex control systems, PLCs are often cheaper than hardwired relay systems.
    *   **Troubleshooting:** Built-in diagnostics and programming software simplify fault finding.
    *   **Scalability:** Can easily add more I/O modules as needed.
*   **References:**
    *   *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering* by W. Bolton discusses the role of PLCs in mechatronic systems and their comparison to traditional control methods. (Chapter on Industrial Control Systems).
    *   *Mechatronics System Design* by Devdas Shetty and Richard Kolk provides insights into how PLCs are integrated into broader mechatronic system designs.

#### 2. Ladder Logic Programming Fundamentals

*   **Analogy to Relay Logic:** Ladder logic resembles the schematic diagrams of electromechanical relay circuits, making it familiar to electricians and technicians.
*   **Rungs:** The basic building blocks of a ladder program, representing a single line of control logic.
*   **Power Rails:** Vertical lines on the left and right of the ladder diagram that represent the power source.
*   **Logic Elements (Instructions):**
    *   **Contacts:** Represent inputs or internal states. They are typically drawn as normally open (NO) or normally closed (NC).
        *   **Normally Open (NO) Contact (XIC - Examine If Closed):** This contact is "true" (allows current to flow) when its associated input or internal bit is ON.
        *   **Normally Closed (NC) Contact (XIO - Examine If Open):** This contact is "true" when its associated input or internal bit is OFF.
    *   **Coils:** Represent outputs or internal bits that are energized when the logic to their left is true.
        *   **Output Coil (OTE - Output Energize):** Energizes the associated output or internal bit when the rung logic leading to it is true.
*   **Addressing:** Inputs and outputs are assigned addresses (e.g., I:0/0 for input 0, slot 0; O:0/0 for output 0, slot 0). Internal bits (relays) are also assigned addresses (e.g., B3:0/0).
*   **Scan Cycle:** The PLC continuously scans the input modules, executes the ladder logic program, and updates the output modules. This is a sequential process.

#### 3. Developing Ladder Programs for Specific Purposes

##### 3.1. Basic Sequencing

*   **Concept:** Executing a series of operations in a defined order.
*   **Example: Simple Motor Start/Stop Circuit**
    *   **Inputs:** Start Button (NO), Stop Button (NC)
    *   **Output:** Motor Contactor
    *   **Logic:**
        *   When the Start button is pressed, the Motor Contactor is energized.
        *   A "latching" or "holding" circuit is created using an NO contact of the Motor Contactor in parallel with the Start button. This keeps the motor running even after the Start button is released.
        *   When the Stop button is pressed, the circuit is broken, de-energizing the Motor Contactor.

    ```ladder
    // Rung 0: Motor Control
    +----[ XIC I:0/0 ]----[ XIC B3:0/0 ]----+----( OTE O:0/0 )----+
    |                                    |                     |
    +----[ XIO I:0/1 ]--------------------+                     |
                                                                 |
    // Legend:
    // I:0/0 = Start Button (NO)
    // I:0/1 = Stop Button (NC)
    // B3:0/0 = Internal Relay (Motor Running Indicator)
    // O:0/0 = Motor Contactor Output
    ```

    *   **Explanation:**
        *   Rung 0 starts with the Stop button (XIO I:0/1). If the stop button is NOT pressed (input is ON), the logic continues.
        *   Then, it checks the Start button (XIC I:0/0). If the start button IS pressed (input is ON), the logic continues.
        *   In parallel with the Start button, there is a contact from an internal relay (XIC B3:0/0). This is the holding contact.
        *   If either the Start button is pressed OR the internal relay is ON (meaning the motor is already running), the rung is true.
        *   The Output Coil (OTE O:0/0) for the Motor Contactor is energized, turning the motor ON.
        *   When the Motor Contactor is ON, its associated internal bit (B3:0/0) is also energized, providing the holding circuit.
        *   If the Stop button (XIO I:0/1) is pressed (input is OFF), the XIO contact becomes FALSE, breaking the rung and de-energizing the motor.

##### 3.2. Interlock and Safety Logic

*   **Concept:** Preventing a sequence of operations or disabling certain functions to ensure safety and proper operation.
*   **Example: Two Pumps in Parallel with a Common Inlet**
    *   **Scenario:** Two pumps (Pump A, Pump B) draw water from a common tank. To prevent cavitation or damage, only one pump should run at a time. A level sensor indicates if the water level is too low.
    *   **Inputs:**
        *   Pump A Start Button (NO)
        *   Pump B Start Button (NO)
        *   Stop Button (NC)
        *   Low Water Level Sensor (NC)
    *   **Outputs:**
        *   Pump A Contactor
        *   Pump B Contactor
    *   **Logic:**
        *   Pump A can start if Pump B is OFF and the water level is adequate.
        *   Pump B can start if Pump A is OFF and the water level is adequate.
        *   Both pumps must stop if the water level is too low or the Stop button is pressed.

    ```ladder
    // Rung 0: Pump A Control
    +----[ XIC I:0/0 ]----+----[ XIO I:0/2 ]----+----[ XIO I:0/3 ]----+----( OTE O:0/0 )----+
    |                     |                     |                     |                   |
    +----[ XIC B3:0/0 ]---+                     |                     |                   |
                                              |                     |                   |
    // Rung 1: Pump B Control
    +----[ XIC I:0/1 ]----+----[ XIO I:0/0 ]----+----[ XIO I:0/3 ]----+----( OTE O:0/1 )----+
    |                     |                     |                     |                   |
    +----[ XIC B3:0/1 ]---+                     |                     |                   |
                                              |                     |                   |
    // Rung 2: System Stop and Low Level Interlock (Common for both)
    // This rung doesn't directly control outputs but ensures interlocks are met for the pump control rungs.
    // The XIO I:0/3 (Low Water Level) and XIO I:0/2 (Stop Button) are crucial.

    // Legend:
    // I:0/0 = Pump A Start Button (NO)
    // I:0/1 = Pump B Start Button (NO)
    // I:0/2 = Stop Button (NC)
    // I:0/3 = Low Water Level Sensor (NC)
    // O:0/0 = Pump A Contactor Output
    // O:0/1 = Pump B Contactor Output
    // B3:0/0 = Pump A Running Indicator (Internal Relay)
    // B3:0/1 = Pump B Running Indicator (Internal Relay)
    ```

    *   **Explanation:**
        *   **Rung 0 (Pump A):** Pump A starts if its start button (I:0/0) is pressed AND Pump B is NOT running (XIO B3:0/1) AND the Stop button is NOT pressed (XIO I:0/2) AND the water level is adequate (XIO I:0/3). The holding circuit is provided by B3:0/0.
        *   **Rung 1 (Pump B):** Similarly, Pump B starts if its start button (I:0/1) is pressed AND Pump A is NOT running (XIO B3:0/0) AND the Stop button is NOT pressed (XIO I:0/2) AND the water level is adequate (XIO I:0/3). The holding circuit is provided by B3:0/1.
        *   The XIO instructions for the Stop button and Low Water Level sensor act as critical safety interlocks. If either of these becomes FALSE (Stop button pressed, or low water), the respective pump rungs will be de-energized.

##### 3.3. Timing Operations

*   **Concept:** Introducing delays into the control sequence or measuring time intervals.
*   **Timer Instructions:**
    *   **TON (Timer On Delay):** The timer starts timing when the rung is true. The output (Timer Done bit) becomes true after the preset time has elapsed.
    *   **TOF (Timer Off Delay):** The timer starts timing when the rung becomes false. The output becomes true immediately when the rung is true and remains true for the preset time after the rung becomes false.
    *   **RTO (Retentive Timer On):** Similar to TON, but it retains its accumulated time value if the rung goes false and resumes timing from where it left off when the rung becomes true again.
*   **Timer Structure:**
    *   **Timer Base:** The time unit for the preset (e.g., 0.1 seconds, 1 second).
    *   **Preset (PRE):** The time duration for the timer.
    *   **Accumulator (ACC):** The current time elapsed.
    *   **Done Bit (DN):** A status bit that becomes true when the timer reaches its preset.
    *   **Enable Bit (EN):** A status bit that is true as long as the timer is enabled (rung is true for TON/RTO).
*   **Example: Delaying Motor Start**
    *   **Scenario:** A conveyor belt should start 5 seconds after a "Start" button is pressed, allowing the operator time to move away.
    *   **Inputs:** Start Button (NO)
    *   **Output:** Conveyor Motor Contactor
    *   **Internal Components:** Timer (TON)

    ```ladder
    // Rung 0: Timer for Conveyor Delay
    +----[ XIC I:0/0 ]----+----[ TON T4:0 ]----+
    |                     |      Timer ON Delay |
    +----[ XIC B3:0/0 ]---+      (Base: 1.0 s)  |
                                 (PRE: 5)       |
                                 (ACC: 0)       |
                                 (DN: T4:0/DN)  |
                                 (EN: T4:0/EN)  |
                                                |

    // Rung 1: Conveyor Motor Control
    +----[ XIC T4:0/DN ]----+----( OTE O:0/0 )----+
    |                     |                     |
    +----[ XIC B3:0/1 ]---+                     |
                                                |
    // Legend:
    // I:0/0 = Start Button (NO)
    // T4:0 = Timer (TON)
    // T4:0/DN = Timer Done Bit
    // O:0/0 = Conveyor Motor Contactor Output
    // B3:0/0 = Timer Enable (Internal Relay)
    // B3:0/1 = Conveyor Running Indicator (Internal Relay)
    ```

    *   **Explanation:**
        *   **Rung 0:** When the Start button (I:0/0) is pressed, and not already running (XIC B3:0/0), the TON timer (T4:0) starts. It's configured with a base of 1.0 second and a preset of 5, meaning it will take 5 seconds for the Done bit (T4:0/DN) to become true.
        *   **Rung 1:** The Conveyor Motor Contactor (O:0/0) is energized ONLY when the timer's Done bit (T4:0/DN) is true (i.e., after 5 seconds) and the motor is not already running (XIC B3:0/1). The holding circuit is provided by B3:0/1.

##### 3.4. Counting Operations

*   **Concept:** Keeping track of events or occurrences.
*   **Counter Instructions:**
    *   **CTU (Count Up):** The counter increments its accumulator (ACC) when the input signal transitions from OFF to ON (a rising edge).
    *   **CTD (Count Down):** The counter decrements its accumulator when the input signal transitions from OFF to ON.
    *   **CTR (Count Retentive):** Similar to CTU but retains its accumulated count if the rung goes false.
*   **Counter Structure:**
    *   **Preset (PRE):** The target count value.
    *   **Accumulator (ACC):** The current count.
    *   **Done Bit (DN):** Becomes true when ACC >= PRE for CTU/CTR, or ACC <= PRE for CTD.
    *   **Enable Bit (EN):** True when the counter is enabled.
*   **Example: Counting Items on a Conveyor**
    *   **Scenario:** A conveyor belt carries items. A sensor detects each item. When 10 items have passed, a signal should be sent to stop the conveyor and activate a "batch complete" light.
    *   **Inputs:**
        *   Conveyor Run Button (NO)
        *   Item Detection Sensor (NO)
    *   **Outputs:**
        *   Conveyor Motor Contactor
        *   Batch Complete Light
    *   **Internal Components:** Counter (CTU)

    ```ladder
    // Rung 0: Conveyor Motor Control
    +----[ XIC I:0/0 ]----+----( OTE O:0/0 )----+
    |                     |                     |
    +----[ XIC O:0/0 ]----+                     |
                                                |
    // Rung 1: Item Counting
    // Use a rising edge detection for the sensor to count each item once.
    // (This is often implemented using a one-shot pulse instruction, not shown here for simplicity but crucial in real applications)
    +----[ XIC I:0/1 ]----+----[ CTU C5:0 ]----+
    |                     |      Count Up     |
    |                     |      (PRE: 10)    |
    |                     |      (ACC: 0)     |
    |                     |      (DN: C5:0/DN)|
    |                     |      (EN: C5:0/EN)|
    +---------------------|                   |
                          |                   |
    // Rung 2: Batch Complete Logic
    +----[ XIC C5:0/DN ]----+----[ XIC I:0/0 ]----+----( OTE O:0/1 )----+
    |                     |                     |                     |
    +----[ XIC C5:0/DN ]----+                     |                     |
                                                |                     |
    // Rung 3: Resetting the Counter
    // Assume a Reset button (I:0/2) or stopping the conveyor resets the count.
    +----[ XIC I:0/2 ]----+----[ RES C5:0 ]----+ // Reset Counter
    |                     |                   |
    +----[ XIO O:0/0 ]----+                   |
                                              |
    // Legend:
    // I:0/0 = Conveyor Run Button (NO)
    // I:0/1 = Item Detection Sensor (NO)
    // O:0/0 = Conveyor Motor Contactor Output
    // O:0/1 = Batch Complete Light Output
    // C5:0 = Counter (CTU)
    // C5:0/DN = Counter Done Bit
    // I:0/2 = Reset Button (NO) - For demonstration purposes
    ```

    *   **Explanation:**
        *   **Rung 0:** Standard motor start/stop logic for the conveyor.
        *   **Rung 1:** When the item sensor (I:0/1) is triggered (assumed to be a momentary pulse), the CTU counter (C5:0) increments. It's set to count up to 10.
        *   **Rung 2:** When the counter's Done bit (C5:0/DN) becomes true (meaning 10 items have been counted), and the conveyor is running, the Batch Complete Light (O:0/1) is energized.
        *   **Rung 3:** The counter is reset when either a dedicated Reset button (I:0/2) is pressed or the conveyor stops (XIO O:0/0). This prepares it for the next batch. **Important Note:** In real-world scenarios, you'd typically use a one-shot instruction to ensure the counter increments only once per item detection.

#### 4. Troubleshooting and Debugging Ladder Programs

*   **PLC Software Tools:** Most PLC programming software provides tools for monitoring the program execution in real-time.
*   **Online Monitoring:**
    *   **Status Bits:** Observe the state of inputs, outputs, and internal bits (contacts, coils, timer/counter status bits).
    *   **Forced I/O:** Temporarily override the actual input/output status for testing purposes (use with caution!).
    *   **Cross-Referencing:** Find all locations where a specific input, output, or internal bit is used.
*   **Common Issues and Solutions:**
    *   **Logic Not Running:**
        *   Is the PLC in RUN mode?
        *   Is the correct program downloaded?
        *   Are there any critical errors preventing the scan?
    *   **Outputs Not Energizing:**
        *   Is the rung logic leading to the output coil TRUE? Trace the logic step-by-step.
        *   Is the output address correct?
        *   Is the output hardware faulty?
    *   **Inputs Not Being Read:**
        *   Is the input wiring correct?
        *   Is the input signal actually present?
        *   Is the input address correct in the program?
        *   Is the input module faulty?
    *   **Timers/Counters Not Behaving as Expected:**
        *   Are the Preset and Base values correct?
        *   Is the input to the timer/counter functioning correctly (e.g., stable signal, correct edge detection for counters)?
        *   Are the timer/counter Done bits being used correctly in subsequent logic?
*   **References:**
    *   *Mechatronics: Principles and Applications* by Godfrey C. Onwubolu often includes sections on industrial control systems and troubleshooting practical implementations.

### Important Points to Remember:

*   **Scan Cycle:** Always be aware of the PLC's scan cycle and how it affects the timing of your logic.
*   **Normally Closed (NC) Contacts:** Remember that an XIO instruction is TRUE when the input is OFF, and an XIC instruction is TRUE when the input is ON.
*   **Latching/Holding Circuits:** These are essential for maintaining output states after the initial input is removed.
*   **Interlocks:** Crucial for safety and preventing system damage. Always consider potential failure modes.
*   **Timers and Counters:** Understand the difference between TON, TOF, RTO, CTU, CTD, and CTR instructions and when to use each.
*   **Use of Internal Relays (Bits):** Internal relays are invaluable for creating holding circuits, branching logic, and simplifying complex rungs.
*   **Documentation:** Well-commented ladder programs are much easier to understand and troubleshoot.

### Practice Questions:

1.  **Question:** Design a ladder program to control a single-acting hydraulic cylinder. The cylinder should extend when a "Start" push button is pressed and retract when a "Stop" push button is pressed. Use a holding circuit to keep the cylinder extended after the "Start" button is released.
    *   **Inputs:** Start Button (NO), Stop Button (NC)
    *   **Outputs:** Hydraulic Cylinder Extend Solenoid, Hydraulic Cylinder Retract Solenoid
    *   **Knowledge Level:** K3 (Applying learned concepts)

2.  **Question:** Develop a ladder program for a traffic light system for a single intersection. The sequence should be: North-South Green (30s), North-South Yellow (5s), East-West Green (25s), East-West Yellow (5s). Use timers for the durations.
    *   **Inputs:** Clock Pulse (or system timer base)
    *   **Outputs:** North-South Green Light, North-South Yellow Light, East-West Green Light, East-West Yellow Light
    *   **Knowledge Level:** K3 (Applying learned concepts)

3.  **Question:** A machine produces parts on an assembly line. A sensor at the end of the line counts the parts. When 50 parts are counted, the system should stop the conveyor and activate a "Batch Complete" alarm. The system should then be reset for the next batch.
    *   **Inputs:** Conveyor Start Button (NO), Part Sensor (NO), Reset Button (NO)
    *   **Outputs:** Conveyor Motor Contactor, Batch Complete Alarm
    *   **Knowledge Level:** K3 (Applying learned concepts)

### Practice Question Answers:

**Answer 1: Hydraulic Cylinder Control**

```ladder
// Rung 0: Cylinder Extend
+----[ XIC I:0/0 ]----+----[ XIC O:0/0 ]----+----[ XIO I:0/1 ]----+----( OTE O:0/0 )----+
|                     |                     |                     |                   |
+---------------------|                     |                     |                   |
                                            |                     |                   |
// Rung 1: Cylinder Retract (assuming a separate solenoid for retraction or disabling extend)
// This logic assumes retracting is done by disabling the extend solenoid and potentially activating a retract solenoid.
// For simplicity, we'll just show disabling extend when stop is pressed.
// If there's a separate retract solenoid, you'd add another rung.
+----[ XIC I:0/1 ]----+----( OTE O:0/1 )----+ // Assume O:0/1 is a retract solenoid, or part of logic to disable O:0/0
|                     |                     |
+---------------------|                     |
                                            |

// Simplification: If retracting means just turning OFF the extend solenoid:
// Rung 0: Cylinder Extend and Hold
+----[ XIC I:0/0 ]----+----[ XIC O:0/0 ]----+----[ XIO I:0/1 ]----+----( OTE O:0/0 )----+
|                     |                     |                     |                   |
+---------------------|                     |                     |                   |
                                            |                     |                   |
// Rung 1: Stop Button Logic (to break the holding circuit of Rung 0)
// The XIO I:0/1 in Rung 0 handles the stop.

// Legend:
// I:0/0 = Start Button (NO)
// I:0/1 = Stop Button (NC)
// O:0/0 = Cylinder Extend Solenoid Output
// O:0/1 = (Potentially) Cylinder Retract Solenoid Output, or part of a more complex stop logic.
// The Stop button (I:0/1) directly breaks the logic to O:0/0.
```

**Answer 2: Traffic Light System**

```ladder
// Rung 0: North-South Green Light
+----[ XIC I:0/0 ]----+----[ TON T4:0 ]----+ // NS Green Timer (30s)
|                     |      (Base 1.0s)  |
|                     |      (PRE: 30)    |
|                     |      (DN: T4:0/DN)|
+---------------------|                   |
                      |                   |
+----[ XIC T4:0/DN ]----+----[ XIO T4:1/DN ]----+----[ XIO T4:2/DN ]----+----( OTE O:0/0 )----+ // NS Green Light
|                     |                     |                     |                   |
+---------------------|                     |                     |                   |
                                            |                     |                   |

// Rung 1: North-South Yellow Light
+----[ XIC T4:0/DN ]----+----[ TON T4:1 ]----+ // NS Yellow Timer (5s)
|                     |      (Base 1.0s)  |
|                     |      (PRE: 5)     |
|                     |      (DN: T4:1/DN)|
+---------------------|                   |
                      |                   |
+----[ XIC T4:1/DN ]----+----[ XIO T4:2/DN ]----+----( OTE O:0/1 )----+ // NS Yellow Light
|                     |                     |                   |
+---------------------|                     |                   |
                                            |                   |

// Rung 2: East-West Green Light
+----[ XIC T4:1/DN ]----+----[ TON T4:2 ]----+ // EW Green Timer (25s)
|                     |      (Base 1.0s)  |
|                     |      (PRE: 25)    |
|                     |      (DN: T4:2/DN)|
+---------------------|                   |
                      |                   |
+----[ XIC T4:2/DN ]----+----[ XIO T4:3/DN ]----+----( OTE O:0/2 )----+ // EW Green Light
|                     |                     |                   |
+---------------------|                     |                   |
                                            |                   |

// Rung 3: East-West Yellow Light
+----[ XIC T4:2/DN ]----+----[ TON T4:3 ]----+ // EW Yellow Timer (5s)
|                     |      (Base 1.0s)  |
|                     |      (PRE: 5)     |
|                     |      (DN: T4:3/DN)|
+---------------------|                   |
                      |                   |
+----[ XIC T4:3/DN ]----+--------------------+----( OTE O:0/3 )----+ // EW Yellow Light
|                     |                     |                   |
+---------------------|                     |                   |
                                            |                   |

// Note: For a continuous cycle, Rung 3's output (T4:3/DN) would need to trigger the start of T4:0 again.
// A simple way is to have T4:3/DN enable T4:0.

// Revised Rung 0 to enable T4:0 from EW Yellow completion:
// Rung 0: North-South Green Light
+----[ XIC I:0/0 ]----+----[ TON T4:0 ]----+ // NS Green Timer (30s)
|                     |      (Base 1.0s)  |
|                     |      (PRE: 30)    |
|                     |      (DN: T4:0/DN)|
+----[ XIC T4:3/DN ]---+                   | // Trigger NS Green after EW Yellow
                      |                   |
+----[ XIC T4:0/DN ]----+----[ XIO T4:1/DN ]----+----[ XIO T4:2/DN ]----+----( OTE O:0/0 )----+ // NS Green Light
|                     |                     |                     |                   |
+---------------------|                     |                     |                   |
                                            |                     |                   |


// Legend:
// I:0/0 = System Clock/Enable (assumed to start the cycle)
// T4:0 = NS Green Timer (30s)
// T4:1 = NS Yellow Timer (5s)
// T4:2 = EW Green Timer (25s)
// T4:3 = EW Yellow Timer (5s)
// O:0/0 = North-South Green Light Output
// O:0/1 = North-South Yellow Light Output
// O:0/2 = East-West Green Light Output
// O:0/3 = East-West Yellow Light Output
```

**Answer 3: Part Counting and Batch Completion**

```ladder
// Rung 0: Conveyor Motor Control
+----[ XIC I:0/0 ]----+----[ XIC O:0/0 ]----+----[ XIO C5:0/DN ]----+----( OTE O:0/0 )----+ // Conveyor runs only if batch not complete
|                     |                     |                     |                   |
+---------------------|                     |                     |                   |
                                            |                     |                   |
// Rung 1: Part Counting
// Assuming I:0/1 is a proximity sensor that triggers once per part
+----[ XIC I:0/1 ]----+----[ CTU C5:0 ]----+ // Part Counter
|                     |      (PRE: 50)    |
|                     |      (ACC: 0)     |
|                     |      (DN: C5:0/DN)|
+---------------------|                   |
                      |                   |
// Rung 2: Batch Complete Alarm
+----[ XIC C5:0/DN ]----+----[ XIO O:0/0 ]----+----( OTE O:0/1 )----+ // Alarm ON if batch done and conveyor is ON
|                     |                     |                   |
+---------------------|                     |                   |
                                            |                   |

// Rung 3: Resetting the Counter and System
+----[ XIC I:0/1 ]----+----[ RES C5:0 ]----+ // Reset counter when a new part *starts* to be detected after a batch
|                     |                   |
+----[ XIC I:0/2 ]----+                   | // Or reset with reset button
                                          |
// Important Note: To properly count items without double counting, a one-shot (ONS) instruction is typically used after I:0/1.
// The above assumes I:0/1 is a momentary pulse per item. If it's a continuous signal while an item is present,
// then a one-shot is mandatory for the counter to increment correctly only once per item.
// Example with One-Shot (assuming ONS instruction exists):
// Rung 1 (Revised): Part Counting with One-Shot
+----[ XIC I:0/1 ]----+----[ ONSOSR Output:0/0 ]----+----[ CTU C5:0 ]----+ // Part Counter
                      |      (OSR: Output:0/0)    |      (PRE: 50)    |
                      |      (TSR: Output:0/1)    |      (ACC: 0)     |
                      |                           |      (DN: C5:0/DN)|
                      +---------------------------|                   |
                                                  |                   |
// Rung 3 (Revised): Resetting the Counter
+----[ XIC I:0/2 ]----+----[ RES C5:0 ]----+ // Reset Counter with reset button
|                     |                   |
+----[ XIC C5:0/DN ]----+                   | // Or reset when the counter is done (this might be desired if the system stops automatically)
                                            |
// In a practical scenario, resetting might happen when the conveyor stops or a manual reset is pressed.
// The prompt says "system should then be reset for the next batch". This usually implies a manual reset or an automatic reset when the system is ready for the next batch.

// Legend:
// I:0/0 = Conveyor Start Button (NO)
// I:0/1 = Part Detection Sensor (NO)
// I:0/2 = Manual Reset Button (NO)
// O:0/0 = Conveyor Motor Contactor Output
// O:0/1 = Batch Complete Alarm Output
// C5:0 = Part Counter (CTU)
// C5:0/DN = Counter Done Bit
// OSR Output:0/0 = One-Shot Rising Output (temporary output for one scan)
// TSR Output:0/1 = Timer/Scan Reset Output for the one-shot

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
