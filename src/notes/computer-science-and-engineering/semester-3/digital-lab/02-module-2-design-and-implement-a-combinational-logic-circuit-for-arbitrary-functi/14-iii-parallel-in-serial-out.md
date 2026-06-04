---
title: "(iii) Parallel in serial out"
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aee5"
status: "completed"
scrapedAt: "2026-05-20T16:24:27.339Z"
---
# DIGITAL LAB - Module 2: Combinational Logic Circuits - Parallel-in Serial-out (PISO) Shift Register

## Overview

This module focuses on the design and implementation of combinational logic circuits for arbitrary functions. This section specifically covers the design and implementation of a Parallel-in Serial-out (PISO) shift register. A PISO shift register allows parallel data to be loaded simultaneously and then shifted out serially bit by bit.

## Learning Outcomes

By the end of this section, you will be able to:

1.  Understand the concept and operation of a parallel-in serial-out (PISO) shift register.
2.  Design a PISO shift register using basic logic gates (AND, OR, NOT).
3.  Implement a PISO shift register using D flip-flops and multiplexers.
4.  Analyze the timing diagrams of a PISO shift register.
5.  Explain the applications of PISO shift registers.

## 1. Key Concepts and Definitions

*   **Shift Register:**  A sequential logic circuit that shifts its stored data by one or more bits at each clock pulse.
*   **Parallel-in Serial-out (PISO):** A type of shift register that allows data to be loaded in parallel (all bits simultaneously) and then shifted out serially (one bit at a time).
*   **Serial Data:**  Data transmitted one bit at a time over a single line.
*   **Parallel Data:**  Data transmitted multiple bits at a time over multiple lines.
*   **Clock Signal:** A timing signal that synchronizes the operation of the shift register.
*   **Load/Shift Control Signal:** A signal that determines whether the shift register loads parallel data or shifts the existing data serially.
*   **Flip-Flop:** A basic building block of sequential circuits used to store one bit of data.  Common types used in shift registers are D flip-flops.
*   **Multiplexer (MUX):** A digital switch that selects one of several input signals and forwards it to a single output.  Essential for selecting between parallel load and serial shift operations.

## 2. PISO Shift Register Operation

The core idea behind a PISO shift register is to have the ability to either load data in parallel or shift it out serially.  This is typically achieved using a combination of D flip-flops and multiplexers.

**Steps Involved:**

1.  **Parallel Load:** When the "Load/Shift" control signal is asserted (usually HIGH for loading), the data present on the parallel input lines (e.g., D0, D1, D2, D3) is loaded into the corresponding flip-flops.
2.  **Serial Shift:** When the "Load/Shift" control signal is deasserted (usually LOW for shifting), the data stored in the flip-flops is shifted to the right (in a right-shift register) with each clock pulse. The output of the last flip-flop provides the serial output.

## 3. Design of a PISO Shift Register

There are two common approaches to designing a PISO shift register:

### 3.1 Using Logic Gates

This approach is less common for more than a few bits but illustrates the basic principle.

**Example: 2-bit PISO using AND, OR, and NOT gates**

This design is complex and not scalable.  It is presented for conceptual understanding only.  It's much easier to use flip-flops and multiplexers.

*   **Inputs:**
    *   D0, D1: Parallel data inputs
    *   Load/Shift: Control signal (1 for Load, 0 for Shift)
    *   Clock: Clock signal
*   **Output:** Q1 (Serial Output)
*   **Internal States:** Q0 (Output of the first flip-flop)

The design would require logic to control the D inputs of the flip-flops. When Load/Shift is high, D inputs are set to the corresponding data inputs (D0, D1).  When Load/Shift is low, D inputs are set to the Q output of the previous flip-flop.

**Limitations:**

*   Complex wiring for larger registers.
*   Not easily scalable.
*   Harder to understand and troubleshoot.

### 3.2 Using D Flip-Flops and Multiplexers (Preferred Method)

This is the standard and preferred method for designing PISO shift registers.

**Example: 4-bit PISO Shift Register using D Flip-Flops and Multiplexers**

*   **Components:**
    *   Four D Flip-Flops (D-FF)
    *   Four 2:1 Multiplexers (MUX)
    *   Clock signal
    *   Load/Shift Control Signal
    *   Parallel Data Inputs: D0, D1, D2, D3

*   **Connections:**

    1.  **Clock:** The clock signal is connected to the clock input of all D flip-flops.
    2.  **Data Inputs (D Flip-Flops):**
        *   The D input of each D flip-flop is connected to the output of a corresponding multiplexer.
    3.  **Multiplexers:**
        *   Each multiplexer has two data inputs (I0 and I1) and a select input.
        *   The select input of all multiplexers is connected to the "Load/Shift" control signal.
        *   **I0 (Load):** The I0 input of each multiplexer is connected to the corresponding parallel data input (D0, D1, D2, D3). This is the input used for parallel loading.
        *   **I1 (Shift):** The I1 input of each multiplexer is connected to the output (Q) of the *previous* D flip-flop.  For the first D flip-flop (holding the Most Significant Bit or MSB), the I1 input can be connected to a constant value (0 or 1) or to a serial input if you want to combine PISO with SISO (Serial In, Serial Out) functionality.  For a simple PISO, you'd typically tie this input to ground (0).
        *   **Outputs:**
            *   The Q output of the last D flip-flop (D3 in this example) is the serial output.  Often denoted as `Q_out`.

*   **Operation:**

    1.  **Load Mode (Load/Shift = 1):**  When the Load/Shift signal is HIGH, the multiplexers select the I0 inputs. The parallel data (D0, D1, D2, D3) is passed to the D inputs of the flip-flops and loaded on the next clock pulse.
    2.  **Shift Mode (Load/Shift = 0):** When the Load/Shift signal is LOW, the multiplexers select the I1 inputs.  The Q output of each flip-flop is passed to the D input of the *next* flip-flop. With each clock pulse, the data is shifted to the right, and the serial output (Q_out) provides the data bit that was previously stored in the last flip-flop.

**Diagram (Conceptual):**

```
                 D0    D1    D2    D3  (Parallel Inputs)
                  |     |     |     |
                  |     |     |     |
                  MUX   MUX   MUX   MUX
                  |     |     |     |
          Load/Shift----|-----|-----|-----
                  |     |     |     |
                  D-FF  D-FF  D-FF  D-FF
                  |     |     |     |
                Q0    Q1    Q2    Q3 (Serial Output: Q3)
                |     |     |
                |     |     |
             To MUX  To MUX  To MUX

Clock signal connected to all D-FFs
```

## 4. Timing Diagrams

A timing diagram is crucial for understanding how the PISO shift register operates over time.

**Key Signals:**

*   **Clock:** The timing reference for all operations.
*   **Load/Shift:** Controls whether data is loaded or shifted.
*   **D0, D1, D2, D3:** Parallel data inputs.
*   **Q0, Q1, Q2, Q3:** Outputs of the D flip-flops (internal states).
*   **Q_out:** Serial output.

**Example Timing Diagram (4-bit PISO):**

```
Clock:   _|¯|_|¯|_|¯|_|¯|_|¯|_|¯|_|¯|_|¯|_|¯|_|¯|
Load/Shift: _|_|¯|¯|¯|_|_|_|_|_|_|_|_|¯|¯|¯|¯|¯|
D0:      _|¯|_|_|¯|¯|_|_|_|¯|¯|_|_|¯|_|_|_|_|
D1:      _|¯|¯|_|_|¯|_|_|¯|_|_|¯|_|_|_|_|¯|_|
D2:      _|¯|_|_|_|¯|¯|_|_|_|¯|_|_|_|¯|_|_|
D3:      _|_|¯|_|_|_|_|_|¯|_|_|_|_|¯|_|_|_|
Q0:      _|_|_|¯|¯|_|_|_|¯|¯|_|_|¯|_|_|_|_| (After Clock Edge)
Q1:      _|_|_|_|¯|¯|_|_|_|¯|¯|_|_|_|¯|_|_| (After Clock Edge)
Q2:      _|_|_|_|_|¯|¯|_|_|_|¯|¯|_|_|_|¯|_| (After Clock Edge)
Q3 (Q_out): _|_|_|_|_|_|¯|¯|_|_|_|¯|¯|_|_|_| (After Clock Edge)
```

**Explanation:**

*   **Clock Cycles 1 & 2:** Load/Shift is low; the shift register is in shift mode. The output depends on previously loaded data.
*   **Clock Cycles 3-5:** Load/Shift is high; the register is in load mode. On the rising edge of the clock in cycle 3, the parallel data D0, D1, D2, and D3 are loaded into the flip-flops Q0, Q1, Q2, and Q3, respectively.
*   **Clock Cycles 6-12:** Load/Shift is low; the shift register shifts the data out serially. The values of Q0, Q1, Q2, and Q3 shift to the right on each rising clock edge, and Q_out reflects the value of Q3.
*   **Clock Cycles 13-16:** Load/Shift is high; New Data is loaded in.

**Important Observations:**

*   The serial output (Q_out) changes only on the rising edge of the clock.
*   It takes `n` clock cycles (where `n` is the number of bits) to shift all the data out after the data is loaded.

## 5. Applications of PISO Shift Registers

PISO shift registers are used in various applications where parallel data needs to be converted to serial data.  Some common applications include:

*   **Serial Communication:** Converting parallel data from a microprocessor to serial data for transmission over a serial communication channel (e.g., UART, SPI). This is a core component of devices communicating over serial links.
*   **Keyboard Scanning:** Keyboards often use a PISO register to convert the parallel data representing which keys are pressed into a serial stream for the computer to interpret.
*   **Data Acquisition Systems:**  Converting parallel data from sensors into a serial format for transmission to a data logger or computer.
*   **Display Drivers:**  Driving LED displays or LCDs using serial data to reduce the number of wires required.
*   **Memory Addressing:** Converting parallel address bits to serial data for accessing memory in specific applications.

## 6. Practice Questions/Exercises

1.  **Design a 3-bit PISO shift register using D flip-flops and multiplexers.  Draw the schematic diagram.**

    *   **Answer:** This would require 3 D flip-flops and 3 2:1 multiplexers.  Connect them as described in Section 3.2.  The first multiplexer's I1 input would be grounded.

2.  **Explain the function of the Load/Shift control signal in a PISO shift register.**

    *   **Answer:** The Load/Shift control signal determines whether the shift register loads parallel data or shifts the existing data serially. A HIGH signal usually enables the parallel load operation, while a LOW signal enables the serial shift operation.

3.  **If a 8-bit PISO shift register is loaded with the parallel data `10110010`, how many clock cycles will it take to shift all the data out serially?**

    *   **Answer:** It will take 8 clock cycles. It takes `n` clock cycles to shift all the data out after it's loaded, where `n` is the number of bits.

4.  **Explain why multiplexers are essential for implementing a PISO shift register.**

    *   **Answer:** Multiplexers allow us to selectively choose between loading the parallel data inputs or shifting data from the previous flip-flop.  They act as switches to route the correct data to the D input of each flip-flop based on the Load/Shift control signal.

5.  **Draw a partial timing diagram for a 2-bit PISO shift register, showing the Load/Shift signal, Clock signal, D0, D1, Q0, Q1, and Q_out.  Include a period where data is loaded and then shifted out.**

    *   **Answer:**  The timing diagram would be similar to the example in Section 4, but only with 2 bits.  Ensure you show the correct timing relationship between the inputs, clock edge, and outputs.

## 7. Important Points to Remember

*   PISO shift registers are used to convert parallel data to serial data.
*   D flip-flops are the fundamental building blocks for storing the data bits.
*   Multiplexers are used to select between loading parallel data or shifting existing data.
*   The Load/Shift control signal is crucial for controlling the operation of the register.
*   It takes `n` clock cycles to shift out all `n` bits of data.
*   Understand the timing diagrams to fully grasp the operation of the PISO shift register.
