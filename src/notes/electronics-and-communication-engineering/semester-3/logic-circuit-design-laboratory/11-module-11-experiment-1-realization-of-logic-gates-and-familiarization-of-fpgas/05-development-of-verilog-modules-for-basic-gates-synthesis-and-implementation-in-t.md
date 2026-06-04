---
title: "Development of verilog modules for basic gates, synthesis and implementation in the above FPGA to verify the truth tables."
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 11: Experiment 1: Realization of Logic Gates and Familiarization of FPGAs"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe454"
status: "completed"
scrapedAt: "2026-05-23T17:46:29.008Z"
---
# Module 11: Experiment 1: Realization of Logic Gates and Familiarization of FPGAs

## Topic: Development of Verilog Modules for Basic Gates, Synthesis and Implementation in FPGA to Verify Truth Tables

### 1. Introduction to the Experiment

This experiment focuses on the fundamental building blocks of digital logic: logic gates. We will learn to design these gates using the Verilog Hardware Description Language (HDL), synthesize these designs into a format understandable by Field-Programmable Gate Arrays (FPGAs), and then implement them on an FPGA board. The primary goal is to verify the correct functionality of these basic gates by observing their behavior against their established truth tables. This experiment serves as a crucial stepping stone towards designing more complex digital systems.

### 2. Learning Outcomes Covered

*   **Design and demonstrate the functioning of basic logic gates using Verilog HDL and implement them on an FPGA.** (Relates to CO1 and CO2)
*   **Understand the process of synthesizing a Verilog design for FPGA implementation.** (Relates to CO2)
*   **Familiarize with the FPGA development flow and tools.** (Relates to CO3)
*   **Verify the functional correctness of implemented logic gates against their truth tables.** (Relates to CO1 and CO3)
*   **Develop problem-solving skills in debugging and testing digital designs.** (Relates to CO4)

### 3. Key Concepts and Definitions

#### 3.1. Logic Gates

Logic gates are the fundamental digital building blocks that perform logical operations on one or more binary inputs to produce a single binary output.

*   **AND Gate:** Output is '1' only if all inputs are '1'.
    *   *Verilog Representation:* `output = input1 & input2;`
*   **OR Gate:** Output is '1' if at least one input is '1'.
    *   *Verilog Representation:* `output = input1 | input2;`
*   **NOT Gate (Inverter):** Output is the inverse of the input.
    *   *Verilog Representation:* `output = ~input;`
*   **NAND Gate:** Output is '0' only if all inputs are '1'. (Inverse of AND)
    *   *Verilog Representation:* `output = ~(input1 & input2);`
*   **NOR Gate:** Output is '1' only if all inputs are '0'. (Inverse of OR)
    *   *Verilog Representation:* `output = ~(input1 | input2);`
*   **XOR Gate:** Output is '1' if the inputs are different.
    *   *Verilog Representation:* `output = input1 ^ input2;`
*   **XNOR Gate:** Output is '1' if the inputs are the same. (Inverse of XOR)
    *   *Verilog Representation:* `output = ~(input1 ^ input2);`

#### 3.2. Verilog HDL (Hardware Description Language)

Verilog is a standardized language used to describe the behavior and structure of digital electronic systems. It allows for hierarchical design, behavioral modeling, and structural modeling.

*   **Module:** The fundamental building block in Verilog. It encapsulates a piece of hardware with inputs and outputs.
    *   **Syntax:** `module module_name (port_list); ... endmodule`
*   **Ports:** Inputs and outputs of a module.
    *   `input [width-1:0] port_name;`
    *   `output [width-1:0] port_name;`
*   **Assignments:**
    *   **Continuous Assignment (for combinational logic):** Uses the `assign` keyword.
        *   *Example:* `assign y = a & b;`
    *   **Procedural Assignment (within `always` blocks):** Used for more complex logic or sequential circuits.
        *   *Example:* `always @(a or b) begin ... end`

#### 3.3. Synthesis

Synthesis is the process of converting a high-level HDL description (like Verilog) into a netlist of standard logic gates (like NAND, NOR, NOT) and their interconnections. This netlist can then be mapped onto the specific resources of an FPGA.

*   **Key Idea:** The synthesis tool understands the intended logic from the Verilog code and translates it into the fundamental logic elements available on the target FPGA.
*   **References:**
    *   **Bhasker, J. (2001). *Verilog HDL Synthesis: A Practical Primer*.** This book is highly recommended for understanding the nuances of synthesis, mapping Verilog constructs to hardware, and potential pitfalls. It explains how the compiler interprets your HDL code to create actual hardware.
    *   **Palnitkar, S. (2nd Edn.). *Verilog HDL: A Guide to Digital Design and Synthesis*.** This book provides a comprehensive guide to Verilog, including synthesis aspects, and covers how to write efficient and synthesizable code.

#### 3.4. Field-Programmable Gate Array (FPGA)

An FPGA is an integrated circuit designed to be configured by the customer or designer after manufacturing. It contains an array of programmable logic blocks and a hierarchy of reconfigurable interconnects that allow the blocks to be wired together, like a general-purpose integrated circuit.

*   **Key Components:**
    *   **Configurable Logic Blocks (CLBs):** The fundamental building blocks that can implement various logic functions.
    *   **Input/Output (I/O) Blocks:** Interface between the FPGA's internal logic and the external world.
    *   **Programmable Interconnects:** Wires and switches that connect the CLBs and I/O blocks.

#### 3.5. FPGA Development Flow

The typical flow for implementing a design on an FPGA:

1.  **Design Entry:** Writing the Verilog code for the desired logic circuit.
2.  **Synthesis:** Converting the Verilog code into a gate-level netlist.
3.  **Implementation (Place and Route):**
    *   **Place:** Assigning logic elements from the netlist to specific physical resources (CLBs, I/O pins) on the FPGA.
    *   **Route:** Connecting the placed logic elements using the FPGA's programmable interconnects.
4.  **Bitstream Generation:** Creating a configuration file (bitstream) that programs the FPGA's logic and interconnects.
5.  **Programming/Configuration:** Loading the bitstream onto the FPGA.
6.  **Verification:** Testing the implemented design on the FPGA to ensure it functions as expected.

#### 3.6. Truth Table Verification

A truth table is a table that shows all possible input combinations for a logic circuit and the corresponding output for each combination. Verification involves providing specific input patterns to the FPGA and observing the outputs to confirm they match the expected truth table values.

### 4. Verilog Module Development for Basic Gates

Let's develop Verilog modules for a few basic gates.

#### 4.1. AND Gate Module

```verilog
// Module for a 2-input AND gate
module and_gate (
    input wire a,         // First input
    input wire b,         // Second input
    output wire y          // Output
);

    // Continuous assignment to implement the AND logic
    assign y = a & b;

endmodule
```

#### 4.2. OR Gate Module

```verilog
// Module for a 2-input OR gate
module or_gate (
    input wire a,         // First input
    input wire b,         // Second input
    output wire y          // Output
);

    // Continuous assignment to implement the OR logic
    assign y = a | b;

endmodule
```

#### 4.3. NOT Gate Module

```verilog
// Module for a NOT gate (inverter)
module not_gate (
    input wire a,         // Input
    output wire y          // Output
);

    // Continuous assignment to implement the NOT logic
    assign y = ~a;

endmodule
```

#### 4.4. XOR Gate Module

```verilog
// Module for a 2-input XOR gate
module xor_gate (
    input wire a,         // First input
    input wire b,         // Second input
    output wire y          // Output
);

    // Continuous assignment to implement the XOR logic
    assign y = a ^ b;

endmodule
```

**Important Point:** When writing Verilog for synthesis, it's crucial to use synthesizable constructs. Continuous assignments (`assign`) are generally synthesizable for combinational logic. Procedural assignments within `always` blocks, when sensitive to the correct signals (e.g., `always @(a or b)` for combinational logic), are also synthesizable.

#### 4.5. Incorporating Textbook Content (Bhasker, Palnitkar)

*   **Bhasker's *Verilog HDL Synthesis: A Practical Primer*** would emphasize how `assign y = a & b;` directly maps to a hardware AND gate in the synthesized netlist. It might also discuss different ways to represent the same logic (e.g., using `always @*` block) and how the synthesis tool optimizes them.
*   **Palnitkar's *Verilog HDL: A Guide to Digital Design and Synthesis*** would provide detailed syntax and examples for all these basic gates and explain the importance of using `wire` for connections and `reg` for storing values in sequential circuits (though not directly used here).

### 5. FPGA Implementation and Verification

#### 5.1. Top-Level Module

To implement these gates on an FPGA, we often need a top-level module that instantiates the basic gate modules and connects them to the FPGA's physical pins.

```verilog
// Top-level module for FPGA implementation of basic gates
module fpga_logic_gates (
    input wire sw_a,     // Input from a switch (e.g., SW0)
    input wire sw_b,     // Input from a switch (e.g., SW1)
    output wire led_and, // Output to an LED (e.g., LD0 for AND)
    output wire led_or,  // Output to an LED (e.g., LD1 for OR)
    output wire led_not, // Output to an LED (e.g., LD2 for NOT)
    output wire led_xor  // Output to an LED (e.g., LD3 for XOR)
);

    // Instantiate the basic gate modules

    // AND Gate instance
    and_gate and_inst (
        .a(sw_a),
        .b(sw_b),
        .y(led_and)
    );

    // OR Gate instance
    or_gate or_inst (
        .a(sw_a),
        .b(sw_b),
        .y(led_or)
    );

    // NOT Gate instance (Note: NOT gate only needs one input)
    // We can drive it with sw_a, for example.
    not_gate not_inst_a (
        .a(sw_a),
        .y(led_not)
    );

    // XOR Gate instance
    xor_gate xor_inst (
        .a(sw_a),
        .b(sw_b),
        .y(led_xor)
    );

endmodule
```

**Note:** For the NOT gate, we've arbitrarily connected its input to `sw_a`. You could choose `sw_b` or even create a more complex connection if needed.

#### 5.2. Pin Constraints (XDC or UCF File)

After writing the Verilog code, you need to tell the synthesis and implementation tools which physical pins on the FPGA board are connected to your module's ports (`sw_a`, `sw_b`, `led_and`, etc.). This is typically done using a Pin Constraints file (e.g., XDC for Xilinx FPGAs or UCF for older Xilinx).

**Example XDC file snippet (for a hypothetical board):**

```xdc
# Input switches
set_property PACKAGE_PIN <pin_for_sw_a> [get_ports sw_a]
set_property PACKAGE_PIN <pin_for_sw_b> [get_ports sw_b]

# Output LEDs
set_property PACKAGE_PIN <pin_for_led_and> [get_ports led_and]
set_property PACKAGE_PIN <pin_for_led_or> [get_ports led_or]
set_property PACKAGE_PIN <pin_for_led_not> [get_ports led_not]
set_property PACKAGE_PIN <pin_for_led_xor> [get_ports led_xor]

# Ensure these ports are used as input/output
set_property IOSTANDARD LVCMOS33 [get_ports sw_a]
set_property IOSTANDARD LVCMOS33 [get_ports sw_b]
set_property IOSTANDARD LVCMOS33 [get_ports led_and]
set_property IOSTANDARD LVCMOS33 [get_ports led_or]
set_property IOSTANDARD LVCMOS33 [get_ports led_not]
set_property IOSTANDARD LVCMOS33 [get_ports led_xor]
```

*Replace `<pin_for_...>` with the actual pin names for your FPGA board.*

#### 5.3. FPGA Development Software (e.g., Vivado, Quartus Prime)

You will use a software suite provided by the FPGA manufacturer (e.g., Xilinx Vivado, Intel Quartus Prime) to perform the synthesis, implementation, and bitstream generation.

**General Steps in the Software:**

1.  **Create a New Project:** Specify your FPGA device and target language (Verilog).
2.  **Add Source Files:** Add your Verilog modules (`and_gate.v`, `or_gate.v`, etc.) and the top-level module (`fpga_logic_gates.v`).
3.  **Add Constraints File:** Add your XDC/UCF file.
4.  **Run Synthesis:** The tool converts your Verilog code into a netlist of FPGA primitives.
5.  **Run Implementation (Place and Route):** The tool maps the netlist to the FPGA's resources and routes the connections.
6.  **Generate Bitstream:** Creates the configuration file.
7.  **Program Device:** Connect your FPGA board and program it using the generated bitstream.

#### 5.4. Verification Procedure

1.  **Connect FPGA:** Ensure your FPGA board is connected to your computer via USB or JTAG.
2.  **Power On:** Turn on the power to the FPGA board.
3.  **Input Manipulation:**
    *   Set the input switches (`sw_a`, `sw_b`) to represent different combinations of 0s and 1s according to the truth tables of the gates.
    *   **For AND/OR/XOR gates:**
        *   `sw_a = 0`, `sw_b = 0`
        *   `sw_a = 0`, `sw_b = 1`
        *   `sw_a = 1`, `sw_b = 0`
        *   `sw_a = 1`, `sw_b = 1`
    *   **For NOT gate (driven by `sw_a`):**
        *   `sw_a = 0`
        *   `sw_a = 1`
4.  **Observe Outputs:**
    *   The LEDs connected to the outputs (`led_and`, `led_or`, `led_not`, `led_xor`) will light up (typically '1') or turn off (typically '0') based on the logic gate's output.
5.  **Compare with Truth Tables:**
    *   For each input combination applied, check if the state of the corresponding LED matches the expected output from the truth table.
    *   For example, when `sw_a = 1` and `sw_b = 1`, `led_and` should be ON (logic 1). If `led_and` is OFF (logic 0), there's a problem.

### 6. Truth Tables for Verification

#### 6.1. 2-Input AND Gate

| Input A | Input B | Output Y | Expected LED State (`led_and`) |
| :------ | :------ | :------- | :----------------------------- |
| 0       | 0       | 0        | OFF                            |
| 0       | 1       | 0        | OFF                            |
| 1       | 0       | 0        | OFF                            |
| 1       | 1       | 1        | ON                             |

#### 6.2. 2-Input OR Gate

| Input A | Input B | Output Y | Expected LED State (`led_or`)  |
| :------ | :------ | :------- | :----------------------------- |
| 0       | 0       | 0        | OFF                            |
| 0       | 1       | 1        | ON                             |
| 1       | 0       | 1        | ON                             |
| 1       | 1       | 1        | ON                             |

#### 6.3. NOT Gate (Input A)

| Input A | Output Y | Expected LED State (`led_not`) |
| :------ | :------- | :----------------------------- |
| 0       | 1        | ON                             |
| 1       | 0        | OFF                            |

#### 6.4. 2-Input XOR Gate

| Input A | Input B | Output Y | Expected LED State (`led_xor`) |
| :------ | :------ | :------- | :----------------------------- |
| 0       | 0       | 0        | OFF                            |
| 0       | 1       | 1        | ON                             |
| 1       | 0       | 1        | ON                             |
| 1       | 1       | 0        | OFF                            |

### 7. Practice Questions and Exercises

**Question 1:** Write a Verilog module for a 2-input NAND gate.
**Answer:**
```verilog
module nand_gate (
    input wire a,
    input wire b,
    output wire y
);
    assign y = ~(a & b);
endmodule
```

**Question 2:** Write a Verilog module for a 3-input AND gate.
**Answer:**
```verilog
module and_gate_3_input (
    input wire a,
    input wire b,
    input wire c,
    output wire y
);
    assign y = a & b & c;
endmodule
```

**Question 3:** Explain the difference between combinational and sequential logic in the context of Verilog and FPGA implementation. (Relates to CO1)
**Answer:**
*   **Combinational Logic:** The output is solely dependent on the current values of the inputs. There is no memory involved. Examples include basic logic gates (AND, OR, NOT), adders, multiplexers. Verilog constructs like `assign` statements and `always @(*)` blocks are typically used for combinational logic. Synthesis tools can easily map these to combinational logic elements on an FPGA.
*   **Sequential Logic:** The output depends on the current inputs *and* the past history of inputs (state). It requires memory elements like flip-flops. Examples include registers, counters, state machines. Verilog constructs like `always @(posedge clk)` blocks are used for sequential logic. These will be mapped to flip-flops on the FPGA.

**Question 4:** Why is it important to create a top-level module when implementing a design on an FPGA? (Relates to CO3)
**Answer:** The top-level module serves as the interface between your design and the FPGA's physical pins. It encapsulates all the lower-level modules (like the basic gates) and connects their inputs and outputs to the external world via the FPGA's I/O blocks. The synthesis and place-and-route tools start with this top-level module to understand the overall structure and map it to the FPGA's resources. Without a top-level module, the tools wouldn't know which Verilog signals correspond to physical switches or LEDs.

**Question 5:** If the output LED for the AND gate is always OFF, regardless of the switch positions, what are some potential reasons? (Relates to CO1, CO3, CO4)
**Answer:**
1.  **Verilog Code Error:** The `assign y = a & b;` statement might be missing or incorrect (e.g., `y = a | b;` instead).
2.  **Synthesis/Implementation Error:** The synthesis or place-and-route tool might have encountered an error during the process.
3.  **Incorrect Pin Assignments:** The physical pin assigned to `led_and` in the XDC/UCF file might be incorrect, or it might be connected to a pin that's not actually wired to an LED on the board.
4.  **Wiring Issue on the Board:** The actual physical connection between the FPGA pin assigned to `led_and` and the LED component on the board might be faulty.
5.  **Programming Error:** The bitstream might not have been generated or programmed correctly onto the FPGA.
6.  **Input Signal Problem:** If both `sw_a` and `sw_b` are stuck at logic '0' due to issues with the switches themselves or their connections, the AND gate output would indeed be '0'.

### 8. Important Points to Remember

*   **Synthesizable Verilog:** Always write Verilog code that can be synthesized into hardware. Avoid constructs that are purely for simulation (e.g., delays like `#10`).
*   **Combinational Logic Sensitivity:** For `always` blocks describing combinational logic, use `always @(*)` or explicitly list all inputs that can affect the output (`always @(a or b)`). This ensures correct synthesis.
*   **Top-Level Module:** A top-level module is essential for mapping your design to the physical FPGA pins.
*   **Constraints File:** Accurately define pin assignments and I/O standards in the XDC/UCF file.
*   **Verification is Key:** Thoroughly test your implementation against the truth tables to confirm its functionality.
*   **FPGA Tools:** Familiarize yourself with the specific FPGA development software (Vivado, Quartus).
*   **Debugging:** Be prepared to debug issues at various stages of the FPGA design flow.

### 9. Alignment with Course Outcomes

*   **CO1 (Design and demonstrate functioning of combinational circuits):** This experiment directly addresses this by having students design and verify basic gates, which are fundamental combinational circuits.
*   **CO2 (Apply industry-compatible HDL):** Students learn to write and synthesize Verilog HDL for digital circuits, aligning with industry practices.
*   **CO3 (Implement digital circuits on FPGA boards):** The core of the experiment is the implementation and testing of Verilog designs on an FPGA board.
*   **CO4 (Function effectively):** Working through this experiment, especially during debugging, requires teamwork and effective problem-solving.

This comprehensive set of notes should provide a solid foundation for understanding and successfully completing Experiment 1 of Module 11.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
