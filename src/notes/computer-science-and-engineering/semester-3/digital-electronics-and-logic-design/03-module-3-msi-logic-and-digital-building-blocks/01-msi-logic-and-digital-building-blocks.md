---
title: "MSI Logic and Digital Building Blocks"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 3: MSI Logic and Digital Building Blocks"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad58"
status: "completed"
scrapedAt: "2026-05-20T16:23:55.292Z"
---
# DIGITAL ELECTRONICS AND LOGIC DESIGN - Module 3: MSI Logic and Digital Building Blocks

## Topic: MSI Logic and Digital Building Blocks

**Description:** This module explores Medium Scale Integration (MSI) logic circuits and their applications as fundamental digital building blocks. We'll cover essential components like decoders, encoders, multiplexers, demultiplexers, adders, subtractors, comparators, and Programmable Logic Devices (PLDs).

**Learning Outcomes:**

*   Understand the functionality and characteristics of various MSI logic circuits.
*   Design and implement combinational logic circuits using MSI components.
*   Analyze the operation of decoders, encoders, multiplexers, and demultiplexers.
*   Explain the principles of binary adders, subtractors, and comparators.
*   Describe the basic concepts and architectures of Programmable Logic Devices (PLDs).
*   Apply MSI components in practical digital system design.

---

## 1. Introduction to MSI Logic

*   **Definition:** Medium Scale Integration (MSI) refers to integrated circuits (ICs) containing between 10 and 100 equivalent gates. These ICs provide more complex functionalities compared to basic gates.

*   **Advantages of MSI:**
    *   Reduced chip count and board space compared to using discrete gates.
    *   Simplified circuit design and assembly.
    *   Lower power consumption in many cases.
    *   Improved reliability due to fewer connections.

*   **Common MSI Components:** Decoders, Encoders, Multiplexers, Demultiplexers, Adders, Subtractors, Comparators, PLDs.

---

## 2. Decoders

*   **Definition:** A decoder is a combinational logic circuit that converts a binary input code into a unique output.  For an *n*-bit input, there are *2<sup>n</sup>* possible outputs.  Only one output is active (typically HIGH or LOW) at a time, depending on the input code.

*   **Types of Decoders:**
    *   **n-to-2<sup>n</sup> Decoder:**  Converts an *n*-bit binary input into one of *2<sup>n</sup>* output lines. E.g., 2-to-4 decoder, 3-to-8 decoder.
    *   **BCD-to-Decimal Decoder:** Converts a BCD (Binary Coded Decimal) input (0-9) into one of 10 output lines.
    *   **BCD-to-7 Segment Decoder:** Converts a BCD input to control a 7-segment display, which visually represents the decimal digit.

*   **Truth Table and Logic Diagram (Example: 2-to-4 Decoder):**

    | Input (A1 A0) | Output (O3 O2 O1 O0) |
    |---|---|
    | 0 0 | 0 0 0 1 |
    | 0 1 | 0 0 1 0 |
    | 1 0 | 0 1 0 0 |
    | 1 1 | 1 0 0 0 |

    **Logic Equations:**

    *   O0 = A1' A0'
    *   O1 = A1' A0
    *   O2 = A1 A0'
    *   O3 = A1 A0

*   **Applications of Decoders:**
    *   Memory addressing.
    *   Data routing.
    *   Code conversion.
    *   Display driving.

*   **Enable Input:** Many decoders have an enable input (EN).  The decoder only functions when the enable input is active (HIGH or LOW, depending on the decoder design).  If the enable is inactive, all outputs are typically inactive (e.g., all outputs are LOW).

**Example:** Consider a 3-to-8 decoder (like the 74LS138). It has 3 inputs (A, B, C) and 8 outputs (Y0-Y7).  If A=0, B=1, C=0, the output Y2 will be active (LOW for 74LS138), and all other outputs will be inactive (HIGH).

---

## 3. Encoders

*   **Definition:** An encoder is a combinational logic circuit that converts an active input into a binary output code. It performs the inverse operation of a decoder.  For *2<sup>n</sup>* inputs, there are *n* outputs.

*   **Types of Encoders:**
    *   **2<sup>n</sup>-to-n Encoder:**  Converts one of *2<sup>n</sup>* inputs to an *n*-bit binary code.
    *   **Decimal-to-BCD Encoder:** Converts a decimal input (0-9) to a BCD output.
    *   **Priority Encoder:**  Handles the case where multiple inputs are active simultaneously. It outputs the code corresponding to the input with the highest priority.

*   **Truth Table and Logic Diagram (Example: 4-to-2 Encoder):**

    | Input (I3 I2 I1 I0) | Output (A1 A0) |
    |---|---|
    | 0 0 0 1 | 0 0 |
    | 0 0 1 0 | 0 1 |
    | 0 1 0 0 | 1 0 |
    | 1 0 0 0 | 1 1 |

    **Logic Equations:**

    *   A0 = I1 + I3
    *   A1 = I2 + I3

*   **Priority Encoder:**  A priority encoder gives precedence to inputs. For example, if both I1 and I3 are active, the priority encoder will output the code for I3 (1 1) as it has higher priority.

*   **Applications of Encoders:**
    *   Keyboard encoding.
    *   Data compression.
    *   Interrupt handling in microprocessors.

**Example:** Consider a 8-to-3 priority encoder. The inputs are I0 to I7, with I7 having the highest priority and I0 the lowest. If I2 and I5 are both active (HIGH), the output will be the binary code for I5 (101).

---

## 4. Multiplexers (MUX)

*   **Definition:** A multiplexer (MUX), also known as a data selector, is a combinational logic circuit that selects one of several input signals and forwards it to a single output line.  The selection is controlled by a set of select lines.

*   **Structure:** An *2<sup>n</sup>*-to-1 multiplexer has *2<sup>n</sup>* data inputs, *n* select inputs, and one output.

*   **Operation:** The select inputs determine which data input is connected to the output.

*   **Truth Table and Logic Diagram (Example: 4-to-1 Multiplexer):**

    | Select (S1 S0) | Output (Y) |
    |---|---|
    | 0 0 | D0 |
    | 0 1 | D1 |
    | 1 0 | D2 |
    | 1 1 | D3 |

    **Logic Equation:**

    Y = S1'S0'D0 + S1'S0D1 + S1S0'D2 + S1S0D3

*   **Applications of Multiplexers:**
    *   Data selection.
    *   Parallel-to-serial data conversion.
    *   Logic function implementation (using MUX as a universal logic gate).
    *   Address decoding in memory systems.

**Example:**  In a 8-to-1 MUX, if the select lines S2S1S0 are 011, the input D3 will be selected and routed to the output Y.

---

## 5. Demultiplexers (DEMUX)

*   **Definition:** A demultiplexer (DEMUX) performs the reverse operation of a multiplexer. It takes a single input signal and routes it to one of several output lines. The selection is controlled by a set of select lines.

*   **Structure:** A 1-to-*2<sup>n</sup>* demultiplexer has one data input, *n* select inputs, and *2<sup>n</sup>* outputs.

*   **Operation:** The select inputs determine which output the data input is connected to.

*   **Truth Table and Logic Diagram (Example: 1-to-4 Demultiplexer):**

    | Select (S1 S0) | Output (Y3 Y2 Y1 Y0) |
    |---|---|
    | 0 0 | 0 0 0 D |
    | 0 1 | 0 0 D 0 |
    | 1 0 | 0 D 0 0 |
    | 1 1 | D 0 0 0 |
    Where D is the data input.

    **Logic Equations:**

    *   Y0 = S1'S0'D
    *   Y1 = S1'S0D
    *   Y2 = S1S0'D
    *   Y3 = S1S0D

*   **Applications of Demultiplexers:**
    *   Data routing.
    *   Serial-to-parallel data conversion.
    *   Address decoding in memory systems.

**Example:**  In a 1-to-8 DEMUX, if the select lines S2S1S0 are 101, the data input D will be routed to the output Y5, while all other outputs will be 0.

---

## 6. Adders and Subtractors

*   **Half Adder:** Adds two single-bit binary numbers (A and B).  Outputs are Sum (S) and Carry (C).

    | A | B | S | C |
    |---|---|---|---|
    | 0 | 0 | 0 | 0 |
    | 0 | 1 | 1 | 0 |
    | 1 | 0 | 1 | 0 |
    | 1 | 1 | 0 | 1 |

    **Logic Equations:**

    *   S = A XOR B
    *   C = A AND B

*   **Full Adder:** Adds three single-bit binary numbers (A, B, and Carry-in Cin).  Outputs are Sum (S) and Carry-out (Cout).

    | A | B | Cin | S | Cout |
    |---|---|---|---|---|
    | 0 | 0 | 0 | 0 | 0 |
    | 0 | 0 | 1 | 1 | 0 |
    | 0 | 1 | 0 | 1 | 0 |
    | 0 | 1 | 1 | 0 | 1 |
    | 1 | 0 | 0 | 1 | 0 |
    | 1 | 0 | 1 | 0 | 1 |
    | 1 | 1 | 0 | 0 | 1 |
    | 1 | 1 | 1 | 1 | 1 |

    **Implementation:** A full adder can be implemented using two half adders and an OR gate.

*   **Parallel Adder:** Adds two *n*-bit binary numbers.  It uses multiple full adders connected in cascade.  The carry-out from one stage is fed as the carry-in to the next stage (Ripple Carry Adder).
    *   **Ripple Carry Adder:** Simple to implement but slow due to carry propagation delay.
    *   **Carry Lookahead Adder:**  Faster than ripple carry adder because it generates carry signals in parallel, reducing the carry propagation delay.

*   **Binary Subtractor:**  Subtraction can be performed using addition by taking the 2's complement of the subtrahend and adding it to the minuend.

    *   **Half Subtractor:** Subtracts two single-bit binary numbers (A - B). Outputs are Difference (D) and Borrow (Bo).
    *   **Full Subtractor:** Subtracts three single-bit binary numbers (A, B, and Borrow-in Bin). Outputs are Difference (D) and Borrow-out (Bout).

**Example:** A 4-bit ripple carry adder adds two 4-bit numbers A3A2A1A0 and B3B2B1B0.  Four full adders are used, with the carry-out of the least significant bit (A0+B0) connected to the carry-in of the next full adder (A1+B1), and so on.

---

## 7. Comparators

*   **Definition:** A comparator is a combinational logic circuit that compares two binary numbers (A and B) and determines their relationship.  The outputs indicate whether A = B, A > B, or A < B.

*   **Types:**
    *   **1-bit Comparator:** Compares two single-bit numbers.
    *   **n-bit Comparator:** Compares two *n*-bit numbers.

*   **1-bit Comparator:**

    | A | B | A = B | A > B | A < B |
    |---|---|---|---|---|
    | 0 | 0 | 1 | 0 | 0 |
    | 0 | 1 | 0 | 0 | 1 |
    | 1 | 0 | 0 | 1 | 0 |
    | 1 | 1 | 1 | 0 | 0 |

    **Logic Equations:**

    *   A = B = A'B' + AB  (XNOR Gate)
    *   A > B = A B'
    *   A < B = A' B

*   **n-bit Comparator:**  *n*-bit comparators can be implemented using a cascade of 1-bit comparators or using dedicated ICs like the 74LS85.  Cascading typically involves using the equality output of the previous stage as an enable input to the next stage.

**Example:**  A 4-bit comparator (like the 74LS85) compares two 4-bit numbers A3A2A1A0 and B3B2B1B0. The outputs indicate whether A = B, A > B, or A < B.  It can also be cascaded with other 74LS85 chips to compare larger numbers.

---

## 8. Programmable Logic Devices (PLDs)

*   **Definition:** Programmable Logic Devices (PLDs) are integrated circuits that can be electrically configured to implement a wide variety of combinational and sequential logic functions.

*   **Types of PLDs:**
    *   **PROM (Programmable Read-Only Memory):** Fixed AND array, programmable OR array.
    *   **PLA (Programmable Logic Array):** Programmable AND array, programmable OR array.
    *   **PAL (Programmable Array Logic):** Programmable AND array, fixed OR array. This is the most popular architecture.
    *   **GAL (Generic Array Logic):** Reprogrammable version of PAL.
    *   **FPGA (Field-Programmable Gate Array):**  More complex and versatile than PALs/GALs. Consists of configurable logic blocks (CLBs) interconnected by a programmable routing network.

*   **Architecture (Example: PAL):** A PAL consists of an array of AND gates and an array of OR gates.  The AND array is programmable, meaning connections to the AND gates can be programmed.  The OR array is fixed.

*   **Programming:** PLDs are programmed using specialized software and hardware.  The programming process involves creating a fuse map that specifies which connections in the AND array should be made.

*   **Advantages of PLDs:**
    *   Flexibility and reprogrammability.
    *   Reduced chip count and board space.
    *   Faster design cycles.
    *   Easier to debug and modify.

*   **Applications of PLDs:**
    *   Implementing custom logic functions.
    *   Replacing discrete logic circuits.
    *   Prototyping digital systems.
    *   Implementing control logic.

**Example:**  A PAL can be programmed to implement complex Boolean equations. Each output of the PAL is the OR of several AND terms. The AND terms can be configured to represent any combination of input variables and their complements.

---

## 9.  Important Points to Remember

*   **Decoder vs. Encoder:** Decoders convert a binary code to a single active output; encoders convert an active input to a binary code.
*   **Multiplexer vs. Demultiplexer:** Multiplexers select one of several inputs and route it to a single output; demultiplexers route a single input to one of several outputs.
*   **Adders and Subtractors:**  Full adders are the building blocks for multi-bit adders. Subtraction is often performed using 2's complement addition.
*   **Comparators:** Determine the relationship (equal, greater than, less than) between two binary numbers.
*   **PLDs:** Offer flexibility and reprogrammability, making them useful for implementing custom logic.  Understand the difference between PROM, PLA, PAL, GAL, and FPGA.

---

## 10. Practice Questions and Exercises

**Question 1:** Design a 4-to-1 multiplexer using only AND, OR, and NOT gates. Draw the logic diagram.

**Answer:**  See the logic equation and logic diagram for 4-to-1 MUX in section 4.

**Question 2:**  Explain the difference between a ripple carry adder and a carry lookahead adder. What are the advantages and disadvantages of each?

**Answer:** Ripple carry adders are simple to implement but have a slow carry propagation delay. Carry lookahead adders are faster because they generate carry signals in parallel, reducing the carry propagation delay, but they are more complex to implement.

**Question 3:**  How would you implement a full subtractor using only NAND gates?  Derive the Boolean expressions and draw the circuit diagram.

**Answer:**
Full Subtractor Logic:

*   D = A XOR B XOR Bin
*   Bout = A'Bin + A'B + B Bin

Implementation using NAND gates involves converting these equations to NAND-only expressions using DeMorgan's theorem and implementing them. (This is a longer exercise involving multiple gate transformations.)

**Question 4:** Design a circuit that converts a 3-bit binary number to its Gray code equivalent. You can use XOR gates and any other logic gates.

**Answer:**
Let the 3-bit binary number be B2 B1 B0 and the Gray code be G2 G1 G0. The conversion equations are:
* G2 = B2
* G1 = B2 XOR B1
* G0 = B1 XOR B0
The circuit would consist of two XOR gates. One XOR gate takes B2 and B1 as inputs to produce G1. Another XOR gate takes B1 and B0 as inputs to produce G0. G2 is simply B2.

**Question 5:** A decoder is sometimes also referred to as a...
a) Data Selector
b) Data Distributor
c) Code Converter
d) Encoder

**Answer:** c) Code Converter

**Question 6:** What is the primary difference between a PAL and a PLA?

**Answer:** A PAL has a programmable AND array and a *fixed* OR array, while a PLA has *both* programmable AND and OR arrays.

**Question 7:**  Explain the functionality of an Enable input in a decoder.

**Answer:** The enable input allows or disallows the decoder to function.  When the enable input is active, the decoder performs its normal decoding function.  When the enable input is inactive, all outputs are typically inactive (e.g., all outputs are LOW), regardless of the input code.

**Question 8:**  Describe a practical application where you would use a priority encoder.

**Answer:**  Priority encoders are commonly used in interrupt handling in microprocessors.  When multiple devices request service from the processor simultaneously, the priority encoder determines which device has the highest priority and generates an interrupt signal corresponding to that device.

---
