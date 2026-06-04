---
title: "PLC functions with BITS."
subject: "INSTRUMENTATION"
module: "Module 4: PLC Programming"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5d1"
status: "completed"
scrapedAt: "2026-05-23T17:49:34.601Z"
---
# Instrumentation: Module 4 - PLC Programming

## Topic: PLC Functions with BITS

This module delves into the foundational elements of Programmable Logic Controller (PLC) programming, specifically focusing on how to utilize bits for various functions. Understanding bit manipulation is crucial for creating logic that controls industrial processes, aligning with **Course Outcome 4 (CO4): Apply PLC programming for selected industrial processes** at a **Knowledge Level K3**.

---

### 1. Introduction to PLCs and Bits

#### 1.1 What is a PLC?

A Programmable Logic Controller (PLC) is a ruggedized digital computer used for automating electromechanical processes, such as control of machinery on factory assembly lines, amusement rides, or lighting fixtures. Unlike general-purpose computers, PLCs are designed for industrial environments and are specifically programmed to control manufacturing processes.

*   **Key Features:**
    *   Reliability in harsh environments (temperature, dust, moisture).
    *   Real-time operation.
    *   Modular design for flexibility.
    *   Ease of programming and troubleshooting.

*   **Textbook Reference:**
    *   **Hackworth & Hackworth (3/e, 2022):** Chapter 1 - "Introduction to Programmable Logic Controllers" would cover the basic definition and applications of PLCs.
    *   **Webb & Reis (5/e, 2015):** Chapter 1 - "The PLC Story" provides a historical perspective and basic definition.

#### 1.2 Understanding Bits in PLC Programming

In PLC programming, a **bit** is the smallest unit of data. It can represent one of two states: **ON (1)** or **OFF (0)**. These states directly correspond to the physical world:

*   **ON (1):** A switch is closed, a sensor is active, a motor is running.
*   **OFF (0):** A switch is open, a sensor is inactive, a motor is stopped.

Bits are used to represent:

*   **Inputs:** Status of physical devices connected to the PLC (e.g., limit switches, pushbuttons, sensors).
*   **Outputs:** Control signals sent from the PLC to physical devices (e.g., solenoids, motor starters, indicator lights).
*   **Internal Relays (Memory Bits):** Used for internal logic within the program, acting as flags or intermediate states.

*   **Key Concept:** Every input, output, and internal memory location in a PLC is addressed and can be treated as a bit.

*   **Textbook Reference:**
    *   **Hackworth & Hackworth (3/e, 2022):** Chapter 2 - "PLC Hardware" would discuss the I/O structure, where bits are fundamental.
    *   **Webb & Reis (5/e, 2015):** Chapter 2 - "Hardware and Software" explains the concept of I/O addressing, where bits are the basic units.

---

### 2. PLC Addressing and Data Types

#### 2.1 PLC Addressing Schemes

PLCs use specific addressing schemes to identify inputs, outputs, and internal memory. Common schemes include:

*   **Input Addresses:** Usually prefixed with `I:` or `IB:`, `IW:`, `IL:` followed by a slot and then a bit number (e.g., `I:1/0` or `IB0.0`).
*   **Output Addresses:** Usually prefixed with `O:` or `OB:`, `OW:`, `OL:` followed by a slot and then a bit number (e.g., `O:2/1` or `OB1.1`).
*   **Internal Relays/Memory Bits:** Often prefixed with `B:` (Boolean), `M:`, or similar, followed by an address (e.g., `B3:0/0` or `M0.0`).
*   **Timers and Counters:** Have dedicated addresses and are often treated as multi-bit data types (words or double words), but their individual bits can be accessed.

**Example (Allen-Bradley SLC/MicroLogix style):**
*   `I:1/0`: Input module in slot 1, terminal 0.
*   `O:2/1`: Output module in slot 2, terminal 1.
*   `B3:0/5`: Internal bit address in bit file 3, word 0, bit 5.

*   **Important Point:** The exact addressing scheme varies significantly between PLC manufacturers (e.g., Siemens, Allen-Bradley, Omron, GE Fanuc). Always consult the PLC manufacturer's documentation.

#### 2.2 Basic Data Types

While this topic focuses on bits, understanding them in context with other data types is important:

*   **Boolean (Bit):** ON/OFF, 1/0.
*   **Integer (Word):** A 16-bit binary number, representing values from 0 to 65,535 (unsigned) or -32,768 to +32,767 (signed).
*   **Double Integer (Double Word):** A 32-bit binary number.
*   **Floating Point:** Numbers with decimal points.

*   **Textbook Reference:**
    *   **Hackworth & Hackworth (3/e, 2022):** Chapter 3 - "PLC Data Types" would elaborate on these.
    *   **Webb & Reis (5/e, 2015):** Chapter 3 - "Data Representation" discusses the various data types used.

---

### 3. PLC Programming Instructions Using Bits

The core of PLC programming involves using instructions that operate on bits. These instructions are typically organized into various programming languages, with Ladder Logic being the most common.

#### 3.1 Basic Logic Gates (Contacts)

These instructions represent conditions based on the state of a bit.

*   **XIC (Examine If Closed) / Normally Open (NO) Contact:**
    *   **Function:** True (conducts power) if the addressed bit is ON (1). False (does not conduct) if the bit is OFF (0).
    *   **Symbol:** A gap with two vertical lines on either side, representing an open switch.
    *   **Example:** `XIC I:1/0` - If input `I:1/0` is ON, this rung becomes true.

*   **XIO (Examine If Open) / Normally Closed (NC) Contact:**
    *   **Function:** True (conducts power) if the addressed bit is OFF (0). False (does not conduct) if the bit is ON (1).
    *   **Symbol:** A gap with two vertical lines on either side, with a diagonal slash through it, representing a closed switch.
    *   **Example:** `XIO O:2/1` - If output `O:2/1` is OFF, this rung becomes true.

#### 3.2 Output Instructions (Coils)

These instructions control the state of an addressed bit, typically connected to a PLC output.

*   **OTE (Output Energize) / Coil:**
    *   **Function:** Turns the addressed bit ON (1) if the rung leading to it is true. If the rung is false, the bit is turned OFF (0).
    *   **Symbol:** A circle.
    *   **Example:** `OTE O:2/0` - If the rung leading to this coil is true, output `O:2/0` will turn ON.

#### 3.3 Basic Logic Combinations

Combining these instructions creates logical functions.

*   **Series (AND Logic):**
    *   **Function:** The rung is true only if *all* contacts in series are true.
    *   **Example:**
        ```
        |--[ XIC I:1/0 ]--+--[ XIC I:1/1 ]--+--[ OTE O:2/0 ]--|
        ```
        Output `O:2/0` will turn ON only if both `I:1/0` AND `I:1/1` are ON.

*   **Parallel (OR Logic):**
    *   **Function:** The rung is true if *any* of the parallel branches are true.
    *   **Example:**
        ```
        |--[ XIC I:1/0 ]------+--[ OTE O:2/0 ]--|
        |                    |
        +--[ XIC I:1/1 ]------+
        ```
        Output `O:2/0` will turn ON if `I:1/0` OR `I:1/1` (or both) are ON.

#### 3.4 Latched and Unlatched Outputs (Set/Reset)

These instructions are used to create memory or state retention.

*   **OTL (Output Latch) / SET:**
    *   **Function:** Turns the addressed bit ON (1) if the rung leading to it is true. The bit will remain ON even if the rung becomes false. It can only be turned OFF by a separate Unlatch instruction.
    *   **Symbol:** A coil with an 'L' inside.
    *   **Example:**
        ```
        |--[ XIC I:1/0 ]--[ OTL O:2/0 ]--|
        ```
        If `I:1/0` is ON, `O:2/0` is latched ON. `O:2/0` will stay ON until an unlatch instruction is executed.

*   **OTU (Output Unlatch) / RESET:**
    *   **Function:** Turns the addressed bit OFF (0) if the rung leading to it is true. The bit will remain OFF even if the rung becomes false. It can only be turned ON by a separate Latch instruction.
    *   **Symbol:** A coil with an 'U' inside.
    *   **Example:**
        ```
        |--[ XIC I:1/1 ]--[ OTU O:2/0 ]--|
        ```
        If `I:1/1` is ON, `O:2/0` (which might have been latched ON) will be unlatched OFF.

*   **Important Point:** Latching is crucial for maintaining a state, like an alarm indicator or a motor running after a momentary start button is released.

*   **Textbook Reference:**
    *   **Hackworth & Hackworth (3/e, 2022):** Chapter 4 - "Basic PLC Programming" covers these fundamental instructions.
    *   **Webb & Reis (5/e, 2015):** Chapter 4 - "Ladder Logic Programming" details the use of contacts, coils, and latching.

---

### 4. Bit Manipulation Functions

Beyond basic logic, PLCs offer instructions to manipulate individual bits within memory words or to perform bitwise operations.

#### 4.1 Bit Shift Instructions

These instructions move bits within a data word or block of memory.

*   **BSL (Bit Shift Left):**
    *   **Function:** Shifts bits to the left by a specified number of positions. The leftmost bit is shifted out, and a specified bit (often the bit addressed by the "Control" element) is shifted into the rightmost position.
    *   **Common Use:** Creating sequences, moving data, or implementing shift register functions.

*   **BSR (Bit Shift Right):**
    *   **Function:** Shifts bits to the right. The rightmost bit is shifted out, and a specified bit is shifted into the leftmost position.
    *   **Common Use:** Similar to BSL but in the opposite direction.

*   **Example (Conceptual):**
    Suppose you have a word `N7:0` with bits `N7:0/0` through `N7:0/15`.
    If `N7:0` is `0000 0000 0000 0011` (binary).
    A `BSL N7:0` by 2 positions, with `N7:0/0` (which is 1) shifting into the rightmost position, would result in `0000 0000 0011 0010` (binary).

*   **Textbook Reference:**
    *   **Hackworth & Hackworth (3/e, 2022):** Chapter 7 - "Advanced PLC Instructions" might cover bit shift instructions.
    *   **Webb & Reis (5/e, 2015):** Chapter 7 - "Advanced PLC Instructions" would likely include details on these.

#### 4.2 Bit Test and Set/Reset Instructions

These instructions allow checking and modifying individual bits without affecting the entire word.

*   **BTST (Bit Test):**
    *   **Function:** Checks if a specific bit in a source data word is ON or OFF. The result is often stored in a status bit or a separate bit in a destination word.
    *   **Example:** `BTST Source:0/5 Dest_Bit:0` - Checks bit 5 of `Source:0`. If it's ON, `Dest_Bit:0` will be set to ON.

*   **BTS (Bit Set):**
    *   **Function:** Sets a specific bit in a destination word to ON (1) without affecting other bits.
    *   **Example:** `BTS Dest_Word:0/3` - Sets bit 3 of `Dest_Word:0` to ON.

*   **BTR (Bit Reset):**
    *   **Function:** Resets a specific bit in a destination word to OFF (0) without affecting other bits.
    *   **Example:** `BTR Dest_Word:0/3` - Sets bit 3 of `Dest_Word:0` to OFF.

*   **Important Point:** These instructions are efficient for managing flags or statuses within larger data blocks.

*   **Textbook Reference:**
    *   **Hackworth & Hackworth (3/e, 2022):** Chapter 7 - "Advanced PLC Instructions" would be a likely place for these.

#### 4.3 Bitwise Logical Operations (AND, OR, XOR, NOT)

These operations perform logical functions on corresponding bits of two data words.

*   **AND (Bitwise AND):**
    *   **Function:** For each bit position, the result is 1 only if both corresponding bits in the source operands are 1.
    *   **Example:**
        `Source A: 1011 0101`
        `Source B: 1100 1010`
        `Result:   1000 0000`

*   **OR (Bitwise OR):**
    *   **Function:** For each bit position, the result is 1 if either corresponding bit in the source operands is 1.
    *   **Example:**
        `Source A: 1011 0101`
        `Source B: 1100 1010`
        `Result:   1111 1111`

*   **XOR (Exclusive OR):**
    *   **Function:** For each bit position, the result is 1 if the corresponding bits in the source operands are different.
    *   **Example:**
        `Source A: 1011 0101`
        `Source B: 1100 1010`
        `Result:   0111 1111`

*   **NOT (Bitwise Complement):**
    *   **Function:** Inverts each bit of a single operand (0 becomes 1, 1 becomes 0).
    *   **Example:**
        `Source A: 1011 0101`
        `Result:   0100 1010`

*   **Common PLC Instructions:**
    *   `AND` (Bitwise AND)
    *   `OR` (Bitwise OR)
    *   `XOR` (Bitwise XOR)
    *   `NOT` (often applied to a single operand)

*   **Textbook Reference:**
    *   **Hackworth & Hackworth (3/e, 2022):** Chapter 7 - "Advanced PLC Instructions" would detail these bitwise operations.
    *   **Webb & Reis (5/e, 2015):** Chapter 7 - "Advanced PLC Instructions" covers bitwise operations.

---

### 5. Practical Applications and Examples

Let's illustrate how bit functions are used to control industrial processes, directly addressing **CO4**.

#### 5.1 Motor Control with Start/Stop Pushbuttons

*   **Scenario:** Start a motor using a momentary pushbutton (Start) and stop it using another momentary pushbutton (Stop). The motor should stay running until the Stop button is pressed.

*   **Inputs:**
    *   `I:1/0` - Start Pushbutton (NO)
    *   `I:1/1` - Stop Pushbutton (NC)

*   **Output:**
    *   `O:2/0` - Motor Contactor

*   **Logic:** We need a latching mechanism. The Start button will energize the motor output. The motor output itself will then provide a "holding contact" (a normally open contact associated with the motor output) in parallel with the Start button. The Stop button (normally closed) will be in series with the Start button and the holding contact.

*   **Ladder Logic:**
    ```
    |--[ XIC I:1/0 ]--+--[ XIC I:1/1 ]--[ OTE O:2/0 ]--|  // Main motor run logic
    |                 |                             |
    +--[ XIC O:2/0 ]--+                             |  // Holding contact
    ```
    *Correction*: The Stop button is normally closed, so it should be `XIO` or `XIC` depending on how it's wired. Assuming a typical NC Stop button that opens the circuit when pressed:

    ```
    |--[ XIC I:1/0 ]--+--[ XIO I:1/1 ]--[ OTE O:2/0 ]--|  // Main motor run logic
    |                 |                             |
    +--[ XIC O:2/0 ]--+                             |  // Holding contact
    ```
    In this corrected logic:
    *   When `I:1/0` (Start) is pressed, the rung becomes true.
    *   If `I:1/1` (Stop) is NOT pressed (meaning it's closed, so `XIO I:1/1` is true), `O:2/0` (Motor) turns ON.
    *   Once `O:2/0` is ON, its parallel contact (`XIC O:2/0`) becomes true, latching the motor ON.
    *   When `I:1/1` (Stop) is pressed, `XIO I:1/1` becomes false, breaking the rung and turning the motor OFF. The holding contact (`XIC O:2/0`) also goes false, and the motor stays OFF until the Start button is pressed again.

#### 5.2 Using Internal Bits as Flags

*   **Scenario:** Implement a simple sequence where an alarm light (`O:2/1`) turns ON if a critical sensor (`I:1/2`) is active for more than 5 seconds, but only if a system enable bit (`B3:0/0`) is also ON.

*   **Inputs:**
    *   `I:1/2` - Critical Sensor (NO)
    *   `B3:0/0` - System Enable (Internal Bit)

*   **Outputs:**
    *   `O:2/1` - Alarm Light

*   **Internal Bits:**
    *   `B3:0/1` - Timer Done Bit

*   **Timer:**
    *   `T4:0` - Timer (e.g., ON-Delay Timer, Preset 50 for 5 seconds if Time Base is 0.1s)

*   **Ladder Logic:**
    ```
    |--[ XIC B3:0/0 ]--+--[ XIC I:1/2 ]--[ TON T4:0 ]--|  // Enable timer if sensor and system are ON
    |                 |                             |
    |                 +--[ T4:0/DN ]--[ OTE O:2/1 ]--|  // Turn alarm ON if timer is done
    ```
    Explanation:
    1.  The `TON` (Timer On-Delay) instruction is enabled (`XIC`) only when both `B3:0/0` (System Enable) and `I:1/2` (Critical Sensor) are ON.
    2.  The timer `T4:0` has a preset of 50, and assuming a time base of 0.1 seconds, it will count for 5 seconds.
    3.  When the timer reaches its preset, its `DN` (Done) bit (`T4:0/DN`) becomes true.
    4.  This `T4:0/DN` bit, in parallel with the original conditions, is used to turn ON the `O:2/1` (Alarm Light). This creates a sequence where the alarm is activated after a delay.

#### 5.3 Bitwise Operations for Status Monitoring

*   **Scenario:** Monitor the status of four separate indicator lights (`O:2/0` to `O:2/3`) and store their collective status in a single word (`N7:0`). Set bits in `N7:0` corresponding to the ON lights.

*   **Inputs/Outputs:**
    *   `O:2/0` - Light 1
    *   `O:2/1` - Light 2
    *   `O:2/2` - Light 3
    *   `O:2/3` - Light 4

*   **Destination Word:**
    *   `N7:0` - Status Word

*   **Ladder Logic (Simplified using OR):**
    *   This is often done with a series of OR operations to build the word, or some PLCs have specific instructions to copy bit states. A common approach to build `N7:0`:

    ```
    |--[ XIC O:2/0 ]--[ BTS N7:0/0 ]--|  // If O:2/0 is ON, set N7:0/0 to ON
    |--[ XIC O:2/1 ]--[ BTS N7:0/1 ]--|  // If O:2/1 is ON, set N7:0/1 to ON
    |--[ XIC O:2/2 ]--[ BTS N7:0/2 ]--|  // If O:2/2 is ON, set N7:0/2 to ON
    |--[ XIC O:2/3 ]--[ BTS N7:0/3 ]--|  // If O:2/3 is ON, set N7:0/3 to ON
    ```
    *   To clear `N7:0` before updating, you would typically use a `MOV` instruction to load `N7:0` with `0` at the start of the scan or when certain conditions are met.

    *   Alternatively, using bitwise OR:
        Let's assume we initialize `N7:0` to `0`.
        ```
        |--[ XIC O:2/0 ]--[ ADD N7:0, 0001 ]--[ MOV N7:0, N7:0 ]--|  // If O:2/0, add 1 to N7:0
        |--[ XIC O:2/1 ]--[ ADD N7:0, 0002 ]--[ MOV N7:0, N7:0 ]--|  // If O:2/1, add 2 to N7:0
        |--[ XIC O:2/2 ]--[ ADD N7:0, 0004 ]--[ MOV N7:0, N7:0 ]--|  // If O:2/2, add 4 to N7:0
        |--[ XIC O:2/3 ]--[ ADD N7:0, 0008 ]--[ MOV N7:0, N7:0 ]--|  // If O:2/3, add 8 to N7:0
        ```
        This `ADD` approach is a common way to set specific bits when the value of the bit directly corresponds to a power of 2 (0, 1, 2, 4, 8, 16, 32, etc.). The `MOV` is often required to update the destination if the `ADD` instruction doesn't inherently write back.

*   **Textbook Reference:**
    *   **Hackworth & Hackworth (3/e, 2022):** Chapter 5 - "PLC Application Examples" would provide such practical scenarios.
    *   **Webb & Reis (5/e, 2015):** Chapter 5 - "PLC Applications" would offer similar examples.

---

### 6. Important Points to Remember

*   **Manufacturer Specifics:** PLC addressing, instruction mnemonics, and software interfaces vary significantly between manufacturers (Allen-Bradley, Siemens, Omron, Mitsubishi, etc.). Always refer to the specific PLC's manual.
*   **Scan Time:** PLCs execute programs in a continuous loop called a "scan." Understanding the scan cycle is important for timing-critical applications.
*   **Error Handling:** Implement robust error detection and handling within your PLC programs.
*   **Documentation:** Thoroughly document your PLC programs with comments explaining the logic and addressing. This is crucial for maintenance and troubleshooting.
*   **I/O Modules:** Ensure that the physical inputs and outputs connected to the PLC are compatible with the PLC's I/O modules.
*   **Ladder Logic Fundamentals:** Master the use of NO contacts (XIC), NC contacts (XIO), and coils (OTE) as they form the basis of most PLC logic.
*   **Latching:** Understand when and how to use Latch (OTL) and Unlatch (OTU) instructions for memory and state retention.
*   **Bitwise Operations:** Utilize bitwise instructions (AND, OR, XOR, NOT, Shifts) for efficient data manipulation and status management.

---

### 7. Practice Questions and Exercises

**Question 1:**
Describe the function of an XIC (Examine If Closed) instruction in ladder logic. When would you use an XIC instruction?

**Answer:**
An XIC instruction checks if the addressed bit is in the ON state. It acts as a normally open contact. You would use it when you want a rung of logic to become true only if a corresponding physical input is active, a sensor is triggered, or an internal bit has been set to ON.

**Question 2:**
A process requires a pump to turn ON when either a "Start" button (input `I:0/1`) is pressed OR a "Level High" sensor (input `I:0/2`) is detected. The pump should remain ON until a "Stop" button (input `I:0/0`) is pressed. The pump is controlled by output `O:0/0`. Draw the ladder logic to implement this.

**Answer:**
```
// Rung 1: Pump Start/Stop Control
|--[ XIC I:0/1 ]--+--[ XIO I:0/0 ]--[ OTE O:0/0 ]--|  // Start button or
|                 |                             |  // Stop button (NC) controlling
+--[ XIC I:0/2 ]--+                             |  // Pump ON
                  |                             |
// Rung 2: Holding Contact for Pump
|--[ XIC O:0/0 ]-------------------[ OTE O:0/0 ]--|  // Holding contact for pump
```
*   **Explanation:**
    *   The `XIO I:0/0` is used because the Stop button is typically wired as Normally Closed. When pressed, it opens the circuit, making the `XIO` false.
    *   The start button (`XIC I:0/1`) and the level sensor (`XIC I:0/2`) are in parallel, so if either is true, the rung is energized.
    *   The `OTE O:0/0` (Pump ON) is controlled.
    *   The holding contact (`XIC O:0/0`) is in parallel with the `XIC I:0/1` to keep the pump ON after the Start button is released. The `XIO I:0/0` in series ensures that when the Stop button is pressed, the pump turns OFF.

**Question 3:**
What is the result of a bitwise XOR operation between `1100 1010` and `1010 0101`?

**Answer:**
Bitwise XOR returns 1 if the bits are different, and 0 if they are the same.

```
  1100 1010
^ 1010 0101
----------
  0110 1111
```
The result is `0110 1111`.

**Question 4:**
Explain the difference between OTL (Output Latch) and OTE (Output Energize).

**Answer:**
*   **OTE (Output Energize):** The addressed output bit is ON only as long as the rung leading to it is true. When the rung becomes false, the output bit is turned OFF. It's like a momentary contact.
*   **OTL (Output Latch):** The addressed output bit is turned ON when the rung leading to it is true. Once it's turned ON, it remains ON even if the rung becomes false. It requires a separate OTU (Output Unlatch) instruction to turn it OFF. This provides memory for the output state.

---

This concludes Module 4, Topic: PLC Functions with Bits. Understanding these fundamental bit operations is key to building functional and efficient PLC programs for various industrial applications, thereby supporting **CO4**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
