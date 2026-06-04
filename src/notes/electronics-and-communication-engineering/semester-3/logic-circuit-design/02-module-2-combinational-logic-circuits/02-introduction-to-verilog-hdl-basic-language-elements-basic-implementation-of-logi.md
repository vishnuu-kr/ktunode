---
title: "Introduction to Verilog HDL – Basic language elements, Basic implementation of logic gates and combinational circuits."
subject: "LOGIC CIRCUIT DESIGN"
module: "Module 2: Combinational logic circuits "
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe323"
status: "completed"
scrapedAt: "2026-05-23T17:46:11.376Z"
---
# LOGIC CIRCUIT DESIGN - Module 2: Combinational Logic Circuits

## Topic: Introduction to Verilog HDL – Basic Language Elements, Basic Implementation of Logic Gates and Combinational Circuits

### 1. Introduction to Verilog HDL

Verilog Hardware Description Language (HDL) is a widely used language for describing the structure and behavior of digital electronic systems. It allows engineers to design, simulate, and synthesize complex digital circuits.

**Key Concepts:**

*   **Hardware Description Language (HDL):** A specialized computer language used to describe the design, simulation, and verification of digital circuits.
*   **Abstraction Levels:** Verilog supports different levels of abstraction:
    *   **Behavioral Level:** Describes the functionality of a circuit using programming constructs like `always` blocks, `if-else`, `case` statements.
    *   **Dataflow Level:** Describes the circuit's behavior by specifying the flow of data between registers and the operations performed on the data. Uses `assign` statements.
    *   **Structural Level:** Describes the circuit's interconnections by instantiating predefined or previously defined modules (components).
*   **Simulation:** The process of executing a Verilog design to verify its functionality.
*   **Synthesis:** The process of converting a Verilog description into a netlist of standard logic gates that can be implemented on hardware like FPGAs or ASICs.

**Learning Outcomes Addressed:**

*   Ability to understand and use basic Verilog syntax for describing digital circuits. (Implied for CO3)

**Textbook References:**

*   **Floyd, Digital Fundamentals:** Provides a foundational understanding of digital logic concepts that Verilog is used to model.
*   **Brown, Fundamentals of Digital Logic with Verilog Design:** This textbook is specifically designed for learning Verilog and will be a primary resource.
*   **Mano, Digital Design:** Offers a comprehensive overview of digital design principles and HDL usage.

### 2. Basic Language Elements in Verilog HDL

Verilog has several fundamental building blocks that are essential for writing any design.

**2.1. Modules:**

A module is the basic building block of a Verilog design. It encapsulates a specific piece of hardware, defining its inputs, outputs, and internal logic.

*   **Syntax:**
    ```verilog
    module module_name (port_list);
        // Port declarations
        input port1;
        output port2;
        inout port3;

        // Internal declarations (wires, regs, parameters, etc.)

        // Behavioral or structural description
        // ...

    endmodule
    ```
*   **Ports:** The interface of a module, allowing it to communicate with other modules.
    *   `input`: Data flows into the module.
    *   `output`: Data flows out of the module.
    *   `inout`: Data can flow in either direction.

**Example:** A simple AND gate module.

```verilog
module and_gate (
    input a,
    input b,
    output y
);

    // Logic implementation using assign statement (dataflow)
    assign y = a & b;

endmodule
```

**2.2. Data Types:**

Verilog has specific data types to represent digital signals.

*   **`wire`:** Represents a physical connection between components. It's a continuous signal. Similar to a connection point in a circuit diagram.
*   **`reg`:** Represents a storage element (like a flip-flop or latch) or a signal driven within an `always` block. `reg` does not necessarily mean register; it represents a variable that can hold a value.

**Important Point:** In Verilog, `wire` is used for combinational logic outputs driven by `assign` statements or outputs of instantiated modules. `reg` is used for variables that hold values, typically within `always` blocks.

**2.3. Operators:**

Verilog supports various operators for performing logical, arithmetic, and bitwise operations.

*   **Logical Operators:** `&` (AND), `|` (OR), `~` (NOT), `^` (XOR), `~^` (XNOR). These operate on bits.
*   **Concatenation:** `{}` operator combines multiple signals into a larger bus. Example: `{a, b}`.
*   **Replication:** `{n{signal}}` repeats `signal` `n` times. Example: `{3{1'b0}}` creates a 3-bit zero.

**2.4. `assign` Statement:**

Used to describe combinational logic using a continuous assignment. It assigns a value to a `wire` (or other net types) based on an expression.

*   **Syntax:** `assign target_signal = expression;`

**Example:** Implementing a 2-to-1 multiplexer using `assign`.

```verilog
module mux_2_to_1 (
    input i0,
    input i1,
    input sel,
    output y
);

    assign y = (sel) ? i1 : i0; // Ternary operator for selection

endmodule
```

**2.5. `always` Block:**

Used to describe sequential and combinational logic that changes based on certain events.

*   **Combinational `always` block:** Triggered by changes in any of the signals in the sensitivity list.
    *   **Syntax:** `always @(sensitivity_list) begin ... end`
    *   The sensitivity list should include all signals that are read within the `always` block. For combinational logic, this is typically `always @(*)`.
*   **Sequential `always` block:** Triggered by a clock edge (e.g., `posedge clk` or `negedge clk`).

**Example:** Implementing a 2-to-1 multiplexer using a combinational `always` block.

```verilog
module mux_2_to_1_always (
    input i0,
    input i1,
    input sel,
    output reg y // 'y' is declared as reg because it's assigned in an always block
);

    always @(*) begin
        if (sel) begin
            y = i1;
        end else begin
            y = i0;
        end
    end

endmodule
```

**Important Point:** For combinational logic, using `always @(*)` is preferred as it automatically infers the sensitivity list, reducing the risk of simulation mismatches. Using `reg` for the output of an `always` block that describes combinational logic is necessary.

**Learning Outcomes Addressed:**

*   Ability to implement basic logic gates and combinational circuits using Verilog. (CO2, CO3)
*   Understanding of Verilog module structure, port declarations, and data types. (Implied for CO3)
*   Familiarity with `assign` statements and combinational `always` blocks. (Implied for CO3)

**Textbook References:**

*   **Brown, Fundamentals of Digital Logic with Verilog Design:** Chapters on Verilog syntax, modules, data types, and combinational logic implementation.
*   **Mano, Digital Design:** Sections on HDL description of combinational circuits.
*   **LaMeres, Introduction to Logic Circuits & Logic Design with Verilog:** Practical examples of Verilog coding for logic gates and simple combinational circuits.

### 3. Basic Implementation of Logic Gates in Verilog

Logic gates are the fundamental building blocks of all digital circuits. They can be implemented in Verilog using various methods.

**3.1. Using `assign` Statements (Dataflow Modeling):**

This is the most straightforward way to describe combinational logic.

*   **AND Gate:**
    ```verilog
    module and_gate_dataflow (
        input a,
        input b,
        output y
    );
        assign y = a & b;
    endmodule
    ```
*   **OR Gate:**
    ```verilog
    module or_gate_dataflow (
        input a,
        input b,
        output y
    );
        assign y = a | b;
    endmodule
    ```
*   **NOT Gate (Inverter):**
    ```verilog
    module not_gate_dataflow (
        input a,
        output y
    );
        assign y = ~a;
    endmodule
    ```
*   **XOR Gate:**
    ```verilog
    module xor_gate_dataflow (
        input a,
        input b,
        output y
    );
        assign y = a ^ b;
    endmodule
    ```

**3.2. Using Combinational `always` Blocks (Behavioral Modeling):**

This method uses conditional statements to describe the logic.

*   **AND Gate:**
    ```verilog
    module and_gate_behavioral (
        input a,
        input b,
        output reg y
    );
        always @(*) begin
            y = a & b;
        end
    endmodule
    ```
*   **Full Adder (Behavioral):** A full adder takes three inputs (A, B, Cin) and produces two outputs (Sum, Cout).

    *   **Truth Table:**
        | A | B | Cin | Sum | Cout |
        |---|---|-----|-----|------|
        | 0 | 0 | 0   | 0   | 0    |
        | 0 | 0 | 1   | 1   | 0    |
        | 0 | 1 | 0   | 1   | 0    |
        | 0 | 1 | 1   | 0   | 1    |
        | 1 | 0 | 0   | 1   | 0    |
        | 1 | 0 | 1   | 0   | 1    |
        | 1 | 1 | 0   | 0   | 1    |
        | 1 | 1 | 1   | 1   | 1    |

    *   **Verilog Implementation:**
        ```verilog
        module full_adder (
            input a,
            input b,
            input cin,
            output reg sum,
            output reg cout
        );

            always @(*) begin
                // Sum logic: Sum = A XOR B XOR Cin
                sum = a ^ b ^ cin;

                // Cout logic: Cout = (A AND B) OR (Cin AND (A XOR B))
                cout = (a & b) | (cin & (a ^ b));
            end

        endmodule
        ```
        *This implementation directly uses the Boolean expressions for Sum and Carry-out.*

**3.3. Using Structural Modeling (Gate Instantiation):**

This method describes the circuit by instantiating primitive gates or other modules.

*   **AND Gate using built-in primitives:** Verilog has some built-in primitive gates.
    ```verilog
    module and_gate_structural (
        input a,
        input b,
        output y
    );
        // Instantiating a built-in AND gate
        and inst_and (y, a, b); // Output port first, then input ports
    endmodule
    ```
*   **Full Adder using other gates (Structural):** This would involve instantiating XOR, AND, and OR gates.
    ```verilog
    module full_adder_structural (
        input a,
        input b,
        input cin,
        output sum,
        output cout
    );

        // Internal wires to connect gates
        wire xor_ab_sum;
        wire and_ab;
        wire and_cin_xor_ab;

        // Instantiate XOR gate for A XOR B
        xor xor1 (xor_ab_sum, a, b);

        // Instantiate XOR gate for Sum
        xor xor2 (sum, xor_ab_sum, cin);

        // Instantiate AND gate for A AND B
        and and1 (and_ab, a, b);

        // Instantiate AND gate for Cin AND (A XOR B)
        and and2 (and_cin_xor_ab, cin, xor_ab_sum);

        // Instantiate OR gate for Cout
        or or1 (cout, and_ab, and_cin_xor_ab);

    endmodule
    ```
    *This demonstrates how a complex circuit can be built from simpler components.*

**Learning Outcomes Addressed:**

*   Ability to implement basic logic gates using Verilog. (CO2, CO3)
*   Ability to design and implement combinational logic circuits (e.g., full adder) using Verilog. (CO2, CO3)
*   Understanding of dataflow, behavioral, and structural modeling styles. (Implied for CO3)

**Textbook References:**

*   **Brown, Fundamentals of Digital Logic with Verilog Design:** Chapters on modeling combinational logic using different styles.
*   **Mano, Digital Design:** Examples of implementing basic gates and combinational functions in Verilog.
*   **LaMeres, Introduction to Logic Circuits & Logic Design with Verilog:** Practical examples for gates and common combinational circuits.
*   **Cavanagh, Digital Design Verilog HDL and Fundamentals:** Provides numerous code examples for logic gates and combinational functions.

### 4. Basic Implementation of Combinational Circuits in Verilog

Combinational circuits are digital circuits whose output depends only on the current input values.

**4.1. Multiplexers (Muxes):**

A multiplexer selects one of several input signals and forwards it to a single output.

*   **4-to-1 Multiplexer:**
    *   **Logic:** Selects one of four inputs (`i0`, `i1`, `i2`, `i3`) based on a 2-bit select signal (`sel`).
    *   **Verilog (Dataflow):**
        ```verilog
        module mux_4_to_1_dataflow (
            input [3:0] i, // 4 inputs as a bus
            input [1:0] sel,
            output y
        );
            assign y = i[sel]; // Direct selection using bus indexing
        endmodule
        ```
    *   **Verilog (Behavioral using case statement):**
        ```verilog
        module mux_4_to_1_behavioral (
            input [3:0] i,
            input [1:0] sel,
            output reg y
        );
            always @(*) begin
                case (sel)
                    2'b00: y = i[0];
                    2'b01: y = i[1];
                    2'b10: y = i[2];
                    2'b11: y = i[3];
                    default: y = 1'bx; // Handle undefined select values if necessary
                endcase
            end
        endmodule
        ```

**4.2. Decoders:**

A decoder converts an `n`-bit binary input into `2^n` unique outputs, where only one output is active (high) for each unique input combination.

*   **3-to-8 Decoder:**
    *   **Logic:** Takes a 3-bit input (`a`, `b`, `c`) and activates one of eight output lines (`y[0]` to `y[7]`).
    *   **Verilog (Behavioral using case statement):**
        ```verilog
        module decoder_3_to_8 (
            input [2:0] select,
            output reg [7:0] y
        );
            always @(*) begin
                // Initialize all outputs to 0
                y = 8'b00000000;
                // Activate the selected output
                y[select] = 1'b1;
            end
        endmodule
        ```
        *Note: The `select` input directly indexes the `y` bus, which is a concise way to implement decoders in Verilog.*

**4.3. Encoders:**

An encoder performs the reverse function of a decoder. It takes multiple input lines and outputs a binary code representing which input line is active.

*   **8-to-3 Priority Encoder:**
    *   **Logic:** If multiple inputs are active, it prioritizes one (e.g., the highest indexed active input) and outputs its corresponding binary code.
    *   **Verilog (Behavioral using if-else if):**
        ```verilog
        module priority_encoder_8_to_3 (
            input [7:0] data_in,
            output reg [2:0] data_out
        );
            always @(*) begin
                if (data_in[7]) begin
                    data_out = 3'd7;
                end else if (data_in[6]) begin
                    data_out = 3'd6;
                end else if (data_in[5]) begin
                    data_out = 3'd5;
                end else if (data_in[4]) begin
                    data_out = 3'd4;
                end else if (data_in[3]) begin
                    data_out = 3'd3;
                end else if (data_in[2]) begin
                    data_out = 3'd2;
                end else if (data_in[1]) begin
                    data_out = 3'd1;
                end else if (data_in[0]) begin
                    data_out = 3'd0;
                end else begin
                    data_out = 3'd0; // Or 3'bx for undefined state
                end
            end
        endmodule
        ```

**4.4. Adders (e.g., Ripple Carry Adder):**

*   **Full Adder:** As implemented in Section 3.2.
*   **Ripple Carry Adder (RCA):** Connects multiple full adders in series, where the carry-out of one stage becomes the carry-in of the next stage.
    *   **Verilog (Structural):** This involves instantiating the `full_adder` module multiple times.
        ```verilog
        // Assuming full_adder module is defined elsewhere

        module ripple_carry_adder_4bit (
            input [3:0] a,
            input [3:0] b,
            input cin,
            output [3:0] sum,
            output cout
        );

            // Internal wires for carries between stages
            wire c1, c2, c3;

            // Instantiate four full adders
            full_adder fa0 (.a(a[0]), .b(b[0]), .cin(cin), .sum(sum[0]), .cout(c1));
            full_adder fa1 (.a(a[1]), .b(b[1]), .cin(c1), .sum(sum[1]), .cout(c2));
            full_adder fa2 (.a(a[2]), .b(b[2]), .cin(c2), .sum(sum[2]), .cout(c3));
            full_adder fa3 (.a(a[3]), .b(b[3]), .cin(c3), .sum(sum[3]), .cout(cout));

        endmodule
        ```
        *Port mapping can be done by name (`.port_name(signal_name)`) or by position.*

**Important Points for Combinational Circuits:**

*   **Completeness of Sensitivity List:** For combinational `always` blocks, ensure all inputs read within the block are in the sensitivity list (`always @(*)` is the safest).
*   **No Latches/Flip-flops:** Combinational logic should not infer latches or flip-flops. This means:
    *   All outputs of a combinational `always` block must be assigned a value in every possible execution path (e.g., using `case` with all possibilities covered, or `if-else if-else` chains that cover all conditions).
    *   Using `assign` statements inherently creates combinational logic.
*   **Synthesizability:** Code written for synthesis should adhere to specific rules. Using behavioral constructs (`always`, `case`, `if-else`) with appropriate sensitivity lists and assignments is generally synthesizable.

**Learning Outcomes Addressed:**

*   Ability to design and implement combinational logic circuits (Muxes, Decoders, Encoders, Adders) using Verilog. (CO2, CO3)
*   Application of different Verilog modeling styles for combinational circuits. (Implied for CO3)
*   Understanding of bus operations and indexing in Verilog. (Implied for CO3)

**Textbook References:**

*   **Brown, Fundamentals of Digital Logic with Verilog Design:** Chapters dedicated to multiplexers, decoders, encoders, and adders with Verilog examples.
*   **Mano, Digital Design:** Provides detailed explanations and Verilog implementations for these combinational circuits.
*   **LaMeres, Introduction to Logic Circuits & Logic Design with Verilog:** Offers practical coding examples and explanations for implementing common combinational functions.
*   **Hall, Digital Circuits and Systems:** Discusses the theory behind these circuits, which Verilog is used to model.

### 5. Course Outcomes Alignment

This module directly contributes to several course outcomes:

*   **CO1: Apply the knowledge of digital representation of information and Boolean algebra to deduce optimal digital circuits. (Knowledge Level: K3)**
    *   By learning to model logic gates and combinational circuits in Verilog, students translate Boolean expressions (derived from understanding digital information and Boolean algebra) into hardware descriptions. The choice of Verilog construct can influence the "optimality" in terms of synthesis results.
*   **CO2: Design and implement combinational logic circuits, sequential logic circuits and finite state machines. (Knowledge Level: K5)**
    *   This module focuses on the "design and implement combinational logic circuits" part of CO2. Students will be able to design the functionality and implement it using Verilog.
*   **CO3: Design and implement digital circuits on FPGA using hardware description language (HDL). (Knowledge Level: K5)**
    *   This entire module is foundational for CO3. Verilog HDL is the language used. The basic language elements and implementation of gates/combinational circuits are the building blocks for more complex designs that will eventually be implemented on FPGAs.

### 6. Practice Questions

**Question 1:**
Write a Verilog module for a 3-input AND gate using a `assign` statement.

**Answer 1:**
```verilog
module and_gate_3_input (
    input a,
    input b,
    input c,
    output y
);
    assign y = a & b & c;
endmodule
```

**Question 2:**
Implement a 4-to-1 multiplexer using a behavioral `always @(*)` block and a `case` statement. Ensure the output is declared as `reg`.

**Answer 2:**
```verilog
module mux_4_to_1_behavioral (
    input [3:0] i,
    input [1:0] sel,
    output reg y
);
    always @(*) begin
        case (sel)
            2'b00: y = i[0];
            2'b01: y = i[1];
            2'b10: y = i[2];
            2'b11: y = i[3];
            default: y = 1'bx; // Assign an unknown value if select is invalid
        endcase
    end
endmodule
```

**Question 3:**
Describe the differences between `wire` and `reg` data types in Verilog. When would you typically use each?

**Answer 3:**
*   **`wire`:** Represents a physical connection. It's used for combinational logic outputs that are continuously driven by an `assign` statement or the output of an instantiated module. Think of it as a wire in a schematic.
*   **`reg`:** Represents a variable that can hold a value. It is used for signals driven within an `always` block or `initial` block. It does not necessarily mean a physical register; it's a storage element within the behavioral description. You must use `reg` for outputs assigned within an `always` block.

**Question 4:**
Write a Verilog module for a 2-bit comparator that outputs `true` if the two 2-bit inputs are equal, and `false` otherwise. Use a dataflow style.

**Answer 4:**
```verilog
module comparator_2bit (
    input [1:0] a,
    input [1:0] b,
    output y
);
    // For equality, all corresponding bits must be equal.
    // (a[0] == b[0]) AND (a[1] == b[1])
    // This can be simplified using XOR: if XOR is 0, bits are equal.
    // (a[0] ^ b[0]) == 0 AND (a[1] ^ b[1]) == 0
    // For combinational logic, we can directly use the equality operator ==
    // or check if the XOR result is zero.
    assign y = (a == b);
endmodule
```
*Self-check: If a = 2'b10 and b = 2'b10, then a == b is true (1). If a = 2'b10 and b = 2'b11, then a == b is false (0).*

**Question 5:**
Explain the purpose of the `always @(*)` block for combinational logic.

**Answer 5:**
The `always @(*)` block is used to describe combinational logic. The `(*)` is a shorthand for a sensitivity list that includes all signals read within the `always` block. This ensures that the logic within the block is re-evaluated whenever any of its input signals change, which is the defining characteristic of combinational circuits. It helps prevent simulation mismatches by automatically detecting dependencies, and synthesizers can correctly infer combinational logic from such blocks.

### 7. Important Points to Remember

*   **Verilog is Hierarchical:** Designs are built from modules, which can contain other modules.
*   **Combinational Logic:** Outputs depend *only* on current inputs. No memory elements are involved.
*   **Sensitivity List:** Crucial for `always` blocks. For combinational logic, `always @(*)` is the best practice.
*   **`assign` vs. `always`:** `assign` is for continuous assignments (dataflow). `always` blocks are for describing procedural logic and are triggered by events.
*   **`wire` vs. `reg`:** `wire` for connections, `reg` for variables assigned in procedural blocks. An output of a combinational `always` block must be declared as `reg`.
*   **Synthesizable Code:** Code should follow rules that allow it to be converted into hardware. Avoid constructs that imply timing or memory without explicit clocking (like blocking assignments in sequential blocks, or incomplete `if`/`case` statements in combinational blocks).
*   **Modularity:** Break down complex designs into smaller, manageable modules.

This comprehensive set of notes covers the introduction to Verilog HDL, its basic language elements, and the implementation of logic gates and fundamental combinational circuits, directly supporting the learning outcomes and course objectives for Module 2.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
