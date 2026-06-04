---
title: "(a) Development of verilog modules for half adder in any of the 3 modeling styles"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 12: Experiment 2: Adders in Verilog"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe458"
status: "completed"
scrapedAt: "2026-05-23T17:46:31.504Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY: Module 12 - Experiment 2: Adders in Verilog

## Topic: (a) Development of Verilog Modules for Half Adder in Any of the 3 Modeling Styles

### 1. Introduction to Half Adders and Verilog

This experiment focuses on designing a Half Adder, a fundamental combinational logic circuit, using the Verilog Hardware Description Language (HDL). We will explore different modeling styles within Verilog to represent this circuit.

#### Key Concepts:

*   **Half Adder:** A combinational logic circuit that adds two single binary digits. It produces a **sum** output and a **carry** output.
    *   **Inputs:** Two single binary bits, typically denoted as `A` and `B`.
    *   **Outputs:**
        *   `Sum (S)`: The least significant bit of the addition.
        *   `Carry Out (Cout)`: The most significant bit of the addition.

*   **Verilog HDL:** A hardware description language used to model and design digital systems. It allows for the description of digital circuits at different levels of abstraction.

#### Truth Table for a Half Adder:

| A | B | Sum (S) | Carry Out (Cout) |
|---|---|---------|------------------|
| 0 | 0 | 0       | 0                |
| 0 | 1 | 1       | 0                |
| 1 | 0 | 1       | 0                |
| 1 | 1 | 0       | 1                |

From the truth table, we can derive the Boolean expressions for the Sum and Carry Out:

*   **Sum (S):** $S = A \oplus B$ (A XOR B)
*   **Carry Out (Cout):** $Cout = A \cdot B$ (A AND B)

### 2. Verilog Modeling Styles for Half Adder

Verilog offers several ways to describe hardware. For a Half Adder, we will explore three primary modeling styles:

#### 2.1. Behavioral Modeling

Behavioral modeling describes the functionality of a circuit using sequential statements (like `always` blocks) and procedural constructs. It focuses on *what* the circuit does rather than *how* it is implemented with gates.

**Key Verilog Constructs:**

*   `module` ... `endmodule`: Defines a Verilog module.
*   `input`, `output`: Declares module ports.
*   `reg`: A data type used for variables that hold values between procedural assignments (often used for outputs driven by `always` blocks).
*   `wire`: A data type used for connections between modules or for signals driven by continuous assignments.
*   `always @(*)`: A procedural block that executes whenever any of the signals in the sensitivity list (indicated by `*` for all inputs) change their value.
*   `begin` ... `end`: Groups multiple statements within a procedural block.
*   `=` (Blocking Assignment): Assigns a value immediately.
*   `<=` (Non-blocking Assignment): Assigns a value at the end of the current time step. For combinational logic, blocking assignments are typically preferred.
*   `assign`: Used for continuous assignments (dataflow modeling).
*   `xor`, `and`: Verilog operators for XOR and AND operations.

**Verilog Module (Behavioral Style):**

```verilog
// Module: half_adder_behavioral
// Description: Half adder implemented using behavioral modeling.

module half_adder_behavioral (
    input  wire a,
    input  wire b,
    output reg  sum,
    output reg  carry_out
);

    // The always block triggers on any change in inputs 'a' or 'b'.
    always @(*) begin
        // Calculate sum using XOR
        sum = a ^ b;
        // Calculate carry_out using AND
        carry_out = a & b;
    end

endmodule
```

**Explanation:**

*   The `always @(*)` block is sensitive to changes in both `a` and `b`.
*   Inside the block, the `sum` is calculated using the XOR operator (`^`), and `carry_out` is calculated using the AND operator (`&`).
*   The outputs `sum` and `carry_out` are declared as `reg` because they are assigned values within a procedural block.

**Reference:**
*   **Bhasker, J. (2001). *Verilog HDL Synthesis: A Practical Primer*.** Chapter 3 discusses behavioral modeling and the `always` construct.

#### 2.2. Dataflow Modeling

Dataflow modeling describes a circuit based on the flow of data through it. It uses continuous assignments (`assign` statements) to define the relationships between signals. This style often directly translates to the Boolean expressions.

**Verilog Module (Dataflow Style):**

```verilog
// Module: half_adder_dataflow
// Description: Half adder implemented using dataflow modeling.

module half_adder_dataflow (
    input  wire a,
    input  wire b,
    output wire sum,
    output wire carry_out
);

    // Continuous assignment for Sum (A XOR B)
    assign sum = a ^ b;

    // Continuous assignment for Carry Out (A AND B)
    assign carry_out = a & b;

endmodule
```

**Explanation:**

*   The `assign` statements create continuous assignments. The `sum` output will always be the result of `a ^ b`, and `carry_out` will always be the result of `a & b`.
*   Whenever `a` or `b` changes, the `assign` statements immediately update the `sum` and `carry_out` outputs.
*   Outputs are declared as `wire` as they are driven by continuous assignments.

**Reference:**
*   **Palnitkar, S. (2nd Edn.). *Verilog HDL: A Guide to Digital Design and Synthesis*.** Chapter 4 covers dataflow modeling and the `assign` statement.
*   **Roth C.H. (V). *Fundamentals of Logic Design*.** This text provides the foundational Boolean expressions that are directly mapped in dataflow modeling.

#### 2.3. Structural Modeling

Structural modeling describes a circuit as an interconnection of lower-level modules or primitive gates. It mimics how a circuit would be wired on a breadboard or implemented with ICs.

**Verilog Module (Structural Style - using primitive gates):**

```verilog
// Module: half_adder_structural
// Description: Half adder implemented using structural modeling with primitive gates.

module half_adder_structural (
    input  wire a,
    input  wire b,
    output wire sum,
    output wire carry_out
);

    // Instantiate a XOR gate for the sum
    xor gate_xor (
        .y(sum),      // Output of the XOR gate
        .a(a),        // Input 1 to the XOR gate
        .b(b)         // Input 2 to the XOR gate
    );

    // Instantiate an AND gate for the carry out
    and gate_and (
        .y(carry_out), // Output of the AND gate
        .a(a),         // Input 1 to the AND gate
        .b(b)          // Input 2 to the AND gate
    );

endmodule
```

**Explanation:**

*   We directly instantiate Verilog's built-in gate primitives: `xor` and `and`.
*   Each gate instance is given a name (e.g., `gate_xor`, `gate_and`).
*   Connections are made using named port mapping (e.g., `.y(sum)` connects the output of the gate (`y`) to the module's `sum` port).
*   All ports are declared as `wire` as they represent physical connections.

**Alternative Structural Modeling (using another module):**

If you had a separate module for a 2-input XOR gate and a 2-input AND gate, you could instantiate them as well.

```verilog
// Assume these modules are defined elsewhere:
// module my_xor (input in1, input in2, output out); ... endmodule
// module my_and (input in1, input in2, output out); ... endmodule

module half_adder_structural_module (
    input  wire a,
    input  wire b,
    output wire sum,
    output wire carry_out
);

    // Instantiate a custom XOR module
    my_xor xor_instance (
        .in1(a),
        .in2(b),
        .out(sum)
    );

    // Instantiate a custom AND module
    my_and and_instance (
        .in1(a),
        .in2(b),
        .out(carry_out)
    );

endmodule
```

**Reference:**
*   **Bhasker, J. (2001). *Verilog HDL Synthesis: A Practical Primer*.** Chapter 2 covers structural modeling and gate primitives.
*   **Palnitkar, S. (2nd Edn.). *Verilog HDL: A Guide to Digital Design and Synthesis*.** Chapter 5 discusses structural modeling and module instantiation.

### 3. Connection to Course Outcomes

*   **CO1: Design and demonstrate the functioning of various combinational and sequential circuits using ICs (Knowledge Level: K3)**
    *   This experiment lays the groundwork for understanding combinational circuits. Although we are using Verilog and not physical ICs directly, the Verilog code represents the design that would eventually be implemented on an FPGA (which acts as a programmable IC). The Boolean expressions and truth tables are the core of the design demonstration.

*   **CO2: Apply an industry compatible hardware description language to implement digital circuits (Knowledge Level: K3)**
    *   This is directly addressed by learning and applying Verilog to design a functional Half Adder. You are using an "industry-compatible HDL." Understanding the different modeling styles is crucial for effective Verilog usage.

*   **CO3: Implement digital circuits on FPGA boards and connect external hardware to the boards (Knowledge Level: K3)**
    *   While this specific topic focuses on Verilog *module development*, the next logical step in the lab would be to synthesize these Verilog modules and implement them on an FPGA. The Verilog code written here is the direct input for FPGA synthesis and place-and-route tools.

*   **CO4: Function effectively as an individual and in a team to accomplish the given task. (Knowledge Level: K2)**
    *   Developing Verilog modules requires analytical thinking and problem-solving skills, contributing to effective functioning. Teamwork in a lab setting would involve discussing different modeling styles, debugging code, and comparing results.

### 4. Important Points to Remember

*   **Understanding the Trade-offs:** Each modeling style has its advantages.
    *   **Behavioral:** Easiest to write, good for describing complex algorithms or high-level functionality. Might be less direct for synthesis of specific logic.
    *   **Dataflow:** Concise and directly maps to Boolean expressions, often leads to efficient synthesis for simple combinational logic.
    *   **Structural:** Provides explicit control over the logic implementation, useful for understanding gate-level structure and for timing-critical designs or specific optimizations.
*   **`reg` vs. `wire`:**
    *   `reg` is used for variables that hold their value between procedural assignments (inside `always` blocks). Outputs driven by `always` blocks must be `reg`.
    *   `wire` is used for connections. It represents a physical connection. Outputs driven by `assign` statements or gate outputs are typically `wire`.
*   **Sensitivity List in `always` blocks:** For combinational logic, `always @(*)` is generally preferred to ensure the block re-evaluates whenever any of its inputs change. Explicitly listing all inputs is also correct but more verbose and error-prone.
*   **Blocking (`=`) vs. Non-blocking (`<=`) Assignments:** For combinational logic, blocking assignments are usually used. Non-blocking assignments are primarily for sequential logic (like flip-flops) to model simultaneous updates.
*   **Named Port Mapping:** Using `.port_name(signal_name)` in structural modeling is highly recommended for clarity and to avoid errors due to port order changes.

### 5. Practice Questions and Exercises

**Question 1:**
What are the Boolean expressions for the Sum and Carry Out of a Half Adder?
**Answer:**
Sum ($S$) = $A \oplus B$
Carry Out ($Cout$) = $A \cdot B$

**Question 2:**
In Verilog, which data type is typically used for an output signal driven by an `always @(*)` block?
**Answer:**
`reg`

**Question 3:**
Write a Verilog module for a Half Adder using **Dataflow** modeling.
**Answer:**
```verilog
module half_adder_dataflow_q3 (
    input  wire a,
    input  wire b,
    output wire sum,
    output wire carry_out
);

    assign sum = a ^ b;
    assign carry_out = a & b;

endmodule
```

**Question 4:**
Complete the following Verilog module for a Half Adder using **Structural** modeling, instantiating the primitive gates.

```verilog
// Module: half_adder_structural_q4
// Description: Half adder implemented using structural modeling with primitive gates.

module half_adder_structural_q4 (
    input  wire in1,
    input  wire in2,
    output wire s,
    output wire c
);

    // Instantiate XOR gate for sum 's'
    // Your code here

    // Instantiate AND gate for carry 'c'
    // Your code here

endmodule
```
**Answer:**
```verilog
// Module: half_adder_structural_q4
// Description: Half adder implemented using structural modeling with primitive gates.

module half_adder_structural_q4 (
    input  wire in1,
    input  wire in2,
    output wire s,
    output wire c
);

    // Instantiate XOR gate for sum 's'
    xor gate_xor (
        .y(s),
        .a(in1),
        .b(in2)
    );

    // Instantiate AND gate for carry 'c'
    and gate_and (
        .y(c),
        .a(in1),
        .b(in2)
    );

endmodule
```

**Question 5:**
Consider the following Verilog code snippet. What type of modeling is being used, and what is the expected output for `my_sum` and `my_carry` when `input_a = 1` and `input_b = 1`?

```verilog
module test_half_adder (
    input  wire input_a,
    input  wire input_b,
    output wire my_sum,
    output wire my_carry
);

    assign my_sum = input_a ^ input_b;
    assign my_carry = input_a & input_b;

endmodule
```
**Answer:**
*   **Modeling Style:** Dataflow modeling.
*   **Expected Output:**
    *   `my_sum` = `1 ^ 1` = `0`
    *   `my_carry` = `1 & 1` = `1`

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 6. References for Further Study

*   **Verilog HDL Synthesis: A Practical Primer by J. Bhasker (B. S. Publications, 2001)**
    *   Essential for understanding how Verilog code is translated into actual hardware.
*   **Fundamentals of Logic Design by Roth C.H (Jaico Publishers., V)**
    *   Provides the foundational theory of combinational and sequential logic, essential for understanding the function of circuits like the half adder.
*   **Verilog HDL: A Guide to Digital Design and Synthesis by Palnitkar S. (Prentice Hall;, 2nd Edn.)**
    *   A comprehensive guide to Verilog, covering various modeling styles and synthesis concepts in detail.

This concludes the study notes for developing Verilog modules for a Half Adder. The next step would be to simulate these modules to verify their functionality and then synthesize them for FPGA implementation.