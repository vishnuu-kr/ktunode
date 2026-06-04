---
title: "MSI logic - Decoders (One-Hot decoder, 7 segment display decoder), Encoders, Multiplexers, Demultiplexers"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 3: MSI Logic and Digital Building Blocks"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad59"
status: "completed"
scrapedAt: "2026-05-20T16:23:56.000Z"
---
## DIGITAL ELECTRONICS AND LOGIC DESIGN - Module 3: MSI Logic and Digital Building Blocks

### Topic: MSI Logic - Decoders, Encoders, Multiplexers, Demultiplexers

**Learning Outcomes:**

*   Understand the operation of decoders and encoders.
*   Design and implement one-hot decoders and 7-segment display decoders.
*   Explain the functionality of multiplexers and demultiplexers.
*   Apply decoders, encoders, multiplexers, and demultiplexers in practical applications.

**1. Decoders**

*   **Definition:** A decoder is a combinational logic circuit that converts a binary input code into a unique output signal.  It decodes *n* inputs into a maximum of 2<sup>*n*</sup> outputs, where each output represents a unique input combination.
*   **Functionality:**  For a given input combination, only one output line is activated (logic '1' or '0', depending on the decoder's design) while all other output lines are inactive.
*   **Applications:** Memory addressing, data routing, control logic, and display drivers.

**1.1 Types of Decoders**

*   **n-to-2<sup>n</sup> Decoder:**
    *   Takes *n* input lines and generates 2<sup>*n*</sup> output lines.
    *   For example, a 2-to-4 decoder has 2 inputs and 4 outputs.  A 3-to-8 decoder has 3 inputs and 8 outputs.
    *   Truth Table example (2-to-4 Decoder):

        | Input A | Input B | Output Y0 | Output Y1 | Output Y2 | Output Y3 |
        |---|---|---|---|---|---|
        | 0 | 0 | 1 | 0 | 0 | 0 |
        | 0 | 1 | 0 | 1 | 0 | 0 |
        | 1 | 0 | 0 | 0 | 1 | 0 |
        | 1 | 1 | 0 | 0 | 0 | 1 |

*   **BCD-to-Decimal Decoder:**
    *   Converts a Binary Coded Decimal (BCD) input (4 bits representing decimal digits 0-9) into a decimal output (10 output lines, one for each digit).
    *   Outputs 0-9 correspond to BCD inputs 0000-1001.  Inputs 1010-1111 are usually don't care conditions, meaning the outputs for these inputs can be defined as either 0 or 1, depending on the specific design.

*   **BCD-to-7 Segment Decoder:**
    *   Converts a BCD input into signals to drive a 7-segment display, showing the corresponding decimal digit.
    *   We'll discuss this in detail below.

**1.2 One-Hot Decoder**

*   **Definition:** A one-hot decoder is a decoder where only one output is active HIGH (logic '1') at any given time, corresponding to the input code. The remaining outputs are LOW (logic '0').
*   **Implementation:** Usually implemented with AND gates. Each AND gate corresponds to one output, and its inputs are the original input variables or their complements, such that only one AND gate will have all inputs HIGH for a specific input combination.
*   **Example (2-to-4 One-Hot Decoder):**

    *   Inputs: A, B
    *   Outputs: Y0, Y1, Y2, Y3
    *   Logic Equations:
        *   Y0 = A'B'
        *   Y1 = A'B
        *   Y2 = AB'
        *   Y3 = AB

**1.3 7-Segment Display Decoder**

*   **Purpose:** To convert a binary or BCD number into the signals required to illuminate the correct segments of a 7-segment display, thus visually displaying the corresponding digit.
*   **7-Segment Display:**  Consists of seven LEDs (light-emitting diodes) arranged in a specific pattern to form a "figure-8".  Each LED is referred to as a segment, labeled a, b, c, d, e, f, and g.
*   **Common Anode vs. Common Cathode:**
    *   **Common Anode:**  All anodes of the LEDs are connected to a common positive voltage.  A segment is lit by applying a LOW (logic '0') signal to the corresponding cathode.
    *   **Common Cathode:** All cathodes of the LEDs are connected to a common ground. A segment is lit by applying a HIGH (logic '1') signal to the corresponding anode.
*   **Truth Table (Example for a Common Cathode 7-Segment Display Decoder):**  This is a simplified example. Real-world implementations often include additional blanking and ripple blanking features.

    | BCD Input (D, C, B, A) | a | b | c | d | e | f | g | Displayed Digit |
    |---|---|---|---|---|---|---|---|---|
    | 0000 (0) | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 |
    | 0001 (1) | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
    | 0010 (2) | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 2 |
    | 0011 (3) | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 3 |
    | 0100 (4) | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 4 |
    | 0101 (5) | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 5 |
    | 0110 (6) | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 6 |
    | 0111 (7) | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 7 |
    | 1000 (8) | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 8 |
    | 1001 (9) | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 9 |

*   **Implementation:** The logic equations for each segment (a, b, c, d, e, f, g) are derived from the truth table and then implemented using logic gates.  Due to complexity, PLDs (Programmable Logic Devices) or dedicated decoder chips are commonly used.

**Practice Question 1:**

Design a 3-to-8 one-hot decoder using AND gates. Provide the logic equations for each output.

**Answer 1:**

*   Inputs: A, B, C
*   Outputs: Y0, Y1, Y2, Y3, Y4, Y5, Y6, Y7
*   Logic Equations:
    *   Y0 = A'B'C'
    *   Y1 = A'B'C
    *   Y2 = A'BC'
    *   Y3 = A'BC
    *   Y4 = AB'C'
    *   Y5 = AB'C
    *   Y6 = ABC'
    *   Y7 = ABC

**2. Encoders**

*   **Definition:** An encoder is a combinational logic circuit that converts an active input signal into a coded output.  It performs the reverse operation of a decoder.
*   **Functionality:**  It has 2<sup>*n*</sup> (or fewer) input lines and *n* output lines.  Only one input is active at a time, and the output code represents the active input.
*   **Applications:** Keyboard encoding, priority encoding, address encoding in memory systems.

**2.1 Types of Encoders**

*   **2<sup>n</sup>-to-n Encoder:**  Converts 2<sup>*n*</sup> inputs into an *n*-bit binary code.
    *   Example: 8-to-3 encoder (8 inputs, 3 outputs).
    *   Problem: What if multiple inputs are active simultaneously?  The output will be incorrect.  This is why **Priority Encoders** are important.

*   **Priority Encoder:**
    *   Addresses the problem of multiple active inputs.
    *   Assigns a priority level to each input.  If multiple inputs are active, the output represents the *highest* priority active input.
    *   Includes an output (usually labeled V or Valid) that indicates whether any input is active.
    *   Truth Table Example (4-to-2 Priority Encoder):

        | Input I3 | Input I2 | Input I1 | Input I0 | Output A1 | Output A0 | V |
        |---|---|---|---|---|---|---|
        | 1 | X | X | X | 1 | 1 | 1 |
        | 0 | 1 | X | X | 1 | 0 | 1 |
        | 0 | 0 | 1 | X | 0 | 1 | 1 |
        | 0 | 0 | 0 | 1 | 0 | 0 | 1 |
        | 0 | 0 | 0 | 0 | X | X | 0 |

        *   X represents a "don't care" condition.  The output is independent of the input's value.
        *   I3 has the highest priority, I0 has the lowest.
        *   V (Valid) is 1 if any of the inputs are active, and 0 if all inputs are 0.

**Practice Question 2:**

Write the Boolean expressions for the outputs A1, A0, and V of the 4-to-2 priority encoder shown above.

**Answer 2:**

*   A1 = I3 + I2*I3' = I3 + I2
*   A0 = I3*I2'*I1' + I2*I3'*I1'*I0 = I3*(I2'+I1') + I2*(I3'+I1'*I0) (Can be simplified further based on boolean algebra)
*   V = I3 + I2 + I1 + I0

**3. Multiplexers (MUX)**

*   **Definition:** A multiplexer (or data selector) is a combinational logic circuit that selects one of several input signals and forwards it to a single output line.
*   **Functionality:** It has multiple data inputs, control (select) inputs, and a single output.  The select inputs determine which data input is connected to the output.
*   **Applications:** Data selection, parallel-to-serial conversion, logic function implementation.

**3.1 Key Components**

*   **Data Inputs (I0, I1, I2, ... In-1):**  The signals to be selected.
*   **Select Inputs (S0, S1, ... Sk-1):**  *k* select lines can choose one of 2<sup>*k*</sup> input lines.  So, *n* = 2<sup>*k*</sup>, where *n* is the number of data inputs.
*   **Output (Y):** The selected data input appears on the output.
*   **Enable Input (E):** (Optional)  Disables or enables the entire multiplexer. When disabled, the output is typically forced to a known state (0 or 1).

**3.2 Types of Multiplexers**

*   **2-to-1 Multiplexer:** Has two data inputs (I0, I1) and one select input (S0).
    *   If S0 = 0, Y = I0
    *   If S0 = 1, Y = I1
*   **4-to-1 Multiplexer:** Has four data inputs (I0, I1, I2, I3) and two select inputs (S1, S0).
    *   S1 S0 = 00, Y = I0
    *   S1 S0 = 01, Y = I1
    *   S1 S0 = 10, Y = I2
    *   S1 S0 = 11, Y = I3
*   **8-to-1 Multiplexer:** Has eight data inputs and three select inputs.  And so on...

**3.3 Logic Expression and Implementation (Example: 4-to-1 Multiplexer)**

*   Output Expression:  Y = (S1'S0' * I0) + (S1'S0 * I1) + (S1S0' * I2) + (S1S0 * I3)
*   Implementation:  Can be implemented using AND gates and an OR gate.  Each AND gate selects one input based on the select lines, and the OR gate combines the outputs of the AND gates.

**3.4 Multiplexer Trees**

*   Large multiplexers can be built using smaller multiplexers arranged in a tree-like structure. This reduces the complexity of the individual multiplexers. For example, an 8-to-1 MUX can be constructed from three 2-to-1 MUXs followed by one 4-to-1 MUX (or equivalent combinations).

**Practice Question 3:**

Implement the following Boolean function using an 8-to-1 multiplexer: F(A, B, C) = A'BC + AB'C' + ABC

**Answer 3:**

1.  **Create a truth table for the function F(A, B, C):**

    | A | B | C | F |
    |---|---|---|---|
    | 0 | 0 | 0 | 0 |
    | 0 | 0 | 1 | 0 |
    | 0 | 1 | 0 | 0 |
    | 0 | 1 | 1 | 1 |
    | 1 | 0 | 0 | 1 |
    | 1 | 0 | 1 | 0 |
    | 1 | 1 | 0 | 0 |
    | 1 | 1 | 1 | 1 |

2.  **Connect the variables A, B, and C to the select inputs of the 8-to-1 multiplexer.**  A connects to S2, B connects to S1, and C connects to S0.

3.  **Connect the data inputs of the multiplexer based on the truth table:**

    *   I0 = 0 (A'B'C' = 0)
    *   I1 = 0 (A'B'C = 0)
    *   I2 = 0 (A'BC' = 0)
    *   I3 = 1 (A'BC = 1)
    *   I4 = 1 (AB'C' = 1)
    *   I5 = 0 (AB'C = 0)
    *   I6 = 0 (ABC' = 0)
    *   I7 = 1 (ABC = 1)

    The output of the multiplexer will then implement the function F(A, B, C).

**4. Demultiplexers (DEMUX)**

*   **Definition:** A demultiplexer (or data distributor) is a combinational logic circuit that takes a single input signal and routes it to one of several output lines.  It performs the reverse operation of a multiplexer.
*   **Functionality:** It has one data input, control (select) inputs, and multiple output lines.  The select inputs determine which output line receives the data input.
*   **Applications:** Data routing, serial-to-parallel conversion.

**4.1 Key Components**

*   **Data Input (D):** The signal to be routed.
*   **Select Inputs (S0, S1, ... Sk-1):** *k* select lines can select one of 2<sup>*k*</sup> output lines.
*   **Outputs (Y0, Y1, Y2, ... Yn-1):**  The data input is routed to one of these outputs.
*   **Enable Input (E):** (Optional) Enables or disables the entire demultiplexer. When disabled, all outputs are typically forced to a known state (0).

**4.2 Types of Demultiplexers**

*   **1-to-2 Demultiplexer:** Has one data input (D) and one select input (S0).
    *   If S0 = 0, Y0 = D, Y1 = 0
    *   If S0 = 1, Y0 = 0, Y1 = D
*   **1-to-4 Demultiplexer:** Has one data input (D) and two select inputs (S1, S0).
    *   S1 S0 = 00, Y0 = D, Y1 = 0, Y2 = 0, Y3 = 0
    *   S1 S0 = 01, Y0 = 0, Y1 = D, Y2 = 0, Y3 = 0
    *   S1 S0 = 10, Y0 = 0, Y1 = 0, Y2 = D, Y3 = 0
    *   S1 S0 = 11, Y0 = 0, Y1 = 0, Y2 = 0, Y3 = D
*   **1-to-8 Demultiplexer:** Has one data input and three select inputs. And so on...

**4.3 Logic Expression and Implementation (Example: 1-to-4 Demultiplexer)**

*   Output Expressions:
    *   Y0 = D * S1' * S0'
    *   Y1 = D * S1' * S0
    *   Y2 = D * S1 * S0'
    *   Y3 = D * S1 * S0
*   Implementation: Can be implemented using AND gates. Each output is associated with an AND gate, and the data input and select lines are connected to the inputs of the AND gate.

**Practice Question 4:**

Design a 1-to-8 demultiplexer using a 1-to-2 demultiplexer and some additional logic gates if needed.

**Answer 4:**

This can be achieved by using a tree-like structure.
1. A 1-to-2 Demultiplexer is used to split the input into two signals based on the least significant bit of the select input (S0).
2. Then, each of these two outputs feeds into another 1-to-4 demultiplexer, each controlled by the two most significant bits of the select inputs (S2, S1).

In essence:

*   Input D goes to the 1-to-2 DEMUX.
*   The output of the 1-to-2 DEMUX is split into D0 and D1.
*   D0 goes to the input of the first 1-to-4 DEMUX.
*   D1 goes to the input of the second 1-to-4 DEMUX.
*   The first 1-to-4 DEMUX outputs Y0, Y1, Y2, and Y3.
*   The second 1-to-4 DEMUX outputs Y4, Y5, Y6, and Y7.
*   S0 is the select input for the 1-to-2 DEMUX.
*   S1 and S2 are the select inputs for both 1-to-4 DEMUXes.

**Important Points to Remember:**

*   **Decoders:** Convert coded inputs to individual outputs. One-hot decoders have only one active output. 7-segment decoders drive 7-segment displays.
*   **Encoders:** Convert active inputs to coded outputs. Priority encoders handle multiple active inputs by prioritizing them.
*   **Multiplexers:** Select one of several inputs and forward it to a single output.
*   **Demultiplexers:** Route a single input to one of several outputs.
*   MUXes and DEMUXes are essentially inverse operations.
*   These MSI components are building blocks that can be used to implement complex logic circuits and systems.
*   Understanding their truth tables and logic expressions is crucial for designing digital systems.
