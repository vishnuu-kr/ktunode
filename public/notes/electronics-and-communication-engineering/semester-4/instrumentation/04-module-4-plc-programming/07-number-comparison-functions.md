---
title: "Number comparison functions"
subject: "INSTRUMENTATION"
module: "Module 4: PLC Programming"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5cf"
status: "completed"
scrapedAt: "2026-05-23T17:49:33.184Z"
---
# INSTRUMENTATION: Module 4: PLC Programming - Number Comparison Functions

---

## 1. Introduction to Number Comparison Functions in PLC Programming

Programmable Logic Controllers (PLCs) are the backbone of modern industrial automation. They execute logic based on inputs and internal states to control processes. A fundamental aspect of PLC control is the ability to compare numerical values. These comparisons are crucial for decision-making within the PLC program, allowing it to react to sensor readings, setpoints, timer values, counter values, and other numerical data.

Number comparison functions enable the PLC to determine the relationship between two numerical operands (registers, inputs, outputs, constants, etc.). This allows for the implementation of conditional logic, essential for control strategies.

---

## 2. Learning Outcomes Covered

This module section focuses on enabling the following learning outcomes:

*   **CO1: Interpret the basic concepts of measuring instruments, its classification, and selection criteria. (Knowledge Level: K2)**
    *   While this module focuses on PLC programming, understanding how PLC compare functions interact with sensor data (which are outputs of measuring instruments) indirectly relates to this outcome. The PLC uses the numerical output of a measuring instrument (e.g., temperature sensor, pressure transmitter) for comparison.
*   **CO2: Outline the principle, construction and working of transducers for measuring physical variables. (Knowledge Level: K2)**
    *   Similar to CO1, the numerical data processed by PLCs often originates from transducers. The PLC's comparison functions operate on this data, influencing control decisions based on physical variables measured by transducers.
*   **CO3: Comprehend the principle, construction and working of various electronic measuring instruments. (Knowledge Level: K2)**
    *   Again, the PLC's role is to process the output of electronic measuring instruments. The numerical values these instruments provide are inputs to PLC comparison functions.
*   **CO4: Apply PLC programming for selected industrial processes. (Knowledge Level: K3)**
    *   This is the **primary and most directly addressed** learning outcome. Number comparison functions are fundamental building blocks for applying PLC programming to control real-world industrial processes.

---

## 3. Key Concepts and Definitions

### 3.1. Operands

In PLC programming, operands are the data values that comparison instructions operate on. These can be:

*   **Input Registers:** Representing the state of physical inputs (e.g., sensor status, button presses).
*   **Output Registers:** Representing the state of physical outputs (e.g., motor on/off, valve open/close).
*   **Internal Memory Bits/Words:** Used for storing intermediate results, flags, or states.
*   **Timers:** Their current elapsed time values.
*   **Counters:** Their current accumulated values.
*   **Constants:** Fixed numerical values programmed directly into the logic.
*   **Data Registers/File Registers:** Memory locations used for storing numerical data.

### 3.2. Comparison Instructions

These are specific PLC instructions that perform a comparison between two operands and set an internal status bit (often called a "flag" or "condition bit") based on the result of the comparison.

### 3.3. Status Bits/Flags

After a comparison instruction is executed, a specific bit in the PLC's status register is set (to 1 or TRUE) if the comparison condition is met, and reset (to 0 or FALSE) if it is not. These status bits are then used in subsequent logic to control the program flow.

---

## 4. Types of Number Comparison Functions

Most PLC programming languages (e.g., Ladder Logic, Structured Text) provide a set of standard comparison instructions. The exact mnemonics might vary slightly between PLC manufacturers (e.g., Allen-Bradley, Siemens, Mitsubishi), but the functionality is generally consistent.

We will cover the most common types:

### 4.1. Equal To (EQU)

*   **Function:** Compares two operands and sets a status bit if they are equal.
*   **Syntax (example):** `EQU Operand1, Operand2`
*   **Logic:** `Operand1 == Operand2`
*   **Example:** If `Operand1` is 10 and `Operand2` is 10, the condition is TRUE. If `Operand1` is 10 and `Operand2` is 15, the condition is FALSE.

### 4.2. Not Equal To (NEQ)

*   **Function:** Compares two operands and sets a status bit if they are not equal.
*   **Syntax (example):** `NEQ Operand1, Operand2`
*   **Logic:** `Operand1 != Operand2`
*   **Example:** If `Operand1` is 10 and `Operand2` is 15, the condition is TRUE. If `Operand1` is 10 and `Operand2` is 10, the condition is FALSE.

### 4.3. Greater Than (GRT)

*   **Function:** Compares two operands and sets a status bit if the first operand is greater than the second.
*   **Syntax (example):** `GRT Operand1, Operand2`
*   **Logic:** `Operand1 > Operand2`
*   **Example:** If `Operand1` is 15 and `Operand2` is 10, the condition is TRUE. If `Operand1` is 10 and `Operand2` is 10, the condition is FALSE.

### 4.4. Greater Than or Equal To (GEQ)

*   **Function:** Compares two operands and sets a status bit if the first operand is greater than or equal to the second.
*   **Syntax (example):** `GEQ Operand1, Operand2`
*   **Logic:** `Operand1 >= Operand2`
*   **Example:** If `Operand1` is 15 and `Operand2` is 10, the condition is TRUE. If `Operand1` is 10 and `Operand2` is 10, the condition is TRUE. If `Operand1` is 10 and `Operand2` is 15, the condition is FALSE.

### 4.5. Less Than (LES)

*   **Function:** Compares two operands and sets a status bit if the first operand is less than the second.
*   **Syntax (example):** `LES Operand1, Operand2`
*   **Logic:** `Operand1 < Operand2`
*   **Example:** If `Operand1` is 10 and `Operand2` is 15, the condition is TRUE. If `Operand1` is 10 and `Operand2` is 10, the condition is FALSE.

### 4.6. Less Than or Equal To (LEQ)

*   **Function:** Compares two operands and sets a status bit if the first operand is less than or equal to the second.
*   **Syntax (example):** `LEQ Operand1, Operand2`
*   **Logic:** `Operand1 <= Operand2`
*   **Example:** If `Operand1` is 10 and `Operand2` is 15, the condition is TRUE. If `Operand1` is 10 and `Operand2` is 10, the condition is TRUE. If `Operand1` is 15 and `Operand2` is 10, the condition is FALSE.

---

## 5. Number Comparison in Ladder Logic

In Ladder Logic, comparison instructions are often implemented as "rungs" or "contacts" that have conditions associated with them. When the PLC scans the rung, it evaluates the condition. If the condition is true, the "contact" becomes energized, allowing power to flow to the subsequent output instructions.

**Common Ladder Logic Representation:**

| Instruction | Symbol/Contact Type     | Description                                  |
| :---------- | :---------------------- | :------------------------------------------- |
| EQU         | `= ` or `==`            | Equal to contact                             |
| NEQ         | `<>` or `!=`            | Not equal to contact                         |
| GRT         | `>`                     | Greater than contact                         |
| GEQ         | `>=`                    | Greater than or equal to contact             |
| LES         | `<`                     | Less than contact                            |
| LEQ         | `<=`                    | Less than or equal to contact                |

**Structure of a Ladder Logic Comparison Rung:**

```
+-----[           Operand1  <Operator>  Operand2           ]----+----( Output Instruction )----+
|                                                                |
+----------------------------------------------------------------+
```

*   **Operand1:** The first value to be compared.
*   **<Operator>:** The comparison instruction (e.g., `=`, `>`, `<=`).
*   **Operand2:** The second value to be compared.
*   **Output Instruction:** Usually a coil, timer, counter, or another comparison instruction.

---

## 6. Examples of Number Comparison Functions in PLC Programming

Let's illustrate these functions with practical examples, drawing on concepts from our textbooks.

### Example 1: Temperature Control (Relating to CO1, CO2, CO3, CO4)

**Scenario:** Control a heater for a process where the temperature needs to be maintained within a certain range. A temperature sensor (transducer) outputs a numerical value representing the current temperature.

*   **Measuring Instrument:** Temperature Sensor (e.g., RTD or Thermocouple).
*   **PLC Input:** The analog output of the temperature sensor is converted to a digital value and stored in an input register (e.g., `I:3.0/0` or `AI_TEMP_SENSOR`).
*   **Setpoint:** A desired temperature value (e.g., `25.0 degrees Celsius`), stored in a data register (e.g., `N7:0`).
*   **High Limit Setpoint:** A maximum allowable temperature (e.g., `30.0 degrees Celsius`), stored in a data register (e.g., `N7:1`).

**Ladder Logic Implementation:**

*   **Turn Heater ON if Temperature is BELOW Setpoint:**
    *   Instruction: `LES` (Less Than)
    *   Operand1: `AI_TEMP_SENSOR` (Current Temperature)
    *   Operand2: `N7:0` (Setpoint)
    *   Output: Energize `Heater_Output` (e.g., `O:4.0/0`)

    ```ladder
    +-----[  AI_TEMP_SENSOR  <   N7:0         ]----+----( O:4.0/0  Heater_Output )----+
    ```
    *   **Explanation:** If the current temperature (`AI_TEMP_SENSOR`) is less than the setpoint (`N7:0`), the `Heater_Output` coil will be energized, turning on the heater. This relates to CO4.

*   **Turn Heater OFF if Temperature is ABOVE High Limit Setpoint:**
    *   Instruction: `GRT` (Greater Than) or `GEQ` (Greater Than or Equal To)
    *   Operand1: `AI_TEMP_SENSOR` (Current Temperature)
    *   Operand2: `N7:1` (High Limit Setpoint)
    *   Output: De-energize `Heater_Output` (using a normally closed contact controlled by the comparison result).

    A common way to implement "turn OFF" is to use the *inverse* of the condition that turns it on. If we want to turn off when it's *too hot*, we can use a "Greater Than" comparison.

    ```ladder
    +-----[  AI_TEMP_SENSOR  >   N7:1         ]----+----( O:4.0/0  Heater_Output  )|----+  // Normally Closed Contact
    ```
    *   **Alternative using GEQ to turn off:**
    ```ladder
    +-----[  AI_TEMP_SENSOR  >=  N7:1         ]----+----( O:4.0/0  Heater_Output  )|----+  // Normally Closed Contact
    ```
    *   **Explanation:** If the current temperature (`AI_TEMP_SENSOR`) exceeds or equals the high limit (`N7:1`), the condition is TRUE. This normally closed contact (`( )|`) will open, breaking the circuit to `Heater_Output`, turning off the heater. This also relates to CO4.

    **Important Note on Controlling Outputs with Comparisons:** Often, you'll have a "temperature controller" bit that is set when the temperature is too low and reset when it's too high. The actual output to the heater is then controlled by this "temperature controller" bit.

    A more robust approach for a deadband or hysteresis might involve using GEQ and LEQ to define the acceptable range.

    ```ladder
    // --- Heater Control Logic ---

    // Condition to turn HEATER ON: Temperature is below the ON setpoint
    +-----[  AI_TEMP_SENSOR  <   N7:0         ]----+----( O:4.0/0  Heater_Output )----+

    // Condition to turn HEATER OFF: Temperature is at or above the OFF setpoint (e.g., slightly higher than ON setpoint for hysteresis)
    // Let's assume N7:0 is ON setpoint and N7:1 is OFF setpoint (N7:1 > N7:0)
    +-----[  AI_TEMP_SENSOR  >=  N7:1         ]----+----( O:4.0/0  Heater_Output  )|----+ // Normally Closed contact
    ```
    *   **Referencing Doebelin/Kalsi (CO1, CO2, CO3):** The numerical value from the temperature sensor (`AI_TEMP_SENSOR`) is the output of an electronic measuring instrument or transducer. Doebelin's "Measurement Systems" and Kalsi's "Electronic Instrumentation" detail how these sensors convert physical variables (temperature) into electrical signals, which are then digitized for PLC input. The PLC's comparison logic (CO4) then uses this raw measurement.

### Example 2: Tank Level Control (Relating to CO4)

**Scenario:** Maintain a water level in a tank between a minimum and maximum level.

*   **Sensor:** Level sensor (e.g., ultrasonic, hydrostatic pressure) providing a numerical value.
*   **PLC Input:** `AI_LEVEL_SENSOR` (Current Level reading).
*   **Low Level Setpoint:** `N7:2` (e.g., 20% full).
*   **High Level Setpoint:** `N7:3` (e.g., 80% full).
*   **Output:** `Fill_Pump_Output` (`O:4/1`), `Drain_Pump_Output` (`O:4/2`).

**Ladder Logic Implementation:**

*   **Turn Fill Pump ON if Level is BELOW Low Setpoint:**
    *   Instruction: `LES`
    *   Operand1: `AI_LEVEL_SENSOR`
    *   Operand2: `N7:2`
    *   Output: Energize `Fill_Pump_Output`

    ```ladder
    +-----[  AI_LEVEL_SENSOR  <   N7:2         ]----+----( O:4/1  Fill_Pump_Output )----+
    ```

*   **Turn Fill Pump OFF if Level is ABOVE or EQUAL to High Setpoint:**
    *   Instruction: `GEQ`
    *   Operand1: `AI_LEVEL_SENSOR`
    *   Operand2: `N7:3`
    *   Output: De-energize `Fill_Pump_Output` (using a normally closed contact)

    ```ladder
    +-----[  AI_LEVEL_SENSOR  >=  N7:3         ]----+----( O:4/1  Fill_Pump_Output  )|----+
    ```

*   **Turn Drain Pump ON if Level is ABOVE High Setpoint:**
    *   Instruction: `GRT`
    *   Operand1: `AI_LEVEL_SENSOR`
    *   Operand2: `N7:3`
    *   Output: Energize `Drain_Pump_Output`

    ```ladder
    +-----[  AI_LEVEL_SENSOR  >   N7:3         ]----+----( O:4/2  Drain_Pump_Output )----+
    ```

*   **Turn Drain Pump OFF if Level is BELOW or EQUAL to Low Setpoint:**
    *   Instruction: `LEQ`
    *   Operand1: `AI_LEVEL_SENSOR`
    *   Operand2: `N7:2`
    *   Output: De-energize `Drain_Pump_Output` (using a normally closed contact)

    ```ladder
    +-----[  AI_LEVEL_SENSOR  <=  N7:2         ]----+----( O:4/2  Drain_Pump_Output  )|----+
    ```
    *   **Explanation:** This logic uses comparison functions to automatically manage the tank level by controlling the fill and drain pumps based on sensor readings and programmed setpoints. This directly applies CO4.

### Example 3: Counter Comparison (Relating to CO4)

**Scenario:** Count the number of items passing on a conveyor belt. Stop the process after a certain number of items.

*   **Sensor:** Proximity sensor detecting items, connected to a PLC input that increments a counter.
*   **Counter:** `CTU` (Count Up) instruction. Let's say `CT0` is configured to count up to a preset value.
*   **Preset Value:** `N7:4` (e.g., 100 items).
*   **Output:** `Conveyor_Motor_Output` (`O:4/3`).

**Ladder Logic Implementation:**

*   **Stop Conveyor when Count Reaches Preset:**
    *   Instruction: `EQU` (Equal To) or `LES` (Less Than) to detect when the count is *about* to reach the preset. Often, you'll check if the accumulated count is equal to the preset.
    *   Operand1: `CT0.ACC` (Accumulated value of Counter 0)
    *   Operand2: `N7:4` (Preset value)
    *   Output: Use a normally closed contact `(CT0.DN)` or `(CT0)` if the preset is reached to stop the conveyor. A common approach is to use `EQU` with the accumulated value and the preset value.

    ```ladder
    // --- Item Counting and Conveyor Stop ---

    // Rung to increment counter (simplified - assumes a pulse on a sensor input)
    +-----[  Sensor_Input  ]----+----[ CTU CT0  PRE=N7:4  ACC=0 ]----+

    // Rung to stop the conveyor motor when the count reaches the preset
    // Use EQU to check if Accumulated Value equals the Preset Value
    +-----[  CT0.ACC  =   N7:4         ]----+----( O:4/3  Conveyor_Motor_Output  )|----+ // Normally Closed contact
    ```
    *   **Explanation:** The `CTU` instruction counts pulses from the `Sensor_Input` and stores the count in `CT0.ACC`. When `CT0.ACC` becomes equal to `N7:4` (the preset), the `EQU` comparison becomes TRUE. This normally closed contact `(CT0.ACC = N7:4)` will open, stopping the `Conveyor_Motor_Output`.
    *   **Alternative using DN bit (if the counter DN bit is set when preset is reached):**
    ```ladder
    +-----[  CT0.DN            ]----+----( O:4/3  Conveyor_Motor_Output  )|----+ // Normally Closed contact
    ```
    *   **Explanation:** The `.DN` (Done) bit of a `CTU` is typically set when the accumulated value reaches or exceeds the preset value. Using a normally closed contact of this `.DN` bit directly achieves stopping the motor. This also relates to CO4.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 7. Incorporating Textbooks and Reference Books

*   **Doebelin's Measurement Systems & Kalsi's Electronic Instrumentation (CO1, CO2, CO3):** These texts are fundamental for understanding the source of the numerical data that PLCs process. For instance, a temperature sensor (as in Example 1) is a transducer that converts thermal energy into an electrical signal (voltage or current). This electrical signal is then often conditioned and digitized. The PLC's input module receives this digitized value. The selection of the appropriate sensor based on the measurement parameter, accuracy, range, and environmental conditions (discussed in these books) directly impacts the data quality the PLC will compare. The PLC comparison functions themselves are a way to interpret and act upon the output of these measuring instruments.

*   **Hackworth, Hackworth & Webb, Reis (CO4):** These books are directly relevant to PLC programming methodologies.
    *   **Hackworth, Hackworth (3/e, 2022):** This text would detail specific instruction sets for various PLC platforms, including the syntax and application of comparison instructions. It would likely present examples of their use in sequencing, interlocks, and process control loops. The concept of "rung logic" and how comparison instructions enable conditional execution is a core theme.
    *   **Webb, Reis (5/e, 2015):** Similar to Hackworth, this book provides comprehensive coverage of PLC hardware, software, and programming techniques. It would explain how comparison instructions are used in conjunction with timers, counters, arithmetic instructions, and data handling to build complex control algorithms. The emphasis on practical applications and troubleshooting would reinforce the use of these functions.

**Example of how to integrate reference content:**

When discussing the temperature control example (Example 1):

"As detailed in Doebelin's 'Measurement Systems' (6/e, 2011), temperature sensors like RTDs or thermocouples are common transducers for measuring physical variables. These sensors produce an electrical output (e.g., voltage proportional to temperature). For PLC integration, this analog output is typically converted to a digital value by an Analog-to-Digital Converter (ADC) within the PLC's input module. The numerical value stored in `AI_TEMP_SENSOR` is this digitized representation of temperature. Our PLC program, as outlined by Hackworth and Hackworth (3/e, 2022), then uses comparison instructions like `LES` and `GEQ` on this value to implement the control logic for the heater, demonstrating the application of PLC programming for industrial processes (CO4)."

---

## 8. Practice Questions and Exercises

1.  **Question:** A PLC is used to control a bottling machine. A sensor detects when a bottle is in place (Input `I:1/0`). A timer (`TMR0`) starts when the bottle is detected. The timer is set to 2 seconds. We want to activate a filling solenoid (`Output O:2/0`) only if the timer has completed (i.e., 2 seconds have elapsed).
    *   **Which comparison function should be used?**
    *   **What would be the operands for this comparison?**
    *   **Draw the Ladder Logic rung for this function.**

2.  **Question:** In a batch process, a recipe calls for adding 500 liters of a liquid. A flow meter measures the liquid flow and its cumulative value is stored in Data Register `N7:5`. The process should stop adding liquid when the accumulated flow reaches exactly 500 liters.
    *   **Which comparison function is most suitable?**
    *   **Write the Ladder Logic comparison instruction (using a symbolic representation of operands and a common PLC notation).**

3.  **Question:** You have a PLC controlling a conveyor belt. The conveyor motor should run as long as the speed is *less than* 100 RPM (stored in `N7:10`) and the emergency stop button (`I:1/1`) is *not* pressed. The conveyor motor is `O:2/1`.
    *   **Describe the logic required, including comparisons.**
    *   **How would you represent "not pressed" in PLC logic (usually a normally closed contact)?**

4.  **Question:** A temperature in a kiln (`AI_TEMP`) must be kept between 800°C and 1200°C.
    *   **What comparison instructions would you use to ensure the temperature stays within this range?**
    *   **What conditions would trigger an alarm light (`O:2/2`) if the temperature goes *above* 1200°C?**

---

## 9. Answers to Practice Questions

1.  **Answer:**
    *   **Comparison Function:** `EQU` (Equal To) or `LES` (Less Than) if you want to ensure it's *at least* 2 seconds. `EQU` is more precise for "exactly 2 seconds". Alternatively, if the timer has a "Done" bit (`TMR0.DN`), you could use that. Let's assume we are comparing the accumulated time to the preset.
    *   **Operands:**
        *   Operand 1: `TMR0.ACC` (Accumulated value of Timer 0)
        *   Operand 2: `20` (Preset value, assuming timer is configured for milliseconds or seconds as appropriate)
    *   **Ladder Logic Rung (using EQU):**
        ```ladder
        +-----[  TMR0.ACC  =   20            ]----+----( O:2/0  Filling_Solenoid )----+
        ```
    *   **Ladder Logic Rung (using Timer Done Bit - common):**
        ```ladder
        +-----[  TMR0.DN             ]----+----( O:2/0  Filling_Solenoid )----+
        ```

2.  **Answer:**
    *   **Most Suitable Function:** `EQU` (Equal To) or `LES` (Less Than) if you need to ensure it doesn't go *over* 500. `EQU` is best for stopping *at* 500.
    *   **Ladder Logic Instruction:**
        ```ladder
        +-----[  N7:5  =   500             ]----+----( Stop_Adding_Instruction )----+
        ```
        (Assuming "Stop Adding" is represented by a coil or a condition that prevents further addition).

3.  **Answer:**
    *   **Logic Description:**
        *   The conveyor motor should be ON if: (Speed < 100 RPM) AND (Emergency Stop is NOT pressed).
        *   We need a comparison for speed: `LES` (Less Than).
        *   We need to consider the state of the emergency stop button.
    *   **Ladder Logic:**
        ```ladder
        // Rung to control conveyor motor
        +-----[  I:1/1  (E-Stop) ]|----+----[  N7:10  <   100         ]----+----( O:2/1  Conveyor_Motor )----+
               // Normally Closed contact for E-Stop
        ```
    *   **Explanation:** The `[ I:1/1 ]|` represents a normally closed contact for the emergency stop button. If the button is *not* pressed, this contact is closed. The `[ N7:10 < 100 ]` checks if the speed is less than 100. Both conditions must be true (both contacts closed) for the `Conveyor_Motor` to be energized.

4.  **Answer:**
    *   **Keeping temperature between 800°C and 1200°C:**
        *   To ensure the temperature is *at least* 800°C, use `GEQ` (Greater Than or Equal To): `AI_TEMP >= 800`.
        *   To ensure the temperature is *at most* 1200°C, use `LEQ` (Less Than or Equal To): `AI_TEMP <= 1200`.
        *   Both these conditions would typically be used in conjunction with other logic to maintain the temperature (e.g., turn heater on if below 800, turn off if above 1200).

    *   **Alarm light if temperature goes above 1200°C:**
        *   Comparison Function: `GRT` (Greater Than)
        *   Operands:
            *   Operand 1: `AI_TEMP`
            *   Operand 2: `1200`
        *   **Ladder Logic Rung:**
            ```ladder
            +-----[  AI_TEMP  >   1200          ]----+----( O:2/2  Alarm_Light )----+
            ```

---

## 10. Important Points to Remember

*   **Operand Types:** Be mindful of the data types of your operands when comparing. Comparing an integer to a floating-point number might require data conversion.
*   **PLC Manufacturer Variations:** While the concepts are universal, the exact instruction mnemonics and syntax can differ between PLC brands (e.g., Allen-Bradley SLC/ControlLogix, Siemens S7, Mitsubishi FX). Consult your PLC's programming manual.
*   **Status Bits:** Understand how comparison instructions affect the PLC's status bits. These bits are crucial for controlling program flow.
*   **Hysteresis/Deadband:** For analog control loops (like temperature or level control), using single setpoints can lead to rapid switching (chattering). Implementing hysteresis using two setpoints (e.g., turn ON at 25°C, turn OFF at 27°C) with `LES` and `GEQ` comparisons is good practice.
*   **Order of Operations:** In complex rungs, the order in which comparisons are evaluated can be critical.
*   **Data Register Usage:** Plan your data register allocation to avoid conflicts and ensure clarity.
*   **Signed vs. Unsigned:** Some PLCs distinguish between signed and unsigned integer comparisons, which affects how negative numbers are handled.

---

This comprehensive set of notes provides a strong foundation for understanding and applying number comparison functions in PLC programming, directly addressing the learning outcomes and incorporating knowledge from the provided textbooks.