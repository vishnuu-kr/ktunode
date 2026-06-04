---
title: "Basic PLC Programming: Programming ON/OFF Inputs"
subject: "INSTRUMENTATION"
module: "Module 4: PLC Programming"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5ca"
status: "completed"
scrapedAt: "2026-05-23T17:49:29.620Z"
---
# INSTRUMENTATION: Module 4: PLC Programming

## Topic: Basic PLC Programming: Programming ON/OFF Inputs

---

### **Introduction**

This module focuses on the fundamental aspects of Programmable Logic Controller (PLC) programming, specifically addressing how to handle ON/OFF inputs. Understanding ON/OFF inputs is crucial for basic PLC control applications, as most industrial processes involve discrete signals that represent the presence or absence of a condition (e.g., a button pressed, a limit switch activated).

---

### **1. Understanding PLC Inputs**

#### **1.1 What are PLC Inputs?**

*   **Definition:** PLC inputs are the points where external devices send signals to the PLC. These signals represent the state of a physical process.
*   **Types of Inputs:**
    *   **Digital/Discrete Inputs:** These inputs are either ON (1, TRUE, High) or OFF (0, FALSE, Low). They represent binary states. Examples include pushbuttons, toggle switches, limit switches, proximity sensors, and float switches.
    *   **Analog Inputs:** These inputs represent a range of continuous values, such as temperature, pressure, or flow rate. (While this topic focuses on ON/OFF, it's important to acknowledge analog inputs exist.)

#### **1.2 How PLCs Read Inputs**

*   **Input Modules:** PLCs use input modules to interface with external devices. These modules convert the voltage/current signals from the field devices into a format the PLC's processor can understand.
*   **Isolation:** Input modules typically provide electrical isolation between the field devices and the PLC's internal circuitry to protect the processor from voltage spikes or ground loops. (Refer to Doebelin's Measurement Systems, Chapter 14: Industrial Instrumentation, for general principles of industrial signal handling.)
*   **Sourcing vs. Sinking Inputs:**
    *   **Sourcing Input:** The input module *supplies* power to the sensor/switch. The sensor/switch connects the input point to ground when activated.
    *   **Sinking Input:** The input module *accepts* current from the sensor/switch. The sensor/switch connects the input point to a positive voltage when activated.
    *   **Importance:** Proper wiring configuration (sourcing or sinking) is critical for correct input detection. (Hackworth & Hackworth, Chapter 3: PLC Hardware Configuration, discusses input module types and wiring.)

#### **1.3 Input Addressing**

*   **Concept:** Each input point on a PLC is assigned a unique address. This address is used in the PLC program to reference the state of that input.
*   **Common Addressing Schemes:**
    *   **Allen-Bradley (Rockwell Automation):** `I:0/0`, `I:0/1`, etc., or `IB0.0`, `IB0.1`, etc.
    *   **Siemens:** `I 0.0`, `I 0.1`, etc.
    *   **Modicon:** `0.00`, `0.01`, etc.
    *   **Generic:** `Input_1`, `Start_Button`, etc. (User-defined symbolic addressing is common in modern PLCs.)
*   **Mapping:** The physical input terminals on the PLC rack are mapped to these logical addresses.

---

### **2. PLC Programming Languages for ON/OFF Inputs**

*   **IEC 61131-3:** This international standard defines several PLC programming languages, two of which are highly relevant for ON/OFF inputs:
    *   **Ladder Logic (LD):** Mimics electrical relay logic diagrams. It's the most widely used language for discrete control.
    *   **Function Block Diagram (FBD):** Uses graphical blocks to represent functions and their interconnections.
    *   **Structured Text (ST):** A high-level, text-based language similar to Pascal or C.
    *   **Instruction List (IL):** A low-level, assembly-like language.
    *   **Sequential Function Chart (SFC):** For structured sequential control.

#### **2.1 Ladder Logic (LD) - The Foundation**

*   **Core Concept:** Ladder logic consists of "rungs," where each rung represents a logical operation.
*   **Elements of a Ladder Rung:**
    *   **Power Rails:** Vertical lines representing the "hot" and "neutral" sides of the electrical circuit.
    *   **Contacts:** Represent inputs. They can be normally open (NO) or normally closed (NC).
        *   **Normally Open (NO) Contact:** Appears as two parallel vertical lines. It closes (conducts) when the input is ON.
        *   **Normally Closed (NC) Contact:** Appears as two parallel vertical lines with a slash through them. It closes (conducts) when the input is OFF and opens when the input is ON.
    *   **Coils:** Represent outputs. When the logic leading to a coil is TRUE, the output turns ON.
    *   **Rungs:** Horizontal lines connecting the power rails. Logic is evaluated from left to right.

#### **2.2 Key Ladder Logic Instructions for ON/OFF Inputs**

*   **XIC (Examine If Closed) / Normally Open Contact:**
    *   **Symbol:** ` --| |--- `
    *   **Function:** When the associated input (or internal bit) is ON (TRUE), this contact becomes conductive, allowing power to flow to the right.
    *   **Purpose:** Detects when an input is ON.
*   **XIO (Examine If Open) / Normally Closed Contact:**
    *   **Symbol:** ` --|/|--- `
    *   **Function:** When the associated input (or internal bit) is OFF (FALSE), this contact becomes conductive, allowing power to flow to the right.
    *   **Purpose:** Detects when an input is OFF or monitors a fault condition.
*   **OTE (Output Energize) / Coil:**
    *   **Symbol:** ` ---( )--- `
    *   **Function:** When the logic to the left of the coil is TRUE, the output associated with the coil is energized (turned ON).

**(Refer to Hackworth & Hackworth, Chapter 5: Ladder Logic Programming, for detailed explanation and examples of these instructions.)**
**(Webb & Reis, Chapter 6: Ladder Logic, provides extensive coverage of LD fundamentals.)**

---

### **3. Basic Programming Examples for ON/OFF Inputs**

**Scenario 1: Simple Start/Stop Control**

*   **Objective:** Use a Start pushbutton (NO) and a Stop pushbutton (NC) to control a motor (output).
*   **Inputs:**
    *   `I:0/0` (Start Button - NO)
    *   `I:0/1` (Stop Button - NC)
*   **Output:**
    *   `O:0/0` (Motor Output)

**Ladder Logic:**

```ladder
  +----[ XIC I:0/0 ]----+----[ XIO I:0/1 ]----+----[ OTE O:0/0 ]--+
  |                     |                     |                     |
  +---------------------+---------------------+---------------------+
```

**Explanation:**

1.  The `XIC I:0/0` contact is closed when the Start button is pressed (input ON).
2.  The `XIO I:0/1` contact is closed when the Stop button is NOT pressed (input OFF).
3.  For the Motor output `O:0/0` to turn ON, BOTH the Start button must be pressed AND the Stop button must NOT be pressed.
4.  When the Start button is released, the `I:0/0` contact will open, and the motor will stop.

**Enhancement: Latching/Sealing the Motor**

*   **Objective:** Keep the motor ON even after the Start button is released. This requires a "seal-in" or "latching" circuit.
*   **New Element:** A normally open contact of the motor output itself (`XIC O:0/0`) wired in parallel with the Start button.

**Ladder Logic (Latching):**

```ladder
  +----[ XIC I:0/0 ]----+----[ XIO I:0/1 ]----+----[ OTE O:0/0 ]--+
  |                     |                     |                     |
  +----[ XIC O:0/0 ]----+                     |                     |
```

**Explanation:**

1.  When the Start button (`I:0/0`) is pressed, `I:0/0` closes, `I:0/1` is closed (assuming Stop isn't pressed), and the Motor output `O:0/0` turns ON.
2.  Once `O:0/0` is ON, its `XIC O:0/0` contact closes.
3.  Now, even if the Start button is released (opening `I:0/0`), the `XIC O:0/0` contact provides a path for the logic to remain true, keeping the motor ON.
4.  The motor will only stop when the Stop button (`I:0/1`) is pressed, which opens the `XIO I:0/1` contact, breaking the logic path to the `OTE O:0/0` coil.

**(This latching concept is fundamental and well-covered in Webb & Reis, Chapter 6.4: Latching and Unlatching Outputs.)**

---

**Scenario 2: Monitoring a Limit Switch**

*   **Objective:** Activate a warning light when a machine guard is open.
*   **Inputs:**
    *   `I:0/2` (Guard Limit Switch - NC, normally closed when guard is closed)
*   **Output:**
    *   `O:0/1` (Warning Light)

**Ladder Logic:**

```ladder
  +----[ XIO I:0/2 ]----+----[ OTE O:0/1 ]--+
  |                     |                     |
  +---------------------+---------------------+
```

**Explanation:**

1.  The limit switch is wired as Normally Closed (NC). This means `I:0/2` is ON (TRUE) when the guard is closed and OFF (FALSE) when the guard is open.
2.  The `XIO I:0/2` instruction monitors the input for an OFF state.
3.  Therefore, when the guard is opened, `I:0/2` becomes OFF, the `XIO I:0/2` contact closes, and the Warning Light output `O:0/1` turns ON.

**(This demonstrates the use of NC contacts for monitoring safe states or detecting faults. Kalsi's Electronic Instrumentation, Chapter 1: Measurement and Control Systems, discusses the importance of feedback and sensor states in control loops.)**

---

### **4. Important Points to Remember**

*   **Input Wiring:** Always verify the sourcing/sinking configuration of your PLC's input modules and wire your field devices accordingly. Incorrect wiring will lead to the PLC not detecting the input correctly.
*   **Contact Types:** Understand the difference between Normally Open (NO) and Normally Closed (NC) contacts and use them appropriately. NC contacts are often used for safety interlocks and emergency stops.
*   **Address Consistency:** Ensure you use the correct input addresses in your program that correspond to the physical wiring.
*   **Programming Software:** Familiarize yourself with the specific programming software (e.g., RSLogix, TIA Portal) used for your PLC. Each software has its unique interface and nuances.
*   **Testing:** Thoroughly test your logic with the actual hardware to confirm it functions as intended.
*   **Documentation:** Properly document your ladder logic with comments explaining the purpose of each rung and instruction.

---

### **5. Practice Questions and Exercises**

**Question 1:**

A PLC has an input module with 8 digital inputs, addressed from `I:0/0` to `I:0/7`. You are using a normally open pushbutton connected to terminal `I:0/1` to start a process and a normally closed limit switch connected to terminal `I:0/2` to stop the process. You want to control an output `O:0/0` which represents the process running. Draw the ladder logic to control this process with a seal-in circuit.

**Answer 1:**

```ladder
  +----[ XIC I:0/1 ]----+----[ XIO I:0/2 ]----+----[ OTE O:0/0 ]--+
  |                     |                     |                     |
  +----[ XIC O:0/0 ]----+                     |                     |
```

**Question 2:**

You have a sensor that signals a "low fluid level" by closing a contact when the level is low. This sensor is connected to PLC input `I:0/3`. You want to turn ON an indicator light `O:0/1` whenever the fluid level is low. What type of contact (NO or NC) would you use in your ladder logic for input `I:0/3`? Write the ladder logic rung.

**Answer 2:**

You would use a **Normally Open (NO)** contact for input `I:0/3` because the sensor closes its contact *when the level is low*.

**Ladder Logic Rung:**

```ladder
  +----[ XIC I:0/3 ]----+----[ OTE O:0/1 ]--+
  |                     |                     |
  +---------------------+---------------------+
```

**Question 3:**

Explain the difference between a "sourcing" and "sinking" PLC input module.

**Answer 3:**

*   **Sourcing Input Module:** The input module *supplies* the voltage to the external device. When the device is activated, it connects the input terminal to ground (0V). The module detects the absence of voltage as the ON state.
*   **Sinking Input Module:** The input module *accepts* current from the external device. When the device is activated, it connects the input terminal to a positive voltage source. The module detects the flow of current as the ON state.

---

### **6. Alignment with Course Outcomes**

*   **CO1: Interpret the basic concepts of measuring instruments, its classification, and selection criteria. (Knowledge Level: K2)**
    *   This topic contributes by introducing inputs as the first stage of measurement/control in an industrial process. Understanding how these discrete signals are read and processed is foundational to interpreting overall system behavior. The concept of NC/NO switches relates to how sensors (measuring instruments) present their state.
*   **CO2: Outline the principle, construction and working of transducers for measuring physical variables. (Knowledge Level: K2)**
    *   While this topic focuses on programming, it directly uses signals from transducers (like limit switches, pushbuttons). Understanding how these transducers operate (e.g., closing a contact when a physical variable changes) is implicit. The choice of NC/NO wiring for these transducers is influenced by their operational principles.
*   **CO3: Comprehend the principle, construction and working of various electronic measuring instruments. (Knowledge Level: K2)**
    *   This relates to the input modules of the PLC, which are electronic instruments responsible for conditioning and reading the signals from the field. Their internal workings (isolation, voltage/current sensing) are key.
*   **CO4: Apply PLC programming for selected industrial processes. (Knowledge Level: K3)**
    *   This topic directly addresses **CO4** by providing the fundamental building blocks for PLC programming. The examples of start/stop control and limit switch monitoring are simple industrial processes where ON/OFF input programming is essential. Students learn to translate process requirements into functional ladder logic.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **7. Textbook and Reference Material Integration**

*   **Doebelin's Measurement Systems:** Provides the broader context of industrial instrumentation and signal conditioning, relevant to understanding how inputs are handled at a fundamental level. (Chapter 14: Industrial Instrumentation).
*   **Kalsi's Electronic Instrumentation:** Offers insights into electronic circuits and measurement principles, applicable to understanding the design and function of PLC input modules. (Chapter 1: Measurement and Control Systems).
*   **Hackworth & Hackworth (PLC Programming Methods and Applications):** Serves as a primary resource for PLC hardware, input/output modules, and detailed ladder logic programming techniques, including contacts, coils, and common instructions. (Chapters 3 & 5).
*   **Sawhney AK (Electrical and Electronics Measurements and Instrumentation):** Offers a comprehensive view of measurement principles, which can inform the understanding of sensor signal generation and conditioning.
*   **Webb & Reis (Programmable Logic Controllers - Principles and applications):** A key reference for fundamental PLC concepts, ladder logic structures (especially latching circuits), and practical application examples. (Chapter 6: Ladder Logic).

---