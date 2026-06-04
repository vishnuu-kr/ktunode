---
title: "PLC Arithmetic functions"
subject: "INSTRUMENTATION"
module: "Module 4: PLC Programming"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5ce"
status: "completed"
scrapedAt: "2026-05-23T17:49:32.467Z"
---
# Module 4: PLC Programming - PLC Arithmetic Functions

**Subject:** INSTRUMENTATION

**Module:** Module 4: PLC Programming

**Topic:** PLC Arithmetic Functions

**Description:** This topic covers the fundamental arithmetic operations that can be performed using Programmable Logic Controllers (PLCs). Understanding these functions is crucial for implementing control strategies that involve calculations, data manipulation, and signal processing in industrial automation.

---

## 1. Introduction to PLC Arithmetic Functions

PLCs are not just for logical operations; they are capable of performing a wide range of mathematical calculations. These arithmetic functions are essential for:

*   **Data Processing:** Manipulating sensor readings, setpoints, and control parameters.
*   **Calculations:** Performing real-time calculations for control loops, scaling, averaging, etc.
*   **Signal Conditioning:** Converting raw sensor data into meaningful engineering units.
*   **Process Monitoring:** Calculating trends, deviations, and performance indicators.

**Key Concept:** Arithmetic instructions in PLC programming operate on data stored in memory locations (registers, operands). These operations can be performed on various data types, most commonly **integers** and **floating-point numbers**.

**Reference:**
*   Hackworth & Hackworth (3/e): Emphasizes that PLCs are powerful enough to handle complex calculations, making them versatile for various industrial applications.
*   Webb & Reis (5/e): Discusses the role of arithmetic instructions in data manipulation and control algorithm implementation.

---

## 2. Common PLC Arithmetic Instructions

Most PLC programming languages (e.g., Ladder Logic, Structured Text, Function Block Diagram) provide a set of standard arithmetic instructions. The specific names and syntax may vary slightly between PLC manufacturers (e.g., Allen-Bradley, Siemens, Mitsubishi), but the core functionality remains the same.

### 2.1. Addition (ADD)

*   **Purpose:** Adds two operands and stores the result in a destination operand.
*   **Syntax Example (Ladder Logic):** `ADD SourceA, SourceB, Destination`
    *   `SourceA`: The first number to be added.
    *   `SourceB`: The second number to be added.
    *   `Destination`: The memory location where the sum will be stored.
*   **Example:**
    *   Add the value in integer register `N7:0` (e.g., 10) to the value in integer register `N7:1` (e.g., 5). Store the result in `N7:2`.
    *   Ladder Logic representation: `ADD N7:0, N7:1, N7:2`
    *   Result: `N7:2` will contain 15.
*   **Important Point:** If the result of the addition exceeds the capacity of the destination register, an **overflow** error may occur, leading to an incorrect or wrap-around value.

### 2.2. Subtraction (SUB)

*   **Purpose:** Subtracts the second operand from the first operand and stores the result in a destination operand.
*   **Syntax Example (Ladder Logic):** `SUB SourceA, SourceB, Destination`
    *   `SourceA`: The minuend (the number from which another number is to be subtracted).
    *   `SourceB`: The subtrahend (the number to be subtracted).
    *   `Destination`: The memory location where the difference will be stored.
*   **Example:**
    *   Subtract the value in integer register `N7:1` (e.g., 5) from the value in integer register `N7:0` (e.g., 10). Store the result in `N7:2`.
    *   Ladder Logic representation: `SUB N7:0, N7:1, N7:2`
    *   Result: `N7:2` will contain 5.
*   **Important Point:** Similar to addition, subtraction can result in **underflow** if the result becomes too small for the data type.

### 2.3. Multiplication (MUL)

*   **Purpose:** Multiplies two operands and stores the result in a destination operand.
*   **Syntax Example (Ladder Logic):** `MUL SourceA, SourceB, Destination`
    *   `SourceA`: The first multiplier.
    *   `SourceB`: The second multiplier.
    *   `Destination`: The memory location where the product will be stored.
*   **Example:**
    *   Multiply the value in integer register `N7:0` (e.g., 10) by the value in integer register `N7:1` (e.g., 5). Store the result in `N7:2`.
    *   Ladder Logic representation: `MUL N7:0, N7:1, N7:2`
    *   Result: `N7:2` will contain 50.
*   **Important Point:** Multiplication can quickly lead to large numbers. Ensure your destination register has sufficient capacity to avoid overflow. Many PLCs offer dedicated multiply instructions for different data types (e.g., 16-bit, 32-bit).

### 2.4. Division (DIV)

*   **Purpose:** Divides the first operand by the second operand and stores the quotient and remainder in destination operands.
*   **Syntax Example (Ladder Logic):** `DIV SourceA, SourceB, QuotientDestination, RemainderDestination`
    *   `SourceA`: The dividend (the number to be divided).
    *   `SourceB`: The divisor (the number by which to divide).
    *   `QuotientDestination`: The memory location to store the whole number part of the result.
    *   `RemainderDestination`: The memory location to store the remainder.
*   **Example:**
    *   Divide the value in integer register `N7:0` (e.g., 10) by the value in integer register `N7:1` (e.g., 3). Store the quotient in `N7:2` and the remainder in `N7:3`.
    *   Ladder Logic representation: `DIV N7:0, N7:1, N7:2, N7:3`
    *   Result: `N7:2` will contain 3, and `N7:3` will contain 1.
*   **Important Point:** **Division by zero is a critical error.** PLCs typically have mechanisms to prevent or handle division by zero, often by setting an error flag or halting the program. Always ensure the divisor is not zero.

### 2.5. Square Root (SQR)

*   **Purpose:** Calculates the square root of a number.
*   **Syntax Example (Ladder Logic):** `SQR Source, Destination`
    *   `Source`: The number for which to calculate the square root.
    *   `Destination`: The memory location to store the square root.
*   **Example:**
    *   Calculate the square root of the value in `N7:0` (e.g., 25). Store the result in `N7:1`.
    *   Ladder Logic representation: `SQR N7:0, N7:1`
    *   Result: `N7:1` will contain 5.
*   **Important Point:** Typically operates on floating-point numbers or a specific integer format. The input must be non-negative.

### 2.6. Exponentiation (POW/EXP)

*   **Purpose:** Calculates a number raised to a power.
*   **Syntax Example (Ladder Logic):** `POW Base, Exponent, Destination` (syntax may vary)
    *   `Base`: The number to be raised to a power.
    *   `Exponent`: The power to which the base is raised.
    *   `Destination`: The memory location to store the result.
*   **Example:**
    *   Calculate 2 raised to the power of 3. Store the result in `N7:0`.
    *   Ladder Logic representation: `POW 2, 3, N7:0`
    *   Result: `N7:0` will contain 8.
*   **Important Point:** Can result in very large numbers quickly.

### 2.7. Trigonometric Functions (SIN, COS, TAN, ATN, etc.)

*   **Purpose:** Perform trigonometric calculations like sine, cosine, tangent, and their inverses.
*   **Syntax Example:** Varies by manufacturer. Often take angles in radians or degrees.
*   **Example:** Calculate the sine of an angle stored in `N7:0` (in radians) and store the result in `N7:1`.
*   **Important Point:** Requires careful handling of units (degrees vs. radians) and input ranges. Essential for applications involving rotational movement or signal analysis.

### 2.8. Scaling (SCALE, LIMIT, etc.)

*   **Purpose:** Convert a raw input signal (e.g., from an analog-to-digital converter) into engineering units (e.g., temperature in °C, pressure in PSI). This is a crucial application of arithmetic functions.
*   **Principle:** Uses linear scaling, often based on the formula:
    `ScaledValue = ((RawMax - RawMin) / (InputMax - InputMin)) * (RawValue - InputMin) + RawMin`
    Where:
    *   `RawValue`: The actual input from the sensor.
    *   `InputMin`, `InputMax`: The minimum and maximum values the sensor can output.
    *   `RawMin`, `RawMax`: The minimum and maximum engineering units corresponding to `InputMin` and `InputMax`.
*   **Implementation:** Typically involves a combination of subtraction, multiplication, and addition. Some PLCs have dedicated scaling instructions that simplify this.
*   **Example:** A thermocouple provides an analog input ranging from 0-32000 (counts) for a temperature range of 0-1000 °C.
    *   `RawValue` = analog input value (e.g., 16000 counts)
    *   `InputMin` = 0, `InputMax` = 32000
    *   `RawMin` = 0 °C, `RawMax` = 1000 °C
    *   Calculation: `((1000 - 0) / (32000 - 0)) * (16000 - 0) + 0`
    *   `ScaledValue` = `(1000 / 32000) * 16000` = `0.03125 * 16000` = `500 °C`
*   **Reference:**
    *   Doebelin's Measurement Systems: Provides the foundational understanding of signal conditioning and the need for scaling analog signals.
    *   Kalsi's Electronic Instrumentation: Explains analog-to-digital conversion and the process of representing physical variables as digital data, highlighting the need for scaling.
    *   Hackworth & Hackworth (3/e): Details how scaling is implemented using PLC arithmetic instructions for practical control scenarios.

### 2.9. Data Movement (MOV)

*   **Purpose:** Copies the value from one memory location to another. While not strictly an arithmetic operation, it's fundamental for preparing data for arithmetic operations or storing results.
*   **Syntax Example:** `MOV Source, Destination`

---

## 3. Data Types and Arithmetic Operations

The type of data being operated on significantly affects how arithmetic instructions behave.

*   **Integers:**
    *   **Signed/Unsigned:** Affect the range of values. Signed integers can represent positive and negative numbers, while unsigned integers represent only non-negative values.
    *   **Word Size (16-bit, 32-bit):** Determines the maximum value that can be stored. A 16-bit signed integer typically ranges from -32,768 to +32,767. A 32-bit signed integer ranges from -2,147,483,648 to +2,147,483,647.
    *   **Operations:** Can result in overflow or underflow if the result exceeds the defined range.
*   **Floating-Point Numbers (Real Numbers):**
    *   **Format:** Typically IEEE 754 single-precision (32-bit) or double-precision (64-bit).
    *   **Range and Precision:** Can represent a much wider range of numbers, including fractional values. Offers higher precision compared to integers.
    *   **Operations:** More computationally intensive but necessary for complex calculations, scientific applications, and PID control algorithms.
*   **BCD (Binary Coded Decimal):**
    *   **Purpose:** Often used for displaying numbers directly (e.g., on seven-segment displays) or for specific communication protocols. Each decimal digit is represented by 4 bits.
    *   **Operations:** Requires specific BCD arithmetic instructions (e.g., ADD BCD, SUB BCD) as standard binary arithmetic instructions will not produce correct results.

**Important Point:** Always ensure that the operands and destination registers are of compatible data types or that appropriate data type conversion functions are used before performing arithmetic operations.

**Reference:**
*   Webb & Reis (5/e): Provides detailed explanations of integer and floating-point data types and their implications in PLC programming.
*   Hackworth & Hackworth (3/e): Discusses BCD arithmetic and its specific applications.

---

## 4. Status Bits and Error Handling

Arithmetic operations can result in various conditions that are signaled through **status bits** (also known as condition codes or flags) in the PLC's processor status file or special status registers.

*   **Carry (C) / Overflow (OV):** Set if the result of an arithmetic operation is too large to fit in the destination operand (e.g., addition results in a carry-out, multiplication results in a value exceeding the register's capacity).
*   **Zero (Z) / Equal (EQ):** Set if the result of an arithmetic operation is zero.
*   **Negative (N) / Less Than (LT):** Set if the result of an arithmetic operation is negative.
*   **Error (ER) / Overflow Error (OVF):** Indicates a general arithmetic error, such as division by zero.

**Importance of Status Bits:**

*   **Conditional Logic:** These bits are crucial for implementing conditional branching and decision-making in PLC programs. For example, you might use the Zero flag to check if a counter has reached zero or the Overflow flag to trigger an alarm.
*   **Error Detection and Recovery:** Monitoring error flags allows the PLC program to detect and potentially recover from problematic calculations, preventing system malfunctions.

**Example (Ladder Logic):**

```
     +-------+
     |       |
-----| ADD   |-----(OV)-------[B_ALARM]
     | N7:0, |
     | N7:1, |
     | N7:2  |
     +-------+
```
In this example, if the addition of `N7:0` and `N7:1` results in an overflow, the `OV` status bit will be set, activating the `B_ALARM` output.

**Reference:**
*   Webb & Reis (5/e): Covers the role of status bits in controlling program flow and indicating arithmetic results.

---

## 5. Applications of PLC Arithmetic Functions

PLC arithmetic functions are the backbone of many automation tasks.

### 5.1. PID Control (Proportional-Integral-Derivative)

*   **Concept:** PID controllers use arithmetic operations to calculate the error between a setpoint and a process variable, and then generate a control output to minimize this error.
*   **Arithmetic Involved:**
    *   **Subtraction:** To calculate the error (`Error = Setpoint - ProcessVariable`).
    *   **Multiplication:** For the proportional term (`P = Kp * Error`) and the derivative term.
    *   **Addition:** To sum the different terms of the PID output (`Output = P + I + D`).
    *   **Integration (Approximation):** Often implemented using summation of small error increments over time (`Integral_Term += Error * SampleTime`).
*   **Data Type:** Typically uses floating-point numbers for precision.

**Reference:**
*   Doebelin's Measurement Systems: Provides the theoretical basis for feedback control systems, including PID.
*   Kalsi's Electronic Instrumentation: Discusses analog control circuits and the principles that PID algorithms aim to replicate.
*   Hackworth & Hackworth (3/e) / Webb & Reis (5/e): Detail the implementation of PID algorithms in PLC ladder logic or structured text.

### 5.2. Batch Process Control

*   **Concept:** Calculating ingredient quantities, mixing times, temperature profiles, and yield calculations.
*   **Arithmetic Involved:** Addition, subtraction, multiplication, division, and possibly more complex functions for recipe management.

### 5.3. Speed and Flow Control

*   **Concept:** Calculating motor speeds based on production rates, converting volumetric flow to mass flow, totalizing flow over time.
*   **Arithmetic Involved:** Multiplication (e.g., RPM to linear speed), division (e.g., total volume / time = rate), summation.

### 5.4. Data Logging and Trend Analysis

*   **Concept:** Calculating averages, minimums, maximums, and other statistical measures from sensor data over time.
*   **Arithmetic Involved:** Summation, division, comparison.

### 5.5. Unit Conversion

*   **Concept:** Converting units between different measurement systems (e.g., Fahrenheit to Celsius, feet to meters).
*   **Arithmetic Involved:** Multiplication, addition, subtraction based on conversion formulas.

---

## 6. Practice Questions and Exercises

**Instructions:** For the following questions, assume you are using a PLC with integer registers (e.g., N7:0, N7:1, etc.) and basic arithmetic instructions.

**Question 1:**
A temperature sensor provides a reading that is stored in integer register `N7:10`. The sensor output range is 0-4095 counts, corresponding to actual temperatures of 0°C to 150°C. Write a conceptual ladder logic rung to scale this reading into engineering units (degrees Celsius) and store it in floating-point register `F8:0`.

**Question 2:**
You need to calculate the total amount of product produced in a shift. Each batch produces 150 units. The number of batches completed is stored in integer register `N7:20`. Calculate the total units produced and store it in integer register `N7:21`. Write the ladder logic.

**Question 3:**
A tank level is monitored by a sensor with a range of 0-30000 counts, representing 0% to 100% full. If the current level reading is 18000 counts, what is the percentage of the tank that is full? Show the calculation steps and assume the result is stored in integer register `N7:22`.

**Question 4:**
Consider the following PLC code snippet:
```
ADD N7:30, N7:31, N7:32
SUB N7:32, N7:33, N7:34
MUL N7:34, N7:35, N7:36
```
If `N7:30 = 25`, `N7:31 = 10`, `N7:33 = 5`, and `N7:35 = 3`. What will be the final value in `N7:36`?

**Question 5:**
You are designing a system where a motor's speed needs to be adjusted. The desired speed is given by `DesiredSpeed = (InputSignal * 0.5) + 10`, where `InputSignal` is stored in `N7:40`. Calculate the `DesiredSpeed` and store it in `N7:41`. Write the ladder logic.

---

## 7. Answers to Practice Questions

**Answer 1:**
This requires scaling. The formula is: `EngineeringUnit = ((EngMax - EngMin) / CountMax - CountMin)) * (CountValue - CountMin) + EngMin`.
Assuming floating-point operations:
1.  `SUB 4095, 0, N7:11` (Calculate count range = 4095)
2.  `SUB 150, 0, N7:12` (Calculate engineering unit range = 150)
3.  `DIV N7:12, N7:11, F8:1` (Calculate scale factor = 150.0 / 4095.0)
4.  `SUB N7:10, 0, F8:2` (Move count value to float register)
5.  `MUL F8:1, F8:2, F8:3` (Multiply scale factor by count value)
6.  `ADD F8:3, 0, F8:0` (Add the minimum engineering unit value and store)

*(Note: Actual implementation might use specific scaling blocks or more optimized floating-point math instructions depending on the PLC.)*

**Answer 2:**
1.  `MUL N7:20, 150, N7:21`
    *   If `N7:20 = 5`, then `N7:21` will be `750`.

**Answer 3:**
Calculation:
*   Count Range = 30000 - 0 = 30000
*   Percentage Range = 100% - 0% = 100%
*   Scaling Factor = 100 / 30000 ≈ 0.00333
*   Percentage = (18000 * Scaling Factor) = 18000 * (100 / 30000) = 1800000 / 30000 = 60%
*   Therefore, `N7:22` will contain `60`.

**Answer 4:**
1.  `ADD N7:30, N7:31, N7:32`
    *   `N7:32 = N7:30 + N7:31 = 25 + 10 = 35`
2.  `SUB N7:32, N7:33, N7:34`
    *   `N7:34 = N7:32 - N7:33 = 35 - 5 = 30`
3.  `MUL N7:34, N7:35, N7:36`
    *   `N7:36 = N7:34 * N7:35 = 30 * 3 = 90`
    *   Final value in `N7:36` is `90`.

**Answer 5:**
1.  `MUL N7:40, 0.5, N7:41` (Assuming the PLC can handle float multiplication or if N7:40 is implicitly converted)
2.  `ADD N7:41, 10, N7:41` (Add 10 to the result)
    *   If `N7:40 = 20`, then:
        *   `N7:41` (after MUL) = `20 * 0.5 = 10`
        *   `N7:41` (after ADD) = `10 + 10 = 20`

---

## 8. Important Points to Remember

*   **Data Types:** Always be mindful of the data types you are using (Integer, Float, BCD) and ensure compatibility.
*   **Register Sizing:** Ensure your destination registers are large enough to hold the results of your arithmetic operations to avoid overflows.
*   **Division by Zero:** Implement checks to prevent division by zero, as this is a critical error.
*   **Status Bits:** Utilize status bits (Carry, Zero, Overflow, Error) for conditional logic and error handling.
*   **Floating-Point Precision:** Understand the limitations of floating-point precision and potential rounding errors.
*   **Manufacturer Specifics:** Consult your PLC's programming manual for the exact syntax, available instructions, and data type handling.
*   **Scaling:** Scaling is a fundamental application of arithmetic functions, essential for converting raw sensor data into meaningful engineering units.

---

## 9. Alignment with Course Outcomes

*   **CO1: Interpret the basic concepts of measuring instruments, its classification, and selection criteria.** (K2)
    *   *Connection:* Understanding arithmetic functions helps in interpreting how raw measurements from instruments are processed and converted into usable engineering units (e.g., scaling sensor outputs).
*   **CO2: Outline the principle, construction and working of transducers for measuring physical variables.** (K2)
    *   *Connection:* Transducers produce physical variables as electrical signals, often analog. Arithmetic functions are used to process these signals after they are digitized, allowing us to work with the physical quantities they represent.
*   **CO3: Comprehend the principle, construction and working of various electronic measuring instruments.** (K2)
    *   *Connection:* Electronic instruments often involve internal calculations. Understanding PLC arithmetic helps relate to how these calculations might be performed in digital systems for data manipulation, display, and control.
*   **CO4: Apply PLC programming for selected industrial processes.** (K3)
    *   *Connection:* This is the most direct link. Arithmetic functions are fundamental building blocks for creating PLC programs that control industrial processes, enabling tasks like PID control, batch calculations, and data processing. This module directly addresses the application of PLC programming techniques.

---
This concludes the study notes for PLC Arithmetic Functions. Remember to practice using these instructions in a PLC simulator or on actual hardware to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
