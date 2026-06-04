---
title: "PLC Timers and Counters"
subject: "INSTRUMENTATION"
module: "Module 4: PLC Programming"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5cd"
status: "completed"
scrapedAt: "2026-05-23T17:49:31.748Z"
---
# Module 4: PLC Programming - PLC Timers and Counters

## Introduction

Programmable Logic Controllers (PLCs) are industrial computers that are programmed to control various industrial processes. Timers and counters are fundamental building blocks in PLC programming, enabling the control of time-based operations and the counting of events. This module will delve into the principles, types, and applications of PLC timers and counters, aligning with the learning outcomes related to PLC programming for industrial processes (CO4).

## 1. PLC Timers

### 1.1 Definition and Purpose

*   **Timer:** A timer is a PLC instruction that delays the output of a signal for a specified period. It essentially measures the passage of time.
*   **Purpose:** Timers are used in PLC programming to:
    *   Control the duration of an operation (e.g., keeping a motor on for a specific time).
    *   Implement sequential operations with time delays between steps.
    *   Create ON-delays, OFF-delays, and retentive timing functions.
    *   Monitor the time elapsed for a process.

### 1.2 Types of PLC Timers

While specific timer implementations vary slightly between PLC manufacturers (e.g., Allen-Bradley, Siemens, Omron), the core functionalities are generally the same. The most common types are:

#### 1.2.1 ON-Delay Timer (TON)

*   **Principle:** The timer starts timing when its input contact becomes TRUE. The output relay (or bit) becomes TRUE *after* the preset time has elapsed. If the input contact becomes FALSE before the preset time is reached, the timer resets, and the output becomes FALSE.
*   **Key Components:**
    *   **Enable Input (EN):** Activated when the timer's input contact is TRUE.
    *   **Timer Timing (TT):** A bit that is TRUE while the timer is timing (input is TRUE, and preset time has not yet elapsed).
    *   **Done Output (DN):** A bit that is TRUE when the preset time has elapsed.
    *   **Preset Time (PT):** The desired time delay (e.g., seconds, milliseconds).
    *   **Accumulated Time (ACC):** The actual time that has passed since the timer was enabled.
*   **Example:** Turning on a fan for 5 seconds after a "start" button is pressed.
    *   Input: "Start" button
    *   Timer: TON with PT = 5 seconds
    *   Output: Fan ON
    *   When the "start" button is pressed, the TON timer starts. After 5 seconds, the DN bit becomes TRUE, turning on the fan. If the "start" button is released before 5 seconds, the timer resets.
*   **Textbook Reference:** Doebelin's Measurement Systems (while not directly focusing on PLC timers, it provides foundational understanding of time measurement and control systems). Kalsi's Electronic Instrumentation can offer insights into timing circuits. Hackworth & Hackworth's PLC Programming Methods and Applications will have detailed explanations of specific PLC timer instructions.

#### 1.2.2 OFF-Delay Timer (TOF)

*   **Principle:** The timer starts timing when its input contact becomes FALSE. The output relay (or bit) remains TRUE as long as the input contact was TRUE. The output becomes FALSE *after* the preset time has elapsed since the input contact went FALSE.
*   **Key Components:** Similar to TON, but the timing starts upon input going FALSE.
*   **Example:** Keeping a conveyor belt running for 3 seconds after a "stop" button is pressed to clear items.
    *   Input: "Stop" button
    *   Timer: TOF with PT = 3 seconds
    *   Output: Conveyor ON
    *   When the "stop" button is pressed, the conveyor continues to run. The TOF timer starts its count when the "stop" button is released (input becomes FALSE). After 3 seconds, the DN bit becomes FALSE, stopping the conveyor.
*   **Textbook Reference:** Similar to TON, Hackworth & Hackworth's PLC Programming Methods and Applications would be the primary source for detailed TOF instructions.

#### 1.2.3 Retentive Timer (RTO)

*   **Principle:** The timer starts timing when its input contact becomes TRUE. The accumulated time continues to increment even if the input contact becomes FALSE. The accumulated time is only reset when a separate reset instruction is applied to the timer. The Done (DN) bit becomes TRUE when the accumulated time reaches the preset time.
*   **Key Components:**
    *   **Enable Input:** Activates the timer.
    *   **Reset Input:** Resets the accumulated time and the DN bit.
    *   **Preset Time (PT):** The target time.
    *   **Accumulated Time (ACC):** The time elapsed, which is retained.
*   **Example:** Monitoring the total operating hours of a machine.
    *   Input: Machine Running status
    *   Timer: RTO with PT = desired total hours
    *   Output: Alarm if operating hours exceed a limit.
    *   The RTO timer will accumulate time as long as the machine is running. Even if the machine is stopped and restarted, the accumulated time will persist. A separate reset mechanism would be needed to start tracking from zero.
*   **Textbook Reference:** Hackworth & Hackworth's PLC Programming Methods and Applications would provide specific RTO instruction details.

#### 1.2.4 Preset Timer (TP) or Pulse Timer

*   **Principle:** The timer starts timing when its input contact becomes TRUE. The output pulse (often the TT bit) is active for the duration of the preset time, regardless of how long the input contact remains TRUE. Once the preset time is reached, the output pulse turns OFF, even if the input is still TRUE. The timer automatically resets when the input becomes FALSE.
*   **Key Components:**
    *   **Enable Input:** Activates the timer.
    *   **Preset Time (PT):** The duration of the output pulse.
    *   **Timer Timing (TT):** The output pulse.
*   **Example:** Generating a short pulse to trigger an event, like activating a solenoid valve for a fixed duration.
    *   Input: "Solenoid Activate" signal
    *   Timer: TP with PT = 0.5 seconds
    *   Output: Solenoid energized
    *   When the "Solenoid Activate" signal goes HIGH, the TP timer starts. It will energize the solenoid for exactly 0.5 seconds and then de-energize it, irrespective of how long the "Solenoid Activate" signal stays HIGH.
*   **Textbook Reference:** Hackworth & Hackworth's PLC Programming Methods and Applications would be the source for TP timer instructions.

### 1.3 Important Considerations for Timers

*   **Time Base:** PLCs typically use a specific time base for their timers (e.g., 0.01 seconds, 0.1 seconds, 1 second). This base must be considered when setting the Preset Time (PT). For example, if the time base is 0.1 seconds and you want a 5-second delay, you would set PT to 50.
*   **Timer Addressing:** Each timer in a PLC program is assigned a unique address (e.g., T4:0, Timer 0).
*   **Timer Output Bits:** Understanding the function of the Enable (EN), Timer Timing (TT), and Done (DN) bits is crucial for using timers effectively in ladder logic.
*   **Scan Time:** The PLC's scan time can affect the accuracy of timers, especially for very short time intervals.
*   **Textbook Reference:** Hackworth & Hackworth's PLC Programming Methods and Applications extensively covers these practical aspects of PLC timer usage.

## 2. PLC Counters

### 2.1 Definition and Purpose

*   **Counter:** A counter is a PLC instruction that increments or decrements its accumulated value based on the number of times a specific event occurs.
*   **Purpose:** Counters are used in PLC programming to:
    *   Count the number of items produced on a production line.
    *   Monitor the number of cycles a machine has completed.
    *   Implement batch counting.
    *   Track the number of events in a process.

### 2.2 Types of PLC Counters

Similar to timers, counter types and instructions can vary by manufacturer, but the core functionalities are consistent.

#### 2.2.1 Up-Counter (CTU)

*   **Principle:** The counter increments its accumulated value each time its count-up (CU) input contact transitions from FALSE to TRUE. The counter resets its accumulated value to zero when its reset (RES) input contact becomes TRUE.
*   **Key Components:**
    *   **Count Up (CU) Input:** The event that triggers the count increment.
    *   **Reset (RES) Input:** Resets the accumulated value and the Done (DN) bit.
    *   **Preset Value (PRE):** The target count value.
    *   **Accumulated Value (ACC):** The current count.
    *   **Done (DN) Bit:** Becomes TRUE when the accumulated value equals or exceeds the preset value.
*   **Example:** Counting the number of boxes passing a sensor on a conveyor.
    *   Input: Proximity sensor detecting a box (e.g., contact closes as box passes)
    *   Counter: CTU with PRE = 100
    *   Output: Signal to stop the conveyor after 100 boxes.
    *   Each time a box passes the sensor, the CU input transitions FALSE to TRUE, incrementing the counter. When the ACC reaches 100, the DN bit becomes TRUE, signaling to stop the conveyor.
*   **Textbook Reference:** Hackworth & Hackworth's PLC Programming Methods and Applications will detail CTU instructions.

#### 2.2.2 Down-Counter (CTD)

*   **Principle:** The counter decrements its accumulated value each time its count-down (CD) input contact transitions from FALSE to TRUE. The counter resets its accumulated value to the preset value when its reset (RES) input contact becomes TRUE.
*   **Key Components:**
    *   **Count Down (CD) Input:** The event that triggers the count decrement.
    *   **Reset (RES) Input:** Resets the accumulated value to PRE and clears the Done (DN) bit.
    *   **Preset Value (PRE):** The initial count value.
    *   **Accumulated Value (ACC):** The current count.
    *   **Done (DN) Bit:** Becomes TRUE when the accumulated value reaches zero.
*   **Example:** Dispensing a fixed number of items from a hopper.
    *   Input: Sensor confirming an item has been dispensed (e.g., contact closes)
    *   Counter: CTD with PRE = 50
    *   Output: Signal to stop dispensing when 50 items are dispensed.
    *   When an item is dispensed, the CD input transitions FALSE to TRUE, decrementing the counter. When the ACC reaches 0, the DN bit becomes TRUE, signaling to stop dispensing.
*   **Textbook Reference:** Hackworth & Hackworth's PLC Programming Methods and Applications will have detailed explanations of CTD instructions.

#### 2.2.3 Up/Down Counter (CTUD)

*   **Principle:** This counter combines both up and down counting capabilities. It increments its accumulated value on a FALSE-to-TRUE transition of the count-up (CU) input and decrements its accumulated value on a FALSE-to-TRUE transition of the count-down (CD) input. Both CU and CD inputs should not be active simultaneously to avoid unexpected behavior.
*   **Key Components:**
    *   **Count Up (CU) Input:** Increments the count.
    *   **Count Down (CD) Input:** Decrements the count.
    *   **Reset (RES) Input:** Resets the accumulated value to zero and clears the DN bits.
    *   **Preset Value (PRE):** The target value for the Done bits.
    *   **Accumulated Value (ACC):** The current count.
    *   **Done High (DH) Bit:** Becomes TRUE when ACC >= PRE.
    *   **Done Low (DL) Bit:** Becomes TRUE when ACC <= 0.
*   **Example:** Managing inventory in a warehouse where items are added and removed.
    *   Input 1: Sensor detecting items being added to a bin (CU)
    *   Input 2: Sensor detecting items being removed from a bin (CD)
    *   Counter: CTUD with PRE = 100
    *   Outputs:
        *   Alarm when bin is full (DH bit)
        *   Alarm when bin is empty (DL bit)
*   **Textbook Reference:** Hackworth & Hackworth's PLC Programming Methods and Applications will provide comprehensive details on CTUD instructions.

### 2.3 Important Considerations for Counters

*   **Count Direction:** Ensure the correct counter type (up, down, or up/down) is used for the application.
*   **Transition vs. Level Sensing:** Most counters count on a specific transition (e.g., FALSE to TRUE). Some might offer level-sensing options, but transition counting is more common for precise event tracking.
*   **Counter Addressing:** Each counter in a PLC program is assigned a unique address (e.g., C5:0, Counter 0).
*   **Counter Output Bits:** Understanding the function of the Done (DN) bit (and DH/DL for CTUD) is essential.
*   **Resetting Counters:** Proper reset logic is crucial to ensure counters start from the desired initial state.
*   **Overflow/Underflow:** Be aware of potential overflow (exceeding the maximum count) or underflow (going below zero) conditions, and how the PLC handles them.
*   **Textbook Reference:** Hackworth & Hackworth's PLC Programming Methods and Applications will cover these practical aspects of PLC counter usage.

## 3. Applications and Integration with Industrial Processes

### 3.1 Integrating Timers and Counters in Process Control

Timers and counters are rarely used in isolation. They are often combined with other PLC instructions (inputs, outputs, logic gates) to create sophisticated control strategies.

*   **Sequential Operations:** Timers are used to control the duration of each step in a sequence, while counters can track the number of completed cycles.
*   **Batch Control:** A counter can track the number of items in a batch, and a timer can control the mixing or processing time for that batch.
*   **Safety Interlocks:** Timers can be used to ensure a certain condition is met for a specific duration before a process can proceed, enhancing safety. Counters can track the number of safety overrides or faults.
*   **Start-up/Shut-down Sequences:** Timers are essential for controlling the phased start-up and shut-down of equipment.
*   **Material Handling:** Counters can track the number of items moved, and timers can control the speed or duration of conveyors.
*   **Alarm Management:** Timers can be used to delay alarms, prevent nuisance tripping, or track the duration of alarm conditions.
*   **Textbook Reference:** Hackworth & Hackworth's PLC Programming Methods and Applications provides numerous case studies and examples of how timers and counters are applied in various industrial scenarios. Webb & Reis's Programmable Logic Controllers- Principles and applications also offers practical examples.

### 3.2 Examples of PLC Programs Using Timers and Counters

**(Illustrative Ladder Logic Snippets - Conceptual)**

**Example 1: Motor ON-Delay Start**

```ladder
     |--| |----------( TON T4:0 Preset=50 Accum=0 )--|
     |  Start Button  |          Timer T4:0            |
     |                |                                |
     |                |--|/|-------( OT T4:0/DN )---|
     |                |  T4:0/TT    Motor Output     |
     |                |                                |
     |                |--| |----------( OT T4:0/DN )---|
     |                |  T4:0/DN    Motor Output     |
```

*   **Explanation:** When the "Start Button" is pressed, TON timer T4:0 starts. After 5 seconds (assuming a 0.1s time base, Preset=50), the DN bit becomes TRUE, energizing the "Motor Output". The TT bit is active while timing.

**Example 2: Counting Batches and Initiating a Process**

```ladder
     |--| |----------( CTU C5:0 Preset=10 Accum=0 )--|
     |  Product Sensor|          Counter C5:0           |
     |                |                                |
     |                |--| |----------( OT C5:0/DN )---|
     |                |  C5:0/DN    Batch Complete     |
     |                |                                |
     |                |--| |----------( TON T4:1 Preset=30 Accum=0 )--|
     |                |  Batch Complete |          Timer T4:1            |
     |                |                                |
     |                |--| |----------( OT T4:1/DN )---|
     |                |  T4:1/DN    Start Next Process |
     |                |                                |
     |                |--| |----------( OTE R2:0/0 )---|
     |                |  Batch Complete |          Reset Counter C5:0     |
```

*   **Explanation:** The CTU counter C5:0 increments each time a "Product Sensor" detects an item. When 10 items are counted, the DN bit becomes TRUE. This triggers a 3-second delay using TON timer T4:1, after which the "Start Next Process" output is activated. The "Batch Complete" signal also resets the counter C5:0 to begin counting the next batch.

## 4. Learning Outcomes Alignment

This module directly addresses **CO4: Apply PLC programming for selected industrial processes.**

*   **Knowledge Level: K3 (Application):** By understanding the principles and operation of timers and counters, students can apply these instructions to design and implement control logic for various industrial scenarios, as demonstrated in the examples and application sections. The notes provide the necessary foundation to build and debug PLC programs involving these essential components.

## 5. Practice Questions and Exercises

**Section A: Multiple Choice Questions**

1.  Which type of timer continues to accumulate time even if its input signal is turned OFF, and requires a separate reset instruction to clear its accumulated value?
    a) ON-Delay Timer (TON)
    b) OFF-Delay Timer (TOF)
    c) Retentive Timer (RTO)
    d) Pulse Timer (TP)

2.  If a PLC's timer time base is 0.01 seconds and you need a delay of 2.5 seconds, what would be the Preset Value (PT) for an ON-Delay timer?
    a) 25
    b) 250
    c) 0.025
    d) 2.5

3.  Which counter instruction is used to count events that occur when a signal transitions from FALSE to TRUE?
    a) CTD
    b) CTU
    c) CTUD
    d) None of the above

4.  For an OFF-Delay timer (TOF), when does the timing start?
    a) When the input signal becomes TRUE.
    b) When the input signal becomes FALSE.
    c) When the preset time has elapsed.
    d) When the reset input is activated.

5.  What is the primary function of the "Done" (DN) bit in a counter instruction?
    a) It indicates that the counter is currently counting.
    b) It indicates that the accumulated value has reached the preset value.
    c) It indicates that the counter has been reset.
    d) It indicates that the counter's input signal is active.

**Section B: Short Answer Questions**

1.  Describe the difference between an ON-Delay timer (TON) and an OFF-Delay timer (TOF).
2.  Explain the purpose of a Retentive Timer (RTO) and provide a scenario where it would be useful.
3.  What is the function of the Preset Value (PRE) in a counter?
4.  When would you choose to use an Up/Down Counter (CTUD) over a simple Up-Counter (CTU)?
5.  What are the potential issues that could arise if the PLC's scan time is not considered when programming timers?

**Section C: Practical Application Problem**

You are designing a PLC control system for a simple packaging machine. The machine should:

*   Start a conveyor belt when a "Start" button is pressed.
*   The conveyor should run for 10 seconds to position a product for packaging.
*   After 10 seconds, the conveyor should stop, and a "Package" solenoid should be activated for 2 seconds.
*   After the "Package" solenoid deactivates, the conveyor should start again for another 10 seconds.
*   This cycle should repeat a total of 5 times.
*   After 5 cycles, the entire process should stop, and an "End of Batch" light should turn on.

Assume you have the following inputs:
*   Start Button (I:1/0)
*   Count Sensor (I:1/1) - activated each time a package is successfully completed.

And the following outputs:
*   Conveyor Motor (O:2/0)
*   Package Solenoid (O:2/1)
*   End of Batch Light (O:2/2)

Draw a conceptual ladder logic diagram using TON timers and CTU counters to implement this functionality. Clearly label your timers (e.g., T4:0), counters (e.g., C5:0), and inputs/outputs.

---

### Answers to Practice Questions

**Section A: Multiple Choice Questions**

1.  c) Retentive Timer (RTO)
2.  b) 250 (2.5 seconds / 0.01 seconds/step = 250 steps)
3.  b) CTU
4.  b) When the input signal becomes FALSE.
5.  b) It indicates that the accumulated value has reached the preset value.

**Section B: Short Answer Questions**

1.  **ON-Delay Timer (TON):** Starts timing when the input becomes TRUE; the output activates *after* the preset time. If the input turns OFF before the preset time, the timer resets.
    **OFF-Delay Timer (TOF):** Starts timing when the input becomes FALSE; the output remains TRUE while the input was TRUE, and deactivates *after* the preset time has elapsed since the input went FALSE.

2.  **Purpose of Retentive Timer (RTO):** To keep track of accumulated time that is not lost when the input signal is removed. It's useful for applications like tracking machine operating hours, monitoring total production time, or implementing delays that must persist across power cycles or intermittent inputs.
    **Scenario:** Tracking the total operating hours of a critical pump for maintenance scheduling.

3.  **Preset Value (PRE) in a Counter:** The Preset Value is the target count. When the counter's accumulated value reaches or exceeds the Preset Value (for CTU/CTUD), the "Done" bit becomes active, signaling that the desired number of events has occurred.

4.  **CTUD vs. CTU:** A CTUD (Up/Down Counter) is chosen when you need to track both additions and subtractions of items or events. For example, in a warehouse scenario where you count items arriving (up) and items leaving (down). A CTU (Up-Counter) is sufficient when you only need to count events in one direction, such as counting products on a conveyor belt.

5.  **Scan Time Issues:**
    *   **Inaccurate Timing:** For very short time intervals, the PLC might not complete its scan cycle before the condition changes, leading to the timer not being enabled or reset correctly, resulting in inaccurate delays.
    *   **Missed Counts:** Similarly, if the scan time is longer than the duration of an input pulse for a counter, the PLC might miss the transition and fail to count the event.
    *   **Race Conditions:** In complex logic, scan time can lead to unexpected behavior if the order in which instructions are executed significantly impacts the outcome.

**Section C: Practical Application Problem (Conceptual Ladder Logic)**

**(Note: This is a conceptual representation. Actual PLC programming software would be used for precise implementation.)**

**Objective:** Cycle a conveyor (10s ON) and package solenoid (2s ON), repeat 5 times.

**Timers:**
*   T4:0 - Conveyor Run Timer (10 seconds)
*   T4:1 - Package Solenoid Timer (2 seconds)

**Counters:**
*   C5:0 - Cycle Counter (Preset = 5)

**Logic:**

```ladder
// Rung 1: Start the process and control the conveyor timing
     |--| |----------------( TON T4:0 Preset=100 Accum=0 )--|  // Assuming 0.1s time base
     |  Start Button      |          Timer T4:0            |
     |  (I:1/0)           |                                |
     |                    |--| |----------( OT T4:0/DN )---|
     |                    |  T4:0/DN    Conveyor Motor   |
     |                    |             (O:2/0)          |

// Rung 2: Control the package solenoid and sequence to counter/next timer
     |--| |----------------( TON T4:1 Preset=20 Accum=0 )--|  // Assuming 0.1s time base
     |  T4:0/DN           |          Timer T4:1            |
     | (Conveyor Done)    |                                |
     |                    |--| |----------( OT T4:1/DN )---|
     |                    |  T4:1/DN    Package Solenoid |
     |                    |             (O:2/1)          |
     |                    |                                |
     |                    |--| |----------( OTE C5:0/CU )---| // Count Up for cycle
     |                    |  T4:1/DN                       |
     |                    |                                |
     |                    |--| |----------( OTE R2:0/0 )---| // Reset T4:0 after solenoid is done
     |                    |  T4:1/DN                       |
     |                    |                                |
     |                    |--| |----------( OTE R2:1/0 )---| // Reset T4:1 after solenoid is done
     |                    |  T4:1/DN                       |

// Rung 3: Control the conveyor to stop during solenoid activation and restart after solenoid cycle
     |--|/|----------------( OT O:2/0 )---|  // Conveyor OFF when T4:1/DN is active
     |  T4:1/DN                               |
     |                                        |
     |--| |----------------( OT O:2/0 )---|  // Conveyor ON when T4:0/DN is active
     |  T4:0/DN                               |

// Rung 4: Reset the counters and timers when batch is complete
     |--| |----------------( OTE C5:0/RES )---| // Reset Cycle Counter
     |  C5:0/DN                               |
     |                                        |
     |--| |----------------( OTE T4:0/RES )---| // Reset Conveyor Timer
     |  C5:0/DN                               |
     |                                        |
     |--| |----------------( OTE T4:1/RES )---| // Reset Solenoid Timer
     |  C5:0/DN                               |
     |                                        |
     |--| |----------------( OT O:2/2 )---|  // Turn on End of Batch Light
     |  C5:0/DN                               |

// Rung 5: Enable the "Start Button" to trigger the initial timer
     |--| |----------------( OT T4:0 )---| // This connects the Start Button to the TON
     |  Start Button                          |
     |  (I:1/0)                               |
     |                                        |
     |--| |----------------( OT C5:0/DN )---| // This is where the cycle count triggers the next batch
     |  T4:0/DN                               | // This should go to the reset of T4:0 to restart the cycle timing logic
```

**Conceptual Logic for Rung 5 Refinement:**

A more robust approach for Rung 5 would be to use the C5:0/DN bit to reset T4:0 and re-enable the start condition for the next cycle, and to control the final "End of Batch" logic. The actual implementation can vary.

**Corrected Conceptual Logic for Cycle and Reset:**

```ladder
// Rung 1: Conveyor ON timer
     |--| |----------------( TON T4:0 Preset=100 Accum=0 )--|
     |  Start Button      |          Timer T4:0            |
     |  (I:1/0)           |                                |
     |                    |--| |----------( OT O:2/0 )---| // Conveyor ON
     |                    |  T4:0/DN    (O:2/0)          |

// Rung 2: Solenoid ON timer, triggers counter and reset of previous timer
     |--| |----------------( TON T4:1 Preset=20 Accum=0 )--|
     |  T4:0/DN           |          Timer T4:1            |
     | (Conveyor Done)    |                                |
     |                    |--| |----------( OT O:2/1 )---| // Package Solenoid ON
     |                    |  T4:1/DN    (O:2/1)          |
     |                    |                                |
     |                    |--| |----------( OTE C5:0/CU )---| // Count up for cycle
     |                    |  T4:1/DN                       |
     |                    |                                |
     |                    |--| |----------( OTE T4:0/RES )---| // Reset T4:0 to start next cycle's timing
     |                    |  T4:1/DN                       |

// Rung 3: Stop conveyor during solenoid activation
     |--|/|----------------( OT O:2/0 )---|
     |  T4:1/DN                               |

// Rung 4: Reset timer T4:1 and counter C5:0 when batch is done
     |--| |----------------( OTE T4:1/RES )---|
     |  C5:0/DN                               | // This is likely incorrect, need to control the reset based on the *completion* of the 5 cycles

// Rung 5: Final Batch Control (Revised)
     |--| |----------------( CTU C5:0 Preset=5 Accum=0 )--| // Count cycles
     |  T4:1/DN           |          Counter C5:0           | // Count on successful solenoid activation
     | (Cycle Done)       |                                |
     |                    |--| |----------( OT O:2/2 )---| // End of Batch Light ON
     |                    |  C5:0/DN    (O:2/2)          |
     |                    |                                |
     |                    |--| |----------( OTE C5:0/RES )---| // Reset counter to allow starting a new batch
     |                    |  C5:0/DN                       | // Resetting C5:0 when DN is true is problematic. Need a separate start for a new batch.

// Let's reconsider the reset and restart mechanism for a more practical approach:
// We need to reset T4:0 and T4:1 and potentially C5:0 based on some condition, or start the next cycle.

// Simplified Approach: Use C5:0/DN to trigger the reset of T4:0 and T4:1 to restart the cycle.

// Revised Rung 2:
     |--| |----------------( TON T4:1 Preset=20 Accum=0 )--|
     |  T4:0/DN           |          Timer T4:1            |
     | (Conveyor Done)    |                                |
     |                    |--| |----------( OT O:2/1 )---| // Package Solenoid ON
     |                    |  T4:1/DN    (O:2/1)          |
     |                    |                                |
     |                    |--| |----------( OTE C5:0/CU )---| // Count up for cycle
     |                    |  T4:1/DN                       |

// Revised Rung 4: Control the start of the next cycle and final end condition
     |--| |----------------( OTE T4:0/RES )---| // Reset T4:0 to restart the cycle timing
     |  C5:0/DN                               |
     |                                        |
     |--| |----------------( OTE T4:1/RES )---| // Reset T4:1 to restart the cycle timing
     |  C5:0/DN                               |
     |                                        |
     |--| |----------------( OTE C5:0/RES )---| // Reset C5:0 only if we want to start a new batch externally
     |  C5:0/DN                               | // Or manage this reset separately

// Final End of Batch Control
     |--| |----------------( OT O:2/2 )---|
     |  C5:0/DN                               |
     |  (AND NOT C5:0/DN PREVIOUSLY TRUE)     | // Logic to ensure it stays on after 5 cycles

// A more realistic start for the next cycle is to let T4:0 restart automatically when it's rung logic is evaluated again,
// OR explicitly trigger a reset for T4:0 and T4:1 when C5:0 becomes done.
// The prompt implies the process stops after 5 cycles.

// Final Logic to stop the process after 5 cycles:
     |--| |----------------( CTU C5:0 Preset=5 Accum=0 )--|
     |  T4:1/DN           |          Counter C5:0           | // Count on successful solenoid activation
     | (Cycle Done)       |                                |
     |                    |--| |----------( OTE T4:0/RES )---| // Prevent T4:0 from restarting
     |                    |  C5:0/DN                       |
     |                    |                                |
     |                    |--| |----------( OTE T4:1/RES )---| // Prevent T4:1 from restarting
     |                    |  C5:0/DN                       |
     |                    |                                |
     |                    |--| |----------( OT O:2/2 )---| // End of Batch Light ON
     |                    |  C5:0/DN                       |
```

**Note on Practical Implementation:** The exact logic for resetting timers and counters, and for controlling the start of the next cycle, can be implemented in various ways depending on the desired behavior and the specific PLC programming conventions. This exercise is to demonstrate the use of timers and counters in sequence.

## 6. Important Points to Remember

*   **Time Base is Crucial:** Always know your PLC's timer time base to correctly set Preset values.
*   **Transition vs. Level:** Understand if your timer/counter instructions operate on rising edge transitions, falling edge transitions, or are level-sensitive.
*   **Address Your Timers/Counters:** Each timer and counter needs a unique address.
*   **Output Bits Matter:** Utilize the EN, TT, DN, DH, DL bits correctly in your logic.
*   **Reset Logic:** Implement robust reset logic for both timers and counters to ensure predictable operation.
*   **Sequential Operations:** Combine timers and counters with other logic instructions to build complex sequential control.
*   **Refer to Manufacturer's Manuals:** For specific instruction sets, syntax, and advanced features, always consult the PLC manufacturer's programming manuals.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 7. Textbook and Reference Book Alignment

This module's content is directly supported by the recommended textbooks, particularly:

*   **Hackworth & Hackworth, *Programmable Logic Controllers Programming Methods and Applications* (3/e, 2022):** This book is the primary resource for detailed explanations of PLC timer and counter instructions, their syntax, and practical application examples.
*   **Webb & Reis, *Programmable Logic Controllers- Principles and applications* (5/e, 2015):** This reference book offers a strong foundation in PLC principles and provides numerous examples of timer and counter applications in industrial automation.

While Doebelin's and Kalsi's books focus more on general measurement and instrumentation principles, they provide a valuable background on the underlying concepts of time measurement and event counting that are fundamental to understanding PLC timers and counters. Sawhney's book also contributes to this foundational knowledge. The application of these concepts in a programmable logic controller is the core of this module, as addressed by Hackworth and Webb/Reis.

This comprehensive set of notes should provide a solid understanding of PLC timers and counters, enabling you to apply them effectively in industrial process control scenarios, thus meeting the learning objectives and course outcomes.