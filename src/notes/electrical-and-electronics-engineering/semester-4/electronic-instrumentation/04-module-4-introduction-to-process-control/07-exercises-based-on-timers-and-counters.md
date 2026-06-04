---
title: "Exercises based on Timers and Counters."
subject: "ELECTRONIC INSTRUMENTATION"
module: "Module 4: Introduction to Process Control "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e8d"
status: "completed"
scrapedAt: "2026-05-23T16:16:27.095Z"
---
# Electronic Instrumentation: Module 4 - Introduction to Process Control

## Topic: Exercises based on Timers and Counters

This module focuses on the practical application of timers and counters in process control systems. Understanding their operation and how to utilize them in various scenarios is crucial for designing and implementing effective automation solutions. These exercises will solidify your grasp of these fundamental building blocks.

---

### 1. Learning Outcomes Covered

This topic directly contributes to the following learning outcomes:

*   **CO1: Identify the sensors/transducers suitable for industrial applications. (Knowledge Level: K3)** - While not directly about sensors, timers and counters are often triggered by sensor outputs, requiring an understanding of sensor behavior.
*   **CO2: Design the signal conditioning circuits for industrial instrumentation and automation. (Knowledge Level: K3)** - Understanding timer/counter inputs and outputs informs signal conditioning requirements.
*   **CO4: Develop the logic for the process control applications using PLC programming (Knowledge Level: K3)** - Timers and counters are fundamental instructions in PLC programming, essential for sequence control, timing, and counting operations.
*   **CO5: Analyze the performance of measurement systems using statistical methods (Knowledge Level: K4)** - The accuracy and repeatability of timing and counting operations can be analyzed statistically.

---

### 2. Key Concepts and Definitions

Before diving into exercises, let's revisit essential definitions:

#### 2.1 Timers

Timers are electronic devices or functions within microcontrollers/PLCs that measure and control the passage of time. They are crucial for implementing delays, sequencing operations, and periodic events.

*   **Timer Base:** The smallest unit of time that a timer can resolve. For example, a timer with a 0.1-second base can measure time in increments of 0.1 seconds.
*   **Preset Time:** The target time value set by the user. When the timer's accumulated time reaches the preset time, an event occurs.
*   **Accumulated Time:** The current elapsed time measured by the timer.
*   **Timer Types:**
    *   **On-Delay Timer (TON):** The output is activated *after* the preset time has elapsed since the timer started. The input signal must remain true for the preset time.
    *   **Off-Delay Timer (TOF):** The output is activated *immediately* when the input signal goes false, but it remains active for a preset time *after* the input signal becomes false.
    *   **Retentive Timer (RETAIN/TONR):** The timer continues to accumulate time even if the input signal is momentarily interrupted. The accumulated time is retained until reset.
    *   **Pulse Timer (TP):** The output is active for a preset duration, regardless of how long the input signal is true. The output will turn off after the preset time, even if the input remains true.

#### 2.2 Counters

Counters are devices or functions that count events. They are used to tally occurrences, control batch processes, or trigger actions after a specific number of events.

*   **Preset Counter:** The target count value set by the user. When the counter's accumulated count reaches the preset count, an event occurs.
*   **Accumulated Count:** The current count value.
*   **Count Direction:**
    *   **Up Counter:** Increments the accumulated count for each incoming pulse.
    *   **Down Counter:** Decrements the accumulated count for each incoming pulse.
    *   **Up/Down Counter:** Can count both up and down based on separate input signals.
*   **Count Source:** The input signal that triggers the counting action (e.g., a pulse from a proximity sensor).
*   **Reset Input:** A signal used to reset the accumulated count to zero.
*   **Counter Types:**
    *   **Count Up (CTU):** Increments the count when the count input transitions from false to true (rising edge).
    *   **Count Down (CTD):** Decrements the count when the count input transitions from false to true (rising edge).
    *   **Count Up/Down (CTUD):** Increments on one input, decrements on another.

---

### 3. Examples and Applications

Timers and counters are ubiquitous in process control. Here are a few illustrative examples:

*   **Motor Start Delay:** An **On-Delay Timer** can be used to prevent multiple motors from starting simultaneously, staggering their startup to avoid power surges.
*   **Conveyor Belt Control:** An **Up Counter** can count the number of items passing on a conveyor belt. When a specific quantity is reached, a **Timer** can activate a diverter arm to send the batch to a different process.
*   **Batch Filling:** A **Down Counter** can be used to control the filling of containers. The counter is preset with the number of units to fill. Each item filled decrements the counter. When the counter reaches zero, the filling process stops.
*   **Washing Machine Cycle:** A sequence of **On-Delay Timers** and **Counters** can control different stages of a washing machine cycle (wash, rinse, spin).
*   **Flashing Lights:** A **Pulse Timer** can be used to control the on-time and off-time of a light, creating a flashing effect.

---

### 4. Exercises and Practice Questions

These exercises are designed to test your understanding of timer and counter programming logic, commonly found in PLCs. Assume a standard PLC instruction set with `TON`, `TOF`, `RETAIN`, `TP`, `CTU`, `CTD`, and `CTUD` instructions.

**Scenario 1: Motor Control with Pre-heating**

A motor requires a 10-second pre-heating period before it can start. Once the start button is pressed, the pre-heating timer begins. After 10 seconds, the motor contactor should energize.

*   **Question 1:** Write the PLC ladder logic to implement this functionality using an **On-Delay Timer (TON)**.
    *   Assume:
        *   `I:0/0` is the Start Button input.
        *   `B3:0/0` is the Pre-heat Timer Done bit.
        *   `O:0/1` is the Motor Contactor output.
        *   Timer `T4:0` has a time base of 0.1 seconds and a preset of 100 (10 seconds).

**Solution 1:**

```
+-----------------+       +-------------------+
|   I:0/0         |-------| TON T4:0          |
| (Start Button)  |       | Preset: 100       |
|                 |       | Accum: 0          |
+-----------------+       +-------------------+
                              |
                              | Timer Done Bit (B3:0/0)
                              V
                      +-----------------+
                      | O:0/1           |
                      | (Motor Contactor)|
                      +-----------------+
```

**Explanation:** When the Start Button (`I:0/0`) is pressed, the `TON` instruction `T4:0` begins timing. After 100 increments of 0.1 seconds (total 10 seconds), the `T4:0/DN` (Done) bit becomes true. This Done bit is then used to energize the Motor Contactor output (`O:0/1`).

---

**Scenario 2: Sequential Operation of Lights**

Three lights (Red, Yellow, Green) need to illuminate sequentially. Red light stays on for 5 seconds, then turns off, and Yellow light turns on for 3 seconds. After Yellow turns off, Green light turns on for 7 seconds.

*   **Question 2:** Write the PLC ladder logic for this sequence using **On-Delay Timers**.
    *   Assume:
        *   `I:0/1` is a Master Control Relay (MCR) or Start Enable input.
        *   `O:0/0` is the Red Light output.
        *   `O:0/1` is the Yellow Light output.
        *   `O:0/2` is the Green Light output.
        *   `T4:0` (5 seconds, 0.1s base) controls Red light.
        *   `T4:1` (3 seconds, 0.1s base) controls Yellow light.
        *   `T4:2` (7 seconds, 0.1s base) controls Green light.

**Solution 2:**

```
// Red Light Control
+-----------------+       +-------------------+
|   I:0/1         |-------| TON T4:0          |
| (Start Enable)  |       | Preset: 50        |
|                 |       | Accum: 0          |
+-----------------+       +-------------------+
                              |
                              | Timer Done Bit (T4:0/DN)
                              V
                      +-----------------+
                      | O:0/0           |
                      | (Red Light)     |
                      +-----------------+

// Yellow Light Control (Starts when Red turns off)
+-----------------+       +-------------------+
|   T4:0/DN       |-------| TON T4:1          |
| (Red Done)      |       | Preset: 30        |
|                 |       | Accum: 0          |
+-----------------+       +-------------------+
                              |
                              | Timer Done Bit (T4:1/DN)
                              V
                      +-----------------+
                      | O:0/1           |
                      | (Yellow Light)  |
                      +-----------------+

// Green Light Control (Starts when Yellow turns off)
// This requires the T4:1/DN bit to be OFF, meaning T4:1 has finished.
// A better approach is to use the Timer timing bit (T4:1/TT) or the previous timer's done bit.
// Let's use the previous timer's done bit to initiate this stage, and then control the duration.
// A more robust way for sequencing: Use the *completion* of the previous stage.
// For Yellow turning OFF, we can use the T4:1/DN bit in conjunction with the next timer's enable.

// Revised Yellow to Green Transition:
// The green light should turn on *after* the yellow light finishes its 3-second duration.
// This means T4:1 has finished its timing.

+-----------------+       +-------------------+
|   T4:1/DN       |-------| TON T4:2          |  // Initiated by Yellow's done bit
| (Yellow Done)   |       | Preset: 70        |
|                 |       | Accum: 0          |
+-----------------+       +-------------------+
                              |
                              | Timer Done Bit (T4:2/DN)
                              V
                      +-----------------+
                      | O:0/2           |
                      | (Green Light)   |
                      +-----------------+

// To ensure the lights turn OFF correctly:
// Red light turns off when Yellow starts (which is when T4:0/DN becomes true).
// Yellow light turns off when Green starts (which is when T4:1/DN becomes true).

// Corrected Logic for Turning OFF Previous Lights:
// Red light should be ON as long as T4:0 is timing OR its done bit is ON.
// The Yellow light should be ON when T4:1 is timing.
// The Green light should be ON when T4:2 is timing.

// Let's use the timer timing bits for better control:

// Red Light Control
+-----------------+       +-------------------+
|   I:0/1         |-------| TON T4:0          |
| (Start Enable)  |       | Preset: 50        |
|                 |       | Accum: 0          |
+-----------------+       +-------------------+
      |                       | T4:0/TT (Timing)
      |                       | T4:0/DN (Done)
      +-----------------------+-----------------+
                              |
                              |
                              V
                      +-----------------+
                      | O:0/0           |
                      | (Red Light)     |
                      +-----------------+

// Yellow Light Control
+-----------------+       +-------------------+
|   T4:0/DN       |-------| TON T4:1          |
| (Red Done)      |       | Preset: 30        |
|                 |       | Accum: 0          |
+-----------------+       +-------------------+
                              | T4:1/TT (Timing)
                              | T4:1/DN (Done)
                              |
                              V
                      +-----------------+
                      | O:0/1           |
                      | (Yellow Light)  |
                      +-----------------+

// Green Light Control
+-----------------+       +-------------------+
|   T4:1/DN       |-------| TON T4:2          |
| (Yellow Done)   |       | Preset: 70        |
|                 |       | Accum: 0          |
+-----------------+       +-------------------+
                              | T4:2/TT (Timing)
                              | T4:2/DN (Done)
                              |
                              V
                      +-----------------+
                      | O:0/2           |
                      | (Green Light)   |
                      +-----------------+

// To turn off previous lights automatically:
// Red is on until T4:0/DN becomes true.
// Yellow is on until T4:1/DN becomes true.
// Green is on until T4:2/DN becomes true.

// The current logic already ensures this because the output is directly tied to the timer's done bit or timing bit.
// The start enable (I:0/1) should also be used to reset timers if the sequence needs to be repeatable from the start.
// For a continuous cycle, the T4:2/DN could be used to reset T4:0.
// For a single cycle, this is sufficient.
```

**Explanation:** The Red light (`O:0/0`) is activated when `T4:0` is either timing or done. `T4:0` starts when `I:0/1` is active and runs for 5 seconds. When `T4:0/DN` becomes true, it initiates `T4:1`, which turns on the Yellow light (`O:0/1`) for 3 seconds. When `T4:1/DN` becomes true, it initiates `T4:2`, which turns on the Green light (`O:0/2`) for 7 seconds. The lights turn off automatically as the next stage begins, or when the timer that controls them completes its cycle and the input to the *next* timer is no longer active.

---

**Scenario 3: Bottle Counting and Batching**

A conveyor belt carries bottles. A proximity sensor detects each bottle. You need to fill a batch of 25 bottles. After 25 bottles are detected, a diverter arm should activate for 2 seconds to send the batch to the next stage.

*   **Question 3:** Write the PLC ladder logic using an **Up Counter (CTU)** and an **On-Delay Timer (TON)**.
    *   Assume:
        *   `I:1/0` is the Proximity Sensor input (pulse for each bottle).
        *   `O:1/0` is the Diverter Arm output.
        *   `B3:1/0` is the Counter Done bit.
        *   `T4:3` (2 seconds, 0.1s base) controls the Diverter Arm.
        *   `C5:0` is the Counter with a preset of 25.

**Solution 3:**

```
// Bottle Counting
+-----------------+       +-------------------+
|   I:1/0         |-------| CTU C5:0          |
| (Proximity Sens)|       | Preset: 25        |
|                 |       | Accum: 0          |
+-----------------+       +-------------------+
                              |
                              | Counter Done Bit (C5:0/DN)
                              V
                      +-----------------+       +-------------------+
                      | C5:0/DN         |-------| TON T4:3          |
                      | (Counter Done)  |       | Preset: 20        | // 2 seconds * 10 (0.1s base)
                      |                 |       | Accum: 0          |
                      +-----------------+       +-------------------+
                                                    |
                                                    | Timer Done Bit (T4:3/DN)
                                                    V
                                            +-----------------+
                                            | O:1/0           |
                                            | (Diverter Arm)  |
                                            +-----------------+

// Reset the counter after the batch is complete and diverter has operated
+-----------------+
|   T4:3/DN       |-------| RES C5:0          | // Reset Counter
| (Timer Done)    |       |                   |
+-----------------+       +-------------------+
```

**Explanation:** The `CTU` instruction `C5:0` counts rising edges from the Proximity Sensor (`I:1/0`). When 25 bottles are detected, the `C5:0/DN` bit becomes true. This bit then enables the `TON` instruction `T4:3`, which activates the Diverter Arm output (`O:1/0`) for 2 seconds. Once the Diverter Arm has operated (indicated by `T4:3/DN` becoming true), the counter `C5:0` is reset, preparing it to count the next batch of 25 bottles.

---

**Scenario 4: Emergency Stop Button Logic**

An emergency stop (E-stop) button should immediately halt all operations. When the E-stop is pressed (input goes low), a status light should turn on for 5 seconds to indicate the E-stop condition.

*   **Question 4:** Write the PLC ladder logic using an **Off-Delay Timer (TOF)** and an **On-Delay Timer (TON)**.
    *   Assume:
        *   `I:2/0` is the E-Stop Button input (normally closed, so pressed means FALSE).
        *   `O:2/0` is the Main Machine Output (e.g., motor contactor).
        *   `O:2/1` is the E-Stop Status Light output.
        *   `T4:4` (5 seconds, 0.1s base) for the Status Light.
        *   `T4:5` (0.1s base, used as a placeholder for a delay before restarting)

**Solution 4:**

```
// E-Stop Logic - Main Machine Halt
+-----------------+       +-----------------+
|   I:2/0         |-------| O:2/0           | // Normally Closed E-Stop, so TRUE input means NOT pressed
| (E-Stop Button) |       | (Main Machine)  | // When pressed (FALSE), this branch is false, machine stops.
+-----------------+       +-----------------+

// E-Stop Logic - Status Light and Timer
+-----------------+       +-----------------+
|   I:2/0         |-------| TOF T4:4        | // T4:4 starts timing when I:2/0 goes FALSE (E-stop pressed)
| (E-Stop Button) |       | Preset: 50      | // 5 seconds * 10 (0.1s base)
|                 |       | Accum: 0        |
+-----------------+       +-----------------+
                              | T4:4/TT (Timing)
                              | T4:4/DN (Done)
                              |
                              V
                      +-----------------+
                      | O:2/1           |
                      | (E-Stop Light)  |
                      +-----------------+

// Resetting the system after E-stop condition clears
// Assume there's a Reset Button (I:2/1)
+-----------------+       +-----------------+
|   I:2/1         |-------| RES T4:4        | // Reset the E-Stop Timer
| (Reset Button)  |       |                 |
+-----------------+       +-----------------+
                          | RES C5:0        | // If this scenario involved counters, they'd also be reset.
                          |                 |
                          +-----------------+

// To control the restart, we need to ensure E-stop is clear.
// The Main Machine Output (O:2/0) is already controlled by the direct status of I:2/0.
// For a restart delay, you might use a TON after the E-stop condition is cleared.

// Example of Restart Delay (Simplified):
// After E-stop is cleared (I:2/0 becomes TRUE again) and Reset is pressed.

+-----------------+       +-----------------+       +-------------------+
|   I:2/0         |-------| TON T4:5        |-------| O:2/0           | // Main Machine Output
| (E-Stop Clear)  |       | Preset: 10      |       | (controlled by T4:5/DN)
|                 |       | Accum: 0        |       |
+-----------------+       +-----------------+       +-------------------+
                              | T4:5/DN
                              |
                              V
                      +-----------------+
                      | O:2/0           |
                      | (Main Machine)  |
                      +-----------------+

// This is a simplified restart. Real systems might have more complex interlocks.
```

**Explanation:** The main machine output (`O:2/0`) is directly controlled by the E-stop input (`I:2/0`). Since the E-stop is normally closed, when it's pressed, `I:2/0` goes false, and thus `O:2/0` turns off, stopping the machine. The `TOF` instruction `T4:4` is used for the status light. When the E-stop is pressed (`I:2/0` goes false), `T4:4` starts timing. The status light (`O:2/1`) is turned on as long as `T4:4` is timing (`T4:4/TT`) or has timed out (`T4:4/DN`). This provides a 5-second indication. A reset button is needed to clear the timer. The actual restart of the machine would depend on clearing the E-stop condition and potentially pressing a separate start button. The second part of the solution shows a basic concept of a restart delay using `TON` after the E-stop is cleared.

---

**Scenario 5: Time-Based Pulse Generation**

Generate a pulse of 1 second every 5 seconds using a `Pulse Timer (TP)`.

*   **Question 5:** Write the PLC ladder logic for this.
    *   Assume:
        *   `I:3/0` is the Enable input.
        *   `O:3/0` is the Pulse Output.
        *   `T4:6` (1 second, 0.1s base) is the Pulse Timer.
        *   `T4:7` (5 seconds, 0.1s base) is the Timer that triggers the pulse.

**Solution 5:**

```
// Timer to trigger the pulse
+-----------------+       +-------------------+
|   I:3/0         |-------| TON T4:7          |
| (Enable)        |       | Preset: 50        | // 5 seconds
|                 |       | Accum: 0          |
+-----------------+       +-------------------+
                              | T4:7/DN
                              |
                              V
                      +-----------------+
                      | TP T4:6         | // Pulse Timer
                      | Preset: 10      | // 1 second
                      | Accum: 0        |
                      +-----------------+
                              |
                              | Timer Output (T4:6/Q)
                              V
                      +-----------------+
                      | O:3/0           |
                      | (Pulse Output)  |
                      +-----------------+

// Reset the trigger timer T4:7 to create the repeating cycle.
// The TP timer T4:6 itself doesn't need a reset if its input is controlled.
// The TP timer's output (T4:6/Q) will be TRUE for 1 second, then FALSE, regardless of the input state after the input edge.
// The input to TP is the done bit of T4:7.

+-----------------+       +-----------------+
|   T4:6/DN       |-------| RES T4:7        | // Reset the trigger timer
| (TP Done)       |       |                 |
+-----------------+       +-----------------+
```

**Explanation:** The `TON` instruction `T4:7` runs for 5 seconds when enabled by `I:3/0`. When `T4:7/DN` becomes true, it acts as the input to the `TP` instruction `T4:6`. The `TP` timer `T4:6` will then generate an output pulse (`T4:6/Q`) that is active for 1 second. After 1 second, `T4:6/Q` goes false. The `T4:6/DN` bit (which is the output of the TP timer) being true will then reset `T4:7`, allowing it to start its 5-second timing cycle again when `I:3/0` is still true. This creates a repeating pattern of a 1-second pulse every 5 seconds.

---

### 5. Important Points to Remember

*   **Timer Base:** Always be aware of the timer's time base. A base of 0.01s means your preset needs to be 100 times larger for a 1-second duration compared to a 0.1s base.
*   **Retentive Timers:** Use retentive timers (`RETAIN`) when you need to preserve the accumulated time across power cycles or program scans where the input might be momentarily lost. They require a separate reset instruction.
*   **Counter Reset:** Counters typically require a separate reset instruction to return their accumulated value to zero.
*   **Edge Detection:** For counters (`CTU`, `CTD`), the counting action usually occurs on a specific edge (rising edge is common). Ensure your sensor output provides clean pulses.
*   **Sequential Logic:** When sequencing operations with multiple timers, pay close attention to which timer's output (Done, Timing) triggers the next stage. Use `Done` bits (`/DN`) to initiate subsequent operations.
*   **Timer States:** Understand the different timer status bits:
    *   `/EN` (Enable): Timer is enabled.
    *   `/TT` (Timer Timing): Timer is currently counting.
    *   `/DN` (Done): Timer has reached its preset value.
*   **PLC Program Structure:** For complex sequences, consider using subroutines or separate program blocks for timer and counter logic to improve readability and maintainability.
*   **Interlocks:** Always consider interlocks. For example, an E-stop should override any normal start command.
*   **Reference Books:** Consult your textbooks (Sawhney, Gupta, Kalsi, Bolton) for detailed explanations of timer and counter instructions specific to different PLC brands or general principles. Bolton's "Programmable Logic Controllers" is particularly relevant for PLC programming.

---

### 6. Alignment with Course Outcomes

*   **CO1 (Sensors/Transducers):** Understanding how sensor outputs (e.g., from proximity sensors, push buttons) trigger counters and timers is key. The quality of the sensor signal directly impacts the reliability of the timed or counted operation.
*   **CO2 (Signal Conditioning):** While not direct signal conditioning circuits, the output signals from timers and counters (e.g., timer done bit, counter done bit) act as control signals that often need to be processed or interfaced with other parts of the system. Understanding their state changes is vital.
*   **CO4 (PLC Programming Logic):** This topic is core to CO4. Developing the ladder logic for the provided scenarios directly addresses the ability to develop logic for process control applications using PLC programming.
*   **CO5 (Performance Analysis):** The accuracy of the timing or counting can be analyzed. For example, if a 5-second timer consistently takes 5.05 seconds, this deviation can be measured and potentially addressed. Statistical methods can be used to quantify this variability.

---

This comprehensive set of notes, including key concepts, detailed examples, practice questions with solutions, and crucial reminders, should provide a solid foundation for understanding and applying timers and counters in electronic instrumentation and process control. Remember to practice these concepts with actual PLC simulation software or hardware whenever possible.
