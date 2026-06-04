---
title: "Multiplexer, Demultiplexer,Encoder, Decoder"
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aedb"
status: "completed"
scrapedAt: "2026-05-20T16:24:20.147Z"
---
# DIGITAL LAB - Module 2: Combinational Logic Circuits - Multiplexer, Demultiplexer, Encoder, Decoder

**Module Goal:** Design and implement a combinational logic circuit for arbitrary functions.
**Topic:** Multiplexer, Demultiplexer, Encoder, Decoder

**Learning Outcomes:**

*   Understand the functionality and operation of multiplexers, demultiplexers, encoders, and decoders.
*   Design and implement multiplexers and demultiplexers using logic gates.
*   Apply encoders and decoders in digital circuit design.
*   Analyze the truth tables and logic equations for these components.
*   Utilize multiplexers to implement arbitrary Boolean functions.

## 1. Multiplexer (MUX)

**1.1 Definition:**

*   A multiplexer (MUX), also known as a data selector, is a combinational circuit that selects one of several input signals and forwards the selected input to a single output line. The selection is controlled by a set of select lines.

**1.2 Key Concepts:**

*   **Inputs:** Multiple data input lines (I<sub>0</sub>, I<sub>1</sub>, I<sub>2</sub>, ..., I<sub>n-1</sub>).
*   **Select Lines (Control Inputs):**  A set of lines (S<sub>0</sub>, S<sub>1</sub>, ..., S<sub>m-1</sub>) used to select which input is routed to the output.  `m` select lines can select from `2^m = n` inputs.
*   **Output:** A single output line (Y).

**1.3 Operation:**

*   Based on the binary value of the select lines, one of the input data lines is connected to the output line.  For example, in a 4-to-1 MUX, the select lines S<sub>1</sub>S<sub>0</sub> = 00 would select I<sub>0</sub>, 01 would select I<sub>1</sub>, 10 would select I<sub>2</sub>, and 11 would select I<sub>3</sub>.

**1.4 Logic Diagram and Truth Table (Example: 4-to-1 MUX):**

*   **Logic Diagram:** (Imagine a diagram here.  It would typically consist of AND gates connected to each input line, and an OR gate combining the outputs of the AND gates. The select lines would be connected to the AND gates, enabling only one gate at a time).
*   **Truth Table:**

| S1 | S0 | Y   |
|----|----|-----|
| 0  | 0  | I0  |
| 0  | 1  | I1  |
| 1  | 0  | I2  |
| 1  | 1  | I3  |

**1.5 Logic Equation (for 4-to-1 MUX):**

Y = (!S1 & !S0 & I0) | (!S1 & S0 & I1) | (S1 & !S0 & I2) | (S1 & S0 & I3)

Where:

*   `!` represents NOT.
*   `&` represents AND.
*   `|` represents OR.

**1.6 Implementation using Logic Gates:**

A 4-to-1 MUX can be implemented using AND gates (one for each input) and a single OR gate to combine the outputs. The select lines are used to enable the appropriate AND gate, thereby selecting the corresponding input.

**1.7 Applications:**

*   Data selection and routing
*   Parallel-to-serial data conversion
*   Function generators
*   Address decoding in memory systems

**1.8 Example:**

Imagine you have four sensors monitoring temperature (I0, I1, I2, I3). You want to send only one sensor's reading to a single output line (Y) based on a control signal (S1, S0). A 4-to-1 MUX can achieve this.

## 2. Demultiplexer (DEMUX)

**2.1 Definition:**

*   A demultiplexer (DEMUX), also known as a data distributor, is a combinational circuit that receives data from a single input line and transmits it to one of several output lines. The output line is selected by a set of select lines.

**2.2 Key Concepts:**

*   **Input:** A single data input line (D).
*   **Select Lines (Control Inputs):** A set of lines (S<sub>0</sub>, S<sub>1</sub>, ..., S<sub>m-1</sub>) used to select which output line receives the input data. `m` select lines can select from `2^m = n` outputs.
*   **Outputs:** Multiple output lines (O<sub>0</sub>, O<sub>1</sub>, O<sub>2</sub>, ..., O<sub>n-1</sub>).

**2.3 Operation:**

*   The input data (D) is routed to one of the output lines based on the binary value of the select lines. The selected output line will have the value of the input data, while all other output lines will typically be 0 (if D=1) or 1 (if D=0, and the demux is designed to output the inverse).

**2.4 Logic Diagram and Truth Table (Example: 1-to-4 DEMUX):**

*   **Logic Diagram:** (Imagine a diagram here. It would consist of AND gates connected to the input line. The select lines would be connected to the AND gates, enabling only one gate at a time. Each AND gate's output represents a demultiplexer output).
*   **Truth Table:**

| S1 | S0 | O0 | O1 | O2 | O3 |
|----|----|----|----|----|----|
| 0  | 0  | D  | 0  | 0  | 0  |
| 0  | 1  | 0  | D  | 0  | 0  |
| 1  | 0  | 0  | 0  | D  | 0  |
| 1  | 1  | 0  | 0  | 0  | D  |

**2.5 Logic Equations (for 1-to-4 DEMUX):**

*   O0 = D & !S1 & !S0
*   O1 = D & !S1 & S0
*   O2 = D & S1 & !S0
*   O3 = D & S1 & S0

**2.6 Implementation using Logic Gates:**

A 1-to-4 DEMUX can be implemented using AND gates.  Each output corresponds to an AND gate, and the select lines are used to enable only one AND gate at a time. The input data line is connected to all the AND gates.

**2.7 Applications:**

*   Data routing
*   Serial-to-parallel data conversion
*   Address decoding in memory systems
*   Communication systems

**2.8 Example:**

You have a single data line (D) from a CPU and four peripherals (O0, O1, O2, O3). You want to send data from the CPU to a specific peripheral. A 1-to-4 DEMUX, controlled by the CPU's address bus (S1, S0), can route the data to the appropriate peripheral.

## 3. Encoder

**3.1 Definition:**

*   An encoder is a combinational circuit that converts an active input signal into a coded output signal. It performs the reverse operation of a decoder.

**3.2 Key Concepts:**

*   **Inputs:** Multiple input lines (I<sub>0</sub>, I<sub>1</sub>, I<sub>2</sub>, ..., I<sub>n-1</sub>). Typically, only one input is active (high) at a time (in a standard encoder).
*   **Outputs:** A set of output lines (O<sub>0</sub>, O<sub>1</sub>, ..., O<sub>m-1</sub>) that represent the binary code corresponding to the active input. `n` inputs can be encoded into `m` outputs where `2^m >= n`.

**3.3 Operation:**

*   When an input line is active, the encoder generates a unique binary code on the output lines that represents the index of the active input.

**3.4 Example: 4-to-2 Encoder:**

*   **Inputs:** I0, I1, I2, I3
*   **Outputs:** O1, O0

*   **Truth Table:**

| I0 | I1 | I2 | I3 | O1 | O0 |
|----|----|----|----|----|----|
| 1  | 0  | 0  | 0  | 0  | 0  |
| 0  | 1  | 0  | 0  | 0  | 1  |
| 0  | 0  | 1  | 0  | 1  | 0  |
| 0  | 0  | 0  | 1  | 1  | 1  |

*   **Logic Equations:**

    *   O0 = I1 | I3
    *   O1 = I2 | I3

**3.5 Priority Encoder:**

*   A priority encoder resolves the problem of multiple active inputs. It assigns priority to the input lines. If multiple inputs are active, the encoder outputs the code corresponding to the input with the highest priority.

**3.6 Applications:**

*   Keyboard encoding
*   Address decoding
*   Priority interrupt handling

## 4. Decoder

**4.1 Definition:**

*   A decoder is a combinational circuit that converts a binary code on its input lines into a unique active signal on one of its output lines.

**4.2 Key Concepts:**

*   **Inputs:** A set of input lines (I<sub>0</sub>, I<sub>1</sub>, ..., I<sub>m-1</sub>) representing a binary code.
*   **Outputs:** Multiple output lines (O<sub>0</sub>, O<sub>1</sub>, O<sub>2</sub>, ..., O<sub>n-1</sub>).  `m` inputs can decode to `2^m = n` outputs.
*   **Enable Input (Optional):**  Some decoders have an enable input. The decoder is only active when the enable input is asserted.

**4.3 Operation:**

*   For each input combination, one and only one output line is activated (e.g., goes high), while all other outputs are inactive (e.g., low).

**4.4 Example: 2-to-4 Decoder:**

*   **Inputs:** I1, I0
*   **Outputs:** O0, O1, O2, O3

*   **Truth Table:**

| I1 | I0 | O0 | O1 | O2 | O3 |
|----|----|----|----|----|----|
| 0  | 0  | 1  | 0  | 0  | 0  |
| 0  | 1  | 0  | 1  | 0  | 0  |
| 1  | 0  | 0  | 0  | 1  | 0  |
| 1  | 1  | 0  | 0  | 0  | 1  |

*   **Logic Equations:**

    *   O0 = !I1 & !I0
    *   O1 = !I1 & I0
    *   O2 = I1 & !I0
    *   O3 = I1 & I0

**4.5 Applications:**

*   Address decoding in memory systems
*   Instruction decoding in CPUs
*   Seven-segment display drivers

## 5. Using Multiplexers to Implement Boolean Functions

A multiplexer can be used to implement any Boolean function. Here's how:

1.  **Determine the number of select lines:** For a function with `n` variables, use an MUX with `n-1` select lines. The `n-1` variables are connected to the select lines.
2.  **Create a truth table for the function.**
3.  **Connect the remaining input variable (or its complement, 0, or 1) to the data inputs of the MUX based on the truth table.**

**Example:**

Implement the Boolean function F(A, B, C) = A'BC + AB'C' + ABC using a 4-to-1 MUX.

1.  **Select Lines:** Use A and B as select lines (S1 = A, S0 = B).
2.  **Truth Table:**

    | A | B | C | F |
    |---|---|---|---|
    | 0 | 0 | 0 | 0 |
    | 0 | 0 | 1 | 1 |
    | 0 | 1 | 0 | 0 |
    | 0 | 1 | 1 | 1 |
    | 1 | 0 | 0 | 1 |
    | 1 | 0 | 1 | 0 |
    | 1 | 1 | 0 | 0 |
    | 1 | 1 | 1 | 1 |

3.  **MUX Input Connections:**

    *   **S1S0 = 00 (A=0, B=0):** F = C.  Connect I0 to C.
    *   **S1S0 = 01 (A=0, B=1):** F = C.  Connect I1 to C.
    *   **S1S0 = 10 (A=1, B=0):** F = C'. Connect I2 to C'.
    *   **S1S0 = 11 (A=1, B=1):** F = C.  Connect I3 to C.

## 6. Practice Questions and Exercises

**Question 1:**

What is the primary function of a multiplexer?

**Answer:**

A multiplexer selects one of several input signals and forwards it to a single output.

**Question 2:**

How many select lines are needed for a multiplexer with 16 inputs?

**Answer:**

log<sub>2</sub>(16) = 4 select lines are needed.

**Question 3:**

Draw the truth table for a 2-to-4 decoder with an enable input (E).

**Answer:**

| E | I1 | I0 | O0 | O1 | O2 | O3 |
|---|---|---|---|---|---|---|
| 0 | X | X | 0  | 0  | 0  | 0  | (X means don't care)
| 1 | 0 | 0 | 1  | 0  | 0  | 0  |
| 1 | 0 | 1 | 0  | 1  | 0  | 0  |
| 1 | 1 | 0 | 0  | 0  | 1  | 0  |
| 1 | 1 | 1 | 0  | 0  | 0  | 1  |

**Question 4:**

Design a 4-to-1 multiplexer using AND-OR logic.  Write the logic equations.

**Answer:**

(See section 1.6 for the description and 1.5 for equations of a 4-to-1 MUX)

**Question 5:**

Implement the function F(X, Y, Z) = X'YZ + XY'Z' + XYZ using an 8-to-1 multiplexer.  How would the select lines be connected?

**Answer:**

Connect X, Y, and Z to the select lines S2, S1, and S0, respectively (S2=X, S1=Y, S0=Z). Create the truth table for F(X, Y, Z) and then connect the corresponding values of F to the data inputs I0 through I7 of the MUX.

| X | Y | Z | F | MUX Input |
|---|---|---|---|------------|
| 0 | 0 | 0 | 0 | I0 = 0    |
| 0 | 0 | 1 | 0 | I1 = 0    |
| 0 | 1 | 0 | 0 | I2 = 0    |
| 0 | 1 | 1 | 1 | I3 = 1    |
| 1 | 0 | 0 | 1 | I4 = 1    |
| 1 | 0 | 1 | 0 | I5 = 0    |
| 1 | 1 | 0 | 0 | I6 = 0    |
| 1 | 1 | 1 | 1 | I7 = 1    |

**Exercise:**

1.  Simulate a 4-to-1 MUX and a 1-to-4 DEMUX using a hardware description language (HDL) like Verilog or VHDL.
2.  Design a priority encoder for 4 inputs.

## 7. Important Points to Remember

*   **Multiplexer:** Selects one of many inputs and routes it to a single output.
*   **Demultiplexer:** Routes a single input to one of many outputs.
*   **Encoder:** Converts an active input to a binary code.
*   **Decoder:** Converts a binary code to an active output.
*   `n` select lines can control `2^n` inputs/outputs.
*   Multiplexers can be used to implement any Boolean function.
*   Priority encoders resolve the issue of multiple active inputs by assigning priorities.

This comprehensive study guide should provide a solid foundation for understanding and working with multiplexers, demultiplexers, encoders, and decoders in digital logic design. Remember to practice designing and simulating these circuits to solidify your understanding. Good luck!
