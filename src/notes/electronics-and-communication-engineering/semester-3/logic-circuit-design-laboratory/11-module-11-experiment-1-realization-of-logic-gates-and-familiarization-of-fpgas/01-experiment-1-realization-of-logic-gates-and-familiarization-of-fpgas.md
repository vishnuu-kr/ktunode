---
title: "Experiment 1: Realization of Logic Gates and Familiarization of FPGAs"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 11: Experiment 1: Realization of Logic Gates and Familiarization of FPGAs"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe450"
status: "completed"
scrapedAt: "2026-05-23T17:46:25.645Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY: Module 11 - Experiment 1: Realization of Logic Gates and Familiarization of FPGAs

## 1. Introduction

This experiment serves as a foundational step in understanding modern digital circuit design methodologies by introducing the concepts of Field-Programmable Gate Arrays (FPGAs) and demonstrating the realization of basic logic gates using them. FPGAs offer a flexible and powerful platform for implementing complex digital circuits, making them indispensable in contemporary electronics.

## 2. Learning Outcomes

Upon completion of this experiment, students will be able to:

*   Understand the fundamental building blocks of digital logic: logic gates (AND, OR, NOT, XOR, NAND, NOR).
*   Familiarize themselves with the architecture and capabilities of FPGA devices.
*   Implement basic logic gates using a Hardware Description Language (HDL), specifically Verilog HDL.
*   Synthesize the Verilog HDL code into a configuration file for an FPGA.
*   Map the logic gate implementations onto the FPGA hardware.
*   Test and verify the functionality of the implemented logic gates on the FPGA board.

## 3. Key Concepts and Definitions

### 3.1. Logic Gates

Logic gates are the fundamental building blocks of digital circuits that perform basic logical operations on one or more binary inputs to produce a single binary output.

*   **AND Gate:** Outputs a '1' only if all inputs are '1'.
    *   **Truth Table:**
        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 0 |
        | 0 | 1 | 0 |
        | 1 | 0 | 0 |
        | 1 | 1 | 1 |
*   **OR Gate:** Outputs a '1' if at least one input is '1'.
    *   **Truth Table:**
        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 0 |
        | 0 | 1 | 1 |
        | 1 | 0 | 1 |
        | 1 | 1 | 1 |
*   **NOT Gate (Inverter):** Outputs the opposite of the input.
    *   **Truth Table:**
        | A | Y |
        |---|---|
        | 0 | 1 |
        | 1 | 0 |
*   **NAND Gate:** Outputs '0' only if all inputs are '1'. It's an AND gate followed by a NOT gate.
    *   **Truth Table:**
        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 1 |
        | 0 | 1 | 1 |
        | 1 | 0 | 1 |
        | 1 | 1 | 0 |
*   **NOR Gate:** Outputs '1' only if all inputs are '0'. It's an OR gate followed by a NOT gate.
    *   **Truth Table:**
        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 1 |
        | 0 | 1 | 0 |
        | 1 | 0 | 0 |
        | 1 | 1 | 0 |
*   **XOR Gate (Exclusive OR):** Outputs '1' if the inputs are different.
    *   **Truth Table:**
        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 0 |
        | 0 | 1 | 1 |
        | 1 | 0 | 1 |
        | 1 | 1 | 0 |
*   **XNOR Gate (Exclusive NOR):** Outputs '1' if the inputs are the same. It's an XOR gate followed by a NOT gate.
    *   **Truth Table:**
        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 1 |
        | 0 | 1 | 0 |
        | 1 | 0 | 0 |
        | 1 | 1 | 1 |

### 3.2. Field-Programmable Gate Array (FPGA)

An FPGA is a semiconductor device containing programmable logic blocks and programmable interconnects. It can be programmed by the end-user to implement any digital circuit.

*   **Architecture:** FPGAs typically consist of:
    *   **Configurable Logic Blocks (CLBs):** These are the core programmable elements that can be configured to implement combinational and sequential logic functions (e.g., look-up tables (LUTs), flip-flops).
    *   **Programmable Interconnects:** A network of routing channels and switch matrices that connect the CLBs, allowing for flexible signal routing.
    *   **Input/Output Blocks (IOBs):** These interface the internal logic of the FPGA to external pins, allowing connection to other devices or components.
    *   **Other Resources:** FPGAs may also include dedicated hardware blocks like Block RAMs (BRAMs), Digital Signal Processors (DSPs), and Phase-Locked Loops (PLLs) for specific functionalities.
*   **Programming Process:** The process generally involves:
    1.  **Design Entry:** Writing the digital circuit logic using an HDL (e.g., Verilog, VHDL).
    2.  **Simulation:** Verifying the functional correctness of the HDL code through simulation.
    3.  **Synthesis:** Translating the HDL code into a netlist of primitive logic gates and flip-flops recognized by the target FPGA.
    4.  **Place and Route:** Mapping the synthesized logic onto the FPGA's physical resources (CLBs, interconnects) and determining the physical layout.
    5.  **Bitstream Generation:** Creating a configuration file (bitstream) that programs the FPGA's internal logic and routing.
    6.  **Configuration/Programming:** Loading the bitstream onto the FPGA, configuring it to implement the designed circuit.

## 4. Implementation in Verilog HDL

Hardware Description Languages (HDLs) are used to describe the behavior and structure of digital hardware. Verilog HDL is a widely adopted HDL for digital design and synthesis.

**(Refer to "Verilog HDL Synthesis: A Practical Primer" by J. Bhasker and "Verilog HDL: A Guide to Digital Design and Synthesis" by S. Palnitkar for detailed Verilog syntax and constructs.)**

### 4.1. Verilog Syntax for Logic Gates

We will define modules in Verilog to represent each logic gate.

*   **Basic Structure of a Verilog Module:**
    ```verilog
    module module_name (input_port1, input_port2, ..., output_port1, output_port2, ...);
        // Port declarations (input, output, inout)
        // Internal signals (wire, reg)
        // Behavioral or structural description of the logic

    endmodule
    ```

*   **Implementing AND Gate:**
    ```verilog
    module and_gate (
        input wire a,
        input wire b,
        output wire y
    );
        assign y = a & b; // Using the '&' operator for AND
    endmodule
    ```
    *   **Explanation:**
        *   `module and_gate (...)`: Defines a module named `and_gate`.
        *   `input wire a, input wire b`: Declares two input ports, `a` and `b`, of type `wire`. `wire` is used for combinational logic connections.
        *   `output wire y`: Declares an output port, `y`, of type `wire`.
        *   `assign y = a & b;`: This is a continuous assignment statement. It continuously assigns the logical AND of `a` and `b` to `y`. This represents the combinational logic of an AND gate.

*   **Implementing OR Gate:**
    ```verilog
    module or_gate (
        input wire a,
        input wire b,
        output wire y
    );
        assign y = a | b; // Using the '|' operator for OR
    endmodule
    ```

*   **Implementing NOT Gate:**
    ```verilog
    module not_gate (
        input wire a,
        output wire y
    );
        assign y = ~a; // Using the '~' operator for NOT
    endmodule
    ```

*   **Implementing NAND Gate:**
    ```verilog
    module nand_gate (
        input wire a,
        input wire b,
        output wire y
    );
        assign y = !(a & b); // Using '!' for NOT and '&' for AND
    endmodule
    ```
    Alternatively, using the bitwise NOT and AND operators:
    ```verilog
    module nand_gate_alt (
        input wire a,
        input wire b,
        output wire y
    );
        assign y = ~ (a & b);
    endmodule
    ```

*   **Implementing NOR Gate:**
    ```verilog
    module nor_gate (
        input wire a,
        input wire b,
        output wire y
    );
        assign y = !(a | b); // Using '!' for NOT and '|' for OR
    endmodule
    ```
    Alternatively:
    ```verilog
    module nor_gate_alt (
        input wire a,
        input wire b,
        output wire y
    );
        assign y = ~ (a | b);
    endmodule
    ```

*   **Implementing XOR Gate:**
    ```verilog
    module xor_gate (
        input wire a,
        input wire b,
        output wire y
    );
        assign y = a ^ b; // Using the '^' operator for XOR
    endmodule
    ```

*   **Implementing XNOR Gate:**
    ```verilog
    module xnor_gate (
        input wire a,
        input wire b,
        output wire y
    );
        assign y = ~(a ^ b); // Using '~' for NOT and '^' for XOR
    endmodule
    ```

### 4.2. Behavioral Modeling

Verilog also allows for behavioral modeling using `always` blocks, which are often used for sequential logic but can also describe combinational logic.

*   **Behavioral AND Gate:**
    ```verilog
    module and_gate_behavioral (
        input wire a,
        input wire b,
        output reg y // 'reg' is used when the output is assigned within an 'always' block
    );
        always @(a or b) begin // Sensitive to changes in 'a' or 'b'
            y = a & b;
        end
    endmodule
    ```
    *   **Explanation:**
        *   `output reg y`: The output `y` is declared as `reg` because it is assigned within an `always` block.
        *   `always @(a or b) begin ... end`: This is a procedural block that executes whenever there is a change in the signals listed in the sensitivity list (`a` or `b`). This ensures that `y` is updated whenever the inputs change, mimicking combinational logic. This is also known as an **event-driven** approach.

**(Note:** For simple combinational logic gates, continuous assignments (`assign`) are generally preferred for their conciseness and direct mapping to hardware.)

## 5. Familiarization with FPGAs

### 5.1. FPGA Development Tools

To implement Verilog code on an FPGA, you will typically use a suite of Electronic Design Automation (EDA) tools provided by the FPGA vendor (e.g., Xilinx Vivado, Intel Quartus Prime). These tools handle the entire design flow from HDL to bitstream generation.

**Common Steps in FPGA Workflow:**

1.  **Project Creation:** Start a new project in the EDA tool, specifying the target FPGA device and speed grade.
2.  **Source File Addition:** Add your Verilog HDL files (`.v` or `.vhdl`) to the project.
3.  **Synthesis:** Run the synthesis process. This converts your HDL code into a netlist of logic elements that can be implemented on the FPGA.
4.  **Implementation (Place & Route):** The tool places the logic elements onto the FPGA's physical resources (CLBs, interconnects) and routes the connections between them.
5.  **Constraint File:** A **timing constraint file** (e.g., `.xdc` for Xilinx, `.sdc` for Intel) is crucial. It specifies:
    *   **Pin Assignments:** Mapping the input/output ports of your Verilog modules to specific physical pins on the FPGA board. This is essential for connecting your logic to the outside world (switches, LEDs, etc.).
    *   **Clock Constraints:** Defining the clock frequency and timing requirements.
    *   **I/O Standards:** Specifying voltage levels and other I/O parameters.
6.  **Bitstream Generation:** Once synthesis and implementation are complete, generate the `.bit` file (bitstream).
7.  **Programming:** Connect the FPGA board to your computer via USB or another interface. Use the EDA tool's hardware manager to program the FPGA with the generated bitstream.
8.  **Verification:** Test the functionality of your implemented design on the FPGA board.

### 5.2. FPGA Board Components

Familiarize yourself with the common components on a typical FPGA development board:

*   **FPGA Chip:** The central programmable silicon.
*   **Clock Source:** An oscillator providing the system clock signal.
*   **User Switches/Buttons:** Used as input to your logic.
*   **User LEDs:** Used as output indicators from your logic.
*   **Connectors:** JTAG (for programming), USB, expansion headers, etc.

## 6. Experiment Procedure (General Outline)

1.  **Design Entry:** Write Verilog HDL code for each of the basic logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR).
2.  **Create a Top-Level Module:** Instantiate each of the basic gate modules within a top-level module. Connect inputs and outputs appropriately.
3.  **Pin Assignment:** Create a constraint file to assign the input ports of the top-level module to specific switches/buttons on the FPGA board and the output ports to specific LEDs.
4.  **Synthesis and Implementation:** Use the FPGA vendor's EDA tools to synthesize, place, and route your design.
5.  **Bitstream Generation:** Generate the configuration bitstream.
6.  **Hardware Implementation:** Connect the FPGA board to your computer and program the FPGA with the generated bitstream.
7.  **Testing and Verification:**
    *   Manipulate the input switches/buttons on the FPGA board.
    *   Observe the corresponding LEDs.
    *   Verify that the LEDs' behavior matches the expected output of the logic gates for the given inputs.

## 7. Practice Questions and Exercises

**Question 1:** Write the Verilog HDL code for a 2-input XOR gate using a behavioral `always` block.

**Answer 1:**
```verilog
module xor_gate_behavioral (
    input wire a,
    input wire b,
    output reg y
);
    always @(a or b) begin
        y = a ^ b;
    end
endmodule
```

**Question 2:** Explain the purpose of a constraint file in FPGA design.

**Answer 2:** A constraint file (e.g., `.xdc`, `.sdc`) is used to guide the FPGA implementation tools. Its primary purposes include:
*   **Pin Assignments:** Mapping the logical ports of your design to physical pins on the FPGA chip.
*   **Timing Specifications:** Defining clock frequencies, input/output delays, and other timing requirements to ensure the design meets performance goals.
*   **I/O Standards:** Specifying voltage levels, drive strengths, and other electrical characteristics for the FPGA's input/output pins.

**Question 3:** What is the difference between `wire` and `reg` data types in Verilog?

**Answer 3:**
*   **`wire`:** Represents a physical connection in hardware. It's typically used for connecting components or for signals driven by continuous assignments (`assign` statements). Wires are driven by combinational logic.
*   **`reg`:** Represents a storage element in hardware (like a flip-flop or latch) or a variable that holds a value within an `always` block. A `reg` variable must be assigned a value within an `always` block or an `initial` block. It does not necessarily mean a register in the sequential logic sense; it's a variable that can hold a value. For combinational logic within an `always` block, it's common to use `reg` for the output, as the block infers the necessary logic to drive it.

**Question 4:** Write a Verilog module for a full adder, which takes two input bits (A, B) and a carry-in bit (Cin), and outputs a sum bit (Sum) and a carry-out bit (Cout).

**Answer 4:**
```verilog
module full_adder (
    input wire a,
    input wire b,
    input wire cin,
    output wire sum,
    output wire cout
);
    // Using XOR for sum and AND/OR for carry
    assign sum = a ^ b ^ cin;
    assign cout = (a & b) | (cin & (a ^ b));
endmodule
```

## 8. Important Points to Remember

*   **Combinational vs. Sequential Logic:** This experiment focuses on **combinational logic**, where the output is solely dependent on the current inputs. Sequential logic involves memory elements (like flip-flops) and depends on past states.
*   **Verilog `assign` statement:** Ideal for describing combinational logic as it represents a continuous hardware connection.
*   **Verilog `always @(...)` block:** Can also describe combinational logic if sensitive to all input changes. However, be mindful of creating unwanted latches if not all outputs are assigned in every possible input combination.
*   **FPGA Synthesis Tools:** Understand the basic flow: HDL -> Synthesis -> Place & Route -> Bitstream Generation.
*   **Constraint Files are Critical:** Proper pin assignment and timing constraints are essential for successful FPGA implementation.
*   **Simulation First:** Always simulate your Verilog code before attempting to synthesize and implement it on hardware. This helps catch functional errors early.
*   **FPGA Boards:** Be aware of the specific hardware available on your lab's FPGA board (switches, LEDs, buttons) and use them effectively for input and output.

## 9. Alignment with Course Outcomes

*   **CO1 (Design and demonstrate the functioning of various combinational and sequential circuits using ICs):** This experiment lays the groundwork by demonstrating combinational circuits (logic gates) on a flexible platform. While this experiment uses FPGAs, the understanding of gate functionality directly relates to IC-based implementations.
*   **CO2 (Apply an industry compatible hardware description language to implement digital circuits):** This experiment directly addresses this by requiring the use of Verilog HDL to describe and implement logic gates.
*   **CO3 (Implement digital circuits on FPGA boards and connect external hardware to the boards):** This is the core outcome of this experiment. Students will learn the process of taking an HDL design and bringing it to life on an FPGA, interfacing with external components (switches, LEDs) via pin assignments.
*   **CO4 (Function effectively as an individual and in a team to accomplish the given task):** This is a general team-building outcome, applicable to collaborative work on the lab experiment.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 10. Textbook and Reference Material Integration

*   **Verilog HDL Synthesis: A Practical Primer by J. Bhasker:** This book provides a solid introduction to Verilog, covering basic syntax, data types, operators, and behavioral constructs. The Verilog examples in Section 4.1 and 4.2 are directly aligned with the introductory material found in Bhasker's primer.
*   **Fundamentals of Logic Design by Roth C.H:** This textbook is crucial for understanding the fundamental principles of digital logic, including the truth tables and behavior of basic logic gates (as detailed in Section 3.1). It provides the theoretical basis for why these gates are important building blocks.
*   **Verilog HDL: A Guide to Digital Design and Synthesis by S. Palnitkar:** This reference book offers more in-depth coverage of Verilog, including advanced techniques, synthesis considerations, and best practices. It can be used for further exploration of Verilog constructs and the synthesis process described in Section 5.1.

This experiment provides a hands-on introduction to the essential concepts of digital logic realization using modern FPGA technology and the Verilog HDL, directly supporting the learning objectives of the course.