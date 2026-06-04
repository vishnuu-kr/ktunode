---
title: "Programmable Logic Controllers (PLC) – input and output devices, ladder logic programming, simple problems only."
subject: "ADVANCED MANUFACTURING ENGINEERING"
module: "Module 2: Programmable Logic Controllers (PLC) – input and output devices, ladder logic programming, simple problems only."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463382"
status: "completed"
scrapedAt: "2026-05-20T17:57:57.827Z"
---
# Advanced Manufacturing Engineering: Module 2 - Programmable Logic Controllers (PLC)

## Topic: PLC - Input and Output Devices, Ladder Logic Programming, Simple Problems

This module introduces Programmable Logic Controllers (PLCs) and their fundamental components, focusing on input/output devices and the basics of ladder logic programming for simple automation tasks. Understanding these concepts is crucial for implementing control systems in advanced manufacturing environments, bridging the gap between theoretical knowledge and practical application.

**Key Learning Outcomes:**

*   Understand the basic architecture and function of a PLC.
*   Identify and describe common PLC input and output devices.
*   Explain the principles of ladder logic programming.
*   Develop simple ladder logic programs for basic control sequences.
*   Relate PLC functionality to automation in manufacturing processes.

---

### 1. Introduction to Programmable Logic Controllers (PLCs)

#### 1.1 What is a PLC?

*   **Definition:** A Programmable Logic Controller (PLC) is a ruggedized digital computer used for the automation of typically industrial electromechanical processes, such as control of machinery on factory assembly lines, amusement rides, or light fixtures.
*   **Purpose:** PLCs replace traditional hard-wired relay logic systems, offering greater flexibility, programmability, and expandability. They are the brains behind many automated manufacturing processes.
*   **Analogy:** Think of a PLC as a dedicated computer designed to monitor inputs, make decisions based on a pre-programmed logic, and control outputs to affect a process.

#### 1.2 Basic PLC Architecture

*   **Central Processing Unit (CPU):**
    *   The "brain" of the PLC.
    *   Executes the user program stored in memory.
    *   Scans input devices, processes logic, and updates output devices.
    *   Often referred to as the processor or main module.
*   **Memory:**
    *   Stores the operating system, user program (ladder logic), and data.
    *   Types include RAM (volatile) and ROM/EEPROM (non-volatile).
*   **Input Module:**
    *   Connects to sensors and switches in the field.
    *   Converts real-world signals (e.g., voltage from a button) into digital signals the CPU can understand.
    *   Acts as the interface between the physical world and the PLC.
*   **Output Module:**
    *   Connects to actuators and devices like motors, lights, and solenoids.
    *   Converts digital signals from the CPU into real-world electrical signals to control these devices.
    *   Acts as the interface between the PLC and the physical world.
*   **Power Supply:**
    *   Provides the necessary voltage and current to operate the PLC and its modules.
*   **Programming Device:**
    *   A computer or handheld programmer used to create, edit, download, and monitor PLC programs.

**Reference:** Petruzella, Frank D. *Programmable Logic Controllers.* McGraw Hill, 2016. This book provides a comprehensive overview of PLC hardware and architecture.

---

### 2. PLC Input and Output (I/O) Devices

#### 2.1 Input Devices

*   **Function:** Detect physical conditions and convert them into electrical signals that the PLC can process.
*   **Types:**
    *   **Pushbuttons:**
        *   **Normally Open (NO):** Completes a circuit when pressed.
        *   **Normally Closed (NC):** Opens a circuit when pressed.
        *   *Example:* Emergency stop buttons (NC), start buttons (NO).
    *   **Selector Switches:**
        *   Manual switches with multiple positions (e.g., ON/OFF, AUTO/MANUAL).
        *   *Example:* Mode selection switches on a machine.
    *   **Limit Switches:**
        *   Mechanical switches activated by physical contact with an object.
        *   Used to detect the position of moving parts.
        *   *Types:* Lever, roller, plunger actuated.
        *   *Example:* Detecting if a robotic arm has reached its extreme position.
    *   **Proximity Sensors:**
        *   Detect the presence of an object without physical contact.
        *   *Types:*
            *   **Inductive:** Detects metallic objects.
            *   **Capacitive:** Detects metallic and non-metallic objects.
            *   **Photoelectric:** Uses light beams to detect objects (through-beam, retro-reflective, diffuse-reflective).
        *   *Example:* Detecting a workpiece on a conveyor belt.
    *   **Optical Sensors:**
        *   Include photoelectric sensors and vision systems.
        *   Used for object detection, alignment, counting, and quality inspection.
    *   **Encoders:**
        *   Convert rotational or linear motion into digital pulses.
        *   Used for position feedback and speed measurement in CNC machines.
        *   *Types:* Incremental, Absolute.
    *   **Analog Sensors:**
        *   Provide a continuous range of output signals (e.g., voltage or current) proportional to the measured physical quantity.
        *   *Examples:* Temperature sensors (thermocouples, RTDs), pressure sensors, flow meters, level sensors.
        *   Require Analog Input Modules with Analog-to-Digital Converters (ADCs).

**Important Point:** Input devices are typically wired to the PLC's input module as either **sourcing** (providing power to the input module) or **sinking** (drawing power from the input module). Understanding this wiring convention is crucial for correct operation.

**Example (from Koren):** In a CNC machining context, limit switches are used to detect the travel limits of the machine axes, preventing damage. Proximity sensors can detect the presence of a tool in the spindle or a workpiece in the chuck.

#### 2.2 Output Devices

*   **Function:** Receive electrical signals from the PLC and activate physical devices to control a process.
*   **Types:**
    *   **Relays:**
        *   Electromechanical switches controlled by an electromagnet.
        *   Used to switch higher current/voltage loads than the PLC output can directly handle.
        *   PLC output module often provides the signal to energize the relay coil.
    *   **Solid-State Relays (SSRs):**
        *   Use semiconductor devices (like TRIACs or SCRs) for switching.
        *   Faster switching, longer lifespan, and no moving parts compared to electromechanical relays.
        *   Often used for AC loads.
    *   **Solenoids:**
        *   Electromagnetic devices that convert electrical energy into linear motion.
        *   Used to operate pneumatic or hydraulic valves.
        *   *Example:* Opening or closing a pneumatic cylinder for material handling.
    *   **Motor Starters:**
        *   Control the starting, stopping, and often protection of electric motors.
        *   Can include contactors, overloads, and circuit breakers.
        *   *Example:* Starting and stopping a conveyor belt motor.
    *   **Indicator Lights (Lamps):**
        *   Provide visual feedback about the status of the process (e.g., ON, OFF, Fault).
    *   **Variable Frequency Drives (VFDs):**
        *   Control the speed of AC motors by varying the frequency and voltage supplied.
        *   *Example:* Adjusting the speed of a spindle motor on a CNC machine.
    *   **Analog Outputs:**
        *   Provide a continuous range of output signals (e.g., 4-20 mA, 0-10V) to control devices like proportional valves or variable speed drives.
        *   Require Analog Output Modules with Digital-to-Analog Converters (DACs).

**Important Point:** PLC output modules are often classified as **sink** or **source** outputs, similar to inputs. The load is wired between the output terminal and the appropriate voltage supply (DC+ for source, DC- for sink).

**Example (from Gibson et al. on Additive Manufacturing):** In an additive manufacturing machine, PLC outputs control the movement of the build platform, the operation of the laser or extruder, and the positioning of material feed systems.

---

### 3. Ladder Logic Programming

#### 3.1 Introduction to Ladder Logic

*   **Concept:** Ladder logic is a graphical programming language used for PLCs. It is designed to mimic the schematic diagrams of traditional relay-based control systems.
*   **Purpose:** To represent the logical relationships between inputs, outputs, and internal PLC elements.
*   **Structure:** Consists of "rungs," which are horizontal lines representing the control logic. Each rung typically starts with a power rail on the left and ends with a return rail on the right.

#### 3.2 Basic Ladder Logic Symbols

| Symbol        | Name                      | Description                                                                   |
| :------------ | :------------------------ | :---------------------------------------------------------------------------- |
| `| |`         | Normally Open (NO) Contact | Closed (allows current flow) when its associated input/internal bit is TRUE. |
| `|-/|`        | Normally Closed (NC) Contact | Open (blocks current flow) when its associated input/internal bit is TRUE.   |
| `-( )-`       | Output Coil               | Energizes (turns ON) when the rung conditions to its left are TRUE.         |
| `-[ ]-`       | Output (often stylized)   | Similar to coil, represents an output state.                                |
| `-( )--`      | Latch (SET)               | Sets an output to TRUE and keeps it TRUE until reset.                         |
| `-(/)--`      | Unlatch (RESET)           | Resets an output to FALSE.                                                    |
| `---[ ]---`   | Timer                     | A device that delays an output based on a preset time value.                |
| `---[/ ]---`  | Counter                   | A device that counts events and activates an output when a preset count is reached. |

**Important Point:** Ladder logic is executed cyclically by the PLC. The CPU scans inputs, executes the ladder logic program rung by rung from top to bottom, and then updates outputs.

**Reference:** Petruzella, Frank D. *Programmable Logic Controllers.* McGraw Hill, 2016. Chapter on ladder logic is essential.

#### 3.3 Addressing

*   PLCs use addresses to identify I/O points and internal memory bits.
*   **Input Addresses:** Typically prefixed with 'I' or '1' (e.g., I:0/0, 100).
*   **Output Addresses:** Typically prefixed with 'O' or '0' (e.g., O:0/1, 000).
*   **Internal Bits/Relays:** Used for internal logic and temporary storage (e.g., B3:0/0, 1.0).
*   **Timers and Counters:** Have specific address ranges and parameters (e.g., T4:0, C5:1).

**Example:**
*   `I:0/1` might represent a pushbutton connected to the first input of the first input module.
*   `O:0/3` might represent a motor starter controlled by the fourth output of the first output module.
*   `B3:0/5` might represent an internal memory bit used to store a status flag.

#### 3.4 Basic Logic Operations in Ladder Logic

*   **Series (AND):** Two or more contacts in series require all of them to be TRUE for the output coil to be energized.
    *   `[Input A] --- [Input B] --- (Output Coil)`
*   **Parallel (OR):** Two or more contacts in parallel require at least one of them to be TRUE for the output coil to be energized.
    *   `[Input A] \`
    *   `------------ (Output Coil)`
    *   `[Input B] /`

#### 3.5 Timers

*   **Purpose:** To introduce time delays into a control sequence.
*   **Common Types:**
    *   **On-Delay Timer (TON):** The output becomes active *after* the timer has been enabled for a specified time. The timer starts counting when the rung leading to it is TRUE.
        *   *Parameters:* Preset Time (PRE), Accumulated Time (ACC).
        *   *Condition for Output:* `Timer.DN` (Done bit) becomes TRUE after ACC reaches PRE.
    *   **Off-Delay Timer (TOF):** The output becomes inactive *after* the timer has been disabled for a specified time. The timer starts counting when the rung leading to it becomes FALSE.
*   **Example:** Turning on a motor for 5 seconds after a start button is pressed.

#### 3.6 Counters

*   **Purpose:** To count events (e.g., pulses from a sensor).
*   **Common Types:**
    *   **Up Counter (CTU):** Increments its accumulated value when the count input transitions from FALSE to TRUE.
    *   **Down Counter (CTD):** Decrements its accumulated value when the count input transitions from FALSE to TRUE.
*   **Parameters:** Preset Count (PRE), Accumulated Count (ACC).
*   **Example:** Counting the number of parts passing on a conveyor belt.

---

### 4. Simple Ladder Logic Problems

#### Problem 1: Start/Stop Control of a Motor

**Description:** Design a ladder logic program to start a motor when a 'Start' pushbutton is pressed and stop it when a 'Stop' pushbutton is pressed. The motor should remain running after the 'Start' button is released.

**Inputs:**
*   Start Pushbutton (NO): `I:0/0`
*   Stop Pushbutton (NC): `I:0/1`

**Output:**
*   Motor Contactor: `O:0/0`

**Solution:**

*   **Rung 1:** This rung uses a latching (or sealing) circuit. The 'Start' button (NO) energizes the motor output. The motor output itself (also wired as an NO contact in parallel with the 'Start' button) latches the output ON, keeping it running even after the 'Start' button is released. The 'Stop' button (NC) is wired in series and breaks the circuit when pressed.

```ladder
|-------| |-------| |------( )---|
|       I:0/0     | B3:0/0     | O:0/0 |  <-- Motor Output
|       Start     |            |       |
|-------|/|-------|            |       |
|       I:0/1     |            |       |
|       Stop      |            |       |
|-------| |-------|            |       |
```

**Explanation:**
1.  When the 'Start' button (`I:0/0`) is pressed, rung 1 becomes TRUE.
2.  The motor output (`O:0/0`) energizes.
3.  The branch contact (`B3:0/0`, which is the status of the `O:0/0` output) becomes TRUE, providing a parallel path for the 'Start' button. This "seals in" the motor.
4.  When the 'Stop' button (`I:0/1`) is pressed, it opens the circuit (as it's NC), de-energizing `O:0/0`.
5.  The `B3:0/0` contact also de-energizes, breaking the seal-in path.

**Answer:** The ladder logic diagram above represents the solution.

#### Problem 2: Flashing Light

**Description:** Create a ladder logic program to make an indicator light flash on and off every 1 second.

**Inputs:** None required for continuous flashing.

**Outputs:**
*   Indicator Light: `O:0/1`

**Internal Elements:**
*   On-Delay Timer (TON): `T4:0`
    *   Preset Time (PRE): 10 (assuming 0.1s time base, so 1 second)
*   Internal Bit (for latching timer done bit): `B3:1/0`

**Solution:**

*   **Rung 1:** This rung uses a timer to create the flashing sequence.
    *   We need a mechanism to restart the timer after it completes. This is often done using the timer's Done bit (`T4:0.DN`) to trigger the timer again. However, a simple way to achieve flashing is to use the timer's Done bit to unlatch the timer's enable bit (or a control bit), and its timing status bit (`T4:0.TT`) to latch it back on. A more direct approach uses the timer itself.

```ladder
|-------| |-------| |------( )---|  <-- Timer Enable
|       B3:1/0    | T4:0        |       |
|       (Enable)  | TON         |       |
|                 | PRE=10      |       |
|                 | ACC=0       |       |
|-----------------|-------------|-------|
|                 | T4:0.DN     |       |  <-- Timer Done bit
|                 | (Output of Timer) |       |
|-------| |-------|             |       |
|       T4:0.DN   | B3:1/0      |       |  <-- Latch for timer enable
|       (Done)    | SET         |       |
|-----------------|-------------|-------|
|       T4:0.DN   |             |       |  <-- Reset for timer enable
|       (Done)    | B3:1/0      |       |
|-------|/|-------| RESET       |       |
|       T4:0.TT   |             |       |  <-- Timer Timing bit
|       (Timing)  |             |       |
|-----------------|-------------|-------|
|       T4:0.DN   |             | O:0/1 |  <-- Indicator Light
|       (Done)    |             |       |
|-----------------|-------------|-------|
```

**Simplified Approach for Flashing:** Many PLC programming environments provide a "flasher" or "blinker" instruction. If not, a common method is to toggle an output based on timer completion.

**Alternative/Simpler Ladder Logic for Flashing (using timer and output):**

```ladder
|-------| |-------| |------[ TON ]---|  <-- Timer ON Delay
|       B3:0/0    | T4:0           |       |
|       (Enable)  | PRE=10         |       |
|                 | ACC=0          |       |
|-----------------|----------------|-------|
|       T4:0.TT   |                | O:0/1 |  <-- Indicator Light
|       (Timing)  |                |       |
|-----------------|----------------|-------|
|       T4:0.DN   |                | B3:0/0|  <-- Latch Timer Enable
|       (Done)    |                | SET   |
|-----------------|----------------|-------|
|       T4:0.TT   |                | B3:0/0|  <-- Reset Timer Enable
|       (Timing)  |                | RESET |
|-----------------|----------------|-------|
```

**Explanation:**
1.  Assume `B3:0/0` is initially FALSE.
2.  When `B3:0/0` becomes TRUE (e.g., from a start signal), Timer `T4:0` starts counting.
3.  While `T4:0` is timing (`T4:0.TT` is TRUE), the indicator light `O:0/1` is ON.
4.  When `T4:0` finishes counting (reaches preset `PRE=10`), its Done bit (`T4:0.DN`) becomes TRUE, and its Timing bit (`T4:0.TT`) becomes FALSE.
5.  When `T4:0.DN` becomes TRUE, it energizes the `SET` instruction for `B3:0/0`, keeping it ON. The output `O:0/1` turns OFF as `T4:0.TT` is now FALSE.
6.  When `T4:0.TT` becomes FALSE (after completion), it energizes the `RESET` instruction for `B3:0/0`, turning it OFF.
7.  When `B3:0/0` turns OFF, the timer `T4:0` is reset, and its `TT` bit becomes TRUE again, restarting the cycle.

**Answer:** The alternative ladder logic diagram represents the solution.

#### Problem 3: Product Counter

**Description:** Count the number of products passing on a conveyor belt using a proximity sensor. When 100 products are detected, activate a 'Batch Complete' light.

**Inputs:**
*   Proximity Sensor (detects product): `I:0/2` (Assume it pulses once per product)

**Outputs:**
*   'Batch Complete' Light: `O:0/2`

**Internal Elements:**
*   Up Counter (CTU): `C5:0`
    *   Preset Count (PRE): 100

**Solution:**

*   **Rung 1:** This rung uses an Up Counter to count the pulses from the proximity sensor.
    *   The `CU` input of the counter is connected to the proximity sensor.
    *   The `R` input (Reset) is connected to a condition to reset the counter for a new batch (e.g., a manual reset button, not specified here, so we'll assume it resets when the batch complete light turns off or upon a separate reset command). For simplicity, let's assume it resets automatically after activation or can be reset manually. A common practice is to reset the counter when the 'Batch Complete' light is reset or when a new batch starts.

```ladder
|-------| |-------| |-------[ CTU ]---|  <-- Up Counter
|       I:0/2     | C5:0           |       |
|       Sensor    | PRE=100        |       |
|                 | ACC=0          |       |
|-----------------|----------------|-------|
|       C5:0.DN   |                | O:0/2 |  <-- Batch Complete Light
|       (Done)    |                |       |
|-----------------|----------------|-------|
|       (Manual Reset Button - e.g. I:0/3) | C5:0 | Reset Input |
|-----------------|----------------|-------|
```

**Simplified Solution without explicit reset:**

```ladder
|-------| |-------| |-------[ CTU ]---|  <-- Up Counter
|       I:0/2     | C5:0           |       |
|       Sensor    | PRE=100        |       |
|                 | ACC=0          |       |
|-----------------|----------------|-------|
|       C5:0.DN   |                | O:0/2 |  <-- Batch Complete Light
|       (Done)    |                |       |
|-----------------|----------------|-------|
```

**Explanation:**
1.  Each time the proximity sensor (`I:0/2`) detects a product, it sends a pulse to the `CU` (Count Up) input of counter `C5:0`.
2.  The counter `C5:0` increments its accumulated value (`ACC`) with each pulse.
3.  When the accumulated value (`ACC`) reaches the preset value (`PRE=100`), the counter's Done bit (`C5:0.DN`) becomes TRUE.
4.  The Done bit (`C5:0.DN`) is then used to energize the 'Batch Complete' light (`O:0/2`).
5.  **To restart the counting:** A reset input (e.g., a pushbutton `I:0/3` connected to the counter's `RES` input) would be needed to reset `C5:0.ACC` to 0 and `C5:0.DN` to FALSE, allowing the counting of the next batch.

**Answer:** The ladder logic diagram above represents the solution, assuming a manual reset is implemented separately or the PLC resets counters when their output logic is broken.

---

### 5. Relation to Course Outcomes

*   **CO1: CNC programming, select appropriate tooling and parameters.**
    *   PLCs are integral to CNC machines. Understanding ladder logic helps in comprehending how CNC control systems manage machine functions, axis movements (though often handled by specialized CNC controllers), tool changes, and coolant activation based on programmed sequences. Input/output devices like limit switches and encoders are critical for CNC feedback.
*   **CO2: To categorize the various non-traditional material removal processes based on energy sources and mechanisms employed.**
    *   While not directly about non-traditional processes, PLCs are used to automate and control the energy sources (e.g., laser power, EDM current) and mechanisms (e.g., electrode feed, coolant flow) involved in these processes. Understanding PLC control allows for the automation of process parameter adjustments and sequence management.
*   **CO3: Analyze the processes and evaluate the role of each process parameter during the micromachining of various advanced material removal processes.**
    *   PLCs are used to monitor and control critical process parameters like spindle speed, feed rate, depth of cut, and coolant flow. Ladder logic can implement logic for adaptive control, where parameters are adjusted based on sensor feedback (e.g., cutting force, vibration).
*   **CO4: Explain the processes used in additive manufacturing for a range of materials and applications.**
    *   As mentioned earlier, PLCs are the backbone of most additive manufacturing machines. They control the precise movement of the build platform, the deposition of materials (e.g., powder bed leveling, filament extrusion, droplet control), laser/electron beam scanning patterns, and thermal management systems. Ladder logic programs dictate the sequence of operations for building a 3D object layer by layer.

---

### 6. Important Points to Remember

*   **PLC Scan Cycle:** Inputs -> Program Execution -> Outputs. Understanding this cycle is key to diagnosing issues.
*   **NO vs. NC:** Always be mindful of whether a contact/switch is normally open or normally closed.
*   **Latch/Seal-in Circuits:** Essential for maintaining output states after the initial trigger is removed.
*   **Timers and Counters:** Fundamental building blocks for sequential control and event counting.
*   **Addressing:** Correct addressing of I/O and internal memory is critical for program functionality.
*   **Ladder Logic is Boolean:** Each rung evaluates to either TRUE or FALSE.
*   **Safety First:** Emergency stop buttons are typically wired to directly interrupt power to machinery, often bypassing the PLC for immediate shutdown.

---

### Practice Questions

1.  **Question:** Describe the role of the CPU in a PLC. (Knowledge Level: K2)
    *   **Answer:** The CPU (Central Processing Unit) is the brain of the PLC. It reads the user program from memory, scans the status of input devices, performs logical operations based on the program, and sends control signals to output devices. It manages the overall operation of the PLC system.

2.  **Question:** Differentiate between inductive and capacitive proximity sensors. (Knowledge Level: K2)
    *   **Answer:**
        *   **Inductive Proximity Sensors:** Detect only metallic objects by generating an electromagnetic field and sensing changes in inductance when a metal object enters the field.
        *   **Capacitive Proximity Sensors:** Can detect both metallic and non-metallic objects (including liquids, powders, plastics) by sensing changes in capacitance caused by an object entering the sensor's electrostatic field.

3.  **Question:** Write the ladder logic for a simple system where a motor (`O:0/5`) turns ON when a sensor (`I:0/6`) detects an object, and turns OFF when another sensor (`I:0/7`) detects the object leaving. (Knowledge Level: K3)
    *   **Answer:**
        ```ladder
        |-------| |-------| |------( )---|
        |       I:0/6     |         | O:0/5 |  <-- Motor Output
        |       Sensor 1  |         |       |
        |-------|/|-------|         |       |
        |       I:0/7     |         |       |
        |       Sensor 2  |         |       |
        |-------| |-------|         |       |
        ```
        *Explanation:* The motor turns ON when `I:0/6` is TRUE (object detected) AND `I:0/7` is FALSE (object not leaving). It turns OFF when `I:0/7` becomes TRUE (object leaving), breaking the rung.

4.  **Question:** Explain the function of an "On-Delay Timer" (TON) in ladder logic and provide a scenario where it would be used. (Knowledge Level: K2)
    *   **Answer:** An On-Delay Timer (TON) starts accumulating time when its input rung becomes TRUE. The output contact (`.DN` bit) of the timer becomes TRUE only after the accumulated time (`.ACC`) reaches the preset time (`.PRE`).
    *   *Scenario:* Used to delay the start of a critical process. For example, after pressing a 'Start' button, a delay of 5 seconds might be implemented using a TON timer before a pump is activated to allow initial system checks or fill a reservoir.

5.  **Question:** A conveyor belt needs to transport 50 items to a collection point. Use a counter to track the items. When 50 items have passed, activate a "Conveyor Stop" output (`O:0/8`). Assume a sensor (`I:0/9`) pulses once for each item. (Knowledge Level: K3)
    *   **Answer:**
        ```ladder
        |-------| |-------| |-------[ CTU ]---|  <-- Up Counter
        |       I:0/9     | C5:1           |       |
        |       Sensor    | PRE=50         |       |
        |                 | ACC=0          |       |
        |-----------------|----------------|-------|
        |       C5:1.DN   |                | O:0/8 |  <-- Conveyor Stop
        |       (Done)    |                |       |
        |-----------------|----------------|-------|
        ```
        *Explanation:* The counter `C5:1` will count pulses from `I:0/9`. When 50 pulses have been counted, `C5:1.DN` becomes TRUE, activating the "Conveyor Stop" output `O:0/8`. A reset mechanism (not shown) would be needed to reset the counter for the next batch.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
