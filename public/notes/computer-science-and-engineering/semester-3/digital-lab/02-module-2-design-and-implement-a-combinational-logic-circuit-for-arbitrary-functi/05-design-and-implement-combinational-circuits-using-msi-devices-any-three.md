---
title: "Design and implement combinational circuits using MSI devices: (any three)"
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aedc"
status: "completed"
scrapedAt: "2026-05-20T16:24:20.850Z"
---
# DIGITAL LAB - Module 2: Combinational Logic Design with MSI Devices

**Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)**

**Topic: Design and implement combinational circuits using MSI devices: (any three)**

**Description:** Design and implement combinational circuits using MSI devices: (any three) from Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two) in DIGITAL LAB

**Learning Outcomes:**

*   Understand the concept of MSI (Medium Scale Integration) devices and their advantages in combinational circuit design.
*   Learn the functionality and applications of common MSI devices such as:
    *   Multiplexers (MUX)
    *   Demultiplexers (DEMUX)
    *   Decoders
    *   Encoders
    *   Adders (Half Adder, Full Adder, Parallel Adder)
    *   Comparators
*   Design and implement combinational circuits using selected MSI devices to realize arbitrary Boolean functions.
*   Analyze and troubleshoot circuits designed with MSI devices.
*   Compare and contrast different MSI device implementations for a given Boolean function in terms of complexity, cost, and performance.

## 1. Introduction to MSI Devices

*   **Definition:** MSI (Medium Scale Integration) devices are integrated circuits that contain a moderate number of gates (typically 10 to 100) within a single package.
*   **Advantages:**
    *   Reduced chip count and wiring complexity compared to using individual logic gates.
    *   Lower power consumption.
    *   Smaller board space.
    *   Improved reliability.
    *   Faster development time.

*   **Common MSI Devices:** Multiplexers, Demultiplexers, Decoders, Encoders, Adders, Comparators, etc.
*   **Combinational Logic:**  The output of a combinational circuit at any given time depends only on the current input values.  MSI devices are often used to implement complex combinational functions.

## 2. Multiplexers (MUX)

*   **Definition:** A multiplexer (MUX) is a combinational circuit that selects one of several input signals and forwards the selected input to a single output line. Also known as a data selector.
*   **Components:**
    *   Data Inputs (I0, I1, I2, I3,... In-1)
    *   Select Inputs (S0, S1, S2,...) : Determine which data input is selected.  *n* select lines can choose from 2^n data inputs.
    *   Output (Y)
*   **Functionality:** The select inputs determine which data input is connected to the output.
*   **Truth Table Example (4:1 MUX):**

    | S1 | S0 | Y    |
    |----|----|------|
    | 0  | 0  | I0   |
    | 0  | 1  | I1   |
    | 1  | 0  | I2   |
    | 1  | 1  | I3   |

*   **Applications:**
    *   Data selection
    *   Parallel-to-serial data conversion
    *   Logic function implementation (realizing arbitrary Boolean functions)
    *   Address decoding
*   **Realizing Boolean Functions with MUX:** A Boolean function with *n* variables can be implemented using a 2^n-to-1 MUX.  The *n* variables are connected to the select lines, and the data inputs are connected to either 0 or 1 based on the function's truth table.
    *   **Example:** Implement the function F(A, B, C) = Σ(1, 2, 4, 7) using an 8:1 MUX.
        *   Connect A, B, and C to the select lines S2, S1, and S0 respectively (A=S2, B=S1, C=S0).
        *   Based on the truth table of F, connect the data inputs as follows:
            *   I0 = 0 (F=0 when ABC=000)
            *   I1 = 1 (F=1 when ABC=001)
            *   I2 = 1 (F=1 when ABC=010)
            *   I3 = 0 (F=0 when ABC=011)
            *   I4 = 1 (F=1 when ABC=100)
            *   I5 = 0 (F=0 when ABC=101)
            *   I6 = 0 (F=0 when ABC=110)
            *   I7 = 1 (F=1 when ABC=111)

## 3. Demultiplexers (DEMUX)

*   **Definition:** A demultiplexer (DEMUX) is a combinational circuit that takes a single input line and routes it to one of several output lines.  Also known as a data distributor. It performs the reverse operation of a multiplexer.
*   **Components:**
    *   Data Input (D)
    *   Select Inputs (S0, S1, S2,...) : Determine which output is activated.
    *   Outputs (Y0, Y1, Y2, Y3,... Yn-1)
*   **Functionality:** The select inputs determine which output line receives the data input. All other output lines are usually set to 0.
*   **Truth Table Example (1:4 DEMUX):**

    | S1 | S0 | Y0   | Y1   | Y2   | Y3   |
    |----|----|------|------|------|------|
    | 0  | 0  | D    | 0    | 0    | 0    |
    | 0  | 1  | 0    | D    | 0    | 0    |
    | 1  | 0  | 0    | 0    | D    | 0    |
    | 1  | 1  | 0    | 0    | 0    | D    |

*   **Applications:**
    *   Data routing
    *   Serial-to-parallel data conversion
    *   Address decoding

## 4. Decoders

*   **Definition:** A decoder is a combinational circuit that converts a binary input code into a unique output signal.  An *n*-to-2^*n* decoder has *n* input lines and 2^*n* output lines. Only one output line is active (usually HIGH) at a time, corresponding to the binary value on the input lines.
*   **Components:**
    *   Input lines (A0, A1,... An-1): Represent the binary code.
    *   Output lines (Y0, Y1,... Y2^n -1): Each represents a unique combination of the input.
*   **Functionality:** Decodes a binary input code and activates a specific output line.
*   **Truth Table Example (2-to-4 Decoder):**

    | A1 | A0 | Y0   | Y1   | Y2   | Y3   |
    |----|----|------|------|------|------|
    | 0  | 0  | 1    | 0    | 0    | 0    |
    | 0  | 1  | 0    | 1    | 0    | 0    |
    | 1  | 0  | 0    | 0    | 1    | 0    |
    | 1  | 1  | 0    | 0    | 0    | 1    |

*   **Applications:**
    *   Address decoding in memory systems.
    *   Instruction decoding in CPUs.
    *   Implementing Boolean functions (by OR-ing appropriate outputs).
*   **Realizing Boolean Functions with Decoders:** A Boolean function can be implemented using a decoder and external OR gates. The outputs of the decoder corresponding to the minterms of the function are connected to the inputs of the OR gate. The output of the OR gate represents the desired Boolean function.
    *   **Example:** Implement F(A, B, C) = Σ(1, 2, 4, 7) using a 3-to-8 decoder.
        *   Use a 3-to-8 decoder with inputs A, B, and C.
        *   Connect the outputs Y1, Y2, Y4, and Y7 of the decoder to the inputs of a 4-input OR gate.
        *   The output of the OR gate will be F(A, B, C).

## 5. Encoders

*   **Definition:** An encoder is a combinational circuit that converts an active input signal into a binary output code.  It performs the inverse operation of a decoder.
*   **Components:**
    *   Input lines (I0, I1,... In-1): Only one input is typically active (HIGH) at a time.
    *   Output lines (A0, A1,... Am-1): Represent the binary code corresponding to the active input. Where n <= 2^m
*   **Functionality:** Generates a binary code representing the active input line.
*   **Truth Table Example (4-to-2 Encoder):**

    | I0 | I1 | I2 | I3 | A1 | A0 |
    |----|----|----|----|----|----|
    | 1  | 0  | 0  | 0  | 0  | 0  |
    | 0  | 1  | 0  | 0  | 0  | 1  |
    | 0  | 0  | 1  | 0  | 1  | 0  |
    | 0  | 0  | 0  | 1  | 1  | 1  |

*   **Priority Encoder:** If multiple inputs are active simultaneously, a priority encoder selects the input with the highest priority and generates its corresponding binary code.  The truth table will include "don't care" conditions for lower priority inputs.
*   **Applications:**
    *   Keyboard encoding
    *   Priority interrupt handling

## 6. Adders

*   **Half Adder:**
    *   Adds two single-bit binary numbers (A and B).
    *   Outputs: Sum (S) and Carry (C).
    *   Truth Table:

        | A | B | S | C |
        |---|---|---|---|
        | 0 | 0 | 0 | 0 |
        | 0 | 1 | 1 | 0 |
        | 1 | 0 | 1 | 0 |
        | 1 | 1 | 0 | 1 |
    *   Equations: S = A XOR B;  C = A AND B
*   **Full Adder:**
    *   Adds three single-bit binary numbers (A, B, and Carry-in Cin).
    *   Outputs: Sum (S) and Carry-out (Cout).
    *   Truth Table:

        | A | B | Cin | S | Cout |
        |---|---|-----|---|------|
        | 0 | 0 | 0   | 0 | 0    |
        | 0 | 0 | 1   | 1 | 0    |
        | 0 | 1 | 0   | 1 | 0    |
        | 0 | 1 | 1   | 0 | 1    |
        | 1 | 0 | 0   | 1 | 0    |
        | 1 | 0 | 1   | 0 | 1    |
        | 1 | 1 | 0   | 0 | 1    |
        | 1 | 1 | 1   | 1 | 1    |
    *   Equations: S = A XOR B XOR Cin; Cout = (A AND B) OR (Cin AND (A XOR B))
*   **Parallel Adder:**
    *   Adds two multi-bit binary numbers.
    *   Constructed by cascading full adders.
    *   Carry-out of one full adder is connected to the carry-in of the next higher-order full adder.
    *   **Example:** A 4-bit parallel adder uses four full adders to add two 4-bit numbers.

## 7. Comparators

*   **Definition:** A comparator is a combinational circuit that compares two binary numbers and determines their relative magnitudes.
*   **Outputs:** Typically, three outputs:
    *   A > B
    *   A < B
    *   A = B
*   **Implementation:** Can be implemented using XOR gates and AND/OR gates.
*   **Magnitude Comparator:** Compares the magnitude of two numbers to see if one is larger, smaller, or equal.
*   **Cascading Comparators:**  Larger bit numbers can be compared by cascading multiple comparators.
*   **Applications:**
    *   Process control
    *   Digital controllers
    *   Address decoding

## 8. Design Examples

Here are two examples of arbitrary functions designed using MSI devices:

**Example 1: Implementing F(A, B, C, D) = Σ(0, 2, 5, 7, 8, 10, 13, 15) using a 4:1 MUX**

1.  **Choose the variables for the select lines:** Let A and B be the select lines.  Then C and D become the data inputs to be connected to the MUX.
2.  **Create a reduced truth table based on A and B:**

    | A | B | C | D | F |
    |---|---|---|---|---|
    | 0 | 0 | 0 | 0 | 1 |
    | 0 | 0 | 0 | 1 | 0 |
    | 0 | 0 | 1 | 0 | 1 |
    | 0 | 0 | 1 | 1 | 0 |
    | 0 | 1 | 0 | 0 | 0 |
    | 0 | 1 | 0 | 1 | 1 |
    | 0 | 1 | 1 | 0 | 0 |
    | 0 | 1 | 1 | 1 | 1 |
    | 1 | 0 | 0 | 0 | 1 |
    | 1 | 0 | 0 | 1 | 0 |
    | 1 | 0 | 1 | 0 | 1 |
    | 1 | 0 | 1 | 1 | 0 |
    | 1 | 1 | 0 | 0 | 0 |
    | 1 | 1 | 0 | 1 | 1 |
    | 1 | 1 | 1 | 0 | 0 |
    | 1 | 1 | 1 | 1 | 1 |

3. **Determine MUX input connections:**

    *   **AB = 00:** F(CD) = C'D' + CD' = D'
        *   Connect I0 to D' (NOT D)
    *   **AB = 01:** F(CD) = C'D + CD = D
        *   Connect I1 to D
    *   **AB = 10:** F(CD) = C'D' + CD' = D'
        *   Connect I2 to D' (NOT D)
    *   **AB = 11:** F(CD) = C'D + CD = D
        *   Connect I3 to D

4.  **Connect the select lines A and B to the select inputs of the 4:1 MUX.**  The output of the MUX will be F(A, B, C, D).

**Example 2: Implementing F(A, B, C, D) = Σ(1, 3, 5, 7, 9, 11, 13, 15) using a 3-to-8 Decoder and an OR gate**

1.  **Use a 3-to-8 decoder with inputs A, B, and C.**
2.  **Connect the outputs Y1, Y3, Y5, Y7, Y9, Y11, Y13 and Y15 of the decoder to the inputs of an 8-input OR gate.**
3.  **Connect D to the Enable input of the decoder.** Since the function equals 1 only when D=1, the decoder must be enabled by D.

4. **The output of the OR gate will be F(A, B, C, D).**

## 9. Practice Questions

1.  Design a 4-to-1 MUX using only AND, OR, and NOT gates.
    *   **Answer:** See standard textbook implementations. Key is creating the select logic for each input to be ANDed with the input, then ORing all the resulting terms together.

2.  Explain the difference between a decoder and a demultiplexer.
    *   **Answer:** A decoder converts a binary input into a unique output, activating only one output line at a time. A demultiplexer routes a single input signal to one of several outputs based on the select lines.  A demultiplexer can be considered a decoder with an enable input (the data input).

3.  Design a full adder using two half adders and an OR gate.
    *   **Answer:** Connect inputs A and B to the first half adder. Connect the Sum output of the first half adder and Cin to the inputs of the second half adder.  Connect the Carry outputs of both half adders to the inputs of an OR gate. The output of the second half adder is the Sum output, and the output of the OR gate is the Carry-out.

4.  Implement the following Boolean function using an 8:1 MUX: F(A, B, C) = A'BC + AB'C' + ABC
    *   **Answer:** Connect A, B, and C to the select lines of the MUX (S2=A, S1=B, S0=C). The data inputs are: I0=0, I1=0, I2=1, I3=0, I4=0, I5=1, I6=0, I7=1.

5.  What are the advantages of using MSI devices over implementing logic functions with individual gates?
    *   **Answer:** Reduced chip count, lower power consumption, smaller board space, improved reliability, and faster development time.

## 10. Important Points to Remember

*   Understand the truth tables and functionality of each MSI device.
*   Be able to map Boolean functions to MSI device implementations.
*   Consider the limitations of each device (e.g., number of inputs/outputs).
*   Optimize designs for simplicity, cost, and performance.
*   Pay attention to enable inputs and cascading techniques for larger designs.
*   Remember to minimize your equations for efficiency and reducing component count.

This detailed note provides a comprehensive overview of designing and implementing combinational circuits using MSI devices.  By understanding the concepts and examples, you should be well-prepared for your Digital Lab module. Remember to practice with additional examples to solidify your understanding!
