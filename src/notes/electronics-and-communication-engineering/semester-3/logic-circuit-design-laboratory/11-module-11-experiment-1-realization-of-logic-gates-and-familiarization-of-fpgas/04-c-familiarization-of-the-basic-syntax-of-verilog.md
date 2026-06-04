---
title: "(c) Familiarization of the basic syntax of verilog"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 11: Experiment 1: Realization of Logic Gates and Familiarization of FPGAs"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe453"
status: "completed"
scrapedAt: "2026-05-23T17:46:28.180Z"
---
# Module 11: Experiment 1: Realization of Logic Gates and Familiarization of FPGAs

## Topic (c): Familiarization of the Basic Syntax of Verilog

### Learning Outcomes:

*   Understand the fundamental building blocks of Verilog code.
*   Learn how to declare modules, ports, and internal signals.
*   Comprehend the different types of assignments (blocking and non-blocking).
*   Familiarize with basic arithmetic and logical operators in Verilog.
*   Understand the concept of behavioral modeling and dataflow modeling.
*   Be able to write simple Verilog code for basic logic gates.

### Course Outcomes Addressed:

*   **CO1:** Design and demonstrate the functioning of various combinational and sequential circuits using ICs (Knowledge Level: K3) - *While this topic focuses on Verilog, understanding its syntax is foundational for CO1 as Verilog is used to implement these circuits.*
*   **CO2:** Apply an industry-compatible hardware description language to implement digital circuits (Knowledge Level: K3) - *This is the primary CO addressed by this topic, as Verilog is the HDL being introduced.*
*   **CO3:** Implement digital circuits on FPGA boards and connect external hardware to the boards (Knowledge Level: K3) - *Familiarity with Verilog syntax is a prerequisite for implementing circuits on FPGAs.*
*   **CO4:** Function effectively as an individual and in a team to accomplish the given task. (Knowledge Level: K2) - *Learning Verilog syntax contributes to the ability to collaborate on HDL-based projects.*

---

### 1. Introduction to Verilog HDL

Verilog Hardware Description Language (HDL) is a widely used language for describing digital electronic systems at various levels of abstraction, from algorithmic to gate-level. It's used for simulation, synthesis, and verification of digital circuits.

**Key Concepts:**

*   **Hardware Description Language (HDL):** A computer language used to describe the design, simulation, and testing of digital logic circuits.
*   **Abstraction Levels:** Verilog allows description at different levels:
    *   **Behavioral:** Describes the functionality of a circuit using procedural statements (e.g., `always`, `if-else`).
    *   **Dataflow:** Describes the flow of data between registers and combinational logic using continuous assignments (e.g., `assign`).
    *   **Structural:** Describes a circuit as an interconnection of lower-level modules (e.g., gates).
*   **Synthesis:** The process of converting a Verilog description into a netlist of primitive gates that can be implemented on hardware like FPGAs or ASICs.

**Reference (Palnitkar S., "Verilog HDL: A guide to digital design and synthesis"):** Palnitkar's book emphasizes Verilog's role in both simulation and synthesis, highlighting how well-written Verilog code can be directly translated into hardware.

---

### 2. Basic Verilog Syntax Elements

#### 2.1. Verilog Code Structure

A typical Verilog design consists of one or more *modules*. A module is the fundamental building block in Verilog, representing a specific piece of hardware.

```verilog
module module_name (port_list);
    // Declarations: parameters, inputs, outputs, registers, wires
    // Instantiations of other modules (optional)
    // Continuous assignments (dataflow)
    // Procedural blocks (behavioral)
endmodule
```

#### 2.2. Modules

*   **Definition:** A module encapsulates a digital circuit. It has input and output ports to interface with other modules.
*   **Syntax:**
    ```verilog
    module module_name (port1, port2, ...);
        // Port declarations
        // Internal signals and logic
    endmodule
    ```
*   **Example:** A simple AND gate module.

    ```verilog
    module and_gate (
        input a,
        input b,
        output y
    );
        // Logic to implement the AND function
    endmodule
    ```

#### 2.3. Ports

*   **Definition:** Ports define the interface of a module, allowing it to communicate with the outside world.
*   **Port Directions:**
    *   `input`: Data enters the module.
    *   `output`: Data exits the module.
    *   `inout`: Bidirectional port (less common for basic gates).
*   **Port Declaration Syntax:**
    ```verilog
    module my_circuit (input clk, input reset, output data_out);
        // ...
    endmodule
    ```
    Or, in older styles:
    ```verilog
    module my_circuit (clk, reset, data_out);
        input clk;
        input reset;
        output data_out;
        // ...
    endmodule
    ```

#### 2.4. Data Types and Declarations

*   **`reg`:** Represents a storage element (like a flip-flop or latch). It can hold a value and its value is updated only when driven by a procedural assignment (within `always` blocks).
*   **`wire`:** Represents a physical wire. It's used to connect components. Its value is determined by the output of a driver (e.g., an `assign` statement or an output of a module).
*   **`parameter`:** Used to define constants or configurable values within a module.
*   **Declaration Syntax:**
    ```verilog
    reg clk;       // A register type signal
    wire a, b, y;  // Wire type signals
    parameter WIDTH = 8; // A parameter
    ```

#### 2.5. Continuous Assignments (`assign`)

*   **Purpose:** Used for combinational logic modeling (dataflow). The `assign` statement continuously drives a `wire` or `reg` with an expression.
*   **Syntax:**
    ```verilog
    assign target_signal = expression;
    ```
*   **Example: AND Gate**

    ```verilog
    module and_gate_dataflow (
        input a,
        input b,
        output y
    );
        assign y = a & b; // Continuous assignment for AND operation
    endmodule
    ```
    *   **`&`**: The bitwise AND operator.

#### 2.6. Procedural Blocks (`always`)

*   **Purpose:** Used for behavioral modeling, describing sequential logic (flip-flops, latches) or complex combinational logic that is easier to express procedurally.
*   **Sensitivity List:** The signals in the sensitivity list trigger the execution of the `always` block.
*   **Types of `always` blocks:**
    *   **Combinational `always`:** Sensitive to all inputs.
    *   **Sequential `always`:** Sensitive to clock edges (positive or negative).

*   **Syntax:**
    ```verilog
    always @(sensitivity_list) begin
        // Statements
    end
    ```
    or
    ```verilog
    always @(posedge clk or negedge reset) begin
        // Statements for sequential logic
    end
    ```

*   **Blocking Assignments (`=`):**
    *   Used in combinational `always` blocks.
    *   The assignment is executed immediately, and the next statement is executed only after the current assignment is complete.
    *   **Important:** If used incorrectly in sequential logic, it can lead to incorrect synthesis.

*   **Non-blocking Assignments (`=`):**
    *   Primarily used in sequential `always` blocks (triggered by clock edges).
    *   The assignment is scheduled to happen at the end of the current time step. All non-blocking assignments within a block are evaluated based on the values of their right-hand sides at the beginning of the time step and updated simultaneously at the end. This mimics the behavior of flip-flops.
    *   **Important:** Use non-blocking assignments for sequential logic and blocking assignments for combinational logic.

*   **Example: AND Gate using `always` (Combinational)**

    ```verilog
    module and_gate_behavioral_comb (
        input a,
        input b,
        output reg y // output must be 'reg' if assigned in an always block
    );
        always @(a or b) begin // Sensitive to changes in 'a' or 'b'
            y = a & b;        // Blocking assignment
        end
    endmodule
    ```

*   **Example: D Flip-Flop using `always` (Sequential)**

    ```verilog
    module d_flipflop (
        input clk,
        input reset,
        input d,
        output reg q
    );
        always @(posedge clk or negedge reset) begin
            if (reset) begin
                q <= 1'b0; // Asynchronous reset (non-blocking assignment)
            end else begin
                q <= d;    // Synchronous data capture (non-blocking assignment)
            end
        end
    endmodule
    ```
    *   `posedge clk`: Trigger on the positive edge of `clk`.
    *   `negedge reset`: Trigger on the negative edge of `reset`.
    *   `q <= d;`: Non-blocking assignment.

**Important Point to Remember (Bhasker, "Verilog HDL Synthesis"):** For combinational logic, use continuous assignments (`assign`) or blocking assignments (`=`) within `always` blocks. For sequential logic (flip-flops, latches), use non-blocking assignments (`<=`) within `always` blocks sensitive to clock edges.

---

### 3. Basic Operators in Verilog

Verilog supports a rich set of operators for various operations.

#### 3.1. Arithmetic Operators

*   `+` : Addition
*   `-` : Subtraction
*   `*` : Multiplication
*   `/` : Division (use with caution for synthesis, integer division)
*   `%` : Modulo (remainder)
*   `**`: Exponentiation

#### 3.2. Relational Operators

*   `==` : Equal to
*   `!=` : Not equal to
*   `>`  : Greater than
*   `<`  : Less than
*   `>=` : Greater than or equal to
*   `<=` : Less than or equal to

#### 3.3. Logical Operators

*   `&&` : Logical AND
*   `||` : Logical OR
*   `!`  : Logical NOT
    *   **Note:** Logical operators treat the operand as a single Boolean value. If any bit is non-zero, it's considered true (1). If all bits are zero, it's false (0). The result is always 0 or 1.

#### 3.4. Bitwise Operators

*   `~` : Bitwise NOT
*   `&` : Bitwise AND
*   `|` : Bitwise OR
*   `^` : Bitwise XOR
*   `~&` : Bitwise NAND ( NOR is `~|`, XOR is `^`, XNOR is `^~` or `~^`)

#### 3.5. Reduction Operators

*   `&` : Reduction AND (e.g., `&a` reduces all bits of `a` with AND)
*   `|` : Reduction OR
*   `^` : Reduction XOR
*   `~&` : Reduction NAND
*   `~|` : Reduction NOR
*   `~^` : Reduction XNOR

#### 3.6. Concatenation Operator

*   `{ , }` : Concatenates signals to form a wider bus.
*   **Example:** `assign {carry_out, sum} = a + b;`

#### 3.7. Conditional Operator (Ternary)

*   `condition ? expression_if_true : expression_if_false`
*   **Example:** `assign y = select ? in_a : in_b;`

**Example: Implementing a 2-to-1 Multiplexer**

*   **Dataflow using `assign`:**

    ```verilog
    module mux_2to1_dataflow (
        input a,
        input b,
        input sel,
        output y
    );
        assign y = sel ? b : a; // If sel is 1, y = b; else y = a
    endmodule
    ```

*   **Behavioral using `always`:**

    ```verilog
    module mux_2to1_behavioral (
        input a,
        input b,
        input sel,
        output reg y
    );
        always @(a, b, sel) begin
            if (sel) begin
                y = b;
            end else begin
                y = a;
            end
        end
    endmodule
    ```

---

### 4. Bit-Width and Concatenation

Verilog allows specifying bit widths for signals.

*   **Syntax:** `[<msb> : <lsb>]`
*   **Example:** `wire [7:0] data_bus;` // An 8-bit bus

Concatenation is crucial for combining or splitting buses.

*   **Example:**
    ```verilog
    wire [3:0] a = 4'b1010;
    wire [3:0] b = 4'b0101;
    wire [7:0] c;
    wire msb, lsb;

    assign c = {a, b};       // c will be 8'b10100101
    assign {msb, lsb} = c;   // msb = 8'b1, lsb = 8'b0101 (this is incorrect concatenation with single bits)
                             // Correct way to split:
    wire [7:4] upper_nibble;
    wire [3:0] lower_nibble;
    assign upper_nibble = c[7:4];
    assign lower_nibble = c[3:0];
    ```

---

### 5. Verilog `case` Statement

*   **Purpose:** Used for multi-way branching, similar to `if-else if-else` chains, but often more readable for state machines or complex multiplexers.
*   **Syntax:**
    ```verilog
    case (expression)
        case_item1: statement1;
        case_item2: statement2;
        ...
        default: default_statement; // Optional
    endcase
    ```
*   **Important:**
    *   If `case` is used within an `always` block and synthesizes combinational logic, it's important to have a `default` case to avoid inferring latches, unless all possible input combinations are explicitly covered.
    *   For synthesis, `casex` (handles X) and `casez` (handles Z) are also available.

*   **Example: 3-to-8 Decoder**

    ```verilog
    module decoder_3to8 (
        input [2:0] select,
        output [7:0] out
    );
        // Combinational always block to implement the decoder
        always @(select) begin
            // Initialize output to all zeros to avoid latches in synthesis
            out = 8'b00000000;
            case (select)
                3'b000: out[0] = 1;
                3'b001: out[1] = 1;
                3'b010: out[2] = 1;
                3'b011: out[3] = 1;
                3'b100: out[4] = 1;
                3'b101: out[5] = 1;
                3'b110: out[6] = 1;
                3'b111: out[7] = 1;
                default: out = 8'b00000000; // Explicitly handle all cases, including 'X' and 'Z' if select is wider
            endcase
        end
    endmodule
    ```
    **Alternative using dataflow and bitwise operators (more concise for decoders):**
    ```verilog
    module decoder_3to8_dataflow (
        input [2:0] select,
        output [7:0] out
    );
        assign out[0] = ~select[0] & ~select[1] & ~select[2];
        assign out[1] =  select[0] & ~select[1] & ~select[2];
        assign out[2] = ~select[0] &  select[1] & ~select[2];
        assign out[3] =  select[0] &  select[1] & ~select[2];
        assign out[4] = ~select[0] & ~select[1] &  select[2];
        assign out[5] =  select[0] & ~select[1] &  select[2];
        assign out[6] = ~select[0] &  select[1] &  select[2];
        assign out[7] =  select[0] &  select[1] &  select[2];
    endmodule
    ```

---

### 6. Verilog `if-else` Statement

*   **Purpose:** Used for conditional logic.
*   **Syntax:**
    ```verilog
    if (condition) begin
        // statements if condition is true
    end else if (another_condition) begin
        // statements if another_condition is true
    end else begin
        // statements if all conditions are false
    end
    ```
*   **Combinational vs. Sequential:**
    *   In combinational `always` blocks, `if-else` infers multiplexers. All paths must assign a value to the output to avoid latches. Use a `default` assignment before the `if-else` or ensure all branches assign a value.
    *   In sequential `always` blocks, `if-else` is used for logic within flip-flops (e.g., reset, enable).

*   **Example: 2-to-1 Multiplexer** (already shown in section 3.7)

---

### 7. Comments in Verilog

*   **Single-line comment:** Starts with `//` and continues to the end of the line.
*   **Multi-line comment:** Starts with `/*` and ends with `*/`.

**Example:**
```verilog
// This is a single-line comment
module my_module (input clk, output data);
    /*
     This is a multi-line comment.
     It can span several lines.
    */
    wire internal_signal;
    assign internal_signal = clk; // Assign clock to internal signal
endmodule
```

---

### 8. Keywords and Identifiers

*   **Keywords:** Verilog has reserved keywords (e.g., `module`, `endmodule`, `input`, `output`, `reg`, `wire`, `always`, `assign`, `if`, `else`, `case`, `endcase`, `begin`, `end`). These cannot be used as identifiers.
*   **Identifiers:** Used for module names, port names, signal names, etc. They can contain letters, digits, dollar signs (`$`), and underscores (`_`). They must start with a letter or underscore. Case-sensitive.

---

### 9. Simulation and Synthesis Considerations

*   **Simulation:** Verilog is used to simulate the behavior of the circuit before it's synthesized to hardware.
*   **Synthesis:** For synthesis, your Verilog code should be written in a way that can be mapped to hardware primitives (gates, flip-flops).
    *   Avoid constructs that are difficult or impossible to synthesize, such as delays (`#`), specific timing controls not related to clocks, or certain complex arithmetic operations.
    *   Understand the difference between blocking and non-blocking assignments for correct synthesis.
    *   Ensure combinational blocks are truly combinational (no latches inferred unintentionally).

**Reference (Roth C.H., "Fundamentals of Logic Design"):** While Roth focuses on traditional logic design using gates and truth tables, understanding the equivalence between these concepts and Verilog constructs is crucial. For example, a truth table for an AND gate directly maps to `assign y = a & b;`.

---

### Practice Questions:

1.  Write a Verilog module for a 2-input XOR gate using a continuous assignment (`assign`).
2.  Write a Verilog module for a 2-input XOR gate using an `always` block with blocking assignments.
3.  Write a Verilog module for a 2-input XOR gate using an `always` block with non-blocking assignments (even though it's combinational, practice the syntax). Explain why this is generally not preferred for combinational logic in synthesis.
4.  Write a Verilog module for a 1-bit full adder. It should have three inputs: `a`, `b`, `cin` and two outputs: `sum`, `cout`. Use dataflow modeling.
5.  What is the difference between `reg` and `wire` in Verilog? When would you use each?
6.  Explain the difference between blocking (`=`) and non-blocking (`<=`) assignments. Provide a brief example of where each should be used.
7.  Write a Verilog module for a positive-edge triggered D flip-flop with an asynchronous active-high reset.

---

### Answers to Practice Questions:

1.  **XOR Gate (Dataflow):**
    ```verilog
    module xor_gate_dataflow (
        input a,
        input b,
        output y
    );
        assign y = a ^ b; // Bitwise XOR operator
    endmodule
    ```

2.  **XOR Gate (Behavioral - Blocking):**
    ```verilog
    module xor_gate_behavioral_blocking (
        input a,
        input b,
        output reg y
    );
        always @(a or b) begin
            y = a ^ b; // Blocking assignment
        end
    endmodule
    ```

3.  **XOR Gate (Behavioral - Non-blocking):**
    ```verilog
    module xor_gate_behavioral_nonblocking (
        input a,
        input b,
        output reg y
    );
        always @(a or b) begin
            y <= a ^ b; // Non-blocking assignment
        end
    endmodule
    ```
    **Explanation:** While this code will likely simulate correctly and might be synthesized to an XOR gate, using non-blocking assignments for combinational logic can lead to incorrect synthesis results in more complex scenarios if not carefully managed. It's best practice to use non-blocking assignments only for sequential logic where they mimic the behavior of flip-flops.

4.  **Full Adder (Dataflow):**
    ```verilog
    module full_adder_dataflow (
        input a,
        input b,
        input cin,
        output sum,
        output cout
    );
        assign sum = a ^ b ^ cin;
        assign cout = (a & b) | (cin & (a ^ b));
    endmodule
    ```

5.  **`reg` vs. `wire`:**
    *   **`wire`:** Represents a physical connection (wire). It's a default data type for signals driven by continuous assignments (`assign`) or module outputs. It cannot hold its own state; its value is determined by the driver connected to it.
    *   **`reg`:** Represents a storage element (like a flip-flop or latch). It can hold a value, and its value is updated by procedural assignments (e.g., within `always` or `initial` blocks). It's used for outputs of procedural blocks or variables within procedural blocks.

6.  **Blocking vs. Non-blocking Assignments:**
    *   **Blocking (`=`):** The assignment is executed immediately. The next statement in the sequence is executed only after the current assignment is complete. Used for combinational logic.
        ```verilog
        // Example for combinational logic
        always @(a, b) begin
            temp = a & b;
            y = temp | c;
        end
        ```
    *   **Non-blocking (`<=`):** The assignment is scheduled to occur at the end of the current simulation time step. All non-blocking assignments within a block are evaluated based on the values at the beginning of the time step and updated simultaneously at the end. Used for sequential logic.
        ```verilog
        // Example for sequential logic (D flip-flop)
        always @(posedge clk) begin
            q <= d; // q gets the value of d at the clock edge
        end
        ```

7.  **D Flip-Flop with Asynchronous Reset:**
    ```verilog
    module d_ff_async_reset (
        input clk,
        input reset, // Active-high asynchronous reset
        input d,
        output reg q
    );
        always @(posedge clk or posedge reset) begin // Sensitive to clock and reset edge
            if (reset) begin // Check if reset is active
                q <= 1'b0;    // Asynchronous reset to 0
            end else begin
                q <= d;       // Synchronous data capture
            end
        end
    endmodule
    ```

---

### Important Points to Remember:

*   **Case Sensitivity:** Verilog is case-sensitive. `module` is different from `MODULE`.
*   **Semicolons:** Most statements must end with a semicolon (`;`).
*   **End of Blocks:** Modules, `always` blocks, `if-else` chains, `case` statements, etc., must be properly terminated with `endmodule`, `end`, `endcase`, etc.
*   **Synthesizable Subset:** Be mindful of the subset of Verilog that can be synthesized into hardware. Avoid delays (`#`) and non-synthesizable constructs.
*   **Latch Inference:** In combinational `always` blocks, ensure all output signals are assigned a value in every possible execution path to prevent unintended latch inference. This is often achieved by initializing outputs before `if-else` or `case` statements or by providing a `default` case.

This concludes the study notes for the basic syntax of Verilog. These fundamental concepts are crucial for moving forward in designing and implementing digital circuits using Hardware Description Languages.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
