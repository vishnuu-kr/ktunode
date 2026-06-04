---
title: "(b) Development of verilog modules for full adder in structural modeling using half adder."
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 12: Experiment 2: Adders in Verilog"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe459"
status: "completed"
scrapedAt: "2026-05-23T17:46:32.357Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY - Module 12: Experiment 2: Adders in Verilog

## Topic (b): Development of Verilog Modules for Full Adder in Structural Modeling Using Half Adder

This experiment focuses on designing a full adder circuit using Verilog's structural modeling style, specifically by instantiating previously designed half adder modules. This approach reflects a common design methodology in digital logic where complex circuits are built from simpler, reusable building blocks.

---

### Learning Outcomes Covered:

*   **Understanding of structural modeling in Verilog:** This experiment directly addresses the practical application of structural modeling.
*   **Implementation of a full adder:** Students will learn to code a full adder from its fundamental logic.
*   **Reusability of Verilog modules:** By using half adder modules, students will see how to build larger designs from smaller, pre-defined components.
*   **Understanding the functionality of a full adder:** The exercise reinforces the concept of how a full adder operates, producing a sum and a carry-out.
*   **Synthesis of digital circuits:** The Verilog code developed can be synthesized to actual hardware.
*   **Testing and verification of digital circuits:** Students will be expected to simulate their design to ensure correctness.

---

### Key Concepts and Definitions:

*   **Full Adder:** A combinational logic circuit that adds three single binary digits (A, B, and a carry-in C_in) and produces two outputs: a sum (S) and a carry-out (C_out).

    *   **Truth Table for a Full Adder:**

        | A | B | C_in | S | C_out |
        |---|---|------|---|-------|
        | 0 | 0 | 0    | 0 | 0     |
        | 0 | 0 | 1    | 1 | 0     |
        | 0 | 1 | 0    | 1 | 0     |
        | 0 | 1 | 1    | 0 | 1     |
        | 1 | 0 | 0    | 1 | 0     |
        | 1 | 0 | 1    | 0 | 1     |
        | 1 | 1 | 0    | 0 | 1     |
        | 1 | 1 | 1    | 1 | 1     |

    *   **Boolean Expressions for a Full Adder:**
        *   Sum (S) = A ⊕ B ⊕ C_in
        *   Carry-out (C_out) = (A ⋅ B) + (C_in ⋅ (A ⊕ B))  *(This is one common form; others exist)*

*   **Half Adder:** A combinational logic circuit that adds two single binary digits (A and B) and produces two outputs: a sum (S) and a carry-out (C_out).
    *   **Boolean Expressions for a Half Adder:**
        *   Sum (S) = A ⊕ B
        *   Carry-out (C_out) = A ⋅ B

*   **Structural Modeling in Verilog:** A style of Verilog coding where a digital circuit is described as an interconnection of primitive gates or pre-defined modules. This is analogous to drawing a schematic diagram. It focuses on "how" the circuit is built.

    *   **Key elements of structural modeling:**
        *   **Module Instantiation:** Creating instances of lower-level modules (or primitive gates) within a higher-level module.
        *   **Port Mapping:** Connecting the ports of instantiated modules to signals (wires) within the current module.

*   **Module:** A fundamental building block in Verilog that encapsulates a piece of functionality, defining its inputs and outputs.

*   **Instance:** A specific copy of a module that is used within another module. Each instance has a unique name and a specific connection of its ports.

*   **Wire:** A fundamental data type in Verilog used to connect different parts of a circuit, analogous to a physical wire.

---

### Implementation Strategy: Building a Full Adder from Two Half Adders

A full adder can be constructed using two half adders and an OR gate.

1.  **First Half Adder:** Adds the two primary inputs, A and B.
    *   Its sum output (S1) becomes an input to the second half adder.
    *   Its carry-out output (C1) becomes an input to the OR gate.

2.  **Second Half Adder:** Adds the sum from the first half adder (S1) and the carry-in (C_in).
    *   Its sum output (S2) is the final Sum output of the full adder.
    *   Its carry-out output (C2) becomes another input to the OR gate.

3.  **OR Gate:** ORs the carry-out from the first half adder (C1) and the carry-out from the second half adder (C2).
    *   The output of the OR gate is the final Carry-out output (C_out) of the full adder.

    **Diagrammatic Representation:**

    ```
           +-----------+       +-----------+
    A -----| Half Adder|-------| Half Adder|----- S (Sum)
           |    1      |       |    2      |
    B -----|           |-------|           |
           +-----------+       +-----------+
                 | C1            | C2
                 |               |
                 +-------+-------+
                         |
                         | OR Gate
                         |
                         +------ C_out (Carry-Out)
                         |
                         | C_in (from external)
                         |
                         +----------------------
    ```

---

### Verilog Code Development:

**(Assumes you have a working `half_adder.v` module from a previous experiment or are defining it here.)**

**1. `half_adder.v` Module (Prerequisite):**

```verilog
// Module: half_adder
// Description: Implements a half adder.
// Inputs:  a, b - single bit binary inputs
// Outputs: sum, cout - sum and carry-out bits

module half_adder (
    input  a,
    input  b,
    output sum,
    output cout
);

    // Behavioral description of half adder (can also be structural using XOR and AND gates)
    assign sum = a ^ b;      // XOR for sum
    assign cout = a & b;     // AND for carry-out

endmodule
```

**2. `full_adder_structural.v` Module:**

This module will instantiate two `half_adder` modules and an `or` gate (which is a primitive in Verilog, or can be implemented as a separate module too for consistency).

```verilog
// Module: full_adder_structural
// Description: Implements a full adder using structural modeling with two half adders and an OR gate.
// Inputs:  a, b, c_in - single bit binary inputs
// Outputs: sum, cout - sum and carry-out bits

module full_adder_structural (
    input  a,
    input  b,
    input  c_in,
    output sum,
    output cout
);

    // Declare internal wires to connect the instances
    wire s1;    // Sum from the first half adder
    wire c1;    // Carry-out from the first half adder
    wire c2;    // Carry-out from the second half adder

    // Instantiate the first half adder
    // Connecting 'a' and 'b' to the inputs of the first half adder
    // Connecting the outputs 's1' and 'c1' to the declared wires
    half_adder ha1 (
        .a(a),       // Port map: input 'a' of half_adder module to signal 'a'
        .b(b),       // Port map: input 'b' of half_adder module to signal 'b'
        .sum(s1),    // Port map: output 'sum' of half_adder module to wire 's1'
        .cout(c1)    // Port map: output 'cout' of half_adder module to wire 'c1'
    );

    // Instantiate the second half adder
    // Connecting 's1' (sum from ha1) and 'c_in' to the inputs of the second half adder
    // Connecting the output 's2' (which is the final sum) and 'c2' to the declared wires
    half_adder ha2 (
        .a(s1),      // Port map: input 'a' of half_adder module to wire 's1'
        .b(c_in),    // Port map: input 'b' of half_adder module to signal 'c_in'
        .sum(sum),   // Port map: output 'sum' of half_adder module to final output 'sum'
        .cout(c2)    // Port map: output 'cout' of half_adder module to wire 'c2'
    );

    // Instantiate an OR gate (using primitive or module)
    // For simplicity, using the primitive 'or' gate
    // Connecting 'c1' and 'c2' to the inputs of the OR gate
    // Connecting the output of the OR gate to the final carry-out 'cout'
    or or1 (
        .y(cout),    // Port map: output 'y' of or primitive to final output 'cout'
        .a1(c1),     // Port map: input 'a1' of or primitive to wire 'c1'
        .a2(c2)      // Port map: input 'a2' of or primitive to wire 'c2'
    );

    // Alternative using an assign statement for the OR gate (synthesizable)
    // assign cout = c1 | c2;

endmodule
```

---

### Simulation and Verification:

To verify the functionality, a testbench is required.

**3. `full_adder_structural_tb.v` Testbench:**

```verilog
// Testbench for full_adder_structural module

`timescale 1ns / 1ps

module full_adder_structural_tb;

    // Declare signals to connect to the DUT (Device Under Test)
    reg  tb_a;
    reg  tb_b;
    reg  tb_c_in;
    wire tb_sum;
    wire tb_cout;

    // Instantiate the Unit Under Test (UUT)
    full_adder_structural dut (
        .a(tb_a),
        .b(tb_b),
        .c_in(tb_c_in),
        .sum(tb_sum),
        .cout(tb_cout)
    );

    // Stimulus generation
    initial begin
        // Initialize inputs
        tb_a = 0;
        tb_b = 0;
        tb_c_in = 0;
        $display("Time\tA\tB\tC_in\tSum\tC_out");
        $monitor("%0t\t%b\t%b\t%b\t%b\t%b", $time, tb_a, tb_b, tb_c_in, tb_sum, tb_cout);

        // Test all 8 combinations of inputs
        #10; tb_a = 0; tb_b = 0; tb_c_in = 1; // 001 -> 01
        #10; tb_a = 0; tb_b = 1; tb_c_in = 0; // 010 -> 10
        #10; tb_a = 0; tb_b = 1; tb_c_in = 1; // 011 -> 01
        #10; tb_a = 1; tb_b = 0; tb_c_in = 0; // 100 -> 10
        #10; tb_a = 1; tb_b = 0; tb_c_in = 1; // 100 -> 01
        #10; tb_a = 1; tb_b = 1; tb_c_in = 0; // 110 -> 01
        #10; tb_a = 1; tb_b = 1; tb_c_in = 1; // 111 -> 11

        // Add a final delay to see the last result
        #10;

        // End simulation
        $finish;
    end

endmodule
```

---

### Aligning with Course Outcomes:

*   **CO1: Design and demonstrate the functioning of various combinational and sequential circuits using ICs (Knowledge Level: K3)**
    *   This experiment demonstrates the design of a combinational circuit (Full Adder) and its functioning through simulation, which is a precursor to physical implementation. The structural approach directly maps to how ICs are composed of smaller logic blocks.

*   **CO2: Apply an industry-compatible hardware description language to implement digital circuits (Knowledge Level: K3)**
    *   Students apply Verilog HDL to implement a full adder using structural modeling, a common and industry-standard practice. They learn about module instantiation, port mapping, and wire declarations, which are core HDL concepts.

*   **CO3: Implement digital circuits on FPGA boards and connect external hardware to the boards (Knowledge Level: K3)**
    *   While this specific lab focuses on simulation, the Verilog code generated is directly synthesizable for FPGAs. The structural design approach is highly amenable to FPGA implementation as FPGAs are built from configurable logic blocks that can implement such structures.

*   **CO4: Function effectively as an individual and in a team to accomplish the given task. (Knowledge Level: K2)**
    *   This experiment encourages students to break down a larger problem (full adder) into smaller, manageable components (half adders), mirroring teamwork principles where individuals contribute specialized parts to a larger project. Understanding the logic of each component is crucial for successful integration.

---

### Incorporating Textbook Content:

*   **From "Verilog HDL Synthesis: A Practical Primer" by J. Bhasker:**
    *   **Chapter 3: Verilog Language Basics:** Reinforces understanding of module declarations, port declarations (`input`, `output`), and data types (`wire`).
    *   **Chapter 5: Behavioral Modeling:** While this experiment is structural, understanding behavioral descriptions of gates (like XOR and AND for half adders) is foundational. Bhasker's work often contrasts behavioral and structural modeling, highlighting the advantages of each.
    *   **Chapter 7: Structural Modeling:** This is the core chapter relevant here. Bhasker would detail module instantiation, continuous assignments (`assign`), and the importance of correct port mapping for creating hierarchical designs. He emphasizes how structural modeling mirrors hardware schematics.

*   **From "Fundamentals of Logic Design" by Roth C.H:**
    *   **Chapter 4: Combinational Logic Circuits:** Roth provides the theoretical basis for adders, including the truth tables, Boolean expressions, and Karnaugh maps for half and full adders. He explains how a full adder can be derived from two half adders and an OR gate, providing the logic behind our Verilog implementation.
    *   **Chapter 9: Design of Sequential Circuits:** While this experiment is combinational, Roth's emphasis on breaking down complex systems into basic building blocks is a universal design principle that applies here.

*   **From "Verilog HDL: A Guide to Digital Design and Synthesis" by Palnitkar S.:**
    *   **Chapter 3: Verilog Language Constructs:** Palnitkar meticulously covers module definitions, port types, and data types.
    *   **Chapter 4: Structural Description:** This chapter is highly relevant, explaining the syntax and semantics of module instantiation (`module_name instance_name (...)`). Palnitkar stresses the importance of naming conventions and wire declarations for interconnections. He often uses examples of arithmetic circuits like adders to illustrate structural design.
    *   **Chapter 5: Dataflow Modeling:** Palnitkar might contrast this with structural modeling, showing how `assign` statements can implement combinational logic directly.

---

### Important Points to Remember:

*   **Module Instantiation Syntax:** Ensure correct syntax for `module_name instance_name (.port1(signal1), .port2(signal2), ...);`.
*   **Port Mapping:** All ports of an instantiated module must be mapped to a signal or port. Use named port mapping (`.port_name(signal_name)`) for clarity and to avoid errors due to port order changes.
*   **Wire Declaration:** Internal connections between instantiated modules *must* be declared as `wire` (or `reg` if driven by procedural blocks, though `wire` is typical for combinational structural connections).
*   **Hierarchy:** Structural modeling builds a hierarchy. The `full_adder_structural` module is higher than the `half_adder` modules it instantiates.
*   **Synthesizability:** The Verilog code should be synthesizable. Using primitive gates or well-defined modules (like the `half_adder` if it's also synthesizable) makes the design ready for hardware implementation.
*   **Testbenches:** A good testbench is crucial for verifying the correctness of your design. Ensure it covers all possible input combinations and uses `$display` and `$monitor` for clear output.

---

### Practice Questions & Exercises:

1.  **Question:** What are the primary benefits of using structural modeling in Verilog for designing complex circuits like multi-bit adders?
    *   **Answer:**
        *   **Modularity and Reusability:** Complex circuits can be built from smaller, pre-verified modules, promoting code reuse and reducing design time.
        *   **Hierarchy:** Creates a clear hierarchical structure, making the design easier to understand, debug, and manage.
        *   **Readability:** Closely resembles a circuit schematic, making it intuitive for engineers familiar with hardware design.
        *   **Abstraction:** Allows designers to focus on the interconnections of functional blocks without needing to know the internal details of each block (as long as their interfaces are known).

2.  **Question:** If you wanted to design a 2-bit ripple-carry adder, how would you use the `full_adder_structural` module you developed? Draw a block diagram and describe the Verilog instantiation.
    *   **Answer:**
        *   **Block Diagram:** A 2-bit ripple-carry adder requires two full adders. The first full adder adds the least significant bits (LSBs) of the two numbers and the initial carry-in. Its carry-out becomes the carry-in for the second full adder, which adds the most significant bits (MSBs).
        ```
               +---------------------+       +---------------------+
        A0 ----|                     |       |                     |
               | Full Adder          |----   | Full Adder          |---- SUM1 (LSB)
        B0 ----| (Instance FA0)      |  |    | (Instance FA1)      |---- SUM0 (MSB)
               |                     |  |    |                     |
        Cin ---|                     |--|    |                     |
               +---------------------+  |    +---------------------+
                                       | C_out
                                       |
                                       +--------------------------- (Carry-out of the 2-bit adder)
        ```
        *   **Verilog Instantiation:**
        ```verilog
        module two_bit_adder (
            input  [1:0] A, // 2-bit input A
            input  [1:0] B, // 2-bit input B
            input  cin,     // Carry-in
            output [1:0] sum, // 2-bit sum output
            output cout     // Carry-out
        );

            wire c1; // Internal carry wire

            // Instantiate the first full adder for the LSBs
            full_adder_structural fa0 (
                .a(A[0]),
                .b(B[0]),
                .c_in(cin),
                .sum(sum[0]),
                .cout(c1)
            );

            // Instantiate the second full adder for the MSBs
            full_adder_structural fa1 (
                .a(A[1]),
                .b(B[1]),
                .c_in(c1),   // Connect carry-out from fa0 as carry-in
                .sum(sum[1]),
                .cout(cout)  // Connect carry-out from fa1 as the final carry-out
            );

        endmodule
        ```

3.  **Question:** Consider the `half_adder.v` module. If you wanted to implement its functionality using *only* primitive gates (`xor`, `and`, `or`, `not`, `nand`, `nor`, `xnor`), how would you write the Verilog code structurally?
    *   **Answer:**
        ```verilog
        // Module: half_adder_primitive
        // Description: Implements a half adder using primitive gates structurally.
        module half_adder_primitive (
            input  a,
            input  b,
            output sum,
            output cout
        );

            wire xor_out; // Output of the XOR gate

            // Instantiate an XOR gate for the sum
            xor gate_xor (
                .y(xor_out), // Output of XOR
                .a1(a),      // Input 1
                .a2(b)       // Input 2
            );

            // Instantiate an AND gate for the carry-out
            and gate_and (
                .y(cout),    // Output of AND (final carry-out)
                .a1(a),      // Input 1
                .a2(b)       // Input 2
            );

            // Connect the XOR output to the sum output
            assign sum = xor_out;

        endmodule
        ```
        *(Note: Using `assign sum = a ^ b;` is generally preferred for simplicity and clarity unless the lab explicitly requires instantiation of primitives for every gate.)*

---

This comprehensive set of notes covers the theoretical background, practical implementation in Verilog using structural modeling, verification through simulation, and alignment with course objectives and textbook references. It provides a solid foundation for understanding how to build complex digital circuits from smaller, reusable components.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
