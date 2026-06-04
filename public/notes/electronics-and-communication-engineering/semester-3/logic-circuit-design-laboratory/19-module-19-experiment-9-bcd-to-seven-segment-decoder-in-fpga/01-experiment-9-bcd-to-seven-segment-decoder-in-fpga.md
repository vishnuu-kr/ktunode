---
title: "Experiment 9. BCD to Seven Segment Decoder in FPGA"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 19: Experiment 9. BCD to Seven Segment Decoder in FPGA"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe473"
status: "completed"
scrapedAt: "2026-05-23T17:46:49.002Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY

## Module 19: Experiment 9. BCD to Seven Segment Decoder in FPGA

### Topic: Experiment 9. BCD to Seven Segment Decoder in FPGA

---

### 1. Introduction to Seven-Segment Displays and BCD Encoding

**Key Concepts:**

*   **Seven-Segment Display:** A common electronic display device used to display decimal digits. It consists of seven LEDs arranged in a specific pattern, typically labeled 'a' through 'g'. By illuminating different combinations of these LEDs, different digits (0-9) and some letters can be formed.
*   **BCD (Binary Coded Decimal):** A binary encoding system where each decimal digit (0-9) is represented by its 4-bit binary equivalent. For example, decimal 5 is represented as 0101 in BCD.
*   **Decoder:** A combinational logic circuit that converts a binary input code into a unique output code. In this experiment, a BCD to Seven-Segment decoder converts a 4-bit BCD input into a 7-bit output signal to control the segments of a seven-segment display.

**Objective:**

The primary objective of this experiment is to design and implement a BCD to Seven-Segment decoder circuit using a hardware description language (HDL), specifically Verilog, and then synthesize and deploy it onto an FPGA board. This will allow us to display decimal digits on a physical seven-segment display.

**Relevance to Course Outcomes:**

*   **CO1 (K3):** Design and demonstrate the functioning of various combinational circuits using ICs. (While we are using FPGA, the underlying design principles of combinational logic apply, and understanding the decoder function is key).
*   **CO2 (K3):** Apply an industry-compatible hardware description language to implement digital circuits. (This experiment is a direct application of Verilog for designing a combinational circuit).
*   **CO3 (K3):** Implement digital circuits on FPGA boards and connect external hardware to the boards. (The core of the experiment involves deploying the Verilog design onto an FPGA and interfacing it with the seven-segment display).

---

### 2. Understanding the BCD to Seven-Segment Decoding Logic

**Key Concepts:**

*   **Truth Table:** A fundamental tool in digital logic design that lists all possible input combinations and their corresponding outputs. We will construct a truth table for the BCD to Seven-Segment decoder.
*   **Boolean Expressions:** Deriving Boolean equations from the truth table for each of the seven segments (a, b, c, d, e, f, g).
*   **Karnaugh Maps (K-maps):** A graphical method for simplifying Boolean expressions. This is a crucial step in efficiently implementing the decoder logic, as recommended by textbooks like Roth C.H.
*   **Active High vs. Active Low Outputs:** Seven-segment displays can be designed to be "active high" (segments turn ON when the output is HIGH) or "active low" (segments turn ON when the output is LOW). The wiring of the display will determine this. We'll assume an active HIGH display for this explanation, meaning a '1' at an output segment line turns that segment ON.

**Deriving the Truth Table:**

Let the 4-bit BCD input be $D_3 D_2 D_1 D_0$. The 7-bit output signals control the segments a, b, c, d, e, f, g.

| BCD Input ($D_3D_2D_1D_0$) | Decimal Digit | Segments to be ON | Output (a, b, c, d, e, f, g) |
| :------------------------- | :------------ | :---------------- | :--------------------------- |
| 0000                       | 0             | a, b, c, d, e, f  | 1111110                      |
| 0001                       | 1             | b, c              | 0110000                      |
| 0010                       | 2             | a, b, d, e, g     | 1101101                      |
| 0011                       | 3             | a, b, c, d, g     | 1111001                      |
| 0100                       | 4             | b, c, f, g        | 0110011                      |
| 0101                       | 5             | a, c, d, f, g     | 1011011                      |
| 0110                       | 6             | a, c, d, e, f, g  | 1011111                      |
| 0111                       | 7             | a, b, c           | 1110000                      |
| 1000                       | 8             | a, b, c, d, e, f, g | 1111111                      |
| 1001                       | 9             | a, b, c, d, f, g  | 1111011                      |
| 1010 - 1111                | Invalid BCD   | (Don't care)      | (Don't care)                 |

**Example: Deriving Boolean Expression for Segment 'a'**

From the truth table, segment 'a' is ON for BCD inputs: 0000, 0010, 0011, 0101, 0110, 0111, 1000, 1001.

Using K-maps (as suggested by Roth C.H.) would be the systematic way to derive the minimized Boolean expression for 'a'. Let $D_3=w, D_2=x, D_1=y, D_0=z$.

**(K-map for segment 'a')**

|       | 00 (yz) | 01 (yz) | 11 (yz) | 10 (yz) |
| :---- | :------ | :------ | :------ | :------ |
| 00 (wx) | 1       | 0       | 0       | 0       |
| 01 (wx) | 0       | 1       | 1       | 1       |
| 11 (wx) | 1       | 0       | 0       | 0       |
| 10 (wx) | 0       | 0       | 0       | 0       |

**Simplified Expression for 'a' (after grouping K-map):**

`a = !D3.!D2.!D1.!D0 + !D3.!D2.D1.!D0 + !D3.D2.!D1.D0 + !D3.D2.!D1.!D0 + !D3.D2.D1.!D0 + !D3.D2.D1.D0 + D3.!D2.!D1.!D0 + D3.!D2.!D1.D0`

This can be simplified to:

`a = !D3.!D2.(!D1.!D0 + D1.!D0) + D3.!D2.(!D1.!D0 + D1.!D0) + !D3.D2.(!D1.!D0 + D1.!D0 + D1.D0)`

Further simplification leads to:

`a = !D2.(!D1.!D0 + D1.!D0) + D2.(!D1.!D0 + D1.!D0 + D1.D0)` (after factoring `!D3` and `D3`)

Even further, recognizing patterns:

`a = !D2.(!D1 + D1).!D0 + D2.(!D1.(!D0 + D0) + D1.D0)`
`a = !D2.!D0 + D2.(!D1 + D1.D0)`
`a = !D2.!D0 + D2.(!D1 + D0)`
`a = !D2.!D0 + D2.!D1 + D2.D0`

**Important Point:** For practical implementation in Verilog, it's often easier to write out the full conditional statements or use a `case` statement rather than directly implementing these complex minimized Boolean expressions, especially when the number of input variables increases. The synthesis tool will handle the optimization.

Following this process for all seven segments will yield the complete set of Boolean expressions.

---

### 3. Verilog Implementation of the BCD to Seven-Segment Decoder

**Key Concepts:**

*   **Verilog HDL:** A hardware description language used to model electronic systems.
*   **Modules:** The basic building blocks in Verilog, encapsulating a design with inputs and outputs.
*   **Ports:** The inputs and outputs of a module.
*   **Data Types:** `reg` and `wire` are crucial. `reg` is used for variables that hold values between procedural assignments (like in `always` blocks), and `wire` is used for connections between modules or for outputs driven by continuous assignments.
*   **Operators:** Logical (`&`, `|`, `^`, `~`), arithmetic (`+`, `-`, `*`, `/`), comparison (`==`, `!=`, `>`, `<`), and conditional (`?:`).
*   **Procedural Blocks:** `always` blocks are used to describe sequential or combinational logic that changes based on sensitivity lists.
*   **Sensitivity List:** The list of signals that trigger the execution of an `always` block. For combinational logic, all input signals must be in the sensitivity list.
*   **Blocking (`=`) vs. Non-blocking (`<=`) Assignments:** Blocking assignments are executed immediately, while non-blocking assignments are executed at the end of the time step. For combinational logic, blocking assignments are generally preferred.
*   **`case` Statement:** A powerful construct for implementing combinational logic based on the value of an input signal. This is often cleaner than long `if-else if` chains for decoders.

**Verilog Code Structure:**

```verilog
// Module Declaration
module bcd_to_7seg_decoder (
    input  [3:0] bcd_in,      // 4-bit BCD input
    output reg [6:0] seven_seg_out // 7-bit output for segments (a-g)
);

    // Combinational logic using 'always' block with 'case' statement
    always @(*) begin // '*' is a shorthand for all inputs in the block
        case (bcd_in)
            4'b0000: seven_seg_out = 7'b1111110; // Digit 0
            4'b0001: seven_seg_out = 7'b0110000; // Digit 1
            4'b0010: seven_seg_out = 7'b1101101; // Digit 2
            4'b0011: seven_seg_out = 7'b1111001; // Digit 3
            4'b0100: seven_seg_out = 7'b0110011; // Digit 4
            4'b0101: seven_seg_out = 7'b1011011; // Digit 5
            4'b0110: seven_seg_out = 7'b1011111; // Digit 6
            4'b0111: seven_seg_out = 7'b1110000; // Digit 7
            4'b1000: seven_seg_out = 7'b1111111; // Digit 8
            4'b1001: seven_seg_out = 7'b1111011; // Digit 9
            default: seven_seg_out = 7'b0000000; // For invalid BCD inputs, turn off all segments
        endcase
    end

endmodule
```

**Explanation of the Verilog Code:**

*   **`module bcd_to_7seg_decoder (...)`**: Declares the module named `bcd_to_7seg_decoder`.
*   **`input [3:0] bcd_in`**: Defines a 4-bit input port named `bcd_in`.
*   **`output reg [6:0] seven_seg_out`**: Defines a 7-bit output port named `seven_seg_out`. The `reg` keyword is used because `seven_seg_out` will be assigned a value within an `always` block.
*   **`always @(*)`**: This is a combinational `always` block. The `*` in the sensitivity list means the block will re-evaluate whenever any of the signals read inside it change. This is the standard way to infer combinational logic.
*   **`case (bcd_in)`**: This statement checks the value of `bcd_in`.
*   **`4'bxxxx: seven_seg_out = 7'byyyyyyy;`**: Each line within the `case` statement corresponds to a specific BCD input and assigns the appropriate 7-bit pattern to `seven_seg_out` to display the corresponding digit. `4'b` denotes a 4-bit binary number, and `7'b` denotes a 7-bit binary number.
*   **`default: seven_seg_out = 7'b0000000;`**: This handles any input values that are not explicitly listed in the `case` items (i.e., invalid BCD inputs 1010 through 1111). It's good practice to include a `default` case for combinational logic to ensure all input combinations have a defined output.

**Reference to Textbooks:**

*   **Bhasker (2001):** Chapter 3 likely covers Verilog syntax, modules, ports, and basic operators, which are fundamental to this code. Chapter 5 might discuss combinational logic synthesis and the use of `always` blocks and `case` statements.
*   **Palnitkar (2nd Edn.):** Chapters 3 and 4 would be relevant for Verilog syntax, data types (`reg`, `wire`), and the use of `always` blocks for inferring combinational logic. The `case` statement is a key construct for decoders as discussed in chapters related to combinational circuit implementation.
*   **Roth C.H.:** While Roth focuses on digital logic design principles, the concept of translating truth tables and Boolean expressions into HDL is covered. The simplified Boolean expressions we derived earlier can be directly mapped to Verilog using assignments or `case` statements.

**Important Point:** For synthesis to combinational logic, ensure that every output signal (or `reg` variable being assigned) is assigned a value for *every* possible input combination. This is why the `default` case in the `case` statement is important for synthesizable combinational logic. Failure to do so can lead to inferring latches, which is undesirable for purely combinational circuits.

---

### 4. FPGA Implementation and Interfacing

**Key Concepts:**

*   **FPGA (Field-Programmable Gate Array):** An integrated circuit designed to be configured by a customer or designer after manufacturing. FPGAs contain programmable logic blocks and programmable interconnects that can be wired together to implement complex digital circuits.
*   **Synthesis:** The process of converting the HDL code into a netlist of logic gates and flip-flops that can be mapped to the FPGA's resources.
*   **Place and Route:** After synthesis, the design is placed onto the FPGA's specific logic elements, and the interconnections are routed.
*   **Bitstream Generation:** The final output of the FPGA design flow, which contains the configuration data for the FPGA.
*   **Hardware Description Language (HDL) Tools:** Software suites like Xilinx Vivado or Intel Quartus Prime are used for synthesis, place and route, and bitstream generation.
*   **Pin Constraints (XDC/QSF files):** Files that map the input and output ports of the Verilog module to specific physical pins on the FPGA development board. This is crucial for connecting the FPGA to external hardware.
*   **Seven-Segment Display Connection:** Understanding how the FPGA pins are connected to the common anode/cathode of the seven-segment display and to the individual segment pins (a-g). This will depend on the specific FPGA development board.

**Steps for FPGA Implementation:**

1.  **Project Creation:** Create a new project in your chosen FPGA development tool (e.g., Vivado).
2.  **Add Source Files:** Add the Verilog source file (`bcd_to_7seg_decoder.v`) to the project.
3.  **Add Constraints File:** Create and add a pin constraints file (e.g., `constraints.xdc` for Xilinx). This file will map the `bcd_in` and `seven_seg_out` ports to the physical pins of the FPGA board connected to the seven-segment display and BCD input switches/buttons.

    **Example `constraints.xdc` (Hypothetical for a board):**

    ```tcl
    # Define BCD input pins
    set_property PACKAGE_PIN P5  [get_ports bcd_in[0]]
    set_property PACKAGE_PIN P6  [get_ports bcd_in[1]]
    set_property PACKAGE_PIN P7  [get_ports bcd_in[2]]
    set_property PACKAGE_PIN P8  [get_ports bcd_in[3]]

    # Define Seven-Segment output pins (adjust according to your board's pinout)
    set_property PACKAGE_PIN P10 [get_ports seven_seg_out[0]] # Segment 'a'
    set_property PACKAGE_PIN P11 [get_ports seven_seg_out[1]] # Segment 'b'
    set_property PACKAGE_PIN P12 [get_ports seven_seg_out[2]] # Segment 'c'
    set_property PACKAGE_PIN P13 [get_ports seven_seg_out[3]] # Segment 'd'
    set_property PACKAGE_PIN P14 [get_ports seven_seg_out[4]] # Segment 'e'
    set_property PACKAGE_PIN P15 [get_ports seven_seg_out[5]] # Segment 'f'
    set_property PACKAGE_PIN P16 [get_ports seven_seg_out[6]] # Segment 'g'

    # Set I/O standards (e.g., LVCMOS33)
    set_property IOSTANDARD LVCMOS33 [get_ports *]
    ```
    *   **Important:** You **must** consult the FPGA board's user manual or schematic to correctly identify the pin numbers and their associated peripherals (switches, LEDs, seven-segment displays).

4.  **Synthesize:** Run the synthesis process in the tool.
5.  **Implement (Place and Route):** Run the implementation steps.
6.  **Generate Bitstream:** Create the `.bit` file for programming the FPGA.
7.  **Program FPGA:** Connect the FPGA board to your computer and use the tool's programming interface to load the bitstream onto the FPGA.
8.  **Test:** Use switches or buttons connected to the `bcd_in` pins to provide BCD inputs and verify that the correct digits are displayed on the seven-segment display.

**Relevance to Course Outcomes:**

*   **CO2 (K3):** Apply an industry compatible hardware description language to implement digital circuits. (This is the core of the Verilog design).
*   **CO3 (K3):** Implement digital circuits on FPGA boards and connect external hardware to the boards. (The entire FPGA implementation and testing phase directly addresses this).
*   **CO4 (K2):** Function effectively as an individual and in a team to accomplish the given task. (Successful completion requires coordination, understanding of the task, and execution).

---

### 5. Practical Considerations and Extensions

**Key Concepts:**

*   **Common Anode vs. Common Cathode:** Seven-segment displays come in two main types:
    *   **Common Anode:** All anodes of the LEDs are connected together. To turn a segment ON, the corresponding cathode must be pulled LOW (0). This means our output logic should be HIGH (1) for segments that should be OFF and LOW (0) for segments that should be ON. Our Verilog example assumed active-HIGH, so if you have a common anode display, you'll need to invert the outputs in the Verilog code (or the truth table values).
    *   **Common Cathode:** All cathodes of the LEDs are connected together. To turn a segment ON, the corresponding anode must be pulled HIGH (1). Our Verilog example is for common cathode displays.
*   **Multiplexing:** For displaying multiple digits using a single decoder and limited output pins, multiplexing is used. This involves rapidly switching between digits, displaying one at a time for a short duration. This is a more advanced topic.
*   **Current Limiting Resistors:** Each segment of the seven-segment display should be connected through a current-limiting resistor to protect the LEDs and the FPGA pins from excessive current. The value of the resistor depends on the forward voltage and current rating of the LEDs and the FPGA output voltage. Typically, values between 220Ω and 330Ω are used.
*   **FPGA I/O Buffers:** FPGA pins have configurable I/O standards and strengths. It's important to set these appropriately in the constraints file for correct operation and signal integrity.

**Example: Adapting for Common Anode Display**

If your seven-segment display is common anode, you would invert the output logic in the Verilog:

```verilog
module bcd_to_7seg_decoder_common_anode (
    input  [3:0] bcd_in,
    output reg [6:0] seven_seg_out // Active-LOW outputs
);

    always @(*) begin
        case (bcd_in)
            4'b0000: seven_seg_out = 7'b0000001; // Digit 0 (segments a-f ON = LOW)
            4'b0001: seven_seg_out = 7'b1001111; // Digit 1 (segments b, c ON = LOW)
            // ... and so on for other digits
            default: seven_seg_out = 7'b1111111; // Invalid BCD inputs (all segments OFF = HIGH)
        endcase
    end

endmodule
```

**Extensions:**

*   **Displaying Hexadecimal Digits:** Extend the decoder to display hexadecimal digits (0-9, A-F). This would require an 8-bit input (4 bits for the nibble) and potentially a larger truth table or more complex logic.
*   **Using a Seven-Segment Driver IC:** Instead of directly driving the segments from the FPGA, you could interface the FPGA with a dedicated seven-segment display driver IC (like the 74LS47 for common anode or 74LS48 for common cathode) which handles the current buffering and segment driving. This simplifies the FPGA side but adds another component.
*   **Input from a Counter:** Design a modulo-10 counter to provide BCD inputs to the decoder, creating a simple decimal counter that displays its value on the seven-segment display.

---

### 6. Practice Questions and Exercises

**Question 1:**

Construct the truth table for the seven-segment display decoder for digits 0 through 3. Assume an active-HIGH output for each segment (a-g).

**Answer:**

| BCD Input ($D_3D_2D_1D_0$) | Decimal Digit | Segments to be ON | Output (a, b, c, d, e, f, g) |
| :------------------------- | :------------ | :---------------- | :--------------------------- |
| 0000                       | 0             | a, b, c, d, e, f  | 1111110                      |
| 0001                       | 1             | b, c              | 0110000                      |
| 0010                       | 2             | a, b, d, e, g     | 1101101                      |
| 0011                       | 3             | a, b, c, d, g     | 1111001                      |

**Question 2:**

Write a Verilog `case` statement for displaying the digit '7' on a common cathode seven-segment display.

**Answer:**

```verilog
4'b0111: seven_seg_out = 7'b1110000; // Segments a, b, c ON
```

**Question 3:**

If you are using a common anode seven-segment display and your Verilog code produces active-HIGH outputs, what will happen when you apply a BCD input that should display the digit '1'?

**Answer:**

For the digit '1', segments 'b' and 'c' should be ON. In our active-HIGH logic (for common cathode), segments 'b' and 'c' are represented by a '1' in the `seven_seg_out` vector.
If the display is common anode, a '1' output to a segment pin will turn it OFF, and a '0' will turn it ON.
Therefore, when the output for '1' is `7'b0110000`, segments 'b' and 'c' will be LOW, and all others will be HIGH. This means segments 'b' and 'c' will turn ON, correctly displaying '1' even with the inversion implied by the common anode connection. The output values in the `case` statement are correct regardless of common anode/cathode, as long as the *physical connection* and *understanding of active level* is consistent. **The provided Verilog code (`bcd_to_7seg_decoder`) is for a common cathode display.** If you have a common anode display, you must either invert the Verilog outputs or ensure your constraint file or external circuitry handles the inversion.

**Question 4:**

Explain the purpose of a `default` case in the Verilog `always @(*)` block for a combinational circuit.

**Answer:**

The `default` case in an `always @(*)` block is crucial for ensuring that the combinational logic is fully specified. For any combinational circuit, every possible combination of inputs must produce a defined output. Without a `default` case, if the input `bcd_in` falls outside the explicitly listed values (e.g., 1010 to 1111), the `seven_seg_out` would retain its previous value. This would cause the synthesis tool to infer a **latch**, which is a memory element, turning the purely combinational decoder into a sequential circuit. Latches are usually not desired in decoders and can lead to unexpected behavior. The `default` case explicitly defines the output for all unspecified input combinations, preventing latch inference and ensuring synthesizability as combinational logic.

---

### 7. Summary and Key Takeaways

*   The BCD to Seven-Segment decoder is a fundamental combinational circuit used for displaying decimal numbers.
*   Understanding the truth table and deriving Boolean expressions (possibly using K-maps) is the theoretical basis.
*   Verilog HDL provides an efficient way to implement such logic using `module`, `always @(*)`, and `case` statements.
*   The `always @(*)` block with all inputs in the sensitivity list is key for inferring combinational logic.
*   A `default` case is essential in `case` statements for combinational logic to avoid inferring latches.
*   FPGA implementation involves synthesis, place and route, bitstream generation, and programming.
*   Pin constraints (`.xdc` or `.qsf` files) are critical for mapping logical ports to physical FPGA pins and interfacing with external hardware.
*   Always refer to the FPGA board's documentation for correct pin assignments.
*   Be mindful of the common anode vs. common cathode configuration of the seven-segment display when wiring and designing the logic.
*   Current-limiting resistors are mandatory for protecting LEDs and FPGA pins.

This comprehensive study of the BCD to Seven-Segment Decoder in FPGA covers the theoretical underpinnings, practical Verilog implementation, FPGA workflow, and important considerations for successful laboratory execution, directly addressing the course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
